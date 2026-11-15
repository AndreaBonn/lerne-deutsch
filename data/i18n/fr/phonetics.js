/* ============================================================
   Paires minimales : texte en français.

   Les notes contrastives sont écrites pour un francophone, pas
   traduites. Le français n'oppose pas de voyelles longues et brèves,
   et sa voyelle i est toujours tendue : la voyelle brève allemande
   (Mitte, Bett) est la plus difficile à entendre.
   ============================================================ */
LINGUAI.addStrings("fr", {

  "ph:ph-lang-kurz": {
    title: "Voyelle longue et voyelle brève",
    note: "En allemand, la durée de la voyelle change le mot : les voyelles longues durent plus que les brèves. Dans beaucoup de paires le timbre change aussi (la longue est plus tendue et fermée), mais pas dans toutes : dans Staat et Stadt, c'est surtout la durée. L'écriture aide : après une voyelle brève, on trouve en général deux consonnes (Bett, Mitte, offen).",
    contrast: "Votre i français est toujours tendu, comme celui de Miete. Il faut donc apprendre un second i, plus court et plus ouvert, pour Mitte et bitten : sinon bieten et bitten sonnent pareil. Même chose pour e : Beet est tendu et long, Bett est bref et ouvert. Et la lettre doublée ne se prononce pas deux fois : elle indique seulement que la voyelle qui précède est brève.",
    pairs: [
      { glossA: "l'État", glossB: "la ville" },
      { glossA: "offrir, proposer", glossB: "demander, prier" },
      { glossA: "la grotte", glossB: "l'enfer" },
      { glossA: "le loyer", glossB: "le milieu, le centre" },
      { glossA: "le four, le poêle", glossB: "ouvert" },
      { glossA: "la plate-bande", glossB: "le lit" }
    ]
  }

});
