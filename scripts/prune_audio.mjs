import { readFileSync, writeFileSync, readdirSync, statSync, unlinkSync } from "node:fs";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import vm from "node:vm";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const BYTES_PER_MB = 1024 * 1024;

function recordings() {
  const box = { window: { TextEncoder, BigInt } };
  vm.runInNewContext(readFileSync(join(ROOT, "assets/js/recordings.js"), "utf8"), box);
  return box.window.Recordings;
}

function listAudio(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) return listAudio(path);
    return entry.isFile() && entry.name.endsWith(".mp3") ? [path] : [];
  });
}

function writeIndex(root, paths) {
  const digests = paths.map(path => path.slice(-20, -4)).sort();
  const header = "/* audio-index.js \u2014 wygenerowane przez scripts/build_audio.py.\n" +
    "   Sklejone 16-znakowe skróty napisów, dla których istnieje plik MP3.\n" +
    "   Nie edytować ręcznie. */\n";
  writeFileSync(join(root, "data/audio-index.js"), header + `window.AUDIO_INDEX = "${digests.join("")}";\n`);
}

function pruneAudio(root, apply) {
  const manifest = JSON.parse(readFileSync(join(root, "scripts/audio-strings.json"), "utf8"));
  const rec = recordings();
  const expected = new Set([...manifest.primary, ...manifest.other].map(text =>
    join(root, rec.url(rec.hash(text)))));
  const paths = listAudio(join(root, "audio"));
  const orphans = paths.filter(path => !expected.has(path)).sort();
  const bytes = orphans.reduce((sum, path) => sum + statSync(path).size, 0);
  for (const path of orphans) console.log(relative(root, path));
  console.log(`${orphans.length} orphan MP3s, ${(bytes / BYTES_PER_MB).toFixed(3)} MB (${apply ? "apply" : "dry-run"}).`);
  if (!apply) return;
  if (expected.size === 0) {
    throw new Error("scripts/audio-strings.json lists no strings: refusing --apply, it would delete every recording. Rerun extract_strings.mjs first.");
  }
  for (const path of orphans) unlinkSync(path);
  writeIndex(root, paths.filter(path => expected.has(path)));
}

export function main(args) {
  let root = ROOT;
  let apply = false;
  for (let i = 0; i < args.length; i++) {
    if (args[i] === "--apply") apply = true;
    else if (args[i] === "--root" && args[i + 1]) root = resolve(args[++i]);
    else throw new Error(`Unknown or incomplete argument: ${args[i]}`);
  }
  pruneAudio(root, apply);
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  main(process.argv.slice(2));
}
