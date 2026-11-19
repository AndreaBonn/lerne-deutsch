/* ============================================================
   Frequency-list coverage - pure functions.

   The lists are built by hand and hold a few entries each: the point is that
   when something breaks it is clear WHICH rule changed, not that the test
   repeats the computation over two thousand forms.

   The thing this test guards above all: an inflected form must count. The
   frequency list is a list of FORMS and the deck is a deck of LEMMAS, so
   without going through the resolver the counter would report gaps exactly
   where the student knows the word - and systematically so.
   ============================================================ */
import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { loadEngine, CORE, VERBS, LEMMA } from "./_harness.mjs";

function silnik(czytanki) {
  const box = loadEngine({
    files: [...VERBS, ...LEMMA, "assets/js/frequency.js"]
  });
  box.sandbox.READINGS = czytanki || [];
  box.sandbox.Lemma.uzyjSlownika(null);
  box.sandbox.Lemma.odswiez();
  return box.sandbox;
}

/* [form, occurrences] - as in data/core/frequenza.js */
const LISTA = [
  ["dass", 100], ["trinkst", 50], ["haus", 40], ["Bücher", 30],
  ["gegessen", 20], ["Touristen", 10], ["xyzzy", 5]
];
const TOKENOW = 255;

describe("frequency: coverage of the lemma set", () => {
  test("an empty lemma set gives zero without breaking the count", () => {
    const s = silnik();
    const p = s.Frequency.pokrycie(LISTA, {}, TOKENOW);
    assert.equal(p.znane, 0);
    assert.equal(p.wszystkie, 7);
    assert.equal(p.udzialTokenow, 0);
  });

  test("a literal hit counts together with its frequency", () => {
    const s = silnik();
    const p = s.Frequency.pokrycie(LISTA, { haus: true }, TOKENOW);
    assert.equal(p.znane, 1);
    assert.ok(Math.abs(p.udzialTokenow - 40 / 255) < 1e-9, "the share is 40 out of 255 tokens");
  });

  test("an inflected form counts towards its base lemma", () => {
    const s = silnik();
    /* "trinken" in the deck must cover "trinkst" on the list, "buch" must cover
       "Bücher", and "essen" must cover the participle "gegessen". */
    const p = s.Frequency.pokrycie(LISTA, { trinken: true, buch: true, essen: true }, TOKENOW);
    assert.equal(p.znane, 3, "three forms counted through inflection, not through string similarity");
  });

  test("a word outside the set stays uncovered", () => {
    const s = silnik();
    const p = s.Frequency.pokrycie(LISTA, { haus: true }, TOKENOW);
    assert.deepEqual({ ...p }, { znane: 1, wszystkie: 7, udzialTokenow: 40 / 255 });
  });

  test("an empty list does not divide by zero", () => {
    const s = silnik();
    const p = s.Frequency.pokrycie([], { haus: true }, 0);
    assert.equal(p.znane, 0);
    assert.equal(p.udzialTokenow, 0);
  });
});

describe("frequency: the nearest gaps", () => {
  test("only the ones the course teaches and the student does not have come out", () => {
    const s = silnik();
    const kurs = { haus: true, buch: true, trinken: true };
    const uczen = { trinken: true };
    const hasla = Array.from(s.Frequency.brakujace(LISTA, kurs, uczen, 10)).map(b => b.haslo);
    assert.ok(hasla.includes("haus"), "the course knows it, the student does not have it");
    assert.ok(hasla.includes("buch"), "the LEMMA comes out, not the form \"Bücher\" from the list");
    assert.ok(!hasla.includes("trinken"), "the student has trinken, so trinkst is not a gap");
    assert.ok(!hasla.includes("xyzzy"), "the course does not teach it: suggesting it would be passing the work on");
  });

  test("forms of the same lemma collapse into one row", () => {
    const s = silnik();
    /* The frequency list holds "habe", "hat", "hast" separately: without
       collapsing, the top five gaps are the same word four times. */
    const lista = [["habe", 90], ["hat", 80], ["hast", 70], ["haus", 10]];
    const braki = Array.from(s.Frequency.brakujace(lista, { haben: true, haus: true }, {}, 10));
    const hasla = braki.map(b => b.haslo);
    assert.equal(hasla.filter(h => h === "haben").length, 1, "one row per lemma");
    const haben = braki.filter(b => b.haslo === "haben")[0];
    assert.equal(haben.ile, 240, "the frequency is the sum over the forms");
    assert.equal(haben.ranga, 1, "the rank is the best rank among its forms");
    assert.deepEqual(Array.from(haben.formy), ["habe", "hat", "hast"]);
  });

  test("a verb form that is also a word of the course collapses into the infinitive", () => {
    /* frequency.js, hasloKursu: the infinitive is checked BEFORE the literal
       form, because multi-word entries put "hat" in the course dictionary as
       a word of its own; the gap list must still offer "haben", once. */
    const s = silnik();
    const lista = [["hat", 80], ["habe", 70]];
    const hasla = Array.from(s.Frequency.brakujace(lista, { hat: true, haben: true }, {}, 10)).map(b => b.haslo);
    assert.deepEqual(hasla, ["haben"]);
  });

  test("function words do not make it onto the clickable list", () => {
    const s = silnik();
    const hasla = Array.from(s.Frequency.brakujace(LISTA, { dass: true, haus: true }, {}, 10)).map(b => b.haslo);
    assert.ok(!hasla.includes("dass"), "\"dass\" is a piece of grammar, not a flashcard");
    assert.ok(hasla.includes("haus"));
  });

  test("the order follows frequency and carries the rank", () => {
    const s = silnik();
    const braki = Array.from(s.Frequency.brakujace(LISTA, { haus: true, buch: true }, {}, 10));
    assert.equal(braki[0].haslo, "haus", "the more frequent one first");
    assert.equal(braki[0].ranga, 3, "the rank is the position on the list, not in the result");
    assert.ok(braki[0].ile > braki[1].ile);
  });

  test("the limit is respected", () => {
    const s = silnik();
    const braki = s.Frequency.brakujace(LISTA, { haus: true, buch: true, essen: true }, {}, 2);
    assert.equal(Array.from(braki).length, 2);
  });
});

describe("frequency: where the two sets come from", () => {
  /* The coverage screen compares two sets: what the course teaches and what
     the student has in the deck. Both are built here, and both can quietly
     come out empty - and then the screen says "0% coverage", which looks like
     a result of studying rather than a fault. */
  function zSilnikiem() {
    const box = loadEngine({
      files: [...CORE, ...VERBS, ...LEMMA, "assets/js/frequency.js"]
    });
    box.Core.load();
    box.sandbox.READINGS = [];
    box.sandbox.Lemma.uzyjSlownika(null);
    box.sandbox.Lemma.odswiez();
    return box;
  }

  test("the student's set carries the bare word, because that is what the list holds", () => {
    const box = zSilnikiem();
    box.Core.addCard("das Öl", "olej", "a1-u01-l1");
    const uczen = box.sandbox.Frequency.slownikUcznia();

    /* The deck key keeps the article; lookup and coverage need the bare
       noun with its umlaut. Both use Lemma.dodajHaslo. */
    assert.ok(uczen["öl"], "the bare word goes in: the article dropped, the accent kept");
    assert.equal(box.sandbox.Frequency.pokrycie([["öl", 10]], uczen, 10).znane, 1,
      "and the list finds it");
    assert.equal(box.sandbox.Frequency.pokrycie([["xyzzy", 10]], uczen, 10).znane, 0,
      "while a word nobody has still counts for nothing");
  });

  test("an empty deck gives an empty set, not an exception", () => {
    const box = zSilnikiem();
    assert.deepEqual(Object.keys(box.sandbox.Frequency.slownikUcznia()), []);
  });

  test("the course set comes from the vocabulary of the loaded lessons", () => {
    const box = zSilnikiem();
    box.sandbox.Registry.registerLevel({
      code: "A1", dataFiles: [], units: [{
        id: "u1",
        lessons: [{ id: "l1", vocab: [{ it: "das Öl" }, { it: "das Haus" }], exercises: [] }]
      }]
    });
    const kurs = box.sandbox.Frequency.slownikKursu();

    assert.ok(kurs["öl"], "the article is removed and the umlaut stays");
    assert.ok(kurs["haus"]);
    assert.ok(!kurs["xyzzy"]);
  });

  test("a course with no level loaded gives an empty set instead of breaking the screen", () => {
    const box = zSilnikiem();
    assert.deepEqual(Object.keys(box.sandbox.Frequency.slownikKursu()), []);
  });
});

describe("frequency without the lemmatiser", () => {
  test("without Lemma the course set is empty instead of breaking the coverage screen", () => {
    /* lemma.js is loaded by a <script> of its own; a forgotten tag takes the
       whole course dictionary with it. The screen must then show zero coverage
       rather than fall over - the fault shows in the number, not in a blank
       page. */
    const box = loadEngine({ files: [...CORE, "assets/js/frequency.js"] });
    box.Core.load();
    assert.deepEqual(Object.keys(box.sandbox.Frequency.slownikKursu()), []);
  });
});

test("the default gap limit is twenty rows in frequency order", () => {
  const { Frequency } = silnik();
  const words = Array.from({ length: 25 }, (_, i) => ["parolaxx" + i, 100 - i]);
  const course = Object.fromEntries(words.map(([word]) => [word, true]));
  const gaps = Array.from(Frequency.brakujace(words, course, {}));
  assert.deepEqual(gaps.map(gap => gap.haslo), words.slice(0, 20).map(([word]) => word));
});

import { tokenize, countForms } from "../../scripts/build_frequency.mjs";

test('only sentence-initial capitals fold; German nouns keep their spelling', () => {
  assert.deepEqual(tokenize('Der Hund sieht das Haus.'), ['der', 'Hund', 'sieht', 'das', 'Haus']);
  assert.deepEqual(tokenize('Das Haus ist schön. Die Straße ist größer!'),
    ['das', 'Haus', 'ist', 'schön', 'die', 'Straße', 'ist', 'größer']);
  assert.deepEqual(tokenize('„Über die Brücke!“ Äpfel und Öl?'), ['über', 'die', 'Brücke', 'äpfel', 'und', 'Öl']);
  assert.deepEqual(tokenize(''), []);
});

test('frequency counts retain nouns instead of excluding capitalised forms', () => {
  const corpus = Array.from({ length: 6 }, (_, i) => `${i}\tdeu\tDer Hund sieht das Haus.`).join('\n');
  const result = countForms(corpus + '\ninvalid\n7\tdeu\t');
  assert.deepEqual(result.words, [['der', 6], ['Hund', 6], ['sieht', 6], ['das', 6], ['Haus', 6]]);
  assert.equal(result.tokens, 30);
  assert.equal(result.sentences, 6);
  assert.deepEqual(countForms('').words, []);
  assert.deepEqual(countForms('1\tdeu\tDer Hund.').words, []);
});

describe("frequency: the student's set without the lemma resolver", () => {
  /* Lemma is optional here: when it is not loaded the set falls back to the
     raw deck keys rather than coming out empty. */
  test("raw deck keys are used as they are, and nothing else", () => {
    const box = loadEngine({ files: ["assets/js/frequency.js"] });
    box.sandbox.Core = { state: { srs: { haus: { it: "das Haus" }, buch: {} } } };
    const uczen = box.sandbox.Frequency.slownikUcznia();
    assert.deepEqual(Object.keys(uczen).sort(), ["buch", "haus"]);
    assert.equal(uczen.haus, true);
    assert.equal(uczen["das haus"], undefined, "no resolver, so no splitting of the card text");
  });
});

describe("frequency: the row carries the course entry", () => {
  /* The dictionary key is lowercase and without article: right for matching,
     wrong for a German card. "bescheid" added from the coverage screen lost
     both the capital and the article ("der Bescheid"), and Txt.checkOpen
     compares the capital strictly (D7). */
  const LIVELLI = [{ units: [{ lessons: [{ vocab: [
    { it: "Bescheid sagen" }, { it: "der Bescheid" }, { it: "das Haus" }, { it: "schnell" }
  ] }] }] }];

  test("an article + noun entry is what the row shows, whatever came first", () => {
    const s = silnik();
    const kurs = s.Lemma.zbudujSlownik(LIVELLI, []);
    const braki = Array.from(s.Frequency.brakujace([["Bescheid", 9], ["Haus", 7], ["schnell", 5]], kurs, {}, 10));
    const wpis = h => (braki.filter(b => b.haslo === h)[0] || {}).wpis;
    assert.equal(wpis("bescheid"), "der Bescheid", "the noun gets its article and capital back");
    assert.equal(wpis("haus"), "das Haus");
    assert.equal(wpis("schnell"), "schnell", "a word without article stays as it is");
  });

  test("without Lemma.wpisKursu the row falls back to the key", () => {
    const s = silnik();
    s.Lemma.wpisKursu = undefined;
    const braki = Array.from(s.Frequency.brakujace([["Haus", 9]], { haus: true }, {}, 10));
    assert.equal(braki[0].wpis, "haus");
  });
});

describe("frequency: the German course entry, edge cases", () => {
  const LIVELLI = [{ units: [{ lessons: [{ vocab: [
    { it: "das Treffen" }, { it: "treffen" }, { it: "der Kaffee" }, { it: "ein Kaffee" }
  ] }] }] }];

  test("a lowercase form keeps the verb, a capitalised one gets the noun entry", () => {
    const s = silnik();
    s.Lemma.zbudujSlownik(LIVELLI, []);
    assert.equal(s.Lemma.wpisKursu("treffen", "Treffen"), "das Treffen");
    assert.equal(s.Lemma.wpisKursu("treffen", "trifft"), "", "trifft is the verb: no entry, the row keeps the key treffen");
  });

  test("the first article entry wins, as in the Italian engine", () => {
    const s = silnik();
    s.Lemma.zbudujSlownik(LIVELLI, []);
    assert.equal(s.Lemma.wpisKursu("kaffee", "Kaffee"), "der Kaffee");
  });

  test("a card of the student does not become a course entry", () => {
    const s = silnik();
    s.Lemma.zbudujSlownik([], []);
    s.Lemma.dodajHaslo({}, "der Stuhl");
    assert.equal(s.Lemma.wpisKursu("stuhl", "Stuhl"), "", "a deck card is not a course entry");
  });

  test("the entry survives a rebuild, and a bare capitalised word keeps its spelling", () => {
    const s = silnik();
    s.Lemma.zbudujSlownik([{ units: [{ lessons: [{ vocab: [{ it: "der Bescheid" }, { it: "Deutschland" }] }] }] }], []);
    s.Lemma.zbudujSlownik([], []);
    assert.equal(s.Lemma.wpisKursu("bescheid", "Bescheid"), "der Bescheid");
    s.Lemma.zbudujSlownik([{ units: [{ lessons: [{ vocab: [{ it: "Deutschland" }] }] }] }], []);
    assert.equal(s.Lemma.wpisKursu("deutschland", "Deutschland"), "Deutschland", "canonical spelling, not the key");
  });
});
