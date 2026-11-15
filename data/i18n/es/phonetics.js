/* ============================================================
   Pares mínimos: texto en español.

   Las notas contrastivas están escritas para un hispanohablante, no
   traducidas. El español tiene cinco vocales y ninguna distinción de
   duración, así que hay que aprender a oír tanto la duración como la
   diferencia de timbre entre la vocal tensa y la relajada.
   ============================================================ */
LINGUAI.addStrings("es", {

  "ph:ph-lang-kurz": {
    title: "Vocal larga y vocal corta",
    note: "En alemán la duración de la vocal cambia la palabra: las vocales largas duran más que las cortas. En muchos pares cambia también el timbre (la larga es más tensa y cerrada), pero no en todos: en Staat y Stadt cambia sobre todo la duración. La escritura ayuda: tras una vocal corta suele haber dos consonantes (Bett, Mitte, offen).",
    contrast: "En español solo existe una i, y la de «vino» dura lo mismo que la de «piso». Por eso bieten y bitten tienden a oírse como la misma palabra. Piensa en dos sonidos: una i larga y tensa (Miete) y una i corta y más abierta (Mitte). Además, la doble letra no se pronuncia doble como la rr: Mitte lleva una t sencilla, y la doble solo avisa de que la vocal anterior es corta.",
    pairs: [
      { glossA: "el Estado", glossB: "la ciudad" },
      { glossA: "ofrecer", glossB: "pedir, rogar" },
      { glossA: "la cueva", glossB: "el infierno" },
      { glossA: "el alquiler", glossB: "el medio, el centro" },
      { glossA: "el horno, la estufa", glossB: "abierto" },
      { glossA: "el parterre", glossB: "la cama" }
    ]
  }

});
