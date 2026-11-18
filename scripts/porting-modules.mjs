import { existsSync, readFileSync } from 'node:fs';
import vm from 'node:vm';
import { join } from 'node:path';
import { scanValues } from './neutral-letters.mjs';

const LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
const GROUPS = { a: ['A1', 'A2'], b: ['B1', 'B2'], c: ['C1', 'C2'] };

/* The snapshot of the Italian course asks for 5 sets of minimal pairs. The
   German course has 4 by decision (T9.30, Q7 A): the fifth candidate, ch [ç]
   against [x], is one phoneme in two positional variants, so its only real
   pairs use marginal words, which phonetics.js does not take. Its 21 pairs
   still match the snapshot. */
const GERMAN_PHONETIC_SETS = 4;

export function moduleDefinition(id, course, target) {
  const readings = (course.READINGS || []).filter(item => !course.library.includes(item));
  const secondary = target.secondary || {};
  let items, count, files, prefix, levels;
  if (id === 'readings' || /^readings-[abc]$/.test(id)) {
    levels = id === 'readings' ? LEVELS : GROUPS[id.slice(-1)];
    items = readings.filter(item => levels.includes(item.cefr) || levels.includes(item.id?.match(/(?:^|[-_])([abc][12])(?:[-_]|$)/i)?.[1]?.toUpperCase()));
    count = id === 'readings' ? (secondary.readings || 24) : 8;
    files = ['readings.js']; prefix = 'read';
  } else if (id === 'library' || /^library-[abc][12]$/.test(id)) {
    levels = id === 'library' ? LEVELS : [id.slice(-2).toUpperCase()];
    items = course.library.filter(item => levels.includes(item.cefr) || levels.includes(item.id?.match(/(?:^|[-_])([abc][12])(?:[-_]|$)/i)?.[1]?.toUpperCase()));
    count = id === 'library' ? (secondary.library || 6) : 1;
    files = levels.map(level => `library-${level.toLowerCase()}.js`); prefix = 'read';
  } else {
    const definitions = {
      writing: ['WRITING', 'writing', 'writing.js', 'write', 6],
      conv: ['CONVERSATIONS', 'conversations', 'conversations.js', 'conv', 14],
      'conv-1': ['CONVERSATIONS', 'conversations', 'conversations.js', 'conv', 7],
      'conv-2': ['CONVERSATIONS', 'conversations', 'conversations.js', 'conv', 7],
      chat: ['CHAT_SCENARIOS', 'chat', null, null, 6],
      phonetics: ['PHONETICS', 'minimalPairs', 'phonetics.js', 'ph', 5],
      interference: ['INTERFERENCE', 'interference', 'interference.js', 'int', 0]
    };
    const definition = definitions[id];
    if (!definition) throw new Error(`Unknown module: ${id}`);
    const [global, key, file, patch, fallback] = definition;
    items = course[global] || [];
    if (id === 'conv-1') items = items.slice(0, 7);
    if (id === 'conv-2') items = items.slice(7, 14);
    count = id === 'phonetics' ? GERMAN_PHONETIC_SETS
      : id === 'interference' ? secondary.interference || {} : (id.startsWith('conv-') ? fallback : secondary[key] ?? fallback);
    files = file ? [file] : []; prefix = patch;
  }
  const advanced = ['readings', 'readings-c', 'library', 'library-b2', 'library-c1', 'library-c2'].includes(id);
  return { id, items, count, files, prefix, levels, advanced, pairCount: secondary.minimalPairs?.pairs ?? 21 };
}

export function moduleCoreErrors(module) {
  const errors = scanValues(module.items).map(f => `${f.path}: ${f.kind} ${f.values.join(', ')}`);
  if (module.id === 'interference') {
    for (const lang of ['it', 'en', 'es', 'fr', 'pl']) {
      // The Italian-course target's German learner count is the Italian learner count here.
      const expected = module.count[lang === 'it' ? 'de' : lang];
      const actual = module.items.filter(item => (item.for || []).includes(lang)).length;
      if (expected !== undefined && actual !== expected) errors.push(`${lang}: ${actual} of ${expected}`);
    }
  } else if (module.items.length !== module.count) errors.push(`${module.items.length} of ${module.count}`);
  const ids = module.items.map(item => item.id);
  if (ids.some(id => !id) || new Set(ids).size !== ids.length) errors.push('Missing or duplicate item IDs');
  if (module.levels) module.items.forEach(item => {
    const idLevel = item.id?.match(/(?:^|[-_])([abc][12])(?:[-_]|$)/i)?.[1]?.toUpperCase();
    if (!module.levels.includes(item.cefr) || (idLevel && idLevel !== item.cefr)) errors.push(`CEFR mismatch: ${item.id}`);
  });
  if (module.id === 'phonetics') {
    const pairs = module.items.reduce((sum, item) => sum + (item.pairs || []).length, 0);
    if (pairs !== module.pairCount) errors.push(`${pairs} of ${module.pairCount} pairs`);
  }
  return errors;
}

/* Chat scenes have no data overlay (every line is German, spoken by the
   partner), but the scene list shows a title per language from the UI
   dictionary, key chat.sc.<id>: without it the screen prints the raw key. */
export function chatTitleErrors({ root, module, lang }) {
  const path = join(root, 'data/i18n', `ui-${lang}.js`);
  if (!existsSync(path)) return [`Missing ${lang} UI dictionary`];
  const ui = {};
  const sandbox = { LINGUAI: { addUI: (_, strings) => Object.assign(ui, strings) } };
  vm.runInNewContext(readFileSync(path, 'utf8'), sandbox, { filename: path, timeout: 5000 });
  return module.items.filter(item => !String(ui[`chat.sc.${item.id}`] || '').trim())
    .map(item => `Missing ${lang} scene title: ${item.id}`);
}

export function moduleOverlayErrors({ root, module, lang, bundle }) {
  if (module.id === 'chat') return chatTitleErrors({ root, module, lang });
  if (!module.files.length) return [];
  const missing = module.files.filter(file => !existsSync(join(root, 'data/i18n', lang, file)));
  if (missing.length) return [`Missing ${lang} overlay: ${missing.join(', ')}`];
  const items = module.id === 'interference' ? module.items.filter(item => (item.for || []).includes(lang)) : module.items;
  return items.filter(item => {
    const index = module.items.indexOf(item);
    if (module.id === 'interference') return !['looks', 'mean', 'why'].some(key => bundle.merged[index][key]);
    return JSON.stringify(bundle.neutral[index]) === JSON.stringify(bundle.merged[index]);
  }).map(item => `Missing ${lang} strings: ${item.id}`);
}
