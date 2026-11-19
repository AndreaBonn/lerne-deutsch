/* ============================================================
   Textes dans la langue de l'élève (fr) pour data/core/pfl-08.js, unité pfl-u08.
   Les clés renvoient aux id de la couche neutre ; les tableaux se
   joignent par index, leur longueur doit donc correspondre à core.
   Vérifié par scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("fr", {
  "unit:pfl-u08": {
    title: "Visite, prescriptions et équipe",
    grammarNote: "le passif au présent et avec les modaux pendant la visite · les subordonnées avec dass et ob pour rapporter et vérifier une prescription · les connecteurs deshalb, aber, denn · les verbes à préposition fixe en réunion d'équipe · le Konjunktiv II de politesse au téléphone"
  },
  "lesson:pfl-u08-l1": {
    theme: "Visite",
    title: "La visite",
    objectives: [
      "suivre la visite et comprendre ce qui est décidé pour le patient",
      "reconnaître le passif : wird abgenommen, wird gewechselt, wurde gemacht",
      "comprendre le passif avec les modaux : soll mobilisiert werden",
      "intervenir avec les observations infirmières"
    ],
    theory: [
      {
        h: "Ce qui se passe pendant la Visite",
        p: "Pendant la <strong>Visite</strong>, le médecin (souvent avec l'<em>Oberärztin</em> ou l'<em>Oberarzt</em>) passe de chambre en chambre avec l'infirmière ou l'infirmier du patient. On regarde les résultats (<em>Befunde</em>), on décide si le traitement continue et on donne les prescriptions pour les jours suivants. Ton rôle est d'écouter, de noter et d'apporter les observations infirmières : comment le patient a dormi, s'il mange, s'il se lève, s'il a mal. Les prescriptions données à l'oral pendant la visite doivent ensuite figurer par écrit dans le dossier."
      },
      {
        h: "Le passif : ce qui compte, c'est ce qu'on fait",
        p: "Pendant la Visite, on parle surtout de <strong>ce qu'on fait</strong>, pas de qui le fait. C'est pourquoi on utilise le <strong>passif</strong> : <em>werden</em> conjugué + participe à la fin. Au présent : <em>Der Verband <b>wird</b> morgen <b>gewechselt</b>.</em> Au Präteritum : <em>Die Röntgenaufnahme <b>wurde</b> gestern <b>gemacht</b>.</em> Avec un modal, c'est le modal qui se conjugue, et à la fin on trouve le participe puis <em>werden</em> à l'infinitif : <em>Frau Lang <b>soll</b> heute <b>mobilisiert werden</b>.</em> Souvent, celle qui fait l'action, c'est toi : <em>Bei Herrn Wolf wird ein Blutbild abgenommen</em> veut dire qu'après la visite la prise de sang revient à l'équipe soignante."
      },
      {
        contrast: "À la visite, le français passe surtout par « on » : « on poursuit le traitement », « on refait une NFS demain », « on refait le pansement ». L'allemand a bien <em>man</em>, mais à la Visite il sonne vague ; il préfère le passif avec <em>werden</em> : <em>Die Therapie wird fortgesetzt</em>. Le piège vient du passif français, qui se fait avec « être » : « le pansement est refait ». Si tu le calques avec <em>sein</em>, tu obtiens <em>Der Verband ist gewechselt</em>, qui décrit un état (« le pansement est déjà changé »), pas un soin à faire. L'action à faire, c'est <em>wird gewechselt</em>. Et ne confonds pas passif et futur : <em>wird gewechselt</em> (participe) est un passif, « est changé » ; <em>wird wechseln</em> (infinitif) est un futur, « changera ». Le signal à saisir au vol, c'est <em>wird</em> ou <em>wurde</em> avec un participe en fin de phrase : c'est une prescription que quelqu'un doit exécuter."
      },
      {
        trap: "<em>fortsetzen</em> est un verbe séparable et prend <em>ge-</em> après le préfixe : <em>fortgesetzt</em>, jamais <em>gefortsetzt</em>. <em>mobilisieren</em>, lui, se termine en <em>-ieren</em> et son participe n'a pas de <em>ge-</em> : <em>mobilisiert</em>, jamais <em>gemobilisiert</em>. Et <em>der Befund</em> n'est pas seulement le compte rendu écrit : <em>ohne Befund</em> veut dire « normal, RAS ». Un examen « sans Befund » est donc une bonne nouvelle, pas un résultat manquant."
      },
      {
        tip: "Apporte à la Visite une feuille ou la tablette avec tes patients et note chaque prescription au moment où tu l'entends, avec qui doit la faire et quand. Si une phrase t'échappe, demande tout de suite, au lit du patient : <em>Entschuldigung, wird das Blutbild heute oder morgen abgenommen?</em> Une question de plus à la visite coûte dix secondes ; une prescription mal comprise coûte beaucoup plus."
      }
    ],
    grammar: {
      title: "Le passif avec werden",
      note: "Présent : <b>wird</b> + participe. Präteritum : <b>wurde</b> + participe. Avec un modal : <b>soll / muss / kann</b> + participe + <b>werden</b>.",
      table: {
        head: ["forme", "structure", "exemple"],
        rows: [
          ["passif présent", "wird + participe", "Der Verband wird morgen gewechselt."],
          ["passif Präteritum", "wurde + participe", "Die Röntgenaufnahme wurde gestern gemacht."],
          ["passif avec modal", "soll + participe + werden", "Frau Lang soll heute mobilisiert werden."],
          ["question", "Wann / Wird ... + participe", "Wann wird Herr Wolf entlassen?"]
        ]
      },
      examples: [
        { tr: "Aujourd'hui, on fait une NFS à M. Wolf.", note: "wird ... abgenommen : la prise de sang, en général, c'est l'équipe soignante qui la fait" },
        { tr: "Le pansement est refait demain.", note: "passif présent : wird + gewechselt à la fin" },
        { tr: "La radiographie a été faite hier.", note: "passif au Präteritum : wurde gemacht" },
        { tr: "Mme Lang doit être mobilisée aujourd'hui.", note: "modal soll + mobilisiert werden ; mobilisiert sans ge-" },
        { tr: "Le traitement est poursuivi comme jusqu'à présent.", note: "fortsetzen est séparable : fortgesetzt" },
        { tr: "Quand est-ce que M. Wolf sort ?", note: "question au passif : entlassen à la fin" }
      ]
    },
    vocab: [
      "la visite",
      "la médecin senior (proche d'une cheffe de clinique)",
      "le résultat, le compte rendu d'examen",
      "la NFS (numération formule sanguine)",
      "la radiographie",
      "la thérapie, le traitement",
      "le traitement, la prise en charge",
      "la réfection du pansement",
      "faire une prise de sang",
      "poursuivre, continuer",
      "faire sortir (un patient)",
      "normal, sans particularité"
    ],
    dialogue: [
      "Bonjour, monsieur Wolf. Comment allez-vous aujourd'hui ?",
      "Mieux qu'hier, mais je suis encore fatigué.",
      "La radio d'hier est normale. On poursuit le traitement comme jusqu'à présent.",
      "On refait une NFS demain ?",
      "Oui, demain matin, s'il vous plaît. Et le pansement est à refaire aujourd'hui.",
      "Bien. Et la mobilisation ?",
      "M. Wolf doit être mobilisé deux fois aujourd'hui, d'abord au bord du lit.",
      "Quand est-ce que je sors ?",
      "Si les valeurs restent bonnes, peut-être vendredi."
    ],
    culture: {
      title: "Côté allemand : qui est présent à la Visite",
      text: "<p>Dans les services allemands, la <i>Visite</i> a lieu en général le matin. Le médecin du service (<i>Stationsarzt</i>, <i>Stationsärztin</i>, souvent un <i>Assistenzarzt</i> en formation de spécialité, assez proche d'un interne) la fait chaque jour ; une ou deux fois par semaine, il y a aussi l'<i>Oberarztvisite</i> ou la <i>Chefarztvisite</i>, avec le chef de service. Les fonctions ne se superposent pas exactement aux françaises : l'<i>Oberarzt</i> est un médecin senior responsable d'un secteur, plus proche d'un praticien hospitalier ou d'un chef de clinique expérimenté ; le <i>Chefarzt</i> est le chef de service.</p><p>La présence de l'infirmière à la visite varie : dans certains services elle participe à chaque visite, dans d'autres les prescriptions sont transmises après, en salle de soins. Demande à ton arrivée comment cela se passe dans ton service.</p>"
    },
    exercises: [
      {
        q: "À la Visite, la médecin dit qu'une NFS est à faire demain matin. Complète : « Morgen früh ___ ein Blutbild abgenommen. »",
        opts: ["wird", "ist", "hat"],
        why: "Le passif au présent se forme avec <b>werden</b> : <i>wird</i> + participe <i>abgenommen</i> à la fin. Le français dit « est faite » avec être, mais <i>ist abgenommen</i> décrit un état ; <i>hat abgenommen</i> est un Perfekt actif (et avec <i>abnehmen</i> il peut aussi vouloir dire « a maigri »)."
      },
      {
        tr: "Le Präteritum de werden, à toutes les personnes.",
        why: "<i>Wurde, wurdest, wurde, wurden, wurdet, wurden</i> : c'est la forme qui porte le passif au passé, <i>wurde gemacht</i>. La première et la troisième personne du singulier sont identiques."
      },
      {
        q: "Complète : « Der Verband ___ heute gewechselt. »",
        hint: "passif au présent",
        why: "<b>wird</b> : sujet singulier <i>der Verband</i>, passif présent avec le participe <i>gewechselt</i> à la fin."
      },
      {
        q: "Complète la phrase.",
        tr: "M. Wolf doit être mobilisé deux fois aujourd'hui.",
        why: "<i>soll ... <b>mobilisiert werden</b></i> : avec le modal, on trouve à la fin le participe puis <i>werden</i> à l'infinitif. <i>mobilisiert</i> ne prend pas <i>ge-</i> parce que le verbe se termine en <i>-ieren</i>."
      },
      {
        q: "Quelles phrases sont correctes ?",
        opts: [
          "Die Therapie wird fortgesetzt.",
          "Die Therapie wird gefortsetzt.",
          "Das Blutbild wurde gestern abgenommen.",
          "Der Patient soll heute entlassen werden.",
          "Der Patient soll heute werden entlassen."
        ],
        why: "<i>fortsetzen</i> est séparable : <i>fort<b>ge</b>setzt</i>, avec <i>ge-</i> après le préfixe. Avec un modal, l'ordre final est participe + <i>werden</i> : <i>entlassen werden</i>, pas <i>werden entlassen</i>."
      },
      {
        q: "Choisis le bon article défini pour chaque nom.",
        items: ["visite", "médecin senior", "résultat d'examen", "NFS", "radiographie", "réfection du pansement"]
      },
      {
        q: "Associe chaque mot à son sens.",
        pairs: ["le traitement", "le résultat d'examen", "la radiographie", "la NFS"]
      },
      {
        q: "Remets les mots dans l'ordre.",
        tr: "Le traitement est poursuivi comme jusqu'à présent.",
        why: "<i>Die Therapie wird wie bisher fortgesetzt.</i> Le verbe conjugué <i>wird</i> en deuxième position, le participe <i>fortgesetzt</i> à la fin ; <i>wie bisher</i> se place au milieu."
      },
      {
        q: "Traduis (à la Visite) : « Demain matin, on fait une NFS. »",
        why: "<i>Morgen früh wird ein Blutbild abgenommen.</i> Le « on » français devient un passif avec <i>wird</i>. Pour la prise de sang, le verbe habituel est <i>abnehmen</i> ; <i>gemacht</i> est aussi accepté. <i>morgen früh</i> veut dire « demain matin »."
      },
      {
        q: "À la Visite.",
        setting: "Tu es l'infirmière de M. Wolf et tu participes à la visite avec la médecin senior.",
        lines: [
          { tr: "Côté soins, il y a encore quelque chose à signaler sur M. Wolf ?" },
          { tr: "Réponds que M. Wolf a peu dormi cette nuit.", answerTr: "Oui, M. Wolf a peu dormi cette nuit." },
          { tr: "Le pansement est à refaire aujourd'hui." },
          { tr: "Réponds que tu le refais après la visite.", answerTr: "Bien, je le refais après la visite." },
          { tr: "Et la mobilisation ?" },
          { tr: "Réponds que M. Wolf a déjà été mobilisé une fois aujourd'hui.", answerTr: "M. Wolf a déjà été mobilisé une fois aujourd'hui." }
        ]
      },
      {
        tr: "La radio d'hier est normale. On poursuit le traitement comme jusqu'à présent.",
        why: "Dans <i>Röntgenaufnahme</i>, le <b>ö</b> est bref et l'accent tombe sur <b>Rönt</b> ; dans <i>unauffällig</i>, l'accent tombe sur <b>un</b> et le <b>g</b> final se prononce [ç] ; dans <i>Therapie</i>, le <b>th</b> est un simple [t] et l'accent tombe sur la dernière syllabe, <b>pie</b>, comme en français."
      },
      {
        tr: "Aujourd'hui, on fait une NFS à M. Wolf.",
        why: "Dans <i>Blutbild</i>, le <b>u</b> est long, comme « ou » tenu, et le <b>d</b> final se prononce [t] ; dans <i>abgenommen</i>, l'accent tombe sur <b>ab</b> ; le <b>w</b> de <i>Wolf</i> et de <i>wird</i> se prononce [v]."
      }
    ]
  },
  "lesson:pfl-u08-l2": {
    theme: "Prescriptions et demandes de précision",
    title: "Comprendre et vérifier une prescription",
    objectives: [
      "rapporter ce qui a été prescrit avec dass",
      "exprimer un doute sur une prescription avec ob",
      "demander des précisions au médecin avec nachfragen",
      "relier la raison et la conséquence avec deshalb, aber, denn"
    ],
    theory: [
      {
        h: "Une prescription pas claire ne s'exécute pas",
        p: "L'<strong>Anordnung</strong>, c'est la prescription du médecin : un examen, un pansement, la mobilisation, le jeûne avant une intervention. Si une prescription n'est pas claire, est incomplète ou inhabituelle (il manque le quand, il manque le comment, elle ne semble pas adaptée au patient), la règle est simple : <strong>on demande d'abord, on exécute ensuite</strong>. La phrase à avoir prête est <em>Ich frage noch einmal nach.</em> Demander n'est pas mettre en doute la compétence du médecin : cela fait partie de la responsabilité de celle qui exécute. Après la clarification, la prescription correcte doit figurer par écrit."
      },
      {
        h: "Rapporter avec dass, vérifier avec ob",
        p: "Pour dire ce qui est écrit ou ce qui a été prescrit, on utilise <em>dass</em> : <em>In der Akte steht, <b>dass</b> sie heute nüchtern bleibt.</em> Pour exprimer un doute, on utilise <em>ob</em>, l'interrogation indirecte oui/non : <em>Ich bin nicht sicher, <b>ob</b> die Anordnung noch gilt.</em> Dans les deux subordonnées, le verbe conjugué va à la fin. Pour relier deux principales : <em>deshalb</em> (conséquence, le verbe vient juste après), <em>aber</em> et <em>denn</em> (ne changent pas l'ordre) : <em>Die Anordnung ist unklar, <b>deshalb frage</b> ich nach. Ich frage nach, <b>denn</b> ich <b>möchte</b> keinen Fehler machen.</em>"
      },
      {
        contrast: "En français, « si » fait deux métiers : la condition (« s'il pleut ») et l'interrogation indirecte (« je ne sais pas si elle est encore valable »). L'allemand les sépare : la condition, c'est <em>wenn</em> ; l'interrogation indirecte, c'est <em>ob</em>. Un francophone dit facilement <em>Ich weiß nicht, wenn die Anordnung noch gilt</em>, ce qu'un Allemand entend comme « je ne sais pas, quand la prescription est encore valable ». Le test est simple : si tu peux transformer la phrase en question fermée (« la prescription est-elle encore valable ? »), il faut <em>ob</em>. Côté cadre, rien de dépaysant : en France aussi l'infirmière exécute des prescriptions écrites, datées et signées, et une prescription orale reste l'exception, à faire confirmer par écrit. Ce qui change, c'est le mot : là où tu dirais « docteur, j'ai une question », on dit souvent dans un service allemand <em>Ich habe eine Rückfrage</em>, un mot qui désigne justement la demande de précision sur quelque chose de déjà dit ou écrit."
      },
      {
        trap: "<em>anordnen</em> est séparable : <em>Die Ärztin <b>ordnet</b> ein Blutbild <b>an</b></em>, au Perfekt <em>hat ... ange<b>ordnet</b></em>. Ne le confonds pas avec <em>ordnen</em>, « ranger ». Et <em>die Indikation</em> est la raison médicale d'un traitement, comme « l'indication » en français médical, mais jamais au sens de consigne ou de renseignement : pour une consigne, on dit <em>die Anweisung</em>. Au patient, on ne dit pas <em>Indikation</em>, mais <em>der Grund für die Behandlung</em>."
      },
      {
        tip: "Quand tu demandes une précision, reformule d'abord ce que tu as compris, puis pose ta question : <em>In der Akte steht, dass sie nüchtern bleiben soll. Gilt das noch?</em> Le médecin voit tout de suite où est le doute. Note la réponse, l'heure et le nom de la personne qui te l'a donnée."
      }
    ],
    grammar: {
      title: "dass, ob et les connecteurs",
      note: "<b>dass</b> rapporte un fait, <b>ob</b> introduit un doute (interrogation indirecte oui/non) : dans les deux, le verbe conjugué va à la fin. Après <b>deshalb</b>, le verbe vient tout de suite ; <b>aber</b> et <b>denn</b> ne changent pas l'ordre.",
      table: {
        head: ["mot", "fonction", "exemple"],
        rows: [
          ["dass", "rapporter ce qui est écrit ou prescrit", "In der Akte steht, dass der Verband täglich gewechselt wird."],
          ["ob", "exprimer un doute, question oui/non indirecte", "Ich bin nicht sicher, ob die Anordnung noch gilt."],
          ["deshalb", "conséquence, le verbe juste après", "Die Anordnung ist unklar, deshalb frage ich nach."],
          ["aber", "opposition, ordre normal", "Ich habe sie gelesen, aber ich verstehe sie nicht."],
          ["denn", "cause, ordre normal", "Ich frage nach, denn ich möchte keinen Fehler machen."]
        ]
      },
      examples: [
        { tr: "La médecin a prescrit que Mme Lang reste à jeun aujourd'hui.", note: "dass : le verbe bleibt va à la fin" },
        { tr: "Dans le dossier, il est écrit que le pansement est refait tous les jours.", note: "dass + passif : gewechselt wird à la fin" },
        { tr: "Je ne suis pas sûre que la prescription soit encore valable.", note: "ob : interrogation indirecte oui/non, gilt à la fin ; le français dit ici « que » + subjonctif ou « si »" },
        { tr: "La prescription n'est pas claire, c'est pourquoi je redemande.", note: "deshalb en première position, puis tout de suite frage" },
        { tr: "J'ai lu la prescription, mais je ne la comprends pas.", note: "aber ne déplace pas le verbe" },
        { tr: "Je préfère demander une fois de plus, car je ne veux pas faire d'erreur.", note: "denn ne déplace pas le verbe : möchte reste en deuxième position" }
      ]
    },
    vocab: [
      "la prescription (médicale)",
      "prescrire",
      "l'indication (médicale)",
      "la raison, le motif",
      "la demande de précision",
      "redemander, demander des précisions",
      "sans ambiguïté, clair",
      "pas clair, flou",
      "être valable, s'appliquer",
      "le dossier patient",
      "signer",
      "exécuter, réaliser"
    ],
    dialogue: [
      "Excusez-moi, docteur, j'ai une demande de précision concernant Mme Lang.",
      "Oui, je vous écoute.",
      "Dans le dossier, il est écrit qu'elle doit rester à jeun aujourd'hui. Je ne suis pas sûr que ce soit encore valable.",
      "Vous avez bien fait de demander. L'examen a été reporté, elle peut donc remanger.",
      "Et la NFS ? Ici, il est seulement écrit labo, mais pas quand.",
      "Demain matin, s'il vous plaît. Je l'ajoute tout de suite dans le dossier.",
      "Merci. Je préfère demander une fois de plus, car je ne veux pas faire d'erreur."
    ],
    culture: {
      title: "Côté allemand : prescription et responsabilité",
      text: "<p>En Allemagne, on distingue la responsabilité de celui qui prescrit (<i>Anordnungsverantwortung</i>, celle du médecin) et celle de celui qui exécute (<i>Durchführungsverantwortung</i>, celle de la personne qui fait le soin). Celle qui exécute répond de la manière dont elle le fait, et aussi du fait de l'avoir fait alors qu'elle avait une raison de douter. C'est pourquoi une prescription pas claire se clarifie avant, et non après.</p><p>Les prescriptions données à l'oral, par exemple au téléphone la nuit, sont en général répétées à voix haute dans le service, puis signées par le médecin le plus tôt possible. Les détails sont fixés par les règles de ton établissement : demande-les pendant ton intégration.</p>"
    },
    exercises: [
      {
        q: "Dans le dossier, tu trouves une prescription qui te semble inhabituelle. Que dis-tu ?",
        opts: ["Ich mache es so, wie ich es verstehe.", "Ich frage noch einmal nach.", "Ich warte bis morgen."],
        why: "Une prescription pas claire ou inhabituelle se clarifie toujours avec le médecin avant de l'exécuter : <b>Ich frage noch einmal nach</b>. L'interpréter seule ou attendre sans rien dire ne sont pas des options sûres."
      },
      {
        tr: "Le Perfekt de anordnen, à toutes les personnes.",
        why: "<i>Habe angeordnet, hast angeordnet, hat angeordnet</i> ... : verbe séparable, <i>ge-</i> se place entre le préfixe <i>an-</i> et le radical, et la terminaison est <i>-et</i> parce que le radical se termine par <b>d</b>."
      },
      {
        q: "Complète : « Ich bin nicht sicher, ___ die Anordnung noch gilt. »",
        hint: "interrogation indirecte oui/non",
        why: "<b>ob</b> : la phrase cache une question fermée (« la prescription est-elle encore valable ? »). <i>wenn</i> serait une condition, le « si » de « s'il pleut » ; <i>dass</i> présenterait un fait certain, ce qui manque ici."
      },
      {
        q: "Complète la phrase.",
        tr: "La médecin a prescrit que le pansement soit refait tous les jours.",
        why: "<i><b>dass</b></i> rapporte le contenu de la prescription ; dans la subordonnée, le passif se termine par <i>gewechselt <b>wird</b></i> : le verbe conjugué va à la fin, après le participe."
      },
      {
        q: "Quelles phrases sont correctes ?",
        opts: [
          "In der Akte steht, dass Frau Lang nüchtern bleibt.",
          "In der Akte steht, dass Frau Lang bleibt nüchtern.",
          "Ich weiß nicht, ob die Anordnung noch gilt.",
          "Ich weiß nicht, ob gilt die Anordnung noch.",
          "Die Anordnung ist unklar, deshalb frage ich nach."
        ],
        why: "Après <i>dass</i> et <i>ob</i>, le verbe conjugué va à la fin : <i>nüchtern bleibt</i>, <i>noch gilt</i>. Après <i>deshalb</i>, le verbe vient tout de suite : <i>deshalb frage ich</i>."
      },
      {
        q: "Choisis le bon article défini pour chaque nom.",
        items: ["prescription", "indication médicale", "raison", "demande de précision", "dossier patient", "laboratoire"]
      },
      {
        q: "Associe chaque mot à son sens.",
        pairs: ["la prescription", "la demande de précision", "l'indication médicale", "demander des précisions"]
      },
      {
        q: "Remets les mots dans l'ordre.",
        tr: "Je ne suis pas sûr que la prescription soit encore valable.",
        why: "<i>Ich bin nicht sicher, ob die Anordnung noch gilt.</i> Après la virgule, <i>ob</i> ouvre la subordonnée et le verbe <i>gilt</i> va à la fin."
      },
      {
        q: "Traduis : « La prescription n'est pas claire, c'est pourquoi je redemande. »",
        why: "<i>Die Anordnung ist nicht eindeutig, deshalb frage ich noch einmal nach.</i> <i>unklar</i> ou <i>nicht klar</i> sont aussi acceptés, tout comme <i>darum</i> ou <i>deswegen</i> à la place de <i>deshalb</i>. Le « re- » de « redemander » devient <i>noch einmal</i> ; la particule <i>nach</i> va à la fin."
      },
      {
        q: "Une demande de précision.",
        setting: "Tu as un doute sur la prescription de Mme Lang et tu vas voir le médecin du service.",
        lines: [
          { tr: "Vous vouliez me parler ?" },
          { tr: "Réponds que tu as une demande de précision sur la prescription de Mme Lang.", answerTr: "Oui, j'ai une demande de précision sur la prescription de Mme Lang." },
          { tr: "Qu'est-ce qui n'est pas clair ?" },
          { tr: "Réponds que tu ne sais pas si elle doit rester à jeun aujourd'hui.", answerTr: "Je ne sais pas si elle doit rester à jeun aujourd'hui." },
          { tr: "Elle peut remanger. L'examen a été reporté." },
          { tr: "Remercie et demande de l'ajouter dans le dossier.", answerTr: "Merci. Pourriez-vous l'ajouter dans le dossier, s'il vous plaît ?" }
        ]
      },
      {
        tr: "Dans le dossier, il est écrit qu'elle doit rester à jeun aujourd'hui. Je ne suis pas sûr que ce soit encore valable.",
        why: "Dans <i>nüchtern</i>, le <b>ü</b> est bref (le « u » français, lèvres arrondies) et le <b>ch</b> après <b>ü</b> est [ç] ; dans <i>sicher</i>, le <b>s</b> initial est sonore, [z] ; dans <i>gilt</i>, le <b>g</b> reste dur, jamais comme dans « gilet »."
      },
      {
        tr: "Je préfère demander une fois de plus, car je ne veux pas faire d'erreur.",
        why: "Dans <i>lieber</i>, le <b>ie</b> est long ; dans <i>nach</i>, le <b>ch</b> après <b>a</b> est [x] ; dans <i>möchte</i>, le <b>ö</b> est bref et le <b>ch</b> est [ç] ; dans <i>Fehler</i>, le <b>e</b> est long et le <b>h</b> ne se prononce pas."
      }
    ]
  },
  "lesson:pfl-u08-l3": {
    theme: "Réunion d'équipe",
    title: "La réunion d'équipe",
    objectives: [
      "participer à une réunion d'équipe et prendre la parole",
      "utiliser les verbes à préposition fixe : sich kümmern um, sich erkundigen nach, warten auf, sprechen über",
      "demander de quoi on parle avec worum et worauf",
      "reprendre un sujet avec darum, darüber, darauf"
    ],
    theory: [
      {
        h: "Qui fait quoi",
        p: "Pendant la <strong>Teambesprechung</strong>, l'équipe se répartit les tâches, discute des cas difficiles (<em>Fallbesprechung</em>) et organise le <em>Dienstplan</em>, le planning des postes. La phrase qui revient le plus souvent est <em>Wer kümmert sich um ...?</em>, « qui s'occupe de... ? », et la réponse qui prend une tâche est <em>Ich kümmere mich darum</em> ou, plus simplement, <em>Das mache ich.</em> Pour prendre la parole sans couper : <em>Ich würde gern etwas zu Herrn Wolf sagen.</em>"
      },
      {
        h: "Verbes à préposition fixe",
        p: "Beaucoup de verbes allemands demandent une <strong>préposition fixe</strong>, qu'on apprend avec le verbe, comme un bloc : <em>sich kümmern <b>um</b></em> + accusatif, <em>sich erkundigen <b>nach</b></em> + datif, <em>warten <b>auf</b></em> + accusatif, <em>sprechen <b>über</b></em> + accusatif. La question se fait avec <em>wo(r)</em> + préposition : <em><b>Worauf</b> wartest du?</em> Et pour reprendre une chose déjà dite, on utilise <em>da(r)</em> + préposition : <em>Ich kümmere mich <b>darum</b>. <b>Darüber</b> sprechen wir am Ende.</em> Pour les personnes, en revanche, on garde la préposition avec le pronom : <em>Ich kümmere mich <b>um ihn</b>.</em>"
      },
      {
        contrast: "Le français a lui aussi des verbes à préposition, mais elles ne correspondent presque jamais : « s'occuper <b>de</b> » donne <em>sich kümmern <b>um</b></em>, « se renseigner <b>sur</b> » donne <em>sich erkundigen <b>nach</b></em>, « attendre » (sans préposition) donne <em>warten <b>auf</b></em>, « parler <b>de</b> » donne <em>sprechen <b>über</b></em>. Traduire la préposition française mène aux erreurs typiques : <em>warten für</em>, <em>sich kümmern von</em>, <em>sprechen von</em> (qui existe, mais veut plutôt dire « mentionner, évoquer »). Et là où le français reprend avec « en » ou « y » (« je m'en occupe », « on en parle à la fin », « j'y pense »), l'allemand construit une forme en <em>da-</em> : <em>Ich kümmere mich <b>darum</b>. Wir sprechen am Ende <b>darüber</b>. Ich denke <b>daran</b>.</em> Pour une personne, pas de <em>da-</em> : « je m'occupe de lui » donne <em>um ihn</em>, jamais <em>darum</em>."
      },
      {
        trap: "<em>sich erkundigen</em> et <em>sich kümmern</em> sont pronominaux, comme « se renseigner » et « s'occuper » : sans <em>sich</em>, la phrase est fausse (<em>Ich kümmere <b>mich</b> um ihn</em>, pas <em>Ich kümmere um ihn</em>). <em>erkundigen</em> a le préfixe inséparable <em>er-</em>, donc pas de <em>ge-</em> au participe : <em>hat sich erkundigt</em>. Et quand un proche demande le résultat d'un examen, la réponse n'est pas le résultat : en réunion, on décide qui prévient le médecin, parce que l'entretien sur le diagnostic lui revient."
      },
      {
        tip: "Apprends les verbes avec leur préposition et leur cas déjà intégrés dans une phrase du service : <em>Ich kümmere mich um Zimmer acht. Ich warte auf den Befund. Wir sprechen über den Dienstplan.</em> Trois phrases comme celles-ci, répétées à voix haute, valent mieux qu'une liste de prépositions à apprendre par cœur."
      }
    ],
    grammar: {
      title: "Verbes à préposition fixe",
      note: "Le verbe s'apprend avec sa <b>préposition</b> et son <b>cas</b>. Question : <b>wo(r)</b> + préposition. Reprise d'une chose : <b>da(r)</b> + préposition. Pour les personnes : préposition + pronom.",
      table: {
        head: ["verbe", "cas", "question", "reprise"],
        rows: [
          ["sich kümmern um", "accusatif", "Worum kümmerst du dich?", "Ich kümmere mich darum."],
          ["sich erkundigen nach", "datif", "Wonach hat sie sich erkundigt?", "Sie hat sich danach erkundigt."],
          ["warten auf", "accusatif", "Worauf wartest du?", "Ich warte darauf."],
          ["sprechen über", "accusatif", "Worüber sprechen wir?", "Darüber sprechen wir am Ende."]
        ]
      },
      examples: [
        { tr: "Qui s'occupe de la chambre huit aujourd'hui ?", note: "sich kümmern um + accusatif" },
        { tr: "Je m'occupe de la nouvelle admission.", note: "um die Neuaufnahme : accusatif féminin" },
        { tr: "Aujourd'hui, nous parlons du planning.", note: "sprechen über + accusatif : über den Dienstplan" },
        { tr: "La fille s'est renseignée sur le résultat.", note: "sich erkundigen nach + datif : nach dem Befund ; erkundigt sans ge-" },
        { tr: "J'attends encore le courrier du médecin.", note: "warten auf + accusatif : auf den Arztbrief" },
        { tr: "On en parle à la fin.", note: "darüber reprend un sujet déjà nommé, comme le « en » français" }
      ]
    },
    vocab: [
      "la réunion d'équipe",
      "le planning (des postes)",
      "s'occuper de",
      "se renseigner sur, demander des nouvelles de",
      "parler de",
      "attendre (quelque chose ou quelqu'un)",
      "se plaindre de",
      "la nouvelle admission, l'entrant",
      "la discussion de cas",
      "la proposition",
      "d'accord",
      "la cadre de santé (du service)"
    ],
    dialogue: [
      "Aujourd'hui, nous parlons de deux choses : le planning et M. Wolf.",
      "J'aimerais d'abord dire quelque chose sur M. Wolf.",
      "Je t'écoute.",
      "Hier, sa fille s'est renseignée sur le résultat. Je lui ai dit que c'est le médecin qui en parle avec elle.",
      "Je m'occupe de faire en sorte que le médecin l'appelle aujourd'hui.",
      "Bien. Et qui s'occupe de l'entrée de cet après-midi ?",
      "Je m'en charge. Mais j'attends encore le courrier du médecin.",
      "D'accord. Le planning, on en parle à la fin."
    ],
    culture: {
      title: "Côté allemand : la Stationsleitung et le Dienstplan",
      text: "<p>La <i>Stationsleitung</i> correspond à peu près à la cadre de santé d'un service français : elle organise le personnel, prépare le <i>Dienstplan</i> et anime en général la réunion d'équipe. Le planning est publié à l'avance, et les souhaits de repos (<i>Wunschfrei</i>) s'inscrivent avant une date fixée par le service.</p><p>En réunion, les collègues se tutoient souvent (<i>du</i>), alors qu'avec la direction et les médecins beaucoup de services restent au vouvoiement (<i>Sie</i>), un peu comme en France. Si tu n'es pas sûre, écoute comment les autres s'adressent les uns aux autres, ou demande : <i>Duzen wir uns?</i></p>"
    },
    exercises: [
      {
        q: "Complète : « Ich kümmere mich ___ die Neuaufnahme. »",
        opts: ["um", "für", "auf"],
        why: "<i>sich kümmern</i> demande toujours <b>um</b> + accusatif. <i>für</i> calque un « pour » qui n'existe pas ici ; <i>auf</i> appartient à <i>warten auf</i>."
      },
      {
        tr: "Le présent de sich kümmern, à toutes les personnes.",
        why: "<i>Kümmere mich, kümmerst dich, kümmert sich, kümmern uns, kümmert euch, kümmern sich</i> : le pronom réfléchi change avec la personne, comme « me, te, se, nous, vous, se ». À la première personne du singulier, le <b>e</b> devant <b>r</b> reste : <i>kümmere</i>."
      },
      {
        q: "Complète : « Wir warten noch ___ den Befund. »",
        hint: "préposition de warten",
        why: "<b>auf</b> : <i>warten auf</i> + accusatif. En français, « attendre » n'a pas de préposition, c'est pourquoi on l'oublie facilement ou on met <i>für</i>."
      },
      {
        q: "Complète la phrase.",
        tr: "La fille s'est renseignée sur le résultat.",
        why: "<i>sich erkundigen <b>nach</b></i> + datif : <i>nach dem Befund</i>. Le participe <i><b>erkundigt</b></i> n'a pas de <i>ge-</i>, parce que <i>er-</i> est un préfixe inséparable."
      },
      {
        q: "Quelles phrases sont correctes ?",
        opts: [
          "Wer kümmert sich um Zimmer acht?",
          "Wer kümmert sich für Zimmer acht?",
          "Wir sprechen über den Dienstplan.",
          "Er hat sich nach seinem Befund erkundigt.",
          "Wir warten noch für die Laborwerte."
        ],
        why: "Les prépositions fixes sont <i>kümmern <b>um</b></i>, <i>sprechen <b>über</b></i>, <i>erkundigen <b>nach</b></i>, <i>warten <b>auf</b></i>. <i>für</i> ne va avec aucun de ces verbes."
      },
      {
        q: "Choisis le bon article défini pour chaque nom.",
        items: ["réunion d'équipe", "planning", "nouvelle admission", "discussion de cas", "proposition", "cadre de santé"]
      },
      {
        q: "Associe chaque verbe à son sens.",
        pairs: ["s'occuper de", "se renseigner sur", "attendre", "parler de"]
      },
      {
        q: "Remets les mots dans l'ordre.",
        tr: "Qui s'occupe de la nouvelle admission ?",
        why: "<i>Wer kümmert sich um die Neuaufnahme?</i> <i>Wer</i> est le sujet, le verbe suit tout de suite, puis le réfléchi <i>sich</i> et enfin la préposition avec son complément."
      },
      {
        q: "Traduis : « Demain, nous parlons du planning. »",
        why: "<i>Morgen sprechen wir über den Dienstplan</i> ou <i>Wir sprechen morgen über den Dienstplan</i>. « parler de » donne <i>sprechen über</i> + accusatif ; <i>reden über</i> est aussi accepté."
      },
      {
        q: "En réunion d'équipe.",
        setting: "La cadre de santé répartit les tâches. Tu t'occupes de M. Wolf.",
        lines: [
          { tr: "Qui s'occupe de M. Wolf aujourd'hui ?" },
          { tr: "Réponds que tu t'en occupes.", answerTr: "Je m'en occupe." },
          { tr: "Quelqu'un a demandé de ses nouvelles ?" },
          { tr: "Réponds que sa fille a demandé de ses nouvelles hier.", answerTr: "Oui, sa fille a demandé de ses nouvelles hier." },
          { tr: "Qu'est-ce que tu attends encore ?" },
          { tr: "Réponds que tu attends encore le courrier du médecin.", answerTr: "J'attends encore le courrier du médecin." }
        ]
      },
      {
        tr: "La fille s'est renseignée sur le résultat.",
        why: "Dans <i>Tochter</i>, le <b>ch</b> après <b>o</b> est [x], un son qui n'existe pas en français, proche de la « jota » espagnole ; dans <i>erkundigt</i>, l'accent tombe sur <b>kun</b> et le <b>g</b> avant le <b>t</b> se prononce [ç] ; dans <i>Befund</i>, le <b>d</b> final se prononce [t]."
      },
      {
        tr: "Je m'occupe de la nouvelle admission.",
        why: "Dans <i>kümmere</i>, le <b>ü</b> est bref ; dans <i>Neuaufnahme</i>, il y a deux diphtongues, <b>eu</b> [ɔʏ] et <b>au</b> [aʊ], et l'accent tombe sur <b>Neu</b>. Attention : <b>eu</b> ne se lit jamais comme le « eu » de « feu »."
      }
    ]
  },
  "lesson:pfl-u08-l4": {
    theme: "Au téléphone",
    title: "Au téléphone : laboratoire, pharmacie, médecin traitant",
    objectives: [
      "se présenter au téléphone et dire de quel service on appelle",
      "demander poliment : hätte, könnten, wäre es möglich, würden",
      "faire répéter et faire épeler un nom",
      "répéter les données reçues pour les vérifier"
    ],
    theory: [
      {
        h: "Un appel du service",
        p: "Au téléphone, on commence par dire qui appelle et d'où : <em>Guten Tag, hier ist Station drei.</em> Ensuite, on dit pour qui on appelle (<em>Um Herrn Wolf, Zimmer fünf</em>) et ce qu'on veut. Celui qui répond donne en général le service et son nom de famille : <em>Labor, Schneider, guten Tag.</em> À la fin, on répète les données importantes : <em>Ich wiederhole: ...</em> Un résultat de laboratoire reçu par téléphone se note tout de suite, se répète pour le vérifier et, s'il est hors norme, se transmet au médecin."
      },
      {
        h: "Le Konjunktiv II de politesse",
        p: "Pour demander quelque chose poliment, l'allemand utilise le <strong>Konjunktiv II</strong>, l'équivalent du conditionnel. Quatre formules suffisent pour presque tous les appels : <em>Ich <b>hätte</b> eine Frage zu ...</em> (j'aurais une question), <em><b>Könnten</b> Sie mir ... durchgeben?</em> (pourriez-vous... ?), <em><b>Wäre</b> es möglich, ... zu schicken?</em> (serait-il possible de... ?), <em><b>Würden</b> Sie mich bitte zurückrufen?</em> (me rappelleriez-vous ?). Pour un souhait : <em>Ich <b>würde</b> gern mit Doktor Becker sprechen.</em> Après <em>Wäre es möglich</em>, l'infinitif avec <em>zu</em> va à la fin : <em>den Befund heute noch <b>zu schicken</b></em>."
      },
      {
        contrast: "Le conditionnel de politesse, tu le connais déjà : « j'aurais une question », « pourriez-vous », « serait-il possible de ». Deux différences quand même. D'abord, le français conjugue chaque verbe au conditionnel (« me rappelleriez-vous ? », « m'enverriez-vous le résultat ? ») ; l'allemand n'a de formes courtes courantes que pour quelques verbes fréquents (<em>hätte, wäre, könnte, würde</em>) et, pour les autres, il passe par <em>würde</em> + infinitif : <em>Würden Sie mich zurückrufen?</em> Ensuite, au téléphone, l'allemand sans conditionnel sonne vite sec. « Vous pouvez me donner les valeurs ? » reste aimable en français, mais <em>Sie können mir die Werte durchgeben</em> sonne en allemand comme une permission que tu accordes, et <em>Geben Sie mir die Werte!</em> comme un ordre. La version polie passe presque toujours par <em>könnten</em> ou <em>würden</em>."
      },
      {
        trap: "Ne confonds pas <em>hätte</em> (j'aurais) et <em>hatte</em> (j'avais) : la différence tient au seul Umlaut, et au téléphone elle s'entend dans la voyelle, [ɛ] contre [a], comme entre « è » et « a ». Même chose pour <em>wäre</em> (serait) et <em>war</em> (était). <em>durchgeben</em> est séparable : <em>Könnten Sie mir die Werte <b>durchgeben</b>?</em>, mais <em>Das Labor <b>gibt</b> die Werte <b>durch</b>.</em>"
      },
      {
        tip: "Au téléphone, on épelle les noms avec l'alphabet téléphonique allemand, pas le français (« A comme Anatole ») : <em>W wie Wilhelm, O wie Otto</em>. Et on dit les chiffres un par un : <em>zwei, drei, vier, fünf</em>, pas <em>dreiundzwanzig, fünfundvierzig</em>, parce que l'allemand dit les unités avant les dizaines (<em>drei-und-zwanzig</em>, « trois et vingt ») et c'est là qu'on se trompe. Quand tu reçois une donnée, répète-la toujours : <em>Ich wiederhole: ...</em>"
      }
    ],
    grammar: {
      title: "Formules de politesse au téléphone",
      note: "<b>hätte, wäre, könnte</b> sont des formes propres du Konjunktiv II. Pour presque tous les autres verbes : <b>würde</b> + infinitif à la fin. Après <b>Wäre es möglich</b> : infinitif avec <b>zu</b> à la fin.",
      table: {
        head: ["formule", "sens", "exemple"],
        rows: [
          ["Ich hätte ...", "j'aurais, c'est-à-dire : j'ai", "Ich hätte eine Frage zu einem Medikament."],
          ["Könnten Sie ...?", "pourriez-vous... ?", "Könnten Sie mir die Laborwerte durchgeben?"],
          ["Wäre es möglich, ... zu ...?", "serait-il possible de... ?", "Wäre es möglich, den Befund heute noch zu schicken?"],
          ["Würden Sie ...?", "+ infinitif : conditionnel des autres verbes", "Würden Sie mich bitte zurückrufen?"],
          ["Ich würde gern ...", "j'aimerais, je voudrais", "Ich würde gern mit Doktor Becker sprechen."]
        ]
      },
      examples: [
        { tr: "J'aurais une question sur un médicament.", note: "hätte : forme polie de haben" },
        { tr: "Pourriez-vous me transmettre les résultats de laboratoire de M. Wolf ?", note: "könnten + durchgeben à la fin" },
        { tr: "Serait-il possible d'envoyer le compte rendu encore aujourd'hui ?", note: "Wäre es möglich + infinitif avec zu à la fin" },
        { tr: "Pourriez-vous me rappeler, s'il vous plaît ?", note: "würden + infinitif : zurückrufen à la fin" },
        { tr: "Je voudrais parler au docteur Becker.", note: "würde gern + infinitif" },
        { tr: "Je répète : chambre cinq, M. Wolf.", note: "répéter les données pour les vérifier" }
      ]
    },
    vocab: [
      "le laboratoire",
      "la pharmacie",
      "le médecin traitant, le généraliste",
      "le résultat de laboratoire",
      "le numéro de poste",
      "le rappel (téléphonique)",
      "transmettre (par téléphone)",
      "rappeler",
      "joignable",
      "épeler",
      "passer (un appel), mettre en relation",
      "livrer"
    ],
    dialogue: [
      "Laboratoire, Schneider, bonjour.",
      "Bonjour, ici le service trois. J'aurais une question sur une NFS.",
      "Pour quel patient ?",
      "M. Wolf, chambre cinq. Pourriez-vous me dire si les résultats sont déjà prêts ?",
      "Les résultats sont presque prêts. Je vous les envoie dans dix minutes.",
      "Serait-il possible de m'appeler si une valeur est hors norme ?",
      "Oui, bien sûr. Quel est votre numéro de poste ?",
      "Deux, trois, quatre, cinq. Je répète : vous m'appelez si une valeur est hors norme. Merci beaucoup."
    ],
    culture: {
      title: "Côté allemand : pharmacie de l'hôpital et médecin traitant",
      text: "<p>Dans les hôpitaux allemands, les médicaments viennent en général de la <i>Krankenhausapotheke</i>, la pharmacie à usage intérieur, ou d'une pharmacie extérieure sous contrat. Les commandes suivent des horaires fixes ; pour un médicament qui manque, on téléphone et on demande si une livraison exceptionnelle est possible.</p><p>Le <i>Hausarzt</i> est le médecin traitant, souvent un généraliste. Le service l'appelle par exemple pour savoir quels médicaments le patient prenait à la maison ou pour préparer la sortie. Ce qu'on peut dire au téléphone dépend de la protection des données : avant de donner des informations sur un patient, vérifie qui est au bout du fil.</p>"
    },
    exercises: [
      {
        q: "Tu appelles le laboratoire et tu veux les résultats d'un patient. Quelle phrase est polie ?",
        opts: ["Geben Sie mir die Werte!", "Könnten Sie mir bitte die Werte durchgeben?", "Sie können mir die Werte durchgeben."],
        why: "<b>Könnten Sie ...?</b> au Konjunktiv II est la demande polie. L'impératif sonne comme un ordre, et <i>Sie können</i>, si naturel en français (« vous pouvez me... »), sonne ici comme si c'était toi qui donnais la permission."
      },
      {
        tr: "Le Konjunktiv II de können, à toutes les personnes.",
        why: "<i>Könnte, könntest, könnte, könnten, könntet, könnten</i> : le radical prend l'Umlaut (<b>ö</b>) et les terminaisons sont celles du Präteritum. Au téléphone, la forme la plus utile est <i>Könnten Sie ...?</i>"
      },
      {
        q: "Complète : « Ich ___ eine Frage zu einem Medikament. »",
        hint: "Konjunktiv II de haben",
        why: "<b>hätte</b> : forme polie de <i>haben</i>, « j'aurais ». Attention à l'Umlaut : <i>hatte</i> sans Umlaut est le Präteritum, « j'avais »."
      },
      {
        q: "Complète la phrase.",
        tr: "Pourriez-vous me rappeler, s'il vous plaît ?",
        why: "<i><b>Würden</b> Sie mich bitte <b>zurückrufen</b>?</i> : Konjunktiv II avec <i>würden</i> et l'infinitif à la fin. <i>Könnten</i> est aussi accepté. À l'infinitif, <i>zurückrufen</i> reste en un seul mot."
      },
      {
        q: "Quelles phrases sont correctes ?",
        opts: [
          "Ich hätte eine Frage zur Lieferung.",
          "Ich habe gern eine Frage.",
          "Wäre es möglich, den Befund heute noch zu schicken?",
          "Ich würde gern mit Doktor Becker sprechen.",
          "Ich würde gern mit Doktor Becker zu sprechen."
        ],
        why: "<i>hätte</i> est la forme polie correcte ; <i>gern</i> va avec <i>würde</i>, pas avec <i>habe eine Frage</i>. Après <i>Wäre es möglich</i>, il faut <i>zu</i> (comme « de » dans « serait-il possible de ») ; après <i>würde gern</i>, l'infinitif s'emploie sans <i>zu</i>."
      },
      {
        q: "Choisis le bon article défini pour chaque nom.",
        items: ["laboratoire", "pharmacie", "médecin traitant", "résultat de laboratoire", "numéro de poste", "rappel"]
      },
      {
        q: "Associe chaque verbe à son sens.",
        pairs: ["transmettre (par téléphone)", "rappeler", "épeler", "passer un appel"]
      },
      {
        q: "Remets les mots dans l'ordre.",
        tr: "J'aurais une question sur une NFS.",
        why: "<i>Ich hätte eine Frage zu einem Blutbild.</i> Le verbe <i>hätte</i> en deuxième position ; « sur » se dit ici <i>zu</i> + datif : <i>zu einem Blutbild</i>. <i>Ich hätte zu einem Blutbild eine Frage</i> est aussi accepté."
      },
      {
        q: "Traduis : « Pourriez-vous me rappeler dans dix minutes ? »",
        why: "<i>Könnten Sie mich in zehn Minuten zurückrufen?</i> <i>Würden Sie mich ... zurückrufen?</i> est aussi accepté, avec ou sans <i>bitte</i>. « dans dix minutes » se dit <i>in zehn Minuten</i>, pas <i>nach zehn Minuten</i>."
      },
      {
        q: "Un appel à la pharmacie.",
        setting: "Un médicament pour la chambre cinq n'est pas arrivé. Tu appelles la pharmacie de l'hôpital.",
        lines: [
          { tr: "Pharmacie, bonjour." },
          { tr: "Dis de quel service tu appelles et que tu aurais une question sur une livraison.", answerTr: "Bonjour, ici le service trois. J'aurais une question sur une livraison." },
          { tr: "De quoi s'agit-il exactement ?" },
          { tr: "Explique qu'un médicament pour la chambre cinq n'est pas encore arrivé et demande s'il est possible de le livrer aujourd'hui.", answerTr: "Un médicament pour la chambre cinq n'est pas encore arrivé. Serait-il possible de le livrer encore aujourd'hui ?" },
          { tr: "Je vérifie et je vous rappelle." },
          { tr: "Remercie et donne ton numéro de poste.", answerTr: "Merci. Mon numéro de poste est deux, trois, quatre, cinq." }
        ]
      },
      {
        tr: "Serait-il possible de m'appeler si une valeur est hors norme ?",
        why: "Dans <i>wäre</i>, le <b>ä</b> est long, [ɛː], comme le « ê » de « fête » ; dans <i>möglich</i>, le <b>ö</b> est long et le <b>ch</b> final est [ç] ; dans <i>auffällig</i>, l'accent tombe sur <b>auf</b>."
      },
      {
        tr: "J'aurais une question sur un médicament.",
        why: "Dans <i>hätte</i>, le <b>ä</b> est bref et ne se distingue de <i>hatte</i> que par la voyelle ; dans <i>Medikament</i>, l'accent tombe sur la dernière syllabe, <b>ment</b>, mais le <b>ent</b> se prononce [ɛnt], pas comme le « ent » nasal français."
      }
    ]
  },
  "lesson:pfl-u08-test": {
    theme: "Évaluation",
    title: "Test : Visite, prescriptions et équipe",
    objectives: [
      "vérifier le passif de la visite, dass et ob dans les prescriptions, les verbes à préposition et le Konjunktiv II au téléphone"
    ],
    theory: [
      {
        p: "Onze questions sur toute l'unité. Le test est réussi à 70 %. Les patients et les situations sont inventés et ne servent que d'exemple : la façon d'exécuter et de documenter les prescriptions est fixée par les règles de l'établissement. Une prescription pas claire se clarifie toujours avec le médecin."
      }
    ],
    exercises: [
      {
        q: "Une prescription te semble inhabituelle. Que fais-tu ?",
        opts: ["Ich führe sie trotzdem aus.", "Ich frage noch einmal bei der Ärztin nach.", "Ich ändere sie selbst."],
        why: "Une prescription inhabituelle se clarifie avec le médecin avant de l'exécuter : <b>Ich frage noch einmal bei der Ärztin nach</b>. L'exécuter quand même ou la modifier soi-même ne sont pas des voies sûres."
      },
      {
        q: "Complète : « Der Verband ___ morgen gewechselt. »",
        hint: "passif au présent",
        why: "<b>wird</b> : passif présent, <i>werden</i> conjugué + participe <i>gewechselt</i> à la fin. Pas <i>ist</i> : avec <i>sein</i>, ce serait un état, pas un soin à faire."
      },
      {
        tr: "Le Konjunktiv II de haben, à toutes les personnes.",
        why: "<i>Hätte, hättest, hätte, hätten, hättet, hätten</i> : comme le Präteritum <i>hatte</i>, mais avec l'Umlaut <b>ä</b>."
      },
      {
        q: "Associe chaque mot à son sens.",
        pairs: ["la visite", "la demande de précision", "le planning", "le numéro de poste"]
      },
      {
        q: "Quelles phrases sont correctes ?",
        opts: [
          "Die Therapie wird fortgesetzt.",
          "Ich warte noch für den Befund.",
          "Könnten Sie mich bitte zurückrufen?",
          "Ich bin nicht sicher, ob die Anordnung gilt noch.",
          "Die Tochter hat sich nach dem Befund erkundigt."
        ],
        why: "<i>warten</i> demande <i>auf</i>, pas <i>für</i>. Après <i>ob</i>, le verbe va à la fin : <i>ob die Anordnung noch gilt</i>."
      },
      {
        q: "Complète la phrase.",
        tr: "Dans le dossier, il est écrit qu'une NFS est à faire aujourd'hui.",
        why: "<i><b>dass</b></i> rapporte ce qui est écrit ; dans la subordonnée, le passif se termine par <i>abgenommen <b>wird</b></i>."
      },
      {
        q: "Remets les mots dans l'ordre.",
        tr: "Nous attendons encore les résultats de laboratoire.",
        why: "<i>Wir warten noch auf die Laborwerte.</i> <i>warten auf</i> + accusatif ; <i>noch</i> vient avant la préposition."
      },
      {
        q: "Choisis le bon article défini pour chaque nom.",
        items: ["visite", "prescription", "résultat d'examen", "NFS", "planning", "laboratoire"]
      },
      {
        q: "Traduis : « Demain, le pansement est refait. »",
        why: "<i>Morgen wird der Verband gewechselt</i> ou <i>Der Verband wird morgen gewechselt</i> : passif présent avec <i>wird</i> et le participe à la fin. Le « est » du passif français ne devient pas <i>ist</i>."
      },
      {
        tr: "Le traitement est poursuivi comme jusqu'à présent.",
        why: "Dans <i>Therapie</i>, l'accent tombe sur <b>pie</b> ; dans <i>bisher</i>, l'accent tombe sur <b>her</b> ; dans <i>fortgesetzt</i>, l'accent tombe sur <b>fort</b>."
      },
      {
        tr: "Serait-il possible de m'appeler si une valeur est hors norme ?",
        why: "Dans <i>wäre</i>, le <b>ä</b> est long ; dans <i>anzurufen</i>, le <i>zu</i> se glisse entre le préfixe <i>an</i> et le verbe ; dans <i>Wert</i>, le <b>w</b> se prononce [v] et le <b>e</b> est long."
      }
    ]
  }
});
