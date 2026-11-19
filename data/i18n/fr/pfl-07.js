/* ============================================================
   Textes dans la langue de l'élève (fr) pour data/core/pfl-07.js, unité pfl-u07.
   Les clés renvoient aux id de la couche neutre ; les tableaux se
   joignent par index, leur longueur doit donc correspondre à core.
   Vérifié par scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("fr", {
  "unit:pfl-u07": {
    title: "Parler avec les patients et leurs proches",
    grammarNote: "expliquer simplement avec les subordonnées en dass · les particules doch, mal, ja · les demandes polies au Konjunktiv II · le discours indirect au Konjunktiv I · des phrases courtes avec le verbe en deuxième position pour les personnes atteintes de démence"
  },
  "lesson:pfl-u07-l1": {
    theme: "Expliquer avec des mots simples",
    title: "Expliquer simplement",
    objectives: [
      "expliquer au patient ce qui va se passer, sans termes techniques",
      "utiliser les subordonnées en dass : das heißt, dass... ; wichtig ist, dass...",
      "vérifier que le patient a compris",
      "renvoyer au médecin les questions sur le diagnostic : Das bespricht der Arzt mit Ihnen"
    ],
    theory: [
      {
        h: "Deux registres, une explication",
        p: "Entre collègues on dit <em>Gastroskopie</em>, au patient on dit <em>Magenspiegelung</em>. C'est pareil pour beaucoup de mots de la leçon : pour le patient, la <strong>Diagnose</strong>, c'est <em>was ich habe</em>, et la <strong>Prognose</strong>, c'est <em>wie es weitergeht</em>. Pour expliquer simplement : des phrases courtes, une information à la fois, des mots allemands de tous les jours à la place des mots latins. Ensuite on vérifie que le patient a compris, non pas en demandant <em>Haben Sie verstanden?</em> (presque tout le monde répond oui), mais en lui faisant redire avec ses propres mots : <em>Können Sie mit Ihren eigenen Worten wiederholen, was morgen passiert?</em>"
      },
      {
        h: "Les subordonnées en dass",
        p: "L'explication se construit souvent avec <strong>dass</strong> : <em>Das heißt, dass...</em>, <em>Wichtig ist, dass...</em>, <em>Ich verstehe, dass...</em>, <em>Ich sage dem Arzt, dass...</em> Après <em>dass</em>, le verbe conjugué va <strong>à la fin</strong> : <em>dass der Arzt in Ihren Magen <b>schaut</b></em>, <em>dass Sie noch Fragen <b>haben</b></em>. Avec un temps composé, c'est l'auxiliaire qui va à la fin, après le participe : <em>dass Sie alles verstanden <b>haben</b></em>. Devant <em>dass</em>, il y a toujours une virgule."
      },
      {
        contrast: "En français, beaucoup de termes médicaux sont aussi des mots courants : un patient français dit lui-même « gastroscopie », « échographie », « hypertension », parce que le français médical et le français de tous les jours partagent les mêmes racines savantes. L'allemand, lui, a un deuxième vocabulaire fait de mots allemands : le patient dit <em>Magenspiegelung</em>, <em>Ultraschall</em>, <em>Bluthochdruck</em>, et le mot latin qui te paraît le plus clair peut lui rester opaque. Expliquer simplement, en allemand, c'est donc traduire du latin vers l'allemand, pas seulement raccourcir la phrase. La syntaxe change aussi : en français, « que » ne déplace pas le verbe (« je vous dis que le médecin regarde dans votre estomac ») ; en allemand, après <em>dass</em>, le verbe part à la fin : <em>dass der Arzt in Ihren Magen schaut</em>."
      },
      {
        trap: "<em>die Aufklärung</em> à l'hôpital n'est pas un « éclaircissement » quelconque : c'est l'entretien par lequel, en règle générale, le médecin informe le patient avant un examen ou une intervention, et après lequel le patient donne son consentement. C'est l'équivalent de l'information médicale préalable au consentement éclairé. Toi, tu peux redire avec des mots simples ce qui va se passer et comment se préparer, mais l'entretien d'information et le diagnostic restent au médecin : <em>Das bespricht der Arzt mit Ihnen.</em> Attention aussi à l'orthographe : <em>das</em> avec un s est article ou pronom (<em>Das heißt...</em>), <em>dass</em> avec deux s est la conjonction (<em>..., dass der Arzt...</em>)."
      },
      {
        tip: "Quand le patient pose une question qui n'est pas de ton ressort, ne la laisse pas tomber : renvoie-la et prends un engagement que tu peux tenir. <em>Das bespricht der Arzt mit Ihnen. Ich sage ihm, dass Sie noch Fragen haben.</em> Le patient sait ainsi que sa question est arrivée à destination, et tu n'as rien dit que tu n'avais pas le droit de dire."
      }
    ],
    grammar: {
      title: "Expliquer avec dass",
      note: "Principale, virgule, <b>dass</b>, et le verbe conjugué <b>à la fin</b>. Avec un temps composé : le participe, puis l'auxiliaire.",
      table: {
        head: ["principale", "dass + verbe à la fin"],
        rows: [
          ["Das heißt,", "dass der Arzt in Ihren Magen schaut."],
          ["Wichtig ist,", "dass Sie ab Mitternacht nichts mehr essen."],
          ["Ich sage dem Arzt,", "dass Sie noch Fragen haben."],
          ["Ich möchte sicher sein,", "dass Sie alles verstanden haben."]
        ]
      },
      examples: [
        { tr: "Demain matin, on vous fera une gastroscopie.", note: "Magenspiegelung : le mot du patient pour Gastroskopie" },
        { tr: "Cela veut dire que le médecin regarde dans votre estomac avec une petite caméra.", note: "dass : le verbe schaut va à la fin" },
        { tr: "Il est important que vous ne mangiez plus rien à partir de minuit.", note: "Wichtig ist, dass... : pour l'information à ne pas oublier" },
        { tr: "Je dis au médecin que vous avez encore des questions.", note: "dass : le verbe haben va à la fin" },
        { tr: "Je veux être sûre que vous avez tout compris.", note: "temps composé : verstanden haben, l'auxiliaire en dernier" },
        { tr: "Le médecin en parlera avec vous.", note: "la phrase pour les questions sur le diagnostic" }
      ]
    },
    vocab: [
      "le diagnostic",
      "le pronostic",
      "l'examen",
      "la gastroscopie (mot du patient)",
      "la gastroscopie (terme technique)",
      "l'entretien d'information avant un examen ou une intervention",
      "le terme technique",
      "expliquer",
      "compréhensible",
      "demander des précisions",
      "pas clair",
      "répéter"
    ],
    dialogue: [
      "Monsieur Schulz, je vous explique rapidement ce qui se passe demain. Demain matin, on vous fera une gastroscopie.",
      "Une gastroscopie, a dit le médecin. Qu'est-ce que c'est exactement ?",
      "Cela veut dire que le médecin regarde dans votre estomac avec une petite caméra. Il est important que vous ne mangiez plus rien à partir de minuit.",
      "Et qu'est-ce que j'ai ? C'est grave ?",
      "Je comprends que vous soyez inquiet. Le médecin en parlera avec vous.",
      "Il passe encore aujourd'hui ?",
      "Je lui dis que vous avez encore des questions. Il y a autre chose qui n'est pas clair ?",
      "Non, merci. Vous m'avez bien expliqué."
    ],
    culture: {
      title: "Côté allemand : qui informe le patient",
      text: "<p>En Allemagne, la loi exige que le patient soit informé avant un examen ou une intervention par un entretien, la <i>Aufklärung</i>, dans une langue qu'il peut comprendre. C'est en général le médecin qui le mène, et le patient signe souvent un formulaire. Les infirmières et infirmiers expliquent la préparation et la partie pratique : quand ne plus manger, quoi apporter, comment se déroule la journée.</p><p>Beaucoup d'établissements utilisent aussi des documents en <i>Einfache Sprache</i> ou en <i>Leichte Sprache</i>, c'est-à-dire des textes écrits avec des phrases courtes et des mots courants, proches du « facile à lire et à comprendre » (FALC). Quand on apprend l'allemand, on les trouve souvent plus clairs que les textes officiels : ils valent la peine d'être lus pour soi aussi.</p>"
    },
    exercises: [
      {
        q: "Le patient demande : « Was habe ich denn? » Le médecin ne lui a pas encore parlé. Quelle réponse respecte les limites de ton rôle ?",
        opts: [
          "Das bespricht der Arzt mit Ihnen.",
          "Das ist sicher nichts Schlimmes.",
          "Das darf ich nicht sagen, fragen Sie nicht."
        ],
        why: "C'est le médecin qui annonce le diagnostic : <b>Das bespricht der Arzt mit Ihnen.</b> <i>Das ist sicher nichts Schlimmes</i> est une assurance que tu ne peux pas donner, et la troisième réponse ferme la discussion au lieu d'orienter la question."
      },
      {
        tr: "Le présent de erklären, à toutes les personnes.",
        why: "<i>Erkläre, erklärst, erklärt, erklären, erklärt, erklären</i> : verbe régulier. Le préfixe <i>er-</i> ne se sépare jamais et le <b>ä</b> reste à toutes les personnes."
      },
      {
        q: "Complète : « Wichtig ist, ___ Sie ab Mitternacht nichts mehr essen. »",
        hint: "conjonction « que »",
        why: "<b>dass</b>, avec deux s : c'est la conjonction qui ouvre la subordonnée, et c'est pour cela que le verbe <i>essen</i> va à la fin."
      },
      {
        q: "Complète la phrase.",
        tr: "Cela veut dire que le médecin regarde dans votre estomac avec une petite caméra.",
        why: "<i>Das heißt, <b>dass</b> der Arzt ... in Ihren Magen <b>schaut</b></i> (<i>sieht</i> convient aussi) : après <i>dass</i>, le verbe conjugué va à la fin."
      },
      {
        q: "Associe chaque mot à son sens.",
        pairs: ["le diagnostic", "le pronostic", "l'entretien d'information avant une intervention", "l'examen"]
      },
      {
        q: "Choisis le bon article défini pour chaque nom.",
        items: ["diagnostic", "terme technique", "estomac", "examen", "entretien", "rendez-vous"]
      },
      {
        q: "Quelles phrases sont correctes ?",
        opts: [
          "Ich sage dem Arzt, dass Sie noch Fragen haben.",
          "Wichtig ist, dass Sie ab Mitternacht nichts mehr essen.",
          "Das heißt, dass der Arzt schaut in Ihren Magen.",
          "Ich verstehe, dass Sie Angst haben.",
          "Ich hoffe, dass Sie haben gut geschlafen."
        ],
        why: "Après <i>dass</i>, le verbe conjugué va à la fin : <i>dass der Arzt in Ihren Magen <b>schaut</b></i>, <i>dass Sie gut geschlafen <b>haben</b></i>. Avec un temps composé, l'auxiliaire vient après le participe."
      },
      {
        q: "Remets les mots dans l'ordre.",
        tr: "Je dis au médecin que vous avez encore des questions.",
        why: "<i>Ich sage dem Arzt, dass Sie noch Fragen haben.</i> Dans la principale, le verbe <i>sage</i> est en deuxième position ; après la virgule, <i>dass</i> envoie <i>haben</i> à la fin."
      },
      {
        q: "Traduis pour le patient, sans termes techniques : « Demain matin, on vous fera une gastroscopie. »",
        why: "<i>Morgen früh bekommen Sie eine Magenspiegelung.</i> Au patient on dit <b>Magenspiegelung</b>, pas <i>Gastroskopie</i> ; « demain matin », c'est <b>morgen früh</b>. <i>Sie haben morgen früh eine Magenspiegelung</i> convient aussi."
      },
      {
        q: "La veille de l'examen.",
        setting: "Monsieur Schulz passe une gastroscopie demain et il est inquiet. Le médecin ne lui a pas encore parlé des résultats.",
        lines: [
          { tr: "Qu'est-ce que j'ai ? C'est grave ?" },
          { tr: "Réponds que tu comprends son inquiétude et que le médecin en parlera avec lui.", answerTr: "Je comprends que vous soyez inquiet. Le médecin en parlera avec vous." },
          { tr: "Et c'est quoi, une gastroscopie ?" },
          { tr: "Explique-le avec des mots simples.", answerTr: "Cela veut dire que le médecin regarde dans votre estomac avec une petite caméra." },
          { tr: "Ce soir, je peux encore manger quelque chose ?" },
          { tr: "Réponds que oui, mais qu'il est important de ne plus rien manger à partir de minuit.", answerTr: "Oui, mais il est important que vous ne mangiez plus rien à partir de minuit." }
        ]
      },
      {
        tr: "Je comprends que vous soyez inquiet. Le médecin en parlera avec vous.",
        why: "Dans <i>verstehe</i>, le <b>st</b> au début du radical se prononce [ʃt] ; dans <i>bespricht</i>, le <b>sp</b> se prononce [ʃp] et le <b>ch</b> après <b>i</b> se prononce [ç] ; dans <i>Arzt</i>, le <b>z</b> se prononce [ts]."
      },
      {
        tr: "Je dis au médecin que vous avez encore des questions.",
        why: "Dans <i>Ich</i>, le <b>ch</b> après <b>i</b> se prononce [ç] ; dans <i>noch</i>, le <b>ch</b> après <b>o</b> se prononce [x] ; dans <i>Fragen</i>, le <b>a</b> est long."
      }
    ]
  },
  "lesson:pfl-u07-l2": {
    theme: "Rassurer et encourager",
    title: "Rassurer et encourager",
    objectives: [
      "rassurer un patient qui a peur, sans promettre ce qui ne dépend pas de toi",
      "utiliser les particules doch, mal et ja pour rendre une demande plus chaleureuse",
      "faire des demandes et des propositions polies au Konjunktiv II : könnten, wäre",
      "féliciter un petit progrès"
    ],
    theory: [
      {
        h: "Les particules doch, mal, ja",
        p: "Les <strong>Modalpartikeln</strong> sont des mots courts, non accentués, qui ne changent pas le contenu de la phrase mais son ton. Dans une invitation, <em>doch</em> la rend encourageante, comme « allez-y » ou « donc » : <em>Setzen Sie sich <b>doch</b> erst mal hin.</em> <em>mal</em> allège la demande, comme « un instant » : <em>Atmen Sie <b>mal</b> tief ein.</em> <em>ja</em> rappelle une chose que nous savons tous les deux, et c'est pour cela qu'il rassure : <em>Ich bin <b>ja</b> direkt neben Ihnen.</em> Elles se placent au milieu de la phrase, après le verbe et les pronoms, jamais en première position. Elles se combinent souvent : <em>doch mal</em>, <em>doch erst mal</em>."
      },
      {
        h: "Le Konjunktiv II de politesse",
        p: "Pour demander ou proposer avec égards, on utilise le <strong>Konjunktiv II</strong>, comme le conditionnel français : <em><b>Könnten</b> Sie mir sagen, wo es weh tut?</em> <em><b>Wäre</b> es Ihnen recht, wenn ich kurz bei Ihnen bleibe?</em> <em>Es <b>wäre</b> gut, wenn Sie heute ein paar Schritte gehen.</em> Les formes les plus fréquentes sont peu nombreuses : <em>könnte, wäre, hätte, würde</em>. <em>Könnte</em> vient du Präteritum <em>konnte</em> avec l'Umlaut. Dans la question, le verbe conjugué est en première position, comme dans toute question fermée."
      },
      {
        contrast: "Le français n'a pas de classe de particules comme l'allemand, mais il en a des morceaux : « asseyez-vous <i>donc</i> », « venez <i>quand même</i> », « respirez <i>un peu</i> », et surtout l'intonation. Ces équivalents ne couvrent qu'une partie du terrain : « donc » à l'impératif peut sonner impatient, et rien en français ne fait exactement ce que fait <em>ja</em> (« vous savez bien que je suis là »). Sans <em>doch</em>, <em>mal</em> ou <em>ja</em>, la phrase allemande reste correcte, mais elle sonne plus froide et plus comme un ordre (<em>Setzen Sie sich hin.</em>). Le Konjunktiv II, en revanche, t'est familier : <em>Könnten Sie...?</em> correspond presque mot pour mot à « Pourriez-vous...? ». Mais il ne faut pas le confondre avec le subjonctif : le subjonctif français vient après « que » et une volonté ou un sentiment (« il faut que vous mangiez »), alors que le Konjunktiv II, c'est le conditionnel. Et un <em>doch</em> dit avec impatience sonne comme un reproche (« mais asseyez-vous donc, enfin »)."
      },
      {
        trap: "<em>doch</em> ne veut pas dire ici « pourtant » ou « mais », et <em>mal</em> n'a rien à voir avec « mal » en français : c'est la forme courte de <em>einmal</em>. Attention aussi à <em>versprechen</em> et <em>sich versprechen</em> : <em>Ich kann Ihnen nichts versprechen</em> veut dire « je ne peux rien vous promettre », mais <em>Ich habe mich versprochen</em> veut dire « je me suis trompé en parlant ». Et les phrases qui semblent rassurantes, <em>Alles wird gut</em> ou <em>Sie fallen nicht</em>, sont des promesses qui ne dépendent pas de toi : dis plutôt ce que tu fais, <em>Ich bleibe bei Ihnen.</em>"
      },
      {
        tip: "Une suite qui marche presque toujours : nomme la peur (<em>Ich verstehe, dass Sie Angst haben</em>), dis ce que tu fais (<em>Ich bin ja direkt neben Ihnen</em>), propose un petit pas (<em>Setzen Sie sich doch erst mal an die Bettkante</em>) et félicite ce qui a réussi (<em>Das haben Sie gut gemacht</em>)."
      }
    ],
    grammar: {
      title: "Particules et demandes polies",
      note: "<b>doch</b>, <b>mal</b>, <b>ja</b> : sans accent, au milieu de la phrase, jamais en première position. Pour demander avec égards : <b>könnten</b>, <b>wäre</b>, <b>würden</b>.",
      table: {
        head: ["forme", "ce qu'elle fait", "exemple"],
        rows: [
          ["doch", "invitation encourageante, « allez-y »", "Setzen Sie sich doch erst mal hin."],
          ["mal", "demande légère, « un instant »", "Atmen Sie mal tief ein."],
          ["ja", "une chose que nous savons tous les deux", "Ich bin ja direkt neben Ihnen."],
          ["könnten", "question polie", "Könnten Sie mir kurz sagen, wo es weh tut?"],
          ["wäre", "proposition polie", "Wäre es Ihnen recht, wenn ich kurz bei Ihnen bleibe?"]
        ]
      },
      examples: [
        { tr: "Asseyez-vous donc d'abord.", note: "doch erst mal : invitation aimable, un pas après l'autre" },
        { tr: "Inspirez et expirez calmement.", note: "mal : la demande sonne plus légère" },
        { tr: "Ça, vous le connaissez déjà depuis hier.", note: "ja : rappelle une chose connue, rassure" },
        { tr: "Pourriez-vous me dire rapidement où vous avez mal ?", note: "Konjunktiv II de können : könnten" },
        { tr: "Cela vous irait si je restais un moment avec vous ?", note: "Konjunktiv II de sein : wäre" },
        { tr: "Ce serait bien que vous fassiez quelques pas aujourd'hui.", note: "Es wäre gut, wenn... : un conseil sans ordre" }
      ]
    },
    vocab: [
      "la peur",
      "l'inquiétude, le souci",
      "rassurer, calmer",
      "encourager",
      "l'encouragement",
      "agité, nerveux",
      "consoler",
      "le progrès",
      "promettre",
      "sincère, honnête",
      "confiant",
      "profond ; profondément"
    ],
    dialogue: [
      "J'ai tellement peur de me lever. Hier, j'ai eu la tête qui tournait.",
      "Je comprends que vous ayez peur. Asseyez-vous donc d'abord au bord du lit.",
      "Et si je tombe ?",
      "Je suis juste à côté de vous, vous le voyez bien. Inspirez et expirez calmement.",
      "D'accord. Vous pourriez me donner la main, s'il vous plaît ?",
      "Bien sûr. Cela vous irait si nous allions jusqu'à la fenêtre ?",
      "J'essaie. Ouf, c'est dur.",
      "C'était bien. Demain on recommence, un pas après l'autre."
    ],
    culture: {
      title: "Côté allemand : on demande avant de toucher",
      text: "<p>Dans les services allemands, on vouvoie tout patient adulte et on l'appelle par son nom de famille : <i>Frau Wagner</i>, pas son prénom. Le contact physique s'annonce ou se demande aussi en général : <i>Darf ich Ihre Hand nehmen?</i> Beaucoup de patients apprécient une main sur l'épaule, d'autres non, et la question leur laisse le choix.</p><p>Les compliments sont plus sobres qu'en France : <i>Das haben Sie gut gemacht</i> est déjà un compliment chaleureux. Un enthousiasme trop fort pour un petit pas peut donner l'impression qu'on parle à un enfant.</p>"
    },
    exercises: [
      {
        q: "Tu veux inviter la patiente à s'asseoir de façon aimable et encourageante. Quelle phrase est correcte ?",
        opts: [
          "Setzen Sie sich doch erst mal hin.",
          "Sie setzen sich jetzt hin.",
          "Setzen Sie doch sich erst mal hin."
        ],
        why: "<b>doch erst mal</b> rend l'invitation chaleureuse. La particule vient après le pronom <i>sich</i>, pas avant. <i>Sie setzen sich jetzt hin</i> est correct, mais sonne comme un ordre."
      },
      {
        tr: "Le Konjunktiv II de können, à toutes les personnes.",
        why: "<i>Könnte, könntest, könnte, könnten, könntet, könnten</i> : on part du Präteritum <i>konnte</i> et on ajoute l'Umlaut, <b>ö</b>."
      },
      {
        q: "Complète : « Es ___ gut, wenn Sie heute ein paar Schritte gehen. »",
        hint: "Konjunktiv II de sein",
        why: "<b>wäre</b> : « ce serait ». Avec <i>Es wäre gut, wenn...</i>, tu donnes un conseil sans donner d'ordre."
      },
      {
        q: "Complète avec les particules doch et ja.",
        tr: "Asseyez-vous donc d'abord. Je suis juste à côté de vous, vous le voyez bien.",
        why: "<i>Setzen Sie sich <b>doch</b> erst mal hin</i> : invitation encourageante. <i>Ich bin <b>ja</b> direkt neben Ihnen</i> : rappelle une chose que la patiente voit déjà, et la rassure."
      },
      {
        q: "Quelles phrases rassurent sans trop promettre ?",
        opts: [
          "Ich bleibe bei Ihnen.",
          "Es wird ganz sicher alles gut.",
          "Wenn Sie etwas brauchen, drücken Sie die Klingel.",
          "Das schaffen Sie schon, Sie sind ja nicht krank.",
          "Ich verstehe, dass Sie Angst haben."
        ],
        why: "On rassure avec ce qui dépend de toi : rester, être joignable, prendre la peur au sérieux. <i>Es wird ganz sicher alles gut</i> est une promesse que tu ne peux pas faire, et <i>Sie sind ja nicht krank</i> nie ce que le patient ressent."
      },
      {
        q: "Choisis le bon article défini pour chaque nom.",
        items: ["peur", "progrès", "encouragement", "fenêtre", "lit", "pas"]
      },
      {
        q: "Associe chaque phrase à sa traduction.",
        pairs: ["Asseyez-vous donc.", "Inspirez un instant profondément.", "Ça, vous le connaissez déjà.", "Pourriez-vous m'aider ?"]
      },
      {
        q: "Remets les mots dans l'ordre.",
        tr: "Cela vous irait si je restais un moment avec vous ?",
        why: "<i>Wäre es Ihnen recht, wenn ich kurz bei Ihnen bleibe?</i> Dans la question, le verbe <i>wäre</i> est en première position ; après <i>wenn</i>, le verbe <i>bleibe</i> va à la fin."
      },
      {
        q: "Traduis avec le Konjunktiv II : « Pourriez-vous me dire où vous avez mal ? »",
        why: "<i>Könnten Sie mir sagen, wo es weh tut?</i> (on écrit aussi <i>wehtut</i>). Après <i>wo</i>, le verbe va à la fin."
      },
      {
        q: "Le premier lever.",
        setting: "Madame Wagner doit se lever pour la première fois après l'opération et elle a peur.",
        lines: [
          { tr: "J'ai tellement peur de me lever." },
          { tr: "Réponds que tu comprends sa peur et invite-la à s'asseoir d'abord au bord du lit.", answerTr: "Je comprends que vous ayez peur. Asseyez-vous donc d'abord au bord du lit." },
          { tr: "Et si je tombe ?" },
          { tr: "Rassure-la : tu es juste à côté d'elle et vous allez doucement.", answerTr: "Je suis juste à côté de vous. Nous allons tout doucement." },
          { tr: "Ouf, c'est dur." },
          { tr: "Félicite-la et dis que vous recommencez demain.", answerTr: "C'était bien. Demain on recommence." }
        ]
      },
      {
        tr: "Je suis juste à côté de vous, vous le voyez bien. Inspirez et expirez calmement.",
        why: "<i>ja</i> se prononce [jaː], le <b>j</b> comme le « y » de « yeux » ; dans <i>ruhig</i>, le <b>g</b> final se prononce [ç] ; dans <i>ein</i>, la diphtongue <b>ei</b> se prononce [aɪ]. La particule <i>ja</i> n'est pas accentuée ici."
      },
      {
        tr: "Asseyez-vous donc d'abord.",
        why: "Dans <i>Setzen</i>, le <b>s</b> initial est sonore [z] et le <b>tz</b> se prononce [ts] ; dans <i>doch</i>, le <b>ch</b> après <b>o</b> se prononce [x], dans <i>sich</i>, après <b>i</b>, [ç]. <i>doch</i> et <i>mal</i> restent sans accent."
      }
    ]
  },
  "lesson:pfl-u07-l3": {
    theme: "Proches et secret professionnel",
    title: "Informer les proches",
    objectives: [
      "ne donner aux proches que les informations que le patient a autorisées",
      "rapporter ce que le patient a dit avec le Konjunktiv I : er habe, sie sei",
      "renvoyer au médecin les questions sur le diagnostic et les examens",
      "expliquer pourquoi on ne donne pas d'informations au téléphone"
    ],
    theory: [
      {
        h: "Ce qu'on peut dire, et à qui",
        p: "Les infirmières et infirmiers sont eux aussi tenus à la <strong>Schweigepflicht</strong>, le secret professionnel, et le secret vaut aussi envers les proches. Avant d'informer un <strong>Angehöriger</strong>, il faut l'<strong>Einverständnis</strong> du patient : <em>Ihr Vater ist damit einverstanden, dass wir Sie informieren.</em> Même dans ce cas, tu rapportes comment va le patient et ce qu'il dit ; le diagnostic, les résultats des examens et le pronostic, c'est le médecin qui les communique : <em>Das bespricht der Arzt mit Ihnen. Ich kann gern ein Arztgespräch für Sie vereinbaren.</em> Au téléphone, on ne voit pas qui appelle, c'est pourquoi beaucoup d'établissements ne donnent pas d'informations : <em>Am Telefon darf ich leider keine Auskunft geben.</em>"
      },
      {
        h: "Le Konjunktiv I pour rapporter",
        p: "Pour rapporter les paroles de quelqu'un d'autre, l'allemand a le <strong>Konjunktiv I</strong> : radical du verbe + <em>-e</em>. <em>Ich habe gut geschlafen</em> devient <em>Er sagt, er <b>habe</b> gut geschlafen.</em> <em>Sein</em> est irrégulier : <em>ich sei, er sei, wir seien, sie seien</em>. On l'utilise surtout à la troisième personne du singulier, parce que c'est là qu'il se distingue de l'indicatif. Quand le Konjunktiv I se confond avec l'indicatif (<em>sie haben</em>), on prend le Konjunktiv II : <em>Sie sagen, sie <b>hätten</b> Angst.</em> À l'oral, beaucoup utilisent simplement <em>dass</em> avec l'indicatif : <em>Sie hat gesagt, dass sie gut geschlafen hat.</em> Dans le rapport de soins, le Konjunktiv I est la forme typique : <em>Patientin gibt an, sie <b>habe</b> keine Schmerzen.</em> Il indique qu'il s'agit d'une déclaration du patient, pas d'un fait que tu as vérifié."
      },
      {
        contrast: "En français, le discours indirect n'a pas de mode à lui : on garde l'indicatif et on fait la concordance des temps (« il dit qu'il a bien dormi », « il a dit qu'il avait bien dormi »). Le subjonctif n'y entre pas : « il dit qu'il ait dormi » est faux. Le seul outil français pour prendre ses distances avec ce qu'on rapporte, c'est le conditionnel journalistique (« il aurait bien dormi ») ou une formule (« selon la patiente », « la patiente déclare »). L'allemand a une forme exprès, le Konjunktiv I, qu'on entend peu à l'oral mais qui est utile dans la documentation : <em>sie sei müde</em> marque la distance entre ce que la patiente dit et ce que tu as observé, comme le « patiente dit être fatiguée » des transmissions. Pour les proches, la logique est proche de la règle française : en France aussi, le secret professionnel vaut envers la famille, et la personne de confiance n'a pas accès d'office au dossier. En Allemagne, la règle est nette : c'est le patient qui décide qui peut savoir quoi, et le fils ou l'épouse n'ont pas automatiquement droit aux informations."
      },
      {
        trap: "<em>er habe</em> n'est pas une faute pour <em>er hat</em> : c'est la forme du discours indirect, et ce n'est pas un subjonctif au sens français. <em>sie sei müde</em> se traduit « (elle dit qu')elle est fatiguée », à l'indicatif. <em>der Angehörige</em> est un adjectif employé comme nom et change de terminaison : <em>der Angehörige</em>, mais <em>ein Angehöriger</em>, et au pluriel <em>die Angehörigen</em>. <em>Auskunft geben</em>, c'est « donner des renseignements sur demande » ; ne le confonds pas avec <em>Aufklärung</em>, l'entretien d'information du médecin."
      },
      {
        tip: "Si un proche insiste pour connaître le diagnostic, inutile de dire simplement non : propose le bon chemin. <em>Das bespricht der Arzt mit Ihnen. Ich kann gern ein Arztgespräch für Sie vereinbaren.</em> Le proche obtient un rendez-vous, et toi, tu restes dans les limites de ce que tu peux dire."
      }
    ],
    grammar: {
      title: "Rapporter avec le Konjunktiv I",
      note: "Konjunktiv I = radical + <b>-e</b> : er <b>habe</b>, sie <b>fühle</b>. <b>sein</b> : sei, seien. S'il se confond avec l'indicatif, on prend le Konjunktiv II : sie <b>hätten</b>.",
      table: {
        head: ["dit par le patient", "rapporté"],
        rows: [
          ["Ich habe gut geschlafen.", "Er sagt, er habe gut geschlafen."],
          ["Ich bin müde.", "Sie gibt an, sie sei müde."],
          ["Ich fühle mich besser.", "Sie sagt, sie fühle sich besser."],
          ["Wir haben Angst.", "Sie sagen, sie hätten Angst."]
        ]
      },
      examples: [
        { tr: "Votre mère a dit qu'elle avait bien dormi.", note: "à l'oral : dass avec l'indicatif" },
        { tr: "Votre mère dit avoir bien dormi.", note: "Konjunktiv I : sie habe" },
        { tr: "La patiente déclare être fatiguée.", note: "rapport de soins : angeben + Konjunktiv I, sie sei" },
        { tr: "Le patient déclare ne pas avoir de douleur.", note: "er habe : une déclaration du patient, pas une mesure" },
        { tr: "Au téléphone, je ne peux malheureusement pas donner d'informations.", note: "Auskunft geben : renseigner sur demande" },
        { tr: "Votre père est d'accord pour que nous vous informions.", note: "damit einverstanden, dass... : le consentement vient d'abord" }
      ]
    },
    vocab: [
      "le proche (ein Angehöriger, pluriel die Angehörigen)",
      "le secret professionnel",
      "le renseignement (donné sur demande)",
      "le consentement",
      "d'accord",
      "la procuration de prévoyance (pour le jour où l'on ne pourra plus décider)",
      "déclarer, indiquer",
      "confidentiel",
      "transmettre, faire suivre",
      "l'entretien avec le médecin",
      "les heures de visite",
      "les soins palliatifs"
    ],
    dialogue: [
      "Bonjour, je suis la fille de Monsieur Schulz. Comment va mon père ?",
      "Bonjour, Madame Schulz. Votre père est d'accord pour que nous vous informions. Ce matin, il a dit avoir bien dormi.",
      "Et l'examen ? Qu'est-ce qu'on a trouvé ?",
      "Le médecin en parlera avec vous. Je peux volontiers vous fixer un entretien avec lui.",
      "Je peux parler au médecin encore aujourd'hui ?",
      "En ce moment, il est en réunion. Je lui transmets votre question.",
      "Merci. Ma sœur appellera peut-être aussi.",
      "Au téléphone, nous ne pouvons malheureusement pas donner d'informations. Le mieux, c'est qu'elle vienne avec vous à l'entretien avec le médecin."
    ],
    culture: {
      title: "Côté allemand : qui décide quand le patient ne peut pas",
      text: "<p>En Allemagne, le secret professionnel est prévu par le code pénal et vaut pour les médecins, les infirmières et les infirmiers. Le patient peut délier le personnel du secret envers des personnes précises, et l'établissement le note.</p><p>Quand le patient ne peut plus décider lui-même, c'est la personne qui a une <i>Vorsorgevollmacht</i> qui compte, une procuration rédigée à l'avance, ou bien un <i>Betreuer</i> désigné par le tribunal. Le cousin français le plus proche est le mandat de protection future, mais il n'a ni la même forme ni la même portée : ne suppose pas que les règles sont les mêmes. Qui sont ces personnes figure en général dans le dossier : si un proche dit avoir une procuration, on vérifie là ou on demande au médecin, on ne décide pas oralement dans le couloir. Ce qu'on peut dire et à qui, ce sont les règles de l'établissement et le médecin qui le fixent.</p>"
    },
    exercises: [
      {
        q: "Rapporte à la fille ce que son père a dit : « Ich habe gut geschlafen. » Quelle phrase est correcte ?",
        opts: [
          "Er hat gesagt, er habe gut geschlafen.",
          "Er hat gesagt, er hätte gut schlafen.",
          "Er hat gesagt, ich habe gut geschlafen."
        ],
        why: "Au discours indirect, le pronom passe à la troisième personne (<i>er</i>) et le verbe au Konjunktiv I : <b>er habe</b> gut geschlafen. <i>hätte ... schlafen</i> n'a pas de participe, et <i>ich habe</i> te fait parler toi."
      },
      {
        tr: "Le Konjunktiv I de sein : ich, er/sie, wir, sie.",
        why: "<i>Sei, sei, seien, seien</i> : la première et la troisième personne du singulier sont identiques et sans terminaison. C'est la forme la plus utilisée au discours indirect : <i>sie sei müde</i>."
      },
      {
        q: "Complète (dans le rapport) : « Die Patientin gibt an, sie ___ müde. »",
        hint: "Konjunktiv I de sein",
        why: "<b>sei</b> : dans le rapport, le Konjunktiv I montre que c'est une déclaration de la patiente. En allemand parlé, on entend aussi <i>wäre</i>."
      },
      {
        q: "Complète avec le Konjunktiv I de haben.",
        tr: "Le patient déclare ne pas avoir de douleur. Il dit avoir bien dormi.",
        why: "<i>er <b>habe</b> keine Schmerzen</i>, <i>er <b>habe</b> gut geschlafen</i> : radical <i>hab-</i> + <i>-e</i>, à la troisième personne."
      },
      {
        q: "Quelles phrases respectent le secret professionnel ?",
        opts: [
          "Am Telefon darf ich leider keine Auskunft geben.",
          "Ihr Vater hat Krebs, aber sagen Sie es ihm nicht.",
          "Das bespricht der Arzt mit Ihnen.",
          "Der Patient im Nachbarbett hat das auch.",
          "Ich frage Ihren Vater, ob wir Sie informieren dürfen."
        ],
        why: "On ne donne pas d'informations au téléphone, c'est le médecin qui annonce le diagnostic, et avant d'informer un proche on demande au patient. Les deux autres phrases révèlent des données qui ne concernent ni le proche ni toi."
      },
      {
        q: "Choisis le bon article défini pour chaque nom.",
        items: ["secret professionnel", "renseignement (donné sur demande)", "consentement", "entretien avec le médecin", "procuration de prévoyance", "téléphone"]
      },
      {
        q: "Associe chaque mot à son sens.",
        pairs: ["le secret professionnel", "le renseignement (donné sur demande)", "le consentement", "la procuration de prévoyance"]
      },
      {
        q: "Remets les mots dans l'ordre.",
        tr: "Votre père est d'accord pour que nous vous informions.",
        why: "<i>Ihr Vater ist damit einverstanden, dass wir Sie informieren.</i> <i>damit</i> annonce la subordonnée ; après <i>dass</i>, le verbe <i>informieren</i> va à la fin. Remarque : le français met ici un subjonctif (« pour que nous vous informions »), l'allemand garde l'indicatif."
      },
      {
        q: "Traduis pour la fille : « Votre mère dit qu'elle se sent mieux aujourd'hui. »",
        why: "<i>Ihre Mutter sagt, sie fühle sich heute besser</i>, avec le Konjunktiv I ; à l'oral, <i>Ihre Mutter sagt, dass sie sich heute besser fühlt</i> convient aussi. « Aujourd'hui », c'est <b>heute</b>."
      },
      {
        q: "La fille dans le service.",
        setting: "La fille de Monsieur Schulz demande des nouvelles. Son père a donné son accord pour qu'on l'informe, le médecin ne lui a pas encore parlé.",
        lines: [
          { tr: "Comment va mon père ?" },
          { tr: "Rapporte que ce matin il a dit avoir bien dormi.", answerTr: "Ce matin, il a dit avoir bien dormi." },
          { tr: "Qu'est-ce que l'examen a donné ?" },
          { tr: "Renvoie au médecin et propose un entretien.", answerTr: "Le médecin en parlera avec vous. Je peux volontiers vous fixer un entretien avec lui." },
          { tr: "Ma sœur appelle ce soir. Vous pouvez tout lui dire ?" },
          { tr: "Explique qu'au téléphone vous ne pouvez pas donner d'informations.", answerTr: "Au téléphone, nous ne pouvons malheureusement pas donner d'informations." }
        ]
      },
      {
        tr: "Le médecin en parlera avec vous. Je peux volontiers vous fixer un entretien avec lui.",
        why: "Dans <i>Arztgespräch</i>, l'accent tombe sur <b>Arzt</b>, le <b>sp</b> se prononce [ʃp] et le <b>ch</b> après <b>ä</b> se prononce [ç] ; dans <i>vereinbaren</i>, l'accent tombe sur <b>ein</b>."
      },
      {
        tr: "Au téléphone, je ne peux malheureusement pas donner d'informations.",
        why: "Dans <i>Telefon</i>, l'accent tombe sur la dernière syllabe, <b>fon</b>, alors qu'en français on ne l'entend pas ; dans <i>leider</i>, la diphtongue <b>ei</b> se prononce [aɪ] ; dans <i>Auskunft</i>, l'accent tombe sur <b>Aus</b>."
      }
    ]
  },
  "lesson:pfl-u07-l4": {
    theme: "Démence",
    title: "Les personnes atteintes de démence",
    objectives: [
      "parler à une personne atteinte de démence avec des phrases courtes et le verbe en deuxième position",
      "répondre selon la validation : accueillir l'émotion au lieu de corriger",
      "éviter le « nous » infantilisant et le ton qu'on prend avec les enfants",
      "reconnaître quand une confusion soudaine doit être signalée"
    ],
    theory: [
      {
        h: "Des phrases courtes, le verbe en deuxième position",
        p: "Avec une personne atteinte de démence, chaque phrase porte <strong>une seule information</strong>. On utilise des principales courtes, avec le verbe conjugué en <strong>deuxième position</strong> ; en première position on peut mettre le moment, qui oriente : <em><b>Jetzt</b> waschen Sie Ihr Gesicht.</em> <em><b>Nach dem Frühstück</b> kommt Ihre Tochter.</em> Pas de subordonnées, pas deux consignes dans la même phrase. On se présente à chaque fois, avec son prénom : <em>Ich bin Anna. Ich helfe Ihnen heute.</em> Et on tend l'objet en le nommant : <em>Hier ist Ihr Waschlappen.</em>"
      },
      {
        h: "La validation",
        p: "La <strong>Validation</strong> part d'une idée simple : les souvenirs se perdent, les émotions restent. Si Madame Lehmann veut rentrer chez elle parce que ses enfants sortent de l'école, la corriger (<em>Ihre Kinder sind doch erwachsen</em>) la met face à une perte et ne la calme pas. On nomme plutôt l'émotion (<em>Sie machen sich Sorgen um Ihre Kinder</em>) et on l'invite à raconter (<em>Erzählen Sie mir von Ihren Kindern</em>). Connaître sa <strong>Biografie</strong> aide à comprendre de quoi elle parle. Une chose est à distinguer : si une personne devient <strong>confuse tout à coup</strong>, ce n'est pas la démence que tu connais, et c'est un changement à signaler tout de suite au médecin."
      },
      {
        contrast: "En France aussi, on entend parfois « mamie », « ma puce » ou le tutoiement avec les personnes âgées en établissement, souvent dit avec affection. En Allemagne, ce ton sonne infantilisant : même avec une personne atteinte de démence, on dit <em>Sie</em> et <em>Frau Lehmann</em>, sauf si c'est elle qui demande autre chose. C'est pareil pour le « nous » des soins (« alors, on a bien mangé ? »), qu'en allemand on appelle souvent avec ironie le <em>Pflege-Wir</em> (<em>Haben wir heute schon gegessen?</em>) : on dit <em>Sie</em> quand c'est la personne qui agit. La syntaxe aide aussi : en allemand, la principale garde le verbe en deuxième position, alors que la subordonnée l'envoie à la fin, après tout le reste, et pour comprendre qui fait quoi il faut garder toute la phrase en tête. Le français, qui place le verbe tôt dans les deux cas, n'a pas ce problème. Des principales courtes enlèvent cet effort."
      },
      {
        trap: "<em>Demenz</em> et <em>Vergesslichkeit</em> ne sont pas synonymes : les oublis arrivent à tout le monde, la démence est une maladie qui change la vie de tous les jours. Au patient et aux proches, on ne dit pas <em>Sie ist halt dement</em>, mais <em>Frau Lehmann lebt mit einer Demenz.</em> Et <em>verwirrt</em> décrit un état, pas la personne : une <em>plötzliche Verwirrtheit</em> peut avoir une nouvelle cause physique, et on la signale, on ne la considère pas comme allant de soi."
      },
      {
        tip: "Avant de parler, place-toi devant la personne, à hauteur de ses yeux, et attends qu'elle te regarde. Puis une phrase, une pause, la phrase suivante. Si elle ne répond pas, répète avec les mêmes mots : pour elle, une phrase reformulée est une nouvelle phrase à comprendre."
      }
    ],
    grammar: {
      title: "Des phrases qu'on peut suivre",
      note: "Une information par phrase, le verbe conjugué en <b>deuxième position</b>, le moment au début. On accueille l'émotion, on ne corrige pas.",
      table: {
        head: ["au lieu de", "mieux"],
        rows: [
          ["Ihre Kinder sind doch längst erwachsen.", "Sie machen sich Sorgen um Ihre Kinder."],
          ["Haben wir heute schon gefrühstückt?", "Haben Sie schon gefrühstückt?"],
          ["Wenn Sie fertig sind und gefrühstückt haben, kommt Ihre Tochter.", "Nach dem Frühstück kommt Ihre Tochter."],
          ["Das habe ich Ihnen doch schon gesagt.", "Ich bin Anna. Ich helfe Ihnen heute."]
        ]
      },
      examples: [
        { tr: "Je suis Anna. Aujourd'hui, c'est moi qui vous aide.", note: "se présenter à chaque fois, deux phrases courtes" },
        { tr: "Maintenant, vous vous lavez le visage.", note: "jetzt en première position, le verbe waschen en deuxième" },
        { tr: "Voici votre gant de toilette.", note: "nommer l'objet en le tendant" },
        { tr: "Vous vous faites du souci pour vos enfants.", note: "validation : nommer l'émotion" },
        { tr: "Parlez-moi de vos enfants.", note: "inviter à raconter, au lieu de corriger" },
        { tr: "Après le petit-déjeuner, votre fille vient.", note: "le moment en première position, le verbe kommt en deuxième" }
      ]
    },
    vocab: [
      "la démence",
      "les oublis, la tendance à oublier",
      "confus",
      "l'état confusionnel",
      "la désorientation",
      "la validation (méthode Validation)",
      "le sentiment, l'émotion",
      "le souvenir",
      "la biographie, l'histoire de vie",
      "le rythme de la journée",
      "contredire",
      "familier, connu"
    ],
    dialogue: [
      "Bonjour, Madame Lehmann. Je suis Anna. Aujourd'hui, je vous aide pour la toilette.",
      "Je dois rentrer à la maison. Mes enfants reviennent tout de suite de l'école.",
      "Vous vous faites du souci pour vos enfants.",
      "Oui. Quand ils rentrent, ils ont faim, n'est-ce pas ?",
      "Vos enfants comptent beaucoup pour vous. Parlez-moi de vos enfants.",
      "Peter faisait toujours des bêtises. Et Susanne chantait si bien.",
      "C'est beau. Maintenant, vous vous lavez le visage. Voici votre gant de toilette.",
      "Ah, oui. Ça, je sais le faire toute seule."
    ],
    culture: {
      title: "Côté allemand : validation et travail biographique",
      text: "<p>La méthode <i>Validation</i> est née aux États-Unis avec Naomi Feil ; en Allemagne, sa variante <i>Integrative Validation</i>, développée par Nicole Richard, est très répandue. Dans les établissements pour personnes âgées, on en parle en formation et en réunion d'équipe, et beaucoup d'infirmières la connaissent sous ce nom.</p><p>On s'appuie aussi sur la <i>Biografiearbeit</i> : à l'entrée, les proches racontent le métier, les habitudes, les noms importants et les petits rituels de la personne. Savoir que Madame Lehmann a élevé deux enfants et se levait tôt pour préparer le petit-déjeuner aide à comprendre ce qu'elle cherche quand elle dit qu'elle doit rentrer chez elle.</p>"
    },
    exercises: [
      {
        q: "Madame Lehmann dit : « Ich muss nach Hause, meine Kinder kommen aus der Schule. » Quelle réponse suit la validation ?",
        opts: [
          "Ihre Kinder sind doch schon lange erwachsen.",
          "Sie machen sich Sorgen um Ihre Kinder.",
          "Sie können nicht nach Hause, Sie wohnen jetzt hier."
        ],
        why: "La validation accueille l'émotion : <b>Sie machen sich Sorgen um Ihre Kinder.</b> Corriger les faits, comme dans les deux autres réponses, ne la calme pas et la met face à une perte."
      },
      {
        q: "Complète : « Nach dem Frühstück ___ Ihre Tochter. »",
        hint: "kommen, en deuxième position",
        why: "<b>kommt</b> : <i>Nach dem Frühstück</i> occupe la première position, donc le verbe conjugué vient juste après et le sujet <i>Ihre Tochter</i> le suit."
      },
      {
        q: "Complète la phrase.",
        tr: "Maintenant, vous vous lavez le visage. Voici votre gant de toilette.",
        why: "<i>Jetzt <b>waschen</b> Sie Ihr Gesicht</i> et <i>Hier <b>ist</b> Ihr Waschlappen</i> : dans les deux phrases, le verbe conjugué est en deuxième position, après <i>jetzt</i> et <i>hier</i>."
      },
      {
        q: "Quelles phrases conviennent à une personne atteinte de démence ?",
        opts: [
          "Jetzt waschen Sie Ihr Gesicht.",
          "Nachdem Sie sich gewaschen haben und bevor das Frühstück kommt, ziehen Sie sich an.",
          "Hier ist Ihr Waschlappen.",
          "Na, mein Schätzchen, haben wir heute gut gegessen?",
          "Erzählen Sie mir von Ihren Kindern."
        ],
        why: "Les phrases courtes, avec une seule information et le <i>Sie</i>, conviennent. La deuxième phrase a deux subordonnées avant le verbe principal ; la quatrième utilise un petit nom affectueux et le « nous » infantilisant."
      },
      {
        q: "Choisis le bon article défini pour chaque nom.",
        items: ["démence", "sentiment, émotion", "souvenir", "gant de toilette", "visage", "petit-déjeuner"]
      },
      {
        q: "Associe chaque mot à son sens.",
        pairs: ["la démence", "les oublis", "la désorientation", "la validation"]
      },
      {
        q: "Remets les mots dans l'ordre.",
        tr: "Après le petit-déjeuner, votre fille vient.",
        why: "<i>Nach dem Frühstück kommt Ihre Tochter.</i> Le moment en première position oriente, le verbe <i>kommt</i> est en deuxième."
      },
      {
        q: "Traduis avec une phrase courte : « Aujourd'hui, c'est mardi. »",
        why: "<i>Heute ist Dienstag.</i> <i>Heute haben wir Dienstag</i> convient aussi. « Aujourd'hui », c'est <b>heute</b>, et le verbe est en deuxième position."
      },
      {
        q: "Un matin avec Madame Lehmann.",
        setting: "Madame Lehmann vit avec une démence. C'est le matin et tu veux l'aider à faire sa toilette.",
        lines: [
          { tr: "Je dois rentrer à la maison. Mes enfants m'attendent." },
          { tr: "Accueille son inquiétude, sans la corriger.", answerTr: "Vous vous faites du souci pour vos enfants." },
          { tr: "Mais vous êtes qui, vous ?" },
          { tr: "Présente-toi calmement.", answerTr: "Je suis Anna. Aujourd'hui, c'est moi qui vous aide." },
          { tr: "Je n'y arrive plus." },
          { tr: "Encourage-la et tends-lui le gant de toilette.", answerTr: "Mais si, vous y arrivez. Voici votre gant de toilette." }
        ]
      },
      {
        tr: "Bonjour, Madame Lehmann. Je suis Anna. Aujourd'hui, je vous aide pour la toilette.",
        why: "Dans <i>Lehmann</i>, le <b>h</b> ne se prononce pas et allonge le <b>e</b> ; dans <i>heute</i>, la diphtongue <b>eu</b> se prononce [ɔʏ], le <b>h</b> initial est aspiré, contrairement au français ; dans <i>Waschen</i>, le <b>W</b> se prononce [v] et le <b>sch</b> [ʃ]."
      },
      {
        tr: "Parlez-moi de vos enfants.",
        why: "Dans <i>Erzählen</i>, le <b>z</b> se prononce [ts] et l'accent tombe sur <b>zäh</b> ; dans <i>von</i>, le <b>v</b> se prononce [f] ; dans <i>Kindern</i>, l'accent tombe sur <b>Kin</b>."
      }
    ]
  },
  "lesson:pfl-u07-test": {
    theme: "Contrôle",
    title: "Test : Parler avec les patients et leurs proches",
    objectives: [
      "vérifier l'explication avec des mots simples, les demandes polies, le discours indirect, le secret professionnel et la communication avec les personnes atteintes de démence"
    ],
    theory: [
      {
        p: "Onze questions sur toute l'unité. On réussit avec 70 %. Les patients et les situations sont inventés et ne servent que d'exemple : les règles sur qui peut être informé et sur la préparation d'un examen sont fixées par le médecin et l'établissement."
      }
    ],
    exercises: [
      {
        q: "Le fils d'un patient demande : « Was hat mein Vater genau? » Le médecin ne lui a pas encore parlé.",
        opts: [
          "Das bespricht der Arzt mit Ihnen.",
          "Ich darf das eigentlich nicht sagen, aber es ist ernst.",
          "Das weiß ich nicht, fragen Sie jemand anderen."
        ],
        why: "C'est le médecin qui annonce le diagnostic : <b>Das bespricht der Arzt mit Ihnen.</b> La deuxième réponse laisse deviner un diagnostic, la troisième n'oriente pas la question."
      },
      {
        q: "Complète : « Ihre Mutter sagt, sie ___ keine Schmerzen. »",
        hint: "Konjunktiv I de haben",
        why: "<b>habe</b> : radical <i>hab-</i> + <i>-e</i>. C'est la forme du discours indirect."
      },
      {
        q: "Complète : « ___ Sie mir kurz helfen? »",
        hint: "Konjunktiv II, demande polie",
        why: "<b>Könnten</b> Sie mir kurz helfen? <b>Würden</b> convient aussi. Dans la question, le verbe conjugué est en première position."
      },
      {
        tr: "Le Konjunktiv II de werden, à toutes les personnes.",
        why: "<i>Würde, würdest, würde, würden, würdet, würden</i> : du Präteritum <i>wurde</i> avec l'Umlaut, <b>ü</b>."
      },
      {
        q: "Associe chaque mot à son sens.",
        pairs: ["la gastroscopie (terme technique)", "le secret professionnel", "la validation", "la procuration de prévoyance"]
      },
      {
        q: "Quelles phrases utiliserais-tu avec un patient ou un proche ?",
        opts: [
          "Morgen früh bekommen Sie eine Magenspiegelung.",
          "Morgen erfolgt eine ÖGD.",
          "Ich verstehe, dass Sie Angst haben.",
          "Pat. gibt an, sie habe keine Schmerzen.",
          "Wäre es Ihnen recht, wenn ich kurz bei Ihnen bleibe?"
        ],
        why: "<i>ÖGD</i> est un sigle technique et <i>Pat. gibt an...</i> relève du style du rapport de soins : ils conviennent entre collègues et dans la documentation, pas avec le patient."
      },
      {
        q: "Complète avec le Konjunktiv I et le Konjunktiv II.",
        tr: "La patiente déclare être fatiguée. Cela vous va si je repasse plus tard ?",
        why: "<i>sie <b>sei</b> müde</i> : Konjunktiv I de sein, pour rapporter. <i><b>Wäre</b> es Ihnen recht</i> : Konjunktiv II de sein, pour demander avec égards."
      },
      {
        q: "Remets les mots dans l'ordre.",
        tr: "Je comprends que vous soyez inquiet.",
        why: "<i>Ich verstehe, dass Sie sich Sorgen machen.</i> Après <i>dass</i>, le verbe <i>machen</i> va à la fin ; le pronom <i>sich</i> suit tout de suite le sujet <i>Sie</i>. Le français met ici un subjonctif, l'allemand garde l'indicatif."
      },
      {
        q: "Choisis le bon article défini pour chaque nom.",
        items: ["diagnostic", "renseignement (donné sur demande)", "consentement", "sentiment, émotion", "progrès", "entretien avec le médecin"]
      },
      {
        tr: "Je comprends que vous ayez peur. Asseyez-vous donc d'abord au bord du lit.",
        why: "Dans <i>Angst</i>, le <b>ng</b> se prononce [ŋ], sans g séparé ; dans <i>Bettkante</i>, l'accent tombe sur <b>Bett</b> ; <i>doch</i> et <i>mal</i> restent sans accent."
      },
      {
        tr: "Le médecin en parlera avec vous.",
        why: "Dans <i>bespricht</i>, l'accent tombe sur <b>spricht</b>, le <b>sp</b> se prononce [ʃp] et le <b>ch</b> [ç] ; dans <i>Ihnen</i>, le <b>ih</b> est un i long."
      }
    ]
  }
});
