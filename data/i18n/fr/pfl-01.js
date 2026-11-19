/* ============================================================
   Textes dans la langue de l'élève (fr) pour data/core/pfl-01.js, unité pfl-u01.
   Les clés renvoient aux id de la couche neutre ; les tableaux se
   joignent par index, leur longueur doit donc correspondre à core.
   Vérifié par scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("fr", {
  "unit:pfl-u01": {
    title: "Accueil et anamnèse",
    grammarNote: "le Sie avec le patient · le verbe en deuxième position · le datif avec wehtun, helfen, fehlen et mir ist übel · le Perfekt pour l'histoire médicale · mots composés et paires Fachsprache / Laiensprache"
  },
  "lesson:pfl-u01-l1": {
    theme: "Dans le service",
    title: "Bonjour, je suis votre infirmière",
    objectives: [
      "se présenter au patient avec son prénom, son nom et sa fonction",
      "vérifier l'identité du patient (nom, date de naissance, bracelet)",
      "toujours vouvoyer (Sie) les patients adultes et leurs proches",
      "garder le verbe conjugué en deuxième position, même quand la phrase commence par jetzt, gleich, heute"
    ],
    theory: [
      {
        h: "Se présenter dans le service",
        p: "Dans un service allemand, on se présente avec son <strong>prénom et son nom</strong> et avec sa fonction : <em>Guten Tag, mein Name ist Elena Marin. Ich bin heute Ihre Pflegefachkraft.</em> Le patient t'appellera <em>Frau Marin</em> ou <em>Herr ...</em>. Juste après, on vérifie l'identité : <em>Wie heißen Sie, bitte? Wie ist Ihr Geburtsdatum?</em> et on contrôle le bracelet, <em>das Patientenarmband</em>. La question est ouverte exprès : on ne demande pas « Sie sind Herr Brandt, oder? », parce qu'un patient confus répond oui à tout."
      },
      {
        h: "Le verbe en deuxième position",
        p: "Dans la proposition principale, le verbe conjugué est <strong>à la deuxième place</strong>. Si tu mets un adverbe de temps en tête, le sujet passe <strong>après</strong> le verbe : <em>Jetzt bringe ich Sie auf Ihr Zimmer. Gleich mache ich mit Ihnen das Aufnahmegespräch.</em> Dans la question avec mot interrogatif, c'est pareil (<em>Wie heißen Sie?</em>) ; dans la question fermée, le verbe vient en premier (<em>Haben Sie noch Fragen?</em>). Avec un modal, le modal est à la deuxième place et l'infinitif à la fin : <em>Ich möchte Ihnen kurz ein paar Fragen stellen.</em> Dans la question fermée, le modal passe à la première place et l'infinitif reste à la fin : <em>Darf ich Ihnen kurz ein paar Fragen stellen?</em>"
      },
      {
        contrast: "Le vouvoiement français t'aide : avec les patients adultes et les proches, l'allemand vouvoie <strong>par défaut</strong>, comme un service hospitalier en France. Mais le français de l'hôpital connaît des glissements que l'allemand n'a pas : le « on » infantilisant (« alors, comment on va aujourd'hui ? ») ou le « papy » affectueux. En allemand, ces glissements sont mal vus dans un cadre professionnel : <em>Wie geht es Ihnen, Herr Brandt?</em>, et le <em>du</em> reste pour les collègues, si le service le pratique. Attention à la forme : <em>vous</em> est une deuxième personne du pluriel, alors que <em>Sie</em> se conjugue comme la troisième du pluriel et prend une majuscule, de même que le possessif et le datif : <em>Ihre Pflegefachkraft, Ihr Zimmer, Kann ich Ihnen helfen?</em> Enfin, dans la phrase déclarative, le français garde le sujet devant le verbe et le pronom complément devant lui (« Maintenant je vous emmène dans votre chambre ») ; l'allemand inverse après un adverbe en tête et met le pronom après le verbe : <em>Jetzt bringe ich Sie</em>. « Jetzt ich bringe Sie » s'entend tout de suite."
      },
      {
        trap: "Le mot « infirmière » a un équivalent courant, <em>Krankenschwester</em>, mais ce n'est plus le nom de la profession : depuis 2020, le titre est <em>Pflegefachfrau</em> / <em>Pflegefachmann</em>, et <em>Pflegefachkraft</em> est le terme neutre. <em>Die Station</em> est le service, pas une station. <em>Die Ambulanz</em> est le service de consultations externes de l'hôpital, pas l'ambulance : celle-ci se dit <em>der Krankenwagen</em> ou <em>der Rettungswagen</em>. Pour « hospitaliser », on dit <em>stationär aufnehmen</em> (<em>Wir nehmen Sie heute stationär auf</em>), et <em>die Aufnahme</em> est à la fois l'admission et le bureau des admissions."
      },
      {
        tip: "Avant de quitter la chambre, montre toujours la sonnette : <em>Wenn Sie Hilfe brauchen, drücken Sie bitte die Klingel.</em> C'est une phrase que tu diras des dizaines de fois par jour : l'apprendre par cœur, avec le verbe à la fin après <em>wenn</em>, te libère la tête pour le reste."
      }
    ],
    grammar: {
      title: "Où se place le verbe",
      note: "Dans la principale, le verbe conjugué est en <b>deuxième position</b>, quoi qu'il y ait en tête. Dans la question fermée, il est en <b>première</b>. Avec le patient, toujours <b>Sie</b>, <b>Ihr</b>, <b>Ihnen</b>.",
      table: {
        head: ["type de phrase", "exemple", "position du verbe"],
        rows: [
          ["question en W-", "Wie heißen Sie, bitte?", "2e, le sujet suit"],
          ["question fermée", "Haben Sie noch Fragen?", "1re"],
          ["adverbe en tête", "Jetzt bringe ich Sie auf Ihr Zimmer.", "2e, le sujet après le verbe"],
          ["avec un modal", "Darf ich Ihnen kurz ein paar Fragen stellen?", "modal en 1re ou 2e, infinitif à la fin"]
        ]
      },
      examples: [
        { tr: "Bonjour, je m'appelle Elena Marin. Aujourd'hui, je suis votre infirmière.", note: "prénom, nom et fonction : la présentation standard" },
        { tr: "Comment vous appelez-vous, s'il vous plaît ?", note: "question ouverte pour vérifier l'identité" },
        { tr: "Quelle est votre date de naissance ?", note: "deuxième vérification de l'identité" },
        { tr: "Maintenant, je vous emmène dans votre chambre.", note: "jetzt en tête : le sujet ich passe après le verbe" },
        { tr: "Avez-vous encore des questions ?", note: "question fermée : verbe en première position" },
        { tr: "Puis-je vous poser rapidement quelques questions ?", note: "modal dürfen, infinitif stellen à la fin" }
      ]
    },
    vocab: [
      "le service (auf Station : dans le service)",
      "l'infirmière, l'infirmier (terme neutre)",
      "l'infirmière (titre professionnel)",
      "l'infirmier (titre professionnel)",
      "le patient (die Patientin : la patiente)",
      "l'admission, le bureau des admissions",
      "l'entretien d'accueil",
      "la chambre",
      "la sonnette d'appel",
      "le bracelet d'identification",
      "admettre, hospitaliser (stationär aufnehmen : hospitaliser dans un service)",
      "se présenter"
    ],
    dialogue: [
      "Bonjour, monsieur Brandt. Je m'appelle Elena Marin, aujourd'hui je suis votre infirmière.",
      "Bonjour, madame Marin.",
      "Puis-je voir un instant votre bracelet ? Quelle est votre date de naissance, s'il vous plaît ?",
      "Je suis né le 12 mars 1950.",
      "Merci. Maintenant, je vous emmène dans votre chambre. Voici votre lit, près de la fenêtre.",
      "Très bien, merci.",
      "Si vous avez besoin d'aide, appuyez sur la sonnette. Dans un instant, nous faisons ensemble l'entretien d'accueil.",
      "D'accord."
    ],
    culture: {
      title: "Regard allemand : comment s'appelle la personne qui soigne",
      text: "<p>Jusqu'en 2003, la profession s'appelait <i>Krankenschwester</i> ou <i>Krankenpfleger</i> ; à partir de 2004, <i>Gesundheits- und Krankenpflegerin</i>. Avec la réforme entrée en vigueur en 2020, la formation est devenue généraliste et le titre est <i>Pflegefachfrau</i> ou <i>Pflegefachmann</i>. Dans les services, tous ces noms coexistent, et beaucoup de patients âgés t'appelleront encore <i>Schwester</i> : ce n'est pas une erreur à corriger, mais présente-toi avec ton nom de famille.</p><p>À côté de l'infirmière travaillent des métiers qui portent d'autres noms en France : la <i>Pflegehilfskraft</i> ou <i>Pflegeassistenz</i>, avec une formation plus courte, à peu près comparable à l'aide-soignante, et, auprès des personnes âgées, l'<i>Altenpflegerin</i>. Qui a été formé à l'étranger n'obtient le titre allemand qu'après la reconnaissance, l'<i>Anerkennung</i> : en attendant, on lit souvent dans les offres d'emploi <i>Pflegefachkraft in Anerkennung</i>.</p>"
    },
    exercises: [
      {
        q: "Tu entres dans la chambre d'un nouveau patient. Comment te présentes-tu ?",
        opts: [
          "Hallo, ich bin Elena, deine Krankenschwester.",
          "Guten Tag, ich bin Frau Marin, Ihre Pflegefachkraft.",
          "Guten Tag, ich bin Elena, deine Pflegefachkraft."
        ],
        why: "Avec le patient, on emploie le <b>Sie</b>, donc <i>Ihre</i> avec une majuscule, et on se présente avec son nom de famille. <i>Krankenschwester</i> n'est plus le titre de la profession."
      },
      {
        q: "Quelles phrases ont le verbe au bon endroit ?",
        opts: [
          "Jetzt bringe ich Sie auf Ihr Zimmer.",
          "Jetzt ich bringe Sie auf Ihr Zimmer.",
          "Haben Sie noch Fragen?",
          "Gleich mache ich mit Ihnen das Aufnahmegespräch.",
          "Gleich ich mache mit Ihnen das Aufnahmegespräch."
        ],
        why: "Après <i>jetzt</i> et <i>gleich</i> en tête, le verbe reste en deuxième position et le sujet <i>ich</i> passe après : <i>bringe ich</i>, <i>mache ich</i>. Dans la question fermée, le verbe ouvre la phrase."
      },
      {
        q: "Complète : « Guten Tag, ich bin heute ___ Pflegefachkraft. »",
        hint: "possessif de Sie",
        why: "<b>Ihre</b>, avec une majuscule : le possessif du Sie de politesse. <i>Pflegefachkraft</i> est féminin, donc <i>Ihre</i> et non <i>Ihr</i>."
      },
      {
        q: "Choisis le bon article défini pour chaque nom.",
        items: ["service", "chambre", "sonnette", "entretien d'accueil", "bracelet d'identification", "infirmière, infirmier"]
      },
      {
        q: "Associe chaque mot à son sens.",
        pairs: ["infirmière", "infirmier", "service", "sonnette d'appel"]
      },
      {
        q: "Remets les mots dans l'ordre.",
        tr: "Maintenant, je vous emmène dans votre chambre.",
        why: "<i>Jetzt bringe ich Sie auf Ihr Zimmer.</i> Si tu commences par <i>jetzt</i>, le verbe <i>bringe</i> vient tout de suite après, puis le sujet <i>ich</i>."
      },
      {
        q: "Complète la phrase.",
        tr: "Si vous avez besoin d'aide, appuyez sur la sonnette.",
        why: "<i>Wenn Sie Hilfe brauchen, drücken Sie bitte die Klingel</i> : après <i>wenn</i>, le verbe <i>brauchen</i> va à la fin, et la principale commence par le verbe <i>drücken</i>."
      },
      {
        q: "Traduis : « Puis-je vous poser quelques questions ? »",
        why: "<i>Darf ich Ihnen ein paar Fragen stellen</i> : <i>Fragen stellen</i> veut dire « poser des questions », et la personne à qui tu les poses est au datif, <i>Ihnen</i>. <i>Darf ich</i> est plus poli que <i>Kann ich</i>, mais les deux conviennent."
      },
      {
        q: "Un patient arrive dans le service.",
        setting: "Tu es l'infirmière de garde et tu accueilles monsieur Brandt.",
        lines: [
          { tr: "Bonjour. Je m'appelle Brandt, je viens pour l'admission." },
          { tr: "Réponds : salue le patient et présente-toi.", answerTr: "Bonjour, monsieur Brandt. Je suis madame Marin, votre infirmière." },
          { tr: "Où est ma chambre ?" },
          { tr: "Réponds que tu l'emmènes maintenant dans sa chambre.", answerTr: "Maintenant, je vous emmène dans votre chambre." },
          { tr: "Et si j'ai besoin d'aide la nuit ?" },
          { tr: "Réponds qu'il doit alors appuyer sur la sonnette.", answerTr: "Alors appuyez sur la sonnette, s'il vous plaît." }
        ]
      },
      {
        tr: "Bonjour, je m'appelle Elena Marin. Aujourd'hui, je suis votre infirmière et maintenant je vous emmène dans votre chambre.",
        why: "Dans <i>Pflegefachkraft</i>, le <b>pf</b> se prononce avec les deux consonnes, et le <b>ch</b> après <b>a</b> est [x] ; dans <i>heute</i>, le <b>eu</b> se lit [ɔʏ] ; dans <i>Zimmer</i>, le <b>z</b> est [ts]."
      },
      {
        tr: "Puis-je vous poser rapidement quelques questions ?",
        why: "Dans <i>Darf</i>, le <b>r</b> après la voyelle est d'ordinaire vocalisé et à peine prononcé ; dans <i>Ihnen</i>, le <b>h</b> ne se prononce pas et allonge le <b>i</b> ; dans <i>stellen</i>, le <b>st</b> initial est [ʃt]."
      }
    ]
  },
  "lesson:pfl-u01-l2": {
    theme: "Symptômes",
    title: "Où avez-vous mal ?",
    objectives: [
      "demander où et depuis quand le patient a mal",
      "employer le datif avec wehtun, helfen, fehlen et avec mir ist übel, mir ist schwindelig",
      "reconnaître les symptômes les plus fréquents dits avec des mots courants",
      "répondre à un patient qui dit ne pas se sentir bien"
    ],
    theory: [
      {
        h: "Celui qui a mal est au datif",
        p: "En allemand, beaucoup de symptômes se disent avec la personne au <strong>datif</strong> : <em>Mir tut der Bauch weh</em> (j'ai mal au ventre), <em>Mir ist übel</em> (j'ai la nausée), <em>Mir ist schwindelig</em> (j'ai la tête qui tourne). Le sujet grammatical de <em>wehtun</em> est la partie du corps : <em>der Bauch tut weh</em>, <em>die Beine tun weh</em>. Avec le patient, la question est toujours au datif de politesse : <em>Wo tut es Ihnen weh? Ist Ihnen übel?</em>"
      },
      {
        h: "helfen et fehlen",
        p: "<strong>helfen</strong> (aider) et <strong>fehlen</strong> (manquer) demandent eux aussi le datif : <em>Kann ich Ihnen helfen?</em>, <em>Was fehlt Ihnen?</em> La seconde est la question classique pour « qu'est-ce qui ne va pas ? », « de quoi souffrez-vous ? ». Les pronoms au datif à savoir par cœur : <em>mir, dir, ihm, ihr, uns, euch, ihnen</em> et <em>Ihnen</em> de politesse."
      },
      {
        contrast: "Le français dit presque tout avec <em>avoir</em> : « j'ai mal à la tête », « j'ai la nausée », « j'ai des vertiges ». L'allemand change de construction : la personne passe au <strong>datif</strong> et le verbe devient <em>wehtun</em> ou <em>sein</em> : <em>Mir tut der Kopf weh</em>, <em>Mir ist übel</em>, <em>Mir ist schwindelig</em>. Calqué sur le français, « Ich habe übel » ou « Ich bin übel » ne se disent pas ; avec le nom, en revanche, <em>Ich habe Übelkeit</em> est correct. Le patient allemand dit aussi très souvent <em>Ich habe Kopfschmerzen</em>, au pluriel, là où le français dit « mal de tête » au singulier. Dernier piège venu du français : « aider quelqu'un » a un complément direct, mais <em>helfen</em> veut le datif. On dit <em>Kann ich Ihnen helfen?</em>, jamais « Kann ich Sie helfen? »."
      },
      {
        trap: "<em>Wo tut es Sie weh?</em> est faux : avec <em>wehtun</em>, la personne est au datif, <em>Ihnen</em>. Ne confonds pas non plus <em>Mir ist übel</em> avec <em>Mir ist schlecht</em> : à l'oral, cette phrase peut vouloir dire nausée, mais aussi un malaise général. Si le patient dit <em>Mir ist schlecht</em>, demande : <em>Ist Ihnen übel? Müssen Sie erbrechen?</em> Dernier faux ami : <em>der Schwindel</em> est le vertige, mais aussi « l'escroquerie » ; dans le service, c'est toujours le premier sens."
      },
      {
        tip: "Fais montrer l'endroit : <em>Können Sie es mir zeigen?</em> C'est plus rapide et plus précis que toute description, et ça marche même quand le patient n'a pas les mêmes mots que toi. Puis demande depuis quand : <em>Seit wann?</em>"
      }
    ],
    grammar: {
      title: "Le datif des symptômes",
      note: "La personne qui a mal est au <b>datif</b> : <b>mir</b> tut ... weh, <b>mir</b> ist übel. Avec le patient : <b>Ihnen</b>.",
      table: {
        head: ["personne", "datif", "exemple"],
        rows: [
          ["ich", "mir", "Mir ist schwindelig."],
          ["er", "ihm", "Ihm tut der Rücken weh."],
          ["sie", "ihr", "Ihr ist übel."],
          ["wir", "uns", "Uns fehlt nichts."],
          ["Sie", "Ihnen", "Wo tut es Ihnen weh?"]
        ]
      },
      examples: [
        { tr: "Où avez-vous mal ?", note: "wehtun : la personne au datif" },
        { tr: "J'ai mal au ventre.", note: "der Bauch est le sujet, mir le datif" },
        { tr: "J'ai la tête qui tourne.", note: "sein + datif, pas haben" },
        { tr: "Il a la nausée.", note: "ihm : datif de er" },
        { tr: "Qu'est-ce qui ne va pas ? De quoi souffrez-vous ?", note: "fehlen + datif" },
        { tr: "Puis-je vous aider ?", note: "helfen + datif" }
      ]
    },
    vocab: [
      "la douleur (Schmerzen haben : avoir mal)",
      "faire mal (es tut mir weh : ça me fait mal)",
      "le mal de tête (en général au pluriel)",
      "le ventre",
      "la nausée",
      "le vertige, les étourdissements",
      "l'essoufflement, le souffle court",
      "la diarrhée",
      "la constipation",
      "nauséeux (mir ist übel : j'ai la nausée)",
      "pris de vertige (mir ist schwindelig : j'ai la tête qui tourne)",
      "aider (avec le datif)"
    ],
    dialogue: [
      "Monsieur Brandt, qu'est-ce qui ne va pas ? Pourquoi êtes-vous ici aujourd'hui ?",
      "Depuis trois jours, j'ai mal au ventre.",
      "Où avez-vous mal, exactement ? Pouvez-vous me montrer ?",
      "Ici, en bas à droite.",
      "Avez-vous aussi la nausée ?",
      "Oui, j'ai la nausée, et hier j'ai eu la diarrhée.",
      "Êtes-vous aussi essoufflé, avez-vous des vertiges ?",
      "Non, ça non."
    ],
    exercises: [
      {
        q: "Le patient veut dire « J'ai mal à la tête ». Quelle phrase est correcte ?",
        opts: ["Ich tut der Kopf weh.", "Mich tut der Kopf weh.", "Mir tut der Kopf weh."],
        why: "Avec <i>wehtun</i>, la personne est au <b>datif</b> : <i>mir</i>. Le sujet est <i>der Kopf</i>, c'est pourquoi le verbe est <i>tut</i>."
      },
      {
        tr: "Le présent de helfen, à toutes les personnes.",
        why: "<i>Helfe, hilfst, hilft, helfen, helft, helfen</i> : à la deuxième et à la troisième personne du singulier, le <b>e</b> devient <b>i</b>. Et celui qui reçoit l'aide est au datif : <i>Ich helfe Ihnen</i>."
      },
      {
        q: "Complète : « Kann ich ___ helfen? » (au patient)",
        hint: "Sie au datif",
        why: "<b>Ihnen</b> : <i>helfen</i> demande le datif, et le datif de politesse est <i>Ihnen</i>, avec une majuscule."
      },
      {
        q: "Complète avec le datif de er.",
        tr: "Il a mal au dos et il a la nausée.",
        why: "<i>Ihm tut der Rücken weh, und ihm ist übel</i> : les deux expressions demandent le datif, <i>ihm</i>."
      },
      {
        q: "Associe chaque phrase du patient à son sens.",
        pairs: ["j'ai la nausée", "j'ai la tête qui tourne", "je manque de souffle", "j'ai la diarrhée"]
      },
      {
        q: "Choisis le bon article défini pour chaque nom.",
        items: ["ventre", "nausée", "vertige", "essoufflement", "diarrhée", "constipation"]
      },
      {
        q: "Remets les mots dans l'ordre.",
        tr: "Depuis hier, j'ai mal à la tête.",
        why: "<i>Seit gestern tut mir der Kopf weh.</i> <i>Seit gestern</i> en tête, le verbe <i>tut</i> en deuxième position, <i>weh</i> à la fin."
      },
      {
        q: "Traduis (au patient) : « Avez-vous la tête qui tourne ? »",
        why: "<i>Ist Ihnen schwindelig?</i> Avec <i>sein</i> et le datif, pas avec <i>haben</i>. On écrit aussi <i>schwindlig</i>."
      },
      {
        q: "Une patiente sonne.",
        setting: "Tu entres dans la chambre : la patiente dit qu'elle ne se sent pas bien.",
        lines: [
          { tr: "Bonjour. Je ne me sens pas bien du tout." },
          { tr: "Demande-lui ce qui ne va pas.", answerTr: "Qu'est-ce qui ne va pas ?" },
          { tr: "J'ai mal au ventre." },
          { tr: "Demande-lui où elle a mal, exactement.", answerTr: "Où avez-vous mal, exactement ?" },
          { tr: "Ici, à gauche. Et j'ai la nausée." },
          { tr: "Demande-lui depuis quand elle a la nausée.", answerTr: "Depuis quand avez-vous la nausée ?" }
        ]
      },
      {
        tr: "Depuis trois jours, j'ai mal au ventre. J'ai la nausée, et hier j'ai eu la diarrhée.",
        why: "Dans <i>Bauch</i>, le <b>au</b> est [aʊ] et le <b>ch</b> final est [x] ; dans <i>übel</i>, le <b>ü</b> est arrondi comme le <b>u</b> de « tu » ; dans <i>Durchfall</i>, le <b>ch</b> après <b>r</b> est [ç]."
      },
      {
        tr: "Où avez-vous mal, exactement ?",
        why: "Dans <i>genau</i>, le <b>g</b> est toujours dur ; dans <i>tut</i>, le <b>u</b> est long ; dans <i>weh</i>, le <b>w</b> se lit [v] et le <b>h</b> allonge le <b>e</b>."
      }
    ]
  },
  "lesson:pfl-u01-l3": {
    theme: "L'histoire médicale",
    title: "Le questionnaire d'anamnèse",
    objectives: [
      "remplir avec le patient le questionnaire d'anamnèse",
      "demander les antécédents, les opérations, les allergies et les médicaments",
      "employer le Perfekt pour ce qui s'est déjà passé, avec haben ou avec sein",
      "demander le plan de médication et quand le patient a pris ses médicaments pour la dernière fois"
    ],
    theory: [
      {
        h: "Les questions du questionnaire",
        p: "Le <strong>Anamnesebogen</strong> est le questionnaire que l'on remplit à l'admission. Les questions fixes : <em>Haben Sie Vorerkrankungen?</em> (antécédents), <em>Hatten Sie schon einmal eine Operation?</em>, <em>Haben Sie Allergien?</em>, <em>Welche Medikamente nehmen Sie regelmäßig ein?</em>, <em>Sind Sie in letzter Zeit gestürzt?</em> Pour une allergie, demande toujours aussi <strong>la réaction</strong> (<em>Was ist dann passiert?</em>) et, si le patient ne se souvient pas du nom du médicament, note qui le sait : le médecin traitant, <em>der Hausarzt</em>."
      },
      {
        h: "Le Perfekt de l'histoire médicale",
        p: "Ce qui s'est déjà passé se raconte au <strong>Perfekt</strong> : auxiliaire en deuxième position, participe à la fin. La plupart des verbes prennent <strong>haben</strong> : <em>Haben Sie Ihre Tabletten genommen? Ich habe nichts gegessen. Ich habe das Antibiotikum nicht vertragen.</em> Les verbes intransitifs de déplacement ou de changement d'état prennent généralement <strong>sein</strong> : <em>Sind Sie gestürzt?</em> C'est une tendance, pas une loi : c'est le verbe avec son sens qui décide (<em>Ich habe getanzt</em>), donc l'auxiliaire s'apprend avec le verbe. Dans les verbes à particule séparable, le <em>ge-</em> se place après la particule : <em>einweisen</em> → <em>eingewiesen</em>, <em>einnehmen</em> → <em>eingenommen</em> ; si le verbe de base a déjà un préfixe inséparable, il n'y a pas de <em>ge-</em> : <em>vorbereiten</em> → <em>vorbereitet</em>. Avec <em>sein</em> et <em>haben</em> eux-mêmes, on emploie plus souvent le Präteritum : <em>Ich hatte eine Operation. Ich war im Krankenhaus.</em>"
      },
      {
        contrast: "Le Perfekt ressemble beaucoup au passé composé : auxiliaire <em>avoir</em> ou <em>être</em> plus participe. La différence est la place : en français, le participe suit l'auxiliaire (« Avez-vous déjà pris vos comprimés ? »), en allemand, dans la proposition principale, il part <strong>à la fin</strong> et tout le reste se met au milieu : <em>Haben Sie heute schon Ihre Tabletten genommen?</em> Le choix de l'auxiliaire coïncide souvent avec le français (« je suis tombé », <em>ich bin gestürzt</em> ; « j'ai pris », <em>ich habe genommen</em>), mais pas toujours : l'allemand met <em>sein</em> avec bien plus de verbes de déplacement, là où le français garde <em>avoir</em> : « j'ai couru », <em>ich bin gelaufen</em> ; « j'ai voyagé », <em>ich bin gereist</em>. Dans le doute, un verbe transitif avec un complément d'objet prend <em>haben</em>."
      },
      {
        trap: "<em>Die Allergie</em> s'écrit presque comme en français, mais l'accent tombe sur la dernière syllabe, <em>Aller-<b>gie</b></em>, et le <b>g</b> est dur, jamais [ʒ] comme dans « allergie ». « Prendre » un médicament se dit <em>nehmen</em> ou, plus formel, <em>einnehmen</em> ; n'emploie pas <em>bekommen</em>, qui veut dire « recevoir » (<em>Sie bekommen eine Infusion</em> : c'est le personnel qui la pose). Le verbe <em>vertragen</em> s'emploie ainsi : <em>Ich vertrage kein Penicillin</em>, « je ne tolère pas la pénicilline ». Enfin, <em>die Einweisung</em> a deux sens : le bon d'hospitalisation et, dans le service, la formation à l'utilisation d'un appareil (<em>Geräteeinweisung</em>)."
      },
      {
        tip: "Demande le plan de médication au lieu de te faire dicter les noms : <em>Haben Sie Ihren Medikationsplan dabei?</em> Un nom de médicament prononcé par un patient, et compris par quelqu'un dont l'allemand n'est pas la langue maternelle, est la source d'erreur la plus facile du questionnaire."
      }
    ],
    grammar: {
      title: "Perfekt avec haben et avec sein",
      note: "Auxiliaire en <b>deuxième position</b> (ou en première dans la question fermée), participe <b>à la fin</b>. en général <b>sein</b> avec les verbes intransitifs de déplacement et de changement d'état, <b>haben</b> avec presque tous les autres.",
      table: {
        head: ["infinitif", "phrase au Perfekt", "remarque"],
        rows: [
          ["nehmen", "Haben Sie Ihre Tabletten genommen?", "haben, participe fort"],
          ["vertragen", "Ich habe das Antibiotikum nicht vertragen.", "ver- est inséparable : pas de ge-"],
          ["einweisen", "Der Hausarzt hat mich eingewiesen.", "séparable : ge- après la particule"],
          ["stürzen", "Sind Sie gestürzt?", "sein : mouvement"]
        ]
      },
      examples: [
        { tr: "Avez-vous déjà pris vos comprimés aujourd'hui ?", note: "haben + genommen à la fin" },
        { tr: "Ce matin, je n'ai rien mangé.", note: "question typique avant un examen à jeun" },
        { tr: "Mon médecin traitant m'a envoyé à l'hôpital.", note: "einweisen : bon d'hospitalisation" },
        { tr: "Êtes-vous tombé récemment ?", note: "stürzen demande sein" },
        { tr: "Je n'ai pas toléré l'antibiotique.", note: "vertragen : pas de ge-" },
        { tr: "Quand avez-vous bu quelque chose pour la dernière fois ?", note: "question en W- : haben en deuxième position" }
      ]
    },
    vocab: [
      "le questionnaire d'anamnèse",
      "l'antécédent médical",
      "l'allergie",
      "le médicament",
      "le plan de médication (liste des médicaments du patient)",
      "l'opération, l'intervention",
      "le médecin traitant",
      "le bon d'hospitalisation",
      "la chute",
      "prendre (un médicament)",
      "tolérer, supporter",
      "régulièrement"
    ],
    dialogue: [
      "Monsieur Brandt, maintenant nous remplissons ensemble le questionnaire d'anamnèse. Avez-vous des antécédents ?",
      "Oui, j'ai de la tension. Et il y a deux ans, j'ai été opéré du genou.",
      "Avez-vous des allergies ?",
      "Une fois, je n'ai pas toléré un antibiotique. J'ai eu une éruption cutanée.",
      "Vous souvenez-vous encore du nom du médicament ?",
      "Non, malheureusement. Mais mon médecin traitant le sait.",
      "Bien, nous lui demanderons. Quels médicaments prenez-vous régulièrement ?",
      "Voici mon plan de médication.",
      "Merci. Avez-vous déjà pris vos comprimés aujourd'hui ?",
      "Oui, ce matin."
    ],
    culture: {
      title: "Regard allemand : le Medikationsplan",
      text: "<p>En Allemagne, toute personne affiliée à l'assurance maladie publique qui prend en même temps au moins trois médicaments à action systémique pendant au moins 28 jours a droit à un <i>Medikationsplan</i> sur un formulaire unique national, rempli par le médecin traitant et muni d'un code-barres que la pharmacie et l'hôpital peuvent lire. Beaucoup de patients le gardent dans leur portefeuille, et beaucoup l'appellent simplement <i>Medikamentenplan</i> ou <i>mein Zettel</i>.</p><p>À l'admission, le plan ne remplace pas ta question : demande toujours si le patient prend quelque chose qui n'y figure pas, par exemple un produit acheté sans ordonnance ou une pommade. La réponse va dans le questionnaire d'anamnèse, et la décision de ce qu'il faut poursuivre revient au médecin.</p>"
    },
    exercises: [
      {
        tr: "Le Perfekt de nehmen, à toutes les personnes.",
        why: "<i>Habe genommen, hast genommen, hat genommen, haben genommen, habt genommen, haben genommen</i> : auxiliaire <i>haben</i> et participe fort <i>genommen</i>."
      },
      {
        q: "Tu veux demander au patient « Êtes-vous tombé récemment ? ». Quelle phrase est correcte ?",
        opts: [
          "Haben Sie in letzter Zeit gestürzt?",
          "Sind Sie in letzter Zeit gestürzt?",
          "Sind Sie in letzter Zeit gestürzt worden?"
        ],
        why: "<b>stürzen</b> est un verbe de mouvement et demande <b>sein</b> : <i>Sind Sie gestürzt?</i> La troisième est un passif, qui n'a pas de sens ici."
      },
      {
        q: "Complète : « Haben Sie heute schon Ihre Tabletten ___? »",
        hint: "participe de nehmen",
        why: "<b>genommen</b>, à la fin de la phrase : le participe de <i>nehmen</i> est fort et change de voyelle."
      },
      {
        q: "Quelles questions du questionnaire sont correctes ?",
        opts: [
          "Haben Sie Allergien?",
          "Welche Medikamente nehmen Sie regelmäßig ein?",
          "Welche Medikamente Sie nehmen regelmäßig ein?",
          "Hatten Sie schon einmal eine Operation?",
          "Haben Sie schon einmal eine Operation gehabt worden?"
        ],
        why: "Dans la question en W-, le verbe vient juste après le groupe interrogatif, qui peut compter plusieurs mots : <i>Welche Medikamente nehmen Sie</i>. La dernière mélange Perfekt et passif : on dit <i>Hatten Sie</i> ou <i>Haben Sie ... gehabt</i>."
      },
      {
        q: "Complète la phrase au Perfekt.",
        tr: "Je n'ai pas toléré l'antibiotique.",
        why: "<i>Ich habe das Antibiotikum nicht vertragen</i> : <i>vertragen</i> a la particule inséparable <i>ver-</i>, donc le participe ne prend pas <i>ge-</i> et il est identique à l'infinitif."
      },
      {
        q: "Remets les mots dans l'ordre.",
        tr: "Quand avez-vous mangé quelque chose pour la dernière fois ?",
        why: "<i>Wann haben Sie zuletzt etwas gegessen?</i> Le mot interrogatif, puis l'auxiliaire <i>haben</i>, le sujet, et le participe <i>gegessen</i> à la fin."
      },
      {
        q: "Choisis le bon article défini pour chaque nom.",
        items: ["questionnaire d'anamnèse", "antécédent médical", "médicament", "chute", "opération", "médecin traitant"]
      },
      {
        q: "Traduis : « Avez-vous déjà mangé quelque chose aujourd'hui ? »",
        why: "<i>Haben Sie heute schon etwas gegessen?</i> Question fermée : l'auxiliaire ouvre la phrase et le participe va à la fin. <i>Schon</i> traduit « déjà »."
      },
      {
        q: "Tu continues le questionnaire d'anamnèse.",
        setting: "Le patient a déjà dit qu'il a de la tension.",
        lines: [
          { tr: "Que voulez-vous savoir d'autre ?" },
          { tr: "Demande-lui s'il a déjà été opéré.", answerTr: "Avez-vous déjà été opéré ?" },
          { tr: "Oui, il y a deux ans, au genou." },
          { tr: "Demande-lui s'il a des allergies.", answerTr: "Et avez-vous des allergies ?" },
          { tr: "Non, je ne crois pas." },
          { tr: "Demande-lui s'il a déjà pris ses comprimés aujourd'hui.", answerTr: "Bien. Avez-vous déjà pris vos comprimés aujourd'hui ?" }
        ]
      },
      {
        tr: "J'ai de la tension. Il y a deux ans, j'ai été opéré du genou, et je n'ai pas toléré un antibiotique.",
        why: "Dans <i>Knie</i>, on prononce le <b>k</b> et le <b>n</b> ; dans <i>Blutdruck</i>, le <b>u</b> de <i>Blut</i> est long et celui de <i>Druck</i> bref ; dans <i>vertragen</i>, le <b>v</b> se lit [f]."
      },
      {
        tr: "Quels médicaments prenez-vous régulièrement ?",
        why: "Dans <i>Medikamente</i>, l'accent tombe sur <b>men</b> ; dans <i>regelmäßig</i>, le <b>ä</b> est long et le <b>ß</b> est un <b>s</b> sourd ; le <b>g</b> final se lit [ç]."
      }
    ]
  },
  "lesson:pfl-u01-l4": {
    theme: "Deux registres",
    title: "Langue technique et langue du patient",
    objectives: [
      "reconnaître les termes techniques d'origine latine et grecque employés dans la documentation et avec les médecins",
      "traduire chaque terme technique par le mot qu'emploie le patient",
      "choisir le bon registre selon la personne qui écoute",
      "trouver l'article d'un mot composé à partir de son dernier élément"
    ],
    theory: [
      {
        h: "Deux langues dans le même service",
        p: "Beaucoup de notions cliniques ont deux noms. La <strong>Fachsprache</strong>, de racine latine ou grecque, s'emploie avec les médecins, dans les transmissions et dans la documentation : <em>Hypertonie, Dyspnoe, Obstipation, Emesis</em>. La <strong>Laiensprache</strong>, allemande, s'emploie avec les patients et leurs proches : <em>Bluthochdruck, Atemnot, Verstopfung, Erbrechen</em>. Une infirmière passe de l'une à l'autre des dizaines de fois par jour, parfois dans la même phrase : <em>Er hat eine Hypertonie</em> au médecin, <em>Sie haben Bluthochdruck</em> au patient."
      },
      {
        h: "Les mots du patient sont des composés",
        p: "La Laiensprache construit ses noms en assemblant des mots simples : <em>Blut + hoch + Druck</em> = <em>der Bluthochdruck</em>, <em>Zucker + Krankheit</em> = <em>die Zuckerkrankheit</em>, <em>Atem + Not</em> = <em>die Atemnot</em>. <strong>C'est le dernier élément qui décide de l'article</strong> : <em>der Druck</em>, donc <em>der Bluthochdruck</em> ; <em>die Krankheit</em>, donc <em>die Zuckerkrankheit</em> ; <em>das Gespräch</em>, donc <em>das Aufnahmegespräch</em>. Le patient raccourcit souvent encore : <em>Ich habe Zucker</em> veut dire « j'ai du diabète »."
      },
      {
        contrast: "Pour un francophone, la Fachsprache est presque gratuite : <em>Hypertonie</em>, c'est l'hypertension, <em>Dyspnoe</em> la dyspnée, <em>Zephalgie</em> la céphalée, <em>Nausea</em> la nausée. Le français médical est lui-même rempli de mots grecs et latins, et ces mots descendent jusqu'au patient : en France, un patient dit sans hésiter « j'ai de l'hypertension » ou « je suis diabétique ». C'est justement le piège. En Allemagne, le patient a des mots allemands à lui, et <em>Hypertonie</em> est pour beaucoup de patients une étiquette opaque, qui inquiète ou qu'il ne reconnaît pas comme la sienne. Le mot qui te manque, et que tu dois apprendre, c'est le composé du quotidien : <em>Bluthochdruck</em>, <em>Atemnot</em>, <em>Verstopfung</em>, <em>Kopfschmerzen</em>, <em>Erbrechen</em>. En transmission, en revanche, le terme technique est l'usage, parce qu'il est plus précis, même si les mots courants n'y sont pas une faute."
      },
      {
        trap: "Faux ami de taille : en français, « hypertonie » désigne surtout un tonus musculaire (ou oculaire) trop élevé ; en allemand, dans un dossier de soins, <em>Hypertonie</em> sans autre précision, c'est presque toujours l'hypertension artérielle (<em>arterielle Hypertonie</em>), même si le mot existe aussi pour le tonus musculaire : c'est le contexte qui tranche. Une seule lettre change tout : <em>Hypertonie</em> est la tension haute, <em>Hypotonie</em> la tension basse ; à l'oral, dans une transmission rapide, on les confond facilement, et dans le doute il vaut mieux faire confirmer. <em>Das Abdomen</em> est neutre, alors que le mot du patient est masculin : <em>der Bauch</em>. Et <em>Diarrhö</em> s'écrit aussi <em>Diarrhoe</em> : les deux graphies sont correctes, « Diarrhée » ne l'est pas."
      },
      {
        tip: "Quand tu expliques au patient ce qu'a dit le médecin, répète le terme technique une fois, puis traduis-le : <em>Das ist eine Hypertonie, also Bluthochdruck.</em> Le patient le retrouvera dans la lettre de sortie et saura à quoi il correspond."
      }
    ],
    grammar: {
      title: "Fachsprache et Laiensprache",
      note: "Avec les médecins et dans la documentation, la colonne <b>Fachsprache</b> ; avec les patients et les proches, la colonne <b>Laiensprache</b>. L'article des composés est celui du <b>dernier élément</b>.",
      table: {
        head: ["Fachsprache", "Laiensprache", "français"],
        rows: [
          ["die Hypertonie", "der Bluthochdruck", "hypertension"],
          ["der Diabetes mellitus", "die Zuckerkrankheit, « Zucker »", "diabète"],
          ["die Dyspnoe", "die Atemnot", "dyspnée"],
          ["die Zephalgie", "die Kopfschmerzen", "céphalée"],
          ["die Nausea", "die Übelkeit", "nausée"],
          ["die Emesis", "das Erbrechen", "vomissement"],
          ["die Obstipation", "die Verstopfung", "constipation"],
          ["die Diarrhö", "der Durchfall", "diarrhée"],
          ["das Abdomen", "der Bauch", "abdomen, ventre"]
        ]
      },
      examples: [
        { tr: "Le patient a une hypertension connue.", note: "Fachsprache : au médecin ou dans la documentation" },
        { tr: "Monsieur Brandt, vous avez de la tension.", note: "Laiensprache : au patient" },
        { tr: "À l'effort, le patient présente une dyspnée.", note: "formule typique de la documentation" },
        { tr: "Êtes-vous essoufflé quand vous montez les escaliers ?", note: "la même question, pour le patient" },
        { tr: "Dans la langue technique, le diabète s'appelle Diabetes mellitus.", note: "Zucker + Krankheit : die, à cause de Krankheit" },
        { tr: "Beaucoup de patients disent simplement : « je suis diabétique ».", note: "Zucker pour diabète, littéralement « j'ai du sucre » : forme familière très répandue" }
      ]
    },
    vocab: [
      "l'anamnèse (terme technique)",
      "les antécédents, l'histoire du patient (mot pour le patient)",
      "l'hypertension (terme technique)",
      "la tension, la tension trop haute (mot pour le patient)",
      "le diabète sucré (terme technique)",
      "le diabète (mot pour le patient)",
      "la dyspnée (terme technique)",
      "la céphalée (terme technique)",
      "l'émèse, le vomissement (terme technique)",
      "le vomissement (mot pour le patient)",
      "la constipation (terme technique)",
      "la diarrhée (terme technique)"
    ],
    dialogue: [
      "Docteur Weber, monsieur Brandt a une hypertension connue et, depuis trois jours, des douleurs abdominales.",
      "A-t-il aussi des nausées ou des vomissements ?",
      "Des nausées, oui, pas de vomissements. Et une diarrhée depuis hier.",
      "Madame Marin, qu'est-ce qu'il a dit, le médecin ? Je ne comprends pas ces mots.",
      "Ne vous inquiétez pas, monsieur Brandt. Il a seulement demandé si vous avez la nausée et si vous avez vomi.",
      "Ah, d'accord. Et c'est quoi, une « Hypertonie » ?",
      "C'est la tension trop haute. Ça, vous le connaissez déjà."
    ],
    exercises: [
      {
        q: "Associe chaque terme technique au mot qu'emploie le patient.",
        pairs: ["der Bluthochdruck", "die Atemnot", "die Verstopfung", "die Kopfschmerzen", "das Erbrechen"]
      },
      {
        q: "Tu parles avec le patient. Quelle phrase convient ?",
        opts: [
          "Sie haben eine Hypertonie.",
          "Bei Ihnen besteht eine arterielle Hypertonie.",
          "Sie haben Bluthochdruck."
        ],
        why: "Avec le patient, on emploie la Laiensprache : <b>Bluthochdruck</b>. Les deux premières sont correctes, mais ce sont des phrases de documentation ou de médecin à médecin."
      },
      {
        q: "Quels mots conviennent pour le patient ?",
        opts: ["die Verstopfung", "die Obstipation", "die Übelkeit", "die Nausea", "der Durchfall", "die Diarrhö"],
        why: "<i>Verstopfung</i>, <i>Übelkeit</i> et <i>Durchfall</i> sont des mots allemands courants. <i>Obstipation</i>, <i>Nausea</i> et <i>Diarrhö</i> sont des termes techniques, pour le médecin et la documentation."
      },
      {
        q: "Le médecin a écrit « Hypertonie ». Complète la phrase pour le patient : « Sie haben ___. »",
        hint: "mot composé, Laiensprache",
        why: "<b>Bluthochdruck</b> : <i>Blut + hoch + Druck</i>. <i>hohen Blutdruck</i> convient aussi."
      },
      {
        q: "Choisis l'article : dans les composés, c'est le dernier élément qui décide.",
        items: ["tension haute (Druck)", "diabète (Krankheit)", "essoufflement (Not)", "questionnaire d'anamnèse (Bogen)", "entretien d'accueil (Gespräch)", "histoire du patient (Geschichte)"]
      },
      {
        q: "Complète : dans la première phrase le terme technique, dans la seconde le mot pour le patient.",
        tr: "Le patient présente une dyspnée à l'effort. Je lui demande : êtes-vous essoufflé quand vous montez les escaliers ?",
        why: "<i>Dyspnoe</i> est le terme pour la documentation, <i>Atemnot</i> le mot pour le patient : même notion, deux registres."
      },
      {
        q: "Remets les mots dans l'ordre.",
        tr: "Êtes-vous essoufflé quand vous montez les escaliers ?",
        why: "<i>Haben Sie Atemnot, wenn Sie Treppen steigen?</i> La question fermée commence par le verbe ; après <i>wenn</i>, le verbe <i>steigen</i> va à la fin."
      },
      {
        q: "Traduis, en t'adressant au patient : « Avez-vous de la tension ? »",
        why: "<i>Haben Sie Bluthochdruck?</i> ou <i>Haben Sie hohen Blutdruck?</i> Au patient, on ne dit pas <i>Hypertonie</i>."
      },
      {
        q: "Le médecin a écrit « Diabetes mellitus ». Complète pour le patient : « Seit wann haben Sie die ___? »",
        hint: "Zucker + Krankheit",
        why: "<b>Zuckerkrankheit</b>, féminin comme <i>Krankheit</i>. Beaucoup de patients disent aussi seulement <i>Zucker</i> : <i>Ich habe Zucker</i>."
      },
      {
        tr: "Le patient a une hypertension connue. À monsieur Brandt, je dis simplement : vous avez de la tension.",
        why: "Dans <i>Hypertonie</i>, l'accent tombe sur le <b>nie</b> final et le <b>y</b> se lit comme un <b>ü</b> ; dans <i>Bluthochdruck</i>, le <b>ch</b> après <b>o</b> est [x]."
      },
      {
        tr: "Êtes-vous essoufflé quand vous montez les escaliers ?",
        why: "Dans <i>Atemnot</i>, l'accent est sur la première syllabe, <b>A</b> ; dans <i>Treppen</i>, le <b>e</b> est bref ; dans <i>steigen</i>, le <b>st</b> initial est [ʃt] et le <b>ei</b> est [aɪ]."
      }
    ]
  },
  "lesson:pfl-u01-test": {
    theme: "Évaluation",
    title: "Test : Accueil et anamnèse",
    objectives: [
      "vérifier le registre avec le patient, le datif des symptômes, le Perfekt de l'histoire médicale et les paires Fachsprache / Laiensprache"
    ],
    theory: [
      {
        p: "Onze questions sur toute l'unité. On réussit avec 70 %. Les contenus cliniques sont des exemples pédagogiques : dans le service, c'est toujours le protocole de l'établissement qui fait foi."
      }
    ],
    exercises: [
      {
        q: "Tu salues une patiente de 75 ans que tu ne connais pas. Quelle phrase convient ?",
        opts: ["Hallo, wie geht's dir?", "Guten Tag, wie geht es Ihnen?", "Guten Tag, wie geht es dir?"],
        why: "Avec les patients, on emploie toujours le <b>Sie</b> : <i>Wie geht es Ihnen?</i>, avec le datif de politesse."
      },
      {
        q: "Complète : « Wo tut es ___ weh? » (au patient)",
        hint: "Sie au datif",
        why: "<b>Ihnen</b> : avec <i>wehtun</i>, la personne est au datif."
      },
      {
        q: "Le patient dit « J'ai la nausée ». Complète : « ___ ist übel. »",
        hint: "ich au datif",
        why: "<b>Mir</b> : <i>Mir ist übel</i>, avec <i>sein</i> et le datif. « Ich bin übel » ne veut pas dire avoir la nausée."
      },
      {
        tr: "Le Perfekt de einnehmen, à toutes les personnes.",
        why: "<i>Habe eingenommen, hast eingenommen, hat eingenommen, haben eingenommen, habt eingenommen, haben eingenommen</i> : verbe séparable, le <i>ge-</i> se place entre <i>ein</i> et <i>nommen</i>."
      },
      {
        q: "Associe chaque terme technique au mot qu'emploie le patient.",
        pairs: ["der Bluthochdruck", "die Atemnot", "die Verstopfung", "der Durchfall"]
      },
      {
        q: "Quelles phrases sont correctes avec un patient ?",
        opts: [
          "Kann ich Ihnen helfen?",
          "Kann ich Sie helfen?",
          "Sind Sie in letzter Zeit gestürzt?",
          "Jetzt bringe ich Sie auf Ihr Zimmer.",
          "Haben Sie in letzter Zeit gestürzt?"
        ],
        why: "<i>helfen</i> demande le datif (<i>Ihnen</i>), <i>stürzen</i> demande <i>sein</i> au Perfekt, et après <i>jetzt</i> le verbe reste en deuxième position."
      },
      {
        q: "Complète la phrase au Perfekt.",
        tr: "Mon médecin traitant m'a envoyé à l'hôpital avec un bon d'hospitalisation.",
        why: "<i>Mein Hausarzt hat mich ins Krankenhaus eingewiesen</i> : <i>hat</i> en deuxième position, le participe séparable <i>eingewiesen</i> à la fin."
      },
      {
        q: "Remets les mots dans l'ordre.",
        tr: "Quels médicaments prenez-vous régulièrement ?",
        why: "<i>Welche Medikamente nehmen Sie regelmäßig ein?</i> Le verbe <i>nehmen</i> juste après la partie interrogative, la particule <i>ein</i> à la fin."
      },
      {
        q: "Choisis le bon article défini pour chaque nom.",
        items: ["anamnèse", "tension haute", "médicament", "entretien d'accueil", "diarrhée", "histoire du patient"]
      },
      {
        tr: "Bonjour, aujourd'hui je suis votre infirmière. Maintenant, nous remplissons ensemble le questionnaire d'anamnèse. Avez-vous des allergies ?",
        why: "Dans <i>Anamnesebogen</i>, l'accent tombe sur <b>ne</b> ; dans <i>Allergien</i>, le <b>g</b> est dur et le <b>ie</b> final se lit [iːən] ; dans <i>fülle</i>, le <b>ü</b> est bref et arrondi."
      },
      {
        tr: "Depuis quand avez-vous mal ?",
        why: "Dans <i>Seit</i>, le <b>s</b> initial est sonore [z] et le <b>ei</b> est [aɪ] ; dans <i>wann</i>, le <b>w</b> se lit [v] ; dans <i>weh</i>, le <b>h</b> allonge le <b>e</b>."
      }
    ]
  }
});
