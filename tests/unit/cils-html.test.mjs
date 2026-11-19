/* ============================================================
   cils-html.js - the answer grid of the exam simulation.

   These are data -> string functions, so they are checked here rather than
   with Playwright: to see the listening section in a browser you have to
   start an attempt and have the clock on your back.

   What exactly is guarded here - because the point is not that a string was
   produced:

   - the radio `name` is SHARED within one question and DIFFERENT across two.
     Shared across two questions means answering the second erases the first,
     and the student only sees it on the result screen;
   - `data-p` and `data-i` match the grid cils-run.js writes answers into.
     Off by one = every answer recorded under somebody else's question;
   - the number of cloze gaps matches the number of items, numbered from 1;
   - a section with no microphone shows no record button (because clicking it
     would end in an exception);
   - the clock has no content in its live region until the timer writes it.
   ============================================================ */
import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { loadEngine, CORE, VERBS, UI } from "./_harness.mjs";

const PLIKI = [
  ...CORE, ...VERBS,
  "data/core/cils.js",
  "assets/js/cils.js",
  "assets/js/writing.js",
  "assets/js/cils-html.js"
];

function silnik() {
  const box = loadEngine({ files: PLIKI });
  box.Core.load();
  return box;
}

function html() { return silnik().sandbox.CilsHtml; }

for (const [lang, unofficial, unaffiliated, noMaterial] of [
  ["it", /non ufficiale/, /non affiliata al Goethe-Institut/, /Non utilizza materiali ufficiali/],
  ["en", /Unofficial/, /not affiliated with the Goethe-Institut/, /uses no official.*material/],
  ["es", /no oficial/, /sin afiliación al Goethe-Institut/, /No utiliza materiales oficiales/],
  ["fr", /non officielle/, /sans affiliation au Goethe-Institut/, /n’utilise aucun matériel officiel/],
  ["pl", /Nieoficjalna/, /niezwiązana z Goethe-Institut/, /Nie wykorzystuje oficjalnych materiałów/]
]) {
  test(`entry and report HTML carry the full unofficial disclaimer in ${lang}`, () => {
    const { sandbox: box } = loadEngine({ files: [...PLIKI, ...UI] });
    box.I18n.set(lang);
    const disclaimer = box.I18n.t("cils.thresholdSource");
    assert.match(disclaimer, /Goethe-Zertifikat B1/);
    for (const meaning of [unofficial, unaffiliated, noMaterial]) assert.match(disclaimer, meaning);
    const structure = box.I18n.t("cils.structure");
    assert.match(structure, /Lesen.*Hören.*Schreiben.*Sprechen/);
    assert.equal(box.I18n.t("cils.sectionsLine"), "Lesen, Hören, Schreiben, Sprechen");
    const entry = box.CilsHtml.lista([{ id: "mock", titoloIt: "Modelltest" }]);
    assert.ok(entry.includes(box.Core.esc(disclaimer)));
    assert.ok(entry.includes(box.Core.esc(structure)));
    const result = box.Cils.esito({ lettura: { punti: 1, max: 1 }, ascolto: { punti: 0, max: 1 } });
    const report = box.CilsHtml.podsumowanie(result, () => false, null, null);
    assert.ok(report.includes(box.Core.esc(disclaimer)));
    assert.ok(report.includes("1 / 1"));
  });
}

/** How many times a pattern occurs in a string. */
function ile(hay, igla) {
  return hay.split(igla).length - 1;
}

/* The section data is built here rather than taken from the course: the test
   must read without opening data/core/cils.js, and the shape is a contract
   anyway. */
const LETTURA = {
  id: "lettura", minuti: 30,
  prove: [{
    consegna: "Leggi il testo e rispondi.",
    titolo: "Vacanze",
    t: "vf",
    testo: ["Marco va al mare.", "Parte domenica."],
    items: [{ q: "Marco va al mare", a: 0 }, { q: "Marco parte lunedì", a: 1 }]
  }]
};

const ASCOLTO = {
  id: "ascolto", minuti: 30,
  prove: [{
    consegna: "Ascolta e scegli.",
    t: "mcq",
    brani: [[{ it: "Ciao" }], [{ it: "Buongiorno" }]],
    items: [{ q: "Che cosa dice?", opts: ["Ciao", "Addio"], a: 0 }]
  }]
};

const CLOZE = {
  id: "lettura", minuti: 20,
  prove: [{
    consegna: "Completa il testo.",
    t: "cloze",
    testo: ["Vado", "scuola", "piedi."],
    items: [{ opts: ["a", "in"], a: 1 }, { opts: ["a", "con"], a: 0 }]
  }]
};

const SCRITTA = {
  id: "scritta", minuti: 60,
  consegna: "Scrivi una mail.",
  tracce: [{ it: "Una mail al direttore" }, { it: "Un messaggio a un amico" }]
};

const ORALE = {
  id: "orale", minuti: 15,
  presentazione: ["Come ti chiami?"],
  /* Same shape as the written `tracce`, because after the exam the student
     writes down what they said and that text goes through the same
     `Writing.analyse`. Without `richiede` the oral row of the report would
     have nothing to detect — which is how it was until ADR-009 point 5 was
     finally honoured. */
  argomenti: [
    { it: "Il lavoro", richiede: [{ key: "orario", any: ["orario", "turni"], etichetta: "gli orari" }] },
    { it: "La famiglia", richiede: [{ key: "chi", any: ["moglie", "figli"], etichetta: "con chi vivi" }] }
  ]
};

describe("the list of simulations", () => {
  const SYMULACJE = [{ id: "sim-1", titoloIt: "Simulazione 1" }, { id: "sim-2", titoloIt: "Simulazione 2" }];

  test("one row per simulation, with the id on the button", () => {
    const out = html().lista(SYMULACJE);
    assert.equal(ile(out, "list-row"), 2 * 2, "the row and its __main");
    assert.equal(ile(out, "js-start"), 2);
    assert.match(out, /data-id="sim-1"/);
    assert.match(out, /data-id="sim-2"/);
    assert.ok(out.includes("Simulazione 2"));
  });

  test("the simulator's limitation stands BEFORE the list, not in the summary", () => {
    /* Two skills out of four. Anyone who learns that at the end went through
       the whole session with a false expectation - which is why the warning
       must come out before the first start button, not somewhere on the page.

       We look for "cils.limit</div>", not "cils.limit": the bare substring is
       also inside "cils.limitLabel", so an assertion on it passed even with
       the whole warning text cut out. That came from the mutation gate. */
    const out = html().lista(SYMULACJE);
    const granica = out.indexOf("cils.limit</div>");
    assert.ok(granica >= 0, `the warning text has to be in the output: ${out.slice(0, 120)}`);
    assert.ok(granica < out.indexOf("js-start"),
      "the warning about the limitation must precede the start buttons");
    assert.ok(out.includes("cils.thresholdSource"), "the source of the threshold is declared");
  });

  test("no simulations leaves no ghost row", () => {
    const out = html().lista([]);
    assert.equal(ile(out, "js-start"), 0);
    assert.ok(out.includes("cils.limit"), "the preamble stays");
  });
});

describe("the bar with the clock", () => {
  test("the step and the number of sections go into the string", () => {
    const out = html().barra(2, 4);
    assert.match(out, /cils\.stepOf\(i=2,n=4\)/);
  });

  test("the clock is hidden from the screen reader and the live region starts EMPTY", () => {
    const out = html().barra(1, 4);
    assert.match(out, /class="cils-clock js-clock" aria-hidden="true"/);
    /* The timer writes the content, and only three times per section. Were it
       to start here, a screen reader would read it out on every redraw. */
    assert.match(out, /js-clock-live"[^>]*><\/span>/);
  });
});

describe("the section footer", () => {
  test("the button label comes from a key, the warning starts hidden", () => {
    const H = html();
    assert.match(H.coda("cils.closeSection"), /js-next">cils\.closeSection</);
    assert.match(H.coda("cils.finish"), /js-next">cils\.finish</);
    assert.match(H.coda("cils.finish"), /js-expired" hidden/);
  });
});

describe("closed section: vero/falso", () => {
  test("every question has a radio group of its own", () => {
    const out = html().corpoChiuso(LETTURA);
    /* Two questions, two answers each: four radios in two groups. One group
       for both questions = the second answer erases the first. */
    assert.equal(ile(out, 'name="p0i0"'), 2);
    assert.equal(ile(out, 'name="p0i1"'), 2);
  });

  test("richtig and falsch carry the values 0 and 1, in that order", () => {
    const out = html().corpoChiuso(LETTURA);
    assert.match(out, /value="0"> richtig<\/label>/);
    assert.match(out, /value="1"> falsch<\/label>/);
  });

  test("binary labels stay German: this is exam content", () => {
    const out = html().corpoChiuso(LETTURA);
    assert.match(out, /> richtig<\/label>/);
    assert.match(out, /> falsch<\/label>/);
  });

  test("the data-p/data-i grid matches the task and item index", () => {
    const out = html().corpoChiuso(LETTURA);
    assert.equal(ile(out, 'data-p="0" data-i="0"'), 2);
    assert.equal(ile(out, 'data-p="0" data-i="1"'), 2);
  });

  test("the task text and the questions are in the output", () => {
    const out = html().corpoChiuso(LETTURA);
    assert.ok(out.includes("Marco va al mare."), "a paragraph of the text");
    assert.ok(out.includes("Marco parte lunedì"), "the text of the question");
    assert.ok(out.includes("Vacanze"), "the task title");
  });

  test("the body is wrapped in js-body, one card per task", () => {
    const out = html().corpoChiuso(LETTURA);
    assert.match(out, /^<div class="js-body">/);
    assert.equal(ile(out, "card cils-prova"), 1);
  });
});

describe("closed section: multiple choice", () => {
  test("one radio per option, the value is the option index", () => {
    const out = html().corpoChiuso(ASCOLTO);
    assert.equal(ile(out, 'name="p0i0"'), 2);
    assert.match(out, /value="0"> Ciao<\/label>/);
    assert.match(out, /value="1"> Addio<\/label>/);
  });

  test("HTML in an option is escaped, not injected", () => {
    const zHtml = {
      id: "lettura", minuti: 10,
      prove: [{ consegna: "x", t: "mcq", items: [{ q: "y", opts: ["<b>sì</b>"], a: 0 }] }]
    };
    const out = html().corpoChiuso(zHtml);
    assert.ok(!out.includes("<b>sì</b>"), "the tag must not go in raw");
    assert.ok(out.includes("&lt;b&gt;"), "it has to be escaped");
  });
});

describe("closed section: listening", () => {
  test("one button per recording, with the task and recording index", () => {
    const out = html().corpoChiuso(ASCOLTO);
    assert.equal(ile(out, "js-play"), 2);
    assert.match(out, /data-p="0" data-b="0"/);
    assert.match(out, /data-p="0" data-b="1"/);
    assert.ok(out.includes("cils.twice"), "the note about two playbacks");
  });

  test("the reading section gets NEITHER an audio block NOR a playback note", () => {
    /* Counting "js-play" alone is not enough here, and that came from the
       mutation gate: removing the `sez.id === "ascolto"` condition adds no
       button in the reading section, because the task has no recordings - it
       adds an EMPTY block saying "you will hear the text twice" under a text
       nobody listens to. An assertion on the buttons alone passed through that
       defect. */
    const out = html().corpoChiuso(LETTURA);
    assert.equal(ile(out, "js-play"), 0);
    assert.equal(ile(out, "cils-audio"), 0, "an empty audio block is a defect too");
    assert.ok(!out.includes("cils.twice"), "the note about two playbacks does not apply to reading");
  });
});

describe("closed section: cloze", () => {
  test("as many numbered gaps as there are items - not as many as text chunks", () => {
    const out = html().corpoChiuso(CLOZE);
    assert.equal(ile(out, "cils-gap"), 2, "three chunks, two items");
    assert.ok(out.includes("(1)"), "numbering from 1");
    assert.ok(out.includes("(2)"));
    assert.ok(!out.includes("(3)"), "there is no gap after the last chunk");
  });

  test("cloze does not enter a task of another type", () => {
    assert.equal(ile(html().corpoChiuso(LETTURA), "cils-gap"), 0);
  });
});

const GAP_TASKS = {
  lueckeAbbina: { t: "lueckeAbbina", consegna: "Ergänzen", testo: ["A", "B", "C"],
    opts: ["eins", "zwei", "drei", "vier"], items: [{ a: 0 }, { a: 1 }] },
  lueckeMc: { t: "lueckeMc", consegna: "Ergänzen", testo: ["A", "B", "C"],
    items: [{ opts: ["eins", "zwei", "drei"], a: 0 }, { opts: ["vier", "fünf", "sechs"], a: 1 }] }
};

function gapRadios(out) {
  return [...out.matchAll(/name="([^"]+)" data-p="(\d+)" data-i="(\d+)" value="(\d+)"> ([^<]*)</g)];
}

for (const type of ["lueckeAbbina", "lueckeMc"]) {
  test(`${type} renders numbered gaps and independent answer groups`, () => {
    const out = html().corpoChiuso({ id: "sprachbausteine", prove: [GAP_TASKS[type]] });
    assert.equal(ile(out, "cils-gap"), 2);
    assert.match(out, /\(1\).*\(2\)/);
    const radios = gapRadios(out);
    const per = type === "lueckeAbbina" ? 4 : 3;
    assert.equal(radios.length, 2 * per);
    for (const gap of [0, 1]) {
      const group = radios.filter(r => r[3] === String(gap));
      assert.equal(group.length, per);
      assert.deepEqual(group.map(r => r[4]), Array.from({ length: per }, (_, k) => String(k)));
      assert.equal(new Set(group.map(r => r[1])).size, 1);
      assert.equal(group[0][1], "p0i" + gap);
    }
    assert.notEqual(radios[0][1], radios[per][1]);
  });
}

test("lueckeAbbina offers the shared list in full to every gap", () => {
  const out = html().corpoChiuso({ id: "sprachbausteine", prove: [GAP_TASKS.lueckeAbbina] });
  const radios = gapRadios(out);
  for (const gap of ["0", "1"]) {
    assert.deepEqual(radios.filter(r => r[3] === gap).map(r => r[5].trim()),
      ["eins", "zwei", "drei", "vier"]);
  }
});

test("Sprachbausteine escape markup in the text and in the options", () => {
  const evil = "<b>&";
  const abbina = { t: "lueckeAbbina", consegna: "x", testo: [evil, "z"], opts: [evil, "y"], items: [{ a: 0 }] };
  const mc = { t: "lueckeMc", consegna: "x", testo: [evil, "z"], items: [{ opts: [evil, "b", "c"], a: 0 }] };
  for (const task of [abbina, mc]) {
    const out = html().corpoChiuso({ id: "sprachbausteine", prove: [task] });
    assert.ok(out.includes("&lt;b&gt;&amp;"));
    assert.ok(!out.includes("<b>&"));
  }
  assert.ok(html().corpoChiuso({ id: "sprachbausteine", prove: [mc] })
    .includes("a. &lt;b&gt;&amp;"));
});

for (const lang of ["it", "en", "es", "fr", "pl"]) {
  test(`each Sprachbausteine gap is a named radio group in ${lang}`, () => {
    const { sandbox: box } = loadEngine({ files: [...PLIKI, ...UI] });
    box.I18n.set(lang);
    for (const type of ["lueckeAbbina", "lueckeMc"]) {
      const out = box.CilsHtml.corpoChiuso({ id: "sprachbausteine", prove: [GAP_TASKS[type]] });
      const legends = [...out.matchAll(/<fieldset[^>]*>\s*<legend[^>]*>([^<]+)<\/legend>/g)].map(m => m[1]);
      assert.deepEqual(legends, [box.I18n.t("cils.gapN", { n: 1 }), box.I18n.t("cils.gapN", { n: 2 })]);
      assert.ok(legends[0] !== "cils.gapN" && /1/.test(legends[0]) && !/\{n\}/.test(legends[0]));
      assert.equal(ile(out, "<fieldset"), 2);
    }
  });
}

describe("written production", () => {
  test("the first traccia is selected, the others are not", () => {
    const out = html().corpoScritto(SCRITTA);
    assert.equal(ile(out, 'name="traccia"'), 2);
    assert.equal(ile(out, "checked"), 1, "exactly one selected by default");
    assert.match(out, /value="0" checked/);
  });

  test("the textarea and the counter are in place, the counter as a live region", () => {
    const out = html().corpoScritto(SCRITTA);
    assert.match(out, /class="field cils-ta js-text"/);
    assert.match(out, /js-count" role="status" aria-live="polite"/);
  });

  test("the instruction and the traccia titles are in the output", () => {
    const out = html().corpoScritto(SCRITTA);
    assert.ok(out.includes("Scrivi una mail."));
    assert.ok(out.includes("Una mail al direttore"));
  });
});

describe("oral production", () => {
  test("with a microphone there is a record button", () => {
    const out = html().corpoOrale(ORALE, "");
    assert.match(out, /js-rec" aria-pressed="false"/);
    assert.ok(out.includes("js-play-mine"), "playback of your own recording");
  });

  test("with no microphone there is NO button, there is a reason", () => {
    /* A button whose click ends in an exception is worse than no button: a
       student under the clock clicks it and loses seconds for nothing. */
    const out = html().corpoOrale(ORALE, "rec.errNoMic");
    assert.equal(ile(out, "js-rec"), 0);
    assert.ok(out.includes("rec.errNoMic"), "the reason for its absence is on screen");
  });

  test("argomenti as radios with the first selected", () => {
    const out = html().corpoOrale(ORALE, "");
    assert.equal(ile(out, 'name="arg"'), 2);
    assert.match(out, /name="arg" value="0" checked/);
    assert.ok(out.includes("Il lavoro"), "the topic itself, not the object around it");
  });

  /* ADR-009: the oral production is detected, never scored, so there is no
     self-assessment checklist to tick. The radios are the paired positive:
     the form is rendered, it just has no checkboxes. */
  test("the oral task has no self-assessment checklist", () => {
    const out = html().corpoOrale(ORALE, "");
    assert.equal(ile(out, 'name="arg"'), 2, "the form itself is there");
    assert.equal(ile(out, 'type="checkbox"'), 0, out);
  });

  test("the section is marked as not scored", () => {
    const out = html().corpoOrale(ORALE, "");
    assert.ok(out.includes("cils.oralNotScored"));
  });

  test("the review after the exam: a field to write in and the topic above it", () => {
    const out = html().rewizja({ argomento: ORALE.argomenti[0], testo: "" }, false);
    assert.ok(out.includes("js-said"), "the field the student writes in");
    assert.ok(out.includes("Il lavoro"), "the topic they spoke about");
    assert.ok(out.includes("js-play-mine"), "and their own recording to listen back to");
    assert.ok(!out.includes("cils-clock"), "no clock: this is not a fifth exam section");
  });

  test("with no recording there is no play button, and the field stays", () => {
    /* The recording lives in memory and is gone after a reload. Writing down
       what you said is still worth doing then — from memory rather than from
       the tape — so only the button disappears. */
    const out = html().rewizja({ argomento: ORALE.argomenti[0], testo: "" }, true);
    assert.ok(!out.includes("js-play-mine"), out);
    assert.ok(out.includes("js-said"), out);
  });
});

describe("the abilità table in the summary", () => {
  function esito(box, punti) {
    return box.sandbox.Cils.esito(Object.fromEntries(Object.entries(punti).map(([id, value]) => [id, { punti: value, max: 12 }])));
  }

  test("a skill above the threshold gets a ✓, below it a ✗", () => {
    const box = silnik();
    const out = box.sandbox.CilsHtml.abilita(esito(box, { ascolto: 9, lettura: 3 }), () => false);
    assert.ok(out.includes("9 / 12 ✓"), `above the threshold: ${out}`);
    assert.ok(out.includes("3 / 12 ✗"), `below the threshold: ${out}`);
  });

  test("an unmeasured skill says so plainly instead of showing a zero", () => {
    const box = silnik();
    const out = box.sandbox.CilsHtml.abilita(esito(box, { ascolto: 9, lettura: 9 }), () => false);
    assert.ok(out.includes("cils.notMeasured"), "the written and oral parts are not scored");
    assert.ok(!out.includes("0 / 12"), "a zero would look like a measured result");
  });

  test("a section whose time ran out is marked", () => {
    const box = silnik();
    const H = box.sandbox.CilsHtml;
    const e = esito(box, { ascolto: 9, lettura: 3 });
    const zeScadla = H.abilita(e, (a) => a === "lettura");
    const bez = H.abilita(e, () => false);
    assert.ok(zeScadla.includes("cils.expiredMark"), "a mark on the section whose time is up");
    assert.ok(!bez.includes("cils.expiredMark"), "with time to spare there is no mark");
  });

  test("the percentage threshold comes from the exam format", () => {
    const box = silnik();
    const out = box.sandbox.CilsHtml.abilita(esito(box, { ascolto: 9 }), () => false);
    assert.match(out, /cils\.threshold\(n=60\)/);
  });
});

describe("the production cards in the summary", () => {
  const PISEMNA = {
    traccia: { it: "Una mail", richiede: [{ word: "cordiali saluti", etichetta: "formula di chiusura" }] },
    testo: "Buongiorno, le scrivo per informazione. Cordiali saluti."
  };

  test("an untouched section leaves no empty card", () => {
    const H = html();
    assert.equal(H.scritta(null), "");
    assert.equal(H.orale(undefined), "");
  });

  test("a written text gives a word count and the requirement label IN ITALIAN", () => {
    const out = html().scritta(PISEMNA);
    assert.ok(out.includes("formula di chiusura"), "the label from the data, not a key");
    assert.ok(out.includes("✓"), "the requirement is met");
    assert.match(out, /cils\.wordsOf\(max=120,min=80,n=7\)/);
  });

  test("a text outside the range is marked, one inside it is not", () => {
    const H = html();
    const krotki = H.scritta(PISEMNA);
    const dlugi = H.scritta({ traccia: PISEMNA.traccia, testo: Array(95).fill("parola").join(" ") });
    assert.ok(krotki.includes("cils.outOfRange"), "seven words is too few");
    assert.ok(!dlugi.includes("cils.outOfRange"), "95 words fits within 80-120");
  });

  test("an unmet requirement gets a ✗", () => {
    const out = html().scritta({ traccia: PISEMNA.traccia, testo: "Ciao, tutto bene." });
    assert.ok(out.includes("✗"), `the closing formula is missing: ${out}`);
  });

  test("the oral card runs the student's own account through the same detection", () => {
    const out = html().orale({ argomento: ORALE.argomenti[0], testo: "Faccio i turni di notte in fabbrica." });
    assert.ok(out.includes("Il lavoro"), out);
    assert.ok(out.includes("✓"), "the requirement it met");
    /* The LABEL, not the key. "orario" is what the data calls that entry
       internally; "gli orari" is what a person reads. The written card lost
       this distinction once already, which is why it has a mutation of its
       own, and the oral card is a second copy of the same line. */
    assert.ok(out.includes("gli orari"), out);
    assert.ok(!out.includes(">orario<"), out);
    assert.ok(out.includes("cils.oralOwnWords"), "said to be their words, not a transcript");
  });

  test("with nothing written down the card says so instead of showing crosses", () => {
    /* A row of crosses reads as "you did none of this", which is a verdict,
       and a wrong one: nobody checked anything. */
    const out = html().orale({ argomento: ORALE.argomenti[0], testo: "" });
    assert.ok(out.includes("cils.oralNoText"), out);
    assert.ok(!out.includes("✗"), out);
  });
});

describe("the whole summary", () => {
  const PISEMNA = {
    traccia: { it: "Una mail", richiede: [{ word: "cordiali saluti", etichetta: "formula di chiusura" }] },
    testo: "Buongiorno. Cordiali saluti."
  };

  test("a skill below the threshold yields a negative verdict", () => {
    const box = silnik();
    const e = box.sandbox.Cils.esito({ ascolto: { punti: 9, max: 12 }, lettura: { punti: 3, max: 12 } });
    const out = box.sandbox.CilsHtml.podsumowanie(e, () => false, null, null);
    assert.equal(e.verdetto, "sotto-soglia");
    assert.ok(out.includes("cils.verdictBelow"), "a negative verdict");
    assert.ok(!out.includes("cils.verdictUnknown"));
    /* A verdict with no stated source for the threshold is a number out of
       thin air: the student has no way to check where 7 out of 12 comes from.
       That came from the mutation gate - no summary test guarded it, though
       the list test did. */
    assert.ok(out.includes("cils.thresholdSource"), "the source of the threshold next to the verdict");
  });

  test("everything above the threshold does NOT give a \"passed\" verdict, only an undetermined one", () => {
    /* The asymmetry is content, not something left unfinished: the simulator
       measures two skills out of four, so it has no right to say "you will
       pass". */
    const box = silnik();
    const e = box.sandbox.Cils.esito({ ascolto: { punti: 11, max: 12 }, lettura: { punti: 10, max: 12 } });
    const out = box.sandbox.CilsHtml.podsumowanie(e, () => false, null, null);
    assert.ok(out.includes("cils.verdictUnknown"), `verdict: ${out}`);
    assert.ok(!out.includes("cils.verdictBelow"));
  });

  test("both ways out are on the screen", () => {
    const box = silnik();
    const out = box.sandbox.CilsHtml.podsumowanie(
      box.sandbox.Cils.esito({ ascolto: { punti: 9, max: 12 }, lettura: { punti: 9, max: 12 } }), () => false, null, null);
    assert.ok(out.includes("js-again"), "a fresh attempt");
    assert.ok(out.includes("js-list"), "back to the list");
  });

  test("the production cards appear only when the student reached them", () => {
    const box = silnik();
    const H = box.sandbox.CilsHtml;
    const e = box.sandbox.Cils.esito({ ascolto: { punti: 9, max: 12 }, lettura: { punti: 9, max: 12 } });
    const zProdukcja = H.podsumowanie(e, () => false, PISEMNA, { argomento: { it: "Il lavoro", richiede: [] }, testo: "Lavoro in fabbrica." });
    const bez = H.podsumowanie(e, () => false, null, null);
    assert.ok(zProdukcja.includes("formula di chiusura"), "the requirement of the written part");
    assert.ok(zProdukcja.includes("Il lavoro"), "the topic of the oral part");
    /* Not "cils.sec.scritta": that key also sits in the skills table row, so
       an assertion on it would always pass. The card has strings of its own. */
    assert.ok(!bez.includes("cils.writingNotScored"), "with no written part there is no card for it");
    assert.ok(zProdukcja.includes("cils.oralSummary"));
    assert.ok(!bez.includes("cils.oralSummary"), "with no oral part there is no card for it");
    /* The full class name with its quote: "cils-h" as a substring also
       catches "cils-hint", of which the summary has three. */
    assert.equal(ile(zProdukcja, 'class="cils-h"'), 2, "two headings of the production cards");
    assert.equal(ile(bez, 'class="cils-h"'), 0);
  });
});

test("the oral card marks unmet requirements with a cross", () => {
  const H = html();
  const argomento = ORALE.argomenti[0];
  assert.match(H.orale({ argomento, testo: "Lavoro in fabbrica." }), /<li>✗ gli orari<\/li>/);
  assert.match(H.orale({ argomento, testo: "Lavoro a turni." }), /<li>✓ gli orari<\/li>/);
});

test("Goethe closed Teile render texts, ads and independent answer groups", () => {
  const out = html().corpoChiuso({ id: "lettura", prove: [
    { t: "mc", testo: ["Lesetext"], items: [{ q: "Wohin?", opts: ["Berlin", "Bonn", "Köln"], a: 1 }] },
    { t: "abbina", annunci: [{ titolo: "Kurs", testo: "Deutsch lernen" }, { titolo: "Sport", testo: "Schwimmen" }],
      items: [{ q: "Sprache", a: 0 }, { q: "Musik", a: 2 }] },
    { t: "jn", testo: ["Leserbrief"], items: [{ q: "Einverstanden?", a: 0 }] }
  ] });
  for (const text of ["Lesetext", "Leserbrief", "a. Kurs", "b. Sport", "Deutsch lernen", "Schwimmen"]) assert.ok(out.includes(text), text);
  for (const i of [0, 1]) {
    assert.equal(ile(out, `name="p1i${i}"`), 3);
    assert.equal(ile(out, `data-p="1" data-i="${i}"`), 3);
  }
  assert.match(out, /value="2"> 0<\/label>/);
  assert.match(out, /value="0"> a\. Berlin<\/label>/);
  assert.match(out, /value="0"> Ja<\/label>/);
  assert.match(out, /value="1"> Nein<\/label>/);
});

test("all production Teile have their own prompts and writing fields", () => {
  const tasks = [
    { t: "schreiben", consegna: "Eine Mail", punti: ["Grund nennen"], parole: { min: 30, max: 40 } },
    { t: "schreiben", consegna: "Ein Beitrag", punti: ["Meinung sagen"], parole: { min: 60, max: 80 } }
  ];
  const out = html().corpoScritto({ prove: tasks });
  assert.equal(ile(out, "js-text"), 2);
  assert.equal(ile(out, "js-count"), 2);
  assert.match(out, /id="writing-0"/);
  assert.match(out, /for="writing-1"/);
  for (const text of ["Eine Mail", "Grund nennen", "Ein Beitrag", "Meinung sagen"]) assert.ok(out.includes(text));
  const oral = html().corpoOrale({ prove: tasks.map(p => ({ ...p, t: "sprechen" })) }, "rec.errNoMic");
  assert.ok(oral.includes("Grund nennen"));
  assert.ok(oral.includes("Meinung sagen"));
  assert.equal(ile(oral, 'name="arg"'), 0);
});
