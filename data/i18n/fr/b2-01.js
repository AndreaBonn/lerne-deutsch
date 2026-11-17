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
  },
  "unit:b2-u02": {
    title: "Conditions",
    grammarNote: "système hypothétique réel, irréel du présent, irréel du passé et mixte · falls, sofern, es sei denn, vorausgesetzt · condition sans wenn (Hätte ich ..., Sollten Sie ...) · bloß, nur, doch dans les souhaits"
  },
  "lesson:b2-u02-l1": {
    theme: "Décisions",
    title: "Réel, irréel, mixte",
    objectives: [
      "distinguer la condition ouverte de la condition irréelle",
      "construire l'irréel du présent et l'irréel du passé",
      "combiner une condition passée et une conséquence présente",
      "placer le verbe correctement après la proposition en wenn"
    ],
    theory: [
      {
        h: "Trois types de système hypothétique",
        p: "La condition <strong>ouverte</strong> présente la condition comme possible et emploie l'<strong>indicatif</strong> : <em>Wenn es morgen regnet, bleiben wir zu Hause.</em> L'<strong>irréel du présent</strong> imagine quelque chose qui n'est pas le cas maintenant, ou le présente comme lointain, et emploie le <strong>Konjunktiv II présent</strong> : <em>Wenn ich mehr Geld hätte, würde ich weniger arbeiten.</em> L'<strong>irréel du passé</strong> parle de ce qui n'est pas arrivé et emploie le <strong>Konjunktiv II passé</strong> : <em>Wenn du mich gefragt hättest, hätte ich dir geholfen.</em>"
      },
      {
        h: "Le cas mixte",
        p: "Condition et conséquence peuvent se situer à des moments différents. Une condition passée avec une conséquence présente : <em>Wenn er den Job angenommen hätte, würde er jetzt in München wohnen.</em> Le premier verbe est au Konjunktiv II passé, le second au présent : chaque partie prend le temps de ce qu'elle dit. Après la proposition en <em>wenn</em>, la principale commence par le verbe conjugué : <em>Wenn das Wetter schön ist, <strong>gehen</strong> wir wandern.</em>"
      },
      {
        contrast: "Les trois types correspondent au français : <em>s'il pleut, nous restons</em> ; <em>si j'avais plus d'argent, je travaillerais moins</em> ; <em>si tu m'avais demandé, je t'aurais aidé</em>. La grande différence est le mode. Après <em>si</em>, le français garde l'indicatif (imparfait, plus-que-parfait) et réserve le conditionnel à la principale. L'allemand met le Konjunktiv II dans les deux parties : <em>Wenn ich Zeit hätte, würde ich kommen</em>. Le réflexe « jamais de conditionnel après <em>si</em> » vous aide toutefois : avec <em>haben</em> et <em>sein</em>, on évite aussi <em>würde</em> après <em>wenn</em>."
      },
      {
        trap: "Après une proposition en <em>si</em>, le français garde l'ordre sujet-verbe (<em>s'il pleut, nous restons</em>) ; en allemand, la proposition en <em>wenn</em> occupe la première place et le verbe vient juste après : <em>Wenn es regnet, bleiben wir</em>, et non <em>Wenn es regnet, wir bleiben</em>. Et <em>Wenn ich Zeit hätte</em> est bien plus courant que <em>Wenn ich Zeit haben würde</em>, possible mais lourd."
      },
      {
        tip: "Pour choisir le type, demandez-vous comment vous présentez la condition. Ouverte, c'est-à-dire possible : indicatif. Imaginée, lointaine ou contraire à la situation actuelle : <em>hätte, wäre, würde</em>. Contraire à ce qui s'est passé : <em>hätte</em> ou <em>wäre</em> + participe."
      }
    ],
    grammar: {
      title: "Le système hypothétique : réel, irréel, mixte",
      note: "<b>Ouvert</b> : indicatif. <b>Irréel du présent</b> : Konjunktiv II présent. <b>Irréel du passé</b> : Konjunktiv II passé. <b>Mixte</b> : chaque partie prend le temps de ce qu'elle dit.",
      table: {
        head: ["type", "condition (wenn ...)", "conséquence"],
        rows: [
          ["ouvert", "Wenn es regnet,", "bleiben wir zu Hause."],
          ["irréel du présent", "Wenn ich Zeit hätte,", "würde ich kommen."],
          ["irréel du passé", "Wenn ich Zeit gehabt hätte,", "wäre ich gekommen."],
          ["mixte", "Wenn ich den Job angenommen hätte,", "würde ich jetzt in München wohnen."]
        ]
      },
      examples: [
        { tr: "S'il pleut demain, nous restons à la maison.", note: "ouvert : Präsens, même pour le futur" },
        { tr: "Si j'avais plus d'argent, je travaillerais moins.", note: "irréel du présent" },
        { tr: "Si tu m'avais demandé, je t'aurais aidé.", note: "irréel du passé" },
        { tr: "S'il avait accepté le poste, il habiterait maintenant à Munich.", note: "mixte : condition passée, conséquence présente" },
        { tr: "S'il fait beau, nous allons faire une randonnée.", note: "ouvert : la principale commence par le verbe" },
        { tr: "Si j'étais toi, j'accepterais l'offre.", note: "irréel : le conseil classique" }
      ]
    },
    vocab: [
      "la condition",
      "l'offre",
      "la possibilité",
      "le cas (in diesem Fall : dans ce cas)",
      "la conséquence",
      "le risque",
      "accepter (une offre)",
      "refuser, décliner",
      "dépendre (von + datif : de)",
      "risquer",
      "le cas échéant, éventuellement",
      "sérieusement"
    ],
    exercises: [
      {
        q: "Comment dit-on « S'il pleut demain, nous restons à la maison » ?",
        opts: [
          "Wenn es morgen regnet, bleiben wir zu Hause.",
          "Wenn es morgen regnen würde, blieben wir zu Hause.",
          "Wenn es morgen regnet, wir bleiben zu Hause."
        ],
        why: "Condition ouverte : indicatif, et après la proposition en <i>wenn</i> le verbe vient tout de suite : <b>bleiben wir</b>. La deuxième présente la pluie comme une hypothèse plus lointaine ; la troisième a un mauvais ordre des mots."
      },
      {
        q: "De quel type est « Wenn ich mehr Geld hätte, würde ich weniger arbeiten » ?",
        opts: [
          "irréel du présent",
          "ouvert",
          "irréel du passé"
        ],
        why: "<i>hätte</i> et <i>würde arbeiten</i> sont au Konjunktiv II présent : je n'ai pas plus d'argent maintenant. Le passé demanderait <i>gehabt hätte</i>."
      },
      {
        q: "Comment dit-on « Si tu m'avais demandé, je t'aurais aidé » ?",
        opts: [
          "Wenn du mich gefragt hättest, hätte ich dir geholfen.",
          "Wenn du mich fragen würdest, würde ich dir helfen.",
          "Wenn du mich gefragt hast, habe ich dir geholfen."
        ],
        why: "Irréel du passé : Konjunktiv II passé dans les deux parties. La deuxième phrase porte sur le présent, la troisième est à l'indicatif."
      },
      {
        q: "Comment dit-on « S'il avait accepté le poste, il habiterait maintenant à Munich » ?",
        opts: [
          "Wenn er den Job angenommen hätte, würde er jetzt in München wohnen.",
          "Wenn er den Job angenommen hätte, hätte er jetzt in München gewohnt.",
          "Wenn er den Job annehmen würde, hätte er jetzt in München gewohnt."
        ],
        why: "Cas mixte : la condition est passée (<b>angenommen hätte</b>), la conséquence présente (<b>würde ... wohnen</b>), comme le dit <i>jetzt</i>."
      },
      {
        q: "Complétez : « Wenn ich du ___, würde ich das Angebot annehmen. »",
        hint: "Konjunktiv II de sein, ich",
        why: "<b>Wäre</b> : <i>Wenn ich du wäre</i> est la formule figée du conseil, avec <i>wäre</i> à la fin de la proposition en <i>wenn</i>."
      },
      {
        q: "Complétez la phrase.",
        tr: "S'il fait beau, nous allons faire une randonnée.",
        why: "<i>Wenn das Wetter schön ist, gehen wir wandern</i> : <i>ist</i> à la fin de la proposition en <i>wenn</i>, puis la principale commence par le verbe <i>gehen</i>."
      },
      {
        q: "Complétez la phrase.",
        tr: "Si tu m'avais demandé, je t'aurais aidé.",
        why: "<i>Wenn du mich gefragt hättest, hätte ich dir geholfen</i> : Konjunktiv II passé dans les deux parties."
      },
      {
        q: "Traduisez : « Si j'avais plus d'argent, je travaillerais moins. »",
        why: "<i>Wenn ich mehr Geld hätte, würde ich weniger arbeiten</i>. Sans <i>wenn</i> : <i>Hätte ich mehr Geld, würde ich weniger arbeiten</i>."
      },
      {
        tr: "Si j'avais accepté l'offre, je travaillerais maintenant à Hambourg. Mais tout ne dépend pas de l'argent.",
        why: "Dans <i>Angebot</i>, l'accent tombe sur <b>An</b> ; dans <i>Hamburg</i>, le <b>g</b> final se prononce [k] ; dans <i>hängt</i>, le <b>ng</b> est un son nasal [ŋ], comme dans <i>parking</i>."
      },
      {
        tr: "S'il pleut demain, nous restons à la maison et nous jouons aux cartes.",
        why: "Dans <i>regnet</i>, le <b>g</b> s'entend devant le <i>n</i> : <i>reg-net</i> ; dans <i>bleiben</i>, le <b>ei</b> se prononce <i>aï</i> ; dans <i>spielen</i>, le <b>sp</b> initial se prononce <i>chp</i>."
      }
    ]
  },
  "lesson:b2-u02-l2": {
    theme: "Imprévus",
    title: "Falls, sofern, es sei denn",
    objectives: [
      "exprimer une condition avec falls, sofern et vorausgesetzt",
      "dire « à moins que » avec es sei denn",
      "construire une condition sans wenn, verbe en tête",
      "reconnaître les formules du registre soutenu (Sollten Sie ..., im Notfall)"
    ],
    theory: [
      {
        h: "D'autres conjonctions de condition",
        p: "<strong>falls</strong> (<em>au cas où, si jamais</em>) présente la condition comme possible mais pas certaine : <em>Falls du Hilfe brauchst, ruf mich an.</em> <strong>sofern</strong> (<em>pourvu que, dans la mesure où</em>) est plus soutenu : <em>Sofern nichts dazwischenkommt, sind wir um acht da.</em> <strong>vorausgesetzt</strong> (<em>à condition que</em>) se construit avec <em>dass</em> et le verbe à la fin, ou avec une principale après la virgule : <em>Wir grillen, vorausgesetzt, das Wetter ist gut.</em> <strong>es sei denn</strong> (<em>à moins que</em>) est suivi d'une proposition avec le verbe en deuxième position : <em>Wir fahren morgen los, es sei denn, es schneit.</em>"
      },
      {
        h: "La condition sans wenn et le registre soutenu",
        p: "On peut supprimer <em>wenn</em> et placer le verbe conjugué en <strong>première position</strong> : <em>Hätte ich das gewusst, wäre ich gekommen.</em> Dans les lettres, les avis et les courriels professionnels, on met souvent <strong>sollte</strong> en tête : <em>Sollten Sie Fragen haben, wenden Sie sich bitte an uns.</em> Le style soutenu préfère aussi un nom à la proposition : <em>im Notfall</em> (en cas d'urgence), <em>im Falle eines Brandes</em> (en cas d'incendie, avec le génitif)."
      },
      {
        contrast: "<em>Au cas où</em> veut le conditionnel, <em>pourvu que</em>, <em>à condition que</em> et <em>à moins que</em> le subjonctif. Avec les conjonctions allemandes correspondantes, la condition ouverte s'exprime à l'<strong>indicatif</strong>, sans aucun subjonctif : <em>falls es regnet</em>, <em>sofern nichts dazwischenkommt</em>. Pour la présenter comme plus lointaine, on peut employer le Konjunktiv II : <em>Falls du Hilfe brauchen solltest, ...</em> La formule <em>Sollten Sie Fragen haben</em> correspond au français <em>si vous aviez des questions</em> ou <em>pour toute question</em> des courriers."
      },
      {
        trap: "<em>À moins qu'il ne pleuve</em> : le français ajoute un <em>ne</em> explétif qui ne nie rien. <em>es sei denn</em> signifie déjà « à moins que » : n'ajoutez pas <em>nicht</em> par réflexe, <em>es sei denn, es regnet</em>. Une négation n'y a sa place que si l'exception elle-même est négative (<em>es sei denn, du möchtest das nicht</em>). Et après <em>es sei denn</em>, le verbe est en deuxième position, pas à la fin."
      },
      {
        tip: "À l'oral, <em>wenn</em> suffit presque toujours ; <em>falls</em> est utile pour souligner que la chose pourrait ne pas arriver (<em>Falls ich mich verspäte, ...</em>). Dans un courriel formel, <em>Sollten Sie ...</em> sonne tout de suite professionnel."
      }
    ],
    grammar: {
      title: "falls, sofern, es sei denn et la condition sans wenn",
      note: "<b>falls, sofern</b> : verbe à la fin. <b>es sei denn,</b> + proposition avec le verbe en deuxième position. <b>Sans wenn</b> : verbe conjugué en tête (<b>Hätte ich ..., Sollten Sie ...</b>).",
      table: {
        head: ["", "exemple", "français"],
        rows: [
          ["falls", "Falls du Hilfe brauchst, ruf mich an.", "au cas où, si jamais"],
          ["sofern", "Sofern nichts dazwischenkommt, ...", "pourvu que, dans la mesure où"],
          ["es sei denn", "..., es sei denn, es schneit.", "à moins que"],
          ["sans wenn", "Sollten Sie Fragen haben, ...", "si vous aviez ..."]
        ]
      },
      examples: [
        { tr: "Si jamais tu as besoin d'aide, appelle-moi.", note: "falls : condition possible, indicatif" },
        { tr: "Sauf imprévu, nous serons là à huit heures.", note: "sofern : soutenu ; dazwischenkommen = survenir (un imprévu)" },
        { tr: "Nous partons demain, à moins qu'il ne neige.", note: "es sei denn : pas de ne explétif, indicatif" },
        { tr: "Si j'avais su, je serais venu.", note: "sans wenn : verbe en tête" },
        { tr: "Pour toute question, n'hésitez pas à nous contacter.", note: "Sollten Sie ... : la formule des courriers" },
        { tr: "En cas d'urgence, appelez ce numéro.", note: "im Notfall : un nom à la place de la proposition" }
      ]
    },
    vocab: [
      "l'urgence",
      "l'exception",
      "la condition préalable",
      "le doute (im Zweifel : dans le doute)",
      "la demande (de renseignements)",
      "survenir (un imprévu)",
      "s'adresser à",
      "prévenir, informer",
      "annuler, décommander",
      "reporter, décaler",
      "le cas échéant",
      "à condition que"
    ],
    exercises: [
      {
        q: "Comment dit-on « Nous allons nous promener, à moins qu'il ne pleuve » ?",
        opts: [
          "Wir gehen spazieren, es sei denn, es regnet.",
          "Wir gehen spazieren, es sei denn, es regnet nicht.",
          "Wir gehen spazieren, es sei denn, regnet es."
        ],
        why: "<b>es sei denn</b> signifie déjà « à moins que » et n'a pas de <i>ne</i> explétif (avec <i>nicht</i>, la condition serait l'inverse) ; il est suivi d'une proposition avec le verbe en deuxième position : <i>es regnet</i>."
      },
      {
        q: "Quelle phrase convient le mieux à un courriel formel ?",
        opts: [
          "Sollten Sie Fragen haben, wenden Sie sich bitte an uns.",
          "Wenn du Fragen hast, frag einfach.",
          "Falls du was wissen willst, sag Bescheid."
        ],
        why: "<b>Sollten Sie ...</b> en tête, avec <i>Sie</i> et <i>sich wenden an</i>, est la formule des lettres et des courriels professionnels. Les deux autres tutoient et sont familières."
      },
      {
        q: "Complétez : « ___ du Hilfe brauchst, ruf mich an. » (si jamais, pas wenn)",
        hint: "conjonction pour une condition possible",
        why: "<b>Falls</b> : il présente la condition comme possible mais pas certaine, et renvoie le verbe <i>brauchst</i> à la fin."
      },
      {
        q: "Complétez sans wenn : « ___ ich das gewusst, wäre ich gekommen. »",
        hint: "verbe en tête, Konjunktiv II de haben",
        why: "<b>Hätte</b> : sans <i>wenn</i>, le verbe conjugué ouvre la proposition, et la principale commence par <i>wäre</i>."
      },
      {
        q: "Complétez la phrase.",
        tr: "Nous partons demain, à moins qu'il ne neige.",
        why: "<i>es sei denn</i> est une formule figée : deux mots après <i>es</i>, puis une virgule et une proposition avec le verbe en deuxième position."
      },
      {
        q: "Associez chaque expression à son sens.",
        pairs: [
          "au cas où, si jamais",
          "pourvu que, dans la mesure où",
          "à moins que",
          "le cas échéant"
        ]
      },
      {
        q: "Remettez les mots dans l'ordre.",
        tr: "Pour toute question, n'hésitez pas à nous contacter.",
        why: "<i>Sollten Sie Fragen haben, wenden Sie sich bitte an uns.</i> <i>Sollten</i> ouvre la condition, <i>haben</i> la ferme ; la principale commence par le verbe <i>wenden</i>."
      },
      {
        q: "Traduisez sans wenn : « Si j'avais su, je serais venu. »",
        why: "<i>Hätte ich das gewusst, wäre ich gekommen</i>. On peut ajouter <i>dann</i> : <i>Hätte ich das gewusst, dann wäre ich gekommen</i>."
      },
      {
        tr: "S'il devait neiger demain, nous reporterions le voyage. Pour toute question, adressez-vous à la réception.",
        why: "Dans <i>schneien</i>, le <b>sch</b> se prononce <i>ch</i> et le <b>ei</b> <i>aï</i> ; dans <i>verschieben</i>, le <b>v</b> se prononce [f] ; dans <i>Rezeption</i>, le <b>tion</b> se prononce [tsi̯oːn]."
      },
      {
        tr: "Sauf imprévu, nous serons là à huit heures.",
        why: "Dans <i>dazwischenkommt</i>, le <b>z</b> se prononce [ts] et le <b>sch</b> <i>ch</i> ; dans <i>acht</i>, le <b>ch</b> après <i>a</i> est le son dur [x], au fond de la gorge ; dans <i>Uhr</i>, le <b>h</b> allonge le <i>u</i> (prononcé <i>ou</i>)."
      }
    ]
  },
  "lesson:b2-u02-l3": {
    theme: "Souhaits et regrets",
    title: "Si seulement ...",
    objectives: [
      "exprimer un souhait irréel avec wenn ... bloß / nur / doch",
      "exprimer un regret avec le verbe en tête",
      "rendre un ordre plus insistant avec bloß",
      "comprendre nur dans un système hypothétique complet (Wenn du nur ..., würdest du ...)"
    ],
    theory: [
      {
        h: "Les souhaits irréels",
        p: "Un souhait présenté comme éloigné de la réalité actuelle, ou un regret sur le passé, a la forme d'une condition sans conséquence, avec le <strong>Konjunktiv II</strong> et une particule : <strong>bloß</strong>, <strong>nur</strong> ou <strong>doch</strong>. Avec <em>wenn</em>, le verbe va à la fin : <em>Wenn ich bloß mehr Zeit hätte!</em> Sans <em>wenn</em>, le verbe se place en tête : <em>Hätte ich nur nicht so viel gegessen! Wäre ich doch zu Hause geblieben!</em> Pour le présent, on emploie aussi <em>würde</em> : <em>Wenn es doch endlich regnen würde!</em>"
      },
      {
        h: "bloß dans les ordres, nur dans la condition",
        p: "Dans un ordre, <strong>bloß</strong> le rend plus insistant, presque menaçant : <em>Mach das bloß nicht!</em> (ne t'avise pas de faire ça). Dans un système hypothétique complet, avec une conséquence, <strong>nur</strong> peut restreindre ce qui suit ou renforcer le souhait : <em>Wenn du nur ein bisschen Geduld hättest, würdest du es schaffen</em> peut se rendre par « il suffirait d'un peu de patience et tu y arriverais »."
      },
      {
        contrast: "Le français dit <em>si seulement j'avais plus de temps !</em> avec l'imparfait de l'indicatif, et <em>si seulement j'étais resté à la maison !</em> avec le plus-que-parfait. L'allemand passe au Konjunktiv II : <em>Wenn ich bloß mehr Zeit hätte! Wäre ich doch zu Hause geblieben!</em> Et la particule ne se place pas en tête comme <em>seulement</em> après <em>si</em> : elle va à l'intérieur de la proposition, en général après le sujet et les pronoms et avant la négation : <em>Hätte ich nur nicht so viel gegessen! Wenn du es mir bloß früher gesagt hättest!</em> La place exacte dépend aussi de ce qu'on veut mettre en relief."
      },
      {
        trap: "Ici, <em>nur</em> et <em>bloß</em> ne veulent pas dire <em>seulement</em> au sens de « rien d'autre » : <em>Wenn ich bloß mehr Zeit hätte!</em> ne signifie pas « si j'avais uniquement plus de temps » mais « si seulement j'avais plus de temps ». Et le <em>doch</em> d'un souhait n'est pas celui des réponses (<em>Doch!</em>, si) : il renforce le souhait."
      },
      {
        tip: "Les trois particules sont presque interchangeables dans les souhaits ; <em>doch</em> renforce le souhait ou le regret comme les autres, et le choix dépend du contexte et de l'intonation plus que du registre. Pour ne pas vous tromper d'ordre, écrivez d'abord la proposition sans particule, puis placez-la après le sujet et les pronoms."
      }
    ],
    grammar: {
      title: "Souhaits irréels : wenn ... bloß / nur / doch + Konjunktiv II",
      note: "<b>Wenn</b> + particule + verbe à la fin, ou verbe en <b>tête</b> + particule. La particule se place à l'intérieur de la proposition, en général après le sujet et les pronoms et avant <i>nicht</i>.",
      table: {
        head: ["", "présent", "passé"],
        rows: [
          ["avec wenn", "Wenn ich bloß mehr Zeit hätte!", "Wenn ich bloß früher gekommen wäre!"],
          ["sans wenn", "Hätte ich nur mehr Zeit!", "Wäre ich doch früher gekommen!"],
          ["avec würde", "Wenn es doch endlich regnen würde!", "-"]
        ]
      },
      examples: [
        { tr: "Si seulement j'avais plus de temps !", note: "wenn + bloß, verbe à la fin" },
        { tr: "Si seulement je n'avais pas tant mangé !", note: "verbe en tête, nur avant nicht" },
        { tr: "Si seulement j'étais resté à la maison !", note: "doch : souhait portant sur le passé" },
        { tr: "Si seulement il pouvait enfin pleuvoir !", note: "würde + infinitif au présent" },
        { tr: "Ne t'avise pas de faire ça !", note: "bloß dans un ordre : ton menaçant" },
        { tr: "Il suffirait d'un peu de patience et tu y arriverais.", note: "nur dans un système hypothétique complet : restreint ce qui suit" }
      ]
    },
    vocab: [
      "la patience",
      "la malchance (So ein Pech! : quelle malchance !)",
      "le hasard, la coïncidence",
      "le destin",
      "le souci",
      "la contrariété, les ennuis",
      "s'énerver, se fâcher",
      "espérer",
      "aspirer à, se languir de (nach + datif)",
      "enfin",
      "absolument, à tout prix",
      "en vain"
    ],
    exercises: [
      {
        q: "Comment dit-on « Si seulement j'avais plus de temps ! » ?",
        opts: [
          "Wenn ich bloß mehr Zeit hätte!",
          "Wenn ich bloß mehr Zeit habe!",
          "Wenn ich bloß hätte mehr Zeit!"
        ],
        why: "Le souhait irréel demande le Konjunktiv II (<b>hätte</b>) à la fin de la proposition en <i>wenn</i>. La deuxième est à l'indicatif, comme le français ; la troisième ne renvoie pas le verbe à la fin, comme l'exige <i>wenn</i>."
      },
      {
        q: "Que signifie « Mach das bloß nicht! » ?",
        opts: [
          "Ne t'avise pas de faire ça !",
          "Fais-le une seule fois.",
          "Ne fais pas seulement ça."
        ],
        why: "Dans un ordre, <b>bloß</b> rend l'interdiction insistante, presque menaçante. Il ne signifie pas <i>seulement</i>."
      },
      {
        q: "Complétez avec une particule : « Hätte ich ___ nicht so viel gegessen! »",
        hint: "particule du regret, avant nicht",
        why: "<b>nur</b>, <b>bloß</b> ou <b>doch</b> : les trois renforcent le regret et se placent avant <i>nicht</i>."
      },
      {
        q: "Complétez : « ___ ich doch zu Hause geblieben! »",
        hint: "verbe en tête, Konjunktiv II de sein",
        why: "<b>Wäre</b> : <i>bleiben</i> prend <i>sein</i>, et sans <i>wenn</i> le verbe conjugué ouvre la proposition."
      },
      {
        q: "Complétez la phrase.",
        tr: "Si seulement il pouvait enfin pleuvoir !",
        why: "<i>Wenn es doch endlich regnen würde!</i> Au présent, <i>würde</i> + infinitif est fréquent ; <i>würde</i> termine la proposition en <i>wenn</i>."
      },
      {
        q: "Associez chaque expression à son sens.",
        pairs: [
          "Si seulement ... !",
          "enfin",
          "absolument, à tout prix",
          "en vain"
        ]
      },
      {
        q: "Remettez les mots dans l'ordre.",
        tr: "Si seulement je n'avais pas tant mangé !",
        why: "<i>Hätte ich nur nicht so viel gegessen!</i> Verbe en tête, puis le sujet, la particule <i>nur</i>, la négation et le participe à la fin."
      },
      {
        q: "Traduisez : « Si seulement tu me l'avais dit plus tôt ! »",
        why: "<i>Wenn du es mir bloß früher gesagt hättest!</i> ou <i>Hättest du es mir bloß früher gesagt!</i> <i>nur</i> et <i>doch</i> conviennent aussi à la place de <i>bloß</i>."
      },
      {
        tr: "Si seulement je n'avais pas attendu si longtemps ! Maintenant, l'appartement est déjà pris. Quelle malchance.",
        why: "Dans <i>bloß</i>, le <b>o</b> est long ; dans <i>gewartet</i>, le <b>w</b> se prononce [v] ; dans <i>Pech</i>, le <b>ch</b> après <i>e</i> est le son doux [ç]."
      },
      {
        tr: "Si seulement j'avais eu un peu plus de patience !",
        why: "Dans <i>Geduld</i>, l'accent tombe sur <b>duld</b> ; dans <i>bisschen</i>, le <b>s</b> et le <b>ch</b> se prononcent séparément, [sç] ; dans <i>gehabt</i>, le <b>b</b> devant <i>t</i> se prononce [p]."
      }
    ]
  },
  "lesson:b2-u02-test": {
    theme: "Évaluation",
    title: "Test : Conditions",
    objectives: [
      "vérifier les types de système hypothétique, falls, es sei denn et la condition sans wenn"
    ],
    theory: [
      {
        p: "Dix questions sur toute l'unité. On réussit avec 70 %. Ne regardez pas les leçons pendant que vous répondez : si vous ne vous souvenez plus de quelque chose, mieux vaut retourner réviser."
      }
    ],
    exercises: [
      {
        q: "Complétez : « Wenn er früher losgefahren ___, hätte er den Zug erreicht. »",
        hint: "Konjunktiv II de sein, er",
        why: "<b>Wäre</b> : <i>losfahren</i> prend <i>sein</i>, et le Konjunktiv II passé termine la proposition en <i>wenn</i>."
      },
      {
        q: "Complétez : « Wir kommen, es sei denn, es ___ etwas dazwischen. »",
        hint: "dazwischenkommen, présent de l'indicatif",
        why: "<b>kommt</b> : après <i>es sei denn</i> vient une principale à l'indicatif, avec le verbe en deuxième position et la particule <i>dazwischen</i> à la fin."
      },
      {
        q: "Complétez la formule soutenue : « ___ Sie Fragen haben, wenden Sie sich an uns. »",
        hint: "verbe de modalité en tête",
        why: "<b>Sollten</b> : la condition sans <i>wenn</i> des courriers formels, avec <i>haben</i> à la fin."
      },
      {
        q: "Quelle phrase est un irréel du passé ?",
        opts: [
          "Wenn sie angerufen hätte, wäre ich gekommen.",
          "Wenn sie anruft, komme ich.",
          "Wenn sie anrufen würde, käme ich."
        ],
        why: "Seule la première est au Konjunktiv II passé (<i>angerufen hätte</i>, <i>wäre gekommen</i>). La deuxième est ouverte, la troisième un irréel du présent."
      },
      {
        q: "Quelle phrase signifie « Je viens demain, à moins que je ne sois malade » ?",
        opts: [
          "Ich komme morgen, es sei denn, ich bin krank.",
          "Ich komme morgen, es sei denn, ich bin nicht krank.",
          "Ich komme morgen, es sei denn, ich krank bin."
        ],
        why: "<i>es sei denn</i> : pas de <i>ne</i> explétif et le verbe en deuxième position (<i>ich bin krank</i>). Avec <i>nicht</i>, la condition serait l'inverse."
      },
      {
        q: "Complétez avec une conséquence qui porte sur le présent (système mixte) : « Hätte ich gestern nicht so viel gearbeitet, ... »",
        opts: [
          "wäre ich jetzt nicht so müde.",
          "wäre ich jetzt nicht so müde gewesen.",
          "bin ich jetzt nicht so müde."
        ],
        why: "Cas mixte : la condition est passée, la conséquence porte sur le présent (<i>jetzt</i>), donc Konjunktiv II présent : <b>wäre ... müde</b>."
      },
      {
        q: "Complétez la phrase.",
        tr: "Si j'avais plus de temps, je ferais du sport plus souvent.",
        why: "<i>Wenn ich mehr Zeit hätte, würde ich öfter Sport machen</i> : irréel du présent, <i>hätte</i> à la fin et <i>würde</i> au début de la principale."
      },
      {
        q: "Complétez la phrase sans wenn.",
        tr: "Si j'avais su, je t'aurais aidé.",
        why: "<i>Hätte ich das gewusst, hätte ich dir geholfen</i> : le premier <i>hätte</i> ouvre la condition, le second ouvre la principale."
      },
      {
        tr: "Si tu as le temps demain, passe me voir. Si j'avais su que tu étais en ville, je t'aurais appelé dès hier.",
        why: "Dans <i>vorbei</i>, le <b>v</b> se prononce [f] ; dans <i>Stadt</i>, le <b>dt</b> final se prononce [t] ; dans <i>angerufen</i>, l'accent tombe sur <b>an</b>."
      },
      {
        tr: "Si vous étiez empêché, veuillez annuler à temps.",
        why: "Dans <i>verhindert</i>, le <b>v</b> se prononce [f] ; dans <i>rechtzeitig</i>, le <b>ch</b> est [ç] et le <b>z</b> se prononce [ts] ; dans <i>absagen</i>, le <b>b</b> devant <i>s</i> se prononce [p]."
      }
    ]
  },
  "unit:b2-u03": {
    title: "Passif et temps du récit",
    grammarNote: "passif au Perfekt et au Plusquamperfekt (ist gebaut worden) · passif avec les verbes de modalité (muss ausgefüllt werden) · passif d'état (ist geschlossen) · Präteritum du récit · ohne ... zu, statt ... zu, ohne dass, anstatt dass"
  },
  "lesson:b2-u03-l1": {
    theme: "Histoire et procédés techniques",
    title: "Il a été construit, il a été réparé",
    objectives: [
      "former le passif au Perfekt et au Plusquamperfekt avec worden",
      "employer le passif avec un verbe de modalité",
      "distinguer le passif d'action (wird geschlossen) du passif d'état (ist geschlossen)",
      "raconter l'histoire d'un bâtiment ou d'une invention"
    ],
    theory: [
      {
        h: "Le passif au Perfekt",
        p: "Au Perfekt, le passif se forme avec <strong>sein</strong> + participe II + <strong>worden</strong> : <em>Die Brücke ist letztes Jahr renoviert worden</em> (le pont a été rénové l'an dernier). Au Plusquamperfekt, <em>sein</em> passe au Präteritum : <em>Der Fehler war schon vorher entdeckt worden</em> (l'erreur avait déjà été découverte). Dans les textes écrits et en histoire, on emploie aussi beaucoup le Präteritum : <em>Das Rathaus wurde im sechzehnten Jahrhundert gebaut.</em>"
      },
      {
        h: "Avec les verbes de modalité, et le passif d'état",
        p: "Avec un <strong>verbe de modalité</strong>, on conjugue le modal et le passif reste à l'infinitif, participe + <em>werden</em>, à la fin : <em>Das Formular muss bis Freitag ausgefüllt werden. Die Daten konnten nicht gespeichert werden.</em> Le <strong>passif d'état</strong> (Zustandspassiv) se forme avec <strong>sein</strong> + participe et décrit le résultat d'une action : <em>Das Geschäft ist sonntags geschlossen.</em> Le passif d'action, avec <em>werden</em>, décrit l'action elle-même : <em>Das Geschäft wird um acht geschlossen.</em>"
      },
      {
        contrast: "Le français construit le passif avec <em>être</em> pour l'action comme pour l'état : <em>le magasin est fermé</em> peut décrire un état ou une habitude (<em>est fermé à huit heures</em>). L'allemand sépare toujours : <em>werden</em> pour l'action, <em>sein</em> pour l'état. Au passé composé, <em>a été construit</em> contient <em>avoir</em>, mais l'allemand emploie <em>sein</em> : <em>ist gebaut worden</em>, jamais <em>hat gebaut worden</em>. Et là où le français dit <em>on fabrique des voitures</em>, l'allemand écrit volontiers un passif : <em>Autos werden hergestellt</em>."
      },
      {
        trap: "Au passif, le participe de <em>werden</em> est <strong>worden</strong>, sans <em>ge-</em> : <em>ist gebaut worden</em>, et non <em>ist gebaut geworden</em>. <em>Geworden</em> est le participe de <em>werden</em> au sens de « devenir » : <em>Er ist Arzt geworden.</em> Et <em>a été construit</em> ne se dit pas <em>ist gebaut gewesen</em> : <em>gewesen</em> n'a rien à faire ici, malgré le <em>été</em> français."
      },
      {
        tip: "Pour choisir entre <em>werden</em> et <em>sein</em>, demandez-vous : quelque chose est-il en train de se passer, ou est-ce que je décris un état ? <em>Die Tür wird geöffnet</em> : quelqu'un l'ouvre. <em>Die Tür ist geöffnet</em> : elle est ouverte."
      }
    ],
    grammar: {
      title: "Le passif : Perfekt, verbes de modalité, passif d'état",
      note: "<b>Perfekt</b> : ist + participe + <b>worden</b>. <b>Plusquamperfekt</b> : war + participe + worden. <b>Avec un modal</b> : modal + participe + werden. <b>État</b> : sein + participe.",
      table: {
        head: ["", "exemple", "français"],
        rows: [
          ["Präteritum", "Das Haus wurde 1900 gebaut.", "la maison fut construite"],
          ["Perfekt", "Das Haus ist 1900 gebaut worden.", "la maison a été construite en 1900"],
          ["Plusquamperfekt", "Das Haus war schon gebaut worden.", "la maison avait déjà été construite"],
          ["avec un modal", "Das Haus muss renoviert werden.", "la maison doit être rénovée"],
          ["passif d'état", "Das Haus ist renoviert.", "la maison est rénovée"]
        ]
      },
      examples: [
        { tr: "L'hôtel de ville fut construit au seizième siècle.", note: "Präteritum : typique des textes historiques" },
        { tr: "Le pont a été rénové l'an dernier.", note: "Perfekt : ist + participe + worden" },
        { tr: "L'erreur avait déjà été découverte auparavant.", note: "Plusquamperfekt : war + participe + worden" },
        { tr: "Le formulaire doit être rempli d'ici vendredi.", note: "modal + participe + werden" },
        { tr: "Les données n'ont pas pu être enregistrées.", note: "konnten ... gespeichert werden : modal au Präteritum" },
        { tr: "Le magasin est fermé le dimanche.", note: "passif d'état : sein + participe" }
      ]
    },
    vocab: [
      "le siècle",
      "le bâtiment",
      "le pont",
      "l'ouvrage, l'édifice",
      "l'invention",
      "le procédé, la procédure",
      "ériger, édifier",
      "détruire",
      "inventer",
      "produire, fabriquer",
      "découvrir",
      "rénover"
    ],
    exercises: [
      {
        q: "Comment dit-on « Le pont a été rénové » ?",
        opts: [
          "Die Brücke ist renoviert worden.",
          "Die Brücke ist renoviert geworden.",
          "Die Brücke hat renoviert worden."
        ],
        why: "Passif au Perfekt : <b>ist</b> + participe + <b>worden</b>. <i>Geworden</i> est le participe de <i>werden</i> au sens de « devenir », et l'auxiliaire est <i>sein</i>, pas <i>haben</i>, malgré le <i>a</i> français."
      },
      {
        q: "Quelle phrase décrit un état, « Le magasin est fermé » ?",
        opts: [
          "Das Geschäft ist geschlossen.",
          "Das Geschäft wird geschlossen.",
          "Das Geschäft ist geschlossen worden."
        ],
        why: "L'état s'exprime avec <b>sein</b> + participe. <i>Wird geschlossen</i> décrit l'action de fermer, <i>ist geschlossen worden</i> une fermeture qui a eu lieu dans le passé."
      },
      {
        q: "Comment dit-on « Le formulaire doit être rempli » ?",
        opts: [
          "Das Formular muss ausgefüllt werden.",
          "Das Formular muss ausfüllen werden.",
          "Das Formular wird ausgefüllt müssen."
        ],
        why: "Avec un modal : modal conjugué (<b>muss</b>) + participe + <b>werden</b> à la fin."
      },
      {
        q: "Complétez le passif au Perfekt : « Die Kirche ist 1890 gebaut ___. »",
        hint: "participe de werden au passif",
        why: "<b>worden</b> : au passif du Perfekt, le participe de <i>werden</i> perd son <i>ge-</i>."
      },
      {
        q: "Complétez au Plusquamperfekt : « Der Fehler ___ schon vorher entdeckt worden. »",
        hint: "Präteritum de sein",
        why: "<b>war</b> : le Plusquamperfekt du passif a <i>sein</i> au Präteritum, puis le participe et <i>worden</i>."
      },
      {
        q: "Complétez : « Die Daten konnten nicht gespeichert ___. »",
        hint: "infinitif passif",
        why: "<b>werden</b> : après un modal, le passif reste à l'infinitif, participe + <i>werden</i>."
      },
      {
        q: "Complétez la phrase.",
        tr: "On fabrique des voitures ici depuis 1950.",
        why: "<i>Hier werden seit 1950 Autos hergestellt</i> : le <i>on</i> français devient un passif avec <i>werden</i>, au pluriel parce que le sujet est <i>Autos</i>."
      },
      {
        q: "Traduisez : « La ville a été détruite pendant la guerre. »",
        why: "<i>Die Stadt ist im Krieg zerstört worden</i>, ou au Präteritum <i>Die Stadt wurde im Krieg zerstört</i>. <i>während des Krieges</i> convient aussi à la place de <i>im Krieg</i>."
      },
      {
        tr: "L'ancien hôtel de ville fut construit au seizième siècle. Pendant la guerre, il a été presque entièrement détruit, mais il a ensuite été reconstruit à l'identique.",
        why: "Dans <i>Jahrhundert</i>, le <b>J</b> se prononce comme le <i>y</i> de <i>yeux</i> ; dans <i>vollständig</i>, le <b>v</b> se prononce [f] et le <b>-ig</b> final [ɪç] ; dans <i>originalgetreu</i>, le <b>eu</b> se prononce [ɔʏ], proche de <i>oy</i>."
      },
      {
        tr: "Le pont a été rénové l'an dernier et il est de nouveau ouvert.",
        why: "Dans <i>Brücke</i>, le <b>ü</b> bref se prononce [ʏ], plus ouvert que le <i>u</i> français, lèvres arrondies ; dans <i>renoviert</i>, le <b>v</b> se prononce [v], car le mot vient du latin ; dans <i>geöffnet</i>, le <b>ö</b> est bref et arrondi."
      }
    ]
  },
  "lesson:b2-u03-l2": {
    theme: "Récits",
    title: "Le Präteritum dans le récit",
    objectives: [
      "raconter une histoire au Präteritum",
      "conjuguer au Präteritum les verbes forts les plus fréquents",
      "employer le Plusquamperfekt pour ce qui s'était passé avant",
      "reconnaître le style des contes (Es war einmal ...)"
    ],
    theory: [
      {
        h: "Le temps du récit écrit",
        p: "Dans les contes, les romans, les biographies et les articles de presse, le passé se raconte au <strong>Präteritum</strong> : <em>Es war einmal ein armer Müller. Plötzlich klingelte das Telefon. Sie stand auf und ging zum Fenster.</em> Les verbes faibles prennent <em>-te</em> (<em>klingelte, erzählte</em>) ; les verbes forts changent de voyelle et n'ont pas de terminaison à la première et à la troisième personne du singulier (<em>ich lief, er lief</em>). Ce qui s'était passé avant se dit au <strong>Plusquamperfekt</strong> : <em>Als sie ankam, war der Zug schon abgefahren.</em>"
      },
      {
        h: "Les verbes forts à reconnaître",
        p: "Dans les récits reviennent toujours les mêmes verbes forts : <em>gehen → ging, kommen → kam, stehen → stand, sitzen → saß, liegen → lag, laufen → lief, rufen → rief, ziehen → zog, treffen → traf, finden → fand, schreiben → schrieb, erschrecken → erschrak</em>. Le Perfekt apparaît surtout dans les paroles des personnages, car c'est le temps habituel de l'oral : <em>„Ich habe einen Traum gehabt“, sagte sie.</em>"
      },
      {
        contrast: "Le français écrit sépare le passé simple (<em>elle se leva</em>) de l'imparfait (<em>elle était assise</em>) ; l'allemand n'a qu'un Präteritum : <em>Sie saß am Fenster</em> (elle était assise à la fenêtre) et <em>Plötzlich stand sie auf</em> (soudain, elle se leva). Ce sont le contexte et les adverbes (<em>plötzlich, immer, jeden Tag</em>) qui font la différence. Et le Präteritum n'a pas le caractère littéraire du passé simple : il est fréquent dans les récits littéraires et journalistiques, tandis que les récits personnels ou informels emploient aussi le Perfekt."
      },
      {
        trap: "Les formes fortes ne se déduisent pas de l'infinitif par une règle : apprenez-les avec le participe (<em>laufen, lief, gelaufen</em> ; <em>ziehen, zog, gezogen</em>). Attention à <em>erschrecken</em> : au sens de « prendre peur », il est fort (<em>sie erschrak</em>) ; au sens de « faire peur à quelqu'un », il est faible (<em>er erschreckte das Kind</em>)."
      },
      {
        tip: "Lire un conte des frères Grimm est le moyen le plus rapide de fixer le Präteritum : presque chaque phrase en contient un, et les formes fortes reviennent sans cesse."
      }
    ],
    grammar: {
      title: "Präteritum et Plusquamperfekt dans le récit",
      note: "<b>Verbes faibles</b> : radical + <i>-te</i> (klingelte). <b>Verbes forts</b> : changement de voyelle, sans terminaison avec ich et er (lief, zog). <b>Plusquamperfekt</b> : hatte / war + participe, pour ce qui s'est passé avant.",
      table: {
        head: ["infinitif", "Präteritum (er)", "Perfekt (er)"],
        rows: [
          ["klingeln", "klingelte", "hat geklingelt"],
          ["laufen", "lief", "ist gelaufen"],
          ["ziehen", "zog", "hat gezogen"],
          ["treffen", "traf", "hat getroffen"],
          ["erschrecken (prendre peur)", "erschrak", "ist erschrocken"]
        ]
      },
      examples: [
        { tr: "Il était une fois un pauvre meunier.", note: "Es war einmal : le début des contes" },
        { tr: "Soudain, le téléphone sonna.", note: "verbe faible : klingelte" },
        { tr: "Elle se leva et alla à la fenêtre.", note: "verbes forts : stand, ging" },
        { tr: "Il courait aussi vite qu'il pouvait.", note: "lief : Präteritum de laufen" },
        { tr: "Quand elle arriva, le train était déjà parti.", note: "Plusquamperfekt pour ce qui s'était passé avant" },
        { tr: "Personne ne savait qui avait écrit la lettre.", note: "wusste (verbe mixte) et Plusquamperfekt hatte geschrieben" }
      ]
    },
    vocab: [
      "l'histoire, le récit",
      "le conte",
      "le héros",
      "le récit, la nouvelle",
      "le début",
      "la fin",
      "raconter",
      "arriver, se produire",
      "prendre peur, sursauter (erschrak, ist erschrocken)",
      "soudain",
      "à l'époque, autrefois",
      "finalement"
    ],
    exercises: [
      {
        tr: "Le Präteritum de laufen, à toutes les personnes.",
        why: "<i>lief, liefst, lief, liefen, lieft, liefen</i> : voyelle <i>ie</i>, pas de terminaison à la première et à la troisième personne du singulier."
      },
      {
        tr: "Le Präteritum de ziehen, à toutes les personnes.",
        why: "<i>zog, zogst, zog, zogen, zogt, zogen</i> : la voyelle devient <i>o</i> et le <i>h</i> disparaît."
      },
      {
        tr: "Le Präteritum de treffen, à toutes les personnes.",
        why: "<i>traf, trafst, traf, trafen, traft, trafen</i> : le double <i>f</i> devient simple après la voyelle longue <i>a</i>."
      },
      {
        q: "Quelle phrase emploie le temps habituel du récit écrit ?",
        opts: [
          "Sie stand auf und ging zum Fenster.",
          "Sie ist aufgestanden und zum Fenster gegangen.",
          "Sie steht auf und geht zum Fenster."
        ],
        why: "Le récit écrit emploie le <b>Präteritum</b> : <i>stand auf, ging</i>. Le Perfekt est le temps de l'oral ; le présent sert parfois à rendre le récit plus vivant, mais ce n'est pas le temps normal du récit."
      },
      {
        q: "Quel est le Präteritum de laufen (er) ?",
        opts: [
          "lief",
          "laufte",
          "lauf"
        ],
        why: "<i>laufen</i> est un verbe fort : <b>lief</b>. La forme faible <i>laufte</i> n'existe pas."
      },
      {
        q: "Complétez au Präteritum : « Plötzlich ___ das Telefon. » (klingeln)",
        hint: "verbe faible, er/es",
        why: "<b>klingelte</b> : verbe faible, radical <i>klingel-</i> + <i>-te</i>."
      },
      {
        q: "Complétez : « Als sie ankam, ___ der Zug schon abgefahren. » (était déjà parti)",
        hint: "Präteritum de sein",
        why: "<b>war</b> : le Plusquamperfekt de <i>abfahren</i> se forme avec <i>sein</i>, comme le français <i>était parti</i>."
      },
      {
        q: "Complétez avec laufen et können au Präteritum.",
        tr: "Il courait aussi vite qu'il pouvait.",
        why: "<i>Er lief, so schnell er konnte</i> : <i>lief</i> de <i>laufen</i>, <i>konnte</i> de <i>können</i>."
      },
      {
        q: "Traduisez au Präteritum : « Soudain, la lumière s'éteignit. »",
        why: "<i>Plötzlich ging das Licht aus</i> : <i>ausgehen</i> au Präteritum donne <i>ging ... aus</i>, avec la particule à la fin. <i>auf einmal</i> convient aussi."
      },
      {
        tr: "Il faisait déjà nuit quand il rentra chez lui. La porte était ouverte et personne ne répondait. Il prit peur et appela la police.",
        why: "Dans <i>dunkel</i>, le <b>u</b> (prononcé <i>ou</i>) est bref ; dans <i>erschrak</i>, le <b>sch</b> se prononce <i>ch</i> et le <b>a</b> est long ; dans <i>Polizei</i>, l'accent tombe sur la dernière syllabe, <b>zei</b>."
      },
      {
        tr: "À l'époque, il n'y avait pas encore internet, et nous nous écrivions de longues lettres.",
        why: "Dans <i>damals</i>, l'accent tombe sur <b>da</b> ; dans <i>schrieben</i>, le <b>ie</b> est long ; dans <i>Briefe</i>, le <b>ie</b> est de nouveau un <i>i</i> long."
      }
    ]
  },
  "lesson:b2-u03-l3": {
    theme: "Manières de faire",
    title: "Sans demander, au lieu d'attendre",
    objectives: [
      "employer ohne ... zu et statt ... zu avec le même sujet",
      "employer ohne dass et anstatt dass avec des sujets différents",
      "placer zu correctement avec les verbes séparables",
      "raconter comment quelqu'un a fait quelque chose"
    ],
    theory: [
      {
        h: "ohne ... zu, statt ... zu",
        p: "<strong>ohne ... zu</strong> (<em>sans</em> + infinitif) et <strong>statt / anstatt ... zu</strong> (<em>au lieu de</em> + infinitif) forment une proposition infinitive qui a le <strong>même sujet</strong> que la principale. <em>zu</em> + infinitif se place à la fin : <em>Er ging, ohne sich zu verabschieden. Statt zu warten, rief sie sofort an. Anstatt zu lernen, sieht er fern.</em> Avec un verbe séparable, <em>zu</em> se glisse entre la particule et le verbe : <em>ohne nachzudenken, statt fernzusehen</em>."
      },
      {
        h: "ohne dass, anstatt dass",
        p: "Si la seconde proposition a un sujet <strong>différent</strong>, l'infinitif est impossible : il faut <strong>ohne dass</strong> ou <strong>anstatt dass</strong> avec le verbe conjugué à la fin. <em>Er ging, ohne dass ich es merkte</em> (il partit sans que je m'en aperçoive). <em>Anstatt dass du alles allein machst, helfen wir dir</em> (au lieu de te laisser tout faire seul, nous t'aidons). La construction avec <em>dass</em> est possible aussi avec le même sujet (<em>Anstatt dass du hilfst, schaust du nur zu</em>), mais la forme avec <em>zu</em> est alors plus naturelle."
      },
      {
        contrast: "En français, l'infinitif suit directement la préposition (<em>sans dire au revoir</em>, <em>au lieu d'attendre</em>) ; en allemand, <em>zu</em> + infinitif va à la fin de la proposition, après tous les compléments : <em>ohne den Vertrag zu lesen</em>, <em>sans lire le contrat</em>. Et <em>sans que</em> veut le subjonctif (<em>sans que je m'en aperçoive</em>), alors qu'après <em>ohne dass</em> on trouve en général l'indicatif : <em>ohne dass ich es merkte</em> (le Konjunktiv II est possible mais plus rare : <em>ohne dass ich es bemerkt hätte</em>)."
      },
      {
        trap: "N'oubliez pas <em>zu</em> : <em>ohne sich verabschieden</em> est fautif, il faut <em>ohne sich zu verabschieden</em>. Et n'employez pas l'infinitif avec un sujet différent : <em>Er ging, ohne mich es zu merken</em> n'a pas de sens ; on dit <em>ohne dass ich es merkte</em>."
      },
      {
        tip: "Pour vérifier, pensez à <em>um ... zu</em>, que vous connaissez déjà : la construction est la même (<em>um zu lernen, ohne zu lernen, statt zu lernen</em>), seul le sens change."
      }
    ],
    grammar: {
      title: "ohne ... zu, statt ... zu, ohne dass, anstatt dass",
      note: "<b>Même sujet</b> : ohne / statt / anstatt + ... + <b>zu</b> + infinitif à la fin. <b>Sujet différent</b> : ohne dass / anstatt dass + verbe conjugué à la fin, en général à l'indicatif.",
      table: {
        head: ["", "même sujet", "sujet différent"],
        rows: [
          ["sans", "Er ging, ohne sich zu verabschieden.", "Er ging, ohne dass ich es merkte."],
          ["au lieu de", "Statt zu warten, rief sie an.", "Anstatt dass du alles allein machst, helfen wir dir."],
          ["verbe séparable", "..., ohne nachzudenken.", "..., ohne dass er nachdachte."]
        ]
      },
      examples: [
        { tr: "Il partit sans dire au revoir.", note: "ohne ... zu : même sujet" },
        { tr: "Au lieu d'attendre, elle appela tout de suite.", note: "statt ... zu en tête, puis le verbe de la principale" },
        { tr: "Elle a signé sans lire le contrat.", note: "zu + infinitif après tous les compléments" },
        { tr: "Au lieu d'étudier, il regarde la télévision.", note: "anstatt ... zu ; fernsehen est séparable" },
        { tr: "Il partit sans que je m'en aperçoive.", note: "ohne dass : sujet différent, en général à l'indicatif" },
        { tr: "Au lieu d'aider, tu te contentes de regarder.", note: "anstatt dass : possible aussi avec le même sujet" }
      ]
    },
    vocab: [
      "le contrat",
      "la permission, l'autorisation",
      "l'adieu, le départ",
      "le plan, le projet",
      "la signature",
      "signer",
      "prendre congé, dire au revoir",
      "regarder (sans intervenir)",
      "réfléchir (über + accusatif : à)",
      "remarquer",
      "tout simplement",
      "en cachette"
    ],
    exercises: [
      {
        q: "Comment dit-on « Il partit sans dire au revoir » ?",
        opts: [
          "Er ging, ohne sich zu verabschieden.",
          "Er ging, ohne zu verabschieden sich.",
          "Er ging, ohne sich verabschieden."
        ],
        why: "<b>ohne ... zu</b> + infinitif à la fin : <i>ohne sich zu verabschieden</i>. Le pronom réfléchi vient avant <i>zu</i>, et <i>zu</i> ne peut pas disparaître."
      },
      {
        q: "Comment dit-on « Il partit sans que je m'en aperçoive » ?",
        opts: [
          "Er ging, ohne dass ich es merkte.",
          "Er ging, ohne mich es zu merken.",
          "Er ging, ohne dass ich es merken."
        ],
        why: "Les sujets sont différents (<i>er</i>, <i>ich</i>), il faut donc <b>ohne dass</b> avec le verbe conjugué à la fin : <i>merkte</i>."
      },
      {
        q: "Complétez : « Sie hat unterschrieben, ohne den Vertrag ___ lesen. »",
        hint: "la particule de l'infinitif",
        why: "<b>zu</b> : <i>ohne ... zu lesen</i>, avec <i>zu</i> juste avant l'infinitif à la fin."
      },
      {
        q: "Complétez avec nachdenken : « Sie antwortete, ohne ___. »",
        hint: "verbe séparable avec zu",
        why: "<b>nachzudenken</b> : avec un verbe séparable, <i>zu</i> se place entre la particule <i>nach</i> et le verbe, en un seul mot."
      },
      {
        q: "Complétez : « ___ du hilfst, schaust du nur zu. » (au lieu de)",
        hint: "sujet exprimé : deux mots",
        why: "<b>Anstatt dass</b> (ou <i>Statt dass</i>) : la proposition a son propre sujet (<i>du hilfst</i>), donc pas d'infinitif mais <i>dass</i> avec le verbe à la fin."
      },
      {
        q: "Complétez la phrase.",
        tr: "Au lieu d'attendre, elle a appelé tout de suite.",
        why: "<i>Statt zu warten, rief sie sofort an</i> : la proposition infinitive occupe la première place, le verbe <i>rief</i> suit donc immédiatement ; la particule <i>an</i> va à la fin."
      },
      {
        q: "Remettez les mots dans l'ordre.",
        tr: "Au lieu d'étudier, il regarde la télévision toute la journée.",
        why: "<i>Anstatt zu lernen, sieht er den ganzen Tag fern.</i> La proposition en <i>anstatt</i> vient en tête, le verbe <i>sieht</i> juste après, la particule <i>fern</i> à la fin."
      },
      {
        q: "Traduisez : « Il a signé le contrat sans le lire. »",
        why: "<i>Er hat den Vertrag unterschrieben, ohne ihn zu lesen</i>. Le Präteritum <i>unterschrieb</i> convient aussi, tout comme <i>ohne ihn gelesen zu haben</i>."
      },
      {
        tr: "Il a tout simplement démissionné sans en parler à personne. Au lieu de demander, il a décidé tout de suite.",
        why: "Dans <i>gekündigt</i>, le <b>ü</b> est bref et arrondi ; dans <i>jemandem</i>, le <b>j</b> se prononce comme le <i>y</i> de <i>yeux</i> ; dans <i>entschieden</i>, le <b>ie</b> est long."
      },
      {
        tr: "Au lieu d'attendre, nous devrions appeler tout de suite.",
        why: "Dans <i>anstatt</i>, l'accent tombe sur <b>statt</b> ; dans <i>sollten</i>, le <b>o</b> est bref ; dans <i>sofort</i>, l'accent tombe sur <b>fort</b>."
      }
    ]
  },
  "lesson:b2-u03-test": {
    theme: "Évaluation",
    title: "Test : Passif et temps du récit",
    objectives: [
      "vérifier le passif au Perfekt et avec les modaux, le Präteritum du récit et ohne ... zu"
    ],
    theory: [
      {
        p: "Dix questions sur toute l'unité. On réussit avec 70 %. Ne regardez pas les leçons pendant que vous répondez : si vous ne vous souvenez plus de quelque chose, mieux vaut retourner réviser."
      }
    ],
    exercises: [
      {
        tr: "Le Präteritum de finden, à toutes les personnes.",
        why: "<i>fand, fandest, fand, fanden, fandet, fanden</i> : après le <i>d</i>, on insère un <i>e</i> devant <i>-st</i> et <i>-t</i>."
      },
      {
        q: "Complétez : « Das Museum ist 1910 eröffnet ___. »",
        hint: "passif au Perfekt",
        why: "<b>worden</b> : <i>ist eröffnet worden</i>, passif au Perfekt."
      },
      {
        q: "Complétez : « Der Antrag muss bis Montag abgegeben ___. »",
        hint: "infinitif passif après un modal",
        why: "<b>werden</b> : modal + participe + <i>werden</i>."
      },
      {
        q: "Complétez au Präteritum : « Plötzlich ___ sie ein Geräusch. » (hören)",
        hint: "verbe faible, sie (elle)",
        why: "<b>hörte</b> : verbe faible, <i>hör-</i> + <i>-te</i>."
      },
      {
        q: "Complétez : « Er ging, ohne ein Wort ___ sagen. »",
        hint: "la particule de l'infinitif",
        why: "<b>zu</b> : <i>ohne ein Wort zu sagen</i>."
      },
      {
        q: "Comment dit-on « Le pont avait déjà été fermé » ?",
        opts: [
          "Die Brücke war schon gesperrt worden.",
          "Die Brücke ist schon gesperrt geworden.",
          "Die Brücke hatte schon gesperrt worden."
        ],
        why: "Le Plusquamperfekt du passif sans modal se forme avec <b>war</b> + participe + <b>worden</b>, et non avec <i>hatte</i>, malgré le <i>avait</i> français."
      },
      {
        q: "Quelle phrase est correcte ?",
        opts: [
          "Statt dass du hilfst, schaust du zu.",
          "Statt zu du hilfst, schaust du zu.",
          "Statt dass du helfen, schaust du zu."
        ],
        why: "Avec un sujet exprimé, il faut <b>statt dass</b> + le verbe conjugué à la fin : <i>du hilfst</i>."
      },
      {
        q: "Traduisez : « La lettre a été écrite hier. »",
        why: "<i>Der Brief ist gestern geschrieben worden</i>, ou au Präteritum <i>Der Brief wurde gestern geschrieben</i>."
      },
      {
        tr: "Le château fut construit au dix-huitième siècle. Par la suite, il a été transformé plusieurs fois, sans que son caractère change.",
        why: "Dans <i>Schloss</i>, le <b>o</b> est bref ; dans <i>achtzehnten</i>, le <b>ch</b> est [x], au fond de la gorge, et le <b>z</b> se prononce [ts] ; dans <i>Charakter</i>, le <b>Ch</b> initial se prononce [k]."
      },
      {
        tr: "Au lieu de discuter longtemps, nous avons tout simplement résolu le problème.",
        why: "Dans <i>diskutieren</i>, l'accent tombe sur <b>tie</b> ; dans <i>Problem</i>, l'accent tombe sur <b>blem</b> ; dans <i>gelöst</i>, le <b>ö</b> est long, proche du <i>eu</i> de <i>peu</i>."
      }
    ]
  },
  "unit:b2-u04": {
    title: "Société et débat",
    grammarNote: "déclinaison faible des masculins (der Kunde, den Kunden, des Kunden) · je ... desto / umso, immer + comparatif · einerseits ... andererseits, zwar ... aber · défendre une position au Konjunktiv II (Ich würde sagen ..., Es wäre besser, wenn ...)"
  },
  "lesson:b2-u04-l1": {
    theme: "Économie et travail",
    title: "Le client, du client",
    objectives: [
      "reconnaître les masculins de la déclinaison faible",
      "ajouter -n ou -en à tous les cas sauf au nominatif singulier",
      "employer Herr et Herrn dans les lettres et les courriels",
      "parler de clients, de collègues et de fournisseurs"
    ],
    theory: [
      {
        h: "Qu'est-ce que la n-Deklination",
        p: "Un groupe de noms <strong>masculins</strong> prend <strong>-n</strong> ou <strong>-en</strong> à tous les cas sauf au nominatif singulier : <em>der Kunde, den Kunden, dem Kunden, des Kunden</em>. Ce sont surtout des masculins en <strong>-e</strong> désignant des personnes ou des animaux (<em>der Kollege, der Experte, der Junge</em>) et des masculins d'origine étrangère en <strong>-ent, -ant, -ist, -at, -oge</strong> (<em>der Präsident, der Praktikant, der Lieferant, der Journalist</em>). Ces noms forment leur pluriel en <em>-n</em> ou <em>-en</em> : <em>die Kunden, die Präsidenten</em>."
      },
      {
        h: "Herr, Herrn",
        p: "<strong>Herr</strong> suit aussi cette déclinaison, avec <em>-n</em> au singulier et <em>-en</em> au pluriel. On le voit sans cesse dans les lettres et les courriels : <em>Sehr geehrter Herr Müller</em> (nominatif, dans la formule d'appel), mais <em>Ich habe Herrn Müller eine Mail geschrieben</em> (datif) et <em>Kennen Sie Herrn Müller?</em> (accusatif). <em>Meine Damen und Herren</em> est le pluriel."
      },
      {
        contrast: "Le français ne marque pas le cas sur le nom : <em>le client</em>, <em>Monsieur Müller</em> ne changent pas, qu'ils soient sujet, complément ou après une préposition. Ces masculins allemands changent, et le <em>-n</em> ressemble à un pluriel : <em>den Kunden</em> peut être un client (accusatif singulier) ou les clients (datif pluriel), avec le même article. C'est le cas exigé par le verbe qui tranche : <em>Ich rufe den Kunden an</em> (un client, accusatif), <em>Ich helfe den Kunden</em> (les clients, datif pluriel)."
      },
      {
        trap: "L'erreur la plus fréquente est d'oublier la terminaison : <em>Ich frage den Student</em> au lieu de <em>den Studenten</em>, <em>mit dem Kollege</em> au lieu de <em>mit dem Kollegen</em>. Les féminins ne suivent pas cette déclinaison (<em>die Kundin, der Kundin</em>), et tous les masculins non plus : <em>der Lehrer, den Lehrer</em>."
      },
      {
        tip: "Quand vous apprenez un masculin désignant une personne, regardez le génitif dans le dictionnaire : <em>der Kunde, -n, -n</em> signifie génitif <em>des Kunden</em>, pluriel <em>die Kunden</em>, et c'est le signe de la déclinaison faible."
      }
    ],
    grammar: {
      title: "La n-Deklination",
      note: "Masculins en <b>-e</b> (personnes, animaux) et masculins étrangers en <b>-ent, -ant, -ist, -at, -oge</b> : <b>-n / -en</b> à tous les cas sauf au nominatif singulier. Aussi <b>Herr → Herrn</b>.",
      table: {
        head: ["", "der Kunde", "der Präsident", "der Herr"],
        rows: [
          ["nominatif", "der Kunde", "der Präsident", "der Herr"],
          ["accusatif", "den Kunden", "den Präsidenten", "den Herrn"],
          ["datif", "dem Kunden", "dem Präsidenten", "dem Herrn"],
          ["génitif", "des Kunden", "des Präsidenten", "des Herrn"],
          ["pluriel", "die Kunden", "die Präsidenten", "die Herren"]
        ]
      },
      examples: [
        { tr: "Le client s'est plaint.", note: "nominatif : sans -n" },
        { tr: "Nous avons appelé le client tout de suite.", note: "accusatif : den Kunden" },
        { tr: "Je parle demain avec mon collègue.", note: "datif après mit : dem Kollegen" },
        { tr: "C'est le bureau du président.", note: "génitif : des Präsidenten, sans -s" },
        { tr: "Le stagiaire aide le journaliste.", note: "helfen + datif : dem Journalisten" },
        { tr: "J'ai écrit un courriel à M. Müller.", note: "Herrn au datif" }
      ]
    },
    vocab: [
      "le client",
      "le collègue",
      "le stagiaire",
      "le président",
      "le fournisseur",
      "l'expert",
      "l'entreprise, la société",
      "le chiffre d'affaires",
      "la commande, la mission (d'un client)",
      "se plaindre (über + accusatif : de)",
      "conseiller",
      "embaucher"
    ],
    exercises: [
      {
        q: "Comment dit-on « J'ai appelé le client » ?",
        opts: [
          "Ich habe den Kunden angerufen.",
          "Ich habe den Kunde angerufen.",
          "Ich habe dem Kunden angerufen."
        ],
        why: "<i>anrufen</i> se construit avec l'accusatif, et <i>Kunde</i> prend <b>-n</b> : <b>den Kunden</b>. La troisième emploie le datif, que <i>anrufen</i> n'exige pas."
      },
      {
        q: "Quel nom suit la déclinaison faible (den ...-en) ?",
        opts: [
          "der Student",
          "der Lehrer",
          "die Studentin"
        ],
        why: "<b>der Student</b> est un masculin étranger en <i>-ent</i> : <i>den Studenten</i>. <i>der Lehrer</i> fait <i>den Lehrer</i> ; les féminins ne suivent pas cette déclinaison."
      },
      {
        q: "Complétez : « Ich spreche morgen mit dem ___. » (der Kollege)",
        hint: "datif après mit",
        why: "<b>Kollegen</b> : après <i>mit</i> vient le datif, et <i>Kollege</i> prend <i>-n</i>."
      },
      {
        q: "Complétez : « Das ist das Büro des ___. » (der Präsident)",
        hint: "génitif",
        why: "<b>Präsidenten</b> : au génitif, ces noms prennent <i>-en</i> et non le <i>-s</i> des masculins ordinaires."
      },
      {
        q: "Complétez la phrase avec der Journalist.",
        tr: "Le stagiaire aide le journaliste.",
        why: "<i>Der Praktikant hilft dem Journalisten</i> : <i>helfen</i> se construit avec le datif, et <i>Journalist</i> prend <i>-en</i>."
      },
      {
        q: "Associez chaque nom à son sens.",
        pairs: [
          "le client",
          "le fournisseur",
          "le stagiaire",
          "l'expert"
        ]
      },
      {
        q: "Remettez les mots dans l'ordre.",
        tr: "Nous avons demandé conseil à un expert.",
        why: "<i>Wir haben einen Experten um Rat gefragt.</i> <i>fragen</i> se construit avec l'accusatif : <i>einen Experten</i>, avec <i>-n</i> ; <i>um Rat</i> signifie « un conseil »."
      },
      {
        q: "Traduisez : « J'ai écrit un courriel à M. Müller. »",
        why: "<i>Ich habe Herrn Müller eine Mail geschrieben</i> : au datif, <i>Herr</i> devient <i>Herrn</i>. <i>E-Mail</i> convient aussi."
      },
      {
        tr: "Hier, un client s'est plaint du fournisseur. Notre collègue a rappelé le client tout de suite et l'a conseillé.",
        why: "Dans <i>beschwert</i>, le <b>sch</b> se prononce <i>ch</i> ; dans <i>Lieferanten</i>, l'accent tombe sur <b>ran</b> ; dans <i>zurückgerufen</i>, l'accent tombe sur <b>rück</b>."
      },
      {
        tr: "L'entreprise embauche un nouveau stagiaire.",
        why: "Dans <i>Firma</i>, le <b>i</b> est bref ; dans <i>Praktikanten</i>, l'accent tombe sur <b>kan</b> ; dans <i>stellt ... ein</i>, la particule <b>ein</b> va à la fin."
      }
    ]
  },
  "lesson:b2-u04-l2": {
    theme: "Environnement et technique",
    title: "Plus ..., plus ...",
    objectives: [
      "exprimer une proportion avec je ... desto / umso",
      "placer le verbe correctement dans les deux parties",
      "dire que quelque chose augmente ou diminue avec immer + comparatif",
      "parler de consommation, de déchets et d'énergie"
    ],
    theory: [
      {
        h: "je ... desto, je ... umso",
        p: "Pour dire que deux choses augmentent ou diminuent ensemble, on emploie <strong>je</strong> + comparatif dans la première partie et <strong>desto</strong> ou <strong>umso</strong> + comparatif dans la seconde. La partie en <em>je</em> est une subordonnée, verbe <strong>à la fin</strong> ; la partie en <em>desto</em> est la principale, et le verbe vient <strong>juste après</strong> le groupe du comparatif, qui peut contenir un nom : <em>Je mehr wir recyceln, desto weniger Müll gibt es. Je länger man wartet, umso teurer wird es. Je mehr Autos fahren, desto schlechter wird die Luft.</em>"
      },
      {
        h: "Formes brèves et immer + comparatif",
        p: "À l'oral, on emploie souvent la forme brève, sans verbe : <em>Je früher, desto besser.</em> Pour une progression continue, on emploie <strong>immer</strong> + comparatif : <em>Solarstrom wird immer billiger</em> (devient de moins en moins cher), <em>Die Winter werden immer wärmer.</em>"
      },
      {
        contrast: "Le français dit <em>plus nous recyclons, moins il y a de déchets</em>, avec l'ordre normal dans les deux parties. L'allemand emploie deux mots différents (<em>je ... desto</em>) et deux ordres différents : verbe à la fin dans la première partie, verbe juste après le groupe du comparatif dans la seconde. Et <em>de plus en plus cher</em> ne se calque pas : on dit <em>immer teurer</em>."
      },
      {
        trap: "Après <em>desto</em> ne vient pas le sujet : <em>desto weniger Müll gibt es</em>, et non <em>desto es gibt weniger Müll</em>. Et <em>je</em> et <em>desto</em> exigent un comparatif, pas l'adjectif simple : <em>je länger</em>, et non <em>je lang</em>."
      },
      {
        tip: "Voyez la phrase comme deux moitiés emboîtées : la première se termine par le verbe (<em>... wartet,</em>), la seconde commence par le groupe du comparatif puis le verbe (<em>umso teurer wird ...</em>, <em>desto weniger Müll gibt ...</em>)."
      }
    ],
    grammar: {
      title: "je ... desto / umso",
      note: "<b>je</b> + comparatif + ... + verbe à la fin, <b>desto / umso</b> + groupe du comparatif (éventuellement avec un nom) + verbe + sujet. Pour une progression continue : <b>immer</b> + comparatif.",
      table: {
        head: ["première partie (je ...)", "seconde partie (desto / umso ...)"],
        rows: [
          ["Je mehr wir recyceln,", "desto weniger Müll gibt es."],
          ["Je länger man wartet,", "umso teurer wird es."],
          ["Je weniger Energie wir verbrauchen,", "desto besser ist es für das Klima."],
          ["Je früher,", "desto besser."]
        ]
      },
      examples: [
        { tr: "Plus nous recyclons, moins il y a de déchets.", note: "je + verbe à la fin, desto + weniger Müll + verbe" },
        { tr: "Plus on attend, plus ça coûte cher.", note: "umso à la place de desto" },
        { tr: "Le plus tôt sera le mieux.", note: "forme brève sans verbe" },
        { tr: "Plus il y a de voitures, plus l'air devient mauvais.", note: "le nom suit directement le comparatif" },
        { tr: "L'électricité solaire devient de moins en moins chère.", note: "immer + comparatif" },
        { tr: "Moins nous consommons d'énergie, mieux c'est pour le climat.", note: "weniger : comparatif de wenig" }
      ]
    },
    vocab: [
      "l'environnement",
      "les déchets, les ordures",
      "l'énergie (erneuerbare Energien : énergies renouvelables)",
      "le changement climatique",
      "l'appareil",
      "l'émission",
      "protéger",
      "consommer",
      "économiser",
      "monter, augmenter",
      "baisser, diminuer",
      "durable, de façon durable"
    ],
    exercises: [
      {
        q: "Comment dit-on « Plus je lis, mieux je comprends » ?",
        opts: [
          "Je mehr ich lese, desto besser verstehe ich.",
          "Je mehr ich lese, desto ich verstehe besser.",
          "Je mehr lese ich, desto besser verstehe ich."
        ],
        why: "Dans la partie en <b>je</b>, le verbe va à la fin (<i>ich lese</i>) ; dans la partie en <b>desto</b>, le verbe vient juste après le comparatif (<i>besser verstehe ich</i>)."
      },
      {
        q: "Comment dit-on « Le plus tôt sera le mieux » ?",
        opts: [
          "Je früher, desto besser.",
          "Je früher, so besser.",
          "Desto früher, je besser."
        ],
        why: "La forme brève figée est <b>Je früher, desto besser</b> : <i>je</i> dans la première partie, <i>desto</i> dans la seconde."
      },
      {
        q: "Complétez : « Je länger man wartet, ___ teurer wird es. »",
        hint: "seconde partie de la proportion",
        why: "<b>desto</b> ou <b>umso</b> : les deux ouvrent la seconde partie, suivis du comparatif et du verbe."
      },
      {
        q: "Complétez : « Je mehr Autos fahren, desto schlechter ___ die Luft. » (devient)",
        hint: "werden, troisième personne",
        why: "<b>wird</b> : après <i>desto</i> + comparatif vient tout de suite le verbe, puis le sujet <i>die Luft</i>."
      },
      {
        q: "Complétez la phrase avec verbrauchen et sein.",
        tr: "Moins nous consommons d'énergie, mieux c'est pour le climat.",
        why: "<i>Je weniger Energie wir verbrauchen, desto besser ist es für das Klima</i> : <i>verbrauchen</i> à la fin de la première partie, <i>ist</i> juste après <i>besser</i>."
      },
      {
        q: "Associez chaque verbe à son sens.",
        pairs: [
          "monter, augmenter",
          "baisser, diminuer",
          "économiser",
          "protéger"
        ]
      },
      {
        q: "Remettez les mots dans l'ordre.",
        tr: "Plus nous recyclons, moins il y a de déchets.",
        why: "<i>Je mehr wir recyceln, desto weniger Müll gibt es.</i> <i>recyceln</i> à la fin de la première partie, <i>gibt es</i> après <i>weniger Müll</i>."
      },
      {
        q: "Traduisez : « Plus on attend, plus ça coûte cher. »",
        why: "<i>Je länger man wartet, desto teurer wird es</i> (ou <i>umso teurer</i>). <i>Plus on attend</i> concerne la durée, donc <i>länger</i> ; le <i>on</i> français devient <i>man</i>."
      },
      {
        tr: "Plus il y a de gens à vélo, plus l'air de la ville devient propre. En plus, ils économisent de l'argent.",
        why: "Dans <i>sauberer</i>, le <b>au</b> se prononce <i>aou</i> ; dans <i>Außerdem</i>, le <b>ß</b> est un <i>s</i> sourd ; dans <i>Fahrrad</i>, le <b>h</b> allonge le <i>a</i>."
      },
      {
        tr: "Plus tôt nous économisons l'énergie, mieux c'est pour l'environnement.",
        why: "Dans <i>Energie</i>, l'accent tombe sur la dernière syllabe, <b>gie</b>, et le <b>g</b> est dur, comme dans <i>gare</i> ; dans <i>Umwelt</i>, le <b>w</b> se prononce [v] ; dans <i>sparen</i>, le <b>sp</b> initial se prononce <i>chp</i>."
      }
    ]
  },
  "lesson:b2-u04-l3": {
    theme: "Discussions",
    title: "Défendre une position",
    objectives: [
      "présenter deux aspects avec einerseits ... andererseits",
      "concéder un point avec zwar ... aber",
      "exprimer une opinion avec prudence (Ich würde sagen ..., Es wäre besser, wenn ...)",
      "approuver ou contredire poliment"
    ],
    theory: [
      {
        h: "einerseits ... andererseits, zwar ... aber",
        p: "Pour présenter les deux faces d'une question, on emploie <strong>einerseits ... andererseits</strong> (<em>d'un côté ... de l'autre</em>). Les deux mots occupent la première place, le verbe vient donc juste après : <em>Einerseits ist das Homeoffice praktisch, andererseits fehlt der Kontakt zu den Kollegen.</em> Pour concéder un point puis le nuancer, on emploie <strong>zwar ... aber</strong> : <em>Zwar ist die Technik teuer, aber sie spart Zeit.</em> Après <em>aber</em>, l'ordre est normal (<em>aber sie spart</em>)."
      },
      {
        h: "Une opinion formulée avec prudence",
        p: "Dans une discussion, le <strong>Konjunktiv II</strong> rend l'opinion moins abrupte : <em>Ich würde sagen, dass die Vorteile überwiegen. Es wäre besser, wenn die Stadt mehr Radwege bauen würde. Man sollte das Problem anders lösen.</em> Pour approuver ou contredire : <em>Da stimme ich Ihnen zu. Da muss ich Ihnen widersprechen.</em> Pour donner son avis : <em>Meiner Ansicht nach ..., Ich bin der Meinung, dass ...</em>"
      },
      {
        contrast: "<em>D'un côté ... de l'autre</em> ne change pas l'ordre des mots en français ; <em>einerseits</em> et <em>andererseits</em> si, car ils occupent la première place. <em>Certes ..., mais ...</em> correspond à <em>zwar ..., aber ...</em>, beaucoup plus fréquent en allemand. Et <em>il vaudrait mieux que la ville construise</em>, avec le subjonctif, devient <em>es wäre besser, wenn die Stadt ... bauen würde</em>, avec le Konjunktiv II dans les deux parties."
      },
      {
        trap: "Après <em>andererseits</em>, le verbe vient tout de suite : <em>andererseits fehlt der Kontakt</em>, et non <em>andererseits der Kontakt fehlt</em>. Après <em>aber</em>, en revanche, pas d'inversion : <em>aber der Kontakt ist wichtig</em>, et non <em>aber ist der Kontakt wichtig</em>."
      },
      {
        tip: "Dans un débat, avant de contredire, reconnaissez un point de l'autre : <em>Da haben Sie zwar recht, aber ...</em> C'est plus convaincant qu'un non sec."
      }
    ],
    grammar: {
      title: "Connecteurs du débat et Konjunktiv II",
      note: "<b>einerseits / andererseits / zwar</b> en première place : verbe juste après. <b>aber</b> : pas d'inversion. Opinion prudente : <b>Ich würde sagen ..., Es wäre besser, wenn ...</b>",
      table: {
        head: ["fonction", "exemple"],
        rows: [
          ["deux aspects", "Einerseits ist es praktisch, andererseits ist es teuer."],
          ["concession", "Zwar ist es teuer, aber es lohnt sich."],
          ["opinion prudente", "Ich würde sagen, dass ..."],
          ["proposition", "Es wäre besser, wenn ..."],
          ["accord / désaccord", "Da stimme ich zu. / Da muss ich widersprechen."]
        ]
      },
      examples: [
        { tr: "D'un côté, le télétravail est pratique ; de l'autre, le contact avec les collègues manque.", note: "einerseits / andererseits : verbe juste après" },
        { tr: "Je dirais que les avantages l'emportent.", note: "würde sagen : opinion prudente" },
        { tr: "Il vaudrait mieux que la ville construise plus de pistes cyclables.", note: "es wäre besser, wenn + Konjunktiv II" },
        { tr: "Certes, la technique est chère, mais elle fait gagner du temps.", note: "zwar ... aber" },
        { tr: "À mon avis, il faudrait résoudre le problème autrement.", note: "meiner Ansicht nach + sollte" },
        { tr: "Je suis d'avis que nous devrions investir davantage.", note: "der Meinung sein, dass ..." }
      ]
    },
    vocab: [
      "l'avantage",
      "l'inconvénient",
      "l'avis, l'opinion",
      "l'argument",
      "la solution",
      "la société",
      "l'emporter, prédominer",
      "défendre (une position), représenter",
      "contredire (+ datif)",
      "approuver, être d'accord (+ datif)",
      "investir",
      "convaincu"
    ],
    exercises: [
      {
        q: "Quelle phrase est correcte ?",
        opts: [
          "Einerseits ist es praktisch, andererseits ist es teuer.",
          "Einerseits es ist praktisch, andererseits es ist teuer.",
          "Einerseits ist es praktisch, andererseits es ist teuer."
        ],
        why: "<b>einerseits</b> et <b>andererseits</b> occupent la première place, le verbe vient donc juste après dans les deux parties."
      },
      {
        q: "Complétez : « Es ___ besser, wenn wir mehr Radwege hätten. » (ce serait)",
        hint: "Konjunktiv II de sein",
        why: "<b>wäre</b> : une proposition prudente au Konjunktiv II, et la proposition en <i>wenn</i> est elle aussi au Konjunktiv II (<i>hätten</i>)."
      },
      {
        q: "Complétez : « Da stimme ich Ihnen ___. » (là, je suis d'accord avec vous)",
        hint: "particule de zustimmen",
        why: "<b>zu</b> : <i>zustimmen</i> est séparable, et la particule va à la fin. Il se construit avec le datif : <i>Ihnen</i>."
      },
      {
        q: "Complétez la phrase.",
        tr: "Certes, la technique est chère, mais elle fait gagner du temps.",
        why: "<i>Zwar ist die Technik teuer, aber sie spart Zeit</i> : après <i>zwar</i> en première place, le verbe vient tout de suite ; après <i>aber</i>, l'ordre est normal."
      },
      {
        q: "Associez chaque expression à son sens.",
        pairs: [
          "l'avantage",
          "l'inconvénient",
          "approuver, être d'accord",
          "contredire"
        ]
      },
      {
        q: "Remettez les mots dans l'ordre.",
        tr: "Je dirais que les avantages l'emportent.",
        why: "<i>Ich würde sagen, dass die Vorteile überwiegen.</i> <i>würde ... sagen</i> dans la principale, <i>überwiegen</i> à la fin de la proposition en <i>dass</i>."
      },
      {
        q: "Une collègue vous demande ce que vous pensez du télétravail.",
        setting: "Discussion au bureau : vous voyez des avantages et des inconvénients.",
        lines: [
          { tr: "Que pensez-vous du télétravail ?" },
          { tr: "Répondez : d'un côté c'est pratique, de l'autre le contact avec les collègues manque.", answerTr: "D'un côté c'est pratique, de l'autre le contact avec les collègues manque." },
          { tr: "L'entreprise devrait donc l'interdire ?" },
          { tr: "Répondez : non, mais il vaudrait mieux que tout le monde vienne au bureau deux fois par semaine.", answerTr: "Non, mais il vaudrait mieux que tout le monde vienne au bureau deux fois par semaine." },
          { tr: "Et le coût du bureau ?" },
          { tr: "Répondez : certes, le bureau coûte de l'argent, mais le contact est important.", answerTr: "Certes, le bureau coûte de l'argent, mais le contact est important." }
        ]
      },
      {
        q: "Traduisez : « À mon avis, la ville devrait investir davantage. »",
        why: "<i>Meiner Meinung nach sollte die Stadt mehr investieren</i> : après <i>meiner Meinung nach</i>, le verbe vient tout de suite. <i>Meiner Ansicht nach</i>, <i>Ich finde, ...</i> et <i>Ich bin der Meinung, dass ...</i>, verbe à la fin, conviennent aussi."
      },
      {
        tr: "D'un côté, je comprends les arguments des opposants ; de l'autre, je suis convaincu que nous devons agir. Ce serait une erreur d'attendre plus longtemps.",
        why: "Dans <i>Argumente</i>, l'accent tombe sur <b>men</b> ; dans <i>überzeugt</i>, le <b>z</b> se prononce [ts] et le <b>eu</b> [ɔʏ] ; dans <i>handeln</i>, le <b>h</b> initial s'entend, c'est un souffle."
      },
      {
        tr: "À mon avis, les avantages l'emportent, même s'il y a quelques inconvénients.",
        why: "Dans <i>Ansicht</i>, le <b>ch</b> est [ç] ; dans <i>überwiegen</i>, l'accent tombe sur <b>wie</b> ; dans <i>Nachteile</i>, le <b>ch</b> après <i>a</i> est [x], au fond de la gorge."
      }
    ]
  },
  "lesson:b2-u04-test": {
    theme: "Évaluation",
    title: "Test : Société et débat",
    objectives: [
      "réviser les unités 1-4 : Konjunktiv II passé, système hypothétique, passif, n-Deklination, je ... desto"
    ],
    theory: [
      {
        p: "Douze questions sur les quatre premières unités du niveau. On réussit avec 70 %. Ne regardez pas les leçons pendant que vous répondez : si vous ne vous souvenez plus de quelque chose, mieux vaut retourner réviser."
      }
    ],
    exercises: [
      {
        tr: "Le Konjunktiv II passé de kommen, à toutes les personnes.",
        why: "<i>kommen</i> prend <i>sein</i> au Perfekt : <i>wäre gekommen</i>. Pour <i>du</i> et <i>ihr</i>, <i>wärst, wärt</i> et <i>wärest, wäret</i> sont également corrects."
      },
      {
        q: "Complétez : « Wir ___ gern länger geblieben. » (nous serions restés)",
        hint: "Konjunktiv II de sein, wir",
        why: "<b>wären</b> : <i>bleiben</i> prend <i>sein</i> au Perfekt."
      },
      {
        q: "Complétez avec le modal : « Du hättest mich anrufen ___. » (tu aurais dû)",
        hint: "devoir, à l'infinitif",
        why: "<b>sollen</b> (ou <i>müssen</i>) : double infinitif, le modal reste à l'infinitif à la fin."
      },
      {
        q: "Complétez : « Wir gehen spazieren, es sei denn, es ___. » (regnen)",
        hint: "présent de l'indicatif",
        why: "<b>regnet</b> : après <i>es sei denn</i> vient une proposition à l'indicatif, verbe en deuxième position."
      },
      {
        q: "Complétez : « Die Brücke ist 1990 gebaut ___. »",
        hint: "passif au Perfekt",
        why: "<b>worden</b> : <i>ist gebaut worden</i>."
      },
      {
        q: "Complétez : « Ich habe gestern mit dem ___ gesprochen. » (der Kunde)",
        hint: "datif après mit",
        why: "<b>Kunden</b> : n-Deklination, <i>-n</i> au datif."
      },
      {
        q: "Complétez : « Je mehr ich lerne, ___ besser verstehe ich. »",
        hint: "seconde partie de la proportion",
        why: "<b>desto</b> ou <b>umso</b>, suivis du comparatif et du verbe."
      },
      {
        q: "Quelle phrase est correcte ?",
        opts: [
          "Er tut so, als ob er nichts wüsste.",
          "Er tut so, als ob er wüsste nichts.",
          "Er tut so, als er nichts wüsste."
        ],
        why: "Après <b>als ob</b>, le verbe va à la fin. Avec <i>als</i> seul, le verbe viendrait tout de suite : <i>als wüsste er nichts</i>."
      },
      {
        q: "Comment dit-on « Le problème doit être résolu » ?",
        opts: [
          "Das Problem muss gelöst werden.",
          "Das Problem muss lösen werden.",
          "Das Problem muss gelöst worden."
        ],
        why: "Passif avec un modal : modal + participe + <b>werden</b>."
      },
      {
        q: "Complétez la phrase sans wenn.",
        tr: "Si j'avais eu plus de temps, je serais venu avec vous.",
        why: "<i>Hätte ich mehr Zeit gehabt, wäre ich mitgekommen</i> : verbe en tête, Konjunktiv II passé dans les deux parties."
      },
      {
        q: "Traduisez : « Nous aurions pu partir plus tôt. »",
        why: "<i>Wir hätten früher losfahren können</i> : double infinitif avec <i>hätten</i>. <i>abfahren</i> et <i>aufbrechen</i> conviennent aussi."
      },
      {
        tr: "D'un côté, la ville est chère ; de l'autre, il y a beaucoup d'emplois.",
        why: "Dans <i>einerseits</i>, l'accent tombe sur <b>ei</b> ; dans <i>andererseits</i>, le <b>r</b> en fin de syllabe s'entend à peine ; dans <i>Jobs</i>, le <b>J</b> se prononce comme en anglais."
      }
    ]
  }
});
