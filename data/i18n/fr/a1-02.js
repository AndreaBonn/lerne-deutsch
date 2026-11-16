/* ============================================================
   Textes dans la langue de l'élève (fr) pour data/core/a1-02.js, unités a1-u04, a1-u05 et a1-u06.
   Les clés renvoient aux id de la couche neutre ; les tableaux se
   joignent par index, leur longueur doit donc correspondre à core.
   Vérifié par scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("fr", {
  "unit:a1-u04": {
    title: "Acheter des vêtements",
    grammarNote: "adjectif attribut · dieser et welcher · ihn, sie, es · sehr, zu, viel"
  },
  "lesson:a1-u04-l1": {
    theme: "Vêtements et couleurs",
    title: "Décrire un vêtement : couleur et forme invariable",
    objectives: [
      "nommer les vêtements les plus courants avec leur article",
      "dire de quelle couleur est un vêtement avec sein + adjectif",
      "retenir que l'adjectif après sein ne prend aucune terminaison"
    ],
    theory: [
      {
        h: "La couleur après « ist » : l'adjectif ne change pas",
        p: "Pour dire comment est quelque chose, on utilise <strong>sein</strong> puis l'adjectif : <em>Der Pullover ist rot</em>, <em>Die Jacke ist blau</em>, <em>Das Hemd ist weiß</em>. L'adjectif placé après le verbe s'appelle <em>attribut</em> et reste toujours identique : aucune terminaison, quel que soit le genre du nom. Seul le verbe change : au pluriel il devient <em>sind</em> : <em>Die Schuhe sind schwarz</em>."
      },
      {
        contrast: "En français, l'adjectif s'accorde, et beaucoup de couleurs ont une forme féminine distincte : <em>le pull est vert</em>, <em>la veste est verte</em>, <em>les chaussures sont noires</em>. En allemand, après <em>sein</em>, il n'y a qu'une forme : <em>grün</em>, <em>schwarz</em>. Tu n'as pas à penser au genre du nom pour choisir la couleur, seulement pour choisir l'article (<em>der, die, das</em>)."
      },
      {
        h: "Les vêtements avec leur article",
        p: "Apprends chaque nom avec son article, comme tu le sais déjà : <em>der Pullover</em>, <em>die Jacke</em>, <em>das Hemd</em>, <em>der Rock</em>, <em>das Kleid</em>. L'article ne se devine pas d'après le vêtement : <em>die Hose</em> est au singulier et désigne un seul pantalon, tandis que <em>die Schuhe</em> est le pluriel de <em>der Schuh</em> (on parle en général d'une paire)."
      },
      {
        trap: "N'écris pas « Die Jacke ist rote » ni « Der Pullover ist roter » : après <em>ist</em>, l'adjectif reste tel quel. Les terminaisons n'apparaissent que lorsque l'adjectif se place <em>devant</em> le nom (<em>der rote Pullover</em>) : tu le verras plus tard, tu n'en as pas besoin maintenant."
      },
      {
        tip: "Décris à voix haute trois vêtements que tu as chez toi : <em>Die Hose ist blau</em>, <em>Der Pullover ist grün</em>, <em>Das Hemd ist weiß</em>. Trois vêtements, trois couleurs, trois phrases."
      }
    ],
    grammar: {
      title: "L'adjectif après sein",
      note: "L'adjectif attribut est <b>invariable</b> : seule la forme de <em>sein</em> change (<em>ist</em> / <em>sind</em>).",
      table: {
        head: ["genre", "phrase"],
        rows: [
          ["masculin", "Der Pullover ist rot."],
          ["féminin", "Die Jacke ist blau."],
          ["neutre", "Das Hemd ist weiß."],
          ["pluriel", "Die Schuhe sind schwarz."]
        ]
      },
      examples: [
        { tr: "Le pull est rouge.", note: "der Pullover : masculin" },
        { tr: "La veste est bleue.", note: "die Jacke : féminin, aucune terminaison" },
        { tr: "La chemise est blanche.", note: "das Hemd : neutre" },
        { tr: "Les chaussures sont noires.", note: "pluriel : sind, mais schwarz reste identique" },
        { tr: "La jupe est verte." },
        { tr: "La robe est jaune." }
      ]
    },
    vocab: [
      "le pull",
      "la veste",
      "la chemise",
      "le pantalon (singulier : die Hose)",
      "la chaussure",
      "le t-shirt",
      "la jupe",
      "la robe",
      "rouge",
      "bleu",
      "noir",
      "blanc",
      "vert",
      "jaune"
    ],
    exercises: [
      {
        q: "Comment dit-on « La veste est bleue » ?",
        opts: ["Die Jacke ist blaue.", "Die Jacke ist blau.", "Die Jacke blau ist."],
        why: "Après <i>ist</i>, l'adjectif reste invariable et le verbe est en deuxième position : <b>Die Jacke ist blau.</b>"
      },
      {
        q: "Quelle phrase est correcte ?",
        opts: ["Die Schuhe ist schwarz.", "Die Schuhe sind schwarze.", "Die Schuhe sind schwarz."],
        why: "Le sujet est au pluriel, donc <b>sind</b> ; l'adjectif attribut reste <i>schwarz</i>."
      },
      {
        q: "Quelle couleur est « weiß » ?",
        opts: ["blanc", "noir", "jaune"],
        why: "<i>Weiß</i> veut dire « blanc ». Il s'écrit avec <b>ß</b> et se prononce /vaɪs/ : le <b>ß</b> est un « s » sourd, comme dans « sac », et non une consonne double."
      },
      {
        q: "Complète : « Das Hemd ___ weiß. »",
        hint: "sein, troisième personne du singulier",
        why: "<i>Das Hemd</i> est au singulier : <b>ist</b>."
      },
      {
        q: "Complète : « Die Schuhe ___ schwarz. »",
        hint: "sein, troisième personne du pluriel",
        why: "<i>Die Schuhe</i> est au pluriel : <b>sind</b>."
      },
      {
        tr: "Le pull est bleu et le pantalon est noir.",
        why: "Chaque proposition a son propre verbe conjugué : <i>Der Pullover ist blau und die Hose ist schwarz</i>. Dans les deux, le sujet précède <i>ist</i>. Dans le second membre, <i>die Hose</i> est le sujet au singulier."
      },
      {
        q: "Associe chaque couleur à sa signification.",
        pairs: ["rouge", "bleu", "vert", "jaune"]
      },
      {
        q: "Complète les deux phrases.",
        tr: "La robe est jaune et les chaussures sont noires.",
        why: "Un sujet au singulier demande <i>ist</i>, un sujet au pluriel <i>sind</i>. Les adjectifs ne changent pas."
      },
      {
        tr: "La veste est rouge et le pantalon est bleu.",
        why: "<i>Jacke</i> : le <b>J</b> se prononce comme le « y » de « yaourt » ; <i>rot</i> a un <b>o</b> long."
      },
      {
        tr: "Le pull est vert et la chemise est blanche.",
        why: "Dans <i>grün</i>, le <b>ü</b> se prononce comme le « u » français de « lune ». <i>Weiß</i> : le groupe <b>ei</b> se lit « aï »."
      }
    ]
  },
  "lesson:a1-u04-l2": {
    theme: "Au magasin",
    title: "Choisir entre deux vêtements : dieser, welcher, der da",
    objectives: [
      "désigner un vêtement avec dieser / diese / dieses",
      "demander « lequel ? » avec welcher / welche / welches",
      "utiliser der da / die da / das da pour désigner quelque chose de proche ou de plus éloigné"
    ],
    theory: [
      {
        h: "Dieser, diese, dieses : « ce, cette »",
        p: "<strong>Dieser</strong> fonctionne comme un article : il prend la forme du genre du nom. <em>Dieser Pullover</em> (masculin), <em>diese Jacke</em> (féminin), <em>dieses Hemd</em> (neutre), <em>diese Schuhe</em> (pluriel). Au nominatif, les terminaisons sont celles que tu connais déjà par <em>der / die / das</em>, mais accrochées à <em>dies-</em>."
      },
      {
        h: "Welcher, welche, welches : « quel ? »",
        p: "Pour choisir entre deux vêtements, on demande avec <strong>welcher</strong> : <em>Welcher Mantel ist schön?</em>, <em>Welche Tasche ist blau?</em>, <em>Welches Kleid ist rot?</em> Il suit le même schéma que <em>dieser</em>. On répond avec <em>dieser</em> ou, à l'oral, avec <strong>der da</strong>, <strong>die da</strong>, <strong>das da</strong> : <em>Welcher Mantel ist billig? Der da.</em>"
      },
      {
        contrast: "Le français a <em>ce / cet / cette / ces</em> et <em>quel / quelle / quels / quelles</em> : deux genres au singulier. Au pluriel, le démonstratif <em>ces</em> est identique aux deux genres, mais l'interrogatif distingue <em>quels</em> et <em>quelles</em>. L'allemand a trois genres (masculin, féminin, neutre) et le neutre a sa propre forme : <em>dieses</em>, <em>welches</em>. Au nominatif pluriel, <em>diese</em> et <em>welche</em> ont la même forme pour tous les genres. Ici tu n'étudies que le nominatif : <em>dieser / welcher</em>, <em>diese / welche</em>, <em>dieses / welches</em>. Pour « celui-là », à l'oral, l'allemand utilise l'article accompagné de <em>da</em> (<em>der da</em>, littéralement « celui là »), là où le français colle <em>-là</em> au pronom (<em>celui-là</em>)."
      },
      {
        trap: "Ne dis pas « Welche Mantel », ni « Dieser Jacke » : la dernière lettre doit suivre le genre du nom. <em>Mantel</em> est masculin (<em>welcher</em>), <em>Jacke</em> est féminin (<em>welche</em>), <em>Hemd</em> est neutre (<em>welches</em>)."
      },
      {
        tip: "Dans un magasin, tu peux montrer du doigt et ne dire que le mot sans le nom, mais il s'accorde avec la chose montrée : <em>Welcher? Dieser hier?</em> pour <em>der Mantel</em>, <em>Welche? Diese hier?</em> pour <em>die Jacke</em> ou un pluriel, <em>Welches? Dieses hier?</em> pour <em>das Hemd</em>. À l'oral, l'allemand coupe beaucoup. Pour les phrases écrites, répète le nom en entier."
      }
    ],
    grammar: {
      title: "dieser et welcher au nominatif",
      note: "Les terminaisons de <b>dieser</b> et <b>welcher</b> suivent le genre du nom : -er (masculin), -e (féminin), -es (neutre), -e (pluriel).",
      table: {
        head: ["genre", "dieser", "welcher", "exemple"],
        rows: [
          ["masculin", "dieser", "welcher", "Dieser Mantel ist schön."],
          ["féminin", "diese", "welche", "Diese Jacke ist teuer."],
          ["neutre", "dieses", "welches", "Dieses Hemd ist billig."],
          ["pluriel", "diese", "welche", "Diese Schuhe sind schwarz."]
        ]
      },
      examples: [
        { tr: "Ce pull est beau." },
        { tr: "Cette veste est chère." },
        { tr: "Cette chemise coûte peu.", note: "billig : bon marché, pas cher" },
        { tr: "Quel manteau est beau ?", note: "masculin : welcher" },
        { tr: "Quel sac est bleu ?", note: "welche : Tasche est féminin, même si « sac » est masculin en français" },
        { tr: "Quelle robe est rouge ?", note: "neutre : welches" }
      ]
    },
    vocab: [
      "ce / cette / ce",
      "quel (masculin / féminin / neutre)",
      "là : celui-là / celle-là (à l'oral : der da, die da, das da)",
      "cher, coûteux",
      "bon marché",
      "beau",
      "le manteau",
      "le bonnet",
      "l'écharpe",
      "la chaussette",
      "le sac",
      "la ceinture"
    ],
    dialogue: [
      "Bonjour ! Que cherchez-vous ?",
      "Bonjour. Je cherche un manteau.",
      "Ce manteau est beau, mais cher.",
      "Et quel manteau est bon marché ?",
      "Celui-là est bon marché."
    ],
    exercises: [
      {
        q: "Comment dit-on « Cette veste est chère » ?",
        opts: ["Dieser Jacke ist teuer.", "Diese Jacke ist teuer.", "Dieses Jacke ist teuer."],
        why: "<i>Jacke</i> est féminin, donc <b>diese</b>."
      },
      {
        q: "Tu veux demander quelle chemise est belle. Quelle phrase est correcte ?",
        opts: ["Welches Hemd ist schön?", "Welcher Hemd ist schön?", "Welche Hemd ist schön?"],
        why: "<i>Das Hemd</i> est neutre, donc <b>welches</b>."
      },
      {
        q: "Complète : « Der Rock ist schön, aber ___ Hose ist teuer. » (cette)",
        hint: "die Hose est féminin",
        why: "<i>Hose</i> est féminin : <b>diese</b>."
      },
      {
        q: "Complète : « ___ Schal ist billig? » (quelle écharpe ?)",
        hint: "der Schal est masculin ; question",
        why: "<i>Schal</i> est masculin : <b>welcher</b>."
      },
      {
        q: "Choisis le bon article : le même genre décide ensuite si tu dis <i>dieser</i>, <i>diese</i> ou <i>dieses</i>.",
        why: "<i>Mantel</i> et <i>Schal</i> sont masculins (der, dieser), <i>Jacke</i> et <i>Tasche</i> féminins (die, diese), <i>Kleid</i> et <i>Hemd</i> neutres (das, dieses).",
        items: ["manteau", "veste", "robe", "écharpe", "sac", "chemise"]
      },
      {
        tr: "Ce manteau est beau, mais cher.",
        why: "La virgule avant <i>aber</i> est obligatoire. Dans <i>schön</i>, le <b>ö</b> se prononce comme le « eu » de « peu »."
      },
      {
        q: "Traduis : « Cette veste est belle, mais celle-là est chère. »",
        why: "<i>Diese Jacke ... die da ...</i> : <i>die da</i> renvoie à la seconde veste sans répéter le nom. <i>Diese da</i> convient aussi."
      },
      {
        q: "Tu es dans un magasin.",
        setting: "Un vendeur vient vers toi.",
        lines: [
          { tr: "Bonjour ! Que cherchez-vous ?" },
          { tr: "Réponds que tu cherches une veste.", answerTr: "Je cherche une veste." },
          { tr: "Cette veste est rouge. Celle-ci est bleue." },
          { tr: "Demande quelle veste est bon marché.", answerTr: "Quelle veste est bon marché ?" }
        ]
      },
      {
        tr: "Ce manteau est beau, mais celui-là est cher.",
        why: "Dans <i>Mantel</i>, le <b>t</b> est net, et <i>teuer</i> commence par un <b>t</b> suivi de « oï » : le groupe <b>eu</b> se lit « oï »."
      },
      {
        tr: "Quelle veste est bon marché ? Celle-là.",
        why: "<i>Welche</i> commence par un <b>w</b> qui se prononce comme le « v » français ; dans <i>Jacke</i>, le <b>J</b> sonne « y »."
      }
    ]
  },
  "lesson:a1-u04-l3": {
    theme: "Prix et achats",
    title: "Prix et pronoms à l'accusatif : ihn, sie, es",
    objectives: [
      "demander le prix avec Was kostet ...? et Wie viel kostet ...?",
      "dire combien coûte un vêtement en euros ou en francs",
      "remplacer un nom déjà mentionné par ihn, sie, es"
    ],
    theory: [
      {
        h: "Demander et dire le prix",
        p: "Pour demander le prix : <em>Was kostet der Pullover?</em> ou <em>Wie viel kostet der Pullover?</em> On répond avec le verbe <em>kosten</em> et le nombre : <em>Der Pullover kostet vierzig Euro</em>. En Suisse, la monnaie est le franc, <em>der Franken</em> : <em>Das Hemd kostet fünfzig Franken</em>. Au pluriel, le verbe s'accorde avec le sujet : <em>Die Schuhe kosten achtzig Euro</em>. À la caisse, on entend <em>Das macht fünfundvierzig Euro</em>."
      },
      {
        h: "Ihn, sie, es : ne répète pas le nom",
        p: "Une fois le vêtement nommé, on ne le répète pas : on utilise un pronom. Comme complément d'objet de <em>nehmen</em> ou <em>kaufen</em> (accusatif), le pronom suit le <strong>genre du nom allemand</strong> : <em>der Pullover</em> devient <strong>ihn</strong>, <em>die Jacke</em> devient <strong>sie</strong>, <em>das Hemd</em> devient <strong>es</strong>, <em>die Schuhe</em> devient <strong>sie</strong>. Exemple : <em>Der Pullover ist schön. Ich nehme ihn.</em>"
      },
      {
        contrast: "En français, le pronom complément se place avant le verbe et s'accorde en genre et en nombre : <em>je le prends</em>, <em>je la prends</em>, <em>je les prends</em>. En allemand, il se place <em>après</em> le verbe, comme un complément ordinaire : <em>Ich nehme ihn</em>. Et le français n'a pas de neutre : <em>le</em> sert pour des noms masculins, alors que l'allemand distingue <em>ihn</em> (masculin) et <em>es</em> (neutre). Surtout, le genre est celui du nom allemand, pas celui du mot français : <em>la chemise</em> est <em>das Hemd</em> (<em>es</em>), <em>la jupe</em> est <em>der Rock</em> (<em>ihn</em>), <em>le pantalon</em> est <em>die Hose</em> (<em>sie</em>), <em>la ceinture</em> est <em>der Gürtel</em> (<em>ihn</em>)."
      },
      {
        trap: "Pour les choses, on utilise le genre grammatical, pas <em>es</em> pour tout : <em>Die Jacke ist schön. Ich nehme sie</em>, et non « Ich nehme es ». <em>Es</em> n'est correct que pour un nom neutre (<em>das Hemd</em>, <em>das Kleid</em>). Seul le masculin change de forme entre le nominatif (<em>er</em>) et l'accusatif (<em>ihn</em>)."
      },
      {
        tip: "Pour accepter l'achat, trois mots suffisent : <em>Ich nehme ihn</em> / <em>sie</em> / <em>es</em>. Pour refuser, ajoute <em>nicht</em> à la fin : <em>Ich nehme ihn nicht</em>."
      }
    ],
    grammar: {
      title: "Du nom au pronom à l'accusatif",
      note: "Le pronom suit le genre du nom. Seul le masculin change : <b>er → ihn</b>.",
      table: {
        head: ["nom", "nominatif", "accusatif", "exemple"],
        rows: [
          ["der Pullover", "er", "ihn", "Ich nehme ihn."],
          ["die Jacke", "sie", "sie", "Ich nehme sie."],
          ["das Hemd", "es", "es", "Ich nehme es."],
          ["die Schuhe", "sie", "sie", "Ich nehme sie."]
        ]
      },
      examples: [
        { tr: "Combien coûte le pull ?" },
        { tr: "Le pull coûte quarante euros. Je le prends.", note: "ihn : masculin" },
        { tr: "La veste coûte soixante euros. Je la prends.", note: "sie : féminin" },
        { tr: "La chemise coûte vingt-cinq euros. Je la prends.", note: "es : neutre" },
        { tr: "Les chaussures sont chères. Je ne les prends pas.", note: "nicht à la fin" },
        { tr: "Combien coûte le manteau ? Je ne l'achète pas.", note: "ihn : masculin" }
      ]
    },
    vocab: [
      "coûter",
      "combien, combien coûte (wie viel)",
      "le prix",
      "l'euro",
      "le franc suisse",
      "acheter",
      "la caisse",
      "le vendeur",
      "la vendeuse",
      "seulement",
      "le / la / les (objet : ihn, sie, es)",
      "Cela fait ... euros"
    ],
    exercises: [
      {
        q: "« Der Pullover ist schön. Ich nehme ___. » Quel pronom ?",
        opts: ["er", "ihn", "es"],
        why: "<i>Der Pullover</i> est masculin et il est ici complément de <i>nehmen</i> : <b>ihn</b>."
      },
      {
        q: "« Die Jacke ist teuer. Ich kaufe ___ nicht. » Quel pronom ?",
        opts: ["sie", "ihn", "es"],
        why: "<i>Die Jacke</i> est féminin : <b>sie</b> (au féminin, le nominatif et l'accusatif sont identiques)."
      },
      {
        q: "« Das Kleid ist schön. Ich nehme ___. » Quel pronom ?",
        opts: ["ihn", "sie", "es"],
        why: "<i>Das Kleid</i> est neutre : <b>es</b>."
      },
      {
        q: "Complète : « Der Rock ist billig. Ich kaufe ___. » (Je l'achète.)",
        hint: "der Rock est masculin ; accusatif",
        why: "Masculin accusatif : <b>ihn</b>."
      },
      {
        q: "Complète : « Was ___ die Schuhe? » (Combien coûtent les chaussures ?)",
        hint: "kosten, pluriel",
        why: "Le sujet <i>die Schuhe</i> est au pluriel : <b>kosten</b>."
      },
      {
        q: "Associe chaque mot à sa signification.",
        pairs: ["coûter", "le prix", "la caisse", "acheter"]
      },
      {
        q: "Complète les deux phrases.",
        tr: "Le pantalon coûte trente euros. Je le prends. La ceinture coûte quinze euros. Je la prends.",
        why: "<i>Die Hose</i> est féminin : <b>sie</b>. <i>Der Gürtel</i> est masculin : <b>ihn</b>. Le français dit « la ceinture, je la prends », mais l'allemand suit le genre du mot allemand."
      },
      {
        q: "Traduis : « La veste coûte soixante euros, je la prends. »",
        why: "<i>Die Jacke</i> est féminin, donc <i>sie</i>. Le nombre peut s'écrire en lettres (<i>sechzig</i>) ou en chiffres (60)."
      },
      {
        tr: "Combien coûte le manteau ? Il coûte quatre-vingt-dix euros.",
        why: "Dans <i>neunzig</i>, le <b>eu</b> se lit « oï » et le <b>z</b> « ts » ; la finale <b>-ig</b> se prononce comme le <b>ch</b> de <i>ich</i> : /ˈnɔʏntsɪç/. <i>Euro</i> commence par « oï »."
      },
      {
        tr: "La chemise coûte seulement vingt euros. Je la prends.",
        why: "<i>Nur</i> a un <b>u</b> long. <i>Zwanzig</i> : le groupe <b>zw</b> se lit « tsv »."
      }
    ]
  },
  "lesson:a1-u04-l4": {
    theme: "Tailles et jugements",
    title: "Combien ? Sehr, zu, viel, wenig",
    objectives: [
      "dire qu'un vêtement est très beau (sehr) ou trop cher (zu)",
      "utiliser viel et wenig après kosten (kostet viel, kostet wenig)",
      "décrire la taille : groß, klein, lang, kurz, eng, weit"
    ],
    theory: [
      {
        h: "Sehr et zu : devant l'adjectif",
        p: "<strong>Sehr</strong> (très) et <strong>zu</strong> (trop) se placent <em>devant</em> l'adjectif, sans aucune terminaison : <em>Der Pullover ist sehr schön</em>, <em>Die Hose ist zu klein</em>, <em>Das Kleid ist zu teuer</em>. On peut ajouter <em>ein bisschen</em> (un peu) : <em>Die Jacke ist ein bisschen zu groß</em>. Pour décrire la taille : <em>groß</em>, <em>klein</em>, <em>lang</em>, <em>kurz</em>, <em>eng</em> (étroit, serré), <em>weit</em> (large, ample)."
      },
      {
        h: "Viel et wenig : après kosten",
        p: "Avec <em>kosten</em>, et avec un adjectif au positif, la position distingue les mots : <strong>viel</strong> (beaucoup) et <strong>wenig</strong> (peu) se placent <em>après</em> le verbe <em>kosten</em>, tandis que <strong>sehr</strong> se place devant l'adjectif. Ce n'est pas une règle pour tous les verbes (<em>Das gefällt mir sehr</em>) ni pour les comparatifs (<em>viel schöner</em>). <em>Der Mantel kostet viel</em>, <em>Das Hemd kostet wenig</em>. Avec <em>zu</em>, on peut dire <em>zu viel</em> (trop) : <em>Der Mantel ist sehr schön, aber er kostet zu viel</em>."
      },
      {
        contrast: "Le français fait déjà une distinction proche : <em>très</em> se met devant l'adjectif (<em>très beau</em>) et <em>beaucoup</em> après le verbe (<em>il coûte beaucoup</em>). L'allemand suit le même partage : <em>sehr schön</em>, <em>kostet viel</em>. Piège de ressemblance : « peu » se dit <em>wenig</em>, mais « un peu » se dit <em>ein bisschen</em> (ou <em>ein wenig</em>), et « trop » se dit <em>zu</em> devant l'adjectif, <em>zu viel</em> avec <em>kosten</em>. Avec d'autres verbes, <em>sehr</em> peut servir (<em>Das gefällt mir sehr</em>)."
      },
      {
        trap: "Ne dis pas « Der Pullover ist viel schön » : devant un adjectif au positif, il faut <em>sehr</em> (<em>viel</em> se place en revanche devant le comparatif : <em>viel schöner</em>). Et avec <em>kosten</em>, ne dis pas « Der Mantel kostet sehr » : on emploie <em>viel</em> (ou <em>sehr viel</em>)."
      },
      {
        tip: "Dans un magasin, deux phrases te serviront souvent : <em>Der Mantel ist zu teuer</em> et <em>Die Hose ist zu eng</em>. Après <em>zu</em>, devant un adjectif, rien ne change."
      }
    ],
    grammar: {
      title: "sehr, zu, viel, wenig",
      note: "<b>Sehr</b> et <b>zu</b> se placent devant l'adjectif au positif ; avec <b>kosten</b>, <b>viel</b> et <b>wenig</b> se placent après le verbe.",
      table: {
        head: ["adverbe", "sens", "position", "exemple"],
        rows: [
          ["sehr", "très", "devant l'adjectif", "Der Pullover ist sehr schön."],
          ["zu", "trop", "devant l'adjectif", "Die Hose ist zu klein."],
          ["viel", "beaucoup", "après kosten", "Der Mantel kostet viel."],
          ["wenig", "peu", "après kosten", "Das Hemd kostet wenig."]
        ]
      },
      examples: [
        { tr: "Le pull est très beau." },
        { tr: "Le pantalon est trop petit.", note: "zu devant l'adjectif" },
        { tr: "La robe est trop chère." },
        { tr: "Le manteau coûte cher.", note: "viel après kosten" },
        { tr: "La chemise coûte peu.", note: "wenig après kosten" },
        { tr: "La veste est un peu trop grande." }
      ]
    },
    vocab: [
      "très (devant un adjectif)",
      "trop (devant un adjectif)",
      "beaucoup (après kosten)",
      "peu (après kosten)",
      "un peu",
      "grand",
      "petit",
      "long",
      "court",
      "étroit, serré",
      "large, ample",
      "la taille, la mesure"
    ],
    exercises: [
      {
        q: "Comment dit-on « Le pantalon est trop petit » ?",
        opts: ["Die Hose ist zu klein.", "Die Hose ist sehr klein.", "Die Hose ist viel klein."],
        why: "<b>Zu</b> veut dire « trop » et se place devant l'adjectif. <i>Sehr klein</i> serait « très petit », sans l'idée d'excès."
      },
      {
        q: "Comment dit-on « Le manteau est très beau » ?",
        opts: ["Der Mantel ist zu schön.", "Der Mantel ist sehr schön.", "Der Mantel ist wenig schön."],
        why: "<b>Sehr</b> devant l'adjectif. <i>Zu schön</i> veut dire « trop beau », ce qui n'est en général pas un compliment."
      },
      {
        q: "Quelles phrases sont correctes ?",
        opts: [
          "Die Hose ist zu eng.",
          "Der Pullover ist viel schön.",
          "Das Hemd kostet wenig.",
          "Der Mantel ist sehr groß.",
          "Die Jacke kostet sehr."
        ],
        why: "<i>Viel schön</i> est faux : devant un adjectif il faut <i>sehr</i>. Avec <i>kosten</i>, <i>kostet sehr</i> seul ne convient pas : on dit <i>kostet viel</i> ou <i>kostet sehr viel</i>."
      },
      {
        q: "Complète : « Der Mantel ist ___ teuer. Ich nehme ihn nicht. » (trop)",
        hint: "devant l'adjectif",
        why: "<b>Zu</b> : « trop » devant un adjectif."
      },
      {
        q: "Complète : « Das Kleid ist ___ schön. » (très)",
        hint: "devant l'adjectif",
        why: "<b>Sehr</b> : « très » devant un adjectif."
      },
      {
        q: "Associe chaque mot à sa signification.",
        pairs: ["grand", "petit", "long", "court"]
      },
      {
        q: "Complète : « Le pull est très beau, mais il coûte cher. »",
        tr: "Le pull est très beau, mais il coûte cher.",
        why: "<i>Sehr</i> devant l'adjectif, <i>viel</i> après <i>kosten</i>."
      },
      {
        q: "Traduis : « Le manteau est très beau, mais il coûte trop. »",
        why: "<i>Sehr schön</i> (devant l'adjectif) et <i>zu viel</i> (après <i>kosten</i>) : <i>er kostet zu viel</i>."
      },
      {
        tr: "Le pantalon est trop petit, mais la veste est très belle.",
        why: "<i>Klein</i> a le groupe <b>ei</b> qui se lit « aï ». <i>Schön</i> : le <b>sch</b> est comme le « ch » de « chat »."
      },
      {
        tr: "La robe est très belle, mais trop chère.",
        why: "<i>Kleid</i> : le <b>ei</b> se lit « aï » et le <b>d</b> final sonne comme un <b>t</b>."
      }
    ]
  },
  "lesson:a1-u04-test": {
    theme: "Évaluation",
    title: "Évaluation de l'unité 4",
    objectives: ["vérifier l'adjectif attribut, dieser et welcher, les pronoms à l'accusatif et sehr, zu, viel"],
    theory: [
      {
        p: "Dix questions sur toute l'unité. On réussit avec 70 %. Ne relis pas les leçons pendant que tu réponds : si tu ne te souviens plus de quelque chose, mieux vaut retourner réviser."
      }
    ],
    exercises: [
      {
        q: "Complète : « Die Schuhe ___ schwarz. » (Les chaussures sont noires.)",
        hint: "sein, troisième personne du pluriel",
        why: "Sujet au pluriel : <b>sind</b>."
      },
      {
        q: "Complète : « Der Pullover kostet fünfzig Euro. Ich nehme ___. » (Je le prends.)",
        hint: "der Pullover est masculin ; accusatif",
        why: "Masculin accusatif : <b>ihn</b>."
      },
      {
        q: "Complète : « Die Hose ist ___ eng, ich nehme sie nicht. » (trop)",
        hint: "devant l'adjectif",
        why: "<b>Zu</b> : « trop » devant un adjectif."
      },
      {
        q: "Choisis l'article défini correct pour chaque nom.",
        items: ["pull", "pantalon", "robe", "jupe"]
      },
      {
        q: "Comment demandes-tu quel pull est bon marché ?",
        opts: ["Welcher Pullover ist billig?", "Welche Pullover ist billig?", "Welches Pullover ist billig?"],
        why: "<i>Pullover</i> est masculin : <b>welcher</b>."
      },
      {
        q: "« Das Kleid ist schön. Ich nehme ___. » Quel pronom ?",
        opts: ["ihn", "sie", "es"],
        why: "<i>Das Kleid</i> est neutre : <b>es</b>."
      },
      {
        tr: "La chemise est très belle, mais trop chère.",
        why: "<i>Sehr schön, aber zu teuer</i> : deux adverbes devant l'adjectif."
      },
      {
        q: "Traduis : « La veste est belle, mais trop chère. Je ne la prends pas. »",
        why: "<i>Zu</i> se place devant l'adjectif <i>teuer</i> ; <i>sie</i> reprend <i>die Jacke</i> et <i>nicht</i>, à la fin, nie l'achat."
      },
      {
        tr: "Quel pull est rouge et lequel est bleu ?",
        why: "<i>Welcher Pullover</i> : masculin. La question au nominatif ne change pas le verbe, qui reste en deuxième position."
      },
      {
        tr: "Le manteau est très beau. Je le prends.",
        why: "<i>Mantel</i> est masculin : <i>ihn</i>."
      }
    ]
  },
  "unit:a1-u05": {
    title: "Ma journée",
    grammarNote: "verbes à particule séparable · um, am, im, von ... bis · können, wollen, müssen · adverbes de fréquence"
  },
  "lesson:a1-u05-l1": {
    theme: "Routine du matin",
    title: "Verbes séparables : la particule va en fin de phrase",
    objectives: [
      "décrire sa routine avec aufstehen, frühstücken, duschen, einkaufen, fernsehen",
      "placer la particule des verbes séparables en fin de phrase",
      "dire à quelle heure on fait quelque chose avec um + heure"
    ],
    theory: [
      {
        h: "La particule se détache et va en fin de phrase",
        p: "Beaucoup de verbes allemands ont une particule accentuée qui, dans la proposition principale, <strong>se détache</strong> et va <strong>à la fin de la phrase</strong>. À l'infinitif le verbe reste entier : <em>aufstehen</em>. Dans la phrase, la partie conjuguée est en deuxième position et la particule ferme la phrase : <em>Ich stehe um sieben Uhr <strong>auf</strong></em>. Il en va de même pour <em>aufwachen</em> (<em>Ich wache um sechs Uhr auf</em>), <em>einkaufen</em> (<em>Wir kaufen am Samstag ein</em>), <em>fernsehen</em> (<em>Am Abend sehe ich fern</em>), <em>anfangen</em> (<em>Der Film fängt um acht Uhr an</em>) et <em>einschlafen</em>."
      },
      {
        contrast: "Le français n'a pas de verbes qui se coupent en deux : <em>se lever</em>, <em>se réveiller</em>, <em>faire les courses</em> restent d'un bloc. De plus, <em>se lever</em> et <em>se réveiller</em> sont pronominaux (<em>je me lève</em>), alors que <em>aufstehen</em> et <em>aufwachen</em> n'ont <strong>aucun pronom</strong> : <em>Ich stehe auf</em>, et non « Ich stehe mich auf ». Pour « prendre une douche », le verbe <em>duschen</em> suffit : <em>Ich dusche am Morgen</em>."
      },
      {
        h: "Les moments de la journée : le genre",
        p: "Apprends ces noms avec leur article : <em>der Morgen</em>, <em>der Tag</em>, <em>der Abend</em>, <em>die Nacht</em>. Bonne nouvelle : les genres correspondent à ceux du français (<em>le matin</em>, <em>le jour</em>, <em>le soir</em> sont masculins, <em>la nuit</em> est féminine). Attention à une confusion de sens : <em>der Morgen</em> (le matin) s'écrit avec une majuscule, alors que <em>morgen</em> en minuscule veut dire « demain »."
      },
      {
        trap: "Ne dis pas « Ich aufstehe um sieben » : la particule ne reste pas collée au verbe conjugué. Et ne l'oublie pas à la fin : « Ich stehe um sieben Uhr » sans <em>auf</em> est une autre phrase et ne veut pas dire « je me lève ». Attention aussi aux préfixes qui <strong>ne</strong> se détachent <strong>pas</strong> : <em>be-</em>, <em>ver-</em>, <em>er-</em> (<em>besuchen</em> → <em>Ich besuche dich</em>, <em>verstehen</em> → <em>Ich verstehe das</em>). La particule séparable est celle qui porte l'accent (<em>AUFstehen</em>), le préfixe inséparable ne le porte pas (<em>beSUchen</em>)."
      },
      {
        tip: "Écris cinq phrases avec des verbes séparables différents et vérifie que la particule est toujours le dernier mot : <em>Ich wache auf. Ich stehe auf. Ich kaufe ein. Ich sehe fern. Ich schlafe ein.</em> Puis ajoute <em>um</em> + heure à deux d'entre elles."
      }
    ],
    grammar: {
      title: "Verbes séparables dans la proposition principale",
      note: "Dans la proposition principale, la partie conjuguée est en <b>deuxième position</b> et la <b>particule va en fin de phrase</b>. À l'infinitif, le verbe est entier.",
      table: {
        head: ["infinitif", "présent", "exemple"],
        rows: [
          ["aufstehen", "ich stehe ... auf", "Ich stehe um sieben Uhr auf."],
          ["aufwachen", "ich wache ... auf", "Du wachst um sechs Uhr auf."],
          ["einkaufen", "wir kaufen ... ein", "Am Samstag kaufen wir ein."],
          ["fernsehen", "er sieht ... fern", "Am Abend sieht er fern."],
          ["anfangen", "er fängt ... an", "Der Film fängt um acht Uhr an."]
        ]
      },
      examples: [
        { tr: "Je me lève à sept heures.", note: "auf en fin de phrase, aucun pronom réfléchi" },
        { tr: "Tu te réveilles à six heures." },
        { tr: "Le samedi, nous faisons les courses.", note: "einkaufen : ein en fin de phrase" },
        { tr: "Le soir, il regarde la télévision.", note: "fernsehen : au présent de er, sehen devient sieht" },
        { tr: "Le film commence à huit heures.", note: "anfangen : er fängt an, avec le changement de voyelle" },
        { tr: "Je prends mon petit-déjeuner à sept heures et demie.", note: "frühstücken n'est pas séparable : aucune particule en fin de phrase" }
      ]
    },
    vocab: [
      "se lever",
      "se réveiller",
      "prendre le petit-déjeuner",
      "prendre une douche",
      "faire les courses",
      "regarder la télévision",
      "commencer",
      "s'endormir",
      "le matin",
      "le jour",
      "le soir",
      "la nuit"
    ],
    exercises: [
      {
        q: "Quelle phrase est correcte ?",
        opts: ["Ich aufstehe um sieben Uhr.", "Ich stehe um sieben Uhr auf.", "Ich stehe um auf sieben Uhr."],
        why: "Le verbe conjugué est en deuxième position et la particule <b>auf</b> ferme la phrase : <b>Ich stehe um sieben Uhr auf.</b>"
      },
      {
        q: "Quelle question est correcte ?",
        opts: ["Kommst du mit?", "Mitkommst du?", "Kommst mit du?"],
        why: "<i>Mitkommen</i> est séparable : <i>Kommst du mit?</i> La particule <b>mit</b> ferme la question."
      },
      {
        tr: "Toute la conjugaison de aufstehen, avec la particule.",
        why: "Écris toujours la forme conjuguée, puis la particule : <i>stehe auf</i>, <i>stehst auf</i>, <i>steht auf</i>, <i>stehen auf</i>, <i>steht auf</i>, <i>stehen auf</i>. <i>Er/sie/es</i> et <i>ihr</i> ont la même forme : <b>steht auf</b>."
      },
      {
        q: "Complète : « Wir ___ um sieben auf. »",
        hint: "aufstehen, première personne du pluriel",
        why: "Avec <b>wir</b> le verbe a la forme de l'infinitif : <i>wir stehen ... auf</i>."
      },
      {
        q: "Complète : « Ich stehe um sieben ___. »",
        hint: "la particule de aufstehen",
        why: "La particule séparable va en fin de phrase : <b>auf</b>."
      },
      {
        tr: "Je me lève à sept heures.",
        why: "L'ordre est : sujet, verbe conjugué, heure, particule. Dans <i>stehe</i>, le <b>st</b> en début de syllabe se lit « scht » : /ˈʃteːə/."
      },
      {
        q: "Complète les deux mots manquants.",
        tr: "Le samedi, nous faisons les courses.",
        why: "<i>Einkaufen</i> se divise en <i>kaufen</i> et <i>ein</i>. Avec <i>am Samstag</i> en première position, le sujet <i>wir</i> suit le verbe."
      },
      {
        tr: "À sept heures, je me lève.",
        why: "<i>Ich stehe um sieben Uhr auf</i> est correct aussi, tout comme, avec l'inversion, <i>Um sieben (Uhr) stehe ich auf</i>. Dans la phrase française, le pronom réfléchi (« me ») ne se traduit pas."
      },
      {
        tr: "Je me lève à sept heures et je prends mon petit-déjeuner à huit heures.",
        why: "<i>Auf</i> contient la diphtongue /aʊ̯/, écrite « au » : un glissement de « a » vers un « ou » bref dans la même syllabe. Dans <i>frühstücke</i>, le <b>ü</b> se prononce comme le « u » français de « tu » ; le <b>st</b> se lit « scht »."
      },
      {
        tr: "Le samedi, nous faisons les courses.",
        why: "<i>Samstag</i> : le <b>s</b> devant une voyelle est sonore (comme le « z » de « zéro ») ; <i>ein</i> commence par la diphtongue <b>ei</b> (comme « aï »)."
      }
    ]
  },
  "lesson:a1-u05-l2": {
    theme: "L'heure et les jours",
    title: "Dire et demander l'heure : um, am, von ... bis",
    objectives: [
      "demander l'heure avec Wie spät ist es? et répondre",
      "dire les heures pleines, ainsi que Viertel nach, Viertel vor, halb",
      "utiliser um avec l'heure, am avec les jours et von ... bis"
    ],
    theory: [
      {
        h: "Demander et dire l'heure",
        p: "Pour demander l'heure : <em>Wie spät ist es?</em> ou <em>Wie viel Uhr ist es?</em> On répond avec <em>Es ist</em> + heure : <em>Es ist sieben Uhr</em>. Pour les quarts et les minutes : <em>Es ist Viertel nach sieben</em> (7 h 15), <em>Es ist Viertel vor acht</em> (7 h 45), <em>Es ist zehn nach sieben</em> (7 h 10), <em>Es ist zehn vor acht</em> (7 h 50). Pour une heure, on dit <em>Es ist ein Uhr</em>. Dans les contextes officiels (trains, programmes de télévision, horaires), on utilise aussi les heures de 0 à 24 : <em>neunzehn Uhr dreißig</em>."
      },
      {
        contrast: "Comme en français (« il est sept heures »), le sujet est un <em>es</em> impersonnel : <em>Es ist sieben Uhr</em>. Le piège, c'est <strong>halb</strong> : <em>halb acht</em> veut dire <strong>sept heures et demie</strong>, pas huit heures et demie, car on compte vers l'heure qui arrive. Quand tu entends « acht », ton oreille pense à 8 h : retiens que <em>Es ist halb acht</em> = 7 h 30. En français, « heure » désigne à la fois l'heure du jour et la durée ; l'allemand distingue les deux : l'heure du jour se dit avec <em>Uhr</em> (<em>die Uhr</em> est aussi « l'horloge, la montre »), la durée avec <em>die Stunde</em> : <em>Es ist drei Uhr</em> (il est trois heures), <em>Der Film dauert drei Stunden</em> (le film dure trois heures)."
      },
      {
        h: "um, am, von ... bis",
        p: "Avec l'heure précise on utilise <strong>um</strong> : <em>Der Film beginnt um acht Uhr</em> (à huit heures). Avec les jours et les moments de la journée on utilise <strong>am</strong> : <em>am Montag</em>, <em>am Samstag</em>, <em>am Morgen</em>, <em>am Nachmittag</em>, <em>am Abend</em> ; seule exception, <em>in der Nacht</em>. Avec les mois et les saisons, <strong>im</strong> : <em>im Mai</em>, <em>im Sommer</em>. Pour un intervalle, <strong>von ... bis</strong> : <em>von Montag bis Freitag</em>, <em>von acht bis vier</em>. Les jours : <em>Montag, Dienstag, Mittwoch, Donnerstag, Freitag, Samstag, Sonntag</em>."
      },
      {
        trap: "En allemand, tous les jours sont masculins (<em>der Montag</em>, <em>der Sonntag</em>) et s'écrivent avec une majuscule, comme tous les noms ; en français ils prennent une minuscule. Ne traduis pas « à sept heures » avec <em>am</em> : pour l'heure il faut <em>um</em>, pour le jour <em>am</em>. Et ne dis pas « um Montag » : lundi est un jour, donc <em>am Montag</em>."
      },
      {
        tip: "Apprends les trois demi-heures par paires : <em>halb acht</em> (7 h 30), <em>halb neun</em> (8 h 30), <em>halb zehn</em> (9 h 30). Pour vérifier que tu as compris, ajoute toujours l'heure qui suit : si je dis <em>halb neun</em>, il me manque une demi-heure pour arriver à neuf heures."
      }
    ],
    grammar: {
      title: "L'heure et les prépositions de temps",
      note: "<b>um</b> + heure, <b>am</b> + jour ou moment de la journée (<em>am Morgen, am Nachmittag, am Abend</em> ; exception : <em>in der Nacht</em>), <b>im</b> + mois ou saison. <b>Halb acht</b> = 7 h 30.",
      table: {
        head: ["heure", "on dit"],
        rows: [
          ["7:00", "Es ist sieben Uhr."],
          ["7:05", "Es ist fünf nach sieben."],
          ["7:15", "Es ist Viertel nach sieben."],
          ["7:30", "Es ist halb acht."],
          ["7:45", "Es ist Viertel vor acht."],
          ["7:50", "Es ist zehn vor acht."]
        ]
      },
      examples: [
        { tr: "Quelle heure est-il ?", note: "aussi : Wie viel Uhr ist es?" },
        { tr: "Il est sept heures.", note: "es ist, au singulier" },
        { tr: "Il est sept heures et quart." },
        { tr: "Il est sept heures et demie.", note: "halb acht : on compte vers huit heures" },
        { tr: "Il est huit heures moins le quart." },
        { tr: "Le film commence le samedi à huit heures et demie.", note: "am Samstag, um halb neun" }
      ]
    },
    vocab: [
      "l'heure, l'horloge, la montre (die Uhr)",
      "l'heure (durée)",
      "la minute",
      "le quart",
      "demi, demie (halb acht = sept heures et demie)",
      "moins (devant l'heure qui arrive : Viertel vor acht)",
      "après, et (Viertel nach sieben)",
      "tard",
      "tôt",
      "le lundi",
      "le samedi",
      "le week-end"
    ],
    exercises: [
      {
        q: "« Es ist halb acht. » Quelle heure est-il ?",
        opts: ["sept heures et demie", "huit heures et demie", "huit heures pile"],
        why: "<i>Halb acht</i> correspond à sept heures et demie : on compte vers l'heure suivante, une demi-heure avant huit heures."
      },
      {
        q: "Comment dis-tu « du lundi au vendredi » ?",
        opts: ["von Montag nach Freitag", "ab Montag zu Freitag", "von Montag bis Freitag"],
        why: "Pour un intervalle on utilise <b>von ... bis</b> : <i>von Montag bis Freitag</i>."
      },
      {
        q: "Complète : « Der Film beginnt ___ acht Uhr. » (à huit heures)",
        hint: "avec l'heure précise",
        why: "Avec l'heure on utilise <b>um</b> : <i>um acht Uhr</i>."
      },
      {
        q: "Complète : « Das Konzert ist ___ Samstag. » (le samedi)",
        hint: "avec un jour de la semaine",
        why: "Avec les jours on utilise <b>am</b> : <i>am Samstag</i>."
      },
      {
        tr: "Il est sept heures et quart.",
        why: "<i>Viertel nach sieben</i> : le <b>V</b> de <i>Viertel</i> se lit comme un « f ». Dans <i>sieben</i>, le <b>ie</b> est un « i » long et le <b>s</b> est sonore."
      },
      {
        q: "Associe chaque jour de la semaine à sa signification.",
        pairs: ["lundi", "mercredi", "vendredi", "dimanche"]
      },
      {
        q: "Complète les deux phrases.",
        tr: "7 h 10 : il est sept heures dix. 7 h 50 : il est huit heures moins dix.",
        why: "<i>Zehn nach sieben</i> est 7 h 10, <i>zehn vor acht</i> est 7 h 50."
      },
      {
        tr: "Quelle heure est-il ? Il est huit heures et demie.",
        why: "Huit heures et demie se dit <i>halb neun</i>. Autre possibilité, plus formelle : <i>acht Uhr dreißig</i>. <i>Wie spät ist es?</i> et <i>Wie viel Uhr ist es?</i> sont équivalents."
      },
      {
        tr: "Quelle heure est-il ? Il est huit heures moins le quart.",
        why: "<i>Viertel vor acht</i> : 7 h 45. Dans <i>vor</i>, le <b>v</b> sonne comme un « f » et le <b>o</b> est long."
      },
      {
        tr: "Le film commence à huit heures et demie.",
        why: "Dans <i>halb neun</i>, le <b>h</b> initial est expiré et le <b>b</b> final sonne comme un « p ». <i>Beginnt</i> : le <b>g</b> est un « g » dur, comme dans « gare »."
      }
    ]
  },
  "lesson:a1-u05-l3": {
    theme: "Capacité, volonté, obligation",
    title: "Verbes modaux : können, wollen, müssen",
    objectives: [
      "dire ce qu'on peut, veut et doit faire avec können, wollen, müssen",
      "conjuguer les trois modaux au présent",
      "placer l'infinitif en fin de phrase"
    ],
    theory: [
      {
        h: "Trois verbes, une structure",
        p: "<strong>können</strong> (pouvoir, savoir), <strong>wollen</strong> (vouloir) et <strong>müssen</strong> (devoir) s'emploient avec un autre verbe à l'infinitif. Le modal est conjugué et se place en deuxième position, l'<strong>infinitif va à la fin de la phrase</strong> : <em>Ich kann heute nicht kommen</em>, <em>Wir wollen morgen schwimmen</em>, <em>Du musst heute lernen</em>. Le modal et l'infinitif encadrent le reste de la phrase comme une parenthèse."
      },
      {
        h: "La conjugaison",
        p: "Ces trois verbes ont une conjugaison propre : la première et la troisième personne du singulier sont identiques et <strong>sans terminaison</strong>. <em>Ich kann</em>, <em>er kann</em>. <em>Ich will</em>, <em>er will</em>. <em>Ich muss</em>, <em>er muss</em>. Avec <em>wir</em>, <em>sie</em> et <em>Sie</em>, la forme est celle de l'infinitif : <em>wir können</em>, <em>sie wollen</em>, <em>Sie müssen</em>. Avec <em>ihr</em> on a <em>könnt, wollt, müsst</em>, avec <em>du</em> <em>kannst, willst, musst</em>."
      },
      {
        contrast: "En français, l'infinitif suit directement le modal (<em>je peux venir</em>, <em>je veux dormir</em>) ; en allemand il est repoussé à la fin : <em>Ich kann heute kommen</em>, et quand la phrase s'allonge, la parenthèse devient évidente : <em>Ich kann heute Abend mit dir ins Kino gehen</em>. En français, « savoir » exprime une compétence (<em>je sais nager</em>) ; l'allemand utilise <em>können</em> pour tout : <em>Ich kann schwimmen</em> vaut « je peux nager » et « je sais nager »."
      },
      {
        trap: "Avec <em>nicht</em>, <em>müssen</em> ne signifie pas « ne pas devoir » au sens d'une interdiction. <em>Du musst nicht kommen</em> veut dire « tu n'as pas besoin de venir » : ce n'est pas une interdiction. Pour « tu ne dois pas » comme interdiction, il faudra un autre verbe, <em>dürfen</em>, qui arrive plus loin. Autre piège : <em>wollen</em> est direct. <em>Ich will einen Kaffee</em> peut sonner sec comme demande, comme « je veux un café ». Pour demander poliment, on utilise <em>ich möchte</em> (« je voudrais »), qu'on verra plus tard. Après un modal, il n'y a pas de <em>zu</em> devant l'infinitif."
      },
      {
        tip: "Construis trois phrases sur toi, une par modal, et dis-les à voix haute : <em>Ich kann gut kochen</em>, <em>Ich will morgen schlafen</em>, <em>Ich muss heute lernen</em>. Vérifie que l'infinitif est toujours le dernier mot."
      }
    ],
    grammar: {
      title: "können, wollen, müssen au présent",
      note: "La 1re et la 3e personne du singulier sont <b>identiques et sans terminaison</b>. L'infinitif va en fin de phrase.",
      table: {
        head: ["personne", "können", "wollen", "müssen"],
        rows: [
          ["ich", "kann", "will", "muss"],
          ["du", "kannst", "willst", "musst"],
          ["er / sie / es", "kann", "will", "muss"],
          ["wir", "können", "wollen", "müssen"],
          ["ihr", "könnt", "wollt", "müsst"],
          ["sie / Sie", "können", "wollen", "müssen"]
        ]
      },
      examples: [
        { tr: "Je sais bien cuisiner.", note: "können pour la capacité" },
        { tr: "Aujourd'hui, tu ne peux pas venir.", note: "nicht avant l'infinitif" },
        { tr: "Demain, nous voulons nager." },
        { tr: "Aujourd'hui, il ne veut pas travailler.", note: "er will : sans terminaison" },
        { tr: "Aujourd'hui, je dois étudier.", note: "ich muss : sans terminaison" },
        { tr: "Ils doivent faire leurs devoirs.", note: "sie müssen : forme identique à l'infinitif" }
      ]
    },
    vocab: [
      "pouvoir, savoir (capacité)",
      "vouloir",
      "devoir",
      "étudier, apprendre",
      "cuisiner",
      "nager",
      "dormir",
      "danser",
      "le travail",
      "le devoir (à faire à la maison)",
      "aujourd'hui",
      "demain"
    ],
    exercises: [
      {
        q: "Quelle phrase est correcte ?",
        opts: ["Ich kann heute gehe.", "Ich kann heute gehen.", "Ich gehen kann heute."],
        why: "Le modal est en deuxième position, l'infinitif à la fin : <b>Ich kann heute gehen.</b>"
      },
      {
        q: "Complète : « Er ___ heute lernen. » (Aujourd'hui, il doit étudier.)",
        opts: ["müsst", "muss", "müssen"],
        why: "Avec <i>er</i>, le modal ne prend pas de terminaison : <b>er muss</b>."
      },
      {
        tr: "Toute la conjugaison de können.",
        why: "<i>Ich kann</i> et <i>er kann</i> sont identiques. Avec <i>du</i> la forme est <i>kannst</i>, avec <i>ihr</i> <i>könnt</i>."
      },
      {
        tr: "Toute la conjugaison de wollen.",
        why: "<i>Ich will</i> et <i>er will</i> sont identiques. Avec <i>du</i> la forme est <i>willst</i>, avec <i>ihr</i> <i>wollt</i>."
      },
      {
        tr: "Toute la conjugaison de müssen.",
        why: "<i>Ich muss</i> et <i>er muss</i> sont identiques. Avec <i>du</i> la forme est <i>musst</i>, avec <i>ihr</i> <i>müsst</i>."
      },
      {
        q: "Complète : « Wir ___ morgen schwimmen. » (Demain, nous voulons nager.)",
        hint: "vouloir, première personne du pluriel",
        why: "Avec <b>wir</b>, le modal a la forme de l'infinitif : <b>wollen</b>."
      },
      {
        q: "Complète les deux phrases.",
        tr: "Je ne peux pas dormir. Je dois travailler.",
        why: "<i>Ich kann nicht schlafen</i> : <i>können</i> pour la possibilité. <i>Ich muss arbeiten</i> : <i>müssen</i> pour l'obligation."
      },
      {
        tr: "Je dois travailler, mais je veux dormir.",
        why: "Deux phrases avec chacune son modal, reliées par <i>aber</i> avec une virgule devant : <i>muss</i> pour l'obligation, <i>will</i> pour la volonté."
      },
      {
        tr: "Aujourd'hui je ne peux pas venir, je dois travailler.",
        why: "<i>Kann</i> avec un <b>a</b> bref. Dans <i>kommen</i>, le <b>o</b> est bref. <i>Heute</i> : le <b>eu</b> se lit « oï »."
      },
      {
        tr: "Aujourd'hui je dois étudier, mais je veux nager.",
        why: "Dans <i>schwimmen</i>, le <b>sch</b> se lit comme le « ch » de « chat » et le <b>w</b> comme le « v » français."
      }
    ]
  },
  "lesson:a1-u05-l4": {
    theme: "Habitudes et fréquence",
    title: "À quelle fréquence ? immer, oft, manchmal, nie",
    objectives: [
      "dire à quelle fréquence on fait quelque chose avec immer, oft, manchmal, selten, nie",
      "placer l'adverbe de fréquence au bon endroit",
      "commencer la phrase par une indication de temps et inverser verbe et sujet"
    ],
    theory: [
      {
        h: "Les adverbes de fréquence",
        p: "Cinq mots suffisent pour décrire ses habitudes : <em>immer</em> (toujours), <em>oft</em> (souvent), <em>manchmal</em> (parfois), <em>selten</em> (rarement), <em>nie</em> (jamais). Ils se placent en général <strong>après le verbe conjugué</strong> : <em>Ich trinke immer Kaffee</em>, <em>Ich lese oft die Zeitung</em>, <em>Ich esse selten Brot</em>. Pour dire que quelque chose arrive chaque matin ou chaque soir, il y a <em>morgens</em> (le matin) et <em>abends</em> (le soir) ; <em>jeden Tag</em> (chaque jour) ne précise pas le moment de la journée."
      },
      {
        h: "Si la phrase commence par le temps, le sujet suit le verbe",
        p: "Le verbe conjugué est toujours en <strong>deuxième position</strong>. Si une indication de temps ouvre la phrase, le sujet passe après le verbe (<strong>inversion</strong>) : <em>Morgens trinke ich immer Kaffee</em>, <em>Abends sehe ich manchmal fern</em>, <em>Jeden Tag frühstücke ich um acht</em>. Le sens est le même que dans <em>Ich trinke morgens immer Kaffee</em> : seul change l'élément qui ouvre la phrase."
      },
      {
        contrast: "En français, on dit sans problème <em>Le matin, je bois toujours du café</em>, avec le sujet avant le verbe. En allemand, « Morgens ich trinke » est une faute : après <em>morgens</em>, le verbe vient tout de suite. De plus, le français nie avec <em>ne ... jamais</em> : <em>je ne bois jamais de bière</em>. En allemand, <em>nie</em> contient déjà la négation et se met seul : <em>Ich trinke nie Bier</em>, sans <em>nicht</em>."
      },
      {
        trap: "Ne dis pas « Ich trinke nie nicht Bier » : <em>nie</em> est déjà négatif et <em>nicht</em> s'ajoute pour rien. Et ne place pas l'adverbe devant le verbe conjugué : « Ich immer trinke Kaffee » est une faute. Après le sujet vient toujours le verbe, puis l'adverbe."
      },
      {
        tip: "Décris ta journée avec une phrase par adverbe : <em>Ich trinke immer Kaffee. Ich lese oft die Zeitung. Abends sehe ich manchmal fern. Ich esse selten Brot. Ich trinke nie Bier.</em> Puis essaie de mettre <em>Morgens</em> ou <em>Abends</em> en première position et vérifie le verbe."
      }
    ],
    grammar: {
      title: "Adverbes de fréquence et inversion",
      note: "L'adverbe se place en général <b>après le verbe conjugué</b>. Si la phrase commence par une indication de temps, <b>le verbe reste en deuxième position</b> et le sujet le suit.",
      table: {
        head: ["adverbe", "signification", "exemple"],
        rows: [
          ["immer", "toujours", "Ich trinke immer Kaffee."],
          ["oft", "souvent", "Ich lese oft die Zeitung."],
          ["manchmal", "parfois", "Abends sehe ich manchmal fern."],
          ["selten", "rarement", "Ich esse selten Brot."],
          ["nie", "jamais", "Ich trinke nie Bier."]
        ]
      },
      examples: [
        { tr: "Je bois toujours du café." },
        { tr: "Le matin, je bois toujours du café.", note: "morgens en première position : trinke ich" },
        { tr: "Je lis souvent le journal." },
        { tr: "Le soir, je regarde parfois la télévision.", note: "fernsehen : fern en fin de phrase" },
        { tr: "Je mange rarement du pain." },
        { tr: "Je ne bois jamais de bière.", note: "nie, sans nicht" }
      ]
    },
    vocab: [
      "toujours",
      "souvent",
      "parfois",
      "rarement",
      "jamais",
      "le matin, chaque matin",
      "le soir, chaque soir",
      "chaque jour",
      "le pain",
      "le petit-déjeuner",
      "le journal",
      "le déjeuner"
    ],
    exercises: [
      {
        q: "Quelle phrase est correcte ?",
        opts: ["Morgens ich trinke Kaffee.", "Morgens trinke ich Kaffee.", "Ich morgens trinke Kaffee."],
        why: "Après <i>morgens</i> vient tout de suite le verbe conjugué (deuxième position), puis le sujet : <b>Morgens trinke ich Kaffee.</b>"
      },
      {
        q: "Que signifie « Ich trinke nie Kaffee » ?",
        opts: ["Je ne bois jamais de café.", "Je bois toujours du café.", "Aujourd'hui, je ne bois pas de café."],
        why: "<i>Nie</i> veut dire « jamais » et contient déjà la négation : pas besoin de <i>nicht</i>."
      },
      {
        q: "Quelles phrases sont correctes ?",
        opts: [
          "Morgens trinke ich immer Kaffee.",
          "Manchmal ich lese die Zeitung.",
          "Ich lese oft die Zeitung.",
          "Ich trinke nie nicht Kaffee.",
          "Jeden Tag frühstücke ich um acht."
        ],
        why: "La phrase 2 place le sujet avant le verbe après <i>manchmal</i> ; la phrase 4 double la négation, car <i>nie</i> est déjà négatif."
      },
      {
        q: "Complète : « Abends ___ ich oft fern. »",
        hint: "fernsehen, première personne du singulier",
        why: "Le verbe <i>fernsehen</i> se divise : <b>sehe</b> en deuxième position, <i>fern</i> en fin de phrase."
      },
      {
        q: "Associe chaque adverbe à sa signification.",
        pairs: ["toujours", "souvent", "parfois", "jamais"]
      },
      {
        tr: "Le soir, je regarde parfois la télévision.",
        why: "Avec <i>Abends</i> en première position, le verbe suit tout de suite : <i>sehe ich</i>, puis l'adverbe, puis <i>fern</i> en fin de phrase."
      },
      {
        q: "Complète les deux mots manquants.",
        tr: "Le matin, je bois toujours du café.",
        why: "Avec <i>morgens</i> en première position, le verbe est en deuxième position : <i>trinke ich</i>. L'adverbe <i>immer</i> suit le sujet."
      },
      {
        tr: "Le soir, je regarde souvent la télévision.",
        why: "<i>Ich sehe abends oft fern</i> et <i>Oft sehe ich abends fern</i> sont corrects aussi : l'adverbe peut changer de place, le verbe reste en deuxième."
      },
      {
        tr: "Le matin, je bois toujours du café, le soir parfois du thé.",
        why: "Dans <i>Kaffee</i>, la double <b>ff</b> indique que le <b>a</b> est bref ; <i>immer</i> a un <b>i</b> bref. Dans <i>manchmal</i>, le <b>ch</b> est le même son que dans <i>ich</i>."
      },
      {
        tr: "Le matin, je bois toujours du café et je lis le journal.",
        why: "<i>Zeitung</i> : le <b>z</b> se lit « ts » et le <b>ei</b> « aï ». <i>Lese</i> a un <b>s</b> sonore."
      }
    ]
  },
  "lesson:a1-u05-test": {
    theme: "Contrôle",
    title: "Contrôle de l'unité 5",
    objectives: ["vérifier les verbes séparables, l'heure et les prépositions de temps, les modaux et les adverbes de fréquence"],
    theory: [
      {
        p: "Dix questions sur toute l'unité. On réussit avec 70 %. Ne relis pas les leçons pendant que tu réponds : si tu ne te souviens pas de quelque chose, mieux vaut retourner réviser."
      }
    ],
    exercises: [
      {
        tr: "Présent de aufstehen : ich, er/sie/es, wir.",
        why: "La particule va en fin de phrase : <i>stehe auf</i>, <i>steht auf</i>, <i>stehen auf</i>."
      },
      {
        tr: "Présent de müssen : ich, du, er/sie/es, wir.",
        why: "<i>Muss</i>, <i>musst</i>, <i>muss</i>, <i>müssen</i> : la 1re et la 3e personne du singulier sont identiques."
      },
      {
        q: "Complète : « Der Film beginnt ___ acht Uhr. » (à huit heures)",
        hint: "avec l'heure précise",
        why: "Avec l'heure on utilise <b>um</b>."
      },
      {
        q: "Complète : « Ich kann nicht kommen, ich ___ arbeiten. » (je dois)",
        hint: "devoir, première personne du singulier",
        why: "<i>Ich muss</i>, sans terminaison."
      },
      {
        q: "Complète : « Morgens ___ ich immer Kaffee. » (je bois)",
        hint: "trinken, première personne du singulier",
        why: "Après <i>morgens</i> le verbe suit tout de suite : <b>trinke</b>."
      },
      {
        q: "Quelle phrase est correcte ?",
        opts: ["Ich aufstehe um sieben.", "Ich stehe um sieben auf.", "Ich auf stehe um sieben."],
        why: "La particule <i>auf</i> va en fin de phrase : <b>Ich stehe um sieben auf.</b>"
      },
      {
        q: "« Es ist halb zehn. » Quelle heure est-il ?",
        opts: ["neuf heures et demie", "dix heures et demie", "dix heures"],
        why: "<i>Halb zehn</i> correspond à neuf heures et demie, une demi-heure avant dix heures."
      },
      {
        tr: "Aujourd'hui, je ne peux pas venir.",
        why: "Le modal est en deuxième position, <i>nicht</i> et l'infinitif en fin de phrase."
      },
      {
        tr: "Je dois me lever à sept heures et demie.",
        why: "Dans cette phrase le modal est <i>muss</i> et l'infinitif <i>aufstehen</i> reste entier, en fin de phrase. Pour « sept heures et demie », on dit <i>halb acht</i>."
      },
      {
        tr: "Le soir, je regarde parfois la télévision.",
        why: "Après <i>Abends</i> le verbe vient tout de suite ; <i>fern</i> ferme la phrase."
      }
    ]
  },
  "unit:a1-u06": {
    title: "En ville",
    grammarNote: "mit, zu, bei, aus, von · datif · wo ? avec in, an, neben · impératif de politesse · es gibt"
  },
  "lesson:a1-u06-l1": {
    theme: "Moyens de transport",
    title: "Moyens et destinations : mit dem Bus, zum Bahnhof",
    objectives: [
      "dire par quel moyen on se déplace avec mit + datif",
      "dire où l'on va avec zu + datif : zum Bahnhof, zur Schule",
      "utiliser l'article au datif : dem, der, dem, den"
    ],
    theory: [
      {
        h: "Mit et zu veulent le datif",
        p: "Les prépositions <strong>mit</strong> (avec, pour le moyen de transport) et <strong>zu</strong> (vers un lieu ou une personne) veulent toujours le <strong>datif</strong>. L'article change à tous les genres : masculin et neutre <strong>dem</strong>, féminin <strong>der</strong>, pluriel <strong>den</strong>. Exemples : <em>Ich fahre mit dem Bus</em> (masculin), <em>mit der Straßenbahn</em> (féminin), <em>mit dem Auto</em> (neutre). Au pluriel, le nom prend en général aussi un <strong>-n</strong> : <em>mit den Bussen</em>, <em>mit den Zügen</em>, <em>mit den Fahrrädern</em>. Il n'en prend pas si le pluriel se termine déjà par <strong>-n</strong> ou par <strong>-s</strong> : <em>mit den Autos</em>, <em>mit den Straßenbahnen</em>."
      },
      {
        h: "zu dem devient zum, zu der devient zur",
        p: "Avec <em>zu</em>, l'article se soude : <strong>zu dem → zum</strong>, <strong>zu der → zur</strong>. On dit <em>Ich gehe zum Bahnhof</em> et <em>Sie geht zur Schule</em>. Pour dire qu'on y va à pied, il y a l'expression figée <strong>zu Fuß</strong> : <em>Wir gehen zu Fuß zur Haltestelle</em>."
      },
      {
        contrast: "En français, le moyen se dit avec <em>en</em> (<em>en bus</em>, <em>en train</em>, <em>en voiture</em>, <em>en métro</em>) ou avec <em>à</em> (<em>à vélo</em>, <em>à pied</em>), et la destination avec <em>à</em> (<em>à la gare</em>, <em>à l'école</em>). Dans les exemples de cette leçon, le moyen se dit avec <strong>mit</strong> (<em>mit dem Bus</em>, <em>mit dem Zug</em>) et la destination avec <strong>zu</strong> (d'autres destinations demandent <em>nach</em> ou <em>in</em>, tu le verras). <em>Im Bus fahren</em> existe, mais cela souligne qu'on est à bord. Attention aussi aux genres : <em>la gare</em> est féminin, mais <em>der Bahnhof</em> est masculin ; <em>le tram</em> est masculin, mais <em>die Straßenbahn</em> est féminin ; <em>le métro</em> est masculin, mais <em>die U-Bahn</em> est féminin ; <em>la voiture</em> est féminin, mais <em>das Auto</em> est neutre ; <em>le vélo</em> est masculin, mais <em>das Fahrrad</em> est neutre."
      },
      {
        trap: "Pour « aller en bus », la formule habituelle est <em>mit dem Bus fahren</em> ; <em>im Bus fahren</em> met l'accent sur le fait d'être à bord. N'emploie pas la forme du nominatif : « mit der Bus » et « mit die Straßenbahn » sont faux. Après <em>mit</em> et <em>zu</em>, l'article est toujours au datif : <em>mit dem Bus</em>, <em>mit der Straßenbahn</em>, <em>zum Bahnhof</em>, <em>zur Schule</em>."
      },
      {
        tip: "Apprends chaque moyen de transport avec sa phrase entière : <em>mit dem Bus</em>, <em>mit der U-Bahn</em>, <em>mit dem Zug</em>, <em>mit dem Fahrrad</em>. Ainsi l'article juste arrive avec le nom."
      }
    ],
    grammar: {
      title: "mit et zu avec le datif",
      note: "Après <b>mit</b> et <b>zu</b>, l'article est au datif : <b>dem</b> (m. et n.), <b>der</b> (f.), <b>den</b> + -n (pluriel). <b>zu dem → zum</b>, <b>zu der → zur</b>.",
      table: {
        head: ["genre", "mit + datif", "zu + datif"],
        rows: [
          ["masculin", "mit dem Bus", "zum Bahnhof"],
          ["féminin", "mit der Straßenbahn", "zur Schule"],
          ["neutre", "mit dem Auto", "zum Kino"],
          ["pluriel", "mit den Bussen", "zu den Haltestellen"]
        ]
      },
      examples: [
        { tr: "Je vais en bus.", note: "mit dem Bus : masculin" },
        { tr: "Tu vas en tram.", note: "mit der Straßenbahn : féminin ; fährst, avec le changement de voyelle" },
        { tr: "Nous allons en voiture.", note: "mit dem Auto : neutre" },
        { tr: "Je vais à la gare.", note: "zum = zu dem" },
        { tr: "Elle va à l'école.", note: "zur = zu der" },
        { tr: "Nous allons à pied à l'arrêt.", note: "zu Fuß : expression figée" }
      ]
    },
    vocab: [
      "avec, au moyen de",
      "à, vers (un lieu ou une personne)",
      "à pied",
      "le bus",
      "le tram",
      "le métro",
      "le train",
      "la voiture",
      "le vélo",
      "la gare",
      "l'arrêt",
      "l'école"
    ],
    exercises: [
      {
        q: "Quelle phrase est correcte ?",
        opts: ["Ich fahre mit der Bus.", "Ich fahre mit dem Bus.", "Ich fahre mit den Bus."],
        why: "<i>Der Bus</i> est masculin : après <i>mit</i>, l'article est <b>dem</b>."
      },
      {
        q: "Complète : « Wir fahren mit ___ Auto. »",
        hint: "das Auto, article défini au datif",
        why: "<i>Das Auto</i> est neutre : après <i>mit</i>, on dit <b>dem</b>."
      },
      {
        q: "Complète : « Ich fahre mit ___ U-Bahn. »",
        hint: "die U-Bahn, article défini au datif",
        why: "<i>Die U-Bahn</i> est féminin : au datif, <b>der</b>."
      },
      {
        q: "Complète : « Ich gehe ___ Bahnhof. »",
        hint: "zu + dem, sous la forme contractée",
        why: "<i>Zu dem</i> se soude en <b>zum</b>. <i>Zu dem Bahnhof</i> est aussi correct, mais on dit presque toujours <i>zum</i>."
      },
      {
        q: "Choisis l'article correct pour chaque nom.",
        why: "<i>Bahnhof</i> et <i>Zug</i> sont masculins, <i>Haltestelle</i> et <i>Schule</i> féminins, <i>Auto</i> et <i>Fahrrad</i> neutres. Attention : <i>la gare</i> est féminin en français, mais <i>der Bahnhof</i> est masculin.",
        items: ["gare", "arrêt", "voiture", "train", "école", "vélo"]
      },
      {
        tr: "Nous allons en train.",
        why: "Les deux positions sont correctes : <i>Wir fahren mit dem Zug</i> et, avec l'inversion, <i>Mit dem Zug fahren wir</i>. Le verbe reste en deuxième position."
      },
      {
        q: "Complète les deux mots manquants.",
        tr: "Il va à l'école en bus.",
        why: "Le moyen se dit avec <i>mit</i> + datif (<i>dem Bus</i>), la destination avec <i>zu</i> + datif (<i>zu der → zur Schule</i>)."
      },
      {
        tr: "Je vais à la gare en bus.",
        why: "Les autres positions sont correctes aussi : <i>Ich fahre zum Bahnhof mit dem Bus</i>, <i>Mit dem Bus fahre ich zum Bahnhof</i> et <i>Zum Bahnhof fahre ich mit dem Bus</i>. Avec le moyen de transport on emploie <i>fahren</i>, pas <i>gehen</i>."
      },
      {
        tr: "Je vais à l'école en bus.",
        why: "<i>Schule</i> : <b>sch</b> se lit comme le « ch » de « chat » (/ʃ/) et le <b>u</b> est long, comme dans « tour » mais plus tenu. Dans <i>fahre</i>, le <b>h</b> ne se prononce pas et allonge le <b>a</b>."
      },
      {
        tr: "Nous allons à la gare en tram.",
        why: "<i>Straßenbahn</i> : le <b>ß</b> est un « s » sourd, comme dans « poisson », et le <b>str</b> initial se lit « chtr ». Dans <i>Bahnhof</i>, le <b>h</b> après le <b>a</b> allonge la voyelle ; le <b>h</b> de <i>hof</i> est légèrement soufflé."
      }
    ]
  },
  "lesson:a1-u06-l2": {
    theme: "Se déplacer et provenance",
    title: "gehen, fahren, kommen : aus, von, bei",
    objectives: [
      "distinguer gehen (à pied) de fahren (avec un moyen de transport)",
      "dire d'où l'on vient avec aus et von, et où l'on se trouve avec bei",
      "dire vers quelle ville on va avec nach"
    ],
    theory: [
      {
        h: "Gehen et fahren, kommen",
        p: "<strong>Gehen</strong> indique en général qu'on se déplace à pied, <strong>fahren</strong> qu'on se déplace avec un moyen de transport (bus, train, vélo, voiture). Avec <em>fahren</em>, la voyelle change à la 2e et à la 3e personne du singulier : <em>ich fahre</em>, <em>du f<strong>ä</strong>hrst</em>, <em>er f<strong>ä</strong>hrt</em>. <em>Gehen</em> et <em>kommen</em> sont réguliers : <em>ich gehe</em>, <em>du gehst</em>, <em>wir kommen</em>. Les verbes séparables <em>einsteigen</em> et <em>aussteigen</em> envoient leur préfixe à la fin : <em>Ich steige am Bahnhof aus.</em>"
      },
      {
        h: "Aus, von et bei : d'où ?",
        p: "<strong>Aus</strong> indique la provenance d'un lieu ou d'un pays (<em>Ich komme aus Italien</em>, <em>Sie kommt aus dem Supermarkt</em>). <strong>Von</strong> indique le point de départ (<em>Er kommt vom Bahnhof</em>, <em>vom Arzt</em>). <strong>Bei</strong> indique où l'on se trouve, chez une personne ou à un endroit (<em>Anna ist beim Arzt</em>). <em>Von dem → vom</em> et <em>bei dem → beim</em> se soudent eux aussi."
      },
      {
        h: "Nach pour les villes, in pour l'endroit où l'on vit",
        p: "Pour dire où l'on va, avec un nom de ville ou de pays <strong>sans article</strong>, on emploie <strong>nach</strong> : <em>Ich fahre nach Berlin</em>, <em>Wir fahren nach Italien</em>. Pour dire où l'on habite ou où l'on est, on emploie en revanche <strong>in</strong> : <em>Ich wohne in Berlin</em>. Les pays avec article, comme <em>die Schweiz</em>, viendront plus tard."
      },
      {
        contrast: "Le français <em>de</em> se répartit en allemand : <em>aus</em> (<em>je viens de Rome</em> : <em>Ich komme aus Rom</em>), <em>von</em> (<em>je viens de la gare</em> : <em>Ich komme vom Bahnhof</em>). Le français <em>chez</em> aussi : <em>bei</em> pour être chez quelqu'un (<em>je suis chez le médecin</em> : <em>Ich bin beim Arzt</em>), <em>zu</em> pour aller chez lui (<em>je vais chez le médecin</em> : <em>Ich gehe zum Arzt</em>). Pour <em>depuis</em>, l'allemand a <em>seit</em> (<em>j'habite ici depuis un an</em> : <em>Ich wohne seit einem Jahr hier</em>). Et le verbe <em>aller</em> couvre à la fois <em>gehen</em> et <em>fahren</em> : en allemand, le moyen compte. Pour les villes, le français dit <em>à</em> (<em>à Berlin</em>), et l'allemand <em>nach</em> pour y aller mais <em>in</em> pour y être."
      },
      {
        trap: "Pour « je viens d'Italie », on ne dit pas « Ich komme von Italien » : pour la provenance d'un pays ou d'une ville, on emploie <strong>aus</strong>. Et « Ich gehe mit dem Zug » est faux : avec un moyen de transport on emploie <em>fahren</em>, donc <em>Ich fahre mit dem Zug</em>."
      }
    ],
    grammar: {
      title: "aus, von, bei, zu : provenance et lieu",
      note: "<b>aus</b> = provenance d'un lieu ou d'un pays, <b>von</b> = point de départ, <b>bei</b> = chez, <b>zu</b> = vers. Toutes veulent le datif.",
      table: {
        head: ["préposition", "sens", "exemple"],
        rows: [
          ["aus", "de (provenance)", "Ich komme aus Italien."],
          ["von", "de (point de départ)", "Er kommt vom Bahnhof."],
          ["bei", "chez, auprès de", "Anna ist beim Arzt."],
          ["zu", "vers", "Wir gehen zum Arzt."]
        ]
      },
      examples: [
        { tr: "Je viens d'Italie.", note: "aus + pays sans article" },
        { tr: "Je viens du supermarché.", note: "aus dem : du supermarché, de l'intérieur" },
        { tr: "Il vient de la gare.", note: "vom = von dem" },
        { tr: "Nous allons chez le médecin.", note: "zum = zu dem" },
        { tr: "Tu vas au parc.", note: "fährst : changement de voyelle" },
        { tr: "Anna est chez le médecin.", note: "beim = bei dem" }
      ]
    },
    vocab: [
      "aller (à pied)",
      "aller (avec un moyen de transport), conduire",
      "venir",
      "de (provenance)",
      "de (point de départ)",
      "chez, auprès de (une personne)",
      "monter (dans un véhicule)",
      "descendre (d'un véhicule)",
      "le médecin",
      "le parc",
      "le supermarché",
      "la ville"
    ],
    exercises: [
      {
        tr: "Présent de gehen : ich, er/sie/es, wir.",
        why: "<i>Gehen</i> est régulier : <i>gehe</i>, <i>geht</i>, <i>gehen</i>."
      },
      {
        tr: "Présent de fahren : ich, du, er/sie/es, wir.",
        why: "À la 2e et à la 3e personne du singulier, le <b>a</b> devient <b>ä</b> : <i>fahre</i>, <i>fährst</i>, <i>fährt</i>, <i>fahren</i>."
      },
      {
        q: "Complète : « Ich ___ aus Italien. »",
        hint: "kommen, première personne du singulier",
        why: "<i>Ich komme</i> : la terminaison de la 1re personne est <b>-e</b>."
      },
      {
        q: "Complète : « Er ___ mit dem Zug. »",
        hint: "fahren, troisième personne du singulier",
        why: "Avec <i>er</i>, le verbe change de voyelle : <b>fährt</b>."
      },
      {
        q: "Complète : « Wir kommen ___ der Stadt. »",
        hint: "de l'intérieur d'un lieu, provenance",
        why: "Pour la provenance d'un lieu, on emploie <b>aus</b> : <i>aus der Stadt</i>."
      },
      {
        q: "Comment dis-tu « Je viens de chez le médecin » ?",
        opts: ["Ich komme aus dem Arzt.", "Ich komme vom Arzt.", "Ich komme zum Arzt."],
        why: "Pour le point de départ, on emploie <b>von</b> (<i>von dem → vom</i>). <i>Aus</i> vaut pour un lieu, pas pour une personne, et <i>zum</i> indique la direction vers, pas la provenance."
      },
      {
        q: "Quelles phrases sont correctes ?",
        opts: [
          "Ich fahre mit dem Zug.",
          "Ich gehe mit dem Zug.",
          "Wir gehen zu Fuß zum Park.",
          "Du kommst aus Italien.",
          "Er fahrt zum Bahnhof."
        ],
        why: "La phrase 2 est fausse parce qu'avec un moyen de transport on emploie <i>fahren</i> ; la phrase 5 a la mauvaise forme de <i>fahren</i> : <i>fährt</i>."
      },
      {
        tr: "Il vient de la gare.",
        why: "L'inversion <i>Vom Bahnhof kommt er</i> est correcte aussi. Le verbe reste en deuxième position."
      },
      {
        tr: "Je viens d'Italie et je vais à Berlin en train.",
        why: "<i>Italien</i> : l'accent tombe sur la deuxième syllabe et le <b>a</b> est long. <i>Berlin</i> se dit avec un <b>r</b> uvulaire, comme en français, ou apical : les deux prononciations sont standard. <i>Zug</i> commence par un <b>z</b> « ts »."
      },
      {
        tr: "Nous allons au parc à pied.",
        why: "<i>Fuß</i> : le <b>ß</b> est un « s » sourd et le <b>u</b> est long. Dans <i>Park</i>, le <b>k</b> final est net."
      }
    ]
  },
  "lesson:a1-u06-l3": {
    theme: "Demander son chemin",
    title: "Wo ist der Bahnhof? Gehen Sie geradeaus",
    objectives: [
      "demander où se trouve un lieu avec Entschuldigung, wo ist ... ?",
      "donner des indications avec l'impératif de politesse (Gehen Sie ..., Biegen Sie ... ab)",
      "dire où se trouve quelque chose avec neben, hinter, vor + datif"
    ],
    theory: [
      {
        h: "L'impératif de politesse : infinitif + Sie",
        p: "Avec <strong>Sie</strong>, l'impératif a la forme de l'<strong>infinitif + Sie</strong>, avec le verbe en <strong>première position</strong> : <em>Gehen Sie geradeaus!</em>, <em>Nehmen Sie die erste Straße rechts!</em> Les verbes séparables envoient leur préfixe à la fin : <em>Biegen Sie links <strong>ab</strong>.</em> <em>Sein</em> fait exception : <strong>Seien Sie</strong> (<em>Seien Sie bitte pünktlich!</em>)."
      },
      {
        h: "Où est ? wo ? avec le datif",
        p: "Pour demander où se trouve un lieu : <em>Entschuldigung, wo ist der Bahnhof?</em> Pour répondre, il faut les prépositions de lieu. Avec <strong>wo ?</strong>, in, an, auf, vor, hinter, neben veulent le <strong>datif</strong> : <em>Der Bahnhof ist neben dem Rathaus</em>, <em>Die Apotheke ist hinter der Kreuzung</em>, <em>Der Bus hält vor dem Rathaus</em>, <em>Wir sind am Bahnhof</em> (<em>an dem → am</em>) et <em>Das Café ist in der Stadt</em>."
      },
      {
        contrast: "En français aussi, la forme de politesse est le <em>vous</em> de l'impératif (<em>Allez tout droit</em>, <em>Tournez à gauche</em>, <em>Prenez la première à droite</em>), mais le pronom disparaît. En allemand, il reste et se place après le verbe : <em>Gehen Sie geradeaus</em>. <em>Excusez-moi</em> se dit <em>Entschuldigung</em> (ou <em>Entschuldigen Sie</em>), <em>tout droit</em> se dit <em>geradeaus</em>, <em>à droite</em> <em>rechts</em> et <em>à gauche</em> <em>links</em>, sans préposition. Fais attention au genre aussi : <em>la mairie</em> est féminin, mais <em>das Rathaus</em> est neutre ; <em>la pharmacie</em> et <em>die Apotheke</em> sont tous deux féminins ; <em>le carrefour</em> est masculin, mais <em>die Kreuzung</em> est féminin."
      },
      {
        trap: "L'impératif avec <em>Sie</em> a la même forme qu'une question oui/non : <em>Gehen Sie geradeaus!</em> ou <em>Gehen Sie geradeaus?</em> Le contexte, l'intonation et la ponctuation les distinguent. Ce n'est pas <em>Sie gehen geradeaus</em> (sujet avant le verbe), qui est une phrase déclarative. Et après <em>neben</em>, <em>hinter</em> et <em>vor</em> avec <em>wo ?</em>, on n'emploie pas l'accusatif : « neben den Bahnhof » est faux, on dit <em>neben dem Bahnhof</em>."
      },
      {
        tip: "Pour retenir les trois phrases utiles dans la rue : <em>Entschuldigung, wo ist ...?</em>, <em>Gehen Sie geradeaus</em>, <em>Biegen Sie links / rechts ab</em>. Avec elles, tu t'orientes dans n'importe quelle ville de langue allemande."
      }
    ],
    grammar: {
      title: "Impératif de politesse et wo ? avec le datif",
      note: "<b>Impératif avec Sie :</b> infinitif + <b>Sie</b>, verbe en première position. <b>Wo ?</b> avec in, an, vor, hinter, neben : datif.",
      table: {
        head: ["infinitif", "impératif", "sens"],
        rows: [
          ["gehen", "Gehen Sie geradeaus.", "allez tout droit"],
          ["abbiegen", "Biegen Sie links ab.", "tournez à gauche"],
          ["nehmen", "Nehmen Sie die erste Straße rechts.", "prenez la première rue à droite"],
          ["sein", "Seien Sie bitte pünktlich.", "soyez à l'heure"]
        ]
      },
      examples: [
        { tr: "Allez tout droit.", note: "Gehen Sie : verbe, puis Sie" },
        { tr: "Tournez à gauche.", note: "abbiegen : ab à la fin" },
        { tr: "Prenez la première rue à droite.", note: "nehmen : la première rue, die erste Straße" },
        { tr: "Excusez-moi, où est la gare ?" },
        { tr: "La gare est à côté de la mairie.", note: "neben dem : datif neutre" },
        { tr: "La pharmacie est après le carrefour.", note: "hinter der : datif féminin" }
      ]
    },
    vocab: [
      "tout droit",
      "à gauche",
      "à droite",
      "tourner",
      "excusez-moi, pardon",
      "à côté de",
      "derrière",
      "devant",
      "la rue",
      "le carrefour",
      "la mairie",
      "la pharmacie"
    ],
    exercises: [
      {
        q: "Comment invites-tu quelqu'un à tourner à gauche avec la forme de politesse ?",
        opts: ["Sie biegen links ab.", "Biegen Sie links ab.", "Biegen links Sie ab."],
        why: "Verbe en première position, puis <i>Sie</i>, et le préfixe <b>ab</b> à la fin : <b>Biegen Sie links ab.</b> La première option est une phrase déclarative."
      },
      {
        q: "Comment demandes-tu où est la gare ?",
        opts: ["Wo ist der Bahnhof?", "Wo der Bahnhof ist?", "Wo ist den Bahnhof?"],
        why: "Dans une question avec <i>wo</i>, le verbe est en deuxième position : <b>Wo ist der Bahnhof?</b> Avec <i>sein</i>, le nom reste au nominatif."
      },
      {
        q: "Complète : « ___ Sie geradeaus. » (Allez)",
        hint: "gehen, impératif de politesse, avec la majuscule initiale",
        why: "L'impératif de politesse commence par l'infinitif : <b>Gehen</b> Sie geradeaus."
      },
      {
        q: "Associe chaque mot à sa signification.",
        pairs: ["tout droit", "à gauche", "à droite", "derrière"]
      },
      {
        q: "Complète les deux mots manquants.",
        tr: "La pharmacie est derrière la mairie et la gare est à côté de la pharmacie.",
        why: "<i>Hinter dem Rathaus</i> (datif neutre) et <i>neben der Apotheke</i> (datif féminin) : avec <i>wo ?</i>, ces prépositions veulent le datif."
      },
      {
        tr: "Allez tout droit et tournez à gauche.",
        why: "Chacun des deux impératifs a son propre <i>Sie</i>. Le préfixe <i>ab</i> de <i>abbiegen</i> ferme la phrase."
      },
      {
        q: "Quelqu’un te demande son chemin : réponds à ses questions.",
        setting: "En centre-ville, tu aides quelqu’un à trouver la gare et la pharmacie.",
        lines: [
          { tr: "Excusez-moi, où est la gare ?" },
          { tr: "Explique le chemin : tout droit, puis à gauche.", answerTr: "Allez tout droit, puis à gauche." },
          { tr: "Merci ! Et où est la pharmacie ?" },
          { tr: "Réponds que la pharmacie est à côté de la mairie.", answerTr: "Elle est à côté de la mairie." }
        ]
      },
      {
        tr: "Excusez-moi, où est la pharmacie ?",
        why: "<i>Entschuldigung</i> et <i>Entschuldigen Sie</i> (plus formel) sont corrects tous les deux. La question a le verbe en deuxième position : <i>wo ist</i>."
      },
      {
        tr: "Allez tout droit et tournez à droite.",
        why: "Dans <i>geradeaus</i>, le <b>g</b> est dur, comme dans « gare », et le <b>au</b> est une diphtongue /aʊ̯/ : on passe du <b>a</b> à un <b>u</b> bref dans la même syllabe, un peu comme « aou » dit d'un seul souffle. Dans <i>biegen</i>, le <b>ie</b> est un « i » long."
      },
      {
        tr: "Excusez-moi, où est la pharmacie ?",
        why: "<i>Entschuldigung</i> : <b>sch</b> se lit comme le « ch » de « chat » (/ʃ/). Dans <i>Apotheke</i>, le <b>th</b> se lit comme un simple « t »."
      }
    ]
  },
  "lesson:a1-u06-l4": {
    theme: "Le quartier",
    title: "Es gibt, es gibt keinen",
    objectives: [
      "dire ce qu'il y a en ville avec es gibt + accusatif",
      "dire qu'il n'y a pas quelque chose avec es gibt keinen / keine / kein",
      "demander Gibt es hier ... ?"
    ],
    theory: [
      {
        h: "Es gibt : « il y a »",
        p: "Pour dire que quelque chose existe, on emploie <strong>es gibt</strong>. La forme est <strong>toujours la même</strong>, au singulier comme au pluriel : <em>Es gibt einen Park</em>, <em>Es gibt zwei Kinos</em>. Après <em>es gibt</em>, le nom se met à l'<strong>accusatif</strong>, donc seul le masculin change : <em>einen Park</em> (m.), <em>eine Bäckerei</em> (f.), <em>ein Café</em> (n.). Pour demander : <em>Gibt es hier ein Hotel?</em>"
      },
      {
        h: "Dire que quelque chose n'existe pas",
        p: "Pour nier, on emploie <strong>kein</strong>, qui suit le même schéma que <em>ein</em> : <em>Es gibt keinen Supermarkt</em> (m.), <em>keine Bank</em> (f.), <em>kein Museum</em> (n.). Dans les exemples traités ici, avec <em>es gibt</em> la négation est <em>kein</em>, pas <em>nicht</em> (<em>nicht</em> apparaît dans d'autres emplois, comme <em>Das gibt es nicht</em>)."
      },
      {
        contrast: "Bonne nouvelle : <em>il y a</em> est lui aussi invariable en français (<em>il y a un parc</em>, <em>il y a deux cinémas</em>), comme <em>es gibt</em>. La différence, c'est l'article : après <em>es gibt</em>, le masculin prend l'accusatif (<em>einen Park</em>). Et <em>il n'y a pas de supermarché</em> se rend par <em>kein</em>, qui porte la marque du genre : <em>keinen Supermarkt</em>, <em>keine Bank</em>, <em>kein Museum</em>. Attention au genre : <em>la boulangerie</em> est féminin, <em>die Bäckerei</em> aussi ; <em>le café</em> est masculin en français, mais <em>das Café</em> est neutre ; <em>le cinéma</em> est <em>das Kino</em>, neutre ; <em>le musée</em> est <em>das Museum</em>, neutre ; <em>l'église</em> est <em>die Kirche</em>."
      },
      {
        trap: "<em>Es gibt</em> introduit en général quelque chose de nouveau : <em>Es gibt ein Café neben dem Rathaus</em>. Pour dire où se trouve une chose déjà connue, on emploie plutôt <em>sein</em> : <em>Wo ist das Café? Es ist neben dem Rathaus.</em> Ne dis pas « Es gibt ein Bäckerei » : <em>Bäckerei</em> est féminin, donc <em>eine Bäckerei</em>. Et ne dis pas « Es gibt ein Park » : le masculin à l'accusatif demande <em>einen</em>."
      },
      {
        tip: "Pour découvrir ce qu'il y a dans un nouveau quartier, demande : <em>Gibt es hier ein Café / einen Supermarkt / eine Bank in der Nähe?</em> Retiens <em>-en</em> pour le masculin seulement."
      }
    ],
    grammar: {
      title: "es gibt avec l'accusatif",
      note: "<b>Es gibt</b> + accusatif : <b>einen</b> (m.), <b>eine</b> (f.), <b>ein</b> (n.). La négation est <b>keinen</b>, <b>keine</b>, <b>kein</b>. La forme <i>es gibt</i> ne change pas au pluriel.",
      table: {
        head: ["genre", "affirmatif", "négatif"],
        rows: [
          ["masculin", "Es gibt einen Park.", "Es gibt keinen Supermarkt."],
          ["féminin", "Es gibt eine Bäckerei.", "Es gibt keine Bank."],
          ["neutre", "Es gibt ein Café.", "Es gibt kein Museum."]
        ]
      },
      examples: [
        { tr: "Il y a un parc tout près.", note: "einen : masculin à l'accusatif" },
        { tr: "Il y a une boulangerie ici.", note: "eine : féminin" },
        { tr: "Il y a un café à côté de la mairie.", note: "ein : neutre" },
        { tr: "Il y a un hôtel ici ?", note: "question : verbe en première position" },
        { tr: "Ici, il n'y a pas de supermarché.", note: "keinen : négation du masculin" },
        { tr: "Près d'ici, il n'y a pas de banque.", note: "keine : négation du féminin" }
      ]
    },
    vocab: [
      "il y a",
      "ici",
      "à proximité, près d'ici",
      "le café",
      "le cinéma",
      "la boulangerie",
      "le restaurant",
      "la banque",
      "le musée",
      "l'hôtel",
      "la bibliothèque",
      "l'église"
    ],
    exercises: [
      {
        q: "Quelle phrase est correcte ?",
        opts: ["Es gibt ein Park hier.", "Es gibt einen Park hier.", "Es gibt eine Park hier."],
        why: "<i>Der Park</i> est masculin et après <i>es gibt</i> il faut l'accusatif : <b>einen Park</b>."
      },
      {
        q: "Complète : « Es gibt ___ Supermarkt in der Nähe. »",
        hint: "der Supermarkt, article indéfini à l'accusatif",
        why: "<i>Der Supermarkt</i> est masculin, à l'accusatif : <b>einen</b>."
      },
      {
        q: "Complète : « Es gibt ___ Bank hier. » (aucune)",
        hint: "die Bank, négation",
        why: "<i>Die Bank</i> est féminin : la négation est <b>keine</b>."
      },
      {
        q: "Complète : « ___ es hier ein Café ? »",
        hint: "question : y a-t-il ... ?",
        why: "Dans une question oui/non, le verbe est en première position : <b>Gibt</b> es hier ein Café?"
      },
      {
        q: "Associe chaque mot à sa signification.",
        pairs: ["le café", "la boulangerie", "le cinéma", "l'église"]
      },
      {
        tr: "Ici, il n'y a pas de supermarché.",
        why: "<i>Es gibt keinen Supermarkt hier</i> est correct aussi et, avec l'inversion, <i>Hier gibt es keinen Supermarkt</i>. Le verbe <i>gibt</i> reste en deuxième position."
      },
      {
        q: "Complète les deux mots manquants.",
        tr: "Il y a une boulangerie et un parc ici.",
        why: "<i>Bäckerei</i> est féminin (<b>eine</b>), <i>Park</i> masculin (<b>einen</b>) : seul le masculin change à l'accusatif."
      },
      {
        q: "Traduis : « En ville, il y a un cinéma, mais pas de musée. »",
        why: "Après <i>es gibt</i> : <i>ein Kino</i> est neutre (<i>ein</i>), la négation de <i>Museum</i> (neutre) est <i>kein</i>. Les autres positions avec la même structure sont correctes aussi."
      },
      {
        tr: "Il y a une boulangerie et un parc tout près d'ici.",
        why: "<i>Bäckerei</i> : le <b>ä</b> se lit comme un « è » ouvert et le <b>ck</b> comme un « k ». Dans <i>Nähe</i>, le <b>h</b> ne se prononce pas et allonge la voyelle ; le <b>ä</b> est long."
      },
      {
        tr: "Il y a un hôtel ici ?",
        why: "<i>Hotel</i> a l'accent sur la deuxième syllabe : /hoˈtɛl/. Le <b>h</b> initial est légèrement soufflé, contrairement à celui de « hôtel ». Dans <i>gibt</i>, le <b>g</b> est dur."
      }
    ]
  },
  "lesson:a1-u06-test": {
    theme: "Contrôle",
    title: "Contrôle de l'unité 6",
    objectives: ["vérifier moyens de transport, datif, indications, wo ? et es gibt"],
    theory: [
      {
        p: "Dix questions sur toute l'unité. On réussit avec 70 %. Ne relis pas les leçons pendant que tu réponds : si tu ne te souviens pas de quelque chose, il vaut mieux retourner réviser."
      }
    ],
    exercises: [
      {
        tr: "Présent de fahren : ich, du, er/sie/es, wir.",
        why: "<i>Fahre</i>, <i>fährst</i>, <i>fährt</i>, <i>fahren</i> : le <b>a</b> devient <b>ä</b> à la 2e et à la 3e personne du singulier."
      },
      {
        q: "Complète : « Ich fahre mit ___ Bus. »",
        hint: "der Bus, article défini au datif",
        why: "<i>Der Bus</i> est masculin : après <i>mit</i>, on dit <b>dem</b>."
      },
      {
        q: "Complète : « Wir gehen ___ Schule. »",
        hint: "zu + der, sous la forme contractée",
        why: "<i>Zu der</i> se soude en <b>zur</b>."
      },
      {
        q: "Complète : « Ich komme ___ Italien. »",
        hint: "provenance d'un pays",
        why: "Pour la provenance d'un pays, on emploie <b>aus</b>."
      },
      {
        q: "Complète : « Die Apotheke ist ___ dem Rathaus. » (à côté)",
        hint: "à côté de",
        why: "<b>Neben</b> + datif : <i>neben dem Rathaus</i>."
      },
      {
        q: "Complète : « ___ Sie die erste Straße links. » (Prenez)",
        hint: "nehmen, impératif de politesse, avec la majuscule initiale",
        why: "L'impératif de politesse commence par l'infinitif : <b>Nehmen</b> Sie die erste Straße links."
      },
      {
        q: "Choisis l'article correct pour chaque nom.",
        why: "<i>Rathaus</i> est neutre, <i>Kreuzung</i> et <i>Apotheke</i> sont féminins, <i>Bahnhof</i> est masculin.",
        items: ["mairie", "carrefour", "gare", "pharmacie"]
      },
      {
        q: "Comment dis-tu « Il n'y a pas de supermarché » ?",
        opts: ["Es gibt kein Supermarkt.", "Es gibt keinen Supermarkt.", "Es gibt nicht Supermarkt."],
        why: "<i>Der Supermarkt</i> est masculin à l'accusatif : <b>keinen</b>."
      },
      {
        tr: "Excusez-moi, où est la gare ?",
        why: "<i>Entschuldigung</i> : <b>sch</b> se lit comme le « ch » de « chat » (/ʃ/) ; dans <i>Bahnhof</i>, le <b>h</b> après le <b>a</b> allonge la voyelle."
      },
      {
        tr: "Allez tout droit, puis à gauche.",
        why: "<i>Geradeaus</i> : le <b>g</b> est dur et le <b>au</b> est une diphtongue /aʊ̯/ : on passe du <b>a</b> à un <b>u</b> bref dans la même syllabe. Dans <i>links</i>, le <b>i</b> est bref."
      }
    ]
  }
});
