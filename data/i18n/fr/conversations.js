/* ============================================================
   Learner-language text (fr) for data/core/conversations.js
   Keys point at ids in the neutral layer; arrays merge by index,
   so their length has to match core.
   Checked by scripts/parity.mjs.
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
