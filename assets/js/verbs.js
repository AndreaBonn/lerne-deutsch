(function (global) {
  "use strict";

  var D = global.VERB_TABLES;

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
          /(?:[dt]|(?:ch|[^aeiouäöüyrlhmn])[mn])$/.test(stem)) ending = "e" + ending;
      return currentStem + ending;
    });
  }

  function conjugate(inf, tenseKey) {
    if (tenseKey !== "praes") return null;
    return present(inf);
  }

  function fullTable(inf) {
    var out = {};
    D.TENSES.forEach(function (tense) { out[tense.key] = conjugate(inf, tense.key); });
    return out;
  }

  global.Verbs = {
    PERSONS: D.PERSONS, TENSES: D.TENSES, COMMON: D.COMMON, IRR: D.IRR,
    conjugate: conjugate, fullTable: fullTable
  };
})(window);
