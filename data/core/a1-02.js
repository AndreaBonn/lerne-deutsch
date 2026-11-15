/* ============================================================
   Language-neutral layer: German (de-DE), structure and answer keys.
   Learner-language texts live in data/i18n/<lang>/a1-02.js.
   a1-u04 is a German unit.
   ============================================================ */
LINGUAI.addUnits("A1", [
  {
    id: "a1-u04",
    icon: "👕",
    titleIt: "Kleidung kaufen",
    lessons: [
      {
        id: "a1-u04-l1",
        tags: ["g-adjektivdeklination"],
        cefr: "A1",
        titleIt: "Der Pullover ist rot",
        grammar: {
          examples: [
            { it: "Der Pullover ist rot." },
            { it: "Die Jacke ist blau." },
            { it: "Das Hemd ist weiß." },
            { it: "Die Schuhe sind schwarz." },
            { it: "Der Rock ist grün." },
            { it: "Das Kleid ist gelb." }
          ]
        },
        vocab: [
          { it: "der Pullover", plural: "die Pullover", ex: "Der Pullover ist rot." },
          { it: "die Jacke", plural: "die Jacken", ex: "Die Jacke ist blau." },
          { it: "das Hemd", plural: "die Hemden", ex: "Das Hemd ist weiß." },
          { it: "die Hose", plural: "die Hosen", ex: "Die Hose ist schwarz." },
          { it: "der Schuh", plural: "die Schuhe", ex: "Die Schuhe sind schwarz." },
          { it: "das T-Shirt", plural: "die T-Shirts", ex: "Das T-Shirt ist gelb." },
          { it: "der Rock", plural: "die Röcke", ex: "Der Rock ist grün." },
          { it: "das Kleid", plural: "die Kleider", ex: "Das Kleid ist rot." },
          { it: "rot", ex: "Der Pullover ist rot." },
          { it: "blau", ex: "Die Jacke ist blau." },
          { it: "schwarz", ex: "Die Hose ist schwarz." },
          { it: "weiß", ex: "Das Hemd ist weiß." },
          { it: "grün", ex: "Der Rock ist grün." },
          { it: "gelb", ex: "Das Kleid ist gelb." }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "mcq", a: 2 },
          { t: "mcq", a: 0 },
          { t: "fill", a: ["ist"] },
          { t: "fill", a: ["sind"] },
          {
            t: "order",
            tokens: ["Der", "Pullover", "ist", "blau", "und", "die", "Hose", "ist", "schwarz"],
            a: ["Der Pullover ist blau und die Hose ist schwarz"]
          },
          {
            t: "match",
            pairs: [{ it: "rot" }, { it: "blau" }, { it: "grün" }, { it: "gelb" }]
          },
          {
            t: "cloze",
            text: "Das Kleid {{1}} gelb und die Schuhe {{2}} schwarz.",
            gaps: [["ist"], ["sind"]]
          },
          { t: "listen", it: "Die Jacke ist rot und die Hose ist blau." },
          { t: "speak", it: "Der Pullover ist grün und das Hemd ist weiß." }
        ]
      },
      {
        id: "a1-u04-l2",
        tags: ["g-artikel-nom", "g-adjektivdeklination"],
        cefr: "A1",
        titleIt: "Dieser oder der da?",
        grammar: {
          examples: [
            { it: "Dieser Pullover ist schön." },
            { it: "Diese Jacke ist teuer." },
            { it: "Dieses Hemd ist billig." },
            { it: "Welcher Mantel ist schön?" },
            { it: "Welche Tasche ist blau?" },
            { it: "Welches Kleid ist rot?" }
          ]
        },
        vocab: [
          { it: "dieser / diese / dieses", ex: "Dieser Mantel ist schön." },
          { it: "welcher / welche / welches", ex: "Welcher Mantel ist billig?" },
          { it: "da: der da / die da / das da", ex: "Der da ist billig." },
          { it: "teuer", ex: "Die Jacke ist teuer." },
          { it: "billig", ex: "Das Hemd ist billig." },
          { it: "schön", ex: "Der Schal ist schön." },
          { it: "der Mantel", plural: "die Mäntel", ex: "Der Mantel ist schwarz." },
          { it: "die Mütze", plural: "die Mützen", ex: "Die Mütze ist blau." },
          { it: "der Schal", plural: "die Schals", ex: "Der Schal ist rot." },
          { it: "die Socke", plural: "die Socken", ex: "Die Socken sind weiß." },
          { it: "die Tasche", plural: "die Taschen", ex: "Die Tasche ist grün." },
          { it: "der Gürtel", plural: "die Gürtel", ex: "Der Gürtel ist schwarz." }
        ],
        dialogue: {
          titleIt: "Im Geschäft",
          lines: [
            { who: "🧑‍💼", it: "Guten Tag! Was suchen Sie?" },
            { who: "🙋", it: "Guten Tag. Ich suche einen Mantel." },
            { who: "🧑‍💼", it: "Dieser Mantel ist schön, aber teuer." },
            { who: "🙋", it: "Und welcher Mantel ist billig?" },
            { who: "🧑‍💼", it: "Der da ist billig." }
          ]
        },
        exercises: [
          { t: "mcq", a: 1 },
          { t: "mcq", a: 0 },
          { t: "fill", a: ["diese"] },
          { t: "fill", a: ["Welcher"] },
          {
            t: "gender",
            opts: ["der", "die", "das"],
            items: [
              { it: "Mantel", a: "der" },
              { it: "Jacke", a: "die" },
              { it: "Kleid", a: "das" },
              { it: "Schal", a: "der" },
              { it: "Tasche", a: "die" },
              { it: "Hemd", a: "das" }
            ]
          },
          {
            t: "order",
            tokens: ["Dieser", "Mantel", "ist", "schön,", "aber", "teuer"],
            a: ["Dieser Mantel ist schön, aber teuer"]
          },
          {
            t: "trans",
            dir: "toIt",
            a: [
              "Diese Jacke ist schön, aber die da ist teuer",
              "Diese Jacke ist schön, aber diese da ist teuer"
            ]
          },
          {
            t: "dialogue",
            lines: [
              { sp: "A", it: "Guten Tag! Was suchen Sie?" },
              {
                sp: "TY",
                choices: [
                  "Ich suche eine Jacke.",
                  "Ich suche ein Jacke.",
                  "Ich suche einer Jacke."
                ],
                a: 0
              },
              { sp: "A", it: "Diese Jacke ist rot. Diese Jacke ist blau." },
              {
                sp: "TY",
                choices: [
                  "Welche Jacke ist billig?",
                  "Welcher Jacke ist billig?",
                  "Welches Jacke ist billig?"
                ],
                a: 0
              }
            ]
          },
          { t: "listen", it: "Dieser Mantel ist schön, aber der da ist teuer." },
          { t: "speak", it: "Welche Jacke ist billig? Die da." }
        ]
      },
      {
        id: "a1-u04-l3",
        tags: ["g-pron-akk"],
        cefr: "A1",
        titleIt: "Was kostet ...? Ich nehme ihn",
        grammar: {
          examples: [
            { it: "Was kostet der Pullover?" },
            { it: "Der Pullover kostet vierzig Euro. Ich nehme ihn." },
            { it: "Die Jacke kostet sechzig Euro. Ich nehme sie." },
            { it: "Das Hemd kostet fünfundzwanzig Euro. Ich nehme es." },
            { it: "Die Schuhe sind teuer. Ich nehme sie nicht." },
            { it: "Wie viel kostet der Mantel? Ich kaufe ihn nicht." }
          ]
        },
        vocab: [
          { it: "kosten", ex: "Was kostet der Pullover?" },
          { it: "wie viel", ex: "Wie viel kostet die Hose?" },
          { it: "der Preis", plural: "die Preise", ex: "Der Preis ist gut." },
          { it: "der Euro", plural: "die Euro", ex: "Das Hemd kostet zwanzig Euro." },
          { it: "der Franken", plural: "die Franken", ex: "In der Schweiz kostet das Hemd fünfzig Franken." },
          { it: "kaufen", ex: "Ich kaufe eine Jacke." },
          { it: "die Kasse", plural: "die Kassen", ex: "Die Kasse ist da." },
          { it: "der Verkäufer", plural: "die Verkäufer", ex: "Der Verkäufer ist nett." },
          { it: "die Verkäuferin", plural: "die Verkäuferinnen", ex: "Die Verkäuferin ist nett." },
          { it: "nur", ex: "Der Rock kostet nur zwanzig Euro." },
          { it: "ihn / sie / es", ex: "Ich nehme ihn." },
          { it: "macht ... Euro", ex: "Das macht fünfundvierzig Euro." }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "mcq", a: 0 },
          { t: "mcq", a: 2 },
          { t: "fill", a: ["ihn"] },
          { t: "fill", a: ["kosten"] },
          {
            t: "match",
            pairs: [{ it: "kosten" }, { it: "der Preis" }, { it: "die Kasse" }, { it: "kaufen" }]
          },
          {
            t: "cloze",
            text: "Die Hose kostet dreißig Euro. Ich nehme {{1}}. Der Gürtel kostet fünfzehn Euro. Ich nehme {{2}}.",
            gaps: [["sie"], ["ihn"]]
          },
          {
            t: "trans",
            dir: "toIt",
            a: [
              "Die Jacke kostet sechzig Euro, ich nehme sie",
              "Die Jacke kostet 60 Euro, ich nehme sie"
            ]
          },
          { t: "listen", it: "Wie viel kostet der Mantel? Er kostet neunzig Euro." },
          { t: "speak", it: "Das Hemd kostet nur zwanzig Euro. Ich nehme es." }
        ]
      },
      {
        id: "a1-u04-l4",
        tags: ["g-adverbien"],
        cefr: "A1",
        titleIt: "sehr, zu, viel, wenig",
        grammar: {
          examples: [
            { it: "Der Pullover ist sehr schön." },
            { it: "Die Hose ist zu klein." },
            { it: "Das Kleid ist zu teuer." },
            { it: "Der Mantel kostet viel." },
            { it: "Das Hemd kostet wenig." },
            { it: "Die Jacke ist ein bisschen zu groß." }
          ]
        },
        vocab: [
          { it: "sehr", ex: "Der Pullover ist sehr schön." },
          { it: "zu", ex: "Die Hose ist zu klein." },
          { it: "viel", ex: "Der Mantel kostet viel." },
          { it: "wenig", ex: "Das Hemd kostet wenig." },
          { it: "ein bisschen", ex: "Die Jacke ist ein bisschen zu groß." },
          { it: "groß", ex: "Der Mantel ist groß." },
          { it: "klein", ex: "Die Mütze ist klein." },
          { it: "lang", ex: "Der Rock ist lang." },
          { it: "kurz", ex: "Das Kleid ist kurz." },
          { it: "eng", ex: "Die Hose ist zu eng." },
          { it: "weit", ex: "Der Pullover ist weit." },
          { it: "die Größe", plural: "die Größen", ex: "Welche Größe haben Sie?" }
        ],
        exercises: [
          { t: "mcq", a: 0 },
          { t: "mcq", a: 1 },
          { t: "multi", a: [0, 2, 3] },
          { t: "fill", a: ["zu"] },
          { t: "fill", a: ["sehr"] },
          {
            t: "match",
            pairs: [{ it: "groß" }, { it: "klein" }, { it: "lang" }, { it: "kurz" }]
          },
          {
            t: "cloze",
            text: "Der Pullover ist {{1}} schön, aber er kostet {{2}}.",
            gaps: [["sehr"], ["viel"]]
          },
          {
            t: "trans",
            dir: "toIt",
            a: ["Der Mantel ist sehr schön, aber er kostet zu viel"]
          },
          { t: "listen", it: "Die Hose ist zu klein, aber die Jacke ist sehr schön." },
          { t: "speak", it: "Das Kleid ist sehr schön, aber zu teuer." }
        ]
      }
    ],
    test: {
      id: "a1-u04-test",
      tags: ["g-adjektivdeklination", "g-pron-akk", "g-adverbien"],
      cefr: "A1",
      titleIt: "Test: Kleidung kaufen",
      exercises: [
        { t: "fill", a: ["sind"] },
        { t: "fill", a: ["ihn"] },
        { t: "fill", a: ["zu"] },
        {
          t: "gender",
          opts: ["der", "die", "das"],
          items: [
            { it: "Pullover", a: "der" },
            { it: "Hose", a: "die" },
            { it: "Kleid", a: "das" },
            { it: "Rock", a: "der" }
          ]
        },
        { t: "mcq", a: 0 },
        { t: "mcq", a: 2 },
        {
          t: "order",
          tokens: ["Das", "Hemd", "ist", "sehr", "schön,", "aber", "zu", "teuer"],
          a: ["Das Hemd ist sehr schön, aber zu teuer"]
        },
        {
          t: "trans",
          dir: "toIt",
          a: [
            "Die Jacke ist schön, aber zu teuer. Ich nehme sie nicht",
            "Die Jacke ist schön, aber sie ist zu teuer. Ich nehme sie nicht"
          ]
        },
        { t: "listen", it: "Welcher Pullover ist rot und welcher ist blau?" },
        { t: "speak", it: "Der Mantel ist sehr schön. Ich nehme ihn." }
      ]
    }
  }
]);
