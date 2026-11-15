/* ============================================================
   Testi nella lingua dell'allievo (it) per data/core/conversations.js
   Le chiavi puntano agli id del livello neutro; gli array si fondono per indice,
   quindi la lunghezza deve coincidere con il core.
   Controllato da scripts/parity.mjs.
   German source in core, for reviewers ("(M)" other speaker, "(TY)" learner).
   The neutral file stays the single source of truth.
   (M) Guten Tag! Was möchten Sie trinken?
   (TY) branch 1: Einen Kaffee, bitte. | branch 2: Einen Tee, bitte.
   (M) Ein Kaffee, gern. / Ein Tee, gern. (both branches meet at the next line)
   (M) Und wie heißen Sie, bitte?
   (TY) Ich heiße Anna.
   (M) Danke. Möchten Sie auch ein Stück Kuchen?
   (TY) branch 1: Ja, ein Stück Apfelkuchen, bitte. | branch 2: Nein, danke.
   (M) after branch 1: Gern. Der Kuchen ist ganz frisch. Das macht sechs Euro.
   (M) after branch 2: Gut. Das macht drei Euro.
   (TY) Hier, bitte.
   (M) Danke schön! Auf Wiedersehen.
   (TY) Auf Wiedersehen!
   ============================================================ */
LINGUAI.addStrings("it", {
  "conv:cafe-bestellen": {
    title: "Al caffè",
    setting: "Sabato mattina, un caffè a Berlino. Ordini da bere e, in base a ciò che scegli, il conto cambia.",
    closing: "Il conto era giusto: tre euro senza torta, sei con la torta. Una scelta si vede alla fine.",
    turns: [
      { tr: "Buongiorno! Che cosa desidera da bere?" },
      { task: "Scegli che cosa ordinare da bere.", opts: [
        { tr: "Un caffè, per favore." },
        { tr: "Un tè, per favore." }
      ] },
      { tr: "Un caffè, volentieri." },
      { tr: "Un tè, volentieri." },
      { tr: "E come si chiama, per favore?" },
      { task: "Di' come ti chiami.", tr: "Mi chiamo Anna." },
      { tr: "Grazie. Desidera anche un pezzo di torta?" },
      { task: "Decidi se vuoi la torta.", opts: [
        { tr: "Sì, un pezzo di torta di mele, per favore." },
        { tr: "No, grazie." }
      ] },
      { tr: "Volentieri. La torta è freschissima. Fanno sei euro." },
      { tr: "Bene. Fanno tre euro." },
      { task: "Dai i soldi alla cameriera.", tr: "Ecco, prego." },
      { tr: "Grazie mille! Arrivederci." },
      { task: "Saluta e vai via.", tr: "Arrivederci!" }
    ]
  }
});
