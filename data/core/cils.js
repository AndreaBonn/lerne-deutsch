/* ============================================================
   Language-neutral layer: exam simulation in the style of Goethe-Zertifikat B1.

   THE WHOLE FILE IS IN GERMAN AND HAS NO OVERLAY. Tasks, instructions and
   reading texts are what the learner meets in the room, so translating them
   would change the task. Adding an explanation language costs nothing here,
   and `parity.mjs` has nothing to compare.

   This is a SEED: one Lesen task. The file keeps its old name and its Italian
   field names (`sezioni`, `prove`, `lettura`, `titoloIt`) by design, because
   the engine reads them. The content is original; no official exam material
   is reproduced. The screen calls it an unofficial preview.

   The runner walks four sections in a fixed order (cils-run.js ORDINE), so
   the three sections that are not written yet stay as empty shells instead
   of being removed: a missing section would end the attempt right there.
   `ascolto`, `scritta` and `orale` get their content in later tasks.

   Scoring: a section is worth at most 12 points (Cils.MAX_ABILITA). The one
   reading task has 6 items worth 2 points each. A wrong answer and an
   omitted one are worth the same, zero.
   ============================================================ */
window.CILS = [

  {
    id: "sim-1",
    titoloIt: "Modelltest 1",
    sezioni: [

      /* Listening: not written yet. Empty shell, see the header. */
      { id: "ascolto", minuti: 1, prove: [] },

      /* ---------------- LESEN: 1 task ---------------- */
      {
        id: "lettura",
        minuti: 20,
        prove: [
          {
            t: "vf",
            puntiPerItem: 2,
            consegna: "Lies den Blogeintrag. Sind die Aussagen richtig oder falsch?",
            titolo: "Lenas Blog: Mein erstes Mal im Repair-Café",
            testo: [
              "Letzten Samstag war ich zum ersten Mal im Repair-Café in unserem Stadtteil. Meine Nachbarin hatte mir davon erzählt, nachdem mein Toaster kaputtgegangen war. Eigentlich wollte ich ihn wegwerfen, aber sie meinte, ich solle es doch erst einmal dort probieren.",
              "Das Café ist im Gemeindehaus neben der Kirche, immer am ersten Samstag im Monat von 10 bis 14 Uhr. Man muss sich nicht anmelden, aber es lohnt sich, früh zu kommen, denn oft steht schon vor der Tür eine Schlange. Ich war um halb elf da und musste trotzdem fast eine Stunde warten, bis jemand Zeit für mich hatte.",
              "Die Helfer arbeiten alle ehrenamtlich. Ein pensionierter Elektriker hat sich meinen Toaster angesehen. Er hat nichts ausgetauscht, sondern nur die Krümel entfernt und einen lockeren Draht festgeschraubt. Nach zehn Minuten funktionierte das Gerät wieder. Bezahlen musste ich nichts, aber auf dem Tisch stand eine Spendendose, und ich habe fünf Euro hineingelegt.",
              "Ersatzteile muss man selbst bezahlen. Wichtig ist auch: Die Helfer reparieren die Sachen nicht für einen, sondern gemeinsam mit einem. Ich musste also dabeibleiben und zusehen, und das fand ich sogar spannend.",
              "Nächsten Monat nehme ich die Lampe meiner Oma mit. Ich bin gespannt, ob man sie noch retten kann."
            ],
            items: [
              { q: "Lena hat vom Repair-Café durch ihre Nachbarin erfahren.", a: 0 },
              { q: "Das Repair-Café ist jeden Samstag geöffnet.", a: 1 },
              { q: "Man muss sich vorher anmelden.", a: 1 },
              { q: "Lena musste fast eine Stunde warten, bis jemand Zeit für ihren Toaster hatte.", a: 0 },
              { q: "Der Elektriker hat im Toaster ein neues Teil eingebaut.", a: 1 },
              { q: "Lena durfte nicht einfach weggehen, während ihr Toaster repariert wurde.", a: 0 }
            ]
          }
        ]
      },

      /* Writing: not written yet. Empty shell, see the header. */
      { id: "scritta", minuti: 1, consegna: "", tracce: [] },

      /* Speaking: not written yet. Empty shell, see the header. */
      { id: "orale", minuti: 1, presentazione: [], argomenti: [] }
    ]
  }
];
