/* ============================================================
   Learner-language text (fr) for data/core/b2-01.js, unit b2-u01.
   Keys point at ids in the neutral layer; arrays merge by index,
   so their length has to match core.
   Checked by scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("fr", {
  "unit:b2-u01": {
    title: "Si j'avais su",
    grammarNote: "Konjunktiv II passé (hätte gemacht, wäre gegangen) · double infinitif avec les verbes de modalité (hätte anrufen sollen) · als ob, als wenn, als + verbe"
  },
  "lesson:b2-u01-l1": {
    theme: "Choix et regrets",
    title: "J'aurais fait, j'aurais été",
    objectives: [
      "former le Konjunktiv II passé avec hätte ou wäre + participe II",
      "choisir entre hätte et wäre comme au Perfekt",
      "exprimer un regret (Hätte ich bloß ...!)",
      "construire une hypothèse irréelle dans le passé"
    ],
    theory: [
      {
        h: "hätte ou wäre + participe II",
        p: "Pour parler de ce qui <strong>aurait pu arriver et n'est pas arrivé</strong>, on emploie le Konjunktiv II passé : <strong>hätte</strong> ou <strong>wäre</strong> conjugué + <strong>participe II</strong> à la fin. <em>Ich hätte das nicht gemacht</em> (je ne l'aurais pas fait), <em>Wir wären gern länger geblieben</em> (nous serions bien restés plus longtemps). Le choix entre <em>hätte</em> et <em>wäre</em> est celui du Perfekt : les verbes qui y prennent <em>sein</em> (<em>ich bin gegangen, ich bin gewesen</em>) prennent ici <em>wäre</em> (<em>ich wäre gegangen, ich wäre gewesen</em>) ; tous les autres prennent <em>hätte</em>."
      },
      {
        h: "L'hypothèse irréelle dans le passé",
        p: "Quand la condition et la conséquence portent toutes deux sur le passé, les deux parties sont au Konjunktiv II passé : <em>Wenn ich das gewusst hätte, wäre ich früher gekommen</em>. Après <em>wenn</em>, l'auxiliaire va à la fin, après le participe ; la principale qui suit commence par l'auxiliaire. Si la conséquence porte sur le présent, elle est au Konjunktiv II présent : <em>Hätte ich die Gelegenheit genutzt, wäre ich jetzt in Berlin.</em> On peut aussi supprimer <em>wenn</em> et commencer par le verbe : <em>Hätte ich das gewusst, wäre ich früher gekommen.</em> Avec <strong>bloß</strong>, <strong>nur</strong> ou <strong>doch</strong>, la même forme exprime un regret : <em>Hätte ich bloß mehr gelernt!</em>"
      },
      {
        contrast: "Le français emploie deux formes : <em>si j'avais su</em> (plus-que-parfait de l'indicatif) et <em>je serais venu</em> (conditionnel passé). L'allemand, quand les deux parties portent sur le passé, met le Konjunktiv II passé dans les deux : <em>Wenn ich das gewusst hätte, wäre ich gekommen</em>. En allemand, <em>wenn</em> + indicatif peut exprimer une condition ouverte ; pour une hypothèse passée contraire aux faits, on emploie le Konjunktiv II passé."
      },
      {
        trap: "Le choix de l'auxiliaire ressemble au français (<em>je serais venu</em>, <em>wäre gekommen</em>), mais pas partout : <em>j'aurais été</em> se dit <em>ich wäre gewesen</em>, <em>j'aurais couru</em> se dit <em>ich wäre gelaufen</em>, car <em>sein</em> et les verbes employés intransitivement pour exprimer un déplacement prennent généralement <em>sein</em>. Et <em>Wenn ich das gewusst habe</em> est un Perfekt de l'indicatif : il peut indiquer un moment ou une condition ouverte, mais il ne dit pas que vous ne le saviez pas. Pour l'hypothèse contraire aux faits, il faut <em>gewusst hätte</em>."
      },
      {
        tip: "Pour trouver l'auxiliaire, pensez d'abord au Perfekt : <em>ich habe gemacht</em> devient <em>ich hätte gemacht</em>, <em>ich bin geblieben</em> devient <em>ich wäre geblieben</em>. On remplace l'auxiliaire par sa forme de Konjunktiv II et le participe ne change pas."
      }
    ],
    grammar: {
      title: "Konjunktiv II passé : hätte / wäre + participe II",
      note: "<b>hätte</b> + participe avec les verbes qui prennent <i>haben</i> au Perfekt, <b>wäre</b> + participe avec ceux qui prennent <i>sein</i>. Si condition et conséquence portent sur le passé, les deux sont au Konjunktiv II passé ; une conséquence présente est au Konjunktiv II présent.",
      table: {
        head: ["Perfekt", "Konjunktiv II passé", "français"],
        rows: [
          ["ich habe gemacht", "ich hätte gemacht", "j'aurais fait"],
          ["ich bin gegangen", "ich wäre gegangen", "je serais allé"],
          ["ich bin gewesen", "ich wäre gewesen", "j'aurais été"],
          ["ich habe gewusst", "ich hätte gewusst", "j'aurais su"]
        ]
      },
      examples: [
        { tr: "Je ne l'aurais pas fait.", note: "hätte + participe à la fin" },
        { tr: "Nous serions bien restés plus longtemps.", note: "bleiben prend sein : wäre" },
        { tr: "Si je l'avais su, je serais venu plus tôt.", note: "condition et conséquence au passé : Konjunktiv II passé dans les deux" },
        { tr: "Si seulement j'avais travaillé davantage !", note: "regret : verbe en tête + bloß" },
        { tr: "Elle a failli arriver en retard.", note: "fast + Konjunktiv II : quelque chose qui a failli arriver" },
        { tr: "Sans ton aide, je n'y serais pas arrivé.", note: "ohne + nom à la place d'une proposition avec wenn" }
      ]
    },
    vocab: [
      "l'occasion",
      "la décision",
      "l'erreur, la faute",
      "la chance (de réussir), la possibilité",
      "le choix (au pluriel aussi : les élections)",
      "la chance, le bonheur (Glück haben : avoir de la chance)",
      "manquer, rater (un train, une occasion)",
      "regretter",
      "profiter de, utiliser",
      "se décider (für + accusatif : pour)",
      "y arriver, réussir",
      "à temps"
    ],
    exercises: [
      {
        tr: "Le Konjunktiv II passé de machen, à toutes les personnes.",
        why: "<i>hätte, hättest, hätte, hätten, hättet, hätten</i> + <i>gemacht</i> : <i>machen</i> prend <i>haben</i> au Perfekt, donc ici <i>hätte</i>."
      },
      {
        tr: "Le Konjunktiv II passé de gehen, à toutes les personnes.",
        why: "<i>gehen</i> prend <i>sein</i> au Perfekt (<i>ich bin gegangen</i>), donc <i>wäre gegangen</i>. Pour <i>du</i> et <i>ihr</i>, <i>wärst, wärt</i> et <i>wärest, wäret</i> sont également corrects."
      },
      {
        tr: "Le Konjunktiv II passé de sein, à toutes les personnes.",
        why: "<i>wäre gewesen</i> : <i>sein</i> forme son Perfekt avec lui-même (<i>ich bin gewesen</i>), donc <i>wäre</i> + <i>gewesen</i>, alors que le français dit <i>j'aurais été</i>."
      },
      {
        q: "Comment dit-on « Si j'avais su, je serais venu » ?",
        opts: [
          "Wenn ich das gewusst hätte, wäre ich gekommen.",
          "Wenn ich das gewusst habe, bin ich gekommen.",
          "Wenn ich das wüsste, würde ich kommen."
        ],
        why: "Pour le passé, il faut le Konjunktiv II passé dans les deux parties : <b>gewusst hätte</b> et <b>wäre gekommen</b>. La deuxième phrase est un Perfekt de l'indicatif, la troisième une hypothèse sur le présent."
      },
      {
        q: "Complétez : « Wir ___ gern länger geblieben. » (nous serions restés)",
        opts: [
          "wären",
          "hätten",
          "würden"
        ],
        why: "<i>bleiben</i> prend <i>sein</i> au Perfekt (<i>wir sind geblieben</i>), donc <b>wären</b>. <i>Würden ... geblieben</i> n'existe pas sous cette forme."
      },
      {
        q: "Complétez : « Ich ___ das nicht gemacht. » (je ne l'aurais pas fait)",
        hint: "Konjunktiv II de haben, ich",
        why: "<b>Hätte</b> : <i>machen</i> prend <i>haben</i> au Perfekt, et le participe <i>gemacht</i> se place à la fin."
      },
      {
        q: "Complétez : « Sie ___ fast zu spät gekommen. » (elle a failli arriver en retard)",
        hint: "Konjunktiv II de sein, sie (elle)",
        why: "<b>Wäre</b> : <i>kommen</i> prend <i>sein</i>. Avec <i>fast</i>, le Konjunktiv II raconte ce qui a failli arriver, comme le français <i>faillir</i>."
      },
      {
        q: "Complétez la phrase.",
        tr: "Si nous avions eu plus de temps, nous serions restés plus longtemps.",
        why: "<i>Wenn wir mehr Zeit gehabt hätten</i> : après <i>wenn</i>, d'abord le participe <i>gehabt</i>, puis l'auxiliaire <i>hätten</i> à la fin."
      },
      {
        q: "Traduisez : « Si tu étais venu plus tôt, tu l'aurais vu. »",
        why: "<i>Wenn du früher gekommen wärst, hättest du ihn gesehen</i>. <i>kommen</i> prend <i>wäre</i>, <i>sehen</i> prend <i>hätte</i>. Sans <i>wenn</i> : <i>Wärst du früher gekommen, hättest du ihn gesehen</i>."
      },
      {
        tr: "Si j'avais saisi l'occasion, je serais à Berlin maintenant. Mais j'ai décidé autrement.",
        why: "Dans <i>Gelegenheit</i>, l'accent tombe sur <b>le</b> : ge-<b>LE</b>-gen-heit ; dans <i>wäre</i>, le <b>ä</b> est un <i>è</i> long ; dans <i>entschieden</i>, le <b>ie</b> est un <i>i</i> long."
      },
      {
        tr: "Si je l'avais su, je serais resté à la maison.",
        why: "Dans <i>gewusst</i>, le <b>u</b> (prononcé <i>ou</i>) est bref devant le double <i>s</i> ; dans <i>hätte</i>, le <b>ä</b> est bref ; dans <i>geblieben</i>, le <b>ie</b> est long."
      }
    ]
  },
  "lesson:b2-u01-l2": {
    theme: "Reproches et excuses",
    title: "J'aurais dû appeler",
    objectives: [
      "employer le double infinitif avec les verbes de modalité au Konjunktiv II passé",
      "former le Perfekt d'un verbe de modalité suivi d'un autre verbe",
      "placer l'auxiliaire correctement dans la subordonnée",
      "faire un reproche et s'excuser"
    ],
    theory: [
      {
        h: "Le double infinitif",
        p: "Un verbe de modalité accompagné d'un autre verbe, à un temps composé, <strong>ne prend pas son participe</strong> (<em>gekonnt, gesollt</em>) mais son <strong>infinitif</strong>. La phrase se termine donc par deux infinitifs : d'abord le verbe principal, puis le modal. L'auxiliaire est toujours <strong>haben</strong>. Au Konjunktiv II : <em>Ich hätte dich anrufen sollen</em> (j'aurais dû t'appeler), <em>Wir hätten früher losfahren können</em> (nous aurions pu partir plus tôt). Au Perfekt : <em>Er hat gestern nicht kommen können</em> (il n'a pas pu venir hier)."
      },
      {
        h: "Dans la subordonnée",
        p: "Dans la subordonnée, l'auxiliaire ne va pas à la fin comme d'habitude : il se place <strong>devant les deux infinitifs</strong>. <em>Ich weiß, dass ich hätte fragen sollen. Es tut mir leid, dass ich nicht habe kommen können.</em> Avec les verbes de modalité au double infinitif, cette place est obligatoire."
      },
      {
        contrast: "Le français dit <em>j'aurais dû appeler</em>, <em>tu aurais pu me le dire</em> : auxiliaire, participe du modal, puis infinitif. L'allemand garde l'auxiliaire conjugué mais renvoie le modal à la fin, à l'infinitif : <em>Ich hätte anrufen sollen</em>. L'auxiliaire est toujours <em>haben</em>, même avec un verbe de déplacement : <em>Ich hätte kommen sollen</em>, jamais <em>Ich wäre kommen sollen</em>, alors que le français dit <em>je serais venu</em>."
      },
      {
        trap: "Calquer <em>j'aurais dû</em> donne <em>Ich hätte gesollt anrufen</em>, qui n'existe pas. Pour le regret, la forme normale est <em>Ich hätte anrufen sollen</em> ; <em>Ich sollte angerufen haben</em> demande un autre contexte (un appel qui aurait déjà dû être fait avant une échéance). Et <em>Ich hätte das gekonnt</em> n'existe que si le modal est <strong>seul</strong> : « j'en aurais été capable ». Dès qu'il y a un second verbe, le participe disparaît : <em>Ich hätte das machen können</em>."
      },
      {
        tip: "Pour un reproche plus doux, on emploie souvent <em>eigentlich</em> : <em>Eigentlich hättest du mir Bescheid sagen müssen.</em> Cela sonne moins dur qu'un reproche direct, mais dit la même chose."
      }
    ],
    grammar: {
      title: "Le double infinitif : hätte + infinitif + modal",
      note: "Avec un second verbe, le modal reste à l'<b>infinitif</b> et termine la phrase ; l'auxiliaire est toujours <b>haben</b>. Dans la subordonnée, l'auxiliaire se place <b>devant</b> les deux infinitifs.",
      table: {
        head: ["", "proposition principale", "subordonnée"],
        rows: [
          ["Konjunktiv II passé", "Ich hätte anrufen sollen.", "..., dass ich hätte anrufen sollen."],
          ["Perfekt", "Ich habe nicht kommen können.", "..., dass ich nicht habe kommen können."],
          ["modal seul", "Ich hätte das nicht gekonnt.", "..., dass ich das nicht gekonnt hätte."]
        ]
      },
      examples: [
        { tr: "J'aurais dû t'appeler.", note: "double infinitif : anrufen sollen" },
        { tr: "Tu aurais dû me le dire.", note: "müssen : une obligation plus forte que sollen" },
        { tr: "Nous aurions pu partir plus tôt.", note: "l'auxiliaire reste haben, même avec losfahren" },
        { tr: "Il n'a pas pu venir hier.", note: "Perfekt : hat + kommen können" },
        { tr: "Elle n'aurait pas dû faire ça.", note: "nicht dürfen : quelque chose qui n'était pas permis" },
        { tr: "Je sais que j'aurais dû demander.", note: "subordonnée : hätte devant les deux infinitifs" }
      ]
    },
    vocab: [
      "le reproche (jemandem Vorwürfe machen : faire des reproches à quelqu'un)",
      "le devoir, l'obligation",
      "le retard",
      "l'excuse, le prétexte",
      "l'intention",
      "la méprise (aus Versehen : par mégarde)",
      "reprocher",
      "s'excuser",
      "oublier",
      "prévenir, faire savoir",
      "malheureusement",
      "en fait, à vrai dire"
    ],
    exercises: [
      {
        q: "Comment dit-on « J'aurais dû t'appeler » ?",
        opts: [
          "Ich hätte dich anrufen sollen.",
          "Ich hätte dich angerufen gesollt.",
          "Ich wäre dich anrufen sollen."
        ],
        why: "Double infinitif : <b>anrufen sollen</b> à la fin, auxiliaire <b>hätte</b>. Le participe <i>gesollt</i> ne s'emploie pas avec un second verbe, et l'auxiliaire n'est jamais <i>wäre</i>."
      },
      {
        q: "Comment dit-on « Je n'ai pas pu venir » au Perfekt ?",
        opts: [
          "Ich habe nicht kommen können.",
          "Ich bin nicht kommen können.",
          "Ich habe nicht kommen gekonnt."
        ],
        why: "Au Perfekt, un modal suivi d'un autre verbe prend <b>haben</b> et reste à l'infinitif : <i>habe ... kommen können</i>, même si <i>kommen</i> seul prendrait <i>sein</i>."
      },
      {
        q: "Quelle subordonnée est correcte ?",
        opts: [
          "Ich weiß, dass ich hätte fragen sollen.",
          "Ich weiß, dass ich fragen sollen hätte.",
          "Ich weiß, dass ich hätte gefragt sollen."
        ],
        why: "Avec le double infinitif, l'auxiliaire se place <b>devant</b> les deux infinitifs : <i>hätte fragen sollen</i>. La troisième mélange participe et infinitif."
      },
      {
        q: "Complétez : « Du ___ mir Bescheid sagen sollen. » (tu aurais dû)",
        hint: "Konjunktiv II de haben, du",
        why: "<b>Hättest</b> : l'auxiliaire du double infinitif est toujours <i>haben</i>, ici à la deuxième personne."
      },
      {
        q: "Complétez avec le modal : « Wir hätten früher losfahren ___. » (nous aurions pu partir)",
        hint: "pouvoir, à l'infinitif",
        why: "<b>können</b> à l'infinitif, à la fin après <i>losfahren</i> : c'est le double infinitif."
      },
      {
        q: "Complétez la phrase.",
        tr: "J'aurais dû t'appeler hier.",
        why: "<i>Ich hätte dich gestern anrufen sollen</i> : <i>hätte</i> en deuxième position, <i>anrufen sollen</i> à la fin. <i>müssen</i> est aussi accepté et rend l'obligation plus forte."
      },
      {
        q: "Complétez la phrase au Perfekt.",
        tr: "Il n'a pas pu venir hier.",
        why: "<i>Er hat gestern nicht kommen können</i> : auxiliaire <i>hat</i>, puis les deux infinitifs. Le Präteritum <i>Er konnte gestern nicht kommen</i> est aussi correct, mais l'exercice demande le Perfekt."
      },
      {
        q: "Traduisez : « Tu aurais dû me le dire. »",
        why: "<i>Du hättest es mir sagen sollen</i> (ou <i>müssen</i>) : <i>hättest</i> en deuxième position, <i>sagen sollen</i> à la fin. On peut aussi commencer par <i>Das</i> : <i>Das hättest du mir sagen sollen</i>."
      },
      {
        tr: "Je suis désolé, j'aurais dû te prévenir. Malheureusement, j'ai oublié le rendez-vous.",
        why: "Dans <i>Bescheid</i>, le <b>sch</b> se prononce comme <i>ch</i> en français et le <b>ei</b> comme <i>aï</i> ; dans <i>vergessen</i>, le <b>v</b> se prononce [f] ; dans <i>leider</i>, le <b>ei</b> est de nouveau <i>aï</i>."
      },
      {
        tr: "En fait, j'aurais dû partir plus tôt.",
        why: "Dans <i>eigentlich</i>, le <b>ch</b> final est le son doux [ç] ; dans <i>müssen</i>, le <b>ü</b> est bref, comme un <i>u</i> français ; dans <i>losfahren</i>, le <b>h</b> allonge le <i>a</i>."
      }
    ]
  },
  "lesson:b2-u01-l3": {
    theme: "Apparences",
    title: "Comme s'il ne savait rien",
    objectives: [
      "faire une comparaison hypothétique avec als ob et als wenn",
      "employer als seul, suivi directement du verbe",
      "distinguer un fait simultané d'un fait antérieur",
      "décrire une impression avec aussehen, wirken, klingen"
    ],
    theory: [
      {
        h: "als ob, als wenn",
        p: "<strong>als ob</strong> et <strong>als wenn</strong> signifient <em>comme si</em> et introduisent une comparaison hypothétique : une impression qui peut être fausse ou dont on ignore si elle est vraie. Ils se construisent en général avec le <strong>Konjunktiv II</strong>, la forme apprise ici, verbe à la fin : <em>Er tut so, als ob er nichts wüsste</em> (il fait comme s'il ne savait rien). On les trouve souvent après <em>so tun</em> (faire semblant), <em>aussehen</em> (avoir l'air), <em>klingen</em> (sonner), <em>sich benehmen</em> (se comporter)."
      },
      {
        h: "Simultané ou antérieur",
        p: "Si le fait imaginé est <strong>simultané</strong>, on emploie le Konjunktiv II présent : <em>Du siehst aus, als ob du müde wärst</em>. S'il est <strong>antérieur</strong>, le passé : <em>Sie sieht aus, als ob sie nicht geschlafen hätte</em>. Avec <strong>als</strong> seul, le verbe conjugué vient <strong>tout de suite après</strong>, comme dans une question : <em>Du redest, als wärst du der Chef. Mir ist, als hätte ich ihn schon einmal gesehen.</em>"
      },
      {
        contrast: "Après <em>comme si</em>, le français garde l'indicatif : imparfait pour le simultané (<em>comme s'il ne savait rien</em>), plus-que-parfait pour l'antérieur (<em>comme si elle n'avait pas dormi</em>). L'allemand passe au Konjunktiv II, avec la même répartition : <em>als ob er nichts wüsste</em>, <em>als ob sie nicht geschlafen hätte</em>. Calquer l'indicatif français (<em>als ob er nichts wusste</em>) se rencontre à l'oral, mais ce n'est pas la forme qu'on attend à l'écrit."
      },
      {
        trap: "Ne mélangez pas les deux constructions : <em>als ob er krank wäre</em> ou <em>als wäre er krank</em>, mais ni <em>als ob wäre er krank</em> ni <em>als er krank wäre</em>. Et ne confondez pas ce <em>als</em> avec celui du comparatif (<em>größer als</em>) ou avec le <em>als</em> temporel (<em>Als ich jung war</em>) : ici, il est suivi directement d'un verbe au Konjunktiv II."
      },
      {
        tip: "À l'oral, on entend souvent <em>würde</em> + infinitif à la place de la forme propre : <em>Sie tut so, als ob sie mich nicht kennen würde.</em> Avec <em>sein</em>, <em>haben</em> et les verbes de modalité, on préfère toutefois la forme propre : <em>als ob er krank wäre</em>."
      }
    ],
    grammar: {
      title: "als ob, als wenn, als + Konjunktiv II",
      note: "<b>als ob / als wenn</b> : verbe à la fin. <b>als</b> : verbe juste après. Présent pour un fait simultané, passé (<b>hätte / wäre</b> + participe) pour un fait antérieur.",
      table: {
        head: ["", "simultané", "antérieur"],
        rows: [
          ["als ob", "..., als ob er nichts wüsste.", "..., als ob er nichts gehört hätte."],
          ["als wenn", "..., als wenn er nichts wüsste.", "..., als wenn er nichts gehört hätte."],
          ["als", "..., als wüsste er nichts.", "..., als hätte er nichts gehört."]
        ]
      },
      examples: [
        { tr: "Il fait comme s'il ne savait rien.", note: "so tun, als ob + Konjunktiv II présent" },
        { tr: "Elle a l'air de ne pas avoir dormi.", note: "fait antérieur : geschlafen hätte" },
        { tr: "Tu parles comme si tu étais le chef.", note: "als seul : verbe juste après" },
        { tr: "On dirait qu'il pleut dehors.", note: "als wenn + würde : forme de l'oral" },
        { tr: "Il se comporte comme si rien ne s'était passé.", note: "passieren prend sein : passiert wäre" },
        { tr: "J'ai l'impression de l'avoir déjà vu.", note: "Mir ist, als ... : une sensation" }
      ]
    },
    vocab: [
      "l'impression",
      "le comportement",
      "l'apparence (Der Schein trügt : les apparences sont trompeuses)",
      "l'idée, le pressentiment (keine Ahnung haben : n'avoir aucune idée)",
      "se comporter",
      "faire semblant",
      "avoir l'air",
      "paraître, faire un certain effet",
      "sonner (Das klingt gut : ça a l'air bien)",
      "sembler (+ zu + infinitif)",
      "étrange, bizarre",
      "surpris"
    ],
    exercises: [
      {
        q: "Comment dit-on « Il fait comme s'il ne savait rien » ?",
        opts: [
          "Er tut so, als ob er nichts wüsste.",
          "Er tut so, als ob er wüsste nichts.",
          "Er tut so, als ob er nichts wissen."
        ],
        why: "Après <b>als ob</b>, le verbe au Konjunktiv II va à la fin : <i>nichts wüsste</i>. La troisième contient un infinitif sans verbe conjugué."
      },
      {
        q: "Quelle phrase est correcte ?",
        opts: [
          "Sie sieht aus, als ob sie nicht geschlafen hätte.",
          "Sie sieht aus, als ob hätte sie nicht geschlafen.",
          "Sie sieht aus, als sie nicht geschlafen hätte."
        ],
        why: "Avec <b>als ob</b>, le verbe va à la fin ; avec <b>als</b> seul, il vient juste après (<i>als hätte sie nicht geschlafen</i>). La deuxième et la troisième inversent les deux constructions."
      },
      {
        q: "Complétez : « Du redest, als ___ du der Chef. » (étais)",
        hint: "Konjunktiv II de sein, du ; après als, le verbe vient tout de suite",
        why: "<b>Wärst</b> (ou <i>wärest</i>) : avec <i>als</i> seul, le verbe conjugué vient juste après."
      },
      {
        q: "Complétez : « Er benimmt sich, als ob nichts passiert ___. » (s'était passé)",
        hint: "Konjunktiv II de sein",
        why: "<b>Wäre</b> : <i>passieren</i> prend <i>sein</i> au Perfekt, et après <i>als ob</i> l'auxiliaire termine la proposition."
      },
      {
        q: "Complétez la phrase.",
        tr: "J'ai l'impression de l'avoir déjà vu.",
        why: "<i>Mir ist, als hätte ich ihn schon einmal gesehen</i> : avec <i>als</i>, le verbe <i>hätte</i> vient tout de suite, le participe <i>gesehen</i> va à la fin."
      },
      {
        q: "Quelles phrases sont correctes ?",
        opts: [
          "Er tut so, als ob er krank wäre.",
          "Er tut so, als wäre er krank.",
          "Er tut so, als wenn er krank wäre.",
          "Er tut so, als ob wäre er krank.",
          "Er tut so, als er krank wäre."
        ],
        why: "Les trois premières sont correctes : <i>als ob</i> et <i>als wenn</i> avec le verbe à la fin, <i>als</i> avec le verbe juste après. La 4 et la 5 mélangent les deux constructions."
      },
      {
        q: "Remettez les mots dans l'ordre.",
        tr: "Elle fait comme si elle ne me connaissait pas.",
        why: "<i>Sie tut so, als ob sie mich nicht kennen würde.</i> Après <i>als ob</i>, le verbe conjugué <i>würde</i> termine la proposition, après l'infinitif."
      },
      {
        q: "Traduisez : « Il se comporte comme si rien ne s'était passé. »",
        why: "<i>Er benimmt sich, als ob nichts passiert wäre</i>, ou <i>als wäre nichts passiert</i>. On peut dire <i>geschehen</i> au lieu de <i>passiert</i>, et <i>so tun</i> au lieu de <i>sich benehmen</i>."
      },
      {
        tr: "Il a fait comme s'il ne m'avait pas vu. Mais j'avais l'impression qu'il m'avait très bien reconnu.",
        why: "Dans <i>Eindruck</i>, le <b>ei</b> se prononce <i>aï</i> et le <b>u</b> (<i>ou</i>) est bref ; dans <i>erkannt</i>, le <b>r</b> après le <i>e</i> s'entend à peine ; dans <i>genau</i>, le <b>au</b> se prononce <i>aou</i>."
      },
      {
        tr: "Tu as l'air de quelqu'un qui n'a pas dormi de la nuit.",
        why: "Dans <i>siehst</i>, le <b>ie</b> est long et le <b>h</b> muet ; dans <i>Nacht</i>, le <b>ch</b> est le son dur [x], au fond de la gorge ; dans <i>hättest</i>, le <b>ä</b> est bref."
      }
    ]
  },
  "lesson:b2-u01-test": {
    theme: "Évaluation",
    title: "Test : Si j'avais su",
    objectives: [
      "vérifier le Konjunktiv II passé, le double infinitif et als ob"
    ],
    theory: [
      {
        p: "Dix questions sur toute l'unité. On réussit avec 70 %. Ne regardez pas les leçons pendant que vous répondez : si vous ne vous souvenez plus de quelque chose, mieux vaut retourner réviser."
      }
    ],
    exercises: [
      {
        tr: "Le Konjunktiv II passé de fahren, à toutes les personnes.",
        why: "<i>fahren</i> prend <i>sein</i> au Perfekt (<i>ich bin gefahren</i>), donc <i>wäre gefahren</i>. Le tableau demande le verbe intransitif de déplacement ; au sens de conduire un véhicule, avec un complément d'objet, l'auxiliaire habituel est <i>haben</i> (<i>Ich hätte das Auto gefahren</i>)."
      },
      {
        tr: "Le Konjunktiv II passé de lernen, à toutes les personnes.",
        why: "<i>lernen</i> prend <i>haben</i> au Perfekt : <i>hätte gelernt</i>."
      },
      {
        q: "Complétez : « Wenn ich das gewusst ___, wäre ich gekommen. »",
        hint: "Konjunktiv II de haben, ich",
        why: "<b>Hätte</b> à la fin de la proposition introduite par <i>wenn</i>, après le participe <i>gewusst</i>."
      },
      {
        q: "Complétez avec le modal : « Du hättest mich anrufen ___. » (tu aurais pu)",
        hint: "pouvoir, à l'infinitif",
        why: "<b>können</b> : double infinitif, le modal reste à l'infinitif à la fin."
      },
      {
        q: "Complétez : « Er tut so, als ob er nichts ___. » (savait)",
        hint: "Konjunktiv II de wissen",
        why: "<b>Wüsste</b> : Konjunktiv II de <i>wissen</i>, à la fin après <i>als ob</i>."
      },
      {
        q: "Complétez : « Ich ___ nie weggefahren. » (je ne serais jamais parti)",
        opts: [
          "wäre",
          "hätte",
          "würde"
        ],
        why: "<i>wegfahren</i> prend <i>sein</i> au Perfekt : <b>wäre</b> + <i>weggefahren</i>."
      },
      {
        q: "Quelle phrase exprime un regret ?",
        opts: [
          "Hätte ich bloß mehr gelernt!",
          "Ich habe bloß mehr gelernt.",
          "Ich lerne bloß mehr."
        ],
        why: "Ici, le regret est porté par le Konjunktiv II passé, le verbe en tête et <i>bloß</i> (<i>nur</i>, <i>doch</i> ou <i>Wenn ich doch ... hätte!</i> conviennent aussi) : <b>Hätte ich bloß mehr gelernt!</b> Les deux autres sont à l'indicatif."
      },
      {
        q: "Quelles phrases sont correctes ?",
        opts: [
          "Wir wären gern länger geblieben.",
          "Ich hätte früher aufstehen sollen.",
          "Sie sieht aus, als wäre sie krank.",
          "Ich hätte früher aufgestanden sollen.",
          "Wir hätten gern länger geblieben."
        ],
        why: "Les trois premières sont correctes. La 4 met un participe à la place de l'infinitif dans le double infinitif ; la 5 emploie <i>hätten</i> avec <i>bleiben</i>, qui prend <i>sein</i>."
      },
      {
        tr: "Si nous étions partis à temps, nous n'aurions pas raté le train. J'aurais dû t'écouter.",
        why: "Dans <i>rechtzeitig</i>, le <b>ch</b> est [ç] et le <b>z</b> se prononce [ts] ; dans <i>verpasst</i>, le <b>v</b> se prononce [f] ; dans <i>hören</i>, le <b>ö</b> est long, proche du <i>eu</i> de <i>peu</i>."
      },
      {
        tr: "Si seulement je l'avais su plus tôt, j'aurais décidé autrement.",
        why: "Dans <i>bloß</i>, le <b>o</b> est long et le <b>ß</b> est un <i>s</i> sourd ; dans <i>früher</i>, le <b>h</b> est muet et allonge le <i>ü</i> ; dans <i>entschieden</i>, le <b>sch</b> se prononce <i>ch</i>."
      }
    ]
  }
});
