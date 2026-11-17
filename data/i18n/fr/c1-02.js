/* ============================================================
   Learner-language text (fr) for data/core/c1-02.js, unit c1-u04.
   Keys point at ids in the neutral layer; arrays merge by index,
   so their length has to match core.
   Checked by scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("fr", {
  "unit:c1-u04": {
    title: "Il sera fatigué",
    grammarNote: "Futur I et II de supposition (er wird wohl müde sein, sie wird es gelesen haben) · modaux subjectifs : muss, dürfte, könnte, mag, soll, will · particules modales wohl, ja, etwa, halt, eben"
  },
  "lesson:c1-u04-l1": {
    theme: "Suppositions et degré de certitude",
    title: "Le futur qui ne parle pas de l'avenir",
    objectives: [
      "reconnaître le Futur I comme supposition sur le présent",
      "faire des suppositions sur le passé avec le Futur II",
      "distinguer la supposition de l'action achevée avant un moment futur",
      "doser la certitude avec wohl, schon, sicher, vermutlich"
    ],
    theory: [
      {
        h: "Werden pour supposer",
        p: "En allemand, le vrai futur s'exprime souvent avec le présent et une indication de temps (<em>Morgen fliege ich nach Wien</em>). <strong>werden</strong> + infinitif sert surtout pour une <strong>supposition sur le présent</strong> : <em>Er wird wohl noch im Stau stehen. Es klingelt. Das wird der Postbote sein.</em> Pour une supposition sur le <strong>passé</strong>, on emploie le <strong>Futur II</strong>, <em>werden</em> + participe II + <em>haben</em> ou <em>sein</em> : <em>Sie wird die Nachricht inzwischen gelesen haben.</em> Ce même Futur II peut aussi indiquer une action qui sera <strong>achevée avant un moment futur</strong> : <em>Bis Ende des Monats werden wir die Studie abgeschlossen haben.</em>"
      },
      {
        h: "Les indices",
        p: "Pour savoir quelle lecture vous avez devant vous, regardez le contexte, le moment et les adverbes, à titre d'indices et non de règles. Une référence au présent (<em>jetzt, noch, gerade</em>) ou au passé (<em>inzwischen, längst</em>) oriente vers une supposition ; une échéance avec <em>bis</em> oriente le plus souvent vers une action achevée dans le futur, mais peut aussi porter une supposition. Les adverbes dosent la certitude : <em>wohl</em> et <em>vermutlich</em> restent prudents, <em>schon</em> rassure souvent (<em>Das wird schon klappen</em>), <em>sicher</em> et <em>bestimmt</em> la renforcent."
      },
      {
        contrast: "Le français a le même emploi : le futur simple de supposition (<em>il sera au bureau</em>) et le futur antérieur (<em>elle aura lu le message</em>). Cela vous vient donc naturellement, mais en allemand ce sont le contexte et les adverbes qui orientent la lecture : <em>Das wird der Postbote sein</em> est déjà une supposition naturelle sans adverbe, et <em>wohl</em>, <em>schon</em> ou <em>sicher</em> la rendent explicite, alors que <em>Er wird zu Hause sein</em> tout seul, sans contexte clair, peut aussi se lire comme un vrai futur. Et le français préfère souvent <em>devoir</em> ou <em>sans doute</em> (<em>il doit être en train de dormir</em>), là où l'allemand garde <em>werden</em>. Le futur antérieur français d'achèvement (<em>d'ici vendredi, nous aurons terminé</em>) correspond en revanche au Futur II avec <em>bis</em>."
      },
      {
        trap: "Pour le passé, le Futur I ne suffit pas : <em>Er wird gestern krank sein</em> ne marche pas, il faut le Futur II, <em>Er wird gestern wohl krank gewesen sein</em>. Et l'auxiliaire de l'infinitif passé est celui du Perfekt du verbe : <em>Sie wird abgereist sein</em> (mouvement, <em>sein</em>), <em>Er wird es vergessen haben</em> (<em>haben</em>). Ne le calquez pas sur le français, où ce choix suit d'autres règles."
      },
      {
        tip: "Demandez-vous toujours à quel moment se rapporte la phrase : présent, passé ou un point futur avec <em>bis</em>. Le moment décide entre le Futur I (supposition sur le présent), le Futur II (passé) et le Futur II d'achèvement."
      }
    ],
    grammar: {
      title: "Futur I et II comme supposition",
      note: "<b>werden + infinitif</b> : supposition sur le présent. <b>werden + participe II + haben/sein</b> : supposition sur le passé ou action achevée avant un moment futur (avec <i>bis</i>). Dosage : <i>wohl, vermutlich</i> (prudent), <i>schon</i> (rassurant), <i>sicher</i> (plus certain).",
      table: {
        head: ["construction", "valeur", "exemple"],
        rows: [
          ["werden + infinitif", "supposition sur le présent", "Er wird wohl noch im Stau stehen."],
          ["werden + participe II + haben/sein", "supposition sur le passé", "Sie wird die Nachricht inzwischen gelesen haben."],
          ["werden + participe II + haben/sein avec bis", "action achevée avant un moment futur", "Bis Ende des Monats werden wir die Studie abgeschlossen haben."],
          ["werden + schon + infinitif", "assurance ou supposition, selon le contexte", "Das wird schon klappen."],
          ["présent + indication de temps", "futur prévu", "Morgen fliege ich nach Wien."]
        ]
      },
      examples: [
        { tr: "Les lumières sont éteintes, à cette heure elle doit dormir.", note: "werden + schon + infinitif : supposition ou assurance, selon le contexte" },
        { tr: "On sonne. Ce sera le facteur.", note: "werden + sein : supposition" },
        { tr: "Il sera probablement encore dans les embouteillages.", note: "werden + wohl + infinitif" },
        { tr: "Le message, elle l'aura lu entre-temps.", note: "Futur II : supposition sur le passé" },
        { tr: "D'ici la fin du mois, nous aurons terminé l'étude.", note: "Futur II d'achèvement avec bis" },
        { tr: "Tu verras, ça va marcher.", note: "werden + schon + infinitif : ici une assurance" }
      ]
    },
    vocab: [
      "l'hypothèse, le présupposé",
      "le soupçon",
      "la probabilité",
      "l'indice, le point de repère",
      "le doute",
      "la certitude",
      "supposer, présumer",
      "conjecturer, faire des suppositions (registre journalistique)",
      "partir du principe",
      "probablement",
      "sûrement, certainement",
      "entre-temps, désormais"
    ],
    exercises: [
      {
        q: "Dans la messagerie du bureau, tu lis trois phrases sur le chef. Laquelle décrit une action future et non une supposition ?",
        opts: [
          "Der Chef wird nächste Woche aus dem Urlaub zurückkehren.",
          "Der Chef wird jetzt im Urlaub sein, er hat es ja angekündigt.",
          "Der Chef wird die Mail längst gelesen haben."
        ],
        why: "La première a <i>nächste Woche</i> : un événement qui aura lieu, donc un futur. Dans les autres, le moment est le présent (<i>jetzt</i>) ou le passé (<i>längst gelesen haben</i>) : ce sont des suppositions."
      },
      {
        q: "Une chaîne de magasins annonce : « Bis Jahresende werden wir alle Filialen modernisiert haben. » Qu'exprime le Futur II ?",
        opts: [
          "une action qui sera achevée avant un moment futur",
          "une supposition sur quelque chose qui s'est déjà produit",
          "un passif au présent"
        ],
        why: "<i>bis Jahresende</i> fixe le point futur avant lequel l'action sera terminée, et dans cette consigne celui qui parle annonce un engagement plutôt qu'une conjecture ; c'est le contexte qui le montre, pas l'absence d'un adverbe comme <i>wohl</i>."
      },
      {
        q: "Tu sais que la lettre a été remise hier, mais tu ignores si le destinataire l'a déjà lue. Quelle phrase formule la bonne supposition ?",
        opts: [
          "Er wird den Brief inzwischen gelesen haben.",
          "Er hat den Brief inzwischen gelesen.",
          "Er wird den Brief inzwischen lesen."
        ],
        why: "Il faut le Futur II : <i>wird ... gelesen haben</i> regarde en arrière vers une action que l'on suppose déjà accomplie. La deuxième présente la lecture comme un fait sûr, la troisième (Futur I) concerne ce qui se passe maintenant ou se passera."
      },
      {
        q: "La sonnette retentit et tu imagines que c'est le livreur : « Es klingelt. Das ___ der Paketbote sein. »",
        hint: "forme de werden à la troisième personne",
        why: "<b>wird</b> : <i>werden</i> + infinitif (<i>sein</i>) est une supposition sur le présent, « ce sera le livreur »."
      },
      {
        q: "Une directrice promet : « Bis nächsten Freitag werden wir das Gutachten fertiggestellt ___. »",
        hint: "Futur II : auxiliaire",
        why: "<b>haben</b> : Futur II d'achèvement. <i>fertigstellen</i> forme le Perfekt avec <i>haben</i>."
      },
      {
        q: "Complète avec les bonnes formes.",
        tr: "Les collègues doivent être en réunion en ce moment, et le rapport, ils l'auront sûrement déjà lu.",
        why: "<i>werden</i> + <i>sitzen</i> ou <i>sein</i> pour le présent ; pour le passé <i>werden</i> + <i>gelesen haben</i>. Avec <i>den Bericht</i> en première position, le verbe conjugué reste en deuxième place et le sujet <i>sie</i> le suit."
      },
      {
        q: "Quelles phrases expriment une supposition et non un vrai futur ou un passif ?",
        opts: [
          "Es klingelt an der Tür. Das wird der Nachbar sein.",
          "Er wird jetzt wohl schon zu Hause angekommen sein.",
          "Am Montag wird die Straße wieder freigegeben.",
          "Wir werden Sie über das Ergebnis informieren."
        ],
        why: "Les deux premières portent sur ce que l'on suppose maintenant : Futur I avec <i>sein</i> et Futur II (<i>angekommen sein</i>). La troisième est un passif présent (<i>freigegeben</i>) à valeur de futur, la quatrième un vrai futur."
      },
      {
        q: "Remets dans l'ordre la supposition.",
        tr: "Le message, elle l'aura lu entre-temps.",
        why: "<i>Sie wird die Nachricht inzwischen gelesen haben.</i> Le verbe conjugué est en deuxième position, <i>gelesen haben</i> ferme la phrase ; <i>inzwischen</i> peut aussi se placer avant <i>die Nachricht</i>."
      },
      {
        q: "Traduis : « Les candidates auront probablement déjà reçu la réponse. » (die Bewerberinnen, die Antwort, erhalten)",
        why: "<i>Die Bewerberinnen werden die Antwort wohl schon erhalten haben</i> : Futur II avec <i>wohl</i> (ou <i>vermutlich, wahrscheinlich</i>) ; <i>schon</i> ou <i>bereits</i> pour « déjà », et l'adverbe peut se placer avant ou après <i>die Antwort</i>."
      },
      {
        tr: "Le train de Munich a du retard. Les voyageurs devront probablement attendre encore une demi-heure, et la correspondance sera alors probablement déjà partie.",
        why: "Deux suppositions : <i>werden ... warten müssen</i> (prévision prudente) et <i>wird ... abgefahren sein</i> (Futur II avec <i>sein</i>, car <i>abfahren</i> est un verbe de mouvement)."
      },
      {
        tr: "La lumière est encore allumée, donc les collègues doivent probablement encore travailler.",
        why: "<i>werden</i> + <i>wohl</i> + infinitif : supposition sur le présent, avec <i>arbeiten</i> en fin de phrase."
      }
    ]
  },
  "lesson:c1-u04-l2": {
    theme: "Certitude, rumeurs et déclarations",
    title: "Er muss krank sein, sie soll reich sein",
    objectives: [
      "graduer la certitude avec muss, dürfte, könnte, kann nicht, et distinguer la concession de mag",
      "rapporter ce que disent les autres avec soll",
      "rapporter ce que soutient le sujet avec will",
      "employer l'infinitif passé pour parler du passé"
    ],
    theory: [
      {
        h: "Du devoir à la certitude",
        p: "Avec <em>sein</em>, <em>haben</em> ou un infinitif passé, les modaux expriment souvent, et non toujours, le degré de certitude de celui qui parle plutôt que l'obligation ou la permission ; le contexte, le sens du verbe et le temps décident de la lecture. <strong>muss</strong> est une déduction presque certaine (<em>Es muss geregnet haben, die Straße ist nass</em>), <strong>dürfte</strong> indique que c'est probable (<em>Er dürfte schon angekommen sein</em>), <strong>könnte</strong> que c'est possible (<em>Das könnte ein Irrtum sein</em>). <strong>kann nicht</strong> dit que c'est impossible (<em>Das kann nicht stimmen</em>) tandis que <strong>mag</strong> concède (<em>Das mag sein, aber ich sehe es anders</em>) : ce n'est pas un degré de l'échelle de certitude de <em>muss</em>, <em>dürfte</em> et <em>könnte</em>."
      },
      {
        h: "Rapporter : soll et will",
        p: "Deux autres modaux rapportent une source. <strong>soll</strong> dit que d'autres l'affirment et que celui qui parle ne le garantit pas : <em>Der Zeuge soll den Täter gesehen haben</em>, « le témoin aurait vu le coupable ». <strong>will</strong> dit que c'est le sujet lui-même qui le soutient, souvent avec une pointe de scepticisme : <em>Die Firma will alle Unterlagen rechtzeitig eingereicht haben</em>, « l'entreprise prétend avoir remis tous les documents à temps ». Pour le passé : modal + participe II + <em>haben</em> ou <em>sein</em>."
      },
      {
        contrast: "Le français a lui aussi le conditionnel journalistique (<em>le ministre aurait détruit les documents</em>), mais il ne dit pas qui parle : cela peut être la presse, un témoin ou le ministre lui-même. L'allemand choisit le modal selon la source : <em>soll</em> pour « on dit que », <em>will</em> pour « lui prétend que ». De même, <em>il doit être malade</em> correspond à <em>muss</em>, mais le français <em>doit</em> est ambigu, car il peut aussi dire une obligation (<em>il doit venir</em>) ; et <em>il devrait être là</em> est tantôt <em>dürfte</em> (probable), tantôt un conseil ou une obligation. En allemand, l'infinitif est un indice utile, mais ce sont le contexte et le sens de la phrase qui tranchent."
      },
      {
        trap: "La négation change le sens. <em>Er muss nicht krank sein</em> veut dire « il n'est pas forcément malade », et non « il ne peut pas être malade ». Pour l'impossibilité, il faut <em>kann nicht</em> : <em>Er kann nicht krank sein, ich habe ihn eben gesehen</em>. Et <em>dürfte</em> au sens de probabilité ne se confond pas avec <em>darf</em>, qui exprime une permission."
      },
      {
        tip: "Avant de traduire un modal, regardez l'infinitif, puis le contexte. Un infinitif passé (<em>gelesen haben, gewesen sein</em>) ou un verbe d'état (<em>sein</em>) oriente souvent vers une valeur subjective : certitude ou source. Un verbe d'action au présent (<em>Er soll kommen</em>) peut dire un ordre, ou rapporter ce qu'on dit (« il paraît qu'il vient ») : seul le contexte décide."
      }
    ],
    grammar: {
      title: "Modaux subjectifs",
      note: "<b>muss</b> : presque certain. <b>dürfte</b> : probable. <b>kann / könnte</b> : possible. <b>mag</b> : concession (hors de l'échelle de certitude). <b>soll</b> : d'autres le disent. <b>will</b> : le sujet le soutient. Passé : modal + participe II + haben/sein.",
      table: {
        head: ["modal", "valeur", "exemple"],
        rows: [
          ["muss", "déduction presque certaine", "Er muss krank sein."],
          ["dürfte", "probable", "Er dürfte krank sein."],
          ["kann / könnte", "possible", "Er könnte krank sein."],
          ["mag", "concession", "Das mag sein."],
          ["soll", "d'autres le disent", "Er soll krank sein."],
          ["will", "le sujet le soutient", "Er will krank gewesen sein."]
        ]
      },
      examples: [
        { tr: "Il a dû pleuvoir, la rue est mouillée.", note: "muss + infinitif passé : déduction" },
        { tr: "Il est probablement déjà arrivé.", note: "dürfte : probable" },
        { tr: "Ce pourrait être une erreur.", note: "könnte : possible" },
        { tr: "Le témoin aurait vu le coupable.", note: "soll : d'autres le disent" },
        { tr: "L'entreprise prétend avoir remis tous les documents à temps.", note: "will : le sujet le soutient" },
        { tr: "Peut-être, mais moi, je vois les choses autrement.", note: "mag : concession" }
      ]
    },
    vocab: [
      "la rumeur, le bruit qui court",
      "le témoin",
      "l'affirmation, la prétention",
      "la source",
      "la preuve",
      "la déclaration, la déposition",
      "prétendre, affirmer",
      "nier, contester",
      "documenter, prouver",
      "soi-disant, à ce qu'on dit (avec doute)",
      "visiblement, apparemment (d'après les faits)",
      "apparemment, à ce qu'il paraît"
    ],
    exercises: [
      {
        q: "Titre de journal : « Der Bürgermeister soll Geld angenommen haben. » Que communique le journal ?",
        opts: [
          "que quelqu'un l'affirme, mais le journal ne le garantit pas",
          "que c'est le maire qui a déclaré avoir pris de l'argent",
          "que le journal a la preuve que le maire a pris de l'argent"
        ],
        why: "<b>soll</b> + infinitif passé rapporte ce que disent d'autres, sans en prendre la responsabilité. Si c'était le maire qui l'affirmait, il faudrait <i>will</i>, et pour une certitude le Perfekt suffirait (<i>hat Geld angenommen</i>)."
      },
      {
        q: "Un quotidien écrit : « Der Bürgermeister will das Geld nie angenommen haben. » Qui soutient qu'il ne l'a jamais pris ?",
        opts: [
          "le maire lui-même ; l'auteur reste neutre ou sceptique",
          "des témoins ; le journal ne garantit pas",
          "personne : c'est l'intention du maire de ne jamais accepter d'argent"
        ],
        why: "<b>will</b> + infinitif passé : l'affirmation vient du sujet lui-même. Pour « on dit que », ce serait <i>soll</i> ; la lecture « avoir l'intention de » est impossible avec un infinitif passé."
      },
      {
        q: "Un réviseur commente une erreur dans les comptes et choisit soigneusement son modal. Quelle suite va de la plus grande certitude à la plus faible ?",
        opts: [
          "Das muss ein Irrtum sein. - Das dürfte ein Irrtum sein. - Das könnte ein Irrtum sein.",
          "Das könnte ein Irrtum sein. - Das dürfte ein Irrtum sein. - Das muss ein Irrtum sein.",
          "Das dürfte ein Irrtum sein. - Das muss ein Irrtum sein. - Das könnte ein Irrtum sein."
        ],
        why: "<b>muss</b> est une déduction presque certaine, <b>dürfte</b> indique la probabilité, <b>könnte</b> la simple possibilité. La deuxième suite est l'inverse, la troisième échange <i>muss</i> et <i>dürfte</i>."
      },
      {
        q: "Au journal radio : « Laut Augenzeugen ___ der Täter in einem roten Auto geflohen sein. »",
        hint: "modal pour ce que disent d'autres",
        why: "<b>soll</b> : <i>laut Augenzeugen</i> introduit une source extérieure, et celui qui parle ne garantit pas."
      },
      {
        q: "Un homme se disculpe : « Der Zeuge ___ den Mann nie zuvor gesehen haben, das behauptet er zumindest. »",
        hint: "c'est lui qui l'affirme",
        why: "<b>will</b> : <i>das behauptet er zumindest</i> montre que l'affirmation vient du sujet."
      },
      {
        q: "Complète avec muss, soll ou will.",
        tr: "Les volets sont baissés et la boîte aux lettres déborde : la famille Albers doit être partie en vacances, difficile de penser autrement. D'après un voisin, elle serait partie il y a déjà deux semaines, mais le gardien prétend ne s'être aperçu de rien.",
        why: "<i>muss</i> : déduction à partir d'indices. <i>soll</i> : c'est un voisin qui le dit (<i>einem Nachbarn zufolge</i>). <i>will</i> : c'est le gardien lui-même qui le soutient ; <i>nach eigener Aussage</i> indique que c'est sa propre version, ce qui rend <i>will</i> (« prétend ne s'être aperçu de rien ») le seul choix possible."
      },
      {
        q: "Associe chaque phrase à son sens.",
        pairs: [
          "j'en déduis presque avec certitude qu'il est malade",
          "il est probable qu'il soit malade",
          "on dit qu'il est malade",
          "il prétend avoir été malade"
        ]
      },
      {
        q: "Remets dans l'ordre la nouvelle.",
        tr: "Le ministre aurait détruit les documents.",
        why: "<i>Der Minister soll die Akten vernichtet haben.</i> <i>soll</i> en deuxième position, infinitif passé en fin de phrase."
      },
      {
        q: "Traduis : « À ce qu'on dit, la ministre aurait quitté le pays dès hier. » (die Ministerin, das Land, verlassen, sollen)",
        why: "<i>Die Ministerin soll das Land schon gestern verlassen haben</i> : <i>soll</i> rend le conditionnel journalistique et l'infinitif passé <i>verlassen haben</i> se place en fin de phrase ; <i>schon</i> ou <i>bereits</i> pour « dès, déjà »."
      },
      {
        tr: "L'entrepreneur aurait détourné plusieurs millions d'euros. Lui prétend n'avoir rien su, et son avocat rejettera probablement demain les accusations.",
        why: "Trois modaux, trois sources : <i>soll</i> (d'autres le disent), <i>will</i> (lui le soutient), <i>dürfte</i> (supposition probable)."
      },
      {
        tr: "On dit qu'il est malade, mais c'est probablement une excuse.",
        why: "<i>soll</i> rapporte la rumeur, <i>dürfte</i> exprime l'appréciation de celui qui parle."
      }
    ]
  },
  "lesson:c1-u04-l3": {
    theme: "Particules et nuances",
    title: "wohl, etwa, halt, eben",
    objectives: [
      "employer wohl pour atténuer une affirmation en supposition",
      "reconnaître ja comme signal de chose connue ou surprenante",
      "distinguer etwa particule de etwa « environ »",
      "exprimer la résignation avec halt et eben et choisir le bon registre"
    ],
    theory: [
      {
        h: "Petits mots, grandes différences",
        p: "Les particules modales ne se traduisent pas mot à mot : elles disent comment celui qui parle voit ce qu'il dit. <strong>wohl</strong> transforme une affirmation en supposition (<em>Er ist wohl krank</em>, « il doit être malade »). <strong>ja</strong> présente un fait comme déjà connu des deux ou comme surprenant (<em>Du weißt ja, wie lange das dauert. Das ist ja ein Ding!</em>). <strong>etwa</strong> dans une question oui ou non montre la surprise ou le soupçon, et celui qui parle s'attend à un non (<em>Hast du etwa den Schlüssel vergessen?</em>, « tu n'aurais pas oublié la clé, par hasard ? »). <strong>halt</strong> et <strong>eben</strong> déclarent qu'une chose ne peut pas être changée (<em>Dann nehmen wir halt ein Taxi. Da kann man eben nichts machen.</em>)."
      },
      {
        h: "Position et registre",
        p: "Les particules ont tendance à se placer sans accent après le verbe et les pronoms, avant l'information nouvelle (<em>Er wird wohl noch schlafen</em>). Elles sont surtout fréquentes à l'oral, dans les messages et les dialogues, mais cela dépend de la particule et de l'emploi : <em>wohl</em>, par exemple, apparaît aussi dans une prose soignée, alors que <em>halt</em>, plus familier, tend à être évité dans un rapport ou une lettre à un client ; tout dépend du type de texte. <em>eben</em> est plus neutre, et dans la plupart des cas les deux sont interchangeables."
      },
      {
        contrast: "Le français rend ces nuances par l'intonation et par des mots comme <em>sans doute</em>, <em>tout de même</em>, <em>tu sais bien</em>, <em>tant pis</em>, <em>on n'y peut rien</em>, ou par le conditionnel : <em>Hast du etwa ...?</em> est proche de « tu n'aurais pas ... ? », <em>Dann warten wir halt</em> de « alors on attend, tant pis ». Là où le français change le mode ou le tour de la phrase (<em>il sera</em>, <em>il doit</em>), l'allemand ajoute <em>wohl</em>. Aucune des cinq n'a d'équivalent fixe : on apprend la fonction."
      },
      {
        trap: "<em>etwa</em> a deux vies. Devant un nombre, c'est un adverbe, <em>etwa zwei Stunden</em>, « environ deux heures ». Dans une question avec surprise, c'est une particule, <em>Ist er etwa krank?</em>. <em>wohl</em> peut aussi être un adverbe plein : <em>Ich fühle mich hier wohl</em> veut dire « je me sens bien ici »."
      },
      {
        tip: "Enlevez la particule et relisez : la phrase reste correcte mais perd la position de celui qui parle. Puis remettez-la et sentez le changement : <em>Das ist halt so</em> (résigné), <em>Das ist ja so</em> (tu le sais déjà), <em>Das ist wohl so</em> (je crois que oui)."
      }
    ],
    grammar: {
      title: "Particules modales : wohl, ja, etwa, halt, eben",
      note: "<b>wohl</b> : supposition. <b>ja</b> : chose connue ou surprenante. <b>etwa</b> : dans les questions oui/non, surprise ou soupçon. <b>halt / eben</b> : résignation. Registre : surtout oral, <i>halt</i> est le plus familier.",
      table: {
        head: ["particule", "effet", "exemple"],
        rows: [
          ["wohl", "supposition", "Er wird wohl noch schlafen."],
          ["ja", "chose connue ou surprenante", "Du weißt ja, wie lange das dauert."],
          ["etwa", "surprise ou soupçon dans une question, on s'attend à un non", "Hast du etwa den Schlüssel vergessen?"],
          ["halt, eben", "résignation", "Da kann man eben nichts machen."],
          ["registre", "surtout oral ; halt est le plus familier", "Das ist halt so."]
        ]
      },
      examples: [
        { tr: "Il dort encore, probablement.", note: "wohl : supposition" },
        { tr: "Tu sais bien combien de temps ça prend.", note: "ja : chose connue des deux" },
        { tr: "Ce n'est pas déjà tout, tout de même ?", note: "etwa : surprise, on s'attend à un non" },
        { tr: "Le bus est parti, alors on y va à pied, tant pis.", note: "halt : résignation" },
        { tr: "On n'y peut rien.", note: "eben : résignation" },
        { tr: "Tu n'aurais pas oublié la clé, par hasard ?", note: "etwa : soupçon dans une question oui/non" }
      ]
    },
    vocab: [
      "le sous-entendu, le ton (d'une phrase)",
      "la nuance",
      "l'attente",
      "la surprise",
      "la résignation",
      "l'évidence, la chose qui va de soi",
      "laisser entendre, faire allusion",
      "reprocher",
      "accepter, subir (sans réagir)",
      "justement (avec nuance de surprise ou d'agacement)",
      "de toute façon",
      "simplement, tout bonnement"
    ],
    exercises: [
      {
        q: "Une collègue te demande, sur un ton surpris : « Hast du etwa schon gekündigt? » Qu'exprime etwa ?",
        opts: [
          "la surprise ou le soupçon : celui qui parle s'attend à ce que la réponse soit non",
          "une question neutre : celui qui parle n'a aucune attente",
          "une demande polie de confirmation : celui qui parle s'attend à un oui"
        ],
        why: "Dans une question oui/non, <b>etwa</b> signale que celui qui parle ne s'attend pas à un oui et trouve la chose surprenante ou inquiétante (« tu n'aurais pas déjà démissionné ? »)."
      },
      {
        q: "Par la fenêtre, tu vois la voiture du chef sur le parking, mais tu ne l'as pas encore croisé. Avec quelle phrase fais-tu une supposition ?",
        opts: [
          "Der Chef ist wohl schon da.",
          "Der Chef ist ja schon da!",
          "Der Chef ist halt schon da."
        ],
        why: "<b>wohl</b> transforme l'affirmation en supposition (« il doit déjà être arrivé »). <i>ja</i> présenterait le fait comme certain et surprenant, <i>halt</i> comme quelque chose qu'on ne peut pas changer."
      },
      {
        q: "Tu rédiges un rapport formel pour un client et tu veux dire que la liaison ferroviaire est insuffisante. Quelle phrase convient au registre ?",
        opts: [
          "Die Zugverbindung ist leider unzureichend.",
          "Die Zugverbindung ist halt schlecht.",
          "Die Zugverbindung ist eben nicht so toll."
        ],
        why: "Les particules <i>halt</i> et <i>eben</i>, avec un lexique comme <i>schlecht</i> et <i>nicht so toll</i>, relèvent de l'oral : un rapport les évite et emploie un lexique neutre comme <i>unzureichend</i>."
      },
      {
        q: "Le train est supprimé et tu cherches une solution avec résignation : « Der Zug fällt aus? Dann nehmen wir ___ ein Taxi. »",
        hint: "« tant pis » : halt ou eben",
        why: "<b>halt</b> ou <b>eben</b> : « tant pis, on prend un taxi »."
      },
      {
        q: "Face à une situation surprenante : « Das ist ___ ein Ding! »",
        hint: "particule de surprise",
        why: "<b>ja</b> exprime la surprise : <i>Das ist ja ein Ding!</i> est une exclamation figée, « ça alors ! »."
      },
      {
        q: "Complète le dialogue avec les bonnes particules.",
        tr: "« Où est passé Jonas ? » « Il doit être dans les embouteillages. » « Il n'aurait pas encore raté le bus ? » « Tu sais comment il est : on n'y peut rien. »",
        why: "<i>wohl</i> pour la supposition, <i>etwa</i> pour la question soupçonneuse, <i>ja</i> pour ce que les deux savent, <i>halt</i> ou <i>eben</i> pour la résignation. Dans le deuxième blanc, <i>denn</i> convient aussi, dans le troisième <i>doch</i>."
      },
      {
        q: "Dans quelles phrases etwa est-il une particule modale et ne signifie-t-il pas « environ » ?",
        opts: [
          "Bist du etwa schon fertig?",
          "Ist er etwa krank?",
          "Das Seminar dauert etwa zwei Stunden.",
          "Wir treffen uns in etwa einer Stunde."
        ],
        why: "Dans les deux premières, <b>etwa</b> est dans une question oui/non et signale la surprise ou le soupçon. Dans les deux dernières, c'est un adverbe et il vaut « environ »."
      },
      {
        q: "Remets dans l'ordre la question.",
        tr: "Tu n'aurais pas encore oublié la clé, par hasard ?",
        why: "<i>Hast du etwa schon wieder den Schlüssel vergessen?</i> Question oui/non : le verbe ouvre la phrase et <i>etwa</i> suit le sujet ; il peut aussi se placer après <i>den Schlüssel</i>."
      },
      {
        q: "Traduis : « Le chef doit encore être en réunion, alors on attend, tant pis. » (der Chef, die Besprechung, warten ; pour « doit être » utilise wohl)",
        why: "<i>Der Chef wird wohl noch in einer Besprechung sein, dann warten wir eben</i> : <i>wohl</i> pour « doit être », <i>eben</i> ou <i>halt</i> pour « tant pis ». <i>ist wohl</i> convient aussi, ainsi que des connecteurs comme <i>also</i> ou <i>da</i>."
      },
      {
        tr: "Je crois que Paul est malade. D'habitude il n'arrive jamais en retard, et aujourd'hui il doit encore être au lit. Il n'aurait pas la grippe, par hasard ? Eh bien, alors on commence la réunion sans lui, tant pis.",
        why: "Quatre particules en quelques phrases : <i>ja</i> (nous le savons), <i>wohl</i> (supposition), <i>etwa</i> (soupçon), <i>eben</i> (résignation)."
      },
      {
        tr: "Alors on attend, tant pis, le bus arrive bientôt.",
        why: "<i>eben</i> (tant pis) et <i>ja</i> (tu le sais déjà) dans une seule phrase."
      }
    ]
  },
  "lesson:c1-u04-test": {
    theme: "Vérification",
    title: "Test : Il sera fatigué",
    objectives: [
      "vérifier l'unité : Futur de supposition, modaux subjectifs et particules modales"
    ],
    theory: [
      {
        p: "Dix questions sur l'unité. On réussit avec 70 %. Ne relis pas les leçons pendant que tu réponds : si tu ne te souviens pas de quelque chose, mieux vaut revenir en arrière et réviser."
      }
    ],
    exercises: [
      {
        q: "Un collègue attend une réponse : « Die Sekretärin ___ den Brief inzwischen abgeschickt haben. »",
        hint: "Futur II : forme de werden",
        why: "<b>wird</b> : supposition sur le passé avec le Futur II, <i>wird ... abgeschickt haben</i>."
      },
      {
        q: "Dans un article : « Laut einem Zeitungsbericht ___ der Konzern die Löhne gekürzt haben. »",
        hint: "modal pour une rumeur rapportée",
        why: "<b>soll</b> : <i>laut einem Zeitungsbericht</i> introduit une source extérieure, l'auteur ne garantit pas."
      },
      {
        q: "Un collègue te regarde avec méfiance : « Hast du ___ schon wieder die Kaffeekasse geleert? »",
        hint: "« tu n'aurais pas... »",
        why: "<b>etwa</b> : soupçon dans une question oui/non, on s'attend à un non. <i>denn</i>, plus neutre, convient aussi."
      },
      {
        q: "Un expert écrit : « Der Brand dürfte durch einen Kurzschluss entstanden sein. » Quel est son degré de certitude ?",
        opts: [
          "il le juge probable, mais pas certain",
          "il en est absolument certain",
          "il ne fait que rapporter ce que disent d'autres"
        ],
        why: "<b>dürfte</b> exprime la probabilité. Pour la certitude, ce serait <i>muss</i>, pour rapporter des rumeurs <i>soll</i>."
      },
      {
        q: "Un collègue entre au bureau et trouve le travail déjà fait : « Du hast ja schon alles erledigt! » Qu'exprime ja ?",
        opts: [
          "le constat surpris d'un fait que l'on voit",
          "une supposition sur quelque chose qu'on ne voit pas",
          "une question dont on attend une réponse négative"
        ],
        why: "<b>ja</b> présente le fait comme évident et surprenant. Une supposition serait <i>wohl</i>, une question avec attente négative <i>etwa</i>."
      },
      {
        q: "Un collègue dit : « Er kann nicht krank sein, ich habe ihn eben noch gesehen. » Que signifie-t-il ?",
        opts: [
          "il est impossible qu'il soit malade",
          "il n'est pas forcément malade",
          "il n'a pas la permission d'être malade"
        ],
        why: "<b>kann nicht</b> est l'impossibilité. « Il n'est pas forcément malade » serait <i>muss nicht krank sein</i>."
      },
      {
        q: "Complète avec soll, will ou werden.",
        tr: "Selon un article, le ministre aurait détruit des documents. Lui prétend n'en avoir rien su, et son porte-parole promet : d'ici vendredi, nous aurons tout éclairci.",
        why: "<i>soll</i> : c'est un article qui le dit. <i>will</i> : c'est le ministre lui-même qui le soutient. <i>werden</i> : Futur II d'achèvement avec <i>bis Freitag</i>."
      },
      {
        q: "Quelles phrases expriment une supposition et non une obligation ou une permission ?",
        opts: [
          "Sie dürfte inzwischen zu Hause sein.",
          "Das muss ein Irrtum sein.",
          "Du musst um acht da sein.",
          "Hier darf man nicht rauchen."
        ],
        why: "Les deux premières évaluent la probabilité : <i>dürfte</i> et <i>muss</i> avec <i>sein</i>. Dans les deux dernières, les modaux indiquent l'obligation et l'interdiction."
      },
      {
        tr: "Le match a été annulé hier. Le terrain aurait été sous l'eau, mais l'entraîneur prétend n'en avoir rien su. Les supporters seront probablement déçus, mais au football c'est comme ça, tant pis.",
        why: "<i>soll</i> (d'autres le disent), <i>will</i> (lui le soutient), <i>wohl</i> (supposition) et <i>eben</i> (résignation)."
      },
      {
        tr: "Ça ne peut pas être vrai, il s'est probablement trompé.",
        why: "<i>kann nicht</i> pour l'impossibilité, <i>dürfte</i> + infinitif passé pour la supposition probable sur le passé."
      }
    ]
  }
});
