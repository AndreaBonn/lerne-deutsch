/* ============================================================
   Every scene of conversations.js, played to the end with its own keys.

   conversazione.spec.js checks the engine on the seed. The other thirteen
   scenes were written later, in batches, and each can break in a way the
   engine tests never see: a `go` pointing at an id that is not there, an
   `accept` that no longer matches what the hint asks for, a branch that
   falls through into the other branch. All three look like a working course
   with one scene that stops in the middle, and the student is the one who
   finds out.

   The path is computed from the data the page loaded, the way the engine
   walks it: in order, jumping on `go`, taking one option at each choice.
   Each text turn is answered with its first `accept`; the scene must end
   with a full score. Scenes with a choice are played twice, first and last
   option, so both sides of every branch get walked at least once.
   ============================================================ */
const { test, expect } = require("@playwright/test");
const { readFileSync } = require("node:fs");
const { join } = require("node:path");
const vm = require("node:vm");

/* Recordings drive the dialogue forward, so a scene lasts as long as its
   audio: the same reason conversazione.spec.js raises its limit. */
test.describe.configure({ timeout: 180000 });

const box = { LINGUAI: {}, window: {} };
vm.createContext(box);
vm.runInContext(readFileSync(join(__dirname, "..", "..", "data", "core", "conversations.js"), "utf8"), box);
const SCENES = box.window.CONVERSATIONS;

/** The student's moves along one path: {opt: k} at a choice, {say: text} at a text turn. */
function path(scene, pick) {
  const at = (id) => scene.turns.findIndex(t => t.id === id);
  const moves = [];
  let i = 0;
  for (let guard = 0; i >= 0 && i < scene.turns.length; guard++) {
    if (guard > 200) throw new Error(`${scene.id}: the path loops`);
    const t = scene.turns[i];
    if (t.opts) {
      const k = pick === "last" ? t.opts.length - 1 : 0;
      moves.push({ opt: k });
      i = t.opts[k].go ? at(t.opts[k].go) : i + 1;
      if (i < 0) throw new Error(`${scene.id}: option ${k} goes to a missing id`);
      continue;
    }
    if (t.sp === "TY") moves.push({ say: t.accept[0] });
    if (t.go) {
      i = at(t.go);
      if (i < 0) throw new Error(`${scene.id}: go "${t.go}" is not an id`);
    } else i++;
  }
  return moves;
}

const RUNS = [];
for (const s of SCENES) {
  RUNS.push([s, "first"]);
  if (s.turns.some(t => t.opts)) RUNS.push([s, "last"]);
}

test("the list holds every scene of the data file", () => {
  expect(SCENES.length).toBe(14);
});

for (const [scene, pick] of RUNS) {
  test(`${scene.id} (${pick} option) reaches the summary with a full score`, async ({ page }) => {
    const moves = path(scene, pick);
    await page.goto(`/index.html#/conversazione?id=${scene.id}`);
    for (const m of moves) {
      await page.waitForSelector(".js-in, .dlg-opts", { timeout: 30000 });
      if ("opt" in m) {
        await page.locator(".js-opt").nth(m.opt).click();
      } else {
        await expect(page.locator(".dlg-opts")).toHaveCount(0);
        await page.fill(".js-in", m.say);
        await page.click(".js-send");
        /* A rejected key would leave the feedback on and the scene still. */
        await expect(page.locator(".js-fb.fb--ko.is-on")).toHaveCount(0);
      }
    }
    const n = moves.length;
    await expect(page.locator(".summary__score")).toHaveText(`${n}/${n}`, { timeout: 30000 });
  });
}
