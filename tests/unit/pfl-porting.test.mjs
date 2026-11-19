import test from 'node:test';
import assert from 'node:assert/strict';
import { fixture, put, cli, target } from './fixtures/porting/helpers.mjs';

const check = (root, ...args) => cli('check_porting.mjs', ['--root', root, ...args]);

test('own units join the target and require a named human review', t => {
  const root = fixture(t);
  put(root, 'data/core/pfl-01.js', "LINGUAI.registerLevel({code:'PFL',dataFiles:['pfl-01.js']}); LINGUAI.addUnits('PFL',[{id:'pfl-u01',lessons:[{id:'pfl-u01-l1',vocab:[{it:'die Straße'}],exercises:[]}]}]);");
  assert.match(check(root).stdout, /Unexpected unit: pfl-u01/);
  put(root, 'scripts/own-target.json', JSON.stringify({levels:{PFL:{units:1,lessons:1,human:true}},units:{'pfl-u01':{level:'PFL',lessonCount:1,lessons:{'pfl-u01-l1':{exercises:0}}}}}));
  assert.equal(check(root, '--unit', 'pfl-u01', '--stage', 'core').status, 0);
  put(root, 'specs/german-course/reviews/pfl-u01-human.md', 'ESITO: ok\n');
  assert.match(check(root, '--unit', 'pfl-u01', '--stage', 'human').stdout, /Missing REVISORE/);
  put(root, 'specs/german-course/reviews/pfl-u01-human.md', 'ESITO: ok\nREVISORE: in attesa\n');
  assert.equal(check(root, '--unit', 'pfl-u01', '--stage', 'human').status, 0);
  assert.equal(check(root, '--unit', 'a1-u01', '--stage', 'human').status, 0);
  for (const lang of ['it', 'en', 'es', 'fr', 'pl']) {
    for (const file of ['a1-01.js', 'pfl-01.js']) put(root, `data/i18n/${lang}/${file}`, `LINGUAI.addStrings('${lang}', {});`);
  }
  const digest = 'c55d3f778c4663fa';
  put(root, 'data/audio-index.js', `window.AUDIO_INDEX = "${digest}";`);
  put(root, `audio/${digest.slice(0, 2)}/${digest}.mp3`, 'x');
  put(root, 'specs/german-course/curriculum.md', 'a1-u01 pfl-u01');
  const all = check(root, '--all');
  assert.equal(all.status, 0, all.stdout + all.stderr);
});

/* F1 (specs/008-pflege): a pseudo-level library is checked by --all only when
   own-target.json declares its count, and its B1/B2 texts must not be counted
   again by the CEFR library module of the same level. */
test('own secondary counts reach --all and keep the PFL library out of library-b1', t => {
  const root = fixture(t);
  const text = id => `{id:'${id}',cefr:'B1',titleIt:'T',sentences:['Ein Satz.','Noch einer.','Der dritte.'],questions:[{t:'truefalse',q:'Ja?',a:0}]}`;
  put(root, 'data/core/pfl-01.js', "LINGUAI.registerLevel({code:'PFL',dataFiles:['pfl-01.js','library-pfl.js']}); LINGUAI.addUnits('PFL',[{id:'pfl-u01',lessons:[{id:'pfl-u01-l1',exercises:[]}]}]);");
  put(root, 'data/core/library-b1.js', `LINGUAI.addReadings([${text('lib-b1-x')}]);`);
  put(root, 'data/core/library-pfl.js', `LINGUAI.addReadings([${text('lib-pfl-a')},${text('lib-pfl-b')}]);`);
  const own = secondary => JSON.stringify({ levels: { PFL: { cefrLabel: 'B1-B2', units: 1, lessons: 1 } },
    units: { 'pfl-u01': { level: 'PFL', lessonCount: 1, lessons: { 'pfl-u01-l1': { exercises: 0 } } } }, ...(secondary ? { secondary } : {}) });
  put(root, 'scripts/porting-target.json', JSON.stringify({ ...target, secondary: { library: 6 } }));
  put(root, 'scripts/own-target.json', own({ 'library-pfl': 3 }));
  const all = check(root, '--all').stdout;
  assert.match(all, /^library-pfl core: 2 of 3$/m);
  assert.match(all, /^library-b1 core: pass$/m);
  put(root, 'data/core/library-pfl.js', `LINGUAI.addReadings([${text('lib-pfl-a')},${text('lib-pfl-b')},${text('lib-pfl-c')}]);`);
  assert.match(check(root, '--all').stdout, /^library-pfl core: pass$/m);
  assert.match(check(root, 'library-pfl', '--stage', 'core').stdout, /^library-pfl core: pass$/m);
  put(root, 'scripts/own-target.json', own(null));
  assert.doesNotMatch(check(root, '--all').stdout, /library-pfl/);
  put(root, 'scripts/own-target.json', own({ library: 1 }));
  assert.match(check(root, '--all').stderr, /redefines upstream secondary library/);
});

/* Own scenes appended to upstream modules: own-target.json `extra` adds to the
   upstream count by secondary key and may not invent a key upstream lacks. */
test('own extra counts add to upstream chat and conversation modules', t => {
  const root = fixture(t);
  const items = (n, prefix) => Array.from({ length: n }, (_, i) => `{id:'${prefix}${i}'}`).join(',');
  put(root, 'data/core/chat-scenarios.js', `window.CHAT_SCENARIOS = [${items(3, 'chat-')}];`);
  put(root, 'data/core/conversations.js', `window.CONVERSATIONS = [${items(16, 'conv-')}];`);
  put(root, 'scripts/porting-target.json', JSON.stringify({ ...target, secondary: { chat: 1, conversations: 14 } }));
  const run = () => check(root, 'chat', 'conv', 'conv-1', 'conv-2', '--stage', 'core');
  const out = run().stdout;
  assert.match(out, /^chat core: 3 of 1$/m);
  assert.match(out, /^conv-2 core: 9 of 7$/m);
  put(root, 'scripts/own-target.json', JSON.stringify({ levels: {}, units: {}, extra: { chat: 2, conversations: 2 } }));
  const fixed = run();
  assert.equal(fixed.status, 0, fixed.stdout + fixed.stderr);
  for (const id of ['chat', 'conv', 'conv-1', 'conv-2']) assert.match(fixed.stdout, new RegExp(`^${id} core: pass$`, 'm'));
  put(root, 'scripts/own-target.json', JSON.stringify({ levels: {}, units: {}, extra: { pflege: 2 } }));
  assert.match(run().stderr, /extra pflege has no upstream count/);
});

/* Medical texts of a pseudo-level with human: true need the same named human
   review as its units, not the n/a of the CEFR libraries below B2. */
test('a human pseudo-level library needs ESITO and REVISORE', t => {
  const root = fixture(t);
  put(root, 'data/core/pfl-01.js', "LINGUAI.registerLevel({code:'PFL',dataFiles:['pfl-01.js','library-pfl.js']}); LINGUAI.addUnits('PFL',[{id:'pfl-u01',lessons:[{id:'pfl-u01-l1',exercises:[]}]}]);");
  put(root, 'data/core/library-pfl.js', "LINGUAI.addReadings([{id:'lib-pfl-a',cefr:'B1',sentences:['Ein Satz.'],questions:[]}]);");
  put(root, 'scripts/own-target.json', JSON.stringify({ levels: { PFL: { cefrLabel: 'B1-B2', human: true, units: 1, lessons: 1 } },
    units: { 'pfl-u01': { level: 'PFL', lessonCount: 1, lessons: { 'pfl-u01-l1': { exercises: 0 } } } }, secondary: { 'library-pfl': 1 } }));
  const human = () => check(root, 'library-pfl', '--stage', 'human');
  assert.match(human().stdout, /^library-pfl human: Missing human review: library-pfl$/m);
  put(root, 'specs/german-course/reviews/library-pfl-human.md', 'ESITO: in attesa\n');
  assert.match(human().stdout, /Missing REVISORE/);
  put(root, 'specs/german-course/reviews/library-pfl-human.md', 'ESITO: in attesa\nREVISORE: in attesa\n');
  const ok = human();
  assert.equal(ok.status, 0, ok.stdout);
  assert.match(ok.stdout, /^library-pfl human: pass$/m);
});
