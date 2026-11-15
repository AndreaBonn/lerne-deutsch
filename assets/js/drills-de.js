/* ============================================================
   drills-de.js - the German grammar lexicon of the generators:
   nouns, the article by case, prepositions with their contractions,
   and the Perfekt auxiliary of a verb.

   Counterpart of drills-lex.js, which holds the numbers, clock times,
   dates and pronouns. The split keeps each file to one subject, and the
   forms are derived here by rule wherever German has a rule (the dative
   plural -n, the contraction of preposition and article), so the answer key
   cannot drift away from the question: both come from the same function.

   Reads VERB_TABLES.SEIN_VERBS, so verbs-data.js loads first.

   Classic script, no other dependencies.
   ============================================================ */
(function (global) {
  "use strict";

  var LexDe = {};

  /* ---------------- Nouns ---------------- */

  /**
   * s = singular, g = gender (m, f, n), pl = plural (German plurals follow
   * no rule a learner could apply, so it is listed), person = a noun that
   * can be the dative object of helfen, danken, antworten.
   */
  var NOUNS = [
    { s: "Bahnhof", g: "m", pl: "Bahnhöfe" }, { s: "Tisch", g: "m", pl: "Tische" },
    { s: "Garten", g: "m", pl: "Gärten" }, { s: "Zug", g: "m", pl: "Züge" },
    { s: "Bus", g: "m", pl: "Busse" }, { s: "Park", g: "m", pl: "Parks" },
    { s: "Kaffee", g: "m", pl: "Kaffees" },
    { s: "Hund", g: "m", pl: "Hunde", person: true }, { s: "Mann", g: "m", pl: "Männer", person: true },
    { s: "Freund", g: "m", pl: "Freunde", person: true }, { s: "Arzt", g: "m", pl: "Ärzte", person: true },
    { s: "Lehrer", g: "m", pl: "Lehrer", person: true },

    { s: "Schule", g: "f", pl: "Schulen" }, { s: "Stadt", g: "f", pl: "Städte" },
    { s: "Straße", g: "f", pl: "Straßen" }, { s: "Küche", g: "f", pl: "Küchen" },
    { s: "Bank", g: "f", pl: "Banken" }, { s: "Tasche", g: "f", pl: "Taschen" },
    { s: "Apotheke", g: "f", pl: "Apotheken" }, { s: "Kirche", g: "f", pl: "Kirchen" },
    { s: "Frau", g: "f", pl: "Frauen", person: true }, { s: "Freundin", g: "f", pl: "Freundinnen", person: true },

    { s: "Haus", g: "n", pl: "Häuser" }, { s: "Buch", g: "n", pl: "Bücher" },
    { s: "Auto", g: "n", pl: "Autos" }, { s: "Kino", g: "n", pl: "Kinos" },
    { s: "Café", g: "n", pl: "Cafés" }, { s: "Zimmer", g: "n", pl: "Zimmer" },
    { s: "Hotel", g: "n", pl: "Hotels" }, { s: "Fenster", g: "n", pl: "Fenster" },
    { s: "Büro", g: "n", pl: "Büros" },
    { s: "Kind", g: "n", pl: "Kinder", person: true }, { s: "Mädchen", g: "n", pl: "Mädchen", person: true }
  ];

  /* ---------------- The article by case ---------------- */

  /* [m, f, n, plural] per case. A table: German articles follow no rule
     beyond the paradigm itself. */
  var DEFINITE = {
    nom: ["der", "die", "das", "die"],
    akk: ["den", "die", "das", "die"],
    dat: ["dem", "der", "dem", "den"],
    gen: ["des", "der", "des", "der"]
  };
  /* [m, f, n]: ein has no plural. */
  var INDEFINITE = {
    nom: ["ein", "eine", "ein"],
    akk: ["einen", "eine", "ein"],
    dat: ["einem", "einer", "einem"],
    gen: ["eines", "einer", "eines"]
  };
  var COLUMN = { m: 0, f: 1, n: 2 };

  /**
   * The article for a case (nom, akk, dat, gen), gender (m, f, n) and
   * number. An indefinite plural does not exist and gives null.
   */
  function article(kase, gender, plural, indefinite) {
    if (indefinite) return plural ? null : INDEFINITE[kase][COLUMN[gender]];
    return DEFINITE[kase][plural ? 3 : COLUMN[gender]];
  }

  /**
   * The noun as it stands in a case. Only the dative plural changes the
   * noun: -n, unless the plural already ends in n or s.
   */
  function nounForm(noun, kase, plural) {
    if (!plural) return noun.s;
    if (kase === "dat" && !/[ns]$/.test(noun.pl)) return noun.pl + "n";
    return noun.pl;
  }

  /* ---------------- Prepositions ---------------- */

  /* akk and dat govern one case; wechsel takes the dative for wo? and the
     accusative for wohin?. */
  var PREPS = {
    akk: ["durch", "für", "gegen", "ohne", "um"],
    dat: ["aus", "bei", "mit", "nach", "seit", "von", "zu"],
    wechsel: ["in", "an", "auf", "über", "unter", "vor", "hinter", "neben", "zwischen"]
  };

  /* The eight contractions of the course. Not a rule: "mit dem" never
     becomes "mitm" and "für das" stays apart in writing. */
  var CONTRACTIONS = {
    "zu dem": "zum", "zu der": "zur", "bei dem": "beim", "von dem": "vom",
    "in dem": "im", "an dem": "am", "in das": "ins", "an das": "ans"
  };

  /** The contracted form of preposition + article, or null when there is none. */
  function contract(prep, art) {
    return CONTRACTIONS[prep + " " + art] || null;
  }

  /**
   * Preposition + definite article + noun in the given case: "zum Bahnhof",
   * "mit den Kindern", "in den Park". `plural` is whether the noun is plural.
   */
  function prepPhrase(prep, kase, noun, plural) {
    var art = article(kase, noun.g, plural, false);
    return (contract(prep, art) || prep + " " + art) + " " + nounForm(noun, kase, plural);
  }

  /* ---------------- Perfekt: the auxiliary ---------------- */

  /* The verbs of the drill. The sein ones are taken from SEIN_VERBS, so the
     drill cannot disagree with the conjugation tables; the others are listed
     here and must not appear in SEIN_VERBS (checked by a test). */
  var SEIN_CORE = ["gehen", "kommen", "bleiben", "werden", "sein", "fallen", "steigen", "sterben",
    "wachsen", "laufen", "rennen", "springen", "passieren", "reisen", "wandern",
    "aufstehen", "aufwachen", "einschlafen"];
  /* Both auxiliaries are correct, with another meaning: Er ist nach Berlin
     gefahren / Er hat das Auto gefahren. */
  var BOTH_AUX = ["fahren", "fliegen", "reiten", "schwimmen", "segeln"];
  var HABEN_CORE = ["haben", "essen", "trinken", "machen", "sehen", "lesen", "schreiben", "kaufen",
    "spielen", "arbeiten", "lernen", "nehmen", "sprechen", "hören", "schlafen", "tanzen",
    "kochen", "finden", "geben", "helfen"];
  /* Reflexive verbs take haben: Ich habe mich gewaschen. */
  var REFLEXIVE = ["sich waschen", "sich freuen", "sich anziehen", "sich erinnern"];

  var VERBS = [];
  global.VERB_TABLES.SEIN_VERBS.forEach(function (inf) {
    if (SEIN_CORE.indexOf(inf) >= 0) VERBS.push({ inf: inf, aux: "sein" });
  });
  HABEN_CORE.forEach(function (inf) { VERBS.push({ inf: inf, aux: "haben" }); });
  REFLEXIVE.forEach(function (inf) { VERBS.push({ inf: inf, aux: "haben", refl: true }); });
  BOTH_AUX.forEach(function (inf) { VERBS.push({ inf: inf, aux: "both" }); });

  LexDe.NOUNS = NOUNS;
  LexDe.PREPS = PREPS;
  LexDe.VERBS = VERBS;
  LexDe.article = article;
  LexDe.nounForm = nounForm;
  LexDe.contract = contract;
  LexDe.prepPhrase = prepPhrase;

  global.LexDe = LexDe;

})(window);
