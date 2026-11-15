import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const ROOT = fileURLToPath(new URL('../', import.meta.url));
const VM_TIMEOUT = 5000;

export function unitLessons(unit) {
  return [...(unit.lessons || []), ...(unit.test ? [unit.test] : [])];
}

export function runDataFile({ sandbox, path }) {
  vm.runInContext(readFileSync(path, 'utf8'), sandbox, { filename: path, timeout: VM_TIMEOUT });
}

export function loadCourse(root) {
  const levels = [];
  const unitFiles = {};
  const library = [];
  let currentFile;
  const sandbox = { LINGUAI: {
    registerLevel(level) { levels.push({ ...level, units: level.units || [] }); },
    addUnits(code, units) {
      const level = levels.find(item => item.code === code);
      if (!level) throw new Error(`Unknown level: ${code}`);
      level.units.push(...units);
      units.forEach(unit => { unitFiles[unit.id] = currentFile; });
    },
    addReadings(items) {
      sandbox.READINGS = [...(sandbox.READINGS || []), ...items];
      if (currentFile.startsWith('library-')) library.push(...items);
    }
  }, Core: { registry: { levels } } };
  sandbox.window = sandbox;
  vm.createContext(sandbox);
  const dir = join(root, 'data/core');
  const files = readdirSync(dir).filter(file => file.endsWith('.js') && file !== 'curriculum-index.js').sort();
  for (const file of ['curriculum-index.js', ...files.filter(f => !f.startsWith('library-')), ...files.filter(f => f.startsWith('library-'))]) {
    currentFile = file;
    runDataFile({ sandbox, path: join(dir, file) });
  }
  return { ...sandbox, sandbox, levels, unitFiles, library };
}

function countLesson(lesson) {
  const exerciseTypes = {};
  (lesson.exercises || []).forEach(exercise => {
    exerciseTypes[exercise.t] = (exerciseTypes[exercise.t] || 0) + 1;
  });
  return { exercises: (lesson.exercises || []).length, exerciseTypes,
    vocab: (lesson.vocab || []).length, dialogueLines: (lesson.dialogue?.lines || []).length };
}

function secondaryCounts(data) {
  const interference = {};
  (data.INTERFERENCE || []).forEach(entry => {
    (entry.for || []).forEach(lang => { interference[lang] = (interference[lang] || 0) + 1; });
  });
  const sections = (data.CILS || []).flatMap(sim => sim.sezioni || []);
  return {
    readings: (data.READINGS || []).length - (data.library || []).length,
    library: (data.library || []).length, writing: (data.WRITING || []).length,
    conversations: (data.CONVERSATIONS || []).length, chat: (data.CHAT_SCENARIOS || []).length,
    minimalPairs: { sets: (data.PHONETICS || []).length,
      pairs: (data.PHONETICS || []).reduce((sum, set) => sum + (set.pairs || []).length, 0) },
    interference, cils: { simulations: (data.CILS || []).length, sections: sections.length,
      prove: sections.reduce((sum, section) => sum + (section.prove || []).length, 0) }
  };
}

export function createSnapshot(data) {
  const units = {};
  const levels = {};
  const totals = { units: 0, lessons: 0, exercises: 0, vocab: 0, dialogueLines: 0, exerciseTypes: {} };
  for (const level of data.levels) {
    const levelUnits = level.units || [];
    levels[level.code] = { units: levelUnits.length, lessons: 0 };
    for (const unit of levelUnits) {
      const lessons = Object.fromEntries(unitLessons(unit).map(lesson => [lesson.id, countLesson(lesson)]));
      units[unit.id] = { level: level.code, lessonCount: Object.keys(lessons).length, lessons };
      totals.units++;
      totals.lessons += Object.keys(lessons).length;
      levels[level.code].lessons += Object.keys(lessons).length;
      Object.values(lessons).forEach(lesson => {
        ['exercises', 'vocab', 'dialogueLines'].forEach(key => { totals[key] += lesson[key]; });
        Object.entries(lesson.exerciseTypes).forEach(([type, count]) => {
          totals.exerciseTypes[type] = (totals.exerciseTypes[type] || 0) + count;
        });
      });
    }
  }
  return { levels, units, totals, secondary: secondaryCounts(data) };
}

export function stableJson(value) {
  const sorted = item => {
    if (Array.isArray(item)) return item.map(sorted);
    if (!item || typeof item !== 'object') return item;
    return Object.fromEntries(Object.keys(item).sort().map(key => [key, sorted(item[key])]));
  };
  return `${JSON.stringify(sorted(value), null, 2)}\n`;
}

function main() {
  if (process.argv.length !== 3) throw new Error('Usage: node scripts/snapshot_target.mjs <original-path>');
  const snapshot = createSnapshot(loadCourse(resolve(process.argv[2])));
  writeFileSync(join(ROOT, 'scripts/porting-target.json'), stableJson(snapshot));
  console.log(stableJson({ totals: snapshot.totals, secondary: snapshot.secondary }));
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try { main(); } catch (error) { console.error(error.message); process.exitCode = 1; }
}
