/* ============================================================
   Language-neutral layer: German (de-DE), structure and answer keys.
   Learner-language texts live in data/i18n/<lang>/a1-01.js.
   a1-u01, a1-u02 and a1-u03 are German units.
   ============================================================ */
LINGUAI.addUnits("A1", [
  {
    id: "a1-u01",
    icon: "☕",
    titleIt: "Im Café",
    lessons: [
      {
        id: "a1-u01-l1",
        tags: ["g-praesens", "g-satz-v2", "g-aussprache"],
        cefr: "A1",
        titleIt: "Guten Tag, einen Kaffee",
        grammar: {
          examples: [
            { it: "Guten Tag, einen Kaffee, bitte." },
            { it: "Ich heiße Anna." },
            { it: "Wie heißt du?" },
            { it: "Wie heißen Sie?" },
            { it: "Heute trinke ich Tee." },
            { it: "Das Café ist klein." }
          ]
        },
        vocab: [
          { it: "Guten Morgen" },
          { it: "Guten Tag" },
          { it: "Guten Abend" },
          { it: "Gute Nacht" },
          { it: "Hallo" },
          { it: "Tschüss" },
          { it: "Auf Wiedersehen" },
          { it: "bitte" },
          { it: "danke" },
          { it: "Entschuldigung" },
          { it: "der Kaffee", plural: "die Kaffees", ex: "Einen Kaffee, bitte." },
          { it: "der Tee", plural: "die Tees", ex: "Einen Tee, bitte." },
          { it: "das Wasser", plural: "-", ex: "Das Wasser ist kalt." },
          { it: "das Café", plural: "die Cafés", ex: "Das Café ist klein." }
        ],
        dialogue: {
          titleIt: "An der Theke",
          lines: [
            { who: "🧑‍🍳", it: "Guten Tag! Was möchten Sie?" },
            { who: "🙋", it: "Guten Tag. Einen Kaffee, bitte." },
            { who: "🧑‍🍳", it: "Gern. Sonst noch etwas?" },
            { who: "🙋", it: "Nein, danke. Das ist alles." },
            { who: "🧑‍🍳", it: "Bitte schön. Einen schönen Tag noch!" }
          ]
        },
        exercises: [
          { t: "mcq", a: 1 },
          { t: "mcq", a: 2 },
          { t: "conj", verb: "heißen", tense: "praes", persons: [0, 1, 2, 3, 4, 5] },
          { t: "fill", a: ["heißt"] },
          {
            t: "trans",
            dir: "toIt",
            a: [
              "Guten Tag, einen Kaffee, bitte",
              "Guten Morgen, einen Kaffee, bitte"
            ]
          },
          {
            t: "order",
            tokens: ["Guten", "Tag,", "ich", "heiße", "Anna"],
            a: ["Guten Tag, ich heiße Anna"]
          },
          {
            t: "match",
            pairs: [{ it: "danke" }, { it: "bitte" }, { it: "Entschuldigung" }, { it: "Auf Wiedersehen" }]
          },
          { t: "listen", it: "Guten Abend, einen Tee, bitte." },
          { t: "speak", it: "Guten Tag, einen Kaffee, bitte." }
        ]
      },
      {
        id: "a1-u01-l2",
        tags: ["g-genus", "g-plural"],
        cefr: "A1",
        titleIt: "der, die, das",
        grammar: {
          examples: [
            { it: "Der Tisch ist klein." },
            { it: "Die Tassen sind groß." },
            { it: "Das Buch ist neu." },
            { it: "Das Kind trinkt Milch." },
            { it: "Drei Tassen und zwei Kuchen, bitte." },
            { it: "Die Rechnung, bitte." }
          ]
        },
        vocab: [
          { it: "der Tisch", plural: "die Tische" },
          { it: "der Stuhl", plural: "die Stühle" },
          { it: "das Buch", plural: "die Bücher" },
          { it: "das Haus", plural: "die Häuser" },
          { it: "die Tasse", plural: "die Tassen", ex: "Eine Tasse Tee, bitte." },
          { it: "die Frau", plural: "die Frauen" },
          { it: "der Mann", plural: "die Männer" },
          { it: "das Kind", plural: "die Kinder" },
          { it: "die Zeitung", plural: "die Zeitungen" },
          { it: "der Kuchen", plural: "die Kuchen", ex: "Der Kuchen ist frisch." },
          { it: "die Milch", plural: "-", ex: "Die Milch ist kalt." },
          { it: "der Zucker", plural: "-" },
          { it: "das Brötchen", plural: "die Brötchen" },
          { it: "die Rechnung", plural: "die Rechnungen", ex: "Die Rechnung, bitte." }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "fill", a: ["Tassen"] },
          { t: "fill", a: ["Bücher"] },
          {
            t: "gender",
            opts: ["der", "die", "das"],
            items: [
              { it: "Tisch", a: "der" },
              { it: "Tasse", a: "die" },
              { it: "Buch", a: "das" },
              { it: "Haus", a: "das" },
              { it: "Zeitung", a: "die" },
              { it: "Mann", a: "der" }
            ]
          },
          { t: "mcq", a: 1 },
          { t: "multi", a: [0, 2, 4] },
          { t: "order", tokens: ["Das", "Kind", "trinkt", "Milch"], a: ["Das Kind trinkt Milch"] },
          { t: "listen", it: "Zwei Tassen und drei Brötchen, bitte." },
          { t: "speak", it: "Die Rechnung, bitte." }
        ]
      },
      {
        id: "a1-u01-l3",
        tags: ["g-artikel-nom"],
        cefr: "A1",
        titleIt: "der oder ein?",
        grammar: {
          examples: [
            { it: "Der Kaffee ist heiß." },
            { it: "Ein Kaffee kostet drei Euro." },
            { it: "Das ist eine Tasse." },
            { it: "Das ist kein Tee." },
            { it: "Die Torte ist frisch." },
            { it: "Hier ist die Speisekarte." }
          ]
        },
        vocab: [
          { it: "der Saft", plural: "die Säfte" },
          { it: "die Cola", plural: "die Colas" },
          { it: "die Schokolade", plural: "die Schokoladen" },
          { it: "das Bier", plural: "die Biere" },
          { it: "der Wein", plural: "die Weine" },
          { it: "das Eis", plural: "-", ex: "Das ist ein Eis." },
          { it: "der Apfelkuchen", plural: "die Apfelkuchen" },
          { it: "die Torte", plural: "die Torten", ex: "Die Torte ist frisch." },
          { it: "das Brot", plural: "die Brote" },
          { it: "die Brezel", plural: "die Brezeln" },
          { it: "die Speisekarte", plural: "die Speisekarten", ex: "Hier ist die Speisekarte." },
          { it: "der Kellner", plural: "die Kellner" }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "mcq", a: 1 },
          {
            t: "gender",
            opts: ["ein", "eine"],
            items: [
              { it: "Saft", a: "ein" },
              { it: "Cola", a: "eine" },
              { it: "Torte", a: "eine" },
              { it: "Brot", a: "ein" },
              { it: "Speisekarte", a: "eine" },
              { it: "Kellner", a: "ein" }
            ]
          },
          { t: "fill", a: ["ein"] },
          { t: "fill", a: ["Die"] },
          { t: "mcq", a: 1 },
          {
            t: "match",
            pairs: [{ it: "ein Kaffee" }, { it: "eine Torte" }, { it: "ein Brot" }, { it: "keine Cola" }]
          },
          {
            t: "order",
            tokens: ["Hier", "ist", "die", "Speisekarte", "und", "das", "Wasser"],
            a: ["Hier ist die Speisekarte und das Wasser"]
          },
          { t: "speak", it: "Das ist eine Torte." }
        ]
      },
      {
        id: "a1-u01-l4",
        tags: ["g-register", "g-satz-v2"],
        cefr: "A1",
        titleIt: "Wie geht's? du oder Sie",
        grammar: {
          examples: [
            { it: "Hallo Julia, wie geht's?" },
            { it: "Guten Tag, Frau Weber, wie geht es Ihnen?" },
            { it: "Mir geht es gut, danke. Und dir?" },
            { it: "Es geht." },
            { it: "Sind Sie Frau Weber?" },
            { it: "Wollen wir uns duzen?" }
          ]
        },
        vocab: [
          { it: "Wie geht's?" },
          { it: "Wie geht es Ihnen?" },
          { it: "Mir geht es gut." },
          { it: "Es geht." },
          { it: "nicht schlecht" },
          { it: "sehr gut" },
          { it: "schlecht" },
          { it: "und dir?" },
          { it: "und Ihnen?" },
          { it: "Herr" },
          { it: "Frau" },
          { it: "bis später" }
        ],
        dialogue: {
          titleIt: "Zwei Begegnungen, zwei Anreden",
          lines: [
            { who: "🙋", it: "Hallo Julia! Wie geht's?" },
            { who: "👩", it: "Hallo! Gut, und dir?" },
            { who: "🙋", it: "Nicht schlecht, danke. Bis später!" },
            { who: "🧓", it: "Guten Tag, Frau Weber. Wie geht es Ihnen?" },
            { who: "👩", it: "Gut, danke. Und Ihnen?" }
          ]
        },
        exercises: [
          { t: "mcq", a: 1 },
          { t: "mcq", a: 1 },
          { t: "conj", verb: "sein", tense: "praes", persons: [0, 1, 2, 3, 4, 5] },
          { t: "fill", a: ["Sind"] },
          {
            t: "trans",
            dir: "toIt",
            a: [
              "Mir geht es gut, danke. Und dir?",
              "Mir geht's gut, danke. Und dir?",
              "Es geht mir gut, danke. Und dir?",
              "Gut, danke. Und dir?"
            ]
          },
          {
            t: "dialogue",
            lines: [
              { sp: "A", it: "Hallo! Wie geht's dir heute?" },
              {
                sp: "TY",
                choices: ["Mir geht es gut, und dir?", "Mir geht es gut, und Ihnen?", "Ich bin gut, und dir?"],
                a: 0
              },
              { sp: "A", it: "Sehr gut! Einen Kaffee?" },
              { sp: "TY", choices: ["Ja, bitte!", "Ja, Entschuldigung!", "Nein, Tschüss!"], a: 0 }
            ]
          },
          {
            t: "match",
            pairs: [{ it: "Es geht." }, { it: "sehr gut" }, { it: "schlecht" }, { it: "nicht schlecht" }]
          },
          { t: "listen", it: "Guten Tag, Frau Weber, wie geht es Ihnen?" },
          { t: "speak", it: "Gut, danke. Und Ihnen?" }
        ]
      }
    ],
    test: {
      id: "a1-u01-test",
      tags: ["g-praesens", "g-genus", "g-artikel-nom"],
      cefr: "A1",
      titleIt: "Test: Im Café",
      exercises: [
        { t: "mcq", a: 1 },
        { t: "fill", a: ["sind"] },
        { t: "fill", a: ["heißen"] },
        {
          t: "gender",
          opts: ["der", "die", "das"],
          items: [
            { it: "Tisch", a: "der" },
            { it: "Tasse", a: "die" },
            { it: "Kind", a: "das" },
            { it: "Torte", a: "die" }
          ]
        },
        { t: "mcq", a: 1 },
        { t: "multi", a: [1, 2, 3] },
        {
          t: "trans",
          dir: "toIt",
          a: ["Zwei Tee, bitte", "Zwei Tees, bitte", "Zwei Tassen Tee, bitte"]
        },
        {
          t: "order",
          tokens: ["Wie", "geht", "es", "Ihnen,", "Frau", "Weber"],
          a: ["Wie geht es Ihnen, Frau Weber"]
        },
        { t: "listen", it: "Zwei Kaffee und ein Brötchen, bitte." },
        { t: "speak", it: "Guten Tag, wie geht es Ihnen?" }
      ]
    }
  },
  {
    id: "a1-u02",
    icon: "🪪",
    titleIt: "Wer bist du?",
    lessons: [
      {
        id: "a1-u02-l1",
        tags: ["g-personalpron", "g-praesens"],
        cefr: "A1",
        titleIt: "Ich heiße ...",
        grammar: {
          examples: [
            { it: "Ich heiße Paolo." },
            { it: "Woher kommst du?" },
            { it: "Er heißt Tom, sie heißt Lena." },
            { it: "Wir heißen Weber." },
            { it: "Wie heißt ihr?" },
            { it: "Wie heißen Sie?" }
          ]
        },
        vocab: [
          { it: "der Name", plural: "die Namen", ex: "Mein Name ist Anna." },
          { it: "der Vorname", plural: "die Vornamen" },
          { it: "der Nachname", plural: "die Nachnamen", ex: "Mein Nachname ist Weber." },
          { it: "Wie heißt du?" },
          { it: "Ich heiße ..." },
          { it: "Mein Name ist ..." },
          { it: "Freut mich." },
          { it: "Woher kommst du?" },
          { it: "Ich komme aus ..." },
          { it: "Wie alt bist du?" },
          { it: "Ich bin ... Jahre alt." },
          { it: "Und du?" },
          { it: "Wie bitte?" }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "mcq", a: 1 },
          { t: "fill", a: ["Sie"] },
          { t: "fill", a: ["komme"] },
          {
            t: "cloze",
            text: "Hallo! {{1}} heiße Paolo. Und wie heißt {{2}}?",
            gaps: [["Ich"], ["du"]]
          },
          {
            t: "dialogue",
            lines: [
              { sp: "A", it: "Hallo! Ich bin Lena. Und wie heißt du?" },
              {
                sp: "TY",
                choices: ["Ich heiße Paolo.", "Ich Paolo heiße.", "Heiße Paolo."],
                a: 0
              },
              { sp: "A", it: "Woher kommst du?" },
              {
                sp: "TY",
                choices: ["Ich komme aus Italien.", "Ich komme in Italien.", "Ich kommst aus Italien."],
                a: 0
              }
            ]
          },
          {
            t: "order",
            tokens: ["Mein", "Name", "ist", "Anna", "Weber"],
            a: ["Mein Name ist Anna Weber"]
          },
          { t: "listen", it: "Hallo, ich heiße Lena und komme aus Berlin." },
          { t: "speak", it: "Ich heiße Paolo. Und wie heißt du?" }
        ]
      },
      {
        id: "a1-u02-l2",
        tags: ["g-praesens"],
        cefr: "A1",
        titleIt: "sein, haben und die Zahlen",
        grammar: {
          examples: [
            { it: "Ich bin zwanzig Jahre alt." },
            { it: "Du hast eine Schwester." },
            { it: "Er hat Hunger." },
            { it: "Wir sind Freunde." },
            { it: "Habt ihr einen Bruder?" },
            { it: "Die Nummer ist null drei null, zwölf, vierunddreißig, sechsundfünfzig." }
          ]
        },
        vocab: [
          { it: "die Telefonnummer", plural: "die Telefonnummern", ex: "Wie ist deine Telefonnummer?" },
          { it: "das Jahr", plural: "die Jahre", ex: "Ich bin zwanzig Jahre alt." },
          { it: "alt", ex: "Wie alt bist du?" },
          { it: "zwanzig" },
          { it: "dreißig" },
          { it: "vierzig" },
          { it: "fünfzig" },
          { it: "sechzig" },
          { it: "siebzig" },
          { it: "achtzig" },
          { it: "neunzig" },
          { it: "hundert" },
          { it: "einundzwanzig" }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "mcq", a: 1 },
          { t: "conj", verb: "haben", tense: "praes", persons: [0, 1, 2, 3, 4, 5] },
          { t: "fill", a: ["hast"] },
          { t: "fill", a: ["seid"] },
          {
            t: "cloze",
            text: "Ich {{1}} Paolo und {{2}} fünfundzwanzig Jahre alt. Ich {{3}} einen Bruder.",
            gaps: [["bin"], ["bin"], ["habe"]]
          },
          {
            t: "match",
            pairs: [{ it: "dreißig" }, { it: "sechzig" }, { it: "fünfundvierzig" }, { it: "hundert" }]
          },
          { t: "trans", dir: "toIt", a: ["Hast du eine Schwester"] },
          { t: "listen", it: "Meine Telefonnummer ist null eins fünf eins, zwei drei vier, fünf sechs." },
          { t: "speak", it: "Ich bin fünfundzwanzig Jahre alt und habe eine Schwester." }
        ]
      },
      {
        id: "a1-u02-l3",
        tags: ["g-praesens", "g-genus"],
        cefr: "A1",
        titleIt: "Was sind Sie von Beruf?",
        grammar: {
          examples: [
            { it: "Was sind Sie von Beruf?" },
            { it: "Ich bin Lehrerin." },
            { it: "Er ist Arzt." },
            { it: "Sie ist Köchin." },
            { it: "Ich bin eine gute Lehrerin." },
            { it: "Wir sind Studenten." }
          ]
        },
        vocab: [
          { it: "der Beruf", plural: "die Berufe", ex: "Was sind Sie von Beruf?" },
          { it: "der Lehrer", plural: "die Lehrer", ex: "Ich bin Lehrer." },
          { it: "die Lehrerin", plural: "die Lehrerinnen", ex: "Sie ist Lehrerin." },
          { it: "der Arzt", plural: "die Ärzte", ex: "Er ist Arzt." },
          { it: "die Ärztin", plural: "die Ärztinnen", ex: "Sie ist Ärztin." },
          { it: "der Student", plural: "die Studenten" },
          { it: "die Studentin", plural: "die Studentinnen" },
          { it: "der Koch", plural: "die Köche" },
          { it: "die Köchin", plural: "die Köchinnen", ex: "Ich bin Köchin." },
          { it: "der Ingenieur", plural: "die Ingenieure" },
          { it: "der Verkäufer", plural: "die Verkäufer" },
          { it: "die Verkäuferin", plural: "die Verkäuferinnen" }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "mcq", a: 1 },
          { t: "conj", verb: "studieren", tense: "praes", persons: [0, 1, 2, 3, 4, 5] },
          { t: "fill", a: ["Köchin"] },
          {
            t: "gender",
            opts: ["der", "die", "das"],
            items: [
              { it: "Lehrer", a: "der" },
              { it: "Lehrerin", a: "die" },
              { it: "Beruf", a: "der" },
              { it: "Studentin", a: "die" },
              { it: "Ärztin", a: "die" },
              { it: "Koch", a: "der" }
            ]
          },
          {
            t: "match",
            pairs: [{ it: "der Lehrer" }, { it: "die Ärztin" }, { it: "der Koch" }, { it: "die Verkäuferin" }]
          },
          {
            t: "order",
            tokens: ["Was", "sind", "Sie", "von", "Beruf"],
            a: ["Was sind Sie von Beruf"]
          },
          { t: "trans", dir: "toIt", a: ["Ich bin Köchin"] },
          { t: "listen", it: "Was sind Sie von Beruf? Ich bin Lehrerin." },
          { t: "speak", it: "Was sind Sie von Beruf? Ich bin Ingenieurin." }
        ]
      },
      {
        id: "a1-u02-l4",
        tags: ["g-praesens", "g-personalpron"],
        cefr: "A1",
        titleIt: "wohnen, arbeiten, kommen",
        grammar: {
          examples: [
            { it: "Wo wohnst du?" },
            { it: "Ich wohne in Berlin." },
            { it: "Du arbeitest in Wien." },
            { it: "Er kommt aus Spanien." },
            { it: "Ihr arbeitet in Hamburg." },
            { it: "Woher kommen Sie?" }
          ]
        },
        vocab: [
          { it: "Deutschland" },
          { it: "Italien" },
          { it: "Österreich" },
          { it: "Frankreich" },
          { it: "Spanien" },
          { it: "Polen" },
          { it: "Deutsch" },
          { it: "Italienisch" },
          { it: "Englisch" },
          { it: "Spanisch" },
          { it: "Französisch" },
          { it: "Polnisch" }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "multi", a: [0, 1, 4] },
          { t: "conj", verb: "arbeiten", tense: "praes", persons: [0, 1, 2, 3, 4, 5] },
          { t: "conj", verb: "kommen", tense: "praes", persons: [1, 2, 4] },
          { t: "fill", a: ["arbeitest"] },
          { t: "fill", a: ["wohnt"] },
          {
            t: "order",
            tokens: ["Ich", "wohne", "in", "Italien", "und", "arbeite", "hier"],
            a: ["Ich wohne in Italien und arbeite hier"]
          },
          { t: "trans", dir: "toIt", a: ["Woher kommst du", "Woher bist du"] },
          { t: "listen", it: "Ich wohne in Wien und komme aus Italien." },
          { t: "speak", it: "Ich komme aus Italien und wohne in Berlin." }
        ]
      }
    ],
    test: {
      id: "a1-u02-test",
      tags: ["g-praesens", "g-personalpron"],
      cefr: "A1",
      titleIt: "Test: Wer bist du?",
      exercises: [
        { t: "mcq", a: 1 },
        { t: "mcq", a: 1 },
        { t: "mcq", a: 0 },
        { t: "fill", a: ["kommen"] },
        { t: "fill", a: ["habt"] },
        { t: "conj", verb: "arbeiten", tense: "praes", persons: [1, 2, 4] },
        {
          t: "cloze",
          text: "Anna {{1}} Lehrerin. Sie {{2}} in Wien und {{3}} aus Polen.",
          gaps: [["ist"], ["wohnt"], ["kommt"]]
        },
        { t: "trans", dir: "toIt", a: ["Was sind Sie von Beruf", "Was machen Sie beruflich"] },
        { t: "listen", it: "Ich heiße Lena, bin dreißig Jahre alt und komme aus Wien." },
        { t: "speak", it: "Ich heiße Paolo, ich bin Ingenieur und wohne in Berlin." }
      ]
    }
  },
  {
    id: "a1-u03",
    icon: "🥨",
    titleIt: "Feierabend",
    lessons: [
      {
        id: "a1-u03-l1",
        tags: ["g-praesens", "g-satz-v2"],
        cefr: "A1",
        titleIt: "Ich trinke gern ...",
        grammar: {
          examples: [
            { it: "Ich trinke gern Tee." },
            { it: "Ich esse gern Pizza." },
            { it: "Ich mag Käse." },
            { it: "Magst du Fisch?" },
            { it: "Heute trinke ich gern Saft." },
            { it: "Wir mögen Suppe." }
          ]
        },
        vocab: [
          { it: "gern", ex: "Ich trinke gern Tee." },
          { it: "trinken", ex: "Ich trinke gern Saft." },
          { it: "essen", ex: "Ich esse gern Brot." },
          { it: "mögen", ex: "Ich mag Käse." },
          { it: "der Apfel", plural: "die Äpfel", ex: "Ich esse gern Äpfel." },
          { it: "die Pizza", plural: "die Pizzen", ex: "Ich mag Pizza." },
          { it: "der Salat", plural: "die Salate", ex: "Ich esse gern Salat." },
          { it: "die Suppe", plural: "die Suppen", ex: "Wir mögen Suppe." },
          { it: "die Nudeln", plural: "die Nudeln", ex: "Ich mag Nudeln." },
          { it: "der Fisch", plural: "die Fische", ex: "Magst du Fisch?" },
          { it: "das Fleisch", plural: "-", ex: "Ich esse gern Fleisch." },
          { it: "das Obst", plural: "-", ex: "Ich esse gern Obst." },
          { it: "die Limonade", plural: "die Limonaden", ex: "Ich trinke gern Limonade." },
          { it: "der Käse", plural: "-", ex: "Ich mag Käse." }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "fill", a: ["mag"] },
          { t: "fill", a: ["esse"] },
          { t: "mcq", a: 0 },
          { t: "mcq", a: 1 },
          {
            t: "trans",
            dir: "toIt",
            a: [
              "Heute trinke ich gern Tee",
              "Ich trinke heute gern Tee",
              "Heute trinke ich gern einen Tee",
              "Ich trinke heute gern einen Tee"
            ]
          },
          {
            t: "match",
            pairs: [{ it: "trinken" }, { it: "essen" }, { it: "mögen" }, { it: "gern" }]
          },
          {
            t: "cloze",
            text: "Ich {{1}} gern Tee. {{2}} du auch gern Tee?",
            gaps: [["trinke"], ["Trinkst"]]
          },
          { t: "listen", it: "Ich esse gern Salat und trinke gern Wasser." },
          { t: "speak", it: "Ich trinke gern Tee und esse gern Brot." }
        ]
      },
      {
        id: "a1-u03-l2",
        tags: ["g-praesens"],
        cefr: "A1",
        titleIt: "nehmen, essen, sprechen",
        grammar: {
          examples: [
            { it: "Ich esse Reis." },
            { it: "Du isst Fisch." },
            { it: "Er nimmt eine Suppe." },
            { it: "Wir nehmen Kaffee." },
            { it: "Sprichst du Deutsch?" },
            { it: "Ihr esst Kartoffeln." }
          ]
        },
        vocab: [
          { it: "nehmen", ex: "Ich nehme eine Suppe." },
          { it: "essen", ex: "Er isst Fisch." },
          { it: "sprechen", ex: "Sie spricht Deutsch." },
          { it: "die Wurst", plural: "die Würste", ex: "Er isst eine Wurst." },
          { it: "das Ei", plural: "die Eier", ex: "Ich esse ein Ei." },
          { it: "der Reis", plural: "-", ex: "Du isst Reis." },
          { it: "die Kartoffel", plural: "die Kartoffeln", ex: "Ihr esst Kartoffeln." },
          { it: "das Gemüse", plural: "-", ex: "Ich esse gern Gemüse." },
          { it: "das Abendessen", plural: "die Abendessen", ex: "Das Abendessen ist fertig." },
          { it: "die Sprache", plural: "die Sprachen", ex: "Ich spreche zwei Sprachen." },
          { it: "langsam", ex: "Sprechen Sie bitte langsam." },
          { it: "auch", ex: "Ich esse auch Reis." }
        ],
        exercises: [
          { t: "conj", verb: "nehmen", tense: "praes", persons: [0, 1, 2, 3, 4, 5] },
          { t: "mcq", a: 1 },
          { t: "fill", a: ["nimmt"] },
          { t: "fill", a: ["sprichst"] },
          { t: "mcq", a: 2 },
          { t: "multi", a: [0, 2, 4] },
          {
            t: "order",
            tokens: ["Heute", "isst", "Anna", "Reis", "und", "Gemüse"],
            a: ["Heute isst Anna Reis und Gemüse"]
          },
          {
            t: "trans",
            dir: "toIt",
            a: [
              "Du sprichst Italienisch und ich spreche Deutsch",
              "Du sprichst Italienisch, und ich spreche Deutsch"
            ]
          },
          { t: "listen", it: "Du isst Reis, und ich nehme Kartoffeln." },
          { t: "speak", it: "Ich esse Reis, und du isst Kartoffeln." }
        ]
      },
      {
        id: "a1-u03-l3",
        tags: ["g-artikel-akk"],
        cefr: "A1",
        titleIt: "Einen Saft, bitte",
        grammar: {
          examples: [
            { it: "Ich nehme einen Saft." },
            { it: "Ich möchte eine Cola." },
            { it: "Möchten Sie ein Glas Wasser?" },
            { it: "Ja, gern." },
            { it: "Nein, danke." },
            { it: "Das ist ein Saft." }
          ]
        },
        vocab: [
          { it: "Ich möchte ...", ex: "Ich möchte einen Saft." },
          { it: "Möchten Sie ...?", ex: "Möchten Sie einen Kaffee?" },
          { it: "Möchtest du ...?", ex: "Möchtest du ein Wasser?" },
          { it: "Ja, gern." },
          { it: "Ja, bitte." },
          { it: "Nein, danke." },
          { it: "Prost!" },
          { it: "der Orangensaft", plural: "die Orangensäfte", ex: "Einen Orangensaft, bitte." },
          { it: "der Apfelsaft", plural: "die Apfelsäfte", ex: "Ich nehme einen Apfelsaft." },
          { it: "das Mineralwasser", plural: "die Mineralwässer", ex: "Ein Mineralwasser, bitte." },
          { it: "das Glas", plural: "die Gläser", ex: "Ein Glas Wasser, bitte." },
          { it: "die Flasche", plural: "die Flaschen", ex: "Eine Flasche Wasser, bitte." }
        ],
        exercises: [
          { t: "conj", verb: "trinken", tense: "praes", persons: [0, 1, 2, 3, 4, 5] },
          { t: "conj", verb: "bestellen", tense: "praes", persons: [0, 2, 4] },
          { t: "fill", a: ["einen"] },
          { t: "fill", a: ["eine"] },
          { t: "mcq", a: 1 },
          { t: "multi", a: [0, 2, 3] },
          {
            t: "order",
            tokens: ["Ich", "möchte", "einen", "Apfelsaft", "und", "ein", "Wasser"],
            a: ["Ich möchte einen Apfelsaft und ein Wasser"]
          },
          {
            t: "trans",
            dir: "toIt",
            a: [
              "Einen Orangensaft und ein Wasser, bitte",
              "Einen Orangensaft und ein Mineralwasser, bitte"
            ]
          },
          { t: "listen", it: "Ich möchte einen Orangensaft und eine Flasche Wasser, bitte." },
          { t: "speak", it: "Einen Apfelsaft und ein Glas Wasser, bitte." }
        ]
      },
      {
        id: "a1-u03-l4",
        tags: ["g-negation", "g-artikel-akk"],
        cefr: "A1",
        titleIt: "Kein Bier, nicht heute",
        grammar: {
          examples: [
            { it: "Ich trinke kein Bier." },
            { it: "Ich habe keinen Hunger." },
            { it: "Der Kaffee ist nicht heiß." },
            { it: "Heute komme ich nicht." },
            { it: "Trinkst du kein Bier? Doch, gern." },
            { it: "Ich trinke nicht gern Bier." }
          ]
        },
        vocab: [
          { it: "die Kneipe", plural: "die Kneipen", ex: "Die Kneipe ist klein." },
          { it: "der Biergarten", plural: "die Biergärten", ex: "Im Biergarten ist es schön." },
          { it: "der Feierabend", plural: "die Feierabende", ex: "Schönen Feierabend!" },
          { it: "der Hunger", plural: "-", ex: "Ich habe Hunger." },
          { it: "der Durst", plural: "-", ex: "Ich habe keinen Durst." },
          { it: "der Alkohol", plural: "-", ex: "Ich trinke keinen Alkohol." },
          { it: "alkoholfrei", ex: "Das Bier ist alkoholfrei." },
          { it: "heute", ex: "Heute nicht, danke." },
          { it: "doch", ex: "Doch, ich komme." },
          { it: "nicht", ex: "Ich komme nicht." },
          { it: "kein", ex: "Ich trinke kein Bier." },
          { it: "schmecken", ex: "Das schmeckt gut." },
          { it: "noch", ex: "Noch einen Saft?" },
          { it: "Zahlen, bitte." }
        ],
        exercises: [
          { t: "mcq", a: 0 },
          { t: "mcq", a: 1 },
          { t: "fill", a: ["keinen"] },
          { t: "fill", a: ["nicht"] },
          {
            t: "gender",
            opts: ["der", "den", "die", "das"],
            items: [
              { it: "Tee", a: "den" },
              { it: "Cola", a: "die" },
              { it: "Bier", a: "das" },
              { it: "Saft", a: "den" },
              { it: "Limonade", a: "die" },
              { it: "Wasser", a: "das" }
            ]
          },
          {
            t: "trans",
            dir: "toIt",
            a: ["Heute trinke ich kein Bier", "Ich trinke heute kein Bier"]
          },
          {
            t: "cloze",
            text: "Trinkst du kein Bier? {{1}}, ich {{2}} gern Bier.",
            gaps: [["Doch"], ["trinke"]]
          },
          {
            t: "dialogue",
            lines: [
              { sp: "A", it: "Trinkst du kein Bier?" },
              {
                sp: "TY",
                choices: [
                  "Doch, gern, aber heute nicht.",
                  "Ja, gern, aber heute nicht.",
                  "Nein, gern, aber heute nicht."
                ],
                a: 0
              },
              { sp: "A", it: "Dann einen Saft?" },
              {
                sp: "TY",
                choices: [
                  "Ja, gern. Einen Apfelsaft, bitte.",
                  "Ja, gern. Ein Apfelsaft, bitte.",
                  "Doch, gern. Einen Apfelsaft, bitte."
                ],
                a: 0
              }
            ]
          },
          { t: "listen", it: "Ich habe Hunger, aber ich esse heute keinen Fisch." },
          { t: "speak", it: "Nein, danke. Heute trinke ich keinen Alkohol." }
        ]
      }
    ],
    test: {
      id: "a1-u03-test",
      tags: ["g-praesens", "g-artikel-akk", "g-negation"],
      cefr: "A1",
      titleIt: "Test: Feierabend",
      exercises: [
        { t: "fill", a: ["isst"] },
        { t: "conj", verb: "sprechen", tense: "praes", persons: [1, 2, 4] },
        { t: "conj", verb: "nehmen", tense: "praes", persons: [0, 1, 3] },
        { t: "fill", a: ["einen"] },
        { t: "fill", a: ["nicht"] },
        {
          t: "gender",
          opts: ["ein", "eine", "einen"],
          items: [
            { it: "Kaffee", a: "einen" },
            { it: "Cola", a: "eine" },
            { it: "Brot", a: "ein" },
            { it: "Saft", a: "einen" }
          ]
        },
        { t: "mcq", a: 0 },
        {
          t: "trans",
          dir: "toIt",
          a: [
            "Heute trinke ich kein Bier, ich nehme einen Saft",
            "Ich trinke heute kein Bier, ich nehme einen Saft"
          ]
        },
        { t: "listen", it: "Du isst gern Fisch, aber ich esse keinen Fisch." },
        { t: "speak", it: "Ich möchte einen Saft, aber kein Bier, bitte." }
      ]
    }
  }
]);
