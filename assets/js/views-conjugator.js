/* ============================================================
   views-conjugator.js — a verb conjugated through every tense.

   A screen split out of views.js, which held eight screens at once. The
   pattern is the same one views-talk.js, views-train.js and views-today.js
   already use: the shell (set, pageHead, el, empty) comes from
   `Views.shell`, and the file adds a route of its own to `Views`.

   It loads AFTER views.js, because `Views.shell` is created at the end of
   that file.
   ============================================================ */
(function () {
  "use strict";

  var esc = Core.esc;
  var t = function (k, v) { return I18n.t(k, v); };
  var set = Views.shell.set;
  var pageHead = Views.shell.head;
  var el = Views.shell.root;
  var empty = Views.shell.empty;
  /* ═══════════════════════════════════════════════════════════
     THE CONJUGATOR
     ═══════════════════════════════════════════════════════════ */
  Views.coniugatore = function () {
    set(pageHead(t("conj.kicker"), t("nav.verbs"), t("conj.intro")) +
      '<div class="card" style="margin-bottom:22px">' +
      '<div class="field-row"><input type="text" class="field js-verb" lang="de" aria-label="' + esc(t("conj.ph")) + '" placeholder="' + esc(t("conj.ph")) + '" list="verbList" autocomplete="off" spellcheck="false" style="max-width:340px">' +
      '<button class="btn btn--primary js-go">' + t("conj.run") + "</button></div>" +
      '<datalist id="verbList">' + Verbs.COMMON.map(function (v) { return '<option value="' + esc(v) + '">' + esc(t("verb." + v)) + "</option>"; }).join("") + "</datalist>" +
      '<div style="margin-top:14px;display:flex;gap:6px;flex-wrap:wrap">' +
      ["sein", "haben", "werden", "gehen", "lernen", "sich freuen", "aufstehen", "können"].map(function (v) {
        return '<button class="btn btn--ghost btn--sm js-quick" lang="de" data-v="' + v + '">' + v + "</button>";
      }).join("") + "</div></div>" +
      '<div id="conjOut" aria-live="polite"></div>');

    var input = el().querySelector(".js-verb");
    function run() {
      var raw = (input.value || "").trim().replace(/\s+/g, " ");
      var v = raw.toLowerCase();
      // an initial capital makes it a noun (Mädchen), whatever its ending
      var isNoun = /^[A-ZÄÖÜ]/.test(raw.replace(/^sich /, ""));
      var valid = !isNoun && /^(?:sich\s+)?(?:[a-zäöüß]+(?:en|ern|eln)|sein|tun)$/.test(v);
      input.setAttribute("aria-invalid", valid ? "false" : "true");
      input.removeAttribute("aria-describedby");
      if (!valid) {
        var errBox = document.getElementById("conjOut");
        errBox.innerHTML = empty(t("conj.notInfinitive"), t("conj.notInfinitiveHint"));
        var errHint = errBox.querySelector(".empty p");
        errHint.id = "conjHint";
        input.setAttribute("aria-describedby", "conjHint");
        return;
      }
      var known = Verbs.COMMON.indexOf(v) !== -1 || !!Verbs.irrOf(v);
      // not `t`: that is the name of the translation helper in this file
      var table = Verbs.fullTable(v);
      var irregular = !!Verbs.irrOf(v);
      var out = (known ? "" : '<p class="conj-note" id="conjNote">' + esc(t("conj.unknownVerb")) + "</p>") +
        '<div class="meta-row">' +
        '<span class="chip chip--green" lang="de">Partizip II: ' + esc(Verbs.participle(v)) + "</span>" +
        '<span class="chip ' + (irregular ? "chip--gold" : "chip--green") + '">' + t(irregular ? "conj.irregular" : "conj.regular") + "</span>" +
        (/^sich\s/.test(v) ? '<span class="chip chip--gold">' + t("conj.reflexive") + "</span>" : "") + "</div>" +
        '<div class="grid-2">' + Verbs.TENSES.map(function (tn) {
          var forms = table[tn.key];
          if (!forms || !forms.filter(Boolean).length) return "";
          // the table always in a scrollable container: without it the page scrolls horizontally at 320 px
          return '<div class="card"><h3 lang="de" style="font-size:1rem;margin-bottom:2px">' + esc(tn.labelIt) + "</h3>" +
            '<p style="font-size:.8rem;color:var(--ink-soft);margin-bottom:10px">' + esc(t("tense." + tn.key)) + "</p>" +
            '<div class="table-wrap" tabindex="0" role="region" aria-label="' + esc(tn.labelIt) + '"><table class="gt"><tbody>' + forms.map(function (f, k) {
              if (!f) return "";
              return '<tr><td lang="de">' + esc(Verbs.PERSONS[k]) + '</td><td class="it" lang="de">' + esc(f) +
                ' <button type="button" class="say-btn" data-say="' + esc(f) + '" aria-label="' + esc(t("a11y.listen")) + '">🔊</button></td></tr>';
            }).join("") + "</tbody></table></div></div>";
        }).join("") + "</div>";
      var box = document.getElementById("conjOut");
      box.innerHTML = out;
      if (!known) input.setAttribute("aria-describedby", "conjNote");
      Ex.wireSpeakers(box);
    }
    el().querySelector(".js-go").addEventListener("click", run);
    input.addEventListener("keydown", function (e) { if (e.key === "Enter") run(); });
    el().querySelectorAll(".js-quick").forEach(function (b) {
      b.addEventListener("click", function () { input.value = b.getAttribute("data-v"); run(); });
    });
    input.value = "lernen"; run();
  };
})();
