/* ============================================================
   mutations.mjs — whether the unit tests can see red
   Usage:  node scripts/mutations.mjs [--tylko <part of a description>]

   Every row of the table below breaks ONE decision in the engine and names
   the test file that must then fall over. A mutation after which the suite
   stays green means nobody is guarding that decision.

   WHY THIS IS NOT THE SAME AS COVERAGE. `coverage.mjs` says a line was
   EXECUTED. Execution is not verification: the assertion
   `assert.ok(!out.includes("js-play"))` runs the whole generator and passes
   even when the generator produces NOTHING. I wrote three such assertions
   on the day this table was created, and all three had 100% coverage. They
   only came out here:

   - an empty audio block entering the reading section (I counted the
     buttons, not the block wrapping them);
   - `cils-h` as a substring also matching `cils-hint`;
   - `cils.limit` as a substring matching `cils.limitLabel`, so the whole
     warning about the simulator's limit could disappear on green.

   THE SCOPE IS NARROW AND MEANT TO BE DECLARED. The table covers four files
   (`cils-html.js`, `lemma-morf.js`, `pwa-rules.js`, `pwa.js`) out of the
   sixty-odd in `assets/js/`. A result of "34/34" does not mean "the engine
   is verified", it means "those 34 decisions are verified". Adding a file of
   pure functions is a good moment to add a row here; there is no obligation
   to cover the whole engine.

   The exception to "pure functions" is `pwa.js`, which is not a pure
   function: it holds the WIRING of the rules to the service worker states,
   and any mistake in that wiring looks on screen like an absent update,
   that is like nothing. The four mutations below are four ways this feature
   stops working without a single red test.

   IT DOES NOT TOUCH FILES IN THE WORKING TREE. The mutated version lives in
   a temporary directory, and `tests/unit/_harness.mjs` reads it through
   `LINGUAI_PODMIANA`. The first version mutated the file in place and
   restored it in `finally`, with a SIGINT handler — the handler was useless,
   because the whole gate is synchronous and the event loop does not get a
   word in before it ends: the signal waited in the queue until the very end
   of the run. Worse, merely registering the handler disabled the default
   process kill, so Ctrl+C stopped stopping the script. Now there is nothing
   to restore.

   Three ways this gate ends in an error (all verified): a mutation with no
   red, a fragment absent from the file (the table rotted after a refactor)
   and a fragment occurring several times (the substitution would hit the
   first occurrence and would measure something other than its description
   says).
   ============================================================ */
import { readFileSync, writeFileSync, mkdtempSync, rmSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join, basename } from "node:path";
import { tmpdir } from "node:os";
import { spawnSync } from "node:child_process";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");

const HTML = "assets/js/cils-html.js";
const CILS = "assets/js/cils.js";
const T_CILS = "tests/unit/cils.test.mjs";
const MORF = "assets/js/lemma-morf.js";
const LEMMA = "assets/js/lemma.js";
const T_LEMMA = "tests/unit/lemma.test.mjs";
const REG = "assets/js/pwa-rules.js";
const PWA = "assets/js/pwa.js";
const T_HTML = "tests/unit/cils-html.test.mjs";
const T_MORF = "tests/unit/lemma-morf.test.mjs";
const T_REG = "tests/unit/pwa-rules.test.mjs";
const T_PWA = "tests/unit/pwa.test.mjs";
const RULES = "assets/js/llm-rules.js";
const PROV = "assets/js/llm-providers.js";
const T_RULES = "tests/unit/llm-rules.test.mjs";
const T_PROV = "tests/unit/llm-providers.test.mjs";
const PROMPTS = "assets/js/llm-prompts.js";
const T_PROMPTS = "tests/unit/llm-prompts.test.mjs";
const VERBS_JS = "assets/js/verbs.js";
const T_VERBS = "tests/unit/verbs.test.mjs";
const T_VERBS_PREFIX = "tests/unit/verbs-prefix.test.mjs";
const RET = "assets/js/retention-rules.js";
const T_RET = "tests/unit/retention-rules.test.mjs";
const ICS = "assets/js/ics.js";
const T_ICS = "tests/unit/ics.test.mjs";
const RAPORT = "assets/js/cils-report.js";
const T_RAPORT = "tests/unit/cils-report.test.mjs";
const CHAT = "assets/js/chat-rules.js";
const T_CHAT = "tests/unit/chat-rules.test.mjs";
const PROV_CHAT = "tests/unit/llm-providers.test.mjs";
const STORE = "assets/js/store.js";
const T_STORE = "tests/unit/store.test.mjs";
const FLASH = "assets/js/flash-rules.js";
const T_FLASH = "tests/unit/flash-rules.test.mjs";
const MODES = "assets/js/flash-modes.js";
const T_MODES = "tests/unit/flash-modes.test.mjs";
const RUN = "assets/js/flash-run.js";
const SRS = "assets/js/srs.js";
const T_SRS = "tests/unit/srs.test.mjs";
const T_RUN = "tests/unit/flash-run.test.mjs";
const DLEX = "assets/js/drills-lex.js";
const DRILLS = "assets/js/drills.js";
const DDE = "assets/js/drills-de.js";
const T_DRILLS = "tests/unit/drills.test.mjs";
const WRITING = "assets/js/writing.js";
const T_WRITING = "tests/unit/writing.test.mjs";

/**
 * The mutations. `z` must occur in the file EXACTLY ONCE — with two
 * occurrences the substitution would hit the first of them and nobody would
 * notice that the mutation measures something other than its description
 * says.
 */
const MUTACJE = [
  { plik: "assets/js/cils-run.js", test: "tests/unit/cils-run.test.mjs", opis: "writing choice index ignored",
    z: "task.scelta[(choices || [])[index] || 0]", na: "task.scelta[0]" },
  { plik: HTML, test: T_HTML, opis: "writing form cells unescaped",
    z: "esc(row[0]) + '</th><td>' + esc(row[1])", na: "row[0] + '</th><td>' + row[1]" },
  { plik: HTML, test: T_HTML, opis: "Sprachbausteine: independent radio groups per gap",
    z: 'var nome = (prefix || "") + "p" + n + "i" + i;', na: 'var nome = (prefix || "") + "p" + n;' },
  { plik: HTML, test: T_HTML, opis: "lueckeAbbina: shared list missing from the gaps",
    z: "if (p.t === \"lueckeAbbina\") options = p.opts || [];", na: "" },
  { plik: CILS, test: T_CILS, opis: "lueckeMc: score the selected option",
    z: "if (dato === items[i].a) { out.esatte++; out.punti += peso; }", na: "if (false) { out.esatte++; out.punti += peso; }" },
  { plik: "assets/js/placement.js", test: "tests/unit/placement.test.mjs", opis: "placement skips non-sequential levels",
    z: "return Core.registry.levels.filter(function (lv) { return lv.sequential !== false; });", na: "return Core.registry.levels;" },
  { plik: "assets/js/core.js", test: "tests/unit/registry.test.mjs", opis: "next lesson skips non-sequential levels",
    z: "if (levels[i].sequential === false) continue;", na: "if (false) continue;" },
  { plik: "assets/js/cils-html.js", test: "tests/unit/cils-html.test.mjs", opis: "Teil: reading text omitted outside vf",
    z: "if (p.t !== \"cloze\" && p.t !== \"lueckeAbbina\" && p.t !== \"lueckeMc\" && p.testo)", na: "if (p.t === \"vf\" && p.testo)" },
  { plik: "assets/js/cils-html.js", test: "tests/unit/cils-html.test.mjs", opis: "Teil: ads disappear",
    z: "if (p.t === \"abbina\") testa +=", na: "if (false) testa +=" },
  { plik: "assets/js/cils-html.js", test: "tests/unit/cils-html.test.mjs", opis: "Teil: no suitable ad loses option zero",
    z: "}).concat([\"0\"]);", na: "}).concat([]);" },
  { plik: "assets/js/cils-html.js", test: "tests/unit/cils-html.test.mjs", opis: "Teil: Ja Nein labels reversed",
    z: "options = [\"Ja\", \"Nein\"]", na: "options = [\"Nein\", \"Ja\"]" },
  { plik: "assets/js/cils-html.js", test: "tests/unit/cils-html.test.mjs", opis: "Teil: only first writing task rendered",
    z: "sez.prove.map(function (task, index)", na: "sez.prove.slice(0, 1).map(function (task, index)" },
  { plik: "assets/js/cils-html.js", test: "tests/unit/cils-html.test.mjs", opis: "Teil: oral prompts disappear",
    z: "sez.prove.map(productionPrompt).join(\"\")", na: "\"\"" },
  { plik: "assets/js/cils.js", test: "tests/unit/cils.test.mjs", opis: "score: threshold becomes strict",
    z: "percentage >= selected.soglia", na: "percentage > selected.soglia" },
  { plik: "assets/js/cils.js", test: "tests/unit/cils.test.mjs", opis: "score: maximum fixed to twelve",
    z: "tally.punti / tally.max", na: "tally.punti / 12" },
  { plik: "assets/js/cils.js", test: "tests/unit/cils.test.mjs", opis: "writing: task bounds ignored",
    z: "(traccia && traccia.parole) || { min: 80, max: 120 }", na: "{ min: 80, max: 120 }" },
  { plik: "assets/js/cils-report.js", test: "tests/unit/cils-report.test.mjs", opis: "report: standalone English pass verdict leaks",
    z: "    if (/\\b(?:pass(?:ed)?|Passed)\\b/.test(zdanie)) return true;", na: "" },
  { plik: "assets/js/cils-report.js", test: "tests/unit/cils-report.test.mjs", opis: "report: German Pass (passport) stripped as a verdict",
    z: "/\\b(?:pass(?:ed)?|Passed)\\b/.test(zdanie)", na: "/\\bpass(?:ed)?\\b/i.test(zdanie)" },
  { plik: "assets/js/cils.js", test: "tests/unit/cils.test.mjs", opis: "verdict: an empty scored module fails the attempt",
    z: "      if (!(tally.max > 0)) {", na: "      if (false) {" },
  { plik: "assets/js/cils-run.js", test: "tests/unit/cils-run.test.mjs", opis: "score: run drops weighted totals",
    z: "global.Cils.esito(run.szczegoly, ", na: "global.Cils.esito({}, " },
  { plik: "assets/js/cils-run.js", test: "tests/unit/cils-run.test.mjs", opis: "format: run result ignores the simulation's format",
    z: "global.Cils.formato(run.sim)); },", na: "undefined); }," },
  { plik: "assets/js/llm.js", test: "tests/unit/llm.test.mjs", opis: "format: reading prompt does not get the exam format",
    z: "t.cefr, t.formato);", na: "t.cefr);" },
  { plik: WRITING, test: T_WRITING, opis: "writing: conjugated German forms are never detected",
    z: 'return f.concat(verbFinalForms(req.verb, tense, f));', na: 'return [];' },
  { plik: WRITING, test: T_WRITING, opis: "writing: verb-final forms of separable verbs are never generated",
    z: 'if (tense !== "praes" && tense !== "praet") return [];', na: 'return [];' },
  { plik: WRITING, test: T_WRITING, opis: "writing: a conjunction no longer ends a verb bracket",
    z: '(?!(?:und|oder|aber|denn|sondern|weil|dass|wenn)[ \\\\t])', na: '' },
  { plik: WRITING, test: T_WRITING, opis: "writing: German default tense replaced by the retired Italian key",
    z: 'req.tense || "praes"', na: 'req.tense || "pres"' },
  { plik: WRITING, test: T_WRITING, opis: "writing: intervening words hide German verb brackets",
    z: 'if (allowGaps) escaped =', na: 'if (false) escaped =' },
  { plik: WRITING, test: T_WRITING, opis: "writing: German umlauts collapse into different words",
    z: 'global.Txt.detypo(text).toLowerCase().replace(/ß/g, "ss")',
    na: 'global.Txt.fold(text).replace(/ß/g, "ss")' },
  { plik: WRITING, test: T_WRITING, opis: "writing: the detected German participle can end inside a word",
    z: ' + "([^a-zäöüß]|$)"', na: ' + ""' },
  /* ---- cils-html.js: the answer grid ---- */
  { plik: HTML, test: T_HTML, opis: "radio: one group for the whole task",
    z: 'var nome = (prefix || "") + "p" + n + "i" + i;', na: 'var nome = (prefix || "") + "p" + n;' },
  { plik: HTML, test: T_HTML, opis: "cloze: a gap after every piece of text",
    z: "var buco = i < (p.items || []).length", na: "var buco = i < (p.testo || []).length" },
  { plik: HTML, test: T_HTML, opis: "listening: the audio block in the reading section too",
    z: 'if (sez.id === "ascolto") testa += ascolti(p, n);', na: "testa += ascolti(p, n);" },
  { plik: HTML, test: T_HTML, opis: "scritta: every prompt selected at once",
    z: '(i === 0 ? " checked" : "") + "> " + esc(tr.it)', na: '" checked> " + esc(tr.it)' },
  { plik: HTML, test: T_HTML, opis: "orale: a record button with no microphone",
    z: "(powod ? '<p class=\"cils-hint\">' + esc(t(powod)) + \"</p>\" :",
    na: "(false ? '<p class=\"cils-hint\">' + esc(t(powod)) + \"</p>\" :" },
  { plik: HTML, test: T_HTML, opis: "orale: no topic selected up front",
    z: '(i === 0 ? " checked" : "") + "> " + esc(a.it)', na: '"> " + esc(a.it)' },

  /* ---- cils-html.js: the list and the summary ---- */
  { plik: HTML, test: T_HTML, opis: "list: the warning about the limit removed",
    z: 'esc(t("cils.limit")) + "</div>";', na: '"</div>";' },
  { plik: HTML, test: T_HTML, opis: "list: only the first simulation",
    z: "symulacje.map(function (s) {", na: "symulacje.slice(0, 1).map(function (s) {" },
  { plik: HTML, test: T_HTML, opis: "list: the start button without the simulation id",
    z: 'data-id="', na: 'data-sim="' },
  { plik: HTML, test: T_HTML, opis: "abilità: no marker for time that ran out",
    z: 'var scad = czyScadla(a) ? " " + t("cils.expiredMark") : "";', na: 'var scad = "";' },
  { plik: HTML, test: T_HTML, opis: "abilità: always a tick, never a cross",
    z: 'd.punti + " / " + d.max + " " + (d.sopraSoglia ? "✓" : "✗")',
    na: 'd.punti + " / " + d.max + " ✓"' },
  { plik: HTML, test: T_HTML, opis: "abilità: an unmeasured skill shown as a result",
    z: "var val = d.misurata", na: "var val = true" },
  { plik: HTML, test: T_HTML, opis: "summary: the verdict always undetermined",
    z: 'esc(t(esito.verdetto === "sotto-soglia" ? "cils.verdictBelow" : "cils.verdictUnknown"))',
    na: 'esc(t("cils.verdictUnknown"))' },
  { plik: HTML, test: T_HTML, opis: "summary: without the source of the threshold",
    z: 'esc(t("cils.thresholdSource")) + "</p></div>" +\n      chiusura',
    na: '"</p></div>" +\n      chiusura' },
  { plik: HTML, test: T_HTML, opis: "summary: the production cards never appear",
    z: "return scritta(pisemna) + orale(ustna) +", na: 'return "" +' },
  { plik: HTML, test: T_HTML, opis: "summary: without the way back to the list",
    z: 'class="btn btn--ghost js-list"', na: 'class="btn btn--ghost js-brak"' },
  { plik: HTML, test: T_HTML, opis: "written: a card for an untouched section",
    z: 'if (!pisemna) return "";', na: 'if (false) return "";' },
  /* The same expression now sits in both production cards, so each mutation
     carries enough of its own line to be unambiguous: with two occurrences
     the substitution would hit the first and measure the other card. */
  { plik: HTML, test: T_HTML, opis: "written: the requirement label replaced by the key",
    z: 'var wym = ((pisemna.traccia || {}).richiede || [])[i] || {};',
    na: 'var wym = {};' },
  { plik: HTML, test: T_HTML, opis: "oral: the requirement label replaced by the key",
    z: "var wym = (arg.richiede || [])[i] || {};", na: "var wym = {};" },
  { plik: HTML, test: T_HTML, opis: "oral: an empty account analysed as if it were an answer",
    z: '    if (!testo.trim()) {', na: "    if (false) {" },

  { plik: LEMMA, test: T_LEMMA, opis: "lemma: dictionary entries retain their articles",
    z: '.replace(ARTICLE, "")', na: "" },
  { plik: LEMMA, test: T_LEMMA, opis: "lemma: complete separable verb forms omitted",
    z: "addForm(form, infinitive);", na: "" },
  { plik: LEMMA, test: T_LEMMA, opis: "lemma: dictionary verdict ignored",
    z: "if (!(known ? known(candidate) : Object.prototype.hasOwnProperty.call(course, candidate))) return;",
    na: "if (false) return;" },

  /* ---- lemma-morf.js: the form rules ---- */
  { plik: MORF, test: T_MORF, opis: "slowa: a lone auxiliary is dropped too",
    z: "if (words.length < 2) return words;", na: "if (false) return words;" },
  { plik: MORF, test: T_MORF, opis: "compounds: auxiliaries retained",
    z: "return !posilkowy(word);", na: "return true;" },
  { plik: MORF, test: T_MORF, opis: "umlaut: reversal disabled",
    z: "return UMLAUT[letter];", na: "return letter;" },
  { plik: MORF, test: T_MORF, opis: "dative plural: -ern not reduced",
    z: "/ern$/i,", na: "/xyz$/i," },
  { plik: MORF, test: T_MORF, opis: "superlative: -esten not reduced",
    z: "/esten$/i,", na: "/xyz$/i," },
  { plik: MORF, test: T_MORF, opis: "infinitive: reflexive forms rejected",
    z: "/^(sich )?[a-zäöüß]+(en|ern|eln)$/i", na: "/^[a-zäöüß]+(en|ern|eln)$/i" },
  { plik: MORF, test: T_MORF, opis: "function words: without lowering the case",
    z: "return !!functionWords[String(w).toLowerCase()];", na: "return !!functionWords[String(w)];" },
  { plik: MORF, test: T_MORF, opis: "function words: the numerals left out of the set",
    z: "FUNKCYJNE.concat(LICZEBNIKI).forEach", na: "FUNKCYJNE.forEach" },
  { plik: MORF, test: T_MORF, opis: "superlative: -sten not reduced",
    z: "/sten$/i,", na: "/xyz$/i," },
  { plik: MORF, test: T_MORF, opis: "superlative: inflected -est not reduced",
    z: "/est(e|em|er|es)$/i,", na: "/xyz$/i," },
  { plik: MORF, test: T_MORF, opis: "superlative: inflected -st not reduced",
    z: "/st(e|em|er|es)$/i,", na: "/xyz$/i," },
  { plik: MORF, test: T_MORF, opis: "superlative: größten stem omitted",
    z: "if (/ßt(e|en|em|er|es)?$/i.test(word))", na: "if (false)" },
  { plik: MORF, test: T_MORF, opis: "superlative: am phrase not split",
    z: 'slowo.replace(/^am\\s+([a-zäöüß]+(?:sten|ßten))$/i, "$1")', na: "slowo" },
  { plik: MORF, test: T_MORF, opis: "ordering: short -n before -en",
    z: "/en$/i, /em$/i", na: "/n$/i, /en$/i, /em$/i" },
  { plik: MORF, test: T_MORF, opis: "comparative: -er not reduced",
    z: "/er$/i,", na: "/xyz$/i," },

  { plik: MORF, test: T_MORF, opis: "irregular degrees: bare form omitted",
    z: "add(IRREGULAR_DEGREES[word.toLowerCase()]);", na: "" },
  { plik: MORF, test: T_MORF, opis: "irregular degrees: inflected stem omitted",
    z: "add(IRREGULAR_DEGREES[degreeStem]);", na: "" },
  { plik: MORF, test: T_MORF, opis: "feminine plural: -innen not reduced to -in",
    z: "if (/innen$/i.test(word)) add(word.slice(0, -3));", na: "" },
  { plik: MORF, test: T_MORF, opis: "irregular degrees: inherited object names become candidates",
    z: "Object.assign(Object.create(null), {", na: "Object.assign({}, {" },

  /* ---- pwa-rules.js: the rules for announcing a new version ---- */
  { plik: REG, test: T_REG, opis: "announcement: the first visit treated as an update",
    z: "return !!stan.czeka && !!stan.kontrolowana;", na: "return !!stan.czeka;" },
  { plik: REG, test: T_REG, opis: "threshold: a clock moved back stops the questions for good",
    z: "if (teraz < ostatnie) return true;", na: "if (false) return true;" },
  { plik: REG, test: T_REG, opis: "reload: without the loop guard",
    z: "return !!stan.kontrolowana && !stan.juzPrzeladowana;", na: "return !!stan.kontrolowana;" },

  /* ---- pwa.js: wiring the rules to the browser states ---- */

  /* The most obvious defect and the hardest to see: at the moment of
     `updatefound` the worker is in "installing" and `waiting` is empty. */
  { plik: PWA, test: T_PWA, opis: "announcement read at updatefound, not after installation",
    z: 'reg.addEventListener("updatefound", function () { sledz(reg.installing); });',
    na: 'reg.addEventListener("updatefound", function () { zapowiedz(reg.waiting); });' },
  { plik: PWA, test: T_PWA, opis: "update reloads at once instead of asking the worker",
    z: "czeka.postMessage({ typ: \"przejmij\" });", na: "global.location.reload();" },
  { plik: PWA, test: T_PWA, opis: "update asks the worker from announcement time, not the current one",
    z: "var czeka = (rejestracja && rejestracja.waiting) || worker;", na: "var czeka = worker;" },
  { plik: PWA, test: T_PWA, opis: "registration on \"load\" only, without checking readyState",
    z: 'if (global.document.readyState === "complete") register();', na: "if (false) register();" },
  { plik: PWA, test: T_PWA, opis: "the question to the server without a threshold",
    z: "if (!global.PwaRules.sprawdzac(ostatnieSprawdzenie, teraz)) return false;",
    na: "if (false) return false;" },
  /* ---- llm-rules.js: what the model is allowed to change ---- */
  { plik: RULES, test: T_RULES, opis: "clamp: an accepted answer can be rejected",
    z: "    if (localOk) return { ok: true, promoted: false, comment: \"\" };",
    na: "    if (false) return { ok: true, promoted: false, comment: \"\" };" },
  { plik: RULES, test: T_RULES, opis: "verdict: any truthy value promotes",
    z: "      promote: esito.replace(\"Ì\", \"I\") === \"SI\",",
    na: "      promote: !!esito," },
  { plik: RULES, test: T_RULES, opis: "verdict: the accented word is rejected",
    z: "esito.replace(\"Ì\", \"I\") === \"SI\"", na: "esito === \"SI\"" },
  { plik: RULES, test: T_RULES, opis: "cascade: a provider with no key is asked anyway",
    z: "      if (own(have, id) && !own(out, id)) return id;",
    na: "      if (!own(out, id)) return id;" },
  { plik: RULES, test: T_RULES, opis: "cascade: a timeout is reported as a rejected key",
    z: "    if (permanent.length !== list.length) return null;", na: "" },
  { plik: RULES, test: T_RULES, opis: "comment: the cap on length removed",
    z: "      .slice(0, MAX_COMMENT);", na: "      .slice(0);" },

  /* ---- llm-providers.js: reading four different answers ---- */
  { plik: PROV, test: T_PROV, opis: "anthropic: the first block read as the answer",
    z: "        var text = blocks\n          .filter(function (b) { return b && b.type === \"text\"; })\n          .map(function (b) { return b.text || \"\"; })\n          .join(\"\");",
    na: "        var text = (blocks[0] && blocks[0].text) || \"\";" },
  { plik: PROV, test: T_PROV, opis: "errors: a rate limit retires the provider",
    z: "    if (status === 401 || status === 403 || status === 404) return \"permanent\";",
    na: "    if (status !== 200) return \"permanent\";" },
  { plik: PROV, test: T_PROV, opis: "lookup: an inherited name passes for a provider",
    z: "    return Object.prototype.hasOwnProperty.call(PROVIDERS, id) ? PROVIDERS[id] : null;",
    na: "    return PROVIDERS[id] || null;" },
  { plik: PROV, test: T_PROV, opis: "gemini: a withheld answer read as transient",
    z: "        if (!c) return { error: \"answer withheld\", kind: \"permanent\" };",
    na: "        if (!c) return { error: \"answer withheld\", kind: \"transient\" };" },
  { plik: PROV, test: T_PROV, opis: "gemini: thinking left unbounded",
    z: "            maxOutputTokens: MAX_OUT,\n            thinkingConfig: { thinkingLevel: \"low\" }",
    na: "            maxOutputTokens: MAX_OUT" },
  { plik: PROV, test: T_PROV, opis: "gemini: the temperature the vendor asks us not to send",
    z: "            thinkingConfig: { thinkingLevel: \"low\" }",
    na: "            temperature: 0, thinkingConfig: { thinkingLevel: \"low\" }" },
  { plik: PROV, test: T_PROV, opis: "openai: the temperature the family may refuse",
    z: "        delete b.temperature;\n", na: "" },
  { plik: PROV, test: T_PROV, opis: "openai: reasoning left at the vendor's default",
    z: "        b.reasoning_effort = \"none\";\n", na: "" },
  { plik: PROV, test: T_PROV, opis: "openai: the ceiling that does not count reasoning",
    z: "        b.max_completion_tokens = b.max_tokens;\n        delete b.max_tokens;\n",
    na: "" },

  /* ---- llm-prompts.js: what the model is actually told ---- */
  { plik: PROMPTS, test: T_PROMPTS, opis: "judge: the taught language is still Italian",
    z: "grammatically correct German", na: "grammatically correct Italian" },
  { plik: PROMPTS, test: T_PROMPTS, opis: "judge: Italian explanations fall back to English",
    z: "fr: \"French\", it: \"Italian\"", na: "fr: \"French\", de: \"German\"" },
  { plik: PROMPTS, test: T_PROMPTS, opis: "exam: the simulation is presented as official",
    z: '+ " (unofficial)"',
    na: '+ " (official)"' },
  { plik: PROMPTS, test: T_PROMPTS, opis: "exam: coherence and connectors are omitted",
    z: '      "- Coherence and connectors: how do ideas connect?",\n', na: "" },
  { plik: PROMPTS, test: T_PROMPTS, opis: "chat: the partner switches back to Italian",
    z: "- stay in German even if", na: "- stay in Italian even if" },
  { plik: PROMPTS, test: T_PROMPTS, opis: "judge: a comment longer than the one kept",
    z: "  var MAX_COMMENT_CHARS = 160;", na: "  var MAX_COMMENT_CHARS = 400;" },
  { plik: PROMPTS, test: T_PROMPTS,
    opis: "writing: the level invented when the task has none",
    z: "      ? \"a learner at level \" + cefr + \" of the CEFR\"\n      : \"a learner\";",
    na: "      ? \"a learner at level \" + cefr + \" of the CEFR\"\n      : \"a learner at level B1 of the CEFR\";" },
  { plik: PROMPTS, test: T_PROMPTS, opis: "writing: the level never reaches the model",
    z: "      system: writingSystem(lang, t.cefr),",
    na: "      system: writingSystem(lang)," },

  /* ---- retention-rules.js: the three decisions behind coming back ---- */
  { plik: RET, test: T_RET, opis: "storage: asked before a single lesson is done",
    z: "    return (s.lekcje || 0) >= PROG_MIEJSCA;", na: "    return true;" },
  { plik: RET, test: T_RET, opis: "storage: the one attempt spent twice",
    z: "    if (s.pytano) return false;        /* our one attempt is spent */\n", na: "" },
  { plik: RET, test: T_RET, opis: "install: a refusal that comes back",
    z: "    if (s.odrzucona) return false;     /* asked and answered, for good */\n", na: "" },
  { plik: RET, test: T_RET, opis: "install: offered inside the installed app",
    z: "    if (s.samodzielna) return false;   /* this IS the installed app */\n", na: "" },
  { plik: RET, test: T_RET, opis: "badge: the horizon dropped, so it counts only what is due now",
    z: "    var granica = teraz + HORYZONT_MS;", na: "    var granica = teraz;" },
  { plik: RET, test: T_RET, opis: "badge: a card with no due date counted as due",
    z: "        if (!c || typeof c.due !== \"number\") return;", na: "        if (!c) return;" },
  { plik: RET, test: T_RET, opis: "badge: only the first deck walked, so mistakes stop counting",
    z: "    (Array.isArray(talie) ? talie : []).forEach(function (talia) {",
    na: "    (Array.isArray(talie) ? talie : []).slice(0, 1).forEach(function (talia) {" },

  /* ---- ics.js: what another program has to be able to read ---- */
  { plik: ICS, test: T_ICS, opis: "escaping: the comma left as a value separator",
    z: "      .replace(/,/g, \"\\\\,\")\n", na: "" },
  { plik: ICS, test: T_ICS, opis: "escaping: a newline left to end the property",
    z: "      .replace(/\\r\\n|\\r|\\n/g, \"\\\\n\");", na: "      .replace(/\\r\\n|\\r|\\n/g, \"\\n\");" },
  { plik: ICS, test: T_ICS, opis: "escaping: the backslash escaped last, so every escape doubles",
    z: "      .replace(/\\\\/g, \"\\\\\\\\\")\n", na: "" },
  { plik: ICS, test: T_ICS, opis: "folding: measured in characters instead of octets",
    z: "      var dl = oktety(ch);", na: "      var dl = 1;" },
  { plik: ICS, test: T_ICS, opis: "folding: the continuation space not counted in its own line",
    z: "        limit = MAX_OKTETOW - 1;   /* the leading space of a continuation */",
    na: "        limit = MAX_OKTETOW;" },
  { plik: ICS, test: T_ICS, opis: "start: written in UTC, so the hour moves with the timezone",
    z: "      \"DTSTART:\" + poczatek,", na: "      \"DTSTART:\" + stempel(p.teraz)," },

  /* ---- cils-report.js: the decision that a machine does not mark this exam ---- */
  { plik: RAPORT, test: T_RAPORT, opis: "report: a fraction passes, so 9/12 reaches the student",
    z: "    if (UŁAMEK.test(zdanie) || PROCENT.test(zdanie) || PUNKTY.test(zdanie)) return true;",
    na: "    if (PROCENT.test(zdanie) || PUNKTY.test(zdanie)) return true;" },
  { plik: RAPORT, test: T_RAPORT, opis: "report: a CEFR level passes, so \"das entspricht B2\" reaches the student",
    z: "    if (POZIOM.test(zdanie)) return true;", na: "" },
  { plik: RAPORT, test: T_RAPORT, opis: "report: the verdict words stop being checked",
    z: "      if (male.indexOf(WERDYKT[i]) >= 0) return true;", na: "" },
  { plik: RAPORT, test: T_RAPORT, opis: "report: the ceiling on length dropped",
    z: "  var MAX_CHARS = 700;", na: "  var MAX_CHARS = 700000;" },
  { plik: RAPORT, test: T_RAPORT, opis: "report: a sentence with a verdict kept instead of dropped",
    z: "      if (werdykt(z)) continue;", na: "" },
  { plik: RAPORT, test: T_RAPORT, opis: "report: the full stop between digits ends a sentence again",
    z: "    var zdania = s.match(/(?:[^.!?]|\\.(?=\\d))+[.!?]*/g) || [s];",
    na: "    var zdania = s.match(/[^.!?]+[.!?]*/g) || [s];" },
  { plik: RAPORT, test: T_RAPORT, opis: "report: a mark said in words passes (9 su 12, otto punti su dodici)",
    z: "    if (NA_ILE.test(zdanie) || NA_SLOWNIE.test(zdanie) || OCENA.test(zdanie)) return true;",
    na: "" },

  /* ---- chat-rules.js: a conversation the student pays for ---- */
  { plik: CHAT, test: T_CHAT, opis: "chat: the partner's replies counted against the ceiling too",
    z: 'var moje = lista(historia).filter(function (t) { return t && t.role === "student"; }).length;',
    na: "var moje = lista(historia).length;" },
  { plik: CHAT, test: T_CHAT, opis: "chat: the ceiling goes negative instead of stopping at zero",
    z: "    return Math.max(0, MAX_TUR - moje);", na: "    return MAX_TUR - moje;" },
  { plik: CHAT, test: T_CHAT, opis: "chat: the history is pruned from the newest end",
    z: "    for (var i = wszystkie.length - 1; i >= 0; i--) {",
    na: "    for (var i = 0; i < wszystkie.length; i++) {" },
  { plik: CHAT, test: T_CHAT, opis: "chat: an oversized turn is dropped, so the newest line never travels",
    z: "        if (out.length === 0) out.unshift({ role: t.role, text: tekst.slice(0, MAX_ZNAKOW) });",
    na: "" },
  { plik: CHAT, test: T_CHAT, opis: "chat: prose instead of JSON kills the turn",
    z: '    return { risposta: porzadek(surowy).slice(0, MAX_REPLIKI), correzione: "" };',
    na: '    return { risposta: "", correzione: "" };' },
  { plik: CHAT, test: T_CHAT, opis: "chat: a reply that runs on is not cut",
    z: "        risposta: porzadek(parsed.risposta).slice(0, MAX_REPLIKI),",
    na: "        risposta: porzadek(parsed.risposta)," },

  /* ---- llm-providers.js: the same turns in three dialects ---- */
  { plik: PROV, test: PROV_CHAT, opis: "chat: gemini given the role name of the other dialect",
    z: 'var wczesniej = tury(prompt.history, { student: "user", partner: "model" })',
    na: 'var wczesniej = tury(prompt.history, { student: "user", partner: "assistant" })' },
  { plik: PROV, test: PROV_CHAT, opis: "chat: an unknown role passed through instead of dropped",
    z: '      .filter(function (t) { return t && (t.role === "student" || t.role === "partner"); })',
    na: "      .filter(function (t) { return !!t; })" },

  /* ---- store.js: the save that must not wait for the timer ---- */
  { plik: STORE, test: T_STORE, opis: "flush writes but leaves the timer to write again",
    z: "    global.clearTimeout(saveTimer);\n", na: "\n" },
  { plik: STORE, test: T_STORE, opis: "flush on every visibility change, visible included",
    z: 'if (global.document.visibilityState === "hidden") flush();', na: "flush();" },

  /* ---- flash-rules.js / flash-run.js: the five-minute session ---- */
  { plik: FLASH, test: T_FLASH, opis: "the card cap one card too late",
    z: "if (answered >= LIMITS.cards) return \"cap\";", na: "if (answered > LIMITS.cards) return \"cap\";" },
  { plik: FLASH, test: T_FLASH, opis: "the time bound ignored",
    z: "if (now - start >= LIMITS.ms) return \"time\";", na: "" },
  { plik: FLASH, test: T_FLASH, opis: "a clock moved backwards gives extra time",
    z: "return Math.max(0, Math.min(LIMITS.ms, LIMITS.ms - (now - start)));", na: "return Math.max(0, LIMITS.ms - (now - start));" },
  { plik: FLASH, test: T_FLASH, opis: "a started second rounds down to 0:00",
    z: "var s = Math.ceil(Math.max(0, ms) / 1000);", na: "var s = Math.floor(Math.max(0, ms) / 1000);" },
  { plik: RUN, test: T_RUN, opis: "the bound checked before grading the open card",
    z: "    if (st.powod) return st.powod;\n    var c = st.kolejka[st.i];",
    na: "    if (st.powod) return st.powod;\n    if (Rules.isOver(st.start, at.now, st.i + 1) === \"time\") { st.powod = \"time\"; return st.powod; }\n    var c = st.kolejka[st.i];" },
  { plik: RUN, test: T_RUN, opis: "answering after the end grades again",
    z: "    if (st.powod) return st.powod;\n    var c = st.kolejka[st.i];", na: "    var c = st.kolejka[st.i] || st.kolejka[st.kolejka.length - 1];" },
  { plik: RUN, test: T_RUN, opis: "a new word graded without joining the deck",
    z: "var key = c.fresh ? global.Core.addCard(c.it, c.tr, c.src) : c.key;", na: "var key = c.key;" },
  { plik: FLASH, test: T_FLASH, opis: "reserve: the same word twice",
    z: "if (!k || seen[k] || opts.inDeck(k)) return;", na: "if (!k || opts.inDeck(k)) return;" },
  { plik: FLASH, test: T_FLASH, opis: "reserve: words already in the deck come back as new",
    z: "if (!k || seen[k] || opts.inDeck(k)) return;", na: "if (!k || seen[k]) return;" },
  { plik: FLASH, test: T_FLASH, opis: "reserve: a student with nothing finished gets nothing",
    z: "      if (!lekcje.length) {", na: "      if (false) {" },
  { plik: FLASH, test: T_FLASH, opis: "new today: a review at midnight counted as yesterday",
    z: "return first[k] >= dayStart;", na: "return first[k] > dayStart;" },
  { plik: FLASH, test: T_FLASH, opis: "compose: an overdrawn allowance goes negative",
    z: "Math.max(0, NEW_PER_DAY - newSoFar)", na: "NEW_PER_DAY - newSoFar" },
  { plik: MODES, test: T_MODES, opis: "distractors: any article goes",
    z: "if (seen[k] || articleOf(w.it) !== art || sense(w.tr) === zly) return;", na: "if (seen[k] || sense(w.tr) === zly) return;" },
  { plik: MODES, test: T_MODES, opis: "distractors: the answer offered as its own distractor",
    z: "    seen[global.Txt.norm(answer.it)] = true;\n", na: "" },
  { plik: MODES, test: T_MODES, opis: "distractors: a word with the same meaning allowed",
    z: "if (seen[k] || articleOf(w.it) !== art || sense(w.tr) === zly) return;", na: "if (seen[k] || articleOf(w.it) !== art) return;" },
  { plik: MODES, test: T_MODES, opis: "distractors: glosses in parentheses compared too",
    z: 'String(tr || "").replace(/\\([^)]*\\)/g, " ")', na: 'String(tr || "")' },
  { plik: MODES, test: T_MODES, opis: "articles: German plural die is unrecognised",
    z: 'var ARTICLE = /^(der |die |das )/;', na: 'var ARTICLE = /^(der |das )/;' },
  { plik: MODES, test: T_MODES, opis: "articles: German neuter das is unrecognised",
    z: 'var ARTICLE = /^(der |die |das )/;', na: 'var ARTICLE = /^(der |die )/;' },
  { plik: MODES, test: T_MODES, opis: "plural: saved cards lose course metadata",
    z: 'return word ? word.plural : "";', na: 'return "";' },
  { plik: MODES, test: T_MODES, opis: "plural: reserve cards lose explicit metadata",
    z: 'if (card.plural) return card.plural;', na: 'if (card.plural) return "";' },
  { plik: MODES, test: T_MODES, opis: "modes: stable from twenty days",
    z: "card.s >= STABLE_DAYS;", na: "card.s >= STABLE_DAYS - 1;" },
  { plik: MODES, test: T_MODES, opis: "modes: a new word may come as a choice",
    z: '    if (card.fresh) return "flip";\n', na: "" },
  { plik: MODES, test: T_MODES, opis: "grades: a right pick graded as recall",
    z: "return ok ? 3 : 0;", na: "return ok ? 4 : 0;" },
  { plik: MODES, test: T_MODES, opis: "listening: the system voice asked by ear anyway",
    z: 'return !!hasRecording && voiceSource !== "system";', na: "return !!hasRecording;" },
  { plik: MODES, test: T_MODES, opis: "listening: without a recording",
    z: 'return !!hasRecording && voiceSource !== "system";', na: 'return voiceSource !== "system";' },
  { plik: MODES, test: T_MODES, opis: "listening: a heard pick with no distractors",
    z: '      family = ["flip"];\n', na: '      family = avail.audio ? ["flip", "listen-choice"] : ["flip"];\n' },
  { plik: MODES, test: T_MODES, opis: "grades: a heard pick self-graded",
    z: 'if (mode === "choice" || mode === "listen-choice") return ok ? 3 : 0;', na: 'if (mode === "choice") return ok ? 3 : 0;' },
  { plik: SRS, test: T_SRS, opis: "journal: the default mode written as well",
    z: 'if (mode && mode !== "write") wpis.m = mode;', na: "if (mode) wpis.m = mode;" },
  { plik: SRS, test: T_SRS, opis: "journal: the mode dropped",
    z: 'if (mode && mode !== "write") wpis.m = mode;', na: "" },

  /* ---- drills-lex.js / drills.js: German numbers, clock, dates, pronouns ---- */
  { plik: DLEX, test: T_DRILLS, opis: "numbers: eins kept before und (einsundzwanzig)",
    z: 'return u ? (u === 1 ? "ein" : ZAHL[u]) + "und" + tens : tens;', na: 'return u ? ZAHL[u] + "und" + tens : tens;' },
  { plik: DLEX, test: T_DRILLS, opis: "numbers: tens before units (zwanzigundein)",
    z: 'return u ? (u === 1 ? "ein" : ZAHL[u]) + "und" + tens : tens;', na: 'return u ? tens + "und" + (u === 1 ? "ein" : ZAHL[u]) : tens;' },
  { plik: DLEX, test: T_DRILLS, opis: "numbers: eins kept before tausend",
    z: '.replace(/eins$/, "ein")', na: '.replace(/xyz$/, "ein")' },
  { plik: DLEX, test: T_DRILLS, opis: "numbers: einhundert not accepted",
    z: '(c === 1 ? (o.einH ? "ein" : "") : ZAHL[c])', na: '(c === 1 ? "" : ZAHL[c])' },
  { plik: DLEX, test: T_DRILLS, opis: "numbers: year-style hundreds not accepted",
    z: "if (n >= 1100 && n <= 1999) {", na: "if (false) {" },
  { plik: DLEX, test: T_DRILLS, opis: "clock: the ss spelling of dreißig not accepted",
    z: '"es ist " + f; }));\n    out.slice().forEach(function (w) { addUnique(out, w.replace(/ß/g, "ss")); });',
    na: '"es ist " + f; }));' },
  { plik: DLEX, test: T_DRILLS, opis: "clock: halb names the current hour",
    z: '30: ["halb " + nx],', na: '30: ["halb " + a],' },
  { plik: DLEX, test: T_DRILLS, opis: "clock: eins Uhr instead of ein Uhr",
    z: 'function hourUhr(h) { return h === 1 ? "ein" : below100(h); }', na: "function hourUhr(h) { return below100(h); }" },
  { plik: DLEX, test: T_DRILLS, opis: "clock: the hour after twelve does not wrap to eins",
    z: "nx = hourBare(h12 % 12 + 1)", na: "nx = hourBare(h12 + 1)" },
  { plik: DLEX, test: T_DRILLS, opis: "clock: dreiviertel not accepted",
    z: ', "dreiviertel " + nx]', na: "]" },
  { plik: DLEX, test: T_DRILLS, opis: "clock: no 12-hour reading of an afternoon time",
    z: "(h24 === 0 ? [h24] : [h24, h12]).forEach(function (h) {", na: "[h24].forEach(function (h) {" },
  { plik: DLEX, test: T_DRILLS, opis: "clock: 0:xx also read as zwölf Uhr (noon)",
    z: "(h24 === 0 ? [h24] : [h24, h12]).forEach(function (h) {", na: "[h24, h12].forEach(function (h) {" },
  { plik: DLEX, test: T_DRILLS, opis: "clock: no bare eins for one o'clock",
    z: ' : h12 === 1 ? ["eins"] : [],', na: " : [],"},
  { plik: DRILLS, test: T_DRILLS, opis: "pronouns: cue equal to the answer allowed",
    z: "return cue && cue.toLowerCase() !== p[kase].toLowerCase();", na: "return !!cue;" },
  { plik: DLEX, test: T_DRILLS, opis: "clock: no es ist variants",
    z: 'bare.concat(bare.map(function (f) { return "es ist " + f; }))', na: "bare" },
  { plik: DLEX, test: T_DRILLS, opis: "dates: -st ending from the 20th replaced by -t",
    z: 'below100(n) + "st"', na: 'below100(n) + "t"' },
  { plik: DLEX, test: T_DRILLS, opis: "dates: the 8th loses its irregular stem",
    z: ', 8: ["acht"] };', na: " };" },
  { plik: DLEX, test: T_DRILLS, opis: "dates: no accusative form (den dritten)",
    z: '[["am ", "en"], ["der ", "e"], ["den ", "en"]]', na: '[["am ", "en"], ["der ", "e"]]' },
  { plik: DLEX, test: T_DRILLS, opis: "pronouns: ihnen replaced by sie in the dative",
    z: 'dat: "ihnen"', na: 'dat: "sie"' },
  { plik: DRILLS, test: T_DRILLS, opis: "pronouns: plural subject takes the singular verb",
    z: "[who.plural ? 1 : 0]", na: "[0]" },
  { plik: DRILLS, test: T_DRILLS, opis: "dates: every month has 31 days",
    z: "Math.floor(rnd() * Lex.MONTH_DAYS[month])", na: "Math.floor(rnd() * 31)" },
  { plik: DRILLS, test: T_DRILLS, opis: "numbers: one million never asked",
    z: ", [1000000, 1000000]];", na: "];" },
  { plik: DDE, test: T_DRILLS, opis: "articles: masculine accusative den replaced by der",
    z: "akk: [\"den\", \"die\", \"das\", \"die\"],", na: "akk: [\"der\", \"die\", \"das\", \"die\"]," },
  { plik: DDE, test: T_DRILLS, opis: "articles: dative plural den replaced by die",
    z: "dat: [\"dem\", \"der\", \"dem\", \"den\"],", na: "dat: [\"dem\", \"der\", \"dem\", \"die\"]," },
  { plik: DDE, test: T_DRILLS, opis: "articles: ein given a plural",
    z: "if (indefinite) return plural ? null : INDEFINITE[kase][COLUMN[gender]];", na: "if (indefinite) return INDEFINITE[kase][COLUMN[gender]];" },
  { plik: DDE, test: T_DRILLS, opis: "nouns: dative plural without -n",
    z: "if (kase === \"dat\" && !/[ns]$/.test(noun.pl)) return noun.pl + \"n\";", na: "if (false) return noun.pl + \"n\";" },
  { plik: DDE, test: T_DRILLS, opis: "nouns: -n added after s as well",
    z: "!/[ns]$/.test(noun.pl)", na: "!/[n]$/.test(noun.pl)" },
  { plik: DDE, test: T_DRILLS, opis: "contractions: zur dropped",
    z: "\"zu der\": \"zur\", ", na: "\"zu der\": \"zu der\", " },
  { plik: DDE, test: T_DRILLS, opis: "contractions: ins dropped",
    z: "\"in das\": \"ins\", ", na: "\"in das\": \"in das\", " },
  { plik: DDE, test: T_DRILLS, opis: "contractions: preposition lookup ignores the article",
    z: "return CONTRACTIONS[prep + \" \" + art] || null;", na: "return CONTRACTIONS[prep + \" dem\"] || null;" },
  { plik: DDE, test: T_DRILLS, opis: "prepositions: wechsel list loses zwischen",
    z: ", \"neben\", \"zwischen\"]", na: ", \"neben\"]" },
  { plik: DDE, test: T_DRILLS, opis: "aux: sein verbs not read from SEIN_VERBS",
    z: "global.VERB_TABLES.SEIN_VERBS.forEach(function (inf) {\n    if (SEIN_CORE.indexOf(inf) >= 0)", na: "SEIN_CORE.forEach(function (inf) {\n    if (inf)" },
  { plik: DDE, test: T_DRILLS, opis: "aux: reflexives take sein",
    z: "{ inf: inf, aux: \"haben\", refl: true }", na: "{ inf: inf, aux: \"sein\", refl: true }" },
  { plik: DRILLS, test: T_DRILLS, opis: "prepositions: wechsel always answered as dative",
    z: "kase = motion ? \"akk\" : \"dat\";", na: "kase = \"dat\";" },
  { plik: DRILLS, test: T_DRILLS, opis: "prepositions: the bare answer accepted with a changed noun",
    z: "a: changed ? [full] : [full, head],", na: "a: [full, head]," },
  { plik: DRILLS, test: T_DRILLS, opis: "articles: nominative cue in the dative frame list",
    z: "dat: [\"helfe\", \"danke\", \"antworte\"]", na: "dat: [\"helfe\", \"danke\", \"antworte\", \"sehe\"]" },
  { plik: DRILLS, test: T_DRILLS, opis: "articles: ein allowed before a plural",
    z: "var indefinite = !plural && rnd() < 0.5;", na: "var indefinite = rnd() < 0.5;" },
  { plik: DRILLS, test: T_DRILLS, opis: "articles: dative frames take every noun",
    z: "kase === \"dat\" ? LexDe.NOUNS.filter(function (n) { return n.person; }) : LexDe.NOUNS", na: "LexDe.NOUNS" },
  { plik: DRILLS, test: T_DRILLS, opis: "tags: per-task tag ignored",
    z: "var tag = ex.tag || topic.tag;", na: "var tag = topic.tag;" },
  { plik: DRILLS, test: T_DRILLS, opis: "tags: a weak secondary tag not matched",
    z: "x.tags.indexOf(o.weakTag) >= 0", na: "x.tag === o.weakTag" },
  { plik: DRILLS, test: T_DRILLS, opis: "aux: both-verbs asked as a single choice",
    z: "if (a === null) {", na: "if (a === null && false) {" },
  { plik: VERBS_JS, test: T_VERBS_PREFIX, opis: "verbs: um- verbs marked separable never split",
    z: 'return kind === "sep" ? cut(inf, variable[0]) : null;', na: "return null;" },
  { plik: VERBS_JS, test: T_VERBS_PREFIX, opis: "verbs: einigen no longer protected from the ein- split",
    z: "abonnieren|einen|einigen|losen", na: "abonnieren|einen|losen" },
  { plik: VERBS_JS, test: T_VERBS, opis: "verbs: reflexive verbs take sein like their plain verb",
    z: 'return parsed.reflexive ? "haben" : auxiliary(parsed.full);', na: "return auxiliary(parsed.full);" },
  { plik: VERBS_JS, test: T_VERBS, opis: "verbs: bereiten treated as be + reiten",
    z: "if (UNRELATED_VERBS.test(inf)) return null;", na: "if (false) return null;" },
];

/* ---------------- Running ---------------- */

const argv = process.argv.slice(2);
const tylkoIdx = argv.indexOf("--tylko");
const TYLKO = tylkoIdx >= 0 ? argv[tylkoIdx + 1] : null;

const zrodla = new Map();
for (const m of MUTACJE) {
  if (!zrodla.has(m.plik)) zrodla.set(m.plik, readFileSync(join(ROOT, m.plik), "utf8"));
}

/** How many times a string occurs in the file. */
function ile(hay, igla) {
  return hay.split(igla).length - 1;
}

/**
 * One run of a test file, with an optional substitution of an engine file.
 * @param {string} test  the path of the test file
 * @param {object} [podmiana] a map "path in the repo" -> "path of the mutated copy"
 */
function suita(test, podmiana) {
  const env = { ...process.env };
  if (podmiana) env.LINGUAI_PODMIANA = JSON.stringify(podmiana);
  else delete env.LINGUAI_PODMIANA;
  const out = spawnSync(process.execPath, ["--test", test], { cwd: ROOT, encoding: "utf8", env });
  const liczba = (n) => Number((out.stdout.match(new RegExp("^. " + n + " (\\d+)$", "m")) || [])[1]);
  return { pass: liczba("pass"), fail: liczba("fail") };
}

const katalog = mkdtempSync(join(tmpdir(), "linguai-mut-"));
const wyniki = [];
let bledy = 0;

try {
  /* A green baseline is a condition of meaning: from a red suite there is no
     way to tell whether the mutation knocked it over or it was already
     broken. */
  for (const test of [...new Set(MUTACJE.map(m => m.test))]) {
    const { pass, fail } = suita(test);
    if (fail !== 0 || !pass) {
      console.error(`BŁĄD — ${test} nie jest zielony przed mutacjami (pass ${pass}, fail ${fail}).`);
      process.exit(1);
    }
  }

  for (const m of MUTACJE) {
    if (TYLKO && !m.opis.includes(TYLKO) && !m.plik.includes(TYLKO)) continue;
    const src = zrodla.get(m.plik);
    const wystapienia = ile(src, m.z);

    if (wystapienia !== 1) {
      wyniki.push({
        stan: wystapienia === 0 ? "NIE MA" : "NIEJEDNOZNACZNE", m,
        info: wystapienia === 0 ? "fragment zniknął z pliku" : `${wystapienia} wystąpień`
      });
      bledy++;
      continue;
    }

    const kopia = join(katalog, basename(m.plik));
    writeFileSync(kopia, src.replace(m.z, m.na));
    const { fail } = suita(m.test, { [m.plik]: kopia });

    if (fail > 0) wyniki.push({ stan: "CZERWONE", m, info: `fail ${fail}` });
    else { wyniki.push({ stan: "ZIELONE", m, info: "nikt tego nie pilnuje" }); bledy++; }
  }
} finally {
  rmSync(katalog, { recursive: true, force: true });
}

/* ---------------- The report ---------------- */

for (const w of wyniki) {
  console.log(`${w.stan === "CZERWONE" ? "✔" : "✖"} ${w.stan.padEnd(16)} ` +
    `${w.m.opis.padEnd(52)} ${w.info}`);
}

const zlapane = wyniki.filter(w => w.stan === "CZERWONE").length;
console.log(`\nZŁAPANE ${zlapane}/${wyniki.length} mutacji ` +
  `(${[...new Set(wyniki.map(w => w.m.plik))].join(", ")}).`);
console.log("Zasięg jest wąski i zadeklarowany: to nie jest miara całego silnika.");

if (bledy) {
  console.error(`\nBŁĄD — ${bledy} mutacji bez czerwonego albo nie do zastosowania.`);
  process.exit(1);
}
