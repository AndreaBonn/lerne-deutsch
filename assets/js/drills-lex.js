/* ============================================================
   drills-lex.js — the numbers, clock times, dates and personal pronouns
   of the generators.

   German only. The generator produces exercises from rules, so glosses are
   unnecessary: not a single word in the student's language lives here, and
   adding an interface language does not touch this file.

   The forms are not transcribed from tables but derived by rule wherever a
   rule exists: a number is built from its parts, a clock time from the
   hour and the minute. It is the same idea as Verbs.conjugate — the content
   cannot drift away from the answer key, because the key is computed by the
   same function as the question.

   The nouns, articles, prepositions and verbs of the grammar drills are in
   drills-de.js.

   Classic script, no dependencies.
   ============================================================ */
(function (global) {
  "use strict";

  var Lex = {};

  /* ---------------- Numbers ---------------- */

  var ZAHL = ["null", "eins", "zwei", "drei", "vier", "fünf", "sechs", "sieben", "acht", "neun",
    "zehn", "elf", "zwölf", "dreizehn", "vierzehn", "fünfzehn", "sechzehn", "siebzehn", "achtzehn", "neunzehn"];
  var ZEHNER = ["", "", "zwanzig", "dreißig", "vierzig", "fünfzig", "sechzig", "siebzig", "achtzig", "neunzig"];

  /** 0-99. The units come first: "ein" (never "eins") + "und" + tens. */
  function below100(n) {
    if (n < 20) return ZAHL[n];
    var u = n % 10;
    var tens = ZEHNER[Math.floor(n / 10)];
    return u ? (u === 1 ? "ein" : ZAHL[u]) + "und" + tens : tens;
  }

  /** 100-999. o.einH writes "einhundert" instead of "hundert". */
  function hundreds(n, o) {
    var c = Math.floor(n / 100), r = n % 100;
    return (c === 1 ? (o.einH ? "ein" : "") : ZAHL[c]) + "hundert" + (r ? below100(r) : "");
  }

  function below1000(n, o) { return n < 100 ? below100(n) : hundreds(n, o); }

  /**
   * 0-1000000 in words. "eins" stands alone only: before "tausend" it is
   * "ein" (hunderteintausend). o.einH / o.einT add the optional leading
   * "ein" of "hundert" / "tausend".
   */
  function cardinal(n, o) {
    if (n >= 1000000) return "eine Million";
    if (n < 1000) return below1000(n, o);
    var m = Math.floor(n / 1000), r = n % 1000;
    var lead = m === 1 ? (o.einT ? "ein" : "") : below1000(m, o).replace(/eins$/, "ein");
    return lead + "tausend" + (r ? below1000(r, o) : "");
  }

  function numeral(n) { return cardinal(n, {}); }

  function addUnique(list, word) { if (list.indexOf(word) < 0) list.push(word); }

  /**
   * Every spelling of the number a student may write: with and without the
   * optional "ein", the year-style hundreds ("neunzehnhundertneunundachtzig",
   * 1100-1999 only) and the ss spelling of ß. The plain form is first.
   */
  function numeralVariants(n) {
    var out = [];
    [{}, { einH: 1 }, { einT: 1 }, { einH: 1, einT: 1 }].forEach(function (o) { addUnique(out, cardinal(n, o)); });
    if (n >= 1100 && n <= 1999) {
      addUnique(out, ZAHL[Math.floor(n / 100)] + "hundert" + (n % 100 ? below100(n % 100) : ""));
    }
    out.slice().forEach(function (w) { addUnique(out, w.replace(/ß/g, "ss")); });
    return out;
  }

  /* ---------------- Clock times ---------------- */

  /* The hour with "Uhr" is "ein", the bare hour in "Viertel nach eins" is "eins". */
  function hourBare(h) { return ZAHL[h]; }
  function hourUhr(h) { return h === 1 ? "ein" : below100(h); }

  /** Official reading: "vierzehn Uhr dreißig", "dreizehn Uhr null fünf". */
  function officialForms(h24, m) {
    var h12 = h24 % 12 || 12;
    var out = [];
    /* After midnight the 12h reading would say "zwölf Uhr", which is noon. */
    (h24 === 0 ? [h24] : [h24, h12]).forEach(function (h) {
      if (m === 0) return addUnique(out, hourUhr(h) + " Uhr");
      addUnique(out, hourUhr(h) + " Uhr " + below100(m));
      if (m < 10) addUnique(out, hourUhr(h) + " Uhr null " + below100(m));
    });
    if (h24 === 0 && m === 0) addUnique(out, "vierundzwanzig Uhr");
    return out;
  }

  /** Colloquial 12-hour reading. "halb drei" is 2:30: halb names the NEXT hour. */
  function spokenForms(h24, m) {
    var h12 = h24 % 12 || 12;
    var a = hourBare(h12), nx = hourBare(h12 % 12 + 1);
    var byMinute = {
      0: h24 === 12 ? ["Mittag", "zwölf Uhr mittags"] : h24 === 0 ? ["Mitternacht", "zwölf Uhr nachts"] : h12 === 1 ? ["eins"] : [],
      5: ["fünf nach " + a, "kurz nach " + a],
      10: ["zehn nach " + a],
      15: ["Viertel nach " + a],
      20: ["zwanzig nach " + a, "zehn vor halb " + nx],
      25: ["fünf vor halb " + nx, "fünfundzwanzig nach " + a],
      30: ["halb " + nx],
      35: ["fünf nach halb " + nx, "fünfundzwanzig vor " + nx],
      40: ["zwanzig vor " + nx, "zehn nach halb " + nx],
      45: ["Viertel vor " + nx, "dreiviertel " + nx],
      50: ["zehn vor " + nx],
      55: ["fünf vor " + nx, "kurz vor " + nx]
    };
    return byMinute[m] || [];
  }

  /**
   * Everything accepted for h:mm when the prompt does not fix a register:
   * colloquial 12h, official 24h and official 12h, each also with a leading
   * "es ist". For a full hour the first answer is the official one, for
   * other minutes the colloquial one.
   */
  function clockAnswers(h24, m) {
    var official = officialForms(h24, m), spoken = spokenForms(h24, m);
    var bare = m === 0 ? official.concat(spoken) : spoken.concat(official);
    var out = bare.concat(bare.map(function (f) { return "es ist " + f; }));
    out.slice().forEach(function (w) { addUnique(out, w.replace(/ß/g, "ss")); });
    return out;
  }

  /* ---------------- Ordinals and dates ---------------- */

  var ORD_IRREGULAR = { 1: ["erst"], 3: ["dritt"], 7: ["siebt", "siebent"], 8: ["acht"] };
  var MONTHS = ["Januar", "Februar", "März", "April", "Mai", "Juni",
    "Juli", "August", "September", "Oktober", "November", "Dezember"];
  var MONTH_DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  /** Ordinal stems of 1-31: -t up to 19 (zehnt), -st from 20 (zwanzigst). */
  function ordinalStems(n) {
    if (ORD_IRREGULAR[n]) return ORD_IRREGULAR[n];
    return [n < 20 ? ZAHL[n] + "t" : below100(n) + "st"];
  }

  /** The first ordinal stem with an ending: ordinal(3, "e") = "dritte". */
  function ordinal(n, ending) { return ordinalStems(n)[0] + ending; }

  /**
   * "am dritten März" (dative), "der dritte März" (nominative), "den dritten
   * März" (accusative), with every stem and month spelling. `month` is 0-11.
   */
  function dateAnswers(day, month) {
    var names = [MONTHS[month]];
    var out = [];
    [["am ", "en"], ["der ", "e"], ["den ", "en"]].forEach(function (form) {
      ordinalStems(day).forEach(function (stem) {
        names.forEach(function (name) { out.push(form[0] + stem + form[1] + " " + name); });
      });
    });
    return out;
  }

  /* ---------------- Personal pronouns ---------------- */

  /**
   * id, the three case forms, and the cue shown in the sentence for a
   * replaced object (`cue`) or subject (`nomCue`; none for ich/du/Sie, where
   * the cue would just be the answer).
   */
  var PRONOUNS = [
    { id: "ich", nom: "ich", akk: "mich", dat: "mir", cue: "ich" },
    { id: "du", nom: "du", akk: "dich", dat: "dir", cue: "du" },
    { id: "er", nom: "er", akk: "ihn", dat: "ihm", cue: "Tom", nomCue: "Tom" },
    { id: "sie", nom: "sie", akk: "sie", dat: "ihr", cue: "Anna", nomCue: "Anna" },
    { id: "es", nom: "es", akk: "es", dat: "ihm", cue: "das Kind", nomCue: "das Kind" },
    { id: "wir", nom: "wir", akk: "uns", dat: "uns", cue: "wir", nomCue: "Lukas und ich", plural: true },
    { id: "ihr", nom: "ihr", akk: "euch", dat: "euch", cue: "ihr", nomCue: "du und Tom" },
    { id: "sie_pl", nom: "sie", akk: "sie", dat: "ihnen", cue: "Anna und Tom", nomCue: "Anna und Tom", plural: true },
    { id: "Sie", nom: "Sie", akk: "Sie", dat: "Ihnen", cue: "Sie" }
  ];

  Lex.numeral = numeral;
  Lex.numeralVariants = numeralVariants;
  Lex.clockAnswers = clockAnswers;
  Lex.ordinal = ordinal;
  Lex.dateAnswers = dateAnswers;
  Lex.MONTHS = MONTHS;
  Lex.MONTH_DAYS = MONTH_DAYS;
  Lex.PRONOUNS = PRONOUNS;

  global.Lex = Lex;

})(window);
