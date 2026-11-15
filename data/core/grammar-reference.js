/* ============================================================
   Language-neutral layer of the grammar encyclopaedia: sections and ids.
   Titles and bodies live in data/i18n/<lang>/grammar-reference.js;
   "refsec:titles" merges by section index, "ref:<id>" by id.
   Sections follow the order of specs/german-course/curriculum.md (1, 2, 3, 4,
   6, 7, 8 so far; 5 is still to come); a section added later is inserted in
   that order in core and in all five overlays at once, which
   scripts/parity.mjs checks.
   ============================================================ */
window.GRAMMAR_REF = [
  {
    items: [
      { id: "g-genus", cefr: "A1" },
      { id: "g-plural", cefr: "A1" },
      { id: "g-artikel-nom", cefr: "A1" },
      { id: "g-artikel-akk", cefr: "A1" },
      { id: "g-artikel-dat", cefr: "A1" }
    ]
  },
  {
    items: [
      { id: "g-adjektivdeklination", cefr: "A1" },
      { id: "g-komparation", cefr: "A1" },
      { id: "g-possessiv", cefr: "A1" },
      { id: "g-adverbien", cefr: "A1" }
    ]
  },
  {
    items: [
      { id: "g-personalpron", cefr: "A1" },
      { id: "g-pron-akk", cefr: "A1" },
      { id: "g-indefinitpron", cefr: "A1" },
      { id: "g-es", cefr: "A1" }
    ]
  },
  {
    items: [
      { id: "g-praesens", cefr: "A1" },
      { id: "g-modalverben", cefr: "A1" },
      { id: "g-trennbare-verben", cefr: "A1" },
      { id: "g-imperativ", cefr: "A1" },
      { id: "g-perfekt", cefr: "A1" }
    ]
  },
  {
    items: [
      { id: "g-praep-akk", cefr: "A1" },
      { id: "g-praep-dativ", cefr: "A1" },
      { id: "g-wechselpraep", cefr: "A1" },
      { id: "g-temporalangaben", cefr: "A1" }
    ]
  },
  {
    items: [
      { id: "g-satz-v2", cefr: "A1" },
      { id: "g-negation", cefr: "A1" },
      { id: "g-konnektoren", cefr: "A1" }
    ]
  },
  {
    items: [
      { id: "g-aussprache", cefr: "A1" },
      { id: "g-register", cefr: "A1" }
    ]
  }
];
