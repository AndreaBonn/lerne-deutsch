/* ============================================================
   Textos en la lengua del alumno (es) para data/core/conversations.js
   Las claves apuntan a ids de la capa neutra; los arrays se fusionan por índice,
   así que su longitud debe coincidir con la del core.
   Lo comprueba scripts/parity.mjs.
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
LINGUAI.addStrings("es", {
  "conv:cafe-bestellen": {
    title: "En la cafetería",
    setting: "Sábado por la mañana, una cafetería en Berlín. Pides algo de beber y, según lo que elijas, la cuenta cambia.",
    closing: "La cuenta fue correcta: tres euros sin tarta, seis con tarta. Una elección se ve al final.",
    turns: [
      { tr: "¡Buenos días! ¿Qué desea beber?" },
      { task: "Elige qué pedir de beber.", opts: [
        { tr: "Un café, por favor." },
        { tr: "Un té, por favor." }
      ] },
      { tr: "Un café, con mucho gusto." },
      { tr: "Un té, con mucho gusto." },
      { tr: "¿Y cómo se llama, por favor?" },
      { task: "Di cómo te llamas.", tr: "Me llamo Anna." },
      { tr: "Gracias. ¿Desea también un trozo de tarta?" },
      { task: "Decide si quieres tarta.", opts: [
        { tr: "Sí, un trozo de tarta de manzana, por favor." },
        { tr: "No, gracias." }
      ] },
      { tr: "Con mucho gusto. La tarta es muy fresca. Son seis euros." },
      { tr: "Bien. Son tres euros." },
      { task: "Entrega el dinero.", tr: "Aquí tiene." },
      { tr: "¡Muchas gracias! Adiós." },
      { task: "Despídete y vete.", tr: "¡Adiós!" }
    ]
  }
});
