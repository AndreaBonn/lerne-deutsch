/* ============================================================
   Language-neutral layer: German (de-DE), structure and answer keys.
   Learner-language texts live in data/i18n/<lang>/a2-02.js.
   a2-u05, a2-u06, a2-u07 and a2-u08 are German units.
   ============================================================ */
LINGUAI.addUnits("A2", [
  {
    id: "a2-u05",
    icon: "🏠",
    titleIt: "Wohnen",
    lessons: [
      {
        id: "a2-u05-l1",
        tags: ["g-adjektivdeklination"],
        cefr: "A2",
        titleIt: "Ich suche eine helle Wohnung",
        grammar: {
          examples: [
            { it: "Ich suche eine helle Wohnung." },
            { it: "Die Wohnung hat einen großen Balkon." },
            { it: "Das ist ein altes Haus." },
            { it: "Wir haben keine neue Küche." },
            { it: "Das ist mein neuer Nachbar." },
            { it: "Sie wohnt in einer kleinen Wohnung." }
          ]
        },
        vocab: [
          { it: "die Wohnung", plural: "die Wohnungen", ex: "Die Wohnung ist hell und ruhig." },
          { it: "die Miete", plural: "die Mieten", ex: "Die Miete ist günstig." },
          { it: "der Balkon", plural: "die Balkone", ex: "Die Wohnung hat einen Balkon." },
          { it: "der Nachbar", plural: "die Nachbarn", ex: "Mein Nachbar ist nett." },
          { it: "die Anzeige", plural: "die Anzeigen", ex: "Ich lese die Anzeige im Internet." },
          { it: "hell", ex: "Das Wohnzimmer ist hell." },
          { it: "dunkel", ex: "Die Küche ist dunkel." },
          { it: "ruhig", ex: "Wir suchen eine ruhige Wohnung." },
          { it: "günstig", ex: "Das ist eine günstige Wohnung." },
          { it: "möbliert", ex: "Das Zimmer ist möbliert." },
          { it: "suchen", ex: "Wir suchen eine Wohnung." },
          { it: "mieten", ex: "Ich möchte eine Wohnung mieten." }
        ],
        exercises: [
          { t: "mcq", a: 0 },
          { t: "mcq", a: 1 },
          { t: "mcq", a: 1 },
          { t: "fill", a: ["neue"] },
          {
            t: "match",
            pairs: [{ it: "hell" }, { it: "dunkel" }, { it: "ruhig" }, { it: "günstig" }]
          },
          {
            t: "trans",
            dir: "toIt",
            a: ["Ich suche eine ruhige und günstige Wohnung", "Ich suche eine günstige und ruhige Wohnung"]
          },
          {
            t: "cloze",
            text: "Die Wohnung hat einen {{1}} Balkon und eine {{2}} Küche.",
            gaps: [["großen"], ["neue"]]
          },
          {
            t: "order",
            tokens: ["Wir", "suchen", "eine", "günstige", "Wohnung"],
            a: ["Wir suchen eine günstige Wohnung"]
          },
          { t: "listen", it: "Die Wohnung hat einen großen Balkon und eine neue Küche." },
          { t: "speak", it: "Ich suche eine helle und ruhige Wohnung." }
        ]
      },
      {
        id: "a2-u05-l2",
        tags: ["g-wechselpraep"],
        cefr: "A2",
        titleIt: "Wohin stelle ich das Sofa?",
        grammar: {
          examples: [
            { it: "Ich stelle das Sofa an die Wand." },
            { it: "Das Sofa steht an der Wand." },
            { it: "Ich lege den Teppich unter den Tisch." },
            { it: "Der Teppich liegt unter dem Tisch." },
            { it: "Wohin stellst du die Lampe? In die Ecke." },
            { it: "Die Lampe steht in der Ecke." }
          ]
        },
        vocab: [
          { it: "stellen", ex: "Ich stelle die Lampe in die Ecke." },
          { it: "stehen", ex: "Die Lampe steht in der Ecke." },
          { it: "legen", ex: "Ich lege den Teppich unter den Tisch." },
          { it: "liegen", ex: "Der Teppich liegt unter dem Tisch." },
          { it: "das Sofa", plural: "die Sofas", ex: "Das Sofa steht an der Wand." },
          { it: "der Schrank", plural: "die Schränke", ex: "Der Schrank steht im Schlafzimmer." },
          { it: "das Regal", plural: "die Regale", ex: "Das Regal steht neben dem Sofa." },
          { it: "die Lampe", plural: "die Lampen", ex: "Die Lampe steht auf dem Tisch." },
          { it: "der Teppich", plural: "die Teppiche", ex: "Der Teppich liegt unter dem Sofa." },
          { it: "das Bild", plural: "die Bilder", ex: "Das Bild ist neu." },
          { it: "die Wand", plural: "die Wände", ex: "Das Regal steht an der Wand." },
          { it: "die Ecke", plural: "die Ecken", ex: "Die Lampe steht in der Ecke." }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "mcq", a: 0 },
          { t: "mcq", a: 1 },
          { t: "multi", a: [0, 1, 3] },
          { t: "fill", a: ["die"] },
          { t: "fill", a: ["liegt"] },
          {
            t: "trans",
            dir: "toIt",
            a: ["Ich stelle die Lampe in die Ecke"]
          },
          {
            t: "cloze",
            text: "Ich {{1}} das Regal an die Wand. Jetzt {{2}} es dort.",
            gaps: [["stelle"], ["steht"]]
          },
          { t: "listen", it: "Ich stelle das Sofa an die Wand und lege den Teppich unter den Tisch." },
          { t: "speak", it: "Das Regal steht an der Wand und der Teppich liegt unter dem Tisch." }
        ]
      },
      {
        id: "a2-u05-l3",
        tags: ["g-wortbildung", "g-genus"],
        cefr: "A2",
        titleIt: "das Wohnzimmer, die Küche",
        grammar: {
          examples: [
            { it: "Das Wohnzimmer ist groß und hell." },
            { it: "Die Haustür ist neu." },
            { it: "Der Schlüssel liegt auf dem Küchentisch." },
            { it: "Der Kühlschrank steht in der Küche." },
            { it: "Wir haben ein kleines Badezimmer." },
            { it: "Die Waschmaschine steht im Keller." }
          ]
        },
        vocab: [
          { it: "das Wohnzimmer", plural: "die Wohnzimmer", ex: "Das Wohnzimmer ist groß." },
          { it: "das Schlafzimmer", plural: "die Schlafzimmer", ex: "Das Schlafzimmer ist klein." },
          { it: "das Badezimmer", plural: "die Badezimmer", ex: "Das Badezimmer hat ein Fenster." },
          { it: "die Küche", plural: "die Küchen", ex: "Die Küche ist neu." },
          { it: "der Flur", plural: "die Flure", ex: "Der Schlüssel liegt im Flur." },
          { it: "der Keller", plural: "die Keller", ex: "Die Waschmaschine steht im Keller." },
          { it: "der Garten", plural: "die Gärten", ex: "Wir haben einen kleinen Garten." },
          { it: "die Haustür", plural: "die Haustüren", ex: "Die Haustür ist braun." },
          { it: "die Wohnungstür", plural: "die Wohnungstüren", ex: "Die Wohnungstür ist neu." },
          { it: "der Kühlschrank", plural: "die Kühlschränke", ex: "Der Kühlschrank steht in der Küche." },
          { it: "die Waschmaschine", plural: "die Waschmaschinen", ex: "Die Waschmaschine ist neu." },
          { it: "der Schlüssel", plural: "die Schlüssel", ex: "Wo ist mein Schlüssel?" }
        ],
        exercises: [
          {
            t: "gender",
            opts: ["der", "die", "das"],
            items: [
              { it: "Wohnzimmer", a: "das" },
              { it: "Küche", a: "die" },
              { it: "Haustür", a: "die" },
              { it: "Kühlschrank", a: "der" },
              { it: "Schlafzimmer", a: "das" },
              { it: "Waschmaschine", a: "die" }
            ]
          },
          {
            t: "match",
            pairs: [{ it: "Wohnzimmer" }, { it: "Schlafzimmer" }, { it: "Badezimmer" }, { it: "Haustür" }]
          },
          { t: "mcq", a: 0 },
          { t: "fill", a: ["der"] },
          { t: "fill", a: ["s"] },
          {
            t: "trans",
            dir: "toIt",
            a: ["Das Wohnzimmer ist groß und hell", "Das Wohnzimmer ist hell und groß"]
          },
          {
            t: "cloze",
            text: "Die {{1}} steht im {{2}} und der Kühlschrank steht in der {{3}}.",
            gaps: [["Waschmaschine"], ["Keller"], ["Küche"]]
          },
          {
            t: "order",
            tokens: ["Der", "Schlüssel", "liegt", "auf", "dem", "Küchentisch"],
            a: ["Der Schlüssel liegt auf dem Küchentisch"]
          },
          { t: "listen", it: "Der Kühlschrank steht in der Küche und die Waschmaschine steht im Keller." },
          { t: "speak", it: "Das Schlafzimmer und das Badezimmer sind klein, aber das Wohnzimmer ist groß." }
        ]
      },
      {
        id: "a2-u05-l4",
        tags: ["g-konjunktiv2", "g-register"],
        cefr: "A2",
        titleIt: "Die Heizung ist kaputt",
        grammar: {
          examples: [
            { it: "Guten Tag, hier ist Weber aus der Hauptstraße 5." },
            { it: "Die Heizung ist kaputt." },
            { it: "Der Wasserhahn in der Küche tropft." },
            { it: "Könnten Sie bitte morgen vorbeikommen?" },
            { it: "Könnten Sie die Heizung reparieren?" },
            { it: "Würden Sie das bitte so schnell wie möglich reparieren?" }
          ]
        },
        vocab: [
          { it: "die Heizung", plural: "die Heizungen", ex: "Die Heizung ist kaputt." },
          { it: "kaputt", ex: "Der Wasserhahn ist kaputt." },
          { it: "funktionieren", ex: "Die Heizung funktioniert nicht." },
          { it: "reparieren", ex: "Könnten Sie das bitte reparieren?" },
          { it: "die Hausverwaltung", plural: "die Hausverwaltungen", ex: "Ich rufe die Hausverwaltung an." },
          { it: "der Hausmeister", plural: "die Hausmeister", ex: "Der Hausmeister kommt morgen." },
          { it: "die Reparatur", plural: "die Reparaturen", ex: "Die Reparatur dauert nicht lange." },
          { it: "der Wasserhahn", plural: "die Wasserhähne", ex: "Der Wasserhahn tropft." },
          { it: "das Fenster", plural: "die Fenster", ex: "Das Fenster in der Küche ist kaputt." },
          { it: "tropfen", ex: "Der Wasserhahn tropft." },
          { it: "vorbeikommen", ex: "Könnten Sie heute vorbeikommen?" },
          { it: "dringend", ex: "Das ist dringend." }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "mcq", a: 2 },
          { t: "fill", a: ["kaputt"] },
          { t: "fill", a: ["Könnten", "könnten"] },
          {
            t: "match",
            pairs: [{ it: "Heizung" }, { it: "Wasserhahn" }, { it: "Hausmeister" }, { it: "Hausverwaltung" }]
          },
          {
            t: "order",
            tokens: ["Könnten", "Sie", "bitte", "die", "Heizung", "reparieren"],
            a: ["Könnten Sie bitte die Heizung reparieren", "Könnten Sie die Heizung bitte reparieren"]
          },
          {
            t: "trans",
            dir: "toIt",
            a: ["Der Wasserhahn in der Küche tropft", "Der Wasserhahn tropft in der Küche"]
          },
          {
            t: "cloze",
            text: "Guten Tag, hier {{1}} Weber. Die Heizung {{2}} kaputt. {{3}} Sie bitte heute vorbeikommen?",
            gaps: [["ist"], ["ist"], ["Könnten", "Würden", "Können"]]
          },
          { t: "listen", it: "Guten Tag, hier ist Weber. Die Heizung ist kaputt. Könnten Sie bitte heute vorbeikommen?" },
          { t: "speak", it: "Könnten Sie bitte den Wasserhahn in der Küche reparieren?" }
        ]
      }
    ],
    test: {
      id: "a2-u05-test",
      tags: ["g-wechselpraep", "g-adjektivdeklination", "g-wortbildung"],
      cefr: "A2",
      titleIt: "Test: Wohnen",
      exercises: [
        { t: "fill", a: ["helle"] },
        { t: "fill", a: ["altes"] },
        { t: "fill", a: ["die"] },
        { t: "fill", a: ["liegt"] },
        { t: "fill", a: ["der"] },
        { t: "mcq", a: 1 },
        { t: "mcq", a: 1 },
        {
          t: "match",
          pairs: [{ it: "Heizung" }, { it: "Hausmeister" }, { it: "Balkon" }, { it: "Schlüssel" }]
        },
        { t: "listen", it: "Der Kühlschrank steht in der Küche und das Sofa steht im Wohnzimmer." },
        { t: "speak", it: "Ich suche eine helle Wohnung mit einem großen Balkon." }
      ]
    }
  },
  {
    id: "a2-u06",
    icon: "💼",
    titleIt: "Im Büro",
    lessons: [
      {
        id: "a2-u06-l1",
        tags: ["g-konjunktiv2", "g-nebensatz-dass"],
        cefr: "A2",
        titleIt: "Könnten Sie mich zurückrufen?",
        grammar: {
          examples: [
            { it: "Könnten Sie mich bitte zurückrufen?" },
            { it: "Könnten Sie Frau Keller etwas ausrichten?" },
            { it: "Ich möchte wissen, ob Herr Weber heute im Büro ist." },
            { it: "Ich weiß nicht, wann die Besprechung beginnt." },
            { it: "Könnten Sie mir sagen, wo Frau Keller ist?" },
            { it: "Könnten Sie ihr sagen, dass ich morgen wieder anrufe?" }
          ]
        },
        vocab: [
          { it: "anrufen", ex: "Ich rufe morgen wieder an." },
          { it: "zurückrufen", ex: "Könnten Sie mich zurückrufen?" },
          { it: "die Nachricht", plural: "die Nachrichten", ex: "Ich habe eine Nachricht für Herrn Weber." },
          { it: "ausrichten", ex: "Könnten Sie ihm etwas ausrichten?" },
          { it: "die Durchwahl", plural: "die Durchwahlen", ex: "Die Durchwahl von Frau Keller ist die 24." },
          { it: "verbinden", ex: "Ich verbinde Sie mit Frau Keller." },
          { it: "der Anrufbeantworter", plural: "die Anrufbeantworter", ex: "Der Anrufbeantworter ist an." },
          { it: "erreichen", ex: "Ich erreiche Herrn Weber nicht." },
          { it: "besetzt", ex: "Die Leitung ist besetzt." },
          { it: "die Telefonnummer", plural: "die Telefonnummern", ex: "Wie ist Ihre Telefonnummer?" },
          { it: "der Termin", plural: "die Termine", ex: "Der Termin ist am Montag." },
          { it: "die Leitung", plural: "die Leitungen", ex: "Die Leitung ist leider besetzt." }
        ],
        exercises: [
          { t: "mcq", a: 0 },
          { t: "conj", verb: "können", tense: "konj2", persons: [0, 1, 2, 3, 4, 5] },
          { t: "fill", a: ["ob"] },
          { t: "fill", a: ["wann"] },
          {
            t: "match",
            pairs: [{ it: "anrufen" }, { it: "Nachricht" }, { it: "Durchwahl" }, { it: "besetzt" }]
          },
          {
            t: "trans",
            dir: "toIt",
            a: [
              "Könnten Sie mich bitte zurückrufen",
              "Könnten Sie mich zurückrufen, bitte",
              "Könnten Sie mich zurückrufen bitte"
            ]
          },
          {
            t: "cloze",
            text: "Könnten Sie Herrn Weber etwas {{1}}? Ich möchte wissen, {{2}} er im Büro ist.",
            gaps: [["ausrichten"], ["ob"]]
          },
          {
            t: "dialogue",
            lines: [
              { sp: "A", it: "Firma Brandt, guten Tag." },
              {
                sp: "TY",
                choices: [
                  "Guten Tag, hier ist Weber. Könnten Sie mich mit Frau Keller verbinden?",
                  "Guten Tag, hier ist Weber. Könnten Sie verbinden mich mit Frau Keller?",
                  "Guten Tag, hier ist Weber. Könnten Sie mich mit Frau Keller verbindet?"
                ],
                a: 0
              },
              { sp: "A", it: "Frau Keller ist gerade nicht am Platz. Soll ich ihr etwas ausrichten?" },
              {
                sp: "TY",
                choices: [
                  "Ja, bitte. Könnten Sie ihr sagen, dass ich morgen wieder anrufe?",
                  "Ja, bitte. Könnten Sie ihr sagen, dass ich morgen wieder rufe an?",
                  "Ja, bitte. Könnten Sie ihr sagen, dass ich rufe morgen wieder an?"
                ],
                a: 0
              }
            ]
          },
          { t: "listen", it: "Guten Tag, hier ist Weber. Könnten Sie mich bitte zurückrufen? Ich möchte wissen, ob der Termin am Montag ist." },
          { t: "speak", it: "Könnten Sie Frau Keller bitte sagen, dass ich morgen wieder anrufe?" }
        ]
      },
      {
        id: "a2-u06-l2",
        tags: ["g-register"],
        cefr: "A2",
        titleIt: "Sehr geehrte Frau Keller",
        grammar: {
          examples: [
            { it: "Sehr geehrte Frau Keller," },
            { it: "Sehr geehrter Herr Weber," },
            { it: "Vielen Dank für Ihre E-Mail." },
            { it: "Im Anhang finden Sie die Datei." },
            { it: "Könnten Sie mir den Termin bitte bestätigen?" },
            { it: "Mit freundlichen Grüßen" }
          ]
        },
        vocab: [
          { it: "die E-Mail", plural: "die E-Mails", ex: "Ich schreibe Ihnen eine E-Mail." },
          { it: "der Betreff", plural: "die Betreffe", ex: "Der Betreff der E-Mail ist kurz." },
          { it: "die Anrede", plural: "die Anreden", ex: "Die Anrede ist formell." },
          { it: "der Gruß", plural: "die Grüße", ex: "Viele Grüße aus Berlin." },
          { it: "der Anhang", plural: "die Anhänge", ex: "Im Anhang finden Sie den Plan." },
          { it: "die Datei", plural: "die Dateien", ex: "Die Datei ist zu groß." },
          { it: "der Absender", plural: "die Absender", ex: "Der Absender ist Frau Keller." },
          { it: "schicken", ex: "Ich schicke Ihnen die Datei." },
          { it: "anhängen", ex: "Ich hänge die Datei an." },
          { it: "bestätigen", ex: "Könnten Sie den Termin bestätigen?" },
          { it: "freundlich", ex: "Sie ist immer sehr freundlich." },
          { it: "formell", ex: "Die E-Mail ist formell." }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "mcq", a: 0 },
          { t: "fill", a: ["geehrter"] },
          { t: "fill", a: ["Ihre"] },
          {
            t: "match",
            pairs: [{ it: "Betreff" }, { it: "Anhang" }, { it: "Absender" }, { it: "Datei" }]
          },
          {
            t: "order",
            tokens: ["Im", "Anhang", "finden", "Sie", "die", "Datei"],
            a: [
              "Im Anhang finden Sie die Datei",
              "Sie finden im Anhang die Datei",
              "Sie finden die Datei im Anhang",
              "Die Datei finden Sie im Anhang"
            ]
          },
          {
            t: "trans",
            dir: "toIt",
            a: [
              "Sehr geehrte Frau Keller, vielen Dank für Ihre E-Mail",
              "Sehr geehrte Frau Keller, herzlichen Dank für Ihre E-Mail",
              "Sehr geehrte Frau Keller, danke für Ihre E-Mail"
            ]
          },
          {
            t: "cloze",
            text: "Sehr {{1}} Frau Keller, vielen Dank für {{2}} E-Mail. Mit freundlichen {{3}}",
            gaps: [["geehrte"], ["Ihre"], ["Grüßen"]]
          },
          {
            t: "listen",
            it: "Sehr geehrte Frau Keller, vielen Dank für Ihre E-Mail. Im Anhang finden Sie die Datei. Mit freundlichen Grüßen"
          },
          { t: "speak", it: "Könnten Sie mir bitte den Termin bestätigen?" }
        ]
      },
      {
        id: "a2-u06-l3",
        tags: ["g-man"],
        cefr: "A2",
        titleIt: "Hier macht man das so",
        grammar: {
          examples: [
            { it: "Hier duzt man sich." },
            { it: "Bei uns beginnt man um acht Uhr." },
            { it: "In der Mittagspause isst man in der Kantine." },
            { it: "Hier darf man nicht rauchen." },
            { it: "Wie sagt man das auf Deutsch?" },
            { it: "Man muss pünktlich sein." }
          ]
        },
        vocab: [
          { it: "das Büro", plural: "die Büros", ex: "Das Büro ist im zweiten Stock." },
          { it: "der Kollege", plural: "die Kollegen", ex: "Mein Kollege heißt Tim." },
          { it: "die Kollegin", plural: "die Kolleginnen", ex: "Meine Kollegin ist nett." },
          { it: "der Chef", plural: "die Chefs", ex: "Der Chef kommt um neun Uhr." },
          { it: "die Mittagspause", plural: "die Mittagspausen", ex: "In der Mittagspause essen wir zusammen." },
          { it: "die Kantine", plural: "die Kantinen", ex: "Die Kantine ist im Erdgeschoss." },
          { it: "der Drucker", plural: "die Drucker", ex: "Der Drucker steht im Flur." },
          { it: "die Arbeitszeit", plural: "die Arbeitszeiten", ex: "Die Arbeitszeit beginnt um acht Uhr." },
          { it: "pünktlich", ex: "Man muss pünktlich sein." },
          { it: "duzen", ex: "Im Büro duzt man sich." },
          { it: "siezen", ex: "Den Chef siezt man hier." },
          { it: "üblich", ex: "Das ist hier üblich." }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "mcq", a: 0 },
          { t: "multi", a: [0, 1, 3] },
          { t: "fill", a: ["isst"] },
          { t: "fill", a: ["sagt"] },
          {
            t: "order",
            tokens: ["Bei", "uns", "beginnt", "man", "um", "acht", "Uhr"],
            a: [
              "Bei uns beginnt man um acht Uhr",
              "Man beginnt bei uns um acht Uhr",
              "Um acht Uhr beginnt man bei uns",
              "Man beginnt um acht Uhr bei uns"
            ]
          },
          {
            t: "trans",
            dir: "toIt",
            a: ["Hier duzt man sich", "Man duzt sich hier"]
          },
          {
            t: "cloze",
            text: "Hier {{1}} man pünktlich sein, und man {{2}} nicht rauchen.",
            gaps: [["muss"], ["darf"]]
          },
          {
            t: "listen",
            it: "Bei uns beginnt man um acht Uhr. In der Mittagspause isst man in der Kantine. Hier duzt man sich."
          },
          { t: "speak", it: "Hier muss man pünktlich sein, und im Büro darf man nicht rauchen." }
        ]
      },
      {
        id: "a2-u06-l4",
        tags: ["g-konnektoren"],
        cefr: "A2",
        titleIt: "In der Besprechung",
        grammar: {
          examples: [
            { it: "Zuerst besprechen wir die Tagesordnung." },
            { it: "Dann diskutieren wir den Vorschlag." },
            { it: "Danach schreibt Anna das Protokoll." },
            { it: "Außerdem brauchen wir einen neuen Drucker." },
            { it: "Ich schlage vor, dass wir einen neuen Termin machen." },
            { it: "Ich bin einverstanden." }
          ]
        },
        vocab: [
          { it: "die Besprechung", plural: "die Besprechungen", ex: "Die Besprechung beginnt um zehn Uhr." },
          { it: "der Vorschlag", plural: "die Vorschläge", ex: "Das ist ein guter Vorschlag." },
          { it: "die Tagesordnung", plural: "die Tagesordnungen", ex: "Die Tagesordnung hat drei Punkte." },
          { it: "das Ergebnis", plural: "die Ergebnisse", ex: "Das Ergebnis ist gut." },
          { it: "das Protokoll", plural: "die Protokolle", ex: "Anna schreibt das Protokoll." },
          { it: "der Punkt", plural: "die Punkte", ex: "Der erste Punkt ist wichtig." },
          { it: "vorschlagen", ex: "Ich schlage einen neuen Termin vor." },
          { it: "zustimmen", ex: "Ich stimme zu." },
          { it: "einverstanden", ex: "Ich bin einverstanden." },
          { it: "zuerst", ex: "Zuerst besprechen wir die Tagesordnung." },
          { it: "danach", ex: "Danach machen wir eine Pause." },
          { it: "außerdem", ex: "Außerdem habe ich eine Frage." }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "fill", a: ["dann", "danach"] },
          { t: "fill", a: ["brauchen"] },
          {
            t: "match",
            pairs: [{ it: "Vorschlag" }, { it: "Tagesordnung" }, { it: "Ergebnis" }, { it: "Protokoll" }]
          },
          {
            t: "order",
            tokens: ["Danach", "schreibt", "Anna", "das", "Protokoll"],
            a: [
              "Danach schreibt Anna das Protokoll",
              "Anna schreibt danach das Protokoll",
              "Anna schreibt das Protokoll danach",
              "Das Protokoll schreibt Anna danach"
            ]
          },
          {
            t: "trans",
            dir: "toIt",
            a: ["Außerdem habe ich eine Frage", "Ich habe außerdem eine Frage"]
          },
          {
            t: "cloze",
            text: "{{1}} besprechen wir den Vorschlag. {{2}} schreibt Anna das Protokoll.",
            gaps: [["Zuerst"], ["Dann", "Danach"]]
          },
          {
            t: "dialogue",
            lines: [
              { sp: "A", it: "Guten Morgen! Wir haben heute viel Arbeit. Wie fangen wir an?" },
              {
                sp: "TY",
                choices: [
                  "Zuerst besprechen wir die Tagesordnung.",
                  "Zuerst wir besprechen die Tagesordnung.",
                  "Wir zuerst besprechen die Tagesordnung."
                ],
                a: 0
              },
              { sp: "A", it: "Gut. Und danach?" },
              {
                sp: "TY",
                choices: [
                  "Danach diskutieren wir den Vorschlag von Herrn Weber.",
                  "Danach wir diskutieren den Vorschlag von Herrn Weber.",
                  "Wir danach diskutieren den Vorschlag von Herrn Weber."
                ],
                a: 0
              }
            ]
          },
          {
            t: "listen",
            it: "Zuerst besprechen wir die Tagesordnung. Danach diskutieren wir den Vorschlag. Außerdem schreibt Anna das Protokoll."
          },
          { t: "speak", it: "Ich schlage vor, dass wir zuerst die Tagesordnung besprechen." }
        ]
      }
    ],
    test: {
      id: "a2-u06-test",
      tags: ["g-konjunktiv2", "g-man", "g-register"],
      cefr: "A2",
      titleIt: "Test: Im Büro",
      exercises: [
        { t: "conj", verb: "können", tense: "konj2", persons: [1, 3, 4] },
        { t: "fill", a: ["ob"] },
        { t: "fill", a: ["muss"] },
        { t: "fill", a: ["geehrte"] },
        { t: "fill", a: ["besprechen"] },
        { t: "mcq", a: 1 },
        {
          t: "match",
          pairs: [{ it: "Nachricht" }, { it: "Betreff" }, { it: "Besprechung" }, { it: "Kollegin" }]
        },
        {
          t: "trans",
          dir: "toIt",
          a: [
            "Könnten Sie mir den Termin bitte bestätigen",
            "Könnten Sie mir bitte den Termin bestätigen",
            "Könnten Sie mir den Termin bestätigen, bitte"
          ]
        },
        { t: "listen", it: "Ich möchte wissen, ob Herr Weber heute im Büro ist. Könnten Sie mich bitte zurückrufen?" },
        { t: "speak", it: "Bei uns beginnt man um acht Uhr, und zuerst besprechen wir die Tagesordnung." }
      ]
    }
  },
  {
    id: "a2-u07",
    icon: "🎉",
    titleIt: "Feste und Bräuche",
    lessons: [
      {
        id: "a2-u07-l1",
        tags: ["g-verben-dativ", "g-temporalangaben"],
        cefr: "A2",
        titleIt: "Herzlichen Glückwunsch!",
        grammar: {
          examples: [
            { it: "Ich gratuliere dir zum Geburtstag." },
            { it: "Herzlichen Glückwunsch zum Geburtstag!" },
            { it: "Wir gratulieren euch zur Hochzeit." },
            { it: "Mein Geburtstag ist am 3. Oktober." },
            { it: "Ich schenke meiner Schwester ein Buch." },
            { it: "Ich danke dir für das Geschenk." }
          ]
        },
        vocab: [
          { it: "der Geburtstag", plural: "die Geburtstage", ex: "Mein Geburtstag ist am 3. Oktober." },
          { it: "das Geschenk", plural: "die Geschenke", ex: "Danke für das Geschenk!" },
          { it: "die Hochzeit", plural: "die Hochzeiten", ex: "Die Hochzeit ist im Mai." },
          { it: "der Glückwunsch", plural: "die Glückwünsche", ex: "Herzlichen Glückwunsch zum Geburtstag!" },
          { it: "gratulieren", ex: "Ich gratuliere dir zum Geburtstag." },
          { it: "schenken", ex: "Ich schenke meiner Mutter Blumen." },
          { it: "danken", ex: "Ich danke dir für die Hilfe." },
          { it: "das Fest", plural: "die Feste", ex: "Das Fest beginnt um sieben Uhr." },
          { it: "der Kuchen", plural: "die Kuchen", ex: "Der Kuchen ist noch warm." },
          { it: "feiern", ex: "Wir feiern am Samstag." },
          { it: "die Party", plural: "die Partys", ex: "Die Party beginnt um acht Uhr." },
          { it: "die Kerze", plural: "die Kerzen", ex: "Auf dem Kuchen steht eine Kerze." }
        ],
        exercises: [
          { t: "mcq", a: 0 },
          { t: "mcq", a: 1 },
          { t: "mcq", a: 2 },
          { t: "mcq", a: 0 },
          { t: "fill", a: ["dir"] },
          { t: "fill", a: ["am"] },
          {
            t: "match",
            pairs: [{ it: "Geburtstag" }, { it: "Geschenk" }, { it: "Hochzeit" }, { it: "Glückwunsch" }]
          },
          {
            t: "trans",
            dir: "toIt",
            a: [
              "Ich gratuliere Tim zum Geburtstag",
              "Zum Geburtstag gratuliere ich Tim",
              "Ich gratuliere Tim zu seinem Geburtstag"
            ]
          },
          { t: "listen", it: "Herzlichen Glückwunsch zum Geburtstag, Anna! Ich gratuliere dir und schenke dir ein Buch." },
          { t: "speak", it: "Ich gratuliere meiner Schwester zum Geburtstag und schenke ihr ein Buch." }
        ]
      },
      {
        id: "a2-u07-l2",
        tags: ["g-infinitiv-zu"],
        cefr: "A2",
        titleIt: "Hast du Lust, mitzukommen?",
        grammar: {
          examples: [
            { it: "Hast du Lust, mitzukommen?" },
            { it: "Hast du Lust, am Samstag zu meiner Party zu kommen?" },
            { it: "Ich habe Lust, ins Kino zu gehen." },
            { it: "Ich habe keine Zeit, am Samstag zu kommen." },
            { it: "Es ist schön, Freunde einzuladen." },
            { it: "Danke für die Einladung! Ich komme gern." }
          ]
        },
        vocab: [
          { it: "die Einladung", plural: "die Einladungen", ex: "Danke für die Einladung!" },
          { it: "einladen", ex: "Ich lade dich zu meiner Party ein." },
          { it: "die Lust", plural: "-", ex: "Hast du Lust, mitzukommen?" },
          { it: "mitkommen", ex: "Kommst du mit?" },
          { it: "absagen", ex: "Leider muss ich die Party absagen." },
          { it: "zusagen", ex: "Ich sage gern zu." },
          { it: "die Idee", plural: "die Ideen", ex: "Das ist eine gute Idee." },
          { it: "der Gast", plural: "die Gäste", ex: "Wir haben heute viele Gäste." },
          { it: "der Besuch", plural: "die Besuche", ex: "Am Sonntag haben wir Besuch." },
          { it: "die Überraschung", plural: "die Überraschungen", ex: "Die Party ist eine Überraschung." },
          { it: "vorbeikommen", ex: "Hast du Lust, vorbeizukommen?" },
          { it: "die Zeit", plural: "die Zeiten", ex: "Ich habe am Samstag keine Zeit." }
        ],
        exercises: [
          { t: "mcq", a: 0 },
          { t: "fill", a: ["zu"] },
          { t: "fill", a: ["Lust"] },
          {
            t: "match",
            pairs: [{ it: "einladen" }, { it: "absagen" }, { it: "zusagen" }, { it: "Überraschung" }]
          },
          {
            t: "order",
            tokens: ["Hast", "du", "Lust,", "uns", "zu", "besuchen"],
            a: ["Hast du Lust, uns zu besuchen"]
          },
          {
            t: "trans",
            dir: "toIt",
            a: ["Hast du Lust, ins Kino zu gehen", "Hast du Lust, in das Kino zu gehen"]
          },
          {
            t: "cloze",
            text: "Danke für die {{1}}! Ich habe Lust, zu eurer Party {{2}} kommen.",
            gaps: [["Einladung"], ["zu"]]
          },
          {
            t: "dialogue",
            lines: [
              { sp: "A", it: "Hallo! Am Samstag ist meine Party. Hast du Lust, zu kommen?" },
              {
                sp: "TY",
                choices: [
                  "Danke für die Einladung! Ich komme gern.",
                  "Danke für die Einladung! Ich gern komme.",
                  "Danke für die Einladung! Ich kommen gern."
                ],
                a: 0
              },
              { sp: "A", it: "Super! Kannst du einen Kuchen mitbringen?" },
              {
                sp: "TY",
                choices: [
                  "Ja, gern. Ich habe Lust, einen Kuchen backen zu.",
                  "Ja, gern. Ich habe Lust, einen Kuchen zu backen.",
                  "Ja, gern. Ich habe Lust, einen Kuchen zu backt."
                ],
                a: 1
              }
            ]
          },
          {
            t: "listen",
            it: "Hast du Lust, am Samstag zu meiner Party zu kommen? Ich habe leider keine Zeit, aber danke für die Einladung!"
          },
          { t: "speak", it: "Hast du Lust, mit mir ins Kino zu gehen?" }
        ]
      },
      {
        id: "a2-u07-l3",
        tags: ["g-register"],
        cefr: "A2",
        titleIt: "Deutschland, Österreich, Schweiz",
        grammar: {
          examples: [
            { it: "In Süddeutschland und in Österreich sagt man oft Grüß Gott." },
            { it: "In der Schweiz sagt man oft Grüezi." },
            { it: "Unter Freunden sagt man auch Hallo." },
            { it: "In Österreich sagt man oft Servus." },
            { it: "In vielen Familien feiert man Weihnachten am 24. Dezember." },
            { it: "Im Büro siezt man oft, unter Freunden duzt man sich." }
          ]
        },
        vocab: [
          { it: "der Brauch", plural: "die Bräuche", ex: "Das ist ein alter Brauch." },
          { it: "die Tradition", plural: "die Traditionen", ex: "In meiner Familie gibt es viele Traditionen." },
          { it: "das Land", plural: "die Länder", ex: "Deutschland ist ein großes Land." },
          { it: "die Region", plural: "die Regionen", ex: "In dieser Region feiert man gern." },
          { it: "der Feiertag", plural: "die Feiertage", ex: "Weihnachten ist ein Feiertag." },
          { it: "der Weihnachtsmarkt", plural: "die Weihnachtsmärkte", ex: "Der Weihnachtsmarkt ist im Dezember." },
          { it: "die Begrüßung", plural: "die Begrüßungen", ex: "Die Begrüßung ist freundlich." },
          { it: "begrüßen", ex: "Wir begrüßen die Gäste." },
          { it: "typisch", ex: "Das ist typisch für diese Region." },
          { it: "verschieden", ex: "Die Bräuche sind oft verschieden." },
          { it: "der Unterschied", plural: "die Unterschiede", ex: "Es gibt viele Unterschiede." },
          { it: "Silvester", ex: "An Silvester feiern viele Leute mit Freunden." }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "mcq", a: 0 },
          { t: "mcq", a: 2 },
          { t: "fill", a: ["Gott"] },
          {
            t: "match",
            pairs: [{ it: "Brauch" }, { it: "Feiertag" }, { it: "Weihnachtsmarkt" }, { it: "Unterschied" }]
          },
          {
            t: "order",
            tokens: ["In", "Österreich", "sagt", "man", "oft", "Servus"],
            a: [
              "In Österreich sagt man oft Servus",
              "Man sagt in Österreich oft Servus",
              "Oft sagt man in Österreich Servus",
              "Man sagt oft in Österreich Servus",
              "Servus sagt man in Österreich oft"
            ]
          },
          {
            t: "trans",
            dir: "toIt",
            a: [
              "Bei uns sagt man oft Hallo",
              "Man sagt bei uns oft Hallo",
              "Oft sagt man bei uns Hallo",
              "Man sagt oft bei uns Hallo",
              "Hallo sagt man bei uns oft"
            ]
          },
          {
            t: "cloze",
            text: "In der {{1}} sagt man oft Grüezi. In {{2}} sagt man oft Servus.",
            gaps: [["Schweiz"], ["Österreich"]]
          },
          {
            t: "listen",
            it: "In Süddeutschland und in Österreich sagt man oft Grüß Gott. In der Schweiz sagt man oft Grüezi. Unter Freunden sagt man auch Hallo."
          },
          { t: "speak", it: "Die Bräuche sind oft von Region zu Region verschieden." }
        ]
      },
      {
        id: "a2-u07-l4",
        tags: ["g-adverbien"],
        cefr: "A2",
        titleIt: "normalerweise, langsam",
        grammar: {
          examples: [
            { it: "Normalerweise feiere ich meinen Geburtstag mit Freunden." },
            { it: "Leider habe ich am Samstag keine Zeit." },
            { it: "Hoffentlich kommst du zur Party." },
            { it: "Anna tanzt langsam und schön." },
            { it: "Wir singen laut." },
            { it: "Vielleicht kommt Tim später." }
          ]
        },
        vocab: [
          { it: "normalerweise", ex: "Normalerweise esse ich um zwölf Uhr." },
          { it: "leider", ex: "Leider habe ich keine Zeit." },
          { it: "hoffentlich", ex: "Hoffentlich kommst du zur Party." },
          { it: "vielleicht", ex: "Vielleicht komme ich später." },
          { it: "langsam", ex: "Er spricht langsam." },
          { it: "schnell", ex: "Sie fährt schnell." },
          { it: "laut", ex: "Die Kinder singen laut." },
          { it: "leise", ex: "Bitte sprechen Sie leise." },
          { it: "deutlich", ex: "Sie spricht deutlich." },
          { it: "später", ex: "Wir feiern später." },
          { it: "besonders", ex: "Der Kuchen ist besonders gut." },
          { it: "natürlich", ex: "Natürlich komme ich zur Party." }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "mcq", a: 2 },
          { t: "fill", a: ["Normalerweise"] },
          { t: "fill", a: ["Leider"] },
          { t: "fill", a: ["laut"] },
          {
            t: "match",
            pairs: [{ it: "normalerweise" }, { it: "leider" }, { it: "hoffentlich" }, { it: "vielleicht" }]
          },
          {
            t: "trans",
            dir: "toIt",
            a: ["Leider habe ich keine Zeit", "Ich habe leider keine Zeit"]
          },
          {
            t: "cloze",
            text: "Er spricht {{1}}, und ich verstehe ihn gut. {{2}} kommst du zur Party!",
            gaps: [["langsam"], ["Hoffentlich"]]
          },
          {
            t: "listen",
            it: "Normalerweise feiere ich meinen Geburtstag zu Hause. Leider habe ich am Samstag keine Zeit, aber vielleicht feiern wir später."
          },
          { t: "speak", it: "Hoffentlich kommst du zur Party. Vielleicht feiern wir später." }
        ]
      }
    ],
    test: {
      id: "a2-u07-test",
      tags: ["g-infinitiv-zu", "g-adverbien", "g-verben-dativ"],
      cefr: "A2",
      titleIt: "Test: Feste und Bräuche",
      exercises: [
        { t: "fill", a: ["euch"] },
        { t: "fill", a: ["am"] },
        { t: "fill", a: ["zu"] },
        { t: "fill", a: ["Hoffentlich"] },
        { t: "mcq", a: 0 },
        { t: "mcq", a: 1 },
        { t: "mcq", a: 2 },
        {
          t: "match",
          pairs: [{ it: "gratulieren" }, { it: "Geschenk" }, { it: "Einladung" }, { it: "Brauch" }]
        },
        { t: "listen", it: "Herzlichen Glückwunsch zum Geburtstag! Hast du Lust, am Samstag zu meiner Party zu kommen?" },
        { t: "speak", it: "Ich gratuliere dir zum Geburtstag. Hast du Lust, mit uns zu feiern?" }
      ]
    }
  },
  {
    id: "a2-u08",
    icon: "🧭",
    titleIt: "Pläne",
    lessons: [
      {
        id: "a2-u08-l1",
        tags: ["g-infinitiv-zu", "g-futur"],
        cefr: "A2",
        titleIt: "Ich habe vor, ... zu ...",
        grammar: {
          examples: [
            { it: "Ich habe vor, im Sommer umzuziehen." },
            { it: "Hast du vor, nach dem Studium in Wien zu arbeiten?" },
            { it: "Wir haben vor, eine Wohnung zu suchen." },
            { it: "Was hast du morgen vor?" },
            { it: "Nächstes Jahr ziehe ich nach Berlin." },
            { it: "Ich werde im Herbst Informatik studieren." }
          ]
        },
        vocab: [
          { it: "der Plan", plural: "die Pläne", ex: "Mein Plan ist einfach." },
          { it: "vorhaben", ex: "Ich habe vor, im Sommer umzuziehen." },
          { it: "planen", ex: "Wir planen einen Umzug." },
          { it: "der Umzug", plural: "die Umzüge", ex: "Der Umzug ist im Juli." },
          { it: "umziehen", ex: "Ich ziehe im Sommer um." },
          { it: "das Studium", plural: "-", ex: "Nach dem Studium suche ich eine Stelle." },
          { it: "studieren", ex: "Ich möchte in Wien studieren." },
          { it: "die Stelle", plural: "die Stellen", ex: "Ich suche eine neue Stelle." },
          { it: "der Job", plural: "die Jobs", ex: "Mein Job gefällt mir." },
          { it: "kündigen", ex: "Ich habe vor, meine Wohnung zu kündigen." },
          { it: "die Prüfung", plural: "die Prüfungen", ex: "Die Prüfung ist im Mai." },
          { it: "die Ausbildung", plural: "die Ausbildungen", ex: "Sie macht eine Ausbildung." }
        ],
        exercises: [
          { t: "conj", verb: "vorhaben", tense: "praes", persons: [0, 1, 2, 3, 4, 5] },
          { t: "mcq", a: 0 },
          { t: "fill", a: ["zu"] },
          { t: "fill", a: ["werden"] },
          { t: "fill", a: ["vor"] },
          {
            t: "cloze",
            text: "Ich {{1}} vor, im Sommer meine Wohnung {{2}} kündigen.",
            gaps: [["habe"], ["zu"]]
          },
          {
            t: "order",
            tokens: ["Ich", "habe", "vor,", "im", "Sommer", "umzuziehen"],
            a: [
              "Ich habe vor, im Sommer umzuziehen",
              "Im Sommer habe ich vor, umzuziehen",
              "Ich habe im Sommer vor, umzuziehen"
            ]
          },
          {
            t: "trans",
            dir: "toIt",
            a: [
              "Ich habe vor, im Sommer nach Wien umzuziehen",
              "Im Sommer habe ich vor, nach Wien umzuziehen",
              "Ich habe im Sommer vor, nach Wien umzuziehen",
              "Ich habe vor, im Sommer nach Wien zu ziehen",
              "Im Sommer habe ich vor, nach Wien zu ziehen",
              "Ich habe im Sommer vor, nach Wien zu ziehen"
            ]
          },
          { t: "listen", it: "Ich habe vor, im Sommer nach Wien umzuziehen. Dort werde ich Informatik studieren." },
          { t: "speak", it: "Nach dem Studium habe ich vor, in Berlin zu arbeiten." }
        ]
      },
      {
        id: "a2-u08-l2",
        tags: ["g-perfekt", "g-praeteritum", "g-futur", "g-konjunktiv2"],
        cefr: "A2",
        titleIt: "Ripasso: i tempi",
        grammar: {
          examples: [
            { it: "Gestern habe ich den ganzen Tag gearbeitet." },
            { it: "Letztes Jahr sind wir nach Wien umgezogen." },
            { it: "Als Kind war ich oft krank, und wir hatten keinen Hund." },
            { it: "Nächste Woche fahre ich nach Hamburg." },
            { it: "Morgen werde ich dich anrufen." },
            { it: "Könnten Sie mir bitte helfen? Ich hätte gern mehr Zeit." }
          ]
        },
        vocab: [
          { it: "der Lebenslauf", plural: "die Lebensläufe", ex: "Mein Lebenslauf ist kurz." },
          { it: "die Erfahrung", plural: "die Erfahrungen", ex: "Ich habe viel Erfahrung." },
          { it: "das Praktikum", plural: "die Praktika", ex: "Ich habe ein Praktikum gemacht." },
          { it: "die Bewerbung", plural: "die Bewerbungen", ex: "Ich schreibe eine Bewerbung." },
          { it: "der Chef", plural: "die Chefs", ex: "Der Chef ist heute nicht im Büro." },
          { it: "der Kollege", plural: "die Kollegen", ex: "Meine Kollegen sind nett." },
          { it: "das Gehalt", plural: "die Gehälter", ex: "Das Gehalt ist gut." },
          { it: "der Kurs", plural: "die Kurse", ex: "Ich habe einen Kurs besucht." }
        ],
        exercises: [
          { t: "conj", verb: "umziehen", tense: "perf", persons: [0, 1, 2, 3, 4, 5] },
          { t: "conj", verb: "arbeiten", tense: "praet", persons: [0, 1, 2, 3, 4, 5] },
          { t: "conj", verb: "können", tense: "konj2", persons: [0, 1, 2, 3, 4, 5] },
          { t: "mcq", a: 1 },
          { t: "mcq", a: 0 },
          {
            t: "cloze",
            text: "Letztes Jahr {{1}} wir nach Wien {{2}}.",
            gaps: [["sind"], ["umgezogen"]]
          },
          {
            t: "cloze",
            text: "Als Kind {{1}} ich oft krank, und wir {{2}} keinen Hund.",
            gaps: [["war"], ["hatten"]]
          },
          {
            t: "cloze",
            text: "Morgen {{1}} ich dich anrufen. Ich {{2}} gern mehr Zeit.",
            gaps: [["werde"], ["hätte"]]
          },
          {
            t: "trans",
            dir: "toIt",
            a: ["Gestern habe ich den ganzen Tag gearbeitet", "Ich habe gestern den ganzen Tag gearbeitet"]
          },
          {
            t: "listen",
            it: "Letztes Jahr bin ich nach Wien umgezogen. Jetzt arbeite ich dort, und nächstes Jahr werde ich einen Kurs besuchen. Ich hätte gern mehr Zeit."
          },
          { t: "speak", it: "Letztes Jahr bin ich umgezogen, und im Herbst werde ich studieren." }
        ]
      },
      {
        id: "a2-u08-l3",
        tags: ["g-pron-akk", "g-pron-dat", "g-artikel-dat"],
        cefr: "A2",
        titleIt: "Ripasso: casi e pronomi",
        grammar: {
          examples: [
            { it: "Ich sehe ihn jeden Tag im Büro." },
            { it: "Ich helfe ihm beim Umzug." },
            { it: "Der Schlüssel gehört dem Vermieter." },
            { it: "Ich schenke meiner Mutter Blumen." },
            { it: "Ich gebe es ihm." },
            { it: "Wir danken den Nachbarn für die Hilfe." }
          ]
        },
        vocab: [
          { it: "der Vermieter", plural: "die Vermieter", ex: "Der Vermieter wohnt im Haus." },
          { it: "der Nachbar", plural: "die Nachbarn", ex: "Mein Nachbar ist sehr nett." },
          { it: "die Miete", plural: "die Mieten", ex: "Die Miete ist hoch." },
          { it: "der Mietvertrag", plural: "die Mietverträge", ex: "Ich unterschreibe den Mietvertrag." },
          { it: "der Schlüssel", plural: "die Schlüssel", ex: "Wo ist der Schlüssel?" },
          { it: "der Karton", plural: "die Kartons", ex: "Wir brauchen zehn Kartons." },
          { it: "die Adresse", plural: "die Adressen", ex: "Das ist meine neue Adresse." },
          { it: "das Möbelstück", plural: "die Möbelstücke", ex: "Das Möbelstück ist schwer." }
        ],
        exercises: [
          { t: "mcq", a: 0 },
          { t: "mcq", a: 1 },
          { t: "multi", a: [0, 2, 4] },
          { t: "fill", a: ["der"] },
          { t: "fill", a: ["dem"] },
          { t: "fill", a: ["ihn"] },
          { t: "fill", a: ["ihnen"] },
          {
            t: "cloze",
            text: "Wo ist der Karton? Ich suche {{1}} schon lange. Kannst du {{2}} helfen?",
            gaps: [["ihn"], ["mir"]]
          },
          {
            t: "listen",
            it: "Ich helfe meiner Freundin beim Umzug. Sie schenkt mir einen Kuchen, und ich danke ihr."
          },
          { t: "speak", it: "Ich gebe ihm den Schlüssel, und er hilft mir beim Umzug." }
        ]
      },
      {
        id: "a2-u08-l4",
        tags: ["g-nebensatz-weil", "g-nebensatz-dass", "g-nebensatz-temporal"],
        cefr: "A2",
        titleIt: "Pronti per il B1",
        grammar: {
          examples: [
            { it: "Ich bleibe zu Hause, weil ich arbeiten muss." },
            { it: "Weil ich krank bin, bleibe ich zu Hause." },
            { it: "Ich hoffe, dass ich bald eine Stelle finde." },
            { it: "Als ich in Wien angekommen bin, habe ich dich angerufen." },
            { it: "Wenn ich Zeit habe, lerne ich Deutsch." },
            { it: "Ich weiß, dass er morgen nicht kommen kann." }
          ]
        },
        vocab: [
          { it: "die Zukunft", plural: "-", ex: "Die Zukunft ist offen." },
          { it: "der Traum", plural: "die Träume", ex: "Mein Traum ist ein Haus am Meer." },
          { it: "das Ziel", plural: "die Ziele", ex: "Mein Ziel ist eine gute Stelle." },
          { it: "die Möglichkeit", plural: "die Möglichkeiten", ex: "Wir haben zwei Möglichkeiten." },
          { it: "die Entscheidung", plural: "die Entscheidungen", ex: "Das ist eine wichtige Entscheidung." },
          { it: "hoffen", ex: "Ich hoffe, dass es klappt." },
          { it: "wichtig", ex: "Deutsch ist für meine Arbeit wichtig." },
          { it: "sicher", ex: "Ich bin nicht sicher." }
        ],
        exercises: [
          { t: "conj", verb: "wollen", tense: "praes", persons: [0, 1, 2, 3, 4, 5] },
          { t: "conj", verb: "müssen", tense: "praet", persons: [0, 1, 2, 3, 4, 5] },
          { t: "conj", verb: "bleiben", tense: "perf", persons: [0, 1, 2, 3, 4, 5] },
          { t: "fill", a: ["weil"] },
          { t: "fill", a: ["dass"] },
          { t: "fill", a: ["Als"] },
          { t: "fill", a: ["Wenn"] },
          { t: "fill", a: ["kann"] },
          {
            t: "cloze",
            text: "Ich bleibe zu Hause, {{1}} ich krank {{2}}.",
            gaps: [["weil"], ["bin"]]
          },
          {
            t: "trans",
            dir: "toIt",
            a: [
              "Ich bleibe zu Hause, weil ich arbeiten muss",
              "Ich bleibe daheim, weil ich arbeiten muss",
              "Weil ich arbeiten muss, bleibe ich zu Hause",
              "Weil ich arbeiten muss, bleibe ich daheim"
            ]
          },
          {
            t: "listen",
            it: "Ich hoffe, dass ich im Herbst eine Stelle finde. Wenn ich Zeit habe, lerne ich Deutsch, weil es für meine Arbeit wichtig ist."
          },
          { t: "speak", it: "Ich weiß, dass ich viel lernen muss, weil die Prüfung schwer ist." }
        ]
      }
    ],
    test: {
      id: "a2-u08-test",
      tags: ["g-perfekt", "g-praeteritum", "g-pron-dat", "g-konjunktiv2", "g-nebensatz-weil"],
      cefr: "A2",
      titleIt: "Test: Pläne",
      exercises: [
        { t: "conj", verb: "gehen", tense: "perf", persons: [0, 1, 2, 3, 4, 5] },
        { t: "conj", verb: "haben", tense: "konj2", persons: [0, 1, 2, 3, 4, 5] },
        { t: "fill", a: ["zu"] },
        { t: "fill", a: ["war"] },
        { t: "fill", a: ["ihm"] },
        { t: "fill", a: ["weil"] },
        { t: "fill", a: ["hätte"] },
        { t: "fill", a: ["angekommen"] },
        { t: "mcq", a: 0 },
        {
          t: "cloze",
          text: "Wenn ich in Wien {{1}} {{2}}, rufe ich dich an.",
          gaps: [["angekommen"], ["bin"]]
        },
        {
          t: "trans",
          dir: "toIt",
          a: [
            "Ich habe ihm den Schlüssel gegeben",
            "Den Schlüssel habe ich ihm gegeben",
            "Ihm habe ich den Schlüssel gegeben"
          ]
        },
        { t: "speak", it: "Ich habe vor, umzuziehen, weil ich eine neue Stelle habe." }
      ]
    }
  }
]);
