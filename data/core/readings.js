/* Neutral layer: reading texts. Every sentence is German and spoken; a
   recording is made per sentence, so the same file serves dictation and
   continuous listening. The comprehension questions are German too and live
   here, not in the overlay: testing a German text in the learner's language
   tests translation, not understanding. The overlay holds the title, the
   glosses of hard words and the lookup meanings. */
/* APPENDS rather than assigns: the library adds its long texts to this same
   list from the level files, and an assignment here would wipe whatever
   arrived first. */
LINGUAI.addReadings([

  /* ---------------- A1 ---------------- */
  {
    id: "r-a1-cafe",
    cefr: "A1",
    tag: "g-praesens",
    titleIt: "Feierabend im Café",
    sentences: [
      "Es ist Feierabend, und Anna geht ins Café.",
      "Sie ist Lehrerin von Beruf und arbeitet in Köln.",
      "An der Theke sagt sie: „Guten Abend, einen Kaffee, bitte.“",
      "Der Kellner heißt Jonas und fragt: „Mit Milch?“",
      "„Ja, bitte“, sagt Anna, „und ein Wasser.“",
      "Am Nachbartisch sitzt ein Mann und liest die Zeitung.",
      "Er fragt: „Entschuldigung, wie heißen Sie?“",
      "„Ich heiße Anna. Und Sie?“",
      "„Ich bin Tom. Wir sagen du, okay?“",
      "Anna lacht. Der Kaffee ist heiß, und der Feierabend ist schön."
    ],
    glossIt: ["der Feierabend", "die Theke", "der Kellner", "der Nachbartisch", "Entschuldigung"],
    lexIt: ["Café", "Lehrerin", "Beruf", "arbeiten", "Köln", "Milch", "Wasser", "Zeitung", "lesen", "lachen", "heiß", "schön"],
    questions: [
      { t: "truefalse", q: "Anna bestellt einen Tee.", a: 1 },
      { t: "mcq", q: "Was ist Anna von Beruf?", opts: ["Lehrerin", "Kellnerin", "Ärztin"], a: 0 },
      { t: "mcq", q: "Wie heißt der Kellner?", opts: ["Jonas", "Tom", "Anna"], a: 0 },
      { t: "truefalse", q: "Tom möchte mit Anna per du sein.", a: 0 }
    ]
  },
  {
    id: "r-a1-markt",
    cefr: "A1",
    tag: "g-artikel-akk",
    titleIt: "Samstag auf dem Markt",
    sentences: [
      "Am Samstag geht Lena auf den Markt in Bern.",
      "Sie braucht Obst und Gemüse für das Wochenende.",
      "Am ersten Stand kauft sie einen Salat und ein Kilo Tomaten.",
      "Die Verkäuferin fragt: „Möchten Sie auch Äpfel?“",
      "„Ja, gern, ein Kilo, bitte. Was kostet das?“",
      "„Das macht zusammen acht Franken.“",
      "Lena hat keinen Korb, aber sie hat eine Tasche.",
      "Am Ende kauft sie noch einen Käse und ein Brot und geht nach Hause."
    ],
    glossIt: ["das Gemüse", "der Stand", "die Verkäuferin", "zusammen", "der Korb"],
    lexIt: ["Samstag", "Markt", "Bern", "brauchen", "Obst", "Wochenende", "kaufen", "Salat", "Kilo", "Tomate", "Apfel", "kosten", "Franken", "Tasche", "Käse", "Brot"],
    questions: [
      { t: "mcq", q: "Wo ist der Markt?", opts: ["in Bern", "in Wien", "in Köln"], a: 0 },
      { t: "truefalse", q: "Lena hat einen Korb.", a: 1 },
      { t: "mcq", q: "Wie viel kostet alles am ersten Stand?", opts: ["acht Franken", "acht Euro", "zehn Franken"], a: 0 }
    ]
  },

  /* ---------------- A2 ---------------- */
  {
    id: "r-a2-kaernten",
    cefr: "A2",
    tag: "g-praeteritum",
    titleIt: "Sommer am See",
    sentences: [
      "Als Kind war Paul jeden Sommer bei seiner Oma in Kärnten.",
      "Ihr Haus war klein, aber es hatte einen großen Garten direkt am See.",
      "Paul durfte jeden Tag schwimmen, und abends gab es oft Marillenknödel.",
      "Einen Fernseher hatte die Oma nicht, deshalb haben sie abends Karten gespielt.",
      "Manchmal wollte Paul nicht ins Bett, aber er musste um neun schlafen gehen.",
      "Heute ist Paul dreißig und wohnt in Hamburg.",
      "Er erinnert sich gern an diese Sommer.",
      "Nächsten Juli fährt er wieder nach Kärnten, diesmal mit seiner Tochter."
    ],
    glossIt: ["die Marillenknödel", "der Fernseher", "deshalb", "sich erinnern"],
    lexIt: ["Kind", "Sommer", "Oma", "Kärnten", "Haus", "Garten", "See", "schwimmen", "Karte", "Bett", "Hamburg", "Tochter"],
    questions: [
      { t: "mcq", q: "Wo war Paul als Kind im Sommer?", opts: ["bei seiner Oma in Kärnten", "bei seiner Tochter in Hamburg", "bei seinen Eltern am Meer"], a: 0 },
      { t: "truefalse", q: "Die Oma hatte einen Fernseher.", a: 1 },
      { t: "mcq", q: "Was musste Paul um neun Uhr machen?", opts: ["schlafen gehen", "schwimmen", "Karten spielen"], a: 0 },
      { t: "truefalse", q: "Im Juli fährt Paul allein nach Kärnten.", a: 1 }
    ]
  },
  {
    id: "r-a2-zug",
    cefr: "A2",
    tag: "g-perfekt",
    titleIt: "Verspätung nach Salzburg",
    sentences: [
      "Letzten Freitag wollte Sara von München nach Salzburg fahren.",
      "Sie ist früh aufgestanden und hat am Automaten eine Fahrkarte gekauft.",
      "Dann hat sie auf die Anzeigetafel geschaut: Der Zug hatte vierzig Minuten Verspätung.",
      "Außerdem ist er nicht von Gleis 12 abgefahren, sondern von Gleis 15.",
      "Sara hat einen Kaffee getrunken und eine Brezel gegessen.",
      "Am Gleis hat sie eine Frau aus Linz kennengelernt.",
      "Die beiden haben die ganze Fahrt geredet, und die Zeit ist schnell vergangen.",
      "In Salzburg haben sie ihre Telefonnummern getauscht."
    ],
    glossIt: ["der Automat", "die Anzeigetafel", "die Verspätung", "das Gleis", "vergehen"],
    lexIt: ["Freitag", "München", "Salzburg", "aufstehen", "Fahrkarte", "kaufen", "schauen", "abfahren", "trinken", "Brezel", "essen", "Linz", "kennenlernen", "Fahrt", "reden", "Telefonnummer", "tauschen"],
    questions: [
      { t: "truefalse", q: "Der Zug ist pünktlich abgefahren.", a: 1 },
      { t: "mcq", q: "Von welchem Gleis ist der Zug abgefahren?", opts: ["von Gleis 15", "von Gleis 12", "von Gleis 40"], a: 0 },
      { t: "mcq", q: "Woher kommt die Frau?", opts: ["aus Linz", "aus München", "aus Salzburg"], a: 0 }
    ]
  },
  {
    id: "r-a2-arzt",
    cefr: "A2",
    tag: "g-pron-dat",
    titleIt: "Termin beim Hausarzt",
    sentences: [
      "Jan Weber arbeitet viel am Computer, und seit drei Tagen tut ihm der Rücken weh.",
      "Am Montag ruft er in der Praxis an und bekommt einen Termin um zehn Uhr.",
      "Er nimmt seine Gesundheitskarte von der Krankenkasse mit.",
      "Die Ärztin fragt ihn: „Wo genau tut es Ihnen weh?“",
      "Sie untersucht ihn und sagt: „Das ist nichts Schlimmes, aber Sie sollten mehr Pausen machen.“",
      "Sie gibt ihm ein Rezept für eine Salbe und schreibt ihn für zwei Tage krank.",
      "In der Apotheke erklärt ihm die Apothekerin: „Tragen Sie die Salbe zweimal am Tag auf.“",
      "Am Abend geht es Jan schon ein bisschen besser."
    ],
    glossIt: ["der Rücken", "die Praxis", "die Gesundheitskarte", "das Rezept", "die Salbe", "krankschreiben"],
    lexIt: ["Computer", "wehtun", "anrufen", "Termin", "mitnehmen", "Krankenkasse", "Ärztin", "untersuchen", "Pause", "Apotheke", "erklären", "Apothekerin", "auftragen", "besser"],
    questions: [
      { t: "mcq", q: "Was tut Jan weh?", opts: ["der Rücken", "der Kopf", "der Bauch"], a: 0 },
      { t: "truefalse", q: "Die Ärztin sagt, Jan muss ins Krankenhaus.", a: 1 },
      { t: "mcq", q: "Wie oft soll Jan die Salbe auftragen?", opts: ["zweimal am Tag", "einmal am Tag", "dreimal am Tag"], a: 0 },
      { t: "truefalse", q: "Die Ärztin schreibt Jan für zwei Tage krank.", a: 0 }
    ]
  },
  {
    id: "r-a2-wg",
    cefr: "A2",
    tag: "g-wechselpraep",
    titleIt: "Ein Zimmer in Leipzig",
    sentences: [
      "Mia studiert in Leipzig und sucht ein Zimmer in einer WG.",
      "Im Internet findet sie eine Anzeige: 14 Quadratmeter, 320 Euro warm, ab dem ersten März.",
      "Bei der Besichtigung zeigt ihr Ben die Wohnung.",
      "In der Küche steht ein großer Tisch, und auf dem Balkon ist Platz für Pflanzen.",
      "Das Zimmer ist noch leer, aber es ist hell und ruhig.",
      "Mia denkt: „Das Bett stelle ich an die Wand und den Schreibtisch vor das Fenster.“",
      "Am Abend schreibt Ben ihr eine Nachricht: „Wir möchten dich gern als Mitbewohnerin!“",
      "Mia freut sich sehr und sagt sofort ja."
    ],
    glossIt: ["die WG", "die Anzeige", "warm", "die Besichtigung", "die Mitbewohnerin"],
    lexIt: ["studieren", "Leipzig", "suchen", "Zimmer", "Quadratmeter", "Wohnung", "Küche", "Balkon", "Pflanze", "leer", "hell", "ruhig", "stellen", "Wand", "Schreibtisch", "Fenster", "Nachricht", "sich freuen"],
    questions: [
      { t: "mcq", q: "Wie viel kostet das Zimmer im Monat?", opts: ["320 Euro", "14 Euro", "300 Euro"], a: 0 },
      { t: "truefalse", q: "Im Zimmer stehen schon Möbel.", a: 1 },
      { t: "mcq", q: "Wohin möchte Mia den Schreibtisch stellen?", opts: ["vor das Fenster", "an die Wand", "in die Küche"], a: 0 }
    ]
  },
  {
    id: "r-a2-geburtstag",
    cefr: "A2",
    tag: "g-verben-dativ",
    titleIt: "Ein Fest in Zürich",
    sentences: [
      "Am Samstag hat Lukas Geburtstag, und er feiert mit Freunden in Zürich.",
      "Seine Kollegin Elif bekommt eine Einladung: „Hast du Lust, am Samstag zu kommen?“",
      "Elif antwortet ihm sofort: „Sehr gern, danke!“",
      "Aber was soll sie ihm schenken?",
      "Lukas hört gern Jazz, deshalb kauft sie ihm eine alte Jazzplatte.",
      "Auf der Party gratuliert sie ihm: „Alles Gute zum Geburtstag!“",
      "Die Platte gefällt Lukas sehr, und er dankt ihr herzlich.",
      "Die Mutter von Lukas begrüßt Elif mit „Grüezi“, denn so sagt man in Zürich „Guten Tag“."
    ],
    glossIt: ["die Einladung", "Lust haben", "die Platte", "gratulieren", "Grüezi"],
    lexIt: ["Geburtstag", "feiern", "Freund", "Zürich", "Kollegin", "antworten", "schenken", "Jazz", "Party", "gefallen", "danken", "herzlich", "Mutter", "begrüßen"],
    questions: [
      { t: "mcq", q: "Wo feiert Lukas seinen Geburtstag?", opts: ["in Zürich", "in Bern", "in Wien"], a: 0 },
      { t: "mcq", q: "Was schenkt Elif Lukas?", opts: ["eine Jazzplatte", "ein Buch", "Blumen"], a: 0 },
      { t: "truefalse", q: "Das Geschenk gefällt Lukas nicht.", a: 1 }
    ]
  },
  {
    id: "r-a2-wien",
    cefr: "A2",
    tag: "g-nebensatz-weil",
    titleIt: "Nächstes Jahr in Wien",
    sentences: [
      "Karim arbeitet als Koch in einem Hotel in Düsseldorf.",
      "Nächstes Jahr möchte er nach Wien ziehen, weil seine Freundin dort eine Stelle gefunden hat.",
      "Er hat vor, in Wien ein kleines Restaurant zu eröffnen.",
      "Zuerst wird er aber in einem Kaffeehaus arbeiten, weil er die Wiener Küche noch nicht gut kennt.",
      "Er weiß, dass die Wohnungssuche in Wien Zeit braucht.",
      "Deshalb sucht er schon jetzt im Internet.",
      "Seine Eltern sind ein bisschen traurig, weil er dann weit weg wohnt.",
      "Aber Karim sagt: „Mit dem Zug seid ihr in ungefähr zehn Stunden bei uns!“"
    ],
    glossIt: ["die Stelle", "vorhaben", "eröffnen", "das Kaffeehaus", "die Wohnungssuche"],
    lexIt: ["Koch", "Hotel", "Düsseldorf", "ziehen", "Freundin", "Wien", "Restaurant", "Küche", "kennen", "wissen", "Eltern", "traurig", "weit", "Zug", "ungefähr", "Stunde"],
    questions: [
      { t: "mcq", q: "Warum möchte Karim nach Wien ziehen?", opts: ["Seine Freundin hat dort eine Stelle gefunden.", "Er hat dort eine Wohnung gekauft.", "Seine Eltern wohnen dort."], a: 0 },
      { t: "truefalse", q: "In Wien möchte Karim zuerst ein Restaurant eröffnen.", a: 1 },
      { t: "mcq", q: "Wie lange dauert die Zugfahrt nach Wien laut Karim?", opts: ["ungefähr zehn Stunden", "ungefähr vier Stunden", "ungefähr zwei Tage"], a: 0 }
    ]
  }
]);
