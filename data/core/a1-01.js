/* ============================================================
   Language-neutral layer: German (de-DE), structure and answer keys.
   Learner-language texts live in data/i18n/<lang>/a1-01.js.
   a1-u01 and a1-u02 are German units; a1-u03 below is still the old
   Italian-course content and is rewritten by a later task.
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
    icon: "🍹",
    titleIt: "L'aperitivo",
    lessons: [
      {
        id: "a1-u03-l1",
        tags: ["g-pron-indiretti", "g-frase"],
        cefr: "A1",
        titleIt: "Mi piace, mi piacciono",
        grammar: {
          examples: [
            { it: "Mi piace molto il caffè." },
            { it: "Ti piacciono gli spritz?" },
            { it: "Non ci piace la birra calda." },
            { it: "Le piace ballare." },
            { it: "A Marco piace il pesce." },
            { it: "Mi piacerebbe provare." }
          ]
        },
        vocab: [
          { it: "l'aperitivo" },
          { it: "lo spritz" },
          { it: "il vino rosso / bianco" },
          { it: "la birra" },
          { it: "le olive" },
          { it: "le patatine" },
          { it: "i salatini" },
          { it: "il prosciutto" },
          { it: "il formaggio" },
          { it: "i dolci" },
          { it: "il pesce" },
          { it: "la carne" },
          { it: "cucinare" },
          { it: "assaggiare" }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "fill", a: ["piace"] },
          { t: "fill", a: ["piacciono"] },
          { t: "mcq", a: 1 },
          { t: "mcq", a: 1 },
          { t: "trans", dir: "toIt", a: ["mi piace cucinare"] },
          {
            t: "match",
            pairs: [{ it: "mi piace" }, { it: "ti piace" }, { it: "le piace" }, { it: "ci piace" }]
          },
          {
            t: "cloze",
            text: "— Ti {{1}} lo spritz? — Sì, molto! Ma non mi {{2}} le olive.",
            gaps: [["piace"], ["piacciono"]]
          },
          { t: "listen", it: "Mi piacciono molto i formaggi italiani." },
          { t: "speak", it: "Mi piace l'aperitivo, ma non mi piacciono le olive." }
        ]
      },
      {
        id: "a1-u03-l2",
        tags: ["g-presente"],
        cefr: "A1",
        titleIt: "Verbi in -ERE",
        grammar: {
          examples: [
            { it: "Prendo un caffè, grazie." },
            { it: "Leggi il menù?" },
            { it: "Non vedo il cameriere." },
            { it: "C'è un tavolo libero?" },
            { it: "Ci sono due posti al bancone." },
            { it: "Scriviamo il nome sulla prenotazione." }
          ]
        },
        vocab: [
          { it: "prendere" },
          { it: "leggere" },
          { it: "scrivere" },
          { it: "vedere" },
          { it: "chiedere" },
          { it: "rispondere" },
          { it: "mettere" },
          { it: "chiudere" },
          { it: "c'è / ci sono" },
          { it: "il posto" },
          { it: "libero / occupato" },
          { it: "qui vicino" }
        ],
        exercises: [
          { t: "conj", verb: "prendere", tense: "pres", persons: [0, 1, 2, 3, 4, 5] },
          { t: "mcq", a: 1 },
          { t: "fill", a: ["c'è", "ce"] },
          { t: "fill", a: ["ci sono"] },
          { t: "mcq", a: 1 },
          { t: "trans", dir: "toIt", a: ["prendo una birra e tu", "io prendo una birra e tu"] },
          { t: "multi", a: [0, 2, 4] },
          { t: "order", tokens: ["Non", "vedo", "il", "cameriere"], a: ["non vedo il cameriere"] },
          { t: "listen", it: "C'è un tavolo libero per due persone?" },
          { t: "speak", it: "Prendiamo due spritz, per favore." }
        ]
      },
      {
        id: "a1-u03-l3",
        tags: ["g-presente"],
        cefr: "A1",
        titleIt: "Verbi in -IRE",
        grammar: {
          examples: [
            { it: "Non capisco, può ripetere?" },
            { it: "Preferisco un tavolo fuori." },
            { it: "A che ora finisci di lavorare?" },
            { it: "Il negozio apre alle nove." },
            { it: "Partiamo domani mattina." },
            { it: "Loro capiscono tutto." }
          ]
        },
        vocab: [
          { it: "capire (-isc-)" },
          { it: "finire (-isc-)" },
          { it: "preferire (-isc-)" },
          { it: "pulire (-isc-)" },
          { it: "spedire (-isc-)" },
          { it: "dormire" },
          { it: "partire" },
          { it: "aprire" },
          { it: "offrire" },
          { it: "sentire" },
          { it: "seguire" },
          { it: "può ripetere?" }
        ],
        exercises: [
          { t: "conj", verb: "capire", tense: "pres", persons: [0, 1, 2, 3, 4, 5] },
          { t: "conj", verb: "dormire", tense: "pres", persons: [0, 2, 5] },
          { t: "mcq", a: 1 },
          { t: "fill", a: ["capiamo"] },
          { t: "fill", a: ["finiscono"] },
          { t: "trans", dir: "toIt", a: ["preferisco un tavolo fuori", "preferisco un tavolo all'aperto"] },
          { t: "multi", a: [0, 2, 4] },
          { t: "order", tokens: ["Non", "capisco,", "può", "ripetere?"], a: ["non capisco può ripetere"] },
          { t: "listen", it: "Preferisco partire domani mattina presto." },
          { t: "speak", it: "Scusi, non capisco. Può ripetere?" }
        ]
      },
      {
        id: "a1-u03-l4",
        tags: ["g-preposizioni", "g-articolo-det"],
        cefr: "A1",
        titleIt: "Del pane, dell'acqua",
        grammar: {
          examples: [
            { it: "Vorrei del pane, per favore." },
            { it: "Compro delle mele e dell'uva." },
            { it: "Un po' di sale, non troppo." },
            { it: "Due etti di prosciutto crudo." },
            { it: "Mezzo litro di latte." },
            { it: "Non ho zucchero in casa." }
          ]
        },
        vocab: [
          { it: "il pane" },
          { it: "il latte" },
          { it: "l'acqua" },
          { it: "lo zucchero" },
          { it: "il sale" },
          { it: "l'olio" },
          { it: "i pomodori" },
          { it: "le mele" },
          { it: "un etto" },
          { it: "un chilo" },
          { it: "un po' di" },
          { it: "mezzo litro" },
          { it: "basta così" },
          { it: "quanto ne vuole?" }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "fill", a: ["dell'"] },
          { t: "fill", a: ["delle"] },
          {
            t: "gender",
            opts: ["del", "dello", "dell'", "della", "dei", "degli", "delle"],
            items: [
              { it: "pane", a: "del" },
              { it: "zucchero", a: "dello" },
              { it: "carne", a: "della" },
              { it: "olio", a: "dell'" },
              { it: "pomodori", a: "dei" },
              { it: "spinaci", a: "degli" }
            ]
          },
          { t: "mcq", a: 1 },
          {
            t: "trans",
            dir: "toIt",
            a: ["vorrei mezzo litro di latte", "mezzo litro di latte per favore"]
          },
          {
            t: "dialogue",
            lines: [
              { sp: "A", it: "Buongiorno! Mi dica." },
              {
                sp: "TY",
                choices: [
                  "Due etti di prosciutto, per favore.",
                  "Due chili di prosciutto, per favore.",
                  "Un prosciutto, per favore."
                ],
                a: 0
              },
              { sp: "A", it: "Ecco. Altro?" },
              {
                sp: "TY",
                choices: ["Anche il pane.", "Anche del pane, grazie.", "Anche un pane grazie."],
                a: 1
              }
            ]
          },
          {
            t: "cloze",
            text: "Compro {{1}} pane, {{2}} acqua e {{3}} pomodori.",
            gaps: [["del"], ["dell'"], ["dei"]]
          },
          { t: "listen", it: "Vorrei un chilo di pomodori e un po' di basilico." },
          { t: "speak", it: "Due etti di formaggio, per favore. Basta così." }
        ]
      }
    ],
    test: {
      id: "a1-u03-test",
      tags: ["g-presente", "g-preposizioni"],
      cefr: "A1",
      titleIt: "Test — L'aperitivo",
      exercises: [
        { t: "fill", a: ["piacciono"] },
        { t: "fill", a: ["piace"] },
        { t: "mcq", a: 1 },
        { t: "conj", verb: "prendere", tense: "pres", persons: [0, 2, 5] },
        { t: "conj", verb: "capire", tense: "pres", persons: [0, 3, 5] },
        { t: "fill", a: ["ci sono"] },
        {
          t: "gender",
          opts: ["del", "dello", "dell'", "della", "dei", "delle"],
          items: [
            { it: "acqua", a: "dell'" },
            { it: "carne", a: "della" },
            { it: "pane", a: "del" },
            { it: "mele", a: "delle" }
          ]
        },
        { t: "trans", dir: "toIt", a: ["preferisco il vino bianco", "preferisco vino bianco"] },
        { t: "listen", it: "Ci sono delle olive e del formaggio." },
        { t: "speak", it: "Mi piace molto l'aperitivo italiano." }
      ]
    }
  }
]);
