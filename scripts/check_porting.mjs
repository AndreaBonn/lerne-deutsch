import { readFileSync, existsSync } from 'node:fs';
import { resolve, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { loadCourse, unitLessons } from './snapshot_target.mjs';
import { scanValues } from './neutral-letters.mjs';
import { buildBundle, hashBundle } from './review-bundle.mjs';

const ROOT = fileURLToPath(new URL('../', import.meta.url));
export const LANGUAGES = ['it', 'en', 'es', 'fr', 'pl'];
export const ADVANCED_LEVELS = ['B2', 'C1', 'C2'];
const STAGES = ['core', ...LANGUAGES, 'audio', 'review', 'human'];
const LEVEL_STAGES = ['core', ...LANGUAGES, 'review'];
const EXERCISE_TOLERANCE = 0.15;
const HELP = `Usage: node scripts/check_porting.mjs [--root <dir>] [--unit <id>]
  [--level <A1..C2>] [--stage core,it,en,es,fr,pl,audio,review,human] [--curriculum] [--help]
Default: check core for all target units and course distribution.
--level: every unit of the level on core, it, en, es, fr, pl and review (the phase gate).
Language stages check overlay file existence. Review requires pass per requested language (default it).
Human: n/a below B2; B2-C2 need <unit>-human.md with a nonempty ESITO: line after picked IDs.
Audio: n/a (not implemented yet); explicitly requesting this stage exits 1.
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

function reviewErrors({ root, id, languages }) {
  return languages.flatMap(lang => {
    const path = join(root, 'specs/german-course/reviews', `${id}-${lang}.json`);
    if (!existsSync(path)) return [`Missing review: ${id}-${lang}`];
    try {
      const review = JSON.parse(readFileSync(path, 'utf8'));
      if (review.unit !== id || review.lang !== lang || review.verdict !== 'pass') {
        return [`Review is not pass: ${id}-${lang}`];
      }
      if (!review.bundleHash) return [`stale verdict: ${id}-${lang}`];
      const bundle = buildBundle({ root, unitId: id, lang });
      return review.bundleHash === hashBundle(bundle) ? [] : [`stale verdict: ${id}-${lang}`];
    } catch (error) { return [`Invalid review ${id}-${lang}: ${error.message}`]; }
  });
}

function humanErrors({ root, id, level }) {
  if (!ADVANCED_LEVELS.includes(level)) return [];
  const path = join(root, 'specs/german-course/reviews', `${id}-human.md`);
  if (!existsSync(path)) return [`Missing human review: ${id}`];
  return /^ESITO:[ \t]*\S[^\r\n]*$/m.test(readFileSync(path, 'utf8')) ? [] : [`Missing ESITO: result for ${id}`];
}

function stageErrors({ stage, context }) {
  const { root, unit, target, id, course, languages, level } = context;
  if (stage === 'core') {
    return [...checkCore(unit, target), ...(level === target.level ? [] : [`Wrong level: ${level}, expected ${target.level}`])];
  }
  if (LANGUAGES.includes(stage)) {
    const file = course.unitFiles[id];
    return file && existsSync(join(root, 'data/i18n', stage, file)) ? [] : [`Missing ${stage} overlay for ${id}`];
  }
  if (stage === 'review') return reviewErrors({ root, id, languages });
  if (stage === 'human') return humanErrors({ root, id, level });
  return ['n/a (not implemented yet)'];
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
  const ids = new Set(readFileSync(path, 'utf8').match(/\b[a-c][12]-u\d+\b/gi) || []);
  return Object.keys(target.units).filter(id => !ids.has(id)).map(id => `Curriculum missing ${id}`);
}

function checkUnits({ root, course, target, options, stages }) {
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
    const context = { root, course, id, unit, target: target.units[id], level: level.code,
      languages: languages.length ? languages : ['it'] };
    stages.forEach(stage => output.push({ label: `${id} ${stage}`, errors: stageErrors({ stage, context }) }));
  }
  if (!options.unit && !options.level && stages.includes('core')) output.push({ label: 'distribution', errors: distributionErrors(course, target) });
  return output;
}

function main() {
  const options = parseOptions({ args: process.argv.slice(2), values: ['root', 'unit', 'stage', 'level'], flags: ['curriculum', 'help'] });
  if (options.help) { console.log(HELP); return; }
  if (options.unit && !/^[a-c][12]-u\d+$/.test(options.unit)) throw new Error('Invalid unit ID');
  /* --level is the phase gate: all units of the level, all explanation
     languages and their reviews, unless --stage narrows it. */
  const stages = options.stage ? options.stage.split(',') : options.level ? LEVEL_STAGES : ['core'];
  if (stages.some(stage => !STAGES.includes(stage))) throw new Error('Invalid stage');
  const root = resolve(options.root || ROOT);
  const target = JSON.parse(readFileSync(join(root, 'scripts/porting-target.json'), 'utf8'));
  const results = options.curriculum ? [{ label: 'curriculum', errors: curriculumErrors(root, target) }] : [];
  if (!options.curriculum || options.stage || options.unit) {
    results.push(...checkUnits({ root, course: loadCourse(root), target, options, stages }));
  }
  results.forEach(({ label, errors }) => console.log(`${label}: ${errors.length ? errors.join('; ') : 'pass'}`));
  if (results.some(result => result.errors.length)) process.exitCode = 1;
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try { main(); } catch (error) { console.error(error.message); process.exitCode = 1; }
}
