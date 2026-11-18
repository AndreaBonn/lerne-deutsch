/* ============================================================
   Learner-language text (fr) for data/core/c2-01.js, unit c2-u01.
   Keys point at ids in the neutral layer; arrays merge by index,
   so their length has to match core.
   Checked by scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("fr", {
  "unit:c2-u01": {
    title: "Épithètes étendues",
    grammarNote: "L'épithète participiale étendue (die seit Jahren geforderte Reform) · participe I et participe II en position d'épithète · le Gerundivum : zu + participe I (die zu lösende Aufgabe) · les Funktionsverbgefüge dans la prose argumentative (zur Anwendung kommen, Rechnung tragen, in Abrede stellen)"
  },
  "lesson:c2-u01-l1": {
    theme: "Essais et textes scientifiques",
    title: "L'épithète participiale étendue",
    objectives: [
      "repérer l'article et le nom qui encadrent une épithète étendue",
      "lire une épithète à plusieurs compléments et en comprendre la structure",
      "transformer une relative en épithète et inversement",
      "choisir entre participe I et participe II"
    ],
    theory: [
      {
        h: "Une relative comprimée devant le nom",
        p: "En allemand écrit, un participe peut emmener ses compléments et se placer entre l'article et le nom : <em>die seit Jahren von Fachleuten geforderte Reform</em>. C'est une relative comprimée : <em>die Reform, die seit Jahren von Fachleuten gefordert wird</em>. L'article ouvre la parenthèse, le nom la ferme, et tout ce qui se trouve entre les deux appartient à l'épithète : chaque complément dépend de son propre participe, placé juste avant le nom et doté de la terminaison de l'adjectif. Le <strong>participe II</strong> exprime une action subie ou déjà achevée (<em>die vorgelegten Daten</em>, les données présentées) ; le <strong>participe I</strong>, une action active et simultanée (<em>die vorliegenden Gutachten</em>, les expertises dont on dispose)."
      },
      {
        h: "Comment la lire",
        p: "Si un article est suivi d'une préposition ou d'un deuxième article (<em>die von der ..., der dem ...</em>), attendez-vous à une épithète étendue : sautez jusqu'au nom et repérez les participes déclinés qui le précèdent (il peut y en avoir plusieurs, coordonnés), puis revenez en arrière et lisez les compléments de chacun. L'ordre interne est celui d'une subordonnée : compléments d'abord, participe à la fin, comme le verbe à la fin d'une relative. Le pronom réfléchi reste à l'intérieur : <em>die sich verschärfende Wohnungsnot</em>. Deux épithètes coordonnées sans conjonction sont séparées par une virgule : <em>die in der Studie befragten, überwiegend jungen Erwachsenen</em> ; avec <em>und</em>, la virgule est inutile : <em>die angekündigte und vielfach kritisierte Reform</em>."
      },
      {
        contrast: "En français, le participe suit le nom et la phrase s'allonge vers la droite : <em>la réforme réclamée depuis des années par les experts</em>. L'allemand place toute l'épithète à gauche, entre l'article et le nom. Les compléments peuvent garder l'ordre français (<em>seit Jahren von Fachleuten</em>, « depuis des années par les experts ») ; ce qui change de place, c'est le participe, qui passe à la fin, juste avant le nom. Le français connaît bien le participe présent en <em>-ant</em> (<em>les documents concernant le projet</em>), mais il le place après le nom et le laisse invariable ; l'allemand le met devant le nom et le décline comme un adjectif : <em>die dem Gericht vorliegenden Gutachten</em>, « les expertises dont dispose le tribunal »."
      },
      {
        trap: "Le participe d'un passif au Perfekt ne prend pas <em>worden</em> : <em>die Daten, die erhoben worden sind</em> devient <em>die erhobenen Daten</em>, jamais <em>die erhoben wordenen Daten</em>. Et ne confondez pas les deux participes : <em>die steigenden Kosten</em> sont encore en hausse, <em>die gestiegenen Kosten</em> ont déjà augmenté."
      },
      {
        tip: "Pour traduire en français, dépliez l'épithète en relative ou en participe postposé. Pour écrire en allemand, partez de la relative : supprimez le pronom relatif, transformez le verbe en participe, déclinez-le et placez-le juste avant le nom."
      }
    ],
    grammar: {
      title: "L'épithète participiale étendue",
      note: "<b>article + compléments + participe décliné + nom</b>. Participe II : sens passif ou action achevée (<i>die vorgelegten Daten</i>). Participe I : sens actif, action simultanée (<i>die vorliegenden Gutachten</i>). Le participe prend la terminaison de l'adjectif ; <i>worden</i> disparaît.",
      table: {
        head: ["relative", "épithète étendue"],
        rows: [
          ["die Reform, die seit Jahren gefordert wird", "die seit Jahren geforderte Reform"],
          ["die Daten, die die Kommission vorgelegt hat", "die von der Kommission vorgelegten Daten"],
          ["die Gutachten, die dem Gericht vorliegen", "die dem Gericht vorliegenden Gutachten"],
          ["die Wohnungsnot, die sich verschärft", "die sich verschärfende Wohnungsnot"]
        ]
      },
      examples: [
        { tr: "La réforme du droit d'auteur, réclamée depuis des années par les experts, se fait toujours attendre.", note: "participe II avec deux compléments : seit Jahren, von Fachleuten" },
        { tr: "Les adultes interrogés dans l'étude, pour la plupart jeunes, montraient une confiance étonnamment faible dans les médias.", note: "deux épithètes coordonnées, séparées par une virgule" },
        { tr: "La crise du logement, qui s'aggrave depuis des décennies, n'est pas un phénomène nouveau.", note: "participe I d'un verbe pronominal : sich reste dans l'épithète" },
        { tr: "Le rapport s'appuie sur les données présentées par la commission l'automne dernier.", note: "participe II : von der Kommission introduit l'agent" },
        { tr: "Les expertises dont dispose le tribunal se contredisent sur des points essentiels.", note: "participe I avec le datif régi par vorliegen" },
        { tr: "Le modèle, que beaucoup jugent dépassé, se révèle étonnamment solide.", note: "für ... halten : l'attribut reste à l'intérieur de l'épithète" }
      ]
    },
    vocab: [
      "le traité, l'article scientifique",
      "le constat, le résultat (d'un examen)",
      "l'expertise, l'avis d'expert",
      "l'hypothèse",
      "l'objet, le sujet (d'une étude)",
      "l'enquête, l'étude",
      "présenter, soumettre (un document)",
      "se révéler, s'avérer",
      "prouver, démontrer",
      "s'appuyer sur, se fonder sur",
      "majoritairement, pour la plupart",
      "déterminant, de façon déterminante"
    ],
    exercises: [
      {
        q: "Dans un essai : « Die von der Regierung im Frühjahr angekündigte und von der Opposition scharf kritisierte Reform ist bis heute nicht umgesetzt. » Quel est le sujet de la phrase ?",
        opts: [
          "die Reform, avec toute son épithète",
          "die Regierung",
          "die Opposition"
        ],
        why: "L'article <i>Die</i> ouvre la parenthèse et <b>Reform</b> la ferme : ce qui se trouve entre les deux, deux épithètes coordonnées par <i>und</i>, décrit la réforme. <i>von der Regierung</i> et <i>von der Opposition</i> sont les agents des deux participes."
      },
      {
        q: "Transformez en épithète : « die Daten, die im letzten Jahr erhoben worden sind »",
        opts: [
          "die im letzten Jahr erhobenen Daten",
          "die im letzten Jahr erhoben wordenen Daten",
          "die im letzten Jahr erhebenden Daten"
        ],
        why: "Le passif devient un participe II décliné : <b>erhobenen</b>. <i>worden</i> n'entre jamais dans l'épithète ; <i>erhebenden</i>, participe I, dirait que ce sont les données qui recueillent quelque chose."
      },
      {
        q: "Complétez : « Die Zahl der ___ Menschen ist im vergangenen Jahrzehnt gestiegen. » (les personnes vivant dans la pauvreté)",
        opts: [
          "in Armut lebenden",
          "in Armut gelebten",
          "lebenden in Armut"
        ],
        why: "Action active et simultanée : participe I, <b>lebenden</b>. Dans l'épithète étendue, le complément <i>in Armut</i> se place avant le participe, jamais entre le participe et le nom, alors que le français dit <em>vivant dans la pauvreté</em> ; <i>gelebten</i> est un participe II et exprimerait une action subie ou achevée."
      },
      {
        q: "Complétez : « Das dem Ausschuss seit März ___ Gutachten wurde bislang nicht veröffentlicht. »",
        hint: "de vorliegen, participe I, neutre après das",
        why: "<b>vorliegende</b> : participe I (la commission dispose de l'expertise), terminaison <i>-e</i> après <i>das</i> au nominatif. <i>dem Ausschuss</i> est le datif régi par <i>vorliegen</i>."
      },
      {
        q: "Complétez avec deux participes II : « prévues » dans le premier blanc, « défavorisées » dans le second.",
        tr: "Les conséquences du changement climatique, prévues depuis longtemps par de nombreux chercheurs, frappent surtout les régions du Sud, déjà défavorisées.",
        why: "<i>vorhergesagten</i> (ou <i>vorausgesagten</i>, <i>prognostizierten</i>) et <i>benachteiligten</i> : participes II avec <i>-en</i> après l'article pluriel <i>die</i>. <i>ohnehin</i> (« de toute façon, déjà ») se trouve dans la seconde épithète."
      },
      {
        q: "Associez chaque mot à son sens.",
        pairs: [
          "l'expertise, l'avis d'expert",
          "le constat, le résultat",
          "le traité, l'article scientifique",
          "l'hypothèse"
        ]
      },
      {
        q: "Quelles phrases contiennent une épithète participiale étendue ?",
        opts: [
          "Die vom Gericht bestellte Gutachterin widersprach dem Kläger.",
          "Die über Jahrzehnte gewachsenen Strukturen lassen sich nicht über Nacht ändern.",
          "Die Gutachterin, die das Gericht bestellt hatte, widersprach dem Kläger.",
          "Die Strukturen sind über Jahrzehnte gewachsen."
        ],
        why: "Dans les deux premières, le participe et ses compléments se trouvent entre l'article et le nom (<i>die vom Gericht bestellte Gutachterin</i>, <i>die über Jahrzehnte gewachsenen Strukturen</i>). La troisième dit la même chose que la première avec une relative ; dans la quatrième, <i>gewachsen</i> fait partie du Perfekt et n'est pas une épithète."
      },
      {
        q: "Traduisez avec une épithète participiale étendue : « L'étude présentée la semaine dernière par l'université contredit les hypothèses répandues jusqu'ici. » (vorlegen, die Annahme)",
        why: "<i>Die von der Universität letzte Woche vorgelegte Studie widerspricht den bisher verbreiteten Annahmen</i> : ce qui suit « étude » en français se place avant <i>Studie</i>, avec le participe en dernière position. <i>widersprechen</i> régit le datif : <i>den ... Annahmen</i>."
      },
      {
        tr: "La thèse défendue dans le présent traité repose sur des résultats pour la plupart anciens. Les études parues depuis font naître de sérieux doutes à son sujet.",
        why: "Dans <i>Abhandlung</i>, l'accent tombe sur <b>Ab</b> ; dans <i>Befunde</i>, l'accent tombe sur <b>fun</b> ; dans <i>Zweifel</i>, le <b>z</b> se prononce [ts] et <b>ei</b> [aɪ]."
      },
      {
        tr: "La réforme réclamée depuis des années se fait toujours attendre.",
        why: "Dans <i>geforderte</i>, l'accent tombe sur <b>for</b> ; dans <i>Reform</i>, l'accent tombe sur <b>form</b> ; dans <i>lässt</i>, le <b>ä</b> est bref."
      }
    ]
  },
  "lesson:c2-u01-l2": {
    theme: "Règlements et contrats",
    title: "La tâche à résoudre",
    objectives: [
      "comprendre et former le Gerundivum : zu + participe I en position d'épithète",
      "distinguer die zu prüfenden Anträge de die geprüften Anträge",
      "placer zu dans les verbes à particule séparable (die einzureichenden Unterlagen)",
      "alterner Gerundivum et passif modal dans la prose juridique"
    ],
    theory: [
      {
        h: "sein + zu, déplacé devant le nom",
        p: "Au niveau C1, vous avez vu <em>sein + zu</em> + infinitif : <em>Die Aufgabe ist zu lösen</em>, « la tâche est à résoudre ». Le même contenu, transformé en épithète, devient <strong>zu + participe I</strong> décliné : <em>die zu lösende Aufgabe</em>. C'est ce qu'on appelle le Gerundivum : il a un sens passif et une valeur modale, « qui doit » ou « qui peut » être résolu. Comme toute épithète participiale, il s'étend avec des compléments : <em>die bis Monatsende einzureichenden Unterlagen</em>."
      },
      {
        h: "Devoir ou pouvoir",
        p: "La valeur se déduit du contexte, comme avec <em>sein + zu</em>. Dans les règlements et les formulaires, l'obligation domine : <em>die einzureichenden Unterlagen</em>, les documents à remettre. Avec une négation, la valeur dépend du verbe : <em>ein nicht zu unterschätzendes Risiko</em> est un avertissement, un risque qu'il ne faut pas sous-estimer ; <em>eine nicht zu lösende Aufgabe</em> exprime une impossibilité, une tâche qu'on ne peut pas résoudre. Avec <em>kaum</em>, c'est la possibilité qui domine : <em>eine kaum zu beziffernde Zahl</em>, un nombre difficilement chiffrable. Avec <em>erwarten</em>, c'est une prévision : <em>die zu erwartenden Kosten</em>, les coûts prévisibles."
      },
      {
        contrast: "Le français a un équivalent très proche avec <em>à</em> + infinitif : <em>la tâche à résoudre, les documents à remettre, un risque à ne pas sous-estimer</em>. La différence tient à la place et à la forme : en français, tout suit le nom et l'infinitif ne varie pas ; en allemand, tout précède le nom et le verbe devient un participe présent avec la terminaison de l'adjectif : <em>die zu lösende Aufgabe</em>, <em>bei der zu lösenden Aufgabe</em>. Attention à la fausse ressemblance avec le gérondif français (<em>en résolvant</em>) : le Gerundivum allemand n'a rien à voir avec lui."
      },
      {
        trap: "Ne confondez pas <em>die zu prüfenden Anträge</em> (les demandes à examiner, encore en attente) et <em>die geprüften Anträge</em> (les demandes déjà examinées). Et avec les verbes à particule séparable, <em>zu</em> s'insère entre la particule et le verbe, en un seul mot : <em>einzureichenden, vorzunehmenden, abzugebenden</em>, et non <em>zu einreichenden</em>."
      },
      {
        tip: "Pour vérifier un Gerundivum, ramenez-le à la forme prédicative, puis au passif modal : <em>die zu erwartenden Kosten</em> → <em>die Kosten sind zu erwarten</em> → <em>die Kosten können erwartet werden</em>. Si le passage tient, la forme est juste."
      }
    ],
    grammar: {
      title: "Le Gerundivum : zu + participe I",
      note: "<b>sein + zu + infinitif</b> en position de prédicat (<i>ist zu lösen</i>) devient <b>zu + participe I</b> en position d'épithète (<i>die zu lösende Aufgabe</i>). Sens passif, valeur d'obligation ou de possibilité. Verbes à particule séparable : <i>einzureichenden</i>.",
      table: {
        head: ["prédicat", "épithète", "sens"],
        rows: [
          ["Die Aufgabe ist zu lösen.", "die zu lösende Aufgabe", "doit être résolue"],
          ["Die Unterlagen sind einzureichen.", "die einzureichenden Unterlagen", "doivent être remis"],
          ["Das Risiko ist nicht zu unterschätzen.", "ein nicht zu unterschätzendes Risiko", "ne doit pas être sous-estimé"],
          ["Die Kosten sind zu erwarten.", "die zu erwartenden Kosten", "sont prévisibles"]
        ]
      },
      examples: [
        { tr: "La tâche à résoudre est plus complexe que prévu.", note: "zu + participe I : lösende" },
        { tr: "Vous trouverez en annexe les documents à remettre d'ici la fin du mois.", note: "verbe à particule séparable : ein-zu-reichenden" },
        { tr: "C'est un risque à ne pas sous-estimer.", note: "avec nicht : avertissement, « qu'il ne faut pas »" },
        { tr: "Les coûts prévisibles dépassent largement le budget.", note: "zu erwarten : prévision" },
        { tr: "La tâche est à résoudre d'ici vendredi.", note: "forme prédicative : sein + zu + infinitif" },
        { tr: "Les questions encore à éclaircir seront traitées lors de la prochaine séance.", note: "noch : « encore à »" }
      ]
    },
    vocab: [
      "la disposition, la règle",
      "le mandataire, le fondé de pouvoir",
      "la clause",
      "la voie de recours",
      "la condition, la prescription (d'une autorisation)",
      "les faits, l'état de fait",
      "fournir ultérieurement, compléter (des documents)",
      "contester, relever (un défaut)",
      "sous-estimer",
      "garantir, assurer",
      "indispensable",
      "dans les délais"
    ],
    exercises: [
      {
        q: "Dans un procès-verbal : « Die zu prüfenden Anträge werden bis Ende Mai bearbeitet. » Que signifie « die zu prüfenden Anträge » ?",
        opts: [
          "les demandes qui doivent être examinées",
          "les demandes qui examinent",
          "les demandes déjà examinées"
        ],
        why: "<i>zu</i> + participe I, c'est le <b>Gerundivum</b> : sens passif et valeur d'obligation, comme <i>die Anträge sind zu prüfen</i>. Sans <i>zu</i>, <i>prüfend</i> serait actif ; <i>geprüften</i> désignerait des demandes déjà examinées."
      },
      {
        q: "Dans un bail : « Der Mieter hat die Wohnung in ordnungsgemäßem Zustand zurückzugeben. » Quelle valeur a haben + zu ?",
        opts: [
          "une obligation avec un sujet actif : le locataire doit rendre",
          "une possibilité : le locataire peut rendre",
          "un passif : le logement est rendu"
        ],
        why: "<b>haben + zu</b> est le pendant actif de <i>sein + zu</i> : le sujet doit faire quelque chose. Le passif serait <i>Die Wohnung ist ... zurückzugeben</i>, d'où l'épithète <i>die zurückzugebende Wohnung</i>."
      },
      {
        q: "Transformez en épithète : « Die Kosten sind nicht vorherzusehen. » → « ___ Kosten »",
        opts: [
          "die nicht vorherzusehenden",
          "die nicht vorhergesehenen",
          "die nicht vorherzusehende"
        ],
        why: "Gerundivum d'un verbe à particule séparable : <i>zu</i> entre <i>vorher</i> et <i>sehen</i>, terminaison <b>-en</b> après l'article pluriel. <i>vorhergesehenen</i> décrit un fait (« les coûts non prévus »), pas l'impossibilité de les prévoir ; <i>vorherzusehende</i> a la mauvaise terminaison."
      },
      {
        q: "Complétez : « Das ist ein nicht zu ___ Problem. » (sous-estimer)",
        hint: "de unterschätzen, neutre après ein",
        why: "<b>unterschätzendes</b> : <i>unterschätzen</i> n'est pas séparable, donc <i>zu</i> reste devant, comme mot à part ; après <i>ein</i> au neutre nominatif, la terminaison est <i>-es</i>."
      },
      {
        q: "Complétez : « Die bis zum 30. Juni ___ Unterlagen finden Sie in der Anlage. » (remettre)",
        hint: "de einreichen, séparable, pluriel après die",
        why: "<b>einzureichenden</b> : avec un verbe à particule séparable, <i>zu</i> s'insère entre la particule et le verbe, et le participe prend <i>-en</i> après <i>die</i>."
      },
      {
        q: "Complétez avec le Gerundivum : « résoudre » dans le premier blanc, « chiffrer » (beziffern) dans le second.",
        tr: "Le rapport mentionne trois problèmes à résoudre d'ici la fin de l'année et un nombre difficilement chiffrable de procédures en cours.",
        why: "<i>drei ... zu lösende Probleme</i> (ou <i>zu behebende</i>) : après un numéral sans article, la terminaison est <i>-e</i>. <i>eine kaum zu beziffernde Zahl</i> : avec <i>kaum</i>, le Gerundivum exprime une possibilité presque nulle, avec <i>-e</i> après <i>eine</i>."
      },
      {
        q: "Remettez les mots dans l'ordre.",
        tr: "Les demandes que l'administration doit examiner sont disponibles depuis des semaines.",
        why: "<i>Die von der Behörde zu prüfenden Anträge liegen seit Wochen vor.</i> L'agent <i>von der Behörde</i> se trouve dans l'épithète, avant <i>zu prüfenden</i> ; <i>vor</i>, particule de <i>vorliegen</i>, va à la fin."
      },
      {
        q: "Traduisez avec un Gerundivum : « Les modifications à apporter au contrat doivent être approuvées par les deux parties. » (vornehmen, genehmigen, die Vertragspartei)",
        why: "<i>Die am Vertrag vorzunehmenden Änderungen müssen von beiden Vertragsparteien genehmigt werden</i>, ou, dans le style des textes réglementaires, <i>... sind von beiden Vertragsparteien zu genehmigen</i>. <i>vornehmen</i> est séparable : <i>vorzunehmenden</i>."
      },
      {
        tr: "Les documents que le demandeur doit fournir ultérieurement sont à remettre d'ici la fin du mois. À défaut, il faut s'attendre à un rejet de la demande.",
        why: "Dans <i>nachzureichenden</i>, l'accent tombe sur <b>nach</b> ; dans <i>Andernfalls</i>, l'accent tombe sur <b>An</b> ; dans <i>Ablehnung</i>, l'accent tombe sur <b>Ab</b> et le <b>b</b> se prononce [p]."
      },
      {
        tr: "Les coûts prévisibles sont difficilement chiffrables.",
        why: "Dans <i>erwartenden</i>, l'accent tombe sur <b>war</b> ; dans <i>beziffern</i>, l'accent tombe sur <b>zif</b> et le <b>z</b> se prononce [ts] ; dans <i>Kosten</i>, le <b>o</b> est bref."
      }
    ]
  },
  "lesson:c2-u01-l3": {
    theme: "Essais et débat public",
    title: "Les Funktionsverbgefüge dans le texte",
    objectives: [
      "repérer un Funktionsverbgefüge dans une longue phrase",
      "choisir le bon verbe support (kommen ou bringen, finden ou stoßen)",
      "remplacer un Funktionsverbgefüge par un verbe simple ou un passif, et inversement",
      "comprendre la différence entre in Abrede stellen et nicht in Abrede stellen"
    ],
    theory: [
      {
        h: "Le nom porte le sens, le verbe la perspective",
        p: "Dans un Funktionsverbgefüge (locution à verbe support), le sens est porté par le nom (<em>Anwendung, Zweifel, Beweis</em>), tandis que le verbe (<em>kommen, ziehen, stellen, finden</em>) dit peu de chose par lui-même et règle surtout la perspective : active ou passive, début d'un processus ou état. Au niveau C1, vous les avez appris comme des formules ; au niveau C2, la difficulté est de les repérer dans une longue phrase, où le nom et le verbe se trouvent aux deux bouts de la parenthèse : <em>Die Ergebnisse wurden von Fachleuten in Zweifel gezogen.</em>"
      },
      {
        h: "Des paires qui changent de perspective",
        p: "Beaucoup de Funktionsverbgefüge vont par paires. <strong>zur Anwendung kommen</strong> a un sens passif (<em>wird angewendet</em>), <strong>zur Anwendung bringen</strong> un sens actif (<em>anwenden</em>). <strong>Berücksichtigung finden</strong> et <strong>auf Kritik stoßen</strong> remplacent un passif : <em>Die Einwände fanden Berücksichtigung</em> = <em>wurden berücksichtigt</em> ; <em>Der Plan stieß auf Kritik</em> = <em>wurde kritisiert</em>. D'autres coexistent avec un verbe simple presque synonyme : <em>Rechnung tragen</em> (tenir compte de, avec le datif) équivaut en général à <em>berücksichtigen</em>, avec des différences de contexte et de registre seulement. <em>zur Debatte stehen</em>, en revanche, n'a pas de verbe simple équivalent."
      },
      {
        contrast: "Le français connaît bien ces locutions à verbe support, et elles coïncident souvent : <em>mettre en doute</em> (<em>in Zweifel ziehen</em>), <em>prendre en considération</em> (<em>in Betracht ziehen</em>), <em>trouver application</em> (<em>zur Anwendung kommen</em>). Mais le verbe support ne se traduit pas mot à mot : <em>unter Beweis stellen</em> n'est pas « mettre sous preuve » mais « démontrer, faire la preuve de », <em>zur Sprache bringen</em> est « soulever, évoquer », <em>in Abrede stellen</em> est « nier ». La préposition et l'article sont figés : <em>zur Anwendung</em>, jamais <em>in die Anwendung</em>."
      },
      {
        trap: "<em>in Abrede stellen</em> signifie « nier » : <em>Sie stellt nicht in Abrede, dass ...</em> veut donc dire « elle ne nie pas que ... », une concession prudente, qui n'équivaut pas forcément à un aveu explicite. Et <em>Rechnung tragen</em> veut le datif sans préposition, là où le français dit <em>tenir compte de</em> : <em>den Bedenken Rechnung tragen</em>, et non <em>auf die Bedenken</em>."
      },
      {
        tip: "Dans les textes formels, le Funktionsverbgefüge donne du poids au nom et permet de changer de perspective sans passif ; dans un texte qui se veut fluide, un verbe simple vaut souvent mieux. À l'écrit, employez-le là où il apporte quelque chose (perspective, début d'un processus, registre), pas pour allonger la phrase."
      }
    ],
    grammar: {
      title: "Les Funktionsverbgefüge dans la prose argumentative",
      note: "<b>Nom</b> = sens ; <b>verbe support</b> = perspective. <i>kommen, finden, stoßen auf</i> : sens passif. <i>bringen, stellen, ziehen</i> : sens actif. La préposition et l'article sont figés.",
      table: {
        head: ["Funktionsverbgefüge", "verbe simple ou passif", "sens"],
        rows: [
          ["zur Anwendung kommen", "angewendet werden", "être appliqué"],
          ["in Zweifel ziehen", "bezweifeln", "mettre en doute"],
          ["unter Beweis stellen", "beweisen", "démontrer"],
          ["Berücksichtigung finden", "berücksichtigt werden", "être pris en compte"],
          ["auf Kritik stoßen", "kritisiert werden", "se heurter à des critiques"],
          ["in Abrede stellen", "bestreiten", "nier"]
        ]
      },
      examples: [
        { tr: "La nouvelle méthode est déjà appliquée dans plusieurs cliniques.", note: "zur Anwendung kommen : sens passif" },
        { tr: "Les résultats de l'étude ont été mis en doute par des spécialistes.", note: "in Zweifel ziehen au passif : le nom et le participe aux deux bouts de la phrase" },
        { tr: "La loi ne tient pas suffisamment compte de l'évolution des conditions de vie.", note: "Rechnung tragen + datif" },
        { tr: "L'autrice démontre sa thèse à l'aide de nombreux exemples.", note: "unter Beweis stellen = beweisen" },
        { tr: "La proposition a reçu un large soutien en commission.", note: "auf Zustimmung stoßen : sens passif, comme auf Kritik stoßen" },
        { tr: "La question du financement n'a pas été soulevée lors de la séance.", note: "zur Sprache bringen au passif" }
      ]
    },
    vocab: [
      "être appliqué, trouver application",
      "mettre en doute",
      "tenir compte de (+ datif)",
      "démontrer, faire la preuve de",
      "soulever, évoquer (une question)",
      "envisager, prendre en considération",
      "être pris en compte",
      "se heurter à des critiques",
      "nier, contester",
      "être en discussion",
      "la prise de position, l'avis",
      "l'usage, la coutume"
    ],
    exercises: [
      {
        q: "Quel verbe simple correspond à « etwas in Zweifel ziehen » ?",
        opts: [
          "bezweifeln",
          "verzweifeln",
          "überziehen"
        ],
        why: "<b>bezweifeln</b>, « mettre en doute ». <i>verzweifeln</i> signifie « désespérer » ; <i>überziehen</i>, « exagérer » ou « mettre son compte à découvert »."
      },
      {
        q: "Dans un rapport : « Die Methode wird in drei Kliniken angewendet. » Quelle reformulation avec un Funktionsverbgefüge a le même sens ?",
        opts: [
          "Die Methode kommt in drei Kliniken zur Anwendung.",
          "Die Methode bringt in drei Kliniken zur Anwendung.",
          "Die Methode stellt in drei Kliniken zur Anwendung."
        ],
        why: "<b>kommen</b> donne le sens passif : la méthode « est appliquée ». <i>zur Anwendung bringen</i> est actif et demande un sujet qui applique : <i>Drei Kliniken bringen die Methode zur Anwendung</i>. <i>stellen</i> ne forme pas ce Funktionsverbgefüge."
      },
      {
        q: "Dans un compte rendu : « Die Verfasserin stellt nicht in Abrede, dass ihre Quellen lückenhaft sind. » Que fait l'autrice ?",
        opts: [
          "elle ne nie pas que ses sources soient lacunaires",
          "elle nie que ses sources soient lacunaires",
          "elle démontre que ses sources sont lacunaires"
        ],
        why: "<i>in Abrede stellen</i> = « nier » ; avec <i>nicht</i>, cela devient <b>« ne pas nier »</b>. C'est une concession prudente, typique des textes argumentatifs : l'autrice ne conteste pas la limite ; le degré d'aveu dépend du contexte."
      },
      {
        q: "Complétez : « Der Entwurf trägt den Einwänden der Verbände kaum ___. » (tient compte)",
        hint: "le nom qui va avec tragen",
        why: "<b>Rechnung</b> : <i>einer Sache Rechnung tragen</i>, « tenir compte de quelque chose », avec le datif (<i>den Einwänden</i>)."
      },
      {
        q: "Complétez : « Die Finanzierung des Projekts steht derzeit nicht zur ___. » (n'est pas en discussion, ou n'est pas négociable)",
        hint: "zur ... stehen",
        why: "<b>Debatte</b> ou <b>Diskussion</b> : « n'est pas en discussion ». <b>Disposition</b> donne la seconde lecture : <i>nicht zur Disposition stehen</i>, « n'est pas négociable, n'est pas remis en question »."
      },
      {
        q: "Complétez : la préposition dans le premier blanc, le nom du Funktionsverbgefüge dans le second.",
        tr: "La commission a certes pris en considération les propositions de l'opposition, mais elle n'en a guère tenu compte dans son rapport final.",
        why: "<i>in Betracht ziehen</i> (« prendre en considération ») et <i>Rechnung tragen</i> + datif (<i>ihnen</i>). La phrase montre la différence entre les deux : considérer une proposition ne veut pas dire en tenir compte."
      },
      {
        q: "Associez chaque expression à son sens.",
        pairs: [
          "nier",
          "démontrer",
          "soulever (une question)",
          "se heurter à des critiques"
        ]
      },
      {
        q: "Traduisez : « Les objections des citoyens n'ont pas été prises en compte dans le projet. » (der Einwand, der Entwurf, Berücksichtigung finden)",
        why: "Avec le Funktionsverbgefüge : <i>Die Einwände der Bürger haben im Entwurf keine Berücksichtigung gefunden</i> (ou <i>fanden ... keine Berücksichtigung</i>). La négation passe dans le nom : <i>keine Berücksichtigung</i>, et non <i>nicht Berücksichtigung</i>. Le passif simple est aussi accepté : <i>... wurden im Entwurf nicht berücksichtigt</i>."
      },
      {
        tr: "Le procédé décrit dans l'étude n'est jusqu'ici que rarement appliqué. Les auteurs ne mettent pas en doute son efficacité, mais ils soulèvent la question de ses coûts élevés.",
        why: "Dans <i>Studie</i>, le <b>st</b> initial se prononce [ʃt] ; dans <i>Autoren</i>, l'accent tombe sur <b>to</b> ; dans <i>Sprache</i>, <b>sp</b> se prononce [ʃp]."
      },
      {
        tr: "La ministre a nié toute responsabilité.",
        why: "Dans <i>Ministerin</i>, l'accent tombe sur <b>nis</b> ; dans <i>Verantwortung</i>, l'accent tombe sur <b>ant</b> ; dans <i>Abrede</i>, l'accent tombe sur <b>Ab</b> et le <b>b</b> se prononce [p]."
      }
    ]
  },
  "lesson:c2-u01-test": {
    theme: "Vérification",
    title: "Test : Épithètes étendues",
    objectives: [
      "vérifier l'épithète participiale étendue, le Gerundivum et les Funktionsverbgefüge"
    ],
    theory: [
      {
        p: "Dix questions sur toute l'unité. On réussit avec 70 %. Ne regardez pas les leçons pendant que vous répondez : si vous ne vous souvenez pas de quelque chose, mieux vaut revenir en arrière et réviser."
      }
    ],
    exercises: [
      {
        q: "Complétez : « Die von der Kommission im Herbst ___ Daten sind inzwischen veraltet. » (présenter)",
        hint: "de vorlegen, participe II, pluriel après die",
        why: "<b>vorgelegten</b> : participe II à sens passif (« présentées par la commission »), <i>-en</i> après l'article pluriel."
      },
      {
        q: "Complétez : « Die bis Freitag ___ Berichte liegen noch nicht vor. » (remettre)",
        hint: "de abgeben, Gerundivum",
        why: "<b>abzugebenden</b> : <i>zu</i> entre la particule et le verbe, participe I, <i>-en</i> après <i>die</i> : « les rapports à remettre d'ici vendredi »."
      },
      {
        q: "Complétez : « Das neue Verfahren kommt ab Januar zur ___. » (sera appliqué)",
        hint: "le nom qui va avec zur ... kommen",
        why: "<b>Anwendung</b> : <i>zur Anwendung kommen</i>, « être appliqué »."
      },
      {
        q: "Complétez : « Die Autorin hat ihr Können erneut unter ___ gestellt. » (a démontré)",
        hint: "unter ... stellen",
        why: "<b>Beweis</b> : <i>unter Beweis stellen</i>, « démontrer, faire la preuve de »."
      },
      {
        q: "« Die sich aus den neuen Vorschriften für kleine Betriebe ergebenden Pflichten sind kaum zu überblicken. » À quel nom l'épithète se rapporte-t-elle ?",
        opts: [
          "Pflichten",
          "Vorschriften",
          "Betriebe"
        ],
        why: "L'article <i>Die</i> ouvre la parenthèse, qui se ferme avec le participe <i>ergebenden</i> et le nom <b>Pflichten</b> : « les obligations découlant des nouvelles règles pour les petites entreprises ». <i>Vorschriften</i> et <i>Betriebe</i> font partie des compléments."
      },
      {
        q: "Que signifie « die zu befragenden Personen » ?",
        opts: [
          "les personnes qui doivent être interrogées",
          "les personnes qui interrogent",
          "les personnes interrogées"
        ],
        why: "<i>zu</i> + participe I, c'est le <b>Gerundivum</b> : sens passif et valeur d'obligation. <i>befragend</i> serait actif, <i>befragt</i> déjà achevé."
      },
      {
        q: "Quelle phrase a le même sens que « Die Reform stieß auf heftige Kritik » ?",
        opts: [
          "Die Reform wurde heftig kritisiert.",
          "Die Reform kritisierte heftig.",
          "Die Reform hat heftige Kritik geübt."
        ],
        why: "<i>auf Kritik stoßen</i> a un sens passif : la réforme <b>a été critiquée</b>. <i>Kritik üben</i> est actif : c'est le sujet qui critique."
      },
      {
        q: "Transformez en épithète : « die Fragen, die noch geklärt werden müssen »",
        opts: [
          "die noch zu klärenden Fragen",
          "die noch geklärten Fragen",
          "die noch klärenden Fragen"
        ],
        why: "Un passif avec <i>müssen</i> devient un <b>Gerundivum</b> : <i>zu klärenden</i>. <i>geklärten</i> dirait qu'elles sont déjà éclaircies ; <i>klärenden</i>, que ce sont elles qui éclaircissent quelque chose."
      },
      {
        tr: "Les résultats présentés par la commission d'experts ont reçu un large soutien. Les mesures à en tirer doivent être appliquées l'année prochaine.",
        why: "Dans <i>Expertenkommission</i>, l'accent principal tombe sur <b>per</b> ; dans <i>stießen</i>, <b>ie</b> est long et <b>ß</b> se prononce [s] ; dans <i>Maßnahmen</i>, l'accent tombe sur <b>Maß</b>, avec un <b>a</b> long."
      },
      {
        tr: "Les questions encore à éclaircir seront soulevées lors de la prochaine séance.",
        why: "Dans <i>klärenden</i>, le <b>ä</b> est long ; dans <i>nächsten</i>, le <b>ä</b> est long même devant <b>chst</b> ; dans <i>Sitzung</i>, <b>tz</b> se prononce [ts]."
      }
    ]
  }
});
