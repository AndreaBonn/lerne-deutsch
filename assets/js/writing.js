/* ============================================================
   writing.js — what can be checked in a text without a marker.

   The course has no backend, so nobody will grade a composition. The
   tempting sham then is a self-assessment checklist ("did you use the past
   tense?"). The student answers themselves "yes", nobody sees it and the
   exercise leaves behind not a single piece of information — neither for
   them nor for the mistake notebook.

   So whatever CAN be measured is measured mechanically: the task declares
   the constructions it requires, and Verbs.conjugate generates their forms
   and looks for them in the text. The result is not a grade ("well
   written") but a fact: you used this, you did not use that.

   Self-assessment is left only for what no automaton here can measure —
   sense, coherence, how it sounds.

   Classic script. Requires core.js and verbs.js.
   ============================================================ */
(function (global) {
  "use strict";

  var Writing = {};

  // Keep umlauts distinct; German ss and ß are equivalent for detection.
  function fold(text) {
    return global.Txt.detypo(text).toLowerCase().replace(/ß/g, "ss");
  }

  /**
   * The forms we look for on behalf of one requirement.
   *
   * `{verb, tense}` expands through the conjugator, so a task declares a
   * construction rather than a list of forms — adding an irregular verb to
   * verbs.js immediately fixes every task.
   */
  function formyDla(req) {
    if (req.word) return [req.word];
    if (req.any) return req.any.slice();
    if (!req.verb) return [];
    var tense = req.tense || "praes";
    var f = ((global.Verbs && global.Verbs.conjugate(req.verb, tense)) || []).filter(Boolean);
    return f.concat(verbFinalForms(req.verb, tense, f));
  }

  /**
   * Forms of a separable verb as they appear in a subordinate clause: the
   * particle is glued back on ("weil ich früh aufstehe"), plus the
   * zu-infinitive ("aufzustehen") for Präsens. The particle is the last word
   * of the separated finite form and must open the infinitive.
   */
  function verbFinalForms(verb, tense, forms) {
    if (tense !== "praes" && tense !== "praet") return [];
    var bare = verb.replace(/^sich /, "");
    var out = [];
    var particle = "";
    forms.forEach(function (form) {
      var words = form.split(" ");
      var last = words[words.length - 1];
      if (words.length < 2 || bare.indexOf(last) !== 0 || bare === last) return;
      particle = last;
      out.push(words.slice(1, -1).concat(last + words[0]).join(" "));
    });
    if (particle && tense === "praes") out.push(particle + "zu" + bare.slice(particle.length));
    return out;
  }

  // At most six words between the parts of a verb, never across a comma,
  // sentence end or coordinating conjunction ("stehe hier und warte auf dich").
  var GAP = "(?:(?!(?:und|oder|aber|denn|sondern|weil|dass|wenn)[ \\t])[^\\s.!?;:,]+[ \\t]+){0,6}";

  /** Matches complete words; verb components may enclose words in one sentence. */
  function wzorzec(forma, allowGaps) {
    var f = fold(forma).trim().replace(/\s+/g, " ");
    var escaped = f.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    if (allowGaps) escaped = escaped.split(" ").join("[ \\t]+" + GAP);
    return new RegExp("(^|[^a-zäöüß])" + escaped + "([^a-zäöüß]|$)");
  }

  /**
   * Checks a text against a list of requirements.
   *
   * Returns one entry per requirement: what was looked for, whether it was
   * found and which form. No grades and no percentages — this is a reading,
   * not a verdict.
   */
  function analyse(text, requires) {
    var hay = fold(text || "");
    return (requires || []).map(function (req) {
      var formy = formyDla(req);
      // Fixed phrases stay contiguous; only conjugated verbs form a bracket.
      var allowGaps = !!req.verb;
      var trafiona = null;
      for (var i = 0; i < formy.length && !trafiona; i++) {
        if (wzorzec(formy[i], allowGaps).test(hay)) trafiona = formy[i];
      }
      return {
        key: req.key || req.verb || req.word || (req.any || [])[0] || "?",
        verb: req.verb || null,
        tense: req.tense || null,
        word: req.word || null,
        any: req.any || null,
        found: !!trafiona,
        hit: trafiona
      };
    });
  }

  /** How many words the student wrote — the only number worth showing them. */
  function wordCount(text) {
    var t = String(text || "").trim();
    return t ? t.split(/\s+/).length : 0;
  }

  /* ---------------- Saving ---------------- */

  /**
   * Saves a composition.
   *
   * Compositions are NOT subject to pruning when storage is full (core.js
   * § pruneCandidates): they are the only content in the state the student
   * cannot reconstruct through further study.
   */
  function save(id, text, wynik) {
    Core.state.writing[id] = {
      text: String(text || ""),
      ts: Date.now(),
      words: wordCount(text),
      found: (wynik || []).filter(function (r) { return r.found; }).length,
      total: (wynik || []).length
    };
    Core.save();
    return Core.state.writing[id];
  }

  function load(id) { return Core.state.writing[id] || null; }

  Writing.analyse = analyse;
  Writing.wordCount = wordCount;
  Writing.save = save;
  Writing.load = load;
  Writing.formyDla = formyDla;

  global.Writing = Writing;

})(window);
