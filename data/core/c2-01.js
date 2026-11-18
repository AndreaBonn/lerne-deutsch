/* ============================================================
   Language-neutral layer: German (de-DE), structure and answer keys.
   Learner-language texts live in data/i18n/<lang>/c2-01.js.
   c2-u01, c2-u02 and c2-u03 are German units.
   ============================================================ */
LINGUAI.addUnits("C2", [
  {
    id: "c2-u01",
    icon: "📜",
    titleIt: "Erweiterte Attribute",
    lessons: [
      {
        id: "c2-u01-l1",
        tags: ["g-partizipialattribut"],
        cefr: "C2",
        titleIt: "Das erweiterte Partizipialattribut",
        grammar: {
          examples: [
            { it: "Die seit Jahren von Fachleuten geforderte Reform des Urheberrechts lässt weiter auf sich warten." },
            { it: "Die in der Studie befragten, überwiegend jungen Erwachsenen zeigten ein erstaunlich geringes Vertrauen in die Medien." },
            { it: "Die sich seit Jahrzehnten verschärfende Wohnungsnot ist kein neues Phänomen." },
            { it: "Der Bericht stützt sich auf die von der Kommission im vergangenen Herbst vorgelegten Daten." },
            { it: "Die dem Gericht vorliegenden Gutachten widersprechen einander in wesentlichen Punkten." },
            { it: "Das von vielen für überholt gehaltene Modell erweist sich als erstaunlich tragfähig." }
          ]
        },
        vocab: [
          { it: "die Abhandlung", plural: "die Abhandlungen", ex: "Die Abhandlung erschien zuerst in einer Fachzeitschrift." },
          { it: "der Befund", plural: "die Befunde", ex: "Der Befund ist eindeutig." },
          { it: "das Gutachten", plural: "die Gutachten", ex: "Das Gericht hat ein Gutachten in Auftrag gegeben." },
          { it: "die Hypothese", plural: "die Hypothesen", ex: "Die Hypothese ließ sich nicht bestätigen." },
          { it: "der Gegenstand", plural: "die Gegenstände", ex: "Gegenstand der Untersuchung ist die Sprache der Verwaltung." },
          { it: "die Untersuchung", plural: "die Untersuchungen", ex: "Die Untersuchung dauerte drei Jahre." },
          { it: "vorlegen", ex: "Die Kommission hat ihren Bericht vorgelegt." },
          { it: "sich erweisen", ex: "Die These hat sich als haltlos erwiesen." },
          { it: "nachweisen", ex: "Die Wirkung des Medikaments ließ sich nicht nachweisen." },
          { it: "sich stützen auf", ex: "Das Urteil stützt sich auf zwei Gutachten." },
          { it: "überwiegend", ex: "Die Befragten waren überwiegend zufrieden." },
          { it: "maßgeblich", ex: "Sie war maßgeblich an der Studie beteiligt." }
        ],
        exercises: [
          { t: "mcq", a: 0 },
          { t: "mcq", a: 0 },
          { t: "mcq", a: 0 },
          { t: "fill", a: ["vorliegende"] },
          {
            t: "cloze",
            text: "Die von zahlreichen Forschern seit Langem {{1}} Folgen des Klimawandels treffen vor allem die ohnehin {{2}} Regionen des Südens.",
            gaps: [["vorhergesagten", "vorausgesagten", "prognostizierten"], ["benachteiligten"]]
          },
          {
            t: "match",
            pairs: [{ it: "das Gutachten" }, { it: "der Befund" }, { it: "die Abhandlung" }, { it: "die Hypothese" }]
          },
          { t: "multi", a: [0, 1] },
          {
            t: "trans",
            dir: "toIt",
            a: [
              "Die von der Universität letzte Woche vorgelegte Studie widerspricht den bisher verbreiteten Annahmen",
              "Die von der Universität letzte Woche vorgelegte Studie widerspricht den bislang verbreiteten Annahmen",
              "Die letzte Woche von der Universität vorgelegte Studie widerspricht den bisher verbreiteten Annahmen",
              "Die letzte Woche von der Universität vorgelegte Studie widerspricht den bislang verbreiteten Annahmen",
              "Die von der Universität vergangene Woche vorgelegte Studie widerspricht den bisher verbreiteten Annahmen",
              "Die von der Universität vergangene Woche vorgelegte Studie widerspricht den bislang verbreiteten Annahmen",
              "Die vergangene Woche von der Universität vorgelegte Studie widerspricht den bisher verbreiteten Annahmen",
              "Die vergangene Woche von der Universität vorgelegte Studie widerspricht den bislang verbreiteten Annahmen",
              "Die von der Universität in der letzten Woche vorgelegte Studie widerspricht den bisher verbreiteten Annahmen",
              "Die von der Universität in der letzten Woche vorgelegte Studie widerspricht den bislang verbreiteten Annahmen",
              "Die in der letzten Woche von der Universität vorgelegte Studie widerspricht den bisher verbreiteten Annahmen",
              "Die in der letzten Woche von der Universität vorgelegte Studie widerspricht den bislang verbreiteten Annahmen",
              "Die von der Universität in der vergangenen Woche vorgelegte Studie widerspricht den bisher verbreiteten Annahmen",
              "Die von der Universität in der vergangenen Woche vorgelegte Studie widerspricht den bislang verbreiteten Annahmen",
              "Die in der vergangenen Woche von der Universität vorgelegte Studie widerspricht den bisher verbreiteten Annahmen",
              "Die in der vergangenen Woche von der Universität vorgelegte Studie widerspricht den bislang verbreiteten Annahmen"
            ]
          },
          {
            t: "listen",
            it: "Die in der vorliegenden Abhandlung vertretene These stützt sich auf überwiegend ältere Befunde. Die seither erschienenen Untersuchungen lassen erhebliche Zweifel an ihr aufkommen."
          },
          { t: "speak", it: "Die seit Jahren geforderte Reform lässt weiter auf sich warten." }
        ]
      },
      {
        id: "c2-u01-l2",
        tags: ["g-partizipialattribut", "g-passiv"],
        cefr: "C2",
        titleIt: "Die zu lösende Aufgabe",
        grammar: {
          examples: [
            { it: "Die zu lösende Aufgabe ist komplexer als erwartet." },
            { it: "Die bis Monatsende einzureichenden Unterlagen finden Sie im Anhang." },
            { it: "Das ist ein nicht zu unterschätzendes Risiko." },
            { it: "Die zu erwartenden Kosten übersteigen das Budget bei Weitem." },
            { it: "Die Aufgabe ist bis Freitag zu lösen." },
            { it: "Die noch zu klärenden Fragen werden in der nächsten Sitzung behandelt." }
          ]
        },
        vocab: [
          { it: "die Bestimmung", plural: "die Bestimmungen", ex: "Die Bestimmung gilt nur für Neubauten." },
          { it: "der Bevollmächtigte", plural: "die Bevollmächtigten", ex: "Der Bevollmächtigte unterschreibt im Namen der Firma." },
          { it: "die Klausel", plural: "die Klauseln", ex: "Die Klausel ist unwirksam." },
          { it: "das Rechtsmittel", plural: "die Rechtsmittel", ex: "Gegen das Urteil kann ein Rechtsmittel eingelegt werden." },
          { it: "die Auflage", plural: "die Auflagen", ex: "Die Genehmigung wurde unter strengen Auflagen erteilt." },
          { it: "der Sachverhalt", plural: "die Sachverhalte", ex: "Der Sachverhalt ist noch zu klären." },
          { it: "nachreichen", ex: "Fehlende Unterlagen sind nachzureichen." },
          { it: "beanstanden", ex: "Der Prüfer hat mehrere Punkte beanstandet." },
          { it: "unterschätzen", ex: "Man sollte die Risiken nicht unterschätzen." },
          { it: "gewährleisten", ex: "Die Sicherheit muss jederzeit gewährleistet sein." },
          { it: "unerlässlich", ex: "Eine gründliche Prüfung ist unerlässlich." },
          { it: "fristgerecht", ex: "Der Antrag ist fristgerecht eingegangen." }
        ],
        exercises: [
          { t: "mcq", a: 0 },
          { t: "mcq", a: 0 },
          { t: "mcq", a: 0 },
          { t: "fill", a: ["unterschätzendes"] },
          { t: "fill", a: ["einzureichenden"] },
          {
            t: "cloze",
            text: "Der Bericht nennt drei bis Jahresende zu {{1}} Probleme und eine kaum zu {{2}} Zahl offener Verfahren.",
            gaps: [["lösende", "behebende"], ["beziffernde"]]
          },
          {
            t: "order",
            tokens: ["Die", "von", "der", "Behörde", "zu", "prüfenden", "Anträge", "liegen", "seit", "Wochen", "vor"],
            a: [
              "Die von der Behörde zu prüfenden Anträge liegen seit Wochen vor",
              "Seit Wochen liegen die von der Behörde zu prüfenden Anträge vor"
            ]
          },
          {
            t: "trans",
            dir: "toIt",
            a: [
              "Die am Vertrag vorzunehmenden Änderungen müssen von beiden Vertragsparteien genehmigt werden",
              "Die am Vertrag vorzunehmenden Änderungen müssen von beiden Parteien genehmigt werden",
              "Die am Vertrag vorzunehmenden Änderungen sind von beiden Vertragsparteien zu genehmigen",
              "Die am Vertrag vorzunehmenden Änderungen sind von beiden Parteien zu genehmigen",
              "Die an dem Vertrag vorzunehmenden Änderungen müssen von beiden Vertragsparteien genehmigt werden",
              "Die an dem Vertrag vorzunehmenden Änderungen müssen von beiden Parteien genehmigt werden",
              "Die an dem Vertrag vorzunehmenden Änderungen sind von beiden Vertragsparteien zu genehmigen",
              "Die an dem Vertrag vorzunehmenden Änderungen sind von beiden Parteien zu genehmigen",
              "Die vorzunehmenden Änderungen am Vertrag müssen von beiden Vertragsparteien genehmigt werden",
              "Die vorzunehmenden Änderungen am Vertrag müssen von beiden Parteien genehmigt werden",
              "Die vorzunehmenden Änderungen am Vertrag sind von beiden Vertragsparteien zu genehmigen",
              "Die vorzunehmenden Änderungen am Vertrag sind von beiden Parteien zu genehmigen",
              "Die vorzunehmenden Vertragsänderungen müssen von beiden Vertragsparteien genehmigt werden",
              "Die vorzunehmenden Vertragsänderungen müssen von beiden Parteien genehmigt werden",
              "Die vorzunehmenden Vertragsänderungen sind von beiden Vertragsparteien zu genehmigen",
              "Die vorzunehmenden Vertragsänderungen sind von beiden Parteien zu genehmigen"
            ]
          },
          {
            t: "listen",
            it: "Die vom Antragsteller nachzureichenden Unterlagen sind bis Monatsende einzureichen. Andernfalls ist mit einer Ablehnung des Antrags zu rechnen."
          },
          { t: "speak", it: "Die zu erwartenden Kosten sind kaum zu beziffern." }
        ]
      },
      {
        id: "c2-u01-l3",
        tags: ["g-funktionsverbgefuege", "g-nominalstil"],
        cefr: "C2",
        titleIt: "Funktionsverbgefüge im Text",
        grammar: {
          examples: [
            { it: "Die neue Methode kommt bereits in mehreren Kliniken zur Anwendung." },
            { it: "Die Ergebnisse der Studie wurden von Fachleuten in Zweifel gezogen." },
            { it: "Das Gesetz trägt den veränderten Lebensverhältnissen nicht ausreichend Rechnung." },
            { it: "Die Autorin stellt ihre These anhand zahlreicher Beispiele unter Beweis." },
            { it: "Der Vorschlag stieß im Ausschuss auf breite Zustimmung." },
            { it: "Die Frage der Finanzierung wurde in der Sitzung nicht zur Sprache gebracht." }
          ]
        },
        vocab: [
          { it: "zur Anwendung kommen", ex: "Das Verfahren kommt nur in Ausnahmefällen zur Anwendung." },
          { it: "in Zweifel ziehen", ex: "Niemand zieht seine Kompetenz in Zweifel." },
          { it: "Rechnung tragen", ex: "Der Entwurf trägt den Bedenken der Kritiker Rechnung." },
          { it: "unter Beweis stellen", ex: "Sie hat ihr Können unter Beweis gestellt." },
          { it: "zur Sprache bringen", ex: "Er brachte das Problem in der Sitzung zur Sprache." },
          { it: "in Betracht ziehen", ex: "Eine Verschiebung wird ernsthaft in Betracht gezogen." },
          { it: "Berücksichtigung finden", ex: "Ihre Vorschläge haben im Bericht Berücksichtigung gefunden." },
          { it: "auf Kritik stoßen", ex: "Der Plan ist auf scharfe Kritik gestoßen." },
          { it: "in Abrede stellen", ex: "Der Minister stellte jede Verantwortung in Abrede." },
          { it: "zur Debatte stehen", ex: "Diese Frage steht heute nicht zur Debatte." },
          { it: "die Stellungnahme", plural: "die Stellungnahmen", ex: "Der Verband hat eine Stellungnahme veröffentlicht." },
          { it: "die Gepflogenheit", plural: "die Gepflogenheiten", ex: "Das entspricht den diplomatischen Gepflogenheiten." }
        ],
        exercises: [
          { t: "mcq", a: 0 },
          { t: "mcq", a: 0 },
          { t: "mcq", a: 0 },
          { t: "fill", a: ["Rechnung"] },
          { t: "fill", a: ["Debatte", "Diskussion", "Disposition"] },
          {
            t: "cloze",
            text: "Die Kommission hat die Vorschläge der Opposition zwar {{1}} Betracht gezogen, ihnen im Abschlussbericht aber kaum {{2}} getragen.",
            gaps: [["in"], ["Rechnung"]]
          },
          {
            t: "match",
            pairs: [{ it: "in Abrede stellen" }, { it: "unter Beweis stellen" }, { it: "zur Sprache bringen" }, { it: "auf Kritik stoßen" }]
          },
          {
            t: "trans",
            dir: "toIt",
            a: [
              "Die Einwände der Bürger haben im Entwurf keine Berücksichtigung gefunden",
              "Die Einwände der Bürger fanden im Entwurf keine Berücksichtigung",
              "Die Einwände der Bürger haben keine Berücksichtigung im Entwurf gefunden",
              "Die Einwände der Bürger fanden keine Berücksichtigung im Entwurf",
              "Die Einwände der Bürger sind im Entwurf nicht berücksichtigt worden",
              "Die Einwände der Bürger wurden im Entwurf nicht berücksichtigt",
              "Im Entwurf haben die Einwände der Bürger keine Berücksichtigung gefunden",
              "Im Entwurf fanden die Einwände der Bürger keine Berücksichtigung",
              "Im Entwurf sind die Einwände der Bürger nicht berücksichtigt worden",
              "Im Entwurf wurden die Einwände der Bürger nicht berücksichtigt"
            ]
          },
          {
            t: "listen",
            it: "Das in der Studie beschriebene Verfahren kommt bislang nur selten zur Anwendung. Die Autoren ziehen seine Wirksamkeit nicht in Zweifel, bringen aber die hohen Kosten zur Sprache."
          },
          { t: "speak", it: "Die Ministerin stellte jede Verantwortung in Abrede." }
        ]
      }
    ],
    test: {
      id: "c2-u01-test",
      tags: ["g-partizipialattribut", "g-funktionsverbgefuege"],
      cefr: "C2",
      titleIt: "Test: Erweiterte Attribute",
      exercises: [
        { t: "fill", a: ["vorgelegten"] },
        { t: "fill", a: ["abzugebenden"] },
        { t: "fill", a: ["Anwendung"] },
        { t: "fill", a: ["Beweis"] },
        { t: "mcq", a: 0 },
        { t: "mcq", a: 0 },
        { t: "mcq", a: 0 },
        { t: "mcq", a: 0 },
        {
          t: "listen",
          it: "Die von der Expertenkommission vorgelegten Befunde stießen auf breite Zustimmung. Die daraus abzuleitenden Maßnahmen sollen im kommenden Jahr zur Anwendung kommen."
        },
        { t: "speak", it: "Die noch zu klärenden Fragen werden in der nächsten Sitzung zur Sprache gebracht." }
      ]
    }
  },
  {
    id: "c2-u02",
    icon: "🧩",
    titleIt: "Plural und Wortbildung",
    lessons: [
      {
        id: "c2-u02-l1",
        tags: ["g-plural", "g-wortbildung"],
        cefr: "C2",
        titleIt: "Die Banken und die Bänke",
        grammar: {
          examples: [
            { it: "Die Banken haben die Zinsen erneut angehoben." },
            { it: "Vor dem Rathaus wurden neue Bänke aufgestellt." },
            { it: "Mit wenigen Worten hat sie das Problem auf den Punkt gebracht." },
            { it: "Das Wörterbuch verzeichnet über hunderttausend Wörter." },
            { it: "Die Ratschläge ihrer Kollegen hat sie dankend angenommen." },
            { it: "Nach den heftigen Regenfällen trat der Fluss über die Ufer." }
          ]
        },
        vocab: [
          { it: "das Geldinstitut", plural: "die Geldinstitute", ex: "Mehrere Geldinstitute haben ihre Gebühren erhöht." },
          { it: "die Sitzbank", plural: "die Sitzbänke", ex: "Am Ufer stehen ein paar hölzerne Sitzbänke." },
          { it: "die Schraubenmutter", plural: "die Schraubenmuttern", ex: "Die Schraubenmutter hat sich gelockert." },
          { it: "die Streitigkeit", plural: "die Streitigkeiten", ex: "Die Streitigkeiten zwischen den Erben zogen sich über Jahre hin." },
          { it: "der Regenfall", plural: "die Regenfälle", ex: "Heftige Regenfälle haben die Ernte vernichtet." },
          { it: "der Schneefall", plural: "die Schneefälle", ex: "Starke Schneefälle legten den Verkehr lahm." },
          { it: "die Sportart", plural: "die Sportarten", ex: "Fechten ist eine der ältesten olympischen Sportarten." },
          { it: "die Redewendung", plural: "die Redewendungen", ex: "Die Redewendung klingt heute etwas altmodisch." },
          { it: "der Bedeutungsunterschied", plural: "die Bedeutungsunterschiede", ex: "Zwischen den beiden Pluralformen besteht ein Bedeutungsunterschied." },
          { it: "die Pluralform", plural: "die Pluralformen", ex: "Manche Substantive haben zwei Pluralformen." },
          { it: "mehrdeutig", ex: "Der Begriff ist mehrdeutig." },
          { it: "unterscheiden", ex: "Man muss die beiden Bedeutungen sorgfältig unterscheiden." }
        ],
        exercises: [
          { t: "mcq", a: 0 },
          { t: "mcq", a: 0 },
          { t: "mcq", a: 0 },
          { t: "fill", a: ["Wörter"] },
          { t: "fill", a: ["Muttern", "Schraubenmuttern"] },
          {
            t: "cloze",
            text: "Die heftigen {{1}} der letzten Wochen haben die Ernte vernichtet; nun bekommen die Landwirte von allen Seiten gut gemeinte {{2}}.",
            gaps: [["Regenfälle"], ["Ratschläge"]]
          },
          {
            t: "match",
            pairs: [{ it: "die Banken" }, { it: "die Bänke" }, { it: "die Worte" }, { it: "die Wörter" }]
          },
          {
            t: "trans",
            dir: "toIt",
            a: [
              "Die Banken haben die Ratschläge der Experten ignoriert",
              "Die Banken haben die Ratschläge der Fachleute ignoriert",
              "Die Banken ignorierten die Ratschläge der Experten",
              "Die Banken ignorierten die Ratschläge der Fachleute",
              "Die Banken haben die Ratschläge der Experten missachtet",
              "Die Banken haben die Ratschläge der Fachleute missachtet",
              "Die Banken missachteten die Ratschläge der Experten",
              "Die Banken missachteten die Ratschläge der Fachleute"
            ]
          },
          {
            t: "listen",
            it: "Auf den Bänken vor der Bank warteten die Kunden seit dem frühen Morgen. Mit wenigen Worten erklärte ein Angestellter, warum die Filiale geschlossen blieb."
          },
          { t: "speak", it: "Mit wenigen Worten hat sie alles gesagt." }
        ]
      },
      {
        id: "c2-u02-l2",
        tags: ["g-wortbildung"],
        cefr: "C2",
        titleIt: "Komposita und Fugenelement",
        grammar: {
          examples: [
            { it: "Die Arbeitsbedingungen in der Pflege haben sich kaum verbessert." },
            { it: "Der Hundebesitzer haftet für die Schäden." },
            { it: "Die Sonnenenergie deckt bereits einen Teil des Strombedarfs." },
            { it: "Das Kinderbuch wurde in zwanzig Sprachen übersetzt." },
            { it: "Ihr Liebesbrief kam nie an." },
            { it: "Die Schulpflicht beginnt in der Regel mit sechs Jahren." }
          ]
        },
        vocab: [
          { it: "das Kompositum", plural: "die Komposita", ex: "Das Deutsche bildet Komposita fast ohne Grenzen." },
          { it: "das Grundwort", plural: "die Grundwörter", ex: "Das Grundwort bestimmt das Genus des Kompositums." },
          { it: "das Bestimmungswort", plural: "die Bestimmungswörter", ex: "Das Bestimmungswort steht immer vorn." },
          { it: "das Fugenelement", plural: "die Fugenelemente", ex: "In „Arbeitszeit“ ist das s ein Fugenelement." },
          { it: "die Arbeitsbedingung", plural: "die Arbeitsbedingungen", ex: "Die Gewerkschaft fordert bessere Arbeitsbedingungen." },
          { it: "der Wohnungsmarkt", plural: "die Wohnungsmärkte", ex: "Der Wohnungsmarkt in den Großstädten ist angespannt." },
          { it: "die Universitätsbibliothek", plural: "die Universitätsbibliotheken", ex: "Die Universitätsbibliothek ist auch am Sonntag geöffnet." },
          { it: "die Freiheitsstrafe", plural: "die Freiheitsstrafen", ex: "Er wurde zu einer Freiheitsstrafe von zwei Jahren verurteilt." },
          { it: "der Schadensersatz", plural: "-", ex: "Der Kläger fordert Schadensersatz." },
          { it: "das Gesundheitswesen", plural: "-", ex: "Im Gesundheitswesen fehlen Fachkräfte." },
          { it: "sich zusammensetzen aus", ex: "Das Wort setzt sich aus drei Teilen zusammen." },
          { it: "zusammengesetzt", ex: "Zusammengesetzte Wörter schreibt man zusammen." }
        ],
        exercises: [
          { t: "mcq", a: 0 },
          { t: "fill", a: ["Wohnungsmarkt"] },
          { t: "fill", a: ["Universitätsbibliothek"] },
          { t: "fill", a: ["Freiheitsstrafe"] },
          { t: "fill", a: ["Schulpflicht"] },
          {
            t: "cloze",
            text: "Viele {{1}} protestieren gegen die neue {{2}} in den städtischen Parks.",
            gaps: [["Hundebesitzer"], ["Leinenpflicht"]]
          },
          { t: "multi", a: [0, 1] },
          {
            t: "trans",
            dir: "toIt",
            a: [
              "Die Arbeitsbedingungen im Gesundheitswesen haben sich verschlechtert",
              "Die Arbeitsbedingungen im Gesundheitswesen sind schlechter geworden",
              "Die Arbeitsbedingungen im Gesundheitswesen verschlechterten sich",
              "Im Gesundheitswesen haben sich die Arbeitsbedingungen verschlechtert",
              "Im Gesundheitswesen sind die Arbeitsbedingungen schlechter geworden",
              "Im Gesundheitswesen verschlechterten sich die Arbeitsbedingungen"
            ]
          },
          {
            t: "listen",
            it: "Der Wohnungsmarkt in den Universitätsstädten ist seit Jahren angespannt. Viele Studierende finden erst nach monatelanger Suche ein bezahlbares Zimmer."
          },
          { t: "speak", it: "Die Arbeitsbedingungen haben sich deutlich verbessert." }
        ]
      },
      {
        id: "c2-u02-l3",
        tags: ["g-wortbildung"],
        cefr: "C2",
        titleIt: "Ableitung und Fremdwörter",
        grammar: {
          examples: [
            { it: "Die Verbesserung der Arbeitsbedingungen ist längst überfällig." },
            { it: "Ihre Gelassenheit in schwierigen Situationen bewundere ich." },
            { it: "Die Nachhaltigkeit des Projekts wird von Fachleuten bezweifelt." },
            { it: "Ich habe mich beim Datum verschrieben." },
            { it: "Im Streit zerriss sie den Brief in kleine Stücke." },
            { it: "Die Digitalisierung der Verwaltung kommt nur langsam voran." }
          ]
        },
        vocab: [
          { it: "die Ableitung", plural: "die Ableitungen", ex: "„Freiheit“ ist eine Ableitung von „frei“." },
          { it: "die Nachsilbe", plural: "die Nachsilben", ex: "Die Nachsilbe -ung bildet Substantive aus Verben." },
          { it: "die Vorsilbe", plural: "die Vorsilben", ex: "Die Vorsilbe zer- drückt eine Zerstörung aus." },
          { it: "das Fremdwort", plural: "die Fremdwörter", ex: "Der Text ist voller Fremdwörter." },
          { it: "die Gelassenheit", plural: "-", ex: "Sie reagierte mit großer Gelassenheit." },
          { it: "die Nachhaltigkeit", plural: "-", ex: "Nachhaltigkeit ist zum Modewort geworden." },
          { it: "die Zuverlässigkeit", plural: "-", ex: "Seine Zuverlässigkeit wird von allen geschätzt." },
          { it: "die Digitalisierung", plural: "die Digitalisierungen", ex: "Die Digitalisierung verändert die Arbeitswelt." },
          { it: "zerreißen", ex: "Sie zerriss den Brief, ohne ihn zu lesen." },
          { it: "sich verschreiben", ex: "Ich habe mich beim Datum verschrieben." },
          { it: "missverstehen", ex: "Sie hat meine Bemerkung völlig missverstanden." },
          { it: "entwerten", ex: "Die Inflation hat die Ersparnisse entwertet." }
        ],
        exercises: [
          { t: "mcq", a: 0 },
          { t: "mcq", a: 0 },
          { t: "mcq", a: 0 },
          { t: "fill", a: ["Zuverlässigkeit"] },
          {
            t: "cloze",
            text: "Die {{1}} der Verwaltung soll die Verfahren beschleunigen, doch über ihre {{2}} sind sich die Fachleute uneinig.",
            gaps: [["Digitalisierung"], ["Wirksamkeit", "Effektivität"]]
          },
          {
            t: "match",
            pairs: [{ it: "zerreißen" }, { it: "sich verlaufen" }, { it: "missverstehen" }, { it: "entwerten" }]
          },
          { t: "multi", a: [0, 1] },
          {
            t: "trans",
            dir: "toIt",
            a: [
              "Die Nachhaltigkeit des Projekts wurde in Zweifel gezogen",
              "Die Nachhaltigkeit des Projektes wurde in Zweifel gezogen",
              "Die Nachhaltigkeit des Projekts ist in Zweifel gezogen worden",
              "Die Nachhaltigkeit des Projektes ist in Zweifel gezogen worden",
              "Die Nachhaltigkeit des Projekts wurde bezweifelt",
              "Die Nachhaltigkeit des Projektes wurde bezweifelt",
              "Die Nachhaltigkeit des Projekts ist bezweifelt worden",
              "Die Nachhaltigkeit des Projektes ist bezweifelt worden"
            ]
          },
          {
            t: "listen",
            it: "Die Digitalisierung verändert nicht nur die Arbeitswelt, sondern auch die Sprache. Viele Fremdwörter aus dem Englischen werden inzwischen ganz selbstverständlich verwendet."
          },
          { t: "speak", it: "Ihre Gelassenheit hat mich beeindruckt." }
        ]
      }
    ],
    test: {
      id: "c2-u02-test",
      tags: ["g-wortbildung", "g-plural"],
      cefr: "C2",
      titleIt: "Test: Plural und Wortbildung",
      exercises: [
        { t: "fill", a: ["Bänke", "Sitzbänke"] },
        { t: "fill", a: ["Streitigkeiten", "Streite"] },
        { t: "fill", a: ["Gesundheitsamt"] },
        { t: "fill", a: ["Besonnenheit"] },
        { t: "mcq", a: 0 },
        { t: "mcq", a: 0 },
        { t: "mcq", a: 0 },
        {
          t: "match",
          pairs: [{ it: "die Bänder" }, { it: "die Bände" }, { it: "die Banken" }, { it: "die Bänke" }]
        },
        {
          t: "listen",
          it: "Mit wenigen Worten erklärte die Sprachwissenschaftlerin den Unterschied zwischen Wörtern und Worten. Die Studierenden hörten ihr mit großer Aufmerksamkeit zu."
        },
        { t: "speak", it: "Das Gesundheitsamt hat die Schließung angeordnet." }
      ]
    }
  },
  {
    id: "c2-u03",
    icon: "🎭",
    titleIt: "Zwischentöne",
    lessons: [
      {
        id: "c2-u03-l1",
        tags: ["g-register", "g-modalpartikeln"],
        cefr: "C2",
        titleIt: "Ironie und Understatement",
        grammar: {
          examples: [
            { it: "Die Verhandlungen waren nicht ganz unproblematisch." },
            { it: "Der Film war gar nicht mal so schlecht." },
            { it: "Er ist nicht gerade der Fleißigste." },
            { it: "Das ist ja eine schöne Bescherung!" },
            { it: "Du bist mir ja ein schöner Freund!" },
            { it: "Das Ergebnis kann sich durchaus sehen lassen." }
          ]
        },
        vocab: [
          { it: "die Ironie", plural: "-", ex: "Ihre Ironie hat nicht jeder verstanden." },
          { it: "das Understatement", plural: "die Understatements", ex: "„Nicht schlecht“ ist ein typisches Understatement." },
          { it: "die Untertreibung", plural: "die Untertreibungen", ex: "„Etwas anstrengend“ war eine gewaltige Untertreibung." },
          { it: "die Übertreibung", plural: "die Übertreibungen", ex: "Seine Übertreibungen nimmt niemand mehr ernst." },
          { it: "die Anspielung", plural: "die Anspielungen", ex: "Die Anspielung auf seine Niederlage war unüberhörbar." },
          { it: "der Unterton", plural: "die Untertöne", ex: "In ihrer Stimme lag ein spöttischer Unterton." },
          { it: "der Seitenhieb", plural: "die Seitenhiebe", ex: "Den Seitenhieb auf die Opposition konnte er sich nicht verkneifen." },
          { it: "die Andeutung", plural: "die Andeutungen", ex: "Sie machte nur vage Andeutungen." },
          { it: "zweideutig", ex: "Die Bemerkung war bewusst zweideutig formuliert." },
          { it: "augenzwinkernd", ex: "Augenzwinkernd bedankte er sich für die „konstruktive“ Kritik." },
          { it: "herunterspielen", ex: "Die Regierung versuchte, die Krise herunterzuspielen." },
          { it: "jemanden auf den Arm nehmen", ex: "Glaub ihm kein Wort, er nimmt dich nur auf den Arm." }
        ],
        exercises: [
          { t: "mcq", a: 0 },
          { t: "mcq", a: 0 },
          { t: "mcq", a: 0 },
          { t: "mcq", a: 0 },
          { t: "mcq", a: 0 },
          {
            t: "cloze",
            text: "Die Präsentation war, {{1}} gesagt, nicht ganz {{2}}: Der Beamer fiel aus, und die Rednerin hatte ihre Notizen vergessen.",
            gaps: [["gelinde", "milde", "vorsichtig"], ["gelungen", "geglückt", "glücklich", "reibungslos"]]
          },
          {
            t: "match",
            pairs: [{ it: "nicht schlecht" }, { it: "nicht ganz ohne" }, { it: "nicht gerade billig" }, { it: "nicht unbedingt" }]
          },
          {
            t: "trans",
            dir: "toIt",
            a: [
              "Das Restaurant war nicht gerade billig",
              "Das Restaurant war nicht gerade günstig",
              "Das Restaurant war nicht gerade preiswert",
              "Das Restaurant war nicht eben billig",
              "Das Restaurant war nicht eben günstig",
              "Das Restaurant war nicht eben preiswert",
              "Das Restaurant ist nicht gerade billig gewesen",
              "Das Restaurant ist nicht gerade günstig gewesen",
              "Das Restaurant ist nicht gerade preiswert gewesen"
            ]
          },
          {
            t: "listen",
            it: "Das Essen war angebrannt, der Wein war warm, und draußen regnete es in Strömen. „Nicht ganz der Abend, den ich mir vorgestellt hatte“, meinte der Gastgeber trocken."
          },
          { t: "speak", it: "Das war, gelinde gesagt, nicht ganz unproblematisch." }
        ]
      },
      {
        id: "c2-u03-l2",
        tags: ["g-register", "g-aussprache"],
        cefr: "C2",
        titleIt: "Umgangssprache, Dialekt, Varietäten",
        grammar: {
          examples: [
            { it: "Grüß Gott! Ich hätte gern ein Kilo Paradeiser." },
            { it: "Im Jänner liegt in Innsbruck meistens Schnee." },
            { it: "Grüezi! Wo kann ich hier parkieren?" },
            { it: "Sie fährt jeden Tag mit dem Velo zur Arbeit." },
            { it: "Hast du mal 'ne Minute? Ich muss dir was erzählen." },
            { it: "Auf den ganzen Papierkram hab ich echt keinen Bock." }
          ]
        },
        vocab: [
          { it: "die Umgangssprache", plural: "-", ex: "In der Umgangssprache fallen viele Endungen weg." },
          { it: "die Standardsprache", plural: "die Standardsprachen", ex: "Im Unterricht wird die Standardsprache verwendet." },
          { it: "die Mundart", plural: "die Mundarten", ex: "Ihre Großeltern sprechen noch Mundart." },
          { it: "der Dialekt", plural: "die Dialekte", ex: "Den Dialekt aus dem Allgäu verstehe ich kaum." },
          { it: "die Varietät", plural: "die Varietäten", ex: "Das österreichische Deutsch ist eine eigene Varietät." },
          { it: "der Austriazismus", plural: "die Austriazismen", ex: "„Jänner“ ist ein typischer Austriazismus." },
          { it: "der Helvetismus", plural: "die Helvetismen", ex: "„Velo“ ist ein Helvetismus." },
          { it: "der Akzent", plural: "die Akzente", ex: "Er spricht mit einem leichten Akzent." },
          { it: "die Färbung", plural: "die Färbungen", ex: "Ihre Aussprache hat eine deutlich süddeutsche Färbung." },
          { it: "mundartlich", ex: "Der Roman ist teilweise mundartlich geschrieben." },
          { it: "salopp", ex: "Für einen Geschäftsbrief ist der Ton zu salopp." },
          { it: "sich verständigen", ex: "Trotz der verschiedenen Dialekte konnten wir uns gut verständigen." }
        ],
        exercises: [
          { t: "mcq", a: 0 },
          { t: "mcq", a: 0 },
          { t: "mcq", a: 0 },
          { t: "mcq", a: 0 },
          { t: "fill", a: ["Tomaten", "Tomate"] },
          {
            t: "cloze",
            text: "Das österreichische und das Schweizer Hochdeutsch sind keine {{1}}, sondern gleichberechtigte {{2}} der deutschen Sprache.",
            gaps: [["Dialekte", "Mundarten"], ["Varietäten", "Standardvarietäten"]]
          },
          {
            t: "match",
            pairs: [{ it: "der Jänner" }, { it: "der Paradeiser" }, { it: "das Velo" }, { it: "grüezi" }]
          },
          {
            t: "trans",
            dir: "toIt",
            a: [
              "Sie spricht mit einem leichten Schweizer Akzent",
              "Sie spricht mit leichtem Schweizer Akzent",
              "Sie spricht mit einem leichten schweizerischen Akzent",
              "Sie spricht mit leichtem schweizerischem Akzent"
            ]
          },
          {
            t: "listen",
            it: "In Wien sagt man Paradeiser statt Tomaten und Erdäpfel statt Kartoffeln. Wer zum ersten Mal in Österreich einkauft, sollte sich darüber also nicht wundern."
          },
          { t: "speak", it: "Er spricht Dialekt, versteht aber auch die Standardsprache." }
        ]
      },
      {
        id: "c2-u03-l3",
        tags: ["g-register", "g-wortbildung"],
        cefr: "C2",
        titleIt: "Latinismen und Bildungssprache",
        grammar: {
          examples: [
            { it: "Die These lässt sich empirisch kaum verifizieren." },
            { it: "Der Vorschlag wurde vom Gremium einstimmig akzeptiert." },
            { it: "Seine Argumentation ist in sich nicht konsistent." },
            { it: "Das Phänomen lässt sich nicht monokausal erklären." },
            { it: "Die Ergebnisse sind mit Vorsicht zu interpretieren." },
            { it: "Die bisherigen Kriterien gelten als obsolet." }
          ]
        },
        vocab: [
          { it: "die These", plural: "die Thesen", ex: "Die These ist gewagt, aber gut begründet." },
          { it: "das Phänomen", plural: "die Phänomene", ex: "Das Phänomen ist seit Langem bekannt." },
          { it: "das Gremium", plural: "die Gremien", ex: "Das Gremium tagt zweimal im Jahr." },
          { it: "das Kriterium", plural: "die Kriterien", ex: "Die Kriterien für die Auswahl sind nicht transparent." },
          { it: "das Spektrum", plural: "die Spektren", ex: "Das Spektrum der Meinungen ist breit." },
          { it: "die Prämisse", plural: "die Prämissen", ex: "Die Prämisse der Studie ist umstritten." },
          { it: "die Konsequenz", plural: "die Konsequenzen", ex: "Die Konsequenzen sind noch nicht absehbar." },
          { it: "konsistent", ex: "Die Daten sind nicht konsistent." },
          { it: "obsolet", ex: "Das Verfahren ist längst obsolet." },
          { it: "ambivalent", ex: "Sie steht dem Projekt ambivalent gegenüber." },
          { it: "verifizieren", ex: "Die Angaben ließen sich nicht verifizieren." },
          { it: "implizieren", ex: "Die Reform impliziert höhere Kosten." }
        ],
        exercises: [
          { t: "mcq", a: 0 },
          { t: "mcq", a: 0 },
          { t: "mcq", a: 0 },
          { t: "fill", a: ["Gremien"] },
          { t: "fill", a: ["Konsistenz"] },
          {
            t: "cloze",
            text: "Die {{1}}, auf der die gesamte Studie beruht, hat sich als falsch erwiesen; die Ergebnisse sind damit {{2}}.",
            gaps: [["Prämisse", "Annahme", "Grundannahme", "Voraussetzung"], ["hinfällig", "ungültig", "gegenstandslos"]]
          },
          {
            t: "match",
            pairs: [{ it: "obsolet" }, { it: "konziliant" }, { it: "ambivalent" }, { it: "marginal" }]
          },
          {
            t: "trans",
            dir: "toIt",
            a: [
              "Die These ist empirisch nicht verifizierbar",
              "Die These lässt sich empirisch nicht verifizieren",
              "Die These ist empirisch nicht zu verifizieren",
              "Die These kann empirisch nicht verifiziert werden"
            ]
          },
          {
            t: "listen",
            it: "Die Prämisse der Studie ist umstritten. Kritiker halten die Ergebnisse für nicht verifizierbar und die daraus gezogenen Konsequenzen für voreilig."
          },
          { t: "speak", it: "Das Phänomen lässt sich nicht monokausal erklären." }
        ]
      }
    ],
    test: {
      id: "c2-u03-test",
      tags: ["g-register", "g-wortbildung", "g-partizipialattribut"],
      cefr: "C2",
      titleIt: "Test: Zwischentöne",
      exercises: [
        { t: "fill", a: ["gestellten"] },
        { t: "fill", a: ["Kriterien"] },
        { t: "fill", a: ["gelinde", "milde", "vorsichtig"] },
        { t: "fill", a: ["Ambivalenz"] },
        { t: "mcq", a: 0 },
        { t: "mcq", a: 0 },
        { t: "mcq", a: 0 },
        { t: "mcq", a: 0 },
        { t: "mcq", a: 0 },
        {
          t: "match",
          pairs: [{ it: "das Gremium" }, { it: "die Prämisse" }, { it: "der Seitenhieb" }, { it: "die Mundart" }]
        },
        {
          t: "trans",
          dir: "toIt",
          a: [
            "Die von der Kommission vorgeschlagenen Maßnahmen sind obsolet",
            "Die von der Kommission vorgeschlagenen Maßnahmen sind veraltet",
            "Die von der Kommission vorgeschlagenen Maßnahmen sind überholt"
          ]
        },
        { t: "speak", it: "Die von der Kommission vorgeschlagenen Maßnahmen sind, gelinde gesagt, umstritten." }
      ]
    }
  }
]);
