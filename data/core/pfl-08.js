/* ============================================================
   Language-neutral layer: German (de-DE), structure and answer keys.
   Learner-language texts live in data/i18n/<lang>/pfl-08.js.
   pfl-u08 belongs to the nursing track (pseudo-level PFL);
   every lesson carries its real CEFR level.
   ============================================================ */
LINGUAI.addUnits("PFL", [
  {
    id: "pfl-u08",
    icon: "🩺",
    titleIt: "Visite, Anordnungen und Team",
    lessons: [
      {
        id: "pfl-u08-l1",
        tags: ["g-passiv"],
        cefr: "B2",
        titleIt: "Die Visite",
        grammar: {
          examples: [
            { it: "Bei Herrn Wolf wird heute ein Blutbild abgenommen." },
            { it: "Der Verband wird morgen gewechselt." },
            { it: "Die Röntgenaufnahme wurde gestern gemacht." },
            { it: "Frau Lang soll heute mobilisiert werden." },
            { it: "Die Therapie wird wie bisher fortgesetzt." },
            { it: "Wann wird Herr Wolf entlassen?" }
          ]
        },
        vocab: [
          { it: "die Visite", plural: "die Visiten", ex: "Die Visite beginnt um neun Uhr." },
          { it: "die Oberärztin", plural: "die Oberärztinnen", ex: "Heute macht die Oberärztin die Visite." },
          { it: "der Befund", plural: "die Befunde", ex: "Der Befund vom Labor ist noch nicht da." },
          { it: "das Blutbild", plural: "die Blutbilder", ex: "Bei Herrn Wolf wird heute ein Blutbild abgenommen." },
          { it: "die Röntgenaufnahme", plural: "die Röntgenaufnahmen", ex: "Die Röntgenaufnahme wurde gestern gemacht." },
          { it: "die Therapie", plural: "die Therapien", ex: "Die Therapie wird wie bisher fortgesetzt." },
          { it: "die Behandlung", plural: "die Behandlungen", ex: "Die Behandlung dauert noch eine Woche." },
          { it: "der Verbandswechsel", plural: "die Verbandswechsel", ex: "Der Verbandswechsel ist für morgen geplant." },
          { it: "Blut abnehmen", ex: "Ich nehme Ihnen jetzt Blut ab." },
          { it: "fortsetzen", ex: "Die Therapie wird fortgesetzt." },
          { it: "entlassen", ex: "Herr Wolf wird am Freitag entlassen." },
          { it: "unauffällig", ex: "Die Röntgenaufnahme ist unauffällig." }
        ],
        dialogue: {
          titleIt: "Visite in Zimmer fünf",
          lines: [
            { who: "👩‍⚕️", it: "Guten Morgen, Herr Wolf. Wie geht es Ihnen heute?" },
            { who: "👴", it: "Besser als gestern, aber ich bin noch müde." },
            { who: "👩‍⚕️", it: "Die Röntgenaufnahme von gestern ist unauffällig. Die Therapie wird wie bisher fortgesetzt." },
            { who: "🧑‍⚕️", it: "Wird morgen noch einmal ein Blutbild abgenommen?" },
            { who: "👩‍⚕️", it: "Ja, morgen früh, bitte. Und der Verband wird heute gewechselt." },
            { who: "🧑‍⚕️", it: "Gut. Und wie ist es mit der Mobilisation?" },
            { who: "👩‍⚕️", it: "Herr Wolf soll heute zweimal mobilisiert werden, zuerst an die Bettkante." },
            { who: "👴", it: "Wann werde ich entlassen?" },
            { who: "👩‍⚕️", it: "Wenn die Werte gut bleiben, vielleicht am Freitag." }
          ]
        },
        exercises: [
          { t: "mcq", a: 0 },
          { t: "conj", verb: "werden", tense: "praet", persons: [0, 1, 2, 3, 4, 5] },
          { t: "fill", a: ["wird"] },
          {
            t: "cloze",
            text: "Herr Wolf soll heute zweimal {{1}} {{2}}.",
            gaps: [["mobilisiert"], ["werden"]]
          },
          { t: "multi", a: [0, 2, 3] },
          {
            t: "gender",
            opts: ["der", "die", "das"],
            items: [
              { it: "Visite", a: "die" },
              { it: "Oberärztin", a: "die" },
              { it: "Befund", a: "der" },
              { it: "Blutbild", a: "das" },
              { it: "Röntgenaufnahme", a: "die" },
              { it: "Verbandswechsel", a: "der" }
            ]
          },
          {
            t: "match",
            pairs: [{ it: "die Therapie" }, { it: "der Befund" }, { it: "die Röntgenaufnahme" }, { it: "das Blutbild" }]
          },
          {
            t: "order",
            tokens: ["Die", "Therapie", "wird", "wie", "bisher", "fortgesetzt"],
            a: ["Die Therapie wird wie bisher fortgesetzt", "Die Therapie wird fortgesetzt wie bisher"]
          },
          {
            t: "trans",
            dir: "toIt",
            a: [
              "Morgen früh wird ein Blutbild abgenommen",
              "Morgen früh wird ein Blutbild gemacht",
              "Ein Blutbild wird morgen früh abgenommen",
              "Ein Blutbild wird morgen früh gemacht"
            ]
          },
          {
            t: "dialogue",
            lines: [
              { sp: "A", it: "Gibt es von der Pflege noch etwas zu Herrn Wolf?" },
              {
                sp: "TY",
                choices: [
                  "Ja, Herr Wolf hat in der Nacht wenig geschlafen.",
                  "Ja, Herr Wolf hat in der Nacht wenig geschlaft.",
                  "Ja, Herr Wolf ist in der Nacht wenig geschlafen."
                ],
                a: 0
              },
              { sp: "A", it: "Der Verband wird heute gewechselt." },
              {
                sp: "TY",
                choices: [
                  "Gut, ich wechsle ihn nach der Visite.",
                  "Gut, ich wechsle ihm nach der Visite.",
                  "Gut, ich gewechselt ihn nach der Visite."
                ],
                a: 0
              },
              { sp: "A", it: "Und die Mobilisation?" },
              {
                sp: "TY",
                choices: [
                  "Herr Wolf hat heute schon einmal mobilisiert worden.",
                  "Herr Wolf wurde heute schon einmal gemobilisiert.",
                  "Herr Wolf wurde heute schon einmal mobilisiert."
                ],
                a: 2
              }
            ]
          },
          {
            t: "listen",
            it: "Die Röntgenaufnahme von gestern ist unauffällig. Die Therapie wird wie bisher fortgesetzt."
          },
          { t: "speak", it: "Bei Herrn Wolf wird heute ein Blutbild abgenommen." }
        ]
      },
      {
        id: "pfl-u08-l2",
        tags: ["g-nebensatz-dass", "g-konnektoren"],
        cefr: "B2",
        titleIt: "Anordnungen verstehen und nachfragen",
        grammar: {
          examples: [
            { it: "Die Ärztin hat angeordnet, dass Frau Lang heute nüchtern bleibt." },
            { it: "In der Akte steht, dass der Verband täglich gewechselt wird." },
            { it: "Ich bin nicht sicher, ob die Anordnung noch gilt." },
            { it: "Die Anordnung ist nicht eindeutig, deshalb frage ich noch einmal nach." },
            { it: "Ich habe die Anordnung gelesen, aber ich verstehe sie nicht." },
            { it: "Ich frage lieber einmal mehr nach, denn ich möchte keinen Fehler machen." }
          ]
        },
        vocab: [
          { it: "die Anordnung", plural: "die Anordnungen", ex: "Die Anordnung steht in der Patientenakte." },
          { it: "anordnen", ex: "Die Ärztin hat ein Blutbild angeordnet." },
          { it: "die Indikation", plural: "die Indikationen", ex: "Was ist die Indikation für diese Behandlung?" },
          { it: "der Grund", plural: "die Gründe", ex: "Was ist der Grund für die Behandlung?" },
          { it: "die Rückfrage", plural: "die Rückfragen", ex: "Ich habe eine Rückfrage zu Frau Lang." },
          { it: "nachfragen", ex: "Ich frage noch einmal nach." },
          { it: "eindeutig", ex: "Die Anordnung ist nicht eindeutig." },
          { it: "unklar", ex: "Bei einer unklaren Anordnung frage ich nach." },
          { it: "gelten", ex: "Gilt die Anordnung noch?" },
          { it: "die Patientenakte", plural: "die Patientenakten", ex: "In der Patientenakte steht, dass sie nüchtern bleibt." },
          { it: "unterschreiben", ex: "Die Anordnung ist noch nicht unterschrieben." },
          { it: "ausführen", ex: "Ich führe die Anordnung erst nach der Rückfrage aus." }
        ],
        dialogue: {
          titleIt: "Eine Rückfrage",
          lines: [
            { who: "🧑‍⚕️", it: "Entschuldigung, Herr Doktor, ich habe eine Rückfrage zu Frau Lang." },
            { who: "👨‍⚕️", it: "Ja, bitte." },
            { who: "🧑‍⚕️", it: "In der Akte steht, dass sie heute nüchtern bleiben soll. Ich bin nicht sicher, ob das noch gilt." },
            { who: "👨‍⚕️", it: "Gut, dass Sie fragen. Die Untersuchung wurde verschoben, deshalb darf sie wieder essen." },
            { who: "🧑‍⚕️", it: "Und das Blutbild? Hier steht nur Labor, aber nicht, wann." },
            { who: "👨‍⚕️", it: "Morgen früh, bitte. Ich ergänze das gleich in der Akte." },
            { who: "🧑‍⚕️", it: "Danke. Ich frage lieber einmal mehr nach, denn ich möchte keinen Fehler machen." }
          ]
        },
        exercises: [
          { t: "mcq", a: 1 },
          { t: "conj", verb: "anordnen", tense: "perf", persons: [0, 1, 2, 3, 4, 5] },
          { t: "fill", a: ["ob"] },
          {
            t: "cloze",
            text: "Die Ärztin hat angeordnet, {{1}} der Verband täglich gewechselt {{2}}.",
            gaps: [["dass"], ["wird"]]
          },
          { t: "multi", a: [0, 2, 4] },
          {
            t: "gender",
            opts: ["der", "die", "das"],
            items: [
              { it: "Anordnung", a: "die" },
              { it: "Indikation", a: "die" },
              { it: "Grund", a: "der" },
              { it: "Rückfrage", a: "die" },
              { it: "Patientenakte", a: "die" },
              { it: "Labor", a: "das" }
            ]
          },
          {
            t: "match",
            pairs: [{ it: "die Anordnung" }, { it: "die Rückfrage" }, { it: "die Indikation" }, { it: "nachfragen" }]
          },
          {
            t: "order",
            tokens: ["Ich", "bin", "nicht", "sicher,", "ob", "die", "Anordnung", "noch", "gilt"],
            a: ["Ich bin nicht sicher, ob die Anordnung noch gilt"]
          },
          {
            t: "trans",
            dir: "toIt",
            a: [
              "Die Anordnung ist nicht eindeutig, deshalb frage ich noch einmal nach",
              "Die Anordnung ist nicht klar, deshalb frage ich noch einmal nach",
              "Die Anordnung ist unklar, deshalb frage ich noch einmal nach",
              "Die Anordnung ist nicht eindeutig, darum frage ich noch einmal nach",
              "Die Anordnung ist nicht klar, darum frage ich noch einmal nach",
              "Die Anordnung ist unklar, darum frage ich noch einmal nach",
              "Die Anordnung ist nicht eindeutig, deswegen frage ich noch einmal nach",
              "Die Anordnung ist nicht klar, deswegen frage ich noch einmal nach",
              "Die Anordnung ist unklar, deswegen frage ich noch einmal nach"
            ]
          },
          {
            t: "dialogue",
            lines: [
              { sp: "A", it: "Sie wollten mich sprechen?" },
              {
                sp: "TY",
                choices: [
                  "Ja, ich habe eine Rückfrage zur Anordnung von Frau Lang.",
                  "Ja, ich habe eine Rückfrage zur Anordnung von Frau Lang machen.",
                  "Ja, ich frage eine Rückfrage zur Anordnung von Frau Lang."
                ],
                a: 0
              },
              { sp: "A", it: "Was ist denn unklar?" },
              {
                sp: "TY",
                choices: [
                  "Ich weiß nicht, ob soll sie heute nüchtern bleiben.",
                  "Ich weiß nicht, ob sie heute nüchtern bleiben soll.",
                  "Ich weiß nicht, dass sie heute nüchtern bleiben soll."
                ],
                a: 1
              },
              { sp: "A", it: "Sie darf wieder essen. Die Untersuchung wurde verschoben." },
              {
                sp: "TY",
                choices: [
                  "Danke. Dann ändere ich die Anordnung selbst in der Akte.",
                  "Danke. Dann ist das Blutbild sicher auch verschoben.",
                  "Danke. Bitte ergänzen Sie das noch in der Akte."
                ],
                a: 2
              }
            ]
          },
          {
            t: "listen",
            it: "In der Akte steht, dass sie heute nüchtern bleiben soll. Ich bin nicht sicher, ob das noch gilt."
          },
          { t: "speak", it: "Ich frage lieber einmal mehr nach, denn ich möchte keinen Fehler machen." }
        ]
      },
      {
        id: "pfl-u08-l3",
        tags: ["g-praep-verben"],
        cefr: "B2",
        titleIt: "Die Teambesprechung",
        grammar: {
          examples: [
            { it: "Wer kümmert sich heute um Zimmer acht?" },
            { it: "Ich kümmere mich um die Neuaufnahme." },
            { it: "Wir sprechen heute über den Dienstplan." },
            { it: "Die Tochter hat sich nach dem Befund erkundigt." },
            { it: "Ich warte noch auf den Arztbrief." },
            { it: "Darüber sprechen wir am Ende." }
          ]
        },
        vocab: [
          { it: "die Teambesprechung", plural: "die Teambesprechungen", ex: "Die Teambesprechung ist jeden Dienstag um zwei." },
          { it: "der Dienstplan", plural: "die Dienstpläne", ex: "Der neue Dienstplan hängt im Stationszimmer." },
          { it: "sich kümmern um", ex: "Ich kümmere mich um Zimmer acht." },
          { it: "sich erkundigen nach", ex: "Die Tochter hat sich nach dem Befund erkundigt." },
          { it: "sprechen über", ex: "Wir sprechen über den Dienstplan." },
          { it: "warten auf", ex: "Wir warten noch auf den Befund." },
          { it: "sich beschweren über", ex: "Ein Angehöriger hat sich über die Wartezeit beschwert." },
          { it: "die Neuaufnahme", plural: "die Neuaufnahmen", ex: "Heute Nachmittag kommt eine Neuaufnahme." },
          { it: "die Fallbesprechung", plural: "die Fallbesprechungen", ex: "In der Fallbesprechung geht es um Herrn Wolf." },
          { it: "der Vorschlag", plural: "die Vorschläge", ex: "Ich habe einen Vorschlag für den Dienstplan." },
          { it: "einverstanden", ex: "Ich bin mit dem Vorschlag einverstanden." },
          { it: "die Stationsleitung", plural: "die Stationsleitungen", ex: "Die Stationsleitung leitet die Besprechung." }
        ],
        dialogue: {
          titleIt: "Teambesprechung am Dienstag",
          lines: [
            { who: "👩‍💼", it: "Heute geht es um zwei Dinge: den Dienstplan und Herrn Wolf." },
            { who: "🧑‍⚕️", it: "Ich würde gern zuerst etwas zu Herrn Wolf sagen." },
            { who: "👩‍💼", it: "Bitte." },
            { who: "🧑‍⚕️", it: "Seine Tochter hat sich gestern nach dem Befund erkundigt. Ich habe ihr gesagt, dass der Arzt mit ihr spricht." },
            { who: "👩‍⚕️", it: "Ich kümmere mich darum, dass der Arzt sie heute anruft." },
            { who: "👩‍💼", it: "Gut. Und wer kümmert sich um die Neuaufnahme am Nachmittag?" },
            { who: "🧑‍⚕️", it: "Das mache ich. Ich warte aber noch auf den Arztbrief." },
            { who: "👩‍💼", it: "In Ordnung. Über den Dienstplan sprechen wir am Ende." }
          ]
        },
        exercises: [
          { t: "mcq", a: 0 },
          { t: "conj", verb: "sich kümmern", tense: "praes", persons: [0, 1, 2, 3, 4, 5] },
          { t: "fill", a: ["auf"] },
          {
            t: "cloze",
            text: "Die Tochter hat sich {{1}} dem Befund {{2}}.",
            gaps: [["nach"], ["erkundigt"]]
          },
          { t: "multi", a: [0, 2, 3] },
          {
            t: "gender",
            opts: ["der", "die", "das"],
            items: [
              { it: "Teambesprechung", a: "die" },
              { it: "Dienstplan", a: "der" },
              { it: "Neuaufnahme", a: "die" },
              { it: "Fallbesprechung", a: "die" },
              { it: "Vorschlag", a: "der" },
              { it: "Stationsleitung", a: "die" }
            ]
          },
          {
            t: "match",
            pairs: [{ it: "sich kümmern um" }, { it: "sich erkundigen nach" }, { it: "warten auf" }, { it: "sprechen über" }]
          },
          {
            t: "order",
            tokens: ["Wer", "kümmert", "sich", "um", "die", "Neuaufnahme?"],
            a: ["Wer kümmert sich um die Neuaufnahme?"]
          },
          {
            t: "trans",
            dir: "toIt",
            a: [
              "Morgen sprechen wir über den Dienstplan",
              "Wir sprechen morgen über den Dienstplan",
              "Morgen reden wir über den Dienstplan",
              "Wir reden morgen über den Dienstplan"
            ]
          },
          {
            t: "dialogue",
            lines: [
              { sp: "A", it: "Wer kümmert sich heute um Herrn Wolf?" },
              {
                sp: "TY",
                choices: ["Ich kümmere mich um ihn.", "Ich kümmere mich um ihm.", "Ich kümmere um ihn."],
                a: 0
              },
              { sp: "A", it: "Hat sich jemand nach ihm erkundigt?" },
              {
                sp: "TY",
                choices: [
                  "Ja, seine Tochter hat gestern nach ihm erkundigt.",
                  "Ja, seine Tochter hat sich gestern auf ihn erkundigt.",
                  "Ja, seine Tochter hat sich gestern nach ihm erkundigt."
                ],
                a: 2
              },
              { sp: "A", it: "Worauf wartest du noch?" },
              {
                sp: "TY",
                choices: ["Ich warte noch für den Arztbrief.", "Ich warte noch auf den Arztbrief.", "Ich warte noch den Arztbrief auf."],
                a: 1
              }
            ]
          },
          {
            t: "listen",
            it: "Die Tochter hat sich nach dem Befund erkundigt."
          },
          { t: "speak", it: "Ich kümmere mich um die Neuaufnahme." }
        ]
      },
      {
        id: "pfl-u08-l4",
        tags: ["g-konjunktiv2"],
        cefr: "B2",
        titleIt: "Am Telefon: Labor, Apotheke, Hausarzt",
        grammar: {
          examples: [
            { it: "Ich hätte eine Frage zu einem Medikament." },
            { it: "Könnten Sie mir die Laborwerte von Herrn Wolf durchgeben?" },
            { it: "Wäre es möglich, den Befund heute noch zu schicken?" },
            { it: "Würden Sie mich bitte zurückrufen?" },
            { it: "Ich würde gern mit Doktor Becker sprechen." },
            { it: "Ich wiederhole: Zimmer fünf, Herr Wolf." }
          ]
        },
        vocab: [
          { it: "das Labor", plural: "die Labore", ex: "Ich rufe kurz im Labor an." },
          { it: "die Apotheke", plural: "die Apotheken", ex: "Die Apotheke liefert das Medikament morgen." },
          { it: "der Hausarzt", plural: "die Hausärzte", ex: "Der Hausarzt von Frau Lang ist heute nicht erreichbar." },
          { it: "der Laborwert", plural: "die Laborwerte", ex: "Die Laborwerte sind noch nicht da." },
          { it: "die Durchwahl", plural: "die Durchwahlen", ex: "Meine Durchwahl ist zwei, drei, vier, fünf." },
          { it: "der Rückruf", plural: "die Rückrufe", ex: "Ich warte auf einen Rückruf vom Labor." },
          { it: "durchgeben", ex: "Das Labor gibt die Werte telefonisch durch." },
          { it: "zurückrufen", ex: "Ich rufe Sie in zehn Minuten zurück." },
          { it: "erreichbar", ex: "Die Ärztin ist unter dieser Nummer erreichbar." },
          { it: "buchstabieren", ex: "Ich buchstabiere den Namen: W, O, L, F." },
          { it: "verbinden", ex: "Ich verbinde Sie mit der Station." },
          { it: "liefern", ex: "Die Apotheke liefert das Medikament heute Nachmittag." }
        ],
        dialogue: {
          titleIt: "Anruf im Labor",
          lines: [
            { who: "👩‍🔬", it: "Labor, Schneider, guten Tag." },
            { who: "🧑‍⚕️", it: "Guten Tag, hier ist Station drei. Ich hätte eine Frage zu einem Blutbild." },
            { who: "👩‍🔬", it: "Um welchen Patienten geht es?" },
            { who: "🧑‍⚕️", it: "Um Herrn Wolf, Zimmer fünf. Könnten Sie mir sagen, ob die Werte schon da sind?" },
            { who: "👩‍🔬", it: "Die Werte sind gleich fertig. Ich schicke sie Ihnen in zehn Minuten." },
            { who: "🧑‍⚕️", it: "Wäre es möglich, mich anzurufen, wenn ein Wert auffällig ist?" },
            { who: "👩‍🔬", it: "Ja, natürlich. Wie ist Ihre Durchwahl?" },
            { who: "🧑‍⚕️", it: "Zwei, drei, vier, fünf. Ich wiederhole: Sie rufen an, wenn ein Wert auffällig ist. Vielen Dank." }
          ]
        },
        exercises: [
          { t: "mcq", a: 1 },
          { t: "conj", verb: "können", tense: "konj2", persons: [0, 1, 2, 3, 4, 5] },
          { t: "fill", a: ["hätte"] },
          {
            t: "cloze",
            text: "{{1}} Sie mich bitte {{2}}?",
            gaps: [["Würden", "Könnten"], ["zurückrufen"]]
          },
          { t: "multi", a: [0, 2, 3] },
          {
            t: "gender",
            opts: ["der", "die", "das"],
            items: [
              { it: "Labor", a: "das" },
              { it: "Apotheke", a: "die" },
              { it: "Hausarzt", a: "der" },
              { it: "Laborwert", a: "der" },
              { it: "Durchwahl", a: "die" },
              { it: "Rückruf", a: "der" }
            ]
          },
          {
            t: "match",
            pairs: [{ it: "durchgeben" }, { it: "zurückrufen" }, { it: "buchstabieren" }, { it: "verbinden" }]
          },
          {
            t: "order",
            tokens: ["Ich", "hätte", "eine", "Frage", "zu", "einem", "Blutbild"],
            a: ["Ich hätte eine Frage zu einem Blutbild", "Ich hätte zu einem Blutbild eine Frage"]
          },
          {
            t: "trans",
            dir: "toIt",
            a: [
              "Könnten Sie mich in zehn Minuten zurückrufen",
              "Könnten Sie mich bitte in zehn Minuten zurückrufen",
              "Würden Sie mich in zehn Minuten zurückrufen",
              "Würden Sie mich bitte in zehn Minuten zurückrufen"
            ]
          },
          {
            t: "dialogue",
            lines: [
              { sp: "A", it: "Apotheke, guten Tag." },
              {
                sp: "TY",
                choices: [
                  "Guten Tag, hier ist Station drei. Ich hätte eine Frage zu einer Lieferung.",
                  "Guten Tag, hier ist Station drei. Ich habe gehabt eine Frage zu einer Lieferung.",
                  "Guten Tag, hier ist Station drei. Ich hätte eine Frage zu einer Lieferung haben."
                ],
                a: 0
              },
              { sp: "A", it: "Worum geht es genau?" },
              {
                sp: "TY",
                choices: [
                  "Ein Medikament für Zimmer fünf ist noch nicht da. Wäre es möglich, es heute noch liefern?",
                  "Ein Medikament für Zimmer fünf ist noch nicht da. Wäre es möglich, es heute noch zu liefern?",
                  "Ein Medikament für Zimmer fünf ist noch nicht da. Würde es möglich, es heute noch zu liefern?"
                ],
                a: 1
              },
              { sp: "A", it: "Ich kläre das und rufe Sie zurück." },
              {
                sp: "TY",
                choices: [
                  "Danke. Meine Durchwahl hat zwei, drei, vier, fünf.",
                  "Danke. Ich bin unter zwei, drei, vier, fünf erreicht.",
                  "Danke. Meine Durchwahl ist zwei, drei, vier, fünf."
                ],
                a: 2
              }
            ]
          },
          {
            t: "listen",
            it: "Wäre es möglich, mich anzurufen, wenn ein Wert auffällig ist?"
          },
          { t: "speak", it: "Ich hätte eine Frage zu einem Medikament." }
        ]
      }
    ],
    test: {
      id: "pfl-u08-test",
      tags: ["g-passiv", "g-praep-verben", "g-konjunktiv2"],
      cefr: "B2",
      titleIt: "Test: Visite, Anordnungen und Team",
      exercises: [
        { t: "mcq", a: 1 },
        { t: "fill", a: ["wird"] },
        { t: "conj", verb: "haben", tense: "konj2", persons: [0, 1, 2, 3, 4, 5] },
        {
          t: "match",
          pairs: [{ it: "die Visite" }, { it: "die Rückfrage" }, { it: "der Dienstplan" }, { it: "die Durchwahl" }]
        },
        { t: "multi", a: [0, 2, 4] },
        {
          t: "cloze",
          text: "In der Akte steht, {{1}} heute ein Blutbild abgenommen {{2}}.",
          gaps: [["dass"], ["wird"]]
        },
        {
          t: "order",
          tokens: ["Wir", "warten", "noch", "auf", "die", "Laborwerte"],
          a: ["Wir warten noch auf die Laborwerte"]
        },
        {
          t: "gender",
          opts: ["der", "die", "das"],
          items: [
            { it: "Visite", a: "die" },
            { it: "Anordnung", a: "die" },
            { it: "Befund", a: "der" },
            { it: "Blutbild", a: "das" },
            { it: "Dienstplan", a: "der" },
            { it: "Labor", a: "das" }
          ]
        },
        {
          t: "trans",
          dir: "toIt",
          a: [
            "Morgen wird der Verband gewechselt",
            "Der Verband wird morgen gewechselt",
            "Morgen wird der Verband gewechselt werden",
            "Der Verband wird morgen gewechselt werden"
          ]
        },
        {
          t: "listen",
          it: "Die Therapie wird wie bisher fortgesetzt."
        },
        { t: "speak", it: "Wäre es möglich, mich anzurufen, wenn ein Wert auffällig ist?" }
      ]
    }
  }
]);
