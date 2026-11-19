import test from 'node:test';
import assert from 'node:assert/strict';
import { moduleDefinition, moduleCoreErrors } from '../../scripts/porting-modules.mjs';

test('PFL library uses its own IDs and real CEFR levels', () => {
  const items = [{ id: 'read-pfl-one', cefr: 'B1' }, { id: 'read-a1-one', cefr: 'A1' }];
  const course = { library: items, READINGS: items };
  const module = moduleDefinition('library-pfl', course, { levels: { PFL: { cefrLabel: 'B1-B2' } }, secondary: { 'library-pfl': 1 } });
  assert.deepEqual(module.items, [items[0]]);
  assert.deepEqual(moduleCoreErrors(module), []);
});
