/* ============================================================
   Textes dans la langue de l'élève (fr) pour data/core/a2-01.js, unité a2-u01.
   Les clés renvoient aux id de la couche neutre ; les tableaux se
   joignent par index, leur longueur doit donc correspondre à core.
   Vérifié par scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("fr", {
  "unit:a2-u01": {
    title: "Autrefois et aujourd'hui",
    grammarNote: "Präteritum de sein, haben et des modaux · als et wenn · weil avec le verbe en fin de proposition · verbes pronominaux et sich erinnern an"
  },
  "lesson:a2-u01-l1": {
    theme: "L'enfance",
    title: "Enfant, j'étais ...",
    objectives: [
      "décrire ton enfance avec war et hatte",
      "conjuguer sein, haben et können au Präteritum",
      "employer früher et damals pour situer un fait dans le passé"
    ],
    theory: [
      {
        h: "Le Präteritum de sein et haben",
        p: "Pour décrire comment étaient les choses autrefois, à l'oral, on emploie les formes simples de <strong>sein</strong> et <strong>haben</strong> : <em>ich war</em>, <em>ich hatte</em>. À la place du Perfekt (<em>Ich bin gewesen</em>, <em>Ich habe gehabt</em>), l'allemand parlé préfère très souvent ces formes courtes : <em>Als Kind war ich oft krank</em>, <em>Wir hatten einen großen Garten</em>. À la première et à la troisième personne du singulier, la forme est identique : <em>ich war, er war</em> ; <em>ich hatte, er hatte</em>."
      },
      {
        contrast: "Le français distingue l'<b>imparfait</b> (<em>j'étais, j'avais</em>), le <b>passé composé</b> (<em>j'ai été, j'ai eu</em>) et, à l'écrit littéraire, le <b>passé simple</b> (<em>je fus, j'eus</em>). Le Präteritum ne répartit pas les choses ainsi : <em>Ich war müde</em> peut correspondre à plusieurs temps français selon le contexte : <em>Als Kind war ich oft krank</em> = « Enfant, j'étais souvent malade » (imparfait), <em>Gestern war ich beim Arzt</em> = « Hier, j'ai été chez le médecin » ou « j'étais chez le médecin » (passé composé ou imparfait). Autre différence, petite mais constante : dans <em>als Kind</em> (« enfant ») il n'y a pas d'article, et <em>Kind</em> est neutre."
      },
      {
        trap: "Ne mélange pas les deux formes : <em>Ich habe war</em> n'existe pas. Avec <em>sein</em> et <em>haben</em>, on choisit le Präteritum (<em>Ich war</em>, <em>Ich hatte</em>) ou le Perfekt (<em>Ich bin gewesen</em>, <em>Ich habe gehabt</em>), jamais une forme hybride. Fais aussi attention à <em>wir hatten</em> et <em>wir waren</em> : à la première personne du pluriel, la terminaison est <em>-en</em>, comme à l'infinitif."
      },
      {
        tip: "Des repères de temps utiles pour le passé : <em>früher</em> (autrefois), <em>damals</em> (à cette époque), <em>als Kind</em> (enfant), <em>als Jugendlicher</em> (adolescent). Commence une phrase par l'un d'eux : le verbe reste en deuxième position : <em>Früher hatte ich ein rotes Fahrrad.</em>"
      }
    ],
    grammar: {
      title: "Präteritum de sein, haben et können",
      note: "À la 1re et à la 3e personne du singulier, la forme est identique. <i>Sein</i> prend les terminaisons simples <b>-st</b> (du warst) et <b>-t</b> (ihr wart), et <b>-en</b> pour wir et sie. <i>Haben</i> et <i>können</i> ont les radicaux <i>hatt-</i> et <i>konnt-</i> et prennent <b>-est</b> et <b>-et</b> (hattest, hattet, konntest, konntet), et <b>-en</b> pour wir et sie.",
      table: {
        head: ["personne", "sein", "haben", "können"],
        rows: [
          ["ich", "war", "hatte", "konnte"],
          ["du", "warst", "hattest", "konntest"],
          ["er, sie, es", "war", "hatte", "konnte"],
          ["wir", "waren", "hatten", "konnten"],
          ["ihr", "wart", "hattet", "konntet"],
          ["sie, Sie", "waren", "hatten", "konnten"]
        ]
      },
      examples: [
        { tr: "Enfant, j'étais souvent malade.", note: "als Kind : sans article" },
        { tr: "Nous avions un grand jardin.", note: "wir hatten" },
        { tr: "Mon grand-père avait un chien.", note: "er hatte, comme ich hatte" },
        { tr: "Autrefois, nous étions chaque été au bord de la mer.", note: "früher + sein au pluriel : waren" },
        { tr: "À cette époque, je n'avais pas de portable.", note: "damals" },
        { tr: "Comment était ton enfance ?", note: "Wie war ...?" }
      ]
    },
    vocab: [
      "l'enfance",
      "l'école maternelle",
      "l'école primaire",
      "l'enseignant (masculin)",
      "l'enseignante (féminin)",
      "le village",
      "la ville",
      "le jardin",
      "le chien",
      "le vélo",
      "autrefois",
      "à cette époque"
    ],
    exercises: [
      {
        tr: "Le Präteritum de sein, toutes les personnes.",
        why: "<i>War, warst, war, waren, wart, waren</i> : des formes irrégulières à connaître par cœur. À la 1re et à la 3e personne du singulier, la forme est identique."
      },
      {
        tr: "Le Präteritum de haben, toutes les personnes.",
        why: "<i>Hatte, hattest, hatte, hatten, hattet, hatten</i> : au Präteritum, <i>haben</i> est irrégulier : le radical est <i>hatt-</i>, avec les terminaisons <i>-e, -est, -e, -en, -et, -en</i>."
      },
      {
        tr: "Le Präteritum de können, toutes les personnes.",
        why: "<i>Konnte, konntest, konnte, konnten, konntet, konnten</i> : le tréma (Umlaut) disparaît, et la 1re et la 3e personne du singulier sont identiques."
      },
      {
        q: "Comment dis-tu « Enfant, j'avais un chien » ?",
        opts: ["Als Kind war ich einen Hund.", "Als Kind hatte ich einen Hund.", "Als Kind habe ich einen Hund war."],
        why: "Pour « avoir » on emploie <b>hatte</b> ; <i>sein</i> veut dire « être » et ne s'emploie pas avec un complément d'objet. <i>Hund</i> est masculin : <i>einen Hund</i> à l'accusatif."
      },
      {
        q: "Complète : « Früher ___ wir ein Fahrrad. » (nous avions, avec haben)",
        hint: "haben, Präteritum, wir",
        why: "<b>Hatten</b> : radical <i>hatt-</i> avec la terminaison <i>-en</i>, comme à l'infinitif. Après <i>früher</i>, le verbe reste en deuxième position."
      },
      {
        q: "Complète : « Als Kind ___ ich oft krank. » (j'étais, avec sein)",
        hint: "sein, Präteritum, ich",
        why: "<b>War</b> : à la première personne du singulier, il n'y a aucune terminaison."
      },
      {
        q: "Complète la phrase.",
        tr: "Autrefois, nous avions une maison au village. Elle était petite, mais mes grands-parents avaient un jardin.",
        why: "<i>Wir hatten</i>, <i>es war</i>, <i>die Großeltern hatten</i> : avec <i>wir</i> et avec un sujet pluriel, la forme est <i>hatten</i>."
      },
      {
        q: "Traduis : « Enfant, j'étais souvent malade. »",
        why: "<i>Als Kind war ich oft krank</i> : <i>als Kind</i> ouvre la phrase, puis viennent <i>war</i> et le sujet. <i>Ich war als Kind oft krank</i> convient aussi."
      },
      {
        tr: "Enfant, j'avais un chien, et il était très gentil.",
        why: "Dans <i>Hund</i>, le <b>u</b> est bref et le <b>d</b> final se prononce comme un <b>t</b> ; <i>lieb</i> se termine par un <b>p</b> sourd."
      },
      {
        tr: "Autrefois, nous étions chaque été au bord de la mer et nous nous amusions beaucoup.",
        why: "Dans <i>Früher</i>, le <b>ü</b> est long et se prononce comme le « u » français de « lune » ; dans <i>Spaß</i>, le <b>sp</b> initial sonne [ʃp] et le <b>ß</b> est un <b>s</b> sourd, comme dans « passe »."
      }
    ]
  },
  "lesson:a2-u01-l2": {
    theme: "Quand il était petit",
    title: "Quand j'étais petit, ...",
    objectives: [
      "relier deux événements avec als (un fait unique dans le passé) et wenn (un fait répété)",
      "placer le verbe conjugué en fin de proposition avec als et wenn",
      "commencer la principale par le verbe quand la subordonnée est en tête"
    ],
    theory: [
      {
        h: "Als pour un fait unique, wenn pour un fait répété",
        p: "L'allemand a deux mots pour le « quand » temporel. <strong>Als</strong> introduit un fait <b>unique</b> dans le passé : <em>Als ich zehn war, sind wir nach Berlin umgezogen</em>. <strong>Wenn</strong> introduit un fait <b>répété</b> (même dans le passé : <em>Immer wenn es geschneit hat, ...</em>) ou un fait <b>présent ou futur</b> : <em>Wenn ich müde bin, gehe ich früh ins Bett</em>. Dans la subordonnée, le verbe conjugué se place <b>en fin de proposition</b>."
      },
      {
        contrast: "Le français n'a qu'un seul <em>quand</em> (ou <em>lorsque</em>), et il ne change pas l'ordre des mots : <em>quand j'étais petit, nous habitions au village</em>. En allemand, il faut choisir entre <em>als</em> et <em>wenn</em>, et le verbe conjugué va à la fin : <em>Als ich klein war, ...</em>, pas « Als ich war klein ». Quand la subordonnée est en tête, la principale reprend avec le verbe conjugué juste après la virgule : <em>Als ich klein war, haben wir in einem Dorf gewohnt.</em> Pour la question directe, on emploie encore un autre mot, <em>wann</em> (« quand ? »)."
      },
      {
        trap: "Pour un fait répété dans le passé, le réflexe du francophone est « quand » = <em>als</em>, mais il faut <b>wenn</b> : <em>Immer wenn es geschneit hat, sind wir Schlitten gefahren</em> (chaque fois qu'il neigeait). Pour choisir, demande-toi si le fait a eu lieu une seule fois (<em>als</em>) ou plusieurs fois (<em>wenn</em>). <em>Als</em> ne s'emploie pas pour le présent ni pour le futur."
      },
      {
        tip: "<em>Als</em> est le même mot que dans le comparatif (<em>älter als ich</em>), mais ici il joue un autre rôle : il relie deux propositions. Avec le Perfekt dans la subordonnée, le verbe conjugué (l'auxiliaire) se place à la fin, après le participe : <em>Als wir in Wien gewohnt haben, ...</em>"
      }
    ],
    grammar: {
      title: "Als et wenn avec le verbe en fin de proposition",
      note: "Après <b>als</b> et <b>wenn</b>, le verbe conjugué se place <b>à la fin</b> ; si la subordonnée est en tête, la principale commence par le verbe.",
      table: {
        head: ["situation", "mot", "exemple"],
        rows: [
          ["un fait unique dans le passé", "als", "Als ich zehn war, sind wir umgezogen."],
          ["un fait répété dans le passé", "wenn", "Immer wenn es geschneit hat, sind wir Schlitten gefahren."],
          ["présent ou futur", "wenn", "Wenn ich müde bin, gehe ich früh ins Bett."]
        ]
      },
      examples: [
        { tr: "Quand j'étais petit, nous habitions dans un village.", note: "als : une période révolue ; puis verbe + sujet" },
        { tr: "Quand nous habitions à Vienne, j'allais souvent à vélo.", note: "Perfekt dans la subordonnée : gewohnt haben" },
        { tr: "Quand j'avais dix ans, nous avons déménagé à Berlin.", note: "als : un fait unique" },
        { tr: "Chaque fois qu'il neigeait, nous allions faire de la luge.", note: "immer wenn : fait répété" },
        { tr: "Chaque fois que ma grand-mère venait nous voir, elle faisait un gâteau.", note: "jedes Mal, wenn" },
        { tr: "Quand je suis fatigué, je me couche tôt.", note: "wenn : présent" }
      ]
    },
    vocab: [
      "le déménagement",
      "les vacances (uniquement au pluriel)",
      "l'été",
      "l'hiver",
      "la neige",
      "la luge",
      "la grand-mère",
      "le grand-père",
      "le voisin",
      "toujours",
      "souvent",
      "chaque fois"
    ],
    exercises: [
      {
        q: "Quel mot ? « ___ ich klein war, haben wir in einem Dorf gewohnt. » (quand j'étais petit)",
        opts: ["Als", "Wenn", "Wann"],
        why: "Une période révolue du passé : <b>als</b>. <i>Wenn</i> serait pour les faits répétés ou pour le présent."
      },
      {
        q: "Quel mot ? « ___ es geschneit hat, sind wir Schlitten gefahren. » (chaque fois qu'il neigeait)",
        opts: ["Als", "Wenn", "Wann"],
        why: "« Chaque fois » indique un fait répété : <b>wenn</b>, même si la phrase est au passé."
      },
      {
        q: "Quelle phrase est correcte ?",
        opts: [
          "Als ich klein war, wir haben viel gespielt.",
          "Als ich klein war, haben wir viel gespielt.",
          "Als ich war klein, haben wir viel gespielt."
        ],
        why: "Dans la subordonnée, le verbe va à la fin (<i>klein war</i>) ; la principale commence ensuite par le verbe : <i>haben wir</i>."
      },
      {
        q: "Quelles phrases sont correctes ? (plusieurs réponses)",
        opts: [
          "Als ich zehn war, sind wir umgezogen.",
          "Wenn ich müde bin, trinke ich Kaffee.",
          "Als ich Kind war, ich habe viel gespielt.",
          "Immer wenn wir Ferien hatten, sind wir ans Meer gefahren."
        ],
        why: "La troisième est fausse : après la subordonnée, la principale commence par le verbe (<i>habe ich viel gespielt</i>). Les autres respectent la distinction entre <i>als</i> et <i>wenn</i>."
      },
      {
        q: "Complète la phrase.",
        tr: "Quand j'étais petit, nous habitions dans un village.",
        why: "<i>Als</i> introduit une période révolue du passé ; le participe (<i>gewohnt</i>, ou aussi <i>gelebt</i>) ferme la principale."
      },
      {
        q: "Complète la phrase.",
        tr: "Chaque fois qu'il neigeait en hiver, nous allions faire de la luge.",
        why: "<i>Immer wenn</i> marque un fait répété, donc <b>wenn</b> (en minuscule, après <i>Immer</i>). Dans la principale, le verbe conjugué (<i>sind</i>) vient avant le sujet."
      },
      {
        q: "Complète la phrase.",
        tr: "Quand nous habitions à Vienne, j'allais souvent à vélo.",
        why: "Dans la subordonnée au Perfekt, le participe (<i>gewohnt</i>) précède l'auxiliaire (<i>haben</i>), qui se place à la fin de la subordonnée."
      },
      {
        q: "Traduis : « Quand j'avais dix ans, nous avons déménagé à Berlin. » (avec umziehen)",
        why: "<i>Als</i> pour un fait unique. Le Perfekt de <i>umziehen</i> se forme avec <b>sein</b> : <i>sind umgezogen</i>."
      },
      {
        tr: "Quand j'avais dix ans, nous avons déménagé à Berlin, et là-bas je n'avais pas d'amis.",
        why: "Dans <i>keine</i>, le <b>ei</b> se lit [aɪ̯], de « a » à « i » dans une seule syllabe ; dans <i>Freunde</i>, le <b>eu</b> est une diphtongue proche de « oï ». <i>Berlin</i> est accentué sur la dernière syllabe."
      },
      {
        tr: "Chaque fois qu'il neigeait, nous allions faire de la luge.",
        why: "Dans <i>geschneit</i> et <i>Schlitten</i>, le <b>sch</b> se lit [ʃ], comme le « ch » de « chat » ; <i>wenn</i> commence par un <b>w</b> prononcé comme le « v » français."
      }
    ]
  },
  "lesson:a2-u01-l3": {
    theme: "Règles et permissions",
    title: "Je devais, je pouvais, parce que ...",
    objectives: [
      "employer musste, konnte, wollte et durfte au Präteritum",
      "donner une raison avec weil et le verbe en fin de proposition",
      "raconter les règles et les interdits de l'enfance"
    ],
    theory: [
      {
        h: "Les modaux au Präteritum",
        p: "Pour dire ce qu'on devait, voulait ou pouvait faire enfant, on emploie les modaux au <strong>Präteritum</strong> : <em>ich musste</em> (je devais), <em>ich konnte</em> (je pouvais, j'étais capable de), <em>ich durfte</em> (j'avais le droit de), <em>ich wollte</em> (je voulais). Au Präteritum, <em>müssen, können, dürfen</em> perdent le tréma (Umlaut), alors que <em>wollen</em> et <em>sollen</em> n'en avaient pas. Le modal s'emploie avec un infinitif en fin de phrase : <em>Ich musste jeden Tag Hausaufgaben machen.</em>"
      },
      {
        contrast: "Le français a un seul verbe, <em>pouvoir</em>, pour deux idées différentes : <em>je ne pouvais pas sortir</em> peut vouloir dire que j'en étais empêché (<em>Ich konnte nicht ausgehen</em>) ou que ce n'était pas permis (<em>Ich durfte nicht ausgehen</em>). En allemand, il faut choisir : <em>können</em> exprime la capacité ou la possibilité, <em>dürfen</em> la permission. De plus, comme pour <em>sein</em> et <em>haben</em>, l'allemand parlé préfère le Präteritum au Perfekt : <em>Ich konnte nicht kommen</em> est plus naturel que <em>Ich habe nicht kommen können</em>. Le français parlé, lui, emploie plutôt l'imparfait pour ces verbes."
      },
      {
        trap: "Avec <b>weil</b> (« parce que »), le verbe conjugué va à la fin, après l'infinitif : <em>..., weil ich arbeiten musste</em>, pas « weil ich musste arbeiten » ni « weil musste ich arbeiten ». En français, l'ordre des mots ne change pas après « parce que », et c'est pourquoi l'erreur est si fréquente. La virgule avant <em>weil</em> est obligatoire."
      },
      {
        tip: "Pour donner une raison sans déplacer le verbe, on peut employer <em>denn</em> (<em>Ich war müde, denn ich musste früh aufstehen</em>), mais ici, il faut s'exercer à employer <em>weil</em>. À la question <em>Warum?</em>, tu peux répondre par la seule subordonnée : <em>Warum warst du traurig? Weil ich nicht ins Kino gehen durfte.</em>"
      }
    ],
    grammar: {
      title: "Modaux au Präteritum et weil",
      note: "Au Präteritum, les modaux perdent le tréma (sauf <b>wollte</b>, qui n'en avait pas). Après <b>weil</b>, le verbe conjugué va à la fin.",
      table: {
        head: ["infinitif", "Präteritum (ich)", "sens", "avec weil"],
        rows: [
          ["müssen", "musste", "je devais", "weil ich arbeiten musste"],
          ["können", "konnte", "je pouvais, j'étais capable de", "weil ich nicht schwimmen konnte"],
          ["dürfen", "durfte", "j'avais le droit de", "weil ich nicht ins Kino gehen durfte"],
          ["wollen", "wollte", "je voulais", "weil ich spielen wollte"]
        ]
      },
      examples: [
        { tr: "Je devais faire mes devoirs tous les jours.", note: "ich musste + infinitif en fin de phrase" },
        { tr: "Nous n'avions pas le droit de regarder longtemps la télévision.", note: "dürfen : wir durften" },
        { tr: "Je voulais un chien, mais mes parents ne voulaient pas.", note: "wollen : ich wollte, sie wollten" },
        { tr: "J'étais triste parce que je ne pouvais pas aller au cinéma.", note: "weil : le verbe durfte va à la fin" },
        { tr: "Je ne pouvais pas venir parce que je devais travailler.", note: "weil ich arbeiten musste" },
        { tr: "Nous pouvions jouer dans le jardin parce qu'il faisait beau.", note: "weil ... war" }
      ]
    },
    vocab: [
      "le devoir (à faire à la maison)",
      "la règle",
      "la télévision, le téléviseur",
      "l'argent de poche",
      "les sucreries, les bonbons (pluriel de <i>die Süßigkeit</i>)",
      "le portable",
      "l'anniversaire",
      "l'animal de compagnie",
      "la punition",
      "sévère",
      "permis",
      "interdit"
    ],
    exercises: [
      {
        q: "Quelle phrase est correcte ?",
        opts: [
          "Ich konnte nicht kommen, weil musste ich arbeiten.",
          "Ich konnte nicht kommen, weil ich musste arbeiten.",
          "Ich konnte nicht kommen, weil ich arbeiten musste."
        ],
        why: "Après <i>weil</i>, le verbe conjugué (<i>musste</i>) va à la fin, après l'infinitif <i>arbeiten</i>."
      },
      {
        q: "Complète : « Ich ___ jeden Tag Hausaufgaben machen. » (je devais, avec müssen)",
        hint: "müssen, Präteritum, ich",
        why: "<b>Musste</b> : sans tréma et avec la terminaison <i>-te</i> ; avec <i>ich</i>, on n'ajoute rien d'autre."
      },
      {
        q: "Complète : « Wir ___ nicht lange fernsehen. » (nous n'avions pas le droit, avec dürfen)",
        hint: "dürfen, Präteritum, wir",
        why: "<b>Durften</b> : <i>dürfen</i> perd le tréma et, avec <i>wir</i>, la terminaison est <i>-en</i>."
      },
      {
        q: "Complète : « Ich war traurig, ___ ich nicht ins Kino gehen durfte. » (parce que, avec weil)",
        hint: "emploie weil",
        why: "<b>Weil</b> envoie le verbe à la fin : <i>..., weil ich nicht ins Kino gehen durfte</i>."
      },
      {
        q: "Associe chaque forme à son sens.",
        pairs: ["je devais", "je pouvais, j'étais capable de", "je voulais", "j'avais le droit de"]
      },
      {
        q: "Remets les mots dans l'ordre.",
        tr: "Je ne pouvais pas venir, parce que je devais travailler.",
        why: "Dans la principale, <i>konnte</i> est en deuxième position ; dans la subordonnée <i>weil ich arbeiten musste</i>, le verbe conjugué va à la fin."
      },
      {
        q: "Complète la phrase.",
        tr: "J'étais fatigué parce que je devais me lever tôt.",
        why: "Le verbe à particule séparable reste entier avec le modal : <i>früh aufstehen musste</i>, avec <i>musste</i> à la fin."
      },
      {
        q: "Traduis : « Je ne pouvais pas jouer parce que je devais faire mes devoirs. »",
        why: "<i>Ich konnte nicht spielen, weil ich Hausaufgaben machen musste</i>. <i>Durfte</i> est accepté aussi, si tu veux dire qu'on te l'interdisait."
      },
      {
        tr: "Je n'avais pas le droit de regarder longtemps la télévision, parce que je devais me coucher tôt.",
        why: "Dans <i>durfte</i>, le <b>u</b> est bref ; dans <i>früh</i>, le <b>ü</b> est long. Dans <i>lange</i>, le <b>ng</b> se lit comme une seule nasale [ŋ], celle de « camping », sans consonne [g]."
      },
      {
        tr: "Enfant, je n'avais pas le droit de manger des sucreries, parce que mes parents étaient sévères.",
        why: "Dans <i>Süßigkeiten</i>, le <b>ü</b> est long et le <b>ß</b> est un <b>s</b> sourd ; <i>streng</i> commence par [ʃtr], : le <b>st</b> initial d'un mot se lit [ʃt], avec le son « ch » du français."
      }
    ]
  },
  "lesson:a2-u01-l4": {
    theme: "Les souvenirs",
    title: "Tu te souviens ?",
    objectives: [
      "employer les pronoms réfléchis mich, dich, sich, uns, euch",
      "dire sich erinnern an et sich freuen auf avec le bon cas",
      "former le Perfekt des verbes pronominaux avec haben"
    ],
    theory: [
      {
        h: "Les verbes pronominaux : mich, dich, sich, uns, euch",
        p: "Un verbe est <b>réfléchi</b> quand l'action revient sur le sujet : <em>Ich erinnere mich</em> (je me souviens). Le pronom change avec la personne : <em>mich, dich, sich, uns, euch, sich</em>. Dans la principale avec le sujet en première position, il se place après le verbe conjugué : <em>Du erinnerst dich an unsere Schule.</em> Dans les questions, le verbe vient en premier et le pronom suit le sujet : <em>Erinnerst du dich an unsere Schule?</em> Au Perfekt, l'auxiliaire est <em>haben</em> et le pronom se place en général au début du Mittelfeld, après un éventuel sujet pronominal : <em>Wir haben uns am Bahnhof getroffen. Gestern haben wir uns getroffen. Gestern habe ich mich mit Anna getroffen.</em> Dans la subordonnée, il suit le sujet : <em>weil ich mich erinnere</em>. Avec <em>sich erinnern</em> et <em>sich freuen</em>, la préposition et son cas s'apprennent avec le verbe : <em>sich erinnern an</em> + accusatif, <em>sich freuen auf</em> + accusatif (attendre avec joie quelque chose à venir), <em>sich freuen über</em> + accusatif (être content de quelque chose de présent ou de passé)."
      },
      {
        contrast: "Le français a lui aussi beaucoup de verbes pronominaux, mais ce ne sont pas les mêmes. Le pronom se place <b>avant</b> le verbe (<em>je me souviens</em>), alors qu'en allemand il vient après le verbe conjugué quand le sujet ouvre la phrase. Surtout, <em>se lever</em> et <em>se réveiller</em> ne sont <b>pas</b> pronominaux en allemand (<em>aufstehen, aufwachen</em>), alors que <em>sich ärgern</em> (se fâcher) et <em>sich setzen</em> (s'asseoir) le sont. Au passé composé, les verbes pronominaux français se forment avec <em>être</em> (<em>nous nous sommes rencontrés</em>) ; en allemand, c'est <em>haben</em> : <em>Wir haben uns getroffen</em>. Enfin, <em>se souvenir de</em> devient <em>sich erinnern an</em>, avec <em>an</em> et non <em>von</em> ou <em>über</em>."
      },
      {
        trap: "À la 1re et à la 2e personne, le pronom a deux formes : l'accusatif <em>mich, dich</em> et le datif <em>mir, dir</em>. Avec <em>sich erinnern an</em>, il faut l'<b>accusatif</b> : <em>Ich erinnere mich</em>, pas « Ich erinnere mir ». Fais aussi attention à <em>erinnern</em> sans pronom : <em>Ich erinnere dich an den Termin</em> signifie « je te rappelle le rendez-vous », ce qui est autre chose."
      },
      {
        tip: "Apprends toujours le verbe pronominal avec sa préposition : <em>sich erinnern an</em>, <em>sich freuen auf/über</em>, <em>sich interessieren für</em>, <em>sich ärgern über</em>, <em>sich treffen mit</em>. Un verbe, une préposition, un cas."
      }
    ],
    grammar: {
      title: "Le pronom réfléchi",
      note: "Dans la principale avec sujet initial, après le verbe conjugué (avec un sujet pronominal postposé, après lui : <i>Gestern habe ich mich ...</i> ; dans la subordonnée : <i>weil ich mich erinnere</i>). À la 3e personne (singulier et pluriel), le pronom est toujours <b>sich</b>.",
      table: {
        head: ["personne", "pronom", "exemple"],
        rows: [
          ["ich", "mich", "Ich erinnere mich an meine Lehrerin."],
          ["du", "dich", "Erinnerst du dich an unsere Schule?"],
          ["er, sie, es", "sich", "Er freut sich auf die Ferien."],
          ["wir", "uns", "Wir haben uns am Bahnhof getroffen."],
          ["ihr", "euch", "Freut ihr euch auf das Klassentreffen?"],
          ["sie, Sie", "sich", "Sie ärgern sich über das Wetter."]
        ]
      },
      examples: [
        { tr: "Tu te souviens de notre école ?", note: "sich erinnern an + accusatif" },
        { tr: "Je me souviens bien de mon institutrice.", note: "ich erinnere mich" },
        { tr: "Nous nous sommes rencontrés à la gare.", note: "Perfekt avec haben : haben uns getroffen" },
        { tr: "Il attend les vacances avec impatience.", note: "sich freuen auf + accusatif" },
        { tr: "Elle s'énerve à cause du temps.", note: "sich ärgern über + accusatif" },
        { tr: "Je m'intéresse aux vieilles photos.", note: "sich interessieren für + accusatif" }
      ]
    },
    vocab: [
      "se souvenir (de)",
      "être content, se réjouir (de, pour)",
      "se fâcher (à cause de)",
      "retrouver quelqu'un / se retrouver avec quelqu'un (mit + datif)",
      "s'intéresser (à)",
      "s'asseoir",
      "le souvenir",
      "la photo",
      "l'album",
      "la rencontre entre anciens camarades de classe",
      "le camarade de classe",
      "le plaisir"
    ],
    exercises: [
      {
        q: "Quelle phrase est correcte ?",
        opts: ["Ich erinnere mir an meine Schule.", "Ich erinnere mich an meine Schule.", "Ich erinnere mich meine Schule."],
        why: "<i>Sich erinnern</i> veut l'accusatif <b>mich</b> et la préposition <b>an</b>."
      },
      {
        q: "Complète : « Erinnerst du ___ an unsere Lehrerin ? » (le pronom réfléchi)",
        hint: "du : accusatif",
        why: "<b>Dich</b> : le pronom réfléchi de la 2e personne du singulier à l'accusatif."
      },
      {
        q: "Complète : « Wir freuen ___ auf die Ferien. » (le pronom réfléchi)",
        hint: "wir : accusatif",
        why: "<b>Uns</b> : pour <i>wir</i>, le pronom réfléchi est <i>uns</i>."
      },
      {
        q: "Associe chaque verbe à son sens.",
        pairs: ["se souvenir", "se réjouir", "se fâcher", "s'intéresser"]
      },
      {
        q: "Remets les mots dans l'ordre.",
        tr: "Je me souviens bien de mon institutrice.",
        why: "Le pronom réfléchi suit le verbe conjugué (<i>erinnere mich</i>) ; <i>an</i> introduit ce dont on se souvient."
      },
      {
        q: "Complète la phrase.",
        tr: "Hier, j'ai retrouvé Anna et nous nous sommes souvenus de l'école.",
        why: "Au Perfekt, l'auxiliaire est <i>haben</i> : <i>habe mich ... getroffen</i> et <i>haben uns ... erinnert</i>."
      },
      {
        q: "Traduis : « Je me souviens bien de mon école. »",
        why: "<i>Ich erinnere mich gut an meine Schule</i> : <i>an</i> + accusatif, et <i>gut</i> se place après le pronom."
      },
      {
        q: "Un ancien camarade te reconnaît.",
        setting: "Un ancien camarade de classe te salue dans la rue.",
        lines: [
          { tr: "Salut Lena ! Tu te souviens de moi ?" },
          { tr: "Réponds oui et dis que tu te souviens de lui.", answerTr: "Oui, je me souviens de toi !" },
          { tr: "Nous étions ensemble à l'école primaire." },
          { tr: "Réponds que vous vous êtes souvent retrouvés après l'école.", answerTr: "Oui, et nous nous sommes souvent retrouvés après l'école." },
          { tr: "Tu as hâte d'être à cette rencontre entre anciens camarades ?" },
          { tr: "Réponds que tu as très hâte.", answerTr: "Oui, j'ai très hâte !" }
        ]
      },
      {
        tr: "Nous nous sommes souvent retrouvés après l'école, et je me souviens avec plaisir de cette période.",
        why: "Dans <i>ich</i>, le <b>ch</b> après une voyelle antérieure se prononce [ç], un souffle que le français n'a pas : on le produit avec la langue haute, presque comme un « i » soufflé. Dans <i>erinnere</i>, l'accent tombe sur la deuxième syllabe, et <i>er-</i> est atone."
      },
      {
        tr: "Je me souviens bien de mon école primaire et je me réjouis de retrouver mes anciens camarades.",
        why: "Dans <i>Grundschule</i>, le <b>sch</b> se lit [ʃ] et le <b>d</b> de <i>Grund</i> se prononce comme un <b>t</b> ; dans <i>Klassentreffen</i>, le <b>ss</b> est un <b>s</b> sourd."
      }
    ]
  },
  "lesson:a2-u01-test": {
    theme: "Évaluation",
    title: "Évaluation de l'unité 1",
    objectives: ["vérifier le Präteritum de sein, haben et des modaux, als pour une période révolue, weil et la place du verbe dans la subordonnée"],
    theory: [
      {
        p: "Dix questions sur toute l'unité. Il faut 70 % pour réussir. Ne relis pas les leçons pendant que tu réponds : si tu ne te souviens pas de quelque chose, mieux vaut revenir réviser."
      }
    ],
    exercises: [
      {
        tr: "Le Präteritum de sein, toutes les personnes.",
        why: "<i>War, warst, war, waren, wart, waren</i>."
      },
      {
        tr: "Le Präteritum de müssen, toutes les personnes.",
        why: "<i>Musste, musstest, musste, mussten, musstet, mussten</i> : sans tréma."
      },
      {
        q: "Complète : « Gestern ___ wir keine Zeit. » (nous n'avions pas, avec haben)",
        hint: "haben, Präteritum, wir",
        why: "<b>Hatten</b> : radical <i>hatt-</i> et terminaison <i>-en</i>."
      },
      {
        q: "Complète : « Meine Eltern haben viel gearbeitet, ___ ich klein war. » (quand, une période révolue)",
        hint: "un fait unique dans le passé",
        why: "Une période révolue du passé : <b>als</b>."
      },
      {
        q: "Complète : « Ich konnte nicht kommen, ___ ich krank war. » (parce que, avec weil)",
        hint: "emploie weil",
        why: "<b>Weil</b> introduit la raison et envoie le verbe (<i>war</i>) à la fin."
      },
      {
        q: "Quelle phrase est correcte ?",
        opts: [
          "Ich bleibe zu Hause, weil ich müde bin.",
          "Ich bleibe zu Hause, weil ich bin müde.",
          "Ich bleibe zu Hause, weil bin ich müde."
        ],
        why: "Après <i>weil</i>, le verbe conjugué va à la fin : <i>weil ich müde bin</i>."
      },
      {
        q: "Complète la phrase.",
        tr: "Quand j'étais petit, j'avais un chien.",
        why: "<i>War</i> à la fin de la subordonnée ; ensuite la principale commence par le verbe : <i>hatte ich</i>."
      },
      {
        q: "Complète la phrase.",
        tr: "Je ne pouvais pas jouer, parce que je devais faire mes devoirs.",
        why: "<i>Konnte</i> et <i>durfte</i> sont tous deux possibles, selon qu'il s'agit d'une impossibilité ou d'une permission. Dans la subordonnée, <i>machen</i> précède le modal <i>musste</i>, qui ferme la phrase."
      },
      {
        tr: "Quand j'étais petit, je n'avais pas le droit de regarder longtemps la télévision, parce que mes parents étaient sévères.",
        why: "Dans <i>durfte</i>, le <b>u</b> est bref ; dans <i>streng</i>, le <b>str</b> commence par [ʃtr] ; le <b>ng</b> est une seule nasale [ŋ]."
      },
      {
        tr: "Quand j'étais enfant, j'avais un chien, et je pouvais jouer avec lui tous les jours.",
        why: "Dans <i>Hund</i>, le <b>d</b> final se prononce comme un <b>t</b> ; dans <i>jeden Tag</i>, le <b>g</b> final est un <b>k</b> sourd."
      }
    ]
  },
  "unit:a2-u02": {
    title: "En voyage",
    grammarNote: "wohin ? avec nach, zu et in + accusatif · présent avec un indicateur de temps et Futur I · Perfekt et registre à l'hôtel · wenn + Perfekt pour une action future déjà accomplie"
  },
  "lesson:a2-u02-l1": {
    theme: "À la gare",
    title: "À la gare : nach Wien, in die Schweiz",
    objectives: [
      "dire où tu vas avec nach, in + accusatif et zu",
      "distinguer wohin ? (destination) de wo ? (position)",
      "acheter un billet et demander des renseignements à la gare"
    ],
    theory: [
      {
        h: "Wohin ? nach, in ou zu",
        p: "À la question <b>wohin ?</b> (vers où ?), l'allemand choisit la préposition selon la destination. Avec les <b>villes et les pays sans article</b>, on emploie <strong>nach</strong> : <em>Ich fahre nach Wien. Wir fliegen nach Italien.</em> Avec les <b>pays qui ont un article</b>, on emploie <strong>in</strong> + <b>accusatif</b> : <em>Wir fahren in die Schweiz.</em> Vers <b>une personne</b> et, en général, vers un <b>bâtiment ou un lieu précis</b>, on emploie <strong>zu</strong> + datif : <em>Ich fahre zu meiner Tante. Wir gehen zum Bahnhof.</em> Avec <em>zu</em> + article, il y a des contractions : <em>zum</em> (zu dem) et <em>zur</em> (zu der)."
      },
      {
        contrast: "Le français aussi change de préposition selon la destination : <em>à</em> pour les villes (<em>je vais à Vienne</em>), <em>en</em> ou <em>au</em> pour les pays (<em>en Suisse, au Portugal</em>), <em>chez</em> pour les personnes (<em>chez ma tante</em>). Mais le partage n'est pas le même : le français regarde le genre du pays (<em>en</em> + féminin, <em>au</em> + masculin ; exception : les pays masculins commençant par une voyelle prennent aussi <em>en</em>, comme <em>en Iran</em> ou <em>en Afghanistan</em>), l'allemand regarde s'il y a un article. <em>Italien</em>, <em>Deutschland</em>, <em>Österreich</em> n'en ont pas et prennent <em>nach</em>, comme les villes ; <em>die Schweiz</em>, <em>die Türkei</em>, <em>die USA</em> en ont un et prennent <em>in die</em>. Autre différence : en français, la même préposition sert pour aller quelque part et pour y être (<em>je vais en Suisse</em>, <em>j'habite en Suisse</em>). En allemand, <em>in die Schweiz</em> (accusatif) dit où l'on va et <em>in der Schweiz</em> (datif) où l'on est. <em>Chez ma tante</em> se partage aussi : <em>zu meiner Tante</em> (où je vais) et <em>bei meiner Tante</em> (où je suis)."
      },
      {
        trap: "Le cas dépend de ce que la phrase exprime. Avec <b>wohin ?</b> (mouvement vers un lieu), <em>in</em> prend l'<b>accusatif</b> : <em>Wir fahren in die Schweiz</em>. Avec <b>wo ?</b> (position, où l'on est), il prend le <b>datif</b> : <em>Meine Tante wohnt in der Schweiz</em>. Deux phrases presque identiques, deux cas différents, et <em>die</em> contre <em>der</em> est le seul indice. Attention aussi à <em>nach die Schweiz</em> : cela n'existe pas, car <em>nach</em> ne s'emploie pas avec les pays qui ont un article."
      },
      {
        tip: "À la gare, quelques phrases toutes faites te suffiront : <em>Eine Fahrkarte nach Wien, bitte.</em> <em>Einfach oder hin und zurück?</em> (aller simple ou aller-retour ?) <em>Von welchem Gleis fährt der Zug ab?</em> Apprends <em>die Schweiz</em> avec son article, comme un seul bloc."
      }
    ],
    grammar: {
      title: "Wohin ? nach, in + accusatif, zu",
      note: "La préposition dépend de la destination. <b>nach</b> s'emploie sans article, <b>zu</b> prend le datif (<i>zum</i>, <i>zur</i>), <b>in</b> avec wohin ? prend l'accusatif.",
      table: {
        head: ["destination", "préposition", "exemple"],
        rows: [
          ["villes, pays sans article", "nach", "nach Wien, nach Italien"],
          ["pays avec article", "in + accusatif", "in die Schweiz, in die Türkei"],
          ["personnes", "zu + datif", "zu meiner Tante, zum Arzt"],
          ["bâtiments, lieux précis", "zu + datif", "zum Bahnhof, zur Post"],
          ["position (wo ?)", "in + datif", "in der Schweiz"]
        ]
      },
      examples: [
        { tr: "Je vais à Vienne.", note: "nach + ville, sans article" },
        { tr: "Nous allons en Italie en avion.", note: "nach + pays sans article" },
        { tr: "En été, ils vont en Suisse.", note: "wohin ? in + accusatif : in die Schweiz" },
        { tr: "Il va chez sa tante.", note: "zu + datif : zu seiner Tante" },
        { tr: "Nous allons à la gare.", note: "zu + datif : zum (zu dem) Bahnhof" },
        { tr: "Ma tante habite en Suisse.", note: "wo ? in + datif : in der Schweiz" }
      ]
    },
    vocab: [
      "la gare",
      "le train",
      "la voie (ferrée)",
      "le billet de train",
      "l'horaire (des trains)",
      "le départ",
      "l'arrivée",
      "la Suisse",
      "le pays",
      "le renseignement (guichet d'information)",
      "aller simple",
      "aller-retour"
    ],
    exercises: [
      {
        q: "Complète : « Wohin fährst du? Ich fahre ___ Wien. »",
        opts: ["nach", "in", "zu"],
        why: "Avec les villes sans article, on emploie <b>nach</b>. <i>In Wien</i> dit où l'on est, pas où l'on va."
      },
      {
        q: "Tu dis que vous allez en Suisse. Quelle phrase est correcte ?",
        opts: ["Wir fahren nach die Schweiz.", "Wir fahren in die Schweiz.", "Wir fahren in der Schweiz."],
        why: "<i>Die Schweiz</i> a un article : il faut <b>in</b> + accusatif (<i>in die Schweiz</i>). <i>In der Schweiz</i> est le datif et dit où l'on est."
      },
      {
        q: "Complète : « Morgen fliege ich ___ Italien. » (vers un pays sans article)",
        hint: "nach, in ou zu ?",
        why: "<i>Italien</i> n'a pas d'article, donc <b>nach</b>, comme avec les villes."
      },
      {
        q: "Complète : « Ich fahre ___ meiner Tante. » (vers une personne)",
        hint: "préposition + datif",
        why: "Vers une personne, on emploie <b>zu</b> + datif : <i>zu meiner Tante</i>."
      },
      {
        q: "Complète la phrase.",
        tr: "Je vais à Vienne. Ensuite nous allons en Suisse, et le soir je vais chez mon ami.",
        why: "Trois destinations, trois prépositions : <i>nach Wien</i>, <i>in die Schweiz</i> (accusatif, pays avec article), <i>zu meinem Freund</i> (personne, datif)."
      },
      {
        q: "Associe chaque destination à sa traduction.",
        pairs: ["à Vienne", "en Suisse (destination)", "chez ma tante", "à la gare"]
      },
      {
        q: "Traduis (verbe : fahren) : « Demain, nous allons en Suisse. »",
        why: "<i>Morgen fahren wir in die Schweiz</i> : <i>fahren</i> pour un moyen de transport ; <i>reisen</i> est une autre possibilité. L'ordre peut changer (<i>Wir fahren morgen ...</i>), le verbe conjugué reste en deuxième position."
      },
      {
        q: "Au guichet de la gare.",
        setting: "Tu achètes un billet pour Vienne.",
        lines: [
          { tr: "Bonjour. Où allez-vous ?" },
          { tr: "Réponds que tu vas à Vienne.", answerTr: "Je vais à Vienne." },
          { tr: "Aller simple ou aller-retour ?" },
          { tr: "Réponds : aller-retour, s'il vous plaît.", answerTr: "Aller-retour, s'il vous plaît." },
          { tr: "Et ensuite, vous continuez votre voyage ?" },
          { tr: "Réponds qu'après tu vas chez ta tante.", answerTr: "Oui, après je vais chez ma tante." }
        ]
      },
      {
        tr: "Bonjour, je voudrais un billet pour Vienne, aller-retour, s'il vous plaît.",
        why: "Dans <i>Fahrkarte</i>, le premier <b>a</b> est long ; dans <i>Wien</i>, le <b>W</b> se lit [v] et <b>ie</b> est un <b>i</b> long ; <i>zurück</i> a un <b>ü</b> bref."
      },
      {
        tr: "En été, je vais en Suisse, puis chez ma tante à Vienne.",
        why: "Dans <i>Schweiz</i>, <b>sch</b> se lit [ʃ] (comme le <i>ch</i> français de « chat »), <b>w</b> est [v], <b>ei</b> sonne [aɪ] et le <b>z</b> final est [ts]. Dans <i>Sommer</i>, le <b>S</b> initial devant une voyelle est en général sonore [z], et non sourd comme en français."
      }
    ]
  },
  "lesson:a2-u02-l2": {
    theme: "Projets de voyage",
    title: "Demain je pars, je partirai",
    objectives: [
      "parler du futur avec le présent et un indicateur de temps",
      "former le Futur I avec werden + infinitif en fin de phrase",
      "reconnaître quand le Futur I est utile (promesse, décision, prévision)"
    ],
    theory: [
      {
        h: "Le futur : présent avec un indicateur de temps, ou Futur I",
        p: "Pour parler du futur, l'allemand emploie le plus souvent le <b>présent</b> avec un indicateur de temps : <em>Morgen fahre ich nach Wien. Nächste Woche fliegen wir nach Spanien.</em> Il existe aussi le <strong>Futur I</strong> : <em>werden</em> conjugué en deuxième position et l'<b>infinitif à la fin</b> de la phrase : <em>Ich werde dich morgen anrufen. Wir werden im Sommer in die Schweiz fahren.</em> On l'emploie pour une promesse, une décision, une prévision (<em>Es wird heute Abend regnen</em>) ou quand il n'y a pas d'indicateur de temps."
      },
      {
        contrast: "Le français a un futur simple (<em>je partirai, j'irai</em>) très courant et un futur proche (<em>je vais partir</em>), construit comme le Futur I allemand : un auxiliaire conjugué et un infinitif. Mais <em>werden</em> n'est pas « aller » : <em>ich gehe</em> ne fait pas un futur. En français, on dit aussi <em>demain je pars</em> ; en allemand, ce présent avec <em>morgen</em>, <em>nächste Woche</em>, <em>bald</em> est la forme normale, et le Futur I, tout à fait correct, est moins fréquent : <em>Morgen werde ich nach Wien fahren</em> se dit, mais <em>Morgen fahre ich nach Wien</em> est plus habituel. Au Futur I, le verbe plein ne se conjugue pas : il reste à l'infinitif, à la fin, comme dans <em>Ich werde fahren</em>."
      },
      {
        trap: "Avec le Futur I, le verbe plein reste à l'infinitif : <em>Ich werde morgen nach Wien fahren</em>, et non « Ich werde fahre ». Avec un verbe à particule séparable, l'infinitif reste d'un seul bloc : <em>Ich werde dich anrufen</em>. Attention : <em>werden</em> est aussi un verbe plein qui signifie « devenir » : <em>Er wird Arzt</em> (il devient médecin), <em>Es wird kalt</em> (il commence à faire froid). S'il n'y a pas d'infinitif à la fin, ce n'est pas un futur."
      },
      {
        tip: "Cherche d'abord un indicateur de temps : <em>morgen, nächste Woche, im Sommer, bald, am Wochenende</em>. S'il y en a un, le présent suffit. Si tu veux donner un ton de promesse ou de décision (<em>Ich werde es nicht vergessen</em>), emploie le Futur I. Dans les deux cas, la première position peut être le temps : <em>Morgen fahre ich ...</em>, avec le verbe en deuxième position."
      }
    ],
    grammar: {
      title: "Le Futur I avec werden",
      note: "<b>werden</b> se conjugue en deuxième position, le verbe plein va <b>à l'infinitif en fin de phrase</b>. Avec un indicateur de temps, le présent est la forme normale.",
      table: {
        head: ["personne", "werden", "exemple"],
        rows: [
          ["ich", "werde", "Ich werde fahren."],
          ["du", "wirst", "Du wirst fahren."],
          ["er, sie, es", "wird", "Es wird regnen."],
          ["wir", "werden", "Wir werden fliegen."],
          ["ihr", "werdet", "Ihr werdet ankommen."],
          ["sie, Sie", "werden", "Sie werden bleiben."]
        ]
      },
      examples: [
        { tr: "Demain, je vais à Vienne.", note: "présent + morgen : forme normale" },
        { tr: "La semaine prochaine, nous allons en Espagne en avion.", note: "présent + nächste Woche" },
        { tr: "Je t'appellerai demain.", note: "Futur I : verbe séparable regroupé à l'infinitif, en fin de phrase" },
        { tr: "Ce soir, il va pleuvoir.", note: "Futur I comme prévision" },
        { tr: "En été, nous irons en Suisse.", note: "werden en deuxième position, infinitif à la fin" },
        { tr: "Je t'enverrai une photo.", note: "Futur I : une promesse" }
      ]
    },
    vocab: [
      "le voyage",
      "les congés, les vacances",
      "la semaine",
      "le week-end",
      "le vol",
      "l'aéroport",
      "la valise",
      "le billet (d'avion, de spectacle)",
      "demain",
      "la semaine prochaine",
      "bientôt",
      "en été"
    ],
    exercises: [
      {
        tr: "Le présent de werden, toutes les personnes.",
        why: "<i>Werde, wirst, wird, werden, werdet, werden</i> : <i>werden</i> est irrégulier (<i>e</i> devient <i>i</i> à <i>du</i> et à <i>er, sie, es</i>) et c'est l'auxiliaire du Futur I."
      },
      {
        tr: "Le Futur I de fahren, toutes les personnes.",
        why: "<i>Ich werde fahren, du wirst fahren, er wird fahren, wir werden fahren, ihr werdet fahren, sie werden fahren</i> : <i>werden</i> change, l'infinitif reste le même."
      },
      {
        tr: "Le Futur I de fliegen, toutes les personnes.",
        why: "Au Futur I, l'infinitif ne se conjugue pas : <i>ich werde fliegen, du wirst fliegen ...</i>. Dans une phrase simple, il est à la fin."
      },
      {
        q: "Quelle phrase emploie correctement le Futur I ?",
        opts: [
          "Ich werde morgen nach Wien fahren.",
          "Ich werde morgen nach Wien fahre.",
          "Ich werde fahren morgen nach Wien."
        ],
        why: "<b>werden</b> en deuxième position et <b>infinitif à la fin</b>. Le verbe plein ne se conjugue pas et ne va pas en deuxième position : il reste à l'infinitif, à la fin."
      },
      {
        q: "Quelle phrase est correcte ? (Demain, je vais à Berlin.)",
        opts: [
          "Morgen ich fahre nach Berlin.",
          "Morgen fahre ich nach Berlin.",
          "Morgen werde fahre ich nach Berlin."
        ],
        why: "Avec <i>morgen</i> en première position, le verbe conjugué reste en deuxième (<i>fahre</i>) et le sujet le suit : <i>Morgen fahre ich ...</i>."
      },
      {
        q: "Complète : « Wir ___ im Sommer nach Spanien fliegen. » (werden, wir)",
        hint: "werden, wir",
        why: "<b>Werden</b> : à la première personne du pluriel, la forme est identique à l'infinitif, et <i>fliegen</i> reste à l'infinitif, à la fin."
      },
      {
        q: "Complète : « Nächste Woche ___ ich nach Hamburg. » (présent de fahren)",
        hint: "fahren, présent, ich",
        why: "<b>Fahre</b> : avec <i>nächste Woche</i>, le présent suffit. <i>Nächste Woche</i> est en première position, le verbe en deuxième."
      },
      {
        q: "Complète la phrase (pour « envoyer », schicken et senden conviennent).",
        tr: "Demain, je t'enverrai une photo.",
        why: "<i>Morgen werde ich dir ein Foto schicken</i> : après <i>morgen</i>, le verbe conjugué (<i>werde</i>) est en deuxième position et le sujet le suit ; l'infinitif va à la fin. <i>Senden</i> convient aussi."
      },
      {
        tr: "La semaine prochaine, je vais à Vienne en train, et en été nous irons en Suisse en avion.",
        why: "Dans <i>Nächste</i>, le <b>st</b> final reste [st], et non [ʃt] ; dans <i>Woche</i>, le <b>ch</b> après <b>o</b> est [x], plus au fond de la gorge. Dans <i>werden</i>, le <b>w</b> se lit [v]."
      },
      {
        tr: "Demain, je vais à Hambourg, et la semaine prochaine j'irai rendre visite à mon amie.",
        why: "Dans <i>Hamburg</i>, le <b>g</b> final sonne en général comme un <b>k</b> sourd ([k]) ; dans <i>besuchen</i>, le <b>ch</b> après <b>u</b> est [x] et l'accent tombe sur la deuxième syllabe, car <i>be-</i> est atone."
      }
    ]
  },
  "lesson:a2-u02-l3": {
    theme: "À l'hôtel",
    title: "J'ai réservé une chambre",
    objectives: [
      "dire que tu as réservé, ou réservé en ligne, avec le Perfekt",
      "former le participe de reservieren et de buchen",
      "choisir entre Sie et du à l'hôtel et employer des formules de politesse"
    ],
    theory: [
      {
        h: "Le Perfekt : réserver et arriver",
        p: "Pour dire que tu as déjà réservé, on emploie le <strong>Perfekt</strong> : auxiliaire en deuxième position et <b>participe II</b> à la fin. <em>Ich habe ein Zimmer reserviert. Wir haben ein Doppelzimmer gebucht.</em> Les verbes en <em>-ieren</em> ne prennent pas <em>ge-</em> : <em>reservieren → reserviert</em>. <em>Buchen</em> est régulier : <em>gebucht</em>. En général, les verbes intransitifs de mouvement ou de changement d'état prennent <em>sein</em>, tandis que les verbes transitifs et pronominaux prennent <em>haben</em>. Ici, il te faut <em>ankommen</em> et <em>abfahren</em> : <em>Wir sind gestern Abend angekommen</em> (participe <em>angekommen</em>, avec <em>ge-</em> au milieu)."
      },
      {
        contrast: "Le français a la même idée : <em>je suis arrivé</em> avec être, <em>j'ai réservé</em> avec avoir, et les verbes de mouvement comme <em>arriver</em> prennent être dans les deux langues. Mais le partage n'est pas identique : en français, tous les verbes pronominaux prennent être (<em>je me suis lavé</em>), alors qu'en allemand ils prennent <em>haben</em> (<em>ich habe mich gewaschen</em>). Autre différence : le participe allemand ne s'accorde jamais avec le sujet : <em>Er ist angekommen, Sie ist angekommen, Wir sind angekommen</em>, alors qu'en français on écrit <em>il est arrivé, elle est arrivée, nous sommes arrivés</em>. Le français dit <em>réserver</em> pour tout ; l'allemand a <em>reservieren</em> (garder une place) et <em>buchen</em> (réserver un voyage, une chambre), souvent interchangeables à l'hôtel. Enfin, le <em>vous</em> de politesse correspond à <em>Sie</em>, qui se conjugue comme la troisième personne du <b>pluriel</b> : <em>Haben Sie ein Zimmer?</em> Pour un groupe d'amis, on ne dit pas <em>Sie</em> mais <em>ihr</em>."
      },
      {
        trap: "Ne dis pas « Ich habe ein Zimmer reservieren » (infinitif à la place du participe) et n'oublie pas le bon auxiliaire : <em>Wir sind angekommen</em>, et non « Wir haben angekommen ». Pour le registre : à la réception, on emploie en général <em>Sie</em>, et <em>Könnten Sie mir bitte ...?</em> est plus poli que <em>Können Sie ...?</em>. Entre amis ou dans une auberge de jeunesse, on emploie souvent <em>du</em>, mais dans le doute choisis <em>Sie</em>."
      },
      {
        tip: "Trois phrases à avoir sous la main à l'hôtel : <em>Ich habe ein Zimmer reserviert.</em> <em>Haben Sie ein Zimmer für zwei Nächte frei?</em> <em>Könnten Sie mir bitte den Schlüssel geben?</em> Le participe des verbes en <em>-ieren</em> se termine en <em>-iert</em> et ne prend pas <em>ge-</em>."
      }
    ],
    grammar: {
      title: "Le Perfekt : reservieren, buchen, ankommen",
      note: "Auxiliaire en deuxième position, participe II à la fin. <b>haben</b> avec presque tous les verbes, <b>sein</b> en général avec les verbes intransitifs de mouvement ou de changement d'état (ici ankommen, abfahren), pas avec les verbes transitifs ou pronominaux. Les verbes en <b>-ieren</b> n'ont pas <i>ge-</i>.",
      table: {
        head: ["infinitif", "participe II", "exemple"],
        rows: [
          ["reservieren", "reserviert", "Ich habe ein Zimmer reserviert."],
          ["buchen", "gebucht", "Wir haben ein Zimmer gebucht."],
          ["ankommen", "angekommen", "Wir sind gestern angekommen."],
          ["abfahren", "abgefahren", "Der Zug ist abgefahren."]
        ]
      },
      examples: [
        { tr: "J'ai réservé une chambre.", note: "-ieren : reserviert, sans ge-" },
        { tr: "Nous avons réservé une chambre double pour deux nuits.", note: "haben + gebucht à la fin" },
        { tr: "Hier soir, nous sommes arrivés.", note: "ankommen prend sein" },
        { tr: "Vous avez une réservation ?", note: "forme de politesse avec Sie (comme la troisième personne du pluriel)" },
        { tr: "Pourriez-vous m'aider, s'il vous plaît ?", note: "Könnten Sie : demande polie" },
        { tr: "Tu as déjà réservé un hôtel ?", note: "avec du : Hast du ...?" }
      ]
    },
    vocab: [
      "l'hôtel",
      "la chambre",
      "la chambre double",
      "la réservation",
      "la nuit",
      "la clé",
      "le petit-déjeuner",
      "la réception",
      "le client, l'invité",
      "les bagages",
      "réserver (une place)",
      "réserver (une chambre, un voyage)"
    ],
    exercises: [
      {
        q: "Complète : « Ich habe ein Zimmer ___. » (le participe de reservieren)",
        opts: ["gereserviert", "reserviert", "reservieren"],
        why: "Les verbes en <i>-ieren</i> ne prennent pas <i>ge-</i> : <b>reserviert</b>. L'infinitif (<i>reservieren</i>) ne remplace pas le participe."
      },
      {
        q: "Complète : « Wir haben ein Doppelzimmer ___. » (le participe de buchen)",
        hint: "buchen est régulier",
        why: "<b>Gebucht</b> : <i>ge-</i> + radical + <i>-t</i>."
      },
      {
        q: "Complète : « Wir ___ gestern Abend im Hotel angekommen. » (haben ou sein ?)",
        hint: "ankommen est un verbe de mouvement",
        why: "<b>Sind</b> : <i>ankommen</i> exprime un changement de lieu et prend <i>sein</i> au Perfekt."
      },
      {
        q: "Complète : « Guten Abend, ___ Sie ein Zimmer frei? » (présent de haben, en vouvoyant)",
        hint: "haben, présent, Sie",
        why: "<b>Haben</b> : le <i>Sie</i> de politesse se conjugue comme la troisième personne du pluriel."
      },
      {
        q: "Complète la phrase (pour la chambre, reservieren et buchen conviennent).",
        tr: "J'ai réservé une chambre. Hier soir, nous sommes arrivés.",
        why: "<i>Ich habe ein Zimmer reserviert</i> (ou <i>gebucht</i>) et <i>Wir sind gestern Abend angekommen</i>. Les deux phrases ont deux auxiliaires différents : <i>haben</i> et <i>sein</i>."
      },
      {
        q: "Associe chaque mot à son sens.",
        pairs: ["la chambre double", "la réservation", "la clé", "le petit-déjeuner"]
      },
      {
        q: "Traduis : « Nous avons réservé une chambre double pour deux nuits. »",
        why: "<i>Wir haben ein Doppelzimmer für zwei Nächte reserviert</i>. <i>Gebucht</i> convient aussi ; l'ordre de <i>für zwei Nächte</i> et de <i>ein Doppelzimmer</i> peut changer, le participe reste à la fin."
      },
      {
        q: "À la réception.",
        setting: "Tu arrives à l'hôtel et tu parles au réceptionniste.",
        lines: [
          { tr: "Bonsoir. Vous avez une réservation ?" },
          { tr: "Réponds que tu as réservé une chambre.", answerTr: "Oui, j'ai réservé une chambre." },
          { tr: "Vous êtes en route depuis longtemps ?" },
          { tr: "Réponds que vous êtes partis à cinq heures.", answerTr: "Oui, nous sommes partis à cinq heures." },
          { tr: "Le petit-déjeuner est de sept à dix heures. Avez-vous d'autres questions ?" },
          { tr: "Demande poliment la clé, en vouvoyant.", answerTr: "Oui, pourriez-vous me donner la clé, s'il vous plaît ?" }
        ]
      },
      {
        tr: "Bonsoir, j'ai réservé une chambre double pour deux nuits.",
        why: "Dans <i>Doppelzimmer</i>, le <b>z</b> est [ts] ; <i>Nächte</i> a un <b>ch</b> après <b>ä</b>, c'est-à-dire [ç], un souffle léger que le français n'a pas. Dans <i>Abend</i>, le <b>b</b> est sonore, car il n'est pas en fin de syllabe."
      },
      {
        tr: "Nous avons réservé une chambre et hier soir nous sommes arrivés à l'hôtel.",
        why: "Dans <i>angekommen</i>, <b>n</b> et <b>g</b> appartiennent à des éléments différents (<i>an-ge-</i>) et se prononcent [nɡ], et non comme une seule nasale [ŋ] ; dans <i>gebucht</i>, le <b>ch</b> après <b>u</b> est [x], raclé au fond de la gorge."
      }
    ]
  },
  "lesson:a2-u02-l4": {
    theme: "Après l'arrivée",
    title: "Quand je serai arrivé, je t'appelle",
    objectives: [
      "employer wenn + Perfekt pour une action future déjà accomplie",
      "distinguer wenn (présent, futur, répétition) de als (un fait passé unique)",
      "combiner wenn avec le présent ou avec le Futur I dans la principale"
    ],
    theory: [
      {
        h: "Wenn + Perfekt : une fois arrivé",
        p: "<strong>Wenn</strong> introduit un fait du présent ou du futur. Quand l'action de la subordonnée sera <b>déjà accomplie</b> avant celle de la principale, on emploie le <b>Perfekt</b> dans la subordonnée : <em>Wenn ich angekommen bin, rufe ich dich an</em> (quand je serai arrivé, je t'appelle). Le verbe conjugué (<em>bin</em>) va <b>à la fin</b> ; la principale commence par le verbe : <em>rufe ich</em>. Dans la principale, tu peux employer le présent (<em>rufe ich ... an</em>) ou le Futur I (<em>werde ich ... anrufen</em>)."
      },
      {
        contrast: "Le français a un seul mot, <em>quand</em>, pour trois mots allemands : <em>wenn</em> (futur, présent, répétition), <em>als</em> (un fait passé unique) et <em>wann</em> (la question : <em>Wann kommst du an?</em>). Autre différence : le français met le futur après <em>quand</em> (<em>quand j'arriverai, je t'appellerai</em> ; <em>quand je serai arrivé</em> avec le futur antérieur), alors que l'allemand reste au présent : <em>Wenn ich ankomme, rufe ich dich an.</em> Pour dire que l'action est déjà accomplie, l'allemand emploie de préférence le <em>Perfekt</em> dans la subordonnée (<em>Wenn ich angekommen bin</em>), ou le présent s'il n'est pas utile d'insister (<em>Wenn ich ankomme</em>). L'allemand a un Futur II (<em>ich werde angekommen sein</em>), mais dans les temporelles tournées vers le futur il n'est pas nécessaire. Pour un événement unique dans le passé, on emploie <em>als</em> ; ici, nous l'exerçons avec le Perfekt : <em>Als wir gestern angekommen sind, hat es geregnet.</em>"
      },
      {
        trap: "<em>Als</em> et <em>wenn</em> ne sont pas interchangeables : pour un fait passé unique il faut <b>als</b> (<em>Als ich gestern angekommen bin, ...</em>), pour le présent, le futur et les faits répétés il faut <b>wenn</b>. N'écris pas « Wenn ich bin angekommen » : après <em>wenn</em>, le verbe conjugué va à la fin, après le participe. Et ne confonds pas <em>wenn</em> avec <em>wann</em>, le mot de la question (<em>Wann kommst du an?</em>)."
      },
      {
        tip: "Construis la phrase en deux morceaux : la subordonnée <em>Wenn ich angekommen bin,</em> avec le verbe à la fin, puis une virgule et la principale qui commence par le verbe, <em>rufe ich dich an</em>. Si la subordonnée vient après, l'ordre est normal : <em>Ich rufe dich an, wenn ich angekommen bin.</em>"
      }
    ],
    grammar: {
      title: "Wenn + Perfekt, als + Perfekt",
      note: "Le verbe conjugué (l'auxiliaire) va <b>à la fin</b>, après le participe. Si la subordonnée vient en premier, la principale commence par le verbe.",
      table: {
        head: ["situation", "mot et temps", "exemple"],
        rows: [
          ["futur déjà accompli", "wenn + Perfekt", "Wenn ich angekommen bin, rufe ich dich an."],
          ["présent ou futur", "wenn + présent", "Wenn ich Zeit habe, besuche ich dich."],
          ["fait passé unique", "als + Perfekt", "Als wir gestern angekommen sind, hat es geregnet."]
        ]
      },
      examples: [
        { tr: "Quand je serai arrivé, je t'appelle.", note: "wenn + Perfekt : auxiliaire à la fin" },
        { tr: "Quand nous aurons trouvé l'hôtel, nous irons manger.", note: "gefunden haben, puis gehen wir" },
        { tr: "Quand le train sera parti, je t'appellerai.", note: "principale au Futur I : werde ich anrufen" },
        { tr: "Quand j'ai le temps, je viens te voir.", note: "wenn + présent" },
        { tr: "Quand nous sommes arrivés hier, il pleuvait.", note: "als : un fait passé unique" },
        { tr: "Je t'envoie un message quand j'aurai changé de train.", note: "subordonnée après : ordre normal" }
      ]
    },
    vocab: [
      "arriver",
      "partir (d'un moyen de transport)",
      "changer (de train, de moyen de transport)",
      "téléphoner à",
      "le retard",
      "le message",
      "la correspondance",
      "l'arrêt",
      "le taxi",
      "la liaison",
      "ponctuel, à l'heure",
      "plus tard"
    ],
    exercises: [
      {
        q: "Comment dis-tu : « Quand je serai arrivé, je t'appelle » ?",
        opts: [
          "Wenn ich angekommen bin, rufe ich dich an.",
          "Wenn ich ankomme bin, rufe ich dich an.",
          "Wenn ich bin angekommen, rufe ich dich an."
        ],
        why: "Dans la subordonnée, le participe vient d'abord et l'auxiliaire à la fin : <i>angekommen bin</i>. La principale commence par le verbe : <i>rufe ich ... an</i>."
      },
      {
        q: "Quel mot ? « ___ ich gestern angekommen bin, hat es geregnet. »",
        opts: ["Als", "Wenn", "Wann"],
        why: "Un fait passé unique : <b>als</b>. <i>Wenn</i> sert pour le présent, le futur et les faits répétés."
      },
      {
        q: "Complète : « Ich rufe dich an, ___ ich angekommen bin. » (quand, emploie wenn)",
        hint: "emploie wenn",
        why: "<b>Wenn</b> pour un fait du futur. Le verbe conjugué (<i>bin</i>) va à la fin."
      },
      {
        q: "Complète : « Wenn ich angekommen ___, rufe ich dich an. » (sein, Perfekt, ich)",
        hint: "sein, présent, ich",
        why: "<b>Bin</b> : l'auxiliaire de <i>ankommen</i> est <i>sein</i>, et c'est le verbe conjugué qui termine la subordonnée."
      },
      {
        q: "Complète la phrase.",
        tr: "Quand nous aurons trouvé l'hôtel, nous irons manger.",
        why: "<i>Wenn wir das Hotel gefunden haben, gehen wir essen</i> : dans la subordonnée, <i>haben</i> ferme la phrase ; dans la principale, le verbe (<i>gehen</i>) vient juste après la virgule."
      },
      {
        q: "Associe chaque verbe à son sens.",
        pairs: ["arriver", "partir", "changer (de train)", "téléphoner"]
      },
      {
        q: "Remets les mots dans l'ordre.",
        tr: "Quand je serai arrivé, je t'appelle.",
        why: "Avec ces morceaux, l'ordre est celui de la subordonnée en premier : <i>Wenn ich angekommen bin, rufe ich dich an</i>. Le verbe séparable <i>anrufen</i> laisse <i>an</i> à la fin de la principale."
      },
      {
        q: "Traduis : « Quand j'arrive, je t'appelle. »",
        why: "Le présent suffit : <i>Wenn ich ankomme, rufe ich dich an</i>. Le Perfekt dans la subordonnée (<i>angekommen bin</i>) ou le Futur I dans la principale (<i>werde ich dich anrufen</i>) conviennent aussi, et l'ordre peut être inversé."
      },
      {
        tr: "Quand je serai arrivé, je t'appelle, et ensuite nous irons manger ensemble.",
        why: "Dans <i>angekommen</i>, <b>n</b> et <b>g</b> appartiennent à des éléments différents (<i>an-ge-</i>) et se prononcent [nɡ], et non comme une seule nasale [ŋ] ; dans <i>zusammen</i>, le <b>z</b> est [ts] et le <b>s</b> devant une voyelle est en général sonore."
      },
      {
        tr: "Quand je serai arrivé à l'hôtel, je t'envoie un message.",
        why: "Dans <i>Nachricht</i>, le <b>ch</b> est [x] après <b>a</b> et [ç] après <b>i</b> : deux sons différents dans le même mot, et le <b>sch</b> de <i>schicke</i> est [ʃ]. Dans <i>Hotel</i>, l'accent tombe sur la dernière syllabe."
      }
    ]
  },
  "lesson:a2-u02-test": {
    theme: "Contrôle",
    title: "Contrôle de l'unité 2",
    objectives: ["vérifier wohin ? (nach, in, zu), le Futur I et wenn + Perfekt"],
    theory: [
      {
        p: "Dix questions sur wohin ? (nach, in, zu), le Futur I et wenn + Perfekt. On réussit avec 70 %. Ne relis pas les leçons en répondant : si tu ne te souviens pas de quelque chose, mieux vaut retourner réviser."
      }
    ],
    exercises: [
      {
        tr: "Le Futur I de kommen, toutes les personnes.",
        why: "<i>Ich werde kommen, du wirst kommen, er wird kommen, wir werden kommen, ihr werdet kommen, sie werden kommen</i>."
      },
      {
        q: "Complète : « Wir fahren ___ Italien. » (vers un pays sans article)",
        hint: "nach, in ou zu ?",
        why: "<b>Nach</b> : <i>Italien</i> n'a pas d'article."
      },
      {
        q: "Complète : « Ich fahre ___ die Schweiz. » (vers un pays avec article)",
        hint: "préposition + accusatif",
        why: "<b>In</b> + accusatif : <i>in die Schweiz</i>."
      },
      {
        q: "Complète : « Wir fahren ___ meiner Oma. » (vers une personne)",
        hint: "préposition + datif",
        why: "<b>Zu</b> + datif : <i>zu meiner Oma</i>."
      },
      {
        q: "Complète : « Ich ___ morgen nach Wien fahren. » (Futur I, werden, ich)",
        hint: "werden, ich",
        why: "<b>Werde</b> en deuxième position, <i>fahren</i> à l'infinitif, à la fin."
      },
      {
        q: "Complète : « Ich rufe dich an, ___ ich im Hotel angekommen bin. » (quand, emploie wenn)",
        hint: "emploie wenn",
        why: "<b>Wenn</b> : un fait du futur, avec le verbe conjugué à la fin."
      },
      {
        q: "Complète : « Meine Tante wohnt ___ Schweiz. » (où elle habite : position)",
        opts: ["in der", "in die", "nach der"],
        why: "Position (wo ?) : <b>in</b> + datif, et <i>die Schweiz</i> au datif donne <i>in der Schweiz</i>."
      },
      {
        q: "Traduis (verbe : fahren) : « Demain, nous allons à Vienne. »",
        why: "<i>Morgen fahren wir nach Wien</i> : <i>nach</i> avec une ville. L'ordre peut changer, le verbe reste en deuxième position."
      },
      {
        tr: "Demain, je vais à Vienne et, quand je serai arrivé, je t'appelle.",
        why: "Dans <i>Wien</i>, le <b>W</b> est [v] et <b>ie</b> est un <b>i</b> long ; dans <i>angekommen</i>, <b>n</b> et <b>g</b> appartiennent à des éléments différents (<i>an-ge-</i>) et se prononcent [nɡ], et non comme une seule nasale [ŋ]."
      },
      {
        tr: "En été, nous irons en Suisse, et ensuite je vais chez ma tante.",
        why: "Dans <i>Schweiz</i>, <b>sch</b> est [ʃ], <b>w</b> est [v] et <b>ei</b> sonne [aɪ]."
      }
    ]
  },
  "unit:a2-u03": {
    title: "Je le vois, je l'aide",
    grammarNote: "pronoms à l'accusatif et au datif · verbes avec le datif (helfen, gefallen, gehören, danken) · ordre des compléments · impératif avec du et ihr · mal et doch"
  },
  "lesson:a2-u03-l1": {
    theme: "Parler des gens",
    title: "ihn, sie, es",
    objectives: [
      "remplacer un nom par mich, dich, ihn, sie, es, uns, euch, sie, Sie",
      "choisir le pronom selon le genre du nom allemand",
      "placer le pronom après le verbe dans la proposition principale"
    ],
    theory: [
      {
        h: "Le pronom à l'accusatif à la place du nom",
        p: "Pour ne pas répéter un nom qui est <b>complément d'objet direct</b>, on emploie le pronom à l'accusatif : <em>mich, dich, ihn, sie, es, uns, euch, sie, Sie</em>. Par rapport au nominatif, <em>ich, du, er, wir, ihr</em> changent ; <em>sie</em> et <em>es</em> restent identiques. Le pronom suit le <b>genre du nom allemand</b>, même pour les choses : <em>der Bruder → ihn</em>, <em>die Kollegin → sie</em>, <em>das Kind → es</em>, <em>der Schlüssel → ihn</em>. Dans la principale neutre, le pronom vient juste après le verbe conjugué : <em>Ich kenne ihn gut.</em> Si la phrase commence par un autre élément, le pronom suit le sujet : <em>Morgen sehe ich ihn.</em> Dans une subordonnée, il vient après la conjonction et le sujet, avant le verbe final : <em>..., weil ich ihn gut kenne.</em>"
      },
      {
        contrast: "En français, le pronom complément se place <b>avant</b> le verbe (<em>je le vois, je la connais</em>) ; en allemand, c'est un mot à part qui vient après le verbe : <em>Ich sehe ihn.</em> De plus, le genre suit le mot allemand, pas le mot français : <em>le journal</em> est masculin (<em>je le lis</em>), mais <em>die Zeitung</em> est féminin, donc <em>Ich lese sie</em>. Inversement, <em>la clé</em> est féminin (<em>je la vois</em>), mais <em>der Schlüssel</em> est masculin : <em>Ich sehe ihn nicht</em>. Le français n'a pas non plus de pronom propre au neutre : <em>das Kind</em> donne <em>es</em>, alors que <em>l'enfant</em> donne <em>le</em> ou <em>la</em> selon le sexe."
      },
      {
        trap: "<em>Sie</em> peut signifier « elle », « elles/ils », « la » ou « les » : on le comprend grâce au verbe et au contexte (<em>Ich sehe sie</em>, seul, est ambigu). Avec une majuscule, c'est la forme de politesse : <em>Ich kenne Sie</em>. Et le <em>vous</em> français correspond à <em>Sie</em> (politesse) ou à <em>euch</em> (plusieurs amis) : <em>Ich kenne euch</em> n'est pas <em>Ich kenne Sie</em>. Enfin, ne confonds pas <em>ihn</em> (accusatif) avec <em>ihm</em> (datif) : <em>Ich sehe ihm</em> est faux, car <em>sehen</em> prend l'accusatif."
      },
      {
        tip: "Avant d'écrire le pronom, répète le nom allemand avec son article : <em>der → ihn</em>, <em>die → sie</em>, <em>das → es</em>, <em>die</em> (pluriel) <em>→ sie</em>. Le pronom pour une personne est le même que pour une chose du même genre."
      }
    ],
    grammar: {
      title: "Les pronoms à l'accusatif",
      note: "Ils remplacent un complément d'objet direct déjà connu. Genre et nombre suivent le nom allemand : <b>der → ihn</b>, <b>die → sie</b>, <b>das → es</b>.",
      table: {
        head: ["nominatif", "accusatif", "exemple"],
        rows: [
          ["ich", "mich", "Er sieht mich."],
          ["du", "dich", "Ich kenne dich."],
          ["er", "ihn", "Wir sehen ihn."],
          ["sie", "sie", "Ich treffe sie."],
          ["es", "es", "Ich nehme es."],
          ["wir", "uns", "Sie laden uns ein."],
          ["ihr", "euch", "Ich besuche euch."],
          ["sie, Sie", "sie, Sie", "Wir kennen Sie."]
        ]
      },
      examples: [
        { tr: "Je le connais bien.", note: "ihn pour un nom masculin (der Bruder)" },
        { tr: "Demain, nous la rencontrons.", note: "sie : par exemple die Kollegin" },
        { tr: "Il ne me voit pas.", note: "mich : accusatif de ich" },
        { tr: "Ce soir, je t'appelle.", note: "dich ; anrufen est séparable, an va à la fin" },
        { tr: "L'enfant est malade. Je vais le voir aujourd'hui.", note: "es pour das Kind, neutre" },
        { tr: "Ils nous invitent à la fête.", note: "uns ; einladen est séparable, ein va à la fin" }
      ]
    },
    vocab: [
      "le frère",
      "la sœur",
      "le voisin",
      "la collègue",
      "le chef",
      "l'enfant",
      "la clé",
      "le journal",
      "connaître",
      "voir",
      "rencontrer",
      "inviter"
    ],
    exercises: [
      {
        q: "Tu parles de ton frère : « Je le vois souvent. » Quelle phrase est correcte ?",
        opts: ["Ich sehe er oft.", "Ich sehe ihn oft.", "Ich sehe ihm oft."],
        why: "<b>Ihn</b> : <i>sehen</i> prend l'accusatif et, pour <i>der Bruder</i>, le pronom est <i>ihn</i>. <i>Er</i> est le nominatif, <i>ihm</i> le datif."
      },
      {
        q: "Complète : « Das Kind ist krank. Ich besuche ___ heute. »",
        opts: ["ihn", "sie", "es"],
        why: "<i>Das Kind</i> est neutre, donc <b>es</b>. Le genre suit le mot allemand, pas le sexe de la personne."
      },
      {
        q: "Quelles phrases sont correctes ? (plusieurs réponses)",
        opts: [
          "Ich sehe dich morgen.",
          "Wir laden sie zur Party ein.",
          "Er kennt mich gut.",
          "Ich treffe ihm heute."
        ],
        why: "Les trois premières emploient le bon pronom à l'accusatif. <i>Ihm</i> est un datif et <i>treffen</i> prend l'accusatif : <i>Ich treffe ihn heute.</i>"
      },
      {
        q: "Complète : « Das ist mein Bruder. Ich kenne ___ sehr gut. » (er, accusatif)",
        hint: "pronom à l'accusatif",
        why: "<b>Ihn</b> : <i>kennen</i> prend l'accusatif et <i>der Bruder</i> est masculin."
      },
      {
        q: "Complète : « Wo ist Lisa? Ich sehe ___ nicht. » (Lisa)",
        hint: "pronom à l'accusatif",
        why: "<b>Sie</b> : l'accusatif de <i>sie</i> (elle) est identique au nominatif."
      },
      {
        q: "Complète la phrase (deuxième blanc : ich à l'accusatif).",
        tr: "Ma collègue est sympa. Je la rencontre souvent et parfois elle m'invite.",
        why: "<i>Sie</i> est l'accusatif pour <i>die Kollegin</i> ; <i>mich</i> est l'accusatif de <i>ich</i>. <i>Einladen</i> est séparable : <i>ein</i> va à la fin."
      },
      {
        q: "Remets les mots dans l'ordre.",
        tr: "Aujourd'hui, je la rencontre au café.",
        why: "Le verbe reste en deuxième position ; le pronom complément suit normalement le pronom sujet (<i>Heute treffe ich sie im Café</i>), mais il peut aussi se placer en tête pour insister : <i>Sie treffe ich heute im Café</i> est également correct."
      },
      {
        q: "Traduis (tu parles de ton frère) : « Je le vois demain. »",
        why: "<i>Ich sehe ihn morgen</i> : le pronom suit le verbe. Avec <i>morgen</i> en tête, le verbe reste en deuxième position et le sujet le suit (<i>Morgen sehe ich ihn</i>). <i>Treffen</i> convient aussi."
      },
      {
        tr: "Tu connais mon frère ? Je le vois tous les jours, et il vient souvent me rendre visite.",
        why: "Dans <i>ihn</i> et <i>sehe</i>, le <b>h</b> ne se lit pas et la voyelle précédente est longue ; dans <i>besucht</i>, l'accent tombe sur <i>-sucht</i> et le <b>ch</b> après <b>u</b> est [x]."
      },
      {
        tr: "Ma collègue est sympa. Je la rencontre souvent et parfois elle m'invite.",
        why: "Dans <i>sie</i>, le <b>s</b> est sonore [z] et <b>ie</b> est un <b>i</b> long ; dans <i>manchmal</i>, le <b>ch</b> après le <b>n</b> se lit [ç]."
      }
    ]
  },
  "lesson:a2-u03-l2": {
    theme: "Aide et goûts",
    title: "Je t'aide, ça me plaît",
    objectives: [
      "employer mir, dir, ihm, ihr, uns, euch, ihnen",
      "reconnaître les verbes qui prennent le datif : helfen, gefallen, gehören, danken",
      "dire qu'une chose plaît ou appartient à quelqu'un"
    ],
    theory: [
      {
        h: "Le datif avec les pronoms et avec certains verbes",
        p: "Le datif répond à la question <em>à qui ?</em>. Les pronoms sont <em>mir, dir, ihm, ihr, ihm, uns, euch, ihnen</em> (politesse : <em>Ihnen</em>). Certains verbes veulent le datif comme complément, même quand en français le complément semble direct : <em>helfen</em> (<em>Ich helfe dir</em>), <em>danken</em> (<em>Ich danke dir</em>), <em>antworten</em> (<em>Er antwortet mir</em>), <em>gehören</em> (<em>Das Handy gehört mir</em>) et <em>gefallen</em> (<em>Die Jacke gefällt mir</em>). Avec <em>gefallen</em>, la chose qui plaît est le sujet et la personne est au datif : si la chose est au pluriel, le verbe s'accorde avec elle (<em>Die Schuhe gefallen mir</em>)."
      },
      {
        contrast: "<em>Gefallen</em> fonctionne comme <em>plaire</em> : <em>La veste me plaît</em> et <em>Die Jacke gefällt mir</em> ont la même structure, avec la chose comme sujet et la personne au datif (<em>me</em>, <em>mir</em>). Les surprises viennent de <em>helfen</em> et <em>danken</em> : en français, on <em>aide</em> quelqu'un et on le <em>remercie</em> (<em>je l'aide, je le remercie</em>, avec <em>le</em> comme complément direct), alors qu'en allemand ils veulent le datif : <em>Ich helfe ihm</em>, <em>Ich danke ihm</em>. Le français <em>lui</em> (<em>je lui réponds</em>) sert pour un homme comme pour une femme, alors que l'allemand distingue <em>ihm</em> et <em>ihr</em>. Quant à <em>gehören</em>, il prend le datif comme <em>appartenir à</em> : <em>Das gehört mir</em> (ça m'appartient)."
      },
      {
        trap: "Avec ces verbes, l'accusatif est une erreur : <em>Ich helfe dich</em> et <em>Ich danke ihn</em> sont faux. Attention aussi à <em>ihr</em> : au nominatif, il signifie « vous » (<em>Ihr helft mir</em>), au datif « à elle » (<em>Ich helfe ihr</em>). Le verbe et le cas aident à comprendre lequel des deux c'est. <em>Ihm</em> vaut pour <em>er</em> et pour <em>es</em> : <em>Ich helfe dem Kind → Ich helfe ihm</em>."
      },
      {
        tip: "Apprends ces verbes avec le datif : <em>helfen + datif</em>, <em>gefallen + datif</em>, <em>gehören + datif</em>, <em>danken + datif</em>. Quand le verbe est l'un d'eux, le pronom est <em>mir, dir, ihm, ihr, uns, euch, ihnen</em>."
      }
    ],
    grammar: {
      title: "Les pronoms au datif et les verbes avec le datif",
      note: "Le datif est le cas de la personne qui reçoit quelque chose ou de l'aide, ou à qui quelque chose plaît ou appartient, selon le verbe. <b>helfen, danken, antworten, gehören, gefallen</b> veulent le datif.",
      table: {
        head: ["nominatif", "datif", "exemple"],
        rows: [
          ["ich", "mir", "Das gehört mir."],
          ["du", "dir", "Ich helfe dir."],
          ["er", "ihm", "Wir danken ihm."],
          ["sie", "ihr", "Das Buch gefällt ihr."],
          ["es", "ihm", "Ich helfe ihm."],
          ["wir", "uns", "Er hilft uns."],
          ["ihr", "euch", "Ich danke euch."],
          ["sie", "ihnen", "Ich antworte ihnen."],
          ["Sie", "Ihnen", "Ich danke Ihnen."]
        ]
      },
      examples: [
        { tr: "Je t'aide volontiers.", note: "helfen + datif : dir" },
        { tr: "Le portable est à moi.", note: "gehören + datif : mir" },
        { tr: "La veste me plaît beaucoup.", note: "gefallen : la chose est le sujet, la personne est au datif" },
        { tr: "Nous le remercions pour le cadeau.", note: "danken + datif : ihm" },
        { tr: "Il ne me répond pas.", note: "antworten + datif : mir" },
        { tr: "Ma sœur a besoin d'aide. Je l'aide.", note: "helfen + datif : ihr" }
      ]
    },
    vocab: [
      "le cadeau",
      "l'aide",
      "le sac à dos",
      "le portable",
      "la veste",
      "le livre",
      "aider",
      "plaire",
      "appartenir",
      "remercier",
      "répondre",
      "volontiers"
    ],
    exercises: [
      {
        q: "Tu dis de ton frère : « Je l'aide. » Quelle phrase est correcte ?",
        opts: ["Ich helfe ihn.", "Ich helfe ihm.", "Ich helfe er."],
        why: "<b>Ihm</b> : <i>helfen</i> prend le datif, même si en français on dit « je l'aide ». <i>Ihn</i> est un accusatif."
      },
      {
        q: "Comment dis-tu « La veste me plaît » ?",
        opts: ["Die Jacke gefällt mich.", "Die Jacke gefällt mir.", "Ich gefalle die Jacke."],
        why: "La chose est le sujet (<i>die Jacke</i>) et la personne est au datif (<i>mir</i>), comme dans « me plaît »."
      },
      {
        q: "Quels verbes veulent le datif ? (plusieurs réponses)",
        opts: ["helfen", "gehören", "sehen", "danken"],
        why: "<i>Helfen</i>, <i>gehören</i> et <i>danken</i> veulent le datif. <i>Sehen</i> prend l'accusatif : <i>Ich sehe ihn.</i>"
      },
      {
        q: "Complète : « Das ist mein Handy. Es gehört ___. » (ich, datif)",
        hint: "pronom au datif",
        why: "<b>Mir</b> : <i>gehören</i> prend le datif."
      },
      {
        q: "Complète : « Meine Schwester braucht Hilfe. Ich helfe ___ gern. » (sie : la sœur)",
        hint: "pronom au datif",
        why: "<b>Ihr</b> : datif de <i>sie</i> au singulier. <i>Helfen</i> prend le datif."
      },
      {
        q: "Complète la phrase.",
        tr: "Merci, Anna ! Je te remercie pour ton aide.",
        why: "<i>Ich danke dir</i> : <i>danken</i> prend le datif, donc <b>dir</b> et non <i>dich</i>."
      },
      {
        q: "Remets les mots dans l'ordre.",
        tr: "La veste me plaît beaucoup.",
        why: "Avec la chose comme sujet : <i>Die Jacke gefällt mir sehr</i>. <i>Mir gefällt die Jacke sehr</i>, avec le datif en tête, convient aussi."
      },
      {
        q: "Traduis (à un ami) : « Je t'aide volontiers. »",
        why: "<i>Ich helfe dir gern</i> : <i>helfen</i> prend le datif (<i>dir</i>). Les variantes avec <i>gerne</i> et avec <i>gern</i> en tête sont aussi correctes."
      },
      {
        tr: "Tu peux m'aider, s'il te plaît ? Je te remercie, c'est très gentil de ta part.",
        why: "Dans <i>helfen</i>, le <b>e</b> est bref ; dans <i>danke</i>, le <b>n</b> devant <b>k</b> se lit [ŋ] et le <b>a</b> est bref."
      },
      {
        tr: "Le sac à dos est à moi, et la veste me plaît beaucoup.",
        why: "Dans <i>gehört</i>, l'accent tombe sur <i>-hört</i>, où le <b>ö</b> est long ([øː]) ; dans <i>Rucksack</i>, les deux voyelles sont brèves : <i>Ruck</i> + <i>Sack</i>, et chaque <b>ck</b> signale la voyelle brève qui le précède."
      }
    ]
  },
  "lesson:a2-u03-l3": {
    theme: "Cadeaux et services",
    title: "Je le lui donne",
    objectives: [
      "employer le datif et l'accusatif dans la même phrase",
      "placer dans l'ordre habituel deux noms, un pronom et un nom, deux pronoms",
      "employer geben, schenken, zeigen, schicken, leihen, erklären"
    ],
    theory: [
      {
        h: "Deux compléments : datif et accusatif",
        p: "Avec des verbes comme <em>geben, schenken, zeigen, schicken, leihen, erklären</em>, il y a deux compléments : la personne (datif) et la chose (accusatif). L'ordre habituel, dans la phrase neutre, est le suivant. Avec <b>deux noms</b>, le datif précède l'accusatif : <em>Ich schenke meiner Schwester ein Buch.</em> Avec <b>un pronom et un nom</b>, le pronom vient d'abord, quel que soit son cas : <em>Ich gebe ihm das Buch. Ich gebe es meinem Bruder.</em> Avec <b>deux pronoms</b>, l'accusatif précède le datif : <em>Ich gebe es ihm.</em> Ce sont des ordres habituels, pas des règles absolues : pour mettre un élément en relief, on peut le déplacer."
      },
      {
        contrast: "En français, les deux pronoms se placent avant le verbe, et l'ordre dépend de la personne : <em>je le lui donne</em> (accusatif puis datif, comme en allemand : <em>Ich gebe es ihm</em>), mais <em>je te le donne</em>, <em>il me le donne</em> (datif puis accusatif). En allemand, l'ordre est toujours le même avec deux pronoms : accusatif, puis datif, donc <em>Ich gebe es dir</em>, <em>Er gibt es mir</em>. Si tu traduis à partir du français, remets l'ordre : d'abord <em>es</em> (le « le »), puis <em>dir</em> ou <em>mir</em> (le « te » ou le « me »)."
      },
      {
        trap: "Dans l'ordre habituel, <em>Ich gebe ihm es</em> sonne faux : avec deux pronoms, l'accusatif vient d'abord, <em>Ich gebe es ihm</em>. Choisis le genre d'après le mot allemand : <em>das Foto → es</em>, <em>der Brief → ihn</em>, <em>die Postkarte → sie</em>. Avec un nom masculin, les deux pronoms sont différents : <em>Ich gebe ihn ihm</em> (le premier est accusatif, le second datif)."
      },
      {
        tip: "Trouve d'abord la chose et place son pronom (<em>es, ihn, sie</em>) juste après le verbe ; ajoute ensuite la personne (<em>mir, dir, ihm, ihr</em>). Avec des noms, pars au contraire de la personne : <em>Ich zeige meiner Mutter das Foto.</em>"
      }
    ],
    grammar: {
      title: "L'ordre du datif et de l'accusatif",
      note: "Dans la phrase neutre : deux noms, <b>datif d'abord</b> ; un pronom et un nom, <b>le pronom d'abord</b> ; deux pronoms, <b>accusatif d'abord</b>.",
      table: {
        head: ["compléments", "ordre habituel", "exemple"],
        rows: [
          ["deux noms", "datif, accusatif", "Ich schenke meiner Schwester ein Buch."],
          ["pronom + nom", "le pronom d'abord", "Ich gebe ihm das Buch."],
          ["nom + pronom", "le pronom d'abord", "Ich gebe es meinem Bruder."],
          ["deux pronoms", "accusatif, datif", "Ich gebe es ihm."]
        ]
      },
      examples: [
        { tr: "Je le lui donne.", note: "deux pronoms : es (accusatif) avant ihm (datif)" },
        { tr: "Je te montre la photo.", note: "pronom datif avant le nom" },
        { tr: "J'offre un livre à ma sœur.", note: "deux noms : datif avant l'accusatif" },
        { tr: "Il me l'envoie demain.", note: "es mir : accusatif avant le datif" },
        { tr: "Nous lui prêtons le vélo.", note: "pronom datif avant le nom" },
        { tr: "Je te l'explique plus tard.", note: "es dir : accusatif avant le datif" }
      ]
    },
    vocab: [
      "la photo",
      "la lettre",
      "le colis",
      "l'argent",
      "la carte postale",
      "le vélo",
      "donner",
      "offrir",
      "montrer",
      "envoyer",
      "prêter",
      "expliquer"
    ],
    exercises: [
      {
        q: "Tu dis : « Je le lui donne » (le livre, à mon frère). Quelle phrase a l'ordre habituel ?",
        opts: ["Ich gebe ihm es.", "Ich gebe es ihm.", "Ich gebe ihm ihn."],
        why: "Avec deux pronoms, l'accusatif vient avant le datif : <i>es ihm</i>. <i>Das Buch</i> est neutre, donc <i>es</i>."
      },
      {
        q: "Quelle phrase a l'ordre neutre avec deux noms ?",
        opts: [
          "Ich schenke ein Buch meiner Schwester.",
          "Ich schenke meiner Schwester ein Buch.",
          "Ich meiner Schwester schenke ein Buch."
        ],
        why: "Avec deux noms, d'abord le datif (la personne), puis l'accusatif (la chose). La première phrase n'est pas fausse, mais elle met la personne à la fin pour la mettre en relief : ce n'est pas l'ordre neutre. La troisième rompt la deuxième position du verbe."
      },
      {
        q: "Quelles phrases ont un ordre habituel ? (plusieurs réponses)",
        opts: [
          "Ich gebe es ihm.",
          "Ich zeige dir das Foto.",
          "Ich schicke dem Chef es.",
          "Ich schenke ihm einen Schlüssel."
        ],
        why: "Le pronom vient avant le nom (<i>dir das Foto</i>, <i>ihm einen Schlüssel</i>) et, avec deux pronoms, on a <i>es ihm</i>. Dans « Ich schicke dem Chef es », le nom précède le pronom : l'ordre habituel est <i>Ich schicke es dem Chef</i>."
      },
      {
        q: "Complète : « Wo ist das Foto? Ich zeige ___ dir gleich. » (das Foto)",
        hint: "pronom à l'accusatif",
        why: "<b>Es</b> : <i>das Foto</i> est neutre, et l'accusatif <i>es</i> vient avant le datif <i>dir</i>."
      },
      {
        q: "Complète : « Der Schlüssel gehört Paul. Ich gebe ihn ___ heute. » (Paul : er)",
        hint: "pronom au datif",
        why: "<b>Ihm</b> : datif de <i>er</i>. L'accusatif <i>ihn</i> (la chose, <i>der Schlüssel</i>) vient d'abord."
      },
      {
        q: "Complète la phrase (deuxième blanc : du au datif).",
        tr: "La lettre est prête. Demain, je te l'envoie.",
        why: "<i>Der Brief</i> est masculin : <b>ihn</b> (accusatif) vient avant <b>dir</b> (datif). En français, « te l' » met le datif en premier : en allemand, l'ordre est inverse."
      },
      {
        q: "Associe chaque phrase à sa traduction.",
        pairs: ["Je le lui donne.", "Je lui donne le livre.", "Je le donne à mon frère.", "Je te le donne."]
      },
      {
        q: "Traduis : « Demain, je te le donne. » (le livre : emploie le pronom es)",
        why: "<i>Ich gebe es dir morgen</i> : d'abord l'accusatif <i>es</i>, puis le datif <i>dir</i>. Avec <i>morgen</i> en tête, le verbe reste en deuxième position : <i>Morgen gebe ich es dir</i>."
      },
      {
        tr: "J'ai trouvé ta photo. Je te la montre tout de suite, et demain je l'envoie à ta sœur.",
        why: "Dans <i>zeigen</i>, le <b>z</b> est [ts] et <b>ei</b> sonne [aɪ] ; dans <i>gleich</i>, le <b>ch</b> final après <b>ei</b> se lit [ç]."
      },
      {
        tr: "La clé est à mon frère. Demain, je la lui donne.",
        why: "Dans <i>Schlüssel</i>, le <b>sch</b> est [ʃ] et le <b>ü</b> est bref ; dans <i>ihn</i> et <i>ihm</i>, le <b>h</b> ne se lit pas et le <b>i</b> est long."
      }
    ]
  },
  "lesson:a2-u03-l4": {
    theme: "Consignes et conseils",
    title: "Dis-moi ! Appelle-moi !",
    objectives: [
      "former l'impératif avec du et avec ihr",
      "retenir les verbes à changement de radical et sein",
      "employer mal et doch pour changer le ton d'une demande"
    ],
    theory: [
      {
        h: "L'impératif avec du et avec ihr",
        p: "Pour dire à une personne que tu tutoies de faire quelque chose, on emploie le <b>radical du verbe</b>, sans <em>du</em> : <em>Komm! Ruf mich an! Mach das Fenster zu!</em> Avec les verbes faibles dont le radical se termine en <em>-t</em> ou <em>-d</em>, on ajoute en général un <b>-e</b> : <em>Warte! Arbeite! Antworte!</em> Les verbes forts à changement <em>e → i/ie</em> emploient le radical modifié et n'ont pas de <em>-e</em> : <em>Nimm! Lies! Gib! Sprich!</em> Sans Umlaut : <em>Fahr!</em>, et non <em>Fähr!</em> <em>Sein</em> est irrégulier : <em>Sei!</em> Pour plusieurs personnes (<em>ihr</em>), l'impératif a la forme de <em>ihr</em> sans pronom : <em>Kommt! Wartet! Ruft an!</em> Le verbe séparable laisse la particule à la fin : <em>Ruf mich an!</em>"
      },
      {
        h: "mal et doch : de petits mots qui changent le ton",
        p: "<em>Mal</em> et <em>doch</em> sont des <b>particules modales</b> : elles ne changent pas la grammaire, elles changent <b>le ton</b> de la phrase. <em>Komm mal her!</em> est moins catégorique et plus familier que <em>Komm her!</em> : « viens un peu par ici ». Ce <em>mal</em> ne veut pas dire « un instant ». <em>Ruf mich doch an!</em> peut se rendre par « appelle-moi donc » ou « allez, appelle-moi » ; le ton de <em>doch</em> dépend du contexte et de l'intonation. Elles se placent dans le champ central, en général après le pronom : <em>Ruf mich doch mal an!</em> Elles n'ont pas de traduction fixe."
      },
      {
        contrast: "En français aussi, le sujet disparaît à l'impératif (<em>viens, attends, appelle-moi</em>), et le pronom complément se rattache au verbe par un trait d'union (<em>appelle-moi, aide-moi</em>) ; en allemand, c'est un mot séparé après le verbe : <em>Ruf mich an! Hilf mir!</em> Pour <em>ihr</em>, la forme est celle du <em>vous</em> français (<em>Venez! → Kommt!</em>), mais ce <em>vous</em> peut aussi être le <em>Sie</em> de politesse, qui a sa propre forme (<em>Kommen Sie!</em>) : ici, nous ne voyons que <em>du</em> et <em>ihr</em>. Le verbe <em>être</em> est irrégulier dans les deux langues (<em>sois, soyez</em> ; <em>Sei, Seid</em>). À la forme négative, le français met <em>ne ... pas</em> autour du verbe (<em>ne viens pas trop tard</em>) ; l'allemand place <em>nicht</em> après : <em>Komm nicht zu spät!</em> Les particules modales n'ont pas de catégorie propre en français : on les rend par le ton ou par des mots comme <em>donc, un peu, dis, allez</em>."
      },
      {
        trap: "N'ajoute pas <em>-st</em> : <em>Kommst!</em> n'est pas un impératif. Avec les verbes forts en <em>e → ie</em>, ne dis pas <em>Lese!</em> mais <em>Lies!</em>, et non <em>Nehm!</em> mais <em>Nimm!</em> Avec <em>sein</em>, la forme est <em>Sei vorsichtig!</em> Ne crois pas que <em>mal</em> et <em>doch</em> soient des mots vides : sans eux, la phrase reste correcte mais sonne plus sèche."
      },
      {
        tip: "Quand tu donnes un ordre ou un conseil à un ami : pour un verbe régulier, pars de l'infinitif, enlève <em>-en</em>, ajoute <em>-e</em> si le radical se termine en <em>-t</em> ou <em>-d</em> ; les verbes irréguliers se retiennent à part (<em>Nimm! Lies! Sei!</em>). Mets ensuite <em>mal</em> ou <em>doch</em> pour adoucir : <em>Warte mal! Komm doch mit!</em>"
      }
    ],
    grammar: {
      title: "L'impératif avec du et ihr ; mal et doch",
      note: "Avec <b>du</b>, le radical sans pronom (<i>Komm!</i>), avec <b>ihr</b> la forme de ihr (<i>Kommt!</i>). <b>mal</b> et <b>doch</b> adoucissent la demande ou la rendent plus amicale.",
      table: {
        head: ["infinitif", "du", "ihr"],
        rows: [
          ["kommen", "Komm!", "Kommt!"],
          ["warten", "Warte!", "Wartet!"],
          ["anrufen", "Ruf an!", "Ruft an!"],
          ["nehmen", "Nimm!", "Nehmt!"],
          ["lesen", "Lies!", "Lest!"],
          ["sein", "Sei!", "Seid!"]
        ]
      },
      examples: [
        { tr: "Viens un peu par ici !", note: "mal rend la demande plus légère" },
        { tr: "Attends un moment !", note: "radical en -t : on ajoute -e" },
        { tr: "Appelle-moi donc !", note: "doch : invitation amicale ; an à la fin" },
        { tr: "Fais donc une pause !", note: "machen : radical Mach, sans -en" },
        { tr: "Dis-moi, tu as le temps ?", note: "Sag mal : ouvre une question sur un ton familier" },
        { tr: "Faites attention, s'il vous plaît !", note: "ihr : forme de sein, Seid" }
      ]
    },
    vocab: [
      "le conseil",
      "l'idée",
      "le moment",
      "la pause",
      "appeler (au téléphone)",
      "attendre",
      "prendre",
      "lire",
      "mal (particule modale)",
      "doch (particule modale)",
      "prudent, attentif",
      "s'il te plaît, s'il vous plaît"
    ],
    exercises: [
      {
        q: "Tu dis à un ami : « Attends un moment ! » Quelle phrase est correcte ?",
        opts: ["Warte einen Moment!", "Wartest einen Moment!", "Warten einen Moment!"],
        why: "Avec <i>du</i>, l'impératif est le radical sans pronom ; le radical se termine en <i>-t</i>, donc on ajoute <b>-e</b> : <i>Warte!</i>"
      },
      {
        q: "Tu dis à un ami : « Lis ça ! » (lesen)",
        opts: ["Lese das!", "Lies das!", "Les das!"],
        why: "<i>Lesen</i> est un verbe fort en <i>e → ie</i> : à l'impératif, le radical change (<b>Lies!</b>) et il n'y a pas de <i>-e</i>."
      },
      {
        q: "Complète : « ___ bitte einen Moment, Kinder! » (warten, ihr)",
        hint: "warten, impératif ihr",
        why: "L'impératif avec <i>ihr</i> a la forme de <i>ihr</i> sans pronom : <b>Wartet!</b>"
      },
      {
        q: "Complète : « Ruf mich doch ___! » (anrufen : appelle-moi donc)",
        hint: "la particule du verbe séparable",
        why: "<i>Anrufen</i> est séparable : la particule <b>an</b> va à la fin et le verbe reste en première position."
      },
      {
        q: "Complète : « ___ vorsichtig! » (sein, du)",
        hint: "sein, impératif du",
        why: "<b>Sei</b> : l'impératif de <i>sein</i> est irrégulier (<i>sei, seid</i>)."
      },
      {
        q: "Complète la phrase (doch et mal conviennent tous les deux).",
        tr: "Tu es fatigué ? Alors fais donc une pause !",
        why: "<b>Mach</b> : le radical de <i>machen</i> est <i>mach-</i>, sans <i>-en</i> et sans <i>du</i>. <i>Doch</i> (invitation amicale) et <i>mal</i> (ton plus léger) conviennent."
      },
      {
        q: "Remets les mots dans l'ordre.",
        tr: "Allez, appelle-moi !",
        why: "Le verbe ouvre la phrase, le pronom le suit, les particules <i>doch mal</i> précèdent la particule séparable <i>an</i> à la fin."
      },
      {
        q: "Traduis (à un ami, emploie doch) : « Appelle-moi donc ! »",
        why: "<i>Ruf mich doch an!</i> : impératif sans <i>du</i>, pronom après le verbe, particule <i>an</i> à la fin ; <i>doch</i> rend l'invitation plus amicale. <i>Mal</i> en plus convient aussi."
      },
      {
        tr: "Dis-moi, tu as le temps demain ? Alors appelle-moi, et on va manger ensemble.",
        why: "Dans <i>Sag</i>, le <b>g</b> final se lit en général [k] ; dans <i>zusammen</i>, le <b>z</b> est [ts] et le <b>s</b> devant une voyelle est en général sonore."
      },
      {
        tr: "Passe donc me voir, et prends un peu de temps !",
        why: "Dans <i>vorbei</i>, le <b>v</b> se lit [f] ; dans <i>Moment</i>, l'accent tombe sur la deuxième syllabe."
      }
    ]
  },
  "lesson:a2-u03-test": {
    theme: "Contrôle",
    title: "Contrôle de l'unité 3",
    objectives: [
      "vérifier les pronoms à l'accusatif et au datif, les verbes avec le datif et l'ordre des compléments"
    ],
    theory: [
      {
        p: "Dix questions sur les pronoms à l'accusatif et au datif, sur les verbes avec le datif et sur l'ordre des compléments. On réussit avec 70 %. Ne relis pas les leçons en répondant : si tu ne te souviens pas de quelque chose, mieux vaut retourner réviser."
      }
    ],
    exercises: [
      {
        q: "Complète : « Wo ist Anna? Ich sehe ___ nicht. » (sie : Anna)",
        hint: "pronom à l'accusatif",
        why: "<b>Sie</b> : <i>sehen</i> prend l'accusatif, et celui de <i>sie</i> (elle) est identique au nominatif."
      },
      {
        q: "Complète : « Du brauchst Hilfe? Ich helfe ___ gern. » (du)",
        hint: "pronom au datif",
        why: "<b>Dir</b> : <i>helfen</i> prend le datif."
      },
      {
        q: "Complète : « Das Handy gehört ___. » (ich)",
        hint: "pronom au datif",
        why: "<b>Mir</b> : <i>gehören</i> prend le datif."
      },
      {
        q: "Complète : « Ich habe das Buch. Ich gebe es ___ gleich. » (mein Bruder : er)",
        hint: "pronom au datif",
        why: "<b>Ihm</b> : avec deux pronoms, l'accusatif (<i>es</i>) vient d'abord, puis le datif (<i>ihm</i>)."
      },
      {
        q: "Complète : « Ihr helft uns oft. Wir danken ___ sehr. » (ihr)",
        hint: "pronom au datif",
        why: "<b>Euch</b> : <i>danken</i> prend le datif, et le datif de <i>ihr</i> est <i>euch</i>."
      },
      {
        q: "Comment dis-tu « Cette idée me plaît beaucoup » ?",
        opts: ["Die Idee gefällt mich sehr.", "Die Idee gefällt mir sehr.", "Ich gefalle die Idee sehr."],
        why: "La chose est le sujet (<i>die Idee</i>) et la personne est au datif (<i>mir</i>)."
      },
      {
        q: "Tu dis : « Je te le montre » (le livre). Quelle phrase a l'ordre habituel ?",
        opts: ["Ich zeige es dir.", "Ich zeige dir es.", "Ich zeige du es."],
        why: "Avec deux pronoms, l'accusatif (<i>es</i>) vient avant le datif (<i>dir</i>)."
      },
      {
        q: "Traduis : « Demain, je lui donne le livre. (lui = mon frère) »",
        why: "<i>Ich gebe ihm das Buch morgen</i> : le pronom datif <i>ihm</i> vient avant le nom <i>das Buch</i>. <i>Morgen gebe ich ihm das Buch</i> et <i>Ich gebe ihm morgen das Buch</i> conviennent aussi."
      },
      {
        tr: "Mon frère fête son anniversaire. Je lui offre un livre et je le lui donne demain.",
        why: "Dans <i>Geburtstag</i>, l'accent tombe sur <i>-burts-</i> (<i>ge-</i> est atone) et le <b>g</b> final se lit en général [k]."
      },
      {
        tr: "Ma collègue a besoin d'aide. Je l'aide volontiers et demain je l'appelle.",
        why: "Dans <i>braucht</i>, <b>au</b> sonne [aʊ] et le <b>ch</b> qui suit est [x] ; dans <i>sie</i>, le <b>s</b> est sonore [z]."
      }
    ]
  }
});
