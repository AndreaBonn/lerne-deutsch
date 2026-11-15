import { test } from "node:test";
import assert from "node:assert/strict";
import { loadEngine, CORE } from "./_harness.mjs";

test("training samples use German while explanation copy keeps the interface language", () => {
  const box = loadEngine({ files: CORE });
  box.Core.load();
  let html = "";
  const root = {
    querySelectorAll() { return []; },
    querySelector() { return { addEventListener() {} }; }
  };
  box.sandbox.Views = { shell: {
    set(value) { html = value; },
    head() { return "<h1>Allenamento</h1>"; },
    root() { return root; }
  } };
  box.sandbox.Drills = { TOPICS: [{ id: "numeri", sample: "eins und zwei", from: "a1-u01-l1" }] };
  box.run("assets/js/views-train.js");
  box.sandbox.Views.allenamento({});
  assert.match(html, /<span lang="de">eins und zwei<\/span>/);
  assert.match(html, /<h1>Allenamento<\/h1>/);
});
