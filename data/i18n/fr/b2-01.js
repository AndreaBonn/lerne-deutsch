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
  }
});
