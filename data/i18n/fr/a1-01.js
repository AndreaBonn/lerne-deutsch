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
  "unit:a1-u02": {
    title: "Qui es-tu ?",
    grammarNote: "pronoms personnels · présent régulier · sein et haben · métiers · nombres jusqu'à 100"
  },
  "lesson:a1-u02-l1": {
    theme: "Se présenter",
    title: "Je m'appelle ...",
    objectives: [
      "dire son nom et demander celui d'une autre personne, avec du et avec Sie",
      "utiliser les pronoms personnels au nominatif : ich, du, er, sie, es, wir, ihr, sie, Sie",
      "dire d'où l'on vient avec « Ich komme aus ... »"
    ],
    theory: [
      {
        h: "Les pronoms personnels : en allemand, le sujet se dit",
        p: "Dans une phrase déclarative autonome, le verbe conjugué demande un sujet exprimé : un nom (<em>Anna heißt Weber</em>) ou un pronom. Dans une coordonnée qui garde le même sujet, comme <em>Ich wohne hier und arbeite in Bonn</em>, le second peut se sous-entendre. Voici les pronoms au nominatif : <strong>ich</strong> (je), <strong>du</strong> (tu), <strong>er</strong> (il), <strong>sie</strong> (elle), <strong>es</strong> (« il » ou « elle » pour un nom neutre), <strong>wir</strong> (nous), <strong>ihr</strong> (vous), <strong>sie</strong> (ils, elles) et <strong>Sie</strong>, la forme de politesse. Les terminaisons du verbe ne suffisent pas à reconnaître la personne : <em>heißt</em> convient à <em>du</em>, <em>er</em>, <em>sie</em>, <em>es</em> et <em>ihr</em>."
      },
      {
        contrast: "Sur ce point, le français ressemble à l'allemand : le pronom sujet est obligatoire dans la phrase autonome, <em>Je parle allemand</em> comme <em>Ich spreche Deutsch</em>. La difficulté est ailleurs : le français n'a qu'un seul <em>vous</em> là où l'allemand a deux mots, <em>ihr</em> (plusieurs personnes que l'on tutoie) et <em>Sie</em> (politesse), et le neutre <em>es</em> n'a pas d'équivalent exact en français : il sert surtout pour les noms neutres, comme <em>das Buch</em>."
      },
      {
        h: "sie et Sie : la majuscule change le sens",
        p: "À l'oral, <em>sie</em> et <em>Sie</em> se prononcent pareil ; à l'écrit, non. <strong>sie</strong> en minuscule veut dire « elle » (une femme) ou « ils, elles » : <em>sie heißt Lena</em> avec le verbe au singulier, <em>sie heißen Weber</em> avec le verbe au pluriel. <strong>Sie</strong> avec une majuscule est la forme de politesse, pour une personne ou pour plusieurs, avec le verbe comme pour « ils » : <em>Wie heißen Sie?</em> En début de phrase la majuscule est de toute façon présente et n'aide donc pas : <em>heißt</em> (singulier) indique « elle », alors qu'avec <em>heißen</em> il faut le contexte pour distinguer « ils, elles » de la politesse.",
        list: [
          "<b>du</b> : une personne que tu tutoies",
          "<b>ihr</b> : plusieurs personnes que tu tutoies (ce n'est pas la forme de politesse)",
          "<b>Sie</b> : une ou plusieurs personnes que tu vouvoies"
        ]
      },
      {
        trap: "Les pronoms de troisième personne suivent le <b>genre grammatical allemand</b> du nom qu'ils remplacent, même pour les choses, et ce genre n'est pas toujours celui du français : <em>Der Tisch ist neu. Er ist groß.</em> (er = la table, féminin en français !), <em>Die Tasse ist neu. Sie ist groß.</em>, <em>Das Buch ist neu. Es ist groß.</em> (le livre est masculin en français, neutre en allemand). Ne traduis pas « il » ou « elle » d'après le français : regarde l'article allemand."
      },
      {
        h: "Nom et provenance",
        p: "Pour te présenter, tu as deux formules : <em>Ich heiße Paolo</em> ou <em>Mein Name ist Paolo</em>. Pour demander l'origine, on utilise <strong>woher</strong> (« d'où ») et le verbe <strong>kommen</strong> : <em>Woher kommst du?</em> On répond <em>Ich komme aus</em> suivi du pays ou de la ville, en général sans article : <em>Ich komme aus Italien</em>, <em>aus Berlin</em>. Le français hésite entre « d'Italie », « du Portugal » et « de Berlin » , alors que l'allemand dit <em>aus</em> dans tous ces cas. Pour l'instant, apprends les phrases entières : les pays qui prennent l'article, tu les rencontreras plus loin."
      },
      {
        tip: "Pour faire répéter : <em>Wie bitte?</em> (« comment ? pardon ? ») est la formule la plus courante et convient à tout le monde. Pour répondre à une présentation, il te faut <em>Freut mich</em> (« enchanté »)."
      }
    ],
    grammar: {
      title: "Pronoms personnels au nominatif",
      note: "Les pronoms allemands sont neuf (<em>ich, du, er, sie, es, wir, ihr, sie, Sie</em>), mais le verbe régulier n'a que quatre terminaisons : <em>-e, -st, -t, -en</em>. Dans le tableau, <em>sie</em> et <em>Sie</em> partagent une ligne parce qu'ils demandent la même forme du verbe.",
      table: {
        head: ["personne", "pronom", "exemple"],
        rows: [
          ["1re du singulier", "ich", "Ich heiße Paolo."],
          ["2e du singulier", "du", "Woher kommst du?"],
          ["3e du singulier", "er / sie / es", "Er heißt Tom, sie heißt Lena."],
          ["1re du pluriel", "wir", "Wir heißen Weber."],
          ["2e du pluriel", "ihr", "Wie heißt ihr?"],
          ["3e du pluriel / politesse", "sie / Sie", "Wie heißen Sie?"]
        ]
      },
      examples: [
        { tr: "Je m'appelle Paolo." },
        { tr: "D'où viens-tu ?" },
        { tr: "Il s'appelle Tom, elle s'appelle Lena." },
        { tr: "Nous nous appelons Weber." },
        { tr: "Comment vous appelez-vous ?", note: "à plusieurs personnes que l'on tutoie" },
        { tr: "Comment vous appelez-vous ?", note: "forme de politesse" }
      ]
    },
    vocab: [
      "le nom",
      "le prénom",
      "le nom de famille",
      "Comment tu t'appelles ?",
      "Je m'appelle ...",
      "Mon nom est ...",
      "Enchanté(e).",
      "D'où viens-tu ?",
      "Je viens de ... (pays ou ville)",
      "Quel âge as-tu ?",
      "J'ai ... ans.",
      "Et toi ?",
      "Comment ? Pardon ? (je n'ai pas compris)"
    ],
    culture: {
      title: "Un regard allemand : noms, titres et le passage au du",
      text: "<p>En Allemagne, on se présente souvent avec le prénom et le nom ensemble : <i>Ich bin Anna Weber</i>. Avec une personne que tu ne connais pas, on s'adresse en général à elle avec <i>Herr</i> ou <i>Frau</i> et le nom de famille, pas avec le seul prénom. Si quelqu'un a un titre, comme <i>Doktor</i>, dans les milieux formels le titre s'ajoute : <i>Frau Doktor Weber</i>.</p><p>L'ancien <i>Fräulein</i> pour les jeunes femmes non mariées est aujourd'hui hors d'usage : <i>Frau</i> vaut pour toute femme adulte.</p><p>Le passage du <i>Sie</i> au <i>du</i> est un petit événement social, comme celui du « vous » au « tu » en français : en général, c'est la personne la plus âgée ou ayant le plus de responsabilité qui le propose. Dans beaucoup d'entreprises et entre étudiants, on se tutoie d'emblée, mais dans le doute commence par <i>Sie</i> et attends la proposition.</p>"
    },
    exercises: [
      {
        q: "Tu parles à une cliente que tu ne connais pas. Quelle question utilises-tu pour lui demander son nom ?",
        opts: ["Wie heißt du?", "Wie heißen Sie?", "Wie heißt ihr?"],
        why: "Avec une personne inconnue, on utilise la forme de politesse <b>Sie</b>, avec le verbe comme pour « ils » : <i>heißen</i>."
      },
      {
        q: "Lena est une femme. Quel pronom utilises-tu pour parler d'elle ?",
        opts: ["er", "sie", "es"],
        why: "Pour une femme, on utilise <b>sie</b>, en minuscule au milieu de la phrase. <i>Er</i> est pour un homme, <i>es</i> pour les noms neutres."
      },
      {
        q: "Complète : « ___ heißt Lena. » (Elle s'appelle Lena.)",
        hint: "pronom de la troisième personne féminin",
        why: "En début de phrase, on écrit <b>Sie</b> avec une majuscule, parce que c'est le premier mot ; le verbe <i>heißt</i> est à la troisième personne du singulier."
      },
      {
        q: "Complète : « Ich ___ aus Italien. » (Je viens d'Italie.)",
        hint: "première personne du singulier de kommen",
        why: "<i>Ich komme</i> : la terminaison de la première personne du singulier est <b>-e</b>."
      },
      {
        q: "Complète avec les bons pronoms.",
        tr: "Salut ! Je m'appelle Paolo. Et toi, comment tu t'appelles ?",
        why: "Dans la phrase autonome, on n'omet pas le pronom : <i>Ich heiße Paolo</i>. Avec une personne que l'on tutoie, on demande <i>Wie heißt du?</i>"
      },
      {
        q: "Une nouvelle connaissance te salue au cours d'allemand.",
        setting: "Le premier cours, le premier jour.",
        lines: [
          { tr: "Salut ! Je suis Lena. Et toi, comment tu t'appelles ?" },
          { tr: "Réponds en disant ton nom.", answerTr: "Je m'appelle Paolo." },
          { tr: "D'où viens-tu ?" },
          { tr: "Réponds que tu viens d'Italie.", answerTr: "Je viens d'Italie." }
        ]
      },
      {
        tr: "Mon nom est Anna Weber.",
        why: "<i>Mein Name ist</i> est la formule alternative à <i>Ich heiße</i>. Le prénom et le nom prennent une majuscule."
      },
      {
        tr: "Salut, je m'appelle Lena et je viens de Berlin.",
        why: "Écoute <i>ei</i> dans <i>heiße</i> : il se lit « aï », pas « é-i »."
      },
      {
        tr: "Je m'appelle Paolo. Et toi, comment tu t'appelles ?",
        why: "Pour <i>wie</i>, rappelle-toi : le <b>w</b> se lit comme le <i>v</i> français, et <i>ie</i> est un <i>i</i> long."
      }
    ]
  },
  "lesson:a1-u02-l2": {
    theme: "Se présenter",
    title: "Sein, haben et les nombres",
    objectives: [
      "conjuguer sein et haben au présent",
      "dire son âge avec « Ich bin ... Jahre alt »",
      "compter jusqu'à 100 et lire un numéro de téléphone"
    ],
    theory: [
      {
        h: "Haben, le verbe « avoir »",
        p: "<strong>haben</strong> est lui aussi irrégulier : la forme de <em>du</em> est <em>hast</em>, celle de <em>er/sie/es</em> est <em>hat</em>, et le <em>b</em> disparaît. Il sert à dire ce qu'on a : <em>Ich habe eine Schwester</em>, <em>Wir haben Hunger</em> (comme en français, « avoir faim »). Avec <em>haben</em>, ce que l'on possède est un complément d'objet, et l'article indéfini masculin <em>ein</em> devient <em>einen</em>, comme dans la formule <em>einen Kaffee</em> (l'unité 3 en explique la raison) : <em>Ich habe einen Bruder</em>. Avec <em>Hunger haben</em> et d'autres expressions semblables, il n'y a pas d'article."
      },
      {
        h: "Sein avec un nom : le nominatif reste",
        p: "Après <strong>sein</strong>, le nom qui décrit le sujet reste au même cas que le sujet, le nominatif : <em>Das ist ein Tisch</em>, <em>Das ist eine Tasse</em>. Un complément avec préposition n'est pas un nom attribut : <em>Ich bin in Berlin</em> dit où tu es, pas qui tu es."
      },
      {
        contrast: "En français, l'âge s'<em>a</em> : « j'ai vingt-cinq ans ». En allemand, il s'<em>est</em> : <em>Ich bin fünfundzwanzig Jahre alt</em>, et avec <em>haben</em> la phrase est fausse. C'est le piège classique : la traduction mot à mot « avoir ... ans » ne fonctionne pas. Pour le froid, de même, « j'ai froid » ne se dit pas <em>Ich habe kalt</em> mais <em>Mir ist kalt</em> (« à moi est froid ») ; pour la faim, en revanche, <em>Ich habe Hunger</em> correspond à « j'ai faim »."
      },
      {
        h: "Les nombres de 20 à 100",
        p: "Les dizaines sont <strong>zwanzig</strong>, <strong>dreißig</strong>, <strong>vierzig</strong>, <strong>fünfzig</strong>, <strong>sechzig</strong>, <strong>siebzig</strong>, <strong>achtzig</strong>, <strong>neunzig</strong>, <strong>hundert</strong>. À noter : <em>dreißig</em> s'écrit avec <b>ß</b> ; <em>sechzig</em> perd le <em>s</em> final de <em>sechs</em> ; <em>siebzig</em> perd le <em>-en</em> de <em>sieben</em>. L'allemand n'a pas de logique à la <em>soixante-dix</em> ou <em>quatre-vingts</em> : 70, 80 et 90 se forment comme les autres dizaines. Les nombres de 21 à 99 s'écrivent en un seul mot."
      },
      {
        trap: "Dans les nombres composés, on dit <b>d'abord l'unité, puis la dizaine</b> : 45 est <em>fünfundvierzig</em>, littéralement « cinq et quarante ». Le français dit « quarante-cinq », dans l'autre ordre ; même « vingt et un » devient <em>einundzwanzig</em> (« un et vingt »). Ainsi 73 est <em>dreiundsiebzig</em>, « trois et soixante-dix », là où le français dit « soixante-treize ». Attention aux paires qui se confondent à l'écoute : <em>sechzehn</em> (16) et <em>sechzig</em> (60), <em>siebzehn</em> (17) et <em>siebzig</em> (70)."
      },
      {
        h: "Les numéros de téléphone",
        p: "En France, un numéro se lit d'ordinaire par paires de chiffres. En allemand, on le lit souvent chiffre par chiffre ou par petits groupes de longueur variable : 0151 se dit <em>null eins fünf eins</em>. Le zéro se dit <em>null</em>. Parfois, au téléphone, on entend <em>zwo</em> au lieu de <em>zwei</em>, pour ne pas le confondre avec <em>drei</em>. Pour demander : <em>Wie ist deine Telefonnummer?</em>"
      }
    ],
    grammar: {
      title: "Sein (être) et haben (avoir)",
      note: "Les deux verbes sont irréguliers et se mémorisent. Avec <b>Sie</b> (politesse) et avec <em>sie</em> (ils, elles), on utilise <em>sind</em> et <em>haben</em>.",
      table: {
        head: ["personne", "sein", "haben"],
        rows: [
          ["ich", "bin", "habe"],
          ["du", "bist", "hast"],
          ["er / sie / es", "ist", "hat"],
          ["wir", "sind", "haben"],
          ["ihr", "seid", "habt"],
          ["sie / Sie", "sind", "haben"]
        ]
      },
      examples: [
        { tr: "J'ai vingt ans." },
        { tr: "Tu as une sœur." },
        { tr: "Il a faim." },
        { tr: "Nous sommes amis." },
        { tr: "Vous avez un frère ?", note: "à plusieurs personnes que l'on tutoie" },
        { tr: "Le numéro est zéro trois zéro, douze, trente-quatre, cinquante-six.", note: "numéro lu par groupes" }
      ]
    },
    vocab: [
      "le numéro de téléphone",
      "l'année, l'an",
      "vieux, âgé ; pour l'âge : « ... Jahre alt » = « ... ans »",
      "vingt",
      "trente",
      "quarante",
      "cinquante",
      "soixante",
      "soixante-dix",
      "quatre-vingts",
      "quatre-vingt-dix",
      "cent",
      "vingt et un"
    ],
    exercises: [
      {
        q: "Comment dis-tu « J'ai vingt-cinq ans » ?",
        opts: ["Ich habe fünfundzwanzig Jahre.", "Ich bin fünfundzwanzig Jahre alt.", "Ich habe fünfundzwanzig alt."],
        why: "En allemand, l'âge se dit avec <b>sein</b> : <i>Ich bin fünfundzwanzig Jahre alt</i>. Avec <i>haben</i>, la phrase n'est pas correcte."
      },
      {
        q: "Quel nombre est « 45 » ?",
        opts: ["vierundfünfzig", "fünfundvierzig", "vierzigfünf"],
        why: "<i>Fünfundvierzig</i> : d'abord l'unité (<i>fünf</i>), puis <i>und</i>, puis la dizaine (<i>vierzig</i>). <i>Vierundfünfzig</i> est 54."
      },
      {
        tr: "Toute la conjugaison de haben.",
        why: "<i>Haben</i> est irrégulier : <i>du hast</i> et <i>er hat</i> perdent le <i>b</i>."
      },
      {
        q: "Complète : « Du ___ eine Schwester. » (Tu as une sœur.)",
        hint: "deuxième personne du singulier de haben",
        why: "<i>Du hast</i> : le <b>b</b> du verbe disparaît à la forme de <i>du</i>."
      },
      {
        q: "Complète : « Ihr ___ hier. » (Vous êtes ici.)",
        hint: "deuxième personne du pluriel de sein",
        why: "<i>Ihr seid</i> : ne la confonds pas avec <i>sind</i>, qui vaut pour <i>wir</i>, <i>sie</i> et <i>Sie</i>."
      },
      {
        q: "Complète avec bin et habe.",
        tr: "Je suis Paolo et j'ai vingt-cinq ans. J'ai un frère.",
        why: "Le nom et l'âge se disent avec <i>sein</i> (<i>bin</i>), le frère avec <i>haben</i> (<i>habe</i>), suivi de <i>einen</i>."
      },
      {
        q: "Associe chaque nombre à son chiffre.",
        pairs: ["30", "60", "45", "100"]
      },
      {
        q: "Traduis en tutoyant : « Tu as une sœur ? »",
        why: "<i>Hast du eine Schwester?</i> Dans la question fermée (oui ou non), le verbe va en première position."
      },
      {
        tr: "Mon numéro de téléphone est zéro un cinq un, deux trois quatre, cinq six.",
        why: "Le zéro se dit <i>null</i>. Les numéros de téléphone se lisent chiffre par chiffre ou par groupes."
      },
      {
        tr: "J'ai vingt-cinq ans et j'ai une sœur.",
        why: "<i>Fünfundzwanzig</i> : le <b>z</b> se lit <i>ts</i> ; l'âge se dit avec <i>bin</i>, pas avec <i>habe</i>."
      }
    ]
  },
  "lesson:a1-u02-l3": {
    theme: "Travail",
    title: "Quel est votre métier ?",
    objectives: [
      "demander et dire sa profession avec « Was sind Sie von Beruf? »",
      "former le féminin des professions avec -in",
      "utiliser les professions sans article"
    ],
    theory: [
      {
        h: "La profession se dit sans article",
        p: "Pour dire quel est ton métier, l'allemand emploie le plus souvent le nom sans article, <strong>comme le français</strong> : <em>Ich bin Lehrer</em> (« Je suis professeur »), <em>Er ist Arzt</em> (« Il est médecin »). La question est <strong>Was sind Sie von Beruf?</strong>, littéralement « Qu'est-ce que vous êtes de profession ? ». Avec une personne que tu tutoies : <em>Was bist du von Beruf?</em>"
      },
      {
        trap: "Quand la profession a un adjectif à côté, l'article revient en général, en allemand comme en français : <em>Ich bin eine gute Lehrerin</em>, « Je suis une bonne enseignante ». De même avec « c'est » : <em>Das ist ein Arzt</em>, « C'est un médecin ». La règle « sans article » vaut donc pour la profession seule, pas pour toute phrase qui contient une profession."
      },
      {
        h: "Le féminin en -in",
        p: "En allemand, le nom du métier change selon que la personne est un homme ou une femme : <em>der Lehrer / die Lehrerin</em>, <em>der Student / die Studentin</em>. On ajoute presque toujours <strong>-in</strong> au masculin, et le féminin est toujours <strong>die</strong>. Certaines voyelles prennent un tréma : <em>der Arzt → die Ärztin</em>, <em>der Koch → die Köchin</em>."
      },
      {
        contrast: "Le français forme le féminin de plusieurs façons : <em>-e</em> (<em>étudiant / étudiante</em>), <em>-euse</em> (<em>vendeur / vendeuse</em>), <em>-ère</em> (<em>cuisinier / cuisinière</em>), et dans de nombreux cas la forme ne change pas (<em>médecin</em>, <em>ingénieur</em>). Pour les métiers présentés ici, le féminin se forme avec <strong>-in</strong>, parfois accompagné d'un tréma, et on l'entend à l'oral : <em>Verkäufer → Verkäuferin</em>, <em>Arzt → Ärztin</em> (d'autres métiers ont un féminin différent, comme <em>Kaufmann → Kauffrau</em>). Le genre de la personne se perçoit donc presque toujours dans le nom lui-même : <em>Ich bin Lehrer</em> dit un homme, <em>Ich bin Lehrerin</em> une femme."
      },
      {
        h: "Le pluriel des formes en -in",
        p: "Le pluriel du féminin se forme avec <strong>-nen</strong> : <em>die Lehrerin → die Lehrerinnen</em>, avec deux <em>n</em>. Les masculins varient : <em>die Lehrer</em>, <em>die Ärzte</em>, <em>die Studenten</em>."
      },
      {
        tip: "Quand tu apprends un métier, apprends tout de suite les deux formes : <em>der Arzt, die Ärztin</em>. Tu en auras besoin pour parler de toi et des autres."
      }
    ],
    grammar: {
      title: "Professions : masculin et féminin",
      note: "Le féminin se forme en général avec <b>-in</b>. Avec <em>Arzt</em> et <em>Koch</em>, la voyelle prend un tréma.",
      table: {
        head: ["masculin", "féminin", "exemple"],
        rows: [
          ["der Lehrer", "die Lehrerin", "Ich bin Lehrerin."],
          ["der Arzt", "die Ärztin", "Er ist Arzt."],
          ["der Student", "die Studentin", "Wir sind Studenten."],
          ["der Koch", "die Köchin", "Sie ist Köchin."],
          ["der Ingenieur", "die Ingenieurin", "Ich bin Ingenieurin."],
          ["der Verkäufer", "die Verkäuferin", "Sie ist Verkäuferin."]
        ]
      },
      examples: [
        { tr: "Quel est votre métier ?", note: "forme de politesse" },
        { tr: "Je suis enseignante.", note: "c'est une femme qui parle" },
        { tr: "Il est médecin." },
        { tr: "Elle est cuisinière." },
        { tr: "Je suis une bonne enseignante.", note: "avec l'adjectif, l'article revient" },
        { tr: "Nous sommes étudiants." }
      ]
    },
    vocab: [
      "la profession, le métier",
      "l'enseignant",
      "l'enseignante",
      "le médecin (homme)",
      "le médecin (femme)",
      "l'étudiant",
      "l'étudiante",
      "le cuisinier",
      "la cuisinière",
      "l'ingénieur",
      "le vendeur",
      "la vendeuse"
    ],
    exercises: [
      {
        q: "Tu es médecin et tu es une femme. Quelle phrase utilise la forme féminine ?",
        opts: ["Ich bin Arzt.", "Ich bin Ärztin.", "Ich bin Arztin."],
        why: "Le féminin d'<i>Arzt</i> est <b>Ärztin</b> : on ajoute <i>-in</i> et le <i>A</i> prend un tréma."
      },
      {
        q: "Quel est le pluriel de « die Lehrerin » ?",
        opts: ["die Lehrerins", "die Lehrerinnen", "die Lehrerine"],
        why: "Le pluriel des formes en <i>-in</i> se forme avec <b>-nen</b> : <i>die Lehrerinnen</i>."
      },
      {
        tr: "Le verbe studieren, toutes les personnes.",
        why: "Les verbes en <i>-ieren</i> se conjuguent de façon régulière : <i>studier-</i> plus les terminaisons."
      },
      {
        q: "Complète : « Sie ist ___. » (Elle est cuisinière.)",
        hint: "forme féminine de Koch",
        why: "<i>Köchin</i> : le féminin ajoute <i>-in</i> et le <i>o</i> prend un tréma. Sans le tréma, le mot est faux."
      },
      {
        q: "Choisis l'article défini.",
        items: ["enseignant", "enseignante", "profession", "étudiante", "médecin (femme)", "cuisinier"]
      },
      {
        q: "Associe chaque profession à son sens.",
        pairs: ["enseignant", "médecin (femme)", "cuisinier", "vendeuse"]
      },
      {
        tr: "Quel est votre métier ?",
        why: "Question avec <i>was</i> : le verbe <i>sind</i> est en deuxième position, et avec <i>Sie</i> on utilise la forme de politesse."
      },
      {
        q: "Traduis : « Moi, je suis cuisinière. »",
        why: "<i>Ich bin Köchin</i> : profession sans article et forme féminine avec <i>-in</i>."
      },
      {
        tr: "Quel est votre métier ? Je suis enseignante.",
        why: "<i>Beruf</i> : le <b>u</b> est long et le <b>f</b> final se prononce comme le « f » français."
      },
      {
        tr: "Quel est votre métier ? Je suis ingénieure.",
        why: "<i>Ingenieurin</i> est le féminin d'<i>Ingenieur</i> : on ajoute <b>-in</b>."
      }
    ]
  },
  "lesson:a1-u02-l4": {
    theme: "Vie quotidienne",
    title: "Wohnen, arbeiten, kommen",
    objectives: [
      "conjuguer les verbes réguliers au présent",
      "dire où l'on habite, où l'on travaille et d'où l'on vient",
      "reconnaître les pays et les langues"
    ],
    theory: [
      {
        h: "Le verbe régulier : radical plus terminaison",
        p: "On retire <em>-en</em> de l'infinitif et on ajoute la terminaison de la personne : <strong>-e, -st, -t, -en, -t, -en</strong>. De <em>wohnen</em>, on obtient <em>ich wohne, du wohnst, er wohnt, wir wohnen, ihr wohnt, sie/Sie wohnen</em>. Il y a six formes mais seulement quatre terminaisons différentes, parce que <em>er</em> et <em>ihr</em> ont la même forme, comme <em>wir</em> et <em>sie/Sie</em>."
      },
      {
        contrast: "En français, avec les verbes en -er, les formes de <em>je</em>, <em>tu</em>, <em>il</em> et <em>ils</em> sonnent pareil à l'oral (<em>parle, parles, parle, parlent</em>) : le pronom est donc indispensable, et il l'est aussi en allemand. L'allemand fait entendre la terminaison (<em>wohne, wohnst, wohnt</em>), mais <em>er arbeitet</em> et <em>ihr arbeitet</em> sont identiques, tout comme <em>wir arbeiten</em> et <em>sie arbeiten</em>. C'est pourquoi, dans la phrase autonome, le pronom ne s'omet pas."
      },
      {
        h: "Radicaux en -t et -d : un -e- en plus",
        p: "Si le radical se termine par <em>-t</em> ou <em>-d</em> (<em>arbeit-</em>, <em>find-</em>), on insère un <strong>-e-</strong> devant <em>-st</em> et <em>-t</em> pour que la terminaison soit prononçable : <em>du arbeitest, er arbeitet, ihr arbeitet</em>. La forme de <em>ich</em> (<em>ich arbeite</em>) et celles en <em>-en</em> restent régulières."
      },
      {
        h: "Wo et woher",
        p: "<strong>Wo</strong> demande où se trouve quelqu'un : <em>Wo wohnst du?</em> → <em>Ich wohne in Berlin.</em> <strong>Woher</strong> demande la provenance : <em>Woher kommen Sie?</em> → <em>Ich komme aus Spanien.</em> Avec les villes et les pays, on utilise en général <em>in</em> pour le lieu et <em>aus</em> pour la provenance. Là où le français choisit entre « à » (une ville) et « en » (un pays féminin), l'allemand dit <em>in</em> dans les deux cas : <em>in Berlin</em>, <em>in Italien</em>. Le verbe reste en deuxième position, et avec <em>Sie</em> il se conjugue comme pour « ils »."
      },
      {
        trap: "Les noms de langues sont des noms et prennent une <b>majuscule</b> : <em>Deutsch, Italienisch, Englisch</em> (le français les écrit en minuscule : « l'allemand »). Après <em>sprechen</em>, on les emploie sans article, comme après « parler » en français : <em>Ich spreche Deutsch</em>, « Je parle allemand ». Attention : <em>sprechen</em> change de voyelle avec <em>du</em> et <em>er</em> (<em>du sprichst</em>) ; ce type de verbes apparaît dans l'unité 3 : pour l'instant, utilise seulement <em>ich spreche</em> et <em>wir sprechen</em>."
      },
      {
        tip: "Pour dire où tu travailles : <em>Ich arbeite in Hamburg</em>. Pour ajouter ton métier : <em>Ich arbeite als Lehrerin</em> (« je travaille comme enseignante »), en général sans article après <em>als</em>."
      }
    ],
    grammar: {
      title: "Présent régulier : wohnen, arbeiten, kommen",
      note: "Avec <em>arbeiten</em>, le radical se termine par <b>-t</b> : le <b>-e-</b> apparaît donc avec <em>du</em>, <em>er/sie/es</em> et <em>ihr</em>.",
      table: {
        head: ["personne", "wohnen", "arbeiten", "kommen"],
        rows: [
          ["ich", "wohne", "arbeite", "komme"],
          ["du", "wohnst", "arbeitest", "kommst"],
          ["er / sie / es", "wohnt", "arbeitet", "kommt"],
          ["wir", "wohnen", "arbeiten", "kommen"],
          ["ihr", "wohnt", "arbeitet", "kommt"],
          ["sie / Sie", "wohnen", "arbeiten", "kommen"]
        ]
      },
      examples: [
        { tr: "Où habites-tu ?" },
        { tr: "J'habite à Berlin." },
        { tr: "Tu travailles à Vienne." },
        { tr: "Il vient d'Espagne." },
        { tr: "Vous travaillez à Hambourg.", note: "à plusieurs personnes que l'on tutoie" },
        { tr: "D'où venez-vous ?", note: "forme de politesse" }
      ]
    },
    vocab: [
      "l'Allemagne",
      "l'Italie",
      "l'Autriche",
      "la France",
      "l'Espagne",
      "la Pologne",
      "l'allemand (langue)",
      "l'italien (langue)",
      "l'anglais (langue)",
      "l'espagnol (langue)",
      "le français (langue)",
      "le polonais (langue)"
    ],
    exercises: [
      {
        q: "Quelle phrase est correcte ?",
        opts: ["Er arbeit in Berlin.", "Er arbeitet in Berlin.", "Er arbeitest in Berlin."],
        why: "Le radical <i>arbeit-</i> se termine par <i>-t</i> : avec <i>er</i>, il faut le <b>-e-</b> avant <i>-t</i>."
      },
      {
        q: "Quelles formes sont correctes avec « ihr » ?",
        opts: ["ihr arbeitet", "ihr kommt", "ihr wohnen", "ihr arbeitest", "ihr wohnt"],
        why: "Avec <i>ihr</i>, la terminaison est <b>-t</b> (<i>-et</i> avec les radicaux en <i>-t</i>). <i>Wohnen</i> vaut pour <i>wir</i> et <i>sie/Sie</i> ; <i>-st</i> est pour <i>du</i>."
      },
      {
        tr: "Le verbe arbeiten, toutes les personnes.",
        why: "Le radical <i>arbeit-</i> se termine par <i>-t</i> : avec <i>du</i>, <i>er</i> et <i>ihr</i>, le <b>-e-</b> apparaît."
      },
      {
        tr: "Le verbe kommen, quelques personnes.",
        why: "<i>Kommen</i> est régulier : <i>du kommst</i>, <i>er kommt</i>, <i>ihr kommt</i>. Pas de changement de voyelle."
      },
      {
        q: "Complète : « Du ___ in Wien. » (Tu travailles à Vienne.)",
        hint: "deuxième personne du singulier de arbeiten",
        why: "<i>Du arbeitest</i> : après le radical en <i>-t</i>, il faut le <b>-e-</b> avant <i>-st</i>."
      },
      {
        q: "Complète : « Wo ___ ihr? » (Où habitez-vous ?)",
        hint: "deuxième personne du pluriel de wohnen",
        why: "<i>Ihr wohnt</i> : la terminaison de <i>ihr</i> est <b>-t</b>."
      },
      {
        tr: "J'habite en Italie et je travaille ici.",
        why: "Dans la phrase avec <i>und</i>, le second verbe a le même sujet, qu'on peut omettre : <i>und arbeite hier</i>."
      },
      {
        q: "Traduis en tutoyant : « D'où viens-tu ? »",
        why: "<i>Woher kommst du?</i> est la forme la plus courante ; <i>Woher bist du?</i> est aussi correcte."
      },
      {
        tr: "J'habite à Vienne et je viens d'Italie.",
        why: "<i>Wien</i> se lit [viːn] : le <b>w</b> se lit comme le <i>v</i> français et <i>ie</i> est un <i>i</i> long."
      },
      {
        tr: "Je viens d'Italie et j'habite à Berlin.",
        why: "Avec les villes, on utilise <i>in</i> pour le lieu et <i>aus</i> pour la provenance."
      }
    ]
  },
  "lesson:a1-u02-test": {
    theme: "Vérification",
    title: "Vérification de l'unité 2",
    objectives: ["vérifier pronoms, sein et haben, professions, présent régulier, nombres"],
    theory: [
      {
        p: "Dix questions sur toute l'unité. On réussit avec 70 %. Ne relis pas les leçons pendant que tu réponds : si tu ne te souviens pas de quelque chose, mieux vaut retourner réviser."
      }
    ],
    exercises: [
      {
        q: "Comment dis-tu « J'ai trente ans » ?",
        opts: ["Ich habe dreißig Jahre.", "Ich bin dreißig Jahre alt.", "Ich sind dreißig Jahre alt."],
        why: "<i>Ich bin dreißig Jahre alt</i> : l'âge se dit avec <b>sein</b> et <i>alt</i>."
      },
      {
        q: "Quel nombre est « 73 » ?",
        opts: ["siebenunddreißig", "dreiundsiebzig", "siebzigdrei"],
        why: "<i>Dreiundsiebzig</i> : d'abord l'unité (<i>drei</i>), puis la dizaine (<i>siebzig</i>). <i>Siebenunddreißig</i> est 37."
      },
      {
        q: "Madame Weber est médecin. Quelle phrase utilise la forme féminine de la profession ?",
        opts: ["Frau Weber ist Ärztin.", "Frau Weber ist Arzt.", "Frau Weber ist ein Ärztin."],
        why: "Le féminin est <b>Ärztin</b>, et la profession reste sans article."
      },
      {
        q: "Complète : « Wir ___ aus Polen. » (Nous venons de Pologne.)",
        why: "<i>Wir kommen</i> : avec <i>wir</i>, la terminaison est <b>-en</b>."
      },
      {
        q: "Complète : « Ihr ___ Hunger. » (Vous avez faim.)",
        why: "<i>Ihr habt</i> : la forme de <i>haben</i> avec <i>ihr</i> est <b>habt</b>."
      },
      {
        tr: "Le verbe arbeiten : du, er, ihr.",
        why: "Avec les radicaux en <i>-t</i>, il faut le <b>-e-</b> : <i>du arbeitest, er arbeitet, ihr arbeitet</i>."
      },
      {
        q: "Complète avec ist, wohnt et kommt.",
        tr: "Anna est enseignante. Elle habite à Vienne et vient de Pologne.",
        why: "Les trois verbes sont à la troisième personne du singulier : <i>ist</i>, <i>wohnt</i>, <i>kommt</i>."
      },
      {
        q: "Traduis, en vouvoyant : « Que faites-vous dans la vie ? »",
        why: "<i>Was sind Sie von Beruf?</i> est la formule apprise ; <i>Was machen Sie beruflich?</i> est une variante correcte."
      },
      {
        tr: "Je m'appelle Lena, j'ai trente ans et je viens de Vienne.",
        why: "<i>Dreißig</i> s'écrit avec <b>ß</b> : il se prononce [s], comme le <i>s</i> de « sac », sans le doubler."
      },
      {
        tr: "Je m'appelle Paolo, je suis ingénieur et j'habite à Berlin.",
        why: "La phrase contient trois verbes : <i>heiße</i>, <i>bin</i>, <i>wohne</i>."
      }
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
