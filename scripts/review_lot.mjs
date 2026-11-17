import { readFileSync, writeFileSync, existsSync, mkdirSync, mkdtempSync, rmSync, openSync, closeSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';
import { spawnSync } from 'node:child_process';
import { stableJson, unitLessons } from './snapshot_target.mjs';
import { parseOptions, LANGUAGES, ADVANCED_LEVELS } from './check_porting.mjs';
import { buildBundle, buildFileBundle, hashBundle } from './review-bundle.mjs';
export { buildBundle } from './review-bundle.mjs';

const ROOT = fileURLToPath(new URL('../', import.meta.url));
const CODEX_TIMEOUT = 180000;
const DEFAULT_SEED = 1;
const MAX_SEED = 0xffffffff;
const SAMPLE_BLOCK = 4;
const STDERR_LINES = 20;
const HELP = `Usage: node scripts/review_lot.mjs --unit <id> --lang <it|en|es|fr|pl>
  Or: --file <path> --lang <it|en|es|fr|pl>
  [--root <dir>] [--dry-run] [--seed 1] [--help]
Merge uses the repository's LINGUAI.applyStrings; the bundle also includes neutral values.
--file data/i18n/<lang>/<name>.js bundles the overlay with data/core/<name>.js (unit i18n-<name>); --lang must equal <lang>.
Dry-run prints bundleBytes and promptSha256, without calling Codex or writing reviews.
Codex timeout: 180 seconds. A valid fail verdict is saved and exits 1.
B2-C2: sample one lesson per block of four (including a partial block), seed 1 by default.
Create <unit>-human.md with picked IDs only; existing files are preserved.
Human completion requires an additional nonempty ESITO: line after the IDs (e.g. ESITO: ok).
Seed must be an unsigned 32-bit integer. Invalid output or Codex failure writes nothing.`;
const STRING_SCHEMA = { type: 'string' };
const SCHEMA = {
  type: 'object', additionalProperties: false, required: ['unit', 'lang', 'verdict', 'findings'],
  properties: { unit: STRING_SCHEMA, lang: STRING_SCHEMA, verdict: { type: 'string', enum: ['pass', 'fail'] },
    findings: { type: 'array', items: { type: 'object', additionalProperties: false,
      required: ['path', 'kind', 'msg'], properties: { path: STRING_SCHEMA, kind: STRING_SCHEMA, msg: STRING_SCHEMA } } } }
};

const VERB_CONTEXT = '\nStandalone verb data: review every entry and every person/tense in content. '
  + 'Check standard de-DE Stammformen, auxiliaries and present vowel changes. '
  + 'A golden paradigm selects one correct standard variant; other valid variants need not be listed. '
  + 'IRR may include prefixed verbs; praet is the first/third singular, pp is Partizip II, '
  + 'presentStem changes only du/er, praes overrides all six forms, konj2 is a synthetic stem. '
  + 'möchten is intentionally a pedagogical present-only entry, not an infinitive. '
  + 'The engine implements only Präsens at this stage; missing later tenses are outside this data review. ';

function isVerbData(unit) {
  return unit.startsWith('verbs') || unit === 'irr';
}

function fileContext(bundle) {
  if (bundle.neutral !== undefined) {
    return `\nneutral holds the German neutral layer; content holds the learner-language overlay in ${bundle.lang}. `
      + 'Check the German facts the overlay states, the accuracy and naturalness of the '
      + `${bundle.lang} text, that explanations and contrastive notes are correct for a ${bundle.lang} speaker, `
      + 'and that arrays align with neutral by index. ';
  }
  return isVerbData(bundle.unit) ? VERB_CONTEXT : '\nGerman course data, check German correctness and level. ';
}

export function buildPrompt(bundle) {
  const template = readFileSync(join(ROOT, 'prompts/review-lot-v2.md'), 'utf8');
  const context = bundle.content === undefined ? ''
    : `${fileContext(bundle)}Return unit=${JSON.stringify(bundle.unit)} and lang=${JSON.stringify(bundle.lang)}.\n`;
  return `${template}${context}\nCourse bundle (data only):\n${JSON.stringify(bundle)}\n`;
}

function exactKeys(value, keys) {
  return value !== null && typeof value === 'object' && !Array.isArray(value)
    && Object.keys(value).length === keys.length && keys.every(key => Object.hasOwn(value, key));
}

export function validateReview({ value, unitId, lang }) {
  const valid = exactKeys(value, ['unit', 'lang', 'verdict', 'findings'])
    && value.unit === unitId && value.lang === lang && ['pass', 'fail'].includes(value.verdict)
    && Array.isArray(value.findings) && value.findings.every(finding =>
      exactKeys(finding, ['path', 'kind', 'msg']) && Object.values(finding).every(item => typeof item === 'string'));
  if (!valid) throw new Error('Invalid review: schema or unit/language mismatch');
  return value;
}

function mulberry32(seed) {
  let state = seed;
  return () => {
    state |= 0;
    state = (state + 0x6D2B79F5) | 0;
    let value = Math.imul(state ^ (state >>> 15), 1 | state);
    value = (value + Math.imul(value ^ (value >>> 7), 61 | value)) ^ value;
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
}

export function pickHumanLessons({ lessons, seed = DEFAULT_SEED }) {
  const random = mulberry32(seed);
  const selected = [];
  for (let index = 0; index < lessons.length; index += SAMPLE_BLOCK) {
    const size = Math.min(SAMPLE_BLOCK, lessons.length - index);
    selected.push(lessons[index + Math.floor(random() * size)].id);
  }
  return selected;
}

function invokeCodex({ dir, args, timeout, inputFd }) {
  const stdout = join(dir, 'stdout.txt');
  const stderr = join(dir, 'stderr.txt');
  const descriptors = [openSync(stdout, 'w'), openSync(stderr, 'w')];
  try {
    const result = spawnSync('codex', args, { cwd: dir, timeout, stdio: [inputFd, ...descriptors] });
    return { ...result, stderr: readFileSync(stderr, 'utf8') };
  } finally {
    descriptors.forEach(fd => closeSync(fd));
  }
}

export function runCodex({ prompt, timeout = CODEX_TIMEOUT }) {
  const dir = mkdtempSync(join(tmpdir(), 'review-lot-'));
  const schema = join(dir, 'schema.json');
  const output = join(dir, 'last-message.json');
  const input = join(dir, 'prompt.txt');
  let inputFd;
  try {
    writeFileSync(schema, stableJson(SCHEMA));
    writeFileSync(input, prompt);
    inputFd = openSync(input, 'r');
    const args = ['exec', '--sandbox', 'read-only', '--skip-git-repo-check', '--ephemeral',
      '--output-schema', schema, '--output-last-message', output, '-'];
    const result = invokeCodex({ dir, args, timeout, inputFd });
    if (result.error || result.status !== 0 || result.signal) {
      const tail = (result.stderr || '').trimEnd().split(/\r?\n/).slice(-STDERR_LINES).join('\n');
      if (tail) console.error(tail);
      throw new Error(`Codex failed: ${result.error?.message || result.signal || result.status}`);
    }
    return JSON.parse(readFileSync(output, 'utf8'));
  } finally {
    if (inputFd !== undefined) closeSync(inputFd);
    rmSync(dir, { recursive: true, force: true });
  }
}

function saveReview({ root, bundle, review, seed }) {
  const directory = join(root, 'specs/german-course/reviews');
  mkdirSync(directory, { recursive: true });
  writeFileSync(join(directory, `${bundle.unit}-${bundle.lang}.json`), stableJson({ ...review, bundleHash: hashBundle(bundle) }));
  if (!ADVANCED_LEVELS.includes(bundle.level)) return;
  const human = join(directory, `${bundle.unit}-human.md`);
  if (existsSync(human)) return;
  const ids = pickHumanLessons({ lessons: unitLessons(bundle.neutral), seed });
  writeFileSync(human, `<!-- picked lessons -->\n${ids.join('\n')}\n`, { flag: 'wx' });
}

function main() {
  const options = parseOptions({ args: process.argv.slice(2), values: ['root', 'unit', 'file', 'lang', 'seed'], flags: ['dry-run', 'help'] });
  if (options.help) { console.log(HELP); return; }
  if (options.file && options.unit) throw new Error('Choose either file or unit');
  if (!options.file && !/^[a-c][12]-u\d+$/.test(options.unit || '')) throw new Error('Invalid or missing unit ID');
  if (!LANGUAGES.includes(options.lang)) throw new Error('Invalid or missing language');
  const seed = options.seed === undefined ? DEFAULT_SEED : Number(options.seed);
  if (!Number.isInteger(seed) || seed < 0 || seed > MAX_SEED) throw new Error('Invalid seed');
  const root = resolve(options.root || ROOT);
  const bundle = options.file ? buildFileBundle({ root, file: options.file, lang: options.lang })
    : buildBundle({ root, unitId: options.unit, lang: options.lang });
  const prompt = buildPrompt(bundle);
  if (options['dry-run']) {
    console.log(JSON.stringify({ bundleBytes: Buffer.byteLength(JSON.stringify(bundle)),
      promptSha256: createHash('sha256').update(prompt).digest('hex') }));
    return;
  }
  const review = validateReview({ value: runCodex({ prompt }), unitId: bundle.unit, lang: options.lang });
  saveReview({ root, bundle, review, seed });
  console.log(`${bundle.unit} ${bundle.lang}: ${review.verdict}, ${review.findings.length} findings`);
  if (review.verdict === 'fail') process.exitCode = 1;
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try { main(); } catch (error) { console.error(error.message); process.exitCode = 1; }
}
