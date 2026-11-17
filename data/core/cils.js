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

   CILS_FORMATO declares module order, duration and target task counts.
   The three unwritten sections stay as empty shells; Cils.conforme reports
   them as incomplete until their content arrives in later tasks.

   Every module keeps its Teile in sezioni[].prove. Legacy tracce,
   presentazione and argomenti remain supported until seed content arrives.
   Closed tasks carry puntiPerItem; their weighted item sums set the maximum.
   - vf: items [{q, a:0|1}], testo[] or brani[][] of {it} lines.
   - mc: items [{q, opts:[], a:index}], optional testo[] or brani[][].
   - abbina: annunci [{titolo, testo}], items [{q, a:index}]; annunci.length
     denotes option "0", no suitable advertisement.
   - jn: testo[] reader letters and items [{q, a:0|1}] for Ja/Nein.
   - schreiben: {t, consegna, punti:[], parole:{min,max}}, never scored.
   - sprechen: {t, consegna, punti:[]}, never scored.
   ============================================================ */
window.CILS_FORMATO = {
  official: false,
  soglia: 0.6,
  moduli: [
    { id: "lettura", modulo: "Lesen", minuti: 65, teile: 5, punteggio: true },
    { id: "ascolto", modulo: "Hören", minuti: 40, teile: 4, punteggio: true },
    { id: "scritta", modulo: "Schreiben", minuti: 60, teile: 3, punteggio: false },
    { id: "orale", modulo: "Sprechen", minuti: 15, teile: 3, punteggio: false }
  ]
};
window.CILS = [

  {
    id: "sim-1",
    official: false,
    titoloIt: "Modelltest 1",
    sezioni: [

      /* ---------------- LESEN: 1 task ---------------- */
      {
        id: "lettura",
        modulo: "Lesen",
        minuti: 65,
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

      /* Listening: not written yet. Empty shell, see the header. */
      { id: "ascolto", modulo: "Hören", minuti: 40, prove: [] },

      /* Writing: not written yet. Empty shell, see the header. */
      { id: "scritta", modulo: "Schreiben", minuti: 60, consegna: "", tracce: [] },

      /* Speaking: not written yet. Empty shell, see the header. */
      { id: "orale", modulo: "Sprechen", minuti: 15, presentazione: [], argomenti: [] }
    ]
  }
];
