import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { loadEngine, VERBS } from './_harness.mjs';

const keys = ['praes', 'praet', 'perf', 'plusq', 'fut1', 'fut2', 'konj2', 'konj2Verg', 'konj1', 'imper'];
const persons = ['ich', 'du', 'er/sie/es', 'wir', 'ihr', 'sie/Sie'];
const verbs = ['machen', 'arbeiten', 'tanzen', 'wandern', 'fahren', 'nehmen', 'sein', 'haben',
  'werden', 'können', 'wissen', 'aufstehen', 'sich waschen', 'studieren', 'besuchen', 'bringen'];
const V = loadEngine({ files: VERBS }).sandbox.Verbs;

test('German tense and person contract', () => {
  assert.deepEqual(Array.from(V.TENSES, tense => tense.key), keys);
  assert.deepEqual(Array.from(V.PERSONS), persons);
});

test('conjugation returns six positions or null, unknown tense returns null', () => {
  for (const verb of verbs) {
    for (const key of keys) {
      const forms = V.conjugate(verb, key);
      assert.ok(forms === null || (Array.isArray(forms) && forms.length === persons.length));
      if (forms) assert.ok(Array.from(forms).every(form => form === null || typeof form === 'string'));
    }
  }
  assert.equal(V.conjugate('machen', 'unknown'), null);
  assert.deepEqual(Array.from(V.conjugate('machen', 'praes')), ['mache', 'machst', 'macht', 'machen', 'macht', 'machen']);
});

test('golden fixture contains sixteen complete German paradigms', () => {
  const golden = JSON.parse(readFileSync(new URL('./verbs-de-golden.json', import.meta.url), 'utf8'));
  assert.deepEqual(Object.keys(golden), verbs);
  for (const table of Object.values(golden)) {
    assert.deepEqual(Object.keys(table), keys);
    for (const forms of Object.values(table)) {
      assert.equal(forms.length, persons.length);
      assert.ok(forms.every(form => form === null || (typeof form === 'string' && form.length > 0)));
    }
    assert.equal(table.imper[0], null);
    assert.equal(table.imper[2], null);
  }
  assert.equal(golden.machen.imper[1], 'mach');
  assert.deepEqual(golden.können.imper, [null, null, null, null, null, null]);
  assert.deepEqual(golden.wandern.konj1, ['wandere', 'wanderst', 'wandere', 'wandern', 'wandert', 'wandern']);
});
