/* ============================================================
   Language-neutral layer: German (de-DE), structure and answer keys.
   Learner-language texts live in data/i18n/<lang>/a2-02.js.
   a2-u05 is a German unit.
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
  }
]);
