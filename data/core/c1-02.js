/* ============================================================
   Language-neutral layer: German (de-DE), structure and answer keys.
   Learner-language texts live in data/i18n/<lang>/c1-02.js.
   c1-u04 is a German unit.
   ============================================================ */
LINGUAI.addUnits("C1", [
  {
    id: "c1-u04",
    icon: "🤔",
    titleIt: "Er wird wohl müde sein",
    lessons: [
      {
        id: "c1-u04-l1",
        tags: ["g-futur"],
        cefr: "C1",
        titleIt: "Das Futur der Vermutung",
        grammar: {
          examples: [
            { it: "Die Lichter sind aus, sie wird schon schlafen." },
            { it: "Es klingelt. Das wird der Postbote sein." },
            { it: "Er wird wohl noch im Stau stehen." },
            { it: "Sie wird die Nachricht inzwischen gelesen haben." },
            { it: "Bis Ende des Monats werden wir die Studie abgeschlossen haben." },
            { it: "Das wird schon klappen." }
          ]
        },
        vocab: [
          { it: "die Annahme", plural: "die Annahmen", ex: "Wir gehen von der Annahme aus, dass die Preise steigen." },
          { it: "der Verdacht", plural: "die Verdachte", ex: "Es besteht der Verdacht, dass die Daten falsch sind." },
          { it: "die Wahrscheinlichkeit", plural: "die Wahrscheinlichkeiten", ex: "Die Wahrscheinlichkeit für Regen liegt bei achtzig Prozent." },
          { it: "der Anhaltspunkt", plural: "die Anhaltspunkte", ex: "Dafür gibt es bisher keine Anhaltspunkte." },
          { it: "der Zweifel", plural: "die Zweifel", ex: "Daran habe ich keinen Zweifel." },
          { it: "die Gewissheit", plural: "-", ex: "Wir haben noch keine Gewissheit über die Ursache." },
          { it: "annehmen", ex: "Ich nehme an, dass er schon zu Hause ist." },
          { it: "mutmaßen", ex: "Die Presse mutmaßt über die Ursachen des Unfalls." },
          { it: "davon ausgehen", ex: "Wir gehen davon aus, dass die Sitzung pünktlich beginnt." },
          { it: "wahrscheinlich", ex: "Er kommt wahrscheinlich später." },
          { it: "sicherlich", ex: "Sie hat sicherlich recht." },
          { it: "inzwischen", ex: "Er ist inzwischen angekommen." }
        ],
        exercises: [
          { t: "mcq", a: 0 },
          { t: "mcq", a: 0 },
          { t: "mcq", a: 0 },
          { t: "fill", a: ["wird"] },
          { t: "fill", a: ["haben"] },
          {
            t: "cloze",
            text: "Die Kollegen {{1}} jetzt wohl in der Besprechung {{2}}, und den Bericht {{3}} sie inzwischen sicher gelesen haben.",
            gaps: [["werden"], ["sitzen", "sein"], ["werden"]]
          },
          { t: "multi", a: [0, 1] },
          {
            t: "order",
            tokens: ["Sie", "wird", "die", "Nachricht", "inzwischen", "gelesen", "haben"],
            a: ["Sie wird die Nachricht inzwischen gelesen haben", "Sie wird inzwischen die Nachricht gelesen haben"]
          },
          {
            t: "trans",
            dir: "toIt",
            a: [
              "Die Bewerberinnen werden die Antwort wohl schon erhalten haben",
              "Die Bewerberinnen werden wohl die Antwort schon erhalten haben",
              "Die Bewerberinnen werden wohl schon die Antwort erhalten haben",
              "Die Bewerberinnen werden die Antwort wohl bereits erhalten haben",
              "Die Bewerberinnen werden wohl die Antwort bereits erhalten haben",
              "Die Bewerberinnen werden wohl bereits die Antwort erhalten haben",
              "Die Bewerberinnen werden die Antwort vermutlich schon erhalten haben",
              "Die Bewerberinnen werden vermutlich die Antwort schon erhalten haben",
              "Die Bewerberinnen werden vermutlich schon die Antwort erhalten haben",
              "Die Bewerberinnen werden die Antwort vermutlich bereits erhalten haben",
              "Die Bewerberinnen werden vermutlich die Antwort bereits erhalten haben",
              "Die Bewerberinnen werden vermutlich bereits die Antwort erhalten haben",
              "Die Bewerberinnen werden die Antwort wahrscheinlich schon erhalten haben",
              "Die Bewerberinnen werden wahrscheinlich die Antwort schon erhalten haben",
              "Die Bewerberinnen werden wahrscheinlich schon die Antwort erhalten haben",
              "Die Bewerberinnen werden die Antwort wahrscheinlich bereits erhalten haben",
              "Die Bewerberinnen werden wahrscheinlich die Antwort bereits erhalten haben",
              "Die Bewerberinnen werden wahrscheinlich bereits die Antwort erhalten haben"
            ]
          },
          {
            t: "listen",
            it: "Der Zug aus München hat Verspätung. Die Reisenden werden wohl noch eine halbe Stunde warten müssen, und der Anschluss wird dann vermutlich schon abgefahren sein."
          },
          { t: "speak", it: "Das Licht brennt noch, also werden die Kollegen wohl noch arbeiten." }
        ]
      },
      {
        id: "c1-u04-l2",
        tags: ["g-modalverben"],
        cefr: "C1",
        titleIt: "Er muss krank sein, sie soll reich sein",
        grammar: {
          examples: [
            { it: "Es muss geregnet haben, die Straße ist nass." },
            { it: "Er dürfte inzwischen angekommen sein." },
            { it: "Das könnte ein Irrtum sein." },
            { it: "Der Zeuge soll den Täter gesehen haben." },
            { it: "Die Firma will alle Unterlagen rechtzeitig eingereicht haben." },
            { it: "Das mag sein, aber ich sehe es anders." }
          ]
        },
        vocab: [
          { it: "das Gerücht", plural: "die Gerüchte", ex: "Um den Rücktritt gibt es seit Tagen Gerüchte." },
          { it: "der Zeuge", plural: "die Zeugen", ex: "Der Zeuge hat den Unfall beobachtet." },
          { it: "die Behauptung", plural: "die Behauptungen", ex: "Seine Behauptung lässt sich nicht belegen." },
          { it: "die Quelle", plural: "die Quellen", ex: "Die Zeitung beruft sich auf eine anonyme Quelle." },
          { it: "der Beweis", plural: "die Beweise", ex: "Dafür gibt es bisher keinen Beweis." },
          { it: "die Aussage", plural: "die Aussagen", ex: "Die Aussage des Zeugen war widersprüchlich." },
          { it: "behaupten", ex: "Sie behauptet, nichts davon gewusst zu haben." },
          { it: "bestreiten", ex: "Das Unternehmen bestreitet die Vorwürfe." },
          { it: "belegen", ex: "Die Zahlen belegen den Trend." },
          { it: "angeblich", ex: "Er ist angeblich schon abgereist." },
          { it: "offenbar", ex: "Der Zug hatte offenbar Verspätung." },
          { it: "anscheinend", ex: "Hier hat anscheinend niemand geputzt." }
        ],
        exercises: [
          { t: "mcq", a: 0 },
          { t: "mcq", a: 0 },
          { t: "mcq", a: 0 },
          { t: "fill", a: ["soll"] },
          { t: "fill", a: ["will"] },
          {
            t: "cloze",
            text: "Die Rollläden sind unten und der Briefkasten quillt über: Familie Albers {{1}} verreist sein, etwas anderes ist kaum denkbar. Einem Nachbarn zufolge {{2}} sie schon vor zwei Wochen abgefahren sein, aber der Hausmeister {{3}} nach eigener Aussage davon nichts mitbekommen haben.",
            gaps: [["muss"], ["soll"], ["will"]]
          },
          {
            t: "match",
            pairs: [{ it: "Er muss krank sein." }, { it: "Er dürfte krank sein." }, { it: "Er soll krank sein." }, { it: "Er will krank gewesen sein." }]
          },
          {
            t: "order",
            tokens: ["Der", "Minister", "soll", "die", "Akten", "vernichtet", "haben"],
            a: ["Der Minister soll die Akten vernichtet haben"]
          },
          {
            t: "trans",
            dir: "toIt",
            a: [
              "Die Ministerin soll das Land schon gestern verlassen haben",
              "Die Ministerin soll schon gestern das Land verlassen haben",
              "Die Ministerin soll das Land gestern schon verlassen haben",
              "Die Ministerin soll gestern schon das Land verlassen haben",
              "Die Ministerin soll das Land bereits gestern verlassen haben",
              "Die Ministerin soll bereits gestern das Land verlassen haben",
              "Die Ministerin soll das Land gestern bereits verlassen haben",
              "Die Ministerin soll gestern bereits das Land verlassen haben"
            ]
          },
          {
            t: "listen",
            it: "Der Unternehmer soll mehrere Millionen Euro veruntreut haben. Er selbst will davon nichts gewusst haben, und sein Anwalt dürfte die Vorwürfe morgen zurückweisen."
          },
          { t: "speak", it: "Er soll krank sein, aber das dürfte eine Ausrede sein." }
        ]
      },
      {
        id: "c1-u04-l3",
        tags: ["g-modalpartikeln", "g-register"],
        cefr: "C1",
        titleIt: "wohl, etwa, halt, eben",
        grammar: {
          examples: [
            { it: "Er wird wohl noch schlafen." },
            { it: "Du weißt ja, wie lange das dauert." },
            { it: "Ist das etwa schon alles?" },
            { it: "Der Bus ist weg, da müssen wir halt laufen." },
            { it: "Da kann man eben nichts machen." },
            { it: "Hast du etwa den Schlüssel vergessen?" }
          ]
        },
        vocab: [
          { it: "der Unterton", plural: "die Untertöne", ex: "In seiner Stimme lag ein ironischer Unterton." },
          { it: "die Nuance", plural: "die Nuancen", ex: "Die Nuancen gehen in der Übersetzung leicht verloren." },
          { it: "die Erwartung", plural: "die Erwartungen", ex: "Das Ergebnis hat unsere Erwartungen übertroffen." },
          { it: "die Überraschung", plural: "die Überraschungen", ex: "Zu unserer Überraschung kam er pünktlich." },
          { it: "die Resignation", plural: "-", ex: "Aus seinen Worten sprach Resignation." },
          { it: "die Selbstverständlichkeit", plural: "die Selbstverständlichkeiten", ex: "Für sie ist Pünktlichkeit eine Selbstverständlichkeit." },
          { it: "andeuten", ex: "Sie deutete an, dass sie kündigen könnte." },
          { it: "vorwerfen", ex: "Man wirft ihm Nachlässigkeit vor." },
          { it: "hinnehmen", ex: "Diese Verspätung können wir nicht länger hinnehmen." },
          { it: "ausgerechnet", ex: "Ausgerechnet heute fällt der Zug aus." },
          { it: "ohnehin", ex: "Das wäre ohnehin zu spät gewesen." },
          { it: "schlicht", ex: "Das ist schlicht falsch." }
        ],
        exercises: [
          { t: "mcq", a: 0 },
          { t: "mcq", a: 0 },
          { t: "mcq", a: 0 },
          { t: "fill", a: ["halt", "eben"] },
          { t: "fill", a: ["ja"] },
          {
            t: "cloze",
            text: "Wo bleibt Jonas? - Er wird {{1}} im Stau stehen. - Hat er {{2}} schon wieder den Bus verpasst? - Du kennst ihn {{3}}: Da kann man {{4}} nichts machen.",
            gaps: [
              ["wohl", "wahrscheinlich", "vermutlich"],
              ["etwa", "denn"],
              ["ja", "doch"],
              ["halt", "eben"]
            ]
          },
          { t: "multi", a: [0, 1] },
          {
            t: "order",
            tokens: ["Hast", "du", "etwa", "schon", "wieder", "den", "Schlüssel", "vergessen"],
            a: [
              "Hast du etwa schon wieder den Schlüssel vergessen",
              "Hast du den Schlüssel etwa schon wieder vergessen",
              "Hast du etwa den Schlüssel schon wieder vergessen"
            ]
          },
          {
            t: "trans",
            dir: "toIt",
            a: [
              "Der Chef wird wohl noch in einer Besprechung sein, dann warten wir eben",
              "Der Chef wird wohl noch in einer Besprechung sein, dann warten wir halt",
              "Der Chef wird wohl noch in einer Besprechung sein, also warten wir eben",
              "Der Chef wird wohl noch in einer Besprechung sein, also warten wir halt",
              "Der Chef wird wohl noch in einer Besprechung sein, da warten wir eben",
              "Der Chef wird wohl noch in einer Besprechung sein, da warten wir halt",
              "Der Chef wird wohl noch in der Besprechung sein, dann warten wir eben",
              "Der Chef wird wohl noch in der Besprechung sein, dann warten wir halt",
              "Der Chef wird wohl noch in der Besprechung sein, also warten wir eben",
              "Der Chef wird wohl noch in der Besprechung sein, also warten wir halt",
              "Der Chef wird wohl noch in der Besprechung sein, da warten wir eben",
              "Der Chef wird wohl noch in der Besprechung sein, da warten wir halt",
              "Der Chef ist wohl noch in einer Besprechung, dann warten wir eben",
              "Der Chef ist wohl noch in einer Besprechung, dann warten wir halt",
              "Der Chef ist wohl noch in einer Besprechung, also warten wir eben",
              "Der Chef ist wohl noch in einer Besprechung, also warten wir halt",
              "Der Chef ist wohl noch in einer Besprechung, da warten wir eben",
              "Der Chef ist wohl noch in einer Besprechung, da warten wir halt",
              "Der Chef ist wohl noch in der Besprechung, dann warten wir eben",
              "Der Chef ist wohl noch in der Besprechung, dann warten wir halt",
              "Der Chef ist wohl noch in der Besprechung, also warten wir eben",
              "Der Chef ist wohl noch in der Besprechung, also warten wir halt",
              "Der Chef ist wohl noch in der Besprechung, da warten wir eben",
              "Der Chef ist wohl noch in der Besprechung, da warten wir halt"
            ]
          },
          {
            t: "listen",
            it: "Ich glaube, Paul ist krank. Er kommt ja sonst nie zu spät, und heute ist er wohl noch im Bett. Hat er etwa die Grippe? Na ja, dann beginnen wir die Sitzung eben ohne ihn."
          },
          { t: "speak", it: "Dann warten wir eben, der Bus kommt ja bald." }
        ]
      }
    ],
    test: {
      id: "c1-u04-test",
      tags: ["g-futur", "g-modalverben", "g-modalpartikeln"],
      cefr: "C1",
      titleIt: "Test: Er wird wohl müde sein",
      exercises: [
        { t: "fill", a: ["wird"] },
        { t: "fill", a: ["soll"] },
        { t: "fill", a: ["etwa", "denn"] },
        { t: "mcq", a: 0 },
        { t: "mcq", a: 0 },
        { t: "mcq", a: 0 },
        {
          t: "cloze",
          text: "Laut Zeitungsbericht {{1}} der Minister Akten vernichtet haben. Er selbst {{2}} davon nichts gewusst haben, und sein Sprecher verspricht: Bis Freitag {{3}} wir alles geklärt haben.",
          gaps: [["soll"], ["will"], ["werden"]]
        },
        { t: "multi", a: [0, 1] },
        {
          t: "listen",
          it: "Das Spiel ist gestern ausgefallen. Der Platz soll unter Wasser gestanden haben, aber der Trainer will davon nichts gewusst haben. Die Fans werden wohl enttäuscht sein, aber so ist das eben im Fußball."
        },
        { t: "speak", it: "Das kann nicht stimmen, er dürfte sich geirrt haben." }
      ]
    }
  }
]);
