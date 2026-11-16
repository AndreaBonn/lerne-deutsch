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
        p: "Une question peut entrer dans une autre phrase. Si la question directe est en <strong>oui/non</strong> (<em>Ist Herr Weber im Büro?</em>), on l'introduit avec <strong>ob</strong> ; si elle contient un <strong>mot interrogatif</strong> (<em>wann, wo, wer, wie, warum</em>), ce mot reste et ouvre la subordonnée. Dans les deux cas le verbe conjugué va <strong>à la fin</strong>, et une virgule le précède : <em>Ich möchte wissen, ob Herr Weber heute im Büro ist. Ich weiß nicht, wann die Besprechung beginnt. Könnten Sie mir sagen, wo Frau Keller ist?</em> Avec un verbe séparable le préfixe se ressoude au verbe : <em>Ich weiß nicht, wann er anruft.</em> Il en va de même pour <strong>dass</strong> : <em>Könnten Sie ihr sagen, dass ich morgen wieder anrufe?</em>"
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
        contrast: "Le français <em>on</em> est le meilleur point d'appui : <em>ici, on se tutoie</em> se dit <em>Hier duzt man sich</em>, avec le verbe à la troisième personne du singulier et le réfléchi qui suit (<em>se</em> / <em>sich</em>). Une différence : <em>on</em> sert aussi, dans la langue courante, à dire <em>nous</em> (<em>on y va</em>), alors que <em>man</em> ne remplace pas <em>wir</em> de cette façon : pour « nous y allons » on dit <em>Wir gehen</em>. Le français a aussi le passif et <em>les gens</em>, mais pour une règle ou une habitude l'allemand choisit <em>man</em>."
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
  }
});
