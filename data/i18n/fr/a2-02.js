/* ============================================================
   Textes dans la langue de l'élève (fr) pour data/core/a2-02.js, unité a2-u05.
   Les clés renvoient aux id de la couche neutre ; les tableaux se
   joignent par index, leur longueur doit donc correspondre à core.
   Vérifié par scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("fr", {
  "unit:a2-u05": {
    title: "Maison et quartier",
    grammarNote: "adjectif après ein, kein et le possessif · stellen/stehen, legen/liegen · genre des mots composés · Könnten Sie ...?"
  },
  "lesson:a2-u05-l1": {
    theme: "Chercher un logement",
    title: "Je cherche un appartement lumineux",
    objectives: [
      "lire une annonce de location avec des adjectifs devant le nom",
      "choisir la terminaison de l'adjectif après ein, kein et les possessifs",
      "décrire un logement avec hell, ruhig, günstig, möbliert"
    ],
    theory: [
      {
        h: "L'adjectif devant le nom",
        p: "Devant le nom, l'adjectif prend une <strong>terminaison</strong> qui indique le genre, le nombre et le cas. Après <em>ein, kein</em> et les possessifs (<em>mein, dein, sein ...</em>), la règle pratique est unique : là où <em>ein</em> <strong>n'a pas de terminaison</strong> (masculin nominatif, neutre nominatif et accusatif), c'est l'adjectif qui la porte, <strong>-er</strong> ou <strong>-es</strong>. Au féminin nominatif et accusatif, l'adjectif prend <strong>-e</strong> ; dans tous les autres cas, datif compris, <strong>-en</strong>. <em>Ich suche eine helle Wohnung. Die Wohnung hat einen großen Balkon. Das ist ein altes Haus.</em>"
      },
      {
        contrast: "En français, l'adjectif se place le plus souvent <strong>après</strong> le nom (<em>un appartement lumineux</em>), sauf quelques adjectifs courants comme <em>petit, grand, vieux, nouveau</em>, et il s'accorde en genre et en nombre, y compris après <em>être</em> : <em>la cuisine est claire</em>. En allemand, il se place <strong>avant</strong> le nom et porte en plus le cas : <em>eine helle Wohnung</em> (nominatif ou accusatif), <em>einen großen Balkon</em> (accusatif masculin). Après <em>sein</em>, en revanche, il reste invariable : <em>Die Wohnung ist hell</em>, sans terminaison. Attention au genre : <em>appartement</em> est masculin en français, mais <em>die Wohnung</em> est féminin ; « un appartement lumineux » se dit donc <em>eine helle Wohnung</em>, et non « ein heller Wohnung »."
      },
      {
        trap: "L'erreur la plus fréquente est de confondre <strong>-en</strong> et <strong>-er</strong>. <em>-er</em> n'apparaît qu'au masculin nominatif (<em>ein neuer Balkon</em>) ; dès l'accusatif, il devient <em>-en</em> (<em>einen neuen Balkon</em>). Et <em>Wohnung</em> et <em>Haus</em> ne recouvrent pas le français « maison » : <em>die Wohnung</em> est l'appartement où l'on habite, <em>das Haus</em> est le bâtiment ou la maison entière."
      },
      {
        tip: "<em>dunkel</em> perd son <em>e</em> devant la terminaison : <em>eine dunkle Küche, ein dunkles Zimmer</em>. Avec les possessifs, la règle est la même qu'avec <em>ein</em> : <em>mein neuer Nachbar, meine neue Wohnung</em>. Au pluriel, après <em>kein</em> et les possessifs, l'adjectif prend <em>-en</em> : <em>keine neuen Möbel</em>."
      }
    ],
    grammar: {
      title: "Adjectif après ein, kein et possessif",
      note: "Là où <b>ein</b> n'a pas de terminaison, l'adjectif la porte (<b>-er, -es</b>) ; féminin nominatif et accusatif <b>-e</b> ; dans les autres cas <b>-en</b>.",
      table: {
        head: ["cas", "masculin", "féminin", "neutre"],
        rows: [
          ["nominatif", "ein neuer Balkon", "eine neue Küche", "ein neues Zimmer"],
          ["accusatif", "einen neuen Balkon", "eine neue Küche", "ein neues Zimmer"],
          ["datif", "einem neuen Balkon", "einer neuen Küche", "einem neuen Zimmer"]
        ]
      },
      examples: [
        { tr: "Je cherche un appartement lumineux.", note: "Wohnung est féminin : eine helle" },
        { tr: "L'appartement a un grand balcon.", note: "accusatif masculin : einen großen" },
        { tr: "C'est une vieille maison.", note: "neutre nominatif : ein altes" },
        { tr: "Nous n'avons pas de cuisine neuve.", note: "kein + féminin : keine neue" },
        { tr: "C'est mon nouveau voisin.", note: "possessif comme ein : mein neuer" },
        { tr: "Elle habite dans un petit appartement.", note: "datif féminin : einer kleinen" }
      ]
    },
    vocab: [
      "l'appartement, le logement",
      "le loyer",
      "le balcon",
      "le voisin",
      "l'annonce",
      "lumineux, clair",
      "sombre",
      "calme",
      "bon marché, avantageux",
      "meublé",
      "chercher",
      "louer, prendre en location"
    ],
    exercises: [
      {
        q: "Comment dis-tu « Je cherche un appartement lumineux » ?",
        opts: ["Ich suche eine helle Wohnung.", "Ich suche ein helle Wohnung.", "Ich suche eine heller Wohnung."],
        why: "<i>Wohnung</i> est féminin : après <i>eine</i>, l'adjectif prend <b>-e</b>, donc <i>helle</i>."
      },
      {
        q: "Complète avec la bonne terminaison : « Das ist ein ___ Haus. » (alt)",
        opts: ["alter", "altes", "alten"],
        why: "<i>Haus</i> est neutre et au nominatif <i>ein</i> n'a pas de terminaison : l'adjectif la porte, <b>-es</b>."
      },
      {
        q: "Quelle phrase est correcte ?",
        opts: [
          "Wir wohnen in einer ruhige Straße.",
          "Wir wohnen in einer ruhigen Straße.",
          "Wir wohnen in einer ruhiger Straße."
        ],
        why: "Après <i>in</i> avec <i>wo ?</i>, le cas est le datif, et le datif veut <b>-en</b> : <i>in einer ruhigen Straße</i>."
      },
      {
        q: "Complète : « Das ist meine ___ Wohnung. » (neu, avec la terminaison)",
        hint: "possessif + féminin nominatif",
        why: "Après <i>meine</i>, le féminin nominatif a <b>-e</b> : <i>neue</i>."
      },
      {
        q: "Associe chaque adjectif à son sens.",
        pairs: ["lumineux", "sombre", "calme", "avantageux"]
      },
      {
        tr: "Je cherche un appartement calme et pas cher.",
        why: "<i>Ich suche eine ruhige und günstige Wohnung</i> : deux adjectifs reliés par <i>und</i> prennent la même terminaison, <b>-e</b>. L'ordre inverse convient aussi."
      },
      {
        q: "Complète la phrase.",
        tr: "L'appartement a un grand balcon et une cuisine neuve.",
        why: "<i>Balkon</i> est masculin à l'accusatif : <b>einen großen</b> Balkon. <i>Küche</i> est féminin : <b>eine neue</b> Küche."
      },
      {
        tr: "Nous cherchons un appartement bon marché.",
        why: "Le verbe conjugué est en deuxième position : <i>Wir suchen eine günstige Wohnung</i>. L'adjectif <i>günstige</i> prend <b>-e</b> parce que <i>Wohnung</i> est féminin."
      },
      {
        tr: "L'appartement a un grand balcon et une cuisine neuve.",
        why: "Dans <i>großen</i>, le <b>ß</b> est un <b>s</b> sourd et le <b>o</b> est long ; dans <i>Küche</i>, le <b>ü</b> est bref et ouvert [ʏ], comme un « u » français plus relâché, et le <b>ch</b> est [ç], un souffle plus doux que [x] : <i>Küche</i> [ˈkʏçə]."
      },
      {
        tr: "Je cherche un appartement lumineux et calme.",
        why: "Dans <i>Wohnung</i>, le <b>h</b> ne se prononce pas et allonge le <b>o</b> ; dans <i>helle</i>, le <b>h</b> initial est un léger souffle et le <b>ll</b> indique un <b>e</b> bref."
      }
    ]
  },
  "lesson:a2-u05-l2": {
    theme: "Aménager",
    title: "Où est-ce que je mets le canapé ?",
    objectives: [
      "employer wohin ? avec l'accusatif et wo ? avec le datif",
      "choisir entre stellen/stehen et legen/liegen",
      "dire où l'on met les meubles et où ils se trouvent"
    ],
    theory: [
      {
        h: "wohin ? ou wo ?",
        p: "Les prépositions <em>in, an, auf, vor, hinter, neben, über, unter, zwischen</em> admettent deux cas. Si la phrase indique la <strong>destination</strong> (<strong>wohin ?</strong>, vers où ?), le cas est l'<strong>accusatif</strong> ; si elle indique le <strong>lieu</strong> (<strong>wo ?</strong>, où ?), c'est le <strong>datif</strong>, même quand il y a un mouvement dans ce lieu (<em>Ich laufe im Garten</em>). <em>Ich stelle das Sofa an die Wand</em> (wohin ?), <em>Das Sofa steht an der Wand</em> (wo ?). Contractions : <em>in das → ins, an das → ans, auf das → aufs, in dem → im, an dem → am</em>."
      },
      {
        p: "L'allemand choisit le verbe selon la position de l'objet. <strong>stellen / stehen</strong> pour ce qui est debout (<em>die Lampe, der Schrank, das Regal</em>), <strong>legen / liegen</strong> pour ce qui est couché à plat (<em>das Buch, der Teppich</em>). <em>stellen</em> et <em>legen</em> indiquent une destination et répondent à <em>wohin ?</em> ; <em>stehen</em> et <em>liegen</em> indiquent un lieu et répondent à <em>wo ?</em>. Le cas concerne le complément de lieu introduit par une préposition à double régime (<em>auf, in, an, unter</em>...) : accusatif pour <em>wohin ?</em>, datif pour <em>wo ?</em>."
      },
      {
        contrast: "Le français emploie souvent un seul verbe, <em>mettre</em>, et la même préposition pour l'état et pour le mouvement : <em>je mets le livre sur la table, le livre est sur la table</em>. L'allemand distingue deux fois : par le <strong>verbe</strong> (<em>legen</em> ou <em>stellen</em>, <em>liegen</em> ou <em>stehen</em>) et par le <strong>cas</strong> (accusatif ou datif) : <em>Ich lege das Buch auf den Tisch. Das Buch liegt auf dem Tisch.</em> Le français a bien <em>poser</em>, <em>placer</em> ou <em>ranger</em>, mais sans cette obligation de choisir selon que l'objet est debout ou à plat."
      },
      {
        trap: "Ne traduis pas « mettre » par un seul verbe. <em>Ich stelle das Buch auf den Tisch</em> se dit si le livre est debout, <em>Ich lege das Buch auf den Tisch</em> s'il est à plat : cela dépend de l'objet et de sa position, pas du mot français. Avec <em>stehen</em> et <em>liegen</em>, qui indiquent un lieu (<em>wo ?</em>), le complément avec préposition à double régime se met au datif : <em>Die Lampe steht auf dem Tisch</em>, et non « auf den Tisch »."
      }
    ],
    grammar: {
      title: "wohin ? + accusatif, wo ? + datif",
      note: "Avec une préposition à double régime : <b>wohin ?</b> (destination, avec stellen, legen) = accusatif ; <b>wo ?</b> (lieu, avec stehen, liegen) = datif.",
      table: {
        head: ["question", "verbe", "exemple"],
        rows: [
          ["wohin ? (accusatif)", "stellen", "Ich stelle die Lampe in die Ecke."],
          ["wo ? (datif)", "stehen", "Die Lampe steht in der Ecke."],
          ["wohin ? (accusatif)", "legen", "Ich lege den Teppich unter den Tisch."],
          ["wo ? (datif)", "liegen", "Der Teppich liegt unter dem Tisch."]
        ]
      },
      examples: [
        { tr: "Je mets le canapé contre le mur.", note: "wohin ? : an die Wand est à l'accusatif" },
        { tr: "Le canapé est contre le mur.", note: "stehen + datif : an der Wand" },
        { tr: "Je mets le tapis sous la table.", note: "wohin ? : unter den Tisch est à l'accusatif" },
        { tr: "Le tapis est sous la table.", note: "liegen + datif : unter dem Tisch" },
        { tr: "Où mets-tu la lampe ? Dans le coin.", note: "wohin ? appelle l'accusatif : in die Ecke" },
        { tr: "La lampe est dans le coin.", note: "wo ? appelle le datif : in der Ecke" }
      ]
    },
    vocab: [
      "mettre (debout)",
      "se trouver (debout)",
      "mettre (à plat)",
      "se trouver (à plat)",
      "le canapé",
      "l'armoire, le meuble",
      "l'étagère",
      "la lampe",
      "le tapis",
      "le tableau",
      "le mur",
      "le coin"
    ],
    exercises: [
      {
        q: "Comment dis-tu « Je mets le canapé contre le mur » ?",
        opts: ["Ich stelle das Sofa an der Wand.", "Ich stelle das Sofa an die Wand.", "Ich stehe das Sofa an die Wand."],
        why: "Il y a une destination (<i>wohin ?</i>) : <i>stellen</i> et l'accusatif, <b>an die Wand</b>."
      },
      {
        q: "Choisis le verbe : « Der Schrank ___ in der Ecke. »",
        opts: ["steht", "stellt", "legt"],
        why: "L'armoire est debout et la phrase indique où elle se trouve (<i>in der Ecke</i>, datif) : <b>steht</b>."
      },
      {
        q: "Complète : « Ich lege das Buch auf ___ Tisch. »",
        opts: ["dem", "den", "der"],
        why: "<i>Legen</i> indique une destination (<i>wohin ?</i>), donc l'accusatif : <i>Tisch</i> est masculin, <b>den</b> Tisch."
      },
      {
        q: "Quelles phrases sont correctes, si stellen et legen doivent dire où l'objet va se retrouver (wohin ?) ?",
        opts: [
          "Ich stelle die Lampe in die Ecke.",
          "Die Lampe steht in der Ecke.",
          "Ich lege das Buch auf dem Tisch.",
          "Der Teppich liegt unter dem Tisch.",
          "Ich stelle das Regal an der Wand."
        ],
        why: "La phrase 3 veut l'accusatif (<i>auf den Tisch</i>), la phrase 5 aussi (<i>an die Wand</i>) : <i>legen</i> et <i>stellen</i> répondent à <i>wohin ?</i>."
      },
      {
        q: "Complète : « Ich stelle das Sofa an ___ Wand. » (article défini)",
        hint: "wohin ? féminin accusatif",
        why: "<i>Stellen</i> + <i>wohin ?</i> veut l'accusatif, et <i>Wand</i> est féminin : <b>die</b>."
      },
      {
        q: "Complète : « Der Teppich ___ unter dem Tisch. » (liegen, troisième personne du singulier)",
        hint: "état, verbe de position",
        why: "<i>Liegen</i> à la troisième personne du singulier : <b>liegt</b>. <i>Unter dem Tisch</i> est au datif et répond à <i>wo ?</i>."
      },
      {
        tr: "Je mets la lampe dans le coin.",
        why: "<i>Ich stelle die Lampe in die Ecke</i> : la lampe est debout, donc <i>stellen</i>, et <i>in die Ecke</i> est à l'accusatif."
      },
      {
        q: "Complète la phrase.",
        tr: "Je mets l'étagère contre le mur. Maintenant, elle est là.",
        why: "<i>Stelle</i> indique la destination, <i>steht</i> le lieu : le premier verbe répond à <i>wohin ?</i> (accusatif), le second à <i>wo ?</i> (datif)."
      },
      {
        tr: "Je mets le canapé contre le mur et le tapis sous la table.",
        why: "Dans <i>Teppich</i>, le <b>pp</b> indique un <b>e</b> bref et le <b>ch</b> après <b>i</b> est [ç] ; dans <i>unter</i>, le <b>u</b> est bref et le <b>t</b> est net."
      },
      {
        tr: "L'étagère est contre le mur et le tapis est sous la table.",
        why: "Dans <i>Regal</i>, l'accent tombe sur <b>gal</b> ; <i>Wand</i> commence par <b>W</b>, qui se lit comme le « v » français."
      }
    ]
  },
  "lesson:a2-u05-l3": {
    theme: "Les pièces",
    title: "le salon, la cuisine",
    objectives: [
      "former et lire les noms composés",
      "déduire le genre à partir du dernier élément du composé",
      "nommer les pièces et les éléments de la maison"
    ],
    theory: [
      {
        h: "Le genre suit le dernier élément",
        p: "L'allemand colle deux noms (ou un verbe et un nom) en un seul mot, et c'est le <strong>dernier élément</strong> qui décide du genre : <em>wohnen + das Zimmer = das Wohnzimmer</em>, <em>die Küche + der Tisch = der Küchentisch</em>, <em>das Haus + die Tür = die Haustür</em>. Le premier élément précise le sens mais ne change pas l'article. Parfois une lettre de liaison apparaît : les noms en <em>-ung</em> prennent en général un <em>-s</em>, <em>die Wohnung + die Tür = die Wohnungstür</em>."
      },
      {
        contrast: "Le français relie en général par une préposition : <em>chambre à coucher, salle de bains, porte d'entrée</em>. L'allemand écrit tout en un seul mot, et le genre peut ne pas coïncider avec celui du français : <em>la chambre</em> est féminin, <em>das Schlafzimmer</em> est neutre (parce que <em>das Zimmer</em>) ; <em>la salle de bains</em> est féminin, <em>das Badezimmer</em> est neutre ; <em>le salon</em> est masculin, <em>das Wohnzimmer</em> est neutre. En revanche, <em>la cuisine</em> et <em>die Küche</em>, <em>la machine à laver</em> et <em>die Waschmaschine</em>, <em>le frigo</em> et <em>der Kühlschrank</em> ont le même genre."
      },
      {
        trap: "Le premier élément ne décide pas du genre : <em>die Haustür</em> est féminin bien que <em>das Haus</em> soit neutre, et <em>der Küchentisch</em> est masculin bien que <em>die Küche</em> soit féminin. Pour connaître l'article, regarde toujours la <strong>fin</strong> du mot. Devant un long composé, découpe-le de droite à gauche."
      },
      {
        tip: "Pour comprendre un nouveau composé, lis-le par la fin : <em>der Kühlschrank</em> est un <em>Schrank</em> (armoire) qui refroidit (<em>kühlen</em>). Pour chaque pièce, apprends le nom entier avec son article : <em>das Wohnzimmer, das Schlafzimmer, das Badezimmer, die Küche</em>."
      }
    ],
    grammar: {
      title: "Les noms composés et leur genre",
      note: "Le genre est celui du <b>dernier</b> élément : <b>das</b> Zimmer, donc <b>das</b> Wohnzimmer. Après -ung, un <b>-s</b> apparaît souvent : Wohnung<b>s</b>tür.",
      table: {
        head: ["composé", "formation", "sens"],
        rows: [
          ["das Wohnzimmer", "wohnen + das Zimmer", "salon"],
          ["das Schlafzimmer", "schlafen + das Zimmer", "chambre à coucher"],
          ["die Haustür", "das Haus + die Tür", "porte d'entrée"],
          ["der Küchentisch", "die Küche + der Tisch", "table de cuisine"],
          ["die Wohnungstür", "die Wohnung + s + die Tür", "porte de l'appartement"]
        ]
      },
      examples: [
        { tr: "Le salon est grand et lumineux.", note: "das Zimmer : neutre, donc das Wohnzimmer" },
        { tr: "La porte d'entrée est neuve.", note: "die Tür : féminin, donc die Haustür" },
        { tr: "La clé est sur la table de la cuisine.", note: "datif avec wo ? : auf dem Küchentisch" },
        { tr: "Le frigo est dans la cuisine.", note: "der Kühlschrank : comme der Schrank" },
        { tr: "Nous avons une petite salle de bains.", note: "ein kleines Badezimmer : neutre, -es" },
        { tr: "La machine à laver est à la cave.", note: "im Keller : datif contracté" }
      ]
    },
    vocab: [
      "le salon",
      "la chambre à coucher",
      "la salle de bains",
      "la cuisine",
      "le couloir, l'entrée",
      "la cave",
      "le jardin",
      "la porte d'entrée",
      "la porte de l'appartement",
      "le réfrigérateur",
      "la machine à laver",
      "la clé"
    ],
    exercises: [
      {
        q: "Choisis l'article défini correct pour chaque nom.",
        items: ["salon", "cuisine", "porte d'entrée", "réfrigérateur", "chambre à coucher", "machine à laver"]
      },
      {
        q: "Associe chaque composé à son sens.",
        pairs: ["salon", "chambre à coucher", "salle de bains", "porte d'entrée"]
      },
      {
        q: "Pourquoi « Schlafzimmer » est-il neutre ?",
        opts: [
          "Parce que Zimmer est neutre et que le genre suit le dernier élément.",
          "Parce que schlafen est un verbe.",
          "Parce qu'il se termine par -er."
        ],
        why: "Le genre d'un composé est celui du dernier élément : <i>das Zimmer</i>, donc <b>das</b> Schlafzimmer."
      },
      {
        q: "Complète : « Die Küche + der Schrank = ___ Küchenschrank » (article défini)",
        hint: "regarde le dernier élément",
        why: "Le dernier élément est <i>der Schrank</i> : le composé est masculin, <b>der</b> Küchenschrank."
      },
      {
        q: "Complète le composé avec la lettre de liaison : « Wohnung + Tür = Wohnung___tür »",
        hint: "une seule lettre",
        why: "Après <i>-ung</i>, un <b>-s</b> apparaît en général : <i>die Wohnungstür</i>."
      },
      {
        tr: "Le salon est grand et lumineux.",
        why: "<i>Das Wohnzimmer ist groß und hell</i> : après <i>sein</i>, les adjectifs ne prennent pas de terminaison. L'ordre inverse convient aussi."
      },
      {
        q: "Complète la phrase.",
        tr: "La machine à laver est à la cave et le frigo est dans la cuisine.",
        why: "<i>Waschmaschine</i> est féminin (<i>die</i>), <i>Keller</i> prend <i>im</i> (datif contracté), <i>Küche</i> veut <i>in der</i>."
      },
      {
        tr: "La clé est sur la table de la cuisine.",
        why: "<i>Der Schlüssel liegt auf dem Küchentisch</i> : la clé est à plat (<i>liegen</i>), l'état veut le datif, <i>auf dem</i>."
      },
      {
        tr: "Le frigo est dans la cuisine et la machine à laver est à la cave.",
        why: "Dans <i>Küche</i>, le <b>ü</b> est bref et ouvert [ʏ] et le <b>ch</b> est [ç] ([ˈkʏçə]) ; dans <i>Keller</i>, le <b>K</b> est plein et le <b>e</b> bref."
      },
      {
        tr: "La chambre et la salle de bains sont petites, mais le salon est grand.",
        why: "Dans <i>Schlafzimmer</i>, le <b>sch</b> est [ʃ] et l'accent tombe sur <b>Schlaf</b> ; dans <i>Badezimmer</i>, le <b>a</b> est long."
      }
    ]
  },
  "lesson:a2-u05-l4": {
    theme: "Une panne à la maison",
    title: "Le chauffage est en panne",
    objectives: [
      "signaler une panne à l'administration ou au gardien",
      "formuler une demande polie avec Könnten Sie ... ?",
      "garder l'infinitif en fin de phrase"
    ],
    theory: [
      {
        h: "Könnten Sie ... ?",
        p: "Pour demander quelque chose à quelqu'un qu'on ne connaît pas, à un gardien ou à une administration, on emploie la forme de politesse <strong>Könnten Sie ...?</strong> (<em>Konjunktiv II</em> de <em>können</em>) avec l'<strong>infinitif à la fin</strong> : <em>Könnten Sie bitte morgen vorbeikommen? Könnten Sie die Heizung reparieren?</em> Une alternative tout aussi polie est <strong>Würden Sie ...?</strong> avec l'infinitif final. Pour signaler le problème, de simples phrases suffisent : <em>Die Heizung ist kaputt. Der Wasserhahn tropft. Die Heizung funktioniert nicht.</em>"
      },
      {
        contrast: "<em>Könnten Sie</em> correspond au conditionnel français <em>pourriez-vous</em> : dans les deux langues, la forme verbale adoucit la demande. La différence tient au pronom : le français emploie <em>vous</em> avec la 2e personne du <strong>pluriel</strong> (<em>vous pourriez</em>), l'allemand emploie <em>Sie</em> avec la forme de la 3e personne du <strong>pluriel</strong> (<em>Könnten Sie</em>, <em>Sie sind</em>). Après <em>sein</em>, <em>kaputt</em> reste sans terminaison, alors que « cassé » s'accorde en français : <em>Die Heizung ist kaputt, Die Fenster sind kaputt</em> (« les fenêtres sont cassées »). En position d'épithète, en revanche, <em>kaputt</em> se décline comme un adjectif : <em>die kaputte Heizung</em>."
      },
      {
        trap: "L'infinitif ne suit pas immédiatement <em>Könnten</em> : il va à la fin de la phrase, après tous les compléments. <em>Könnten Sie die Heizung reparieren?</em>, et non « Könnten Sie reparieren die Heizung? ». Au téléphone, la formule habituelle est <em>Guten Tag, hier ist Weber</em> (comme « Allô, ici Weber ») ; <em>Ich bin Weber</em> n'est pas faux, mais ce n'est pas la formule habituelle. Par politesse, on reste à <em>Sie</em>, même si l'autre personne est plus jeune."
      },
      {
        tip: "Si la demande est urgente, ajoute <em>dringend</em> ou <em>so schnell wie möglich</em>, sans perdre la politesse : <em>Könnten Sie bitte so schnell wie möglich vorbeikommen?</em> <em>Bitte</em> se place en général après le pronom."
      }
    ],
    grammar: {
      title: "Könnten Sie ... ? et la panne",
      note: "<b>Könnten Sie</b> + compléments + <b>infinitif</b> à la fin. Une panne : <b>... ist kaputt</b> ou <b>... funktioniert nicht</b>.",
      table: {
        head: ["situation", "phrase", "fonction"],
        rows: [
          ["se présenter", "Guten Tag, hier ist Weber.", "au téléphone"],
          ["signaler", "Die Heizung ist kaputt.", "la panne"],
          ["signaler", "Der Wasserhahn tropft.", "la panne"],
          ["demander", "Könnten Sie bitte morgen vorbeikommen?", "demande polie"],
          ["demander", "Würden Sie das bitte reparieren?", "demande polie"]
        ]
      },
      examples: [
        { tr: "Bonjour, ici Weber, du 5 Hauptstraße.", note: "au téléphone : hier ist ..." },
        { tr: "Le chauffage est en panne.", note: "après sein, kaputt reste sans terminaison" },
        { tr: "Le robinet de la cuisine goutte.", note: "tropfen : troisième personne du singulier" },
        { tr: "Pourriez-vous passer demain, s'il vous plaît ?", note: "infinitif à la fin : vorbeikommen" },
        { tr: "Pourriez-vous réparer le chauffage ?", note: "Könnten Sie ... reparieren" },
        { tr: "Pourriez-vous le réparer au plus vite ?", note: "Würden Sie ... reparieren" }
      ]
    },
    vocab: [
      "le chauffage",
      "cassé, en panne",
      "fonctionner",
      "réparer",
      "l'administration de l'immeuble",
      "le gardien, le concierge",
      "la réparation",
      "le robinet",
      "la fenêtre",
      "goutter",
      "passer (venir chez quelqu'un)",
      "urgent"
    ],
    exercises: [
      {
        q: "Comment demandes-tu poliment de réparer le chauffage ?",
        opts: [
          "Könnten Sie reparieren die Heizung?",
          "Könnten Sie die Heizung reparieren?",
          "Könnten Sie die Heizung repariert?"
        ],
        why: "Avec <i>Könnten</i>, l'infinitif va <b>à la fin</b> de la phrase : <i>Könnten Sie die Heizung reparieren?</i>."
      },
      {
        q: "Quelle phrase est la demande polie ?",
        opts: ["Kommen Sie morgen!", "Sie kommen morgen.", "Könnten Sie morgen vorbeikommen?"],
        why: "<b>Könnten Sie ...?</b> est la formule polie. Les deux autres sont un ordre et une affirmation."
      },
      {
        q: "Complète : « Die Heizung ist ___. » (en panne)",
        hint: "après sein, sans terminaison",
        why: "<b>kaputt</b>, accentué sur la dernière syllabe, reste sans terminaison après <b>sein</b>."
      },
      {
        q: "Complète : « ___ Sie bitte morgen vorbeikommen? » (forme de politesse de können)",
        hint: "Konjunktiv II, avec Sie",
        why: "<b>Könnten</b> : <i>ich könnte</i>, <i>Sie könnten</i>. Avec <i>Sie</i>, on emploie la forme du pluriel."
      },
      {
        q: "Associe chaque mot à son sens.",
        pairs: ["chauffage", "robinet", "gardien", "administration de l'immeuble"]
      },
      {
        tr: "Pourriez-vous réparer le chauffage, s'il vous plaît ?",
        why: "<i>Könnten Sie bitte die Heizung reparieren</i> : l'infinitif ferme la phrase. <i>Könnten Sie die Heizung bitte reparieren</i> convient aussi."
      },
      {
        tr: "Le robinet de la cuisine goutte.",
        why: "<i>Der Wasserhahn in der Küche tropft</i> : <i>in der Küche</i> est au datif (<i>wo ?</i>). <i>Der Wasserhahn tropft in der Küche</i> convient aussi."
      },
      {
        q: "Complète la phrase.",
        tr: "Bonjour, ici Weber. Le chauffage est en panne. Pourriez-vous passer aujourd'hui ?",
        why: "Au téléphone, la formule habituelle est <i>hier ist Weber</i> (<i>ich bin Weber</i> est correct aussi). Pour la demande polie, <i>Könnten</i> et <i>Würden</i> conviennent ; <i>Können</i> est correct aussi, mais moins poli."
      },
      {
        tr: "Bonjour, ici Weber. Le chauffage est en panne. Pourriez-vous passer aujourd'hui ?",
        why: "Dans <i>Heizung</i>, le <b>ei</b> se lit [aɪ] comme « aï » et le <b>z</b> est [ts] ; dans <i>kaputt</i>, l'accent tombe sur la dernière syllabe."
      },
      {
        tr: "Pourriez-vous réparer le robinet de la cuisine, s'il vous plaît ?",
        why: "Dans <i>Wasserhahn</i>, le premier <b>h</b> de <i>Hahn</i> est un léger souffle, le second ne se prononce pas et allonge le <b>a</b> ; dans <i>Küche</i>, le <b>ch</b> est [ç]."
      }
    ]
  },
  "lesson:a2-u05-test": {
    theme: "Évaluation",
    title: "Test : Maison et quartier",
    objectives: ["vérifier l'adjectif après ein, wohin et wo avec les prépositions, les noms composés et les demandes polies"],
    theory: [
      {
        p: "Dix questions sur l'unité. Il faut 70 % pour réussir. Ne relis pas les leçons pendant que tu réponds : si tu ne te souviens pas de quelque chose, mieux vaut revenir réviser."
      }
    ],
    exercises: [
      {
        q: "Complète : « Ich suche eine ___ Wohnung. » (hell, avec la terminaison)",
        hint: "féminin accusatif après eine",
        why: "Après <i>eine</i>, le féminin a <b>-e</b> : <i>helle</i>."
      },
      {
        q: "Complète : « Das ist ein ___ Haus. » (alt, avec la terminaison)",
        hint: "neutre nominatif après ein",
        why: "<i>Ein</i> n'a pas de terminaison au neutre nominatif, donc l'adjectif la porte : <b>altes</b>."
      },
      {
        q: "Complète : « Ich stelle die Lampe in ___ Ecke. » (article défini)",
        hint: "wohin ?",
        why: "<i>Stellen</i> répond à <i>wohin ?</i> : accusatif féminin, <b>die</b> Ecke."
      },
      {
        q: "Complète : « Der Teppich ___ unter dem Tisch. » (liegen)",
        hint: "troisième personne du singulier",
        why: "État et datif : <b>liegt</b>."
      },
      {
        q: "Complète : « Die Küche + der Schrank = ___ Küchenschrank » (article défini)",
        hint: "regarde le dernier élément",
        why: "Le genre suit le dernier élément : <b>der</b> Schrank, donc <b>der</b> Küchenschrank."
      },
      {
        q: "Quelle phrase dit où le livre va se retrouver (wohin ?) ?",
        opts: [
          "Ich lege das Buch auf dem Tisch.",
          "Ich lege das Buch auf den Tisch.",
          "Ich liege das Buch auf den Tisch."
        ],
        why: "<i>Legen</i> indique la destination (<i>wohin ?</i>) et veut l'accusatif : <b>auf den Tisch</b>. <i>Liegen</i> n'a pas d'objet."
      },
      {
        q: "Quelle phrase est la demande polie ?",
        opts: ["Sie reparieren die Heizung jetzt.", "Könnten Sie die Heizung reparieren?", "Die Heizung reparieren Sie."],
        why: "<b>Könnten Sie ...?</b> avec l'infinitif à la fin est la formule polie."
      },
      {
        q: "Associe chaque mot à son sens.",
        pairs: ["chauffage", "gardien", "balcon", "clé"]
      },
      {
        tr: "Le frigo est dans la cuisine et le canapé est dans le salon.",
        why: "Dans <i>Kühlschrank</i>, le <b>ü</b> est long [yː], comme le « u » français de « lune », et <b>sch</b> est [ʃ] ([ˈkyːlʃʁaŋk]) ; dans <i>Sofa</i>, l'accent tombe sur le <b>o</b>, qui est long."
      },
      {
        tr: "Je cherche un appartement lumineux avec un grand balcon.",
        why: "Dans <i>großen</i>, le <b>ß</b> est un <b>s</b> sourd ; <i>einem großen Balkon</i> est au datif après <i>mit</i>, donc <b>-en</b>."
      }
    ]
  }
});
