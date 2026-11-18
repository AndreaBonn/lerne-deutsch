import { join, basename, extname, resolve, relative, isAbsolute, sep } from 'node:path';
import { readFileSync, realpathSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';
import { loadCourse, runDataFile } from './snapshot_target.mjs';
import { moduleDefinition } from './porting-modules.mjs';

const ROOT = fileURLToPath(new URL('../', import.meta.url));

const OVERLAY_PATH = /^data\/i18n\/([a-z]{2})\/([^/]+\.js)$/;

function assertInsideRoot(root, path) {
  const local = relative(root, path);
  if (local === '..' || local.startsWith('..' + sep) || isAbsolute(local)) {
    throw new Error('File is outside repository root');
  }
}

export function buildFileBundle({ root, file, lang }) {
  const resolvedRoot = realpathSync(root);
  const candidate = resolve(resolvedRoot, file);
  assertInsideRoot(resolvedRoot, candidate);
  const path = realpathSync(candidate);
  assertInsideRoot(resolvedRoot, path);
  const name = basename(path, extname(path));
  const overlay = relative(resolvedRoot, path).split(sep).join('/').match(OVERLAY_PATH);
  if (!overlay) return { unit: name, lang, content: readFileSync(path, 'utf8') };
  if (overlay[1] !== lang) throw new Error(`Overlay language "${overlay[1]}" does not match --lang "${lang}"`);
  const neutralPath = join(resolvedRoot, 'data/core', overlay[2]);
  /* Without its core an overlay cannot be judged: falling back to a plain
     review would hide the German again and reuse the core's verdict name. */
  if (!existsSync(neutralPath)) throw new Error(`Overlay has no neutral layer: data/core/${overlay[2]} is missing`);
  assertInsideRoot(resolvedRoot, realpathSync(neutralPath));
  return { unit: `i18n-${name}`, lang, neutral: readFileSync(neutralPath, 'utf8'), content: readFileSync(path, 'utf8') };
}

export function buildBundle({ root, unitId, lang }) {
  const course = loadCourse(root);
  const level = course.levels.find(item => item.units.some(unit => unit.id === unitId));
  const unit = level?.units.find(item => item.id === unitId);
  if (!unit) throw new Error(`Unknown unit: ${unitId}`);
  const file = course.unitFiles[unitId];
  if (!file) throw new Error(`Unknown source file: ${unitId}`);
  const neutral = JSON.parse(JSON.stringify(unit));
  runDataFile({ sandbox: course.sandbox, path: join(ROOT, 'assets/js/i18n-merge.js') });
  runDataFile({ sandbox: course.sandbox, path: join(root, 'data/i18n', lang, file) });
  if (!course.sandbox.LINGUAI.hasStrings(lang)) throw new Error(`Missing strings for ${lang}`);
  course.sandbox.LINGUAI.applyStrings(lang);
  return { unit: unitId, lang, level: level.code, neutral, merged: JSON.parse(JSON.stringify(unit)) };
}

export function buildModuleBundle({ root, module, lang }) {
  const course = loadCourse(root);
  const target = JSON.parse(readFileSync(join(root, 'scripts/porting-target.json'), 'utf8'));
  const selection = moduleDefinition(module, course, target);
  const neutral = JSON.parse(JSON.stringify(selection.items));
  runDataFile({ sandbox: course.sandbox, path: join(ROOT, 'assets/js/i18n-merge.js') });
  for (const file of selection.files) {
    const path = join(root, 'data/i18n', lang, file);
    if (existsSync(path)) runDataFile({ sandbox: course.sandbox, path });
  }
  course.sandbox.LINGUAI.applyStrings(lang);
  return { unit: module, lang, neutral, merged: JSON.parse(JSON.stringify(selection.items)) };
}

export function hashBundle(bundle) {
  return createHash('sha256').update(JSON.stringify(bundle)).digest('hex');
}
