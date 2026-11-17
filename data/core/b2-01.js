/* ============================================================
   Language-neutral layer: German (de-DE), structure and answer keys.
   Learner-language texts live in data/i18n/<lang>/b2-01.js.
   b2-u01 is a German unit.
   ============================================================ */
LINGUAI.addUnits("B2", [
  {
    id: "b2-u01",
    icon: "⏳",
    titleIt: "Hätte ich das gewusst",
    lessons: [
      {
        id: "b2-u01-l1",
        tags: ["g-konjunktiv2"],
        cefr: "B2",
        titleIt: "Ich hätte, ich wäre gewesen",
        grammar: {
          examples: [
            { it: "Ich hätte das nicht gemacht." },
            { it: "Wir wären gern länger geblieben." },
            { it: "Wenn ich das gewusst hätte, wäre ich früher gekommen." },
            { it: "Hätte ich bloß mehr gelernt!" },
            { it: "Sie wäre fast zu spät gekommen." },
            { it: "Ohne deine Hilfe hätte ich es nicht geschafft." }
          ]
        },
        vocab: [
          { it: "die Gelegenheit", plural: "die Gelegenheiten", ex: "Ich habe die Gelegenheit verpasst." },
          { it: "die Entscheidung", plural: "die Entscheidungen", ex: "Das war eine schwierige Entscheidung." },
          { it: "der Fehler", plural: "die Fehler", ex: "Das wäre ein großer Fehler gewesen." },
          { it: "die Chance", plural: "die Chancen", ex: "Ich hätte die Chance genutzt." },
          { it: "die Wahl", plural: "die Wahlen", ex: "Ich hatte keine Wahl." },
          { it: "das Glück", plural: "-", ex: "Wir hatten Glück mit dem Wetter." },
          { it: "verpassen", ex: "Wir haben den Zug verpasst." },
          { it: "bereuen", ex: "Ich bereue nichts." },
          { it: "nutzen", ex: "Er hat die Zeit gut genutzt." },
          { it: "sich entscheiden", ex: "Ich habe mich für das Studium entschieden." },
          { it: "schaffen", ex: "Ohne dich hätte ich es nicht geschafft." },
          { it: "rechtzeitig", ex: "Er ist rechtzeitig angekommen." }
        ],
        exercises: [
          { t: "conj", verb: "machen", tense: "konj2Verg", persons: [0, 1, 2, 3, 4, 5] },
          { t: "conj", verb: "gehen", tense: "konj2Verg", persons: [0, 1, 2, 3, 4, 5] },
          { t: "conj", verb: "sein", tense: "konj2Verg", persons: [0, 1, 2, 3, 4, 5] },
          { t: "mcq", a: 0 },
          { t: "mcq", a: 0 },
          { t: "fill", a: ["hätte"] },
          { t: "fill", a: ["wäre"] },
          {
            t: "cloze",
            text: "Wenn wir mehr Zeit {{1}} {{2}}, wären wir länger geblieben.",
            gaps: [["gehabt"], ["hätten"]]
          },
          {
            t: "trans",
            dir: "toIt",
            a: [
              "Wenn du früher gekommen wärst, hättest du ihn gesehen",
              "Wärst du früher gekommen, hättest du ihn gesehen",
              "Wärest du früher gekommen, hättest du ihn gesehen",
              "Wenn du früher gekommen wärest, hättest du ihn gesehen"
            ]
          },
          {
            t: "listen",
            it: "Hätte ich die Gelegenheit genutzt, wäre ich jetzt in Berlin. Aber ich habe mich anders entschieden."
          },
          { t: "speak", it: "Wenn ich das gewusst hätte, wäre ich zu Hause geblieben." }
        ]
      },
      {
        id: "b2-u01-l2",
        tags: ["g-konjunktiv2", "g-modalverben"],
        cefr: "B2",
        titleIt: "Ich hätte anrufen sollen",
        grammar: {
          examples: [
            { it: "Ich hätte dich anrufen sollen." },
            { it: "Du hättest mir das sagen müssen." },
            { it: "Wir hätten früher losfahren können." },
            { it: "Er hat gestern nicht kommen können." },
            { it: "Sie hätte das nicht machen dürfen." },
            { it: "Ich weiß, dass ich hätte fragen sollen." }
          ]
        },
        vocab: [
          { it: "der Vorwurf", plural: "die Vorwürfe", ex: "Mach mir bitte keine Vorwürfe." },
          { it: "die Pflicht", plural: "die Pflichten", ex: "Das ist deine Pflicht." },
          { it: "die Verspätung", plural: "die Verspätungen", ex: "Der Zug hatte eine Stunde Verspätung." },
          { it: "die Ausrede", plural: "die Ausreden", ex: "Das ist nur eine Ausrede." },
          { it: "die Absicht", plural: "die Absichten", ex: "Das war keine böse Absicht." },
          { it: "das Versehen", plural: "die Versehen", ex: "Das ist aus Versehen passiert." },
          { it: "vorwerfen", ex: "Er wirft mir vor, dass ich immer zu spät komme." },
          { it: "sich entschuldigen", ex: "Ich habe mich bei ihr entschuldigt." },
          { it: "vergessen", ex: "Ich habe den Termin vergessen." },
          { it: "Bescheid sagen", ex: "Sag mir bitte Bescheid, wenn du ankommst." },
          { it: "leider", ex: "Leider konnte ich nicht kommen." },
          { it: "eigentlich", ex: "Eigentlich hätte ich es wissen müssen." }
        ],
        exercises: [
          { t: "mcq", a: 0 },
          { t: "mcq", a: 0 },
          { t: "mcq", a: 0 },
          { t: "fill", a: ["hättest"] },
          { t: "fill", a: ["können"] },
          {
            t: "cloze",
            text: "Ich {{1}} dich gestern anrufen {{2}}.",
            gaps: [["hätte"], ["sollen", "müssen"]]
          },
          {
            t: "cloze",
            text: "Er {{1}} gestern nicht kommen {{2}}.",
            gaps: [["hat"], ["können"]]
          },
          {
            t: "trans",
            dir: "toIt",
            a: [
              "Du hättest es mir sagen sollen",
              "Du hättest mir das sagen sollen",
              "Du hättest es mir sagen müssen",
              "Du hättest mir das sagen müssen",
              "Das hättest du mir sagen sollen",
              "Das hättest du mir sagen müssen"
            ]
          },
          {
            t: "listen",
            it: "Es tut mir leid, ich hätte dir Bescheid sagen sollen. Ich habe den Termin leider vergessen."
          },
          { t: "speak", it: "Eigentlich hätte ich früher losfahren müssen." }
        ]
      },
      {
        id: "b2-u01-l3",
        tags: ["g-konjunktiv2", "g-konnektoren"],
        cefr: "B2",
        titleIt: "Als ob er nichts wüsste",
        grammar: {
          examples: [
            { it: "Er tut so, als ob er nichts wüsste." },
            { it: "Sie sieht aus, als ob sie nicht geschlafen hätte." },
            { it: "Du redest, als wärst du der Chef." },
            { it: "Es klingt, als wenn es draußen regnen würde." },
            { it: "Er benimmt sich, als ob nichts passiert wäre." },
            { it: "Mir ist, als hätte ich ihn schon einmal gesehen." }
          ]
        },
        vocab: [
          { it: "der Eindruck", plural: "die Eindrücke", ex: "Ich habe den Eindruck, dass er lügt." },
          { it: "das Verhalten", plural: "-", ex: "Sein Verhalten war seltsam." },
          { it: "der Schein", plural: "-", ex: "Der Schein trügt." },
          { it: "die Ahnung", plural: "die Ahnungen", ex: "Ich habe keine Ahnung." },
          { it: "sich benehmen", ex: "Er benimmt sich wie ein Kind." },
          { it: "so tun", ex: "Sie tut so, als ob sie mich nicht kennen würde." },
          { it: "aussehen", ex: "Du siehst müde aus." },
          { it: "wirken", ex: "Er wirkt heute nervös." },
          { it: "klingen", ex: "Das klingt gut." },
          { it: "scheinen", ex: "Er scheint müde zu sein." },
          { it: "seltsam", ex: "Das ist eine seltsame Geschichte." },
          { it: "überrascht", ex: "Sie war sehr überrascht." }
        ],
        exercises: [
          { t: "mcq", a: 0 },
          { t: "mcq", a: 0 },
          { t: "fill", a: ["wärst", "wärest"] },
          { t: "fill", a: ["wäre"] },
          {
            t: "cloze",
            text: "Mir ist, als {{1}} ich ihn schon einmal {{2}}.",
            gaps: [["hätte"], ["gesehen"]]
          },
          { t: "multi", a: [0, 1, 2] },
          {
            t: "order",
            tokens: ["Sie", "tut", "so,", "als", "ob", "sie", "mich", "nicht", "kennen", "würde"],
            a: ["Sie tut so, als ob sie mich nicht kennen würde"]
          },
          {
            t: "trans",
            dir: "toIt",
            a: [
              "Er benimmt sich, als ob nichts passiert wäre",
              "Er benimmt sich, als wäre nichts passiert",
              "Er benimmt sich, als wenn nichts passiert wäre",
              "Er benimmt sich, als ob nichts geschehen wäre",
              "Er benimmt sich, als wäre nichts geschehen",
              "Er tut so, als ob nichts passiert wäre",
              "Er tut so, als wäre nichts passiert"
            ]
          },
          {
            t: "listen",
            it: "Er hat so getan, als ob er mich nicht gesehen hätte. Aber ich hatte den Eindruck, dass er mich genau erkannt hat."
          },
          { t: "speak", it: "Du siehst aus, als ob du die ganze Nacht nicht geschlafen hättest." }
        ]
      }
    ],
    test: {
      id: "b2-u01-test",
      tags: ["g-konjunktiv2", "g-modalverben"],
      cefr: "B2",
      titleIt: "Test: Hätte ich das gewusst",
      exercises: [
        { t: "conj", verb: "fahren", tense: "konj2Verg", persons: [0, 1, 2, 3, 4, 5] },
        { t: "conj", verb: "lernen", tense: "konj2Verg", persons: [0, 1, 2, 3, 4, 5] },
        { t: "fill", a: ["hätte"] },
        { t: "fill", a: ["können"] },
        { t: "fill", a: ["wüsste"] },
        { t: "mcq", a: 0 },
        { t: "mcq", a: 0 },
        { t: "multi", a: [0, 1, 2] },
        {
          t: "listen",
          it: "Wenn wir rechtzeitig losgefahren wären, hätten wir den Zug nicht verpasst. Ich hätte auf dich hören sollen."
        },
        { t: "speak", it: "Hätte ich das bloß früher gewusst, dann hätte ich mich anders entschieden." }
      ]
    }
  }
]);
