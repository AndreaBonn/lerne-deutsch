/* ============================================================
   Language-neutral layer: German (de-DE), structure and answer keys.
   Learner-language texts live in data/i18n/<lang>/a1-03.js.
   a1-u08 is a German unit.
   ============================================================ */
LINGUAI.addUnits("A1", [
  {
    id: "a1-u08",
    icon: "👪",
    titleIt: "Familie und Freunde",
    lessons: [
      {
        id: "a1-u08-l1",
        tags: ["g-possessiv"],
        cefr: "A1",
        titleIt: "Meine Mutter, mein Chef",
        grammar: {
          examples: [
            { it: "Meine Mutter heißt Anna." },
            { it: "Mein Chef ist nett." },
            { it: "Das ist unsere Familie." },
            { it: "Ich mag meinen Bruder." },
            { it: "Wo wohnt deine Schwester?" },
            { it: "Annas Bruder heißt Paul." }
          ]
        },
        vocab: [
          { it: "die Familie", plural: "die Familien", ex: "Das ist meine Familie." },
          { it: "die Mutter", plural: "die Mütter", ex: "Meine Mutter heißt Anna." },
          { it: "der Vater", plural: "die Väter", ex: "Mein Vater wohnt in Wien." },
          { it: "die Eltern", plural: "die Eltern", ex: "Meine Eltern wohnen in Berlin." },
          { it: "der Bruder", plural: "die Brüder", ex: "Ich mag meinen Bruder." },
          { it: "die Schwester", plural: "die Schwestern", ex: "Wo wohnt deine Schwester?" },
          { it: "die Großmutter", plural: "die Großmütter", ex: "Meine Großmutter ist alt." },
          { it: "der Großvater", plural: "die Großväter", ex: "Mein Großvater spricht Italienisch." },
          { it: "der Onkel", plural: "die Onkel", ex: "Mein Onkel wohnt in Zürich." },
          { it: "die Tante", plural: "die Tanten", ex: "Ihre Tante heißt Eva." },
          { it: "der Chef", plural: "die Chefs", ex: "Mein Chef ist nett." },
          { it: "die Freundin", plural: "die Freundinnen", ex: "Das ist meine Freundin Lena." }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "fill", a: ["meine"] },
          { t: "fill", a: ["meinen"] },
          { t: "mcq", a: 0 },
          { t: "mcq", a: 1 },
          {
            t: "gender",
            opts: ["ein", "eine"],
            items: [
              { it: "Bruder", a: "ein" },
              { it: "Schwester", a: "eine" },
              { it: "Onkel", a: "ein" },
              { it: "Tante", a: "eine" },
              { it: "Chef", a: "ein" },
              { it: "Freundin", a: "eine" }
            ]
          },
          {
            t: "trans",
            dir: "toIt",
            a: [
              "Meine Schwester heißt Lena und mein Bruder heißt Paul",
              "Meine Schwester heißt Lena, und mein Bruder heißt Paul"
            ]
          },
          {
            t: "cloze",
            text: "Das sind {{1}} Eltern. {{2}} Vater heißt Jan.",
            gaps: [["meine"], ["Mein"]]
          },
          { t: "listen", it: "Meine Mutter heißt Eva, und mein Vater heißt Jan." },
          { t: "speak", it: "Das ist meine Familie: mein Vater, meine Mutter und mein Bruder." }
        ]
      },
      {
        id: "a1-u08-l2",
        tags: ["g-adjektivdeklination"],
        cefr: "A1",
        titleIt: "Wie sieht er aus?",
        grammar: {
          examples: [
            { it: "Wie sieht Paul aus?" },
            { it: "Er ist groß und schlank." },
            { it: "Seine Augen sind braun." },
            { it: "Meine Schwester ist klein und blond." },
            { it: "Er hat einen Bart." },
            { it: "Ihre Haare sind lang." }
          ]
        },
        vocab: [
          { it: "groß", ex: "Mein Bruder ist groß." },
          { it: "klein", ex: "Meine Schwester ist klein." },
          { it: "jung", ex: "Mein Onkel ist noch jung." },
          { it: "alt", ex: "Meine Großmutter ist alt." },
          { it: "schlank", ex: "Er ist groß und schlank." },
          { it: "blond", ex: "Ihre Haare sind blond." },
          { it: "lang", ex: "Ihre Haare sind lang." },
          { it: "kurz", ex: "Seine Haare sind kurz." },
          { it: "die Haare", plural: "die Haare", ex: "Seine Haare sind braun." },
          { it: "die Augen", plural: "die Augen", ex: "Ihre Augen sind grün." },
          { it: "die Brille", plural: "die Brillen", ex: "Sie hat eine Brille." },
          { it: "der Bart", plural: "die Bärte", ex: "Er hat einen Bart." }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "mcq", a: 2 },
          { t: "fill", a: ["sind"] },
          { t: "fill", a: ["hat"] },
          {
            t: "match",
            pairs: [{ it: "groß" }, { it: "schlank" }, { it: "blond" }, { it: "kurz" }]
          },
          {
            t: "order",
            tokens: ["Meine", "Schwester", "ist", "klein", "und", "blond"],
            a: ["Meine Schwester ist klein und blond", "Meine Schwester ist blond und klein"]
          },
          {
            t: "trans",
            dir: "toIt",
            a: [
              "Mein Bruder ist groß und hat einen Bart",
              "Mein Bruder ist groß und er hat einen Bart",
              "Mein Bruder ist groß, und er hat einen Bart"
            ]
          },
          {
            t: "cloze",
            text: "Anna {{1}} klein und schlank. Sie {{2}} eine Brille, und ihre Haare {{3}} lang.",
            gaps: [["ist"], ["hat"], ["sind"]]
          },
          { t: "listen", it: "Meine Schwester ist groß und schlank, und ihre Haare sind blond." },
          { t: "speak", it: "Mein Vater ist groß, hat einen Bart und eine Brille." }
        ]
      },
      {
        id: "a1-u08-l3",
        tags: ["g-adjektivdeklination"],
        cefr: "A1",
        titleIt: "Nett oder unfreundlich?",
        grammar: {
          examples: [
            { it: "Wie ist dein Chef?" },
            { it: "Er ist sehr nett." },
            { it: "Meine Freundin ist lustig." },
            { it: "Sie ist nicht faul, sie ist fleißig." },
            { it: "Mein Chef ist nett, aber zu ernst." },
            { it: "Paul ist nicht unfreundlich." }
          ]
        },
        vocab: [
          { it: "nett", ex: "Mein Chef ist nett." },
          { it: "freundlich", ex: "Die Tante ist sehr freundlich." },
          { it: "unfreundlich", ex: "Paul ist nicht unfreundlich." },
          { it: "lustig", ex: "Meine Freundin ist lustig." },
          { it: "ernst", ex: "Mein Chef ist zu ernst." },
          { it: "ruhig", ex: "Mein Bruder ist ruhig." },
          { it: "sympathisch", ex: "Deine Schwester ist sympathisch." },
          { it: "intelligent", ex: "Meine Eltern sind intelligent." },
          { it: "fleißig", ex: "Sie ist nicht faul, sie ist fleißig." },
          { it: "faul", ex: "Er ist leider faul." },
          { it: "schüchtern", ex: "Mein Onkel ist schüchtern." },
          { it: "der Freund", plural: "die Freunde", ex: "Mein Freund ist lustig." }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "mcq", a: 0 },
          { t: "mcq", a: 2 },
          { t: "fill", a: ["nicht"] },
          {
            t: "match",
            pairs: [{ it: "lustig" }, { it: "ernst" }, { it: "faul" }, { it: "schüchtern" }]
          },
          {
            t: "order",
            tokens: ["Mein", "Chef", "ist", "sehr", "nett", "und", "ruhig"],
            a: ["Mein Chef ist sehr nett und ruhig", "Mein Chef ist ruhig und sehr nett"]
          },
          {
            t: "trans",
            dir: "toIt",
            a: [
              "Meine Schwester ist nicht schüchtern, sie ist sehr sympathisch"
            ]
          },
          {
            t: "cloze",
            text: "Wie {{1}} dein Chef? Er {{2}} nett, aber {{3}} ernst.",
            gaps: [["ist"], ["ist"], ["zu"]]
          },
          { t: "listen", it: "Mein Freund ist sehr lustig, aber seine Schwester ist ernst und ruhig." },
          { t: "speak", it: "Meine Freundin ist nicht faul, sie ist sehr fleißig und nett." }
        ]
      },
      {
        id: "a1-u08-l4",
        tags: ["g-komparation"],
        cefr: "A1",
        titleIt: "Größer als du",
        grammar: {
          examples: [
            { it: "Er ist größer als du." },
            { it: "Sie ist so groß wie ich." },
            { it: "Mein Bruder ist älter als meine Schwester." },
            { it: "Ich trinke lieber Tee als Kaffee." },
            { it: "Du sprichst besser Deutsch als ich." },
            { it: "Anna ist nicht so alt wie Paul." }
          ]
        },
        vocab: [
          { it: "als", ex: "Er ist größer als du." },
          { it: "so ... wie", ex: "Sie ist so groß wie ich." },
          { it: "älter", ex: "Mein Bruder ist älter als ich." },
          { it: "jünger", ex: "Meine Schwester ist jünger als ich." },
          { it: "größer", ex: "Er ist größer als du." },
          { it: "kleiner", ex: "Ich bin kleiner als mein Bruder." },
          { it: "besser", ex: "Du sprichst besser Deutsch als ich." },
          { it: "mehr", ex: "Mein Bruder trinkt mehr als ich." },
          { it: "lieber", ex: "Ich trinke lieber Tee als Kaffee." },
          { it: "der Zwilling", plural: "die Zwillinge", ex: "Mein Bruder und ich sind Zwillinge." },
          { it: "der Unterschied", plural: "die Unterschiede", ex: "Was ist der Unterschied?" },
          { it: "gleich", ex: "Wir sind gleich alt." }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "mcq", a: 0 },
          { t: "mcq", a: 1 },
          { t: "fill", a: ["größer"] },
          { t: "fill", a: ["wie"] },
          {
            t: "order",
            tokens: ["Mein", "Bruder", "ist", "älter", "als", "meine", "Schwester"],
            a: ["Mein Bruder ist älter als meine Schwester"]
          },
          {
            t: "trans",
            dir: "toIt",
            a: ["Du sprichst besser Deutsch als ich", "Du sprichst Deutsch besser als ich"]
          },
          {
            t: "cloze",
            text: "Ich bin {{1}} als du, aber du bist {{2}} als ich.",
            gaps: [["jünger"], ["älter"]]
          },
          { t: "listen", it: "Mein Bruder ist älter als ich, aber ich bin größer als er." },
          { t: "speak", it: "Meine Schwester ist so groß wie ich, aber sie ist jünger." }
        ]
      }
    ],
    test: {
      id: "a1-u08-test",
      tags: ["g-possessiv", "g-komparation", "g-adjektivdeklination"],
      cefr: "A1",
      titleIt: "Test: Familie und Freunde",
      exercises: [
        { t: "fill", a: ["meine"] },
        { t: "fill", a: ["meinen"] },
        { t: "fill", a: ["als"] },
        { t: "fill", a: ["wie"] },
        { t: "mcq", a: 1 },
        { t: "mcq", a: 1 },
        { t: "mcq", a: 0 },
        { t: "mcq", a: 1 },
        { t: "listen", it: "Mein Onkel ist älter als mein Vater, aber er ist nicht so ernst." },
        { t: "speak", it: "Meine Schwester ist größer als ich und sehr sympathisch." }
      ]
    }
  },
  {
    id: "a1-u09",
    icon: "🎬",
    titleIt: "Freizeit",
    lessons: [
      {
        id: "a1-u09-l1",
        tags: ["g-praesens", "g-temporalangaben"],
        cefr: "A1",
        titleIt: "Was machst du am Wochenende?",
        grammar: {
          examples: [
            { it: "Was machst du am Wochenende?" },
            { it: "Am Samstag spiele ich Fußball." },
            { it: "Samstags schwimme ich gern." },
            { it: "Am Sonntag wandere ich mit Freunden." },
            { it: "Am Abend koche ich für meine Familie." },
            { it: "Im Winter tanzen wir oft." }
          ]
        },
        vocab: [
          { it: "das Wochenende", plural: "die Wochenenden", ex: "Am Wochenende bin ich zu Hause." },
          { it: "das Hobby", plural: "die Hobbys", ex: "Ich habe viele Hobbys." },
          { it: "das Konzert", plural: "die Konzerte", ex: "Am Samstag besuche ich ein Konzert." },
          { it: "der Film", plural: "die Filme", ex: "Ich sehe gern Filme." },
          { it: "das Buch", plural: "die Bücher", ex: "Ich lese gern Bücher." },
          { it: "der Ausflug", plural: "die Ausflüge", ex: "Am Sonntag machen wir einen Ausflug." },
          { it: "spielen", ex: "Ich spiele gern Fußball." },
          { it: "schwimmen", ex: "Ich schwimme gern." },
          { it: "wandern", ex: "Wir wandern am Sonntag." },
          { it: "kochen", ex: "Ich koche am Sonntag für meine Familie." },
          { it: "tanzen", ex: "Am Abend tanzen wir." },
          { it: "samstags", ex: "Samstags besuche ich meine Großmutter." }
        ],
        exercises: [
          { t: "mcq", a: 0 },
          { t: "mcq", a: 2 },
          { t: "fill", a: ["spiele"] },
          { t: "fill", a: ["am"] },
          {
            t: "match",
            pairs: [{ it: "spielen" }, { it: "schwimmen" }, { it: "wandern" }, { it: "kochen" }]
          },
          {
            t: "trans",
            dir: "toIt",
            a: [
              "Am Samstag spiele ich Fußball und am Sonntag wandere ich",
              "Am Samstag spiele ich Fußball, aber am Sonntag wandere ich"
            ]
          },
          {
            t: "cloze",
            text: "Was {{1}} du am Wochenende? Ich {{2}} Freunde und wir {{3}} ins Kino.",
            gaps: [["machst"], ["treffe"], ["gehen"]]
          },
          {
            t: "dialogue",
            lines: [
              { sp: "A", it: "Hallo! Was machst du am Wochenende?" },
              {
                sp: "TY",
                choices: [
                  "Am Samstag spiele ich Fußball.",
                  "Am Samstag spielst ich Fußball.",
                  "Am Samstag ich spiele Fußball."
                ],
                a: 0
              },
              { sp: "A", it: "Und am Sonntag?" },
              {
                sp: "TY",
                choices: [
                  "Am Sonntag ich wandere.",
                  "Am Sonntag wandere ich.",
                  "Am Sonntag wanderst ich."
                ],
                a: 1
              }
            ]
          },
          { t: "listen", it: "Am Samstag spiele ich Fußball und am Sonntag koche ich für meine Familie." },
          { t: "speak", it: "Am Samstag tanze ich und am Sonntag wandere ich." }
        ]
      },
      {
        id: "a1-u09-l2",
        tags: ["g-es"],
        cefr: "A1",
        titleIt: "Es regnet",
        grammar: {
          examples: [
            { it: "Es regnet." },
            { it: "Im Winter schneit es oft." },
            { it: "Heute ist es sehr kalt." },
            { it: "Heute regnet es nicht." },
            { it: "Wie ist das Wetter?" },
            { it: "Es sind zwanzig Grad." }
          ]
        },
        vocab: [
          { it: "das Wetter", plural: "-", ex: "Wie ist das Wetter heute?" },
          { it: "regnen", ex: "Heute regnet es." },
          { it: "schneien", ex: "Im Winter schneit es oft." },
          { it: "die Sonne", plural: "-", ex: "Die Sonne scheint." },
          { it: "die Wolke", plural: "die Wolken", ex: "Am Himmel sind viele Wolken." },
          { it: "der Wind", plural: "die Winde", ex: "Heute ist der Wind kalt." },
          { it: "kalt", ex: "Es ist kalt." },
          { it: "warm", ex: "Im Sommer ist es warm." },
          { it: "heiß", ex: "Heute ist es sehr heiß." },
          { it: "sonnig", ex: "Morgen ist es sonnig." },
          { it: "windig", ex: "Am Meer ist es oft windig." },
          { it: "der Grad", plural: "die Grad", ex: "Es sind zwanzig Grad." }
        ],
        exercises: [
          { t: "mcq", a: 0 },
          { t: "mcq", a: 1 },
          { t: "fill", a: ["schneit"] },
          { t: "fill", a: ["es"] },
          {
            t: "match",
            pairs: [{ it: "kalt" }, { it: "heiß" }, { it: "sonnig" }, { it: "windig" }]
          },
          {
            t: "order",
            tokens: ["Heute", "ist", "es", "sehr", "kalt"],
            a: ["Heute ist es sehr kalt", "Es ist heute sehr kalt"]
          },
          {
            t: "trans",
            dir: "toIt",
            a: [
              "Heute regnet es und es ist kalt",
              "Es regnet heute und es ist kalt",
              "Heute ist es kalt und es regnet",
              "Es ist heute kalt und es regnet"
            ]
          },
          {
            t: "cloze",
            text: "Wie ist das {{1}} heute? {{2}} regnet und es ist {{3}}.",
            gaps: [["Wetter"], ["Es"], ["kalt"]]
          },
          { t: "listen", it: "Heute scheint die Sonne, aber es ist nicht warm." },
          { t: "speak", it: "Im Winter schneit es oft und es ist sehr kalt." }
        ]
      },
      {
        id: "a1-u09-l3",
        tags: ["g-praesens", "g-adverbien"],
        cefr: "A1",
        titleIt: "Ich lese gerade",
        grammar: {
          examples: [
            { it: "Ich lese gerade ein Buch." },
            { it: "Was machst du gerade?" },
            { it: "Er sieht gerade fern." },
            { it: "Im Moment schreibe ich eine Nachricht." },
            { it: "Wir hören gerade ein Lied." },
            { it: "Sie telefoniert gerade." }
          ]
        },
        vocab: [
          { it: "gerade", ex: "Ich lese gerade." },
          { it: "im Moment", ex: "Im Moment lerne ich Deutsch." },
          { it: "lesen", ex: "Er liest gerade die Zeitung." },
          { it: "hören", ex: "Wir hören gerade ein Lied." },
          { it: "schreiben", ex: "Ich schreibe gerade eine Nachricht." },
          { it: "telefonieren", ex: "Sie telefoniert gerade." },
          { it: "fernsehen", ex: "Er sieht gerade fern." },
          { it: "lernen", ex: "Ich lerne gerade für den Test." },
          { it: "die Zeitung", plural: "die Zeitungen", ex: "Mein Bruder liest die Zeitung." },
          { it: "das Handy", plural: "die Handys", ex: "Mein Handy ist neu." },
          { it: "die Nachricht", plural: "die Nachrichten", ex: "Ich schreibe eine Nachricht." },
          { it: "das Lied", plural: "die Lieder", ex: "Das Lied ist schön." }
        ],
        exercises: [
          { t: "mcq", a: 0 },
          { t: "mcq", a: 1 },
          { t: "fill", a: ["liest"] },
          { t: "fill", a: ["sieht"] },
          { t: "fill", a: ["hören"] },
          {
            t: "order",
            tokens: ["Ich", "schreibe", "gerade", "eine", "Nachricht"],
            a: ["Ich schreibe gerade eine Nachricht", "Gerade schreibe ich eine Nachricht"]
          },
          {
            t: "trans",
            dir: "toIt",
            a: [
              "Mein Bruder liest gerade die Zeitung",
              "Gerade liest mein Bruder die Zeitung"
            ]
          },
          {
            t: "cloze",
            text: "Was {{1}} du gerade? Ich {{2}} gerade ein Buch und mein Bruder {{3}} gerade fern.",
            gaps: [["machst"], ["lese"], ["sieht"]]
          },
          { t: "listen", it: "Ich lese gerade, und mein Bruder sieht im Moment fern." },
          { t: "speak", it: "Ich schreibe gerade eine Nachricht und höre ein Lied." }
        ]
      },
      {
        id: "a1-u09-l4",
        tags: ["g-konnektoren", "g-praep-akk"],
        cefr: "A1",
        titleIt: "Gehen wir ins Kino?",
        grammar: {
          examples: [
            { it: "Gehen wir ins Kino?" },
            { it: "Die Karte ist für dich." },
            { it: "Ich trinke Kaffee ohne Zucker." },
            { it: "Der Film beginnt um acht Uhr." },
            { it: "Wir gehen durch den Park, aber es regnet." },
            { it: "Ich komme nicht, denn ich muss arbeiten." }
          ]
        },
        vocab: [
          { it: "das Kino", plural: "die Kinos", ex: "Gehen wir ins Kino?" },
          { it: "die Karte", plural: "die Karten", ex: "Ich kaufe zwei Karten." },
          { it: "die Idee", plural: "die Ideen", ex: "Das ist eine gute Idee." },
          { it: "der Vorschlag", plural: "die Vorschläge", ex: "Das ist ein guter Vorschlag." },
          { it: "die Lust", plural: "-", ex: "Hast du Lust?" },
          { it: "leider", ex: "Leider habe ich keine Zeit." },
          { it: "für", ex: "Die Karte ist für dich." },
          { it: "ohne", ex: "Ich gehe nicht ohne dich." },
          { it: "um", ex: "Der Film beginnt um acht Uhr." },
          { it: "durch", ex: "Wir gehen durch den Park." },
          { it: "gegen", ex: "Ich bin gegen den Plan." },
          { it: "denn", ex: "Ich komme nicht, denn ich bin müde." }
        ],
        exercises: [
          { t: "mcq", a: 0 },
          { t: "mcq", a: 2 },
          { t: "fill", a: ["für"] },
          { t: "fill", a: ["ohne"] },
          {
            t: "match",
            pairs: [{ it: "für" }, { it: "ohne" }, { it: "durch" }, { it: "gegen" }]
          },
          {
            t: "order",
            tokens: ["Wir", "gehen", "durch", "den", "Park"],
            a: ["Wir gehen durch den Park", "Durch den Park gehen wir"]
          },
          {
            t: "trans",
            dir: "toIt",
            a: ["Ich komme nicht, denn ich muss arbeiten"]
          },
          {
            t: "cloze",
            text: "Gehen wir {{1}} Kino? Leider kann ich nicht, {{2}} ich muss arbeiten. Aber morgen {{3}} ich Zeit.",
            gaps: [["ins", "in das"], ["denn"], ["habe"]]
          },
          { t: "listen", it: "Gehen wir ins Kino? Leider kann ich nicht, denn ich muss arbeiten." },
          { t: "speak", it: "Gute Idee! Gehen wir um acht Uhr ins Kino?" }
        ]
      }
    ],
    test: {
      id: "a1-u09-test",
      tags: ["g-praep-akk", "g-konnektoren", "g-es"],
      cefr: "A1",
      titleIt: "Test: Freizeit",
      exercises: [
        { t: "fill", a: ["es"] },
        { t: "fill", a: ["für"] },
        { t: "fill", a: ["denn"] },
        { t: "fill", a: ["durch"] },
        { t: "mcq", a: 2 },
        { t: "mcq", a: 1 },
        { t: "mcq", a: 0 },
        {
          t: "order",
          tokens: ["Am", "Samstag", "gehen", "wir", "ins", "Kino"],
          a: ["Am Samstag gehen wir ins Kino", "Wir gehen am Samstag ins Kino"]
        },
        { t: "listen", it: "Es regnet und es ist kalt, aber ich gehe ins Kino." },
        { t: "speak", it: "Leider kann ich nicht, denn ich muss um acht Uhr arbeiten." }
      ]
    }
  }
]);
