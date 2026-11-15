import { test } from "node:test";
import assert from "node:assert/strict";
import { validateGender, validatePlural } from "../../scripts/validate.mjs";

test("German gender defaults and explicit subsets accept matching answers", () => {
  assert.deepEqual(validateGender({ items: [{ it: "Hund", a: "der" }, { it: "Hunde", a: "die" }, { it: "Haus", a: "das" }] }), []);
  assert.deepEqual(validateGender({ opts: ["der", "die"], items: [{ it: "Katze", a: "die" }] }), []);
  assert.deepEqual(validateGender({ opts: ["den", "dem", "des"], items: [{ it: "mit ___ Hund", a: "dem" }] }), []);
  assert.deepEqual(validateGender({ opts: ["ein", "eine", "einen", "einem", "einer", "eines"], items: [{ it: "mit ___ Hund", a: "einem" }] }), []);
});

test("gender rejects foreign options, missing items and answers outside options", () => {
  for (const ex of [
    { opts: ["il"], items: [{ it: "Hund", a: "il" }] },
    { opts: ["der"], items: [{ it: "Katze", a: "die" }] },
    { opts: [], items: [{ it: "Hund", a: "der" }] },
    { opts: "der", items: [{ it: "Hund", a: "der" }] },
    { items: [] }, {}, { items: [{ it: "Hund" }] }
  ]) assert.ok(validateGender(ex).length > 0, JSON.stringify(ex));
  assert.deepEqual(validateGender({ items: [{ it: "Hund", a: "der" }] }), []);
});

test("German nouns require a separate nonempty plural, including no-plural marker", () => {
  for (const it of ["der Hund", "die Katze", "das Haus", "Die Hunde", "  der  Hund"]) {
    for (const plural of [undefined, null, "", "  ", 42]) assert.ok(validatePlural({ it, plural }).length > 0);
    assert.deepEqual(validatePlural({ it, plural: "-" }), []);
  }
  assert.deepEqual(validatePlural({ it: "der Hund", plural: "Hunde" }), []);
  assert.deepEqual(validatePlural({ it: "lernen" }), []);
  assert.deepEqual(validatePlural({ it: "dieser" }), []);
});
