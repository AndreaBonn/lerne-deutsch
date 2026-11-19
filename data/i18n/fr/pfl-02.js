/* ============================================================
   Textes dans la langue de l'élève (fr) pour data/core/pfl-02.js, unité pfl-u02.
   Les clés renvoient aux id de la couche neutre ; les tableaux se
   joignent par index, leur longueur doit donc correspondre à core.
   Vérifié par scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("fr", {
  "unit:pfl-u02": {
    title: "Signes vitaux et valeurs mesurées",
    grammarNote: "l'impératif avec Sie · les verbes à particule séparable pendant la mesure · le comparatif pour comparer les valeurs · les préfixes grecs et les mots composés du patient · le passif avec werden pour transmettre et documenter"
  },
  "lesson:pfl-u02-l1": {
    theme: "La mesure",
    title: "Découvrez votre bras, s'il vous plaît",
    objectives: [
      "guider le patient pendant la prise de tension avec l'impératif de politesse",
      "employer les verbes séparables de la mesure : anlegen, ablesen, einatmen, freimachen",
      "annoncer au patient ce que tu vas faire avant de le toucher",
      "nommer les instruments : brassard, tensiomètre, thermomètre"
    ],
    theory: [
      {
        h: "L'impératif de politesse",
        p: "Pour donner une consigne au patient, on utilise l'<strong>impératif avec Sie</strong> : le verbe à l'infinitif en tête, <em>Sie</em> juste après. <em>Machen Sie bitte den Oberarm frei. Legen Sie den Arm auf den Tisch.</em> La forme est identique à celle de la question fermée ; ce qui les distingue, c'est l'intonation descendante et le mot <em>bitte</em>, qui ne manque presque jamais dans le service. <em>Bitte</em> peut se placer après <em>Sie</em> ou en tête : <em>Bitte sprechen Sie während der Messung nicht.</em> Avec un verbe pronominal, il y a deux pronoms : <em>Setzen Sie sich bitte hin.</em>"
      },
      {
        h: "Les verbes séparables de la mesure",
        p: "Presque tout ce qu'on dit pendant une mesure passe par un verbe séparable : <em>anlegen</em> (poser le brassard), <em>ablesen</em> (lire la valeur), <em>einatmen</em> et <em>ausatmen</em> (inspirer, expirer), <em>freimachen</em> (découvrir), <em>sich hinsetzen</em>, <em>sich hinlegen</em>, <em>aufstehen</em>. À l'impératif et au présent, la particule part <strong>à la fin</strong> : <em>Atmen Sie tief ein. Ich lege Ihnen die Manschette an. Ich lese den Wert ab.</em> Après un modal, le verbe reste entier, à la fin : <em>Muss ich aufstehen?</em>"
      },
      {
        contrast: "En français, l'impératif de politesse se passe de pronom sujet : « asseyez-vous », « allongez-vous », « respirez ». La terminaison <em>-ez</em> suffit à dire à qui l'on parle. En allemand, la terminaison ne suffit pas : <em>Sie</em> se dit toujours, après le verbe, et le verbe pronominal ajoute <em>sich</em> : <em>Setzen Sie sich hin</em>, là où le français n'a qu'un « vous » collé au verbe. Les fautes typiques d'un francophone sont <em>Setzen sich hin</em> (il manque <em>Sie</em>) et <em>Sie setzen sich hin</em>, qui est une affirmation (« vous vous asseyez ») et non une invitation. Le français n'a rien de comparable à la particule séparable : « posez le brassard » devient <em>legen Sie die Manschette an</em>, et le morceau <em>an</em> n'arrive qu'à la fin. Si tu l'oublies, la phrase reste en suspens : <em>Ich lege Ihnen die Manschette</em> veut seulement dire « je vous pose le brassard là »."
      },
      {
        trap: "« Prendre la tension » ne se traduit pas avec <em>Spannung</em> ni avec <em>nehmen</em> : on dit <em>den Blutdruck messen</em>, et <em>die Spannung</em> reste la tension électrique ou nerveuse. <em>Der Puls</em> est le pouls ; le poignet, où on le prend, est <em>das Handgelenk</em> : <em>Ich messe den Puls am Handgelenk.</em> <em>Die Manschette</em> ressemble à « manchette » et en a d'ailleurs aussi le sens de poignet de chemise, mais dans le service c'est le <strong>brassard</strong> du tensiomètre. <em>Den Arm freimachen</em> ne veut pas dire « libérer le bras », mais le découvrir, remonter la manche. Et <em>die Kurve</em>, dans le service, n'est pas une courbe quelconque : c'est la feuille de surveillance du patient, la « pancarte »."
      },
      {
        tip: "Avant de toucher le patient, dis ce que tu fais et ce qu'il va sentir : <em>Ich lege Ihnen jetzt die Manschette an. Sie drückt kurz ein bisschen.</em> Un patient prévenu se crispe moins, et la mesure est plus fiable."
      }
    ],
    grammar: {
      title: "Impératif avec Sie et particules séparables",
      note: "Impératif de politesse : <b>verbe + Sie</b>, avec <b>bitte</b>. La particule séparable va <b>à la fin</b>. Avec un verbe pronominal : <b>Setzen Sie sich</b>.",
      table: {
        head: ["infinitif", "phrase", "remarque"],
        rows: [
          ["freimachen", "Machen Sie bitte den Oberarm frei.", "frei à la fin"],
          ["sich hinsetzen", "Setzen Sie sich bitte hin.", "pronominal : Sie et sich"],
          ["einatmen", "Atmen Sie tief ein.", "ein à la fin"],
          ["anlegen", "Ich lege Ihnen die Manschette an.", "présent : an à la fin"],
          ["sprechen", "Bitte sprechen Sie nicht.", "verbe non séparable, nicht à la fin"]
        ]
      },
      examples: [
        { tr: "Découvrez le bras, s'il vous plaît.", note: "freimachen : frei va à la fin" },
        { tr: "Asseyez-vous, s'il vous plaît, et posez le bras sur la table.", note: "deux impératifs, le premier pronominal" },
        { tr: "Je vous pose maintenant le brassard.", note: "anlegen au présent : an à la fin" },
        { tr: "S'il vous plaît, ne parlez pas pendant la mesure.", note: "bitte en tête, puis le verbe" },
        { tr: "Inspirez et expirez calmement.", note: "einatmen et ausatmen ont atmen en commun : on dit le verbe une fois, puis ein und aus" },
        { tr: "Je lis la valeur tout de suite.", note: "ablesen : ab à la fin" }
      ]
    },
    vocab: [
      "la mesure",
      "mesurer",
      "la tension artérielle, la pression artérielle",
      "le brassard (du tensiomètre)",
      "le tensiomètre",
      "le bras (la partie au-dessus du coude)",
      "la manche",
      "le thermomètre médical",
      "poser, mettre (le brassard)",
      "lire (une valeur sur un appareil)",
      "inspirer",
      "s'asseoir"
    ],
    dialogue: [
      "Bonjour, madame Keller. Je vais maintenant prendre votre tension et votre pouls.",
      "Bonjour. Je dois me lever ?",
      "Non, restez assise, s'il vous plaît. Découvrez le bras gauche, s'il vous plaît.",
      "Voilà, ça va comme ça ?",
      "Oui, merci. Je vous pose maintenant le brassard. Il va serrer un peu, juste un moment.",
      "Pas de problème.",
      "S'il vous plaît, ne parlez pas pendant la mesure et gardez le bras immobile.",
      "Alors, c'est combien ?",
      "Je lis la valeur tout de suite et je la note sur la feuille de surveillance."
    ],
    culture: {
      title: "Regard allemand : la Kurve",
      text: "<p>Dans les services allemands, les paramètres vitaux se notent dans la <i>Kurve</i>, appelée aussi <i>Fieberkurve</i> : la feuille où l'on suit, jour après jour, la tension, le pouls, la température et les autres valeurs du patient, l'équivalent de la pancarte française. Dans beaucoup d'hôpitaux elle est aujourd'hui informatisée, mais le nom est resté, et pendant les transmissions on entend souvent <i>Steht in der Kurve</i>, « c'est sur la feuille ».</p><p>Combien de fois par jour on mesure, et avec quel appareil, c'est le médecin ou le protocole du service qui le fixe. Les valeurs de cette unité sont des chiffres ronds à but pédagogique, pas des valeurs de référence : dans le service, ce sont les seuils de l'établissement qui font foi.</p>"
    },
    exercises: [
      {
        q: "Tu veux demander à la patiente de découvrir son bras. Quelle phrase est correcte ?",
        opts: [
          "Mach bitte den Oberarm frei.",
          "Machen Sie bitte den Oberarm frei.",
          "Freimachen Sie bitte den Oberarm."
        ],
        why: "Avec le patient, l'impératif est <b>verbe + Sie</b> : <i>Machen Sie</i>. La particule <i>frei</i> se détache et va à la fin. La première phrase tutoie, ce qu'on ne fait pas avec un patient adulte ; la troisième garde <i>freimachen</i> entier, comme le français « découvrez »."
      },
      {
        q: "Complète : « Ich lege Ihnen jetzt die Manschette ___. »",
        hint: "particule séparable de anlegen",
        why: "<b>an</b> : <i>anlegen</i> est séparable, donc au présent la particule va à la fin de la phrase."
      },
      {
        tr: "Le présent de ablesen, à toutes les personnes.",
        why: "<i>Lese ab, liest ab, liest ab, lesen ab, lest ab, lesen ab</i> : aux deuxième et troisième personnes du singulier, le <b>e</b> devient <b>ie</b>, et la particule <i>ab</i> va toujours à la fin."
      },
      {
        q: "Choisis le bon article défini pour chaque nom.",
        items: ["mesure", "brassard", "bras (au-dessus du coude)", "manche", "tensiomètre", "tension artérielle"]
      },
      {
        q: "Associe chaque verbe à son sens.",
        pairs: ["inspirer", "expirer", "s'asseoir", "s'allonger"]
      },
      {
        q: "Remets les mots dans l'ordre.",
        tr: "Découvrez le bras gauche, s'il vous plaît.",
        why: "<i>Machen Sie bitte den linken Oberarm frei.</i> L'impératif ouvre la phrase, puis <i>Sie</i> ; la particule <i>frei</i> la ferme. <i>Bitte</i> peut aussi se placer juste avant <i>frei</i>."
      },
      {
        q: "Complète la phrase.",
        tr: "Asseyez-vous, s'il vous plaît, et posez le bras sur la table.",
        why: "<i>Setzen Sie sich bitte hin</i> : impératif pronominal avec <i>Sie</i> et <i>sich</i>, et la particule <i>hin</i> à la fin."
      },
      {
        q: "Traduis : « Je vous pose maintenant le brassard. »",
        why: "<i>Jetzt lege ich Ihnen die Manschette an</i> ou <i>Ich lege Ihnen jetzt die Manschette an</i>. <i>Ihnen</i> est au datif (à vous), <i>an</i> va à la fin, et <i>jetzt</i> ne peut pas être omis."
      },
      {
        q: "Tu prends la tension d'une patiente.",
        setting: "Tu entres dans la chambre de madame Keller avec le tensiomètre.",
        lines: [
          { tr: "Bonjour. Qu'est-ce que vous venez me faire aujourd'hui ?" },
          { tr: "Réponds que tu vas maintenant prendre sa tension.", answerTr: "Je vais maintenant prendre votre tension." },
          { tr: "Je dois m'allonger ?" },
          { tr: "Réponds que non : elle doit s'asseoir.", answerTr: "Non, asseyez-vous, s'il vous plaît." },
          { tr: "Je dois enlever mon pull ?" },
          { tr: "Réponds que non : il suffit de découvrir le bras.", answerTr: "Non, découvrez seulement le bras." }
        ]
      },
      {
        tr: "Je vais maintenant prendre votre tension. Découvrez le bras gauche, s'il vous plaît, et gardez le bras immobile.",
        why: "Dans <i>Oberarm</i>, l'accent tombe sur la première syllabe, <b>O</b>, et non sur la dernière comme en français ; dans <i>frei</i>, <b>ei</b> se prononce [aɪ], comme « aïe » ; dans <i>ruhig</i>, le <b>h</b> ne se prononce pas, le <b>u</b> sonne « ou », et le <b>g</b> final se prononce [ç], un souffle doux, la langue placée comme pour « i »."
      },
      {
        tr: "S'il vous plaît, ne parlez pas pendant la mesure.",
        why: "Dans <i>sprechen</i>, le <b>sp</b> initial se prononce [ʃp], « chp » ; dans <i>während</i>, le <b>ä</b> est long, le <b>h</b> ne se prononce pas et le <b>d</b> final sonne [t] ; dans <i>Messung</i>, le <b>ss</b> est sourd et le <b>u</b> sonne « ou »."
      }
    ]
  },
  "lesson:pfl-u02-l2": {
    theme: "Les chiffres du service",
    title: "Valeurs et unités",
    objectives: [
      "dire à voix haute tension, pouls, température et saturation avec leur unité",
      "comparer deux valeurs avec le comparatif et als",
      "dire qu'une valeur est égale à une autre avec genauso ... wie",
      "transmettre une valeur à un collègue avec la comparaison à la veille"
    ],
    theory: [
      {
        h: "Comment dire les valeurs",
        p: "La tension s'écrit <em>120/80 mmHg</em> et se dit <em>hundertzwanzig zu achtzig</em> : la barre se lit <strong>zu</strong>. L'unité, <em>Millimeter Quecksilbersäule</em>, ne se dit presque jamais à voix haute. Le pouls : <em>80 pro Minute</em> ou <em>80 Schläge pro Minute</em>. La température utilise la virgule comme en français : <em>37,5 Grad</em> se lit <em>siebenunddreißig Komma fünf</em>. La saturation se dit en pourcentage : <em>95 Prozent</em>. Pour situer une valeur, on emploie souvent <em>liegen bei</em> : <em>Der Blutdruck liegt bei 120 zu 80.</em> Les chiffres de cette leçon sont ronds et pédagogiques, pas des valeurs de référence."
      },
      {
        h: "Le comparatif pour comparer",
        p: "Le comparatif se forme avec <strong>-er</strong>, et le second terme avec <strong>als</strong> : <em>schneller als gestern</em>, <em>niedriger als heute Morgen</em>. Beaucoup d'adjectifs courts prennent l'Umlaut : <em>hoch → höher</em> (et le <b>c</b> tombe), <em>lang → länger</em>, <em>warm → wärmer</em> ; <em>langsam</em> non : <em>langsamer</em>. Le superlatif avec le verbe : <em>am höchsten</em>, <em>am niedrigsten</em>. L'égalité : <em>genauso hoch wie gestern</em>."
      },
      {
        contrast: "En français, le comparatif se fait presque toujours avec « plus » : « plus haute », « plus rapide ». En allemand, c'est un seul mot, et <em>mehr hoch</em> ou <em>mehr schnell</em> sont des fautes. Le français utilise « que » deux fois, l'allemand deux mots différents : « plus haute qu'hier » = <em>höher <strong>als</strong> gestern</em>, mais « aussi haute qu'hier » = <em>genauso hoch <strong>wie</strong> gestern</em>. Et surtout, l'unité de la tension change. En France on dit souvent « 12/8 » ou « j'ai 13 de tension », en centimètres de mercure. En Allemagne, on dit toujours les millimètres : <em>120 zu 80</em>. Un « 12 zu 8 » transmis à un collègue allemand sonne comme une valeur dramatiquement basse. Pour « la systolique et la diastolique », ou « la maxima et la minima », on dit à l'oral <em>der obere und der untere Wert</em>."
      },
      {
        trap: "<em>Schneller wie gestern</em> s'entend à l'oral, mais dans la langue standard et dans la documentation la comparaison veut <em>als</em>. <em>Am höchsten</em> a l'Umlaut comme <em>höher</em>, alors que l'adjectif simple n'en a pas : <em>hoch</em>. <em>Erhöht</em> veut dire « augmenté, élevé » (<em>leicht erhöhte Temperatur</em>, une température légèrement élevée), ce n'est pas un verbe à conjuguer. Pour une tension basse, on dit en Allemagne <em>niedriger Blutdruck</em> ; <em>tiefer Blutdruck</em> s'entend surtout en Suisse."
      },
      {
        tip: "Quand tu transmets une valeur à un collègue, ajoute toujours la comparaison : <em>130 zu 80, höher als gestern</em>. Un chiffre seul dit peu de chose ; la comparaison dit si quelque chose est en train de changer."
      }
    ],
    grammar: {
      title: "Comparatif et superlatif",
      note: "Comparatif : <b>-er + als</b>. Les adjectifs courts prennent souvent l'<b>Umlaut</b>. Superlatif avec le verbe : <b>am ...-sten</b>. Égalité : <b>genauso ... wie</b>.",
      table: {
        head: ["adjectif", "comparatif", "superlatif"],
        rows: [
          ["hoch", "höher", "am höchsten"],
          ["niedrig", "niedriger", "am niedrigsten"],
          ["schnell", "schneller", "am schnellsten"],
          ["langsam", "langsamer", "am langsamsten"],
          ["gut", "besser", "am besten"]
        ]
      },
      examples: [
        { tr: "La tension est à 120/80.", note: "liegen bei : la façon habituelle de donner une valeur" },
        { tr: "Aujourd'hui, le pouls est plus rapide qu'hier.", note: "schneller als : comparatif + als" },
        { tr: "Le soir, la température est plus élevée que le matin.", note: "hoch → höher, sans le c" },
        { tr: "La deuxième valeur est plus basse que la première.", note: "niedriger als der erste" },
        { tr: "Ce matin, la tension était à son plus haut.", note: "superlatif avec le verbe : am höchsten" },
        { tr: "La température est aussi élevée qu'hier.", note: "égalité : genauso ... wie" }
      ]
    },
    vocab: [
      "la valeur",
      "la valeur mesurée",
      "l'unité de mesure",
      "le pouls, la fréquence cardiaque",
      "la température",
      "le degré (37 Grad : 37 degrés)",
      "la feuille de surveillance, la pancarte",
      "haut, élevé (höher : plus élevé)",
      "bas (niedriger : plus bas)",
      "rapide",
      "lent",
      "augmenté, élevé"
    ],
    dialogue: [
      "J'ai pris la tension de madame Keller : 130/80.",
      "Et hier ?",
      "Hier, elle était plus basse, 120/80. Aujourd'hui, le pouls est un peu plus rapide qu'hier, 80 par minute.",
      "Et la température ?",
      "37 degrés, comme hier.",
      "Bien. Note toutes les valeurs sur la feuille de surveillance, s'il te plaît.",
      "Je le fais tout de suite."
    ],
    culture: {
      title: "Regard allemand : RR, un nom italien",
      text: "<p>Dans la documentation allemande, la tension artérielle s'écrit souvent <i>RR</i> : <i>RR 120/80</i>. Ces deux lettres sont les initiales de <i>Riva-Rocci</i>, le médecin turinois Scipione Riva-Rocci, qui présenta à la fin du XIXe siècle le tensiomètre à brassard. En France on note plutôt <i>TA</i> ou <i>PA</i> ; en Allemagne, <i>RR</i> est devenu presque un synonyme de <i>Blutdruck</i>, et pendant les transmissions on entend <i>Wie war der RR?</i></p><p>Un conseil pratique : les abréviations changent d'un service à l'autre. Quand tu en rencontres une nouvelle dans la <i>Kurve</i>, demande ce qu'elle veut dire au lieu de deviner.</p>"
    },
    exercises: [
      {
        q: "Tu veux dire « Aujourd'hui, le pouls est plus rapide qu'hier ». Quelle phrase est correcte ?",
        opts: [
          "Der Puls ist heute schnell als gestern.",
          "Der Puls ist heute schneller als gestern.",
          "Der Puls ist heute mehr schnell als gestern."
        ],
        why: "Le comparatif est un seul mot, <b>schneller</b>, et le second terme est introduit par <b>als</b>. <i>Mehr schnell</i> est le calque de « plus rapide »."
      },
      {
        tr: "Le présent de messen, à toutes les personnes.",
        why: "<i>Messe, misst, misst, messen, messt, messen</i> : aux deuxième et troisième personnes du singulier, le <b>e</b> devient <b>i</b>, et dans <i>du misst</i> la terminaison <i>-st</i> se fond avec le <b>ss</b> du radical : pas de « missst »."
      },
      {
        q: "Complète : « Am Abend ist die Temperatur ___ als am Morgen. »",
        hint: "comparatif de hoch",
        why: "<b>höher</b> : <i>hoch</i> prend l'Umlaut et perd le <b>c</b>."
      },
      {
        q: "Complète avec le comparatif et le superlatif.",
        tr: "La deuxième valeur est plus basse que la première, mais ce matin la tension était à son plus haut.",
        why: "<i>niedriger als der erste</i> : comparatif + <i>als</i>. <i>am höchsten</i> : superlatif avec le verbe <i>sein</i>."
      },
      {
        q: "Associe chaque comparatif à son sens.",
        pairs: ["plus élevé", "plus bas", "plus rapide", "plus lent"]
      },
      {
        q: "Choisis le bon article défini pour chaque nom.",
        items: ["valeur", "valeur mesurée", "unité de mesure", "pouls", "température", "feuille de surveillance"]
      },
      {
        q: "Remets les mots dans l'ordre.",
        tr: "Aujourd'hui, le pouls est plus rapide qu'hier.",
        why: "<i>Der Puls ist heute schneller als gestern.</i> Le verbe <i>ist</i> en deuxième position, la comparaison avec <i>als</i> à la fin."
      },
      {
        q: "Traduis : « Aujourd'hui, la température est plus élevée qu'hier. »",
        why: "<i>Heute ist die Temperatur höher als gestern</i> ou <i>Die Temperatur ist heute höher als gestern</i>. Si tu commences par <i>heute</i>, le verbe reste en deuxième position et le sujet le suit, alors que le français garde « la température » devant le verbe."
      },
      {
        q: "Un collègue te demande les valeurs de madame Keller.",
        setting: "Tu viens de mesurer la tension, le pouls et la température.",
        lines: [
          { tr: "Elle était à combien, la tension, ce matin ?" },
          { tr: "Réponds : 130/80, plus élevée qu'hier.", answerTr: "Elle était à 130/80, plus élevée qu'hier." },
          { tr: "Et le pouls ?" },
          { tr: "Réponds : un peu plus rapide qu'hier, 80 par minute.", answerTr: "Un peu plus rapide qu'hier, 80 par minute." },
          { tr: "Et la température ?" },
          { tr: "Réponds : aussi élevée qu'hier, 37 degrés.", answerTr: "Aussi élevée qu'hier, 37 degrés." }
        ]
      },
      {
        tr: "Hier, la tension était plus basse. Aujourd'hui, le pouls est un peu plus rapide, et la température est aussi élevée qu'hier.",
        why: "Dans <i>niedriger</i>, <b>ie</b> est un <b>i</b> long ; dans <i>schneller</i>, <b>sch</b> se prononce [ʃ], comme le « ch » français ; dans <i>genauso</i>, l'accent tombe sur <b>nau</b>, et <b>au</b> se prononce [aʊ], « aou »."
      },
      {
        tr: "Aujourd'hui, le pouls est plus rapide qu'hier.",
        why: "Dans <i>Puls</i>, le <b>u</b> est bref et sonne « ou », jamais comme le u français ; dans <i>heute</i>, <b>eu</b> se prononce [ɔʏ], proche de « oï » ; dans <i>gestern</i>, le <b>st</b> au milieu du mot se lit [st], pas [ʃt]."
      }
    ]
  },
  "lesson:pfl-u02-l3": {
    theme: "Deux registres",
    title: "Fièvre, pouls et glycémie",
    objectives: [
      "reconnaître les termes techniques des paramètres vitaux avec les préfixes grecs hyper-, hypo-, tachy-, brady-",
      "traduire chaque terme technique dans le mot qu'emploie le patient",
      "comprendre comment sont construits les mots composés du patient : Blutzucker, Unterzuckerung, Herzrasen",
      "transmettre au médecin une valeur plus basse ou plus élevée que la précédente"
    ],
    theory: [
      {
        h: "Les préfixes grecs des paramètres",
        p: "La Fachsprache des paramètres vitaux se construit avec quelques éléments grecs : <em>Hyper-</em> (au-dessus) et <em>Hypo-</em> (au-dessous), <em>Tachy-</em> (rapide) et <em>Brady-</em> (lent), plus la partie qui dit de quoi on parle : <em>-kardie</em> le cœur, <em>-tonie</em> la tension, <em>-glykämie</em> le sucre dans le sang. D'où <em>Tachykardie</em>, <em>Bradykardie</em>, <em>Hypotonie</em>, <em>Hypoglykämie</em>, <em>Hyperglykämie</em>. En allemand, ils s'écrivent avec <b>k</b> et <b>ä</b> : <em>Tachykardie</em>, pas « Tachycardie », <em>Hypoglykämie</em>, pas « Hypoglycémie »."
      },
      {
        h: "Les mots du patient",
        p: "La Laiensprache emploie des mots composés et des dérivés. <em>Blut + Zucker</em> = <em>der Blutzucker</em> ; <em>Sauerstoff + Sättigung</em> = <em>die Sauerstoffsättigung</em> ; <em>unter + Zucker + -ung</em> = <em>die Unterzuckerung</em>, féminin à cause de <em>-ung</em>. <em>Das Herzrasen</em> est un infinitif employé comme nom (<em>rasen</em>, foncer à toute allure), et c'est pourquoi il est neutre. Certains mots du patient ne sont pas des composés mais un adjectif et un nom : <em>der langsame Puls</em>, <em>der niedrige Blutdruck</em>, <em>der hohe Blutzucker</em>. Et avec les valeurs, le comparatif revient : <em>niedriger als heute Morgen</em>."
      },
      {
        contrast: "Pour un francophone, les termes techniques sont transparents : <em>Tachykardie</em> est la tachycardie, <em>Hypoglykämie</em> l'hypoglycémie. Ce qui manque, ce sont les mots du patient : <em>Herzrasen</em>, <em>Unterzuckerung</em>, <em>der niedrige Blutdruck</em>, bâtis sur des racines allemandes (<em>Herz</em>, <em>rasen</em>, <em>unter</em>, <em>Zucker</em>) que le français ne laisse pas deviner. L'habitude aussi est différente : un patient français dit volontiers lui-même « tachycardie » ou « je fais une hypo » ; le patient allemand dit <em>der Zucker</em> ou <em>der Blutzucker</em>, et pour l'hypoglycémie <em>Ich bin unterzuckert</em> ou <em>Ich habe Unterzucker</em>. <em>Hypoglykämie</em> reste pour lui un mot de médecin. Au « j'ai de la tension » français ne répond pas non plus une formule toute faite : le patient dit <em>Ich habe hohen Blutdruck</em>, et la maladie s'appelle <em>Bluthochdruck</em>."
      },
      {
        trap: "<em>Hypotonie</em>, dans le service, c'est la tension basse, l'<b>hypotension</b>, et non l'hypotonie musculaire du français : l'allemand dit <em>-tonie</em> là où le français dit « -tension », et il en va de même pour <em>Hypertonie</em>. Piège plus sournois encore pour un francophone : <em>Hyperthermie</em>. Dans les transmissions françaises, « hyperthermie » sert couramment à dire « fièvre » ; en allemand médical, <em>Hyperthermie</em> désigne une surchauffe du corps, par exemple après un coup de chaleur, et la fièvre s'appelle <em>Fieber</em> même dans la documentation (<em>febril</em>, « fébrile »). Enfin, <em>Herzrasen</em> n'est pas <em>Herzklopfen</em> : le premier est le cœur qui s'emballe, le second le battement qu'on sent fort, les palpitations."
      },
      {
        tip: "Si le patient dit <em>Ich habe Unterzucker</em> ou <em>Mir ist so zittrig</em>, mesure et transmets tout de suite : <em>Ich messe kurz Ihren Blutzucker</em>, puis au médecin la valeur avec la comparaison. Ce qu'il faut faire ensuite, c'est le médecin qui le décide, ou le protocole écrit du service."
      }
    ],
    grammar: {
      title: "Paramètres vitaux : Fachsprache et Laiensprache",
      note: "Avec les médecins et dans la documentation, la colonne <b>Fachsprache</b> ; avec les patients et les proches, la colonne <b>Laiensprache</b>. Les mots composés prennent l'article du <b>dernier élément</b> ; un infinitif employé comme nom est <b>neutre</b>.",
      table: {
        head: ["Fachsprache", "Laiensprache", "français"],
        rows: [
          ["die Tachykardie", "das Herzrasen", "tachycardie"],
          ["die Bradykardie", "der langsame Puls", "bradycardie"],
          ["die Hypotonie", "der niedrige Blutdruck", "hypotension"],
          ["die Hyperthermie; das Fieber", "das Fieber", "hyperthermie (surchauffe) ; fièvre"],
          ["die Hypoglykämie", "die Unterzuckerung", "hypoglycémie"],
          ["die Hyperglykämie", "der hohe Blutzucker", "hyperglycémie"],
          ["die Sauerstoffsättigung", "der Sauerstoffwert", "saturation en oxygène"]
        ]
      },
      examples: [
        { tr: "La patiente a une tachycardie.", note: "Fachsprache : au médecin ou dans la documentation" },
        { tr: "Vous arrive-t-il d'avoir le cœur qui s'emballe ?", note: "la même chose dite au patient" },
        { tr: "Le patient a fait une hypoglycémie cette nuit.", note: "formule de transmission" },
        { tr: "En cas d'hypoglycémie, le sucre dans le sang est trop bas.", note: "unter + Zucker + -ung : féminin" },
        { tr: "La saturation en oxygène est plus basse que ce matin.", note: "comparatif pour transmettre un changement" },
        { tr: "À partir de 38 degrés, on parle en général de fièvre.", note: "seuil pédagogique : c'est le protocole de l'établissement qui décide" }
      ]
    },
    vocab: [
      "les signes vitaux, les paramètres vitaux",
      "la fièvre",
      "l'hyperthermie (terme technique, ce n'est pas la fièvre)",
      "la tachycardie (terme technique)",
      "le cœur qui s'emballe (mot du patient)",
      "la bradycardie (terme technique)",
      "l'hypotension (terme technique)",
      "la glycémie, le sucre dans le sang",
      "l'hypoglycémie (terme technique)",
      "l'hypoglycémie, l'« hypo » (mot du patient)",
      "l'hyperglycémie (terme technique)",
      "la saturation en oxygène"
    ],
    dialogue: [
      "Monsieur Lang, je vais rapidement mesurer votre glycémie. C'est une petite piqûre au doigt.",
      "Je tremble un peu, et je transpire.",
      "La valeur est plus basse que ce matin. Je préviens tout de suite le médecin.",
      "Docteur Weber, monsieur Lang tremble et transpire. Sa glycémie est à 60, je suspecte une hypoglycémie.",
      "Merci. J'arrive tout de suite.",
      "Madame, c'est quoi, une « Hypoglykämie » ?",
      "C'est quand le sucre est trop bas. Votre glycémie est trop basse. Le médecin arrive tout de suite."
    ],
    culture: {
      title: "Regard allemand : mg/dl ou mmol/l",
      text: "<p>En Allemagne, la glycémie se mesure dans deux unités : <i>mg/dl</i> (milligrammes par décilitre) et <i>mmol/l</i> (millimoles par litre). Laquelle on utilise dépend de l'établissement et du lecteur de glycémie ; 1 mmol/l correspond à environ 18 mg/dl. Un 60 et un 3,3 peuvent donc désigner la même valeur. Et toi, tu as peut-être l'habitude des <i>g/l</i> français : 60 mg/dl, c'est 0,60 g/l. C'est pour cela qu'aux transmissions et au téléphone, l'unité se dit toujours.</p><p>Le 60 du dialogue est en mg/dl et c'est un chiffre rond à but pédagogique. Ce qui compte comme trop bas ou trop haut, et ce qu'on fait ensuite, c'est le médecin et le protocole écrit du service qui le fixent ; l'infirmière mesure, transmet et documente.</p>"
    },
    exercises: [
      {
        q: "Associe chaque terme technique au mot qu'emploie le patient.",
        pairs: ["das Herzrasen", "der langsame Puls", "der niedrige Blutdruck", "die Unterzuckerung", "der hohe Blutzucker"]
      },
      {
        q: "Tu parles avec le patient et tu veux savoir s'il a de la tachycardie. Quelle phrase convient ?",
        opts: [
          "Haben Sie eine Tachykardie?",
          "Haben Sie Herzrasen?",
          "Besteht bei Ihnen eine Tachykardie?"
        ],
        why: "Avec le patient, on emploie la Laiensprache : <b>Herzrasen</b>. Les deux autres phrases sont correctes, mais ce sont des phrases de médecin ou de documentation."
      },
      {
        q: "Quels mots conviennent au patient ?",
        opts: ["die Unterzuckerung", "die Hypoglykämie", "das Herzrasen", "die Tachykardie", "der niedrige Blutdruck", "die Hypotonie"],
        why: "<i>Unterzuckerung</i>, <i>Herzrasen</i> et <i>niedriger Blutdruck</i> sont des mots allemands courants. <i>Hypoglykämie</i>, <i>Tachykardie</i> et <i>Hypotonie</i> sont des termes techniques, même s'ils te paraissent les plus familiers."
      },
      {
        q: "Le médecin a écrit « Hypoglykämie ». Complète pour le patient : « Sie hatten eine ___. »",
        hint: "unter + Zucker + -ung",
        why: "<b>Unterzuckerung</b>, féminin à cause du suffixe <i>-ung</i> : d'où <i>eine</i>."
      },
      {
        q: "Choisis l'article : dans les mots composés, c'est le dernier élément qui décide.",
        items: ["fièvre", "cœur qui s'emballe (Rasen)", "glycémie (Zucker)", "hypoglycémie (-ung)", "saturation en oxygène (Sättigung)", "tachycardie (terme technique)"]
      },
      {
        q: "Complète : au médecin, d'abord la comparaison, puis le terme technique.",
        tr: "La glycémie est plus basse que ce matin, je suspecte une hypoglycémie.",
        why: "<i>niedriger als heute Morgen</i> : comparatif + <i>als</i>. Au médecin, le terme technique, <i>Hypoglykämie</i> ; au patient, tu dirais <i>Unterzuckerung</i>."
      },
      {
        q: "Remets les mots dans l'ordre.",
        tr: "À partir de 38 degrés, on parle en général de fièvre.",
        why: "<i>Ab 38 Grad spricht man meistens von Fieber.</i> <i>Ab 38 Grad</i> en tête, le verbe <i>spricht</i> en deuxième position, <i>man</i> après lui. Le 38 est un seuil pédagogique : dans le service, c'est le protocole de l'établissement qui fait foi."
      },
      {
        q: "Traduis pour le patient, avec le mot allemand de tous les jours : « Avez-vous de la tachycardie ? »",
        why: "<i>Haben Sie Herzrasen?</i> Sans article, comme <i>Haben Sie Fieber?</i> Au patient, on ne dit pas <i>Tachykardie</i>."
      },
      {
        q: "Le médecin a écrit « Hypotonie ». Complète pour le patient : « Ihr Blutdruck ist zu ___. »",
        hint: "le contraire de hoch",
        why: "<b>niedrig</b> : <i>Hypotonie</i> est la tension basse, l'hypotension. Attention : ce n'est pas l'hypotonie musculaire."
      },
      {
        tr: "La patiente a une tachycardie. À elle, je dis simplement : vous avez le cœur qui s'emballe.",
        why: "Dans <i>Tachykardie</i>, l'accent tombe sur le <b>die</b> final ; <b>ch</b> se lit [x], un son raclé au fond de la gorge qui n'existe pas en français, et <b>y</b> se prononce comme le <b>u</b> français ; dans <i>Herzrasen</i>, le <b>H</b> initial s'expire, <b>z</b> se prononce [ts] et le <b>s</b> entre deux voyelles est sonore [z]."
      },
      {
        tr: "Je vais rapidement mesurer votre glycémie.",
        why: "Dans <i>Blutzucker</i>, le <b>u</b> de <i>Blut</i> est long et celui de <i>Zucker</i> bref, les deux sonnent « ou », et <b>z</b> se prononce [ts], jamais [z] ; dans <i>kurz</i>, le <b>r</b> s'entend à peine."
      }
    ]
  },
  "lesson:pfl-u02-l4": {
    theme: "Transmettre",
    title: "Signaler une valeur anormale",
    objectives: [
      "employer le passif avec werden pour décrire les procédures du service",
      "former le participe des verbes en -ieren et des verbes à préfixe inséparable sans ge-",
      "signaler au téléphone une valeur anormale au médecin ou au cadre de santé, avec la comparaison et l'état du patient",
      "répéter et documenter ce que le médecin prescrit, sans décider seul"
    ],
    theory: [
      {
        h: "Le passif des procédures",
        p: "Quand ce qui compte est ce qu'on fait et non qui le fait, on emploie le <strong>passif avec werden</strong> : <em>werden</em> conjugué en deuxième position, le participe à la fin. <em>Der Blutdruck wird zweimal am Tag gemessen. Alle Werte werden in der Kurve dokumentiert. Ein auffälliger Wert wird sofort gemeldet.</em> Le complément d'objet de la phrase active devient le sujet : <em>Ich melde den Wert</em> → <em>Der Wert wird gemeldet</em>. Celui qui agit ne s'ajoute que si c'est utile, avec <em>von</em> + datif."
      },
      {
        h: "Participes sans ge-",
        p: "Beaucoup de verbes du service <strong>ne prennent pas ge-</strong>. Les verbes en <em>-ieren</em> : <em>dokumentiert</em>, <em>kontrolliert</em>, <em>informiert</em>. Les verbes à préfixe inséparable (<em>be-, ver-, über-</em> inséparable) : <em>überwacht</em>, <em>überprüft</em>, <em>benachrichtigt</em>. Les séparables, eux, placent le <em>ge-</em> au milieu : <em>nachmessen</em> → <em>nachgemessen</em>, <em>eintragen</em> → <em>eingetragen</em>. <em>Gedokumentiert</em> et <em>geüberwacht</em> n'existent pas."
      },
      {
        contrast: "Le français forme son passif avec « être » : « la valeur est signalée ». Le calque allemand, <em>der Wert ist gemeldet</em>, existe, mais il décrit un état : « la valeur a déjà été signalée, c'est fait ». Pour la procédure, ce qui se fait, il faut <em>werden</em> : <em>der Wert wird gemeldet</em>. Là où le français préfère souvent « on » (« on prend la tension deux fois par jour »), la documentation allemande choisit volontiers le passif : <em>Der Blutdruck wird zweimal am Tag gemessen</em>. Les adjectifs techniques, eux, se reconnaissent : <em>Die Patientin ist hypoton und tachykard</em>, « hypotendue et tachycarde ». Attention seulement à la forme : le français dit « hypotendue », l'allemand <em>hypoton</em>, et après <em>sein</em> l'adjectif ne prend aucune terminaison, même au féminin. Ils servent avec le médecin et dans la <em>Kurve</em> ; avec le patient, on revient à la Laiensprache."
      },
      {
        trap: "<em>Melden</em> veut dire signaler, transmettre à qui doit savoir ; <em>sich melden</em>, c'est « donner des nouvelles » ou « répondre » (<em>Ich melde mich später</em>). <em>Kontrollieren</em>, c'est vérifier, recontrôler une valeur ; « surveiller » un patient dans la durée, le verbe central du soin infirmier en français, se dit <em>überwachen</em>, pas <em>kontrollieren</em>. Attention aux cas : <em>Ich informiere den Arzt</em> veut l'accusatif, mais <em>Ich sage dem Arzt Bescheid</em> veut le datif. Et <em>die Stationsleitung</em> correspond au cadre de santé du service, pas à « la direction de la station »."
      },
      {
        tip: "Au téléphone, suis toujours le même ordre : qui tu es et de quel service, quel patient et quelle chambre, la valeur avec la comparaison, comment va le patient, ce que tu as déjà fait (<em>Ich habe zweimal gemessen</em>). Puis répète ce que le médecin prescrit et note-le dans la <em>Kurve</em>. Quelles valeurs signaler, c'est le protocole de l'établissement qui le dit ; le rôle de l'infirmière est de les transmettre, pas de les corriger seule."
      }
    ],
    grammar: {
      title: "Le passif avec werden",
      note: "<b>werden</b> conjugué en deuxième position, <b>participe à la fin</b>. Pas de <b>ge-</b> pour les verbes en <b>-ieren</b> ni pour ceux à préfixe inséparable.",
      table: {
        head: ["actif", "passif", "remarque"],
        rows: [
          ["Wir messen den Blutdruck.", "Der Blutdruck wird gemessen.", "messen → gemessen"],
          ["Ich dokumentiere die Werte.", "Die Werte werden dokumentiert.", "-ieren : pas de ge-"],
          ["Wir überwachen den Patienten.", "Der Patient wird überwacht.", "über- inséparable : pas de ge-"],
          ["Ich melde den Wert.", "Der Wert wird gemeldet.", "le complément devient sujet"]
        ]
      },
      examples: [
        { tr: "La tension est mesurée deux fois par jour.", note: "wird + participe à la fin ; là où le français dit « est », l'allemand dit wird" },
        { tr: "Toutes les valeurs sont documentées sur la feuille de surveillance.", note: "pluriel : werden ; dokumentiert sans ge-" },
        { tr: "Une valeur anormale est signalée immédiatement.", note: "la règle du service, au passif" },
        { tr: "La médecin est informée.", note: "informiert : verbe en -ieren" },
        { tr: "Au bout de dix minutes, la valeur est recontrôlée.", note: "noch einmal : « de nouveau »" },
        { tr: "Le patient est étroitement surveillé.", note: "überwacht : préfixe inséparable" }
      ]
    },
    vocab: [
      "anormal, préoccupant, qui attire l'attention",
      "signaler, transmettre",
      "documenter, consigner",
      "contrôler, vérifier",
      "informer (avec l'accusatif)",
      "surveiller",
      "le ou la cadre de santé du service",
      "le médecin du service",
      "la fréquence respiratoire",
      "les valeurs de référence, la norme",
      "la valeur seuil",
      "l'écart"
    ],
    dialogue: [
      "Docteur Weber, ici Elena Marin, du service 3. Je vous appelle pour madame Keller, chambre 12.",
      "Oui, qu'est-ce qui se passe ?",
      "Sa tension est à 90/60. Ce matin, elle était à 130/80. Le pouls est à 110.",
      "Comment va-t-elle ?",
      "Elle a des vertiges, sinon elle est réveillée et orientée. J'ai mesuré deux fois.",
      "Bien, j'arrive tout de suite. Contrôlez la tension toutes les quinze minutes, s'il vous plaît.",
      "D'accord. Les valeurs sont consignées sur la feuille de surveillance."
    ],
    culture: {
      title: "Regard allemand : qui décide et qui transmet",
      text: "<p>Dans un service allemand, les mesures thérapeutiques partent d'une <i>ärztliche Anordnung</i>, la prescription du médecin, ou d'un protocole écrit que l'établissement a validé. Quand une valeur sort des limites fixées, l'infirmière la signale au médecin du service ou, la nuit, au médecin de garde, et informe la <i>Stationsleitung</i> ou la personne qui coordonne l'équipe.</p><p>Certaines cliniques utilisent des scores d'alerte précoce, qui additionnent plusieurs paramètres et disent à partir de quand appeler le médecin. Les seuils changent d'un établissement à l'autre : les chiffres de cette unité sont ronds et ne servent qu'à travailler la langue.</p>"
    },
    exercises: [
      {
        q: "Tu veux écrire « Chaque valeur est documentée ». Quelle phrase est correcte ?",
        opts: [
          "Jeder Wert wird dokumentiert.",
          "Jeder Wert ist dokumentiert worden wird.",
          "Jeder Wert wird gedokumentiert."
        ],
        why: "Passif avec <b>wird</b> + participe à la fin. Les verbes en <b>-ieren</b> ne prennent pas <i>ge-</i> : <i>dokumentiert</i>."
      },
      {
        q: "Quelles phrases au passif sont correctes ?",
        opts: [
          "Der Blutdruck wird zweimal am Tag gemessen.",
          "Der Blutdruck wird zweimal am Tag gemesst.",
          "Die Ärztin wird sofort informiert.",
          "Die Ärztin wird sofort geinformiert.",
          "Ein auffälliger Wert wird gemeldet."
        ],
        why: "<i>messen</i> a le participe fort <i>gemessen</i> ; <i>informieren</i> se termine en <i>-ieren</i> et ne prend pas <i>ge-</i> ; <i>melden</i> fait <i>gemeldet</i>."
      },
      {
        q: "Complète : « Ein auffälliger Wert wird sofort ___. »",
        hint: "participe de melden",
        why: "<b>gemeldet</b> : verbe régulier, <i>ge-</i> + radical + <i>-et</i>, à la fin de la phrase."
      },
      {
        q: "Complète la phrase au passif.",
        tr: "La fréquence respiratoire est contrôlée toutes les heures.",
        why: "<i>Die Atemfrequenz wird jede Stunde kontrolliert</i> : <i>wird</i> en deuxième position, le participe à la fin. <i>Überprüft</i> convient aussi : <i>über-</i> est ici inséparable, donc pas de <i>ge-</i>."
      },
      {
        q: "Remets les mots dans l'ordre.",
        tr: "La cadre de santé est informée tout de suite.",
        why: "<i>Die Stationsleitung wird sofort informiert.</i> <i>Wird</i> en deuxième position, le participe <i>informiert</i>, sans <i>ge-</i>, à la fin."
      },
      {
        q: "Traduis : « Au bout de dix minutes, la valeur est recontrôlée. »",
        why: "<i>Der Wert wird nach zehn Minuten noch einmal kontrolliert</i>. Le « re- » se rend par <i>noch einmal</i> ou <i>erneut</i> et ne doit pas se perdre ; <i>noch einmal gemessen</i> et l'ordre avec <i>Nach zehn Minuten</i> en tête conviennent aussi."
      },
      {
        q: "Associe chaque adjectif de la documentation à son sens.",
        pairs: ["au pouls rapide (tachycarde)", "au pouls lent (bradycarde)", "à la tension basse (hypotendu)", "qui a de la fièvre (fébrile)"]
      },
      {
        q: "Choisis le bon article défini pour chaque nom.",
        items: ["cadre de santé du service", "médecin du service", "fréquence respiratoire", "valeurs de référence", "valeur seuil", "écart"]
      },
      {
        q: "Tu téléphones au médecin pour une valeur anormale.",
        setting: "Tu as mesuré deux fois la tension de madame Keller : elle est beaucoup plus basse que ce matin.",
        lines: [
          { tr: "Weber, médecine interne. Qu'est-ce qui se passe ?" },
          { tr: "Présente-toi et dis pour quel patient tu appelles.", answerTr: "Ici Elena Marin, du service 3. Je vous appelle pour madame Keller." },
          { tr: "Qu'est-ce qu'il y a ?" },
          { tr: "Signale que la tension est plus basse que ce matin : 90/60.", answerTr: "Sa tension est plus basse que ce matin : 90/60." },
          { tr: "Bien, j'arrive. Contrôlez la tension toutes les quinze minutes, s'il vous plaît." },
          { tr: "Confirme et dis que les valeurs sont consignées sur la feuille de surveillance.", answerTr: "D'accord. Les valeurs sont consignées sur la feuille de surveillance." }
        ]
      },
      {
        tr: "La tension de madame Keller est plus basse que ce matin. La valeur est signalée immédiatement au médecin du service.",
        why: "Dans <i>Stationsarzt</i>, le <b>st</b> initial se prononce [ʃt], « cht », et le <b>ti</b> de <i>Station</i> se lit [tsi] ; dans <i>gemeldet</i>, le <b>d</b> final sonne [t]."
      },
      {
        tr: "Une valeur anormale est signalée immédiatement.",
        why: "Dans <i>auffälliger</i>, <b>au</b> se prononce [aʊ], « aou », et le <b>ä</b> est bref ; dans <i>sofort</i>, l'accent tombe sur la deuxième syllabe, <b>fort</b> ; dans <i>wird</i>, le <b>w</b> se lit [v]."
      }
    ]
  },
  "lesson:pfl-u02-test": {
    theme: "Évaluation",
    title: "Test : Signes vitaux et valeurs mesurées",
    objectives: [
      "vérifier l'impératif avec Sie et les verbes séparables, le comparatif des valeurs, le passif avec werden et les paires Fachsprache / Laiensprache"
    ],
    theory: [
      {
        p: "Onze questions sur toute l'unité. On réussit avec 70 %. Les valeurs sont des chiffres ronds à but pédagogique : dans le service, ce sont les seuils et le protocole de l'établissement qui font foi, et une valeur anormale se signale toujours au médecin."
      }
    ],
    exercises: [
      {
        q: "Tu veux demander au patient de s'allonger. Quelle phrase est correcte ?",
        opts: ["Legen Sie sich bitte hin.", "Hinlegen Sie sich bitte.", "Legen Sie bitte hin."],
        why: "Impératif avec <b>Sie</b>, le pronom réfléchi <b>sich</b> et la particule <b>hin</b> à la fin. La troisième phrase perd <i>sich</i>."
      },
      {
        q: "Complète : « Atmen Sie bitte tief ___. »",
        hint: "particule de einatmen",
        why: "<b>ein</b> : <i>einatmen</i> est séparable, donc à l'impératif la particule va à la fin."
      },
      {
        q: "Complète : « Heute ist der Puls ___ als gestern. »",
        hint: "comparatif de langsam",
        why: "<b>langsamer</b> : <i>langsam</i> ne prend pas l'Umlaut, <i>-er</i> suffit."
      },
      {
        tr: "Le présent de anlegen, à toutes les personnes.",
        why: "<i>Lege an, legst an, legt an, legen an, legt an, legen an</i> : verbe régulier et séparable, avec <i>an</i> toujours à la fin."
      },
      {
        q: "Associe chaque terme technique au mot qu'emploie le patient.",
        pairs: ["das Herzrasen", "der niedrige Blutdruck", "die Unterzuckerung", "der hohe Blutzucker"]
      },
      {
        q: "Quelles phrases au passif sont correctes ?",
        opts: [
          "Der Wert wird dokumentiert.",
          "Der Wert wird gedokumentiert.",
          "Die Ärztin wird informiert.",
          "Der Puls wird gemesst.",
          "Die Sättigung wird am Finger gemessen."
        ],
        why: "<i>dokumentiert</i> et <i>informiert</i> sont des verbes en <i>-ieren</i>, sans <i>ge-</i> ; le participe de <i>messen</i> est <i>gemessen</i>."
      },
      {
        q: "Complète avec le comparatif et le passif.",
        tr: "La glycémie est plus basse que ce matin. La valeur est signalée immédiatement.",
        why: "<i>niedriger als heute Morgen</i>, puis le passif : <i>Der Wert wird sofort gemeldet</i>."
      },
      {
        q: "Remets les mots dans l'ordre.",
        tr: "Découvrez le bras, s'il vous plaît.",
        why: "<i>Machen Sie bitte den Oberarm frei.</i> L'impératif en tête, <i>Sie</i> juste après, la particule <i>frei</i> à la fin."
      },
      {
        q: "Choisis le bon article défini pour chaque nom.",
        items: ["brassard", "pouls", "fièvre", "hypoglycémie (mot du patient)", "fréquence respiratoire", "valeur seuil"]
      },
      {
        tr: "Je vais maintenant prendre votre tension. S'il vous plaît, ne parlez pas pendant la mesure.",
        why: "Dans <i>Blutdruck</i>, le <b>u</b> de <i>Blut</i> est long et celui de <i>Druck</i> bref, les deux sonnent « ou » ; dans <i>jetzt</i>, le <b>j</b> se prononce [j], comme le « y » de « yaourt » ; dans <i>während</i>, le <b>h</b> ne se prononce pas."
      },
      {
        tr: "La tension est plus basse que ce matin.",
        why: "Dans <i>niedriger</i>, <b>ie</b> est un <b>i</b> long ; dans <i>Morgen</i>, le <b>r</b> après la voyelle s'entend à peine ; dans <i>heute</i>, <b>eu</b> se prononce [ɔʏ], proche de « oï »."
      }
    ]
  }
});
