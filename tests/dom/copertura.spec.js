/* ============================================================
   The Coverage screen counts the WHOLE course, not the part that happens
   to be in memory.

   Levels arrive lazily: at start-up only A1 is loaded and the rest comes in
   when the student walks into it. Both numbers on this screen are built from
   the loaded levels, so entering it straight after opening the course
   measured A1 alone — and the caption calls that number the ceiling of the
   course, a thing that cannot grow. It grew anyway, quietly, for anybody who
   had passed through A2 first.

   Nothing here falls over when it breaks: the screen shows a smaller number
   with the same confidence. Hence a test rather than an eye.
   ============================================================ */
const { test, expect } = require("@playwright/test");

test("the ceiling counts every level, not only the ones already in memory", async ({ page }) => {
  /* Only A1 is registered for now, so a second level is built here: the
     index is served with one more registerLevel line and the level's data
     file exists only as a route. Its words are common ones that A1 lacks. */
  await page.route("**/data/core/curriculum-index.js", async route => {
    const res = await route.fetch();
    const body = (await res.text()) +
      '\nLINGUAI.registerLevel({ code: "A2", cefrLabel: "A2", dataFiles: ["a2-fixture.js"] });\n';
    await route.fulfill({ response: res, body });
  });
  await page.route("**/data/core/a2-fixture.js", route => route.fulfill({
    contentType: "application/javascript",
    body: 'LINGUAI.addUnits("A2", [{ id: "a2-u01", titleIt: "Fixture", lessons: [{ id: "a2-u01-l1", cefr: "A2", ' +
      'titleIt: "Fixture Lektion", vocab: [{ it: "die Arbeit" }, { it: "die Stadt" }, { it: "das Geld" }], exercises: [] }] }]);'
  }));
  await page.goto("/index.html#/copertura");
  await page.waitForFunction(() => window.Core && window.Frequency && window.FREQUENCY);

  /* The view pulls the missing levels itself. If it stopped doing that, this
     is where the test dies: nobody else on this screen would load them. */
  await page.waitForFunction(
    () => window.Core.registry.levels.every(lv => window.Core.registry.loaded[lv.code]),
    null,
    { timeout: 15000 }
  );

  const { wDom, policzone, tylkoA1, poziomow } = await page.evaluate(() => {
    const F = window.FREQUENCY;
    const pelne = window.Frequency.pokrycie(F.words, window.Frequency.slownikKursu(), F.tokens);
    const tylkoA1 = window.Frequency.pokrycie(F.words,
      window.Lemma.zbudujSlownik(window.Core.registry.levels.slice(0, 1), window.READINGS), F.tokens);
    /* The second bar is the course; the first one is the student's deck. */
    const n = document.querySelectorAll(".cov .cov__n")[1].textContent;
    return {
      wDom: parseInt(n, 10),
      policzone: pelne.znane,
      tylkoA1: tylkoA1.znane,
      poziomow: window.Core.registry.levels.length
    };
  });

  expect(poziomow).toBeGreaterThan(1);
  /* Not a fixed number: the course grows and the frequency list is
     regenerated. What has to hold is that the screen shows what the whole
     loaded course covers, and it redraws after the levels arrive. */
  expect(wDom).toBe(policzone);
  expect(policzone, "the second level adds words, so counting A1 alone would be smaller").toBeGreaterThan(tylkoA1);
});

test("the student's deck meets the frequency list at all", async ({ page }) => {
  await page.goto("/index.html");
  await page.waitForFunction(() => window.Core && window.Core.registry.levels.length > 0);

  /* The card key is normalised for identity — "der Hund" is filed lowercased
     and with its article — while the frequency list holds bare forms with the
     noun capital. A deck read key by key therefore met the list nowhere, and
     a full deck scored zero. */
  await page.evaluate(() => { window.Core.addCard("der Hund", "pies", "test"); });
  const znane = await page.evaluate(() => {
    const F = window.FREQUENCY;
    return window.Frequency.pokrycie(F.words, window.Frequency.slownikUcznia(), F.tokens).znane;
  });

  expect(znane, "a deck with one common word covers at least that word").toBeGreaterThan(0);
});
