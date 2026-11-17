/* ============================================================
   Language-neutral layer of the grammar encyclopaedia: sections and ids.
   Titles and bodies live in data/i18n/<lang>/grammar-reference.js;
   "refsec:titles" merges by section index, "ref:<id>" by id.
   Sections follow the order of specs/german-course/curriculum.md (all eight); a section added later is inserted in that
   order in core and in all five overlays at once, which
   scripts/parity.mjs checks.
   ============================================================ */
window.GRAMMAR_REF = [
  {
    items: [
      { id: "g-genus", cefr: "A1" },
      { id: "g-plural", cefr: "A1" },
      { id: "g-artikel-nom", cefr: "A1" },
      { id: "g-artikel-akk", cefr: "A1" },
      { id: "g-artikel-dat", cefr: "A1" },
      { id: "g-genitiv", cefr: "B1" },
      { id: "g-n-deklination", cefr: "B2" },
      { id: "g-wortbildung", cefr: "A2" }
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
      { id: "g-pron-dat", cefr: "A2" },
      { id: "g-indefinitpron", cefr: "A1" },
      { id: "g-es", cefr: "A1" },
      { id: "g-man", cefr: "A2" }
    ]
  },
  {
    items: [
      { id: "g-praesens", cefr: "A1" },
      { id: "g-modalverben", cefr: "A1" },
      { id: "g-trennbare-verben", cefr: "A1" },
      { id: "g-imperativ", cefr: "A1" },
      { id: "g-perfekt", cefr: "A1" },
      { id: "g-praeteritum", cefr: "A2" },
      { id: "g-plusquamperfekt", cefr: "B1" },
      { id: "g-reflexivverben", cefr: "A2" },
      { id: "g-verben-dativ", cefr: "A2" },
      { id: "g-futur", cefr: "A2" },
      { id: "g-praep-verben", cefr: "B1" }
    ]
  },
  {
    items: [
      { id: "g-konjunktiv2", cefr: "A2" },
      { id: "g-konjunktiv1", cefr: "B2" },
      { id: "g-passiv", cefr: "B1" }
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
      { id: "g-konnektoren", cefr: "A1" },
      { id: "g-wortstellung", cefr: "A2" },
      { id: "g-nebensatz-weil", cefr: "A2" },
      { id: "g-nebensatz-temporal", cefr: "A2" },
      { id: "g-nebensatz-dass", cefr: "A2" },
      { id: "g-infinitiv-zu", cefr: "A2" },
      { id: "g-relativsatz", cefr: "B1" },
      { id: "g-konditionalsatz", cefr: "B1" },
      { id: "g-konzessiv", cefr: "B1" },
      { id: "g-nebensatz-final", cefr: "B1" }
    ]
  },
  {
    items: [
      { id: "g-aussprache", cefr: "A1" },
      { id: "g-register", cefr: "A1" },
      { id: "g-modalpartikeln", cefr: "A2" }
    ]
  }
];
