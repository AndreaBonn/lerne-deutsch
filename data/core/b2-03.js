/* ============================================================
   Language-neutral layer: German (de-DE), structure and answer keys.
   Learner-language texts live in data/i18n/<lang>/b2-03.js.
   b2-u06 is a German unit.
   ============================================================ */
LINGUAI.addUnits("B2", [
  {
    id: "b2-u06",
    icon: "⚖️",
    titleIt: "Auch wenn es regnet",
    lessons: [
      {
        id: "b2-u06-l1",
        tags: ["g-konzessiv", "g-genitiv"],
        cefr: "B2",
        titleIt: "obwohl, obgleich, trotz",
        grammar: {
          examples: [
            { it: "Obwohl es regnet, gehen wir spazieren." },
            { it: "Wir gehen spazieren, obwohl es regnet." },
            { it: "Es regnet. Trotzdem gehen wir spazieren." },
            { it: "Trotz des Regens gehen wir spazieren." },
            { it: "Obgleich die Kosten gestiegen sind, bleibt der Preis gleich." },
            { it: "Trotz der hohen Kosten hat die Stadt das Projekt fortgesetzt." }
          ]
        },
        vocab: [
          { it: "der Einwand", plural: "die Einwände", ex: "Ich habe einen Einwand gegen diesen Plan." },
          { it: "der Widerspruch", plural: "die Widersprüche", ex: "In seiner Aussage gibt es einen Widerspruch." },
          { it: "das Argument", plural: "die Argumente", ex: "Das ist ein starkes Argument." },
          { it: "die Debatte", plural: "die Debatten", ex: "Die Debatte im Parlament dauerte bis Mitternacht." },
          { it: "der Kompromiss", plural: "die Kompromisse", ex: "Am Ende fanden sie einen Kompromiss." },
          { it: "der Nachteil", plural: "die Nachteile", ex: "Der Plan hat einen großen Nachteil." },
          { it: "obwohl", ex: "Obwohl er müde war, arbeitete er weiter." },
          { it: "trotz", ex: "Trotz des schlechten Wetters kamen viele Leute." },
          { it: "trotzdem", ex: "Es war kalt. Trotzdem gingen wir schwimmen." },
          { it: "dennoch", ex: "Die Aufgabe war schwer, dennoch hat sie es geschafft." },
          { it: "einwenden", ex: "Er wandte ein, das sei zu teuer." },
          { it: "widersprechen", ex: "Da muss ich Ihnen widersprechen." }
        ],
        exercises: [
          { t: "mcq", a: 0 },
          { t: "mcq", a: 0 },
          { t: "mcq", a: 0 },
          { t: "fill", a: ["Obwohl", "Obgleich", "Obschon"] },
          { t: "fill", a: ["des"] },
          {
            t: "cloze",
            text: "Das Wetter war schlecht. {{1}} fand das Konzert {{2}}.",
            gaps: [["Trotzdem", "Dennoch"], ["statt"]]
          },
          {
            t: "match",
            pairs: [{ it: "der Einwand" }, { it: "der Widerspruch" }, { it: "der Kompromiss" }, { it: "der Nachteil" }]
          },
          {
            t: "order",
            tokens: ["Trotz", "der", "hohen", "Kosten", "hat", "die", "Stadt", "das", "Projekt", "fortgesetzt"],
            a: ["Trotz der hohen Kosten hat die Stadt das Projekt fortgesetzt"]
          },
          {
            t: "trans",
            dir: "toIt",
            a: [
              "Obwohl er müde war, hat er weitergearbeitet",
              "Obwohl er müde war, arbeitete er weiter",
              "Obgleich er müde war, hat er weitergearbeitet",
              "Obgleich er müde war, arbeitete er weiter",
              "Er hat weitergearbeitet, obwohl er müde war",
              "Er arbeitete weiter, obwohl er müde war",
              "Er hat weitergearbeitet, obgleich er müde war",
              "Er arbeitete weiter, obgleich er müde war"
            ]
          },
          {
            t: "listen",
            it: "Obwohl die Mieten in der Stadt stark gestiegen sind, wollen viele junge Leute dort wohnen. Trotz der hohen Preise ist die Nachfrage groß."
          },
          { t: "speak", it: "Trotz des Regens sind viele Menschen zur Demonstration gekommen." }
        ]
      },
      {
        id: "b2-u06-l2",
        tags: ["g-konzessiv", "g-konditionalsatz"],
        cefr: "B2",
        titleIt: "auch wenn, selbst wenn",
        grammar: {
          examples: [
            { it: "Auch wenn es regnet, gehen wir spazieren." },
            { it: "Selbst wenn ich Zeit hätte, würde ich nicht mitkommen." },
            { it: "Auch wenn du recht hast, solltest du höflich bleiben." },
            { it: "Wir fahren morgen los, selbst wenn das Wetter schlecht ist." },
            { it: "Wie schwer es auch sein mag, wir schaffen das." },
            { it: "Selbst wenn sie gewonnen hätte, wäre sie nicht zufrieden gewesen." }
          ]
        },
        vocab: [
          { it: "die Bedingung", plural: "die Bedingungen", ex: "Ich komme nur unter einer Bedingung." },
          { it: "die Voraussetzung", plural: "die Voraussetzungen", ex: "Gute Deutschkenntnisse sind eine Voraussetzung für die Stelle." },
          { it: "das Risiko", plural: "die Risiken", ex: "Das Risiko ist mir zu hoch." },
          { it: "die Entscheidung", plural: "die Entscheidungen", ex: "Die Entscheidung fiel ihr schwer." },
          { it: "der Standpunkt", plural: "die Standpunkte", ex: "Ich verstehe Ihren Standpunkt." },
          { it: "die Mehrheit", plural: "die Mehrheiten", ex: "Die Mehrheit war dagegen." },
          { it: "auch wenn", ex: "Auch wenn es spät ist, rufe ich dich an." },
          { it: "selbst wenn", ex: "Selbst wenn er fragt, sage ich nichts." },
          { it: "sogar", ex: "Sogar der Chef war überrascht." },
          { it: "zugeben", ex: "Er gab zu, dass er sich geirrt hatte." },
          { it: "nachgeben", ex: "Am Ende gab sie nach." },
          { it: "beharren", ex: "Er beharrte auf seiner Meinung." }
        ],
        exercises: [
          { t: "mcq", a: 0 },
          { t: "mcq", a: 0 },
          { t: "mcq", a: 0 },
          { t: "fill", a: ["Auch", "Selbst"] },
          { t: "fill", a: ["würde"] },
          {
            t: "cloze",
            text: "Wir fahren morgen los, {{1}} wenn das Wetter schlecht {{2}}.",
            gaps: [["auch", "selbst"], ["ist"]]
          },
          { t: "multi", a: [0, 1] },
          {
            t: "order",
            tokens: ["Selbst", "wenn", "ich", "Zeit", "hätte,", "würde", "ich", "nicht", "mitkommen"],
            a: ["Selbst wenn ich Zeit hätte, würde ich nicht mitkommen"]
          },
          {
            t: "trans",
            dir: "toIt",
            a: [
              "Auch wenn er recht hat, sollte er nicht schreien",
              "Auch wenn er Recht hat, sollte er nicht schreien",
              "Selbst wenn er recht hat, sollte er nicht schreien",
              "Selbst wenn er Recht hat, sollte er nicht schreien",
              "Er sollte nicht schreien, auch wenn er recht hat",
              "Er sollte nicht schreien, auch wenn er Recht hat",
              "Er sollte nicht schreien, selbst wenn er recht hat",
              "Er sollte nicht schreien, selbst wenn er Recht hat"
            ]
          },
          {
            t: "listen",
            it: "Auch wenn die Mehrheit dagegen war, hat der Bürgermeister an seinem Plan festgehalten. Selbst wenn es Proteste gibt, will er nicht nachgeben."
          },
          { t: "speak", it: "Selbst wenn ich mehr Geld hätte, würde ich hier wohnen bleiben." }
        ]
      },
      {
        id: "b2-u06-l3",
        tags: ["g-konnektoren", "g-register"],
        cefr: "B2",
        titleIt: "jedoch, allerdings, sondern, vielmehr",
        grammar: {
          examples: [
            { it: "Der Vorschlag klingt gut. Er ist jedoch zu teuer." },
            { it: "Die Wohnung ist schön, allerdings ziemlich laut." },
            { it: "Das Problem ist nicht das Geld, sondern die Zeit." },
            { it: "Er ist nicht nur Arzt, sondern auch Musiker." },
            { it: "Das war kein Zufall. Vielmehr hatte er alles geplant." },
            { it: "Ich trinke Kaffee, meine Frau hingegen trinkt Tee." }
          ]
        },
        vocab: [
          { it: "die These", plural: "die Thesen", ex: "Die These des Autors ist umstritten." },
          { it: "die Behauptung", plural: "die Behauptungen", ex: "Diese Behauptung ist falsch." },
          { it: "der Beleg", plural: "die Belege", ex: "Für diese Behauptung gibt es keinen Beleg." },
          { it: "die Schlussfolgerung", plural: "die Schlussfolgerungen", ex: "Welche Schlussfolgerung ziehen Sie daraus?" },
          { it: "der Gegensatz", plural: "die Gegensätze", ex: "Im Gegensatz zu ihm bin ich optimistisch." },
          { it: "die Einschränkung", plural: "die Einschränkungen", ex: "Das gilt mit einer Einschränkung." },
          { it: "jedoch", ex: "Das Angebot ist gut, die Lieferung dauert jedoch lange." },
          { it: "allerdings", ex: "Das Essen war gut, allerdings etwas teuer." },
          { it: "sondern", ex: "Er kommt nicht heute, sondern morgen." },
          { it: "vielmehr", ex: "Es geht nicht um Geld. Es geht vielmehr um Respekt." },
          { it: "hingegen", ex: "Ich trinke Kaffee, meine Frau hingegen trinkt Tee." },
          { it: "zwar", ex: "Das Auto ist zwar alt, aber es fährt gut." }
        ],
        exercises: [
          { t: "mcq", a: 0 },
          { t: "mcq", a: 0 },
          { t: "mcq", a: 0 },
          { t: "fill", a: ["sondern"] },
          { t: "fill", a: ["zwar"] },
          {
            t: "cloze",
            text: "Das war kein Zufall. {{1}} hatte er alles {{2}}.",
            gaps: [["Vielmehr"], ["geplant"]]
          },
          {
            t: "match",
            pairs: [{ it: "jedoch" }, { it: "allerdings" }, { it: "vielmehr" }, { it: "hingegen" }]
          },
          {
            t: "order",
            tokens: ["Ich", "trinke", "Kaffee,", "meine", "Frau", "hingegen", "trinkt", "Tee"],
            a: ["Ich trinke Kaffee, meine Frau hingegen trinkt Tee", "Ich trinke Kaffee, meine Frau trinkt hingegen Tee", "Ich hingegen trinke Kaffee, meine Frau trinkt Tee"]
          },
          {
            t: "trans",
            dir: "toIt",
            a: [
              "Das Problem ist nicht das Geld, sondern die Zeit",
              "Nicht das Geld ist das Problem, sondern die Zeit"
            ]
          },
          {
            t: "listen",
            it: "Die Studie zeigt zwar Fortschritte, allerdings sind die Ergebnisse noch nicht sicher. Das Problem ist nicht die Technik, sondern das fehlende Geld."
          },
          { t: "speak", it: "Es geht nicht um Geld, vielmehr geht es um Respekt." }
        ]
      }
    ],
    test: {
      id: "b2-u06-test",
      tags: ["g-konzessiv", "g-konjunktiv2", "g-konjunktiv1", "g-passiv"],
      cefr: "B2",
      titleIt: "Test: Auch wenn es regnet",
      exercises: [
        { t: "fill", a: ["Trotz"] },
        { t: "fill", a: ["hätte"] },
        { t: "fill", a: ["habe"] },
        { t: "fill", a: ["wurde"] },
        { t: "mcq", a: 0 },
        { t: "mcq", a: 0 },
        { t: "mcq", a: 0 },
        { t: "multi", a: [0, 1] },
        {
          t: "cloze",
          text: "Selbst wenn ich Zeit {{1}}, {{2}} ich nicht mitkommen.",
          gaps: [["hätte"], ["würde"]]
        },
        {
          t: "trans",
          dir: "toIt",
          a: [
            "Trotz des Verkehrs sind wir pünktlich angekommen",
            "Wir sind trotz des Verkehrs pünktlich angekommen",
            "Trotz des Verkehrs kamen wir pünktlich an",
            "Wir kamen trotz des Verkehrs pünktlich an"
          ]
        },
        {
          t: "listen",
          it: "Obwohl die Regierung neue Gesetze versprochen hatte, wurde lange nichts geändert. Kritiker sagten, man habe die Bürger nicht ernst genommen."
        },
        { t: "speak", it: "Auch wenn die Kosten hoch sind, sollte das Projekt fortgesetzt werden." }
      ]
    }
  }
]);
