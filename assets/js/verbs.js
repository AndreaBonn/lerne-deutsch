(function (global) {
  "use strict";

  var D = global.VERB_TABLES;
  var PARTICIPLE_PREFIXES = /^(zurück|zusammen|weiter|vorbei|heraus|hinein|herunter|hinauf|auf|aus|ein|ab|an|bei|los|mit|nach|vor|weg|zu)/;
  var INSEPARABLE_PREFIXES = /^(be|ver|er|ent|emp|ge|miss|zer)/;
  var UNSPLIT_VERBS = /^(antworten|angeln|ankern|zupfen|zucken|zurren)$/;
  /* be-, er-, ge-, zer- that are part of the stem, so the participle keeps ge-. */
  var STEM_INITIAL_VERBS = /^(beten|bellen|beben|erben|ernten|geigen|zerren)$/;

  var CONTRACTED_STEM = /(?:eln|ern)$/;

  function nullRow() {
    return D.PERSONS.map(function () { return null; });
  }

  function stemOf(inf) {
    return inf.replace(/(?:en|n)$/, "");
  }

  function present(inf) {
    var stem = stemOf(inf);
    var entry = D.IRR[inf];
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
    var entry = D.IRR[inf];
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
    var entry = D.IRR[inf];
    if (entry) return entry.pp;
    var separated = !UNSPLIT_VERBS.test(inf) && inf.match(PARTICIPLE_PREFIXES);
    if (separated) return separated[0] + participle(inf.slice(separated[0].length));
    var stem = stemOf(inf);
    var inseparable = INSEPARABLE_PREFIXES.test(inf) && !STEM_INITIAL_VERBS.test(inf);
    var prefix = /ieren$/.test(inf) || inseparable ? "" : "ge";
    return prefix + stem + (needsE(stem) ? "et" : "t");
  }

  function auxiliary(inf) {
    if (D.SEIN_VERBS.indexOf(inf) !== -1) return "sein";
    var separated = inf.match(PARTICIPLE_PREFIXES);
    return separated ? auxiliary(inf.slice(separated[0].length)) : "haben";
  }

  function perfect(inf, tenseKey) {
    var aux = auxiliary(inf);
    var forms = tenseKey === "plusq" ? preterite(aux) : present(aux);
    var pp = participle(inf);
    return forms.map(function (form) { return form + " " + pp; });
  }

  function future(inf, tenseKey) {
    var tail = tenseKey === "fut2" ? participle(inf) + " " + auxiliary(inf) : inf;
    return present("werden").map(function (form) { return form + " " + tail; });
  }

  function subjunctiveForms(stem) {
    return D.REG.subjunctive.map(function (ending) { return stem + ending; });
  }

  function subjunctiveTwo(inf) {
    if (D.PRESENT_ONLY[inf]) return nullRow();
    var entry = D.IRR[inf];
    if (entry && entry.konj2) return subjunctiveForms(entry.konj2);
    return subjunctiveForms(D.IRR.werden.konj2).map(function (form) {
      return form + " " + inf;
    });
  }

  function subjunctivePast(inf) {
    if (D.PRESENT_ONLY[inf]) return nullRow();
    var pp = participle(inf);
    return subjunctiveTwo(auxiliary(inf)).map(function (form) {
      return form + " " + pp;
    });
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
    var entry = D.IRR[inf];
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

  function conjugate(inf, tenseKey) {
    if (tenseKey === "praes") return present(inf);
    if (tenseKey === "praet") return preterite(inf);
    if (tenseKey === "perf" || tenseKey === "plusq") return perfect(inf, tenseKey);
    if (tenseKey === "fut1" || tenseKey === "fut2") return future(inf, tenseKey);
    if (tenseKey === "konj2") return subjunctiveTwo(inf);
    if (tenseKey === "konj2Verg") return subjunctivePast(inf);
    if (tenseKey === "konj1") return subjunctiveOne(inf);
    if (tenseKey === "imper") return imperative(inf);
    return null;
  }

  function fullTable(inf) {
    var out = {};
    D.TENSES.forEach(function (tense) { out[tense.key] = conjugate(inf, tense.key); });
    return out;
  }

  global.Verbs = {
    PERSONS: D.PERSONS, TENSES: D.TENSES, COMMON: D.COMMON, IRR: D.IRR,
    conjugate: conjugate, fullTable: fullTable, participle: participle
  };
})(window);
