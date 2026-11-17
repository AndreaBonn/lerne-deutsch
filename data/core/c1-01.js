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
            { it: "Sie wird Ärztin." },
            { it: "Es wird langsam dunkel." },
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
          { t: "fill", a: ["wird"] },
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
              "Der Antrag wird gerade bearbeitet",
              "Der Antrag wird im Moment bearbeitet",
              "Der Antrag wird momentan bearbeitet",
              "Der Antrag wird zurzeit bearbeitet",
              "Der Antrag wird jetzt bearbeitet",
              "Der Antrag wird gerade geprüft"
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
            { it: "Ich habe etwas Neues gelernt." },
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
              "Ich habe etwas Neues gelernt",
              "Ich lernte etwas Neues",
              "Ich habe heute etwas Neues gelernt"
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
          { t: "fill", a: ["kürzesten"] },
          { t: "fill", a: ["äußerst"] },
          {
            t: "cloze",
            text: "Sie hat uns {{1}} Herzlichste {{2}}.",
            gaps: [["aufs"], ["begrüßt"]]
          },
          {
            t: "match",
            pairs: [{ it: "höchst" }, { it: "äußerst" }, { it: "ziemlich" }, { it: "überaus" }]
          },
          {
            t: "trans",
            dir: "toIt",
            a: [
              "Der Film war ziemlich langweilig",
              "Der Film ist ziemlich langweilig gewesen"
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
        { t: "fill", a: ["Bekannter"] },
        { t: "fill", a: ["äußerst"] },
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
  }
]);
