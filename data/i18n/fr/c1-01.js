/* ============================================================
   Learner-language text (fr) for data/core/c1-01.js, unit c1-u01.
   Keys point at ids in the neutral layer; arrays merge by index,
   so their length has to match core.
   Checked by scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("fr", {
  "unit:c1-u01": {
    title: "Les visages de werden",
    grammarNote: "Les cinq fonctions de werden (devenir, futur, supposition, passif, würde) · geworden et worden · adjectifs et participes substantivés (der Bekannte, ein Bekannter) · etwas Neues, alles Gute · höchst, äußerst, überaus et le superlatif avec am"
  },
  "lesson:c1-u01-l1": {
    theme: "Changements et prévisions",
    title: "Un mot, cinq fonctions",
    objectives: [
      "reconnaître les cinq fonctions de werden dans un texte",
      "faire des suppositions sur le passé avec le Futur II",
      "distinguer geworden de worden au Perfekt",
      "ne pas prendre un passif présent pour un futur"
    ],
    theory: [
      {
        h: "Ce qui accompagne werden",
        p: "Pour comprendre ce que fait <strong>werden</strong> dans une phrase, regardez ce qui l'accompagne. Avec un nom ou un adjectif, c'est un verbe plein, « devenir » : <em>Sie wird Ärztin. Es wird dunkel.</em> Avec un infinitif, il forme le <strong>futur</strong> (<em>Wir werden Sie informieren</em>) ou, souvent avec <em>wohl</em>, une <strong>supposition</strong> (<em>Er wird wohl im Büro sein</em>). Avec un participe II, il forme le <strong>passif</strong> : <em>Der Antrag wird bearbeitet.</em> La forme <strong>würde</strong> + infinitif est le Konjunktiv II : <em>Ich würde das nicht tun.</em> Pour une supposition sur le passé, on emploie le <strong>Futur II</strong>, <em>werden</em> + participe II + <em>haben</em> ou <em>sein</em> : <em>Er wird den Termin wohl vergessen haben. Sie wird schon losgefahren sein.</em>"
      },
      {
        h: "geworden ou worden",
        p: "Au Perfekt, le verbe plein emploie <strong>geworden</strong> : <em>Sie ist Ärztin geworden. Es ist dunkel geworden.</em> Le passif emploie <strong>worden</strong>, sans <em>ge-</em> : <em>Das Haus ist 1950 gebaut worden.</em> Les deux veulent <em>sein</em> comme auxiliaire."
      },
      {
        contrast: "Le français répartit ces fonctions entre des formes différentes : <em>devenir</em>, le futur simple (<em>nous vous informerons</em>), le futur de supposition (<em>il sera au bureau</em>, ou <em>il doit être au bureau</em>), <em>être</em> + participe au passif (<em>la demande est traitée</em>), le conditionnel (<em>je ne le ferais pas</em>). En allemand, c'est toujours <em>werden</em>, et la fonction se déduit de la construction et du contexte : futur et supposition, par exemple, ont la même forme (<em>Er wird zu Hause sein</em>), et sans indice comme <em>wohl</em> ou une indication de temps, ils peuvent rester ambigus. Le Futur II, lui, ressemble au futur antérieur de supposition français (<em>il aura oublié le rendez-vous</em>). Et comme le français distingue <em>devenu</em> de <em>été</em> (<em>elle est devenue médecin</em>, mais <em>la maison a été construite</em>), l'allemand distingue <em>geworden</em> de <em>worden</em>."
      },
      {
        trap: "<em>Der Antrag wird bearbeitet</em> n'est pas un futur : c'est un passif présent, « la demande est traitée » (et non « sera traitée »). Et la supposition sur le passé ne se fait pas avec le futur simple : <em>il aura été fatigué</em> se dit <em>Er wird müde gewesen sein</em> (Futur II), et non <em>Er wird müde sein</em>, qui peut porter sur le présent ou sur l'avenir selon le contexte (<em>il sera fatigué</em>)."
      },
      {
        tip: "Devant un <em>werden</em> difficile, regardez toute la construction en fin de phrase : <em>werden</em> avec le participe II d'un autre verbe, sans <em>haben</em> ou <em>sein</em> à la fin (<em>wird bearbeitet</em>), c'est le passif, alors que <em>geworden</em> (<em>ist müde geworden</em>) est le Perfekt de « devenir » ; <em>werden</em> + participe II + <em>haben</em> ou <em>sein</em> (<em>wird vergessen haben</em>), c'est le Futur II (supposition sur le passé, ou action achevée avant un moment futur : <em>Bis morgen werde ich den Bericht fertiggestellt haben</em>) ; un infinitif (<em>informieren, sein</em>), c'est le futur ou la supposition."
      }
    ],
    grammar: {
      title: "Les fonctions de werden",
      note: "<b>Nom ou adjectif</b> : devenir. <b>Infinitif</b> : futur ou, souvent avec <i>wohl</i>, supposition. <b>Participe II</b> : passif. <b>würde + infinitif</b> : Konjunktiv II. Perfekt : <i>geworden</i> (devenir), <i>worden</i> (passif).",
      table: {
        head: ["fonction", "ce qui l'accompagne", "exemple"],
        rows: [
          ["devenir", "un nom ou un adjectif", "Sie wird Ärztin."],
          ["futur", "un infinitif", "Wir werden Sie informieren."],
          ["supposition", "un infinitif, souvent avec wohl", "Er wird wohl im Büro sein."],
          ["passif", "un participe II", "Der Antrag wird bearbeitet."],
          ["Konjunktiv II", "würde + infinitif", "Ich würde das nicht tun."]
        ]
      },
      examples: [
        { tr: "La petite start-up est devenue entre-temps un groupe mondial.", note: "verbe plein « devenir » au Perfekt : aus ... ist ... geworden" },
        { tr: "Peu à peu, il devient clair que le projet pourrait échouer.", note: "verbe plein avec adjectif attribut et subordonnée postposée (dass ...)" },
        { tr: "Nous vous informerons à temps.", note: "futur : werden + infinitif" },
        { tr: "La demande est en cours de traitement.", note: "passif présent, pas un futur" },
        { tr: "À ta place, je ne le ferais pas.", note: "Konjunktiv II avec würde" },
        { tr: "Il sera sans doute encore au bureau.", note: "supposition : werden + wohl + infinitif" }
      ]
    },
    vocab: [
      "le changement",
      "l'évolution, le développement",
      "l'état, la condition",
      "la supposition, l'hypothèse",
      "la prévision",
      "la demande (officielle), le dossier de demande",
      "changer, se transformer",
      "naître, apparaître",
      "supposer",
      "traiter (un dossier)",
      "peu à peu, progressivement",
      "probablement, vraisemblablement"
    ],
    exercises: [
      {
        q: "Dans un message de l'hôpital : « Ihr Vater wird morgen früh operiert. » Que fait werden ici ?",
        opts: [
          "il forme un passif présent, avec valeur de futur à cause de morgen",
          "il forme un futur actif : le père opérera",
          "il exprime une supposition : il sera peut-être opéré"
        ],
        why: "Avec le participe II <i>operiert</i>, c'est un <b>passif</b> ; le présent a valeur de futur grâce à <i>morgen früh</i>, comme souvent en allemand. Il n'y a ni <i>wohl</i> ni infinitif : ce n'est pas une supposition."
      },
      {
        q: "Un collègue s'inquiète d'un chiffre dans un rapport. Vous répondez : « Das wird schon stimmen. » Qu'est-ce que vous exprimez ?",
        opts: [
          "une supposition rassurante : « tu verras, ce sera juste »",
          "une prévision : « cela deviendra juste »",
          "un passif : « cela est corrigé »"
        ],
        why: "<i>werden</i> + infinitif avec <i>schon</i> exprime une <b>supposition</b> rassurante ; <i>stimmen</i> est un infinitif, pas un participe, donc ce n'est pas un passif."
      },
      {
        q: "Dans un article économique : « Seit der Fusion ist aus zwei Konkurrenten ein einziger Konzern ___. »",
        opts: [
          "geworden",
          "worden",
          "werden"
        ],
        why: "<i>werden</i> comme verbe plein (« devenir ») a le participe <b>geworden</b>. En allemand standard actuel, <i>worden</i> ne s'emploie que comme participe de l'auxiliaire du passif (<i>ist bearbeitet worden</i>)."
      },
      {
        q: "Complétez au passif : « Das Haus ist 1950 gebaut ___. »",
        hint: "participe de werden au passif",
        why: "<b>worden</b> : au Perfekt passif, le participe de <i>werden</i> perd son <i>ge-</i>."
      },
      {
        q: "Votre ami n'est pas venu au rendez-vous. Vous supposez : « Er wird den Termin wohl vergessen ___. »",
        hint: "Futur II : werden + participe + auxiliaire",
        why: "<b>haben</b> : supposition sur le passé avec le Futur II, <i>wird ... vergessen haben</i>, « il aura oublié le rendez-vous »."
      },
      {
        q: "Complétez la phrase.",
        tr: "À ta place, je ne le ferais pas.",
        why: "<i>An deiner Stelle würde ich das nicht tun</i> (ou <i>machen</i>) : Konjunktiv II avec <i>würde</i> et l'infinitif en fin de phrase."
      },
      {
        q: "Dans quelles phrases werden forme-t-il le passif ?",
        opts: [
          "Der Brief wird morgen geschickt.",
          "Die Tür wurde geöffnet.",
          "Er wird morgen kommen.",
          "Sie wird Lehrerin."
        ],
        why: "Les deux premières ont un participe II (<i>geschickt, geöffnet</i>) : passif. Dans la troisième, <i>werden</i> + infinitif est un futur ; dans la quatrième, avec un nom, c'est « devenir »."
      },
      {
        q: "Reformulez avec le Futur II de supposition : « Il a probablement oublié le rendez-vous. » (der Termin)",
        why: "<i>Er wird den Termin wohl vergessen haben</i> : <i>werden</i> + participe + <i>haben</i>, avec <i>wohl</i> ou <i>vermutlich</i> pour « probablement » (<i>sicher</i> marquerait une plus grande certitude)."
      },
      {
        tr: "La ville devient de plus en plus grande. Dans dix ans, elle aura probablement deux fois plus d'habitants, et beaucoup de vieilles maisons seront démolies.",
        why: "Dans <i>Einwohner</i>, l'accent tombe sur <b>Ein</b> ; dans <i>doppelt</i>, le <b>o</b> est bref ; dans <i>abgerissen</i>, le <b>b</b> devant <i>g</i> se prononce [p]."
      },
      {
        tr: "Si j'avais plus de temps, je deviendrais médecin.",
        why: "Dans <i>hätte</i>, le <b>ä</b> est bref ; dans <i>Ärztin</i>, <b>z</b> se prononce [ts] ; dans <i>werden</i>, le <b>r</b> se vocalise."
      }
    ]
  },
  "lesson:c1-u01-l2": {
    theme: "Personnes et jugements",
    title: "der Bekannte, etwas Neues",
    objectives: [
      "décliner des adjectifs et des participes employés comme noms",
      "choisir la terminaison selon l'article (der Bekannte, ein Bekannter)",
      "employer etwas, nichts et alles avec un adjectif substantivé",
      "exprimer un jugement sur un résultat"
    ],
    theory: [
      {
        h: "L'adjectif qui devient nom",
        p: "Beaucoup de personnes se désignent par un adjectif ou un participe employé comme nom : <em>der Bekannte</em> (la connaissance), <em>der Angestellte</em> (l'employé), <em>der Erwachsene</em>, <em>der Verletzte</em>. Ils s'écrivent avec une majuscule mais se déclinent comme des adjectifs : la terminaison dépend de l'article. <em>der Bekannte, die Bekannten</em>, mais <em>ein Bekannter, Bekannte</em> (pluriel sans article). Avec <em>kein</em>, le singulier suit <em>ein</em> (<em>kein Bekannter</em>) et le pluriel les possessifs (<em>keine Bekannten</em>)."
      },
      {
        h: "etwas Neues, nichts Besseres, alles Gute",
        p: "Après <strong>etwas, nichts, viel, wenig</strong>, l'adjectif substantivé est neutre, avec une majuscule et la terminaison <em>-es</em> au nominatif et à l'accusatif : <em>etwas Neues, nichts Besseres, viel Interessantes</em>. Après <strong>alles</strong>, il prend <em>-e</em> : <em>alles Gute, alles Wichtige</em>."
      },
      {
        contrast: "En français, des noms comme <em>le blessé</em> ou <em>l'employé</em> sont des noms à part entière : au singulier, seul l'article change (<em>le blessé, un blessé</em>), la forme du mot reste la même. En allemand, la terminaison change avec l'article (<em>der Bekannte</em>, <em>ein Bekannter</em>). Et là où le français dit <em>quelque chose de nouveau, rien de mieux</em> avec <em>de</em> et un adjectif masculin, l'allemand n'a pas de préposition : l'adjectif suit directement <em>etwas</em> ou <em>nichts</em>, avec une majuscule (<em>etwas Neues, nichts Besseres</em>)."
      },
      {
        trap: "Ne donnez pas au mot la forme fixe d'un nom français : <em>der Bekannte</em> se comporte comme un adjectif, donc <em>mit einem Bekannten</em>, mais <em>ein Bekannter</em> au nominatif, et non <em>ein Bekannte</em>. Et au pluriel sans article, au nominatif et à l'accusatif : <em>Wir haben Verwandte in Wien</em>, et non <em>Verwandten</em> ; au datif, en revanche, <em>mit Verwandten</em>."
      },
      {
        tip: "Si vous hésitez sur la terminaison, imaginez un nom après l'adjectif : <em>ein bekannter (Mann)</em> → <em>ein Bekannter</em> ; <em>dem bekannten (Mann)</em> → <em>dem Bekannten</em>."
      }
    ],
    grammar: {
      title: "Adjectifs et participes substantivés",
      note: "Ils se déclinent comme des adjectifs : <b>der Bekannte</b>, <b>ein Bekannter</b>, <b>die Bekannten</b>, <b>Bekannte</b>. Après <i>etwas, nichts, viel, wenig</i> : <b>-es</b> (etwas Neues). Après <i>alles</i> : <b>-e</b> (alles Gute).",
      table: {
        head: ["", "avec der, die, das", "avec ein ou sans article"],
        rows: [
          ["masculin", "der Bekannte", "ein Bekannter"],
          ["féminin", "die Bekannte", "eine Bekannte"],
          ["pluriel", "die Bekannten", "Bekannte"],
          ["datif masculin", "dem Bekannten", "einem Bekannten"]
        ]
      },
      examples: [
        { tr: "Une connaissance m'a recommandé l'appartement.", note: "ein Bekannter : terminaison -er après ein" },
        { tr: "Les employés travaillent plus longtemps aujourd'hui.", note: "die Angestellten : -en après die" },
        { tr: "Le blessé a été conduit à l'hôpital.", note: "der Verletzte : participe substantivé" },
        { tr: "Il y a peu de choses plus agaçantes qu'une correspondance manquée.", note: "etwas + comparatif substantivé : etwas Ärgerlicheres" },
        { tr: "Il n'y a rien de mieux que du pain frais.", note: "nichts Besseres : comparatif substantivé" },
        { tr: "Bon anniversaire, tous mes vœux !", note: "alles Gute : -e après alles" }
      ]
    },
    vocab: [
      "la connaissance (personne)",
      "l'employé, le salarié",
      "l'adulte",
      "le parent (membre de la famille)",
      "l'adolescent, le jeune",
      "le député",
      "excellent",
      "médiocre",
      "réussi",
      "raté, échoué",
      "convaincant",
      "unique, sans pareil"
    ],
    exercises: [
      {
        q: "Dans une brève économique : « Die Zahl der ___ ist im Herbst gestiegen. »",
        opts: [
          "Arbeitslosen",
          "Arbeitslose",
          "Arbeitsloser"
        ],
        why: "Génitif pluriel après <i>der</i> : l'adjectif substantivé prend <b>-en</b>, <i>die Zahl der Arbeitslosen</i>. <i>Arbeitslose</i> est le pluriel nominatif ou accusatif sans article ; <i>Arbeitsloser</i> est le singulier après <i>ein</i> ou le génitif pluriel sans article (<i>die Zahl Arbeitsloser</i>). Après <i>der</i> au génitif pluriel, il faut <i>Arbeitslosen</i>."
      },
      {
        q: "Dans un communiqué syndical : « Die Interessen der ___ wurden bei der Umstrukturierung kaum berücksichtigt. »",
        opts: [
          "Beschäftigten",
          "Beschäftigte",
          "Beschäftigter"
        ],
        why: "Génitif pluriel après <i>der</i> : le participe substantivé prend <b>-en</b>, <i>der Beschäftigten</i> (des salariés)."
      },
      {
        q: "Dans un reportage sur la fusion : « Den Angestellten stand nach der Übernahme nichts ___ bevor. »",
        opts: [
          "Gutes",
          "Gute",
          "Guten"
        ],
        why: "Après <i>nichts</i>, l'adjectif substantivé est neutre avec <b>-es</b>, même dans une phrase complexe : <i>nichts Gutes</i> (« rien de bon »). <i>Gute</i> suit <i>alles</i>."
      },
      {
        q: "Complétez : « Es gibt nichts ___ als frisches Brot. »",
        opts: [
          "Besseres",
          "Bessere",
          "Besser"
        ],
        why: "Après <i>nichts</i>, l'adjectif substantivé est neutre avec <b>-es</b> : <i>nichts Besseres</i>, même au comparatif."
      },
      {
        q: "Complétez la phrase : dans la première lacune « adolescents », dans la seconde « adultes ».",
        tr: "L'entrée est gratuite pour les adolescents, les adultes paient dix euros.",
        why: "<i>Jugendliche</i> et <i>Erwachsene</i> : pluriel sans article, donc <i>-e</i> et non <i>-en</i>."
      },
      {
        q: "Associez chaque mot à son sens.",
        pairs: [
          "la connaissance",
          "l'employé",
          "le parent",
          "le député"
        ]
      },
      {
        q: "Remettez les mots dans l'ordre.",
        tr: "Le blessé a été conduit à l'hôpital.",
        why: "<i>Der Verletzte wurde ins Krankenhaus gebracht.</i> <i>der Verletzte</i> est un participe substantivé ; <i>wurde ... gebracht</i> est un passif au Präteritum."
      },
      {
        q: "Traduisez : « J'ai parlé avec une connaissance du blessé. »",
        why: "<i>Ich habe mit einem Bekannten des Verletzten gesprochen</i> : deux substantivés, au datif après <i>mit einem</i> (<i>Bekannten</i>) et au génitif après <i>des</i> (<i>Verletzten</i>), tous deux en <i>-en</i>."
      },
      {
        tr: "Hier, j'ai rencontré une vieille connaissance. Il m'a raconté quelque chose d'intéressant : son entreprise cherche de nouveaux employés.",
        why: "Dans <i>Bekannten</i>, l'accent tombe sur <b>kann</b> ; dans <i>Interessantes</i>, l'accent tombe sur <b>sant</b>."
      },
      {
        tr: "Pour les adultes, l'entrée coûte douze euros.",
        why: "Dans <i>Erwachsene</i>, l'accent tombe sur <b>wach</b> et <b>chs</b> se prononce [ks] ; dans <i>Eintritt</i>, l'accent tombe sur <b>Ein</b> ; dans <i>zwölf</i>, le <b>ö</b> est bref."
      }
    ]
  },
  "lesson:c1-u01-l3": {
    theme: "Juger la qualité",
    title: "höchst, äußerst, am besten",
    objectives: [
      "exprimer un degré très élevé sans comparaison",
      "distinguer äußerst schwierig de am schwierigsten",
      "employer höchst, äußerst, überaus, ziemlich",
      "formuler un jugement sur un résultat ou une œuvre"
    ],
    theory: [
      {
        h: "Un degré très élevé sans comparaison",
        p: "Pour dire qu'une chose possède une qualité à un degré très élevé, sans la comparer à une autre, l'allemand place un adverbe devant l'adjectif : <em>sehr</em> et, à l'écrit, <strong>höchst</strong>, <strong>äußerst</strong>, <strong>überaus</strong> ; <strong>besonders</strong> (« particulièrement ») met plutôt en relief une qualité, souvent par rapport à d'autres. <em>Das ist ein höchst interessanter Vorschlag. Die Lage ist äußerst schwierig.</em> Pour atténuer : <strong>ziemlich</strong> (plutôt, assez), <em>relativ</em>, <em>einigermaßen</em>."
      },
      {
        h: "Le superlatif reste une comparaison",
        p: "En règle générale, <em>am</em> + superlatif (<em>am kürzesten, am besten</em>) compare une chose à d'autres ; il existe aussi des emplois sans véritable comparaison, comme <em>Das weißt du am besten selbst</em>. La valeur ordinaire, celle de cette leçon, est la comparaison : <em>Von den drei Wegen ist dieser am kürzesten.</em> À l'écrit soutenu, on trouve aussi <em>aufs</em> + superlatif, avec majuscule ou minuscule, au sens d'un degré très élevé : <em>Sie hat uns aufs Herzlichste begrüßt.</em>"
      },
      {
        contrast: "Le français n'a qu'un suffixe de superlatif absolu limité à quelques mots et registres (<em>rarissime</em>, <em>richissime</em>) : couramment, il dit <em>très difficile</em>, <em>extrêmement difficile</em>, <em>fort intéressant</em>, ou, familièrement, <em>archi-difficile</em>. L'allemand fait de même avec <em>sehr</em>, <em>äußerst</em>, <em>höchst</em>. En revanche, <em>le plus difficile</em> correspond à <em>am schwierigsten</em> : c'est une comparaison, pas un degré absolu. Attention aussi à <em>ziemlich</em> : c'est « assez » au sens de « plutôt » (<em>un film plutôt ennuyeux</em>), et il ne signifie pas à lui seul « suffisamment » : la suffisance s'exprime explicitement avec <em>genug</em>."
      },
      {
        trap: "Comme <em>très</em> ou <em>extrêmement</em> en français, <em>höchst</em> est un adverbe invariable devant un adjectif : <em>ein höchst interessanter Vorschlag</em>, et non <em>ein höchster interessanter Vorschlag</em>. La terminaison se met seulement sur l'adjectif qui suit."
      },
      {
        tip: "À l'oral, on entend aussi <em>total, echt, super</em> (<em>echt gut, total spannend</em>) ; dans une lettre formelle ou un rapport, on garde <em>äußerst, höchst, überaus</em>."
      }
    ],
    grammar: {
      title: "Degré très élevé et superlatif",
      note: "<b>höchst, äußerst, überaus</b> + adjectif : degré très élevé, sans comparaison (plus forts que <i>sehr</i>). <b>besonders</b> met plutôt en relief une qualité, souvent par rapport à d'autres. <b>am</b> + superlatif : comparaison. <b>aufs</b> + superlatif : degré très élevé, écrit formel.",
      table: {
        head: ["forme", "valeur", "exemple"],
        rows: [
          ["sehr, äußerst, höchst + adjectif", "degré très élevé", "Die Lage ist äußerst schwierig."],
          ["ziemlich + adjectif", "degré moyen à élevé", "Der Film war ziemlich langweilig."],
          ["am + superlatif", "comparaison", "Dieser Weg ist am kürzesten."],
          ["aufs + superlatif", "degré très élevé, formel", "Sie hat uns aufs Herzlichste begrüßt."]
        ]
      },
      examples: [
        { tr: "C'est une proposition extrêmement intéressante.", note: "höchst : adverbe, ne se décline pas" },
        { tr: "La situation est extrêmement difficile.", note: "äußerst + adjectif : degré très élevé, sans comparaison" },
        { tr: "Le projet a connu un succès remarquable.", note: "überaus : écrit formel" },
        { tr: "Ce chemin est le plus court.", note: "am kürzesten : comparaison" },
        { tr: "Elle nous a accueillis le plus cordialement du monde.", note: "aufs Herzlichste : formel" },
        { tr: "Le film était plutôt ennuyeux.", note: "ziemlich : atténue" }
      ]
    },
    vocab: [
      "la qualité",
      "l'impression",
      "l'évaluation, la critique",
      "le jugement",
      "le critère, l'étalon",
      "la performance, le rendement",
      "éminemment, extrêmement",
      "extrêmement",
      "outre mesure, extraordinairement",
      "plutôt, assez",
      "impressionnant",
      "remarquable"
    ],
    exercises: [
      {
        q: "Dans une expertise, vous voulez atténuer le jugement sur les résultats. Quelle phrase choisissez-vous ?",
        opts: [
          "Die Ergebnisse sind ziemlich widersprüchlich.",
          "Die Ergebnisse sind äußerst widersprüchlich.",
          "Die Ergebnisse sind höchst widersprüchlich."
        ],
        why: "<b>ziemlich</b> atténue (« plutôt contradictoires ») ; <i>äußerst</i> et <i>höchst</i> renforcent le jugement."
      },
      {
        q: "De ces trois chemins, celui-ci est le plus court : « Von den drei Wegen ist dieser ___. »",
        opts: [
          "am kürzesten",
          "äußerst kurz",
          "höchst kurz"
        ],
        why: "Il y a ici une comparaison entre trois chemins : <b>am kürzesten</b>. <i>äußerst kurz</i> dirait seulement qu'il est très court."
      },
      {
        q: "Vous répondez par courrier à une offre commerciale. Quelle phrase exprime un très fort intérêt, sans comparaison et dans le registre adapté ?",
        opts: [
          "Ihr Angebot ist für uns äußerst interessant.",
          "Ihr Angebot ist für uns echt super.",
          "Ihr Angebot ist für uns am interessantesten."
        ],
        why: "Dans une lettre formelle, on emploie <b>äußerst</b> (ou <i>höchst</i>) ; <i>echt super</i> relève de l'oral informel. <i>am interessantesten</i> est une comparaison, et il n'y a ici rien à comparer."
      },
      {
        q: "Dans une critique : « Das Ergebnis übertraf selbst die ___ Erwartungen. » (superlatif de kühn)",
        hint: "superlatif épithète après die, pluriel",
        why: "<b>kühnsten</b> : superlatif employé comme épithète, avec la terminaison <i>-en</i> après <i>die</i> ; « il dépassa même les attentes les plus audacieuses »."
      },
      {
        q: "Complétez : « Die Aussicht ist ___ beeindruckend. »",
        hint: "« extrêmement », commence par ä",
        why: "<b>äußerst</b> : degré très élevé sans comparaison, typique de l'écrit."
      },
      {
        q: "Complétez la phrase.",
        tr: "Elle nous a accueillis le plus cordialement du monde.",
        why: "<i>Sie hat uns aufs Herzlichste begrüßt</i> (on écrit aussi <i>aufs herzlichste</i>) : <i>aufs</i> + superlatif, formule de l'écrit formel."
      },
      {
        q: "Associez chaque mot à son sens.",
        pairs: [
          "l'évaluation, la critique",
          "le jugement",
          "le critère, l'étalon",
          "l'impression"
        ]
      },
      {
        q: "Écrivez en registre formel : « Le résultat est extrêmement remarquable, même si les coûts ont été plutôt élevés. »",
        why: "<i>Das Ergebnis ist äußerst bemerkenswert, auch wenn die Kosten ziemlich hoch waren</i> : <i>äußerst</i> (ou <i>höchst, überaus</i>) pour le degré élevé, <i>ziemlich</i> pour atténuer ; <i>obwohl</i> et le Perfekt <i>gewesen sind</i> conviennent aussi."
      },
      {
        tr: "La nouvelle exposition mérite vraiment d'être vue. Les tableaux sont extrêmement inhabituels, et les visiteurs ont été extrêmement impressionnés.",
        why: "Dans <i>Ausstellung</i>, l'accent tombe sur <b>Aus</b> ; dans <i>sehenswert</i>, le <b>h</b> est muet ; dans <i>beeindruckt</i>, le <b>ee</b> n'est pas long : <i>be-</i> et <i>ein</i> se prononcent séparément."
      },
      {
        tr: "C'est un résultat extrêmement remarquable.",
        why: "Dans <i>bemerkenswertes</i>, l'accent tombe sur <b>mer</b> ; dans <i>Ergebnis</i>, l'accent tombe sur <b>geb</b> ; dans <i>höchst</i>, <b>ch</b> se prononce [ç]."
      }
    ]
  },
  "lesson:c1-u01-test": {
    theme: "Vérification",
    title: "Test : Les visages de werden",
    objectives: [
      "vérifier les fonctions de werden, les adjectifs substantivés et le degré très élevé"
    ],
    theory: [
      {
        p: "Dix questions sur toute l'unité. On réussit avec 70 %. Ne regardez pas les leçons pendant que vous répondez : si vous ne vous souvenez pas de quelque chose, mieux vaut revenir en arrière et réviser."
      }
    ],
    exercises: [
      {
        q: "Complétez : « Aus der Idee zweier Studenten ist ein erfolgreiches Unternehmen ___. »",
        hint: "participe de werden « devenir »",
        why: "<b>geworden</b> : au sens de « devenir », le participe a <i>ge-</i>."
      },
      {
        q: "Complétez : « Ich habe gestern mit einem ___ von dir gesprochen. »",
        hint: "de bekannt, masculin, datif après einem",
        why: "<b>Bekannten</b> : après <i>einem</i> (datif), l'adjectif substantivé prend <i>-en</i>."
      },
      {
        q: "Complétez : « Wir wohnen zurzeit in der Wohnung eines ___. »",
        hint: "de verwandt, masculin, génitif après eines",
        why: "<b>Verwandten</b> : après <i>eines</i> (génitif), l'adjectif substantivé prend <i>-en</i>."
      },
      {
        q: "Votre collègue ne répond pas au téléphone. Que signifie « Sie wird den Zug verpasst haben » ?",
        opts: [
          "une supposition sur le passé : « elle aura raté le train »",
          "un futur : « elle ratera le train »",
          "un passif : « le train a été raté »"
        ],
        why: "<i>werden</i> + participe + <i>haben</i> est le <b>Futur II</b> : ici, une supposition sur quelque chose qui s'est déjà produit."
      },
      {
        q: "Dans un rapport technique : quelle phrase formule la cause de la panne avec le plus de prudence ?",
        opts: [
          "Der Fehler wird wohl bei der Software liegen.",
          "Der Fehler liegt bei der Software.",
          "Der Fehler wird bei der Software gesucht."
        ],
        why: "<i>werden</i> + infinitif avec <i>wohl</i> présente la cause comme une <b>supposition</b> ; la deuxième est une affirmation, la troisième un passif (« est recherchée »)."
      },
      {
        q: "Un invité est en retard. Quelle phrase exprime la supposition la plus faible ?",
        opts: [
          "Er wird vielleicht noch kommen.",
          "Er wird sicher noch kommen.",
          "Er kommt bestimmt noch."
        ],
        why: "<b>vielleicht</b> laisse la possibilité ouverte ; <i>sicher</i> et <i>bestimmt</i> expriment une supposition très forte."
      },
      {
        q: "Parmi tous les candidats, elle est la meilleure : « Von allen Kandidaten ist sie ___. »",
        opts: [
          "am besten",
          "äußerst gut",
          "höchst gut"
        ],
        why: "Il y a une comparaison avec les autres candidats : <b>am besten</b>."
      },
      {
        q: "Associez chaque mot à son sens.",
        pairs: [
          "l'adulte",
          "l'adolescent, le jeune",
          "le parent",
          "l'employé"
        ]
      },
      {
        tr: "Le projet ne sera probablement achevé que l'an prochain. Les coûts sont extrêmement élevés, et beaucoup d'employés devront probablement travailler plus longtemps.",
        why: "Dans <i>vermutlich</i>, l'accent tombe sur <b>mut</b> ; dans <i>abgeschlossen</i>, le <b>b</b> se prononce [p] ; dans <i>äußerst</i>, <b>äu</b> se prononce [ɔʏ]."
      },
      {
        tr: "Une de mes connaissances est devenue député.",
        why: "Dans <i>geworden</i>, le <b>o</b> est bref ; dans <i>Bekannter</i>, l'accent tombe sur <b>kann</b>."
      }
    ]
  },
  "unit:c1-u02": {
    title: "Réussir à mener quelque chose à bien",
    grammarNote: "Verbes de fonction (zur Verfügung stellen, in Frage kommen, eine Entscheidung treffen) · substituts du passif : sich lassen, sein + zu, adjectifs en -bar · préfixes séparables et inséparables au sens différent (umfahren) · expressions idiomatiques"
  },
  "lesson:c1-u02-l1": {
    theme: "Travail et projets",
    title: "Les verbes de fonction",
    objectives: [
      "comprendre et employer les verbes de fonction des textes formels",
      "choisir le bon verbe pour le nom (eine Entscheidung treffen)",
      "placer le nom du groupe vers la fin de la phrase",
      "lire un court avis ou un procès-verbal"
    ],
    theory: [
      {
        h: "Le nom porte le sens",
        p: "Dans les textes formels, beaucoup d'actions s'expriment par un <strong>nom</strong> qui porte le sens et un <strong>verbe</strong> presque vide : <em>eine Entscheidung treffen</em> (décider), <em>zur Verfügung stellen</em> (mettre à disposition), <em>in Kraft treten</em> (entrer en vigueur), <em>in Frage kommen</em> (entrer en ligne de compte), <em>zum Ausdruck bringen</em> (exprimer), <em>Rücksicht nehmen auf</em> (avoir égard à). Dans les groupes à préposition, la préposition et l'article ne se choisissent pas (<em>zur Verfügung</em>) ; dans ceux qui ont un objet, l'article peut changer (<em>eine Entscheidung treffen, die Entscheidung treffen</em>)."
      },
      {
        h: "La place dans la phrase",
        p: "En règle générale, les groupes à préposition (<em>zur Verfügung stellen, in Kraft treten, in Frage kommen</em>) se placent vers la fin de la phrase, un peu comme une particule séparable : le verbe se conjugue à sa place et le groupe le complète. Ce ne sont pourtant pas des préfixes du verbe, et pour les mettre en relief, ils peuvent passer en première position : <em>In Frage kommt nur diese Lösung.</em> <em>Die Firma <strong>stellt</strong> uns die Räume <strong>zur Verfügung</strong>.</em> Au Perfekt et avec un modal, le groupe précède le participe ou l'infinitif : <em>Die Firma hat uns die Räume zur Verfügung gestellt. Das Gesetz soll im Januar in Kraft treten.</em> Le complément prépositionnel d'un groupe (<em>Rücksicht nehmen auf</em>) peut en revanche suivre le verbe : <em>Bitte nehmen Sie Rücksicht auf die Nachbarn.</em> Les groupes avec un complément d'objet (<em>eine Entscheidung treffen</em>) suivent en revanche l'ordre normal de la phrase : <em>Wir treffen heute eine Entscheidung über den Antrag. Wir müssen bis Freitag eine Entscheidung treffen.</em> La négation précède en général le groupe : <em>Das kommt nicht in Frage.</em>"
      },
      {
        contrast: "Beaucoup de ces groupes existent aussi en français sur le même modèle (<em>mettre à disposition</em>, <em>entrer en vigueur</em>, <em>prendre une décision</em>), ce qui est un bon point d'appui. Le piège est le calque quand le verbe ne coïncide pas : <em>prendre une décision</em> se dit <em>eine Entscheidung treffen</em>, et non <em>nehmen</em> ; <em>poser une question</em> se dit <em>eine Frage stellen</em>, et pour <em>faire une demande</em>, la formule usuelle dans un contexte administratif est <em>einen Antrag stellen</em> (<em>einen Antrag machen</em> reste familier). Le français dispose du même type de locutions verbales dans son style administratif (<em>procéder à une vérification</em>, <em>donner suite à</em>), et c'est ce style que l'allemand formel recherche."
      },
      {
        trap: "<em>in Frage kommen</em> ressemble à <em>en question</em>, mais n'a rien à voir avec les questions : cela signifie « entrer en ligne de compte, être envisageable ». <em>Das kommt nicht in Frage</em> est un refus net, « il n'en est pas question, c'est hors de question » ; et <em>in Frage stellen</em>, lui, correspond à « remettre en question »."
      },
      {
        tip: "Apprenez ces groupes comme des blocs entiers, avec préposition et article : <em>zur Verfügung</em>, <em>in Kraft</em>, <em>zum Ausdruck</em>. Si vous ne retenez que le nom, le mauvais verbe arrive tout de suite."
      }
    ],
    grammar: {
      title: "Verbes de fonction",
      note: "Nom + verbe presque vide, groupe figé. Le verbe se conjugue à sa place et le groupe à préposition va en général vers la fin (<i>Die Firma stellt uns die Räume zur Verfügung</i>) ; la position peut changer selon la structure de la phrase et ce qu'on veut mettre en relief.",
      table: {
        head: ["verbe de fonction", "signification", "verbe simple"],
        rows: [
          ["eine Entscheidung treffen", "prendre une décision", "entscheiden"],
          ["zur Verfügung stellen", "mettre à disposition", "bereitstellen"],
          ["in Kraft treten", "entrer en vigueur", "gültig werden"],
          ["in Frage kommen", "être possible, entrer en ligne de compte", "möglich sein"],
          ["zum Ausdruck bringen", "exprimer", "ausdrücken"],
          ["Rücksicht nehmen auf", "avoir égard à", "berücksichtigen"]
        ]
      },
      examples: [
        { tr: "L'entreprise met les locaux à notre disposition.", note: "le nom va vers la fin : zur Verfügung" },
        { tr: "Nous devons prendre une décision d'ici vendredi.", note: "treffen, pas nehmen" },
        { tr: "La nouvelle loi entre en vigueur en janvier.", note: "in Kraft treten" },
        { tr: "Pour ce poste, seuls deux candidats peuvent être envisagés.", note: "in Frage kommen : être possible" },
        { tr: "Elle a clairement exprimé sa déception.", note: "zum Ausdruck bringen, registre formel" },
        { tr: "Ayez égard aux voisins, s'il vous plaît.", note: "Rücksicht nehmen auf + accusatif" }
      ]
    },
    vocab: [
      "le projet, le dessein",
      "la mesure, la disposition",
      "l'autorisation, le permis",
      "la commande, la mission",
      "le délai, l'échéance",
      "l'influence",
      "entrer en vigueur",
      "mettre à disposition",
      "être possible, entrer en ligne de compte",
      "prendre une décision",
      "avoir égard, tenir compte",
      "exprimer"
    ],
    exercises: [
      {
        q: "Lisez l'avis : « Ab dem 1. März tritt die neue Hausordnung in Kraft. Die Verwaltung bittet alle Mieter, Rücksicht auf die Nachbarn zu nehmen. » Que se passe-t-il le 1er mars ?",
        opts: [
          "le nouveau règlement de l'immeuble entre en vigueur",
          "l'administration prend une décision au sujet des voisins",
          "les nouveaux locataires emménagent dans les appartements"
        ],
        why: "<i>in Kraft treten</i> signifie « entrer en vigueur » : à partir du 1er mars, le nouveau règlement (<i>Hausordnung</i>) s'applique."
      },
      {
        q: "En réunion, un collègue dit : « Diese Lösung kommt für uns nicht in Frage. » Que veut-il dire ?",
        opts: [
          "que la solution est exclue",
          "qu'il veut poser une question sur la solution",
          "que la solution est encore en discussion"
        ],
        why: "<i>nicht in Frage kommen</i> est un refus net : la solution <b>n'est pas possible</b>. Poser des questions n'a rien à voir."
      },
      {
        q: "Complétez : « Wir müssen bis Freitag eine Entscheidung ___. »",
        hint: "le verbe de fonction de die Entscheidung",
        why: "<b>treffen</b> (dans le style formel aussi <i>fällen</i>) : <i>eine Entscheidung treffen</i>, « prendre une décision » ; pas <i>nehmen</i>."
      },
      {
        q: "Complétez : « Die Firma stellt den Mitarbeitern Laptops zur ___. »",
        hint: "zur ... stellen : mettre à disposition",
        why: "<b>Verfügung</b> : <i>zur Verfügung stellen</i>, groupe figé avec <i>zur</i>."
      },
      {
        q: "Complétez : « Sie hat ihre Kritik deutlich zum ___ gebracht. »",
        hint: "zum ... bringen : exprimer",
        why: "<b>Ausdruck</b> : <i>zum Ausdruck bringen</i>, « exprimer », typique de l'écrit formel."
      },
      {
        q: "Complétez le procès-verbal.",
        tr: "Hier, le conseil municipal a pris une décision importante : la nouvelle règle entre en vigueur en janvier. Pour sa mise en œuvre, la ville met à disposition des fonds supplémentaires.",
        why: "<i>getroffen</i> (Perfekt de <i>treffen</i>), <i>tritt</i> (avec <i>in Kraft</i>), <i>stellt</i> (avec <i>zur Verfügung</i>) : chaque verbe va avec son nom."
      },
      {
        q: "Associez chaque groupe à son sens.",
        pairs: [
          "entrer en vigueur",
          "être possible",
          "avoir égard",
          "mettre à disposition"
        ]
      },
      {
        q: "Traduisez pour un procès-verbal : « La direction a mis une salle à disposition pour la réunion. » (die Leitung, der Raum, die Besprechung)",
        why: "<i>Die Leitung hat einen Raum für die Besprechung zur Verfügung gestellt</i> : le groupe <i>zur Verfügung</i> précède le participe ; le Präteritum <i>stellte ... zur Verfügung</i> convient aussi."
      },
      {
        tr: "À partir du mois prochain, une nouvelle règle entre en vigueur au bureau. L'entreprise met des ordinateurs portables à la disposition de tous les employés ; les appareils personnels ne seront plus une option.",
        why: "Dans <i>Regelung</i>, l'accent tombe sur <b>Re</b> ; dans <i>Verfügung</i>, l'accent tombe sur <b>fü</b> ; dans <i>Geräte</i>, le <b>ä</b> est long."
      },
      {
        tr: "Nous devons prendre une décision aujourd'hui même.",
        why: "Dans <i>Entscheidung</i>, l'accent tombe sur <b>schei</b> et <b>ei</b> se prononce [aɪ] ; dans <i>treffen</i>, le <b>e</b> est bref."
      }
    ]
  },
  "lesson:c1-u02-l2": {
    theme: "Démarches et avis",
    title: "Cela se fait, c'est à traiter",
    objectives: [
      "employer sich lassen + infinitif pour « on peut »",
      "comprendre sein + zu + infinitif dans les avis et les règlements",
      "reconnaître et former les adjectifs en -bar",
      "reformuler un passif avec un modal"
    ],
    theory: [
      {
        h: "Trois façons de dire « on peut » ou « il faut »",
        p: "À côté du passif avec un modal (<em>Das Problem kann gelöst werden</em>), l'allemand possède des formes plus compactes. <strong>sich lassen</strong> + infinitif signifie « on peut » : <em>Das Problem lässt sich leicht lösen.</em> <strong>sein + zu</strong> + infinitif signifie « on peut » ou « il faut », et dans les avis c'est d'ordinaire une obligation : <em>Der Antrag ist bis Freitag abzugeben.</em> Les adjectifs en <strong>-bar</strong> formés à partir d'un verbe disent qu'une chose peut être faite : <em>lösbar, machbar, trinkbar</em> (pas tous : <em>dankbar</em> et <em>fruchtbar</em> ont d'autres sens)."
      },
      {
        h: "zu avec les verbes séparables",
        p: "Avec un verbe séparable, <em>zu</em> se place entre la particule et le verbe et s'écrit en un seul mot : <em>abgeben → abzugeben, einreichen → einzureichen, ausfüllen → auszufüllen</em>. <em>Das Formular ist vollständig auszufüllen.</em>"
      },
      {
        contrast: "Le français a des formes très proches : <em>le formulaire est à remettre au plus tard vendredi</em> correspond à <em>ist bis Freitag abzugeben</em> (<em>être à</em> + infinitif), et <em>-able, -ible</em> fonctionnent comme <em>-bar</em> (<em>faisable</em> = <em>machbar</em>, <em>potable</em> = <em>trinkbar</em>, <em>résoluble</em> = <em>lösbar</em>). Pour <em>sich lassen</em>, le français emploie plutôt le passif pronominal ou <em>on</em> : <em>le problème se résout facilement</em>, <em>ça peut se faire</em>, <em>on peut le résoudre</em>. Mais ne traduisez pas à la lettre par <em>se laisser</em> : <em>Das lässt sich machen</em> veut dire « ça peut se faire », et non « ça se laisse faire »."
      },
      {
        trap: "Le <em>zu</em> change tout : <em>Die Rechnung ist zu bezahlen</em> exprime une obligation, « la facture est à payer » ; <em>Die Rechnung ist bezahlt</em> décrit l'état résultant (passif d'état), « la facture est payée » ; le Perfekt du passif de processus est <em>Die Rechnung ist bezahlt worden</em>, « la facture a été payée »."
      },
      {
        tip: "Pour comprendre un <em>sein + zu</em> dans un règlement, essayez de le remplacer par <em>muss ... werden</em> : <em>ist abzugeben</em> = <em>muss abgegeben werden</em>. Si le sens tient, c'est une obligation."
      }
    ],
    grammar: {
      title: "Substituts du passif à valeur modale",
      note: "<b>sich lassen</b> + infinitif : on peut. <b>sein + zu</b> + infinitif : on peut ou il faut (dans les avis, d'ordinaire il faut). <b>-bar</b> : qui peut être fait. Avec les verbes séparables : <i>abzugeben</i>.",
      table: {
        head: ["forme", "équivaut à", "exemple"],
        rows: [
          ["sich lassen + infinitif", "kann ... werden", "Das Problem lässt sich lösen."],
          ["sein + zu + infinitif", "muss / kann ... werden", "Der Antrag ist abzugeben."],
          ["adjectif en -bar", "kann ... werden", "Das Problem ist lösbar."],
          ["man + actif", "impersonnel", "Das macht man so."]
        ]
      },
      examples: [
        { tr: "Le problème se résout facilement.", note: "sich lassen + infinitif" },
        { tr: "La demande est à remettre d'ici vendredi.", note: "sein + zu : obligation" },
        { tr: "La facture est à payer sous 14 jours.", note: "sein + zu dans les avis" },
        { tr: "Cette tâche est difficilement résoluble.", note: "-bar comme -able, -ible" },
        { tr: "L'eau n'est pas potable.", note: "trinkbar" },
        { tr: "Ici, il est interdit de fumer.", note: "passif avec modal, par comparaison" }
      ]
    },
    vocab: [
      "la norme, le règlement",
      "la taxe, les droits (à payer)",
      "le certificat, l'attestation",
      "la preuve, le justificatif",
      "la facture, la note",
      "le document ; au pluriel, les documents, le dossier",
      "régler, s'occuper de",
      "présenter, déposer (une demande)",
      "remplir",
      "résoluble",
      "faisable",
      "admis, autorisé"
    ],
    exercises: [
      {
        q: "Lisez l'avis : « Die Unterlagen sind bis zum 15. Mai beim Amt einzureichen. » Que signifie-t-il ?",
        opts: [
          "les documents doivent être déposés au bureau au plus tard le 15 mai",
          "les documents peuvent être déposés après le 15 mai",
          "le bureau enverra les documents au plus tard le 15 mai"
        ],
        why: "<i>sind ... einzureichen</i> est <i>sein + zu</i> : dans un avis, il exprime une <b>obligation</b>, « sont à déposer »."
      },
      {
        q: "Un client vous demande d'avancer une livraison. Vous répondez : « Das lässt sich machen. » Que lui dites-vous ?",
        opts: [
          "que cela peut se faire",
          "que vous ne le ferez pas",
          "que quelqu'un vous laisse le faire"
        ],
        why: "<i>Das lässt sich machen</i> = <i>Das kann gemacht werden</i> : vous acceptez, « ça peut se faire »."
      },
      {
        q: "Quelle phrase a le même sens que « Das Problem kann leicht gelöst werden » ?",
        opts: [
          "Das Problem lässt sich leicht lösen.",
          "Das Problem lässt leicht lösen.",
          "Das Problem ist leicht gelöst worden."
        ],
        why: "<b>sich lassen</b> + infinitif équivaut à <i>kann ... werden</i> ; sans <i>sich</i>, la phrase ne fonctionne pas, et la troisième est un Perfekt passif au sens différent."
      },
      {
        q: "Complétez l'avis : « Die Rechnung ist innerhalb von 14 Tagen zu ___. »",
        hint: "payer",
        why: "<b>bezahlen</b> (ou <i>zahlen</i>) : <i>ist zu bezahlen</i>, « est à payer »."
      },
      {
        q: "Dans un rapport : « Die Folgen der Entscheidung sind noch nicht ___. »",
        hint: "de vorhersehen, adjectif en -bar",
        why: "<b>vorhersehbar</b> (ou <i>absehbar</i>) : « prévisible » ; le suffixe <i>-bar</i> dit qu'une chose peut être faite."
      },
      {
        q: "Complétez l'avis aux locataires (troisième trou : un adjectif en -bar formé sur beheben).",
        tr: "Chers locataires, le chauffage ne pourra malheureusement être réparé que la semaine prochaine. D'ici là, les fenêtres sont à garder fermées. La panne peut cependant être éliminée : le technicien vient lundi.",
        why: "<i>lässt sich ... reparieren</i> (on peut), <i>sind ... zu halten</i> (sont à garder), <i>behebbar</i> (qu'on peut éliminer) : on élimine une panne (<i>beheben</i>), on répare l'objet (<i>Die Heizung ist reparierbar</i>)."
      },
      {
        q: "Remettez les mots dans l'ordre.",
        tr: "La demande est à remettre au bureau d'ici vendredi.",
        why: "<i>Der Antrag ist bis Freitag beim Amt abzugeben.</i> <i>abzugeben</i> ferme la phrase ; <i>bis Freitag</i> et <i>beim Amt</i> peuvent échanger leur place."
      },
      {
        q: "Traduisez : « Ce problème ne peut pas être résolu en un jour. »",
        why: "<i>Dieses Problem lässt sich nicht an einem Tag lösen</i> ; <i>ist nicht ... zu lösen</i>, <i>kann nicht ... gelöst werden</i> et <i>kann man nicht ... lösen</i> conviennent aussi."
      },
      {
        tr: "Mesdames et Messieurs, le formulaire est à remplir intégralement et à déposer d'ici la fin du mois. Les documents manquants peuvent aussi être remis plus tard.",
        why: "Dans <i>vollständig</i>, le <b>v</b> se prononce [f] ; dans <i>auszufüllen</i>, l'accent tombe sur <b>aus</b> ; dans <i>nachreichen</i>, l'accent tombe sur <b>nach</b>."
      },
      {
        tr: "Cela peut sûrement se régler d'ici demain.",
        why: "Dans <i>lässt</i>, le <b>ä</b> est bref ; dans <i>bestimmt</i>, l'accent tombe sur <b>stimmt</b> ; dans <i>erledigen</i>, l'accent tombe sur <b>le</b>."
      }
    ]
  },
  "lesson:c1-u02-l3": {
    theme: "Circulation et expressions idiomatiques",
    title: "umfahren ou umfahren ? Expressions idiomatiques",
    objectives: [
      "distinguer les préfixes séparables des inséparables avec le même verbe",
      "comprendre un bulletin d'information routière",
      "reconnaître et employer quelques expressions idiomatiques fréquentes",
      "comprendre quand une expression ne se traduit pas à la lettre"
    ],
    theory: [
      {
        h: "Le même verbe, deux verbes",
        p: "Avec <strong>durch-, über-, um-, unter-, wieder-</strong>, le même verbe peut être séparable ou inséparable, avec des sens différents. <em>Er hat das Schild <strong>umgefahren</strong></em> : il l'a renversé avec la voiture (séparable, accent sur <em>um</em>). <em>Wir haben den Stau <strong>umfahren</strong></em> : nous l'avons contourné (inséparable, accent sur <em>fah</em>). Aux formes conjuguées, le séparable se détache (<em>Die Fähre setzt uns über</em>), l'inséparable non (<em>Sie übersetzt den Text</em>)."
      },
      {
        h: "Les expressions idiomatiques",
        p: "Les expressions idiomatiques (<em>Redewendungen</em>) ont un sens figuré qui ne se déduit pas des mots : <em>Das geht mir gegen den Strich</em> (cela me déplaît), <em>den Nagel auf den Kopf treffen</em> (mettre dans le mille), <em>jemandem auf die Nerven gehen</em> (taper sur les nerfs de quelqu'un), <em>etwas auf die lange Bank schieben</em> (remettre à plus tard). On les emploie surtout à l'oral et dans la presse ; dans un texte très formel, on préfère l'expression directe."
      },
      {
        contrast: "Le français règle cela avec deux verbes distincts : <em>contourner</em> et <em>renverser</em> pour <em>umfahren</em>, <em>traduire</em> et <em>faire traverser</em> pour <em>übersetzen</em> ; l'allemand a deux verbes de même forme écrite à l'infinitif, que distinguent l'accent et la séparation. Côté expressions, le français a des équivalents proches (<em>taper sur les nerfs</em> = <em>auf die Nerven gehen</em> ; <em>à rebrousse-poil</em> rappelle <em>gegen den Strich</em>), mais l'image change souvent : <em>mettre dans le mille</em> devient « frapper le clou sur la tête », <em>remettre à plus tard</em> devient « pousser sur le long banc ». Attention au faux ami : <em>enfoncer le clou</em> en français veut dire insister, et non cogner juste. Traduire mot à mot donne des phrases incompréhensibles."
      },
      {
        trap: "Dans cette paire, le participe distingue les deux verbes : <em>umgefahren</em> (renversé) ou <em>umfahren</em> (contourné). En général, comptent aussi l'accent et la séparation aux formes conjuguées, car certains verbes séparables ne prennent pas <em>ge-</em> (<em>anprobiert</em>). Écrire <em>Wir haben den Stau umgefahren</em> signifie que vous avez renversé le bouchon, pas que vous l'avez évité."
      },
      {
        tip: "Quand vous rencontrez une expression nouvelle, notez-la avec une phrase entière et une situation : <em>Er schiebt die Steuererklärung auf die lange Bank.</em> Isolée, elle s'oublie ; dans une scène, elle reste."
      }
    ],
    grammar: {
      title: "Préfixes séparables ou inséparables, et expressions idiomatiques",
      note: "<b>Séparable</b> : accent sur le préfixe, préfixe détaché, participe avec <i>-ge-</i> si le verbe de base le prévoit (<i>umgefahren</i>). <b>Inséparable</b> : accent sur une syllabe après le préfixe (<i>wiederholen</i> avec l'accent sur <i>ho</i>), préfixe attaché, participe sans <i>ge-</i> (<i>umfahren</i>).",
      table: {
        head: ["séparable", "signification", "inséparable", "signification"],
        rows: [
          ["Er hat das Schild umgefahren.", "renverser avec la voiture", "Wir haben den Stau umfahren.", "contourner"],
          ["Die Fähre setzt uns über.", "faire traverser", "Sie hat den Text übersetzt.", "traduire"],
          ["Wir sind durchgefahren.", "rouler sans s'arrêter", "Wir haben die Schweiz durchfahren.", "traverser"]
        ]
      },
      examples: [
        { tr: "Il a renversé le panneau avec sa voiture.", note: "séparable : umgefahren" },
        { tr: "Nous avons contourné le bouchon.", note: "inséparable : umfahren" },
        { tr: "Elle a traduit la lettre en anglais.", note: "inséparable : übersetzt" },
        { tr: "Le bac nous fait passer sur l'autre rive.", note: "séparable : setzt ... über" },
        { tr: "Cela me hérisse vraiment.", note: "expression : gegen den Strich gehen, contrariété" },
        { tr: "Tu as mis dans le mille.", note: "expression : den Nagel auf den Kopf treffen" }
      ]
    },
    vocab: [
      "l'expression idiomatique",
      "le proverbe",
      "le détour, le tour plus long",
      "la rive",
      "la déviation (routière)",
      "le bouchon, l'embouteillage",
      "contourner (inséparable) ; renverser avec la voiture (séparable)",
      "traduire (inséparable) ; faire traverser en bac (séparable)",
      "rouler sans s'arrêter (séparable) ; traverser (inséparable)",
      "converser, bavarder",
      "répéter",
      "mit + datif : savoir s'y prendre avec (séparable) ; etwas umgehen : contourner, éluder (inséparable)"
    ],
    exercises: [
      {
        q: "Bulletin routier : « Wegen eines Unfalls ist die A8 gesperrt. Autofahrer sollten den Bereich weiträumig umfahren. » Que conseille-t-on ?",
        opts: [
          "de contourner la zone en gardant une large marge",
          "de traverser la zone lentement",
          "de renverser les obstacles sur la route"
        ],
        why: "Ici, <i>umfahren</i> est inséparable (accent sur <i>fah</i>) : « contourner ». <i>weiträumig</i> signifie « en gardant une large marge »."
      },
      {
        q: "Complétez : « Der Fahrer hat das Schild ___. » (il l'a renversé avec sa voiture)",
        opts: [
          "umgefahren",
          "umfahren",
          "umgefährt"
        ],
        why: "Au sens de « renverser », <i>umfahren</i> est séparable, donc le participe a <i>-ge-</i> : <b>umgefahren</b>."
      },
      {
        q: "En réunion, une collègue vous dit : « Da hast du den Nagel auf den Kopf getroffen. » Que veut-elle dire ?",
        opts: [
          "que vous avez mis dans le mille",
          "que vous avez fait une grave erreur",
          "que vous avez parlé de façon trop directe"
        ],
        why: "<i>den Nagel auf den Kopf treffen</i> = « mettre dans le mille » : c'est un compliment."
      },
      {
        q: "Complétez : « Die Fähre ___ uns ans andere Ufer über. »",
        hint: "übersetzen séparable, troisième personne du singulier",
        why: "<b>setzt</b> : au sens de « faire traverser en bac », <i>übersetzen</i> est séparable, et <i>über</i> va en fin de phrase."
      },
      {
        q: "Complétez le récit avec umfahren et durchfahren.",
        tr: "Le centre-ville était fermé à la circulation à cause du chantier, nous avons donc dû le contourner. Ensuite, nous avons roulé toute la nuit sans nous arrêter et ne sommes arrivés que le matin.",
        why: "<i>umfahren</i> (inséparable, infinitif après <i>mussten</i>) et <i>durchgefahren</i> (séparable, participe avec <i>-ge-</i>)."
      },
      {
        q: "Associez chaque expression à son sens.",
        pairs: [
          "heurter ses principes ou ses goûts",
          "mettre dans le mille",
          "taper sur les nerfs",
          "remettre à plus tard"
        ]
      },
      {
        q: "Dans quelles phrases le préfixe est-il inséparable ?",
        opts: [
          "Wir haben den Stau umfahren.",
          "Sie hat den Text übersetzt.",
          "Er hat das Schild umgefahren.",
          "Die Fähre setzt uns über."
        ],
        why: "Les deux premières : participe sans <i>ge-</i> (<i>umfahren, übersetzt</i>) ; l'indice vaut pour ces exemples, car certains verbes séparables n'ont pas non plus <i>ge-</i> (<i>anprobiert</i>) : regardez aussi l'accent et la séparation aux formes conjuguées. Dans la troisième, le participe a <i>-ge-</i>, dans la quatrième le préfixe se détache : elles sont séparables."
      },
      {
        q: "Traduisez : « Cette expression ne peut pas se traduire littéralement. » (die Redewendung, wörtlich)",
        why: "<i>Diese Redewendung lässt sich nicht wörtlich übersetzen</i> ; <i>ist nicht wörtlich zu übersetzen</i>, <i>kann man nicht ...</i>, <i>kann nicht ... übersetzt werden</i> et <i>Wort für Wort</i> conviennent aussi."
      },
      {
        tr: "À cause d'un accident sur l'A8, il y a une déviation. Le mieux est de contourner la zone par la route nationale ; comptez un détour de vingt minutes.",
        why: "Dans <i>umfahren</i>, l'accent tombe ici sur <b>fah</b> ; dans <i>Umleitung</i>, l'accent tombe sur <b>Um</b> ; dans <i>Bundesstraße</i>, <b>ß</b> se prononce [s]."
      },
      {
        tr: "Cette expression est difficilement traduisible.",
        why: "Dans <i>Redewendung</i>, l'accent tombe sur <b>Re</b> ; dans <i>kaum</i>, <b>au</b> se prononce [aʊ] ; dans <i>übersetzen</i>, l'accent tombe sur <b>set</b>."
      }
    ]
  },
  "lesson:c1-u02-test": {
    theme: "Vérification",
    title: "Test : Réussir à mener quelque chose à bien",
    objectives: [
      "vérifier les verbes de fonction, les substituts du passif et les préfixes séparables et inséparables"
    ],
    theory: [
      {
        p: "Dix questions sur toute l'unité. On réussit avec 70 %. Ne regardez pas les leçons pendant que vous répondez : si vous ne vous souvenez pas de quelque chose, mieux vaut revenir en arrière et réviser."
      }
    ],
    exercises: [
      {
        q: "Complétez : « Wann ___ das neue Gesetz in Kraft? »",
        hint: "treten, troisième personne du singulier",
        why: "<b>tritt</b> : <i>in Kraft treten</i>, avec le changement vocalique au présent."
      },
      {
        q: "Complétez : « Das Problem ___ sich leicht lösen. » (le problème se résout facilement)",
        hint: "un verbe, troisième personne du singulier",
        why: "<b>lässt</b> : <i>lässt sich lösen</i> = <i>kann gelöst werden</i>."
      },
      {
        q: "Complétez l'avis : « Der Bericht ist bis Montag ___. »",
        hint: "le rapport est à remettre d'ici lundi (abgeben)",
        why: "<b>abzugeben</b> : <i>sein + zu</i>, avec <i>zu</i> entre la particule et le verbe."
      },
      {
        q: "Complétez : « Wir haben die Baustelle ___. » (nous l'avons contournée)",
        hint: "umfahren inséparable, participe",
        why: "<b>umfahren</b> : au sens de « contourner », le verbe est inséparable et le participe n'a pas de <i>ge-</i>."
      },
      {
        q: "Lisez l'annonce : « Für die Stelle kommen nur Bewerber mit Erfahrung in Frage. » Qui peut être retenu ?",
        opts: [
          "seulement les candidats expérimentés",
          "tous les candidats qui posent des questions",
          "aucun candidat pour l'instant"
        ],
        why: "<i>in Frage kommen</i> = « être possible » : <b>seuls ceux qui ont de l'expérience</b> entrent en ligne de compte."
      },
      {
        q: "Dans un règlement universitaire : quelle phrase exprime une obligation, et pas seulement une possibilité ?",
        opts: [
          "Die Hausarbeit ist bis zum 30. Juni abzugeben.",
          "Die Hausarbeit lässt sich bis zum 30. Juni abgeben.",
          "Die Hausarbeit kann bis zum 30. Juni abgegeben werden."
        ],
        why: "Dans un règlement, <b>sein + zu</b> exprime d'ordinaire une obligation (« est à remettre »). Les deux autres sont correctes mais disent seulement que la remise est possible."
      },
      {
        q: "Une collègue dit de la réunion du vendredi soir : « Das geht mir gegen den Strich. » Comment se sent-elle ?",
        opts: [
          "agacée",
          "contente",
          "fatiguée"
        ],
        why: "<i>gegen den Strich gehen</i> = « agacer, déplaire »."
      },
      {
        q: "Associez chaque groupe à son sens.",
        pairs: [
          "mettre à disposition",
          "prendre une décision",
          "être possible",
          "exprimer"
        ]
      },
      {
        tr: "À partir de janvier, une nouvelle norme entre en vigueur : toutes les demandes sont à déposer en ligne. À cette fin, la ville met des ordinateurs à disposition dans chaque bibliothèque.",
        why: "Dans <i>Vorschrift</i>, l'accent tombe sur <b>Vor</b> ; dans <i>einzureichen</i>, l'accent tombe sur <b>ein</b> ; dans <i>Bibliothek</i>, l'accent tombe sur <b>thek</b>."
      },
      {
        tr: "Les documents sont à remettre d'ici la fin du mois.",
        why: "Dans <i>Monats</i>, le <b>o</b> est long ; dans <i>einzureichen</i>, <b>ei</b> se prononce [aɪ]."
      }
    ]
  },
  "unit:c1-u03": {
    title: "Registres et textualité",
    grammarNote: "Style nominal et langue administrative (Amtsdeutsch) · particules et ellipses de l'oral · corrélatifs (darauf, dass ; es, dass) et connecteurs pour construire un texte cohérent · révision des unités 1 à 3"
  },
  "lesson:c1-u03-l1": {
    theme: "Administrations et avis publics",
    title: "L'allemand administratif",
    objectives: [
      "comprendre un avis en Amtsdeutsch",
      "reformuler le style nominal en style verbal et inversement",
      "reconnaître les verbes typiques de l'administration (erfolgen, erheben, gewähren)",
      "choisir le registre adapté au destinataire"
    ],
    theory: [
      {
        h: "Qu'est-ce que l'Amtsdeutsch",
        p: "La langue des administrations emploie beaucoup le <strong>style nominal</strong> : des verbes transformés en noms (<em>die Antragstellung, die Nichtbeachtung, das Betreten</em>), des subordonnées remplacées par des groupes à préposition (<em>nach Abschluss, bei Nichtbeachtung, zur Vermeidung</em>), des verbes peu expressifs comme <em>erfolgen</em> (avoir lieu), <em>erheben</em> (percevoir), <em>gewähren</em> (accorder). <em>Die Antragstellung erfolgt online</em> signifie simplement « la demande se fait en ligne »."
      },
      {
        h: "Du style nominal au style verbal",
        p: "Pour comprendre un avis, transformez le groupe nominal en subordonnée : <em>Nach Abschluss der Arbeiten</em> → <em>Nachdem die Arbeiten abgeschlossen sind</em> ; <em>Bei Nichtbeachtung</em> → <em>Wenn man das nicht beachtet</em> ; <em>Zur Vermeidung von Wartezeiten</em> → <em>Um Wartezeiten zu vermeiden</em>. Le génitif du groupe nominal (<em>der Arbeiten</em>) redevient sujet ou objet de la subordonnée."
      },
      {
        contrast: "Le français administratif connaît lui aussi ces formes (<em>à l'issue des travaux</em>, <em>en cas de non-respect</em>, <em>afin d'éviter</em>) : la structure est donc familière, et même les écriteaux nominaux (<em>port du casque obligatoire</em>) ont leur équivalent. La différence, c'est que l'allemand rattache le complément du nom par un génitif sans préposition (<em>die Beachtung der Regeln</em>), là où le français met <em>de</em> (<em>le respect des règles</em>), et que dans les avis le style nominal se combine avec <em>sein + zu</em> (<em>ist ein Helm aufzusetzen</em>). Pour <em>erfolgen</em>, pensez à <em>avoir lieu</em> ou <em>s'effectuer</em> : <em>Die Zahlung erfolgt per Überweisung</em> = <em>le paiement s'effectue par virement</em>."
      },
      {
        trap: "Le style nominal convient aux avis et aux lettres officielles, pas à un mail entre amis : <em>Nach Abschluss der Arbeiten erfolgt unser Treffen</em> dans un mail privé sonne ridicule, comme « à l'issue des travaux, notre rencontre aura lieu » dans un SMS. Là, on écrit <em>Wir sehen uns, sobald die Arbeiten fertig sind</em>."
      },
      {
        tip: "Devant un nom en <em>-ung</em> ou un infinitif substantivé (<em>das Betreten</em>), demandez-vous quel verbe se cache derrière (<em>betreten</em>) et qui fait l'action : souvent, c'est « n'importe qui », c'est-à-dire <em>man</em>."
      }
    ],
    grammar: {
      title: "Style nominal et style verbal",
      note: "<b>Nominal</b> : préposition + nom, souvent avec un génitif qui dépend du nom (<i>nach Abschluss der Arbeiten</i>). <b>Verbal</b> : construction avec un verbe, c'est-à-dire une subordonnée (<i>nachdem die Arbeiten abgeschlossen sind</i>) ou un infinitif avec <i>zu</i> (<i>um Wartezeiten zu vermeiden</i>). Verbes typiques : <i>erfolgen, erheben, gewähren</i>.",
      table: {
        head: ["style nominal", "style verbal"],
        rows: [
          ["Nach Abschluss der Arbeiten ...", "Nachdem die Arbeiten abgeschlossen sind, ..."],
          ["Bei Nichtbeachtung ...", "Wenn man das nicht beachtet, ..."],
          ["Zur Vermeidung von Wartezeiten ...", "Um Wartezeiten zu vermeiden, ..."],
          ["Vor Betreten der Baustelle ...", "Bevor man die Baustelle betritt, ..."],
          ["Die Antragstellung erfolgt online.", "Man stellt den Antrag online."]
        ]
      },
      examples: [
        { tr: "À l'issue des travaux, la route sera rouverte.", note: "nach régit le datif (Abschluss) ; der Arbeiten est le génitif qui dépend de Abschluss" },
        { tr: "En cas de non-respect, une amende est infligée.", note: "bei Nichtbeachtung = wenn man die Vorschriften nicht beachtet" },
        { tr: "Afin d'éviter les temps d'attente, nous vous prions de prendre rendez-vous.", note: "zur Vermeidung = um ... zu vermeiden" },
        { tr: "En raison de la forte pluie, le concert a été annulé.", note: "wegen + génitif à la place de weil" },
        { tr: "La demande se fait en ligne.", note: "erfolgen : avoir lieu, typique des administrations" },
        { tr: "Avant d'entrer sur le chantier, le port du casque est obligatoire.", note: "vor Betreten + sein zu" }
      ]
    },
    vocab: [
      "la décision administrative, la notification officielle",
      "l'amende, la sanction",
      "l'autorité, l'organisme public",
      "la compétence (d'un service)",
      "l'arrêté, le décret",
      "le non-respect",
      "avoir lieu, s'effectuer",
      "percevoir (une taxe) ; infliger (une amende)",
      "accorder",
      "demander (officiellement)",
      "compétent",
      "selon, conformément à"
    ],
    exercises: [
      {
        q: "Lisez : « Bei Nichtbeachtung der Parkregeln wird ein Bußgeld erhoben. » Comment l'expliqueriez-vous à un ami ?",
        opts: [
          "Wenn man sich nicht an die Parkregeln hält, muss man eine Strafe zahlen.",
          "Wer die Parkregeln nicht kennt, bekommt Geld zurück.",
          "Die Stadt beachtet die Parkregeln nicht."
        ],
        why: "<i>bei Nichtbeachtung</i> = « si l'on ne respecte pas » ; <i>ein Bußgeld erheben</i> = « infliger une amende ». La première phrase dit la même chose en style verbal."
      },
      {
        q: "Quel groupe nominal correspond à « Weil es stark regnete, ... » ?",
        opts: [
          "Wegen des starken Regens ...",
          "Trotz des starken Regens ...",
          "Während des starken Regens ..."
        ],
        why: "<i>weil</i> exprime une cause : <b>wegen</b> + génitif. <i>trotz</i> est concessif, <i>während</i> temporel."
      },
      {
        q: "Vous écrivez un message à une amie sur les travaux chez vous. Quelle phrase convient au registre ?",
        opts: [
          "Wir sehen uns, sobald die Arbeiten fertig sind.",
          "Nach Abschluss der Arbeiten erfolgt unser Wiedersehen.",
          "Bei Fertigstellung der Arbeiten wird ein Treffen durchgeführt."
        ],
        why: "Entre amis, on emploie le style verbal. Les deux autres sont correctes mais en Amtsdeutsch, hors de propos dans un message privé."
      },
      {
        q: "Complétez l'avis : « Die Antragstellung ___ ausschließlich online. »",
        hint: "verbe administratif : « a lieu »",
        why: "<b>erfolgt</b> : <i>erfolgen</i> est le verbe typique des administrations pour « avoir lieu, s'effectuer »."
      },
      {
        q: "Complétez l'avis de la mairie.",
        tr: "Chères citoyennes, chers citoyens, à l'issue des travaux, la route sera rouverte. Afin d'éviter les temps d'attente, nous vous prions de prendre rendez-vous.",
        why: "<i>Nach Abschluss der Bauarbeiten</i> : <i>nach</i> + datif, avec le génitif <i>der Bauarbeiten</i> qui dépend de <i>Abschluss</i>. <i>Zur Vermeidung von Wartezeiten</i> : <i>zu</i> + datif, avec <i>von</i> + datif à la place du génitif. Tous deux remplacent une subordonnée."
      },
      {
        q: "Associez chaque mot à son sens.",
        pairs: [
          "la décision administrative, la notification officielle",
          "l'autorité, l'organisme public",
          "l'amende",
          "l'arrêté"
        ]
      },
      {
        q: "Remettez dans l'ordre les mots de l'écriteau.",
        tr: "Avant d'entrer sur le chantier, le port du casque est obligatoire.",
        why: "<i>Vor Betreten der Baustelle ist ein Helm aufzusetzen.</i> Groupe nominal en première place, puis <i>ist</i>, et <i>aufzusetzen</i> à la fin."
      },
      {
        q: "Reformulez en style verbal, avec une subordonnée : « Nach Abschluss der Arbeiten wird die Straße freigegeben. »",
        why: "<i>Nachdem die Arbeiten abgeschlossen sind, wird die Straße freigegeben</i> : le génitif <i>der Arbeiten</i> redevient sujet ; <i>wenn</i>, <i>sobald</i> (qui ajoute l'idée d'immédiateté) et <i>abgeschlossen worden sind</i> sont aussi acceptés."
      },
      {
        tr: "Mesdames et Messieurs, selon le nouvel arrêté, à partir de mai, la demande se fait exclusivement en ligne. Pour toute question, adressez-vous au service compétent.",
        why: "Dans <i>Verordnung</i>, l'accent tombe sur <b>ord</b> ; dans <i>ausschließlich</i>, l'accent tombe sur <b>aus</b> ; dans <i>zuständige</i>, l'accent tombe sur <b>zu</b>."
      },
      {
        tr: "Le paiement s'effectue par virement.",
        why: "Dans <i>Zahlung</i>, le <b>a</b> est long et le <b>h</b> est muet ; dans <i>erfolgt</i>, l'accent tombe sur <b>folgt</b> ; dans <i>Überweisung</i>, l'accent tombe sur <b>wei</b>."
      }
    ]
  },
  "lesson:c1-u03-l2": {
    theme: "Conversation spontanée",
    title: "Comment on parle vraiment",
    objectives: [
      "comprendre les particules modales de l'oral (doch, ja, mal, halt, eben)",
      "reconnaître les ellipses typiques de l'oral (Weiß ich nicht, Passt schon)",
      "répondre de façon naturelle dans une conversation informelle",
      "distinguer l'oral de l'écrit formel"
    ],
    theory: [
      {
        h: "Les particules changent le ton",
        p: "À l'oral, les particules modales disent ce que pense celui qui parle. <strong>doch</strong> encourage ou rappelle (<em>Komm doch mit!</em>), <strong>ja</strong> présente une chose comme connue ou surprenante (<em>Das hast du ja schon gesagt. Das ist ja toll!</em>), <strong>mal</strong> adoucit une demande (<em>Hast du mal kurz Zeit?</em>), <strong>halt</strong> et <strong>eben</strong> expriment la résignation (<em>Das ist halt so</em>). Sans la particule, la phrase reste correcte mais perd cette nuance : une demande peut sembler plus brusque, une exclamation perd la surprise ou le rappel de ce que les deux interlocuteurs savent."
      },
      {
        h: "Ellipses et formules",
        p: "L'oral laisse tomber ce que le contexte permet de comprendre, souvent le sujet ou le <em>das</em> initial : <em>Weiß ich nicht</em> (= <em>Das weiß ich nicht</em>), <em>Kann sein</em>, <em>Passt schon</em>, <em>Mal sehen</em>. Elles sont normales entre amis et collègues ; dans une lettre ou à un examen écrit, on emploie des phrases complètes."
      },
      {
        contrast: "Le français n'a pas de particules modales : il rend ces nuances par l'intonation ou par des mots comme <em>donc</em>, <em>allez</em>, <em>quand même</em>, <em>mais</em>, <em>quoi</em>, <em>hein</em>, <em>un peu</em> ou par le conditionnel de politesse. <em>Komm doch mit!</em> est proche de « viens donc ! » ou « allez, viens ! », <em>Das ist ja toll!</em> de « mais c'est génial ! », <em>Hast du mal kurz Zeit?</em> de « tu aurais une minute ? », <em>Das ist halt so</em> de « c'est comme ça, quoi » ou « que veux-tu ». Il n'y a pas d'équivalent mot à mot : on apprend la fonction. Côté ellipses, le français fait de même (<em>sais pas</em>, <em>ça va aller</em>), et <em>Passt schon</em> se rapproche de « ça ira »."
      },
      {
        trap: "Avec ce sens, les particules ne se placent pas en première position : <em>Komm doch mit</em>, et non <em>Doch komm mit</em>. Et <em>doch</em> comme réponse à une question négative (<em>Kommst du nicht? – Doch!</em>) est autre chose : c'est le « si » français (<em>Tu ne viens pas ? Si !</em>), pas une particule modale."
      },
      {
        tip: "Quand vous écoutez, notez où tombent les particules : d'ordinaire juste après le verbe et les pronoms, avant l'information nouvelle. <em>Ich bin eigentlich ziemlich müde.</em>"
      }
    ],
    grammar: {
      title: "Particules et ellipses de l'oral",
      note: "<b>doch</b> : encourage, rappelle. <b>ja</b> : chose connue, surprise. <b>mal</b> : adoucit. <b>halt / eben</b> : résignation. Ellipses : <i>Weiß ich nicht, Kann sein, Passt schon</i>.",
      table: {
        head: ["particule ou forme", "effet", "exemple"],
        rows: [
          ["doch", "encourage, rappelle", "Komm doch mit!"],
          ["ja", "chose connue, surprise", "Das ist ja unglaublich!"],
          ["mal", "adoucit une demande", "Hast du mal kurz Zeit?"],
          ["halt, eben", "résignation", "Das ist halt so."],
          ["ellipses", "on omet ce qui est clair", "Weiß ich nicht. Passt schon."]
        ]
      },
      examples: [
        { tr: "Allez, viens avec nous !", note: "doch + einfach : invitation" },
        { tr: "Mais c'est incroyable !", note: "ja : surprise" },
        { tr: "Tu as un moment ?", note: "mal : demande plus aimable" },
        { tr: "Bah, peut-être.", note: "ellipse : Kann sein" },
        { tr: "Je ne sais pas.", note: "ellipse : il manque das" },
        { tr: "C'est bon comme ça, pas de souci.", note: "formule de l'oral" }
      ]
    },
    vocab: [
      "l'excuse, le prétexte",
      "l'allusion",
      "le ton (de la voix)",
      "la formule toute faite, la formule de politesse",
      "le malentendu",
      "la langue parlée, le registre familier",
      "bavarder (familier)",
      "se donner rendez-vous",
      "redemander, se renseigner",
      "en réalité, à vrai dire",
      "de toute façon, en tout cas",
      "c'est comme ça, point (présente un fait comme inévitable)"
    ],
    exercises: [
      {
        q: "Au café, un ami dit : « Komm doch mit! » Qu'ajoute doch ?",
        opts: [
          "une invitation encourageante",
          "un reproche",
          "un doute"
        ],
        why: "Dans une demande ou une invitation, <b>doch</b> encourage : « allez, viens avec nous »."
      },
      {
        q: "Un collègue dit : « Das hast du ja schon gestern gesagt. » Que signale ja ?",
        opts: [
          "que la chose est déjà connue des deux",
          "qu'il n'y croit pas",
          "qu'il pose une question"
        ],
        why: "Ici, <b>ja</b> présente l'information comme déjà connue : « tu l'as déjà dit hier, on le sait »."
      },
      {
        q: "Une amie vous demande : « Kommst du heute Abend? » Quelle réponse est la plus naturelle à l'oral ?",
        opts: [
          "Weiß ich noch nicht.",
          "Das Wissen darüber besitze ich noch nicht.",
          "Eine Entscheidung darüber ist noch nicht erfolgt."
        ],
        why: "À l'oral, on omet <i>das</i> : <b>Weiß ich noch nicht</b>. Les deux autres relèvent du style administratif, hors de propos entre amis."
      },
      {
        q: "Complétez : « Hast du ___ kurz Zeit? »",
        hint: "particule qui rend la demande aimable",
        why: "<b>mal</b> : adoucit la demande, comme « une minute »."
      },
      {
        q: "Complétez : « Das ist ___ so, da kann man nichts machen. »",
        hint: "particule de résignation",
        why: "<b>halt</b> (ou <i>eben</i>) : « c'est comme ça, que veux-tu »."
      },
      {
        q: "Complétez le dialogue avec eigentlich, doch et echt.",
        tr: "« Tu viens au cinéma aujourd'hui ? » « Je ne sais pas, en fait je suis plutôt fatigué. » « Mais allez, viens, le film est vraiment génial ! »",
        why: "<i>eigentlich</i> (en fait), <i>doch</i> (encourage), <i>echt</i> ou <i>wirklich</i> (vraiment) : trois mots typiques de l'oral."
      },
      {
        q: "Quelles phrases sont typiques de l'oral informel ?",
        opts: [
          "Weiß ich nicht.",
          "Passt schon.",
          "Bei Nichtbeachtung erfolgt eine Mahnung.",
          "Gemäß der Verordnung ist dies untersagt."
        ],
        why: "Les deux premières sont des ellipses de l'oral. Les deux autres relèvent de l'Amtsdeutsch."
      },
      {
        q: "Traduisez, sur un ton informel : « Allez, viens avec nous, de toute façon tu vas en ville ! » (mitkommen, sowieso, in die Stadt gehen)",
        why: "<i>Komm doch mit, du gehst sowieso in die Stadt</i> : <i>doch</i> pour l'invitation, <i>sowieso</i> pour « de toute façon » ; on peut ajouter <i>ja</i> ou <i>doch</i> devant <i>sowieso</i>."
      },
      {
        tr: "« Alors, comment c'était hier ? » « Ah, plutôt bien dans l'ensemble. Le film était un peu long, quoi, mais sinon vraiment génial. »",
        why: "Dans <i>eigentlich</i>, l'accent tombe sur <b>ei</b> ; dans <i>bisschen</i>, <b>ss</b> se prononce [s] ; dans <i>sonst</i>, le <b>o</b> est bref."
      },
      {
        tr: "Allez, viens avec nous, ce sera sûrement amusant !",
        why: "Dans <i>einfach</i>, l'accent tombe sur <b>ein</b> ; dans <i>bestimmt</i>, l'accent tombe sur <b>stimmt</b> ; dans <i>lustig</i>, le <b>g</b> final se prononce [ç]."
      }
    ]
  },
  "lesson:c1-u03-l3": {
    theme: "Exposés et présentations",
    title: "Cohésion : darauf, dass ...",
    objectives: [
      "employer les corrélatifs darauf, daran, darüber devant une subordonnée",
      "employer es comme annonciateur",
      "organiser un texte avec des connecteurs (zunächst, darüber hinaus, schließlich)",
      "relier les phrases d'un paragraphe par des reprises (dadurch, deshalb)"
    ],
    theory: [
      {
        h: "Annoncer une proposition",
        p: "Quand un verbe régit une préposition (<em>sich freuen auf, bestehen auf, sich einigen auf, hinweisen auf</em>) et que le complément est une proposition, la principale peut contenir un adverbe pronominal qui l'annonce ; avec certains verbes, il est obligatoire (<em>bestehen auf</em>), avec d'autres il est facultatif ou change la nuance (<em>Ich freue mich, dass du kommst</em> exprime la joie devant le fait, <em>Ich freue mich darauf, dass du kommst</em> l'attente d'un événement futur) : <em>Er besteht <strong>darauf</strong>, dass wir bleiben. Wir haben uns <strong>darauf</strong> geeinigt, den Termin zu verschieben.</em> Sans préposition, l'annonciateur peut être <strong>es</strong> : <em>Es ist wichtig, dass alle pünktlich sind.</em> Si la subordonnée passe en première position, le <em>es</em> sujet disparaît : <em>Dass alle pünktlich sind, ist wichtig.</em>"
      },
      {
        h: "Tenir un texte ensemble",
        p: "Un texte cohérent guide le lecteur. Pour l'ordre : <em>zunächst, zuerst, dann, anschließend, schließlich</em>. Pour ajouter : <em>darüber hinaus, außerdem</em>. Pour renvoyer à ce qui a été dit : <em>dadurch, deshalb, dabei, darauf</em> : <em>Die Mieten steigen. Dadurch wird Wohnen für viele unbezahlbar.</em>"
      },
      {
        contrast: "En français, la subordonnée suit en général directement le verbe : <em>il insiste pour que nous restions</em>, <em>nous nous sommes mis d'accord pour reporter</em>. Seuls quelques verbes ont un équivalent de <em>darauf</em> avec <em>à ce que</em> ou <em>de ce que</em> (<em>il tient à ce que nous restions</em>, <em>veiller à ce que</em>), qui ressemble beaucoup à <em>Er besteht darauf, dass wir bleiben</em>. En allemand, le verbe à préposition annonce souvent la proposition par <em>darauf, daran, darüber</em>. Avec certains verbes, le corrélatif est obligatoire (<em>Er besteht darauf, dass wir bleiben</em>) ; avec d'autres il est facultatif (<em>Wir haben uns (darauf) geeinigt, den Termin zu verschieben</em>), et dans un écrit soigné on le met d'ordinaire. Autre différence : là où le français met le subjonctif (<em>pour que tous participent</em>), l'allemand emploie l'indicatif après <em>dass</em>."
      },
      {
        trap: "L'adverbe pronominal reprend la préposition du verbe allemand, pas celle du français : <em>bestehen auf → darauf</em>, <em>denken an → daran</em>, <em>sich ärgern über → darüber</em> (« se fâcher de, s'énerver de »). <em>Er besteht daran, dass ...</em> est faux."
      },
      {
        tip: "Apprenez les verbes avec leur préposition et leur adverbe ensemble : <em>sich einigen auf / darauf</em>, <em>hinweisen auf / darauf</em>, <em>eingehen auf / darauf</em>. Dans les présentations, ils reviennent constamment."
      }
    ],
    grammar: {
      title: "Corrélatifs et connecteurs textuels",
      note: "Verbe + préposition + proposition : <b>da(r)- + préposition</b> dans la principale (<i>darauf, dass ...</i>), obligatoire ou facultatif selon le verbe et le sens. Sans préposition : <b>es</b> (<i>Es ist wichtig, dass ...</i>). Ordre du texte : <i>zunächst, dann, schließlich</i> ; ajout : <i>darüber hinaus</i>.",
      table: {
        head: ["verbe", "corrélatif", "exemple"],
        rows: [
          ["bestehen auf", "darauf", "Er besteht darauf, dass wir bleiben."],
          ["sich einigen auf", "darauf", "Wir haben uns darauf geeinigt, den Termin zu verschieben."],
          ["hinweisen auf", "darauf", "Ich weise darauf hin, dass die Frist endet."],
          ["denken an", "daran", "Denk daran, das Licht auszumachen."],
          ["wichtig sein", "es", "Es ist wichtig, dass alle pünktlich sind."]
        ]
      },
      examples: [
        { tr: "J'ai hâte que tu viennes.", note: "sich freuen auf → darauf" },
        { tr: "Il est important que tous soient à l'heure.", note: "es annonce la subordonnée" },
        { tr: "Nous nous sommes mis d'accord pour reporter le rendez-vous.", note: "sich einigen auf → darauf + infinitif" },
        { tr: "Il tient à ce que nous restions.", note: "bestehen auf → darauf" },
        { tr: "Ce point est décisif, c'est pourquoi j'aimerais l'approfondir.", note: "eingehen auf → darauf" },
        { tr: "En outre, il y a d'autres problèmes.", note: "darüber hinaus : ajoute" }
      ]
    },
    vocab: [
      "le lien, le contexte",
      "l'introduction",
      "la conclusion, la fin",
      "le paragraphe, l'alinéa",
      "la référence, le renvoi",
      "la structure, le plan (d'un texte)",
      "se mettre d'accord (auf : sur)",
      "insister (auf : sur)",
      "approfondir, aborder (auf : un thème)",
      "faire remarquer, signaler (auf : quelque chose)",
      "en outre, de plus",
      "enfin, à la fin"
    ],
    exercises: [
      {
        q: "Complétez : « Er besteht ___, dass wir bleiben. »",
        opts: [
          "darauf",
          "daran",
          "dafür"
        ],
        why: "<i>bestehen auf</i> : le corrélatif reprend la même préposition, <b>darauf</b>."
      },
      {
        q: "Quelle phrase est correcte ?",
        opts: [
          "Dass alle pünktlich sind, ist wichtig.",
          "Dass alle pünktlich sind, ist es wichtig.",
          "Es, dass alle pünktlich sind, ist wichtig."
        ],
        why: "Ici la subordonnée est le sujet : quand elle occupe la première place, le <i>es</i> annonciateur n'a plus de rôle et disparaît."
      },
      {
        q: "Dans un essai : « Die Mieten steigen. ___ wird Wohnen für viele Familien unbezahlbar. » Quel connecteur crée le bon lien ?",
        opts: [
          "Dadurch",
          "Trotzdem",
          "Stattdessen"
        ],
        why: "La deuxième phrase est une conséquence de la première : <b>dadurch</b>, « de ce fait, par là »."
      },
      {
        q: "Complétez : « Wir haben uns ___ geeinigt, den Termin zu verschieben. »",
        hint: "sich einigen auf + proposition",
        why: "<b>darauf</b> : il annonce l'infinitif avec <i>zu</i>."
      },
      {
        q: "Complétez : « Auf diese Frage gehe ich später ___. »",
        hint: "particule de eingehen",
        why: "<b>ein</b> : <i>eingehen auf</i> est séparable, « aborder, répondre à »."
      },
      {
        q: "Complétez le plan de la présentation.",
        tr: "D'abord, je voudrais décrire le problème. Ensuite, j'indiquerai des solutions possibles et, enfin, je tirerai une conclusion.",
        why: "<i>Zuerst/Zunächst</i>, <i>Danach/Dann/Anschließend</i>, <i>schließlich/abschließend</i> : les connecteurs guident celui qui écoute."
      },
      {
        q: "Associez chaque mot à son sens.",
        pairs: [
          "l'introduction",
          "le paragraphe",
          "le lien, le contexte",
          "la structure (d'un texte)"
        ]
      },
      {
        q: "Traduisez : « Il insiste pour que tout le monde participe à la réunion. » (bestehen auf, die Besprechung)",
        why: "<i>Er besteht darauf, dass alle an der Besprechung teilnehmen</i> : <i>darauf</i> annonce la subordonnée ; là où le français emploie le subjonctif, l'allemand emploie l'indicatif."
      },
      {
        tr: "Dans mon exposé, j'aborde d'abord les causes. En outre, je voudrais faire remarquer qu'il existe déjà de premières solutions. Enfin, je résume le tout brièvement.",
        why: "Dans <i>Vortrag</i>, l'accent tombe sur <b>Vor</b> ; dans <i>Ursachen</i>, l'accent tombe sur <b>Ur</b> ; dans <i>zusammen</i>, l'accent tombe sur <b>sam</b>."
      },
      {
        tr: "Je voudrais faire remarquer que le délai expire demain.",
        why: "Dans <i>Frist</i>, le <b>i</b> est bref ; dans <i>endet</i>, le premier <b>e</b> est bref."
      }
    ]
  },
  "lesson:c1-u03-test": {
    theme: "Vérification",
    title: "Test : Registres et textualité",
    objectives: [
      "vérifier l'unité et réviser werden, les verbes de fonction et le style nominal des unités 1 à 3"
    ],
    theory: [
      {
        p: "Douze questions sur l'unité et sur les unités 1 à 3. On réussit avec 70 %. Ne regardez pas les leçons pendant que vous répondez : si vous ne vous souvenez pas de quelque chose, mieux vaut revenir en arrière et réviser."
      }
    ],
    exercises: [
      {
        q: "Complétez : « Er ist Lehrer ___. »",
        hint: "participe de werden « devenir »",
        why: "<b>geworden</b> : verbe plein, avec <i>ge-</i>."
      },
      {
        q: "Complétez : « Das neue Gesetz tritt im Mai in ___. »",
        hint: "entrer en vigueur",
        why: "<b>Kraft</b> : <i>in Kraft treten</i>."
      },
      {
        q: "Complétez l'avis : « Die Zahlung ___ per Überweisung. »",
        hint: "a lieu",
        why: "<b>erfolgt</b> : verbe typique de l'Amtsdeutsch."
      },
      {
        q: "Complétez : « Wir müssen noch eine Entscheidung ___. »",
        hint: "prendre (une décision)",
        why: "<b>treffen</b> : <i>eine Entscheidung treffen</i> (dans le style formel aussi <i>fällen</i>)."
      },
      {
        q: "Complétez : « Sie besteht ___, dass wir pünktlich sind. »",
        hint: "corrélatif de bestehen auf",
        why: "<b>darauf</b> : il annonce la subordonnée."
      },
      {
        q: "Complétez : « ___ Abschluss der Arbeiten wird die Straße freigegeben. »",
        hint: "préposition : « après »",
        why: "<b>Nach</b> : <i>nach</i> + datif (<i>Abschluss</i>) à la place de <i>nachdem</i> ; <i>der Arbeiten</i> est le génitif qui dépend du nom."
      },
      {
        q: "Le collègue n'est pas encore arrivé. Qu'exprime « Er wird den Zug wohl verpasst haben » ?",
        opts: [
          "une supposition sur le passé",
          "un futur",
          "un passif"
        ],
        why: "Futur II à valeur de <b>supposition</b> : « il aura raté le train »."
      },
      {
        q: "Quel groupe nominal correspond à « Um die Kosten zu senken, ... » ?",
        opts: [
          "Zur Senkung der Kosten ...",
          "Bei Senkung der Kosten ...",
          "Trotz Senkung der Kosten ..."
        ],
        why: "Le but (<i>um ... zu</i>) se rend par <b>zu</b> + nom : <i>zur Senkung der Kosten</i>."
      },
      {
        q: "Au téléphone, une collègue dit : « Das ist halt so. » Quelle attitude exprime-t-elle ?",
        opts: [
          "la résignation",
          "l'enthousiasme",
          "le reproche"
        ],
        why: "<i>halt</i> signale que la chose ne peut pas être changée : <b>résignation</b>."
      },
      {
        q: "Dans un règlement : quelle phrase exprime une obligation ?",
        opts: [
          "Der Ausweis ist stets mitzuführen.",
          "Der Ausweis lässt sich mitführen.",
          "Der Ausweis ist mitgeführt."
        ],
        why: "<b>sein + zu</b> dans un règlement exprime une obligation : « la pièce d'identité est à porter sur soi en permanence »."
      },
      {
        q: "Reformulez en style nominal : « Weil es stark regnete, wurde das Konzert abgesagt. »",
        why: "<i>Wegen des starken Regens wurde das Konzert abgesagt</i> : <i>wegen</i> (ou <i>aufgrund</i>) + génitif à la place de <i>weil</i>."
      },
      {
        tr: "À l'issue des travaux, la route sera rouverte.",
        why: "Dans <i>Abschluss</i>, l'accent tombe sur <b>Ab</b> ; dans <i>Arbeiten</i>, l'accent tombe sur <b>Ar</b> ; dans <i>freigegeben</i>, l'accent tombe sur <b>frei</b>."
      }
    ]
  }
});
