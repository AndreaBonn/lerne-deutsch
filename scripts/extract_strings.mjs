/* ============================================================
   extract_strings.mjs — extracts every Italian string the application can
   speak and writes them to audio-strings.json.

   It uses no regular expressions on the source: it loads the real data
   files in a node:vm sandbox and walks the actual structure of the objects.
   That way a field which ends up behind a 🔊 button somewhere cannot be
   missed.

   Usage:  node scripts/extract_strings.mjs
   ============================================================ */
import { readFileSync, readdirSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import vm from "node:vm";
import { norm, collectSecondary, collectLesson as collectLessonWith } from "./spoken-strings.mjs";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");

/* The sentences spoken by the engine and absent from the data files. */
const EXTRA = [
  "Hallo! Ich bin deine deutsche Stimme. Lass uns zusammen lernen."
];

const levels = [];
const byCode = {};
const sandbox = {
  window: {}, console,
  LINGUAI: {
    registerLevel(lv) { lv.units = lv.units || []; levels.push(lv); byCode[lv.code] = lv; },
    addUnits(code, units) { if (byCode[code]) byCode[code].units = byCode[code].units.concat(units); },
    /* The library appends to the same list the short readings assign, so
       everything downstream — the sentences, the glosses, the tapped words —
       is collected by the code that already walks READINGS. */
    addReadings(lista) {
      sandbox.READINGS = (sandbox.READINGS || []).concat(lista || []);
    }
  }
};
sandbox.window = sandbox;
vm.createContext(sandbox);

/* It reads data/core only: everything the application speaks is in Italian
   and lives in the neutral layer. The recording file names therefore do not
   depend on the language the student reads the explanations in. */
const CORE = join(ROOT, "data", "core");

function run(file) {
  vm.runInContext(readFileSync(join(CORE, file), "utf8"), sandbox, { filename: file });
}

run("curriculum-index.js");
readdirSync(CORE).filter(f => /^[abc]\d-\d+\.js$/.test(f)).sort().forEach(run);
run("conversations.js");
run("phonetics.js");
run("readings.js");
/* The library, one file per level. Enumerated rather than listed by hand:
   a text added to a level that nobody remembered to name here would have no
   recordings at all, and the course would fall back to system synthesis
   without saying a word about it. */
readdirSync(CORE).filter(f => /^library-[abc]\d\.js$/.test(f)).sort().forEach(run);
run("interference.js");
run("cils.js");

/* ---------------- Collecting ---------------- */
/** primary: the main voice · other: the second speaker's voice (only if it occurs nowhere else) */
const primary = new Set();
const other = new Set();

function addP(s) { const t = norm(s); if (t.length > 1) primary.add(t); }
function addO(s) { const t = norm(s); if (t.length > 1) other.add(t); }

/* The rule for lessons lives in spoken-strings.mjs, shared with the audio
   stage of check_porting.mjs. */
function collectLesson(l) { collectLessonWith(l, addP, addO); }

levels.forEach(function (lv) {
  (lv.units || []).forEach(function (u) {
    (u.lessons || []).forEach(collectLesson);
    if (u.test) collectLesson(u.test);
  });
});

collectSecondary(sandbox, addP, addO);

EXTRA.forEach(addP);

/* A side spoken anywhere in the main voice does not get a second file. */
primary.forEach(s => other.delete(s));

const out = {
  primary: Array.from(primary).sort(),
  other: Array.from(other).sort()
};
writeFileSync(join(ROOT, "scripts", "audio-strings.json"), JSON.stringify(out, null, 1), "utf8");

const chars = [...primary, ...other].reduce((n, s) => n + s.length, 0);
console.log(`głos główny:   ${out.primary.length} napisów`);
console.log(`głos rozmówcy: ${out.other.length} napisów`);
console.log(`razem:         ${out.primary.length + out.other.length} napisów, ${chars} znaków`);
console.log("zapisano scripts/audio-strings.json");
