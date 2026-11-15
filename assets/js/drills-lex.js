/* ============================================================
   drills-lex.js — a closed Italian lexicon for the generators.

   Italian only: not a single word in the student's language. The
   generator produces exercises from rules, so glosses are unnecessary —
   and if they were here, adding a language would require translating them
   and the file would stop being neutral.

   The forms are not transcribed from tables but derived by rule wherever
   a rule exists: the article from phonology, the plural from the ending.
   It is the same idea as Verbs.conjugate — the content cannot drift away
   from the answer key, because the key is computed by the same function
   as the question.

   Course conversion: numbers, ordinals, dates, clock times and personal
   pronouns below are German (T1.42-T1.45) and carry no Italian. The nouns,
   adjectives, verbs and prepositions further down stay Italian until
   T1.46-T1.48 rewrite them.

   Classic script, no dependencies.
   ============================================================ */
(function (global) {
  "use strict";

  var Lex = {};

  /* ---------------- Nouns ---------------- */

  /**
   * s = singular, g = gender, p = irregular plural (when there is one).
   * The regular plural is derived by pluralOf(), so it is not here: two
   * records of the same form would drift apart at the first correction.
   */
  var NOUNS = [
    { s: "libro", g: "m" }, { s: "tavolo", g: "m" }, { s: "quaderno", g: "m" },
    { s: "bicchiere", g: "m" }, { s: "giornale", g: "m" }, { s: "ristorante", g: "m" },
    { s: "treno", g: "m" }, { s: "biglietto", g: "m" }, { s: "telefono", g: "m" },
    { s: "cane", g: "m" }, { s: "gatto", g: "m" }, { s: "bambino", g: "m" },
    { s: "medico", g: "m" }, { s: "amico", g: "m", p: "amici" }, { s: "insegnante", g: "m" },
    { s: "albergo", g: "m", p: "alberghi" }, { s: "parco", g: "m", p: "parchi" },
    { s: "problema", g: "m", p: "problemi" }, { s: "programma", g: "m", p: "programmi" },
    { s: "zaino", g: "m" }, { s: "zucchero", g: "m" }, { s: "specchio", g: "m", p: "specchi" },
    { s: "studente", g: "m" }, { s: "spettacolo", g: "m" }, { s: "stadio", g: "m", p: "stadi" },
    { s: "gnocco", g: "m", p: "gnocchi" }, { s: "psicologo", g: "m", p: "psicologi" },
    { s: "yogurt", g: "m", p: "yogurt" }, { s: "orologio", g: "m", p: "orologi" },
    { s: "ospedale", g: "m" }, { s: "albero", g: "m" }, { s: "ufficio", g: "m", p: "uffici" },
    { s: "esame", g: "m" }, { s: "inverno", g: "m" }, { s: "uomo", g: "m", p: "uomini" },

    { s: "casa", g: "f" }, { s: "sedia", g: "f", p: "sedie" }, { s: "chiave", g: "f" },
    { s: "stazione", g: "f", p: "stazioni" }, { s: "città", g: "f", p: "città" },
    { s: "notte", g: "f" }, { s: "macchina", g: "f" }, { s: "finestra", g: "f" },
    { s: "ragazza", g: "f" }, { s: "sorella", g: "f" }, { s: "cucina", g: "f" },
    { s: "camera", g: "f" }, { s: "piazza", g: "f", p: "piazze" }, { s: "strada", g: "f" },
    { s: "amica", g: "f", p: "amiche" }, { s: "banca", g: "f", p: "banche" },
    { s: "farmacia", g: "f", p: "farmacie" }, { s: "università", g: "f", p: "università" },
    { s: "acqua", g: "f" }, { s: "arancia", g: "f", p: "arance" }, { s: "isola", g: "f" },
    { s: "estate", g: "f" }, { s: "opera", g: "f" }, { s: "ora", g: "f" },
    { s: "mano", g: "f", p: "mani" }, { s: "moglie", g: "f", p: "mogli" }
  ];

  /* ---------------- The article: phonology, not a table ---------------- */

  var VOWEL = /^[aeiouàèéìòù]/i;
  /* lo / gli before: s+consonant, z, gn, ps, pn, x, y, i+vowel */
  var LO = /^(s[^aeiouàèéìòù]|z|gn|ps|pn|x|y|i[aeiou])/i;

  /**
   * The definite article for a given word. `word` is the first word of the
   * group: "il vecchio libro" takes its article from "vecchio", not "libro".
   */
  function definite(word, gender, plural) {
    var w = String(word || "");
    if (gender === "f") {
      if (plural) return "le";
      return VOWEL.test(w) ? "l'" : "la";
    }
    if (plural) return (LO.test(w) || VOWEL.test(w)) ? "gli" : "i";
    /* LO is tested BEFORE the vowel, because one of its conditions is
       i+vowel ("lo iodio"): in the opposite order that branch was dead and
       "l'iodio" came out. There is no such word in the lexicon today — and
       that is exactly why the rule has to be right now, and not when
       somebody adds one. */
    if (LO.test(w)) return "lo";
    return VOWEL.test(w) ? "l'" : "il";
  }

  /** The indefinite article. There is no plural — the partitivo goes there. */
  function indefinite(word, gender) {
    var w = String(word || "");
    if (gender === "f") return VOWEL.test(w) ? "un'" : "una";
    return LO.test(w) ? "uno" : "un";
  }

  /**
   * The plural derived from the ending; the irregular ones sit in NOUNS.p
   *
   * Beware of proparoxytone words in -ico: "medico" gives "medici", not
   * "medichi". The hardening -co -> -chi applies to those stressed on the
   * penultimate syllable ("parco" -> "parchi"), so -ico is tested BEFORE -co.
   */
  function pluralOf(noun) {
    if (noun.p) return noun.p;
    var s = noun.s;
    if (/ca$/.test(s)) return s.slice(0, -2) + "che";
    if (/ga$/.test(s)) return s.slice(0, -2) + "ghe";
    if (/a$/.test(s)) return s.slice(0, -1) + (noun.g === "f" ? "e" : "i");
    if (/ico$/.test(s)) return s.slice(0, -2) + "ci";
    if (/co$/.test(s)) return s.slice(0, -2) + "chi";
    if (/go$/.test(s)) return s.slice(0, -2) + "ghi";
    if (/io$/.test(s)) return s.slice(0, -2) + "i";
    if (/[oe]$/.test(s)) return s.slice(0, -1) + "i";
    return s;                                   // invariable: città, yogurt
  }

  /* ---------------- Adjectives ---------------- */

  /**
   * type "o" inflects into four forms (rosso/rossa/rossi/rosse),
   * type "e" into two (grande/grandi). There is no third class in this set.
   */
  var ADJ = [
    { s: "rosso", t: "o" }, { s: "nuovo", t: "o" }, { s: "vecchio", t: "o" },
    { s: "piccolo", t: "o" }, { s: "alto", t: "o" }, { s: "basso", t: "o" },
    { s: "caldo", t: "o" }, { s: "freddo", t: "o" }, { s: "aperto", t: "o" },
    { s: "chiuso", t: "o" }, { s: "bianco", t: "o" }, { s: "lungo", t: "o" },
    { s: "italiano", t: "o" }, { s: "stanco", t: "o" }, { s: "simpatico", t: "o" },
    { s: "grande", t: "e" }, { s: "verde", t: "e" }, { s: "difficile", t: "e" },
    { s: "facile", t: "e" }, { s: "importante", t: "e" }, { s: "interessante", t: "e" },
    { s: "giovane", t: "e" }, { s: "veloce", t: "e" }, { s: "gentile", t: "e" }
  ];

  /** The adjective form agreeing in gender and number. */
  function adjForm(adj, gender, plural) {
    var base = adj.s;
    if (adj.t === "e") {
      if (!plural) return base;
      return base.slice(0, -1) + "i";
    }
    var stem = base.slice(0, -1);
    /* -co/-go harden in the masculine plural: bianco -> bianchi.
       But not those in -ico stressed on the third syllable from the end:
       "simpatico" gives "simpatici", not "simpatichi". */
    if (plural && gender === "m") {
      if (/ico$/.test(base)) return stem + "i";
      if (/[cg]$/.test(stem)) return stem + "hi";
      return stem + "i";
    }
    if (plural) {
      if (/c$/.test(stem)) return stem + "he";
      if (/g$/.test(stem)) return stem + "he";
      return stem + "e";
    }
    return stem + (gender === "f" ? "a" : "o");
  }

  /* ---------------- Verbs: choosing the auxiliary ---------------- */

  /**
   * aux: "avere", "essere" or "both" — the last ones change meaning along
   * with the auxiliary (è cambiato / ha cambiato), so the exercise has to
   * accept both answers.
   */
  var VERBS = [
    { inf: "mangiare", aux: "avere" }, { inf: "parlare", aux: "avere" },
    { inf: "comprare", aux: "avere" }, { inf: "leggere", aux: "avere" },
    { inf: "scrivere", aux: "avere" }, { inf: "vedere", aux: "avere" },
    { inf: "fare", aux: "avere" }, { inf: "dire", aux: "avere" },
    { inf: "prendere", aux: "avere" }, { inf: "capire", aux: "avere" },
    { inf: "guardare", aux: "avere" }, { inf: "aspettare", aux: "avere" },
    { inf: "conoscere", aux: "avere" }, { inf: "chiedere", aux: "avere" },

    { inf: "andare", aux: "essere" }, { inf: "venire", aux: "essere" },
    { inf: "arrivare", aux: "essere" }, { inf: "partire", aux: "essere" },
    { inf: "uscire", aux: "essere" }, { inf: "entrare", aux: "essere" },
    { inf: "tornare", aux: "essere" }, { inf: "restare", aux: "essere" },
    { inf: "nascere", aux: "essere" }, { inf: "morire", aux: "essere" },
    { inf: "diventare", aux: "essere" }, { inf: "piacere", aux: "essere" },
    { inf: "alzarsi", aux: "essere", refl: true },
    { inf: "svegliarsi", aux: "essere", refl: true },
    { inf: "vestirsi", aux: "essere", refl: true },
    { inf: "lavarsi", aux: "essere", refl: true },

    { inf: "cambiare", aux: "both" }, { inf: "finire", aux: "both" },
    { inf: "cominciare", aux: "both" }, { inf: "salire", aux: "both" },
    { inf: "scendere", aux: "both" }, { inf: "correre", aux: "both" },
    { inf: "passare", aux: "both" }, { inf: "vivere", aux: "both" }
  ];

  /* ---------------- Prepositions ---------------- */

  /* The prepositions that combine with the article. "con" usually no longer does. */
  var PREPS = ["di", "a", "da", "in", "su"];
  var ARTICLES = ["il", "lo", "l'", "la", "i", "gli", "le"];

  /**
   * A preposition contracted with the article, by rule rather than from a
   * table.
   *
   * The split has two parts: the preposition stem (di -> de, in -> ne, the
   * rest unchanged) and a suffix depending on the article alone. The
   * product 5 × 7 gives all 35 forms; a table of 35 entries would say the
   * same thing, only without a reason.
   */
  var PREP_STEM = { di: "de", a: "a", da: "da", in: "ne", su: "su" };
  var ART_SUFFIX = { "il": "l", "lo": "llo", "l'": "ll'", "la": "lla", "i": "i", "gli": "gli", "le": "lle" };

  function articulate(prep, article) {
    var stem = PREP_STEM[prep];
    var suffix = ART_SUFFIX[article];
    if (stem === undefined || suffix === undefined) return prep + " " + article;
    return stem + suffix;
  }

  /* ---------------- German: numbers ---------------- */

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

  /* ---------------- German: clock times ---------------- */

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

  /* ---------------- German: ordinals and dates ---------------- */

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

  /* ---------------- German: personal pronouns ---------------- */

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

  Lex.NOUNS = NOUNS;
  Lex.ADJ = ADJ;
  Lex.VERBS = VERBS;
  Lex.PREPS = PREPS;
  Lex.ARTICLES = ARTICLES;
  Lex.definite = definite;
  Lex.indefinite = indefinite;
  Lex.pluralOf = pluralOf;
  Lex.adjForm = adjForm;
  Lex.articulate = articulate;
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
