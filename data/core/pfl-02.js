/* ============================================================
   Language-neutral layer: German (de-DE), structure and answer keys.
   Learner-language texts live in data/i18n/<lang>/pfl-02.js.
   pfl-u02 is the second unit of the nursing track (pseudo-level PFL);
   every lesson carries its real CEFR level. All measured values are
   round didactic numbers, not clinical reference ranges.
   ============================================================ */
LINGUAI.addUnits("PFL", [
  {
    id: "pfl-u02",
    icon: "🌡️",
    titleIt: "Vitalzeichen und Messwerte",
    lessons: [
      {
        id: "pfl-u02-l1",
        tags: ["g-imperativ", "g-trennbare-verben"],
        cefr: "B1",
        titleIt: "Machen Sie bitte den Arm frei",
        grammar: {
          examples: [
            { it: "Machen Sie bitte den Oberarm frei." },
            { it: "Setzen Sie sich bitte hin und legen Sie den Arm auf den Tisch." },
            { it: "Ich lege Ihnen jetzt die Manschette an." },
            { it: "Bitte sprechen Sie während der Messung nicht." },
            { it: "Atmen Sie ruhig ein und aus." },
            { it: "Ich lese den Wert gleich ab." }
          ]
        },
        vocab: [
          { it: "die Messung", plural: "die Messungen", ex: "Die Messung dauert nur eine Minute." },
          { it: "messen", ex: "Ich messe jetzt Ihren Blutdruck." },
          { it: "der Blutdruck", plural: "-", ex: "Wir messen den Blutdruck zweimal am Tag." },
          { it: "die Manschette", plural: "die Manschetten", ex: "Die Manschette drückt kurz am Arm." },
          { it: "das Blutdruckmessgerät", plural: "die Blutdruckmessgeräte", ex: "Das Blutdruckmessgerät steht auf dem Wagen." },
          { it: "der Oberarm", plural: "die Oberarme", ex: "Machen Sie bitte den Oberarm frei." },
          { it: "der Ärmel", plural: "die Ärmel", ex: "Können Sie den Ärmel hochschieben?" },
          { it: "das Fieberthermometer", plural: "die Fieberthermometer", ex: "Ich messe die Temperatur mit dem Fieberthermometer im Ohr." },
          { it: "anlegen", ex: "Ich lege Ihnen die Manschette an." },
          { it: "ablesen", ex: "Ich lese den Wert am Gerät ab." },
          { it: "einatmen", ex: "Atmen Sie bitte tief ein." },
          { it: "sich hinsetzen", ex: "Setzen Sie sich bitte hin." }
        ],
        dialogue: {
          titleIt: "Blutdruck messen",
          lines: [
            { who: "👩‍⚕️", it: "Guten Morgen, Frau Keller. Ich messe jetzt Ihren Blutdruck und Ihren Puls." },
            { who: "👵", it: "Guten Morgen. Muss ich aufstehen?" },
            { who: "👩‍⚕️", it: "Nein, bleiben Sie bitte sitzen. Machen Sie bitte den linken Oberarm frei." },
            { who: "👵", it: "So, ist das gut?" },
            { who: "👩‍⚕️", it: "Ja, danke. Ich lege Ihnen jetzt die Manschette an. Sie drückt kurz ein bisschen." },
            { who: "👵", it: "Kein Problem." },
            { who: "👩‍⚕️", it: "Bitte sprechen Sie während der Messung nicht und halten Sie den Arm ruhig." },
            { who: "👵", it: "Und, wie ist der Wert?" },
            { who: "👩‍⚕️", it: "Ich lese ihn gleich ab und trage ihn in die Kurve ein." }
          ]
        },
        exercises: [
          { t: "mcq", a: 1 },
          { t: "fill", a: ["an"] },
          { t: "conj", verb: "ablesen", tense: "praes", persons: [0, 1, 2, 3, 4, 5] },
          {
            t: "gender",
            opts: ["der", "die", "das"],
            items: [
              { it: "Messung", a: "die" },
              { it: "Manschette", a: "die" },
              { it: "Oberarm", a: "der" },
              { it: "Ärmel", a: "der" },
              { it: "Blutdruckmessgerät", a: "das" },
              { it: "Blutdruck", a: "der" }
            ]
          },
          {
            t: "match",
            pairs: [{ it: "einatmen" }, { it: "ausatmen" }, { it: "sich hinsetzen" }, { it: "sich hinlegen" }]
          },
          {
            t: "order",
            tokens: ["Machen", "Sie", "bitte", "den", "linken", "Oberarm", "frei"],
            a: ["Machen Sie bitte den linken Oberarm frei", "Machen Sie den linken Oberarm bitte frei"]
          },
          {
            t: "cloze",
            text: "{{1}} Sie sich bitte {{2}}, und legen Sie den Arm auf den Tisch.",
            gaps: [["Setzen"], ["hin"]]
          },
          {
            t: "trans",
            dir: "toIt",
            a: [
              "Jetzt lege ich Ihnen die Manschette an",
              "Ich lege Ihnen jetzt die Manschette an"
            ]
          },
          {
            t: "dialogue",
            lines: [
              { sp: "A", it: "Guten Morgen. Was machen Sie heute bei mir?" },
              {
                sp: "TY",
                choices: [
                  "Ich messe jetzt Ihren Blutdruck.",
                  "Ich messe jetzt deinen Blutdruck.",
                  "Ich messen jetzt Ihren Blutdruck."
                ],
                a: 0
              },
              { sp: "A", it: "Muss ich mich hinlegen?" },
              {
                sp: "TY",
                choices: [
                  "Nein, setzen Sie sich bitte hin.",
                  "Nein, hinsetzen Sie sich bitte.",
                  "Nein, setzen Sie bitte hin."
                ],
                a: 0
              },
              { sp: "A", it: "Soll ich den Pullover ausziehen?" },
              {
                sp: "TY",
                choices: [
                  "Nein, machen Sie nur den Oberarm frei.",
                  "Nein, freimachen Sie nur den Oberarm.",
                  "Nein, machen nur Sie den Oberarm frei."
                ],
                a: 0
              }
            ]
          },
          {
            t: "listen",
            it: "Ich messe jetzt Ihren Blutdruck. Machen Sie bitte den linken Oberarm frei und halten Sie den Arm ruhig."
          },
          { t: "speak", it: "Bitte sprechen Sie während der Messung nicht." }
        ]
      },
      {
        id: "pfl-u02-l2",
        tags: ["g-komparation"],
        cefr: "B1",
        titleIt: "Werte und Einheiten",
        grammar: {
          examples: [
            { it: "Der Blutdruck liegt bei 120 zu 80." },
            { it: "Der Puls ist heute schneller als gestern." },
            { it: "Am Abend ist die Temperatur höher als am Morgen." },
            { it: "Der zweite Wert ist niedriger als der erste." },
            { it: "Heute Morgen war der Blutdruck am höchsten." },
            { it: "Die Temperatur ist genauso hoch wie gestern." }
          ]
        },
        vocab: [
          { it: "der Wert", plural: "die Werte", ex: "Ich trage den Wert in die Kurve ein." },
          { it: "der Messwert", plural: "die Messwerte", ex: "Alle Messwerte stehen in der Kurve." },
          { it: "die Einheit", plural: "die Einheiten", ex: "Der Blutdruck hat die Einheit mmHg." },
          { it: "der Puls", plural: "die Pulse", ex: "Der Puls ist regelmäßig." },
          { it: "die Temperatur", plural: "die Temperaturen", ex: "Ich messe Ihre Temperatur im Ohr." },
          { it: "der Grad", plural: "die Grade", ex: "Das Thermometer zeigt 37 Grad." },
          { it: "die Kurve", plural: "die Kurven", ex: "Die Werte trage ich in die Kurve ein." },
          { it: "hoch", ex: "Der Blutdruck ist heute höher als gestern." },
          { it: "niedrig", ex: "Der zweite Wert ist niedriger als der erste." },
          { it: "schnell", ex: "Der Puls ist schneller als heute Morgen." },
          { it: "langsam", ex: "Im Schlaf ist der Puls langsamer." },
          { it: "erhöht", ex: "Die Temperatur ist leicht erhöht." }
        ],
        dialogue: {
          titleIt: "Werte vergleichen",
          lines: [
            { who: "👩‍⚕️", it: "Ich habe bei Frau Keller den Blutdruck gemessen: 130 zu 80." },
            { who: "🧑‍⚕️", it: "Und gestern?" },
            { who: "👩‍⚕️", it: "Gestern war er niedriger, 120 zu 80. Der Puls ist heute etwas schneller als gestern, 80 pro Minute." },
            { who: "🧑‍⚕️", it: "Und die Temperatur?" },
            { who: "👩‍⚕️", it: "37 Grad, genauso hoch wie gestern." },
            { who: "🧑‍⚕️", it: "Gut. Trag bitte alle Werte in die Kurve ein." },
            { who: "👩‍⚕️", it: "Mache ich sofort." }
          ]
        },
        exercises: [
          { t: "mcq", a: 1 },
          { t: "conj", verb: "messen", tense: "praes", persons: [0, 1, 2, 3, 4, 5] },
          { t: "fill", a: ["höher"] },
          {
            t: "cloze",
            text: "Der zweite Wert ist {{1}} als der erste, aber heute Morgen war der Blutdruck am {{2}}.",
            gaps: [["niedriger"], ["höchsten"]]
          },
          {
            t: "match",
            pairs: [{ it: "höher" }, { it: "niedriger" }, { it: "schneller" }, { it: "langsamer" }]
          },
          {
            t: "gender",
            opts: ["der", "die", "das"],
            items: [
              { it: "Wert", a: "der" },
              { it: "Messwert", a: "der" },
              { it: "Einheit", a: "die" },
              { it: "Puls", a: "der" },
              { it: "Temperatur", a: "die" },
              { it: "Kurve", a: "die" }
            ]
          },
          {
            t: "order",
            tokens: ["Der", "Puls", "ist", "heute", "schneller", "als", "gestern"],
            a: ["Der Puls ist heute schneller als gestern"]
          },
          {
            t: "trans",
            dir: "toIt",
            a: [
              "Heute ist die Temperatur höher als gestern",
              "Die Temperatur ist heute höher als gestern"
            ]
          },
          {
            t: "dialogue",
            lines: [
              { sp: "A", it: "Wie war der Blutdruck heute Morgen?" },
              {
                sp: "TY",
                choices: [
                  "Er war 130 zu 80, höher als gestern.",
                  "Er war 130 zu 80, hoher als gestern.",
                  "Er war 130 zu 80, mehr hoch als gestern."
                ],
                a: 0
              },
              { sp: "A", it: "Und der Puls?" },
              {
                sp: "TY",
                choices: [
                  "Etwas schneller als gestern, 80 pro Minute.",
                  "Etwas schnell als gestern, 80 pro Minute.",
                  "Etwas mehr schnell als gestern, 80 pro Minute."
                ],
                a: 0
              },
              { sp: "A", it: "Und die Temperatur?" },
              {
                sp: "TY",
                choices: [
                  "Genauso hoch wie gestern, 37 Grad.",
                  "Genauso hoch als gestern, 37 Grad.",
                  "Genauso höher wie gestern, 37 Grad."
                ],
                a: 0
              }
            ]
          },
          {
            t: "listen",
            it: "Gestern war der Blutdruck niedriger. Heute ist der Puls etwas schneller, und die Temperatur ist genauso hoch wie gestern."
          },
          { t: "speak", it: "Der Puls ist heute schneller als gestern." }
        ]
      },
      {
        id: "pfl-u02-l3",
        tags: ["g-wortbildung", "g-komparation"],
        cefr: "B1",
        titleIt: "Fieber, Puls und Blutzucker",
        grammar: {
          examples: [
            { it: "Die Patientin hat eine Tachykardie." },
            { it: "Haben Sie manchmal Herzrasen?" },
            { it: "Der Patient hatte in der Nacht eine Hypoglykämie." },
            { it: "Bei einer Unterzuckerung ist der Blutzucker zu niedrig." },
            { it: "Die Sauerstoffsättigung ist niedriger als heute Morgen." },
            { it: "Ab 38 Grad spricht man meistens von Fieber." }
          ]
        },
        vocab: [
          { it: "die Vitalzeichen", plural: "die Vitalzeichen", ex: "Wir kontrollieren jetzt die Vitalzeichen." },
          { it: "das Fieber", plural: "-", ex: "Haben Sie Fieber?" },
          { it: "die Hyperthermie", plural: "-", ex: "Nach dem Hitzschlag hatte der Patient eine Hyperthermie." },
          { it: "die Tachykardie", plural: "die Tachykardien", ex: "Der Patient hat eine Tachykardie." },
          { it: "das Herzrasen", plural: "-", ex: "Haben Sie manchmal Herzrasen?" },
          { it: "die Bradykardie", plural: "die Bradykardien", ex: "Im Schlaf hat sie eine leichte Bradykardie." },
          { it: "die Hypotonie", plural: "die Hypotonien", ex: "Bei einer Hypotonie ist der Blutdruck zu niedrig." },
          { it: "der Blutzucker", plural: "-", ex: "Ich messe jetzt Ihren Blutzucker." },
          { it: "die Hypoglykämie", plural: "die Hypoglykämien", ex: "Die Patientin hatte in der Nacht eine Hypoglykämie." },
          { it: "die Unterzuckerung", plural: "die Unterzuckerungen", ex: "Zittern und Schwitzen können Zeichen einer Unterzuckerung sein." },
          { it: "die Hyperglykämie", plural: "die Hyperglykämien", ex: "Der Blutzucker ist zu hoch, das ist eine Hyperglykämie." },
          { it: "die Sauerstoffsättigung", plural: "-", ex: "Die Sauerstoffsättigung messe ich am Finger." }
        ],
        dialogue: {
          titleIt: "Am Bett und am Telefon",
          lines: [
            { who: "👩‍⚕️", it: "Herr Lang, ich messe kurz Ihren Blutzucker. Das ist ein kleiner Stich in den Finger." },
            { who: "🧓", it: "Ich zittere ein bisschen, und ich schwitze." },
            { who: "👩‍⚕️", it: "Der Wert ist niedriger als heute Morgen. Ich sage sofort dem Arzt Bescheid." },
            { who: "👩‍⚕️", it: "Herr Doktor Weber, Herr Lang zittert und schwitzt. Der Blutzucker liegt bei 60, ich vermute eine Hypoglykämie." },
            { who: "👨‍⚕️", it: "Danke. Ich komme sofort." },
            { who: "🧓", it: "Schwester, was ist eine Hypoglykämie?" },
            { who: "👩‍⚕️", it: "Das ist eine Unterzuckerung. Ihr Blutzucker ist zu niedrig. Der Arzt kommt gleich." }
          ]
        },
        exercises: [
          {
            t: "match",
            pairs: [
              { it: "die Tachykardie" },
              { it: "die Bradykardie" },
              { it: "die Hypotonie" },
              { it: "die Hypoglykämie" },
              { it: "die Hyperglykämie" }
            ]
          },
          { t: "mcq", a: 1 },
          { t: "multi", a: [0, 2, 4] },
          { t: "fill", a: ["Unterzuckerung"] },
          {
            t: "gender",
            opts: ["der", "die", "das"],
            items: [
              { it: "Fieber", a: "das" },
              { it: "Herzrasen", a: "das" },
              { it: "Blutzucker", a: "der" },
              { it: "Unterzuckerung", a: "die" },
              { it: "Sauerstoffsättigung", a: "die" },
              { it: "Tachykardie", a: "die" }
            ]
          },
          {
            t: "cloze",
            text: "Der Blutzucker ist {{1}} als heute Morgen, ich vermute eine {{2}}.",
            gaps: [["niedriger"], ["Hypoglykämie"]]
          },
          {
            t: "order",
            tokens: ["Ab", "38", "Grad", "spricht", "man", "meistens", "von", "Fieber"],
            a: ["Ab 38 Grad spricht man meistens von Fieber"]
          },
          {
            t: "trans",
            dir: "toIt",
            a: ["Haben Sie Herzrasen"]
          },
          { t: "fill", a: ["niedrig"] },
          {
            t: "listen",
            it: "Die Patientin hat eine Tachykardie. Zu ihr sage ich einfach: Sie haben Herzrasen."
          },
          { t: "speak", it: "Ich messe kurz Ihren Blutzucker." }
        ]
      },
      {
        id: "pfl-u02-l4",
        tags: ["g-passiv"],
        cefr: "B1",
        titleIt: "Auffällige Werte melden",
        grammar: {
          examples: [
            { it: "Der Blutdruck wird zweimal am Tag gemessen." },
            { it: "Alle Werte werden in der Kurve dokumentiert." },
            { it: "Ein auffälliger Wert wird sofort gemeldet." },
            { it: "Die Ärztin wird informiert." },
            { it: "Der Wert wird nach zehn Minuten noch einmal kontrolliert." },
            { it: "Der Patient wird engmaschig überwacht." }
          ]
        },
        vocab: [
          { it: "auffällig", ex: "Der Wert ist auffällig." },
          { it: "melden", ex: "Ich melde den Wert sofort der Ärztin." },
          { it: "dokumentieren", ex: "Jeder Wert wird dokumentiert." },
          { it: "kontrollieren", ex: "Wir kontrollieren den Wert in zehn Minuten noch einmal." },
          { it: "informieren", ex: "Die Stationsleitung wird informiert." },
          { it: "überwachen", ex: "Der Patient wird engmaschig überwacht." },
          { it: "die Stationsleitung", plural: "die Stationsleitungen", ex: "Die Stationsleitung ist heute Frau Becker." },
          { it: "der Stationsarzt", plural: "die Stationsärzte", ex: "Der Stationsarzt kommt sofort." },
          { it: "die Atemfrequenz", plural: "die Atemfrequenzen", ex: "Die Atemfrequenz ist erhöht." },
          { it: "der Normbereich", plural: "die Normbereiche", ex: "Der Wert liegt im Normbereich." },
          { it: "der Grenzwert", plural: "die Grenzwerte", ex: "Die Grenzwerte legt die Klinik fest." },
          { it: "die Abweichung", plural: "die Abweichungen", ex: "Jede Abweichung wird gemeldet." }
        ],
        dialogue: {
          titleIt: "Ein auffälliger Wert",
          lines: [
            { who: "👩‍⚕️", it: "Herr Doktor Weber, hier ist Elena Marin von Station 3. Ich rufe wegen Frau Keller an, Zimmer 12." },
            { who: "👨‍⚕️", it: "Ja, was gibt es?" },
            { who: "👩‍⚕️", it: "Ihr Blutdruck liegt bei 90 zu 60. Heute Morgen war er 130 zu 80. Der Puls ist 110." },
            { who: "👨‍⚕️", it: "Wie geht es ihr?" },
            { who: "👩‍⚕️", it: "Ihr ist schwindelig, sonst ist sie wach und orientiert. Ich habe zweimal gemessen." },
            { who: "👨‍⚕️", it: "Gut, ich komme gleich. Bitte kontrollieren Sie den Blutdruck alle fünfzehn Minuten." },
            { who: "👩‍⚕️", it: "Mache ich. Die Werte werden in der Kurve dokumentiert." }
          ]
        },
        exercises: [
          { t: "mcq", a: 0 },
          { t: "multi", a: [0, 2, 4] },
          { t: "fill", a: ["gemeldet"] },
          {
            t: "cloze",
            text: "Die Atemfrequenz {{1}} jede Stunde {{2}}.",
            gaps: [["wird"], ["kontrolliert", "überprüft"]]
          },
          {
            t: "order",
            tokens: ["Die", "Stationsleitung", "wird", "sofort", "informiert"],
            a: ["Die Stationsleitung wird sofort informiert"]
          },
          {
            t: "trans",
            dir: "toIt",
            a: [
              "Der Wert wird nach zehn Minuten noch einmal kontrolliert",
              "Der Wert wird nach zehn Minuten erneut kontrolliert",
              "Nach zehn Minuten wird der Wert noch einmal kontrolliert",
              "Nach zehn Minuten wird der Wert erneut kontrolliert",
              "Der Wert wird nach zehn Minuten noch einmal gemessen",
              "Nach zehn Minuten wird der Wert noch einmal gemessen"
            ]
          },
          {
            t: "match",
            pairs: [{ it: "tachykard" }, { it: "bradykard" }, { it: "hypoton" }, { it: "febril" }]
          },
          {
            t: "gender",
            opts: ["der", "die", "das"],
            items: [
              { it: "Stationsleitung", a: "die" },
              { it: "Stationsarzt", a: "der" },
              { it: "Atemfrequenz", a: "die" },
              { it: "Normbereich", a: "der" },
              { it: "Grenzwert", a: "der" },
              { it: "Abweichung", a: "die" }
            ]
          },
          {
            t: "dialogue",
            lines: [
              { sp: "A", it: "Weber, Innere. Was gibt es?" },
              {
                sp: "TY",
                choices: [
                  "Hier ist Elena Marin von Station 3. Ich rufe wegen Frau Keller an.",
                  "Hier ist Elena Marin von Station 3. Ich anrufe wegen Frau Keller.",
                  "Hier Elena Marin von Station 3 ist. Ich rufe wegen Frau Keller an."
                ],
                a: 0
              },
              { sp: "A", it: "Was ist los?" },
              {
                sp: "TY",
                choices: [
                  "Ihr Blutdruck ist niedriger als heute Morgen: 90 zu 60.",
                  "Ihr Blutdruck ist niedrig als heute Morgen: 90 zu 60.",
                  "Ihr Blutdruck ist mehr niedrig als heute Morgen: 90 zu 60."
                ],
                a: 0
              },
              { sp: "A", it: "Gut, ich komme. Bitte kontrollieren Sie den Blutdruck alle fünfzehn Minuten." },
              {
                sp: "TY",
                choices: [
                  "Mache ich. Die Werte werden in der Kurve dokumentiert.",
                  "Mache ich. Die Werte werden in der Kurve gedokumentiert.",
                  "Mache ich. Die Werte wird in der Kurve dokumentiert."
                ],
                a: 0
              }
            ]
          },
          {
            t: "listen",
            it: "Der Blutdruck von Frau Keller ist niedriger als heute Morgen. Der Wert wird sofort dem Stationsarzt gemeldet."
          },
          { t: "speak", it: "Ein auffälliger Wert wird sofort gemeldet." }
        ]
      }
    ],
    test: {
      id: "pfl-u02-test",
      tags: ["g-imperativ", "g-komparation", "g-passiv"],
      cefr: "B1",
      titleIt: "Test: Vitalzeichen und Messwerte",
      exercises: [
        { t: "mcq", a: 0 },
        { t: "fill", a: ["ein"] },
        { t: "fill", a: ["langsamer"] },
        { t: "conj", verb: "anlegen", tense: "praes", persons: [0, 1, 2, 3, 4, 5] },
        {
          t: "match",
          pairs: [{ it: "die Tachykardie" }, { it: "die Hypotonie" }, { it: "die Hypoglykämie" }, { it: "die Hyperglykämie" }]
        },
        { t: "multi", a: [0, 2, 4] },
        {
          t: "cloze",
          text: "Der Blutzucker ist {{1}} als heute Morgen. Der Wert {{2}} sofort gemeldet.",
          gaps: [["niedriger"], ["wird"]]
        },
        {
          t: "order",
          tokens: ["Machen", "Sie", "bitte", "den", "Oberarm", "frei"],
          a: ["Machen Sie bitte den Oberarm frei", "Machen Sie den Oberarm bitte frei"]
        },
        {
          t: "gender",
          opts: ["der", "die", "das"],
          items: [
            { it: "Manschette", a: "die" },
            { it: "Puls", a: "der" },
            { it: "Fieber", a: "das" },
            { it: "Unterzuckerung", a: "die" },
            { it: "Atemfrequenz", a: "die" },
            { it: "Grenzwert", a: "der" }
          ]
        },
        {
          t: "listen",
          it: "Ich messe jetzt Ihren Blutdruck. Bitte sprechen Sie während der Messung nicht."
        },
        { t: "speak", it: "Der Blutdruck ist niedriger als heute Morgen." }
      ]
    }
  }
]);
