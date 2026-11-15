import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { loadEngine } from "./_harness.mjs";

function morf() {
  return loadEngine({ files: ["assets/js/lemma-morf.js"] }).sandbox.LemmaMorf;
}

describe("German compound forms", () => {
  test("finite auxiliaries disappear in compounds and stay alone", () => {
    const M = morf();
    const forms = ("habe hast hat haben habt hatte hattest hatten hattet hätte hättest hätten hättet " +
      "bin bist ist sind seid war warst waren wart sei seist seien seiet wäre wärest wären wäret " +
      "werde wirst wird werden werdet wurde wurdest wurden wurdet würde würdest würden würdet werdest").split(" ");
    for (const word of forms) {
      assert.equal(M.posilkowy(word), true, word);
      assert.deepEqual(Array.from(M.slowa(word + " gelernt")), ["gelernt"], word);
      assert.deepEqual(Array.from(M.slowa(word)), [word], word);
    }
    assert.deepEqual(Array.from(M.slowa("  IST   GEGANGEN ")), ["gegangen"]);
    assert.deepEqual(Array.from(M.slowa("")), []);
    assert.equal(M.posilkowy("Hat"), true);
    for (const word of ["gehen", "sein", "gegangen", "toString"])
      assert.equal(M.posilkowy(word), false, word);
  });
});

test("German infinitives accept single words and sich reflexives, not other phrases", () => {
  const M = morf();
  for (const word of ["gehen", "wandern", "handeln", "ändern", "aufstehen", "sich waschen"])
    assert.equal(M.czasownikowe(word), true, word);
  for (const word of ["Haus", "gut", "", "ich gehe", "gehen lernen", "sich gut waschen"])
    assert.equal(M.czasownikowe(word), false, word);
  assert.equal(M.czasownikowe("Boden"), true, "hypotheses need dictionary confirmation");
});

describe("German noun and adjective candidates", () => {
  const cases = [
    ["jüngere", "jung"], ["schöneren", "schön"], ["älteren", "alt"],
    ["älterer", "alt"], ["jüngerem", "jung"], ["jüngeres", "jung"],
    ["Häuser", "Haus"], ["Gäste", "Gast"], ["Bücher", "Buch"],
    ["Frauen", "Frau"], ["Katzen", "Katze"], ["Hunde", "Hund"],
    ["Äpfel", "Apfel"], ["Mütter", "Mutter"], ["Autos", "Auto"],
    ["Mannes", "Mann"], ["Kindes", "Kind"], ["Tisches", "Tisch"],
    ["Kindern", "Kind"], ["Tischen", "Tisch"], ["kleine", "klein"],
    ["kleinen", "klein"], ["kleinem", "klein"], ["kleiner", "klein"],
    ["kleines", "klein"], ["schönes", "schön"], ["größer", "groß"],
    ["älter", "alt"], ["schneller", "schnell"], ["am größten", "groß"],
    ["jüngsten", "jung"], ["am ältesten", "alt"], ["kleinst", "klein"],
    ["kleinsten", "klein"], ["ältest", "alt"], ["Baumes", "Baum"],
    ["größte", "groß"], ["größtem", "groß"], ["größter", "groß"],
    ["größtes", "groß"], ["größt", "groß"], ["jüngste", "jung"],
    ["jüngstem", "jung"], ["jüngster", "jung"], ["jüngstes", "jung"],
    ["älteste", "alt"], ["ältestem", "alt"], ["ältester", "alt"], ["ältestes", "alt"]
  ];
  for (const [form, lemma] of cases) {
    test(`${form} -> ${lemma}`, () => {
      const candidates = Array.from(morf().odmienne(form));
      assert.equal(candidates[0], form);
      assert.ok(candidates.includes(lemma), JSON.stringify(candidates));
      assert.equal(new Set(candidates).size, candidates.length);
    });
  }

  test("specific endings precede shorter ambiguous endings", () => {
    for (const [word, specific, general] of [
      ["Kindern", "Kind", "Kinder"], ["Mannes", "Mann", "Manne"],
      ["Frauen", "Frau", "Fraue"], ["kleinen", "klein", "kleine"],
      ["am ältesten", "alt", "ältest"], ["jüngsten", "jung", "jüngst"],
      ["kleinem", "klein", "kleinem"], ["Hunde", "Hund", "Hunde"], ["Autos", "Auto", "Autos"]
    ]) {
      const out = Array.from(morf().odmienne(word));
      assert.ok(out.includes(specific) && out.includes(general), word);
      if (general !== word) assert.ok(out.indexOf(specific) < out.indexOf(general), word);
      else assert.equal(out[0], general);
    }
  });

  test("-er keeps the strong ending and comparative hypotheses", () => {
    const out = Array.from(morf().odmienne("größer"));
    assert.ok(out.includes("größ"));
    assert.ok(out.includes("groß"));
    assert.ok(out.indexOf("größ") < out.indexOf("groß"));
  });

  test("unmatched words and phrases stay intact while matching endings reduce", () => {
    const M = morf();
    for (const word of ["Zug", "gut", "", "mit kleinen", "am Haus"])
      assert.deepEqual(Array.from(M.odmienne(word)), [word]);
    assert.ok(M.odmienne("kleinen").includes("klein"));
    assert.ok(M.odmienne("am kleinsten").includes("klein"));
  });
});

test("German function words match, ordinary words do not", () => {
  const M = morf();
  const words = ("der die das den dem des ein eine einen einem einer eines " +
    "in an auf mit ohne für gegen durch über unter vor nach zu aus bei von " +
    "im am zum zur vom beim ins ans und oder aber ich du er sie es wir ihr " +
    "nicht kein doch nur auch schon noch").split(" ");
  for (const word of words) assert.equal(M.funkcyjny(word), true, word);
  assert.equal(M.funkcyjny("Der"), true);
  for (const word of ["Haus", "gehen", "größer", "toString", "constructor"])
    assert.equal(M.funkcyjny(word), false, word);
});

test("German cardinals and ordinals match alongside ordinary-word rejection", () => {
  const M = morf();
  for (const word of ["null", "eins", "zwei", "drei", "zwölf", "sechzehn", "zwanzig",
    "dreißig", "hundert", "tausend", "erste", "zweite", "dritte"])
    assert.equal(M.funkcyjny(word), true, word);
  assert.equal(M.funkcyjny("Zwei"), true);
  assert.equal(M.funkcyjny("Hund"), false);
});

test("irregular degrees and feminine plurals propose dictionary candidates", () => {
  const M = morf();
  for (const [form, lemma] of [["besser", "gut"], ["höher", "hoch"], ["mehr", "viel"],
    ["lieber", "gern"], ["nächst", "nah"], ["besseren", "gut"], ["höchsten", "hoch"],
    ["am besten", "gut"], ["nächste", "nah"], ["Lehrerinnen", "Lehrerin"],
    ["Ärztinnen", "Ärztin"], ["Studentinnen", "Studentin"]]) {
    assert.ok(M.odmienne(form).includes(lemma), form + " -> " + lemma);
  }
  assert.deepEqual(Array.from(M.odmienne("gut")), ["gut"]);
});

test("candidate rules return only strings even for inherited object names", () => {
  const M = morf();
  for (const word of ["constructor", "toString", "__proto__"])
    assert.ok(Array.from(M.odmienne(word)).every(candidate => typeof candidate === "string"), word);
  assert.ok(M.odmienne("besser").includes("gut"));
});

test("Latin and Greek plurals propose their singular endings", () => {
  const M = morf();
  for (const [plural, singular] of [
    ["Museen", "Museum"], ["Themen", "Thema"], ["Zentren", "Zentrum"],
    ["Studien", "Studium"], ["Firmen", "Firma"], ["Konten", "Konto"],
    ["Dramen", "Drama"], ["Alben", "Album"], ["Stadien", "Stadion"]
  ]) {
    assert.ok(M.odmienne(plural).includes(singular), plural + " -> " + singular);
  }
});
