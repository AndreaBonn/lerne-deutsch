import test from 'node:test';
import assert from 'node:assert/strict';
import { chmodSync, existsSync, readFileSync, symlinkSync } from 'node:fs';
import { join } from 'node:path';
import { createHash } from 'node:crypto';
import { buildFileBundle, hashBundle } from '../../scripts/review-bundle.mjs';
import { buildBundle, buildPrompt, pickHumanLessons, validateReview, runCodex } from '../../scripts/review_lot.mjs';
import { fixture, put, cli } from './fixtures/porting/helpers.mjs';

const FAKE = `#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';
const args = process.argv.slice(2);
const input = readFileSync(0, 'utf8');
writeFileSync(process.env.FAKE_MARKER, JSON.stringify({args, input}));
console.log(input);
if (process.env.FAKE_MODE === 'timeout') { setInterval(() => {}, 1000); }
else {
  const schema = JSON.parse(readFileSync(args[args.indexOf('--output-schema') + 1], 'utf8'));
  if (schema.properties.verdict.enum.join(',') !== 'pass,fail') process.exit(8);
  if (process.env.FAKE_MODE === 'crash') {
    console.error(Array.from({length: 30}, (_, i) => 'diagnostic-' + (i + 1)).join('\\n'));
    process.exit(7);
  }
  const review = {unit: process.env.FAKE_UNIT, lang: 'en', verdict: process.env.FAKE_MODE === 'fail' ? 'fail' : 'pass',
    findings: process.env.FAKE_MODE === 'fail' ? [{path: '$.lessons[0]', kind: 'grammar', msg: 'Wrong case'}] : []};
  if (process.env.FAKE_MODE === 'schema') review.findings = [{path: 3, kind: 'grammar', msg: 'Wrong type'}];
  writeFileSync(args[args.indexOf('--output-last-message') + 1], process.env.FAKE_MODE === 'malformed' ? '{bad' : JSON.stringify(review));
}
`;

function setup(t, advanced = false) {
  const root = fixture(t);
  const id = advanced ? 'b2-u01' : 'a1-u01';
  if (advanced) {
    const lessons = Array.from({ length: 9 }, (_, i) => ({ id: `${id}-l${i + 1}`, exercises: [] }));
    put(root, 'data/core/curriculum-index.js', "LINGUAI.registerLevel({code:'B2',dataFiles:['a1-01.js']});");
    put(root, 'data/core/a1-01.js', `LINGUAI.addUnits('B2', ${JSON.stringify([{ id, lessons }])});`);
  }
  const patches = { [`unit:${id}`]: { title: 'Greetings', id: 'ignored' },
    [`lesson:${id}-l1`]: { title: 'Hello', theory: [{ contrast: 'English has no grammatical gender.' }],
      vocab: ['street'], exercises: [{ q: 'Write the greeting', a: 'must not overwrite' }, { opts: ['Hello', 'Bye'] }] } };
  put(root, 'data/i18n/en/a1-01.js', `LINGUAI.addStrings('en', ${JSON.stringify(patches)});`);
  put(root, 'bin/codex', FAKE);
  chmodSync(join(root, 'bin/codex'), 0o755);
  const marker = join(root, 'called.json');
  const env = { PATH: `${join(root, 'bin')}:${process.env.PATH}`, FAKE_MARKER: marker, FAKE_UNIT: id };
  return { root, id, marker, env, review: join(root, `specs/german-course/reviews/${id}-en.json`) };
}

const reviewCli = (ctx, args = [], mode = 'pass') => cli('review_lot.mjs',
  ['--root', ctx.root, '--unit', ctx.id, '--lang', 'en', ...args], { ...ctx.env, FAKE_MODE: mode });

test('bundle uses repository merge semantics and retains the neutral layer', t => {
  const ctx = setup(t);
  const bundle = buildBundle({ root: ctx.root, unitId: ctx.id, lang: 'en' });
  assert.equal(bundle.merged.title, 'Greetings');
  assert.equal(bundle.merged.id, ctx.id);
  assert.equal(bundle.merged.lessons[0].vocab[0].tr, 'street');
  assert.equal(bundle.merged.lessons[0].exercises[0].q, 'Write the greeting');
  assert.equal(bundle.merged.lessons[0].exercises[0].a, 'Guten Tag');
  assert.equal(bundle.merged.lessons[0].theory[0].contrast, 'English has no grammatical gender.');
  assert.equal(bundle.neutral.lessons[0].vocab[0].it, 'die Straße');
  assert.equal(Object.hasOwn(bundle.neutral.lessons[0].vocab[0], 'tr'), false);
});

test('pass verdict writes validated JSON through real argument-array invocation of fake Codex', t => {
  const ctx = setup(t);
  const result = reviewCli(ctx);
  assert.equal(result.status, 0, result.stderr);
  const bundle = buildBundle({ root: ctx.root, unitId: ctx.id, lang: 'en' });
  assert.deepEqual(JSON.parse(readFileSync(ctx.review, 'utf8')), { unit: ctx.id, lang: 'en', verdict: 'pass', findings: [],
    bundleHash: createHash('sha256').update(JSON.stringify(bundle)).digest('hex') });
  const { args, input } = JSON.parse(readFileSync(ctx.marker, 'utf8'));
  assert.equal(args[0], 'exec');
  assert.equal(args[args.indexOf('--sandbox') + 1], 'read-only');
  assert.ok(args.includes('--ephemeral'));
  assert.match(input, /English has no grammatical gender/);
});

test('successful review prints only a verdict summary without echoed prompt content', t => {
  const ctx = setup(t);
  const result = reviewCli(ctx);
  assert.equal(result.status, 0, result.stderr);
  assert.match(result.stdout, /a1-u01 en: pass, 0 findings/);
  assert.doesNotMatch(result.stdout + result.stderr, /English has no grammatical gender/);
  assert.match(JSON.parse(readFileSync(ctx.marker, 'utf8')).input, /English has no grammatical gender/);
});

test('failed Codex prints at most the final twenty stderr lines', t => {
  const ctx = setup(t);
  const result = reviewCli(ctx, [], 'crash');
  assert.equal(result.status, 1);
  assert.match(result.stderr, /diagnostic-11\n/);
  assert.match(result.stderr, /diagnostic-30\n/);
  assert.doesNotMatch(result.stderr, /diagnostic-10\n/);
  assert.equal(result.stderr.match(/diagnostic-\d+/g).length, 20);
  assert.match(result.stderr, /Codex failed/);
  assert.equal(result.stdout, '');
});

test('fail verdict is stored with findings and exits 1', t => {
  const ctx = setup(t);
  const result = reviewCli(ctx, [], 'fail');
  assert.equal(result.status, 1);
  const report = JSON.parse(readFileSync(ctx.review, 'utf8'));
  assert.equal(report.verdict, 'fail');
  assert.deepEqual(report.findings, [{ path: '$.lessons[0]', kind: 'grammar', msg: 'Wrong case' }]);
});

test('malformed, schema-invalid and failed Codex runs write no review', t => {
  for (const mode of ['malformed', 'schema', 'crash']) {
    const ctx = setup(t);
    const result = reviewCli(ctx, [], mode);
    assert.equal(result.status, 1);
    assert.ok(existsSync(ctx.marker));
    assert.equal(existsSync(ctx.review), false);
  }
  const ctx = setup(t);
  assert.equal(reviewCli(ctx).status, 0);
  const before = readFileSync(ctx.review, 'utf8');
  assert.equal(reviewCli(ctx, [], 'malformed').status, 1);
  assert.equal(readFileSync(ctx.review, 'utf8'), before);
});

test('dry-run prints bundle bytes and prompt sha256 without Codex or review writes', t => {
  const ctx = setup(t, true);
  const bundle = buildBundle({ root: ctx.root, unitId: ctx.id, lang: 'en' });
  const prompt = buildPrompt(bundle);
  const result = reviewCli(ctx, ['--dry-run']);
  assert.equal(result.status, 0, result.stderr);
  const summary = JSON.parse(result.stdout);
  assert.equal(summary.bundleBytes, Buffer.byteLength(JSON.stringify(bundle)));
  assert.equal(summary.promptSha256, createHash('sha256').update(prompt).digest('hex'));
  assert.equal(existsSync(ctx.marker), false);
  assert.equal(existsSync(ctx.review), false);
  assert.equal(existsSync(join(ctx.root, `specs/german-course/reviews/${ctx.id}-human.md`)), false);
  assert.equal(reviewCli(ctx).status, 0);
  assert.ok(existsSync(ctx.marker));
  assert.ok(existsSync(ctx.review));
});

test('B2 sample is deterministic with one lesson per four and never overwrites human work', t => {
  const ctx = setup(t, true);
  assert.equal(reviewCli(ctx, ['--seed', '1']).status, 0);
  const path = join(ctx.root, `specs/german-course/reviews/${ctx.id}-human.md`);
  const sample = readFileSync(path, 'utf8');
  assert.equal(sample, '<!-- picked lessons -->\nb2-u01-l3\nb2-u01-l5\nb2-u01-l9\n');
  assert.equal(reviewCli(ctx, ['--seed', '1']).status, 0);
  assert.equal(readFileSync(path, 'utf8'), sample);
  put(ctx.root, `specs/german-course/reviews/${ctx.id}-human.md`, `${sample}ESITO: ok\n`);
  assert.equal(reviewCli(ctx).status, 0);
  assert.equal(readFileSync(path, 'utf8'), `${sample}ESITO: ok\n`);
  assert.deepEqual(pickHumanLessons({ lessons: [], seed: 1 }), []);
});

test('validator enforces exact schema and unit/language identity', () => {
  const valid = { unit: 'a1-u01', lang: 'en', verdict: 'pass', findings: [] };
  assert.deepEqual(validateReview({ value: valid, unitId: 'a1-u01', lang: 'en' }), valid);
  for (const value of [null, { ...valid, extra: true }, { ...valid, unit: 'b2-u01' }, { ...valid, lang: 'pl' },
    { ...valid, verdict: 'maybe' }, { ...valid, findings: [null] }, { ...valid, findings: [{ path: 'x', kind: 'x' }] }]) {
    assert.throws(() => validateReview({ value, unitId: 'a1-u01', lang: 'en' }), /Invalid review/);
  }
});

test('Codex timeout is a failure, without accepting a report', t => {
  const ctx = setup(t);
  const originalEnv = process.env;
  const saved = { ...process.env };
  Object.assign(process.env, ctx.env, { FAKE_MODE: 'timeout' });
  try { assert.throws(() => runCodex({ prompt: 'Review', timeout: 3000 }), /Codex failed|timed out/); }
  finally {
    Object.keys(process.env).filter(key => !Object.hasOwn(saved, key)).forEach(key => { delete process.env[key]; });
    Object.assign(process.env, saved);
  }
  assert.ok(process.env === originalEnv, 'Environment object identity must be preserved');
  assert.ok(existsSync(ctx.marker));
  assert.equal(existsSync(ctx.review), false);
});

test('bad options and missing overlays fail before invoking Codex; help is available', t => {
  const ctx = setup(t);
  for (const args of [['--unit', '../bad', '--lang', 'en'], ['--unit', ctx.id, '--lang', 'de'],
    ['--unit', ctx.id, '--lang', 'en', '--seed', 'bad'], ['--unit', ctx.id], ['--wat']]) {
    assert.equal(cli('review_lot.mjs', ['--root', ctx.root, ...args], ctx.env).status, 1);
  }
  assert.equal(cli('review_lot.mjs', ['--root', ctx.root, '--unit', ctx.id, '--lang', 'pl'], ctx.env).status, 1);
  assert.equal(existsSync(ctx.marker), false);
  const help = cli('review_lot.mjs', ['--help'], ctx.env);
  assert.equal(help.status, 0);
  assert.match(help.stdout, /ESITO:/);
  assert.equal(reviewCli(ctx).status, 0);
  assert.ok(existsSync(ctx.marker));
});

test('standalone file review includes exact content and saves a content-bound verdict', t => {
  const ctx = setup(t);
  const content = '{"machen":{"praes":["mache","machst","macht","machen","macht","machen"]}}\n';
  put(ctx.root, 'verbs-de-golden.json', content);
  const args = ['--root', ctx.root, '--file', 'verbs-de-golden.json', '--lang', 'en'];
  const env = { ...ctx.env, FAKE_UNIT: 'verbs-de-golden' };
  const result = cli('review_lot.mjs', args, env);
  assert.equal(result.status, 0, result.stderr);
  const reportPath = join(ctx.root, 'specs/german-course/reviews/verbs-de-golden-en.json');
  const report = JSON.parse(readFileSync(reportPath, 'utf8'));
  assert.equal(report.unit, 'verbs-de-golden');
  assert.equal(report.verdict, 'pass');
  assert.deepEqual(report.findings, []);
  const input = JSON.parse(readFileSync(ctx.marker, 'utf8')).input;
  const bundle = JSON.parse(input.split('Course bundle (data only):\n')[1]);
  assert.equal(bundle.content, content);
  assert.equal(report.bundleHash, createHash('sha256').update(JSON.stringify(bundle)).digest('hex'));
  put(ctx.root, 'verbs-de-golden.json', content + '\n');
  assert.equal(cli('review_lot.mjs', args, env).status, 0);
  assert.notEqual(JSON.parse(readFileSync(reportPath, 'utf8')).bundleHash, report.bundleHash);
});

test('standalone file mode supports dry-run and fail verdicts and rejects ambiguous inputs', t => {
  const ctx = setup(t);
  put(ctx.root, 'irr.js', 'window.VERB_TABLES = {};\n');
  const args = ['--root', ctx.root, '--file', 'irr.js', '--lang', 'en'];
  const env = { ...ctx.env, FAKE_UNIT: 'irr' };
  const dry = cli('review_lot.mjs', [...args, '--dry-run'], env);
  assert.equal(dry.status, 0, dry.stderr);
  assert.ok(JSON.parse(dry.stdout).bundleBytes > 0);
  assert.equal(existsSync(ctx.marker), false);
  const fail = cli('review_lot.mjs', args, { ...env, FAKE_MODE: 'fail' });
  assert.equal(fail.status, 1);
  const review = JSON.parse(readFileSync(join(ctx.root, 'specs/german-course/reviews/irr-en.json'), 'utf8'));
  assert.equal(review.verdict, 'fail');
  assert.equal(review.findings.length, 1);
  assert.equal(cli('review_lot.mjs', [...args, '--unit', ctx.id], env).status, 1);
  assert.equal(cli('review_lot.mjs', ['--root', ctx.root, '--file', 'absent.json', '--lang', 'en'], env).status, 1);
});

test('standalone file mode rejects paths outside the root before reading', t => {
  const ctx = setup(t);
  const outside = fixture(t);
  put(outside, 'private.txt', 'private review content');
  symlinkSync(join(outside, 'private.txt'), join(ctx.root, 'linked.txt'));
  symlinkSync(outside, join(ctx.root, 'linked-directory'));
  for (const file of ['/etc/hostname', '../x', join(outside, 'private.txt'),
    'linked.txt', 'linked-directory/private.txt']) {
    const result = cli('review_lot.mjs', ['--root', ctx.root, '--file', file, '--lang', 'en', '--dry-run'], ctx.env);
    assert.equal(result.status, 1, file);
    assert.match(result.stderr, /outside repository root/, file);
    assert.equal(result.stdout, '', file);
  }
  put(ctx.root, 'safe.txt', 'safe review content');
  for (const file of ['safe.txt', join(ctx.root, 'safe.txt')]) {
    const result = cli('review_lot.mjs', ['--root', ctx.root, '--file', file, '--lang', 'en', '--dry-run'], ctx.env);
    assert.equal(result.status, 0, result.stderr);
    assert.ok(JSON.parse(result.stdout).bundleBytes > 0);
  }
});

const overlayArgs = (ctx, file, lang = 'en') => ['--root', ctx.root, '--file', file, '--lang', lang, '--dry-run'];

test('overlay bundle carries the neutral layer and a distinct unit name', t => {
  const ctx = setup(t);
  put(ctx.root, 'data/core/readings.js', 'LINGUAI.addReadings([{id:"r1",sentences:["Guten Tag"]}]);\n');
  put(ctx.root, 'data/i18n/en/readings.js', 'LINGUAI.addStrings("en",{"r1":{tr:"Good day"}});\n');
  const overlay = buildFileBundle({ root: ctx.root, file: 'data/i18n/en/readings.js', lang: 'en' });
  assert.equal(overlay.unit, 'i18n-readings');
  assert.equal(overlay.lang, 'en');
  assert.match(overlay.neutral, /Guten Tag/);
  assert.match(overlay.content, /Good day/);
  const core = buildFileBundle({ root: ctx.root, file: 'data/core/readings.js', lang: 'en' });
  assert.equal(core.unit, 'readings');
  assert.equal(core.neutral, undefined);
});

test('core and overlay reviews of the same name write different verdict files', t => {
  const ctx = setup(t);
  put(ctx.root, 'data/core/readings.js', 'LINGUAI.addReadings([]);\n');
  put(ctx.root, 'data/i18n/en/readings.js', 'LINGUAI.addStrings("en",{});\n');
  const run = (file, unit) => cli('review_lot.mjs', ['--root', ctx.root, '--file', file, '--lang', 'en'],
    { ...ctx.env, FAKE_UNIT: unit });
  assert.equal(run('data/core/readings.js', 'readings').status, 0);
  assert.equal(run('data/i18n/en/readings.js', 'i18n-readings').status, 0);
  const dir = join(ctx.root, 'specs/german-course/reviews');
  assert.equal(JSON.parse(readFileSync(join(dir, 'readings-en.json'), 'utf8')).unit, 'readings');
  assert.equal(JSON.parse(readFileSync(join(dir, 'i18n-readings-en.json'), 'utf8')).unit, 'i18n-readings');
});

test('overlay review rejects a --lang that differs from the language in the path', t => {
  const ctx = setup(t);
  put(ctx.root, 'data/core/readings.js', 'x\n');
  put(ctx.root, 'data/i18n/en/readings.js', 'y\n');
  const result = cli('review_lot.mjs', overlayArgs(ctx, 'data/i18n/en/readings.js', 'pl'), ctx.env);
  assert.equal(result.status, 1);
  assert.match(result.stderr, /language/i);
  assert.equal(result.stdout, '');
});

test('an overlay without its core file is rejected, not reviewed as a plain file', t => {
  const ctx = setup(t);
  put(ctx.root, 'data/i18n/en/orphan.js', 'y\n');
  const result = cli('review_lot.mjs', overlayArgs(ctx, 'data/i18n/en/orphan.js', 'en'), ctx.env);
  assert.equal(result.status, 1);
  assert.match(result.stderr, /data\/core\/orphan\.js/);
  put(ctx.root, 'data/core/orphan.js', 'x\n');
  assert.equal(cli('review_lot.mjs', overlayArgs(ctx, 'data/i18n/en/orphan.js', 'en'), ctx.env).status, 0,
    'with the core in place the same overlay is accepted');
});

test('prompt context is chosen by file kind: verb data, overlay, other core content', () => {
  const verb = buildPrompt({ unit: 'verbs-data', lang: 'en', content: 'v' });
  assert.match(verb, /Standalone verb data/);
  assert.match(buildPrompt({ unit: 'irr', lang: 'en', content: 'v' }), /Standalone verb data/);
  const overlay = buildPrompt({ unit: 'i18n-readings', lang: 'pl', neutral: 'N', content: 'C' });
  assert.doesNotMatch(overlay, /Standalone verb data/);
  assert.match(overlay, /learner-language overlay in pl/);
  assert.match(overlay, /align with neutral by index/);
  const core = buildPrompt({ unit: 'conversations', lang: 'en', content: 'C' });
  assert.doesNotMatch(core, /Standalone verb data/);
  assert.match(core, /German course data, check German correctness and level/);
});

test('core file bundle hash is unchanged so existing verdicts stay valid', t => {
  const ctx = setup(t);
  put(ctx.root, 'data/core/cils.js', 'x = 1;\n');
  const bundle = buildFileBundle({ root: ctx.root, file: 'data/core/cils.js', lang: 'it' });
  const frozen = '{"unit":"cils","lang":"it","content":"x = 1;\\n"}';
  assert.equal(JSON.stringify(bundle), frozen);
  assert.equal(hashBundle(bundle), createHash('sha256').update(frozen).digest('hex'));
});

test('overlay path outside the root is still rejected', t => {
  const ctx = setup(t);
  const result = cli('review_lot.mjs', overlayArgs(ctx, '../data/i18n/en/readings.js'), ctx.env);
  assert.equal(result.status, 1);
  assert.match(result.stderr, /outside repository root/);
});

test('the prompt tells the judge that toIt means a translation into German', () => {
  // Field names come from the Italian fork (D4). Without this line the judge read
  // dir "toIt" as "into Italian" and failed a correct unit three times (b2-u01).
  const prompt = buildPrompt({ unit: 'b2-u01', lang: 'it', content: 'C' });
  assert.match(prompt, /dir: "toIt"` means a\s+translation INTO German/);
  assert.match(prompt, /every `it\*`\s+field/);
});

test('the prompt states the lesson format and where the long texts live', () => {
  // C1 lots kept failing on "single-sentence exercises are not C1": the judge did
  // not know the exercise types and counts are fixed by the original course and
  // that the level's long texts are in the library. The line states the fact and
  // keeps the level check on the language inside that format.
  const prompt = buildPrompt({ unit: 'c1-u01', lang: 'it', content: 'C' });
  assert.match(prompt, /format of the original course/);
  assert.match(prompt, /library/);
  assert.match(prompt, /Judge CEFR adequacy on the language/);
});
