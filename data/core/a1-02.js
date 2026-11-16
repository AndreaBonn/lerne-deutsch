/* ============================================================
   Language-neutral layer: German (de-DE), structure and answer keys.
   Learner-language texts live in data/i18n/<lang>/a1-02.js.
   a1-u04 and a1-u05 are German units.
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
          { it: "die Arbeit", plural: "die Arbeiten", ex: "Die Arbeit ist heute lang." },
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
              "Ich muss arbeiten, aber ich will schlafen",
              "Ich muss arbeiten, aber ich möchte schlafen"
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
  }
]);
