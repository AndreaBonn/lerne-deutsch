import test from 'node:test';
import assert from 'node:assert/strict';
import { fixture, put, cli } from './fixtures/porting/helpers.mjs';

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
