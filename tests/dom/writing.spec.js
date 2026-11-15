/* ============================================================
   Writing: what the course measures, what it does not, and what it will not do.
   ============================================================ */
const { test, expect } = require("@playwright/test");

async function lista(page) {
  await page.goto("/index.html#/scrittura");
  await page.waitForFunction(() => window.WRITING && window.Views.scrittura && window.Writing);
  await page.waitForSelector(".js-open");
}

async function zadanie(page, id) {
  await page.goto("/index.html#/scrittura?id=" + id);
  await page.waitForFunction(() => window.WRITING && window.Views.scrittura);
  await page.waitForSelector("#writeBox");
}

test("the list shows the tasks with their kind", async ({ page }) => {
  await lista(page);
  const n = await page.evaluate(() => window.WRITING.length);
  await expect(page.locator(".js-open")).toHaveCount(n);
});

test("a composition says up front which constructions it requires", async ({ page }) => {
  await zadanie(page, "w-a1-vorstellung");
  const ile = await page.evaluate(() => window.WRITING[0].requires.length);
  await expect(page.locator("#writeBox .card .list-row")).toHaveCount(ile);
  await expect(page.locator("#writeText")).toBeVisible();
});

test("the check reads what the student used and what they did not", async ({ page }) => {
  await zadanie(page, "w-a1-vorstellung");
  await page.locator("#writeText").fill(
    "Guten Tag. Ich heiße Anna Rossi und ich komme aus Rom in Italien. Ich lerne gern Deutsch.");
  await page.locator(".js-check").click();

  const wynik = await page.evaluate(() => {
    const zapis = window.Core.state.writing["w-a1-vorstellung"];
    return { found: zapis.found, total: zapis.total, words: zapis.words };
  });
  /* "heiße", "komme" and the greeting "Guten Tag" are in the text; "wohne" is not. */
  expect(wynik.found).toBe(3);
  expect(wynik.total).toBe(4);
  expect(wynik.words).toBeGreaterThan(10);

  const chipy = await page.locator("#writeResult .chip").allInnerTexts();
  expect(chipy.length).toBe(4);
});

test('German writing requirements show Präsens by default and detect verb brackets', async ({ page }) => {
  await lista(page);
  await page.evaluate(() => {
    window.WRITING.push({ id: 'w-german-contract', kind: 'compose', cefr: 'A2',
      title: 'Mein Tag', brief: 'Schreibe über deinen Tag.', minWords: 5,
      requires: [{ verb: 'aufstehen' }, { verb: 'sich waschen', tense: 'perf' }],
      checklist: [], model: 'Ich stehe früh auf.' });
    window.Views.scrittura({ id: 'w-german-contract' });
  });
  await expect(page.locator('#writeBox')).toContainText('Präsens');
  await expect(page.locator('#writeBox')).toContainText('Perfekt');
  await page.locator('#writeText').fill('Ich stehe früh auf. Ich habe mich heute gewaschen.');
  await page.locator('.js-check').click();
  const saved = await page.evaluate(() => window.Writing.load('w-german-contract'));
  expect(saved.found).toBe(2);
  expect(saved.total).toBe(2);
});

/* The course has no marker and has no right to pretend it has one. */
test("the result says plainly what was not checked", async ({ page }) => {
  await zadanie(page, "w-a1-vorstellung");
  await page.locator("#writeText").fill("Hallo, ich heiße Anna.");
  await page.locator(".js-check").click();

  const nota = page.locator("#writeResult .card--contrast");
  await expect(nota).toBeVisible();
  const tekst = await nota.innerText();
  expect(tekst.length).toBeGreaterThan(60);

  const ileZListy = await page.evaluate(() => window.WRITING[0].checklist.length);
  await expect(nota.locator(".list-row")).toHaveCount(ileZListy);
});

test("the model appears only after the check", async ({ page }) => {
  await zadanie(page, "w-a1-vorstellung");
  await expect(page.locator(".js-model")).toBeHidden();

  await page.locator("#writeText").fill("Hallo, ich heiße Anna und ich arbeite.");
  await page.locator(".js-check").click();
  await expect(page.locator(".js-model")).toBeVisible();

  await page.locator(".js-model").click();
  await expect(page.locator(".js-model-box")).toBeVisible();
});

test("the text comes back on re-entry", async ({ page }) => {
  await zadanie(page, "w-a1-vorstellung");
  await page.locator("#writeText").fill("Ein Text, der zurückkommen muss.");
  await page.locator(".js-check").click();
  await page.waitForTimeout(300);

  await page.reload();
  await page.waitForSelector("#writeText");
  await expect(page.locator("#writeText")).toHaveValue("Ein Text, der zurückkommen muss.");
});

/* The student's text leaves the application through the export and may enter
   somebody else's browser through an import: it is untrusted content, even
   though the owner of the profile wrote it. It must never reach the DOM as
   HTML. */
test("the student's text does not become markup", async ({ page }) => {
  await zadanie(page, "w-a1-vorstellung");
  const zlosliwy = '<img src=x onerror="window.__wstrzykniete=1"> hallo';
  await page.locator("#writeText").fill(zlosliwy);
  await page.locator(".js-check").click();
  await page.waitForTimeout(300);

  expect(await page.evaluate(() => !!window.__wstrzykniete), "the code in the text did not execute").toBe(false);
  expect(await page.locator("#writeBox img").count(), "the text creates no elements").toBe(0);

  await page.reload();
  await page.waitForSelector("#writeText");
  expect(await page.evaluate(() => !!window.__wstrzykniete), "ani po ponownym wczytaniu").toBe(false);
  await expect(page.locator("#writeText")).toHaveValue(zlosliwy);
});

test("the translation runs on ordinary exercises and counts the result", async ({ page }) => {
  /* The seed has no translate task: this one is a fixture, pushed the way the
     German-contract test above pushes its compose task. */
  await lista(page);
  await page.evaluate(() => {
    window.WRITING.push({ id: "w-fixture-translate", kind: "translate", cefr: "A1",
      title: "Übersetzen", brief: "Übersetze.", checklist: [],
      items: [
        { q: "Mam na imię Anna.", a: ["Ich heiße Anna."] },
        { q: "Mieszkam w Berlinie.", a: ["Ich wohne in Berlin."] },
        { q: "Pochodzę z Włoch.", a: ["Ich komme aus Italien."] }
      ] });
    window.Views.scrittura({ id: "w-fixture-translate" });
  });
  await page.waitForSelector("#writeBox .exq");
  const ile = 3;
  await expect(page.locator("#writeBox .exq")).toHaveCount(ile);

  /* The first sentence correct, the rest at random: what counts is reaching the end. */
  const poprawna = "Ich heiße Anna.";
  const pola = page.locator("#writeBox .exq .js-in");
  await pola.nth(0).fill(poprawna);
  for (let i = 1; i < ile; i++) await pola.nth(i).fill("irgendetwas");
  for (let i = 0; i < ile; i++) {
    const b = page.locator("#writeBox .exq .js-check").nth(i);
    if (await b.isEnabled()) await b.click();
    if (await b.isEnabled()) await b.click();
  }
  await expect(page.locator("#writeSum .summary")).toBeVisible();
  await expect(page.locator("#writeSum .summary__score")).toHaveText("1/3");
});

test("the brief and the checklist exist in five languages", async ({ page }) => {
  await lista(page);
  const braki = await page.evaluate(async () => {
    const out = {};
    for (const lang of ["it", "en", "es", "fr", "pl"]) {
      await new Promise(r => window.Core.setLanguage(lang, r));
      window.I18n.set(lang);
      window.App.go("scrittura");
      const bez = window.WRITING.filter(w => !w.title || !w.brief || !w.checklist).map(w => w.id);
      const zdania = window.WRITING
        .filter(w => w.kind === "translate")
        .filter(w => (w.items || []).some(i => !i.q)).map(w => w.id + ":items");
      const puste = window.I18n.missing().filter(k => /^write\./.test(k));
      if (puste.length || bez.length || zdania.length) out[lang] = puste.concat(bez, zdania);
    }
    return out;
  });
  expect(braki, JSON.stringify(braki)).toEqual({});
});

/* Import: il messaggio deve dire il PERCHÉ, e nella lingua dello studente.
   Prima i messaggi erano polacchi hardcoded e la vista li buttava via. */
test("errore di import dice il motivo, nella lingua giusta", async ({ page }) => {
  await page.goto("/index.html#/impostazioni");
  await page.waitForFunction(() => window.Core && window.I18n);

  const wyniki = await page.evaluate(async () => {
    const out = {};
    for (const lang of ["pl", "en", "it"]) {
      await new Promise(r => window.Core.setLanguage(lang, r));
      window.I18n.set(lang);
      const komunikaty = [];
      for (const plik of [
        JSON.stringify([1, 2, 3]),
        JSON.stringify({ xp: 1 }),
        JSON.stringify({ schema: 99 }),
        JSON.stringify({ schema: 2, lessons: "ciao" })
      ]) {
        try { window.Core.importState(plik); komunikaty.push("BRAK BLEDU"); }
        catch (e) { komunikaty.push(e.key ? window.I18n.t(e.key, e.vars) : "BEZ KLUCZA"); }
      }
      out[lang] = komunikaty;
    }
    return out;
  });

  for (const lang of ["pl", "en", "it"]) {
    expect(wyniki[lang].length).toBe(4);
    for (const m of wyniki[lang]) {
      expect(m).not.toBe("BRAK BLEDU");
      expect(m).not.toBe("BEZ KLUCZA");
      expect(m, "the message must not be the key alone").not.toMatch(/^set\./);
      expect(m.length).toBeGreaterThan(15);
    }
    /* Four different causes, four different messages. */
    expect(new Set(wyniki[lang]).size).toBeGreaterThanOrEqual(3);
  }
  /* And really different across languages: they do not stay in Polish. */
  expect(wyniki.pl[0]).not.toBe(wyniki.en[0]);
  expect(wyniki.it[0]).not.toBe(wyniki.en[0]);
});
