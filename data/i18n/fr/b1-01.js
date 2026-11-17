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
  },
  "unit:b1-u03": {
    title: "Administrations et contrats",
    grammarNote: "passif (Vorgangspassiv) au présent et au Präteritum · génitif et wegen, während, innerhalb · um ... zu et damit · registre formel"
  },
  "lesson:b1-u03-l1": {
    theme: "Démarches administratives",
    title: "La déclaration de domicile",
    objectives: [
      "comprendre et former le passif avec werden au présent et au Präteritum",
      "dire qui fait l'action avec von + datif, quand c'est utile",
      "distinguer le processus (wird geprüft) du résultat (ist geprüft)",
      "se débrouiller à un guichet avec le registre formel"
    ],
    theory: [
      {
        h: "Le passif avec werden",
        p: "Le passif met au premier plan <strong>ce qui se passe</strong>, pas celui qui agit. Il se forme avec <strong>werden</strong> conjugué et le <strong>participe II</strong> à la fin : <em>Das Formular wird ausgefüllt.</em> Au passé, on utilise le Präteritum de <em>werden</em> : <em>Das Formular wurde ausgefüllt.</em> Le complément d'objet de la phrase active devient le sujet : <em>Die Beamtin prüft den Ausweis</em> devient <em>Der Ausweis wird geprüft.</em>"
      },
      {
        h: "Qui agit : von + datif",
        p: "Si l'on veut dire qui fait l'action, on ajoute <strong>von + datif</strong> : <em>Der Ausweis wird von der Beamtin geprüft.</em> Très souvent, l'agent n'est pas nommé, parce qu'il est évident ou sans importance : <em>Termine werden online vergeben.</em> C'est pourquoi le passif est fréquent dans les formulaires, les avis et les administrations."
      },
      {
        h: "Au guichet : le registre formel",
        p: "Dans une administration, on dit <strong>Sie</strong>, avec <em>Herr</em> ou <em>Frau</em> et le nom de famille. Une demande se formule avec <em>ich möchte</em> ou avec le Konjunktiv II : <em>Ich möchte mich anmelden. Könnten Sie mir helfen?</em> L'<strong>Anmeldung</strong> est la déclaration de son adresse au Bürgeramt ; en général, elle doit être faite dans les deux semaines qui suivent le déménagement."
      },
      {
        contrast: "En français, le passif se forme avec <em>être</em> + participe passé, et le participe s'accorde avec le sujet (<em>le formulaire est rempli, la carte est contrôlée, les formulaires sont remplis</em>) ; on dit aussi volontiers <em>on remplit le formulaire</em> ou <em>le formulaire se remplit</em>. En allemand, l'auxiliaire est <strong>werden</strong> et le participe ne change pas : <em>der Ausweis wird geprüft</em>, <em>die Karte wird geprüft</em>, <em>die Formulare werden geprüft</em>. L'agent se dit avec <em>von</em>, comme <em>par</em> en français : <em>von der Beamtin</em>, <em>par la fonctionnaire</em>."
      },
      {
        trap: "<em>Das Formular wird ausgefüllt</em> met en avant l'<strong>action</strong> de remplir le formulaire, sans dire qu'elle a lieu en ce moment même : ce peut être une procédure habituelle ou un fait à venir. <em>Das Formular ist ausgefüllt</em> est une phrase correcte, mais elle décrit le <strong>résultat</strong> : le formulaire est déjà rempli. Ce n'est pas la même chose : avec <em>wird</em>, on regarde l'action, avec <em>ist</em>, l'état qui en reste. Le français <em>est rempli</em> peut dire les deux, l'allemand les distingue. De même, <em>wurde geprüft</em> contient <em>werden</em>, tandis que <em>war geprüft</em> décrit un état passé."
      },
      {
        tip: "Pour passer de l'actif au passif, repère le complément à l'accusatif : il devient le sujet. <em>Man gibt das Formular ab</em> devient <em>Das Formular wird abgegeben.</em> Avec un verbe à particule séparable, le participe II reste soudé : <em>abgegeben, ausgefüllt, angemeldet</em>."
      }
    ],
    grammar: {
      title: "Le passif au présent et au Präteritum",
      note: "<b>werden</b> + <b>participe II</b> à la fin : <b>wird geprüft</b> (présent), <b>wurde geprüft</b> (Präteritum). L'agent, s'il y en a un, se dit <b>von + datif</b>.",
      table: {
        head: ["", "présent", "Präteritum"],
        rows: [
          ["ich", "werde geprüft", "wurde geprüft"],
          ["du", "wirst geprüft", "wurdest geprüft"],
          ["er/sie/es", "wird geprüft", "wurde geprüft"],
          ["wir", "werden geprüft", "wurden geprüft"],
          ["ihr", "werdet geprüft", "wurdet geprüft"],
          ["sie/Sie", "werden geprüft", "wurden geprüft"]
        ]
      },
      examples: [
        { tr: "Le formulaire est rempli.", note: "werden + participe II : l'action au premier plan" },
        { tr: "La pièce d'identité est contrôlée.", note: "le participe ne change pas avec le genre" },
        { tr: "La déclaration de domicile a été confirmée hier.", note: "wurde : Präteritum de werden" },
        { tr: "Les rendez-vous sont attribués en ligne.", note: "sans agent, pluriel : werden" },
        { tr: "L'attestation a été délivrée tout de suite.", note: "participe d'un verbe séparable : ausgestellt" },
        { tr: "Le formulaire est contrôlé par la fonctionnaire.", note: "von + datif : von der Beamtin" }
      ]
    },
    vocab: [
      "la déclaration de domicile",
      "le bureau des services aux citoyens (Bürgeramt)",
      "le numéro d'identification fiscale allemand (Steuer-ID)",
      "le rendez-vous",
      "le formulaire",
      "l'attestation",
      "la pièce d'identité",
      "le guichet",
      "déclarer son domicile (sich anmelden)",
      "remplir",
      "remettre",
      "délivrer"
    ],
    exercises: [
      {
        q: "Quelle phrase veut dire « On remplit le formulaire » (le processus) ?",
        opts: ["Das Formular wird ausgefüllt.", "Das Formular ist ausgefüllt.", "Das Formular hat ausgefüllt."],
        why: "<b>Wird ausgefüllt</b> : <i>werden</i> + participe II, le processus. <i>Ist ausgefüllt</i> est une phrase correcte, mais elle dit que le formulaire est déjà rempli ; <i>Das Formular hat ausgefüllt</i> est à l'actif : c'est le formulaire qui remplirait, ce qui n'a pas de sens."
      },
      {
        q: "Hier, la demande a été examinée. Quelle phrase ?",
        opts: [
          "Der Antrag wurde gestern geprüft.",
          "Der Antrag wird gestern geprüft.",
          "Der Antrag werden gestern geprüft."
        ],
        why: "<b>Wurde geprüft</b> : Präteritum de <i>werden</i>. <i>Wird</i> est un présent, et <i>werden</i> ne s'accorde pas avec le singulier <i>Antrag</i>."
      },
      {
        q: "Quelle phrase est correcte ?",
        opts: [
          "Der Ausweis wird von der Beamtin geprüft.",
          "Der Ausweis wird von die Beamtin geprüft.",
          "Der Ausweis wird von der Beamtin prüfen."
        ],
        why: "<b>Von + datif</b> : <i>von der Beamtin</i>. Le participe II (<i>geprüft</i>) est à la fin, et non l'infinitif."
      },
      {
        q: "Complète : « Das Formular ___ ausgefüllt. »",
        hint: "werden, présent",
        why: "<b>Wird</b> : sujet au singulier, passif de processus au présent."
      },
      {
        q: "Complète : « Der Pass ___ gestern ausgestellt. »",
        hint: "werden, Präteritum",
        why: "<b>Wurde</b> : l'indice demande le Präteritum de <i>werden</i>, donc <i>wurde</i>. <i>Gestern</i> seul ne suffit pas : le passif au Perfekt (<i>ist ... ausgestellt worden</i>) est une autre forme, qui n'est pas demandée ici."
      },
      {
        q: "Complète la phrase.",
        tr: "Le formulaire est remis au guichet (passif au présent).",
        why: "<i>Das Formular wird am Schalter abgegeben.</i> <i>Wird</i> + participe II <i>abgegeben</i>, qui reste soudé."
      },
      {
        q: "Associe chaque phrase à son sens.",
        pairs: [
          "Le formulaire est rempli.",
          "La pièce d'identité a été contrôlée.",
          "Le rendez-vous est attribué.",
          "L'attestation a été délivrée."
        ]
      },
      {
        q: "Traduis en utilisant le passif de processus avec werden : « La demande est examinée. »",
        why: "<i>Der Antrag wird geprüft</i> : <i>werden</i> + participe II. <i>Überprüft</i> convient aussi."
      },
      {
        tr: "Bonjour, je voudrais déclarer mon domicile. Le formulaire est remis au guichet. La pièce d'identité est contrôlée et l'attestation est délivrée tout de suite.",
        why: "Dans <i>möchte</i>, le <b>ö</b> est arrondi et le <b>ch</b> est [ç] ; dans <i>Schalter</i>, le <b>sch</b> est [ʃ] ; dans <i>Ausweis</i>, le <b>au</b> est [aʊ] et le <b>w</b> est [v] ; dans <i>geprüft</i>, le <b>ü</b> est arrondi."
      },
      {
        tr: "Bonjour, je voudrais déclarer mon domicile. Le formulaire a déjà été rempli.",
        why: "Dans <i>ich</i>, le <b>ch</b> est [ç] ; dans <i>schon</i>, le <b>sch</b> est [ʃ] ; dans <i>wurde</i>, le <b>w</b> est [v] ; dans <i>ausgefüllt</i>, le <b>ü</b> est arrondi."
      }
    ]
  },
  "lesson:b1-u03-l2": {
    theme: "Banque et location",
    title: "Banque et contrat de location",
    objectives: [
      "utiliser le génitif pour dire à qui appartient quelque chose",
      "reconnaître les terminaisons -(e)s au masculin et au neutre, et -(e)n des masculins faibles",
      "utiliser wegen, während et innerhalb avec le génitif",
      "parler à un guichet de banque sur un ton formel"
    ],
    theory: [
      {
        h: "Le génitif : le deuxième cas",
        p: "Le <strong>génitif</strong> exprime la possession ou le rapport entre deux noms, et se place <strong>après</strong> le nom auquel il se rapporte : <em>der Vertrag des Vermieters</em>, <em>die Höhe der Miete</em>. L'article change : <strong>des</strong> au masculin et au neutre, <strong>der</strong> au féminin et au pluriel. Au masculin et au neutre, la plupart des noms prennent aussi <strong>-s</strong> ou <strong>-es</strong> : <em>des Vermieters, des Vertrags, des Hauses</em>. Les masculins faibles prennent <strong>-(e)n</strong> : <em>des Kunden, des Studenten</em>."
      },
      {
        h: "wegen, während, innerhalb",
        p: "Certaines prépositions se construisent avec le génitif : <strong>wegen</strong> (à cause de), <strong>während</strong> (pendant), <strong>innerhalb</strong> (dans un délai de, à l'intérieur de). <em>Wegen des Umzugs brauche ich ein neues Konto. Während des Urlaubs habe ich viel gelesen. Innerhalb einer Woche bekommen Sie Ihre Karte.</em> À l'oral, on entend souvent aussi le datif après <em>wegen</em> ; à l'écrit et dans les administrations, c'est le génitif qu'on attend."
      },
      {
        h: "Noms propres et von + datif",
        p: "Avec un <strong>nom propre</strong>, le génitif prend <em>-s</em> et se place <strong>avant</strong> le nom, sans apostrophe : <em>Annas Konto</em>. Si le nom se termine par une sifflante (<em>-s, -x, -z, -ß</em>), on met seulement l’apostrophe : <em>Hans’ Konto, Max’ Konto</em>. À l'oral, on le remplace souvent par <strong>von + datif</strong> : <em>das Konto von meinem Bruder</em>."
      },
      {
        contrast: "Le français dit la possession avec <em>de</em> : <em>le contrat du propriétaire, le compte de mon frère</em>, et la préposition ne change pas ; en allemand, c'est l'article qui marque le cas : <em>der Vertrag des Vermieters</em>. Attention à un faux ami : le <em>des</em> allemand est un singulier (masculin ou neutre), alors que le <em>des</em> français est un pluriel (<em>de</em> + <em>les</em>). Avec les noms propres, le possesseur passe devant : <em>Annas Konto</em>, là où le français dit <em>le compte d'Anna</em>."
      },
      {
        trap: "<em>Während</em> peut aussi être une conjonction, et alors le verbe va à la fin : <em>Während ich arbeite, ...</em>. Comme préposition (<em>während des Urlaubs</em>), il se construit avec le génitif et n'est pas suivi d'un verbe conjugué. Au féminin, le nom ne change pas : <em>die Höhe der Miete</em>."
      },
      {
        tip: "Au guichet d'une banque, dis <em>Sie</em> : <em>Ich möchte ein Konto eröffnen. Könnten Sie mir bitte das Formular geben?</em> Le registre formel n'exige pas de mots difficiles, mais des phrases complètes et le verbe à la bonne place."
      }
    ],
    grammar: {
      title: "Le génitif et wegen, während, innerhalb",
      note: "Génitif : <b>des</b> (m. et n.) + nom en <b>-(e)s</b> (les masculins faibles : <b>-(e)n</b>, <i>des Kunden</i>), <b>der</b> (f. et pluriel). Il se place <b>après</b> le nom possédé. Avec <b>wegen, während, innerhalb</b>.",
      table: {
        head: ["", "m.", "f.", "n.", "pluriel"],
        rows: [
          ["article", "des", "der", "des", "der"],
          ["exemple", "des Vermieters", "der Miete", "des Kontos", "der Mieter"]
        ]
      },
      examples: [
        { tr: "Voici le contrat du propriétaire.", note: "des Vermieters : masculin, nom en -s" },
        { tr: "Le montant du loyer figure dans le contrat.", note: "der Miete : féminin, le nom ne change pas" },
        { tr: "À cause du déménagement, il me faut un nouveau compte.", note: "wegen + génitif : des Umzugs" },
        { tr: "Pendant les vacances, j'ai beaucoup lu.", note: "während + génitif : des Urlaubs" },
        { tr: "Vous recevez votre carte dans un délai d'une semaine.", note: "innerhalb + génitif : einer Woche" },
        { tr: "Le compte d'Anna est dans une autre banque.", note: "nom propre : Annas, avant le nom" }
      ]
    },
    vocab: [
      "le contrat de location",
      "le compte",
      "le loyer",
      "le propriétaire (le bailleur)",
      "le locataire",
      "le dépôt de garantie",
      "la résiliation",
      "le délai",
      "le virement",
      "ouvrir (un compte)",
      "signer",
      "faire un virement"
    ],
    exercises: [
      {
        q: "Quelle phrase est correcte ?",
        opts: [
          "Die Höhe der Miete steht im Vertrag.",
          "Die Höhe den Miete steht im Vertrag.",
          "Die Höhe Miete steht im Vertrag."
        ],
        why: "<b>Der Miete</b> : <i>Miete</i> est féminin et le génitif féminin a <i>der</i>. <i>Den</i> n'est pas une forme du féminin singulier, et sans article le cas n'est pas marqué."
      },
      {
        q: "Complète : « Das ist der Vertrag ___ Vermieters. »",
        hint: "génitif masculin",
        why: "<b>Des</b> : génitif masculin, et le nom prend <i>-s</i> (<i>des Vermieters</i>)."
      },
      {
        q: "Complète : « Die Höhe ___ Miete steht im Vertrag. »",
        hint: "génitif féminin",
        why: "<b>Der</b> : génitif féminin singulier. Le nom <i>Miete</i> ne change pas."
      },
      {
        q: "Complète la phrase.",
        tr: "Pendant les vacances, j'ai beaucoup lu.",
        why: "<i>Während des Urlaubs habe ich viel gelesen.</i> <i>Während</i>, comme préposition, se construit avec le génitif : <i>des Urlaubs</i>."
      },
      {
        q: "Associe chaque expression à son sens.",
        pairs: ["la voiture du père", "à cause de la météo", "pendant les vacances", "dans un délai d'une semaine"]
      },
      {
        q: "Remets les mots dans l'ordre.",
        tr: "À cause du déménagement, il me faut un nouveau compte.",
        why: "<i>Wegen des Umzugs brauche ich ein neues Konto.</i> <i>Ich brauche wegen des Umzugs ein neues Konto</i> convient aussi. Dans la première, le verbe <i>brauche</i> est en deuxième position, après le groupe <i>Wegen des Umzugs</i>."
      },
      {
        q: "Traduis : « Voici le compte de mon frère. »",
        why: "<i>Das ist das Konto meines Bruders</i> : génitif masculin avec <i>meines</i> et <i>-s</i> sur le nom. À l'oral, <i>das Konto von meinem Bruder</i> convient aussi."
      },
      {
        q: "Tu es à la banque et tu parles avec un employé.",
        setting: "Tu veux ouvrir un compte et tu utilises le registre formel.",
        lines: [
          { tr: "Bonjour. Que puis-je faire pour vous ?" },
          { tr: "Réponds : tu voudrais ouvrir un compte.", answerTr: "Bonjour, je voudrais ouvrir un compte." },
          { tr: "Volontiers. Avez-vous aussi une copie du contrat de location sur vous ?" },
          { tr: "Réponds : bien sûr, à cause du déménagement, tu as tout avec toi.", answerTr: "Bien sûr. À cause du déménagement, j'ai tout avec moi." },
          { tr: "Parfait. Vous recevrez votre carte dans un délai d'une semaine." },
          { tr: "Demande si la carte est envoyée par la poste.", answerTr: "La carte est-elle envoyée par la poste ?" }
        ]
      },
      {
        tr: "Bonjour, je voudrais ouvrir un compte. Voici le contrat de location. À cause du déménagement, il me faut un nouveau compte. Je reçois ma carte dans un délai d'une semaine.",
        why: "Dans <i>eröffnen</i>, le <b>ö</b> est arrondi ; dans <i>Mietvertrag</i>, le <b>ie</b> est long [iː] et le <b>v</b> est [f] ; dans <i>Wegen</i>, le <b>W</b> est [v] ; dans <i>Woche</i>, le <b>ch</b> après <b>o</b> est [x]."
      },
      {
        tr: "Le loyer est payé par virement le premier du mois.",
        why: "Dans <i>Miete</i>, le <b>ie</b> est long [iː] ; dans <i>überwiesen</i>, le <b>ü</b> est arrondi, le <b>w</b> est [v] et le <b>s</b> entre deux voyelles est sonore [z]."
      }
    ]
  },
  "lesson:b1-u03-l3": {
    theme: "Réclamations",
    title: "Je me plains, pour que ...",
    objectives: [
      "dire le but avec um ... zu quand le sujet est le même",
      "dire le but avec damit, surtout quand les sujets sont différents",
      "formuler poliment une réclamation avec le Konjunktiv II",
      "ne pas confondre damit (but) et weil (cause)"
    ],
    theory: [
      {
        h: "um ... zu : le but avec le même sujet",
        p: "Pour dire <strong>dans quel but</strong> on fait quelque chose, quand le sujet est le même dans les deux parties, on utilise <strong>um ... zu</strong> avec l'infinitif à la fin : <em>Ich rufe an, um mich zu beschweren.</em> Avec un verbe séparable, <em>zu</em> s'intercale : <em>Ich gehe zum Bürgeramt, um mich anzumelden.</em> On met une virgule avant <em>um</em>."
      },
      {
        h: "damit : le but avec un verbe conjugué",
        p: "<strong>Damit</strong> exprime le but et introduit une proposition dont le verbe conjugué est à la fin, à l'indicatif. Il est possible avec des sujets différents (<em>Ich schicke ein Foto, damit er den Schaden sieht.</em>) comme avec le même sujet (<em>..., damit ich pünktlich bin</em>). Avec des sujets différents, <em>um ... zu</em> n'est pas possible ; avec le même sujet, <em>um ... zu</em> est la forme la plus naturelle."
      },
      {
        h: "Une réclamation polie",
        p: "Dans une réclamation, le ton compte : le Konjunktiv II adoucit une demande. <em>Könnten Sie das bitte reparieren? Ich würde gern mit Ihrem Chef sprechen. Wir hätten gern eine schnelle Lösung.</em> Une demande à l'impératif (<em>Reparieren Sie das!</em>) sonne beaucoup plus dur."
      },
      {
        contrast: "Le français dit le but avec <em>pour + infinitif</em> quand le sujet est le même (<em>j'appelle pour me plaindre</em>) et avec <em>pour que</em> + <strong>subjonctif</strong> quand les sujets diffèrent (<em>je t'envoie une photo pour que tu voies</em>) : c'est le même mot <em>pour</em> dans les deux cas. L'allemand a deux constructions distinctes, <em>um ... zu</em> et <em>damit</em>, et <em>damit</em> se construit avec l'<strong>indicatif</strong> : <em>damit er den Schaden sieht</em>, sans subjonctif. Le choix dépend donc de la construction et du sujet, et non d'un simple <em>pour</em>."
      },
      {
        trap: "<em>Weil</em> donne la cause, <em>damit</em> le but : <em>Ich rufe an, weil die Heizung kaputt ist</em> (motif) et <em>Ich rufe an, damit jemand sie repariert</em> (but). On ne peut pas relier avec <em>um</em> seul une proposition qui a un autre sujet : <em>Ich rufe an, um der Handwerker kommt</em> est incorrect. Un but exprimé par un nom peut utiliser <em>für</em> + accusatif (<em>Ich lerne für die Prüfung</em>) ou <em>zu</em> + datif (<em>zur Anmeldung</em>, <em>zur Reparatur</em>) : le choix dépend de la construction."
      },
      {
        tip: "Avant de choisir, demande-toi : qui fait les deux actions ? Si c'est la même personne, <em>um ... zu</em> est le plus naturel (<em>damit</em> reste possible) ; si ce sont des personnes différentes, il faut <em>damit</em>. Et si tu t'adresses à un bureau ou à une entreprise, commence par <em>Guten Tag</em> et dis <em>Sie</em>."
      }
    ],
    grammar: {
      title: "Le but : um ... zu et damit",
      note: "But : <b>um ... zu</b> + infinitif (même sujet, forme la plus naturelle) ou <b>damit</b> + verbe conjugué à la fin, à l'indicatif (même sujet ou sujets différents).",
      table: {
        head: ["construction", "quand", "exemple"],
        rows: [
          ["um ... zu + infinitif", "même sujet", "Ich rufe an, um mich zu beschweren."],
          ["damit + verbe à la fin", "même sujet ou sujets différents", "Ich schicke ein Foto, damit er den Schaden sieht."],
          ["weil + verbe à la fin", "cause, pas but", "Ich rufe an, weil die Heizung kaputt ist."]
        ]
      },
      examples: [
        { tr: "J'appelle pour me plaindre.", note: "um ... zu, même sujet : ich" },
        { tr: "Je vais au bureau pour déclarer mon domicile.", note: "verbe séparable : um mich anzumelden" },
        { tr: "J'envoie une photo pour qu'il voie le dommage.", note: "damit : but, deux sujets (ich et er)" },
        { tr: "Pourriez-vous le réparer, s'il vous plaît ?", note: "Konjunktiv II de können : demande polie" },
        { tr: "Je voudrais parler à votre chef.", note: "würde gern + infinitif" },
        { tr: "Nous voudrions une solution rapide.", note: "hätten gern : Konjunktiv II de haben" }
      ]
    },
    vocab: [
      "la réclamation",
      "le défaut",
      "le dommage",
      "la réparation",
      "l'artisan (l'ouvrier qui répare)",
      "la facture",
      "la garantie",
      "le remplacement",
      "se plaindre",
      "réparer",
      "remplacer",
      "urgent"
    ],
    exercises: [
      {
        q: "Complète : « Ich rufe an, ___ mich zu beschweren. »",
        opts: ["um", "damit", "weil"],
        why: "<b>Um</b> : même sujet (<i>ich</i>) et infinitif avec <i>zu</i>. <i>Damit</i> veut un verbe conjugué, <i>weil</i> donne la cause."
      },
      {
        q: "Complète pour exprimer le but : « Ich schicke ein Foto, ___ der Vermieter den Schaden sieht. » (J'envoie une photo pour que le propriétaire voie le dommage.)",
        opts: ["damit", "um", "weil"],
        why: "<b>Damit</b> : les sujets sont différents (<i>ich</i> et <i>der Vermieter</i>) et il y a un verbe conjugué. <i>Um</i> ne s'emploie pas avec un nouveau sujet. <i>Weil</i> donnerait une cause (« parce que le propriétaire voit le dommage »), et non le but demandé."
      },
      {
        q: "Complète : « Ich schreibe eine E-Mail, ___ der Vermieter die Heizung repariert. »",
        hint: "but, sujets différents",
        why: "<b>Damit</b> : but avec un verbe conjugué à la fin (sujets différents ici)."
      },
      {
        q: "Complète : « Ich rufe an, um mich ___ beschweren. »",
        hint: "um ... ?",
        why: "<b>Zu</b> : <i>um ... zu + infinitif</i>, avec <i>zu</i> juste avant le verbe."
      },
      {
        q: "Complète la phrase.",
        tr: "Je vais au bureau pour déclarer mon domicile (sich anmelden).",
        why: "<i>Ich gehe zum Bürgeramt, um mich anzumelden.</i> Avec le verbe séparable <i>anmelden</i>, <i>zu</i> s'intercale : <i>anzumelden</i>."
      },
      {
        q: "Associe chaque expression à sa fonction.",
        pairs: [
          "but, infinitif (même sujet)",
          "but, verbe conjugué à la fin",
          "indique la cause",
          "indique le but avec un nom"
        ]
      },
      {
        q: "Remets les mots dans l'ordre (commence par Ich).",
        tr: "J'envoie une photo pour qu'il voie le dommage.",
        why: "<i>Ich schicke ein Foto, damit er den Schaden sieht.</i> Après <i>damit</i>, le verbe conjugué <i>sieht</i> va à la fin."
      },
      {
        q: "Traduis : « J'appelle pour me plaindre. » (utilise anrufen et um ... zu)",
        why: "<i>Ich rufe an, um mich zu beschweren</i> : <i>anrufen</i> est séparable, et après <i>um</i> le réfléchi <i>mich</i> reste devant l'infinitif."
      },
      {
        tr: "Bonjour, j'appelle pour me plaindre. Le chauffage est en panne. J'envoie une photo pour que vous voyiez le dommage. Pourriez-vous envoyer quelqu'un au plus vite, s'il vous plaît ?",
        why: "Dans <i>beschweren</i>, le <b>sch</b> est [ʃ] et le <b>w</b> est [v] ; dans <i>Heizung</i>, le <b>z</b> est [ts] ; dans <i>Könnten</i>, le <b>ö</b> est arrondi ; dans <i>schicke</i>, le <b>sch</b> est [ʃ] et le <b>ck</b> signale une voyelle brève."
      },
      {
        tr: "Je voudrais parler à votre chef pour me plaindre.",
        why: "Dans <i>würde</i>, le <b>ü</b> est arrondi ; dans <i>Chef</i>, le <b>ch</b> est [ʃ] (mot d'origine française) ; dans <i>sprechen</i>, le <b>sp</b> en début de syllabe se lit [ʃp] et le <b>ch</b> est [ç]."
      }
    ]
  },
  "lesson:b1-u03-l4": {
    theme: "Travail",
    title: "Le contrat de travail",
    objectives: [
      "lire les principales clauses d'un contrat de travail",
      "utiliser ensemble le passif et le génitif dans des phrases formelles",
      "reconnaître période d'essai, préavis et salaire",
      "comprendre la différence entre contrat à durée déterminée et indéterminée"
    ],
    theory: [
      {
        h: "Le langage d'un contrat",
        p: "Un contrat de travail emploie beaucoup le <strong>passif</strong> et le <strong>génitif</strong>, parce qu'il décrit des règles sans dire qui les applique : <em>Das Gehalt wird am Ende des Monats bezahlt. Die Probezeit des Arbeitnehmers dauert sechs Monate. Die Kündigungsfrist des Vertrags beträgt vier Wochen.</em> Qui reconnaît <em>wird ... bezahlt</em> et <em>des ... s</em> comprend déjà la structure de la phrase."
      },
      {
        h: "Passif et génitif dans la même phrase",
        p: "Les deux structures se combinent : <em>Der Vertrag wurde von beiden Seiten unterschrieben.</em> (passif avec agent) et <em>Die Arbeitszeit des Mitarbeiters wird im Vertrag genannt.</em> (génitif et passif). Dans le passif, le participe II est à la fin, et le génitif suit le nom auquel il se rapporte."
      },
      {
        h: "Des mots qui reviennent",
        p: "<strong>Arbeitgeber</strong> est celui qui embauche, <strong>Arbeitnehmer</strong> celui qui est embauché. La <strong>Probezeit</strong> est la période initiale pendant laquelle le contrat peut être rompu plus facilement ; la <strong>Kündigungsfrist</strong> est le préavis. Un contrat est <strong>befristet</strong> s'il a une échéance, <strong>unbefristet</strong> s'il est à durée indéterminée."
      },
      {
        contrast: "En français, <em>période d'essai</em> et <em>délai de préavis</em> sont des groupes construits avec <em>de</em>, alors qu'en allemand ce sont des mots composés : <em>Probezeit, Kündigungsfrist</em>. L'ordre est inversé : le français place le déterminant à la fin (<em>contrat de travail</em>), l'allemand au début (<em>Arbeitsvertrag</em>, littéralement « travail-contrat »). Le genre est celui du dernier élément : <em>die Zeit</em> donne <em>die Probezeit</em>, <em>die Frist</em> donne <em>die Kündigungsfrist</em>. Dans les composés, on trouve souvent une petite liaison, par exemple le <em>-s-</em> de <em>Arbeitsvertrag</em>."
      },
      {
        trap: "Ne confonds pas le Präteritum du passif et le Präteritum actif : <em>Er wurde eingestellt</em> (il a été embauché) et <em>Er stellte ein</em> (il a embauché, à l'actif) ont des sujets aux rôles opposés. Vérifie donc qui fait l'action. Et avec <em>des Arbeitnehmers</em>, pense au <em>-s</em> du génitif masculin."
      },
      {
        tip: "Quand tu lis un contrat, souligne les verbes avec <em>werden</em> et les groupes <em>des/der + nom</em>. Ce sont les deux structures qui portent les règles ; le reste, c'est le plus souvent du vocabulaire."
      }
    ],
    grammar: {
      title: "Passif et génitif dans les contrats",
      note: "<b>werden</b> + participe II pour les règles (<b>wird bezahlt</b>), <b>des/der + nom</b> pour le possesseur (<b>des Vertrags</b>).",
      table: {
        head: ["structure", "exemple", "sens"],
        rows: [
          ["passif présent", "Das Gehalt wird bezahlt.", "le salaire est payé"],
          ["passif Präteritum", "Der Arbeitnehmer wurde eingestellt.", "le salarié a été embauché"],
          ["génitif masculin", "die Probezeit des Arbeitnehmers", "la période d'essai du salarié"],
          ["génitif féminin", "die Höhe der Miete", "le montant du loyer"]
        ]
      },
      examples: [
        { tr: "Le contrat a été signé par les deux parties.", note: "passif avec agent : von beiden Seiten" },
        { tr: "Le salaire est versé à la fin du mois.", note: "passif présent, des Monats" },
        { tr: "La période d'essai du salarié dure six mois.", note: "génitif masculin : des Arbeitnehmers" },
        { tr: "L'horaire de travail est indiqué dans le contrat.", note: "passif : wird ... genannt" },
        { tr: "Le salarié a été embauché en mai.", note: "passif Präteritum : wurde eingestellt" },
        { tr: "Le préavis du contrat est de quatre semaines.", note: "génitif masculin : des Vertrags" }
      ]
    },
    vocab: [
      "le contrat de travail",
      "le salaire",
      "la période d'essai",
      "l'employeur",
      "le salarié",
      "le préavis",
      "l'horaire de travail",
      "le poste",
      "démissionner / résilier le contrat (jemandem kündigen = licencier quelqu'un)",
      "embaucher",
      "payer",
      "à durée déterminée"
    ],
    exercises: [
      {
        q: "Quelle phrase est correcte ?",
        opts: [
          "Das Gehalt wird am Ende des Monats bezahlt.",
          "Das Gehalt wird am Ende des Monats bezahlen.",
          "Das Gehalt wird am Ende der Monat bezahlt."
        ],
        why: "<b>Wird ... bezahlt</b> avec le participe II à la fin, et <b>des Monats</b> au génitif masculin. L'infinitif <i>bezahlen</i> est faux au passif, et <i>der Monat</i> n'est pas un génitif."
      },
      {
        q: "Hier, le contrat a été signé par les deux parties. Quelle phrase ?",
        opts: [
          "Der Vertrag wurde gestern von beiden Seiten unterschrieben.",
          "Der Vertrag wird gestern von beiden Seiten unterschrieben.",
          "Der Vertrag hat gestern von beiden Seiten unterschrieben."
        ],
        why: "<b>Wurde ... unterschrieben</b> : passif au Präteritum, avec <i>von + datif</i> pour l'agent. <i>Hat</i> ferait du contrat le sujet qui signe."
      },
      {
        q: "Complète : « Die Probezeit ___ dauert sechs Monate. »",
        opts: ["des Arbeitnehmers", "dem Arbeitnehmer", "den Arbeitnehmers"],
        why: "<b>Des Arbeitnehmers</b> : génitif masculin singulier, avec <i>des</i> et <i>-s</i> sur le nom."
      },
      {
        q: "Complète : « Die Kündigungsfrist ___ Vertrags beträgt vier Wochen. »",
        hint: "génitif masculin",
        why: "<b>Des</b> : <i>Vertrag</i> est masculin et le génitif a <i>des</i> et <i>-s</i> : <i>des Vertrags</i>."
      },
      {
        q: "Complète la phrase.",
        tr: "Le salarié a été embauché en mai (passif au Präteritum).",
        why: "<i>Der Arbeitnehmer wurde im Mai eingestellt.</i> Passif au Präteritum : <i>wurde</i> + participe II <i>eingestellt</i>, qui reste soudé."
      },
      {
        q: "Associe chaque mot à son sens.",
        pairs: ["la période d'essai", "le préavis", "l'employeur", "le salaire"]
      },
      {
        q: "Remets les mots dans l'ordre.",
        tr: "La période d'essai du salarié dure six mois.",
        why: "<i>Die Probezeit des Arbeitnehmers dauert sechs Monate.</i> Le génitif <i>des Arbeitnehmers</i> suit le nom <i>Probezeit</i>."
      },
      {
        q: "Traduis : « Le salaire est versé à la fin du mois. »",
        why: "<i>Das Gehalt wird am Ende des Monats bezahlt.</i> <i>Am Monatsende</i> et <i>ausgezahlt</i> conviennent aussi."
      },
      {
        tr: "Le contrat de travail a été signé hier par les deux parties. La période d'essai dure six mois et le salaire est versé à la fin du mois. Le préavis du contrat est de quatre semaines.",
        why: "Dans <i>Arbeitsvertrag</i>, le <b>ei</b> est [aɪ] et le <b>v</b> est [f] ; dans <i>unterschrieben</i>, le <b>sch</b> est [ʃ] et le <b>ie</b> est long [iː] ; dans <i>Probezeit</i>, le <b>z</b> est [ts]."
      },
      {
        tr: "Le salaire du salarié est versé à la fin du mois.",
        why: "Dans <i>Arbeitnehmers</i>, le <b>ei</b> est [aɪ] et le <b>eh</b> allonge la voyelle [eː] ; dans <i>Monatsende</i>, le <b>o</b> est long [oː] ; dans <i>bezahlt</i>, le <b>ah</b> allonge la voyelle [aː]."
      }
    ]
  },
  "lesson:b1-u03-test": {
    theme: "Vérification",
    title: "Test : Administrations et contrats",
    objectives: [
      "vérifier le passif, le génitif avec wegen, während et innerhalb, um ... zu et damit"
    ],
    theory: [
      {
        p: "Dix questions sur toute l'unité. On réussit avec 70 %. Ne relis pas les leçons pendant que tu réponds : si tu ne te souviens pas de quelque chose, mieux vaut retourner réviser."
      }
    ],
    exercises: [
      {
        q: "Complète : « Das Formular ___ am Schalter abgegeben. »",
        hint: "werden, présent",
        why: "<b>Wird</b> : passif de processus au présent, sujet au singulier."
      },
      {
        q: "Complète : « Der Mietvertrag ___ gestern unterschrieben. »",
        hint: "werden, Präteritum",
        why: "<b>Wurde</b> : l'indice demande le Präteritum de <i>werden</i>, donc <i>wurde</i>. <i>Gestern</i> seul ne suffit pas : le passif au Perfekt (<i>ist ... unterschrieben worden</i>) est une autre forme, qui n'est pas demandée ici."
      },
      {
        q: "Complète : « Die Höhe ___ Miete steht im Vertrag. »",
        hint: "génitif féminin",
        why: "<b>Der</b> : génitif féminin singulier."
      },
      {
        q: "Complète : « Ich schicke ein Foto, ___ er den Schaden sieht. »",
        hint: "but, sujets différents",
        why: "<b>Damit</b> : <i>ich</i> et <i>er</i> sont des sujets différents, et le verbe conjugué va à la fin."
      },
      {
        q: "Hier, le compte a été ouvert. Quelle phrase ?",
        opts: [
          "Das Konto wurde gestern eröffnet.",
          "Das Konto wird gestern eröffnet.",
          "Das Konto haben gestern eröffnet."
        ],
        why: "<b>Wurde ... eröffnet</b> : passif au Präteritum. <i>Wird</i> est un présent, et <i>haben</i> ne s'accorde pas avec <i>Konto</i>."
      },
      {
        q: "Quelle phrase est correcte ?",
        opts: [
          "Während des Urlaubs bin ich nicht im Büro.",
          "Während der Urlaub bin ich nicht im Büro.",
          "Während des Urlaubs ich bin nicht im Büro."
        ],
        why: "<b>Während des Urlaubs</b> : préposition avec le génitif, et le verbe <i>bin</i> juste après, en deuxième position."
      },
      {
        q: "Complète : « Er schickt eine E-Mail, ___ der Chef Bescheid weiß. »",
        opts: ["damit", "um", "ohne"],
        why: "<b>Damit</b> : les sujets sont différents (<i>er</i> et <i>der Chef</i>) et le verbe conjugué va à la fin."
      },
      {
        q: "Associe chaque expression à son sens.",
        pairs: [
          "Le formulaire est contrôlé.",
          "à cause de la météo",
          "but, infinitif (même sujet)",
          "but, verbe conjugué à la fin"
        ]
      },
      {
        tr: "Le formulaire est remis au guichet. À cause du déménagement, il me faut un compte. J'appelle pour que quelqu'un répare le chauffage.",
        why: "Dans <i>Schalter</i>, le <b>sch</b> est [ʃ] ; dans <i>Umzugs</i>, le <b>z</b> est [ts] ; dans <i>Heizung</i>, le <b>ei</b> est [aɪ] et le <b>z</b> est [ts] ; dans <i>repariert</i>, le <b>ie</b> est long [iː]."
      },
      {
        tr: "Le contrat de location a été signé et le dépôt de garantie est versé par virement.",
        why: "Dans <i>Mietvertrag</i>, le <b>ie</b> est long [iː] et le <b>v</b> est [f] ; dans <i>unterschrieben</i>, le <b>sch</b> est [ʃ] ; dans <i>überwiesen</i>, le <b>ü</b> est arrondi."
      }
    ]
  },
  "unit:b1-u04": {
    title: "Opinions et médias",
    grammarNote: "dass dans le discours rapporté · Präteritum et Plusquamperfekt dans les textes écrits · nachdem et bevor · zwar ... aber, sowohl ... als auch · déclinaison de l'adjectif"
  },
  "lesson:b1-u04-l1": {
    theme: "Rapporter",
    title: "Elle a dit que ...",
    objectives: [
      "rapporter ce que quelqu'un a dit avec une subordonnée en dass",
      "adapter les pronoms au point de vue de celui qui rapporte",
      "rapporter une question avec ob ou avec un mot interrogatif",
      "employer les verbes de parole au Perfekt : gesagt, erzählt, berichtet, behauptet"
    ],
    theory: [
      {
        h: "Rapporter avec dass",
        p: "Pour rapporter ce que quelqu'un a dit, on emploie un verbe de parole (<em>sagen, erzählen, berichten, behaupten, meinen</em>) et une subordonnée en <strong>dass</strong>. Le verbe conjugué va <strong>à la fin</strong>, et il y a toujours une virgule avant <em>dass</em> : <em>Anna hat gesagt, dass sie keine Zeit hat.</em> Quand on raconte quelque chose à l'oral, le verbe de parole est généralement au Perfekt (<em>hat gesagt, hat erzählt</em>)."
      },
      {
        h: "Les pronoms changent avec le point de vue",
        p: "Celui qui rapporte parle d'un autre point de vue, donc les personnes s'adaptent. Anna dit <em>« Ich habe keine Zeit »</em>, et tu rapportes <em>Anna hat gesagt, dass <strong>sie</strong> keine Zeit hat.</em> Si quelqu'un te dit <em>« Ich helfe dir »</em>, tu rapportes <em>Er hat gesagt, dass er <strong>mir</strong> hilft.</em> Comme en français, le sujet est toujours exprimé."
      },
      {
        h: "Questions et demandes rapportées",
        p: "Une question fermée (oui ou non) devient une subordonnée en <strong>ob</strong>, une question avec mot interrogatif garde ce mot, et le verbe va à la fin dans les deux cas : <em>Sie hat gefragt, ob ich mitkomme. Er hat gefragt, wann der Zug kommt.</em> Une demande se rapporte généralement avec <em>sollen</em> : <em>Sie hat gesagt, dass ich bald kommen soll.</em>"
      },
      {
        h: "Sans dass",
        p: "Après <em>sagen, meinen, glauben</em>, on peut aussi omettre <em>dass</em> : le verbe reste alors en <strong>deuxième position</strong>, comme dans une phrase ordinaire. <em>Sie hat gesagt, sie hat keine Zeit.</em> est correct, mais plus familier ; avec <em>dass</em>, le verbe conjugué va à la fin : <em>..., dass sie keine Zeit hat.</em>"
      },
      {
        contrast: "En français, après un verbe introducteur au passé, la concordance des temps fait reculer le temps : <em>il a dit qu'il venait, qu'il viendrait, qu'il était venu</em>. L'allemand courant ne fait pas ce recul quand le fait est encore valable : il garde le temps du discours d'origine, <em>Er hat gesagt, dass er kommt.</em> Ne traduis donc pas automatiquement <em>venait</em> par un Präteritum : <em>dass er kam</em> parlerait d'une arrivée passée. Dans cette unité, on emploie l'indicatif : <em>Er hat gesagt, dass er kommt.</em> On rencontre aussi <em>würde</em> + infinitif dans le discours rapporté (<em>dass er kommen würde</em>) ; son sens dépend du contexte. Autre différence : le français ne peut pas supprimer <em>que</em>, l'allemand peut supprimer <em>dass</em> après <em>sagen</em> ou <em>meinen</em>, et le verbe revient alors en deuxième position."
      },
      {
        trap: "<em>Que</em> ne change rien à l'ordre des mots français, <em>dass</em> envoie le verbe conjugué à la fin : <em>dass sie keine Zeit hat</em>, et non <s>dass sie hat keine Zeit</s>. Le verbe en deuxième position appartient uniquement à la version sans <em>dass</em>. Attention aussi à l'orthographe : <em>dass</em> avec deux <em>s</em> est la conjonction ; <em>das</em> avec un seul est un article ou un pronom (<em>das Buch, das ich lese</em>). Et pour <em>il m'a dit de venir</em>, la construction travaillée dans cette leçon est <em>Er hat mir gesagt, dass ich kommen soll</em> (l'infinitif avec <em>zu</em> est possible aussi, mais moins courant : <em>Er hat mir gesagt, zu kommen</em>)."
      },
      {
        tip: "Méthode en trois étapes : 1) choisis le verbe de parole au Perfekt ; 2) ajoute la virgule et <em>dass</em> (ou <em>ob</em> pour les questions fermées) ; 3) récris la phrase avec les bonnes personnes et le verbe à la fin."
      }
    ],
    grammar: {
      title: "Du discours direct au discours rapporté",
      note: "verbe de parole au Perfekt + <b>dass</b> (affirmation) ou <b>ob</b> (question fermée) + verbe conjugué <b>à la fin</b> ; les pronoms s'adaptent à celui qui rapporte.",
      table: {
        head: ["discours direct", "discours rapporté"],
        rows: [
          ["Anna: «Ich habe keine Zeit.»", "Anna hat gesagt, dass sie keine Zeit hat."],
          ["Tom: «Ich komme morgen.»", "Tom hat erzählt, dass er morgen kommt."],
          ["Anna und Tom: «Wir ziehen um.»", "Anna und Tom haben erzählt, dass sie umziehen."],
          ["Er: «Kommst du mit?»", "Er hat gefragt, ob ich mitkomme."],
          ["Sie: «Wann kommt der Zug?»", "Sie hat gefragt, wann der Zug kommt."]
        ]
      },
      examples: [
        { tr: "Anna a dit qu'elle n'a pas le temps.", note: "ich devient sie ; verbe à la fin" },
        { tr: "Tom raconte qu'il vient demain.", note: "présent, car le fait est encore valable" },
        { tr: "La brève dit que les prix augmentent.", note: "un texte aussi peut « dire »" },
        { tr: "Elle a demandé si je viens avec elle.", note: "question fermée : ob" },
        { tr: "Il a affirmé qu'il n'avait rien vu.", note: "behaupten + dass ; Perfekt dans la subordonnée" },
        { tr: "Elle a dit que je dois venir bientôt.", note: "demande rapportée avec sollen" }
      ]
    },
    vocab: [
      "la nouvelle, l'information",
      "la brève, le communiqué",
      "l'affirmation",
      "la déclaration, le témoignage",
      "le rapport, le compte rendu",
      "la rumeur",
      "la réponse",
      "la question",
      "raconter",
      "affirmer, prétendre",
      "rapporter, relater",
      "répondre"
    ],
    exercises: [
      {
        q: "Anna dit : « Ich habe keine Zeit. » Comment le rapportes-tu ?",
        opts: [
          "Anna sagt, dass sie keine Zeit hat.",
          "Anna sagt, dass ich keine Zeit habe.",
          "Anna sagt, dass sie hat keine Zeit."
        ],
        why: "<b>Sie</b> à la place de <i>ich</i>, et le verbe <i>hat</i> à la fin de la subordonnée. <i>Ich</i> désignerait la personne qui parle, pas Anna."
      },
      {
        q: "Complète : « Tom hat gesagt, ___ er morgen kommt. »",
        hint: "conjonction, affirmation",
        why: "<b>Dass</b> : introduit une affirmation rapportée et envoie le verbe à la fin."
      },
      {
        q: "Complète : « Sie fragt, ___ du mitkommst. »",
        hint: "question fermée rapportée",
        why: "<b>Ob</b> : la question d'origine était « Kommst du mit? », on y répond par oui ou non."
      },
      {
        q: "Paul dit : « Ich bin müde. » Complète : « Paul sagt, dass ___ müde ist. »",
        hint: "pronom, 3e personne du masculin",
        why: "<b>Er</b> : Paul est un homme, et celui qui rapporte ne dit pas <i>ich</i>."
      },
      {
        q: "Complète : « Sie hat mir alles ___. »",
        hint: "erzählen, participe II",
        why: "<b>Erzählt</b> : <i>hat erzählt</i>, le Perfekt de <i>erzählen</i>. Le participe des verbes faibles se forme avec <i>ge-</i> + radical + <i>-t</i>, mais <i>erzählen</i> commence par <i>er-</i> et ne prend pas <i>ge-</i>."
      },
      {
        q: "Complète la phrase.",
        tr: "La brève dit que les prix augmentent.",
        why: "<i>Die Meldung sagt, dass die Preise steigen.</i> Après <i>dass</i>, le verbe <i>steigen</i> va à la fin."
      },
      {
        q: "Associe chaque phrase à son sens.",
        pairs: [
          "Il affirme qu'il est innocent.",
          "Elle a demandé si je viens.",
          "La brève dit qu'il neige.",
          "Tom raconte qu'il déménage."
        ]
      },
      {
        q: "Traduis en gardant le présent dans la subordonnée (elle n'a toujours pas le temps) : « Anna a dit qu'elle n'a pas le temps. »",
        why: "<i>Anna hat gesagt, dass sie keine Zeit hat.</i> Le présent <i>hat</i> indique que le manque de temps est toujours d'actualité ; l'allemand ne fait pas reculer le temps après <i>hat gesagt</i> comme la concordance française (<i>qu'elle n'avait pas</i>). La version sans <i>dass</i>, avec le verbe en deuxième position, est aussi correcte : <i>Anna hat gesagt, sie hat keine Zeit.</i>"
      },
      {
        tr: "Tu as déjà entendu la nouvelle ? Anna a raconté qu'elle déménage. Elle a dit que l'appartement est très grand, et elle a demandé si nous l'aidons.",
        why: "Dans <i>Nachricht</i>, le premier <b>ch</b> est [x] (après <i>a</i>) et le second [ç] (après <i>i</i>) ; dans <i>umzieht</i>, le <b>z</b> est [ts] et le <b>ie</b> est long [iː] ; dans <i>sehr</i>, le <b>e</b> est long."
      },
      {
        tr: "Mon collègue a raconté qu'il vient demain matin.",
        why: "Dans <i>früh</i>, le <b>ü</b> est arrondi et long ; dans <i>kommt</i>, le <b>o</b> est bref ; dans <i>dass</i>, le <b>a</b> est bref et le <b>ss</b> est [s]."
      }
    ]
  },
  "lesson:b1-u04-l2": {
    theme: "Presse",
    title: "Lire un article",
    objectives: [
      "reconnaître et employer le Präteritum des verbes faibles, forts et mixtes dans les textes écrits",
      "former le Plusquamperfekt avec hatte ou war et le participe II",
      "employer nachdem avec le Plusquamperfekt, et bevor",
      "comprendre comment un article de journal ordonne les faits dans le temps"
    ],
    theory: [
      {
        h: "Le Präteritum à l'écrit",
        p: "Dans les textes écrits qui racontent des faits passés (articles, comptes rendus, romans), le temps du récit est normalement le <strong>Präteritum</strong> ; dans la conversation, on emploie plus souvent le Perfekt. Les verbes <strong>faibles</strong> prennent <em>-te</em> (<em>meldete, machte</em>), les verbes <strong>forts</strong> changent la voyelle du radical (<em>schrieb, ging, las</em>) et n'ont pas de terminaison à la 1re et à la 3e personne du singulier. Les verbes <strong>mixtes</strong> (<em>dachte, brachte</em>) changent de radical mais prennent les terminaisons faibles. À l'oral, <em>sein, haben</em> et les modaux sont très fréquents au Präteritum (<em>war, hatte, konnte</em>)."
      },
      {
        h: "Le Plusquamperfekt : avant un autre fait passé",
        p: "Il se forme avec l'auxiliaire au Präteritum, <strong>hatte</strong> ou <strong>war</strong>, et le participe II à la fin : <em>Er hatte lange recherchiert. Der Zug war schon abgefahren.</em> L'auxiliaire est le même qu'au Perfekt (<em>haben</em> ou <em>sein</em>). Il sert à dire qu'un fait s'est produit <strong>avant</strong> un autre : <em>Die Nachricht stand in der Zeitung, aber niemand hatte sie gelesen.</em>"
      },
      {
        h: "nachdem et bevor",
        p: "<strong>nachdem</strong> (après que) introduit une subordonnée avec le verbe à la fin et, si la principale est au Präteritum, le <strong>Plusquamperfekt</strong> : <em>Nachdem der Minister gesprochen hatte, gingen die Gäste nach Hause.</em> <strong>bevor</strong> (avant que) a généralement le même temps que la principale : <em>Bevor die Zeitung den Artikel veröffentlichte, prüfte die Redaktion die Quelle.</em> Quand la subordonnée est en tête, la principale commence par le verbe conjugué."
      },
      {
        contrast: "En français, le récit écrit littéraire est au passé simple, mais la presse raconte au passé composé. En allemand, le <strong>Präteritum</strong> n'a rien de littéraire : c'est le temps normal de l'article de journal. Le Plusquamperfekt correspond bien au plus-que-parfait (<em>hatte geschrieben</em>, <em>avait écrit</em>). Avec le même sujet, le français préfère l'infinitif : <em>après avoir parlé, avant de publier</em>. L'allemand demande une <strong>subordonnée avec son sujet</strong> et un verbe conjugué : <em>Nachdem der Minister gesprochen hatte, ...</em> Enfin, <em>avant que</em> veut le subjonctif (<em>avant que tu partes</em>) et <em>après que</em> l'indicatif ; l'allemand emploie l'indicatif dans les deux cas : <em>bevor du gehst</em>."
      },
      {
        trap: "En français, <em>après</em> sert à la fois de préposition (<em>après le repas</em>) et, avec <em>que</em>, de conjonction. En allemand, ce sont deux mots : <em>nach</em> est une préposition et veut un nom au datif (<em>nach dem Essen</em>), <em>nachdem</em> veut une proposition avec le verbe à la fin. Dans la subordonnée en <em>nachdem</em>, les deux verbes sont ensemble à la fin, l'auxiliaire en dernier : <em>..., nachdem er gesprochen hatte</em>."
      },
      {
        tip: "Quand tu lis un article, repère d'abord les verbes au Präteritum : ils portent l'histoire. Les verbes au Plusquamperfekt (<em>hatte ... gesagt, war ... gekommen</em>) signalent ce qui s'est passé <em>avant</em> l'histoire. Avec les trois formes de base (infinitif, Präteritum, participe II), tu lis la plupart des articles."
      }
    ],
    grammar: {
      title: "Präteritum et Plusquamperfekt",
      note: "<b>Präteritum</b> pour l'histoire (<b>schrieb, ging, meldete</b>), <b>Plusquamperfekt</b> pour ce qui s'est passé avant (<b>hatte geschrieben, war gegangen</b>) ; <b>nachdem</b> + Plusquamperfekt ; <b>bevor</b> : souvent le même temps que la principale ; le Plusquamperfekt est aussi possible dans la principale pour souligner l'antériorité.",
      table: {
        head: ["infinitif", "Präteritum (er/sie)", "participe II"],
        rows: [
          ["schreiben", "schrieb", "geschrieben"],
          ["lesen", "las", "gelesen"],
          ["gehen", "ging", "gegangen"],
          ["sprechen", "sprach", "gesprochen"],
          ["erscheinen", "erschien", "erschienen"],
          ["melden", "meldete", "gemeldet"],
          ["denken", "dachte", "gedacht"],
          ["bringen", "brachte", "gebracht"]
        ]
      },
      examples: [
        { tr: "Le journaliste écrivit l'article le soir.", note: "Präteritum fort : schrieb" },
        { tr: "Le journal paraissait chaque matin.", note: "erscheinen : erschien" },
        { tr: "Après que le ministre eut parlé, les invités rentrèrent chez eux.", note: "nachdem + Plusquamperfekt" },
        { tr: "Avant que le journal ne publie l'article, la rédaction vérifia la source.", note: "bevor + Präteritum" },
        { tr: "Il avait longuement enquêté avant d'écrire.", note: "Plusquamperfekt : hatte recherchiert" },
        { tr: "La nouvelle était dans le journal, mais personne ne l'avait lue.", note: "hatte ... gelesen : avant la scène" }
      ]
    },
    vocab: [
      "l'article",
      "le journal",
      "le gros titre, la manchette",
      "le titre (d'un texte)",
      "le journaliste",
      "la source",
      "le lecteur",
      "la rédaction",
      "publier",
      "paraître, être publié",
      "enquêter, se documenter",
      "annoncer, signaler"
    ],
    exercises: [
      {
        q: "Choisis la bonne forme : « Der Journalist ___ den Artikel am Abend. »",
        opts: ["schrieb", "schreibte", "geschrieben"],
        why: "<b>Schrieb</b> : <i>schreiben</i> est un verbe fort, son Präteritum change de voyelle. <i>Schreibte</i> n'existe pas ; <i>geschrieben</i> est le participe et demande un auxiliaire."
      },
      {
        q: "Choisis l'auxiliaire : « Nachdem die Redaktion die Quelle geprüft ___, veröffentlichte sie den Artikel. »",
        opts: ["hatte", "wurde", "war"],
        why: "<b>Hatte</b> : <i>prüfen</i> se construit avec <i>haben</i>, et avec <i>nachdem</i> le temps est le Plusquamperfekt parce que la principale est au Präteritum."
      },
      {
        q: "Quelle phrase a le bon ordre des mots ?",
        opts: [
          "Nachdem er den Artikel gelesen hatte, rief er die Redaktion an.",
          "Nachdem er hatte den Artikel gelesen, rief er die Redaktion an.",
          "Nachdem er den Artikel gelesen hatte, er rief die Redaktion an."
        ],
        why: "Dans la subordonnée, le participe et l'auxiliaire vont à la fin (<i>gelesen hatte</i>) ; ensuite, la principale commence par le verbe conjugué (<i>rief er</i>)."
      },
      {
        q: "Complète : « Die Zeitung ___ jeden Morgen. »",
        hint: "erscheinen, Präteritum, 3e personne",
        why: "<b>Erschien</b> : verbe fort, le Präteritum change la voyelle du radical."
      },
      {
        q: "Complète : « Bevor er den Artikel ___, recherchierte er lange. »",
        hint: "schreiben, Präteritum, 3e personne",
        why: "<b>Schrieb</b> : ici, <i>bevor</i> a le même temps que la principale (c'est souvent le cas ; le Plusquamperfekt dans la principale soulignerait l'antériorité), et à la 3e personne du singulier un verbe fort n'a pas de terminaison au Präteritum."
      },
      {
        q: "Complète la phrase.",
        tr: "Après que le ministre eut parlé, les invités rentrèrent chez eux.",
        why: "<i>Nachdem der Minister gesprochen hatte, gingen die Gäste nach Hause.</i> Le participe <i>gesprochen</i> et l'auxiliaire <i>hatte</i> à la fin."
      },
      {
        q: "Associe chaque phrase à son sens.",
        pairs: [
          "Elle lisait le journal.",
          "Il écrivit un rapport.",
          "L'article parut hier.",
          "La rédaction vérifia la source."
        ]
      },
      {
        q: "Traduis : « Le journaliste a écrit l'article hier soir. »",
        why: "<i>Der Journalist schrieb den Artikel gestern Abend.</i> Le Perfekt est aussi correct (<i>hat ... geschrieben</i>), surtout à l'oral, et la phrase peut commencer par <i>Gestern Abend</i>."
      },
      {
        tr: "Le journal a publié l'article lundi. Après que la rédaction avait vérifié la source, le journaliste a écrit le titre. Beaucoup de lecteurs ont lu l'article dès le matin.",
        why: "Dans <i>veröffentlichte</i>, le <b>v</b> est [f] et le <b>ö</b> est arrondi ; dans <i>Quelle</i>, le <b>qu</b> est [kv] ; dans <i>Überschrift</i>, le <b>sch</b> est [ʃ] ; dans <i>Leser</i>, le <b>s</b> entre deux voyelles est sonore [z]."
      },
      {
        tr: "Après que le journaliste avait écrit le rapport, il est rentré chez lui.",
        why: "Dans <i>Journalist</i>, le <b>J</b> initial est [ʒ], comme dans le français <i>jour</i> ; dans <i>Bericht</i>, le <b>ch</b> est [ç] ; dans <i>geschrieben</i>, le <b>sch</b> est [ʃ] ; dans <i>Hause</i>, le <b>au</b> est [aʊ]."
      }
    ]
  },
  "lesson:b1-u04-l3": {
    theme: "Radio et podcasts",
    title: "zwar ... aber, sowohl ... als auch",
    objectives: [
      "concéder un point puis l'opposer avec zwar ... aber",
      "relier deux éléments avec sowohl ... als auch",
      "garder l'ordre des mots après aber",
      "parler de radio, d'émissions et de podcasts"
    ],
    theory: [
      {
        h: "zwar ... aber : certes, mais",
        p: "<strong>zwar</strong> concède un fait et <strong>aber</strong> introduit l'opposition : <em>Die Sendung ist zwar lang, aber sie ist interessant.</em> <em>Zwar</em> se place généralement après le verbe, mais il peut aussi ouvrir la phrase : <em>Zwar ist die Sendung lang, aber sie ist interessant.</em> <em>Aber</em> est en position zéro : le verbe de la seconde proposition reste à sa place normale, en deuxième position après le sujet."
      },
      {
        h: "sowohl ... als auch : aussi bien ... que",
        p: "<strong>sowohl ... als auch</strong> relie deux éléments de même nature : <em>Der Sender bringt sowohl Nachrichten als auch Musik.</em> Ce peuvent être deux sujets, deux compléments d'objet, deux compléments circonstanciels. Avec deux sujets, le verbe est au pluriel : <em>Sowohl Anna als auch Tom hören den Podcast.</em> En règle générale, il n'y a pas de virgule entre les deux éléments."
      },
      {
        h: "Une autre paire : weder ... noch",
        p: "Pour nier deux éléments, on emploie <strong>weder ... noch</strong> (ni ... ni) : <em>Ich habe weder Zeit noch Lust.</em> La paire porte déjà la négation, on n'ajoute donc ni <em>nicht</em> ni <em>kein</em>."
      },
      {
        contrast: "<em>zwar ... aber</em> correspond bien au français <em>certes ... mais</em>, mais l'allemand l'emploie beaucoup plus souvent, à l'oral aussi, là où le français dit simplement <em>c'est vrai que ..., mais</em>. <em>sowohl ... als auch</em> se rend par <em>aussi bien ... que</em> ou <em>à la fois ... et</em>. Pour <em>weder ... noch</em>, attention : le français <em>ni ... ni</em> exige <em>ne</em> devant le verbe (<em>je n'ai ni le temps ni l'envie</em>), l'allemand n'ajoute aucune négation : <em>Ich habe weder Zeit noch Lust</em>, et non <s>Ich habe nicht weder Zeit noch Lust</s>."
      },
      {
        trap: "<em>aber</em> ne change pas l'ordre de la phrase, exactement comme <em>mais</em> : <em>..., aber sie ist interessant</em>, et non <s>aber ist sie interessant</s> ni <s>aber sie interessant ist</s>. Le verbe à la fin est propre aux subordonnées (<em>obwohl, weil, dass</em>), et <em>aber</em> n'est pas une conjonction de subordination. Après <em>sowohl</em>, la seconde partie est <em>als auch</em>, et non <s>aber</s> ni <s>und auch</s>."
      },
      {
        tip: "Pour donner moins de poids à un fait et plus au second, mets le premier avec <em>zwar</em> et fais arriver ton avis après <em>aber</em> : <em>Der Podcast ist zwar neu, aber er ist wirklich gut.</em> Le lecteur comprend d'où vient ton opinion."
      }
    ],
    grammar: {
      title: "zwar ... aber et sowohl ... als auch",
      note: "<b>zwar ... aber</b> concède puis oppose ; <b>aber</b> est en position zéro. <b>sowohl ... als auch</b> relie deux éléments ; avec deux sujets, le verbe est au pluriel.",
      table: {
        head: ["paire", "sens", "exemple"],
        rows: [
          ["zwar ... aber", "certes ... mais", "Die Sendung ist zwar lang, aber sie ist interessant."],
          ["sowohl ... als auch", "aussi bien ... que", "Ich höre sowohl Radio als auch Podcasts."],
          ["weder ... noch", "ni ... ni", "Ich habe weder Zeit noch Lust."]
        ]
      },
      examples: [
        { tr: "L'émission est certes longue, mais elle est intéressante.", note: "aber : position zéro, ordre normal" },
        { tr: "Certes, le programme est bon, mais j'ai peu de temps.", note: "Zwar ouvre la phrase : le verbe vient juste après" },
        { tr: "La station diffuse aussi bien des informations que de la musique.", note: "sowohl ... als auch avec deux compléments d'objet" },
        { tr: "J'écoute aussi bien la radio que des podcasts.", note: "pas de virgule entre les deux éléments" },
        { tr: "Anna et Tom écoutent tous les deux le podcast.", note: "deux sujets : verbe au pluriel" },
        { tr: "Il n'a certes pas beaucoup de temps, mais il écoute un podcast chaque jour.", note: "zwar après le verbe, puis aber" }
      ]
    },
    vocab: [
      "la radio",
      "l'émission",
      "la station, la chaîne",
      "le programme",
      "le podcast",
      "l'interview, l'entretien",
      "le commentaire",
      "l'auditeur",
      "écouter (quelqu'un, avec attention)",
      "allumer",
      "éteindre",
      "s'abonner à"
    ],
    exercises: [
      {
        q: "Quelle phrase a le bon ordre des mots ?",
        opts: [
          "Die Sendung ist zwar lang, aber sie ist interessant.",
          "Die Sendung ist zwar lang, aber ist sie interessant.",
          "Die Sendung ist zwar lang, aber sie interessant ist."
        ],
        why: "Après <b>aber</b>, le verbe reste en deuxième position, après le sujet : <i>aber sie ist interessant</i>. <i>Aber</i> n'envoie pas le verbe à la fin."
      },
      {
        q: "Quelle paire veut dire « aussi bien ... que » ?",
        opts: ["sowohl ... als auch", "zwar ... aber", "weder ... noch"],
        why: "<b>Sowohl ... als auch</b> : relie deux éléments. <i>Zwar ... aber</i> concède puis oppose, <i>weder ... noch</i> nie."
      },
      {
        q: "Quelle phrase veut dire « J'écoute aussi bien la radio que des podcasts » ?",
        opts: [
          "Ich höre sowohl Radio als auch Podcasts.",
          "Ich höre zwar Radio als auch Podcasts.",
          "Ich höre sowohl Radio aber Podcasts."
        ],
        why: "<b>Sowohl ... als auch</b> est la bonne paire. <i>Zwar</i> appelle <i>aber</i>, et <i>sowohl</i> appelle <i>als auch</i> : on ne mélange pas les deux paires."
      },
      {
        q: "Complète : « Das Programm ist ___ gut, aber ich habe wenig Zeit. »",
        hint: "concession, avant aber",
        why: "<b>Zwar</b> : concède que le programme est bon, puis <i>aber</i> introduit l'opposition."
      },
      {
        q: "Complète : « Der Sender bringt sowohl Nachrichten ___ auch Musik. »",
        hint: "seconde partie de la paire",
        why: "<b>Als</b> : la paire est <i>sowohl ... als auch</i>."
      },
      {
        q: "Complète avec la paire zwar ... aber : « Die Sendung ist ___ kurz, ___ sie ist sehr interessant. »",
        why: "<b>Zwar ... aber</b> : le premier mot concède un fait, le second introduit l'opposition."
      },
      {
        q: "Associe chaque phrase à son sens.",
        pairs: [
          "L'interview est certes courte, mais bonne.",
          "J'écoute aussi bien la radio que des podcasts.",
          "Le podcast passe chaque lundi.",
          "Les auditeurs allument la radio."
        ]
      },
      {
        q: "Remets les mots dans l'ordre.",
        tr: "Le programme est certes long, mais il est intéressant.",
        why: "<i>Das Programm ist zwar lang, aber es ist interessant</i> : <i>zwar</i> après le verbe, puis <i>aber</i> et le verbe <i>ist</i> en deuxième position."
      },
      {
        tr: "J'écoute la radio tous les matins. La station diffuse aussi bien des informations que de la musique. L'émission est certes longue, mais elle est vraiment intéressante.",
        why: "Dans <i>höre</i>, le <b>ö</b> est long et arrondi ; dans <i>sowohl</i>, le <b>s</b> est sonore [z] et le <b>w</b> est [v] ; dans <i>Nachrichten</i>, le premier <b>ch</b> est [x] et le second [ç] ; dans <i>wirklich</i>, le <b>w</b> est [v] et le <b>ch</b> final est [ç]."
      },
      {
        tr: "J'écoute aussi bien la radio que des podcasts, mais pas tous les jours.",
        why: "Dans <i>sowohl</i>, le <b>s</b> est sonore [z] et le <b>w</b> est [v] ; dans <i>höre</i>, le <b>ö</b> est arrondi ; dans <i>nicht</i>, le <b>ch</b> est [ç] ; dans <i>auch</i>, le <b>ch</b> est [x], après <i>au</i>."
      }
    ]
  },
  "lesson:b1-u04-l4": {
    theme: "Débat",
    title: "Défendre son opinion",
    objectives: [
      "employer les terminaisons de l'adjectif après l'article défini, après ein et sans article",
      "exprimer l'accord et le désaccord avec des formules toutes faites",
      "construire un argument avec zwar ... aber et sowohl ... als auch",
      "lire et employer des adjectifs déclinés dans des textes d'opinion"
    ],
    theory: [
      {
        h: "Les trois séries de terminaisons",
        p: "Devant le nom, l'adjectif prend une terminaison qui dépend de ce qui le précède. Après l'<strong>article défini</strong> (<em>der, die, das</em>, et aussi <em>dieser, jeder</em>), les terminaisons sont presque toujours <strong>-en</strong> ; <strong>-e</strong> apparaît au nominatif singulier des trois genres et à l'accusatif du féminin et du neutre : <em>der gute Beitrag, die gute Idee, das gute Beispiel, die guten Argumente.</em>"
      },
      {
        h: "Après ein, kein et les possessifs",
        p: "Là où <em>ein</em> n'a pas de terminaison, c'est l'adjectif qui la porte : <strong>ein guter</strong> Standpunkt (masculin nominatif), <strong>ein gutes</strong> Argument (neutre nominatif et accusatif). Pour le reste, les terminaisons sont les mêmes qu'après l'article défini : <em>eine gute Idee, einen guten Beitrag, mit einem guten Argument.</em>"
      },
      {
        h: "Sans article",
        p: "Sans article, c'est l'adjectif qui porte le signal du genre et du cas, avec les terminaisons de l'article : <em>interessante Kommentare</em> (pluriel), <em>guter Rat, gutes Wetter, gute Laune</em>. Exception : au génitif masculin et neutre, l'adjectif prend <strong>-en</strong> parce que le nom porte déjà <em>-(e)s</em> : <em>guten Weines, guten Wetters</em>. Plusieurs adjectifs devant le même nom ont généralement la même terminaison : <em>ein klarer, gut begründeter Standpunkt.</em>"
      },
      {
        h: "Formules pour débattre",
        p: "Pour exprimer l'accord : <em>Ich stimme dir zu. Das sehe ich auch so.</em> Pour le désaccord : <em>Da muss ich widersprechen. Ich bin anderer Meinung.</em> Pour présenter ta position : <em>Ich bin der Meinung, dass ... Meiner Ansicht nach ...</em> Pour reconnaître un point puis le contester : <em>Das ist zwar richtig, aber ...</em> ; pour additionner les raisons : <em>Das hat sowohl Vorteile als auch Nachteile.</em>"
      },
      {
        contrast: "En français, l'adjectif s'accorde en genre et en nombre, et il se place le plus souvent après le nom (<em>un point de vue clair, une idée claire</em>). En allemand, l'adjectif épithète se place <strong>toujours avant</strong> le nom et marque aussi le <strong>cas</strong> : <em>ein guter Standpunkt</em> (nominatif), <em>einen guten Standpunkt</em> (accusatif). À l'inverse, l'adjectif attribut après <em>sein</em> ne s'accorde jamais, alors que le français accorde : <em>Der Standpunkt ist gut. Die Idee ist gut.</em> (<em>Le point de vue est bon. L'idée est bonne.</em>) Le genre ne se reprend pas du français : <em>l'argument</em> est masculin, <em>das Argument</em> est neutre, d'où <em>ein gutes Argument</em>."
      },
      {
        trap: "Après l'article défini, on ne trouve pas <em>-er</em> : <em>der gute Standpunkt</em>, et non <s>der guter Standpunkt</s>. La terminaison <em>-er</em> ou <em>-es</em> se met là où l'article ne la montre pas : <em>ein guter Standpunkt</em>, <em>ein gutes Argument</em>. L'erreur typique consiste à appliquer la série de <em>ein</em> à <em>der</em>, ou l'inverse."
      },
      {
        tip: "Pour choisir la terminaison, demande-toi : y a-t-il un signal de genre et de cas avant l'adjectif ? S'il y en a un (<em>der, die, dem, einer</em>), l'adjectif prend <em>-e</em> ou <em>-en</em> ; s'il manque, c'est l'adjectif qui le montre."
      }
    ],
    grammar: {
      title: "L'adjectif après l'article défini",
      note: "après <b>der, die, das</b> : <b>-e</b> au nominatif singulier et à l'accusatif du féminin et du neutre, <b>-en</b> ailleurs. Après <b>ein</b>, la terminaison <b>-er / -es</b> apparaît là où <i>ein</i> ne la montre pas.",
      table: {
        head: ["", "m.", "f.", "n.", "pluriel"],
        rows: [
          ["nominatif", "der gute Beitrag", "die gute Idee", "das gute Beispiel", "die guten Argumente"],
          ["accusatif", "den guten Beitrag", "die gute Idee", "das gute Beispiel", "die guten Argumente"],
          ["datif", "dem guten Beitrag", "der guten Idee", "dem guten Beispiel", "den guten Argumenten"],
          ["génitif", "des guten Beitrags", "der guten Idee", "des guten Beispiels", "der guten Argumente"]
        ]
      },
      examples: [
        { tr: "C'est un bon point de vue.", note: "ein + masculin nominatif : -er" },
        { tr: "J'ai un bon argument.", note: "ein + neutre accusatif : -es" },
        { tr: "Avec ce bon argument, elle convainc tout le monde.", note: "datif neutre après dem : -en" },
        { tr: "Il écrit une longue contribution.", note: "einen + masculin accusatif : -en" },
        { tr: "Je lis volontiers des commentaires intéressants.", note: "sans article, pluriel : -e" },
        { tr: "Elle défend certes une opinion claire, mais elle écoute aussi.", note: "eine + féminin accusatif : -e" }
      ]
    },
    vocab: [
      "l'avis, l'opinion",
      "l'argument",
      "le point de vue",
      "la discussion, le débat",
      "l'exemple",
      "l'avantage",
      "l'inconvénient",
      "la contribution, l'intervention",
      "convaincre",
      "contredire, objecter",
      "justifier, motiver",
      "être d'accord, approuver"
    ],
    exercises: [
      {
        q: "Quelle phrase est correcte ?",
        opts: [
          "Das ist ein guter Standpunkt.",
          "Das ist ein gute Standpunkt.",
          "Das ist ein guten Standpunkt."
        ],
        why: "<b>Ein guter Standpunkt</b> : masculin nominatif, et <i>ein</i> n'a pas de terminaison, c'est donc l'adjectif qui la montre avec <i>-er</i>."
      },
      {
        q: "Complète : « mit der ___ Idee »",
        opts: ["guten", "gute", "guter"],
        why: "<b>Guten</b> : datif féminin après l'article défini, donc <i>-en</i>."
      },
      {
        q: "Complète : « Ich lese einen ___ Beitrag. »",
        hint: "interessant, accusatif masculin après einen",
        why: "<b>Interessanten</b> : accusatif masculin après <i>einen</i>, donc <i>-en</i>."
      },
      {
        q: "Complète : « Sie hat ein ___ Argument. »",
        hint: "stark, neutre accusatif après ein",
        why: "<b>Starkes</b> : neutre accusatif après <i>ein</i>, qui n'a pas de terminaison, donc <i>-es</i>."
      },
      {
        q: "Complète la phrase : « Mit dem ___ Beispiel ___ sie alle. »",
        why: "<b>Guten</b> (datif neutre après <i>dem</i>) et <b>überzeugt</b> (présent, 3e personne)."
      },
      {
        q: "Associe chaque formule à son sens.",
        pairs: [
          "Je suis d'avis que ...",
          "Là, je dois objecter.",
          "Je suis d'accord avec toi.",
          "C'est un argument fort."
        ]
      },
      {
        q: "Remets les mots dans l'ordre.",
        tr: "Je suis d'avis que c'est un grand avantage.",
        why: "<i>Ich bin der Meinung, dass das ein großer Vorteil ist.</i> <i>Dass</i> envoie le verbe <i>ist</i> à la fin, et <i>ein großer Vorteil</i> est un masculin nominatif."
      },
      {
        q: "Traduis : « J'ai lu un long article. »",
        why: "<i>Ich habe einen langen Artikel gelesen.</i> <i>Artikel</i> est masculin, à l'accusatif : <i>einen langen</i>. Le Präteritum est aussi correct : <i>Ich las einen langen Artikel.</i>"
      },
      {
        tr: "Je suis d'avis que c'est un bon plan. Il a à la fois des avantages et des inconvénients, mais les avantages sont plus grands. Certes, il coûte de l'argent, mais il apporte un bon résultat.",
        why: "Dans <i>Meinung</i>, le <b>ei</b> est [aɪ] ; dans <i>Vorteile</i>, le <b>V</b> est [f] et le <b>ei</b> est [aɪ] ; dans <i>Nachteile</i>, le <b>ch</b> est [x] ; dans <i>größer</i>, le <b>ö</b> est long et arrondi et le <b>ß</b> est [s]."
      },
      {
        tr: "C'est un argument fort, mais je suis d'un autre avis.",
        why: "Dans <i>starkes</i>, le <b>st</b> initial est [ʃt] ; dans <i>Argument</i>, le <b>g</b> est [g] ; dans <i>aber</i>, le <b>a</b> est long ; dans <i>Meinung</i>, le <b>ei</b> est [aɪ]."
      }
    ]
  },
  "lesson:b1-u04-test": {
    theme: "Vérification",
    title: "Test : Opinions et médias",
    objectives: [
      "vérifier le discours rapporté, nachdem et bevor, zwar ... aber et sowohl ... als auch, la déclinaison de l'adjectif"
    ],
    theory: [
      {
        p: "Douze questions sur toute l'unité. On réussit avec 70 %. Ne relis pas les leçons en répondant : si tu ne te souviens plus de quelque chose, mieux vaut retourner réviser."
      }
    ],
    exercises: [
      {
        tr: "Le Plusquamperfekt de gehen, toutes les personnes.",
        why: "<i>War gegangen, warst gegangen, war gegangen, waren gegangen, wart gegangen, waren gegangen</i> : <i>sein</i> au Präteritum + participe II."
      },
      {
        q: "Complète : « Anna hat gesagt, ___ sie keine Zeit hat. »",
        hint: "conjonction, affirmation rapportée",
        why: "<b>Dass</b> : introduit une affirmation rapportée et envoie le verbe à la fin."
      },
      {
        q: "Complète : « Nachdem sie die Nachricht gelesen ___, rief sie an. »",
        hint: "Plusquamperfekt, haben",
        why: "<b>Hatte</b> : <i>nachdem</i>, avec une principale au Präteritum (<i>rief</i>), demande le Plusquamperfekt."
      },
      {
        q: "Complète avec le Präteritum de veröffentlichen : « Bevor die Zeitung den Artikel ___, prüfte die Redaktion die Quelle. »",
        hint: "Präteritum, 3e personne du singulier",
        why: "<b>Veröffentlichte</b> : ici, <i>bevor</i> a le même temps que la principale (<i>prüfte</i>), le Präteritum. Verbe faible : radical + <i>-te</i>."
      },
      {
        q: "Complète : « Die Sendung ist ___ kurz, aber sie ist sehr interessant. »",
        hint: "premier élément de la paire avec aber",
        why: "<b>Zwar</b> : <i>zwar ... aber</i> reconnaît un point puis le conteste."
      },
      {
        q: "Complète : « Er hört sowohl Radio ___ auch Podcasts. »",
        hint: "second élément de la paire avec sowohl",
        why: "<b>Als</b> : la paire est <i>sowohl ... als auch</i>."
      },
      {
        q: "Complète avec l'adjectif kurz : « Sie schreibt einen ___ Kommentar. »",
        hint: "kurz, accusatif masculin après einen",
        why: "<b>Kurzen</b> : à l'accusatif masculin après <i>einen</i>, l'adjectif prend <i>-en</i>."
      },
      {
        q: "Tom dit : « Ich komme morgen. » Quelle phrase le rapporte sans dass ?",
        opts: [
          "Tom hat gesagt, er kommt morgen.",
          "Tom hat gesagt, er morgen kommt.",
          "Tom hat gesagt, dass er kommt morgen."
        ],
        why: "<b>Tom hat gesagt, er kommt morgen.</b> Sans <i>dass</i>, le verbe reste en deuxième position ; le verbe à la fin appartient uniquement à la version avec <i>dass</i>, et avec <i>dass</i> il ne peut pas être en deuxième position."
      },
      {
        q: "Quelle phrase est correcte ?",
        opts: [
          "Das ist ein gutes Argument.",
          "Das ist ein guter Argument.",
          "Das ist ein gute Argument."
        ],
        why: "<b>Ein gutes Argument</b> : <i>Argument</i> est neutre (alors que <i>argument</i> est masculin en français), et <i>ein</i> ne montre pas la terminaison au nominatif neutre, c'est donc l'adjectif qui la porte : <i>-es</i>."
      },
      {
        q: "Traduis en gardant le présent dans la subordonnée (il a toujours cet argument) : « Tom a dit qu'il a un bon argument. »",
        why: "<i>Tom hat gesagt, dass er ein gutes Argument hat.</i> Sans <i>dass</i> avec le verbe en deuxième position, ou avec <i>sagte</i>, c'est aussi correct. Le présent <i>hat</i> indique que le fait est toujours valable : l'allemand ne fait pas reculer le temps comme la concordance française (<i>qu'il avait</i>)."
      },
      {
        tr: "Anna a raconté qu'elle lit le journal tous les matins. Après avoir lu le gros titre, elle a appelé une amie. L'article est certes long, mais il a un point de vue clair.",
        why: "Dans <i>Zeitung</i>, le <b>z</b> est [ts] et le <b>ei</b> est [aɪ] ; dans <i>Schlagzeile</i>, le <b>sch</b> est [ʃ] ; dans <i>Freundin</i>, le <b>eu</b> est [ɔʏ]."
      },
      {
        tr: "Il a dit qu'il écoute aussi bien la radio que des podcasts.",
        why: "Dans <i>sowohl</i>, le <b>w</b> est [v] et le <b>o</b> de <i>wohl</i> est long ; dans <i>Radio</i>, le <b>a</b> est long ; dans <i>Podcasts</i>, le <b>c</b> est [k] et le <b>ts</b> final est [ts]."
      }
    ]
  }
});
