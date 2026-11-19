import { readFileSync, existsSync, statSync } from 'node:fs';
import vm from 'node:vm';
import { spokenStrings, collectSecondary, norm } from './spoken-strings.mjs';
import { resolve, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { loadCourse, unitLessons } from './snapshot_target.mjs';
import { scanValues } from './neutral-letters.mjs';
import { buildBundle, buildModuleBundle, hashBundle } from './review-bundle.mjs';

import { moduleDefinition, moduleCoreErrors, moduleOverlayErrors } from './porting-modules.mjs';
import { checkAll, formatResult } from './porting-all.mjs';

const ROOT = fileURLToPath(new URL('../', import.meta.url));
export const LANGUAGES = ['it', 'en', 'es', 'fr', 'pl'];
export const ADVANCED_LEVELS = ['B2', 'C1', 'C2'];
const STAGES = ['core', ...LANGUAGES, 'audio', 'review', 'human'];
const LEVEL_STAGES = ['core', ...LANGUAGES, 'review'];
const EXERCISE_TOLERANCE = 0.15;
const HELP = `Usage: node scripts/check_porting.mjs [module ...] [--root <dir>] [--unit <id>]
  [--level <A1..C2>] [--stage core,it,en,es,fr,pl,audio,review,human] [--curriculum] [--all] [--help]
Default: check core for all target units and course distribution.
--level: every unit of the level on core, it, en, es, fr, pl and review (the phase gate).
--all: curriculum, every unit and every module the target declares on core, it, en, es, fr, pl,
  audio and human; reviews in all five languages are printed as a report and do not fail.
Language stages check overlay file existence. Review requires pass per requested language (default it).
Human: n/a below B2; B2-C2 need <unit>-human.md with a nonempty ESITO: line after picked IDs.
Audio: every spoken string of the unit's lessons and test has its hash in data/audio-index.js and a non-empty
  mp3 under audio/. Modules: readings[-a|-b|-c], library[-a1..-c2], writing, conv[-1|-2], chat, phonetics, interference.
Curriculum: require curriculum.md listing all target unit IDs. Incomplete checks exit 1.`;

export function parseOptions({ args, values, flags }) {
  const options = {};
  for (let index = 0; index < args.length; index++) {
    const name = args[index].replace(/^--/, '');
    if (!args[index].startsWith('--') || (!values.includes(name) && !flags.includes(name))) {
      throw new Error(`Unknown option: ${args[index]}`);
    }
    if (Object.hasOwn(options, name)) throw new Error(`Duplicate option: --${name}`);
    if (flags.includes(name)) { options[name] = true; continue; }
    const value = args[++index];
    if (!value || value.startsWith('--')) throw new Error(`Missing value: --${name}`);
    options[name] = value;
  }
  return options;
}

export function checkCore(unit, target) {
  const errors = scanValues(unit).map(finding => `${finding.path}: ${finding.kind} ${finding.values.join(', ')}`);
  const lessons = unitLessons(unit);
  const types = new Set(lessons.flatMap(lesson => (lesson.exercises || []).map(exercise => exercise.t)));
  const expectedTypes = new Set(Object.values(target.lessons).flatMap(lesson => Object.keys(lesson.exerciseTypes || {})));
  const missingTypes = [...expectedTypes].filter(type => !types.has(type)).sort();
  if (missingTypes.length) errors.push(`Missing exercise types: ${missingTypes.join(', ')}`);
  const ids = lessons.map(lesson => lesson.id);
  if (lessons.length !== target.lessonCount) errors.push('Wrong lesson count');
  if (new Set(ids).size !== ids.length) errors.push('Duplicate lesson IDs');
  Object.keys(target.lessons).forEach(id => {
    const lesson = lessons.find(item => item.id === id);
    if (!lesson) { errors.push(`Missing lesson: ${id}`); return; }
    const count = (lesson.exercises || []).length;
    const expected = target.lessons[id].exercises;
    if (Math.abs(count - expected) > expected * EXERCISE_TOLERANCE) {
      errors.push(`${id}: exercises ${count}, expected ${expected} ±15%`);
    }
  });
  ids.filter(id => !Object.hasOwn(target.lessons, id)).forEach(id => errors.push(`Unexpected lesson: ${id}`));
  return errors;
}

/* One verdict file -> { error } or { archived }. A pass must match the
   current bundle. A fail passes only when the user archived it by decision
   (Q-C1-D8 A: the judge does not converge on C1 depth, a human sample
   checks it instead); the archive carries the hash of the content it
   accepted, so any later edit makes it stale like a pass would be. */
function reviewOutcome({ root, id, lang, module = false }) {
  const path = join(root, 'specs/german-course/reviews', `${id}-${lang}.json`);
  if (!existsSync(path)) return { error: `Missing review: ${id}-${lang}` };
  try {
    const review = JSON.parse(readFileSync(path, 'utf8'));
    const current = () => hashBundle(module ? buildModuleBundle({ root, module: id, lang }) : buildBundle({ root, unitId: id, lang }));
    const archived = review.verdict === 'fail' && review.archived?.decision ? review.archived : null;
    if (review.unit !== id || review.lang !== lang || (review.verdict !== 'pass' && !archived)) {
      return { error: `Review is not pass: ${id}-${lang}` };
    }
    if (archived) {
      return archived.bundleHash === current() ? { archived: `${id}-${lang} ${archived.decision}` }
        : { error: `stale archive: ${id}-${lang}` };
    }
    if (!review.bundleHash) return { error: `stale verdict: ${id}-${lang}` };
    return review.bundleHash === current() ? {} : { error: `stale verdict: ${id}-${lang}` };
  } catch (error) { return { error: `Invalid review ${id}-${lang}: ${error.message}` }; }
}

/* One pass over the verdicts: each outcome builds and hashes a bundle, so
   errors and archive notes come from the same list instead of two runs. */
function reviewResult({ root, id, languages, module = false }) {
  const outcomes = languages.map(lang => reviewOutcome({ root, id, lang, module }));
  return {
    errors: outcomes.map(o => o.error).filter(Boolean),
    notes: outcomes.map(o => o.archived).filter(Boolean)
  };
}

function humanErrors({ root, id, level, ownLevel }) {
  if (!ADVANCED_LEVELS.includes(level) && !ownLevel?.human) return [];
  const path = join(root, 'specs/german-course/reviews', `${id}-human.md`);
  if (!existsSync(path)) return [`Missing human review: ${id}`];
  const content = readFileSync(path, 'utf8');
  const errors = /^ESITO:[ \t]*\S[^\r\n]*$/m.test(content) ? [] : [`Missing ESITO: result for ${id}`];
  if (ownLevel?.human && !/^REVISORE:[ \t]*\S/m.test(content)) errors.push(`Missing REVISORE: result for ${id}`);
  return errors;
}

/* The hash comes from the browser's own assets/js/recordings.js, loaded in a
   sandbox, so the stage checks exactly what the course will look up. */
function loadRecordings(root) {
  const sandbox = { TextEncoder, BigInt };
  sandbox.window = sandbox;
  const index = join(root, 'data/audio-index.js');
  if (existsSync(index)) {
    try { vm.runInNewContext(readFileSync(index, 'utf8'), sandbox); }
    catch (error) { throw new Error(`data/audio-index.js does not load: ${error.message}`, { cause: error }); }
  }
  vm.runInNewContext(readFileSync(join(ROOT, 'assets/js/recordings.js'), 'utf8'), sandbox);
  return sandbox.Recordings;
}

const AUDIO_SHOWN = 3;

function hasRecording(root, rec, text) {
  const digest = rec.hash(rec.norm(text));
  const file = join(root, rec.url(digest));
  return rec.inIndex(digest) && existsSync(file) && statSync(file).size > 0;
}

export function audioErrors({ root, unit, strings }) {
  let rec;
  try { rec = loadRecordings(root); } catch (error) { return [error.message]; }
  const { primary, other } = strings || spokenStrings(unit);
  /* A unit that speaks nothing would pass having checked nothing. */
  if (!primary.length && !other.length) return ['no spoken strings found: nothing to check'];
  const missing = [...primary, ...other].filter(text => !hasRecording(root, rec, text));
  if (!missing.length) return [];
  const shown = missing.slice(0, AUDIO_SHOWN).map(text => `"${text}"`).join(', ');
  return [`Missing recording for ${missing.length} of ${primary.length + other.length} spoken strings: ${shown}${missing.length > AUDIO_SHOWN ? ', ...' : ''}`];
}

function stageErrors({ stage, context }) {
  const { root, unit, target, id, course, level, ownLevels } = context;
  if (stage === 'core') {
    return [...checkCore(unit, target), ...(level === target.level ? [] : [`Wrong level: ${level}, expected ${target.level}`])];
  }
  if (LANGUAGES.includes(stage)) {
    const file = course.unitFiles[id];
    return file && existsSync(join(root, 'data/i18n', stage, file)) ? [] : [`Missing ${stage} overlay for ${id}`];
  }
  if (stage === 'human') return humanErrors({ root, id, level, ownLevel: ownLevels[level] });
  return audioErrors({ root, unit });
}

function distributionErrors(course, target) {
  const errors = [];
  const actualIds = course.levels.flatMap(level => level.units.map(unit => unit.id));
  actualIds.filter(id => !Object.hasOwn(target.units, id)).forEach(id => errors.push(`Unexpected unit: ${id}`));
  if (new Set(actualIds).size !== actualIds.length) errors.push('Duplicate unit IDs');
  const codes = new Set([...Object.keys(target.levels), ...course.levels.map(level => level.code)]);
  for (const code of codes) {
    const levels = course.levels.filter(level => level.code === code);
    const units = levels.flatMap(level => level.units);
    const lessons = units.reduce((sum, unit) => sum + unitLessons(unit).length, 0);
    const expected = target.levels[code];
    if (levels.length !== 1 || !expected || units.length !== expected.units || lessons !== expected.lessons) {
      errors.push(`${code}: incorrect unit/lesson distribution`);
    }
  }
  return errors;
}

function curriculumErrors(root, target) {
  const path = join(root, 'specs/german-course/curriculum.md');
  if (!existsSync(path)) return ['Missing curriculum.md'];
  const ids = new Set(readFileSync(path, 'utf8').match(/\b[a-z][a-z0-9]*-u\d+\b/gi) || []);
  return Object.keys(target.units).filter(id => !ids.has(id)).map(id => `Curriculum missing ${id}`);
}

function checkUnits({ root, course, target, options, stages, ownLevels = {} }) {
  const output = [];
  const languages = stages.filter(stage => LANGUAGES.includes(stage));
  const ids = options.unit ? [options.unit]
    : options.level ? Object.keys(target.units).filter(id => target.units[id].level === options.level)
      : Object.keys(target.units);
  if (options.level && !ids.length) return [{ label: options.level, errors: [`No units for level ${options.level}`] }];
  for (const id of ids) {
    const matches = course.levels.flatMap(level => level.units.filter(unit => unit.id === id));
    if (matches.length > 1) { output.push({ label: id, errors: ['Duplicate unit IDs'] }); continue; }
    const level = course.levels.find(item => item.units.some(unit => unit.id === id));
    const unit = level?.units.find(item => item.id === id);
    if (!unit || !target.units[id]) { output.push({ label: id, errors: ['Missing or unknown unit'] }); continue; }
    const context = { root, course, id, unit, target: target.units[id], level: level.code, ownLevels,
      languages: languages.length ? languages : ['it'] };
    stages.forEach(stage => output.push({ label: `${id} ${stage}`,
      ...(stage === 'review' ? reviewResult({ root, id, languages: context.languages })
        : { errors: stageErrors({ stage, context }), notes: [] }) }));
  }
  if (!options.unit && !options.level && stages.includes('core')) output.push({ label: 'distribution', errors: distributionErrors(course, target) });
  return output;
}

function moduleAudio(module) {
  const primary = new Set(), other = new Set();
  const add = set => value => { const text = norm(value); if (text.length > 1) set.add(text); };
  const source = {};
  const names = { readings: 'READINGS', library: 'READINGS', conv: 'CONVERSATIONS',
    phonetics: 'PHONETICS', interference: 'INTERFERENCE' };
  const name = names[module.id.split('-')[0]];
  if (name) source[name] = module.items;
  collectSecondary(source, add(primary), add(other));
  primary.forEach(text => other.delete(text));
  return { primary: [...primary], other: [...other] };
}

function checkModules({ root, course, target, ids, stages }) {
  const languages = stages.filter(stage => LANGUAGES.includes(stage));
  const results = [];
  for (const id of ids) {
    const module = moduleDefinition(id, course, target);
    for (const stage of stages) {
      let errors = [], notes = [];
      if (stage === 'core') errors = moduleCoreErrors(module);
      else if (LANGUAGES.includes(stage)) {
        errors = moduleOverlayErrors({ root, module, lang: stage,
          bundle: module.files.length ? buildModuleBundle({ root, module: id, lang: stage }) : null });
      } else if (stage === 'review') {
        ({ errors, notes } = reviewResult({ root, id, languages: languages.length ? languages : ['it'], module: true }));
      } else if (stage === 'human') {
        errors = humanErrors({ root, id, level: module.advanced ? 'C1' : 'A1' });
        if (!module.advanced) notes = ['n/a (not advanced)'];
      } else {
        const strings = moduleAudio(module);
        if (!strings.primary.length && !strings.other.length && ['writing', 'chat'].includes(id)) notes = ['n/a (no recorded speech by design)'];
        else errors = audioErrors({ root, strings });
      }
      results.push({ label: `${id} ${stage}`, errors, notes });
    }
  }
  return results;
}

function main() {
  const args = process.argv.slice(2);
  const ids = [];
  const optionArgs = [];
  for (let index = 0; index < args.length; index++) {
    if (args[index].startsWith('--')) {
      optionArgs.push(args[index]);
      if (['--root', '--unit', '--stage', '--level'].includes(args[index]) && index + 1 < args.length) optionArgs.push(args[++index]);
    } else ids.push(args[index]);
  }
  const options = parseOptions({ args: optionArgs, values: ['root', 'unit', 'stage', 'level'], flags: ['curriculum', 'all', 'help'] });
  if (ids.length && (options.unit || options.level || options.curriculum)) throw new Error('Choose modules or unit/level/curriculum');
  if (options.help) { console.log(HELP); return; }
  if (options.all && (ids.length || options.unit || options.level || options.curriculum || options.stage)) {
    throw new Error('--all takes no modules, unit, level, curriculum or stage');
  }
  if (options.unit && !/^[a-z][a-z0-9]*-u\d+$/.test(options.unit)) throw new Error('Invalid unit ID');
  /* --level is the phase gate: all units of the level, all explanation
     languages and their reviews, unless --stage narrows it. */
  const stages = options.stage ? options.stage.split(',') : options.level ? LEVEL_STAGES : ['core'];
  if (stages.some(stage => !STAGES.includes(stage))) throw new Error('Invalid stage');
  const root = resolve(options.root || ROOT);
  const target = JSON.parse(readFileSync(join(root, 'scripts/porting-target.json'), 'utf8'));
  const ownPath = join(root, 'scripts/own-target.json');
  const own = existsSync(ownPath) ? JSON.parse(readFileSync(ownPath, 'utf8')) : { levels: {}, units: {} };
  const ownLevels = own.levels || {};
  const course = loadCourse(root);
  for (const [code, level] of Object.entries(ownLevels)) {
    if (course.levels.some(item => item.code === code) || Object.values(own.units || {}).some(unit => unit.level === code)) {
      target.levels[code] = level;
    }
  }
  target.units = target.units || {};
  for (const [id, unit] of Object.entries(own.units || {})) {
    /* An own unit must never shadow an upstream one in silence. */
    if (target.units[id]) throw new Error(`own-target.json redefines upstream unit ${id}`);
    target.units[id] = unit;
  }
  /* Own secondary modules (library-pfl) follow the same rule as own units. */
  target.secondary = target.secondary || {};
  for (const [key, count] of Object.entries(own.secondary || {})) {
    if (key in target.secondary) throw new Error(`own-target.json redefines upstream secondary ${key}`);
    target.secondary[key] = count;
  }
  const checkOwnUnits = args => checkUnits({ ...args, ownLevels });
  const results = options.all ? checkAll({ root, target, course,
    checks: { curriculumErrors, checkUnits: checkOwnUnits, checkModules, reviewResult } })
    : options.curriculum ? [{ label: 'curriculum', errors: curriculumErrors(root, target) }] : [];
  if (!options.all && (!options.curriculum || options.stage || options.unit)) {
    results.push(...(ids.length ? checkModules({ root, course, target, ids, stages })
      : checkOwnUnits({ root, course, target, options, stages })));
  }
  results.forEach(result => console.log(formatResult(result)));
  if (results.some(result => result.errors.length)) process.exitCode = 1;
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try { main(); } catch (error) { console.error(error.message); process.exitCode = 1; }
}
