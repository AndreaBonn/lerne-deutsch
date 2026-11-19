/* ============================================================
   cils-run.js - the exam run: order, answers, result.

   Pulled out of views-cils.js. The split follows what can be checked
   without a browser: `cils.js` scores a single section, this file drives
   the WHOLE attempt (four sections in order, the answer grid, sections
   whose time ran out, the history entry), and views-cils.js draws the
   clock, the buttons and the summary.

   Why this is not a cosmetic split: a full simulation takes an hour and
   has four countdowns. A browser test walking through it would have to
   either really wait that long or substitute the clock - so there was
   none, and the whole point tally along with the history entry ran without
   a single check.

   AT THE EXAM A CLOSED SECTION IS CLOSED. There is no way back, because a
   simulator you can return to and correct measures knowledge without time
   pressure, that is the knowledge the student does not have in the room.

   Classic script. Requires cils.js (scoring) and core.js (state) - both
   only at call time, not at load time.
   ============================================================ */
(function (global) {
  "use strict";

  /* How many attempts we keep in the history. An entry weighs a few dozen
     bytes, and localStorage is shared by the whole course: without this
     ceiling the history would be the only container growing without end. */
  var MAX_HISTORII = 50;

  function create(s) {
    /* A STEP is a group of sections under one clock. For Goethe every group
       has one section; in the telc Pflege format Sprachbausteine declares
       `tempoCondiviso: "lettura"` and sits in the same group as Lesen, so
       the two share one 60-minute timer and one "close" button. */
    var format = global.Cils.formato(s);
    var groups = [];
    (s.sezioni || []).forEach(function (section) {
      var module = format.moduli.filter(function (m) { return m.id === section.id; })[0];
      var last = groups[groups.length - 1];
      if (module && module.tempoCondiviso && last && last[0].id === module.tempoCondiviso) last.push(section);
      else groups.push([section]);
    });
    var order = groups.map(function (group) { return group[0].id; });
    var run = {
      sim: s,
      i: 0,
      risposte: {},     // section id -> list of tasks -> list of answers
      scaduta: {},      // section id -> true when the time ran out
      punti: {},        // section id -> points
      szczegoly: {},    // section id -> the full tally from Cils.punteggioSezione
      scritta: null,
      orale: null
    };

    function sekcja() {
      var id = order[run.i];
      return id ? global.Cils.sezione(run.sim, id) : null;
    }

    /** Every section of the current step (one, except where a timer is shared). */
    function grupa() { return groups[run.i] || []; }

    /**
     * An empty answer grid: one list per task, as long as its items.
     * It is created BEFORE the first click, because scoring runs by index
     * and a list one element short would shift answers onto other questions.
     */
    function przygotuj(sez) {
      run.risposte[sez.id] = (sez.prove || []).map(function (p) {
        return new Array((p.items || []).length);
      });
      return run.risposte[sez.id];
    }

    function odpowiedz(sezId, prova, item, wartosc) {
      var siatka = run.risposte[sezId];
      if (!siatka || !siatka[prova]) return false;
      siatka[prova][item] = wartosc;
      return true;
    }

    /** Closes a closed-answer section: scores it and remembers the tally. */
    function zamknij(sez) {
      var w = global.Cils.punteggioSezione(sez, run.risposte[sez.id]);
      run.punti[sez.id] = w.punti;
      run.szczegoly[sez.id] = w;
      return w;
    }

    function scadla(id) { run.scaduta[id] = true; }

    function dalej() { run.i++; return sekcja(); }

    return {
      dane: run,
      sekcja: sekcja,
      grupa: grupa,
      przygotuj: przygotuj,
      odpowiedz: odpowiedz,
      zamknij: zamknij,
      scadla: scadla,
      dalej: dalej,
      /** A section's answers - for inspection in tests and for scoring. */
      odpowiedzi: function (id) { return run.risposte[id]; },
      czyScadla: function (id) { return !!run.scaduta[id]; },
      zapiszScritta: function (traccia, testo, choices) {
        run.scritta = Array.isArray(traccia) ? traccia.map(function (task, index) {
          return { traccia: task.scelta ? task.scelta[(choices || [])[index] || 0] : task, testo: testo[index] };
        }) : { traccia: traccia, testo: testo };
      },
      /**
       * The oral part arrives in TWO steps, and that is the shape of the
       * decision rather than an accident of the code.
       *
       * During the timed section all we can have is the topic and a
       * recording: the microphone is taken by `MediaRecorder`, and
       * `Audio2.listen` closes at the first pause anyway, so a live
       * transcript of a one-minute presentation does not exist. The text
       * arrives afterwards, in a review with no clock on it, where the
       * student listens to themselves and writes down what they said.
       *
       * It is therefore THEIR TEXT, never a transcript, and the report says
       * so in those words. What it buys is real: ADR-009 point 5 asked for
       * the oral part to go through the same `Writing.analyse` as the
       * written one, and until now there was nothing to pass it.
       */
      zapiszOrale: function (argomento) { run.orale = { argomento: argomento, testo: "" }; },
      zapiszTrascrizione: function (testo) {
        if (!run.orale) return false;
        run.orale.testo = String(testo == null ? "" : testo);
        return true;
      },
      esito: function () { return global.Cils.esito(run.szczegoly, global.Cils.formato(run.sim)); },
      get krok() { return run.i + 1; },
      get ile() { return order.length; },
      get skonczone() { return run.i >= order.length; }
    };
  }

  /**
   * A history entry. We keep the points of the two skills the simulator can
   * score, the list of sections whose time ran out and the verdict - not the
   * answers: those are an exercise, not history.
   */
  function wpis(run, e, teraz) {
    var d = run.dane;
    var entry = {
      sim: d.sim.id,
      ts: teraz,
      punti: { ascolto: d.punti.ascolto || 0, lettura: d.punti.lettura || 0 },
      scadute: Object.keys(d.scaduta)
    };
    if (global.Cils.formato(d.sim).punteggio !== "fasceRicettive") {
      entry.verdetto = e.verdetto;
      return entry;
    }
    /* A band result has no verdict to remember: the total and the band
       are all it says. */
    entry.punti.sprachbausteine = d.punti.sprachbausteine || 0;
    entry.ricettivo = e.punti;
    entry.fascia = e.fascia ? e.fascia.etichetta : null;
    return entry;
  }

  /**
   * Appends an attempt to the student's history.
   *
   * The container is ADDED in store.js, so an older profile gets it empty
   * and the schema number does not move. Array.isArray, not truthy: an
   * import with a `cils.runs` of another type passes validation (which only
   * checks the top-level field), and `push` on a string would throw in the
   * middle of drawing the summary - that is, after an hour of exam.
   *
   * @returns {boolean} whether the entry went in
   */
  function zapisz(run, e, teraz) {
    var st = global.Core.state.cils;
    if (!st || !Array.isArray(st.runs)) return false;
    st.runs.push(wpis(run, e, teraz));
    if (st.runs.length > MAX_HISTORII) st.runs = st.runs.slice(-MAX_HISTORII);
    global.Core.save();
    return true;
  }

  global.CilsRun = {
    create: create,
    zapisz: zapisz,
    wpis: wpis,
    get ORDINE() { return global.Cils.ABILITA; },
    MAX_HISTORII: MAX_HISTORII
  };

})(window);
