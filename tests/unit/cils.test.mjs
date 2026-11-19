/* ============================================================
   The exam simulation: scoring and verdict.

   Two things this file guards more closely than any other test in the course.

   The first: a section where the time ran out has to give points for what
   the student managed to tick, not zero and not the full set. Zero would be
   a punishment for the clock doing its job, the full set would be a gift.

   The second: the verdict is ASYMMETRIC and that is not an oversight. One
   skill below the threshold is enough to say "not passed"; all of them above
   the threshold are NOT enough to say "passed", because two skills out of
   four are not graded here at all. The test for that second side matters
   more: it is the only place where the simulator could start promising an
   exam result.
   ============================================================ */
import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { loadEngine } from "./_harness.mjs";

function silnik() {
  const box = loadEngine({ files: ["data/core/cils.js", "assets/js/cils.js"] });
  return box.sandbox.Cils;
}

/* The seed in data/core/cils.js has an EMPTY listening shell and one reading
   task of six items, while these tests need the shape of a full simulation:
   a section worth 12 points made of a 6-item task (1 point each) and a
   12-item task (half a point each), eighteen items in all. The fixture is
   built here, from the seed's own sim-1 (title, writing and speaking shells
   stay the real ones), so the scoring is checked on the shape it has to
   handle and not on whatever the seed happens to contain this week. */
function symulacja(C) {
  const prova = (ile, peso) => ({
    t: "vf",
    puntiPerItem: peso,
    consegna: "Sind die Aussagen richtig oder falsch?",
    items: Array.from({ length: ile }, (_, i) => ({ q: `Aussage ${i + 1}`, a: i % 2 }))
  });
  const prawdziwa = C.sim("sim-1");
  const zamiana = {
    ascolto: { id: "ascolto", minuti: 20, prove: [prova(6, 1), prova(12, 0.5)] },
    lettura: { id: "lettura", minuti: 20, prove: [prova(12, 0.5), prova(6, 1)] }
  };
  return Object.assign({}, prawdziwa, {
    sezioni: prawdziwa.sezioni.map(s => zamiana[s.id] || s)
  });
}

describe("scoring the closed-answer tasks", () => {
  test("a full set of hits gives the section maximum", () => {
    const C = silnik();
    const sez = C.sezione(symulacja(C), "ascolto");
    const risp = sez.prove.map(p => p.items.map(i => i.a));
    const w = C.punteggioSezione(sez, risp);
    assert.equal(w.punti, 12);
    assert.equal(w.max, 12);
  });

  test("an omitted answer weighs the same as a wrong one, that is zero", () => {
    const C = silnik();
    const prova = C.sezione(symulacja(C), "ascolto").prove[0];
    const zle = prova.items.map(i => (i.a + 1) % 3);
    const puste = prova.items.map(() => null);
    assert.equal(C.punteggioProva(prova, zle).punti, 0);
    assert.equal(C.punteggioProva(prova, puste).punti, 0);
  });

  test("a prova of twelve items weighs half a point per item", () => {
    const C = silnik();
    const prova = C.sezione(symulacja(C), "ascolto").prove[1];
    const polowa = prova.items.map((it, i) => (i < 6 ? it.a : null));
    assert.equal(C.punteggioProva(prova, polowa).punti, 3);
  });

  test("time running out halfway leaves the points for what was ticked", () => {
    const C = silnik();
    const sez = C.sezione(symulacja(C), "lettura");
    /* The student got through the first task and not one item of the second. */
    const risp = [sez.prove[0].items.map(i => i.a), []];
    const w = C.punteggioSezione(sez, risp);
    assert.equal(w.punti, 6);
    assert.equal(w.date, 12);
    assert.equal(w.totali, 18);
  });
});

describe("werdykt", () => {
  test("one skill below the threshold settles a fail", () => {
    const C = silnik();
    const e = C.esito({ ascolto: { punti: 12, max: 12 }, lettura: { punti: 6, max: 12 } });
    assert.equal(e.verdetto, "sotto-soglia");
    assert.equal(e.abilita.lettura.sopraSoglia, false);
  });

  test("everything above the threshold does NOT give a \"passed\" verdict", () => {
    const C = silnik();
    const e = C.esito({ ascolto: { punti: 12, max: 12 }, lettura: { punti: 12, max: 12 } });
    assert.equal(e.verdetto, "indeterminato");
    assert.notEqual(e.verdetto, "superato");
  });

  test("writing and speaking stay outside the count", () => {
    const C = silnik();
    const e = C.esito({ ascolto: { punti: 9, max: 12 }, lettura: { punti: 9, max: 12 } });
    assert.deepEqual(Array.from(e.nonContate), ["scritta", "orale"]);
    assert.equal(e.abilita.scritta.misurata, false);
    assert.equal(e.abilita.orale.misurata, false);
  });

  test("a module with items but no answers counts as zero, not as the module being absent", () => {
    const C = silnik();
    const e = C.esito({ ascolto: { punti: 10, max: 12 }, lettura: { punti: 0, max: 12 } });
    assert.equal(e.abilita.lettura.punti, 0);
    assert.equal(e.abilita.lettura.misurata, true);
    assert.equal(e.verdetto, "sotto-soglia");
  });
});

describe("kontrola wypowiedzi pisemnej", () => {
  test("it counts the words and checks the limit, without issuing a grade", () => {
    const C = silnik();
    const traccia = C.sim("sim-1").sezioni[2].prove[0];
    const krotki = C.controlloScritta(traccia, "Liebe Anna, danke.");
    assert.equal(krotki.parole, 3);
    assert.equal(krotki.dentroLimite, false);
    /* No points field at all: the marking rubric is run by a human. */
    assert.equal(krotki.punti, undefined);
  });
});

describe("dane symulacji", () => {
  test("simulations follow the Goethe module order", () => {
    const C = silnik();
    C.simulazioni().forEach(s => {
      assert.deepEqual(Array.from(s.sezioni.map(x => x.id)),
        ["lettura", "ascolto", "scritta", "orale"]);
    });
  });

  /* Every sentence a simulation shows: reading texts (`testo`) and passages (`brani`). */
  const zdania = (sim) => {
    const out = [];
    sim.sezioni.forEach(sez => (sez.prove || []).forEach(p => {
      (p.brani || []).forEach(b => b.forEach(r => out.push(r.it)));
      (p.testo || []).forEach(x => out.push(x));
    }));
    return out;
  };
  const wspolne = (a, b) => {
    const znane = new Set(zdania(a));
    return zdania(b).filter(x => znane.has(x));
  };

  test("no simulation repeats the texts of an earlier one", () => {
    /* The seed has ONE simulation, so this loop has no pair to compare yet
       and passes on what the data holds today; it starts to bite with the
       second Modelltest. The next test proves the detector can fail. */
    const C = silnik();
    const lista = C.simulazioni();
    for (let j = 1; j < lista.length; j++) {
      for (let i = 0; i < j; i++) {
        assert.deepEqual(Array.from(wspolne(lista[i], lista[j])), [], `${lista[j].id} repeats ${lista[i].id}`);
      }
    }
    assert.ok(zdania(lista[0]).length > 0, "the first simulation has texts to compare");
  });

  test("the repetition detector finds a text that two simulations share", () => {
    const C = silnik();
    const pierwsza = C.sim("sim-1");
    const kopia = { id: "sim-x", sezioni: [{ id: "lettura", prove: [{ testo: [zdania(pierwsza)[0]], items: [] }] }] };
    assert.deepEqual(Array.from(wspolne(pierwsza, kopia)), [zdania(pierwsza)[0]]);
    assert.deepEqual(Array.from(wspolne(pierwsza, { id: "sim-y", sezioni: [{ id: "lettura", prove: [{ testo: ["Ganz anderer Satz."], items: [] }] }] })), []);
  });

  test("ogni item ha una risposta valida fra le opzioni", () => {
    const C = silnik();
    C.simulazioni().forEach(s => s.sezioni.forEach(sez => (sez.prove || []).forEach(p => {
      (p.items || []).forEach((it, i) => {
        const n = p.t === "vf" || p.t === "jn" ? 2
          : p.t === "abbina" ? p.annunci.length + 1 : (it.opts || []).length;
        assert.ok(n > 0, `${s.id}/${sez.id}: item ${i} has no options`);
        assert.ok(it.a >= 0 && it.a < n, `${s.id}/${sez.id}: item ${i} punta fuori dalle opzioni`);
      });
    })));
  });
});

describe("what is not in the data", () => {
  test("an unknown simulation does not come back as the first one at hand", () => {
    /* An address from a bookmark may point at a simulation that no longer
       exists: substituting another would show the student somebody else's
       exam without a word. */
    const C = silnik();
    assert.equal(C.sim("nie-ma-takiej"), null);
    assert.equal(C.sim(), C.simulazioni()[0], "with no id the first one may be taken");
  });

  test("nieznana sekcja to null, nie pusta sekcja", () => {
    const C = silnik();
    assert.equal(C.sezione(C.sim("sim-1"), "nie-ma"), null);
    assert.equal(C.sezione(null, "ascolto"), null);
  });
});


test("missing section answers score zero out of twelve", () => {
  const C = silnik();
  const result = C.punteggioSezione(C.sezione(symulacja(C), "ascolto"), undefined);
  assert.equal(result.punti, 0);
  assert.equal(result.max, 12);
});

test("sixty percent meets the threshold and less does not", () => {
  const C = silnik();
  for (const skill of ["ascolto", "lettura"]) {
    const passing = C.esito({ ascolto: { punti: 7.2, max: 12 }, lettura: { punti: 7.2, max: 12 } });
    assert.equal(passing.abilita[skill].sopraSoglia, true);
    assert.equal(passing.verdetto, "indeterminato");
    const failing = C.esito({ ascolto: { punti: 7.2, max: 12 }, lettura: { punti: 7.2, max: 12 }, [skill]: { punti: 6.5, max: 12 } });
    assert.equal(failing.abilita[skill].sopraSoglia, false);
    assert.equal(failing.verdetto, "sotto-soglia");
  }
});

test("the word limits include eighty and one hundred twenty", () => {
  const C = silnik();
  for (const [count, accepted] of [[0, false], [79, false], [80, true], [120, true], [121, false]]) {
    const result = C.controlloScritta({}, Array(count).fill("ciao").join(" "));
    assert.equal(result.parole, count);
    assert.equal(result.dentroLimite, accepted, count + " words");
  }
});

function conformingSimulation() {
  return { official: false, sezioni: [
    { id: "lettura", modulo: "Lesen", minuti: 65, prove: Array(5).fill({ puntiPerItem: 1 }) },
    { id: "ascolto", modulo: "Hören", minuti: 40, prove: Array(4).fill({ puntiPerItem: 1 }) },
    { id: "scritta", modulo: "Schreiben", minuti: 60, tracce: Array(3).fill({}) },
    { id: "orale", modulo: "Sprechen", minuti: 15, prove: Array(3).fill({}) }
  ] };
}

test("the format declares unofficial modules, times, Teile and scoring", () => {
  const C = silnik();
  assert.deepEqual(JSON.parse(JSON.stringify(C.formato())), { official: false, soglia: 0.6, moduli: [
    { id: "lettura", modulo: "Lesen", minuti: 65, teile: 5, punteggio: true },
    { id: "ascolto", modulo: "Hören", minuti: 40, teile: 4, punteggio: true },
    { id: "scritta", modulo: "Schreiben", minuti: 60, teile: 3, punteggio: false },
    { id: "orale", modulo: "Sprechen", minuti: 15, teile: 3, punteggio: false }
  ] });
  assert.deepEqual(Array.from(C.ABILITA), ["lettura", "ascolto", "scritta", "orale"]);
  assert.deepEqual(Array.from(C.PUNTEGGIABILI), ["lettura", "ascolto"]);
  C.simulazioni().forEach(s => {
    assert.equal(s.official, false);
    s.sezioni.forEach((section, i) => {
      assert.equal(section.modulo, C.formato().moduli[i].modulo);
      assert.equal(section.minuti, C.formato().moduli[i].minuti);
    });
  });
});

test("conforme reports each contract violation beside a conforming fixture", () => {
  const C = silnik();
  const cases = [
    [s => { s.official = true; }, "official: false required"],
    [s => { delete s.official; }, "official: false required"],
    [s => { s.sezioni.shift(); }, "missing: lettura"],
    [s => { s.sezioni.push({ id: "extra" }); }, "extra: extra"],
    [s => { s.sezioni.reverse(); }, "order: lettura"],
    [s => { s.sezioni[0].minuti = 20; }, "minuti: lettura"],
    [s => { s.sezioni[0].prove.pop(); }, "teile: lettura"],
    [s => { s.sezioni[2].tracce.pop(); }, "teile: scritta"],
    [s => { s.sezioni[2].tracce[0] = { puntiPerItem: 0 }; }, "puntiPerItem: scritta"],
    [s => { s.sezioni[3].puntiPerItem = 1; }, "puntiPerItem: orale"],
    [s => { s.sezioni[0].prove = []; }, "incompleta: lettura"],
    [s => { s.sezioni[0].prove = s.sezioni[0].prove.slice(); s.sezioni[0].prove[2] = {}; }, "puntiPerItem: lettura"],
    [s => { s.sezioni[1].prove = s.sezioni[1].prove.slice(); s.sezioni[1].prove[0] = { puntiPerItem: 0 }; }, "puntiPerItem: ascolto"]
  ];
  cases.forEach(([mutate, problem]) => {
    const fixture = conformingSimulation();
    assert.deepEqual(Array.from(C.conforme(fixture)), []);
    mutate(fixture);
    assert.ok(C.conforme(fixture).includes(problem), problem);
  });
  /* Every shipped simulation is a complete exam in the declared format. */
  assert.ok(C.simulazioni().length >= 2);
  C.simulazioni().forEach(sim => assert.deepEqual(Array.from(C.conforme(sim)), [], sim.id));
});

test("each measured module uses its own weighted maximum and the format threshold", () => {
  const C = silnik();
  const e = C.esito({ lettura: { punti: 18, max: 30 }, ascolto: { punti: 11, max: 20 }, scritta: { punti: 100, max: 100 } });
  assert.equal(e.abilita.lettura.percentuale, 0.6);
  assert.equal(e.abilita.lettura.sopraSoglia, true);
  assert.equal(e.abilita.ascolto.sopraSoglia, false);
  assert.equal(e.verdetto, "sotto-soglia");
  assert.deepEqual(JSON.parse(JSON.stringify(e.abilita.scritta)), { misurata: false });
  assert.deepEqual(JSON.parse(JSON.stringify(e.abilita.orale)), { misurata: false });
  /* A scored module with nothing to score (empty shell, never reached) is
     not measured: it cannot turn the verdict into a definite "no". */
  const vuoto = C.esito({ lettura: { punti: 30, max: 30 }, ascolto: { punti: 0, max: 0 } });
  assert.equal(vuoto.abilita.ascolto.misurata, false);
  assert.equal(vuoto.verdetto, "indeterminato");
  assert.ok(vuoto.nonContate.includes("ascolto"));
  assert.equal(C.esito({ lettura: { punti: 30, max: 30 } }).verdetto, "indeterminato");
});

test("each schreiben task uses its own inclusive word bounds and detected elements", () => {
  const C = silnik();
  const task = { parole: { min: 2, max: 3 }, richiede: [{ word: "Hallo", etichetta: "Gruß" }] };
  for (const [text, accepted] of [["", false], ["Hallo", false], ["Hallo Anna", true], ["Hallo liebe Anna", true], ["Hallo meine liebe Anna", false]]) {
    const result = C.controlloScritta(task, text);
    assert.equal(result.dentroLimite, accepted);
    assert.equal(result.minimo, 2);
    assert.equal(result.massimo, 3);
    assert.equal(result.elementi[0].voce.etichetta, "Gruß");
    assert.equal(result.punti, undefined);
  }
});

test("telc format declares timing, item counts and receptive bands", () => {
  const C = silnik();
  const f = C.formato({ formato: "telc-pflege" });
  assert.equal(C.formato().punteggio, "perModulo");
  assert.equal(f.nome, "telc Deutsch B1·B2 Pflege");
  assert.equal(f.punteggio, "fasceRicettive");
  assert.deepEqual(JSON.parse(JSON.stringify(f.moduli.map(m => [m.id, m.minuti, m.teile, m.items]))), [
    ["ascolto", 25, 4, [4, 10, 6, 3]], ["lettura", 60, 4, [4, 5, 6, 3]],
    ["sprachbausteine", 60, 2, [8, 10]], ["scritta", 30, 1, null], ["orale", 16, 3, null]
  ]);
  assert.equal(f.moduli[2].tempoCondiviso, "lettura");
  assert.equal(f.moduli[4].preparazione, 20);
  assert.deepEqual(JSON.parse(JSON.stringify(f.fasce)), [
    { min: 0, max: 26, etichetta: "unter B1" }, { min: 27, max: 42, etichetta: "B1" },
    { min: 43, max: 59, etichetta: "B2" }
  ]);
});

function telcFixture(C) {
  const f = C.formato({ formato: "telc-pflege" });
  return { official: false, formato: "telc-pflege", sezioni: f.moduli.map(m => ({
    id: m.id, minuti: m.minuti,
    prove: m.punteggio ? m.items.map(n => ({ puntiPerItem: 1, items: Array(n).fill({ a: 0 }) })) : Array.from({ length: m.teile }, () => ({}))
  })) };
}

test("Sprachbausteine score each answered gap with its weight", () => {
  const C = silnik();
  for (const type of ["lueckeAbbina", "lueckeMc"]) {
    const result = C.punteggioProva({ t: type, puntiPerItem: 1, items: [{ a: 2 }, { a: 1 }, { a: 0 }] }, [2, 0, null]);
    assert.deepEqual(JSON.parse(JSON.stringify(result)), { punti: 1, esatte: 1, date: 2, totali: 3 });
  }
});

function sprachFixture(C) {
  const sim = telcFixture(C);
  const tasks = sim.sezioni[2].prove;
  tasks[0].t = "lueckeAbbina";
  tasks[0].opts = Array.from({ length: 9 }, (_, k) => "Wort" + k);
  tasks[0].testo = Array(9).fill("Text");
  tasks[0].items = Array.from({ length: 8 }, (_, k) => ({ a: k }));
  tasks[1].t = "lueckeMc";
  tasks[1].testo = Array(11).fill("Text");
  tasks[1].items = Array.from({ length: 10 }, () => ({ a: 0, opts: ["a", "b", "c"] }));
  return { sim, tasks };
}

test("a well-formed Sprachbausteine pair is conformant", () => {
  const C = silnik();
  assert.deepEqual(Array.from(C.conforme(sprachFixture(C).sim)), []);
});

test("conformance rejects missing Sprachbausteine options", () => {
  const C = silnik();
  const { sim, tasks } = sprachFixture(C);
  delete tasks[0].opts;
  tasks[1].items[1].opts = [];
  assert.ok(C.conforme(sim).includes("options: sprachbausteine-1"));
  assert.ok(C.conforme(sim).includes("options: sprachbausteine-2"));
});

test("conformance rejects a Sprachbausteine text with the wrong number of pieces", () => {
  const C = silnik();
  for (const [index, pieces] of [[0, 8], [0, 10], [1, 10], [1, 12]]) {
    const { sim, tasks } = sprachFixture(C);
    tasks[index].testo = Array(pieces).fill("Text");
    assert.ok(C.conforme(sim).includes("testo: sprachbausteine-" + (index + 1)), `${index}/${pieces}`);
  }
  const { sim, tasks } = sprachFixture(C);
  delete tasks[1].testo;
  assert.ok(C.conforme(sim).includes("testo: sprachbausteine-2"));
});

test("conformance rejects a Sprachbausteine answer outside the options", () => {
  const C = silnik();
  for (const bad of [-1, 9, 1.5, "0", null]) {
    const { sim, tasks } = sprachFixture(C);
    tasks[0].items[3].a = bad;
    assert.ok(C.conforme(sim).includes("risposta: sprachbausteine-1"), String(bad));
  }
  for (const bad of [-1, 3, 0.5]) {
    const { sim, tasks } = sprachFixture(C);
    tasks[1].items[4].a = bad;
    assert.ok(C.conforme(sim).includes("risposta: sprachbausteine-2"), String(bad));
  }
});

test("conformance rejects a repeated answer in lueckeAbbina but not in lueckeMc", () => {
  const C = silnik();
  const { sim, tasks } = sprachFixture(C);
  tasks[0].items[5].a = 2;
  assert.ok(C.conforme(sim).includes("duplicata: sprachbausteine-1"));
  assert.ok(!C.conforme(sim).includes("duplicata: sprachbausteine-2"));
});

test("telc conformance checks each fixed item count", () => {
  const C = silnik();
  const sim = telcFixture(C);
  assert.deepEqual(Array.from(C.conforme(sim)), []);
  sim.sezioni[2].prove[0].items.pop();
  assert.ok(C.conforme(sim).includes("items: sprachbausteine-1"));
});

test("telc receptive totals select bands without granting a pass", () => {
  const C = silnik();
  const f = C.formato({ formato: "telc-pflege" });
  for (const [n, band] of [[26, "unter B1"], [27, "B1"], [42, "B1"], [43, "B2"], [59, "B2"]]) {
    const e = C.esito({ ascolto: { punti: 10, max: 23 }, lettura: { punti: n - 10, max: 18 }, sprachbausteine: { punti: 0, max: 18 } }, f);
    assert.equal(e.punti, n);
    assert.equal(e.fascia.etichetta, band);
    assert.equal(e.verdetto, undefined, "a band is not a verdict, not even a negative one");
    assert.equal(e.max, 59, "the maximum is the sum of the module maxima");
  }
});

test("telc band result: the maximum is the weighted sum of the tallies, and an out-of-range total has no band", () => {
  const C = silnik();
  const f = C.formato({ formato: "telc-pflege" });
  const e = C.esito({ ascolto: { punti: 20, max: 46 }, lettura: { punti: 11, max: 18 }, sprachbausteine: { punti: 0, max: 18 } }, f);
  assert.equal(e.max, 82);
  assert.equal(C.esito({ ascolto: { punti: 60, max: 60 } }, f).fascia, null);
});
