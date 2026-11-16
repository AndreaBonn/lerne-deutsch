/* ============================================================
   Language-neutral layer: German (de-DE), structure and answer keys.
   Learner-language texts live in data/i18n/<lang>/b1-01.js.
   b1-u01 is a German unit.
   ============================================================ */
LINGUAI.addUnits("B1", [
  {
    id: "b1-u01",
    icon: "💭",
    titleIt: "Wenn ich du wäre",
    lessons: [
      {
        id: "b1-u01-l1",
        tags: ["g-konjunktiv2"],
        cefr: "B1",
        titleIt: "Ich wäre, ich hätte, ich würde",
        grammar: {
          examples: [
            { it: "Ich wäre gern Ärztin." },
            { it: "Wir hätten gern mehr Zeit." },
            { it: "An deiner Stelle würde ich umziehen." },
            { it: "Ich könnte dir morgen helfen." },
            { it: "Das wäre eine gute Idee." },
            { it: "Ich würde gern im Ausland arbeiten." }
          ]
        },
        vocab: [
          { it: "der Wunsch", plural: "die Wünsche", ex: "Mein größter Wunsch ist eine Reise." },
          { it: "der Ratschlag", plural: "die Ratschläge", ex: "Danke für deinen Ratschlag." },
          { it: "die Idee", plural: "die Ideen", ex: "Das ist eine gute Idee." },
          { it: "das Ausland", plural: "-", ex: "Ich würde gern im Ausland leben." },
          { it: "der Traumberuf", plural: "die Traumberufe", ex: "Mein Traumberuf wäre Pilot." },
          { it: "die Reise", plural: "die Reisen", ex: "Die Reise war lang." },
          { it: "das Meer", plural: "die Meere", ex: "Ich würde gern am Meer wohnen." },
          { it: "die Freiheit", plural: "die Freiheiten", ex: "Ich schätze meine Freiheit." },
          { it: "wünschen", ex: "Ich wünsche mir mehr Zeit." },
          { it: "träumen", ex: "Ich träume von einem Haus am Meer." },
          { it: "vorschlagen", ex: "Ich schlage einen Spaziergang vor." },
          { it: "möglich", ex: "Das wäre möglich." }
        ],
        exercises: [
          { t: "conj", verb: "sein", tense: "konj2", persons: [0, 1, 2, 3, 4, 5] },
          { t: "conj", verb: "haben", tense: "konj2", persons: [0, 1, 2, 3, 4, 5] },
          { t: "conj", verb: "werden", tense: "konj2", persons: [0, 1, 2, 3, 4, 5] },
          { t: "mcq", a: 0 },
          { t: "mcq", a: 0 },
          { t: "fill", a: ["hätte"] },
          { t: "fill", a: ["wäre"] },
          {
            t: "cloze",
            text: "Ich {{1}} gern im Ausland {{2}}.",
            gaps: [["würde"], ["arbeiten"]]
          },
          {
            t: "trans",
            dir: "toIt",
            a: [
              "An deiner Stelle würde ich zum Arzt gehen",
              "Ich würde an deiner Stelle zum Arzt gehen"
            ]
          },
          {
            t: "listen",
            it: "Ich wäre gern Pilot und würde gern im Ausland arbeiten. Das wäre mein Traumberuf."
          },
          { t: "speak", it: "An deiner Stelle würde ich eine Reise machen. Das wäre eine gute Idee." }
        ]
      },
      {
        id: "b1-u01-l2",
        tags: ["g-konjunktiv2", "g-konditionalsatz"],
        cefr: "B1",
        titleIt: "Wenn ich Zeit hätte, ...",
        grammar: {
          examples: [
            { it: "Wenn ich Zeit hätte, würde ich mehr reisen." },
            { it: "Wenn ich reich wäre, würde ich ein Haus kaufen." },
            { it: "Ich würde mehr Sport machen, wenn ich mehr Zeit hätte." },
            { it: "Wenn du Hunger hast, kannst du etwas essen." },
            { it: "Wenn es morgen regnet, bleiben wir zu Hause." },
            { it: "Wenn ich du wäre, würde ich ihn anrufen." }
          ]
        },
        vocab: [
          { it: "der Gewinn", plural: "die Gewinne", ex: "Der Gewinn ist hoch." },
          { it: "gewinnen", ex: "Wir haben das Spiel gewonnen." },
          { it: "reich", ex: "Er ist sehr reich." },
          { it: "das Geld", plural: "-", ex: "Ich habe wenig Geld." },
          { it: "sparen", ex: "Ich spare für ein Auto." },
          { it: "verdienen", ex: "Sie verdient gut." },
          { it: "der Urlaub", plural: "die Urlaube", ex: "Ich habe im August Urlaub." },
          { it: "das Haus", plural: "die Häuser", ex: "Das Haus hat einen Garten." },
          { it: "der Garten", plural: "die Gärten", ex: "Der Garten ist groß." },
          { it: "die Weltreise", plural: "die Weltreisen", ex: "Eine Weltreise ist mein Traum." },
          { it: "die Sprache", plural: "die Sprachen", ex: "Ich lerne gern Sprachen." },
          { it: "der Beruf", plural: "die Berufe", ex: "Mein Beruf gefällt mir." }
        ],
        exercises: [
          { t: "mcq", a: 0 },
          { t: "mcq", a: 1 },
          { t: "mcq", a: 0 },
          { t: "multi", a: [0, 1] },
          { t: "fill", a: ["regnet"] },
          { t: "fill", a: ["hätte"] },
          {
            t: "cloze",
            text: "Wenn ich mehr Zeit {{1}}, {{2}} ich öfter ins Kino gehen.",
            gaps: [["hätte"], ["würde"]]
          },
          {
            t: "trans",
            dir: "toIt",
            a: [
              "Wenn ich reich wäre, würde ich ein Haus kaufen",
              "Wenn ich reich wäre, würde ich mir ein Haus kaufen",
              "Ich würde ein Haus kaufen, wenn ich reich wäre",
              "Ich würde mir ein Haus kaufen, wenn ich reich wäre"
            ]
          },
          {
            t: "listen",
            it: "Wenn ich mehr Geld hätte, würde ich eine Weltreise machen. Wenn ich reich wäre, würde ich auch ein Haus mit Garten kaufen."
          },
          { t: "speak", it: "Wenn ich mehr Zeit hätte, würde ich eine neue Sprache lernen." }
        ]
      },
      {
        id: "b1-u01-l3",
        tags: ["g-nebensatz-dass", "g-satz-v2"],
        cefr: "B1",
        titleIt: "Ich finde, dass ... Meiner Meinung nach ...",
        grammar: {
          examples: [
            { it: "Ich finde, dass das eine gute Idee ist." },
            { it: "Ich glaube, dass er recht hat." },
            { it: "Ich denke, er hat recht." },
            { it: "Meiner Meinung nach ist das zu teuer." },
            { it: "Ich bin der Meinung, dass wir mehr Zeit brauchen." },
            { it: "Ich glaube nicht, dass das funktioniert." }
          ]
        },
        vocab: [
          { it: "die Meinung", plural: "die Meinungen", ex: "Das ist meine Meinung." },
          { it: "der Vorschlag", plural: "die Vorschläge", ex: "Ich habe einen Vorschlag." },
          { it: "das Thema", plural: "die Themen", ex: "Das Thema ist interessant." },
          { it: "der Grund", plural: "die Gründe", ex: "Das ist ein guter Grund." },
          { it: "der Vorteil", plural: "die Vorteile", ex: "Das hat viele Vorteile." },
          { it: "der Nachteil", plural: "die Nachteile", ex: "Der Nachteil ist der Preis." },
          { it: "glauben", ex: "Ich glaube, er kommt." },
          { it: "finden", ex: "Ich finde den Vorschlag gut." },
          { it: "zustimmen", ex: "Ich stimme dir zu." },
          { it: "recht haben", ex: "Du hast recht." },
          { it: "einverstanden", ex: "Ich bin einverstanden." },
          { it: "richtig", ex: "Das ist richtig." }
        ],
        exercises: [
          { t: "mcq", a: 0 },
          { t: "mcq", a: 0 },
          { t: "fill", a: ["dass"] },
          { t: "fill", a: ["Meinung"] },
          {
            t: "match",
            pairs: [
              { it: "Ich finde, dass ..." },
              { it: "Meiner Meinung nach ..." },
              { it: "Ich bin einverstanden." },
              { it: "Du hast recht." }
            ]
          },
          {
            t: "cloze",
            text: "Ich glaube nicht, {{1}} das {{2}}.",
            gaps: [["dass"], ["funktioniert", "klappt"]]
          },
          {
            t: "order",
            tokens: ["Ich", "finde,", "dass", "das", "eine", "gute", "Idee", "ist"],
            a: ["Ich finde, dass das eine gute Idee ist"]
          },
          {
            t: "trans",
            dir: "toIt",
            a: [
              "Meiner Meinung nach ist das zu teuer",
              "Meiner Meinung nach ist es zu teuer",
              "Das ist meiner Meinung nach zu teuer",
              "Es ist meiner Meinung nach zu teuer"
            ]
          },
          {
            t: "listen",
            it: "Ich finde, dass das eine gute Idee ist. Meiner Meinung nach brauchen wir mehr Zeit, aber ich glaube nicht, dass das möglich ist."
          },
          { t: "speak", it: "Ich bin der Meinung, dass wir mehr Zeit brauchen." }
        ]
      },
      {
        id: "b1-u01-l4",
        tags: ["g-konzessiv", "g-konnektoren"],
        cefr: "B1",
        titleIt: "Obwohl ..., trotzdem",
        grammar: {
          examples: [
            { it: "Obwohl es regnet, gehen wir spazieren." },
            { it: "Wir gehen spazieren, obwohl es regnet." },
            { it: "Es regnet. Trotzdem gehen wir spazieren." },
            { it: "Obwohl er müde war, hat er noch gearbeitet." },
            { it: "Er war müde, trotzdem hat er noch gearbeitet." },
            { it: "Sie ist krank, aber sie geht trotzdem zur Arbeit." }
          ]
        },
        vocab: [
          { it: "obwohl", ex: "Obwohl es regnet, gehen wir spazieren." },
          { it: "trotzdem", ex: "Es regnet, trotzdem gehen wir spazieren." },
          { it: "der Regen", plural: "-", ex: "Der Regen hört bald auf." },
          { it: "der Spaziergang", plural: "die Spaziergänge", ex: "Der Spaziergang war schön." },
          { it: "das Wetter", plural: "-", ex: "Das Wetter ist schlecht." },
          { it: "anstrengend", ex: "Der Tag war anstrengend." },
          { it: "schwierig", ex: "Die Aufgabe ist schwierig." },
          { it: "die Schwierigkeit", plural: "die Schwierigkeiten", ex: "Wir haben Schwierigkeiten." },
          { it: "der Fehler", plural: "die Fehler", ex: "Ich habe einen Fehler gemacht." },
          { it: "aufgeben", ex: "Ich gebe nicht auf." },
          { it: "weitermachen", ex: "Wir machen weiter." },
          { it: "der Erfolg", plural: "die Erfolge", ex: "Der Erfolg kommt nicht von allein." }
        ],
        exercises: [
          { t: "mcq", a: 0 },
          { t: "mcq", a: 1 },
          { t: "fill", a: ["trotzdem", "dennoch"] },
          { t: "cloze", text: "{{1}} er müde {{2}}, hat er noch gearbeitet.", gaps: [["Obwohl"], ["war"]] },
          {
            t: "match",
            pairs: [{ it: "obwohl" }, { it: "trotzdem" }, { it: "weil" }, { it: "aber" }]
          },
          {
            t: "order",
            tokens: ["Obwohl", "er", "müde", "war,", "hat", "er", "noch", "gearbeitet"],
            a: ["Obwohl er müde war, hat er noch gearbeitet"]
          },
          {
            t: "trans",
            dir: "toIt",
            a: [
              "Obwohl es regnet, gehen wir spazieren",
              "Wir gehen spazieren, obwohl es regnet",
              "Obwohl es regnet, machen wir einen Spaziergang",
              "Wir machen einen Spaziergang, obwohl es regnet"
            ]
          },
          {
            t: "dialogue",
            lines: [
              { sp: "A", it: "Bleibst du morgen zu Hause? Das Wetter ist schlecht." },
              {
                sp: "TY",
                choices: [
                  "Nein, obwohl das Wetter schlecht ist, gehe ich spazieren.",
                  "Nein, obwohl das Wetter schlecht ist, ich gehe spazieren.",
                  "Nein, obwohl das Wetter ist schlecht, gehe ich spazieren."
                ],
                a: 0
              },
              { sp: "A", it: "Aber du bist doch krank!" },
              {
                sp: "TY",
                choices: ["Ja, trotzdem gehe ich.", "Ja, trotzdem ich gehe.", "Ja, trotzdem gehen ich."],
                a: 0
              },
              { sp: "A", it: "Du bist auch müde. Willst du wirklich gehen?" },
              {
                sp: "TY",
                choices: [
                  "Ja, ich gehe trotzdem, aber nur kurz.",
                  "Ja, ich trotzdem gehe, aber nur kurz.",
                  "Ja, trotzdem ich gehe, aber nur kurz."
                ],
                a: 0
              }
            ]
          },
          {
            t: "listen",
            it: "Obwohl das Wetter schlecht ist, gehen wir spazieren. Es ist anstrengend, aber wir machen trotzdem weiter."
          },
          { t: "speak", it: "Obwohl ich müde bin, gebe ich nicht auf." }
        ]
      }
    ],
    test: {
      id: "b1-u01-test",
      tags: ["g-konjunktiv2", "g-konditionalsatz", "g-konzessiv"],
      cefr: "B1",
      titleIt: "Test: Wenn ich du wäre",
      exercises: [
        { t: "conj", verb: "können", tense: "konj2", persons: [0, 1, 2, 3, 4, 5] },
        { t: "conj", verb: "müssen", tense: "konj2", persons: [0, 1, 2, 3, 4, 5] },
        { t: "fill", a: ["würde"] },
        { t: "fill", a: ["wäre"] },
        { t: "fill", a: ["dass"] },
        { t: "fill", a: ["Obwohl"] },
        { t: "mcq", a: 0 },
        { t: "multi", a: [0, 1, 2] },
        {
          t: "listen",
          it: "Wenn ich du wäre, würde ich nicht kündigen. Ich finde, dass die Stelle gut ist, obwohl sie anstrengend ist."
        },
        { t: "speak", it: "Wenn ich mehr Geld hätte, würde ich ein Haus kaufen, obwohl das teuer ist." }
      ]
    }
  }
]);
