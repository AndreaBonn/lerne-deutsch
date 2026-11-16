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
            a: ["Ich denke oft an dich", "Oft denke ich an dich"]
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
            { it: "Die Kinder, denen ich das Buch gebe, sind sieben." },
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
  }
]);
