import { mkdtempSync, cpSync, mkdirSync, writeFileSync, rmSync, openSync, closeSync, readFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';

export const ROOT = new URL('../../../../', import.meta.url).pathname;
export const target = { levels: { A1: { units: 1, lessons: 1 } }, units: {
  'a1-u01': { level: 'A1', lessonCount: 1,
    lessons: { 'a1-u01-l1': { exercises: 2, exerciseTypes: { fill: 1, mcq: 1 } } } }
} };

export function put(root, path, text) {
  const full = join(root, path);
  mkdirSync(join(full, '..'), { recursive: true });
  writeFileSync(full, text);
}

export function fixture(t, language = 'german') {
  const root = mkdtempSync(join(tmpdir(), 'porting-test-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  cpSync(new URL(`./${language}/`, import.meta.url), root, { recursive: true });
  put(root, 'scripts/porting-target.json', JSON.stringify(target));
  return root;
}

export function cli(script, args = [], env = {}) {
  const capture = mkdtempSync(join(tmpdir(), 'porting-cli-'));
  const stdout = join(capture, 'stdout');
  const stderr = join(capture, 'stderr');
  const descriptors = [openSync(stdout, 'w'), openSync(stderr, 'w')];
  try {
    const result = spawnSync(process.execPath, [join(ROOT, 'scripts', script), ...args], {
      stdio: ['ignore', ...descriptors], env: { ...process.env, ...env }, timeout: 15000
    });
    if (result.error) throw result.error;
    return { ...result, stdout: readFileSync(stdout, 'utf8'), stderr: readFileSync(stderr, 'utf8') };
  } finally {
    descriptors.forEach(fd => closeSync(fd));
    rmSync(capture, { recursive: true, force: true });
  }
}
