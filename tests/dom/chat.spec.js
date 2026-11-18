/* ============================================================
   The free conversation in a real browser.

   The unit tests walk the rules and the run with the transport replaced.
   Four things they cannot reach:

   - the partner's words become a bubble. If they ever went in as HTML, the
     payload would run with the student's API key one localStorage read
     away, and the screen would look entirely normal;
   - a turn that got no answer has to be GIVEN BACK, with the student's line
     taken off the screen and put back in the field. On paper it is one
     branch; on screen it is the difference between retrying and losing a
     turn to a conversation that never happened;
   - nothing here may touch progress. No XP, no streak, no card, no lesson.
     That absence is what makes this mode safe to leave uncorrected, and it
     is invisible in any single function;
   - without a key the screen has to say so before the student types a
     sentence into a field that will not send it.
   ============================================================ */
const { test, expect } = require("@playwright/test");

/** Sets keys, consent and a scripted reply before the page's scripts run. */
async function przygotuj(page, opcje) {
  const o = opcje || {};
  await page.addInitScript((cfg) => {
    window.__zapytania = 0;
    if (cfg.key) window.localStorage.setItem("linguai.llm.v1", JSON.stringify({ openai: cfg.key }));

    const raw = window.localStorage.getItem("linguai.tedesco.v1");
    const state = raw ? JSON.parse(raw) : { schema: 2, settings: {} };
    state.settings = state.settings || {};
    state.settings.lang = "pl";
    state.settings.llmConsent = true;
    state.settings.llmChatConsent = cfg.zgoda !== false;
    state.settings.autoplay = false;   /* no synthesis in a test */
    window.localStorage.setItem("linguai.tedesco.v1", JSON.stringify(state));

    const czekaj = new Promise((r) => { window.__gotowy = r; });
    Object.defineProperty(window, "Llm", {
      configurable: true,
      set(v) {
        delete window.Llm;
        window.Llm = v;
        v.useTransport(() => {
          window.__zapytania++;
          if (cfg.pada) return Promise.resolve({ status: 401, json: { error: { message: "no" } } });
          return Promise.resolve({
            status: 200,
            json: { choices: [{ message: { content: JSON.stringify({
              risposta: cfg.risposta, correzione: cfg.correzione || ""
            }) } }] }
          });
        });
        window.__gotowy();
      }
    });
    return czekaj;
  }, {
    key: o.key === undefined ? "sk-test-key-1234" : o.key,
    zgoda: o.zgoda,
    pada: !!o.pada,
    risposta: o.risposta || "Gern, einen Kaffee. Sonst noch etwas?",
    correzione: o.correzione || ""
  });
}

async function otworzScena(page) {
  await page.goto("/index.html#/chiacchiere?id=cafe");
  await page.waitForSelector(".js-in", { timeout: 30000 });
}

test("the opening line is on screen before the student types anything", async ({ page }) => {
  await przygotuj(page);
  await otworzScena(page);
  const bolle = await page.locator(".dlg__line").allInnerTexts();
  expect(bolle.length).toBe(1);
  expect(bolle[0]).toContain("Guten Morgen");
  expect(await page.evaluate(() => window.__zapytania), "nothing was asked yet").toBe(0);
});

test("a turn draws both bubbles, and the correction is text", async ({ page }) => {
  await przygotuj(page, {
    risposta: "Gern, einen Kaffee!",
    correzione: "<img src=x onerror=\"window.__xss=1\">Man sagt «ich möchte»."
  });
  await otworzScena(page);

  await page.fill(".js-in", "wollen einen Kaffee");
  await page.click(".js-send");
  await expect(page.locator(".dlg__line")).toHaveCount(3);

  await expect(page.locator(".chat-fix")).toContainText("möchte");
  expect(await page.evaluate(() => window.__xss)).toBeUndefined();
  expect(await page.locator(".chat-fix img").count()).toBe(0);
});

test("the counter of turns left goes down by one", async ({ page }) => {
  await przygotuj(page);
  await otworzScena(page);
  const przed = await page.locator(".js-left").innerText();
  await page.fill(".js-in", "einen Kaffee bitte");
  await page.click(".js-send");
  await expect(page.locator(".dlg__line")).toHaveCount(3);
  const po = await page.locator(".js-left").innerText();
  expect(po, "the counter did not move: " + przed).not.toBe(przed);
});

test("a turn that got no answer is given back, with the words returned", async ({ page }) => {
  await przygotuj(page, { pada: true });
  await otworzScena(page);
  const przed = await page.locator(".js-left").innerText();

  await page.fill(".js-in", "ich möchte einen Kaffee");
  await page.click(".js-send");

  /* The student's line is off the screen again, the field holds it back, the
     counter is where it was, and the field is usable. */
  await expect(page.locator(".dlg__line")).toHaveCount(1);
  await expect(page.locator(".js-in")).toHaveValue("ich möchte einen Kaffee");
  await expect(page.locator(".js-in")).toBeEnabled();
  expect(await page.locator(".js-left").innerText()).toBe(przed);
});

test("nothing in a conversation touches the student's progress", async ({ page }) => {
  /* The structural claim of this whole mode, and the only place it can be
     checked end to end: XP, the streak, the deck and the lessons are exactly
     where they were before the conversation. */
  await przygotuj(page, { correzione: "Man sagt «ich möchte»." });
  await otworzScena(page);
  const przed = await page.evaluate(() => JSON.stringify({
    xp: window.Core.state.xp,
    streak: window.Core.state.streak,
    lekcje: Object.keys(window.Core.state.lessons).length,
    talia: Object.keys(window.Core.state.srs).length,
    bledy: Object.keys(window.Core.state.errors).length
  }));

  await page.fill(".js-in", "wollen einen Kaffee");
  await page.click(".js-send");
  await expect(page.locator(".dlg__line")).toHaveCount(3);

  const po = await page.evaluate(() => JSON.stringify({
    xp: window.Core.state.xp,
    streak: window.Core.state.streak,
    lekcje: Object.keys(window.Core.state.lessons).length,
    talia: Object.keys(window.Core.state.srs).length,
    bledy: Object.keys(window.Core.state.errors).length
  }));
  expect(po).toBe(przed);
});

test("the conversation never reaches the exported profile", async ({ page }) => {
  await przygotuj(page);
  await otworzScena(page);
  await page.fill(".js-in", "ein Geheimnis das nicht raus darf");
  await page.click(".js-send");
  await expect(page.locator(".dlg__line")).toHaveCount(3);

  const kopia = await page.evaluate(() => window.Core.exportState());
  expect(kopia).not.toContain("ein Geheimnis das nicht raus darf");
  expect(kopia).not.toContain("Gern, einen Kaffee");
});

test("without a key the screen says so and sends nothing", async ({ page }) => {
  await przygotuj(page, { key: "" });
  await page.goto("/index.html#/chiacchiere");
  await page.waitForSelector(".callout--info");

  const avviso = await page.locator(".callout--info").innerText();
  expect(avviso.length, "the sentence is there before the list").toBeGreaterThan(40);
  expect(avviso, "and it is a sentence, not a key").not.toContain("chat.needsKey");

  await page.locator("[data-scena]").first().click();
  await page.waitForSelector(".js-in");
  await page.fill(".js-in", "Hallo");
  await page.click(".js-send");
  await page.waitForTimeout(300);
  expect(await page.evaluate(() => window.__zapytania)).toBe(0);
  await expect(page.locator(".dlg__line")).toHaveCount(1);
});

test("with the conversation consent withdrawn, nothing leaves", async ({ page }) => {
  /* The key is there and the judge's consent is there: only the third one is
     missing, and it is enough. */
  await przygotuj(page, { zgoda: false });
  await otworzScena(page);
  await page.fill(".js-in", "Hallo");
  await page.click(".js-send");
  await page.waitForTimeout(400);
  expect(await page.evaluate(() => window.__zapytania)).toBe(0);
});

/* The six scenes came in two batches, and a scene is three things that must
   agree: its entry in chat-scenarios.js, its title key `chat.sc.<id>` in the
   interface language, and the line it opens with. A missing key does not show
   up as a raw key: t() falls back to another language, so the list looks
   complete and one button speaks Italian to a Polish student. The titles are
   therefore compared with the Polish dictionary itself, read from disk. */
const UI_PL = (() => {
  const box = { LINGUAI: { addUI: (_lang, dict) => { box.dict = dict; } } };
  require("node:vm").runInNewContext(
    require("node:fs").readFileSync(require("node:path").join(__dirname, "..", "..", "data", "i18n", "ui-pl.js"), "utf8"), box);
  return box.dict;
})();
test("every scene is on the list with a title, and opens on its own first line", async ({ page }) => {
  await przygotuj(page);
  await page.goto("/index.html#/chiacchiere");
  await page.waitForSelector(".list-row[data-scena]", { timeout: 30000 });
  const sceny = await page.evaluate(() => window.CHAT_SCENARIOS.map(s => ({ id: s.id, apertura: s.apertura })));
  expect(sceny.length).toBe(6);
  await expect(page.locator(".list-row[data-scena]")).toHaveCount(sceny.length);
  const tytuly = await page.locator(".list-row[data-scena] b").allInnerTexts();
  expect(tytuly).toEqual(sceny.map(s => UI_PL["chat.sc." + s.id]));

  for (const s of sceny) {
    await page.goto(`/index.html#/chiacchiere?id=${s.id}`);
    await page.waitForSelector(".js-in", { timeout: 30000 });
    const bolle = await page.locator(".dlg__line").allInnerTexts();
    expect(bolle.length, s.id).toBe(1);
    expect(bolle[0], s.id).toContain(s.apertura);
  }
});
