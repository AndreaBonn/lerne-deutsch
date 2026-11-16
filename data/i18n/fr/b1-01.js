/* ============================================================
   Textes dans la langue de l'élève (fr) pour data/core/b1-01.js, unité b1-u01.
   Les clés renvoient aux id de la couche neutre ; les tableaux se
   joignent par index, leur longueur doit donc correspondre à core.
   Vérifié par scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("fr", {
  "unit:b1-u01": {
    title: "Si j'étais toi",
    grammarNote: "Konjunktiv II au présent (wäre, hätte, würde + infinitif, modaux) · hypothèse réelle et irréelle · Ich finde, dass ... et Meiner Meinung nach ... · obwohl et trotzdem"
  },
  "lesson:b1-u01-l1": {
    theme: "Souhaits et conseils",
    title: "Je serais, j'aurais, je ferais",
    objectives: [
      "exprimer un souhait ou une hypothèse avec wäre et hätte",
      "employer würde + infinitif, qui remplace la forme propre pour la plupart des verbes",
      "donner un conseil avec An deiner Stelle würde ich ...",
      "faire des propositions et des demandes avec könnte"
    ],
    theory: [
      {
        h: "Le Konjunktiv II de sein et haben",
        p: "Le <strong>Konjunktiv II</strong> sert aux souhaits, aux hypothèses, aux demandes et aux conseils. Pour <em>sein</em> et <em>haben</em>, on part du Präteritum (<em>war, hatte</em>), on ajoute l'<strong>Umlaut</strong> et les terminaisons <em>-e, -st, -e, -en, -t, -en</em> (pour <em>haben</em> : <em>-e, -est, -e, -en, -et, -en</em>) : <em>ich wäre, du wärst, wir wären</em> et <em>ich hätte, du hättest, wir hätten</em>. <em>Ich wäre gern Ärztin</em> (j'aimerais être médecin), <em>Wir hätten gern mehr Zeit</em> (nous aimerions avoir plus de temps). Ce n'est pas un temps du passé : il parle de ce qui est souhaité, imaginé ou possible maintenant ou plus tard."
      },
      {
        h: "würde + infinitif",
        p: "Avec presque tous les autres verbes, on emploie <strong>würde</strong> + <strong>infinitif à la fin</strong> : <em>Ich würde gern im Ausland arbeiten. Wir würden gern am Meer wohnen.</em> <em>Würde</em> se conjugue ainsi : <em>ich würde, du würdest, er würde, wir würden, ihr würdet, sie würden</em>. Quelques modaux ont aussi leur forme propre : <em>ich könnte</em> (je pourrais), <em>ich müsste</em> (je devrais). Un conseil se donne souvent ainsi : <em>An deiner Stelle würde ich umziehen</em> (à ta place, je déménagerais)."
      },
      {
        contrast: "Le français a un <em>conditionnel</em> avec une forme propre pour chaque verbe : <em>je serais, j'aurais, j'irais, je ferais</em>. L'allemand a lui aussi une forme propre pour chaque verbe, mais dans l'usage courant on l'entend surtout avec quelques verbes très fréquents (<em>wäre, hätte, könnte, müsste</em>) : pour les autres, elle coïncide souvent avec le Präteritum ou paraît vieillie, et on dit <em>würde</em> + infinitif à la place : <em>j'irais</em> devient <em>würde gehen</em>, <em>je ferais</em> devient <em>würde machen</em>. De plus, le Konjunktiv II est un mode, pas un temps : <em>Ich wäre</em> correspond à <em>je serais</em> et concerne le présent ou le futur. Attention aussi à <em>gern</em> : il exprime le plaisir, pas le souhait. <em>Ich arbeite gern</em> = <em>j'aime travailler</em>, alors que <em>Ich würde gern arbeiten</em> = <em>j'aimerais travailler</em> ; selon le contexte, <em>gern</em> se rend aussi par <em>volontiers</em> ou <em>avec plaisir</em>. C'est le Konjunktiv II qui ajoute le souhait : <em>Ich hätte gern ...</em> = <em>je voudrais ...</em>."
      },
      {
        trap: "Ne confonds pas <em>würde</em> et <em>wurde</em> : <em>wurde</em> (sans Umlaut) est le Präteritum de <em>werden</em> (« devint »), <em>würde</em> (avec Umlaut) est le conditionnel. Une seule lettre change le sens, et cela s'entend : le <em>ü</em> est arrondi, comme le <em>u</em> français de « tu ». Avec <em>sein</em> et <em>haben</em>, on préfère en général <em>wäre</em> et <em>hätte</em> à « würde sein » et « würde haben » : <em>Das wäre schön</em> est la forme qu'on entend le plus ; « Das würde schön sein » est correct mais plus lourd."
      },
      {
        tip: "Pour donner un conseil poli, emploie <em>An deiner Stelle würde ich ...</em> plutôt qu'un impératif : cela sonne plus doux. Et pour un souhait : <em>Ich hätte gern</em> + complément d'objet (<em>Ich hätte gern mehr Zeit</em>), <em>Ich wäre gern</em> + adjectif ou nom de rôle (<em>Ich wäre gern glücklich, Ich wäre gern Pilot</em>)."
      }
    ],
    grammar: {
      title: "Konjunktiv II : wäre, hätte, würde",
      note: "<b>wäre</b> et <b>hätte</b> pour sein et haben, <b>könnte</b> et <b>müsste</b> pour les modaux, <b>würde</b> + infinitif à la fin pour presque tous les autres verbes.",
      table: {
        head: ["verbe", "ich", "du", "wir"],
        rows: [
          ["sein", "wäre", "wärst", "wären"],
          ["haben", "hätte", "hättest", "hätten"],
          ["werden (würde + infinitif)", "würde", "würdest", "würden"],
          ["können", "könnte", "könntest", "könnten"]
        ]
      },
      examples: [
        { tr: "J'aimerais être médecin.", note: "wäre + gern : un souhait" },
        { tr: "Nous aimerions avoir plus de temps.", note: "hätte + gern : un souhait" },
        { tr: "À ta place, je déménagerais.", note: "An deiner Stelle : würde + infinitif à la fin" },
        { tr: "Je pourrais t'aider demain.", note: "könnte : forme propre du modal" },
        { tr: "Ce serait une bonne idée.", note: "wäre à la place de « würde sein »" },
        { tr: "J'aimerais travailler à l'étranger.", note: "würde + gern + infinitif à la fin" }
      ]
    },
    vocab: [
      "le souhait, le vœu",
      "le conseil",
      "l'idée",
      "l'étranger (im Ausland : à l'étranger)",
      "le métier de rêve",
      "le voyage",
      "la mer",
      "la liberté",
      "souhaiter (sich etwas wünschen : souhaiter pour soi)",
      "rêver",
      "proposer",
      "possible"
    ],
    exercises: [
      {
        tr: "Le Konjunktiv II de sein, toutes les personnes.",
        why: "<i>Wäre, wärst, wäre, wären, wärt, wären</i> : du Präteritum <i>war</i>, avec l'Umlaut et les terminaisons du Konjunktiv II. La première et la troisième personne du singulier sont identiques."
      },
      {
        tr: "Le Konjunktiv II de haben, toutes les personnes.",
        why: "<i>Hätte, hättest, hätte, hätten, hättet, hätten</i> : du Präteritum <i>hatte</i>, avec l'Umlaut."
      },
      {
        tr: "Le Konjunktiv II de werden, toutes les personnes (la forme qu'on emploie comme auxiliaire).",
        why: "<i>Würde, würdest, würde, würden, würdet, würden</i> : c'est l'auxiliaire du conditionnel, suivi de l'infinitif à la fin."
      },
      {
        q: "Comment dis-tu « J'aimerais être médecin » ?",
        opts: [
          "Ich wäre gern Arzt.",
          "Ich war gern Arzt.",
          "Ich werde gern Arzt."
        ],
        why: "Le souhait demande le Konjunktiv II : <b>wäre</b>. <i>War</i> est le Präteritum (j'étais), <i>werde</i> est un futur ou un « devenir »."
      },
      {
        q: "Quelle phrase signifie « À ta place, je déménagerais » ?",
        opts: [
          "An deiner Stelle würde ich umziehen.",
          "An deiner Stelle werde ich umziehen.",
          "An deiner Stelle wurde ich umziehen."
        ],
        why: "<b>würde</b> (avec Umlaut) est le conditionnel. <i>Werde</i> est le futur (« je déménagerai »), <i>wurde</i> est le Präteritum de <i>werden</i>, sans le bon sens."
      },
      {
        q: "Complète avec le Konjunktiv II de haben : « Ich ___ gern ein Haus am Meer. » (je voudrais avoir)",
        hint: "Konjunktiv II de haben, ich",
        why: "<b>Hätte</b> : <i>Ich hätte gern ein Haus am Meer</i> exprime un souhait, avec l'Umlaut sur le <i>ä</i>."
      },
      {
        q: "Complète avec le Konjunktiv II de sein : « Das ___ eine gute Idee. » (ce serait)",
        hint: "Konjunktiv II de sein",
        why: "<b>Wäre</b> : avec <i>sein</i>, on préfère la forme propre à « würde sein »."
      },
      {
        q: "Complète la phrase (dans le premier blanc, utilise würde).",
        tr: "J'aimerais travailler à l'étranger.",
        why: "<i>Ich würde gern im Ausland arbeiten</i> : <i>würde</i> en deuxième position, l'infinitif <i>arbeiten</i> à la fin."
      },
      {
        q: "Traduis : « À ta place, j'irais chez le médecin. » (utilise würde)",
        why: "<i>An deiner Stelle würde ich zum Arzt gehen</i> : <i>würde</i> en deuxième position, <i>gehen</i> à la fin. On peut aussi dire <i>Ich würde an deiner Stelle zum Arzt gehen</i>."
      },
      {
        tr: "J'aimerais être pilote et travailler à l'étranger. Ce serait mon métier de rêve.",
        why: "Dans <i>würde</i>, le <b>ü</b> est arrondi, comme le <i>u</i> français de « tu » ; dans <i>Ausland</i>, le <b>au</b> se lit [aʊ] ; dans <i>Traumberuf</i>, le <b>au</b> est la même diphtongue."
      },
      {
        tr: "À ta place, je ferais un voyage. Ce serait une bonne idée.",
        why: "Dans <i>Reise</i>, le <b>ei</b> se lit [aɪ] ; dans <i>wäre</i>, le <b>w</b> se lit [v], comme le <i>v</i> français ; <i>Stelle</i> commence par <b>st</b> = [ʃt]."
      }
    ]
  },
  "lesson:b1-u01-l2": {
    theme: "Si je pouvais ...",
    title: "Si j'avais le temps, ...",
    objectives: [
      "formuler une hypothèse irréelle au présent avec wenn + Konjunktiv II",
      "distinguer une hypothèse réelle (wenn + présent) d'une hypothèse irréelle",
      "mettre le verbe à la fin dans la phrase avec wenn et en première position dans la principale qui suit",
      "donner un conseil avec Wenn ich du wäre, ..."
    ],
    theory: [
      {
        h: "Hypothèse réelle et hypothèse irréelle",
        p: "Avec <strong>wenn</strong>, on dit « si ». Si la condition est <strong>possible</strong> ou habituelle, l'allemand emploie souvent le <strong>présent</strong> dans les deux phrases : <em>Wenn es morgen regnet, bleiben wir zu Hause. Wenn du Hunger hast, kannst du etwas essen.</em> Si la condition est <strong>irréelle</strong> ou improbable (elle n'est pas vraie maintenant, ou c'est une hypothèse qu'on imagine), on emploie le <strong>Konjunktiv II</strong> : <em>Wenn ich Zeit hätte, würde ich mehr reisen. Wenn ich reich wäre, würde ich ein Haus kaufen.</em>"
      },
      {
        h: "Où se place le verbe",
        p: "Après <em>wenn</em>, le verbe conjugué va <strong>à la fin</strong> de la subordonnée, et une virgule la sépare de la principale. Si la phrase avec <em>wenn</em> vient en premier, la principale <strong>commence par le verbe</strong> : <em>Wenn ich Zeit hätte, würde ich mehr reisen.</em> Si elle vient après, l'ordre de la principale ne change pas : <em>Ich würde mehr reisen, wenn ich Zeit hätte.</em> Les deux constructions peuvent apparaître dans les deux phrases : <em>Wenn ich weniger arbeiten würde, hätte ich mehr Zeit</em> est aussi correct que <em>Wenn ich Zeit hätte, würde ich mehr reisen</em>. Avec <em>sein</em>, <em>haben</em> et les modaux, on préfère en général la forme propre (<em>wäre, hätte, könnte</em>), avec les autres verbes souvent <em>würde</em> + infinitif."
      },
      {
        h: "Wenn ich du wäre, ...",
        p: "La formule <strong>Wenn ich du wäre, würde ich ...</strong> correspond au français « si j'étais toi » et sert à donner un conseil : <em>Wenn ich du wäre, würde ich ihn anrufen.</em> C'est la forme plus longue de <em>An deiner Stelle würde ich ...</em> vue dans la leçon précédente."
      },
      {
        contrast: "En français, l'hypothèse irréelle suit la règle « si + imparfait, conditionnel » : <em>Si j'avais le temps, je voyagerais plus</em>. Le conditionnel est interdit juste après <em>si</em> (on ne dit pas « si j'aurais »). En allemand, la même forme, le Konjunktiv II, apparaît dans les deux phrases : <em>wenn ich Zeit hätte</em> et <em>würde ich reisen</em>. Et <em>würde</em> peut même se trouver après <em>wenn</em> : <em>Wenn ich weniger arbeiten würde, ...</em>. Pour l'hypothèse réelle, le français dit souvent « si + présent, futur » (<em>S'il pleut demain, nous resterons à la maison</em>), tandis que l'allemand utilise souvent le présent dans les deux phrases, sans exclure d'autres formes (<em>..., werde ich zu Hause bleiben</em>) : <em>Wenn es morgen regnet, bleiben wir zu Hause</em>."
      },
      {
        trap: "On n'écrit pas « Wenn ich hätte Zeit » : après <em>wenn</em>, le verbe conjugué va à la fin, <em>Wenn ich Zeit hätte</em>. Et la principale après la subordonnée ne commence pas par le sujet : « Wenn ich Zeit hätte, ich würde reisen » est faux, il faut <em>..., würde ich reisen</em>. Ne confonds pas <em>wenn</em> (si) avec <em>wann</em> (quand, dans les questions)."
      },
      {
        tip: "Avant d'écrire une phrase avec <em>wenn</em>, demande-toi comment tu présentes la condition. Comme réelle ou ouverte ? La construction de base est le présent dans les deux phrases. Comme hypothétique, improbable ou contraire aux faits ? Alors Konjunktiv II dans les deux phrases (même pour quelque chose de possible : <em>Wenn es morgen regnen würde, würden wir zu Hause bleiben</em>) : <em>hätte, wäre, könnte</em> avec <em>haben</em>, <em>sein</em> et les modaux, <em>würde</em> + infinitif avec presque tous les autres verbes."
      }
    ],
    grammar: {
      title: "Wenn + présent ou Konjunktiv II",
      note: "<b>Réelle</b> : <i>wenn</i> + présent, présent (le cas le plus courant). <b>Irréelle</b> : Konjunktiv II dans les deux phrases (<i>hätte, wäre, könnte</i>, ou <i>würde</i> + infinitif). Le verbe de <i>wenn</i> va à la fin, et la principale qui suit commence par le verbe.",
      table: {
        head: ["type", "exemple", "remarque"],
        rows: [
          ["réelle", "Wenn es morgen regnet, bleiben wir zu Hause.", "souvent le présent dans les deux phrases"],
          ["irréelle", "Wenn ich Zeit hätte, würde ich mehr reisen.", "Konjunktiv II + würde"],
          ["irréelle avec sein", "Wenn ich reich wäre, würde ich ein Haus kaufen.", "wäre, pas « würde sein »"],
          ["conseil", "Wenn ich du wäre, würde ich ihn anrufen.", "à ta place"]
        ]
      },
      examples: [
        { tr: "Si j'avais le temps, je voyagerais plus.", note: "wenn-Satz d'abord : la principale commence par würde" },
        { tr: "Si j'étais riche, j'achèterais une maison.", note: "wäre après wenn" },
        { tr: "Je ferais plus de sport si j'avais plus de temps.", note: "wenn-Satz après : l'ordre de la principale ne change pas" },
        { tr: "Si tu as faim, tu peux manger quelque chose.", note: "hypothèse réelle : présent" },
        { tr: "S'il pleut demain, nous restons à la maison.", note: "hypothèse réelle : présent, verbe de wenn à la fin" },
        { tr: "Si j'étais toi, je l'appellerais.", note: "formule du conseil" }
      ]
    },
    vocab: [
      "le gain",
      "gagner (un jeu, un prix)",
      "riche",
      "l'argent",
      "économiser",
      "gagner (de l'argent)",
      "les vacances, le congé",
      "la maison",
      "le jardin",
      "le tour du monde",
      "la langue",
      "la profession, le métier"
    ],
    exercises: [
      {
        q: "Comment dis-tu « Si j'avais le temps, je voyagerais plus » ?",
        opts: [
          "Wenn ich Zeit hätte, würde ich mehr reisen.",
          "Wenn ich Zeit hatte, würde ich mehr reisen.",
          "Wenn ich hätte Zeit, würde ich mehr reisen."
        ],
        why: "Hypothèse irréelle : <b>hätte</b> après <i>wenn</i>, avec le verbe de <i>wenn</i> à la fin, et <i>würde ich</i> dans la principale, avec le verbe en première position."
      },
      {
        q: "Quelle phrase parle d'une situation possible et réelle, pas d'une hypothèse irréelle ?",
        opts: [
          "Wenn ich reich wäre, würde ich ein Haus kaufen.",
          "Wenn es morgen regnet, bleiben wir zu Hause.",
          "Wenn ich du wäre, würde ich ihn anrufen."
        ],
        why: "La deuxième a le présent dans les deux phrases : la pluie de demain est possible. Les deux autres ont le Konjunktiv II : ce sont des hypothèses irréelles."
      },
      {
        q: "Complète : « Wenn ich mehr Geld hätte, ___ ich ein Auto kaufen. »",
        opts: [
          "würde",
          "wurde",
          "werde"
        ],
        why: "<b>würde</b> est le conditionnel, et il vient après la virgule, avec le verbe en première position dans la principale. <i>Wurde</i> est le Präteritum, <i>werde</i> le présent."
      },
      {
        q: "Quelles phrases sont correctes ?",
        opts: [
          "Wenn ich reich wäre, würde ich weniger arbeiten.",
          "Ich würde weniger arbeiten, wenn ich reich wäre.",
          "Wenn ich wäre reich, würde ich weniger arbeiten.",
          "Wenn ich reich wäre, ich würde weniger arbeiten.",
          "Ich würde weniger arbeiten, wenn wäre ich reich."
        ],
        why: "Les deux premières conviennent : <i>wenn</i> envoie <i>wäre</i> à la fin, et la principale qui suit commence par le verbe. La 3 et la 5 mettent le verbe de <i>wenn</i> au mauvais endroit, la 4 ne fait pas commencer la principale par le verbe."
      },
      {
        q: "Complète avec le présent de regnen : « Wenn es morgen ___, bleiben wir zu Hause. »",
        hint: "présent, 3e personne du singulier",
        why: "<b>Regnet</b> : hypothèse réelle, donc présent. Le verbe de <i>wenn</i> va à la fin."
      },
      {
        q: "Complète avec le Konjunktiv II de haben : « Wenn ich viel Geld ___, würde ich um die Welt reisen. »",
        hint: "Konjunktiv II de haben, ich",
        why: "<b>Hätte</b> à la fin de la phrase avec <i>wenn</i>. La principale emploie <i>würde</i> + infinitif."
      },
      {
        q: "Complète la phrase (dans le second blanc, utilise würde).",
        tr: "Si j'avais plus de temps, j'irais plus souvent au cinéma.",
        why: "<i>Wenn ich mehr Zeit hätte, würde ich öfter ins Kino gehen</i> : <i>hätte</i> à la fin de la phrase avec <i>wenn</i>, <i>würde</i> en première position dans la principale, <i>gehen</i> à la fin."
      },
      {
        q: "Traduis : « Si j'étais riche, j'achèterais une maison. »",
        why: "<i>Wenn ich reich wäre, würde ich ein Haus kaufen</i>. <i>Mir ein Haus kaufen</i> convient aussi, ainsi que l'ordre inverse : <i>Ich würde ein Haus kaufen, wenn ich reich wäre.</i>"
      },
      {
        tr: "Si j'avais plus d'argent, je ferais le tour du monde. Si j'étais riche, j'achèterais aussi une maison avec jardin.",
        why: "Dans <i>Weltreise</i>, le <b>w</b> se lit [v] et le <b>ei</b> est [aɪ] ; dans <i>Garten</i>, le <b>g</b> est [g] ; dans <i>reich</i>, le <b>ch</b> après <b>ei</b> se lit [ç], un son soufflé que le français n'a pas."
      },
      {
        tr: "Si j'avais plus de temps, j'apprendrais une nouvelle langue.",
        why: "Dans <i>Sprache</i>, le <b>sp</b> initial se lit [ʃp] et le <b>ch</b> après <b>a</b> est [x] ; dans <i>lernen</i>, le <b>l</b> est clair."
      }
    ]
  },
  "lesson:b1-u01-l3": {
    theme: "Opinions",
    title: "Je pense que ... À mon avis ...",
    objectives: [
      "exprimer une opinion avec Ich finde, dass ... et Ich glaube, dass ...",
      "mettre le verbe à la fin après dass",
      "exprimer son opinion avec Meiner Meinung nach ...",
      "distinguer dass (conjonction) de das (article ou pronom)"
    ],
    theory: [
      {
        h: "Ich finde, dass ...",
        p: "Pour dire ce qu'on pense, on emploie des verbes comme <strong>finden, glauben, denken</strong> et l'expression <strong>der Meinung sein</strong>, suivis de la conjonction <strong>dass</strong>. Après <em>dass</em>, le verbe conjugué va <strong>à la fin</strong>, et la virgule est obligatoire : <em>Ich finde, dass das eine gute Idee ist. Ich bin der Meinung, dass wir mehr Zeit brauchen.</em> On peut nier le verbe d'opinion : <em>Ich glaube nicht, dass das funktioniert.</em>"
      },
      {
        h: "Sans dass",
        p: "À l'oral, on peut supprimer <em>dass</em> : la deuxième phrase devient alors une subordonnée complétive sans conjonction, avec le verbe en <strong>deuxième position</strong> : <em>Ich denke, er hat recht. Ich finde, das ist zu teuer.</em> Avec <em>dass</em>, le verbe va à la fin (<em>dass er recht hat</em>) ; sans <em>dass</em>, il reste en deuxième position (<em>er hat recht</em>)."
      },
      {
        h: "Meiner Meinung nach ...",
        p: "<strong>Meiner Meinung nach</strong> (à mon avis, selon moi) occupe la première position, donc le verbe vient juste après : <em>Meiner Meinung nach ist das zu teuer.</em> <em>Meiner Meinung</em> est un datif (<em>die Meinung</em>), et <em>nach</em> se place après. Si tu commences par le sujet, <em>meiner Meinung nach</em> peut se trouver au milieu : <em>Das ist meiner Meinung nach zu teuer.</em>"
      },
      {
        contrast: "En français, <em>je pense que</em> et <em>je crois que</em> prennent l'<strong>indicatif</strong> à la forme affirmative (<em>je pense que c'est juste</em>), mais on emploie volontiers le <strong>subjonctif</strong> à la forme négative : <em>je ne pense pas que ça fonctionne</em>. Contrairement au français, la négation du verbe d'opinion ne déclenche pas automatiquement un changement de mode : dans ces exemples, après <em>Ich denke, dass</em> comme après <em>Ich glaube nicht, dass</em>, on garde l'<strong>indicatif</strong> : <em>Ich glaube nicht, dass das funktioniert</em>. Le Konjunktiv reste possible quand le sens l'exige (<em>Ich glaube, dass das möglich wäre</em>). De plus, en français le <em>que</em> ne peut pas disparaître, alors qu'en allemand on peut supprimer <em>dass</em> (<em>Ich denke, das ist richtig</em>), mais l'ordre du verbe change."
      },
      {
        trap: "On n'écrit pas « Ich finde, dass das ist gut » : après <em>dass</em>, le verbe va à la fin, <em>dass das gut ist</em>. Ne confonds pas <strong>dass</strong> (conjonction, deux <em>s</em>) avec <strong>das</strong> (article ou pronom, un seul <em>s</em>) : <em>Ich glaube, dass das Buch gut ist</em>. Dans la phrase <em>Ich glaube, das ist gut</em>, le mot <em>das</em> est un pronom."
      },
      {
        tip: "Si tu hésites entre <em>das</em> et <em>dass</em>, essaie de le remplacer par <em>dieses</em> ou <em>welches</em> : si cela fonctionne, c'est <em>das</em>. Sinon, c'est <em>dass</em>."
      }
    ],
    grammar: {
      title: "dass et l'opinion",
      note: "<b>Ich finde, dass ...</b> avec le verbe à la fin. Sans <i>dass</i>, le verbe reste en deuxième position. <b>Meiner Meinung nach</b> en première position, puis le verbe.",
      table: {
        head: ["construction", "exemple", "remarque"],
        rows: [
          ["Ich finde, dass ...", "Ich finde, dass das eine gute Idee ist.", "verbe à la fin"],
          ["sans dass", "Ich denke, er hat recht.", "verbe en deuxième position"],
          ["Meiner Meinung nach", "Meiner Meinung nach ist das zu teuer.", "le verbe juste après"],
          ["der Meinung sein", "Ich bin der Meinung, dass wir mehr Zeit brauchen.", "la virgule est obligatoire"]
        ]
      },
      examples: [
        { tr: "Je pense que c'est une bonne idée.", note: "dass : verbe à la fin, indicatif" },
        { tr: "Je crois qu'il a raison.", note: "dass : recht hat, le verbe conjugué à la fin" },
        { tr: "Je pense qu'il a raison.", note: "sans dass : verbe en deuxième position" },
        { tr: "À mon avis, c'est trop cher.", note: "Meiner Meinung nach en première position, puis ist" },
        { tr: "Je suis d'avis qu'il nous faut plus de temps.", note: "der Meinung sein + dass" },
        { tr: "Je ne crois pas que ça fonctionne.", note: "nicht devant dass : Ich glaube nicht, dass ..." }
      ]
    },
    vocab: [
      "l'opinion, l'avis",
      "la proposition",
      "le sujet, le thème",
      "la raison, le motif",
      "l'avantage",
      "l'inconvénient",
      "croire, penser",
      "trouver, estimer",
      "être d'accord (avec le datif)",
      "avoir raison",
      "d'accord",
      "juste, correct"
    ],
    exercises: [
      {
        q: "Quelle phrase est correcte ?",
        opts: [
          "Ich finde, dass das eine gute Idee ist.",
          "Ich finde, dass das ist eine gute Idee.",
          "Ich finde, dass ist das eine gute Idee."
        ],
        why: "Après <b>dass</b>, le verbe conjugué va à la fin : <i>dass das eine gute Idee ist</i>."
      },
      {
        q: "Quelle phrase est correcte ?",
        opts: [
          "Ich glaube, dass er recht hat.",
          "Ich glaube, das er recht hat.",
          "Ich glaube, dass er hat recht."
        ],
        why: "La conjonction s'écrit avec deux <i>s</i> : <b>dass</b>, et elle envoie le verbe conjugué à la fin (<i>recht hat</i>)."
      },
      {
        q: "Complète : « Ich finde, ___ wir mehr Zeit brauchen. »",
        hint: "conjonction",
        why: "<b>dass</b> introduit ce qu'on pense, et <i>brauchen</i> va à la fin."
      },
      {
        q: "Complète : « Meiner ___ nach ist das zu teuer. »",
        hint: "opinion",
        why: "<b>Meinung</b> : <i>meiner Meinung nach</i> est la formule pour « à mon avis »."
      },
      {
        q: "Associe chaque expression à son sens.",
        pairs: [
          "je pense que ...",
          "à mon avis ...",
          "je suis d'accord",
          "tu as raison"
        ]
      },
      {
        q: "Complète la phrase (utilise dass et le verbe funktionieren).",
        tr: "Je ne crois pas que ça fonctionne.",
        why: "<i>Ich glaube nicht, dass das funktioniert</i> : <i>dass</i> envoie <i>funktioniert</i> à la fin. <i>Klappt</i> convient aussi."
      },
      {
        q: "Remets les mots dans l'ordre.",
        tr: "Je pense que c'est une bonne idée.",
        why: "<i>Ich finde, dass das eine gute Idee ist.</i> La virgule est après <i>finde</i>, et le verbe <i>ist</i> ferme la subordonnée."
      },
      {
        q: "Traduis : « À mon avis, c'est trop cher. » (utilise meiner Meinung nach)",
        why: "<i>Meiner Meinung nach ist das zu teuer</i> : le verbe est juste après l'expression. <i>Das ist meiner Meinung nach zu teuer</i> convient aussi."
      },
      {
        tr: "Je pense que c'est une bonne idée. À mon avis, il nous faut plus de temps, mais je ne crois pas que ce soit possible.",
        why: "Dans <i>Meinung</i>, le <b>ei</b> se lit [aɪ] ; dans <i>möglich</i>, le <b>ö</b> est arrondi et le <b>ch</b> final est [ç] ; dans <i>brauchen</i>, le <b>au</b> est [aʊ] et le <b>ch</b> [x]."
      },
      {
        tr: "Je suis d'avis qu'il nous faut plus de temps.",
        why: "Dans <i>Meinung</i>, le <b>ei</b> se lit [aɪ] ; dans <i>dass</i>, le <b>ss</b> est un <b>s</b> sourd ; dans <i>mehr</i>, le <b>h</b> ne se prononce pas."
      }
    ]
  },
  "lesson:b1-u01-l4": {
    theme: "Contrastes",
    title: "Même si ..., quand même",
    objectives: [
      "exprimer une concession avec obwohl et le verbe à la fin",
      "employer trotzdem avec le verbe juste après",
      "distinguer obwohl de weil",
      "dire que quelqu'un continue malgré les difficultés"
    ],
    theory: [
      {
        h: "obwohl : la subordonnée",
        p: "<strong>Obwohl</strong> (bien que, même si) introduit une circonstance qui devrait empêcher quelque chose, et qui pourtant ne l'empêche pas : <em>Obwohl es regnet, gehen wir spazieren.</em> Il fonctionne comme <em>weil</em> et <em>dass</em> : le verbe conjugué va <strong>à la fin</strong>, la virgule sépare les deux phrases. Si la phrase avec <em>obwohl</em> vient en premier, la principale commence par le verbe : <em>Obwohl er müde war, hat er noch gearbeitet.</em> Si elle vient après : <em>Wir gehen spazieren, obwohl es regnet.</em>"
      },
      {
        h: "trotzdem : la principale",
        p: "<strong>Trotzdem</strong> (quand même, pourtant, malgré tout) dit la même chose avec deux phrases séparées. C'est un adverbe dans une proposition principale : placé en tête, il est immédiatement suivi du verbe conjugué, puis du sujet : <em>Es regnet. Trotzdem gehen wir spazieren.</em> Ou bien il se place dans la phrase : <em>Wir gehen trotzdem spazieren.</em> Avec <em>aber</em>, on peut aussi dire <em>Sie ist krank, aber sie geht trotzdem zur Arbeit.</em>"
      },
      {
        contrast: "En français, <em>bien que</em> et <em>quoique</em> veulent le subjonctif (<em>bien qu'il pleuve</em>), tandis que <em>même si</em> s'emploie avec l'indicatif (<em>même s'il pleut</em>). En allemand, quand <em>obwohl</em> introduit un fait réel comme dans ces exemples, on emploie normalement l'<strong>indicatif</strong> : <em>obwohl es regnet</em>. Le verbe va à la fin, comme après <em>weil</em> : <em>weil es regnet</em> dit pourquoi, <em>obwohl es regnet</em> dit « malgré cela »."
      },
      {
        trap: "Après une phrase avec <em>obwohl</em>, la principale commence par le verbe : <em>Obwohl es regnet, gehen wir spazieren</em>, pas « ..., wir gehen ». Et après <em>trotzdem</em> en première position, le verbe vient tout de suite : <em>trotzdem gehen wir</em>, pas « trotzdem wir gehen ». <em>Obwohl</em> et <em>trotzdem</em> peuvent aussi apparaître ensemble, et la concession se renforce : <em>Obwohl es regnet, gehen wir trotzdem spazieren</em>, avec <em>trotzdem</em> après le verbe. Ne confonds pas <em>obwohl</em> avec <em>weil</em> : <em>weil</em> introduit une cause, <em>obwohl</em> un fait malgré lequel se produit ce que dit la principale."
      },
      {
        tip: "<em>Obwohl</em> introduit une subordonnée avec le verbe conjugué à la fin. <em>Trotzdem</em> est un adverbe dans une proposition principale : placé en tête, il est immédiatement suivi du verbe conjugué. Les deux principales peuvent être séparées par une virgule ou un point."
      }
    ],
    grammar: {
      title: "obwohl et trotzdem",
      note: "<b>obwohl</b> = bien que, même si, verbe à la fin. <b>trotzdem</b> = quand même, en première position le verbe suit tout de suite. Deux manières de dire la même chose.",
      table: {
        head: ["mot", "exemple", "remarque"],
        rows: [
          ["obwohl", "Obwohl es regnet, gehen wir spazieren.", "verbe à la fin, puis la principale commence par le verbe"],
          ["obwohl après", "Wir gehen spazieren, obwohl es regnet.", "l'ordre de la principale ne change pas"],
          ["trotzdem", "Es regnet. Trotzdem gehen wir spazieren.", "verbe juste après trotzdem"],
          ["aber ... trotzdem", "Sie ist krank, aber sie geht trotzdem zur Arbeit.", "trotzdem après le verbe"]
        ]
      },
      examples: [
        { tr: "Même s'il pleut, nous allons nous promener.", note: "obwohl : verbe à la fin, puis gehen en première position" },
        { tr: "Nous allons nous promener, même s'il pleut.", note: "obwohl après la principale" },
        { tr: "Il pleut. Nous allons quand même nous promener.", note: "trotzdem : le verbe juste après" },
        { tr: "Bien qu'il fût fatigué, il a encore travaillé.", note: "obwohl : war à la fin" },
        { tr: "Il était fatigué, mais il a quand même travaillé.", note: "trotzdem en première position" },
        { tr: "Elle est malade, mais elle va quand même au travail.", note: "aber + trotzdem dans la phrase" }
      ]
    },
    vocab: [
      "bien que, même si",
      "quand même, pourtant",
      "la pluie",
      "la promenade",
      "le temps (qu'il fait)",
      "fatigant, pénible",
      "difficile",
      "la difficulté",
      "l'erreur, la faute",
      "abandonner, renoncer",
      "continuer, poursuivre",
      "le succès, la réussite"
    ],
    exercises: [
      {
        q: "Quelle phrase est correcte ?",
        opts: [
          "Obwohl es regnet, gehen wir spazieren.",
          "Obwohl es regnet, wir gehen spazieren.",
          "Obwohl es regnet, trotzdem wir gehen spazieren."
        ],
        why: "Après la phrase avec <b>obwohl</b>, la principale commence par le verbe : <i>gehen wir</i>. La troisième place mal le verbe : après <i>trotzdem</i> en première position, le verbe doit venir tout de suite."
      },
      {
        q: "Quelle phrase est correcte ?",
        opts: [
          "Es regnet, trotzdem wir gehen spazieren.",
          "Es regnet, trotzdem gehen wir spazieren.",
          "Es regnet, trotzdem wir spazieren gehen."
        ],
        why: "<b>Trotzdem</b> en première position veut le verbe tout de suite après : <i>trotzdem gehen wir</i>. Il n'envoie pas le verbe à la fin, contrairement à <i>obwohl</i>."
      },
      {
        q: "Complète avec trotzdem : « Sie ist krank, ___ geht sie zur Arbeit. »",
        hint: "quand même",
        why: "<b>Trotzdem</b> en première position, et le verbe <i>geht</i> juste après."
      },
      {
        q: "Complète la phrase (utilise obwohl).",
        tr: "Bien qu'il fût fatigué, il a encore travaillé.",
        why: "<i>Obwohl er müde war, hat er noch gearbeitet</i> : <i>war</i> à la fin de la subordonnée, puis <i>hat</i> en première position dans la principale."
      },
      {
        q: "Associe chaque mot à son sens.",
        pairs: [
          "bien que, même si (verbe à la fin)",
          "quand même, pourtant (verbe juste après)",
          "parce que (verbe à la fin)",
          "mais (ne change pas l'ordre)"
        ]
      },
      {
        q: "Remets les mots dans l'ordre.",
        tr: "Bien qu'il fût fatigué, il a encore travaillé.",
        why: "<i>Obwohl er müde war, hat er noch gearbeitet.</i> La virgule est après <i>war</i>, puis la principale commence par <i>hat</i>."
      },
      {
        q: "Traduis : « Même s'il pleut, nous allons nous promener. » (utilise obwohl)",
        why: "<i>Obwohl es regnet, gehen wir spazieren</i>. L'ordre inverse convient aussi (<i>Wir gehen spazieren, obwohl es regnet</i>), ainsi que <i>einen Spaziergang machen</i>."
      },
      {
        q: "Un ami te voit sortir par mauvais temps.",
        setting: "Le temps est mauvais et tu es malade, mais tu sors quand même.",
        lines: [
          { tr: "Tu restes à la maison demain ? Le temps est mauvais." },
          { tr: "Réponds : non, tu vas te promener même si le temps est mauvais.", answerTr: "Non, même si le temps est mauvais, je vais me promener." },
          { tr: "Mais tu es malade !" },
          { tr: "Réponds : oui, tu y vas quand même.", answerTr: "Oui, j'y vais quand même." },
          { tr: "Tu es fatigué aussi. Tu veux vraiment sortir ?" },
          { tr: "Réponds que tu sors quand même, mais seulement un peu.", answerTr: "Oui, je sors quand même, mais seulement un peu." }
        ]
      },
      {
        tr: "Même si le temps est mauvais, nous allons nous promener. C'est fatigant, mais nous continuons quand même.",
        why: "Dans <i>Wetter</i>, le <b>w</b> se lit [v] ; dans <i>anstrengend</i>, le <b>ng</b> est un son nasal [ŋ], comme à la fin de « parking » ; dans <i>weiter</i>, le <b>ei</b> est [aɪ]."
      },
      {
        tr: "Même si je suis fatigué, je n'abandonne pas.",
        why: "Dans <i>müde</i>, le <b>ü</b> est arrondi, comme le <i>u</i> français de « tu » ; dans <i>Obwohl</i>, le <b>w</b> se lit [v] ; dans <i>nicht</i>, le <b>ch</b> après <b>i</b> se lit [ç]."
      }
    ]
  },
  "lesson:b1-u01-test": {
    theme: "Évaluation",
    title: "Test : Si j'étais toi",
    objectives: [
      "vérifier le Konjunktiv II, l'hypothèse, dass et l'opinion, obwohl et trotzdem"
    ],
    theory: [
      {
        p: "Dix questions sur toute l'unité. On réussit avec 70 %. Ne relis pas les leçons en répondant : si tu ne te souviens plus de quelque chose, mieux vaut retourner réviser."
      }
    ],
    exercises: [
      {
        tr: "Le Konjunktiv II de können, toutes les personnes.",
        why: "<i>Könnte, könntest, könnte, könnten, könntet, könnten</i> : du Präteritum <i>konnte</i>, avec l'Umlaut."
      },
      {
        tr: "Le Konjunktiv II de müssen, toutes les personnes.",
        why: "<i>Müsste, müsstest, müsste, müssten, müsstet, müssten</i> : du Präteritum <i>musste</i>, avec l'Umlaut."
      },
      {
        q: "Complète avec la forme du Konjunktiv II de werden qui convient : « An deiner Stelle ___ ich umziehen. »",
        hint: "conditionnel, ich",
        why: "<b>Würde</b> : <i>An deiner Stelle würde ich umziehen</i>. L'infinitif <i>umziehen</i> va à la fin."
      },
      {
        q: "Complète avec le Konjunktiv II de sein : « Wenn ich du ___, würde ich ihn anrufen. »",
        hint: "Konjunktiv II de sein, ich",
        why: "<b>Wäre</b> à la fin de la phrase avec <i>wenn</i>, et la principale commence par <i>würde</i>."
      },
      {
        q: "Complète : « Ich glaube nicht, ___ er recht hat. »",
        hint: "conjonction",
        why: "<b>dass</b> envoie le verbe <i>hat</i> à la fin."
      },
      {
        q: "Complète avec la bonne conjonction : « ___ es regnet, gehen wir spazieren. » (même si)",
        hint: "verbe à la fin",
        why: "<b>Obwohl</b> est la conjonction qui envoie le verbe à la fin et introduit une concession."
      },
      {
        q: "Quelle phrase est correcte ?",
        opts: [
          "Es ist spät, trotzdem arbeite ich noch.",
          "Es ist spät, trotzdem ich arbeite noch.",
          "Es ist spät, obwohl arbeite ich noch."
        ],
        why: "<b>Trotzdem</b> en première position veut le verbe tout de suite après : <i>trotzdem arbeite ich</i>. La troisième emploie <i>obwohl</i> avec le verbe au mauvais endroit."
      },
      {
        q: "Quelles phrases sont correctes ?",
        opts: [
          "Wenn ich mehr Zeit hätte, würde ich Sport machen.",
          "Ich finde, dass das zu teuer ist.",
          "Obwohl ich müde bin, gehe ich zur Arbeit.",
          "Wenn ich hätte mehr Zeit, würde ich Sport machen.",
          "Ich finde, dass das ist zu teuer."
        ],
        why: "Les trois premières sont justes : le verbe conjugué va à la fin après <i>wenn</i>, <i>dass</i> et <i>obwohl</i>, et la principale qui suit commence par le verbe. La 4 et la 5 placent le verbe trop tôt."
      },
      {
        tr: "À ta place, je ne démissionnerais pas. Je pense que le poste est bon, même s'il est fatigant.",
        why: "Dans <i>kündigen</i>, le <b>ü</b> est arrondi, comme le <i>u</i> français de « tu » ; dans <i>Stelle</i>, le <b>st</b> initial est [ʃt] ; dans <i>anstrengend</i>, le <b>ng</b> est un son nasal [ŋ]."
      },
      {
        tr: "Si j'avais plus d'argent, j'achèterais une maison, même si elle est chère.",
        why: "Dans <i>würde</i>, le <b>ü</b> est arrondi ; dans <i>teuer</i>, le <b>eu</b> se lit [ɔʏ] ; dans <i>kaufen</i>, le <b>au</b> se lit [aʊ]."
      }
    ]
  },
  "unit:b1-u02": {
    title: "À quoi penses-tu ?",
    grammarNote: "verbes à préposition fixe · darauf, worauf · propositions relatives (nominatif, accusatif, datif, avec préposition) · jemand, niemand, jeder"
  },
  "lesson:b1-u02-l1": {
    theme: "Intérêts et préoccupations",
    title: "Je t'attends",
    objectives: [
      "employer les verbes à préposition fixe les plus fréquents (warten auf, denken an, sich interessieren für)",
      "choisir le bon cas après la préposition",
      "parler de peurs, de rêves et d'intérêts",
      "ne pas traduire la préposition depuis le français"
    ],
    theory: [
      {
        h: "On apprend le verbe avec sa préposition",
        p: "Beaucoup de verbes allemands veulent une <strong>préposition fixe</strong> et un <strong>cas fixe</strong> après elle : <em>warten auf + Akk</em>, <em>denken an + Akk</em>, <em>sich interessieren für + Akk</em>, <em>sich kümmern um + Akk</em>. D'autres veulent le datif : <em>Angst haben vor + Dat</em>, <em>träumen von + Dat</em>, <em>teilnehmen an + Dat</em>. Après la préposition, l'article ou le pronom prend ce cas : <em>Ich warte auf den Bus</em> (accusatif), <em>Sie hat Angst vor dem Test</em> (datif), <em>Ich warte auf dich</em> (pronom à l'accusatif)."
      },
      {
        h: "Le même <em>an</em>, deux cas",
        p: "La préposition <em>an</em> demande l'accusatif avec <em>denken</em> (<em>Ich denke an meine Familie</em>) et le datif avec <em>teilnehmen</em> (<em>Ich nehme an dem Kurs teil</em>). Le cas ne se déduit pas du sens : il s'apprend avec le verbe."
      },
      {
        contrast: "En français, <em>attendre quelqu'un</em> se construit sans préposition, alors qu'en allemand il en faut une : <em>warten auf</em>. Les autres prépositions ne correspondent pas non plus d'une langue à l'autre : <em>penser à</em> est <em>denken an</em>, <em>s'intéresser à</em> est <em>sich interessieren für</em>, <em>avoir peur de</em> est <em>Angst haben vor</em>, <em>s'occuper de</em> est <em>sich kümmern um</em>, <em>participer à</em> est <em>teilnehmen an</em>, <em>rêver de</em> est <em>träumen von</em>. Les petits mots <em>à</em> et <em>de</em> ne se traduisent donc pas par une préposition fixe."
      },
      {
        trap: "Ne choisis pas la préposition en traduisant du français : <em>Ich warte dich</em> ou <em>Ich denke zu dir</em> ne sont pas des phrases allemandes correctes. Après le verbe vient la préposition que ce verbe demande, puis le cas qu'elle régit : <em>Ich warte auf dich</em>, <em>Ich denke an dich</em>. Avec un verbe pronominal, le pronom réfléchi reste : <em>Sie interessiert sich für Musik</em>."
      },
      {
        tip: "Quand tu apprends un nouveau verbe de ce type, note-le toujours avec sa préposition et son cas : <em>warten auf + Akk</em>, <em>Angst haben vor + Dat</em>. C'est comme apprendre l'article avec le nom."
      }
    ],
    grammar: {
      title: "Verbes à préposition fixe",
      note: "Le verbe veut une <b>préposition</b> et un <b>cas</b> précis : <b>warten auf + Akk</b>, <b>Angst haben vor + Dat</b>. On les apprend ensemble.",
      table: {
        head: ["verbe + préposition", "cas", "exemple"],
        rows: [
          ["warten auf", "accusatif", "Ich warte auf dich."],
          ["denken an", "accusatif", "Er denkt oft an seine Familie."],
          ["sich interessieren für", "accusatif", "Sie interessiert sich für Musik."],
          ["sich kümmern um", "accusatif", "Wir kümmern uns um die Kinder."],
          ["Angst haben vor", "datif", "Sie hat Angst vor dem Test."],
          ["träumen von", "datif", "Er träumt von einem Haus am Meer."],
          ["teilnehmen an", "datif", "Ich nehme an dem Kurs teil."]
        ]
      },
      examples: [
        { tr: "Je t'attends.", note: "warten auf + accusatif : pas de préposition en français" },
        { tr: "Il pense souvent à sa famille.", note: "denken an + accusatif" },
        { tr: "Elle s'intéresse à la musique.", note: "sich interessieren für + accusatif, avec le pronom réfléchi" },
        { tr: "Nous nous occupons des enfants.", note: "sich kümmern um + accusatif" },
        { tr: "Elle a peur du test.", note: "Angst haben vor + datif : dem Test" },
        { tr: "Il rêve d'une maison au bord de la mer.", note: "träumen von + datif : von einem Haus" }
      ]
    },
    vocab: [
      "attendre (warten auf + acc.)",
      "penser à (denken an + acc.)",
      "s'intéresser à (sich interessieren für + acc.)",
      "s'occuper de (sich kümmern um + acc.)",
      "participer à (teilnehmen an + dat.)",
      "rêver de (träumen von + dat.)",
      "la peur",
      "le cours",
      "l'examen",
      "le souci, l'inquiétude",
      "l'intérêt",
      "le rêve"
    ],
    exercises: [
      {
        q: "Quelle phrase signifie « J'attends le bus » ?",
        opts: ["Ich warte auf den Bus.", "Ich warte den Bus.", "Ich warte für den Bus."],
        why: "<b>Warten auf + accusatif</b> : <i>auf den Bus</i>. En français <i>attendre</i> se passe de préposition, en allemand non."
      },
      {
        q: "Quelle phrase est correcte ?",
        opts: [
          "Sie hat Angst vor dem Test.",
          "Sie hat Angst von dem Test.",
          "Sie hat Angst auf den Test."
        ],
        why: "<b>Angst haben vor + datif</b> : <i>vor dem Test</i>. Les deux autres emploient une préposition que ce verbe ne demande pas."
      },
      {
        q: "Complète : « Ich warte ___ dich. »",
        hint: "attendre",
        why: "<b>Auf</b> : <i>warten auf</i>, et le pronom <i>dich</i> est à l'accusatif."
      },
      {
        q: "Complète : « Er denkt oft ___ seine Familie. »",
        hint: "penser à",
        why: "<b>An</b> : <i>denken an + accusatif</i>."
      },
      {
        q: "Complète : « Wir kümmern uns ___ die Kinder. »",
        hint: "s'occuper de",
        why: "<b>Um</b> : <i>sich kümmern um + accusatif</i>."
      },
      {
        q: "Complète la phrase.",
        tr: "Elle s'intéresse à la musique.",
        why: "<i>Sie interessiert sich für Musik</i> : <i>sich interessieren für + accusatif</i>, avec le pronom réfléchi <i>sich</i>."
      },
      {
        q: "Remets les mots dans l'ordre.",
        tr: "Je pense souvent à toi.",
        why: "<i>Ich denke oft an dich.</i> <i>Oft denke ich an dich</i> convient aussi, avec le verbe en deuxième position."
      },
      {
        q: "Traduis : « J'attends Anna. » (utilise warten)",
        why: "<i>Ich warte auf Anna</i> : la préposition <i>auf</i> est obligatoire même devant un nom de personne."
      },
      {
        tr: "Je t'attends. Je pense souvent à nos vacances. Elle s'intéresse à la musique et s'occupe des enfants.",
        why: "Dans <i>warte</i>, le <b>w</b> se lit [v] ; dans <i>interessiert</i>, le <b>ie</b> est long [iː] ; dans <i>dich</i>, le <b>ch</b> est [ç]."
      },
      {
        tr: "Je t'attends et je pense à l'examen.",
        why: "Dans <i>Prüfung</i>, le <b>ng</b> est un son nasal [ŋ] ; dans <i>auf</i>, le <b>au</b> se lit [aʊ] ; dans <i>dich</i>, le <b>ch</b> est [ç]."
      }
    ]
  },
  "lesson:b1-u02-l2": {
    theme: "Attentes et agacements",
    title: "J'ai hâte de ça. De quoi ?",
    objectives: [
      "remplacer verbe + préposition + chose par darauf, daran, davon",
      "poser des questions avec worauf, woran, worüber",
      "interroger sur une personne avec la préposition + wen",
      "distinguer sich freuen auf et sich freuen über"
    ],
    theory: [
      {
        h: "darauf, daran, darüber : la préposition sans le nom",
        p: "Quand le verbe à préposition renvoie à une <strong>chose</strong> ou à une situation déjà connue, la préposition se joint à <strong>da-</strong> : <em>Ich warte auf den Bus. Ich warte darauf.</em> <em>Ich denke an die Prüfung. Ich denke daran.</em> Devant une voyelle, on insère un <strong>r</strong> : <em>darauf, daran, darüber</em>. Devant une consonne : <em>davon, dafür, davor</em>."
      },
      {
        h: "worauf, woran, worüber : la question",
        p: "Pour interroger sur une chose, on emploie <strong>wo-</strong> (devant une voyelle <strong>wor-</strong>) : <em>Worauf wartest du? Woran denkst du? Worüber ärgerst du dich? Wovor hast du Angst?</em> Pour une <strong>personne</strong>, on emploie plutôt la préposition avec <em>wen</em> (accusatif) ou <em>wem</em> (datif) : <em>Auf wen wartest du? An wen denkst du? Mit wem sprichst du?</em> Et la réponse met la préposition avec le pronom : <em>Ich warte auf ihn.</em>"
      },
      {
        h: "sich freuen auf ou über",
        p: "<em>Sich freuen</em> demande l'accusatif avec deux prépositions. <strong>Auf</strong> regarde vers l'avant, vers quelque chose qui doit encore venir : <em>Ich freue mich auf das Wochenende.</em> <strong>Über</strong> regarde ce qui existe déjà ou s'est déjà passé : <em>Ich freue mich über das Geschenk.</em> Avec <em>sich ärgern</em>, on emploie <em>über</em> : <em>Er ärgert sich über den Lärm.</em>"
      },
      {
        contrast: "Le français a les pronoms <em>y</em> et <em>en</em> : <em>j'y pense</em>, <em>j'en parle</em>, <em>j'y compte</em>. L'allemand n'a pas de pronoms de ce genre : pour une chose, il emploie la forme en <em>da-</em>, et <em>j'y pense</em> devient <em>Ich denke daran</em>, <em>j'en parle</em> devient <em>Ich spreche davon</em>. Pour une personne, au contraire, on garde la préposition et le pronom : <em>je pense à lui</em> est <em>Ich denke an ihn</em>, comme en français."
      },
      {
        trap: "Les formes en <em>da-</em> et <em>wo-</em> servent pour les <strong>choses</strong>. Pour une personne, on emploie la préposition avec le pronom : <em>Ich warte auf ihn</em>, <em>Ich denke an sie</em>, et dans la question <em>Auf wen wartest du?</em>. Pense aussi au <strong>r</strong> devant une voyelle : <em>darauf</em> et <em>worauf</em>, pas « daauf » ni « woauf »."
      },
      {
        tip: "La forme en <em>da-</em> peut aussi annoncer une proposition qui suit : <em>Ich freue mich darauf, dass du kommst.</em> Ici <em>darauf</em> renvoie à la proposition en <em>dass</em>."
      }
    ],
    grammar: {
      title: "darauf, daran, worauf, woran",
      note: "Pour une <b>chose</b> : <b>da-</b> (<b>dar-</b> devant une voyelle) pour répondre, <b>wo-</b> (<b>wor-</b>) pour demander. Pour une <b>personne</b> : préposition + pronom ou <b>wen/wem</b>.",
      table: {
        head: ["verbe + préposition", "réponse (chose)", "question (chose)", "question (personne)"],
        rows: [
          ["warten auf", "darauf", "worauf", "auf wen"],
          ["denken an", "daran", "woran", "an wen"],
          ["sich ärgern über", "darüber", "worüber", "über wen"],
          ["sich freuen auf", "darauf", "worauf", "auf wen"],
          ["Angst haben vor", "davor", "wovor", "vor wem"]
        ]
      },
      examples: [
        { tr: "J'ai hâte d'être au week-end.", note: "sich freuen auf + accusatif : quelque chose qui doit venir" },
        { tr: "J'ai hâte.", note: "darauf à la place de auf das Wochenende" },
        { tr: "Qu'est-ce que tu attends avec impatience ?", note: "worauf : wo + r + auf" },
        { tr: "Il s'énerve à cause du bruit.", note: "sich ärgern über + accusatif" },
        { tr: "Qu'est-ce qui t'énerve ?", note: "worüber : wo + r + über" },
        { tr: "J'ai hâte de le voir. Qui attends-tu ?", note: "pour une personne : auf ihn, auf wen" }
      ]
    },
    vocab: [
      "avoir hâte, se réjouir à l'avance (sich freuen auf + acc. : pour quelque chose à venir)",
      "être content de (sich freuen über + acc. : pour quelque chose qui existe)",
      "s'énerver à cause de (sich ärgern über + acc.)",
      "se souvenir de (sich erinnern an + acc.)",
      "parler de (sprechen über + acc.)",
      "le week-end",
      "le cadeau",
      "le bruit",
      "la nouvelle",
      "la rencontre, la réunion",
      "la fête",
      "la surprise"
    ],
    exercises: [
      {
        q: "Comment demandes-tu « À quoi penses-tu ? »",
        opts: ["Woran denkst du?", "Wonach denkst du?", "Wohin denkst du?"],
        why: "<i>Denken an</i> devient <b>woran</b> (wo + r + an). Les autres options ne veulent pas dire « à quoi penses-tu ? » : <i>wonach</i> renvoie à la préposition <i>nach</i>, et <i>Wohin denkst du ?</i> est une tournure qui exprime la surprise ou la protestation (« qu'est-ce que tu t'imagines ? »)."
      },
      {
        q: "Remplace par une forme en da- : « Ich warte auf den Bus. Ich warte ___. »",
        opts: ["darauf", "daran", "davon"],
        why: "<b>Darauf</b> : <i>warten auf</i> + <i>da-</i> + <i>r</i> devant la voyelle de <i>auf</i>."
      },
      {
        q: "Demande : « Qui attends-tu ? »",
        opts: ["Auf wen wartest du?", "Worauf wartest du?", "Wen wartest du?"],
        why: "Pour une <b>personne</b>, on emploie la préposition avec <i>wen</i> : <i>Auf wen wartest du?</i> <i>Worauf</i> renvoie à une chose, et <i>Wen wartest du</i> n'a pas la préposition."
      },
      {
        q: "Complète la question : « ___ freust du dich? - Auf das Wochenende. »",
        hint: "question avec auf, pour une chose",
        why: "<b>Worauf</b> : <i>wo</i> + <i>r</i> + <i>auf</i>. La réponse reprend le même <i>auf</i> : <i>Auf das Wochenende</i>."
      },
      {
        q: "Complète : « Er denkt oft an den Urlaub. Er denkt oft ___. »",
        hint: "da- + an",
        why: "<b>Daran</b> : <i>da</i> + <i>r</i> + <i>an</i>. Devant la voyelle de <i>an</i>, on insère le <b>r</b>, comme dans <i>darauf</i>."
      },
      {
        q: "Complète la phrase.",
        tr: "Qu'est-ce qui t'énerve ? Je m'énerve à cause du bruit.",
        why: "<i>Worüber ärgerst du dich? Ich ärgere mich über den Lärm.</i> <i>Sich ärgern über + accusatif</i>, et dans la question <i>wor-</i> devant la voyelle."
      },
      {
        q: "Associe chaque phrase à son sens.",
        pairs: ["Qu'est-ce que tu attends ?", "J'y pense.", "Qui attends-tu ?", "Je pense à lui."]
      },
      {
        q: "Traduis : « J'y pense souvent. » (utilise denken)",
        why: "<i>Ich denke oft daran</i> : <i>y</i> devient <i>daran</i>. <i>Oft denke ich daran</i> convient aussi."
      },
      {
        tr: "Qu'est-ce que tu attends avec impatience ? J'ai hâte d'être au week-end. Et qu'est-ce qui t'a énervé ? Le bruit. Ça m'énerve souvent.",
        why: "Dans <i>freust</i>, le <b>eu</b> se lit [ɔʏ] ; dans <i>Wochenende</i>, le <b>w</b> est [v] et le <b>ch</b> est [x]."
      },
      {
        tr: "J'ai hâte d'être au week-end et j'y pense déjà.",
        why: "Dans <i>freue</i>, le <b>eu</b> se lit [ɔʏ] ; dans <i>mich</i>, le <b>ch</b> est [ç], dans <i>Wochenende</i> il est [x] ; dans <i>schon</i>, le <b>sch</b> se lit [ʃ]."
      }
    ]
  },
  "lesson:b1-u02-l3": {
    theme: "Décrire des personnes et des choses",
    title: "Le livre que j'ai lu",
    objectives: [
      "former une proposition relative avec der, die, das",
      "choisir le genre et le nombre d'après le nom, et le cas d'après le rôle dans la relative",
      "employer les relatifs au nominatif, à l'accusatif et au datif",
      "construire une relative avec préposition"
    ],
    theory: [
      {
        h: "Le pronom relatif",
        p: "La <strong>proposition relative</strong> donne des informations sur un nom. Elle commence par un <strong>pronom relatif</strong>, a le verbe conjugué <strong>à la fin</strong> et se place <strong>entre virgules</strong> : <em>Das Buch, das ich gelesen habe, ist spannend.</em> Avec le Perfekt, le participe et l'auxiliaire viennent à la fin : <em>gelesen habe</em>."
      },
      {
        h: "Deux questions pour choisir la forme",
        p: "Le <strong>genre et le nombre</strong> viennent du nom auquel le pronom renvoie (<em>Buch</em> est neutre, donc <em>das</em>). Le <strong>cas</strong> dépend du rôle du pronom dans la relative : sujet (nominatif), complément d'objet direct (accusatif) ou complément d'objet indirect, comme le destinataire avec <em>geben</em> ou l'objet de <em>helfen</em> (datif) : <em>das Buch, das ich den Kindern gebe</em> (la chose donnée : accusatif), <em>die Kinder, denen ich das Buch gebe</em> (le destinataire : datif). Dans les trois cas étudiés ici, les formes sont celles de l'article défini, sauf le datif pluriel, qui est <strong>denen</strong> (le génitif, <em>dessen, deren</em>, viendra plus tard)."
      },
      {
        h: "Avec la préposition",
        p: "La préposition se place <strong>avant</strong> le pronom et en décide le cas : <em>Der Mann, mit dem ich spreche, ist mein Chef. Die Freundin, auf die ich warte, kommt aus Rom.</em> Il existe aussi des formes du génitif (<em>dessen, deren</em>), dont on n'a pas besoin pour l'instant."
      },
      {
        contrast: "Le français choisit son relatif d'après la fonction : <em>qui</em> pour le sujet (<em>l'homme qui parle</em>), <em>que</em> pour l'objet (<em>l'homme que je vois</em>), <em>dont</em> et <em>où</em> pour d'autres cas, et après une préposition <em>qui</em> ou <em>lequel</em> (<em>l'homme avec qui je parle</em>). <em>Qui, que, dont</em> et <em>où</em> sont invariables ; seul <em>lequel</em> varie en genre et en nombre (<em>laquelle, lesquels, lesquelles</em>). Les deux langues tiennent compte de la fonction, mais les relatifs allemands étudiés ici marquent à la fois le <strong>genre</strong>, le <strong>nombre</strong> et le <strong>cas</strong> : l'article relatif prend le genre et le nombre du nom, et le cas de sa fonction dans la relative, donc <em>der Mann, der kommt</em> (sujet), <em>der Mann, den ich sehe</em> (objet), <em>der Mann, mit dem ich spreche</em> (après <em>mit</em>). Autre différence : en allemand la relative est toujours entre virgules, qu'elle soit déterminative ou non."
      },
      {
        trap: "Ne confonds pas le pronom <em>das</em> avec la conjonction <em>dass</em> : <em>das Buch, das ich lese</em> (relatif, renvoie à <em>Buch</em>) et <em>Ich glaube, dass du recht hast</em> (introduit une proposition). Autre piège, le cas : <em>Die Frau, der ich geholfen habe</em> a <em>der</em> parce que <em>helfen</em> veut le datif, même si <em>Frau</em> est un nom au nominatif."
      },
      {
        tip: "Avant d'écrire la relative, pose-toi deux questions : à quel nom le pronom renvoie-t-il (genre et nombre) ? Et quel rôle a-t-il dans la relative (cas) ? Les deux réponses donnent la forme."
      }
    ],
    grammar: {
      title: "La proposition relative",
      note: "Pronom relatif = <b>genre et nombre</b> du nom, <b>cas</b> du rôle dans la relative. Verbe <b>à la fin</b>, relative entre <b>virgules</b>.",
      table: {
        head: ["cas", "m.", "f.", "n.", "pluriel"],
        rows: [
          ["nominatif", "der", "die", "das", "die"],
          ["accusatif", "den", "die", "das", "die"],
          ["datif", "dem", "der", "dem", "denen"]
        ]
      },
      examples: [
        { tr: "L'homme qui est là-bas est mon professeur.", note: "der : masculin, sujet de la relative" },
        { tr: "Le livre que j'ai lu est passionnant.", note: "das : neutre, complément d'objet direct" },
        { tr: "La femme que j'ai aidée s'appelle Eva.", note: "der : féminin, datif avec helfen" },
        { tr: "Les enfants à qui je donne le livre ont sept ans.", note: "denen : datif pluriel" },
        { tr: "L'homme avec qui je parle est mon chef.", note: "mit dem : la préposition précède le pronom" },
        { tr: "L'amie que j'attends vient de Rome.", note: "auf die : warten auf + accusatif" }
      ]
    },
    vocab: [
      "le roman",
      "le film",
      "le voisin",
      "la collègue",
      "la clé",
      "le sac",
      "le téléphone portable",
      "les lunettes",
      "le magasin",
      "passionnant, captivant",
      "perdre",
      "recommander"
    ],
    exercises: [
      {
        q: "Choisis le pronom relatif : « Der Film, ___ wir gestern gesehen haben, war lang. »",
        opts: ["der", "den", "dem"],
        why: "<i>Film</i> est masculin et, dans la relative, il est complément d'objet direct (<i>wir haben den Film gesehen</i>) : donc <b>den</b>."
      },
      {
        q: "Choisis le pronom relatif : « Das ist der Kollege, mit ___ ich arbeite. »",
        opts: ["dem", "den", "der"],
        why: "<i>Kollege</i> est masculin et <i>mit</i> veut le datif : <b>dem</b>. La préposition se place avant le pronom."
      },
      {
        q: "Complète : « Das ist das Buch, ___ ich gelesen habe. »",
        hint: "neutre, accusatif",
        why: "<b>Das</b> : <i>Buch</i> est neutre et, dans la relative, il est complément d'objet direct (<i>das</i> à l'accusatif est identique au nominatif)."
      },
      {
        q: "Complète : « Die Frau, ___ ich gestern getroffen habe, heißt Eva. »",
        hint: "féminin, accusatif",
        why: "<b>Die</b> : <i>Frau</i> est féminin et, dans la relative, complément d'objet direct. Le féminin a <i>die</i> au nominatif comme à l'accusatif."
      },
      {
        q: "Complète : « Die Kinder, ___ ich das Buch gebe, sind sieben Jahre alt. »",
        hint: "pluriel, datif",
        why: "<b>Denen</b> : datif pluriel. Dans les trois cas étudiés ici, le pronom relatif coïncide avec l'article défini, sauf au datif pluriel : <i>denen</i>."
      },
      {
        q: "Complète la phrase.",
        tr: "Voilà la clé que j'ai perdue.",
        why: "<i>Das ist der Schlüssel, den ich verloren habe</i> : <i>den</i> parce que <i>Schlüssel</i> est masculin et complément d'objet direct, et <i>verloren</i> avec <i>habe</i> se place à la fin."
      },
      {
        q: "Remets les mots dans l'ordre.",
        tr: "Voilà le sac que j'ai acheté hier.",
        why: "<i>Das ist die Tasche, die ich gestern gekauft habe.</i> Après la virgule, le verbe conjugué <i>habe</i> est à la fin, précédé de <i>gekauft</i>."
      },
      {
        q: "Traduis : « Le film que nous avons vu était long. »",
        why: "<i>Der Film, den wir gesehen haben, war lang</i> : <i>den</i> (masculin, objet), <i>gesehen haben</i> à la fin de la relative, et la principale reprend avec <i>war</i>."
      },
      {
        tr: "Voici le livre que j'ai lu. C'est un roman passionnant. La collègue à qui j'ai recommandé le roman le trouve passionnant aussi.",
        why: "Dans <i>spannend</i>, le <b>sp</b> initial se lit [ʃp] ; dans <i>empfohlen</i>, le <b>pf</b> est une affriquée [pf] ; dans <i>ich</i>, le <b>ch</b> est [ç]."
      },
      {
        tr: "La clé que j'ai perdue était dans mon sac.",
        why: "Dans <i>Schlüssel</i>, le <b>sch</b> se lit [ʃ] ; dans <i>verloren</i>, le <b>v</b> est [f], alors que dans <i>war</i> le <b>w</b> est [v]."
      }
    ]
  },
  "lesson:b1-u02-l4": {
    theme: "Parler de façon générale",
    title: "Quelqu'un, personne, chacun",
    objectives: [
      "employer jemand et niemand avec les formes de l'accusatif et du datif",
      "employer jeder (singulier) et alle (pluriel)",
      "employer etwas et nichts",
      "construire la négation sans nicht en plus"
    ],
    theory: [
      {
        h: "jemand et niemand",
        p: "<strong>Jemand</strong> (quelqu'un) et <strong>niemand</strong> (personne) parlent de personnes de façon générale. Ils peuvent rester invariables ou prendre <em>-en</em> à l'accusatif et <em>-em</em> au datif : <em>Ich habe niemanden gesehen</em> ou <em>Ich habe niemand gesehen</em>. <em>Ich habe jemandem geholfen</em> ou <em>Ich habe jemand geholfen</em>. Les deux formes sont correctes, y compris à l'écrit ; les formes avec terminaison rendent le cas plus visible."
      },
      {
        h: "jeder et alle",
        p: "<strong>Jeder</strong> (chacun) est <strong>singulier</strong> : <em>Jeder weiß das.</em> Il se décline comme <em>dieser</em> : <em>jeder, jeden, jedem</em> (<em>Ich kenne jeden hier</em>). <strong>Alle</strong> (tous) est <strong>pluriel</strong> : <em>Alle sind da. Alle wissen das.</em>"
      },
      {
        h: "etwas et nichts",
        p: "<strong>Etwas</strong> (quelque chose) et <strong>nichts</strong> (rien) ne changent pas : <em>Ich habe etwas gehört. Ich habe nichts gesehen.</em> Un adjectif qui les suit s'écrit avec une majuscule et prend <em>-es</em> au nominatif et à l'accusatif (<em>etwas Neues, nichts Besonderes</em>), <em>-em</em> au datif (<em>mit etwas Neuem, mit nichts Besonderem</em>)."
      },
      {
        contrast: "En français, <em>personne</em> et <em>rien</em> après le verbe s'emploient avec <em>ne</em> : <em>Je n'ai vu personne, je n'ai rien fait</em>. En allemand, la négation est déjà dans <em>niemand</em> et <em>nichts</em>, et il n'y a pas de mot comme <em>ne</em> ni de <em>nicht</em> en plus : <em>Ich habe niemanden gesehen. Ich habe nichts gemacht.</em> Même chose quand <em>personne</em> est en tête : <em>Personne n'a appelé</em> est <em>Niemand hat angerufen</em>. Autre piège : <em>tout le monde</em> est singulier en français (<em>tout le monde sait</em>), alors que <em>alle</em> est un pluriel en allemand (<em>Alle wissen das</em>) ; pour le singulier, l'allemand a <em>jeder</em>, qui correspond à <em>chacun</em> ou <em>chaque</em>."
      },
      {
        trap: "<em>Jeder</em> est singulier comme <em>chacun</em>, pas comme <em>tous</em> : <em>Jeder weiß das</em> (avec <em>weiß</em>, 3e personne du singulier), alors que <em>alle</em> veut le pluriel : <em>Alle wissen das</em>. De plus, ajouter <em>nicht</em> à <em>nichts</em> ou à <em>niemanden</em> change le sens, parce que les deux négations s'annulent : <em>Ich habe nicht nichts gehört</em> veut dire qu'on a entendu quelque chose."
      },
      {
        tip: "Pour « quelqu'un d'autre », on dit <em>jemand anders</em>. Pour demander de façon générale, <em>Hat jemand eine Frage?</em> est la forme la plus naturelle."
      }
    ],
    grammar: {
      title: "jemand, niemand, jeder",
      note: "<b>jemand</b> et <b>niemand</b> : invariables ou avec <b>-en</b> (acc.) et <b>-em</b> (dat.). <b>jeder</b> est singulier, <b>alle</b> est pluriel. <b>nichts</b> et <b>niemand</b> nient à eux seuls : pas de <b>nicht</b> en plus.",
      table: {
        head: ["", "nominatif", "accusatif", "datif"],
        rows: [
          ["jemand", "jemand", "jemanden, jemand", "jemandem, jemand"],
          ["niemand", "niemand", "niemanden, niemand", "niemandem, niemand"],
          ["jeder (m.)", "jeder", "jeden", "jedem"],
          ["alle (pluriel)", "alle", "alle", "allen"]
        ]
      },
      examples: [
        { tr: "Quelqu'un a-t-il vu ma clé ?", note: "jemand au nominatif" },
        { tr: "Je n'ai vu personne.", note: "niemanden : accusatif, pas de nicht" },
        { tr: "J'ai aidé quelqu'un.", note: "jemandem : datif avec helfen" },
        { tr: "Chacun le sait.", note: "jeder, singulier : weiß" },
        { tr: "Ils sont tous là.", note: "alle, pluriel : sind" },
        { tr: "Je n'ai rien entendu.", note: "nichts : pas de nicht" }
      ]
    },
    vocab: [
      "quelqu'un",
      "personne",
      "chacun (singulier)",
      "tous (pluriel)",
      "quelque chose",
      "rien",
      "la personne",
      "l'être humain, les gens",
      "le problème",
      "la question",
      "la réponse",
      "le secret"
    ],
    exercises: [
      {
        q: "Comment dis-tu « Je n'ai rien fait » ?",
        opts: [
          "Ich habe nichts gemacht.",
          "Ich habe niemanden gemacht.",
          "Ich habe etwas nicht gemacht."
        ],
        why: "<b>Nichts</b> contient déjà la négation. <i>Niemanden</i> se rapporte à des personnes, et <i>etwas nicht</i> veut dire « il y a quelque chose que je n'ai pas fait »."
      },
      {
        q: "Quelle phrase est correcte ?",
        opts: ["Jeder weiß das.", "Jeder wissen das.", "Jeder wisst das."],
        why: "<b>Jeder</b> est singulier : le verbe est à la 3e personne du singulier, <i>weiß</i>."
      },
      {
        q: "Quelles phrases sont correctes ?",
        opts: [
          "Ich kenne niemanden hier.",
          "Hat jemand Fragen?",
          "Alle sind da.",
          "Jeder sind da.",
          "Alle ist da."
        ],
        why: "Les trois premières sont justes. <i>Jeder</i> est singulier, donc la 4 a un verbe pluriel erroné ; <i>alle</i> est pluriel, donc la 5 a un verbe singulier erroné."
      },
      {
        q: "Complète : « Ich habe ___ gesehen. » (je n'ai vu personne)",
        hint: "personne, accusatif",
        why: "<b>Niemanden</b> : accusatif avec la terminaison ; <i>niemand</i> est correct aussi. Pas de <i>nicht</i>."
      },
      {
        q: "Complète : « Ich habe ___ geholfen. » (à quelqu'un)",
        hint: "quelqu'un, datif",
        why: "<b>Jemandem</b> : <i>helfen</i> veut le datif. <i>Jemand</i> sans terminaison est correct aussi."
      },
      {
        q: "Complète : « ___ weiß das. » (chacun)",
        hint: "chacun, singulier",
        why: "<b>Jeder</b> : singulier, avec <i>weiß</i>. Si la phrase était au pluriel, il faudrait <i>alle</i>."
      },
      {
        q: "Complète : « Ich habe gestern ___ gegessen. » (rien)",
        hint: "rien",
        why: "<b>Nichts</b> : ne change pas et ne veut pas de <i>nicht</i>."
      },
      {
        q: "Complète la phrase.",
        tr: "Je n'ai vu personne et je n'ai rien entendu.",
        why: "<i>Ich habe niemanden gesehen und nichts gehört</i> : chaque pronom nie son propre complément, et le <i>ne</i> français ne se traduit pas par un <i>nicht</i> en plus."
      },
      {
        tr: "Quelqu'un a-t-il vu mes lunettes ? Non, personne ne les a vues. Chacun les cherche, mais nous ne trouvons rien.",
        why: "Dans <i>jemand</i> et <i>jeder</i>, le <b>j</b> se lit [j] ; dans <i>niemand</i>, le <b>ie</b> est long [iː] ; dans <i>sucht</i>, le <b>ch</b> est [x] et dans <i>nichts</i> il est [ç] ; dans <i>meine</i>, le <b>ei</b> est [aɪ]."
      },
      {
        tr: "Je n'ai vu personne et je n'ai rien entendu.",
        why: "Dans <i>niemanden</i>, le <b>ie</b> est long [iː] ; dans <i>ich</i> et <i>nichts</i>, le <b>ch</b> est [ç]."
      }
    ]
  },
  "lesson:b1-u02-test": {
    theme: "Vérification",
    title: "Test : À quoi penses-tu ?",
    objectives: [
      "vérifier les verbes à préposition, darauf et worauf, les propositions relatives, jemand, niemand et jeder"
    ],
    theory: [
      {
        p: "Dix questions sur toute l'unité. On réussit avec 70 %. Ne relis pas les leçons pendant que tu réponds : si tu ne te souviens pas de quelque chose, mieux vaut retourner réviser."
      }
    ],
    exercises: [
      {
        q: "Complète : « Ich warte ___ dich. »",
        hint: "attendre",
        why: "<b>Auf</b> : <i>warten auf + accusatif</i>."
      },
      {
        q: "Complète : « Sie hat Angst ___ dem Test. »",
        hint: "avoir peur de",
        why: "<b>Vor</b> : <i>Angst haben vor + datif</i>."
      },
      {
        q: "Complète la question : « ___ denkst du? - An den Urlaub. »",
        hint: "question avec an, pour une chose",
        why: "<b>Woran</b> : <i>denken an</i> + <i>wo</i> + <i>r</i> devant la voyelle."
      },
      {
        q: "Complète : « Das ist der Mann, ___ ich gestern gesehen habe. »",
        hint: "masculin, accusatif",
        why: "<b>Den</b> : <i>Mann</i> est masculin et, dans la relative, complément d'objet direct."
      },
      {
        q: "Complète : « Das Buch, ___ ich gelesen habe, ist spannend. »",
        hint: "neutre, accusatif",
        why: "<b>Das</b> : neutre, complément d'objet direct de la relative."
      },
      {
        q: "Complète : « Ich habe ___ gesehen. » (je n'ai vu personne)",
        hint: "personne, accusatif",
        why: "<b>Niemanden</b> (ou <i>niemand</i>, correct aussi), sans <i>nicht</i>."
      },
      {
        q: "Tu as déjà reçu le cadeau et tu en es content. Quelle phrase est correcte ?",
        opts: [
          "Ich freue mich über das Geschenk.",
          "Ich freue mich für das Geschenk.",
          "Ich freue mich mit das Geschenk."
        ],
        why: "<b>Sich freuen über + accusatif</b> pour quelque chose qui est déjà là. Avec <i>auf</i>, on regarde vers l'avant (<i>Ich freue mich auf das Geschenk</i> veut dire que tu l'attends encore)."
      },
      {
        q: "Choisis le pronom relatif : « Die Frau, mit ___ ich spreche, ist meine Chefin. »",
        opts: ["der", "die", "dem"],
        why: "<i>Frau</i> est féminin et <i>mit</i> veut le datif : <b>der</b>."
      },
      {
        tr: "Je t'attends. La femme qui est là-bas a peur du test. Personne ne l'aide.",
        why: "Dans <i>warte</i>, le <b>w</b> est [v] ; dans <i>steht</i>, le <b>st</b> initial est [ʃt] ; dans <i>niemand</i>, le <b>ie</b> est long [iː] ; dans <i>dich</i>, le <b>ch</b> est [ç]."
      },
      {
        tr: "Je pense souvent au livre que j'ai lu.",
        why: "Dans <i>ich</i>, le <b>ch</b> est [ç], dans <i>Buch</i> il est [x] ; le <b>u</b> de <i>Buch</i> est long [uː] ; dans <i>gelesen</i>, le <b>s</b> est sonore [z]."
      }
    ]
  }
});
