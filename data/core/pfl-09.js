/* ============================================================
   Language-neutral layer: German (de-DE), structure and answer keys.
   Learner-language texts live in data/i18n/<lang>/pfl-09.js.
   pfl-u09 belongs to the nursing track (pseudo-level PFL) and is its
   last unit: the test closes the whole track and mixes vocabulary
   from units 1-9. Every lesson carries its real CEFR level.
   ============================================================ */
LINGUAI.addUnits("PFL", [
  {
    id: "pfl-u09",
    icon: "🧼",
    titleIt: "Hygiene, Wunden und Entlassung",
    lessons: [
      {
        id: "pfl-u09-l1",
        tags: ["g-imperativ", "g-passiv"],
        cefr: "B2",
        titleIt: "Hygiene und Isolation",
        grammar: {
          examples: [
            { it: "Desinfizieren Sie sich bitte die Hände." },
            { it: "Ziehen Sie bitte vor dem Betreten einen Schutzkittel an." },
            { it: "Melden Sie sich bitte vor dem Besuch im Stationszimmer." },
            { it: "Die Hände werden vor und nach jedem Patientenkontakt desinfiziert." },
            { it: "Bei Herrn Brandt wurde ein multiresistenter Erreger gefunden." },
            { it: "Das Zimmer wird jeden Tag gereinigt." }
          ]
        },
        vocab: [
          { it: "die Hygiene", plural: "-", ex: "Hygiene schützt Patienten und Personal." },
          { it: "die Infektion", plural: "die Infektionen", ex: "Viele Infektionen kann man vermeiden." },
          { it: "die Ansteckung", plural: "die Ansteckungen", ex: "Haben Sie Angst vor einer Ansteckung?" },
          { it: "die Händedesinfektion", plural: "-", ex: "Die Händedesinfektion gehört zu den wichtigsten Maßnahmen." },
          { it: "desinfizieren", ex: "Bitte desinfizieren Sie sich die Hände." },
          { it: "die Isolation", plural: "die Isolationen", ex: "Die Isolation schützt die anderen Patienten." },
          { it: "isolieren", ex: "Der Patient wird für einige Zeit isoliert." },
          { it: "der Keim", plural: "die Keime", ex: "Keime werden oft über die Hände übertragen." },
          { it: "der Erreger", plural: "die Erreger", ex: "Bei Herrn Brandt wurde ein multiresistenter Erreger gefunden." },
          { it: "der Schutzkittel", plural: "die Schutzkittel", ex: "Ziehen Sie bitte einen Schutzkittel an." },
          { it: "der Handschuh", plural: "die Handschuhe", ex: "Handschuhe ersetzen die Händedesinfektion nicht." },
          { it: "übertragen", ex: "Der Keim wird über die Hände übertragen." }
        ],
        dialogue: {
          titleIt: "Warum ein Einzelzimmer?",
          lines: [
            { who: "👩‍⚕️", it: "Guten Tag, Herr Brandt. Ich muss Ihnen etwas erklären. Bei Ihnen wurde ein Keim gefunden, gegen den viele Antibiotika nicht wirken." },
            { who: "🧓", it: "Ist das gefährlich?" },
            { who: "👩‍⚕️", it: "Die Ärztin bespricht mit Ihnen, was das für Sie bedeutet. Wir wollen vor allem verhindern, dass sich andere Patienten anstecken." },
            { who: "🧓", it: "Deshalb das Einzelzimmer?" },
            { who: "👩‍⚕️", it: "Genau. Sie werden für einige Zeit isoliert. Wer zu Ihnen kommt, zieht einen Schutzkittel und Handschuhe an." },
            { who: "🧓", it: "Und meine Frau? Sie will mich morgen besuchen." },
            { who: "👩‍⚕️", it: "Sie meldet sich bitte vorher im Stationszimmer, dort erklären wir ihr alles." },
            { who: "🧓", it: "Und was muss ich selbst machen?" },
            { who: "👩‍⚕️", it: "Desinfizieren Sie sich bitte die Hände, und sagen Sie uns Bescheid, bevor Sie das Zimmer verlassen." }
          ]
        },
        exercises: [
          { t: "mcq", a: 0 },
          { t: "conj", verb: "desinfizieren", tense: "praes", persons: [0, 1, 2, 3, 4, 5] },
          { t: "fill", a: ["werden"] },
          {
            t: "cloze",
            text: "Bei Herrn Brandt {{1}} ein multiresistenter Erreger {{2}}.",
            gaps: [["wurde"], ["gefunden", "nachgewiesen"]]
          },
          { t: "multi", a: [0, 2, 3] },
          {
            t: "gender",
            opts: ["der", "die", "das"],
            items: [
              { it: "Hygiene", a: "die" },
              { it: "Infektion", a: "die" },
              { it: "Isolation", a: "die" },
              { it: "Keim", a: "der" },
              { it: "Erreger", a: "der" },
              { it: "Schutzkittel", a: "der" }
            ]
          },
          {
            t: "match",
            pairs: [{ it: "die Händedesinfektion" }, { it: "der Schutzkittel" }, { it: "der Handschuh" }, { it: "der Keim" }]
          },
          {
            t: "order",
            tokens: ["Keime", "werden", "oft", "über", "die", "Hände", "übertragen"],
            a: ["Keime werden oft über die Hände übertragen"]
          },
          {
            t: "trans",
            dir: "toIt",
            a: [
              "Desinfizieren Sie sich bitte die Hände",
              "Bitte desinfizieren Sie sich die Hände",
              "Desinfizieren Sie sich die Hände bitte",
              "Desinfizieren Sie bitte Ihre Hände",
              "Bitte desinfizieren Sie Ihre Hände",
              "Desinfizieren Sie bitte die Hände"
            ]
          },
          {
            t: "dialogue",
            lines: [
              { sp: "A", it: "Warum liege ich allein in einem Zimmer?" },
              {
                sp: "TY",
                choices: [
                  "Bei Ihnen wurde ein Keim gefunden, deshalb werden Sie isoliert.",
                  "Bei Ihnen wurde ein Keim gefunden, deshalb Sie werden isoliert.",
                  "Bei Ihnen hat ein Keim gefunden, deshalb werden Sie isoliert."
                ],
                a: 0
              },
              { sp: "A", it: "Meine Tochter will mich heute besuchen." },
              {
                sp: "TY",
                choices: [
                  "Sie meldet sich bitte vorher im Stationszimmer.",
                  "Sie meldet bitte vorher sich im Stationszimmer.",
                  "Sie meldet sich bitte vorher in das Stationszimmer."
                ],
                a: 0
              },
              { sp: "A", it: "Was muss sie im Zimmer anziehen?" },
              {
                sp: "TY",
                choices: ["Einen Schutzkittel und Handschuhe.", "Ein Schutzkittel und Handschuhe.", "Einem Schutzkittel und Handschuhen."],
                a: 0
              }
            ]
          },
          {
            t: "listen",
            it: "Wer zu Ihnen kommt, zieht einen Schutzkittel und Handschuhe an."
          },
          { t: "speak", it: "Desinfizieren Sie sich bitte die Hände." }
        ]
      },
      {
        id: "pfl-u09-l2",
        tags: ["g-adjektivdeklination"],
        cefr: "B2",
        titleIt: "Wunden und Verbandswechsel",
        grammar: {
          examples: [
            { it: "Die Wunde ist gerötet und geschwollen." },
            { it: "Am Unterschenkel ist eine kleine, gerötete Wunde." },
            { it: "Der Wundrand ist leicht gerötet." },
            { it: "Der alte Verband war feucht." },
            { it: "Der neue Verband sitzt gut." },
            { it: "Die Wunde zeigt keine Zeichen einer Entzündung." }
          ]
        },
        vocab: [
          { it: "die Wunde", plural: "die Wunden", ex: "Die Wunde ist trocken und sauber." },
          { it: "die Entzündung", plural: "die Entzündungen", ex: "Eine Rötung kann ein Zeichen einer Entzündung sein." },
          { it: "die Inflammation", plural: "die Inflammationen", ex: "Inflammation ist der Fachbegriff für Entzündung." },
          { it: "die Rötung", plural: "die Rötungen", ex: "Um die Wunde herum sieht man eine leichte Rötung." },
          { it: "die Schwellung", plural: "die Schwellungen", ex: "Die Schwellung ist seit gestern kleiner geworden." },
          { it: "gerötet", ex: "Der Wundrand ist leicht gerötet." },
          { it: "geschwollen", ex: "Der Knöchel ist geschwollen." },
          { it: "der Wundrand", plural: "die Wundränder", ex: "Der Wundrand ist glatt und trocken." },
          { it: "das Wundsekret", plural: "die Wundsekrete", ex: "Auf dem Verband ist etwas Wundsekret." },
          { it: "der Verband", plural: "die Verbände", ex: "Der alte Verband war feucht." },
          { it: "der Verbandswechsel", plural: "die Verbandswechsel", ex: "Der Verbandswechsel ist für morgen früh geplant." },
          { it: "die Wunddokumentation", plural: "die Wunddokumentationen", ex: "Zur Wunddokumentation gehört oft ein Foto." }
        ],
        dialogue: {
          titleIt: "Beim Verbandswechsel",
          lines: [
            { who: "👩‍⚕️", it: "Kannst du mir beim Verbandswechsel von Herrn Brandt helfen?" },
            { who: "🧑‍⚕️", it: "Klar. Wie sah die Wunde gestern aus?" },
            { who: "👩‍⚕️", it: "Der Wundrand war leicht gerötet, aber trocken." },
            { who: "🧑‍⚕️", it: "Und heute? Der alte Verband ist ziemlich feucht." },
            { who: "👩‍⚕️", it: "Ja, da ist etwas Wundsekret. Die Rötung ist größer geworden, und die Haut fühlt sich warm an." },
            { who: "🧑‍⚕️", it: "Das könnte ein Zeichen einer Entzündung sein." },
            { who: "👩‍⚕️", it: "Genau. Ich dokumentiere die Wunde mit einem Foto und informiere die Ärztin." },
            { who: "🧑‍⚕️", it: "Gut. Dann besprechen wir nach der Visite, wie es weitergeht." }
          ]
        },
        exercises: [
          { t: "mcq", a: 2 },
          { t: "fill", a: ["kleine"] },
          {
            t: "cloze",
            text: "Der {{1}} Verband war feucht, der {{2}} Verband sitzt gut.",
            gaps: [["alte"], ["neue"]]
          },
          { t: "multi", a: [0, 1, 2] },
          {
            t: "match",
            pairs: [{ it: "die Rötung" }, { it: "die Schwellung" }, { it: "das Wundsekret" }, { it: "der Wundrand" }]
          },
          {
            t: "gender",
            opts: ["der", "die", "das"],
            items: [
              { it: "Wunde", a: "die" },
              { it: "Entzündung", a: "die" },
              { it: "Verband", a: "der" },
              { it: "Verbandswechsel", a: "der" },
              { it: "Wundsekret", a: "das" },
              { it: "Wundrand", a: "der" }
            ]
          },
          {
            t: "order",
            tokens: ["Die", "Wunde", "zeigt", "keine", "Zeichen", "einer", "Entzündung"],
            a: ["Die Wunde zeigt keine Zeichen einer Entzündung"]
          },
          {
            t: "trans",
            dir: "toIt",
            a: [
              "Die Wunde ist trocken und sauber",
              "Die Wunde ist sauber und trocken",
              "Wunde trocken und sauber",
              "Wunde sauber und trocken"
            ]
          },
          {
            t: "dialogue",
            lines: [
              { sp: "A", it: "Ist meine Wunde entzündet?" },
              {
                sp: "TY",
                choices: [
                  "Die Wunde ist etwas gerötet. Die Ärztin schaut sie sich heute an.",
                  "Inflammation am Wundrand, Ärztin informiert.",
                  "Die Wunde ist etwas geröteter. Die Ärztin schaut sie sich heute an."
                ],
                a: 0
              },
              { sp: "A", it: "Warum ist der Verband so nass?" },
              {
                sp: "TY",
                choices: [
                  "Das ist Wundsekret, also Flüssigkeit aus der Wunde. Ich schreibe es auf.",
                  "Das ist Wundsekret, also Flüssigkeit aus die Wunde. Ich schreibe es auf.",
                  "Das ist Wundsekret, also Flüssigkeit aus der Wunde. Ich schreibe auf es."
                ],
                a: 0
              },
              { sp: "A", it: "Tut der Verbandswechsel weh?" },
              {
                sp: "TY",
                choices: [
                  "Ich arbeite ganz vorsichtig. Sagen Sie mir sofort, wenn es weh tut.",
                  "Ich arbeite ganz vorsichtig. Sagen Sie mir sofort, wenn es tut weh.",
                  "Ich arbeite ganz vorsichtig. Sag Sie mir sofort, wenn es weh tut."
                ],
                a: 0
              }
            ]
          },
          {
            t: "listen",
            it: "Ja, da ist etwas Wundsekret. Die Rötung ist größer geworden, und die Haut fühlt sich warm an."
          },
          { t: "speak", it: "Der Wundrand ist leicht gerötet." }
        ]
      },
      {
        id: "pfl-u09-l3",
        tags: ["g-futur"],
        cefr: "B2",
        titleIt: "Die Entlassung",
        grammar: {
          examples: [
            { it: "Ein ambulanter Pflegedienst wird Sie morgens unterstützen." },
            { it: "Ihre Tochter wird die Medikamente aus der Apotheke holen." },
            { it: "Ihr Hausarzt wird die Wunde nächste Woche kontrollieren." },
            { it: "Wir werden den Rollator rechtzeitig bestellen." },
            { it: "Werden Sie zu Hause allein zurechtkommen?" },
            { it: "Sie werden am Freitag entlassen." }
          ]
        },
        vocab: [
          { it: "die Entlassung", plural: "die Entlassungen", ex: "Die Entlassung ist für Freitag geplant." },
          { it: "entlassen", ex: "Sie werden am Freitag entlassen." },
          { it: "das Entlassmanagement", plural: "-", ex: "Das Entlassmanagement plant, was nach dem Krankenhaus passiert." },
          { it: "die Überleitung", plural: "die Überleitungen", ex: "Die Überleitung ins Pflegeheim ist organisiert." },
          { it: "der Überleitungsbogen", plural: "die Überleitungsbögen", ex: "Der Überleitungsbogen geht an den Pflegedienst." },
          { it: "das Hilfsmittel", plural: "die Hilfsmittel", ex: "Ein Rollator ist ein Hilfsmittel." },
          { it: "der Pflegedienst", plural: "die Pflegedienste", ex: "Ein ambulanter Pflegedienst kommt zweimal am Tag." },
          { it: "der Pflegegrad", plural: "die Pflegegrade", ex: "Über den Pflegegrad entscheidet die Pflegekasse." },
          { it: "die Pflegekasse", plural: "die Pflegekassen", ex: "Den Antrag stellt man bei der Pflegekasse." },
          { it: "der Arztbrief", plural: "die Arztbriefe", ex: "Den Arztbrief bekommt auch Ihr Hausarzt." },
          { it: "zurechtkommen", ex: "Kommen Sie zu Hause allein zurecht?" },
          { it: "organisieren", ex: "Wir organisieren einen Rollator für zu Hause." }
        ],
        dialogue: {
          titleIt: "Bald nach Hause",
          lines: [
            { who: "👩‍⚕️", it: "Frau Keller, die Ärztin hat gesagt, dass Sie am Freitag entlassen werden." },
            { who: "👵", it: "Endlich! Aber wie soll ich das zu Hause schaffen?" },
            { who: "👩‍⚕️", it: "Darüber sprechen wir jetzt. Eine Kollegin vom Entlassmanagement wird morgen zu Ihnen kommen." },
            { who: "👵", it: "Und wer hilft mir beim Waschen?" },
            { who: "👩‍⚕️", it: "Ein ambulanter Pflegedienst wird Sie morgens unterstützen. Das besprechen wir auch mit Ihrer Tochter." },
            { who: "👵", it: "Brauche ich einen Rollator?" },
            { who: "👩‍⚕️", it: "Ja. Wir werden den Rollator rechtzeitig bestellen, damit er am Freitag da ist." },
            { who: "👵", it: "Und muss ich danach noch zum Arzt?" },
            { who: "👩‍⚕️", it: "Ihr Hausarzt wird die Wunde nächste Woche kontrollieren. Den Arztbrief bekommt er auch." }
          ]
        },
        exercises: [
          { t: "mcq", a: 1 },
          { t: "conj", verb: "werden", tense: "praes", persons: [0, 1, 2, 3, 4, 5] },
          { t: "fill", a: ["wird"] },
          {
            t: "cloze",
            text: "Wir {{1}} den Rollator rechtzeitig {{2}}.",
            gaps: [["werden"], ["bestellen"]]
          },
          { t: "multi", a: [0, 2, 4] },
          {
            t: "match",
            pairs: [{ it: "das Entlassmanagement" }, { it: "das Hilfsmittel" }, { it: "der Pflegegrad" }, { it: "der Pflegedienst" }]
          },
          {
            t: "gender",
            opts: ["der", "die", "das"],
            items: [
              { it: "Entlassung", a: "die" },
              { it: "Entlassmanagement", a: "das" },
              { it: "Überleitung", a: "die" },
              { it: "Hilfsmittel", a: "das" },
              { it: "Pflegedienst", a: "der" },
              { it: "Pflegegrad", a: "der" }
            ]
          },
          {
            t: "order",
            tokens: ["Ein", "Pflegedienst", "wird", "Sie", "morgens", "unterstützen"],
            a: ["Ein Pflegedienst wird Sie morgens unterstützen"]
          },
          {
            t: "trans",
            dir: "toIt",
            a: [
              "Der Hausarzt wird die Wunde nächste Woche kontrollieren",
              "Der Hausarzt wird nächste Woche die Wunde kontrollieren",
              "Nächste Woche wird der Hausarzt die Wunde kontrollieren",
              "Der Hausarzt wird die Wunde in der nächsten Woche kontrollieren",
              "In der nächsten Woche wird der Hausarzt die Wunde kontrollieren",
              "Die Hausärztin wird die Wunde nächste Woche kontrollieren",
              "Die Hausärztin wird nächste Woche die Wunde kontrollieren",
              "Nächste Woche wird die Hausärztin die Wunde kontrollieren"
            ]
          },
          {
            t: "dialogue",
            lines: [
              { sp: "A", it: "Wann kann ich nach Hause?" },
              {
                sp: "TY",
                choices: [
                  "Sie werden voraussichtlich am Freitag entlassen.",
                  "Sie werden voraussichtlich am Freitag entlasst.",
                  "Sie wird voraussichtlich am Freitag entlassen."
                ],
                a: 0
              },
              { sp: "A", it: "Wer hilft mir zu Hause beim Waschen?" },
              {
                sp: "TY",
                choices: [
                  "Ein Pflegedienst wird morgens zu Ihnen kommen.",
                  "Ein Pflegedienst wird morgens zu Ihnen kommt.",
                  "Ein Pflegedienst kommen wird morgens zu Ihnen."
                ],
                a: 0
              },
              { sp: "A", it: "Bekomme ich einen Pflegegrad?" },
              {
                sp: "TY",
                choices: [
                  "Ja, Sie bekommen sicher Pflegegrad drei.",
                  "Das entscheidet die Pflegekasse. Wir helfen Ihnen beim Antrag.",
                  "Das entscheidet die Pflegekasse. Wir helfen Ihnen bei den Antrag."
                ],
                a: 1
              }
            ]
          },
          {
            t: "listen",
            it: "Ein ambulanter Pflegedienst wird Sie morgens unterstützen. Das besprechen wir auch mit Ihrer Tochter."
          },
          { t: "speak", it: "Ihr Hausarzt wird die Wunde nächste Woche kontrollieren." }
        ]
      },
      {
        id: "pfl-u09-l4",
        tags: ["g-modalverben"],
        cefr: "B2",
        titleIt: "Was darf ich, was muss ich?",
        grammar: {
          examples: [
            { it: "Was darf ich als neue Kollegin schon allein machen?" },
            { it: "Diese Aufgabe darfst du erst übernehmen, wenn du eingearbeitet bist." },
            { it: "Bestimmte ärztliche Aufgaben können an die Pflege delegiert werden." },
            { it: "Wenn du unsicher bist, musst du nachfragen." },
            { it: "Das musst du nicht allein machen." },
            { it: "Das sollten wir mit der Stationsleitung klären." }
          ]
        },
        vocab: [
          { it: "dürfen", ex: "Was darf ich schon allein machen?" },
          { it: "müssen", ex: "Du musst nachfragen, wenn du unsicher bist." },
          { it: "sollen", ex: "Die Ärztin sagt, du sollst den Blutzucker vor dem Essen messen." },
          { it: "die Delegation", plural: "die Delegationen", ex: "Bei einer Delegation muss klar sein, wer was macht." },
          { it: "delegieren", ex: "Die Ärztin kann bestimmte Aufgaben an die Pflege delegieren." },
          { it: "die Verantwortung", plural: "-", ex: "Wer eine Aufgabe übernimmt, trägt auch Verantwortung." },
          { it: "die Haftung", plural: "-", ex: "Fragen zur Haftung klärt man am besten mit der Stationsleitung." },
          { it: "die Einarbeitung", plural: "die Einarbeitungen", ex: "In der Einarbeitung zeigt dir eine Kollegin alles." },
          { it: "eingearbeitet", ex: "Nach vier Wochen bist du gut eingearbeitet." },
          { it: "die Aufgabe", plural: "die Aufgaben", ex: "Diese Aufgabe darfst du erst nach der Einarbeitung übernehmen." },
          { it: "übernehmen", ex: "Heute übernimmst du Zimmer zwölf." },
          { it: "ablehnen", ex: "Er hat die Aufgabe abgelehnt, weil er sie noch nicht kannte." }
        ],
        dialogue: {
          titleIt: "Die erste Woche",
          lines: [
            { who: "🧑‍⚕️", it: "Ich bin seit einer Woche hier. Was darf ich schon allein machen?" },
            { who: "👩‍⚕️", it: "Die Grundpflege und die Vitalzeichen machst du schon allein. Den Verbandswechsel machen wir diese Woche noch zusammen." },
            { who: "🧑‍⚕️", it: "Und Blut abnehmen? Das habe ich in meinem Land jeden Tag gemacht." },
            { who: "👩‍⚕️", it: "Das glaube ich dir. Aber hier darfst du das erst, wenn die Einarbeitung abgeschlossen ist und die Ärztin es delegiert hat." },
            { who: "🧑‍⚕️", it: "Muss ich jede Aufgabe übernehmen, die man mir gibt?" },
            { who: "👩‍⚕️", it: "Nein. Wenn du dich bei einer Aufgabe nicht sicher fühlst, musst du das sagen. Dann zeigt dir jemand, wie es geht." },
            { who: "🧑‍⚕️", it: "Und wer haftet, wenn etwas schiefgeht?" },
            { who: "👩‍⚕️", it: "Das ist eine Frage für die Stationsleitung. Die Regeln sind nicht überall gleich, deshalb sollten wir das mit ihr klären." }
          ]
        },
        exercises: [
          { t: "mcq", a: 1 },
          { t: "conj", verb: "dürfen", tense: "praes", persons: [0, 1, 2, 3, 4, 5] },
          { t: "fill", a: ["musst"] },
          {
            t: "cloze",
            text: "Das {{1}} du erst machen, wenn die Einarbeitung abgeschlossen {{2}}.",
            gaps: [["darfst"], ["ist"]]
          },
          { t: "multi", a: [0, 2, 3] },
          {
            t: "match",
            pairs: [{ it: "die Delegation" }, { it: "die Haftung" }, { it: "die Einarbeitung" }, { it: "die Aufgabe" }]
          },
          {
            t: "gender",
            opts: ["der", "die", "das"],
            items: [
              { it: "Aufgabe", a: "die" },
              { it: "Haftung", a: "die" },
              { it: "Verbandswechsel", a: "der" },
              { it: "Blutzucker", a: "der" },
              { it: "Land", a: "das" },
              { it: "Einverständnis", a: "das" }
            ]
          },
          {
            t: "order",
            tokens: ["Wenn", "du", "unsicher", "bist,", "musst", "du", "nachfragen"],
            a: ["Wenn du unsicher bist, musst du nachfragen"]
          },
          {
            t: "trans",
            dir: "toIt",
            a: [
              "Das darfst du noch nicht allein machen",
              "Du darfst das noch nicht allein machen",
              "Das darfst du noch nicht alleine machen",
              "Du darfst das noch nicht alleine machen",
              "Das darfst du noch nicht allein tun",
              "Du darfst das noch nicht allein tun"
            ]
          },
          {
            t: "dialogue",
            lines: [
              { sp: "A", it: "Mein Vater schläft so schlecht. Geben Sie ihm doch eine Schlaftablette!" },
              {
                sp: "TY",
                choices: [
                  "Das darf ich nicht allein entscheiden. Ich spreche mit der Ärztin.",
                  "Das muss ich nicht allein entscheiden. Ich gebe ihm gleich eine.",
                  "Das darf ich nicht allein entscheiden. Ich spreche mit die Ärztin."
                ],
                a: 0
              },
              { sp: "A", it: "Aber Sie sind doch Krankenschwester!" },
              {
                sp: "TY",
                choices: [
                  "Ja, aber Medikamente gibt es nur nach ärztlicher Anordnung.",
                  "Ja, aber Medikamente gibt es nur nach ärztliche Anordnung.",
                  "Ja, deshalb ich darf das entscheiden."
                ],
                a: 0
              },
              { sp: "A", it: "Und wann erfahre ich etwas?" },
              {
                sp: "TY",
                choices: [
                  "Ich rufe die Ärztin jetzt an und sage Ihnen dann Bescheid.",
                  "Ich rufe die Ärztin jetzt an und sage Ihnen dann Bescheid sagen.",
                  "Ich rufe jetzt an die Ärztin und sage Ihnen dann Bescheid."
                ],
                a: 0
              }
            ]
          },
          {
            t: "listen",
            it: "Nein. Wenn du dich bei einer Aufgabe nicht sicher fühlst, musst du das sagen. Dann zeigt dir jemand, wie es geht."
          },
          { t: "speak", it: "Wenn du unsicher bist, musst du nachfragen." }
        ]
      }
    ],
    test: {
      id: "pfl-u09-test",
      tags: ["g-passiv", "g-adjektivdeklination", "g-futur"],
      cefr: "B2",
      titleIt: "Abschlusstest: Deutsch für die Pflege",
      exercises: [
        { t: "mcq", a: 1 },
        { t: "fill", a: ["drückenden"] },
        { t: "conj", verb: "kontrollieren", tense: "fut1", persons: [0, 1, 2, 3, 4, 5] },
        {
          t: "match",
          pairs: [{ it: "die Infektion" }, { it: "die Entzündung" }, { it: "das Druckgeschwür" }, { it: "die Ohnmacht" }]
        },
        { t: "multi", a: [0, 1, 2] },
        {
          t: "cloze",
          text: "Bei Herrn Brandt {{1}} ein multiresistenter Keim gefunden, deshalb {{2}} er isoliert.",
          gaps: [["wurde"], ["wird"]]
        },
        {
          t: "order",
          tokens: ["Die", "Tabletten", "werden", "vor", "dem", "Frühstück", "eingenommen"],
          a: ["Die Tabletten werden vor dem Frühstück eingenommen"]
        },
        {
          t: "gender",
          opts: ["der", "die", "das"],
          items: [
            { it: "Anamnese", a: "die" },
            { it: "Blutdruck", a: "der" },
            { it: "Medikament", a: "das" },
            { it: "Notfall", a: "der" },
            { it: "Pflegegrad", a: "der" },
            { it: "Hilfsmittel", a: "das" }
          ]
        },
        {
          t: "trans",
          dir: "toIt",
          a: [
            "Die Wunde ist gerötet und geschwollen",
            "Die Wunde ist geschwollen und gerötet",
            "Wunde gerötet und geschwollen",
            "Wunde geschwollen und gerötet"
          ]
        },
        {
          t: "dialogue",
          lines: [
            { sp: "A", it: "Welche Tabletten nehme ich zu Hause?" },
            {
              sp: "TY",
              choices: [
                "Das steht in Ihrem Medikationsplan. Ich erkläre ihn Ihnen gleich.",
                "Das steht in Ihr Medikationsplan. Ich erkläre ihn Ihnen gleich.",
                "Das steht in Ihrem Medikationsplan. Ich erkläre Ihnen ihn gleich."
              ],
              a: 0
            },
            { sp: "A", it: "Und wer schaut sich meine Wunde an?" },
            {
              sp: "TY",
              choices: [
                "Ihr Hausarzt wird sie nächste Woche kontrolliert.",
                "Ihr Hausarzt kontrollieren wird sie nächste Woche.",
                "Ihr Hausarzt wird sie nächste Woche kontrollieren."
              ],
              a: 2
            },
            { sp: "A", it: "Woran merke ich, dass etwas nicht stimmt?" },
            {
              sp: "TY",
              choices: [
                "Wenn die Wunde rot, warm oder geschwollen wird, rufen Sie bitte Ihren Hausarzt an.",
                "Wenn die Wunde wird rot, warm oder geschwollen, rufen Sie bitte Ihren Hausarzt an.",
                "Wenn die Wunde rot, warm oder geschwollen wird, Sie rufen bitte Ihren Hausarzt an."
              ],
              a: 0
            }
          ]
        },
        {
          t: "listen",
          it: "Die Wunde zeigt keine Zeichen einer Entzündung."
        },
        { t: "speak", it: "Die Hände werden vor und nach jedem Patientenkontakt desinfiziert." }
      ]
    }
  }
]);
