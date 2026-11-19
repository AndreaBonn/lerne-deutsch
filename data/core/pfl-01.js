/* ============================================================
   Language-neutral layer: German (de-DE), structure and answer keys.
   Learner-language texts live in data/i18n/<lang>/pfl-01.js.
   pfl-u01 is the first unit of the nursing track (pseudo-level PFL);
   every lesson carries its real CEFR level.
   ============================================================ */
LINGUAI.addUnits("PFL", [
  {
    id: "pfl-u01",
    icon: "🩺",
    titleIt: "Aufnahme und Anamnese",
    lessons: [
      {
        id: "pfl-u01-l1",
        tags: ["g-register", "g-satz-v2"],
        cefr: "B1",
        titleIt: "Guten Tag, ich bin Ihre Pflegefachkraft",
        grammar: {
          examples: [
            { it: "Guten Tag, mein Name ist Elena Marin. Ich bin heute Ihre Pflegefachkraft." },
            { it: "Wie heißen Sie, bitte?" },
            { it: "Wie ist Ihr Geburtsdatum?" },
            { it: "Jetzt bringe ich Sie auf Ihr Zimmer." },
            { it: "Haben Sie noch Fragen?" },
            { it: "Darf ich Ihnen kurz ein paar Fragen stellen?" }
          ]
        },
        vocab: [
          { it: "die Station", plural: "die Stationen", ex: "Die Station hat zwanzig Betten." },
          { it: "die Pflegefachkraft", plural: "die Pflegefachkräfte", ex: "Ich bin heute Ihre Pflegefachkraft." },
          { it: "die Pflegefachfrau", plural: "die Pflegefachfrauen", ex: "Sie arbeitet als Pflegefachfrau auf der Inneren." },
          { it: "der Pflegefachmann", plural: "die Pflegefachmänner", ex: "Mein Kollege ist Pflegefachmann." },
          { it: "der Patient", plural: "die Patienten", ex: "Der neue Patient kommt um zehn Uhr." },
          { it: "die Aufnahme", plural: "die Aufnahmen", ex: "Die Aufnahme dauert etwa eine halbe Stunde." },
          { it: "das Aufnahmegespräch", plural: "die Aufnahmegespräche", ex: "Nach dem Mittagessen mache ich das Aufnahmegespräch." },
          { it: "das Zimmer", plural: "die Zimmer", ex: "Ihr Zimmer ist am Ende des Flurs." },
          { it: "die Klingel", plural: "die Klingeln", ex: "Die Klingel ist neben dem Bett." },
          { it: "das Patientenarmband", plural: "die Patientenarmbänder", ex: "Darf ich kurz Ihr Patientenarmband sehen?" },
          { it: "aufnehmen", ex: "Wir nehmen Sie heute stationär auf." },
          { it: "sich vorstellen", ex: "Darf ich mich kurz vorstellen?" }
        ],
        dialogue: {
          titleIt: "Ankunft auf Station",
          lines: [
            { who: "👩‍⚕️", it: "Guten Tag, Herr Brandt. Mein Name ist Elena Marin, ich bin heute Ihre Pflegefachkraft." },
            { who: "🧓", it: "Guten Tag, Frau Marin." },
            { who: "👩‍⚕️", it: "Darf ich kurz Ihr Patientenarmband sehen? Wie ist Ihr Geburtsdatum, bitte?" },
            { who: "🧓", it: "Ich bin am 12. März 1950 geboren." },
            { who: "👩‍⚕️", it: "Danke. Jetzt bringe ich Sie auf Ihr Zimmer. Das ist Ihr Bett am Fenster." },
            { who: "🧓", it: "Schön, danke." },
            { who: "👩‍⚕️", it: "Wenn Sie Hilfe brauchen, drücken Sie bitte die Klingel. Gleich mache ich mit Ihnen das Aufnahmegespräch." },
            { who: "🧓", it: "In Ordnung." }
          ]
        },
        exercises: [
          { t: "mcq", a: 1 },
          { t: "multi", a: [0, 2, 3] },
          { t: "fill", a: ["Ihre"] },
          {
            t: "gender",
            opts: ["der", "die", "das"],
            items: [
              { it: "Station", a: "die" },
              { it: "Zimmer", a: "das" },
              { it: "Klingel", a: "die" },
              { it: "Aufnahmegespräch", a: "das" },
              { it: "Patientenarmband", a: "das" },
              { it: "Pflegefachkraft", a: "die" }
            ]
          },
          {
            t: "match",
            pairs: [{ it: "die Pflegefachfrau" }, { it: "der Pflegefachmann" }, { it: "die Station" }, { it: "die Klingel" }]
          },
          {
            t: "order",
            tokens: ["Jetzt", "bringe", "ich", "Sie", "auf", "Ihr", "Zimmer"],
            a: ["Jetzt bringe ich Sie auf Ihr Zimmer"]
          },
          {
            t: "cloze",
            text: "Wenn Sie Hilfe {{1}}, drücken Sie bitte die {{2}}.",
            gaps: [["brauchen"], ["Klingel"]]
          },
          {
            t: "trans",
            dir: "toIt",
            a: [
              "Darf ich Ihnen ein paar Fragen stellen",
              "Darf ich Ihnen kurz ein paar Fragen stellen",
              "Darf ich Ihnen einige Fragen stellen",
              "Kann ich Ihnen ein paar Fragen stellen",
              "Kann ich Ihnen kurz ein paar Fragen stellen"
            ]
          },
          {
            t: "dialogue",
            lines: [
              { sp: "A", it: "Guten Tag. Ich heiße Brandt, ich komme zur Aufnahme." },
              {
                sp: "TY",
                choices: [
                  "Guten Tag, Herr Brandt. Ich bin Frau Marin, Ihre Pflegefachkraft.",
                  "Hallo, Herr Brandt. Ich bin deine Pflegefachkraft.",
                  "Guten Tag, Herr Brandt. Ich Ihre Pflegefachkraft bin."
                ],
                a: 0
              },
              { sp: "A", it: "Wo ist denn mein Zimmer?" },
              {
                sp: "TY",
                choices: [
                  "Jetzt bringe ich Sie auf Ihr Zimmer.",
                  "Jetzt ich bringe Sie auf Ihr Zimmer.",
                  "Jetzt bringe ich dich auf dein Zimmer."
                ],
                a: 0
              },
              { sp: "A", it: "Und wenn ich in der Nacht Hilfe brauche?" },
              {
                sp: "TY",
                choices: [
                  "Dann drücken Sie bitte die Klingel.",
                  "Dann Sie drücken bitte die Klingel.",
                  "Dann drückst du bitte die Klingel."
                ],
                a: 0
              }
            ]
          },
          {
            t: "listen",
            it: "Guten Tag, mein Name ist Elena Marin. Ich bin heute Ihre Pflegefachkraft und bringe Sie jetzt auf Ihr Zimmer."
          },
          { t: "speak", it: "Darf ich Ihnen kurz ein paar Fragen stellen?" }
        ]
      },
      {
        id: "pfl-u01-l2",
        tags: ["g-pron-dat", "g-verben-dativ"],
        cefr: "B1",
        titleIt: "Wo tut es weh?",
        grammar: {
          examples: [
            { it: "Wo tut es Ihnen weh?" },
            { it: "Mir tut der Bauch weh." },
            { it: "Mir ist schwindelig." },
            { it: "Ihm ist übel." },
            { it: "Was fehlt Ihnen?" },
            { it: "Kann ich Ihnen helfen?" }
          ]
        },
        vocab: [
          { it: "der Schmerz", plural: "die Schmerzen", ex: "Haben Sie Schmerzen?" },
          { it: "wehtun", ex: "Wo tut es Ihnen weh?" },
          { it: "die Kopfschmerzen", plural: "die Kopfschmerzen", ex: "Ich habe seit gestern Kopfschmerzen." },
          { it: "der Bauch", plural: "die Bäuche", ex: "Mir tut der Bauch weh." },
          { it: "die Übelkeit", plural: "-", ex: "Nach dem Essen habe ich oft Übelkeit." },
          { it: "der Schwindel", plural: "-", ex: "Haben Sie oft Schwindel?" },
          { it: "die Atemnot", plural: "-", ex: "Auf der Treppe bekomme ich Atemnot." },
          { it: "der Durchfall", plural: "-", ex: "Seit zwei Tagen hat er Durchfall." },
          { it: "die Verstopfung", plural: "die Verstopfungen", ex: "Haben Sie Probleme mit Verstopfung?" },
          { it: "übel", ex: "Mir ist übel." },
          { it: "schwindelig", ex: "Beim Aufstehen ist mir schwindelig." },
          { it: "helfen", ex: "Kann ich Ihnen helfen?" }
        ],
        dialogue: {
          titleIt: "Was fehlt Ihnen?",
          lines: [
            { who: "👩‍⚕️", it: "Herr Brandt, was fehlt Ihnen? Warum sind Sie heute hier?" },
            { who: "🧓", it: "Mir tut seit drei Tagen der Bauch weh." },
            { who: "👩‍⚕️", it: "Wo genau tut es Ihnen weh? Können Sie es mir zeigen?" },
            { who: "🧓", it: "Hier, rechts unten." },
            { who: "👩‍⚕️", it: "Ist Ihnen auch übel?" },
            { who: "🧓", it: "Ja, mir ist übel, und gestern hatte ich Durchfall." },
            { who: "👩‍⚕️", it: "Haben Sie auch Atemnot oder Schwindel?" },
            { who: "🧓", it: "Nein, das nicht." }
          ]
        },
        exercises: [
          { t: "mcq", a: 2 },
          { t: "conj", verb: "helfen", tense: "praes", persons: [0, 1, 2, 3, 4, 5] },
          { t: "fill", a: ["Ihnen"] },
          {
            t: "cloze",
            text: "{{1}} tut der Rücken weh, und {{2}} ist übel.",
            gaps: [["Ihm"], ["ihm"]]
          },
          {
            t: "match",
            pairs: [{ it: "Mir ist übel." }, { it: "Mir ist schwindelig." }, { it: "Ich habe Atemnot." }, { it: "Ich habe Durchfall." }]
          },
          {
            t: "gender",
            opts: ["der", "die", "das"],
            items: [
              { it: "Bauch", a: "der" },
              { it: "Übelkeit", a: "die" },
              { it: "Schwindel", a: "der" },
              { it: "Atemnot", a: "die" },
              { it: "Durchfall", a: "der" },
              { it: "Verstopfung", a: "die" }
            ]
          },
          {
            t: "order",
            tokens: ["Seit", "gestern", "tut", "mir", "der", "Kopf", "weh"],
            a: ["Seit gestern tut mir der Kopf weh"]
          },
          {
            t: "trans",
            dir: "toIt",
            a: ["Ist Ihnen schwindelig", "Ist Ihnen schwindlig"]
          },
          {
            t: "dialogue",
            lines: [
              { sp: "A", it: "Guten Tag. Mir geht es gar nicht gut." },
              {
                sp: "TY",
                choices: ["Was fehlt Ihnen denn?", "Was fehlt Sie denn?", "Was fehlen Ihnen denn?"],
                a: 0
              },
              { sp: "A", it: "Mein Bauch tut weh." },
              {
                sp: "TY",
                choices: ["Wo genau tut es Ihnen weh?", "Wo genau tut es Sie weh?", "Wo genau tun Ihnen weh?"],
                a: 0
              },
              { sp: "A", it: "Hier, links. Und mir ist übel." },
              {
                sp: "TY",
                choices: ["Seit wann ist Ihnen übel?", "Seit wann sind Sie übel?", "Seit wann haben Sie übel?"],
                a: 0
              }
            ]
          },
          {
            t: "listen",
            it: "Mir tut seit drei Tagen der Bauch weh. Mir ist übel, und gestern hatte ich Durchfall."
          },
          { t: "speak", it: "Wo genau tut es Ihnen weh?" }
        ]
      },
      {
        id: "pfl-u01-l3",
        tags: ["g-perfekt", "g-satz-v2"],
        cefr: "B1",
        titleIt: "Der Anamnesebogen",
        grammar: {
          examples: [
            { it: "Haben Sie heute schon Ihre Tabletten genommen?" },
            { it: "Ich habe heute Morgen nichts gegessen." },
            { it: "Mein Hausarzt hat mich ins Krankenhaus eingewiesen." },
            { it: "Sind Sie in letzter Zeit gestürzt?" },
            { it: "Ich habe das Antibiotikum nicht vertragen." },
            { it: "Wann haben Sie zuletzt etwas getrunken?" }
          ]
        },
        vocab: [
          { it: "der Anamnesebogen", plural: "die Anamnesebögen", ex: "Ich fülle mit Ihnen den Anamnesebogen aus." },
          { it: "die Vorerkrankung", plural: "die Vorerkrankungen", ex: "Haben Sie Vorerkrankungen?" },
          { it: "die Allergie", plural: "die Allergien", ex: "Haben Sie eine Allergie gegen Medikamente?" },
          { it: "das Medikament", plural: "die Medikamente", ex: "Welche Medikamente nehmen Sie regelmäßig ein?" },
          { it: "der Medikationsplan", plural: "die Medikationspläne", ex: "Haben Sie Ihren Medikationsplan dabei?" },
          { it: "die Operation", plural: "die Operationen", ex: "Hatten Sie schon einmal eine Operation?" },
          { it: "der Hausarzt", plural: "die Hausärzte", ex: "Ihr Hausarzt hat Sie eingewiesen." },
          { it: "die Einweisung", plural: "die Einweisungen", ex: "Haben Sie die Einweisung dabei?" },
          { it: "der Sturz", plural: "die Stürze", ex: "Hatten Sie in letzter Zeit einen Sturz?" },
          { it: "einnehmen", ex: "Ich nehme die Tabletten morgens ein." },
          { it: "vertragen", ex: "Ich vertrage keine Milch." },
          { it: "regelmäßig", ex: "Nehmen Sie regelmäßig Medikamente?" }
        ],
        dialogue: {
          titleIt: "Fragen zur Vorgeschichte",
          lines: [
            { who: "👩‍⚕️", it: "Herr Brandt, ich fülle jetzt mit Ihnen den Anamnesebogen aus. Haben Sie Vorerkrankungen?" },
            { who: "🧓", it: "Ja, ich habe hohen Blutdruck. Und vor zwei Jahren hatte ich eine Operation am Knie." },
            { who: "👩‍⚕️", it: "Haben Sie Allergien?" },
            { who: "🧓", it: "Einmal habe ich ein Antibiotikum nicht vertragen. Ich habe einen Ausschlag bekommen." },
            { who: "👩‍⚕️", it: "Wissen Sie noch, wie das Medikament heißt?" },
            { who: "🧓", it: "Nein, leider nicht. Aber mein Hausarzt weiß es." },
            { who: "👩‍⚕️", it: "Gut, wir fragen dort nach. Welche Medikamente nehmen Sie regelmäßig ein?" },
            { who: "🧓", it: "Hier ist mein Medikationsplan." },
            { who: "👩‍⚕️", it: "Danke. Haben Sie heute schon Ihre Tabletten genommen?" },
            { who: "🧓", it: "Ja, heute Morgen." }
          ]
        },
        exercises: [
          { t: "conj", verb: "nehmen", tense: "perf", persons: [0, 1, 2, 3, 4, 5] },
          { t: "mcq", a: 1 },
          { t: "fill", a: ["genommen"] },
          { t: "multi", a: [0, 1, 3] },
          {
            t: "cloze",
            text: "Ich {{1}} das Antibiotikum nicht {{2}}.",
            gaps: [["habe"], ["vertragen"]]
          },
          {
            t: "order",
            tokens: ["Wann", "haben", "Sie", "zuletzt", "etwas", "gegessen"],
            a: ["Wann haben Sie zuletzt etwas gegessen"]
          },
          {
            t: "gender",
            opts: ["der", "die", "das"],
            items: [
              { it: "Anamnesebogen", a: "der" },
              { it: "Vorerkrankung", a: "die" },
              { it: "Medikament", a: "das" },
              { it: "Sturz", a: "der" },
              { it: "Operation", a: "die" },
              { it: "Hausarzt", a: "der" }
            ]
          },
          {
            t: "trans",
            dir: "toIt",
            a: ["Haben Sie heute schon etwas gegessen", "Haben Sie heute etwas gegessen"]
          },
          {
            t: "dialogue",
            lines: [
              { sp: "A", it: "Was möchten Sie noch wissen?" },
              {
                sp: "TY",
                choices: [
                  "Hatten Sie schon einmal eine Operation?",
                  "Sind Sie schon einmal eine Operation gehabt?",
                  "Hatten schon einmal Sie eine Operation?"
                ],
                a: 0
              },
              { sp: "A", it: "Ja, vor zwei Jahren am Knie." },
              {
                sp: "TY",
                choices: ["Und haben Sie Allergien?", "Und haben Allergien Sie?", "Und Sie Allergien haben?"],
                a: 0
              },
              { sp: "A", it: "Nein, ich glaube nicht." },
              {
                sp: "TY",
                choices: [
                  "Gut. Haben Sie heute schon Ihre Tabletten genommen?",
                  "Gut. Haben Sie heute schon Ihre Tabletten genehmt?",
                  "Gut. Sind Sie heute schon Ihre Tabletten genommen?"
                ],
                a: 0
              }
            ]
          },
          {
            t: "listen",
            it: "Ich habe hohen Blutdruck. Vor zwei Jahren hatte ich eine Operation am Knie, und ein Antibiotikum habe ich nicht vertragen."
          },
          { t: "speak", it: "Welche Medikamente nehmen Sie regelmäßig ein?" }
        ]
      },
      {
        id: "pfl-u01-l4",
        tags: ["g-wortbildung", "g-register"],
        cefr: "B1",
        titleIt: "Fachsprache und Laiensprache",
        grammar: {
          examples: [
            { it: "Der Patient hat eine bekannte Hypertonie." },
            { it: "Herr Brandt, Sie haben Bluthochdruck." },
            { it: "Bei Belastung hat der Patient Dyspnoe." },
            { it: "Haben Sie Atemnot, wenn Sie Treppen steigen?" },
            { it: "Die Zuckerkrankheit heißt in der Fachsprache Diabetes mellitus." },
            { it: "Viele Patienten sagen einfach: Ich habe Zucker." }
          ]
        },
        vocab: [
          { it: "die Anamnese", plural: "die Anamnesen", ex: "Wir erheben jetzt die Anamnese." },
          { it: "die Vorgeschichte", plural: "die Vorgeschichten", ex: "Erzählen Sie mir bitte etwas über Ihre Vorgeschichte." },
          { it: "die Hypertonie", plural: "die Hypertonien", ex: "Der Patient hat eine bekannte Hypertonie." },
          { it: "der Bluthochdruck", plural: "-", ex: "Sie haben Bluthochdruck." },
          { it: "der Diabetes mellitus", plural: "-", ex: "Die Patientin hat einen Diabetes mellitus Typ 2." },
          { it: "die Zuckerkrankheit", plural: "-", ex: "Seit wann haben Sie die Zuckerkrankheit?" },
          { it: "die Dyspnoe", plural: "-", ex: "Bei Belastung hat er Dyspnoe." },
          { it: "die Zephalgie", plural: "die Zephalgien", ex: "Im Bericht steht: Zephalgie seit zwei Tagen." },
          { it: "die Emesis", plural: "-", ex: "Nach dem Frühstück hatte die Patientin Emesis." },
          { it: "das Erbrechen", plural: "-", ex: "Das Erbrechen hat in der Nacht angefangen." },
          { it: "die Obstipation", plural: "die Obstipationen", ex: "Die Patientin hat eine Obstipation." },
          { it: "die Diarrhö", plural: "die Diarrhöen", ex: "Seit gestern hat der Patient Diarrhö." }
        ],
        dialogue: {
          titleIt: "Zwei Gespräche, zwei Register",
          lines: [
            { who: "👩‍⚕️", it: "Herr Doktor Weber, Herr Brandt hat eine bekannte Hypertonie und seit drei Tagen Schmerzen im Abdomen." },
            { who: "👨‍⚕️", it: "Hat er auch Nausea oder Emesis?" },
            { who: "👩‍⚕️", it: "Nausea ja, keine Emesis. Dazu Diarrhö seit gestern." },
            { who: "🧓", it: "Frau Marin, was hat der Arzt gesagt? Ich verstehe diese Wörter nicht." },
            { who: "👩‍⚕️", it: "Keine Sorge, Herr Brandt. Er hat nur gefragt, ob Ihnen übel ist und ob Sie erbrochen haben." },
            { who: "🧓", it: "Ach so. Und was ist eine Hypertonie?" },
            { who: "👩‍⚕️", it: "Das ist Bluthochdruck. Den kennen Sie ja schon." }
          ]
        },
        exercises: [
          {
            t: "match",
            pairs: [
              { it: "die Hypertonie" },
              { it: "die Dyspnoe" },
              { it: "die Obstipation" },
              { it: "die Zephalgie" },
              { it: "die Emesis" }
            ]
          },
          { t: "mcq", a: 2 },
          { t: "multi", a: [0, 2, 4] },
          { t: "fill", a: ["Bluthochdruck", "hohen Blutdruck"] },
          {
            t: "gender",
            opts: ["der", "die", "das"],
            items: [
              { it: "Bluthochdruck", a: "der" },
              { it: "Zuckerkrankheit", a: "die" },
              { it: "Atemnot", a: "die" },
              { it: "Anamnesebogen", a: "der" },
              { it: "Aufnahmegespräch", a: "das" },
              { it: "Vorgeschichte", a: "die" }
            ]
          },
          {
            t: "cloze",
            text: "Der Patient hat {{1}} bei Belastung. Ich frage ihn: Haben Sie {{2}}, wenn Sie Treppen steigen?",
            gaps: [["Dyspnoe"], ["Atemnot"]]
          },
          {
            t: "order",
            tokens: ["Haben", "Sie", "Atemnot,", "wenn", "Sie", "Treppen", "steigen"],
            a: ["Haben Sie Atemnot, wenn Sie Treppen steigen"]
          },
          {
            t: "trans",
            dir: "toIt",
            a: [
              "Haben Sie Bluthochdruck",
              "Haben Sie hohen Blutdruck"
            ]
          },
          { t: "fill", a: ["Zuckerkrankheit"] },
          {
            t: "listen",
            it: "Der Patient hat eine bekannte Hypertonie. Zu Herrn Brandt sage ich einfach: Sie haben Bluthochdruck."
          },
          { t: "speak", it: "Haben Sie Atemnot, wenn Sie Treppen steigen?" }
        ]
      }
    ],
    test: {
      id: "pfl-u01-test",
      tags: ["g-register", "g-pron-dat", "g-perfekt"],
      cefr: "B1",
      titleIt: "Test: Aufnahme und Anamnese",
      exercises: [
        { t: "mcq", a: 1 },
        { t: "fill", a: ["Ihnen"] },
        { t: "fill", a: ["Mir"] },
        { t: "conj", verb: "einnehmen", tense: "perf", persons: [0, 1, 2, 3, 4, 5] },
        {
          t: "match",
          pairs: [{ it: "die Hypertonie" }, { it: "die Dyspnoe" }, { it: "die Obstipation" }, { it: "die Diarrhö" }]
        },
        { t: "multi", a: [0, 2, 3] },
        {
          t: "cloze",
          text: "Mein Hausarzt {{1}} mich ins Krankenhaus {{2}}.",
          gaps: [["hat"], ["eingewiesen"]]
        },
        {
          t: "order",
          tokens: ["Welche", "Medikamente", "nehmen", "Sie", "regelmäßig", "ein"],
          a: ["Welche Medikamente nehmen Sie regelmäßig ein"]
        },
        {
          t: "gender",
          opts: ["der", "die", "das"],
          items: [
            { it: "Anamnese", a: "die" },
            { it: "Bluthochdruck", a: "der" },
            { it: "Medikament", a: "das" },
            { it: "Aufnahmegespräch", a: "das" },
            { it: "Durchfall", a: "der" },
            { it: "Vorgeschichte", a: "die" }
          ]
        },
        {
          t: "listen",
          it: "Guten Tag, ich bin heute Ihre Pflegefachkraft. Ich fülle jetzt mit Ihnen den Anamnesebogen aus. Haben Sie Allergien?"
        },
        { t: "speak", it: "Seit wann tut es Ihnen weh?" }
      ]
    }
  }
]);
