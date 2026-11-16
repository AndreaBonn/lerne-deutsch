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
  },
  {
    id: "b1-u02",
    icon: "🔗",
    titleIt: "Woran denkst du?",
    lessons: [
      {
        id: "b1-u02-l1",
        tags: ["g-praep-verben"],
        cefr: "B1",
        titleIt: "Ich warte auf dich",
        grammar: {
          examples: [
            { it: "Ich warte auf dich." },
            { it: "Er denkt oft an seine Familie." },
            { it: "Sie interessiert sich für Musik." },
            { it: "Wir kümmern uns um die Kinder." },
            { it: "Sie hat Angst vor dem Test." },
            { it: "Er träumt von einem Haus am Meer." }
          ]
        },
        vocab: [
          { it: "warten auf", ex: "Ich warte auf den Bus." },
          { it: "denken an", ex: "Ich denke oft an dich." },
          { it: "sich interessieren für", ex: "Sie interessiert sich für Musik." },
          { it: "sich kümmern um", ex: "Wir kümmern uns um die Kinder." },
          { it: "teilnehmen an", ex: "Ich nehme an dem Kurs teil." },
          { it: "träumen von", ex: "Er träumt von einem Haus am Meer." },
          { it: "die Angst", plural: "die Ängste", ex: "Sie hat Angst vor dem Test." },
          { it: "der Kurs", plural: "die Kurse", ex: "Der Kurs beginnt im Herbst." },
          { it: "die Prüfung", plural: "die Prüfungen", ex: "Die Prüfung ist schwer." },
          { it: "die Sorge", plural: "die Sorgen", ex: "Ich mache mir Sorgen um dich." },
          { it: "das Interesse", plural: "die Interessen", ex: "Mein Interesse an Kunst wächst." },
          { it: "der Traum", plural: "die Träume", ex: "Das ist mein Traum." }
        ],
        exercises: [
          { t: "mcq", a: 0 },
          { t: "mcq", a: 0 },
          { t: "fill", a: ["auf"] },
          { t: "fill", a: ["an"] },
          { t: "fill", a: ["um"] },
          { t: "cloze", text: "Sie {{1}} sich {{2}} Musik.", gaps: [["interessiert"], ["für"]] },
          {
            t: "order",
            tokens: ["Ich", "denke", "oft", "an", "dich"],
            a: ["Ich denke oft an dich", "Oft denke ich an dich", "An dich denke ich oft"]
          },
          { t: "trans", dir: "toIt", a: ["Ich warte auf Anna"] },
          {
            t: "listen",
            it: "Ich warte auf dich. Ich denke oft an unseren Urlaub. Sie interessiert sich für Musik und kümmert sich um die Kinder."
          },
          { t: "speak", it: "Ich warte auf dich und denke an die Prüfung." }
        ]
      },
      {
        id: "b1-u02-l2",
        tags: ["g-praep-verben"],
        cefr: "B1",
        titleIt: "Darauf freue ich mich. Worauf?",
        grammar: {
          examples: [
            { it: "Ich freue mich auf das Wochenende." },
            { it: "Ich freue mich darauf." },
            { it: "Worauf freust du dich?" },
            { it: "Er ärgert sich über den Lärm." },
            { it: "Worüber ärgerst du dich?" },
            { it: "Ich freue mich auf ihn. Auf wen wartest du?" }
          ]
        },
        vocab: [
          { it: "sich freuen auf", ex: "Ich freue mich auf das Wochenende." },
          { it: "sich freuen über", ex: "Ich freue mich über das Geschenk." },
          { it: "sich ärgern über", ex: "Er ärgert sich über den Lärm." },
          { it: "sich erinnern an", ex: "Ich erinnere mich an den Sommer." },
          { it: "sprechen über", ex: "Wir sprechen über das Wetter." },
          { it: "das Wochenende", plural: "die Wochenenden", ex: "Am Wochenende besuche ich Freunde." },
          { it: "das Geschenk", plural: "die Geschenke", ex: "Das Geschenk war eine Überraschung." },
          { it: "der Lärm", plural: "-", ex: "Der Lärm stört mich." },
          { it: "die Nachricht", plural: "die Nachrichten", ex: "Ich habe eine gute Nachricht." },
          { it: "das Treffen", plural: "die Treffen", ex: "Ich freue mich auf das Treffen." },
          { it: "das Fest", plural: "die Feste", ex: "Wir freuen uns auf das Fest." },
          { it: "die Überraschung", plural: "die Überraschungen", ex: "Die Überraschung war groß." }
        ],
        exercises: [
          { t: "mcq", a: 0 },
          { t: "mcq", a: 0 },
          { t: "mcq", a: 0 },
          { t: "fill", a: ["Worauf"] },
          { t: "fill", a: ["daran"] },
          {
            t: "cloze",
            text: "{{1}} ärgerst du dich? Ich ärgere mich {{2}} den Lärm.",
            gaps: [["Worüber"], ["über"]]
          },
          {
            t: "match",
            pairs: [
              { it: "Worauf wartest du?" },
              { it: "Ich denke daran." },
              { it: "Auf wen wartest du?" },
              { it: "Ich denke an ihn." }
            ]
          },
          { t: "trans", dir: "toIt", a: ["Ich denke oft daran", "Ich denke häufig daran", "Oft denke ich daran"] },
          {
            t: "listen",
            it: "Worauf freust du dich? Ich freue mich auf das Wochenende. Und worüber hast du dich geärgert? Über den Lärm. Ich ärgere mich oft darüber."
          },
          { t: "speak", it: "Ich freue mich auf das Wochenende und denke schon daran." }
        ]
      },
      {
        id: "b1-u02-l3",
        tags: ["g-relativsatz"],
        cefr: "B1",
        titleIt: "Das Buch, das ich gelesen habe",
        grammar: {
          examples: [
            { it: "Der Mann, der dort steht, ist mein Lehrer." },
            { it: "Das Buch, das ich gelesen habe, ist spannend." },
            { it: "Die Frau, der ich geholfen habe, heißt Eva." },
            { it: "Die Kinder, denen ich das Buch gebe, sind sieben Jahre alt." },
            { it: "Der Mann, mit dem ich spreche, ist mein Chef." },
            { it: "Die Freundin, auf die ich warte, kommt aus Rom." }
          ]
        },
        vocab: [
          { it: "der Roman", plural: "die Romane", ex: "Der Roman ist sehr spannend." },
          { it: "der Film", plural: "die Filme", ex: "Der Film war lang." },
          { it: "der Nachbar", plural: "die Nachbarn", ex: "Mein Nachbar ist nett." },
          { it: "die Kollegin", plural: "die Kolleginnen", ex: "Meine Kollegin kommt aus Wien." },
          { it: "der Schlüssel", plural: "die Schlüssel", ex: "Ich habe meinen Schlüssel verloren." },
          { it: "die Tasche", plural: "die Taschen", ex: "Die Tasche ist neu." },
          { it: "das Handy", plural: "die Handys", ex: "Mein Handy liegt auf dem Tisch." },
          { it: "die Brille", plural: "die Brillen", ex: "Ich brauche meine Brille." },
          { it: "das Geschäft", plural: "die Geschäfte", ex: "Das Geschäft ist am Sonntag zu." },
          { it: "spannend", ex: "Das Buch ist spannend." },
          { it: "verlieren", ex: "Ich habe mein Handy verloren." },
          { it: "empfehlen", ex: "Ich empfehle dir diesen Film." }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "mcq", a: 0 },
          { t: "fill", a: ["das"] },
          { t: "fill", a: ["die"] },
          { t: "fill", a: ["denen"] },
          {
            t: "cloze",
            text: "Das ist der Schlüssel, {{1}} ich {{2}} habe.",
            gaps: [["den"], ["verloren"]]
          },
          {
            t: "order",
            tokens: ["Das", "ist", "die", "Tasche,", "die", "ich", "gestern", "gekauft", "habe"],
            a: ["Das ist die Tasche, die ich gestern gekauft habe"]
          },
          {
            t: "trans",
            dir: "toIt",
            a: ["Der Film, den wir gesehen haben, war lang"]
          },
          {
            t: "listen",
            it: "Das ist das Buch, das ich gelesen habe. Es ist ein spannender Roman. Die Kollegin, der ich den Roman empfohlen habe, findet ihn auch spannend."
          },
          { t: "speak", it: "Der Schlüssel, den ich verloren habe, war in meiner Tasche." }
        ]
      },
      {
        id: "b1-u02-l4",
        tags: ["g-indefinitpron"],
        cefr: "B1",
        titleIt: "jemand, niemand, jeder",
        grammar: {
          examples: [
            { it: "Hat jemand meinen Schlüssel gesehen?" },
            { it: "Ich habe niemanden gesehen." },
            { it: "Ich habe jemandem geholfen." },
            { it: "Jeder weiß das." },
            { it: "Alle sind da." },
            { it: "Ich habe nichts gehört." }
          ]
        },
        vocab: [
          { it: "jemand", ex: "Ist jemand zu Hause?" },
          { it: "niemand", ex: "Niemand hat angerufen." },
          { it: "jeder", ex: "Jeder hat seine Meinung." },
          { it: "alle", ex: "Alle sind gekommen." },
          { it: "etwas", ex: "Ich möchte dir etwas zeigen." },
          { it: "nichts", ex: "Ich habe nichts gesehen." },
          { it: "die Person", plural: "die Personen", ex: "Zwei Personen warten draußen." },
          { it: "der Mensch", plural: "die Menschen", ex: "Viele Menschen sind hier." },
          { it: "das Problem", plural: "die Probleme", ex: "Das ist kein Problem." },
          { it: "die Frage", plural: "die Fragen", ex: "Hat jemand eine Frage?" },
          { it: "die Antwort", plural: "die Antworten", ex: "Ich kenne die Antwort nicht." },
          { it: "das Geheimnis", plural: "die Geheimnisse", ex: "Das bleibt unser Geheimnis." }
        ],
        exercises: [
          { t: "mcq", a: 0 },
          { t: "mcq", a: 0 },
          { t: "multi", a: [0, 1, 2] },
          { t: "fill", a: ["niemanden", "niemand"] },
          { t: "fill", a: ["jemandem", "jemand"] },
          { t: "fill", a: ["Jeder"] },
          { t: "fill", a: ["nichts"] },
          {
            t: "cloze",
            text: "Ich habe {{1}} gesehen und {{2}} gehört.",
            gaps: [["niemanden", "niemand"], ["nichts"]]
          },
          {
            t: "listen",
            it: "Hat jemand meine Brille gesehen? Nein, niemand hat sie gesehen. Jeder sucht sie, aber wir finden nichts."
          },
          { t: "speak", it: "Ich habe niemanden gesehen und nichts gehört." }
        ]
      }
    ],
    test: {
      id: "b1-u02-test",
      tags: ["g-praep-verben", "g-relativsatz", "g-indefinitpron"],
      cefr: "B1",
      titleIt: "Test: Woran denkst du?",
      exercises: [
        { t: "fill", a: ["auf"] },
        { t: "fill", a: ["vor"] },
        { t: "fill", a: ["Woran"] },
        { t: "fill", a: ["den"] },
        { t: "fill", a: ["das"] },
        { t: "fill", a: ["niemanden", "niemand"] },
        { t: "mcq", a: 0 },
        { t: "mcq", a: 0 },
        {
          t: "listen",
          it: "Ich warte auf dich. Die Frau, die dort steht, hat Angst vor dem Test. Niemand hilft ihr."
        },
        { t: "speak", it: "Ich denke oft an das Buch, das ich gelesen habe." }
      ]
    }
  },
  {
    id: "b1-u03",
    icon: "🏛️",
    titleIt: "Ämter und Verträge",
    lessons: [
      {
        id: "b1-u03-l1",
        tags: ["g-passiv", "g-register"],
        cefr: "B1",
        titleIt: "Die Anmeldung",
        grammar: {
          examples: [
            { it: "Das Formular wird ausgefüllt." },
            { it: "Der Ausweis wird geprüft." },
            { it: "Die Anmeldung wurde gestern bestätigt." },
            { it: "Termine werden online vergeben." },
            { it: "Die Bescheinigung wurde sofort ausgestellt." },
            { it: "Das Formular wird von der Beamtin geprüft." }
          ]
        },
        vocab: [
          { it: "die Anmeldung", plural: "die Anmeldungen", ex: "Die Anmeldung dauert zehn Minuten." },
          { it: "das Bürgeramt", plural: "die Bürgerämter", ex: "Das Bürgeramt öffnet um acht Uhr." },
          { it: "die Steuer-ID", plural: "die Steuer-IDs", ex: "Die Steuer-ID kommt per Post." },
          { it: "der Termin", plural: "die Termine", ex: "Ich habe einen Termin um zehn." },
          { it: "das Formular", plural: "die Formulare", ex: "Das Formular liegt am Schalter." },
          { it: "die Bescheinigung", plural: "die Bescheinigungen", ex: "Die Bescheinigung bekommen Sie sofort." },
          { it: "der Ausweis", plural: "die Ausweise", ex: "Bitte zeigen Sie Ihren Ausweis." },
          { it: "der Schalter", plural: "die Schalter", ex: "Am Schalter wird geholfen." },
          { it: "anmelden", ex: "Ich möchte mich anmelden." },
          { it: "ausfüllen", ex: "Bitte füllen Sie das Formular aus." },
          { it: "abgeben", ex: "Sie geben das Formular am Schalter ab." },
          { it: "ausstellen", ex: "Die Bescheinigung wird ausgestellt." }
        ],
        exercises: [
          { t: "mcq", a: 0 },
          { t: "mcq", a: 0 },
          { t: "mcq", a: 0 },
          { t: "fill", a: ["wird"] },
          { t: "fill", a: ["wurde"] },
          { t: "cloze", text: "Das Formular {{1}} am Schalter {{2}}. (abgeben)", gaps: [["wird"], ["abgegeben"]] },
          {
            t: "match",
            pairs: [
              { it: "Das Formular wird ausgefüllt." },
              { it: "Der Ausweis wurde geprüft." },
              { it: "Der Termin wird vergeben." },
              { it: "Die Bescheinigung wurde ausgestellt." }
            ]
          },
          { t: "trans", dir: "toIt", a: ["Der Antrag wird geprüft", "Der Antrag wird überprüft"] },
          {
            t: "listen",
            it: "Guten Tag, ich möchte mich anmelden. Das Formular wird am Schalter abgegeben. Der Ausweis wird geprüft, und die Bescheinigung wird gleich ausgestellt."
          },
          { t: "speak", it: "Guten Tag, ich möchte mich anmelden. Das Formular wurde schon ausgefüllt." }
        ]
      },
      {
        id: "b1-u03-l2",
        tags: ["g-genitiv", "g-register"],
        cefr: "B1",
        titleIt: "Bank und Mietvertrag",
        grammar: {
          examples: [
            { it: "Das ist der Vertrag des Vermieters." },
            { it: "Die Höhe der Miete steht im Vertrag." },
            { it: "Wegen des Umzugs brauche ich ein neues Konto." },
            { it: "Während des Urlaubs habe ich viel gelesen." },
            { it: "Innerhalb einer Woche bekommen Sie Ihre Karte." },
            { it: "Annas Konto ist bei einer anderen Bank." }
          ]
        },
        vocab: [
          { it: "der Mietvertrag", plural: "die Mietverträge", ex: "Der Mietvertrag ist unterschrieben." },
          { it: "das Konto", plural: "die Konten", ex: "Ich eröffne ein Konto." },
          { it: "die Miete", plural: "die Mieten", ex: "Die Miete beträgt 800 Euro." },
          { it: "der Vermieter", plural: "die Vermieter", ex: "Der Vermieter wohnt im Haus." },
          { it: "der Mieter", plural: "die Mieter", ex: "Die Mieter zahlen am Ersten." },
          { it: "die Kaution", plural: "die Kautionen", ex: "Die Kaution wird zurückgezahlt." },
          { it: "die Kündigung", plural: "die Kündigungen", ex: "Die Kündigung muss schriftlich sein." },
          { it: "die Frist", plural: "die Fristen", ex: "Die Frist endet am Freitag." },
          { it: "die Überweisung", plural: "die Überweisungen", ex: "Die Überweisung dauert einen Tag." },
          { it: "eröffnen", ex: "Ich möchte ein Konto eröffnen." },
          { it: "unterschreiben", ex: "Bitte unterschreiben Sie hier." },
          { it: "überweisen", ex: "Ich überweise die Miete am Ersten." }
        ],
        exercises: [
          { t: "mcq", a: 0 },
          { t: "fill", a: ["des"] },
          { t: "fill", a: ["der"] },
          { t: "cloze", text: "{{1}} des Urlaubs habe ich viel {{2}}. (lesen)", gaps: [["Während"], ["gelesen"]] },
          {
            t: "match",
            pairs: [
              { it: "das Auto des Vaters" },
              { it: "wegen des Wetters" },
              { it: "während des Urlaubs" },
              { it: "innerhalb einer Woche" }
            ]
          },
          {
            t: "order",
            tokens: ["Wegen", "des", "Umzugs", "brauche", "ich", "ein", "neues", "Konto"],
            a: ["Wegen des Umzugs brauche ich ein neues Konto", "Ich brauche wegen des Umzugs ein neues Konto"]
          },
          {
            t: "trans",
            dir: "toIt",
            a: [
              "Das ist das Konto meines Bruders",
              "Das ist das Konto von meinem Bruder"
            ]
          },
          {
            t: "dialogue",
            lines: [
              { sp: "A", it: "Guten Tag. Was kann ich für Sie tun?" },
              {
                sp: "TY",
                choices: [
                  "Guten Tag, ich möchte ein Konto eröffnen.",
                  "Guten Tag, ich möchte ein Konto eröffnet.",
                  "Guten Tag, ich möchte eröffnen ein Konto."
                ],
                a: 0
              },
              { sp: "A", it: "Gern. Haben Sie auch eine Kopie des Mietvertrags dabei?" },
              {
                sp: "TY",
                choices: [
                  "Natürlich. Wegen des Umzugs habe ich alles dabei.",
                  "Natürlich. Wegen der Umzug habe ich alles dabei.",
                  "Natürlich. Wegen des Umzugs ich habe alles dabei."
                ],
                a: 0
              },
              { sp: "A", it: "Wunderbar. Innerhalb einer Woche bekommen Sie Ihre Karte." },
              {
                sp: "TY",
                choices: [
                  "Wird die Karte per Post geschickt?",
                  "Wird die Karte per Post schicken?",
                  "Die Karte wird per Post geschickt wird?"
                ],
                a: 0
              }
            ]
          },
          {
            t: "listen",
            it: "Guten Tag, ich möchte ein Konto eröffnen. Hier ist der Mietvertrag. Wegen des Umzugs brauche ich ein neues Konto. Innerhalb einer Woche bekomme ich meine Karte."
          },
          { t: "speak", it: "Die Miete wird am Ersten des Monats überwiesen." }
        ]
      },
      {
        id: "b1-u03-l3",
        tags: ["g-nebensatz-final", "g-konjunktiv2"],
        cefr: "B1",
        titleIt: "Ich beschwere mich, damit ...",
        grammar: {
          examples: [
            { it: "Ich rufe an, um mich zu beschweren." },
            { it: "Ich gehe zum Bürgeramt, um mich anzumelden." },
            { it: "Ich schicke ein Foto, damit er den Schaden sieht." },
            { it: "Könnten Sie das bitte reparieren?" },
            { it: "Ich würde gern mit Ihrem Chef sprechen." },
            { it: "Wir hätten gern eine schnelle Lösung." }
          ]
        },
        vocab: [
          { it: "die Beschwerde", plural: "die Beschwerden", ex: "Meine Beschwerde ist berechtigt." },
          { it: "der Mangel", plural: "die Mängel", ex: "Der Mangel wurde nicht behoben." },
          { it: "der Schaden", plural: "die Schäden", ex: "Der Schaden ist groß." },
          { it: "die Reparatur", plural: "die Reparaturen", ex: "Die Reparatur dauert zwei Tage." },
          { it: "der Handwerker", plural: "die Handwerker", ex: "Der Handwerker kommt morgen." },
          { it: "die Rechnung", plural: "die Rechnungen", ex: "Die Rechnung ist falsch." },
          { it: "die Garantie", plural: "die Garantien", ex: "Das Gerät hat zwei Jahre Garantie." },
          { it: "der Ersatz", plural: "-", ex: "Ich möchte Ersatz für das Gerät." },
          { it: "sich beschweren", ex: "Ich beschwere mich über die Heizung." },
          { it: "reparieren", ex: "Der Handwerker repariert die Heizung." },
          { it: "ersetzen", ex: "Die Firma ersetzt das Gerät." },
          { it: "dringend", ex: "Das ist dringend." }
        ],
        exercises: [
          { t: "mcq", a: 0 },
          { t: "mcq", a: 0 },
          { t: "fill", a: ["damit"] },
          { t: "fill", a: ["zu"] },
          { t: "cloze", text: "Ich gehe zum Bürgeramt, {{1}} mich {{2}}.", gaps: [["um"], ["anzumelden"]] },
          {
            t: "match",
            pairs: [{ it: "um ... zu" }, { it: "damit" }, { it: "weil" }, { it: "für + Nomen" }]
          },
          {
            t: "order",
            tokens: ["Ich", "schicke", "ein", "Foto,", "damit", "er", "den", "Schaden", "sieht"],
            a: ["Ich schicke ein Foto, damit er den Schaden sieht"]
          },
          { t: "trans", dir: "toIt", a: ["Ich rufe an, um mich zu beschweren"] },
          {
            t: "listen",
            it: "Guten Tag, ich rufe an, um mich zu beschweren. Die Heizung ist kaputt. Ich schicke ein Foto, damit Sie den Schaden sehen. Könnten Sie bitte schnell jemanden schicken?"
          },
          { t: "speak", it: "Ich würde gern mit Ihrem Chef sprechen, um mich zu beschweren." }
        ]
      },
      {
        id: "b1-u03-l4",
        tags: ["g-passiv", "g-genitiv"],
        cefr: "B1",
        titleIt: "Der Arbeitsvertrag",
        grammar: {
          examples: [
            { it: "Der Vertrag wurde von beiden Seiten unterschrieben." },
            { it: "Das Gehalt wird am Ende des Monats bezahlt." },
            { it: "Die Probezeit des Arbeitnehmers dauert sechs Monate." },
            { it: "Die Arbeitszeit wird im Vertrag genannt." },
            { it: "Der Arbeitnehmer wurde im Mai eingestellt." },
            { it: "Die Kündigungsfrist des Vertrags beträgt vier Wochen." }
          ]
        },
        vocab: [
          { it: "der Arbeitsvertrag", plural: "die Arbeitsverträge", ex: "Der Arbeitsvertrag hat zehn Seiten." },
          { it: "das Gehalt", plural: "die Gehälter", ex: "Das Gehalt steht im Vertrag." },
          { it: "die Probezeit", plural: "die Probezeiten", ex: "Die Probezeit dauert sechs Monate." },
          { it: "der Arbeitgeber", plural: "die Arbeitgeber", ex: "Der Arbeitgeber zahlt das Gehalt." },
          { it: "der Arbeitnehmer", plural: "die Arbeitnehmer", ex: "Der Arbeitnehmer hat Urlaub." },
          { it: "die Kündigungsfrist", plural: "die Kündigungsfristen", ex: "Die Kündigungsfrist beträgt vier Wochen." },
          { it: "die Arbeitszeit", plural: "die Arbeitszeiten", ex: "Die Arbeitszeit beträgt 40 Stunden." },
          { it: "die Stelle", plural: "die Stellen", ex: "Ich habe eine neue Stelle." },
          { it: "kündigen", ex: "Er kündigt zum Monatsende." },
          { it: "einstellen", ex: "Die Firma stellt neue Mitarbeiter ein." },
          { it: "bezahlen", ex: "Das Gehalt wird pünktlich bezahlt." },
          { it: "befristet", ex: "Der Vertrag ist befristet." }
        ],
        exercises: [
          { t: "mcq", a: 0 },
          { t: "mcq", a: 0 },
          { t: "mcq", a: 0 },
          { t: "fill", a: ["des"] },
          { t: "cloze", text: "Der Arbeitnehmer {{1}} im Mai {{2}}. (einstellen)", gaps: [["wurde"], ["eingestellt"]] },
          {
            t: "match",
            pairs: [
              { it: "die Probezeit" },
              { it: "die Kündigungsfrist" },
              { it: "der Arbeitgeber" },
              { it: "das Gehalt" }
            ]
          },
          {
            t: "order",
            tokens: ["Die", "Probezeit", "des", "Arbeitnehmers", "dauert", "sechs", "Monate"],
            a: ["Die Probezeit des Arbeitnehmers dauert sechs Monate"]
          },
          {
            t: "trans",
            dir: "toIt",
            a: [
              "Das Gehalt wird am Ende des Monats bezahlt",
              "Das Gehalt wird am Monatsende bezahlt",
              "Das Gehalt wird Ende des Monats bezahlt",
              "Am Ende des Monats wird das Gehalt bezahlt",
              "Am Monatsende wird das Gehalt bezahlt",
              "Das Gehalt wird am Ende des Monats ausgezahlt",
              "Das Gehalt wird am Monatsende ausgezahlt"
            ]
          },
          {
            t: "listen",
            it: "Der Arbeitsvertrag wurde gestern von beiden Seiten unterschrieben. Die Probezeit dauert sechs Monate, und das Gehalt wird am Ende des Monats bezahlt. Die Kündigungsfrist des Vertrags beträgt vier Wochen."
          },
          { t: "speak", it: "Das Gehalt des Arbeitnehmers wird am Monatsende bezahlt." }
        ]
      }
    ],
    test: {
      id: "b1-u03-test",
      tags: ["g-passiv", "g-genitiv", "g-nebensatz-final"],
      cefr: "B1",
      titleIt: "Test: Ämter und Verträge",
      exercises: [
        { t: "fill", a: ["wird"] },
        { t: "fill", a: ["wurde"] },
        { t: "fill", a: ["der"] },
        { t: "fill", a: ["damit"] },
        { t: "mcq", a: 0 },
        { t: "mcq", a: 0 },
        { t: "mcq", a: 0 },
        {
          t: "match",
          pairs: [
            { it: "Das Formular wird geprüft." },
            { it: "wegen des Wetters" },
            { it: "um ... zu" },
            { it: "damit" }
          ]
        },
        {
          t: "listen",
          it: "Das Formular wird am Schalter abgegeben. Wegen des Umzugs brauche ich ein Konto. Ich rufe an, damit jemand die Heizung repariert."
        },
        { t: "speak", it: "Der Mietvertrag wurde unterschrieben, und die Kaution wird überwiesen." }
      ]
    }
  },
  {
    id: "b1-u04",
    icon: "📰",
    titleIt: "Meinungen und Medien",
    lessons: [
      {
        id: "b1-u04-l1",
        tags: ["g-nebensatz-dass", "g-perfekt"],
        cefr: "B1",
        titleIt: "Sie hat gesagt, dass ...",
        grammar: {
          examples: [
            { it: "Anna hat gesagt, dass sie keine Zeit hat." },
            { it: "Tom erzählt, dass er morgen kommt." },
            { it: "Die Meldung sagt, dass die Preise steigen." },
            { it: "Sie hat gefragt, ob ich mitkomme." },
            { it: "Er hat behauptet, dass er nichts gesehen hat." },
            { it: "Sie hat gesagt, dass ich bald kommen soll." }
          ]
        },
        vocab: [
          { it: "die Nachricht", plural: "die Nachrichten", ex: "Die Nachricht kam am Abend." },
          { it: "die Meldung", plural: "die Meldungen", ex: "Die Meldung steht auf der ersten Seite." },
          { it: "die Behauptung", plural: "die Behauptungen", ex: "Die Behauptung ist nicht bewiesen." },
          { it: "die Aussage", plural: "die Aussagen", ex: "Seine Aussage war klar." },
          { it: "der Bericht", plural: "die Berichte", ex: "Der Bericht ist sehr lang." },
          { it: "das Gerücht", plural: "die Gerüchte", ex: "Das ist nur ein Gerücht." },
          { it: "die Antwort", plural: "die Antworten", ex: "Die Antwort kommt morgen." },
          { it: "die Frage", plural: "die Fragen", ex: "Ich habe eine Frage." },
          { it: "erzählen", ex: "Sie erzählt von ihrer Reise." },
          { it: "behaupten", ex: "Er behauptet, er wusste nichts." },
          { it: "berichten", ex: "Die Zeitung berichtet über den Unfall." },
          { it: "antworten", ex: "Er antwortet nicht sofort." }
        ],
        exercises: [
          { t: "mcq", a: 0 },
          { t: "fill", a: ["dass"] },
          { t: "fill", a: ["ob"] },
          { t: "fill", a: ["er"] },
          { t: "fill", a: ["erzählt"] },
          { t: "cloze", text: "Die Meldung {{1}}, dass die Preise {{2}}. (sagen / steigen)", gaps: [["sagt"], ["steigen"]] },
          {
            t: "match",
            pairs: [
              { it: "Er behauptet, dass er unschuldig ist." },
              { it: "Sie hat gefragt, ob ich komme." },
              { it: "Die Meldung sagt, dass es schneit." },
              { it: "Tom erzählt, dass er umzieht." }
            ]
          },
          {
            t: "trans",
            dir: "toIt",
            a: [
              "Anna hat gesagt, dass sie keine Zeit hat",
              "Anna hat gesagt, sie hat keine Zeit"
            ]
          },
          {
            t: "listen",
            it: "Hast du die Nachricht schon gehört? Anna hat erzählt, dass sie umzieht. Sie hat gesagt, dass die Wohnung sehr groß ist, und sie hat gefragt, ob wir ihr helfen."
          },
          { t: "speak", it: "Mein Kollege hat erzählt, dass er morgen früh kommt." }
        ]
      },
      {
        id: "b1-u04-l2",
        tags: ["g-praeteritum", "g-plusquamperfekt", "g-nebensatz-temporal"],
        cefr: "B1",
        titleIt: "Einen Artikel lesen",
        grammar: {
          examples: [
            { it: "Der Journalist schrieb den Artikel am Abend." },
            { it: "Die Zeitung erschien jeden Morgen." },
            { it: "Nachdem der Minister gesprochen hatte, gingen die Gäste nach Hause." },
            { it: "Bevor die Zeitung den Artikel veröffentlichte, prüfte die Redaktion die Quelle." },
            { it: "Er hatte lange recherchiert, bevor er schrieb." },
            { it: "Die Nachricht stand in der Zeitung, aber niemand hatte sie gelesen." }
          ]
        },
        vocab: [
          { it: "der Artikel", plural: "die Artikel", ex: "Der Artikel steht auf Seite drei." },
          { it: "die Zeitung", plural: "die Zeitungen", ex: "Er liest jeden Morgen die Zeitung." },
          { it: "die Schlagzeile", plural: "die Schlagzeilen", ex: "Die Schlagzeile war sehr groß." },
          { it: "die Überschrift", plural: "die Überschriften", ex: "Die Überschrift macht neugierig." },
          { it: "der Journalist", plural: "die Journalisten", ex: "Der Journalist schreibt einen Bericht." },
          { it: "die Quelle", plural: "die Quellen", ex: "Die Quelle ist nicht bekannt." },
          { it: "der Leser", plural: "die Leser", ex: "Viele Leser schreiben an die Zeitung." },
          { it: "die Redaktion", plural: "die Redaktionen", ex: "Die Redaktion sitzt in der Stadt." },
          { it: "veröffentlichen", ex: "Die Zeitung veröffentlicht den Text." },
          { it: "erscheinen", ex: "Die Zeitung erscheint täglich." },
          { it: "recherchieren", ex: "Er recherchiert für seinen Artikel." },
          { it: "melden", ex: "Das Radio meldet einen Unfall." }
        ],
        exercises: [
          { t: "mcq", a: 0 },
          { t: "mcq", a: 0 },
          { t: "mcq", a: 0 },
          { t: "fill", a: ["erschien"] },
          { t: "fill", a: ["schrieb"] },
          {
            t: "cloze",
            text: "Nachdem der Minister {{1}} {{2}}, gingen die Gäste nach Hause. (sprechen)",
            gaps: [["gesprochen"], ["hatte"]]
          },
          {
            t: "match",
            pairs: [
              { it: "Sie las die Zeitung." },
              { it: "Er schrieb einen Bericht." },
              { it: "Der Artikel erschien gestern." },
              { it: "Die Redaktion prüfte die Quelle." }
            ]
          },
          {
            t: "trans",
            dir: "toIt",
            a: [
              "Der Journalist schrieb den Artikel gestern Abend",
              "Der Journalist schrieb gestern Abend den Artikel",
              "Gestern Abend schrieb der Journalist den Artikel",
              "Der Journalist hat den Artikel gestern Abend geschrieben",
              "Der Journalist hat gestern Abend den Artikel geschrieben",
              "Gestern Abend hat der Journalist den Artikel geschrieben"
            ]
          },
          {
            t: "listen",
            it: "Die Zeitung veröffentlichte den Artikel am Montag. Nachdem die Redaktion die Quelle geprüft hatte, schrieb der Journalist die Überschrift. Viele Leser lasen den Artikel schon am Morgen."
          },
          { t: "speak", it: "Nachdem der Journalist den Bericht geschrieben hatte, ging er nach Hause." }
        ]
      },
      {
        id: "b1-u04-l3",
        tags: ["g-konnektoren"],
        cefr: "B1",
        titleIt: "zwar ... aber, sowohl ... als auch",
        grammar: {
          examples: [
            { it: "Die Sendung ist zwar lang, aber sie ist interessant." },
            { it: "Zwar ist das Programm gut, aber ich habe wenig Zeit." },
            { it: "Der Sender bringt sowohl Nachrichten als auch Musik." },
            { it: "Ich höre sowohl Radio als auch Podcasts." },
            { it: "Sowohl Anna als auch Tom hören den Podcast." },
            { it: "Er hat zwar nicht viel Zeit, aber er hört jeden Tag einen Podcast." }
          ]
        },
        vocab: [
          { it: "das Radio", plural: "die Radios", ex: "Das Radio läuft den ganzen Tag." },
          { it: "die Sendung", plural: "die Sendungen", ex: "Die Sendung beginnt um acht." },
          { it: "der Sender", plural: "die Sender", ex: "Dieser Sender spielt viel Musik." },
          { it: "das Programm", plural: "die Programme", ex: "Das Programm ist abends besser." },
          { it: "der Podcast", plural: "die Podcasts", ex: "Ich höre den Podcast im Zug." },
          { it: "das Interview", plural: "die Interviews", ex: "Das Interview dauert zehn Minuten." },
          { it: "der Kommentar", plural: "die Kommentare", ex: "Der Kommentar steht unter dem Text." },
          { it: "der Hörer", plural: "die Hörer", ex: "Die Hörer rufen im Studio an." },
          { it: "zuhören", ex: "Ich höre dir gern zu." },
          { it: "einschalten", ex: "Ich schalte das Radio ein." },
          { it: "ausschalten", ex: "Bitte schalte den Fernseher aus." },
          { it: "abonnieren", ex: "Ich abonniere den Podcast." }
        ],
        exercises: [
          { t: "mcq", a: 0 },
          { t: "mcq", a: 0 },
          { t: "mcq", a: 0 },
          { t: "fill", a: ["zwar"] },
          { t: "fill", a: ["als"] },
          { t: "cloze", text: "Die Sendung ist {{1}} kurz, {{2}} sie ist sehr interessant.", gaps: [["zwar"], ["aber"]] },
          {
            t: "match",
            pairs: [
              { it: "Das Interview ist zwar kurz, aber gut." },
              { it: "Ich höre sowohl Radio als auch Podcasts." },
              { it: "Der Podcast läuft jeden Montag." },
              { it: "Die Hörer schalten das Radio ein." }
            ]
          },
          {
            t: "order",
            tokens: ["Das", "Programm", "ist", "zwar", "lang,", "aber", "es", "ist", "interessant"],
            a: ["Das Programm ist zwar lang, aber es ist interessant"]
          },
          {
            t: "listen",
            it: "Ich höre jeden Morgen Radio. Der Sender bringt sowohl Nachrichten als auch Musik. Die Sendung ist zwar lang, aber sie ist wirklich interessant."
          },
          { t: "speak", it: "Ich höre sowohl Radio als auch Podcasts, aber nicht jeden Tag." }
        ]
      },
      {
        id: "b1-u04-l4",
        tags: ["g-adjektivdeklination", "g-konnektoren"],
        cefr: "B1",
        titleIt: "Seine Meinung vertreten",
        grammar: {
          examples: [
            { it: "Das ist ein guter Standpunkt." },
            { it: "Ich habe ein gutes Argument." },
            { it: "Mit dem guten Argument überzeugt sie alle." },
            { it: "Er schreibt einen langen Beitrag." },
            { it: "Ich lese gern interessante Kommentare." },
            { it: "Sie vertritt zwar eine klare Ansicht, aber sie hört auch zu." }
          ]
        },
        vocab: [
          { it: "die Ansicht", plural: "die Ansichten", ex: "Das ist meine Ansicht." },
          { it: "das Argument", plural: "die Argumente", ex: "Das Argument überzeugt mich." },
          { it: "der Standpunkt", plural: "die Standpunkte", ex: "Er hat einen klaren Standpunkt." },
          { it: "die Diskussion", plural: "die Diskussionen", ex: "Die Diskussion dauert lange." },
          { it: "das Beispiel", plural: "die Beispiele", ex: "Ich nenne ein Beispiel." },
          { it: "der Vorteil", plural: "die Vorteile", ex: "Das hat viele Vorteile." },
          { it: "der Nachteil", plural: "die Nachteile", ex: "Ein Nachteil ist der Preis." },
          { it: "der Beitrag", plural: "die Beiträge", ex: "Ihr Beitrag war sehr gut." },
          { it: "überzeugen", ex: "Er überzeugt mich nicht." },
          { it: "widersprechen", ex: "Da muss ich widersprechen." },
          { it: "begründen", ex: "Bitte begründe deine Meinung." },
          { it: "zustimmen", ex: "Ich stimme dir zu." }
        ],
        exercises: [
          { t: "mcq", a: 0 },
          { t: "mcq", a: 0 },
          { t: "fill", a: ["interessanten"] },
          { t: "fill", a: ["starkes"] },
          { t: "cloze", text: "Mit dem {{1}} Beispiel {{2}} sie alle. (gut / überzeugen)", gaps: [["guten"], ["überzeugt"]] },
          {
            t: "match",
            pairs: [
              { it: "Ich bin der Meinung, dass ..." },
              { it: "Da muss ich widersprechen." },
              { it: "Ich stimme dir zu." },
              { it: "Das ist ein starkes Argument." }
            ]
          },
          {
            t: "order",
            tokens: ["Ich", "bin", "der", "Meinung,", "dass", "das", "ein", "großer", "Vorteil", "ist"],
            a: ["Ich bin der Meinung, dass das ein großer Vorteil ist"]
          },
          {
            t: "trans",
            dir: "toIt",
            a: [
              "Ich habe einen langen Artikel gelesen",
              "Einen langen Artikel habe ich gelesen",
              "Ich las einen langen Artikel"
            ]
          },
          {
            t: "listen",
            it: "Ich bin der Meinung, dass das ein guter Plan ist. Er hat sowohl Vorteile als auch Nachteile, aber die Vorteile sind größer. Zwar kostet er Geld, aber er bringt ein gutes Ergebnis."
          },
          { t: "speak", it: "Das ist ein starkes Argument, aber ich bin anderer Meinung." }
        ]
      }
    ],
    test: {
      id: "b1-u04-test",
      tags: ["g-passiv", "g-relativsatz", "g-konjunktiv2", "g-plusquamperfekt", "g-praep-verben"],
      cefr: "B1",
      titleIt: "Test: Meinungen und Medien",
      exercises: [
        { t: "conj", verb: "gehen", tense: "plusq", persons: [0, 1, 2, 3, 4, 5] },
        { t: "fill", a: ["wurde"] },
        { t: "fill", a: ["der"] },
        { t: "fill", a: ["hätte"] },
        { t: "fill", a: ["hatte"] },
        { t: "fill", a: ["auf"] },
        { t: "fill", a: ["dass"] },
        { t: "mcq", a: 0 },
        { t: "mcq", a: 0 },
        {
          t: "trans",
          dir: "toIt",
          a: [
            "Wenn ich mehr Zeit hätte, würde ich jeden Tag die Zeitung lesen",
            "Wenn ich mehr Zeit hätte, würde ich die Zeitung jeden Tag lesen",
            "Wenn ich mehr Zeit hätte, läse ich jeden Tag die Zeitung",
            "Hätte ich mehr Zeit, würde ich jeden Tag die Zeitung lesen",
            "Hätte ich mehr Zeit, würde ich die Zeitung jeden Tag lesen"
          ]
        },
        {
          t: "listen",
          it: "Der Artikel wurde gestern veröffentlicht. Nachdem die Journalistin die Quelle geprüft hatte, schrieb sie die Überschrift. Ich warte auf die Nachricht, die der Journalist versprochen hat."
        },
        { t: "speak", it: "Der Artikel, den du empfohlen hast, wurde gestern veröffentlicht." }
      ]
    }
  }
]);
