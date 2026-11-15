import { test } from "node:test";
import assert from "node:assert/strict";
import { loadEngine, VERBS, LEMMA } from "./_harness.mjs";

function engine(entries = []) {
  const box = loadEngine({ files: [...VERBS, ...LEMMA] });
  box.sandbox.READINGS = [{ lexIt: entries }];
  return box.sandbox;
}

test("Latin and Greek plurals resolve only to dictionary singulars", () => {
  const { Lemma: L } = engine(["Museum", "Thema"]);
  assert.deepEqual(Array.from(L.resolve("Museen")), ["Museum"]);
  assert.deepEqual(Array.from(L.resolve("Themen")), ["Thema"]);
  assert.deepEqual(Array.from(L.resolve("Zentren")), []);
});

for (const [form, lemma] of [
  ["trinkst", "trinken"], ["trinken", "trinken"], ["getrunken", "trinken"],
  ["ging", "gehen"], ["gegangen", "gehen"], ["wäre", "sein"], ["sei", "sein"],
  ["bin", "sein"], ["hatten", "haben"], ["gestanden", "stehen"], ["stand", "stehen"],
  ["stehst", "stehen"], ["aufgestanden", "aufstehen"], ["stehe auf", "aufstehen"],
  ["wasche mich", "sich waschen"], ["Häuser", "Haus"], ["Hunde", "Hund"],
  ["Kindern", "Kind"], ["Bücher", "Buch"], ["Frauen", "Frau"], ["Autos", "Auto"],
  ["kleinen", "klein"], ["größer", "groß"], ["besser", "gut"], ["höher", "hoch"],
  ["mehr", "viel"], ["lieber", "gern"], ["nächst", "nah"], ["Lehrerinnen", "Lehrerin"]
]) {
  test(`dictionary verdict: ${form} -> ${lemma}`, () => {
    const { Lemma: L } = engine([lemma]);
    assert.deepEqual(Array.from(L.resolve(form)), [lemma]);
  });
}

test("all ten tenses contribute their complete forms without losing the infinitive", () => {
  const { Lemma: L, Verbs: V } = engine(["aufstehen"]);
  assert.equal(V.TENSES.length, 10);
  for (const tense of V.TENSES) {
    for (const form of V.conjugate("aufstehen", tense.key).filter(Boolean)) {
      assert.ok(L.resolve(form).includes("aufstehen"), tense.key + ": " + form);
    }
  }
});

test("course-only verbs from vocabulary and readings enter the index after refresh", () => {
  const box = engine();
  const L = box.Lemma;
  assert.deepEqual(Array.from(L.resolve("tüftelst")), []);
  box.Core = { registry: { levels: [{ units: [{ lessons: [{ vocab: [{ it: "tüfteln" }] }] }] }] } };
  L.odswiez();
  assert.deepEqual(Array.from(L.resolve("tüftelst")), ["tüfteln"]);
  box.READINGS = [{ lexIt: ["werkeln"] }];
  L.odswiez();
  assert.deepEqual(Array.from(L.resolve("werkelst")), ["werkeln"]);
});

test("COMMON forms remain available as candidates without a dictionary verdict", () => {
  const { Lemma: L } = engine();
  assert.ok(L.kandydaci("getrunken").includes("trinken"));
  assert.equal(L.lemat("getrunken"), "trinken");
  assert.deepEqual(Array.from(L.resolve("getrunken")), []);
  assert.ok(L.kandydaci("Häuser").includes("haus"));
  assert.deepEqual(Array.from(L.resolve("Häuser")), []);
});

test("function words and numerals resolve independently of the dictionary", () => {
  const { Lemma: L } = engine();
  for (const word of ["der", "im", "vierzig"]) assert.deepEqual(Array.from(L.resolve(word)), [word]);
  assert.equal(L.funkcyjne("im"), true);
  assert.equal(L.funkcyjne("Hund"), false);
});

test("dictionary spelling survives case folding without removing umlauts", () => {
  const { Lemma: L } = engine(["der Hund", "das Öl", "schön"]);
  assert.deepEqual(Array.from(L.resolve("HUND")), ["Hund"]);
  assert.deepEqual(Array.from(L.resolve("Öl")), ["Öl"]);
  assert.deepEqual(Array.from(L.resolve("schön")), ["schön"]);
  assert.deepEqual(Array.from(L.resolve("schon")), ["schon"]);
  assert.deepEqual(Array.from(L.resolve("Ol")), []);
});

test("articles are stripped from nominal entries shared by course and deck", () => {
  const { Lemma: L } = engine();
  const dictionary = L.zbudujSlownik([{ code: "B1" }, { units: [{ lessons: [
    { vocab: [{ it: "der Hund" }, { it: "die Lehrerin" }] }
  ] }] }], [{ glossIt: ["das Haus"] }]);
  assert.deepEqual(Object.keys(dictionary).sort(), ["haus", "hund", "lehrerin"]);
  const deck = {};
  L.dodajHaslo(deck, "ein Hund");
  assert.deepEqual(Object.keys(deck), ["hund"]);
});

test("compound auxiliaries and detached particles do not create false verb matches", () => {
  const { Lemma: L } = engine(["gehen", "aufstehen"]);
  assert.deepEqual(Array.from(L.resolve("bin")), []);
  assert.deepEqual(Array.from(L.resolve("stehe")), []);
  assert.deepEqual(Array.from(L.resolve("stehe heute früh auf")), []);
  assert.deepEqual(Array.from(L.resolve("aufgestanden")), ["aufstehen"]);
  assert.deepEqual(Array.from(L.resolve("gegangen")), ["gehen"]);
});

test("phrase entries exclude auxiliary and function words", () => {
  const { Lemma: L } = engine();
  const dictionary = L.zbudujSlownik([], [{ lexIt: ["hat gut geschlafen", "mit dem Hund"] }]);
  assert.deepEqual(Object.keys(dictionary).sort(), ["geschlafen", "gut", "hat gut geschlafen", "hund", "mit dem hund"]);
});

test("dictionary predicates and explicitly added infinitives retain their API", () => {
  const { Lemma: L } = engine();
  L.uzyjSlownika(word => word === "tüfteln");
  L.dodajCzasowniki(["tüfteln", "not a verb"]);
  assert.deepEqual(Array.from(L.resolve("tüftelst")), ["tüfteln"]);
  assert.deepEqual(Array.from(L.resolve("xyzzy")), []);
  L.uzyjSlownika(null);
  assert.deepEqual(Array.from(L.resolve("tüftelst")), []);
});

test("the lazy index stays within the lookup budget and is stable across calls", () => {
  const { Lemma: L } = engine();
  const start = Date.now();
  const count = L.rozmiarIndeksu();
  assert.ok(count > 3000, String(count));
  assert.ok(Date.now() - start < 2000);
  assert.equal(L.rozmiarIndeksu(), count);
});

test("reading coverage tokenizes German umlauts, eszett and apostrophes", async () => {
  const { tokenizeGerman } = await import("../../scripts/check_lookup.mjs");
  assert.deepEqual(tokenizeGerman("Häuser größer, Öl und Straße. Wie geht’s?"),
    ["häuser", "größer", "öl", "und", "straße", "wie", "geht's"]);
  assert.deepEqual(tokenizeGerman("123 ..."), []);
});
