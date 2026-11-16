/* ============================================================
   Language-neutral layer: German (de-DE), structure and answer keys.
   Learner-language texts live in data/i18n/<lang>/a2-02.js.
   a2-u05 and a2-u06 are German units.
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
              "Um acht Uhr beginnt man bei uns"
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
            gaps: [["muss"], ["darf", "kann"]]
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
            a: ["Danach schreibt Anna das Protokoll", "Anna schreibt danach das Protokoll"]
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
  }
]);
