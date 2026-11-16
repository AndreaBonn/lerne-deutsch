/* ============================================================
   Learner-language text (it) for data/core/a2-02.js, units a2-u05 and a2-u06.
   Keys point at ids in the neutral layer; arrays merge by index,
   so their length has to match core.
   Checked by scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("it", {
  "unit:a2-u05": {
    title: "Casa e quartiere",
    grammarNote: "aggettivo dopo ein, kein e possessivo · stellen/stehen, legen/liegen · genere dei composti · Könnten Sie ...?"
  },
  "lesson:a2-u05-l1": {
    theme: "Cercare casa",
    title: "Cerco un appartamento luminoso",
    objectives: [
      "leggere un annuncio di affitto con aggettivi davanti al nome",
      "scegliere la desinenza dell'aggettivo dopo ein, kein e i possessivi",
      "descrivere una casa con hell, ruhig, günstig, möbliert"
    ],
    theory: [
      {
        h: "L'aggettivo davanti al nome",
        p: "Davanti al nome l'aggettivo prende una <strong>desinenza</strong> che dice genere, numero e caso. Dopo <em>ein, kein</em> e i possessivi (<em>mein, dein, sein ...</em>) la regola pratica è una sola: dove <em>ein</em> <strong>non ha desinenza</strong> (maschile nominativo, neutro nominativo e accusativo) la porta l'aggettivo, <strong>-er</strong> o <strong>-es</strong>. Al femminile nominativo e accusativo l'aggettivo prende <strong>-e</strong>; in tutti gli altri casi, dativo compreso, <strong>-en</strong>. <em>Ich suche eine helle Wohnung. Die Wohnung hat einen großen Balkon. Das ist ein altes Haus.</em>"
      },
      {
        contrast: "In italiano l'aggettivo sta di solito <strong>dopo</strong> il nome e concorda in genere e numero: <em>una casa luminosa</em>. In tedesco sta <strong>prima</strong> e in più porta il caso: <em>eine helle Wohnung</em> (nominativo o accusativo), <em>einen großen Balkon</em> (accusativo maschile). Dopo <em>sein</em> invece resta invariabile: <em>Die Wohnung ist hell</em>, senza desinenza. Attenzione al genere: <em>l'appartamento</em> è maschile in italiano, ma <em>die Wohnung</em> è femminile, quindi «un appartamento luminoso» è <em>eine helle Wohnung</em>, non «ein heller Wohnung»."
      },
      {
        trap: "L'errore più frequente è confondere <strong>-en</strong> ed <strong>-er</strong>. <em>-er</em> compare solo al maschile nominativo (<em>ein neuer Balkon</em>); già all'accusativo diventa <em>-en</em> (<em>einen neuen Balkon</em>). Anche <em>Wohnung</em> e <em>Haus</em> non coincidono con l'italiano «casa»: <em>die Wohnung</em> è l'appartamento in cui abiti, <em>das Haus</em> è l'edificio o la casa intera."
      },
      {
        tip: "<em>dunkel</em> perde la <em>e</em> davanti alla desinenza: <em>eine dunkle Küche, ein dunkles Zimmer</em>. Con i possessivi vale la stessa regola di <em>ein</em>: <em>mein neuer Nachbar, meine neue Wohnung</em>. Al plurale dopo <em>kein</em> e i possessivi l'aggettivo prende <em>-en</em>: <em>keine neuen Möbel</em>."
      }
    ],
    grammar: {
      title: "Aggettivo dopo ein, kein e possessivo",
      note: "Dove <b>ein</b> non ha desinenza la porta l'aggettivo (<b>-er, -es</b>); femminile nominativo e accusativo <b>-e</b>; negli altri casi <b>-en</b>.",
      table: {
        head: ["caso", "maschile", "femminile", "neutro"],
        rows: [
          ["nominativo", "ein neuer Balkon", "eine neue Küche", "ein neues Zimmer"],
          ["accusativo", "einen neuen Balkon", "eine neue Küche", "ein neues Zimmer"],
          ["dativo", "einem neuen Balkon", "einer neuen Küche", "einem neuen Zimmer"]
        ]
      },
      examples: [
        { tr: "Cerco un appartamento luminoso.", note: "Wohnung è femminile: eine helle" },
        { tr: "L'appartamento ha un balcone grande.", note: "accusativo maschile: einen großen" },
        { tr: "È una casa vecchia.", note: "neutro nominativo: ein altes" },
        { tr: "Non abbiamo una cucina nuova.", note: "kein + femminile: keine neue" },
        { tr: "Questo è il mio nuovo vicino.", note: "possessivo come ein: mein neuer" },
        { tr: "Lei abita in un piccolo appartamento.", note: "dativo femminile: einer kleinen" }
      ]
    },
    vocab: [
      "l'appartamento, la casa",
      "l'affitto",
      "il balcone",
      "il vicino",
      "l'annuncio",
      "luminoso, chiaro",
      "buio, scuro",
      "tranquillo",
      "conveniente, economico",
      "arredato",
      "cercare",
      "affittare, prendere in affitto"
    ],
    exercises: [
      {
        q: "Come dici «Cerco un appartamento luminoso»?",
        opts: ["Ich suche eine helle Wohnung.", "Ich suche ein helle Wohnung.", "Ich suche eine heller Wohnung."],
        why: "<i>Wohnung</i> è femminile: dopo <i>eine</i> l'aggettivo prende <b>-e</b>, quindi <i>helle</i>."
      },
      {
        q: "Completa con la desinenza giusta: «Das ist ein ___ Haus.» (alt)",
        opts: ["alter", "altes", "alten"],
        why: "<i>Haus</i> è neutro e al nominativo <i>ein</i> non ha desinenza: la porta l'aggettivo, <b>-es</b>."
      },
      {
        q: "Quale frase è corretta?",
        opts: [
          "Wir wohnen in einer ruhige Straße.",
          "Wir wohnen in einer ruhigen Straße.",
          "Wir wohnen in einer ruhiger Straße."
        ],
        why: "Dopo <i>in</i> con <i>wo?</i> il caso è il dativo, e il dativo vuole <b>-en</b>: <i>in einer ruhigen Straße</i>."
      },
      {
        q: "Completa: «Das ist meine ___ Wohnung.» (neu, con la desinenza)",
        hint: "possessivo + femminile nominativo",
        why: "Dopo <i>meine</i> il femminile nominativo ha <b>-e</b>: <i>neue</i>."
      },
      {
        q: "Abbina ogni aggettivo al suo significato.",
        pairs: ["luminoso", "buio", "tranquillo", "conveniente"]
      },
      {
        tr: "Cerco un appartamento tranquillo e economico.",
        why: "<i>Ich suche eine ruhige und günstige Wohnung</i>: due aggettivi uniti da <i>und</i> prendono la stessa desinenza, <b>-e</b>. Va bene anche l'ordine inverso."
      },
      {
        q: "Completa la frase.",
        tr: "L'appartamento ha un balcone grande e una cucina nuova.",
        why: "<i>Balkon</i> è maschile all'accusativo: <b>einen großen</b> Balkon. <i>Küche</i> è femminile: <b>eine neue</b> Küche."
      },
      {
        tr: "Cerchiamo un appartamento economico.",
        why: "Il verbo coniugato è in seconda posizione: <i>Wir suchen eine günstige Wohnung</i>. L'aggettivo <i>günstige</i> prende <b>-e</b> perché <i>Wohnung</i> è femminile."
      },
      {
        tr: "L'appartamento ha un balcone grande e una cucina nuova.",
        why: "In <i>großen</i> la <b>ß</b> è una <b>s</b> sorda e la <b>o</b> è lunga; in <i>Küche</i> la <b>ü</b> è breve e aperta [ʏ] e la <b>ch</b> è [ç], un suono più morbido del [x]: <i>Küche</i> [ˈkʏçə]."
      },
      {
        tr: "Cerco un appartamento luminoso e tranquillo.",
        why: "In <i>Wohnung</i> la <b>h</b> non si pronuncia e allunga la <b>o</b>; in <i>helle</i> la <b>h</b> iniziale è un soffio leggero e la <b>ll</b> indica una <b>e</b> breve."
      }
    ]
  },
  "lesson:a2-u05-l2": {
    theme: "Arredare",
    title: "Dove metto il divano?",
    objectives: [
      "usare wohin? con l'accusativo e wo? con il dativo",
      "scegliere fra stellen/stehen e legen/liegen",
      "dire dove si mettono i mobili e dove stanno"
    ],
    theory: [
      {
        h: "wohin? o wo?",
        p: "Le preposizioni <em>in, an, auf, vor, hinter, neben, über, unter, zwischen</em> vogliono due casi. Se la frase indica la <strong>destinazione</strong> (<strong>wohin?</strong>, verso dove?) il caso è l'<strong>accusativo</strong>; se indica il <strong>luogo</strong> (<strong>wo?</strong>, dove?) è il <strong>dativo</strong>, anche quando nel luogo c'è un movimento (<em>Ich laufe im Garten</em>). <em>Ich stelle das Sofa an die Wand</em> (wohin?), <em>Das Sofa steht an der Wand</em> (wo?). Contrazioni: <em>in das → ins, an das → ans, auf das → aufs, in dem → im, an dem → am</em>."
      },
      {
        p: "Il tedesco sceglie il verbo secondo la posizione dell'oggetto. <strong>stellen / stehen</strong> per ciò che sta in piedi (<em>die Lampe, der Schrank, das Regal</em>), <strong>legen / liegen</strong> per ciò che sta disteso (<em>das Buch, der Teppich</em>). <em>stellen</em> e <em>legen</em> indicano una destinazione e rispondono a <em>wohin?</em>; <em>stehen</em> e <em>liegen</em> indicano un luogo e rispondono a <em>wo?</em>. Il caso riguarda il complemento spaziale introdotto da una preposizione a doppia reggenza (<em>auf, in, an, unter</em>...): accusativo per <em>wohin?</em>, dativo per <em>wo?</em>."
      },
      {
        contrast: "L'italiano usa un verbo per tutto, <em>mettere</em>, e la stessa preposizione per lo stato e per il movimento: <em>metto il libro sul tavolo, il libro è sul tavolo</em>. Il tedesco distingue due volte: con il <strong>verbo</strong> (<em>legen</em> o <em>stellen</em>, <em>liegen</em> o <em>stehen</em>) e con il <strong>caso</strong> (accusativo o dativo): <em>Ich lege das Buch auf den Tisch. Das Buch liegt auf dem Tisch.</em>"
      },
      {
        trap: "Non tradurre «mettere» con un verbo solo. <em>Ich stelle das Buch auf den Tisch</em> si dice se il libro sta in piedi, <em>Ich lege das Buch auf den Tisch</em> se è steso: dipende dall'oggetto e dalla posizione, non dalla parola italiana. Con <em>stehen</em> e <em>liegen</em>, che indicano un luogo (<em>wo?</em>), il complemento con preposizione a doppia reggenza va al dativo: <em>Die Lampe steht auf dem Tisch</em>, mai «auf den Tisch»."
      }
    ],
    grammar: {
      title: "wohin? + accusativo, wo? + dativo",
      note: "Con una preposizione a doppia reggenza: <b>wohin?</b> (destinazione, con stellen, legen) = accusativo; <b>wo?</b> (luogo, con stehen, liegen) = dativo.",
      table: {
        head: ["domanda", "verbo", "esempio"],
        rows: [
          ["wohin? (accusativo)", "stellen", "Ich stelle die Lampe in die Ecke."],
          ["wo? (dativo)", "stehen", "Die Lampe steht in der Ecke."],
          ["wohin? (accusativo)", "legen", "Ich lege den Teppich unter den Tisch."],
          ["wo? (dativo)", "liegen", "Der Teppich liegt unter dem Tisch."]
        ]
      },
      examples: [
        { tr: "Metto il divano alla parete.", note: "wohin?: an die Wand è accusativo" },
        { tr: "Il divano sta alla parete.", note: "stehen + dativo: an der Wand" },
        { tr: "Metto il tappeto sotto il tavolo.", note: "wohin?: unter den Tisch è accusativo" },
        { tr: "Il tappeto sta sotto il tavolo.", note: "liegen + dativo: unter dem Tisch" },
        { tr: "Dove metti la lampada? Nell'angolo.", note: "wohin? risponde con l'accusativo: in die Ecke" },
        { tr: "La lampada sta nell'angolo.", note: "wo? risponde con il dativo: in der Ecke" }
      ]
    },
    vocab: [
      "mettere (in piedi)",
      "stare (in piedi)",
      "mettere (disteso)",
      "stare (disteso)",
      "il divano",
      "l'armadio, il mobile",
      "lo scaffale",
      "la lampada",
      "il tappeto",
      "il quadro",
      "la parete",
      "l'angolo"
    ],
    exercises: [
      {
        q: "Come dici «Metto il divano alla parete»?",
        opts: ["Ich stelle das Sofa an der Wand.", "Ich stelle das Sofa an die Wand.", "Ich stehe das Sofa an die Wand."],
        why: "C'è una destinazione (<i>wohin?</i>): <i>stellen</i> e l'accusativo, <b>an die Wand</b>."
      },
      {
        q: "Scegli il verbo: «Der Schrank ___ in der Ecke.»",
        opts: ["steht", "stellt", "legt"],
        why: "L'armadio sta in piedi e la frase indica dove si trova (<i>in der Ecke</i>, dativo): <b>steht</b>."
      },
      {
        q: "Completa: «Ich lege das Buch auf ___ Tisch.»",
        opts: ["dem", "den", "der"],
        why: "<i>Legen</i> indica una destinazione (<i>wohin?</i>), quindi accusativo: <i>Tisch</i> è maschile, <b>den</b> Tisch."
      },
      {
        q: "Quali frasi sono corrette, se stellen e legen devono dire dove va a finire l'oggetto (wohin?)?",
        opts: [
          "Ich stelle die Lampe in die Ecke.",
          "Die Lampe steht in der Ecke.",
          "Ich lege das Buch auf dem Tisch.",
          "Der Teppich liegt unter dem Tisch.",
          "Ich stelle das Regal an der Wand."
        ],
        why: "La frase 3 vuole l'accusativo (<i>auf den Tisch</i>), la frase 5 pure (<i>an die Wand</i>): <i>legen</i> e <i>stellen</i> rispondono a <i>wohin?</i>."
      },
      {
        q: "Completa: «Ich stelle das Sofa an ___ Wand.» (articolo determinativo)",
        hint: "wohin? femminile accusativo",
        why: "<i>Stellen</i> + <i>wohin?</i> vuole l'accusativo, e <i>Wand</i> è femminile: <b>die</b>."
      },
      {
        q: "Completa: «Der Teppich ___ unter dem Tisch.» (liegen, terza persona singolare)",
        hint: "stato, verbo di posizione",
        why: "<i>Liegen</i> alla terza persona singolare: <b>liegt</b>. <i>Unter dem Tisch</i> è dativo, risponde a <i>wo?</i>."
      },
      {
        tr: "Metto la lampada nell'angolo.",
        why: "<i>Ich stelle die Lampe in die Ecke</i>: la lampada sta in piedi, quindi <i>stellen</i>, e <i>in die Ecke</i> è accusativo."
      },
      {
        q: "Completa la frase.",
        tr: "Metto lo scaffale alla parete. Adesso sta lì.",
        why: "<i>Stelle</i> indica la destinazione, <i>steht</i> il luogo: il primo verbo risponde a <i>wohin?</i> (accusativo), il secondo a <i>wo?</i> (dativo)."
      },
      {
        tr: "Metto il divano alla parete e il tappeto sotto il tavolo.",
        why: "In <i>Teppich</i> la <b>pp</b> indica una <b>e</b> breve e la <b>ch</b> dopo <b>i</b> è [ç]; in <i>unter</i> la <b>u</b> è breve e la <b>t</b> è chiara."
      },
      {
        tr: "Lo scaffale sta alla parete e il tappeto sta sotto il tavolo.",
        why: "In <i>Regal</i> l'accento cade su <b>gal</b>; <i>Wand</i> inizia con <b>W</b>, che si legge come la «v» italiana."
      }
    ]
  },
  "lesson:a2-u05-l3": {
    theme: "Le stanze",
    title: "il soggiorno, la cucina",
    objectives: [
      "formare e leggere i nomi composti",
      "ricavare il genere dall'ultimo elemento del composto",
      "nominare le stanze e gli elementi della casa"
    ],
    theory: [
      {
        h: "Il genere segue l'ultimo elemento",
        p: "Il tedesco incolla due nomi (o un verbo e un nome) in una sola parola, e il genere lo decide l'<strong>ultimo elemento</strong>: <em>wohnen + das Zimmer = das Wohnzimmer</em>, <em>die Küche + der Tisch = der Küchentisch</em>, <em>das Haus + die Tür = die Haustür</em>. Il primo elemento precisa il significato ma non cambia l'articolo. A volte compare una lettera di collegamento: i nomi in <em>-ung</em> di norma prendono una <em>-s</em>, <em>die Wohnung + die Tür = die Wohnungstür</em>."
      },
      {
        contrast: "L'italiano di solito non incolla ma collega con una preposizione: <em>camera da letto, sala da pranzo, porta di casa</em>. Il tedesco scrive tutto in una parola e il genere può non coincidere con quello italiano: <em>la camera da letto</em> è femminile, <em>das Schlafzimmer</em> è neutro (perché <em>das Zimmer</em>); <em>il bagno</em> e <em>il soggiorno</em> sono maschili, <em>das Badezimmer</em> e <em>das Wohnzimmer</em> sono neutri. Coincidono invece <em>la cucina</em> e <em>die Küche</em>, <em>la lavatrice</em> e <em>die Waschmaschine</em>, <em>il frigorifero</em> e <em>der Kühlschrank</em>."
      },
      {
        trap: "Il primo elemento non decide il genere: <em>die Haustür</em> è femminile benché <em>das Haus</em> sia neutro, e <em>der Küchentisch</em> è maschile benché <em>die Küche</em> sia femminile. Per sapere l'articolo guarda sempre la <strong>fine</strong> della parola. Quando incontri un composto lungo, scomponilo da destra a sinistra."
      },
      {
        tip: "Per capire un composto nuovo, leggilo dalla fine: <em>der Kühlschrank</em> è uno <em>Schrank</em> (armadio) che raffredda (<em>kühlen</em>). Per ogni stanza impara il nome intero con il suo articolo: <em>das Wohnzimmer, das Schlafzimmer, das Badezimmer, die Küche</em>."
      }
    ],
    grammar: {
      title: "I nomi composti e il loro genere",
      note: "Il genere è quello dell'<b>ultimo</b> elemento: <b>das</b> Zimmer, quindi <b>das</b> Wohnzimmer. Dopo -ung spesso compare una <b>-s</b>: Wohnung<b>s</b>tür.",
      table: {
        head: ["composto", "formazione", "significato"],
        rows: [
          ["das Wohnzimmer", "wohnen + das Zimmer", "soggiorno"],
          ["das Schlafzimmer", "schlafen + das Zimmer", "camera da letto"],
          ["die Haustür", "das Haus + die Tür", "porta di casa"],
          ["der Küchentisch", "die Küche + der Tisch", "tavolo della cucina"],
          ["die Wohnungstür", "die Wohnung + s + die Tür", "porta dell'appartamento"]
        ]
      },
      examples: [
        { tr: "Il soggiorno è grande e luminoso.", note: "das Zimmer: neutro, quindi das Wohnzimmer" },
        { tr: "La porta di casa è nuova.", note: "die Tür: femminile, quindi die Haustür" },
        { tr: "La chiave è sul tavolo della cucina.", note: "dativo con wo?: auf dem Küchentisch" },
        { tr: "Il frigorifero sta in cucina.", note: "der Kühlschrank: come der Schrank" },
        { tr: "Abbiamo un piccolo bagno.", note: "ein kleines Badezimmer: neutro, -es" },
        { tr: "La lavatrice è in cantina.", note: "im Keller: dativo contratto" }
      ]
    },
    vocab: [
      "il soggiorno",
      "la camera da letto",
      "il bagno",
      "la cucina",
      "il corridoio, l'ingresso",
      "la cantina",
      "il giardino",
      "la porta di casa",
      "la porta dell'appartamento",
      "il frigorifero",
      "la lavatrice",
      "la chiave"
    ],
    exercises: [
      {
        q: "Scegli l'articolo determinativo giusto per ogni nome.",
        items: ["soggiorno", "cucina", "porta di casa", "frigorifero", "camera da letto", "lavatrice"]
      },
      {
        q: "Abbina ogni composto al suo significato.",
        pairs: ["soggiorno", "camera da letto", "bagno", "porta di casa"]
      },
      {
        q: "Perché «Schlafzimmer» è neutro?",
        opts: [
          "Perché Zimmer è neutro e il genere segue l'ultimo elemento.",
          "Perché schlafen è un verbo.",
          "Perché finisce in -er."
        ],
        why: "Il genere di un composto è quello dell'ultimo elemento: <i>das Zimmer</i>, quindi <b>das</b> Schlafzimmer."
      },
      {
        q: "Completa: «Die Küche + der Schrank = ___ Küchenschrank» (articolo determinativo)",
        hint: "guarda l'ultimo elemento",
        why: "L'ultimo elemento è <i>der Schrank</i>: il composto è maschile, <b>der</b> Küchenschrank."
      },
      {
        q: "Completa il composto con la lettera di collegamento: «Wohnung + Tür = Wohnung___tür»",
        hint: "una lettera sola",
        why: "Dopo <i>-ung</i> di norma compare una <b>-s</b>: <i>die Wohnungstür</i>."
      },
      {
        tr: "Il soggiorno è grande e luminoso.",
        why: "<i>Das Wohnzimmer ist groß und hell</i>: dopo <i>sein</i> gli aggettivi non prendono desinenza. Va bene anche l'ordine inverso."
      },
      {
        q: "Completa la frase.",
        tr: "La lavatrice è in cantina e il frigorifero è in cucina.",
        why: "<i>Waschmaschine</i> è femminile (<i>die</i>), <i>Keller</i> prende <i>im</i> (dativo contratto), <i>Küche</i> vuole <i>in der</i>."
      },
      {
        tr: "La chiave è sul tavolo della cucina.",
        why: "<i>Der Schlüssel liegt auf dem Küchentisch</i>: la chiave è distesa (<i>liegen</i>), lo stato vuole il dativo, <i>auf dem</i>."
      },
      {
        tr: "Il frigorifero è in cucina e la lavatrice è in cantina.",
        why: "In <i>Küche</i> la <b>ü</b> è breve e aperta [ʏ] e la <b>ch</b> è [ç] ([ˈkʏçə]); in <i>Keller</i> la <b>K</b> è piena e la <b>e</b> breve."
      },
      {
        tr: "La camera da letto e il bagno sono piccoli, ma il soggiorno è grande.",
        why: "In <i>Schlafzimmer</i> la <b>sch</b> è [ʃ] e l'accento cade su <b>Schlaf</b>; in <i>Badezimmer</i> la <b>a</b> è lunga."
      }
    ]
  },
  "lesson:a2-u05-l4": {
    theme: "Un guasto in casa",
    title: "Il riscaldamento è rotto",
    objectives: [
      "segnalare un guasto all'amministrazione o al custode",
      "formulare una richiesta cortese con Könnten Sie ...?",
      "tenere l'infinito in fondo alla frase"
    ],
    theory: [
      {
        h: "Könnten Sie ...?",
        p: "Per chiedere qualcosa a chi non conosci, a un custode o a un'amministrazione, usi la forma di cortesia <strong>Könnten Sie ...?</strong> (<em>Konjunktiv II</em> di <em>können</em>) con l'<strong>infinito in fondo</strong>: <em>Könnten Sie bitte morgen vorbeikommen? Könnten Sie die Heizung reparieren?</em> Un'alternativa altrettanto cortese è <strong>Würden Sie ...?</strong> con l'infinito finale. Per segnalare il problema bastano frasi semplici: <em>Die Heizung ist kaputt. Der Wasserhahn tropft. Die Heizung funktioniert nicht.</em>"
      },
      {
        contrast: "<em>Könnten Sie</em> corrisponde al condizionale italiano <em>potrebbe</em>: in tutte e due le lingue la forma verbale addolcisce la richiesta. La differenza sta nel pronome: l'italiano usa <em>Lei</em> con la terza persona singolare, il tedesco usa <em>Sie</em> con la forma della terza persona <strong>plurale</strong> (<em>Könnten Sie</em>, <em>Sie sind</em>). E dopo <em>sein</em> <em>kaputt</em> resta senza desinenza, come gli altri aggettivi predicativi, mentre «rotto» si accorda: <em>Die Heizung ist kaputt, Die Fenster sind kaputt</em>."
      },
      {
        trap: "L'infinito non segue subito <em>Könnten</em>: va in fondo alla frase, dopo tutti i complementi. <em>Könnten Sie die Heizung reparieren?</em>, non «Könnten Sie reparieren die Heizung?». Per telefono la formula usuale è <em>Guten Tag, hier ist Weber</em>; <em>Ich bin Weber</em> è corretto, ma non è la formula tipica. Con la cortesia si resta su <em>Sie</em>, anche se l'altra persona è più giovane."
      },
      {
        tip: "Se la richiesta è urgente aggiungi <em>dringend</em> o <em>so schnell wie möglich</em>, senza perdere la cortesia: <em>Könnten Sie bitte so schnell wie möglich vorbeikommen?</em> <em>Bitte</em> sta di solito dopo il pronome."
      }
    ],
    grammar: {
      title: "Könnten Sie ...? e il guasto",
      note: "<b>Könnten Sie</b> + complementi + <b>infinito</b> in fondo. Un guasto: <b>... ist kaputt</b> o <b>... funktioniert nicht</b>.",
      table: {
        head: ["situazione", "frase", "funzione"],
        rows: [
          ["presentarsi", "Guten Tag, hier ist Weber.", "per telefono"],
          ["segnalare", "Die Heizung ist kaputt.", "il guasto"],
          ["segnalare", "Der Wasserhahn tropft.", "il guasto"],
          ["chiedere", "Könnten Sie bitte morgen vorbeikommen?", "richiesta cortese"],
          ["chiedere", "Würden Sie das bitte reparieren?", "richiesta cortese"]
        ]
      },
      examples: [
        { tr: "Buongiorno, sono Weber, di Hauptstraße 5.", note: "per telefono: hier ist ..." },
        { tr: "Il riscaldamento è rotto.", note: "dopo sein, kaputt resta senza desinenza" },
        { tr: "Il rubinetto della cucina gocciola.", note: "tropfen: terza persona singolare" },
        { tr: "Potrebbe passare domani, per favore?", note: "infinito in fondo: vorbeikommen" },
        { tr: "Potrebbe riparare il riscaldamento?", note: "Könnten Sie ... reparieren" },
        { tr: "Potrebbe ripararlo il prima possibile?", note: "Würden Sie ... reparieren" }
      ]
    },
    vocab: [
      "il riscaldamento",
      "rotto, guasto",
      "funzionare",
      "riparare",
      "l'amministrazione condominiale",
      "il custode, il portinaio",
      "la riparazione",
      "il rubinetto",
      "la finestra",
      "gocciolare",
      "passare (venire da qualcuno)",
      "urgente"
    ],
    exercises: [
      {
        q: "Come chiedi con cortesia di riparare il riscaldamento?",
        opts: [
          "Könnten Sie reparieren die Heizung?",
          "Könnten Sie die Heizung reparieren?",
          "Könnten Sie die Heizung repariert?"
        ],
        why: "Con <i>Könnten</i> l'infinito va <b>in fondo</b> alla frase: <i>Könnten Sie die Heizung reparieren?</i>."
      },
      {
        q: "Quale frase è la richiesta cortese?",
        opts: ["Kommen Sie morgen!", "Sie kommen morgen.", "Könnten Sie morgen vorbeikommen?"],
        why: "<b>Könnten Sie ...?</b> è la formula cortese. Le altre due sono un ordine e un'affermazione."
      },
      {
        q: "Completa: «Die Heizung ist ___.» (rotta)",
        hint: "dopo sein, senza desinenza",
        why: "<b>kaputt</b>, con accento sull'ultima sillaba, dopo <b>sein</b> resta senza desinenza."
      },
      {
        q: "Completa: «___ Sie bitte morgen vorbeikommen?» (forma di cortesia di können)",
        hint: "Konjunktiv II, con Sie",
        why: "<b>Könnten</b>: <i>ich könnte</i>, <i>Sie könnten</i>. Con <i>Sie</i> si usa la forma plurale."
      },
      {
        q: "Abbina ogni parola al suo significato.",
        pairs: ["riscaldamento", "rubinetto", "custode", "amministrazione condominiale"]
      },
      {
        tr: "Potrebbe riparare il riscaldamento, per favore?",
        why: "<i>Könnten Sie bitte die Heizung reparieren</i>: l'infinito chiude la frase. Va bene anche <i>Könnten Sie die Heizung bitte reparieren</i>."
      },
      {
        tr: "Il rubinetto in cucina gocciola.",
        why: "<i>Der Wasserhahn in der Küche tropft</i>: <i>in der Küche</i> è dativo (<i>wo?</i>). Va bene anche <i>Der Wasserhahn tropft in der Küche</i>."
      },
      {
        q: "Completa la frase.",
        tr: "Buongiorno, sono Weber. Il riscaldamento è rotto. Potrebbe passare oggi?",
        why: "Per telefono la formula usuale è <i>hier ist Weber</i> (anche <i>ich bin Weber</i> è corretto). Per la richiesta cortese vanno bene <i>Könnten</i> e <i>Würden</i>; anche <i>Können</i> è corretto, ma meno cortese."
      },
      {
        tr: "Buongiorno, sono Weber. Il riscaldamento è rotto. Potrebbe passare oggi?",
        why: "In <i>Heizung</i> la <b>ei</b> si legge [aɪ] come in «hai» e la <b>z</b> è [ts]; in <i>kaputt</i> l'accento cade sull'ultima sillaba."
      },
      {
        tr: "Potrebbe riparare il rubinetto della cucina, per favore?",
        why: "In <i>Wasserhahn</i> la prima <b>h</b> di <i>Hahn</i> è un soffio leggero, la seconda non si pronuncia e allunga la <b>a</b>; in <i>Küche</i> la <b>ch</b> è [ç]."
      }
    ]
  },
  "lesson:a2-u05-test": {
    theme: "Verifica",
    title: "Test: Casa e quartiere",
    objectives: ["verificare aggettivo dopo ein, wohin e wo con le preposizioni, nomi composti e richieste cortesi"],
    theory: [
      {
        p: "Dieci domande sull'unità. Si supera con il 70%. Non riguardare le lezioni mentre rispondi: se non ricordi qualcosa, è meglio tornare a ripassare."
      }
    ],
    exercises: [
      {
        q: "Completa: «Ich suche eine ___ Wohnung.» (hell, con la desinenza)",
        hint: "femminile accusativo dopo eine",
        why: "Dopo <i>eine</i> il femminile ha <b>-e</b>: <i>helle</i>."
      },
      {
        q: "Completa: «Das ist ein ___ Haus.» (alt, con la desinenza)",
        hint: "neutro nominativo dopo ein",
        why: "<i>Ein</i> non ha desinenza al neutro nominativo, quindi la porta l'aggettivo: <b>altes</b>."
      },
      {
        q: "Completa: «Ich stelle die Lampe in ___ Ecke.» (articolo determinativo)",
        hint: "wohin?",
        why: "<i>Stellen</i> risponde a <i>wohin?</i>: accusativo femminile, <b>die</b> Ecke."
      },
      {
        q: "Completa: «Der Teppich ___ unter dem Tisch.» (liegen)",
        hint: "terza persona singolare",
        why: "Stato e dativo: <b>liegt</b>."
      },
      {
        q: "Completa: «Die Küche + der Schrank = ___ Küchenschrank» (articolo determinativo)",
        hint: "guarda l'ultimo elemento",
        why: "Il genere segue l'ultimo elemento: <b>der</b> Schrank, quindi <b>der</b> Küchenschrank."
      },
      {
        q: "Quale frase dice dove va a finire il libro (wohin?)?",
        opts: [
          "Ich lege das Buch auf dem Tisch.",
          "Ich lege das Buch auf den Tisch.",
          "Ich liege das Buch auf den Tisch."
        ],
        why: "<i>Legen</i> indica la destinazione (<i>wohin?</i>) e vuole l'accusativo: <b>auf den Tisch</b>. <i>Liegen</i> non ha oggetto."
      },
      {
        q: "Quale frase è la richiesta cortese?",
        opts: ["Sie reparieren die Heizung jetzt.", "Könnten Sie die Heizung reparieren?", "Die Heizung reparieren Sie."],
        why: "<b>Könnten Sie ...?</b> con l'infinito in fondo è la formula cortese."
      },
      {
        q: "Abbina ogni parola al suo significato.",
        pairs: ["riscaldamento", "custode", "balcone", "chiave"]
      },
      {
        tr: "Il frigorifero è in cucina e il divano è in soggiorno.",
        why: "In <i>Kühlschrank</i> la <b>ü</b> è lunga [yː] e <b>sch</b> è [ʃ] ([ˈkyːlʃʁaŋk]); in <i>Sofa</i> l'accento cade sulla <b>o</b>, che è lunga."
      },
      {
        tr: "Cerco un appartamento luminoso con un balcone grande.",
        why: "In <i>großen</i> la <b>ß</b> è una <b>s</b> sorda; <i>einem großen Balkon</i> è dativo dopo <i>mit</i>, quindi <b>-en</b>."
      }
    ]
  },
  "unit:a2-u06": {
    title: "In ufficio",
    grammarNote: "Könnten Sie ...? · domande indirette con ob e parola interrogativa · lettera formale · man · zuerst, dann, danach, außerdem"
  },
  "lesson:a2-u06-l1": {
    theme: "Al telefono",
    title: "Potrebbe richiamarmi?",
    objectives: [
      "telefonare e lasciare un messaggio con Könnten Sie ...?",
      "fare una domanda indiretta con ob o con una parola interrogativa",
      "mandare il verbo in fondo nella frase introdotta da ob, wann, wo e dass"
    ],
    theory: [
      {
        h: "Chiedere un richiamo e lasciare un messaggio",
        p: "Al telefono con una persona che non conosci usi la forma di cortesia: <em>Guten Tag, hier ist Weber. Könnten Sie mich bitte zurückrufen?</em> Per lasciare un messaggio: <em>Könnten Sie Frau Keller etwas ausrichten?</em> Chi risponde dice di solito <em>Ich verbinde Sie</em> (la passo) oppure <em>Frau Keller ist gerade nicht am Platz</em> (non è alla scrivania). <em>Zurückrufen</em> e <em>ausrichten</em> sono verbi separabili: all'infinito, dopo <em>Könnten Sie ...</em>, restano interi e vanno in fondo."
      },
      {
        h: "Domande indirette: ob e parola interrogativa",
        p: "Una domanda può entrare dentro un'altra frase. Se la domanda diretta è <strong>sì/no</strong> (<em>Ist Herr Weber im Büro?</em>) si introduce con <strong>ob</strong>; se ha una <strong>parola interrogativa</strong> (<em>wann, wo, wer, wie, warum</em>) quella parola resta e apre la subordinata. In tutti e due i casi il verbo coniugato va <strong>in fondo</strong> e prima c'è la virgola: <em>Ich möchte wissen, ob Herr Weber heute im Büro ist. Ich weiß nicht, wann die Besprechung beginnt. Könnten Sie mir sagen, wo Frau Keller ist?</em> Con un verbo separabile il prefisso si riunisce al verbo: <em>Ich weiß nicht, wann er anruft.</em> Lo stesso vale per <strong>dass</strong>: <em>Könnten Sie ihr sagen, dass ich morgen wieder anrufe?</em>"
      },
      {
        contrast: "In italiano la domanda indiretta conserva l'ordine normale: <em>non so quando comincia la riunione</em>, con il verbo subito dopo il soggetto o prima di lui. In tedesco l'ordine è quello della subordinata, con il verbo coniugato in fondo: <em>Ich weiß nicht, wann die Besprechung beginnt</em>, non «wann beginnt die Besprechung». Inoltre l'italiano <em>se</em> vale sia per il dubbio sia per la condizione: <em>non so se viene</em> è <em>ob</em>, <em>se viene, ...</em> è <em>wenn</em>. Il tedesco li distingue."
      },
      {
        trap: "Dopo <em>ob</em> non si usa <em>wenn</em>: <em>Ich weiß nicht, ob er kommt</em>, non «wenn er kommt». E la virgola prima di <em>ob</em>, <em>dass</em> e della parola interrogativa è obbligatoria. Dopo <em>Könnten Sie mir sagen</em> la domanda indiretta non è più una domanda diretta: <em>Könnten Sie mir sagen, wo Frau Keller ist?</em>, non «wo ist Frau Keller»."
      },
      {
        tip: "Altre formule utili: <em>Die Leitung ist besetzt</em> (la linea è occupata), <em>Ich erreiche ihn nicht</em> (non riesco a raggiungerlo), <em>Wie ist Ihre Telefonnummer?</em>. Con la forma di cortesia si resta su <em>Sie</em> dall'inizio alla fine della telefonata."
      }
    ],
    grammar: {
      title: "Könnten Sie ...? e le domande indirette",
      note: "<b>Könnten Sie</b> + infinito in fondo. Domanda indiretta: <b>ob</b> o parola interrogativa, e il verbo coniugato <b>in fondo</b>. Con <b>dass</b> (affermazione, non domanda) il verbo va in fondo allo stesso modo: <i>Ich rufe morgen wieder an</i> diventa <i>..., dass ich morgen wieder anrufe.</i>",
      table: {
        head: ["domanda diretta", "domanda indiretta", "introduce"],
        rows: [
          ["Ist Herr Weber im Büro?", "..., ob Herr Weber im Büro ist.", "ob (sì/no)"],
          ["Wann beginnt die Besprechung?", "..., wann die Besprechung beginnt.", "wann"],
          ["Wo ist Frau Keller?", "..., wo Frau Keller ist.", "wo"]
        ]
      },
      examples: [
        { tr: "Potrebbe richiamarmi, per favore?", note: "zurückrufen resta intero, in fondo" },
        { tr: "Potrebbe riferire qualcosa alla signora Keller?", note: "ausrichten, in fondo" },
        { tr: "Vorrei sapere se il signor Weber oggi è in ufficio.", note: "ob: il verbo ist va in fondo" },
        { tr: "Non so quando comincia la riunione.", note: "wann: il verbo beginnt va in fondo" },
        { tr: "Potrebbe dirmi dov'è la signora Keller?", note: "wo: il verbo ist va in fondo" },
        { tr: "Potrebbe dirle che domani richiamo?", note: "dass: anrufe si riunisce" }
      ]
    },
    vocab: [
      "telefonare, chiamare",
      "richiamare",
      "il messaggio",
      "riferire, far sapere",
      "il numero interno",
      "mettere in comunicazione, passare",
      "la segreteria telefonica",
      "raggiungere, riuscire a contattare",
      "occupato",
      "il numero di telefono",
      "l'appuntamento, la scadenza",
      "la linea"
    ],
    exercises: [
      {
        q: "Come chiedi con cortesia di essere richiamato?",
        opts: [
          "Könnten Sie mich bitte zurückrufen?",
          "Könnten Sie zurückrufen mich bitte?",
          "Könnten Sie mich bitte zurückrufe?"
        ],
        why: "<i>Könnten Sie</i> + complementi + infinito <b>intero</b> in fondo: <i>zurückrufen</i>."
      },
      {
        tr: "Tutta la coniugazione di können al Konjunktiv II.",
        why: "<i>könnte, könntest, könnte, könnten, könntet, könnten</i>: la <b>ö</b> con l'umlaut e la <b>-e-</b> del Konjunktiv II. <i>Ich</i> ed <i>er/sie/es</i> hanno la stessa forma, e con <i>Sie</i> si usa <b>könnten</b>."
      },
      {
        q: "Completa: «Ich weiß nicht, ___ Herr Weber heute im Büro ist.» (se)",
        hint: "domanda sì/no",
        why: "Una domanda sì/no diventa indiretta con <b>ob</b>, e il verbo <i>ist</i> va in fondo."
      },
      {
        q: "Completa: «Ich möchte wissen, ___ die Besprechung beginnt.» (quando)",
        hint: "parola interrogativa",
        why: "<b>wann</b> è la parola interrogativa e resta: <i>..., wann die Besprechung beginnt</i>."
      },
      {
        q: "Abbina ogni parola al suo significato.",
        pairs: ["telefonare", "messaggio", "numero interno", "occupato"]
      },
      {
        tr: "Potrebbe richiamarmi, per favore?",
        why: "<i>Könnten Sie mich bitte zurückrufen</i>: l'infinito intero chiude la frase. Va bene anche <i>Könnten Sie mich zurückrufen, bitte</i>."
      },
      {
        q: "Completa la frase.",
        tr: "Potrebbe riferire qualcosa al signor Weber? Vorrei sapere se è in ufficio.",
        why: "<i>Etwas ausrichten</i>: l'infinito resta intero, in fondo. <i>Wissen, ob ...</i>: una domanda sì/no diventa indiretta con <b>ob</b>."
      },
      {
        q: "Sei al telefono con un'azienda.",
        setting: "Telefoni per parlare con la signora Keller.",
        lines: [
          { tr: "Ditta Brandt, buongiorno." },
          {
            tr: "Presentati e chiedi di essere messo in comunicazione con la signora Keller.",
            answerTr: "Buongiorno, sono Weber. Potrebbe passarmi la signora Keller?"
          },
          { tr: "La signora Keller non è alla scrivania. Devo riferirle qualcosa?" },
          {
            tr: "Rispondi di sì e chiedi di dirle che richiami domani.",
            answerTr: "Sì, grazie. Potrebbe dirle che domani richiamo?"
          }
        ]
      },
      {
        tr: "Buongiorno, sono Weber. Potrebbe richiamarmi, per favore? Vorrei sapere se l'appuntamento è lunedì.",
        why: "In <i>zurückrufen</i> l'accento cade su <b>rück</b> (<b>ü</b> breve [ʏ]); in <i>Könnten</i> la <b>ö</b> è breve e aperta [œ]; <i>Weber</i> comincia con <b>w</b> = [v]."
      },
      {
        tr: "Potrebbe dire alla signora Keller che domani richiamo?",
        why: "In <i>wieder</i> la <b>ie</b> è una <b>i</b> lunga [iː] e la <b>w</b> iniziale si legge [v]; in <i>anrufe</i> l'accento cade su <b>an</b> e il verbo sta in fondo dopo <i>dass</i>."
      }
    ]
  },
  "lesson:a2-u06-l2": {
    theme: "Scrivere una mail",
    title: "Gentile signora Keller",
    objectives: [
      "aprire e chiudere una mail formale con Sehr geehrte Frau ... e Mit freundlichen Grüßen",
      "scrivere le forme di cortesia Sie, Ihr, Ihnen con la maiuscola",
      "chiedere una conferma con Könnten Sie ...?"
    ],
    theory: [
      {
        h: "Apertura e chiusura di una mail formale",
        p: "Una mail formale ha una formula fissa. All'inizio: <strong>Sehr geehrte Frau Keller,</strong> a una donna, <strong>Sehr geehrter Herr Weber,</strong> a un uomo, <strong>Sehr geehrte Damen und Herren,</strong> a più persone o a un destinatario sconosciuto. Si scrive <em>Frau</em> o <em>Herr</em> e il cognome, senza il nome di battesimo. In fondo: <strong>Mit freundlichen Grüßen</strong> e sotto il nome, senza virgola finale. Il corpo del messaggio è breve: <em>Vielen Dank für Ihre E-Mail. Im Anhang finden Sie die Datei. Könnten Sie mir den Termin bitte bestätigen?</em>"
      },
      {
        contrast: "L'italiano apre con <em>Gentile signora Keller</em> o <em>Egregio signor Weber</em> e chiude con <em>Cordiali saluti</em>. Il tedesco usa <em>Sehr geehrte</em> (letteralmente «molto onorata»), ed è un aggettivo senza articolo: per questo prende <strong>-e</strong> con <em>Frau</em> e <strong>-er</strong> con <em>Herr</em>. Per una donna adulta si usa sempre <em>Frau</em>: <em>Fräulein</em> è considerato superato. Con <em>du</em> si apre con <em>Liebe Anna,</em> o <em>Lieber Tim,</em> e si chiude con <em>Viele Grüße</em>."
      },
      {
        trap: "La forma di cortesia segue le stesse maiuscole delle lettere: <em>Sie</em>, <em>Ihr</em>, <em>Ihre</em> e <em>Ihnen</em> nelle mail formali si scrivono con la maiuscola, e distinguono «Lei, la Sua» da <em>sie</em> e <em>ihre</em> (lei, loro; la sua, la loro). <em>Mit freundlichen Grüßen</em> ha <em>Grüßen</em> al plurale e al dativo: non si scrive «Mit freundliche Gruß»."
      },
      {
        tip: "Altre formule: <em>Vielen Dank für Ihre schnelle Antwort</em>, <em>Im Anhang finden Sie ...</em>, <em>Könnten Sie ...?</em> Nell'oggetto (<em>Betreff</em>) bastano poche parole, per esempio <em>Termin am Montag</em>."
      }
    ],
    grammar: {
      title: "Registro formale: la mail",
      note: "Apertura <b>Sehr geehrte Frau</b> / <b>Sehr geehrter Herr</b> + cognome; chiusura <b>Mit freundlichen Grüßen</b>. <b>Sie, Ihre, Ihnen</b> con la maiuscola.",
      table: {
        head: ["parte della mail", "formula", "significato"],
        rows: [
          ["apertura (donna)", "Sehr geehrte Frau Keller,", "Gentile signora Keller"],
          ["apertura (uomo)", "Sehr geehrter Herr Weber,", "Gentile signor Weber"],
          ["apertura (più persone)", "Sehr geehrte Damen und Herren,", "Gentili signore e signori"],
          ["corpo", "Vielen Dank für Ihre E-Mail.", "Grazie per la Sua mail"],
          ["chiusura", "Mit freundlichen Grüßen", "Cordiali saluti"]
        ]
      },
      examples: [
        { tr: "Gentile signora Keller,", note: "Frau: geehrt + e" },
        { tr: "Gentile signor Weber,", note: "Herr: geehrt + er" },
        { tr: "Grazie per la Sua mail.", note: "Ihre con la maiuscola" },
        { tr: "In allegato trova il file.", note: "verbo in seconda posizione: finden Sie" },
        { tr: "Potrebbe confermarmi l'appuntamento, per favore?", note: "Könnten Sie ... bestätigen" },
        { tr: "Cordiali saluti", note: "Grüßen, plurale e dativo" }
      ]
    },
    vocab: [
      "la mail",
      "l'oggetto (della mail)",
      "la formula di apertura",
      "il saluto, la formula di chiusura",
      "l'allegato",
      "il file",
      "il mittente",
      "mandare, inviare",
      "allegare",
      "confermare",
      "cordiale, gentile",
      "formale"
    ],
    exercises: [
      {
        q: "Quale apertura è corretta per una mail a una signora?",
        opts: ["Sehr geehrter Frau Keller,", "Sehr geehrte Frau Keller,", "Sehr geehrt Frau Keller,"],
        why: "<i>Frau</i> è femminile, quindi l'aggettivo prende <b>-e</b>: <i>Sehr geehrte Frau Keller,</i>. Con <i>Herr</i> sarebbe <i>geehrter</i>."
      },
      {
        q: "Quale chiusura è corretta?",
        opts: ["Mit freundlichen Grüßen", "Mit freundliche Grüße", "Mit freundlichem Grüßen"],
        why: "<i>Mit</i> vuole il dativo e <i>Grüße</i> è plurale: <b>Mit freundlichen Grüßen</b>."
      },
      {
        q: "Completa: «Sehr ___ Herr Weber,» (geehrt, con la desinenza)",
        hint: "maschile, senza articolo",
        why: "Con <i>Herr</i> l'aggettivo senza articolo prende <b>-er</b>: <i>Sehr geehrter Herr Weber,</i>."
      },
      {
        q: "Completa: «Vielen Dank für ___ E-Mail.» (la Sua, con la maiuscola)",
        hint: "forma di cortesia",
        why: "<b>Ihre</b> con la maiuscola è il possessivo di cortesia: la Sua. <i>Ihre</i>, <i>Ihr</i> e <i>Ihnen</i> si scrivono così nelle mail formali."
      },
      {
        q: "Abbina ogni parola al suo significato.",
        pairs: ["oggetto", "allegato", "mittente", "file"]
      },
      {
        tr: "In allegato trova il file.",
        why: "<i>Im Anhang finden Sie die Datei</i>: il verbo è in seconda posizione. Vanno bene anche <i>Sie finden im Anhang die Datei</i>, <i>Sie finden die Datei im Anhang</i> e <i>Die Datei finden Sie im Anhang</i>."
      },
      {
        tr: "Gentile signora Keller, grazie per la Sua mail.",
        why: "<i>Sehr geehrte Frau Keller, vielen Dank für Ihre E-Mail</i>. Va bene anche <i>herzlichen Dank</i> o <i>danke</i>; <i>Ihre</i> si scrive con la maiuscola."
      },
      {
        q: "Completa la frase.",
        tr: "Gentile signora Keller, grazie per la Sua mail. Cordiali saluti",
        why: "<i>Sehr geehrte</i> (femminile), <i>Ihre</i> (la Sua, con la maiuscola) e <i>Mit freundlichen Grüßen</i> (dativo plurale)."
      },
      {
        tr: "Gentile signora Keller, grazie per la Sua mail. In allegato trova il file. Cordiali saluti",
        why: "In <i>Grüßen</i> la <b>ü</b> è lunga [yː] e la <b>ß</b> è una <b>s</b> sorda; in <i>geehrte</i> la sillaba <b>ge</b> è debole e l'accento cade su <b>ehr</b>, con la <b>e</b> lunga."
      },
      {
        tr: "Potrebbe confermarmi l'appuntamento, per favore?",
        why: "In <i>Termin</i> l'accento cade sull'ultima sillaba, con la <b>i</b> lunga; in <i>bestätigen</i> la <b>st</b> dopo <b>be-</b> si legge [ʃt] e l'accento cade su <b>stä</b>."
      }
    ]
  },
  "lesson:a2-u06-l3": {
    theme: "Abitudini in ufficio",
    title: "Qui si fa così",
    objectives: [
      "usare man con il verbo alla terza persona singolare",
      "descrivere regole e abitudini del posto di lavoro",
      "usare man con muss, darf e kann"
    ],
    theory: [
      {
        h: "man: una persona qualsiasi",
        p: "<strong>man</strong> indica una persona qualsiasi, la gente in generale, e si usa per regole e abitudini: <em>Bei uns beginnt man um acht Uhr. Hier duzt man sich. In der Mittagspause isst man in der Kantine.</em> Il verbo va alla <strong>terza persona singolare</strong>, anche se il senso è plurale. Con i verbi che cambiano vocale resta il cambio: <em>man isst, man liest, man fährt, man spricht</em>. Con i modali: <em>man muss, man darf, man kann</em>: <em>Hier darf man nicht rauchen. Man muss pünktlich sein.</em> Una domanda frequente: <em>Wie sagt man das auf Deutsch?</em>"
      },
      {
        contrast: "L'italiano usa <em>si</em> in due modi diversi. Il <strong>si impersonale</strong> (<em>si mangia alle dodici</em>) e il <strong>si passivante</strong> (<em>si vendono libri</em>, dove <em>libri</em> è il soggetto e il verbo concorda con lui) in tedesco si rendono tutti e due con <em>man</em>, che è sempre il soggetto: <em>Man isst um zwölf Uhr. Man verkauft Bücher.</em> Il verbo concorda con <em>man</em>, non con il complemento. Nel parlato <em>man</em> sostituisce spesso anche <em>wir</em>: <em>Da trifft man sich um acht.</em>"
      },
      {
        trap: "<em>man</em> non è <em>der Mann</em> (l'uomo): <em>man</em> ha una sola <strong>n</strong> e la minuscola. Il verbo resta alla terza persona singolare: <em>man sagt</em>, non «man sagen», e con i modali <em>man muss</em>, non «man müssen». Il riflessivo è <em>sich</em>: <em>Man duzt sich</em>, <em>Man trifft sich um acht</em>."
      },
      {
        tip: "Per introdurre una regola dell'ufficio apri con <em>Hier</em>, <em>Bei uns</em> o <em>In der Firma</em>; il verbo resta in seconda posizione: <em>Bei uns beginnt man um acht Uhr.</em> Per il tu o il lei: <em>duzen</em> e <em>siezen</em>: <em>Den Chef siezt man hier.</em>"
      }
    ],
    grammar: {
      title: "man + terza persona singolare",
      note: "<b>man</b> è sempre il soggetto; il verbo resta alla <b>terza persona singolare</b>: <b>man isst, man muss, man darf</b>.",
      table: {
        head: ["verbo", "con man", "esempio"],
        rows: [
          ["essen", "man isst", "In der Kantine isst man warm."],
          ["sagen", "man sagt", "Wie sagt man das auf Deutsch?"],
          ["müssen", "man muss", "Man muss pünktlich sein."],
          ["dürfen", "man darf", "Hier darf man nicht rauchen."],
          ["duzen", "man duzt sich", "Hier duzt man sich."]
        ]
      },
      examples: [
        { tr: "Qui ci si dà del tu.", note: "man duzt sich: terza persona singolare" },
        { tr: "Da noi si comincia alle otto.", note: "inversione dopo Bei uns: beginnt man" },
        { tr: "Durante la pausa pranzo si mangia in mensa.", note: "essen cambia vocale: man isst" },
        { tr: "Qui non è permesso fumare.", note: "man darf, con nicht" },
        { tr: "Come si dice questo in tedesco?", note: "man sagt, non man sagen" },
        { tr: "Si deve essere puntuali.", note: "man muss" }
      ]
    },
    vocab: [
      "l'ufficio",
      "il collega",
      "la collega",
      "il capo",
      "la pausa pranzo",
      "la mensa",
      "la stampante",
      "l'orario di lavoro",
      "puntuale",
      "dare del tu",
      "dare del lei",
      "usuale, di prassi"
    ],
    exercises: [
      {
        q: "Quale frase è corretta?",
        opts: [
          "Hier arbeiten man bis fünf Uhr.",
          "Hier arbeitet man bis fünf Uhr.",
          "Hier arbeitest man bis fünf Uhr."
        ],
        why: "Con <i>man</i> il verbo sta alla terza persona singolare: <b>arbeitet</b>."
      },
      {
        q: "Come dici «In Germania si mangia presto»?",
        opts: [
          "In Deutschland isst man früh.",
          "In Deutschland essen man früh.",
          "In Deutschland esst man früh."
        ],
        why: "<i>Essen</i> cambia la vocale alla terza persona singolare: <i>er isst</i>, quindi <b>man isst</b>."
      },
      {
        q: "Quali frasi sono corrette?",
        opts: [
          "Man darf hier nicht rauchen.",
          "Man muss pünktlich sein.",
          "Man müssen pünktlich sein.",
          "Wie sagt man das auf Deutsch?",
          "Man fahren mit dem Bus."
        ],
        why: "Con <i>man</i> anche il modale sta alla terza persona singolare: <i>man muss</i>, non «man müssen». <i>Man fahren</i> è sbagliato: serve <i>man fährt</i>."
      },
      {
        q: "Completa: «In der Kantine ___ man mittags warm.» (essen)",
        hint: "terza persona singolare, cambia la vocale",
        why: "<b>isst</b>: <i>essen</i> cambia <i>e</i> in <i>i</i>, e dopo <i>man</i> si usa questa forma."
      },
      {
        q: "Completa: «Wie ___ man das auf Deutsch?» (sagen)",
        hint: "terza persona singolare",
        why: "<b>sagt</b>: <i>man</i> vuole la terza persona singolare."
      },
      {
        tr: "Da noi si comincia alle otto.",
        why: "<i>Bei uns beginnt man um acht Uhr</i>. Va bene anche <i>Man beginnt bei uns um acht Uhr</i> e <i>Um acht Uhr beginnt man bei uns</i>: il verbo resta in seconda posizione."
      },
      {
        tr: "Qui ci si dà del tu.",
        why: "<i>Hier duzt man sich</i>. Va bene anche <i>Man duzt sich hier</i>. <i>Sich</i> è il riflessivo di <i>man</i>."
      },
      {
        q: "Completa la frase.",
        tr: "Qui si deve essere puntuali e non si può fumare.",
        why: "<i>Hier muss man pünktlich sein, und man darf nicht rauchen.</i> Per «non si può fumare» (non è permesso) il tedesco dice <i>man darf nicht rauchen</i>. <i>Man kann nicht rauchen</i> direbbe invece che fumare è impossibile, non vietato."
      },
      {
        tr: "Da noi si comincia alle otto. Durante la pausa pranzo si mangia in mensa. Qui ci si dà del tu.",
        why: "In <i>isst</i> la <b>ss</b> è una <b>s</b> sorda e la <b>i</b> è breve; in <i>Kantine</i> l'accento cade su <b>ti</b>, con la <b>i</b> lunga [kanˈtiːnə]."
      },
      {
        tr: "Qui si deve essere puntuali, e in ufficio non si può fumare.",
        why: "In <i>pünktlich</i> la <b>ü</b> è breve [ʏ], la <b>n</b> davanti a <b>k</b> è nasale velare [ŋ] e la <b>ch</b> finale dopo <b>i</b> è [ç]."
      }
    ]
  },
  "lesson:a2-u06-l4": {
    theme: "Riunione",
    title: "In riunione",
    objectives: [
      "ordinare gli interventi con zuerst, dann, danach e außerdem",
      "mettere il verbo subito dopo queste parole, prima del soggetto",
      "fare una proposta e dare il proprio accordo"
    ],
    theory: [
      {
        h: "zuerst, dann, danach, außerdem",
        p: "<strong>zuerst</strong> (prima di tutto), <strong>dann</strong> (poi), <strong>danach</strong> (dopo, in seguito) e <strong>außerdem</strong> (inoltre) possono aprire una frase. Quando occupano la <strong>prima posizione</strong>, il verbo coniugato viene <strong>subito dopo</strong> e il soggetto lo segue: <em>Zuerst besprechen wir die Tagesordnung. Dann diskutieren wir den Vorschlag. Danach schreibt Anna das Protokoll. Außerdem brauchen wir einen neuen Drucker.</em> Possono stare anche più avanti, dopo il soggetto: <em>Wir besprechen zuerst die Tagesordnung.</em> Per una proposta: <em>Ich schlage vor, dass wir einen neuen Termin machen.</em> Per l'accordo: <em>Ich bin einverstanden. Ich stimme zu.</em>"
      },
      {
        contrast: "In italiano <em>prima, poi, dopo, inoltre</em> non cambiano l'ordine: <em>prima discutiamo la proposta</em>, con il soggetto prima del verbo o dopo. In tedesco, quando queste parole aprono la frase, il verbo coniugato resta in seconda posizione: <em>Zuerst besprechen wir ...</em>, non «Zuerst wir besprechen». L'italiano <em>prima</em> ha due sensi: «per prima cosa» è <em>zuerst</em>, mentre «prima di» una riunione è <em>vor</em> + dativo: <em>vor der Besprechung</em>."
      },
      {
        trap: "Con <em>zuerst, dann, danach, außerdem</em> in testa, <em>wir besprechen</em> diventa <em>besprechen wir</em>. Il verbo separabile resta diviso: <em>Danach fängt Anna an.</em> Dopo <em>dass</em> il verbo coniugato va invece in fondo: <em>Ich schlage vor, dass wir einen neuen Termin machen.</em> Dopo <em>glauben</em> e <em>meinen</em> si può anche togliere <em>dass</em>, e allora il verbo torna in seconda posizione: <em>Ich meine, wir machen einen neuen Termin.</em>"
      },
      {
        tip: "Per dissentire con garbo: <em>Das sehe ich anders.</em> Per chiedere la parola o una pausa: <em>Ich habe eine Frage. Könnten wir eine Pause machen?</em> Un elenco in tre tempi si costruisce con <em>zuerst, dann, danach</em>, e un punto in più con <em>außerdem</em>."
      }
    ],
    grammar: {
      title: "zuerst, dann, danach, außerdem: il verbo subito dopo",
      note: "Con <b>zuerst, dann, danach, außerdem</b> in prima posizione il verbo coniugato è al <b>secondo posto</b>, il soggetto viene dopo.",
      table: {
        head: ["parola", "significato", "esempio"],
        rows: [
          ["zuerst", "prima di tutto", "Zuerst besprechen wir die Tagesordnung."],
          ["dann", "poi", "Dann diskutieren wir den Vorschlag."],
          ["danach", "dopo, in seguito", "Danach schreibt Anna das Protokoll."],
          ["außerdem", "inoltre", "Außerdem brauchen wir einen neuen Drucker."]
        ]
      },
      examples: [
        { tr: "Prima di tutto parliamo dell'ordine del giorno.", note: "zuerst: verbo + soggetto" },
        { tr: "Poi discutiamo la proposta.", note: "dann: diskutieren wir" },
        { tr: "Dopo Anna scrive il verbale.", note: "danach: schreibt Anna" },
        { tr: "Inoltre ci serve una nuova stampante.", note: "außerdem: brauchen wir" },
        { tr: "Propongo di fissare un nuovo appuntamento.", note: "dass: il verbo va in fondo" },
        { tr: "Sono d'accordo.", note: "einverstanden con sein" }
      ]
    },
    vocab: [
      "la riunione",
      "la proposta",
      "l'ordine del giorno",
      "il risultato",
      "il verbale",
      "il punto",
      "proporre",
      "essere d'accordo, approvare",
      "d'accordo",
      "prima di tutto, per prima cosa",
      "dopo, in seguito",
      "inoltre"
    ],
    exercises: [
      {
        q: "Quale frase è corretta?",
        opts: [
          "Zuerst wir besprechen die Tagesordnung.",
          "Zuerst besprechen wir die Tagesordnung.",
          "Zuerst wir die Tagesordnung besprechen."
        ],
        why: "Con <i>zuerst</i> in prima posizione il verbo viene subito dopo, poi il soggetto: <b>Zuerst besprechen wir ...</b>."
      },
      {
        q: "Completa: «Zuerst besprechen wir die Tagesordnung, ___ diskutieren wir den Vorschlag.» (poi)",
        hint: "due parole possibili",
        why: "Vanno bene <b>dann</b> e <b>danach</b>: tutte e due aprono la frase e il verbo viene subito dopo."
      },
      {
        q: "Completa: «Außerdem ___ wir einen neuen Drucker.» (brauchen)",
        hint: "presente, wir",
        why: "<b>brauchen</b>: dopo <i>außerdem</i> il verbo sta in seconda posizione, poi <i>wir</i>."
      },
      {
        q: "Abbina ogni parola al suo significato.",
        pairs: ["proposta", "ordine del giorno", "risultato", "verbale"]
      },
      {
        tr: "Dopo, Anna scrive il verbale.",
        why: "<i>Danach schreibt Anna das Protokoll</i>: il verbo viene subito dopo <i>danach</i>. Va bene anche <i>Anna schreibt danach das Protokoll</i>."
      },
      {
        tr: "Inoltre ho una domanda.",
        why: "<i>Außerdem habe ich eine Frage</i>: il verbo viene prima del soggetto. Va bene anche <i>Ich habe außerdem eine Frage</i>."
      },
      {
        q: "Completa la frase.",
        tr: "Prima parliamo della proposta. Poi Anna scrive il verbale.",
        why: "<i>Zuerst besprechen wir den Vorschlag. Dann schreibt Anna das Protokoll.</i> Per «poi» vanno bene <i>dann</i> e <i>danach</i>."
      },
      {
        q: "Sei in riunione.",
        setting: "Il capo ti chiede come cominciare.",
        lines: [
          { tr: "Buongiorno! Oggi abbiamo molto lavoro. Come cominciamo?" },
          {
            tr: "Rispondi che prima parlate dell'ordine del giorno.",
            answerTr: "Prima parliamo dell'ordine del giorno."
          },
          { tr: "Bene. E dopo?" },
          {
            tr: "Rispondi che poi discutete la proposta del signor Weber.",
            answerTr: "Dopo discutiamo la proposta del signor Weber."
          }
        ]
      },
      {
        tr: "Prima parliamo dell'ordine del giorno. Dopo discutiamo la proposta. Inoltre Anna scrive il verbale.",
        why: "In <i>Besprechung</i> la <b>sp</b> dopo <b>Be-</b> si legge [ʃp] e la <b>ch</b> è [ç]; in <i>Protokoll</i> l'accento cade sull'ultima sillaba; in <i>außerdem</i> la <b>ß</b> è una <b>s</b> sorda."
      },
      {
        tr: "Propongo di discutere prima l'ordine del giorno.",
        why: "In <i>vor</i> la <b>v</b> si legge [f] e in <i>schlage</i> la <b>sch</b> è [ʃ]; <i>zuerst</i> si legge [tsuˈʔeːɐ̯st], con <b>z</b> = [ts]."
      }
    ]
  },
  "lesson:a2-u06-test": {
    theme: "Verifica",
    title: "Test: In ufficio",
    objectives: ["verificare richieste cortesi, domande indirette, la lettera formale, man e i connettori di sequenza"],
    theory: [
      {
        p: "Dieci domande sull'unità. Si supera con il 70%. Non riguardare le lezioni mentre rispondi: se non ricordi qualcosa, è meglio tornare a ripassare."
      }
    ],
    exercises: [
      {
        tr: "Coniuga können al Konjunktiv II: du, wir, ihr.",
        why: "<i>könntest, könnten, könntet</i>: la <b>ö</b> con l'umlaut e la <b>-e-</b> del Konjunktiv II."
      },
      {
        q: "Completa: «Ich weiß nicht, ___ Herr Weber im Büro ist.» (se)",
        hint: "domanda sì/no",
        why: "Una domanda sì/no diventa indiretta con <b>ob</b>, e il verbo va in fondo."
      },
      {
        q: "Completa: «Hier ___ man pünktlich sein.» (müssen)",
        hint: "terza persona singolare",
        why: "<b>muss</b>: con <i>man</i> il modale sta alla terza persona singolare."
      },
      {
        q: "Completa: «Sehr ___ Frau Keller,» (geehrt, con la desinenza)",
        hint: "femminile, senza articolo",
        why: "Con <i>Frau</i> l'aggettivo senza articolo prende <b>-e</b>: <i>geehrte</i>."
      },
      {
        q: "Completa: «Zuerst ___ wir die Tagesordnung.» (besprechen)",
        hint: "verbo prima del soggetto",
        why: "Dopo <i>zuerst</i> viene il verbo, poi il soggetto: <b>besprechen wir</b>."
      },
      {
        q: "Quale frase è la richiesta cortese?",
        opts: ["Rufen Sie mich zurück!", "Könnten Sie mich bitte zurückrufen?", "Sie rufen mich zurück."],
        why: "<b>Könnten Sie ...?</b> con l'infinito in fondo è la formula cortese; le altre due sono un ordine e un'affermazione."
      },
      {
        q: "Abbina ogni parola al suo significato.",
        pairs: ["messaggio", "oggetto (della mail)", "riunione", "collega"]
      },
      {
        tr: "Potrebbe confermarmi l'appuntamento, per favore?",
        why: "<i>Könnten Sie mir den Termin bitte bestätigen</i>: l'infinito chiude la frase. Va bene anche <i>Könnten Sie mir bitte den Termin bestätigen</i>."
      },
      {
        tr: "Vorrei sapere se il signor Weber oggi è in ufficio. Potrebbe richiamarmi, per favore?",
        why: "In <i>Büro</i> la <b>ü</b> è [y] e l'accento cade su <b>ro</b>; in <i>ich</i> la <b>ch</b> è [ç]; in <i>wissen</i> la <b>w</b> è [v] e la <b>ss</b> è una <b>s</b> sorda."
      },
      {
        tr: "Da noi si comincia alle otto, e per prima cosa parliamo dell'ordine del giorno.",
        why: "In <i>acht</i> la <b>ch</b> dopo <b>a</b> è [x]; <i>Bei</i> ha <b>ei</b> = [aɪ]; in <i>zuerst</i> la <b>z</b> è [ts] e le vocali <b>u</b> ed <b>e</b> si pronunciano staccate."
      }
    ]
  }
});
