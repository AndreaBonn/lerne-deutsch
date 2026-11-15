/* ============================================================
   German prefixes: separable, inseparable and the ambiguous ones.

   A separable prefix leaves the finite verb in the simple tenses ("stehe
   auf", "rief an") and joins the participle between "ge" and the stem
   ("aufgestanden"). An inseparable prefix stays and drops "ge-"
   ("verstanden"). über-, um-, wieder-, durch- and unter- can be either, so
   the choice is made per verb in a small explicit table and the tests below
   pin every row of it.

   A similar beginning is not a relationship: "einigen" is not ein + igen
   and "losen" is not los + en, so a closed list of prefixes has to be
   backed by a list of exceptions.
   ============================================================ */
import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { loadEngine, VERBS } from "./_harness.mjs";

function engine() {
  return loadEngine({ files: VERBS }).sandbox.Verbs;
}
const rows = (inf, tense) => Array.from(engine().conjugate(inf, tense));

describe("verbs: separable prefixes in the simple tenses", () => {
  const cases = [
    ["fernsehen", ["sehe fern", "siehst fern", "sieht fern", "sehen fern", "seht fern", "sehen fern"],
      "sah fern", "hat ferngesehen", "sieh fern"],
    ["teilnehmen", ["nehme teil", "nimmst teil", "nimmt teil", "nehmen teil", "nehmt teil", "nehmen teil"],
      "nahm teil", "hat teilgenommen", "nimm teil"],
    ["stattfinden", ["finde statt", "findest statt", "findet statt", "finden statt", "findet statt", "finden statt"],
      "fand statt", "hat stattgefunden", "finde statt"]
  ];
  for (const [inf, present, past, perfect, imperative] of cases) {
    test(`${inf}: fern-, teil- and statt- inherit the strong base`, () => {
      assert.deepEqual(rows(inf, "praes"), present);
      assert.equal(rows(inf, "praet")[2], past);
      assert.equal(rows(inf, "perf")[2], perfect);
      assert.equal(rows(inf, "imper")[1], imperative);
    });
  }

  test("aufstehen: Präsens, Präteritum, Imperativ", () => {
    assert.deepEqual(rows("aufstehen", "praes"),
      ["stehe auf", "stehst auf", "steht auf", "stehen auf", "steht auf", "stehen auf"]);
    assert.deepEqual(rows("aufstehen", "praet"),
      ["stand auf", "standest auf", "stand auf", "standen auf", "standet auf", "standen auf"]);
    assert.deepEqual(rows("aufstehen", "imper"),
      [null, "steh auf", null, "stehen wir auf", "steht auf", "stehen Sie auf"]);
  });

  test("ankommen and anrufen inherit the strong base", () => {
    assert.equal(rows("ankommen", "praet")[2], "kam an");
    assert.equal(rows("anrufen", "praet")[0], "rief an");
    assert.equal(rows("anrufen", "praes")[2], "ruft an");
  });

  test("regular base: aufmachen, einkaufen, zurückkommen", () => {
    assert.equal(rows("aufmachen", "praet")[3], "machten auf");
    assert.equal(rows("einkaufen", "praes")[0], "kaufe ein");
    assert.equal(rows("zurückkommen", "praet")[0], "kam zurück");
  });

  test("the stem needs e: einladen keeps the base vowel change", () => {
    assert.equal(rows("einladen", "praes")[1], "lädst ein");
    assert.equal(rows("zuarbeiten", "praes")[1], "arbeitest zu");
  });

  test("Konjunktiv I and II keep the particle at the end", () => {
    assert.deepEqual(rows("aufstehen", "konj1"),
      ["stehe auf", "stehest auf", "stehe auf", "stehen auf", "stehet auf", "stehen auf"]);
    assert.equal(rows("ankommen", "konj2")[0], "käme an");
    assert.equal(rows("aufstehen", "konj2")[0], "würde aufstehen");
  });

  test("the infinitive stays whole in the compound tenses", () => {
    assert.equal(rows("aufstehen", "fut1")[0], "werde aufstehen");
    assert.equal(rows("aufstehen", "fut2")[0], "werde aufgestanden sein");
    assert.equal(rows("aufmachen", "perf")[2], "hat aufgemacht");
  });
});

describe("verbs: Partizip II of prefixed verbs", () => {
  const cases = [
    ["aufstehen", "aufgestanden"], ["ankommen", "angekommen"], ["anrufen", "angerufen"],
    ["mitbringen", "mitgebracht"], ["zurückkommen", "zurückgekommen"],
    ["abbestellen", "abbestellt"], ["anerkennen", "anerkannt"],
    ["verstehen", "verstanden"], ["bekommen", "bekommen"], ["empfangen", "empfangen"],
    ["missverstehen", "missverstanden"], ["entscheiden", "entschieden"],
    ["bestellen", "bestellt"], ["versuchen", "versucht"], ["verabreden", "verabredet"]
  ];
  for (const [inf, pp] of cases) {
    test(`${inf} -> ${pp}`, () => assert.equal(engine().participle(inf), pp));
  }
});

describe("verbs: über-, um-, wieder-, durch-, unter- are decided per verb", () => {
  const cases = [
    ["überraschen", "überrascht", "haben"],
    ["übersetzen", "übersetzt", "haben"],
    ["wiederholen", "wiederholt", "haben"],
    ["umziehen", "umgezogen", "sein"],
    ["unterschreiben", "unterschrieben", "haben"],
    ["umarmen", "umarmt", "haben"],
    ["durchfallen", "durchgefallen", "sein"],
    ["wiedersehen", "wiedergesehen", "haben"],
    ["unterhalten", "unterhalten", "haben"]
  ];
  for (const [inf, pp, aux] of cases) {
    test(`${inf} -> ${pp}`, () => {
      const V = engine();
      assert.equal(V.participle(inf), pp);
      const perfect = V.conjugate(inf, "perf")[2];
      assert.equal(perfect, `${aux === "sein" ? "ist" : "hat"} ${pp}`);
    });
  }

  test("a separable one splits, an inseparable one does not", () => {
    assert.equal(rows("umziehen", "praes")[0], "ziehe um");
    assert.equal(rows("umziehen", "praet")[2], "zog um");
    assert.equal(rows("wiedersehen", "praes")[2], "sieht wieder");
    assert.equal(rows("durchfallen", "praet")[2], "fiel durch");
    assert.equal(rows("überraschen", "praes")[0], "überrasche");
    assert.equal(rows("übersetzen", "praet")[2], "übersetzte");
    assert.equal(rows("wiederholen", "praes")[1], "wiederholst");
    assert.equal(rows("unterschreiben", "praet")[0], "unterschrieb");
    assert.equal(rows("umarmen", "praes")[0], "umarme");
  });
});

describe("verbs: a similar beginning is not a prefix", () => {
  test("einigen: geeinigt, no separation", () => {
    const V = engine();
    assert.equal(V.participle("einigen"), "geeinigt");
    assert.deepEqual(rows("einigen", "praes"),
      ["einige", "einigst", "einigt", "einigen", "einigt", "einigen"]);
  });
  test("losen: gelost, no separation", () => {
    const V = engine();
    assert.equal(V.participle("losen"), "gelost");
    assert.equal(rows("losen", "praes")[0], "lose");
    assert.equal(rows("losgehen", "praes")[0], "gehe los");
  });
  test("ein- is a prefix in einkaufen but not in einen", () => {
    assert.equal(engine().participle("einen"), "geeint");
    assert.equal(engine().participle("einkaufen"), "eingekauft");
  });
  test("abonnieren and ankern stay whole", () => {
    assert.equal(rows("abonnieren", "praes")[0], "abonniere");
    assert.equal(engine().participle("abonnieren"), "abonniert");
    assert.equal(rows("ankern", "praes")[0], "ankere");
  });
  test("herrschen is not her + rschen", () => {
    assert.equal(rows("herrschen", "praes")[0], "herrsche");
  });
  test("an irregular verb that merely contains a prefix keeps its own entry", () => {
    assert.equal(engine().participle("beißen"), "gebissen");
    assert.equal(rows("beißen", "praet")[0], "biss");
    assert.equal(engine().participle("gewinnen"), "gewonnen");
  });
});
