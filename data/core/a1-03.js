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
            a: ["Meine Schwester ist klein und blond"]
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
            a: ["Mein Chef ist sehr nett und ruhig"]
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
  }
]);
