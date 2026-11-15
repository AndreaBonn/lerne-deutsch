/* ============================================================
   drills.js — exercises derived from rules, not written by hand.

   Seven generators. Each is a PURE function of a seed: the same seed
   yields the same task, so a mistake card can point at a specific task
   with the pair (generator, seed), without storing any content.

   Why at all: a student who confuses "del" with "dello" needs two hundred
   repetitions, not four. The course has four, because each has to be
   written and translated into five languages. Here the content comes from
   the lexicon and the rules, so it costs neither a string nor a recording.

   The exercises are WRITTEN ONLY. A generated sentence is not in the
   recording index, so the speaker button would fall back to system
   synthesis — that is, to the mechanical voice this project avoids on
   principle. Hence the ban on `say` fields and on the listen and speak
   types.

   Classic script. Requires drills-lex.js and i18n.js.
   ============================================================ */
(function (global) {
  "use strict";

  var Drills = {};
  var t = function (k, v) { return I18n.t(k, v); };

  /* ---------------- Repeatable randomness ---------------- */

  /**
   * xorshift seeded with a string: the same seed content, the same sequence.
   *
   * Tried and rejected: a warm-up (a few turns discarded before the first
   * result), in case neighbouring seeds "n0", "n1" produced neighbouring
   * states. Lexicon coverage is complete with it and without it — 172 green
   * tests in both versions — so it does not stay.
   */
  function rng(seed) {
    var h = 2166136261;
    var s = String(seed);
    for (var i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
    return function () {
      h ^= h << 13; h ^= h >>> 17; h ^= h << 5;
      return ((h >>> 0) % 100000) / 100000;
    };
  }

  function pick(rnd, arr) { return arr[Math.floor(rnd() * arr.length) % arr.length]; }

  /* ---------------- Generators ---------------- */

  /**
   * A contracted preposition. The sentence is a skeleton, not content: what
   * counts is the choice of form, so the rest of the sentence stays fixed
   * and does not distract.
   */
  function prepArt(rnd) {
    var noun = pick(rnd, Lex.NOUNS);
    var plural = rnd() < 0.35;
    var word = plural ? Lex.pluralOf(noun) : noun.s;
    var art = Lex.definite(word, noun.g, plural);
    var prep = pick(rnd, Lex.PREPS);
    var odp = Lex.articulate(prep, art);
    return {
      t: "fill",
      q: t("drill.prepArt.q", { prep: prep, noun: word }),
      hint: prep + " + " + art,
      a: [odp, odp + " " + word]
    };
  }

  /** Agreement of the adjective with the noun. */
  function accordo(rnd) {
    var noun = pick(rnd, Lex.NOUNS);
    var adj = pick(rnd, Lex.ADJ);
    var plural = rnd() < 0.5;
    var word = plural ? Lex.pluralOf(noun) : noun.s;
    var art = Lex.definite(word, noun.g, plural);
    return {
      t: "fill",
      q: t("drill.accordo.q", { group: art + " " + word, adj: adj.s }),
      a: [Lex.adjForm(adj, noun.g, plural)]
    };
  }

  /**
   * Choosing the auxiliary. Verbs marked "both" accept both answers:
   * "è cambiato" and "ha cambiato" are both correct and mean different
   * things. An exercise that accepts only one teaches something false.
   */
  function ausiliare(rnd) {
    var verb = pick(rnd, Lex.VERBS);
    var opcje = ["ho", "sono"];
    var a = verb.aux === "avere" ? 0 : verb.aux === "essere" ? 1 : null;
    if (a === null) {
      return {
        t: "multi",
        q: t("drill.aux.both", { verb: verb.inf }),
        opts: opcje,
        a: [0, 1],
        why: t("drill.aux.whyBoth", { verb: verb.inf })
      };
    }
    return {
      t: "mcq",
      q: t("drill.aux.q", { verb: verb.inf }),
      opts: opcje,
      a: a,
      shuffle: false,
      why: t(verb.refl ? "drill.aux.whyRefl" : a === 1 ? "drill.aux.whyEssere" : "drill.aux.whyAvere")
    };
  }

  /* Verb forms for the pronoun frames: [singular, plural] 3rd person, and
     the verbs that govern the accusative or the dative. */
  var SUBJECT_VERBS = [["kommt", "kommen"], ["wohnt", "wohnen"], ["lernt", "lernen"], ["arbeitet", "arbeiten"]];
  var CASE_VERBS = {
    akk: ["sieht", "besucht", "kennt", "braucht"],
    dat: ["hilft", "dankt", "antwortet", "glaubt"]
  };

  /**
   * A personal pronoun in the nominative, accusative or dative. The cue in
   * brackets names who is replaced ("Lukas sieht ___ (Tom)" -> ihn); a
   * subject needs a verb that agrees with it, so the nominative frame picks
   * the plural form for wir and "sie" (plural) and the singular otherwise.
   * A pronoun whose cue would be its own answer ("Sie" in the accusative) is
   * left out of that case.
   */
  function pronomi(rnd) {
    var kase = pick(rnd, ["nom", "akk", "dat"]);
    var who = pick(rnd, Lex.PRONOUNS.filter(function (p) {
      var cue = kase === "nom" ? p.nomCue : p.cue;
      return cue && cue.toLowerCase() !== p[kase].toLowerCase();
    }));
    var sentence;
    if (kase === "nom") {
      sentence = "___ " + pick(rnd, SUBJECT_VERBS)[who.plural ? 1 : 0] + " (" + who.nomCue + ")";
    } else {
      sentence = "Lukas " + pick(rnd, CASE_VERBS[kase]) + " ___ (" + who.cue + ")";
    }
    return { t: "fill", q: t("drill.pron.q", { sentence: sentence }), a: [who[kase]] };
  }

  /* ---------------- Numbers, dates, times ---------------- */

  function numeri(rnd) {
    /* The ranges are chosen for what causes trouble: eins/ein, und-order,
       the optional "ein" of hundert and tausend, big numbers. A random
       number from 0-1000000 would hit them rarely. */
    var ranges = [[0, 20], [21, 99], [100, 199], [200, 999], [1000, 1999], [2000, 9999],
      [10000, 999999], [1000000, 1000000]];
    var range = pick(rnd, ranges);
    var n = range[0] + Math.floor(rnd() * (range[1] - range[0] + 1));
    return { t: "fill", q: t("drill.num.q", { n: n }), a: Lex.numeralVariants(n) };
  }

  /**
   * A date. The prompt shows the digits ("3. März") and the answer is
   * spelled out: "am dritten März", "der dritte März" or "den dritten März".
   * A month never gets a day it does not have.
   */
  function date(rnd) {
    var month = Math.floor(rnd() * 12);
    var day = 1 + Math.floor(rnd() * Lex.MONTH_DAYS[month]);
    return {
      t: "fill",
      q: t("drill.date.q", { day: day + ".", month: Lex.MONTHS[month] }),
      a: Lex.dateAnswers(day, month)
    };
  }

  function two(n) { return (n < 10 ? "0" : "") + n; }

  /**
   * The time. The prompt gives HH:MM without fixing a register, so the key
   * accepts colloquial ("halb drei") and official ("vierzehn Uhr dreißig").
   */
  function ore(rnd) {
    var h = Math.floor(rnd() * 24);
    var m = 5 * Math.floor(rnd() * 12);
    return { t: "fill", q: t("drill.ore.q", { time: two(h) + ":" + two(m) }), a: Lex.clockAnswers(h, m) };
  }

  /* ---------------- The registry ---------------- */

  /**
   * The tags point at existing GRAMMAR_REF entries, so that the mistake
   * notebook names the topic in words already translated into five
   * languages. Numbers go under `g-frase`, dates and times under
   * `g-articolo-det`: both are about choosing the article ("il primo"
   * against "l'otto", "le due" against "l'una"), so it is not a stretch.
   */
  /* `from` is the lesson that teaches what the generator asks for. The tag
     cannot say it: "numeri" carries g-frase, which the very first lesson
     already has, while numbers arrive in unit 2. Dates need the numbers and
     the article, nothing later. `sample` is Italian, so it needs no
     translation: it shows on the Training list what the drill asks for. */
  var TOPICS = [
    { id: "prep-art", tag: "g-preposizioni", from: "a1-u06-l1", sample: "di + il = del · in + la = nella", make: prepArt },
    { id: "accordo", tag: "g-agg-accordo", from: "a1-u04-l1", sample: "rosso, rossa, rossi, rosse", make: accordo },
    { id: "ausiliare", tag: "g-passato-prossimo", from: "a1-u10-l2", sample: "sono andato · ho mangiato", make: ausiliare },
    { id: "pronomi", tag: "g-pron-diretti", from: "a2-u03-l1", sample: "lo vedo · la chiamo · li compro", make: pronomi },
    { id: "numeri", tag: "g-frase", from: "a1-u02-l2", sample: "ventuno · trentotto · cento", make: numeri },
    { id: "date", tag: "g-articolo-det", from: "a1-u02-l2", sample: "il tre maggio · il primo giugno", make: date },
    { id: "ore", tag: "g-articolo-det", from: "a1-u05-l2", sample: "sono le tre · è l'una", make: ore }
  ];

  var byId = {};
  TOPICS.forEach(function (x) { byId[x.id] = x; });

  /* The fields a generated exercise has no right to carry: each of them
     would lead the engine to a recording that does not exist. */
  var FORBIDDEN = ["say", "alt"];
  var FORBIDDEN_TYPES = ["listen", "speak"];

  /** One task from a generator. Pure: (id, seed) -> always the same. */
  function make(topicId, seed) {
    var topic = byId[topicId];
    if (!topic) return null;
    var ex = topic.make(rng(topicId + "|" + seed));
    FORBIDDEN.forEach(function (f) { delete ex[f]; });
    if (FORBIDDEN_TYPES.indexOf(ex.t) >= 0) return null;
    return { ex: ex, topicId: topicId, tag: topic.tag, seed: String(seed) };
  }

  /** A run of n tasks on one topic. */
  function session(topicId, n, seedBase) {
    var out = [];
    for (var i = 0; i < n; i++) {
      var item = make(topicId, seedBase + "#" + i);
      if (item) out.push(item);
    }
    return out;
  }

  /**
   * The drill of the daily session. A weak spot (the tag with the most open
   * mistake cards) wins when a generator covers it; otherwise the day rotates
   * among the topics whose lesson is passed; with none passed yet, the
   * earliest one comes as a declared preview. Lesson ids sort in course order
   * (a1-u02 < a1-u10 < a2-u03), so the earliest is the smallest `from`.
   *
   * @param {{weakTag: ?string, isDone: function(string): boolean, day: number}} o
   * @returns {{topic: Object, why: string}} why = "weak" | "studied" | "preview"
   */
  function pickTopic(o) {
    var weak = TOPICS.filter(function (x) { return x.tag === o.weakTag; })[0];
    if (weak) return { topic: weak, why: "weak" };
    var studied = TOPICS.filter(function (x) { return o.isDone(x.from); });
    if (studied.length) return { topic: studied[o.day % studied.length], why: "studied" };
    var first = TOPICS.slice().sort(function (a, b) { return a.from < b.from ? -1 : a.from > b.from ? 1 : 0; })[0];
    return { topic: first, why: "preview" };
  }

  Drills.TOPICS = TOPICS;
  Drills.pickTopic = pickTopic;
  Drills.make = make;
  Drills.session = session;
  Drills.numeral = Lex.numeral;
  Drills.MESI = Lex.MONTHS;

  global.Drills = Drills;

})(window);
