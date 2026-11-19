/* ============================================================
   The progress screen.

   Levels arrive lazily, so entering this screen straight after opening the
   course used to read "0 lessons of 0" for every level not opened yet: a
   number that looked like data and was only an unloaded file. And a profile
   with no answers showed "0% correct", a failure nobody had committed.
   ============================================================ */
const { test, expect } = require("@playwright/test");

async function trasa(page, r) {
  await page.goto("/index.html#/" + r);
  await page.waitForFunction(() => window.App && window.Core && window.Core.registry.levels.length > 0);
}

test("every level shows its real lesson count, not 0 of 0", async ({ page }) => {
  /* Entered from inside the course: a direct load of #/progressi is redrawn
     by the boot after A1 arrives, which hid the bug. */
  await trasa(page, "percorso");
  await page.waitForFunction(() => window.Core.registry.loaded.A1 === true);
  await page.evaluate(() => window.App.go("progressi"));
  const rows = page.locator(".prog-level");
  await expect(rows).toHaveCount(7);
  // wait for the lazy levels to be drawn again
  await expect(rows.nth(6).locator(".prog-level__sub")).toHaveText(/^0 z [1-9]\d* lekcji$/);
  for (let i = 0; i < 7; i++) {
    // the suite runs in Polish: "{done} z {total} lekcji"
    await expect(rows.nth(i).locator(".prog-level__sub")).not.toHaveText(/ z 0 /);
  }
});

test("a profile with no answers shows a dash and an empty chart that leads to today", async ({ page }) => {
  await trasa(page, "progressi");
  await expect(page.locator(".prog-stat").nth(2).locator("b")).toHaveText("—");
  await expect(page.locator(".prog-bar")).toHaveCount(0);
  await page.locator(".prog-chart--empty a").click();
  await expect(page).toHaveURL(/#\/oggi/);
});

test("with answers, accuracy is a percentage and today's bar is marked", async ({ page }) => {
  await trasa(page, "progressi");
  await page.evaluate(() => {
    const s = window.Core.state;
    s.stats.correct = 3; s.stats.wrong = 1;
    const d = new Date();
    const k = d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
    s.stats.days[k] = 4;
    window.App.go("percorso"); window.App.go("progressi");
  });
  await expect(page.locator(".prog-stat").nth(2).locator("b")).toHaveText("75%");
  await expect(page.locator(".prog-bar")).toHaveCount(14);
  const today = page.locator(".prog-bar").last();
  await expect(today).toHaveClass(/prog-bar--today/);
  await expect(today.locator(".prog-bar__n")).toHaveText("4");
  await expect(page.locator(".prog-chart__sum")).toHaveText(/^4 \S+ w 14 dni, \S+ w 1 z 14 dni$/);
});

/* The same axe gate the settings screen has (axe-settings.spec.js), on the
   populated screen: an empty chart would pass every rule without being
   checked. */
const { readFileSync } = require("node:fs");
const { join } = require("node:path");
const AXE = readFileSync(join(__dirname, "..", "..", "node_modules", "axe-core", "axe.min.js"), "utf8");
const TAGS = ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"];

for (const theme of ["light", "dark"]) {
  test(`the progress screen: no axe violations in the ${theme} theme`, async ({ page }) => {
    await page.addInitScript(AXE);
    await trasa(page, "percorso");
    await page.evaluate((th) => {
      const s = window.Core.state;
      s.stats.correct = 40; s.stats.wrong = 10; s.streak.count = 3; s.streak.best = 5;
      const d = new Date();
      const k = d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
      s.stats.days[k] = 12;
      document.documentElement.setAttribute("data-theme", th);
      window.App.go("progressi");
    }, theme);
    await expect(page.locator(".prog-bar")).toHaveCount(14);
    await expect(page.locator(".prog-level__sub").last()).toHaveText(/^0 z [1-9]\d* lekcji$/);
    // the palette crossfades; same known transition wait as axe-settings.spec.js
    await page.waitForTimeout(700);
    const r = await page.evaluate(async (tags) => {
      const res = await window.axe.run(document, { runOnly: { type: "tag", values: tags } });
      return { v: res.violations.map((x) => ({ id: x.id, help: x.help, n: x.nodes.length, t: x.nodes.map((y) => y.target.join(" ") + " " + (y.any[0] && y.any[0].message)) })), passes: res.passes.length };
    }, TAGS);
    expect(r.passes, "axe checked nothing").toBeGreaterThan(10);
    expect(r.v, JSON.stringify(r.v, null, 2)).toEqual([]);
  });
}
