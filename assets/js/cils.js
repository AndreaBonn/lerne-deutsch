/* ============================================================
   cils.js - the engine of the unofficial Goethe B1 preview.

   Pure logic: points, thresholds, verdict. The view (views-cils.js) draws,
   counts time and makes sure a closed section cannot be reopened.

   THREE THINGS THIS FILE DOES DIFFERENTLY FROM THE REST OF THE COURSE.

   1. It scores only what can be scored. Listening and reading have a
      per-item weight in the criteria, so the result is real. Written and
      oral production are graded by HUMANS against rubrics (communicative
      effectiveness, morphosyntax, lexis, pronunciation): an automaton would
      produce a number that looks like a grade without being one. Instead,
      the written part comes back as a list of task elements present and
      missing, and the oral part does not enter the result at all.

   2. It does not announce "you passed". The format sets a 60% threshold
      per measured module. Two of the four modules remain unmeasured, so
      a result below threshold rules passing out while a result above it
      remains undetermined.

   3. It does not punish guessing, because the exam does not: a wrong answer
      and an omitted one are worth the same, that is zero.

   Classic script. No dependencies.
   ============================================================ */
(function (global) {
  "use strict";

  var Cils = {};

  /** The skills in exam order. */
  Object.defineProperty(Cils, "ABILITA", { get: function () {
    return formato().moduli.map(function (m) { return m.id; });
  } });

  /** The skills this simulator can score. The rest are declared, not measured. */
  Object.defineProperty(Cils, "PUNTEGGIABILI", { get: function () {
    return formato().moduli.filter(function (m) { return m.punteggio; })
      .map(function (m) { return m.id; });
  } });

  function formato() { return global.CILS_FORMATO; }

  function sectionProblems(section, descriptor) {
    var problems = [];
    var tasks = (section.prove || []).concat(section.tracce || []);
    var id = descriptor.id;
    if (section.minuti !== descriptor.minuti) problems.push("minuti: " + id);
    if (!tasks.length) problems.push("incompleta: " + id);
    else if (tasks.length !== descriptor.teile) problems.push("teile: " + id);
    if (!descriptor.punteggio && (section.puntiPerItem !== undefined || tasks.some(function (task) {
      return task.puntiPerItem !== undefined;
    }))) problems.push("puntiPerItem: " + id);
    /* A scored task without a positive weight would score zero in silence. */
    if (descriptor.punteggio && tasks.some(function (task) {
      return !(typeof task.puntiPerItem === "number" && task.puntiPerItem > 0);
    })) problems.push("puntiPerItem: " + id);
    return problems;
  }

  function conforme(simulation) {
    var problems = [];
    var sections = (simulation && simulation.sezioni) || [];
    var ids = Cils.ABILITA;
    if (!simulation || simulation.official !== false) problems.push("official: false required");
    formato().moduli.forEach(function (descriptor, index) {
      var section = sezione(simulation, descriptor.id);
      if (!section) { problems.push("missing: " + descriptor.id); return; }
      if (sections[index] !== section) problems.push("order: " + descriptor.id);
      problems = problems.concat(sectionProblems(section, descriptor));
    });
    sections.forEach(function (section, index) {
      if (ids.indexOf(section.id) < 0 || sections.indexOf(section) !== index ||
          sections.some(function (other, i) { return i < index && other.id === section.id; })) {
        problems.push("extra: " + section.id);
      }
    });
    return problems;
  }

  function simulazioni() { return global.CILS || []; }

  /**
   * A simulation by id, or the first one.
   * @param {string} [id]
   * @returns {object|null}
   */
  function sim(id) {
    var lista = simulazioni();
    if (!lista.length) return null;
    if (!id) return lista[0];
    for (var i = 0; i < lista.length; i++) if (lista[i].id === id) return lista[i];
    return null;
  }

  /** A section by id inside a simulation. */
  function sezione(s, id) {
    var sez = (s && s.sezioni) || [];
    for (var i = 0; i < sez.length; i++) if (sez[i].id === id) return sez[i];
    return null;
  }

  /** The number of items in a task, whatever its type. */
  function quantiItem(prova) { return ((prova && prova.items) || []).length; }

  /**
   * The points of a single task.
   *
   * @param {object} prova   with `items[].a` and `puntiPerItem`
   * @param {Array}  risposte the index chosen per item; `null`/`undefined` = omitted
   * @returns {{punti:number, esatte:number, date:number, totali:number}}
   */
  function punteggioProva(prova, risposte) {
    var items = (prova && prova.items) || [];
    var peso = (prova && prova.puntiPerItem) || 0;
    var out = { punti: 0, esatte: 0, date: 0, totali: items.length };
    risposte = risposte || [];
    for (var i = 0; i < items.length; i++) {
      var dato = risposte[i];
      if (dato === null || dato === undefined) continue;   /* omitted = 0, as at the exam */
      out.date++;
      if (dato === items[i].a) { out.esatte++; out.punti += peso; }
    }
    return out;
  }

  /**
   * The points of a closed-answer section (listening, reading).
   *
   * @param {object} sez
   * @param {Array<Array>} risposte one list per task
   */
  function punteggioSezione(sez, risposte) {
    var prove = (sez && sez.prove) || [];
    var out = { punti: 0, max: 0, esatte: 0, date: 0, totali: 0, prove: [] };
    for (var i = 0; i < prove.length; i++) {
      var p = punteggioProva(prove[i], (risposte || [])[i]);
      out.prove.push(p);
      out.punti += p.punti;
      out.esatte += p.esatte;
      out.date += p.date;
      out.totali += p.totali;
      out.max += quantiItem(prove[i]) * (prove[i].puntiPerItem || 0);
    }
    return out;
  }

  /**
   * The overall outcome, with its uncertainty stated.
   *
   * @param {object} punti weighted tallies keyed by measured module id
   * @returns {{abilita:object, verdetto:string, contate:Array, nonContate:Array}}
   */
  function esito(punti) {
    punti = punti || {};
    var out = { abilita: {}, contate: [], nonContate: [], verdetto: "indeterminato" };
    var sotto = false;

    Cils.ABILITA.forEach(function (a) {
      var misurabile = Cils.PUNTEGGIABILI.indexOf(a) >= 0;
      if (!misurabile) {
        out.abilita[a] = { misurata: false };
        out.nonContate.push(a);
        return;
      }
      var tally = punti[a] || { punti: 0, max: 0 };
      /* Nothing to score (empty shell, module never reached): not measured,
         so it can neither pass nor fail the attempt. */
      if (!(tally.max > 0)) {
        out.abilita[a] = { misurata: false };
        out.nonContate.push(a);
        return;
      }
      var percentage = tally.punti / tally.max;
      var ok = percentage >= formato().soglia;
      out.abilita[a] = { misurata: true, punti: tally.punti, max: tally.max,
        percentuale: percentage, sopraSoglia: ok };
      out.contate.push(a);
      if (!ok) sotto = true;
    });

    /* A deliberate asymmetry: one skill below the threshold is enough to say
       no, no number of skills above it is enough to say yes. */
    out.verdetto = sotto ? "sotto-soglia" : "indeterminato";
    return out;
  }

  /**
   * The elements of the prompt present in and absent from the written text.
   *
   * This is not a score and must not become one: the official rubric weighs
   * effectiveness, morphosyntax, lexis and spelling, that is things a string
   * comparison cannot see. Here we only check that the task was done in
   * full, which is the most frequent mistake and the only one a machine can
   * report without lying.
   */
  function controlloScritta(traccia, testo) {
    var parole = String(testo || "").trim().split(/\s+/).filter(Boolean).length;
    var limits = (traccia && traccia.parole) || { min: 80, max: 120 };
    return {
      parole: parole,
      dentroLimite: parole >= limits.min && parole <= limits.max,
      minimo: limits.min,
      massimo: limits.max,
      elementi: ((traccia && traccia.richiede) || []).map(function (e) { return { voce: e }; })
    };
  }

  Cils.formato = formato;
  Cils.conforme = conforme;
  Cils.sim = sim;
  Cils.sezione = sezione;
  Cils.punteggioProva = punteggioProva;
  Cils.punteggioSezione = punteggioSezione;
  Cils.esito = esito;
  Cils.controlloScritta = controlloScritta;
  Cils.simulazioni = simulazioni;
  global.Cils = Cils;

})(window);
