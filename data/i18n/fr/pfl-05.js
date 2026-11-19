/* ============================================================
   Textes dans la langue de l'élève (fr) pour data/core/pfl-05.js, unité pfl-u05.
   Les clés renvoient aux id de la couche neutre ; les tableaux se
   joignent par index, leur longueur doit donc correspondre à core.
   Vérifié par scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("fr", {
  "unit:pfl-u05": {
    title: "Médicaments et notice",
    grammarNote: "mots composés et voies d'administration · vor, nach, mit, seit, zu avec le datif · les phrases avec wenn et falls · le passif avec werden et avec un modal"
  },
  "lesson:pfl-u05-l1": {
    theme: "Formes et voies",
    title: "Comprimés, gouttes, injections",
    objectives: [
      "nommer les formes galéniques les plus courantes avec leur article",
      "dire la voie d'administration en Fachsprache et avec les mots du patient",
      "former des composés comme Schmerztablette et Augentropfen",
      "expliquer au patient ce qu'il reçoit, sans entrer dans le traitement"
    ],
    theory: [
      {
        h: "Les formes du médicament",
        p: "Dans le service, les formes que tu nommes chaque jour sont peu nombreuses : <em>die Tablette</em> (comprimé), <em>die Kapsel</em> (gélule), <em>der Tropfen</em> (presque toujours au pluriel, <em>die Tropfen</em>), <em>der Saft</em> (sirop), <em>die Salbe</em> (pommade), <em>das Zäpfchen</em> (suppositoire), <em>die Spritze</em> et <em>die Infusion</em>. L'allemand en fait des composés à volonté, et c'est <strong>le dernier élément qui donne l'article</strong> : <em>der Schmerz + die Tablette</em> = <em>die Schmerztablette</em> ; <em>das Auge + die Tropfen</em> = <em>die Augentropfen</em> ; <em>der Husten + der Saft</em> = <em>der Hustensaft</em>."
      },
      {
        h: "Les voies d'administration",
        p: "Dans le dossier et avec le médecin, on dit <em>oral</em>, <em>subkutan</em> (abrégé <em>s.c.</em>), <em>intravenös</em> (<em>i.v.</em>). Au patient, on dit où va le médicament : <em>über den Mund</em>, <em>unter die Haut</em>, <em>in die Vene</em>. Les prépositions sont à l'accusatif parce qu'elles indiquent une direction : le médicament va <em>unter die Haut</em>, il n'est pas <em>unter der Haut</em>. Le nom technique est <em>die Applikation</em> ; dans le service, on dit plus souvent <em>die Gabe</em> : <em>Die nächste Gabe ist um acht Uhr.</em>"
      },
      {
        contrast: "En français, « voie orale », « sous-cutanée » et « intraveineuse » sont transparents pour presque tous les patients, et au lit on dit sans problème « je vous fais une sous-cut' » ou « on vous pose une perfusion en IV ». En allemand, <em>oral</em>, <em>subkutan</em> et <em>intravenös</em> sont des mots de dossier : beaucoup de patients ne les comprennent pas. Ce que ton oreille francophone reconnaît tout de suite, ton patient allemand ne le reconnaît pas. Au patient, traduis toujours par la formule avec préposition : <em>über den Mund</em>, <em>unter die Haut</em>, <em>in die Vene</em>. Même chose pour <em>die Injektion</em> : c'est le terme technique, le mot du patient est <em>die Spritze</em> (là où le français dit « une piqûre »). Avec le médecin et à la transmission, le registre technique reste normal : <em>Die Applikation ist subkutan.</em>"
      },
      {
        trap: "<em>Die Tablette</em> n'est pas une « tablette » de chocolat ni un écran : c'est le comprimé. <em>Die Kapsel</em> est la gélule. <em>Der Tropfen</em> est masculin, alors que la goutte est féminine. <em>Die Spritze</em> veut dire à la fois la seringue et la piqûre. <em>Das Zäpfchen</em> est le suppositoire, mais aussi la luette : le contexte décide. La perfusion est <em>die Infusion</em> ; beaucoup de patients disent pourtant <em>der Tropf</em> (<em>Ich hänge am Tropf</em>), qui n'est pas la goutte. Dans les composés, attention à la lettre de liaison : <em>Augentropfen</em>, pas « Augetropfen »."
      },
      {
        tip: "Quand tu apportes un médicament, dis toujours comment le prendre en une phrase simple : <em>Die schlucken Sie bitte mit etwas Wasser.</em> Si le patient demande quelque chose que tu ne sais pas (je peux le croquer ? le dissoudre ?), n'improvise pas : <em>Das weiß ich nicht genau. Ich frage in der Apotheke nach.</em> Tous les noms de médicaments de cette unité, comme <em>Dolorex</em> et <em>Cardiomin</em>, sont inventés."
      }
    ],
    grammar: {
      title: "Formes, composés et voies",
      note: "Dans les composés, l'article est celui du <b>dernier élément</b>. Pour la voie : <b>Fachsprache</b> dans le dossier, formule avec <b>préposition</b> pour le patient.",
      table: {
        head: ["Fachsprache", "pour le patient", "français"],
        rows: [
          ["oral", "über den Mund", "par voie orale, par la bouche"],
          ["subkutan (s.c.)", "unter die Haut", "en sous-cutané, sous la peau"],
          ["intravenös (i.v.)", "in die Vene", "en intraveineuse, dans la veine"],
          ["die Injektion", "die Spritze", "l'injection, la piqûre"],
          ["die Applikation", "die Gabe", "l'administration"]
        ]
      },
      examples: [
        { tr: "C'est un comprimé contre la douleur.", note: "Schmerz + Tablette : die, à cause de Tablette" },
        { tr: "Dolorex existe en comprimés et en gouttes.", note: "Dolorex est un nom inventé ; es gibt + accusatif" },
        { tr: "La piqûre, vous la recevez sous la peau.", note: "unter die Haut : direction, donc accusatif" },
        { tr: "La perfusion va dans la veine.", note: "in die Vene : la formule pour le patient" },
        { tr: "L'administration est orale, c'est-à-dire par la bouche.", note: "d'abord le terme technique, puis l'explication" },
        { tr: "Les gouttes pour les yeux sont au réfrigérateur.", note: "Auge + n + Tropfen : lettre de liaison" }
      ]
    },
    vocab: [
      "le comprimé",
      "la gélule",
      "la goutte (en général au pluriel : die Tropfen)",
      "la seringue, la piqûre",
      "la perfusion",
      "la pommade",
      "le suppositoire",
      "oral, par la bouche (terme technique)",
      "sous-cutané (terme technique)",
      "intraveineux (terme technique)",
      "l'administration (terme technique)",
      "l'administration, la prise (mot du service)"
    ],
    dialogue: [
      "Bonjour, madame Kühn. Je vous apporte vos médicaments.",
      "Mais qu'est-ce que c'est que tout ça ?",
      "Ça, c'est Cardiomin, un comprimé. Avalez-le avec un peu d'eau, s'il vous plaît.",
      "Et le petit flacon ?",
      "Ce sont des gouttes pour les yeux. Elles vont dans les yeux, pas dans la bouche.",
      "On me fait aussi une piqûre aujourd'hui ?",
      "Oui, ce soir vous recevez une injection sous la peau.",
      "Ça fait mal ?",
      "Juste une petite piqûre."
    ],
    exercises: [
      {
        q: "Le médecin a écrit « subkutan ». Comment le dis-tu au patient ?",
        opts: ["in die Vene", "unter die Haut", "über den Mund"],
        why: "<i>Subkutan</i>, c'est « sous la peau » : au patient, on dit <b>unter die Haut</b>, à l'accusatif parce que le médicament va là."
      },
      {
        q: "Associe chaque terme technique à la formule pour le patient.",
        pairs: ["über den Mund", "unter die Haut", "in die Vene", "die Spritze"]
      },
      {
        q: "Choisis le bon article défini pour chaque nom.",
        items: ["comprimé", "gélule", "goutte", "injection, seringue", "suppositoire", "pommade"]
      },
      {
        q: "Complète avec un mot composé : « Eine Tablette gegen Schmerzen ist eine ___. »",
        hint: "Schmerz + Tablette",
        why: "<b>Schmerztablette</b>, féminin comme <i>Tablette</i>, le dernier élément du composé."
      },
      {
        q: "Quelles formes se prennent par la bouche ?",
        opts: ["die Tablette", "die Kapsel", "das Zäpfchen", "die Infusion", "der Saft"],
        why: "Comprimé, gélule et sirop vont <i>über den Mund</i>. Le suppositoire non, et la perfusion va <i>in die Vene</i>."
      },
      {
        q: "Complète : d'abord le terme technique, puis le mot pour le patient.",
        tr: "La perfusion est intraveineuse, c'est-à-dire qu'elle va dans la veine.",
        why: "<i>Die Infusion läuft intravenös, also in die Vene</i> : <i>also</i> introduit l'explication pour le patient."
      },
      {
        q: "Remets les mots dans l'ordre.",
        tr: "La piqûre, vous la recevez sous la peau.",
        why: "<i>Die Spritze bekommen Sie unter die Haut.</i> Le complément en tête, le verbe <i>bekommen</i> en deuxième position, puis le sujet <i>Sie</i>."
      },
      {
        q: "Traduis : « Les gouttes sont pour les yeux. »",
        why: "<i>Die Tropfen sind für die Augen.</i> <i>Für</i> veut l'accusatif, et <i>die Augen</i> au pluriel ne change pas."
      },
      {
        q: "Une patiente pose des questions sur ses médicaments.",
        setting: "Tu apportes les médicaments du matin à madame Kühn.",
        lines: [
          { tr: "Madame Marin, comment on me fait la piqûre ?" },
          { tr: "Réponds qu'elle la reçoit sous la peau.", answerTr: "La piqûre, vous la recevez sous la peau." },
          { tr: "Et qu'est-ce qu'il y a dans le petit flacon ?" },
          { tr: "Réponds que ce sont des gouttes pour les yeux.", answerTr: "Ce sont des gouttes pour les yeux." },
          { tr: "Je peux croquer le comprimé ?" },
          { tr: "Réponds que tu ne le sais pas avec certitude et que tu demandes à la pharmacie.", answerTr: "Je ne le sais pas avec certitude. Je demande à la pharmacie." }
        ]
      },
      {
        tr: "Ça, c'est Cardiomin, un comprimé. La piqûre, vous la recevez ce soir sous la peau.",
        why: "Dans <i>Spritze</i>, le <b>sp</b> initial se prononce [ʃp] et le <b>tz</b> [ts] ; dans <i>Haut</i>, le <b>h</b> est aspiré et <b>au</b> se dit [aʊ] ; dans <i>Abend</i>, le <b>d</b> final se prononce [t]."
      },
      {
        tr: "La piqûre, vous la recevez sous la peau.",
        why: "Dans <i>bekommen</i>, l'accent tombe sur <b>kom</b> ; dans <i>unter</i>, le <b>r</b> final est à peine prononcé ; dans <i>Sie</i>, le <b>s</b> initial est sonore [z]."
      }
    ]
  },
  "lesson:pfl-u05-l2": {
    theme: "Horaires",
    title: "Avant ou après les repas ?",
    objectives: [
      "expliquer quand on prend un médicament : le matin, le soir, au coucher, si besoin",
      "employer vor, nach, mit, seit, zu et bei avec le datif",
      "dire au patient qu'il doit rester à jeun",
      "répondre à un patient qui a oublié une prise, en renvoyant au médecin"
    ],
    theory: [
      {
        h: "Quand on le prend",
        p: "Les horaires de prise se disent avec des adverbes et des prépositions. Adverbes : <em>morgens</em>, <em>mittags</em>, <em>abends</em>, <em>täglich</em>, <em>einmal täglich</em>, <em>dreimal täglich</em>. Expressions figées : <em>zur Nacht</em> (au coucher), <em>bei Bedarf</em> (si besoin), <em>nüchtern</em> (à jeun). Les horaires écrits sur le plan de traitement, c'est le médecin qui les décide : tu les lis et tu les transmets, tu ne les choisis pas."
      },
      {
        h: "Les prépositions avec le datif",
        p: "<em>Vor</em>, <em>nach</em>, <em>mit</em>, <em>seit</em>, <em>zu</em> et <em>bei</em> veulent le <strong>datif</strong> dans toutes ces expressions : <em>vor dem Frühstück</em>, <em>nach dem Essen</em>, <em>mit einem Glas Wasser</em>, <em>seit einer Woche</em>, <em>zu den Mahlzeiten</em>, <em>bei Bedarf</em>. Le datif se voit sur l'article : <em>das Essen</em> devient <em>dem Essen</em>, <em>die Woche</em> devient <em>einer Woche</em>, <em>die Mahlzeiten</em> devient <em>den Mahlzeiten</em>. Avec <em>seit</em>, le verbe reste au présent : <em>Seit einer Woche nehme ich Dolorex.</em>"
      },
      {
        contrast: "En français, « avant le petit-déjeuner », « après le repas », « avec un verre d'eau » ne touchent pas à l'article. En allemand, chaque préposition de cette leçon déclenche le datif, et l'erreur <em>vor das Frühstück</em> s'entend tout de suite. Le présent avec <em>seit</em> ne te posera pas de problème : c'est exactement le « depuis » français, « je prends Dolorex depuis une semaine ». Côté vocabulaire, le patient français dit « l'anticoagulant », parfois « le fluidifiant » ; le patient allemand dit presque toujours <em>der Blutverdünner</em>, alors que <em>das Antikoagulans</em> reste un mot de médecin et de dossier."
      },
      {
        trap: "<em>Nüchtern</em> veut dire « à jeun » dans le service, mais dans la langue de tous les jours il veut aussi dire « sobre, pas ivre » et même « sobre, dépouillé » pour un style. Si tu dis au patient <em>Bleiben Sie bitte nüchtern</em>, ajoute ce que ça veut dire : <em>Bitte nichts essen und nichts trinken.</em> Ne confonds pas <em>nach dem Essen</em> (préposition + nom) avec <em>nachdem</em>, qui est une conjonction et envoie le verbe à la fin. <em>Zur Nacht</em>, c'est « le soir au coucher », <em>in der Nacht</em>, c'est « pendant la nuit » : sur le plan de traitement, ce n'est pas la même chose."
      },
      {
        tip: "Si un patient dit avoir oublié un comprimé, ne lui dis jamais toi-même ce qu'il faut faire : <em>Dann sagen Sie es mir bitte. Ich frage den Arzt.</em> Rattraper ou sauter une prise est une décision du médecin, et la bonne réponse change d'un médicament à l'autre."
      }
    ],
    grammar: {
      title: "Horaires et prépositions avec le datif",
      note: "<b>vor, nach, mit, seit, zu, bei</b> + <b>datif</b>. Les adverbes de temps (<b>morgens, abends, täglich</b>) n'ont pas d'article.",
      table: {
        head: ["expression", "datif de", "français"],
        rows: [
          ["vor dem Frühstück", "das Frühstück", "avant le petit-déjeuner"],
          ["nach dem Essen", "das Essen", "après le repas"],
          ["mit einem Glas Wasser", "ein Glas", "avec un verre d'eau"],
          ["seit einer Woche", "eine Woche", "depuis une semaine"],
          ["zu den Mahlzeiten", "die Mahlzeiten", "pendant les repas"],
          ["bei Bedarf", "der Bedarf", "si besoin"]
        ]
      },
      examples: [
        { tr: "Prenez le comprimé avant le petit-déjeuner, s'il vous plaît.", note: "vor dem : datif de das Frühstück" },
        { tr: "L'antibiotique, vous le prenez toujours après le repas.", note: "nach dem Essen" },
        { tr: "Pour la prise de sang, demain vous devez rester à jeun.", note: "nüchtern bleiben : ni manger ni boire" },
        { tr: "L'anticoagulant, vous le recevez le soir.", note: "Blutverdünner : le mot du patient" },
        { tr: "Si besoin, vous recevez un comprimé contre la douleur.", note: "bei Bedarf, souvent b.B. dans le dossier" },
        { tr: "Je prends Dolorex depuis une semaine.", note: "seit + datif, verbe au présent" }
      ]
    },
    vocab: [
      "la prise (d'un médicament)",
      "le repas",
      "à jeun (aussi : sobre)",
      "quotidien, par jour (einmal täglich : une fois par jour)",
      "le matin, tous les matins",
      "le soir, tous les soirs",
      "si besoin",
      "l'antibiotique",
      "l'anticoagulant (terme technique)",
      "l'anticoagulant (mot du patient)",
      "avaler",
      "oublier"
    ],
    dialogue: [
      "Madame Marin, quand est-ce que je dois prendre ce comprimé ?",
      "Cardiomin, vous le prenez le matin, avant le petit-déjeuner.",
      "Avec le café ?",
      "Avec un verre d'eau, s'il vous plaît. C'est écrit comme ça aussi sur votre plan.",
      "Et l'antibiotique ?",
      "Celui-là, vous le recevez trois fois par jour, toujours après le repas.",
      "Et si j'oublie un comprimé ?",
      "Alors dites-le-moi, s'il vous plaît. Je demande au médecin ce que vous devez faire.",
      "D'accord. Et demain matin ?",
      "Demain matin, restez à jeun, s'il vous plaît, à cause de la prise de sang."
    ],
    exercises: [
      {
        q: "Le médecin dit que demain matin, avant la prise de sang, le patient doit être « nüchtern ». Qu'est-ce que ça veut dire ?",
        opts: ["à jeun", "au lit, sans se lever", "sans médicaments"],
        why: "Dans le service, <b>nüchtern</b> veut dire « à jeun » : rien à manger et, en général, rien à boire. Dans la langue de tous les jours, il veut aussi dire « sobre »."
      },
      {
        tr: "Le présent de einnehmen, à toutes les personnes.",
        why: "<i>Nehme ein, nimmst ein, nimmt ein, nehmen ein, nehmt ein, nehmen ein</i> : verbe séparable, le préfixe <i>ein</i> va à la fin, et aux deuxième et troisième personnes du singulier le <b>e</b> devient <b>i</b>."
      },
      {
        q: "Complète : « Nehmen Sie die Tablette bitte nach ___ Essen ein. »",
        hint: "nach + datif, das Essen",
        why: "<b>dem</b> : <i>nach</i> veut le datif, et le datif de <i>das Essen</i> est <i>dem Essen</i>."
      },
      {
        q: "Complète avec la bonne préposition.",
        tr: "Les gouttes, vous les prenez avant le petit-déjeuner, l'antibiotique après le repas.",
        why: "<i>Vor dem Frühstück</i> et <i>nach dem Essen</i> : deux prépositions différentes, le même datif."
      },
      {
        q: "Associe chaque expression à son sens.",
        pairs: ["le matin", "le soir", "le soir au coucher", "si besoin"]
      },
      {
        q: "Quelles expressions sont correctes ?",
        opts: ["nach dem Essen", "vor das Frühstück", "mit einem Glas Wasser", "seit eine Woche", "zu den Mahlzeiten"],
        why: "<i>Vor</i> et <i>seit</i> veulent ici le datif : <i>vor dem Frühstück</i>, <i>seit einer Woche</i>. Les trois autres sont déjà au datif."
      },
      {
        q: "Remets les mots dans l'ordre.",
        tr: "L'antibiotique, vous le prenez toujours après le repas.",
        why: "<i>Das Antibiotikum nehmen Sie immer nach dem Essen.</i> Le complément en tête, le verbe <i>nehmen</i> en deuxième position, le sujet <i>Sie</i> juste après."
      },
      {
        q: "Traduis : « Prenez le comprimé le matin avant le petit-déjeuner. »",
        why: "<i>Nehmen Sie die Tablette morgens vor dem Frühstück (ein).</i> L'impératif de politesse commence par le verbe ; <i>morgens</i> et <i>vor dem Frühstück</i> traduisent les deux indications de temps."
      },
      {
        q: "Un patient demande quand prendre un médicament.",
        setting: "Monsieur Brandt a un nouveau comprimé à la main.",
        lines: [
          { tr: "Quand est-ce que je dois prendre le comprimé ?" },
          { tr: "Réponds : le matin, avant le petit-déjeuner.", answerTr: "Le matin, avant le petit-déjeuner." },
          { tr: "Avec le café ?" },
          { tr: "Réponds : avec un verre d'eau, s'il vous plaît.", answerTr: "Avec un verre d'eau, s'il vous plaît." },
          { tr: "Et si j'oublie le comprimé ?" },
          { tr: "Réponds qu'il doit te le dire et que tu demandes au médecin.", answerTr: "Alors dites-le-moi, s'il vous plaît. Je demande au médecin." }
        ]
      },
      {
        tr: "Cardiomin, vous le prenez le matin avant le petit-déjeuner, l'antibiotique toujours après le repas.",
        why: "Dans <i>Frühstück</i>, le <b>ü</b> est long dans <i>früh</i> et bref dans <i>Stück</i> ; dans <i>morgens</i>, le <b>g</b> est dur et le <b>s</b> final sourd ; dans <i>Essen</i>, le <b>ss</b> est sourd."
      },
      {
        tr: "Prenez le comprimé après le repas, s'il vous plaît.",
        why: "Dans <i>nehmen</i>, le <b>h</b> ne se prononce pas et allonge le <b>e</b> ; dans <i>Tablette</i>, l'accent tombe sur <b>let</b> ; dans <i>nach</i>, le <b>ch</b> après <b>a</b> se dit [x]."
      }
    ]
  },
  "lesson:pfl-u05-l3": {
    theme: "Lire",
    title: "La notice",
    objectives: [
      "s'orienter dans les rubriques d'une notice allemande",
      "comprendre les phrases conditionnelles avec wenn et falls",
      "reconnaître contre-indications, effets indésirables et interactions",
      "renvoyer toute question au médecin ou à la pharmacie"
    ],
    theory: [
      {
        h: "Comment est faite la notice",
        p: "La notice allemande s'appelle <em>der Beipackzettel</em> à l'oral et <em>die Packungsbeilage</em> ou <em>Gebrauchsinformation</em> sur le papier. Les rubriques sont toujours les mêmes : <em>Was ist ... und wofür wird es angewendet?</em>, <em>Was sollten Sie vor der Einnahme beachten?</em>, <em>Wie ist ... einzunehmen?</em>, <em>Welche Nebenwirkungen sind möglich?</em>, <em>Wie ist ... aufzubewahren?</em> Le texte de la leçon, celui de <em>Dolorex</em>, est inventé de bout en bout : il sert à lire la langue, pas à utiliser un médicament."
      },
      {
        h: "Wenn et falls",
        p: "La notice est pleine de phrases conditionnelles. Après <strong>wenn</strong> ou <strong>falls</strong>, le verbe conjugué va <strong>à la fin</strong> : <em>Wenn Sie schwanger sind, ...</em>, <em>Falls Sie eine Einnahme vergessen haben, ...</em> Si la conditionnelle vient en premier, la principale commence par le <strong>verbe</strong>, parce que la conditionnelle occupe à elle seule la première place : <em>Wenn Sie Fragen haben, <b>rufen</b> Sie die Apotheke an.</em> <em>Falls</em>, c'est seulement « au cas où » ; <em>wenn</em> veut aussi dire « quand »."
      },
      {
        contrast: "La structure te sera familière : une notice française est découpée selon le même modèle européen, avec les mêmes rubriques (« Qu'est-ce que ... et dans quel cas est-il utilisé ? », « Quels sont les effets indésirables éventuels ? »). La différence est dans les mots. La notice française dit « contre-indications », le même mot savant que le médecin ; la notice allemande préfère les mots allemands : <em>Gegenanzeigen</em>, ou la formule <em>... darf nicht eingenommen werden, wenn ...</em> ; <em>die Kontraindikation</em> est le mot du médecin. De même, « effets indésirables » devient <em>Nebenwirkungen</em> et « interactions » <em>Wechselwirkungen</em>. Et la syntaxe : en français, « si vous avez des questions, appelez la pharmacie » ne change pas l'ordre des mots ; en allemand, <em>haben</em> va à la fin de la conditionnelle et <em>rufen</em> ouvre la principale. « Wenn Sie Fragen haben, Sie rufen ... » est l'erreur typique de qui pense en français."
      },
      {
        trap: "Dans la notice, <em>häufig</em> n'est pas une impression, c'est un chiffre : par convention européenne, <em>sehr häufig</em> veut dire plus d'1 personne sur 10, <em>häufig</em> de 1 sur 100 à 1 sur 10, <em>selten</em> de 1 sur 10 000 à 1 sur 1000. La « notice » se dit <em>Beipackzettel</em>, et non <em>die Notiz</em>, qui est une note qu'on prend. L'ordonnance est <em>das Rezept</em>, qui n'a rien d'une recette de cuisine dans ce contexte. Et <em>die Drogerie</em> n'est pas une pharmacie (ni un lieu où l'on vend de la drogue) : on y vend cosmétiques et produits ménagers ; les médicaments s'achètent à <em>der Apotheke</em>."
      },
      {
        tip: "Au patient qui te demande « je peux le prendre avec ... ? », ne réponds pas en lisant la notice : <em>Das klären wir mit dem Arzt oder der Apotheke.</em> La notice te sert à comprendre ce qu'il faut demander, pas à décider."
      }
    ],
    grammar: {
      title: "Wenn et falls",
      note: "Dans la conditionnelle, le verbe va <b>à la fin</b>. Si la conditionnelle vient en premier, la principale commence par le <b>verbe</b>.",
      table: {
        head: ["conditionnelle", "principale", "remarque"],
        rows: [
          ["Wenn Sie schwanger sind,", "fragen Sie Ihren Arzt.", "sind à la fin, fragen en tête"],
          ["Falls Sie eine Einnahme vergessen haben,", "fragen Sie Ihren Arzt oder Apotheker.", "Perfekt : haben après le participe"],
          ["Wenn Sie Atemnot bekommen,", "gehen Sie sofort zum Arzt.", "bekommen : « avoir » un symptôme qui apparaît"],
          ["(principale d'abord)", "Dolorex darf nicht eingenommen werden, wenn ...", "la conditionnelle peut aussi suivre"]
        ]
      },
      examples: [
        { tr: "Si vous êtes enceinte, demandez à votre médecin avant la prise.", note: "wenn : verbe sind à la fin" },
        { tr: "Si vous avez oublié une prise, demandez à votre médecin ou à votre pharmacien.", note: "falls : au cas où" },
        { tr: "Si vous avez du mal à respirer, allez tout de suite chez le médecin.", note: "la principale commence par gehen" },
        { tr: "Si vous prenez d'autres médicaments, dites-le à votre médecin.", note: "interactions possibles : Wechselwirkungen" },
        { tr: "Dolorex ne doit pas être pris si vous êtes allergique à ce médicament.", note: "Dolorex est inventé ; passif avec dürfen" },
        { tr: "Si vous avez des questions, appelez la pharmacie.", note: "anrufen est séparable : an à la fin" }
      ]
    },
    vocab: [
      "la notice (oral)",
      "la notice (terme officiel)",
      "l'effet indésirable",
      "l'interaction (entre médicaments)",
      "la contre-indication (terme technique)",
      "la contre-indication (mot de la notice)",
      "la pharmacie",
      "le pharmacien",
      "enceinte",
      "allergique",
      "conserver",
      "au cas où, si"
    ],
    dialogue: [
      "Dolorex est un antidouleur inventé. Il n'existe que dans ce cours.",
      "Dolorex ne doit pas être pris si vous êtes allergique à ce médicament.",
      "Si vous êtes enceinte ou si vous allaitez, demandez à votre médecin ou à votre pharmacien avant la prise.",
      "Si vous prenez d'autres médicaments, dites-le à votre médecin. Des interactions sont possibles.",
      "Prenez toujours Dolorex exactement comme votre médecin vous l'a dit.",
      "Si vous avez oublié une prise, demandez à votre médecin ou à votre pharmacien.",
      "Si une éruption cutanée apparaît ou si vous avez du mal à respirer, arrêtez Dolorex et allez tout de suite chez le médecin.",
      "Conservez le médicament hors de portée des enfants."
    ],
    culture: {
      title: "Un regard allemand : Apotheke et Beipackzettel",
      text: "<p>En Allemagne, presque tous les médicaments ne se vendent qu'en pharmacie (<i>apothekenpflichtig</i>), et une partie seulement sur ordonnance (<i>verschreibungspflichtig</i>). Peu de produits sont <i>freiverkäuflich</i> et se trouvent aussi en <i>Drogerie</i> ou au supermarché. On reconnaît les pharmacies au grand <b>A</b> rouge en écriture gothique, et la nuit et les jours fériés il y a toujours une <i>Notdienstapotheke</i> de garde.</p><p>Le <i>Beipackzettel</i> est si présent dans la vie de tous les jours que sa phrase obligatoire dans les publicités est devenue une expression courante : <i>Zu Risiken und Nebenwirkungen lesen Sie die Packungsbeilage und fragen Sie Ihren Arzt oder Apotheker.</i> Pour le médecin, il existe un document différent et plus technique, la <i>Fachinformation</i>, l'équivalent du résumé des caractéristiques du produit.</p>"
    },
    exercises: [
      {
        q: "Lis la notice de Dolorex. « Une personne allergique à Dolorex peut quand même le prendre. »",
        opts: ["Vrai", "Faux"],
        why: "Faux : <i>Dolorex darf nicht eingenommen werden, wenn Sie allergisch dagegen sind.</i> L'allergie au médicament est une contre-indication, une <i>Gegenanzeige</i>."
      },
      {
        q: "Lis la notice de Dolorex. « Pendant la grossesse, il faut demander au médecin ou au pharmacien avant de le prendre. »",
        opts: ["Vrai", "Faux"],
        why: "Vrai : <i>Wenn Sie schwanger sind oder stillen, fragen Sie vor der Einnahme Ihren Arzt oder Apotheker.</i>"
      },
      {
        q: "D'après la notice, que fait-on si une éruption cutanée apparaît ?",
        opts: ["On met une pommade et on continue.", "On continue et on attend.", "On arrête de le prendre et on va tout de suite chez le médecin."],
        why: "<i>Wenn Sie Hautausschlag oder Atemnot bekommen, nehmen Sie Dolorex nicht weiter ein und gehen Sie sofort zum Arzt.</i> <i>Nicht weiter einnehmen</i> veut dire « arrêter de prendre »."
      },
      {
        q: "Complète : « ___ Sie schwanger sind, fragen Sie vor der Einnahme Ihren Arzt. »",
        hint: "conjonction conditionnelle",
        why: "<b>Wenn</b> ou <b>Falls</b> : les deux envoient le verbe <i>sind</i> à la fin, et la principale commence par <i>fragen</i>."
      },
      {
        q: "Complète la phrase de la notice.",
        tr: "Si vous avez du mal à respirer, allez tout de suite chez le médecin.",
        why: "<i>Wenn Sie Atemnot bekommen, gehen Sie sofort zum Arzt</i> : <i>bekommen</i> à la fin de la conditionnelle, <i>zum Arzt</i> pour la direction vers une personne."
      },
      {
        q: "Remets les mots dans l'ordre.",
        tr: "Si vous avez des questions, appelez la pharmacie.",
        why: "<i>Wenn Sie Fragen haben, rufen Sie die Apotheke an.</i> <i>Haben</i> à la fin de la conditionnelle, <i>rufen</i> ouvre la principale, le préfixe <i>an</i> ferme la phrase."
      },
      {
        q: "Associe chaque mot de la notice à son sens.",
        pairs: ["la contre-indication", "l'effet indésirable", "l'interaction", "la notice", "le pharmacien"]
      },
      {
        q: "Quelles phrases sont bien construites ?",
        opts: [
          "Wenn Sie Schmerzen haben, klingeln Sie bitte.",
          "Wenn Sie haben Schmerzen, klingeln Sie bitte.",
          "Falls Ihnen übel wird, sagen Sie es mir.",
          "Wenn Sie Fragen haben, Sie fragen den Arzt.",
          "Wenn Sie eine Tablette vergessen haben, fragen Sie den Arzt."
        ],
        why: "Dans la conditionnelle, le verbe va à la fin (<i>haben</i>, <i>wird</i>), et la principale commence par le verbe (<i>klingeln</i>, <i>sagen</i>, <i>fragen</i>). La deuxième et la quatrième se trompent justement là-dessus."
      },
      {
        q: "Traduis : « Si vous avez des questions, demandez à votre médecin ou à votre pharmacien. »",
        why: "<i>Wenn Sie Fragen haben, fragen Sie Ihren Arzt oder Apotheker.</i> <i>Falls</i> va aussi, et <i>den Arzt</i> à la place de <i>Ihren Arzt</i> : <i>fragen</i> veut l'accusatif, alors que le français dit « demander à »."
      },
      {
        tr: "Si une éruption cutanée apparaît ou si vous avez du mal à respirer, arrêtez Dolorex et allez tout de suite chez le médecin.",
        why: "Dans <i>Hautausschlag</i>, l'accent tombe sur la première syllabe, <b>Haut</b> ; dans <i>Atemnot</i>, sur le <b>A</b> ; dans <i>sofort</i>, sur la deuxième syllabe, <b>fort</b>."
      },
      {
        tr: "Si vous avez des questions, demandez à votre médecin, s'il vous plaît.",
        why: "Dans <i>Wenn</i>, le <b>w</b> se prononce [v] ; dans <i>Fragen</i>, le <b>a</b> est long ; dans <i>Ihren</i>, le <b>h</b> ne se prononce pas et allonge le <b>i</b> ; dans <i>Arzt</i>, le <b>z</b> et le <b>t</b> finaux se prononcent tous les deux."
      }
    ]
  },
  "lesson:pfl-u05-l4": {
    theme: "Sécurité",
    title: "Préparer les médicaments",
    objectives: [
      "décrire la préparation des médicaments avec le passif",
      "employer müssen, dürfen et sollen avec l'infinitif passif",
      "nommer les six R de l'administration sécurisée",
      "demander à la pharmacie ou au médecin au lieu de décider seul"
    ],
    theory: [
      {
        h: "Le passif du service",
        p: "Quand ce qui compte est l'action et non qui la fait, l'allemand emploie le <strong>passif</strong> : <em>werden</em> conjugué en deuxième position et le participe à la fin. <em>Die Medikamente werden im Stationszimmer gerichtet. Jede Gabe wird dokumentiert.</em> Avec un modal, le modal est en deuxième position et à la fin on trouve l'infinitif passif, participe + <em>werden</em> : <em>Vor der Gabe muss der Name kontrolliert werden.</em> Dans la question fermée, le modal passe en première place : <em>Darf die Tablette geteilt werden?</em>"
      },
      {
        h: "Die 6-R-Regel",
        p: "Avant chaque administration, on contrôle six « R », de <em>richtig</em> : <em>die richtige Person</em>, <em>das richtige Medikament</em>, <em>die richtige Dosierung</em>, <em>die richtige Applikationsart</em>, <em>der richtige Zeitpunkt</em>, <em>die richtige Dokumentation</em>. Ici, la règle est un sujet de langue : remarque comme <em>richtig</em> change de terminaison selon l'article (<em>der richtige</em>, <em>die richtige</em>, <em>das richtige</em>). Certains établissements en comptent plus de six ; c'est toujours le standard de ton établissement qui s'applique."
      },
      {
        contrast: "En France, tu as appris la même règle sous le nom de « règle des 5 B » : le bon patient, le bon médicament, la bonne dose, la bonne voie, le bon moment. L'allemand la construit avec les R de <em>richtig</em> et ajoute en général une sixième, <em>die richtige Dokumentation</em>, la traçabilité. Remarque que le français marque le genre sur « bon / bonne », et l'allemand aussi sur <em>richtige</em>, mais selon trois genres et pas toujours les mêmes : « le bon moment » est <em>der richtige Zeitpunkt</em>, mais « le bon médicament » est <em>das richtige Medikament</em>. Le passif, lui, est proche du français : « les médicaments sont préparés » se dit <em>die Medikamente werden gerichtet</em>, avec <em>werden</em> et non <em>sein</em>, alors que le français emploie « être ». Et avec un modal, le français dit « doit être contrôlé » d'un seul tenant, l'allemand met participe et <em>werden</em> ensemble à la fin. Le « on » français (« on documente tout ») devient un passif ou <em>man</em> : <em>Alles wird dokumentiert</em>, <em>Man dokumentiert alles</em>."
      },
      {
        trap: "<em>Richten</em> veut dire ici « préparer les médicaments » (beaucoup de services disent aussi <em>stellen</em>), pas « diriger » et pas « juger » comme <em>richten</em> au tribunal. <em>Verabreichen</em>, c'est administrer le médicament ; <em>verschreiben</em>, c'est le prescrire, et c'est le médecin qui le fait. <em>Die Dosierung</em> est la posologie (combien et quand), <em>die Dosis</em> est la quantité d'une seule prise. Attention aussi à la forme : le participe de <em>dokumentieren</em> est <em>dokumentiert</em>, sans <em>ge-</em>, comme tous les verbes en <em>-ieren</em> ; celui de <em>verabreichen</em> est <em>verabreicht</em>, sans <em>ge-</em> à cause du préfixe inséparable <em>ver-</em>."
      },
      {
        tip: "La phrase la plus importante de la leçon est celle qui renvoie le doute : <em>Das müssen wir in der Apotheke nachfragen</em> ou <em>Das klären wir mit dem Arzt.</em> Couper un comprimé, l'écraser ou changer l'horaire sont des décisions qu'on ne prend pas de mémoire."
      }
    ],
    grammar: {
      title: "Passif et modaux",
      note: "Passif : <b>werden</b> en deuxième position, participe <b>à la fin</b>. Avec un modal : modal en deuxième position (en première dans la question fermée), à la fin <b>participe + werden</b>.",
      table: {
        head: ["structure", "exemple", "remarque"],
        rows: [
          ["passif présent", "Die Medikamente werden gerichtet.", "werden + participe"],
          ["passif, singulier", "Jede Gabe wird dokumentiert.", "-ieren : pas de ge-"],
          ["modal + passif", "Der Name muss kontrolliert werden.", "participe + werden à la fin"],
          ["question fermée", "Darf die Tablette geteilt werden?", "le modal ouvre la phrase"]
        ]
      },
      examples: [
        { tr: "Les médicaments sont préparés en salle de soins.", note: "werden au pluriel" },
        { tr: "Chaque administration est documentée tout de suite.", note: "dokumentiert : pas de ge-" },
        { tr: "Avant l'administration, il faut contrôler le nom.", note: "müssen + infinitif passif" },
        { tr: "Est-ce qu'on peut couper le comprimé ?", note: "question fermée : dürfen en première place" },
        { tr: "Nous devons le demander à la pharmacie.", note: "nachfragen : séparable, uni à l'infinitif" },
        { tr: "Si quelque chose n'est pas clair, on demande au médecin.", note: "passif : l'action compte, pas qui la fait" }
      ]
    },
    vocab: [
      "préparer (les médicaments)",
      "le pilulier",
      "le compartiment",
      "la prescription, l'ordre du médecin",
      "la posologie",
      "l'administration",
      "administrer",
      "contrôler",
      "documenter, tracer",
      "couper, diviser",
      "le moment, l'horaire",
      "la confusion (de médicament ou de patient)"
    ],
    dialogue: [
      "Elena, tu m'aides ? Il faut encore préparer les médicaments de la nuit.",
      "Bien sûr. On contrôle tout avec la règle des 6 R.",
      "La bonne personne : madame Kühn, chambre quatre. Le bon médicament : Cardiomin.",
      "La bonne posologie et la bonne voie : comme c'est écrit sur la prescription. Par la bouche.",
      "Est-ce qu'on peut couper le comprimé ? Madame Kühn a du mal à avaler.",
      "Je ne sais pas. Nous devons le demander à la pharmacie.",
      "Bien. Le bon moment, c'est le soir, au coucher.",
      "Exactement. Et après l'administration, on documente tout. C'est le sixième R."
    ],
    exercises: [
      {
        q: "« Les médicaments sont préparés en salle de soins. » Quelle phrase est correcte ?",
        opts: [
          "Die Medikamente werden im Stationszimmer gerichtet.",
          "Die Medikamente sind im Stationszimmer richten.",
          "Die Medikamente werden im Stationszimmer richten."
        ],
        why: "Le passif, c'est <b>werden</b> + <b>participe</b> : <i>werden ... gerichtet</i>. Avec l'infinitif <i>richten</i>, la phrase deviendrait un futur, qui n'a pas de sens ici."
      },
      {
        tr: "Le présent de dürfen, à toutes les personnes.",
        why: "<i>Darf, darfst, darf, dürfen, dürft, dürfen</i> : au singulier, le <b>ü</b> devient <b>a</b>, et la première et la troisième personne du singulier sont identiques, sans terminaison."
      },
      {
        q: "Complète : « Jede Gabe ___ sofort dokumentiert. »",
        hint: "werden, troisième personne du singulier",
        why: "<b>wird</b> : le sujet <i>jede Gabe</i> est au singulier, et le passif se forme avec <i>werden</i>."
      },
      {
        q: "Complète avec le modal et l'infinitif passif.",
        tr: "Avant l'administration, il faut contrôler le nom.",
        why: "<i>Vor der Gabe muss der Name kontrolliert werden</i> : <i>muss</i> en deuxième position, à la fin le participe <i>kontrolliert</i> puis <i>werden</i>."
      },
      {
        q: "Remets les mots dans l'ordre.",
        tr: "Est-ce qu'on peut couper le comprimé ?",
        why: "<i>Darf die Tablette geteilt werden?</i> Question fermée : le modal <i>darf</i> ouvre la phrase, <i>geteilt werden</i> la ferme."
      },
      {
        q: "Associe chaque R à son sens.",
        pairs: ["la bonne personne", "le bon médicament", "la bonne posologie", "la bonne voie d'administration", "le bon moment", "la bonne documentation"]
      },
      {
        q: "Choisis le bon article défini pour chaque nom.",
        items: ["pilulier", "compartiment", "prescription", "posologie", "moment, horaire", "confusion"]
      },
      {
        q: "Quelles phrases sont bien construites ?",
        opts: [
          "Die Tablette darf nicht geteilt werden.",
          "Die Tablette darf nicht geteilt wird.",
          "Der Name muss kontrolliert werden.",
          "Der Name muss werden kontrolliert.",
          "Die Gabe soll dokumentiert werden."
        ],
        why: "Avec un modal, à la fin de la phrase vont le participe puis <i>werden</i> à l'infinitif : <i>geteilt werden</i>, <i>kontrolliert werden</i>, <i>dokumentiert werden</i>."
      },
      {
        q: "Traduis : « Chaque administration est documentée. »",
        why: "<i>Jede Gabe wird dokumentiert.</i> <i>Verabreichung</i> ou <i>Applikation</i> vont aussi. Passif : <i>wird</i> + participe sans <i>ge-</i>."
      },
      {
        q: "Un collègue te demande où en sont les médicaments de la nuit.",
        setting: "Tu es en salle de soins avec ton collègue Jonas.",
        lines: [
          { tr: "Les médicaments de la nuit sont déjà prêts ?" },
          { tr: "Réponds qu'ils sont en train d'être préparés.", answerTr: "Non, ils sont en train d'être préparés." },
          { tr: "Est-ce qu'on peut couper le comprimé de madame Kühn ?" },
          { tr: "Réponds que tu ne sais pas et qu'il faut demander à la pharmacie.", answerTr: "Je ne sais pas. Nous devons demander à la pharmacie." },
          { tr: "Et après l'administration ?" },
          { tr: "Réponds qu'après l'administration on documente tout.", answerTr: "Après l'administration, on documente tout." }
        ]
      },
      {
        tr: "Les médicaments sont préparés selon la règle des 6 R. Après l'administration, on documente tout.",
        why: "Dans <i>gerichtet</i>, le <b>ch</b> après <b>i</b> se dit [ç] ; dans <i>dokumentiert</i>, l'accent tombe sur <b>tiert</b>, comme dans tous les verbes en <i>-ieren</i> ; dans <i>Regel</i>, le premier <b>e</b> est long."
      },
      {
        tr: "Est-ce qu'on peut couper le comprimé ?",
        why: "Dans <i>Darf</i>, le <b>r</b> après la voyelle est à peine prononcé ; dans <i>geteilt</i>, <b>ei</b> se dit [aɪ] ; dans <i>werden</i>, le <b>e</b> est long."
      }
    ]
  },
  "lesson:pfl-u05-test": {
    theme: "Évaluation",
    title: "Test : Médicaments et notice",
    objectives: [
      "vérifier les voies d'administration et leurs formules pour le patient, les horaires avec le datif, les phrases avec wenn et falls et le passif de la préparation"
    ],
    theory: [
      {
        p: "Onze questions sur toute l'unité. On réussit avec 70 %. Les médicaments cités sont inventés et les contenus cliniques sont des exemples pédagogiques : dans le service, ce sont la prescription du médecin et le protocole de l'établissement qui font foi."
      }
    ],
    exercises: [
      {
        q: "Le médecin a écrit « intravenös ». Comment le dis-tu au patient ?",
        opts: ["unter die Haut", "über den Mund", "in die Vene"],
        why: "<i>Intravenös</i>, c'est « dans la veine » : au patient, on dit <b>in die Vene</b>."
      },
      {
        q: "Complète : « Nehmen Sie die Tropfen vor ___ Frühstück. »",
        hint: "vor + datif, das Frühstück",
        why: "<b>dem</b> : dans cette expression, <i>vor</i> veut le datif."
      },
      {
        q: "Complète : « Die Medikamente ___ im Stationszimmer gerichtet. »",
        hint: "passif, pluriel",
        why: "<b>werden</b> : sujet au pluriel, passif avec <i>werden</i> et participe <i>gerichtet</i> à la fin."
      },
      {
        q: "Associe chaque terme technique au mot pour le patient ou de la notice.",
        pairs: ["über den Mund", "unter die Haut", "in die Vene", "die Gegenanzeige"]
      },
      {
        q: "Quelles phrases sont correctes ?",
        opts: [
          "Wenn Sie Schmerzen haben, klingeln Sie bitte.",
          "Wenn Sie haben Schmerzen, klingeln Sie bitte.",
          "Falls Sie Fragen haben, Sie rufen die Apotheke an.",
          "Vor der Gabe wird der Name kontrolliert.",
          "Nehmen Sie die Tablette nach dem Essen ein."
        ],
        why: "Après <i>wenn</i> et <i>falls</i>, le verbe va à la fin et la principale commence par le verbe. <i>Vor der Gabe wird ... kontrolliert</i> est un passif correct, <i>nach dem Essen</i> un datif correct."
      },
      {
        q: "Complète la phrase.",
        tr: "Au cas où vous auriez oublié une prise, demandez à votre médecin, s'il vous plaît.",
        why: "<i>Falls Sie eine Einnahme vergessen haben, fragen Sie bitte Ihren Arzt</i> : le participe <i>vergessen</i> avant <i>haben</i>, et la principale commence par <i>fragen</i>."
      },
      {
        q: "Remets les mots dans l'ordre.",
        tr: "Après l'administration, on documente tout.",
        why: "<i>Nach der Gabe wird alles dokumentiert.</i> <i>Nach der Gabe</i> en tête, <i>wird</i> en deuxième position, le participe à la fin."
      },
      {
        q: "« Packungsbeilage » et « Beipackzettel » désignent la même notice.",
        opts: ["Vrai", "Faux"],
        why: "Vrai : <i>Packungsbeilage</i> est le nom officiel, <i>Beipackzettel</i> celui de tous les jours."
      },
      {
        q: "Choisis le bon article défini pour chaque nom.",
        items: ["comprimé", "suppositoire", "notice", "effet indésirable", "pilulier", "antibiotique"]
      },
      {
        tr: "Si vous avez des questions sur vos médicaments, demandez au médecin ou à la pharmacie, s'il vous plaît.",
        why: "Dans <i>Medikamenten</i>, l'accent tombe sur <b>men</b> ; dans <i>Apotheke</i>, l'accent est sur <b>the</b> et <b>th</b> se prononce [t] ; dans <i>Fragen</i>, le <b>a</b> est long."
      },
      {
        tr: "Demain matin, restez à jeun, s'il vous plaît.",
        why: "Dans <i>nüchtern</i>, le <b>ü</b> est bref et le <b>ch</b> se dit [ç] ; dans <i>früh</i>, le <b>ü</b> est long et le <b>h</b> ne se prononce pas ; dans <i>bleiben</i>, <b>ei</b> se dit [aɪ]."
      }
    ]
  }
});
