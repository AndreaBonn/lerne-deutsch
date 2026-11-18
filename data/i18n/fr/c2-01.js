/* ============================================================
   Learner-language text (fr) for data/core/c2-01.js, units c2-u01 and c2-u02.
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
  },
  "unit:c2-u02": {
    title: "Pluriels et formation des mots",
    grammarNote: "Pluriels doubles de sens différent (die Banken et die Bänke, die Worte et die Wörter) · pluriels de substitution (Ratschläge, Regenfälle, Streitigkeiten) · composés : Grundwort et élément de liaison (Arbeitszeit, Hundebesitzer, Schulpflicht) · dérivation avec -ung, -heit, -keit et avec ver-, zer-, ent-, miss- · le genre des Fremdwörter (-ion, -ität, -ismus)"
  },
  "lesson:c2-u02-l1": {
    theme: "Lexique et sens",
    title: "Die Banken et die Bänke",
    objectives: [
      "distinguer les pluriels qui changent de sens (Banken et Bänke, Worte et Wörter)",
      "employer les pluriels de substitution des noms qui n'ont pas de pluriel (Ratschläge, Regenfälle)",
      "choisir le bon pluriel selon le contexte",
      "ne pas confondre Mütter et Muttern, Bände et Bänder"
    ],
    theory: [
      {
        h: "Un singulier, deux pluriels",
        p: "Certains noms ont deux pluriels, et chacun porte un sens différent. <em>die Bank</em> désigne à la fois la banque et le banc : les banques sont des <strong>Banken</strong>, les bancs des <strong>Bänke</strong>. <em>das Wort</em> fait <strong>Wörter</strong> quand il s'agit de mots en tant qu'unités du lexique, pris un par un (<em>ein Wörterbuch mit 100 000 Wörtern</em>), et <strong>Worte</strong> quand il s'agit de mots qui forment un discours ou un propos (<em>mit anderen Worten, Worte des Dankes</em>). <em>die Mutter</em> fait <strong>Mütter</strong> (les mères) et <strong>Muttern</strong> (les écrous). Parfois, deux noms de genre différent se cachent derrière la même forme : <em>der Band</em> (le volume, le tome) fait <strong>Bände</strong>, <em>das Band</em> (le ruban, le ligament) fait <strong>Bänder</strong>, et <em>die Band</em>, le groupe de musique, fait <em>Bands</em>."
      },
      {
        h: "Quand le pluriel manque : les pluriels de substitution",
        p: "D'autres noms n'ont pas de pluriel en usage, ou seulement un pluriel rare, et l'allemand l'emprunte à un composé ou à un dérivé. <em>der Rat</em>, au sens de conseil, devient <strong>Ratschläge</strong> : les <em>Räte</em> sont en revanche des conseils au sens d'assemblées, ou leurs membres (<em>die Stadträte</em>). <em>der Regen</em> devient <strong>Regenfälle</strong>, <em>der Schnee</em> <strong>Schneefälle</strong>, <em>der Streit</em> le plus souvent <strong>Streitigkeiten</strong> (<em>Streite</em> existe, mais il est rare). Le pluriel de substitution est le point où pluriel et formation des mots se rencontrent : on recourt à un composé dont le dernier élément a un pluriel (<em>Regenfälle, Ratschläge</em>) ou à un dérivé (<em>Streitigkeiten</em>)."
      },
      {
        contrast: "Le français connaît lui aussi quelques pluriels doubles : <em>les aïeux</em> (les ancêtres) et <em>les aïeuls</em> (les grands-parents), <em>les cieux</em> et <em>les ciels</em> (de lit, d'un tableau). Le mécanisme est le même, mais les cas ne se recouvrent pas : <em>banque</em> et <em>banc</em> remontent au même mot germanique que <em>Bank</em>, sauf qu'en français ce sont devenus deux mots distincts, chacun avec son pluriel, et rien ne vous signale qu'en allemand il faut choisir entre <em>Banken</em> et <em>Bänke</em>. Les pluriels de substitution vont dans l'autre sens : le français met sans difficulté au pluriel <em>des conseils</em>, <em>des pluies</em>, <em>des chutes de neige</em>, <em>des litiges</em>, alors que pour compter ces pluies, ces conseils ou ces litiges l'allemand passe par un composé ou un dérivé : <em>Ratschläge, Regenfälle, Schneefälle, Streitigkeiten</em> (au singulier, <em>der Regen</em> ou <em>der Rat</em> s'emploient normalement). Un piège de plus pour vous : le français dit aussi <em>conseil</em> pour l'avis donné et pour l'assemblée, alors que l'allemand sépare <em>Ratschläge</em> et <em>Räte</em>."
      },
      {
        trap: "Le dictionnaire contient des <em>Wörter</em>, jamais des <em>Worte</em> ; un discours émouvant est fait de <em>Worte</em>. Le français vous aide en partie : <em>Wörter</em> correspond aux mots du dictionnaire, <em>Worte</em> plutôt aux paroles (<em>Worte des Dankes</em>, des paroles de remerciement). Mais l'équivalence n'est pas parfaite : <em>dire quelques mots</em> se dit <em>ein paar Worte sagen</em>. Le critère n'est pas le nombre (<em>ein paar Worte</em> se comptent aussi), mais le point de vue : unité du lexique, <em>Wörter</em> ; propos, ce que quelqu'un dit, <em>Worte</em>. Et attention à l'Umlaut et à la terminaison, qui distinguent ici le sens : les <em>Muttern</em> (sans Umlaut, avec <em>-n</em>) sont des écrous, les <em>Mütter</em> des mères ; les <em>Bänke</em> sont des bancs, les <em>Banken</em> des établissements de crédit."
      },
      {
        tip: "Apprenez le pluriel avec le sens, pas comme une forme isolée. Les dictionnaires unilingues (le Duden, par exemple) donnent les deux pluriels, chacun avec sa définition : c'est là qu'il faut vérifier."
      }
    ],
    grammar: {
      title: "Pluriels doubles et pluriels de substitution",
      note: "Un nom, deux pluriels, deux sens : <b>Banken</b> (banques) et <b>Bänke</b> (bancs), <b>Wörter</b> (mots du lexique) et <b>Worte</b> (paroles). Si le pluriel manque, un composé le fournit : <b>Ratschläge</b>, <b>Regenfälle</b>, <b>Streitigkeiten</b>.",
      table: {
        head: ["singulier", "pluriel", "sens"],
        rows: [
          ["die Bank", "die Banken", "les banques"],
          ["die Bank", "die Bänke", "les bancs"],
          ["das Wort", "die Wörter", "les mots (unités du lexique)"],
          ["das Wort", "die Worte", "les paroles (d'un discours)"],
          ["die Mutter", "die Muttern", "les écrous"],
          ["der Rat", "die Ratschläge", "les conseils"]
        ]
      },
      examples: [
        { tr: "Les banques ont de nouveau relevé leurs taux d'intérêt.", note: "Banken : établissements de crédit" },
        { tr: "De nouveaux bancs ont été installés devant la mairie.", note: "Bänke : bancs, avec l'Umlaut" },
        { tr: "En quelques mots, elle a cerné le problème.", note: "Worte : mots en tant que propos, pas en tant qu'unités du lexique" },
        { tr: "Le dictionnaire recense plus de cent mille mots.", note: "Wörter : mots en tant qu'unités du lexique" },
        { tr: "Elle a accepté avec reconnaissance les conseils de ses collègues.", note: "Ratschläge : pluriel de substitution de der Rat" },
        { tr: "Après les fortes pluies, le fleuve est sorti de son lit.", note: "Regenfälle : pluriel de substitution de der Regen" }
      ]
    },
    vocab: [
      "l'établissement de crédit",
      "le banc",
      "l'écrou",
      "le litige, la querelle",
      "la pluie, l'averse",
      "la chute de neige",
      "la discipline sportive",
      "l'expression idiomatique, la locution",
      "la différence de sens",
      "la forme du pluriel",
      "ambigu, polysémique",
      "distinguer"
    ],
    exercises: [
      {
        q: "Dans les pages économie : « Mehrere ___ haben ihre Gebühren erhöht. »",
        opts: [
          "Banken",
          "Bänke",
          "Banke"
        ],
        why: "Les établissements de crédit sont des <b>Banken</b> ; les <i>Bänke</i> sont des bancs. <i>Banke</i> n'existe pas."
      },
      {
        q: "Complétez : « Zur Begrüßung sprach der Direktor ein paar ___. » (quelques mots, un bref discours)",
        opts: [
          "Worte",
          "Wörter",
          "Worten"
        ],
        why: "Des mots qui forment un discours : <b>Worte</b>. Les <i>Wörter</i> sont des mots considérés comme unités du lexique ; <i>Worten</i> est le datif pluriel (<i>mit wenigen Worten</i>), alors qu'ici il faut l'accusatif."
      },
      {
        q: "Quel est le pluriel usuel de « der Rat » au sens de « conseil », « recommandation » ?",
        opts: [
          "die Ratschläge",
          "die Räte",
          "die Rate"
        ],
        why: "Au sens de recommandation, <i>Rat</i> n'a pas de pluriel en usage : on recourt au pluriel de substitution <b>Ratschläge</b>. Les <i>Räte</i> sont des assemblées ou leurs membres (<i>Stadträte</i>) ; <i>die Rate</i> est la mensualité, un autre mot."
      },
      {
        q: "Complétez : « Das neue Wörterbuch verzeichnet rund 140 000 ___. »",
        hint: "pluriel de das Wort : unités du lexique",
        why: "<b>Wörter</b> : un dictionnaire recense les mots en tant qu'unités du lexique. Attention à l'Umlaut : <i>Worter</i> n'existe pas."
      },
      {
        q: "Complétez : « An der Schraube fehlt eine Mutter; im Werkzeugkasten liegen aber noch zwei ___. »",
        hint: "pluriel de die Mutter au sens d'« écrou »",
        why: "<b>Muttern</b> (ou <b>Schraubenmuttern</b>) : l'écrou fait son pluriel en <i>-n</i>, sans Umlaut. Les <i>Mütter</i> sont des mères."
      },
      {
        q: "Complétez avec deux pluriels de substitution : dans le premier blanc celui qui remplace « der Regen », dans le second celui qui remplace « der Rat » (conseil).",
        tr: "Les fortes pluies des dernières semaines ont détruit la récolte ; à présent, les agriculteurs reçoivent de toutes parts des conseils bien intentionnés.",
        why: "<i>Regen</i> n'a pas de pluriel en usage : on dit <b>Regenfälle</b>. <i>Niederschläge</i> serait plus large, puisqu'il englobe aussi la neige et la grêle. Pour les conseils, il faut <b>Ratschläge</b>. Les deux sans <i>-n</i> : le premier est un nominatif pluriel, le second un accusatif pluriel."
      },
      {
        q: "Associez chaque pluriel à son sens.",
        pairs: [
          "les banques",
          "les bancs",
          "les paroles (d'un discours)",
          "les mots (unités du lexique)"
        ]
      },
      {
        q: "Traduisez : « Les banques ont ignoré les conseils des experts. » (ignorieren, der Ratschlag, der Experte)",
        why: "<i>Die Banken haben die Ratschläge der Experten ignoriert</i>. Deux pluriels à bien choisir : <i>Banken</i>, et non <i>Bänke</i>, et <i>Ratschläge</i>, parce que <i>Rat</i> au sens de conseil n'a pas de pluriel. On accepte aussi <i>Fachleute</i>, le Präteritum <i>ignorierten</i> et le verbe <i>missachten</i>."
      },
      {
        tr: "Sur les bancs devant la banque, les clients attendaient depuis le petit matin. En quelques mots, un employé expliqua pourquoi l'agence restait fermée.",
        why: "Dans <i>Bänken</i>, le <b>ä</b> est bref, [ɛ] ; dans <i>Angestellter</i>, l'accent tombe sur <b>An</b> ; dans <i>Filiale</i>, l'accent tombe sur le <b>a</b> long : fi-li-<b>a</b>-le."
      },
      {
        tr: "En quelques mots, elle a tout dit.",
        why: "Dans <i>Worten</i>, le <b>o</b> est bref, [ɔ] ; dans <i>wenigen</i>, l'accent tombe sur <b>we</b> ; dans <i>gesagt</i>, l'accent tombe sur <b>sagt</b> et le <b>g</b> devant le <b>t</b> final se prononce [k]."
      }
    ]
  },
  "lesson:c2-u02-l2": {
    theme: "Lexique technique et administratif",
    title: "Composés et Fugenelement",
    objectives: [
      "décomposer un composé en Bestimmungswort et Grundwort",
      "déduire le genre d'un composé de son dernier élément",
      "insérer le bon élément de liaison (-s-, -e-, -n-, -er-)",
      "reconnaître les suffixes après lesquels le -s- est la règle (-ung, -heit, -keit, -tät)"
    ],
    theory: [
      {
        h: "C'est le nom de droite qui décide",
        p: "Dans un composé (<em>Kompositum</em>), le dernier élément, le <strong>Grundwort</strong>, fixe le genre, le pluriel et la catégorie ; les éléments qui le précèdent, les <strong>Bestimmungswörter</strong>, le précisent. <em>das Haus + die Tür + der Schlüssel</em> donnent <em>der Haustürschlüssel</em>, masculin comme <em>Schlüssel</em>. Le composé s'écrit en un seul mot, et l'accent principal tombe en règle générale sur le premier élément : <em><b>Haus</b>türschlüssel</em>."
      },
      {
        h: "L'élément de liaison",
        p: "Entre deux éléments peut apparaître un <strong>Fugenelement</strong> : <em>-s-</em> (<em>Arbeitszeit, Wohnungsmarkt</em>), <em>-es-</em> (<em>Tageslicht</em>), <em>-e-</em> (<em>Hundebesitzer</em>), <em>-n-</em> ou <em>-en-</em> (<em>Sonnenenergie, Leinenpflicht</em>), <em>-er-</em> (<em>Kinderbuch</em>) ; parfois au contraire le <em>-e</em> final du premier élément tombe (<em>die Schule</em> → <em>Schulpflicht</em>). Un indice fiable : après les suffixes <em>-ung, -heit, -keit, -schaft, -ion, -tät, -ling</em>, la liaison est en règle générale <em>-s-</em> (<em>Gesundheitswesen, Freiheitsstrafe, Universitätsbibliothek, Lieblingsbuch</em>). Mais c'est un indice, pas une garantie ; dans les autres cas, la liaison s'apprend mot par mot, et elle varie parfois : <em>Schadensersatz</em> et <em>Schadenersatz</em> sont tous deux corrects, et en Autriche on dit <em>Schweinsbraten</em> là où l'Allemagne dit <em>Schweinebraten</em>."
      },
      {
        contrast: "Le français place le nom principal à gauche et le précise par une préposition ou par un adjectif de relation : <em>le marché du logement</em>, <em>la bibliothèque universitaire</em>, <em>la peine de prison</em>. Il a bien des composés (<em>porte-monnaie, chou-fleur, timbre-poste</em>), mais ils sont figés, souvent avec un trait d'union, et ne s'enchaînent pas librement. L'allemand renverse l'ordre et soude normalement le tout en un seul mot (le trait d'union reste l'exception, voir ci-dessous) : d'abord ce qui précise, puis le nom principal, <em>Wohnungsmarkt, Universitätsbibliothek, Freiheitsstrafe</em>. Pour traduire, on lit de droite à gauche, et l'adjectif de relation français correspond souvent à un premier élément allemand (<em>universitaire</em> → <em>Universitäts-</em>). Enfin, le <em>-s-</em> de liaison n'est pas un génitif : il apparaît aussi après des noms féminins (<em>die Arbeit</em> → <em>Arbeitszeit</em>, <em>die Liebe</em> → <em>Liebesbrief</em>), qui ne prennent jamais de <em>-s</em> au génitif."
      },
      {
        trap: "Le genre vient toujours du dernier élément, même quand le premier est plus « visible » : <em>das Arbeitsamt</em> est neutre comme <em>das Amt</em>, bien que <em>Arbeit</em> soit féminin ; <em>der Wohnungsmarkt</em> est masculin comme <em>der Markt</em>. Et le composé ne se coupe pas : <em>Arbeitsbedingungen</em>, et non <em>Arbeits Bedingungen</em>. Le trait d'union, si naturel en français, ne s'emploie que pour la clarté ou avec des sigles et des noms propres (<em>E-Mail-Adresse</em>)."
      },
      {
        tip: "Pour comprendre un composé long, partez de la droite : les <em>Arbeits|bedingungen</em> sont des conditions, et le premier élément dit lesquelles (de travail). Retirez l'éventuel élément de liaison et cherchez les parties dans le dictionnaire une à une."
      }
    ],
    grammar: {
      title: "Composés et élément de liaison",
      note: "<b>Bestimmungswort + (liaison) + Grundwort</b>. Le Grundwort, à droite, décide du genre et du pluriel ; l'accent principal tombe en règle générale sur le premier élément. Après <i>-ung, -heit, -keit, -schaft, -ion, -tät, -ling</i>, la liaison est en règle générale <i>-s-</i>.",
      table: {
        head: ["éléments", "liaison", "composé"],
        rows: [
          ["die Arbeit + die Zeit", "-s-", "die Arbeitszeit"],
          ["die Wohnung + der Markt", "-s-", "der Wohnungsmarkt"],
          ["der Hund + der Besitzer", "-e-", "der Hundebesitzer"],
          ["die Sonne + die Energie", "-n-", "die Sonnenenergie"],
          ["das Kind + das Buch", "-er-", "das Kinderbuch"],
          ["die Schule + die Pflicht", "le -e tombe", "die Schulpflicht"]
        ]
      },
      examples: [
        { tr: "Les conditions de travail dans les métiers du soin ne se sont guère améliorées.", note: "Arbeit + s + Bedingungen : -s- même après un féminin" },
        { tr: "Le propriétaire du chien est responsable des dommages.", note: "Hund + e + Besitzer" },
        { tr: "L'énergie solaire couvre déjà une partie des besoins en électricité.", note: "Sonne + n + Energie ; Strom + Bedarf sans liaison : le -s de Strombedarfs est la désinence du génitif" },
        { tr: "Le livre pour enfants a été traduit en vingt langues.", note: "Kind + er + Buch : la liaison coïncide avec le pluriel Kinder" },
        { tr: "Sa lettre d'amour n'est jamais arrivée.", note: "Liebe + s + Brief : -s- après un féminin, ce n'est donc pas un génitif" },
        { tr: "La scolarité obligatoire commence en règle générale à six ans.", note: "Schule + Pflicht : le -e final tombe" }
      ]
    },
    vocab: [
      "le composé, le mot composé",
      "le mot de base (le dernier élément du composé)",
      "le déterminant (l'élément qui précède la base)",
      "l'élément de liaison",
      "la condition de travail",
      "le marché du logement",
      "la bibliothèque universitaire",
      "la peine de prison",
      "les dommages-intérêts",
      "le système de santé",
      "se composer de, être formé de",
      "composé (en parlant d'un mot)"
    ],
    exercises: [
      {
        q: "Quel est le genre de « Haustürschlüssel » (la clé de la porte d'entrée) ?",
        opts: [
          "der, comme Schlüssel",
          "die, comme Tür",
          "das, comme Haus"
        ],
        why: "C'est toujours le dernier élément, le Grundwort, qui décide du genre : <b>der</b> Schlüssel, donc <b>der</b> Haustürschlüssel."
      },
      {
        q: "Complétez : « Der ___ in München ist seit Jahren angespannt. »",
        hint: "die Wohnung + der Markt, avec l'élément de liaison",
        why: "<b>Wohnungsmarkt</b> : après <i>-ung</i>, la liaison est <i>-s-</i>. Le genre est masculin, comme <i>der Markt</i>."
      },
      {
        q: "Complétez : « Die ___ ist auch am Sonntag geöffnet. »",
        hint: "die Universität + die Bibliothek",
        why: "<b>Universitätsbibliothek</b> : après <i>-tät</i>, la liaison est <i>-s-</i>, et le tout s'écrit en un seul mot."
      },
      {
        q: "Complétez : « Der Angeklagte wurde zu einer ___ von drei Jahren verurteilt. »",
        hint: "die Freiheit + die Strafe",
        why: "<b>Freiheitsstrafe</b>, « peine de prison » : après <i>-heit</i>, la liaison est <i>-s-</i>."
      },
      {
        q: "Complétez : « Die ___ beginnt in Deutschland in der Regel mit sechs Jahren. »",
        hint: "die Schule + die Pflicht",
        why: "<b>Schulpflicht</b> : ici on n'ajoute rien, au contraire, le <i>-e</i> final de <i>Schule</i> tombe, comme dans <i>Schulbuch</i> et <i>Schulweg</i>."
      },
      {
        q: "Complétez avec deux composés : dans le premier blanc « der Hund + der Besitzer », dans le second « die Leine + die Pflicht ».",
        tr: "De nombreux propriétaires de chiens protestent contre la nouvelle obligation de tenir les chiens en laisse dans les parcs municipaux.",
        why: "<b>Hundebesitzer</b> avec la liaison <i>-e-</i>, <b>Leinenpflicht</b> avec <i>-n-</i>. Le pluriel de <i>Hundebesitzer</i> est identique au singulier ; <i>Leinenpflicht</i> est féminin comme <i>die Pflicht</i>."
      },
      {
        q: "Quels composés contiennent un élément de liaison ?",
        opts: [
          "Arbeitszeit",
          "Liebesbrief",
          "Haustür",
          "Tischbein"
        ],
        why: "<i>Arbeit<b>s</b>zeit</i> et <i>Liebe<b>s</b>brief</i> ont la liaison <i>-s-</i>, bien que <i>Arbeit</i> et <i>Liebe</i> soient féminins. <i>Haus|tür</i> et <i>Tisch|bein</i> unissent les deux noms sans rien entre eux."
      },
      {
        q: "Traduisez : « Les conditions de travail dans le système de santé se sont dégradées. » (die Arbeitsbedingung, das Gesundheitswesen, sich verschlechtern)",
        why: "<i>Die Arbeitsbedingungen im Gesundheitswesen haben sich verschlechtert</i>. Deux composés avec <i>-s-</i> : <i>Arbeit<b>s</b>bedingungen</i> et <i>Gesundheit<b>s</b>wesen</i>. On accepte aussi <i>sind schlechter geworden</i>, le Präteritum <i>verschlechterten sich</i> et l'ordre avec <i>Im Gesundheitswesen</i> en première position."
      },
      {
        tr: "Le marché du logement est tendu depuis des années dans les villes universitaires. Beaucoup d'étudiants ne trouvent une chambre abordable qu'après des mois de recherche.",
        why: "Dans <i>Wohnungsmarkt</i>, l'accent tombe sur <b>Woh</b>, avec un <b>o</b> long ; dans <i>Universitätsstädten</i>, l'accent principal tombe sur <b>tät</b> ; dans <i>monatelanger</i>, l'accent tombe sur <b>Mo</b>."
      },
      {
        tr: "Les conditions de travail se sont nettement améliorées.",
        why: "Dans <i>Arbeitsbedingungen</i>, l'accent principal tombe sur <b>Ar</b>, le premier élément du composé ; dans <i>deutlich</i>, <b>eu</b> se prononce [ɔʏ] ; dans <i>verbessert</i>, l'accent tombe sur <b>bes</b>."
      }
    ]
  },
  "lesson:c2-u02-l3": {
    theme: "Lexique abstrait",
    title: "Dérivation et Fremdwörter",
    objectives: [
      "former des noms abstraits avec -ung, -heit, -keit",
      "choisir entre -heit et -keit",
      "comprendre la valeur des préfixes ver-, zer-, ent-, miss-",
      "déduire le genre des Fremdwörter de leur suffixe"
    ],
    theory: [
      {
        h: "Des suffixes qui décident du genre",
        p: "Un suffixe fait passer un mot dans une autre catégorie et en fixe le genre. <em>-ung</em> forme des noms à partir de verbes : <em>verbessern</em> → <em>die Verbesserung</em>. <em>-heit</em>, <em>-keit</em> et <em>-igkeit</em> forment des noms à partir d'adjectifs : <em>frei</em> → <em>die Freiheit</em>, <em>nachhaltig</em> → <em>die Nachhaltigkeit</em>, <em>genau</em> → <em>die Genauigkeit</em>. Les noms en <strong>-ung, -heit, -keit, -schaft</strong> sont toujours féminins et, quand ils ont un pluriel, le font en <em>-en</em> ; beaucoup de noms abstraits, comme <em>Gelassenheit</em>, n'en ont pas."
      },
      {
        h: "-heit ou -keit ?",
        p: "<strong>-keit</strong> suit les adjectifs en <em>-bar, -ig, -lich, -sam</em> (<em>Dankbarkeit, Nachhaltigkeit, Höflichkeit, Wirksamkeit</em>) et le plus souvent ceux en <em>-el</em> et <em>-er</em> (<em>Eitelkeit, Sauberkeit</em>), avec des exceptions comme <em>Sicherheit</em> et <em>Dunkelheit</em>. <strong>-heit</strong> s'emploie dans la plupart des autres cas (<em>Freiheit, Gelassenheit, Schönheit</em>). <strong>-igkeit</strong> s'ajoute aux adjectifs en <em>-los</em> et à quelques autres : <em>Arbeitslosigkeit, Genauigkeit</em>."
      },
      {
        h: "Préfixes verbaux inséparables",
        p: "<em>ver-</em> a plusieurs valeurs : changement (<em>verändern</em>), erreur dans les verbes pronominaux (<em>sich verschreiben, sich verrechnen, sich verlaufen</em>), consommation jusqu'au bout (<em>verbrauchen</em>). <em>zer-</em> marque la mise en morceaux (<em>zerreißen, zerbrechen</em>). <em>ent-</em> marque l'éloignement ou la privation (<em>entfernen, entwerten</em>). <em>miss-</em> marque l'échec (<em>missverstehen, misslingen</em>). Tous sont inséparables et ne prennent pas <em>ge-</em> au participe : <em>zerrissen, missverstanden, entwertet</em>. <em>ver-, zer-, ent-</em> ne portent jamais l'accent ; <em>miss-</em> le porte dans certains verbes (<em>missverstehen</em>) et pas dans d'autres (<em>misslingen</em>)."
      },
      {
        h: "Fremdwörter : le suffixe donne le genre",
        p: "Dans les mots étrangers aussi, le suffixe oriente le genre : <em>-ion, -ität, -ur, -ie</em> sont en règle générale féminins (<em>die Nation, die Qualität, die Kultur, die Demokratie</em>) ; <em>-ismus</em> est masculin (<em>der Realismus</em>) ; <em>-ment</em> est presque toujours neutre (<em>das Dokument, das Argument</em>). Beaucoup de verbes en <em>-ieren</em> forment des noms en <em>-ierung</em> (<em>digitalisieren</em> → <em>die Digitalisierung</em>), mais pas tous : <em>studieren</em> donne <em>das Studium</em>."
      },
      {
        contrast: "Pour un francophone, beaucoup de Fremdwörter sont transparents : <em>-ité</em> correspond à <em>-ität</em> (<em>qualité, Qualität</em>), <em>-tion</em> reste <em>-tion</em> (<em>nation, Nation</em>), <em>-isme</em> devient <em>-ismus</em>, et le genre coïncide souvent (<em>la nation, die Nation</em> ; <em>le réalisme, der Realismus</em>). Mais il ne se recopie pas tel quel : <em>le problème</em> est <em>das Problem</em>, <em>le système</em> <em>das System</em>, et les mots en <em>-ment</em>, masculins en français (<em>le document, l'argument</em>), sont neutres en allemand. Attention aussi aux faux amis : <em>der Konkurs</em> est la faillite, pas le concours ; <em>das Gymnasium</em> est le lycée, pas le gymnase (<em>die Turnhalle</em>)."
      },
      {
        trap: "<em>ver-</em> ne marque pas toujours une erreur : <em>verkaufen</em> signifie vendre, <em>verschreiben</em> sans pronom réfléchi signifie prescrire (<em>ein Medikament verschreiben</em>), et <em>sich einer Sache verschreiben</em> signifie se vouer à quelque chose. Et <em>verreißen</em> n'est pas <em>zerreißen</em> : un critique qui <em>verreißt</em> un livre l'éreinte, il ne le déchire pas. Ne calquez pas ces préfixes sur le français : <em>ver-</em> n'a pas d'équivalent unique (vendre, prescrire, se tromper en écrivant), et c'est le verbe français qui change, pas le préfixe : <em>zerreißen</em>, déchirer ; <em>verreißen</em>, éreinter ; <em>missverstehen</em>, mal comprendre."
      },
      {
        tip: "Face à un nom abstrait inconnu, retirez préfixes et suffixes et cherchez la base : <em>Unzuverlässigkeit</em> → <em>un-</em> + <em>zuverlässig</em> + <em>-keit</em>, « manque de fiabilité »."
      }
    ],
    grammar: {
      title: "Dérivation : suffixes, préfixes, Fremdwörter",
      note: "<b>-ung, -heit, -keit, -schaft, -ion, -ität</b> : féminins. <b>-ismus</b> : masculin. <b>-ment</b> : presque toujours neutre. <b>ver-, zer-, ent-, miss-</b> : préfixes inséparables, participe sans <i>ge-</i>.",
      table: {
        head: ["base", "dérivé", "sens"],
        rows: [
          ["verbessern", "die Verbesserung", "l'amélioration"],
          ["gelassen", "die Gelassenheit", "le calme, la sérénité"],
          ["nachhaltig", "die Nachhaltigkeit", "la durabilité"],
          ["reißen", "zerreißen", "déchirer en morceaux"],
          ["verstehen", "missverstehen", "mal comprendre"],
          ["digitalisieren", "die Digitalisierung", "la numérisation"]
        ]
      },
      examples: [
        { tr: "L'amélioration des conditions de travail se fait attendre depuis longtemps.", note: "verbessern + -ung : nom féminin tiré d'un verbe" },
        { tr: "J'admire son calme dans les situations difficiles.", note: "gelassen + -heit" },
        { tr: "La durabilité du projet est mise en doute par les spécialistes.", note: "nachhaltig + -keit : -keit après -ig" },
        { tr: "Je me suis trompé en écrivant la date.", note: "sich verschreiben : ver- marque une erreur" },
        { tr: "Pendant la dispute, elle a déchiré la lettre en petits morceaux.", note: "zer- : mise en morceaux ; participe zerrissen, sans ge-" },
        { tr: "La numérisation de l'administration publique n'avance que lentement.", note: "digitalisieren + -ung : schéma fréquent des verbes en -ieren" }
      ]
    },
    vocab: [
      "la dérivation, le mot dérivé",
      "le suffixe",
      "le préfixe",
      "le mot étranger, l'emprunt",
      "le calme, la sérénité",
      "la durabilité, le développement durable",
      "la fiabilité",
      "la numérisation, la transformation numérique",
      "déchirer (en morceaux)",
      "se tromper en écrivant",
      "mal comprendre, se méprendre sur",
      "dévaluer ; composter (un billet)"
    ],
    exercises: [
      {
        q: "Quel nom est correctement dérivé de « dankbar » ?",
        opts: [
          "die Dankbarkeit",
          "die Dankbarheit",
          "die Dankbarung"
        ],
        why: "Après <i>-bar</i>, le suffixe est <b>-keit</b> : <i>Dankbarkeit</i>, comme <i>Verfügbarkeit</i>. <i>-ung</i> forme des noms à partir de verbes, pas d'adjectifs."
      },
      {
        q: "Quel est le genre de « Realismus » ?",
        opts: [
          "der",
          "die",
          "das"
        ],
        why: "Les noms en <b>-ismus</b> sont masculins : <i>der Realismus, der Optimismus</i>. Le pluriel, quand il existe, est en <i>-ismen</i>."
      },
      {
        q: "Sur un formulaire : « Entschuldigung, ich habe mich beim Datum verschrieben. » Que s'est-il passé ?",
        opts: [
          "je me suis trompé en écrivant la date",
          "je me suis inscrit pour cette date",
          "j'ai prescrit la date"
        ],
        why: "<b>sich verschreiben</b> : ici <i>ver-</i> marque une erreur, comme dans <i>sich verrechnen</i> et <i>sich verlaufen</i>. Sans pronom réfléchi, <i>verschreiben</i> signifie « prescrire » (un médicament) ; <i>sich einer Sache verschreiben</i> signifie « se vouer à quelque chose »."
      },
      {
        q: "Complétez : « Seine ___ ist legendär: Er hat noch nie eine Frist versäumt. »",
        hint: "nom tiré de zuverlässig",
        why: "<b>Zuverlässigkeit</b> : après <i>-ig</i>, le suffixe est <i>-keit</i> ; le nom est féminin et prend une majuscule."
      },
      {
        q: "Complétez avec deux noms dérivés : dans le premier blanc à partir de « digitalisieren », dans le second à partir de « wirksam ».",
        tr: "La numérisation de l'administration doit accélérer les procédures, mais les spécialistes ne sont pas d'accord sur son efficacité.",
        why: "<b>Digitalisierung</b> : beaucoup de verbes en <i>-ieren</i> donnent un nom en <i>-ierung</i>. <b>Wirksamkeit</b> : après <i>-sam</i>, le suffixe est <i>-keit</i>."
      },
      {
        q: "Associez chaque verbe à son sens.",
        pairs: [
          "déchirer en morceaux",
          "se perdre, se tromper de chemin",
          "mal comprendre",
          "dévaluer"
        ]
      },
      {
        q: "Lesquels de ces noms sont féminins ?",
        opts: [
          "Nation",
          "Qualität",
          "Dokument",
          "Optimismus"
        ],
        why: "<i>die Nation</i> et <i>die Qualität</i> : <b>-ion</b> et <b>-ität</b> donnent le féminin. <i>das Dokument</i> est neutre, <i>der Optimismus</i> masculin."
      },
      {
        q: "Traduisez : « La durabilité du projet a été mise en doute. » (die Nachhaltigkeit, in Zweifel ziehen)",
        why: "<i>Die Nachhaltigkeit des Projekts wurde in Zweifel gezogen</i> (ou <i>ist ... in Zweifel gezogen worden</i>). On accepte aussi le verbe simple <i>bezweifeln</i> et le génitif <i>Projektes</i>."
      },
      {
        tr: "La numérisation ne change pas seulement le monde du travail, mais aussi la langue. Beaucoup de mots étrangers venus de l'anglais s'emploient désormais tout naturellement.",
        why: "Dans <i>Digitalisierung</i>, l'accent tombe sur <b>sie</b> ; dans <i>Fremdwörter</i>, l'accent tombe sur <b>Fremd</b> ; dans <i>Englischen</i>, l'accent tombe sur <b>Eng</b> et <b>ng</b> se prononce [ŋ]."
      },
      {
        tr: "Son calme m'a impressionné.",
        why: "Dans <i>Gelassenheit</i>, l'accent tombe sur <b>las</b> ; dans <i>beeindruckt</i>, les deux voyelles se prononcent séparément, be-<b>ein</b>-druckt, avec l'accent sur <b>ein</b>."
      }
    ]
  },
  "lesson:c2-u02-test": {
    theme: "Vérification",
    title: "Test : Pluriels et formation des mots",
    objectives: [
      "vérifier les pluriels doubles et de substitution, les composés et la dérivation"
    ],
    theory: [
      {
        p: "Dix questions sur toute l'unité. On réussit avec 70 %. Ne regardez pas les leçons pendant que vous répondez : si vous ne vous souvenez pas de quelque chose, mieux vaut revenir en arrière et réviser."
      }
    ],
    exercises: [
      {
        q: "Complétez : « In der Innenstadt gibt es zu wenige ___ für ältere Menschen. » (bancs)",
        hint: "pluriel de die Bank au sens de « banc »",
        why: "<b>Bänke</b> (ou <b>Sitzbänke</b>) : les bancs prennent l'Umlaut ; les <i>Banken</i> sont des établissements de crédit."
      },
      {
        q: "Complétez : « Die ___ zwischen Vermieter und Mieter landeten schließlich vor Gericht. » (les litiges)",
        hint: "pluriel usuel de der Streit",
        why: "<b>Streitigkeiten</b> : le pluriel usuel de <i>Streit</i> est <i>Streitigkeiten</i> ; on accepte aussi <i>Streite</i>, correct mais rare."
      },
      {
        q: "Complétez : « Das ___ hat die Schließung des Restaurants angeordnet. »",
        hint: "die Gesundheit + das Amt",
        why: "<b>Gesundheitsamt</b> : <i>-s-</i> après <i>-heit</i> ; neutre comme <i>das Amt</i>."
      },
      {
        q: "Complétez : « Mit großer ___ steuerte die Pilotin die Maschine durch den Sturm. »",
        hint: "nom tiré de besonnen (réfléchi, posé)",
        why: "<b>Besonnenheit</b> : <i>besonnen</i> + <i>-heit</i>, féminin."
      },
      {
        q: "Dans quelle phrase « Worte » est-il employé correctement ?",
        opts: [
          "Ihre Worte haben mich tief berührt.",
          "Das Wörterbuch enthält 50 000 Worte.",
          "Er kennt schon viele Worte auf Englisch."
        ],
        why: "Les mots d'un discours, ceux qui touchent ou convainquent, sont des <b>Worte</b>. Pour les mots en tant qu'unités du lexique, dans un dictionnaire ou dans le vocabulaire d'une langue, il faut <i>Wörter</i>."
      },
      {
        q: "Quel est le genre de « Bahnhofsvorplatz » (le parvis de la gare) ?",
        opts: [
          "der",
          "die",
          "das"
        ],
        why: "C'est le dernier élément qui décide : <b>der</b> Platz. Le <i>-s-</i> après <i>Bahnhof</i> est un élément de liaison."
      },
      {
        q: "Un critique a jugé très sévèrement un roman. Quelle phrase le journal emploie-t-il ?",
        opts: [
          "Der Kritiker hat den Roman verrissen.",
          "Der Kritiker hat den Roman zerbrochen.",
          "Der Kritiker hat den Roman entrissen."
        ],
        why: "<b>verreißen</b> signifie « éreinter ». <i>zerbrechen</i>, c'est casser un objet fragile ; <i>entreißen</i>, c'est arracher quelque chose des mains de quelqu'un, et le verbe demande le datif de la personne."
      },
      {
        q: "Associez chaque pluriel à son sens.",
        pairs: [
          "les rubans, les ligaments",
          "les volumes (d'une œuvre)",
          "les banques",
          "les bancs"
        ]
      },
      {
        tr: "En quelques mots, la linguiste expliqua la différence entre Wörter et Worte. Les étudiants l'écoutèrent avec une grande attention.",
        why: "Dans <i>Sprachwissenschaftlerin</i>, l'accent tombe sur <b>Sprach</b> ; dans <i>Wörtern</i>, le <b>ö</b> est bref, [œ] ; dans <i>Aufmerksamkeit</i>, l'accent tombe sur <b>Auf</b>."
      },
      {
        tr: "Le service d'hygiène a ordonné la fermeture.",
        why: "Dans <i>Gesundheitsamt</i>, l'accent tombe sur <b>sund</b> ; dans <i>Schließung</i>, <b>ie</b> est long et <b>ß</b> se prononce [s] ; dans <i>angeordnet</i>, l'accent tombe sur <b>an</b>."
      }
    ]
  }
});
