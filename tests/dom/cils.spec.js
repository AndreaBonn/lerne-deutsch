/* ============================================================
   The exam simulation in a browser.

   The engine scores correctly (tests/unit/cils.test.mjs). What we check
   here is what the engine does not contain: that a closed section stays
   closed, that the sentence about the simulator's limit is said BEFORE the
   start, and that the summary does not promise an exam result.

   We do not really wait out the clock: a section lasts thirty minutes, and a
   test that waits them out is a test about patience. We replace the times in
   the data right after the page loads, before entering the simulation.
   ============================================================ */
const { test, expect } = require("@playwright/test");

test.describe.configure({ timeout: 60000 });

/** Enters the simulation with shortened section times. */
async function otworz(page, sekundy) {
  await page.goto("/index.html#/esame");
  await page.waitForSelector(".js-start");
  /* The seed's listening section is an empty shell, but the behaviours
     tested here (twice-only playback, the countdown and its expiry) need a
     listening task with items: one goes in, shaped like the engine's real
     ones (`brani` = passages of lines, `vf` items). */
  await page.evaluate(() => {
    const asc = window.CILS[0].sezioni.find(s => s.id === "ascolto");
    if (!asc.prove.length) {
      /* The shell's 1 minute is a placeholder: with it the clock would be in its warning minute from the start. */
      asc.minuti = 20;
      asc.prove.push({
        t: "vf",
        puntiPerItem: 2,
        consegna: "Hören Sie das Gespräch. Richtig oder falsch?",
        brani: [[{ it: "Guten Tag, ich möchte einen Termin." }]],
        items: [{ q: "Die Person möchte einen Termin.", a: 0 }, { q: "Die Person ruft am Abend an.", a: 1 }]
      });
    }
  });
  if (sekundy) {
    await page.evaluate(s => {
      window.CILS.forEach(sim => sim.sezioni.forEach(sez => { sez.minuti = s / 60; }));
    }, sekundy);
  }
  await page.locator(".js-start").first().click();
  await page.waitForSelector(".cils-clock");
}

test.describe("simulazione d'esame", () => {
  for (const lang of ["it", "en", "es", "fr", "pl"]) {
    test(`unofficial disclaimer is visible on entry and report in ${lang}`, async ({ page }) => {
      await page.goto("/index.html#/esame");
      await page.waitForSelector(".js-start");
      await page.evaluate(code => { I18n.set(code); Views.esame(); }, lang);
      const disclaimer = await page.evaluate(() => I18n.t("cils.thresholdSource"));
      expect(disclaimer).toContain("Goethe-Zertifikat B1");
      expect(disclaimer).toContain("Goethe-Institut");
      await expect(page.getByText(disclaimer, { exact: true })).toBeVisible();
      const structure = await page.evaluate(() => I18n.t("cils.structure"));
      expect(structure).toMatch(/Lesen.*Hören.*Schreiben.*Sprechen/);
      await expect(page.getByText(structure, { exact: true })).toBeVisible();
      await page.locator(".js-start").first().click();
      for (let i = 0; i < 4; i++) await page.locator(".js-next").click();
      await page.locator(".js-next").click();
      await expect(page.locator(".cils-tab tr")).toHaveCount(4);
      await expect(page.getByText(disclaimer, { exact: true })).toBeVisible();
    });
  }

  test("il limite del simulatore è detto prima di cominciare", async ({ page }) => {
    await page.goto("/index.html#/esame");
    await page.waitForSelector(".js-start");
    const avviso = await page.locator(".callout--info").first().textContent();
    /* Non è una frase decorativa: dice che due abilità su quattro non
       vengono contate, e deve stare sopra il pulsante di avvio. */
    expect(avviso.length).toBeGreaterThan(80);
    const yAvviso = (await page.locator(".callout--info").first().boundingBox()).y;
    const yStart = (await page.locator(".js-start").first().boundingBox()).y;
    expect(yAvviso).toBeLessThan(yStart);
  });

  test("le quattro sezioni si susseguono e non si torna indietro", async ({ page }) => {
    await otworz(page);
    const visti = [];
    for (let i = 0; i < 4; i++) {
      visti.push(await page.textContent(".cils-step"));
      if (await page.locator(".js-text").count()) await page.fill(".js-text", "prova");
      await page.click(".js-next");
      await page.waitForTimeout(250);
    }
    expect(visti.length).toBe(4);

    /* Dopo l'orale c'è la revisione, che non è una quinta sezione d'esame:
       niente orologio e niente barra dei passi. Lo studente riascolta sé
       stesso e scrive cosa ha detto, ed è l'unica cosa che il corso può
       leggere di una risposta parlata. */
    await expect(page.locator(".js-said")).toBeVisible();
    await expect(page.locator(".cils-clock")).toHaveCount(0);
    await expect(page.locator(".cils-step")).toHaveCount(0);
    await page.click(".js-next");
    await page.waitForTimeout(250);

    /* Arrivati al riepilogo non c'è alcun controllo che riapra una sezione. */
    await expect(page.locator(".cils-tab")).toBeVisible();
    await expect(page.locator(".cils-clock")).toHaveCount(0);
  });

  test("il tempo scaduto chiude la sezione e conta quello che c'era", async ({ page }) => {
    await otworz(page, 3);
    await page.locator('.cils-items input[type="radio"]').first().check();
    await page.waitForSelector(".js-expired:not([hidden])", { timeout: 20000 });
    /* Dopo la scadenza gli input sono disattivati: nessuna risposta in più. */
    const disabilitati = await page.evaluate(() =>
      [...document.querySelectorAll('.js-body input')].every(i => i.disabled));
    expect(disabilitati).toBe(true);
  });

  test("il riepilogo non promette un esito d'esame", async ({ page }) => {
    await otworz(page);
    for (let i = 0; i < 4; i++) {
      if (await page.locator(".js-text").count()) await page.fill(".js-text", "prova");
      await page.click(".js-next");
      await page.waitForTimeout(250);
    }
    /* La revisione dopo l'orale, saltata qui: è facoltativa per costruzione. */
    await page.click(".js-next");
    await page.waitForTimeout(250);
    const righe = await page.locator(".cils-tab tr").allTextContents();
    expect(righe.length).toBe(4);
    /* Scritta e orale compaiono, ma senza punteggio. */
    expect(righe[2] + righe[3]).not.toMatch(/\d+\s*\/\s*12/);
    /* La provenienza della soglia sta nella stessa schermata del verdetto. */
    await expect(page.locator(".cils-src")).toBeVisible();
  });

  test("un testo d'ascolto si può sentire due volte, non tre", async ({ page }) => {
    await otworz(page);
    /* Goethe order: Lesen comes first, Hören second. */
    await page.locator(".js-next").click();
    const b = page.locator(".js-play").first();
    await b.click();
    await page.waitForTimeout(150);
    await b.click();
    await page.waitForTimeout(150);
    await expect(b).toBeDisabled();
  });

  test("uscire dalla rotta ferma il conto alla rovescia", async ({ page }) => {
    /* Il timer viveva oltre la vista: mezz'ora dopo il callback chiudeva
       una sezione sullo schermo di qualcun altro. Contiamo gli intervalli
       aperti, non il comportamento visibile: il difetto non si vedeva. */
    await page.addInitScript(() => {
      window.__vivi = 0;
      const si = window.setInterval, ci = window.clearInterval;
      window.setInterval = function (...a) { window.__vivi++; return si.apply(window, a); };
      window.clearInterval = function (id) { if (id != null) window.__vivi--; return ci.call(window, id); };
    });
    await otworz(page);
    expect(await page.evaluate(() => window.__vivi)).toBe(1);
    await page.evaluate(() => window.App.go("lettura"));
    await page.waitForTimeout(400);
    expect(await page.evaluate(() => window.__vivi)).toBe(0);
  });

  test("un doppio clic non salta la sezione successiva", async ({ page }) => {
    await otworz(page);
    const b = page.locator(".js-next");
    await b.dblclick();
    await page.waitForTimeout(400);
    /* Dopo un doppio clic siamo nella sezione 2, non nella 3. */
    expect(await page.textContent(".cils-step")).toMatch(/2/);
  });

  test("l'orologio non parla a ogni secondo", async ({ page }) => {
    await otworz(page);
    /* La cifra che cambia ogni secondo è nascosta agli screen reader; la
       regione live resta vuota finché non si arriva a un avviso. */
    await expect(page.locator(".cils-clock")).toHaveAttribute("aria-hidden", "true");
    await page.waitForTimeout(2200);
    expect((await page.textContent(".js-clock-live")).trim()).toBe("");
  });
});

test("Goethe Teile collect matching answers and every writing production", async ({ page }) => {
  await page.goto("/index.html#/esame");
  await page.waitForSelector(".js-start");
  await page.evaluate(() => {
    const sections = window.CILS[0].sezioni;
    sections[0].prove = [
      { t: "abbina", consegna: "Anzeigen zuordnen", puntiPerItem: 5,
        annunci: [{ titolo: "Kurs", testo: "Deutsch lernen" }], items: [{ q: "Sprache", a: 0 }, { q: "Musik", a: 1 }] },
      { t: "jn", consegna: "Meinungen", testo: ["Leserbrief"], puntiPerItem: 5, items: [{ q: "Einverstanden?", a: 0 }] }
    ];
    sections[2].prove = [
      { t: "schreiben", consegna: "Eine Mail", punti: ["Grund nennen"], parole: { min: 2, max: 3 }, richiede: [{ word: "Hallo", etichetta: "Gruß" }] },
      { t: "schreiben", consegna: "Ein Beitrag", punti: ["Meinung sagen"], parole: { min: 4, max: 6 }, richiede: [{ word: "gern", etichetta: "Meinung" }] }
    ];
    sections[3].prove = [{ t: "sprechen", consegna: "Gemeinsam planen", punti: ["Termin finden"] }];
  });
  await page.locator(".js-start").first().click();
  await page.locator('[name="p0i0"][value="0"]').check();
  await page.locator('[name="p0i1"][value="1"]').check();
  await page.locator('[name="p1i0"][value="0"]').check();
  await expect(page.locator('input:checked')).toHaveCount(3);
  await page.locator(".js-next").click();
  await page.locator(".js-next").click();
  await expect(page.locator(".js-text")).toHaveCount(2);
  await page.locator(".js-text").nth(0).fill("Hallo Anna");
  await page.locator(".js-text").nth(1).fill("Ich lerne wirklich sehr gern");
  await expect(page.locator(".js-count").nth(0)).toContainText("2");
  await expect(page.locator(".js-count").nth(1)).toContainText("6");
  await page.locator(".js-next").click();
  await expect(page.locator(".js-body")).toContainText("Termin finden");
  await page.locator(".js-next").click();
  await expect(page.locator(".js-body")).toContainText("Gemeinsam planen");
  await page.locator(".js-next").click();
  await expect(page.locator(".cils-tab tr").first()).toContainText("15 / 15");
  await expect(page.locator(".js-lettura-scritta")).toHaveCount(2);
  await expect(page.locator(".cils-check").nth(0)).toContainText("✓ Gruß");
  await expect(page.locator(".cils-check").nth(1)).toContainText("✓ Meinung");
});
