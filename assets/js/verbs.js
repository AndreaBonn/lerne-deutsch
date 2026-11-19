(function (global) {
  "use strict";

  var D = global.VERB_TABLES;
  /* Closed list of separable prefixes. Longer prefixes come first so that
     zurück- wins over zu- and vorbei- over vor-. */
  var SEPARABLE_PREFIXES = /^(zusammen|zurück|vorbei|heraus|hinein|hinaus|herein|herunter|hinauf|weiter|fern|teil|statt|fest|fort|auf|aus|ein|ab|an|bei|los|mit|nach|vor|weg|zu)/;
  /* über-, unter-, durch-, wieder- and um- are decided per verb by PREFIX_KIND. */
  var VARIABLE_PREFIXES = /^(über|unter|durch|wieder|um)/;
  var INSEPARABLE_PREFIXES = /^(be|ver|er|ent|emp|ge|miss|zer|über|unter|durch|wieder)/;
  /* A beginning that looks like a prefix but is part of the stem. */
  var UNSPLIT_VERBS = /^(antworten|angeln|ankern|analysieren|abonnieren|einen|einigen|losen|zupfen|zucken|zurren)$/;
  /* be-, er-, ge-, zer- that are part of the stem, so the participle keeps ge-. */
  var STEM_INITIAL_VERBS = /^(beten|bellen|beben|erben|ernten|geigen|zerren)$/;
  /* Prefix + strong verb that is only spelling: bereiten is not be + reiten. */
  var UNRELATED_VERBS = /^(bereiten|entwenden)$/;

  var CONTRACTED_STEM = /(?:eln|ern)$/;

  function nullRow() {
    return D.PERSONS.map(function () { return null; });
  }

  function stemOf(inf) {
    return inf.replace(/(?:en|n)$/, "");
  }

  /* The rest has to be a verb with a stem: teilen is not teil + en. */
  function cut(inf, prefix) {
    var rest = inf.slice(prefix.length);
    return stemOf(rest) ? { prefix: prefix, rest: rest } : null;
  }

  /* Splits a separable prefix off: { prefix, rest } or null. */
  function separate(inf) {
    if (D.IRR[inf] || D.PRESENT_ONLY[inf] || UNSPLIT_VERBS.test(inf)) return null;
    var variable = inf.match(VARIABLE_PREFIXES);
    if (variable) {
      var kind = D.PREFIX_KIND[inf] || (variable[0] === "um" ? "sep" : "insep");
      return kind === "sep" ? cut(inf, variable[0]) : null;
    }
    var plain = inf.match(SEPARABLE_PREFIXES);
    return plain ? cut(inf, plain[0]) : null;
  }

  /* gehen/gelten/geben put the participle ge- in front of their own ge-stem
     (ge-gangen, ge-golten, ge-geben), so the stem after it starts with g.
     An inseparable ge- verb (gewinnen -> gewonnen) has no second ge- to drop. */
  function stripGe(inf, pp) {
    if (pp.indexOf("ge") !== 0) return pp;
    if (inf.indexOf("ge") === 0 && pp.charAt(2) !== "g") return pp;
    return pp.slice(2);
  }

  function derive(prefix, base, rest) {
    var out = { praet: prefix + base.praet, pp: prefix + stripGe(rest, base.pp), aux: base.aux };
    if (base.presentStem) out.presentStem = prefix + base.presentStem;
    if (base.konj2) out.konj2 = prefix + base.konj2;
    if (base.praes) {
      out.praes = base.praes.map(function (form) { return form === null ? null : prefix + form; });
    }
    return out;
  }

  /* Irregular entry of an infinitive: its own, or the strong base's one when a
     prefix (separable or not) is put in front of it. null when unrelated. */
  function irrOf(inf) {
    if (D.IRR[inf]) return D.IRR[inf];
    if (UNRELATED_VERBS.test(inf)) return null;
    var split = separate(inf);
    if (split) return irrOf(split.rest);
    var match = inf.match(INSEPARABLE_PREFIXES);
    var prefixed = match && cut(inf, match[0]);
    var base = prefixed && irrOf(prefixed.rest);
    return base ? derive(prefixed.prefix, base, prefixed.rest) : null;
  }

  /* "sich vorstellen" -> reflexive, full "vorstellen", particle "vor", word "stellen". */
  function parse(raw) {
    var reflexive = raw.indexOf("sich ") === 0;
    var full = reflexive ? raw.slice(5) : raw;
    var split = separate(full);
    return {
      reflexive: reflexive, full: full,
      particle: split ? split.prefix : "", word: split ? split.rest : full
    };
  }

  function pronoun(parsed, person) {
    return parsed.reflexive ? " " + D.REFLEXIVE[person] : "";
  }

  /* Simple tenses: finite verb, reflexive pronoun, separated particle. */
  function finite(forms, parsed) {
    return forms.map(function (form, person) {
      if (form === null) return null;
      return form + pronoun(parsed, person) + (parsed.particle ? " " + parsed.particle : "");
    });
  }

  /* Compound tenses: auxiliary, reflexive pronoun, then the tail. */
  function compound(forms, parsed, tail) {
    return forms.map(function (form, person) {
      return form + pronoun(parsed, person) + " " + tail;
    });
  }

  function present(inf) {
    var stem = stemOf(inf);
    var entry = irrOf(inf);
    if (D.PRESENT_ONLY[inf]) return D.PRESENT_ONLY[inf].slice();
    if (entry && entry.praes) return entry.praes.slice();
    return D.REG.praes.map(function (ending, person) {
      var changed = entry && entry.presentStem && (person === 1 || person === 2);
      var currentStem = changed ? entry.presentStem : stem;
      if (person === 3 || person === 5) return inf;
      if (person === 0 && /eln$/.test(inf)) return stem.slice(0, -2) + "le";
      if (person === 1 && /[sßxz]$/.test(currentStem)) ending = "t";
      if (changed && person === 1 && /st$/.test(currentStem)) ending = "";
      if (changed && person === 2 && /t$/.test(currentStem)) ending = "";
      if (!changed && (person === 1 || person === 2 || person === 4) &&
          needsE(stem)) ending = "e" + ending;
      return currentStem + ending;
    });
  }

  function needsE(stem) {
    return /(?:[dt]|(?:ch|[^aeiouäöüyrlhmn])[mn])$/.test(stem);
  }

  function preterite(inf) {
    var entry = irrOf(inf);
    var stem = stemOf(inf);
    var base = entry ? entry.praet : stem + (needsE(stem) ? "ete" : "te");
    var weak = /e$/.test(base);
    return (weak ? D.REG.praet : D.REG.strongPraet).map(function (ending, person) {
      if (!weak && ((person === 1 && /[sßxzdt]$/.test(base)) ||
          (person === 4 && /[dt]$/.test(base)))) ending = "e" + ending;
      return base + ending;
    });
  }

  function participle(inf) {
    if (D.IRR[inf]) return D.IRR[inf].pp;
    var split = separate(inf);
    if (split) return split.prefix + participle(split.rest);
    var derived = irrOf(inf);
    if (derived) return derived.pp;
    var stem = stemOf(inf);
    var inseparable = D.PREFIX_KIND[inf] === "insep" ||
      (INSEPARABLE_PREFIXES.test(inf) && !STEM_INITIAL_VERBS.test(inf));
    var prefix = /ieren$/.test(inf) || inseparable ? "" : "ge";
    return prefix + stem + (needsE(stem) ? "et" : "t");
  }

  function auxiliary(inf) {
    if (D.SEIN_VERBS.indexOf(inf) !== -1) return "sein";
    var split = separate(inf);
    return split ? auxiliary(split.rest) : "haben";
  }

  /* A reflexive verb always takes haben ("hat sich umgezogen"). */
  function auxiliaryOf(parsed) {
    return parsed.reflexive ? "haben" : auxiliary(parsed.full);
  }

  function perfect(parsed, tenseKey) {
    var aux = auxiliaryOf(parsed);
    var forms = tenseKey === "plusq" ? preterite(aux) : present(aux);
    return compound(forms, parsed, participle(parsed.full));
  }

  function future(parsed, tenseKey) {
    var tail = tenseKey === "fut2"
      ? participle(parsed.full) + " " + auxiliaryOf(parsed) : parsed.full;
    return compound(present("werden"), parsed, tail);
  }

  function subjunctiveForms(stem) {
    return D.REG.subjunctive.map(function (ending) { return stem + ending; });
  }

  function subjunctiveTwo(parsed) {
    var word = parsed.word;
    if (D.PRESENT_ONLY[word]) return nullRow();
    var entry = irrOf(word);
    if (entry && entry.konj2) return finite(subjunctiveForms(entry.konj2), parsed);
    return compound(subjunctiveForms(D.IRR.werden.konj2), parsed, parsed.full);
  }

  function subjunctivePast(parsed) {
    if (D.PRESENT_ONLY[parsed.word]) return nullRow();
    var aux = subjunctiveTwo({ word: auxiliaryOf(parsed), full: "", reflexive: false, particle: "" });
    return compound(aux, parsed, participle(parsed.full));
  }

  function subjunctiveOne(inf) {
    if (inf === "sein") return D.SUBJUNCTIVE_SEIN.slice();
    if (D.PRESENT_ONLY[inf]) return nullRow();
    var forms = subjunctiveForms(stemOf(inf));
    forms[3] = forms[5] = inf;
    if (CONTRACTED_STEM.test(inf)) {
      var indicative = present(inf);
      forms[0] = forms[2] = indicative[0];
      forms[1] = indicative[1];
      forms[4] = indicative[4];
    }
    return forms;
  }

  function imperativeSingular(inf) {
    var stem = stemOf(inf);
    var entry = irrOf(inf);
    if (entry && entry.presentStem && /i/.test(entry.presentStem)) {
      return entry.presentStem;
    }
    if (inf === "wissen") return stem + "e";
    if (needsE(stem) || CONTRACTED_STEM.test(inf) || inf === "werden") {
      return present(inf)[0];
    }
    return stem;
  }

  function imperative(inf) {
    if (inf === "sein") return D.IMPERATIVE_SEIN.slice();
    if (D.MODALS.indexOf(inf) !== -1 || D.PRESENT_ONLY[inf]) return nullRow();
    var subjunctive = subjunctiveOne(inf);
    return [null, imperativeSingular(inf), null, subjunctive[3] + " wir",
      present(inf)[4], subjunctive[5] + " Sie"];
  }

  function conjugate(raw, tenseKey) {
    var parsed = parse(raw);
    var word = parsed.word;
    if (tenseKey === "praes") return finite(present(word), parsed);
    if (D.PRESENT_ONLY[word] && D.TENSES.some(function (tense) { return tense.key === tenseKey; })) {
      return nullRow();
    }
    if (tenseKey === "praet") return finite(preterite(word), parsed);
    if (tenseKey === "perf" || tenseKey === "plusq") return perfect(parsed, tenseKey);
    if (tenseKey === "fut1" || tenseKey === "fut2") return future(parsed, tenseKey);
    if (tenseKey === "konj2") return subjunctiveTwo(parsed);
    if (tenseKey === "konj2Verg") return subjunctivePast(parsed);
    if (tenseKey === "konj1") return finite(subjunctiveOne(word), parsed);
    if (tenseKey === "imper") return finite(imperative(word), parsed);
    return null;
  }

  function fullTable(inf) {
    var out = {};
    D.TENSES.forEach(function (tense) { out[tense.key] = conjugate(inf, tense.key); });
    return out;
  }

  global.Verbs = {
    PERSONS: D.PERSONS, TENSES: D.TENSES, COMMON: D.COMMON, IRR: D.IRR,
    conjugate: conjugate, fullTable: fullTable,
    participle: function (raw) { return participle(parse(raw).full); },
    irrOf: function (raw) { return irrOf(parse(raw).full); }
  };
})(window);
