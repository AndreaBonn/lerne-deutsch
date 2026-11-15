import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath, pathToFileURL } from "node:url";
import { dirname, join } from "node:path";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const MAX_FORMS = 2000;
const MIN_OCCURRENCES = 3;

export function tokenize(sentence) {
  const segments = sentence.normalize("NFC").replace(/[’']/g, "'").split(/[.!?…]+/);
  return segments.flatMap(segment => {
    const words = segment.match(/[a-zA-ZäÄöÖüÜßẞéÉ]+(?:'[a-zA-ZäÄöÖüÜßẞéÉ]+)*/gu) || [];
    return words.map((word, index) => index === 0 ? word[0].toLowerCase() + word.slice(1) : word);
  });
}

export function countForms(corpus) {
  const counts = new Map();
  let sentences = 0;
  let tokens = 0;
  for (const line of corpus.split("\n")) {
    const sentence = line.split("\t")[2];
    if (!sentence) continue;
    sentences++;
    for (const word of tokenize(sentence)) {
      tokens++;
      counts.set(word, (counts.get(word) || 0) + 1);
    }
  }
  const words = [...counts.entries()]
    .filter(([word, count]) => word.length > 1 && count >= MIN_OCCURRENCES)
    .sort((a, b) => b[1] - a[1])
    .slice(0, MAX_FORMS);
  return { words, sentences, tokens };
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const source = process.argv[2];
  if (!source) {
    console.error("Usage: node scripts/build_frequency.mjs <deu_sentences.tsv>");
    process.exit(2);
  }
  const result = countForms(readFileSync(source, "utf8"));
  const covered = result.words.reduce((sum, [, count]) => sum + count, 0);
  const share = result.tokens ? covered / result.tokens : 0;
  const header = `/* Generated from Tatoeba German sentences (deu).
   Source: https://downloads.tatoeba.org/exports/per_language/deu/deu_sentences.tsv.bz2
   License: CC BY 2.0 FR, attribution required.
   Generated: ${new Date().toISOString().slice(0, 10)}
   Sentence-initial capitals fold; internal capitals, including nouns, stay.
   Proper names remain: capitalisation alone cannot distinguish German nouns.
   Minimum occurrences: ${MIN_OCCURRENCES}; coverage: ${(share * 100).toFixed(1)}%.
   Rebuild: node scripts/build_frequency.mjs <deu_sentences.tsv>
*/\n`;
  const data = { source: "Tatoeba", license: "CC BY 2.0 FR", url: "https://tatoeba.org",
    sentences: result.sentences, tokens: result.tokens, words: result.words };
  writeFileSync(join(ROOT, "data", "core", "frequenza.js"), header + "window.FREQUENCY = " + JSON.stringify(data, null, 2) + ";\n");
  console.log(`Sentences: ${result.sentences}, tokens: ${result.tokens}, forms: ${result.words.length}`);
  console.log(`Coverage: ${(share * 100).toFixed(1)}%; first 12: ${result.words.slice(0, 12).map(([word]) => word).join(" ")}`);
}
