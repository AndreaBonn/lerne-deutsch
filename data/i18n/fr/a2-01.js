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
  }
});
