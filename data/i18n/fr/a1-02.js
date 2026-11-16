/* ============================================================
   Textes dans la langue de l'élève (fr) pour data/core/a1-02.js, unité a1-u04.
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
  }
});
