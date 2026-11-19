/* ============================================================
   cils.js - the engine of the unofficial Goethe-Zertifikat B1 style simulation.

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

  function formato(simulation) {
    return global.EXAM_FORMATS[(simulation && simulation.formato) || "goethe-b1"];
  }

  /* Sprachbausteine: the text has one more piece than there are gaps, every
     key points at a real option, and a shared list is used at most once. */
  function gapProblems(task) {
    var out = [];
    var items = task.items || [];
    if (task.t !== "lueckeAbbina" && task.t !== "lueckeMc") return out;
    var shared = task.t === "lueckeAbbina";
    if (shared ? (!Array.isArray(task.opts) || task.opts.length <= items.length) :
      items.some(function (it) { return !Array.isArray(it.opts) || it.opts.length !== 3; })) out.push("options");
    if (!Array.isArray(task.testo) || task.testo.length !== items.length + 1) out.push("testo");
    var seen = {};
    var repeated = false;
    var outside = items.some(function (it) {
      var size = shared ? (task.opts || []).length : (it.opts || []).length;
      if (!(typeof it.a === "number" && it.a % 1 === 0 && it.a >= 0 && it.a < size)) return true;
      if (shared) { if (seen[it.a]) repeated = true; seen[it.a] = true; }
      return false;
    });
    if (outside) out.push("risposta");
    if (repeated) out.push("duplicata");
    return out;
  }

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
    if (descriptor.items) descriptor.items.forEach(function (count, index) {
      if (quantiItem(tasks[index]) !== count) problems.push("items: " + id + "-" + (index + 1));
    });
    tasks.forEach(function (task, index) {
      gapProblems(task).forEach(function (kind) {
        problems.push(kind + ": " + id + "-" + (index + 1));
      });
    });
    return problems;
  }

  /** The oral parts of a section (telc: 1A, 1B, 2A, 2B, 3), flattened in order. */
  function parti(section) {
    return ((section && section.prove) || []).reduce(function (all, task) {
      return all.concat(Array.isArray(task.parti) ? task.parti : []);
    }, []);
  }

  function texts(list) {
    return Array.isArray(list) && list.length > 0 && list.every(function (x) {
      return typeof x === "string" && x.trim() !== "";
    });
  }

  var PART_RULES = {
    "1A": function (p) {
      return !!p.bild && typeof p.bild.alt === "string" && typeof p.bild.beschreibung === "string" &&
        typeof p.consegna === "string";
    },
    "1B": function (p) { return texts(p.fragen); },
    "2A": function (p) {
      return Array.isArray(p.scelta) && p.scelta.length === 2 && p.scelta.every(function (topic) {
        return !!topic && typeof topic.thema === "string" && texts(topic.stichworte);
      });
    },
    "2B": function (p) { return texts(p.fragen); },
    "3": function (p) { return typeof p.thema === "string" && texts(p.aussagen); }
  };

  /* telc Sprechen: exactly 1A, 1B, 2A, 2B, 3, each with what the examiner
     hands over. Without two topics in 2A there is no choice to make. */
  function sprechenProblems(section) {
    var list = parti(section);
    var order = list.map(function (p) { return p.id; }).join(",");
    if (order !== "1A,1B,2A,2B,3") return ["sprechen: parti"];
    return list.filter(function (p) { return !PART_RULES[p.id](p); }).map(function (p) {
      return "sprechen: " + p.id;
    });
  }

  function conforme(simulation) {
    var problems = [];
    var sections = (simulation && simulation.sezioni) || [];
    var selected = formato(simulation);
    if (!selected) return ["formato: unknown"];
    var ids = selected.moduli.map(function (m) { return m.id; });
    if (!simulation || simulation.official !== false) problems.push("official: false required");
    selected.moduli.forEach(function (descriptor, index) {
      var section = sezione(simulation, descriptor.id);
      if (!section) { problems.push("missing: " + descriptor.id); return; }
      if (sections[index] !== section) problems.push("order: " + descriptor.id);
      problems = problems.concat(sectionProblems(section, descriptor));
      if (simulation.formato === "telc-pflege" && descriptor.id === "orale") {
        problems = problems.concat(sprechenProblems(section));
      }
      if (simulation.formato === "telc-pflege" && descriptor.id === "scritta") {
        (section.prove || []).forEach(function (task, index) {
          if (!Array.isArray(task.scelta) || task.scelta.length !== 2 || task.scelta.some(function (option) {
            return !option || !option.parole || !option.modulo || !Array.isArray(option.modulo.righe) || !option.modulo.righe.length ||
              typeof option.titolo !== "string" || typeof option.consegna !== "string" || typeof option.modulo.intestazione !== "string" ||
              typeof option.parole.min !== "number" || typeof option.parole.max !== "number";
          })) problems.push("scelta: scritta-" + (index + 1));
        });
      }
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
  function esito(punti, selected) {
    punti = punti || {};
    selected = selected || formato();
    if (selected.punteggio === "fasceRicettive") return esitoFasce(punti, selected);
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
      var ok = percentage >= selected.soglia;
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

  function esitoFasce(punti, selected) {
    var total = 0;
    var max = 0;
    selected.moduli.forEach(function (module) {
      if (!module.punteggio || !punti[module.id]) return;
      total += punti[module.id].punti || 0;
      max += punti[module.id].max || 0;
    });
    var band = selected.fasce.filter(function (f) { return total >= f.min && total <= f.max; })[0];
    /* No verdict field: even "below B1" is a band, not a pass/fail call. */
    return { punti: total, max: max, fascia: band || null };
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
  Cils.parti = parti;
  Cils.sim = sim;
  Cils.sezione = sezione;
  Cils.punteggioProva = punteggioProva;
  Cils.punteggioSezione = punteggioSezione;
  Cils.esito = esito;
  Cils.controlloScritta = controlloScritta;
  Cils.simulazioni = simulazioni;
  global.Cils = Cils;

})(window);
