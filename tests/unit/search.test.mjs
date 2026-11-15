/* ============================================================
   search.js - searching the whole course.

   Highlighting and the German folding are also pinned in text.test.mjs.
   Here: what a search finds in each part of the course, what the screen
   shows for a hit / no hit / a too short query, where a click on a hit goes,
   and the late loading of the levels that were not in memory yet.
   The page is a boundary and is stubbed; the HTML the view writes is the
   source of truth for the buttons, so a hit that is drawn is a hit that can
   be clicked.
   ============================================================ */
import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { loadEngine, CORE } from "./_harness.mjs";

const LEKCJE = [{
  id: "a1-u01-l1", titleIt: "Guten Tag", title: "Dzień dobry",
  vocab: [{ it: "die Straße", tr: "ulica" }, { it: "das Öl", tr: "olej" }]
}];

/** Objects built inside the sandbox have another realm's prototypes: compare them as data. */
const plain = (x) => JSON.parse(JSON.stringify(x));

/** Fills Core.registry the way a loaded level does; `loaded` decides what is "in memory". */
function silnik(o) {
  const opts = o || {};
  const box = loadEngine({ files: CORE });
  const S = box.sandbox;
  box.Core.load();
  const widok = { html: [], keepFocus: false };
  const go = [];
  S.Views = { shell: {
    set(h) { widok.html.push(h); },
    head(k, t, i) { return "<head>" + k + "|" + t + "|" + i + "</head>"; }
  } };
  S.App = { go(r, p) { go.push([r, p]); } };
  box.Core.registry.levels = [];
  box.Core.registry.loaded = {};
  for (const lv of opts.levels || [{ code: "A1", units: [{ lessons: LEKCJE }] }]) {
    box.Core.registry.levels.push(lv);
    if (lv.loaded !== false) box.Core.registry.loaded[lv.code] = true;
  }
  S.GRAMMAR_REF = opts.grammar || [];
  S.CONVERSATIONS = opts.talks || [];

  /* the page: a results container, an input and a button */
  const body = box.el("searchBody");
  const input = { value: "", focused: 0, handlers: {}, focus() { input.focused++; },
    addEventListener(t, fn) { input.handlers[t] = fn; } };
  const przycisk = { handlers: {}, addEventListener(t, fn) { przycisk.handlers[t] = fn; } };
  const trafienia = [];
  S.document.querySelector = (sel) => (sel === ".js-q" ? input : sel === ".js-go" ? przycisk : null);
  S.document.querySelectorAll = (sel) => {
    if (sel !== ".js-hit") return [];
    trafienia.length = 0;
    const re = /<button[^>]*class="list-row js-hit"[^>]*data-kind="([^"]*)" data-id="([^"]*)"/g;
    let m;
    while ((m = re.exec(body.innerHTML))) {
      const attrs = { "data-kind": m[1], "data-id": m[2] };
      const b = { getAttribute: (k) => attrs[k], handlers: {}, addEventListener(t, fn) { b.handlers[t] = fn; } };
      trafienia.push(b);
    }
    return trafienia;
  };
  box.run("assets/js/search.js");
  return { box, S, Search: { collect: (q) => plain(S.Search.collect(q)) }, widok, go, body, input, przycisk, trafienia };
}

describe("search: what is found, and where", () => {
  test("a query under two characters finds nothing, even when it would match", () => {
    const { Search } = silnik();
    assert.deepEqual(Search.collect("g"), []);
    assert.deepEqual(Search.collect(""), []);
    assert.equal(Search.collect("gu").length, 1, "two characters are enough");
  });

  test("a lesson is found by its course-language title and by its student-language title", () => {
    const { Search } = silnik();
    for (const q of ["guten", "dzień"]) {
      assert.deepEqual(Search.collect(q), [
        { kind: "lesson", id: "a1-u01-l1", main: "Dzień dobry", sub: "Guten Tag", level: "A1" }
      ]);
    }
  });

  test("a lesson with no student-language title shows the course title as the main text", () => {
    const { Search } = silnik({ levels: [{ code: "A2", units: [{ lessons: [{ id: "x", titleIt: "Der Wald" }] }] }] });
    assert.deepEqual(Search.collect("wald"), [{ kind: "lesson", id: "x", main: "Der Wald", sub: "Der Wald", level: "A2" }]);
  });

  test("vocabulary is found by the German word or by its gloss, with the lesson id and level", () => {
    const { Search } = silnik();
    assert.deepEqual(Search.collect("strasse"), [{ kind: "vocab", id: "a1-u01-l1", main: "die Straße", sub: "ulica", level: "A1" }]);
    assert.deepEqual(Search.collect("olej"), [{ kind: "vocab", id: "a1-u01-l1", main: "das Öl", sub: "olej", level: "A1" }]);
  });

  test("the unit test lesson is searched too", () => {
    const { Search } = silnik({ levels: [{ code: "B1", units: [{
      lessons: [], test: { id: "b1-u1-test", titleIt: "Abschlusstest", title: "Test końcowy" }
    }] }] });
    assert.equal(Search.collect("abschluss")[0].id, "b1-u1-test");
  });

  test("grammar entries are found by title or by sub-title, and carry their own level", () => {
    const { Search } = silnik({ grammar: [{ items: [
      { id: "g-perfekt", title: "Perfekt", sub: "haben oder sein", cefr: "A2" },
      { id: "g-akk", title: "Akkusativ" }
    ] }] });
    assert.deepEqual(Search.collect("perfekt"), [{ kind: "grammar", id: "g-perfekt", main: "Perfekt", sub: "haben oder sein", level: "A2" }]);
    assert.equal(Search.collect("sein")[0].id, "g-perfekt");
    assert.equal(Search.collect("akkusativ")[0].sub, "", "no sub-title gives an empty one, not undefined");
  });

  test("conversations are found by either title", () => {
    const { Search } = silnik({ talks: [{ id: "c1", titleIt: "Im Café", title: "W kawiarni", cefr: "A1" }] });
    assert.deepEqual(Search.collect("kawiarni"), [{ kind: "talk", id: "c1", main: "W kawiarni", sub: "Im Café", level: "A1" }]);
    assert.equal(Search.collect("IM CAFÉ").length, 1, "case does not matter");
  });

  test("missing data in the course is skipped, not a crash", () => {
    const { Search } = silnik({ levels: [{ code: "A1" }, { code: "A2", units: [{}] }] });
    assert.deepEqual(Search.collect("xx"), []);
  });

  test("results are capped at 60", () => {
    const vocab = Array.from({ length: 80 }, (_, i) => ({ it: "Haus " + i, tr: "dom" }));
    const { Search } = silnik({ levels: [{ code: "A1", units: [{ lessons: [{ id: "l", vocab }] }] }] });
    assert.equal(Search.collect("haus").length, 60);
  });
});

describe("search: the screen", () => {
  test("the page has the field filled with the escaped query and puts the focus in it", () => {
    const s = silnik();
    s.S.Views.cerca({ q: '"><b>x' });
    const html = s.widok.html[0];
    assert.match(html, /value="&quot;&gt;&lt;b&gt;x"/);
    assert.ok(!html.includes('value=""><b>'), "the query does not enter the page as markup");
    assert.match(html, /<head>search\.kicker\|search\.title\|search\.intro<\/head>/);
    assert.equal(s.input.focused, 1);
    assert.equal(s.S.Views.keepFocus, true);
  });

  test("a hit is drawn with the level, highlighted text, kind label and the count", () => {
    const s = silnik();
    s.S.Views.cerca({ q: "strasse" });
    assert.match(s.body.innerHTML, /search\.count\(n=1\)/);
    assert.match(s.body.innerHTML, /<b>die <mark>Straße<\/mark><\/b>/);
    assert.match(s.body.innerHTML, /chip chip--cefr">A1</);
    assert.match(s.body.innerHTML, /search\.kind\.vocab/);
    assert.ok(!s.body.innerHTML.includes("search.noneTitle"));
  });

  test("no hit says so, and a one-character query says it is too short instead", () => {
    const s = silnik();
    s.S.Views.cerca({ q: "qqqq" });
    assert.match(s.body.innerHTML, /search\.noneTitle/);
    assert.match(s.body.innerHTML, /search\.count\(n=0\)/);
    assert.ok(!s.body.innerHTML.includes("tooShort"));
    s.S.Views.cerca({ q: "q" });
    assert.match(s.body.innerHTML, /search\.tooShortTitle/);
    assert.match(s.body.innerHTML, /search\.tooShortText/);
    assert.ok(!s.body.innerHTML.includes("noneTitle"));
  });

  test("no params at all shows an empty field and the too-short message", () => {
    const s = silnik();
    s.S.Views.cerca();
    assert.match(s.widok.html[0], /value=""/);
    assert.match(s.body.innerHTML, /search\.tooShortTitle/);
  });

  test("clicking a hit goes to the right screen with its id; grammar goes without one", () => {
    const s = silnik({
      grammar: [{ items: [{ id: "g-perfekt", title: "Perfekt zeit", cefr: "A2" }] }],
      talks: [{ id: "c1", titleIt: "Zeit im Café", cefr: "A1" }],
      levels: [{ code: "A1", units: [{ lessons: [{ id: "l1", titleIt: "Zeit haben", vocab: [{ it: "die Zeit", tr: "czas" }] }] }] }]
    });
    s.S.Views.cerca({ q: "zeit" });
    const dane = s.trafienia.map((b) => [b.getAttribute("data-kind"), b.getAttribute("data-id")]);
    assert.deepEqual(dane, [["lesson", "l1"], ["vocab", "l1"], ["grammar", "g-perfekt"], ["talk", "c1"]]);
    for (const b of s.trafienia) b.handlers.click();
    assert.deepEqual(plain(s.go), [
      ["lezione", { id: "l1" }], ["lezione", { id: "l1" }],
      ["grammatica", {}], ["conversazione", { id: "c1" }]
    ]);
  });

  test("the button and the Enter key search again with the typed text; other keys do not", () => {
    const s = silnik();
    s.S.Views.cerca({ q: "" });
    s.input.value = "haus";
    s.przycisk.handlers.click();
    s.input.handlers.keydown({ key: "a" });
    assert.deepEqual(plain(s.go), [["cerca", { q: "haus" }]]);
    s.input.handlers.keydown({ key: "Enter" });
    assert.deepEqual(plain(s.go), [["cerca", { q: "haus" }], ["cerca", { q: "haus" }]]);
  });
});

describe("search: levels that were not in memory", () => {
  const poziomy = () => [
    { code: "A1", units: [{ lessons: LEKCJE }] },
    { code: "B1", loaded: false, units: [] },
    { code: "B2", loaded: false, units: [] }
  ];

  test("without a query nothing is pulled", () => {
    const s = silnik({ levels: poziomy() });
    const zadane = [];
    s.S.Core.loadLevelData = (code) => zadane.push(code);
    s.S.Views.cerca({ q: "" });
    assert.deepEqual(zadane, []);
  });

  test("with a query every missing level is pulled once and the results are drawn again after the last", () => {
    const s = silnik({ levels: poziomy() });
    const cbs = {};
    s.S.Core.loadLevelData = (code, cb) => { cbs[code] = cb; };
    s.S.Views.cerca({ q: "strasse" });
    assert.deepEqual(Object.keys(cbs), ["B1", "B2"], "A1 is already loaded and is not asked for");
    assert.match(s.body.innerHTML, /search\.count\(n=1\)/);

    /* the first level arrives with a hit: nothing is redrawn yet */
    s.box.Core.registry.levels[1].units = [{ lessons: [{ id: "b1", vocab: [{ it: "die Straßenbahn", tr: "tramwaj" }] }] }];
    cbs.B1(true);
    assert.match(s.body.innerHTML, /search\.count\(n=1\)/, "waits for the last level");
    cbs.B2(true);
    assert.match(s.body.innerHTML, /search\.count\(n=2\)/, "redrawn with both");
    assert.deepEqual(s.box.toasts.filter((x) => x.includes("partial")), []);
  });

  test("a level that failed to load is named in a message instead of passing as 'nothing found'", () => {
    const s = silnik({ levels: poziomy() });
    s.S.Core.loadLevelData = (code, cb) => cb(code !== "B2");
    s.S.Views.cerca({ q: "strasse" });
    assert.ok(s.box.toasts.includes("search.partial(levels=B2)"), s.box.toasts.join("|"));
  });
});
