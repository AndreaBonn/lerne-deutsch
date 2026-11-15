/* ============================================================
   The lexicons: rules, not tables.

   Every one of these functions is an answer key for a generator, so a
   mistake here does not look like a mistake: it looks like an exercise in
   which the student "gets it wrong". The forms are checked explicitly, one
   by one. The generators themselves are in drills.test.mjs.
   ============================================================ */
import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { loadEngine } from "./_harness.mjs";

const FILES = ["assets/js/verbs-data.js", "assets/js/drills-lex.js", "assets/js/drills-de.js"];

function box() {
  return loadEngine({ files: FILES }).sandbox;
}

describe("the article by case", () => {
  const faelle = [
    ["nom", "m", "der"], ["akk", "m", "den"], ["dat", "m", "dem"], ["gen", "m", "des"],
    ["nom", "f", "die"], ["akk", "f", "die"], ["dat", "f", "der"], ["gen", "f", "der"],
    ["nom", "n", "das"], ["akk", "n", "das"], ["dat", "n", "dem"], ["gen", "n", "des"]
  ];
  faelle.forEach(([k, g, erwartet]) => {
    test(`${k} ${g} -> ${erwartet}`, () => {
      assert.equal(box().LexDe.article(k, g, false, false), erwartet);
    });
  });

  test("the plural: die, die, den, der, whatever the gender", () => {
    const L = box().LexDe;
    ["m", "f", "n"].forEach((g) => {
      assert.equal(["nom", "akk", "dat", "gen"].map((k) => L.article(k, g, true, false)).join("/"), "die/die/den/der");
    });
  });

  test("ein-: only the masculine accusative and the dative/genitive differ, and there is no plural", () => {
    const L = box().LexDe;
    assert.equal(L.article("akk", "m", false, true), "einen");
    assert.equal(L.article("dat", "f", false, true), "einer");
    assert.equal(L.article("gen", "n", false, true), "eines");
    assert.equal(L.article("nom", "m", true, true), null);
  });
});

describe("the noun in a case", () => {
  test("only the dative plural changes the noun, by -n unless it ends in n or s", () => {
    const L = box().LexDe;
    const kind = { s: "Kind", g: "n", pl: "Kinder" };
    assert.equal(L.nounForm(kind, "dat", true), "Kindern");
    assert.equal(L.nounForm(kind, "nom", true), "Kinder");
    assert.equal(L.nounForm(kind, "dat", false), "Kind");
    assert.equal(L.nounForm({ s: "Auto", g: "n", pl: "Autos" }, "dat", true), "Autos");
    assert.equal(L.nounForm({ s: "Frau", g: "f", pl: "Frauen" }, "dat", true), "Frauen");
  });
});

describe("the contracted preposition", () => {
  const paare = [["zu", "dem", "zum"], ["zu", "der", "zur"], ["bei", "dem", "beim"], ["von", "dem", "vom"],
    ["in", "dem", "im"], ["an", "dem", "am"], ["in", "das", "ins"], ["an", "das", "ans"]];
  paare.forEach(([p, a, erwartet]) => {
    test(`${p} + ${a} -> ${erwartet}`, () => {
      assert.equal(box().LexDe.contract(p, a), erwartet);
    });
  });

  test("a preposition that does not contract stays separate", () => {
    const L = box().LexDe;
    assert.equal(L.contract("mit", "dem"), null);
    assert.equal(L.contract("zu", "den"), null);
  });
});

describe("lexicon hygiene", () => {
  test("every noun has gender and plural, and a genitive-free ASCII-or-umlaut spelling", () => {
    box().LexDe.NOUNS.forEach((n) => {
      assert.ok(["m", "f", "n"].includes(n.g), n.s);
      assert.match(n.s, /^[A-ZÄÖÜ][a-zäöüßé]+$/, n.s);
      assert.ok(n.pl, n.s);
    });
  });

  test("every verb has its auxiliary declared", () => {
    box().LexDe.VERBS.forEach((v) => assert.ok(["haben", "sein", "both"].includes(v.aux), v.inf));
  });

  test("the set is large enough for the exercises not to repeat", () => {
    const L = box().LexDe;
    assert.ok(L.NOUNS.length >= 30);
    assert.ok(L.VERBS.length >= 40);
  });

  test("the numbers, dates and pronouns survive the split", () => {
    const { Lex } = box();
    assert.equal(Lex.numeral(21), "einundzwanzig");
    assert.equal(Lex.ordinal(3, "e"), "dritte");
    assert.equal(Lex.PRONOUNS.length, 9);
    assert.equal(Lex.VERBS, undefined, "no Italian verbs are left");
    assert.equal(Lex.definite, undefined, "no Italian article rules are left");
  });
});
