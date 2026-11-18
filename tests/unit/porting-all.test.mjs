import test from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { buildBundle } from '../../scripts/review_lot.mjs';
import { fixture, put, cli } from './fixtures/porting/helpers.mjs';
import { formatResult } from '../../scripts/porting-all.mjs';

const check = (root, ...args) => cli('check_porting.mjs', ['--root', root, ...args]);

function savePass(root, lang) {
  const bundle = buildBundle({ root, unitId: 'a1-u01', lang });
  const bundleHash = createHash('sha256').update(JSON.stringify(bundle)).digest('hex');
  put(root, `specs/german-course/reviews/a1-u01-${lang}.json`,
    JSON.stringify({ unit: 'a1-u01', lang, verdict: 'pass', bundleHash }));
}

/* The recording name of a string: FNV-1a 64, the same as recordings.js. */
function fnv(text) {
  let h = 0xcbf29ce484222325n;
  for (const byte of new TextEncoder().encode(text)) h = ((h ^ BigInt(byte)) * 0x100000001b3n) & 0xffffffffffffffffn;
  return h.toString(16).padStart(16, '0');
}

/* --all is the gate CI runs (Q7 A, 2026-11-18): every unit and every module
   the snapshot declares, on the structural stages. Review verdicts are
   printed as a report and never decide the exit code: the second judge is a
   model that may not answer, and a CI that is red by construction stops
   being read. A structural gap still fails. */
test('--all fails on a structural gap and reports missing reviews without failing', t => {
  const root = fixture(t);
  const digest = fnv('die Straße');
  put(root, 'data/audio-index.js', `window.AUDIO_INDEX = "${digest}";`);
  put(root, `audio/${digest.slice(0, 2)}/${digest}.mp3`, 'x');
  put(root, 'specs/german-course/curriculum.md', 'a1-u01');
  const gap = check(root, '--all');
  assert.equal(gap.status, 1);
  assert.match(gap.stdout, /a1-u01 it: Missing it overlay/);
  for (const lang of ['it', 'en', 'es', 'fr', 'pl']) put(root, `data/i18n/${lang}/a1-01.js`, `LINGUAI.addStrings('${lang}', {});`);
  const full = check(root, '--all');
  assert.equal(full.status, 0, full.stdout + full.stderr);
  assert.match(full.stdout, /a1-u01 audio: pass/);
  assert.match(full.stdout, /a1-u01 review \(report only\): Missing review/);
  assert.match(full.stdout, /curriculum: pass/);
  savePass(root, 'it');
  assert.match(check(root, '--all').stdout, /a1-u01 review \(report only\): Missing review: a1-u01-en/);
  assert.equal(check(root, '--all', '--level', 'A1').status, 1, '--all takes no other selector');
});


test('a report line shows its findings, an error line wins over the report', () => {
  assert.equal(formatResult({ label: 'x review (report only)', errors: [], report: ['Missing review: x-en'] }),
    'x review (report only): Missing review: x-en');
  assert.equal(formatResult({ label: 'x', errors: ['broken'], report: ['r'] }), 'x: broken');
  assert.equal(formatResult({ label: 'x', errors: [] }), 'x: pass');
  assert.equal(formatResult({ label: 'x', errors: [], notes: ['x-it N2'] }), 'x: pass, archived (x-it N2)');
});
