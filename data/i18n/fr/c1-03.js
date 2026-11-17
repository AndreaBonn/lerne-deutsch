/* ============================================================
   Learner-language text (fr) for data/core/c1-03.js, unit c1-u05.
   Keys point at ids in the neutral layer; arrays merge by index,
   so their length has to match core.
   Checked by scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("fr", {
  "unit:c1-u05": {
    title: "Le travail terminé",
    grammarNote: "Participe I et II comme épithète (épithète étendue avec modération ; le type complet et le Gerundivum relèvent du C2) · nominalisation à la place de la subordonnée (nach Abschluss, wegen, bei, trotz, zur, infolge) · cas où la subordonnée doit rester (aucun nom adapté, plusieurs sujets, nuance modale, lisibilité)"
  },
  "lesson:c1-u05-l1": {
    theme: "Procès-verbaux, rapports et textes académiques",
    title: "Partizip I et II comme épithète",
    objectives: [
      "employer le participe I (actif, simultané) et le participe II (passif ou achevé) devant un nom",
      "choisir la bonne terminaison après l'article",
      "construire une épithète étendue courte (im Protokoll festgehaltenen Beschlüsse)",
      "reconnaître quand une épithète trop longue doit être dénouée en relative"
    ],
    theory: [
      {
        h: "Le participe devant le nom",
        p: "Dans les textes formels, une relative se comprime en un participe placé devant le nom, qui prend la terminaison d'un adjectif. Le <strong>participe I</strong> (infinitif + <em>-d</em>) est actif et simultané : <em>die steigenden Kosten</em> = <em>die Kosten, die steigen</em>. Le <strong>participe II</strong> d'un verbe transitif est passif et achevé : <em>die geprüften Unterlagen</em> = <em>die Unterlagen, die geprüft wurden</em>. Le participe II d'un verbe intransitif (avec <em>sein</em>) est en revanche actif et achevé : <em>die gestiegenen Kosten</em> = <em>die Kosten, die gestiegen sind</em>."
      },
      {
        h: "L'épithète étendue, avec modération",
        p: "Entre l'article et le nom peuvent aussi se trouver des compléments, mais le participe reste toujours <strong>juste avant le nom</strong> : <em>die im letzten Quartal erzielten Umsätze</em>. Dans les procès-verbaux et les rapports, un complément ou deux suffisent ; au-delà, le lecteur perd le fil et la relative est le meilleur choix. Le type avec <em>zu</em> (<em>die zu prüfenden Unterlagen</em>) et les constructions plus longues relèvent du C2."
      },
      {
        contrast: "Le français place le participe <strong>après</strong> le nom, et le complément le suit : <em>les résultats obtenus au deuxième trimestre</em>, <em>les données recueillies par le service</em>. En allemand, tout ce qui suivrait le participe en français passe <strong>devant</strong> le nom, entre l'article et le participe : <em>die vom Amt erhobenen Daten</em>. Le participe présent français s'accorde rarement avec un nom en dehors de quelques adjectifs (<em>les coûts croissants</em>, plus souvent <em>en hausse</em> ou <em>qui augmentent</em>), alors que <em>steigend, laufend, vorliegend</em> sont partout dans la langue écrite. Et l'allemand accorde le participe en genre, en nombre et en cas par la terminaison, comme un adjectif, ce qui n'est pas visible en français avec un participe placé après le nom."
      },
      {
        trap: "<em>die prüfenden Unterlagen</em> ne veut pas dire « les documents examinés » : ce sont des documents qui <em>examinent</em> quelque chose. Pour le sens passif, il faut le participe II, <em>die geprüften Unterlagen</em>. Et ne confondez pas les deux temps : <em>die steigenden Kosten</em> augmentent encore, <em>die gestiegenen Kosten</em> ont déjà augmenté. Puis la terminaison : après <em>die</em> au pluriel, c'est <em>-en</em>, donc <em>die geprüften Unterlagen</em>, jamais <em>die geprüfte Unterlagen</em>."
      },
      {
        tip: "Pour comprendre un participe, ou pour le choisir, dénouez-le en relative : si le verbe de la relative est au présent actif (<em>die steigen</em>), il faut le participe I ; si c'est un passif (<em>die geprüft wurden</em>) ou un parfait avec <em>sein</em> (<em>die gestiegen sind</em>), il faut le participe II."
      }
    ],
    grammar: {
      title: "Participe I et II comme épithète",
      note: "<b>Participe I</b> = infinitif + <i>-d</i> : actif, simultané. <b>Participe II</b> : passif et achevé (verbes transitifs), actif et achevé (intransitifs avec <i>sein</i>). Toujours devant le nom, avec la terminaison de l'adjectif ; les compléments se placent entre l'article et le participe.",
      table: {
        head: ["participe", "sens", "relative correspondante", "exemple"],
        rows: [
          ["participe I", "actif, simultané", "die Kosten, die steigen", "die steigenden Kosten"],
          ["participe II (transitif)", "passif, achevé", "die Unterlagen, die geprüft wurden", "die geprüften Unterlagen"],
          ["participe II (intransitif)", "actif, achevé", "die Kosten, die gestiegen sind", "die gestiegenen Kosten"],
          ["épithète étendue", "complément devant le participe", "die Umsätze, die im Quartal erzielt wurden", "die im Quartal erzielten Umsätze"]
        ]
      },
      examples: [
        { tr: "Les coûts énergétiques en hausse pèsent sur les ménages.", note: "participe I : la hausse est en cours" },
        { tr: "Les coûts en hausse sont expliqués dans le rapport.", note: "participe II d'un verbe intransitif : actif et achevé" },
        { tr: "Les documents vérifiés sont joints au dossier.", note: "participe II transitif : passif, « ont été vérifiés »" },
        { tr: "Les membres qui participent à la séance ont approuvé la demande.", note: "participe I avec complément : an der Sitzung teilnehmenden" },
        { tr: "Le budget adopté par le conseil d'administration entre en vigueur en janvier.", note: "vom Vorstand verabschiedete : le complément d'agent précède le participe" },
        { tr: "Les recettes réalisées au dernier trimestre ont été supérieures aux attentes.", note: "épithète étendue courte : im letzten Quartal erzielten" }
      ]
    },
    vocab: [
      "le procès-verbal",
      "la négociation, les négociations",
      "la décision, la résolution",
      "le document, la documentation",
      "le chiffre d'affaires, les recettes",
      "le budget prévisionnel",
      "adopter (un texte ou un budget)",
      "obtenir, réaliser (un résultat)",
      "consigner au procès-verbal, fixer par écrit",
      "en cours, courant",
      "présent, en question",
      "en suspens, restant à payer"
    ],
    exercises: [
      {
        q: "Dans un rapport trimestriel, on lit une fois « die steigenden Kosten » et une fois « die gestiegenen Kosten ». Quelle différence de sens y a-t-il ?",
        opts: [
          "steigenden : la hausse est en cours ; gestiegenen : la hausse a déjà eu lieu",
          "steigenden : la hausse a déjà eu lieu ; gestiegenen : la hausse est en cours",
          "aucune : ce sont des variantes libres de même sens"
        ],
        why: "Le participe I (<i>steigend</i>) est actif et <b>simultané</b> : les coûts sont en train d'augmenter. Le participe II de <i>steigen</i> (<i>gestiegen</i>) est <b>achevé</b> : la hausse a déjà eu lieu. Les deux ne sont donc pas interchangeables."
      },
      {
        q: "Dans un procès-verbal : « Der vom Gemeinderat ___ Haushaltsplan tritt am 1. Januar in Kraft. » Quelle forme complète la phrase ?",
        opts: [
          "verabschiedete",
          "verabschiedende",
          "verabschiedeten"
        ],
        why: "Le budget n'adopte rien, il <b>est adopté</b> : il faut le participe II (passif), donc <i>verabschiedete</i>. <i>verabschiedende</i> serait actif, et <i>verabschiedeten</i> a la mauvaise terminaison : après <i>der</i> au nominatif masculin singulier, c'est <b>-e</b>."
      },
      {
        q: "Dans un rapport financier : « Die ___ Umsätze lagen über den Erwartungen. » Quelle épithète étendue est correcte ?",
        opts: [
          "im vierten Quartal erzielten",
          "im vierten Quartal erzielte",
          "erzielten im vierten Quartal"
        ],
        why: "Le participe se place juste devant le nom et, après <i>die</i> au pluriel, prend <b>-en</b> : <i>die im vierten Quartal erzielten Umsätze</i>. <i>erzielte</i> a la mauvaise terminaison ; dans <i>erzielten im vierten Quartal</i>, le complément suit le participe, ordre possible en français mais pas en allemand."
      },
      {
        q: "Complétez avec le participe II de prüfen et la bonne terminaison : « Die vom Ausschuss ___ Unterlagen werden archiviert. »",
        hint: "participe II de prüfen, pluriel après die",
        why: "<b>geprüften</b> : participe II passif (« les documents qui ont été vérifiés »), avec <b>-en</b> après <i>die</i> au pluriel."
      },
      {
        q: "Complétez avec le participe I de gelten et la bonne terminaison : « Wir bitten um Beachtung der ___ Vorschriften. »",
        hint: "participe I de gelten, génitif pluriel après der",
        why: "<b>geltenden</b> : participe I (actif, simultané : « les règles en vigueur »), <b>-en</b> au génitif pluriel après <i>der</i>."
      },
      {
        q: "Complétez le passage d'un rapport avec le participe II et le participe I.",
        tr: "Les mesures prises l'année dernière n'ont pas réduit les coûts en constante augmentation.",
        why: "<i>ergriffenen</i> (ou <i>getroffenen</i>) : participe II passif, « les mesures qui ont été prises ». <i>steigenden</i> : participe I, parce que la hausse est toujours en cours. Les deux prennent <b>-en</b> après <i>die</i> au pluriel."
      },
      {
        q: "Quelles phrases emploient correctement un participe comme épithète ? (deux réponses)",
        opts: [
          "Die an der Sitzung teilnehmenden Mitglieder stimmten dem Antrag zu.",
          "Die am Dienstag eingereichten Unterlagen sind vollständig.",
          "Die einreichenden Unterlagen sind vollständig.",
          "Die eingereichte Unterlagen sind vollständig."
        ],
        why: "Les deux premières sont correctes : participe I actif (les membres <i>qui participent</i>) et participe II passif (les documents <i>qui ont été déposés</i>). <i>einreichenden</i> donnerait aux documents un rôle actif, et dans <i>eingereichte</i> il manque le <b>-n</b> après <i>die</i> au pluriel."
      },
      {
        q: "Remettez dans l'ordre les mots d'une phrase de procès-verbal.",
        tr: "Les décisions consignées au procès-verbal sont contraignantes pour tous les services.",
        why: "<i>Die im Protokoll festgehaltenen Beschlüsse sind für alle Abteilungen verbindlich.</i> L'épithète <i>im Protokoll festgehaltenen</i> reste compacte entre <i>die</i> et <i>Beschlüsse</i>. <i>verbindlich für alle Abteilungen</i> est possible aussi, de même que l'inversion avec <i>Für alle Abteilungen</i> en tête."
      },
      {
        q: "Traduisez avec une épithète étendue : « Les résultats obtenus au deuxième trimestre ont été discutés pendant la réunion. » (das Quartal, das Ergebnis, erzielen, die Sitzung, besprechen)",
        why: "<i>Die im zweiten Quartal erzielten Ergebnisse wurden in der Sitzung besprochen.</i> Le Perfekt passif (<i>sind ... besprochen worden</i>) et l'inversion avec <i>In der Sitzung</i> en tête sont aussi acceptés. Le complément <i>im zweiten Quartal</i> se place devant le participe."
      },
      {
        tr: "Les décisions consignées au procès-verbal sont valables immédiatement. Les négociations en cours seront conclues à l'automne et les coûts en hausse continuent de peser sur le budget.",
        why: "Dans <i>Protokoll</i>, l'accent tombe sur <b>koll</b> ; dans <i>Verhandlungen</i>, l'accent tombe sur <b>hand</b> ; dans <i>abgeschlossen</i>, l'accent tombe sur <b>schlos</b> ; dans <i>Haushalt</i>, l'accent tombe sur <b>Haus</b>."
      },
      {
        tr: "Les recettes réalisées au dernier trimestre ont été supérieures aux attentes.",
        why: "Dans <i>Quartal</i>, l'accent tombe sur <b>tal</b> ; dans <i>Umsätze</i>, l'accent tombe sur <b>Um</b> ; dans <i>Erwartungen</i>, l'accent tombe sur <b>war</b>."
      }
    ]
  },
  "lesson:c1-u05-l2": {
    theme: "Communiqués, avis et rapports",
    title: "Nominalisation à la place de la subordonnée",
    objectives: [
      "transformer une subordonnée en groupe nominal avec la préposition adaptée",
      "choisir entre nach, wegen, bei, trotz, zu, infolge selon le rapport logique",
      "employer le génitif et les terminaisons après ces prépositions",
      "reconnaître la subordonnée cachée dans un groupe nominal"
    ],
    theory: [
      {
        h: "De la subordonnée au nom",
        p: "Dans les textes formels, une subordonnée peut se comprimer : le verbe devient un nom (<em>abschließen</em> → <em>der Abschluss</em>), la conjonction devient une préposition, le sujet et l'objet du verbe passent au génitif. <em>Nachdem die Prüfung abgeschlossen ist, ...</em> → <em>Nach Abschluss der Prüfung ...</em>. La préposition dépend du <strong>rapport logique</strong> : cause (<em>weil</em> → <em>wegen, aufgrund, infolge</em> + génitif), concession (<em>obwohl</em> → <em>trotz, ungeachtet</em> + génitif), condition (<em>wenn</em> → <em>bei</em> + datif), temps (<em>nachdem</em> → <em>nach</em> + datif), but (<em>um ... zu</em> → <em>zu</em> + datif)."
      },
      {
        h: "Ce qu'on perd",
        p: "Le groupe nominal est compact mais plus pauvre : le temps, le mode et souvent l'agent disparaissent. <em>Nach Abschluss der Prüfung</em> ne dit ni qui a terminé ni s'il s'agit du passé ou du futur, on le déduit du contexte. C'est pourquoi cela fonctionne bien quand le sujet et le temps sont évidents, et mal quand ils ne le sont pas (voir la leçon 3)."
      },
      {
        contrast: "Le français nominalise aussi (<em>à l'issue de la vérification</em>, <em>en cas de besoin</em>, <em>pour la clarification des questions ouvertes</em>), mais il dispose de l'infinitif et du gérondif (<em>après avoir terminé</em>), qui n'existent pas ainsi en allemand. En allemand, ce qui suit le nom est un <strong>génitif sans préposition</strong> (<em>die Klärung offener Fragen</em>, là où le français ajoute <em>de</em>), et les prépositions de cause et de concession se construisent avec le génitif, avec les terminaisons qui en découlent : <em>offener Fragen</em> sans article, <em>der gestiegenen Preise</em> avec l'article."
      },
      {
        trap: "Une préposition fausse change le rapport logique : <em>Nach mehrfacher Mahnung blieb die Zahlung aus</em> dit que le paiement manque <em>après</em> les rappels, alors que <em>Trotz mehrfacher Mahnung</em> dit qu'il manque <em>malgré</em> les rappels. Attention aussi aux cas : <em>infolge</em> et <em>trotz</em> veulent le génitif (<em>Infolge der gestiegenen Preise</em>), pas le datif."
      },
      {
        tip: "Devant un groupe nominal, demandez-vous quelle conjonction s'y cache : cause → <em>weil</em>, concession → <em>obwohl</em>, condition → <em>wenn</em>, temps → <em>nachdem, bevor</em>, but → <em>um ... zu</em>. Puis réécrivez-le en subordonnée et vérifiez que le sens ne change pas."
      }
    ],
    grammar: {
      title: "Nominalisation à la place de la subordonnée",
      note: "Le verbe devient un nom, la conjonction une préposition : <b>nach, bei, zu</b> + datif ; <b>wegen, aufgrund, infolge, trotz</b> + génitif. Le sujet et l'objet du verbe passent au génitif.",
      table: {
        head: ["subordonnée", "groupe nominal", "exemple"],
        rows: [
          ["weil ... (cause)", "wegen, aufgrund, infolge + génitif", "Wegen der Verzögerung ..."],
          ["obwohl ... (concession)", "trotz, ungeachtet + génitif", "Trotz mehrfacher Mahnung ..."],
          ["wenn ... (condition)", "bei + datif", "Bei Bedarf ..."],
          ["nachdem ... (temps)", "nach + datif", "Nach Abschluss der Prüfung ..."],
          ["um ... zu (but)", "zu + datif", "Zur Klärung offener Fragen ..."]
        ]
      },
      examples: [
        { tr: "Après la fin de la vérification, le rapport sera publié.", note: "nach + datif = nachdem ; der Prüfung est le génitif qui dépend de Abschluss" },
        { tr: "En raison du retard de la livraison, la date a dû être reportée.", note: "wegen + génitif = weil" },
        { tr: "En cas de besoin, d'autres documents peuvent être demandés.", note: "bei + datif = wenn man es braucht" },
        { tr: "Malgré des rappels répétés, le paiement n'est pas arrivé.", note: "trotz + génitif ; mehrfacher : génitif féminin sans article" },
        { tr: "Pour clarifier les questions ouvertes, une réunion est convoquée.", note: "zu + datif = um ... zu klären ; offener Fragen : génitif pluriel sans article" },
        { tr: "À la suite de la hausse des prix de l'énergie, la demande a reculé.", note: "infolge + génitif : cause qui produit un effet" }
      ]
    },
    vocab: [
      "la conclusion, la fin",
      "le retard",
      "le besoin, la nécessité",
      "le rappel (de paiement)",
      "la clarification",
      "la demande (du marché)",
      "demander, réclamer (des documents)",
      "convoquer",
      "manquer, ne pas arriver",
      "publier",
      "à la suite de, en conséquence de",
      "en raison de, sur la base de"
    ],
    exercises: [
      {
        q: "Dans une lettre : « Obwohl mehrfach gemahnt wurde, blieb die Zahlung aus. » Quelle version nominale a le même sens ?",
        opts: [
          "Trotz mehrfacher Mahnung blieb die Zahlung aus.",
          "Nach mehrfacher Mahnung blieb die Zahlung aus.",
          "Wegen mehrfacher Mahnung blieb die Zahlung aus."
        ],
        why: "<i>obwohl</i> est concessif : <b>trotz</b> + génitif. <i>nach</i> exprimerait un rapport temporel (« après les rappels ») et <i>wegen</i> ferait des rappels la cause du défaut de paiement."
      },
      {
        q: "Dans un communiqué de presse. Quelle phrase est correcte ?",
        opts: [
          "Infolge der gestiegenen Energiepreise sank die Nachfrage.",
          "Infolge den gestiegenen Energiepreisen sank die Nachfrage.",
          "Infolge die gestiegenen Energiepreise sank die Nachfrage."
        ],
        why: "<i>infolge</i> se construit avec le <b>génitif</b> : <i>der gestiegenen Energiepreise</i>, pluriel avec article et terminaison <b>-en</b>. Le datif et l'accusatif ne sont pas admis."
      },
      {
        q: "Quelle subordonnée correspond à « Bei Bedarf können weitere Unterlagen angefordert werden » ?",
        opts: [
          "Wenn weitere Unterlagen benötigt werden, können sie angefordert werden.",
          "Weil weitere Unterlagen benötigt wurden, können sie angefordert werden.",
          "Obwohl weitere Unterlagen benötigt werden, können sie angefordert werden."
        ],
        why: "<i>bei Bedarf</i> exprime une <b>condition</b> : « si besoin est ». Cela correspond à <i>wenn</i> (ou <i>falls</i>). <i>weil</i> et <i>obwohl</i> donneraient une cause ou une concession."
      },
      {
        q: "Complétez avec la préposition concessive : « ___ mehrfacher Erinnerung ist die Zahlung nicht eingegangen. »",
        hint: "préposition concessive : « malgré »",
        why: "<b>Trotz</b> (ou la variante plus formelle <b>Ungeachtet</b>) + génitif : <i>mehrfacher Erinnerung</i>."
      },
      {
        q: "Complétez avec la terminaison de l'adjectif : « Zur Klärung ___ Fragen wird eine Sitzung einberufen. »",
        hint: "adjectif « offen » au génitif pluriel, sans article",
        why: "<b>offener</b> : après <i>zu</i> on a le datif (<i>zur Klärung</i>), mais <i>Fragen</i> dépend de <i>Klärung</i> et est un génitif pluriel sans article, donc l'adjectif prend <b>-er</b>."
      },
      {
        q: "Complétez le communiqué avec les deux prépositions.",
        tr: "En raison du retard de la livraison, la date a dû être reportée. Si nécessaire, une nouvelle date sera convenue.",
        why: "<i>Wegen</i> (ou <i>Aufgrund</i>, <i>Infolge</i>) + génitif pour la cause. <i>Bei Bedarf</i> pour la condition ; dans ce contexte, <i>Nach Bedarf</i>, « selon les besoins », convient aussi."
      },
      {
        q: "Associez chaque expression à son sens.",
        pairs: [
          "à la suite de, en conséquence de",
          "malgré",
          "si nécessaire",
          "au vu de, compte tenu de"
        ]
      },
      {
        q: "Remettez dans l'ordre les mots de l'invitation.",
        tr: "Pour clarifier les questions ouvertes, une réunion est convoquée.",
        why: "<i>Zur Klärung offener Fragen wird eine Sitzung einberufen.</i> Le groupe nominal avec <i>zur</i> ouvre la phrase et le verbe conjugué est en deuxième position. <i>Eine Sitzung wird zur Klärung offener Fragen einberufen</i> convient aussi."
      },
      {
        q: "Traduisez en style nominal : « Si nécessaire, on peut demander d'autres documents. » (der Bedarf, die Unterlagen, anfordern)",
        why: "<i>Bei Bedarf können weitere Unterlagen angefordert werden.</i> La place de <i>bei Bedarf</i> après le sujet et la forme avec <i>man</i> sont acceptées."
      },
      {
        tr: "Après la fin de la vérification, le rapport sera publié. Si nécessaire, d'autres documents peuvent être demandés. Pour clarifier les questions ouvertes, la direction du projet se tient volontiers à votre disposition.",
        why: "Dans <i>Abschluss</i>, l'accent tombe sur <b>Ab</b> ; dans <i>veröffentlicht</i>, l'accent tombe sur <b>öf</b> ; dans <i>Klärung</i>, l'accent tombe sur <b>Klä</b>."
      },
      {
        tr: "Malgré des rappels répétés, le paiement n'est pas arrivé.",
        why: "Dans <i>mehrfacher</i>, l'accent tombe sur <b>mehr</b> ; dans <i>Erinnerung</i>, l'accent tombe sur <b>in</b> ; dans <i>eingegangen</i>, l'accent tombe sur <b>gan</b>."
      }
    ]
  },
  "lesson:c1-u05-l3": {
    theme: "Lisibilité et précision",
    title: "Quand la subordonnée reste",
    objectives: [
      "reconnaître les cas où la nominalisation ne convient pas",
      "conserver la subordonnée quand il y a plusieurs sujets ou plusieurs conditions",
      "rendre par la subordonnée les nuances modales (sollte, falls ... sollten)",
      "choisir entre forme compacte et subordonnée en pensant au lecteur"
    ],
    theory: [
      {
        h: "Les quatre cas où la subordonnée reste",
        p: "La forme compacte n'est pas toujours la meilleure. La subordonnée est préférable quand : (1) il n'y a <strong>pas de nom adapté</strong> ou que le nom sonne de façon peu naturelle ; (2) il y a <strong>plusieurs sujets</strong> ou plusieurs prédicats, et que le groupe nominal cacherait qui fait quoi : <em>weil der Vorsitzende erkrankt war und die Referentin im Ausland festsaß</em> ; (3) il faut une <strong>nuance modale</strong> ou de probabilité (<em>sollte, könnte, offenbar, nur dann ..., wenn</em>), qu'un nom n'exprime pas ; (4) la <strong>lisibilité</strong> en souffre, par exemple avec plusieurs génitifs et compléments à la file."
      },
      {
        h: "Comment choisir",
        p: "Avant de nominaliser, posez quatre questions. Qui agit, et le nom le dit-il ? Existe-t-il un nom naturel (<em>Abschluss, Klärung</em>) ? Dois-je garder un temps ou un mode ? Le lecteur comprend-il dès la première lecture ? Si la réponse est oui partout, la forme compacte fonctionne (<em>Nach Abschluss der Prüfung ...</em>) ; sinon la subordonnée est plus claire, et dans les textes destinés à un public non spécialiste elle l'est presque toujours."
      },
      {
        contrast: "Le français dispose d'outils compacts que l'allemand n'a pas : <em>après avoir terminé</em>, <em>les travaux terminés</em>, <em>au cas où la vérification durerait plus longtemps</em>. En allemand, le gérondif manque, et l'infinitif avec <em>ohne zu</em> ou <em>um ... zu</em> exige le même sujet : quand il y a deux sujets, il faut une subordonnée avec <em>dass</em> ou <em>weil</em>. La nuance de <em>au cas où ... devrait</em> ou de <em>si jamais</em> se rend par <em>Sollte die Prüfung länger dauern, ...</em> ou <em>falls ... ändern sollten</em>."
      },
      {
        trap: "Ne nominalisez pas tout simplement parce que « ça fait formel » : le résultat est un allemand de bureau difficile à lire, et un nom comme <em>seitens der Teilnehmenden</em> cache le sujet. Et <em>sollte</em> en première position n'est pas le « devrait » d'obligation : <em>Sollte die Prüfung länger dauern</em> veut dire « si jamais la vérification devait durer plus longtemps », une condition peu probable."
      },
      {
        tip: "Lisez la phrase à voix haute. Si vous devez reprendre votre souffle au milieu d'un groupe nominal, parce qu'il y a deux génitifs et un <em>durch</em>, coupez-la en une subordonnée."
      }
    ],
    grammar: {
      title: "Forme compacte ou subordonnée",
      note: "Forme compacte : même sujet, nom naturel, temps évident. Subordonnée : plusieurs sujets, aucun nom adapté, nuance modale, génitifs à la file. Pour l'éventualité : <i>Sollte ..., falls ... sollten</i>.",
      table: {
        head: ["situation", "choix", "exemple"],
        rows: [
          ["même sujet, nom naturel", "forme compacte", "Nach Abschluss der Prüfung ..."],
          ["deux sujets ou plusieurs prédicats", "subordonnée", "..., weil der Vorsitzende erkrankt war und die Referentin festsaß."],
          ["nuance modale ou de probabilité", "subordonnée avec sollte", "Sollte die Prüfung länger dauern, ..."],
          ["plusieurs conditions ensemble", "subordonnée", "..., wenn der Vorstand zugestimmt hat und die Finanzierung gesichert ist."],
          ["génitifs et compléments à la file", "subordonnée", "..., nachdem die Teilnehmenden den Fragebogen ausgefüllt hatten."]
        ]
      },
      examples: [
        { tr: "La séance a été reportée parce que le président était malade et que la rapporteuse était bloquée à l'étranger.", note: "deux sujets : la forme nominale en cacherait un" },
        { tr: "Le contrat ne sera signé que lorsque le conseil aura approuvé et que le financement sera assuré.", note: "deux conditions avec des verbes différents : subordonnée" },
        { tr: "Si la vérification devait durer plus longtemps, la date sera reportée.", note: "Sollte en première position : éventualité peu probable" },
        { tr: "Le financement tombe si les conditions-cadres devaient changer.", note: "falls ... ändern sollten : nuance modale" },
        { tr: "Les résultats ne sont significatifs que si l'échantillon est représentatif.", note: "nur dann ..., wenn : condition nécessaire, impossible à rendre avec bei" },
        { tr: "L'évaluation a commencé après que les participants avaient rempli le questionnaire.", note: "subordonnée temporelle au plus-que-parfait : plus lisible qu'une chaîne de génitifs" }
      ]
    },
    vocab: [
      "la compréhensibilité",
      "la condition préalable, l'exigence",
      "les conditions-cadres",
      "l'échantillon (statistique)",
      "le président (d'une séance)",
      "le demandeur",
      "laisser passer, ne pas respecter (un délai)",
      "tomber, ne plus s'appliquer",
      "approuver, donner son accord",
      "rejeter, refuser",
      "significatif, fiable",
      "représentatif"
    ],
    exercises: [
      {
        q: "Dans un procès-verbal : « Die Sitzung wurde verschoben, weil der Vorsitzende erkrankt war und die Referentin im Ausland festsaß. » Pourquoi vaut-il mieux garder ici la subordonnée ?",
        opts: [
          "Il y a deux sujets différents avec leur prédicat : en forme nominale, l'un des deux acteurs disparaîtrait ou la phrase deviendrait lourde",
          "Parce qu'une cause ne peut jamais s'exprimer avec un groupe nominal",
          "Parce que le passé (war, festsaß) ne peut pas s'exprimer avec un nom"
        ],
        why: "Une cause peut se nominaliser (<i>wegen</i> + génitif), mais ici les faits sont <b>deux</b>, avec des sujets différents : la forme nominale les comprimerait lourdement ou en perdrait un. Les deux autres affirmations sont fausses."
      },
      {
        q: "« Sollte die Prüfung länger dauern, wird der Termin verschoben. » Que perd-on avec la version nominale « Bei längerer Dauer der Prüfung wird der Termin verschoben » ?",
        opts: [
          "la nuance d'éventualité peu probable exprimée par sollte",
          "la valeur conditionnelle de la phrase",
          "le sujet, parce que Prüfung disparaît"
        ],
        why: "<i>bei</i> conserve la <b>condition</b>, et <i>Prüfung</i> est toujours dans le texte. On perd la nuance modale de <i>sollte</i> (« si jamais cela devait »), qu'un nom ne peut pas porter."
      },
      {
        q: "Dans un rapport destiné à un public non spécialiste, quelle formulation est la plus lisible ?",
        opts: [
          "Die Auswertung begann, nachdem die Teilnehmenden den Fragebogen ausgefüllt hatten, den die Projektleitung entwickelt hatte.",
          "Die Auswertung begann nach dem Ausfüllen des von der Projektleitung entwickelten Fragebogens durch die Teilnehmenden.",
          "Die Auswertung begann nach Ausfüllung des durch die Projektleitung entwickelten Fragebogens seitens der Teilnehmenden."
        ],
        why: "Les trois phrases sont grammaticales, mais dans les deux dernières le lecteur doit tenir ensemble génitif, participe étendu et complément d'agent (<i>durch, seitens</i>) avant d'arriver au sens. La subordonnée dit <b>qui fait quoi</b> en deux temps."
      },
      {
        q: "Complétez : « Die Ergebnisse sind nur dann aussagekräftig, ___ die Stichprobe repräsentativ ist. »",
        hint: "conjonction conditionnelle",
        why: "<b>wenn</b> : <i>nur dann ..., wenn</i> exprime une condition nécessaire. Avec un groupe nominal (<i>bei repräsentativer Stichprobe</i>), la force de <i>nur dann</i> se perd."
      },
      {
        q: "Complétez avec le verbe modal : « Falls sich die Rahmenbedingungen ändern ___, entfällt die Förderung. »",
        hint: "Konjunktiv II d'un modal : éventualité peu probable",
        why: "<b>sollten</b> : <i>falls ... sollten</i> signale une éventualité lointaine, la nuance qu'une forme nominale ne peut pas rendre."
      },
      {
        q: "Complétez les deux conditions d'un contrat.",
        tr: "Le contrat ne sera signé que lorsque le conseil aura approuvé et que le financement sera assuré.",
        why: "<i>wenn</i> (ou <i>sobald</i>, <i>nachdem</i>) pour la première condition, <i>ist</i> pour la seconde : <i>die Finanzierung gesichert ist</i>. Deux conditions avec des sujets différents sont une bonne raison de garder la subordonnée."
      },
      {
        q: "Dans quels cas convient-il de garder la subordonnée ? (deux réponses)",
        opts: [
          "quand les sujets sont deux personnes différentes et que le nom cacherait qui agit",
          "quand il faut une nuance modale comme sollte, könnte, offenbar",
          "chaque fois que le texte est un procès-verbal officiel",
          "chaque fois que la phrase contient un verbe"
        ],
        why: "Les deux critères sont les sujets multiples et la nuance modale. Un procès-verbal officiel admet le style nominal (il l'emploie même volontiers), et le fait qu'une phrase contienne un verbe ne dit rien sur le choix."
      },
      {
        q: "Remettez dans l'ordre les mots de la phrase.",
        tr: "L'évaluation a commencé après que les participants avaient rempli le questionnaire.",
        why: "<i>Die Auswertung begann, nachdem die Teilnehmenden den Fragebogen ausgefüllt hatten.</i> Dans la subordonnée, le verbe conjugué (<i>hatten</i>) va à la fin. La subordonnée en tête de phrase, avec <i>begann</i> juste après la virgule, est aussi acceptée."
      },
      {
        q: "Traduisez en conservant l'éventualité : « Au cas où la commission rejetterait la demande, le délai sera prolongé. » (der Ausschuss, der Antrag, ablehnen, die Frist, verlängern)",
        why: "<i>Sollte der Ausschuss den Antrag ablehnen, wird die Frist verlängert.</i> <i>falls</i> et <i>wenn</i> (avec ou sans <i>sollte</i>) sont aussi acceptés, de même que la forme sans conjonction <i>Lehnt der Ausschuss den Antrag ab, ...</i>."
      },
      {
        tr: "La séance a été reportée parce que le président était malade et que la rapporteuse était bloquée à l'étranger. Si la vérification devait durer plus longtemps, la date sera fixée de nouveau.",
        why: "Dans <i>Vorsitzende</i>, l'accent tombe sur <b>Vor</b> ; dans <i>Referentin</i>, l'accent tombe sur <b>ren</b> ; dans <i>Ausland</i>, l'accent tombe sur <b>Aus</b> ; dans <i>festgelegt</i>, l'accent tombe sur <b>fest</b>."
      },
      {
        tr: "Si la vérification devait durer plus longtemps, la date sera reportée.",
        why: "Dans <i>Prüfung</i>, l'accent tombe sur <b>Prü</b> ; dans <i>dauern</i>, l'accent tombe sur <b>dau</b> ; dans <i>verschoben</i>, l'accent tombe sur <b>scho</b>."
      }
    ]
  },
  "lesson:c1-u05-test": {
    theme: "Évaluation",
    title: "Test : Le travail terminé",
    objectives: [
      "vérifier l'unité et réviser les fonctions de werden et le Futur de supposition du niveau"
    ],
    theory: [
      {
        p: "Douze questions sur l'unité et sur la révision du niveau (werden et Futur II de supposition). On réussit avec 70 %. Ne relisez pas les leçons pendant que vous répondez : si vous ne vous souvenez pas de quelque chose, mieux vaut revenir en arrière et réviser."
      }
    ],
    exercises: [
      {
        q: "L'installation est à l'arrêt depuis des heures. Complétez la supposition sur le passé : « Die Anlage wird wohl ausgefallen ___. »",
        hint: "Futur II : auxiliaire de ausfallen",
        why: "<b>sein</b> : <i>ausfallen</i> est un verbe de changement d'état et veut <i>sein</i> au Perfekt ; le Futur II de supposition est <i>wird ... ausgefallen sein</i>, « elle sera tombée en panne »."
      },
      {
        q: "Complétez : « Die Verhandlungen sind erst im Mai abgeschlossen ___. »",
        hint: "participe de werden au passif",
        why: "<b>worden</b> : au Perfekt passif, le participe de <i>werden</i> perd <i>ge-</i>. <i>geworden</i> serait le verbe plein « devenir »."
      },
      {
        q: "Complétez avec le participe I de stehen et la bonne terminaison : « Die uns zur Verfügung ___ Mittel reichen nicht aus. »",
        hint: "participe I de stehen, pluriel après die",
        why: "<b>stehenden</b> : <i>die uns zur Verfügung stehenden Mittel</i>, « les moyens dont nous disposons ». Participe I actif et simultané, avec <b>-en</b> après <i>die</i> au pluriel."
      },
      {
        q: "Complétez avec la préposition : « ___ Rücksprache mit dem Vorstand kann der Vertrag nicht geändert werden. »",
        hint: "préposition : « sans »",
        why: "<b>Ohne</b> + accusatif : <i>ohne Rücksprache</i> est la version nominale de <i>ohne dass man sich mit dem Vorstand bespricht</i>."
      },
      {
        q: "Dans un mail interne : « Er wird jetzt im Meeting sein. » Qu'exprime werden ?",
        opts: [
          "une supposition sur le présent",
          "un futur",
          "un passif"
        ],
        why: "<i>werden</i> + infinitif avec <i>jetzt</i> est une <b>supposition</b> sur le présent : « il doit être en réunion en ce moment ». Sans <i>jetzt</i> ni <i>wohl</i>, on pourrait aussi y lire un futur."
      },
      {
        q: "Quel groupe correspond à « die Anträge, die gerade bearbeitet werden » ?",
        opts: [
          "die gerade bearbeiteten Anträge",
          "die gerade bearbeitenden Anträge",
          "die gerade bearbeitete Anträge"
        ],
        why: "C'est un passif en cours : il faut le participe II, <i>bearbeiteten</i>, avec <b>-en</b> après <i>die</i> au pluriel. <i>bearbeitenden</i> donnerait aux demandes un rôle actif ; <i>bearbeitete</i> a la mauvaise terminaison."
      },
      {
        q: "Quelle subordonnée correspond à « Trotz Erkrankung des Referenten fand die Tagung statt » ?",
        opts: [
          "Obwohl der Referent erkrankt war, fand die Tagung statt.",
          "Weil der Referent erkrankt war, fand die Tagung statt.",
          "Nachdem der Referent erkrankt war, fand die Tagung statt."
        ],
        why: "<i>trotz</i> est concessif : <i>obwohl</i>. <i>weil</i> et <i>nachdem</i> changeraient le rapport logique."
      },
      {
        q: "Quelles phrases emploient correctement un participe comme épithète ? (deux réponses)",
        opts: [
          "Die zur Verfügung gestellten Mittel sind begrenzt.",
          "Die auf der Sitzung getroffenen Entscheidungen gelten sofort.",
          "Die getroffene Entscheidungen gelten sofort.",
          "Die zur Verfügung stellenden Mittel sind begrenzt."
        ],
        why: "Les deux premières sont correctes : participe II passif avec <b>-en</b> après <i>die</i>. Dans <i>getroffene</i>, il manque le <b>-n</b> ; <i>stellenden</i> donnerait aux moyens un rôle actif (« les moyens qui mettent à disposition »)."
      },
      {
        q: "Complétez le communiqué avec le participe II et la préposition.",
        tr: "Nous vous informerons à temps. Les mesures prévues par nos soins ne deviendront effectives qu'après la fin de la vérification.",
        why: "<i>geplanten</i> (ou <i>vorgesehenen</i>) : participe II passif avec <b>-en</b>. <i>nach</i> ou <i>mit Abschluss der Prüfung</i> : temps avec <i>nach</i> + datif, ou « avec la fin »."
      },
      {
        q: "Traduisez : « Les décisions prises en réunion seront communiquées après la fin de la vérification. » (die Sitzung, die Entscheidung, mitteilen, der Abschluss, die Prüfung)",
        why: "<i>Die in der Sitzung getroffenen Entscheidungen werden nach Abschluss der Prüfung mitgeteilt.</i> Le passif avec <i>werden</i> rend le futur du texte français ; la phrase qui commence par <i>Nach Abschluss der Prüfung</i> est aussi acceptée."
      },
      {
        tr: "Il aura terminé le rapport d'ici vendredi. Les décisions consignées au procès-verbal seront mises en œuvre après la fin de la vérification.",
        why: "Dans <i>fertiggestellt</i>, l'accent tombe sur <b>fer</b> ; dans <i>Beschlüsse</i>, l'accent tombe sur <b>schlüs</b> ; dans <i>umgesetzt</i>, l'accent tombe sur <b>um</b>."
      },
      {
        tr: "Les coûts en hausse continueront de peser sur le budget.",
        why: "Dans <i>gestiegenen</i>, l'accent tombe sur <b>stie</b> ; dans <i>belasten</i>, l'accent tombe sur <b>las</b> ; dans <i>Haushalt</i>, l'accent tombe sur <b>Haus</b>."
      }
    ]
  }
});
