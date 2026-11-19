/* Text comparison contracts for German answer grading.
   fold() preserves LENGTH; search.js maps its sharp-s expansion back to
   source indexes before slicing. norm() collapses whitespace and does not
   preserve length. similarity() keeps German umlauts significant. */
import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { loadEngine, CORE } from "./_harness.mjs";

const T = loadEngine({ files: ["assets/js/text.js"] }).sandbox.Txt;

describe("detypo", () => {
  test("an apostrophe from a phone keyboard becomes a typewriter one", () => {
    assert.equal(T.detypo("l’autore"), "l'autore");
  });

  test("all four apostrophe variants collapse into one", () => {
    assert.equal(T.detypo("a’b‘c`d´e"), "a'b'c'd'e");
  });

  test("typographic quotation marks, including the Polish opening one, collapse into the straight one", () => {
    assert.equal(T.detypo("„cytat” “inny”"), '"cytat" "inny"');
  });

  test("the swap is character for character, so the length stays the same", () => {
    const przed = "„l’autore” ‘x’";
    assert.equal(T.detypo(przed).length, przed.length);
  });

  test("no input yields an empty string, not an exception", () => {
    assert.equal(T.detypo(null), "");
    assert.equal(T.detypo(undefined), "");
    assert.equal(T.detypo(""), "");
  });

  test("a number goes through as a string rather than blowing up on replace", () => {
    assert.equal(T.detypo(42), "42");
  });
});

describe("fold", () => {
  test("it folds umlauts and case without expanding sharp s", () => {
    assert.equal(T.fold("Mädchen ÖL ÜBER Straße"), "madchen ol uber straße");
  });

  test("it unifies the apostrophe, just like detypo", () => {
    assert.equal(T.fold("L’Autore"), "l'autore");
  });

  test("it does NOT collapse whitespace: search.js slices the original by these indexes", () => {
    assert.equal(T.fold("  due   spazi  "), "  due   spazi  ");
  });

  test("the length of the result equals the length of the input for every accent", () => {
    ["Mädchen", "Öl", "Übung", "Straße", "Ä Ö Ü ẞ"].forEach(s => {
      assert.equal(T.fold(s).length, s.length, `length changed on "${s}"`);
    });
  });

  test("letters outside the Italian alphabet are left untouched", () => {
    assert.equal(T.fold("ñ ç ł"), "ñ ç ł");
  });
});

describe("norm", () => {
  test("it collapses whitespace and trims the edges", () => {
    assert.equal(T.norm("  io   mangio  "), "io mangio");
  });

  test("punctuation turns into a space rather than vanishing without trace", () => {
    assert.equal(T.norm("io,mangio"), "io mangio");
    assert.equal(T.norm("Ja! Klar… (wirklich?)"), "ja klar wirklich");
  });

  test("semicolon, colon, straight quotes and brackets are punctuation too", () => {
    assert.equal(T.norm("Ja; klar"), "ja klar");
    assert.equal(T.norm("Achtung: heiß"), "achtung heiß");
    assert.equal(T.norm('er sagt "hallo"'), "er sagt hallo");
    assert.equal(T.norm("das [neue] Haus"), "das neue haus");
  });

  test("the spaces around an apostrophe are pulled together: \"l ' autore\" is \"l'autore\"", () => {
    assert.equal(T.norm("l ' autore"), "l'autore");
    assert.equal(T.norm("l'autore"), "l'autore");
  });

  test("by default it preserves umlauts", () => {
    assert.equal(T.norm("Mädchen"), "mädchen");
  });

  test("keepAccents leaves them in place", () => {
    assert.equal(T.norm("Schön groß", { keepAccents: true }), "schön groß");
  });

  test("an empty string and a lone space give an empty result", () => {
    assert.equal(T.norm(""), "");
    assert.equal(T.norm("   "), "");
    assert.equal(T.norm(null), "");
  });
});

describe("levenshtein", () => {
  test("the same string has a distance of zero", () => {
    assert.equal(T.levenshtein("parlare", "parlare"), 0);
  });

  test("the classic kitten -> sitting case is three operations", () => {
    assert.equal(T.levenshtein("kitten", "sitting"), 3);
  });

  test("against an empty string the distance is the length of the other one, from both sides", () => {
    assert.equal(T.levenshtein("", "abc"), 3);
    assert.equal(T.levenshtein("abc", ""), 3);
    assert.equal(T.levenshtein("", ""), 0);
  });

  test("it is symmetric", () => {
    assert.equal(T.levenshtein("mangio", "mangi"), T.levenshtein("mangi", "mangio"));
  });

  test("one letter of difference is one, not zero", () => {
    assert.equal(T.levenshtein("mangio", "mangia"), 1);
  });
});

describe("similarity", () => {
  test("identical strings give 1", () => {
    assert.equal(T.similarity("parlare", "parlare"), 1);
  });

  test("two empty strings give 1 rather than a division by zero", () => {
    assert.equal(T.similarity("", ""), 1);
    assert.ok(Number.isFinite(T.similarity("", "abc")));
  });

  test("nothing in common gives 0, not a negative number", () => {
    assert.equal(T.similarity("xyz", "abcdefgh"), 0);
  });

  test("a typo gives a high result, but not equal to 1", () => {
    const s = T.similarity("parlare", "parlere");
    assert.ok(s > 0.8 && s < 1, `expected 0.8 < s < 1, got ${s}`);
  });

  test("an umlaut changes similarity", () => {
    assert.equal(T.similarity("schön", "schon"), 0.8);
  });

  test("the result never leaves the 0..1 range", () => {
    [["", "a"], ["a", ""], ["abc", "xyz"], ["ciao", "ciao ciao ciao"]].forEach(([a, b]) => {
      const s = T.similarity(a, b);
      assert.ok(s >= 0 && s <= 1, `out of range: ${a}/${b} = ${s}`);
    });
  });
});

describe("checkOpen", () => {
  test("a correct answer is right and is not \"almost\"", () => {
    const r = T.checkOpen("io mangio", ["io mangio"]);
    assert.equal(r.ok, true);
    assert.equal(r.near, false);
    assert.equal(r.sim, 1);
  });

  test("hitting any one of the variants is enough", () => {
    assert.equal(T.checkOpen("tu mangi", ["io mangio", "tu mangi"]).ok, true);
  });

  test("a sloppy answer that is right in substance passes", () => {
    assert.equal(T.checkOpen("  IO   MANGIO! ", ["io mangio"]).ok, true);
  });

  test("a typo is not right, but it is \"almost\" and it points at the model", () => {
    const r = T.checkOpen("io mangiu", ["io mangio"]);
    assert.equal(r.ok, false);
    assert.equal(r.near, true);
    assert.equal(r.best, "io mangio");
  });

  test("a completely different answer is neither right nor \"almost\"", () => {
    const r = T.checkOpen("xyz", ["io mangio", "tu mangi"]);
    assert.equal(r.ok, false);
    assert.equal(r.near, false);
    assert.equal(r.sim, 0);
  });

  /* On two letters one edit is half the word: "ho" against "io" is 0.5
     similarity, under the "almost" threshold, so the course does not tell
     the student they were close on a pure guess. A separate length guard
     used to say the same thing and changed no result. */
  test("two letters with one wrong are not \"almost\"", () => {
    assert.equal(T.checkOpen("ho", ["io"]).near, false);
  });

  test("a single variant can be given without an array", () => {
    assert.equal(T.checkOpen("ciao", "ciao").ok, true);
  });

  for (const strict of [false, true]) {
    for (const [given, target] of [["Strasse", "Straße"], ["Maedchen", "Mädchen"],
      ["die strasse", "die Straße"], ["die straße", "die Straße"],
      ["Oel", "Öl"], ["Uebung", "Übung"], ["das Maedchen trinkt Oel", "das Mädchen trinkt Öl"]]) {
      test(`${given}/${target} is almost right (strict=${strict})`, () => {
        const r = T.checkOpen(given, [target], strict);
        assert.equal(r.ok, false);
        assert.equal(r.near, true);
        assert.equal(r.best, target);
        assert.deepEqual(Object.keys(r).sort(), ["best", "near", "ok", "sim"]);
      });
    }
    for (const [given, target] of [["Madchen", "Mädchen"], ["schon", "schön"], ["Michäl", "Michael"]]) {
      test(`${given}/${target} is wrong (strict=${strict})`, () => {
        const r = T.checkOpen(given, [target], strict);
        assert.equal(r.ok, false);
        assert.equal(r.near, false);
        assert.equal(T.checkOpen(target, [target], strict).ok, true);
      });
    }
  }
  test("Fluss stays exact and initial case remains tolerant", () => {
    assert.equal(T.checkOpen("Fluss", ["Fluss"]).ok, true);
    assert.equal(T.checkOpen("fluss", ["Fluss"]).ok, true);
    assert.equal(T.checkOpen("die straße", ["die Straße", "die straße"]).ok, true);
  });

  test("an empty answer does not pass, but it returns the model to be shown", () => {
    const r = T.checkOpen("", ["io mangio"]);
    assert.equal(r.ok, false);
    assert.equal(r.best, "io mangio");
  });
});

describe("esc", () => {
  test("it closes all five characters that can break out of a tag", () => {
    assert.equal(T.esc(`<b>"a" & 'b'</b>`), "&lt;b&gt;&quot;a&quot; &amp; &#39;b&#39;&lt;/b&gt;");
  });

  test("the ampersand goes first, so entities are not double-encoded over and over", () => {
    assert.equal(T.esc("&lt;"), "&amp;lt;");
  });

  test("ordinary text passes through unchanged", () => {
    assert.equal(T.esc("caffè macchiato"), "caffè macchiato");
  });

  test("no input yields an empty string", () => {
    assert.equal(T.esc(null), "");
    assert.equal(T.esc(undefined), "");
  });
});

describe("German search and writing boundaries", () => {
  const box = loadEngine({ files: [...CORE, "assets/js/writing.js", "assets/js/frequency.js"] });
  box.sandbox.Views = { shell: { set() {}, head() {} } };
  box.run("assets/js/search.js");
  const S = box.sandbox.Search;
  test("search expands sharp s without moving source highlights", () => {
    assert.equal(S.highlight("Straße Straße Öl", "strasse"), "<mark>Straße</mark> <mark>Straße</mark> Öl");
    assert.equal(S.highlight("Straße Öl", "ol"), "Straße <mark>Öl</mark>");
    assert.equal(S.highlight("ßß!", "ss"), "<mark>ß</mark><mark>ß</mark>!");
    assert.equal(S.highlight("Straße!", "sse"), "Stra<mark>ße</mark>!");
    assert.equal(S.highlight("ß!", "s"), "<mark>ß</mark>!");
  });
  test("search escapes markup and handles empty queries", () => {
    assert.equal(S.highlight("<b>Öl</b>", "ol"), "&lt;b&gt;<mark>Öl</mark>&lt;/b&gt;");
    assert.equal(S.highlight("<Öl>", ""), "&lt;Öl&gt;");
    assert.equal(S.highlight("Öl", "xyz"), "Öl");
  });
  test("search collects German umlauts and sharp s", () => {
    box.Core.registry.levels = [{ code: "A1", units: [{ lessons: [{ id: "search-test",
      vocab: [{ it: "Straße, Öl, Mädchen", tr: "street" }] }] }] }];
    for (const query of ["strasse", "Straße", "ol", "madchen"]) {
      assert.equal(S.collect(query)[0].main, "Straße, Öl, Mädchen");
    }
    assert.equal(S.collect("xyz").length, 0);
  });
  test("writing treats sharp s as part of a word on either boundary", () => {
    const W = box.sandbox.Writing;
    assert.equal(W.analyse("groß!", [{ word: "groß" }])[0].found, true);
    assert.equal(W.analyse("groß", [{ word: "gro" }])[0].found, false);
    assert.equal(W.analyse("ßwort", [{ word: "wort" }])[0].found, false);
    assert.equal(W.analyse("wort!", [{ word: "wort" }])[0].found, true);
  });
  test("frequency coverage keeps German word identities", () => {
    const F = box.sandbox.Frequency;
    const r = F.pokrycie([["Mädchen", 4], ["Straße", 6], ["Fluss", 2]], { "Mädchen": true, "Straße": true }, 12);
    assert.equal(r.znane, 2);
    assert.equal(r.wszystkie, 3);
    assert.equal(r.udzialTokenow, 10 / 12);
  });
});
describe("wystawienie w Core", () => {
  /* Splitting text.js out was meant to leave untouched every one of the
     twenty modules calling Core.norm and Core.esc. This is that condition,
     checked on the identity of the functions and not on a similar result. */
  test("Core returns EXACTLY these functions, not copies of its own", () => {
    const Core = loadEngine({ files: CORE }).sandbox.Core;
    ["norm", "fold", "stripAccents", "levenshtein", "similarity", "checkOpen", "esc"]
      .forEach(nazwa => {
        assert.equal(typeof Core[nazwa], "function", `Core.${nazwa} disappeared`);
        assert.equal(Core[nazwa].toString(), T[nazwa].toString(), `Core.${nazwa} is a different function from Txt.${nazwa}`);
      });
  });
});
