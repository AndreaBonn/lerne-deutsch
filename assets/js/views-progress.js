/* ============================================================
   views-progress.js — progress: the streak, accuracy, the last two weeks.

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
  var pct = Views.shell.pct;

  var DAYS_SHOWN = 14;
  var BAR_MAX_PX = 110;
  var BAR_MIN_PX = 4;

  function dayKey(dt) {
    return dt.getFullYear() + "-" + String(dt.getMonth() + 1).padStart(2, "0") + "-" + String(dt.getDate()).padStart(2, "0");
  }

  /** The last fourteen days, oldest first; the last one is today. */
  function lastDays(stats) {
    // the day abbreviations come from Intl, not from an array: otherwise every language needs its own
    var weekday = new Intl.DateTimeFormat(I18n.locale(), { weekday: "short" });
    var days = [];
    var now = new Date();
    for (var d = DAYS_SHOWN - 1; d >= 0; d--) {
      // calendar arithmetic, not 24 h steps: a DST change would skip or repeat a day
      var dt = new Date(now.getFullYear(), now.getMonth(), now.getDate() - d);
      days.push({ v: stats.days[dayKey(dt)] || 0, label: weekday.format(dt), today: d === 0 });
    }
    return days;
  }

  function statCard(value, label, extra, mod) {
    return '<div class="prog-stat' + (mod ? " prog-stat--" + mod : "") + '"><b>' + value + "</b>" +
      '<span class="prog-stat__label">' + esc(label) + "</span>" +
      (extra ? '<span class="prog-stat__extra">' + esc(extra) + "</span>" : "") + "</div>";
  }

  function statsHtml(s, num) {
    var answered = s.stats.correct + s.stats.wrong;
    /* No answers yet is not "0% correct": a zero there reads as a failure
       the student never had the chance to commit. */
    var acc = answered ? Math.round(100 * s.stats.correct / answered) + "%" : "—";
    return '<div class="prog-stats">' +
      statCard(num.format(s.streak.count), t("prog.streak"), t("prog.best", { best: num.format(s.streak.best) }), "lead") +
      statCard(num.format(s.stats.lessonsDone), t("prog.lessonsDone")) +
      statCard(acc, t("prog.accuracy"), answered ? t("prog.ofAnswers", { ok: num.format(s.stats.correct), n: answered }) : "") +
      statCard(num.format(s.xp), t("prog.points")) + "</div>";
  }

  function chartHtml(days, num) {
    var total = days.reduce(function (a, x) { return a + x.v; }, 0);
    if (!total) {
      return '<div class="card prog-chart prog-chart--empty"><p>' + esc(t("prog.chartEmpty")) + "</p>" +
        '<a class="btn btn--primary" href="#/oggi">' + esc(t("nav.today")) + "</a></div>";
    }
    var active = days.filter(function (x) { return x.v; }).length;
    var summary = t("prog.summary", { n: total, total: num.format(total), active: active, days: DAYS_SHOWN });
    var max = Math.max.apply(null, days.map(function (x) { return x.v; }));
    /* On a phone the fourteen columns shrink (smaller gap and labels, see
       app.css) instead of scrolling: a scrolled chart hid its last column,
       which is today, the one the student came to see. The scroll wrapper
       stays only as a guard for screens narrower than any we test. */
    return '<div class="card prog-chart"><p class="prog-chart__sum">' + esc(summary) + "</p>" +
      '<div class="prog-chart__scroll"><div class="prog-chart__bars" role="img" aria-label="' + esc(summary) + '">' +
      days.map(function (x) {
        var h = Math.max(BAR_MIN_PX, Math.round(BAR_MAX_PX * x.v / max));
        var cls = "prog-bar" + (x.v ? "" : " prog-bar--zero") + (x.today ? " prog-bar--today" : "");
        return '<div class="' + cls + '" title="' + esc(t("prog.answers", { n: x.v })) + '">' +
          '<span class="prog-bar__n">' + (x.v ? num.format(x.v) : "") + "</span>" +
          '<i style="height:' + h + 'px"></i>' +
          /* Today carries both words: "today" where the column is wide enough,
             the weekday on a phone, where "today" did not fit a 20 px column. */
          '<span class="prog-bar__day">' + (x.today
            ? '<span class="prog-bar__wd">' + esc(x.label) + '</span><span class="prog-bar__td">' + esc(t("prog.today")) + "</span>"
            : esc(x.label)) + "</span></div>";
      }).join("") + "</div></div></div>";
  }

  function levelsHtml() {
    return '<div class="stack prog-levels">' + Core.registry.levels.map(function (lv) {
      var p = Core.levelProgress(lv);
      var loaded = Core.registry.loaded[lv.code] === true;
      // still loading: an ellipsis; failed to load: nothing, rather than a false "0 of 0"
      var pending = !Core.registry.loaded[lv.code] || Core.registry.loaded[lv.code] === "loading";
      var sub = loaded ? t("prog.ofLessons", { done: p.done, total: p.total }) : (pending ? "…" : "");
      var cls = "prog-level" + (p.done ? " prog-level--started" : "");
      return '<div class="' + cls + '"><span class="chip chip--cefr">' + esc(lv.code) + "</span>" +
        '<span class="prog-level__main"><span class="prog-level__top"><b>' + esc(lv.name) + "</b>" +
        '<span class="prog-level__pct">' + (loaded ? pct(p.pct) + "%" : "") + "</span></span>" +
        '<span class="level-pill__bar"><i style="width:' + pct(p.pct) + '%"></i></span>' +
        '<span class="prog-level__sub">' + esc(sub) + "</span></span></div>";
    }).join("") + "</div>";
  }

  function draw() {
    var s = Core.state;
    var num = new Intl.NumberFormat(I18n.locale());
    set(pageHead(t("prog.kicker"), t("prog.title"), t("prog.intro")) +
      statsHtml(s, num) +
      '<h2 class="prog-h">' + esc(t("prog.lastTwoWeeks")) + "</h2>" +
      chartHtml(lastDays(s.stats), num) +
      '<h2 class="prog-h">' + esc(t("prog.levels")) + "</h2>" +
      levelsHtml());
  }

  /* ═══════════════════════════════════════════════════════════
     PROGRESS
     ═══════════════════════════════════════════════════════════ */
  Views.progressi = function () {
    draw();

    /* Levels arrive lazily, and a level that is not in memory has no units:
       it read "0 lessons of 0" for every level the student had not opened in
       this session. The same fix as the coverage screen: draw what we have,
       pull the rest, draw again — only if the student is still here. */
    // "loading" counts as missing too: loadLevelData queues the callback, so the redraw still comes
    var missing = Core.registry.levels.filter(function (lv) {
      var st = Core.registry.loaded[lv.code];
      return !st || st === "loading";
    });
    var left = missing.length;
    missing.forEach(function (lv) {
      Core.loadLevelData(lv.code, function () {
        if (--left > 0) return;
        if (location.hash.indexOf("#/progressi") === 0) draw();
      });
    });
  };
})();
