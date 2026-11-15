import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { loadEngine, VERBS } from './_harness.mjs';

const V = loadEngine({ files: VERBS }).sandbox.Verbs;
const golden = JSON.parse(readFileSync(new URL('./verbs-de-golden.json', import.meta.url), 'utf8'));
/* T1.17: fahren, stehen and waschen show würde + Infinitiv in the learner table; the golden file follows. */
for (const tense of Object.keys(golden.machen)) {
  describe(tense, () => {
    for (const [inf, table] of Object.entries(golden)) {
      test(`${inf}: ${tense}`, () => {
        const actual = V.conjugate(inf, tense);
        const expected = table[tense];
        assert.deepEqual(actual === null ? null : Array.from(actual), expected);
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

describe('T1.17 selected synthetic and fallback Konjunktiv II', () => {
  const cases = {
    kommen: ['käme', 'kämest', 'käme', 'kämen', 'kämet', 'kämen'],
    gehen: ['ginge', 'gingest', 'ginge', 'gingen', 'ginget', 'gingen'],
    geben: ['gäbe', 'gäbest', 'gäbe', 'gäben', 'gäbet', 'gäben'],
    sein: ['wäre', 'wärest', 'wäre', 'wären', 'wäret', 'wären'],
    haben: ['hätte', 'hättest', 'hätte', 'hätten', 'hättet', 'hätten'],
    werden: ['würde', 'würdest', 'würde', 'würden', 'würdet', 'würden'],
    wissen: ['wüsste', 'wüsstest', 'wüsste', 'wüssten', 'wüsstet', 'wüssten'],
    nehmen: ['nähme', 'nähmest', 'nähme', 'nähmen', 'nähmet', 'nähmen'],
    bringen: ['brächte', 'brächtest', 'brächte', 'brächten', 'brächtet', 'brächten'],
    können: ['könnte', 'könntest', 'könnte', 'könnten', 'könntet', 'könnten'],
    fahren: ['würde fahren', 'würdest fahren', 'würde fahren', 'würden fahren', 'würdet fahren', 'würden fahren'],
    waschen: ['würde waschen', 'würdest waschen', 'würde waschen', 'würden waschen', 'würdet waschen', 'würden waschen'],
    stehen: ['würde stehen', 'würdest stehen', 'würde stehen', 'würden stehen', 'würdet stehen', 'würden stehen'],
    denken: ['dächte', 'dächtest', 'dächte', 'dächten', 'dächtet', 'dächten'],
    müssen: ['müsste', 'müsstest', 'müsste', 'müssten', 'müsstet', 'müssten'],
    dürfen: ['dürfte', 'dürftest', 'dürfte', 'dürften', 'dürftet', 'dürften'],
    sollen: ['sollte', 'solltest', 'sollte', 'sollten', 'solltet', 'sollten'],
    wollen: ['wollte', 'wolltest', 'wollte', 'wollten', 'wolltet', 'wollten'],
    mögen: ['möchte', 'möchtest', 'möchte', 'möchten', 'möchtet', 'möchten'],
    schwimmen: ['würde schwimmen', 'würdest schwimmen', 'würde schwimmen', 'würden schwimmen', 'würdet schwimmen', 'würden schwimmen']
  };
  for (const [inf, expected] of Object.entries(cases)) {
    test(inf, () => assert.deepEqual(Array.from(V.conjugate(inf, 'konj2') || []), expected));
  }
});

describe('T1.18 Konjunktiv I stems and contractions', () => {
  const cases = {
    kommen: ['komme', 'kommest', 'komme', 'kommen', 'kommet', 'kommen'],
    tun: ['tue', 'tuest', 'tue', 'tun', 'tuet', 'tun'],
    sammeln: ['sammle', 'sammelst', 'sammle', 'sammeln', 'sammelt', 'sammeln']
  };
  for (const [inf, expected] of Object.entries(cases)) {
    test(inf, () => assert.deepEqual(Array.from(V.conjugate(inf, 'konj1') || []), expected));
  }
});

describe('T1.19 imperative vowel changes and required e', () => {
  const cases = {
    geben: [null, 'gib', null, 'geben wir', 'gebt', 'geben Sie'],
    lesen: [null, 'lies', null, 'lesen wir', 'lest', 'lesen Sie'],
    treten: [null, 'tritt', null, 'treten wir', 'tretet', 'treten Sie'],
    laufen: [null, 'lauf', null, 'laufen wir', 'lauft', 'laufen Sie'],
    rechnen: [null, 'rechne', null, 'rechnen wir', 'rechnet', 'rechnen Sie'],
    sammeln: [null, 'sammle', null, 'sammeln wir', 'sammelt', 'sammeln Sie'],
    tun: [null, 'tu', null, 'tun wir', 'tut', 'tun Sie']
  };
  for (const [inf, expected] of Object.entries(cases)) {
    test(inf, () => assert.deepEqual(Array.from(V.conjugate(inf, 'imper') || []), expected));
  }
});

const NULL_ROW = [null, null, null, null, null, null];

describe('F33 möchten has only Präsens: every other tense is a null row', () => {
  for (const tense of ['praet', 'perf', 'plusq', 'fut1', 'fut2', 'konj2', 'konj2Verg', 'konj1', 'imper']) {
    test(tense, () => assert.deepEqual(Array.from(V.conjugate('möchten', tense)), NULL_ROW));
  }
  test('Präsens stays conjugated', () => {
    assert.deepEqual(Array.from(V.conjugate('möchten', 'praes')), ['möchte', 'möchtest', 'möchte', 'möchten', 'möchtet', 'möchten']);
  });
});

describe('F38 imperative coverage', () => {
  for (const inf of ['können', 'müssen', 'dürfen', 'sollen', 'wollen', 'mögen']) {
    test(`${inf} imperative is all null`, () => assert.deepEqual(Array.from(V.conjugate(inf, 'imper')), NULL_ROW));
  }
  const cases = {
    wissen: [null, 'wisse', null, 'wissen wir', 'wisst', 'wissen Sie'],
    essen: [null, 'iss', null, 'essen wir', 'esst', 'essen Sie'],
    helfen: [null, 'hilf', null, 'helfen wir', 'helft', 'helfen Sie'],
    fahren: [null, 'fahr', null, 'fahren wir', 'fahrt', 'fahren Sie'],
    arbeiten: [null, 'arbeite', null, 'arbeiten wir', 'arbeitet', 'arbeiten Sie']
  };
  for (const [inf, expected] of Object.entries(cases)) {
    test(inf, () => assert.deepEqual(Array.from(V.conjugate(inf, 'imper')), expected));
  }
});

describe('F38 Konjunktiv II Vergangenheit uses the right auxiliary', () => {
  test('haben verb: machen', () => {
    assert.deepEqual(Array.from(V.conjugate('machen', 'konj2Verg')),
      ['hätte gemacht', 'hättest gemacht', 'hätte gemacht', 'hätten gemacht', 'hättet gemacht', 'hätten gemacht']);
  });
  test('sein verb: gehen', () => {
    assert.deepEqual(Array.from(V.conjugate('gehen', 'konj2Verg')),
      ['wäre gegangen', 'wärest gegangen', 'wäre gegangen', 'wären gegangen', 'wäret gegangen', 'wären gegangen']);
  });
});

describe('T1.21 reflexive verbs', () => {
  const waschen = {
    praes: ['wasche mich', 'wäschst dich', 'wäscht sich', 'waschen uns', 'wascht euch', 'waschen sich'],
    imper: [null, 'wasch dich', null, 'waschen wir uns', 'wascht euch', 'waschen Sie sich']
  };
  for (const [tense, expected] of Object.entries(waschen)) {
    test(`sich waschen: ${tense}`, () => assert.deepEqual(Array.from(V.conjugate('sich waschen', tense)), expected));
  }
  test('perfect takes haben and puts the pronoun after the auxiliary', () => {
    assert.equal(V.conjugate('sich waschen', 'perf')[2], 'hat sich gewaschen');
    assert.equal(V.conjugate('sich waschen', 'plusq')[3], 'hatten uns gewaschen');
  });
  test('reflexive and separable together: sich vorstellen', () => {
    assert.deepEqual(Array.from(V.conjugate('sich vorstellen', 'praes')),
      ['stelle mich vor', 'stellst dich vor', 'stellt sich vor', 'stellen uns vor', 'stellt euch vor', 'stellen sich vor']);
    assert.deepEqual(Array.from(V.conjugate('sich vorstellen', 'imper')),
      [null, 'stell dich vor', null, 'stellen wir uns vor', 'stellt euch vor', 'stellen Sie sich vor']);
    assert.equal(V.conjugate('sich vorstellen', 'perf')[0], 'habe mich vorgestellt');
    assert.equal(V.conjugate('sich vorstellen', 'fut1')[1], 'wirst dich vorstellen');
    assert.equal(V.conjugate('sich vorstellen', 'konj2')[0], 'würde mich vorstellen');
  });
  test('a reflexive verb takes haben even when the plain verb takes sein', () => {
    assert.equal(V.conjugate('sich umziehen', 'perf')[0], 'habe mich umgezogen');
    assert.equal(V.conjugate('umziehen', 'perf')[0], 'bin umgezogen');
  });
  test('regular reflexive: sich freuen, sich beeilen', () => {
    assert.equal(V.conjugate('sich freuen', 'praet')[1], 'freutest dich');
    assert.equal(V.conjugate('sich beeilen', 'perf')[4], 'habt euch beeilt');
  });
  test('the plain verb is not reflexive and the pronoun rows are fresh arrays', () => {
    assert.equal(V.conjugate('waschen', 'praes')[0], 'wasche');
    const rows = V.conjugate('sich waschen', 'praes');
    rows[0] = 'changed';
    assert.equal(V.conjugate('sich waschen', 'praes')[0], 'wasche mich');
  });
});

describe('T1.22 irrOf: prefix + strong base', () => {
  test('inseparable prefixes inherit principal parts without ge-', () => {
    assert.equal(V.irrOf('verstehen').praet, 'verstand');
    assert.equal(V.participle('verstehen'), 'verstanden');
    assert.equal(V.participle('bekommen'), 'bekommen');
    assert.equal(V.participle('empfangen'), 'empfangen');
    assert.equal(V.participle('missverstehen'), 'missverstanden');
    assert.equal(V.participle('vergleichen'), 'verglichen');
    assert.equal(V.participle('vergießen'), 'vergossen');
    assert.equal(V.participle('beschließen'), 'beschlossen');
  });
  test('separable prefixes inherit the base entry', () => {
    assert.equal(V.irrOf('ankommen'), V.IRR.kommen);
    assert.equal(V.participle('ankommen'), 'angekommen');
    assert.equal(V.conjugate('ankommen', 'praet')[2], 'kam an');
  });
  test('present vowel change survives the prefix', () => {
    assert.deepEqual(Array.from(V.conjugate('verlassen', 'praes')),
      ['verlasse', 'verlässt', 'verlässt', 'verlassen', 'verlasst', 'verlassen']);
    assert.deepEqual(Array.from(V.conjugate('einladen', 'praes')),
      ['lade ein', 'lädst ein', 'lädt ein', 'laden ein', 'ladet ein', 'laden ein']);
    assert.equal(V.conjugate('empfangen', 'praes')[1], 'empfängst');
  });
  test('gelingen and misslingen take sein', () => {
    assert.equal(V.conjugate('gelingen', 'perf')[2], 'ist gelungen');
    assert.equal(V.conjugate('misslingen', 'perf')[2], 'ist misslungen');
    assert.equal(V.conjugate('misslingen', 'praet')[2], 'misslang');
  });
  test('auxiliary: separable follows the base, inseparable defaults to haben', () => {
    assert.equal(V.conjugate('ankommen', 'perf')[2], 'ist angekommen');
    assert.equal(V.conjugate('bekommen', 'perf')[2], 'hat bekommen');
    assert.equal(V.conjugate('entkommen', 'perf')[2], 'ist entkommen');
    assert.equal(V.conjugate('gefallen', 'perf')[2], 'hat gefallen');
  });
  test('synthetic Konjunktiv II is inherited, würde-form otherwise', () => {
    assert.equal(V.conjugate('ankommen', 'konj2')[0], 'käme an');
    assert.equal(V.conjugate('bekommen', 'konj2')[0], 'bekäme');
    assert.equal(V.conjugate('verstehen', 'konj2')[0], 'würde verstehen');
  });
  test('a similar beginning is not a relationship', () => {
    for (const inf of ['versuchen', 'bestellen', 'gehören', 'beten', 'erben', 'herrschen', 'einigen']) {
      assert.equal(V.irrOf(inf), null, inf);
    }
    assert.equal(V.irrOf('machen'), null);
    assert.equal(V.participle('versuchen'), 'versucht');
    assert.equal(V.participle('herrschen'), 'geherrscht');
  });
});

describe('T1.22 COMMON lemma list', () => {
  const COMMON = Array.from(V.COMMON);
  test('about 150 distinct verbs, each with a full German table', () => {
    assert.ok(COMMON.length >= 140 && COMMON.length <= 170, String(COMMON.length));
    assert.equal(new Set(COMMON).size, COMMON.length);
    for (const inf of COMMON) {
      const table = V.fullTable(inf);
      for (const tense of V.TENSES) {
        const forms = table[tense.key];
        assert.equal(forms.length, 6, `${inf} ${tense.key}`);
        for (const form of forms) assert.ok(form === null || /^[a-zäöüßA-Z ]+$/.test(form), `${inf} ${tense.key} ${form}`);
      }
      assert.ok(table.praes.every(form => typeof form === 'string'), `${inf} praes`);
    }
  });
  test('contains the verbs the course teaches first', () => {
    for (const inf of ['machen', 'sein', 'aufstehen', 'sich waschen', 'mögen', 'ankommen', 'verstehen', 'bekommen']) {
      assert.ok(COMMON.includes(inf), inf);
    }
  });
  test('principal parts of a sample are Duden-correct', () => {
    const pp = { entscheiden: 'entschieden', verschwinden: 'verschwunden', erscheinen: 'erschienen',
      vorschlagen: 'vorgeschlagen', einladen: 'eingeladen', anrufen: 'angerufen', mitbringen: 'mitgebracht',
      bestellen: 'bestellt', unterhalten: 'unterhalten', vorbereiten: 'vorbereitet' };
    for (const [inf, expected] of Object.entries(pp)) assert.equal(V.participle(inf), expected, inf);
  });
});

test('waschen Präteritum du-form is wuschst (Duden primary form)', () => {
  assert.equal(V.conjugate('waschen', 'praet')[1], 'wuschst');
  assert.equal(V.conjugate('sich waschen', 'praet')[1], 'wuschst dich');
});
