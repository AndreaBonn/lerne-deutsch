/* ============================================================
   Textes dans la langue de l'élève (fr) pour data/core/pfl-09.js, unité pfl-u09.
   Les clés renvoient aux id de la couche neutre ; les tableaux se
   joignent par index, leur longueur doit donc correspondre à core.
   Vérifié par scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("fr", {
  "unit:pfl-u09": {
    title: "Hygiène, plaies et sortie",
    grammarNote: "l'impératif de politesse pour les mesures d'hygiène · le passif au présent et au Präteritum · la déclinaison de l'adjectif pour décrire une plaie · le Futur I pour expliquer ce qui se passera après la sortie · les verbes modaux pour les tâches, les autorisations et les obligations"
  },
  "lesson:pfl-u09-l1": {
    theme: "Hygiène et isolement",
    title: "Hygiène et isolement",
    objectives: [
      "expliquer à un patient et à ses proches les mesures d'hygiène avec l'impératif de politesse",
      "dire ce qui est fait avec le passif : werden desinfiziert, wurde gefunden",
      "expliquer un isolement avec des mots simples, sans inquiéter",
      "distinguer Infektion et Ansteckung, Keim et Erreger"
    ],
    theory: [
      {
        h: "Expliquer une mesure d'hygiène",
        p: "Avec les patients et les visiteurs, on explique les mesures d'hygiène avec l'<strong>impératif de politesse</strong>, toujours avec <em>bitte</em> : <em>Desinfizieren Sie sich bitte die Hände. Ziehen Sie bitte einen Schutzkittel an.</em> Le verbe se place en premier, <em>Sie</em> juste après ; le préfixe séparable va à la fin (<em>ziehen ... an</em>). Quand ce qui compte est ce qu'on fait et non qui le fait, on emploie le <strong>passif</strong> : <em>Die Hände <b>werden</b> desinfiziert. Das Zimmer <b>wird</b> jeden Tag gereinigt.</em> Pour un fait déjà passé, le passif au Präteritum : <em>Bei Herrn Brandt <b>wurde</b> ein Keim gefunden.</em>"
      },
      {
        h: "Isolement : ce qu'on dit au patient",
        p: "Un patient isolé a souvent peur ou se sent traité comme un danger. Explique la raison avec des mots simples et mets au centre la protection des autres : <em>Wir wollen verhindern, dass sich andere Patienten anstecken.</em> Ce que le germe signifie pour sa santé, c'est le médecin qui l'explique : <em>Die Ärztin bespricht mit Ihnen, was das für Sie bedeutet.</em> Les mesures concrètes (surblouse, gants, visites, sorties de la chambre) sont fixées par le plan d'hygiène de l'établissement ; les exemples de cette leçon servent seulement à la langue."
      },
      {
        contrast: "En français, « infection » marche avec le médecin comme avec le patient, et « contagion » désigne le passage d'une personne à l'autre. En allemand, <em>die Infektion</em> est compris aussi par les patients, mais le mot de tous les jours pour ce passage est <em>die Ansteckung</em>, avec le verbe <em>sich anstecken</em> et l'adjectif <em>ansteckend</em> (« contagieux ») : <em>Ist das ansteckend?</em> est la question que tu entendras le plus souvent. Attention aux sigles. En France, on parle de BMR (bactérie multirésistante) et de SARM ; l'allemand reprend le sigle anglais <em>MRSA</em>, prononcé lettre par lettre à l'allemande (<em>em-er-es-a</em>), et beaucoup d'établissements emploient le sigle plus large <em>MRE</em>, <em>multiresistente Erreger</em>, qui correspond à peu près à vos BMR. Dire « SARM » dans un service allemand, personne ne te comprendra. Le patient, lui, dit souvent <em>Krankenhauskeim</em> : ce n'est pas un terme précis, à peu près « le microbe de l'hôpital », mais c'est son mot, et il faut le comprendre."
      },
      {
        trap: "<em>desinfizieren</em> se termine en <em>-ieren</em>, donc son participe ne prend pas <em>ge-</em> : <em>Die Hände werden desinfiziert</em>, jamais <em>gedesinfiziert</em>. Avec les parties du corps, l'allemand met le pronom réfléchi au datif, comme le français « se désinfecter les mains » : <em>Desinfizieren Sie <b>sich</b> die Hände</em>. Et <em>der Schutzkittel</em>, c'est la surblouse, pas un manteau (<em>der Mantel</em>) ni la blouse de travail (<em>die Dienstkleidung</em>)."
      },
      {
        tip: "Quand tu expliques une mesure, montre en parlant : désigne le distributeur, prends une surblouse en main. Le mot reste mieux si le patient le relie à un objet, et tu n'as pas à chercher un synonyme s'il ne te comprend pas."
      }
    ],
    grammar: {
      title: "Impératif de politesse et passif",
      note: "Impératif : <b>verbe + Sie</b> (+ bitte), le préfixe séparable à la fin. Passif présent : <b>wird / werden</b> + participe ; passif au Präteritum : <b>wurde / wurden</b> + participe.",
      table: {
        head: ["forme", "structure", "exemple"],
        rows: [
          ["impératif de politesse", "verbe + Sie + bitte", "Desinfizieren Sie sich bitte die Hände."],
          ["impératif, verbe séparable", "verbe + Sie ... préfixe", "Ziehen Sie bitte einen Schutzkittel an."],
          ["passif présent", "wird / werden + participe", "Die Hände werden desinfiziert."],
          ["passif Präteritum", "wurde / wurden + participe", "Ein Erreger wurde gefunden."]
        ]
      },
      examples: [
        { tr: "Désinfectez-vous les mains, s'il vous plaît.", note: "impératif de politesse, réfléchi avec les parties du corps : sich die Hände" },
        { tr: "Avant d'entrer, mettez une surblouse, s'il vous plaît.", note: "anziehen est séparable : an va à la fin" },
        { tr: "Avant la visite, présentez-vous en salle de soins, s'il vous plaît.", note: "sich melden : réfléchi, aussi à l'impératif" },
        { tr: "Les mains sont désinfectées avant et après chaque contact avec le patient.", note: "passif présent au pluriel : werden + desinfiziert, sans ge-" },
        { tr: "On a trouvé un agent pathogène multirésistant chez M. Brandt.", note: "passif au Präteritum : wurde + gefunden ; le français préfère « on », l'allemand le passif" },
        { tr: "La chambre est nettoyée tous les jours.", note: "passif présent : wird + gereinigt" }
      ]
    },
    vocab: [
      "l'hygiène",
      "l'infection (aussi terme technique)",
      "la contagion (mot de tous les jours)",
      "la désinfection des mains",
      "désinfecter",
      "l'isolement",
      "isoler",
      "le germe",
      "l'agent pathogène",
      "la surblouse",
      "le gant",
      "transmettre"
    ],
    dialogue: [
      "Bonjour, monsieur Brandt. Je dois vous expliquer quelque chose. On a trouvé chez vous un germe contre lequel beaucoup d'antibiotiques ne marchent pas.",
      "C'est dangereux ?",
      "La médecin vous expliquera ce que cela veut dire pour vous. Nous, nous voulons surtout éviter que d'autres patients soient contaminés.",
      "C'est pour ça, la chambre seule ?",
      "Exactement. Pendant un certain temps, vous serez isolé. Les personnes qui viennent vous voir mettent une surblouse et des gants.",
      "Et ma femme ? Elle veut venir me voir demain.",
      "Qu'elle se présente d'abord en salle de soins, s'il vous plaît : on lui expliquera tout là-bas.",
      "Et moi, qu'est-ce que je dois faire ?",
      "Désinfectez-vous les mains, s'il vous plaît, et prévenez-nous avant de sortir de la chambre."
    ],
    culture: {
      title: "Côté allemand : le plan d'hygiène",
      text: "<p>En Allemagne, chaque hôpital et chaque établissement de soins a un <i>Hygieneplan</i>, le plan d'hygiène, qui fixe ce qu'on fait, quand et avec quoi. Les recommandations nationales viennent de la KRINKO, la commission d'hygiène hospitalière rattachée au <i>Robert Koch-Institut</i>, un rôle qui rappelle celui des recommandations nationales et des équipes opérationnelles d'hygiène en France. Dans les grands établissements, il y a une <i>Hygienefachkraft</i>, une infirmière ou un infirmier formé spécialement à l'hygiène : c'est la personne à qui demander quand une règle n'est pas claire.</p><p>Si tu viens d'un autre pays, tu retrouveras souvent des mesures proches de celles que tu connais, mais les noms et les détails changent d'un établissement à l'autre : le plan d'hygiène du service compte plus que ce que tu as appris ailleurs.</p>"
    },
    exercises: [
      {
        q: "Tu demandes poliment à un visiteur de se désinfecter les mains. Quelle phrase est correcte ?",
        opts: [
          "Desinfizieren Sie sich bitte die Hände.",
          "Sie desinfizieren bitte sich die Hände.",
          "Desinfiziert Sie sich bitte die Hände."
        ],
        why: "À l'impératif de politesse, le verbe vient en premier et a la forme de l'infinitif : <b>Desinfizieren Sie</b>. <i>Desinfiziert</i> est la forme de <i>ihr</i> et ne va pas avec <i>Sie</i> ; dans <i>Sie desinfizieren bitte sich</i>, le pronom <i>sich</i> est mal placé (il vient juste après le verbe), et c'est de toute façon une phrase affirmative, pas l'impératif demandé."
      },
      {
        tr: "Le présent de desinfizieren, à toutes les personnes.",
        why: "<i>Desinfiziere, desinfizierst, desinfiziert, desinfizieren, desinfiziert, desinfizieren</i> : verbe régulier en <i>-ieren</i>, l'accent reste toujours sur <b>zie</b>."
      },
      {
        q: "Complète : « Die Hände ___ vor jedem Patientenkontakt desinfiziert. »",
        hint: "passif présent, pluriel",
        why: "<b>werden</b> : le sujet <i>die Hände</i> est au pluriel, donc <i>werden</i> + participe <i>desinfiziert</i> à la fin."
      },
      {
        q: "Complète la phrase.",
        tr: "On a trouvé un agent pathogène multirésistant chez M. Brandt.",
        why: "<i>Bei Herrn Brandt <b>wurde</b> ein multiresistenter Erreger <b>gefunden</b></i> : passif au Präteritum, <i>wurde</i> en deuxième position et le participe à la fin. Dans les comptes rendus, on lit aussi <i>nachgewiesen</i>, « mis en évidence »."
      },
      {
        q: "Quelles phrases peux-tu dire à un visiteur ?",
        opts: [
          "Ziehen Sie bitte einen Schutzkittel an.",
          "Ziehen Sie bitte an einen Schutzkittel.",
          "Desinfizieren Sie sich bitte die Hände.",
          "Melden Sie sich bitte vorher im Stationszimmer.",
          "Desinfizierst du Sie bitte die Hände."
        ],
        why: "<i>anziehen</i> est séparable : le préfixe <i>an</i> va à la fin, pas devant le complément. <i>Desinfizierst du Sie</i> mélange le tutoiement et le vouvoiement : avec un visiteur, on dit <i>Desinfizieren Sie sich</i>."
      },
      {
        q: "Choisis le bon article défini pour chaque nom.",
        items: ["hygiène", "infection", "isolement", "germe", "agent pathogène", "surblouse"]
      },
      {
        q: "Associe chaque mot à son sens.",
        pairs: ["la désinfection des mains", "la surblouse", "le gant", "le germe"]
      },
      {
        q: "Remets les mots dans l'ordre.",
        tr: "Les germes sont souvent transmis par les mains.",
        why: "<i>Keime werden oft über die Hände übertragen.</i> Passif présent : <i>werden</i> en deuxième position, le participe <i>übertragen</i> à la fin. <i>übertragen</i> ne se sépare pas et ne prend pas <i>ge-</i>."
      },
      {
        q: "Traduis (à un visiteur) : « Désinfectez-vous les mains, s'il vous plaît. »",
        why: "<i>Desinfizieren Sie sich bitte die Hände</i> : le verbe en premier, <i>Sie</i>, le réfléchi <i>sich</i> et <i>bitte</i>. <i>Bitte desinfizieren Sie sich die Hände</i> ou <i>Desinfizieren Sie bitte Ihre Hände</i> conviennent aussi."
      },
      {
        q: "Expliquer l'isolement.",
        setting: "M. Brandt a été transféré dans une chambre seule et te pose des questions.",
        lines: [
          { tr: "Pourquoi est-ce que je suis seul dans une chambre ?" },
          { tr: "Réponds qu'on a trouvé un germe chez lui et que c'est pour cela qu'il est isolé.", answerTr: "On a trouvé un germe chez vous, c'est pour cela que vous êtes isolé." },
          { tr: "Ma fille veut venir me voir aujourd'hui." },
          { tr: "Réponds qu'elle doit d'abord se présenter en salle de soins.", answerTr: "Qu'elle se présente d'abord en salle de soins, s'il vous plaît." },
          { tr: "Qu'est-ce qu'elle doit mettre dans la chambre ?" },
          { tr: "Réponds : une surblouse et des gants.", answerTr: "Une surblouse et des gants." }
        ]
      },
      {
        tr: "Les personnes qui viennent vous voir mettent une surblouse et des gants.",
        why: "Dans <i>zieht</i>, le <b>z</b> se prononce [ts] et le <b>h</b> est muet ; dans <i>Schutzkittel</i>, l'accent tombe sur <b>Schutz</b> et <b>tz</b> se prononce [ts] ; dans <i>Handschuhe</i>, le <b>d</b> de <i>Hand</i> se prononce [t] et l'accent tombe sur <b>Hand</b>."
      },
      {
        tr: "Désinfectez-vous les mains, s'il vous plaît.",
        why: "Dans <i>Desinfizieren</i>, l'accent tombe sur <b>zie</b> ; dans <i>Sie</i> et <i>sich</i>, le <b>s</b> initial est sonore, [z], comme dans « zéro » ; dans <i>Hände</i>, le <b>ä</b> se prononce comme le « è » de « mère »."
      }
    ]
  },
  "lesson:pfl-u09-l2": {
    theme: "Décrire une plaie",
    title: "Plaies et réfection du pansement",
    objectives: [
      "décrire une plaie par sa couleur, sa forme, ses berges et ses écoulements",
      "décliner l'adjectif devant le nom : eine gerötete Wunde, der alte Verband",
      "distinguer l'adjectif après sein, sans terminaison, de l'adjectif devant le nom",
      "parler de la plaie avec le patient sans poser de diagnostic"
    ],
    theory: [
      {
        h: "Décrire, pas évaluer",
        p: "Pour décrire une plaie, ce qui compte, c'est ce qu'on voit, ce qu'on touche et ce qu'on mesure : où elle se trouve (<em>am Unterschenkel</em>), comment sont les berges (<em>der Wundrand ist leicht gerötet</em>), s'il y a un écoulement (<em>etwas Wundsekret</em>), comment est la peau autour (<em>warm, geschwollen</em>). Si quelque chose change, tu le décris et tu préviens : <em>Die Rötung ist größer geworden. Ich informiere die Ärztin.</em> La façon de traiter la plaie est fixée par le médecin et par le protocole de l'établissement ; cette leçon apprend seulement les mots pour la décrire."
      },
      {
        h: "L'adjectif : avec ou sans terminaison",
        p: "Après <em>sein</em>, l'adjectif reste invariable : <em>Die Wunde <b>ist</b> gerötet. Der Verband <b>war</b> feucht.</em> Devant le nom, il prend une terminaison. Après <em>der, die, das</em> au nominatif singulier, la terminaison est <b>-e</b> : <em>der alt<b>e</b> Verband, die klein<b>e</b> Wunde</em>. Après <em>ein, eine</em>, la terminaison montre le genre : <em>ein geschwollen<b>er</b> Knöchel, eine gerötet<b>e</b> Wunde, ein klein<b>es</b> Hämatom</em>. Les participes employés comme adjectifs (<em>gerötet, geschwollen</em>) suivent les mêmes règles."
      },
      {
        contrast: "En français, l'adjectif s'accorde toujours, même après « être » : « la plaie est rougie », « les berges sont gonflées ». L'allemand fait l'inverse : après <em>sein</em>, aucune terminaison (<em>Die Wunde ist gerötet</em>), et c'est seulement devant le nom que l'adjectif se décline. Côté vocabulaire, « inflammation » est en français le mot de tous les jours, et on a envie de dire <em>Inflammation</em>. Le mot existe, mais on le trouve surtout dans les textes médicaux ; dans le service, même entre collègues, on dit presque toujours <em>die Entzündung</em>, avec l'adjectif <em>entzündet</em> : <em>Die Wunde ist entzündet.</em> Le registre savant reste dans les mots en <em>-itis</em> (<em>Bronchitis, Arthritis</em>), là où le français dit « bronchite », « arthrite ». Pareil pour les signes : rougeur, gonflement, chaleur se disent avec des mots courants, <em>Rötung, Schwellung, Überwärmung</em>."
      },
      {
        trap: "« La plaie » se dit <em>die Wunde</em> ; <em>die Plage</em> existe, mais veut dire « le fléau, la corvée » : <em>Das ist eine Plage</em>, « c'est une vraie corvée ». Et attention au verbe : le pansement se change avec <em>wechseln</em> (<em>Der Verband wird gewechselt</em>), pas avec <em>ändern</em>, qui veut dire « modifier ». Le français « changer » couvre les deux sens, l'allemand non. <em>die Medikation</em>, enfin, désigne le traitement médicamenteux, jamais le pansement."
      },
      {
        tip: "Décris toujours la plaie dans le même ordre : localisation, taille, fond, berges, écoulement, peau autour. Avec un schéma fixe, tu n'oublies rien, et la personne qui lit ta description le lendemain peut la comparer avec la sienne."
      }
    ],
    grammar: {
      title: "L'adjectif dans la description",
      note: "Après <b>sein</b> : pas de terminaison (<i>Die Wunde ist gerötet</i>). Devant le nom, au nominatif : après <b>der/die/das</b> → <b>-e</b> ; après <b>ein/eine</b> → <b>-er</b> (masculin), <b>-e</b> (féminin), <b>-es</b> (neutre).",
      table: {
        head: ["position", "masculin", "féminin", "neutre"],
        rows: [
          ["après sein", "Der Verband ist feucht.", "Die Wunde ist gerötet.", "Das Bein ist geschwollen."],
          ["après der / die / das", "der feuchte Verband", "die gerötete Wunde", "das geschwollene Bein"],
          ["après ein / eine", "ein feuchter Verband", "eine gerötete Wunde", "ein geschwollenes Bein"]
        ]
      },
      examples: [
        { tr: "La plaie est rouge et gonflée.", note: "après ist : gerötet et geschwollen sans terminaison" },
        { tr: "Sur la jambe, il y a une petite plaie rougie.", note: "eine + féminin : kleine, gerötete" },
        { tr: "La berge de la plaie est légèrement rougie.", note: "après ist, pas de terminaison ; leicht modifie gerötet" },
        { tr: "L'ancien pansement était humide.", note: "der + nominatif : alte ; après war : feucht sans terminaison" },
        { tr: "Le nouveau pansement tient bien.", note: "der + nominatif : neue" },
        { tr: "La plaie ne montre aucun signe d'inflammation.", note: "einer Entzündung : génitif féminin" }
      ]
    },
    vocab: [
      "la plaie",
      "l'inflammation",
      "l'inflammation (terme technique)",
      "la rougeur",
      "le gonflement, l'œdème",
      "rougi, rouge",
      "gonflé",
      "la berge de la plaie",
      "l'écoulement de la plaie, l'exsudat",
      "le pansement, le bandage",
      "la réfection du pansement",
      "la documentation de la plaie"
    ],
    dialogue: [
      "Tu m'aides pour la réfection du pansement de M. Brandt ?",
      "Bien sûr. Comment était la plaie hier ?",
      "La berge était légèrement rougie, mais sèche.",
      "Et aujourd'hui ? L'ancien pansement est assez humide.",
      "Oui, il y a un peu d'écoulement. La rougeur s'est étendue et la peau est chaude au toucher.",
      "Ça pourrait être un signe d'inflammation.",
      "Exactement. Je documente la plaie avec une photo et je préviens la médecin.",
      "Bien. On verra après la visite comment continuer."
    ],
    culture: {
      title: "Côté allemand : la documentation des plaies",
      text: "<p>Dans beaucoup d'hôpitaux et de services allemands, la plaie est documentée sur un formulaire dédié, le <i>Wunddokumentationsbogen</i>, souvent avec une photo et une réglette en papier à côté de la plaie. Dans de nombreux établissements, les plaies chroniques sont suivies par du personnel spécialement formé, par exemple les <i>Wundexperten</i> formés selon les cours de l'ICW (<i>Initiative Chronische Wunden</i>), un rôle qui rappelle celui de l'infirmière référente plaies et cicatrisation.</p><p>Les photos de plaies sont des données de santé : on les prend avec les appareils de l'établissement, pas avec son téléphone personnel. Les règles précises figurent dans les consignes du service.</p>"
    },
    exercises: [
      {
        q: "Décris la plaie : la berge est légèrement rougie. Quelle phrase est correcte ?",
        opts: [
          "Der Wundrand ist leicht gerötete.",
          "Der Wundrand hat leicht gerötet.",
          "Der Wundrand ist leicht gerötet."
        ],
        why: "Après <i>sein</i>, l'adjectif reste sans terminaison : <b>ist gerötet</b>. <i>hat gerötet</i> serait un Perfekt actif (« a rougi quelque chose ») et ne décrit pas un état."
      },
      {
        q: "Complète : « Am Unterschenkel ist eine ___ Wunde. »",
        hint: "petite",
        why: "<b>kleine</b> : après <i>eine</i>, au nominatif féminin, l'adjectif prend <b>-e</b>."
      },
      {
        q: "Complète la phrase.",
        tr: "L'ancien pansement était humide, le nouveau tient bien.",
        why: "<i>der <b>alte</b> Verband</i>, <i>der <b>neue</b> Verband</i> : après l'article défini, au nominatif masculin, la terminaison est <b>-e</b>."
      },
      {
        q: "Quelles descriptions sont correctes ?",
        opts: [
          "Die Wunde ist gerötet und geschwollen.",
          "Eine gerötete Wunde am Unterschenkel.",
          "Ein geschwollener Knöchel.",
          "Der Wundrand ist gerötete.",
          "Eine kleiner Wunde am Fuß."
        ],
        why: "Après <i>ist</i>, l'adjectif ne prend pas de terminaison : <i>ist gerötet</i>, pas <i>gerötete</i>. Après <i>eine</i>, le féminin veut <b>-e</b> : <i>eine kleine Wunde</i>."
      },
      {
        q: "Associe chaque mot à son sens.",
        pairs: ["la rougeur", "le gonflement", "l'écoulement de la plaie", "la berge de la plaie"]
      },
      {
        q: "Choisis le bon article défini pour chaque nom.",
        items: ["plaie", "inflammation", "pansement", "réfection du pansement", "écoulement de la plaie", "berge de la plaie"]
      },
      {
        q: "Remets les mots dans l'ordre.",
        tr: "La plaie ne montre aucun signe d'inflammation.",
        why: "<i>Die Wunde zeigt keine Zeichen einer Entzündung.</i> <i>einer Entzündung</i> est un génitif féminin : « d'une inflammation »."
      },
      {
        q: "Traduis (dans les transmissions) : « La plaie est sèche et propre. »",
        why: "<i>Die Wunde ist trocken und sauber</i> : après <i>ist</i>, les adjectifs restent sans terminaison, alors que le français accorde (« sèche », « propre »). Dans les transmissions, on écrit aussi en style abrégé : <i>Wunde trocken und sauber</i>."
      },
      {
        q: "Le patient pose des questions sur sa plaie.",
        setting: "Pendant la réfection du pansement, M. Brandt est inquiet et te pose des questions.",
        lines: [
          { tr: "Ma plaie est enflammée ?" },
          { tr: "Réponds qu'elle est un peu rouge et que la médecin la regarde aujourd'hui.", answerTr: "La plaie est un peu rouge. La médecin la regarde aujourd'hui." },
          { tr: "Pourquoi le pansement est-il si mouillé ?" },
          { tr: "Réponds que c'est un écoulement, du liquide qui sort de la plaie, et que tu le notes.", answerTr: "C'est un écoulement, du liquide qui sort de la plaie. Je le note." },
          { tr: "La réfection du pansement fait mal ?" },
          { tr: "Réponds que tu travailles avec beaucoup de précaution et qu'il doit te le dire tout de suite si ça fait mal.", answerTr: "Je travaille avec beaucoup de précaution. Dites-le-moi tout de suite si ça fait mal." }
        ]
      },
      {
        tr: "Oui, il y a un peu d'écoulement. La rougeur s'est étendue et la peau est chaude au toucher.",
        why: "Dans <i>Rötung</i> et <i>größer</i>, le <b>ö</b> est long, proche du « eu » de « deux » ; dans <i>größer</i>, le <b>ß</b> est un <b>s</b> sourd ; dans <i>warm</i>, le <b>w</b> se prononce [v] ; dans <i>Wundsekret</i>, l'accent tombe sur <b>Wund</b>."
      },
      {
        tr: "La berge de la plaie est légèrement rougie.",
        why: "Dans <i>Wundrand</i>, les deux <b>d</b> en fin de syllabe se prononcent [t] ; dans <i>leicht</i>, le <b>ch</b> après <b>i</b> est [ç], un souffle proche du début de « hue » chuchoté ; dans <i>gerötet</i>, l'accent tombe sur <b>rö</b>, avec un <b>ö</b> long."
      }
    ]
  },
  "lesson:pfl-u09-l3": {
    theme: "Préparer la sortie",
    title: "La sortie",
    objectives: [
      "expliquer au patient ce qui se passera après la sortie avec le Futur I",
      "distinguer le Futur I (wird kontrollieren) du passif (wird entlassen)",
      "nommer les aides techniques, le service de soins à domicile et le degré de dépendance",
      "répondre sans promettre ce qu'une autre institution décide"
    ],
    theory: [
      {
        h: "Ce qu'on dit au patient",
        p: "À la sortie, le patient veut savoir qui l'aidera, ce dont il aura besoin et à qui s'adresser. Pour annoncer qui fera quoi, on emploie le <strong>Futur I</strong> : <em>Ein Pflegedienst <b>wird</b> Sie morgens <b>unterstützen</b>. Ihr Hausarzt <b>wird</b> die Wunde <b>kontrollieren</b>.</em> Le Futur I sonne plus engagé et plus clair que le présent, qui reste possible (<em>Ein Pflegedienst kommt morgens</em>). Ce que d'autres décident, par exemple la caisse d'assurance dépendance, ne se promet pas : <em>Das entscheidet die Pflegekasse.</em>"
      },
      {
        h: "Futur I ou passif ?",
        p: "Les deux emploient <em>werden</em>, mais avec des formes différentes du verbe. Le <strong>Futur I</strong> veut <em>werden</em> + <b>infinitif</b> : <em>Der Hausarzt wird die Wunde <b>kontrollieren</b></em> (« contrôlera »). Le <strong>passif</strong> veut <em>werden</em> + <b>participe</b> : <em>Sie werden am Freitag <b>entlassen</b></em> (« vous sortez vendredi »). Avec <em>entlassen</em>, les deux formes se confondent facilement, parce que l'infinitif et le participe sont identiques : la phrase <em>Sie werden am Freitag entlassen</em> est un passif présent à sens futur, pas un Futur I."
      },
      {
        contrast: "En France, on parle de « sortie », de « préparation » ou « planification de la sortie », et parfois de dispositifs comme le retour à domicile accompagné ou l'HAD. En Allemagne, l'organisation de la sortie s'appelle <em>das Entlassmanagement</em>, et la loi l'impose aux hôpitaux (§ 39 SGB V). Le mot <em>die Überleitung</em> désigne le passage vers ceux qui prennent le relais : le service de soins à domicile, la maison de retraite, le médecin traitant ; le formulaire qui accompagne le patient est le <em>Überleitungsbogen</em>, proche de votre fiche de liaison. Le piège, c'est <em>der Pflegegrad</em>. On a envie de le traduire par « GIR », mais les deux ne se recouvrent pas : le <em>Pflegegrad</em> va de 1 à 5 et <b>5 est le plus lourd</b>, alors que dans la grille AGGIR le GIR 1 est le plus dépendant. Les critères, l'évaluateur et les prestations sont différents aussi : le <em>Pflegegrad</em> est attribué par la <em>Pflegekasse</em> après une évaluation, en général par le <em>Medizinischer Dienst</em>, et ouvre droit aux prestations de l'assurance dépendance. Ne convertis jamais un GIR en Pflegegrad, ni l'inverse."
      },
      {
        trap: "<em>entlassen</em> veut dire « faire sortir » un patient, mais aussi « licencier » un salarié : <em>Er wurde entlassen</em>, sans contexte, peut être l'un ou l'autre. Le patient lui-même dit souvent <em>Ich darf nach Hause</em> ou <em>Ich komme raus</em>. Et <em>der Arztbrief</em> n'est pas une lettre quelconque : c'est le compte rendu du médecin qui accompagne la sortie, ce que vous appelez lettre de liaison ou compte rendu d'hospitalisation."
      },
      {
        tip: "Avant de parler au patient, écris trois lignes : qui vient à la maison, quelles aides arrivent, qui contrôle et quand. Puis explique-les dans cet ordre, avec le Futur I. À la fin, demande : <em>Haben Sie noch Fragen?</em>, et s'il y a un proche, implique-le."
      }
    ],
    grammar: {
      title: "Futur I et passif avec werden",
      note: "Futur I : <b>werden</b> conjugué + <b>infinitif</b> à la fin. Passif : <b>werden</b> conjugué + <b>participe</b> à la fin. Avec <i>entlassen</i>, infinitif et participe sont identiques : c'est le sens qui tranche.",
      table: {
        head: ["forme", "structure", "exemple"],
        rows: [
          ["Futur I", "werden + infinitif", "Ein Pflegedienst wird Sie morgens unterstützen."],
          ["Futur I, question", "werden en première position + infinitif", "Werden Sie zu Hause allein zurechtkommen?"],
          ["passif présent", "werden + participe", "Sie werden am Freitag entlassen."],
          ["passif présent", "werden + participe", "Der Rollator wird geliefert."]
        ]
      },
      examples: [
        { tr: "Un service de soins à domicile vous aidera le matin.", note: "wird + infinitif unterstützen à la fin : Futur I" },
        { tr: "Votre fille ira chercher les médicaments à la pharmacie.", note: "Futur I : wird ... holen" },
        { tr: "Votre médecin traitant contrôlera la plaie la semaine prochaine.", note: "Futur I : wird ... kontrollieren" },
        { tr: "Nous commanderons le déambulateur à temps.", note: "Futur I à la première personne du pluriel : werden ... bestellen" },
        { tr: "Vous vous débrouillerez seule à la maison ?", note: "question : werden en première position, zurechtkommen à la fin" },
        { tr: "Vous sortez vendredi.", note: "passif présent à sens futur : werden + participe entlassen" }
      ]
    },
    vocab: [
      "la sortie (de l'hôpital)",
      "faire sortir (un patient)",
      "la gestion de la sortie",
      "le passage de relais",
      "la fiche de liaison",
      "l'aide technique",
      "le service de soins (à domicile)",
      "le degré de dépendance (allemand, de 1 à 5)",
      "la caisse d'assurance dépendance",
      "le compte rendu du médecin à la sortie",
      "se débrouiller",
      "organiser"
    ],
    dialogue: [
      "Madame Keller, la médecin a dit que vous sortez vendredi.",
      "Enfin ! Mais comment est-ce que je vais me débrouiller à la maison ?",
      "On en parle maintenant. Demain, une collègue de la gestion de la sortie viendra vous voir.",
      "Et qui m'aide pour la toilette ?",
      "Un service de soins à domicile vous aidera le matin. On en parle aussi avec votre fille.",
      "J'ai besoin d'un déambulateur ?",
      "Oui. Nous commanderons le déambulateur à temps, comme ça il sera déjà là vendredi.",
      "Et après, je dois encore aller chez le médecin ?",
      "Votre médecin traitant contrôlera la plaie la semaine prochaine. Il recevra aussi le compte rendu de sortie."
    ],
    culture: {
      title: "Côté allemand : la Pflegeversicherung",
      text: "<p>Depuis 1995, l'Allemagne a une assurance dépendance obligatoire, la <i>Pflegeversicherung</i>, gérée par les <i>Pflegekassen</i> rattachées aux caisses d'assurance maladie. C'est une branche à part, sans équivalent exact en France, où l'aide passe surtout par l'APA versée par le département. Une personne qui a besoin d'aide dépose une demande ; un évaluateur du <i>Medizinischer Dienst</i> (ou d'un autre service mandaté) évalue son autonomie, en général à domicile, et la caisse attribue un <i>Pflegegrad</i> de 1 à 5. Les prestations dépendent du degré : argent pour l'aidant familial, soins à domicile, participation aux frais de maison de retraite.</p><p>À l'hôpital, l'infirmière ne décide pas du degré, mais elle est souvent la première à remarquer qu'il faudra de l'aide à la maison, et elle le signale à l'<i>Entlassmanagement</i>.</p>"
    },
    exercises: [
      {
        q: "Tu annonces à la patiente qu'un service de soins à domicile l'aidera chez elle. Quelle phrase est correcte ?",
        opts: [
          "Ein Pflegedienst wird Sie zu Hause unterstützt.",
          "Ein Pflegedienst wird Sie zu Hause unterstützen.",
          "Ein Pflegedienst werden Sie zu Hause unterstützen."
        ],
        why: "Futur I : <i>wird</i> + <b>infinitif</b> à la fin, <b>unterstützen</b>. <i>wird ... unterstützt</i> est la structure du passif, et un passif n'admet pas en plus le complément à l'accusatif <i>Sie</i> : la phrase est agrammaticale ; <i>werden</i> ne s'accorde pas avec le sujet singulier <i>ein Pflegedienst</i>."
      },
      {
        tr: "Le présent de werden, à toutes les personnes.",
        why: "<i>Werde, wirst, wird, werden, werdet, werden</i> : à la deuxième et à la troisième personne du singulier, le <b>e</b> devient <b>i</b>, et le <b>d</b> tombe dans <i>wirst</i> mais reste dans <i>wird</i>."
      },
      {
        q: "Complète : « Ihr Hausarzt ___ die Wunde nächste Woche kontrollieren. »",
        hint: "Futur I, troisième personne du singulier",
        why: "<b>wird</b> : le Futur I place <i>werden</i> conjugué en deuxième position et l'infinitif <i>kontrollieren</i> à la fin."
      },
      {
        q: "Complète la phrase.",
        tr: "Nous commanderons le déambulateur à temps.",
        why: "<i>Wir <b>werden</b> den Rollator rechtzeitig <b>bestellen</b></i> : Futur I à la première personne du pluriel, l'infinitif va à la fin."
      },
      {
        q: "Quelles phrases sont au Futur I ?",
        opts: [
          "Der Pflegedienst wird morgens kommen.",
          "Sie werden am Freitag entlassen.",
          "Ihre Tochter wird die Medikamente holen.",
          "Der Arztbrief wurde geschrieben.",
          "Wir werden den Überleitungsbogen ausfüllen."
        ],
        why: "Le Futur I, c'est <i>werden</i> + infinitif : <i>wird kommen</i>, <i>wird holen</i>, <i>werden ausfüllen</i>. <i>werden entlassen</i> est ici un passif présent (participe), <i>wurde geschrieben</i> un passif au Präteritum."
      },
      {
        q: "Associe chaque mot à son sens.",
        pairs: ["la gestion de la sortie", "l'aide technique", "le degré de dépendance", "le service de soins à domicile"]
      },
      {
        q: "Choisis le bon article défini pour chaque nom.",
        items: ["sortie", "gestion de la sortie", "passage de relais", "aide technique", "service de soins", "degré de dépendance"]
      },
      {
        q: "Remets les mots dans l'ordre.",
        tr: "Un service de soins vous aidera le matin.",
        why: "<i>Ein Pflegedienst wird Sie morgens unterstützen.</i> <i>wird</i> en deuxième position, l'infinitif <i>unterstützen</i> à la fin."
      },
      {
        q: "Traduis avec le Futur I : « Le médecin traitant contrôlera la plaie la semaine prochaine. »",
        why: "<i>Der Hausarzt wird die Wunde nächste Woche kontrollieren</i> : Futur I, l'infinitif à la fin. <i>nächste Woche</i> (ou <i>in der nächsten Woche</i>) peut aussi se placer en tête : <i>Nächste Woche wird der Hausarzt ...</i>"
      },
      {
        q: "Questions sur la sortie.",
        setting: "Mme Keller sait qu'elle va bientôt rentrer chez elle et te pose des questions.",
        lines: [
          { tr: "Quand est-ce que je peux rentrer chez moi ?" },
          { tr: "Réponds qu'elle sortira probablement vendredi.", answerTr: "Vous sortez probablement vendredi." },
          { tr: "Qui m'aide pour la toilette à la maison ?" },
          { tr: "Réponds qu'un service de soins viendra chez elle le matin.", answerTr: "Un service de soins viendra chez vous le matin." },
          { tr: "Est-ce que j'aurai un degré de dépendance ?" },
          { tr: "Réponds que c'est la caisse qui décide et que vous l'aidez pour la demande.", answerTr: "C'est la caisse d'assurance dépendance qui décide. Nous vous aidons pour la demande." }
        ]
      },
      {
        tr: "Un service de soins à domicile vous aidera le matin. On en parle aussi avec votre fille.",
        why: "Dans <i>Pflegedienst</i>, on prononce à la fois le <b>p</b> et le <b>f</b> ; dans <i>ambulanter</i>, l'accent tombe sur <b>lan</b> ; dans <i>unterstützen</i>, l'accent tombe sur <b>stüt</b>, et <b>st</b> se prononce [ʃt], comme « cht »."
      },
      {
        tr: "Votre médecin traitant contrôlera la plaie la semaine prochaine.",
        why: "Dans <i>Hausarzt</i>, l'accent tombe sur <b>Haus</b> et on entend [tst] à la fin ; dans <i>nächste</i>, le <b>ch</b> après <b>ä</b> est [ç] ; dans <i>kontrollieren</i>, l'accent tombe sur <b>lie</b>."
      }
    ]
  },
  "lesson:pfl-u09-l4": {
    theme: "Tâches et responsabilités",
    title: "Qu'ai-je le droit de faire, que dois-je faire ?",
    objectives: [
      "demander ce que tu as le droit de faire pendant ta période d'intégration",
      "distinguer dürfen, müssen, sollen et sollten",
      "comprendre la différence entre du darfst nicht et du musst nicht",
      "refuser poliment une demande qui ne relève pas de toi"
    ],
    theory: [
      {
        h: "Autorisation, obligation, consigne",
        p: "<em>dürfen</em> exprime l'autorisation : <em>Was <b>darf</b> ich schon allein machen?</em> <em>müssen</em> l'obligation : <em>Wenn du unsicher bist, <b>musst</b> du nachfragen.</em> <em>sollen</em> rapporte une consigne donnée par quelqu'un d'autre : <em>Die Ärztin sagt, du <b>sollst</b> den Blutzucker messen.</em> <em>sollten</em> est un conseil : <em>Das <b>sollten</b> wir mit der Stationsleitung klären.</em> Le modal conjugué est en deuxième position, l'infinitif à la fin ; dans une subordonnée, le modal va à la fin, après l'infinitif."
      },
      {
        h: "Délégation et responsabilité : avec prudence",
        p: "En Allemagne, certaines tâches médicales peuvent être déléguées au personnel infirmier (<em>Delegation</em>) ; la personne qui accepte une tâche répond de son exécution. Ce qui peut être délégué, à qui et à quelles conditions dépend de la loi, de l'établissement et de ta situation, par exemple pendant la reconnaissance de ton diplôme. Le cadre ne se superpose pas au rôle propre et au rôle prescrit que tu connais peut-être. Cette leçon apprend les mots pour demander et pour dire non, pas les règles juridiques : pour les cas concrets, la bonne personne est la <em>Stationsleitung</em>."
      },
      {
        contrast: "En français, « tu ne dois pas le faire seule » veut dire en général que c'est interdit. L'allemand exprime l'interdiction avec <em>dürfen</em> : <em>Das <b>darfst</b> du nicht allein machen.</em> <em>Du <b>musst</b> das nicht machen</em> veut dire au contraire « tu n'es pas obligée, ce n'est pas nécessaire » : traduire « tu ne dois pas » par <em>musst nicht</em> transforme une interdiction en permission. La règle pratique : « tu ne dois pas » au sens d'une interdiction = <em>nicht dürfen</em> ; « ne pas être obligé », « pas besoin de » = <em>nicht müssen</em>. Et le « je peux ? » français se dédouble aussi : <em>Darf ich?</em> demande explicitement l'autorisation (« j'ai le droit ? ») ; <em>Kann ich?</em> demande si c'est possible ou si tu en es capable, et à l'oral sert souvent aussi à demander la permission. Quand c'est l'autorisation qui compte, <em>Darf ich?</em> est le choix clair."
      },
      {
        trap: "Le français « responsabilité » couvre deux mots allemands. <em>die Haftung</em>, c'est la responsabilité juridique, l'obligation de répondre d'un dommage (surtout la responsabilité civile ; la responsabilité pénale se dit plutôt <em>strafrechtliche Verantwortung</em>). La responsabilité professionnelle et morale, c'est <em>die Verantwortung</em> : <em>Ich trage die Verantwortung für meine Patienten.</em> Et <em>die Krankenschwester</em>, que les patients emploient encore souvent, n'est plus le titre professionnel : le titre est <em>Pflegefachfrau</em> ou <em>Pflegefachmann</em>."
      },
      {
        tip: "Si un proche ou un patient te demande quelque chose qui ne relève pas de toi, ne dis pas seulement non : dis qui décide et ce que tu fais maintenant. <em>Das darf ich nicht allein entscheiden. Ich spreche mit der Ärztin.</em> Ainsi, la demande ne reste pas sans réponse."
      }
    ],
    grammar: {
      title: "Les verbes modaux dans le service",
      note: "Le modal conjugué en <b>deuxième position</b>, l'infinitif <b>à la fin</b>. Interdiction : <b>nicht dürfen</b>. Absence d'obligation : <b>nicht müssen</b>.",
      table: {
        head: ["modal", "sens", "exemple"],
        rows: [
          ["dürfen", "avoir le droit", "Das darfst du erst nach der Einarbeitung."],
          ["nicht dürfen", "interdiction", "Das darfst du noch nicht allein machen."],
          ["müssen", "obligation", "Wenn du unsicher bist, musst du nachfragen."],
          ["nicht müssen", "pas d'obligation", "Das musst du nicht allein machen."],
          ["sollen", "consigne d'un tiers", "Die Ärztin sagt, du sollst den Blutzucker messen."],
          ["sollten", "conseil", "Das sollten wir mit der Stationsleitung klären."]
        ]
      },
      examples: [
        { tr: "Qu'est-ce que j'ai déjà le droit de faire seule, en tant que nouvelle collègue ?", note: "dürfen : demande l'autorisation, pas la capacité" },
        { tr: "Cette tâche, tu ne peux la prendre en charge qu'après ta période d'intégration.", note: "darfst en deuxième position, übernehmen à la fin ; erst = seulement, pas avant" },
        { tr: "Certaines tâches médicales peuvent être déléguées aux infirmiers.", note: "modal + passif : können + delegiert werden" },
        { tr: "Si tu n'es pas sûre, tu dois demander.", note: "la subordonnée avec wenn occupe la première position, donc musst tout de suite" },
        { tr: "Tu n'es pas obligée de le faire seule.", note: "nicht müssen : absence d'obligation, pas interdiction" },
        { tr: "Nous devrions clarifier cela avec la cadre de santé.", note: "sollten : un conseil" }
      ]
    },
    vocab: [
      "avoir le droit de, pouvoir",
      "devoir (être obligé)",
      "devoir (sur consigne d'un tiers)",
      "la délégation",
      "déléguer",
      "la responsabilité",
      "la responsabilité juridique",
      "la période d'intégration (du nouveau personnel)",
      "formé au service, intégré",
      "la tâche",
      "prendre en charge, assumer",
      "refuser"
    ],
    dialogue: [
      "Je suis là depuis une semaine. Qu'est-ce que j'ai déjà le droit de faire seul ?",
      "Les soins d'hygiène et les paramètres vitaux, tu les fais déjà seul. La réfection du pansement, on la fait encore ensemble cette semaine.",
      "Et les prises de sang ? Dans mon pays, j'en faisais tous les jours.",
      "Je te crois. Mais ici, tu n'as le droit de les faire que quand ta période d'intégration est terminée et que la médecin te les a déléguées.",
      "Je dois prendre en charge toutes les tâches qu'on me donne ?",
      "Non. Si tu ne te sens pas sûr pour une tâche, tu dois le dire. Alors quelqu'un te montre comment faire.",
      "Et qui en répond, si quelque chose se passe mal ?",
      "C'est une question pour la cadre de santé. Les règles ne sont pas les mêmes partout, c'est pour ça que nous devrions clarifier cela avec elle."
    ],
    culture: {
      title: "Côté allemand : la reconnaissance du diplôme",
      text: "<p>Si tu as fait tes études d'infirmier à l'étranger, tu dois en général faire reconnaître ton diplôme en Allemagne (<i>Anerkennung</i>). Pour un diplôme obtenu dans l'Union européenne, la reconnaissance est souvent plus simple, mais elle reste une démarche à faire. Selon le pays et la formation, il peut falloir un stage d'adaptation (<i>Anpassungslehrgang</i>) ou un examen (<i>Kenntnisprüfung</i>). Jusqu'à la reconnaissance, beaucoup travaillent dans un autre rôle, par exemple comme <i>Pflegefachkraft in Anerkennung</i>, et certaines tâches ne sont pas encore permises.</p><p>Les règles changent d'un <i>Land</i> à l'autre et dans le temps : les informations à jour viennent de l'administration compétente de ton Land et du portail officiel <i>Anerkennung in Deutschland</i>.</p>"
    },
    exercises: [
      {
        q: "Tu veux dire à un collègue qu'il n'est pas obligé de le faire seul. Quelle phrase utilises-tu ?",
        opts: [
          "Das darfst du nicht allein machen.",
          "Das musst du nicht allein machen.",
          "Das sollst du nicht allein machen."
        ],
        why: "<b>nicht müssen</b> veut dire « pas d'obligation ». <i>nicht dürfen</i> est une interdiction, c'est le « tu ne dois pas » français ; <i>nicht sollen</i> rapporte la consigne de quelqu'un d'autre de ne pas le faire."
      },
      {
        tr: "Le présent de dürfen, à toutes les personnes.",
        why: "<i>Darf, darfst, darf, dürfen, dürft, dürfen</i> : au singulier, le <b>ü</b> devient <b>a</b>, et la première et la troisième personne du singulier n'ont pas de terminaison."
      },
      {
        q: "Complète : « Wenn du unsicher bist, ___ du nachfragen. »",
        hint: "obligation : müssen",
        why: "<b>musst</b> : la subordonnée avec <i>wenn</i> occupe la première position, donc le modal vient juste après, puis le sujet <i>du</i> et l'infinitif à la fin."
      },
      {
        q: "Complète la phrase.",
        tr: "Tu n'as le droit de faire cela que lorsque ta période d'intégration est terminée.",
        why: "<i>Das <b>darfst</b> du erst machen</i> : c'est une autorisation, donc <i>dürfen</i>. <i>wenn die Einarbeitung abgeschlossen <b>ist</b></i> : dans la subordonnée, le verbe conjugué va à la fin."
      },
      {
        q: "Quelles phrases sont correctes ?",
        opts: [
          "Du musst nachfragen, wenn du unsicher bist.",
          "Du musst nachfragen, wenn du bist unsicher.",
          "Diese Aufgabe darfst du erst nach der Einarbeitung übernehmen.",
          "Die Ärztin kann bestimmte Aufgaben an die Pflege delegieren.",
          "Ich darf heute Zimmer zwölf übernommen."
        ],
        why: "Après <i>wenn</i>, le verbe conjugué va à la fin : <i>wenn du unsicher bist</i>. Avec un modal, le deuxième verbe est à l'infinitif, pas au participe : <i>darf ... übernehmen</i>."
      },
      {
        q: "Associe chaque mot à son sens.",
        pairs: ["la délégation", "la responsabilité juridique", "la période d'intégration", "la tâche"]
      },
      {
        q: "Choisis le bon article défini pour chaque nom.",
        items: ["tâche", "responsabilité juridique", "réfection du pansement", "glycémie", "pays", "consentement"]
      },
      {
        q: "Remets les mots dans l'ordre.",
        tr: "Si tu n'es pas sûr, tu dois demander.",
        why: "<i>Wenn du unsicher bist, musst du nachfragen.</i> La subordonnée occupe la première position, donc tout de suite le modal <i>musst</i>, puis <i>du</i> et l'infinitif <i>nachfragen</i> à la fin."
      },
      {
        q: "Traduis (à une nouvelle collègue) : « Tu ne dois pas encore le faire seule. »",
        why: "<i>Das darfst du noch nicht allein machen</i> : le « tu ne dois pas » français est ici une interdiction, donc <i>nicht dürfen</i>, pas <i>nicht müssen</i>. <i>Du darfst das noch nicht allein machen</i> convient aussi."
      },
      {
        q: "Une demande qui ne relève pas de toi.",
        setting: "Le fils d'un patient te demande de donner un somnifère à son père.",
        lines: [
          { tr: "Mon père dort si mal. Donnez-lui donc un somnifère !" },
          { tr: "Réponds que tu ne peux pas le décider seule et que tu en parles à la médecin.", answerTr: "Je ne peux pas le décider seule. J'en parle à la médecin." },
          { tr: "Mais vous êtes infirmière !" },
          { tr: "Réponds que oui, mais que les médicaments ne se donnent que sur prescription médicale.", answerTr: "Oui, mais les médicaments ne se donnent que sur prescription médicale." },
          { tr: "Et quand est-ce que je saurai quelque chose ?" },
          { tr: "Réponds que tu appelles la médecin maintenant et que tu le tiens au courant.", answerTr: "J'appelle la médecin maintenant et je vous tiens au courant." }
        ]
      },
      {
        tr: "Non. Si tu ne te sens pas sûr pour une tâche, tu dois le dire. Alors quelqu'un te montre comment faire.",
        why: "Dans <i>sicher</i>, le <b>s</b> initial est sonore, [z], et le <b>ch</b> est [ç] ; dans <i>fühlst</i>, le <b>ü</b> est long, comme le « u » français ; dans <i>musst</i>, le <b>u</b> est bref, comme le « ou » de « tout », jamais comme le « u » français."
      },
      {
        tr: "Si tu n'es pas sûr, tu dois demander.",
        why: "Dans <i>unsicher</i>, l'accent tombe sur <b>un</b>, et ce <b>un</b> se prononce « ounn », jamais comme le « un » nasal français ; dans <i>nachfragen</i>, l'accent tombe sur <b>nach</b> et le <b>ch</b> après <b>a</b> est [x], un son qui n'existe pas en français, proche de la « jota » espagnole."
      }
    ]
  },
  "lesson:pfl-u09-test": {
    theme: "Évaluation finale",
    title: "Test final : l'allemand des soins infirmiers",
    objectives: [
      "vérifier le passif, la déclinaison de l'adjectif et le Futur I de cette unité",
      "réviser le vocabulaire de tout le parcours : accueil, paramètres, soins d'hygiène, douleur, médicaments, transmissions, sortie"
    ],
    theory: [
      {
        p: "Douze questions, la dernière évaluation du parcours : en plus de cette unité, elles reprennent des mots et des situations des neuf unités. Le test est réussi à 70 %. Les patients et les situations sont inventés et servent seulement d'exemple : les règles d'hygiène, le soin des plaies et l'organisation de la sortie sont fixés par l'établissement et par le médecin."
      }
    ],
    exercises: [
      {
        q: "Tu expliques à un patient qu'il a de la tension. Quelle phrase comprendra-t-il le plus facilement ?",
        opts: ["Sie haben eine Hypertonie.", "Sie haben Bluthochdruck.", "Ihr RR ist erhöht."],
        why: "Avec le patient, on emploie le mot de tous les jours : <b>Bluthochdruck</b>. <i>Hypertonie</i>, transparent pour toi, et le sigle <i>RR</i> conviennent entre collègues et dans la documentation."
      },
      {
        q: "Complète : « Ich habe einen ___ Schmerz in der Brust. »",
        hint: "drückend, adjectif devant le nom",
        why: "<b>drückenden</b> : après <i>einen</i>, à l'accusatif masculin, l'adjectif prend <b>-en</b>."
      },
      {
        tr: "Le Futur I de kontrollieren, à toutes les personnes.",
        why: "<i>Werde, wirst, wird, werden, werdet, werden</i> + <b>kontrollieren</b> : seul <i>werden</i> se conjugue, l'infinitif reste le même et va à la fin de la phrase."
      },
      {
        q: "Associe chaque mot à son sens.",
        pairs: ["l'infection", "l'inflammation", "l'escarre", "l'évanouissement"]
      },
      {
        q: "Quelles phrases sont correctes ?",
        opts: [
          "Die Wunde ist leicht gerötet.",
          "Bei Frau Keller wurde ein erhöhter Blutzucker gemessen.",
          "Der Patient hat einen starken Schmerz.",
          "Die Ärztin wurde geinformiert.",
          "Er hat eine geschwollener Knöchel."
        ],
        why: "<i>informiert</i> ne prend pas <i>ge-</i>, parce que le verbe se termine en <i>-ieren</i>. <i>Knöchel</i> est masculin : <i>einen geschwollenen Knöchel</i>."
      },
      {
        q: "Complète la phrase.",
        tr: "On a trouvé un germe multirésistant chez M. Brandt, c'est pour cela qu'il est isolé.",
        why: "<i>Bei Herrn Brandt <b>wurde</b> ein multiresistenter Keim gefunden</i> : passif au Präteritum. <i>deshalb <b>wird</b> er isoliert</i> : passif présent, et après <i>deshalb</i> le verbe vient tout de suite."
      },
      {
        q: "Remets les mots dans l'ordre.",
        tr: "Les comprimés sont pris avant le petit-déjeuner.",
        why: "<i>Die Tabletten werden vor dem Frühstück eingenommen.</i> Passif présent : <i>werden</i> en deuxième position et le participe <i>eingenommen</i> à la fin."
      },
      {
        q: "Choisis le bon article défini pour chaque nom.",
        items: ["anamnèse", "pression artérielle", "médicament", "urgence", "degré de dépendance", "aide technique"]
      },
      {
        q: "Traduis (dans les transmissions) : « La plaie est rouge et gonflée. »",
        why: "<i>Die Wunde ist gerötet und geschwollen</i> : après <i>ist</i>, les adjectifs restent sans terminaison. En style abrégé : <i>Wunde gerötet und geschwollen</i>."
      },
      {
        q: "L'entretien de sortie.",
        setting: "M. Brandt rentre chez lui demain et te pose ses dernières questions.",
        lines: [
          { tr: "Quels comprimés est-ce que je prends à la maison ?" },
          { tr: "Réponds que c'est écrit dans son plan de traitement et que tu le lui expliques tout de suite.", answerTr: "C'est écrit dans votre plan de traitement. Je vous l'explique tout de suite." },
          { tr: "Et qui regarde ma plaie ?" },
          { tr: "Réponds que son médecin traitant la contrôlera la semaine prochaine.", answerTr: "Votre médecin traitant la contrôlera la semaine prochaine." },
          { tr: "À quoi est-ce que je vois que quelque chose ne va pas ?" },
          { tr: "Réponds que si la plaie devient rouge, chaude ou gonflée, il doit appeler son médecin traitant.", answerTr: "Si la plaie devient rouge, chaude ou gonflée, appelez votre médecin traitant, s'il vous plaît." }
        ]
      },
      {
        tr: "La plaie ne montre aucun signe d'inflammation.",
        why: "Dans <i>zeigt</i>, le <b>z</b> se prononce [ts] et le <b>g</b> final [k] ; dans <i>Zeichen</i>, le <b>ch</b> après <b>ei</b> est [ç] ; dans <i>Entzündung</i>, l'accent tombe sur <b>zün</b>."
      },
      {
        tr: "Les mains sont désinfectées avant et après chaque contact avec le patient.",
        why: "Dans <i>vor</i>, le <b>v</b> se prononce [f] ; dans <i>Patientenkontakt</i>, <b>ti</b> se prononce [tsi] ; dans <i>desinfiziert</i>, l'accent tombe sur <b>ziert</b>."
      }
    ]
  }
});
