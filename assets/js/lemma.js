(function (global) {
  "use strict";

  var M = global.LemmaMorf;
  var extraVerbs = [];
  var index = null;
  var dictionary = null;
  var known = null;
  var canonical = Object.create(null);
  /* Bare noun key -> the entry the course teaches it with ("bescheid" ->
     "der Bescheid"), for the coverage screen, whose card must keep article
     and capital. Never reset: lemat() rebuilds the course dictionary in the
     middle of a caller's pass, and a noun keeps its article across rebuilds. */
  var entries = Object.create(null);
  var ARTICLE = /^(der|die|das|den|dem|des|ein|eine|einen|einem|einer|eines)\s+/i;

  function normalize(word) {
    return String(word).toLowerCase().replace(/[’']/g, "'").trim().replace(/\s+/g, " ");
  }

  function addEntry(target, entry, fromCourse) {
    if (!entry) return;
    var spelling = String(entry).trim().replace(/\s+/g, " ").replace(ARTICLE, "");
    var key = normalize(spelling);
    if (!key) return;
    target[key] = true;
    /* A deck card (fromCourse false) never renames what the course wrote. */
    if (fromCourse) canonical[key] = spelling;
    if (fromCourse && !entries[key] && ARTICLE.test(String(entry).trim()) && key.indexOf(" ") < 0) {
      entries[key] = String(entry).trim().replace(/\s+/g, " ");
    }
    if (key.indexOf(" ") < 0) return;
    spelling.split(/\s+/).forEach(function (word) {
      var token = normalize(word);
      if (token.length <= 1 || M.posilkowy(token) || M.funkcyjny(token)) return;
      target[token] = true;
      if (fromCourse && !canonical[token]) canonical[token] = word;
    });
  }

  function buildDictionary(levels, readings) {
    var result = Object.create(null);
    (levels || []).forEach(function (level) {
      (level.units || []).forEach(function (unit) {
        (unit.lessons || []).forEach(function (lesson) {
          (lesson.vocab || []).forEach(function (entry) { addEntry(result, entry.it, true); });
        });
      });
    });
    (readings || []).forEach(function (reading) {
      (reading.glossIt || []).concat(reading.lexIt || []).forEach(function (word) {
        addEntry(result, word, true);
      });
    });
    return result;
  }

  function courseDictionary() {
    if (dictionary) return dictionary;
    var registry = global.Core && global.Core.registry;
    dictionary = buildDictionary(registry && registry.levels, global.READINGS);
    return dictionary;
  }

  function verbSources() {
    var V = global.Verbs;
    var verbs = Object.create(null);
    (V.COMMON || []).concat(extraVerbs).forEach(function (word) { verbs[word] = true; });
    Object.keys(courseDictionary()).forEach(function (word) {
      if (M.czasownikowe(word)) verbs[word] = true;
    });
    return Object.keys(verbs);
  }

  function addForm(form, infinitive) {
    if (!form) return;
    var key = normalize(form);
    if (!index[key]) index[key] = [];
    if (index[key].indexOf(infinitive) < 0) index[key].push(infinitive);
  }

  // Exact generated phrases are supported. Rejoining particles across arbitrary
  // intervening words needs sentence syntax and is outside this word lookup.
  // Never index detached stems/particles: "stehe" cannot imply "aufstehen".
  function indexVerb(infinitive) {
    var V = global.Verbs;
    addForm(infinitive, infinitive);
    addForm(V.participle(infinitive), infinitive);
    (V.TENSES || []).forEach(function (tense) {
      (V.conjugate(infinitive, tense.key) || []).forEach(function (form) {
        addForm(form, infinitive);
      });
    });
  }

  function buildIndex() {
    if (index) return index;
    index = Object.create(null);
    if (global.Verbs) verbSources().forEach(indexVerb);
    return index;
  }

  function candidates(word) {
    var key = normalize(word);
    var out = [];
    function add(candidate) {
      if (candidate && out.indexOf(candidate) < 0) out.push(candidate);
    }
    add(key);
    (buildIndex()[key] || []).forEach(add);
    // Keep spelling candidates too: frequency lists preserve German noun case.
    M.odmienne(String(word)).forEach(add);
    M.odmienne(key).forEach(add);
    return out;
  }

  function resolve(word) {
    var key = normalize(word);
    if (M.funkcyjny(key)) return [key];
    var course = courseDictionary();
    var out = [];
    candidates(key).forEach(function (candidate) {
      if (!(known ? known(candidate) : Object.prototype.hasOwnProperty.call(course, candidate))) return;
      var entry = known ? candidate : canonical[candidate] || candidate;
      if (out.indexOf(entry) < 0) out.push(entry);
    });
    /* Only the reading lookup calls resolve(): the coverage screen has its
       own "studied" check. A form the conjugator generated is a certain
       lemma even when no lesson lists the verb, so "ist" opens a card on
       "sein" instead of "unknown word". Nouns get no such fallback: their
       candidates are plural guesses, not an index. */
    if (!out.length) {
      var infinitive = (buildIndex()[key] || [])[0];
      if (infinitive) out.push(infinitive);
    }
    return out;
  }

  function wpisKursu(key, form) {
    var first = form ? String(form).charAt(0) : "";
    if (first && first !== first.toUpperCase()) return "";
    return entries[key] || canonical[key] || "";
  }

  function refresh() {
    dictionary = null;
    index = null;
    canonical = Object.create(null);
  }

  function addVerbs(words) {
    (words || []).forEach(function (word) {
      if (M.czasownikowe(word) && extraVerbs.indexOf(word) < 0) extraVerbs.push(word);
    });
    index = null;
  }

  global.Lemma = {
    resolve: resolve,
    lemat: function (word) {
      var forms = buildIndex()[normalize(word)];
      return forms && forms.length ? forms[0] : "";
    },
    kandydaci: candidates,
    uzyjSlownika: function (predicate) { known = predicate; },
    dodajCzasowniki: addVerbs,
    zbudujSlownik: buildDictionary,
    dodajHaslo: function (target, entry) { addEntry(target, entry, false); },
    /** The course entry for a dictionary key: with article for a noun, else the spelling, else "".
        A lowercase frequency form is not a noun (the list keeps noun capitals),
        so "trifft" -> treffen stays the verb and does not become das Treffen. */
    wpisKursu: wpisKursu,
    odswiez: refresh,
    funkcyjne: M.funkcyjny,
    rozmiarIndeksu: function () { return Object.keys(buildIndex()).length; }
  };
})(window);
