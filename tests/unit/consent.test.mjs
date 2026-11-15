import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { loadEngine, CORE } from "./_harness.mjs";

function freshConsent() {
  const box = loadEngine({ files: [...CORE, "assets/js/consent.js"] });
  box.Core.load();
  return { box, consent: box.sandbox.Consent };
}

describe("the speech-recognition consent gate", () => {
  /* Returning students must not be asked again before each voice exercise. */
  test("existing consent runs the action immediately without asking", () => {
    const { consent } = freshConsent();
    consent.ustaw(true);
    const events = [];
    consent.uzyjPytania(() => events.push("asked"));
    consent.zZgoda(() => events.push("action"), () => events.push("refused"));
    assert.deepEqual(events, ["action"]);
  });

  /* A view without a question must never send the student's voice silently. */
  test("without a question the gate calls refusal", () => {
    const { consent } = freshConsent();
    const events = [];
    consent.zZgoda(() => events.push("action"), () => events.push("refused"));
    assert.deepEqual(events, ["refused"]);
    assert.equal(consent.udzielona(), false);
  });

  /* Approval must survive closing the tab and precede the protected action. */
  test("a yes persists speech consent and runs the action", () => {
    const { box, consent } = freshConsent();
    const events = [];
    consent.uzyjPytania(answer => {
      events.push("asked");
      answer(true);
    });
    consent.zZgoda(() => events.push(consent.udzielona()), () => events.push("refused"));
    box.flush();
    assert.deepEqual(events, ["asked", true]);
    assert.equal(box.Core.state.settings.sttConsent, true);
    assert.equal(box.stored().settings.sttConsent, true);
  });

  /* Declining must report refusal without creating a saved permission. */
  test("a no calls refusal and leaves storage unchanged", () => {
    const { box, consent } = freshConsent();
    box.flush();
    const before = box.stored();
    const events = [];
    consent.uzyjPytania(answer => answer(false));
    consent.zZgoda(() => events.push("action"), () => events.push("refused"));
    box.flush();
    assert.deepEqual(events, ["refused"]);
    assert.equal(consent.udzielona(), false);
    assert.deepEqual(box.stored(), before);
  });

  /* Revoking a saved choice must close the gate on the next exercise too. */
  test("ustaw false persists revocation and asks again", () => {
    const { box, consent } = freshConsent();
    consent.ustaw(true);
    box.flush();
    assert.equal(box.stored().settings.sttConsent, true);
    consent.ustaw(false);
    box.flush();
    const events = [];
    consent.uzyjPytania(() => events.push("asked"));
    consent.zZgoda(() => events.push("action"));
    assert.deepEqual(events, ["asked"]);
    assert.equal(consent.udzielona(), false);
    assert.equal(box.stored().settings.sttConsent, false);
  });

  /* Voice, answer judging and whole conversations are separate permissions. */
  test("granting and revoking each consent leaves the other two unchanged", () => {
    const { consent } = freshConsent();
    const read = () => [consent.udzielona(), consent.udzielonaLlm(), consent.udzielonaChat()];
    const setters = ["ustaw", "ustawLlm", "ustawChat"];
    for (const [index, setter] of setters.entries()) {
      consent[setter](true);
      assert.deepEqual(read(), setters.map((_, position) => position === index));
      consent[setter](false);
      assert.deepEqual(read(), [false, false, false]);
    }
    setters.forEach(setter => consent[setter](true));
    for (const [index, setter] of setters.entries()) {
      consent[setter](false);
      assert.deepEqual(read(), setters.map((_, position) => position !== index));
      consent[setter](true);
    }
  });
});

/* The answer-judging and the conversation gates have the shape of the voice
   one, but each stores its own flag: a copy that wrote the wrong flag would
   pass the "asks and runs" check and still unlock another feature. */
describe("the answer-judging and conversation consent gates", () => {
  const gates = [
    { name: "llm", ask: "uzyjPytaniaLlm", gate: "zZgodaLlm", read: "udzielonaLlm", flag: "llmConsent",
      otherFlag: "llmChatConsent", others: ["udzielona", "udzielonaChat"] },
    { name: "chat", ask: "uzyjPytaniaChat", gate: "zZgodaChat", read: "udzielonaChat", flag: "llmChatConsent",
      otherFlag: "llmConsent", others: ["udzielona", "udzielonaLlm"] }
  ];
  for (const g of gates) {
    test(`${g.name}: the other model feature's consent does not open this gate`, () => {
      const { box, consent } = freshConsent();
      box.Core.state.settings[g.otherFlag] = true;
      const events = [];
      consent[g.ask](answer => { events.push("asked"); answer(false); });
      consent[g.gate](() => events.push("action"), () => events.push("refused"));
      assert.deepEqual(events, ["asked", "refused"], "it asks for its own consent instead of borrowing one");
      assert.equal(consent[g.read](), false);
    });

    test(`${g.name}: existing consent runs the action without asking`, () => {
      const { box, consent } = freshConsent();
      box.Core.state.settings[g.flag] = true;
      const events = [];
      consent[g.ask](() => events.push("asked"));
      consent[g.gate](() => events.push("action"), () => events.push("refused"));
      assert.deepEqual(events, ["action"]);
    });

    test(`${g.name}: without a question the gate refuses and stores nothing`, () => {
      const { box, consent } = freshConsent();
      const events = [];
      consent[g.gate](() => events.push("action"), () => events.push("refused"));
      assert.deepEqual(events, ["refused"]);
      assert.equal(consent[g.read](), false);
      assert.equal(box.Core.state.settings[g.flag], undefined);
    });

    test(`${g.name}: a yes stores its own flag only, then runs the action`, () => {
      const { box, consent } = freshConsent();
      const events = [];
      consent[g.ask](answer => { events.push("asked"); answer(true); });
      consent[g.gate](() => events.push(consent[g.read]()), () => events.push("refused"));
      box.flush();
      assert.deepEqual(events, ["asked", true]);
      assert.equal(box.stored().settings[g.flag], true);
      for (const other of g.others) assert.equal(consent[other](), false);
    });

    test(`${g.name}: a no refuses, runs no action and grants nothing`, () => {
      const { box, consent } = freshConsent();
      const events = [];
      consent[g.ask](answer => answer(false));
      consent[g.gate](() => events.push("action"), () => events.push("refused"));
      assert.deepEqual(events, ["refused"]);
      assert.equal(consent[g.read](), false);
      assert.equal(box.Core.state.settings[g.flag], undefined);
    });

    test(`${g.name}: a no without a refusal callback does not throw`, () => {
      const { consent } = freshConsent();
      consent[g.ask](answer => answer(false));
      assert.doesNotThrow(() => consent[g.gate](() => assert.fail("must not run")));
    });
  }
});
