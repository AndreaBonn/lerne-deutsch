import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, copyFileSync, writeFileSync, openSync, closeSync, readFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';
import vm from 'node:vm';

function fixture(files) {
  const root = mkdtempSync(join(tmpdir(), 'german-tooling-'));
  for (const name of ['validate.mjs', 'neutral-letters.mjs', 'parity.mjs', 'check-falsi-amici.mjs']) {
    const target = join(root, 'scripts', name);
    mkdirSync(join(root, 'scripts'), { recursive: true });
    copyFileSync(new URL(`../../scripts/${name}`, import.meta.url), target);
  }
  for (const [path, content] of Object.entries(files)) {
    mkdirSync(join(root, path, '..'), { recursive: true });
    writeFileSync(join(root, path), content);
  }
  return root;
}

function run(root, script, args = []) {
  const stdout = join(root, 'stdout');
  const stderr = join(root, 'stderr');
  const descriptors = [openSync(stdout, 'w'), openSync(stderr, 'w')];
  try {
    const result = spawnSync(process.execPath, [join(root, 'scripts', script), ...args], {
      stdio: ['ignore', ...descriptors], timeout: 15000
    });
    if (result.error) throw result.error;
    return { ...result, stdout: readFileSync(stdout, 'utf8'), stderr: readFileSync(stderr, 'utf8') };
  } finally {
    descriptors.forEach(fd => closeSync(fd));
  }
}

const CORE_FILES = ['curriculum-index', 'conversations', 'grammar-reference', 'phonetics', 'readings', 'writing'];
function validationFixture(chat) {
  const files = {
    'assets/js/i18n.js': '',
    'assets/js/i18n-merge.js': 'LINGUAI.applyStrings = lang => { if (lang !== "it") throw Error("Expected Italian explanations"); };',
    'data/core/chat-scenarios.js': `window.CHAT_SCENARIOS = ${JSON.stringify(chat)};`
  };
  for (const name of CORE_FILES) {
    files[`data/core/${name}.js`] = '';
    files[`data/i18n/it/${name}.js`] = '';
  }
  return fixture(files);
}

test('validate defaults to Italian overlays and admits German neutral values', () => {
  const result = run(validationFixture([{ titleIt: 'Straße, Äpfel und Öl' }]), 'validate.mjs');
  assert.equal(result.status, 0, result.stderr + result.stdout);
  assert.match(result.stdout, /OK/);
});

test('settings voice button speaks the same German sentence collected for recording', () => {
  const callbacks = {};
  let spoken;
  const root = {
    querySelectorAll: () => [],
    querySelector: selector => ({ addEventListener: (event, callback) => { callbacks[selector + event] = callback; } })
  };
  const box = {
    Core: { esc: String, state: { settings: {} } },
    I18n: { t: key => key },
    Views: { shell: { set() {}, head: () => '', root: () => root } },
    Audio2: { italianVoices: () => [], speak: text => { spoken = text; } },
    LlmProviders: { list: () => [] },
    Consent: { udzielonaLlm: () => false, udzielonaChat: () => false },
    Retention: { wspiera: { miejsce: () => false, odznaka: () => false }, samodzielna: () => false, mozliwaInstalacja: () => false },
    location: { protocol: 'file:' }, navigator: {}
  };
  box.window = box;
  vm.runInNewContext(readFileSync(new URL('../../assets/js/views-settings.js', import.meta.url), 'utf8'), box);
  box.Views.impostazioni();
  callbacks['.js-testclick']();
  assert.equal(spoken, 'Hallo! Ich bin deine deutsche Stimme. Lass uns zusammen lernen.');
  const files = {};
  for (const name of [...CORE_FILES, 'interference', 'cils']) files[`data/core/${name}.js`] = '';
  const dir = fixture(files);
  copyFileSync(new URL('../../scripts/extract_strings.mjs', import.meta.url), join(dir, 'scripts/extract_strings.mjs'));
  const result = run(dir, 'extract_strings.mjs');
  assert.equal(result.status, 0, result.stderr);
  assert.deepEqual(JSON.parse(readFileSync(join(dir, 'scripts/audio-strings.json'), 'utf8')), { primary: [spoken], other: [] });
});

test('audio tools select German voices and never rewrite stress without listening evidence', () => {
  const dir = fixture({});
  const source = new URL('../../scripts/', import.meta.url).pathname;
  const driver = `# /// script
# dependencies = []
# ///
import json, runpy, sys, types
sys.modules['edge_tts'] = types.ModuleType('edge_tts')
sys.modules['numpy'] = types.SimpleNamespace(ndarray=object)
root = ${JSON.stringify(source)}
audio = runpy.run_path(root + 'build_audio.py')
print(json.dumps({
 'primary': audio['VOICE_PRIMARY'], 'other': audio['VOICE_OTHER'],
 'fixes': audio['STRESS_FIXES'],
 'spoken': audio['voiced_text']('Die Straße ist schön. Figurati!'),
 'checks': [runpy.run_path(root + name)['VOICE'] for name in ['check_minpairs.py', 'check_connected.py']]
}))
`;
  writeFileSync(join(dir, 'scripts/audio-check.py'), driver);
  // Use a dependency-free driver so npm tests never resolve Python packages or contact TTS.
  writeFileSync(join(dir, 'scripts/run-audio.mjs'), `import { spawnSync } from 'node:child_process';
const result = spawnSync('uv', ['run', '--offline', '--no-cache', '--no-python-downloads', '--script', ${JSON.stringify(join(dir, 'scripts/audio-check.py'))}], { stdio: 'inherit' });
if (result.error) throw result.error;
process.exitCode = result.status;
`);
  const result = run(dir, 'run-audio.mjs');
  assert.equal(result.status, 0, result.stderr);
  assert.deepEqual(JSON.parse(result.stdout), {
    primary: 'de-DE-KatjaNeural', other: 'de-DE-ConradNeural', fixes: {},
    spoken: 'Die Straße ist schön. Figurati!', checks: ['de-DE-KatjaNeural', 'de-DE-KatjaNeural']
  });
});

test('validate catches Italian stopwords and foreign letters before overlays', () => {
  const result = run(validationFixture([{ titleIt: 'perché è Łódź' }]), 'validate.mjs');
  assert.equal(result.status, 1, result.stderr + result.stdout);
  assert.match(result.stdout, /stopwords.*perché/);
  assert.match(result.stdout, /letters.*è/);
});

test('parity uses Italian as reference and reports shape differences against it', () => {
  const root = fixture({
    'assets/js/i18n.js': 'window.I18n = { LOCALE: { it: "it-IT", en: "en-US", pl: "pl-PL" } };',
    'data/core/interference.js': 'window.INTERFERENCE = [];',
    'data/i18n/it/course.js': 'LINGUAI.addStrings("it", { lesson: { title: "Titolo" } });',
    'data/i18n/en/course.js': 'LINGUAI.addStrings("en", { lesson: { title: "Title" } });',
    'data/i18n/pl/course.js': 'LINGUAI.addStrings("pl", { lesson: { title: "Tytuł", extra: "x" } });',
    'data/i18n/ui-it.js': 'LINGUAI.addUI("it", { hello: "Ciao" });',
    'data/i18n/ui-en.js': 'LINGUAI.addUI("en", { hello: "Hello" });',
    'data/i18n/ui-pl.js': 'LINGUAI.addUI("pl", { hello: "Cześć" });'
  });
  const match = run(root, 'parity.mjs', ['en']);
  assert.equal(match.status, 0, match.stderr + match.stdout);
  assert.match(match.stdout, /reference: it/);
  const mismatch = run(root, 'parity.mjs', ['pl']);
  assert.equal(mismatch.status, 1);
  assert.match(mismatch.stdout, /lesson.extra/);
});

test('false friends checks the five explanation languages, excluding German', () => {
  const files = { 'data/core/interference.js': 'window.INTERFERENCE = [];', 'data/audio-index.js': 'window.AUDIO_INDEX = "";' };
  for (const lang of ['it', 'en', 'es', 'fr', 'pl']) files[`data/i18n/${lang}/interference.js`] = '';
  const result = run(fixture(files), 'check-falsi-amici.mjs');
  assert.equal(result.status, 0, result.stderr + result.stdout);
  for (const lang of ['it', 'en', 'es', 'fr', 'pl']) assert.match(result.stdout, new RegExp(` ${lang}: 0`));
});

/* Contrastive notes are written per language (CLAUDE.md), so an example may
   carry a `note` in French and none in Italian. That optional field must not
   turn parity red, while a missing example still must. */
test('parity tolerates a per-language note but still reports a missing example', () => {
  const ex = (items) => `{ lesson: { grammar: { examples: [${items}] } } }`;
  const root = fixture({
    'assets/js/i18n.js': 'window.I18n = { LOCALE: { it: "it-IT", fr: "fr-FR", pl: "pl-PL" } };',
    'data/core/interference.js': 'window.INTERFERENCE = [];',
    'data/i18n/it/course.js': `LINGUAI.addStrings("it", ${ex('{ tr: "a" }, { tr: "b", note: "n" }')});`,
    'data/i18n/fr/course.js': `LINGUAI.addStrings("fr", ${ex('{ tr: "a", note: "vous" }, { tr: "b" }')});`,
    'data/i18n/pl/course.js': `LINGUAI.addStrings("pl", ${ex('{ tr: "a", note: "x" }')});`,
    'data/i18n/ui-it.js': 'LINGUAI.addUI("it", { hello: "Ciao" });',
    'data/i18n/ui-fr.js': 'LINGUAI.addUI("fr", { hello: "Salut" });',
    'data/i18n/ui-pl.js': 'LINGUAI.addUI("pl", { hello: "Cześć" });'
  });
  const optional = run(root, 'parity.mjs', ['fr']);
  assert.equal(optional.status, 0, optional.stdout);
  const missing = run(root, 'parity.mjs', ['pl']);
  assert.equal(missing.status, 1, missing.stdout);
  assert.match(missing.stdout, /lesson\.grammar\.examples: 2 elementów w it, 1 tutaj/);
});

/* Italian is the reference but has only two plural categories; Polish needs
   few/many. A plural object where Italian has a plain string is therefore
   allowed, provided it carries every category of its locale. The opposite
   (plural in Italian, plain string here) still fails. */
test('parity lets a richer language use plural forms where Italian has a string', () => {
  const root = fixture({
    'assets/js/i18n.js': 'window.I18n = { LOCALE: { it: "it-IT", en: "en-US", pl: "pl-PL" } };',
    'data/core/interference.js': 'window.INTERFERENCE = [];',
    'data/i18n/it/course.js': 'LINGUAI.addStrings("it", { lesson: { title: "T" } });',
    'data/i18n/en/course.js': 'LINGUAI.addStrings("en", { lesson: { title: "T" } });',
    'data/i18n/pl/course.js': 'LINGUAI.addStrings("pl", { lesson: { title: "T" } });',
    'data/i18n/ui-it.js': 'LINGUAI.addUI("it", { cards: "{n} carte", days: { one: "{n} giorno", other: "{n} giorni" } });',
    'data/i18n/ui-pl.js': 'LINGUAI.addUI("pl", { cards: { one: "a", few: "b", many: "c", other: "d" }, days: { one: "a", few: "b", many: "c", other: "d" } });',
    'data/i18n/ui-en.js': 'LINGUAI.addUI("en", { cards: { one: "{n} card" }, days: "{n} days" });'
  });
  const richer = run(root, 'parity.mjs', ['pl']);
  assert.equal(richer.status, 0, richer.stdout);
  const broken = run(root, 'parity.mjs', ['en']);
  assert.equal(broken.status, 1, broken.stdout);
  assert.match(broken.stdout, /ui\.cards: brak formy „other"/);
  assert.match(broken.stdout, /ui\.days: formy liczby w it, napis tutaj/);
});
