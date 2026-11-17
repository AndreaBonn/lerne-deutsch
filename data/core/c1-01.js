/* ============================================================
   Language-neutral layer: German (de-DE), structure and answer keys.
   Learner-language texts live in data/i18n/<lang>/c1-01.js.
   c1-u01 is a German unit.
   ============================================================ */
LINGUAI.addUnits("C1", [
  {
    id: "c1-u01",
    icon: "🔀",
    titleIt: "Die Gesichter von werden",
    lessons: [
      {
        id: "c1-u01-l1",
        tags: ["g-werden"],
        cefr: "C1",
        titleIt: "Ein Wort, fünf Funktionen",
        grammar: {
          examples: [
            { it: "Aus dem kleinen Start-up ist inzwischen ein Weltkonzern geworden." },
            { it: "Allmählich wird klar, dass das Projekt scheitern könnte." },
            { it: "Wir werden Sie rechtzeitig informieren." },
            { it: "Der Antrag wird gerade bearbeitet." },
            { it: "An deiner Stelle würde ich das nicht tun." },
            { it: "Er wird wohl noch im Büro sein." }
          ]
        },
        vocab: [
          { it: "die Veränderung", plural: "die Veränderungen", ex: "Die Stadt hat eine große Veränderung erlebt." },
          { it: "die Entwicklung", plural: "die Entwicklungen", ex: "Die Entwicklung der Preise macht uns Sorgen." },
          { it: "der Zustand", plural: "die Zustände", ex: "Das Haus ist in einem schlechten Zustand." },
          { it: "die Vermutung", plural: "die Vermutungen", ex: "Das ist nur eine Vermutung." },
          { it: "die Prognose", plural: "die Prognosen", ex: "Die Prognose für das nächste Jahr ist gut." },
          { it: "der Antrag", plural: "die Anträge", ex: "Ich habe einen Antrag gestellt." },
          { it: "sich verändern", ex: "Hier hat sich viel verändert." },
          { it: "entstehen", ex: "So ist die Idee entstanden." },
          { it: "vermuten", ex: "Ich vermute, dass er krank ist." },
          { it: "bearbeiten", ex: "Ihr Antrag wird bearbeitet." },
          { it: "allmählich", ex: "Es wird allmählich kalt." },
          { it: "vermutlich", ex: "Er kommt vermutlich später." }
        ],
        exercises: [
          { t: "mcq", a: 0 },
          { t: "mcq", a: 0 },
          { t: "mcq", a: 0 },
          { t: "fill", a: ["worden"] },
          { t: "fill", a: ["haben"] },
          {
            t: "cloze",
            text: "An deiner Stelle {{1}} ich das nicht {{2}}.",
            gaps: [["würde"], ["tun", "machen"]]
          },
          { t: "multi", a: [0, 1] },
          {
            t: "trans",
            dir: "toIt",
            a: [
              "Er wird den Termin wohl vergessen haben",
              "Er wird den Termin vermutlich vergessen haben",
              "Er wird wohl den Termin vergessen haben",
              "Er wird vermutlich den Termin vergessen haben",
              "Er wird den Termin wahrscheinlich vergessen haben",
              "Er wird wahrscheinlich den Termin vergessen haben"
            ]
          },
          {
            t: "listen",
            it: "Die Stadt wird immer größer. In zehn Jahren wird sie wohl doppelt so viele Einwohner haben, und viele alte Häuser werden abgerissen."
          },
          { t: "speak", it: "Wenn ich mehr Zeit hätte, würde ich Ärztin werden." }
        ]
      },
      {
        id: "c1-u01-l2",
        tags: ["g-adjektivdeklination"],
        cefr: "C1",
        titleIt: "der Bekannte, etwas Neues",
        grammar: {
          examples: [
            { it: "Ein Bekannter hat mir die Wohnung empfohlen." },
            { it: "Die Angestellten arbeiten heute länger." },
            { it: "Der Verletzte wurde ins Krankenhaus gebracht." },
            { it: "Es gibt kaum etwas Ärgerlicheres als einen verpassten Anschluss." },
            { it: "Es gibt nichts Besseres als frisches Brot." },
            { it: "Alles Gute zum Geburtstag!" }
          ]
        },
        vocab: [
          { it: "der Bekannte", plural: "die Bekannten", ex: "Ein Bekannter von mir arbeitet bei der Bahn." },
          { it: "der Angestellte", plural: "die Angestellten", ex: "Die Firma hat zwanzig Angestellte." },
          { it: "der Erwachsene", plural: "die Erwachsenen", ex: "Der Eintritt kostet für Erwachsene zehn Euro." },
          { it: "der Verwandte", plural: "die Verwandten", ex: "Am Wochenende besuchen wir Verwandte." },
          { it: "der Jugendliche", plural: "die Jugendlichen", ex: "Viele Jugendliche treffen sich im Park." },
          { it: "der Abgeordnete", plural: "die Abgeordneten", ex: "Die Abgeordneten stimmten dem Gesetz zu." },
          { it: "hervorragend", ex: "Das Essen war hervorragend." },
          { it: "mittelmäßig", ex: "Der Film war nur mittelmäßig." },
          { it: "gelungen", ex: "Das war ein gelungener Abend." },
          { it: "misslungen", ex: "Der Versuch ist misslungen." },
          { it: "überzeugend", ex: "Ihre Argumente waren überzeugend." },
          { it: "einzigartig", ex: "Die Landschaft ist einzigartig." }
        ],
        exercises: [
          { t: "mcq", a: 0 },
          { t: "mcq", a: 0 },
          { t: "mcq", a: 0 },
          { t: "mcq", a: 0 },
          {
            t: "cloze",
            text: "Der Eintritt ist für {{1}} frei, {{2}} zahlen zehn Euro.",
            gaps: [["Jugendliche"], ["Erwachsene"]]
          },
          {
            t: "match",
            pairs: [{ it: "der Bekannte" }, { it: "der Angestellte" }, { it: "der Verwandte" }, { it: "der Abgeordnete" }]
          },
          {
            t: "order",
            tokens: ["Der", "Verletzte", "wurde", "ins", "Krankenhaus", "gebracht"],
            a: ["Der Verletzte wurde ins Krankenhaus gebracht"]
          },
          {
            t: "trans",
            dir: "toIt",
            a: [
              "Ich habe mit einem Bekannten des Verletzten gesprochen",
              "Ich sprach mit einem Bekannten des Verletzten"
            ]
          },
          {
            t: "listen",
            it: "Gestern habe ich einen alten Bekannten getroffen. Er hat mir etwas Interessantes erzählt: Seine Firma sucht neue Angestellte."
          },
          { t: "speak", it: "Für Erwachsene kostet der Eintritt zwölf Euro." }
        ]
      },
      {
        id: "c1-u01-l3",
        tags: ["g-komparation", "g-adverbien"],
        cefr: "C1",
        titleIt: "höchst, äußerst, am besten",
        grammar: {
          examples: [
            { it: "Das ist ein höchst interessanter Vorschlag." },
            { it: "Die Lage ist äußerst schwierig." },
            { it: "Das Projekt war überaus erfolgreich." },
            { it: "Dieser Weg ist am kürzesten." },
            { it: "Sie hat uns aufs Herzlichste begrüßt." },
            { it: "Der Film war ziemlich langweilig." }
          ]
        },
        vocab: [
          { it: "die Qualität", plural: "die Qualitäten", ex: "Die Qualität der Produkte ist hoch." },
          { it: "der Eindruck", plural: "die Eindrücke", ex: "Sie hat einen guten Eindruck gemacht." },
          { it: "die Bewertung", plural: "die Bewertungen", ex: "Das Hotel hat sehr gute Bewertungen." },
          { it: "das Urteil", plural: "die Urteile", ex: "Bilde dir selbst ein Urteil." },
          { it: "der Maßstab", plural: "die Maßstäbe", ex: "Für uns ist das der Maßstab." },
          { it: "die Leistung", plural: "die Leistungen", ex: "Die Leistung des Teams war stark." },
          { it: "höchst", ex: "Das ist höchst ungewöhnlich." },
          { it: "äußerst", ex: "Er war äußerst freundlich." },
          { it: "überaus", ex: "Die Gäste waren überaus zufrieden." },
          { it: "ziemlich", ex: "Es ist ziemlich spät." },
          { it: "beeindruckend", ex: "Die Aussicht ist beeindruckend." },
          { it: "bemerkenswert", ex: "Das ist ein bemerkenswertes Ergebnis." }
        ],
        exercises: [
          { t: "mcq", a: 0 },
          { t: "mcq", a: 0 },
          { t: "mcq", a: 0 },
          { t: "fill", a: ["kühnsten"] },
          { t: "fill", a: ["äußerst"] },
          {
            t: "cloze",
            text: "Sie hat uns aufs {{1}} {{2}}.",
            gaps: [["Herzlichste", "herzlichste"], ["begrüßt"]]
          },
          {
            t: "match",
            pairs: [{ it: "die Bewertung" }, { it: "das Urteil" }, { it: "der Maßstab" }, { it: "der Eindruck" }]
          },
          {
            t: "trans",
            dir: "toIt",
            a: [
              "Das Ergebnis ist äußerst bemerkenswert, auch wenn die Kosten ziemlich hoch waren",
              "Das Ergebnis ist äußerst bemerkenswert, auch wenn die Kosten ziemlich hoch gewesen sind",
              "Das Ergebnis ist äußerst bemerkenswert, obwohl die Kosten ziemlich hoch waren",
              "Das Ergebnis ist äußerst bemerkenswert, obwohl die Kosten ziemlich hoch gewesen sind",
              "Das Ergebnis ist höchst bemerkenswert, auch wenn die Kosten ziemlich hoch waren",
              "Das Ergebnis ist höchst bemerkenswert, auch wenn die Kosten ziemlich hoch gewesen sind",
              "Das Ergebnis ist höchst bemerkenswert, obwohl die Kosten ziemlich hoch waren",
              "Das Ergebnis ist höchst bemerkenswert, obwohl die Kosten ziemlich hoch gewesen sind",
              "Das Ergebnis ist überaus bemerkenswert, auch wenn die Kosten ziemlich hoch waren",
              "Das Ergebnis ist überaus bemerkenswert, auch wenn die Kosten ziemlich hoch gewesen sind",
              "Das Ergebnis ist überaus bemerkenswert, obwohl die Kosten ziemlich hoch waren",
              "Das Ergebnis ist überaus bemerkenswert, obwohl die Kosten ziemlich hoch gewesen sind"
            ]
          },
          {
            t: "listen",
            it: "Die neue Ausstellung ist äußerst sehenswert. Die Bilder sind höchst ungewöhnlich, und die Besucher waren überaus beeindruckt."
          },
          { t: "speak", it: "Das ist ein höchst bemerkenswertes Ergebnis." }
        ]
      }
    ],
    test: {
      id: "c1-u01-test",
      tags: ["g-werden", "g-adjektivdeklination"],
      cefr: "C1",
      titleIt: "Test: Die Gesichter von werden",
      exercises: [
        { t: "fill", a: ["geworden"] },
        { t: "fill", a: ["Bekannten"] },
        { t: "fill", a: ["Verwandten"] },
        { t: "mcq", a: 0 },
        { t: "mcq", a: 0 },
        { t: "mcq", a: 0 },
        { t: "mcq", a: 0 },
        {
          t: "match",
          pairs: [{ it: "der Erwachsene" }, { it: "der Jugendliche" }, { it: "der Verwandte" }, { it: "der Angestellte" }]
        },
        {
          t: "listen",
          it: "Vermutlich wird das Projekt erst im nächsten Jahr abgeschlossen. Die Kosten sind äußerst hoch, und viele Angestellte werden wohl länger arbeiten müssen."
        },
        { t: "speak", it: "Ein Bekannter von mir ist Abgeordneter geworden." }
      ]
    }
  },
  {
    id: "c1-u02",
    icon: "🧩",
    titleIt: "Zustande bringen",
    lessons: [
      {
        id: "c1-u02-l1",
        tags: ["g-funktionsverbgefuege"],
        cefr: "C1",
        titleIt: "Funktionsverbgefüge",
        grammar: {
          examples: [
            { it: "Die Firma stellt uns die Räume zur Verfügung." },
            { it: "Wir müssen bis Freitag eine Entscheidung treffen." },
            { it: "Das neue Gesetz tritt im Januar in Kraft." },
            { it: "Für diese Stelle kommen nur zwei Bewerber in Frage." },
            { it: "Sie brachte ihre Enttäuschung deutlich zum Ausdruck." },
            { it: "Bitte nehmen Sie Rücksicht auf die Nachbarn." }
          ]
        },
        vocab: [
          { it: "das Vorhaben", plural: "die Vorhaben", ex: "Das Vorhaben wurde vom Stadtrat genehmigt." },
          { it: "die Maßnahme", plural: "die Maßnahmen", ex: "Die Regierung plant neue Maßnahmen gegen die Inflation." },
          { it: "die Genehmigung", plural: "die Genehmigungen", ex: "Für den Umbau brauchen wir eine Genehmigung." },
          { it: "der Auftrag", plural: "die Aufträge", ex: "Die Firma hat einen großen Auftrag bekommen." },
          { it: "die Frist", plural: "die Fristen", ex: "Die Frist läuft am 30. Juni ab." },
          { it: "der Einfluss", plural: "die Einflüsse", ex: "Das Wetter hat großen Einfluss auf die Ernte." },
          { it: "in Kraft treten", ex: "Die Regel tritt am 1. Januar in Kraft." },
          { it: "zur Verfügung stellen", ex: "Wir stellen Ihnen einen Laptop zur Verfügung." },
          { it: "in Frage kommen", ex: "Dieser Termin kommt für mich nicht in Frage." },
          { it: "eine Entscheidung treffen", ex: "Wer trifft hier die Entscheidung?" },
          { it: "Rücksicht nehmen", ex: "Nimm bitte Rücksicht auf deine Kollegen." },
          { it: "zum Ausdruck bringen", ex: "Er brachte seinen Dank zum Ausdruck." }
        ],
        exercises: [
          { t: "mcq", a: 0 },
          { t: "mcq", a: 0 },
          { t: "fill", a: ["treffen", "fällen"] },
          { t: "fill", a: ["Verfügung"] },
          { t: "fill", a: ["Ausdruck"] },
          {
            t: "cloze",
            text: "Der Stadtrat hat gestern eine wichtige Entscheidung {{1}}: Die neue Regel {{2}} im Januar in Kraft. Für die Umsetzung {{3}} die Stadt zusätzliche Mittel zur Verfügung.",
            gaps: [["getroffen", "gefällt"], ["tritt"], ["stellt"]]
          },
          {
            t: "match",
            pairs: [{ it: "in Kraft treten" }, { it: "in Frage kommen" }, { it: "Rücksicht nehmen" }, { it: "zur Verfügung stellen" }]
          },
          {
            t: "trans",
            dir: "toIt",
            a: [
              "Die Leitung hat einen Raum für die Besprechung zur Verfügung gestellt",
              "Die Leitung stellte einen Raum für die Besprechung zur Verfügung",
              "Die Leitung hat für die Besprechung einen Raum zur Verfügung gestellt",
              "Die Leitung stellte für die Besprechung einen Raum zur Verfügung"
            ]
          },
          {
            t: "listen",
            it: "Ab nächstem Monat tritt im Büro eine neue Regelung in Kraft. Die Firma stellt allen Mitarbeitern Laptops zur Verfügung; private Geräte kommen dann nicht mehr in Frage."
          },
          { t: "speak", it: "Wir müssen noch heute eine Entscheidung treffen." }
        ]
      },
      {
        id: "c1-u02-l2",
        tags: ["g-passiv"],
        cefr: "C1",
        titleIt: "Das lässt sich machen, das ist zu erledigen",
        grammar: {
          examples: [
            { it: "Das Problem lässt sich leicht lösen." },
            { it: "Der Antrag ist bis Freitag abzugeben." },
            { it: "Die Rechnung ist innerhalb von 14 Tagen zu bezahlen." },
            { it: "Diese Aufgabe ist kaum lösbar." },
            { it: "Das Wasser ist nicht trinkbar." },
            { it: "Hier darf nicht geraucht werden." }
          ]
        },
        vocab: [
          { it: "die Vorschrift", plural: "die Vorschriften", ex: "Das ist gegen die Vorschriften." },
          { it: "die Gebühr", plural: "die Gebühren", ex: "Die Gebühr beträgt 20 Euro." },
          { it: "die Bescheinigung", plural: "die Bescheinigungen", ex: "Ich brauche eine Bescheinigung vom Arbeitgeber." },
          { it: "der Nachweis", plural: "die Nachweise", ex: "Als Nachweis genügt eine Kopie." },
          { it: "die Rechnung", plural: "die Rechnungen", ex: "Die Rechnung ist schon bezahlt." },
          { it: "die Unterlage", plural: "die Unterlagen", ex: "Bitte bringen Sie alle Unterlagen mit." },
          { it: "erledigen", ex: "Das erledige ich morgen." },
          { it: "einreichen", ex: "Die Bewerbung muss bis Montag eingereicht werden." },
          { it: "ausfüllen", ex: "Füllen Sie bitte das Formular aus." },
          { it: "lösbar", ex: "Das Problem ist lösbar." },
          { it: "machbar", ex: "Der Plan ist machbar." },
          { it: "zulässig", ex: "Diese Lösung ist nicht zulässig." }
        ],
        exercises: [
          { t: "mcq", a: 0 },
          { t: "mcq", a: 0 },
          { t: "mcq", a: 0 },
          { t: "fill", a: ["bezahlen", "zahlen"] },
          { t: "fill", a: ["vorhersehbar", "absehbar", "voraussehbar"] },
          {
            t: "cloze",
            text: "Liebe Mieterinnen und Mieter, die Heizung {{1}} sich leider erst nächste Woche reparieren. Bis dahin {{2}} die Fenster geschlossen zu halten. Der Schaden ist aber {{3}}: Der Techniker kommt am Montag.",
            gaps: [["lässt"], ["sind"], ["behebbar"]]
          },
          {
            t: "order",
            tokens: ["Der", "Antrag", "ist", "bis", "Freitag", "beim", "Amt", "abzugeben"],
            a: ["Der Antrag ist bis Freitag beim Amt abzugeben", "Der Antrag ist beim Amt bis Freitag abzugeben", "Bis Freitag ist der Antrag beim Amt abzugeben", "Beim Amt ist der Antrag bis Freitag abzugeben"]
          },
          {
            t: "trans",
            dir: "toIt",
            a: [
              "Dieses Problem lässt sich nicht an einem Tag lösen",
              "Dieses Problem ist nicht an einem Tag zu lösen",
              "Dieses Problem kann nicht an einem Tag gelöst werden",
              "Dieses Problem kann man nicht an einem Tag lösen",
              "Dieses Problem lässt sich nicht in einem Tag lösen",
              "Dieses Problem ist nicht in einem Tag zu lösen",
              "Dieses Problem kann nicht in einem Tag gelöst werden",
              "Dieses Problem kann man nicht in einem Tag lösen",
              "Das Problem lässt sich nicht an einem Tag lösen",
              "Das Problem ist nicht an einem Tag zu lösen",
              "Das Problem kann nicht an einem Tag gelöst werden",
              "Das Problem kann man nicht an einem Tag lösen",
              "Das Problem lässt sich nicht in einem Tag lösen",
              "Das Problem ist nicht in einem Tag zu lösen",
              "Das Problem kann nicht in einem Tag gelöst werden",
              "Das Problem kann man nicht in einem Tag lösen"
            ]
          },
          {
            t: "listen",
            it: "Sehr geehrte Damen und Herren, das Formular ist vollständig auszufüllen und bis Ende des Monats einzureichen. Fehlende Unterlagen lassen sich auch später nachreichen."
          },
          { t: "speak", it: "Das lässt sich bestimmt bis morgen erledigen." }
        ]
      },
      {
        id: "c1-u02-l3",
        tags: ["g-trennbare-verben", "g-register"],
        cefr: "C1",
        titleIt: "umfahren oder umfahren? Redewendungen",
        grammar: {
          examples: [
            { it: "Er hat das Verkehrsschild umgefahren." },
            { it: "Wir haben den Stau umfahren." },
            { it: "Sie hat den Brief ins Englische übersetzt." },
            { it: "Die Fähre setzt uns ans andere Ufer über." },
            { it: "Das geht mir gegen den Strich." },
            { it: "Da hast du den Nagel auf den Kopf getroffen." }
          ]
        },
        vocab: [
          { it: "die Redewendung", plural: "die Redewendungen", ex: "Diese Redewendung kenne ich nicht." },
          { it: "das Sprichwort", plural: "die Sprichwörter", ex: "Wie heißt das Sprichwort noch mal?" },
          { it: "der Umweg", plural: "die Umwege", ex: "Wir haben einen Umweg gemacht." },
          { it: "das Ufer", plural: "die Ufer", ex: "Am Ufer stehen viele Bäume." },
          { it: "die Umleitung", plural: "die Umleitungen", ex: "Wegen der Baustelle gibt es eine Umleitung." },
          { it: "der Stau", plural: "die Staus", ex: "Auf der Autobahn ist ein langer Stau." },
          { it: "umfahren", ex: "Wir haben die Baustelle umfahren." },
          { it: "übersetzen", ex: "Kannst du mir den Text übersetzen?" },
          { it: "durchfahren", ex: "Wir sind die ganze Nacht durchgefahren." },
          { it: "sich unterhalten", ex: "Wir haben uns lange unterhalten." },
          { it: "wiederholen", ex: "Können Sie das bitte wiederholen?" },
          { it: "umgehen", ex: "Sie kann gut mit Kindern umgehen." }
        ],
        exercises: [
          { t: "mcq", a: 0 },
          { t: "mcq", a: 0 },
          { t: "mcq", a: 0 },
          { t: "fill", a: ["setzt"] },
          {
            t: "cloze",
            text: "Die Innenstadt war wegen der Baustelle für den Verkehr gesperrt, deshalb mussten wir sie {{1}}. Danach sind wir die ganze Nacht {{2}} und kamen erst am Morgen an.",
            gaps: [["umfahren"], ["durchgefahren"]]
          },
          {
            t: "match",
            pairs: [{ it: "gegen den Strich gehen" }, { it: "den Nagel auf den Kopf treffen" }, { it: "auf die Nerven gehen" }, { it: "auf die lange Bank schieben" }]
          },
          { t: "multi", a: [0, 1] },
          {
            t: "trans",
            dir: "toIt",
            a: [
              "Diese Redewendung lässt sich nicht wörtlich übersetzen",
              "Diese Redewendung kann man nicht wörtlich übersetzen",
              "Diese Redewendung ist nicht wörtlich zu übersetzen",
              "Diese Redewendung kann nicht wörtlich übersetzt werden",
              "Diese Redewendung lässt sich nicht Wort für Wort übersetzen",
              "Diese Redewendung kann man nicht Wort für Wort übersetzen",
              "Diese Redewendung ist nicht Wort für Wort zu übersetzen",
              "Diese Redewendung kann nicht Wort für Wort übersetzt werden"
            ]
          },
          {
            t: "listen",
            it: "Wegen eines Unfalls auf der A8 gibt es eine Umleitung. Am besten umfahren Sie den Bereich über die Bundesstraße; rechnen Sie mit einem Umweg von zwanzig Minuten."
          },
          { t: "speak", it: "Diese Redewendung lässt sich kaum übersetzen." }
        ]
      }
    ],
    test: {
      id: "c1-u02-test",
      tags: ["g-funktionsverbgefuege", "g-passiv"],
      cefr: "C1",
      titleIt: "Test: Zustande bringen",
      exercises: [
        { t: "fill", a: ["tritt"] },
        { t: "fill", a: ["lässt"] },
        { t: "fill", a: ["abzugeben"] },
        { t: "fill", a: ["umfahren"] },
        { t: "mcq", a: 0 },
        { t: "mcq", a: 0 },
        { t: "mcq", a: 0 },
        {
          t: "match",
          pairs: [{ it: "zur Verfügung stellen" }, { it: "eine Entscheidung treffen" }, { it: "in Frage kommen" }, { it: "zum Ausdruck bringen" }]
        },
        {
          t: "listen",
          it: "Ab Januar tritt eine neue Vorschrift in Kraft: Alle Anträge sind online einzureichen. Die Stadt stellt dafür in jeder Bibliothek Computer zur Verfügung."
        },
        { t: "speak", it: "Die Unterlagen sind bis Ende des Monats einzureichen." }
      ]
    }
  },
  {
    id: "c1-u03",
    icon: "📑",
    titleIt: "Register und Textaufbau",
    lessons: [
      {
        id: "c1-u03-l1",
        tags: ["g-nominalstil", "g-register"],
        cefr: "C1",
        titleIt: "Amtsdeutsch",
        grammar: {
          examples: [
            { it: "Nach Abschluss der Arbeiten wird die Straße wieder freigegeben." },
            { it: "Bei Nichtbeachtung wird ein Bußgeld erhoben." },
            { it: "Zur Vermeidung von Wartezeiten wird um Terminvereinbarung gebeten." },
            { it: "Wegen des starken Regens fiel das Konzert aus." },
            { it: "Die Antragstellung erfolgt online." },
            { it: "Vor Betreten der Baustelle ist ein Helm aufzusetzen." }
          ]
        },
        vocab: [
          { it: "der Bescheid", plural: "die Bescheide", ex: "Den Bescheid erhalten Sie per Post." },
          { it: "das Bußgeld", plural: "die Bußgelder", ex: "Für Falschparken droht ein Bußgeld." },
          { it: "die Behörde", plural: "die Behörden", ex: "Wenden Sie sich an die zuständige Behörde." },
          { it: "die Zuständigkeit", plural: "die Zuständigkeiten", ex: "Das fällt nicht in unsere Zuständigkeit." },
          { it: "die Verordnung", plural: "die Verordnungen", ex: "Die neue Verordnung gilt ab Mai." },
          { it: "die Nichtbeachtung", plural: "-", ex: "Bei Nichtbeachtung wird ein Bußgeld fällig." },
          { it: "erfolgen", ex: "Die Zahlung erfolgt per Überweisung." },
          { it: "erheben", ex: "Die Stadt erhebt eine Gebühr." },
          { it: "gewähren", ex: "Wir gewähren Ihnen einen Rabatt." },
          { it: "beantragen", ex: "Ich habe ein Visum beantragt." },
          { it: "zuständig", ex: "Wer ist dafür zuständig?" },
          { it: "gemäß", ex: "Gemäß der Verordnung ist das verboten." }
        ],
        exercises: [
          { t: "mcq", a: 0 },
          { t: "mcq", a: 0 },
          { t: "mcq", a: 0 },
          { t: "fill", a: ["erfolgt"] },
          {
            t: "cloze",
            text: "Sehr geehrte Bürgerinnen und Bürger, {{1}} Abschluss der Bauarbeiten wird die Straße wieder freigegeben. {{2}} Vermeidung von Wartezeiten bitten wir um Terminvereinbarung.",
            gaps: [["nach"], ["Zur"]]
          },
          {
            t: "match",
            pairs: [{ it: "der Bescheid" }, { it: "die Behörde" }, { it: "das Bußgeld" }, { it: "die Verordnung" }]
          },
          {
            t: "order",
            tokens: ["Vor", "Betreten", "der", "Baustelle", "ist", "ein", "Helm", "aufzusetzen"],
            a: ["Vor Betreten der Baustelle ist ein Helm aufzusetzen"]
          },
          {
            t: "trans",
            dir: "toIt",
            a: [
              "Nachdem die Arbeiten abgeschlossen sind, wird die Straße freigegeben",
              "Nachdem die Arbeiten abgeschlossen worden sind, wird die Straße freigegeben",
              "Sobald die Arbeiten abgeschlossen sind, wird die Straße freigegeben",
              "Sobald die Arbeiten abgeschlossen worden sind, wird die Straße freigegeben",
              "Wenn die Arbeiten abgeschlossen sind, wird die Straße freigegeben",
              "Wenn die Arbeiten abgeschlossen worden sind, wird die Straße freigegeben"
            ]
          },
          {
            t: "listen",
            it: "Sehr geehrte Damen und Herren, gemäß der neuen Verordnung erfolgt die Antragstellung ab Mai ausschließlich online. Bei Fragen wenden Sie sich bitte an die zuständige Behörde."
          },
          { t: "speak", it: "Die Zahlung erfolgt per Überweisung." }
        ]
      },
      {
        id: "c1-u03-l2",
        tags: ["g-modalpartikeln", "g-register"],
        cefr: "C1",
        titleIt: "So spricht man wirklich",
        grammar: {
          examples: [
            { it: "Komm doch einfach mit!" },
            { it: "Das ist ja unglaublich!" },
            { it: "Hast du mal kurz Zeit?" },
            { it: "Na ja, kann sein." },
            { it: "Weiß ich nicht." },
            { it: "Passt schon." }
          ]
        },
        vocab: [
          { it: "die Ausrede", plural: "die Ausreden", ex: "Das ist doch nur eine Ausrede." },
          { it: "die Andeutung", plural: "die Andeutungen", ex: "Er hat eine Andeutung gemacht." },
          { it: "der Tonfall", plural: "die Tonfälle", ex: "Ihr Tonfall war unfreundlich." },
          { it: "die Floskel", plural: "die Floskeln", ex: "Das ist nur eine höfliche Floskel." },
          { it: "das Missverständnis", plural: "die Missverständnisse", ex: "Das war ein Missverständnis." },
          { it: "die Umgangssprache", plural: "-", ex: "In der Umgangssprache sagt man das anders." },
          { it: "quatschen", ex: "Wir haben stundenlang gequatscht." },
          { it: "sich verabreden", ex: "Wir haben uns fürs Kino verabredet." },
          { it: "nachfragen", ex: "Ich frage morgen noch mal nach." },
          { it: "eigentlich", ex: "Eigentlich habe ich keine Zeit." },
          { it: "sowieso", ex: "Ich gehe sowieso einkaufen." },
          { it: "halt", ex: "Das ist halt so." }
        ],
        exercises: [
          { t: "mcq", a: 0 },
          { t: "mcq", a: 0 },
          { t: "mcq", a: 0 },
          { t: "fill", a: ["mal"] },
          { t: "fill", a: ["halt", "eben"] },
          {
            t: "cloze",
            text: "Kommst du heute mit ins Kino? Ich weiß nicht, ich bin {{1}} ziemlich müde. Ach, komm {{2}} mit, der Film ist {{3}} super!",
            gaps: [["eigentlich"], ["doch"], ["echt", "wirklich"]]
          },
          { t: "multi", a: [0, 1] },
          {
            t: "trans",
            dir: "toIt",
            a: [
              "Komm doch mit, du gehst sowieso in die Stadt",
              "Komm doch mit, du gehst ja sowieso in die Stadt",
              "Komm doch mit, du gehst doch sowieso in die Stadt",
              "Komm mit, du gehst sowieso in die Stadt",
              "Komm mit, du gehst ja sowieso in die Stadt",
              "Komm mit, du gehst doch sowieso in die Stadt"
            ]
          },
          {
            t: "listen",
            it: "Na, wie war es denn gestern? Ach, eigentlich ganz gut. Der Film war halt ein bisschen lang, aber sonst echt super."
          },
          { t: "speak", it: "Komm doch einfach mit, das wird bestimmt lustig!" }
        ]
      },
      {
        id: "c1-u03-l3",
        tags: ["g-konnektoren", "g-es"],
        cefr: "C1",
        titleIt: "Kohäsion: darauf, dass ...",
        grammar: {
          examples: [
            { it: "Ich freue mich darauf, dass du kommst." },
            { it: "Es ist wichtig, dass alle pünktlich sind." },
            { it: "Wir haben uns darauf geeinigt, den Termin zu verschieben." },
            { it: "Er besteht darauf, dass wir bleiben." },
            { it: "Dieser Punkt ist entscheidend, deshalb möchte ich näher darauf eingehen." },
            { it: "Darüber hinaus gibt es weitere Probleme." }
          ]
        },
        vocab: [
          { it: "der Zusammenhang", plural: "die Zusammenhänge", ex: "In diesem Zusammenhang möchte ich etwas ergänzen." },
          { it: "die Einleitung", plural: "die Einleitungen", ex: "In der Einleitung nennt die Autorin das Thema." },
          { it: "der Schluss", plural: "die Schlüsse", ex: "Am Schluss fasst er alles zusammen." },
          { it: "der Absatz", plural: "die Absätze", ex: "Lesen Sie bitte den zweiten Absatz." },
          { it: "der Bezug", plural: "die Bezüge", ex: "Mit Bezug auf Ihre Anfrage sende ich Ihnen das Angebot." },
          { it: "die Gliederung", plural: "die Gliederungen", ex: "Die Gliederung des Textes ist klar." },
          { it: "sich einigen", ex: "Wir haben uns auf einen Termin geeinigt." },
          { it: "bestehen", ex: "Sie besteht auf einer Antwort." },
          { it: "eingehen", ex: "Auf diese Frage gehe ich später ein." },
          { it: "hinweisen", ex: "Ich möchte darauf hinweisen, dass die Frist bald endet." },
          { it: "darüber hinaus", ex: "Darüber hinaus gibt es weitere Probleme." },
          { it: "schließlich", ex: "Schließlich haben wir doch eine Lösung gefunden." }
        ],
        exercises: [
          { t: "mcq", a: 0 },
          { t: "mcq", a: 0 },
          { t: "mcq", a: 0 },
          { t: "fill", a: ["darauf"] },
          { t: "fill", a: ["ein"] },
          {
            t: "cloze",
            text: "{{1}} möchte ich das Problem beschreiben. {{2}} nenne ich mögliche Lösungen, und {{3}} ziehe ich ein Fazit.",
            gaps: [["Zuerst", "Zunächst", "Erstens"], ["Danach", "Dann", "Anschließend", "Zweitens"], ["schließlich", "abschließend", "zuletzt", "zum Schluss", "drittens"]]
          },
          {
            t: "match",
            pairs: [{ it: "die Einleitung" }, { it: "der Absatz" }, { it: "der Zusammenhang" }, { it: "die Gliederung" }]
          },
          {
            t: "trans",
            dir: "toIt",
            a: [
              "Er besteht darauf, dass alle an der Besprechung teilnehmen",
              "Er besteht darauf, dass alle an der Sitzung teilnehmen"
            ]
          },
          {
            t: "listen",
            it: "In meinem Vortrag gehe ich zuerst auf die Ursachen ein. Darüber hinaus möchte ich darauf hinweisen, dass es bereits erste Lösungen gibt. Schließlich fasse ich alles kurz zusammen."
          },
          { t: "speak", it: "Ich möchte darauf hinweisen, dass die Frist morgen endet." }
        ]
      }
    ],
    test: {
      id: "c1-u03-test",
      tags: ["g-werden", "g-funktionsverbgefuege", "g-nominalstil"],
      cefr: "C1",
      titleIt: "Test: Register und Textaufbau",
      exercises: [
        { t: "fill", a: ["geworden"] },
        { t: "fill", a: ["Kraft"] },
        { t: "fill", a: ["erfolgt"] },
        { t: "fill", a: ["treffen", "fällen"] },
        { t: "fill", a: ["darauf"] },
        { t: "fill", a: ["Nach"] },
        { t: "mcq", a: 0 },
        { t: "mcq", a: 0 },
        { t: "mcq", a: 0 },
        { t: "mcq", a: 0 },
        {
          t: "trans",
          dir: "toIt",
          a: [
              "Wegen des starken Regens wurde das Konzert abgesagt",
              "Aufgrund des starken Regens wurde das Konzert abgesagt",
              "Das Konzert wurde wegen des starken Regens abgesagt",
              "Das Konzert wurde aufgrund des starken Regens abgesagt"
            ]
        },
        { t: "speak", it: "Nach Abschluss der Arbeiten wird die Straße wieder freigegeben." }
      ]
    }
  }
]);
