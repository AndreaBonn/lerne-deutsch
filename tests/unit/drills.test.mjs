/* ============================================================
   The exercise generators.

   They are pure functions of a seed, so they can be checked in full without
   a browser. Three things at once: whether the same seed yields the same
   task, whether the answer key is correct Italian, and whether anything
   leaked towards recordings, which a generated sentence does not have and
   never will.
   ============================================================ */
import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { loadEngine } from "./_harness.mjs";

const PLIKI = ["assets/js/drills-lex.js", "assets/js/drills.js"];

function silnik() {
  const box = loadEngine({ files: PLIKI });
  return box.sandbox;
}

/* Pulls the value of `key=` out of the stubbed prompt
   ("drill.num.q(n=18)"): the generators put the task there, so the tests can
   rebuild what was asked without knowing how it was generated. */
function param(ex, key) {
  const m = new RegExp(key + "=(.*?)(?:, ?[a-z]+=|\\)$)").exec(ex.q);
  assert.ok(m, `${key} missing from ${ex.q}`);
  return m[1];
}

describe("numerals (T1.42)", () => {
  const przypadki = [
    [0, "null"], [1, "eins"], [7, "sieben"], [11, "elf"], [12, "zwölf"], [16, "sechzehn"],
    [17, "siebzehn"], [20, "zwanzig"], [21, "einundzwanzig"], [22, "zweiundzwanzig"],
    [30, "dreißig"], [60, "sechzig"], [70, "siebzig"], [99, "neunundneunzig"],
    [100, "hundert"], [101, "hunderteins"], [102, "hundertzwei"], [200, "zweihundert"],
    [321, "dreihunderteinundzwanzig"], [999, "neunhundertneunundneunzig"],
    [1000, "tausend"], [1001, "tausendeins"], [1100, "tausendhundert"],
    [2024, "zweitausendvierundzwanzig"], [21000, "einundzwanzigtausend"],
    [100000, "hunderttausend"], [101000, "hunderteintausend"],
    [999999, "neunhundertneunundneunzigtausendneunhundertneunundneunzig"],
    [1000000, "eine Million"]
  ];
  przypadki.forEach(([n, oczek]) => {
    test(`${n} → ${oczek}`, () => {
      assert.equal(silnik().Drills.numeral(n), oczek);
    });
  });

  test("the units digit comes first: und-order, and eins turns into ein before und", () => {
    const { Drills } = silnik();
    for (let n = 21; n <= 99; n++) {
      if (n % 10 === 0) continue;
      const w = Drills.numeral(n);
      assert.match(w, /^[a-zäöüß]+und[a-zäöüß]+$/, `${n}: ${w}`);
      assert.ok(!/einsund/.test(w), `${n}: "einsund" in ${w}`);
    }
    assert.equal(Drills.numeral(31), "einunddreißig");
    assert.equal(Drills.numeral(88), "achtundachtzig");
  });

  test("no number up to 999999 is written with a space or an uppercase letter", () => {
    const { Drills } = silnik();
    for (let n = 0; n < 1000000; n += 37) assert.match(Drills.numeral(n), /^[a-zäöüß]+$/, String(n));
  });

  const akzeptiert = (n) => Array.from(silnik().Lex.numeralVariants(n));

  test("hundert and tausend are accepted with and without the leading ein", () => {
    assert.deepEqual(akzeptiert(100).slice(0, 2), ["hundert", "einhundert"]);
    assert.ok(akzeptiert(101).includes("einhunderteins"));
    assert.ok(akzeptiert(1000).includes("eintausend"));
    assert.ok(akzeptiert(1001).includes("eintausendeins"));
    assert.ok(akzeptiert(1100).includes("tausendeinhundert"));
    assert.ok(akzeptiert(101000).includes("einhunderteintausend"));
  });

  test("a year between 1100 and 1999 may be read in hundreds", () => {
    assert.ok(akzeptiert(1100).includes("elfhundert"));
    assert.ok(akzeptiert(1989).includes("neunzehnhundertneunundachtzig"));
    assert.ok(!akzeptiert(2024).some((w) => /^zwanzighundert/.test(w)), "2024 has no hundreds form");
    assert.ok(!akzeptiert(1050).some((w) => /hundert/.test(w)), "1050 has no hundreds form");
  });

  test("the ss spelling of ß is accepted, and only where there is a ß", () => {
    assert.ok(akzeptiert(30).includes("dreissig"));
    assert.ok(akzeptiert(2035).includes("zweitausendfünfunddreissig"));
    assert.deepEqual(akzeptiert(7), ["sieben"]);
  });

  test("the drill accepts every variant and shows the plain one first", () => {
    const S = silnik();
    for (let i = 0; i < 60; i++) {
      const { ex } = S.Drills.make("numeri", "n" + i);
      const n = Number(param(ex, "n"));
      assert.deepEqual(Array.from(ex.a), akzeptiert(n), String(n));
      assert.equal(ex.a[0], S.Drills.numeral(n));
    }
  });

  test("the drill reaches the awkward ranges: twenties, hundreds, thousands, a million", () => {
    const S = silnik();
    const ns = [];
    for (let i = 0; i < 600; i++) ns.push(Number(param(S.Drills.make("numeri", "r" + i).ex, "n")));
    assert.ok(ns.some((n) => n >= 21 && n <= 99 && n % 10 === 1), "no xx1 number");
    assert.ok(ns.some((n) => n >= 100 && n <= 199), "no 1xx number");
    assert.ok(ns.some((n) => n >= 1000 && n <= 1999), "no 1xxx number");
    assert.ok(ns.some((n) => n >= 10000), "no five-digit number");
    assert.ok(ns.includes(1000000), "one million never came up");
    assert.ok(ns.some((n) => n <= 12), "nothing up to twelve");
    assert.ok(ns.every((n) => n >= 0 && n <= 1000000), "out of range");
  });
});

describe("repeatability", () => {
  test("the same seed yields exactly the same task", () => {
    const S = silnik();
    S.Drills.TOPICS.forEach(topic => {
      const a = S.Drills.make(topic.id, "seed-7");
      const b = S.Drills.make(topic.id, "seed-7");
      assert.deepEqual(JSON.parse(JSON.stringify(a)), JSON.parse(JSON.stringify(b)), topic.id);
    });
  });

  test("a different seed yields a different task", () => {
    const S = silnik();
    S.Drills.TOPICS.forEach(topic => {
      const seria = [];
      for (let i = 0; i < 12; i++) seria.push(JSON.stringify(S.Drills.make(topic.id, "z" + i).ex));
      assert.ok(new Set(seria).size > 1, `${topic.id} keeps producing the same thing`);
    });
  });

  /* The lexicon is closed, so over 200 draws repeats MUST happen - that is
     not a fault, that is the size of the set. The threshold guards what
     would really break the exercise: a generator stuck on a few variants.

     The threshold is 30, not 40, because "ausiliare" has a space exactly as
     large as the verb list - and covers it in full. A higher threshold would
     be measuring the size of the lexicon, not the quality of the
     generator. */
  test("200 seeds give a wide spread of tasks", () => {
    const S = silnik();
    S.Drills.TOPICS.forEach(topic => {
      const widziane = new Set();
      for (let i = 0; i < 200; i++) widziane.add(JSON.stringify(S.Drills.make(topic.id, "s" + i).ex));
      assert.ok(widziane.size >= 30, `${topic.id}: only ${widziane.size} distinct out of 200`);
    });
  });

  test("ausiliare reaches for EVERY verb in the lexicon, not a handful", () => {
    const S = silnik();
    const trafione = new Set();
    for (let i = 0; i < 400; i++) {
      const { ex } = S.Drills.make("ausiliare", "cov" + i);
      S.Lex.VERBS.forEach(v => { if (ex.q.indexOf(v.inf) >= 0) trafione.add(v.inf); });
    }
    assert.equal(trafione.size, S.Lex.VERBS.length,
      `covered ${trafione.size} of ${S.Lex.VERBS.length} verbs`);
  });
});

describe("nothing that leads to a recording", () => {
  test("make rejects a listening generator but accepts a written one", () => {
    const { Drills } = silnik();
    const topic = Drills.TOPICS[0];
    topic.make = () => ({ t: "listen", it: "ciao", say: "ciao" });
    assert.equal(Drills.make(topic.id, "seed"), null);
    topic.make = () => ({ t: "fill", q: "Greeting", a: ["ciao"] });
    assert.deepEqual(Drills.make(topic.id, "seed").ex, { t: "fill", q: "Greeting", a: ["ciao"] });
  });

  test("make removes emitted say and alt fields while preserving the exercise", () => {
    const { Drills } = silnik();
    const topic = Drills.TOPICS[0];
    topic.make = () => ({ t: "fill", q: "Greeting", a: ["ciao"], say: "ciao", alt: "salve" });
    const { ex } = Drills.make(topic.id, "seed");
    assert.deepEqual(ex, { t: "fill", q: "Greeting", a: ["ciao"] });
  });

  test("every type is one the engine already knows how to build", () => {
    const S = silnik();
    const ZNANE = ["mcq", "multi", "truefalse", "fill", "trans", "cloze", "order",
      "match", "conj", "gender", "dialogue"];
    S.Drills.TOPICS.forEach(topic => {
      for (let i = 0; i < 20; i++) {
        const { ex } = S.Drills.make(topic.id, "t" + i);
        assert.ok(ZNANE.indexOf(ex.t) >= 0, `${topic.id}: unknown type ${ex.t}`);
      }
    });
  });
});

describe("answer key: contracted prepositions", { skip: "rewrite in T1.47" }, () => {
  test("the answer matches the lexicon table", () => {
    const S = silnik();
    for (let i = 0; i < 80; i++) {
      const { ex } = S.Drills.make("prep-art", "p" + i);
      /* the hint carries the parts ("di + la"), the answer must be their contraction */
      const [prep, art] = ex.hint.split(" + ");
      assert.equal(ex.a[0], S.Lex.articulate(prep, art), `${prep} + ${art}`);
    }
  });
});

describe("answer key: adjective agreement", { skip: "rewrite in T1.48" }, () => {
  test("the form is one of the four possible ones and matches the number", () => {
    const S = silnik();
    for (let i = 0; i < 80; i++) {
      const { ex } = S.Drills.make("accordo", "a" + i);
      const odp = ex.a[0];
      assert.ok(/^[a-zàèéìòù]+$/.test(odp), `odd form: ${odp}`);
      assert.ok(odp.length > 2);
    }
  });
});

describe("answer key: auxiliaries", () => {
  test("a verb with two auxiliaries accepts both answers", () => {
    const S = silnik();
    const dwa = S.Lex.VERBS.filter(v => v.aux === "both").map(v => v.inf);
    let znalezione = 0;
    for (let i = 0; i < 300 && znalezione < 3; i++) {
      const { ex } = S.Drills.make("ausiliare", "x" + i);
      const inf = dwa.filter(v => ex.q.indexOf(v) >= 0)[0];
      if (!inf) continue;
      znalezione++;
      assert.equal(ex.t, "multi", `${inf} should accept both forms`);
      /* The array comes from the sandbox: deepEqual would compare prototypes
         from two realms and reject even identical content. */
      assert.equal(JSON.stringify(ex.a), "[0,1]");
    }
    assert.ok(znalezione >= 1, "not once did a verb with two auxiliaries come up");
  });

  test("a verb of motion gets essere, a transitive one avere", () => {
    const S = silnik();
    for (let i = 0; i < 200; i++) {
      const { ex } = S.Drills.make("ausiliare", "y" + i);
      if (ex.t !== "mcq") continue;
      const verb = S.Lex.VERBS.filter(v => ex.q.indexOf(v.inf) >= 0)[0];
      if (!verb) continue;
      assert.equal(ex.a, verb.aux === "essere" ? 1 : 0, `${verb.inf} (${verb.aux})`);
    }
  });
});

describe("clock times (T1.43)", () => {
  const akz = (h, m) => Array.from(silnik().Lex.clockAnswers(h, m));
  const alle = (h, m, ...formen) => formen.forEach((f) => assert.ok(akz(h, m).includes(f), `${h}:${m} should accept "${f}"`));

  test("halb drei is 2:30, not 3:30: halb points at the NEXT hour", () => {
    alle(2, 30, "halb drei", "zwei Uhr dreißig", "es ist halb drei");
    assert.ok(!akz(2, 30).includes("halb zwei"), "halb zwei is 1:30");
    alle(1, 30, "halb zwei");
    assert.ok(akz(3, 30).includes("halb vier"));
  });

  test("24h format names the hour up to 23 and accepts the 12h reading too", () => {
    alle(14, 30, "vierzehn Uhr dreißig", "halb drei", "zwei Uhr dreißig");
    alle(23, 45, "dreiundzwanzig Uhr fünfundvierzig", "Viertel vor zwölf");
    alle(13, 5, "dreizehn Uhr fünf", "dreizehn Uhr null fünf", "fünf nach eins");
  });

  test("Viertel nach / vor, dreiviertel, kurz nach / vor", () => {
    alle(3, 15, "Viertel nach drei", "drei Uhr fünfzehn");
    alle(3, 45, "Viertel vor vier", "dreiviertel vier", "drei Uhr fünfundvierzig");
    alle(3, 5, "fünf nach drei", "kurz nach drei");
    alle(2, 55, "fünf vor drei", "kurz vor drei");
    assert.ok(!akz(3, 5).includes("kurz vor drei"), "kurz vor is the other side of the hour");
  });

  test("the five-minute steps around halb: zehn vor halb, fünf nach halb", () => {
    alle(3, 20, "zwanzig nach drei", "zehn vor halb vier");
    alle(3, 25, "fünf vor halb vier");
    alle(3, 35, "fünf nach halb vier", "fünfundzwanzig vor vier");
    alle(3, 40, "zwanzig vor vier", "zehn nach halb vier");
    alle(3, 50, "zehn vor vier");
  });

  test("one o'clock is ein Uhr with Uhr and eins without it", () => {
    alle(1, 0, "ein Uhr", "es ist ein Uhr");
    assert.ok(!akz(1, 0).some((f) => /\beins Uhr\b/.test(f)), "\"eins Uhr\" is wrong");
    alle(1, 15, "Viertel nach eins", "ein Uhr fünfzehn");
    assert.ok(!akz(1, 15).includes("Viertel nach ein"), "\"Viertel nach ein\" is wrong");
    alle(12, 15, "Viertel nach zwölf");
  });

  test("noon, midnight and the hour after twelve wrap around", () => {
    alle(12, 0, "zwölf Uhr", "Mittag");
    alle(0, 0, "null Uhr", "Mitternacht", "vierundzwanzig Uhr");
    alle(0, 30, "halb eins", "null Uhr dreißig");
    alle(12, 30, "halb eins");
    alle(0, 45, "Viertel vor eins");
    alle(0, 0, "zwölf Uhr nachts");
    assert.ok(!akz(10, 0).includes("Mittag"), "Mittag only for 12:00");
  });

  test("zwölf Uhr is noon, never the official reading of a time after midnight", () => {
    assert.ok(!akz(0, 0).includes("zwölf Uhr"), "0:00 is not zwölf Uhr");
    assert.ok(!akz(0, 30).includes("zwölf Uhr dreißig"), "0:30 is not zwölf Uhr dreißig");
    assert.ok(!akz(0, 5).includes("zwölf Uhr fünf") && !akz(0, 5).includes("zwölf Uhr null fünf"));
    alle(0, 0, "null Uhr", "Mitternacht", "vierundzwanzig Uhr");
    alle(0, 30, "null Uhr dreißig");
    assert.ok(!akz(0, 30).includes("vierundzwanzig Uhr"), "vierundzwanzig Uhr is only 0:00");
    alle(12, 0, "zwölf Uhr");
    alle(12, 30, "zwölf Uhr dreißig");
  });

  test("one o'clock is also said as bare eins, at 1:00 and 13:00", () => {
    alle(1, 0, "eins", "es ist eins", "ein Uhr");
    alle(13, 0, "eins", "es ist eins", "ein Uhr", "dreizehn Uhr");
    assert.ok(!akz(2, 0).includes("eins") && !akz(2, 0).includes("zwei"), "bare hour only for one o'clock");
    assert.ok(!akz(1, 15).includes("eins"), "bare eins is only for the full hour");
  });

  test("dreißig is also accepted as dreissig", () => {
    alle(2, 30, "zwei Uhr dreissig");
  });

  test("the drill asks for HH:MM in five-minute steps and accepts the full set", () => {
    const S = silnik();
    const minuten = new Set();
    for (let i = 0; i < 300; i++) {
      const { ex } = S.Drills.make("ore", "o" + i);
      const [h, m] = param(ex, "time").split(":").map(Number);
      assert.ok(h >= 0 && h <= 23 && m % 5 === 0 && m <= 55, param(ex, "time"));
      assert.deepEqual(Array.from(ex.a), akz(h, m));
      minuten.add(m);
    }
    assert.equal(minuten.size, 12, "every five-minute step should come up");
  });
});

describe("dates (T1.44)", () => {
  const akz = (d, m) => Array.from(silnik().Lex.dateAnswers(d, m));

  test("ordinals: the irregular ones, -zehnte, -zigste", () => {
    const { Lex } = silnik();
    const ord = (n) => Lex.ordinal(n, "e");
    assert.deepEqual([1, 2, 3, 4, 7, 8, 11, 12, 13, 19].map(ord),
      ["erste", "zweite", "dritte", "vierte", "siebte", "achte", "elfte", "zwölfte", "dreizehnte", "neunzehnte"]);
    assert.deepEqual([20, 21, 30, 31].map(ord),
      ["zwanzigste", "einundzwanzigste", "dreißigste", "einunddreißigste"]);
  });

  test("March 3rd: dative with am, nominative with der, accusative with den", () => {
    assert.deepEqual(akz(3, 2).sort(), ["am dritten März", "den dritten März", "der dritte März"]);
  });

  test("the 1st is erste, the 7th also has the siebente spelling, the 8th has one t", () => {
    assert.ok(akz(1, 4).includes("am ersten Mai"));
    assert.ok(akz(7, 4).includes("am siebten Mai") && akz(7, 4).includes("am siebenten Mai"));
    assert.ok(akz(8, 5).includes("am achten Juni"));
    assert.ok(!akz(8, 5).includes("am achtten Juni"));
  });

  test("the 20th and later take -ste: am zwanzigsten, am einunddreißigsten", () => {
    assert.ok(akz(19, 6).includes("am neunzehnten Juli"));
    assert.ok(akz(20, 6).includes("am zwanzigsten Juli"));
    assert.ok(akz(31, 7).includes("am einunddreißigsten August"));
    assert.ok(akz(30, 3).includes("am dreißigsten April"));
  });

  test("no month has a spelling variant: de-DE only, January is Januar (decision D6)", () => {
    assert.ok(akz(2, 0).includes("am zweiten Januar"));
    assert.ok(!akz(2, 0).includes("am zweiten Jänner"));
    assert.equal(akz(2, 0).length, 3);
    assert.equal(akz(2, 1).length, 3);
  });

  test("the drill never asks for a day the month does not have", () => {
    const S = silnik();
    const gesehen = {};
    for (let i = 0; i < 900; i++) {
      const { ex } = S.Drills.make("date", "d" + i);
      const tag = Number(param(ex, "day").replace(".", ""));
      const monat = param(ex, "month");
      assert.ok(S.Drills.MESI.includes(monat), monat);
      gesehen[monat] = Math.max(gesehen[monat] || 0, tag);
      assert.ok(tag >= 1 && tag <= (monat === "Februar" ? 28 : 31), `${tag} ${monat}`);
      assert.ok(tag <= 30 || ["Januar", "März", "Mai", "Juli", "August", "Oktober", "Dezember"].includes(monat));
    }
    assert.equal(gesehen.Dezember, 31, "the 31st should come up");
  });

  test("every answer ends with the month and starts with am, der or den", () => {
    const S = silnik();
    for (let i = 0; i < 100; i++) {
      const { ex } = S.Drills.make("date", "dd" + i);
      const monat = param(ex, "month");
      const [tag] = [Number(param(ex, "day").replace(".", ""))];
      assert.deepEqual(Array.from(ex.a), akz(tag, S.Drills.MESI.indexOf(monat)));
      ex.a.forEach((odp) => assert.match(odp, /^(am|der|den) [a-zäöüß]+ \p{Lu}[a-zä]+$/u, odp));
    }
  });
});

describe("personal pronouns (T1.45)", () => {
  test("the paradigm: nominative, accusative, dative of all nine persons", () => {
    const { Lex } = silnik();
    const tabelle = Array.from(Lex.PRONOUNS, (r) => [r.id, r.nom, r.akk, r.dat].join("/"));
    assert.deepEqual(tabelle, ["ich/ich/mich/mir", "du/du/dich/dir", "er/er/ihn/ihm", "sie/sie/sie/ihr",
      "es/es/es/ihm", "wir/wir/uns/uns", "ihr/ihr/euch/euch", "sie_pl/sie/sie/ihnen", "Sie/Sie/Sie/Ihnen"]);
  });

  /* sentence -> answer, from every draw: what the student sees is the oracle */
  function gesammelt() {
    const S = silnik();
    const karte = new Map();
    for (let i = 0; i < 1500; i++) {
      const { ex } = S.Drills.make("pronomi", "p" + i);
      karte.set(param(ex, "sentence"), Array.from(ex.a));
    }
    return karte;
  }

  test("accusative objects: only the masculine changes (ihn), 1st and 2nd person mich/dich/uns/euch", () => {
    const k = gesammelt();
    assert.deepEqual(k.get("Lukas sieht ___ (Tom)"), ["ihn"]);
    assert.deepEqual(k.get("Lukas sieht ___ (Anna)"), ["sie"]);
    assert.deepEqual(k.get("Lukas besucht ___ (das Kind)"), ["es"]);
    assert.deepEqual(k.get("Lukas kennt ___ (ich)"), ["mich"]);
    assert.deepEqual(k.get("Lukas braucht ___ (du)"), ["dich"]);
    assert.deepEqual(k.get("Lukas sieht ___ (wir)"), ["uns"]);
    assert.deepEqual(k.get("Lukas kennt ___ (ihr)"), ["euch"]);
    assert.deepEqual(k.get("Lukas kennt ___ (Anna und Tom)"), ["sie"]);
    assert.ok(!k.has("Lukas sieht ___ (Sie)"), "cue Sie would just be the answer");
  });

  test("dative objects after helfen, danken, antworten, glauben", () => {
    const k = gesammelt();
    assert.deepEqual(k.get("Lukas hilft ___ (Tom)"), ["ihm"]);
    assert.deepEqual(k.get("Lukas dankt ___ (Anna)"), ["ihr"]);
    assert.deepEqual(k.get("Lukas antwortet ___ (das Kind)"), ["ihm"]);
    assert.deepEqual(k.get("Lukas glaubt ___ (ich)"), ["mir"]);
    assert.deepEqual(k.get("Lukas hilft ___ (du)"), ["dir"]);
    assert.deepEqual(k.get("Lukas dankt ___ (Anna und Tom)"), ["ihnen"]);
    assert.deepEqual(k.get("Lukas hilft ___ (Sie)"), ["Ihnen"]);
    assert.deepEqual(k.get("Lukas hilft ___ (wir)"), ["uns"]);
  });

  test("no generated item shows a cue equal to its answer", () => {
    const S = silnik();
    const gesehen = new Set();
    for (let i = 0; i < 2000; i++) {
      const { ex } = S.Drills.make("pronomi", "c" + i);
      const q = param(ex, "sentence");
      const cue = /\(([^)]*)\)$/.exec(q)[1];
      gesehen.add(q);
      assert.notEqual(cue.toLowerCase(), ex.a[0].toLowerCase(), q);
    }
    assert.ok([...gesehen].some((q) => q.endsWith("(Sie)")), "Sie should still appear where it differs from the answer");
  });

  test("nominative subjects agree with the verb: kommt for one, kommen for several", () => {
    const k = gesammelt();
    assert.deepEqual(k.get("___ kommt (Tom)"), ["er"]);
    assert.deepEqual(k.get("___ wohnt (Anna)"), ["sie"]);
    assert.deepEqual(k.get("___ lernt (das Kind)"), ["es"]);
    assert.deepEqual(k.get("___ arbeiten (Anna und Tom)"), ["sie"]);
    assert.deepEqual(k.get("___ kommen (Lukas und ich)"), ["wir"]);
    assert.deepEqual(k.get("___ lernt (du und Tom)"), ["ihr"]);
  });

  test("all three cases come up and the answer is always a single word", () => {
    const k = gesammelt();
    const saetze = Array.from(k.keys());
    assert.ok(saetze.some((q) => q.startsWith("___")), "no nominative");
    assert.ok(saetze.some((q) => /hilft|dankt|antwortet|glaubt/.test(q)), "no dative");
    assert.ok(saetze.some((q) => /sieht|besucht|kennt|braucht/.test(q)), "no accusative");
    k.forEach((a, q) => { assert.equal(a.length, 1, q); assert.match(a[0], /^[A-Za-zäöü]+$/, q); });
  });
});

describe("the topic registry", () => {
  test("every generator has a tag that exists in the grammar reference", () => {
    const S = silnik();
    /* A list of ids from data/core/grammar-reference.js - here we only check
       the shape and that the tag is one of the known ones; full agreement is
       guarded by validate.mjs. */
    const ZNANE = ["g-preposizioni", "g-agg-accordo", "g-passato-prossimo",
      "g-pron-diretti", "g-frase", "g-articolo-det"];
    S.Drills.TOPICS.forEach(topic => {
      assert.ok(ZNANE.indexOf(topic.tag) >= 0, `${topic.id}: tag ${topic.tag}`);
    });
  });

  test("a series returns as many tasks as were ordered", () => {
    const S = silnik();
    assert.equal(S.Drills.session("numeri", 15, "session").length, 15);
  });

  test("an unknown topic returns null, it does not blow up", () => {
    assert.equal(silnik().Drills.make("no-such-topic", "x"), null);
  });
});

/* Which drill the daily session offers when there is no weak spot yet.
   It used to rotate through every topic by date, so a student in the first
   unit was handed numbers, which arrive in unit 2. */
describe("the topic of the daily drill", () => {
  const zrobione = (ids) => (id) => ids.indexOf(id) >= 0;

  test("every topic names the lesson that introduces it, and that lesson exists", async () => {
    const { readdirSync, readFileSync } = await import("node:fs");
    const { join } = await import("node:path");
    const { ROOT } = await import("./_harness.mjs");
    const dir = join(ROOT, "data", "core");
    const tekst = readdirSync(dir).map(f => readFileSync(join(dir, f), "utf8")).join("\n");
    silnik().Drills.TOPICS.forEach(topic => {
      assert.match(topic.from || "", /^[abc][12]-u\d{2}-l\d$/, `${topic.id}: from`);
      assert.ok(tekst.indexOf(`id: "${topic.from}"`) >= 0, `${topic.id}: ${topic.from} is not a lesson`);
    });
  });

  test("a weak spot wins, as before", () => {
    const D = silnik().Drills;
    const r = D.pickTopic({ weakTag: "g-pron-diretti", isDone: zrobione([]), day: 3 });
    assert.equal(r.topic.id, "pronomi");
    assert.equal(r.why, "weak");
  });

  test("without a weak spot only topics already studied are drawn", () => {
    const D = silnik().Drills;
    const studiowane = ["a1-u02-l2", "a1-u04-l1"];
    const tematy = new Set();
    for (let day = 0; day < 30; day++) {
      const r = D.pickTopic({ weakTag: null, isDone: zrobione(studiowane), day });
      assert.equal(r.why, "studied");
      assert.ok(studiowane.indexOf(r.topic.from) >= 0, `${r.topic.id} is not studied`);
      tematy.add(r.topic.id);
    }
    assert.ok(tematy.size > 1, "the days still rotate among the studied topics");
  });

  test("before any topic is studied the earliest one is a declared preview", () => {
    const D = silnik().Drills;
    const r = D.pickTopic({ weakTag: null, isDone: zrobione(["a1-u01-l1"]), day: 5 });
    assert.equal(r.why, "preview");
    const najwczesniejszy = D.TOPICS.map(x => x.from).sort()[0];
    assert.equal(r.topic.from, najwczesniejszy);
  });

  test("a weak tag that no generator covers falls back to the studied topics", () => {
    const D = silnik().Drills;
    const r = D.pickTopic({ weakTag: "g-congiuntivo", isDone: zrobione(["a1-u04-l1"]), day: 0 });
    assert.equal(r.topic.id, "accordo");
    assert.equal(r.why, "studied");
  });
});
