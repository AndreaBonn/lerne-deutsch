/* ============================================================
   Textes dans la langue de l'élève (fr) pour data/core/pfl-04.js, unité pfl-u04.
   Les clés renvoient aux id de la couche neutre ; les tableaux se
   joignent par index, leur longueur doit donc correspondre à core.
   Vérifié par scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("fr", {
  "unit:pfl-u04": {
    title: "Douleur et urgence",
    grammarNote: "la déclinaison de l'adjectif pour décrire la douleur · les subordonnées de temps als, wenn, bis, während, sobald · l'impératif pour appeler à l'aide · Perfekt et Präteritum pour rapporter une chute"
  },
  "lesson:pfl-u04-l1": {
    theme: "La douleur",
    title: "Quelle est l'intensité de la douleur ?",
    objectives: [
      "demander au patient l'intensité de sa douleur sur une échelle de 0 à 10",
      "décrire le type de douleur : en coup de poignard, brûlante, sourde, oppressante, qui tire",
      "mettre la bonne terminaison à l'adjectif placé devant le nom",
      "transmettre la douleur au médecin sans promettre de médicament au patient"
    ],
    theory: [
      {
        h: "Mesurer la douleur avec une question",
        p: "La douleur ne se mesure pas avec un appareil : c'est le patient qui la donne. C'est pourquoi beaucoup de services utilisent une échelle numérique de 0 à 10 : <em>Wie stark sind die Schmerzen von null bis zehn? Null heißt keine Schmerzen, zehn heißt die stärksten Schmerzen, die Sie sich vorstellen können.</em> On demande ensuite le type de douleur (<em>Wie fühlt sich der Schmerz an?</em>), si elle irradie (<em>Strahlt der Schmerz aus?</em>) et depuis quand elle est là (<em>Seit wann?</em>). Le chiffre se note avec l'heure, pour que l'équipe suivante puisse comparer."
      },
      {
        h: "L'adjectif devant le nom change de terminaison",
        p: "Quand l'adjectif est placé <strong>devant</strong> le nom, il prend une terminaison qui dépend de l'article, du genre et du cas : <em>ein drückend<b>er</b> Schmerz</em> (nominatif, article indéfini), <em>einen stechend<b>en</b> Schmerz</em> (accusatif), <em>der dumpf<b>e</b> Schmerz</em> (après l'article défini). Au pluriel sans article, la terminaison est <b>-e</b> au nominatif et à l'accusatif (<em>starke Schmerzen</em>) et <b>-en</b> au datif (<em>bei leichten Schmerzen</em>) ; après <em>die</em> ou <em>diese</em>, elle est <b>-en</b> : <em>diese starken Schmerzen</em>. Quand l'adjectif est placé <strong>après</strong> <em>sein</em>, il ne prend aucune terminaison : <em>Der Schmerz ist dumpf.</em>"
      },
      {
        contrast: "Pour un francophone, <em>Analgetikum</em> et <em>Analgesie</em> sont transparents : analgésique, analgésie. C'est le registre des médecins et des transmissions écrites (<em>Analgetikum nach ärztlicher Anordnung</em>). En France, un patient dit volontiers « antalgique » ou « antidouleur » ; un patient allemand ne dit presque jamais <em>Analgetikum</em> : il dit <em>das Schmerzmittel</em>, et le soulagement est <em>die Schmerzlinderung</em>. Les qualificatifs ne se superposent pas non plus : la douleur « lancinante » du français, qui revient par élancements, n'est pas exactement <em>stechend</em>, qui pique comme une aiguille ou un couteau ; la douleur « oppressante » de la poitrine correspond bien à <em>drückend</em>. Côté grammaire, le français accorde l'adjectif aussi après le verbe (« la douleur est forte », « les douleurs sont fortes ») ; l'allemand le laisse nu après <em>sein</em> (<em>Die Schmerzen sind stark</em>). Devant le nom, en revanche, les deux langues se rejoignent : « de fortes douleurs », <em>starke Schmerzen</em>."
      },
      {
        trap: "Le patient allemand parle presque toujours de ses douleurs au pluriel : <em>Ich habe Schmerzen</em>, <em>Haben Sie Schmerzen?</em> Le singulier <em>der Schmerz</em> sert à décrire une douleur précise : <em>Der Schmerz ist stechend.</em> Attention à <em>stark</em> : devant un pluriel sans article, c'est <em>starke</em>, pas « starken » (<em>Haben Sie starke Schmerzen?</em>). Et <em>drückend</em> n'a rien de « pressant » au sens d'urgent : c'est la douleur qui appuie, qui serre."
      },
      {
        tip: "Si le patient demande quelque chose contre la douleur, ne promets pas de médicament : <em>Ich sage es sofort der Ärztin, sie entscheidet über ein Schmerzmittel.</em> Le choix du médicament et le moment relèvent de la prescription médicale. Ensuite, redemande le chiffre sur l'échelle et note-le de nouveau : c'est ainsi qu'on voit si la douleur a diminué."
      }
    ],
    grammar: {
      title: "L'adjectif qui décrit la douleur",
      note: "Devant le nom, l'adjectif prend une <b>terminaison</b> ; après <b>sein</b>, il n'en prend aucune. Au pluriel sans article : <b>-e</b> (nominatif, accusatif), <b>-en</b> (datif) ; après <i>die</i>, <i>diese</i> : <b>-en</b>.",
      table: {
        head: ["cas", "exemple", "terminaison"],
        rows: [
          ["nominatif, ein", "Es ist ein drückender Schmerz.", "-er"],
          ["accusatif, einen", "Ich habe einen stechenden Schmerz.", "-en"],
          ["pluriel sans article", "Haben Sie starke Schmerzen?", "-e"],
          ["pluriel avec diese", "Seit wann haben Sie diese starken Schmerzen?", "-en"],
          ["datif pluriel sans article", "Auch bei leichten Schmerzen dürfen Sie klingeln.", "-en"],
          ["après sein", "Der Schmerz ist dumpf.", "aucune"]
        ]
      },
      examples: [
        { tr: "Avez-vous de fortes douleurs ?", note: "pluriel sans article : starke" },
        { tr: "J'ai une douleur en coup de poignard dans le flanc.", note: "accusatif masculin après einen : stechenden" },
        { tr: "C'est une douleur oppressante.", note: "nominatif masculin après ein : drückender" },
        { tr: "La douleur est sourde.", note: "après sein, l'adjectif ne prend pas de terminaison" },
        { tr: "Depuis quand avez-vous ces fortes douleurs ?", note: "après diese au pluriel : starken" },
        { tr: "Même si les douleurs sont légères, vous pouvez sonner.", note: "bei demande le datif : leichten" }
      ]
    },
    vocab: [
      "l'échelle de la douleur",
      "l'intensité de la douleur",
      "en coup de poignard, qui pique",
      "brûlant",
      "sourd (pour une douleur)",
      "oppressant, qui appuie",
      "qui tire",
      "irradier (der Schmerz strahlt aus : la douleur irradie)",
      "l'antidouleur (mot pour le patient)",
      "l'analgésique, l'antalgique (terme technique)",
      "le soulagement de la douleur (mot pour le patient)",
      "l'analgésie (terme technique)"
    ],
    dialogue: [
      "Madame Keller, vous avez mal ?",
      "Oui, j'ai de fortes douleurs dans le dos.",
      "Quelle est l'intensité des douleurs de zéro à dix ? Zéro veut dire pas de douleur, dix veut dire la pire douleur que vous puissiez imaginer.",
      "Je dirais sept.",
      "Quel genre de douleur est-ce ? Ça pique, ça brûle ou c'est sourd ?",
      "Plutôt sourd. Et ça irradie dans la jambe droite.",
      "Merci. Je le dis tout de suite à la médecin, c'est elle qui décide pour un antidouleur.",
      "Merci, madame Marin."
    ],
    culture: {
      title: "Regard allemand : la douleur se demande et se note",
      text: "<p>Pour la prise en charge des personnes douloureuses, l'Allemagne dispose d'un <i>Expertenstandard</i> national des soins infirmiers, publié par le DNQP : il décrit comment repérer la douleur de façon systématique, la documenter et la réévaluer. En pratique, beaucoup de services demandent la douleur avec une échelle numérique de 0 à 10, la <i>Numerische Rating-Skala</i> (NRS), et la notent dans la feuille de surveillance avec les paramètres vitaux.</p><p>Pour les personnes qui ne peuvent pas donner de chiffre, par exemple en cas de démence avancée, on utilise des échelles d'observation du comportement : le visage, la respiration, l'agitation. L'échelle utilisée relève de l'établissement ; le principe reste que la douleur est celle que rapporte le patient, pas celle qu'on voit de l'extérieur.</p>"
    },
    exercises: [
      {
        q: "La patiente veut dire « J'ai une douleur en coup de poignard dans le flanc ». Quelle phrase est correcte ?",
        opts: [
          "Ich habe einen stechender Schmerz in der Seite.",
          "Ich habe einen stechenden Schmerz in der Seite.",
          "Ich habe ein stechenden Schmerz in der Seite."
        ],
        why: "<i>Der Schmerz</i> est masculin et ici complément d'objet, donc à l'accusatif : <b>einen stechenden Schmerz</b>. Après <i>einen</i>, l'adjectif prend <b>-en</b>."
      },
      {
        q: "Complète : « Haben Sie ___ Schmerzen? » (stark)",
        hint: "pluriel sans article",
        why: "<b>starke</b> : au pluriel sans article, l'adjectif prend <b>-e</b>, comme l'article <i>die</i> qui manque."
      },
      {
        q: "Choisis le bon article défini pour chaque nom.",
        items: ["échelle de la douleur", "antidouleur", "analgésique", "soulagement de la douleur", "analgésie", "dos"]
      },
      {
        q: "Associe chaque adjectif au type de douleur.",
        pairs: ["en coup de poignard, qui pique", "brûlant", "sourd", "qui tire"]
      },
      {
        q: "Remets les mots dans l'ordre.",
        tr: "La douleur irradie-t-elle dans le bras ?",
        why: "<i>Strahlt der Schmerz in den Arm aus?</i> Question fermée : le verbe conjugué <i>strahlt</i> ouvre la phrase et la particule séparable <i>aus</i> va à la fin."
      },
      {
        q: "Complète la phrase.",
        tr: "J'ai une douleur sourde dans le dos, et elle est très forte.",
        why: "<i>einen dumpfen Schmerz</i> : devant le nom, accusatif masculin, terminaison <b>-en</b>. <i>er ist sehr stark</i> : après <i>sein</i>, l'adjectif reste sans terminaison."
      },
      {
        q: "Traduis, en t'adressant au patient : « Avez-vous de fortes douleurs ? »",
        why: "<i>Haben Sie starke Schmerzen?</i> À l'oral, on entend aussi <i>große Schmerzen</i>. Pour parler de la douleur, on emploie le plus souvent le pluriel, et l'adjectif devant un pluriel sans article prend <b>-e</b>."
      },
      {
        q: "Quelles phrases ont la bonne terminaison ?",
        opts: [
          "Haben Sie starke Schmerzen?",
          "Es ist ein drückender Schmerz.",
          "Ich habe einen dumpfe Schmerz.",
          "Seit wann haben Sie diese starken Schmerzen?",
          "Der Schmerz ist stechender."
        ],
        why: "Après <i>einen</i>, il faut <i>dumpfen</i>. Après <i>ist</i>, l'adjectif ne prend pas de terminaison : <i>Der Schmerz ist stechend</i>."
      },
      {
        q: "Un patient sonne.",
        setting: "Tu entres dans la chambre : le patient dit qu'il a mal au ventre.",
        lines: [
          { tr: "J'ai mal au ventre." },
          { tr: "Demande quelle est l'intensité de la douleur de zéro à dix.", answerTr: "Quelle est l'intensité des douleurs de zéro à dix ?" },
          { tr: "Environ six." },
          { tr: "Demande si c'est une douleur qui pique ou une douleur sourde.", answerTr: "C'est une douleur qui pique ou une douleur sourde ?" },
          { tr: "Plutôt qui pique. Vous me donnez quelque chose contre la douleur maintenant ?" },
          { tr: "Réponds que tu le dis tout de suite à la médecin et que c'est elle qui décide.", answerTr: "Je le dis tout de suite à la médecin. C'est elle qui décide pour un antidouleur." }
        ]
      },
      {
        tr: "J'ai de fortes douleurs dans le dos. La douleur est sourde et irradie dans la jambe droite.",
        why: "Dans <i>Schmerzen</i>, le <b>sch</b> se prononce [ʃ] comme « ch » et le <b>z</b> [ts] ; dans <i>Rücken</i>, le <b>ü</b> est bref, comme le « u » français ; dans <i>strahlt</i>, le <b>st</b> initial se dit [ʃt] et le <b>h</b> allonge le <b>a</b>."
      },
      {
        tr: "Quelle est l'intensité des douleurs de zéro à dix ?",
        why: "Dans <i>stark</i>, le <b>st</b> initial se dit [ʃt] ; dans <i>null</i>, le <b>u</b> est bref et se prononce « ou » ; dans <i>zehn</i>, le <b>z</b> est [ts] et le <b>h</b> allonge le <b>e</b>."
      }
    ]
  },
  "lesson:pfl-u04-l2": {
    theme: "Reconnaître l'urgence",
    title: "Une urgence",
    objectives: [
      "reconnaître les signes d'une urgence et dire ce qu'on a observé",
      "comprendre et utiliser les paires Fachsprache / Laiensprache de l'urgence",
      "choisir entre als et wenn et mettre le verbe à la fin de la subordonnée de temps",
      "demander et noter quand le trouble a commencé"
    ],
    theory: [
      {
        h: "Ce qu'on observe",
        p: "D'abord on reconnaît, puis on appelle à l'aide. Les phrases de cette leçon décrivent ce qu'on voit et ce qu'on entend : le patient <em>reagiert nicht</em>, <em>ist nicht ansprechbar</em> (il ne répond pas quand on lui parle), <em>ist plötzlich ganz blass</em>, <em>spricht so komisch</em>, un bras retombe, un coin de la bouche tombe. Le mot qui compte est <em>plötzlich</em>, soudain : un changement soudain se signale tout de suite, même si tu ne sais pas encore ce que c'est. Le diagnostic revient au médecin ; ton rôle est de voir, d'appeler et de rester."
      },
      {
        h: "La subordonnée de temps",
        p: "Les conjonctions de temps ouvrent une subordonnée avec le verbe conjugué <strong>à la fin</strong> : <em>bis das Team kommt</em>, <em>während ich mit ihr sprach</em>, <em>sobald das Team da ist</em>. Si la subordonnée vient en premier, la principale commence par le verbe : <em>Als ich ins Zimmer kam, <b>war</b> sie nicht ansprechbar.</em> Deux conjonctions traduisent « quand » : <strong>als</strong> pour un fait <b>unique dans le passé</b> (<em>Als ich ins Zimmer kam</em>), <strong>wenn</strong> pour le présent, le futur et ce qui se répète (<em>Wenn ein Patient nicht reagiert, rufe ich sofort Hilfe</em>). <em>Wann</em>, lui, sert à poser la question : <em>Wann hat das angefangen?</em>"
      },
      {
        contrast: "En France, on parle d'« AVC », et le patient comme sa famille emploient le sigle sans hésiter. En allemand, l'équivalent technique est <em>der Apoplex</em> (et, pour la seule forme ischémique, <em>der Hirninfarkt</em>), mais à l'oral, avec le patient, il n'y a qu'un mot : <em>der Schlaganfall</em>. N'attends pas de sigle de la famille, et ne traduis pas « AVC » lettre par lettre. Les autres termes techniques te sont transparents (<em>Synkope</em> syncope, <em>Myokardinfarkt</em> infarctus du myocarde, <em>somnolent</em> somnolent) ; les mots du patient le sont moins : <em>die Ohnmacht</em> (l'évanouissement), <em>der Herzinfarkt</em> (la crise cardiaque), <em>schläfrig</em>. Enfin, le français dit « quand » (ou « lorsque ») dans tous les cas ; l'allemand a trois mots (<em>als, wenn, wann</em>), et confondre <em>als</em> et <em>wenn</em> est l'erreur la plus fréquente quand on raconte un fait."
      },
      {
        trap: "Le « malaise » si courant dans les services français (« il a fait un malaise ») n'a pas d'équivalent direct : <em>die Malaise</em> désigne une situation pénible, jamais un patient qui se sent mal. On décrit ce qu'on voit : <em>Ihm ist schwarz vor Augen geworden</em>, <em>Sie ist ohnmächtig geworden</em>. <em>Ansprechbar</em> ne veut pas dire « qui parle » : le patient <b>répond</b> quand on lui parle. Un patient peut être <em>wach</em> (réveillé) sans être <em>ansprechbar</em>. Et <em>somnolent</em> n'est pas simplement « fatigué » : le patient dort beaucoup mais se réveille si on l'appelle, ce qui se note et se signale."
      },
      {
        tip: "Demande toujours, et note, quand c'est arrivé : <em>Wann hat das angefangen?</em> Si le trouble peut être un AVC, l'heure de début est une des premières choses que le médecin voudra savoir. Si le patient ne le sait pas, demande à ceux qui étaient là : <em>Wann haben Sie ihn zuletzt normal gesehen?</em>"
      }
    ],
    grammar: {
      title: "als, wenn, bis, während, sobald",
      note: "Dans la subordonnée de temps, le verbe conjugué va <b>à la fin</b>. <b>als</b> : un fait unique dans le passé. <b>wenn</b> : présent, futur, répétition. <b>wann</b> : la question.",
      table: {
        head: ["conjonction", "exemple", "emploi"],
        rows: [
          ["als", "Als ich ins Zimmer kam, war sie nicht ansprechbar.", "une fois, dans le passé"],
          ["wenn", "Wenn ein Patient nicht reagiert, rufe ich sofort Hilfe.", "chaque fois, règle"],
          ["bis", "Ich bleibe bei der Patientin, bis das Team kommt.", "jusqu'à ce que"],
          ["während", "Während ich mit ihr sprach, wurde sie blass.", "au même moment"],
          ["sobald", "Sobald das Team da ist, berichte ich kurz.", "dès que"]
        ]
      },
      examples: [
        { tr: "Quand je suis entrée dans la chambre, Mme Keller ne répondait pas.", note: "als : un fait unique dans le passé" },
        { tr: "Si un patient ne réagit pas, j'appelle tout de suite à l'aide.", note: "wenn : une règle qui vaut toujours" },
        { tr: "Je reste avec la patiente jusqu'à ce que l'équipe arrive.", note: "bis : le verbe kommt à la fin" },
        { tr: "Pendant que je lui parlais, elle est devenue soudain toute pâle.", note: "während : deux choses au même moment" },
        { tr: "Quand elle s'est levée, elle a vu noir.", note: "jemandem wird schwarz vor Augen : expression courante" },
        { tr: "Dès que l'équipe est là, je rapporte brièvement ce qui s'est passé.", note: "sobald : tout de suite après" }
      ]
    },
    vocab: [
      "l'urgence",
      "la syncope (terme technique)",
      "l'évanouissement (mot pour le patient)",
      "l'AVC, l'apoplexie (terme technique)",
      "l'AVC, l'attaque (mot pour le patient)",
      "l'infarctus du myocarde (terme technique)",
      "la crise cardiaque, l'infarctus (mot pour le patient)",
      "inconscient",
      "qui répond quand on lui parle (nicht ansprechbar : ne répond pas)",
      "somnolent (terme technique)",
      "qui a sommeil (mot pour le patient)",
      "pâle"
    ],
    dialogue: [
      "Madame Marin, venez vite, s'il vous plaît ! Mon père parle bizarrement.",
      "J'arrive tout de suite. Monsieur Brandt, vous m'entendez ?",
      "Quand je lui ai donné de l'eau, le verre lui est tombé des mains.",
      "Quand est-ce que ça a commencé ?",
      "Il y a environ dix minutes, pendant qu'il mangeait.",
      "Monsieur Brandt, pouvez-vous lever les deux bras, s'il vous plaît ?",
      "Le bras droit retombe. Et la bouche tombe d'un côté.",
      "C'est peut-être un AVC. J'appuie maintenant sur le bouton d'alarme et je reste avec lui jusqu'à ce que l'équipe arrive."
    ],
    culture: {
      title: "Regard allemand : le temps dans l'AVC",
      text: "<p>En Allemagne, beaucoup d'hôpitaux ont une <i>Stroke Unit</i>, une unité spécialisée dans l'AVC, et les formations du personnel et du grand public enseignent souvent le test <i>FAST</i> : <i>Face</i> (le visage est-il asymétrique ?), <i>Arms</i> (un bras retombe-t-il ?), <i>Speech</i> (la parole est-elle confuse ?), <i>Time</i> (le temps compte : appeler tout de suite et noter l'heure). Ce sont des questions pour reconnaître, pas pour soigner.</p><p>Dans le dialogue, l'infirmière fait lever les bras, demande quand cela a commencé et appelle l'équipe : reconnaître, appeler, rester. La suite, c'est le médecin qui la décide selon le protocole de l'établissement.</p>"
    },
    exercises: [
      {
        q: "Associe chaque terme technique au mot qu'emploie le patient.",
        pairs: ["die Ohnmacht", "der Schlaganfall", "der Herzinfarkt", "schläfrig"]
      },
      {
        q: "Complète : « ___ ich ins Zimmer kam, war sie nicht ansprechbar. »",
        opts: ["Als", "Wenn", "Wann"],
        why: "<b>Als</b> : un fait unique dans le passé. <i>Wenn</i> s'emploie pour ce qui se répète ou pour le présent et le futur ; <i>wann</i> pose la question."
      },
      {
        q: "Complète : « Ich bleibe bei ihm, ___ das Team kommt. »",
        hint: "« jusqu'à ce que »",
        why: "<b>bis</b> : « jusqu'à ce que ». Le verbe de la subordonnée, <i>kommt</i>, va à la fin."
      },
      {
        tr: "Le Präteritum de kommen, à toutes les personnes.",
        why: "<i>Kam, kamst, kam, kamen, kamt, kamen</i> : verbe fort, la voyelle devient <b>a</b>. À la première et à la troisième personne du singulier, il n'y a pas de terminaison : <i>ich kam, sie kam</i>. C'est la forme qu'on emploie le plus souvent après <i>als</i> dans un récit ; à l'oral, on entend aussi le Perfekt."
      },
      {
        q: "Complète la phrase.",
        tr: "Si un patient ne réagit pas, j'appelle tout de suite à l'aide.",
        why: "Après <i>wenn</i>, le verbe <i>reagiert</i> va à la fin de la subordonnée ; la principale commence par le verbe : <i>rufe ich</i>."
      },
      {
        q: "Remets les mots dans l'ordre.",
        tr: "Quand je suis entrée dans la chambre, elle ne répondait pas.",
        why: "<i>Als ich ins Zimmer kam, war sie nicht ansprechbar.</i> Dans la subordonnée, <i>kam</i> va à la fin ; après la virgule, la principale commence par le verbe <i>war</i>."
      },
      {
        q: "Quelles observations sont des signes à signaler tout de suite ?",
        opts: [
          "Der Patient reagiert nicht, wenn ich ihn anspreche.",
          "Die Patientin ist plötzlich ganz blass und schwitzt.",
          "Der Patient schläft nach dem Mittagessen ein bisschen.",
          "Ein Mundwinkel hängt plötzlich nach unten.",
          "Die Patientin liest im Bett die Zeitung."
        ],
        why: "Un patient qui ne répond pas et un changement <b>soudain</b> (<i>plötzlich</i>) du teint ou du visage se signalent tout de suite. Une petite sieste après le repas et la lecture du journal, non."
      },
      {
        q: "Choisis le bon article défini pour chaque nom.",
        items: ["urgence", "évanouissement", "AVC", "syncope", "conscience", "crise cardiaque"]
      },
      {
        q: "Traduis : « Je reste avec lui jusqu'à ce que l'équipe arrive. »",
        why: "<i>Ich bleibe bei ihm, bis das Team kommt</i> : <i>bei</i> demande le datif, <i>ihm</i> ; après <i>bis</i>, le verbe va à la fin. <i>bis das Team da ist</i> convient aussi."
      },
      {
        tr: "Quand je suis entrée dans la chambre, Mme Keller ne répondait pas. J'ai tout de suite appelé à l'aide.",
        why: "Dans <i>ansprechbar</i>, le <b>sp</b> se dit [ʃp] et le <b>ch</b> après <b>e</b> est [ç], comme un « i » soufflé sans voix ; dans <i>Zimmer</i>, le <b>z</b> est [ts] ; dans <i>sofort</i>, le <b>s</b> initial devant voyelle est sonore [z]."
      },
      {
        tr: "Quand est-ce que ça a commencé ?",
        why: "Dans <i>Wann</i>, le <b>w</b> se lit [v] ; dans <i>angefangen</i>, le préfixe <b>an</b> et le <b>ge</b> s'enchaînent sans pause, avec l'accent sur <b>an</b>, et le <b>-ngen</b> final est [ŋən], sans <b>g</b> dur."
      }
    ]
  },
  "lesson:pfl-u04-l3": {
    theme: "Appeler à l'aide",
    title: "Appeler à l'aide",
    objectives: [
      "appeler à l'aide dans le service avec l'alarme et à domicile avec le 112",
      "répondre aux questions du centre de régulation : où, qu'est-ce qui s'est passé",
      "donner des consignes brèves à l'impératif, avec Sie aux patients et aux proches et avec du aux collègues",
      "ne pas confondre Reanimation avec le service de réanimation français"
    ],
    theory: [
      {
        h: "Qui appeler, et comment",
        p: "À l'hôpital, on appelle à l'aide de l'intérieur : le <em>Notrufknopf</em> dans la chambre et dans la salle de bains, l'alarme du service, le numéro d'urgence interne de l'établissement. Hors de l'hôpital, à domicile ou dans une maison de retraite sans médecin sur place, on appelle le <strong>112</strong> : en Allemagne, c'est le numéro des secours médicaux et des pompiers (<em>Rettungsdienst und Feuerwehr</em>), gratuit depuis n'importe quel téléphone. Le <strong>110</strong> est la police. Au téléphone répond la <em>Leitstelle</em>, le centre de régulation, qui pose ses questions dans l'ordre qui lui convient : laisse-la mener l'appel."
      },
      {
        h: "L'impératif",
        p: "Avec <strong>Sie</strong>, l'impératif est le verbe à l'infinitif suivi de <em>Sie</em> : <em>Rufen Sie bitte die 112 an! Bleiben Sie bitte bei Ihrem Mann!</em> Avec <strong>du</strong>, que beaucoup de services emploient entre collègues, c'est le radical du verbe, souvent sans <b>-e</b> : <em>Hol bitte schnell Hilfe! Lös bitte den Alarm aus!</em> Les verbes qui changent <b>e</b> en <b>i</b> au présent le font aussi ici : <em>du gibst</em> → <em>Gib mir bitte das Telefon!</em> La particule séparable va à la fin : <em>Rufen Sie ... an</em>, <em>Lös ... aus</em>. <em>Bitte</em> adoucit, mais en urgence la phrase reste courte."
      },
      {
        contrast: "En France, on a appris plusieurs numéros : le 15 pour le SAMU, le 18 pour les pompiers, le 17 pour la police, et le 112 européen qui aboutit à l'un d'eux. En Allemagne, le réflexe est plus simple : <strong>112</strong> pour tout ce qui est médical et pour les pompiers, <strong>110</strong> pour la police ; il n'y a pas de « 15 ». L'impératif de politesse français se passe de pronom : « Appelez le 112 », « Restez avec lui ». L'allemand, lui, exige <em>Sie</em> juste après le verbe : <em>Rufen Sie</em>, <em>Bleiben Sie</em>. Enfin, le piège de cette leçon : en France, « la réa » est d'abord un service, la réanimation, alors que <em>die Reanimation</em> est le geste de réanimation cardio-pulmonaire, et le mot du patient pour ce geste est <em>die Wiederbelebung</em>. Le service s'appelle <em>die Intensivstation</em>."
      },
      {
        trap: "<em>Die Ambulanz</em>, dans un hôpital allemand, désigne le plus souvent le service de consultations externes ; pour le véhicule, on dit <em>der Rettungswagen</em>. L'ambulance se dit <em>der Rettungswagen</em>, et le médecin d'urgence qui arrive avec les secours, <em>der Notarzt</em>. Les urgences de l'hôpital sont <em>die Notaufnahme</em>. Et ne raccroche pas toi-même avec le centre de régulation : <em>Bleiben Sie am Telefon</em> veut dire rester en ligne jusqu'à ce que la <em>Leitstelle</em> mette fin à l'appel."
      },
      {
        tip: "Le premier jour dans un nouveau service, demande deux choses : où se trouve le bouton d'alarme et quel est le numéro d'urgence interne de l'établissement. Ils changent d'un hôpital à l'autre, et en urgence on n'a pas le temps de les chercher."
      }
    ],
    grammar: {
      title: "L'impératif pour appeler à l'aide",
      note: "Avec <b>Sie</b> : infinitif + Sie. Avec <b>du</b> : radical du verbe, souvent sans -e ; <b>e</b> devient <b>i</b> là où il change aussi au présent. La particule séparable va <b>à la fin</b>.",
      table: {
        head: ["à qui", "exemple", "forme"],
        rows: [
          ["patient, proche", "Rufen Sie bitte die 112 an!", "rufen + Sie, an à la fin"],
          ["patient, proche", "Bleiben Sie bitte bei Ihrem Mann!", "bleiben + Sie"],
          ["collègue", "Hol bitte schnell Hilfe!", "holen → hol"],
          ["collègue", "Lös bitte den Alarm aus!", "auslösen → lös ... aus"],
          ["collègue", "Gib mir bitte das Telefon!", "du gibst → gib"]
        ]
      },
      examples: [
        { tr: "Appelez le 112, s'il vous plaît !", note: "séparable : an à la fin" },
        { tr: "Va chercher de l'aide, vite !", note: "au collègue, avec du" },
        { tr: "Restez avec votre mari, s'il vous plaît !", note: "au proche, avec Sie" },
        { tr: "Déclenche l'alarme, s'il te plaît !", note: "auslösen : aus à la fin" },
        { tr: "Donne-moi le téléphone, s'il te plaît !", note: "geben : e devient i" },
        { tr: "Restez en ligne et ne raccrochez pas !", note: "c'est ce que dit souvent le centre de régulation" }
      ]
    },
    vocab: [
      "l'appel d'urgence (aussi : le numéro d'urgence)",
      "le numéro d'urgence",
      "le bouton d'alarme",
      "l'alarme",
      "déclencher (une alarme)",
      "le centre de régulation des secours",
      "les secours médicaux",
      "l'ambulance",
      "l'équipe de réanimation",
      "la réanimation cardio-pulmonaire (terme technique)",
      "la réanimation (mot pour le patient)",
      "aller chercher (Hilfe holen : aller chercher de l'aide)"
    ],
    dialogue: [
      "Madame Wolf, j'appelle maintenant le 112. Restez avec votre mari, s'il vous plaît.",
      "Urgences, pompiers et secours médicaux. Où se trouve l'urgence ?",
      "Lindenstraße 12, au deuxième étage. Je suis infirmière du service de soins à domicile.",
      "Que s'est-il passé ?",
      "Un patient de 78 ans ne répond plus tout d'un coup.",
      "Restez en ligne, s'il vous plaît. L'ambulance est en route.",
      "D'accord. Madame Wolf, ouvrez la porte d'entrée pour les secours, s'il vous plaît.",
      "Oui, j'y vais tout de suite."
    ],
    culture: {
      title: "Regard allemand : les questions du centre de régulation",
      text: "<p>Dans les formations aux premiers secours en Allemagne, on enseigne souvent les « W » de l'appel d'urgence : <i>Wo</i> (où), <i>Was</i> (que s'est-il passé), <i>Wie viele</i> (combien de personnes), <i>Welche Verletzungen</i> (quelles blessures ou quels symptômes) et <i>Warten auf Rückfragen</i> (attendre les questions). La dernière est la plus importante : le centre pose ses questions et c'est lui qui met fin à l'appel.</p><p>Quand on travaille à domicile, l'équipe du service n'est pas à quelques mètres ; mieux vaut donc connaître par cœur sa phrase de présentation, <i>Ich bin Pflegefachkraft vom ambulanten Pflegedienst</i>, et avoir sous la main l'adresse exacte du patient.</p>"
    },
    exercises: [
      {
        tr: "L'impératif de rufen.",
        why: "Avec <i>du</i> : <i>ruf</i> ; avec <i>ihr</i> : <i>ruft</i> ; avec <i>Sie</i> : <i>rufen Sie</i> ; et la forme <i>rufen wir</i>, « appelons ». L'impératif n'a pas de première personne du singulier."
      },
      {
        q: "Au collègue, avec du : « Va chercher de l'aide, vite ! »",
        opts: ["Holst bitte schnell Hilfe!", "Hol bitte schnell Hilfe!", "Holen bitte schnell Hilfe!"],
        why: "À l'impératif avec <i>du</i>, on emploie le radical : <b>Hol</b>. <i>Holst</i> est le présent, et <i>Holen</i> sans <i>Sie</i> n'est pas un impératif de politesse."
      },
      {
        q: "Complète, à la femme du patient : « ___ Sie bitte bei Ihrem Mann! »",
        hint: "bleiben, impératif avec Sie",
        why: "<b>Bleiben</b> : l'impératif de politesse est l'infinitif suivi de <i>Sie</i>."
      },
      {
        q: "Remets les mots dans l'ordre.",
        tr: "Appelez le 112, s'il vous plaît !",
        why: "<i>Rufen Sie bitte die 112 an!</i> Le verbe ouvre la phrase, puis <i>Sie</i>, et la particule séparable <i>an</i> va à la fin. Le numéro se lit <i>eins-eins-zwei</i>."
      },
      {
        q: "Complète, au collègue avec du.",
        tr: "Déclenche l'alarme, vite !",
        why: "<i>Lös bitte schnell den Alarm aus!</i> <i>Auslösen</i> est séparable : le radical <i>lös</i> (ou <i>löse</i>) en tête, <i>aus</i> à la fin."
      },
      {
        q: "Associe chaque mot à son sens.",
        pairs: ["secours médicaux et pompiers", "police", "la réanimation cardio-pulmonaire (Wiederbelebung)", "le centre de régulation"]
      },
      {
        q: "Quels impératifs sont corrects ?",
        opts: [
          "Rufen Sie bitte den Arzt!",
          "Ruf bitte den Arzt!",
          "Rufe Sie bitte den Arzt!",
          "Gib mir bitte das Telefon!",
          "Gibst mir bitte das Telefon!"
        ],
        why: "Avec <i>Sie</i>, il faut l'infinitif : <i>Rufen Sie</i>, pas <i>Rufe Sie</i>. Avec <i>du</i>, on emploie le radical sans <i>-st</i> : <i>Ruf</i>, <i>Gib</i>."
      },
      {
        q: "Traduis ce que dit le centre de régulation : « Restez en ligne ! »",
        why: "<i>Bleiben Sie am Telefon!</i> Infinitif suivi de <i>Sie</i> ; <i>am</i> vaut <i>an dem</i>. Avec <i>bitte</i>, c'est correct aussi."
      },
      {
        q: "Tu appelles le 112 depuis le domicile d'un patient.",
        setting: "Tu es l'infirmière du service de soins à domicile ; le centre de régulation répond.",
        lines: [
          { tr: "Urgences, pompiers et secours médicaux. Où se trouve l'urgence ?" },
          { tr: "Donne l'adresse : Lindenstraße 12, deuxième étage.", answerTr: "Lindenstraße 12, au deuxième étage." },
          { tr: "Que s'est-il passé ?" },
          { tr: "Réponds qu'un patient ne répond plus tout d'un coup.", answerTr: "Un patient ne répond plus tout d'un coup." },
          { tr: "Restez en ligne, s'il vous plaît." },
          { tr: "Réponds que tu restes en ligne.", answerTr: "Oui, je reste en ligne." }
        ]
      },
      {
        tr: "Madame Wolf, j'appelle maintenant le 112. Restez avec votre mari, s'il vous plaît, puis ouvrez la porte d'entrée.",
        why: "Le 112 se lit <i>eins-eins-zwei</i>, chiffre par chiffre ; dans <i>Haustür</i>, le <b>au</b> se dit [aʊ] et le <b>ü</b> est long ; dans <i>öffnen</i>, le <b>ö</b> est bref, proche du « eu » de « neuf »."
      },
      {
        tr: "Va chercher de l'aide, vite !",
        why: "Dans <i>Hol</i>, le <b>o</b> est long ; dans <i>schnell</i>, le <b>sch</b> est [ʃ] et le <b>e</b> est bref ; dans <i>Hilfe</i>, le <b>h</b> initial s'entend, comme un souffle : ce n'est pas un h muet."
      }
    ]
  },
  "lesson:pfl-u04-l4": {
    theme: "La chute",
    title: "La chute",
    objectives: [
      "parler à un patient qui est tombé et appeler à l'aide sans le laisser seul",
      "rapporter une chute au médecin avec le Perfekt et le Präteritum",
      "distinguer Fachsprache et Laiensprache pour la fracture et l'hématome",
      "documenter la chute dans la fiche de déclaration de chute, en séparant ce qu'on a vu de ce que rapporte le patient"
    ],
    theory: [
      {
        h: "Après une chute",
        p: "Une chute se gère toujours de la même façon : on parle au patient, on appelle à l'aide, on transmet et on documente. <em>Was ist passiert? Bleiben Sie bitte liegen, ich hole Hilfe.</em> Ensuite, on demande ce que le patient peut dire (<em>Haben Sie sich den Kopf angeschlagen? Wo tut es weh?</em>) et on prévient le médecin. Chaque chute, même sans conséquence visible, se note dans le <em>Sturzprotokoll</em>, selon le protocole de l'établissement."
      },
      {
        h: "Perfekt et Präteritum dans le récit",
        p: "Quand on raconte à l'oral, on emploie surtout le <strong>Perfekt</strong> : <em>Frau Keller ist im Bad gestürzt. Ich habe sie auf dem Boden gefunden.</em> Avec <em>sein</em>, <em>haben</em> et les modaux, on emploie en général le <strong>Präteritum</strong>, même à l'oral : <em>Sie war wach und hatte Schmerzen. Ich wollte allein zur Toilette gehen.</em> L'auxiliaire : les verbes intransitifs de mouvement et de changement d'état prennent en général <em>sein</em> (<em>ist gestürzt, ist ausgerutscht, ist gefallen</em>), les autres <em>haben</em> ; c'est une tendance, l'auxiliaire s'apprend avec le verbe. Les verbes en <em>-ieren</em> ne prennent pas <em>ge-</em> : <em>informiert</em>, <em>dokumentiert</em> ; les séparables le placent après la particule : <em>ausgerutscht</em>."
      },
      {
        contrast: "Bonne nouvelle pour un francophone : « elle est tombée » se construit avec être, et <em>sie ist gestürzt</em>, <em>sie ist gefallen</em> avec <em>sein</em>. Ton réflexe est le bon pour les verbes de chute. Il te trahit ailleurs : « elle a glissé » prend avoir, alors que <em>sie ist ausgerutscht</em> prend <em>sein</em> ; « je l'ai trouvée » et <em>ich habe sie gefunden</em>, eux, concordent. Vérifie l'auxiliaire verbe par verbe. Sur les temps : l'imparfait français (« elle était réveillée, elle avait mal ») décrit un état ; le Präteritum allemand n'a pas cette nuance, c'est simplement un temps du passé, et <em>Sie war wach</em> remplace <em>Sie ist wach gewesen</em> parce qu'il est plus court, pas parce qu'il décrit. Pour le vocabulaire, <em>Fraktur</em> et <em>Hämatom</em> te sont transparents ; au patient on dit <em>der Knochenbruch</em> (ou simplement <em>Ist das Bein gebrochen?</em>) et <em>der Bluterguss</em>, notre « bleu »."
      },
      {
        trap: "« Tomber » a trois traductions. <em>stürzen</em> est le mot du service et de la documentation (<em>der Sturz</em>) ; <em>hinfallen</em> est celui de tous les jours (<em>Ich bin hingefallen</em>) ; <em>fallen</em> seul se dit d'un objet (<em>Das Glas ist gefallen</em>) comme d'une personne (<em>Sie ist gefallen</em>), mais dans le dossier on écrit <em>gestürzt</em>. Attention à <em>gefallen</em> : c'est aussi le participe de <em>gefallen</em>, « plaire », avec <em>haben</em> (<em>Es hat mir gefallen</em>). <em>Sie ist gefallen</em> et <em>Es hat ihr gefallen</em> sont deux phrases différentes. Enfin, <em>die Platzwunde</em> n'a rien à voir avec une « place » : c'est la plaie qui s'ouvre sous un choc, de <em>platzen</em>, éclater ; en français, une plaie contuse."
      },
      {
        tip: "Dans la fiche, écris séparément ce que tu as vu et ce que le patient t'a dit : <em>Patientin um 3:00 Uhr auf dem Boden im Bad aufgefunden</em> est une observation ; <em>laut Patientin ausgerutscht</em> est son récit. Celui qui lit après toi doit pouvoir distinguer les deux."
      }
    ],
    grammar: {
      title: "Raconter une chute",
      note: "Dans le récit oral, surtout le <b>Perfekt</b> ; avec <b>sein</b>, <b>haben</b> et les modaux, en général le <b>Präteritum</b>. Les verbes en <b>-ieren</b> ne prennent pas <b>ge-</b>.",
      table: {
        head: ["verbe", "exemple", "remarque"],
        rows: [
          ["stürzen", "Sie ist im Bad gestürzt.", "Perfekt avec sein"],
          ["finden", "Ich habe sie auf dem Boden gefunden.", "Perfekt avec haben, participe fort"],
          ["ausrutschen", "Ich bin ausgerutscht.", "séparable : ge- après aus"],
          ["informieren", "Wir haben die Ärztin informiert.", "-ieren : pas de ge-"],
          ["sein, haben", "Sie war wach und hatte Schmerzen.", "Präteritum même à l'oral"],
          ["wollen", "Ich wollte allein zur Toilette gehen.", "modal au Präteritum"]
        ]
      },
      examples: [
        { tr: "Mme Keller est tombée cette nuit dans la salle de bains.", note: "stürzen : Perfekt avec sein" },
        { tr: "Je l'ai trouvée par terre à trois heures.", note: "finden : Perfekt avec haben" },
        { tr: "Elle était réveillée et avait mal à la hanche gauche.", note: "sein et haben au Präteritum" },
        { tr: "Je voulais aller seule aux toilettes.", note: "modal au Präteritum" },
        { tr: "J'ai glissé sur le sol mouillé.", note: "ausrutschen : séparable, avec sein" },
        { tr: "Nous avons tout de suite informé la médecin.", note: "informieren : pas de ge-" }
      ]
    },
    vocab: [
      "la fiche de déclaration de chute",
      "tomber (mot du service)",
      "glisser",
      "tomber (mot de tous les jours)",
      "la fracture (terme technique)",
      "la fracture, l'os cassé (mot pour le patient)",
      "l'hématome (terme technique)",
      "le bleu (mot pour le patient)",
      "la hanche",
      "la plaie contuse",
      "le risque de chute",
      "transmettre, signaler"
    ],
    dialogue: [
      "Madame Keller ! Qu'est-ce qui s'est passé ? Restez allongée, s'il vous plaît, je vais chercher de l'aide.",
      "Je voulais aller seule aux toilettes. Et puis j'ai glissé.",
      "Vous vous êtes cogné la tête ?",
      "Non, mais j'ai mal à la hanche.",
      "Docteur Weber, Mme Keller est tombée à trois heures dans la salle de bains. Je l'ai trouvée par terre.",
      "Elle était réveillée et elle répondait ?",
      "Oui, elle était réveillée et orientée. Elle a mal à la hanche gauche et un petit hématome au coude.",
      "Bien, j'arrive. Documentez la chute dans la fiche de chute, s'il vous plaît."
    ],
    culture: {
      title: "Regard allemand : prévenir et documenter les chutes",
      text: "<p>Pour les chutes aussi, il existe en Allemagne un <i>Expertenstandard</i> du DNQP, consacré à la prévention (<i>Sturzprophylaxe</i>) : il demande de repérer les personnes à risque, d'adapter l'environnement et d'analyser chaque chute survenue. C'est pourquoi beaucoup d'établissements utilisent un formulaire dédié, appelé <i>Sturzprotokoll</i> ou <i>Sturzereignisprotokoll</i> : heure, lieu, ce qu'on a trouvé, ce que le patient a dit, qui a été informé.</p><p>Le formulaire ne sert pas à chercher un coupable : il sert à comprendre pourquoi la personne est tombée et à éviter la chute suivante. Le modèle exact, c'est l'établissement qui le fixe.</p>"
    },
    exercises: [
      {
        tr: "Le Perfekt de fallen, à toutes les personnes.",
        why: "<i>Bin gefallen, bist gefallen, ist gefallen, sind gefallen, seid gefallen, sind gefallen</i> : verbe de mouvement, auxiliaire <i>sein</i>, comme « je suis tombé ». Pour une personne, dans le service, on dit plus souvent <i>gestürzt</i> ou <i>hingefallen</i>."
      },
      {
        q: "Au patient, avec des mots courants : « Vous avez un bleu au bras. »",
        opts: [
          "Sie haben ein Hämatom am Arm.",
          "Sie haben einen Bluterguss am Arm.",
          "Sie haben einen Hämatom am Arm."
        ],
        why: "Avec le patient, on emploie la Laiensprache : <b>einen Bluterguss</b>, masculin. La première phrase est correcte, mais c'est du langage de documentation ; dans la troisième, l'article est faux, parce que <i>Hämatom</i> est neutre."
      },
      {
        q: "Complète : « Ich bin auf dem nassen Boden ___. »",
        hint: "participe de ausrutschen",
        why: "<b>ausgerutscht</b> : verbe séparable, le <i>ge-</i> se place après la particule <i>aus</i>. Auxiliaire <i>sein</i>, comme <i>stürzen</i>, alors que le français dit « j'ai glissé »."
      },
      {
        q: "Associe chaque mot à son sens.",
        pairs: ["la fracture", "l'hématome", "la plaie contuse", "le risque de chute"]
      },
      {
        q: "Complète la phrase au Präteritum.",
        tr: "Elle était réveillée et avait mal à la hanche.",
        why: "<i>Sie war wach und hatte Schmerzen in der Hüfte</i> : avec <i>sein</i> et <i>haben</i>, le Präteritum est la forme normale, même à l'oral."
      },
      {
        q: "Remets les mots dans l'ordre.",
        tr: "Je l'ai trouvée par terre à trois heures.",
        why: "<i>Ich habe sie um drei Uhr auf dem Boden gefunden.</i> <i>Habe</i> en deuxième position, le participe <i>gefunden</i> à la fin ; d'abord le temps (<i>um drei Uhr</i>), puis le lieu."
      },
      {
        q: "Quelles phrases au Perfekt sont correctes ?",
        opts: [
          "Sie ist im Bad gestürzt.",
          "Sie hat im Bad gestürzt.",
          "Ich habe die Ärztin informiert.",
          "Ich habe die Ärztin geinformiert.",
          "Er ist auf dem Boden ausgerutscht."
        ],
        why: "<i>stürzen</i> et <i>ausrutschen</i> demandent ici <i>sein</i>. <i>informieren</i> se termine en <i>-ieren</i> et ne prend pas <i>ge-</i> : <i>informiert</i>."
      },
      {
        q: "Choisis le bon article défini pour chaque nom.",
        items: ["fiche de déclaration de chute", "fracture", "os cassé", "hématome", "bleu", "hanche"]
      },
      {
        q: "Traduis, à la patiente tombée : « Vous vous êtes cogné la tête ? »",
        why: "<i>Haben Sie sich den Kopf angeschlagen?</i> Le pronom réfléchi <i>sich</i> est au datif, la tête est le complément d'objet. <i>gestoßen</i> convient aussi."
      },
      {
        tr: "Mme Keller est tombée à trois heures dans la salle de bains. Elle était réveillée et avait mal à la hanche gauche.",
        why: "Dans <i>gestürzt</i>, le <b>ü</b> est bref et le groupe <b>rzt</b> se prononce en entier ; dans <i>Hüfte</i>, le <b>ü</b> est bref ; dans <i>linken</i>, le <b>n</b> devant <b>k</b> est [ŋ], comme dans « camping »."
      },
      {
        tr: "Vous vous êtes cogné la tête ?",
        why: "Dans <i>Kopf</i>, on entend à la fois le <b>p</b> et le <b>f</b> ; dans <i>angeschlagen</i>, le <b>sch</b> est [ʃ] et le <b>a</b> de <i>schla</i> est long."
      }
    ]
  },
  "lesson:pfl-u04-test": {
    theme: "Évaluation",
    title: "Test : Douleur et urgence",
    objectives: [
      "vérifier les terminaisons de l'adjectif, les subordonnées de temps, le Perfekt dans le récit et les paires Fachsprache / Laiensprache de la douleur et de l'urgence"
    ],
    theory: [
      {
        p: "Onze questions sur toute l'unité. On réussit avec 70 %. Les contenus cliniques sont des exemples pédagogiques : dans le service, ce sont toujours le protocole de l'établissement et les consignes du médecin qui s'appliquent."
      }
    ],
    exercises: [
      {
        q: "Complète : « Es ist ein ___ Schmerz. »",
        opts: ["stechende", "stechender", "stechenden"],
        why: "Nominatif masculin après <i>ein</i> : <b>stechender</b>. L'article <i>ein</i> ne montre pas le genre, c'est donc l'adjectif qui le montre avec <b>-er</b>."
      },
      {
        q: "Complète : « Ich bleibe bei Ihnen, ___ die Ärztin kommt. »",
        hint: "« jusqu'à ce que »",
        why: "<b>bis</b> : « jusqu'à ce que ». Le verbe <i>kommt</i> va à la fin de la subordonnée."
      },
      {
        q: "Complète : « Frau Keller ist heute Nacht im Bad ___. »",
        hint: "participe de stürzen",
        why: "<b>gestürzt</b>, avec l'auxiliaire <i>ist</i> : <i>stürzen</i> est un verbe de mouvement, comme « tomber » avec être."
      },
      {
        tr: "Le Perfekt de anrufen, à toutes les personnes.",
        why: "<i>Habe angerufen, hast angerufen, hat angerufen, haben angerufen, habt angerufen, haben angerufen</i> : séparable, le <i>ge-</i> se place entre <i>an</i> et <i>rufen</i> ; auxiliaire <i>haben</i>."
      },
      {
        q: "Associe chaque terme technique au mot qu'emploie le patient.",
        pairs: ["die Ohnmacht", "der Schlaganfall", "der Knochenbruch", "das Schmerzmittel"]
      },
      {
        q: "Quelles phrases sont correctes ?",
        opts: [
          "Als ich ins Zimmer kam, lag sie auf dem Boden.",
          "Als ich ins Zimmer kam, sie lag auf dem Boden.",
          "Haben Sie starke Schmerzen?",
          "Ich habe die Ärztin sofort informiert.",
          "Wenn ich gestern um acht Uhr ins Zimmer kam, war sie wach."
        ],
        why: "Après la subordonnée, la principale commence par le verbe : <i>lag sie</i>. Pour un fait unique dans le passé, on emploie <i>als</i>, pas <i>wenn</i>. <i>informiert</i> ne prend pas <i>ge-</i>."
      },
      {
        q: "Complète la phrase.",
        tr: "Quand je suis entrée dans la chambre, Mme Keller était par terre.",
        why: "<i>Als ich ins Zimmer kam, lag Frau Keller auf dem Boden.</i> <i>Als</i> pour un fait unique dans le passé ; <i>lag</i>, Präteritum de <i>liegen</i>, ouvre la principale."
      },
      {
        q: "Remets les mots dans l'ordre.",
        tr: "Je reste avec lui jusqu'à ce que l'équipe arrive.",
        why: "<i>Ich bleibe bei ihm, bis das Team kommt.</i> Après <i>bis</i>, le verbe <i>kommt</i> va à la fin."
      },
      {
        q: "Choisis le bon article défini pour chaque nom.",
        items: ["urgence", "échelle de la douleur", "fiche de déclaration de chute", "AVC", "centre de régulation", "hématome"]
      },
      {
        tr: "Quand je suis entrée dans la chambre, Mme Keller ne répondait pas. J'ai tout de suite déclenché l'alarme et je suis restée avec elle jusqu'à ce que l'équipe arrive.",
        why: "Dans <i>ausgelöst</i>, le <b>ö</b> est long ; dans <i>geblieben</i>, le <b>ie</b> est un <b>i</b> long ; dans <i>Team</i>, le <b>ea</b> se lit [iː], comme en anglais."
      },
      {
        tr: "Je documente la chute dans la fiche de déclaration de chute.",
        why: "Dans <i>dokumentiere</i>, l'accent tombe sur <b>tie</b>, avec un <b>ie</b> long ; dans <i>Sturzprotokoll</i>, l'accent principal est sur <b>Sturz</b>, et dans <i>Protokoll</i> il tombe sur la dernière syllabe."
      }
    ]
  }
});
