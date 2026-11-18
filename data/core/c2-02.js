/* ============================================================
   Language-neutral layer: German (de-DE), structure and answer keys.
   Learner-language texts live in data/i18n/<lang>/c2-02.js.
   c2-u04 is a German unit; its test is the final C2 exam.
   ============================================================ */
LINGUAI.addUnits("C2", [
  {
    id: "c2-u04",
    icon: "🔗",
    titleIt: "Was mich beunruhigt",
    lessons: [
      {
        id: "c2-u04-l1",
        tags: ["g-relativsatz"],
        cefr: "C2",
        titleIt: "dessen, deren, mit dem",
        grammar: {
          examples: [
            { it: "Der Autor, dessen Roman verfilmt wurde, lebt sehr zurückgezogen." },
            { it: "Die Forscherin, deren Ergebnisse umstritten sind, hat ihre Daten offengelegt." },
            { it: "Die Kollegen, mit deren Hilfe wir das Projekt abgeschlossen haben, sind inzwischen ausgeschieden." },
            { it: "Das Gesetz, auf dessen Grundlage die Behörde entschieden hat, wird gerichtlich überprüft." },
            { it: "Die Kommission, mit der wir seit Jahren zusammenarbeiten, hat ihre Empfehlungen veröffentlicht." },
            { it: "Der Minister, mit dessen neuem Vorschlag kaum jemand einverstanden ist, hält an seinem Plan fest." }
          ]
        },
        vocab: [
          { it: "der Einwand", plural: "die Einwände", ex: "Ihren Einwand halte ich für berechtigt." },
          { it: "der Vorbehalt", plural: "die Vorbehalte", ex: "Gegen den Plan bestehen erhebliche Vorbehalte." },
          { it: "die Tragweite", plural: "-", ex: "Die Tragweite der Entscheidung war damals niemandem bewusst." },
          { it: "der Sachverhalt", plural: "die Sachverhalte", ex: "Der Sachverhalt ist komplizierter, als er scheint." },
          { it: "die Grundlage", plural: "die Grundlagen", ex: "Auf welcher Grundlage wurde entschieden?" },
          { it: "der Urheber", plural: "die Urheber", ex: "Der Urheber des Gerüchts blieb unbekannt." },
          { it: "die Glaubwürdigkeit", plural: "-", ex: "Der Skandal hat ihre Glaubwürdigkeit beschädigt." },
          { it: "der Werdegang", plural: "die Werdegänge", ex: "Ihr beruflicher Werdegang ist ungewöhnlich." },
          { it: "ausscheiden", ex: "Er ist Ende März aus dem Vorstand ausgeschieden." },
          { it: "offenlegen", ex: "Die Partei muss ihre Finanzen offenlegen." },
          { it: "umstritten", ex: "Die These ist in der Fachwelt umstritten." },
          { it: "zurückgezogen", ex: "Seit ihrem Rücktritt lebt sie sehr zurückgezogen." }
        ],
        exercises: [
          { t: "mcq", a: 0 },
          { t: "mcq", a: 0 },
          { t: "mcq", a: 0 },
          { t: "fill", a: ["deren"] },
          { t: "fill", a: ["dem"] },
          {
            t: "cloze",
            text: "Die Studie, auf {{1}} Ergebnisse sich die Regierung beruft, wurde von einem Institut erstellt, {{2}} Finanzierung bis heute ungeklärt ist.",
            gaps: [["deren"], ["dessen"]]
          },
          { t: "multi", a: [0, 1] },
          {
            t: "order",
            tokens: ["Die", "Firma,", "für", "deren", "Produkte", "sie", "wirbt,", "steht", "seit", "Monaten", "in", "der", "Kritik"],
            a: ["Die Firma, für deren Produkte sie wirbt, steht seit Monaten in der Kritik"]
          },
          {
            t: "trans",
            dir: "toIt",
            a: [
              "Die Schriftstellerin, deren letzter Roman in zwanzig Sprachen übersetzt wurde, lebt in Wien",
              "Die Schriftstellerin, deren letzter Roman in zwanzig Sprachen übersetzt worden ist, lebt in Wien",
              "Die Schriftstellerin, deren letzter Roman in 20 Sprachen übersetzt wurde, lebt in Wien",
              "Die Schriftstellerin, deren letzter Roman in 20 Sprachen übersetzt worden ist, lebt in Wien",
              "Die Autorin, deren letzter Roman in zwanzig Sprachen übersetzt wurde, lebt in Wien",
              "Die Autorin, deren letzter Roman in zwanzig Sprachen übersetzt worden ist, lebt in Wien",
              "Die Autorin, deren letzter Roman in 20 Sprachen übersetzt wurde, lebt in Wien",
              "Die Autorin, deren letzter Roman in 20 Sprachen übersetzt worden ist, lebt in Wien",
              "Die Schriftstellerin, deren letzter Roman in zwanzig Sprachen übersetzt wurde, wohnt in Wien",
              "Die Schriftstellerin, deren letzter Roman in zwanzig Sprachen übersetzt worden ist, wohnt in Wien",
              "Die Schriftstellerin, deren letzter Roman in 20 Sprachen übersetzt wurde, wohnt in Wien",
              "Die Schriftstellerin, deren letzter Roman in 20 Sprachen übersetzt worden ist, wohnt in Wien",
              "Die Autorin, deren letzter Roman in zwanzig Sprachen übersetzt wurde, wohnt in Wien",
              "Die Autorin, deren letzter Roman in zwanzig Sprachen übersetzt worden ist, wohnt in Wien",
              "Die Autorin, deren letzter Roman in 20 Sprachen übersetzt wurde, wohnt in Wien",
              "Die Autorin, deren letzter Roman in 20 Sprachen übersetzt worden ist, wohnt in Wien"
            ]
          },
          {
            t: "listen",
            it: "Der Bericht, dessen Veröffentlichung seit Monaten erwartet wurde, enthält kaum Neues. Die Fachleute, auf deren Urteil sich die Regierung beruft, bleiben anonym."
          },
          { t: "speak", it: "Die Autorin, deren Roman verfilmt wurde, lebt sehr zurückgezogen." }
        ]
      },
      {
        id: "c2-u04-l2",
        tags: ["g-relativsatz"],
        cefr: "C2",
        titleIt: "wer, was, worüber",
        grammar: {
          examples: [
            { it: "Wer zu spät kommt, den bestraft das Leben." },
            { it: "Was mich beunruhigt, ist die Gleichgültigkeit vieler Menschen." },
            { it: "Alles, was er behauptet hat, ließ sich widerlegen." },
            { it: "Das Beste, was uns passieren konnte, war diese Absage." },
            { it: "Er hat die Prüfung bestanden, was niemand erwartet hatte." },
            { it: "Es gab vieles, worüber wir uns nicht einig waren." }
          ]
        },
        vocab: [
          { it: "die Gleichgültigkeit", plural: "-", ex: "Ihre Gleichgültigkeit hat mich erschreckt." },
          { it: "die Behauptung", plural: "die Behauptungen", ex: "Die Behauptung lässt sich nicht belegen." },
          { it: "der Widerspruch", plural: "die Widersprüche", ex: "Seine Aussage steht im Widerspruch zu den Fakten." },
          { it: "die Schlussfolgerung", plural: "die Schlussfolgerungen", ex: "Welche Schlussfolgerung ziehen Sie daraus?" },
          { it: "der Trugschluss", plural: "die Trugschlüsse", ex: "Es ist ein Trugschluss, dass mehr Geld alle Probleme löst." },
          { it: "das Anliegen", plural: "die Anliegen", ex: "Ihr Anliegen wird an die zuständige Stelle weitergeleitet." },
          { it: "widerlegen", ex: "Die Studie widerlegt die gängige Annahme." },
          { it: "belegen", ex: "Diese Zahlen belegen den Trend eindeutig." },
          { it: "beunruhigen", ex: "Die Entwicklung beunruhigt viele Eltern." },
          { it: "einräumen", ex: "Der Minister räumte Fehler ein." },
          { it: "stichhaltig", ex: "Ihre Argumente sind durchaus stichhaltig." },
          { it: "fragwürdig", ex: "Die Methode der Studie ist fragwürdig." }
        ],
        exercises: [
          { t: "mcq", a: 0 },
          { t: "mcq", a: 0 },
          { t: "mcq", a: 0 },
          { t: "fill", a: ["was"] },
          { t: "fill", a: ["wovor"] },
          {
            t: "cloze",
            text: "{{1}} die Reform am meisten schadet, {{2}} hat man am wenigsten gefragt.",
            gaps: [["Wem"], ["den"]]
          },
          {
            t: "match",
            pairs: [{ it: "einräumen" }, { it: "widerlegen" }, { it: "stichhaltig" }, { it: "der Trugschluss" }]
          },
          {
            t: "order",
            tokens: ["Was", "mich", "an", "dem", "Bericht", "beunruhigt,", "ist", "die", "Gleichgültigkeit", "der", "Behörden"],
            a: ["Was mich an dem Bericht beunruhigt, ist die Gleichgültigkeit der Behörden"]
          },
          {
            t: "trans",
            dir: "toIt",
            a: [
              "Alles, worüber wir gesprochen haben, bleibt vertraulich",
              "Alles, worüber wir diskutiert haben, bleibt vertraulich",
              "Alles, worüber wir geredet haben, bleibt vertraulich",
              "Alles, was wir besprochen haben, bleibt vertraulich",
              "Alles, was wir diskutiert haben, bleibt vertraulich"
            ]
          },
          {
            t: "listen",
            it: "Was viele Leser beunruhigt, ist nicht die Studie selbst, sondern das, was die Politik aus ihr macht. Wer die Zahlen genau liest, findet darin kaum etwas, worüber man sich aufregen müsste."
          },
          { t: "speak", it: "Alles, was er behauptet hat, ließ sich widerlegen." }
        ]
      },
      {
        id: "c2-u04-l3",
        tags: ["g-praep-verben", "g-genitiv"],
        cefr: "C2",
        titleIt: "Rektion, die man nicht erraten kann",
        grammar: {
          examples: [
            { it: "Die Reform bedarf einer gründlichen Prüfung." },
            { it: "Man beschuldigte ihn des Betrugs." },
            { it: "Sie ist sich der Risiken durchaus bewusst." },
            { it: "Zwei Abgeordnete enthielten sich der Stimme." },
            { it: "Niemand zweifelt an der Echtheit des Dokuments." },
            { it: "Die Opposition besteht auf einer öffentlichen Anhörung." }
          ]
        },
        vocab: [
          { it: "bedürfen", ex: "Der Antrag bedarf der Zustimmung des Vorstands." },
          { it: "sich enthalten", ex: "Drei Mitglieder enthielten sich der Stimme." },
          { it: "beschuldigen", ex: "Man beschuldigte sie der Untreue." },
          { it: "gedenken", ex: "Am Sonntag gedenkt die Stadt der Opfer." },
          { it: "sich vergewissern", ex: "Sie vergewisserte sich der Richtigkeit der Angaben." },
          { it: "zweifeln an", ex: "Niemand zweifelt an ihrer Kompetenz." },
          { it: "angewiesen auf", ex: "Viele Familien sind auf Unterstützung angewiesen." },
          { it: "bewusst", ex: "Sie ist sich ihrer Verantwortung bewusst." },
          { it: "stolz auf", ex: "Wir sind stolz auf das Ergebnis." },
          { it: "würdig", ex: "Der Vorschlag ist einer ernsthaften Prüfung würdig." },
          { it: "die Rektion", plural: "die Rektionen", ex: "Die Rektion vieler Verben muss man auswendig lernen." },
          { it: "der Vorwurf", plural: "die Vorwürfe", ex: "Den Vorwurf der Bestechung weist er zurück." }
        ],
        exercises: [
          { t: "mcq", a: 0 },
          { t: "mcq", a: 0 },
          { t: "mcq", a: 0 },
          { t: "fill", a: ["der"] },
          { t: "fill", a: ["auf"] },
          {
            t: "cloze",
            text: "Der Abgeordnete, {{1}} man der Bestechung beschuldigt, weist den Vorwurf zurück und besteht {{2}} einer unabhängigen Untersuchung.",
            gaps: [["den", "welchen"], ["auf"]]
          },
          { t: "multi", a: [0, 1] },
          {
            t: "order",
            tokens: ["Die", "Angeklagte", "bestreitet,", "sich", "des", "Betrugs", "schuldig", "gemacht", "zu", "haben"],
            a: ["Die Angeklagte bestreitet, sich des Betrugs schuldig gemacht zu haben"]
          },
          {
            t: "trans",
            dir: "toIt",
            a: [
              "Wir sind uns der Verantwortung bewusst, die wir übernehmen",
              "Wir sind uns der Verantwortung, die wir übernehmen, bewusst",
              "Wir sind uns der Verantwortung bewusst, die wir auf uns nehmen",
              "Wir sind uns der Verantwortung, die wir auf uns nehmen, bewusst"
            ]
          },
          {
            t: "listen",
            it: "Der Antrag bedarf der Zustimmung aller Mitglieder. Wer an der Abstimmung nicht teilnehmen kann, sollte sich vorher beim Vorstand nach den Fristen erkundigen."
          },
          { t: "speak", it: "Sie ist sich der Risiken durchaus bewusst." }
        ]
      }
    ],
    test: {
      id: "c2-u04-test",
      tags: ["g-relativsatz", "g-praep-verben", "g-partizipialattribut", "g-register"],
      cefr: "C2",
      titleIt: "Test: Was mich beunruhigt",
      exercises: [
        { t: "fill", a: ["deren"] },
        { t: "fill", a: ["was"] },
        { t: "fill", a: ["einer", "der"] },
        { t: "fill", a: ["beanstandeten"] },
        { t: "mcq", a: 0 },
        { t: "mcq", a: 0 },
        { t: "mcq", a: 0 },
        { t: "multi", a: [0, 1] },
        {
          t: "cloze",
          text: "Die Ministerin, {{1}} Rücktritt seit Wochen gefordert wird, bestreitet, sich {{2}} Fehlverhaltens schuldig gemacht zu haben.",
          gaps: [["deren"], ["eines", "des"]]
        },
        {
          t: "trans",
          dir: "toIt",
          a: [
            "Wer sich der Risiken bewusst ist, bedarf keiner weiteren Warnungen",
            "Wer sich der Risiken bewusst ist, der bedarf keiner weiteren Warnungen",
            "Wer sich der Risiken bewusst ist, bedarf keiner weiteren Warnung",
            "Wer sich der Risiken bewusst ist, der bedarf keiner weiteren Warnung"
          ]
        },
        {
          t: "listen",
          it: "Was die Fachleute beunruhigt, ist weniger die Zahl der Fälle als die Gleichgültigkeit, mit der die Behörden darauf reagieren. Die im Bericht genannten Maßnahmen bedürfen dringend einer Überprüfung."
        },
        { t: "speak", it: "Wer sich der Tragweite seiner Entscheidung bewusst ist, handelt vorsichtiger." }
      ]
    }
  }
]);
