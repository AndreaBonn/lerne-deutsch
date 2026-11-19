/* ============================================================
   Language-neutral layer: German (de-DE), structure and answer keys.
   Learner-language texts live in data/i18n/<lang>/pfl-05.js.
   Every drug name in this unit (Dolorex, Cardiomin) is invented, and
   no sentence gives a dose: the unit teaches the language of drugs,
   not their use.
   ============================================================ */
LINGUAI.addUnits("PFL", [
  {
    id: "pfl-u05",
    icon: "💊",
    titleIt: "Medikamente und Beipackzettel",
    lessons: [
      {
        id: "pfl-u05-l1",
        tags: ["g-wortbildung"],
        cefr: "B1",
        titleIt: "Tabletten, Tropfen, Spritzen",
        grammar: {
          examples: [
            { it: "Das ist eine Schmerztablette." },
            { it: "Dolorex gibt es als Tablette und als Tropfen." },
            { it: "Die Spritze bekommen Sie unter die Haut." },
            { it: "Die Infusion läuft in die Vene." },
            { it: "Die Applikation ist oral, also über den Mund." },
            { it: "Die Augentropfen stehen im Kühlschrank." }
          ]
        },
        vocab: [
          { it: "die Tablette", plural: "die Tabletten", ex: "Schlucken Sie die Tablette bitte mit etwas Wasser." },
          { it: "die Kapsel", plural: "die Kapseln", ex: "Die Kapsel ist rot und weiß." },
          { it: "der Tropfen", plural: "die Tropfen", ex: "Die Tropfen sind für die Augen." },
          { it: "die Spritze", plural: "die Spritzen", ex: "Heute Abend bekommen Sie eine Spritze." },
          { it: "die Infusion", plural: "die Infusionen", ex: "Die Infusion läuft noch eine Stunde." },
          { it: "die Salbe", plural: "die Salben", ex: "Die Salbe kommt nur auf die Haut." },
          { it: "das Zäpfchen", plural: "die Zäpfchen", ex: "Das Zäpfchen ist im Kühlschrank." },
          { it: "oral", ex: "Das Medikament ist oral, also über den Mund." },
          { it: "subkutan", ex: "Die Spritze ist subkutan, also unter die Haut." },
          { it: "intravenös", ex: "Die Infusion ist intravenös, also in die Vene." },
          { it: "die Applikation", plural: "die Applikationen", ex: "Die Applikation ist subkutan." },
          { it: "die Gabe", plural: "die Gaben", ex: "Die nächste Gabe ist um acht Uhr." }
        ],
        dialogue: {
          titleIt: "Die Medikamente am Morgen",
          lines: [
            { who: "👩‍⚕️", it: "Guten Morgen, Frau Kühn. Ich bringe Ihnen Ihre Medikamente." },
            { who: "👵", it: "Was ist das denn alles?" },
            { who: "👩‍⚕️", it: "Das hier ist Cardiomin, eine Tablette. Die schlucken Sie bitte mit etwas Wasser." },
            { who: "👵", it: "Und die kleine Flasche?" },
            { who: "👩‍⚕️", it: "Das sind Augentropfen. Die kommen ins Auge, nicht in den Mund." },
            { who: "👵", it: "Bekomme ich heute auch eine Spritze?" },
            { who: "👩‍⚕️", it: "Ja, heute Abend bekommen Sie eine Spritze unter die Haut." },
            { who: "👵", it: "Tut das weh?" },
            { who: "👩‍⚕️", it: "Nur ein kleiner Pieks." }
          ]
        },
        exercises: [
          { t: "mcq", a: 1 },
          {
            t: "match",
            pairs: [{ it: "oral" }, { it: "subkutan" }, { it: "intravenös" }, { it: "die Injektion" }]
          },
          {
            t: "gender",
            opts: ["der", "die", "das"],
            items: [
              { it: "Tablette", a: "die" },
              { it: "Kapsel", a: "die" },
              { it: "Tropfen", a: "der" },
              { it: "Spritze", a: "die" },
              { it: "Zäpfchen", a: "das" },
              { it: "Salbe", a: "die" }
            ]
          },
          { t: "fill", a: ["Schmerztablette"] },
          { t: "multi", a: [0, 1, 4] },
          {
            t: "cloze",
            text: "Die Infusion läuft {{1}}, also in die {{2}}.",
            gaps: [["intravenös"], ["Vene"]]
          },
          {
            t: "order",
            tokens: ["Die", "Spritze", "bekommen", "Sie", "unter", "die", "Haut"],
            a: ["Die Spritze bekommen Sie unter die Haut"]
          },
          {
            t: "trans",
            dir: "toIt",
            a: ["Die Tropfen sind für die Augen"]
          },
          {
            t: "dialogue",
            lines: [
              { sp: "A", it: "Frau Marin, wie bekomme ich die Spritze?" },
              {
                sp: "TY",
                choices: [
                  "Die Spritze bekommen Sie unter die Haut.",
                  "Die Spritze Sie bekommen unter die Haut.",
                  "Die Spritze bekommen Sie unter der Haut ein."
                ],
                a: 0
              },
              { sp: "A", it: "Und was ist in der kleinen Flasche?" },
              {
                sp: "TY",
                choices: ["Das sind Augentropfen.", "Das ist Augentropfen.", "Das sind Augetropfen."],
                a: 0
              },
              { sp: "A", it: "Darf ich die Tablette kauen?" },
              {
                sp: "TY",
                choices: [
                  "Das weiß ich nicht genau. Ich frage in der Apotheke nach.",
                  "Das ich weiß nicht genau. Ich frage in der Apotheke nach.",
                  "Das weiß ich nicht genau. Ich nachfrage in der Apotheke."
                ],
                a: 0
              }
            ]
          },
          {
            t: "listen",
            it: "Das ist Cardiomin, eine Tablette. Die Spritze bekommen Sie heute Abend unter die Haut."
          },
          { t: "speak", it: "Die Spritze bekommen Sie unter die Haut." }
        ]
      },
      {
        id: "pfl-u05-l2",
        tags: ["g-temporalangaben", "g-praep-dativ"],
        cefr: "B1",
        titleIt: "Vor oder nach dem Essen?",
        grammar: {
          examples: [
            { it: "Nehmen Sie die Tablette bitte vor dem Frühstück ein." },
            { it: "Das Antibiotikum nehmen Sie immer nach dem Essen." },
            { it: "Für die Blutabnahme müssen Sie morgen nüchtern bleiben." },
            { it: "Den Blutverdünner bekommen Sie abends." },
            { it: "Bei Bedarf bekommen Sie eine Schmerztablette." },
            { it: "Seit einer Woche nehme ich Dolorex." }
          ]
        },
        vocab: [
          { it: "die Einnahme", plural: "die Einnahmen", ex: "Die Einnahme ist morgens vor dem Frühstück." },
          { it: "die Mahlzeit", plural: "die Mahlzeiten", ex: "Nehmen Sie die Tropfen zu den Mahlzeiten." },
          { it: "nüchtern", ex: "Morgen früh bleiben Sie bitte nüchtern." },
          { it: "täglich", ex: "Die Tablette bekommen Sie einmal täglich." },
          { it: "morgens", ex: "Morgens bringe ich Ihnen die Tabletten." },
          { it: "abends", ex: "Die Salbe kommt abends auf die Haut." },
          { it: "bei Bedarf", ex: "Bei Bedarf klingeln Sie bitte." },
          { it: "das Antibiotikum", plural: "die Antibiotika", ex: "Das Antibiotikum nehmen Sie nach dem Essen." },
          { it: "das Antikoagulans", plural: "die Antikoagulanzien", ex: "Der Patient bekommt ein Antikoagulans." },
          { it: "der Blutverdünner", plural: "die Blutverdünner", ex: "Nehmen Sie einen Blutverdünner?" },
          { it: "schlucken", ex: "Können Sie die Tablette gut schlucken?" },
          { it: "vergessen", ex: "Ich habe meine Tablette vergessen." }
        ],
        dialogue: {
          titleIt: "Wann nehme ich das?",
          lines: [
            { who: "👵", it: "Frau Marin, wann soll ich diese Tablette nehmen?" },
            { who: "👩‍⚕️", it: "Cardiomin nehmen Sie morgens, vor dem Frühstück." },
            { who: "👵", it: "Mit Kaffee?" },
            { who: "👩‍⚕️", it: "Bitte mit einem Glas Wasser. So steht es auch in Ihrem Plan." },
            { who: "👵", it: "Und das Antibiotikum?" },
            { who: "👩‍⚕️", it: "Das bekommen Sie dreimal täglich, immer nach dem Essen." },
            { who: "👵", it: "Und wenn ich eine Tablette vergesse?" },
            { who: "👩‍⚕️", it: "Dann sagen Sie es mir bitte. Ich frage den Arzt, was Sie tun sollen." },
            { who: "👵", it: "Gut. Und morgen früh?" },
            { who: "👩‍⚕️", it: "Morgen früh bleiben Sie bitte nüchtern, wegen der Blutabnahme." }
          ]
        },
        exercises: [
          { t: "mcq", a: 0 },
          { t: "conj", verb: "einnehmen", tense: "praes", persons: [0, 1, 2, 3, 4, 5] },
          { t: "fill", a: ["dem"] },
          {
            t: "cloze",
            text: "Die Tropfen nehmen Sie {{1}} dem Frühstück, das Antibiotikum {{2}} dem Essen.",
            gaps: [["vor"], ["nach"]]
          },
          {
            t: "match",
            pairs: [{ it: "morgens" }, { it: "abends" }, { it: "zur Nacht" }, { it: "bei Bedarf" }]
          },
          { t: "multi", a: [0, 2, 4] },
          {
            t: "order",
            tokens: ["Das", "Antibiotikum", "nehmen", "Sie", "immer", "nach", "dem", "Essen"],
            a: ["Das Antibiotikum nehmen Sie immer nach dem Essen"]
          },
          {
            t: "trans",
            dir: "toIt",
            a: [
              "Nehmen Sie die Tablette morgens vor dem Frühstück",
              "Nehmen Sie die Tablette morgens vor dem Frühstück ein",
              "Nehmen Sie morgens vor dem Frühstück die Tablette",
              "Nehmen Sie morgens vor dem Frühstück die Tablette ein",
              "Nehmen Sie die Tablette am Morgen vor dem Frühstück",
              "Nehmen Sie die Tablette am Morgen vor dem Frühstück ein"
            ]
          },
          {
            t: "dialogue",
            lines: [
              { sp: "A", it: "Wann soll ich die Tablette nehmen?" },
              {
                sp: "TY",
                choices: ["Morgens, vor dem Frühstück.", "Morgens, vor das Frühstück.", "Morgens, vor den Frühstück."],
                a: 0
              },
              { sp: "A", it: "Mit Kaffee?" },
              {
                sp: "TY",
                choices: ["Bitte mit einem Glas Wasser.", "Bitte mit ein Glas Wasser.", "Bitte mit einen Glas Wasser."],
                a: 0
              },
              { sp: "A", it: "Und wenn ich die Tablette vergesse?" },
              {
                sp: "TY",
                choices: [
                  "Dann sagen Sie es mir bitte. Ich frage den Arzt.",
                  "Dann Sie sagen es mir bitte. Ich frage den Arzt.",
                  "Dann sagen Sie es mir bitte. Ich frage dem Arzt."
                ],
                a: 0
              }
            ]
          },
          {
            t: "listen",
            it: "Cardiomin nehmen Sie morgens vor dem Frühstück, das Antibiotikum immer nach dem Essen."
          },
          { t: "speak", it: "Nehmen Sie die Tablette bitte nach dem Essen ein." }
        ]
      },
      {
        id: "pfl-u05-l3",
        tags: ["g-konditionalsatz"],
        cefr: "B1",
        titleIt: "Der Beipackzettel",
        grammar: {
          examples: [
            { it: "Wenn Sie schwanger sind, fragen Sie vor der Einnahme Ihren Arzt." },
            { it: "Falls Sie eine Einnahme vergessen haben, fragen Sie Ihren Arzt oder Apotheker." },
            { it: "Wenn Sie Atemnot bekommen, gehen Sie sofort zum Arzt." },
            { it: "Wenn Sie andere Medikamente nehmen, sagen Sie es dem Arzt." },
            { it: "Dolorex darf nicht eingenommen werden, wenn Sie allergisch dagegen sind." },
            { it: "Wenn Sie Fragen haben, rufen Sie die Apotheke an." }
          ]
        },
        vocab: [
          { it: "der Beipackzettel", plural: "die Beipackzettel", ex: "Haben Sie den Beipackzettel gelesen?" },
          { it: "die Packungsbeilage", plural: "die Packungsbeilagen", ex: "Die Packungsbeilage liegt in der Schachtel." },
          { it: "die Nebenwirkung", plural: "die Nebenwirkungen", ex: "Welche Nebenwirkungen sind möglich?" },
          { it: "die Wechselwirkung", plural: "die Wechselwirkungen", ex: "Gibt es Wechselwirkungen mit anderen Medikamenten?" },
          { it: "die Kontraindikation", plural: "die Kontraindikationen", ex: "Eine Allergie ist hier eine Kontraindikation." },
          { it: "die Gegenanzeige", plural: "die Gegenanzeigen", ex: "Im Beipackzettel stehen die Gegenanzeigen." },
          { it: "die Apotheke", plural: "die Apotheken", ex: "Die Apotheke ist im Erdgeschoss." },
          { it: "der Apotheker", plural: "die Apotheker", ex: "Fragen Sie Ihren Arzt oder Apotheker." },
          { it: "schwanger", ex: "Sind Sie schwanger?" },
          { it: "allergisch", ex: "Sind Sie gegen ein Medikament allergisch?" },
          { it: "aufbewahren", ex: "Bewahren Sie das Medikament für Kinder unzugänglich auf." },
          { it: "falls", ex: "Falls Sie Fragen haben, klingeln Sie bitte." }
        ],
        dialogue: {
          titleIt: "Gebrauchsinformation: Dolorex (erfundenes Beispiel)",
          lines: [
            { who: "📄", it: "Dolorex ist ein erfundenes Schmerzmittel. Es gibt es nur in diesem Kurs." },
            { who: "📄", it: "Dolorex darf nicht eingenommen werden, wenn Sie allergisch dagegen sind." },
            { who: "📄", it: "Wenn Sie schwanger sind oder stillen, fragen Sie vor der Einnahme Ihren Arzt oder Apotheker." },
            { who: "📄", it: "Wenn Sie andere Medikamente nehmen, sagen Sie es Ihrem Arzt. Es kann Wechselwirkungen geben." },
            { who: "📄", it: "Nehmen Sie Dolorex immer genau so ein, wie Ihr Arzt es Ihnen gesagt hat." },
            { who: "📄", it: "Falls Sie eine Einnahme vergessen haben, fragen Sie Ihren Arzt oder Apotheker." },
            { who: "📄", it: "Wenn Sie Hautausschlag oder Atemnot bekommen, nehmen Sie Dolorex nicht weiter ein und gehen Sie sofort zum Arzt." },
            { who: "📄", it: "Bewahren Sie das Medikament für Kinder unzugänglich auf." }
          ]
        },
        exercises: [
          { t: "truefalse", a: 1 },
          { t: "truefalse", a: 0 },
          { t: "mcq", a: 2 },
          { t: "fill", a: ["Wenn", "Falls"] },
          {
            t: "cloze",
            text: "Wenn Sie Atemnot {{1}}, gehen Sie sofort zum {{2}}.",
            gaps: [["bekommen"], ["Arzt"]]
          },
          {
            t: "order",
            tokens: ["Wenn", "Sie", "Fragen", "haben,", "rufen", "Sie", "die", "Apotheke", "an"],
            a: ["Wenn Sie Fragen haben, rufen Sie die Apotheke an"]
          },
          {
            t: "match",
            pairs: [
              { it: "die Gegenanzeige" },
              { it: "die Nebenwirkung" },
              { it: "die Wechselwirkung" },
              { it: "die Packungsbeilage" },
              { it: "der Apotheker" }
            ]
          },
          { t: "multi", a: [0, 2, 4] },
          {
            t: "trans",
            dir: "toIt",
            a: [
              "Wenn Sie Fragen haben, fragen Sie den Arzt oder den Apotheker",
              "Wenn Sie Fragen haben, fragen Sie den Arzt oder Apotheker",
              "Wenn Sie Fragen haben, fragen Sie Ihren Arzt oder Apotheker",
              "Wenn Sie Fragen haben, fragen Sie Ihren Arzt oder Ihren Apotheker",
              "Falls Sie Fragen haben, fragen Sie den Arzt oder den Apotheker",
              "Falls Sie Fragen haben, fragen Sie den Arzt oder Apotheker",
              "Falls Sie Fragen haben, fragen Sie Ihren Arzt oder Apotheker",
              "Falls Sie Fragen haben, fragen Sie Ihren Arzt oder Ihren Apotheker"
            ]
          },
          {
            t: "listen",
            it: "Wenn Sie Hautausschlag oder Atemnot bekommen, nehmen Sie Dolorex nicht weiter ein und gehen Sie sofort zum Arzt."
          },
          { t: "speak", it: "Wenn Sie Fragen haben, fragen Sie bitte Ihren Arzt." }
        ]
      },
      {
        id: "pfl-u05-l4",
        tags: ["g-passiv", "g-modalverben"],
        cefr: "B1",
        titleIt: "Medikamente richten",
        grammar: {
          examples: [
            { it: "Die Medikamente werden im Stationszimmer gerichtet." },
            { it: "Jede Gabe wird sofort dokumentiert." },
            { it: "Vor der Gabe muss der Name kontrolliert werden." },
            { it: "Darf die Tablette geteilt werden?" },
            { it: "Das müssen wir in der Apotheke nachfragen." },
            { it: "Bei Unklarheiten wird der Arzt gefragt." }
          ]
        },
        vocab: [
          { it: "richten", ex: "Ich richte die Medikamente für die Nacht." },
          { it: "der Dispenser", plural: "die Dispenser", ex: "Der Dispenser hat Fächer für morgens, mittags, abends und zur Nacht." },
          { it: "das Fach", plural: "die Fächer", ex: "Die Tablette liegt im Fach für morgens." },
          { it: "die Anordnung", plural: "die Anordnungen", ex: "Ich richte die Medikamente nach der ärztlichen Anordnung." },
          { it: "die Dosierung", plural: "die Dosierungen", ex: "Die Dosierung steht in der Anordnung." },
          { it: "die Verabreichung", plural: "die Verabreichungen", ex: "Nach der Verabreichung dokumentiere ich alles." },
          { it: "verabreichen", ex: "Die Spritze wird subkutan verabreicht." },
          { it: "kontrollieren", ex: "Ich kontrolliere den Namen auf dem Patientenarmband." },
          { it: "dokumentieren", ex: "Jede Gabe wird dokumentiert." },
          { it: "teilen", ex: "Darf die Tablette geteilt werden?" },
          { it: "der Zeitpunkt", plural: "die Zeitpunkte", ex: "Der richtige Zeitpunkt steht im Plan." },
          { it: "die Verwechslung", plural: "die Verwechslungen", ex: "Die Kontrolle schützt vor einer Verwechslung." }
        ],
        dialogue: {
          titleIt: "Die 6-R-Regel",
          lines: [
            { who: "🧑‍⚕️", it: "Elena, hilfst du mir? Die Medikamente für die Nacht müssen noch gerichtet werden." },
            { who: "👩‍⚕️", it: "Klar. Wir kontrollieren alles nach der 6-R-Regel." },
            { who: "🧑‍⚕️", it: "Die richtige Person: Frau Kühn, Zimmer vier. Das richtige Medikament: Cardiomin." },
            { who: "👩‍⚕️", it: "Die richtige Dosierung und die richtige Applikationsart: so, wie es in der Anordnung steht. Oral." },
            { who: "🧑‍⚕️", it: "Darf die Tablette geteilt werden? Frau Kühn kann schlecht schlucken." },
            { who: "👩‍⚕️", it: "Das weiß ich nicht. Das müssen wir in der Apotheke nachfragen." },
            { who: "🧑‍⚕️", it: "Gut. Der richtige Zeitpunkt ist zur Nacht." },
            { who: "👩‍⚕️", it: "Genau. Und nach der Gabe wird alles dokumentiert. Das ist das sechste R." }
          ]
        },
        exercises: [
          { t: "mcq", a: 0 },
          { t: "conj", verb: "dürfen", tense: "praes", persons: [0, 1, 2, 3, 4, 5] },
          { t: "fill", a: ["wird"] },
          {
            t: "cloze",
            text: "Vor der Gabe {{1}} der Name kontrolliert {{2}}.",
            gaps: [["muss"], ["werden"]]
          },
          {
            t: "order",
            tokens: ["Darf", "die", "Tablette", "geteilt", "werden"],
            a: ["Darf die Tablette geteilt werden"]
          },
          {
            t: "match",
            pairs: [
              { it: "die richtige Person" },
              { it: "das richtige Medikament" },
              { it: "die richtige Dosierung" },
              { it: "die richtige Applikationsart" },
              { it: "der richtige Zeitpunkt" },
              { it: "die richtige Dokumentation" }
            ]
          },
          {
            t: "gender",
            opts: ["der", "die", "das"],
            items: [
              { it: "Dispenser", a: "der" },
              { it: "Fach", a: "das" },
              { it: "Anordnung", a: "die" },
              { it: "Dosierung", a: "die" },
              { it: "Zeitpunkt", a: "der" },
              { it: "Verwechslung", a: "die" }
            ]
          },
          { t: "multi", a: [0, 2, 4] },
          {
            t: "trans",
            dir: "toIt",
            a: ["Jede Gabe wird dokumentiert", "Jede Verabreichung wird dokumentiert", "Jede Applikation wird dokumentiert"]
          },
          {
            t: "dialogue",
            lines: [
              { sp: "A", it: "Sind die Medikamente für die Nacht schon gerichtet?" },
              {
                sp: "TY",
                choices: [
                  "Nein, sie werden gerade gerichtet.",
                  "Nein, sie werden gerade gerichten.",
                  "Nein, sie sind gerade richten."
                ],
                a: 0
              },
              { sp: "A", it: "Darf man die Tablette von Frau Kühn teilen?" },
              {
                sp: "TY",
                choices: [
                  "Das weiß ich nicht. Wir müssen in der Apotheke nachfragen.",
                  "Das weiß ich nicht. Wir müssen in der Apotheke nachgefragt.",
                  "Ja, sicher. Alle Tabletten darf man teilen."
                ],
                a: 0
              },
              { sp: "A", it: "Und nach der Gabe?" },
              {
                sp: "TY",
                choices: [
                  "Nach der Gabe wird alles dokumentiert.",
                  "Nach der Gabe alles wird dokumentiert.",
                  "Nach der Gabe wird alles dokumentieren."
                ],
                a: 0
              }
            ]
          },
          {
            t: "listen",
            it: "Die Medikamente werden nach der 6-R-Regel gerichtet. Nach der Gabe wird alles dokumentiert."
          },
          { t: "speak", it: "Darf die Tablette geteilt werden?" }
        ]
      }
    ],
    test: {
      id: "pfl-u05-test",
      tags: ["g-temporalangaben", "g-konditionalsatz", "g-passiv"],
      cefr: "B1",
      titleIt: "Test: Medikamente und Beipackzettel",
      exercises: [
        { t: "mcq", a: 2 },
        { t: "fill", a: ["dem"] },
        { t: "fill", a: ["werden"] },
        {
          t: "match",
          pairs: [{ it: "oral" }, { it: "subkutan" }, { it: "intravenös" }, { it: "die Kontraindikation" }]
        },
        { t: "multi", a: [0, 3, 4] },
        {
          t: "cloze",
          text: "Falls Sie eine Einnahme {{1}} haben, {{2}} Sie bitte Ihren Arzt.",
          gaps: [["vergessen"], ["fragen"]]
        },
        {
          t: "order",
          tokens: ["Nach", "der", "Gabe", "wird", "alles", "dokumentiert"],
          a: ["Nach der Gabe wird alles dokumentiert"]
        },
        { t: "truefalse", a: 0 },
        {
          t: "gender",
          opts: ["der", "die", "das"],
          items: [
            { it: "Tablette", a: "die" },
            { it: "Zäpfchen", a: "das" },
            { it: "Beipackzettel", a: "der" },
            { it: "Nebenwirkung", a: "die" },
            { it: "Dispenser", a: "der" },
            { it: "Antibiotikum", a: "das" }
          ]
        },
        {
          t: "listen",
          it: "Wenn Sie Fragen zu Ihren Medikamenten haben, fragen Sie bitte den Arzt oder die Apotheke."
        },
        { t: "speak", it: "Morgen früh bleiben Sie bitte nüchtern." }
      ]
    }
  }
]);
