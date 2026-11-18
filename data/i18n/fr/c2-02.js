/* ============================================================
   Learner-language text (fr) for data/core/c2-02.js, unit c2-u04.
   Keys point at ids in the neutral layer; arrays merge by index,
   so their length has to match core.
   Checked by scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("fr", {
  "unit:c2-u04": {
    title: "Ce qui m'inquiète",
    grammarNote: "Relatives au génitif avec dessen et deren (die Forscherin, deren Ergebnisse ...) et avec la préposition devant le pronom (mit dem, auf dessen Grundlage) · relatives avec wer, was et wo(r)- + préposition (Wer zu spät kommt, den ...; alles, was ...; vieles, worüber ...) · constructions de verbes et d'adjectifs qu'on ne devine pas à partir du français : génitif (bedürfen, sich enthalten, beschuldigen, sich bewusst sein) et prépositions (zweifeln an, stolz auf, bestehen auf/in)"
  },
  "lesson:c2-u04-l1": {
    theme: "Argumentation et écriture formelle",
    title: "dessen, deren, mit dem",
    objectives: [
      "employer dessen et deren pour dire « dont » au sens possessif",
      "accorder dessen et deren avec l'antécédent, et non avec le nom qui suit",
      "placer la préposition devant le pronom relatif (mit dem, auf deren Grundlage)",
      "décliner l'adjectif qui suit dessen et deren"
    ],
    theory: [
      {
        h: "Le génitif du pronom relatif",
        p: "Pour exprimer la possession dans une relative (« dont le, dont la »), l'allemand emploie le génitif du pronom relatif : <strong>dessen</strong> si l'antécédent est masculin ou neutre, <strong>deren</strong> s'il est féminin ou pluriel. <em>Der Autor, dessen Roman verfilmt wurde</em>, « l'auteur dont le roman a été adapté au cinéma » ; <em>die Forscherin, deren Ergebnisse umstritten sind</em>, « la chercheuse dont les résultats sont contestés ». Après <em>dessen</em> et <em>deren</em>, il n'y a pas d'article : le pronom en prend la place, et le nom qui suit porte le cas exigé par la relative."
      },
      {
        h: "La préposition se place devant",
        p: "Si le verbe de la relative demande une préposition, celle-ci ouvre la relative et régit le pronom au cas voulu : <em>die Kommission, mit der wir zusammenarbeiten</em> (mit + datif), <em>das Thema, für das sie sich interessiert</em> (für + accusatif). Avec le génitif, la préposition vient aussi en tête, mais elle régit le nom, et non le pronom : dans <em>das Gesetz, auf dessen Grundlage die Behörde entschieden hat</em> et <em>die Kollegen, mit deren Hilfe wir das Projekt abgeschlossen haben</em>, <em>auf</em> et <em>mit</em> régissent <em>Grundlage</em> et <em>Hilfe</em>, tandis que <em>dessen</em> et <em>deren</em> restent au génitif parce qu'ils désignent le possesseur. Le verbe conjugué va à la fin, comme dans toute subordonnée."
      },
      {
        contrast: "Le français <em>dont</em> est invariable et garde l'article devant le nom possédé : <em>l'auteur dont le roman</em>, <em>la chercheuse dont les résultats</em>. L'allemand fait l'inverse sur les deux points : <em>dessen</em> et <em>deren</em> varient selon le genre et le nombre du possesseur, c'est-à-dire de l'antécédent, et ils remplacent l'article. <em>Das Unternehmen, dessen Chefin zurückgetreten ist</em> : <em>dessen</em> parce que <em>das Unternehmen</em> est neutre, même si <em>Chefin</em> est féminin, et pas de <em>die</em> devant <em>Chefin</em>. Après une préposition, le français ne peut plus employer <em>dont</em> et renvoie le possesseur après le nom : <em>la loi sur la base de laquelle</em>, <em>les collègues avec l'aide desquels</em>. L'allemand garde le génitif devant le nom, dans l'ordre inverse : <em>auf dessen Grundlage</em>, <em>mit deren Hilfe</em>."
      },
      {
        trap: "<em>deren</em> et <em>derer</em> ne sont pas la même chose : <em>derer</em> est surtout un démonstratif qui annonce une relative (<em>die Zahl derer, die das Angebot nutzen</em>, « le nombre de ceux qui ... »), et comme possessif devant un nom il ne s'emploie jamais : là, c'est toujours <em>deren</em> (<em>die Forscherin, deren Ergebnisse</em>). Et l'adjectif qui suit <em>dessen</em> et <em>deren</em> prend la déclinaison forte, comme en l'absence d'article : <em>mit dessen neuem Vorschlag</em>, <em>deren letzter Roman</em> ; <em>mit dessen neuen Vorschlag</em> s'entend à l'oral, mais à l'écrit soigné c'est une faute."
      },
      {
        tip: "Pour construire la relative, partez de la phrase indépendante : <em>Die Regierung beruft sich auf ihre Ergebnisse.</em> Le possesseur de <em>Ergebnisse</em> est <em>die Studie</em>, féminin : <em>ihre</em> devient <em>deren</em>, et tout le groupe avec la préposition passe en tête de la relative : <em>die Studie, auf deren Ergebnisse sich die Regierung beruft</em>."
      }
    ],
    grammar: {
      title: "Relatif au génitif et avec préposition",
      note: "<b>dessen</b> : antécédent masculin ou neutre · <b>deren</b> : antécédent féminin ou pluriel. Ils s'accordent avec le possesseur, non avec le nom qui suit, et remplacent l'article. La préposition ouvre la relative : <i>mit dem, auf deren Grundlage</i>. Adjectif après dessen/deren : déclinaison forte.",
      table: {
        head: ["antécédent", "génitif", "avec préposition"],
        rows: [
          ["der Autor", "dessen Roman", "mit dem, auf dessen Grundlage"],
          ["das Gesetz", "dessen Text", "nach dem, auf dessen Grundlage"],
          ["die Forscherin", "deren Ergebnisse", "mit der, mit deren Hilfe"],
          ["die Kollegen", "deren Hilfe", "mit denen, mit deren Hilfe"]
        ]
      },
      examples: [
        { tr: "L'auteur, dont le roman a été adapté au cinéma, vit très retiré.", note: "dessen : der Autor est masculin" },
        { tr: "La chercheuse, dont les résultats sont contestés, a rendu ses données publiques.", note: "deren : die Forscherin est féminin, même si Ergebnisse est au pluriel" },
        { tr: "Les collègues avec l'aide desquels nous avons mené le projet à terme sont partis depuis.", note: "préposition + deren : antécédent pluriel" },
        { tr: "La loi sur la base de laquelle l'administration a décidé est examinée par un tribunal.", note: "auf dessen Grundlage : das Gesetz est neutre" },
        { tr: "La commission avec laquelle nous collaborons depuis des années a publié ses recommandations.", note: "mit + datif féminin : mit der" },
        { tr: "Le ministre, dont la nouvelle proposition ne convainc presque personne, maintient son plan.", note: "après dessen, l'adjectif est fort : neuem" }
      ]
    },
    vocab: [
      "l'objection",
      "la réserve, la réticence",
      "la portée (d'une décision)",
      "les faits, l'état des choses",
      "la base, le fondement",
      "l'auteur, l'instigateur (de quelque chose)",
      "la crédibilité",
      "le parcours (professionnel)",
      "quitter (une fonction), se retirer (d'un organe)",
      "rendre public, divulguer",
      "controversé, contesté",
      "retiré, à l'écart"
    ],
    exercises: [
      {
        q: "Complétez : « Der Schriftsteller, ___ Roman gerade verfilmt wird, gibt keine Interviews. »",
        opts: [
          "dessen",
          "deren",
          "dem"
        ],
        why: "L'antécédent <i>der Schriftsteller</i> est masculin : <b>dessen</b>, « dont le ». <i>deren</i> irait avec un antécédent féminin ou pluriel ; <i>dem</i> est un datif, pas un possessif."
      },
      {
        q: "Complétez : « Das Unternehmen, ___ Chefin vergangene Woche zurückgetreten ist, sucht einen Nachfolger. »",
        opts: [
          "dessen",
          "deren",
          "der"
        ],
        why: "C'est le possesseur qui compte, <i>das Unternehmen</i>, qui est neutre : <b>dessen</b>. Le genre de <i>Chefin</i> ne joue aucun rôle : choisir <i>deren</i>, c'est accorder le pronom avec la cheffe au lieu de l'entreprise."
      },
      {
        q: "Complétez : « Die Ministerin, mit deren ___ Vorschlag niemand einverstanden war, trat zurück. »",
        opts: [
          "neuem",
          "neuen",
          "neue"
        ],
        why: "Après <i>dessen</i> et <i>deren</i>, l'adjectif prend la déclinaison forte, comme sans article : <i>mit</i> + datif masculin, <b>neuem</b>. <i>neuen</i> est fréquent à l'oral, mais à l'écrit soigné il est considéré comme une faute ; <i>neue</i> n'est pas un datif."
      },
      {
        q: "Complétez : « Das ist die Kollegin, mit ___ Hilfe ich die Studie abgeschlossen habe. »",
        hint: "relatif possessif, antécédent féminin",
        why: "<b>deren</b> : <i>die Kollegin</i> est féminin, et <i>mit deren Hilfe</i> signifie « avec l'aide de qui ». La préposition reste devant, et le nom qui suit le pronom n'a pas d'article."
      },
      {
        q: "Complétez : « Der Kollege, mit ___ ich das Büro teile, ist im Urlaub. »",
        hint: "pronom relatif après mit, antécédent masculin",
        why: "<b>dem</b> : <i>mit</i> régit le datif et l'antécédent <i>der Kollege</i> est masculin. En français « avec qui » ne change pas ; en allemand le pronom se décline."
      },
      {
        q: "Complétez avec le relatif possessif : la première lacune concerne la Studie, la seconde l'Institut.",
        tr: "L'étude sur les résultats de laquelle s'appuie le gouvernement a été réalisée par un institut dont le financement n'est toujours pas éclairci.",
        why: "<b>deren</b> : <i>die Studie</i> est féminin (<i>auf deren Ergebnisse</i>, avec <i>sich berufen auf</i> + accusatif). <b>dessen</b> : <i>das Institut</i> est neutre, même si <i>Finanzierung</i> est féminin."
      },
      {
        q: "Dans quelles phrases le pronom relatif est-il correct ? (deux réponses)",
        opts: [
          "Die Nachbarin, deren Sohn bei uns arbeitet, ist Ärztin.",
          "Das Projekt, an dessen Erfolg niemand mehr glaubte, wurde doch abgeschlossen.",
          "Die Nachbarin, dessen Sohn bei uns arbeitet, ist Ärztin.",
          "Das Projekt, an den Erfolg niemand mehr glaubte, wurde doch abgeschlossen."
        ],
        why: "Les deux premières sont correctes : <i>deren</i> pour l'antécédent féminin <i>die Nachbarin</i>, <i>an dessen Erfolg</i> pour le neutre <i>das Projekt</i>. Dans la troisième, <i>dessen</i> suit le genre de <i>Sohn</i> au lieu de celui du possesseur ; dans la quatrième, le génitif manque : <i>an den Erfolg</i> ne dit pas à qui est le succès."
      },
      {
        q: "Remettez les mots dans l'ordre.",
        tr: "L'entreprise pour les produits de laquelle elle fait de la publicité est critiquée depuis des mois.",
        why: "<i>Die Firma, für deren Produkte sie wirbt, steht seit Monaten in der Kritik.</i> <i>werben für</i> : la préposition ouvre la relative, <i>deren</i> renvoie à <i>die Firma</i>, le verbe <i>wirbt</i> ferme la subordonnée."
      },
      {
        q: "Traduisez : « L'écrivaine, dont le dernier roman a été traduit en vingt langues, vit à Vienne. » (übersetzen)",
        why: "<i>Die Schriftstellerin, deren letzter Roman in zwanzig Sprachen übersetzt wurde, lebt in Wien.</i> <i>deren</i> parce que l'antécédent est féminin, et pas d'article à la place du « le » de <i>dont le</i> ; <i>letzter</i> porte la désinence forte du nominatif masculin. <i>Autorin</i> et le Perfekt passif <i>übersetzt worden ist</i> sont aussi acceptés."
      },
      {
        tr: "Le rapport, dont la publication était attendue depuis des mois, ne contient presque rien de nouveau. Les experts sur l'avis desquels s'appuie le gouvernement restent anonymes.",
        why: "Dans <i>Veröffentlichung</i>, l'accent tombe sur <b>öf</b> ; dans <i>Urteil</i>, l'accent tombe sur <b>Ur</b> ; dans <i>anonym</i>, l'accent tombe sur <b>nym</b>."
      },
      {
        tr: "L'autrice, dont le roman a été adapté au cinéma, vit très retirée.",
        why: "Dans <i>Autorin</i>, l'accent tombe sur <b>to</b> ; dans <i>verfilmt</i>, l'accent tombe sur <b>filmt</b> ; dans <i>zurückgezogen</i>, l'accent tombe sur <b>rück</b>."
      }
    ]
  },
  "lesson:c2-u04-l2": {
    theme: "Argumentation et écriture formelle",
    title: "wer, was, worüber",
    objectives: [
      "employer wer pour « celui qui, quiconque » et choisir le cas du corrélatif (der, den, dem)",
      "employer was après alles, nichts, etwas, das et les superlatifs neutres",
      "rapporter was à toute une phrase (« ce qui, ce que »)",
      "remplacer préposition + was par wo(r)- + préposition (worüber, wofür, wovor)"
    ],
    theory: [
      {
        h: "wer : « celui qui » sans antécédent",
        p: "<strong>wer</strong> ouvre une relative qui ne renvoie à aucun nom : <em>Wer zu spät kommt, den bestraft das Leben</em>, « celui qui arrive trop tard, la vie le punit ». La principale reprend la relative par un démonstratif, le corrélatif, au cas dont elle a besoin : <em>den</em> (accusatif, <em>bestrafen</em>), <em>dem</em> (datif : <em>Wer viel verspricht, dem glaubt man nicht</em>). Si les deux cas coïncident, le corrélatif peut être omis : <em>Wer A sagt, (der) muss auch B sagen</em>. Il peut aussi tomber quand le cas de la relative est de rang inférieur à celui de la principale (nominatif, puis accusatif, puis datif) : <em>Wem das zu viel ist, (der) kann gehen</em> ; la plupart des auteurs le gardent malgré tout, pour la clarté. <em>wer</em> se décline lui aussi : <em>wem</em>, <em>wen</em>, <em>wessen</em>."
      },
      {
        h: "was et wo(r)-",
        p: "<strong>was</strong> remplace <em>das</em> quand l'antécédent n'est pas un nom précis : après <em>alles, nichts, etwas, vieles, manches, das</em> et après un superlatif neutre substantivé (<em>das Beste, was ...</em>). On l'emploie aussi sans antécédent (<em>Was mich beunruhigt, ist ...</em>) et pour reprendre toute une phrase : <em>Er hat bestanden, was niemand erwartet hatte</em>, « ce que personne n'attendait ». Si le verbe demande une préposition, préposition + <em>was</em> est remplacé par <strong>wo(r)- + préposition</strong> : <em>vieles, worüber wir uns nicht einig waren</em>. Le <em>r</em> apparaît devant une voyelle : <em>woran, worauf, worüber</em>, mais <em>wofür, womit, wovon, wovor</em>."
      },
      {
        contrast: "Le français distingue <em>celui qui</em>, <em>ce qui</em>, <em>ce que</em>, <em>ce dont</em>, et l'allemand se contente de deux mots : <em>wer</em> pour les personnes, <em>was</em> pour tout le reste, y compris le <em>ce que</em> qui reprend toute une phrase. <em>Tout ce qu'il dit</em> devient <em>alles, was er sagt</em>, sans rien qui corresponde à <em>ce</em>. Là où le français dit <em>ce dont, ce à quoi, ce sur quoi, ce pour quoi</em>, l'allemand soude préposition et pronom en un seul mot : <em>das, worüber wir sprechen</em>, <em>alles, wofür sie gekämpft hat</em>. Et à l'écrit, <em>celui qui</em> en français se passe généralement de reprise (<em>qui ne dit mot consent</em>), alors que l'allemand ajoute en général le corrélatif quand le cas change : <em>Wem die Reform schadet, den hat man nicht gefragt</em>, « ceux à qui la réforme nuit, on ne les a pas consultés »."
      },
      {
        trap: "Après <em>alles, nichts, etwas, das Einzige, das Beste</em>, il faut <em>was</em>, pas <em>das</em> : <em>Alles, was er sagt</em>, et non <em>alles, das er sagt</em>. À l'écrit formel, évitez <em>über was, für was</em> : ces formes sont familières, la forme soignée est <em>worüber, wofür</em>. Avec un antécédent qui est un nom précis, en revanche, on garde préposition + <em>der/die/das</em> : <em>die Frage, über die wir sprechen</em>."
      },
      {
        tip: "Pour choisir entre <em>wer</em> et le corrélatif, posez deux questions distinctes : quel cas demande le verbe de la relative (<em>schaden</em> + datif : <em>wem</em>) ? Et quel cas demande le verbe de la principale (<em>fragen</em> + accusatif : <em>den</em>) ? Les deux réponses peuvent différer, et c'est là qu'il faut d'ordinaire le corrélatif."
      }
    ],
    grammar: {
      title: "Relatives avec wer, was et wo(r)-",
      note: "<b>wer ..., der/den/dem</b> : « celui qui », corrélatif au cas de la principale (omissible si le cas est le même). <b>was</b> : après alles, nichts, etwas, das, das Beste ; sans antécédent ; pour reprendre toute une phrase. <b>wo(r)- + préposition</b> à la place de préposition + was : <i>worüber, woran, wofür, wovor</i>.",
      table: {
        head: ["antécédent", "relatif", "exemple"],
        rows: [
          ["aucun (personnes)", "wer, wem, wen", "Wer lügt, dem glaubt man nicht."],
          ["alles, nichts, etwas, das", "was", "Alles, was er sagt, stimmt."],
          ["superlatif neutre", "was", "das Beste, was passieren konnte"],
          ["toute une phrase", "was", "..., was niemand erwartet hatte."],
          ["was + préposition", "wo(r)- + préposition", "vieles, worüber wir streiten"]
        ]
      },
      examples: [
        { tr: "Celui qui arrive trop tard, la vie le punit.", note: "wer + corrélatif à l'accusatif : bestrafen demande l'accusatif" },
        { tr: "Ce qui m'inquiète, c'est l'indifférence de beaucoup de gens.", note: "was sans antécédent, comme sujet" },
        { tr: "Tout ce qu'il a affirmé a pu être réfuté.", note: "après alles : was" },
        { tr: "La meilleure chose qui pouvait nous arriver, c'était ce refus.", note: "après un superlatif neutre : was" },
        { tr: "Il a réussi l'examen, ce que personne n'attendait.", note: "was reprend toute la phrase précédente" },
        { tr: "Il y avait beaucoup de choses sur lesquelles nous n'étions pas d'accord.", note: "sich einig sein über : worüber" }
      ]
    },
    vocab: [
      "l'indifférence",
      "l'affirmation, la thèse",
      "la contradiction",
      "la conclusion (logique)",
      "le raisonnement fallacieux, l'illusion",
      "la demande, la préoccupation",
      "réfuter, démentir",
      "attester, prouver",
      "inquiéter",
      "admettre, concéder",
      "fondé, convaincant",
      "contestable, douteux"
    ],
    exercises: [
      {
        q: "Complétez : « Alles, ___ sie gesagt hat, war gelogen. »",
        opts: [
          "was",
          "das",
          "welches"
        ],
        why: "Après <i>alles</i>, le relatif est <b>was</b> : l'antécédent n'est pas un nom précis. <i>das</i> et <i>welches</i> demanderaient un nom neutre comme antécédent."
      },
      {
        q: "Complétez : « ___ sich nicht an die Regeln hält, ___ droht ein Bußgeld. »",
        opts: [
          "Wer ... dem",
          "Wer ... der",
          "Der ... wer"
        ],
        why: "<i>Wer</i> est le sujet de <i>sich halten</i> ; dans la principale, <i>drohen</i> demande le datif, donc le corrélatif est <b>dem</b> : « quiconque ne respecte pas les règles s'expose à une amende ». <i>der</i> serait un nominatif."
      },
      {
        q: "Dans un texte écrit formel : « Das ist eine Frage, ___ ich lange nachgedacht habe. »",
        opts: [
          "über die",
          "worüber",
          "über was"
        ],
        why: "L'antécédent est un nom précis, <i>eine Frage</i>, féminin : <b>über die</b> (<i>nachdenken über</i> + accusatif). <i>worüber</i> s'emploie avec <i>alles, etwas, das</i> ou avec toute une phrase ; après un nom, il est vieilli ou familier. <i>über was</i> est familier."
      },
      {
        q: "Complétez : « Das Einzige, ___ mich an dem Vorschlag stört, ist der Zeitplan. »",
        hint: "relatif après das Einzige",
        why: "<b>was</b> : <i>das Einzige</i>, comme <i>alles</i> et les superlatifs neutres, demande <i>was</i>."
      },
      {
        q: "Complétez : « Das ist genau das, ___ ich Angst hatte. »",
        hint: "wo(r)- + la préposition de Angst haben",
        why: "<b>wovor</b> : <i>Angst haben vor</i> ; après <i>das</i>, préposition + <i>was</i> devient <i>wo(r)-</i> + préposition, là où le français dit « ce dont ». Devant une consonne, pas de <i>r</i> : <i>wovor</i>, et non <i>worvor</i>."
      },
      {
        q: "Complétez avec wer décliné et le corrélatif.",
        tr: "Ceux à qui la réforme nuit le plus sont ceux qu'on a le moins consultés.",
        why: "<b>Wem</b> : <i>schaden</i> demande le datif. <b>den</b> : dans la principale, <i>fragen</i> demande l'accusatif. Les cas sont différents, donc le corrélatif rend la phrase claire ; à la rigueur on pourrait l'omettre, car le datif <i>wem</i> est de rang inférieur à l'accusatif, mais l'écrit soigné le garde."
      },
      {
        q: "Associez chaque mot à son sens.",
        pairs: [
          "admettre, concéder",
          "réfuter, démentir",
          "fondé, convaincant",
          "le raisonnement fallacieux"
        ]
      },
      {
        q: "Remettez les mots dans l'ordre.",
        tr: "Ce qui m'inquiète dans le rapport, c'est l'indifférence des autorités.",
        why: "<i>Was mich an dem Bericht beunruhigt, ist die Gleichgültigkeit der Behörden.</i> La relative avec <i>was</i> sert de sujet et occupe la première position ; le verbe <i>ist</i> suit immédiatement la virgule, sans équivalent du « c'est » français."
      },
      {
        q: "Traduisez : « Tout ce dont nous avons parlé reste confidentiel. » (vertraulich)",
        why: "<i>Alles, worüber wir gesprochen haben, bleibt vertraulich.</i> Avec <i>sprechen über</i>, il faut <i>worüber</i> ; avec un verbe transitif, <i>was</i> suffit : <i>Alles, was wir besprochen haben</i> (ou <i>diskutiert haben</i>)."
      },
      {
        tr: "Ce qui inquiète beaucoup de lecteurs, ce n'est pas l'étude elle-même, mais ce que la politique en fait. Qui lit attentivement les chiffres n'y trouve presque rien qui mérite qu'on s'en émeuve.",
        why: "Dans <i>beunruhigt</i>, l'accent tombe sur <b>un</b> ; dans <i>aufregen</i>, l'accent tombe sur <b>auf</b> ; dans <i>worüber</i>, l'accent tombe sur <b>ü</b>."
      },
      {
        tr: "Tout ce qu'il a affirmé a pu être réfuté.",
        why: "Dans <i>behauptet</i>, l'accent tombe sur <b>haup</b> ; dans <i>widerlegen</i>, verbe inséparable, l'accent tombe sur <b>le</b> ; dans <i>ließ</i>, <b>ie</b> est long."
      }
    ]
  },
  "lesson:c2-u04-l3": {
    theme: "Argumentation et écriture formelle",
    title: "Des constructions qu'on ne devine pas",
    objectives: [
      "employer des verbes et des adjectifs suivis du génitif (bedürfen, sich enthalten, beschuldigen, sich bewusst sein)",
      "choisir la bonne préposition là où le français en emploie une autre (zweifeln an, stolz auf)",
      "distinguer bestehen auf, bestehen aus et bestehen in",
      "reconnaître le registre soutenu des constructions au génitif"
    ],
    theory: [
      {
        h: "Verbes et adjectifs suivis du génitif",
        p: "Un petit groupe de verbes régit un complément au génitif : <em>bedürfen</em> (avoir besoin de, nécessiter), <em>gedenken</em> (commémorer), <em>sich enthalten</em> (s'abstenir de), <em>sich vergewissern</em> (s'assurer de), <em>sich bedienen</em> (se servir de). Certains ont un accusatif et un génitif : <em>jemanden einer Sache beschuldigen</em> ou <em>anklagen</em>, « accuser quelqu'un de quelque chose », et <em>jemanden einer Sache verdächtigen</em>, « soupçonner quelqu'un de quelque chose ». C'est aussi le cas de quelques adjectifs : <em>sich einer Sache bewusst sein</em>, <em>einer Sache würdig</em>, <em>sich einer Sache schuldig machen</em>. Des verbes comme <em>bedürfen</em>, <em>gedenken</em>, <em>sich enthalten</em> et <em>beschuldigen</em> appartiennent au registre soutenu : dans la langue de tous les jours, on dit <em>brauchen</em> plutôt que <em>bedürfen</em>. <em>sich einer Sache bewusst sein</em>, en revanche, est courant aussi dans l'usage ordinaire."
      },
      {
        h: "La préposition s'apprend avec le verbe",
        p: "Beaucoup de verbes et d'adjectifs allemands demandent une préposition fixe, et le cas qui suit fait partie de la construction : <em>zweifeln an</em> + datif, <em>stolz auf</em> + accusatif, <em>angewiesen auf</em> + accusatif, <em>sich erkundigen nach</em> + datif. Le même verbe change de sens selon la préposition : <em>bestehen auf</em> (insister sur), <em>bestehen aus</em> (se composer de), <em>bestehen in</em> (consister en)."
      },
      {
        contrast: "Beaucoup de constructions allemandes ne correspondent pas aux françaises, et traduire la préposition mot à mot mène à l'erreur. Le piège principal est <em>de</em> : « douter <em>de</em> » est <em>zweifeln an</em>, « fier <em>de</em> » est <em>stolz auf</em>, « dépendre <em>de</em> » est <em>abhängen von</em> ; et « s'habituer <em>à</em> » est <em>sich gewöhnen an</em>. Là où le français emploie <em>de</em> pour un complément d'objet (<em>avoir besoin de, accuser de, être conscient de, s'abstenir de</em>), l'allemand soutenu emploie souvent le génitif seul, sans préposition : <em>der Hilfe bedürfen</em>, <em>des Betrugs beschuldigen</em>, <em>sich der Risiken bewusst sein</em>, <em>sich der Stimme enthalten</em>. En revanche, « insister sur » et « consister en » se retrouvent assez bien dans <em>bestehen auf</em> et <em>bestehen in</em>."
      },
      {
        trap: "<em>sich interessieren für</em>, mais <em>interessiert an</em> : le verbe et l'adjectif n'ont pas la même préposition. Et avec <em>bedürfen</em>, le complément n'est jamais à l'accusatif : <em>Der Plan bedarf einer Überarbeitung</em>, et non <em>eine Überarbeitung</em>."
      },
      {
        tip: "Apprenez toujours les verbes et les adjectifs avec leur construction, comme un seul mot : non pas <em>zweifeln</em>, mais <em>an etwas (Dat.) zweifeln</em> ; non pas <em>bewusst</em>, mais <em>sich einer Sache (Gen.) bewusst sein</em>."
      }
    ],
    grammar: {
      title: "Constructions des verbes et des adjectifs",
      note: "<b>Génitif</b> : bedürfen, gedenken, sich enthalten, sich vergewissern ; jemanden einer Sache beschuldigen ; sich einer Sache bewusst sein, einer Sache würdig. <b>Prépositions</b> : zweifeln an + Dat., stolz auf + Akk., angewiesen auf + Akk., bestehen auf / aus / in + Dat. Les verbes suivis du génitif relèvent du registre soutenu.",
      table: {
        head: ["allemand", "français"],
        rows: [
          ["einer Sache bedürfen", "avoir besoin de quelque chose"],
          ["jemanden einer Sache beschuldigen", "accuser quelqu'un de quelque chose"],
          ["sich einer Sache bewusst sein", "être conscient de quelque chose"],
          ["an einer Sache zweifeln", "douter de quelque chose"],
          ["auf etwas stolz sein", "être fier de quelque chose"],
          ["auf etwas bestehen / aus etwas bestehen / in etwas bestehen", "insister sur / se composer de / consister en"]
        ]
      },
      examples: [
        { tr: "La réforme nécessite un examen approfondi.", note: "bedürfen + génitif : einer gründlichen Prüfung" },
        { tr: "On l'a accusé de fraude.", note: "beschuldigen + accusatif de la personne + génitif de l'accusation" },
        { tr: "Elle est tout à fait consciente des risques.", note: "sich bewusst sein + génitif pluriel : der Risiken" },
        { tr: "Deux députés se sont abstenus.", note: "sich der Stimme enthalten : génitif" },
        { tr: "Personne ne doute de l'authenticité du document.", note: "zweifeln an + datif, et non « von »" },
        { tr: "L'opposition insiste pour obtenir une audition publique.", note: "bestehen auf + datif : insister" }
      ]
    },
    vocab: [
      "avoir besoin de (+ génitif)",
      "s'abstenir de (+ génitif)",
      "accuser (quelqu'un de quelque chose)",
      "commémorer (+ génitif)",
      "s'assurer de (+ génitif)",
      "douter de",
      "dépendant de, tributaire de",
      "conscient",
      "fier de",
      "digne de (+ génitif)",
      "la rection, la construction (d'un verbe)",
      "le reproche, l'accusation"
    ],
    exercises: [
      {
        q: "Complétez : « Die Gesetzesänderung bedarf ___. »",
        opts: [
          "der Zustimmung des Bundesrats",
          "die Zustimmung des Bundesrats",
          "auf die Zustimmung des Bundesrats"
        ],
        why: "<i>bedürfen</i> régit le génitif : <b>der Zustimmung</b>. L'accusatif <i>die Zustimmung</i> va avec <i>brauchen</i> ; <i>bedürfen</i> ne prend pas de préposition."
      },
      {
        q: "Complétez : « Niemand zweifelt ___ ihrer Ehrlichkeit. »",
        opts: [
          "an",
          "von",
          "über"
        ],
        why: "<b>zweifeln an</b> + datif. Le français « douter de » pousse vers <i>von</i>, qui est faux ici."
      },
      {
        q: "« L'opposition insiste pour obtenir une audition publique. » Complétez : « Die Opposition besteht ___ einer öffentlichen Anhörung. »",
        opts: [
          "auf",
          "aus",
          "in"
        ],
        why: "<b>bestehen auf</b> : insister sur. <i>bestehen aus</i> signifie « se composer de », <i>bestehen in</i> « consister en »."
      },
      {
        q: "Complétez : « Sie ist sich ___ Risiken durchaus bewusst. »",
        hint: "sich bewusst sein + génitif pluriel",
        why: "<b>der</b> : <i>sich einer Sache bewusst sein</i> régit le génitif, et le génitif pluriel de l'article est <i>der</i>."
      },
      {
        q: "Complétez : « Viele Rentner sind ___ die Hilfe ihrer Kinder angewiesen. »",
        hint: "préposition de angewiesen",
        why: "<b>auf</b> : <i>angewiesen sein auf</i> + accusatif, « dépendre de, avoir besoin de »."
      },
      {
        q: "Complétez : dans la première lacune le pronom relatif, dans la seconde la préposition de bestehen.",
        tr: "Le député, qu'on accuse de corruption, rejette l'accusation et insiste pour obtenir une enquête indépendante.",
        why: "<b>den</b> : <i>beschuldigen</i> veut la personne à l'accusatif (et l'accusation au génitif, <i>der Bestechung</i>). <b>auf</b> : <i>bestehen auf</i>, « insister sur »."
      },
      {
        q: "Dans quelles phrases la construction est-elle correcte ? (deux réponses)",
        opts: [
          "Der Plan bedarf einer gründlichen Überarbeitung.",
          "Wir sind stolz auf unsere Ergebnisse.",
          "Der Plan bedarf eine gründliche Überarbeitung.",
          "Sie interessiert sich an moderner Kunst."
        ],
        why: "Les deux premières sont correctes : <i>bedürfen</i> + génitif, <i>stolz auf</i> + accusatif. Dans la troisième, il y a un accusatif à la place du génitif ; dans la quatrième, le verbe demande <i>für</i> : <i>sich für moderne Kunst interessieren</i>, alors que <i>an</i> va avec l'adjectif <i>interessiert</i>."
      },
      {
        q: "Remettez les mots dans l'ordre.",
        tr: "L'accusée nie s'être rendue coupable de fraude.",
        why: "<i>Die Angeklagte bestreitet, sich des Betrugs schuldig gemacht zu haben.</i> <i>sich einer Sache schuldig machen</i> régit le génitif, sans équivalent du « de » français ; l'infinitif passé <i>gemacht zu haben</i> ferme la phrase."
      },
      {
        q: "Traduisez : « Nous sommes conscients de la responsabilité que nous assumons. » (sich bewusst sein, übernehmen)",
        why: "<i>Wir sind uns der Verantwortung bewusst, die wir übernehmen.</i> <i>sich bewusst sein</i> demande le génitif, et le réfléchi est au datif : <i>uns</i>. La relative peut aussi suivre directement <i>Verantwortung</i> : <i>Wir sind uns der Verantwortung, die wir übernehmen, bewusst</i>."
      },
      {
        tr: "La demande nécessite l'accord de tous les membres. Quiconque ne peut pas participer au vote devrait se renseigner au préalable auprès du conseil d'administration sur les délais.",
        why: "Dans <i>Zustimmung</i>, l'accent tombe sur <b>Zu</b> ; dans <i>Abstimmung</i>, l'accent tombe sur <b>Ab</b> ; dans <i>erkundigen</i>, l'accent tombe sur <b>kun</b>."
      },
      {
        tr: "Elle est tout à fait consciente des risques.",
        why: "Dans <i>Risiken</i>, l'accent tombe sur <b>Ri</b> ; dans <i>durchaus</i>, l'accent peut tomber sur <b>durch</b> ou sur <b>aus</b> ; dans <i>bewusst</i>, le <b>u</b> est bref."
      }
    ]
  },
  "lesson:c2-u04-test": {
    theme: "Évaluation",
    title: "Test : Ce qui m'inquiète",
    objectives: [
      "vérifier les relatives et les constructions de l'unité et réviser le niveau C2 dans l'examen final"
    ],
    theory: [
      {
        p: "Examen final du niveau C2 : douze questions sur l'unité, avec une révision de l'épithète participiale (unité 1) et du registre (unité 3). On le réussit avec 70 %. Ne revenez pas aux leçons pendant que vous répondez : si vous ne vous souvenez pas de quelque chose, mieux vaut revenir en arrière et réviser."
      }
    ],
    exercises: [
      {
        q: "Complétez : « Die Firma, ___ Gründerin den Preis erhalten hat, sitzt in Basel. »",
        hint: "relatif possessif, antécédent féminin",
        why: "<b>deren</b> : <i>die Firma</i> est féminin, et <i>deren Gründerin</i> signifie « dont la fondatrice »."
      },
      {
        q: "Complétez : « Er hat alles verloren, ___ ihm wichtig war. »",
        hint: "relatif après alles",
        why: "<b>was</b> : après <i>alles</i>, le relatif est toujours <i>was</i>."
      },
      {
        q: "Complétez : « Das Vorhaben bedarf ___ sorgfältigen Planung. »",
        hint: "bedürfen + génitif, article",
        why: "<b>einer</b> (ou <b>der</b>) : <i>bedürfen</i> régit le génitif, et le génitif féminin de l'article est <i>einer</i> ou <i>der</i>."
      },
      {
        q: "Complétez avec l'épithète participiale : « Die im Bericht ___ Mängel wurden inzwischen behoben. » (relever, critiquer : beanstanden)",
        hint: "participe II de beanstanden, pluriel après die",
        why: "<b>beanstandeten</b> : participe II à sens passif (« les défauts relevés dans le rapport »), désinence <i>-en</i> après l'article pluriel <i>die</i>. <i>beanstanden</i> est inséparable : pas de <i>ge-</i>."
      },
      {
        q: "Dans une lettre formelle, quelle phrase convient ?",
        opts: [
          "Wir bitten Sie, uns die fehlenden Unterlagen bis zum 15. März zukommen zu lassen.",
          "Schicken Sie uns mal die fehlenden Sachen bis zum 15. März.",
          "Wär nett, wenn Sie uns die Unterlagen bis zum 15. März schicken."
        ],
        why: "La première emploie le registre formel : <i>wir bitten Sie</i>, <i>Unterlagen</i>, <i>zukommen lassen</i>. Dans la deuxième, <i>mal</i> et <i>Sachen</i> sont familiers ; dans la troisième, <i>Wär nett</i> relève de la conversation."
      },
      {
        q: "Complétez : « Die Frage, ___ es eigentlich ankommt, hat niemand gestellt. »",
        opts: [
          "auf die",
          "auf der",
          "auf welcher"
        ],
        why: "<i>es kommt auf etwas an</i> demande <i>auf</i> + accusatif, et l'antécédent <i>die Frage</i> est féminin : <b>auf die</b>. <i>auf der</i> et <i>auf welcher</i> sont des datifs."
      },
      {
        q: "« La difficulté consiste à convaincre toutes les personnes concernées. » Complétez : « Die Schwierigkeit besteht ___, alle Beteiligten zu überzeugen. »",
        opts: [
          "darin",
          "darauf",
          "daraus"
        ],
        why: "<b>bestehen in</b>, « consister en », avec le pronominal <i>darin</i> qui annonce l'infinitive. <i>darauf</i> voudrait dire « insister », <i>daraus</i> « se composer de »."
      },
      {
        q: "Quelles phrases sont correctes ? (deux réponses)",
        opts: [
          "Wer zuletzt lacht, lacht am besten.",
          "Die Studie, auf deren Ergebnisse sich der Bericht stützt, ist veraltet.",
          "Die Studie, auf dessen Ergebnisse sich der Bericht stützt, ist veraltet.",
          "Er ist sich die Risiken bewusst."
        ],
        why: "Les deux premières sont correctes : <i>wer</i> sans corrélatif (même cas dans les deux propositions) et <i>deren</i> pour l'antécédent féminin <i>die Studie</i>. Dans la troisième, <i>dessen</i> ne s'accorde pas avec <i>Studie</i> ; dans la quatrième, <i>sich bewusst sein</i> demande le génitif : <i>der Risiken</i>."
      },
      {
        q: "Complétez : dans la première lacune le relatif possessif, dans la seconde l'article régi par sich schuldig machen.",
        tr: "La ministre, dont on réclame la démission depuis des semaines, nie s'être rendue coupable d'un comportement fautif.",
        why: "<b>deren</b> : <i>die Ministerin</i> est féminin. <b>eines</b> (ou <b>des</b>) : <i>sich einer Sache schuldig machen</i> régit le génitif, et <i>Fehlverhalten</i> est neutre : <i>eines Fehlverhaltens</i>."
      },
      {
        q: "Traduisez dans un registre formel : « Qui est conscient des risques n'a pas besoin d'autres avertissements. » (sich bewusst sein, bedürfen)",
        why: "<i>Wer sich der Risiken bewusst ist, bedarf keiner weiteren Warnungen.</i> <i>sich bewusst sein</i> et <i>bedürfen</i> régissent tous deux le génitif ; le corrélatif <i>der</i> peut être ajouté ou omis, car <i>wer</i> et le sujet de la principale sont tous deux au nominatif."
      },
      {
        tr: "Ce qui inquiète les experts, ce n'est pas tant le nombre de cas que l'indifférence avec laquelle les autorités y réagissent. Les mesures indiquées dans le rapport doivent être vérifiées d'urgence.",
        why: "Dans <i>Gleichgültigkeit</i>, l'accent tombe sur <b>Gleich</b> ; dans <i>Behörden</i>, l'accent tombe sur <b>hör</b> ; dans <i>Überprüfung</i>, l'accent tombe sur <b>prü</b>."
      },
      {
        tr: "Celui qui est conscient de la portée de sa décision agit avec plus de prudence.",
        why: "Dans <i>Tragweite</i>, l'accent tombe sur <b>Trag</b> ; dans <i>Entscheidung</i>, l'accent tombe sur <b>schei</b> ; dans <i>vorsichtiger</i>, l'accent tombe sur <b>vor</b>."
      }
    ]
  }
});
