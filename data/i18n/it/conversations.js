/* ============================================================
   Learner-language text (it) for data/core/conversations.js
   Keys point at ids in the neutral layer; arrays merge by index,
   so their length has to match core.
   Checked by scripts/parity.mjs.
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
