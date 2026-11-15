/* ============================================================
   views-train.js - the adaptive training screens.

   Two screens: the mistakes tab inside Reviews (empty / resting / due, then
   a run through the real exercises of the cards) and the Training hub with
   its generated runs. What matters is what the student is shown and what
   reaches the notebook, so Core, Errors and Drills are the real ones.

   Boundaries that are stubbed: the page (a small box that reads buttons out
   of the HTML the view wrote, so a button that is drawn is a button that can
   be clicked) and Ex, which builds the exercise widget. The stub's `wire`
   keeps the completion callback so the test answers right or wrong itself.
   ============================================================ */
import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { loadEngine, CORE } from "./_harness.mjs";

const PLIKI = [
  ...CORE, "assets/js/errors-key.js", "assets/js/errors.js",
  "assets/js/verbs-data.js", "assets/js/drills-lex.js", "assets/js/drills-de.js", "assets/js/drills.js"
];
const TERAZ = 1_800_000_000_000;

const plain = (x) => JSON.parse(JSON.stringify(x));

/** A container that finds buttons by their class in the HTML it was given. */
function pudelko() {
  const b = { _html: "", _cache: {}, klikniecia: [] };
  Object.defineProperty(b, "innerHTML", {
    get() { return b._html; },
    set(v) { b._html = v; b._cache = {}; }
  });
  function element(token) {
    const re = new RegExp('class="[^"]*\\b' + token + '\\b[^"]*"');
    if (!re.test(b._html)) return null;
    if (!b._cache[token]) {
      const el = { handlers: {}, focused: 0, hidden: /\bhidden\b/.test(b._html.slice(b._html.search(re), b._html.search(re) + 120).split(">")[0]),
        focus() { el.focused++; }, addEventListener(t, fn) { el.handlers[t] = fn; }, click() { el.handlers.click(); } };
      b._cache[token] = el;
    }
    return b._cache[token];
  }
  b.querySelector = (sel) => element(sel.slice(1));
  b.querySelectorAll = (sel) => {
    const token = sel.slice(1);
    if (b._cache["all:" + token]) return b._cache["all:" + token];
    const out = [];
    b._cache["all:" + token] = out;
    const re = new RegExp('<button[^>]*class="[^"]*\\b' + token + '\\b[^"]*"[^>]*>', "g");
    let m;
    while ((m = re.exec(b._html))) {
      const attrs = {};
      m[0].replace(/(data-[a-z]+)="([^"]*)"/g, (_, k, v) => { attrs[k] = v; });
      const el = { handlers: {}, getAttribute: (k) => attrs[k], addEventListener(t, fn) { el.handlers[t] = fn; } };
      out.push(el);
    }
    return out;
  };
  return b;
}

function silnik() {
  const box = loadEngine({ files: PLIKI, now: TERAZ });
  const S = box.sandbox;
  box.Core.load();
  const go = [];
  const ustawione = [];
  const korzen = pudelko();
  const drill = pudelko();
  const log = { odswiezenia: 0, zbudowane: [], czekajace: [], glosniki: 0 };
  S.App = { go(r, p) { go.push([r, p === undefined ? undefined : plain(p)]); }, refreshRail() { log.odswiezenia++; } };
  S.Views = { shell: {
    set(h) { ustawione.push(h); korzen.innerHTML = h; },
    head(k, t, i) { return "<head>" + k + "|" + t + "|" + i + "</head>"; },
    root() { return korzen; }
  } };
  S.Ex = {
    build(ex, idx, seed) {
      log.zbudowane.push({ ex, idx, seed });
      return { html: '<div class="exq">EX-' + log.zbudowane.length + "</div>",
        wire(root, onDone) { log.czekajace.push(onDone); } };
    },
    wireSpeakers() { log.glosniki++; }
  };
  S.document.getElementById = (id) => (id === "drillBox" ? drill : null);
  S.GRAMMAR_REF = [{ items: [{ id: "g-presente", title: "Presente indicativo" }] }];
  box.run("assets/js/views-train.js");
  return { box, S, go, ustawione, korzen, drill, log, Errors: S.Errors, state: () => box.Core.state };
}

/** A real lesson in the registry, so cards made from it can be located again. */
const LEKCJA = () => ({
  id: "a1-u02-l3", title: "Zahlen", titleIt: "Zahlen", tags: ["g-presente"],
  exercises: [{ t: "fill", a: ["sind"] }, { t: "mcq", a: 1 }]
});
function zarejestruj(s, lekcja) {
  s.S.Registry.registerLevel({ code: "A1", dataFiles: [], units: [{ id: "u2", lessons: [lekcja] }] });
}
/** An authored card that is due now. */
function karta(s, lekcja, idx) {
  const c = s.Errors.record(lekcja, idx, false);
  s.state().errors[c.key].due = TERAZ - 1000;
  return c.key;
}

describe("the mistakes tab", () => {
  test("no cards at all: the empty state, whose button leads to the path", () => {
    const s = silnik();
    s.S.Train.errorPanel(s.korzen);
    assert.match(s.korzen.innerHTML, /err\.emptyTitle/);
    assert.match(s.korzen.innerHTML, /err\.emptyText/);
    assert.ok(!s.korzen.innerHTML.includes("js-start"));
    s.korzen.querySelector(".js-path").click();
    assert.deepEqual(s.go, [["percorso", undefined]]);
  });

  test("cards that are all resting: the count, the by-topic summary, and no start button", () => {
    const s = silnik();
    const l = LEKCJA(); zarejestruj(s, l);
    const k = s.Errors.record(l, 0, false).key;
    s.state().errors[k].due = TERAZ + 5 * 86400000;
    s.S.Train.errorPanel(s.korzen);
    const h = s.korzen.innerHTML;
    assert.match(h, /err\.restingTitle\(n=1\)/);
    assert.match(h, /err\.restingText/);
    assert.match(h, /<b>Presente indicativo<\/b>/, "the topic is named from the grammar entry");
    assert.match(h, /err\.cardsIn\(n=1\)/);
    assert.match(h, /<span class="chip">err\.resting<\/span>/);
    assert.ok(!h.includes("js-start"));
  });

  test("due cards: the invitation with the count, due topics in green, and an unknown tag keeps its own name", () => {
    const s = silnik();
    const l = LEKCJA(); l.tags = ["g-unmapped"]; zarejestruj(s, l);
    karta(s, l, 0);
    karta(s, l, 1);
    s.S.Train.errorPanel(s.korzen);
    const h = s.korzen.innerHTML;
    assert.match(h, /err\.dueTitle\(n=2\)/);
    assert.match(h, /err\.dueText/);
    assert.ok(s.korzen.querySelector(".js-start"));
    assert.match(h, /<b>g-unmapped<\/b>/);
    assert.match(h, /chip chip--green">err\.dueNow\(n=2\)</);
  });

  test("an invitation takes at most one batch of ten", () => {
    const s = silnik();
    const l = LEKCJA();
    l.exercises = Array.from({ length: 12 }, (_, i) => ({ t: "fill", a: ["w" + i] }));
    zarejestruj(s, l);
    for (let i = 0; i < 12; i++) karta(s, l, i);
    s.S.Train.errorPanel(s.korzen);
    assert.match(s.korzen.innerHTML, /err\.dueTitle\(n=10\)/);
    assert.equal(s.S.Train.BATCH, 10);
  });
});

describe("a review run over the real exercises", () => {
  test("the exercise is built from the lesson, the next button waits for an answer, a right one is counted", () => {
    const s = silnik();
    const l = LEKCJA(); zarejestruj(s, l);
    karta(s, l, 1);
    s.S.Train.errorPanel(s.korzen);
    s.korzen.querySelector(".js-start").click();

    assert.equal(s.log.zbudowane.length, 1);
    assert.equal(s.log.zbudowane[0].ex, l.exercises[1], "the real exercise, not a copy");
    assert.equal(s.log.zbudowane[0].idx, 1);
    assert.equal(s.log.zbudowane[0].seed, "a1-u02-l3");
    const h = s.korzen.innerHTML;
    assert.match(h, /err\.progress\(i=1,n=1\)/);
    assert.match(h, /err\.fromLesson\(lesson=Zahlen\)/);
    assert.match(h, /Presente indicativo/);
    assert.match(h, /EX-1/);
    assert.equal(s.log.glosniki, 1, "speaker buttons are wired");
    const next = s.korzen.querySelector(".js-next");
    assert.equal(next.hidden, true, "hidden until the student has answered");

    s.log.czekajace[0](true);
    assert.equal(next.hidden, false);
    assert.equal(next.focused, 1);
    next.click();
    assert.match(s.korzen.innerHTML, /<div class="summary__score">1\/1<\/div>/);
    assert.match(s.korzen.innerHTML, /err\.done/);
    assert.ok(!s.korzen.innerHTML.includes("err.gone"));
    assert.equal(s.log.odswiezenia, 1, "the rail badge is refreshed at the end");
  });

  test("a wrong answer is not counted as a pass", () => {
    const s = silnik();
    const l = LEKCJA(); zarejestruj(s, l);
    karta(s, l, 0);
    s.S.Train.errorPanel(s.korzen);
    s.korzen.querySelector(".js-start").click();
    s.log.czekajace[0](false);
    s.korzen.querySelector(".js-next").click();
    assert.match(s.korzen.innerHTML, /<div class="summary__score">0\/1<\/div>/);
  });

  test("a card whose exercise changed in the course is dropped, and the student is told", () => {
    const s = silnik();
    const l = LEKCJA(); zarejestruj(s, l);
    const stara = karta(s, l, 0);
    const zostaje = karta(s, l, 1);
    l.exercises[0] = { t: "fill", a: ["zupelnie inne"] };
    s.S.Train.errorPanel(s.korzen);
    s.korzen.querySelector(".js-start").click();

    assert.equal(s.state().errors[stara], undefined, "the orphan card left the notebook");
    assert.ok(s.state().errors[zostaje], "the card that still resolves stays");
    assert.equal(s.log.zbudowane.length, 1, "only the existing exercise was built");
    s.log.czekajace[0](true);
    s.korzen.querySelector(".js-next").click();
    assert.match(s.korzen.innerHTML, /<div class="summary__score">1\/2<\/div>/, "the lost card is in the total, not hidden");
    assert.match(s.korzen.innerHTML, /err\.gone\(n=1\)/);
  });

  test("when every card is orphaned the run ends at once with the notice", () => {
    const s = silnik();
    const l = LEKCJA(); zarejestruj(s, l);
    karta(s, l, 0);
    l.exercises[0] = { t: "fill", a: ["inaczej"] };
    s.S.Train.errorPanel(s.korzen);
    s.korzen.querySelector(".js-start").click();
    assert.equal(s.log.zbudowane.length, 0);
    assert.match(s.korzen.innerHTML, /0\/1/);
    assert.match(s.korzen.innerHTML, /err\.gone\(n=1\)/);
  });

  test("the end screen offers another round and the path", () => {
    const s = silnik();
    const l = LEKCJA(); zarejestruj(s, l);
    karta(s, l, 0);
    s.S.Train.errorPanel(s.korzen);
    s.korzen.querySelector(".js-start").click();
    s.log.czekajace[0](true);
    s.korzen.querySelector(".js-next").click();
    s.korzen.querySelector(".js-more").click();
    s.korzen.querySelector(".js-path").click();
    assert.deepEqual(s.go, [["ripasso", { tab: "errori" }], ["percorso", undefined]]);
  });
});

describe("the training hub", () => {
  test("one row per topic, with the German sample marked as German and the level of the lesson that teaches it", () => {
    const s = silnik();
    s.S.Views.allenamento({});
    const h = s.ustawione[0];
    assert.match(h, /<head>train\.kicker\|train\.title\|train\.intro<\/head>/);
    assert.equal((h.match(/js-topic/g) || []).length, s.S.Drills.TOPICS.length);
    assert.match(h, /<span lang="de">zu \+ dem = zum · in \+ das = ins<\/span>/);
    assert.match(h, /<b>train\.topic\.prep-art<\/b>/);
    assert.match(h, /train-level">A1</);
    assert.match(h, /train-level">A2</, "pronomi comes from an A2 lesson");
  });

  test("a topic whose lesson is not done says so; once done the label goes away", () => {
    const s = silnik();
    s.S.Views.allenamento({});
    const n = s.S.Drills.TOPICS.length;
    assert.equal((s.ustawione[0].match(/train-notyet/g) || []).length, n);
    s.state().lessons["a1-u02-l2"] = { done: true };   // numeri and date are taught there
    s.S.Views.allenamento({});
    assert.equal((s.ustawione[1].match(/train-notyet/g) || []).length, n - 2);
  });
});

describe("a generated run", () => {
  test("topic buttons carry their id and go to the run; the three side doors go to their screens", () => {
    const s = silnik();
    s.S.Views.allenamento({});
    const topics = s.korzen.querySelectorAll(".js-topic");
    assert.deepEqual(topics.map((b) => b.getAttribute("data-topic")), plain(s.S.Drills.TOPICS).map((t) => t.id));
    topics[0].handlers.click();
    s.korzen.querySelector(".js-sounds").click();
    s.korzen.querySelector(".js-read").click();
    s.korzen.querySelector(".js-write").click();
    assert.deepEqual(s.go, [["allenamento", { topic: "prep-art" }], ["suoni", undefined], ["lettura", undefined], ["scrittura", undefined]]);
  });

  test("an unknown topic goes back to the hub instead of drawing an empty run", () => {
    const s = silnik();
    s.S.Views.allenamento({ topic: "nie-istnieje" });
    assert.deepEqual(s.go, [["allenamento", undefined]]);
    assert.deepEqual(s.ustawione, []);
  });

  test("a run builds ten tasks of the topic under a drill seed, one at a time", () => {
    const s = silnik();
    s.S.Views.allenamento({ topic: "numeri" });
    assert.match(s.ustawione[0], /<head>train\.kicker\|train\.topic\.numeri\|g-temporalangaben<\/head>/);
    assert.match(s.ustawione[0], /id="drillBox"/);
    assert.equal(s.log.zbudowane.length, 1);
    assert.equal(s.log.zbudowane[0].seed, "drill-numeri");
    assert.equal(s.log.zbudowane[0].idx, 0);
    assert.match(s.drill.innerHTML, /train\.progress\(i=1,n=10\)/);
    assert.equal(s.S.Train.DRILL_N, 10);
    assert.equal(s.drill.querySelector(".js-next").hidden, true);
  });

  test("a right answer leaves no card; a wrong one files a generated card under the topic's tag", () => {
    const s = silnik();
    s.S.Views.allenamento({ topic: "numeri" });
    s.log.czekajace[0](true);
    assert.deepEqual(Object.keys(s.state().errors), [], "a first-time right answer creates nothing");
    s.drill.querySelector(".js-next").click();
    s.log.czekajace[1](false);
    const klucze = Object.keys(s.state().errors);
    assert.equal(klucze.length, 1);
    assert.equal(s.state().errors[klucze[0]].kind, "generated");
    assert.equal(s.state().errors[klucze[0]].tag, "g-temporalangaben");
    assert.equal(s.drill.querySelector(".js-next").hidden, false);
  });

  test("after ten tasks the score, another round of the same topic, and the way back to the hub", () => {
    const s = silnik();
    s.S.Views.allenamento({ topic: "numeri" });
    for (let i = 0; i < 10; i++) {
      s.log.czekajace[i](i < 7);
      s.drill.querySelector(".js-next").click();
    }
    assert.match(s.drill.innerHTML, /<div class="summary__score">7\/10<\/div>/);
    assert.match(s.drill.innerHTML, /train\.done/);
    assert.equal(s.log.odswiezenia, 1);
    assert.equal(Object.keys(s.state().errors).length, 3, "the three wrong ones were filed");

    s.drill.querySelector(".js-hub").click();
    assert.deepEqual(s.go, [["allenamento", undefined]]);
    const przed = s.ustawione.length;
    s.drill.querySelector(".js-more").click();
    assert.equal(s.ustawione.length, przed + 1, "a fresh run was set up");
    assert.match(s.drill.innerHTML, /train\.progress\(i=1,n=10\)/);
  });
});

describe("labels", () => {
  test("tagLabel names a topic from the grammar entry and falls back to the tag", () => {
    const s = silnik();
    assert.equal(s.S.Train.tagLabel("g-presente"), "Presente indicativo");
    assert.equal(s.S.Train.tagLabel("g-nieznany"), "g-nieznany");
    s.S.GRAMMAR_REF = [{}, { items: [{ id: "x" }] }];
    assert.equal(s.S.Train.tagLabel("x"), "x", "an entry without a title falls back too");
    s.S.GRAMMAR_REF = undefined;
    assert.equal(s.S.Train.tagLabel("g-presente"), "g-presente");
  });

  test("topicLabel is the training name, never the grammar title of the tag", () => {
    const s = silnik();
    assert.equal(s.S.Train.topicLabel("numeri"), "train.topic.numeri");
  });
});
