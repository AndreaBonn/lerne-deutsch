/* ============================================================
   Textes dans la langue de l'élève (fr) pour data/core/a1-03.js, unité a1-u08.
   Les clés renvoient aux id de la couche neutre ; les tableaux se
   joignent par index, leur longueur doit donc correspondre à core.
   Vérifié par scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("fr", {
  "unit:a1-u08": {
    title: "Famille et amis",
    grammarNote: "possessifs · adjectif attribut · comparatif avec als et so ... wie"
  },
  "lesson:a1-u08-l1": {
    theme: "La famille",
    title: "Ma mère, mon chef",
    objectives: [
      "dire à qui appartient une personne avec mein, dein, sein, ihr, unser",
      "choisir la bonne forme : mein, meine, meinen",
      "exprimer le possesseur avec un prénom : Annas Bruder"
    ],
    theory: [
      {
        h: "Le possessif suit le possesseur et prend les terminaisons de ein",
        p: "Le possessif se choisit d'après <b>celui qui possède</b> : <em>mein</em> (je), <em>dein</em> (tu), <em>sein</em> (il), <em>ihr</em> (elle), <em>unser</em> (nous). Il prend ensuite les terminaisons de <em>ein</em>, d'après le <b>nom possédé</b> : <em>mein Vater</em>, <em>meine Mutter</em>, <em>mein Kind</em>, <em>meine Eltern</em>. Au masculin accusatif, il devient <em>meinen</em> : <em>Ich mag meinen Bruder</em>."
      },
      {
        contrast: "En français, <em>son / sa / ses</em> s'accorde avec la chose possédée, jamais avec le possesseur : <em>sa mère</em> peut être la mère de lui ou la mère d'elle. En allemand, le possesseur s'entend : <em>seine Mutter</em> est la mère de lui, <em>ihre Mutter</em> celle d'elle. Comme en français, il n'y a pas d'article devant le possessif : <em>mon père</em> se dit <em>mein Vater</em> et <em>mon chef</em> se dit <em>mein Chef</em>, pas « der mein Chef ». La base dépend du possesseur (<em>sein</em>, <em>ihr</em>...) ; la terminaison dépend du genre, du nombre et du cas du nom possédé : <em>meine</em> vaut pour « ma » et pour « mes »."
      },
      {
        trap: "Ne confonds pas <em>sein</em> (de lui) et <em>ihr</em> (d'elle) sous prétexte que la chose possédée est la même, comme tu le ferais avec <em>sa</em> en français. Et n'oublie pas que la forme dépend du genre allemand, du nombre et du cas, pas du français : <em>meine Freundin</em> (mon amie), <em>mein Auto</em> (ma voiture), <em>meine Eltern</em> (mes parents)."
      },
      {
        h: "Le prénom : Annas Bruder",
        p: "Pour dire « le frère d'Anna », il suffit d'ajouter <b>-s</b> au prénom, sans apostrophe, et de le placer avant la personne : <em>Annas Bruder</em>, <em>Peters Schwester</em>. Comme pour le possessif, il n'y a pas d'article, et pas de « de ». Si le prénom se termine par <em>-s</em>, <em>-x</em> ou <em>-z</em>, on met seulement une apostrophe : <em>Hans' Mutter</em>."
      },
      {
        tip: "Apprends toujours les membres de la famille avec le possessif : <em>meine Mutter</em>, <em>mein Vater</em>, <em>meine Eltern</em>. Ainsi, le genre et le pluriel entrent en mémoire avec le nom."
      }
    ],
    grammar: {
      title: "Mein au nominatif et à l'accusatif",
      note: "Terminaisons de <b>ein</b> : seul le masculin change à l'accusatif (<em>meinen</em>). Le même schéma vaut pour <em>dein, sein, ihr, unser</em>.",
      table: {
        head: ["genre", "nominatif", "accusatif", "exemple"],
        rows: [
          ["masculin", "mein", "meinen", "Ich mag meinen Bruder."],
          ["féminin", "meine", "meine", "Ich mag meine Schwester."],
          ["neutre", "mein", "mein", "Ich mag mein Auto."],
          ["pluriel", "meine", "meine", "Ich mag meine Eltern."]
        ]
      },
      examples: [
        { tr: "Ma mère s'appelle Anna." },
        { tr: "Mon chef est sympa." },
        { tr: "Voici notre famille.", note: "Familie est féminin : unsere" },
        { tr: "J'aime bien mon frère.", note: "Bruder est masculin à l'accusatif : meinen" },
        { tr: "Où habite ta sœur ?" },
        { tr: "Le frère d'Anna s'appelle Paul.", note: "prénom + -s, sans article et sans apostrophe" }
      ]
    },
    vocab: [
      "la famille",
      "la mère",
      "le père",
      "les parents (uniquement au pluriel en allemand)",
      "le frère",
      "la sœur",
      "la grand-mère",
      "le grand-père",
      "l'oncle",
      "la tante",
      "le chef",
      "l'amie, la petite amie"
    ],
    exercises: [
      {
        q: "Comment dit-on « ma mère » ?",
        opts: ["mein Mutter", "meine Mutter", "meinen Mutter"],
        why: "<i>Mutter</i> est féminin, donc <b>meine</b>, comme <i>eine</i>."
      },
      {
        q: "Complète : « Das ist ___ Schwester. » (C'est ma sœur.)",
        hint: "mein + terminaison du féminin",
        why: "<b>Meine Schwester</b> : féminin, nominatif."
      },
      {
        q: "Complète : « Ich mag ___ Chef. » (J'aime bien mon chef.)",
        hint: "mein + accusatif masculin",
        why: "<b>Meinen Chef</b> : après <i>mögen</i> on a l'accusatif et le masculin change, comme <i>einen</i>."
      },
      {
        q: "Comment dit-on « sa mère » (la mère de lui) ?",
        opts: ["seine Mutter", "ihre Mutter", "sein Mutter"],
        why: "Le possesseur est masculin, donc <b>sein</b>, et <i>Mutter</i> est féminin : <b>seine Mutter</b>."
      },
      {
        q: "Quelle phrase est correcte ?",
        opts: ["Ich mag mein Vater.", "Ich mag meinen Vater.", "Ich mag meine Vater."],
        why: "<i>Vater</i> est masculin et se trouve à l'accusatif : <b>meinen Vater</b>."
      },
      {
        q: "Choisis ein ou eine : le possessif prend les mêmes terminaisons.",
        why: "Le possessif prend les mêmes terminaisons que <i>ein</i> : <i>ein Bruder → mein Bruder</i>, <i>eine Tante → meine Tante</i>.",
        items: ["frère", "sœur", "oncle", "tante", "chef", "amie"]
      },
      {
        q: "Traduis : « Ma sœur s'appelle Lena et mon frère s'appelle Paul. »",
        why: "Pas d'article devant le possessif : <i>meine Schwester</i>, <i>mein Bruder</i>."
      },
      {
        q: "Complète : « Voici mes parents. Mon père s'appelle Jan. »",
        tr: "Voici mes parents. Mon père s'appelle Jan.",
        why: "<i>Eltern</i> est au pluriel : <b>meine</b>. <i>Vater</i> est masculin nominatif : <b>Mein</b>, avec la majuscule en début de phrase."
      },
      {
        tr: "Ma mère s'appelle Eva et mon père s'appelle Jan.",
        why: "Dans <i>heißen</i>, le <b>ß</b> est un <b>s</b> sourd, comme dans « sac »."
      },
      {
        tr: "Voici ma famille : mon père, ma mère et mon frère.",
        why: "<i>Familie</i> se prononce /faˈmiːli̯ə/ : le premier <b>i</b> est long et accentué ; la terminaison <b>-ie</b> se prononce /i̯ə/, ce n'est pas un <b>i</b> long."
      }
    ]
  },
  "lesson:a1-u08-l2": {
    theme: "L'aspect physique",
    title: "À quoi ressemble-t-il ?",
    objectives: [
      "demander et dire à quoi ressemble une personne avec Wie sieht ... aus?",
      "utiliser l'adjectif après sein sans le modifier",
      "décrire les cheveux, les yeux et les accessoires avec haben"
    ],
    theory: [
      {
        h: "Wie sieht er aus?",
        p: "Pour demander l'<b>aspect</b>, on utilise <em>Wie sieht er aus?</em> (« à quoi ressemble-t-il ? »). Pour l'instant, apprends la formule entière, sans décomposer le verbe : <em>Wie sieht Paul aus?</em>, <em>Wie sieht deine Schwester aus?</em> On répond avec <em>sein</em> et un adjectif : <em>Er ist groß und schlank</em>. Ou avec <em>haben</em> : <em>Er hat einen Bart</em>, <em>Sie hat eine Brille</em>."
      },
      {
        contrast: "En français, l'adjectif s'accorde avec le nom : <em>grand, grande, grands, grandes</em>. En allemand, après <em>sein</em>, l'adjectif reste <b>toujours identique</b> : <em>Er ist groß</em>, <em>Sie ist groß</em>, <em>Sie sind groß</em>. Il n'existe pas de forme pour le féminin ni pour le pluriel."
      },
      {
        h: "Cheveux et yeux sont au pluriel",
        p: "<em>Die Haare</em> et <em>die Augen</em> sont au pluriel, et le verbe suit : <em>Seine Haare sind kurz</em>, <em>Ihre Augen sind grün</em>. On peut aussi dire <em>Er hat kurze Haare</em>, mais cette forme, avec l'adjectif devant le nom, viendra plus tard : pour l'instant, l'adjectif se place après <em>sein</em>."
      },
      {
        trap: "Ne traduis pas « Il a les cheveux courts » mot à mot : l'allemand préfère une autre tournure. Pour cette leçon, utilise <em>Seine Haare sind kurz</em> ; <em>Er hat kurze Haare</em> et <em>Er hat die Haare kurz</em> sont également possibles. Autre piège : <em>die Brille</em> est au singulier en allemand (une paire de lunettes) : <em>Sie hat eine Brille</em>, là où le français dit « elle a des lunettes ». Et avec un sujet pluriel, le verbe est <em>sind</em> : pas « Die Eltern ist groß », mais <em>Die Eltern sind groß</em>."
      },
      {
        tip: "Fais une description en trois phrases : <em>Er ist ...</em>, <em>Er hat ...</em>, <em>Seine Haare sind ...</em>. Avec <em>sein</em> et <em>haben</em>, tu décris presque n'importe qui."
      }
    ],
    grammar: {
      title: "L'adjectif après sein ne change pas",
      note: "Même forme pour le masculin, le féminin, le neutre et le pluriel. Seul le verbe change (<em>ist, sind</em>).",
      table: {
        head: ["sujet", "verbe", "adjectif", "exemple"],
        rows: [
          ["masculin", "ist", "groß", "Mein Bruder ist groß."],
          ["féminin", "ist", "groß", "Meine Schwester ist groß."],
          ["neutre", "ist", "groß", "Das Kind ist groß."],
          ["pluriel", "sind", "groß", "Meine Eltern sind groß."]
        ]
      },
      examples: [
        { tr: "À quoi ressemble Paul ?", note: "formule : Wie sieht ... aus?" },
        { tr: "Il est grand et mince." },
        { tr: "Ses yeux sont marron.", note: "Augen est au pluriel : sind" },
        { tr: "Ma sœur est petite et blonde.", note: "klein pour la taille" },
        { tr: "Il a une barbe.", note: "haben + accusatif : einen Bart" },
        { tr: "Ses cheveux sont longs." }
      ]
    },
    vocab: [
      "grand",
      "petit",
      "jeune",
      "vieux, âgé",
      "mince, svelte",
      "blond",
      "long",
      "court",
      "les cheveux (pluriel)",
      "les yeux (pluriel)",
      "les lunettes (au singulier en allemand : die Brille)",
      "la barbe"
    ],
    exercises: [
      {
        q: "Comment demandes-tu « À quoi ressemble-t-il ? »",
        opts: ["Wie ist er aus?", "Wie sieht er aus?", "Was sieht er aus?"],
        why: "La formule est <b>Wie sieht er aus?</b> et elle ne se décompose pas."
      },
      {
        q: "Quelle phrase est correcte ?",
        opts: ["Die Schuhe sind rote.", "Meine Schwester ist kleine.", "Meine Schwester ist klein."],
        why: "Après <i>sein</i>, l'adjectif reste invariable : <b>klein</b>."
      },
      {
        q: "Complète : « Seine Augen ___ braun. » (Ses yeux sont marron.)",
        hint: "sein, sujet pluriel",
        why: "<i>Augen</i> est au pluriel : <b>sind</b>."
      },
      {
        q: "Complète : « Sie ___ eine Brille. » (Elle a des lunettes.)",
        hint: "haben, troisième personne du singulier",
        why: "<b>Sie hat</b> : <i>haben</i> avec <i>er/sie/es</i> donne <i>hat</i>."
      },
      {
        q: "Associe chaque mot à sa signification.",
        pairs: ["grand", "mince", "blond", "court"]
      },
      {
        tr: "Ma sœur est petite et blonde.",
        why: "L'ordre est sujet, verbe, adjectifs : <i>Meine Schwester ist klein und blond</i>."
      },
      {
        q: "Traduis : « Mon frère est grand et il a une barbe. »",
        why: "<i>Er ist groß und hat einen Bart</i> : <i>Bart</i> est masculin à l'accusatif, donc <i>einen</i>."
      },
      {
        q: "Complète le texte.",
        tr: "Anna est petite et mince. Elle a des lunettes et ses cheveux sont longs.",
        why: "<i>Ist</i> et <i>hat</i> avec <i>Anna/sie</i> ; <i>Haare</i> est au pluriel, donc <i>sind</i>."
      },
      {
        tr: "Ma sœur est grande et mince, et ses cheveux sont blonds.",
        why: "Dans <i>blond</i>, le <b>o</b> est bref ; dans <i>Haare</i>, le <b>aa</b> est un <b>a</b> long."
      },
      {
        tr: "Mon père est grand, il a une barbe et des lunettes.",
        why: "Dans <i>Brille</i>, le <b>r</b> peut être uvulaire (le plus répandu) ou roulé, également standard ; aucun des deux n'est faux. Le <b>ll</b> signale que le <b>i</b> qui précède est bref ; ce n'est pas une géminée."
      }
    ]
  },
  "lesson:a1-u08-l3": {
    theme: "Le caractère",
    title: "Sympathique ou antipathique ?",
    objectives: [
      "demander et dire comment est une personne avec Wie ist ...?",
      "utiliser des adjectifs de caractère après sein",
      "nier un adjectif avec nicht"
    ],
    theory: [
      {
        h: "Wie ist er? Le caractère",
        p: "<em>Wie sieht er aus?</em> demande l'aspect, <em>Wie ist er?</em> demande le <b>caractère</b> : <em>Wie ist dein Chef?</em> – <em>Er ist sehr nett.</em> Ici aussi, l'adjectif se place après <em>sein</em> et ne change pas : <em>Meine Freundin ist lustig</em>, <em>Meine Eltern sind intelligent</em>."
      },
      {
        contrast: "<em>Sympathisch</em> ressemble à « sympathique » et recouvre en grande partie le même sens : une personne qui inspire de la sympathie. <em>Nett</em> correspond à « gentil » ou « sympa » selon le contexte, et <em>freundlich</em> décrit un comportement aimable. Le contraire de <em>freundlich</em> se forme avec <em>un-</em> : <em>unfreundlich</em>. Pour nier, le français entoure le verbe (<em>il n'est pas gentil</em>) ; l'allemand n'a qu'un mot, <em>nicht</em>, qui se place devant l'adjectif : <em>Er ist nicht nett</em>."
      },
      {
        h: "Nier un adjectif : nicht",
        p: "Comme tu l'as vu à l'unité 3, on nie un adjectif avec <strong>nicht</strong>, qui se place devant lui : <em>Er ist nicht unfreundlich</em>, <em>Sie ist nicht faul, sie ist sehr fleißig</em>. Avec <em>aber</em>, on oppose : <em>Mein Chef ist nett, aber zu ernst</em>."
      },
      {
        trap: "<em>Zu</em> devant un adjectif veut dire « trop », et non « à » : <em>zu ernst</em> signifie « trop sérieux ». Et <em>nicht</em> ne devient pas <em>kein</em> devant un adjectif : « Er ist kein nett » est faux ; pour nier un adjectif après <em>sein</em>, on emploie <em>nicht</em> : <em>Er ist nicht nett</em>."
      },
      {
        tip: "Pour décrire une personne, fais deux mouvements : l'aspect (<em>Wie sieht sie aus?</em>) et le caractère (<em>Wie ist sie?</em>). Deux questions différentes, deux réponses différentes."
      }
    ],
    grammar: {
      title: "Wie ist er? Wie sieht er aus?",
      note: "<b>Wie ist ...?</b> demande le caractère, <b>Wie sieht ... aus?</b> l'aspect. Dans les deux cas, l'adjectif ne change pas.",
      table: {
        head: ["question", "réponse", "exemple"],
        rows: [
          ["Wie ist dein Chef?", "sein + adjectif", "Er ist nett."],
          ["Wie sieht dein Chef aus?", "sein + adjectif ; haben + nom à l'accusatif", "Er ist groß. Er hat einen Bart."],
          ["nier un adjectif", "nicht + adjectif", "Er ist nicht unfreundlich."],
          ["trop", "zu + adjectif", "Er ist zu ernst."]
        ]
      },
      examples: [
        { tr: "Comment est ton chef ?", note: "Wie ist ...? demande le caractère" },
        { tr: "Il est très sympa." },
        { tr: "Mon amie est drôle." },
        { tr: "Elle n'est pas paresseuse, elle est travailleuse.", note: "nicht devant l'adjectif" },
        { tr: "Mon chef est sympa, mais trop sérieux." },
        { tr: "Paul n'est pas désagréable.", note: "nicht unfreundlich : nier un adjectif" }
      ]
    },
    vocab: [
      "gentil, sympa",
      "aimable, cordial",
      "désagréable, peu aimable",
      "amusant, drôle",
      "sérieux",
      "calme, tranquille",
      "sympathique",
      "intelligent",
      "travailleur, qui travaille avec application",
      "paresseux",
      "timide",
      "l'ami"
    ],
    exercises: [
      {
        q: "Comment demandes-tu comment est le caractère de lui ?",
        opts: ["Wie sieht er aus?", "Wie ist er?", "Wie hat er?"],
        why: "<b>Wie ist er?</b> demande le caractère ; <i>Wie sieht er aus?</i> l'aspect."
      },
      {
        q: "Quel est le contraire de <i>freundlich</i> ?",
        opts: ["unfreundlich", "fleißig", "ruhig"],
        why: "Le préfixe <b>un-</b> nie l'adjectif : <i>unfreundlich</i>."
      },
      {
        q: "Paul travaille beaucoup. Comment est-il ?",
        opts: ["Er ist faul.", "Er ist schüchtern.", "Er ist fleißig."],
        why: "<i>Fleißig</i> se dit de quelqu'un qui travaille avec application ; <i>faul</i> est son contraire."
      },
      {
        q: "Complète : « Anna ist ___ unfreundlich, sie ist sehr nett. »",
        hint: "nier un adjectif",
        why: "On nie un adjectif avec <b>nicht</b>."
      },
      {
        q: "Associe chaque mot à sa signification.",
        pairs: ["amusant", "sérieux", "paresseux", "timide"]
      },
      {
        tr: "Mon chef est très sympa et calme.",
        why: "Sujet, verbe, adjectifs : <i>Mein Chef ist sehr nett und ruhig</i>."
      },
      {
        q: "Traduis : « Ma sœur n'est pas timide, elle est très sympathique. »",
        why: "<i>Nicht schüchtern</i> : <i>nicht</i> se place devant l'adjectif. Puis une seconde phrase avec <i>sie ist ...</i>."
      },
      {
        q: "Complète : « Comment est ton chef ? Il est sympa, mais trop sérieux. »",
        tr: "Comment est ton chef ? Il est sympa, mais trop sérieux.",
        why: "<i>Wie ist ...?</i> et <i>ist</i> dans les réponses ; <i>zu</i> devant l'adjectif signifie « trop »."
      },
      {
        tr: "Mon ami est très drôle, mais sa sœur est sérieuse et calme.",
        why: "Dans <i>lustig</i>, le <b>u</b> est bref et le <b>g</b> final se lit comme le <i>ch</i> doux de <i>ich</i>."
      },
      {
        tr: "Mon amie n'est pas paresseuse, elle est très travailleuse et sympathique.",
        why: "Dans <i>fleißig</i>, le <b>ß</b> est un <b>s</b> sourd et le <b>ei</b> se lit comme <i>aï</i>."
      }
    ]
  },
  "lesson:a1-u08-l4": {
    theme: "La comparaison",
    title: "Plus grand que toi",
    objectives: [
      "comparer deux personnes avec le comparatif et als",
      "dire que deux choses sont égales avec so ... wie",
      "utiliser les formes irrégulières besser, mehr, lieber"
    ],
    theory: [
      {
        h: "Le comparatif : -er et als",
        p: "Pour dire que quelqu'un est « plus ... », on ajoute <strong>-er</strong> à l'adjectif, et le second terme s'introduit avec <strong>als</strong> : <em>Er ist größer als du</em>. Beaucoup d'adjectifs courts prennent un tréma : <em>alt → älter</em>, <em>jung → jünger</em>, <em>groß → größer</em>. Le comparatif, comme l'adjectif, reste invariable après <em>sein</em>."
      },
      {
        contrast: "Le français dit « plus grand <em>que</em> toi » et « aussi grand <em>que</em> toi » avec le même mot, <em>que</em>, et place « plus » devant l'adjectif. L'allemand, lui, distingue les deux : le « plus » est dans le mot (<em>größer</em>) et le second terme prend <em>als</em> ; pour l'égalité, c'est <em>wie</em> : <em>so groß wie du</em>. Comme en français, certaines formes sont irrégulières (<em>bon → meilleur</em> devient <em>gut → besser</em>), mais attention à <em>gern → lieber</em> (« plus volontiers »), qui n'a pas de forme comparable en français."
      },
      {
        h: "Égalité : so ... wie",
        p: "Pour dire que deux choses sont égales, on utilise <strong>so ... wie</strong> avec l'adjectif simple, sans <em>-er</em> : <em>Sie ist so groß wie ich</em>. Pour nier : <em>Anna ist nicht so alt wie Paul</em>."
      },
      {
        trap: "Ne mélange pas les deux constructions : « größer wie du » et « so groß als du » sont des erreurs courantes, justement parce que le français dit <em>que</em> dans les deux cas. <em>Als</em> va avec le comparatif (<em>-er</em>), <em>wie</em> va avec <em>so</em>. Quelques formes sont irrégulières : <em>gut → besser</em>, <em>viel → mehr</em>, <em>gern → lieber</em> : <em>Ich trinke lieber Tee als Kaffee</em>."
      },
      {
        tip: "Quand tu compares, demande-toi : sont-ils égaux ou différents ? Égaux : <em>so ... wie</em>. Différents : <em>-er ... als</em>."
      }
    ],
    grammar: {
      title: "Comparatif et égalité",
      note: "<b>-er ... als</b> pour « plus que » ; <b>so ... wie</b> pour « aussi que ». Les formes irrégulières s'apprennent.",
      table: {
        head: ["adjectif", "comparatif", "exemple"],
        rows: [
          ["klein", "kleiner", "Ich bin kleiner als du."],
          ["alt", "älter", "Er ist älter als ich."],
          ["jung", "jünger", "Sie ist jünger als ich."],
          ["groß", "größer", "Er ist größer als du."],
          ["gut", "besser", "Du sprichst besser Deutsch."],
          ["gern", "lieber", "Ich trinke lieber Tee."]
        ]
      },
      examples: [
        { tr: "Il est plus grand que toi.", note: "größer als : -er + als" },
        { tr: "Elle est aussi grande que moi.", note: "so groß wie : adjectif de base + wie" },
        { tr: "Mon frère est plus âgé que ma sœur." },
        { tr: "Je bois plus volontiers du thé que du café.", note: "gern → lieber" },
        { tr: "Tu parles allemand mieux que moi.", note: "gut → besser" },
        { tr: "Anna n'est pas aussi âgée que Paul.", note: "nicht so ... wie" }
      ]
    },
    vocab: [
      "que (dans une comparaison)",
      "aussi ... que",
      "plus âgé, aîné",
      "plus jeune, cadet",
      "plus grand",
      "plus petit",
      "meilleur, mieux",
      "plus (en quantité)",
      "plus volontiers, plutôt",
      "le jumeau",
      "la différence",
      "égal, identique ; gleich alt : du même âge ; gleich groß : de la même taille"
    ],
    exercises: [
      {
        q: "Comment dit-on « plus grand que toi » ?",
        opts: ["größer wie du", "größer als du", "groß als du"],
        why: "Le comparatif prend <b>-er</b> et le second terme s'introduit avec <b>als</b>."
      },
      {
        q: "Comment dit-on « aussi grand que toi » ?",
        opts: ["so groß wie du", "so groß als du", "größer wie du"],
        why: "L'égalité se forme avec <b>so ... wie</b> et l'adjectif sans <i>-er</i>."
      },
      {
        q: "Quel est le comparatif de <i>alt</i> ?",
        opts: ["alter", "älter", "alterer"],
        why: "<b>Älter</b> : le <i>a</i> prend le tréma."
      },
      {
        q: "Complète : « Paul ist ___ als ich. » (Paul est plus grand que moi.)",
        hint: "groß, comparatif",
        why: "<b>Größer</b> : <i>groß</i> + <i>-er</i>."
      },
      {
        q: "Complète : « Anna ist so alt ___ ich. » (Anna a mon âge.)",
        hint: "égalité",
        why: "Avec <i>so ... wie</i>, le mot est <b>wie</b>."
      },
      {
        tr: "Mon frère est plus âgé que ma sœur.",
        why: "<i>Älter als</i> : l'ordre est sujet, verbe, comparatif, <i>als</i>, second terme."
      },
      {
        q: "Traduis : « Tu parles allemand mieux que moi. »",
        why: "<i>Besser</i> et <i>als ich</i> : ici <i>ich</i> est au nominatif parce que c'est le sujet de la phrase sous-entendue : <i>als ich Deutsch spreche</i>."
      },
      {
        q: "Complète la phrase. Utilise jung dans la première lacune et alt dans la seconde.",
        tr: "Je suis plus jeune que toi, mais tu es plus âgé que moi.",
        why: "<i>Jünger als du</i>, <i>älter als ich</i> : les trémas de <i>jung</i> et de <i>alt</i>."
      },
      {
        tr: "Mon frère est plus âgé que moi, mais je suis plus grand que lui.",
        why: "Dans <i>älter</i>, le <b>ä</b> est un « è » ouvert ; dans <i>größer</i>, le <b>ö</b> est long et fermé, comme le « eu » de « peu » (et non celui, ouvert, de « peur »)."
      },
      {
        tr: "Ma sœur est aussi grande que moi, mais elle est plus jeune.",
        why: "Dans <i>jünger</i>, le <b>j</b> se prononce comme un « y », et le <b>ü</b> comme le « u » français."
      }
    ]
  },
  "lesson:a1-u08-test": {
    theme: "Évaluation",
    title: "Évaluation de l'unité 8",
    objectives: ["vérifier les possessifs, les adjectifs après sein et le comparatif"],
    theory: [
      {
        p: "Dix questions sur toute l'unité. On réussit avec 70 %. Ne relis pas les leçons pendant que tu réponds : si tu ne te souviens plus de quelque chose, mieux vaut retourner réviser."
      }
    ],
    exercises: [
      {
        q: "Complète : « Das ist ___ Tante. » (C'est ma tante.)",
        hint: "mein + terminaison du féminin",
        why: "<b>Meine Tante</b> : féminin, nominatif."
      },
      {
        q: "Complète : « Ich mag ___ Onkel. » (J'aime bien mon oncle.)",
        hint: "mein + accusatif masculin",
        why: "<b>Meinen Onkel</b> : masculin accusatif."
      },
      {
        q: "Complète : « Du bist älter ___ ich. » (Tu es plus âgé que moi.)",
        hint: "second terme de la comparaison",
        why: "Après le comparatif, on emploie <b>als</b>."
      },
      {
        q: "Complète : « Sie ist so groß ___ ich. » (Elle est aussi grande que moi.)",
        hint: "égalité",
        why: "Avec <i>so ... wie</i>, le mot est <b>wie</b>."
      },
      {
        q: "Comment dit-on « sa sœur » (la sœur d'elle) ?",
        opts: ["seine Schwester", "ihre Schwester", "ihr Schwester"],
        why: "Le possesseur est féminin, donc <b>ihr-</b>, et <i>Schwester</i> est féminin : <b>ihre Schwester</b>."
      },
      {
        q: "Quelle phrase est correcte ?",
        opts: ["Meine Schwester ist kleine.", "Meine Schwester ist klein.", "Meine Schwester sind klein."],
        why: "Après <i>sein</i>, l'adjectif est invariable, et avec un sujet singulier le verbe est <i>ist</i>."
      },
      {
        q: "Quel est le contraire de <i>fleißig</i> ?",
        opts: ["faul", "ernst", "freundlich"],
        why: "<b>Faul</b> (paresseux) se dit de quelqu'un qui ne travaille pas avec application."
      },
      {
        q: "Comment dit-on « meilleur que » ?",
        opts: ["gut als", "besser als", "guter als"],
        why: "<i>Gut</i> a le comparatif irrégulier <b>besser</b>."
      },
      {
        tr: "Mon oncle est plus âgé que mon père, mais il n'est pas aussi sérieux.",
        why: "<i>Älter als</i> et <i>nicht so ... wie</i> : deux constructions différentes."
      },
      {
        tr: "Ma sœur est plus grande que moi et elle est très sympathique.",
        why: "<i>Größer als ich</i>, puis <i>sehr sympathisch</i> : dans <i>sympathisch</i>, la terminaison <b>sch</b> [ʃ] se prononce comme le « ch » de « chat »."
      }
    ]
  }
});
