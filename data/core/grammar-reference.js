/* ============================================================
   Language-neutral layer of the grammar encyclopaedia: sections and ids.
   Titles and bodies live in data/i18n/<lang>/grammar-reference.js;
   "refsec:titles" merges by section index, "ref:<id>" by id.
   Sections follow the order of specs/german-course/curriculum.md (1, 3, 4, 7, 8
   so far); a section added later is inserted in that order in core and in all
   five overlays at once, which scripts/parity.mjs checks.
   ============================================================ */
window.GRAMMAR_REF = [
  {
    items: [
      { id: "g-genus", cefr: "A1" },
      { id: "g-plural", cefr: "A1" },
      { id: "g-artikel-nom", cefr: "A1" },
      { id: "g-artikel-akk", cefr: "A1" }
    ]
  },
  {
    items: [
      { id: "g-personalpron", cefr: "A1" }
    ]
  },
  {
    items: [
      { id: "g-praesens", cefr: "A1" }
    ]
  },
  {
    items: [
      { id: "g-satz-v2", cefr: "A1" },
      { id: "g-negation", cefr: "A1" }
    ]
  },
  {
    items: [
      { id: "g-aussprache", cefr: "A1" },
      { id: "g-register", cefr: "A1" }
    ]
  }
];
