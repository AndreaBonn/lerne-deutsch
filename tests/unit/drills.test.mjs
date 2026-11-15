/* ============================================================
   The exercise generators.

   They are pure functions of a seed, so they can be checked in full without
   a browser. Three things at once: whether the same seed yields the same
   task, whether the answer key is correct German, and whether anything
   leaked towards recordings, which a generated sentence does not have and
   never will.
   ============================================================ */
import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { loadEngine } from "./_harness.mjs";

/* verbs-data.js first: the auxiliary drill reads VERB_TABLES.SEIN_VERBS. */
const PLIKI = ["assets/js/verbs-data.js", "assets/js/drills-lex.js", "assets/js/drills-de.js", "assets/js/drills.js"];

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

/* The noun and its number, read back from what the student sees: the article
   of the cue ("die Frau" / "die Frauen" / "die Zimmer") and the word. A
   feminine singular is the only "die" that is not a plural. */
function cueNoun(S, art, word) {
  const bySing = new Map(S.LexDe.NOUNS.map((n) => [n.s, n]));
  const byPl = new Map(S.LexDe.NOUNS.map((n) => [n.pl, n]));
  const noun = bySing.get(word) || byPl.get(word);
  assert.ok(noun, `${word} is not in the lexicon`);
  return { noun, plural: art === "die" && !(noun.g === "f" && word === noun.s) };
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
      trafione.add(param(ex, "verb"));
    }
    assert.equal(trafione.size, S.LexDe.VERBS.length,
      `covered ${trafione.size} of ${S.LexDe.VERBS.length} verbs`);
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

describe("Perfekt auxiliary: haben or sein (T1.46)", () => {
  /* The sein side is whatever verbs-data.js says; the haben side must not
     overlap it. The expectations below are written out by hand so that a
     wrong verb in the lexicon cannot agree with itself. */
  const BOTH = ["fahren", "fliegen", "reiten", "schwimmen", "segeln"];

  function ziehen(anzahl, praefix) {
    const S = silnik();
    const out = [];
    for (let i = 0; i < anzahl; i++) {
      const { ex } = S.Drills.make("ausiliare", praefix + i);
      out.push({ ex, verb: param(ex, "verb") });
    }
    return out;
  }

  test("the options are haben and sein, in that order, never shuffled", () => {
    const { ex } = silnik().Drills.make("ausiliare", "opts");
    assert.equal(JSON.stringify(ex.opts), JSON.stringify(["haben", "sein"]));
    assert.equal(ex.shuffle, false);
  });

  test("a verb of change of place gets sein, a plain action gets haben", () => {
    const wissen = new Map();
    ziehen(600, "x").forEach(({ ex, verb }) => wissen.set(verb, ex));
    ["gehen", "kommen", "bleiben", "aufstehen", "sterben"].forEach((v) => {
      assert.ok(wissen.has(v), `${v} never came up`);
      assert.equal(wissen.get(v).t, "mcq", v);
      assert.equal(wissen.get(v).a, 1, `${v} takes sein`);
    });
    ["essen", "machen", "lesen", "tanzen", "haben"].forEach((v) => {
      assert.ok(wissen.has(v), `${v} never came up`);
      assert.equal(wissen.get(v).a, 0, `${v} takes haben`);
    });
  });

  test("sein verbs are exactly the ones VERB_TABLES.SEIN_VERBS lists, haben verbs are none of them", () => {
    const S = silnik();
    const sein = Array.from(S.VERB_TABLES.SEIN_VERBS);
    S.LexDe.VERBS.forEach((v) => {
      if (v.aux === "sein") assert.ok(sein.includes(v.inf), `${v.inf} is not in SEIN_VERBS`);
      if (v.aux === "haben") assert.ok(!sein.includes(v.inf.replace(/^sich /, "")), `${v.inf} is in SEIN_VERBS`);
      if (v.aux === "both") assert.ok(BOTH.includes(v.inf), `${v.inf} unexpected as both`);
    });
  });

  test("every listed sein verb is really in SEIN_VERBS: none is dropped on the way", () => {
    const { LexDe } = silnik();
    const sein = LexDe.VERBS.filter((v) => v.aux === "sein").map((v) => v.inf);
    assert.equal(sein.length, 18, `sein verbs in the drill: ${sein}`);
    assert.equal(LexDe.VERBS.filter((v) => v.aux === "both").length, BOTH.length);
    /* They are read FROM the table, in its order, not copied next to it. */
    const table = Array.from(silnik().VERB_TABLES.SEIN_VERBS).filter((v) => sein.includes(v));
    assert.equal(sein.join(), table.join());
  });

  test("fahren, fliegen, reiten, schwimmen, segeln accept both auxiliaries", () => {
    const gesehen = new Set();
    ziehen(600, "b").forEach(({ ex, verb }) => {
      if (!BOTH.includes(verb)) return;
      gesehen.add(verb);
      assert.equal(ex.t, "multi", `${verb} should accept both`);
      /* The array comes from the sandbox: deepEqual would compare
         prototypes from two realms and reject even identical content. */
      assert.equal(JSON.stringify(ex.a), "[0,1]");
    });
    assert.equal(gesehen.size, BOTH.length, `only ${Array.from(gesehen)} came up`);
  });

  test("a reflexive verb takes haben and says why", () => {
    const refl = ziehen(600, "r").filter(({ verb }) => /^sich /.test(verb));
    assert.ok(refl.length > 0, "no reflexive verb came up");
    refl.forEach(({ ex, verb }) => {
      assert.equal(ex.a, 0, verb);
      assert.equal(ex.why, "drill.aux.whyRefl", verb);
    });
  });

  test("the explanation follows the auxiliary", () => {
    ziehen(200, "w").forEach(({ ex, verb }) => {
      if (ex.t !== "mcq" || /^sich /.test(verb)) return;
      assert.equal(ex.why, ex.a === 1 ? "drill.aux.whyEssere" : "drill.aux.whyAvere", verb);
    });
  });
});

describe("articles by case (T1.48)", () => {
  /* Every cell of the paradigm, written out: der/den/dem/des, die/die/der/der,
     das/das/dem/des, plural die/die/den/der; ein-/einen/einem/eines, eine/eine/einer/einer. */
  const DEF = {
    nom: { m: "der", f: "die", n: "das", pl: "die" },
    akk: { m: "den", f: "die", n: "das", pl: "die" },
    dat: { m: "dem", f: "der", n: "dem", pl: "den" },
    gen: { m: "des", f: "der", n: "des", pl: "der" }
  };
  const INDEF = {
    nom: { m: "ein", f: "eine", n: "ein" },
    akk: { m: "einen", f: "eine", n: "ein" },
    dat: { m: "einem", f: "einer", n: "einem" },
    gen: { m: "eines", f: "einer", n: "eines" }
  };

  test("the definite article in all 16 cells", () => {
    const { LexDe } = silnik();
    Object.keys(DEF).forEach((k) => {
      ["m", "f", "n"].forEach((g) => assert.equal(LexDe.article(k, g, false, false), DEF[k][g], `${k} ${g}`));
      assert.equal(LexDe.article(k, "m", true, false), DEF[k].pl, `${k} plural`);
    });
  });

  test("the indefinite article in all 12 cells, and none in the plural", () => {
    const { LexDe } = silnik();
    Object.keys(INDEF).forEach((k) => {
      ["m", "f", "n"].forEach((g) => assert.equal(LexDe.article(k, g, false, true), INDEF[k][g], `${k} ${g}`));
      assert.equal(LexDe.article(k, "f", true, true), null, `${k}: ein has no plural`);
    });
  });

  test("the dative plural takes -n unless the plural already ends in n or s", () => {
    const { LexDe } = silnik();
    const dat = (s, pl) => LexDe.nounForm({ s, g: "m", pl }, "dat", true);
    assert.equal(dat("Kind", "Kinder"), "Kindern");
    assert.equal(dat("Haus", "Häuser"), "Häusern");
    assert.equal(dat("Hund", "Hunde"), "Hunden");
    assert.equal(dat("Zimmer", "Zimmer"), "Zimmern");
    assert.equal(dat("Frau", "Frauen"), "Frauen");
    assert.equal(dat("Auto", "Autos"), "Autos");
    assert.equal(LexDe.nounForm({ s: "Kind", g: "n", pl: "Kinder" }, "akk", true), "Kinder");
    assert.equal(LexDe.nounForm({ s: "Kind", g: "n", pl: "Kinder" }, "dat", false), "Kind");
  });

  test("every noun carries a gender and a plural, and the dative plural ends in n or s", () => {
    const { LexDe } = silnik();
    assert.ok(LexDe.NOUNS.length >= 30);
    LexDe.NOUNS.forEach((n) => {
      assert.ok(["m", "f", "n"].includes(n.g), n.s);
      assert.match(n.pl, /^[A-ZÄÖÜ][a-zäöüßé]+$/, n.s);
      assert.match(LexDe.nounForm(n, "dat", true), /[ns]$/, n.s);
    });
  });

  /* The cue "(der Hund)" is the whole question, so it is the oracle: the
     gender comes from the cue, the case from the verb in the frame. */
  const AKK = ["sehe", "suche", "brauche"];
  const DAT = ["helfe", "danke", "antworte"];

  function artikelAufgaben(anzahl) {
    const S = silnik();
    const out = [];
    for (let i = 0; i < anzahl; i++) {
      const item = S.Drills.make("artikel", "a" + i);
      const m = /^Ich (\w+) ___ \(((?:der|die|das|ein|eine) )?([^)]+)\)$/.exec(item.ex.q);
      assert.ok(m, `unexpected frame: ${item.ex.q}`);
      out.push({ item, verb: m[1], cueArt: (m[2] || "").trim(), cueWord: m[3] });
    }
    return out;
  }

  test("the answer is the article for the case the verb governs, with the noun in that case", () => {
    const S = silnik();
    let dativPlural = 0;
    artikelAufgaben(500).forEach(({ item, verb, cueArt, cueWord }) => {
      const { noun, plural } = cueNoun(S, cueArt, cueWord);
      const kase = AKK.includes(verb) ? "akk" : DAT.includes(verb) ? "dat" : null;
      assert.ok(kase, `unknown verb ${verb}`);
      const indef = cueArt === "ein" || cueArt === "eine";
      const art = indef ? INDEF[kase][noun.g] : DEF[kase][plural ? "pl" : noun.g];
      const form = plural ? (kase === "dat" && !/[ns]$/.test(noun.pl) ? noun.pl + "n" : noun.pl) : noun.s;
      assert.equal(item.ex.a[0], `${art} ${form}`, item.ex.q);
      if (kase === "dat" && plural && form !== noun.pl) {
        dativPlural++;
        assert.equal(item.ex.a.length, 1, "the bare article would let the missing -n through");
      } else {
        assert.ok(item.ex.a.includes(art), `${art} alone should be accepted for ${item.ex.q}`);
      }
      assert.equal(item.tag, kase === "akk" ? "g-artikel-akk" : "g-artikel-dat");
      assert.equal(item.ex.tag, undefined, "the per-task tag moves to the item");
    });
    assert.ok(dativPlural > 0, "no dative plural with -n came up");
  });

  test("ein never meets a plural, and the dative frames only take persons", () => {
    const S = silnik();
    const persons = new Set(S.LexDe.NOUNS.filter((n) => n.person).flatMap((n) => [n.s, n.pl]));
    const seen = { akk: new Set(), dat: new Set(), indef: 0, def: 0 };
    artikelAufgaben(500).forEach(({ verb, cueArt, cueWord }) => {
      const kase = AKK.includes(verb) ? "akk" : "dat";
      seen[kase].add(cueWord);
      if (kase === "dat") assert.ok(persons.has(cueWord), `${verb} ___ ${cueWord}: not a person`);
      if (cueArt === "ein" || cueArt === "eine") {
        seen.indef++;
        assert.ok(!cueNoun(S, cueArt, cueWord).plural, `ein before plural ${cueWord}`);
      } else seen.def++;
    });
    assert.ok(seen.indef > 0 && seen.def > 0, "both articles should come up");
    assert.ok(seen.akk.size > seen.dat.size, "accusative draws on the whole lexicon");
  });
});

describe("prepositions with case and contraction (T1.47)", () => {
  const AKK = ["durch", "für", "gegen", "ohne", "um"];
  const DAT = ["aus", "bei", "mit", "nach", "seit", "von", "zu"];
  const WECHSEL = ["in", "an", "auf", "über", "unter", "vor", "hinter", "neben", "zwischen"];
  const CONTRACTION = {
    "zu dem": "zum", "zu der": "zur", "bei dem": "beim", "von dem": "vom",
    "in dem": "im", "an dem": "am", "in das": "ins", "an das": "ans"
  };

  test("the lexicon lists the prepositions of each group", () => {
    const { LexDe } = silnik();
    assert.equal(JSON.stringify(LexDe.PREPS.akk), JSON.stringify(AKK));
    assert.equal(JSON.stringify(LexDe.PREPS.dat), JSON.stringify(DAT));
    assert.equal(JSON.stringify(LexDe.PREPS.wechsel), JSON.stringify(WECHSEL));
  });

  test("the eight contractions, and nothing contracted that should not be", () => {
    const { LexDe } = silnik();
    Object.keys(CONTRACTION).forEach((k) => {
      const [p, a] = k.split(" ");
      assert.equal(LexDe.contract(p, a), CONTRACTION[k], k);
    });
    assert.equal(LexDe.contract("mit", "dem"), null);
    assert.equal(LexDe.contract("zu", "den"), null);
    assert.equal(LexDe.contract("zu", "das"), null);
    assert.equal(LexDe.contract("in", "der"), null);
    assert.equal(LexDe.contract("für", "das"), null);
  });

  test("a phrase is preposition + article in the right case + noun, contracted where German does", () => {
    const { LexDe } = silnik();
    const N = (s, g, pl) => ({ s, g, pl });
    const bahnhof = N("Bahnhof", "m", "Bahnhöfe"), frau = N("Frau", "f", "Frauen");
    const haus = N("Haus", "n", "Häuser"), kind = N("Kind", "n", "Kinder");
    assert.equal(LexDe.prepPhrase("zu", "dat", bahnhof, false), "zum Bahnhof");
    assert.equal(LexDe.prepPhrase("zu", "dat", frau, false), "zur Frau");
    assert.equal(LexDe.prepPhrase("bei", "dat", frau, false), "bei der Frau");
    assert.equal(LexDe.prepPhrase("mit", "dat", kind, true), "mit den Kindern");
    assert.equal(LexDe.prepPhrase("mit", "dat", bahnhof, false), "mit dem Bahnhof");
    assert.equal(LexDe.prepPhrase("von", "dat", haus, false), "vom Haus");
    assert.equal(LexDe.prepPhrase("durch", "akk", bahnhof, false), "durch den Bahnhof");
    assert.equal(LexDe.prepPhrase("für", "akk", frau, false), "für die Frau");
    assert.equal(LexDe.prepPhrase("ohne", "akk", kind, true), "ohne die Kinder");
    assert.equal(LexDe.prepPhrase("in", "dat", haus, false), "im Haus");
    assert.equal(LexDe.prepPhrase("in", "akk", haus, false), "ins Haus");
    assert.equal(LexDe.prepPhrase("an", "dat", haus, false), "am Haus");
    assert.equal(LexDe.prepPhrase("an", "akk", haus, false), "ans Haus");
    assert.equal(LexDe.prepPhrase("in", "akk", bahnhof, false), "in den Bahnhof");
    assert.equal(LexDe.prepPhrase("auf", "dat", frau, false), "auf der Frau");
    assert.equal(LexDe.prepPhrase("hinter", "akk", kind, true), "hinter die Kinder");
    assert.equal(LexDe.prepPhrase("neben", "dat", kind, true), "neben den Kindern");
  });

  /* The cue ("der Bahnhof") and the preposition are in the prompt, the
     question for the Wechselpräpositionen carries wo? / wohin? as the hint:
     together they are the oracle. */
  function praepAufgaben(anzahl) {
    const S = silnik();
    const out = [];
    for (let i = 0; i < anzahl; i++) {
      const item = S.Drills.make("prep-art", "pp" + i);
      const [cueArt, cueWord] = param(item.ex, "noun").split(" ");
      out.push({ item, prep: param(item.ex, "prep"), ...cueNoun(S, cueArt, cueWord), hint: item.ex.hint });
    }
    return out;
  }

  test("accusative contractions accept separate forms; dative contractions remain required", () => {
    const cases = [
      ["pp3625", "in", "wohin?", "das Haus", ["ins Haus", "ins", "in das Haus", "in das"]],
      ["pp11772", "an", "wohin?", "das Haus", ["ans Haus", "ans", "an das Haus", "an das"]],
      ["pp2815", "in", "wo?", "das Haus", ["im Haus", "im"]],
      ["pp3324", "an", "wo?", "das Haus", ["am Haus", "am"]],
      ["pp54", "zu", undefined, "der Bahnhof", ["zum Bahnhof", "zum"]],
      ["pp3669", "zu", undefined, "die Frau", ["zur Frau", "zur"]],
      ["pp112", "von", undefined, "das Haus", ["vom Haus", "vom"]],
      ["pp535", "bei", undefined, "das Haus", ["beim Haus", "beim"]]
    ];
    const { Drills } = silnik();
    for (const [seed, prep, hint, noun, answers] of cases) {
      const { ex } = Drills.make("prep-art", seed);
      assert.equal(param(ex, "prep"), prep, seed);
      assert.equal(param(ex, "noun"), noun, seed);
      assert.equal(ex.hint, hint, seed);
      assert.deepEqual(Array.from(ex.a), answers, seed);
    }
  });

  test("the answer is the phrase in the case the preposition governs, contracted when possible", () => {
    const DEF = { akk: { m: "den", f: "die", n: "das", pl: "die" }, dat: { m: "dem", f: "der", n: "dem", pl: "den" } };
    const gesehen = { prep: new Set(), contr: new Set(), wo: 0, wohin: 0 };
    praepAufgaben(900).forEach(({ item, prep, noun, plural, hint }) => {
      assert.ok(noun, `noun not found for ${prep}`);
      let kase;
      if (AKK.includes(prep)) kase = "akk";
      else if (DAT.includes(prep)) kase = "dat";
      else {
        assert.ok(WECHSEL.includes(prep), `unknown preposition ${prep}`);
        assert.ok(hint === "wo?" || hint === "wohin?", `${prep}: hint ${hint}`);
        kase = hint === "wo?" ? "dat" : "akk";
        gesehen[hint === "wo?" ? "wo" : "wohin"]++;
      }
      if (!WECHSEL.includes(prep)) assert.equal(hint, undefined, `${prep} governs one case: no hint`);
      const art = DEF[kase][plural ? "pl" : noun.g];
      const form = plural ? (kase === "dat" && !/[ns]$/.test(noun.pl) ? noun.pl + "n" : noun.pl) : noun.s;
      const contracted = CONTRACTION[`${prep} ${art}`];
      const erwartet = (contracted || `${prep} ${art}`) + " " + form;
      assert.equal(item.ex.a[0], erwartet, `${prep} + ${noun.s} (${kase})`);
      assert.equal(item.ex.a.includes(contracted || `${prep} ${art}`), !(kase === "dat" && plural && form !== noun.pl),
        "the bare preposition + article is accepted unless the noun changes");
      if (contracted) {
        gesehen.contr.add(contracted);
        assert.equal(item.ex.a.includes(`${prep} ${art} ${form}`), kase === "akk",
          "only accusative contractions accept the uncontracted phrase");
      }
      gesehen.prep.add(prep);
      const tag = AKK.includes(prep) ? "g-praep-akk" : DAT.includes(prep) ? "g-praep-dativ" : "g-wechselpraep";
      assert.equal(item.tag, tag, prep);
      assert.equal(item.ex.tag, undefined);
    });
    assert.equal(gesehen.prep.size, AKK.length + DAT.length + WECHSEL.length, "every preposition should come up");
    assert.equal(gesehen.contr.size, 8, `contractions seen: ${Array.from(gesehen.contr)}`);
    assert.ok(gesehen.wo > 0 && gesehen.wohin > 0, "both wo? and wohin? should come up");
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
    /* The German ids of specs/german-course/curriculum.md that a generator
       may use - here we only check that every tag is one of them; full
       agreement with GRAMMAR_REF is guarded by validate.mjs. */
    const ZNANE = ["g-praep-akk", "g-praep-dativ", "g-wechselpraep", "g-artikel-akk", "g-artikel-dat",
      "g-perfekt", "g-personalpron", "g-pron-akk", "g-pron-dat", "g-temporalangaben"];
    S.Drills.TOPICS.forEach(topic => {
      assert.ok(topic.tags.length > 0, `${topic.id}: no tags`);
      assert.equal(topic.tag, topic.tags[0], `${topic.id}: the primary tag leads the list`);
      topic.tags.forEach(tag => assert.ok(ZNANE.indexOf(tag) >= 0, `${topic.id}: tag ${tag}`));
    });
  });

  test("every task carries one of the tags of its topic, and each tag of a mixed topic is reachable", () => {
    const S = silnik();
    S.Drills.TOPICS.forEach(topic => {
      const gesehen = new Set();
      for (let i = 0; i < 300; i++) {
        const { tag } = S.Drills.make(topic.id, "tg" + i);
        assert.ok(topic.tags.indexOf(tag) >= 0, `${topic.id}: task tag ${tag}`);
        gesehen.add(tag);
      }
      assert.equal(gesehen.size, topic.tags.length, `${topic.id}: tags seen ${Array.from(gesehen)}`);
    });
  });

  test("the topics are the German ones: no Italian generator is left", () => {
    const ids = silnik().Drills.TOPICS.map(x => x.id);
    assert.equal(JSON.stringify(ids), JSON.stringify(["prep-art", "artikel", "ausiliare", "pronomi", "numeri", "date", "ore"]));
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

  test("a weak tag reaches the topic that produces it, even when it is not the primary one", () => {
    const D = silnik().Drills;
    const r = D.pickTopic({ weakTag: "g-wechselpraep", isDone: zrobione([]), day: 0 });
    assert.equal(r.topic.id, "prep-art");
    assert.equal(r.why, "weak");
  });

  test("a weak spot wins, as before", () => {
    const D = silnik().Drills;
    const r = D.pickTopic({ weakTag: "g-pron-akk", isDone: zrobione([]), day: 3 });
    assert.equal(r.topic.id, "pronomi");
    assert.equal(r.why, "weak");
  });

  test("without a weak spot only topics already studied are drawn", () => {
    const D = silnik().Drills;
    const studiowane = ["a1-u02-l2", "a1-u06-l1"];
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
    const r = D.pickTopic({ weakTag: "g-konjunktiv2", isDone: zrobione(["a1-u06-l1"]), day: 0 });
    assert.equal(r.topic.id, "artikel");
    assert.equal(r.why, "studied");
  });
});
