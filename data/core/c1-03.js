/* ============================================================
   Language-neutral layer: German (de-DE), structure and answer keys.
   Learner-language texts live in data/i18n/<lang>/c1-03.js.
   c1-u05 is a German unit.
   ============================================================ */
LINGUAI.addUnits("C1", [
  {
    id: "c1-u05",
    icon: "📝",
    titleIt: "Nach Abschluss der Arbeit",
    lessons: [
      {
        id: "c1-u05-l1",
        tags: ["g-partizipialattribut"],
        cefr: "C1",
        titleIt: "Partizip I und II als Attribut",
        grammar: {
          examples: [
            { it: "Die steigenden Energiekosten belasten die Haushalte." },
            { it: "Die gestiegenen Kosten werden im Bericht erläutert." },
            { it: "Die geprüften Unterlagen liegen der Akte bei." },
            { it: "Die an der Sitzung teilnehmenden Mitglieder stimmten dem Antrag zu." },
            { it: "Der vom Vorstand verabschiedete Haushaltsplan tritt im Januar in Kraft." },
            { it: "Die im letzten Quartal erzielten Umsätze lagen über den Erwartungen." }
          ]
        },
        vocab: [
          { it: "das Protokoll", plural: "die Protokolle", ex: "Das Protokoll wird nach der Sitzung verschickt." },
          { it: "die Verhandlung", plural: "die Verhandlungen", ex: "Die Verhandlungen dauern seit Wochen an." },
          { it: "der Beschluss", plural: "die Beschlüsse", ex: "Der Beschluss wurde einstimmig gefasst." },
          { it: "die Unterlage", plural: "die Unterlagen", ex: "Bitte reichen Sie alle Unterlagen bis Freitag ein." },
          { it: "der Umsatz", plural: "die Umsätze", ex: "Der Umsatz ist im dritten Quartal gestiegen." },
          { it: "der Haushaltsplan", plural: "die Haushaltspläne", ex: "Der Haushaltsplan wird im Dezember verabschiedet." },
          { it: "verabschieden", ex: "Der Stadtrat hat den Haushalt verabschiedet." },
          { it: "erzielen", ex: "Das Unternehmen hat einen hohen Gewinn erzielt." },
          { it: "festhalten", ex: "Die Ergebnisse werden im Protokoll festgehalten." },
          { it: "laufend", ex: "Die laufenden Kosten sind gestiegen." },
          { it: "vorliegend", ex: "Der vorliegende Bericht fasst die Ergebnisse zusammen." },
          { it: "ausstehend", ex: "Die ausstehenden Zahlungen werden angemahnt." }
        ],
        exercises: [
          { t: "mcq", a: 0 },
          { t: "mcq", a: 0 },
          { t: "mcq", a: 0 },
          { t: "fill", a: ["geprüften"] },
          { t: "fill", a: ["geltenden"] },
          {
            t: "cloze",
            text: "Die im letzten Jahr {{1}} Maßnahmen haben die stetig {{2}} Kosten nicht gesenkt.",
            gaps: [["ergriffenen", "getroffenen"], ["steigenden"]]
          },
          { t: "multi", a: [0, 1] },
          {
            t: "order",
            tokens: ["Die", "im", "Protokoll", "festgehaltenen", "Beschlüsse", "sind", "für", "alle", "Abteilungen", "verbindlich"],
            a: [
              "Die im Protokoll festgehaltenen Beschlüsse sind für alle Abteilungen verbindlich",
              "Die im Protokoll festgehaltenen Beschlüsse sind verbindlich für alle Abteilungen",
              "Für alle Abteilungen sind die im Protokoll festgehaltenen Beschlüsse verbindlich"
            ]
          },
          {
            t: "trans",
            dir: "toIt",
            a: [
              "Die im zweiten Quartal erzielten Ergebnisse wurden in der Sitzung besprochen",
              "Die im zweiten Quartal erzielten Ergebnisse sind in der Sitzung besprochen worden",
              "In der Sitzung wurden die im zweiten Quartal erzielten Ergebnisse besprochen",
              "In der Sitzung sind die im zweiten Quartal erzielten Ergebnisse besprochen worden"
            ]
          },
          {
            t: "listen",
            it: "Die im Protokoll festgehaltenen Beschlüsse gelten ab sofort. Die laufenden Verhandlungen werden im Herbst abgeschlossen, und die gestiegenen Kosten belasten weiterhin den Haushalt."
          },
          { t: "speak", it: "Die im letzten Quartal erzielten Umsätze lagen über den Erwartungen." }
        ]
      },
      {
        id: "c1-u05-l2",
        tags: ["g-nominalstil", "g-nebensatz-temporal"],
        cefr: "C1",
        titleIt: "Nominalisierung statt Nebensatz",
        grammar: {
          examples: [
            { it: "Nach Abschluss der Prüfung wird der Bericht veröffentlicht." },
            { it: "Wegen der Verzögerung der Lieferung musste der Termin verschoben werden." },
            { it: "Bei Bedarf können weitere Unterlagen angefordert werden." },
            { it: "Trotz mehrfacher Mahnung blieb die Zahlung aus." },
            { it: "Zur Klärung offener Fragen wird eine Sitzung einberufen." },
            { it: "Infolge der gestiegenen Energiepreise sank die Nachfrage." }
          ]
        },
        vocab: [
          { it: "der Abschluss", plural: "die Abschlüsse", ex: "Nach dem Abschluss der Prüfung folgt der Bericht." },
          { it: "die Verzögerung", plural: "die Verzögerungen", ex: "Die Verzögerung liegt an fehlenden Unterlagen." },
          { it: "der Bedarf", plural: "-", ex: "Der Bedarf an Fachkräften steigt." },
          { it: "die Mahnung", plural: "die Mahnungen", ex: "Die zweite Mahnung kam per Post." },
          { it: "die Klärung", plural: "die Klärungen", ex: "Die Klärung des Sachverhalts dauert noch an." },
          { it: "die Nachfrage", plural: "-", ex: "Die Nachfrage nach Wohnungen ist hoch." },
          { it: "anfordern", ex: "Wir haben die Unterlagen schriftlich angefordert." },
          { it: "einberufen", ex: "Der Vorsitzende hat eine Sitzung einberufen." },
          { it: "ausbleiben", ex: "Die erwartete Antwort blieb aus." },
          { it: "veröffentlichen", ex: "Der Bericht wird im Internet veröffentlicht." },
          { it: "infolge", ex: "Infolge eines Defekts fiel die Anlage aus." },
          { it: "aufgrund", ex: "Aufgrund der Wetterlage wurde der Flug gestrichen." }
        ],
        exercises: [
          { t: "mcq", a: 0 },
          { t: "mcq", a: 0 },
          { t: "mcq", a: 0 },
          { t: "fill", a: ["Trotz", "Ungeachtet"] },
          { t: "fill", a: ["offener"] },
          {
            t: "cloze",
            text: "{{1}} der Verzögerung der Lieferung musste der Termin verschoben werden. {{2}} Bedarf wird ein neuer Termin vereinbart.",
            gaps: [["Wegen", "Aufgrund", "Infolge"], ["Bei", "Nach"]]
          },
          {
            t: "match",
            pairs: [{ it: "infolge" }, { it: "trotz" }, { it: "bei Bedarf" }, { it: "angesichts" }]
          },
          {
            t: "order",
            tokens: ["Zur", "Klärung", "offener", "Fragen", "wird", "eine", "Sitzung", "einberufen"],
            a: [
              "Zur Klärung offener Fragen wird eine Sitzung einberufen",
              "Eine Sitzung wird zur Klärung offener Fragen einberufen"
            ]
          },
          {
            t: "trans",
            dir: "toIt",
            a: [
              "Bei Bedarf können weitere Unterlagen angefordert werden",
              "Weitere Unterlagen können bei Bedarf angefordert werden",
              "Bei Bedarf kann man weitere Unterlagen anfordern",
              "Weitere Unterlagen kann man bei Bedarf anfordern"
            ]
          },
          {
            t: "listen",
            it: "Nach Abschluss der Prüfung wird der Bericht veröffentlicht. Bei Bedarf können weitere Unterlagen angefordert werden. Zur Klärung offener Fragen steht die Projektleitung gern zur Verfügung."
          },
          { t: "speak", it: "Trotz mehrfacher Erinnerung ist die Zahlung nicht eingegangen." }
        ]
      },
      {
        id: "c1-u05-l3",
        tags: ["g-nebensatz-temporal", "g-register"],
        cefr: "C1",
        titleIt: "Wann der Nebensatz bleibt",
        grammar: {
          examples: [
            { it: "Die Sitzung wurde verschoben, weil der Vorsitzende erkrankt war und die Referentin im Ausland festsaß." },
            { it: "Der Vertrag wird erst unterzeichnet, wenn der Vorstand zugestimmt hat und die Finanzierung gesichert ist." },
            { it: "Sollte die Prüfung länger dauern, wird der Termin verschoben." },
            { it: "Die Förderung entfällt, falls sich die Rahmenbedingungen ändern sollten." },
            { it: "Die Ergebnisse sind nur dann aussagekräftig, wenn die Stichprobe repräsentativ ist." },
            { it: "Die Auswertung begann, nachdem die Teilnehmenden den Fragebogen ausgefüllt hatten." }
          ]
        },
        vocab: [
          { it: "die Verständlichkeit", plural: "-", ex: "Die Verständlichkeit des Textes hat Vorrang." },
          { it: "die Voraussetzung", plural: "die Voraussetzungen", ex: "Eine gültige Aufenthaltserlaubnis ist Voraussetzung." },
          { it: "die Rahmenbedingung", plural: "die Rahmenbedingungen", ex: "Die Rahmenbedingungen haben sich geändert." },
          { it: "die Stichprobe", plural: "die Stichproben", ex: "Die Stichprobe umfasst zweihundert Personen." },
          { it: "der Vorsitzende", plural: "die Vorsitzenden", ex: "Der Vorsitzende eröffnet die Sitzung." },
          { it: "der Antragsteller", plural: "die Antragsteller", ex: "Der Antragsteller muss die Frist beachten." },
          { it: "versäumen", ex: "Wer die Frist versäumt, verliert den Anspruch." },
          { it: "entfallen", ex: "Die Zuzahlung entfällt ab Januar." },
          { it: "zustimmen", ex: "Der Rat hat dem Plan zugestimmt." },
          { it: "ablehnen", ex: "Der Ausschuss hat den Antrag abgelehnt." },
          { it: "aussagekräftig", ex: "Die Daten sind nicht aussagekräftig genug." },
          { it: "repräsentativ", ex: "Die Umfrage ist nicht repräsentativ." }
        ],
        exercises: [
          { t: "mcq", a: 0 },
          { t: "mcq", a: 0 },
          { t: "mcq", a: 0 },
          { t: "fill", a: ["wenn"] },
          { t: "fill", a: ["sollten"] },
          {
            t: "cloze",
            text: "Der Vertrag wird erst unterzeichnet, {{1}} der Vorstand zugestimmt hat und die Finanzierung gesichert {{2}}.",
            gaps: [["wenn", "sobald", "nachdem"], ["ist"]]
          },
          { t: "multi", a: [0, 1] },
          {
            t: "order",
            tokens: ["Die", "Auswertung", "begann", "nachdem", "die", "Teilnehmenden", "den", "Fragebogen", "ausgefüllt", "hatten"],
            a: [
              "Die Auswertung begann nachdem die Teilnehmenden den Fragebogen ausgefüllt hatten",
              "Nachdem die Teilnehmenden den Fragebogen ausgefüllt hatten begann die Auswertung"
            ]
          },
          {
            t: "trans",
            dir: "toIt",
            a: [
              "Sollte der Ausschuss den Antrag ablehnen, wird die Frist verlängert",
              "Falls der Ausschuss den Antrag ablehnt, wird die Frist verlängert",
              "Falls der Ausschuss den Antrag ablehnen sollte, wird die Frist verlängert",
              "Wenn der Ausschuss den Antrag ablehnt, wird die Frist verlängert",
              "Wenn der Ausschuss den Antrag ablehnen sollte, wird die Frist verlängert",
              "Lehnt der Ausschuss den Antrag ab, wird die Frist verlängert"
            ]
          },
          {
            t: "listen",
            it: "Die Sitzung wurde verschoben, weil der Vorsitzende erkrankt war und die Referentin im Ausland festsaß. Sollte die Prüfung länger dauern, wird der Termin neu festgelegt."
          },
          { t: "speak", it: "Sollte die Prüfung länger dauern, wird der Termin verschoben." }
        ]
      }
    ],
    test: {
      id: "c1-u05-test",
      tags: ["g-partizipialattribut", "g-nominalstil", "g-futur", "g-werden"],
      cefr: "C1",
      titleIt: "Test: Nach Abschluss der Arbeit",
      exercises: [
        { t: "fill", a: ["sein"] },
        { t: "fill", a: ["worden"] },
        { t: "fill", a: ["stehenden"] },
        { t: "fill", a: ["Ohne"] },
        { t: "mcq", a: 0 },
        { t: "mcq", a: 0 },
        { t: "mcq", a: 0 },
        { t: "multi", a: [0, 1] },
        {
          t: "cloze",
          text: "Wir werden Sie rechtzeitig informieren. Die von uns {{1}} Maßnahmen werden erst {{2}} Abschluss der Prüfung wirksam.",
          gaps: [["geplanten", "vorgesehenen"], ["nach", "mit"]]
        },
        {
          t: "trans",
          dir: "toIt",
          a: [
            "Die in der Sitzung getroffenen Entscheidungen werden nach Abschluss der Prüfung mitgeteilt",
            "Nach Abschluss der Prüfung werden die in der Sitzung getroffenen Entscheidungen mitgeteilt"
          ]
        },
        {
          t: "listen",
          it: "Er wird den Bericht bis Freitag fertiggestellt haben. Die im Protokoll festgehaltenen Beschlüsse werden nach Abschluss der Prüfung umgesetzt."
        },
        { t: "speak", it: "Die gestiegenen Kosten werden den Haushalt weiter belasten." }
      ]
    }
  }
]);
