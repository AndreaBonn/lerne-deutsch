/* ============================================================
   Searching the course, and the character bar.
   ============================================================ */
const { test, expect } = require("@playwright/test");

async function szukaj(page, q) {
  await page.goto("/index.html#/cerca" + (q ? "?q=" + encodeURIComponent(q) : ""));
  await page.waitForFunction(() => window.Search && window.Views.cerca);
  await page.waitForSelector("#searchQ");
}

test("the way into the search sits in the panel header", async ({ page }) => {
  await page.goto("/index.html");
  await page.waitForFunction(() => window.App);
  await page.locator("#railSearch").click();
  await expect(page).toHaveURL(/#\/cerca/);
  await expect(page.locator("#searchQ")).toBeFocused();
});

test("German search folds umlauts and sharp s with intact highlights", async ({ page }) => {
  await szukaj(page, "");
  const result = await page.evaluate(() => {
    /* collect() also walks the grammar reference and the conversations, so the
       fixture empties them: otherwise a grammar title that happens to contain
       "ol" changes the counts as the course grows. */
    Core.registry.levels = [{ code: "A1", units: [{ lessons: [{ id: "german-search",
      vocab: [{ it: "die Straße, Öl und Mädchen", tr: "street" }] }] }] }];
    window.GRAMMAR_REF = [];
    window.CONVERSATIONS = [];
    return {
      hits: ["strasse", "Straße", "ol", "madchen"].map(q => Search.collect(q).length),
      marks: [Search.highlight("Straße Straße Öl", "strasse"),
        Search.highlight("Straße Öl", "ol"), Search.highlight("ßß!", "ss"),
        Search.highlight("Straße!", "sse"), Search.highlight("Öl und Mädchen", "madchen")]
    };
  });
  expect(result.hits).toEqual([1, 1, 1, 1]);
  expect(result.marks).toEqual(["<mark>Straße</mark> <mark>Straße</mark> Öl",
    "Straße <mark>Öl</mark>", "<mark>ß</mark><mark>ß</mark>!",
    "Stra<mark>ße</mark>!", "Öl und <mark>Mädchen</mark>"]);
});

test("no results says so plainly", async ({ page }) => {
  await szukaj(page, "xyzqwerty");
  await expect(page.locator(".empty")).toBeVisible();
});

/* The student's query reaches the result as a highlight. That is exactly the
   point where a reflected XSS enters the document, if the text is replaced
   inside already assembled HTML. */
test("a query with markup does not become markup", async ({ page }) => {
  const zlosliwe = '<img src=x onerror="window.__wstrzykniete=1">';
  await szukaj(page, zlosliwe);
  await page.waitForTimeout(200);

  const wstrzykniete = await page.evaluate(() => !!window.__wstrzykniete);
  expect(wstrzykniete, "the code in the query has no right to execute").toBe(false);

  const obcyObraz = await page.locator("#searchBody img").count();
  expect(obcyObraz, "the query creates no elements").toBe(0);
});

test("the highlight returns text, not markup, for dangerous content too", async ({ page }) => {
  await szukaj(page, "a");
  const wynik = await page.evaluate(() =>
    window.Search.highlight('<b>ciao</b> & "cose"', "ciao"));
  expect(wynik).not.toContain("<b>");
  expect(wynik).toContain("&lt;b&gt;");
  expect(wynik).toContain("<mark>");
});

/* ---------------- The character bar ---------------- */

test("the character bar appears next to a text field and inserts a German character", async ({ page }) => {
  await page.goto("/index.html#/cerca");
  await page.waitForSelector("#searchQ");
  await page.locator("#searchQ").click();

  const pasek = page.locator(".keybar");
  await expect(pasek).toBeVisible();
  await expect(pasek.locator("[data-ch]")).toHaveText(["ä", "ö", "ü", "ß", "Ä", "Ö", "Ü", "'"]);

  await page.locator("#searchQ").fill("M");
  await pasek.locator('[data-ch="ä"]').click();
  await expect(page.locator("#searchQ")).toHaveValue("Mä");
});

test("a German transcription gets the existing almost-right notice before grading", async ({ page }) => {
  await page.goto("/index.html");
  await page.waitForFunction(() => window.Ex);
  await page.evaluate(() => {
    const host = document.createElement("div");
    document.getElementById("main").appendChild(host);
    const built = Ex.build({ t: "fill", q: "Write Mädchen", a: ["Mädchen"] }, 0, "german-text");
    host.innerHTML = built.html;
    window.germanGrade = null;
    built.wire(host.querySelector(".exq"), ok => { window.germanGrade = ok; });
  });
  await page.locator(".exq .js-in").fill("Maedchen");
  await page.locator(".exq .js-check").click();
  await expect(page.locator(".exq .fb")).toHaveText(await page.evaluate(() => I18n.t("ex.almost")));
  expect(await page.evaluate(() => window.germanGrade)).toBe(null);
  await page.locator(".exq .js-in").fill("Mädchen");
  await page.locator(".exq .js-check").click();
  expect(await page.evaluate(() => window.germanGrade)).toBe(true);
});

test("the character goes in at the caret, not at the end", async ({ page }) => {
  await page.goto("/index.html#/cerca");
  await page.waitForSelector("#searchQ");
  await page.locator("#searchQ").fill("cit");
  await page.evaluate(() => {
    const i = document.getElementById("searchQ");
    i.focus();
    i.selectionStart = i.selectionEnd = 1;      // kursor po „c"
  });
  await page.locator(".keybar").waitFor();
  await page.locator('.keybar [data-ch="ü"]').click();
  await expect(page.locator("#searchQ")).toHaveValue("cüit");
});

test("the bar buttons have the size of a touch target", async ({ page }) => {
  await page.goto("/index.html#/cerca");
  await page.waitForSelector("#searchQ");
  await page.locator("#searchQ").click();
  await page.locator(".keybar").waitFor();

  const male = await page.evaluate(() => {
    const zle = [];
    document.querySelectorAll(".keybar__k").forEach(b => {
      const r = b.getBoundingClientRect();
      if (r.width < 44 || r.height < 44) zle.push(b.textContent + " " + Math.round(r.width) + "x" + Math.round(r.height));
    });
    return zle;
  });
  expect(male, `buttons that are too small: ${male.join(", ")}`).toEqual([]);
});

/* The "ausiliare" task comes out sometimes as one answer (radio) and
   sometimes as several (checkbox). We check both shapes explicitly rather
   than waiting for the generator to draw the second — the first version of
   this test passed at random and for a while hid a real defect because of
   it. */
for (const ksztalt of [
  { t: "mcq", q: "Pytanie", opts: ["pierwsza", "druga"], a: 0 },
  { t: "multi", q: "Pytanie", opts: ["pierwsza", "druga", "trzecia"], a: [0, 1] }
]) {
  test(`a digit picks an answer in a task of type ${ksztalt.t}`, async ({ page }) => {
    await page.goto("/index.html");
    await page.waitForFunction(() => window.Ex && window.Keys);

    await page.evaluate(ex => {
      const host = document.createElement("div");
      document.getElementById("main").appendChild(host);
      const b = window.Ex.build(ex, 0, "klawisze");
      host.innerHTML = b.html;
      b.wire(host.querySelector(".exq"), () => {});
    }, ksztalt);

    await page.locator("body").press("1");
    await expect(page.locator(".exq .opts .opt").first()).toHaveClass(/is-sel/);
  });
}

test("a digit does nothing while the student types in a text field", async ({ page }) => {
  await page.goto("/index.html#/cerca");
  await page.waitForSelector("#searchQ");
  await page.locator("#searchQ").click();
  await page.locator("#searchQ").type("1");
  await expect(page.locator("#searchQ"), "the digit must go into the field, not pick an option").toHaveValue("1");
});

/* The bar floats above the content, so it can cover what is under the field
   — and under the field there is usually the "check" button. The first
   version did exactly that and the student could not submit a dictation. */
test("the character bar does not cover the check button", async ({ page }) => {
  await page.goto("/index.html#/lettura?id=r-a1-cafe&mode=dictation");
  await page.waitForSelector(".exq .js-in");
  await page.locator(".exq .js-in").click();
  await page.locator(".keybar").waitFor();

  const kolizja = await page.evaluate(() => {
    const bar = document.querySelector(".keybar").getBoundingClientRect();
    const btn = document.querySelector(".exq .js-check").getBoundingClientRect();
    const nachodzi = !(bar.right < btn.left || bar.left > btn.right ||
                       bar.bottom < btn.top || bar.top > btn.bottom);
    return { nachodzi, bar: Math.round(bar.top), btn: Math.round(btn.top) };
  });
  expect(kolizja.nachodzi, `pasek (${kolizja.bar}) na przycisku (${kolizja.btn})`).toBe(false);

  /* And it really can be clicked: that is the actual proof, not the geometry. */
  await page.locator(".exq .js-check").click({ timeout: 5000 });
});

test("a one-character query says that it is too short", async ({ page }) => {
  await szukaj(page, "a");
  const naglowek = await page.locator(".empty h3").innerText();
  await szukaj(page, "xyzqwerty");
  const brak = await page.locator(".empty h3").innerText();
  expect(naglowek, "too short and no results are two different answers").not.toBe(brak);
});
