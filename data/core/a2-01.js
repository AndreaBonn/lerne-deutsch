/* ============================================================
   Language-neutral layer: German (de-DE), structure and answer keys.
   Learner-language texts live in data/i18n/<lang>/a2-01.js.
   a2-u01 is a German unit.
   ============================================================ */
LINGUAI.addUnits("A2", [
  {
    id: "a2-u01",
    icon: "⏳",
    titleIt: "Früher und heute",
    lessons: [
      {
        id: "a2-u01-l1",
        tags: ["g-praeteritum"],
        cefr: "A2",
        titleIt: "Als Kind war ich ...",
        grammar: {
          examples: [
            { it: "Als Kind war ich oft krank." },
            { it: "Wir hatten einen großen Garten." },
            { it: "Mein Opa hatte einen Hund." },
            { it: "Früher waren wir jeden Sommer am Meer." },
            { it: "Damals hatte ich kein Handy." },
            { it: "Wie war deine Kindheit?" }
          ]
        },
        vocab: [
          { it: "die Kindheit", plural: "-", ex: "Meine Kindheit war schön." },
          { it: "der Kindergarten", plural: "die Kindergärten", ex: "Im Kindergarten hatte ich viele Freunde." },
          { it: "die Grundschule", plural: "die Grundschulen", ex: "Die Grundschule war klein." },
          { it: "der Lehrer", plural: "die Lehrer", ex: "Unser Lehrer war sehr nett." },
          { it: "die Lehrerin", plural: "die Lehrerinnen", ex: "Meine Lehrerin hatte einen Hund." },
          { it: "das Dorf", plural: "die Dörfer", ex: "Das Dorf war klein." },
          { it: "die Stadt", plural: "die Städte", ex: "Die Stadt war groß und laut." },
          { it: "der Garten", plural: "die Gärten", ex: "Wir hatten einen Garten." },
          { it: "der Hund", plural: "die Hunde", ex: "Mein Hund war klein." },
          { it: "das Fahrrad", plural: "die Fahrräder", ex: "Ich hatte ein rotes Fahrrad." },
          { it: "früher", ex: "Früher war ich oft krank." },
          { it: "damals", ex: "Damals hatten wir kein Internet." }
        ],
        exercises: [
          { t: "conj", verb: "sein", tense: "praet", persons: [0, 1, 2, 3, 4, 5] },
          { t: "conj", verb: "haben", tense: "praet", persons: [0, 1, 2, 3, 4, 5] },
          { t: "conj", verb: "können", tense: "praet", persons: [0, 1, 2, 3, 4, 5] },
          { t: "mcq", a: 1 },
          { t: "fill", a: ["hatten"] },
          { t: "fill", a: ["war"] },
          {
            t: "cloze",
            text: "Früher {{1}} wir ein Haus im Dorf. Es {{2}} klein, aber meine Großeltern {{3}} einen Garten.",
            gaps: [["hatten"], ["war"], ["hatten"]]
          },
          {
            t: "trans",
            dir: "toIt",
            a: [
              "Als Kind war ich oft krank",
              "Ich war als Kind oft krank",
              "Als Kind war ich häufig krank"
            ]
          },
          { t: "listen", it: "Als Kind hatte ich einen Hund, und er war sehr lieb." },
          { t: "speak", it: "Früher waren wir jeden Sommer am Meer, und wir hatten viel Spaß." }
        ]
      },
      {
        id: "a2-u01-l2",
        tags: ["g-nebensatz-temporal", "g-perfekt"],
        cefr: "A2",
        titleIt: "Als ich klein war, ...",
        grammar: {
          examples: [
            { it: "Als ich klein war, haben wir in einem Dorf gewohnt." },
            { it: "Als wir in Wien gewohnt haben, bin ich oft Fahrrad gefahren." },
            { it: "Als ich zehn Jahre alt war, sind wir nach Berlin umgezogen." },
            { it: "Immer wenn es geschneit hat, sind wir Schlitten gefahren." },
            { it: "Jedes Mal, wenn meine Oma uns besucht hat, hat sie Kuchen gemacht." },
            { it: "Wenn ich müde bin, gehe ich früh ins Bett." }
          ]
        },
        vocab: [
          { it: "der Umzug", plural: "die Umzüge", ex: "Der Umzug war anstrengend." },
          { it: "die Ferien", plural: "die Ferien", ex: "In den Ferien waren wir bei meiner Oma." },
          { it: "der Sommer", plural: "die Sommer", ex: "Im Sommer waren wir am See." },
          { it: "der Winter", plural: "die Winter", ex: "Im Winter war es sehr kalt." },
          { it: "der Schnee", plural: "-", ex: "Im Winter lag viel Schnee." },
          { it: "der Schlitten", plural: "die Schlitten", ex: "Wir hatten einen roten Schlitten." },
          { it: "die Oma", plural: "die Omas", ex: "Meine Oma hat oft Kuchen gemacht." },
          { it: "der Opa", plural: "die Opas", ex: "Mein Opa hat im Garten gearbeitet." },
          { it: "der Nachbar", plural: "die Nachbarn", ex: "Unser Nachbar hatte drei Katzen." },
          { it: "immer", ex: "Immer wenn es regnet, bleibe ich zu Hause." },
          { it: "oft", ex: "Wir sind oft am Wochenende gewandert." },
          { it: "jedes Mal", ex: "Jedes Mal hat sie gelacht." }
        ],
        exercises: [
          { t: "mcq", a: 0 },
          { t: "mcq", a: 1 },
          { t: "mcq", a: 1 },
          { t: "multi", a: [0, 1, 3] },
          {
            t: "cloze",
            text: "{{1}} ich klein war, haben wir in einem Dorf {{2}}.",
            gaps: [["Als"], ["gewohnt", "gelebt"]]
          },
          {
            t: "cloze",
            text: "Immer {{1}} es im Winter geschneit hat, {{2}} wir Schlitten gefahren.",
            gaps: [["wenn"], ["sind"]]
          },
          {
            t: "cloze",
            text: "Als wir in Wien {{1}} {{2}}, bin ich oft Fahrrad gefahren.",
            gaps: [["gewohnt", "gelebt"], ["haben"]]
          },
          {
            t: "trans",
            dir: "toIt",
            a: [
              "Als ich zehn Jahre alt war, sind wir nach Berlin umgezogen",
              "Als ich zehn war, sind wir nach Berlin umgezogen"
            ]
          },
          { t: "listen", it: "Als ich zehn war, sind wir nach Berlin umgezogen, und ich hatte dort keine Freunde." },
          { t: "speak", it: "Immer wenn es geschneit hat, sind wir Schlitten gefahren." }
        ]
      },
      {
        id: "a2-u01-l3",
        tags: ["g-praeteritum", "g-nebensatz-weil"],
        cefr: "A2",
        titleIt: "Ich musste, ich durfte, weil ...",
        grammar: {
          examples: [
            { it: "Ich musste jeden Tag Hausaufgaben machen." },
            { it: "Wir durften nicht lange fernsehen." },
            { it: "Ich wollte einen Hund haben, aber meine Eltern wollten das nicht." },
            { it: "Ich war traurig, weil ich nicht ins Kino gehen durfte." },
            { it: "Ich konnte nicht kommen, weil ich arbeiten musste." },
            { it: "Wir konnten im Garten spielen, weil das Wetter schön war." }
          ]
        },
        vocab: [
          { it: "die Hausaufgabe", plural: "die Hausaufgaben", ex: "Ich musste die Hausaufgaben machen." },
          { it: "die Regel", plural: "die Regeln", ex: "Zu Hause gab es viele Regeln." },
          { it: "der Fernseher", plural: "die Fernseher", ex: "Der Fernseher war im Wohnzimmer." },
          { it: "das Taschengeld", plural: "-", ex: "Ich bekam zehn Euro Taschengeld." },
          { it: "die Süßigkeiten", plural: "die Süßigkeiten", ex: "Ich durfte keine Süßigkeiten essen." },
          { it: "das Handy", plural: "die Handys", ex: "Damals hatte ich kein Handy." },
          { it: "der Geburtstag", plural: "die Geburtstage", ex: "An meinem Geburtstag durfte ich länger aufbleiben." },
          { it: "das Haustier", plural: "die Haustiere", ex: "Ich wollte ein Haustier haben." },
          { it: "die Strafe", plural: "die Strafen", ex: "Die Strafe war nicht schlimm." },
          { it: "streng", ex: "Meine Eltern waren streng." },
          { it: "erlaubt", ex: "Fernsehen war nicht erlaubt." },
          { it: "verboten", ex: "Das war verboten." }
        ],
        exercises: [
          { t: "mcq", a: 2 },
          { t: "fill", a: ["musste"] },
          { t: "fill", a: ["durften"] },
          { t: "fill", a: ["weil"] },
          {
            t: "match",
            pairs: [{ it: "ich musste" }, { it: "ich konnte" }, { it: "ich wollte" }, { it: "ich durfte" }]
          },
          {
            t: "order",
            tokens: ["Ich", "konnte", "nicht", "kommen,", "weil", "ich", "arbeiten", "musste"],
            a: ["Ich konnte nicht kommen, weil ich arbeiten musste"]
          },
          {
            t: "cloze",
            text: "Ich war müde, {{1}} ich früh {{2}} {{3}}.",
            gaps: [["weil"], ["aufstehen"], ["musste"]]
          },
          {
            t: "trans",
            dir: "toIt",
            a: [
              "Ich konnte nicht spielen, weil ich Hausaufgaben machen musste",
              "Ich konnte nicht spielen, weil ich meine Hausaufgaben machen musste",
              "Ich konnte nicht spielen, weil ich die Hausaufgaben machen musste",
              "Ich durfte nicht spielen, weil ich Hausaufgaben machen musste",
              "Ich durfte nicht spielen, weil ich meine Hausaufgaben machen musste",
              "Ich durfte nicht spielen, weil ich die Hausaufgaben machen musste"
            ]
          },
          { t: "listen", it: "Ich durfte nicht lange fernsehen, weil ich früh ins Bett gehen musste." },
          { t: "speak", it: "Als Kind durfte ich keine Süßigkeiten essen, weil meine Eltern streng waren." }
        ]
      },
      {
        id: "a2-u01-l4",
        tags: ["g-reflexivverben"],
        cefr: "A2",
        titleIt: "Erinnerst du dich?",
        grammar: {
          examples: [
            { it: "Erinnerst du dich an unsere Schule?" },
            { it: "Ich erinnere mich gut an meine Lehrerin." },
            { it: "Wir haben uns am Bahnhof getroffen." },
            { it: "Er freut sich auf die Ferien." },
            { it: "Sie ärgert sich über das Wetter." },
            { it: "Ich interessiere mich für alte Fotos." }
          ]
        },
        vocab: [
          { it: "sich erinnern (an)", ex: "Ich erinnere mich an meine Kindheit." },
          { it: "sich freuen (auf, über)", ex: "Wir freuen uns auf das Klassentreffen." },
          { it: "sich ärgern (über)", ex: "Er ärgert sich über den Regen." },
          { it: "sich treffen (mit)", ex: "Ich treffe mich mit meiner Freundin." },
          { it: "sich interessieren (für)", ex: "Ich interessiere mich für Musik." },
          { it: "sich setzen", ex: "Bitte setzen Sie sich." },
          { it: "die Erinnerung", plural: "die Erinnerungen", ex: "Das ist eine schöne Erinnerung." },
          { it: "das Foto", plural: "die Fotos", ex: "Auf dem Foto bin ich fünf Jahre alt." },
          { it: "das Album", plural: "die Alben", ex: "Das Album ist von meiner Oma." },
          { it: "das Klassentreffen", plural: "die Klassentreffen", ex: "Am Samstag ist das Klassentreffen." },
          { it: "der Klassenkamerad", plural: "die Klassenkameraden", ex: "Mein Klassenkamerad wohnt jetzt in Wien." },
          { it: "der Spaß", plural: "-", ex: "Wir hatten viel Spaß." }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "fill", a: ["dich"] },
          { t: "fill", a: ["uns"] },
          {
            t: "match",
            pairs: [
              { it: "sich erinnern" },
              { it: "sich freuen" },
              { it: "sich ärgern" },
              { it: "sich interessieren" }
            ]
          },
          {
            t: "order",
            tokens: ["Ich", "erinnere", "mich", "gut", "an", "meine", "Lehrerin"],
            a: ["Ich erinnere mich gut an meine Lehrerin"]
          },
          {
            t: "cloze",
            text: "Gestern habe ich {{1}} mit Anna {{2}}, und wir haben {{3}} an die Schule erinnert.",
            gaps: [["mich"], ["getroffen"], ["uns"]]
          },
          {
            t: "trans",
            dir: "toIt",
            a: ["Ich erinnere mich gut an meine Schule", "An meine Schule erinnere ich mich gut"]
          },
          {
            t: "dialogue",
            lines: [
              { sp: "A", it: "Hallo Lena! Erinnerst du dich an mich?" },
              {
                sp: "TY",
                choices: [
                  "Ja, ich erinnere dich an mich!",
                  "Ja, ich erinnere mich an dich!",
                  "Ja, ich erinnere mir an dich!"
                ],
                a: 1
              },
              { sp: "A", it: "Wir waren zusammen in der Grundschule." },
              {
                sp: "TY",
                choices: [
                  "Ja, und wir haben treffen uns oft nach der Schule.",
                  "Ja, und wir uns haben oft nach der Schule getroffen.",
                  "Ja, und wir haben uns oft nach der Schule getroffen."
                ],
                a: 2
              },
              { sp: "A", it: "Freust du dich auf das Klassentreffen?" },
              {
                sp: "TY",
                choices: [
                  "Ja, ich mich freue sehr!",
                  "Ja, ich freue mich sehr!",
                  "Ja, ich freue sich sehr!"
                ],
                a: 1
              }
            ]
          },
          { t: "listen", it: "Wir haben uns oft nach der Schule getroffen, und ich erinnere mich gern an diese Zeit." },
          { t: "speak", it: "Ich erinnere mich gut an meine Grundschule, und ich freue mich auf das Klassentreffen." }
        ]
      }
    ],
    test: {
      id: "a2-u01-test",
      tags: ["g-praeteritum", "g-nebensatz-temporal", "g-nebensatz-weil"],
      cefr: "A2",
      titleIt: "Test: Früher und heute",
      exercises: [
        { t: "conj", verb: "sein", tense: "praet", persons: [0, 1, 2, 3, 4, 5] },
        { t: "conj", verb: "müssen", tense: "praet", persons: [0, 1, 2, 3, 4, 5] },
        { t: "fill", a: ["hatten"] },
        { t: "fill", a: ["als"] },
        { t: "fill", a: ["weil"] },
        { t: "mcq", a: 0 },
        {
          t: "cloze",
          text: "Als ich klein {{1}}, {{2}} ich einen Hund.",
          gaps: [["war"], ["hatte"]]
        },
        {
          t: "cloze",
          text: "Ich {{1}} nicht spielen, weil ich Hausaufgaben {{2}} {{3}}.",
          gaps: [["konnte", "durfte"], ["machen"], ["musste"]]
        },
        { t: "listen", it: "Als ich klein war, durfte ich nicht lange fernsehen, weil meine Eltern streng waren." },
        { t: "speak", it: "Als ich Kind war, hatte ich einen Hund, und ich konnte jeden Tag mit ihm spielen." }
      ]
    }
  },
  {
    id: "a2-u02",
    icon: "🚆",
    titleIt: "Unterwegs",
    lessons: [
      {
        id: "a2-u02-l1",
        tags: ["g-wechselpraep", "g-praep-dativ"],
        cefr: "A2",
        titleIt: "Am Bahnhof: nach Wien, in die Schweiz",
        grammar: {
          examples: [
            { it: "Ich fahre nach Wien." },
            { it: "Wir fliegen nach Italien." },
            { it: "Sie fahren im Sommer in die Schweiz." },
            { it: "Er fährt zu seiner Tante." },
            { it: "Wir fahren zum Bahnhof." },
            { it: "Meine Tante wohnt in der Schweiz." }
          ]
        },
        vocab: [
          { it: "der Bahnhof", plural: "die Bahnhöfe", ex: "Der Bahnhof ist nicht weit." },
          { it: "der Zug", plural: "die Züge", ex: "Der Zug nach Wien fährt um neun Uhr ab." },
          { it: "das Gleis", plural: "die Gleise", ex: "Der Zug fährt von Gleis vier ab." },
          { it: "die Fahrkarte", plural: "die Fahrkarten", ex: "Ich kaufe eine Fahrkarte nach Hamburg." },
          { it: "der Fahrplan", plural: "die Fahrpläne", ex: "Im Fahrplan steht die Abfahrt." },
          { it: "die Abfahrt", plural: "die Abfahrten", ex: "Die Abfahrt ist um zehn Uhr." },
          { it: "die Ankunft", plural: "die Ankünfte", ex: "Die Ankunft in Wien ist um zwölf Uhr." },
          { it: "die Schweiz", plural: "-", ex: "Wir fahren im Sommer in die Schweiz." },
          { it: "das Land", plural: "die Länder", ex: "Welches Land möchtest du besuchen?" },
          { it: "die Auskunft", plural: "die Auskünfte", ex: "Die Auskunft ist am Bahnhof." },
          { it: "einfach", ex: "Einmal einfach nach Wien, bitte." },
          { it: "hin und zurück", ex: "Eine Fahrkarte nach Berlin, hin und zurück, bitte." }
        ],
        exercises: [
          { t: "mcq", a: 0 },
          { t: "mcq", a: 1 },
          { t: "fill", a: ["nach"] },
          { t: "fill", a: ["zu"] },
          {
            t: "cloze",
            text: "Ich fahre {{1}} Wien. Dann fahren wir {{2}} die Schweiz, und am Abend gehe ich {{3}} meinem Freund.",
            gaps: [["nach"], ["in"], ["zu"]]
          },
          {
            t: "match",
            pairs: [{ it: "nach Wien" }, { it: "in die Schweiz" }, { it: "zu meiner Tante" }, { it: "zum Bahnhof" }]
          },
          {
            t: "trans",
            dir: "toIt",
            a: [
              "Morgen fahren wir in die Schweiz",
              "Wir fahren morgen in die Schweiz",
              "In die Schweiz fahren wir morgen",
              "Morgen reisen wir in die Schweiz",
              "Wir reisen morgen in die Schweiz",
              "In die Schweiz reisen wir morgen"
            ]
          },
          {
            t: "dialogue",
            lines: [
              { sp: "A", it: "Guten Tag. Wohin fahren Sie?" },
              {
                sp: "TY",
                choices: ["Ich fahre in Wien.", "Ich fahre zu Wien.", "Ich fahre nach Wien."],
                a: 2
              },
              { sp: "A", it: "Einfach oder hin und zurück?" },
              {
                sp: "TY",
                choices: ["Hin und zurück, bitte.", "Hin und her, bitte.", "Zurück und hin, bitte."],
                a: 0
              },
              { sp: "A", it: "Fahren Sie dann weiter?" },
              {
                sp: "TY",
                choices: [
                  "Ja, danach fahre ich nach meiner Tante.",
                  "Ja, danach fahre ich zu meiner Tante.",
                  "Ja, danach fahre ich bei meiner Tante."
                ],
                a: 1
              }
            ]
          },
          { t: "listen", it: "Guten Tag, ich möchte eine Fahrkarte nach Wien, hin und zurück, bitte." },
          { t: "speak", it: "Ich fahre im Sommer in die Schweiz und dann zu meiner Tante nach Wien." }
        ]
      },
      {
        id: "a2-u02-l2",
        tags: ["g-futur"],
        cefr: "A2",
        titleIt: "Morgen fahre ich, ich werde fahren",
        grammar: {
          examples: [
            { it: "Morgen fahre ich nach Wien." },
            { it: "Nächste Woche fliegen wir nach Spanien." },
            { it: "Ich werde dich morgen anrufen." },
            { it: "Es wird heute Abend regnen." },
            { it: "Wir werden im Sommer in die Schweiz fahren." },
            { it: "Ich werde dir ein Foto schicken." }
          ]
        },
        vocab: [
          { it: "die Reise", plural: "die Reisen", ex: "Die Reise nach Wien dauert vier Stunden." },
          { it: "der Urlaub", plural: "die Urlaube", ex: "Nächste Woche habe ich Urlaub." },
          { it: "die Woche", plural: "die Wochen", ex: "In einer Woche fahre ich nach Berlin." },
          { it: "das Wochenende", plural: "die Wochenenden", ex: "Am Wochenende fahren wir ans Meer." },
          { it: "der Flug", plural: "die Flüge", ex: "Der Flug nach Wien dauert eine Stunde." },
          { it: "der Flughafen", plural: "die Flughäfen", ex: "Der Flughafen ist weit weg." },
          { it: "der Koffer", plural: "die Koffer", ex: "Mein Koffer ist schwer." },
          { it: "das Ticket", plural: "die Tickets", ex: "Ich habe das Ticket schon gekauft." },
          { it: "morgen", ex: "Morgen fahre ich nach Hamburg." },
          { it: "nächste Woche", ex: "Nächste Woche fliege ich nach Rom." },
          { it: "bald", ex: "Bald fahren wir in Urlaub." },
          { it: "im Sommer", ex: "Im Sommer fahren wir an den See." }
        ],
        exercises: [
          { t: "conj", verb: "werden", tense: "praes", persons: [0, 1, 2, 3, 4, 5] },
          { t: "conj", verb: "fahren", tense: "fut1", persons: [0, 1, 2, 3, 4, 5] },
          { t: "conj", verb: "fliegen", tense: "fut1", persons: [0, 1, 2, 3, 4, 5] },
          { t: "mcq", a: 0 },
          { t: "mcq", a: 1 },
          { t: "fill", a: ["werden"] },
          { t: "fill", a: ["fahre"] },
          {
            t: "cloze",
            text: "Morgen {{1}} ich dir ein Foto {{2}}.",
            gaps: [["werde"], ["schicken", "senden"]]
          },
          { t: "listen", it: "Nächste Woche fahre ich mit dem Zug nach Wien, und im Sommer werden wir in die Schweiz fliegen." },
          { t: "speak", it: "Morgen fahre ich nach Hamburg, und nächste Woche werde ich meine Freundin besuchen." }
        ]
      },
      {
        id: "a2-u02-l3",
        tags: ["g-perfekt", "g-register"],
        cefr: "A2",
        titleIt: "Ich habe ein Zimmer reserviert",
        grammar: {
          examples: [
            { it: "Ich habe ein Zimmer reserviert." },
            { it: "Wir haben ein Doppelzimmer für zwei Nächte gebucht." },
            { it: "Wir sind gestern Abend angekommen." },
            { it: "Haben Sie eine Reservierung?" },
            { it: "Könnten Sie mir bitte helfen?" },
            { it: "Hast du schon ein Hotel gebucht?" }
          ]
        },
        vocab: [
          { it: "das Hotel", plural: "die Hotels", ex: "Das Hotel liegt direkt am Bahnhof." },
          { it: "das Zimmer", plural: "die Zimmer", ex: "Das Zimmer hat einen Balkon." },
          { it: "das Doppelzimmer", plural: "die Doppelzimmer", ex: "Wir brauchen ein Doppelzimmer." },
          { it: "die Reservierung", plural: "die Reservierungen", ex: "Haben Sie eine Reservierung?" },
          { it: "die Nacht", plural: "die Nächte", ex: "Wir bleiben zwei Nächte." },
          { it: "der Schlüssel", plural: "die Schlüssel", ex: "Hier ist Ihr Schlüssel." },
          { it: "das Frühstück", plural: "die Frühstücke", ex: "Das Frühstück gibt es ab sieben Uhr." },
          { it: "die Rezeption", plural: "die Rezeptionen", ex: "Die Rezeption ist rund um die Uhr offen." },
          { it: "der Gast", plural: "die Gäste", ex: "Die Gäste frühstücken im Garten." },
          { it: "das Gepäck", plural: "-", ex: "Mein Gepäck ist noch im Zug." },
          { it: "reservieren", ex: "Ich möchte ein Zimmer reservieren." },
          { it: "buchen", ex: "Wir haben das Hotel online gebucht." }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "fill", a: ["gebucht"] },
          { t: "fill", a: ["sind"] },
          { t: "fill", a: ["haben"] },
          {
            t: "cloze",
            text: "Ich {{1}} ein Zimmer {{2}}. Wir {{3}} gestern Abend {{4}}.",
            gaps: [["habe"], ["reserviert", "gebucht"], ["sind"], ["angekommen"]]
          },
          {
            t: "match",
            pairs: [
              { it: "das Doppelzimmer" },
              { it: "die Reservierung" },
              { it: "der Schlüssel" },
              { it: "das Frühstück" }
            ]
          },
          {
            t: "trans",
            dir: "toIt",
            a: [
              "Wir haben ein Doppelzimmer für zwei Nächte reserviert",
              "Wir haben ein Doppelzimmer für zwei Nächte gebucht",
              "Wir haben für zwei Nächte ein Doppelzimmer reserviert",
              "Wir haben für zwei Nächte ein Doppelzimmer gebucht",
              "Für zwei Nächte haben wir ein Doppelzimmer reserviert",
              "Für zwei Nächte haben wir ein Doppelzimmer gebucht"
            ]
          },
          {
            t: "dialogue",
            lines: [
              { sp: "A", it: "Guten Abend. Haben Sie eine Reservierung?" },
              {
                sp: "TY",
                choices: [
                  "Ja, ich habe ein Zimmer reserviert.",
                  "Ja, ich habe ein Zimmer reservieren.",
                  "Ja, ich bin ein Zimmer reserviert."
                ],
                a: 0
              },
              { sp: "A", it: "Sind Sie schon lange unterwegs?" },
              {
                sp: "TY",
                choices: [
                  "Ja, wir sind um fünf Uhr abgefahren.",
                  "Ja, wir sind um fünf Uhr abfahren.",
                  "Ja, wir haben um fünf Uhr abgefahrt."
                ],
                a: 0
              },
              { sp: "A", it: "Das Frühstück gibt es von sieben bis zehn Uhr. Haben Sie noch eine Frage?" },
              {
                sp: "TY",
                choices: [
                  "Ja, könntest du mir bitte den Schlüssel geben?",
                  "Ja, gib mir bitte den Schlüssel.",
                  "Ja, könnten Sie mir bitte den Schlüssel geben?"
                ],
                a: 2
              }
            ]
          },
          { t: "listen", it: "Guten Abend, ich habe ein Doppelzimmer für zwei Nächte reserviert." },
          { t: "speak", it: "Wir haben ein Zimmer gebucht und sind gestern Abend im Hotel angekommen." }
        ]
      },
      {
        id: "a2-u02-l4",
        tags: ["g-nebensatz-temporal", "g-futur"],
        cefr: "A2",
        titleIt: "Wenn ich angekommen bin, rufe ich an",
        grammar: {
          examples: [
            { it: "Wenn ich angekommen bin, rufe ich dich an." },
            { it: "Wenn wir das Hotel gefunden haben, gehen wir essen." },
            { it: "Wenn der Zug abgefahren ist, werde ich dich anrufen." },
            { it: "Wenn ich Zeit habe, besuche ich dich." },
            { it: "Als wir gestern angekommen sind, hat es geregnet." },
            { it: "Ich schicke dir eine Nachricht, wenn ich umgestiegen bin." }
          ]
        },
        vocab: [
          { it: "ankommen", ex: "Wir kommen um acht Uhr an." },
          { it: "abfahren", ex: "Der Zug fährt um neun Uhr ab." },
          { it: "umsteigen", ex: "Wir müssen in München umsteigen." },
          { it: "anrufen", ex: "Ich rufe dich morgen an." },
          { it: "die Verspätung", plural: "die Verspätungen", ex: "Der Zug hat zehn Minuten Verspätung." },
          { it: "die Nachricht", plural: "die Nachrichten", ex: "Ich schicke dir eine Nachricht." },
          { it: "der Anschluss", plural: "die Anschlüsse", ex: "Wir haben den Anschluss verpasst." },
          { it: "die Haltestelle", plural: "die Haltestellen", ex: "Die Haltestelle ist vor dem Bahnhof." },
          { it: "das Taxi", plural: "die Taxis", ex: "Wir nehmen ein Taxi zum Hotel." },
          { it: "die Verbindung", plural: "die Verbindungen", ex: "Es gibt eine gute Verbindung nach Wien." },
          { it: "pünktlich", ex: "Der Zug ist pünktlich." },
          { it: "später", ex: "Ich rufe dich später an." }
        ],
        exercises: [
          { t: "mcq", a: 0 },
          { t: "mcq", a: 0 },
          { t: "fill", a: ["wenn"] },
          { t: "fill", a: ["bin"] },
          {
            t: "cloze",
            text: "{{1}} wir das Hotel gefunden {{2}}, {{3}} wir essen.",
            gaps: [["Wenn"], ["haben"], ["gehen"]]
          },
          {
            t: "match",
            pairs: [{ it: "ankommen" }, { it: "abfahren" }, { it: "umsteigen" }, { it: "anrufen" }]
          },
          {
            t: "order",
            tokens: ["Wenn", "ich", "angekommen", "bin,", "rufe", "ich", "dich", "an"],
            a: ["Wenn ich angekommen bin, rufe ich dich an"]
          },
          {
            t: "trans",
            dir: "toIt",
            a: [
              "Wenn ich ankomme, rufe ich dich an",
              "Wenn ich angekommen bin, rufe ich dich an",
              "Ich rufe dich an, wenn ich ankomme",
              "Ich rufe dich an, wenn ich angekommen bin",
              "Wenn ich ankomme, werde ich dich anrufen",
              "Wenn ich angekommen bin, werde ich dich anrufen",
              "Ich werde dich anrufen, wenn ich ankomme",
              "Ich werde dich anrufen, wenn ich angekommen bin"
            ]
          },
          { t: "listen", it: "Wenn ich angekommen bin, rufe ich dich an, und dann gehen wir zusammen essen." },
          { t: "speak", it: "Wenn ich im Hotel angekommen bin, schicke ich dir eine Nachricht." }
        ]
      }
    ],
    test: {
      id: "a2-u02-test",
      tags: ["g-futur", "g-wechselpraep", "g-nebensatz-temporal"],
      cefr: "A2",
      titleIt: "Test: Unterwegs",
      exercises: [
        { t: "conj", verb: "kommen", tense: "fut1", persons: [0, 1, 2, 3, 4, 5] },
        { t: "fill", a: ["nach"] },
        { t: "fill", a: ["in"] },
        { t: "fill", a: ["zu"] },
        { t: "fill", a: ["werde"] },
        { t: "fill", a: ["wenn"] },
        { t: "mcq", a: 0 },
        {
          t: "trans",
          dir: "toIt",
          a: [
            "Morgen fahren wir nach Wien",
            "Wir fahren morgen nach Wien",
            "Nach Wien fahren wir morgen",
            "Morgen reisen wir nach Wien",
            "Wir reisen morgen nach Wien",
            "Nach Wien reisen wir morgen"
          ]
        },
        { t: "listen", it: "Morgen fahre ich nach Wien, und wenn ich angekommen bin, rufe ich dich an." },
        { t: "speak", it: "Im Sommer werden wir in die Schweiz fahren, und danach fahre ich zu meiner Tante." }
      ]
    }
  },
  {
    id: "a2-u03",
    icon: "🤝",
    titleIt: "Ich sehe ihn, ich helfe ihm",
    lessons: [
      {
        id: "a2-u03-l1",
        tags: ["g-pron-akk"],
        cefr: "A2",
        titleIt: "ihn, sie, es",
        grammar: {
          examples: [
            { it: "Ich kenne ihn gut." },
            { it: "Wir treffen sie morgen." },
            { it: "Er sieht mich nicht." },
            { it: "Ich rufe dich heute Abend an." },
            { it: "Das Kind ist krank. Ich besuche es heute." },
            { it: "Sie laden uns zur Party ein." }
          ]
        },
        vocab: [
          { it: "der Bruder", plural: "die Brüder", ex: "Mein Bruder wohnt in Hamburg." },
          { it: "die Schwester", plural: "die Schwestern", ex: "Meine Schwester arbeitet im Krankenhaus." },
          { it: "der Nachbar", plural: "die Nachbarn", ex: "Unser Nachbar ist sehr freundlich." },
          { it: "die Kollegin", plural: "die Kolleginnen", ex: "Meine Kollegin spricht gut Englisch." },
          { it: "der Chef", plural: "die Chefs", ex: "Der Chef ist heute nicht im Büro." },
          { it: "das Kind", plural: "die Kinder", ex: "Das Kind spielt im Garten." },
          { it: "der Schlüssel", plural: "die Schlüssel", ex: "Ich finde meinen Schlüssel nicht." },
          { it: "die Zeitung", plural: "die Zeitungen", ex: "Ich lese jeden Morgen die Zeitung." },
          { it: "kennen", ex: "Kennst du meine Schwester?" },
          { it: "sehen", ex: "Ich sehe dich morgen." },
          { it: "treffen", ex: "Ich treffe sie oft im Café." },
          { it: "einladen", ex: "Wir laden dich zur Party ein." }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "mcq", a: 2 },
          { t: "multi", a: [0, 1, 2] },
          { t: "fill", a: ["ihn"] },
          { t: "fill", a: ["sie"] },
          {
            t: "cloze",
            text: "Meine Kollegin ist nett. Ich treffe {{1}} oft, und sie lädt {{2}} manchmal ein.",
            gaps: [["sie"], ["mich"]]
          },
          {
            t: "order",
            tokens: ["Heute", "treffe", "ich", "sie", "im", "Café"],
            a: [
              "Heute treffe ich sie im Café",
              "Ich treffe sie heute im Café",
              "Im Café treffe ich sie heute",
              "Ich treffe sie im Café heute",
              "Sie treffe ich heute im Café"
            ]
          },
          {
            t: "trans",
            dir: "toIt",
            a: [
              "Ich sehe ihn morgen",
              "Morgen sehe ich ihn",
              "Ich treffe ihn morgen",
              "Morgen treffe ich ihn"
            ]
          },
          { t: "listen", it: "Kennst du meinen Bruder? Ich sehe ihn jeden Tag, und er besucht mich oft." },
          { t: "speak", it: "Meine Kollegin ist nett. Ich treffe sie oft, und sie lädt mich manchmal ein." }
        ]
      },
      {
        id: "a2-u03-l2",
        tags: ["g-pron-dat", "g-verben-dativ"],
        cefr: "A2",
        titleIt: "Ich helfe dir, das gefällt mir",
        grammar: {
          examples: [
            { it: "Ich helfe dir gern." },
            { it: "Das Handy gehört mir." },
            { it: "Die Jacke gefällt mir sehr." },
            { it: "Wir danken ihm für das Geschenk." },
            { it: "Er antwortet mir nicht." },
            { it: "Meine Schwester braucht Hilfe. Ich helfe ihr." }
          ]
        },
        vocab: [
          { it: "das Geschenk", plural: "die Geschenke", ex: "Das Geschenk ist für meine Mutter." },
          { it: "die Hilfe", plural: "die Hilfen", ex: "Danke für deine Hilfe." },
          { it: "der Rucksack", plural: "die Rucksäcke", ex: "Der Rucksack ist ziemlich schwer." },
          { it: "das Handy", plural: "die Handys", ex: "Mein Handy liegt auf dem Tisch." },
          { it: "die Jacke", plural: "die Jacken", ex: "Die Jacke ist neu." },
          { it: "das Buch", plural: "die Bücher", ex: "Das Buch ist spannend." },
          { it: "helfen", ex: "Kannst du mir bitte helfen?" },
          { it: "gefallen", ex: "Die Jacke gefällt mir." },
          { it: "gehören", ex: "Der Rucksack gehört meinem Bruder." },
          { it: "danken", ex: "Ich danke dir für die Einladung." },
          { it: "antworten", ex: "Er antwortet mir nicht." },
          { it: "gern", ex: "Ich helfe dir gern." }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "mcq", a: 1 },
          { t: "multi", a: [0, 1, 3] },
          { t: "fill", a: ["mir"] },
          { t: "fill", a: ["ihr"] },
          {
            t: "cloze",
            text: "Danke, Anna! Ich {{1}} {{2}} für deine Hilfe.",
            gaps: [["danke"], ["dir"]]
          },
          {
            t: "order",
            tokens: ["Die", "Jacke", "gefällt", "mir", "sehr"],
            a: ["Die Jacke gefällt mir sehr", "Mir gefällt die Jacke sehr"]
          },
          {
            t: "trans",
            dir: "toIt",
            a: ["Ich helfe dir gern", "Ich helfe dir gerne", "Gern helfe ich dir", "Gerne helfe ich dir"]
          },
          { t: "listen", it: "Kannst du mir bitte helfen? Ich danke dir, das ist sehr nett von dir." },
          { t: "speak", it: "Der Rucksack gehört mir, und die Jacke gefällt mir sehr." }
        ]
      },
      {
        id: "a2-u03-l3",
        tags: ["g-wortstellung", "g-pron-dat"],
        cefr: "A2",
        titleIt: "Ich gebe es ihm",
        grammar: {
          examples: [
            { it: "Ich gebe es ihm." },
            { it: "Ich zeige dir das Foto." },
            { it: "Ich schenke meiner Schwester ein Buch." },
            { it: "Er schickt es mir morgen." },
            { it: "Wir leihen ihm das Fahrrad." },
            { it: "Ich erkläre es dir später." }
          ]
        },
        vocab: [
          { it: "das Foto", plural: "die Fotos", ex: "Das Foto ist von meinem Urlaub." },
          { it: "der Brief", plural: "die Briefe", ex: "Der Brief kommt aus Wien." },
          { it: "das Paket", plural: "die Pakete", ex: "Das Paket ist schwer." },
          { it: "das Geld", plural: "-", ex: "Das Geld liegt auf dem Tisch." },
          { it: "die Postkarte", plural: "die Postkarten", ex: "Die Postkarte ist aus Wien." },
          { it: "das Fahrrad", plural: "die Fahrräder", ex: "Mein Fahrrad ist neu." },
          { it: "geben", ex: "Gibst du mir bitte den Schlüssel?" },
          { it: "schenken", ex: "Wir schenken unserer Oma ein Buch." },
          { it: "zeigen", ex: "Ich zeige dir das Foto." },
          { it: "schicken", ex: "Sie schickt mir eine Postkarte." },
          { it: "leihen", ex: "Kannst du mir dein Fahrrad leihen?" },
          { it: "erklären", ex: "Er erklärt mir den Weg." }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "mcq", a: 1 },
          { t: "multi", a: [0, 1, 3] },
          { t: "fill", a: ["es"] },
          { t: "fill", a: ["ihm"] },
          {
            t: "cloze",
            text: "Der Brief ist fertig. Ich schicke {{1}} {{2}} morgen.",
            gaps: [["ihn"], ["dir"]]
          },
          {
            t: "match",
            pairs: [
              { it: "Ich gebe es ihm." },
              { it: "Ich gebe ihm das Buch." },
              { it: "Ich gebe es meinem Bruder." },
              { it: "Ich gebe es dir." }
            ]
          },
          {
            t: "trans",
            dir: "toIt",
            a: ["Ich gebe es dir morgen", "Morgen gebe ich es dir"]
          },
          {
            t: "listen",
            it: "Ich habe dein Foto gefunden. Ich zeige es dir gleich, und morgen schicke ich es deiner Schwester."
          },
          { t: "speak", it: "Der Schlüssel gehört meinem Bruder. Ich gebe ihn ihm morgen." }
        ]
      },
      {
        id: "a2-u03-l4",
        tags: ["g-imperativ", "g-modalpartikeln"],
        cefr: "A2",
        titleIt: "Sag mal! Ruf mich doch an!",
        grammar: {
          examples: [
            { it: "Komm mal her!" },
            { it: "Warte einen Moment!" },
            { it: "Ruf mich doch an!" },
            { it: "Mach doch eine Pause!" },
            { it: "Sag mal, hast du Zeit?" },
            { it: "Seid bitte vorsichtig!" }
          ]
        },
        vocab: [
          { it: "der Tipp", plural: "die Tipps", ex: "Hast du einen Tipp für mich?" },
          { it: "die Idee", plural: "die Ideen", ex: "Das ist eine gute Idee." },
          { it: "der Moment", plural: "die Momente", ex: "Warte einen Moment!" },
          { it: "die Pause", plural: "die Pausen", ex: "Wir machen eine kurze Pause." },
          { it: "anrufen", ex: "Ruf mich später an!" },
          { it: "warten", ex: "Wartet bitte hier!" },
          { it: "nehmen", ex: "Nimm doch einen Stuhl!" },
          { it: "lesen", ex: "Lies den Brief noch einmal!" },
          { it: "mal", ex: "Komm mal her!" },
          { it: "doch", ex: "Komm doch mit!" },
          { it: "vorsichtig", ex: "Sei vorsichtig!" },
          { it: "bitte", ex: "Bitte, komm herein!" }
        ],
        exercises: [
          { t: "mcq", a: 0 },
          { t: "mcq", a: 1 },
          { t: "fill", a: ["wartet"] },
          { t: "fill", a: ["an"] },
          { t: "fill", a: ["sei"] },
          {
            t: "cloze",
            text: "Du bist müde? Dann {{1}} {{2}} eine Pause!",
            gaps: [["mach", "mache"], ["doch", "mal"]]
          },
          {
            t: "order",
            tokens: ["Ruf", "mich", "doch", "mal", "an"],
            a: ["Ruf mich doch mal an"]
          },
          {
            t: "trans",
            dir: "toIt",
            a: ["Ruf mich doch an", "Ruf mich doch mal an", "Rufe mich doch an", "Rufe mich doch mal an"]
          },
          {
            t: "listen",
            it: "Sag mal, hast du morgen Zeit? Dann ruf mich doch an, und wir gehen zusammen essen."
          },
          { t: "speak", it: "Komm doch mal vorbei, und nimm dir einen Moment Zeit!" }
        ]
      }
    ],
    test: {
      id: "a2-u03-test",
      tags: ["g-pron-akk", "g-pron-dat", "g-verben-dativ"],
      cefr: "A2",
      titleIt: "Test: Ich sehe ihn, ich helfe ihm",
      exercises: [
        { t: "fill", a: ["sie"] },
        { t: "fill", a: ["dir"] },
        { t: "fill", a: ["mir"] },
        { t: "fill", a: ["ihm"] },
        { t: "fill", a: ["euch"] },
        { t: "mcq", a: 1 },
        { t: "mcq", a: 0 },
        {
          t: "trans",
          dir: "toIt",
          a: [
            "Ich gebe ihm das Buch morgen",
            "Morgen gebe ich ihm das Buch",
            "Ich gebe ihm morgen das Buch"
          ]
        },
        { t: "listen", it: "Mein Bruder hat Geburtstag. Ich schenke ihm ein Buch, und ich gebe es ihm morgen." },
        { t: "speak", it: "Meine Kollegin braucht Hilfe. Ich helfe ihr gern, und ich rufe sie morgen an." }
      ]
    }
  },
  {
    id: "a2-u04",
    icon: "🩺",
    titleIt: "Gesundheit",
    lessons: [
      {
        id: "a2-u04-l1",
        tags: ["g-pron-dat", "g-verben-dativ"],
        cefr: "A2",
        titleIt: "Mir tut der Kopf weh",
        grammar: {
          examples: [
            { it: "Mir tut der Kopf weh." },
            { it: "Wo tut es dir weh?" },
            { it: "Ihm tun die Zähne weh." },
            { it: "Meiner Schwester tut der Rücken weh." },
            { it: "Uns tun die Beine weh." },
            { it: "Ich habe Kopfschmerzen." }
          ]
        },
        vocab: [
          { it: "der Kopf", plural: "die Köpfe", ex: "Mir tut der Kopf weh." },
          { it: "der Hals", plural: "die Hälse", ex: "Ihr tut der Hals weh." },
          { it: "der Bauch", plural: "die Bäuche", ex: "Mir tut der Bauch weh." },
          { it: "der Rücken", plural: "die Rücken", ex: "Meinem Vater tut der Rücken weh." },
          { it: "das Bein", plural: "die Beine", ex: "Uns tun die Beine weh." },
          { it: "der Fuß", plural: "die Füße", ex: "Mir tun die Füße weh." },
          { it: "der Zahn", plural: "die Zähne", ex: "Ihm tun die Zähne weh." },
          { it: "das Ohr", plural: "die Ohren", ex: "Mir tun die Ohren weh." },
          { it: "der Schmerz", plural: "die Schmerzen", ex: "Ich habe starke Schmerzen." },
          { it: "wehtun", ex: "Wo tut es dir weh?" },
          { it: "krank", ex: "Mein Bruder ist krank." },
          { it: "müde", ex: "Ich bin heute sehr müde." }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "mcq", a: 1 },
          { t: "fill", a: ["tun"] },
          { t: "fill", a: ["ihr"] },
          {
            t: "cloze",
            text: "Ich bin müde. {{1}} tun die Beine weh. Und Lisa? {{2}} tut der Rücken weh.",
            gaps: [["mir"], ["ihr"]]
          },
          {
            t: "match",
            pairs: [
              { it: "Mir tut der Kopf weh." },
              { it: "Mir tun die Füße weh." },
              { it: "Ihr tut der Bauch weh." },
              { it: "Ihm tun die Ohren weh." }
            ]
          },
          {
            t: "order",
            tokens: ["Mir", "tun", "die", "Füße", "weh"],
            a: ["Mir tun die Füße weh", "Die Füße tun mir weh"]
          },
          {
            t: "trans",
            dir: "toIt",
            a: ["Mir tut der Kopf weh", "Der Kopf tut mir weh"]
          },
          { t: "listen", it: "Guten Tag, Frau Doktor. Mir tut der Kopf weh, und mir tun auch die Ohren weh." },
          { t: "speak", it: "Ich bin krank. Mir tut der Hals weh, und mir tun die Beine weh." }
        ]
      },
      {
        id: "a2-u04-l2",
        tags: ["g-praep-dativ", "g-temporalangaben"],
        cefr: "A2",
        titleIt: "Beim Arzt",
        grammar: {
          examples: [
            { it: "Ich bin beim Arzt." },
            { it: "Ich gehe zum Arzt." },
            { it: "Meine Mutter geht zur Ärztin." },
            { it: "Ich gehe zur Apotheke." },
            { it: "Ich habe seit drei Tagen Fieber." },
            { it: "Der Termin ist am Montag um zehn Uhr." }
          ]
        },
        vocab: [
          { it: "der Arzt", plural: "die Ärzte", ex: "Die Praxis hat heute bis 17 Uhr geöffnet." },
          { it: "die Ärztin", plural: "die Ärztinnen", ex: "Die Ärztin ist sehr freundlich." },
          { it: "die Praxis", plural: "die Praxen", ex: "Die Praxis ist am Montag geöffnet." },
          { it: "der Termin", plural: "die Termine", ex: "Ich habe morgen einen Termin." },
          { it: "die Krankenkasse", plural: "die Krankenkassen", ex: "Meine Krankenkasse zahlt das." },
          { it: "das Rezept", plural: "die Rezepte", ex: "Die Ärztin schreibt mir ein Rezept." },
          { it: "die Apotheke", plural: "die Apotheken", ex: "Die Apotheke ist neben der Bank." },
          { it: "die Tablette", plural: "die Tabletten", ex: "Ich nehme drei Tabletten am Tag." },
          { it: "das Fieber", plural: "-", ex: "Ich habe seit gestern Fieber." },
          { it: "der Husten", plural: "-", ex: "Mein Husten ist schlimm." },
          { it: "vereinbaren", ex: "Ich möchte einen Termin vereinbaren." },
          { it: "seit", ex: "Ich bin seit einer Woche krank." }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "fill", a: ["zur"] },
          { t: "fill", a: ["seit"] },
          {
            t: "cloze",
            text: "Ich möchte einen Termin vereinbaren. Geht es {{1}} Montag {{2}} zehn Uhr?",
            gaps: [["am"], ["um"]]
          },
          {
            t: "match",
            pairs: [
              { it: "beim Arzt" },
              { it: "zum Arzt" },
              { it: "seit drei Tagen" },
              { it: "vor drei Tagen" }
            ]
          },
          {
            t: "order",
            tokens: ["Ich", "gehe", "morgen", "zum", "Arzt"],
            a: [
              "Ich gehe morgen zum Arzt",
              "Morgen gehe ich zum Arzt",
              "Ich gehe zum Arzt morgen",
              "Zum Arzt gehe ich morgen"
            ]
          },
          {
            t: "trans",
            dir: "toIt",
            a: [
              "Ich gehe am Montag zur Ärztin",
              "Am Montag gehe ich zur Ärztin",
              "Ich gehe zur Ärztin am Montag",
              "Zur Ärztin gehe ich am Montag"
            ]
          },
          {
            t: "dialogue",
            lines: [
              { sp: "A", it: "Praxis Berger, guten Tag." },
              {
                sp: "TY",
                choices: [
                  "Guten Tag, ich möchte einen Termin vereinbaren.",
                  "Guten Tag, ich möchte vereinbaren einen Termin.",
                  "Guten Tag, ich möchte einen Termin vereinbart."
                ],
                a: 0
              },
              { sp: "A", it: "Gern. Seit wann haben Sie denn Fieber?" },
              {
                sp: "TY",
                choices: [
                  "Ich habe seit drei Tagen Fieber.",
                  "Ich habe seit drei Tage Fieber.",
                  "Ich habe seit drei Tagen Fieber habe."
                ],
                a: 0
              }
            ]
          },
          {
            t: "listen",
            it: "Guten Tag, ich möchte einen Termin vereinbaren. Ich habe seit drei Tagen Fieber, und mir tut der Kopf weh."
          },
          { t: "speak", it: "Ich habe am Montag um zehn Uhr einen Termin beim Arzt." }
        ]
      },
      {
        id: "a2-u04-l3",
        tags: ["g-konjunktiv2", "g-reflexivverben"],
        cefr: "A2",
        titleIt: "Du solltest dich ausruhen",
        grammar: {
          examples: [
            { it: "Du solltest dich ausruhen." },
            { it: "Ich würde zum Arzt gehen." },
            { it: "An deiner Stelle würde ich im Bett bleiben." },
            { it: "Ihr solltet viel Tee trinken." },
            { it: "Sie sollten sich hinlegen." },
            { it: "Ich würde mich im Urlaub erholen." }
          ]
        },
        vocab: [
          { it: "sich ausruhen", ex: "Ich ruhe mich heute aus." },
          { it: "sich hinlegen", ex: "Leg dich bitte hin." },
          { it: "sich erholen", ex: "Ich erhole mich im Urlaub." },
          { it: "sich fühlen", ex: "Ich fühle mich heute nicht gut." },
          { it: "der Ratschlag", plural: "die Ratschläge", ex: "Danke für deinen Ratschlag." },
          { it: "der Tee", plural: "die Tees", ex: "Ich trinke einen Tee mit Honig." },
          { it: "das Bett", plural: "die Betten", ex: "Das Bett ist sehr bequem." },
          { it: "die Ruhe", plural: "-", ex: "Ich brauche jetzt Ruhe." },
          { it: "der Urlaub", plural: "die Urlaube", ex: "Im Urlaub fahre ich ans Meer." },
          { it: "gesund", ex: "Ich bin wieder gesund." },
          { it: "sollen", ex: "Du sollst nicht so viel arbeiten." },
          { it: "an deiner Stelle", ex: "An deiner Stelle würde ich zum Arzt gehen." }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "conj", verb: "sollen", tense: "konj2", persons: [0, 1, 2, 3, 4, 5] },
          { t: "conj", verb: "sich ausruhen", tense: "konj2", persons: [0, 1, 2, 3, 4, 5] },
          { t: "fill", a: ["solltest"] },
          { t: "fill", a: ["uns"] },
          {
            t: "cloze",
            text: "Du hast Fieber. An deiner Stelle {{1}} ich zum Arzt gehen. Und du solltest {{2}} ausruhen.",
            gaps: [["würde"], ["dich"]]
          },
          {
            t: "match",
            pairs: [
              { it: "Du solltest dich ausruhen." },
              { it: "Ich würde zum Arzt gehen." },
              { it: "Ihr solltet viel Tee trinken." },
              { it: "Sie sollten sich hinlegen." }
            ]
          },
          {
            t: "trans",
            dir: "toIt",
            a: [
              "An deiner Stelle würde ich mich ausruhen",
              "Ich würde mich an deiner Stelle ausruhen"
            ]
          },
          {
            t: "listen",
            it: "Du siehst müde aus. An deiner Stelle würde ich mich hinlegen, und du solltest viel Tee trinken."
          },
          { t: "speak", it: "Du solltest dich ausruhen, und ich würde zum Arzt gehen." }
        ]
      },
      {
        id: "a2-u04-l4",
        tags: ["g-nebensatz-dass", "g-konnektoren"],
        cefr: "A2",
        titleIt: "Gesund leben",
        grammar: {
          examples: [
            { it: "Ich finde, dass Sport wichtig ist." },
            { it: "Der Arzt sagt, dass ich mehr Wasser trinken soll." },
            { it: "Ich weiß, dass Zigaretten ungesund sind." },
            { it: "Ich schlafe schlecht. Deshalb bin ich müde." },
            { it: "Sie isst viel Gemüse. Deshalb ist sie selten krank." },
            { it: "Ich denke, dass ein Spaziergang gesund ist." }
          ]
        },
        vocab: [
          { it: "der Apfel", plural: "die Äpfel", ex: "Ich esse jeden Tag einen Apfel." },
          { it: "das Gemüse", plural: "-", ex: "Wir essen viel Gemüse." },
          { it: "die Mahlzeit", plural: "die Mahlzeiten", ex: "Drei Mahlzeiten am Tag sind genug." },
          { it: "der Spaziergang", plural: "die Spaziergänge", ex: "Nach dem Essen mache ich einen Spaziergang." },
          { it: "die Zigarette", plural: "die Zigaretten", ex: "Er raucht fünf Zigaretten am Tag." },
          { it: "der Schlaf", plural: "-", ex: "Guter Schlaf ist wichtig." },
          { it: "die Gesundheit", plural: "-", ex: "Die Gesundheit ist wichtig." },
          { it: "das Wasser", plural: "-", ex: "Ich trinke viel Wasser." },
          { it: "rauchen", ex: "Mein Onkel raucht nicht mehr." },
          { it: "regelmäßig", ex: "Ich mache regelmäßig Sport." },
          { it: "ungesund", ex: "Zu viel Zucker ist ungesund." },
          { it: "sich bewegen", ex: "Ich bewege mich jeden Tag." }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "mcq", a: 1 },
          { t: "fill", a: ["dass"] },
          { t: "fill", a: ["isst"] },
          { t: "fill", a: ["gehe"] },
          {
            t: "cloze",
            text: "Ich weiß, {{1}} Sport gesund ist. Ich mache aber zu wenig Sport. {{2}} bin ich oft müde.",
            gaps: [["dass"], ["deshalb", "deswegen", "darum"]]
          },
          {
            t: "match",
            pairs: [{ it: "dass" }, { it: "deshalb" }, { it: "regelmäßig" }, { it: "ungesund" }]
          },
          {
            t: "trans",
            dir: "toIt",
            a: [
              "Der Arzt sagt, dass ich mehr schlafen soll",
              "Der Arzt sagt, dass ich mehr schlafen muss"
            ]
          },
          {
            t: "listen",
            it: "Der Arzt sagt, dass ich mehr schlafen soll. Ich schlafe schlecht, deshalb bin ich oft müde."
          },
          { t: "speak", it: "Ich glaube, dass Sport gesund ist. Deshalb gehe ich jeden Tag spazieren." }
        ]
      }
    ],
    test: {
      id: "a2-u04-test",
      tags: ["g-konjunktiv2", "g-nebensatz-dass", "g-pron-dat"],
      cefr: "A2",
      titleIt: "Test: Gesundheit",
      exercises: [
        { t: "conj", verb: "sollen", tense: "konj2", persons: [0, 1, 2, 3, 4, 5] },
        { t: "fill", a: ["ihr"] },
        { t: "fill", a: ["uns"] },
        { t: "fill", a: ["dass"] },
        { t: "fill", a: ["würde"] },
        { t: "mcq", a: 1 },
        {
          t: "match",
          pairs: [
            { it: "Mir tut der Kopf weh." },
            { it: "Du solltest dich ausruhen." },
            { it: "Ich würde zum Arzt gehen." },
            { it: "Ich weiß, dass er krank ist." }
          ]
        },
        { t: "trans", dir: "toIt", a: ["Der Arzt sagt, dass ich mich ausruhen soll"] },
        { t: "listen", it: "Mir tut der Kopf weh. Ich denke, dass ich mich ausruhen sollte." },
        {
          t: "speak",
          it: "Mein Bruder ist krank. Ihm tut der Rücken weh, und ich glaube, dass er zum Arzt gehen sollte."
        }
      ]
    }
  }
]);
