/* The report and the section heads name each module. The exam is in the
   style of Goethe-Zertifikat B1, so every language leads with the German
   module name from CILS_FORMATO; the old CILS labels ("reading and
   grammar") described a different exam. */
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import vm from "node:vm";

const root = new URL("../../", import.meta.url);
const box = { window: {} };
vm.createContext(box);
vm.runInContext(readFileSync(new URL("data/core/cils.js", root), "utf8"), box);
const moduli = JSON.parse(JSON.stringify(box.window.CILS_FORMATO.moduli));

export function labelProblems(source, lang) {
  return moduli.flatMap(m => {
    const hit = source.match(new RegExp(`"cils\\.sec\\.${m.id}": "([^"]*)"`));
    if (!hit) return [`${lang}: cils.sec.${m.id} missing`];
    return hit[1].startsWith(m.modulo) ? [] : [`${lang}: cils.sec.${m.id} = "${hit[1]}"`];
  });
}

test("every language names the modules with their Goethe names", () => {
  for (const lang of ["it", "en", "es", "fr", "pl"]) {
    const src = readFileSync(new URL(`data/i18n/ui-${lang}.js`, root), "utf8");
    assert.deepEqual(labelProblems(src, lang), []);
  }
});

test("a CILS-style label is reported", () => {
  const src = '"cils.sec.lettura": "Lettura e grammatica", "cils.sec.ascolto": "Hören (x)", "cils.sec.scritta": "Schreiben (x)", "cils.sec.orale": "Sprechen (x)"';
  assert.deepEqual(labelProblems(src, "it"), ['it: cils.sec.lettura = "Lettura e grammatica"']);
});

test("every language calls an exam part a Teil, as the Goethe format does", () => {
  for (const lang of ["it", "en", "es", "fr", "pl"]) {
    const src = readFileSync(new URL(`data/i18n/ui-${lang}.js`, root), "utf8");
    assert.match(src, /"cils\.testN": "Teil \{n\}"/, lang);
  }
});
