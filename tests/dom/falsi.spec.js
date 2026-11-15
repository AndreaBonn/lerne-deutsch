/* ============================================================
   False friends — the only asymmetric category in the course.

   We check two things the unit tests do not show: that a change of language
   REPLACES the set rather than adding to the previous one, and that the
   exercise calls onDone exactly once, like all the others.
   ============================================================ */
const { test, expect } = require("@playwright/test");

async function otworz(page, lang) {
  await page.goto("/index.html#/falsi");
  await page.waitForSelector(".fa-card");
  if (lang) {
    await page.evaluate(l => App.applyLang(l), lang);
    await page.waitForTimeout(400);
    await page.evaluate(() => App.go("falsi"));
    await page.waitForSelector(".fa-card");
  }
}

test.describe("false friends", () => {
  test("every language has a set of its own, not a translation of the same one", async ({ page }) => {
    await otworz(page, "pl");
    const pl = await page.locator(".fa-card .fa-it").allTextContents();
    await otworz(page, "es");
    const es = await page.locator(".fa-card .fa-it").allTextContents();

    /* Each language shows exactly the entries the neutral layer declares for it. */
    const ile = await page.evaluate(() => ({
      pl: window.INTERFERENCE.filter(w => w.for.includes("pl")).length,
      es: window.INTERFERENCE.filter(w => w.for.includes("es")).length
    }));
    expect(ile.pl).toBeGreaterThan(0);
    expect(ile.es).toBeGreaterThan(0);
    expect(pl.length).toBe(ile.pl);
    expect(es.length).toBe(ile.es);
    /* The sets are meant to DIFFER: "der Dom" trips up a Pole, "die Rente" a Spaniard. */
    const wspolne = pl.filter(w => es.includes(w));
    expect(wspolne.length).toBeLessThan(pl.length);
    expect(es.some(w => !pl.includes(w))).toBe(true);
  });

  test("after a language change not one old explanation remains", async ({ page }) => {
    await otworz(page, "pl");
    const plWhy = await page.locator(".fa-card .js-why").allTextContents();
    await otworz(page, "en");
    const enWhy = await page.locator(".fa-card .js-why").allTextContents();

    expect(enWhy.every(w => w.trim().length > 0)).toBe(true);
    expect(enWhy.some(w => plWhy.includes(w))).toBe(false);
  });

  test("the exercise calls onDone exactly once", async ({ page }) => {
    await otworz(page, "pl");
    await page.click(".js-quiz");
    await page.waitForSelector(".exq");

    await page.evaluate(() => {
      window.__n = 0;
      const o = Core.recordAnswer;
      Core.recordAnswer = function () { window.__n++; return o.apply(this, arguments); };
    });
    await page.click(".opt");
    await page.click(".js-check");
    await page.waitForTimeout(300);

    /* We do not attempt a second click: the button is disabled and Playwright
       would wait for it to unlock until the end of the test. What we really
       want to state reads "there is no way to answer twice", and that is how
       it is written. */
    await expect(page.locator(".exq .js-check")).toBeDisabled();
    expect(await page.evaluate(() => window.__n)).toBe(1);
  });

  test("the explanation enters as text, not as markup", async ({ page }) => {
    await otworz(page, "pl");
    expect(await page.locator(".fa-card .js-why img").count()).toBe(0);
    await expect(page.locator(".fa-card").first()).toContainText("TECZKA");
  });
});
