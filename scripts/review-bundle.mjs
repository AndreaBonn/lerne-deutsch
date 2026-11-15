import { join, basename, extname, resolve, relative, isAbsolute, sep } from 'node:path';
import { readFileSync, realpathSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';
import { loadCourse, runDataFile } from './snapshot_target.mjs';

const ROOT = fileURLToPath(new URL('../', import.meta.url));

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
  return { unit: basename(path, extname(path)), lang, content: readFileSync(path, 'utf8') };
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

export function hashBundle(bundle) {
  return createHash('sha256').update(JSON.stringify(bundle)).digest('hex');
}
