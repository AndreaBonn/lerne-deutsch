/* ============================================================
   Textes dans la langue de l'élève (fr) pour data/core/a1-01.js
   Les clés renvoient aux id de la couche neutre ; les tableaux se
   joignent par index, leur longueur doit donc correspondre à core.
   Vérifié par scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("fr", {
  "unit:a1-u01": {
    title: "Au café",
    grammarNote: "présent · genre et pluriel · articles · du et Sie"
  },
  "lesson:a1-u01-l1": {
    theme: "Vie quotidienne",
    title: "Saluer et passer sa première commande",
    objectives: [
      "saluer et prendre congé selon l'heure de la journée",
      "commander un café avec la formule « einen Kaffee, bitte »",
      "conjuguer heißen au présent et placer le verbe en deuxième position"
    ],
    theory: [
      {
        h: "L'heure fait le salut, et l'allemand en a plusieurs",
        p: "Le français couvre presque toute la journée avec <strong>bonjour</strong> et ne change qu'à la tombée du jour avec <strong>bonsoir</strong>. L'allemand distingue : <strong>Guten Morgen</strong> le matin, <strong>Guten Tag</strong> de la fin de matinée jusqu'au soir, <strong>Guten Abend</strong> quand le soir tombe. Les frontières sont floues et varient selon les personnes. <strong>Gute Nacht</strong> n'est pas un salut d'arrivée : on le dit en se quittant tard le soir ou en allant se coucher, comme « bonne nuit »."
      },
      {
        h: "Hallo et Tschüss : le « salut » allemand a deux mots",
        p: "Entre personnes qui se disent <em>du</em>, on dit <strong>Hallo</strong> en arrivant et <strong>Tschüss</strong> en se quittant. Avec des inconnus ou en contexte formel, on dit <strong>Guten Tag</strong> en arrivant et <strong>Auf Wiedersehen</strong> en partant. Dans le sud de l'Allemagne et en Autriche on entend aussi <em>Servus</em> et <em>Grüß Gott</em>, en Suisse <em>Grüezi</em> : tu les comprendras sans peine, mais pour commencer <em>Guten Tag</em> convient partout."
      },
      {
        contrast: "En français, <em>salut</em> sert aussi bien à l'arrivée qu'au départ, et <em>bonjour</em> couvre presque tout le jour. En allemand, les deux emplois de « salut » se séparent (<em>Hallo</em> à l'arrivée, <em>Tschüss</em> au départ) et la journée se partage en trois salutations. L'erreur typique est de dire <em>Gute Nacht</em> en entrant dans un café le soir : comme « bonne nuit », c'est uniquement un salut d'adieu."
      },
      {
        h: "Le verbe est en deuxième position",
        p: "Dans la phrase principale affirmative, le verbe conjugué occupe la <strong>deuxième position</strong>, quoi qu'il y ait avant lui : <em>Ich trinke Tee</em>, mais aussi <em>Heute trinke ich Tee</em>, où le sujet passe après le verbe. La première position est occupée par un seul mot ou par un groupe de mots, jamais par deux éléments séparés."
      },
      {
        contrast: "Comme en français, le sujet est exprimé : <em>Je m'appelle Anna</em>, <em>Ich heiße Anna</em>. Mais en français, un adverbe en tête de phrase ne change pas l'ordre sujet-verbe (<em>Aujourd'hui, je bois du thé</em>), alors qu'en allemand le sujet passe derrière le verbe : <em>Heute trinke ich Tee</em>. Le sujet n'est pas forcément un pronom : <em>Der Kaffee ist heiß</em>. Enfin, <em>heißen</em> n'est pas pronominal : pas de « me » entre le sujet et le verbe, on dit <em>Ich heiße</em>."
      },
      {
        h: "Prononciation : sept points à ne pas lire à la française",
        list: [
          "<b>h</b> en début de mot se prononce par un léger souffle (<em>Hallo</em>, <em>heißen</em>), contrairement au h muet français ; après une voyelle il est en général muet et marque une voyelle longue (<em>gehen</em>), mais au début d'une syllabe accentuée à l'intérieur d'un mot il se prononce (<em>behalten</em>)",
          "<b>z</b> se lit <em>ts</em> (<em>Zucker</em>, <em>zwei</em>) ; <b>w</b> se lit comme le <em>v</em> français (<em>Wasser</em> sonne « vasser »), tandis que la <b>v</b> des mots d'origine allemande sonne souvent comme <em>f</em> (<em>Vater</em>)",
          "<b>ei</b> se lit <em>aï</em> (<em>heißen</em> sonne « haïssen »), alors que <b>ie</b> est un <em>i</em> long (<em>Wie</em> sonne « vi »)",
          "<b>s</b> simple en début de mot ou de syllabe devant une voyelle est sonore, comme dans « rose » (<em>Saft</em>, <em>Rose</em>) ; en fin de mot il reste sourd (<em>Eis</em>) ; <b>ß</b> et <b>ss</b> sont sourds, comme dans « tasse » : <em>heißen</em>, <em>Tschüss</em>",
          "<b>u</b> se lit comme le « ou » français (<em>Guten</em>, <em>Kuchen</em>) et <b>ü</b> comme le « u » français (<em>Tschüss</em>, <em>Bücher</em>) : attention, c'est l'inverse de ce que suggère l'écriture",
          "<b>ch</b> après <em>i</em> et <em>e</em> est un souffle fin, sans équivalent exact en français (<em>ich</em>, <em>Rechnung</em>) : ce n'est ni un <em>k</em> ni le <em>ch</em> de « chat »",
          "les consonnes finales se prononcent, contrairement à « petit » ou « Paris » (<em>Tag</em> finit par un son [k], <em>Abend</em> par un [t]), le <em>e</em> final aussi (<em>bitte</em>, <em>Tasse</em>), et il n'y a pas de voyelles nasales : dans <em>Kind</em>, on entend un vrai <em>n</em>"
        ]
      },
      {
        trap: "En Allemagne, <strong>Kaffee</strong> (la boisson) est d'ordinaire accentué sur la première syllabe, KÀ-fe, alors que <strong>Café</strong> (l'établissement) l'est sur la dernière, comme le français « café » ; dans certaines variétés régionales, par exemple en Autriche, <em>Kaffee</em> peut aussi être accentué sur la fin. Ne te fie pas à l'orthographe presque identique : ce sont deux mots différents, et l'accent allemand tombe d'ordinaire en début de mot, non à la fin comme en français."
      },
      {
        tip: "<em>Einen Kaffee, bitte</em> est une formule complète : apprends par cœur <em>einen Kaffee</em>, <em>einen Tee</em>, <em>ein Wasser</em>, <em>eine Cola</em>. Pourquoi <em>einen</em> et non <em>ein</em>, une autre unité l'expliquera (c'est l'accusatif) : pour l'instant, répète la formule, qui avec les noms masculins (<em>der Kaffee</em>, <em>der Tee</em>) utilise <em>einen</em>."
      }
    ],
    grammar: {
      title: "Présent de heißen (s'appeler)",
      note: "Attention au <b>ß</b> : <em>heißen</em> a le même son qu'un double s. La forme <em>heißt</em> est la même pour <em>du</em>, <em>er/sie/es</em> et <em>ihr</em> : c'est donc le pronom qui dit qui parle.",
      table: {
        head: ["personne", "forme", "exemple"],
        rows: [
          ["ich", "heiße", "Ich heiße Anna."],
          ["du", "heißt", "Wie heißt du?"],
          ["er / sie / es", "heißt", "Er heißt Tom."],
          ["wir", "heißen", "Wir heißen Weber."],
          ["ihr", "heißt", "Wie heißt ihr?"],
          ["sie / Sie", "heißen", "Wie heißen Sie?"]
        ]
      },
      examples: [
        {
          tr: "Bonjour, un café s'il vous plaît.",
          note: "« einen Kaffee » s'apprend en bloc, voir le conseil ci-dessus"
        },
        { tr: "Je m'appelle Anna." },
        { tr: "Comment tu t'appelles ?" },
        { tr: "Comment vous appelez-vous ?", note: "forme de politesse, voir la leçon 4" },
        { tr: "Aujourd'hui, je bois du thé.", note: "le verbe reste en deuxième position, le sujet passe après" },
        { tr: "Le café est petit." }
      ]
    },
    vocab: [
      "bonjour (le matin)",
      "bonjour, bon après-midi (de la fin de matinée au soir)",
      "bonsoir",
      "bonne nuit (en se quittant tard le soir ou au coucher)",
      "salut (en arrivant)",
      "salut (en partant)",
      "au revoir",
      "s'il vous plaît ; voilà, je vous en prie (en tendant quelque chose)",
      "merci",
      "excusez-moi, pardon",
      "le café (la boisson)",
      "le thé",
      "l'eau",
      "le café (l'établissement)"
    ],
    dialogue: [
      "Bonjour ! Que désirez-vous ?",
      "Bonjour. Un café, s'il vous plaît.",
      "Volontiers. Autre chose ?",
      "Non, merci. C'est tout.",
      "Voilà pour vous. Bonne journée !"
    ],
    culture: {
      title: "Un regard allemand : Café, Kaffeehaus et le café de l'après-midi",
      text: "<p>En Allemagne, le lieu typique n'est pas le café où l'on boit au comptoir : on s'assoit à une table, le serveur vient prendre la commande et l'on demande l'addition à table avec <i>Zahlen, bitte</i> ou <i>Die Rechnung, bitte</i>. On arrondit en général la somme en laissant un petit supplément : le pourboire s'appelle <i>Trinkgeld</i>.</p><p>Si tu commandes <i>einen Kaffee</i>, on t'apportera d'ordinaire un café allongé, au filtre ou à la machine, et non un petit express comme le « café » français : l'espresso se demande par son nom, <i>einen Espresso</i>. Le moment traditionnel est l'après-midi, <i>Kaffee und Kuchen</i>, c'est-à-dire café et gâteau : une pause entre le déjeuner et le dîner qui reste une tradition vivante, surtout le dimanche et en famille.</p><p>En Autriche, le <i>Kaffeehaus</i> viennois obéit à une autre logique : on peut y rester longtemps avec un seul café, d'ordinaire servi avec un verre d'eau, et lire le journal. En Suisse, le café allongé s'appelle souvent <i>Café crème</i>.</p>"
    },
    exercises: [
      {
        q: "Tu entres dans un café à 9 h du matin. Que dis-tu ?",
        opts: ["Guten Abend", "Guten Morgen", "Gute Nacht"],
        why: "<i>Guten Morgen</i> vaut pour le matin. <i>Gute Nacht</i> est un salut d'adieu pour tard le soir ou pour aller se coucher."
      },
      {
        q: "Quelle phrase affirmative a le verbe à la bonne place ?",
        opts: ["Ich Anna heiße.", "Heiße ich Anna.", "Ich heiße Anna."],
        why: "Le verbe conjugué est en deuxième position, et le sujet <b>ich</b> ne s'omet pas."
      },
      {
        tr: "Toute la conjugaison, sans tricher.",
        why: "<i>Heißen</i> suit la conjugaison régulière : radical <i>heiß-</i> plus terminaison. Pour <i>du</i>, <i>er</i> et <i>ihr</i>, la forme est la même : <b>heißt</b>."
      },
      {
        q: "Complète : « Wie ___ du ? » (Comment tu t'appelles ?)",
        hint: "deuxième personne du singulier de heißen",
        why: "Avec <b>du</b>, la terminaison est <i>-t</i> : <i>du heißt</i>. Le <i>s</i> de la terminaison <i>-st</i> se fond avec le <i>ß</i> du radical."
      },
      {
        q: "Traduis : « Bonjour, un café s'il vous plaît. »",
        why: "On dit <i>Einen Kaffee, bitte</i> : dans cette formule, <i>bitte</i> est à la fin (il peut aussi précéder <i>einen Kaffee</i>), et <i>Kaffee</i> prend une majuscule, comme tout nom allemand."
      },
      {
        tr: "Bonjour, je m'appelle Anna.",
        why: "Après la virgule commence la proposition principale : sujet <i>ich</i>, puis le verbe <i>heiße</i> en deuxième position."
      },
      {
        q: "Associe chaque mot à son sens.",
        pairs: ["merci", "s'il vous plaît / je vous en prie", "excusez-moi", "au revoir"]
      },
      {
        tr: "Bonsoir, un thé s'il vous plaît.",
        why: "Attention à <i>Abend</i> : le <b>b</b> est sonore et le <b>d</b> final se prononce comme un <i>t</i>."
      },
      {
        tr: "Bonjour, un café s'il vous plaît.",
        why: "En Allemagne, l'accent de <i>Kaffee</i> tombe d'ordinaire sur la première syllabe : KÀ-fe."
      }
    ]
  },
  "lesson:a1-u01-l2": {
    theme: "Grammaire de base",
    title: "Genre et pluriel des noms",
    objectives: [
      "reconnaître que l'allemand a trois genres : der, die, das",
      "apprendre chaque nom avec son article et son pluriel",
      "compter de 1 à 20"
    ],
    theory: [
      {
        h: "Trois genres, pas deux",
        p: "Le français n'a que le masculin et le féminin. L'allemand ajoute le <strong>neutre</strong> : <strong>der</strong> (masculin), <strong>die</strong> (féminin), <strong>das</strong> (neutre). Chaque nom appartient à l'un des trois, objets compris : <em>der Tisch</em> (la table), <em>die Tasse</em> (la tasse), <em>das Buch</em> (le livre)."
      },
      {
        contrast: "Le genre allemand ne calque pas le genre français : on ne peut donc pas le deviner par traduction. <em>Le livre</em> est masculin, mais <em>das Buch</em> est neutre ; <em>la chaise</em> est féminin, mais <em>der Stuhl</em> est masculin ; <em>le lait</em> est masculin, mais <em>die Milch</em> est féminin ; <em>la maison</em> est féminin, mais <em>das Haus</em> est neutre ; <em>le soleil</em> est masculin, mais <em>die Sonne</em> est féminin. Même pour les personnes : <em>das Kind</em> (l'enfant) est neutre. Chaque nom s'apprend donc avec son article, jamais seul."
      },
      {
        h: "Quelques indices, aucune loi",
        list: [
          "les noms formés avec le suffixe <b>-ung</b> sont féminins : <em>die Zeitung</em>, <em>die Rechnung</em>",
          "les diminutifs en <b>-chen</b> sont neutres : <em>das Brötchen</em> (attention : <em>der Kuchen</em> n'est pas un diminutif, et il est masculin)",
          "beaucoup de noms en <b>-e</b> atone sont féminins : <em>die Tasse</em>, <em>die Torte</em>",
          "les indices ont des exceptions (<em>der Käse</em> finit par un -e atone et il est masculin) : <b>on apprend l'article avec le nom</b>"
        ]
      },
      {
        h: "Le pluriel : un seul article, des finales variées",
        p: "Au nominatif pluriel, l'article défini est toujours <strong>die</strong>, pour les trois genres (aux autres cas, que tu verras plus tard, il change). En français, le <em>-s</em> du pluriel est muet et seul l'article se fait entendre (<em>la tasse, les tasses</em>) ; en allemand, c'est la finale du nom qui change et qui se prononce, parfois avec un tréma sur la voyelle (<em>Umlaut</em>) : <em>die Tische</em>, <em>die Stühle</em>, <em>die Tassen</em>, <em>die Bücher</em>, <em>die Kinder</em>. Quelques noms restent identiques (<em>die Kuchen</em>, <em>die Brötchen</em>), peu prennent <em>-s</em> (<em>die Cafés</em>, <em>die Kaffees</em>)."
      },
      {
        trap: "Le pluriel ne se déduit pas du singulier : <em>der Tisch → die Tische</em>, mais <em>das Buch → die Bücher</em>. En français, le pluriel est presque toujours régulier (+ <em>s</em>), en allemand non. Apprends le trio entier, par exemple <b>der Tisch, die Tische</b> : c'est pourquoi le vocabulaire de ce cours indique le pluriel à côté de chaque nom."
      },
      {
        tip: "Tous les noms allemands s'écrivent avec une <b>majuscule</b> : <em>der Tisch</em>, non <em>der tisch</em>. Et le tréma compte : <em>Buch</em> et <em>Bücher</em> s'écrivent différemment, et <em>Mädchen</em> sans tréma serait une faute, pas une variante. Le tréma allemand change le son de la voyelle : u et ü sont deux voyelles différentes."
      },
      {
        h: "Compter de 1 à 20",
        list: [
          "<b>1-10</b> : eins, zwei, drei, vier, fünf, sechs, sieben, acht, neun, zehn",
          "<b>11-12</b> : elf, zwölf",
          "<b>13-19</b> : dreizehn, vierzehn, fünfzehn, sechzehn, siebzehn, achtzehn, neunzehn",
          "<b>20</b> : zwanzig"
        ]
      },
      {
        trap: "Attention à <em>sechzehn</em> et <em>siebzehn</em> : <em>sechs</em> perd son <em>-s</em> et <em>sieben</em> perd son <em>-en</em>. Et <b>z</b> se lit <em>ts</em> : <em>zwei</em> sonne « tsvaï », <em>zehn</em> « tsène »."
      }
    ],
    grammar: {
      title: "Genre et pluriel",
      note: "Au nominatif pluriel, l'article défini est toujours <b>die</b>.",
      table: {
        head: ["genre", "singulier", "pluriel", "français"],
        rows: [
          ["der (m)", "der Tisch", "die Tische", "table"],
          ["die (f)", "die Tasse", "die Tassen", "tasse"],
          ["das (n)", "das Buch", "die Bücher", "livre"],
          ["das (n)", "das Kind", "die Kinder", "enfant"],
          ["der (m)", "der Kuchen", "die Kuchen", "gâteau"],
          ["das (n)", "das Brötchen", "die Brötchen", "petit pain"]
        ]
      },
      examples: [
        { tr: "La table est petite." },
        { tr: "Les tasses sont grandes.", note: "au pluriel le verbe change : sind" },
        { tr: "Le livre est neuf." },
        { tr: "L'enfant boit du lait." },
        { tr: "Trois tasses et deux gâteaux, s'il vous plaît.", note: "Kuchen ne change pas au pluriel" },
        { tr: "L'addition, s'il vous plaît." }
      ]
    },
    vocab: [
      "la table",
      "la chaise",
      "le livre",
      "la maison",
      "la tasse",
      "la femme, la dame",
      "l'homme",
      "l'enfant",
      "le journal",
      "le gâteau",
      "le lait",
      "le sucre",
      "le petit pain",
      "l'addition"
    ],
    exercises: [
      {
        q: "Lequel de ces noms est neutre ?",
        opts: ["der Tisch", "das Buch", "die Tasse"],
        why: "<i>Das Buch</i>. En français « le livre » est masculin : le genre ne se traduit pas."
      },
      {
        q: "Pluriel de « die Tasse » : « die ___ ».",
        hint: "ajoute -n",
        why: "Beaucoup de noms féminins en <i>-e</i> font leur pluriel en <i>-n</i> : <i>Tassen</i>."
      },
      {
        q: "Pluriel de « das Buch » : « die ___ ».",
        hint: "le u prend le tréma et on ajoute -er",
        why: "<i>Bücher</i> : tréma sur la voyelle et terminaison <i>-er</i>. Sans tréma, ce serait un autre mot mal écrit."
      },
      {
        q: "Choisis le bon article défini.",
        why: "Le genre et le pluriel s'apprennent avec le nom : <i>der Tisch</i>, <i>die Tasse</i>, <i>das Buch</i>.",
        items: ["table", "tasse", "livre", "maison", "journal", "homme"]
      },
      {
        q: "Au nominatif pluriel, l'article défini est toujours…",
        opts: ["der", "die", "das"],
        why: "<b>die</b> pour tous les genres au nominatif pluriel : <i>die Tische</i>, <i>die Tassen</i>, <i>die Bücher</i>."
      },
      {
        q: "Lesquels de ces noms sont féminins ?",
        opts: ["die Zeitung", "der Stuhl", "die Milch", "das Kind", "die Rechnung"],
        why: "<i>Die Zeitung</i>, <i>die Milch</i>, <i>die Rechnung</i> : l'article le dit, et les noms formés avec le suffixe <b>-ung</b> sont féminins."
      },
      {
        tr: "L'enfant boit du lait.",
        why: "Sujet, verbe, complément : le verbe <i>trinkt</i> est en deuxième position."
      },
      {
        tr: "Deux tasses et trois petits pains, s'il vous plaît.",
        why: "<i>Zwei</i> commence par <b>ts</b> : « tsvaï »."
      },
      {
        tr: "L'addition, s'il vous plaît.",
        why: "<i>Rechnung</i> : le <i>ch</i> après le <i>e</i> est le souffle fin de <i>ich</i>, et non un <i>k</i>."
      }
    ]
  },
  "lesson:a1-u01-l3": {
    theme: "Grammaire de base",
    title: "Der ou ein ? Les articles au nominatif",
    objectives: [
      "distinguer l'article défini (der, die, das) et indéfini (ein, eine)",
      "utiliser kein pour nier un nom",
      "choisir l'article d'après le genre, non d'après le son"
    ],
    theory: [
      {
        h: "Défini et indéfini",
        p: "Comme en français, l'article <strong>défini</strong> désigne quelque chose de connu (<em>der Kaffee</em>, le café dont on parle) et l'<strong>indéfini</strong> quelque chose de nouveau (<em>ein Kaffee</em>, un café quelconque). Au nominatif, c'est-à-dire quand le nom est le sujet (<em>Der Kaffee ist heiß</em>) ou le nom après <em>sein</em> (<em>Das ist eine Tasse</em>, <em>Das ist kein Tee</em>), les formes sont : <b>der / ein</b> (masculin), <b>die / eine</b> (féminin), <b>das / ein</b> (neutre), <b>die</b> (pluriel)."
      },
      {
        contrast: "En français, <em>l'</em> cache le genre devant une voyelle : <em>l'ami</em> et <em>l'amie</em> ont le même article. En allemand, il n'y a pas d'élision : <em>der</em>, <em>die</em> et <em>das</em> restent toujours visibles et ne dépendent que du genre, quelle que soit la première lettre du nom : <em>der Apfelkuchen</em>, <em>der Saft</em>, <em>der Kellner</em> prennent tous <em>der</em>. C'est plus simple, mais il faut connaître le genre."
      },
      {
        trap: "Au pluriel, il n'y a pas d'article indéfini : <em>Tassen</em> seul vaut « des tasses » ou « tasses ». Les articles <em>des</em>, <em>du</em>, <em>de la</em> du français n'ont pas d'équivalent en allemand : on laisse le nom sans article."
      },
      {
        h: "Kein : la négation du nom",
        p: "Pour dire « ce n'est pas un… » on utilise <strong>kein</strong>, qui suit les formes de <em>ein</em> : <em>kein</em> (masculin et neutre), <em>keine</em> (féminin et pluriel). <em>Das ist kein Tee</em> signifie « ce n'est pas un thé ». On ne dit pas <em>nicht ein Tee</em>."
      },
      {
        contrast: "Le français entoure le verbe de <em>ne … pas</em>, avec <em>pas de</em> devant un nom sans article. L'allemand choisit : <strong>nicht</strong> se place près du verbe ou de l'adjectif (<em>Das ist nicht heiß</em>), <strong>kein</strong> remplace l'article indéfini ou son absence devant un nom (<em>Das ist kein Tee</em>)."
      },
      {
        tip: "Quand tu <b>commandes</b>, le nom masculin prend <em>einen</em> : <em>Einen Kaffee, bitte</em>. <em>Ein</em> est la forme du sujet ; <em>einen</em> est une autre forme, utilisée quand le nom est l'objet d'une action, et nous la verrons plus tard. Pour l'instant, retiens : en commandant, on dit <em>einen</em> (masculin), <em>eine</em> (féminin), <em>ein</em> (neutre)."
      },
      {
        h: "Une phrase typique : Das ist …",
        p: "Pour identifier un objet : <em>Das ist ein Eis</em>, <em>Das ist eine Torte</em>. Le <em>das</em> du début vaut « c'est » ou « ceci » et ne change pas, que le nom qui suit soit masculin ou féminin."
      }
    ],
    grammar: {
      title: "Articles au nominatif",
      note: "Le nominatif répond à la question <em>qui / qu'est-ce qui est ?</em>. Le pluriel prend <b>die</b> ou <b>keine</b>, et n'a pas d'article indéfini.",
      table: {
        head: ["", "masculin", "féminin", "neutre", "pluriel"],
        rows: [
          ["défini", "der Kaffee", "die Tasse", "das Brötchen", "die Tassen"],
          ["indéfini", "ein Kaffee", "eine Tasse", "ein Brötchen", "(pas d'article) Tassen"],
          ["négation", "kein Kaffee", "keine Tasse", "kein Brötchen", "keine Tassen"]
        ]
      },
      examples: [
        { tr: "Le café est chaud." },
        { tr: "Un café coûte trois euros." },
        { tr: "C'est une tasse." },
        { tr: "Ce n'est pas un thé." },
        { tr: "Le gâteau est frais." },
        { tr: "Voici la carte." }
      ]
    },
    vocab: [
      "le jus",
      "le cola",
      "le chocolat",
      "la bière",
      "le vin",
      "la glace",
      "le gâteau aux pommes",
      "le gros gâteau (souvent fourré ou à étages)",
      "le pain",
      "le bretzel",
      "la carte (du menu)",
      "le serveur"
    ],
    exercises: [
      {
        q: "Complète : « ___ Tasse ist neu. » (une tasse)",
        opts: ["Ein", "Eine", "Einen"],
        why: "<i>Tasse</i> est féminin, donc <b>eine</b>."
      },
      {
        q: "Complète : « Das ist ___ Tee. » (ce n'est pas un thé)",
        opts: ["nicht", "kein", "keine"],
        why: "Pour nier un nom masculin, on emploie <b>kein</b>, et non <i>nicht ein</i>."
      },
      {
        q: "Choisis le bon article indéfini.",
        why: "<i>Ein</i> pour le masculin et le neutre, <i>eine</i> pour le féminin.",
        items: ["jus", "cola", "gros gâteau", "pain", "carte", "serveur"]
      },
      {
        q: "Complète : « Das ist ___ Eis. » (une glace)",
        hint: "das Eis est neutre",
        why: "Neutre au nominatif : <b>ein</b>. En français « la glace » est féminin : le genre ne se traduit pas."
      },
      {
        q: "Complète : « ___ Speisekarte ist neu. » (la)",
        hint: "die Speisekarte est féminin",
        why: "Féminin singulier : <b>die</b>."
      },
      {
        q: "« Tassen, bitte ! » Pourquoi n'y a-t-il pas d'article ?",
        opts: [
          "C'est une faute",
          "Au pluriel, ein/eine n'existe pas : on emploie le nom seul",
          "Il manque die devant Tassen"
        ],
        why: "L'article indéfini n'a pas de pluriel. Le français « des tasses » correspond à <i>Tassen</i> sans article."
      },
      {
        q: "Associe chaque expression à son sens.",
        pairs: ["un café", "un gros gâteau", "un pain", "pas de cola"]
      },
      {
        tr: "Voici la carte et l'eau.",
        why: "Avec <i>Hier</i> en première position, le verbe <i>ist</i> reste en deuxième position et le sujet le suit."
      },
      {
        tr: "C'est un gros gâteau.",
        why: "<i>Torte</i> : le <b>t</b> initial est aspiré et le <b>e</b> final se prononce."
      }
    ]
  },
  "lesson:a1-u01-l4": {
    theme: "Vie quotidienne",
    title: "Comment ça va ? Du ou Sie",
    objectives: [
      "demander à quelqu'un comment il va, avec du et avec Sie",
      "conjuguer sein au présent",
      "choisir entre du et Sie selon la situation"
    ],
    theory: [
      {
        h: "Du, ihr et Sie : trois formes pour « tu » et « vous »",
        p: "Le français a <em>tu</em> et <em>vous</em>. L'allemand a <strong>du</strong> (une personne avec qui tu es en confiance), <strong>ihr</strong> (plusieurs personnes avec qui tu es en confiance) et <strong>Sie</strong>, la forme de politesse, identique pour une seule personne ou pour plusieurs : <em>Sind Sie Frau Weber?</em>, <em>Wie heißen Sie?</em>"
      },
      {
        contrast: "Le « vous » français est à la fois la politesse et le pluriel ; l'allemand sépare les deux : <em>ihr</em> pour « vous » pluriel entre proches, <strong>Sie</strong> pour « vous » de politesse. Et le verbe de <em>Sie</em> est à la troisième personne du <b>pluriel</b> : <em>Sie sind</em>, alors que <em>ihr</em> prend <em>seid</em> (<em>vous êtes</em> se traduit donc de deux façons). <em>Sie</em> de politesse s'écrit toujours avec une <b>majuscule</b>, car <em>sie</em> en minuscule veut dire « elle » ou « ils/elles »."
      },
      {
        h: "Quand passer au du",
        p: "Avec des personnes que tu ne connais pas, avec les adultes, les clients, dans les bureaux et les situations officielles, on emploie <em>Sie</em>, avec <em>Herr</em> ou <em>Frau</em> et le nom de famille : <em>Frau Weber</em>. Le <em>du</em> est normal entre amis, en famille, entre personnes du même âge et dans de nombreux milieux de travail informels. D'ordinaire, c'est la personne la plus âgée ou ayant le plus de responsabilités qui propose le passage : <em>Wollen wir uns duzen?</em> Dans le doute, on emploie <em>Sie</em> et l'on attend que l'autre propose le <em>du</em>."
      },
      {
        h: "Wie geht's ? Ici on n'emploie pas sein",
        p: "Pour demander à quelqu'un comment il va, l'allemand utilise le verbe <strong>gehen</strong> (aller), mais de façon impersonnelle : <em>Wie geht es dir?</em> ou, en bref, <em>Wie geht's?</em> (« comment ça va ? »). On répond <em>Mir geht es gut</em> (« à moi, ça va bien ») ou <em>Es geht</em> (« comme ci comme ça »). <em>Dir</em>, <em>Ihnen</em> et <em>mir</em> sont des formes particulières du pronom que tu verras plus tard : pour l'instant, apprends les phrases entières."
      },
      {
        trap: "Ne traduis pas « je vais bien » mot à mot par <em>Ich gehe gut</em>, ni « je suis bien » par <em>Ich bin gut</em> : cette dernière phrase signifie « je suis bon, je suis doué », non « je vais bien ». Pour la santé et l'humeur, on dit <em>Mir geht es gut</em>. Et attention : <em>Es geht</em> est plus tiède que le français « ça va » : il veut dire « comme ci comme ça »."
      },
      {
        h: "Sein, le verbe « être »",
        p: "Comme le français <em>être</em>, <strong>sein</strong> est irrégulier : les formes ne ressemblent pas à l'infinitif (<em>bin, bist, ist, sind, seid, sind</em>) et doivent être mémorisées. Elles servent à dire qui tu es et ce qu'est quelque chose : <em>Ich bin Anna</em>, <em>Das ist ein Kaffee</em>."
      },
      {
        h: "Les questions : l'ordre des mots change",
        p: "Dans la question avec un mot interrogatif (<em>wie</em>, <em>was</em>), le verbe reste en <strong>deuxième</strong> position : <em>Wie geht es Ihnen?</em> Dans la question à laquelle on répond par oui ou non, le verbe passe en <strong>première</strong> position : <em>Sind Sie Frau Weber?</em>, <em>Bist du Anna?</em> Il n'y a ni <em>est-ce que</em> ni trait d'union : c'est l'équivalent de l'inversion française (<em>Êtes-vous Madame Weber ?</em>), mais ici elle est la règle, même à l'oral."
      }
    ],
    grammar: {
      title: "Sein (être) au présent",
      note: "Avec <b>Sie</b> (politesse), le verbe est <em>sind</em>, comme avec <em>wir</em> et avec <em>sie</em> (ils, elles).",
      table: {
        head: ["personne", "forme", "exemple"],
        rows: [
          ["ich", "bin", "Ich bin Anna."],
          ["du", "bist", "Bist du Anna?"],
          ["er / sie / es", "ist", "Das Café ist klein."],
          ["wir", "sind", "Wir sind hier."],
          ["ihr", "seid", "Seid ihr hier?"],
          ["sie / Sie", "sind", "Sind Sie Frau Weber?"]
        ]
      },
      examples: [
        { tr: "Salut Julia, ça va ?", note: "informel" },
        { tr: "Bonjour, Madame Weber, comment allez-vous ?", note: "formel" },
        { tr: "Je vais bien, merci. Et toi ?" },
        { tr: "Comme ci comme ça." },
        { tr: "Êtes-vous Madame Weber ?", note: "question oui/non : le verbe passe en première position" },
        { tr: "On se tutoie ?", note: "d'ordinaire, c'est la personne la plus âgée qui le propose" }
      ]
    },
    vocab: [
      "ça va ? (informel)",
      "comment allez-vous ? (formel)",
      "je vais bien",
      "comme ci comme ça",
      "pas mal",
      "très bien",
      "mal",
      "et toi ?",
      "et vous ?",
      "Monsieur (devant le nom de famille)",
      "Madame (devant le nom de famille)",
      "à tout à l'heure"
    ],
    dialogue: [
      "Salut Julia ! Ça va ?",
      "Salut ! Bien, et toi ?",
      "Pas mal, merci. À tout à l'heure !",
      "Bonjour, Madame Weber. Comment allez-vous ?",
      "Bien, merci. Et vous ?"
    ],
    exercises: [
      {
        q: "Tu parles à Madame Weber, que tu connais peu. Quelle question est correcte ?",
        opts: ["Wie geht es dir?", "Wie geht es Ihnen?", "Wie gehst du?"],
        why: "Avec une personne que tu vouvoies, on emploie <b>Ihnen</b>."
      },
      {
        q: "Quelle phrase ne veut PAS dire « je vais bien » ?",
        opts: ["Mir geht es gut.", "Ich bin gut.", "Es geht mir gut."],
        why: "<i>Ich bin gut</i> signifie « je suis bon, je suis doué ». Pour la santé, on utilise <i>gehen</i>."
      },
      {
        tr: "Toutes les personnes de sein.",
        why: "<i>Sein</i> est irrégulier à chaque personne, comme « être ». <i>Sind</i> vaut pour <i>wir</i>, <i>sie</i> et <i>Sie</i>."
      },
      {
        q: "Complète : « ___ Sie Frau Weber ? » (Êtes-vous Madame Weber ?)",
        hint: "question oui/non : le verbe vient en premier",
        why: "<b>Sind</b> : la forme de politesse emploie la troisième personne du pluriel."
      },
      {
        q: "Traduis en tutoyant : « Je vais bien, merci. Et toi ? »",
        why: "<i>Mir geht es gut, danke. Und dir?</i> En tutoyant, on termine par <i>dir</i>."
      },
      {
        q: "Au café, le barman, qui te connaît depuis des années, te salue le premier.",
        setting: "Le café du quartier, huit heures du matin.",
        lines: [
          { tr: "Salut ! Comment ça va aujourd'hui ?" },
          { tr: "Réponds que tu vas bien et renvoie la question.", answerTr: "Je vais bien, et toi ?" },
          { tr: "Très bien ! Un café ?" },
          { tr: "Réponds oui.", answerTr: "Oui, volontiers !" }
        ]
      },
      {
        q: "Associe chaque réponse à son sens.",
        pairs: ["comme ci comme ça", "très bien", "mal", "pas mal"]
      },
      {
        tr: "Bonjour, Madame Weber, comment allez-vous ?",
        why: "<i>Ihnen</i> se prononce « inen » : le <b>h</b> après la voyelle ne s'entend pas."
      },
      {
        tr: "Bien, merci. Et vous ?",
        why: "<i>Und Ihnen?</i> garde le ton de politesse : la question se termine par la forme <i>Ihnen</i>."
      }
    ]
  },
  "lesson:a1-u01-test": {
    theme: "Contrôle",
    title: "Contrôle de l'unité 1",
    objectives: ["vérifier les salutations, le présent de heißen et sein, le genre, le pluriel et les articles"],
    theory: [
      {
        p: "Dix questions sur toute l'unité. On valide à 70 %. Ne retourne pas voir les leçons pendant que tu réponds : si tu ne te rappelles pas quelque chose, mieux vaut aller réviser."
      }
    ],
    exercises: [
      {
        q: "Il est 18 h 30 et tu entres dans un magasin. Que dis-tu ?",
        opts: ["Guten Morgen", "Guten Abend", "Gute Nacht"],
        why: "Vers le soir, on dit <i>Guten Abend</i>. <i>Gute Nacht</i> n'est qu'un salut d'adieu."
      },
      {
        q: "Complète : « Wir ___ hier. » (Nous sommes ici.)",
        why: "<i>Sein</i>, forme de <i>wir</i> : <b>sind</b>."
      },
      {
        q: "Complète : « Wie ___ Sie ? » (Comment vous appelez-vous ?)",
        why: "<i>Heißen</i> : avec <i>Sie</i>, le verbe est à la troisième personne du pluriel."
      },
      {
        q: "Choisis l'article défini.",
        items: ["table", "tasse", "enfant", "gros gâteau"]
      },
      {
        q: "Le pluriel de « das Kind » est :",
        opts: ["die Kinde", "die Kinder", "die Kinds"],
        why: "<i>Die Kinder</i> : terminaison <b>-er</b>."
      },
      {
        q: "Quelles phrases sont correctes ?",
        opts: [
          "Das ist ein Tasse.",
          "Das ist eine Tasse.",
          "Das ist kein Tee.",
          "Das ist ein Kaffee.",
          "Das ist keine Kaffee."
        ],
        why: "<i>Tasse</i> est féminin (<i>eine</i>) ; <i>Tee</i> et <i>Kaffee</i> sont masculins (<i>kein</i>, <i>ein</i>)."
      },
      {
        q: "Traduis : « Deux thés, s'il vous plaît. »",
        why: "<i>Zwei Tee, bitte</i> : en commandant, on laisse souvent le nom invariable après le nombre. <i>Zwei Tees</i> est aussi correct."
      },
      {
        tr: "Comment allez-vous, Madame Weber ?",
        why: "Question avec <i>Wie</i> : le verbe <i>geht</i> est en deuxième position."
      },
      { tr: "Deux cafés et un petit pain, s'il vous plaît." },
      { tr: "Bonjour, comment allez-vous ?" }
    ]
  },
  "unit:a1-u02": { title: "Qui es-tu", grammarNote: "avere · les nombres · métiers et nationalités" },
  "lesson:a1-u02-l1": {
    theme: "Rencontres",
    title: "Se présenter",
    objectives: [
      "donner ton prénom, d'où tu viens et où tu habites",
      "employer le verbe chiamarsi",
      "poser les mêmes questions aux autres"
    ],
    theory: [
      {
        h: "« Je m'appelle » est un verbe pronominal",
        p: "<strong>Chiamarsi</strong> veut dire littéralement « s'appeler ». D'où <em>mi chiamo</em>. Le pronom réfléchi (<em>mi, ti, si…</em>) se place <b>devant</b> le verbe, exactement comme en français."
      },
      {
        h: "D'où tu viens : essere di ou venire da",
        p: "Pour une ville on dit <em>sono di Lione</em> ; pour un pays, <em>vengo dalla Francia</em> ou <em>sono francese</em>. Les noms de pays prennent l'article (<em>l'Italia, la Francia</em>), les noms de villes non — comme en français."
      },
      {
        trap: "Les nationalités s'écrivent en <b>minuscule</b> : <em>sono francese</em>, <em>un ragazzo italiano</em>. Le français fait pareil pour l'adjectif (« il est français ») mais met la majuscule au nom (« un Français »). En italien, jamais de majuscule, dans les deux emplois."
      },
      {
        h: "Abitare — habiter quelque part",
        p: "<em>Abitare a Roma</em> (une ville), <em>abitare in Italia</em> (un pays). Le même partage a/in revient plus tard avec les voyages, donc autant le mémoriser tout de suite en paire : <b>a + ville, in + pays</b>. Le français dit « à Rome » et « en Italie » : la logique est la même, les mots changent."
      }
    ],
    grammar: {
      title: "Chiamarsi (s'appeler) et poser des questions sur quelqu'un",
      table: {
        head: ["personne", "chiamarsi", "exemple"],
        rows: [
          ["io", "mi chiamo", "Mi chiamo Anna."],
          ["tu", "ti chiami", "Come ti chiami?"],
          ["lui / lei / Lei", "si chiama", "Come si chiama, scusi?"],
          ["noi", "ci chiamiamo", "Ci chiamiamo Rossi."],
          ["voi", "vi chiamate", "Come vi chiamate?"],
          ["loro", "si chiamano", "Si chiamano Marco e Luca."]
        ]
      },
      examples: [
        { tr: "Comment tu t'appelles ? — Je m'appelle Eva." },
        { tr: "Tu viens d'où ? — Je suis de Lyon." },
        { tr: "Je suis française, mais j'habite à Milan.", note: "nationalité en minuscule" },
        { tr: "Tu as quel âge ? — J'ai vingt-huit ans.", note: "l'âge passe toujours par avere" },
        { tr: "Enchanté, Marco. — Tout le plaisir est pour moi." }
      ]
    },
    vocab: [
      "être",
      "je m'appelle…",
      "comment tu t'appelles ?",
      "tu viens d'où ?",
      "je suis de… (ville)",
      "j'habite à… (ville)",
      "français (m. / f.)",
      "italien (m. / f.)",
      "prénom",
      "nom de famille",
      "enchanté",
      "moi aussi",
      "ah bon ?"
    ],
    exercises: [
      {
        q: "Comment demander son prénom à quelqu'un, en tutoyant ?",
        opts: ["Come si chiama?", "Come ti chiami?", "Come vi chiamate?"],
        why: "La forme de tu : <i>ti chiami</i>. La version polie est <i>come si chiama ?</i>"
      },
      {
        q: "Quelle phrase est correctement écrite ?",
        opts: ["Sono Francese.", "Sono francese.", "Sono la francese."],
        why: "Les nationalités sont en minuscule, et sans article après essere."
      },
      { q: "Complète : « ___ chiamo Marta. »", why: "Pronom réfléchi de première personne : mi chiamo." },
      {
        q: "Complète : « Abito ___ Roma. » (J'habite à Rome.)",
        why: "Les villes prennent <b>a</b>, les pays <b>in</b> : abito a Roma / abito in Italia."
      },
      {
        q: "Complète la présentation.",
        tr: "Salut ! Je m'appelle Kate, je viens de Lyon et j'habite à Bologne.",
        why: "Les trois verbes qui reviennent dans toute première phrase sur soi."
      },
      { tr: "Enchanté, je m'appelle Luca." },
      {
        q: "Tu rencontres quelqu'un dans une école de langues.",
        setting: "Premier jour dans une école de langues à Florence.",
        lines: [
          { tr: "Salut ! Moi c'est Giulia. Et toi, comment tu t'appelles ?" },
          { tr: "Présente-toi en donnant ton prénom.", answerTr: "Je m'appelle Eva." },
          { tr: "Enchantée, Eva ! Tu viens d'où ?" },
          { tr: "Dis que tu viens de Pologne : c'est la réponse modèle enregistrée.", answerTr: "Je viens de Pologne." }
        ]
      },
      { tr: "Je m'appelle Elena et j'habite à Naples." },
      { tr: "Enchanté !" }
    ]
  },
  "lesson:a1-u02-l2": {
    theme: "Grammaire de base",
    title: "Avoir, et les nombres de 0 à 100",
    objectives: [
      "conjuguer avere",
      "employer des expressions comme ho fame, ho freddo, ho ventotto anni",
      "compter jusqu'à cent et donner un prix"
    ],
    theory: [
      {
        h: "Avere travaille comme le français « avoir »",
        p: "L'italien emploie <strong>avere</strong> là où l'anglais met « être ». <em>Ho fame</em> est littéralement « j'ai faim » — et c'est déjà ce que tu dis. Même logique pour la soif, le froid, le chaud, la peur, le sommeil et l'âge. Ce chapitre, le français te l'offre en entier."
      },
      {
        h: "L'âge : toujours avere",
        p: "<em>Ho trent'anni</em>, « j'ai trente ans ». Note l'apostrophe : <em>trent'anni</em>, <em>vent'anni</em> — la voyelle finale de la dizaine tombe devant <em>anni</em>."
      },
      {
        h: "Le h qu'on n'entend jamais",
        p: "Les formes <em>ho, hai, ha, hanno</em> commencent par un <b>h</b> muet. Il ne se prononce pas du tout : il sert uniquement à les distinguer d'autres mots — <em>ho</em> (j'ai) contre <em>o</em> (ou), <em>ha</em> (il a) contre <em>a</em> (à). C'est ton h muet, avec une fonction différente."
      },
      {
        h: "Les nombres : dizaine plus unité",
        p: "À partir de 20, les nombres s'écrivent en un seul mot : <em>ventidue</em>, <em>trentasei</em>. Devant <em>uno</em> et <em>otto</em>, la dizaine perd sa voyelle finale : <b>ventuno</b>, <b>ventotto</b>, <b>trentuno</b>. Et pas de « soixante-dix » compliqué : <em>settanta</em>, <em>ottanta</em>, <em>novanta</em> sont des mots à part entière."
      }
    ],
    grammar: {
      title: "Avere (avoir) et les nombres",
      table: {
        head: ["personne", "avere", "expression"],
        rows: [
          ["io", "ho", "Ho fame. (J'ai faim.)"],
          ["tu", "hai", "Hai freddo? (Tu as froid ?)"],
          ["lui / lei / Lei", "ha", "Ha ragione. (Il a raison.)"],
          ["noi", "abbiamo", "Abbiamo sete. (Nous avons soif.)"],
          ["voi", "avete", "Avete tempo? (Vous avez le temps ?)"],
          ["loro", "hanno", "Hanno paura. (Ils ont peur.)"]
        ]
      },
      examples: [
        { tr: "1, 2, 3, 4, 5" },
        { tr: "6, 7, 8, 9, 10" },
        { tr: "11, 12, 13… 20" },
        { tr: "21, 22, 28", note: "devant uno et otto la dizaine perd sa voyelle" },
        { tr: "30, 40, 50, 60" },
        { tr: "70, 80, 90, 100" },
        { tr: "J'ai vingt-huit ans." }
      ]
    },
    vocab: [
      "avoir",
      "j'ai faim",
      "j'ai soif",
      "j'ai froid / chaud",
      "j'ai sommeil",
      "j'ai peur",
      "j'ai raison",
      "j'ai besoin de…",
      "tu as quel âge ?",
      "ça fait combien ?",
      "euro",
      "numéro",
      "numéro de téléphone"
    ],
    exercises: [
      { why: "Quatre formes commencent par un h muet : ho, hai, ha, hanno." },
      {
        q: "Comment dit-on « j'ai faim » ?",
        opts: ["Sono fame", "Ho fame", "Sto fame"],
        why: "Les états physiques passent par avere : ho fame, ho sete, ho freddo. Comme en français."
      },
      { q: "Quel nombre est « settantasei » ?", opts: ["66", "76", "86"], why: "settanta (70) + sei (6) = 76." },
      { q: "Écris en chiffres : « novantatré »", why: "novanta (90) + tre (3)." },
      {
        q: "Complète : « Ho vent___ anni. » (J'ai vingt ans.)",
        hint: "quelque chose disparaît devant « anni »",
        why: "Vent'anni — la dizaine perd sa voyelle finale devant anni."
      },
      { q: "« Tu as quel âge ? »", why: "Littéralement « combien d'années as-tu », comme en français." },
      {
        q: "Associe l'expression avec avere à son sens.",
        pairs: ["j'ai soif", "j'ai sommeil", "j'ai peur", "j'ai raison"]
      },
      {
        q: "Complète l'échange à la caisse.",
        tr: "— Ça fait combien ? — Trente-deux euros. — Je n'ai que vingt euros, désolé."
      },
      { tr: "J'ai trente-cinq ans et j'habite à Turin." },
      { tr: "Combien coûte un cappuccino ?" }
    ]
  },
  "lesson:a1-u02-l3": {
    theme: "Travail et gens",
    title: "Métiers et travail",
    objectives: [
      "dire ce que tu fais dans la vie",
      "employer fare il / essere un",
      "former le féminin des noms de métier"
    ],
    theory: [
      {
        h: "Deux constructions, deux nuances",
        p: "« Je suis architecte » a deux versions italiennes. <strong>Faccio l'architetto</strong> (littéralement « je fais l'architecte ») parle du métier que tu exerces et domine à l'oral. <strong>Sono architetto</strong> insiste sur l'identité ou le diplôme. Après <em>fare</em> vient l'article défini ; après <em>essere</em>, en général rien — comme ton « je suis architecte » sans article."
      },
      {
        h: "Formes féminines",
        list: [
          "-o → -a : <em>l'impiegato → l'impiegata</em>",
          "-e → -essa : <em>il professore → la professoressa</em>, <em>lo studente → la studentessa</em>",
          "-tore → -trice : <em>l'attore → l'attrice</em>, <em>il direttore → la direttrice</em> — exactement ton -teur/-trice",
          "invariables : <em>il/la giornalista</em>, <em>il/la dentista</em>, <em>il/la cantante</em>"
        ]
      },
      {
        h: "Des noms de métier en mouvement",
        p: "Des formes comme <em>l'avvocata</em>, <em>la sindaca</em>, <em>la ministra</em> sont aujourd'hui standard dans la presse et les documents officiels, alors qu'elles faisaient débat il y a vingt ans. À l'oral, on entend encore <em>l'avvocato</em> pour une femme. C'est le même débat que « la ministre » et « l'autrice » en français, au même stade."
      },
      {
        contrast: "Le suffixe <em>-essa</em> n'a pas d'équivalent français et surprend au début : <em>la professoressa</em>, <em>la studentessa</em>, <em>la dottoressa</em>. Ce n'est ni vieilli ni péjoratif, c'est la forme normale."
      }
    ],
    grammar: {
      title: "Fare (faire) — présent",
      note: "Irrégulier, et en même temps l'un des trois verbes italiens les plus fréquents.",
      table: {
        head: ["personne", "fare", "exemple"],
        rows: [
          ["io", "faccio", "Faccio l'insegnante."],
          ["tu", "fai", "Che lavoro fai?"],
          ["lui / lei / Lei", "fa", "Fa il medico."],
          ["noi", "facciamo", "Facciamo colazione."],
          ["voi", "fate", "Che cosa fate?"],
          ["loro", "fanno", "Fanno gli avvocati."]
        ]
      },
      examples: [
        { tr: "Tu fais quoi dans la vie ?" },
        { tr: "Je suis journaliste." },
        { tr: "Je suis ingénieur.", note: "après essere, en général pas d'article" },
        { tr: "Je travaille dans une agence." },
        { tr: "En ce moment je ne travaille pas." },
        { tr: "J'étudie encore, je suis en dernière année." }
      ]
    },
    vocab: [
      "travail, métier",
      "enseignant",
      "médecin",
      "ingénieur",
      "avocat",
      "journaliste",
      "employé de bureau",
      "cuisinier",
      "vendeur",
      "ouvrier",
      "indépendant",
      "je cherche du travail"
    ],
    exercises: [
      { why: "Attention au double c de faccio et facciamo." },
      {
        q: "Quelle phrase veut dire « je suis enseignant » et sonne le plus naturel ?",
        opts: ["Faccio l'insegnante.", "Sono la insegnante.", "Ho insegnante."],
        why: "Fare + article défini est la façon la plus courante de nommer son métier à l'oral."
      },
      {
        q: "Quel est le féminin de « il professore » ?",
        opts: ["la professora", "la professoressa", "la professrice"],
        why: "Le schéma -e → -essa, comme studente → studentessa."
      },
      {
        q: "Complète : « Mia sorella fa ___ dottoressa. »",
        why: "Après fare vient l'article défini, accordé au genre : la dottoressa."
      },
      { q: "Choisis l'article.", items: ["cuisinière", "ingénieur", "étudiante", "ouvrier"] },
      { q: "« Tu fais quoi dans la vie ? » (familier)", why: "Che lavoro fai ? — littéralement « quel travail fais-tu »." },
      {
        q: "Associe la forme masculine à la féminine.",
        pairs: ["l'attrice", "la commessa", "la studentessa", "la giornalista"]
      },
      { tr: "Je travaille dans une banque à Milan." },
      { tr: "Je suis architecte, je travaille avec mon frère." },
      { tr: "Tu fais quoi dans la vie ? Je suis journaliste." }
    ]
  },
  "lesson:a1-u02-l4": {
    theme: "Grammaire de base",
    title: "La première conjugaison",
    objectives: [
      "conjuguer n'importe quel verbe régulier en -are",
      "gérer les changements orthographiques de cercare, pagare, mangiare",
      "construire une négation et une question"
    ],
    theory: [
      {
        h: "Le groupe le plus gros et le plus prévisible",
        p: "Environ 70 % des verbes italiens finissent en <strong>-are</strong>, et presque tous se comportent pareil. Tu coupes la terminaison de l'infinitif et tu ajoutes les six tiennes : <em>-o, -i, -a, -iamo, -ate, -ano</em>. C'est ton premier groupe en -er, avec des terminaisons proches mais pas identiques."
      },
      {
        h: "Un accent qu'on ne voit pas",
        p: "À la forme <em>loro</em>, l'accent tombe sur la troisième syllabe depuis la fin : <b>par</b>-la-no, <b>la</b>-vo-ra-no. Pas « parla-NO ». La différence s'entend et les Italiens la repèrent. Le français, qui accentue toujours la fin du groupe, doit ici faire un effort conscient."
      },
      {
        h: "Une orthographe qui sauve la prononciation",
        list: [
          "<b>-care / -gare</b> ajoutent un <b>h</b> devant -i et -e : <em>cercare → cerchi, cerchiamo</em> ; <em>pagare → paghi, paghiamo</em>. C'est ton « nous plaçons » et « nous mangeons », autrement dit."
          ,
          "<b>-ciare / -giare</b> perdent le <b>i</b> devant -i : <em>mangiare → mangi</em> (pas « mangii »), <em>cominciare → cominci</em>",
          "<b>-iare</b> atone perd aussi un i : <em>studiare → studi, studiamo</em>"
        ]
      },
      {
        h: "Négation et question ne demandent aucune reconstruction",
        p: "La négation tient en un mot, <strong>non</strong>, devant le verbe : <em>non parlo italiano</em>. Pas de second élément, donc pas de « ne… pas » à caser. Et la question ne change pas l'ordre des mots : l'intonation suffit, <em>Parli italiano?</em> Aucune inversion, aucun « est-ce que »."
      }
    ],
    grammar: {
      title: "Parlare (parler) — le schéma -ARE",
      table: {
        head: ["personne", "terminaison", "parlare", "lavorare"],
        rows: [
          ["io", "-o", "parlo", "lavoro"],
          ["tu", "-i", "parli", "lavori"],
          ["lui / lei / Lei", "-a", "parla", "lavora"],
          ["noi", "-iamo", "parliamo", "lavoriamo"],
          ["voi", "-ate", "parlate", "lavorate"],
          ["loro", "-ano", "parlano", "lavorano"]
        ]
      },
      examples: [
        { tr: "Je parle un peu italien." },
        { tr: "Je ne parle pas bien, mais je comprends." },
        { tr: "Tu étudies à l'université ?", note: "une question par la seule intonation" },
        { tr: "On mange à huit heures." },
        { tr: "Tu cherches du travail à Milan ?", note: "cercare → cerchi, avec un h" },
        { tr: "Ils habitent près du centre.", note: "accent : A-bi-ta-no" }
      ]
    },
    vocab: [
      "parler",
      "travailler",
      "étudier",
      "habiter",
      "manger",
      "acheter",
      "chercher",
      "payer",
      "écouter",
      "regarder",
      "attendre",
      "commencer"
    ],
    exercises: [
      { why: "Le schéma qui couvre la majorité des verbes italiens." },
      {
        tr: "tu, noi — attention à l'orthographe",
        why: "Cerchi et cerchiamo prennent un <b>h</b> pour garder le son k."
      },
      {
        q: "Quelle forme est correcte pour « tu manges » ?",
        opts: ["mangii", "mangi", "mangie"],
        why: "Les verbes en -giare perdent le i devant la terminaison -i : mangi."
      },
      {
        q: "Complète : « Loro ___ a Bologna. » (Ils habitent à Bologne.)",
        why: "abitare, la forme de loro : -ano."
      },
      {
        q: "Mets à la forme négative : « Parlo italiano. » → « ___ parlo italiano. »",
        why: "Un seul mot, non, devant le verbe : voilà toute la négation."
      },
      { q: "« Nous cherchons un appartement à Rome. »", why: "cercare → cerchiamo (avec h), a + ville." },
      {
        q: "Quelles formes appartiennent à « studiare » ?",
        opts: ["studio", "studii", "studi", "studiamo", "studiate"],
        why: "« Studii » n'existe pas : le double i se réduit à un."
      },
      { tr: "Je ne travaille pas le samedi.", why: "« Il sabato » avec l'article veut dire « le samedi », de façon régulière." },
      { tr: "J'étudie l'italien depuis trois mois." },
      { tr: "Je ne parle pas bien, mais je comprends presque tout." }
    ]
  },
  "lesson:a1-u02-test": {
    theme: "Test",
    title: "Test de l'unité 2",
    objectives: ["vérifier avere, fare, chiamarsi, les nombres et la première conjugaison"],
    theory: [{ p: "Dix questions. On valide à 70 %." }],
    exercises: [
      { q: "« ___ chiamo Peter. »" },
      { q: "« Quanti anni ___ ? » (Tu as quel âge ?)" },
      { q: "Quel nombre est « ottantaquattro » ?", opts: ["48", "84", "94"] },
      { q: "« J'ai faim » en italien :", opts: ["Sono fame", "Ho fame", "Sto fame"] },
      {  },
      {
        q: "Quelle forme est correcte pour « tu paies » ?",
        opts: ["pagi", "paghi", "page"],
        why: "-gare ajoute un h devant -i."
      },
      { q: "Complète.", tr: "Je suis française, j'habite à Vérone et je suis enseignante." },
      { q: "« Je ne parle pas italien. »" },
      { tr: "J'ai vingt-sept ans et je cherche du travail." },
      { tr: "Je m'appelle Anna et je suis journaliste." }
    ]
  },
  "unit:a1-u03": {
    title: "Apéritif et cuisine",
    grammarNote: "piacere · article partitif · -ere et -ire"
  },
  "lesson:a1-u03-l1": {
    theme: "Cuisine",
    title: "Le verbe piacere",
    objectives: [
      "dire ce que tu aimes et ce que tu n'aimes pas",
      "choisir entre piace et piacciono",
      "demander aux autres ce qu'ils aiment"
    ],
    theory: [
      {
        h: "La phrase se construit à l'envers",
        p: "<strong>Piacere</strong> ne veut pas dire « aimer », il veut dire « plaire ». <em>Mi piace la pizza</em>, c'est littéralement « la pizza me plaît ». Le sujet grammatical, c'est <b>la chose</b>, et celui qui apprécie apparaît comme complément indirect (<em>mi, ti, gli, le, ci, vi</em>)."
      },
      {
        h: "D'où les deux formes du verbe",
        p: "Puisque le sujet est la chose, c'est elle qui décide du nombre : <em>mi piace <b>il</b> caffè</em> (une chose) contre <em>mi piacciono <b>gli</b> spaghetti</em> (plusieurs). Devant un infinitif, toujours le singulier : <em>mi piace viaggiare</em>."
      },
      {
        contrast: "Le français a exactement cette construction avec « plaire » : « la pizza me plaît », « les spaghettis me plaisent ». Le problème, c'est que tu dis plus spontanément « j'aime la pizza », qui met le sujet du mauvais côté. La solution est simple : traduis <em>mi piace</em> par « ça me plaît », jamais par « j'aime », et l'accord cesse d'être mystérieux."
      },
      {
        h: "Qui apprécie : mi, ti, gli, le…",
        list: [
          "<b>mi</b> piace — à moi",
          "<b>ti</b> piace — à toi",
          "<b>gli</b> piace — à lui ; <b>le</b> piace — à elle",
          "<b>ci</b> piace — à nous · <b>vi</b> piace — à vous · <b>gli</b> piace — à eux"
        ]
      },
      {
        trap: "La négation se met devant le pronom, pas devant le verbe : <b>non</b> mi piace. Jamais « mi non piace ». Comme ton « ça ne me plaît pas », où le ne précède aussi le pronom."
      }
    ],
    grammar: {
      title: "Piacere : le schéma de la phrase",
      note: "[pronom] + piace/piacciono + [la chose, avec son article]",
      table: {
        head: ["ce qui plaît", "forme", "exemple"],
        rows: [
          ["une chose", "piace", "Mi piace il vino rosso."],
          ["plusieurs choses", "piacciono", "Mi piacciono i dolci."],
          ["une activité", "piace", "Mi piace cucinare."],
          ["négation", "non … piace", "Non mi piace il pesce crudo."],
          ["question", "ti piace?", "Ti piace l'aperitivo?"]
        ]
      },
      examples: [
        { tr: "J'aime beaucoup le café." },
        { tr: "Tu aimes le spritz ?" },
        { tr: "On n'aime pas la bière tiède." },
        { tr: "Elle aime danser." },
        { tr: "Marco aime le poisson.", note: "devant un prénom on ajoute « a »" },
        { tr: "J'aimerais bien goûter.", note: "une forme de conditionnel : à apprendre en bloc" }
      ]
    },
    vocab: [
      "apéritif (boisson avec de quoi grignoter)",
      "spritz",
      "vin rouge / blanc",
      "bière",
      "olives",
      "chips",
      "amuse-bouches salés",
      "jambon cru",
      "fromage",
      "desserts, sucreries",
      "poisson",
      "viande",
      "cuisiner",
      "goûter"
    ],
    culture: {
      title: "Vu par les Italiens : l'apéritif n'est pas le dîner",
      text: "<p>L'<b>aperitivo</b> commence vers 18 h 30 et court jusqu'à 20 h 30. On paie la boisson (7 à 12 euros selon la ville) et ce qu'il y a au comptoir vient avec. À Milan, ça s'est transformé en buffet appelé <i>apericena</i>, à mi-chemin du dîner.</p><p>La règle que personne n'énonce : <b>sers-toi raisonnablement</b>. Une assiette montée en tour trahit un étranger plus vite qu'un accent.</p><p>Les classiques : <i>spritz</i> (Aperol ou Campari), <i>negroni</i>, un verre de vin. La bière passe aussi, même si les puristes froncent le nez.</p>"
    },
    exercises: [
      {
        q: "« ___ piacciono le olive. » Pourquoi piacciono et pas piace ?",
        opts: ["Parce qu'il s'agit de plusieurs personnes", "Parce que « le olive » est au pluriel", "Parce que c'est un passé"],
        why: "Le verbe s'accorde avec la chose qui plaît — et cette chose est au pluriel."
      },
      { q: "Complète : « Mi ___ il vino rosso. »", why: "Une seule chose au singulier → piace." },
      { q: "Complète : « Non mi ___ i film horror. »", why: "« I film » est pluriel → piacciono." },
      {
        q: "Quelle phrase est correcte ?",
        opts: ["Mi non piace il pesce.", "Non mi piace il pesce.", "Mi piace non il pesce."],
        why: "Non se place devant tout le groupe pronom + verbe."
      },
      {
        q: "Comment dit-on « Marco aime le poisson » ?",
        opts: ["Marco piace il pesce", "A Marco piace il pesce", "Marco piacciono pesce"],
        why: "Celui qui apprécie prend la préposition <b>a</b> devant son prénom."
      },
      { q: "« J'aime cuisiner. »", why: "Devant un infinitif, toujours le singulier piace." },
      { q: "Associe le pronom à la personne.", pairs: ["à moi", "à toi", "à elle", "à nous"] },
      {
        q: "Complète la conversation autour d'un apéritif.",
        tr: "— Tu aimes le spritz ? — Oui, beaucoup ! Mais je n'aime pas les olives."
      },
      { tr: "J'aime beaucoup les fromages italiens." },
      { tr: "J'aime l'apéritif, mais je n'aime pas les olives." }
    ]
  },
  "lesson:a1-u03-l2": {
    theme: "Grammaire de base",
    title: "La deuxième conjugaison et c'è / ci sono",
    objectives: [
      "conjuguer les verbes réguliers en -ere",
      "employer c'è et ci sono",
      "décrire ce qu'il y a dans un lieu"
    ],
    theory: [
      {
        h: "Presque comme -are, mais pas tout à fait",
        p: "Le groupe <strong>-ere</strong> ne diffère du premier que par trois terminaisons : <em>-e</em> au lieu de <em>-a</em>, <em>-ete</em> au lieu de <em>-ate</em>, <em>-ono</em> au lieu de <em>-ano</em>. La forme de <em>noi</em> (<em>-iamo</em>) est commune aux trois conjugaisons : la terminaison la plus facile de la langue."
      },
      {
        h: "C'est là que se cachent la plupart des irréguliers",
        p: "Beaucoup de verbes en -ere très courants ont des formes bizarres : <em>bere → bevo</em>, <em>rimanere → rimango</em>, <em>scegliere → scelgo</em>. Leur irrégularité se voit surtout au passé et au participe, qu'on abordera en A2."
      },
      {
        h: "C'è et ci sono",
        p: "<strong>C'è</strong> (« il y a », une chose) et <strong>ci sono</strong> (« il y a », plusieurs) disent qu'une chose existe quelque part. Le choix dépend du nombre, pas de la personne : <em>c'è un problema</em>, <em>ci sono due problemi</em>."
      },
      {
        contrast: "Et voilà la différence avec le français : « il y a » est invariable, il vaut pour un comme pour mille. L'italien oblige à choisir selon le nombre, et « c'è due problemi » s'entend tout de suite. Compte avant de parler."
      },
      {
        trap: "Ne confonds pas <b>c'è</b> (il y a) et <b>è</b> (il est). <em>Il ristorante è chiuso</em> : le restaurant est fermé. <em>C'è un ristorante qui vicino</em> : il y a un restaurant tout près."
      }
    ],
    grammar: {
      title: "Leggere (lire) — le schéma -ERE",
      table: {
        head: ["personne", "terminaison", "leggere", "prendere"],
        rows: [
          ["io", "-o", "leggo", "prendo"],
          ["tu", "-i", "leggi", "prendi"],
          ["lui / lei / Lei", "-e", "legge", "prende"],
          ["noi", "-iamo", "leggiamo", "prendiamo"],
          ["voi", "-ete", "leggete", "prendete"],
          ["loro", "-ono", "leggono", "prendono"]
        ]
      },
      examples: [
        { tr: "Je prends un café.", note: "« prendere » est le verbe normal pour commander" },
        { tr: "Tu lis la carte ?" },
        { tr: "Je ne vois pas le serveur." },
        { tr: "Il y a une table libre ?" },
        { tr: "Il y a deux places au comptoir." },
        { tr: "On écrit le nom pour la réservation." }
      ]
    },
    vocab: [
      "prendre, commander",
      "lire",
      "écrire",
      "voir",
      "demander",
      "répondre",
      "mettre",
      "fermer",
      "il y a",
      "place",
      "libre / occupé",
      "tout près"
    ],
    exercises: [
      { why: "Note -e, -ete, -ono : c'est toute la différence avec le groupe -are." },
      {
        q: "Quelle terminaison est commune aux trois conjugaisons ?",
        opts: ["-o à la forme io", "-iamo à la forme noi", "-ono à la forme loro"],
        why: "La forme de noi est toujours -iamo, quel que soit le groupe."
      },
      { q: "Complète : « ___ un tavolo libero? » (Il y a une table libre ?)", why: "Une table → c'è." },
      {
        q: "Complète : « ___ tre persone in fila. » (Il y a trois personnes dans la file.)",
        why: "Pluriel → ci sono."
      },
      {
        q: "« Il bar è chiuso » contre « C'è un bar qui vicino » : quelle différence ?",
        opts: [
          "Aucune, ce sont des synonymes",
          "La première décrit le bar, la seconde dit qu'il en existe un tout près",
          "La seconde est au passé"
        ],
        why: "è décrit, c'è affirme qu'une chose est présente quelque part."
      },
      { q: "« Je prends une bière, et toi ? »", why: "Prendere est le verbe par défaut pour commander en Italie." },
      {
        q: "Quels verbes appartiennent au groupe -ere ?",
        opts: ["prendere", "abitare", "scrivere", "dormire", "chiudere"]
      },
      { tr: "Je ne vois pas le serveur." },
      { tr: "Il y a une table pour deux ?" },
      { tr: "On prend deux spritz." }
    ]
  },
  "lesson:a1-u03-l3": {
    theme: "Grammaire de base",
    title: "La troisième conjugaison et le schéma -isc-",
    objectives: [
      "conjuguer les verbes comme dormire et ceux comme capire",
      "reconnaître les verbes en -ire qui demandent l'infixe -isc-",
      "employer preferire pour exprimer une préférence"
    ],
    theory: [
      {
        h: "Une terminaison, deux comportements",
        p: "Les verbes en <strong>-ire</strong> se partagent en deux sous-groupes. Le premier (<em>dormire, partire, sentire, aprire, offrire</em>) se conjugue sans surprise. Le second (<em>capire, finire, preferire, pulire, spedire</em>) insère <b>-isc-</b> à quatre formes : <em>io, tu, lui/lei, loro</em>. Les formes de <em>noi</em> et <em>voi</em> s'en passent."
      },
      {
        h: "Comment savoir de quel groupe il s'agit",
        p: "Il n'y a pas de règle : on mémorise. Ça aide de savoir que le groupe du <em>-isc-</em> est le plus gros et récupère presque tous les verbes récents (<em>gestire, inserire, garantire</em>). Les dictionnaires le signalent par <i>(-isc-)</i> à côté de l'entrée."
      },
      {
        contrast: "Le français a exactement ça avec « finir → nous finissons », mais l'infixe n'est pas aux mêmes personnes : chez toi il apparaît au pluriel, en italien il apparaît au singulier et disparaît à <em>noi</em> et <em>voi</em>. La ressemblance est un piège : la répartition est inversée."
      },
      {
        tip: "Le schéma -isc- a la forme d'une parenthèse : quatre formes avec l'infixe à l'extérieur, deux sans lui au milieu. Apprends le rythme : <b>ca-pi-sco, ca-pi-sci, ca-pi-sce — ca-piamo, ca-pite — ca-pi-scono</b>."
      }
    ],
    grammar: {
      title: "Dormire (sans -isc-) contre capire (avec -isc-)",
      table: {
        head: ["personne", "dormire", "capire", "en français"],
        rows: [
          ["io", "dormo", "capisco", "je dors / je comprends"],
          ["tu", "dormi", "capisci", "tu dors / tu comprends"],
          ["lui / lei", "dorme", "capisce", "il dort / il comprend"],
          ["noi", "dormiamo", "capiamo", "nous dormons / nous comprenons"],
          ["voi", "dormite", "capite", "vous dormez / vous comprenez"],
          ["loro", "dormono", "capiscono", "ils dorment / ils comprennent"]
        ]
      },
      examples: [
        { tr: "Je ne comprends pas, vous pouvez répéter ?" },
        { tr: "Je préférerais une table dehors." },
        { tr: "Tu finis le travail à quelle heure ?" },
        { tr: "Le magasin ouvre à neuf heures.", note: "aprire — sans -isc-" },
        { tr: "On part demain matin." },
        { tr: "Ils comprennent tout." }
      ]
    },
    vocab: [
      "comprendre",
      "finir",
      "préférer",
      "nettoyer",
      "envoyer",
      "dormir",
      "partir",
      "ouvrir",
      "offrir (une tournée)",
      "entendre, sentir",
      "suivre",
      "vous pouvez répéter ?"
    ],
    exercises: [
      { why: "La parenthèse : -isc- à io, tu, lui/lei et loro ; absent à noi et voi." },
      { why: "Dormire passe tout droit, sans infixe." },
      {
        q: "Quel verbe demande l'infixe -isc- ?",
        opts: ["partire", "preferire", "aprire"],
        why: "Preferire → preferisco, preferisci, preferisce, preferiamo, preferite, preferiscono."
      },
      {
        q: "Complète : « Noi non ___ bene. » (Nous ne comprenons pas bien.)",
        hint: "la forme de noi n'a pas d'infixe",
        why: "Capiamo — à noi et voi le -isc- disparaît."
      },
      { q: "Complète : « Loro ___ alle sette. » (Ils finissent à sept heures.)", why: "finire avec -isc- à la forme loro." },
      { q: "« Je préférerais une table dehors. »" },
      { q: "Quelles formes contiennent -isc- ?", opts: ["capisco", "capiamo", "finisce", "dormite", "puliscono"] },
      { tr: "Je ne comprends pas, vous pouvez répéter ?" },
      { tr: "Je préfère partir tôt demain matin." },
      { tr: "Pardon, je ne comprends pas. Vous pouvez répéter ?" }
    ]
  },
  "lesson:a1-u03-l4": {
    theme: "Cuisine",
    title: "L'article partitif et les quantités",
    objectives: [
      "exprimer une quantité indéterminée avec del, della, dei…",
      "employer un po' di et un chilo di",
      "faire ses courses dans une boutique"
    ],
    theory: [
      {
        h: "Du quelque chose",
        p: "L'italien exprime la quantité indéterminée avec l'<strong>article partitif</strong> : la préposition <em>di</em> fondue avec l'article défini. <em>Vorrei del pane</em> — « je voudrais du pain ». Au pluriel il couvre ce que le français dit avec « des » : <em>dei pomodori</em>."
      },
      {
        h: "Les formes",
        list: [
          "di + il = <b>del</b> pane · di + lo = <b>dello</b> zucchero · di + l' = <b>dell'</b>acqua",
          "di + la = <b>della</b> carne · di + i = <b>dei</b> pomodori",
          "di + gli = <b>degli</b> spinaci · di + le = <b>delle</b> mele"
        ]
      },
      {
        h: "Les solutions de rechange",
        p: "À la place du partitif tu peux employer <strong>un po' di</strong> (« un peu de ») ou une mesure : <em>un chilo di, un etto di, mezzo litro di</em>. À la forme négative, le partitif disparaît en général : <em>non ho pane</em>, comme « je n'ai pas de pain »."
      },
      {
        contrast: "C'est le chapitre le plus confortable de tout le niveau : le français a exactement le même article partitif, formé de la même manière avec de + article. « Du pain », « de l'eau », « des pommes » se calquent sur <em>del pane</em>, <em>dell'acqua</em>, <em>delle mele</em>. Même sa disparition sous la négation fonctionne pareil."
      },
      {
        tip: "<b>Un etto</b>, ce sont 100 grammes, et c'est l'unité de travail à la charcuterie : <em>due etti di prosciutto</em> = 200 g de jambon."
      }
    ],
    grammar: {
      title: "L'article partitif et les expressions de quantité",
      table: {
        head: ["contexte", "forme", "exemple"],
        rows: [
          ["m. + consonne", "del", "del pane"],
          ["m. + s+cons., z", "dello", "dello zucchero"],
          ["+ voyelle", "dell'", "dell'acqua, dell'olio"],
          ["f. + consonne", "della", "della carne"],
          ["m. pluriel", "dei / degli", "dei pomodori, degli spinaci"],
          ["f. pluriel", "delle", "delle mele"]
        ]
      },
      examples: [
        { tr: "Je voudrais du pain." },
        { tr: "J'achète des pommes et du raisin." },
        { tr: "Un peu de sel, pas trop." },
        { tr: "Deux cents grammes de jambon cru." },
        { tr: "Un demi-litre de lait." },
        { tr: "Je n'ai pas de sucre à la maison.", note: "pas de partitif sous la négation" }
      ]
    },
    vocab: [
      "pain",
      "lait",
      "eau",
      "sucre",
      "sel",
      "huile, huile d'olive",
      "tomates",
      "pommes",
      "cent grammes",
      "un kilo",
      "un peu",
      "un demi-litre",
      "ça ira, merci",
      "vous en voulez combien ?"
    ],
    exercises: [
      {
        q: "Comment demander du pain ?",
        opts: ["Vorrei il pane", "Vorrei del pane", "Vorrei un pane"],
        why: "Le partitif <b>del</b> exprime une quantité indéterminée."
      },
      {
        q: "Complète : « Compro ___ acqua. » (J'achète de l'eau.)",
        why: "di + l' = dell', parce que acqua commence par une voyelle."
      },
      {
        q: "Complète : « Vorrei ___ mele. » (Je voudrais des pommes.)",
        why: "di + le = delle, féminin pluriel."
      },
      {
        q: "Choisis l'article partitif.",
        items: ["pain", "sucre", "viande", "huile", "tomates", "épinards"]
      },
      {
        q: "Ça fait combien, « due etti » ?",
        opts: ["20 grammes", "200 grammes", "2 kilos"],
        why: "Un etto vaut 100 g, donc due etti = 200 g."
      },
      { q: "« Un demi-litre de lait, s'il vous plaît. »" },
      {
        q: "Tu es au comptoir d'une épicerie.",
        setting: "Une alimentari de quartier, au rayon charcuterie.",
        lines: [
          { tr: "Bonjour ! Je vous sers quoi ?" },
          { tr: "Demande 200 g de jambon.", answerTr: "Deux cents grammes de jambon, s'il vous plaît." },
          { tr: "Voilà. Avec ceci ?" },
          { tr: "Demande aussi du pain.", answerTr: "Du pain aussi, merci." }
        ]
      },
      { q: "Complète la liste de courses.", tr: "J'achète du pain, de l'eau et des tomates." },
      { tr: "Un kilo de tomates et du basilic, s'il vous plaît." },
      { tr: "Deux cents grammes de fromage, s'il vous plaît. Ce sera tout." }
    ]
  },
  "lesson:a1-u03-test": {
    theme: "Test",
    title: "Test de l'unité 3",
    objectives: ["vérifier piacere, les conjugaisons -ere et -ire, le partitif"],
    theory: [{ p: "Dix questions. On valide à 70 %." }],
    exercises: [
      { q: "« Mi ___ gli spaghetti. » (J'aime les spaghettis.)" },
      { q: "« Non mi ___ il pesce crudo. »" },
      {
        q: "« Marco aime le vin » se dit :",
        opts: ["Marco piace il vino", "A Marco piace il vino", "Marco piacciono il vino"]
      },
      {  },
      {  },
      { q: "« ___ due posti liberi. » (Il y a deux places libres.)" },
      { q: "L'article partitif :", items: [, , , ] },
      { q: "« Je préfère le vin blanc. »" },
      { tr: "Il y a des olives et du fromage." },
      { tr: "J'aime beaucoup l'apéritif italien." }
    ]
  }
});
