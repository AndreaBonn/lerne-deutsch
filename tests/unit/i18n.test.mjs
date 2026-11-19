/* ============================================================
   Interface strings (assets/js/i18n.js).

   Attaching texts to the course content has a file of its own next door
   (i18n-merge.test.mjs) — as the engine has had since the split.

   `t()` decides something no data file shows: the plural form. "1 dni" and
   "5 dzień" are not typos but the wrong category, and they only surface in
   front of the student, at one specific number.
   ============================================================ */
import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { loadEngine, CORE, UI } from "./_harness.mjs";

/** We load i18n.js AFTER the engine, so that it overrides the sandbox's I18n double. */
function swiezy() {
  const box = loadEngine({ files: [...CORE, "assets/js/i18n.js"] });
  box.Core.load();
  return { I18n: box.sandbox.I18n, LINGUAI: box.sandbox.LINGUAI };
}

function zNapisami(dict, lang) {
  const { I18n, LINGUAI } = swiezy();
  LINGUAI.addUI(lang || "pl", dict);
  I18n.set(lang || "pl");
  if (lang) I18n.set(lang);
  return I18n;
}

describe("napisy interfejsu", () => {
  test("a missing key comes back as the key and lands on the missing list", () => {
    const I18n = zNapisami({ "a.b": "jest" });
    assert.equal(I18n.t("nie.ma"), "nie.ma");
    assert.ok(I18n.missing().indexOf("nie.ma") >= 0);
    assert.equal(I18n.missing().indexOf("a.b"), -1, "a key that exists does not land on the missing list");
  });

  test("the variables go in where the braces are", () => {
    const I18n = zNapisami({ "x": "masz {n} punktów i {ile} dni" });
    assert.equal(I18n.t("x", { n: 5, ile: 2 }), "masz 5 punktów i 2 dni");
  });

  test("an unknown variable stays in the text instead of disappearing", () => {
    const I18n = zNapisami({ "x": "masz {n} i {czego}" });
    assert.equal(I18n.t("x", { n: 1 }), "masz 1 i {czego}");
  });

  test("Polish picks the form by category, not by n === 1", () => {
    const I18n = zNapisami({ "d": { one: "{n} dzień", few: "{n} dni", many: "{n} dni", other: "{n} dnia" } });
    assert.equal(I18n.t("d", { n: 1 }), "1 dzień");
    assert.equal(I18n.t("d", { n: 3 }), "3 dni");
    assert.equal(I18n.t("d", { n: 5 }), "5 dni");
  });

  test("angielski ma dwie kategorie i „1 lessons” tu nie wyjdzie", () => {
    const I18n = zNapisami({ "l": { one: "{n} lesson", other: "{n} lessons" } }, "en");
    assert.equal(I18n.t("l", { n: 1 }), "1 lesson");
    assert.equal(I18n.t("l", { n: 2 }), "2 lessons");
  });

  test("a missing number counts as zero, not as a missing form", () => {
    const I18n = zNapisami({ "l": { one: "{n} lekcja", few: "{n} lekcje", many: "{n} lekcji", other: "{n} lekcji" } });
    assert.equal(I18n.t("l"), "{n} lekcji", "the category for zero; a variable with no value stays");
  });

  test("the locale follows the chosen language", () => {
    const I18n = zNapisami({ "a": "a" }, "en");
    assert.equal(I18n.lang, "en");
    assert.equal(I18n.locale(), "en-US", "English in this course is the American variety");
  });

  test("a string missing in the current language falls back to Italian, not to the key", () => {
    /* The course speaks five languages and an overlay is sometimes
       incomplete: the student should see a sentence in Italian rather than
       "set.errNoVersion" on the screen. */
    const { I18n, LINGUAI } = swiezy();
    LINGUAI.addUI("it", { "x": "Testo di riserva" });
    LINGUAI.addUI("fr", {});
    I18n.set("fr");

    assert.equal(I18n.t("x"), "Testo di riserva");
    assert.ok(I18n.missing().indexOf("x") >= 0, "the gap is still visible on the list");
  });
});

/* The first visit used to be in Polish whatever the browser said: someone
   with an English browser met a welcome screen they could not read. */
describe("the language of a first visit", () => {
  test("the first browser language the course has wins, region ignored", () => {
    const { I18n } = swiezy();
    assert.equal(I18n.pickLang(["fr-CA", "en-US"]), "fr");
    assert.equal(I18n.pickLang(["de-AT", "it-IT", "en"]), "it");
  });

  test("a browser with none of the course languages gives null, not a guess", () => {
    const { I18n } = swiezy();
    assert.equal(I18n.pickLang(["de-DE", "ja"]), null);
    assert.equal(I18n.pickLang([]), null);
    assert.equal(I18n.pickLang(undefined), null);
  });
});

describe("applying translations to a root", () => {
  /* A rerendered view needs both visible copy and input hints translated. */
  test("apply translates text and placeholder inside the supplied root", () => {
    const I18n = zNapisami({ greeting: "Ciao", search: "Szukaj" });
    const text = {
      textContent: "Old text",
      getAttribute: name => name === "data-i18n" ? "greeting" : null
    };
    const attributes = { "data-i18n-placeholder": "search", placeholder: "Old hint" };
    const input = {
      getAttribute: name => attributes[name] ?? null,
      setAttribute: (name, value) => { attributes[name] = value; }
    };
    const elements = { "[data-i18n]": [text], "[data-i18n-placeholder]": [input] };
    const root = { querySelectorAll: selector => elements[selector] || [] };
    I18n.apply(root);
    assert.equal(text.textContent, "Ciao");
    assert.equal(attributes.placeholder, "Szukaj");
  });

  /* An incomplete plural dictionary must still produce readable text. */
  test("a missing plural category uses the other form", () => {
    const I18n = zNapisami({ days: { one: "{n} dzień", other: "{n} dni" } });
    assert.equal(I18n.t("days", { n: 1 }), "1 dzień");
    assert.equal(I18n.t("days", { n: 3 }), "3 dni");
  });
});

 test("Italian is the default explanation language and German is not offered", () => {
  const { I18n } = swiezy();
  assert.equal(I18n.lang, "it");
  assert.equal(I18n.locale(), "it-IT");
  assert.deepEqual(Array.from(I18n.LANGS, item => item.code), ["it", "en", "es", "fr", "pl"]);
  assert.deepEqual(Object.assign({}, I18n.LOCALE), { it: "it-IT", en: "en-US", es: "es-ES", fr: "fr-FR", pl: "pl-PL" });
});

test("the shell dictionaries render Italian by default and switch without reloading", () => {
  const { sandbox } = loadEngine({ files: [...CORE, ...UI] });
  assert.equal(sandbox.I18n.t("welcome.title"), "Benvenuto al corso di tedesco");
  assert.equal(sandbox.I18n.t("lesson.savedVocab", { n: 1 }), "1 parola aggiunta al mazzo di ripasso.");
  assert.equal(sandbox.I18n.t("lesson.savedVocab", { n: 2 }), "2 parole aggiunte al mazzo di ripasso.");
  sandbox.I18n.set("en");
  assert.equal(sandbox.I18n.t("nav.settings"), "Settings");
  sandbox.I18n.set("it");
  assert.equal(sandbox.I18n.t("nav.settings"), "Impostazioni");
});

describe("edge values and the remaining attributes", () => {
  test("a variable equal to zero is written as 0, not left as {n}", () => {
    const I18n = zNapisami({ left: "{n} lessons left" });
    assert.equal(I18n.t("left", { n: 0 }), "0 lessons left");
    assert.equal(I18n.t("left", { n: 3 }), "3 lessons left");
  });

  test("apply sets aria-label and content from their data attributes", () => {
    const I18n = zNapisami({ close: "Zamknij", desc: "Kurs niemieckiego" });
    const attrs = { "data-i18n-label": "close", "data-i18n-content": "desc" };
    const el = {
      getAttribute: (name) => attrs[name] ?? null,
      setAttribute: (name, value) => { attrs[name] = value; }
    };
    const elements = { "[data-i18n-label]": [el], "[data-i18n-content]": [el] };
    I18n.apply({ querySelectorAll: (selector) => elements[selector] || [] });
    assert.equal(attrs["aria-label"], "Zamknij");
    assert.equal(attrs.content, "Kurs niemieckiego");
  });
});
