/* ============================================================
   Language-neutral layer: German (de-DE), structure and answer keys.
   Learner-language texts live in data/i18n/<lang>/c2-01.js.
   c2-u01 is a German unit.
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
  }
]);
