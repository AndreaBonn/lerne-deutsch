import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { loadEngine, VERBS } from './_harness.mjs';

const V = loadEngine({ files: VERBS }).sandbox.Verbs;
const golden = JSON.parse(readFileSync(new URL('./verbs-de-golden.json', import.meta.url), 'utf8'));
for (const tense of Object.keys(golden.machen)) {
  describe(tense, () => {
    for (const [inf, table] of Object.entries(golden)) {
      const deferred = !['praes', 'praet', 'perf', 'plusq', 'fut1', 'fut2'].includes(tense)
        ? `implement in T1.${({ konj2: 17, konj2Verg: 17, konj1: 18, imper: 19 })[tense]}`
        : inf === 'aufstehen' && ['praes', 'praet'].includes(tense) ? 'implement in T1.20'
          : inf === 'sich waschen' ? 'implement in T1.21' : undefined;
      test(`${inf}: ${tense}`, deferred ? { skip: deferred } : {}, () => {
        const actual = V.conjugate(inf, tense);
        assert.deepEqual(actual === null ? null : Array.from(actual), table[tense]);
      });
    }
  });
}

describe('weak/strong Präsens spelling', () => {
  const cases = {
    kommen: ['komme', 'kommst', 'kommt', 'kommen', 'kommt', 'kommen'],
    kennen: ['kenne', 'kennst', 'kennt', 'kennen', 'kennt', 'kennen'],
    nennen: ['nenne', 'nennst', 'nennt', 'nennen', 'nennt', 'nennen'],
    beginnen: ['beginne', 'beginnst', 'beginnt', 'beginnen', 'beginnt', 'beginnen'],
    schwimmen: ['schwimme', 'schwimmst', 'schwimmt', 'schwimmen', 'schwimmt', 'schwimmen'],
    öffnen: ['öffne', 'öffnest', 'öffnet', 'öffnen', 'öffnet', 'öffnen'],
    reden: ['rede', 'redest', 'redet', 'reden', 'redet', 'reden'],
    heißen: ['heiße', 'heißt', 'heißt', 'heißen', 'heißt', 'heißen'],
    reisen: ['reise', 'reist', 'reist', 'reisen', 'reist', 'reisen'],
    lächeln: ['lächle', 'lächelst', 'lächelt', 'lächeln', 'lächelt', 'lächeln'],
    sammeln: ['sammle', 'sammelst', 'sammelt', 'sammeln', 'sammelt', 'sammeln'],
    atmen: ['atme', 'atmest', 'atmet', 'atmen', 'atmet', 'atmen'],
    rechnen: ['rechne', 'rechnest', 'rechnet', 'rechnen', 'rechnet', 'rechnen'],
    lernen: ['lerne', 'lernst', 'lernt', 'lernen', 'lernt', 'lernen']
  };
  for (const [inf, expected] of Object.entries(cases)) {
    test(inf, () => assert.deepEqual(Array.from(V.conjugate(inf, 'praes') || []), expected));
  }
});

describe('T1.13 Präteritum spelling and mixed verbs', () => {
  const cases = {
    arbeiten: ['arbeitete', 'arbeitetest', 'arbeitete', 'arbeiteten', 'arbeitetet', 'arbeiteten'],
    reden: ['redete', 'redetest', 'redete', 'redeten', 'redetet', 'redeten'],
    atmen: ['atmete', 'atmetest', 'atmete', 'atmeten', 'atmetet', 'atmeten'],
    rechnen: ['rechnete', 'rechnetest', 'rechnete', 'rechneten', 'rechnetet', 'rechneten'],
    öffnen: ['öffnete', 'öffnetest', 'öffnete', 'öffneten', 'öffnetet', 'öffneten'],
    lernen: ['lernte', 'lerntest', 'lernte', 'lernten', 'lerntet', 'lernten'],
    denken: ['dachte', 'dachtest', 'dachte', 'dachten', 'dachtet', 'dachten'],
    kennen: ['kannte', 'kanntest', 'kannte', 'kannten', 'kanntet', 'kannten'],
    stehen: ['stand', 'standest', 'stand', 'standen', 'standet', 'standen'],
    lesen: ['las', 'lasest', 'las', 'lasen', 'last', 'lasen'],
    heißen: ['hieß', 'hießest', 'hieß', 'hießen', 'hießt', 'hießen'],
    bieten: ['bot', 'botest', 'bot', 'boten', 'botet', 'boten']
  };
  for (const [inf, expected] of Object.entries(cases)) {
    test(inf, () => assert.deepEqual(Array.from(V.conjugate(inf, 'praet') || []), expected));
  }
});

test('unknown tense returns null; returned forms are independent', () => {
  assert.equal(V.conjugate('machen', 'unknown'), null);
  const forms = V.conjugate('machen', 'praes');
  forms[0] = 'changed';
  assert.equal(V.conjugate('machen', 'praes')[0], 'mache');
});

describe('strong Präsens vowel changes', () => {
  const cases = {
    geben: ['gebe', 'gibst', 'gibt', 'geben', 'gebt', 'geben'],
    lesen: ['lese', 'liest', 'liest', 'lesen', 'lest', 'lesen'],
    essen: ['esse', 'isst', 'isst', 'essen', 'esst', 'essen'],
    halten: ['halte', 'hältst', 'hält', 'halten', 'haltet', 'halten'],
    treten: ['trete', 'trittst', 'tritt', 'treten', 'tretet', 'treten'],
    laden: ['lade', 'lädst', 'lädt', 'laden', 'ladet', 'laden'],
    fechten: ['fechte', 'fichtst', 'ficht', 'fechten', 'fechtet', 'fechten'],
    flechten: ['flechte', 'flichtst', 'flicht', 'flechten', 'flechtet', 'flechten'],
    bersten: ['berste', 'birst', 'birst', 'bersten', 'berstet', 'bersten'],
    laufen: ['laufe', 'läufst', 'läuft', 'laufen', 'lauft', 'laufen'],
    sprechen: ['spreche', 'sprichst', 'spricht', 'sprechen', 'sprecht', 'sprechen'],
    treffen: ['treffe', 'triffst', 'trifft', 'treffen', 'trefft', 'treffen'],
    waschen: ['wasche', 'wäschst', 'wäscht', 'waschen', 'wascht', 'waschen'],
    tun: ['tue', 'tust', 'tut', 'tun', 'tut', 'tun'],
    geschehen: [null, null, 'geschieht', null, null, 'geschehen']
  };
  for (const [inf, expected] of Object.entries(cases)) {
    test(inf, () => assert.deepEqual(Array.from(V.conjugate(inf, 'praes') || []), expected));
  }
});

test('irregular dictionary contains German principal parts and present changes', () => {
  assert.ok(Object.keys(V.IRR).length >= 120);
  for (const entry of Object.values(V.IRR)) {
    assert.equal(typeof entry.praet, 'string');
    assert.equal(typeof entry.pp, 'string');
    assert.ok(['sein', 'haben'].includes(entry.aux));
    if (entry.presentStem) assert.equal(typeof entry.presentStem, 'string');
    if (entry.praes) assert.equal(entry.praes.length, 6);
  }
  assert.equal(V.IRR.nehmen.praet, 'nahm');
  assert.equal(V.IRR.nehmen.pp, 'genommen');
  assert.equal(V.IRR.fahren.presentStem, 'fähr');
  assert.equal(V.IRR.bringen.praet, 'brachte');
  assert.equal(V.IRR.bringen.pp, 'gebracht');
  assert.equal(V.IRR.sein.konj2, 'wär');
  assert.equal(V.IRR.haben.konj2, 'hätt');
  assert.equal(V.IRR.werden.konj2, 'würd');
});

describe('auxiliary and modal Präsens', () => {
  const cases = {
    müssen: ['muss', 'musst', 'muss', 'müssen', 'müsst', 'müssen'],
    dürfen: ['darf', 'darfst', 'darf', 'dürfen', 'dürft', 'dürfen'],
    sollen: ['soll', 'sollst', 'soll', 'sollen', 'sollt', 'sollen'],
    wollen: ['will', 'willst', 'will', 'wollen', 'wollt', 'wollen'],
    mögen: ['mag', 'magst', 'mag', 'mögen', 'mögt', 'mögen'],
    möchten: ['möchte', 'möchtest', 'möchte', 'möchten', 'möchtet', 'möchten']
  };
  for (const [inf, expected] of Object.entries(cases)) {
    test(inf, () => assert.deepEqual(Array.from(V.conjugate(inf, 'praes') || []), expected));
  }
});

test('fullTable exposes each contracted tense and fresh conjugation rows', () => {
  const table = V.fullTable('machen');
  assert.deepEqual(Object.keys(table), Array.from(V.TENSES, tense => tense.key));
  assert.deepEqual(Array.from(table.praes), golden.machen.praes);
  table.praes[0] = 'changed';
  assert.equal(V.fullTable('machen').praes[0], 'mache');
});

describe('T1.14 Partizip II', () => {
  const cases = {
    machen: 'gemacht', arbeiten: 'gearbeitet', reden: 'geredet',
    atmen: 'geatmet', rechnen: 'gerechnet', öffnen: 'geöffnet',
    lernen: 'gelernt', wandern: 'gewandert', sammeln: 'gesammelt',
    fahren: 'gefahren', nehmen: 'genommen', bringen: 'gebracht',
    studieren: 'studiert', besuchen: 'besucht', verkaufen: 'verkauft',
    erklären: 'erklärt', entdecken: 'entdeckt', empören: 'empört',
    gehören: 'gehört', missachten: 'missachtet', zerstören: 'zerstört',
    aufmachen: 'aufgemacht', aufstehen: 'aufgestanden',
    einkaufen: 'eingekauft', ausprobieren: 'ausprobiert',
    antworten: 'geantwortet', angeln: 'geangelt', ankern: 'geankert',
    zupfen: 'gezupft', zucken: 'gezuckt', zünden: 'gezündet', zurren: 'gezurrt',
    sein: 'gewesen', werden: 'geworden',
    // be-/er-/ge-/zer- belong to the stem here, not to an inseparable prefix
    beten: 'gebetet', bellen: 'gebellt', beben: 'gebebt', erben: 'geerbt',
    ernten: 'geerntet', geigen: 'gegeigt', zerren: 'gezerrt'
  };
  for (const [inf, expected] of Object.entries(cases)) {
    test(inf, () => assert.equal(V.participle(inf), expected));
  }
});

describe('T1.15 perfect auxiliaries in de-DE', () => {
  const cases = {
    reisen: ['ist gereist', 'war gereist'],
    fahren: ['ist gefahren', 'war gefahren'],
    studieren: ['hat studiert', 'hatte studiert'],
    stehen: ['hat gestanden', 'hatte gestanden'],
    bleiben: ['ist geblieben', 'war geblieben'],
    aufstehen: ['ist aufgestanden', 'war aufgestanden'],
    aufmachen: ['hat aufgemacht', 'hatte aufgemacht'],
    einkaufen: ['hat eingekauft', 'hatte eingekauft'],
    wandern: ['ist gewandert', 'war gewandert'],
    passieren: ['ist passiert', 'war passiert'],
    sterben: ['ist gestorben', 'war gestorben'],
    wachsen: ['ist gewachsen', 'war gewachsen'],
    erblühen: ['ist erblüht', 'war erblüht'],
    aufwachen: ['ist aufgewacht', 'war aufgewacht'],
    einschlafen: ['ist eingeschlafen', 'war eingeschlafen'],
    folgen: ['ist gefolgt', 'war gefolgt'],
    begegnen: ['ist begegnet', 'war begegnet'],
    scheitern: ['ist gescheitert', 'war gescheitert'],
    erwachen: ['ist erwacht', 'war erwacht']
  };
  for (const [inf, [perfect, pluperfect]] of Object.entries(cases)) {
    test(inf, () => {
      assert.equal(V.conjugate(inf, 'perf')?.[2], perfect);
      assert.equal(V.conjugate(inf, 'plusq')?.[2], pluperfect);
    });
  }
  test('SEIN_VERBS is available to auxiliary drills', () => {
    const tables = loadEngine({ files: VERBS }).sandbox.VERB_TABLES;
    assert.ok(tables.SEIN_VERBS.includes('reisen'));
    assert.ok(tables.SEIN_VERBS.includes('fahren'));
    assert.equal(tables.SEIN_VERBS.includes('stehen'), false);
  });
});

describe('T1.16 future tenses', () => {
  const cases = {
    reisen: ['werde reisen', 'werde gereist sein'],
    bleiben: ['werde bleiben', 'werde geblieben sein'],
    stehen: ['werde stehen', 'werde gestanden haben'],
    aufmachen: ['werde aufmachen', 'werde aufgemacht haben'],
    studieren: ['werde studieren', 'werde studiert haben']
  };
  for (const [inf, [future, futurePerfect]] of Object.entries(cases)) {
    test(inf, () => {
      assert.equal(V.conjugate(inf, 'fut1')?.[0], future);
      assert.equal(V.conjugate(inf, 'fut2')?.[0], futurePerfect);
    });
  }
});

test('new tense rows remain independent across conjugate and fullTable calls', () => {
  for (const tense of ['praet', 'perf', 'plusq', 'fut1', 'fut2']) {
    const forms = V.conjugate('machen', tense);
    assert.deepEqual(Array.from(forms || []), golden.machen[tense]);
    forms[0] = 'changed';
    assert.deepEqual(Array.from(V.fullTable('machen')[tense] || []), golden.machen[tense]);
  }
});
