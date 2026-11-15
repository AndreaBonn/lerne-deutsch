/* ============================================================
   retention.js - the effects behind coming back tomorrow.

   The decisions are checked in retention-rules.test.mjs. What is checked
   here is the half that touches the browser: that the decision is actually
   asked before the browser is, that the answer lands in the saved profile,
   and that a platform without an API is left alone instead of thrown at.
   The browser APIs are boundaries, so they are stubbed; Core, Notice and
   the rules are the real ones.
   ============================================================ */
import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { loadEngine, CORE } from "./_harness.mjs";

const FILES = [...CORE, "assets/js/ics.js", "assets/js/retention-rules.js", "assets/js/retention.js"];
const TERAZ = 1_800_000_000_000;
const DOBA = 24 * 60 * 60 * 1000;

/** Lets the promise chains of zadbajOMiejsce run to the end. */
const spokoj = () => new Promise((r) => setImmediate(r));

/**
 * @param {object} [o]
 * @param {number} [o.lekcje] lessons done
 * @param {object} [o.storage] a navigator.storage stub, or undefined for none
 * @param {boolean} [o.odznaka] whether the badge API exists
 * @param {boolean} [o.standalone] navigator.standalone
 * @param {object} [o.matchMedia] a matchMedia stub
 */
function silnik(o) {
  const opts = o || {};
  const box = loadEngine({ files: FILES, now: TERAZ });
  const S = box.sandbox;
  box.Core.load();
  S.Core.state.stats.lessonsDone = opts.lekcje || 0;
  const odznaki = [];
  if (opts.storage) S.navigator.storage = opts.storage;
  if (opts.odznaka) {
    S.navigator.setAppBadge = (n) => odznaki.push("set:" + n);
    S.navigator.clearAppBadge = () => odznaki.push("clear");
  }
  if (opts.standalone !== undefined) S.navigator.standalone = opts.standalone;
  if (opts.matchMedia) S.matchMedia = opts.matchMedia;
  return { box, S, odznaki, R: S.Retention, stan: () => S.Core.state.retention };
}

/** A navigator.storage that records how often it was asked. */
function magazyn(juz, odpowiedz) {
  const log = { persisted: 0, persist: 0 };
  return {
    log,
    persisted() { log.persisted++; return Promise.resolve(juz); },
    persist() {
      log.persist++;
      return odpowiedz === "odrzuca" ? Promise.reject(new Error("no")) : Promise.resolve(odpowiedz);
    }
  };
}

describe("retention: what the platform can do", () => {
  test("wspiera reports the storage manager and the badge API as the browser has them", () => {
    const brak = silnik();
    assert.equal(brak.R.wspiera.miejsce(), false);
    assert.equal(brak.R.wspiera.odznaka(), false);
    const jest = silnik({ storage: magazyn(false, true), odznaka: true });
    assert.equal(jest.R.wspiera.miejsce(), true);
    assert.equal(jest.R.wspiera.odznaka(), true);
  });

  test("a storage object without persist() is not a storage manager", () => {
    const s = silnik({ storage: { persisted() { return Promise.resolve(false); } } });
    assert.equal(s.R.wspiera.miejsce(), false);
  });

  test("samodzielna: display-mode standalone wins, Safari's own flag is the second way", () => {
    assert.equal(silnik({ matchMedia: (q) => ({ matches: q === "(display-mode: standalone)" }) }).R.samodzielna(), true);
    assert.equal(silnik({ matchMedia: () => ({ matches: false }), standalone: true }).R.samodzielna(), true);
    assert.equal(silnik({ standalone: true }).R.samodzielna(), true, "no matchMedia at all");
    assert.equal(silnik({ matchMedia: () => ({ matches: false }), standalone: false }).R.samodzielna(), false);
    assert.equal(silnik().R.samodzielna(), false, "a plain tab");
  });
});

describe("retention: permanent storage is asked for at most once", () => {
  test("no storage manager: start does nothing and does not throw", async () => {
    const s = silnik({ lekcje: 5 });
    assert.equal(s.R.start(), true);
    await spokoj();
    assert.notEqual(s.stan().pytanoOMiejsce, true);
    assert.notEqual(s.stan().trwale, true);
  });

  test("a profile that already has the grant is recorded and never prompted", async () => {
    const m = magazyn(true, true);
    const s = silnik({ lekcje: 5, storage: m });
    s.R.start();
    await spokoj();
    assert.equal(m.log.persist, 0, "no prompt");
    assert.equal(s.stan().trwale, true);
    s.box.flush();
    assert.equal(s.box.stored().retention.trwale, true, "and it is saved");
  });

  test("before the first finished lesson the one attempt is not spent", async () => {
    const m = magazyn(false, true);
    const s = silnik({ lekcje: 0, storage: m });
    s.R.start();
    await spokoj();
    assert.equal(m.log.persisted, 1, "the browser was asked whether it already has the grant");
    assert.equal(m.log.persist, 0);
    assert.notEqual(s.stan().pytanoOMiejsce, true);
  });

  test("after a lesson the attempt is spent and a yes is remembered", async () => {
    const m = magazyn(false, true);
    const s = silnik({ lekcje: 1, storage: m });
    s.R.start();
    await spokoj();
    assert.equal(m.log.persist, 1);
    assert.equal(s.stan().pytanoOMiejsce, true);
    assert.equal(s.stan().trwale, true);
  });

  test("a no from the browser leaves trwale false and the attempt marked spent", async () => {
    const m = magazyn(false, false);
    const s = silnik({ lekcje: 2, storage: m });
    s.R.start();
    await spokoj();
    assert.equal(s.stan().pytanoOMiejsce, true);
    assert.equal(s.stan().trwale, false);
  });

  test("a persist() that rejects does not escape and does not grant", async () => {
    const m = magazyn(false, "odrzuca");
    const s = silnik({ lekcje: 2, storage: m });
    s.R.start();
    await spokoj();
    assert.equal(s.stan().pytanoOMiejsce, true, "spent: the browser remembers refusals, not us");
    assert.notEqual(s.stan().trwale, true);
  });

  test("a storage manager that will not answer persisted() is treated as absent", async () => {
    const m = { persisted: () => Promise.reject(new Error("down")), persist() { throw new Error("must not be called"); } };
    const s = silnik({ lekcje: 3, storage: m });
    s.R.start();
    await spokoj();
    assert.notEqual(s.stan().pytanoOMiejsce, true, "the attempt was not spent on a manager that never answered");
  });

  test("a second start on a profile whose attempt is spent does not ask again", async () => {
    const m = magazyn(false, false);
    const s = silnik({ lekcje: 2, storage: m });
    s.R.start();
    await spokoj();
    s.R.start();
    await spokoj();
    assert.equal(m.log.persist, 1);
  });
});

describe("retention: the badge", () => {
  test("off by default: leaving the tab paints nothing", () => {
    const s = silnik({ odznaka: true });
    s.S.Core.state.srs.a = { due: TERAZ };
    s.R.start();
    s.odznaki.length = 0;
    s.box.sandbox.document.visibilityState = "hidden";
    s.box.wDokumencie("visibilitychange");
    assert.deepEqual(s.odznaki, []);
  });

  test("on: leaving paints the cards due within a day across both decks, returning clears it", () => {
    const s = silnik({ odznaka: true });
    s.S.Core.state.srs = { a: { due: TERAZ }, b: { due: TERAZ + 2 * DOBA } };
    s.S.Core.state.errors = { c: { due: TERAZ + DOBA / 2 } };
    s.R.start();
    s.R.ustawOdznake(true);
    s.odznaki.length = 0;
    s.S.document.visibilityState = "hidden";
    s.box.wDokumencie("visibilitychange");
    assert.deepEqual(s.odznaki, ["set:2"], "a and c are due within a day, b is not");
    s.S.document.visibilityState = "visible";
    s.box.wDokumencie("visibilitychange");
    assert.deepEqual(s.odznaki, ["set:2", "clear"]);
  });

  test("on with nothing due: leaving clears instead of painting a zero", () => {
    const s = silnik({ odznaka: true });
    s.S.Core.state.srs = { b: { due: TERAZ + 5 * DOBA } };
    s.R.ustawOdznake(true);
    assert.deepEqual(s.odznaki, ["clear"]);
    s.S.document.visibilityState = "hidden";
    s.box.wDokumencie("visibilitychange");
    assert.equal(s.odznaki[s.odznaki.length - 1], "clear", "leaving with nothing due clears the icon");
    assert.ok(!s.odznaki.some(e => e.indexOf("set:") === 0), "and never paints a number, zero included");
  });

  test("ustawOdznake saves the choice, paints at once when turned on and clears when turned off", () => {
    const s = silnik({ odznaka: true });
    s.S.Core.state.srs = { a: { due: TERAZ } };
    s.R.ustawOdznake(true);
    s.box.flush();
    assert.equal(s.box.stored().retention.odznaka, true);
    assert.deepEqual(s.odznaki, ["set:1"]);
    s.R.ustawOdznake(false);
    s.box.flush();
    assert.equal(s.box.stored().retention.odznaka, false);
    assert.deepEqual(s.odznaki, ["set:1", "clear"]);
  });

  test("without the badge API the setting is saved and nothing is called or thrown", () => {
    const s = silnik();
    assert.doesNotThrow(() => s.R.ustawOdznake(true));
    assert.equal(s.stan().odznaka, true);
    assert.doesNotThrow(() => { s.R.start(); s.box.wDokumencie("visibilitychange"); });
  });

  test("start takes down a badge left over from the previous visit", () => {
    const s = silnik({ odznaka: true });
    s.R.start();
    assert.deepEqual(s.odznaki, ["clear"]);
  });
});

describe("retention: the installation offer", () => {
  function zdarzenie() {
    const ev = { prevented: 0, prompted: 0, preventDefault() { ev.prevented++; }, prompt() { ev.prompted++; } };
    return ev;
  }
  const przechwyc = (s, ev) => s.box.okno.uchwyty.beforeinstallprompt[0](ev);

  test("too few lessons: the default bar is suppressed, no offer is made, the event is kept", () => {
    const s = silnik({ lekcje: 2 });
    s.R.start();
    const ev = zdarzenie();
    przechwyc(s, ev);
    assert.equal(ev.prevented, 1);
    assert.deepEqual(s.box.visible(), []);
    assert.equal(s.R.mozliwaInstalacja(), true);
  });

  test("enough lessons: one message with an install button, and the offer is marked as made", () => {
    const s = silnik({ lekcje: 3 });
    s.R.start();
    przechwyc(s, zdarzenie());
    assert.deepEqual(s.box.visible(), ["ret.installReady"]);
    assert.equal(s.stan().pytanoOInstalacje, true);
  });

  test("the button hands over the browser dialogue exactly once", () => {
    const s = silnik({ lekcje: 3 });
    s.R.start();
    const ev = zdarzenie();
    przechwyc(s, ev);
    const przycisk = s.box.notices[0].children[0];
    przycisk.fire("click");
    assert.equal(ev.prompted, 1);
    assert.equal(s.R.mozliwaInstalacja(), false, "the event is spent");
    assert.equal(s.R.zainstaluj(), false, "a second call has nothing to open");
    assert.equal(ev.prompted, 1);
  });

  test("dismissing the message is a final refusal", () => {
    const s = silnik({ lekcje: 3 });
    s.R.start();
    przechwyc(s, zdarzenie());
    const krzyzyk = s.box.notices[0].children[1];
    krzyzyk.fire("click");
    assert.equal(s.stan().instalacjaOdrzucona, true);
  });

  test("zainstaluj with no deferred event reports false", () => {
    const s = silnik({ lekcje: 3 });
    assert.equal(s.R.zainstaluj(), false);
    assert.equal(s.R.mozliwaInstalacja(), false);
  });

  test("inside the installed app the offer is not made even with enough lessons", () => {
    const s = silnik({ lekcje: 9, standalone: true });
    s.R.start();
    przechwyc(s, zdarzenie());
    assert.deepEqual(s.box.visible(), []);
  });

  test("appinstalled drops the event and counts as the offer answered", () => {
    const s = silnik({ lekcje: 1 });
    s.R.start();
    przechwyc(s, zdarzenie());
    assert.equal(s.R.mozliwaInstalacja(), true);
    s.box.okno.odpal("appinstalled");
    assert.equal(s.R.mozliwaInstalacja(), false);
    assert.equal(s.stan().pytanoOInstalacje, true);
  });
});

describe("retention: the reminder file", () => {
  test("the file carries the chosen hour and the hour is remembered in the profile", () => {
    const s = silnik();
    const tekst = s.R.pobierzPrzypomnienie(7, 30);
    assert.match(tekst, /DTSTART[^:]*:\d{8}T073000\r\n/);
    assert.deepEqual(JSON.parse(JSON.stringify(s.stan().przypomnienie)), { godzina: 7, minuta: 30 });
    s.box.flush();
    assert.deepEqual(s.box.stored().retention.przypomnienie, { godzina: 7, minuta: 30 });
  });

  test("the blob holds the same text, is typed as a calendar, is clicked and its handle is released later", () => {
    const s = silnik();
    const tekst = s.R.pobierzPrzypomnienie(21, 5);
    const blob = s.box.pobrania.blobs[s.box.pobrania.blobs.length - 1];
    assert.equal(blob.tresc, tekst);
    assert.equal(blob.type, "text/calendar;charset=utf-8");
    const a = s.box.utworzone[s.box.utworzone.length - 1];
    assert.equal(a.klikniecia, 1);
    assert.deepEqual(s.box.pobrania.zwolnione, [], "not released before the download has started");
    s.box.flush();
    assert.deepEqual(s.box.pobrania.zwolnione, [a.href]);
  });

  test("two downloads get two different event ids, so a calendar keeps both", () => {
    const s = silnik();
    const uid = (t) => t.match(/UID:(.*)\r\n/)[1];
    const a = uid(s.R.pobierzPrzypomnienie(7, 0));
    const b = uid(s.R.pobierzPrzypomnienie(7, 0));
    assert.notEqual(a, b);
  });
});
