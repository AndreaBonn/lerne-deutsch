/* ============================================================
   Textes dans la langue de l'élève (fr) pour data/core/pfl-06.js, unité pfl-u06.
   Les clés renvoient aux id de la couche neutre ; les tableaux se
   joignent par index, leur longueur doit donc correspondre à core.
   Vérifié par scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("fr", {
  "unit:pfl-u06": {
    title: "Transmissions et rapport de soins",
    grammarNote: "le Präteritum dans les transmissions et le rapport · les connecteurs deshalb, trotzdem, außerdem, weil · le style nominal de la documentation · le passif au Präteritum · le but avec damit et um ... zu · les abréviations du service"
  },
  "lesson:pfl-u06-l1": {
    theme: "Transmissions orales",
    title: "La relève",
    objectives: [
      "faire et recevoir des transmissions orales entre deux équipes",
      "raconter la nuit avec war, hatte, konnte, wollte",
      "relier les faits avec deshalb, trotzdem, außerdem et weil",
      "demander au collègue s'il y a autre chose à signaler"
    ],
    theory: [
      {
        h: "Ce qu'on dit à la relève",
        p: "Pendant la <strong>Übergabe</strong>, l'équipe qui part transmet à celle qui arrive ce qui compte pour le poste : comment s'est passée la nuit ou l'après-midi, ce qui a changé, ce qui a été fait et ce qui reste à faire. On procède chambre par chambre et patient par patient : <em>Fangen wir mit Zimmer zwölf an?</em> On rapporte des observations et des faits, pas des impressions : <em>Sie war unruhig. Gegen drei Uhr hatte sie Bauchschmerzen.</em> Et on termine par la question de celui qui reçoit : <em>Gibt es sonst noch Besonderheiten?</em>"
      },
      {
        h: "Präteritum et connecteurs",
        p: "Même à l'oral, <em>sein</em>, <em>haben</em> et les modaux se mettent presque toujours au <strong>Präteritum</strong> : <em>war, hatte, konnte, wollte, musste</em>. Les autres verbes, à l'oral, passent souvent au Perfekt : <em>Ich habe die Ärztin informiert.</em> Les connecteurs <em>deshalb</em> (c'est pourquoi), <em>trotzdem</em> (pourtant, quand même), <em>außerdem</em> (en plus) occupent la première place de la phrase, donc le verbe conjugué vient juste après : <em>deshalb <b>habe</b> ich</em>, <em>trotzdem <b>fühlte</b> sie sich wohl</em>. Avec <em>weil</em>, en revanche, on ouvre une subordonnée et le verbe va à la fin : <em>weil er Schmerzen <b>hatte</b></em>."
      },
      {
        contrast: "En France, la relève orale se raconte au passé composé : « elle a été agitée, elle a eu mal au ventre, j'ai appelé l'interne ». L'écrit, lui, suit souvent les transmissions ciblées : une cible, puis Données, Actions, Résultats (DAR). Le service allemand ne découpe pas la relève ainsi : on parle patient par patient, dans l'ordre de la nuit, et on mélange deux temps. <em>War, hatte, konnte</em> au Präteritum sont normaux même à l'oral, alors que <em>ist gewesen</em> ou <em>hat gehabt</em> sonnent lourds à la relève. Les autres verbes restent au Perfekt à l'oral et passent au Präteritum dans le rapport écrit (<em>Die Ärztin kam</em>). Attention aussi à l'ordre des mots : « c'est pourquoi j'ai appelé », « donc j'ai appelé » ne déplacent rien en français ; en allemand, <em>deshalb</em> et <em>trotzdem</em> prennent la première place et le verbe les suit tout de suite : <em>deshalb habe ich angerufen</em>, jamais <em>deshalb ich habe</em>."
      },
      {
        trap: "<em>übergeben</em> veut dire « transmettre, passer le relais », mais <em>sich übergeben</em> veut dire « vomir » : <em>Ich übergebe dir Zimmer zwölf</em>, c'est la relève ; <em>Die Patientin hat sich übergeben</em>, c'est une observation à transmettre. Le préfixe <em>über-</em> ne se sépare pas ici : <em>ich übergebe</em>, au Perfekt <em>ich habe übergeben</em>, sans <em>ge-</em> devant. Et <em>stabil</em> décrit des valeurs ou un état constants : ce n'est pas un jugement sur la personne."
      },
      {
        tip: "Prépare la relève dans le même ordre pour chaque patient : comment s'est passé le poste, les valeurs hors norme, ce que tu as fait, qui tu as prévenu, ce qui reste à faire. Avec un schéma fixe, les mots viennent même quand tu es fatiguée en fin de nuit, et celui qui écoute sait où chercher l'information."
      }
    ],
    grammar: {
      title: "Connecteurs et place du verbe",
      note: "<b>deshalb, trotzdem, außerdem</b> occupent la première place : le verbe conjugué vient juste après. <b>weil</b> ouvre une subordonnée : le verbe conjugué va à la fin.",
      table: {
        head: ["connecteur", "sens", "exemple"],
        rows: [
          ["deshalb", "c'est pourquoi, donc", "Sie hatte Schmerzen, deshalb habe ich die Ärztin informiert."],
          ["trotzdem", "pourtant, quand même", "Der Blutdruck war erhöht, trotzdem fühlte sie sich wohl."],
          ["außerdem", "en plus, de plus", "Außerdem wollte er nichts essen."],
          ["weil", "parce que", "Er konnte nicht schlafen, weil er Schmerzen hatte."]
        ]
      },
      examples: [
        { tr: "Madame Keller a été agitée pendant la nuit.", note: "sein au Präteritum : war, normal même à l'oral" },
        { tr: "Vers trois heures, elle avait mal au ventre, c'est pourquoi j'ai prévenu le médecin.", note: "deshalb en première place, puis tout de suite le verbe : habe" },
        { tr: "Monsieur Brandt n'arrivait pas à dormir parce qu'il avait mal.", note: "weil : le verbe conjugué hatte va à la fin" },
        { tr: "Le soir, la tension était élevée, mais elle se sentait quand même bien.", note: "trotzdem en première place, puis fühlte" },
        { tr: "En plus, il ne voulait rien manger.", note: "außerdem en première place, puis wollte" },
        { tr: "Nuit calme.", note: "verlaufen, au Präteritum verlief : typique des rapports" }
      ]
    },
    vocab: [
      "la relève, les transmissions (entre deux équipes)",
      "le poste du matin",
      "le poste de l'après-midi",
      "le poste de nuit",
      "transmettre, passer le relais",
      "agité",
      "la particularité, le point à signaler",
      "l'état",
      "stable",
      "c'est pourquoi, donc",
      "pourtant, quand même",
      "en plus, de plus"
    ],
    dialogue: [
      "Bonjour. On commence par la chambre douze ?",
      "Oui, volontiers. Comment s'est passée la nuit de madame Keller ?",
      "Madame Keller a été agitée. Vers trois heures, elle avait mal au ventre, c'est pourquoi j'ai prévenu le médecin de garde.",
      "Et ensuite ?",
      "Le médecin est venu et l'a examinée. Après, madame Keller a pu se rendormir.",
      "Il y a autre chose à signaler ?",
      "Elle a peu bu. En plus, le soir, la tension était élevée, mais elle se sentait quand même bien.",
      "Bien, alors je reprends sa tension tout de suite."
    ],
    culture: {
      title: "Regard allemand : la relève au lit du patient",
      text: "<p>Dans beaucoup de services allemands, la <i>Dienstübergabe</i> se fait dans la salle de soins ; dans d'autres, elle se fait en partie au lit du patient : la <i>Übergabe am Bett</i>. Au lit, le patient peut corriger ou compléter, mais le voisin de chambre et la famille sont là aussi : les informations sensibles se disent dehors, à voix basse ou dans la salle de soins.</p><p>Les postes s'appellent en général <i>Frühdienst</i>, <i>Spätdienst</i> et <i>Nachtdienst</i>, et les horaires changent d'un établissement à l'autre. Quand on arrive, on les trouve dans le <i>Dienstplan</i>, le planning.</p>"
    },
    exercises: [
      {
        q: "À la relève, tu dis que la patiente a été agitée pendant la nuit. Quelle phrase est correcte ?",
        opts: [
          "Frau Keller hatte in der Nacht unruhig.",
          "Frau Keller war in der Nacht unruhig.",
          "Frau Keller ist in der Nacht unruhig gewesen sein."
        ],
        why: "Avec un adjectif comme <i>unruhig</i>, il faut <b>sein</b>, et à la relève on utilise le Präteritum : <b>war</b>. <i>hatte unruhig</i> n'existe pas et <i>ist gewesen sein</i> est une forme fausse."
      },
      {
        tr: "Le Präteritum de schlafen, à toutes les personnes.",
        why: "<i>Schlief, schliefst, schlief, schliefen, schlieft, schliefen</i> : verbe fort, la voyelle devient <b>ie</b>, et la première et la troisième personne du singulier n'ont pas de terminaison."
      },
      {
        q: "Complète : « Sie hatte Schmerzen, ___ habe ich die Ärztin informiert. »",
        hint: "connecteur : c'est pourquoi",
        why: "<b>deshalb</b> (aussi <i>darum</i>, <i>daher</i>, <i>deswegen</i>) : il exprime la conséquence et occupe la première place, c'est pourquoi le verbe <i>habe</i> vient juste après."
      },
      {
        q: "Complète la phrase.",
        tr: "Le soir, la tension était élevée, mais elle se sentait quand même bien.",
        why: "<i>Der Blutdruck <b>war</b> am Abend erhöht</i> : sein au Präteritum. <i><b>trotzdem</b> fühlte sie sich wohl</i> : le connecteur prend la première place et le verbe le suit tout de suite."
      },
      {
        q: "Quelles phrases sont correctes ?",
        opts: [
          "Er hatte Schmerzen, deshalb konnte er nicht schlafen.",
          "Er hatte Schmerzen, deshalb er konnte nicht schlafen.",
          "Er konnte nicht schlafen, weil er Schmerzen hatte.",
          "Außerdem wollte er nichts essen.",
          "Er konnte nicht schlafen, weil er hatte Schmerzen."
        ],
        why: "Après <i>deshalb</i> et <i>außerdem</i> vient tout de suite le verbe conjugué : <i>deshalb konnte er</i>. Après <i>weil</i>, le verbe conjugué va à la fin : <i>weil er Schmerzen hatte</i>."
      },
      {
        q: "Choisis le bon article défini pour chaque nom.",
        items: ["relève", "poste du matin", "poste de l'après-midi", "poste de nuit", "particularité", "état"]
      },
      {
        q: "Associe chaque connecteur à son sens.",
        pairs: ["c'est pourquoi", "pourtant, quand même", "en plus", "parce que"]
      },
      {
        q: "Remets les mots dans l'ordre.",
        tr: "Elle avait mal, c'est pourquoi j'ai prévenu le médecin.",
        why: "<i>Sie hatte Schmerzen, deshalb habe ich die Ärztin informiert.</i> Après la virgule, <i>deshalb</i> occupe la première place de la deuxième phrase, puis le verbe <i>habe</i>, puis le sujet <i>ich</i> ; le participe <i>informiert</i> va à la fin, sans <i>ge-</i>."
      },
      {
        q: "Traduis (à la relève) : « La nuit a été calme. »",
        why: "<i>Die Nacht war ruhig</i> est la forme la plus simple ; dans les rapports on lit souvent <i>Die Nacht verlief ruhig</i>. À l'oral, <i>Die Nacht ist ruhig verlaufen</i> convient aussi."
      },
      {
        q: "La relève du matin.",
        setting: "Tu as fait le poste de nuit et tu passes la relève à un collègue.",
        lines: [
          { tr: "Comment s'est passée la nuit de monsieur Brandt ?" },
          { tr: "Réponds qu'il était agité parce qu'il avait mal.", answerTr: "Il était agité parce qu'il avait mal." },
          { tr: "Tu as prévenu le médecin ?" },
          { tr: "Réponds que oui : il avait très mal, c'est pourquoi tu l'as appelé.", answerTr: "Oui, il avait très mal, c'est pourquoi je l'ai appelé." },
          { tr: "Il y a autre chose à signaler ?" },
          { tr: "Réponds qu'en plus il a peu bu.", answerTr: "En plus, il a peu bu." }
        ]
      },
      {
        tr: "Vers trois heures, elle avait mal au ventre, c'est pourquoi j'ai prévenu le médecin de garde.",
        why: "Dans <i>Bauchschmerzen</i>, le <b>ch</b> après <b>au</b> se prononce [x], comme dans <i>auch</i> ; dans <i>deshalb</i>, le <b>s</b> et le <b>h</b> se prononcent séparément, des-halb ; dans <i>diensthabende</i>, l'accent tombe sur <b>Dienst</b>."
      },
      {
        tr: "La nuit a été calme, il n'y a rien à signaler.",
        why: "Dans <i>Nacht</i>, le <b>ch</b> après <b>a</b> se prononce [x] ; dans <i>ruhig</i>, le <b>g</b> final se lit [ç] ; dans <i>Besonderheiten</i>, l'accent tombe sur <b>son</b>."
      }
    ]
  },
  "lesson:pfl-u06-l2": {
    theme: "Documentation écrite",
    title: "Le rapport de soins",
    objectives: [
      "écrire une entrée du rapport de soins en style bref",
      "transformer une phrase verbale en style nominal",
      "utiliser le passif au Präteritum : wurde informiert, wurde gewechselt",
      "distinguer une observation d'un jugement"
    ],
    theory: [
      {
        h: "Ce qui entre dans le rapport",
        p: "Le <strong>Pflegebericht</strong> enregistre ce qui a changé ou ce qui compte pour l'équipe suivante : l'état du patient, les observations, les soins faits, qui a été prévenu. Chaque entrée porte la date, l'heure et le paraphe de celui qui écrit. On écrit des <strong>observations</strong>, pas des jugements : pas <em>Patientin war schwierig</em>, mais ce que tu as vu et entendu : <em>Patientin weinte und sprach wenig.</em> Si une observation t'inquiète, le rapport note aussi l'étape suivante : <em>Ärztin informiert.</em>"
      },
      {
        h: "Style nominal et passif",
        p: "La documentation allemande préfère les <strong>noms</strong> aux verbes : <em>Die Patientin wollte nichts essen</em> devient <em>Verweigerung der Nahrungsaufnahme</em>. Le nom en <em>-ung</em> est toujours féminin et le complément qui le suit se met au génitif : <em>die Verweigerung <b>der</b> Nahrungsaufnahme</em>. Quand l'action compte plus que celui qui l'a faite, on utilise le <strong>passif</strong>, au Präteritum : <em>Der Verband <b>wurde</b> gewechselt. Die Ärztin <b>wurde</b> informiert.</em> Dans les entrées brèves, l'auxiliaire tombe souvent : <em>Verband gewechselt. Ärztin informiert.</em>"
      },
      {
        contrast: "Si tu as écrit des transmissions ciblées en France, le style bref allemand te sera familier : « refus alimentaire, médecin prévenu, pansement refait » ressemble beaucoup à <em>Verweigerung der Nahrungsaufnahme, Ärztin informiert, Verband gewechselt</em>. Deux différences. D'abord, le français construit le groupe avec un adjectif (« refus <b>alimentaire</b> »), l'allemand avec un génitif et un mot composé : <em>die Verweigerung der Nahrungsaufnahme</em>, <em>Nahrung</em> + <em>Aufnahme</em>. Ensuite, le <em>Pflegebericht</em> n'est en général pas découpé en cibles et en DAR : c'est un texte suivi, entrée après entrée. Quand on y écrit des phrases complètes, on met le Präteritum (<em>Der Patient verweigerte das Mittagessen</em>), là où le français mettrait le passé composé (« le patient a refusé le repas »)."
      },
      {
        trap: "Les verbes en <em>-ieren</em> ne prennent pas <em>ge-</em> au participe : <em>informiert</em>, <em>dokumentiert</em>, <em>mobilisiert</em>, jamais <em>geinformiert</em>. Attention aussi au sujet : <em>Die Ärztin wurde informiert</em> veut dire que quelqu'un a prévenu le médecin ; <em>Die Ärztin hat informiert</em> veut dire que c'est elle qui a prévenu quelqu'un. Et le français « changer » a deux équivalents : on change une chose contre une autre avec <em>wechseln</em> (<em>Der Verband wurde gewechselt</em>), on la modifie avec <em>ändern</em> (<em>Die Anordnung wurde geändert</em>). « Changer le pansement » avec <em>ändern</em> voudrait dire le transformer."
      },
      {
        tip: "Avant d'écrire, demande-toi : un collègue qui lit cette entrée dans huit heures sait-il ce qui s'est passé, quand, et qui a été prévenu ? Si oui, l'entrée est complète. Si tu as écrit un adjectif comme <em>schwierig</em> ou <em>nervig</em>, remplace-le par ce que tu as vu ou entendu."
      }
    ],
    grammar: {
      title: "Du verbe au nom",
      note: "Verbe → nom en <b>-ung</b> (toujours féminin) + complément au <b>génitif</b>. Pour l'action sans celui qui la fait : <b>wurde</b> + participe.",
      table: {
        head: ["style verbal", "style nominal ou passif"],
        rows: [
          ["Die Patientin wollte nichts essen.", "Verweigerung der Nahrungsaufnahme."],
          ["Ich habe die Ärztin angerufen.", "Ärztin informiert. / Die Ärztin wurde informiert."],
          ["Ich habe den Verband gewechselt.", "Verbandswechsel. / Der Verband wurde gewechselt."],
          ["Er hat wenig getrunken.", "Geringe Flüssigkeitsaufnahme."]
        ]
      },
      examples: [
        { tr: "Aujourd'hui à midi, la patiente ne voulait rien manger.", note: "style verbal : convient à l'oral et dans le rapport" },
        { tr: "Refus alimentaire à midi.", note: "style nominal : Verweigerung + génitif der" },
        { tr: "Le pansement a été changé à dix heures.", note: "passif au Präteritum : wurde + gewechselt" },
        { tr: "Le médecin a été prévenu.", note: "informiert : verbe en -ieren, sans ge-" },
        { tr: "Après accord du médecin, le premier lever a été reporté.", note: "nach Rücksprache mit : formule figée de la documentation" },
        { tr: "Pour prévenir les chutes, le lit a été mis en position basse.", note: "zur + nom : le but en style nominal" }
      ]
    },
    vocab: [
      "le rapport de soins, les transmissions écrites",
      "la documentation",
      "l'entrée (dans le rapport)",
      "l'observation",
      "l'alimentation, les apports alimentaires (terme technique)",
      "les apports hydriques (terme technique)",
      "refuser",
      "le refus",
      "l'échange, l'accord (avec le médecin)",
      "l'état ressenti, comment va le patient",
      "sans particularité, normal",
      "l'élimination (urines et selles)"
    ],
    dialogue: [
      "Tu peux jeter un œil à mon rapport ? J'ai écrit : aujourd'hui à midi, madame Keller ne voulait rien manger.",
      "C'est juste. Dans le rapport, on écrit souvent plus court : refus alimentaire à midi.",
      "Et je dois écrire qui a appelé le médecin ?",
      "Écris simplement : médecin prévenu. Ton paraphe est déjà à côté de l'entrée.",
      "Je peux aussi écrire qu'elle était de mauvaise humeur ?",
      "Écris plutôt ce que tu as vu et entendu : la patiente pleurait et parlait peu.",
      "Compris. Des observations, pas des jugements."
    ],
    culture: {
      title: "Regard allemand : ce qui n'est pas écrit",
      text: "<p>En Allemagne, une phrase circule parmi les soignants : <i>Was nicht dokumentiert ist, gilt als nicht gemacht</i>, « ce qui n'est pas documenté est considéré comme non fait ». Ce n'est pas une loi, mais elle dit bien le poids de la documentation : c'est la base de la continuité des soins, de la communication avec les médecins et, en cas de litige, de la reconstitution des faits.</p><p>Pour la même raison, une entrée ne s'efface pas et ne se rend pas illisible : en cas d'erreur, on la barre de façon qu'elle reste lisible ou on ajoute une correction datée et paraphée. Dans les dossiers informatisés, la règle est la même et c'est le logiciel qui la trace.</p>"
    },
    exercises: [
      {
        q: "Comment écrit-on en style nominal « Die Patientin wollte nichts essen » ?",
        opts: [
          "Verweigerung von der Nahrungsaufnahme essen.",
          "Verweigerung der Nahrungsaufnahme.",
          "Die Nahrungsaufnahme verweigernd."
        ],
        why: "Le verbe <i>verweigern</i> devient le nom <b>die Verweigerung</b>, et le complément passe au génitif : <b>der</b> Nahrungsaufnahme."
      },
      {
        tr: "Le Präteritum de werden, à toutes les personnes.",
        why: "<i>Wurde, wurdest, wurde, wurden, wurdet, wurden</i> : c'est la forme qui porte le passif dans le rapport, <i>Die Ärztin wurde informiert</i>."
      },
      {
        q: "Complète : « Die Ärztin ___ um 15 Uhr informiert. »",
        hint: "passif au Präteritum",
        why: "<b>wurde</b> : le passif au Präteritum se forme avec <i>wurde</i> et le participe, ici <i>informiert</i>, sans <i>ge-</i>."
      },
      {
        q: "Complète la phrase.",
        tr: "Le pansement a été changé à dix heures.",
        why: "<i>Der Verband <b>wurde</b> um zehn Uhr <b>gewechselt</b></i> : <i>wurde</i> en deuxième place, le participe <i>gewechselt</i> à la fin."
      },
      {
        q: "Associe chaque terme de la documentation à son sens.",
        pairs: ["les apports alimentaires", "les apports hydriques", "l'élimination (urines et selles)", "l'échange avec le médecin"]
      },
      {
        q: "Choisis le bon article défini pour chaque nom.",
        items: ["rapport de soins", "état ressenti", "entrée du rapport", "observation", "échange avec le médecin", "documentation"]
      },
      {
        q: "Quelles entrées conviennent à un rapport de soins ?",
        opts: [
          "Patientin weinte und sprach wenig.",
          "Patientin war wieder schwierig.",
          "Verweigerung der Nahrungsaufnahme am Mittag, Ärztin informiert.",
          "Verband um zehn Uhr gewechselt, Wunde unauffällig.",
          "Patient ist faul und will nicht laufen."
        ],
        why: "Le rapport contient des observations et des soins : ce que tu as vu, ce qui a été fait, qui a été prévenu. <i>schwierig</i> et <i>faul</i> sont des jugements sur la personne et n'apprennent rien au lecteur."
      },
      {
        q: "Remets les mots dans l'ordre.",
        tr: "Après accord du médecin, le premier lever a été reporté.",
        why: "<i>Nach Rücksprache mit der Ärztin wurde die Mobilisation verschoben.</i> La formule <i>nach Rücksprache mit</i> occupe la première place, puis <i>wurde</i>, puis le sujet, et le participe <i>verschoben</i> à la fin."
      },
      {
        q: "Traduis (dans le rapport) : « Le médecin a été prévenu. »",
        why: "<i>Der Arzt wurde informiert</i> ou <i>Die Ärztin wurde informiert</i>, selon qui était de garde ; en forme brève <i>Arzt informiert</i>. À l'oral, <i>ist informiert worden</i> convient aussi."
      },
      {
        q: "Une entrée du rapport.",
        setting: "Une nouvelle collègue te demande comment écrire le rapport de soins.",
        lines: [
          { tr: "Aujourd'hui à midi, madame Keller ne voulait rien manger. Comment je l'écris ?" },
          { tr: "Dicte la forme brève : refus alimentaire à midi.", answerTr: "Refus alimentaire à midi." },
          { tr: "Et que j'ai appelé le médecin ?" },
          { tr: "Dicte la forme brève : médecin prévenu.", answerTr: "Médecin prévenu." },
          { tr: "Je peux écrire qu'elle était de mauvaise humeur ?" },
          { tr: "Réponds qu'il vaut mieux écrire ce qu'elle a observé : la patiente parlait peu et pleurait.", answerTr: "Écris plutôt ce que tu as observé : elle parlait peu et pleurait." }
        ]
      },
      {
        tr: "C'est juste. Dans le rapport, on écrit souvent plus court : refus alimentaire à midi.",
        why: "Dans <i>Bericht</i>, le <b>ch</b> après <b>i</b> se prononce [ç] ; dans <i>Verweigerung</i>, le <b>v</b> se lit [f] et l'accent tombe sur <b>wei</b> ; dans <i>Nahrungsaufnahme</i>, l'accent tombe sur <b>Nah</b>."
      },
      {
        tr: "Le médecin a été prévenu.",
        why: "Dans <i>Ärztin</i>, le <b>ä</b> est ouvert, comme le « è » français, et le <b>z</b> se lit [ts] ; dans <i>wurde</i>, le <b>u</b> est bref, comme « ou » ; dans <i>informiert</i>, l'accent tombe sur <b>miert</b>, avec un <b>ie</b> long."
      }
    ]
  },
  "lesson:pfl-u06-l3": {
    theme: "Planification",
    title: "Le plan de soins",
    objectives: [
      "lire un plan de soins : problème, ressource, objectif, action",
      "dire le but d'une action avec damit et um ... zu",
      "choisir entre damit et um ... zu selon le sujet",
      "formuler un objectif vérifiable"
    ],
    theory: [
      {
        h: "Les parties du plan de soins",
        p: "La <strong>Pflegeplanung</strong> suit le même schéma dans presque tous les établissements. Le <strong>Pflegeproblem</strong> dit ce qui est difficile pour le patient (<em>Sie trinkt zu wenig</em>). La <strong>Ressource</strong> dit ce qu'il fait encore seul (<em>Sie kann den Becher selbst halten</em>). Le <strong>Pflegeziel</strong> dit ce qu'on veut atteindre, de façon vérifiable (<em>Die Patientin trinkt ausreichend</em>). Les <strong>Maßnahmen</strong> disent ce qu'on fait et pourquoi. À l'<strong>Evaluation</strong>, on vérifie si l'objectif est atteint. Les quantités et les intervalles se fixent pour chaque patient, avec le médecin et selon les protocoles de l'établissement : dans cette leçon, les exemples sont pédagogiques."
      },
      {
        h: "damit ou um ... zu ?",
        p: "Le but d'une action s'exprime par une subordonnée finale. Si le sujet de la finale est <strong>différent</strong> de celui de la principale, on utilise <strong>damit</strong>, avec le verbe conjugué à la fin : <em>Wir bieten ihr Tee an, damit <b>sie</b> mehr trinkt.</em> Si le sujet est <strong>le même</strong>, on peut utiliser <strong>um ... zu</strong> avec l'infinitif : <em>Wir führen ein Trinkprotokoll, um die Trinkmenge zu kontrollieren</em> (c'est nous qui tenons la feuille et nous qui contrôlons). Avec les verbes séparables, <em>zu</em> se glisse au milieu : <em>um aufzustehen</em>."
      },
      {
        contrast: "Le français fait la même division que l'allemand : « pour » + infinitif quand le sujet est le même, « pour que » ou « afin que » + subjonctif quand il change : « on lui propose du thé pour qu'elle boive plus ». L'allemand n'a pas de subjonctif ici : <em>damit sie mehr trinkt</em> est à l'indicatif, et « damit sie mehr trinke » serait faux. Côté vocabulaire, la démarche de soins française parle de « diagnostic infirmier », d'« objectifs », d'« actions » et d'« évaluation ». Le service allemand dit plus volontiers <em>Pflegeproblem</em> que diagnostic, et <em>Ressource</em>, <em>Evaluation</em> te seront transparents. Avec le patient, on ne les utilise pas : au lieu de <em>Ihre Ressource</em>, on dit <em>Das können Sie schon gut allein</em>."
      },
      {
        trap: "Faux ami : <em>die Maßnahme</em> est l'action, l'intervention de soins, alors que le français « mesure » désigne aussi une mesure chiffrée ; celle-ci se dit <em>die Messung</em> (<em>die Blutdruckmessung</em>). <em>damit</em> a deux sens : comme conjonction, il introduit le but et envoie le verbe à la fin (<em>damit sie mehr trinkt</em>) ; comme adverbe, il veut dire « avec ça » : <em>Was machen wir damit?</em> Et <em>erhalten</em> veut ici dire « conserver, maintenir » (<em>die Selbstständigkeit erhalten</em>), pas seulement « recevoir »."
      },
      {
        tip: "Pour chaque action du plan de soins, essaie de dire le pourquoi à voix haute, avec <em>damit</em> ou <em>um ... zu</em>. Si la finale ne vient pas, c'est souvent que le but manque aussi dans le plan, et une action sans but est difficile à évaluer à l'Evaluation."
      }
    ],
    grammar: {
      title: "Le but : damit et um ... zu",
      note: "Sujet <b>différent</b> : <b>damit</b> + verbe conjugué à la fin. Sujet <b>identique</b> : <b>um ... zu</b> + infinitif à la fin (ou damit).",
      table: {
        head: ["principale", "finale", "sujet"],
        rows: [
          ["Wir bieten ihr oft Tee an,", "damit sie mehr trinkt.", "différent : damit"],
          ["Wir lagern ihn regelmäßig um,", "damit kein Dekubitus entsteht.", "différent : damit"],
          ["Er geht täglich mit dem Rollator,", "um mobil zu bleiben.", "identique : um ... zu"],
          ["Wir führen ein Trinkprotokoll,", "um die Trinkmenge zu kontrollieren.", "identique : um ... zu"]
        ]
      },
      examples: [
        { tr: "Nous changeons régulièrement madame Keller de position pour qu'une escarre ne se forme pas.", note: "sujets différents (wir / kein Dekubitus) : damit" },
        { tr: "Nous lui proposons souvent du thé pour qu'elle boive plus.", note: "sujets différents (wir / sie) : damit, à l'indicatif" },
        { tr: "Monsieur Brandt marche tous les jours avec son déambulateur pour rester mobile.", note: "même sujet : um ... zu" },
        { tr: "Nous tenons une feuille de surveillance hydrique pour contrôler la quantité bue.", note: "même sujet : um ... zu, infinitif à la fin" },
        { tr: "Ressource : la patiente peut tenir son gobelet seule.", note: "la ressource dit ce que le patient fait encore seul" },
        { tr: "Objectif : la patiente boit suffisamment.", note: "l'objectif s'écrit au présent, comme un état à atteindre" }
      ]
    },
    vocab: [
      "le plan de soins, la planification des soins",
      "le problème de soins",
      "la ressource (ce que le patient sait encore faire)",
      "l'objectif de soins",
      "l'action, l'intervention",
      "l'évaluation (du plan de soins)",
      "le risque",
      "éviter, prévenir",
      "conserver, maintenir",
      "favoriser, soutenir",
      "la quantité bue",
      "la feuille de surveillance hydrique, le bilan des entrées"
    ],
    dialogue: [
      "Aujourd'hui, on met à jour le plan de soins de madame Keller. Quel est son problème de soins ?",
      "Elle boit trop peu. Il y a un risque de déshydratation.",
      "Exact. Et quelles ressources a-t-elle ?",
      "Elle peut tenir son gobelet seule, et elle aime boire du thé.",
      "Bien. Quelles actions est-ce qu'on prévoit ?",
      "On lui propose régulièrement du thé pour qu'elle boive plus. En plus, on tient une feuille de surveillance hydrique pour contrôler la quantité bue.",
      "Très bien. Et l'objectif ?",
      "Madame Keller boit suffisamment. La quantité exacte, on la fixe avec le médecin."
    ],
    culture: {
      title: "Regard allemand : du processus de soins à la SIS",
      text: "<p>Dans la formation allemande, la planification s'enseigne comme <i>Pflegeprozess</i>, un cycle d'étapes qui va du recueil de données à l'évaluation. À l'hôpital, le plan de soins est souvent un module du dossier informatisé, avec des problèmes et des actions déjà formulés à choisir et à adapter.</p><p>Dans la prise en charge des personnes âgées, beaucoup d'établissements allemands utilisent un modèle plus léger, la <i>Strukturierte Informationssammlung</i> (SIS), créé pour alléger la documentation. Les mots de cette leçon restent les mêmes : tu les retrouveras dans n'importe quel formulaire.</p>"
    },
    exercises: [
      {
        q: "Tu veux dire pourquoi vous changez le patient de position. Quelle phrase est correcte ?",
        opts: [
          "Wir lagern ihn regelmäßig um, um kein Dekubitus entsteht.",
          "Wir lagern ihn regelmäßig um, damit kein Dekubitus zu entstehen.",
          "Wir lagern ihn regelmäßig um, damit kein Dekubitus entsteht."
        ],
        why: "Les sujets sont différents (<i>wir</i> et <i>kein Dekubitus</i>), il faut donc <b>damit</b> avec le verbe conjugué à la fin : <i>entsteht</i>. <i>um</i> ne se construit pas avec un verbe conjugué, et après <i>damit</i> il n'y a pas de <i>zu</i>."
      },
      {
        q: "Complète : « Wir führen ein Trinkprotokoll, ___ die Trinkmenge zu kontrollieren. »",
        hint: "même sujet, infinitif avec zu",
        why: "<b>um</b> : c'est nous qui tenons la feuille et nous qui contrôlons, donc <i>um ... zu</i> avec l'infinitif à la fin."
      },
      {
        q: "Complète la phrase.",
        tr: "Nous lui proposons souvent du thé pour qu'elle boive plus. Il marche tous les jours avec son déambulateur pour rester mobile.",
        why: "<i><b>damit</b> sie mehr trinkt</i> : les sujets sont différents. <i>um mobil zu <b>bleiben</b></i> : même sujet, l'infinitif va à la fin après <i>zu</i>."
      },
      {
        q: "Quelles phrases sont correctes ?",
        opts: [
          "Ich messe den Blutdruck, um Veränderungen früh zu erkennen.",
          "Ich messe den Blutdruck, damit Veränderungen früh zu erkennen.",
          "Wir mobilisieren ihn, damit er selbstständig bleibt.",
          "Wir mobilisieren ihn, um er selbstständig bleibt.",
          "Sie trinkt viel, um fit zu bleiben."
        ],
        why: "<i>um ... zu</i> demande l'infinitif avec <i>zu</i> et le même sujet ; <i>damit</i> demande un verbe conjugué. <i>damit ... zu erkennen</i> et <i>um er ... bleibt</i> mélangent les deux constructions."
      },
      {
        q: "Associe chaque partie du plan de soins à son sens.",
        pairs: ["ce qui est difficile pour le patient", "ce que le patient fait encore seul", "ce qu'on veut atteindre", "ce qu'on fait pour l'atteindre"]
      },
      {
        q: "Choisis le bon article défini pour chaque nom.",
        items: ["plan de soins", "problème de soins", "ressource", "objectif de soins", "risque", "feuille de surveillance hydrique"]
      },
      {
        q: "Remets les mots dans l'ordre.",
        tr: "Nous lui proposons souvent du thé pour qu'elle boive plus.",
        why: "<i>Wir bieten ihr oft Tee an, damit sie mehr trinkt.</i> La particule <i>an</i> ferme la principale ; après <i>damit</i>, le verbe conjugué <i>trinkt</i> va à la fin."
      },
      {
        q: "Traduis (dans le plan de soins) : « Nous le mobilisons pour qu'il reste autonome. »",
        why: "<i>Wir mobilisieren ihn, damit er selbstständig bleibt.</i> Les sujets sont différents (<i>wir</i> et <i>er</i>), donc <i>damit</i>. Les deux orthographes sont correctes, <i>selbstständig</i> et <i>selbständig</i>."
      },
      {
        q: "Le plan de soins de monsieur Brandt.",
        setting: "Ta tutrice te demande de présenter le plan de soins d'un patient alité.",
        lines: [
          { tr: "Quel est le problème de soins de monsieur Brandt ?" },
          { tr: "Réponds qu'il bouge peu et qu'il y a donc un risque d'escarre.", answerTr: "Il bouge peu, c'est pourquoi il y a un risque d'escarre." },
          { tr: "Et quelle action est-ce qu'on prévoit ?" },
          { tr: "Réponds que vous le changez régulièrement de position pour qu'une escarre ne se forme pas.", answerTr: "On le change régulièrement de position pour qu'une escarre ne se forme pas." },
          { tr: "Quelle ressource a-t-il ?" },
          { tr: "Réponds qu'avec de l'aide il peut se tourner lui-même.", answerTr: "Avec de l'aide, il peut se tourner lui-même." }
        ]
      },
      {
        tr: "On lui propose régulièrement du thé pour qu'elle boive plus.",
        why: "Dans <i>regelmäßig</i>, le <b>ß</b> est un [s] sourd et le <b>g</b> final se lit [ç] ; dans <i>damit</i>, l'accent tombe sur <b>mit</b> ; dans <i>trinkt</i>, <b>nk</b> se prononce [ŋk], comme dans l'anglais « think »."
      },
      {
        tr: "Nous changeons régulièrement madame Keller de position pour qu'une escarre ne se forme pas.",
        why: "Dans <i>lagern</i>, la finale <b>-ern</b> se lit presque [ɐn] ; dans <i>Dekubitus</i>, l'accent tombe sur <b>ku</b>, avec un <b>u</b> long comme « ou » ; dans <i>entsteht</i>, <b>st</b> se lit [ʃt], « cht », et le <b>h</b> est muet."
      }
    ]
  },
  "lesson:pfl-u06-l4": {
    theme: "Abréviations",
    title: "Les abréviations du service",
    objectives: [
      "lire et développer les abréviations les plus courantes : AZ, EZ, VZ, BZ, RR, o.B., p.o., b.B.",
      "les dire à l'oral entre collègues et les traduire en mots simples pour le patient",
      "savoir où chercher une abréviation inconnue",
      "comprendre que b.B. ne veut pas dire « à ta discrétion »"
    ],
    theory: [
      {
        h: "Les abréviations les plus courantes",
        p: "Dans le rapport et dans la <strong>Kurve</strong> (la feuille des paramètres et des traitements), les abréviations sont partout : <em>AZ</em> Allgemeinzustand, l'état général ; <em>EZ</em> Ernährungszustand, l'état nutritionnel ; <em>VZ</em> Vitalzeichen, les paramètres vitaux ; <em>BZ</em> Blutzucker, la glycémie ; <em>RR</em> la pression artérielle ; <em>o.B.</em> ohne Befund, sans particularité pathologique ; <em>p.o.</em> per os, par la bouche ; <em>b.B.</em> bei Bedarf, si besoin. Entre collègues, on les lit lettre par lettre (<em>A-Z, B-Z, o-B</em>) ou on les développe. Chaque établissement a son <strong>Abkürzungsverzeichnis</strong> : les abréviations autorisées sont celles de la liste de ton établissement, et le même sigle peut varier d'un service à l'autre."
      },
      {
        h: "Deux registres",
        p: "Les abréviations sont de la <strong>Fachsprache</strong> écrite : elles servent entre collègues et dans les documents. Avec le patient, on revient à la <strong>Laiensprache</strong> : pas <em>Ihr AZ ist reduziert</em>, mais <em>Sie sind im Moment etwas geschwächt</em> ; pas <em>VZ o.B.</em>, mais <em>Ihr Blutdruck, Ihr Puls und Ihre Temperatur sind in Ordnung.</em> Et <em>b.B.</em> n'est pas une décision de l'infirmière : cela veut dire que le médecin a prescrit un médicament à donner en cas de besoin, aux conditions écrites dans la prescription."
      },
      {
        contrast: "Ton réflexe français va te jouer des tours sur trois sigles. La tension, en France, c'est <em>TA</em> ; en Allemagne on écrit <em>RR</em>, de Riva-Rocci, le médecin italien qui a inventé le brassard. Le « RAS » (rien à signaler) des transmissions françaises ressemble à <em>o.B.</em>, mais <em>o.B.</em> se rapporte à un contrôle précis (<em>Wunde o.B.</em>, <em>VZ o.B.</em>) et dit qu'il a été fait sans rien de pathologique ; pour « nuit RAS », l'allemand écrit plutôt <em>Nacht ruhig</em> ou <em>keine Besonderheiten</em>. Enfin, ton « AEG » (altération de l'état général) se dit <em>AZ reduziert</em> ou <em>reduzierter AZ</em>. <em>p.o.</em>, lui, est le même latin des deux côtés du Rhin. Et l'inverse vaut aussi : un sigle français comme <em>SAP</em> (seringue auto-pousseuse) ne dira rien à un collègue allemand, qui dit <em>Spritzenpumpe</em> ou, par habitude, <em>Perfusor</em> ; à l'écrit comme à l'oral, développe tes sigles français."
      },
      {
        trap: "<em>ohne Befund</em> ne veut pas dire « sans examen » ou « non contrôlé » : cela veut dire que le contrôle a été fait et n'a rien montré de pathologique. <em>Die Kurve</em>, dans le service, n'est pas la courbe d'un graphique : c'est la feuille où l'on note paramètres et traitements. Et <em>der Befund</em> seul est le résultat d'un examen : <em>Der Befund ist da</em> veut dire que le résultat est arrivé, pas qu'il est positif."
      },
      {
        tip: "Si tu ne connais pas une abréviation, demande : <em>Was heißt das?</em> Personne dans le service n'attend que tu connaisses par cœur la liste de l'établissement, et une abréviation mal lue est une erreur qui passe d'équipe en équipe. Quand c'est toi qui écris, dans le doute, développe : <em>Schreib die Abkürzung im Zweifel aus.</em>"
      }
    ],
    grammar: {
      title: "Du sigle à la phrase",
      note: "Avec les collègues : le sigle ou la forme brève. Avec le patient : une phrase complète en <b>Laiensprache</b>, sans sigles.",
      table: {
        head: ["sigle", "en toutes lettres", "au patient"],
        rows: [
          ["AZ reduziert", "Allgemeinzustand reduziert", "Sie sind im Moment etwas geschwächt."],
          ["VZ o.B.", "Vitalzeichen ohne Befund", "Ihr Blutdruck, Ihr Puls und Ihre Temperatur sind in Ordnung."],
          ["BZ", "Blutzucker", "Ich messe jetzt Ihren Blutzucker."],
          ["p.o.", "per os", "Bitte schlucken Sie die Tablette mit etwas Wasser."]
        ]
      },
      examples: [
        { tr: "État général altéré, état nutritionnel bon.", note: "AZ et EZ : se lisent A-Z, E-Z" },
        { tr: "Paramètres vitaux normaux.", note: "o.B. : sans particularité pathologique, le contrôle a été fait" },
        { tr: "Tension et pouls contrôlés, médecin prévenu.", note: "RR : de Riva-Rocci, la pression artérielle (TA en France)" },
        { tr: "Glycémie mesurée avant le déjeuner.", note: "BZ : Blutzucker" },
        { tr: "Comprimés pris per os.", note: "p.o. : per os, comme en France" },
        { tr: "Antalgique si besoin selon la prescription médicale.", note: "b.B. : seulement aux conditions prescrites par le médecin" }
      ]
    },
    vocab: [
      "l'état général (AZ)",
      "l'état nutritionnel (EZ)",
      "sans particularité, normal (o.B.)",
      "par la bouche, per os (p.o.)",
      "diminué, altéré",
      "le traitement si besoin",
      "la feuille des paramètres et des traitements",
      "le dossier du patient",
      "l'abréviation",
      "le paraphe (de celui qui écrit)",
      "la liste des abréviations",
      "écrire en toutes lettres"
    ],
    dialogue: [
      "Dans le rapport, il y a écrit : AZ diminué, EZ bon. Qu'est-ce que ça veut dire ?",
      "AZ, c'est l'état général, EZ l'état nutritionnel. Elle est donc affaiblie, mais bien nourrie.",
      "Et VZ o.B. ?",
      "Les paramètres vitaux sont sans particularité, donc normaux.",
      "Ici, il y a encore écrit : antalgique b.B. Je peux simplement le lui donner ?",
      "Seulement selon la prescription médicale dans la feuille. Si besoin, ça veut dire : quand elle a mal, pas automatiquement.",
      "Et si je ne connais pas une abréviation ?",
      "Alors tu demandes. Avec le patient, de toute façon, tu parles sans abréviations."
    ],
    culture: {
      title: "Regard allemand : la liste des abréviations",
      text: "<p>Beaucoup d'hôpitaux et d'établissements pour personnes âgées en Allemagne ont un <i>Abkürzungsverzeichnis</i> interne, qui fixe les sigles autorisés dans la documentation. La raison est la sécurité : un sigle à deux sens, lu par quelqu'un qui vient d'un autre service, peut conduire à une erreur.</p><p>C'est pourquoi les règles internes demandent souvent d'écrire en toutes lettres justement les informations les plus sensibles, comme les noms des médicaments et les prescriptions. Quand tu commences dans un nouvel établissement, demande où se trouve la liste : c'est une des premières choses utiles à lire.</p>"
    },
    exercises: [
      {
        q: "Dans le rapport, tu lis « VZ o.B. ». Qu'est-ce que ça veut dire ?",
        opts: [
          "Les paramètres vitaux n'ont pas été mesurés.",
          "Les paramètres vitaux ont été contrôlés et sont normaux.",
          "Les paramètres vitaux sont à recontrôler."
        ],
        why: "<i>VZ</i>, ce sont les <i>Vitalzeichen</i>, et <b>o.B.</b> veut dire <i>ohne Befund</i> : le contrôle a été fait et n'a rien montré de pathologique."
      },
      {
        q: "Complète : « Tabletten werden ___ eingenommen, also über den Mund. »",
        hint: "le sigle latin, avec les points",
        why: "<b>p.o.</b>, c'est-à-dire <i>per os</i> : par la bouche, comme en France."
      },
      {
        q: "Associe chaque abréviation à son sens.",
        pairs: ["l'état général", "l'état nutritionnel", "la glycémie", "les paramètres vitaux"]
      },
      {
        q: "Choisis le bon article défini pour chaque nom.",
        items: ["état général", "état nutritionnel", "feuille des paramètres", "abréviation", "paraphe", "liste des abréviations"]
      },
      {
        q: "Quelles phrases peux-tu dire à un patient ?",
        opts: [
          "Ihr Blutzucker ist in Ordnung.",
          "Ihr BZ ist o.B.",
          "Sie bekommen ein Schmerzmittel, wenn Sie Schmerzen haben.",
          "Ihr AZ ist reduziert.",
          "Ihre Werte sind unauffällig."
        ],
        why: "Avec le patient, on parle sans sigles et sans formules de la documentation. <i>BZ o.B.</i> et <i>AZ reduziert</i> sont corrects entre collègues, mais le patient ne les comprend pas."
      },
      {
        q: "Écris les deux abréviations en toutes lettres.",
        tr: "État général altéré, état nutritionnel bon.",
        why: "<i>AZ</i> veut dire <b>Allgemeinzustand</b>, <i>EZ</i> <b>Ernährungszustand</b>. Les deux sont masculins : <i>der Zustand</i>."
      },
      {
        q: "Remets les mots dans l'ordre.",
        tr: "Les paramètres vitaux sont normaux.",
        why: "<i>Die Vitalzeichen sind ohne Befund.</i> C'est la forme développée de <i>VZ o.B.</i> ; <i>Vitalzeichen</i> est ici au pluriel, d'où <i>sind</i>."
      },
      {
        q: "Traduis (dans le rapport) : « L'état général est bon. »",
        why: "<i>Der Allgemeinzustand ist gut</i>, ou en forme brève <i>Allgemeinzustand gut</i> ou <i>AZ gut</i>."
      },
      {
        q: "La patiente lit le rapport.",
        setting: "Madame Keller a lu des sigles dans ses documents et te demande ce qu'ils veulent dire.",
        lines: [
          { tr: "Dans mon rapport, il y a écrit AZ diminué. Qu'est-ce que ça veut dire ?" },
          { tr: "Réponds sans sigles : cela veut dire qu'elle est un peu affaiblie en ce moment.", answerTr: "Cela veut dire que vous êtes un peu affaiblie en ce moment." },
          { tr: "Et que veut dire o.B. à côté des paramètres vitaux ?" },
          { tr: "Réponds que sa tension, son pouls et sa température sont bons.", answerTr: "Votre tension, votre pouls et votre température sont bons." },
          { tr: "Vous me donnez un antalgique si j'ai mal ?" },
          { tr: "Réponds qu'elle doit te prévenir quand elle a mal : le médecin a prescrit un antalgique.", answerTr: "Oui, prévenez-moi quand vous avez mal. Le médecin a prescrit un antalgique." }
        ]
      },
      {
        tr: "Les paramètres vitaux sont sans particularité, donc normaux.",
        why: "Dans <i>Vitalzeichen</i>, le <b>V</b> se lit [v], comme en français, et le <b>z</b> [ts] ; dans <i>Befund</i>, le <b>d</b> final se lit [t] ; dans <i>unauffällig</i>, l'accent tombe sur <b>un</b>."
      },
      {
        tr: "Avec le patient, nous parlons sans abréviations.",
        why: "Dans <i>Patienten</i>, <b>ti</b> se lit [tsi] ; dans <i>sprechen</i>, <b>sp</b> au début se lit [ʃp], « chp » ; dans <i>Abkürzungen</i>, l'accent tombe sur <b>Ab</b> et le <b>ü</b> est bref, comme un « u » français court."
      }
    ]
  },
  "lesson:pfl-u06-test": {
    theme: "Évaluation",
    title: "Test : Transmissions et rapport de soins",
    objectives: [
      "vérifier le Präteritum de la relève, les connecteurs, le style nominal, le passif, les finales et les abréviations du service"
    ],
    theory: [
      {
        p: "Onze questions sur toute l'unité. On réussit avec 70 %. Les patients et les situations sont inventés et ne servent que d'exemples : ce qu'on documente et quelles abréviations on utilise, ce sont les règles de l'établissement qui le fixent."
      }
    ],
    exercises: [
      {
        q: "À la relève : « Herr Brandt ___ in der Nacht starke Schmerzen. »",
        opts: ["war", "hatte", "wurde"],
        why: "<i>Schmerzen haben</i>, au Präteritum <b>hatte</b> : la forme qu'on utilise aussi à l'oral."
      },
      {
        q: "Complète : « Der Verband ___ gestern gewechselt. »",
        hint: "passif au Präteritum",
        why: "<b>wurde</b> : le passif au Präteritum, avec le participe <i>gewechselt</i> à la fin."
      },
      {
        q: "Complète : « Wir lagern ihn regelmäßig um, ___ kein Dekubitus entsteht. »",
        hint: "finale, sujets différents",
        why: "<b>damit</b> : les sujets sont différents (<i>wir</i> et <i>kein Dekubitus</i>) et le verbe conjugué <i>entsteht</i> va à la fin."
      },
      {
        tr: "Le Präteritum de haben, à toutes les personnes.",
        why: "<i>Hatte, hattest, hatte, hatten, hattet, hatten</i> : le <b>b</b> de <i>haben</i> tombe et le <b>t</b> se double."
      },
      {
        q: "Associe chaque abréviation à son sens.",
        pairs: ["l'état général", "l'état nutritionnel", "si besoin", "par la bouche"]
      },
      {
        q: "Quelles entrées sont correctes dans un rapport de soins ?",
        opts: [
          "Verweigerung der Nahrungsaufnahme am Abend.",
          "Ärztin geinformiert.",
          "VZ o.B., AZ stabil.",
          "Patientin war heute wieder nervig.",
          "Verband gewechselt, Wunde unauffällig."
        ],
        why: "<i>informiert</i> ne prend pas <i>ge-</i>, parce que le verbe se termine en <i>-ieren</i>. <i>nervig</i> est un jugement, pas une observation."
      },
      {
        q: "Complète la phrase.",
        tr: "Elle était agitée, c'est pourquoi j'ai prévenu le médecin.",
        why: "<i>Sie <b>war</b> unruhig</i> : sein au Präteritum. <i><b>deshalb</b> habe ich</i> : après le connecteur vient tout de suite le verbe."
      },
      {
        q: "Remets les mots dans l'ordre.",
        tr: "Nous le mobilisons tous les jours pour qu'il reste autonome.",
        why: "<i>Wir mobilisieren ihn täglich, damit er selbstständig bleibt.</i> Après <i>damit</i>, le verbe conjugué <i>bleibt</i> va à la fin."
      },
      {
        q: "Choisis le bon article défini pour chaque nom.",
        items: ["relève", "rapport de soins", "objectif de soins", "état ressenti", "état général", "action"]
      },
      {
        tr: "Pendant la nuit, madame Keller a été agitée, c'est pourquoi j'ai prévenu le médecin.",
        why: "Dans <i>unruhig</i>, l'accent tombe sur <b>un</b> et le <b>g</b> final se lit [ç] ; dans <i>deshalb</i>, le <b>s</b> et le <b>h</b> se prononcent séparément ; dans <i>informiert</i>, l'accent tombe sur <b>miert</b>."
      },
      {
        tr: "Nous lui proposons souvent du thé pour qu'elle boive plus.",
        why: "Dans <i>bieten</i>, le <b>ie</b> est long, comme « i » ; dans <i>Tee</i>, le double <b>e</b> est un « é » long et fermé ; dans <i>trinkt</i>, <b>nk</b> se lit [ŋk]."
      }
    ]
  }
});
