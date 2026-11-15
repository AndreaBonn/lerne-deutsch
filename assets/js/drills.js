/* ============================================================
   drills.js — exercises derived from rules, not written by hand.

   Seven generators. Each is a PURE function of a seed: the same seed
   yields the same task, so a mistake card can point at a specific task
   with the pair (generator, seed), without storing any content.

   Why at all: a student who confuses "dem" with "den" needs two hundred
   repetitions, not four. The course has four, because each has to be
   written and translated into five languages. Here the content comes from
   the lexicon and the rules, so it costs neither a string nor a recording.

   The exercises are WRITTEN ONLY. A generated sentence is not in the
   recording index, so the speaker button would fall back to system
   synthesis — that is, to the mechanical voice this project avoids on
   principle. Hence the ban on `say` fields and on the listen and speak
   types.

   Classic script. Requires drills-lex.js, drills-de.js and i18n.js.
   ============================================================ */
(function (global) {
  "use strict";

  var Drills = {};
  var LexDe = global.LexDe;   // drills-de.js: not an eslint global, read off window
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
   * Preposition + article + noun. The sentence is a skeleton, not content:
   * what counts is the case the preposition governs and whether it contracts
   * with the article (zu dem -> zum), so the rest stays fixed. The prompt
   * gives the preposition and the noun with its nominative article ("der
   * Bahnhof"); the Wechselpräpositionen also say wo? (dative) or wohin?
   * (accusative). The answer is the whole phrase: a dative plural needs the
   * -n on the noun, so the bare article is accepted only where the noun does
   * not change. Dative contractions are required; accusative ones are optional.
   */
  function prepArt(rnd) {
    var group = pick(rnd, ["akk", "dat", "wechsel"]);
    var prep = pick(rnd, LexDe.PREPS[group]);
    var noun = pick(rnd, LexDe.NOUNS);
    var plural = rnd() < 0.35;
    var hint, kase = group;
    if (group === "wechsel") {
      var motion = rnd() < 0.5;
      hint = motion ? "wohin?" : "wo?";
      kase = motion ? "akk" : "dat";
    }
    var art = LexDe.article(kase, noun.g, plural, false);
    var head = LexDe.contract(prep, art) || prep + " " + art;
    var full = LexDe.prepPhrase(prep, kase, noun, plural);
    var changed = LexDe.nounForm(noun, kase, plural) !== (plural ? noun.pl : noun.s);
    var ex = {
      t: "fill",
      q: t("drill.prepArt.q", { prep: prep, noun: LexDe.article("nom", noun.g, plural, false) + " " + (plural ? noun.pl : noun.s) }),
      a: changed ? [full] : [full, head],
      tag: { akk: "g-praep-akk", dat: "g-praep-dativ", wechsel: "g-wechselpraep" }[group]
    };
    if (kase === "akk" && LexDe.contract(prep, art)) {
      ex.a.push(prep + " " + art + " " + LexDe.nounForm(noun, kase, plural));
      if (!changed) ex.a.push(prep + " " + art);
    }
    if (hint) ex.hint = hint;
    return ex;
  }

  /* The verbs that govern the accusative, and the dative ones (persons only:
     "Ich helfe ___ (das Fenster)" would be a strange sentence). */
  var ARTICLE_FRAMES = {
    akk: ["sehe", "suche", "brauche"],
    dat: ["helfe", "danke", "antworte"]
  };

  /**
   * The article by case. "Ich sehe ___ (der Hund)" -> "den Hund": the cue is
   * the nominative, the verb fixes the case, the answer is the group with its
   * article (definite or ein-) and, in the dative plural, the noun with -n.
   * The nominative is left out: its cue would be its own answer. The sentence
   * is German in full, so there is nothing to translate.
   */
  function artikel(rnd) {
    var kase = pick(rnd, ["akk", "dat"]);
    var noun = pick(rnd, kase === "dat" ? LexDe.NOUNS.filter(function (n) { return n.person; }) : LexDe.NOUNS);
    var plural = rnd() < 0.35;
    var indefinite = !plural && rnd() < 0.5;
    var shown = LexDe.article("nom", noun.g, plural, indefinite) + " " + (plural ? noun.pl : noun.s);
    var art = LexDe.article(kase, noun.g, plural, indefinite);
    var form = LexDe.nounForm(noun, kase, plural);
    var changed = form !== (plural ? noun.pl : noun.s);
    return {
      t: "fill",
      q: "Ich " + pick(rnd, ARTICLE_FRAMES[kase]) + " ___ (" + shown + ")",
      a: changed ? [art + " " + form] : [art + " " + form, art],
      tag: kase === "akk" ? "g-artikel-akk" : "g-artikel-dat"
    };
  }

  /**
   * Choosing the auxiliary of the Perfekt. Verbs marked "both" accept both
   * answers: "ist gefahren" and "hat gefahren" are both correct and mean
   * different things. An exercise that accepts only one teaches something
   * false.
   */
  function ausiliare(rnd) {
    var verb = pick(rnd, LexDe.VERBS);
    var opts = ["haben", "sein"];
    var a = verb.aux === "haben" ? 0 : verb.aux === "sein" ? 1 : null;
    if (a === null) {
      return {
        t: "multi",
        q: t("drill.aux.both", { verb: verb.inf }),
        opts: opts,
        a: [0, 1],
        why: t("drill.aux.whyBoth", { verb: verb.inf })
      };
    }
    return {
      t: "mcq",
      q: t("drill.aux.q", { verb: verb.inf }),
      opts: opts,
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
    return {
      t: "fill",
      q: t("drill.pron.q", { sentence: sentence }),
      a: [who[kase]],
      tag: { nom: "g-personalpron", akk: "g-pron-akk", dat: "g-pron-dat" }[kase]
    };
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
   * `tags` are ids of the German GRAMMAR_REF (specs/german-course/curriculum.md),
   * so that the mistake notebook names the topic in words already translated
   * into five languages. The first one is the primary tag, shown under the
   * topic; a generator that mixes grammar points tags each task with the one
   * it asked about (`ex.tag`, moved to the item by make), so a mistake lands
   * under the right point. Numbers, dates and times go under `g-temporalangaben`:
   * the curriculum has no id of their own, and that is the closest one.
   */
  /* `from` is the lesson that teaches what the generator asks for, the latest
     one when the topic mixes several: the drill must not ask what the student
     has not met. The tag cannot say it. `sample` is German, so it needs no
     translation: it shows on the Training list what the drill asks for. */
  var TOPICS = [
    { id: "prep-art", tags: ["g-praep-dativ", "g-praep-akk", "g-wechselpraep"], from: "a1-u09-l4",
      sample: "zu + dem = zum · in + das = ins", make: prepArt },
    { id: "artikel", tags: ["g-artikel-akk", "g-artikel-dat"], from: "a1-u06-l1",
      sample: "den Hund · dem Kind · den Kindern", make: artikel },
    { id: "ausiliare", tags: ["g-perfekt"], from: "a1-u10-l2",
      sample: "ich bin gegangen · ich habe gegessen", make: ausiliare },
    { id: "pronomi", tags: ["g-personalpron", "g-pron-akk", "g-pron-dat"], from: "a2-u03-l1",
      sample: "ich sehe ihn · ich helfe ihr", make: pronomi },
    { id: "numeri", tags: ["g-temporalangaben"], from: "a1-u02-l2",
      sample: "einundzwanzig · achtunddreißig · hundert", make: numeri },
    { id: "date", tags: ["g-temporalangaben"], from: "a1-u02-l2",
      sample: "am dritten Mai · der erste Juni", make: date },
    { id: "ore", tags: ["g-temporalangaben"], from: "a1-u05-l2",
      sample: "halb drei · Viertel vor vier", make: ore }
  ];
  TOPICS.forEach(function (x) { x.tag = x.tags[0]; });

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
    var tag = ex.tag || topic.tag;
    delete ex.tag;
    return { ex: ex, topicId: topicId, tag: tag, seed: String(seed) };
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
    var weak = TOPICS.filter(function (x) { return x.tags.indexOf(o.weakTag) >= 0; })[0];
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
