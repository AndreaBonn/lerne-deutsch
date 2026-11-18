import test from 'node:test';
import assert from 'node:assert/strict';
import { fixture, put, cli } from './fixtures/porting/helpers.mjs';

const check = (root, ...args) => cli('check_porting.mjs', ['--root', root, ...args]);

test('secondary reading counts and positional selection', t => {
  const root = fixture(t);
  put(root, 'data/core/readings.js', "LINGUAI.addReadings([{id:'r-a1-one',cefr:'A1',sentences:['Guten Tag']}]);");
  const result = check(root, 'readings-a', '--stage', 'core');
  assert.equal(result.status, 1);
  assert.match(result.stdout, /1 of 8/);
  const unknown = check(root, 'unknown', '--stage', 'core');
  assert.equal(unknown.status, 1);
  assert.match(unknown.stderr, /Unknown module/);
});

test('reading overlay is required for each item and CEFR must match its ID', t => {
  const root = fixture(t);
  put(root, 'data/core/readings.js', "LINGUAI.addReadings([{id:'r-a1-one',cefr:'A1'},{id:'r-a2-two',cefr:'A1'}]);");
  put(root, 'data/i18n/it/readings.js', "LINGUAI.addStrings('it', {'read:r-a1-one':{title:'Uno'}});");
  const result = check(root, 'readings-a', '--stage', 'core,it');
  assert.equal(result.status, 1);
  assert.match(result.stdout, /CEFR mismatch: r-a2-two/);
  assert.match(result.stdout, /Missing it strings: r-a2-two/);
  assert.doesNotMatch(result.stdout, /Missing it strings: r-a1-one/);
});

test('module reviews bind passes and archives to current content', async t => {
  const { buildModuleBundle, hashBundle } = await import('../../scripts/review-bundle.mjs');
  const root = fixture(t);
  put(root, 'data/core/readings.js', "LINGUAI.addReadings([{id:'r-a1-one',cefr:'A1'}]);");
  put(root, 'data/i18n/it/readings.js', "LINGUAI.addStrings('it', {'read:r-a1-one':{title:'Uno'}});");
  const hash = hashBundle(buildModuleBundle({ root, module: 'readings-a', lang: 'it' }));
  const path = 'specs/german-course/reviews/readings-a-it.json';
  put(root, path, JSON.stringify({unit:'readings-a',lang:'it',verdict:'pass',bundleHash:hash}));
  assert.equal(check(root, 'readings-a', '--stage', 'review').status, 0);
  put(root, path, JSON.stringify({unit:'readings-a',lang:'it',verdict:'fail',archived:{decision:'accepted',bundleHash:hash}}));
  assert.match(check(root, 'readings-a', '--stage', 'review').stdout, /archived/);
  put(root, 'data/i18n/it/readings.js', "LINGUAI.addStrings('it', {'read:r-a1-one':{title:'Due'}});");
  assert.match(check(root, 'readings-a', '--stage', 'review').stdout, /stale archive/);
  put(root, path, JSON.stringify({unit:'readings-a',lang:'it',verdict:'pass',bundleHash:hash}));
  assert.match(check(root, 'readings-a', '--stage', 'review').stdout, /stale verdict/);
});

test('advanced modules require human review and recorded readings require audio', t => {
  const root = fixture(t);
  put(root, 'data/core/readings.js', "LINGUAI.addReadings([{id:'r-c1-one',cefr:'C1',sentences:['Guten Tag']}]);");
  assert.equal(check(root, 'readings-a', 'library-a1', '--stage', 'human').status, 0);
  const advanced = check(root, 'readings-c', 'library-c1', '--stage', 'human');
  assert.equal(advanced.status, 1);
  assert.match(advanced.stdout, /Missing human review: readings-c/);
  assert.match(advanced.stdout, /Missing human review: library-c1/);
  put(root, 'specs/german-course/reviews/readings-c-human.md', 'ESITO: ok\n');
  assert.equal(check(root, 'readings-c', '--stage', 'human').status, 0);
  const audio = check(root, 'readings-c', '--stage', 'audio');
  assert.equal(audio.status, 1);
  assert.match(audio.stdout, /Missing recording.*Guten Tag/);
});

test('interference uses the German target count for Italian learners', t => {
  const root = fixture(t);
  put(root, 'scripts/porting-target.json', JSON.stringify({secondary:{interference:{de:1,en:0,es:0,fr:0,pl:0}}}));
  put(root, 'data/core/interference.js', "window.INTERFERENCE=[{id:'ente',it:'die Ente',for:['it']}];");
  assert.equal(check(root, 'interference', '--stage', 'core').status, 0);
  put(root, 'data/core/interference.js', 'window.INTERFERENCE=[];');
  assert.match(check(root, 'interference', '--stage', 'core').stdout, /it: 0 of 1/);
});

test('chat language stage requires a scene title in the UI dictionary of that language', t => {
  const root = fixture(t);
  put(root, 'data/core/chat-scenarios.js', "window.CHAT_SCENARIOS = [{id:'cafe'},{id:'bahn'}];");
  put(root, 'data/i18n/ui-it.js', "LINGUAI.addUI('it', {'chat.sc.cafe':'Al caffè','chat.sc.bahn':''});");
  const result = check(root, 'chat', '--stage', 'it');
  assert.equal(result.status, 1);
  assert.match(result.stdout, /Missing it scene title: bahn/);
  assert.doesNotMatch(result.stdout, /scene title: cafe/);
  assert.match(check(root, 'chat', '--stage', 'en').stdout, /Missing en UI dictionary/);
  put(root, 'data/i18n/ui-it.js', "LINGUAI.addUI('it', {'chat.sc.cafe':'Al caffè','chat.sc.bahn':'In treno'});");
  assert.equal(check(root, 'chat', '--stage', 'it').status, 0);
});
