/* Tâches d'écriture : consignes et listes de contrôle en français.
   Le texte modèle se trouve dans la couche neutre. */
LINGUAI.addStrings("fr", {

  "write:w-a1-vorstellung": {
    title: "Je me présente",
    brief: "Écrivez un court texte en allemand pour vous présenter : comment vous vous appelez, d'où vous venez et où vous habitez maintenant. Vous pouvez ajouter votre âge, votre métier ou un loisir.",
    checklist: ["Le verbe conjugué est-il en deuxième position dans chaque proposition principale ?", "Avez-vous mis une majuscule à tous les noms ?", "Avez-vous commencé par une salutation comme Hallo ou Guten Tag ?"]
  },
  "write:w-a2-gestern": {
    title: "Qu'as-tu fait hier ?",
    brief: "Traduis les phrases en allemand. Pas besoin de coller au mot près.",
    checklist: ["As-tu choisi le bon auxiliaire ? gehen et ankommen prennent sein, comme aller et arriver prennent être ; essen et verstehen prennent haben.", "Le participe est-il en fin de phrase, loin de l'auxiliaire ?", "As-tu écrit ich bin aufgestanden sans mich ? Aufstehen n'est pas pronominal, même si l'on dit je me suis levé."],
    items: [{ q: "Hier, je suis allé au cinéma." }, { q: "Nous avons mangé une escalope." }, { q: "Je n'ai pas compris la question." }, { q: "Le train est arrivé en retard." }, { q: "Je me suis levé tard." }]
  },
  "write:w-b1-absage": {
    title: "Annuler un rendez-vous",
    brief: "Écris un court e-mail formel : tu annules un rendez-vous, tu en donnes brièvement la raison et tu proposes une autre date.",
    checklist: ["As-tu gardé Sie du début à la fin, avec Ihnen et Ihr en majuscule ?", "Après Sehr geehrte Frau ..., la ligne suivante commence par une minuscule ; en français, après Madame, on reprend avec une majuscule. L'as-tu respecté ?", "Ta formule finale est-elle courte ? Mit freundlichen Grüßen suffit, sans équivalent de Veuillez agréer ..."]
  },
  "write:w-b1-meinung": {
    title: "Dire ce que l'on pense",
    brief: "Traduis les phrases en allemand.",
    checklist: ["Après dass, le verbe conjugué est-il allé en fin de proposition ?", "Si tu as supprimé dass, le verbe est-il revenu en deuxième position (ich glaube, das ist eine gute Idee) ?", "As-tu mis une virgule devant dass ? Elle est obligatoire en allemand, alors que le français n'en met pas devant que."],
    items: [{ q: "Je pense que c'est une bonne idée." }, { q: "Je ne suis pas d'accord avec toi." }, { q: "À mon avis, c'est trop cher." }, { q: "Il me semble qu'il a raison." }, { q: "Ça dépend de ce que tu veux." }]
  },
  "write:w-b2-argumentieren": {
    title: "Défendre une position",
    brief: "Choisis un sujet qui te tient à cœur, par exemple le télétravail, une limitation générale de vitesse sur les autoroutes allemandes ou l'ouverture des magasins le dimanche, et défends ta position. Présente au moins un argument contraire et réponds-y.",
    checklist: ["L'argument contraire est-il présenté honnêtement, et non comme un homme de paille ?", "Après außerdem, deshalb ou jedoch en début de phrase, le verbe vient-il tout de suite (Deshalb liegt das Problem ...) ? En français, après c'est pourquoi, le sujet reste devant le verbe.", "La conclusion est-elle une phrase et non un slogan ?"]
  },
  "write:w-c1-zusammenfassung": {
    title: "Résumer sans recopier",
    brief: "Résume le texte « Prière d'en tenir compte » de la section Lire et écouter. Ne reprends pas ses phrases : écris ce que l'auteur affirme et sur quoi il s'appuie, et rapporte ses thèses au discours indirect.",
    checklist: ["As-tu rapporté les thèses de l'auteur au Konjunktiv I (sei, nenne, gebe) ? Ce mode indique seulement que l'affirmation vient de l'auteur, sans y ajouter de doute ; le français confie ce rôle à des mots comme selon l'auteur.", "Le résumé se comprend-il sans le texte original ?", "Ton opinion est-elle restée dehors, ou a-t-elle pris la place de celle de l'auteur ?"]
  }

});
