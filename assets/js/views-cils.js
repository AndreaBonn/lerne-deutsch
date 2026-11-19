/* ============================================================
   views-cils.js - going through the exam simulation.

   The scoring engine sits in cils.js, the run of a whole attempt (the order
   of the sections, the answer grid, the points, the sections whose time ran
   out, the history entry) in cils-run.js, and all the markup in
   cils-html.js. What is left here is what none of them can do: the clock,
   wiring up handlers and the absence of a way back.

   WHY THERE IS NO WAY BACK. At the exam a closed section is closed, and a
   simulator you can return to and correct measures something other than the
   exam: it measures knowledge without time pressure, that is the knowledge
   the student does not have in the room. The clock runs while the student
   stares at the ceiling too.

   THE SENTENCE ABOUT THE LIMIT COMES BEFORE THE START, not in the summary.
   The simulator grades two skills out of four: whoever finds that out at
   the end has gone through the whole session with a false expectation. It
   is the same principle as with shadowing and with speech tempo.

   Classic script. Requires core.js, cils.js, cils-run.js, cils-html.js,
   audio.js, writing.js, recorder.js, views.js.
   ============================================================ */
(function (global) {
  "use strict";

  var esc = Core.esc;
  var t = function (k, v) { return I18n.t(k, v); };
  var set = Views.shell.set;
  var pageHead = Views.shell.head;
  var el = Views.shell.root;
  var H = CilsHtml;

  var ASCOLTI_MAX = 2;              /* all'esame i testi si sentono due volte */
  var AVVISI = [600, 300, 60];      /* secondi a cui il tempo viene annunciato */

  var run = null;
  var tick = null;

  /* The student's own recording, kept for the review that follows the exam.
     Module scope rather than inside the oral section, because the section it
     was made in is gone by the time it is listened to. In memory only: it is
     dropped with the page, and nothing writes audio to disk. */
  var nagranie = null;

  /* Whether the review after the oral part has already been through. Without
     it the summary would send the student back to the review it just came
     from, for ever. */
  var poRewizji = false;

  /* ═══════════════════ The list and the preamble ═══════════════════ */

  Views.esame = function (params) {
    fermaTimer();
    if (params && params.id) return avvia(params.id);

    var lista = Cils.simulazioni();
    if (!lista.length) { set(Views.shell.empty(t("cils.none"))); return; }

    set(pageHead(t("cils.kicker"), t("cils.title"), t("cils.intro")) +
      Views.shell.guideLink("esame") + H.lista(lista));

    el().querySelectorAll(".js-start").forEach(function (b) {
      b.addEventListener("click", function () { App.go("esame", { id: b.getAttribute("data-id") }); });
    });
  };

  function avvia(id) {
    var s = Cils.sim(id);
    if (!s) { set(Views.shell.empty(t("cils.none"))); return; }
    run = CilsRun.create(s);
    nagranie = null;
    poRewizji = false;
    rysujSezione();
  }

  /* ═══════════════════ The timer ═══════════════════ */

  function fermaTimer() {
    if (tick) { global.clearInterval(tick); tick = null; }
    if (global.Audio2) Audio2.stop();
  }

  /* The router calls this on EVERY exit from the route, including via the
     side rail, hashchange and the browser's back button. Without it the
     clock kept running. */
  function pilnujWyjscia() { Views.onLeave = fermaTimer; }

  /* The button that closes a section goes dead the moment it is clicked. A
     double click would hit the same button on the already redrawn section
     and skip it without a single answer - and it is clicked under a clock,
     so a nervous double click is the rule here, not the exception. */
  function razTylko(przycisk, akcja) {
    przycisk.addEventListener("click", function (e) {
      /* The second click of a double click: the first one has already drawn
         the next section, whose button can sit under the same pointer. */
      if (e && e.detail > 1) return;
      if (przycisk.disabled) return;
      przycisk.disabled = true;
      akcja();
    });
  }

  /**
   * Starts the section countdown.
   *
   * The written clock updates every second and is `aria-hidden`; the live
   * region receives only three announcements. A timer that speaks every
   * second makes the page unusable with a screen reader, and it is the
   * easiest way to pass the automated gates and fail with a real user.
   */
  function avviaTimer(secondi, scaduto) {
    var resta = secondi;
    var prossimo = AVVISI.slice();
    var vista = el().querySelector(".js-clock");
    var voce = el().querySelector(".js-clock-live");
    scrivi();

    pilnujWyjscia();
    tick = global.setInterval(function () {
      resta--;
      scrivi();
      while (prossimo.length && resta <= prossimo[0]) {
        var s = prossimo.shift();
        if (voce) voce.textContent = t("cils.timeWarn", { m: Math.round(s / 60) });
      }
      if (resta <= 0) { fermaTimer(); if (voce) voce.textContent = t("cils.timeUp"); scaduto(); }
    }, 1000);

    function scrivi() {
      if (!vista) return;
      var m = Math.max(0, Math.floor(resta / 60)), sec = Math.max(0, resta % 60);
      vista.textContent = m + ":" + (sec < 10 ? "0" : "") + sec;
    }
  }

  /* ═══════════════════ The sections ═══════════════════ */

  /** The kicker names the exam style of THIS simulation, not always Goethe. */
  function kicker() {
    return t(H.ricettiva(Cils.formato(run.dane.sim)) ? "cils.kickerPflege" : "cils.kicker");
  }

  /* A step with a shared timer (Lesen + Sprachbausteine) is titled with all
     of its sections and counts the minutes once. */
  function intestazione(sez) {
    var titolo = run.grupa().map(function (s) { return t("cils.sec." + s.id); }).join(" + ");
    return H.barra(run.krok, run.ile) +
      pageHead(kicker() + " · " + esc(run.dane.sim.titoloIt), titolo,
        t("cils.minutes", { n: sez.minuti }));
  }

  function rysujSezione() {
    fermaTimer();
    var sez = run.sekcja();
    if (!sez) return poEgzaminie();
    if (sez.id === "ascolto" || sez.id === "lettura") return sezioneChiusa(sez);
    if (sez.id === "scritta") return sezioneScritta(sez);
    var preparazione = run.preparazione();
    if (preparazione) return sezionePreparazione(sez, preparazione);
    return sezioneOrale(sez);
  }

  /**
   * What happens when the sections run out: first the review, then the report.
   *
   * The review is skipped for whoever never reached the oral part - a
   * student who left after the reading has nothing to listen back to, and a
   * screen asking them to write down what they said would be asking about
   * something that never happened.
   */
  function poEgzaminie() {
    if (run.dane.orale && !poRewizji) return rewizja();
    riepilogo();
  }

  function avanti() {
    fermaTimer();
    run.dalej();
    rysujSezione();
  }

  function scadi(id) {
    run.scadla(id);
    el().querySelectorAll(".js-body").forEach(function (box) { box.setAttribute("aria-disabled", "true"); });
    var avvisoEl = el().querySelector(".js-expired");
    if (avvisoEl) avvisoEl.hidden = false;
    el().querySelectorAll(".js-body input, .js-body button, .js-body textarea")
      .forEach(function (n) { n.disabled = true; });
  }

  /* ---------------- Listening and reading: closed answers ---------------- */

  function sezioneChiusa(sez) {
    var gruppo = run.grupa();
    gruppo.forEach(function (s) { run.przygotuj(s); });

    /* Only the first section of a step keeps the bare radio names; the
       others carry their id, or two sections would share answer groups. */
    var corpo = gruppo.map(function (s, k) {
      return k ? H.sottotitolo(t("cils.sec." + s.id)) + H.corpoChiuso(s, { prefix: s.id + "-" })
        : H.corpoChiuso(s);
    }).join("");
    set(intestazione(sez) + corpo + H.coda("cils.closeSection"));

    podepnijRisposte(gruppo);
    if (sez.id === "ascolto") podepnijAscolti(sez);
    razTylko(el().querySelector(".js-next"), function () { chiudiChiusa(gruppo); });
    avviaTimer(sez.minuti * 60, function () { gruppo.forEach(function (s) { scadi(s.id); }); });
  }

  /** One `.js-body` per section of the step, in order. */
  function podepnijRisposte(gruppo) {
    var corpi = el().querySelectorAll(".js-body");
    gruppo.forEach(function (sez, k) {
      corpi[k].querySelectorAll('input[type="radio"]').forEach(function (r) {
        r.addEventListener("change", function () {
          var p = Number(r.getAttribute("data-p")), i = Number(r.getAttribute("data-i"));
          run.odpowiedz(sez.id, p, i, Number(r.value));
        });
      });
    });
  }

  function podepnijAscolti(sez) {
    var conta = {};
    el().querySelectorAll(".js-play").forEach(function (b) {
      b.addEventListener("click", function () {
        var p = Number(b.getAttribute("data-p")), k = Number(b.getAttribute("data-b"));
        var klucz = p + "-" + k;
        conta[klucz] = (conta[klucz] || 0) + 1;
        if (conta[klucz] >= ASCOLTI_MAX) { b.disabled = true; b.textContent = t("cils.playedTwice"); }
        var brano = sez.prove[p].brani[k];
        Audio2.speakSequence(brano.map(function (r) { return r.it; }), {});
      });
    });
  }

  function chiudiChiusa(gruppo) {
    gruppo.forEach(function (s) { run.zamknij(s); });
    avanti();
  }

  /* ---------------- Written production ---------------- */

  function sezioneScritta(sez) {
    var scelta = 0;
    var choices = [];
    set(intestazione(sez) + H.corpoScritto(sez) + H.coda("cils.closeSection"));

    var fields = el().querySelectorAll(".js-text");
    var counters = el().querySelectorAll(".js-count");
    fields.forEach(function (field, index) {
      function refresh() {
        var task = sez.prove && sez.prove.length ? sez.prove[index] : sez.tracce[scelta];
        if (task.scelta) task = task.scelta[choices[index] || 0];
        var check = Cils.controlloScritta(task, field.value);
        counters[index].textContent = t("cils.wordsOf", { n: check.parole, min: check.minimo, max: check.massimo });
      }
      field.addEventListener("input", refresh);
      var card = field.parentNode;
      card.querySelectorAll('input[name="writing-choice-' + index + '"]').forEach(function (radio) {
        radio.addEventListener("change", function () {
          choices[index] = Number(radio.value);
          card.querySelectorAll(".js-writing-option").forEach(function (option) {
            option.hidden = Number(option.getAttribute("data-choice")) !== choices[index];
          });
          refresh();
        });
      });
      refresh();
    });
    el().querySelectorAll('input[name="traccia"]').forEach(function (r) {
      r.addEventListener("change", function () { scelta = Number(r.value); });
    });
    function saveWriting() {
      if (sez.prove && sez.prove.length) {
        run.zapiszScritta(sez.prove, Array.prototype.map.call(fields, function (field) { return field.value; }), choices);
      } else run.zapiszScritta(sez.tracce[scelta], fields[0].value);
    }
    razTylko(el().querySelector(".js-next"), function () { saveWriting(); avanti(); });
    avviaTimer(sez.minuti * 60, function () { saveWriting(); scadi(sez.id); });
  }

  /* ---------------- Oral production (not graded) ---------------- */

  /**
   * telc: the preparation comes BEFORE the oral part and has its own clock.
   * Leaving early is allowed (the same button), and when the time runs out
   * the oral part starts by itself: a preparation that waited for a click
   * would never end for a student who walked away.
   */
  function sezionePreparazione(sez, minuti) {
    set(H.barra(run.krok, run.ile) +
      pageHead(kicker() + " · " + esc(run.dane.sim.titoloIt), t("cils.prepTitle", { n: minuti }), "") +
      H.preparazione(sez, minuti, run.appunti()) + H.coda("cils.prepStart"));
    function concludi(scaduta) {
      run.finePreparazione(el().querySelector(".js-notes").value);
      entraInOrale();
      if (!scaduta) return;
      /* The redraw drops both the focus and the time-up notice the timer wrote
         into the old page: put them back on the new one. */
      var h1 = el().querySelector("h1");
      if (h1) { h1.setAttribute("tabindex", "-1"); h1.focus(); }
      var voce = el().querySelector(".js-clock-live");
      if (voce) voce.textContent = t("cils.timeUp");
    }
    razTylko(el().querySelector(".js-next"), function () { concludi(false); });
    avviaTimer(minuti * 60, function () { concludi(true); });
  }

  /* Redraws the same step: the preparation is done, so it now draws the oral part. */
  function entraInOrale() { fermaTimer(); rysujSezione(); }

  function sezioneOrale(sez) {
    var powod = global.Recorder ? Recorder.powodBraku() : "rec.errNoRecorder";
    var scelto = 0;
    var conParti = global.Cils.parti(sez).length > 0;

    set(intestazione(sez) + H.corpoOrale(sez, powod, run.appunti()) + H.coda("cils.finish"));

    el().querySelectorAll('input[name="arg"]').forEach(function (r) {
      r.addEventListener("change", function () { scelto = Number(r.value); });
    });
    if (!powod) podepnijNagranie();
    function oralPrompt() {
      if (conParti) {
        var picked = el().querySelector('input[name="arg2a"]:checked');
        return CilsRun.promptOrale(sez, picked ? Number(picked.value) : 0);
      }
      return CilsRun.promptOrale(sez, scelto);
    }

    razTylko(el().querySelector(".js-next"), function () {
      run.zapiszOrale(oralPrompt());
      avanti();
    });
    avviaTimer(sez.minuti * 60, function () {
      run.zapiszOrale(oralPrompt());
      scadi(sez.id);
    });
  }

  /**
   * The review after the exam: listen to yourself, write what you said.
   *
   * OUTSIDE the clock, deliberately. Under a countdown this would be a
   * second written task, and what it would measure is typing speed. The
   * recording cannot be transcribed for the student - `Audio2.listen` closes
   * at the first pause, and it would be contending for a microphone
   * `MediaRecorder` already holds - so the words are theirs, and the report
   * says so rather than calling them a transcript.
   *
   * Skipping is a first-class way out: the button says "go to the report",
   * not "cancel". Whoever does not want to write gets the report they would
   * have got anyway, with the oral row saying nothing was collected.
   */
  function rewizja() {
    Views.onLeave = fermaTimer;
    var powod = !nagranie;
    set(pageHead(kicker() + " · " + esc(run.dane.sim.titoloIt), t("cils.reviewTitle"), "") +
      H.rewizja(run.dane.orale, powod) + H.coda("cils.reviewDone"));

    if (!powod) {
      el().querySelector(".js-play-mine").addEventListener("click", function () {
        var a = new global.Audio(nagranie.url);
        a.play().catch(function () { Core.toast(t("cils.playFailed")); });
      });
    }

    razTylko(el().querySelector(".js-next"), function () {
      run.zapiszTrascrizione(el().querySelector(".js-said").value);
      poRewizji = true;
      riepilogo();
    });
  }

  function podepnijNagranie() {
    var b = el().querySelector(".js-rec");
    var play = el().querySelector(".js-play-mine");
    var stan = el().querySelector(".js-state");

    b.addEventListener("click", function () {
      if (Recorder.nagrywa()) { Recorder.stop(); return; }
      Recorder.start({
        onstart: function () {
          b.setAttribute("aria-pressed", "true");
          b.textContent = t("cils.stopRec");
          stan.textContent = t("cils.recording");
        },
        onstop: function (d) {
          b.setAttribute("aria-pressed", "false");
          b.textContent = t("cils.recordAgain");
          nagranie = d;
          play.hidden = false;
          stan.textContent = t("cils.recorded", { s: (d.ms / 1000).toFixed(1) });
        },
        onerror: function (k) {
          b.setAttribute("aria-pressed", "false");
          b.textContent = t("cils.record");
          stan.textContent = t(k);
        }
      });
    });

    play.addEventListener("click", function () {
      if (!nagranie) return;
      var a = new global.Audio(nagranie.url);
      a.play().catch(function () { stan.textContent = t("cils.playFailed"); });
    });
  }

  /* ═══════════════════ The summary ═══════════════════ */

  function riepilogo() {
    fermaTimer();
    var e = run.esito();
    salva(e);

    set(pageHead(kicker() + " · " + esc(run.dane.sim.titoloIt), t("cils.resultTitle"), "") +
      H.podsumowanie(e, run.czyScadla, run.dane.scritta, run.dane.orale, Cils.formato(run.dane.sim)));

    el().querySelector(".js-again").addEventListener("click", function () { App.go("esame", { id: run.dane.sim.id }); });
    el().querySelector(".js-list").addEventListener("click", function () { App.go("esame"); });

    poproszOLekture();
  }

  /**
   * The model's reading of the two productions, when the student has set one
   * up at all.
   *
   * Everything here is optional twice over: without a key nothing is asked
   * and the report is the one this course has always drawn, and even with a
   * key an answer that turns out to be a mark comes back as nothing
   * (`Llm.reportProduction` runs it through `CilsReport.pulisci` first).
   *
   * `zywy` for the reason views-talk.js has it: the answer lands seconds
   * later and the student may be on another screen by then, where these
   * elements no longer exist.
   */
  function poproszOLekture() {
    if (!global.Llm || !Llm.available()) return;

    var zywy = true;
    var poprzednie = Views.onLeave;
    Views.onLeave = function () {
      zywy = false;
      if (typeof poprzednie === "function") poprzednie();
    };

    var written = Array.isArray(run.dane.scritta) ? run.dane.scritta : [run.dane.scritta];
    written.map(function (production, index) {
      return { sel: ".js-lettura-scritta", index: index, sezione: "scritta", dane: production,
        traccia: production && production.traccia, testo: production && production.testo };
    }).concat([
      { sel: ".js-lettura-orale", index: 0, sezione: "orale", dane: run.dane.orale,
        traccia: run.dane.orale && run.dane.orale.argomento,
        testo: run.dane.orale && run.dane.orale.testo }
    ]).forEach(function (cel) {
      var box = el().querySelectorAll(cel.sel)[cel.index];
      if (!box || !cel.dane || !String(cel.testo || "").trim()) return;

      box.classList.add("is-waiting");
      box.textContent = t("cils.reading");

      Llm.reportProduction({
        sezione: cel.sezione, traccia: cel.traccia, testo: cel.testo, cefr: "B1",
        formato: Cils.formato(run.dane.sim)
      }, function (tekst) {
        if (!zywy) return;
        box.classList.remove("is-waiting");
        /* Nothing to show is an EMPTY box, not a message: the stylesheet
           hides an empty one, so the report closes up as if the reading had
           never been asked for - which is the report without a key. */
        if (!tekst) { box.textContent = ""; return; }
        /* textContent, never innerHTML: this is the only string on the
           report the course did not write, and it was produced by a model
           that has just read a text the student typed. */
        box.textContent = "";
        var etykieta = global.document.createElement("b");
        etykieta.textContent = t("cils.readingLabel") + " ";
        var tresc = global.document.createElement("span");
        tresc.textContent = tekst;
        box.appendChild(etykieta);
        box.appendChild(tresc);
      });
    });
  }

  /** Saving the run into the student's history; the entry shape and the ceiling are in cils-run.js. */
  function salva(e) {
    CilsRun.zapisz(run, e, Date.now());
  }

})(window);
