/* ============================================================
   Learner-language text (fr) for data/core/b2-03.js, unit b2-u06.
   Keys point at ids in the neutral layer; arrays merge by index,
   so their length has to match core.
   Checked by scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("fr", {
  "unit:b2-u06": {
    title: "Même s'il pleut",
    grammarNote: "Concessives avec obwohl et obgleich · trotz + génitif · trotzdem et dennoch avec inversion · auch wenn et selbst wenn, aussi avec le Konjunktiv II · jedoch, allerdings, sondern, vielmehr, hingegen, zwar ... aber"
  },
  "lesson:b2-u06-l1": {
    theme: "Argumenter dans un débat",
    title: "obwohl, obgleich, trotz",
    objectives: [
      "exprimer une concession avec obwohl et obgleich",
      "employer trotz avec le génitif",
      "employer trotzdem et dennoch dans la principale",
      "choisir entre conjonction, préposition et adverbe"
    ],
    theory: [
      {
        h: "Trois mots pour une même idée",
        p: "L'allemand exprime la concession avec trois outils différents, et la différence est dans la syntaxe. <strong>obwohl</strong> (plus soutenu : <em>obgleich</em>) est une conjonction : il ouvre une subordonnée avec le verbe à la fin. <em>Obwohl es regnet, gehen wir spazieren.</em> <strong>trotz</strong> est une préposition suivie du génitif et ne régit pas de verbe : <em>Trotz des Regens gehen wir spazieren.</em> <strong>trotzdem</strong> et <strong>dennoch</strong> sont des adverbes : ils se placent dans la principale, et s'ils occupent la première place, le verbe vient juste après. <em>Es regnet. Trotzdem gehen wir spazieren.</em>"
      },
      {
        h: "Après la subordonnée, l'inversion",
        p: "Quand la proposition avec <em>obwohl</em> vient en tête, elle occupe à elle seule la première place de la principale : le verbe conjugué suit immédiatement, puis le sujet. <em>Obwohl er müde war, <strong>arbeitete er</strong> weiter.</em> Si la subordonnée est à la fin, la principale garde son ordre normal : <em>Er arbeitete weiter, obwohl er müde war.</em>"
      },
      {
        contrast: "En français, <em>bien que</em> et <em>quoique</em> demandent le subjonctif (<em>bien qu'il pleuve</em>) ; <em>obwohl</em> s'emploie normalement avec l'indicatif : <em>obwohl es regnet</em>. <em>Malgré</em> correspond à <em>trotz</em> et va avec un nom (<em>malgré la pluie</em> = <em>trotz des Regens</em>), et <em>pourtant</em>, <em>quand même</em> ou <em>néanmoins</em> correspondent à <em>trotzdem</em> et <em>dennoch</em>."
      },
      {
        trap: "Dans l'écrit standard, <em>trotzdem</em> est un adverbe, pas une conjonction : <em>Trotzdem gehen wir</em>, pas <em>trotzdem wir gehen</em>. Et <em>trotz</em> régit le génitif : <em>trotz des Regens</em>. À l'oral on entend aussi <em>trotz dem Regen</em>, mais à l'écrit on emploie le génitif."
      },
      {
        tip: "Dans la déclinaison forte, le génitif masculin et neutre ajoute aussi <em>-s</em> ou <em>-es</em> au nom (les masculins faibles prennent au contraire <em>-(e)n</em> : <em>trotz des Studenten</em>) : <em>trotz des Regens, trotz des schlechten Wetters</em>. Au féminin et au pluriel, le nom ne change pas : <em>trotz der Kälte, trotz der hohen Kosten</em>."
      }
    ],
    grammar: {
      title: "La concession : conjonction, préposition, adverbe",
      note: "<b>obwohl / obgleich</b> + subordonnée, verbe à la fin. <b>trotz</b> + génitif, sans verbe. <b>trotzdem / dennoch</b> dans la principale ; en première place, le verbe suit immédiatement.",
      table: {
        head: ["mot", "nature", "place du verbe", "exemple"],
        rows: [
          ["obwohl, obgleich", "conjonction", "à la fin de la subordonnée", "obwohl es regnet"],
          ["trotz", "préposition + génitif", "pas de verbe", "trotz des Regens"],
          ["trotzdem, dennoch", "adverbe", "juste après, s'ils sont en tête", "Trotzdem gehen wir."]
        ]
      },
      examples: [
        { tr: "Bien qu'il pleuve, nous allons nous promener.", note: "obwohl + indicatif, puis inversion : gehen wir" },
        { tr: "Nous allons nous promener, bien qu'il pleuve.", note: "subordonnée à la fin : la principale garde son ordre" },
        { tr: "Il pleut. Nous allons quand même nous promener.", note: "trotzdem en tête : gehen wir" },
        { tr: "Malgré la pluie, nous allons nous promener.", note: "trotz + génitif : des Regens" },
        { tr: "Bien que les coûts aient augmenté, le prix reste le même.", note: "obgleich : plus soutenu qu'obwohl" },
        { tr: "Malgré les coûts élevés, la ville a poursuivi le projet.", note: "génitif pluriel : der hohen Kosten" }
      ]
    },
    vocab: [
      "l'objection",
      "la contradiction",
      "l'argument",
      "le débat",
      "le compromis",
      "l'inconvénient, le désavantage",
      "bien que, quoique (+ indicatif en allemand)",
      "malgré (+ génitif)",
      "pourtant, quand même",
      "néanmoins, cependant",
      "objecter",
      "contredire (+ datif)"
    ],
    exercises: [
      {
        q: "Quelle phrase est correcte ?",
        opts: [
          "Obwohl es regnet, gehen wir spazieren.",
          "Obwohl es regnet, wir gehen spazieren.",
          "Obwohl regnet es, gehen wir spazieren."
        ],
        why: "Avec <i>obwohl</i>, le verbe va à la fin de la subordonnée (<i>es regnet</i>), et la principale qui suit commence par le verbe : <b>gehen wir</b>."
      },
      {
        q: "Quelle forme est correcte à l'écrit ?",
        opts: [
          "trotz des Regens",
          "trotz der Regen",
          "trotz des Regen"
        ],
        why: "<i>trotz</i> régit le génitif : <i>der Regen</i> devient <b>des Regens</b>, avec <i>-s</i> aussi sur le nom."
      },
      {
        q: "Quelle phrase est correcte ?",
        opts: [
          "Es regnet. Trotzdem gehen wir spazieren.",
          "Es regnet. Trotzdem wir gehen spazieren.",
          "Es regnet. Trotzdem wir spazieren gehen."
        ],
        why: "<i>trotzdem</i> est un adverbe : en tête, il est suivi immédiatement du verbe conjugué, <b>gehen wir</b>."
      },
      {
        q: "Complétez : « ___ sie krank war, ging sie zur Arbeit. »",
        hint: "conjonction concessive, verbe à la fin",
        why: "<b>Obwohl</b> (ou <i>obgleich</i>, <i>obschon</i>) : il ouvre la subordonnée avec le verbe <i>war</i> à la fin."
      },
      {
        q: "Complétez : « Trotz ___ schlechten Wetters fand das Konzert statt. »",
        hint: "génitif neutre",
        why: "<b>des</b> : <i>trotz</i> régit le génitif, et <i>das Wetter</i> devient <i>des schlechten Wetters</i>."
      },
      {
        q: "Complétez la phrase.",
        tr: "Le temps était mauvais. Le concert a pourtant eu lieu.",
        why: "<i>Trotzdem</i> (ou <i>Dennoch</i>) en tête, puis le verbe <i>fand</i> ; la particule de <i>stattfinden</i> va à la fin : <i>fand ... statt</i>."
      },
      {
        q: "Associez chaque mot à son sens.",
        pairs: [
          "l'objection",
          "la contradiction",
          "le compromis",
          "l'inconvénient"
        ]
      },
      {
        q: "Remettez les mots dans l'ordre.",
        tr: "Malgré les coûts élevés, la ville a poursuivi le projet.",
        why: "<i>Trotz der hohen Kosten hat die Stadt das Projekt fortgesetzt.</i> Le groupe avec <i>trotz</i> occupe la première place, puis le verbe <i>hat</i>, le participe à la fin."
      },
      {
        q: "Traduisez : « Bien qu'il soit fatigué, il a continué à travailler. » (weiterarbeiten)",
        why: "<i>Obwohl er müde war, hat er weitergearbeitet</i> (ou <i>arbeitete er weiter</i>) : indicatif après <i>obwohl</i>, là où le français met le subjonctif. La subordonnée à la fin est correcte aussi."
      },
      {
        tr: "Bien que les loyers aient fortement augmenté en ville, beaucoup de jeunes veulent y habiter. Malgré les prix élevés, la demande est forte.",
        why: "Dans <i>gestiegen</i> le <b>ie</b> est long ; dans <i>Nachfrage</i> l'accent tombe sur <b>Nach</b> ; dans <i>Leute</i> <b>eu</b> se prononce [ɔʏ]."
      },
      {
        tr: "Malgré la pluie, beaucoup de gens sont venus à la manifestation.",
        why: "Dans <i>Regens</i> le <b>e</b> de la première syllabe est long ; dans <i>Demonstration</i> l'accent tombe sur la dernière syllabe, <b>tion</b> [tsi̯oːn]."
      }
    ]
  },
  "lesson:b2-u06-l2": {
    theme: "Conditions et prises de position",
    title: "auch wenn, selbst wenn",
    objectives: [
      "exprimer une concession sur un cas possible avec auch wenn",
      "la renforcer avec selbst wenn",
      "unir concession et hypothèse irréelle avec le Konjunktiv II",
      "distinguer obwohl de auch wenn"
    ],
    theory: [
      {
        h: "Un fait ou un cas possible",
        p: "<strong>obwohl</strong> présente un fait : <em>Obwohl es regnet</em>, il pleut vraiment. <strong>auch wenn</strong> convient pour un fait et aussi pour un cas seulement possible : <em>Auch wenn es morgen regnet, fahren wir los</em>, il pleuvra peut-être, peut-être pas. <strong>selbst wenn</strong> est plus fort : « même si ». Comme avec <em>obwohl</em>, la principale qui suit commence par le verbe : <em>Auch wenn du recht hast, <strong>solltest du</strong> höflich bleiben.</em>"
      },
      {
        h: "Avec l'hypothèse irréelle",
        p: "Si le cas est irréel, le <strong>Konjunktiv II</strong> entre dans les deux propositions : <em>Selbst wenn ich Zeit hätte, würde ich nicht mitkommen.</em> Au passé : <em>Selbst wenn sie gewonnen hätte, wäre sie nicht zufrieden gewesen.</em> Une construction proche est <strong>wie ... auch</strong>, « si ... que » : <em>Wie schwer es auch sein mag, wir schaffen das.</em> Ici la principale garde en général son ordre : <em>wir schaffen</em>."
      },
      {
        contrast: "<em>Même si</em> correspond bien à <em>auch wenn</em> et <em>selbst wenn</em>, et comme <em>si</em> il ne prend jamais le subjonctif en français : <em>même s'il pleut</em>. Pour l'irréel, le français passe à l'imparfait et au conditionnel (<em>même si j'avais le temps, je ne viendrais pas</em>) ; l'allemand met le Konjunktiv II dans les deux propositions : <em>hätte ... würde</em>."
      },
      {
        trap: "<em>selbst</em> ne veut pas dire ici « soi-même » : <em>selbst wenn</em>, c'est « même si ». Et après la subordonnée, ne revenez pas à l'ordre français : <em>Auch wenn es regnet, gehen wir</em>, pas <em>Auch wenn es regnet, wir gehen</em>."
      },
      {
        tip: "Si vous pouvez dire « même si » en français, <em>auch wenn</em> ou <em>selbst wenn</em> conviennent ; si vous diriez plutôt « bien que », pensez d'abord à <em>obwohl</em>."
      }
    ],
    grammar: {
      title: "auch wenn, selbst wenn et l'hypothèse irréelle",
      note: "<b>obwohl</b> : un fait. <b>auch wenn</b> : un fait ou un cas possible. <b>selbst wenn</b> : « même si ». Hypothèse irréelle : <b>Konjunktiv II</b> dans les deux propositions.",
      table: {
        head: ["phrase", "ce qu'elle exprime"],
        rows: [
          ["Obwohl es regnet, gehen wir spazieren.", "un fait : il pleut vraiment"],
          ["Auch wenn es morgen regnet, fahren wir los.", "un cas possible"],
          ["Selbst wenn ich Zeit hätte, würde ich nicht mitkommen.", "hypothèse irréelle, Konjunktiv II"],
          ["Wie schwer es auch sein mag, wir schaffen das.", "« si ... que » : principale en général sans inversion"]
        ]
      },
      examples: [
        { tr: "Même s'il pleut, nous allons nous promener.", note: "auch wenn : un fait ou une possibilité" },
        { tr: "Même si j'avais le temps, je ne viendrais pas.", note: "irréel : hätte ... würde" },
        { tr: "Même si tu as raison, tu devrais rester poli.", note: "après la subordonnée : solltest du" },
        { tr: "Nous partons demain, même s'il fait mauvais.", note: "selbst wenn : même si" },
        { tr: "Si difficile que ce soit, nous y arriverons.", note: "wie ... auch : la principale reste wir schaffen" },
        { tr: "Même si elle avait gagné, elle n'aurait pas été satisfaite.", note: "irréel au passé : hätte ... gewonnen, wäre ... gewesen" }
      ]
    },
    vocab: [
      "la condition",
      "la condition préalable",
      "le risque",
      "la décision",
      "le point de vue, la position",
      "la majorité",
      "même si",
      "même si (plus fort)",
      "même",
      "admettre, avouer",
      "céder",
      "insister (auf + datif : sur)"
    ],
    exercises: [
      {
        q: "Quelle phrase est correcte ?",
        opts: [
          "Auch wenn es regnet, gehen wir spazieren.",
          "Auch wenn es regnet, wir gehen spazieren.",
          "Auch wenn regnet es, gehen wir spazieren."
        ],
        why: "Verbe à la fin de la subordonnée (<i>es regnet</i>), puis la principale commence par le verbe : <b>gehen wir</b>."
      },
      {
        q: "Quelle phrase exprime correctement une hypothèse irréelle ?",
        opts: [
          "Selbst wenn ich Zeit hätte, würde ich nicht mitkommen.",
          "Selbst wenn ich Zeit habe, würde ich nicht mitkommen.",
          "Selbst wenn hätte ich Zeit, würde ich nicht mitkommen."
        ],
        why: "Irréel : Konjunktiv II dans les deux propositions, <b>hätte ... würde</b>. La deuxième mélange indicatif et Konjunktiv, la troisième ne met pas le verbe à la fin."
      },
      {
        q: "Vous ne savez pas encore s'il pleuvra demain. Quelle phrase convient ?",
        opts: [
          "Auch wenn es morgen regnet, fahren wir los.",
          "Obwohl es morgen regnet, fahren wir los.",
          "Trotz es morgen regnet, fahren wir los."
        ],
        why: "<b>auch wenn</b> convient pour un cas seulement possible ; <i>obwohl</i> présente la pluie comme un fait certain. <i>trotz</i> est une préposition et n'ouvre pas de proposition."
      },
      {
        q: "Complétez : « ___ wenn du recht hast, solltest du höflich bleiben. »",
        hint: "auch ou selbst",
        why: "<b>Auch</b> ou <b>Selbst</b> : <i>auch wenn</i> « même si », <i>selbst wenn</i> un « même si » plus fort."
      },
      {
        q: "Complétez : « Selbst wenn ich das Geld hätte, ___ ich das Auto nicht kaufen. »",
        hint: "Konjunktiv II de werden, ich",
        why: "<b>würde</b> : dans l'hypothèse irréelle, la principale passe aussi au Konjunktiv II, <i>würde ... kaufen</i>."
      },
      {
        q: "Complétez la phrase.",
        tr: "Nous partons demain, même s'il fait mauvais.",
        why: "<i>Wir fahren morgen los, auch wenn das Wetter schlecht ist</i> (ou <i>selbst wenn</i>) : le verbe <i>ist</i> va à la fin de la subordonnée."
      },
      {
        q: "Quelles phrases sont correctes ?",
        opts: [
          "Auch wenn es spät ist, rufe ich dich an.",
          "Selbst wenn er fragt, sage ich nichts.",
          "Auch wenn es spät ist, ich rufe dich an.",
          "Selbst wenn fragt er, sage ich nichts."
        ],
        why: "Les deux premières. La troisième ne met pas le verbe en tête après la subordonnée, la quatrième n'envoie pas le verbe à la fin de la subordonnée."
      },
      {
        q: "Remettez les mots dans l'ordre.",
        tr: "Même si j'avais le temps, je ne viendrais pas.",
        why: "<i>Selbst wenn ich Zeit hätte, würde ich nicht mitkommen.</i> <i>hätte</i> ferme la subordonnée, <i>würde</i> ouvre la principale, l'infinitif <i>mitkommen</i> va à la fin."
      },
      {
        q: "Traduisez : « Même s'il a raison, il ne devrait pas crier. » (schreien)",
        why: "<i>Auch wenn er recht hat, sollte er nicht schreien</i> (aussi <i>selbst wenn</i>, ou <i>Recht</i> avec une majuscule) : après la subordonnée, le verbe <i>sollte</i> vient en tête."
      },
      {
        tr: "Bien que la majorité y ait été opposée, le maire a maintenu son plan. Même s'il y a des protestations, il ne veut pas céder.",
        why: "Dans <i>Mehrheit</i> le <b>e</b> est long et le <b>h</b> de <i>-heit</i> se prononce [h] ; dans <i>festgehalten</i> l'accent tombe sur <b>fest</b> ; dans <i>Proteste</i> sur <b>tes</b>."
      },
      {
        tr: "Même si j'avais plus d'argent, je continuerais à habiter ici.",
        why: "Dans <i>hätte</i> le <b>ä</b> est bref ; dans <i>würde</i> le <b>ü</b> est bref ; dans <i>wohnen</i> le <b>o</b> est long et le <b>h</b> est muet."
      }
    ]
  },
  "lesson:b2-u06-l3": {
    theme: "Corriger et nuancer",
    title: "jedoch, allerdings, sondern, vielmehr",
    objectives: [
      "opposer deux idées avec jedoch et hingegen",
      "nuancer une affirmation avec allerdings et zwar ... aber",
      "corriger une affirmation avec sondern et vielmehr",
      "reconnaître les connecteurs typiques de l'écrit"
    ],
    theory: [
      {
        h: "Opposer et nuancer",
        p: "<strong>jedoch</strong> (« cependant ») est typique de l'écrit : il se comporte comme un adverbe et peut se placer en tête, avec le verbe juste après, ou à l'intérieur de la proposition. <em>Der Vorschlag klingt gut. Er ist jedoch zu teuer.</em> <strong>allerdings</strong> (« toutefois, il est vrai que ») nuance ce qu'on vient de dire : <em>Die Wohnung ist schön, allerdings ziemlich laut.</em> <strong>hingegen</strong> (« en revanche ») oppose deux éléments ou deux situations : <em>Ich trinke Kaffee, meine Frau hingegen trinkt Tee.</em> <strong>zwar ... aber</strong> concède puis objecte : <em>Das Auto ist zwar alt, aber es fährt gut.</em>"
      },
      {
        h: "Corriger",
        p: "<strong>sondern</strong> suit une négation (<em>nicht</em>, <em>kein</em>) et met le bon élément à la place de l'élément nié : <em>Das Problem ist nicht das Geld, sondern die Zeit.</em> Il fait aussi partie de <em>nicht nur ... sondern auch</em> : <em>Er ist nicht nur Arzt, sondern auch Musiker.</em> <strong>vielmehr</strong> (« plutôt, au contraire ») corrige plus fortement, souvent dans une nouvelle phrase : <em>Das war kein Zufall. Vielmehr hatte er alles geplant.</em>"
      },
      {
        contrast: "Le français emploie <em>mais</em> aussi bien pour ajouter une objection que pour corriger : <em>il n'est pas riche, mais il est heureux</em> et <em>il ne vient pas aujourd'hui, mais demain</em>. L'allemand les distingue : <em>Er ist nicht reich, aber glücklich</em> (les deux sont vrais) et <em>Er kommt nicht heute, sondern morgen</em> (le second remplace le premier). Et <em>non seulement ... mais aussi</em> se rend en général par <em>nicht nur ... sondern auch</em>."
      },
      {
        trap: "<em>sondern</em> introduit une correction après une négation (<em>Er kommt nicht heute, sondern morgen</em>) ; dans <em>nicht nur ..., sondern auch</em>, il ajoute au contraire un second élément. Si la première affirmation reste vraie et que vous ajoutez une limite, il faut <em>aber</em> ou <em>allerdings</em> : <em>Das Essen war gut, aber teuer.</em>"
      },
      {
        tip: "Essayez de reformuler avec « non pas ... mais » : si « non pas aujourd'hui, mais demain » fonctionne, il vous faut <em>sondern</em>. Si « toutefois » fonctionne, il vous faut <em>aber</em> ou <em>allerdings</em>."
      }
    ],
    grammar: {
      title: "Connecteurs pour opposer, nuancer et corriger",
      note: "<b>jedoch</b>, <b>allerdings</b>, <b>hingegen</b>, <b>vielmehr</b> se comportent comme des adverbes : en tête, le verbe suit immédiatement. <b>sondern</b> après une négation, pour corriger, et dans <i>nicht nur ... sondern auch</i>.",
      table: {
        head: ["connecteur", "sens", "emploi"],
        rows: [
          ["jedoch", "cependant", "écrit ; en tête ou à l'intérieur de la proposition"],
          ["allerdings", "toutefois, il est vrai que", "nuance ce qu'on vient de dire"],
          ["hingegen", "en revanche", "oppose deux éléments ou situations"],
          ["zwar ... aber", "certes ... mais", "concède, puis objecte"],
          ["sondern", "mais (au contraire)", "après nicht ou kein, corrige"],
          ["vielmehr", "plutôt, au contraire", "corrige plus fortement, souvent dans une nouvelle phrase"]
        ]
      },
      examples: [
        { tr: "La proposition semble bonne. Elle est cependant trop chère.", note: "jedoch à l'intérieur de la proposition" },
        { tr: "L'appartement est beau, toutefois assez bruyant.", note: "allerdings : nuance" },
        { tr: "Le problème n'est pas l'argent, mais le temps.", note: "nicht ..., sondern : correction" },
        { tr: "Il n'est pas seulement médecin, mais aussi musicien.", note: "nicht nur ... sondern auch" },
        { tr: "Ce n'était pas un hasard. Au contraire, il avait tout planifié.", note: "vielmehr en tête : hatte er" },
        { tr: "Je bois du café ; ma femme, en revanche, boit du thé.", note: "hingegen : opposition entre deux éléments" }
      ]
    },
    vocab: [
      "la thèse",
      "l'affirmation, l'allégation",
      "la preuve, la pièce justificative",
      "la conclusion (que l'on tire)",
      "le contraste, l'opposé (im Gegensatz zu : contrairement à)",
      "la restriction, la réserve",
      "cependant",
      "toutefois, il est vrai que",
      "mais (après une négation)",
      "plutôt, au contraire",
      "en revanche",
      "certes (zwar ... aber)"
    ],
    exercises: [
      {
        q: "Complétez : « Er kommt nicht heute, ___ morgen. »",
        opts: [
          "sondern",
          "denn",
          "obwohl"
        ],
        why: "Après la négation, <b>sondern</b> met la bonne information à la place de celle qui est niée : non pas aujourd'hui, mais demain. <i>denn</i> introduit une cause, <i>obwohl</i> une subordonnée avec le verbe à la fin."
      },
      {
        q: "Complétez : « Das Essen war gut, ___ etwas teuer. »",
        opts: [
          "allerdings",
          "sondern",
          "vielmehr"
        ],
        why: "<b>allerdings</b> nuance une affirmation qui reste vraie. <i>sondern</i> et <i>vielmehr</i> corrigent, et ici il n'y a rien à corriger."
      },
      {
        q: "Complétez : « Sie spricht nicht nur Deutsch, ___ auch Japanisch. »",
        opts: [
          "sondern",
          "denn",
          "vielmehr"
        ],
        why: "<i>nicht nur ... <b>sondern</b> auch</i> correspond à « non seulement ... mais aussi »."
      },
      {
        q: "Complétez : « Er ist nicht krank, ___ nur müde. »",
        hint: "correction après une négation",
        why: "<b>sondern</b> : il n'est pas malade, il est seulement fatigué."
      },
      {
        q: "Complétez : « Das Auto ist ___ alt, aber es fährt gut. »",
        hint: "certes ... mais",
        why: "<b>zwar</b> ... <i>aber</i> : vous concédez qu'elle est vieille, puis vous ajoutez l'objection."
      },
      {
        q: "Complétez la phrase.",
        tr: "Ce n'était pas un hasard. Au contraire, il avait tout planifié.",
        why: "<i>Vielmehr hatte er alles geplant</i> : <i>vielmehr</i> en tête, puis le verbe <i>hatte</i>, le participe <i>geplant</i> à la fin."
      },
      {
        q: "Associez chaque connecteur à son sens.",
        pairs: [
          "cependant",
          "toutefois, il est vrai que",
          "plutôt, au contraire",
          "en revanche (dans une opposition)"
        ]
      },
      {
        q: "Remettez les mots dans l'ordre.",
        tr: "Je bois du café ; ma femme, en revanche, boit du thé.",
        why: "<i>Ich trinke Kaffee, meine Frau hingegen trinkt Tee</i> : <i>hingegen</i> après le sujet ; il peut aussi suivre le verbe, <i>meine Frau trinkt hingegen Tee</i>."
      },
      {
        q: "Traduisez : « Le problème n'est pas l'argent, mais le temps. »",
        why: "<i>Das Problem ist nicht das Geld, sondern die Zeit</i> : après la négation, la correction prend <i>sondern</i>, pas <i>aber</i>."
      },
      {
        tr: "L'étude montre certes des progrès, mais les résultats ne sont pas encore sûrs. Le problème n'est pas la technique, mais le manque d'argent.",
        why: "Dans <i>Fortschritte</i> l'accent tombe sur <b>Fort</b> ; dans <i>Ergebnisse</i> sur <b>geb</b> ; dans <i>Technik</i> <b>ch</b> se prononce [ç]."
      },
      {
        tr: "Ce n'est pas une question d'argent ; c'est plutôt une question de respect.",
        why: "Dans <i>vielmehr</i> l'accent tombe sur <b>mehr</b> ; dans <i>Respekt</i> sur <b>spekt</b> ; dans <i>geht</i> le <b>h</b> est muet."
      }
    ]
  },
  "lesson:b2-u06-test": {
    theme: "Vérification",
    title: "Test : Même s'il pleut",
    objectives: [
      "vérifier les concessives et les connecteurs, et réviser le Konjunktiv II, le Konjunktiv I et le passif du niveau B2"
    ],
    theory: [
      {
        p: "Douze questions sur l'unité et sur tout le niveau B2. On réussit avec 70 %. Ne regardez pas les leçons pendant que vous répondez : si vous ne vous souvenez pas de quelque chose, mieux vaut revenir en arrière et réviser."
      }
    ],
    exercises: [
      {
        q: "Complétez : « ___ des Regens fand das Fest statt. »",
        hint: "préposition concessive + génitif",
        why: "<b>Trotz</b> : préposition concessive avec le génitif <i>des Regens</i>."
      },
      {
        q: "Complétez : « Wenn ich mehr Zeit gehabt ___, wäre ich gekommen. »",
        hint: "Konjunktiv II de haben, ich",
        why: "<b>hätte</b> : hypothèse irréelle au passé, <i>hätte ... gehabt</i>."
      },
      {
        q: "Complétez, dans le style de la presse : « Sie erklärte, sie ___ das Problem nicht gekannt. »",
        hint: "Konjunktiv I de haben, sie (elle)",
        why: "<b>habe</b> : discours indirect au passé, <i>habe ... gekannt</i>."
      },
      {
        q: "Complétez au passif, au Präteritum : « Die Brücke ___ im Jahr 1900 gebaut. »",
        hint: "Präteritum de werden, troisième personne du singulier",
        why: "<b>wurde</b> : passif avec <i>werden</i> + participe, <i>wurde ... gebaut</i>."
      },
      {
        q: "Complétez : « Obwohl er krank war, ... »",
        opts: [
          "ging er zur Arbeit.",
          "er ging zur Arbeit.",
          "ging zur Arbeit er."
        ],
        why: "Après la subordonnée, la principale commence par le verbe : <b>ging er</b>."
      },
      {
        q: "Quelle phrase est correcte ?",
        opts: [
          "Das Formular muss heute ausgefüllt werden.",
          "Das Formular muss heute ausgefüllt worden.",
          "Das Formular muss heute ausfüllen werden."
        ],
        why: "Passif avec un modal : modal + participe + <b>werden</b>. <i>worden</i> s'emploie aux temps composés, pas après un modal au présent."
      },
      {
        q: "Complétez : « Er tut so, als ob er nichts ___. »",
        opts: [
          "wüsste",
          "gewusst",
          "wissen"
        ],
        why: "Dans les comparaisons irréelles avec <i>als ob</i>, on emploie normalement le Konjunktiv II : parmi ces options, <b>wüsste</b> est la seule correcte."
      },
      {
        q: "Quelles phrases sont correctes ?",
        opts: [
          "Auch wenn es regnet, gehen wir spazieren.",
          "Trotz des Regens gehen wir spazieren.",
          "Obwohl es regnet, wir gehen spazieren.",
          "Trotz es regnet, gehen wir spazieren."
        ],
        why: "Les deux premières. La troisième ne met pas le verbe en tête après la subordonnée ; la quatrième emploie <i>trotz</i> comme une conjonction, alors que c'est une préposition."
      },
      {
        q: "Complétez la phrase.",
        tr: "Même si j'avais le temps, je ne viendrais pas.",
        why: "<i>Selbst wenn ich Zeit hätte, würde ich nicht mitkommen</i> : Konjunktiv II dans les deux propositions."
      },
      {
        q: "Traduisez : « Malgré la circulation, nous sommes arrivés à l'heure. » (der Verkehr)",
        why: "<i>Trotz des Verkehrs sind wir pünktlich angekommen</i> : <i>trotz</i> + génitif ; <i>kamen wir ... an</i> et la version avec <i>wir</i> en tête sont correctes aussi."
      },
      {
        tr: "Bien que le gouvernement ait promis de nouvelles lois, rien n'a changé pendant longtemps. Les critiques ont dit qu'on n'avait pas pris les citoyens au sérieux.",
        why: "Dans <i>Regierung</i> l'accent tombe sur <b>gie</b> ; dans <i>versprochen</i> le <b>v</b> se prononce [f] ; dans <i>Kritiker</i> l'accent tombe sur <b>Kri</b>."
      },
      {
        tr: "Même si les coûts sont élevés, le projet devrait être poursuivi.",
        why: "Dans <i>Kosten</i> le <b>o</b> est bref ; dans <i>Projekt</i> l'accent tombe sur <b>jekt</b> ; dans <i>fortgesetzt</i> sur <b>fort</b>."
      }
    ]
  }
});
