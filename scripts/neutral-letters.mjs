const LETTER = /\p{L}/u;
const ADMITTED = /^[a-zA-ZäÄöÖüÜßẞéÉ]$/u;
const ITALIAN_WORDS = new Set(['della', 'nella', 'degli', 'gli', 'perché', 'anche', 'sono', 'questo', 'delle', 'nelle', 'questa']);

export function rejectedLetters(text) {
  const letters = [...text, ...text.normalize('NFC')];
  return [...new Set(letters.filter(char => LETTER.test(char) && !ADMITTED.test(char)))];
}

export function italianStopwords(text) {
  const words = text.normalize('NFC').toLowerCase().match(/\p{L}+/gu) || [];
  return [...new Set(words.filter(word => ITALIAN_WORDS.has(word)))];
}

export function scanValues(value, path = '$') {
  if (typeof value === 'string') {
    return [['letters', rejectedLetters(value)], ['stopwords', italianStopwords(value)]]
      .filter(([, values]) => values.length)
      .map(([kind, values]) => ({ path, kind, values }));
  }
  if (!value || typeof value !== 'object') return [];
  return Object.entries(value).flatMap(([key, child]) =>
    scanValues(child, Array.isArray(value) ? `${path}[${key}]` : `${path}.${key}`));
}
