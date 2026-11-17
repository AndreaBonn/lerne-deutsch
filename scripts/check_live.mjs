/* ============================================================
   check_live.mjs — whether the published site is the one in this repo
   Usage:  node scripts/check_live.mjs        (npm run check:live)

   Every other gate reads the working tree. This one reads the site that
   learners actually open, at `homepage` in package.json, and answers the
   question that matters after a release: did it arrive?

   Two checks, both silent failures elsewhere:
   - the SW_VERSION served in sw.js equals the local one. A deploy that did
     not land, or a stale CDN copy, leaves learners on the previous release
     and nothing on the page says so;
   - the og:image named by the served index.html answers 200 with an image
     type. check_ogtags.mjs proves the file exists on disk, not that the
     host serves it: a preview breaks only in somebody else's chat window.

   Exit 0 when both hold, 1 otherwise (problems listed on stderr). Network
   errors are reported as problems, not thrown: a site that cannot be
   reached is exactly what this gate is for.
   ============================================================ */
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = fileURLToPath(new URL('../', import.meta.url));
const SW_VERSION_RE = /var SW_VERSION = "([^"]+)";/;
const OG_IMAGE_RE = /<meta\s+property="og:image"\s+content="([^"]+)"/;

export function readSwVersion(text) {
  const m = SW_VERSION_RE.exec(text);
  return m ? m[1] : null;
}

export function readOgImage(html) {
  const m = OG_IMAGE_RE.exec(html);
  return m ? m[1] : null;
}

async function get(fetchImpl, url) {
  try {
    return { res: await fetchImpl(url, { cache: 'no-store' }) };
  } catch (err) {
    return { error: `${url}: ${err.message}` };
  }
}

async function checkVersion({ homepage, localVersion, fetchImpl }) {
  const url = new URL('sw.js', homepage).href;
  const { res, error } = await get(fetchImpl, url);
  if (error) return [error];
  if (!res.ok) return [`${url}: HTTP ${res.status}`];
  const served = readSwVersion(await res.text());
  if (served === null) return [`${url}: SW_VERSION not found in the served file`];
  return served === localVersion ? [] : [`SW_VERSION served ${served}, local ${localVersion}: the release has not arrived`];
}

async function checkOgImage({ homepage, fetchImpl }) {
  const { res, error } = await get(fetchImpl, homepage);
  if (error) return [error];
  if (!res.ok) return [`${homepage}: HTTP ${res.status}`];
  const image = readOgImage(await res.text());
  if (image === null) return [`${homepage}: no og:image in the served page`];
  const url = new URL(image, homepage).href;
  const got = await get(fetchImpl, url);
  if (got.error) return [got.error];
  if (!got.res.ok) return [`${url}: HTTP ${got.res.status}`];
  const type = got.res.headers.get('content-type') || '';
  return type.startsWith('image/') ? [] : [`${url}: served as ${type || 'no content-type'}, not an image`];
}

export async function checkLive({ homepage, localVersion, fetchImpl }) {
  const problems = [
    ...(await checkVersion({ homepage, localVersion, fetchImpl })),
    ...(await checkOgImage({ homepage, fetchImpl })),
  ];
  return { ok: problems.length === 0, problems };
}

async function main() {
  const { homepage } = JSON.parse(readFileSync(resolve(ROOT, 'package.json'), 'utf8'));
  const localVersion = readSwVersion(readFileSync(resolve(ROOT, 'sw.js'), 'utf8'));
  if (!homepage || !localVersion) {
    console.error('BŁĄD — brak "homepage" w package.json albo SW_VERSION w sw.js.');
    process.exit(1);
  }
  const { ok, problems } = await checkLive({ homepage, localVersion, fetchImpl: fetch });
  if (!ok) {
    console.error(`\nBŁĄD — ${homepage}:\n${problems.map((p) => `  - ${p}`).join('\n')}\n`);
    process.exit(1);
  }
  console.log(`OK — ${homepage} serwuje ${localVersion}, podgląd linku działa.`);
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  await main();
}
