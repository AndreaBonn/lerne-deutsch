/* ============================================================
   Reading, continuous listening, dictation.
   ============================================================ */
const { test, expect } = require("@playwright/test");

async function lista(page) {
  await page.goto("/index.html#/lettura");
  await page.waitForFunction(() => window.READINGS && window.Views.lettura);
  await page.waitForSelector(".js-open");
}

async function tekst(page, id, mode) {
  await page.goto("/index.html#/lettura?id=" + id + (mode ? "&mode=" + mode : ""));
  await page.waitForFunction(() => window.READINGS && window.Views.lettura);
  await page.waitForSelector("#readBox");
}

test("every sentence of every reading has a recording", async ({ page }) => {
  await lista(page);
  const brak = await page.evaluate(() => {
    const zle = [];
    window.READINGS.forEach(r => (r.sentences || []).forEach(s => {
      if (!window.Audio2.hasNatural(s)) zle.push(r.id + ": " + s.slice(0, 40));
    }));
    return zle;
  });
  expect(brak, `bez nagrania: ${brak.slice(0, 3).join(" | ")}`).toEqual([]);
});

test("the list shows the German title and the translation", async ({ page }) => {
  await lista(page);
  const n = await page.evaluate(() => window.READINGS.length);
  await expect(page.locator(".js-open")).toHaveCount(n);

  const wiersz = page.locator(".list-row").first();
  await expect(wiersz.locator("b")).not.toBeEmpty();
  await expect(wiersz.locator("span span").first()).not.toBeEmpty();
});

test("reading mode shows the text and a button at every sentence", async ({ page }) => {
  await tekst(page, "r-a1-cafe");
  const zdan = await page.evaluate(() => window.READINGS.find(x => x.id === "r-a1-cafe").sentences.length);
  await expect(page.locator("#readBox .say-btn")).toHaveCount(zdan);
  await expect(page.locator("#readBox .js-all")).toBeVisible();
});

test("the glosses show a word and its translation", async ({ page }) => {
  await tekst(page, "r-a1-cafe");
  const glosy = await page.locator("#readBox .card .list-row").count();
  const ile = await page.evaluate(() => window.READINGS.find(x => x.id === "r-a1-cafe").glossIt.length);
  expect(glosy).toBe(ile);
});

/* The point of listening mode: the text must NOT be visible, otherwise this
   is reading with a soundtrack, not listening comprehension. */
test("listening mode does not show the text", async ({ page }) => {
  await tekst(page, "r-a1-cafe", "listen");
  const widoczne = await page.evaluate(() => {
    const zdanie = window.READINGS.find(x => x.id === "r-a1-cafe").sentences[0];
    return document.getElementById("readBox").innerText.includes(zdanie);
  });
  expect(widoczne, "the sentences of the text must not be on screen").toBe(false);
  await expect(page.locator("#readBox .js-all")).toBeVisible();
});

test("the questions are in German and appear on demand", async ({ page }) => {
  await tekst(page, "r-a1-cafe", "listen");
  await expect(page.locator("#quizBox .exq")).toHaveCount(0);

  await page.locator(".js-quiz").click();
  const ile = await page.evaluate(() => window.READINGS.find(x => x.id === "r-a1-cafe").questions.length);
  await expect(page.locator("#quizBox .exq")).toHaveCount(ile);

  /* The questions sit in the neutral layer (German), so they do not change with the explanation language. */
  const przed = await page.locator("#quizBox .exq__prompt").first().innerText();
  await page.evaluate(() => new Promise(r => window.Core.setLanguage("en", r)));
  await page.locator(".js-mode[data-mode='listen']").click();
  await page.locator(".js-quiz").click();
  const po = await page.locator("#quizBox .exq__prompt").first().innerText();
  expect(po, "the question text is German and independent of the explanation language").toBe(przed);
});

test("dictation goes sentence by sentence and ends with a result", async ({ page }) => {
  await tekst(page, "r-a1-cafe", "dictation");
  await expect(page.locator(".exq")).toBeVisible();

  const zdan = await page.evaluate(() => window.READINGS.find(x => x.id === "r-a1-cafe").sentences.length);
  for (let i = 0; i < zdan + 2; i++) {
    if (await page.locator(".summary").count()) break;
    const inp = page.locator(".exq .js-in");
    if (await inp.count()) await inp.fill("cokolwiek");
    const check = page.locator(".exq .js-check");
    if (await check.count() && await check.isEnabled()) await check.click();
    const next = page.locator(".js-next");
    if (await next.count() && await next.isVisible()) await next.click();
    else await page.waitForTimeout(150);
  }
  await expect(page.locator(".summary")).toBeVisible();
});

test("switching modes stays in the address", async ({ page }) => {
  await tekst(page, "r-a1-cafe");
  await page.locator('.js-mode[data-mode="dictation"]').click();
  await expect(page).toHaveURL(/mode=dictation/);
  await page.reload();
  await expect(page.locator('.js-mode[data-mode="dictation"]')).toHaveAttribute("aria-current", "true");
});

test("the reading strings exist in five languages", async ({ page }) => {
  await lista(page);
  const braki = await page.evaluate(async () => {
    const out = {};
    for (const lang of ["it", "en", "es", "fr", "pl"]) {
      await new Promise(r => window.Core.setLanguage(lang, r));
      window.I18n.set(lang);
      window.App.go("lettura");
      const bezTytulu = window.READINGS.filter(r => !r.title || !r.gloss).map(r => r.id);
      const puste = window.I18n.missing().filter(k => /^read\./.test(k));
      if (puste.length || bezTytulu.length) out[lang] = puste.concat(bezTytulu);
    }
    return out;
  });
  expect(braki, JSON.stringify(braki)).toEqual({});
});

/* ============================================================
   The library: long texts that arrive with their level.

   The short readings live in a file loaded at startup; these do not, and
   that is the whole point — they are ten times the prose, for material most
   students open a fraction of. Three things follow, and all three are
   invisible until somebody opens the list from a cold profile.
   ============================================================ */
test("the list shows texts from every level, not only the loaded one", async ({ page }) => {
  /* One more level is built here: the index is served with one more
     registerLevel line, and the level's library file (plus its overlay,
     whatever the learner language) exists only as a route. The student never
     opens it: the list has to pull it and draw it again. Its code is
     synthetic on purpose: registerLevel keeps the first registration of a
     code, so a fixture named after a real level (it used to be B2) stops
     loading its file the day that level is registered for real. */
  await page.route("**/data/core/curriculum-index.js", async route => {
    const res = await route.fetch();
    const body = (await res.text()) +
      '\nLINGUAI.registerLevel({ code: "X9", cefrLabel: "X9", dataFiles: ["library-b2-fixture.js"] });\n';
    await route.fulfill({ response: res, body });
  });
  await page.route("**/data/core/library-b2-fixture.js", route => route.fulfill({
    contentType: "application/javascript",
    body: 'LINGUAI.addReadings([{ id: "lib-b2-fixture", cefr: "X9", tag: "g-praesens", titleIt: "Fixture Bergtour", ' +
      'sentences: ["Am Sonntag fahren wir in die Berge."], glossIt: ["die Berge"], lexIt: ["fahren"], questions: [] }]);'
  }));
  await page.route("**/data/i18n/*/library-b2-fixture.js", route => {
    const lang = route.request().url().match(/i18n\/([a-z]+)\//)[1];
    return route.fulfill({
      contentType: "application/javascript",
      body: 'LINGUAI.addStrings("' + lang + '", { "read:lib-b2-fixture": { title: "Fixture tour", gloss: ["mountains"], lex: ["drive"] } });'
    });
  });

  await page.goto("/index.html#/lettura");
  await page.waitForSelector(".js-open");
  /* Drawn first, pulled second, drawn again: the wait is for the second
     drawing, which is the one under test. */
  await page.waitForSelector('.js-open[data-id="lib-b2-fixture"]', { timeout: 15000 });

  const riga = page.locator(".list-row", { has: page.locator('.js-open[data-id="lib-b2-fixture"]') });
  await expect(riga.locator(".chip--cefr")).toHaveText("X9");
  await expect(page.locator('.js-open[data-id="r-a1-cafe"]'), "the loaded level is still there").toHaveCount(1);
});

test("the list marks the long text and not the short one", async ({ page }) => {
  await page.goto("/index.html#/lettura");
  await page.waitForSelector('.js-open[data-id="lib-a1-samstag"]', { timeout: 15000 });
  const rowLib = page.locator(".list-row", { has: page.locator('.js-open[data-id="lib-a1-samstag"]') });
  await expect(rowLib.locator("span span")).toContainText("·");
  const rowShort = page.locator(".list-row", { has: page.locator('.js-open[data-id="r-a1-cafe"]') });
  await expect(rowShort.locator("span span")).not.toContainText("·");
});

test("a long text says how long it is and does not offer dictation", async ({ page }) => {
  /* Dictation on thirty sentences is not a harder exercise, it is one with
     no end, and whoever starts it finds that out ten sentences in. */
  await page.goto("/index.html#/lettura?id=lib-a1-samstag");
  await page.waitForSelector(".tabs");
  const tryby = await page.locator(".tab").allInnerTexts();
  expect(tryby.length, "read and listen, nothing else: " + tryby.join(",")).toBe(2);

  await page.goto("/index.html#/lettura?id=r-a1-cafe");
  await page.waitForSelector(".tabs");
  expect((await page.locator(".tab").allInnerTexts()).length,
    "a short text keeps its dictation").toBe(3);
});

test("listening remembers where it got to, and offers to go back there", async ({ page }) => {
  await page.goto("/index.html#/lettura?id=lib-a1-samstag&mode=listen");
  await page.waitForSelector(".js-all");
  /* No resume button before anything has been played. */
  await expect(page.locator(".js-resume")).toHaveCount(0);

  await page.evaluate(() => {
    window.Core.state.library = { "lib-a1-samstag": { frase: 7, ts: Date.now() } };
    window.App.go("lettura", { id: "lib-a1-samstag", mode: "listen" });
  });
  await page.waitForSelector(".js-resume");
  const etykieta = await page.locator(".js-resume").innerText();
  expect(etykieta, "the sentence number reaches the label").toContain("8");
});
