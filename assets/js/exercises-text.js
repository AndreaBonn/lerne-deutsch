/* ============================================================
   exercises-text.js — the types where the student WRITES: a field, gaps,
   tokens, a conjugation table.

   Split out of exercises.js, where fourteen types sat in a single 610-line
   file. The split follows WHAT THE STUDENT DOES, because that is the axis
   on which these types really differ: a choice from a list is checked by
   comparing an index, a typed answer goes through checkOpen with typo
   tolerance, and the voice needs a recording and a similarity threshold.

   The contract is unchanged: a builder returns {html, wire(root, onDone)},
   and `onDone(ok)` is called EXACTLY ONCE. The shared pieces (header,
   check button, ending) come from `Ex.kit`, the dispatcher stays in
   exercises.js. This loads AFTER it, because `Ex.register` is created there.
   ============================================================ */
(function () {
  "use strict";

  var esc = Core.esc;
  var t = function (k, v) { return I18n.t(k, v); };
  var kit = Ex.kit;
  var head = kit.head;
  var sayBtn = kit.sayBtn;
  var feedbackBox = kit.feedbackBox;
  var checkBtn = kit.checkBtn;
  var finish = kit.finish;

  /* ═══════════════ FILL / TRANS ═══════════════ */
  function buildFill(ex, idx) {
    var accepted = Array.isArray(ex.a) ? ex.a : [ex.a];
    var isTrans = ex.t === "trans";
    var ph = isTrans
      ? t(ex.dir === "toBase" ? "ex.ph.toBase" : "ex.ph.toIt")
      : t("ex.ph.answer");

    var html = '<div class="exq" data-idx="' + idx + '">' + head(idx, ex) +
      '<p class="exq__prompt">' + (ex.q || "") + (ex.say ? " " + sayBtn(ex.say) : "") + "</p>" +
      (ex.hint ? '<p class="exq__sub">' + esc(t("ex.hintLabel", { hint: ex.hint })) + "</p>" : "") +
      '<div class="field-row"><input type="text" class="field js-in" placeholder="' + esc(ph) + '" autocomplete="off" autocapitalize="off" spellcheck="false">' +
      checkBtn() + "</div>" + feedbackBox() + "</div>";

    function wire(root, onDone) {
      var input = root.querySelector(".js-in");
      var btn = root.querySelector(".js-check");
      var tries = 0;
      function go() {
        if (btn.disabled) return;
        var res = Core.checkOpen(input.value, accepted);
        if (!res.ok && res.near && tries === 0) {
          tries++;
          var fb = root.querySelector(".fb");
          fb.className = "fb is-on fb--ko";
          fb.innerHTML = esc(t("ex.almost"));
          return;
        }
        /* A second judge is worth asking here and not in `order` below:
           these two types accept a sentence the student composed, so a
           correct wording the list does not contain is a real possibility.
           `order` is assembled from tiles the course itself supplied —
           there is no other correct sentence to find. */
        finish(root, res.ok, ex.why, res.ok ? null : accepted[0], onDone, {
          question: kit.stripTags(ex.q || ""),
          accepted: accepted,
          given: input.value
        });
      }
      btn.addEventListener("click", go);
      input.addEventListener("keydown", function (e) { if (e.key === "Enter") { e.preventDefault(); go(); } });
    }
    return { html: html, wire: wire };
  }

  /* ═══════════════ CLOZE (several gaps in a text) ═══════════════ */
  function buildCloze(ex, idx) {
    // ex.text: "Ieri {{1}} al mercato e {{2}} la frutta."  ex.gaps: [["sono andato"],["ho comprato"]]
    var parts = String(ex.text).split(/\{\{(\d+)\}\}/);
    var htmlBody = "";
    for (var i = 0; i < parts.length; i++) {
      if (i % 2 === 0) htmlBody += esc(parts[i]);
      else htmlBody += '<input type="text" class="field js-gap" data-gap="' + (parseInt(parts[i], 10) - 1) + '" ' +
        'style="display:inline-block;width:auto;min-width:130px;max-width:220px;margin:2px 4px;" autocomplete="off" spellcheck="false">';
    }
    var html = '<div class="exq" data-idx="' + idx + '">' + head(idx, ex) +
      '<p class="exq__prompt">' + (ex.q || t("ex.cloze.prompt")) + "</p>" +
      (ex.tr ? '<p class="exq__sub">' + esc(ex.tr) + "</p>" : "") +
      '<p style="font-size:1.04rem;line-height:2.3;">' + htmlBody + "</p>" +
      checkBtn() + feedbackBox() + "</div>";

    function wire(root, onDone) {
      root.querySelector(".js-check").addEventListener("click", function () {
        var allOk = true, first = null;
        root.querySelectorAll(".js-gap").forEach(function (inp) {
          var g = parseInt(inp.getAttribute("data-gap"), 10);
          var accepted = Array.isArray(ex.gaps[g]) ? ex.gaps[g] : [ex.gaps[g]];
          var res = Core.checkOpen(inp.value, accepted);
          inp.style.borderColor = res.ok ? "var(--ok)" : "var(--ko)";
          if (!res.ok) { allOk = false; if (!first) first = accepted[0]; inp.value = inp.value + " → " + accepted[0]; }
          inp.disabled = true;
        });
        finish(root, allOk, ex.why, null, onDone);
      });
    }
    return { html: html, wire: wire };
  }

  /* ═══════════════ ORDER (build the sentence) ═══════════════ */
  function buildOrder(ex, idx, seed) {
    var tokens = Core.seededShuffle(ex.tokens.slice(), seed + "o" + idx);
    var html = '<div class="exq" data-idx="' + idx + '">' + head(idx, ex) +
      '<p class="exq__prompt">' + t("ex.order.prompt") + "</p>" +
      '<p class="exq__sub">' + esc(ex.tr || "") + "</p>" +
      // the "group" role is required: a div with no role cannot carry aria-label (WCAG 4.1.2)
      '<div class="tok-target js-target" role="group" aria-label="' + esc(t("ex.order.yourSentence")) + '"></div>' +
      '<div class="tok-bank js-bank">' + tokens.map(function (tok) {
        return '<button type="button" class="tok">' + esc(tok) + "</button>";
      }).join("") + "</div>" +
      '<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap;">' + checkBtn() +
      '<button type="button" class="btn btn--ghost btn--sm js-clear">' + t("ex.order.clear") + "</button></div>" +
      feedbackBox() + "</div>";

    function wire(root, onDone) {
      var target = root.querySelector(".js-target");
      var bank = root.querySelector(".js-bank");

      bank.addEventListener("click", function (e) {
        var b = e.target.closest(".tok");
        if (!b || root.querySelector(".js-check").disabled) return;
        b.classList.add("tok--placed");
        target.appendChild(b);
      });
      target.addEventListener("click", function (e) {
        var b = e.target.closest(".tok");
        if (!b || root.querySelector(".js-check").disabled) return;
        b.classList.remove("tok--placed");
        bank.appendChild(b);
      });
      root.querySelector(".js-clear").addEventListener("click", function () {
        target.querySelectorAll(".tok").forEach(function (b) { b.classList.remove("tok--placed"); bank.appendChild(b); });
      });
      root.querySelector(".js-check").addEventListener("click", function () {
        var built = Array.prototype.map.call(target.querySelectorAll(".tok"), function (b) { return b.textContent; }).join(" ");
        if (!built.trim()) { Core.toast(t("ex.order.empty")); return; }
        var accepted = Array.isArray(ex.a) ? ex.a : [ex.a];
        var res = Core.checkOpen(built, accepted, false);
        finish(root, res.ok, ex.why, res.ok ? null : accepted[0], onDone);
      });
    }
    return { html: html, wire: wire };
  }

  /* ═══════════════ CONJ (conjugation table) ═══════════════ */
  var SYNTHETIC_STEMS = { fuhr: ["führ"], wusch: ["wüsch"], stand: ["stünd", "ständ"] };
  var SUBJUNCTIVE_ENDINGS = ["e", "est", "e", "en", "et", "en"];

  // F37: rare synthetic forms are valid answers, while the table keeps würde.
  function conjugationAnswers(ex, person, shown) {
    var accepted = [shown];
    if (ex.tense !== "konj2" || !/^würde/.test(shown)) return accepted;
    var past = Verbs.conjugate(ex.verb, "praet")[person];
    var match = past.match(/^(.*?)(fuhr|wusch|stand)(?:est|st|et|t|en)?( .*)?$/);
    if (!match) return accepted;
    SYNTHETIC_STEMS[match[2]].forEach(function (stem) {
      accepted.push(match[1] + stem + SUBJUNCTIVE_ENDINGS[person] + (match[3] || ""));
    });
    return accepted;
  }

  function buildConj(ex, idx) {
    // ex.verb, ex.tense (a key from Verbs.TENSES), ex.persons: the indexes to fill in
    var forms = Verbs.conjugate(ex.verb, ex.tense || "praes");
    // The imperative has no ich form; omit persons without a form.
    var which = (ex.persons || [0, 1, 2, 3, 4, 5]).filter(function (p) { return !!forms[p]; });
    var tenseLabel = (Verbs.TENSES.filter(function (x) { return x.key === (ex.tense || "praes"); })[0] || {}).labelIt;

    var rows = which.map(function (p) {
      return '<label lang="de" for="c' + idx + "_" + p + '">' + esc(Verbs.PERSONS[p]) + "</label>" +
        '<input lang="de" id="c' + idx + "_" + p + '" class="field js-cell" data-p="' + p + '" autocomplete="off" spellcheck="false">';
    }).join("");

    var html = '<div class="exq" data-idx="' + idx + '">' + head(idx, ex) +
      '<p class="exq__prompt">' + t("ex.conj.prompt", { verb: '<b style="color:var(--salvia-deep)">' + esc(ex.verb) + "</b>", tense: esc(tenseLabel) }) + "</p>" +
      (ex.tr ? '<p class="exq__sub">' + esc(ex.tr) + "</p>" : "") +
      '<div class="conj-grid">' + rows + "</div>" +
      '<div style="margin-top:14px">' + checkBtn() + "</div>" + feedbackBox() + "</div>";

    function wire(root, onDone) {
      root.querySelector(".js-check").addEventListener("click", function () {
        var allOk = true;
        root.querySelectorAll(".js-cell").forEach(function (inp) {
          var p = parseInt(inp.getAttribute("data-p"), 10);
          var want = forms[p] || "";
          var ok = Core.checkOpen(inp.value, conjugationAnswers(ex, p, want)).ok;
          inp.style.borderColor = ok ? "var(--ok)" : "var(--ko)";
          if (!ok) { allOk = false; inp.value = want; }
          inp.disabled = true;
        });
        finish(root, allOk, ex.why, null, onDone);
      });
    }
    return { html: html, wire: wire };
  }

  Ex.register("fill", buildFill);
  Ex.register("trans", buildFill);
  Ex.register("cloze", buildCloze);
  Ex.register("order", buildOrder);
  Ex.register("conj", buildConj);

})();
