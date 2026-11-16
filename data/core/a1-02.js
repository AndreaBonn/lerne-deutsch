/* ============================================================
   Language-neutral layer: German (de-DE), structure and answer keys.
   Learner-language texts live in data/i18n/<lang>/a1-02.js.
   a1-u04, a1-u05 and a1-u06 are German units.
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
            a: ["Der Mantel ist sehr schön, aber er kostet zu viel", "Der Mantel ist sehr schön, aber kostet zu viel"]
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
  },
  {
    id: "a1-u05",
    icon: "⏰",
    titleIt: "Mein Tag",
    lessons: [
      {
        id: "a1-u05-l1",
        tags: ["g-trennbare-verben", "g-temporalangaben"],
        cefr: "A1",
        titleIt: "Ich stehe um sieben auf",
        grammar: {
          examples: [
            { it: "Ich stehe um sieben Uhr auf." },
            { it: "Du wachst um sechs Uhr auf." },
            { it: "Am Samstag kaufen wir ein." },
            { it: "Am Abend sieht er fern." },
            { it: "Der Film fängt um acht Uhr an." },
            { it: "Ich frühstücke um halb acht." }
          ]
        },
        vocab: [
          { it: "aufstehen", ex: "Ich stehe um sieben Uhr auf." },
          { it: "aufwachen", ex: "Ich wache um sechs Uhr auf." },
          { it: "frühstücken", ex: "Am Morgen frühstücke ich um acht Uhr." },
          { it: "duschen", ex: "Ich dusche am Morgen." },
          { it: "einkaufen", ex: "Wir kaufen am Samstag ein." },
          { it: "fernsehen", ex: "Am Abend sehe ich fern." },
          { it: "anfangen", ex: "Der Film fängt um acht Uhr an." },
          { it: "einschlafen", ex: "Ich schlafe um elf Uhr ein." },
          { it: "der Morgen", plural: "die Morgen", ex: "Der Morgen ist kurz." },
          { it: "der Tag", plural: "die Tage", ex: "Der Tag fängt um sieben Uhr an." },
          { it: "der Abend", plural: "die Abende", ex: "Am Abend sehe ich fern." },
          { it: "die Nacht", plural: "die Nächte", ex: "Gute Nacht!" }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "mcq", a: 0 },
          { t: "conj", verb: "aufstehen", tense: "praes", persons: [0, 1, 2, 3, 4, 5] },
          { t: "fill", a: ["stehen"] },
          { t: "fill", a: ["auf"] },
          {
            t: "order",
            tokens: ["Ich", "stehe", "um", "sieben", "Uhr", "auf"],
            a: ["Ich stehe um sieben Uhr auf"]
          },
          {
            t: "cloze",
            text: "Am Samstag {{1}} wir {{2}}.",
            gaps: [["kaufen"], ["ein"]]
          },
          {
            t: "trans",
            dir: "toIt",
            a: [
              "Ich stehe um sieben auf",
              "Ich stehe um sieben Uhr auf",
              "Um sieben stehe ich auf",
              "Um sieben Uhr stehe ich auf"
            ]
          },
          { t: "listen", it: "Ich stehe um sieben auf und frühstücke um acht." },
          { t: "speak", it: "Wir kaufen am Samstag ein." }
        ]
      },
      {
        id: "a1-u05-l2",
        tags: ["g-temporalangaben"],
        cefr: "A1",
        titleIt: "Wie spät ist es?",
        grammar: {
          examples: [
            { it: "Wie spät ist es?" },
            { it: "Es ist sieben Uhr." },
            { it: "Es ist Viertel nach sieben." },
            { it: "Es ist halb acht." },
            { it: "Es ist Viertel vor acht." },
            { it: "Der Film beginnt am Samstag um halb neun." }
          ]
        },
        vocab: [
          { it: "die Uhr", plural: "die Uhren", ex: "Es ist sieben Uhr." },
          { it: "die Stunde", plural: "die Stunden", ex: "Der Film dauert zwei Stunden." },
          { it: "die Minute", plural: "die Minuten", ex: "Fünf Minuten sind kurz." },
          { it: "das Viertel", plural: "die Viertel", ex: "Es ist Viertel nach sieben." },
          { it: "halb", ex: "Es ist halb acht." },
          { it: "vor", ex: "Es ist zehn vor acht." },
          { it: "nach", ex: "Es ist zehn nach sieben." },
          { it: "spät", ex: "Wie spät ist es?" },
          { it: "früh", ex: "Es ist noch früh." },
          { it: "der Montag", plural: "die Montage", ex: "Am Montag arbeite ich." },
          { it: "der Samstag", plural: "die Samstage", ex: "Am Samstag kaufe ich ein." },
          { it: "das Wochenende", plural: "die Wochenenden", ex: "Am Wochenende schlafe ich lange." }
        ],
        exercises: [
          { t: "mcq", a: 0 },
          { t: "mcq", a: 2 },
          { t: "fill", a: ["um"] },
          { t: "fill", a: ["am"] },
          {
            t: "order",
            tokens: ["Es", "ist", "Viertel", "nach", "sieben"],
            a: ["Es ist Viertel nach sieben"]
          },
          {
            t: "match",
            pairs: [{ it: "Montag" }, { it: "Mittwoch" }, { it: "Freitag" }, { it: "Sonntag" }]
          },
          {
            t: "cloze",
            text: "7:10 Uhr: Es ist zehn {{1}} sieben. 7:50 Uhr: Es ist zehn {{2}} acht.",
            gaps: [["nach"], ["vor"]]
          },
          {
            t: "trans",
            dir: "toIt",
            a: [
              "Wie spät ist es? Es ist halb neun",
              "Wie viel Uhr ist es? Es ist halb neun",
              "Wie spät ist es? Es ist acht Uhr dreißig",
              "Wie viel Uhr ist es? Es ist acht Uhr dreißig"
            ]
          },
          { t: "listen", it: "Wie spät ist es? Es ist Viertel vor acht." },
          { t: "speak", it: "Der Film beginnt um halb neun." }
        ]
      },
      {
        id: "a1-u05-l3",
        tags: ["g-modalverben"],
        cefr: "A1",
        titleIt: "Ich kann, ich will, ich muss",
        grammar: {
          examples: [
            { it: "Ich kann gut kochen." },
            { it: "Du kannst heute nicht kommen." },
            { it: "Wir wollen morgen schwimmen." },
            { it: "Er will heute nicht arbeiten." },
            { it: "Ich muss heute lernen." },
            { it: "Sie müssen die Hausaufgaben machen." }
          ]
        },
        vocab: [
          { it: "können", ex: "Ich kann gut schwimmen." },
          { it: "wollen", ex: "Wir wollen morgen tanzen." },
          { it: "müssen", ex: "Du musst heute lernen." },
          { it: "lernen", ex: "Ich muss heute lernen." },
          { it: "kochen", ex: "Er kann gut kochen." },
          { it: "schwimmen", ex: "Wir können im Sommer schwimmen." },
          { it: "schlafen", ex: "Ich will heute lange schlafen." },
          { it: "tanzen", ex: "Sie kann sehr gut tanzen." },
          { it: "die Arbeit", plural: "die Arbeiten", ex: "Ich muss heute lange arbeiten." },
          { it: "die Hausaufgabe", plural: "die Hausaufgaben", ex: "Ich muss die Hausaufgabe machen." },
          { it: "heute", ex: "Heute muss ich arbeiten." },
          { it: "morgen", ex: "Morgen will ich schlafen." }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "mcq", a: 1 },
          { t: "conj", verb: "können", tense: "praes", persons: [0, 1, 2, 3, 4, 5] },
          { t: "conj", verb: "wollen", tense: "praes", persons: [0, 1, 2, 3, 4, 5] },
          { t: "conj", verb: "müssen", tense: "praes", persons: [0, 1, 2, 3, 4, 5] },
          { t: "fill", a: ["wollen"] },
          {
            t: "cloze",
            text: "Ich {{1}} nicht schlafen. Ich {{2}} arbeiten.",
            gaps: [["kann"], ["muss"]]
          },
          {
            t: "trans",
            dir: "toIt",
            a: [
              "Ich muss arbeiten, aber ich will schlafen"
            ]
          },
          { t: "listen", it: "Ich kann heute nicht kommen, ich muss arbeiten." },
          { t: "speak", it: "Ich muss heute lernen, aber ich will schwimmen." }
        ]
      },
      {
        id: "a1-u05-l4",
        tags: ["g-adverbien", "g-satz-v2"],
        cefr: "A1",
        titleIt: "Morgens trinke ich immer ...",
        grammar: {
          examples: [
            { it: "Ich trinke immer Kaffee." },
            { it: "Morgens trinke ich immer Kaffee." },
            { it: "Ich lese oft die Zeitung." },
            { it: "Abends sehe ich manchmal fern." },
            { it: "Ich esse selten Brot." },
            { it: "Ich trinke nie Bier." }
          ]
        },
        vocab: [
          { it: "immer", ex: "Ich trinke immer Kaffee." },
          { it: "oft", ex: "Ich lese oft die Zeitung." },
          { it: "manchmal", ex: "Abends sehe ich manchmal fern." },
          { it: "selten", ex: "Ich esse selten Brot." },
          { it: "nie", ex: "Ich trinke nie Bier." },
          { it: "morgens", ex: "Morgens trinke ich Kaffee." },
          { it: "abends", ex: "Abends sehe ich fern." },
          { it: "jeden Tag", ex: "Jeden Tag frühstücke ich um acht." },
          { it: "das Brot", plural: "die Brote", ex: "Ich esse oft Brot." },
          { it: "das Frühstück", plural: "die Frühstücke", ex: "Das Frühstück ist um acht." },
          { it: "die Zeitung", plural: "die Zeitungen", ex: "Ich lese die Zeitung." },
          { it: "das Mittagessen", plural: "die Mittagessen", ex: "Das Mittagessen ist um eins." }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "mcq", a: 0 },
          { t: "multi", a: [0, 2, 4] },
          { t: "fill", a: ["sehe"] },
          {
            t: "match",
            pairs: [{ it: "immer" }, { it: "oft" }, { it: "manchmal" }, { it: "nie" }]
          },
          {
            t: "order",
            tokens: ["Abends", "sehe", "ich", "manchmal", "fern"],
            a: ["Abends sehe ich manchmal fern"]
          },
          {
            t: "cloze",
            text: "Morgens {{1}} ich {{2}} Kaffee.",
            gaps: [["trinke"], ["immer"]]
          },
          {
            t: "trans",
            dir: "toIt",
            a: [
              "Abends sehe ich oft fern",
              "Ich sehe abends oft fern",
              "Oft sehe ich abends fern",
              "Ich sehe oft abends fern"
            ]
          },
          { t: "listen", it: "Morgens trinke ich immer Kaffee, abends manchmal Tee." },
          { t: "speak", it: "Morgens trinke ich immer Kaffee und lese die Zeitung." }
        ]
      }
    ],
    test: {
      id: "a1-u05-test",
      tags: ["g-trennbare-verben", "g-modalverben", "g-temporalangaben"],
      cefr: "A1",
      titleIt: "Test: Mein Tag",
      exercises: [
        { t: "conj", verb: "aufstehen", tense: "praes", persons: [0, 2, 3] },
        { t: "conj", verb: "müssen", tense: "praes", persons: [0, 1, 2, 3] },
        { t: "fill", a: ["um"] },
        { t: "fill", a: ["muss"] },
        { t: "fill", a: ["trinke"] },
        { t: "mcq", a: 1 },
        { t: "mcq", a: 0 },
        {
          t: "order",
          tokens: ["Ich", "kann", "heute", "nicht", "kommen"],
          a: ["Ich kann heute nicht kommen"]
        },
        { t: "listen", it: "Ich muss um halb acht aufstehen." },
        { t: "speak", it: "Abends sehe ich manchmal fern." }
      ]
    }
  },
  {
    id: "a1-u06",
    icon: "🏙️",
    titleIt: "In der Stadt",
    lessons: [
      {
        id: "a1-u06-l1",
        tags: ["g-praep-dativ", "g-artikel-dat"],
        cefr: "A1",
        titleIt: "mit dem Bus, zum Bahnhof",
        grammar: {
          examples: [
            { it: "Ich fahre mit dem Bus." },
            { it: "Du fährst mit der Straßenbahn." },
            { it: "Wir fahren mit dem Auto." },
            { it: "Ich gehe zum Bahnhof." },
            { it: "Sie geht zur Schule." },
            { it: "Wir gehen zu Fuß zur Haltestelle." }
          ]
        },
        vocab: [
          { it: "mit", ex: "Ich fahre mit dem Bus." },
          { it: "zu", ex: "Ich gehe zum Bahnhof." },
          { it: "zu Fuß", ex: "Wir gehen zu Fuß zur Schule." },
          { it: "der Bus", plural: "die Busse", ex: "Der Bus kommt um acht Uhr." },
          { it: "die Straßenbahn", plural: "die Straßenbahnen", ex: "Ich fahre mit der Straßenbahn." },
          { it: "die U-Bahn", plural: "die U-Bahnen", ex: "Die U-Bahn fährt schnell." },
          { it: "der Zug", plural: "die Züge", ex: "Der Zug fährt um neun Uhr ab." },
          { it: "das Auto", plural: "die Autos", ex: "Wir fahren mit dem Auto." },
          { it: "das Fahrrad", plural: "die Fahrräder", ex: "Er fährt mit dem Fahrrad." },
          { it: "der Bahnhof", plural: "die Bahnhöfe", ex: "Der Bahnhof ist groß." },
          { it: "die Haltestelle", plural: "die Haltestellen", ex: "Die Haltestelle ist da." },
          { it: "die Schule", plural: "die Schulen", ex: "Die Schule fängt um acht Uhr an." }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "fill", a: ["dem"] },
          { t: "fill", a: ["der"] },
          { t: "fill", a: ["zum", "zu dem"] },
          {
            t: "gender",
            opts: ["der", "die", "das"],
            items: [
              { it: "Bahnhof", a: "der" },
              { it: "Haltestelle", a: "die" },
              { it: "Auto", a: "das" },
              { it: "Zug", a: "der" },
              { it: "Schule", a: "die" },
              { it: "Fahrrad", a: "das" }
            ]
          },
          {
            t: "order",
            tokens: ["Wir", "fahren", "mit", "dem", "Zug"],
            a: ["Wir fahren mit dem Zug", "Mit dem Zug fahren wir"]
          },
          {
            t: "cloze",
            text: "Er fährt {{1}} dem Bus {{2}} Schule.",
            gaps: [["mit"], ["zur", "zu der"]]
          },
          {
            t: "trans",
            dir: "toIt",
            a: [
              "Ich fahre mit dem Bus zum Bahnhof",
              "Ich fahre zum Bahnhof mit dem Bus",
              "Mit dem Bus fahre ich zum Bahnhof",
              "Zum Bahnhof fahre ich mit dem Bus"
            ]
          },
          { t: "listen", it: "Ich fahre mit dem Bus zur Schule." },
          { t: "speak", it: "Wir fahren mit der Straßenbahn zum Bahnhof." }
        ]
      },
      {
        id: "a1-u06-l2",
        tags: ["g-praesens", "g-praep-dativ"],
        cefr: "A1",
        titleIt: "gehen, fahren, kommen aus",
        grammar: {
          examples: [
            { it: "Ich komme aus Italien." },
            { it: "Ich komme aus dem Supermarkt." },
            { it: "Er kommt vom Bahnhof." },
            { it: "Wir gehen zum Arzt." },
            { it: "Du fährst zum Park." },
            { it: "Anna ist beim Arzt." }
          ]
        },
        vocab: [
          { it: "gehen", ex: "Wir gehen zum Park." },
          { it: "fahren", ex: "Er fährt mit dem Zug." },
          { it: "kommen", ex: "Ich komme aus Italien." },
          { it: "aus", ex: "Sie kommt aus dem Supermarkt." },
          { it: "von", ex: "Er kommt vom Bahnhof." },
          { it: "bei", ex: "Anna ist beim Arzt." },
          { it: "einsteigen", ex: "Wir steigen an der Haltestelle ein." },
          { it: "aussteigen", ex: "Ich steige am Bahnhof aus." },
          { it: "der Arzt", plural: "die Ärzte", ex: "Ich gehe zum Arzt." },
          { it: "der Park", plural: "die Parks", ex: "Der Park ist groß." },
          { it: "der Supermarkt", plural: "die Supermärkte", ex: "Der Supermarkt ist neu." },
          { it: "die Stadt", plural: "die Städte", ex: "Die Stadt ist schön." }
        ],
        exercises: [
          { t: "conj", verb: "gehen", tense: "praes", persons: [0, 2, 3] },
          { t: "conj", verb: "fahren", tense: "praes", persons: [0, 1, 2, 3] },
          { t: "fill", a: ["komme"] },
          { t: "fill", a: ["fährt"] },
          { t: "fill", a: ["aus"] },
          { t: "mcq", a: 1 },
          { t: "multi", a: [0, 2, 3] },
          {
            t: "order",
            tokens: ["Er", "kommt", "vom", "Bahnhof"],
            a: ["Er kommt vom Bahnhof", "Vom Bahnhof kommt er"]
          },
          { t: "listen", it: "Ich komme aus Italien und fahre mit dem Zug nach Berlin." },
          { t: "speak", it: "Wir gehen zu Fuß zum Park." }
        ]
      },
      {
        id: "a1-u06-l3",
        tags: ["g-imperativ", "g-wechselpraep"],
        cefr: "A1",
        titleIt: "Wo ist der Bahnhof? Gehen Sie geradeaus",
        grammar: {
          examples: [
            { it: "Gehen Sie geradeaus." },
            { it: "Biegen Sie links ab." },
            { it: "Nehmen Sie die erste Straße rechts." },
            { it: "Entschuldigung, wo ist der Bahnhof?" },
            { it: "Der Bahnhof ist neben dem Rathaus." },
            { it: "Die Apotheke ist hinter der Kreuzung." }
          ]
        },
        vocab: [
          { it: "geradeaus", ex: "Gehen Sie geradeaus." },
          { it: "links", ex: "Biegen Sie links ab." },
          { it: "rechts", ex: "Die Apotheke ist rechts." },
          { it: "abbiegen", ex: "Biegen Sie an der Kreuzung rechts ab." },
          { it: "Entschuldigung", ex: "Entschuldigung, wo ist der Bahnhof?" },
          { it: "neben", ex: "Der Bahnhof ist neben dem Rathaus." },
          { it: "hinter", ex: "Die Apotheke ist hinter dem Bahnhof." },
          { it: "vor", ex: "Der Bus hält vor dem Rathaus." },
          { it: "die Straße", plural: "die Straßen", ex: "Nehmen Sie die erste Straße." },
          { it: "die Kreuzung", plural: "die Kreuzungen", ex: "Die Kreuzung ist da." },
          { it: "das Rathaus", plural: "die Rathäuser", ex: "Das Rathaus ist alt." },
          { it: "die Apotheke", plural: "die Apotheken", ex: "Die Apotheke ist neben dem Bahnhof." }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "mcq", a: 0 },
          { t: "fill", a: ["Gehen"] },
          {
            t: "match",
            pairs: [{ it: "geradeaus" }, { it: "links" }, { it: "rechts" }, { it: "hinter" }]
          },
          {
            t: "cloze",
            text: "Die Apotheke ist {{1}} dem Rathaus und der Bahnhof ist {{2}} der Apotheke.",
            gaps: [["hinter"], ["neben"]]
          },
          {
            t: "order",
            tokens: ["Gehen", "Sie", "geradeaus", "und", "biegen", "Sie", "links", "ab"],
            a: ["Gehen Sie geradeaus und biegen Sie links ab"]
          },
          {
            t: "dialogue",
            lines: [
              { sp: "A", it: "Entschuldigung, wo ist der Bahnhof?" },
              {
                sp: "TY",
                choices: [
                  "Gehen Sie geradeaus und dann links.",
                  "Gehen geradeaus Sie und dann links.",
                  "Sie geradeaus gehen und dann links."
                ],
                a: 0
              },
              { sp: "A", it: "Danke! Und wo ist die Apotheke?" },
              {
                sp: "TY",
                choices: [
                  "Sie ist neben dem Rathaus.",
                  "Sie ist neben den Rathaus.",
                  "Sie ist neben der Rathaus."
                ],
                a: 0
              }
            ]
          },
          {
            t: "trans",
            dir: "toIt",
            a: [
              "Entschuldigung, wo ist die Apotheke?",
              "Entschuldigen Sie, wo ist die Apotheke?"
            ]
          },
          { t: "listen", it: "Gehen Sie geradeaus und biegen Sie rechts ab." },
          { t: "speak", it: "Entschuldigung, wo ist die Apotheke?" }
        ]
      },
      {
        id: "a1-u06-l4",
        tags: ["g-es", "g-artikel-akk"],
        cefr: "A1",
        titleIt: "Es gibt, es gibt keinen",
        grammar: {
          examples: [
            { it: "Es gibt einen Park in der Nähe." },
            { it: "Es gibt eine Bäckerei hier." },
            { it: "Es gibt ein Café neben dem Rathaus." },
            { it: "Gibt es hier ein Hotel?" },
            { it: "Es gibt keinen Supermarkt hier." },
            { it: "Es gibt keine Bank in der Nähe." }
          ]
        },
        vocab: [
          { it: "es gibt", ex: "Es gibt ein Café in der Nähe." },
          { it: "hier", ex: "Gibt es hier ein Hotel?" },
          { it: "in der Nähe", ex: "Es gibt einen Park in der Nähe." },
          { it: "das Café", plural: "die Cafés", ex: "Es gibt ein Café in der Stadt." },
          { it: "das Kino", plural: "die Kinos", ex: "Es gibt ein Kino hier." },
          { it: "die Bäckerei", plural: "die Bäckereien", ex: "Es gibt eine Bäckerei in der Nähe." },
          { it: "das Restaurant", plural: "die Restaurants", ex: "Es gibt ein Restaurant am Bahnhof." },
          { it: "die Bank", plural: "die Banken", ex: "Es gibt keine Bank hier." },
          { it: "das Museum", plural: "die Museen", ex: "Es gibt ein Museum in der Stadt." },
          { it: "das Hotel", plural: "die Hotels", ex: "Gibt es hier ein Hotel?" },
          { it: "die Bibliothek", plural: "die Bibliotheken", ex: "Es gibt eine Bibliothek hier." },
          { it: "die Kirche", plural: "die Kirchen", ex: "Es gibt eine Kirche neben dem Rathaus." }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "fill", a: ["einen"] },
          { t: "fill", a: ["keine"] },
          { t: "fill", a: ["Gibt"] },
          {
            t: "match",
            pairs: [{ it: "das Café" }, { it: "die Bäckerei" }, { it: "das Kino" }, { it: "die Kirche" }]
          },
          {
            t: "order",
            tokens: ["Es", "gibt", "hier", "keinen", "Supermarkt"],
            a: [
              "Es gibt hier keinen Supermarkt",
              "Es gibt keinen Supermarkt hier",
              "Hier gibt es keinen Supermarkt"
            ]
          },
          {
            t: "cloze",
            text: "Es gibt {{1}} Bäckerei und {{2}} Park hier.",
            gaps: [["eine"], ["einen"]]
          },
          {
            t: "trans",
            dir: "toIt",
            a: [
              "In der Stadt gibt es ein Kino, aber kein Museum",
              "Es gibt ein Kino in der Stadt, aber kein Museum",
              "Es gibt in der Stadt ein Kino, aber kein Museum"
            ]
          },
          { t: "listen", it: "Es gibt eine Bäckerei und einen Park in der Nähe." },
          { t: "speak", it: "Gibt es hier ein Hotel?" }
        ]
      }
    ],
    test: {
      id: "a1-u06-test",
      tags: ["g-praep-dativ", "g-artikel-dat", "g-wechselpraep"],
      cefr: "A1",
      titleIt: "Test: In der Stadt",
      exercises: [
        { t: "conj", verb: "fahren", tense: "praes", persons: [0, 1, 2, 3] },
        { t: "fill", a: ["dem"] },
        { t: "fill", a: ["zur", "zu der"] },
        { t: "fill", a: ["aus"] },
        { t: "fill", a: ["neben"] },
        { t: "fill", a: ["Nehmen"] },
        {
          t: "gender",
          opts: ["der", "die", "das"],
          items: [
            { it: "Rathaus", a: "das" },
            { it: "Kreuzung", a: "die" },
            { it: "Bahnhof", a: "der" },
            { it: "Apotheke", a: "die" }
          ]
        },
        { t: "mcq", a: 1 },
        { t: "listen", it: "Entschuldigung, wo ist der Bahnhof?" },
        { t: "speak", it: "Gehen Sie geradeaus und dann links." }
      ]
    }
  }
]);
