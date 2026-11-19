import test from 'node:test';
import assert from 'node:assert/strict';
import { closeSync, cpSync, mkdirSync, mkdtempSync, openSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';

test('validation discovers a registered PFL lesson and rejects its incomplete exercise', t => {
  const root = mkdtempSync(join(tmpdir(), 'pfl-validation-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  for (const dir of ['data', 'assets/js']) cpSync(new URL(`../../${dir}`, import.meta.url), join(root, dir), { recursive: true });
  mkdirSync(join(root, 'scripts'));
  for (const file of ['validate.mjs', 'neutral-letters.mjs']) cpSync(new URL(`../../scripts/${file}`, import.meta.url), join(root, 'scripts', file));
  const index = join(root, 'data/core/curriculum-index.js');
  writeFileSync(index, readFileSync(index, 'utf8') + '\nLINGUAI.registerLevel({code:"PFL",dataFiles:["pfl-01.js"]});\n');
  writeFileSync(join(root, 'data/core/pfl-01.js'), 'LINGUAI.addUnits("PFL",[{id:"pfl-u01",lessons:[{id:"pfl-u01-l1",cefr:"B1",tags:[],exercises:[{t:"fill"}]}]}]);');
  writeFileSync(join(root, 'data/i18n/it/pfl-01.js'), 'LINGUAI.addStrings("it",{});');
  const output = join(root, 'output.txt');
  const fd = openSync(output, 'w');
  const result = spawnSync(process.execPath, [join(root, 'scripts/validate.mjs')], { stdio: ['ignore', fd, fd] });
  closeSync(fd);
  assert.equal(result.status, 1);
  assert.match(readFileSync(output, 'utf8'), /pfl-u01-l1.*fill bez poprawnej odpowiedzi/);
});
