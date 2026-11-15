/* ============================================================
   Language-neutral layer: German (de-DE), structure and answer keys.
   Learner-language texts live in data/i18n/<lang>/a1-01.js.
   a1-u01 is the German unit; a1-u02 and a1-u03 below are still the old
   Italian-course content and are rewritten by later tasks.
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
    titleIt: "Chi sei?",
    lessons: [
      {
        id: "a1-u02-l1",
        tags: ["g-presente", "g-pron-soggetto"],
        cefr: "A1",
        titleIt: "Mi chiamo…",
        grammar: {
          examples: [
            { it: "Come ti chiami? — Mi chiamo Ewa." },
            { it: "Di dove sei? — Sono di Cracovia." },
            { it: "Sono polacca, ma abito a Milano." },
            { it: "Quanti anni hai? — Ho ventotto anni." },
            { it: "Piacere, Marco. — Piacere mio." }
          ]
        },
        vocab: [
          { it: "essere" },
          { it: "mi chiamo…" },
          { it: "come ti chiami?" },
          { it: "di dove sei?" },
          { it: "sono di…" },
          { it: "abito a…" },
          { it: "polacco / polacca" },
          { it: "italiano / italiana" },
          { it: "il nome" },
          { it: "il cognome" },
          { it: "piacere di conoscerti" },
          { it: "anche io" },
          { it: "davvero?" }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "mcq", a: 1 },
          { t: "fill", a: ["mi"] },
          { t: "fill", a: ["a"] },
          {
            t: "cloze",
            text: "Ciao! {{1}} chiamo Kasia, {{2}} di Danzica e {{3}} a Bologna.",
            gaps: [["mi"], ["sono"], ["abito"]]
          },
          {
            t: "order",
            tokens: ["Piacere", "di", "conoscerti,", "mi", "chiamo", "Luca"],
            a: ["piacere di conoscerti mi chiamo luca"]
          },
          {
            t: "dialogue",
            lines: [
              { sp: "A", it: "Ciao! Io sono Giulia. E tu, come ti chiami?" },
              { sp: "TY", choices: ["Mi chiamo Ewa.", "Si chiama Ewa.", "Ti chiami Ewa."], a: 0 },
              { sp: "A", it: "Piacere, Ewa! Di dove sei?" },
              { sp: "TY", choices: ["Sono di Polonia.", "Sono dalla Polonia.", "Abito Polonia."], a: 1 }
            ]
          },
          { t: "listen", it: "Mi chiamo Elena e abito a Napoli." },
          { t: "speak", it: "Piacere di conoscerti!" }
        ]
      },
      {
        id: "a1-u02-l2",
        tags: ["g-presente"],
        cefr: "A1",
        titleIt: "Avere e i numeri",
        grammar: {
          examples: [
            { it: "uno, due, tre, quattro, cinque" },
            { it: "sei, sette, otto, nove, dieci" },
            { it: "undici, dodici, tredici… venti" },
            { it: "ventuno, ventidue, ventotto" },
            { it: "trenta, quaranta, cinquanta, sessanta" },
            { it: "settanta, ottanta, novanta, cento" },
            { it: "Ho ventotto anni." }
          ]
        },
        vocab: [
          { it: "avere" },
          { it: "ho fame" },
          { it: "ho sete" },
          { it: "ho freddo / caldo" },
          { it: "ho sonno" },
          { it: "ho paura" },
          { it: "ho ragione" },
          { it: "ho bisogno di…" },
          { it: "quanti anni hai?" },
          { it: "quanto costa?" },
          { it: "l'euro" },
          { it: "il numero" },
          { it: "il numero di telefono" }
        ],
        exercises: [
          { t: "conj", verb: "avere", tense: "pres", persons: [0, 1, 2, 3, 4, 5] },
          { t: "mcq", a: 1 },
          { t: "mcq", a: 1 },
          { t: "fill", a: ["93"] },
          { t: "fill", a: ["'"] },
          { t: "trans", dir: "toIt", a: ["quanti anni hai", "quanti anni hai?"] },
          {
            t: "match",
            pairs: [{ it: "ho sete" }, { it: "ho sonno" }, { it: "ho paura" }, { it: "ho ragione" }]
          },
          {
            t: "cloze",
            text: "— Quanto {{1}}? — Sono {{2}} euro. — {{3}} solo venti euro, mi dispiace.",
            gaps: [["costa"], ["trentadue", "32"], ["ho"]]
          },
          { t: "listen", it: "Ho trentacinque anni e abito a Torino." },
          { t: "speak", it: "Quanto costa un cappuccino?" }
        ]
      },
      {
        id: "a1-u02-l3",
        tags: ["g-presente", "g-nome-genere"],
        cefr: "A1",
        titleIt: "Che lavoro fai?",
        grammar: {
          examples: [
            { it: "Che lavoro fai?" },
            { it: "Faccio la giornalista." },
            { it: "Sono ingegnere." },
            { it: "Lavoro in un'agenzia." },
            { it: "Sono disoccupato in questo momento." },
            { it: "Studio ancora, sono all'ultimo anno." }
          ]
        },
        vocab: [
          { it: "il lavoro" },
          { it: "l'insegnante" },
          { it: "il medico / la dottoressa" },
          { it: "l'ingegnere" },
          { it: "l'avvocato / l'avvocata" },
          { it: "il/la giornalista" },
          { it: "l'impiegato / l'impiegata" },
          { it: "il cuoco / la cuoca" },
          { it: "il commesso / la commessa" },
          { it: "l'operaio" },
          { it: "il/la libero professionista" },
          { it: "cerco lavoro" }
        ],
        exercises: [
          { t: "conj", verb: "fare", tense: "pres", persons: [0, 1, 2, 3, 4, 5] },
          { t: "mcq", a: 0 },
          { t: "mcq", a: 1 },
          { t: "fill", a: ["la"] },
          {
            t: "gender",
            opts: ["il", "lo", "la", "l'"],
            items: [
              { it: "cuoca", a: "la" },
              { it: "ingegnere", a: "l'" },
              { it: "studentessa", a: "la" },
              { it: "operaio", a: "l'" }
            ]
          },
          { t: "trans", dir: "toIt", a: ["che lavoro fai", "che lavoro fai?", "che cosa fai nella vita"] },
          {
            t: "match",
            pairs: [
              { it: "l'attore" },
              { it: "il commesso" },
              { it: "lo studente" },
              { it: "il giornalista" }
            ]
          },
          {
            t: "order",
            tokens: ["Lavoro", "in", "una", "banca", "a", "Milano"],
            a: ["lavoro in una banca a milano"]
          },
          { t: "listen", it: "Faccio l'architetto, lavoro con mio fratello." },
          { t: "speak", it: "Che lavoro fai? Io faccio la giornalista." }
        ]
      },
      {
        id: "a1-u02-l4",
        tags: ["g-presente"],
        cefr: "A1",
        titleIt: "Verbi in -ARE",
        grammar: {
          examples: [
            { it: "Parlo un po' d'italiano." },
            { it: "Non parlo bene, ma capisco." },
            { it: "Studi all'università?" },
            { it: "Mangiamo alle otto." },
            { it: "Cerchi lavoro a Milano?" },
            { it: "Loro abitano vicino al centro." }
          ]
        },
        vocab: [
          { it: "parlare" },
          { it: "lavorare" },
          { it: "studiare" },
          { it: "abitare" },
          { it: "mangiare" },
          { it: "comprare" },
          { it: "cercare" },
          { it: "pagare" },
          { it: "ascoltare" },
          { it: "guardare" },
          { it: "aspettare" },
          { it: "cominciare" }
        ],
        exercises: [
          { t: "conj", verb: "parlare", tense: "pres", persons: [0, 1, 2, 3, 4, 5] },
          { t: "conj", verb: "cercare", tense: "pres", persons: [1, 3] },
          { t: "mcq", a: 1 },
          { t: "fill", a: ["abitano"] },
          { t: "fill", a: ["non"] },
          { t: "trans", dir: "toIt", a: ["cerchiamo un appartamento a roma", "cerchiamo casa a roma"] },
          { t: "multi", a: [0, 2, 3, 4] },
          { t: "order", tokens: ["Non", "lavoro", "il", "sabato"], a: ["non lavoro il sabato"] },
          { t: "listen", it: "Studio italiano da tre mesi." },
          { t: "speak", it: "Non parlo bene, ma capisco quasi tutto." }
        ]
      }
    ],
    test: {
      id: "a1-u02-test",
      tags: ["g-presente", "g-pron-soggetto"],
      cefr: "A1",
      titleIt: "Test — Chi sei?",
      exercises: [
        { t: "fill", a: ["mi"] },
        { t: "fill", a: ["hai"] },
        { t: "mcq", a: 1 },
        { t: "mcq", a: 1 },
        { t: "conj", verb: "fare", tense: "pres", persons: [0, 2, 3] },
        { t: "mcq", a: 1 },
        {
          t: "cloze",
          text: "{{1}} polacca, {{2}} a Verona e {{3}} l'insegnante.",
          gaps: [["sono"], ["abito"], ["faccio"]]
        },
        { t: "trans", dir: "toIt", a: ["non parlo italiano", "non parlo l'italiano"] },
        { t: "listen", it: "Ho ventisette anni e cerco lavoro." },
        { t: "speak", it: "Mi chiamo Anna e faccio la giornalista." }
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
