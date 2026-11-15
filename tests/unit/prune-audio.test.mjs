import { test, mock } from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, existsSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { main } from "../../scripts/prune_audio.mjs";
import vm from "node:vm";
import { ROOT } from "./_harness.mjs";

function fixture(t) {
  const root = mkdtempSync(join(tmpdir(), "german-audio-"));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  const box = { window: { TextEncoder, BigInt } };
  vm.runInNewContext(readFileSync(join(ROOT, "assets/js/recordings.js"), "utf8"), box);
  const hash = text => box.window.Recordings.hash(text);
  const kept = [hash("Grüße!"), hash("Guten Tag.")];
  const orphan = hash("orphan");
  for (const digest of [...kept, orphan]) {
    mkdirSync(join(root, "audio", digest.slice(0, 2)), { recursive: true });
    writeFileSync(join(root, "audio", digest.slice(0, 2), digest + ".mp3"), Buffer.alloc(1024));
  }
  mkdirSync(join(root, "scripts"));
  mkdirSync(join(root, "data"));
  writeFileSync(join(root, "scripts/audio-strings.json"), JSON.stringify({ primary: ["Grüße!", "missing"], other: ["Guten Tag.", "Grüße!"] }));
  writeFileSync(join(root, "audio/notes.txt"), "keep");
  writeFileSync(join(root, "data/audio-index.js"), "old index");
  return { root, kept, orphan, path: digest => join(root, "audio", digest.slice(0, 2), digest + ".mp3") };
}

function run(root, args = []) {
  const lines = [];
  const log = mock.method(console, "log", line => lines.push(line));
  try {
    main(["--root", root, ...args]);
    return lines.join("\n");
  } finally {
    log.mock.restore();
  }
}

test("dry-run lists orphan paths, count and MB without deleting or rewriting", t => {
  const f = fixture(t);
  const output = run(f.root);
  assert.ok(output.includes(`audio/${f.orphan.slice(0, 2)}/${f.orphan}.mp3`));
  assert.match(output, /1 orphan.*0\.001 MB/);
  assert.equal(output.includes("Grüße!"), false);
  assert.ok(existsSync(f.path(f.orphan)));
  assert.equal(readFileSync(join(f.root, "data/audio-index.js"), "utf8"), "old index");
});

test("apply deletes only orphans and writes the exact sorted builder index", t => {
  const f = fixture(t);
  assert.match(run(f.root, ["--apply"]), /1 orphan/);
  assert.equal(existsSync(f.path(f.orphan)), false);
  for (const digest of f.kept) assert.ok(existsSync(f.path(digest)));
  assert.equal(readFileSync(join(f.root, "audio/notes.txt"), "utf8"), "keep");
  const header = "/* audio-index.js \u2014 wygenerowane przez scripts/build_audio.py.\n" +
    "   Sklejone 16-znakowe skróty napisów, dla których istnieje plik MP3.\n" +
    "   Nie edytować ręcznie. */\n";
  assert.equal(readFileSync(join(f.root, "data/audio-index.js"), "utf8"), header + `window.AUDIO_INDEX = "${f.kept.sort().join("")}";\n`);
  assert.match(run(f.root), /0 orphan.*0\.000 MB/);
});

/* An empty manifest is what a broken extract_strings run leaves behind:
   applying it would delete every recording of the course. */
test("an empty manifest refuses --apply and deletes nothing", t => {
  const f = fixture(t);
  writeFileSync(join(f.root, "scripts/audio-strings.json"), '{"primary":[],"other":[]}');
  const indexBefore = readFileSync(join(f.root, "data/audio-index.js"), "utf8");
  assert.throws(() => run(f.root, ["--apply"]));
  for (const digest of f.kept) assert.ok(existsSync(f.path(digest)));
  assert.ok(existsSync(f.path(f.orphan)));
  assert.equal(readFileSync(join(f.root, "data/audio-index.js"), "utf8"), indexBefore);
});

test("an empty manifest in dry-run still reports every MP3 as orphan", t => {
  const f = fixture(t);
  writeFileSync(join(f.root, "scripts/audio-strings.json"), '{"primary":[],"other":[]}');
  assert.match(run(f.root), /3 orphan/);
  assert.ok(existsSync(f.path(f.orphan)));
});
