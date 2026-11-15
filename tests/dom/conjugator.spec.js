const { test, expect } = require('@playwright/test');

test('aufstehen shows all ten German tenses and German forms', async ({ page }) => {
  await page.goto('/index.html#/coniugatore');
  await page.locator('.js-verb').fill('aufstehen');
  await page.locator('.js-go').click();
  await expect(page.locator('#conjOut .gt')).toHaveCount(10);
  await expect(page.locator('#conjOut td.it[lang="de"]').first()).toContainText('stehe auf');
  await expect(page.locator('#conjOut')).toContainText('würde aufstehen');
});

test('invalid input explains recovery, preserves the input and clears on retry', async ({ page }) => {
  await page.goto('/index.html#/coniugatore');
  await page.locator('.js-verb').fill('xyz');
  await page.locator('.js-go').click();
  await expect(page.locator('.js-verb')).toHaveValue('xyz');
  await expect(page.locator('.js-verb')).toHaveAttribute('aria-invalid', 'true');
  await expect(page.locator('#conjOut')).toContainText('-en');
  await expect(page.locator('#conjOut')).toContainText('sich');
  await page.locator('.js-verb').fill('sich   vorstellen');
  await page.locator('.js-verb').press('Enter');
  await expect(page.locator('#conjOut .gt')).toHaveCount(10);
  await expect(page.locator('#conjOut td.it[lang="de"]').first()).toContainText('stelle mich vor');
  await expect(page.locator('.js-verb')).toHaveAttribute('aria-invalid', 'false');
});

for (const verb of ['wandern', 'handeln', 'sein', 'tun']) {
  test(`${verb} is a German infinitive`, async ({ page }) => {
    await page.goto('/index.html#/coniugatore');
    await page.locator('.js-verb').fill(verb);
    await page.locator('.js-go').click();
    await expect(page.locator('#conjOut .gt')).toHaveCount(10);
  });
}

test('a word the engine does not know is conjugated with a visible notice', async ({ page }) => {
  await page.goto('/index.html#/coniugatore');
  await page.locator('.js-verb').fill('morgen');
  await page.locator('.js-go').click();
  await expect(page.locator('#conjOut .gt')).toHaveCount(10);
  await expect(page.locator('#conjNote')).toBeVisible();
  await page.locator('.js-verb').fill('lernen');
  await page.locator('.js-go').click();
  await expect(page.locator('#conjNote')).toHaveCount(0);
  await page.locator('.js-verb').fill('einkaufen');
  await page.locator('.js-go').click();
  await expect(page.locator('#conjNote')).toHaveCount(0);
});

test('a capitalised word is a noun and is rejected', async ({ page }) => {
  await page.goto('/index.html#/coniugatore');
  await page.locator('.js-verb').fill('Mädchen');
  await page.locator('.js-go').click();
  await expect(page.locator('#conjOut .gt')).toHaveCount(0);
  await expect(page.locator('.js-verb')).toHaveAttribute('aria-invalid', 'true');
});

test('aria-describedby points at the short hint only', async ({ page }) => {
  await page.goto('/index.html#/coniugatore');
  const input = page.locator('.js-verb');
  await input.fill('lernen');
  await page.locator('.js-go').click();
  await expect(input).not.toHaveAttribute('aria-describedby', 'conjOut');
  await input.fill('xyz');
  await page.locator('.js-go').click();
  const id = await input.getAttribute('aria-describedby');
  expect(id).not.toBe('conjOut');
  await expect(page.locator('#' + id)).toContainText('sich');
  expect(await page.locator('#' + id).innerText()).not.toContain('Partizip');
});

test('long forms are not clipped in the tables', async ({ page }) => {
  for (const width of [375, 1280]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto('/index.html#/coniugatore');
    await page.locator('.js-verb').fill('sich vorstellen');
    await page.locator('.js-go').click();
    await expect(page.locator('#conjOut .gt')).toHaveCount(10);
    const clipped = await page.evaluate(() => Array.from(document.querySelectorAll('#conjOut .table-wrap'))
      .filter(w => w.scrollWidth > w.clientWidth + 1).length);
    expect(clipped, 'tables scrolling horizontally at ' + width).toBe(0);
  }
});
