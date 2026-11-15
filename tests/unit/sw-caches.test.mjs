import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import vm from "node:vm";
import { ROOT } from "./_harness.mjs";
import { join } from "node:path";

test("activation removes only stale German caches on the shared origin", async () => {
  const handlers = {};
  const names = new Set(["linguai-shell-v35", "linguai-audio-2", "impara-tedesco-shell-old", "impara-tedesco-audio-old", "other-app"]);
  let claimed = false;
  const box = {
    self: {
      addEventListener(type, handler) { handlers[type] = handler; },
      clients: { claim() { claimed = true; } }
    },
    caches: {
      async keys() { return [...names]; },
      async delete(name) { return names.delete(name); }
    },
    async fetch() { return { ok: false }; }
  };
  vm.runInNewContext(readFileSync(join(ROOT, "sw.js"), "utf8"), box);
  assert.ok(box.SHELL_CACHE.startsWith("impara-tedesco-shell-"));
  assert.ok(box.AUDIO_CACHE.startsWith("impara-tedesco-audio-"));
  names.add(box.SHELL_CACHE);
  names.add(box.AUDIO_CACHE);
  let activation;
  handlers.activate({ waitUntil(promise) { activation = promise; } });
  await activation;
  assert.deepEqual([...names].sort(), ["linguai-shell-v35", "linguai-audio-2", "other-app", box.SHELL_CACHE, box.AUDIO_CACHE].sort());
  assert.equal(claimed, true);
});
