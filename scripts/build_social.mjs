/* ============================================================
   build_social.mjs — the GitHub social preview
   Usage:  node scripts/build_social.mjs

   Writes assets/social-preview.png (1280x640). GitHub offers no API for
   this image: it is uploaded by hand in Settings -> General -> Social
   preview. The script exists so that the file can be rebuilt after the
   start screen, the palette or the claims change, instead of being the
   one asset nobody can reproduce (same reasoning as build_og.mjs).

   Two shots with the same Chromium the DOM tests use:
   1. the real start screen, opened from file:// with English explanations
      on a fresh profile, clipped to the content column plus a sliver of
      the rail;
   2. scripts/social-template.html with that shot injected, at 1280x640.
   ============================================================ */
import { mkdtempSync, readFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { fileURLToPath, pathToFileURL } from "node:url";
import { dirname, join } from "node:path";
import { chromium } from "@playwright/test";
import { wymiaryPng } from "./png-size.mjs";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const SZABLON = join(ROOT, "scripts", "social-template.html");
const WYJSCIE = join(ROOT, "assets", "social-preview.png");

/* The size GitHub recommends for the social preview. */
const SZEROKOSC = 1280;
const WYSOKOSC = 640;

/* The app is shot at a desktop width where the rail is visible; the clip
   keeps its last 40px as an edge and the content column to the right. */
const APP_VIEWPORT = { width: 1100, height: 760 };
const APP_CLIP = { x: 232, y: 0, width: 868, height: 760 };

const robocze = mkdtempSync(join(tmpdir(), "social-"));
const zrzut = join(robocze, "start.png");

const przegladarka = await chromium.launch();
try {
  const app = await przegladarka.newPage({ viewport: APP_VIEWPORT, deviceScaleFactor: 2 });
  await app.goto(pathToFileURL(join(ROOT, "index.html")).href, { waitUntil: "load" });
  await app.getByRole("button", { name: "English", exact: true }).click();
  await app.getByRole("heading", { level: 1 }).filter({ hasText: "German" }).waitFor();
  await app.evaluate(() => document.fonts.ready);
  await app.screenshot({ path: zrzut, clip: APP_CLIP });

  const karta = await przegladarka.newPage({
    viewport: { width: SZEROKOSC, height: WYSOKOSC },
    deviceScaleFactor: 1
  });
  await karta.goto(pathToFileURL(SZABLON).href, { waitUntil: "load" });
  await karta.evaluate(async (src) => {
    const img = document.getElementById("shot");
    img.src = src;
    await img.decode();
  }, pathToFileURL(zrzut).href);
  await karta.evaluate(() => document.fonts.ready);
  await karta.screenshot({ path: WYJSCIE, type: "png" });
} finally {
  await przegladarka.close();
  rmSync(robocze, { recursive: true, force: true });
}

const wymiary = wymiaryPng(WYJSCIE);
if (!wymiary || wymiary.szerokosc !== SZEROKOSC || wymiary.wysokosc !== WYSOKOSC) {
  console.error(`BŁĄD — ${WYJSCIE}: oczekiwano ${SZEROKOSC}x${WYSOKOSC}, jest ${wymiary ? `${wymiary.szerokosc}x${wymiary.wysokosc}` : "nie-PNG"}.`);
  process.exit(1);
}
const kb = Math.round(readFileSync(WYJSCIE).length / 1024);
console.log(`OK — assets/social-preview.png: ${wymiary.szerokosc}x${wymiary.wysokosc}, ${kb} KB.`);
