/* ============================================================
   Language-neutral layer: German (de-DE), structure and answer keys.
   Learner-language texts live in data/i18n/<lang>/pfl-03.js.
   pfl-u03 belongs to the nursing track (pseudo-level PFL);
   every lesson carries its real CEFR level.
   ============================================================ */
LINGUAI.addUnits("PFL", [
  {
    id: "pfl-u03",
    icon: "🛁",
    titleIt: "Grundpflege und Mobilisation",
    lessons: [
      {
        id: "pfl-u03-l1",
        tags: ["g-reflexivverben"],
        cefr: "B1",
        titleIt: "Waschen und Anziehen",
        grammar: {
          examples: [
            { it: "Möchten Sie sich heute selbst waschen?" },
            { it: "Ich wasche mir zuerst das Gesicht." },
            { it: "Können Sie sich allein anziehen?" },
            { it: "Den Intimbereich waschen Sie sich selbst, ich warte so lange draußen." },
            { it: "Möchten Sie sich rasieren?" },
            { it: "Herr Brandt hat sich schon angezogen." }
          ]
        },
        vocab: [
          { it: "die Grundpflege", plural: "-", ex: "Um sieben Uhr beginnt die Grundpflege." },
          { it: "die Körperpflege", plural: "-", ex: "Bei der Körperpflege helfe ich Ihnen gern." },
          { it: "sich waschen", ex: "Möchten Sie sich am Waschbecken waschen?" },
          { it: "sich anziehen", ex: "Können Sie sich allein anziehen?" },
          { it: "sich ausziehen", ex: "Ziehen Sie sich bitte das Nachthemd aus." },
          { it: "sich rasieren", ex: "Möchten Sie sich heute rasieren?" },
          { it: "sich kämmen", ex: "Ich kämme mich lieber selbst." },
          { it: "der Waschlappen", plural: "die Waschlappen", ex: "Hier ist ein frischer Waschlappen." },
          { it: "das Handtuch", plural: "die Handtücher", ex: "Das Handtuch liegt auf dem Stuhl." },
          { it: "das Waschbecken", plural: "die Waschbecken", ex: "Wir gehen zusammen zum Waschbecken." },
          { it: "die Intimpflege", plural: "-", ex: "Die Intimpflege machen Sie selbst, wenn Sie möchten." },
          { it: "die Zahnprothese", plural: "die Zahnprothesen", ex: "Möchten Sie Ihre Zahnprothese reinigen?" }
        ],
        dialogue: {
          titleIt: "Morgens im Zimmer",
          lines: [
            { who: "👩‍⚕️", it: "Guten Morgen, Frau Keller. Haben Sie gut geschlafen?" },
            { who: "🧓", it: "Guten Morgen. Es geht so." },
            { who: "👩‍⚕️", it: "Möchten Sie sich heute am Waschbecken waschen oder lieber im Bett?" },
            { who: "🧓", it: "Am Waschbecken, wenn Sie mir helfen." },
            { who: "👩‍⚕️", it: "Gern. Das Gesicht und die Arme waschen Sie sich selbst, den Rücken wasche ich Ihnen." },
            { who: "🧓", it: "Und untenherum mache ich das lieber allein." },
            { who: "👩‍⚕️", it: "Natürlich. Ich gebe Ihnen einen frischen Waschlappen und warte so lange draußen. Klingeln Sie, wenn Sie fertig sind." },
            { who: "🧓", it: "Danke, das ist mir lieber." },
            { who: "👩‍⚕️", it: "Danach ziehen Sie sich an. Welche Bluse möchten Sie heute tragen?" },
            { who: "🧓", it: "Die blaue, bitte." }
          ]
        },
        exercises: [
          { t: "mcq", a: 1 },
          { t: "conj", verb: "sich waschen", tense: "praes", persons: [0, 1, 2, 3, 4, 5] },
          { t: "fill", a: ["sich"] },
          {
            t: "cloze",
            text: "Ich wasche {{1}} zuerst das Gesicht, dann ziehe ich {{2}} an.",
            gaps: [["mir"], ["mich"]]
          },
          { t: "multi", a: [0, 2, 3] },
          {
            t: "gender",
            opts: ["der", "die", "das"],
            items: [
              { it: "Waschlappen", a: "der" },
              { it: "Handtuch", a: "das" },
              { it: "Waschbecken", a: "das" },
              { it: "Intimpflege", a: "die" },
              { it: "Zahnprothese", a: "die" },
              { it: "Grundpflege", a: "die" }
            ]
          },
          {
            t: "match",
            pairs: [{ it: "sich waschen" }, { it: "sich anziehen" }, { it: "sich ausziehen" }, { it: "sich rasieren" }]
          },
          {
            t: "order",
            tokens: ["Können", "Sie", "sich", "allein", "anziehen"],
            a: ["Können Sie sich allein anziehen"]
          },
          {
            t: "trans",
            dir: "toIt",
            a: ["Möchten Sie sich rasieren", "Wollen Sie sich rasieren"]
          },
          {
            t: "dialogue",
            lines: [
              { sp: "A", it: "Guten Morgen. Ich möchte mich heute gern selbst waschen." },
              {
                sp: "TY",
                choices: [
                  "Gern. Den Rücken wasche ich Ihnen, den Rest machen Sie selbst.",
                  "Gern. Den Rücken wasche ich Sie, den Rest machen Sie selbst.",
                  "Gern. Den Rücken wasche ich dich, den Rest machst du selbst."
                ],
                a: 0
              },
              { sp: "A", it: "Und untenherum? Das ist mir etwas unangenehm." },
              {
                sp: "TY",
                choices: [
                  "Das verstehe ich. Den Intimbereich waschen Sie sich selbst, ich warte draußen.",
                  "Das verstehe ich. Den Intimbereich waschen Sie Sie selbst, ich warte draußen.",
                  "Das verstehe ich. Den Intimbereich waschen sich Sie selbst, ich warte draußen."
                ],
                a: 0
              },
              { sp: "A", it: "Und danach?" },
              {
                sp: "TY",
                choices: [
                  "Danach ziehen Sie sich an, und ich helfe Ihnen mit den Strümpfen.",
                  "Danach Sie ziehen sich an, und ich helfe Ihnen mit den Strümpfen.",
                  "Danach ziehen Sie an sich, und ich helfe Ihnen mit den Strümpfen."
                ],
                a: 0
              }
            ]
          },
          {
            t: "listen",
            it: "Das Gesicht und die Arme waschen Sie sich selbst, den Rücken wasche ich Ihnen."
          },
          { t: "speak", it: "Möchten Sie sich heute selbst waschen?" }
        ]
      },
      {
        id: "pfl-u03-l2",
        tags: ["g-wechselpraep"],
        cefr: "B1",
        titleIt: "Mobilisation und Lagerung",
        grammar: {
          examples: [
            { it: "Ich setze Sie jetzt an die Bettkante." },
            { it: "Sie sitzen jetzt an der Bettkante." },
            { it: "Wir legen Sie auf die Seite." },
            { it: "Sie liegen jetzt bequem auf der Seite." },
            { it: "Ich stelle den Rollator neben das Bett." },
            { it: "Der Rollator steht neben dem Bett." }
          ]
        },
        vocab: [
          { it: "die Mobilisation", plural: "die Mobilisationen", ex: "Heute machen wir die erste Mobilisation." },
          { it: "mobilisieren", ex: "Wir mobilisieren Herrn Brandt heute an die Bettkante." },
          { it: "die Lagerung", plural: "die Lagerungen", ex: "Bei der Lagerung helfen wir zu zweit." },
          { it: "umlagern", ex: "Wir lagern Sie jetzt um." },
          { it: "die Bettkante", plural: "die Bettkanten", ex: "Setzen Sie sich bitte an die Bettkante." },
          { it: "der Rollstuhl", plural: "die Rollstühle", ex: "Ich setze Sie in den Rollstuhl." },
          { it: "der Rollator", plural: "die Rollatoren", ex: "Der Rollator steht neben dem Bett." },
          { it: "das Kissen", plural: "die Kissen", ex: "Ich lege Ihnen ein Kissen unter den Kopf." },
          { it: "der Dekubitus", plural: "die Dekubitus", ex: "Im Bericht steht: kein Dekubitus." },
          { it: "das Druckgeschwür", plural: "die Druckgeschwüre", ex: "Wir lagern Sie um, damit kein Druckgeschwür entsteht." },
          { it: "die Kontraktur", plural: "die Kontrakturen", ex: "Die Patientin hat eine Kontraktur im Knie." },
          { it: "die Gelenkversteifung", plural: "die Gelenkversteifungen", ex: "Bewegung hilft gegen eine Gelenkversteifung." }
        ],
        dialogue: {
          titleIt: "Zum ersten Mal an die Bettkante",
          lines: [
            { who: "👩‍⚕️", it: "Herr Brandt, heute setzen wir Sie zum ersten Mal an die Bettkante. Ist das in Ordnung?" },
            { who: "🧓", it: "Ja, aber ich habe etwas Angst." },
            { who: "👩‍⚕️", it: "Das ist ganz normal. Mein Kollege hilft mir. Drehen Sie sich zuerst auf die Seite." },
            { who: "🧓", it: "So?" },
            { who: "👩‍⚕️", it: "Genau. Jetzt stellen wir Ihre Füße auf den Boden, und Sie setzen sich langsam auf." },
            { who: "🧓", it: "Mir ist ein bisschen schwindelig." },
            { who: "👩‍⚕️", it: "Dann bleiben Sie erst einmal ruhig an der Bettkante sitzen. Wir sind bei Ihnen." },
            { who: "🧓", it: "Jetzt geht es schon besser." },
            { who: "👩‍⚕️", it: "Gut. Der Rollstuhl steht neben dem Bett. Möchten Sie heute noch in den Rollstuhl?" }
          ]
        },
        exercises: [
          { t: "mcq", a: 1 },
          { t: "fill", a: ["dem"] },
          {
            t: "cloze",
            text: "Wir legen Sie auf {{1}} Seite. Jetzt liegen Sie bequem auf {{2}} Seite.",
            gaps: [["die"], ["der"]]
          },
          { t: "multi", a: [0, 2, 3] },
          {
            t: "gender",
            opts: ["der", "die", "das"],
            items: [
              { it: "Bettkante", a: "die" },
              { it: "Rollstuhl", a: "der" },
              { it: "Rollator", a: "der" },
              { it: "Kissen", a: "das" },
              { it: "Druckgeschwür", a: "das" },
              { it: "Lagerung", a: "die" }
            ]
          },
          {
            t: "match",
            pairs: [{ it: "setzen" }, { it: "legen" }, { it: "stellen" }]
          },
          {
            t: "order",
            tokens: ["Der", "Rollstuhl", "steht", "neben", "dem", "Bett"],
            a: ["Der Rollstuhl steht neben dem Bett"]
          },
          {
            t: "trans",
            dir: "toIt",
            a: ["Ich setze Sie in den Rollstuhl"]
          },
          { t: "fill", a: ["Druckgeschwür"] },
          {
            t: "dialogue",
            lines: [
              { sp: "A", it: "Ich möchte heute gern aufstehen." },
              {
                sp: "TY",
                choices: [
                  "Gut. Zuerst setzen wir Sie an die Bettkante.",
                  "Gut. Zuerst setzen wir Sie an der Bettkante.",
                  "Gut. Zuerst sitzen wir Sie an die Bettkante."
                ],
                a: 0
              },
              { sp: "A", it: "Mir ist etwas schwindelig." },
              {
                sp: "TY",
                choices: [
                  "Dann bleiben Sie erst einmal an der Bettkante sitzen.",
                  "Dann bleiben Sie erst einmal an die Bettkante sitzen.",
                  "Dann bleiben Sie erst einmal an der Bettkante setzen."
                ],
                a: 0
              },
              { sp: "A", it: "Wo ist denn mein Rollator?" },
              {
                sp: "TY",
                choices: ["Er steht neben dem Bett.", "Er steht neben das Bett.", "Er stellt neben dem Bett."],
                a: 0
              }
            ]
          },
          {
            t: "listen",
            it: "Der Rollstuhl steht neben dem Bett. Möchten Sie heute noch in den Rollstuhl?"
          },
          { t: "speak", it: "Ich setze Sie jetzt an die Bettkante." }
        ]
      },
      {
        id: "pfl-u03-l3",
        tags: ["g-modalverben"],
        cefr: "B1",
        titleIt: "Essen, Trinken, Ausscheiden",
        grammar: {
          examples: [
            { it: "Möchten Sie etwas trinken?" },
            { it: "Können Sie gut schlucken?" },
            { it: "Müssen Sie zur Toilette?" },
            { it: "Darf ich Ihnen beim Essen helfen?" },
            { it: "Soll ich Ihnen das Fleisch klein schneiden?" },
            { it: "Sie müssen sich nicht beeilen." }
          ]
        },
        vocab: [
          { it: "die Mahlzeit", plural: "die Mahlzeiten", ex: "Die erste Mahlzeit gibt es um halb acht." },
          { it: "schlucken", ex: "Können Sie gut schlucken?" },
          { it: "sich verschlucken", ex: "Verschlucken Sie sich oft beim Trinken?" },
          { it: "die Dysphagie", plural: "die Dysphagien", ex: "Die Patientin hat eine Dysphagie." },
          { it: "die Schluckstörung", plural: "die Schluckstörungen", ex: "Seit dem Schlaganfall hat er eine Schluckstörung." },
          { it: "die Miktion", plural: "die Miktionen", ex: "Im Bericht steht: Miktion unauffällig." },
          { it: "das Wasserlassen", plural: "-", ex: "Haben Sie Probleme beim Wasserlassen?" },
          { it: "die Defäkation", plural: "die Defäkationen", ex: "In der Dokumentation schreibt man Defäkation." },
          { it: "der Stuhlgang", plural: "-", ex: "Wann hatten Sie zuletzt Stuhlgang?" },
          { it: "die Inkontinenz", plural: "die Inkontinenzen", ex: "Die Patientin hat eine Inkontinenz." },
          { it: "die Blasenschwäche", plural: "-", ex: "Viele ältere Menschen haben eine Blasenschwäche." },
          { it: "die Inkontinenzeinlage", plural: "die Inkontinenzeinlagen", ex: "Ich bringe Ihnen eine frische Inkontinenzeinlage." }
        ],
        dialogue: {
          titleIt: "Beim Mittagessen",
          lines: [
            { who: "👩‍⚕️", it: "Frau Keller, das Mittagessen ist da. Möchten Sie am Tisch essen oder im Bett?" },
            { who: "🧓", it: "Am Tisch, bitte." },
            { who: "👩‍⚕️", it: "Soll ich Ihnen das Fleisch klein schneiden?" },
            { who: "🧓", it: "Ja, das ist nett. Ich verschlucke mich in letzter Zeit oft." },
            { who: "👩‍⚕️", it: "Danke, dass Sie mir das sagen. Das gebe ich an die Ärztin weiter. Möchten Sie etwas trinken?" },
            { who: "🧓", it: "Ein Glas Wasser, bitte. Und danach muss ich zur Toilette." },
            { who: "👩‍⚕️", it: "Kein Problem. Klingeln Sie einfach, dann begleite ich Sie. Sie müssen sich nicht beeilen." }
          ]
        },
        exercises: [
          { t: "mcq", a: 1 },
          { t: "conj", verb: "dürfen", tense: "praes", persons: [0, 1, 2, 3, 4, 5] },
          { t: "fill", a: ["Können"] },
          {
            t: "cloze",
            text: "{{1}} ich Ihnen beim Essen helfen? Sie {{2}} sich nicht beeilen.",
            gaps: [["Darf", "Kann", "Soll"], ["müssen"]]
          },
          { t: "multi", a: [0, 1, 2] },
          {
            t: "match",
            pairs: [{ it: "die Dysphagie" }, { it: "die Miktion" }, { it: "die Defäkation" }, { it: "die Harninkontinenz" }]
          },
          {
            t: "gender",
            opts: ["der", "die", "das"],
            items: [
              { it: "Mahlzeit", a: "die" },
              { it: "Schluckstörung", a: "die" },
              { it: "Wasserlassen", a: "das" },
              { it: "Stuhlgang", a: "der" },
              { it: "Blasenschwäche", a: "die" },
              { it: "Inkontinenzeinlage", a: "die" }
            ]
          },
          {
            t: "order",
            tokens: ["Möchten", "Sie", "am", "Tisch", "essen"],
            a: ["Möchten Sie am Tisch essen"]
          },
          {
            t: "trans",
            dir: "toIt",
            a: [
              "Müssen Sie zur Toilette",
              "Müssen Sie auf die Toilette",
              "Müssen Sie zur Toilette gehen",
              "Müssen Sie auf die Toilette gehen"
            ]
          },
          {
            t: "dialogue",
            lines: [
              { sp: "A", it: "Ich habe Durst." },
              {
                sp: "TY",
                choices: ["Möchten Sie ein Glas Wasser?", "Möchten Sie einen Glas Wasser?", "Möchten ein Glas Wasser Sie?"],
                a: 0
              },
              { sp: "A", it: "Ich muss auch zur Toilette, aber ich bin so langsam." },
              {
                sp: "TY",
                choices: [
                  "Kein Problem, Sie müssen sich nicht beeilen.",
                  "Kein Problem, Sie dürfen sich nicht beeilen.",
                  "Kein Problem, Sie müssen nicht sich beeilen."
                ],
                a: 0
              },
              { sp: "A", it: "Beim Trinken verschlucke ich mich oft." },
              {
                sp: "TY",
                choices: [
                  "Danke, dass Sie mir das sagen. Ich gebe es an die Ärztin weiter.",
                  "Danke, dass Sie mir das sagen. Ich gebe es an die Ärztin weitergeben.",
                  "Danke, dass Sie mir das sagen. Ich muss es an die Ärztin weitergebe."
                ],
                a: 0
              }
            ]
          },
          {
            t: "listen",
            it: "Ein Glas Wasser, bitte. Und danach muss ich zur Toilette."
          },
          { t: "speak", it: "Darf ich Ihnen beim Essen helfen?" }
        ]
      },
      {
        id: "pfl-u03-l4",
        tags: ["g-infinitiv-zu", "g-modalverben"],
        cefr: "B1",
        titleIt: "Selbstständig oder mit Hilfe?",
        grammar: {
          examples: [
            { it: "Versuchen Sie bitte, sich selbst anzuziehen." },
            { it: "Es fällt mir schwer, allein aufzustehen." },
            { it: "Ich helfe Ihnen, die Kompressionsstrümpfe anzuziehen." },
            { it: "Es ist wichtig, sich regelmäßig zu bewegen." },
            { it: "Sie können sich die Zähne selbst putzen." },
            { it: "Sie brauchen sich nicht zu beeilen." }
          ]
        },
        vocab: [
          { it: "selbstständig", ex: "Herr Brandt wäscht sich selbstständig." },
          { it: "die Selbstständigkeit", plural: "-", ex: "Wir möchten Ihre Selbstständigkeit erhalten." },
          { it: "die Hilfe", plural: "die Hilfen", ex: "Beim Anziehen braucht sie etwas Hilfe." },
          { it: "die Unterstützung", plural: "die Unterstützungen", ex: "Mit Unterstützung geht er bis zum Fenster." },
          { it: "versuchen", ex: "Versuchen Sie, allein aufzustehen." },
          { it: "schaffen", ex: "Das schaffe ich allein." },
          { it: "aufstehen", ex: "Es fällt mir schwer, allein aufzustehen." },
          { it: "die Thrombose", plural: "die Thrombosen", ex: "Bewegung senkt das Risiko einer Thrombose." },
          { it: "das Blutgerinnsel", plural: "die Blutgerinnsel", ex: "Ein Blutgerinnsel kann ein Blutgefäß verschließen." },
          { it: "die Prophylaxe", plural: "die Prophylaxen", ex: "Zur Thromboseprophylaxe gehört Bewegung." },
          { it: "die Vorbeugung", plural: "-", ex: "Bewegung ist eine gute Vorbeugung." },
          { it: "der Kompressionsstrumpf", plural: "die Kompressionsstrümpfe", ex: "Ich helfe Ihnen, die Kompressionsstrümpfe anzuziehen." }
        ],
        dialogue: {
          titleIt: "Was schaffen Sie allein?",
          lines: [
            { who: "👩‍⚕️", it: "Herr Brandt, was schaffen Sie heute schon allein?" },
            { who: "🧓", it: "Waschen kann ich mich selbst. Aber es fällt mir schwer, die Strümpfe anzuziehen." },
            { who: "👩‍⚕️", it: "Dabei helfe ich Ihnen gern. Versuchen Sie bitte, das Hemd selbst anzuziehen." },
            { who: "🧓", it: "Warum machen Sie das nicht für mich? Das geht doch schneller." },
            { who: "👩‍⚕️", it: "Es ist wichtig, möglichst viel selbst zu machen. So bleiben Sie selbstständig." },
            { who: "🧓", it: "Na gut. Und muss ich heute auch wieder laufen?" },
            { who: "👩‍⚕️", it: "Ja, wir gehen zusammen bis zum Fenster. Bewegung ist eine gute Vorbeugung gegen eine Thrombose." }
          ]
        },
        exercises: [
          { t: "mcq", a: 1 },
          { t: "fill", a: ["aufzustehen"] },
          {
            t: "cloze",
            text: "Sie können sich selbst {{1}}. Versuchen Sie bitte, sich auch selbst {{2}}.",
            gaps: [["waschen"], ["anzuziehen"]]
          },
          { t: "multi", a: [0, 2, 4] },
          {
            t: "match",
            pairs: [{ it: "die Thrombose" }, { it: "die Prophylaxe" }, { it: "der Dekubitus" }, { it: "die Kontraktur" }]
          },
          {
            t: "gender",
            opts: ["der", "die", "das"],
            items: [
              { it: "Thrombose", a: "die" },
              { it: "Blutgerinnsel", a: "das" },
              { it: "Prophylaxe", a: "die" },
              { it: "Vorbeugung", a: "die" },
              { it: "Kompressionsstrumpf", a: "der" },
              { it: "Selbstständigkeit", a: "die" }
            ]
          },
          {
            t: "order",
            tokens: ["Es", "ist", "wichtig,", "sich", "regelmäßig", "zu", "bewegen"],
            a: ["Es ist wichtig, sich regelmäßig zu bewegen"]
          },
          {
            t: "trans",
            dir: "toIt",
            a: ["Das schaffe ich allein", "Ich schaffe das allein", "Das schaffe ich alleine", "Ich schaffe das alleine"]
          },
          { t: "conj", verb: "können", tense: "praes", persons: [0, 1, 2, 3, 4, 5] },
          {
            t: "dialogue",
            lines: [
              { sp: "A", it: "Können Sie mich nicht einfach anziehen? Das geht schneller." },
              {
                sp: "TY",
                choices: [
                  "Ich helfe Ihnen gern, aber versuchen Sie zuerst, das Hemd selbst anzuziehen.",
                  "Ich helfe Ihnen gern, aber versuchen Sie zuerst, das Hemd selbst anziehen.",
                  "Ich helfe Ihnen gern, aber versuchen Sie zuerst, das Hemd selbst zu anziehen."
                ],
                a: 0
              },
              { sp: "A", it: "Die Strümpfe schaffe ich aber nicht." },
              {
                sp: "TY",
                choices: ["Kein Problem, dabei helfe ich Ihnen.", "Kein Problem, dabei helfe ich Sie.", "Kein Problem, dabei ich helfe Ihnen."],
                a: 0
              },
              { sp: "A", it: "Muss ich heute wieder laufen?" },
              {
                sp: "TY",
                choices: [
                  "Ja, es ist wichtig, sich jeden Tag zu bewegen.",
                  "Ja, es ist wichtig, sich jeden Tag bewegen.",
                  "Ja, es ist wichtig, jeden Tag zu sich bewegen."
                ],
                a: 0
              }
            ]
          },
          {
            t: "listen",
            it: "Es ist wichtig, möglichst viel selbst zu machen. So bleiben Sie selbstständig."
          },
          { t: "speak", it: "Versuchen Sie bitte, sich selbst anzuziehen." }
        ]
      }
    ],
    test: {
      id: "pfl-u03-test",
      tags: ["g-reflexivverben", "g-wechselpraep", "g-modalverben"],
      cefr: "B1",
      titleIt: "Test: Grundpflege und Mobilisation",
      exercises: [
        { t: "mcq", a: 1 },
        { t: "fill", a: ["mir"] },
        { t: "fill", a: ["das"] },
        { t: "conj", verb: "sich anziehen", tense: "praes", persons: [0, 1, 2, 3, 4, 5] },
        {
          t: "match",
          pairs: [{ it: "die Dysphagie" }, { it: "die Harninkontinenz" }, { it: "der Dekubitus" }, { it: "die Prophylaxe" }]
        },
        { t: "multi", a: [0, 2, 3] },
        {
          t: "cloze",
          text: "Wir legen Sie jetzt auf {{1}} Seite. {{2}} Sie bequem?",
          gaps: [["die"], ["Liegen"]]
        },
        {
          t: "order",
          tokens: ["Darf", "ich", "Ihnen", "beim", "Essen", "helfen"],
          a: ["Darf ich Ihnen beim Essen helfen"]
        },
        {
          t: "gender",
          opts: ["der", "die", "das"],
          items: [
            { it: "Waschlappen", a: "der" },
            { it: "Bettkante", a: "die" },
            { it: "Stuhlgang", a: "der" },
            { it: "Druckgeschwür", a: "das" },
            { it: "Blutgerinnsel", a: "das" },
            { it: "Intimpflege", a: "die" }
          ]
        },
        {
          t: "listen",
          it: "Das Gesicht und die Arme waschen Sie sich selbst. Danach setzen wir Sie an die Bettkante."
        },
        { t: "speak", it: "Müssen Sie zur Toilette?" }
      ]
    }
  }
]);
