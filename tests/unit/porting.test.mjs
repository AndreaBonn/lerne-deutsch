import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { checkCore } from '../../scripts/check_porting.mjs';
import { buildBundle } from '../../scripts/review_lot.mjs';
import { hashBundle } from '../../scripts/review-bundle.mjs';
import { createHash } from 'node:crypto';
import { fixture, put, cli, target } from './fixtures/porting/helpers.mjs';

const check = (root, ...args) => cli('check_porting.mjs', ['--root', root, ...args]);

function savePass(root, lang) {
  const bundle = buildBundle({ root, unitId: 'a1-u01', lang });
  const bundleHash = createHash('sha256').update(JSON.stringify(bundle)).digest('hex');
  put(root, `specs/german-course/reviews/a1-u01-${lang}.json`,
    JSON.stringify({ unit: 'a1-u01', lang, verdict: 'pass', bundleHash }));
}

test('core rejects missing original exercise types despite matching counts', t => {
  const root = fixture(t);
  assert.equal(check(root, '--unit', 'a1-u01').status, 0);
  put(root, 'data/core/a1-01.js', "LINGUAI.addUnits('A1', [{id:'a1-u01',lessons:[{id:'a1-u01-l1',exercises:[{t:'fill'},{t:'fill'}]}]}]);");
  const result = check(root, '--unit', 'a1-u01');
  assert.equal(result.status, 1);
  assert.match(result.stdout, /Missing exercise types: mcq/);
});

test('core CLI rejects Italian values and accepts German values', t => {
  const german = check(fixture(t), '--unit', 'a1-u01', '--stage', 'core');
  assert.equal(german.status, 0, german.stderr);
  assert.match(german.stdout, /core: pass/);
  const italian = check(fixture(t, 'italian'), '--unit', 'a1-u01', '--stage', 'core');
  assert.equal(italian.status, 1);
  assert.match(italian.stdout, /stopwords|letters/);
});

test('core checks exact lesson distribution and ±15 percent inclusive bounds', () => {
  const expected = { level: 'A1', lessonCount: 1, lessons: { l1: { exercises: 20 } } };
  const unit = count => ({ id: 'a1-u01', lessons: [{ id: 'l1', exercises: Array.from({ length: count }, () => ({ t: 'fill' })) }] });
  assert.deepEqual(checkCore(unit(17), expected), []);
  assert.deepEqual(checkCore(unit(23), expected), []);
  assert.match(checkCore(unit(16), expected).join(' '), /exercises/);
  assert.match(checkCore(unit(24), expected).join(' '), /exercises/);
  assert.match(checkCore({ id: 'a1-u01', lessons: [] }, expected).join(' '), /lesson/);
  assert.match(checkCore({ ...unit(20), lessons: [{ ...unit(20).lessons[0], id: 'other' }] }, expected).join(' '), /l1/);
});

test('missing unit, extra units and changed level distribution are incomplete', t => {
  const root = fixture(t);
  assert.equal(check(root).status, 0);
  assert.equal(check(root, '--unit', 'a1-u99').status, 1);
  put(root, 'data/core/extra.js', "LINGUAI.addUnits('A1', [{ id:'a1-u02', lessons:[] }]);");
  const result = check(root);
  assert.equal(result.status, 1);
  assert.match(result.stdout, /distribution|Unexpected/);
  put(root, 'data/core/curriculum-index.js', "LINGUAI.registerLevel({code:'A2',dataFiles:['a1-01.js']});");
  put(root, 'data/core/a1-01.js', "LINGUAI.addUnits('A2', [{id:'a1-u01',lessons:[]}]);");
  put(root, 'data/core/extra.js', '');
  assert.equal(check(root, '--unit', 'a1-u01').status, 1);
});

test('language stages need overlays and review needs pass for every requested language', t => {
  const root = fixture(t);
  assert.equal(check(root, '--stage', 'en,review').status, 1);
  put(root, 'data/i18n/en/a1-01.js', "LINGUAI.addStrings('en', {});");
  savePass(root, 'en');
  assert.equal(check(root, '--stage', 'en,review').status, 0);
  assert.equal(check(root, '--stage', 'en,pl,review').status, 1);
  put(root, 'data/i18n/it/a1-01.js', "LINGUAI.addStrings('it', {});");
  savePass(root, 'it');
  assert.equal(check(root, '--stage', 'review').status, 0);
  put(root, 'data/i18n/it/a1-01.js', "LINGUAI.addStrings('it', {'unit:a1-u01': {title:'Changed'}});");
  const stale = check(root, '--stage', 'review');
  assert.equal(stale.status, 1);
  assert.match(stale.stdout, /stale verdict/);
  put(root, 'specs/german-course/reviews/a1-u01-it.json', '{');
  assert.equal(check(root, '--stage', 'review').status, 1);
});

test('review rejects a pass verdict after neutral content changes', t => {
  const root = fixture(t);
  put(root, 'data/i18n/en/a1-01.js', "LINGUAI.addStrings('en', {});");
  savePass(root, 'en');
  assert.equal(check(root, '--stage', 'en,review').status, 0);
  const path = 'data/core/a1-01.js';
  put(root, path, readFileSync(new URL('./fixtures/porting/german/data/core/a1-01.js', import.meta.url), 'utf8')
    .replace('Guten Tag', 'Guten Morgen'));
  const result = check(root, '--stage', 'en,review');
  assert.equal(result.status, 1);
  assert.match(result.stdout, /stale verdict/);
});

test('review rejects legacy verdicts without a bundle hash', t => {
  const root = fixture(t);
  put(root, 'data/i18n/en/a1-01.js', "LINGUAI.addStrings('en', {});");
  savePass(root, 'en');
  assert.equal(check(root, '--stage', 'en,review').status, 0);
  put(root, 'specs/german-course/reviews/a1-u01-en.json', JSON.stringify({unit:'a1-u01',lang:'en',verdict:'pass'}));
  const result = check(root, '--stage', 'en,review');
  assert.equal(result.status, 1);
  assert.match(result.stdout, /stale verdict/);
});

test('human stage is n/a below B2 and requires an ESITO line above it', t => {
  const root = fixture(t);
  assert.equal(check(root, '--stage', 'human').status, 0);
  const advanced = { ...target, levels: { B2: { units: 1, lessons: 1 } }, units: {
    'b2-u01': { ...target.units['a1-u01'], level: 'B2', lessons: { 'b2-u01-l1': { exercises: 2 } } }
  } };
  put(root, 'scripts/porting-target.json', JSON.stringify(advanced));
  put(root, 'data/core/curriculum-index.js', "LINGUAI.registerLevel({code:'B2',dataFiles:['a1-01.js']});");
  put(root, 'data/core/a1-01.js', "LINGUAI.addUnits('B2', [{id:'b2-u01',lessons:[{id:'b2-u01-l1',exercises:[]}]}]);");
  assert.equal(check(root, '--stage', 'human').status, 1);
  put(root, 'specs/german-course/reviews/b2-u01-human.md', '<!-- picked lessons -->\nb2-u01-l1\n');
  assert.equal(check(root, '--stage', 'human').status, 1);
  put(root, 'specs/german-course/reviews/b2-u01-human.md', '<!-- picked lessons -->\nb2-u01-l1\nESITO: ok\n');
  assert.equal(check(root, '--stage', 'human').status, 0);
});

test('curriculum must list target units', t => {
  const root = fixture(t);
  assert.equal(check(root, '--curriculum').status, 1);
  put(root, 'specs/german-course/curriculum.md', 'a1-u010');
  assert.equal(check(root, '--curriculum').status, 1);
  put(root, 'specs/german-course/curriculum.md', '# Curriculum\na1-u01');
  assert.equal(check(root, '--curriculum').status, 0);
  const help = check(root, '--help');
  assert.equal(help.status, 0);
  assert.match(help.stdout, /ESITO:|audio/);
});

test('invalid options, missing stage values and malformed data fail clearly', t => {
  const root = fixture(t);
  for (const args of [['--stage', 'typo'], ['--stage'], ['--unit', '../x'], ['--unknown'], ['--seed', '1']]) {
    const result = check(root, ...args);
    assert.equal(result.status, 1);
    assert.ok(result.stderr.trim());
  }
  assert.equal(check(root, '--stage', 'core').status, 0);
  put(root, 'data/core/a1-01.js', 'this is invalid js');
  assert.equal(check(root).status, 1);
});

test('a selected unit cannot pass with duplicate registrations', t => {
  const root = fixture(t);
  assert.equal(check(root, '--unit', 'a1-u01').status, 0);
  put(root, 'data/core/duplicate.js', readFileSync(new URL('./fixtures/porting/german/data/core/a1-01.js', import.meta.url), 'utf8'));
  const result = check(root, '--unit', 'a1-u01');
  assert.equal(result.status, 1);
  assert.match(result.stdout, /Duplicate unit/);
});

/* The phase gate is "check:porting -- --level A1": every unit of the level,
   every language, every review. Without the option the gate could only be
   run unit by unit, and a level with one forgotten language passed. */
test('--level checks every unit of the level in every language and its reviews', t => {
  const root = fixture(t);
  const missing = check(root, '--level', 'A1');
  assert.equal(missing.status, 1);
  assert.match(missing.stdout, /a1-u01 it: Missing it overlay/);
  for (const lang of ['it', 'en', 'es', 'fr', 'pl']) {
    put(root, `data/i18n/${lang}/a1-01.js`, `LINGUAI.addStrings('${lang}', {});`);
    savePass(root, lang);
  }
  const full = check(root, '--level', 'A1');
  assert.equal(full.status, 0, full.stdout);
  assert.match(full.stdout, /a1-u01 pl: pass/);
  assert.match(full.stdout, /a1-u01 review: pass/);
  put(root, 'specs/german-course/reviews/a1-u01-fr.json', '{}');
  assert.equal(check(root, '--level', 'A1').status, 1);
  const unknown = check(root, '--level', 'B1');
  assert.equal(unknown.status, 1);
  assert.match(unknown.stdout + unknown.stderr, /B1/);
});

/* The audio stage: every sentence the unit speaks has its hash in the index
   and its mp3 on disk. The hash comes from assets/js/recordings.js, the same
   function the browser uses, so the stage cannot drift from what plays. */
function fnv(text) {
  let h = 0xcbf29ce484222325n;
  for (const byte of new TextEncoder().encode(text)) h = ((h ^ BigInt(byte)) * 0x100000001b3n) & 0xffffffffffffffffn;
  return h.toString(16).padStart(16, '0');
}

test('audio stage fails without recordings and passes when every spoken string has one', t => {
  const root = fixture(t);
  const missing = check(root, '--unit', 'a1-u01', '--stage', 'audio');
  assert.equal(missing.status, 1);
  assert.match(missing.stdout, /a1-u01 audio: .*Missing recording.*die Straße/);
  const digest = fnv('die Straße');
  put(root, 'data/audio-index.js', `window.AUDIO_INDEX = "${digest}";`);
  const noFile = check(root, '--unit', 'a1-u01', '--stage', 'audio');
  assert.equal(noFile.status, 1, 'an index entry without the mp3 is still missing');
  put(root, `audio/${digest.slice(0, 2)}/${digest}.mp3`, '');
  assert.equal(check(root, '--unit', 'a1-u01', '--stage', 'audio').status, 1, 'an empty mp3 is not a recording');
  put(root, `audio/${digest.slice(0, 2)}/${digest}.mp3`, 'x');
  put(root, 'data/audio-index.js', 'window.AUDIO_INDEX = ');
  const broken = check(root, '--unit', 'a1-u01', '--stage', 'audio');
  assert.equal(broken.status, 1);
  assert.match(broken.stdout, /a1-u01 audio: .*audio-index/, 'a broken index is a stage error, not a crash');
  put(root, 'data/audio-index.js', `window.AUDIO_INDEX = "${digest}";`);
  const ok = check(root, '--unit', 'a1-u01', '--stage', 'audio');
  assert.equal(ok.status, 0, ok.stdout + ok.stderr);
  assert.match(ok.stdout, /a1-u01 audio: pass/);
});

test('spoken strings follow the extract_strings rules', async () => {
  const { spokenStrings } = await import('../../scripts/spoken-strings.mjs');
  const unit = { lessons: [{
    vocab: [{ it: 'der  Tisch' }], grammar: { examples: [{ it: 'Das ist gut.' }] },
    dialogue: { lines: [{ it: 'Hallo!' }, { it: 'Hi!' }] },
    exercises: [{ t: 'fill', a: ['x'] }, { t: 'listen', it: 'Ich höre.', alt: ['Ich hör.'] },
      { t: 'mcq', say: 'Sag es.' }, { t: 'dialogue', lines: [{ sp: 'A', it: 'Wie geht es?' }, { sp: 'TY', choices: ['Gut.'] }] }]
  }], test: { exercises: [{ t: 'speak', it: 'Danke schön.' }] } };
  const { primary, other } = spokenStrings(unit);
  assert.deepEqual(primary.sort(), ['Danke schön.', 'Das ist gut.', 'Gut.', 'Hi!', 'Ich hör.', 'Ich höre.', 'Sag es.', 'der Tisch'].sort());
  assert.deepEqual(other.sort(), ['Hallo!', 'Wie geht es?'].sort());
});

test('audio stage refuses a unit with nothing to check', t => {
  const root = fixture(t);
  put(root, 'data/core/a1-01.js', "globalThis.LINGUAI.addUnits('A1', [{ id: 'a1-u01', lessons: [{ id: 'a1-u01-l1', titleIt: 'Leer', exercises: [{ t: 'fill', a: 'x' }, { t: 'mcq', a: 0 }] }] }]);");
  const empty = check(root, '--unit', 'a1-u01', '--stage', 'audio');
  assert.equal(empty.status, 1);
  assert.match(empty.stdout, /no spoken strings/);
});

/* A fail verdict the user chose to keep (Q-C1-D8 A) passes only while the
   content is the one that was archived: the archive carries its own bundle
   hash, so an edit after archiving goes red again. */
function saveArchivedFail(root, lang, archived) {
  const bundleHash = hashBundle(buildBundle({ root, unitId: 'a1-u01', lang }));
  put(root, `specs/german-course/reviews/a1-u01-${lang}.json`, JSON.stringify({
    unit: 'a1-u01', lang, verdict: 'fail', bundleHash: 'older-round',
    findings: [{ path: '$', kind: 'level', msg: 'too easy for C1' }],
    archived: archived === undefined ? { decision: 'Q-C1-D8', bundleHash } : archived
  }));
}

test('review accepts an archived fail verdict while the content is unchanged', t => {
  const root = fixture(t);
  put(root, 'data/i18n/en/a1-01.js', "LINGUAI.addStrings('en', {});");
  saveArchivedFail(root, 'en');
  const result = check(root, '--stage', 'en,review');
  assert.equal(result.status, 0, result.stdout);
  assert.match(result.stdout, /pass, archived \(a1-u01-en Q-C1-D8\)/);
});

test('review rejects an archived fail verdict after the content changes', t => {
  const root = fixture(t);
  put(root, 'data/i18n/en/a1-01.js', "LINGUAI.addStrings('en', {});");
  saveArchivedFail(root, 'en');
  put(root, 'data/core/a1-01.js', readFileSync(new URL('./fixtures/porting/german/data/core/a1-01.js', import.meta.url), 'utf8')
    .replace('Guten Tag', 'Guten Morgen'));
  const result = check(root, '--stage', 'en,review');
  assert.equal(result.status, 1);
  assert.match(result.stdout, /stale archive/);
});

test('review rejects an archive without a decision', t => {
  const root = fixture(t);
  put(root, 'data/i18n/en/a1-01.js', "LINGUAI.addStrings('en', {});");
  saveArchivedFail(root, 'en', { bundleHash: 'x' });
  const result = check(root, '--stage', 'en,review');
  assert.equal(result.status, 1);
  assert.match(result.stdout, /Review is not pass/);
});

test('review rejects an archive without its bundle hash', t => {
  const root = fixture(t);
  put(root, 'data/i18n/en/a1-01.js', "LINGUAI.addStrings('en', {});");
  saveArchivedFail(root, 'en', { decision: 'Q-C1-D8' });
  const result = check(root, '--stage', 'en,review');
  assert.equal(result.status, 1);
  assert.match(result.stdout, /stale archive/);
});

test('an archive on a pass verdict is ignored: the pass is checked as usual', t => {
  const root = fixture(t);
  put(root, 'data/i18n/en/a1-01.js', "LINGUAI.addStrings('en', {});");
  savePass(root, 'en');
  const path = 'specs/german-course/reviews/a1-u01-en.json';
  const review = JSON.parse(readFileSync(join(root, path), 'utf8'));
  put(root, path, JSON.stringify({ ...review, archived: { decision: 'Q-C1-D8', bundleHash: 'whatever' } }));
  const ok = check(root, '--stage', 'en,review');
  assert.equal(ok.status, 0);
  assert.doesNotMatch(ok.stdout, /archived/, 'a real pass is not reported as archived');
  put(root, path, JSON.stringify({ ...review, bundleHash: 'old', archived: { decision: 'Q-C1-D8', bundleHash: review.bundleHash } }));
  const stale = check(root, '--stage', 'en,review');
  assert.equal(stale.status, 1, 'the archive does not rescue a stale pass');
  assert.match(stale.stdout, /stale verdict/);
});

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
