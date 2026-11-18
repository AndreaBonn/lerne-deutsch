/* --all, the CI gate of check_porting.mjs (Q7 A, 2026-11-18).

   Structural stages decide the exit code; second-judge verdicts are printed
   as a report and never fail. The judge is a model that may not answer, and
   a gate that is red by construction stops being read.

   The checks themselves stay in check_porting.mjs and arrive as `checks`:
   this file only decides WHAT --all runs and how a line is printed, so it
   does not import its own caller. */

const LANGUAGES = ['it', 'en', 'es', 'fr', 'pl'];
const ALL_STAGES = ['core', ...LANGUAGES, 'audio', 'human'];
/* Module ids per key of target.secondary: a module runs only when the
   snapshot declares a count for it. */
const ALL_MODULES = { readings: ['readings-a', 'readings-b', 'readings-c'],
  library: ['library-a1', 'library-a2', 'library-b1', 'library-b2', 'library-c1', 'library-c2'],
  writing: ['writing'], conversations: ['conv-1', 'conv-2'], chat: ['chat'],
  minimalPairs: ['phonetics'], interference: ['interference'] };

export function checkAll({ root, target, course, checks }) {
  const { curriculumErrors, checkUnits, checkModules, reviewResult } = checks;
  const modules = Object.keys(target.secondary || {}).flatMap(key => ALL_MODULES[key] || []);
  const results = [{ label: 'curriculum', errors: curriculumErrors(root, target) },
    ...checkUnits({ root, course, target, options: {}, stages: ALL_STAGES }),
    ...checkModules({ root, course, target, ids: modules, stages: ALL_STAGES })];
  const reviewed = [...Object.keys(target.units).map(id => ({ id, module: false })),
    ...modules.map(id => ({ id, module: true }))];
  for (const { id, module } of reviewed) {
    const { errors, notes } = reviewResult({ root, id, languages: LANGUAGES, module });
    results.push({ label: `${id} review (report only)`, errors: [], report: errors, notes });
  }
  return results;
}

export function formatResult({ label, errors, notes = [], report = [] }) {
  if (errors.length) return `${label}: ${errors.join('; ')}`;
  if (report.length) return `${label}: ${report.join('; ')}`;
  if (!notes.length) return `${label}: pass`;
  return `${label}: ${notes[0].startsWith('n/a') ? notes.join(', ') : `pass, archived (${notes.join(', ')})`}`;
}
