import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { checkCore } from '../../scripts/check_porting.mjs';
import { buildBundle } from '../../scripts/review_lot.mjs';
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

test('curriculum must list target units; audio is explicitly unsupported', t => {
  const root = fixture(t);
  assert.equal(check(root, '--curriculum').status, 1);
  put(root, 'specs/german-course/curriculum.md', 'a1-u010');
  assert.equal(check(root, '--curriculum').status, 1);
  put(root, 'specs/german-course/curriculum.md', '# Curriculum\na1-u01');
  assert.equal(check(root, '--curriculum').status, 0);
  const audio = check(root, '--stage', 'audio');
  assert.equal(audio.status, 1);
  assert.match(audio.stdout, /n\/a \(not implemented yet\)/);
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
