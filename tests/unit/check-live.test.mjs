import test from 'node:test';
import assert from 'node:assert/strict';
import { checkLive, readSwVersion, readOgImage } from '../../scripts/check_live.mjs';

const HOME = 'https://example.org/impara-tedesco/';
const sw = (v) => `self.x = 1;\nvar SW_VERSION = "${v}";\n`;
const page = (img) => `<html><head><meta property="og:image" content="${img}"></head></html>`;

function fakeFetch(routes) {
  const calls = [];
  const impl = async (url) => {
    calls.push(url);
    if (!(url in routes)) return { ok: false, status: 404, headers: new Map(), text: async () => '' };
    const r = routes[url];
    if (r instanceof Error) throw r;
    return { ok: r.status === 200, status: r.status, headers: new Map([['content-type', r.type || 'text/html']]), text: async () => r.body || '' };
  };
  return { impl, calls };
}

const healthy = (served) => ({
  [`${HOME}sw.js`]: { status: 200, body: sw(served), type: 'text/javascript' },
  [HOME]: { status: 200, body: page(`${HOME}assets/og/cover.png`) },
  [`${HOME}assets/og/cover.png`]: { status: 200, type: 'image/png' },
});

test('readSwVersion finds the version and returns null without one', () => {
  assert.equal(readSwVersion(sw('v35.abc123')), 'v35.abc123');
  assert.equal(readSwVersion('var OTHER = "v1";'), null);
});

test('readOgImage reads the og:image content and returns null without the tag', () => {
  assert.equal(readOgImage(page('https://x/y.png')), 'https://x/y.png');
  assert.equal(readOgImage('<meta property="og:title" content="t">'), null);
});

test('checkLive passes when the served version equals the local one and the image is served', async () => {
  const { impl, calls } = fakeFetch(healthy('v35.abc'));
  const out = await checkLive({ homepage: HOME, localVersion: 'v35.abc', fetchImpl: impl });
  assert.deepEqual(out.problems, []);
  assert.equal(out.ok, true);
  assert.ok(calls.includes(`${HOME}assets/og/cover.png`));
});

test('checkLive fails and names both versions when the served one differs', async () => {
  const { impl } = fakeFetch(healthy('v34.old'));
  const out = await checkLive({ homepage: HOME, localVersion: 'v35.abc', fetchImpl: impl });
  assert.equal(out.ok, false);
  assert.match(out.problems.join('\n'), /v34\.old/);
  assert.match(out.problems.join('\n'), /v35\.abc/);
});

test('checkLive fails when the og image is missing or is not an image', async () => {
  const missing = healthy('v35.abc');
  delete missing[`${HOME}assets/og/cover.png`];
  const a = await checkLive({ homepage: HOME, localVersion: 'v35.abc', fetchImpl: fakeFetch(missing).impl });
  assert.equal(a.ok, false);
  assert.match(a.problems.join('\n'), /404/);

  const wrongType = healthy('v35.abc');
  wrongType[`${HOME}assets/og/cover.png`] = { status: 200, type: 'text/html' };
  const b = await checkLive({ homepage: HOME, localVersion: 'v35.abc', fetchImpl: fakeFetch(wrongType).impl });
  assert.equal(b.ok, false);
  assert.match(b.problems.join('\n'), /text\/html/);
});

test('checkLive reports a network error instead of throwing', async () => {
  const routes = healthy('v35.abc');
  routes[`${HOME}sw.js`] = new Error('ECONNREFUSED');
  const out = await checkLive({ homepage: HOME, localVersion: 'v35.abc', fetchImpl: fakeFetch(routes).impl });
  assert.equal(out.ok, false);
  assert.match(out.problems.join('\n'), /ECONNREFUSED/);
});

test('checkLive resolves a relative og:image against the homepage', async () => {
  const routes = healthy('v35.abc');
  routes[HOME] = { status: 200, body: page('assets/og/cover.png') };
  const out = await checkLive({ homepage: HOME, localVersion: 'v35.abc', fetchImpl: fakeFetch(routes).impl });
  assert.equal(out.ok, true);
});
