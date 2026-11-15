/* ============================================================
   Detecting constructions in the student's text.

   This is the whole difference between an exercise that measures something
   and a self-assessment checklist. If the detection lies in either
   direction, the student is either praised for what they did not write or
   corrected for what they wrote correctly.
   ============================================================ */
import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { loadEngine, CORE, VERBS } from "./_harness.mjs";

const PLIKI = [...CORE, ...VERBS, "assets/js/writing.js"];

function silnik() {
  const box = loadEngine({ files: PLIKI });
  box.Core.load();
  return box;
}

function znajdz(box, tekst, wymagania) {
  return box.sandbox.Writing.analyse(tekst, wymagania);
}

describe("German verbs through the conjugator", () => {
  test("it finds a simple form in the requested tense", () => {
    const box = silnik();
    const r = znajdz(box, "Früher sprach ich wenig.", [{ verb: "sprechen", tense: "praet" }]);
    assert.equal(r[0].found, true);
    assert.equal(r[0].hit, "sprach");
    assert.equal(znajdz(box, "Ich spreche Deutsch.", [{ verb: "sprechen", tense: "praet" }])[0].found, false);
  });

  test("the default is Präsens", () => {
    const box = silnik();
    assert.equal(znajdz(box, "Ich lerne Deutsch.", [{ verb: "lernen" }])[0].hit, "lerne");
  });

  test("compound tenses require the auxiliary and participle in order", () => {
    const box = silnik();
    const req = [{ verb: "essen", tense: "perf" }];
    for (const text of ["Ich habe gegessen.", "Ich habe gestern eine Pizza gegessen."]) {
      assert.equal(znajdz(box, text, req)[0].hit, "habe gegessen");
    }
    for (const text of ["Ich esse Pizza.", "Ich habe gegessene Pizza.", "Ich habe Hunger. Gestern gegessen."]) {
      assert.equal(znajdz(box, text, req)[0].found, false, text);
    }
  });

  test("German participles are invariant with either auxiliary", () => {
    const box = silnik();
    const req = [{ verb: "gehen", tense: "perf" }];
    for (const text of ["Ich bin gegangen.", "Wir sind zusammen gegangen.", "Sie sind gegangen."]) {
      assert.equal(znajdz(box, text, req)[0].found, true, text);
    }
    assert.equal(znajdz(box, "Ich bin gegangene.", req)[0].found, false);
  });

  test("a reflexive requires the matching pronoun even with intervening words", () => {
    const box = silnik();
    const req = [{ verb: "sich waschen", tense: "perf" }];
    assert.equal(znajdz(box, "Ich habe mich heute gewaschen.", req)[0].hit, "habe mich gewaschen");
    assert.equal(znajdz(box, "Ich habe gewaschen.", req)[0].found, false);
    assert.equal(znajdz(box, "Ich habe dich gewaschen.", req)[0].found, false);
  });

  test("separable and reflexive verbs keep the particle and word boundaries", () => {
    const box = silnik();
    for (const [verb, text, hit, wrong] of [
      ["aufstehen", "Ich stehe jeden Tag früh auf.", "stehe auf", "Ich stehe jeden Tag aufrecht."],
      ["sich vorstellen", "Ich stelle mich heute vor.", "stelle mich vor", "Ich stelle dich vor."],
      ["sich vorstellen", "Ich stelle heute mich kurz vor.", "stelle mich vor", "Ich stelle mich. Vor mir steht Anna."]
    ]) {
      assert.equal(znajdz(box, text, [{ verb }])[0].hit, hit);
      assert.equal(znajdz(box, wrong, [{ verb }])[0].found, false);
    }
  });

  test("simple endings are exact", () => {
    const box = silnik();
    assert.ok(box.sandbox.Writing.formyDla({ verb: "lernen", tense: "praet" }).includes("lernte"));
    assert.equal(znajdz(box, "Ich lernte.", [{ verb: "lernen", tense: "praet" }])[0].found, true);
    assert.equal(znajdz(box, "Ich lerntu.", [{ verb: "lernen", tense: "praet" }])[0].found, false);
  });
});

describe("words and alternatives", () => {
  test("it looks for a specific word", () => {
    const box = silnik();
    assert.equal(znajdz(box, "Prima studio, poi esco.", [{ word: "poi" }])[0].found, true);
    assert.equal(znajdz(box, "Prima studio e esco.", [{ word: "poi" }])[0].found, false);
  });

  test("it does not catch a word hidden inside another word", () => {
    const box = silnik();
    assert.equal(znajdz(box, "Il poeta scrive.", [{ word: "poe" }])[0].found, false);
    assert.equal(znajdz(box, "Vado a casa.", [{ word: "a" }])[0].found, true);
  });

  test("German umlauts remain distinct while ss is equivalent to ß", () => {
    const box = silnik();
    assert.equal(znajdz(box, "Das ist schön.", [{ word: "schön" }])[0].found, true);
    assert.equal(znajdz(box, "Das ist schon.", [{ word: "schön" }])[0].found, false);
    assert.equal(znajdz(box, "Die Strasse.", [{ word: "Straße" }])[0].found, true);
  });

  test("one of the given alternatives is enough", () => {
    const box = silnik();
    const wym = [{ any: ["di solito", "spesso", "qualche volta"] }];
    assert.equal(znajdz(box, "Spesso vado a piedi.", wym)[0].found, true);
    assert.equal(znajdz(box, "Vado a piedi.", wym)[0].found, false);
  });

  test("punctuation does not get in the way", () => {
    const box = silnik();
    assert.equal(znajdz(box, "Poi, finalmente, esco.", [{ word: "poi" }])[0].found, true);
    assert.equal(znajdz(box, "Che cosa fai? Studio.", [{ word: "studio" }])[0].found, true);
  });
});

describe("the result as a reading, not a grade", () => {
  test("it returns an entry for every requirement, including the unmet ones", () => {
    const box = silnik();
    const r = znajdz(box, "Ich esse Äpfel.", [
      { verb: "essen", tense: "praes" },
      { word: "morgen" },
      { any: ["aber", "stattdessen"] }
    ]);
    assert.equal(r.length, 3);
    assert.equal(r[0].found, true);
    assert.equal(r[1].found, false);
    assert.equal(r[2].found, false);
    assert.equal(r[1].hit, null, "an unmet requirement does not pretend to be a hit");
  });

  test("an empty text meets nothing and does not fall over", () => {
    const box = silnik();
    const r = znajdz(box, "", [{ verb: "sein", tense: "praes" }]);
    assert.equal(r[0].found, false);
    assert.equal(znajdz(box, "Ich bin hier.", [{ verb: "sein", tense: "praes" }])[0].found, true);
    assert.equal(box.sandbox.Writing.wordCount(""), 0);
  });

  test("it counts the words", () => {
    const box = silnik();
    assert.equal(box.sandbox.Writing.wordCount("  Vado   a casa oggi "), 4);
  });
});

describe("zapis wypracowania", () => {
  test("the text and the result reach the state and survive a save", () => {
    const box = silnik();
    const wynik = znajdz(box, "Ich habe gegessen.", [{ verb: "essen", tense: "perf" }, { word: "morgen" }]);
    box.sandbox.Writing.save("w-test", "Ich habe gegessen.", wynik);
    box.flush();

    const zapis = box.stored("linguai.tedesco.v1").writing["w-test"];
    assert.equal(zapis.text, "Ich habe gegessen.");
    assert.equal(zapis.found, 1);
    assert.equal(zapis.total, 2);
    assert.equal(zapis.words, 3);
  });

  /* A composition is the only content in the state the student cannot
     reconstruct by studying further — pruning on full storage has no right
     to touch it. */
  test("pruning on full storage does not erase the compositions", () => {
    const box = silnik();
    box.sandbox.Writing.save("w-1", "Un testo lungo del corso.", []);
    for (let i = 0; i < 40; i++) {
      box.Core.state.errors["k" + i] = { kind: "authored", reps: 3, lapses: 0, ts: i, due: 1, wypelniacz: "x".repeat(200) };
    }
    assert.equal(Object.keys(box.Core.state.errors).length, 40);
    box.storage._setLimit(3000);
    box.Core.save();
    box.flush();

    assert.ok(Object.keys(box.Core.state.errors).length < 40, "errors were pruned");
    assert.ok(box.Core.state.writing["w-1"], "wypracowanie zostaje");
    assert.equal(box.Core.state.writing["w-1"].text, "Un testo lungo del corso.");
  });
});

/* Found in a code review, not by a test — and here so that it does not come back. */
describe("regressions from the review", () => {
  test("apostrof typograficzny z telefonu trafia w wymaganie", () => {
    const box = silnik();
    const wym = [{ any: ["secondo l'autore", "l'autore sostiene"] }];
    /* U+2019, the one iOS and every word processor inserts. */
    assert.equal(znajdz(box, "Secondo l’autore la lingua evita.", wym)[0].found, true);
    assert.equal(znajdz(box, "Secondo l'autore la lingua evita.", wym)[0].found, true);
  });

  test("the apostrophe works the other way round too: a curly requirement, a straight text", () => {
    const box = silnik();
    assert.equal(znajdz(box, "Vado all'una.", [{ word: "all’una" }])[0].found, true);
  });

  /* The slack on the ending was meant to handle "sono andata" against "sono
     andato". Applied to fixed phrases it let incorrect forms through. */
  test("a fixed phrase does not accept a mangled ending", () => {
    const box = silnik();
    const wym = [{ any: ["cordiali saluti"] }];
    assert.equal(znajdz(box, "Cordiali saluti, Marco.", wym)[0].found, true);
    assert.equal(znajdz(box, "Cordiali saluto, Marco.", wym)[0].found, false);
    assert.equal(znajdz(box, "Cordiali salute, Marco.", wym)[0].found, false);
  });

  test("di solito nie przyjmuje di solita", () => {
    const box = silnik();
    const wym = [{ any: ["di solito"] }];
    assert.equal(znajdz(box, "Di solito mi alzo presto.", wym)[0].found, true);
    assert.equal(znajdz(box, "Di solita mi alzo presto.", wym)[0].found, false);
  });

  test("German compound forms accept words before the unchanged participle", () => {
    const box = silnik();
    const req = [{ verb: "gehen", tense: "perf" }];
    assert.equal(znajdz(box, "Ich bin gestern gegangen.", req)[0].found, true);
    assert.equal(znajdz(box, "Ich bin gestern gegangena.", req)[0].found, false);
  });
});

describe("odczyt wypracowania", () => {
  test("a saved text comes back on re-entry", () => {
    /* A composition is the only content in the state the student cannot
       reconstruct by studying further: pruning on full storage leaves it
       alone, and the view has to find it again on returning to the screen. */
    const box = silnik();
    box.sandbox.Writing.save("w1", "Ciao, sono a Roma.", []);
    assert.equal(box.sandbox.Writing.load("w1").text, "Ciao, sono a Roma.");
  });

  test("an untouched task has no composition and does not pretend to be empty", () => {
    const box = silnik();
    assert.equal(box.sandbox.Writing.load("w2"), null);
  });
});

test("unknown verbs and empty requirements remain unmet", () => {
  const box = silnik();
  const result = znajdz(box, "Ich lerne Deutsch.", [{ verb: "unknown-verb" }, {}, { verb: "lernen" }]);
  assert.equal(result.length, 3);
  assert.equal(result[0].found, false);
  assert.equal(result[0].hit, null);
  assert.equal(result[1].found, false);
  assert.equal(result[1].hit, null);
  assert.equal(result[2].found, true);
  assert.equal(result[2].hit, "lerne");
});

describe("separable verbs: bracket gap and verb-final forms", () => {
  const req = [{ verb: "aufstehen" }];

  test("a short gap without comma or conjunction is a bracket", () => {
    const box = silnik();
    assert.equal(znajdz(box, "Ich stehe morgen sehr früh auf.", req)[0].found, true);
  });

  test("an unrelated 'auf' after a conjunction is not a bracket", () => {
    const box = silnik();
    assert.equal(znajdz(box, "Ich stehe hier und warte auf dich.", req)[0].found, false);
  });

  test("a comma ends the bracket", () => {
    const box = silnik();
    assert.equal(znajdz(box, "Ich stehe hier, warte auf dich.", req)[0].found, false);
  });

  test("a gap longer than six words is not a bracket", () => {
    const box = silnik();
    assert.equal(znajdz(box, "Ich stehe immer wieder sehr oft ganz früh heute auf.", req)[0].found, false);
  });

  test("verb-final forms in subordinate clauses are found", () => {
    const box = silnik();
    assert.equal(znajdz(box, "Ich bin müde, weil ich früh aufstehe.", req)[0].hit, "aufstehe");
    assert.equal(znajdz(box, "Es ist spät, wenn er aufsteht.", req)[0].found, true);
    assert.equal(znajdz(box, "Als er aufstand, regnete es.", [{ verb: "aufstehen", tense: "praet" }])[0].found, true);
  });

  test("the zu-infinitive is found for Präsens requirements only", () => {
    const box = silnik();
    assert.equal(znajdz(box, "Ich versuche, früh aufzustehen.", req)[0].hit, "aufzustehen");
    assert.equal(znajdz(box, "Ich versuche, früh aufzustehen.", [{ verb: "aufstehen", tense: "praet" }])[0].found, false);
  });

  test("a reflexive separable verb keeps its pronoun in the subordinate form", () => {
    const box = silnik();
    assert.equal(znajdz(box, "Ich hoffe, dass ich mich vorstelle.", [{ verb: "sich vorstellen" }])[0].found, true);
  });
});
