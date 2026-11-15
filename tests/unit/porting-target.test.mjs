import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createSnapshot, stableJson } from '../../scripts/snapshot_target.mjs';

test('snapshot counts lesson tests, exercise types and secondary modules', () => {
  const data = { levels: [{ code: 'A1', units: [{ id: 'a1-u01', lessons: [
    { id: 'a1-u01-l1', vocab: [{ it: 'Hund' }], dialogue: { lines: [{ it: 'Hallo' }] }, exercises: [{ t: 'mcq' }, { t: 'fill' }] }
  ], test: { id: 'a1-u01-test', exercises: [{ t: 'mcq' }] } }] }],
  library: [{ id: 'long' }], READINGS: [{ id: 'short' }, { id: 'long' }], WRITING: [{}],
  PHONETICS: [{ pairs: [{}, {}] }], INTERFERENCE: [{ for: ['en', 'pl'] }, { for: ['pl'] }],
  CILS: [{ id: 'sim', sezioni: [{ prove: [{}, {}] }] }] };
  const snapshot = createSnapshot(data);
  assert.deepEqual(snapshot.totals, { units: 1, lessons: 2, exercises: 3, vocab: 1, dialogueLines: 1, exerciseTypes: { mcq: 2, fill: 1 } });
  assert.equal(snapshot.units['a1-u01'].lessons['a1-u01-test'].exercises, 1);
  assert.deepEqual(snapshot.secondary, { readings: 1, library: 1, writing: 1, conversations: 0, chat: 0,
    minimalPairs: { sets: 1, pairs: 2 }, interference: { en: 1, pl: 2 },
    cils: { simulations: 1, sections: 1, prove: 2 } });
  assert.equal(stableJson({ z: 1, a: { z: 2, a: 3 } }), '{\n  "a": {\n    "a": 3,\n    "z": 2\n  },\n  "z": 1\n}\n');
});

test('committed original snapshot preserves measured course inventory', () => {
  const snapshot = JSON.parse(readFileSync(new URL('../../scripts/porting-target.json', import.meta.url), 'utf8'));
  assert.equal(snapshot.totals.units, 37);
  assert.equal(snapshot.totals.lessons, 170);
  assert.equal(snapshot.totals.exercises, 1735);
  assert.deepEqual(snapshot.totals.exerciseTypes, { cloze: 140, conj: 64, dialogue: 20, fill: 418,
    gender: 14, listen: 164, match: 89, mcq: 389, multi: 40, order: 87, speak: 170, trans: 140 });
  assert.deepEqual(snapshot.secondary, { chat: 6, cils: { prove: 8, sections: 8, simulations: 2 },
    conversations: 14, interference: { de: 31, en: 33, es: 30, fr: 32, pl: 30 }, library: 6,
    minimalPairs: { pairs: 21, sets: 5 }, readings: 24, writing: 6 });
  assert.deepEqual(Object.keys(snapshot.totals.exerciseTypes).sort(),
    ['cloze', 'conj', 'dialogue', 'fill', 'gender', 'listen', 'match', 'mcq', 'multi', 'order', 'speak', 'trans']);
  assert.deepEqual(Object.fromEntries(Object.entries(snapshot.levels).map(([k, v]) => [k, v.units])),
    { A1: 10, A2: 8, B1: 4, B2: 6, C1: 5, C2: 4 });
});
