import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import vm from "node:vm";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..", "..");
const LANGS = ["it", "en", "es", "fr", "pl"];

/* Reads the registered levels the way the browser does: by running the index. */
function registeredLevels() {
  const levels = [];
  const box = { LINGUAI: { registerLevel: lv => levels.push(lv) } };
  vm.runInNewContext(readFileSync(join(ROOT, "data/core/curriculum-index.js"), "utf8"), box);
  return levels;
}

test("the nursing level is non-sequential and carries its notice", () => {
  const pfl = registeredLevels().find(lv => lv.code === "PFL");
  assert.ok(pfl, "PFL is registered");
  assert.equal(pfl.sequential, false);
  assert.equal(pfl.notice, "pfl.notice");
});

test("CEFR levels stay sequential and carry no notice", () => {
  const a1 = registeredLevels().find(lv => lv.code === "A1");
  assert.ok(a1, "A1 is registered");
  assert.notEqual(a1.sequential, false);
  assert.equal(a1.notice, undefined);
});

test("every interface language says the nursing content is not yet reviewed", () => {
  for (const lang of LANGS) {
    const text = readFileSync(join(ROOT, `data/i18n/ui-${lang}.js`), "utf8");
    const m = /"pfl\.notice":\s*"([^"]+)"/.exec(text);
    assert.ok(m, `pfl.notice in ui-${lang}.js`);
    assert.ok(m[1].length > 60, `pfl.notice in ui-${lang}.js is a full sentence`);
  }
});
