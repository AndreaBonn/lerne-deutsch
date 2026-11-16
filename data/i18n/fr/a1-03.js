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
  },
  "unit:a1-u09": {
    title: "Temps libre",
    grammarNote: "présent et jours · es regnet · gerade à la place de « être en train de » · für, ohne, um, durch, gegen · und, aber, oder, denn"
  },
  "lesson:a1-u09-l1": {
    theme: "Le week-end",
    title: "Que fais-tu le week-end ?",
    objectives: [
      "demander et dire ce qu'on fait le week-end",
      "choisir entre am Samstag et samstags",
      "parler de ses loisirs avec spielen, schwimmen, wandern, kochen"
    ],
    theory: [
      {
        h: "Le présent pour les habitudes et les projets proches",
        p: "Le présent allemand sert pour ce que tu fais d'habitude et pour ce que tu feras bientôt : <em>Am Samstag spiele ich Fußball</em> (samedi, je joue au foot). Le verbe reste en <b>deuxième position</b> : si tu ouvres la phrase par <em>am Samstag</em>, le sujet passe après le verbe."
      },
      {
        contrast: "Le français distingue « samedi » (ce samedi-là) de « le samedi » (chaque samedi) avec l'article. L'allemand utilise deux formes : <em>samstags</em> (avec <em>-s</em>) exprime nettement l'habitude, alors que <em>am Samstag</em> dépend du contexte : ce peut être un samedi précis, mais aussi un samedi habituel (<em>Am Samstag spiele ich immer Fußball</em>). Pour « le week-end », on dit <em>am Wochenende</em>, avec <em>am</em>, et pas avec une forme de <em>in</em>."
      },
      {
        trap: "<em>Wochenende</em> est neutre (<em>das Wochenende</em>), alors que « le week-end » est masculin en français : le genre français ne t'aide pas. Pour les sports, l'allemand n'a pas de préposition : <em>Fußball spielen</em>, là où le français dit « jouer <em>au</em> foot ». Avec un instrument aussi : <em>Gitarre spielen</em> (« jouer <em>de la</em> guitare »)."
      },
      {
        tip: "Pour dire qu'une chose te plaît, ajoute <em>gern</em> après le verbe : <em>Ich schwimme gern</em>. Pour demander à quelqu'un ses projets, <em>Was machst du am Wochenende?</em> est la question la plus naturelle."
      }
    ],
    grammar: {
      title: "Quand : am, samstags, im",
      note: "<b>am</b> pour un jour précis et pour un moment de la journée, <b>-s</b> pour l'habitude explicite (<b>am</b> peut aussi être habituel, selon le contexte), <b>im</b> pour les saisons.",
      table: {
        head: ["quand", "forme", "exemple"],
        rows: [
          ["un samedi précis (ou habituel, selon le contexte)", "am Samstag", "Am Samstag spiele ich Fußball."],
          ["chaque samedi, habitude explicite", "samstags", "Samstags schwimme ich gern."],
          ["le week-end", "am Wochenende", "Am Wochenende wandere ich."],
          ["le soir", "am Abend", "Am Abend koche ich."],
          ["dans une saison", "im Winter", "Im Winter tanzen wir oft."]
        ]
      },
      examples: [
        { tr: "Que fais-tu le week-end ?", note: "am Wochenende" },
        { tr: "Samedi, je joue au foot.", note: "Fußball spielen sans préposition" },
        { tr: "Le samedi, j'aime nager.", note: "samstags = chaque samedi" },
        { tr: "Dimanche, je fais une randonnée avec des amis.", note: "wandern : marcher dans la nature" },
        { tr: "Le soir, je cuisine pour ma famille." },
        { tr: "En hiver, nous dansons souvent.", note: "im + saison" }
      ]
    },
    vocab: [
      "le week-end",
      "le passe-temps, le loisir",
      "le concert",
      "le film",
      "le livre",
      "la sortie, l'excursion",
      "jouer (aussi : jouer d'un instrument)",
      "nager",
      "faire de la randonnée",
      "cuisiner",
      "danser",
      "le samedi, chaque samedi"
    ],
    exercises: [
      {
        q: "Comment demandes-tu à un ami ce qu'il fait le week-end ?",
        opts: ["Was machst du am Wochenende?", "Was machst du im Wochenende?", "Was machst du an Wochenende?"],
        why: "Avec le week-end, on utilise <b>am</b> : <i>am Wochenende</i>. <i>Im Wochenende</i> est l'erreur de celui qui pense à « dans »."
      },
      {
        q: "Comment dis-tu « chaque samedi » ?",
        opts: ["Im Samstag", "Der Samstag", "Samstags"],
        why: "<b>Samstags</b>, avec le <i>-s</i>, exprime nettement une habitude. <i>Am Samstag</i> dépend du contexte : en général un samedi précis, mais il peut aussi être habituel."
      },
      {
        q: "Complète : « Ich ___ gern Fußball. » (jouer, je)",
        hint: "spielen, ich",
        why: "Avec <i>ich</i>, le verbe régulier se termine en <b>-e</b> : <i>ich spiele</i>."
      },
      {
        q: "Complète : « Ich besuche ___ Sonntag meine Großmutter. » (dimanche)",
        hint: "préposition pour un jour précis",
        why: "Un jour précis demande <b>am</b> : <i>am Sonntag</i>."
      },
      {
        q: "Associe chaque verbe à son sens.",
        pairs: ["jouer", "nager", "faire de la randonnée", "cuisiner"]
      },
      {
        q: "Traduis : « Samedi, je joue au foot et dimanche, je fais une randonnée. » (jours précis, utilise wandern)",
        why: "<i>Am Samstag spiele ich Fußball ...</i> : après le complément de temps, le verbe reste en deuxième position et le sujet le suit."
      },
      {
        q: "Complète le dialogue (utilise treffen).",
        tr: "Que fais-tu le week-end ? Je retrouve des amis et nous allons au cinéma.",
        why: "Avec <i>du</i>, on dit <i>machst</i> ; <i>ich treffe</i> est la première personne de <i>treffen</i> ; <i>ins</i> est <i>in das</i>."
      },
      {
        q: "Un ami te demande ce que tu comptes faire.",
        setting: "Tu parles avec un ami au téléphone.",
        lines: [
          { tr: "Salut ! Que fais-tu le week-end ?" },
          { tr: "Réponds que samedi tu joues au foot.", answerTr: "Samedi, je joue au foot." },
          { tr: "Et dimanche ?" },
          { tr: "Réponds que dimanche tu fais une randonnée.", answerTr: "Dimanche, je fais une randonnée." }
        ]
      },
      {
        tr: "Samedi, je joue au foot et dimanche, je cuisine pour ma famille.",
        why: "Dans <i>Fußball</i>, le <b>ß</b> est un <b>s</b> sourd (comme dans « sac ») et le <b>u</b> est long."
      },
      {
        tr: "Samedi, je danse et dimanche, je fais une randonnée.",
        why: "Dans <i>tanze</i>, le <b>z</b> se lit [ts], comme dans « tsar » ; dans <i>wandere</i>, le <b>w</b> se prononce comme le « v » français."
      }
    ]
  },
  "lesson:a1-u09-l2": {
    theme: "Le temps qu'il fait",
    title: "Il pleut",
    objectives: [
      "dire quel temps il fait avec es regnet, es schneit, es ist kalt",
      "utiliser es comme sujet des phrases sur la météo",
      "demander et dire la température"
    ],
    theory: [
      {
        h: "Es : le sujet impersonnel",
        p: "Pour parler de la météo, l'allemand veut un sujet : <strong>es</strong>. <em>Es regnet</em> (il pleut), <em>Es schneit</em> (il neige), <em>Es ist kalt</em> (il fait froid). <em>Es</em> ne désigne aucune chose : il tient seulement la place du sujet."
      },
      {
        contrast: "Ici le français ressemble à l'allemand : « il pleut », « il neige » ont un sujet impersonnel <em>il</em>, comme <em>es</em>. Les différences sont ailleurs. Pour le froid et le chaud, le français emploie <em>faire</em> (« il fait froid »), l'allemand emploie <em>sein</em> : <em>Es ist kalt</em>, et pas « es macht kalt ». Pour la température, le français dit « il fait vingt degrés », l'allemand <em>Es sind zwanzig Grad</em>. Et <em>es</em> reste même quand la phrase commence par autre chose : <em>Heute regnet es</em>, et pas <em>Heute regnet</em>."
      },
      {
        trap: "Le mot « temps » du français veut dire à la fois la météo et la durée : l'allemand sépare les deux, <em>das Wetter</em> (neutre) pour la météo et <em>die Zeit</em> pour la durée. Attention aussi à <em>die Sonne scheint</em> : ici le sujet est une vraie chose, <em>die Sonne</em>, et il ne faut pas de <em>es</em>. Pour la météo, <em>die Sonne</em> s'emploie normalement au singulier (le pluriel est <em>die Sonnen</em>). Pour « il y a du soleil », on dit <em>Es ist sonnig</em>."
      },
      {
        tip: "Pour la température : <em>Wie viel Grad sind es?</em> et <em>Es sind zwanzig Grad.</em> Après un nombre, pour une température, <em>Grad</em> reste invariable ; le pluriel ordinaire est <em>Grade</em>. Pour demander la météo : <em>Wie ist das Wetter?</em>"
      }
    ],
    grammar: {
      title: "Es dans les phrases sur la météo",
      note: "Le sujet <b>es</b> ne s'omet pas ; quand un autre élément ouvre la phrase, il se place après le verbe.",
      table: {
        head: ["français", "allemand", "exemple"],
        rows: [
          ["il pleut", "Es regnet.", "Heute regnet es nicht."],
          ["il neige", "Es schneit.", "Im Winter schneit es oft."],
          ["il fait froid", "Es ist kalt.", "Heute ist es sehr kalt."],
          ["il fait chaud", "Es ist warm / heiß.", "Im Sommer ist es warm."],
          ["quel temps fait-il ?", "Wie ist das Wetter?", "Wie ist das Wetter in Wien?"]
        ]
      },
      examples: [
        { tr: "Il pleut.", note: "es ne s'omet pas" },
        { tr: "En hiver, il neige souvent.", note: "es après le verbe" },
        { tr: "Aujourd'hui, il fait très froid.", note: "sein, pas machen" },
        { tr: "Aujourd'hui, il ne pleut pas." },
        { tr: "Quel temps fait-il ?", note: "das Wetter est neutre" },
        { tr: "Il fait vingt degrés.", note: "Après un nombre, pour la température, Grad reste invariable : zwanzig Grad ; le pluriel ordinaire est Grade." }
      ]
    },
    vocab: [
      "le temps (météo)",
      "pleuvoir",
      "neiger",
      "le soleil",
      "le nuage",
      "le vent",
      "froid",
      "chaud (agréable), doux",
      "très chaud, torride",
      "ensoleillé",
      "venteux",
      "le degré"
    ],
    exercises: [
      {
        q: "Comment dis-tu « il pleut » ?",
        opts: ["Es regnet.", "Regnet.", "Sie regnet."],
        why: "En allemand, le sujet <b>es</b> ne s'omet pas : <i>Es regnet</i>."
      },
      {
        q: "Quelle phrase est correcte ?",
        opts: ["Heute es regnet.", "Heute regnet es.", "Heute regnet."],
        why: "Le verbe est en deuxième position et <i>es</i> reste, après le verbe."
      },
      {
        q: "Complète : « Im Winter ___ es oft. » (neiger)",
        hint: "schneien, es",
        why: "<b>Schneit</b> : <i>schneien</i> à la troisième personne, avec <i>es</i>."
      },
      {
        q: "Complète : « Heute ist ___ sehr kalt. » (Aujourd'hui, il fait très froid.)",
        hint: "le sujet des phrases sur la météo",
        why: "<b>Es</b> est le sujet et, dans les phrases sur la météo, il ne s'omet pas."
      },
      {
        q: "Associe chaque mot à son sens.",
        pairs: ["froid", "très chaud", "ensoleillé", "venteux"]
      },
      {
        tr: "Aujourd'hui, il fait très froid.",
        why: "<i>Heute ist es sehr kalt</i> : verbe en deuxième position. <i>Es ist heute sehr kalt</i> est correct aussi."
      },
      {
        q: "Traduis : « Aujourd'hui, il pleut et il fait froid. »",
        why: "Deux phrases, deux <i>es</i> : <i>es regnet</i> et <i>es ist kalt</i>. Après <i>und</i>, le sujet commun peut s'omettre : <i>Heute regnet es und ist kalt</i>."
      },
      {
        q: "Complète le dialogue.",
        tr: "Quel temps fait-il aujourd'hui ? Il pleut et il fait froid.",
        why: "<i>Das Wetter</i> est neutre. Avec <i>regnet</i> et <i>ist kalt</i>, le sujet <i>es</i> est toujours là."
      },
      {
        tr: "Aujourd'hui, il y a du soleil, mais il ne fait pas chaud.",
        why: "Dans <i>scheint</i>, le groupe <b>sch</b> se lit [ʃ], comme le « ch » de « chat », et <b>ei</b> se lit comme « aï »."
      },
      {
        tr: "En hiver, il neige souvent et il fait très froid.",
        why: "Dans <i>schneit</i>, <b>sch</b> est [ʃ] suivi de <b>n</b>, et <b>ei</b> se lit comme « aï »."
      }
    ]
  },
  "lesson:a1-u09-l3": {
    theme: "En ce moment",
    title: "Je suis en train de lire",
    objectives: [
      "dire ce qu'on fait en ce moment avec le présent et gerade",
      "utiliser im Moment comme variante de gerade",
      "conjuguer lesen et sehen (et fernsehen)"
    ],
    theory: [
      {
        h: "Gerade + présent",
        p: "L'allemand n'a pas de forme comme « être en train de lire ». Pour dire que tu fais quelque chose maintenant, tu emploies le présent et tu ajoutes <strong>gerade</strong> (en ce moment) ou <strong>im Moment</strong> (en ce moment) : <em>Ich lese gerade</em>. En général, <em>gerade</em> se place après le verbe."
      },
      {
        contrast: "Le français a la tournure <em>être en train de</em> : « je suis en train de lire », « elle est en train de téléphoner ». L'allemand standard n'a pas de tournure courante qui lui corresponde, et une traduction mot à mot comme <em>Ich bin lesend</em> est fausse. « Je lis » et « je suis en train de lire » donnent tous deux <em>ich lese</em>, et seuls le contexte ou <em>gerade</em> disent que c'est maintenant. Dans certaines régions, on entend aussi <em>Ich bin am Lesen</em>, mais tu n'en as pas besoin pour l'instant."
      },
      {
        h: "Lesen et sehen changent de voyelle",
        p: "À la deuxième et à la troisième personne du singulier, <em>lesen</em> et <em>sehen</em> changent <b>e → ie</b> : <em>du liest</em>, <em>er liest</em>, <em>du siehst</em>, <em>er sieht</em>. <em>Fernsehen</em> est séparable : <em>Er sieht gerade fern</em>."
      },
      {
        trap: "<em>Ich lese</em> tout seul peut vouloir dire « je lis » (d'habitude) ou « je suis en train de lire ». Pour que ce soit clair que c'est maintenant, ajoute <em>gerade</em>. Utilise un seul verbe conjugué au présent : <em>ich lese gerade</em>. N'ajoute pas <em>bin</em>."
      },
      {
        tip: "La question et la réponse suivent le même schéma : <em>Was machst du gerade? Ich lese gerade.</em> Les adverbes de fréquence (<em>immer, oft, manchmal, nie</em>) se placent après le verbe conjugué et le sujet pronom : <em>Ich lese oft</em>, <em>Heute lese ich oft</em>."
      }
    ],
    grammar: {
      title: "Lesen et sehen au présent",
      note: "<b>e → ie</b> avec <em>du</em> et <em>er/sie/es</em>. Avec <b>gerade</b>, on dit « en ce moment ».",
      table: {
        head: ["personne", "lesen", "sehen"],
        rows: [
          ["ich", "lese", "sehe"],
          ["du", "liest", "siehst"],
          ["er / sie / es", "liest", "sieht"],
          ["wir", "lesen", "sehen"],
          ["ihr", "lest", "seht"],
          ["sie / Sie", "lesen", "sehen"]
        ]
      },
      examples: [
        { tr: "Je suis en train de lire un livre.", note: "présent + gerade" },
        { tr: "Qu'est-ce que tu fais ?", note: "gerade = en ce moment" },
        { tr: "Il regarde la télé.", note: "fernsehen : fern à la fin" },
        { tr: "En ce moment, j'écris un message.", note: "im Moment en première position : le verbe suit" },
        { tr: "Nous écoutons une chanson." },
        { tr: "Elle est en train de téléphoner." }
      ]
    },
    vocab: [
      "en ce moment",
      "en ce moment",
      "lire",
      "écouter",
      "écrire",
      "téléphoner",
      "regarder la télévision",
      "apprendre, étudier",
      "le journal",
      "le téléphone portable",
      "le message",
      "la chanson"
    ],
    exercises: [
      {
        q: "Comment dis-tu « je suis en train de lire » (en ce moment) ?",
        opts: ["Ich lese gerade.", "Ich bin gerade lesend.", "Ich lesen gerade."],
        why: "On utilise le présent avec <b>gerade</b> : il n'y a pas de forme comme « être en train de »."
      },
      {
        q: "Que signifie « Was machst du gerade? »",
        opts: ["Que fais-tu d'habitude ?", "Que fais-tu en ce moment ?", "Qu'as-tu fait hier ?"],
        why: "<i>Gerade</i> veut dire « en ce moment »."
      },
      {
        q: "Complète : « Du ___ gerade ein Buch. » (lire)",
        hint: "lesen, du",
        why: "<i>Lesen</i> change <b>e → ie</b> avec <i>du</i> : <b>liest</b>."
      },
      {
        q: "Complète : « Er ___ gerade fern. » (regarder la télé, il)",
        hint: "fernsehen, er",
        why: "<i>Fernsehen</i> est séparable et, comme <i>sehen</i>, change <b>e → ie</b> : <b>sieht</b>, et <i>fern</i> va à la fin."
      },
      {
        q: "Complète : « Wir ___ gerade ein Lied. » (écouter)",
        hint: "hören, wir",
        why: "Avec <i>wir</i>, le présent de <i>hören</i> est <b>wir hören</b> : la forme est la même que l'infinitif."
      },
      {
        tr: "J'écris un message en ce moment.",
        why: "<i>Ich schreibe gerade eine Nachricht</i>. <i>Gerade schreibe ich eine Nachricht</i> est correct aussi, mais alors le sujet suit le verbe."
      },
      {
        q: "Traduis : « Mon frère est en train de lire le journal. » (utilise gerade)",
        why: "<i>Mein Bruder liest gerade die Zeitung</i> : avec <i>er</i> et <i>Bruder</i>, la voyelle change, <i>liest</i>."
      },
      {
        q: "Complète le dialogue.",
        tr: "Que fais-tu en ce moment ? Je lis un livre et mon frère regarde la télé.",
        why: "<i>Machst</i>, <i>lese</i>, <i>sieht ... fern</i> : aucune forme avec « être en train de », seulement le présent avec <i>gerade</i>."
      },
      {
        tr: "Moi, je suis en train de lire, et mon frère regarde la télévision en ce moment.",
        why: "Dans <i>sieht</i>, <b>ie</b> est un <b>i</b> long et le <b>h</b> ne se prononce pas ; dans la prononciation standard, le <b>s</b> initial est sonore, comme dans « rose »."
      },
      {
        tr: "J'écris un message et j'écoute une chanson.",
        why: "Dans <i>höre</i>, le <b>ö</b> est long, comme le « eu » de « peu ». Dans <i>Nachricht</i>, le premier <b>ch</b> est dur [x], un son qui n'existe pas en français, et le second est doux [ç]."
      }
    ]
  },
  "lesson:a1-u09-l4": {
    theme: "Une invitation",
    title: "On va au cinéma ?",
    objectives: [
      "proposer, accepter et refuser une invitation",
      "utiliser für, ohne, um, durch, gegen avec l'accusatif",
      "relier des phrases avec und, aber, oder, denn"
    ],
    theory: [
      {
        h: "Proposer, accepter, refuser",
        p: "Pour proposer : <em>Gehen wir ins Kino?</em> ou <em>Hast du Lust?</em> Pour accepter : <em>Ja, gern!</em>, <em>Gute Idee!</em> Pour refuser poliment : <em>Leider kann ich nicht</em> ou <em>Tut mir leid</em>, puis la raison avec <em>denn</em>. <em>Ins</em> est <em>in das</em> : ici, c'est une formule à apprendre telle quelle."
      },
      {
        h: "Cinq prépositions avec l'accusatif",
        p: "<strong>für</strong> (pour), <strong>ohne</strong> (sans), <strong>um</strong> (autour de ; avec les heures, à), <strong>durch</strong> (à travers), <strong>gegen</strong> (contre) veulent toujours l'<b>accusatif</b> : seul le masculin change. <em>Die Karte ist für den Freund</em>, <em>Wir gehen durch den Park</em>. Avec les pronoms : <em>für mich, für dich, ohne ihn, ohne sie</em>."
      },
      {
        contrast: "En français, « pour Marc » et « sans Marc » ne changent pas le nom, et les pronoms de « pour moi » et « sans lui » sont les formes toniques. En allemand, l'article masculin change : <em>für den Freund</em>, <em>ohne meinen Bruder</em> ; au féminin et au neutre, tu ne vois pas de différence : <em>für die Freundin</em>, <em>für das Kind</em>. « À huit heures » se dit avec <em>um</em> : <em>um acht Uhr</em>."
      },
      {
        h: "Und, aber, oder, denn",
        p: "Ces quatre mots relient deux phrases et <b>ne déplacent pas le verbe</b> : <em>Ich bin müde, aber ich gehe ins Kino</em>. Après <em>und</em>, <em>oder</em> et <em>aber</em>, le sujet identique peut s'omettre : <em>Ich gehe ins Kino und sehe einen Film</em>. Après <em>denn</em>, le sujet se répète toujours."
      },
      {
        trap: "Le français « parce que » est une expression unique : « je ne viens pas parce que je dois travailler ». En allemand, pour donner une raison, on utilise <em>denn</em> et le verbe reste en deuxième position : <em>Ich komme nicht, denn ich muss arbeiten</em>. <em>Denn</em> ressemble au « car » du français, mais s'emploie couramment à l'oral. Sont fausses <em>denn ich arbeiten muss</em> (verbe à la fin) et <em>denn muss ich arbeiten</em> (verbe en première position) ; avec un autre élément en tête, le verbe reste deuxième : <em>denn morgen muss ich arbeiten</em>. Un autre mot pour « parce que », <em>weil</em>, envoie le verbe à la fin : il viendra plus tard. Attention aussi à <em>gegen</em> : il veut dire « contre », mais avec les heures aussi « vers » (<em>gegen acht Uhr</em>, vers huit heures)."
      },
      {
        tip: "Pour refuser poliment : <em>Leider</em> + la raison avec <em>denn</em>. Avant <em>aber</em> et <em>denn</em>, la virgule est obligatoire."
      }
    ],
    grammar: {
      title: "Prépositions avec l'accusatif et conjonctions",
      note: "<b>für, ohne, um, durch, gegen</b> + accusatif ; <b>und, aber, oder, denn</b> ne déplacent pas le verbe.",
      table: {
        head: ["préposition", "sens", "exemple"],
        rows: [
          ["für", "pour", "Die Karte ist für dich."],
          ["ohne", "sans", "Ich trinke Kaffee ohne Zucker."],
          ["um", "autour de ; à (heures)", "Der Film beginnt um acht Uhr."],
          ["durch", "à travers", "Wir gehen durch den Park."],
          ["gegen", "contre", "Ich bin gegen den Plan."]
        ]
      },
      examples: [
        { tr: "On va au cinéma ?", note: "ins = in das" },
        { tr: "Le billet est pour toi.", note: "für + accusatif" },
        { tr: "Je bois mon café sans sucre.", note: "ohne + nom indénombrable : ici Zucker désigne la substance en général, donc en principe sans article" },
        { tr: "Le film commence à huit heures.", note: "um avec les heures" },
        { tr: "Nous traversons le parc, mais il pleut.", note: "aber ne déplace pas le verbe" },
        { tr: "Je ne viens pas, car je dois travailler.", note: "denn ne déplace pas le verbe : il reste en deuxième position" }
      ]
    },
    vocab: [
      "le cinéma",
      "le billet (aussi : la carte)",
      "l'idée",
      "la proposition",
      "l'envie",
      "malheureusement",
      "pour",
      "sans",
      "autour de ; à (avec les heures)",
      "à travers",
      "contre",
      "car, parce que (donne la raison)"
    ],
    exercises: [
      {
        q: "Comment proposes-tu à un ami d'aller au cinéma ?",
        opts: ["Gehen wir ins Kino?", "Wir ins Kino gehen?", "Gehen wir an Kino?"],
        why: "Une proposition est une question avec le verbe en première position : <i>Gehen wir ...?</i> <i>Ins</i> est <i>in das</i>."
      },
      {
        q: "Comment refuses-tu en donnant la raison ?",
        opts: ["Leider nicht, denn muss ich arbeiten.", "Leider nicht, denn ich arbeiten muss.", "Leider nicht, denn ich muss arbeiten."],
        why: "<b>Denn</b> n'occupe pas de position dans la phrase qui suit : le verbe conjugué reste en deuxième position, comme dans <i>denn ich muss arbeiten</i> (mais aussi <i>denn morgen muss ich arbeiten</i>). Les deux autres options ont le verbe à la fin ou en première position."
      },
      {
        q: "Complète : « Die Karte ist ___ dich. » (pour)",
        hint: "pour + accusatif",
        why: "<b>Für</b> veut l'accusatif : <i>für dich</i>."
      },
      {
        q: "Complète : « Ich trinke Kaffee ___ Zucker. » (sans)",
        hint: "sans",
        why: "<b>Ohne</b> + accusatif ; avec un nom indénombrable comme <i>Zucker</i>, l'article manque en général."
      },
      {
        q: "Associe chaque préposition à son sens.",
        pairs: ["pour", "sans", "à travers", "contre"]
      },
      {
        tr: "Nous traversons le parc.",
        why: "<i>Wir gehen durch den Park</i> : <i>durch</i> + accusatif, <i>den</i>. <i>Durch den Park gehen wir</i> est correct aussi."
      },
      {
        q: "Traduis : « Je ne viens pas, parce que je dois travailler. » (utilise denn)",
        why: "<i>Ich komme nicht, denn ich muss arbeiten</i> : après <i>denn</i>, le verbe conjugué reste en deuxième position."
      },
      {
        q: "Complète le dialogue.",
        tr: "On va au cinéma ? Malheureusement, je ne peux pas, car je dois travailler. Mais demain, j'ai le temps.",
        why: "<i>Ins</i> est <i>in das</i> ; <i>denn</i> donne la raison et ne déplace pas le verbe ; <i>ich habe Zeit</i> utilise <i>haben</i>."
      },
      {
        tr: "On va au cinéma ? Malheureusement, je ne peux pas, car je dois travailler.",
        why: "Dans <i>leider</i>, <b>ei</b> se lit comme « aï » et le <b>d</b> est sonore ; dans <i>Kino</i>, le premier <b>i</b> est long."
      },
      {
        tr: "Bonne idée ! On va au cinéma à huit heures ?",
        why: "Dans <i>Uhr</i>, le <b>h</b> ne se prononce pas et le <b>u</b> est long ; dans <i>Idee</i>, <b>ee</b> est un <b>e</b> long."
      }
    ]
  },
  "lesson:a1-u09-test": {
    theme: "Contrôle",
    title: "Contrôle de l'unité 9",
    objectives: ["vérifier es, gerade, les prépositions avec l'accusatif et les conjonctions"],
    theory: [
      {
        p: "Dix questions sur toute l'unité. On réussit avec 70 %. Ne relis pas les leçons pendant que tu réponds : si tu ne te souviens pas de quelque chose, mieux vaut retourner réviser."
      }
    ],
    exercises: [
      {
        q: "Complète : « Im Winter schneit ___ oft. » (En hiver, il neige souvent.)",
        hint: "le sujet des phrases sur la météo",
        why: "<b>Es</b> est le sujet et ne s'omet pas."
      },
      {
        q: "Complète : « Die Karte ist ___ meinen Bruder. » (pour)",
        hint: "pour + accusatif",
        why: "<b>Für</b> + accusatif : <i>meinen Bruder</i>."
      },
      {
        q: "Complète : « Ich komme nicht, ___ ich muss arbeiten. » (car)",
        hint: "donne la raison, le verbe reste en deuxième position",
        why: "<b>Denn</b> ne déplace pas le verbe."
      },
      {
        q: "Complète : « Wir gehen ___ den Park. » (à travers)",
        hint: "à travers",
        why: "<b>Durch</b> + accusatif : <i>den Park</i>."
      },
      {
        q: "Quelle phrase dit « je suis en train de lire » ?",
        opts: ["Ich bin lesen.", "Ich lesen gerade.", "Ich lese gerade."],
        why: "Présent avec <b>gerade</b> : <i>ich lese gerade</i>."
      },
      {
        q: "Quelle phrase est correcte ?",
        opts: ["Er geht ohne ich ins Kino.", "Er geht ohne mich ins Kino.", "Er geht ohne mir ins Kino."],
        why: "<i>Ohne</i> veut l'accusatif : <b>mich</b>."
      },
      {
        q: "Quelle phrase est correcte ?",
        opts: ["Ich bleibe zu Hause, denn ich bin müde.", "Ich bleibe zu Hause, denn ich müde bin.", "Ich bleibe zu Hause, denn bin ich müde."],
        why: "<i>Denn</i> n'occupe pas de position : le verbe conjugué reste en deuxième position, comme dans <i>denn ich bin müde</i> (mais aussi <i>denn heute bin ich müde</i>). Les deux autres options ont le verbe à la fin ou en première position."
      },
      {
        tr: "Samedi, nous allons au cinéma.",
        why: "<i>Am Samstag gehen wir ins Kino</i> : verbe en deuxième position. <i>Wir gehen am Samstag ins Kino</i> est correct aussi."
      },
      {
        tr: "Il pleut et il fait froid, mais moi, je vais au cinéma.",
        why: "Dans <i>regnet</i>, le <b>g</b> et le <b>n</b> se prononcent tous les deux, séparément (le <b>g</b> reste [g], comme dans « gnou » et pas comme dans « signe ») ; dans <i>Kino</i>, le premier <b>i</b> est long."
      },
      {
        tr: "Malheureusement, je ne peux pas, car je dois travailler à huit heures.",
        why: "Dans <i>muss</i>, <b>ss</b> est un <b>s</b> sourd et le <b>u</b> est bref ; <i>arbeiten</i> est à l'infinitif, à la fin de la phrase."
      }
    ]
  }
});
