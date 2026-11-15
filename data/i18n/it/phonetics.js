/* ============================================================
   Coppie minime: testi in italiano.

   Le note contrastive sono scritte per un italofono, non tradotte:
   l'italiano non distingue vocali lunghe e brevi e usa la doppia
   consonante per allungare la consonante, mentre in tedesco la doppia
   scritta segnala una vocale breve.
   ============================================================ */
LINGUAI.addStrings("it", {

  "ph:ph-lang-kurz": {
    title: "Vocale lunga e vocale breve",
    note: "In tedesco la lunghezza della vocale cambia la parola: le vocali lunghe durano più delle brevi. In molte coppie cambia anche il timbro (la lunga è più tesa e chiusa), ma non in tutte: in Staat e Stadt cambia soprattutto la durata. Nella scrittura aiuta una regola: dopo una vocale breve di solito trovi due consonanti (Bett, Mitte, offen).",
    contrast: "In italiano la doppia consonante allunga la CONSONANTE: in nonno la n è più lunga che in nono. In tedesco la doppia lettera non allunga niente: Mitte non si dice «mit-te», la t resta breve, e a diventare breve è la vocale prima. L'errore tipico è proprio leggere Bett e Mitte con la consonante lunga, e dire Miete e Beet con la vocale troppo corta. Ascolta la vocale, non la consonante.",
    pairs: [
      { glossA: "lo Stato", glossB: "la città" },
      { glossA: "offrire", glossB: "chiedere (per favore)" },
      { glossA: "la grotta", glossB: "l'inferno" },
      { glossA: "l'affitto", glossB: "il centro, la metà" },
      { glossA: "il forno, la stufa", glossB: "aperto" },
      { glossA: "l'aiuola", glossB: "il letto" }
    ]
  }

});
