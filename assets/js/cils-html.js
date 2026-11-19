/* ============================================================
   cils-html.js - the exam simulation markup, without a single event.

   ONLY data -> string functions live here. The clock, wiring up handlers,
   recording and the absence of a way back stayed in views-cils.js, and the
   scoring in cils.js and cils-run.js.

   WHY SEPARATELY. The exam answer grid has four shapes (true/false,
   multiple choice, cloze with numbered gaps, listening with a play
   counter) and each of them is a decision visible only in the generated
   HTML: the gap number next to the right task, the radio `name` shared
   within one question and different across two, `data-p`/`data-i` matching
   the grid in cils-run.js. As long as these functions sat in the view,
   they could only be checked with Playwright, that is through an hour-long
   attempt with four countdowns - so in practice they were not checked at
   all.

   Interface strings and `esc` are read INSIDE the functions, not while the
   module body runs: that way this file does not impose its position in the
   <script> order, and a test can substitute a double after it has loaded.

   Classic script. Requires core.js (esc), i18n.js, cils.js, writing.js.
   ============================================================ */
(function (global) {
  "use strict";

  function esc(s) { return global.Core.esc(s); }
  function t(k, v) { return global.I18n.t(k, v); }

  /* ═══════════════════ The list and the preamble ═══════════════════ */

  /**
   * The body of the simulation list.
   *
   * The simulator's limit (two skills out of four) sits BEFORE the list, not
   * in the summary: whoever discovers it at the end has gone through the
   * whole session with the wrong expectation.
   *
   * The page title is set by the view: `pageHead` lives in Views, and this
   * file touches neither Views nor the DOM.
   */
  /** A heading inside a step that holds more than one section. */
  function sottotitolo(testo) { return '<h2 class="cils-family">' + esc(testo) + "</h2>"; }

  /** Whether a simulation (or format) scores by receptive bands, as telc Pflege does. */
  function ricettiva(formato) { return !!formato && formato.punteggio === "fasceRicettive"; }

  function righe(symulacje, kluczLinii) {
    return '<div class="stack">' + symulacje.map(function (s) {
      return '<div class="list-row"><span class="list-row__main"><b>' + esc(s.titoloIt) + "</b>" +
        "<span>" + esc(t(kluczLinii)) + "</span></span>" +
        '<button class="btn btn--primary btn--sm js-start" data-id="' + esc(s.id) + '">' +
        esc(t("cils.start")) + "</button></div>";
    }).join("") + "</div>";
  }

  /**
   * The list has two families when the data has both: the Goethe ones keep
   * the markup they always had, the Pflege ones sit under their own heading
   * with their own unofficial note. With Goethe alone nothing changes.
   */
  function lista(symulacje) {
    var tutte = symulacje || [];
    var pflege = tutte.filter(function (s) { return ricettiva(global.Cils.formato(s)); });
    var goethe = tutte.filter(function (s) { return pflege.indexOf(s) < 0; });
    var testa = '<div class="callout callout--info"><b>' + esc(t("cils.limitLabel")) + "</b> " +
      esc(t("cils.limit")) + "</div>";
    var schedaGoethe = '<div class="card"><p class="cils-struct">' + esc(t("cils.structure")) + "</p>" +
      '<p class="cils-src">' + esc(t("cils.thresholdSource")) + "</p></div>";
    if (!pflege.length) return testa + schedaGoethe + righe(goethe, "cils.sectionsLine");
    /* The Goethe card describes the Goethe family only: with two families it
       goes under its own title, so it cannot read as covering telc too. */
    return testa +
      '<h2 class="cils-family">' + esc(t("cils.familyGoethe")) + "</h2>" + schedaGoethe +
      righe(goethe, "cils.sectionsLine") +
      '<h2 class="cils-family">' + esc(t("cils.familyPflege")) + "</h2>" +
      '<div class="card"><p class="cils-struct">' + esc(t("cils.structurePflege")) + "</p>" +
      '<p class="cils-src">' + esc(t("cils.pflegeNote")) + "</p></div>" +
      righe(pflege, "cils.sectionsLinePflege");
  }

  /* ═══════════════════ The section frame ═══════════════════ */

  /**
   * The bar with the step counter and the clock.
   *
   * The written clock is `aria-hidden` and the live region is empty: the
   * text is put there by the timer in views-cils.js, with three
   * announcements only. A timer that speaks every second makes the page
   * unusable with a screen reader.
   */
  function barra(krok, ile) {
    return '<div class="cils-bar">' +
      '<span class="cils-step">' + esc(t("cils.stepOf", { i: krok, n: ile })) + "</span>" +
      '<span class="cils-clock js-clock" aria-hidden="true">--:--</span>' +
      '<span class="sr-only js-clock-live" role="status" aria-live="polite"></span></div>';
  }

  /**
   * The (hidden) time-up notice and the button that closes the section.
   *
   * The same for all four sections: only the label changes, because the last
   * one ends the exam instead of the section.
   */
  function coda(kluczPrzycisku) {
    return '<p class="callout callout--trap js-expired" hidden>' + esc(t("cils.expired")) + "</p>" +
      '<div class="cils-acts"><button class="btn btn--primary js-next">' +
      esc(t(kluczPrzycisku)) + "</button></div>";
  }

  /* ═══════════════════ Listening and reading: closed answers ═══════════════════ */

  /**
   * @param {object} sez
   * @param {{prefix?:string}} [opzioni] a prefix for the radio names, so a
   *   second section on the same page (Sprachbausteine under Lesen) cannot
   *   share a group with the first
   */
  function corpoChiuso(sez, opzioni) {
    var prefix = (opzioni && opzioni.prefix) || "";
    return '<div class="js-body">' + (sez.prove || []).map(function (p, n) {
      return prova(sez, p, n, prefix);
    }).join("") + "</div>";
  }

  function prova(sez, p, n, prefix) {
    var testa = '<div class="card cils-prova"><h2 class="cils-h">' +
      esc(t("cils.testN", { n: n + 1 })) + "</h2>" +
      '<p class="cils-consegna">' + esc(p.consegna) + "</p>";

    if (sez.id === "ascolto") testa += ascolti(p, n);
    if (p.titolo) testa += '<h3 class="cils-titolo">' + esc(p.titolo) + "</h3>";
    if (p.t !== "cloze" && p.t !== "lueckeAbbina" && p.t !== "lueckeMc" && p.testo) testa += p.testo.map(function (x) {
      return '<p class="cils-testo">' + esc(x) + "</p>";
    }).join("");
    if (p.t === "cloze" || p.t === "lueckeAbbina" || p.t === "lueckeMc") testa += cloze(p);
    if (p.t === "abbina") testa += (p.annunci || []).map(function (ad, index) {
      return '<article><h3>' + esc(String.fromCharCode(97 + index) + ". " + ad.titolo) +
        "</h3><p>" + esc(ad.testo) + "</p></article>";
    }).join("");

    return testa + '<ol class="cils-items">' + (p.items || []).map(function (it, i) {
      return "<li>" + item(p, it, n, i, prefix) + "</li>";
    }).join("") + "</ol></div>";
  }

  function ascolti(p, n) {
    return '<div class="cils-audio">' + (p.brani || []).map(function (_, k) {
      return '<button type="button" class="btn btn--ghost btn--sm js-play" data-p="' + n + '" data-b="' + k + '">' +
        esc(t("cils.playText", { n: k + 1 })) + '</button>';
    }).join("") + '<p class="cils-hint">' + esc(t("cils.twice")) + "</p></div>";
  }

  function cloze(p) {
    /* The text arrives in pieces and the gaps sit BETWEEN the pieces:
       numbering them here keeps the text readable and makes every gap point
       at its own item. */
    return '<p class="cils-testo">' + (p.testo || []).map(function (pezzo, i) {
      var buco = i < (p.items || []).length ? ' <b class="cils-gap">(' + (i + 1) + ")</b> " : "";
      return esc(pezzo) + buco;
    }).join("") + "</p>";
  }

  function item(p, it, n, i, prefix) {
    var nome = (prefix || "") + "p" + n + "i" + i;
    var options = it.opts || [];
    if (p.t === "lueckeAbbina") options = p.opts || [];
    if (p.t === "vf") options = ["richtig", "falsch"];
    if (p.t === "jn") options = ["Ja", "Nein"];
    if (p.t === "abbina") options = (p.annunci || []).map(function (_, index) {
      return String.fromCharCode(97 + index);
    }).concat(["0"]);
    if (p.t === "mc" || p.t === "lueckeMc") options = options.map(function (option, index) {
      return String.fromCharCode(97 + index) + ". " + option;
    });
    var testa = it.q ? '<span class="cils-q">' + esc(it.q) + "</span>" : "";
    var group = '<span class="cils-opts cils-opts--col">' + options.map(function (o, k) {
      return '<label><input type="radio" name="' + nome + '" data-p="' + n + '" data-i="' + i +
        '" value="' + k + '"> ' + esc(o) + "</label>";
    }).join("") + "</span>";
    if (p.t !== "lueckeAbbina" && p.t !== "lueckeMc") return testa + group;
    /* A gap has no question text: the legend is what a screen reader announces. */
    return testa + '<fieldset class="cils-choices"><legend class="sr-only">' +
      esc(t("cils.gapN", { n: i + 1 })) + "</legend>" + group + "</fieldset>";
  }

  /* ═══════════════════ Written production ═══════════════════ */

  function productionPrompt(task, index) {
    return '<h2 class="cils-h">' + esc(t("cils.testN", { n: index + 1 })) + "</h2>" +
      '<p class="cils-consegna">' + esc(task.consegna) + "</p><ul>" +
      (task.punti || []).map(function (point) { return "<li>" + esc(point) + "</li>"; }).join("") + "</ul>";
  }

  function writingChoice(task, index) {
    return '<fieldset><legend>Aufgabe wählen</legend>' + task.scelta.map(function (option, i) {
      return '<label><input type="radio" name="writing-choice-' + index + '" value="' + i + '"' +
        (i === 0 ? ' checked' : '') + '> ' + esc(option.titolo) + '</label>';
    }).join('') + '</fieldset>' + task.scelta.map(function (option, i) {
      return '<div class="js-writing-option" data-choice="' + i + '"' + (i ? ' hidden' : '') + '>' +
        '<p>' + esc(option.consegna) + '</p><table><caption>' + esc(option.modulo.intestazione) +
        '</caption><tbody>' + option.modulo.righe.map(function (row) {
          return '<tr><th scope="row">' + esc(row[0]) + '</th><td>' + esc(row[1]) + '</td></tr>';
        }).join('') + '</tbody></table></div>';
    }).join('');
  }

  function corpoScritto(sez) {
    if (sez.prove && sez.prove.length) return '<div class="js-body">' + sez.prove.map(function (task, index) {
      return '<div class="card">' + (task.scelta ? writingChoice(task, index) : productionPrompt(task, index)) +
        '<label for="writing-' + index + '" class="sr-only">' + esc(t("cils.testN", { n: index + 1 })) + '</label>' +
        '<textarea id="writing-' + index + '" class="field cils-ta js-text" rows="10" spellcheck="false"></textarea>' +
        '<p class="cils-count js-count" role="status" aria-live="polite"></p></div>';
    }).join("") + "</div>";
    return '<div class="js-body"><div class="card">' +
      '<p class="cils-consegna">' + esc(sez.consegna) + "</p>" +
      '<div class="cils-tracce">' + (sez.tracce || []).map(function (tr, i) {
        return '<label class="cils-traccia"><input type="radio" name="traccia" value="' + i + '"' +
          (i === 0 ? " checked" : "") + "> " + esc(tr.it) + "</label>";
      }).join("") + "</div>" +
      '<textarea class="field cils-ta js-text" rows="10" spellcheck="false"></textarea>' +
      '<p class="cils-count js-count" role="status" aria-live="polite"></p></div></div>';
  }

  /* ═══════════════════ Oral production (not graded) ═══════════════════ */

  /* ---------------- telc Sprechen: preparation and parts ---------------- */

  function ul(list) { return "<ul>" + list.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul>"; }

  function topicSheet(topic) {
    return "<p><b>" + esc(topic.thema) + "</b></p><p class=\"cils-hint\">" + esc(t("cils.keywords")) + "</p>" + ul(topic.stichworte);
  }

  function partOf(sez, id) {
    return global.Cils.parti(sez).filter(function (p) { return p.id === id; })[0];
  }

  /**
   * The preparation before the oral part: the sheets of Teil 2 and Teil 3
   * (Teil 1 is answered on the spot) and a field for notes.
   *
   * @param {object} sez     the oral section
   * @param {number} minuti  the declared preparation time
   * @param {string} appunti notes already written
   */
  function preparazione(sez, minuti, appunti) {
    var due = partOf(sez, "2A"), tre = partOf(sez, "3");
    return '<div class="js-body"><div class="card">' +
      '<p class="callout callout--info"><b>' + esc(t("cils.oralLabel")) + "</b> " +
      esc(t("cils.prepIntro", { n: minuti })) + "</p>" +
      '<p class="cils-hint">' + esc(t("cils.prepT1")) + "</p>" +
      '<section class="cils-parte" data-sheet="2"><h3 class="cils-h">' + esc(t("cils.prepSheet2")) + "</h3>" +
      due.scelta.map(topicSheet).join("") + "</section>" +
      '<section class="cils-parte" data-sheet="3"><h3 class="cils-h">' + esc(t("cils.prepSheet3")) + "</h3>" +
      "<p><b>" + esc(tre.thema) + "</b></p><p class=\"cils-hint\">" + esc(t("cils.statements")) + "</p>" +
      ul(tre.aussagen) + "</section>" +
      '<label for="prep-notes" class="cils-h" style="display:block">' + esc(t("cils.prepNotes")) + "</label>" +
      '<textarea id="prep-notes" class="field js-notes" rows="6" spellcheck="false">' + esc(appunti || "") + "</textarea>" +
      '<p class="cils-hint">' + esc(t("cils.prepNotesHint")) + "</p></div></div>";
  }

  function oralPart(p) {
    var out = '<section class="cils-parte" data-part="' + esc(p.id) + '"><h3 class="cils-h">' + esc(t("cils.partN", { id: p.id })) + "</h3>";
    if (p.consegna) out += '<p class="cils-consegna">' + esc(p.consegna) + "</p>";
    if (p.bild) out += '<figure class="cils-bild" role="group" aria-label="' + esc(p.bild.alt) + '"><figcaption><b>' +
      esc(t("cils.imageText")) + ":</b> " + esc(p.bild.beschreibung) + "</figcaption></figure>";
    if (p.fragen) out += '<p class="cils-hint">' + esc(t("cils.examinerAsks")) + "</p>" + ul(p.fragen);
    if (p.scelta) out += "<fieldset><legend>" + esc(t("cils.pickTopic")) + "</legend>" + p.scelta.map(function (topic, i) {
      return '<label class="cils-traccia"><input type="radio" name="arg2a" value="' + i + '"' + (i === 0 ? " checked" : "") +
        '> <span>' + topicSheet(topic) + "</span></label>";
    }).join("") + "</fieldset>";
    if (p.aussagen) out += "<p><b>" + esc(p.thema) + '</b></p><p class="cils-hint">' + esc(t("cils.statements")) + "</p>" + ul(p.aussagen);
    return out + "</section>";
  }

  function oralNotes(appunti) {
    return appunti ? '<details class="js-notes-ro"><summary>' + esc(t("cils.prepNotes")) + "</summary><p>" +
      esc(appunti).replace(/\n/g, "<br>") + "</p></details>" : "";
  }

  /**
   * @param {object} sez   the oral section from the course data
   * @param {string} powod string key for "nothing to record with"; "" when there is
   * @param {string} [appunti] the preparation notes, shown read-only
   */
  function corpoOrale(sez, powod, appunti) {
    var parts = global.Cils.parti(sez);
    return '<div class="js-body"><div class="card">' +
      '<p class="callout callout--info"><b>' + esc(t("cils.oralLabel")) + "</b> " + esc(t("cils.oralNotScored")) + "</p>" +
      (parts.length ? oralNotes(appunti) + parts.map(oralPart).join("") :
      sez.prove && sez.prove.length ? sez.prove.map(productionPrompt).join("") :
      "<h3 class=\"cils-h\">" + esc(t("cils.oralIntro")) + "</h3><ul class=\"cils-list\">" +
      (sez.presentazione || []).map(function (q) { return "<li>" + esc(q) + "</li>"; }).join("") + "</ul>" +
      "<h3 class=\"cils-h\">" + esc(t("cils.oralTopic")) + "</h3>" +
      '<div class="cils-tracce">' + (sez.argomenti || []).map(function (a, i) {
        return '<label class="cils-traccia"><input type="radio" name="arg" value="' + i + '"' +
          (i === 0 ? " checked" : "") + "> " + esc(a.it) + "</label>";
      }).join("") + "</div>") +
      (powod ? '<p class="cils-hint">' + esc(t(powod)) + "</p>" :
        '<div class="cils-acts"><button class="btn btn--primary js-rec" aria-pressed="false">' +
        esc(t("cils.record")) + '</button><button class="btn btn--ghost btn--sm js-play-mine" hidden>' +
        esc(t("cils.playMine")) + "</button></div>") +
      '<p class="cils-state js-state" role="status" aria-live="polite"></p>' +
      "</div></div>";
  }

  /**
   * The review after the oral part: listen to yourself, write what you said.
   *
   * Deliberately OUTSIDE the exam: no clock, and the button says so. Under a
   * countdown this would be a second written task measuring typing speed.
   *
   * The field is optional, and that is not softness. What the student writes
   * here is the only thing the course can read of a spoken answer, and a
   * required field would push whoever does not feel like writing into typing
   * anything at all - which would then be analysed and reported as if it
   * were their speech.
   */
  function rewizja(ustna, powod) {
    var arg = (ustna && ustna.argomento) || {};
    return '<div class="js-body"><div class="card">' +
      '<p class="callout callout--info"><b>' + esc(t("cils.reviewLabel")) + "</b> " +
      esc(t("cils.reviewIntro")) + "</p>" +
      /* Its own key, not the one from the exam section. There the heading
         says "choose a topic" and there is something to choose; here the
         topic is already behind the student, and telling them to pick one
         on a screen with no choice is an instruction that cannot be
         followed. */
      "<h3 class=\"cils-h\">" + esc(t("cils.reviewTopic")) + "</h3>" +
      "<p>" + esc(arg.it || "") + "</p>" +
      (powod ? "" :
        '<div class="cils-acts"><button class="btn btn--ghost btn--sm js-play-mine">' +
        esc(t("cils.playMine")) + "</button></div>") +
      '<label style="display:block;margin-top:14px"><span style="font-weight:600;display:block;margin-bottom:5px">' +
      esc(t("cils.reviewWrite")) + "</span>" +
      '<textarea class="field js-said" rows="6" spellcheck="false"></textarea></label>' +
      '<p class="cils-hint">' + esc(t("cils.reviewHint")) + "</p>" +
      "</div></div>";
  }

  /* ═══════════════════ Summary ═══════════════════ */

  /**
   * The table of the four skills.
   *
   * @param {object} esito      the result from CilsRun.esito()
   * @param {function(string):boolean} czyScadla whether a section ran out of time
   */
  function abilita(esito, czyScadla) {
    var Cils = global.Cils;
    return '<table class="cils-tab"><tbody>' + Cils.ABILITA.map(function (a) {
      var d = esito.abilita[a];
      var val = d.misurata
        ? d.punti + " / " + d.max + " " + (d.sopraSoglia ? "✓" : "✗")
        : t("cils.notMeasured");
      var scad = czyScadla(a) ? " " + t("cils.expiredMark") : "";
      return "<tr><th>" + esc(t("cils.sec." + a)) + "</th><td>" + esc(val + scad) + "</td></tr>";
    }).join("") + "</tbody></table>" +
      '<p class="cils-hint">' + esc(t("cils.threshold", { n: Cils.formato().soglia * 100 })) + "</p>";
  }

  /** The written production card; "" when the student never reached that section. */
  function scritta(pisemna) {
    if (!pisemna) return "";
    if (Array.isArray(pisemna)) return pisemna.map(scritta).join("");
    var c = global.Cils.controlloScritta(pisemna.traccia, pisemna.testo);
    var wynik = global.Writing.analyse(pisemna.testo, (pisemna.traccia || {}).richiede || []);
    return '<div class="card"><h2 class="cils-h">' + esc(t("cils.sec.scritta")) + "</h2>" +
      ((pisemna.traccia || {}).titolo ? '<p class="cils-titolo">' + esc(pisemna.traccia.titolo) + "</p>" : "") +
      '<p class="cils-hint">' + esc(t("cils.writingNotScored")) + "</p>" +
      '<p class="cils-count">' + esc(t("cils.wordsOf", { n: c.parole, min: c.minimo, max: c.massimo })) +
      (c.dentroLimite ? "" : " " + esc(t("cils.outOfRange"))) + "</p>" +
      /* The requirement label is IN ITALIAN and sits in the data next to the
         list of forms: it is part of the exam task, not an interface string,
         so translating it would change the prompt and cost 18 keys times
         five. */
      '<ul class="cils-check">' + wynik.map(function (r, i) {
        var wym = ((pisemna.traccia || {}).richiede || [])[i] || {};
        return "<li>" + (r.found ? "✓" : "✗") + " " + esc(wym.etichetta || r.key) + "</li>";
      }).join("") + "</ul>" +
      /* Where the model's reading lands, when there is one. Empty in the
         markup and filled by the view: the answer arrives seconds later, and
         drawing the card only after it would mean the summary waits on an
         optional feature that most students never switch on. */
      '<div class="js-lettura-scritta cils-lettura"></div></div>';
  }

  /**
   * The oral production card; "" when the student never reached that section.
   *
   * Same detection as the written card, on the text the student wrote after
   * listening to themselves. The label under it is not decoration: it says
   * the words were TYPED FROM MEMORY, not transcribed, because a report that
   * called this a transcript would be claiming to have heard something.
   *
   * With no text there is nothing to detect, and the card says that instead
   * of showing five crosses - a row of crosses reads as "you did none of
   * this", which is a verdict, and a wrong one.
   */
  function orale(ustna) {
    if (!ustna) return "";
    var arg = ustna.argomento || {};
    var testo = ustna.testo || "";
    /* Its own sentence, not the one from the exam section: that one tells
       the student to record themselves and speak for three minutes, which on
       the report is an instruction for something already behind them. The
       written card has had a summary sentence of its own all along. */
    var glowa = '<div class="card"><h2 class="cils-h">' + esc(t("cils.sec.orale")) + "</h2>" +
      '<p class="cils-hint">' + esc(t("cils.oralSummary")) + "</p>" +
      "<p>" + esc(arg.it || "") + "</p>";

    if (!testo.trim()) {
      return glowa + '<p class="cils-hint">' + esc(t("cils.oralNoText")) + "</p></div>";
    }

    var wynik = global.Writing.analyse(testo, arg.richiede || []);
    return glowa +
      '<p class="cils-count">' + esc(t("cils.oralWords", { n: global.Writing.wordCount(testo) })) + "</p>" +
      '<ul class="cils-check">' + wynik.map(function (r, i) {
        var wym = (arg.richiede || [])[i] || {};
        return "<li>" + (r.found ? "✓" : "✗") + " " + esc(wym.etichetta || r.key) + "</li>";
      }).join("") + "</ul>" +
      '<p class="cils-hint">' + esc(t("cils.oralOwnWords")) + "</p>" +
      '<div class="js-lettura-orale cils-lettura"></div></div>';
  }

  /**
   * The body of the summary: the table, the verdict, the source of the
   * threshold, the two production cards and the two exit buttons.
   *
   * The verdict is asymmetric by construction (cils.js): one skill below the
   * threshold is enough to say no, no number of skills above it is enough to
   * say yes. Here we only read the field, so that two places do not decide it.
   */
  /** The production cards and the two exit buttons, common to both summaries. */
  function chiusura(pisemna, ustna) {
    return scritta(pisemna) + orale(ustna) +
      '<div class="cils-acts">' +
      '<button class="btn btn--primary js-again">' + esc(t("cils.again")) + "</button>" +
      '<button class="btn btn--ghost js-list">' + esc(t("cils.backToList")) + "</button></div>";
  }

  function podsumowanie(esito, czyScadla, pisemna, ustna, formato) {
    if (ricettiva(formato)) return podsumowanieFasce(esito, czyScadla, pisemna, ustna, formato);
    return '<div class="card">' + abilita(esito, czyScadla) +
      '<p class="cils-verdict">' +
      esc(t(esito.verdetto === "sotto-soglia" ? "cils.verdictBelow" : "cils.verdictUnknown")) + "</p>" +
      '<p class="cils-src">' + esc(t("cils.thresholdSource")) + "</p></div>" +
      chiusura(pisemna, ustna);
  }

  /**
   * The summary of a band result (telc Pflege).
   *
   * A total and the band it falls in, then the sentence that says what the
   * number is not. There is no verdict field here on purpose: the simulation
   * scores the receptive part only, and the certificate also depends on the
   * oral exam it cannot grade.
   */
  function podsumowanieFasce(esito, czyScadla, pisemna, ustna, formato) {
    var f = esito.fascia;
    var scadute = formato.moduli.filter(function (m) { return czyScadla(m.id); }).map(function (m) {
      return t("cils.sec." + m.id) + " " + t("cils.expiredMark");
    });
    return '<div class="card"><p class="cils-score">' +
      '<span class="cils-score__n">' + esc(esito.punti + "/" + esito.max) + "</span> " +
      "<span>" + esc(t("cils.scoreLabel")) + "</span></p>" +
      (f ? '<p class="cils-band">' + esc(t("cils.band", { name: f.etichetta, min: f.min, max: f.max })) + "</p>" : "") +
      (scadute.length ? '<p class="cils-hint">' + esc(scadute.join(", ")) + "</p>" : "") +
      '<p class="cils-fasce-note">' + esc(t("cils.fasceNote")) + "</p>" +
      '<p class="cils-src">' + esc(t("cils.pflegeNote")) + "</p></div>" +
      chiusura(pisemna, ustna);
  }

  global.CilsHtml = {
    lista: lista,
    ricettiva: ricettiva,
    sottotitolo: sottotitolo,
    barra: barra,
    coda: coda,
    corpoChiuso: corpoChiuso,
    prova: prova,
    ascolti: ascolti,
    cloze: cloze,
    item: item,
    corpoScritto: corpoScritto,
    corpoOrale: corpoOrale,
    preparazione: preparazione,
    rewizja: rewizja,
    abilita: abilita,
    scritta: scritta,
    orale: orale,
    podsumowanie: podsumowanie
  };

})(window);
