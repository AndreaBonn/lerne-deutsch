/* ============================================================
   Textes dans la langue de l'élève (fr) pour data/core/pfl-03.js, unité pfl-u03.
   Les clés renvoient aux id de la couche neutre ; les tableaux se
   joignent par index, leur longueur doit donc correspondre à core.
   Vérifié par scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("fr", {
  "unit:pfl-u03": {
    title: "Soins de base et mobilisation",
    grammarNote: "les verbes pronominaux de la toilette et de l'habillage · les prépositions avec accusatif ou datif (wohin? / wo?) · les modaux avec le patient · l'infinitif avec zu · paires Fachsprache / Laiensprache"
  },
  "lesson:pfl-u03-l1": {
    theme: "Toilette et habillage",
    title: "Se laver et s'habiller",
    objectives: [
      "accompagner le patient pendant la toilette du matin, au lavabo ou au lit",
      "employer les verbes pronominaux : sich waschen, sich anziehen, sich rasieren",
      "choisir entre mich et mir quand la phrase a un complément",
      "protéger l'intimité du patient par des mots et des gestes respectueux"
    ],
    theory: [
      {
        h: "La toilette du matin",
        p: "La <strong>Grundpflege</strong> regroupe la toilette, l'habillage, l'alimentation, l'élimination et le mouvement. La première question n'est pas « est-ce que je le lave ? », mais ce que le patient veut et peut faire seul : <em>Möchten Sie sich heute selbst waschen? Am Waschbecken oder lieber im Bett?</em> Ensuite, on se partage le travail à voix haute : <em>Das Gesicht waschen Sie sich selbst, den Rücken wasche ich Ihnen.</em> Pour la toilette intime, on propose toujours d'abord au patient de la faire lui-même, et on dit ce qu'on fait pour protéger son intimité : <em>Ich ziehe den Vorhang zu. Ich warte so lange draußen.</em>"
      },
      {
        h: "Les verbes pronominaux",
        p: "Beaucoup de verbes de la toilette sont pronominaux : <em>sich waschen, sich anziehen, sich ausziehen, sich rasieren, sich kämmen</em>. Le pronom suit le verbe conjugué : <em>Ich wasche mich. Er zieht sich an.</em> Avec le Sie de politesse, le pronom réfléchi est <strong>sich</strong>, en minuscule, et non <em>Sie</em> : <em>Können Sie sich allein anziehen?</em> Quand la phrase a un complément (une partie du corps, un vêtement), le réfléchi passe au <strong>datif</strong> : <em>Ich wasche mich</em>, mais <em>Ich wasche mir das Gesicht</em>. La différence ne se voit qu'avec <em>ich</em> et <em>du</em> (mich/mir, dich/dir) : <em>sich</em>, <em>uns</em> et <em>euch</em> ne changent pas. Au Perfekt, les verbes pronominaux prennent <em>haben</em> : <em>Er hat sich schon angezogen.</em>"
      },
      {
        contrast: "Le français connaît bien les verbes pronominaux, et cela aide : <em>Waschen Sie sich?</em> correspond mot pour mot à « vous vous lavez ? », avec le même pronom double, <em>Sie sich</em> comme « vous vous ». Deux différences pourtant. La place : le français met le pronom devant le verbe (« vous vous habillez seul ? »), l'allemand derrière le verbe conjugué (<em>Ziehen Sie sich allein an?</em>). Et le cas : dans « je me lave les mains », le « me » français est déjà un complément indirect, mais sa forme ne change pas ; l'allemand rend la différence visible : <em>Ich wasche mir die Hände</em>, pas <em>mich</em>. Attention aussi au passé : « il s'est rasé » prend « être », <em>er hat sich rasiert</em> prend <em>haben</em>. Côté registre, la documentation et les collègues parlent d'<em>Intimpflege</em> et d'<em>Intimbereich</em> ; beaucoup de patients âgés disent <em>untenherum</em>. Inutile de les corriger : comprends le mot et réponds avec calme, sans termes plus explicites que ceux que le patient a choisis."
      },
      {
        trap: "En français, « faire sa toilette » veut dire se laver ; en allemand, <em>die Toilette</em> est uniquement le WC. La toilette du patient se dit <em>Körperpflege</em>, et la toilette complète au lit <em>die Ganzkörperwäsche</em>. <em>Baden</em> n'est pas « se laver » en général : c'est prendre un bain dans la baignoire. Se laver au lavabo, c'est <em>sich waschen</em>, la douche <em>duschen</em>. <em>Die Wäsche</em> est la lessive ou le linge. Et <em>das Hemd</em> est la chemise, la chemise de nuit <em>das Nachthemd</em>."
      },
      {
        tip: "Annonce chaque geste avant de le faire : <em>Ich wasche Ihnen jetzt den Rücken.</em> Une phrase courte avant de toucher le patient rassure plus que n'importe quelle explication, et avec le pronominal ou le datif elle t'entraîne au schéma qui compte le plus dans cette leçon."
      }
    ],
    grammar: {
      title: "mich ou mir ?",
      note: "Sans complément, le réfléchi est à l'<b>accusatif</b> (<b>mich</b>). Avec un complément, la partie du corps ou le vêtement, il passe au <b>datif</b> (<b>mir</b>). Avec le patient : toujours <b>sich</b>.",
      table: {
        head: ["personne", "sans complément (accusatif)", "avec un complément (datif)"],
        rows: [
          ["ich", "Ich wasche mich.", "Ich wasche mir die Hände."],
          ["er / sie", "Er zieht sich an.", "Er zieht sich die Jacke an."],
          ["wir", "Wir waschen uns.", "Wir putzen uns die Zähne."],
          ["Sie", "Waschen Sie sich selbst?", "Waschen Sie sich das Gesicht selbst?"]
        ]
      },
      examples: [
        { tr: "Voulez-vous faire votre toilette seule aujourd'hui ?", note: "avec Sie, le réfléchi est sich" },
        { tr: "D'abord, je me lave le visage.", note: "il y a un complément (das Gesicht) : mir, au datif" },
        { tr: "Arrivez-vous à vous habiller seul ?", note: "anziehen est séparable : Ich ziehe mich an" },
        { tr: "La toilette intime, vous la faites vous-même, et pendant ce temps j'attends dehors.", note: "on propose toujours d'abord la toilette intime autonome" },
        { tr: "Voulez-vous vous raser ?", note: "sich rasieren : demander, ne pas supposer" },
        { tr: "M. Brandt s'est déjà habillé.", note: "Perfekt des pronominaux : toujours avec haben" }
      ]
    },
    vocab: [
      "les soins de base (toilette, habillage, alimentation, élimination, mouvement)",
      "l'hygiène corporelle, la toilette",
      "se laver",
      "s'habiller",
      "se déshabiller, enlever (un vêtement)",
      "se raser",
      "se coiffer, se peigner",
      "le gant de toilette",
      "la serviette de toilette",
      "le lavabo",
      "la toilette intime",
      "la prothèse dentaire, le dentier"
    ],
    dialogue: [
      "Bonjour, madame Keller. Vous avez bien dormi ?",
      "Bonjour. Comme ci, comme ça.",
      "Aujourd'hui, vous voulez faire votre toilette au lavabo ou plutôt au lit ?",
      "Au lavabo, si vous m'aidez.",
      "Volontiers. Le visage et les bras, vous les lavez vous-même, et moi je vous lave le dos.",
      "Et en bas, je préfère le faire seule.",
      "Bien sûr. Je vous donne un gant propre et j'attends dehors. Sonnez quand vous avez fini.",
      "Merci, je préfère comme ça.",
      "Ensuite, vous vous habillez. Quel chemisier voulez-vous mettre aujourd'hui ?",
      "Le bleu, s'il vous plaît."
    ],
    culture: {
      title: "Regard allemand : Grundpflege et Behandlungspflege",
      text: "<p>Dans les soins allemands, on distingue en général deux domaines. La <i>Grundpflege</i> couvre les activités de la vie quotidienne : toilette, habillage, alimentation, élimination, mouvement. La <i>Behandlungspflege</i> couvre les actes liés à une prescription médicale, par exemple les pansements ou l'administration de médicaments. Dans les soins à domicile, la distinction compte aussi pour savoir qui paie la prestation, et tu liras souvent ce mot dans les documents.</p><p>En France, une grande partie de la toilette revient aux aides-soignantes. Le métier allemand le plus proche est <i>Pflegehelferin</i> / <i>Pflegehelfer</i> (ou <i>Pflegeassistenz</i>), avec une formation plus courte ; mais évaluer ce que le patient arrive à faire seul reste la responsabilité de l'infirmière.</p>"
    },
    exercises: [
      {
        q: "Tu veux demander à la patiente si elle souhaite se laver seule. Quelle phrase est correcte ?",
        opts: [
          "Möchten Sie Sie selbst waschen?",
          "Möchten Sie sich selbst waschen?",
          "Möchten Sie selbst waschen sich?"
        ],
        why: "Avec le Sie de politesse, le réfléchi est <b>sich</b>, pas <i>Sie</i>. Le modal <i>möchten</i> ouvre la question fermée et l'infinitif <i>waschen</i> va à la fin."
      },
      {
        tr: "Le présent de sich waschen, à toutes les personnes.",
        why: "<i>Wasche mich, wäschst dich, wäscht sich, waschen uns, wascht euch, waschen sich</i> : à la deuxième et à la troisième personne du singulier, le <b>a</b> devient <b>ä</b>, et le pronom réfléchi change avec la personne."
      },
      {
        q: "Complète : « Können Sie ___ allein anziehen? »",
        hint: "réfléchi de Sie",
        why: "<b>sich</b>, en minuscule : le réfléchi du Sie de politesse est le même que celui de la troisième personne."
      },
      {
        q: "Complète avec mich ou mir.",
        tr: "D'abord je me lave le visage, ensuite je m'habille.",
        why: "<i>Ich wasche mir zuerst das Gesicht</i> : il y a un complément, <i>das Gesicht</i>, donc le datif <i>mir</i>. <i>Dann ziehe ich mich an</i> : pas de complément, donc l'accusatif <i>mich</i>."
      },
      {
        q: "Quelles phrases sont correctes ?",
        opts: [
          "Ich wasche mir die Hände.",
          "Ich wasche mich die Hände.",
          "Können Sie sich allein anziehen?",
          "Er hat sich schon rasiert.",
          "Er ist sich schon rasiert."
        ],
        why: "Avec un complément (<i>die Hände</i>), le réfléchi est au datif, <i>mir</i>. Au Perfekt, les pronominaux prennent <i>haben</i>, contrairement au français « il s'est rasé » : <i>Er hat sich rasiert</i>."
      },
      {
        q: "Choisis le bon article défini pour chaque nom.",
        items: ["gant de toilette", "serviette de toilette", "lavabo", "toilette intime", "prothèse dentaire", "soins de base"]
      },
      {
        q: "Associe chaque verbe à son sens.",
        pairs: ["se laver", "s'habiller", "se déshabiller", "se raser"]
      },
      {
        q: "Remets les mots dans l'ordre.",
        tr: "Arrivez-vous à vous habiller seul ?",
        why: "<i>Können Sie sich allein anziehen?</i> Le modal ouvre la question fermée, le réfléchi <i>sich</i> suit le sujet et l'infinitif <i>anziehen</i> va à la fin."
      },
      {
        q: "Traduis (au patient) : « Voulez-vous vous raser ? »",
        why: "<i>Möchten Sie sich rasieren?</i> Avec le patient, <i>möchten</i> est la forme la plus polie ; <i>Wollen Sie</i> est correct mais sonne plus direct."
      },
      {
        q: "La toilette du matin.",
        setting: "Tu entres dans la chambre d'une patiente qui veut se laver seule.",
        lines: [
          { tr: "Bonjour. Aujourd'hui, je voudrais me laver seule." },
          { tr: "Réponds que tu lui laves le dos et qu'elle fait le reste.", answerTr: "Volontiers. Le dos, je vous le lave, et le reste, vous le faites vous-même." },
          { tr: "Et la toilette intime ? Ça me gêne un peu." },
          { tr: "Réponds que tu comprends : la toilette intime, elle la fait elle-même, et tu attends dehors.", answerTr: "Je vous comprends. La toilette intime, vous la faites vous-même, j'attends dehors." },
          { tr: "Et après ?" },
          { tr: "Réponds qu'après elle s'habille et que tu l'aides pour les bas.", answerTr: "Après, vous vous habillez, et je vous aide pour les bas." }
        ]
      },
      {
        tr: "Le visage et les bras, vous les lavez vous-même, et moi je vous lave le dos.",
        why: "Dans <i>Gesicht</i>, le <b>g</b> est dur et le <b>ch</b> après <b>i</b> est [ç], un souffle sans équivalent en français ; dans <i>Rücken</i>, le <b>ü</b> est le « u » français, bref ; dans <i>waschen</i>, le <b>sch</b> est le « ch » français."
      },
      {
        tr: "Voulez-vous faire votre toilette seule aujourd'hui ?",
        why: "Dans <i>Möchten</i>, le <b>ö</b> est un « eu » bref et le <b>ch</b> est [ç] ; dans <i>sich</i>, le <b>s</b> initial est sonore [z] ; dans <i>selbst</i>, le <b>b</b> se prononce [p]."
      }
    ]
  },
  "lesson:pfl-u03-l2": {
    theme: "Mouvement",
    title: "Mobilisation et installation",
    objectives: [
      "accompagner le patient du lit au bord du lit, puis au fauteuil roulant",
      "distinguer wohin? (accusatif) et wo? (datif) avec les prépositions an, auf, in, neben",
      "employer les paires setzen / sitzen, legen / liegen, stellen / stehen",
      "reconnaître Dekubitus et Kontraktur et les dire avec les mots du patient"
    ],
    theory: [
      {
        h: "Annoncer le mouvement",
        p: "Avant de mobiliser un patient, on dit ce qui va se passer et on lui demande si cela lui convient : <em>Heute setzen wir Sie an die Bettkante. Ist das in Ordnung?</em> On avance à petits pas, une étape à la fois, et on s'arrête quand le patient signale un malaise : <em>Mir ist schwindelig.</em> <em>Dann bleiben Sie erst einmal sitzen.</em> Comment mobiliser un patient et avec quelles aides techniques, c'est l'évaluation infirmière et le protocole de l'établissement qui le décident : ici, tu apprends les mots pour accompagner le mouvement, pas la technique."
      },
      {
        h: "Wohin? ou wo?",
        p: "Les prépositions <em>an, auf, in, neben, unter, über, vor, hinter, zwischen</em> régissent deux cas. S'il y a un déplacement vers un but (<strong>wohin?</strong>), elles veulent l'<strong>accusatif</strong> : <em>Ich setze Sie an die Bettkante.</em> Si on décrit une position (<strong>wo?</strong>), elles veulent le <strong>datif</strong> : <em>Sie sitzen an der Bettkante.</em> Les verbes vont par paires : <em>setzen, legen, stellen</em> indiquent le mouvement et prennent l'accusatif ; <em>sitzen, liegen, stehen</em> indiquent la position et prennent le datif. Contractions fréquentes : <em>an das → ans</em>, <em>in das → ins</em>, <em>an dem → am</em>, <em>in dem → im</em>."
      },
      {
        contrast: "Pour un francophone, <em>Mobilisation</em> est transparent, mais <em>Dekubitus</em> est un piège : en français, le « décubitus » est une position (« décubitus latéral », couché sur le côté), alors qu'en allemand <em>der Dekubitus</em> est l'<strong>escarre</strong>. Une transmission « Dekubitus links » ne parle donc pas de la position du patient, mais d'une plaie. Le patient allemand, lui, ne dit pas <em>Dekubitus</em> : il dit <em>Druckgeschwür</em> (« ulcère de pression ») ou emploie le verbe <em>sich wundliegen</em> : <em>Ich habe mich wundgelegen.</em> Pour la <em>Kontraktur</em>, il dit <em>Gelenkversteifung</em> ou simplement <em>Das Knie wird steif.</em> Et aucun patient ne dit <em>Mobilisation</em> ou <em>Lagerung</em> : il dit <em>aufstehen</em>, <em>sich hinsetzen</em>, <em>sich umdrehen</em>. Le terme technique est le bon en transmission et dans le dossier ; avec le patient, le verbe marche mieux."
      },
      {
        trap: "<em>Die Kontraktur</em> n'est pas la « contracture » française, qui est une contraction musculaire involontaire : c'est la <strong>rétraction articulaire</strong>, l'articulation qui ne s'étend plus. <em>Die Lagerung</em> est l'installation du patient dans le service, mais dans l'allemand de tous les jours c'est le stockage des marchandises : ne l'emploie pas avec le patient, il se sentirait traité comme un objet. Dis plutôt <em>Ich helfe Ihnen, sich auf die Seite zu drehen.</em> Ne confonds pas <em>setzen</em> et <em>sitzen</em> : <em>Ich sitze Sie</em> n'existe pas."
      },
      {
        tip: "Pour choisir le cas, demande-toi si le patient va vers un endroit ou s'il y est déjà : <em>wohin?</em> ou <em>wo?</em> En pratique, presque chaque fois que tu annonces ce que tu vas faire, tu emploies <em>setzen, legen, stellen</em> avec l'accusatif ; quand tu décris comment il est installé, <em>sitzen, liegen, stehen</em> avec le datif."
      }
    ],
    grammar: {
      title: "Mouvement et position",
      note: "<b>Wohin?</b> Verbe de mouvement + <b>accusatif</b>. <b>Wo?</b> Verbe de position + <b>datif</b>. La préposition est la même, c'est le cas qui change.",
      table: {
        head: ["wohin? (accusatif)", "wo? (datif)"],
        rows: [
          ["Ich setze Sie an die Bettkante.", "Sie sitzen an der Bettkante."],
          ["Wir legen Sie auf die Seite.", "Sie liegen auf der Seite."],
          ["Ich stelle den Rollator neben das Bett.", "Der Rollator steht neben dem Bett."],
          ["Ich setze Sie in den Rollstuhl.", "Sie sitzen im Rollstuhl."]
        ]
      },
      examples: [
        { tr: "Maintenant, je vous installe assis au bord du lit.", note: "setzen + an die : mouvement, accusatif" },
        { tr: "Maintenant, vous êtes assis au bord du lit.", note: "sitzen + an der : position, datif" },
        { tr: "Nous vous tournons sur le côté.", note: "legen + auf die : accusatif" },
        { tr: "Maintenant, vous êtes bien installé sur le côté.", note: "liegen + auf der : datif" },
        { tr: "Je mets le déambulateur à côté du lit.", note: "stellen + neben das : accusatif" },
        { tr: "Le déambulateur est à côté du lit.", note: "stehen + neben dem : datif" }
      ]
    },
    vocab: [
      "la mobilisation (terme technique)",
      "mobiliser",
      "l'installation du patient, le positionnement (terme technique)",
      "changer la position du patient",
      "le bord du lit",
      "le fauteuil roulant",
      "le déambulateur à roulettes, le rollator",
      "le coussin, l'oreiller",
      "l'escarre (terme technique ; pas la position « décubitus »)",
      "l'escarre, la plaie de pression (mot du patient)",
      "la rétraction articulaire (terme technique)",
      "la raideur de l'articulation (mot du patient)"
    ],
    dialogue: [
      "Monsieur Brandt, aujourd'hui nous vous asseyons au bord du lit pour la première fois. Ça vous va ?",
      "Oui, mais j'ai un peu peur.",
      "C'est tout à fait normal. Mon collègue m'aide. Tournez-vous d'abord sur le côté.",
      "Comme ça ?",
      "Exactement. Maintenant, nous posons vos pieds par terre, et vous vous redressez doucement.",
      "J'ai un peu la tête qui tourne.",
      "Alors restez d'abord tranquillement assis au bord du lit. Nous sommes là.",
      "Ça va déjà mieux.",
      "Bien. Le fauteuil roulant est à côté du lit. Voulez-vous encore aller dans le fauteuil aujourd'hui ?"
    ],
    culture: {
      title: "Regard allemand : Rollator et Kinästhetik",
      text: "<p>Dans les rues allemandes, le <i>Rollator</i>, le déambulateur à roulettes avec freins et siège, fait partie du paysage, et beaucoup de patients âgés arrivent à l'hôpital avec le leur. Demande-leur toujours où ils veulent le garder : pour beaucoup, c'est la condition pour se lever seuls.</p><p>Dans la formation de nombreuses infirmières allemandes figure la <i>Kinästhetik</i>, une approche du mouvement qui cherche à utiliser les capacités du patient au lieu de le soulever à bout de bras. Tu en entendras parler dans le service : le principe de fond, laisser le patient faire tout ce qu'il peut, est le même que dans la leçon 4.</p>"
    },
    exercises: [
      {
        q: "Tu veux dire au patient : « Maintenant, je vous installe assis au bord du lit. » Quelle phrase est correcte ?",
        opts: [
          "Ich setze Sie jetzt an der Bettkante.",
          "Ich setze Sie jetzt an die Bettkante.",
          "Ich sitze Sie jetzt an die Bettkante."
        ],
        why: "<i>setzen</i> indique un mouvement vers un but (<i>wohin?</i>), donc <i>an</i> régit l'accusatif : <b>an die</b> Bettkante. <i>sitzen</i> n'a pas de complément d'objet."
      },
      {
        q: "Complète : « Der Rollator steht neben ___ Bett. »",
        hint: "wo? das Bett au datif",
        why: "<b>dem</b> : <i>stehen</i> décrit une position (<i>wo?</i>), donc <i>neben</i> régit le datif, et <i>das Bett</i> au datif devient <i>dem Bett</i>."
      },
      {
        q: "Complète avec le bon article.",
        tr: "Nous vous tournons sur le côté. Maintenant, vous êtes bien installé sur le côté.",
        why: "<i>Wir legen Sie auf die Seite</i> : mouvement, accusatif. <i>Jetzt liegen Sie bequem auf der Seite</i> : position, datif."
      },
      {
        q: "Quelles phrases sont correctes ?",
        opts: [
          "Sie sitzen jetzt an der Bettkante.",
          "Ich stelle den Rollator neben dem Bett.",
          "Wir legen Sie auf die Seite.",
          "Der Rollstuhl steht neben dem Bett.",
          "Ich setze Sie in dem Rollstuhl."
        ],
        why: "<i>stellen</i> et <i>setzen</i> indiquent un mouvement et veulent l'accusatif : <i>neben das Bett</i>, <i>in den Rollstuhl</i>. <i>sitzen</i> et <i>stehen</i> indiquent une position et veulent le datif."
      },
      {
        q: "Choisis le bon article défini pour chaque nom.",
        items: ["bord du lit", "fauteuil roulant", "déambulateur", "coussin", "escarre (mot du patient)", "installation du patient"]
      },
      {
        q: "Associe le verbe de mouvement (wohin?) au verbe de position (wo?).",
        pairs: ["sitzen", "liegen", "stehen"]
      },
      {
        q: "Remets les mots dans l'ordre.",
        tr: "Le fauteuil roulant est à côté du lit.",
        why: "<i>Der Rollstuhl steht neben dem Bett.</i> <i>stehen</i> décrit la position : <i>neben</i> avec le datif."
      },
      {
        q: "Traduis : « Je vous installe dans le fauteuil roulant. »",
        why: "<i>Ich setze Sie in den Rollstuhl.</i> En allemand, on s'assoit « dans » le fauteuil roulant, avec <i>in</i>, et il y a un mouvement : accusatif, <i>in den</i>."
      },
      {
        q: "Le médecin a écrit « Dekubitus ». Complète pour le patient : « Wir lagern Sie um, damit kein ___ entsteht. »",
        hint: "Druck + Geschwür",
        why: "<b>Druckgeschwür</b>, neutre comme <i>das Geschwür</i>. Beaucoup de patients disent aussi <i>sich wundliegen</i>."
      },
      {
        q: "Le patient veut se lever.",
        setting: "Tu aides M. Brandt lors de sa première mobilisation.",
        lines: [
          { tr: "Aujourd'hui, je voudrais me lever." },
          { tr: "Réponds que d'abord vous l'asseyez au bord du lit.", answerTr: "Bien. D'abord, nous vous asseyons au bord du lit." },
          { tr: "J'ai un peu la tête qui tourne." },
          { tr: "Réponds qu'alors il reste d'abord assis au bord du lit.", answerTr: "Alors restez d'abord assis au bord du lit." },
          { tr: "Où est mon déambulateur ?" },
          { tr: "Réponds qu'il est à côté du lit.", answerTr: "Il est à côté du lit." }
        ]
      },
      {
        tr: "Le fauteuil roulant est à côté du lit. Voulez-vous encore aller dans le fauteuil aujourd'hui ?",
        why: "Dans <i>Rollstuhl</i>, le <b>st</b> au début de <i>Stuhl</i> se prononce [ʃt], « cht », même à l'intérieur du composé ; dans <i>steht</i>, le <b>h</b> allonge le <b>e</b> ; dans <i>neben</i>, le premier <b>e</b> est long."
      },
      {
        tr: "Maintenant, je vous installe assis au bord du lit.",
        why: "Dans <i>setze</i>, le <b>s</b> initial est sonore [z] et le <b>tz</b> est [ts] ; dans <i>jetzt</i>, le <b>j</b> se prononce comme le « y » de « yeux » ; dans <i>Bettkante</i>, l'accent tombe sur <b>Bett</b>."
      }
    ]
  },
  "lesson:pfl-u03-l3": {
    theme: "Repas et élimination",
    title: "Manger, boire, éliminer",
    objectives: [
      "proposer de l'aide pendant les repas et demander si le patient avale bien",
      "employer les modaux avec le patient : möchten, können, müssen, dürfen, sollen",
      "distinguer müssen nicht (pas nécessaire) de dürfen nicht (interdit)",
      "parler de miction, de selles et d'incontinence avec des mots respectueux"
    ],
    theory: [
      {
        h: "Des questions qui mettent à l'aise",
        p: "Les repas et l'élimination sont des moments où le patient dépend des autres, et les mots comptent. On propose, on n'impose pas : <em>Möchten Sie etwas trinken? Soll ich Ihnen das Fleisch klein schneiden? Darf ich Ihnen helfen?</em> On demande de façon simple et adulte : <em>Müssen Sie zur Toilette? Konnten Sie Wasser lassen? Wann hatten Sie zuletzt Stuhlgang?</em> Si le patient dit qu'il avale souvent de travers (<em>Ich verschlucke mich oft</em>), on le remercie et on le transmet au médecin : <em>Das gebe ich an die Ärztin weiter.</em>"
      },
      {
        h: "Les modaux avec le patient",
        p: "Chaque modal a son rôle. <strong>möchten</strong> propose (<em>Möchten Sie am Tisch essen?</em>) ; <strong>können</strong> demande une capacité (<em>Können Sie gut schlucken?</em>) ; <strong>müssen</strong> demande un besoin (<em>Müssen Sie zur Toilette?</em>) ; <strong>dürfen</strong> demande la permission (<em>Darf ich Ihnen helfen?</em>) ; <strong>sollen</strong> demande ce que l'autre veut que tu fasses (<em>Soll ich das Fenster öffnen?</em>). Dans la question fermée, le modal ouvre la phrase et l'infinitif va à la fin. <em>wollen</em> est correct, mais adressé au patient il sonne brusque : préfère <em>möchten</em>."
      },
      {
        contrast: "Pour un francophone, les termes techniques de cette leçon sont transparents : <em>Dysphagie</em> est la dysphagie, <em>Miktion</em> la miction, <em>Defäkation</em> la défécation, <em>Inkontinenz</em> l'incontinence. En allemand, ce sont des mots de transmission et de dossier. Avec le patient, on dit <em>Schluckstörung</em> ou <em>sich verschlucken</em>, <em>Wasser lassen</em>, <em>Stuhlgang</em> (« les selles », « aller à la selle »). Pour l'incontinence urinaire, beaucoup de patients disent <em>Blasenschwäche</em> (« vessie faible »), qui ne concerne que la vessie : pour les selles, il n'y a pas d'équivalent délicat, et on demande avec une phrase simple. Évite les mots enfantins qu'on entend parfois dans les services français (« vous avez fait pipi ? ») : avec un adulte, le registre reste adulte."
      },
      {
        trap: "Le faux ami le plus dangereux de la leçon : <em>Sie müssen nicht</em> veut dire « vous n'êtes pas obligé », alors que « vous ne devez pas », au sens d'une interdiction, se dit <em>Sie dürfen nicht</em>. <em>Sie müssen sich nicht beeilen</em> rassure ; <em>Sie dürfen sich nicht beeilen</em> sonne comme un ordre. <em>Der Stuhl</em> est la chaise, mais dans le service c'est aussi les selles : <em>Stuhlgang</em>, <em>Stuhlprobe</em>. Et <em>die Windel</em> est la couche des bébés : pour un adulte, comme on dit « protection » en français, on dit <em>Einlage</em> ou <em>Inkontinenzeinlage</em>."
      },
      {
        tip: "Quand tu poses une question sur l'élimination, baisse la voix et vérifie que personne d'autre n'écoute : <em>Darf ich Sie kurz etwas Persönliches fragen?</em> La question reste la même, mais le patient répond plus volontiers."
      }
    ],
    grammar: {
      title: "Un modal pour chaque intention",
      note: "Le modal conjugué en <b>première</b> position dans la question fermée, l'infinitif <b>à la fin</b>. <b>müssen nicht</b> = pas nécessaire ; <b>dürfen nicht</b> = interdit.",
      table: {
        head: ["modal", "avec le patient", "à quoi il sert"],
        rows: [
          ["möchten", "Möchten Sie etwas trinken?", "proposer"],
          ["können", "Können Sie gut schlucken?", "demander une capacité"],
          ["müssen", "Müssen Sie zur Toilette?", "demander un besoin"],
          ["dürfen", "Darf ich Ihnen beim Essen helfen?", "demander la permission"],
          ["sollen", "Soll ich Ihnen das Fleisch klein schneiden?", "demander ce que l'autre veut"],
          ["müssen nicht", "Sie müssen sich nicht beeilen.", "pas nécessaire"]
        ]
      },
      examples: [
        { tr: "Voulez-vous boire quelque chose ?", note: "möchten : la forme la plus polie pour proposer" },
        { tr: "Arrivez-vous à bien avaler ?", note: "können : capacité" },
        { tr: "Avez-vous besoin d'aller aux toilettes ?", note: "müssen : besoin ; le verbe de mouvement peut être omis" },
        { tr: "Puis-je vous aider à manger ?", note: "dürfen : demander la permission avant d'intervenir" },
        { tr: "Voulez-vous que je vous coupe la viande en petits morceaux ?", note: "sollen : « je dois... ? », c'est-à-dire « voulez-vous que... ? »" },
        { tr: "Vous n'êtes pas obligé de vous dépêcher.", note: "müssen nicht : pas besoin, ce n'est pas une interdiction" }
      ]
    },
    vocab: [
      "le repas",
      "avaler, déglutir",
      "avaler de travers (ich verschlucke mich : j'avale de travers)",
      "la dysphagie (terme technique)",
      "le trouble de la déglutition (mot du patient)",
      "la miction (terme technique)",
      "le fait d'uriner (Wasser lassen : uriner, mot du patient)",
      "la défécation (terme technique)",
      "les selles, aller à la selle (mot du patient)",
      "l'incontinence (terme technique)",
      "l'incontinence urinaire, la « vessie faible » (mot du patient)",
      "la protection pour incontinence"
    ],
    dialogue: [
      "Madame Keller, le déjeuner est là. Vous voulez manger à table ou au lit ?",
      "À table, s'il vous plaît.",
      "Voulez-vous que je vous coupe la viande en petits morceaux ?",
      "Oui, c'est gentil. Ces derniers temps, j'avale souvent de travers.",
      "Merci de me le dire. Je le transmets à la médecin. Voulez-vous boire quelque chose ?",
      "Un verre d'eau, s'il vous plaît. Et après, je dois aller aux toilettes.",
      "Pas de problème. Sonnez, et je vous accompagne. Vous n'êtes pas obligée de vous dépêcher."
    ],
    culture: {
      title: "Regard allemand : les repas dans le service",
      text: "<p>Dans beaucoup d'hôpitaux et de maisons de retraite allemands, le dîner arrive tôt, souvent entre 17 et 18 heures, et c'est un repas froid : pain, fromage, charcuterie. On l'appelle <i>Abendbrot</i>, littéralement « pain du soir ». Le repas chaud est celui de midi. Les patients choisissent souvent le menu des jours suivants sur une fiche, et ceux qui ont du mal à avaler peuvent recevoir, sur indication, des textures différentes.</p><p>Pour un patient venu d'une autre culture, les horaires et le repas froid du soir peuvent surprendre : demander ce qu'il aime manger fait partie de l'anamnèse, ce n'est pas une politesse en plus.</p>"
    },
    exercises: [
      {
        q: "Tu veux demander au patient s'il a besoin d'aller aux toilettes. Quelle phrase est correcte ?",
        opts: ["Sie zur Toilette müssen?", "Müssen Sie zur Toilette?", "Müssen zur Toilette Sie?"],
        why: "Dans la question fermée, le modal <b>müssen</b> ouvre la phrase et le sujet <i>Sie</i> le suit immédiatement."
      },
      {
        tr: "Le présent de dürfen, à toutes les personnes.",
        why: "<i>Darf, darfst, darf, dürfen, dürft, dürfen</i> : au singulier, la voyelle est <b>a</b>, et la première et la troisième personne n'ont pas de terminaison, comme pour les autres modaux."
      },
      {
        q: "Complète : « ___ Sie gut schlucken? »",
        hint: "modal de la capacité, Sie",
        why: "<b>Können</b> : on demande une capacité. Le modal ouvre la question fermée et l'infinitif <i>schlucken</i> va à la fin."
      },
      {
        q: "Complète avec les modaux.",
        tr: "Puis-je vous aider à manger ? Vous n'êtes pas obligé de vous dépêcher.",
        why: "Dans la première phrase, <i>Darf</i>, <i>Kann</i> et <i>Soll ich</i> conviennent : toutes proposent de l'aide. Dans la seconde, il faut <i>müssen</i> avec <i>nicht</i> : « ce n'est pas nécessaire ». <i>Sie dürfen sich nicht beeilen</i> serait une interdiction."
      },
      {
        q: "Quelles phrases sont correctes ?",
        opts: [
          "Möchten Sie etwas trinken?",
          "Können Sie gut schlucken?",
          "Müssen Sie zur Toilette gehen?",
          "Wollen Sie zu trinken etwas?",
          "Sie müssen nicht sich beeilen."
        ],
        why: "Le modal conjugué ouvre la question et l'infinitif va à la fin. Dans la dernière, le réfléchi <i>sich</i> se place avant <i>nicht</i> : <i>Sie müssen sich nicht beeilen</i>."
      },
      {
        q: "Associe chaque terme technique au mot qu'emploie le patient.",
        pairs: ["die Schluckstörung", "das Wasserlassen", "der Stuhlgang", "die Blasenschwäche"]
      },
      {
        q: "Choisis le bon article défini pour chaque nom.",
        items: ["repas", "trouble de la déglutition", "le fait d'uriner", "selles (aller à la selle)", "incontinence urinaire (mot du patient)", "protection pour incontinence"]
      },
      {
        q: "Remets les mots dans l'ordre.",
        tr: "Voulez-vous manger à table ?",
        why: "<i>Möchten Sie am Tisch essen?</i> Le modal ouvre la question, l'infinitif <i>essen</i> va à la fin ; <i>am</i> vaut <i>an dem</i>, parce que c'est une position."
      },
      {
        q: "Traduis (au patient) : « Avez-vous besoin d'aller aux toilettes ? »",
        why: "<i>Müssen Sie zur Toilette?</i> ou <i>auf die Toilette</i> ; on peut ajouter le verbe <i>gehen</i> ou le sous-entendre."
      },
      {
        q: "Pendant le déjeuner.",
        setting: "Tu aides Mme Keller pendant le repas.",
        lines: [
          { tr: "J'ai soif." },
          { tr: "Demande-lui si elle veut un verre d'eau.", answerTr: "Voulez-vous un verre d'eau ?" },
          { tr: "Je dois aussi aller aux toilettes, mais je suis si lente." },
          { tr: "Réponds que ce n'est pas un problème et qu'elle n'a pas besoin de se dépêcher.", answerTr: "Pas de problème, vous n'êtes pas obligée de vous dépêcher." },
          { tr: "Quand je bois, j'avale souvent de travers." },
          { tr: "Remercie-la et dis que tu le transmets à la médecin.", answerTr: "Merci de me le dire. Je le transmets à la médecin." }
        ]
      },
      {
        tr: "Un verre d'eau, s'il vous plaît. Et après, je dois aller aux toilettes.",
        why: "<i>Toilette</i> vient du français, mais se prononce à l'allemande : l'accent tombe sur <b>let</b>, <b>oi</b> se lit [oa] et le <b>e</b> final s'entend ; dans <i>Wasser</i>, le <b>w</b> est le « v » français ; dans <i>danach</i>, le <b>ch</b> après <b>a</b> est [x], un souffle rauque au fond de la gorge."
      },
      {
        tr: "Puis-je vous aider à manger ?",
        why: "Dans <i>Darf</i>, le <b>r</b> après la voyelle est à peine prononcé ; dans <i>Ihnen</i>, le <b>h</b> ne se prononce pas et allonge le <b>i</b> ; dans <i>helfen</i>, en revanche, le <b>h</b> initial s'aspire, contrairement au français."
      }
    ]
  },
  "lesson:pfl-u03-l4": {
    theme: "Autonomie",
    title: "Seul ou avec de l'aide ?",
    objectives: [
      "demander et décrire ce que le patient arrive à faire seul",
      "employer l'infinitif avec zu après versuchen, helfen, es ist wichtig, es fällt mir schwer",
      "se rappeler qu'après les modaux, l'infinitif ne prend pas zu",
      "reconnaître Thrombose et Prophylaxe et les dire avec les mots du patient"
    ],
    theory: [
      {
        h: "Faire avec le patient, pas à sa place",
        p: "Dans les soins allemands, on parle d'<strong>aktivierende Pflege</strong> : le patient fait lui-même tout ce qu'il peut, et l'infirmière aide là où c'est nécessaire. La question clé est donc <em>Was schaffen Sie allein?</em> et l'invitation <em>Versuchen Sie bitte, das Hemd selbst anzuziehen.</em> Si le patient demande d'aller plus vite, on explique pourquoi : <em>Es ist wichtig, möglichst viel selbst zu machen. So bleiben Sie selbstständig.</em>"
      },
      {
        h: "L'infinitif avec zu",
        p: "Après beaucoup de verbes et d'expressions, l'infinitif prend <strong>zu</strong> et va à la fin, en général après une virgule : <em>Versuchen Sie, allein aufzustehen. Es ist wichtig, sich zu bewegen. Es fällt mir schwer, die Strümpfe anzuziehen.</em> Dans les verbes séparables, <em>zu</em> se place <strong>entre</strong> le préfixe et le verbe : <em>aufstehen → aufzustehen</em>, <em>anziehen → anzuziehen</em>. Après les <strong>modaux</strong>, en revanche, l'infinitif ne prend jamais <em>zu</em> : <em>Sie können allein aufstehen</em>. <em>brauchen</em> à la forme négative fonctionne comme <em>müssen nicht</em>, mais veut <em>zu</em> : <em>Sie brauchen sich nicht zu beeilen.</em>"
      },
      {
        contrast: "Ici, le schéma des deux registres change : <em>Thrombose</em> est un mot que beaucoup de patients allemands connaissent et emploient, comme « thrombose » en France. Le mot du patient <em>Blutgerinnsel</em> désigne le caillot, c'est-à-dire le thrombus, et non la maladie : ce ne sont pas des synonymes exacts, et en transmission on dit <em>Thrombose</em>. <em>Prophylaxe</em> est transparent pour un francophone (« prophylaxie »), alors que le patient dit <em>Vorbeugung</em> ou emploie le verbe <em>vorbeugen</em>. Et les bas de contention, <em>Kompressionsstrümpfe</em> dans le dossier, beaucoup de patients les appellent <em>Thrombosestrümpfe</em>, comme on dit « bas anti-thrombose ». L'infinitif avec <em>zu</em> correspond souvent au français « de » ou « à » devant l'infinitif : « essayez de vous habiller », <em>versuchen Sie, sich anzuziehen</em> ; après « pouvoir », « devoir », « vouloir », le français ne met rien, exactement comme l'allemand après les modaux."
      },
      {
        trap: "<em>selbstständig</em> veut dire « autonome » dans le service, mais dans le monde du travail <em>selbstständig sein</em> signifie être indépendant, à son compte. Le verbe <em>vorbeugen</em> a deux sens : <em>einer Thrombose vorbeugen</em>, c'est la prévenir, alors que <em>Beugen Sie sich bitte vor</em> veut dire « penchez-vous en avant ». Et <em>der Strumpf</em> est le bas ou la chaussette, pas la chaussure : les chaussures sont <em>die Schuhe</em>."
      },
      {
        tip: "Avant d'aider, demande toujours <em>Was schaffen Sie allein?</em> et laisse le temps d'essayer. Le temps que tu passes aujourd'hui à attendre, c'est l'autonomie que le patient gagne, et la phrase <em>Sie brauchen sich nicht zu beeilen</em> suffit souvent pour qu'il retrouve un geste."
      }
    ],
    grammar: {
      title: "zu ou rien ?",
      note: "Après un <b>modal</b>, l'infinitif est <b>sans zu</b>. Après <b>versuchen</b>, <b>helfen</b>, <b>es ist wichtig</b>, <b>es fällt mir schwer</b> et <b>nicht brauchen</b>, l'infinitif prend <b>zu</b>, placé entre le préfixe et le verbe dans les séparables.",
      table: {
        head: ["ce qui régit l'infinitif", "exemple", "zu ?"],
        rows: [
          ["können, müssen, dürfen", "Sie können sich selbst waschen.", "non"],
          ["versuchen", "Versuchen Sie, sich selbst anzuziehen.", "oui"],
          ["es fällt mir schwer", "Es fällt mir schwer, allein aufzustehen.", "oui"],
          ["es ist wichtig", "Es ist wichtig, sich regelmäßig zu bewegen.", "oui"],
          ["nicht brauchen", "Sie brauchen sich nicht zu beeilen.", "oui"]
        ]
      },
      examples: [
        { tr: "Essayez de vous habiller seul, s'il vous plaît.", note: "anziehen est séparable : anzuziehen" },
        { tr: "J'ai du mal à me lever seul.", note: "es fällt mir schwer + zu" },
        { tr: "Je vous aide à mettre les bas de contention.", note: "helfen + datif + zu" },
        { tr: "Il est important de bouger régulièrement.", note: "le réfléchi sich reste avant zu" },
        { tr: "Les dents, vous pouvez vous les brosser vous-même.", note: "après le modal können : pas de zu" },
        { tr: "Vous n'avez pas besoin de vous dépêcher.", note: "nicht brauchen + zu = müssen nicht" }
      ]
    },
    vocab: [
      "autonome, seul",
      "l'autonomie",
      "l'aide",
      "le soutien, l'aide",
      "essayer, tenter",
      "y arriver, réussir",
      "se lever",
      "la thrombose",
      "le caillot de sang, le thrombus (mot du patient)",
      "la prophylaxie (terme technique)",
      "la prévention (mot du patient)",
      "le bas de contention"
    ],
    dialogue: [
      "Monsieur Brandt, qu'est-ce que vous arrivez déjà à faire seul aujourd'hui ?",
      "Me laver, j'y arrive seul. Mais j'ai du mal à mettre les bas.",
      "Pour ça, je vous aide volontiers. La chemise, essayez de la mettre vous-même, s'il vous plaît.",
      "Pourquoi vous ne le faites pas pour moi ? Ça irait plus vite.",
      "Il est important de faire vous-même le plus possible. Comme ça, vous restez autonome.",
      "Bon, d'accord. Et aujourd'hui, je dois encore marcher ?",
      "Oui, nous allons ensemble jusqu'à la fenêtre. Bouger, c'est une bonne prévention contre la thrombose."
    ],
    culture: {
      title: "Regard allemand : aktivierende Pflege",
      text: "<p>L'idée que les soins doivent conserver et entraîner les capacités du patient, au lieu de les remplacer, est centrale dans la formation infirmière allemande et porte un nom : <i>aktivierende Pflege</i>. En pratique, cela veut dire laisser au patient le peigne, le gant de toilette, le temps de boutonner sa chemise, même quand le faire à sa place serait plus rapide.</p><p>Dans les documents, tu trouveras souvent le mot <i>Ressourcen</i> : ce sont les capacités que le patient a encore et que le plan de soins veut préserver. Tu le retrouveras dans l'unité sur les transmissions et le rapport de soins.</p>"
    },
    exercises: [
      {
        q: "Tu veux dire au patient : « Essayez de vous habiller seul. » Quelle phrase est correcte ?",
        opts: [
          "Versuchen Sie, sich selbst anziehen.",
          "Versuchen Sie, sich selbst anzuziehen.",
          "Versuchen Sie, sich selbst zu anziehen."
        ],
        why: "Après <i>versuchen</i>, l'infinitif prend <b>zu</b>, et dans les verbes séparables <i>zu</i> se place entre le préfixe et le verbe : <b>anzuziehen</b>, en un seul mot."
      },
      {
        q: "Complète : « Es fällt mir schwer, allein ___. »",
        hint: "aufstehen avec zu",
        why: "<b>aufzustehen</b> : <i>aufstehen</i> est séparable, donc <i>zu</i> entre entre <i>auf</i> et <i>stehen</i>."
      },
      {
        q: "Complète : la première phrase a un modal, la seconde non.",
        tr: "Vous pouvez vous laver seule. Essayez aussi, s'il vous plaît, de vous habiller seule.",
        why: "<i>Sie können sich selbst waschen</i> : après le modal <i>können</i>, l'infinitif est sans <i>zu</i>. <i>Versuchen Sie bitte, sich auch selbst anzuziehen</i> : après <i>versuchen</i>, il faut <i>zu</i>."
      },
      {
        q: "Quelles phrases sont correctes ?",
        opts: [
          "Ich versuche, allein zu gehen.",
          "Ich kann allein zu gehen.",
          "Es ist wichtig, sich zu bewegen.",
          "Sie müssen nicht sofort aufzustehen.",
          "Ich helfe Ihnen, aufzustehen."
        ],
        why: "<i>versuchen</i>, <i>es ist wichtig</i> et <i>helfen</i> veulent l'infinitif avec <i>zu</i>. Après les modaux <i>können</i> et <i>müssen</i>, l'infinitif est sans <i>zu</i> : <i>Ich kann allein gehen</i>, <i>Sie müssen nicht sofort aufstehen</i>."
      },
      {
        q: "Associe chaque terme technique au mot qu'emploie le patient.",
        pairs: ["das Blutgerinnsel", "die Vorbeugung", "das Druckgeschwür", "die Gelenkversteifung"]
      },
      {
        q: "Choisis le bon article défini pour chaque nom.",
        items: ["thrombose", "caillot de sang", "prophylaxie", "prévention", "bas de contention", "autonomie"]
      },
      {
        q: "Remets les mots dans l'ordre.",
        tr: "Il est important de bouger régulièrement.",
        why: "<i>Es ist wichtig, sich regelmäßig zu bewegen.</i> Après la virgule, l'infinitif avec <i>zu</i> va à la fin ; <i>sich</i> et l'adverbe se placent avant."
      },
      {
        q: "Traduis (c'est le patient qui parle) : « J'y arrive seul. »",
        why: "<i>Das schaffe ich allein</i> ou <i>Ich schaffe das allein</i>. <i>schaffen</i> est le verbe typique pour « y arriver » ; <i>alleine</i> est la variante parlée."
      },
      {
        tr: "Le présent de können, à toutes les personnes.",
        why: "<i>Kann, kannst, kann, können, könnt, können</i> : au singulier, la voyelle est <b>a</b>, sans Umlaut, et la première et la troisième personne n'ont pas de terminaison."
      },
      {
        q: "Le patient veut aller vite.",
        setting: "M. Brandt voudrait que tu l'habilles.",
        lines: [
          { tr: "Vous ne pouvez pas simplement m'habiller ? Ça irait plus vite." },
          { tr: "Réponds que tu l'aides volontiers, mais qu'il essaie d'abord de mettre sa chemise seul.", answerTr: "Je vous aide volontiers, mais essayez d'abord de mettre votre chemise seul." },
          { tr: "Mais les bas, je n'y arrive pas." },
          { tr: "Réponds que ce n'est pas un problème et que pour les bas, c'est toi qui l'aides.", answerTr: "Pas de problème, pour les bas, je vous aide." },
          { tr: "Je dois encore marcher aujourd'hui ?" },
          { tr: "Réponds que oui : il est important de bouger tous les jours.", answerTr: "Oui, il est important de bouger tous les jours." }
        ]
      },
      {
        tr: "Il est important de faire vous-même le plus possible. Comme ça, vous restez autonome.",
        why: "Dans <i>wichtig</i>, le <b>ch</b> et le <b>g</b> final se prononcent tous deux [ç] ; dans <i>möglichst</i>, le <b>ö</b> est un « eu » long ; dans <i>selbstständig</i>, le <b>st</b> de <i>ständig</i> est [ʃt], « cht »."
      },
      {
        tr: "Essayez de vous habiller seul, s'il vous plaît.",
        why: "Dans <i>Versuchen</i>, le <b>v</b> se prononce [f] et l'accent tombe sur <b>su</b> ; dans <i>anzuziehen</i>, les deux <b>z</b> sont [ts] et le <b>ie</b> est long, avec le <b>h</b> muet."
      }
    ]
  },
  "lesson:pfl-u03-test": {
    theme: "Évaluation",
    title: "Test : Soins de base et mobilisation",
    objectives: [
      "vérifier les pronominaux de la toilette, wohin? et wo? avec les prépositions, les modaux avec le patient et les paires Fachsprache / Laiensprache"
    ],
    theory: [
      {
        p: "Onze questions sur l'ensemble de l'unité. On réussit avec 70 %. Les situations cliniques sont des exemples didactiques : comment et avec quelles aides on accompagne un patient, c'est l'évaluation infirmière et le protocole de l'établissement qui le décident."
      }
    ],
    exercises: [
      {
        q: "Le patient est assis au bord du lit. Comment le décris-tu ?",
        opts: ["Er sitzt an die Bettkante.", "Er sitzt an der Bettkante.", "Er setzt an der Bettkante."],
        why: "<i>sitzen</i> décrit une position (<i>wo?</i>), donc <i>an</i> régit le datif : <b>an der</b> Bettkante."
      },
      {
        q: "Complète : « Ich wasche ___ die Hände. »",
        hint: "ich, avec un complément",
        why: "<b>mir</b> : il y a un complément, <i>die Hände</i>, donc le réfléchi passe au datif."
      },
      {
        q: "Complète : « Ich stelle den Rollator neben ___ Bett. »",
        hint: "wohin? das Bett à l'accusatif",
        why: "<b>das</b> : <i>stellen</i> indique un mouvement vers un but, donc <i>neben</i> régit l'accusatif."
      },
      {
        tr: "Le présent de sich anziehen, à toutes les personnes.",
        why: "<i>Ziehe mich an, ziehst dich an, zieht sich an, ziehen uns an, zieht euch an, ziehen sich an</i> : le réfléchi suit le verbe et le préfixe <i>an</i> va à la fin."
      },
      {
        q: "Associe chaque terme technique au mot qu'emploie le patient.",
        pairs: ["die Schluckstörung", "die Blasenschwäche", "das Druckgeschwür", "die Vorbeugung"]
      },
      {
        q: "Quelles phrases sont correctes avec un patient ?",
        opts: [
          "Sie müssen sich nicht beeilen.",
          "Wir legen Sie auf der Seite.",
          "Können Sie gut schlucken?",
          "Es fällt mir schwer, allein aufzustehen.",
          "Ich kann allein aufzustehen."
        ],
        why: "<i>legen</i> indique un mouvement et veut l'accusatif : <i>auf die Seite</i>. Après le modal <i>können</i>, l'infinitif est sans <i>zu</i> : <i>Ich kann allein aufstehen</i>."
      },
      {
        q: "Complète la phrase.",
        tr: "Maintenant, nous vous tournons sur le côté. Vous êtes bien installé ?",
        why: "<i>Wir legen Sie jetzt auf die Seite</i> : mouvement, accusatif. <i>Liegen Sie bequem?</i> : question fermée sur la position, avec le verbe <i>liegen</i> en première position."
      },
      {
        q: "Remets les mots dans l'ordre.",
        tr: "Puis-je vous aider à manger ?",
        why: "<i>Darf ich Ihnen beim Essen helfen?</i> Le modal ouvre la question, <i>helfen</i> à la fin, la personne aidée au datif, <i>Ihnen</i>."
      },
      {
        q: "Choisis le bon article défini pour chaque nom.",
        items: ["gant de toilette", "bord du lit", "selles (aller à la selle)", "escarre (mot du patient)", "caillot de sang", "toilette intime"]
      },
      {
        tr: "Le visage et les bras, vous les lavez vous-même. Ensuite, nous vous asseyons au bord du lit.",
        why: "Dans <i>Gesicht</i>, le <b>ch</b> est [ç] ; dans <i>Arme</i>, le <b>r</b> est à peine prononcé ; dans <i>Bettkante</i>, l'accent tombe sur <b>Bett</b>."
      },
      {
        tr: "Avez-vous besoin d'aller aux toilettes ?",
        why: "Dans <i>Müssen</i>, le <b>ü</b> est le « u » français, bref ; dans <i>zur</i>, le <b>z</b> est [ts] ; dans <i>Toilette</i>, l'accent tombe sur <b>let</b>."
      }
    ]
  }
});
