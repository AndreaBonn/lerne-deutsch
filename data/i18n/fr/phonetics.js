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
  },

  "ph:ph-ue-i": {
    title: "ü et i",
    note: "Le ü allemand est une voyelle antérieure arrondie : la langue est placée comme pour i, les lèvres sont arrondies. Dans chaque paire seules les lèvres changent ; la durée reste la même : brève dans Kissen et küssen, Kiste et Küste, longue dans vier et für, spielen et spülen, Ziege et Züge, liegen et lügen.",
    contrast: "Ce son, vous l'avez déjà : le ü long est le u de « rue », simplement tenu plus longtemps (für, spülen, Züge, lügen). La difficulté est ailleurs, dans les paires brèves. Le ü de küssen et Küste est plus court et un peu plus ouvert que votre u, et le i de Kissen et Kiste est lui aussi plus ouvert que votre i. Ne prononcez pas ces brèves avec la tension du français : gardez seulement l'arrondi des lèvres comme différence.",
    pairs: [
      { glossA: "le coussin, l'oreiller", glossB: "embrasser" },
      { glossA: "la caisse", glossB: "la côte" },
      { glossA: "quatre", glossB: "pour" },
      { glossA: "jouer", glossB: "rincer, faire la vaisselle" },
      { glossA: "la chèvre", glossB: "les trains" },
      { glossA: "être couché, se trouver", glossB: "mentir" }
    ]
  },

  "ph:ph-oe-e": {
    title: "ö et e",
    note: "Le ö est le partenaire arrondi du e : la langue est placée comme pour e, les lèvres s'arrondissent. Il peut être long et fermé (lesen et lösen, Sehne et Söhne, Hefe et Höfe) ou bref et plus ouvert (kennen et können, helle et Hölle). Dans chaque paire la durée ne change pas : seules les lèvres changent.",
    contrast: "Là aussi, le son existe en français. Le ö long est le eu de « peu » ou de « deux », tenu plus longtemps (lösen, Söhne, Höfe) ; le ö bref est proche du eu de « peur », mais bref (können, Hölle). Ce que le français n'a pas, c'est la durée : Sehne et Söhne ont une voyelle longue, kennen et können une brève. Le piège est de lire la lettre ö comme un o.",
    pairs: [
      { glossA: "connaître", glossB: "pouvoir, savoir faire" },
      { glossA: "lire", glossB: "résoudre, détacher" },
      { glossA: "le tendon", glossB: "les fils" },
      { glossA: "la levure", glossB: "les cours (de ferme)" },
      { glossA: "claire, lumineuse (de hell)", glossB: "l'enfer" }
    ]
  },

  "ph:ph-s-z": {
    title: "s et z en début de mot",
    note: "En allemand d'Allemagne, le s en début de mot devant une voyelle est sonore [z], et le z se prononce toujours [ts]. Saal commence donc par un bourdonnement, Zahl par un t suivi d'un s. En Autriche, en Suisse et dans le sud de l'Allemagne, le s initial est souvent sourd ; les enregistrements du cours suivent la norme du nord.",
    contrast: "Le son [z] ne vous pose aucun problème, mais en français il s'écrit z en début de mot : vous lirez Zahl comme « zal », et c'est exactement Saal. Inversez la lecture. Le s allemand initial se prononce comme votre z de « zéro » ; le z allemand se prononce [ts], comme dans « tsé-tsé ». Et le s de seit, Sinn, Saal n'est pas le s de « soleil ».",
    pairs: [
      { glossA: "depuis", glossB: "le temps" },
      { glossA: "les cordes", glossB: "la ligne" },
      { glossA: "la salle", glossB: "le nombre" },
      { glossA: "le sens", glossB: "l'étain" }
    ]
  }

});
