import test from 'node:test';
import assert from 'node:assert/strict';
import { rejectedLetters, italianStopwords, scanValues } from '../../scripts/neutral-letters.mjs';

test('explicit alphabet rejects long s and Kelvin sign but admits German and é', () => {
  assert.deepEqual(rejectedLetters('Straße Äpfel Café ÜBER'), []);
  assert.deepEqual(rejectedLetters('ſ K À'), ['ſ', 'K', 'À']);
});

test('German letters, é and nonletters are admitted; other letters are rejected', () => {
  assert.deepEqual(rejectedLetters('Straße ÄÖÜẞ café A-Z 123 €!?'), []);
  const rejected = 'àèìòùąęłżźćńśñçğşıåæøđčšžřůõ';
  assert.deepEqual(rejectedLetters(rejected), [...rejected]);
  assert.deepEqual(rejectedLetters(rejected.toUpperCase()), [...new Set(rejected.toUpperCase())].filter(c => c !== 'I'));
  assert.deepEqual(rejectedLetters('Łódź'), ['Ł', 'ó', 'ź']);
  assert.deepEqual(rejectedLetters('perché'), []);
});

test('Italian whole words are found case insensitively, never as substrings', () => {
  assert.deepEqual(italianStopwords('DELLA nella degli gli perché anche sono questo'),
    ['della', 'nella', 'degli', 'gli', 'perché', 'anche', 'sono', 'questo']);
  assert.deepEqual(italianStopwords('Sonnenschein gliedern questoso'), []);
  assert.deepEqual(italianStopwords('«Perché», della!'), ['perché', 'della']);
});

test('scanValues reports nested value paths, ignores keys and nonstrings', () => {
  assert.deepEqual(scanValues({ perché: ['Straße', { text: 'perché è' }], n: 4 }), [
    { path: '$.perché[1].text', kind: 'letters', values: ['è'] },
    { path: '$.perché[1].text', kind: 'stopwords', values: ['perché'] }
  ]);
  assert.deepEqual(scanValues({ title: 'Guten Tag', empty: null }), []);
});
