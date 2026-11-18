/* ============================================================
   The word card in a reading, for a verb no lesson lists.

   The lookup used to answer "this word is not in the course" for "sitzt" or
   "fragt" when the vocabulary did not list sitzen or fragen, although the
   conjugator generates both forms. Measured over the 24 readings that was
   one tapped word in six, most of them the plainest verbs of the text
   (Q-L1). The conjugator form now opens a card on its infinitive. The paired
   case is a proper name: it has no lemma anywhere, and the card still says so.
   ============================================================ */
const { test, expect } = require("@playwright/test");

async function otworzCzytanke(page) {
  await page.goto("/index.html#/lettura?id=r-a1-cafe&mode=read");
  await page.waitForSelector(".lk-word", { timeout: 30000 });
}

async function kliknij(page, slowo) {
  await page.locator(".lk-word", { hasText: new RegExp(`^${slowo}$`) }).first().click();
  await page.waitForSelector(".lk-card", { timeout: 10000 });
}

test("a verb form the course does not list opens a card on its infinitive", async ({ page }) => {
  await otworzCzytanke(page);
  for (const [forma, bezokolicznik] of [["sitzt", "sitzen"], ["fragt", "fragen"]]) {
    await kliknij(page, forma);
    await expect(page.locator(".lk-card__lemma")).toHaveText(bezokolicznik);
    await expect(page.locator(".lk-card__miss")).toHaveCount(0);
    await page.click(".lk-card .js-close");
  }
});

test("a proper name still gets the card for an unknown word", async ({ page }) => {
  await otworzCzytanke(page);
  await kliknij(page, "Jonas");
  await expect(page.locator(".lk-card__miss")).toHaveCount(1);
  await expect(page.locator(".lk-card__lemma")).toHaveText("Jonas");
});
