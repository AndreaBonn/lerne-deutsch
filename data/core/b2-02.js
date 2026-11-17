/* ============================================================
   Language-neutral layer: German (de-DE), structure and answer keys.
   Learner-language texts live in data/i18n/<lang>/b2-02.js.
   b2-u05 is a German unit.
   ============================================================ */
LINGUAI.addUnits("B2", [
  {
    id: "b2-u05",
    icon: "📰",
    titleIt: "Sie sagte, sie sei krank",
    lessons: [
      {
        id: "b2-u05-l1",
        tags: ["g-konjunktiv1"],
        cefr: "B2",
        titleIt: "Von der direkten zur indirekten Rede",
        grammar: {
          examples: [
            { it: "Der Minister sagte, er sei mit dem Ergebnis zufrieden." },
            { it: "Die Zeugin erklärte, sie habe nichts gesehen." },
            { it: "Laut Polizei sei der Fahrer zu schnell gefahren." },
            { it: "Der Sprecher betonte, die Firma werde keine Stellen streichen." },
            { it: "Sie sagten, sie hätten keine Zeit." },
            { it: "Er behauptet, er wisse von nichts." }
          ]
        },
        vocab: [
          { it: "die Aussage", plural: "die Aussagen", ex: "Die Aussage des Zeugen war widersprüchlich." },
          { it: "der Zeuge", plural: "die Zeugen", ex: "Der Zeuge hat den Unfall gesehen." },
          { it: "die Zeugin", plural: "die Zeuginnen", ex: "Die Zeugin wurde befragt." },
          { it: "der Sprecher", plural: "die Sprecher", ex: "Der Sprecher der Regierung gab eine Erklärung ab." },
          { it: "die Meldung", plural: "die Meldungen", ex: "Die Meldung kam am Abend." },
          { it: "der Bericht", plural: "die Berichte", ex: "Der Bericht erscheint morgen." },
          { it: "behaupten", ex: "Er behauptet, er sei unschuldig." },
          { it: "erklären", ex: "Die Firma erklärte, alles sei in Ordnung." },
          { it: "betonen", ex: "Sie betonte, dass niemand verletzt wurde." },
          { it: "berichten", ex: "Die Zeitung berichtet über den Streik." },
          { it: "laut", ex: "Laut Wetterbericht regnet es morgen." },
          { it: "angeblich", ex: "Er war angeblich krank." }
        ],
        exercises: [
          { t: "mcq", a: 0 },
          { t: "mcq", a: 0 },
          { t: "mcq", a: 0 },
          { t: "fill", a: ["sei"] },
          { t: "fill", a: ["habe"] },
          {
            t: "cloze",
            text: "Er behauptet, er {{1}} von {{2}}.",
            gaps: [["wisse"], ["nichts"]]
          },
          {
            t: "match",
            pairs: [{ it: "behaupten" }, { it: "betonen" }, { it: "berichten" }, { it: "erklären" }]
          },
          {
            t: "order",
            tokens: ["Laut", "Polizei", "sei", "der", "Fahrer", "zu", "schnell", "gefahren"],
            a: ["Laut Polizei sei der Fahrer zu schnell gefahren"]
          },
          {
            t: "trans",
            dir: "toIt",
            a: [
              "Der Sprecher sagte, die Firma werde keine Stellen streichen",
              "Der Sprecher sagte, dass die Firma keine Stellen streichen werde",
              "Der Sprecher hat gesagt, die Firma werde keine Stellen streichen",
              "Der Sprecher hat gesagt, dass die Firma keine Stellen streichen werde",
              "Der Sprecher sagte, das Unternehmen werde keine Stellen streichen",
              "Der Sprecher sagte, dass das Unternehmen keine Stellen streichen werde"
            ]
          },
          {
            t: "listen",
            it: "Die Polizei teilte mit, der Unfall sei gegen acht Uhr passiert. Ein Zeuge berichtete, der Fahrer habe nicht gebremst."
          },
          { t: "speak", it: "Die Sprecherin erklärte, das Problem sei inzwischen gelöst." }
        ]
      },
      {
        id: "b2-u05-l2",
        tags: ["g-konjunktiv1", "g-temporalangaben"],
        cefr: "B2",
        titleIt: "Zeit, Ort und Person",
        grammar: {
          examples: [
            { it: "Er sagte, er komme am nächsten Tag." },
            { it: "Sie sagte, sie sei am Tag davor dort gewesen." },
            { it: "Sie sagten, sie hätten an diesem Tag keine Zeit." },
            { it: "Er sagte, er werde in der folgenden Woche anrufen." },
            { it: "Er sagte, das sei sein Auto." },
            { it: "Sie sagte, sie kenne ihn nicht." }
          ]
        },
        vocab: [
          { it: "der Vortag", plural: "die Vortage", ex: "Am Vortag hatte es stark geregnet." },
          { it: "die Mitteilung", plural: "die Mitteilungen", ex: "Wir haben eine Mitteilung der Schule bekommen." },
          { it: "das Protokoll", plural: "die Protokolle", ex: "Wer schreibt heute das Protokoll?" },
          { it: "die Pressekonferenz", plural: "die Pressekonferenzen", ex: "Die Pressekonferenz beginnt um zehn." },
          { it: "das Interview", plural: "die Interviews", ex: "Im Interview sprach sie über ihre Pläne." },
          { it: "die Quelle", plural: "die Quellen", ex: "Die Zeitung nennt ihre Quellen nicht." },
          { it: "mitteilen", ex: "Die Firma teilte mit, dass das Büro geschlossen bleibt." },
          { it: "versichern", ex: "Er versicherte, alles sei in Ordnung." },
          { it: "zitieren", ex: "Die Zeitung zitiert den Minister." },
          { it: "wiedergeben", ex: "Gib bitte genau wieder, was sie gesagt hat." },
          { it: "folgend", ex: "Am folgenden Tag reiste er ab." },
          { it: "inzwischen", ex: "Inzwischen ist das Problem gelöst." }
        ],
        exercises: [
          { t: "mcq", a: 0 },
          { t: "mcq", a: 0 },
          { t: "mcq", a: 0 },
          { t: "fill", a: ["kenne"] },
          { t: "fill", a: ["hätten"] },
          {
            t: "cloze",
            text: "Er sagte, er {{1}} in der folgenden Woche {{2}}.",
            gaps: [["werde"], ["anrufen"]]
          },
          { t: "multi", a: [0, 1] },
          {
            t: "order",
            tokens: ["Sie", "sagte,", "sie", "sei", "am", "Tag", "davor", "dort", "gewesen"],
            a: ["Sie sagte, sie sei am Tag davor dort gewesen"]
          },
          {
            t: "trans",
            dir: "toIt",
            a: [
              "Er sagte, er habe den Film am Tag davor gesehen",
              "Er sagte, er habe den Film am Vortag gesehen",
              "Er sagte, dass er den Film am Tag davor gesehen habe",
              "Er sagte, dass er den Film am Vortag gesehen habe",
              "Er hat gesagt, er habe den Film am Tag davor gesehen",
              "Er hat gesagt, er habe den Film am Vortag gesehen"
            ]
          },
          {
            t: "listen",
            it: "In der Pressekonferenz teilte die Bürgermeisterin mit, die Brücke werde am folgenden Montag wieder geöffnet. Sie versicherte, alle Arbeiten seien inzwischen abgeschlossen."
          },
          { t: "speak", it: "Der Minister versicherte, er habe von dem Problem nichts gewusst." }
        ]
      },
      {
        id: "b2-u05-l3",
        tags: ["g-konjunktiv1", "g-nebensatz-dass", "g-modalverben"],
        cefr: "B2",
        titleIt: "Er fragte, ob ...; sie sagte, ich solle ...",
        grammar: {
          examples: [
            { it: "Er fragte, ob ich Zeit hätte." },
            { it: "Sie fragte, wann der Zug fahre." },
            { it: "Sie sagte, ich solle hier warten." },
            { it: "Er bat mich, ihn anzurufen." },
            { it: "Sie wollte wissen, ob ich mitkäme." },
            { it: "Der Arzt sagte, ich solle mehr schlafen." }
          ]
        },
        vocab: [
          { it: "die Bitte", plural: "die Bitten", ex: "Ich habe eine Bitte an Sie." },
          { it: "die Anweisung", plural: "die Anweisungen", ex: "Folgen Sie bitte den Anweisungen." },
          { it: "der Befehl", plural: "die Befehle", ex: "Der Soldat gehorchte dem Befehl." },
          { it: "die Auskunft", plural: "die Auskünfte", ex: "Können Sie mir eine Auskunft geben?" },
          { it: "die Vernehmung", plural: "die Vernehmungen", ex: "Die Vernehmung dauerte zwei Stunden." },
          { it: "auffordern", ex: "Er forderte mich auf, zu warten." },
          { it: "bitten", ex: "Sie bat mich um Hilfe." },
          { it: "sich erkundigen", ex: "Ich habe mich nach dem Weg erkundigt." },
          { it: "wissen wollen", ex: "Er wollte wissen, wann wir ankommen." },
          { it: "verlangen", ex: "Der Kunde verlangte sein Geld zurück." },
          { it: "ausdrücklich", ex: "Sie hat ausdrücklich darum gebeten." },
          { it: "dringend", ex: "Er soll dringend zurückrufen." }
        ],
        exercises: [
          { t: "mcq", a: 0 },
          { t: "mcq", a: 0 },
          { t: "mcq", a: 0 },
          { t: "fill", a: ["ob"] },
          { t: "fill", a: ["solle"] },
          {
            t: "cloze",
            text: "Er {{1}} mich, ihn {{2}}.",
            gaps: [["bat"], ["anzurufen"]]
          },
          {
            t: "match",
            pairs: [{ it: "bitten" }, { it: "auffordern" }, { it: "sich erkundigen" }, { it: "verlangen" }]
          },
          {
            t: "order",
            tokens: ["Sie", "wollte", "wissen,", "ob", "ich", "morgen", "Zeit", "hätte"],
            a: ["Sie wollte wissen, ob ich morgen Zeit hätte"]
          },
          {
            t: "trans",
            dir: "toIt",
            a: [
              "Sie fragte mich, wo ich wohne",
              "Sie fragte mich, wo ich wohnte",
              "Sie fragte mich, wo ich wohnen würde",
              "Sie hat mich gefragt, wo ich wohne",
              "Sie hat mich gefragt, wo ich wohnte",
              "Sie fragte, wo ich wohne",
              "Sie fragte, wo ich wohnte"
            ]
          },
          {
            t: "listen",
            it: "Der Polizist fragte mich, ob ich den Unfall gesehen hätte. Dann forderte er mich auf, ihm meinen Ausweis zu zeigen."
          },
          { t: "speak", it: "Sie bat mich, sie dringend zurückzurufen." }
        ]
      }
    ],
    test: {
      id: "b2-u05-test",
      tags: ["g-konjunktiv1"],
      cefr: "B2",
      titleIt: "Test: Sie sagte, sie sei krank",
      exercises: [
        { t: "fill", a: ["habe"] },
        { t: "fill", a: ["sei"] },
        { t: "fill", a: ["ob"] },
        { t: "mcq", a: 0 },
        { t: "mcq", a: 0 },
        { t: "mcq", a: 0 },
        { t: "multi", a: [0, 1] },
        {
          t: "cloze",
          text: "Sie sagte, sie {{1}} den Brief am Tag davor {{2}}.",
          gaps: [["habe"], ["geschickt"]]
        },
        {
          t: "listen",
          it: "Die Sprecherin der Firma erklärte, man habe die Kunden sofort informiert. Auf die Frage, ob es weitere Probleme gebe, antwortete sie, das könne sie noch nicht sagen."
        },
        { t: "speak", it: "Der Zeuge sagte, er habe den Mann nie zuvor gesehen." }
      ]
    }
  }
]);
