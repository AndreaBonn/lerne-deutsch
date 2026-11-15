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
      { t: "truefalse", q: "Anna arbeitet in einem Café.", a: 1 },
      { t: "mcq", q: "Was ist Anna von Beruf?", opts: ["Lehrerin", "Kellnerin", "Ärztin"], a: 0 },
      { t: "mcq", q: "Wie heißt der Kellner?", opts: ["Jonas", "Tom", "Anna"], a: 0 },
      { t: "truefalse", q: "Anna und Tom sagen am Ende du.", a: 0 }
    ]
  }
]);
