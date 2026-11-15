/* ============================================================
   Learner-language text (es) for data/core/conversations.js
   Keys point at ids in the neutral layer; arrays merge by index,
   so their length has to match core.
   Checked by scripts/parity.mjs.
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
