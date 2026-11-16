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
  },
  "unit:a2-u06": {
    title: "Au bureau",
    grammarNote: "Könnten Sie ...? · questions indirectes avec ob et mot interrogatif · lettre formelle · man · zuerst, dann, danach, außerdem"
  },
  "lesson:a2-u06-l1": {
    theme: "Au téléphone",
    title: "Pourriez-vous me rappeler ?",
    objectives: [
      "téléphoner et laisser un message avec Könnten Sie ...?",
      "poser une question indirecte avec ob ou un mot interrogatif",
      "envoyer le verbe en fin de proposition après ob, wann, wo et dass"
    ],
    theory: [
      {
        h: "Demander un rappel et laisser un message",
        p: "Au téléphone, avec quelqu'un que tu ne connais pas, tu emploies la forme de politesse : <em>Guten Tag, hier ist Weber. Könnten Sie mich bitte zurückrufen?</em> Pour laisser un message : <em>Könnten Sie Frau Keller etwas ausrichten?</em> La personne qui répond dit souvent <em>Ich verbinde Sie</em> (je vous passe) ou <em>Frau Keller ist gerade nicht am Platz</em> (elle n'est pas à son poste). <em>Zurückrufen</em> et <em>ausrichten</em> sont des verbes séparables : à l'infinitif, après <em>Könnten Sie ...</em>, ils restent entiers et vont en fin de phrase."
      },
      {
        h: "Questions indirectes : ob et mot interrogatif",
        p: "Une virgule sépare la proposition principale de la subordonnée ; le verbe conjugué se place à la fin de la subordonnée."
      },
      {
        contrast: "En français la question indirecte garde un ordre souple : <em>je ne sais pas quand commence la réunion</em> ou <em>quand la réunion commence</em>, le verbe restant près du sujet. En allemand l'ordre est celui de la subordonnée, avec le verbe conjugué en dernière position : <em>Ich weiß nicht, wann die Besprechung beginnt</em>, et non « wann beginnt die Besprechung ». Autre point : le <em>si</em> français sert pour le doute comme pour la condition : <em>je ne sais pas s'il vient</em> est <em>ob</em>, <em>s'il vient, ...</em> est <em>wenn</em>. L'allemand les sépare. Côté politesse, le français emploie le conditionnel avec <em>vous</em> (<em>Pourriez-vous me rappeler ?</em>) et le pronom se place avant le verbe ; l'allemand utilise le Konjunktiv II <em>Könnten Sie</em> et l'infinitif final vient après tous les compléments."
      },
      {
        trap: "Après <em>ob</em> on n'emploie pas <em>wenn</em> : <em>Ich weiß nicht, ob er kommt</em>. La virgule avant <em>ob</em>, <em>dass</em> et le mot interrogatif est obligatoire. Après <em>Könnten Sie mir sagen</em> la question indirecte n'est plus une question directe : <em>Könnten Sie mir sagen, wo Frau Keller ist?</em>, et non « wo ist Frau Keller »."
      },
      {
        tip: "Autres formules utiles : <em>Die Leitung ist besetzt</em> (la ligne est occupée), <em>Ich erreiche ihn nicht</em> (je n'arrive pas à le joindre), <em>Wie ist Ihre Telefonnummer?</em>. Avec la forme de politesse on reste sur <em>Sie</em> du début à la fin de l'appel. Attention : <em>Sie</em> s'accompagne de la troisième personne du <strong>pluriel</strong> (<em>Könnten Sie</em>), alors que <em>vous</em> prend la deuxième du pluriel."
      }
    ],
    grammar: {
      title: "Könnten Sie ...? et les questions indirectes",
      note: "<b>Könnten Sie</b> + infinitif à la fin. Question indirecte : <b>ob</b> ou mot interrogatif, et verbe conjugué <b>à la fin</b>. Avec <b>dass</b> (une affirmation, pas une question) le verbe va aussi à la fin : <i>Ich rufe morgen wieder an</i> devient <i>..., dass ich morgen wieder anrufe.</i>",
      table: {
        head: ["question directe", "question indirecte", "introduit par"],
        rows: [
          ["Ist Herr Weber im Büro?", "..., ob Herr Weber im Büro ist.", "ob (oui/non)"],
          ["Wann beginnt die Besprechung?", "..., wann die Besprechung beginnt.", "wann"],
          ["Wo ist Frau Keller?", "..., wo Frau Keller ist.", "wo"]
        ]
      },
      examples: [
        { tr: "Pourriez-vous me rappeler, s'il vous plaît ?", note: "zurückrufen reste entier, à la fin" },
        { tr: "Pourriez-vous transmettre un message à Madame Keller ?", note: "ausrichten, à la fin" },
        { tr: "Je voudrais savoir si Monsieur Weber est au bureau aujourd'hui.", note: "ob : le verbe ist va à la fin" },
        { tr: "Je ne sais pas quand la réunion commence.", note: "wann : le verbe beginnt va à la fin" },
        { tr: "Pourriez-vous me dire où est Madame Keller ?", note: "wo : le verbe ist va à la fin" },
        { tr: "Pourriez-vous lui dire que je rappelle demain ?", note: "dass : anrufe se ressoude" }
      ]
    },
    vocab: [
      "téléphoner, appeler",
      "rappeler",
      "le message",
      "transmettre, faire savoir",
      "le numéro de poste",
      "passer (un appel), mettre en communication",
      "le répondeur",
      "joindre, atteindre",
      "occupé",
      "le numéro de téléphone",
      "le rendez-vous, l'échéance",
      "la ligne"
    ],
    exercises: [
      {
        q: "Comment demandes-tu poliment qu'on te rappelle ?",
        opts: [
          "Könnten Sie mich bitte zurückrufen?",
          "Könnten Sie zurückrufen mich bitte?",
          "Könnten Sie mich bitte zurückrufe?"
        ],
        why: "<i>Könnten Sie</i> + compléments + l'infinitif <b>entier</b> à la fin : <i>zurückrufen</i>."
      },
      {
        tr: "Toute la conjugaison de können au Konjunktiv II.",
        why: "<i>könnte, könntest, könnte, könnten, könntet, könnten</i> : le <b>ö</b> avec tréma et le <b>-e-</b> du Konjunktiv II. <i>Ich</i> et <i>er/sie/es</i> ont la même forme, et avec <i>Sie</i> on emploie <b>könnten</b>."
      },
      {
        q: "Complète : « Ich weiß nicht, ___ Herr Weber heute im Büro ist. » (si)",
        hint: "question oui/non",
        why: "Une question oui/non devient indirecte avec <b>ob</b>, et le verbe <i>ist</i> va à la fin."
      },
      {
        q: "Complète : « Ich möchte wissen, ___ die Besprechung beginnt. » (quand)",
        hint: "mot interrogatif",
        why: "<b>wann</b> est le mot interrogatif et il reste : <i>..., wann die Besprechung beginnt</i>."
      },
      {
        q: "Associe chaque mot à son sens.",
        pairs: ["téléphoner", "message", "numéro de poste", "occupé"]
      },
      {
        tr: "Pourriez-vous me rappeler, s'il vous plaît ?",
        why: "<i>Könnten Sie mich bitte zurückrufen</i> : l'infinitif entier ferme la phrase. <i>Könnten Sie mich zurückrufen, bitte</i> convient aussi."
      },
      {
        q: "Complète la phrase.",
        tr: "Pourriez-vous transmettre un message à Monsieur Weber ? Je voudrais savoir s'il est au bureau.",
        why: "<i>Etwas ausrichten</i> : l'infinitif reste entier, à la fin. <i>Wissen, ob ...</i> : une question oui/non devient indirecte avec <b>ob</b>."
      },
      {
        q: "Tu es au téléphone avec une entreprise.",
        setting: "Tu appelles pour parler à Madame Keller.",
        lines: [
          { tr: "Entreprise Brandt, bonjour." },
          {
            tr: "Présente-toi et demande qu'on te passe Madame Keller.",
            answerTr: "Bonjour, je suis Weber. Pourriez-vous me passer Madame Keller ?"
          },
          { tr: "Madame Keller n'est pas à son poste. Dois-je lui transmettre un message ?" },
          {
            tr: "Réponds oui et demande qu'on lui dise que tu rappelles demain.",
            answerTr: "Oui, merci. Pourriez-vous lui dire que je rappelle demain ?"
          }
        ]
      },
      {
        tr: "Bonjour, je suis Weber. Pourriez-vous me rappeler, s'il vous plaît ? Je voudrais savoir si le rendez-vous est lundi.",
        why: "Dans <i>zurückrufen</i> l'accent tombe sur <b>rück</b> (<b>ü</b> bref [ʏ]) ; dans <i>Könnten</i> le <b>ö</b> est bref et ouvert [œ] ; <i>Weber</i> commence par <b>w</b> = [v]."
      },
      {
        tr: "Pourriez-vous dire à Madame Keller que je rappelle demain ?",
        why: "Dans <i>wieder</i> le <b>ie</b> est un <b>i</b> long [iː] et le <b>w</b> initial se lit [v] ; dans <i>anrufe</i> l'accent tombe sur <b>an</b> et le verbe est à la fin après <i>dass</i>."
      }
    ]
  },
  "lesson:a2-u06-l2": {
    theme: "Écrire un e-mail",
    title: "Madame Keller",
    objectives: [
      "ouvrir et clore un e-mail formel avec Sehr geehrte Frau ... et Mit freundlichen Grüßen",
      "écrire les formes de politesse Sie, Ihr, Ihnen avec une majuscule",
      "demander une confirmation avec Könnten Sie ...?"
    ],
    theory: [
      {
        h: "Ouverture et clôture d'un e-mail formel",
        p: "Un e-mail formel suit une formule fixe. Au début : <strong>Sehr geehrte Frau Keller,</strong> à une femme, <strong>Sehr geehrter Herr Weber,</strong> à un homme, <strong>Sehr geehrte Damen und Herren,</strong> à plusieurs personnes ou à un destinataire inconnu. On écrit <em>Frau</em> ou <em>Herr</em> et le nom de famille, sans le prénom. À la fin : <strong>Mit freundlichen Grüßen</strong> et le nom en dessous, sans virgule après la formule. Le corps du message est bref : <em>Vielen Dank für Ihre E-Mail. Im Anhang finden Sie die Datei. Könnten Sie mir den Termin bitte bestätigen?</em>"
      },
      {
        contrast: "Le français ouvre avec <em>Madame,</em> ou <em>Monsieur,</em> et clôt avec <em>Cordialement</em> ou, plus solennellement, <em>Veuillez agréer, Madame, l'expression de mes salutations distinguées</em>. L'allemand ajoute <em>Sehr geehrte</em> (littéralement « très honorée »), un adjectif sans article : d'où <strong>-e</strong> avec <em>Frau</em> et <strong>-er</strong> avec <em>Herr</em>. La formule de clôture allemande est beaucoup plus courte. Après la virgule de la formule d'appel, la ligne suivante commence en général par une minuscule (<em>..., vielen Dank für ...</em>), sauf si le premier mot est un nom. Pour une femme adulte on écrit <em>Frau</em>, mariée ou non, comme <em>Madame</em> en français : <em>Fräulein</em> est considéré comme dépassé. Avec <em>du</em> on ouvre par <em>Liebe Anna,</em> ou <em>Lieber Tim,</em> et on clôt par <em>Viele Grüße</em>."
      },
      {
        trap: "En français <em>vous</em> s'écrit en minuscule. En allemand, dans un e-mail formel, <em>Sie</em>, <em>Ihr</em>, <em>Ihre</em> et <em>Ihnen</em> prennent une majuscule, ce qui les distingue de <em>sie</em> et <em>ihre</em> (elle, ils ; son, leur). <em>Mit freundlichen Grüßen</em> est au pluriel et au datif après <em>mit</em> : on n'écrit pas « Mit freundliche Gruß »."
      },
      {
        tip: "Autres formules : <em>Vielen Dank für Ihre schnelle Antwort</em>, <em>Im Anhang finden Sie ...</em>, <em>Könnten Sie ...?</em> Dans l'objet (<em>Betreff</em>) quelques mots suffisent, par exemple <em>Termin am Montag</em>."
      }
    ],
    grammar: {
      title: "Registre formel : l'e-mail",
      note: "Ouverture <b>Sehr geehrte Frau</b> / <b>Sehr geehrter Herr</b> + nom ; clôture <b>Mit freundlichen Grüßen</b>. <b>Sie, Ihre, Ihnen</b> avec une majuscule.",
      table: {
        head: ["partie de l'e-mail", "formule", "sens"],
        rows: [
          ["ouverture (femme)", "Sehr geehrte Frau Keller,", "Madame Keller"],
          ["ouverture (homme)", "Sehr geehrter Herr Weber,", "Monsieur Weber"],
          ["ouverture (plusieurs personnes)", "Sehr geehrte Damen und Herren,", "Mesdames et Messieurs"],
          ["corps", "Vielen Dank für Ihre E-Mail.", "Merci pour votre e-mail"],
          ["clôture", "Mit freundlichen Grüßen", "Cordialement"]
        ]
      },
      examples: [
        { tr: "Madame Keller,", note: "Frau : geehrt + e" },
        { tr: "Monsieur Weber,", note: "Herr : geehrt + er" },
        { tr: "Merci pour votre e-mail.", note: "Ihre avec une majuscule" },
        { tr: "Vous trouverez le fichier en pièce jointe.", note: "verbe en deuxième position : finden Sie" },
        { tr: "Pourriez-vous me confirmer le rendez-vous, s'il vous plaît ?", note: "Könnten Sie ... bestätigen" },
        { tr: "Cordialement", note: "Grüßen, pluriel et datif" }
      ]
    },
    vocab: [
      "l'e-mail, le courriel",
      "l'objet (de l'e-mail)",
      "la formule d'appel",
      "le salut, la formule de politesse",
      "la pièce jointe",
      "le fichier",
      "l'expéditeur",
      "envoyer",
      "joindre",
      "confirmer",
      "aimable, cordial",
      "formel"
    ],
    exercises: [
      {
        q: "Quelle ouverture est correcte pour un e-mail à une dame ?",
        opts: ["Sehr geehrter Frau Keller,", "Sehr geehrte Frau Keller,", "Sehr geehrt Frau Keller,"],
        why: "<i>Frau</i> est féminin, donc l'adjectif prend <b>-e</b> : <i>Sehr geehrte Frau Keller,</i>. Avec <i>Herr</i> ce serait <i>geehrter</i>."
      },
      {
        q: "Quelle clôture est correcte ?",
        opts: ["Mit freundlichen Grüßen", "Mit freundliche Grüße", "Mit freundlichem Grüßen"],
        why: "<i>Mit</i> veut le datif et <i>Grüße</i> est au pluriel : <b>Mit freundlichen Grüßen</b>."
      },
      {
        q: "Complète : « Sehr ___ Herr Weber, » (geehrt, avec la terminaison)",
        hint: "masculin, sans article",
        why: "Avec <i>Herr</i> l'adjectif sans article prend <b>-er</b> : <i>Sehr geehrter Herr Weber,</i>."
      },
      {
        q: "Complète : « Vielen Dank für ___ E-Mail. » (votre, avec une majuscule)",
        hint: "forme de politesse",
        why: "<b>Ihre</b> avec une majuscule est le possessif de politesse : votre. <i>Ihre</i>, <i>Ihr</i> et <i>Ihnen</i> s'écrivent ainsi dans les e-mails formels."
      },
      {
        q: "Associe chaque mot à son sens.",
        pairs: ["objet", "pièce jointe", "expéditeur", "fichier"]
      },
      {
        tr: "Vous trouverez le fichier en pièce jointe.",
        why: "<i>Im Anhang finden Sie die Datei</i> : le verbe est en deuxième position. <i>Sie finden im Anhang die Datei</i>, <i>Sie finden die Datei im Anhang</i> et <i>Die Datei finden Sie im Anhang</i> conviennent aussi."
      },
      {
        tr: "Madame Keller, merci pour votre e-mail.",
        why: "<i>Sehr geehrte Frau Keller, vielen Dank für Ihre E-Mail</i>. <i>Herzlichen Dank</i> ou <i>danke</i> conviennent aussi ; <i>Ihre</i> s'écrit avec une majuscule."
      },
      {
        q: "Complète la phrase.",
        tr: "Madame Keller, merci pour votre e-mail. Cordialement",
        why: "<i>Sehr geehrte</i> (féminin), <i>Ihre</i> (votre, avec une majuscule) et <i>Mit freundlichen Grüßen</i> (datif pluriel)."
      },
      {
        tr: "Madame Keller, merci pour votre e-mail. Vous trouverez le fichier en pièce jointe. Cordialement",
        why: "Dans <i>Grüßen</i> le <b>ü</b> est long [yː], comme le <i>u</i> français de « tu », et le <b>ß</b> est un <b>s</b> sourd ; dans <i>geehrte</i> la syllabe <b>ge</b> est faible et l'accent tombe sur <b>ehr</b>, avec un <b>e</b> long."
      },
      {
        tr: "Pourriez-vous me confirmer le rendez-vous, s'il vous plaît ?",
        why: "Dans <i>Termin</i> l'accent tombe sur la dernière syllabe, avec un <b>i</b> long ; dans <i>bestätigen</i> le <b>st</b> après <b>be-</b> se lit [ʃt] et l'accent tombe sur <b>stä</b>."
      }
    ]
  },
  "lesson:a2-u06-l3": {
    theme: "Habitudes au bureau",
    title: "Ici, on fait comme ça",
    objectives: [
      "employer man avec le verbe à la troisième personne du singulier",
      "décrire les règles et les habitudes du lieu de travail",
      "employer man avec muss, darf et kann"
    ],
    theory: [
      {
        h: "man : une personne quelconque",
        p: "<strong>man</strong> désigne une personne quelconque, les gens en général, et sert pour les règles et les habitudes : <em>Bei uns beginnt man um acht Uhr. Hier duzt man sich. In der Mittagspause isst man in der Kantine.</em> Le verbe se met à la <strong>troisième personne du singulier</strong>, même si le sens est pluriel. Les verbes qui changent de voyelle gardent le changement : <em>man isst, man liest, man fährt, man spricht</em>. Avec les modaux : <em>man muss, man darf, man kann</em> : <em>Hier darf man nicht rauchen. Man muss pünktlich sein.</em> Une question fréquente : <em>Wie sagt man das auf Deutsch?</em>"
      },
      {
        contrast: "En français, <em>se</em> précède le verbe : <em>on se tutoie</em>. En allemand, <em>sich</em> se place ici après le verbe et <em>man</em> : <em>Hier duzt man sich.</em>"
      },
      {
        trap: "<em>man</em> n'est pas <em>der Mann</em> (l'homme) : <em>man</em> s'écrit avec un seul <strong>n</strong> et une minuscule. Le verbe reste à la troisième personne du singulier : <em>man sagt</em>, et non « man sagen », et avec les modaux <em>man muss</em>, et non « man müssen ». Attention aux modaux : le français <em>on ne peut pas fumer</em> couvre « c'est interdit » et « c'est impossible », alors que l'allemand a deux verbes. <em>Hier darf man nicht rauchen</em> dit que ce n'est pas permis ; <em>Hier kann man nicht rauchen</em> dirait que ce n'est pas faisable. Pour « il faut », on a <em>man muss</em>."
      },
      {
        tip: "Pour introduire une règle du bureau, ouvre avec <em>Hier</em>, <em>Bei uns</em> ou <em>In der Firma</em> ; le verbe reste en deuxième position : <em>Bei uns beginnt man um acht Uhr.</em> Pour le tutoiement et le vouvoiement : <em>duzen</em> et <em>siezen</em> : <em>Den Chef siezt man hier.</em>"
      }
    ],
    grammar: {
      title: "man + troisième personne du singulier",
      note: "<b>man</b> est toujours le sujet ; le verbe reste à la <b>troisième personne du singulier</b> : <b>man isst, man muss, man darf</b>.",
      table: {
        head: ["verbe", "avec man", "exemple"],
        rows: [
          ["essen", "man isst", "In der Kantine isst man warm."],
          ["sagen", "man sagt", "Wie sagt man das auf Deutsch?"],
          ["müssen", "man muss", "Man muss pünktlich sein."],
          ["dürfen", "man darf", "Hier darf man nicht rauchen."],
          ["duzen", "man duzt sich", "Hier duzt man sich."]
        ]
      },
      examples: [
        { tr: "Ici, on se tutoie.", note: "man duzt sich : troisième personne du singulier" },
        { tr: "Chez nous, on commence à huit heures.", note: "inversion après Bei uns : beginnt man" },
        { tr: "Pendant la pause déjeuner, on mange à la cantine.", note: "essen change de voyelle : man isst" },
        { tr: "Ici, il est interdit de fumer.", note: "man darf, avec nicht" },
        { tr: "Comment dit-on cela en allemand ?", note: "man sagt, et non man sagen" },
        { tr: "Il faut être à l'heure.", note: "man muss" }
      ]
    },
    vocab: [
      "le bureau",
      "le collègue",
      "la collègue",
      "le chef",
      "la pause déjeuner",
      "la cantine",
      "l'imprimante",
      "les horaires de travail",
      "ponctuel",
      "tutoyer",
      "vouvoyer",
      "habituel, d'usage"
    ],
    exercises: [
      {
        q: "Quelle phrase est correcte ?",
        opts: [
          "Hier arbeiten man bis fünf Uhr.",
          "Hier arbeitet man bis fünf Uhr.",
          "Hier arbeitest man bis fünf Uhr."
        ],
        why: "Avec <i>man</i> le verbe se met à la troisième personne du singulier : <b>arbeitet</b>."
      },
      {
        q: "Comment dis-tu « En Allemagne, on mange tôt » ?",
        opts: [
          "In Deutschland isst man früh.",
          "In Deutschland essen man früh.",
          "In Deutschland esst man früh."
        ],
        why: "<i>Essen</i> change de voyelle à la troisième personne du singulier : <i>er isst</i>, donc <b>man isst</b>."
      },
      {
        q: "Quelles phrases sont correctes ?",
        opts: [
          "Man darf hier nicht rauchen.",
          "Man muss pünktlich sein.",
          "Man müssen pünktlich sein.",
          "Wie sagt man das auf Deutsch?",
          "Man fahren mit dem Bus."
        ],
        why: "Avec <i>man</i> le modal aussi se met à la troisième personne du singulier : <i>man muss</i>, et non « man müssen ». <i>Man fahren</i> est faux : il faut <i>man fährt</i>."
      },
      {
        q: "Complète : « In der Kantine ___ man mittags warm. » (essen)",
        hint: "troisième personne du singulier, la voyelle change",
        why: "<b>isst</b> : <i>essen</i> change <i>e</i> en <i>i</i>, et après <i>man</i> on emploie cette forme."
      },
      {
        q: "Complète : « Wie ___ man das auf Deutsch? » (sagen)",
        hint: "troisième personne du singulier",
        why: "<b>sagt</b> : <i>man</i> veut la troisième personne du singulier."
      },
      {
        tr: "Chez nous, on commence à huit heures.",
        why: "<i>Bei uns beginnt man um acht Uhr</i>. <i>Man beginnt bei uns um acht Uhr</i> et <i>Um acht Uhr beginnt man bei uns</i> conviennent aussi : le verbe reste en deuxième position."
      },
      {
        tr: "Ici, on se tutoie.",
        why: "<i>Hier duzt man sich</i>. <i>Man duzt sich hier</i> convient aussi. <i>Sich</i> est le réfléchi de <i>man</i>."
      },
      {
        q: "Complète la phrase.",
        tr: "Ici, il faut être à l'heure et on ne peut pas fumer.",
        why: "<i>Hier muss man pünktlich sein, und man darf nicht rauchen.</i> Pour « on ne peut pas fumer » (ce n'est pas permis), l'allemand dit <i>man darf nicht rauchen</i>. <i>Man kann nicht rauchen</i> dirait plutôt que fumer est impossible, non qu'il est interdit."
      },
      {
        tr: "Chez nous, on commence à huit heures. Pendant la pause déjeuner, on mange à la cantine. Ici, on se tutoie.",
        why: "Dans <i>isst</i> le <b>ss</b> est un <b>s</b> sourd et le <b>i</b> est bref ; dans <i>Kantine</i> l'accent tombe sur <b>ti</b>, avec un <b>i</b> long [kanˈtiːnə]."
      },
      {
        tr: "Ici, il faut être à l'heure, et au bureau on ne peut pas fumer.",
        why: "Dans <i>pünktlich</i> le <b>ü</b> est bref [ʏ], le <b>n</b> devant <b>k</b> est nasal vélaire [ŋ] et le <b>ch</b> final après <b>i</b> est [ç]."
      }
    ]
  },
  "lesson:a2-u06-l4": {
    theme: "Réunion",
    title: "En réunion",
    objectives: [
      "ordonner les interventions avec zuerst, dann, danach et außerdem",
      "mettre le verbe juste après ces mots, avant le sujet",
      "faire une proposition et donner son accord"
    ],
    theory: [
      {
        h: "zuerst, dann, danach, außerdem",
        p: "<strong>zuerst</strong> (d'abord), <strong>dann</strong> (ensuite), <strong>danach</strong> (après, par la suite) et <strong>außerdem</strong> (en outre) peuvent ouvrir une phrase. Lorsqu'ils occupent la <strong>première position</strong>, le verbe conjugué vient <strong>juste après</strong> et le sujet le suit : <em>Zuerst besprechen wir die Tagesordnung. Dann diskutieren wir den Vorschlag. Danach schreibt Anna das Protokoll. Außerdem brauchen wir einen neuen Drucker.</em> Ils peuvent aussi se placer plus loin, après le sujet : <em>Wir besprechen zuerst die Tagesordnung.</em> Pour une proposition : <em>Ich schlage vor, dass wir einen neuen Termin machen.</em> Pour l'accord : <em>Ich bin einverstanden. Ich stimme zu.</em>"
      },
      {
        contrast: "En français <em>d'abord, ensuite, après, en outre</em> ne changent pas l'ordre : <em>D'abord, nous discutons la proposition</em>, avec le sujet avant le verbe. En allemand, quand ces mots ouvrent la phrase, le verbe conjugué reste en deuxième position : <em>Zuerst besprechen wir ...</em>, et non « Zuerst wir besprechen ». Attention à <em>avant</em> et <em>après</em> : « d'abord » est <em>zuerst</em>, mais « avant la réunion » est <em>vor der Besprechung</em> (<em>vor</em> + datif) ; « après la réunion » est <em>nach der Besprechung</em>, alors que l'adverbe « après » est <em>danach</em>. En français un seul mot, <em>après</em>, couvre les deux emplois."
      },
      {
        trap: "Avec <em>zuerst, dann, danach, außerdem</em> en tête, <em>wir besprechen</em> devient <em>besprechen wir</em>. Le verbe séparable reste scindé : <em>Danach fängt Anna an.</em> Après <em>dass</em>, en revanche, le verbe conjugué va à la fin : <em>Ich schlage vor, dass wir einen neuen Termin machen.</em> Après <em>glauben</em> et <em>meinen</em> on peut aussi omettre <em>dass</em>, et le verbe revient alors en deuxième position : <em>Ich meine, wir machen einen neuen Termin.</em>"
      },
      {
        tip: "Pour désapprouver poliment : <em>Das sehe ich anders.</em> Pour demander la parole ou une pause : <em>Ich habe eine Frage. Könnten wir eine Pause machen?</em> Une liste en trois temps se construit avec <em>zuerst, dann, danach</em>, et <em>außerdem</em> ajoute un point."
      }
    ],
    grammar: {
      title: "zuerst, dann, danach, außerdem : le verbe juste après",
      note: "Avec <b>zuerst, dann, danach, außerdem</b> en première position, le verbe conjugué est en <b>deuxième place</b> et le sujet vient après.",
      table: {
        head: ["mot", "sens", "exemple"],
        rows: [
          ["zuerst", "d'abord", "Zuerst besprechen wir die Tagesordnung."],
          ["dann", "ensuite", "Dann diskutieren wir den Vorschlag."],
          ["danach", "après, par la suite", "Danach schreibt Anna das Protokoll."],
          ["außerdem", "en outre", "Außerdem brauchen wir einen neuen Drucker."]
        ]
      },
      examples: [
        { tr: "D'abord, nous parlons de l'ordre du jour.", note: "zuerst : verbe + sujet" },
        { tr: "Ensuite, nous discutons la proposition.", note: "dann : diskutieren wir" },
        { tr: "Après, Anna rédige le compte rendu.", note: "danach : schreibt Anna" },
        { tr: "En outre, il nous faut une nouvelle imprimante.", note: "außerdem : brauchen wir" },
        { tr: "Je propose de fixer une nouvelle date.", note: "dass : le verbe va à la fin" },
        { tr: "Je suis d'accord.", note: "einverstanden avec sein" }
      ]
    },
    vocab: [
      "la réunion",
      "la proposition",
      "l'ordre du jour",
      "le résultat",
      "le compte rendu",
      "le point",
      "proposer",
      "être d'accord, approuver",
      "d'accord",
      "d'abord, en premier lieu",
      "après, par la suite",
      "en outre"
    ],
    exercises: [
      {
        q: "Quelle phrase est correcte ?",
        opts: [
          "Zuerst wir besprechen die Tagesordnung.",
          "Zuerst besprechen wir die Tagesordnung.",
          "Zuerst wir die Tagesordnung besprechen."
        ],
        why: "Avec <i>zuerst</i> en première position, le verbe vient juste après, puis le sujet : <b>Zuerst besprechen wir ...</b>."
      },
      {
        q: "Complète : « Zuerst besprechen wir die Tagesordnung, ___ diskutieren wir den Vorschlag. » (ensuite)",
        hint: "deux mots possibles",
        why: "<b>dann</b> et <b>danach</b> conviennent : les deux ouvrent la phrase et le verbe vient juste après."
      },
      {
        q: "Complète : « Außerdem ___ wir einen neuen Drucker. » (brauchen)",
        hint: "présent, wir",
        why: "<b>brauchen</b> : après <i>außerdem</i> le verbe est en deuxième position, puis <i>wir</i>."
      },
      {
        q: "Associe chaque mot à son sens.",
        pairs: ["proposition", "ordre du jour", "résultat", "compte rendu"]
      },
      {
        tr: "Ensuite, Anna rédige le compte rendu.",
        why: "<i>Danach schreibt Anna das Protokoll</i> : le verbe vient juste après <i>danach</i>. <i>Anna schreibt danach das Protokoll</i>, <i>Anna schreibt das Protokoll danach</i> et <i>Das Protokoll schreibt Anna danach</i> conviennent aussi."
      },
      {
        tr: "En outre, j'ai une question.",
        why: "<i>Außerdem habe ich eine Frage</i> : le verbe vient avant le sujet. <i>Ich habe außerdem eine Frage</i> convient aussi."
      },
      {
        q: "Complète la phrase.",
        tr: "D'abord, nous parlons de la proposition. Ensuite, Anna rédige le compte rendu.",
        why: "<i>Zuerst besprechen wir den Vorschlag. Dann schreibt Anna das Protokoll.</i> Pour « ensuite » <i>dann</i> et <i>danach</i> conviennent."
      },
      {
        q: "Tu es en réunion.",
        setting: "Ton chef te demande comment commencer.",
        lines: [
          { tr: "Bonjour ! Nous avons beaucoup de travail aujourd'hui. Comment commençons-nous ?" },
          {
            tr: "Réponds que vous parlez d'abord de l'ordre du jour.",
            answerTr: "D'abord, nous parlons de l'ordre du jour."
          },
          { tr: "Bien. Et après ?" },
          {
            tr: "Réponds qu'ensuite vous discutez la proposition de Monsieur Weber.",
            answerTr: "Après, nous discutons la proposition de Monsieur Weber."
          }
        ]
      },
      {
        tr: "D'abord, nous parlons de l'ordre du jour. Après, nous discutons la proposition. En outre, Anna rédige le compte rendu.",
        why: "Dans <i>Besprechung</i> le <b>sp</b> après <b>Be-</b> se lit [ʃp] et le <b>ch</b> est [ç] ; dans <i>Protokoll</i> l'accent tombe sur la dernière syllabe ; dans <i>außerdem</i> le <b>ß</b> est un <b>s</b> sourd."
      },
      {
        tr: "Je propose de discuter d'abord l'ordre du jour.",
        why: "Dans <i>vor</i> le <b>v</b> se lit [f] et dans <i>schlage</i> le <b>sch</b> est [ʃ], comme le <i>ch</i> français de « chat » ; <i>zuerst</i> se lit [tsuˈʔeːɐ̯st], avec <b>z</b> = [ts]."
      }
    ]
  },
  "lesson:a2-u06-test": {
    theme: "Vérification",
    title: "Test : Au bureau",
    objectives: ["vérifier les demandes polies, les questions indirectes, la lettre formelle, man et les connecteurs de séquence"],
    theory: [
      {
        p: "Dix questions sur l'unité. On réussit avec 70 %. Ne regarde pas les leçons pendant que tu réponds : si tu ne te souviens pas de quelque chose, mieux vaut retourner réviser."
      }
    ],
    exercises: [
      {
        tr: "Conjugue können au Konjunktiv II : du, wir, ihr.",
        why: "<i>könntest, könnten, könntet</i> : le <b>ö</b> avec tréma et le <b>-e-</b> du Konjunktiv II."
      },
      {
        q: "Complète : « Ich weiß nicht, ___ Herr Weber im Büro ist. » (si)",
        hint: "question oui/non",
        why: "Une question oui/non devient indirecte avec <b>ob</b>, et le verbe va à la fin."
      },
      {
        q: "Complète : « Hier ___ man pünktlich sein. » (müssen)",
        hint: "troisième personne du singulier",
        why: "<b>muss</b> : avec <i>man</i> le modal est à la troisième personne du singulier."
      },
      {
        q: "Complète : « Sehr ___ Frau Keller, » (geehrt, avec la terminaison)",
        hint: "féminin, sans article",
        why: "Avec <i>Frau</i> l'adjectif sans article prend <b>-e</b> : <i>geehrte</i>."
      },
      {
        q: "Complète : « Zuerst ___ wir die Tagesordnung. » (besprechen)",
        hint: "verbe avant le sujet",
        why: "Après <i>zuerst</i> vient le verbe, puis le sujet : <b>besprechen wir</b>."
      },
      {
        q: "Quelle phrase est la demande polie ?",
        opts: ["Rufen Sie mich zurück!", "Könnten Sie mich bitte zurückrufen?", "Sie rufen mich zurück."],
        why: "<b>Könnten Sie ...?</b> avec l'infinitif à la fin est la formule polie ; les deux autres sont un ordre et une affirmation."
      },
      {
        q: "Associe chaque mot à son sens.",
        pairs: ["message", "objet (de l'e-mail)", "réunion", "collègue"]
      },
      {
        tr: "Pourriez-vous me confirmer le rendez-vous, s'il vous plaît ?",
        why: "<i>Könnten Sie mir den Termin bitte bestätigen</i> : l'infinitif ferme la phrase. <i>Könnten Sie mir bitte den Termin bestätigen</i> convient aussi."
      },
      {
        tr: "Je voudrais savoir si Monsieur Weber est au bureau aujourd'hui. Pourriez-vous me rappeler, s'il vous plaît ?",
        why: "Dans <i>Büro</i> le <b>ü</b> est [y] et l'accent tombe sur <b>ro</b> ; dans <i>ich</i> le <b>ch</b> est [ç] ; dans <i>wissen</i> le <b>w</b> est [v] et le <b>ss</b> est un <b>s</b> sourd."
      },
      {
        tr: "Chez nous, on commence à huit heures, et d'abord nous parlons de l'ordre du jour.",
        why: "Dans <i>acht</i> le <b>ch</b> après <b>a</b> est [x] ; <i>Bei</i> a <b>ei</b> = [aɪ] ; dans <i>zuerst</i> le <b>z</b> est [ts] et les voyelles <b>u</b> et <b>e</b> se prononcent séparément."
      }
    ]
  },
  "unit:a2-u07": {
    title: "Fêtes et coutumes",
    grammarNote: "gratulieren et d'autres verbes avec le datif · les dates (am 3. Oktober) · Hast du Lust, ... zu ...? · adjectif employé comme adverbe · normalerweise, leider, hoffentlich"
  },
  "lesson:a2-u07-l1": {
    theme: "Vœux et cadeaux",
    title: "Bon anniversaire !",
    objectives: [
      "féliciter quelqu'un avec gratulieren et Herzlichen Glückwunsch",
      "utiliser le datif avec gratulieren, schenken et danken",
      "dire une date avec am et le nombre ordinal (am 3. Oktober)"
    ],
    theory: [
      {
        h: "Féliciter quelqu'un",
        p: "Pour féliciter quelqu'un, il y a le verbe <strong>gratulieren</strong> : la personne est au <strong>datif</strong> et l'occasion s'introduit avec <strong>zu</strong> + datif, c'est-à-dire <em>zum</em> (<em>zu dem</em>, masculin et neutre) ou <em>zur</em> (<em>zu der</em>, féminin) : <em>Ich gratuliere dir zum Geburtstag. Wir gratulieren euch zur Hochzeit.</em> Comme formule figée, sans verbe : <em>Herzlichen Glückwunsch zum Geburtstag!</em> ou <em>Alles Gute zum Geburtstag!</em> Pour les fêtes : <em>Frohe Weihnachten!</em> et <em>Frohes neues Jahr!</em>"
      },
      {
        h: "Offrir et remercier : encore le datif",
        p: "<strong>schenken</strong> (offrir, faire cadeau de) et <strong>danken</strong> (remercier) veulent aussi la personne au datif : <em>Ich schenke meiner Schwester ein Buch. Ich danke dir für das Geschenk.</em> Avec <em>schenken</em>, le cadeau est à l'accusatif (<em>ein Buch</em>) ; avec <em>danken</em>, le motif s'introduit avec <strong>für</strong> + accusatif."
      },
      {
        h: "Les dates : am + nombre ordinal",
        p: "Une date se dit avec <strong>am</strong> et le nombre <strong>ordinal</strong>. On l'écrit avec un point : <em>am 3. Oktober</em>, et on lit <em>am dritten Oktober</em>. Le point après le nombre indique justement qu'il s'agit d'un ordinal. Jusqu'au 19, on ajoute normalement <em>-ten</em> (<em>am vierten, am zwölften</em>), à partir du 20 <em>-sten</em> (<em>am zwanzigsten, am dreißigsten</em>) ; <em>am zweiten</em> (2.) est régulier ; <em>am ersten</em> (1.), <em>am dritten</em> (3.), <em>am siebten</em> (7.) et <em>am achten</em> (8.) ont des formes particulières. Pour dire quand on a son anniversaire : <em>Wann hast du Geburtstag? Am 3. Oktober.</em> ou <em>Ich habe am 3. Oktober Geburtstag.</em>"
      },
      {
        contrast: "En français, <em>féliciter</em> et <em>remercier</em> ont un complément d'objet direct (<em>je te félicite</em>, <em>je te remercie</em>), alors qu'<em>offrir</em> a un complément indirect (<em>je t'offre un livre</em>). En allemand, les trois verbes se construisent avec la personne au datif : <em>ich gratuliere <b>dir</b></em>, <em>ich danke <b>dir</b></em>, <em>ich schenke <b>dir</b></em>. Pour les dates, le français emploie l'article et un nombre cardinal (<em>le 3 octobre</em>, mais <em>le premier</em> pour le 1<sup>er</sup>) ; l'allemand emploie <em>am</em> et un ordinal pour tous les jours, même pour le 3 et le 20."
      },
      {
        trap: "On ne dit pas «ich danke dich» ni «ich gratuliere dich» : comme <em>te</em> est un objet direct en français, on est tenté d'écrire <em>dich</em>, mais le pronom est <em>dir</em>. L'occasion ne prend pas <em>für</em> (même si l'on dit «féliciter pour») mais <em>zu</em> : <em>zum Geburtstag</em>, pas «für Geburtstag». Et <em>zum</em> ou <em>zur</em> dépend du genre allemand : <em>der Geburtstag</em> → <em>zum</em>, <em>die Hochzeit</em> → <em>zur</em>, <em>das Fest</em> → <em>zum</em>. Dans la date, le point manque souvent : <em>am 3 Oktober</em> ressemble à un cardinal, et en allemand l'écriture correcte est <em>am 3. Oktober</em>."
      },
      {
        tip: "Une phrase complète pour une carte : <em>Liebe Anna, herzlichen Glückwunsch zum Geburtstag! Ich schenke dir ein Buch.</em> Les mois se disent avec <em>im</em> (<em>im Oktober</em>), le jour précis avec <em>am</em> (<em>am 3. Oktober</em>)."
      }
    ],
    grammar: {
      title: "Verbes avec le datif et dates",
      note: "<b>gratulieren, schenken, danken</b> : la personne est au <b>datif</b>. L'occasion : <b>zum / zur</b> + datif. La date : <b>am</b> + ordinal avec un point, <b>am 3. Oktober</b>.",
      table: {
        head: ["verbe", "personne (datif)", "le reste de la phrase"],
        rows: [
          ["gratulieren", "Ich gratuliere dir", "zum Geburtstag."],
          ["schenken", "Ich schenke meiner Schwester", "ein Buch."],
          ["danken", "Ich danke dir", "für das Geschenk."],
          ["Geburtstag haben", "Ich habe", "am 3. Oktober Geburtstag."]
        ]
      },
      examples: [
        { tr: "Je te souhaite un bon anniversaire.", note: "gratulieren + dir ; zum = zu dem" },
        { tr: "Bon anniversaire !", note: "formule figée, sans verbe" },
        { tr: "Nous vous félicitons pour votre mariage.", note: "zur = zu der (die Hochzeit est féminin)" },
        { tr: "Mon anniversaire est le 3 octobre.", note: "am + ordinal avec un point" },
        { tr: "J'offre un livre à ma sœur.", note: "meiner Schwester : datif féminin" },
        { tr: "Je te remercie pour le cadeau.", note: "danken + datif ; für + accusatif" }
      ]
    },
    vocab: [
      "l'anniversaire",
      "le cadeau",
      "le mariage",
      "les félicitations, les vœux",
      "féliciter",
      "offrir, faire cadeau de",
      "remercier",
      "la fête, la célébration",
      "le gâteau",
      "fêter, célébrer",
      "la fête (entre amis)",
      "la bougie (d'anniversaire)"
    ],
    exercises: [
      {
        q: "Comment souhaites-tu un bon anniversaire à un ami ?",
        opts: [
          "Ich gratuliere dir zum Geburtstag.",
          "Ich gratuliere dich zum Geburtstag.",
          "Ich gratuliere dir für Geburtstag."
        ],
        why: "<i>Gratulieren</i> veut la personne au datif (<b>dir</b>) et l'occasion avec <b>zu</b> + datif : <i>zum Geburtstag</i>."
      },
      {
        q: "Comment dis-tu « Mon anniversaire est le 3 octobre » ?",
        opts: [
          "Mein Geburtstag ist an 3. Oktober.",
          "Mein Geburtstag ist am 3. Oktober.",
          "Mein Geburtstag ist im 3. Oktober."
        ],
        why: "Pour une date, on emploie <b>am</b> et l'ordinal avec un point : <i>am 3. Oktober</i>. <i>Im</i> sert pour le mois entier : <i>im Oktober</i>."
      },
      {
        q: "Que dis-tu à quelqu'un qui se marie ?",
        opts: [
          "Herzlichen Glückwunsch zum Hochzeit!",
          "Herzlichen Glückwunsch in der Hochzeit!",
          "Herzlichen Glückwunsch zur Hochzeit!"
        ],
        why: "<i>Die Hochzeit</i> est féminin : <b>zur</b> = <i>zu der</i>. <i>Zum</i> s'emploierait avec un masculin ou un neutre."
      },
      {
        q: "Complète : « Ich schenke ___ Schwester ein Buch. » (à ma sœur)",
        opts: ["meiner", "meine", "meinem"],
        why: "<i>Schenken</i> veut la personne au datif, et <i>die Schwester</i> est féminin : <b>meiner</b>. <i>Meinem</i> est le datif du masculin et du neutre."
      },
      {
        q: "Complète : « Ich gratuliere ___ zum Geburtstag. » (à toi)",
        hint: "datif de du",
        why: "<b>dir</b> est le datif de <i>du</i> : <i>Ich gratuliere dir zum Geburtstag.</i>"
      },
      {
        q: "Complète : « Mein Geburtstag ist ___ 3. Oktober. » (le)",
        hint: "préposition de la date",
        why: "Avec une date, on emploie <b>am</b> : <i>am 3. Oktober</i>."
      },
      {
        q: "Associe chaque mot à son sens.",
        pairs: ["anniversaire", "cadeau", "mariage", "félicitations"]
      },
      {
        tr: "Je souhaite un bon anniversaire à Tim. (verbe : gratulieren)",
        why: "<i>Ich gratuliere Tim zum Geburtstag</i>. <i>Zum Geburtstag gratuliere ich Tim</i> et <i>Ich gratuliere Tim zu seinem Geburtstag</i> conviennent aussi."
      },
      {
        tr: "Bon anniversaire, Anna ! Je te félicite et je t'offre un livre.",
        why: "Dans <i>Glückwunsch</i>, le <b>ü</b> est bref [ʏ], le <b>ck</b> se lit [k] et le <b>sch</b> est [ʃ] ; dans <i>herzlichen</i>, le <b>z</b> est [ts] et le <b>ch</b> après <b>i</b> est [ç] ; dans <i>gratuliere</i>, le <b>ie</b> est un <b>i</b> long [iː]."
      },
      {
        tr: "Je souhaite un bon anniversaire à ma sœur et je lui offre un livre.",
        why: "Dans <i>Schwester</i>, le <b>sch</b> est [ʃ] et le <b>w</b> est [v] ; dans <i>Geburtstag</i>, l'accent tombe sur <b>bur</b> et le <b>g</b> final se lit [k]."
      }
    ]
  },
  "lesson:a2-u07-l2": {
    theme: "Invitations",
    title: "Tu as envie de venir ?",
    objectives: [
      "inviter quelqu'un avec Hast du Lust, ... zu ...?",
      "répondre à une invitation : accepter et décliner",
      "mettre zu devant l'infinitif, et à l'intérieur d'un verbe séparable (mitzukommen)"
    ],
    theory: [
      {
        h: "Hast du Lust, ... zu ...?",
        p: "Pour inviter quelqu'un, on dit <strong>Hast du Lust, ...</strong> puis un second verbe à l'infinitif, précédé de <strong>zu</strong> et placé <strong>à la fin</strong> : <em>Hast du Lust, am Samstag zu meiner Party zu kommen? Ich habe Lust, ins Kino zu gehen. Ich habe keine Zeit, am Samstag zu kommen.</em> Cela fonctionne aussi avec d'autres expressions, comme <em>Es ist schön, ...</em> ou <em>Ich habe vor, ...</em> (voir la fiche de grammaire)."
      },
      {
        h: "Verbes séparables et virgule",
        p: "Avec un verbe séparable, <strong>zu se place au milieu</strong>, entre le préfixe et le verbe, et tout s'écrit en un seul mot : <em>mitkommen</em> → <em>Hast du Lust, mitzukommen?</em> ; <em>einladen</em> → <em>Es ist schön, Freunde einzuladen.</em> On met la <strong>virgule</strong> quand le groupe avec <em>zu</em> est étoffé, c'est-à-dire qu'il comprend d'autres mots que l'infinitif (<em>..., am Samstag zu meiner Party zu kommen</em>) ; après un nom comme <em>Lust</em> ou <em>Zeit</em>, on l'écrit en général toujours. Après un verbe, avec l'infinitif seul (<em>Ich versuche zu schlafen</em>), la virgule est facultative."
      },
      {
        contrast: "Le français emploie <em>de</em> + infinitif : <em>tu as envie de venir ?</em>, <em>je n'ai pas le temps de cuisiner</em>. L'allemand a <em>zu</em> + infinitif, et le groupe de l'infinitif place l'infinitif à la fin : <em>am Samstag zu meiner Party zu kommen</em>, alors qu'en français les compléments restent après l'infinitif (<em>venir samedi à ma fête</em>). Le français n'a pas de verbes à préfixe séparable : <em>mitzukommen</em> (avec <em>zu</em> à l'intérieur du mot) est donc nouveau, alors qu'en français on dirait <em>venir avec</em>, en deux mots. Après les verbes modaux (<em>können, müssen, wollen</em>), en allemand il n'y a <strong>pas</strong> de <em>zu</em>, comme en français il n'y a pas de <em>de</em> après <em>pouvoir</em> ou <em>vouloir</em> : <em>Kannst du kommen?</em> (tu peux venir ?)."
      },
      {
        trap: "On n'écrit pas «zu mitkommen» ni «mit zu kommen» : la forme est <em>mitzukommen</em>, en un seul mot. Et on ne dit pas «Hast du Lust, kommen?» : il faut <em>zu</em>, <em>Hast du Lust, zu kommen?</em>. Après un modal, en revanche, <em>zu</em> manque : <em>Ich kann kommen</em>, pas «Ich kann zu kommen»."
      },
      {
        tip: "Pour répondre : <em>Danke für die Einladung! Ich komme gern.</em> ou <em>Ich sage gern zu</em> (j'accepte). Pour décliner : <em>Leider habe ich keine Zeit.</em> ou <em>Leider muss ich absagen.</em> Pour inviter : <em>Ich lade dich zu meiner Party ein.</em>"
      }
    ],
    grammar: {
      title: "zu + infinitif",
      note: "<b>zu</b> + infinitif <b>à la fin</b> : <i>Ich habe Lust, ins Kino zu gehen.</i> Verbe séparable : <b>zu</b> au milieu (<i>mitzukommen</i>). Groupe étoffé : <b>virgule</b>. Après un verbe modal, pas de <i>zu</i>.",
      table: {
        head: ["construction", "exemple", "remarque"],
        rows: [
          ["Lust haben", "Ich habe Lust, ins Kino zu gehen.", "zu devant l'infinitif, à la fin"],
          ["keine Zeit haben", "Ich habe keine Zeit, am Samstag zu kommen.", "groupe étoffé : virgule"],
          ["verbe séparable", "Hast du Lust, mitzukommen?", "zu au milieu : mitzukommen"],
          ["verbe modal", "Kannst du kommen?", "pas de zu"]
        ]
      },
      examples: [
        { tr: "Tu as envie de venir aussi ?", note: "mitkommen : zu au milieu, mitzukommen" },
        { tr: "Tu as envie de venir samedi à ma fête ?", note: "groupe étoffé : virgule après Lust" },
        { tr: "J'ai envie d'aller au cinéma.", note: "zu gehen : zu devant l'infinitif" },
        { tr: "Je n'ai pas le temps de venir samedi.", note: "keine Zeit, ... zu kommen" },
        { tr: "C'est agréable d'inviter des amis.", note: "einladen : zu au milieu, einzuladen" },
        { tr: "Merci pour l'invitation ! Je viens avec plaisir.", note: "réponse à une invitation" }
      ]
    },
    vocab: [
      "l'invitation",
      "inviter",
      "l'envie",
      "venir aussi, venir avec (quelqu'un)",
      "décommander, décliner",
      "accepter (une invitation)",
      "l'idée",
      "l'invité",
      "la visite, les invités",
      "la surprise",
      "passer (rendre visite)",
      "le temps"
    ],
    exercises: [
      {
        q: "Comment invites-tu un ami à venir avec toi ?",
        opts: [
          "Hast du Lust, mitzukommen?",
          "Hast du Lust, zu mitkommen?",
          "Hast du Lust, mitkommen zu?"
        ],
        why: "Avec un verbe séparable, <b>zu</b> se place au milieu, en un seul mot : <i>mitzukommen</i>."
      },
      {
        q: "Complète : « Hast du Lust, heute Abend ins Kino ___ gehen? »",
        hint: "un mot court avant l'infinitif",
        why: "<b>zu</b> se place directement devant l'infinitif : <i>ins Kino zu gehen</i>."
      },
      {
        q: "Complète : « Hast du ___, mitzukommen? » (envie)",
        hint: "un nom, avec une majuscule",
        why: "<b>Lust</b> haben : <i>Hast du Lust, mitzukommen?</i>"
      },
      {
        q: "Associe chaque mot à son sens.",
        pairs: ["inviter", "décommander, décliner", "accepter (une invitation)", "surprise"]
      },
      {
        tr: "Tu as envie de venir nous voir ?",
        why: "<i>Hast du Lust, uns zu besuchen?</i> : la virgule après <i>Lust</i>, <i>zu</i> directement devant <i>besuchen</i>, à la fin."
      },
      {
        tr: "Tu as envie d'aller au cinéma ?",
        why: "<i>Hast du Lust, ins Kino zu gehen?</i> <i>In das Kino</i> convient aussi. <i>Zu gehen</i> termine la phrase."
      },
      {
        q: "Complète la phrase.",
        tr: "Merci pour l'invitation ! J'ai envie de venir à votre fête.",
        why: "<i>Die Einladung</i> est l'invitation. <i>Zu eurer Party zu kommen</i> : le premier <b>zu</b> est la préposition, le second introduit l'infinitif."
      },
      {
        q: "Tu es invité à une fête.",
        setting: "Une amie t'invite à sa fête de samedi.",
        lines: [
          { tr: "Salut ! Samedi, c'est ma fête. Tu as envie de venir ?" },
          {
            tr: "Remercie pour l'invitation et dis que tu viens avec plaisir.",
            answerTr: "Merci pour l'invitation ! Je viens avec plaisir."
          },
          { tr: "Super ! Tu peux apporter un gâteau ?" },
          {
            tr: "Réponds oui et dis que tu as envie de faire un gâteau.",
            answerTr: "Oui, avec plaisir. J'ai envie de faire un gâteau."
          }
        ]
      },
      {
        tr: "Tu as envie de venir à ma fête samedi ? Malheureusement je n'ai pas le temps, mais merci pour l'invitation !",
        why: "Dans <i>Einladung</i>, le <b>ei</b> est [aɪ] ; dans <i>Samstag</i>, le <b>s</b> initial est sonore [z] ; dans <i>besuchen</i>, le <b>ch</b> après <b>u</b> est [x] et le <b>s</b> entre deux voyelles est sonore [z]."
      },
      {
        tr: "Tu as envie de venir avec moi au cinéma ?",
        why: "Dans <i>Kino</i>, le <b>i</b> est long [iː] ; dans <i>mit</i>, le <b>i</b> est bref ; dans <i>Lust</i>, le <b>u</b> est bref et le <b>st</b> se lit [st]."
      }
    ]
  },
  "lesson:a2-u07-l3": {
    theme: "Salutations et coutumes",
    title: "Allemagne, Autriche, Suisse",
    objectives: [
      "connaître quelques salutations typiques des trois régions (Grüß Gott, Grüezi, Servus)",
      "décrire une coutume comme une tendance, avec oft et meistens",
      "dire comment on se salue et à quel registre, entre du et Sie"
    ],
    theory: [
      {
        h: "Un allemand, trois pays",
        p: "On parle allemand en Allemagne, en Autriche et en Suisse (où, en plus de l'allemand, il y a le français, l'italien et le romanche). L'Allemagne, l'Autriche et la Suisse partagent l'allemand standard, avec quelques différences nationales de vocabulaire, de prononciation et d'orthographe ; les salutations et certaines coutumes changent d'une région à l'autre. <em>Guten Tag</em> convient à peu près partout. <em>Grüß Gott</em> s'entend plus souvent dans le sud de l'Allemagne et en Autriche, <em>Servus</em> surtout en Autriche et en Bavière (on le dit aussi pour prendre congé), <em>Grüezi</em> en Suisse alémanique, <em>Moin</em> dans le nord de l'Allemagne. Ce sont des <strong>tendances</strong>, pas des règles : c'est pourquoi <em>oft</em> et <em>meistens</em> apparaissent dans les phrases de cette leçon."
      },
      {
        h: "Raconter une coutume",
        p: "Pour décrire une coutume, on emploie <strong>man</strong> avec le verbe à la troisième personne du singulier : <em>In der Schweiz sagt man oft Grüezi.</em> Une tendance se signale avec <em>oft, meistens, in vielen Familien</em> : <em>In vielen Familien feiert man Weihnachten am 24. Dezember.</em> Le registre se choisit avec <em>du</em> et <em>Sie</em> : <em>Im Büro siezt man oft, unter Freunden duzt man sich.</em>"
      },
      {
        contrast: "En France, à Noël, le réveillon du 24 au soir est pour beaucoup de familles le grand moment du repas, et les cadeaux s'ouvrent souvent à minuit ou le matin du 25. Dans beaucoup de familles allemandes, le moment principal est le soir du 24 décembre, <em>Heiligabend</em>, avec les cadeaux ; le 25 et le 26 sont des <em>Feiertage</em>. Ce sont des tendances, pas des règles : chaque famille et chaque région a ses habitudes. À la <em>Silvester</em> (le 31 décembre, la Saint-Sylvestre), beaucoup de gens fêtent avec des amis et des feux d'artifice à minuit. Autre différence : en français, <em>vous</em> sert à la fois pour le vouvoiement et pour le pluriel, alors que l'allemand distingue <em>Sie</em> (politesse), <em>du</em> (un ami) et <em>ihr</em> (plusieurs amis). Et en français, <em>bonjour</em> convient presque partout ; en allemand, le choix entre <em>Grüß Gott</em>, <em>Grüezi</em> et <em>Servus</em> dépend beaucoup de l'endroit où l'on se trouve."
      },
      {
        trap: "Ne généralise pas : «En Allemagne on dit Grüß Gott» est trop large, car dans beaucoup de régions du nord on ne l'entend presque jamais. Mieux vaut une phrase prudente : <em>In Süddeutschland und in Österreich sagt man oft Grüß Gott.</em> Autre différence d'écriture : en Suisse, on écrit en général <em>ss</em> à la place de <em>ß</em> (<em>Strasse</em>, <em>Grüsse</em>), en Allemagne et en Autriche on emploie <em>ß</em> (<em>Straße</em>, <em>Grüße</em>)."
      },
      {
        tip: "Quand tu ne sais pas quelle salutation employer, <em>Guten Tag</em> (et <em>Auf Wiedersehen</em>) est un choix sûr, et avec des personnes que tu ne connais pas, la forme <em>Sie</em> reste de mise."
      }
    ],
    grammar: {
      title: "Salutations dans les trois régions et registre",
      note: "Une salutation ou une coutume se décrit comme une <b>tendance</b> : <b>man</b> + <b>oft / meistens</b>. Entre inconnus <b>Sie</b>, entre amis <b>du</b>.",
      table: {
        head: ["salutation", "où on l'entend le plus souvent", "remarque"],
        rows: [
          ["Guten Tag", "dans les trois régions", "neutre, convient à beaucoup de situations"],
          ["Grüß Gott", "sud de l'Allemagne, Autriche", "on l'entend souvent aussi dans les magasins"],
          ["Servus", "Autriche, Bavière", "informel, pour dire bonjour et au revoir"],
          ["Grüezi", "Suisse alémanique", "se dit souvent à des personnes qu'on ne connaît pas"],
          ["Moin", "nord de l'Allemagne", "informel, s'entend à toute heure"],
          ["Hallo", "dans les trois régions", "informel, entre amis et collègues"]
        ]
      },
      examples: [
        { tr: "Dans le sud de l'Allemagne et en Autriche, on dit souvent Grüß Gott.", note: "oft : une tendance" },
        { tr: "En Suisse, on dit souvent Grüezi.", note: "man + troisième personne du singulier" },
        { tr: "Entre amis, on dit aussi Hallo.", note: "unter Freunden : registre informel" },
        { tr: "En Autriche, on dit souvent Servus.", note: "Servus : informel" },
        { tr: "Dans beaucoup de familles, on fête Noël le 24 décembre.", note: "in vielen Familien : une tendance" },
        { tr: "Au bureau, on se vouvoie souvent, entre amis on se tutoie.", note: "siezen et duzen" }
      ]
    },
    vocab: [
      "la coutume",
      "la tradition",
      "le pays, la nation",
      "la région",
      "le jour férié",
      "le marché de Noël",
      "la salutation, l'accueil",
      "saluer, accueillir",
      "typique",
      "différent, varié",
      "la différence",
      "la Saint-Sylvestre (le 31 décembre)"
    ],
    exercises: [
      {
        q: "Quelle salutation entend-on souvent en Suisse alémanique ?",
        opts: ["Grüß Gott.", "Grüezi.", "Moin."],
        why: "<i>Grüezi</i> est la salutation que l'on entend souvent en Suisse alémanique. <i>Grüß Gott</i> est plus fréquent dans le sud de l'Allemagne et en Autriche, <i>Moin</i> dans le nord de l'Allemagne."
      },
      {
        q: "Avec un client que tu ne connais pas, tu emploies en général...",
        opts: ["Sie", "du", "ihr"],
        why: "Avec des personnes que l'on ne connaît pas et dans des contextes formels, on emploie en général <b>Sie</b> ; <i>du</i> est pour les amis et la famille."
      },
      {
        q: "Quelle phrase est formulée avec prudence, sans généraliser ?",
        opts: [
          "In der Schweiz gibt es keine Traditionen.",
          "In Deutschland feiern alle Weihnachten gleich.",
          "Die Bräuche sind oft von Region zu Region verschieden."
        ],
        why: "<b>oft</b> présente les coutumes comme des tendances. Les deux autres phrases sont trop absolues et ne sont pas vraies."
      },
      {
        q: "Complète la salutation typique du sud de l'Allemagne et de l'Autriche : « Grüß ___. »",
        hint: "le deuxième mot de la salutation",
        why: "<b>Grüß Gott</b> : on l'entend souvent dans le sud de l'Allemagne et en Autriche."
      },
      {
        q: "Associe chaque mot à son sens.",
        pairs: ["coutume", "jour férié", "marché de Noël", "différence"]
      },
      {
        tr: "En Autriche, on dit souvent Servus.",
        why: "<i>In Österreich sagt man oft Servus</i>. <i>Man sagt in Österreich oft Servus</i>, <i>Oft sagt man in Österreich Servus</i>, <i>Man sagt oft in Österreich Servus</i> et <i>Servus sagt man in Österreich oft</i> conviennent aussi."
      },
      {
        tr: "Chez nous, on dit souvent Hallo.",
        why: "<i>Bei uns sagt man oft Hallo</i>. <i>Man sagt bei uns oft Hallo</i>, <i>Oft sagt man bei uns Hallo</i>, <i>Man sagt oft bei uns Hallo</i> et <i>Hallo sagt man bei uns oft</i> conviennent aussi."
      },
      {
        q: "Complète la phrase.",
        tr: "En Suisse, on dit souvent Grüezi. En Autriche, on dit souvent Servus.",
        why: "<i>Die Schweiz</i> après <i>in der</i> ; <i>Österreich</i> après <i>in</i>, sans article."
      },
      {
        tr: "Dans le sud de l'Allemagne et en Autriche, on dit souvent Grüß Gott. En Suisse, on dit souvent Grüezi. Entre amis, on dit aussi Hallo.",
        why: "Dans <i>Grüß</i>, le <b>ü</b> est long [yː] et le <b>ß</b> est un <b>s</b> sourd ; dans <i>Österreich</i>, le <b>ö</b> est long [øː] et le <b>ch</b> final après <b>ei</b> est [ç] ; dans <i>Servus</i>, le <b>s</b> initial est sonore [z] et le <b>v</b> est [v]."
      },
      {
        tr: "Les coutumes sont souvent différentes d'une région à l'autre.",
        why: "Dans <i>Bräuche</i>, le <b>äu</b> est [ɔʏ] et le <b>ch</b> après <b>äu</b> est [ç] ; dans <i>verschieden</i>, le <b>sch</b> est [ʃ] et le <b>ie</b> est un <b>i</b> long [iː]."
      }
    ]
  },
  "lesson:a2-u07-l4": {
    theme: "Comment et quand",
    title: "normalement, lentement",
    objectives: [
      "employer un adjectif comme adverbe, sans terminaison (langsam, schnell, laut)",
      "employer normalerweise, leider, hoffentlich et vielleicht",
      "mettre l'adverbe en tête et le verbe en deuxième position"
    ],
    theory: [
      {
        h: "L'adjectif qui sert d'adverbe",
        p: "En allemand, l'<strong>adjectif</strong> sans terminaison peut servir d'<strong>adverbe</strong>, c'est-à-dire dire comment se fait une action : <em>Er spricht langsam. Sie fährt schnell. Wir singen laut.</em> C'est le même mot que l'on emploie pour décrire un nom : <em>Der Zug ist langsam</em>, mais devant un nom il prend une terminaison (<em>ein langsamer Zug</em>) ; comme adverbe, il n'y a jamais de terminaison."
      },
      {
        h: "Adverbes de phrase : normalerweise, leider, hoffentlich, vielleicht",
        p: "Certains adverbes disent quelque chose sur la <strong>phrase entière</strong> : <strong>normalerweise</strong> (d'habitude), <strong>leider</strong> (malheureusement), <strong>hoffentlich</strong> (espérons que, j'espère que), <strong>vielleicht</strong> (peut-être). Ils peuvent ouvrir la phrase, et alors le verbe reste en <strong>deuxième position</strong> et le sujet passe après : <em>Normalerweise feiere ich meinen Geburtstag mit Freunden. Leider habe ich am Samstag keine Zeit. Hoffentlich kommst du zur Party. Vielleicht kommt Tim später.</em> Dans la phrase, ils se trouvent en général après le verbe : <em>Ich habe leider keine Zeit.</em>"
      },
      {
        contrast: "Le français forme beaucoup d'adverbes avec <em>-ment</em> (<em>lentement, rapidement</em>) ou emploie l'adjectif tel quel (<em>il parle fort</em>) ; l'allemand emploie presque toujours l'adjectif tel quel : <em>langsam</em> veut dire à la fois « lent » et « lentement ». L'ordre des mots est l'autre différence : en français, <em>Malheureusement, je n'ai pas le temps</em> garde le sujet avant le verbe, mais en allemand, quand l'adverbe ouvre la phrase, le verbe vient tout de suite : <em>Leider habe ich keine Zeit</em>. Quant à <em>hoffentlich</em>, c'est un adverbe à lui seul : le français construit la phrase avec <em>j'espère que</em> ou <em>espérons que</em>, l'allemand non : <em>Hoffentlich kommst du</em>, sans <em>dass</em>."
      },
      {
        trap: "<em>normal</em> est un adjectif (<em>Das ist normal</em>), alors que « normalement » se dit <em>normalerweise</em>. Quand l'un de ces mots ouvre la phrase, le verbe vient juste après : <em>Leider habe ich keine Zeit</em>, pas «Leider ich habe keine Zeit». Et n'ajoute pas de terminaison à l'adverbe : <em>Er spricht langsam</em>, pas «Er spricht langsame»."
      },
      {
        tip: "D'autres adverbes utiles à apprendre avec ceux-ci : <em>deutlich</em> (clairement), <em>leise</em> (doucement, à voix basse), <em>später</em> (plus tard), <em>natürlich</em> (naturellement, bien sûr)."
      }
    ],
    grammar: {
      title: "Adverbes : adjectif sans terminaison et adverbes de phrase",
      note: "Un <b>adjectif sans terminaison</b> sert d'adverbe : <i>Er spricht langsam.</i> Les adverbes de phrase comme <b>normalerweise, leider, hoffentlich, vielleicht</b> peuvent ouvrir la phrase : le verbe reste en <b>deuxième position</b>.",
      table: {
        head: ["mot", "sens", "exemple"],
        rows: [
          ["normalerweise", "d'habitude", "Normalerweise esse ich um zwölf Uhr."],
          ["leider", "malheureusement", "Leider habe ich keine Zeit."],
          ["hoffentlich", "espérons que, j'espère que", "Hoffentlich kommst du zur Party."],
          ["vielleicht", "peut-être", "Vielleicht komme ich später."],
          ["langsam", "lent ; lentement", "Er spricht langsam."]
        ]
      },
      examples: [
        { tr: "D'habitude, je fête mon anniversaire avec des amis.", note: "normalerweise ouvre la phrase : verbe en deuxième position" },
        { tr: "Malheureusement, je n'ai pas le temps samedi.", note: "leider : habe ich" },
        { tr: "J'espère que tu viendras à la fête.", note: "hoffentlich, sans dass" },
        { tr: "Anna danse lentement et avec grâce.", note: "langsam et schön : adjectifs employés comme adverbes" },
        { tr: "Nous chantons fort.", note: "laut : pas de terminaison" },
        { tr: "Peut-être que Tim viendra plus tard.", note: "vielleicht : kommt Tim" }
      ]
    },
    vocab: [
      "d'habitude, normalement",
      "malheureusement",
      "espérons que, j'espère que",
      "peut-être",
      "lent ; lentement",
      "rapide ; rapidement",
      "fort, à voix haute",
      "doucement, à voix basse",
      "clair ; clairement",
      "plus tard, après",
      "particulièrement, surtout",
      "naturellement, bien sûr"
    ],
    exercises: [
      {
        q: "Quel mot signifie « malheureusement » ?",
        opts: ["hoffentlich", "leider", "vielleicht"],
        why: "<b>leider</b> = malheureusement. <i>Hoffentlich</i> est « j'espère que », <i>vielleicht</i> est « peut-être »."
      },
      {
        q: "Dans quelle phrase <i>langsam</i> décrit-il le verbe, sans terminaison ?",
        opts: ["Das Kind ist langsam.", "Das ist ein langsames Kind.", "Das Kind spricht langsam."],
        why: "Dans <i>Das Kind spricht langsam</i>, <b>langsam</b> dit comment l'enfant parle, et il n'a pas de terminaison. Dans les deux autres phrases, il décrit l'enfant."
      },
      {
        q: "Complète avec le mot de la leçon : « ___ feiere ich meinen Geburtstag zu Hause. » (d'habitude)",
        hint: "commence par n",
        why: "<b>Normalerweise</b> ouvre la phrase, et le verbe reste en deuxième position : <i>feiere ich</i>."
      },
      {
        q: "Complète : « ___ habe ich am Samstag keine Zeit. » (malheureusement)",
        hint: "adverbe de phrase",
        why: "<b>Leider</b> ouvre la phrase et le verbe vient juste après : <i>habe ich</i>."
      },
      {
        q: "Complète : « Die Kinder singen sehr ___. » (fort)",
        hint: "adjectif, sans terminaison",
        why: "<b>laut</b> est un adjectif sans terminaison qui sert d'adverbe."
      },
      {
        q: "Associe chaque mot à son sens.",
        pairs: ["d'habitude", "malheureusement", "j'espère que", "peut-être"]
      },
      {
        tr: "Malheureusement, je n'ai pas le temps.",
        why: "<i>Leider habe ich keine Zeit</i>. <i>Ich habe leider keine Zeit</i> convient aussi."
      },
      {
        q: "Complète la phrase.",
        tr: "Il parle lentement et je le comprends bien. J'espère que tu viendras à la fête !",
        why: "<i>Langsam</i> est l'adjectif sans terminaison employé comme adverbe ; <i>Hoffentlich</i> ouvre la phrase et le verbe <i>kommst</i> reste en deuxième position."
      },
      {
        tr: "D'habitude, je fête mon anniversaire à la maison. Malheureusement, je n'ai pas le temps samedi, mais peut-être que nous ferons la fête plus tard.",
        why: "Dans <i>normalerweise</i>, le <b>w</b> est [v] et le <b>ei</b> est [aɪ] ; dans <i>vielleicht</i>, l'accent tombe sur la deuxième syllabe (<i>-leicht</i>), le <b>ei</b> est [aɪ] et le <b>ch</b> final est [ç] ; dans <i>später</i>, le <b>sp</b> initial est [ʃp]."
      },
      {
        tr: "J'espère que tu viendras à la fête. Peut-être que nous ferons la fête plus tard.",
        why: "Dans <i>hoffentlich</i>, le <b>ch</b> après <b>i</b> est [ç] ; dans <i>später</i>, le <b>sp</b> initial se lit [ʃp] ; dans <i>vielleicht</i>, le <b>v</b> est [f]."
      }
    ]
  },
  "lesson:a2-u07-test": {
    theme: "Contrôle",
    title: "Test : Fêtes et coutumes",
    objectives: ["vérifier gratulieren et le datif, les dates, zu + infinitif, les salutations dans les trois régions et les adverbes"],
    theory: [
      {
        p: "Dix questions sur l'unité. On réussit avec 70 %. Ne relis pas les leçons pendant que tu réponds : si tu ne te souviens pas de quelque chose, mieux vaut retourner réviser."
      }
    ],
    exercises: [
      {
        q: "Complète : « Wir gratulieren ___ zur Hochzeit. » (à vous)",
        hint: "datif de ihr",
        why: "<b>euch</b> est le datif de <i>ihr</i> : <i>Wir gratulieren euch zur Hochzeit.</i>"
      },
      {
        q: "Complète : « Der Kurs beginnt ___ 5. Mai. » (le)",
        hint: "préposition de la date",
        why: "Avec une date, on emploie <b>am</b> : <i>am 5. Mai</i>."
      },
      {
        q: "Complète : « Hast du Lust, ins Kino ___ gehen? »",
        hint: "devant l'infinitif",
        why: "<b>zu</b> se place directement devant l'infinitif : <i>ins Kino zu gehen</i>."
      },
      {
        q: "Complète : « ___ kommst du zur Party. » (j'espère que)",
        hint: "adverbe de phrase",
        why: "<b>Hoffentlich</b> ouvre la phrase et le verbe <i>kommst</i> reste en deuxième position. Après <i>hoffentlich</i>, il n'y a pas de <i>dass</i>."
      },
      {
        q: "Complète : « Ich schenke ___ Bruder ein Buch. » (à mon frère)",
        opts: ["meinem", "meinen", "mein"],
        why: "<i>Schenken</i> veut la personne au datif, et <i>der Bruder</i> est masculin : <b>meinem</b>."
      },
      {
        q: "Quelle phrase est une invitation correcte ?",
        opts: ["Hast du Lust, zu mitkommen?", "Hast du Lust, mitzukommen?", "Hast du Lust, mitkommen?"],
        why: "Avec un verbe séparable, <b>zu</b> se place au milieu : <i>mitzukommen</i>, en un seul mot."
      },
      {
        q: "Que signifie <i>leider</i> ?",
        opts: ["d'habitude", "peut-être", "malheureusement"],
        why: "<b>leider</b> = malheureusement. <i>Normalerweise</i> est « d'habitude », <i>vielleicht</i> est « peut-être »."
      },
      {
        q: "Associe chaque mot à son sens.",
        pairs: ["féliciter", "cadeau", "invitation", "coutume"]
      },
      {
        tr: "Bon anniversaire ! Tu as envie de venir samedi à ma fête ?",
        why: "Dans <i>Glückwunsch</i>, le <b>ü</b> est bref [ʏ] et le <b>sch</b> est [ʃ] ; dans <i>Samstag</i>, le <b>s</b> initial est sonore [z] ; dans <i>Lust</i>, le <b>u</b> est bref."
      },
      {
        tr: "Je te souhaite un bon anniversaire. Tu as envie de faire la fête avec nous ?",
        why: "Dans <i>gratuliere</i>, le <b>ie</b> est un <b>i</b> long [iː] ; dans <i>Geburtstag</i>, l'accent tombe sur <b>bur</b> ; dans <i>feiern</i>, le <b>ei</b> est [aɪ]."
      }
    ]
  },
  "unit:a2-u08": {
    title: "Projets",
    grammarNote: "vorhaben + zu · révision des temps (Perfekt, Präteritum, Futur, Konjunktiv II) · révision des cas et des pronoms · weil, dass, als, wenn"
  },
  "lesson:a2-u08-l1": {
    theme: "Projets et intentions",
    title: "J'ai l'intention de ...",
    objectives: [
      "dire ce qu'on a l'intention de faire avec Ich habe vor, ... zu ...",
      "demander les projets de quelqu'un avec Was hast du vor?",
      "parler de l'avenir avec le présent et un indicateur de temps, ou avec werden"
    ],
    theory: [
      {
        h: "vorhaben + zu + infinitif",
        p: "Pour dire ce qu'on a l'<strong>intention</strong> de faire, on emploie le verbe <strong>vorhaben</strong>, suivi d'un second verbe à l'infinitif avec <strong>zu</strong>, à la fin de la phrase : <em>Ich habe vor, im Sommer nach Wien zu ziehen. Hast du vor, nach dem Studium in Berlin zu arbeiten?</em> Avec un verbe à particule séparable, <em>zu</em> se place au milieu, en un seul mot : <em>umziehen</em> → <em>Ich habe vor, im Sommer umzuziehen.</em> On écrit la virgule quand le groupe avec <em>zu</em> contient d'autres mots que l'infinitif."
      },
      {
        h: "vorhaben est un verbe séparable",
        p: "<em>Vorhaben</em> se sépare comme <em>aufstehen</em> : <strong>haben</strong> prend les terminaisons et <strong>vor</strong> va à la fin de la proposition principale : <em>Ich habe vor, ... / Wir haben vor, ...</em> Sans second verbe, on peut demander <em>Was hast du morgen vor?</em> (qu'est-ce que tu as prévu demain ?), et la réponse peut être <em>Ich habe nichts vor</em> (je n'ai rien de prévu)."
      },
      {
        h: "L'avenir : présent ou werden",
        p: "Pour les projets, l'allemand emploie souvent le <strong>présent</strong> avec un indicateur de temps : <em>Nächstes Jahr ziehe ich nach Berlin.</em> Le <strong>Futur I</strong> (<em>werden</em> en deuxième position, infinitif à la fin) exprime notamment un événement futur ou une prévision ; selon le contexte, il peut aussi servir à faire une promesse : <em>Ich werde im Herbst Informatik studieren.</em> Après <em>werden</em> et après les verbes de modalité, il n'y a pas de <em>zu</em>."
      },
      {
        contrast: "En français, on dit <em>avoir l'intention de</em> + infinitif : <em>j'ai l'intention de déménager</em>, avec <em>de</em>. L'allemand a <em>vorhaben</em> avec <em>zu</em> + infinitif, et la particule <em>vor</em> se détache et passe à la fin. L'expression de l'avenir diffère aussi : le français a le futur simple (<em>je déménagerai</em>) et le futur proche (<em>je vais déménager</em>), alors que l'allemand emploie très souvent le présent avec un indicateur de temps (<em>Nächstes Jahr ziehe ich um</em>)."
      },
      {
        trap: "On ne dit pas «Ich habe vor, umziehen» ni «Ich habe vor, zu umziehen» : avec un verbe séparable, la forme est <em>umzuziehen</em>. Et après <em>werden</em>, pas de <em>zu</em> : <em>Ich werde studieren</em>, pas «Ich werde zu studieren». Ne confonds pas <em>Ich habe vor, ... zu ...</em> avec <em>Ich will ...</em> : après <em>wollen</em>, l'infinitif s'emploie sans <em>zu</em> (<em>Ich will umziehen</em>)."
      },
      {
        tip: "Pour décrire un projet en deux phrases : <em>Ich habe vor, im Sommer umzuziehen. Dort werde ich studieren.</em> D'abord l'intention avec <em>vorhaben</em>, puis la suite avec <em>werden</em>."
      }
    ],
    grammar: {
      title: "vorhaben + zu et le futur",
      note: "<b>vorhaben</b> + <b>zu</b> + infinitif à la fin : <i>Ich habe vor, nach Wien zu ziehen.</i> Verbe séparable : <b>zu</b> au milieu (<i>umzuziehen</i>). Futur : présent + indicateur de temps, ou <b>werden</b> + infinitif.",
      table: {
        head: ["construction", "exemple", "remarque"],
        rows: [
          ["vorhaben + zu", "Ich habe vor, im Sommer nach Wien zu ziehen.", "vor à la fin de la principale, zu + infinitif à la fin"],
          ["verbe séparable", "Ich habe vor, im Sommer umzuziehen.", "zu au milieu : umzuziehen"],
          ["présent + temps", "Nächstes Jahr ziehe ich nach Berlin.", "le futur avec un indicateur de temps"],
          ["Futur I", "Ich werde im Herbst Informatik studieren.", "werden en deuxième position, infinitif à la fin"]
        ]
      },
      examples: [
        { tr: "J'ai l'intention de déménager cet été.", note: "umziehen : zu au milieu, umzuziehen" },
        { tr: "Tu as l'intention de travailler à Vienne après tes études ?", note: "question : Hast du vor, ... zu ...?" },
        { tr: "Nous avons l'intention de chercher un appartement.", note: "zu devant suchen, à la fin" },
        { tr: "Qu'est-ce que tu as prévu demain ?", note: "vorhaben sans second verbe : vor à la fin" },
        { tr: "L'année prochaine, je déménage à Berlin.", note: "présent avec indicateur de temps" },
        { tr: "À l'automne, j'étudierai l'informatique.", note: "Futur I : werden + infinitif" }
      ]
    },
    vocab: [
      "le projet, le plan",
      "avoir l'intention, avoir prévu",
      "planifier",
      "le déménagement",
      "déménager",
      "les études universitaires, le cursus (pluriel die Studien, rarement employé)",
      "faire des études (à l'université)",
      "le poste, l'emploi",
      "le boulot (familier)",
      "résilier (un contrat), démissionner",
      "l'examen",
      "la formation professionnelle"
    ],
    exercises: [
      {
        tr: "Le présent de vorhaben, toutes les personnes.",
        why: "<i>Ich habe vor, du hast vor, er hat vor, wir haben vor, ihr habt vor, sie haben vor</i> : <i>haben</i> prend les terminaisons, et <i>vor</i> va à la fin de la proposition principale."
      },
      {
        q: "Comment dit-on « J'ai l'intention de déménager cet été » ?",
        opts: [
          "Ich habe vor, im Sommer umzuziehen.",
          "Ich habe vor, im Sommer zu umziehen.",
          "Ich habe vor, im Sommer umziehen zu."
        ],
        why: "Avec un verbe séparable, <b>zu</b> se place au milieu, en un seul mot : <i>umzuziehen</i>."
      },
      {
        q: "Complète : « Ich habe vor, nach dem Studium in Berlin ___ arbeiten. »",
        hint: "devant l'infinitif",
        why: "<b>zu</b> se place directement devant l'infinitif : <i>in Berlin zu arbeiten</i>."
      },
      {
        q: "Complète : « Wir ___ im Sommer nach Wien ziehen. » (Futur I de werden, wir)",
        hint: "werden, wir",
        why: "<b>Werden</b> est en deuxième position et l'infinitif <i>ziehen</i> reste à la fin : <i>Wir werden im Sommer nach Wien ziehen.</i>"
      },
      {
        q: "Complète : « Ich habe ___, im Herbst zu studieren. » (vorhaben)",
        hint: "la partie détachée de vorhaben",
        why: "<b>Vor</b> : <i>vorhaben</i> est séparable, et la particule reste à la fin de la principale, avant la virgule."
      },
      {
        q: "Complète la phrase.",
        tr: "J'ai l'intention de résilier le contrat de location en été.",
        why: "<i>Ich habe vor, im Sommer meine Wohnung zu kündigen</i> : <i>habe</i> avec <i>ich</i>, et <i>zu</i> devant <i>kündigen</i>, à la fin."
      },
      {
        q: "Remets les mots dans l'ordre.",
        tr: "J'ai l'intention de déménager cet été.",
        why: "<i>Ich habe vor, im Sommer umzuziehen.</i> « Cet été » se rapporte au déménagement, pas à l'intention : il se place donc dans le groupe avec <i>zu</i>, après la virgule."
      },
      {
        q: "Traduis : « J'ai l'intention de déménager à Vienne cet été. » (utilise vorhaben)",
        why: "<i>Ich habe vor, im Sommer nach Wien umzuziehen</i> : <i>umzuziehen</i> en un seul mot. <i>nach Wien zu ziehen</i> convient aussi."
      },
      {
        tr: "J'ai l'intention de déménager à Vienne cet été. Là-bas, j'étudierai l'informatique.",
        why: "Dans <i>Wien</i>, le <b>W</b> est [v] et le <b>ie</b> se lit [iː] ; dans <i>Sommer</i>, le <b>S</b> initial devant voyelle est normalement sonore [z] ; dans <i>studieren</i>, le <b>st</b> initial est [ʃt]."
      },
      {
        tr: "Après mes études, j'ai l'intention de travailler à Berlin.",
        why: "Dans <i>Studium</i>, le <b>st</b> initial est [ʃt] ; dans <i>nach</i>, le <b>ch</b> après <b>a</b> est [x]."
      }
    ]
  },
  "lesson:a2-u08-l2": {
    theme: "Révision des temps",
    title: "Révision : les temps",
    objectives: [
      "choisir le bon temps : Perfekt, Präteritum, présent ou Futur I, Konjunktiv II",
      "former le Perfekt avec haben ou sein et le Partizip II",
      "employer le Präteritum de sein, haben et des verbes de modalité",
      "faire une demande ou exprimer un souhait avec könnten et hätte gern"
    ],
    theory: [
      {
        h: "Quatre façons de parler du temps",
        p: "Le <strong>Perfekt</strong> (<em>haben</em> ou <em>sein</em> + Partizip II) est le passé de la langue parlée : <em>Gestern habe ich gearbeitet. Wir sind nach Wien umgezogen.</em> Le <strong>Präteritum</strong> s'emploie surtout avec <em>sein, haben</em> et les verbes de modalité, même à l'oral : <em>Ich war krank. Wir hatten keinen Hund. Ich musste arbeiten.</em> Pour l'avenir : le présent avec un indicateur de temps (<em>Morgen fahre ich</em>) ou <strong>werden</strong> + infinitif. Le <strong>Konjunktiv II</strong> sert aux demandes et aux souhaits : <em>Könnten Sie mir helfen? Ich hätte gern mehr Zeit.</em>"
      },
      {
        h: "haben ou sein au Perfekt",
        p: "La plupart des verbes forment le Perfekt avec <strong>haben</strong> : <em>Ich habe studiert.</em> Les verbes intransitifs qui expriment un changement de lieu ou d'état prennent <strong>sein</strong> (pas tous les verbes de mouvement : <em>tanzen</em> prend <strong>haben</strong>) : <em>Ich bin umgezogen. Wir sind angekommen.</em> De même <em>sein</em> et <em>bleiben</em> : <em>Ich bin geblieben.</em> Le verbe conjugué est en deuxième position, le Partizip II à la fin."
      },
      {
        contrast: "Le français a le passé composé et l'imparfait (<em>j'ai habité</em> / <em>j'habitais</em>). L'allemand n'a pas d'imparfait qui corresponde : à l'oral, il emploie le Perfekt pour presque tout (<em>Ich habe damals in Berlin gewohnt</em>), et le Präteritum apparaît surtout avec <em>war, hatte</em> et les verbes de modalité. Pour l'auxiliaire, le français emploie <em>être</em> avec quelques verbes (<em>aller, arriver, rester, partir</em>) et avec les verbes pronominaux, et le principe allemand (changement de lieu ou d'état) est proche, mais la liste diffère : <em>déménager</em> prend <em>avoir</em> en français, alors qu'<em>umziehen</em> prend <em>sein</em>. Le <em>Konjunktiv II</em> de politesse (<em>Könnten Sie ...?</em>, <em>Ich hätte gern ...</em>) joue le rôle du conditionnel (<em>pourriez-vous, je voudrais</em>)."
      },
      {
        trap: "On ne mélange pas les deux ordres : «Gestern ich habe gearbeitet» met le verbe en troisième position, alors que <em>Gestern habe ich gearbeitet</em> a le verbe conjugué en deuxième. On ne dit pas «Ich habe umgezogen» (calqué sur <em>j'ai déménagé</em>) : <em>umziehen</em> se comporte comme un verbe de mouvement et prend <em>sein</em>, <em>Ich bin umgezogen</em>. Et la demande est <em>Könnten Sie ...?</em>, pas «Könnte Sie ...?»."
      },
      {
        tip: "Avant d'écrire une phrase, demande-toi : est-ce déjà arrivé (Perfekt, ou <em>war/hatte</em>), est-ce que cela arrivera (présent + temps, ou <em>werden</em>), ou est-ce une demande (Konjunktiv II) ? Puis vérifie où se trouve le verbe conjugué : en deuxième position dans une principale déclarative, en première position dans une question fermée et dans une demande (<em>Könnten Sie mir helfen?</em>)."
      }
    ],
    grammar: {
      title: "Révision des temps",
      note: "<b>Perfekt</b> : haben/sein + Partizip II à la fin. <b>Präteritum</b> : war, hatte, verbes de modalité. <b>Futur</b> : présent + temps, ou <b>werden</b> + infinitif. <b>Konjunktiv II</b> : könnten, hätte gern.",
      table: {
        head: ["temps", "exemple", "emploi"],
        rows: [
          ["Perfekt", "Gestern habe ich den ganzen Tag gearbeitet.", "passé de la langue parlée"],
          ["Perfekt avec sein", "Letztes Jahr sind wir nach Wien umgezogen.", "mouvement ou changement d'état"],
          ["Präteritum", "Als Kind war ich oft krank.", "sein, haben, verbes de modalité"],
          ["Futur", "Morgen werde ich dich anrufen.", "présent + temps, ou werden"],
          ["Konjunktiv II", "Könnten Sie mir bitte helfen?", "demandes et souhaits"]
        ]
      },
      examples: [
        { tr: "Hier, j'ai travaillé toute la journée.", note: "Perfekt avec haben" },
        { tr: "L'année dernière, nous avons déménagé à Vienne.", note: "Perfekt avec sein" },
        { tr: "Enfant, j'étais souvent malade, et nous n'avions pas de chien.", note: "Präteritum de sein et haben" },
        { tr: "La semaine prochaine, je vais à Hambourg.", note: "présent avec indicateur de temps" },
        { tr: "Demain, je t'appellerai.", note: "Futur I : werden + infinitif" },
        { tr: "Pourriez-vous m'aider, s'il vous plaît ? Je voudrais avoir plus de temps.", note: "Konjunktiv II de politesse et de souhait" }
      ]
    },
    vocab: [
      "le CV",
      "l'expérience",
      "le stage",
      "la candidature",
      "le chef",
      "le collègue",
      "le salaire",
      "le cours"
    ],
    exercises: [
      {
        tr: "Le Perfekt de umziehen, toutes les personnes.",
        why: "<i>Ich bin umgezogen, du bist umgezogen, er ist umgezogen, wir sind umgezogen, ihr seid umgezogen, sie sind umgezogen</i> : <i>umziehen</i> prend <i>sein</i>, et le Partizip II a <i>-ge-</i> au milieu."
      },
      {
        tr: "Le Präteritum de arbeiten, toutes les personnes.",
        why: "<i>Arbeitete, arbeitetest, arbeitete, arbeiteten, arbeitetet, arbeiteten</i> : le radical finit par <i>-t</i>, donc on insère un <b>-e-</b> entre le radical et la terminaison."
      },
      {
        tr: "Le Konjunktiv II de können, toutes les personnes.",
        why: "<i>Könnte, könntest, könnte, könnten, könntet, könnten</i> : la forme se déduit du Präteritum <i>konnte</i> avec l'Umlaut."
      },
      {
        q: "Quelle phrase est correcte ? (Hier, j'ai écrit une lettre.)",
        opts: [
          "Gestern ich habe einen Brief geschrieben.",
          "Gestern habe ich einen Brief geschrieben.",
          "Gestern habe ich einen Brief schrieben."
        ],
        why: "Avec <i>gestern</i> en première position, le verbe conjugué (<i>habe</i>) reste en deuxième, le sujet le suit et le Partizip II <i>geschrieben</i> va à la fin."
      },
      {
        q: "Quelle phrase est une demande polie ?",
        opts: [
          "Könnten Sie mir bitte helfen?",
          "Können Sie mir bitte geholfen?",
          "Könnte Sie mir bitte helfen?"
        ],
        why: "<b>Könnten Sie ...?</b> : avec <i>Sie</i>, la forme est <i>könnten</i>, et l'infinitif <i>helfen</i> va à la fin."
      },
      {
        q: "Complète la phrase.",
        tr: "L'année dernière, nous avons déménagé à Vienne.",
        why: "<i>Letztes Jahr sind wir nach Wien umgezogen</i> : <i>umziehen</i> forme le Perfekt avec <b>sein</b>."
      },
      {
        q: "Complète la phrase.",
        tr: "Enfant, j'étais souvent malade, et nous n'avions pas de chien.",
        why: "<i>Als Kind war ich oft krank, und wir hatten keinen Hund</i> : Präteritum de <i>sein</i> (<i>war</i>) et de <i>haben</i> (<i>hatten</i>)."
      },
      {
        q: "Complète la phrase (premier blanc : werden, Futur I ; deuxième blanc : haben au Konjunktiv II).",
        tr: "Demain, je t'appellerai. Je voudrais avoir plus de temps.",
        why: "<i>Morgen werde ich dich anrufen</i> : Futur I, avec l'infinitif à la fin. <i>Ich hätte gern mehr Zeit</i> : Konjunktiv II de <i>haben</i>, pour un souhait."
      },
      {
        q: "Traduis : « Hier, j'ai travaillé toute la journée. » (utilise le Perfekt)",
        why: "<i>Gestern habe ich den ganzen Tag gearbeitet</i>, ou <i>Ich habe gestern den ganzen Tag gearbeitet</i> : <i>habe</i> en deuxième position, <i>gearbeitet</i> à la fin."
      },
      {
        tr: "L'année dernière, j'ai déménagé à Vienne. Maintenant, j'y travaille, et l'année prochaine, je suivrai un cours. Je voudrais avoir plus de temps.",
        why: "Dans <i>Wien</i>, le <b>W</b> est [v] ; dans <i>besuchen</i>, le <b>ch</b> après <b>u</b> est [x] ; dans <i>gern</i>, le <b>g</b> est [g]."
      },
      {
        tr: "L'année dernière, j'ai déménagé, et à l'automne, j'étudierai.",
        why: "Dans <i>umgezogen</i>, le <b>z</b> se lit toujours [ts] et le <b>g</b> est [g] ; dans <i>studieren</i>, le <b>st</b> initial est [ʃt] ; dans <i>werde</i>, le <b>w</b> est [v]."
      }
    ]
  },
  "lesson:a2-u08-l3": {
    theme: "Révision des cas et des pronoms",
    title: "Révision : cas et pronoms",
    objectives: [
      "choisir entre le pronom à l'accusatif et au datif",
      "employer l'article au datif (dem, der, dem, den)",
      "placer dans le bon ordre pronom et nom, accusatif et datif",
      "reconnaître les verbes qui veulent le datif (helfen, danken, gehören, schenken)"
    ],
    theory: [
      {
        h: "Les pronoms : nominatif, accusatif, datif",
        p: "<strong>ich / mich / mir</strong>, <strong>du / dich / dir</strong>, <strong>er / ihn / ihm</strong>, <strong>sie / sie / ihr</strong>, <strong>es / es / ihm</strong>, <strong>wir / uns / uns</strong>, <strong>ihr / euch / euch</strong>, <strong>sie / sie / ihnen</strong>. L'accusatif répond à <em>wen? was?</em> (<em>Ich sehe ihn.</em>), le datif à <em>wem?</em> (<em>Ich helfe ihm.</em>). Le cas dépend de la construction du verbe allemand : <em>helfen</em> et <em>danken</em> prennent le datif, même si le français dit « aider quelqu'un ». Avec <em>wir</em> et <em>ihr</em>, l'accusatif et le datif ont la même forme : <em>Er sieht uns. Er hilft uns.</em>"
      },
      {
        h: "L'article au datif",
        p: "Au datif, l'article défini est <strong>dem</strong> (masculin et neutre), <strong>der</strong> (féminin), <strong>den</strong> (pluriel ; le nom prend <strong>-n</strong>, sauf les pluriels qui finissent déjà en -n ou -en ceux en -s et certains pluriels d'origine étrangère à terminaison différente, comme <em>Praktika</em>) : <em>dem Vermieter, der Mutter, den Kindern, den Nachbarn, den Jobs, den Praktika.</em> Avec l'article indéfini ou le possessif : <em>einem, einer, meinem, meiner.</em> Verbes qui veulent le datif : <strong>helfen, danken, gehören, gefallen, gratulieren</strong>. Avec <strong>schenken</strong> (jemandem etwas schenken), le destinataire est au datif et la chose offerte à l'accusatif : <em>Ich schenke meiner Mutter einen Kuchen.</em>"
      },
      {
        h: "L'ordre des mots",
        p: "Avec deux noms, on place en général le <strong>datif</strong> d'abord, puis l'accusatif : <em>Ich gebe dem Mann das Buch.</em> Avec deux pronoms, l'<strong>accusatif</strong> d'abord, puis le datif : <em>Ich gebe es ihm.</em> Avec un pronom et un nom, le pronom vient en premier : <em>Ich gebe ihm das Buch. Ich gebe es dem Mann.</em>"
      },
      {
        contrast: "En français, <em>aider</em> et <em>remercier</em> ont un complément d'objet direct (<em>je l'aide, je le remercie</em>), mais <em>helfen</em> et <em>danken</em> veulent le datif (<em>ich helfe ihm, ich danke ihm</em>). Au singulier, le français a <em>lui</em> pour un homme comme pour une femme ; l'allemand distingue <em>ihm</em> (masculin et neutre) et <em>ihr</em> (féminin). Avec deux pronoms, l'ordre aussi diffère : en français, <em>je te le donne</em> place d'abord <em>te</em> (le datif), alors que l'allemand dit toujours <em>Ich gebe es dir</em>, avec l'accusatif en premier. Enfin, <em>me, te, nous, vous</em> servent pour l'objet direct comme pour l'indirect, alors que l'allemand distingue <em>mich/mir</em> et <em>dich/dir</em> ; seuls <em>uns</em> et <em>euch</em> restent identiques."
      },
      {
        trap: "On ne dit pas «Ich helfe ihn» ni «Ich danke ihn» (calqués sur <em>je l'aide, je le remercie</em>) : <em>helfen</em> et <em>danken</em> veulent le datif (<em>ihm</em>), alors que <em>sehen</em> veut l'accusatif (<em>ihn</em>). On ne dit pas «Ich gebe ihm es» : avec deux pronoms, l'accusatif vient d'abord, <em>Ich gebe es ihm</em>. Et après <em>mit, bei, zu</em>, l'article est toujours au datif : <em>beim Umzug</em> (<em>bei dem Umzug</em>), <em>mit dem Auto</em>."
      },
      {
        tip: "Pour choisir le cas, demande-toi d'abord si le verbe veut le datif (<em>helfen, danken, gehören</em>), puis si la personne reçoit quelque chose. Pour chaque verbe nouveau, apprends aussi son cas."
      }
    ],
    grammar: {
      title: "Accusatif, datif et pronoms",
      note: "<b>mich/mir, dich/dir, ihn/ihm, sie/ihr, uns/uns, euch/euch, sie/ihnen</b>. Article au datif : <b>dem, der, dem, den</b> ; au pluriel, le nom prend <b>-n</b> (<i>den Kindern</i>), sauf les pluriels en -n/-en, en -s et certains pluriels d'origine étrangère à terminaison différente (<i>den Nachbarn, den Jobs, den Praktika</i>). Deux pronoms : l'<b>accusatif</b> d'abord (<i>Ich gebe es ihm</i>).",
      table: {
        head: ["nominatif", "accusatif", "datif"],
        rows: [
          ["ich", "mich", "mir"],
          ["du", "dich", "dir"],
          ["er", "ihn", "ihm"],
          ["sie", "sie", "ihr"],
          ["es", "es", "ihm"],
          ["wir", "uns", "uns"],
          ["ihr", "euch", "euch"],
          ["sie", "sie", "ihnen"]
        ]
      },
      examples: [
        { tr: "Je le vois tous les jours au bureau.", note: "sehen + accusatif : ihn" },
        { tr: "Je l'aide pour le déménagement.", note: "helfen + datif : ihm" },
        { tr: "La clé appartient au propriétaire.", note: "gehören + datif : dem Vermieter" },
        { tr: "J'offre des fleurs à ma mère.", note: "datif féminin : meiner Mutter" },
        { tr: "Je le lui donne.", note: "deux pronoms : l'accusatif d'abord, es ihm" },
        { tr: "Nous remercions les voisins pour leur aide.", note: "datif pluriel : den Nachbarn" }
      ]
    },
    vocab: [
      "le propriétaire (le bailleur)",
      "le voisin",
      "le loyer",
      "le contrat de location",
      "la clé",
      "le carton",
      "l'adresse",
      "le meuble"
    ],
    exercises: [
      {
        q: "Comment dit-on « Je l'aide pour le déménagement » (en parlant d'un ami) ?",
        opts: [
          "Ich helfe ihm beim Umzug.",
          "Ich helfe ihn beim Umzug.",
          "Ich helfe er beim Umzug."
        ],
        why: "<i>Helfen</i> veut le datif : <b>ihm</b>. <i>Beim</i> est <i>bei dem</i>, encore le datif."
      },
      {
        q: "Quelle phrase a le bon ordre ?",
        opts: [
          "Ich gebe ihm es.",
          "Ich gebe es ihm.",
          "Ich es gebe ihm."
        ],
        why: "Avec deux pronoms, l'accusatif (<i>es</i>) vient d'abord, puis le datif (<i>ihm</i>), et le verbe conjugué reste en deuxième position."
      },
      {
        q: "Quelles phrases sont correctes ?",
        opts: [
          "Ich helfe dir.",
          "Ich helfe dich.",
          "Das gehört mir.",
          "Ich sehe ihm im Büro.",
          "Wir danken euch."
        ],
        why: "<i>Helfen, gehören, danken</i> veulent le datif (<i>dir, mir, euch</i>). <i>Sehen</i> veut l'accusatif : <i>Ich sehe ihn.</i>"
      },
      {
        q: "Complète : « Ich schenke ___ Mutter Blumen. » (article défini)",
        hint: "datif féminin",
        why: "<i>Die Mutter</i> est féminin, et au datif l'article est <b>der</b> : <i>Ich schenke der Mutter Blumen.</i>"
      },
      {
        q: "Complète : « Der Schlüssel gehört ___ Vermieter. » (article défini)",
        hint: "datif masculin",
        why: "<i>Gehören</i> veut le datif, et <i>der Vermieter</i> est masculin : <b>dem</b>."
      },
      {
        q: "Complète : « Kennst du Tim? Ich sehe ___ oft im Büro. » (« le » : Tim)",
        hint: "accusatif de er",
        why: "<i>Sehen</i> veut l'accusatif : <b>ihn</b>."
      },
      {
        q: "Complète : « Das sind Anna und Tim. Ich danke ___ für die Hilfe. » (à eux)",
        hint: "datif pluriel",
        why: "<i>Danken</i> veut le datif, et au pluriel le pronom est <b>ihnen</b>."
      },
      {
        q: "Complète la phrase.",
        tr: "Où est le carton ? Je le cherche depuis longtemps. Tu peux m'aider ?",
        why: "<i>Der Karton</i> est masculin et <i>suchen</i> veut l'accusatif : <b>ihn</b>. <i>Helfen</i> veut le datif : <b>mir</b>."
      },
      {
        tr: "J'aide mon amie pour le déménagement. Elle m'offre un gâteau, et je la remercie.",
        why: "Dans <i>Freundin</i>, le <b>eu</b> est [ɔʏ] ; dans <i>schenkt</i>, le <b>sch</b> est [ʃ] ; dans <i>Kuchen</i>, le <b>ch</b> après <b>u</b> est [x]."
      },
      {
        tr: "Je lui donne la clé, et il m'aide pour le déménagement.",
        why: "Dans <i>Schlüssel</i>, le <b>sch</b> est [ʃ] et le <b>ü</b> est arrondi ; dans <i>Umzug</i>, le <b>z</b> est [ts] ; dans <i>hilft</i>, le <b>h</b> initial est un simple souffle."
      }
    ]
  },
  "lesson:a2-u08-l4": {
    theme: "Les subordonnées",
    title: "Prêt pour le B1",
    objectives: [
      "donner une raison avec weil et rapporter avec dass",
      "choisir entre als et wenn",
      "placer le verbe conjugué à la fin dans la subordonnée",
      "gérer verbes de modalité, Perfekt et verbes séparables dans la subordonnée"
    ],
    theory: [
      {
        h: "weil, dass, als, wenn : le verbe va à la fin",
        p: "Après <strong>weil</strong> (parce que), <strong>dass</strong> (que), <strong>als</strong> et <strong>wenn</strong> (quand), le verbe conjugué va <strong>à la fin</strong>, et il y a une virgule entre la principale et la subordonnée : <em>Ich bleibe zu Hause, weil ich arbeiten muss. Ich hoffe, dass ich bald eine Stelle finde.</em> Avec un verbe de modalité à la fin, c'est lui qui est conjugué (<em>muss</em>) ; avec le Perfekt, c'est l'auxiliaire (<em>weil ich umgezogen bin</em>) ; avec un verbe séparable, la particule se recolle (<em>weil ich früh aufstehe</em>)."
      },
      {
        h: "Si la subordonnée vient en premier",
        p: "Si la subordonnée ouvre la phrase, la principale commence par le <strong>verbe conjugué</strong> : <em>Weil ich krank bin, bleibe ich zu Hause. Wenn ich Zeit habe, lerne ich Deutsch.</em> La subordonnée occupe à elle seule la première position, et le verbe de la principale reste en deuxième."
      },
      {
        h: "als ou wenn ?",
        p: "<strong>Als</strong> introduit un fait unique dans le passé : <em>Als ich in Wien angekommen bin, habe ich dich angerufen.</em> <strong>Wenn</strong> vaut pour le présent, le futur et les actions qui se répètent : <em>Wenn ich Zeit habe, lerne ich Deutsch.</em> Pour la question directe, on emploie en revanche <em>wann</em> : <em>Wann kommst du?</em>"
      },
      {
        contrast: "En français, l'ordre des mots ne change pas dans la subordonnée : <em>je reste à la maison parce que je dois travailler</em>. En allemand, <em>weil ich arbeiten muss</em> envoie le verbe de modalité à la fin. Le français a un seul <em>quand</em> ; l'allemand distingue <em>als</em> (une fois, dans le passé) de <em>wenn</em> (chaque fois, ou au présent et au futur). <em>Dass</em> correspond à <em>que</em>, mais en allemand la virgule devant est obligatoire, alors qu'en français on n'en met pas (<em>je pense que</em>)."
      },
      {
        trap: "On n'écrit pas «weil ich muss arbeiten» : le verbe de modalité va à la fin, <em>weil ich arbeiten muss</em>. Pour « parce que », il y a <em>weil</em> et <em>denn</em>, mais <em>denn</em> laisse le verbe en deuxième position (<em>..., denn ich muss arbeiten</em>). On ne dit pas «wenn ich in Wien angekommen bin» pour un fait unique du passé : il faut <em>als</em>. Et <em>weil</em> n'est pas une question : on demande <em>Warum?</em>."
      },
      {
        tip: "Quand une phrase commence par <em>weil, dass, als, wenn</em>, repère le verbe conjugué et mets-le à la fin. Si la phrase a deux verbes (<em>muss arbeiten</em>), c'est le verbe conjugué qui termine : <em>arbeiten muss</em>."
      }
    ],
    grammar: {
      title: "weil, dass, als, wenn",
      note: "Dans la subordonnée, le verbe conjugué va <b>à la fin</b>. <b>weil</b> = parce que, <b>dass</b> = que, <b>als</b> = quand (un fait unique dans le passé), <b>wenn</b> = quand ou si (présent, futur, habitude). Subordonnée en premier : la principale commence par le verbe.",
      table: {
        head: ["conjonction", "exemple", "remarque"],
        rows: [
          ["weil", "Ich bleibe zu Hause, weil ich arbeiten muss.", "le verbe de modalité à la fin"],
          ["dass", "Ich hoffe, dass ich bald eine Stelle finde.", "virgule obligatoire"],
          ["als", "Als ich in Wien angekommen bin, habe ich dich angerufen.", "un fait unique dans le passé"],
          ["wenn", "Wenn ich Zeit habe, lerne ich Deutsch.", "présent, futur, habitude"]
        ]
      },
      examples: [
        { tr: "Je reste à la maison parce que je dois travailler.", note: "weil : le verbe de modalité muss à la fin" },
        { tr: "Comme je suis malade, je reste à la maison.", note: "subordonnée en premier : la principale commence par le verbe" },
        { tr: "J'espère trouver bientôt un emploi.", note: "dass : verbe conjugué à la fin" },
        { tr: "Quand je suis arrivé à Vienne, je t'ai appelé.", note: "als : un fait unique dans le passé" },
        { tr: "Quand j'ai le temps, j'étudie l'allemand.", note: "wenn : présent, habitude" },
        { tr: "Je sais qu'il ne peut pas venir demain.", note: "dass : kommen kann, le verbe de modalité à la fin" }
      ]
    },
    vocab: [
      "l'avenir",
      "le rêve",
      "l'objectif",
      "la possibilité",
      "la décision",
      "espérer",
      "important",
      "sûr"
    ],
    exercises: [
      {
        tr: "Le présent de wollen, toutes les personnes.",
        why: "<i>Will, willst, will, wollen, wollt, wollen</i> : à la première et à la troisième personne du singulier, la forme est la même, sans terminaison."
      },
      {
        tr: "Le Präteritum de müssen, toutes les personnes.",
        why: "<i>Musste, musstest, musste, mussten, musstet, mussten</i> : l'Umlaut disparaît, et la première et la troisième personne du singulier sont identiques."
      },
      {
        tr: "Le Perfekt de bleiben, toutes les personnes.",
        why: "<i>Ich bin geblieben, du bist geblieben, er ist geblieben, wir sind geblieben, ihr seid geblieben, sie sind geblieben</i> : <i>bleiben</i> prend <i>sein</i>."
      },
      {
        q: "Complète : « Ich bleibe hier, ___ ich arbeiten muss. » (parce que)",
        hint: "conjonction qui envoie le verbe à la fin",
        why: "<b>weil</b> envoie le verbe conjugué à la fin : <i>weil ich arbeiten muss</i>. <i>Denn</i> laisserait le verbe en deuxième position."
      },
      {
        q: "Complète : « Ich hoffe, ___ ich bald eine Stelle finde. » (que)",
        hint: "conjonction pour rapporter un contenu",
        why: "<b>dass</b> introduit ce qu'on espère, et le verbe conjugué <i>finde</i> va à la fin."
      },
      {
        q: "Complète : « ___ ich in Wien angekommen bin, habe ich dich angerufen. » (quand)",
        hint: "un fait unique dans le passé",
        why: "Un fait unique dans le passé veut <b>als</b>. Avec la subordonnée en première position, la principale commence par le verbe : <i>habe ich dich angerufen</i>."
      },
      {
        q: "Complète : « ___ ich Zeit habe, lerne ich Deutsch. » (quand, habituellement)",
        hint: "présent ou habitude",
        why: "Pour le présent et pour les actions qui se répètent, on emploie <b>wenn</b>."
      },
      {
        q: "Complète : « Ich weiß, dass er morgen nicht kommen ___. » (können, er)",
        hint: "le verbe de modalité va à la fin",
        why: "Dans la subordonnée, le verbe de modalité va à la fin : <b>kann</b>. La phrase finit par <i>kommen kann</i>."
      },
      {
        q: "Complète la phrase.",
        tr: "Je reste à la maison parce que je suis malade.",
        why: "<i>Ich bleibe zu Hause, weil ich krank bin</i> : <i>weil</i> envoie <i>bin</i> à la fin."
      },
      {
        q: "Traduis : « Je reste à la maison parce que je dois travailler. »",
        why: "<i>Ich bleibe zu Hause, weil ich arbeiten muss</i> : le verbe de modalité <i>muss</i> à la fin. <i>daheim</i> convient aussi, et la subordonnée peut venir en premier : <i>Weil ich arbeiten muss, bleibe ich zu Hause.</i>"
      },
      {
        tr: "J'espère trouver un emploi à l'automne. Quand j'ai le temps, j'étudie l'allemand, parce que c'est important pour mon travail.",
        why: "Dans <i>Herbst</i>, le <b>b</b> devant <b>st</b> sonne [p] ; dans <i>wichtig</i>, la terminaison <b>-ig</b> est normalement [ɪç] en allemand standard (de-DE) et le <b>w</b> reste [v] ; dans <i>Deutsch</i>, le <b>eu</b> se lit [ɔʏ] et le <b>tsch</b> [tʃ]."
      },
      {
        tr: "Je sais que je dois beaucoup étudier, parce que l'examen est difficile.",
        why: "Dans <i>weiß</i>, le <b>ß</b> est un <b>s</b> sourd et le <b>ei</b> est [aɪ] ; dans <i>Prüfung</i>, le <b>ü</b> est arrondi ; dans <i>schwer</i>, le <b>sch</b> est [ʃ]."
      }
    ]
  },
  "lesson:a2-u08-test": {
    theme: "Contrôle",
    title: "Test : Projets",
    objectives: ["vérifier vorhaben + zu, les temps de l'A2 (Perfekt, Präteritum, Konjunktiv II), pronoms et datif, weil, dass, als et wenn"],
    theory: [
      {
        p: "Douze questions sur tout le niveau A2. On réussit avec 70 %. Ne relis pas les leçons pendant que tu réponds : si tu ne te souviens pas de quelque chose, mieux vaut retourner réviser."
      }
    ],
    exercises: [
      {
        tr: "Le Perfekt de gehen, toutes les personnes.",
        why: "<i>Ich bin gegangen, du bist gegangen, er ist gegangen, wir sind gegangen, ihr seid gegangen, sie sind gegangen</i> : <i>gehen</i> prend <i>sein</i>."
      },
      {
        tr: "Le Konjunktiv II de haben, toutes les personnes.",
        why: "<i>Hätte, hättest, hätte, hätten, hättet, hätten</i> : le Präteritum <i>hatte</i> avec l'Umlaut."
      },
      {
        q: "Complète : « Ich habe vor, im Herbst in Wien ___ studieren. »",
        hint: "devant l'infinitif",
        why: "<b>zu</b> se place directement devant l'infinitif : <i>in Wien zu studieren</i>."
      },
      {
        q: "Complète : « Als Kind ___ ich oft krank. » (être)",
        hint: "Präteritum de sein, ich",
        why: "<b>War</b> : à la première personne du singulier, il n'y a aucune terminaison."
      },
      {
        q: "Complète : « Ich helfe ___ beim Umzug. » (à lui)",
        hint: "datif de er",
        why: "<i>Helfen</i> veut le datif : <b>ihm</b>."
      },
      {
        q: "Complète : « Ich bleibe zu Hause, ___ ich krank bin. » (parce que)",
        hint: "conjonction qui envoie le verbe à la fin",
        why: "<b>weil</b> envoie le verbe conjugué à la fin : <i>weil ich krank bin</i>."
      },
      {
        q: "Complète : « Ich ___ gern ein Zimmer. » (je voudrais avoir)",
        hint: "Konjunktiv II de haben, ich",
        why: "<b>Hätte</b> : <i>Ich hätte gern ein Zimmer</i> est la forme polie pour un souhait."
      },
      {
        q: "Complète : « Wir sind gestern in Berlin ___. » (Partizip II de ankommen)",
        hint: "Partizip II avec -ge- au milieu",
        why: "<b>angekommen</b> : dans les verbes séparables, <i>-ge-</i> se place entre la particule et le verbe, et <i>ankommen</i> prend <i>sein</i>."
      },
      {
        q: "Quelle phrase est correcte ?",
        opts: [
          "Ich habe vor, nach dem Studium in Berlin zu arbeiten.",
          "Ich habe vor, nach dem Studium in Berlin arbeiten zu.",
          "Ich habe vor, nach dem Studium in Berlin zu arbeitet."
        ],
        why: "<b>zu</b> se place devant l'infinitif, et l'infinitif <i>arbeiten</i> termine la phrase."
      },
      {
        q: "Complète la phrase (utilise ankommen au Perfekt).",
        tr: "Quand je serai arrivé à Vienne, je t'appellerai.",
        why: "<i>Wenn ich in Wien angekommen bin, rufe ich dich an</i> : <i>wenn</i> vaut pour le futur, le Perfekt a l'auxiliaire <i>bin</i> à la fin, et la principale commence par le verbe <i>rufe</i>."
      },
      {
        q: "Traduis : « J'ai donné la clé à Tim. » (utilise un pronom pour Tim et le Perfekt)",
        why: "<i>Ich habe ihm den Schlüssel gegeben</i> : le pronom au datif <i>ihm</i> vient avant le nom à l'accusatif, <i>den Schlüssel</i>."
      },
      {
        tr: "J'ai l'intention de déménager, parce que j'ai un nouvel emploi.",
        why: "Dans <i>umzuziehen</i>, le <b>z</b> est [ts] et <i>zu</i> se place au milieu ; dans <i>weil</i>, le <b>w</b> est [v] ; dans <i>Stelle</i>, le <b>st</b> initial est [ʃt]."
      }
    ]
  }
});
