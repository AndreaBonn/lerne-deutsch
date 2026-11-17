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
  },
  {
    id: "b2-u02",
    icon: "🔀",
    titleIt: "Bedingungen",
    lessons: [
      {
        id: "b2-u02-l1",
        tags: ["g-konditionalsatz"],
        cefr: "B2",
        titleIt: "Real, irreal, gemischt",
        grammar: {
          examples: [
            { it: "Wenn es morgen regnet, bleiben wir zu Hause." },
            { it: "Wenn ich mehr Geld hätte, würde ich weniger arbeiten." },
            { it: "Wenn du mich gefragt hättest, hätte ich dir geholfen." },
            { it: "Wenn er den Job angenommen hätte, würde er jetzt in München wohnen." },
            { it: "Wenn das Wetter schön ist, gehen wir wandern." },
            { it: "Wenn ich du wäre, würde ich das Angebot annehmen." }
          ]
        },
        vocab: [
          { it: "die Bedingung", plural: "die Bedingungen", ex: "Ich komme unter einer Bedingung." },
          { it: "das Angebot", plural: "die Angebote", ex: "Das Angebot klingt gut." },
          { it: "die Möglichkeit", plural: "die Möglichkeiten", ex: "Es gibt viele Möglichkeiten." },
          { it: "der Fall", plural: "die Fälle", ex: "In diesem Fall bleibe ich zu Hause." },
          { it: "die Folge", plural: "die Folgen", ex: "Die Entscheidung hat Folgen." },
          { it: "das Risiko", plural: "die Risiken", ex: "Das Risiko ist zu groß." },
          { it: "annehmen", ex: "Ich nehme das Angebot an." },
          { it: "ablehnen", ex: "Sie hat die Einladung abgelehnt." },
          { it: "abhängen", ex: "Das hängt vom Wetter ab." },
          { it: "riskieren", ex: "Ich will nichts riskieren." },
          { it: "unter Umständen", ex: "Unter Umständen komme ich später." },
          { it: "ernsthaft", ex: "Denkst du ernsthaft darüber nach?" }
        ],
        exercises: [
          { t: "mcq", a: 0 },
          { t: "mcq", a: 0 },
          { t: "mcq", a: 0 },
          { t: "mcq", a: 0 },
          { t: "fill", a: ["wäre"] },
          {
            t: "cloze",
            text: "Wenn das Wetter schön {{1}}, {{2}} wir wandern.",
            gaps: [["ist"], ["gehen"]]
          },
          {
            t: "cloze",
            text: "Wenn du mich gefragt {{1}}, {{2}} ich dir geholfen.",
            gaps: [["hättest"], ["hätte"]]
          },
          {
            t: "trans",
            dir: "toIt",
            a: [
              "Wenn ich mehr Geld hätte, würde ich weniger arbeiten",
              "Hätte ich mehr Geld, würde ich weniger arbeiten",
              "Wenn ich mehr Geld hätte, dann würde ich weniger arbeiten",
              "Wenn ich mehr Geld hätte, arbeitete ich weniger",
              "Hätte ich mehr Geld, arbeitete ich weniger"
            ]
          },
          {
            t: "listen",
            it: "Wenn ich das Angebot angenommen hätte, würde ich jetzt in Hamburg arbeiten. Aber nicht alles hängt vom Geld ab."
          },
          { t: "speak", it: "Wenn es morgen regnet, bleiben wir zu Hause und spielen Karten." }
        ]
      },
      {
        id: "b2-u02-l2",
        tags: ["g-konditionalsatz", "g-register"],
        cefr: "B2",
        titleIt: "Falls, sofern, es sei denn",
        grammar: {
          examples: [
            { it: "Falls du Hilfe brauchst, ruf mich an." },
            { it: "Sofern nichts dazwischenkommt, sind wir um acht da." },
            { it: "Wir fahren morgen los, es sei denn, es schneit." },
            { it: "Hätte ich das gewusst, wäre ich gekommen." },
            { it: "Sollten Sie Fragen haben, wenden Sie sich bitte an uns." },
            { it: "Im Notfall rufen Sie bitte diese Nummer an." }
          ]
        },
        vocab: [
          { it: "der Notfall", plural: "die Notfälle", ex: "Im Notfall rufen Sie bitte die 112 an." },
          { it: "die Ausnahme", plural: "die Ausnahmen", ex: "Das ist eine Ausnahme." },
          { it: "die Voraussetzung", plural: "die Voraussetzungen", ex: "Gute Deutschkenntnisse sind eine Voraussetzung." },
          { it: "der Zweifel", plural: "die Zweifel", ex: "Im Zweifel frag lieber nach." },
          { it: "die Anfrage", plural: "die Anfragen", ex: "Vielen Dank für Ihre Anfrage." },
          { it: "dazwischenkommen", ex: "Mir ist leider etwas dazwischengekommen." },
          { it: "sich wenden an", ex: "Wenden Sie sich bitte an die Rezeption." },
          { it: "benachrichtigen", ex: "Bitte benachrichtigen Sie uns rechtzeitig." },
          { it: "absagen", ex: "Ich muss den Termin leider absagen." },
          { it: "verschieben", ex: "Können wir das Treffen verschieben?" },
          { it: "gegebenenfalls", ex: "Gegebenenfalls melden wir uns bei Ihnen." },
          { it: "vorausgesetzt", ex: "Wir grillen, vorausgesetzt, das Wetter ist gut." }
        ],
        exercises: [
          { t: "mcq", a: 0 },
          { t: "mcq", a: 0 },
          { t: "fill", a: ["Falls", "Sofern"] },
          { t: "fill", a: ["Hätte"] },
          {
            t: "cloze",
            text: "Wir fahren morgen los, es {{1}} {{2}}, es schneit.",
            gaps: [["sei"], ["denn"]]
          },
          {
            t: "match",
            pairs: [{ it: "falls" }, { it: "sofern" }, { it: "es sei denn" }, { it: "gegebenenfalls" }]
          },
          {
            t: "order",
            tokens: ["Sollten", "Sie", "Fragen", "haben,", "wenden", "Sie", "sich", "bitte", "an", "uns"],
            a: ["Sollten Sie Fragen haben, wenden Sie sich bitte an uns"]
          },
          {
            t: "trans",
            dir: "toIt",
            a: [
              "Hätte ich das gewusst, wäre ich gekommen",
              "Hätte ich es gewusst, wäre ich gekommen",
              "Hätte ich das gewusst, dann wäre ich gekommen",
              "Hätte ich es gewusst, dann wäre ich gekommen"
            ]
          },
          {
            t: "listen",
            it: "Sollte es morgen schneien, verschieben wir die Reise. Falls Sie Fragen haben, wenden Sie sich bitte an die Rezeption."
          },
          { t: "speak", it: "Sofern nichts dazwischenkommt, sind wir um acht Uhr da." }
        ]
      },
      {
        id: "b2-u02-l3",
        tags: ["g-konditionalsatz", "g-modalpartikeln"],
        cefr: "B2",
        titleIt: "Wenn ich bloß ...",
        grammar: {
          examples: [
            { it: "Wenn ich bloß mehr Zeit hätte!" },
            { it: "Hätte ich nur nicht so viel gegessen!" },
            { it: "Wäre ich doch zu Hause geblieben!" },
            { it: "Wenn es doch endlich regnen würde!" },
            { it: "Mach das bloß nicht!" },
            { it: "Wenn du nur ein bisschen Geduld hättest, würdest du es schaffen." }
          ]
        },
        vocab: [
          { it: "die Geduld", plural: "-", ex: "Hab ein bisschen Geduld." },
          { it: "das Pech", plural: "-", ex: "So ein Pech!" },
          { it: "der Zufall", plural: "die Zufälle", ex: "Was für ein Zufall!" },
          { it: "das Schicksal", plural: "die Schicksale", ex: "Das war Schicksal." },
          { it: "die Sorge", plural: "die Sorgen", ex: "Mach dir keine Sorgen." },
          { it: "der Ärger", plural: "-", ex: "Ich will keinen Ärger." },
          { it: "sich ärgern", ex: "Ärgere dich nicht!" },
          { it: "hoffen", ex: "Ich hoffe, dass alles gut geht." },
          { it: "sich sehnen", ex: "Ich sehne mich nach Ruhe." },
          { it: "endlich", ex: "Endlich ist der Winter vorbei." },
          { it: "unbedingt", ex: "Du musst unbedingt kommen." },
          { it: "vergeblich", ex: "Wir haben vergeblich gewartet." }
        ],
        exercises: [
          { t: "mcq", a: 0 },
          { t: "mcq", a: 0 },
          { t: "fill", a: ["nur", "bloß", "doch"] },
          { t: "fill", a: ["Wäre"] },
          {
            t: "cloze",
            text: "Wenn es doch endlich {{1}} {{2}}!",
            gaps: [["regnen"], ["würde"]]
          },
          {
            t: "match",
            pairs: [{ it: "Wenn ich bloß ...!" }, { it: "endlich" }, { it: "unbedingt" }, { it: "vergeblich" }]
          },
          {
            t: "order",
            tokens: ["Hätte", "ich", "nur", "nicht", "so", "viel", "gegessen"],
            a: ["Hätte ich nur nicht so viel gegessen"]
          },
          {
            t: "trans",
            dir: "toIt",
            a: [
              "Wenn du es mir bloß früher gesagt hättest",
              "Wenn du es mir nur früher gesagt hättest",
              "Wenn du es mir doch früher gesagt hättest",
              "Hättest du es mir bloß früher gesagt",
              "Hättest du es mir nur früher gesagt",
              "Hättest du es mir doch früher gesagt",
              "Wenn du mir das bloß früher gesagt hättest",
              "Wenn du mir das nur früher gesagt hättest",
              "Hättest du mir das bloß früher gesagt",
              "Hättest du mir das nur früher gesagt",
              "Wenn du mir das doch früher gesagt hättest",
              "Hättest du mir das doch früher gesagt"
            ]
          },
          {
            t: "listen",
            it: "Wenn ich bloß nicht so lange gewartet hätte! Jetzt ist die Wohnung weg. So ein Pech."
          },
          { t: "speak", it: "Hätte ich nur ein bisschen mehr Geduld gehabt!" }
        ]
      }
    ],
    test: {
      id: "b2-u02-test",
      tags: ["g-konditionalsatz", "g-konjunktiv2"],
      cefr: "B2",
      titleIt: "Test: Bedingungen",
      exercises: [
        { t: "fill", a: ["wäre"] },
        { t: "fill", a: ["kommt"] },
        { t: "fill", a: ["Sollten"] },
        { t: "mcq", a: 0 },
        { t: "mcq", a: 0 },
        { t: "mcq", a: 0 },
        {
          t: "cloze",
          text: "Wenn ich mehr Zeit {{1}}, {{2}} ich öfter Sport machen.",
          gaps: [["hätte"], ["würde"]]
        },
        {
          t: "cloze",
          text: "{{1}} ich das gewusst, {{2}} ich dir geholfen.",
          gaps: [["Hätte"], ["hätte"]]
        },
        {
          t: "listen",
          it: "Falls du morgen Zeit hast, komm doch vorbei. Wenn ich gewusst hätte, dass du in der Stadt bist, hätte ich dich schon gestern angerufen."
        },
        { t: "speak", it: "Sollten Sie verhindert sein, sagen Sie bitte rechtzeitig ab." }
      ]
    }
  }
]);
