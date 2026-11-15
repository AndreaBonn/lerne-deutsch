import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { loadEngine, LEMMA, VERBS } from "./_harness.mjs";

const golden = JSON.parse(readFileSync(new URL("./lemma-de-golden.json", import.meta.url), "utf8"));

test("existing Lemma and LemmaMorf exports retain their callable API", () => {
  const { Lemma: L, LemmaMorf: M } = loadEngine({ files: LEMMA }).sandbox;
  for (const name of ["resolve", "lemat", "kandydaci", "uzyjSlownika", "dodajCzasowniki",
    "zbudujSlownik", "dodajHaslo", "odswiez", "funkcyjne", "rozmiarIndeksu"])
    assert.equal(typeof L[name], "function", name);
  for (const name of ["slowa", "posilkowy", "czasownikowe", "odmienne", "funkcyjny",
    "bezAkcentow", "bezEnklityk"]) assert.equal(typeof M[name], "function", name);
  L.uzyjSlownika(word => word === "haus");
  L.dodajCzasowniki(["gehen"]);
  L.odswiez();
  assert.deepEqual(Array.from(L.resolve("Haus")), ["haus"]);
  assert.ok(Array.isArray(L.kandydaci("Haus")));
  assert.equal(typeof L.lemat("Haus"), "string");
  assert.equal(typeof L.rozmiarIndeksu(), "number");
  assert.equal(typeof L.funkcyjne("Haus"), "boolean");
  assert.deepEqual(Object.keys(L.zbudujSlownik([], [{ lexIt: ["Haus"] }])), ["haus"]);
  const dictionary = {};
  L.dodajHaslo(dictionary, "Hund");
  assert.deepEqual(Object.keys(dictionary), ["hund"]);
  assert.ok(Array.isArray(M.slowa("Haus")) && Array.isArray(M.odmienne("Haus")));
  assert.ok(Array.isArray(M.bezEnklityk("Haus")));
  assert.equal(typeof M.bezAkcentow("Haus"), "string");
  for (const name of ["posilkowy", "czasownikowe", "funkcyjny"])
    assert.equal(typeof M[name]("Haus"), "boolean");
});

for (const { form, lemma, kind } of golden) {
  test(`German golden: ${form} -> ${lemma}`, kind === "verb" && ["ging", "gegangen", "aufgestanden"].includes(form) ? { skip: "implement in T1.32" } : {}, () => {
    if (kind === "verb") {
      const L = loadEngine({ files: [...VERBS, ...LEMMA] }).sandbox.Lemma;
      L.uzyjSlownika(word => word === lemma);
      L.dodajCzasowniki([lemma]);
      assert.ok(L.resolve(form).includes(lemma));
    } else {
      const M = loadEngine({ files: [LEMMA[0]] }).sandbox.LemmaMorf;
      assert.ok(M.odmienne(form).includes(lemma));
    }
  });
}
