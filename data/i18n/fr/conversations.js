/* ============================================================
   Textes dans la langue de l'apprenant (fr) pour data/core/conversations.js
   Les clés pointent vers des ids de la couche neutre ; les tableaux fusionnent par index,
   leur longueur doit donc être celle du core.
   Contrôlé par scripts/parity.mjs.
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
LINGUAI.addStrings("fr", {
  "conv:cafe-bestellen": {
    title: "Au café",
    setting: "Samedi matin, un café à Berlin. Vous commandez une boisson et, selon votre choix, l'addition change.",
    closing: "L'addition était juste : trois euros sans gâteau, six avec. Un choix se voit à la fin.",
    turns: [
      { tr: "Bonjour ! Que désirez-vous boire ?" },
      { task: "Choisissez ce que vous commandez à boire.", opts: [
        { tr: "Un café, s'il vous plaît." },
        { tr: "Un thé, s'il vous plaît." }
      ] },
      { tr: "Un café, avec plaisir." },
      { tr: "Un thé, avec plaisir." },
      { tr: "Et comment vous appelez-vous, s'il vous plaît ?" },
      { task: "Dites comment vous vous appelez.", tr: "Je m'appelle Anna." },
      { tr: "Merci. Désirez-vous aussi une part de gâteau ?" },
      { task: "Décidez si vous voulez du gâteau.", opts: [
        { tr: "Oui, une part de gâteau aux pommes, s'il vous plaît." },
        { tr: "Non, merci." }
      ] },
      { tr: "Avec plaisir. Le gâteau est très frais. Cela fait six euros." },
      { tr: "Bien. Cela fait trois euros." },
      { task: "Donnez l'argent à la serveuse.", tr: "Voilà." },
      { tr: "Merci beaucoup ! Au revoir." },
      { task: "Dites au revoir et partez.", tr: "Au revoir !" }
    ]
  }
});
