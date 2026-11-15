import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { loadEngine, VERBS } from './_harness.mjs';

const V = loadEngine({ files: VERBS }).sandbox.Verbs;
const golden = JSON.parse(readFileSync(new URL('./verbs-de-golden.json', import.meta.url), 'utf8'));
for (const tense of Object.keys(golden.machen)) {
  describe(tense, () => {
    for (const [inf, table] of Object.entries(golden)) {
      const deferred = tense !== 'praes' ? 'implement in T1.13-T1.19'
        : inf === 'aufstehen' ? 'implement in T1.20'
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
