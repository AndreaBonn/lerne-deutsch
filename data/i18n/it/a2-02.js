/* ============================================================
   Learner-language text (it) for data/core/a2-02.js, units a2-u05, a2-u06, a2-u07 and a2-u08.
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
  },
  "unit:a2-u07": {
    title: "Feste e usanze",
    grammarNote: "gratulieren e altri verbi con il dativo · date (am 3. Oktober) · Hast du Lust, ... zu ...? · aggettivo usato come avverbio · normalerweise, leider, hoffentlich"
  },
  "lesson:a2-u07-l1": {
    theme: "Auguri e regali",
    title: "Tanti auguri!",
    objectives: [
      "fare gli auguri con gratulieren e Herzlichen Glückwunsch",
      "usare il dativo con gratulieren, schenken e danken",
      "dire una data con am e il numero ordinale (am 3. Oktober)"
    ],
    theory: [
      {
        h: "Fare gli auguri",
        p: "Per fare gli auguri a qualcuno c'è il verbo <strong>gratulieren</strong>: la persona è al <strong>dativo</strong> e l'occasione si introduce con <strong>zu</strong> + dativo, cioè <em>zum</em> (<em>zu dem</em>, maschile e neutro) o <em>zur</em> (<em>zu der</em>, femminile): <em>Ich gratuliere dir zum Geburtstag. Wir gratulieren euch zur Hochzeit.</em> Come formula fissa, senza verbo: <em>Herzlichen Glückwunsch zum Geburtstag!</em> oppure <em>Alles Gute zum Geburtstag!</em> Per le feste: <em>Frohe Weihnachten!</em> e <em>Frohes neues Jahr!</em>"
      },
      {
        h: "Regalare e ringraziare: ancora il dativo",
        p: "Anche <strong>schenken</strong> (regalare) e <strong>danken</strong> (ringraziare) vogliono la persona al dativo: <em>Ich schenke meiner Schwester ein Buch. Ich danke dir für das Geschenk.</em> Con <em>schenken</em> la cosa regalata è all'accusativo (<em>ein Buch</em>); con <em>danken</em> il motivo si introduce con <strong>für</strong> + accusativo."
      },
      {
        h: "Le date: am + numero ordinale",
        p: "Una data si dice con <strong>am</strong> e il numero <strong>ordinale</strong>. Si scrive con il punto: <em>am 3. Oktober</em>, e si legge <em>am dritten Oktober</em>. Il punto dopo il numero indica proprio che è un ordinale. Fino al 19 si aggiunge di norma <em>-ten</em> (<em>am vierten, am zwölften</em>), dal 20 in poi <em>-sten</em> (<em>am zwanzigsten, am dreißigsten</em>); <em>am zweiten</em> (2.) è regolare; hanno forme particolari <em>am ersten</em> (1.), <em>am dritten</em> (3.), <em>am siebten</em> (7.) e <em>am achten</em> (8.). Per dire quando si compie gli anni: <em>Wann hast du Geburtstag? Am 3. Oktober.</em> oppure <em>Ich habe am 3. Oktober Geburtstag.</em>"
      },
      {
        contrast: "In italiano <em>ringraziare</em> ha un oggetto diretto (<em>lo ringrazio</em>), mentre <em>fare gli auguri a qualcuno</em> e <em>regalare a qualcuno</em> hanno un complemento di termine. In tedesco tutti e tre i verbi si costruiscono con la persona al dativo: <em>ich danke <b>dir</b></em>, <em>ich gratuliere <b>dir</b></em>, <em>ich schenke <b>dir</b></em>. Per le date l'italiano usa l'articolo e un numero semplice (<em>il 3 ottobre</em>, ma <em>il primo</em> per l'1); il tedesco usa <em>am</em> e un ordinale per tutti i giorni, anche per il 3 e il 20."
      },
      {
        trap: "Non si dice «ich danke dich» né «ich gratuliere dich»: il pronome è <em>dir</em>. L'occasione non prende <em>für</em> ma <em>zu</em>: <em>zum Geburtstag</em>, non «für Geburtstag». E <em>zum</em> o <em>zur</em> dipende dal genere: <em>der Geburtstag</em> → <em>zum</em>, <em>die Hochzeit</em> → <em>zur</em>, <em>das Fest</em> → <em>zum</em>. Nella data manca spesso il punto: <em>am 3 Oktober</em> sembra un cardinale, e in tedesco la scrittura corretta è <em>am 3. Oktober</em>."
      },
      {
        tip: "Una frase completa per un biglietto: <em>Liebe Anna, herzlichen Glückwunsch zum Geburtstag! Ich schenke dir ein Buch.</em> I mesi si dicono con <em>im</em> (<em>im Oktober</em>), il giorno preciso con <em>am</em> (<em>am 3. Oktober</em>)."
      }
    ],
    grammar: {
      title: "Verbi con il dativo e le date",
      note: "<b>gratulieren, schenken, danken</b>: la persona è al <b>dativo</b>. L'occasione: <b>zum / zur</b> + dativo. La data: <b>am</b> + ordinale con il punto, <b>am 3. Oktober</b>.",
      table: {
        head: ["verbo", "persona (dativo)", "il resto della frase"],
        rows: [
          ["gratulieren", "Ich gratuliere dir", "zum Geburtstag."],
          ["schenken", "Ich schenke meiner Schwester", "ein Buch."],
          ["danken", "Ich danke dir", "für das Geschenk."],
          ["Geburtstag haben", "Ich habe", "am 3. Oktober Geburtstag."]
        ]
      },
      examples: [
        { tr: "Ti faccio gli auguri per il compleanno.", note: "gratulieren + dir; zum = zu dem" },
        { tr: "Tanti auguri di buon compleanno!", note: "formula fissa, senza verbo" },
        { tr: "Vi facciamo gli auguri per il matrimonio.", note: "zur = zu der (die Hochzeit è femminile)" },
        { tr: "Il mio compleanno è il 3 ottobre.", note: "am + ordinale con il punto" },
        { tr: "Regalo un libro a mia sorella.", note: "meiner Schwester: dativo femminile" },
        { tr: "Ti ringrazio per il regalo.", note: "danken + dativo; für + accusativo" }
      ]
    },
    vocab: [
      "il compleanno",
      "il regalo",
      "il matrimonio, le nozze",
      "l'augurio, la congratulazione",
      "fare gli auguri, congratularsi",
      "regalare",
      "ringraziare",
      "la festa, la ricorrenza",
      "la torta, il dolce",
      "festeggiare",
      "la festa (tra amici)",
      "la candelina"
    ],
    exercises: [
      {
        q: "Come fai gli auguri di compleanno a un amico?",
        opts: [
          "Ich gratuliere dir zum Geburtstag.",
          "Ich gratuliere dich zum Geburtstag.",
          "Ich gratuliere dir für Geburtstag."
        ],
        why: "<i>Gratulieren</i> vuole la persona al dativo (<b>dir</b>) e l'occasione con <b>zu</b> + dativo: <i>zum Geburtstag</i>."
      },
      {
        q: "Come dici «Il mio compleanno è il 3 ottobre»?",
        opts: [
          "Mein Geburtstag ist an 3. Oktober.",
          "Mein Geburtstag ist am 3. Oktober.",
          "Mein Geburtstag ist im 3. Oktober."
        ],
        why: "Per una data si usa <b>am</b> e l'ordinale con il punto: <i>am 3. Oktober</i>. <i>Im</i> serve per il mese intero: <i>im Oktober</i>."
      },
      {
        q: "Cosa dici a chi si sposa?",
        opts: [
          "Herzlichen Glückwunsch zum Hochzeit!",
          "Herzlichen Glückwunsch in der Hochzeit!",
          "Herzlichen Glückwunsch zur Hochzeit!"
        ],
        why: "<i>Die Hochzeit</i> è femminile: <b>zur</b> = <i>zu der</i>. <i>Zum</i> si userebbe con un maschile o un neutro."
      },
      {
        q: "Completa: «Ich schenke ___ Schwester ein Buch.» (a mia sorella)",
        opts: ["meiner", "meine", "meinem"],
        why: "<i>Schenken</i> vuole la persona al dativo, e <i>die Schwester</i> è femminile: <b>meiner</b>. <i>Meinem</i> è il dativo di maschile e neutro."
      },
      {
        q: "Completa: «Ich gratuliere ___ zum Geburtstag.» (a te)",
        hint: "dativo di du",
        why: "<b>dir</b> è il dativo di <i>du</i>: <i>Ich gratuliere dir zum Geburtstag.</i>"
      },
      {
        q: "Completa: «Mein Geburtstag ist ___ 3. Oktober.» (il)",
        hint: "preposizione della data",
        why: "Con una data si usa <b>am</b>: <i>am 3. Oktober</i>."
      },
      {
        q: "Abbina ogni parola al suo significato.",
        pairs: ["compleanno", "regalo", "matrimonio", "augurio"]
      },
      {
        tr: "Faccio gli auguri a Tim per il compleanno. (verbo: gratulieren)",
        why: "<i>Ich gratuliere Tim zum Geburtstag</i>. Vanno bene anche <i>Zum Geburtstag gratuliere ich Tim</i> e <i>Ich gratuliere Tim zu seinem Geburtstag</i>."
      },
      {
        tr: "Buon compleanno, Anna! Ti faccio gli auguri e ti regalo un libro.",
        why: "In <i>Glückwunsch</i> la <b>ü</b> è breve [ʏ], la <b>ck</b> si legge [k] e la <b>sch</b> è [ʃ]; in <i>herzlichen</i> la <b>z</b> è [ts] e la <b>ch</b> dopo <b>i</b> è [ç]; in <i>gratuliere</i> la <b>ie</b> è una <b>i</b> lunga [iː]."
      },
      {
        tr: "Faccio gli auguri a mia sorella per il compleanno e le regalo un libro.",
        why: "In <i>Schwester</i> la <b>sch</b> è [ʃ] e la <b>w</b> è [v]; in <i>Geburtstag</i> l'accento cade su <b>bur</b> e la <b>g</b> finale si legge [k]."
      }
    ]
  },
  "lesson:a2-u07-l2": {
    theme: "Inviti",
    title: "Hai voglia di venire?",
    objectives: [
      "invitare qualcuno con Hast du Lust, ... zu ...?",
      "rispondere a un invito: accettare e declinare",
      "mettere zu davanti all'infinito, e dentro un verbo separabile (mitzukommen)"
    ],
    theory: [
      {
        h: "Hast du Lust, ... zu ...?",
        p: "Per invitare qualcuno si dice <strong>Hast du Lust, ...</strong> e poi un secondo verbo all'infinito, preceduto da <strong>zu</strong> e messo <strong>in fondo</strong>: <em>Hast du Lust, am Samstag zu meiner Party zu kommen? Ich habe Lust, ins Kino zu gehen. Ich habe keine Zeit, am Samstag zu kommen.</em> Così funziona anche con altre espressioni, come <em>Es ist schön, ...</em> o <em>Ich habe vor, ...</em> (vedi la scheda della grammatica)."
      },
      {
        h: "Verbi separabili e virgola",
        p: "Con un verbo separabile <strong>zu va in mezzo</strong>, tra il prefisso e il verbo, e si scrive tutto in una parola: <em>mitkommen</em> → <em>Hast du Lust, mitzukommen?</em>; <em>einladen</em> → <em>Es ist schön, Freunde einzuladen.</em> La <strong>virgola</strong> si mette quando il gruppo con <em>zu</em> è ampliato, cioè ha altre parole oltre all'infinito (<em>..., am Samstag zu meiner Party zu kommen</em>); dopo un nome come <em>Lust</em> o <em>Zeit</em> in genere si scrive sempre. Dopo un verbo, con l'infinito semplice (<em>Ich versuche zu schlafen</em>) la virgola è facoltativa."
      },
      {
        contrast: "L'italiano usa <em>di</em> + infinito: <em>hai voglia di venire?</em>, <em>non ho tempo di cucinare</em>. Il tedesco ha <em>zu</em> + infinito, che sta sempre direttamente davanti al verbo e in fondo alla frase, mentre in italiano <em>di venire</em> segue subito il verbo principale. Dopo i verbi modali (<em>können, müssen, wollen</em>) in tedesco <strong>non</strong> c'è <em>zu</em>, come in italiano non c'è <em>di</em>: <em>Kannst du kommen?</em> (puoi venire?)."
      },
      {
        trap: "Non si scrive «zu mitkommen» né «mit zu kommen»: la forma è <em>mitzukommen</em>, in una parola. E non si dice «Hast du Lust, kommen?»: serve <em>zu</em>, <em>Hast du Lust, zu kommen?</em>. Dopo un modale invece <em>zu</em> manca: <em>Ich kann kommen</em>, non «Ich kann zu kommen»."
      },
      {
        tip: "Per rispondere: <em>Danke für die Einladung! Ich komme gern.</em> oppure <em>Ich sage gern zu</em> (accetto). Per declinare: <em>Leider habe ich keine Zeit.</em> o <em>Leider muss ich absagen.</em> Per invitare: <em>Ich lade dich zu meiner Party ein.</em>"
      }
    ],
    grammar: {
      title: "zu + infinito",
      note: "<b>zu</b> + infinito <b>in fondo</b>: <i>Ich habe Lust, ins Kino zu gehen.</i> Verbo separabile: <b>zu</b> in mezzo (<i>mitzukommen</i>). Gruppo ampliato: <b>virgola</b>. Dopo un verbo modale nessun <i>zu</i>.",
      table: {
        head: ["costruzione", "esempio", "nota"],
        rows: [
          ["Lust haben", "Ich habe Lust, ins Kino zu gehen.", "zu davanti all'infinito, in fondo"],
          ["keine Zeit haben", "Ich habe keine Zeit, am Samstag zu kommen.", "gruppo ampliato: virgola"],
          ["verbo separabile", "Hast du Lust, mitzukommen?", "zu in mezzo: mitzukommen"],
          ["verbo modale", "Kannst du kommen?", "nessun zu"]
        ]
      },
      examples: [
        { tr: "Hai voglia di venire anche tu?", note: "mitkommen: zu in mezzo, mitzukommen" },
        { tr: "Hai voglia di venire sabato alla mia festa?", note: "gruppo ampliato: virgola dopo Lust" },
        { tr: "Ho voglia di andare al cinema.", note: "zu gehen: zu davanti all'infinito" },
        { tr: "Non ho tempo di venire sabato.", note: "keine Zeit, ... zu kommen" },
        { tr: "È bello invitare gli amici.", note: "einladen: zu in mezzo, einzuladen" },
        { tr: "Grazie per l'invito! Vengo volentieri.", note: "risposta a un invito" }
      ]
    },
    vocab: [
      "l'invito",
      "invitare",
      "la voglia",
      "venire anche tu, venire con (qualcuno)",
      "disdire, declinare",
      "accettare (un invito)",
      "l'idea",
      "l'ospite",
      "la visita, gli ospiti",
      "la sorpresa",
      "passare (a trovare)",
      "il tempo"
    ],
    exercises: [
      {
        q: "Come inviti un amico a venire con te?",
        opts: [
          "Hast du Lust, mitzukommen?",
          "Hast du Lust, zu mitkommen?",
          "Hast du Lust, mitkommen zu?"
        ],
        why: "Con un verbo separabile <b>zu</b> va in mezzo, tutto in una parola: <i>mitzukommen</i>."
      },
      {
        q: "Completa: «Hast du Lust, heute Abend ins Kino ___ gehen?»",
        hint: "una parola breve prima dell'infinito",
        why: "<b>zu</b> sta direttamente davanti all'infinito: <i>ins Kino zu gehen</i>."
      },
      {
        q: "Completa: «Hast du ___, mitzukommen?» (voglia)",
        hint: "nome, con la maiuscola",
        why: "<b>Lust</b> haben: <i>Hast du Lust, mitzukommen?</i>"
      },
      {
        q: "Abbina ogni parola al suo significato.",
        pairs: ["invitare", "disdire, declinare", "accettare (un invito)", "sorpresa"]
      },
      {
        tr: "Hai voglia di venire a trovarci?",
        why: "<i>Hast du Lust, uns zu besuchen?</i>: la virgola dopo <i>Lust</i>, <i>zu</i> direttamente davanti a <i>besuchen</i>, in fondo."
      },
      {
        tr: "Hai voglia di andare al cinema?",
        why: "<i>Hast du Lust, ins Kino zu gehen?</i> Va bene anche <i>in das Kino</i>. <i>Zu gehen</i> chiude la frase."
      },
      {
        q: "Completa la frase.",
        tr: "Grazie per l'invito! Ho voglia di venire alla vostra festa.",
        why: "<i>Die Einladung</i> è l'invito. <i>Zu eurer Party zu kommen</i>: la prima <b>zu</b> è la preposizione, la seconda introduce l'infinito."
      },
      {
        q: "Sei invitato a una festa.",
        setting: "Un'amica ti invita alla sua festa di sabato.",
        lines: [
          { tr: "Ciao! Sabato c'è la mia festa. Hai voglia di venire?" },
          {
            tr: "Ringrazia per l'invito e di' che vieni volentieri.",
            answerTr: "Grazie per l'invito! Vengo volentieri."
          },
          { tr: "Benissimo! Puoi portare una torta?" },
          {
            tr: "Rispondi di sì e di' che hai voglia di fare una torta.",
            answerTr: "Sì, volentieri. Ho voglia di fare una torta."
          }
        ]
      },
      {
        tr: "Hai voglia di venire alla mia festa sabato? Purtroppo non ho tempo, ma grazie per l'invito!",
        why: "In <i>Einladung</i> la <b>ei</b> è [aɪ]; in <i>Samstag</i> la <b>s</b> iniziale è sonora [z]; in <i>besuchen</i> la <b>ch</b> dopo <b>u</b> è [x] e la <b>s</b> tra due vocali è sonora [z]."
      },
      {
        tr: "Hai voglia di venire con me al cinema?",
        why: "In <i>Kino</i> la <b>i</b> è lunga [iː]; in <i>mit</i> la <b>i</b> è breve; in <i>Lust</i> la <b>u</b> è breve e la <b>st</b> si legge [st]."
      }
    ]
  },
  "lesson:a2-u07-l3": {
    theme: "Saluti e usanze",
    title: "Germania, Austria, Svizzera",
    objectives: [
      "conoscere alcuni saluti tipici delle tre aree (Grüß Gott, Grüezi, Servus)",
      "descrivere un'usanza come tendenza, con oft e meistens",
      "dire come ci si saluta e a che registro, tra du e Sie"
    ],
    theory: [
      {
        h: "Un tedesco, tre paesi",
        p: "Si parla tedesco in Germania, in Austria e in Svizzera (dove, oltre al tedesco, ci sono il francese, l'italiano e il romancio). Germania, Austria e Svizzera condividono il tedesco standard, con alcune differenze nazionali di lessico, pronuncia e ortografia; i saluti e alcune usanze cambiano da una regione all'altra. <em>Guten Tag</em> funziona più o meno ovunque. <em>Grüß Gott</em> si sente più spesso nel sud della Germania e in Austria, <em>Servus</em> soprattutto in Austria e in Baviera (si dice anche quando ci si congeda), <em>Grüezi</em> nella Svizzera tedesca, <em>Moin</em> nel nord della Germania. Sono <strong>tendenze</strong>, non regole: per questo nelle frasi di questa lezione compaiono <em>oft</em> e <em>meistens</em>."
      },
      {
        h: "Raccontare un'usanza",
        p: "Per descrivere un'usanza si usa <strong>man</strong> con il verbo alla terza persona singolare: <em>In der Schweiz sagt man oft Grüezi.</em> Una tendenza si dichiara con <em>oft, meistens, in vielen Familien</em>: <em>In vielen Familien feiert man Weihnachten am 24. Dezember.</em> Il registro lo scegli con <em>du</em> e <em>Sie</em>: <em>Im Büro siezt man oft, unter Freunden duzt man sich.</em>"
      },
      {
        contrast: "In italiano, a Natale, molte famiglie fanno una cena la sera della vigilia e un pranzo il giorno 25. In molte famiglie tedesche il momento principale è la sera del 24 dicembre, <em>Heiligabend</em>, con i regali; il 25 e il 26 sono <em>Feiertage</em>. Sono tendenze e non regole: ogni famiglia e ogni regione ha le sue abitudini. A <em>Silvester</em> (il 31 dicembre, San Silvestro) molte persone festeggiano con amici e fuochi d'artificio a mezzanotte. In italiano il saluto <em>buongiorno</em> o <em>salve</em> cambia poco da regione a regione; in tedesco la scelta tra <em>Grüß Gott</em>, <em>Grüezi</em> e <em>Servus</em> dipende molto da dove ti trovi."
      },
      {
        trap: "Non generalizzare: «In Germania si dice Grüß Gott» è troppo largo, perché in molte zone del nord non si sente quasi mai. Meglio una frase prudente: <em>In Süddeutschland und in Österreich sagt man oft Grüß Gott.</em> Un'altra differenza di scrittura: in Svizzera di solito si scrive <em>ss</em> al posto di <em>ß</em> (<em>Strasse</em>, <em>Grüsse</em>), in Germania e in Austria si usa <em>ß</em> (<em>Straße</em>, <em>Grüße</em>)."
      },
      {
        tip: "Quando non sai quale saluto usare, <em>Guten Tag</em> (e <em>Auf Wiedersehen</em>) è una scelta sicura, e con persone che non conosci resta la forma <em>Sie</em>."
      }
    ],
    grammar: {
      title: "Saluti nelle tre aree e registro",
      note: "Un saluto o un'usanza si descrive come <b>tendenza</b>: <b>man</b> + <b>oft / meistens</b>. Tra sconosciuti <b>Sie</b>, tra amici <b>du</b>.",
      table: {
        head: ["saluto", "dove si sente più spesso", "nota"],
        rows: [
          ["Guten Tag", "in tutte e tre le aree", "neutro, adatto a molte situazioni"],
          ["Grüß Gott", "sud della Germania, Austria", "si sente spesso anche nei negozi"],
          ["Servus", "Austria, Baviera", "informale, per salutare e per congedarsi"],
          ["Grüezi", "Svizzera tedesca", "si dice spesso a persone che non si conoscono"],
          ["Moin", "nord della Germania", "informale, si sente a qualsiasi ora"],
          ["Hallo", "in tutte e tre le aree", "informale, tra amici e colleghi"]
        ]
      },
      examples: [
        { tr: "Nel sud della Germania e in Austria si dice spesso Grüß Gott.", note: "oft: una tendenza" },
        { tr: "In Svizzera si dice spesso Grüezi.", note: "man + terza persona singolare" },
        { tr: "Tra amici si dice anche Hallo.", note: "unter Freunden: registro informale" },
        { tr: "In Austria si dice spesso Servus.", note: "Servus: informale" },
        { tr: "In molte famiglie si festeggia il Natale il 24 dicembre.", note: "in vielen Familien: una tendenza" },
        { tr: "In ufficio spesso ci si dà del Lei, tra amici del tu.", note: "siezen e duzen" }
      ]
    },
    vocab: [
      "l'usanza, il costume",
      "la tradizione",
      "il paese, la nazione",
      "la regione",
      "il giorno festivo",
      "il mercatino di Natale",
      "il saluto, l'accoglienza",
      "salutare, accogliere",
      "tipico",
      "diverso, vario",
      "la differenza",
      "San Silvestro (il 31 dicembre)"
    ],
    exercises: [
      {
        q: "Quale saluto si sente spesso nella Svizzera tedesca?",
        opts: ["Grüß Gott.", "Grüezi.", "Moin."],
        why: "<i>Grüezi</i> è il saluto che si sente spesso nella Svizzera tedesca. <i>Grüß Gott</i> è più frequente nel sud della Germania e in Austria, <i>Moin</i> nel nord della Germania."
      },
      {
        q: "Con un cliente che non conosci, di solito dai del...",
        opts: ["Sie", "du", "ihr"],
        why: "Con persone che non conosci e in contesti formali si usa di solito <b>Sie</b>; <i>du</i> è per amici e familiari."
      },
      {
        q: "Quale frase è formulata in modo prudente, senza generalizzare?",
        opts: [
          "In der Schweiz gibt es keine Traditionen.",
          "In Deutschland feiern alle Weihnachten gleich.",
          "Die Bräuche sind oft von Region zu Region verschieden."
        ],
        why: "<b>oft</b> presenta le usanze come tendenze. Le altre due frasi sono troppo assolute e non sono vere."
      },
      {
        q: "Completa il saluto tipico del sud della Germania e dell'Austria: «Grüß ___.»",
        hint: "la seconda parola del saluto",
        why: "<b>Grüß Gott</b>: si sente spesso nel sud della Germania e in Austria."
      },
      {
        q: "Abbina ogni parola al suo significato.",
        pairs: ["usanza", "giorno festivo", "mercatino di Natale", "differenza"]
      },
      {
        tr: "In Austria si dice spesso Servus.",
        why: "<i>In Österreich sagt man oft Servus</i>. Vanno bene anche <i>Man sagt in Österreich oft Servus</i>, <i>Oft sagt man in Österreich Servus</i>, <i>Man sagt oft in Österreich Servus</i> e <i>Servus sagt man in Österreich oft</i>."
      },
      {
        tr: "Da noi si dice spesso Hallo.",
        why: "<i>Bei uns sagt man oft Hallo</i>. Vanno bene anche <i>Man sagt bei uns oft Hallo</i>, <i>Oft sagt man bei uns Hallo</i>, <i>Man sagt oft bei uns Hallo</i> e <i>Hallo sagt man bei uns oft</i>."
      },
      {
        q: "Completa la frase.",
        tr: "In Svizzera si dice spesso Grüezi. In Austria si dice spesso Servus.",
        why: "<i>Die Schweiz</i> dopo <i>in der</i>; <i>Österreich</i> dopo <i>in</i>, senza articolo."
      },
      {
        tr: "Nel sud della Germania e in Austria si dice spesso Grüß Gott. In Svizzera si dice spesso Grüezi. Tra amici si dice anche Hallo.",
        why: "In <i>Grüß</i> la <b>ü</b> è lunga [yː] e la <b>ß</b> è una <b>s</b> sorda; in <i>Österreich</i> la <b>ö</b> è lunga [øː] e la <b>ch</b> finale dopo <b>ei</b> è [ç]; in <i>Servus</i> la <b>s</b> iniziale è sonora [z] e la <b>v</b> è [v]."
      },
      {
        tr: "Le usanze sono spesso diverse da una regione all'altra.",
        why: "In <i>Bräuche</i> la <b>äu</b> è [ɔʏ] e la <b>ch</b> dopo <b>äu</b> è [ç]; in <i>verschieden</i> la <b>sch</b> è [ʃ] e la <b>ie</b> è una <b>i</b> lunga [iː]."
      }
    ]
  },
  "lesson:a2-u07-l4": {
    theme: "Come e quando",
    title: "normalmente, lentamente",
    objectives: [
      "usare un aggettivo come avverbio, senza desinenza (langsam, schnell, laut)",
      "usare normalerweise, leider, hoffentlich e vielleicht",
      "mettere l'avverbio all'inizio e il verbo in seconda posizione"
    ],
    theory: [
      {
        h: "L'aggettivo che fa da avverbio",
        p: "In tedesco l'<strong>aggettivo</strong> senza desinenza può funzionare da <strong>avverbio</strong>, cioè dire come si fa un'azione: <em>Er spricht langsam. Sie fährt schnell. Wir singen laut.</em> È la stessa parola che usi per descrivere un nome: <em>Der Zug ist langsam</em>, ma con un sostantivo ha la desinenza (<em>ein langsamer Zug</em>); come avverbio la desinenza non c'è mai."
      },
      {
        h: "Avverbi di frase: normalerweise, leider, hoffentlich, vielleicht",
        p: "Alcuni avverbi dicono qualcosa sull'<strong>intera frase</strong>: <strong>normalerweise</strong> (di solito), <strong>leider</strong> (purtroppo), <strong>hoffentlich</strong> (speriamo che, si spera che), <strong>vielleicht</strong> (forse). Possono aprire la frase, e allora il verbo resta in <strong>seconda posizione</strong> e il soggetto passa dopo: <em>Normalerweise feiere ich meinen Geburtstag mit Freunden. Leider habe ich am Samstag keine Zeit. Hoffentlich kommst du zur Party. Vielleicht kommt Tim später.</em> Nella frase si trovano di solito dopo il verbo: <em>Ich habe leider keine Zeit.</em>"
      },
      {
        contrast: "L'italiano forma molti avverbi con <em>-mente</em> (<em>lentamente, velocemente</em>) o usa l'aggettivo uguale (<em>parla forte</em>); il tedesco usa quasi sempre l'aggettivo così com'è: <em>langsam</em> è sia «lento» sia «lentamente». <em>Hoffentlich</em> poi è un avverbio da solo: l'italiano costruisce la frase con un verbo (<em>spero che tu venga</em>, <em>speriamo che venga</em>), il tedesco no: <em>Hoffentlich kommst du</em>, senza <em>dass</em>."
      },
      {
        trap: "<em>normal</em> è un aggettivo (<em>Das ist normal</em>), mentre «di solito» si dice <em>normalerweise</em>. Quando una di queste parole apre la frase, il verbo viene subito dopo: <em>Leider habe ich keine Zeit</em>, non «Leider ich habe keine Zeit». E non aggiungere una desinenza all'avverbio: <em>Er spricht langsam</em>, non «Er spricht langsame»."
      },
      {
        tip: "Altri avverbi utili da imparare insieme a questi: <em>deutlich</em> (chiaramente), <em>leise</em> (piano), <em>später</em> (più tardi), <em>natürlich</em> (naturalmente, certo)."
      }
    ],
    grammar: {
      title: "Avverbi: aggettivo senza desinenza e avverbi di frase",
      note: "Un <b>aggettivo senza desinenza</b> fa da avverbio: <i>Er spricht langsam.</i> Avverbi di frase come <b>normalerweise, leider, hoffentlich, vielleicht</b> possono aprire la frase: il verbo resta in <b>seconda posizione</b>.",
      table: {
        head: ["parola", "significato", "esempio"],
        rows: [
          ["normalerweise", "di solito", "Normalerweise esse ich um zwölf Uhr."],
          ["leider", "purtroppo", "Leider habe ich keine Zeit."],
          ["hoffentlich", "speriamo che, si spera che", "Hoffentlich kommst du zur Party."],
          ["vielleicht", "forse", "Vielleicht komme ich später."],
          ["langsam", "lento; lentamente", "Er spricht langsam."]
        ]
      },
      examples: [
        { tr: "Di solito festeggio il compleanno con gli amici.", note: "normalerweise apre la frase: verbo in seconda posizione" },
        { tr: "Purtroppo sabato non ho tempo.", note: "leider: habe ich" },
        { tr: "Speriamo che tu venga alla festa.", note: "hoffentlich, senza dass" },
        { tr: "Anna balla lentamente e con grazia.", note: "langsam e schön: aggettivi come avverbi" },
        { tr: "Cantiamo ad alta voce.", note: "laut: nessuna desinenza" },
        { tr: "Forse Tim viene più tardi.", note: "vielleicht: kommt Tim" }
      ]
    },
    vocab: [
      "di solito, normalmente",
      "purtroppo",
      "speriamo che, si spera che",
      "forse",
      "lento; lentamente",
      "veloce; velocemente",
      "forte, ad alta voce",
      "piano, a bassa voce",
      "chiaro; chiaramente",
      "più tardi, dopo",
      "particolarmente, soprattutto",
      "naturalmente, certo"
    ],
    exercises: [
      {
        q: "Quale parola significa «purtroppo»?",
        opts: ["hoffentlich", "leider", "vielleicht"],
        why: "<b>leider</b> = purtroppo. <i>Hoffentlich</i> è «speriamo che», <i>vielleicht</i> è «forse»."
      },
      {
        q: "In quale frase <i>langsam</i> descrive il verbo, senza desinenza?",
        opts: ["Das Kind ist langsam.", "Das ist ein langsames Kind.", "Das Kind spricht langsam."],
        why: "In <i>Das Kind spricht langsam</i>, <b>langsam</b> dice come parla il bambino, ed è senza desinenza. Nelle altre due frasi descrive il bambino."
      },
      {
        q: "Completa con la parola della lezione: «___ feiere ich meinen Geburtstag zu Hause.» (di solito)",
        hint: "comincia con n",
        why: "<b>Normalerweise</b> apre la frase, e il verbo resta in seconda posizione: <i>feiere ich</i>."
      },
      {
        q: "Completa: «___ habe ich am Samstag keine Zeit.» (purtroppo)",
        hint: "avverbio di frase",
        why: "<b>Leider</b> apre la frase e il verbo viene subito dopo: <i>habe ich</i>."
      },
      {
        q: "Completa: «Die Kinder singen sehr ___.» (forte)",
        hint: "aggettivo, senza desinenza",
        why: "<b>laut</b> è un aggettivo senza desinenza che fa da avverbio."
      },
      {
        q: "Abbina ogni parola al suo significato.",
        pairs: ["di solito", "purtroppo", "speriamo che", "forse"]
      },
      {
        tr: "Purtroppo non ho tempo.",
        why: "<i>Leider habe ich keine Zeit</i>. Va bene anche <i>Ich habe leider keine Zeit</i>."
      },
      {
        q: "Completa la frase.",
        tr: "Parla lentamente e io lo capisco bene. Speriamo che tu venga alla festa!",
        why: "<i>Langsam</i> è l'aggettivo senza desinenza che fa da avverbio; <i>Hoffentlich</i> apre la frase e il verbo <i>kommst</i> resta in seconda posizione."
      },
      {
        tr: "Di solito festeggio il compleanno a casa. Purtroppo sabato non ho tempo, ma forse festeggiamo più tardi.",
        why: "In <i>normalerweise</i> la <b>w</b> è [v] e la <b>ei</b> è [aɪ]; in <i>vielleicht</i> la <b>v</b> è [f], la prima <b>i</b> è senza accento, che cade sulla seconda sillaba [fiˈlaɪçt], e la <b>ch</b> dopo <b>ei</b> è [ç]; in <i>später</i> la <b>sp</b> iniziale è [ʃp]."
      },
      {
        tr: "Speriamo che tu venga alla festa. Forse festeggiamo più tardi.",
        why: "In <i>hoffentlich</i> la <b>ch</b> dopo <b>i</b> è [ç]; in <i>später</i> la <b>sp</b> iniziale si legge [ʃp]; in <i>vielleicht</i> la <b>v</b> è [f]."
      }
    ]
  },
  "lesson:a2-u07-test": {
    theme: "Verifica",
    title: "Test: Feste e usanze",
    objectives: ["verificare gratulieren e il dativo, le date, zu + infinito, i saluti nelle tre aree e gli avverbi"],
    theory: [
      {
        p: "Dieci domande sull'unità. Si supera con il 70%. Non riguardare le lezioni mentre rispondi: se non ricordi qualcosa, è meglio tornare a ripassare."
      }
    ],
    exercises: [
      {
        q: "Completa: «Wir gratulieren ___ zur Hochzeit.» (a voi)",
        hint: "dativo di ihr",
        why: "<b>euch</b> è il dativo di <i>ihr</i>: <i>Wir gratulieren euch zur Hochzeit.</i>"
      },
      {
        q: "Completa: «Der Kurs beginnt ___ 5. Mai.» (il)",
        hint: "preposizione della data",
        why: "Con una data si usa <b>am</b>: <i>am 5. Mai</i>."
      },
      {
        q: "Completa: «Hast du Lust, ins Kino ___ gehen?»",
        hint: "davanti all'infinito",
        why: "<b>zu</b> sta direttamente davanti all'infinito: <i>ins Kino zu gehen</i>."
      },
      {
        q: "Completa: «___ kommst du zur Party.» (speriamo che)",
        hint: "avverbio di frase",
        why: "<b>Hoffentlich</b> apre la frase e il verbo <i>kommst</i> resta in seconda posizione. Dopo <i>hoffentlich</i> non c'è <i>dass</i>."
      },
      {
        q: "Completa: «Ich schenke ___ Bruder ein Buch.» (a mio fratello)",
        opts: ["meinem", "meinen", "mein"],
        why: "<i>Schenken</i> vuole la persona al dativo, e <i>der Bruder</i> è maschile: <b>meinem</b>."
      },
      {
        q: "Quale frase è un invito corretto?",
        opts: ["Hast du Lust, zu mitkommen?", "Hast du Lust, mitzukommen?", "Hast du Lust, mitkommen?"],
        why: "Con un verbo separabile <b>zu</b> va in mezzo: <i>mitzukommen</i>, in una parola."
      },
      {
        q: "Che cosa significa <i>leider</i>?",
        opts: ["di solito", "forse", "purtroppo"],
        why: "<b>leider</b> = purtroppo. <i>Normalerweise</i> è «di solito», <i>vielleicht</i> è «forse»."
      },
      {
        q: "Abbina ogni parola al suo significato.",
        pairs: ["fare gli auguri", "regalo", "invito", "usanza"]
      },
      {
        tr: "Tanti auguri di buon compleanno! Hai voglia di venire sabato alla mia festa?",
        why: "In <i>Glückwunsch</i> la <b>ü</b> è breve [ʏ] e la <b>sch</b> è [ʃ]; in <i>Samstag</i> la <b>s</b> iniziale è sonora [z]; in <i>Lust</i> la <b>u</b> è breve."
      },
      {
        tr: "Ti faccio gli auguri per il compleanno. Hai voglia di festeggiare con noi?",
        why: "In <i>gratuliere</i> la <b>ie</b> è una <b>i</b> lunga [iː]; in <i>Geburtstag</i> l'accento cade su <b>bur</b>; in <i>feiern</i> la <b>ei</b> è [aɪ]."
      }
    ]
  },
  "unit:a2-u08": {
    title: "Progetti",
    grammarNote: "vorhaben + zu · ripasso dei tempi (Perfekt, Präteritum, Futur, Konjunktiv II) · ripasso di casi e pronomi · weil, dass, als, wenn"
  },
  "lesson:a2-u08-l1": {
    theme: "Progetti e intenzioni",
    title: "Ho intenzione di ...",
    objectives: [
      "dire che cosa si ha intenzione di fare con Ich habe vor, ... zu ...",
      "chiedere i progetti di qualcuno con Was hast du vor?",
      "parlare del futuro con il presente e un indicatore di tempo, oppure con werden"
    ],
    theory: [
      {
        h: "vorhaben + zu + infinito",
        p: "Per dire che cosa si ha <strong>intenzione</strong> di fare si usa il verbo <strong>vorhaben</strong>, seguito da un secondo verbo all'infinito con <strong>zu</strong>, in fondo alla frase: <em>Ich habe vor, im Sommer nach Wien zu ziehen. Hast du vor, nach dem Studium in Berlin zu arbeiten?</em> Con un verbo separabile <em>zu</em> va in mezzo, in una parola: <em>umziehen</em> → <em>Ich habe vor, im Sommer umzuziehen.</em> La virgola si scrive quando il gruppo con <em>zu</em> ha altre parole oltre all'infinito."
      },
      {
        h: "vorhaben è un verbo separabile",
        p: "<em>Vorhaben</em> si separa come <em>aufstehen</em>: <strong>haben</strong> prende le desinenze e <strong>vor</strong> va in fondo alla frase principale: <em>Ich habe vor, ... / Wir haben vor, ...</em> Senza un secondo verbo si può chiedere <em>Was hast du morgen vor?</em> (che cosa hai in programma domani?), e la risposta può essere <em>Ich habe nichts vor</em> (non ho programmi)."
      },
      {
        h: "Il futuro: presente oppure werden",
        p: "Per i progetti il tedesco usa spesso il <strong>presente</strong> con un indicatore di tempo: <em>Nächstes Jahr ziehe ich nach Berlin.</em> Il <strong>Futur I</strong> (<em>werden</em> in seconda posizione, infinito in fondo) mette in risalto una decisione o una promessa: <em>Ich werde im Herbst Informatik studieren.</em> Dopo <em>werden</em> e dopo i verbi modali non c'è <em>zu</em>."
      },
      {
        contrast: "L'italiano dice <em>ho intenzione di</em> o <em>ho in programma di</em>, con <em>di</em> + infinito. Il tedesco ha <em>vorhaben</em> con <em>zu</em> + infinito, e la particella <em>vor</em> si stacca e va in fondo. Anche il futuro è diverso: l'italiano usa molto il futuro semplice (<em>mi trasferirò</em>), mentre il tedesco parlato preferisce il presente con un indicatore di tempo (<em>Nächstes Jahr ziehe ich um</em>)."
      },
      {
        trap: "Non si dice «Ich habe vor, umziehen» né «Ich habe vor, zu umziehen»: con un verbo separabile la forma è <em>umzuziehen</em>. E dopo <em>werden</em> non va <em>zu</em>: <em>Ich werde studieren</em>, non «Ich werde zu studieren». Non confondere <em>Ich habe vor, ... zu ...</em> con <em>Ich will ...</em>: dopo <em>wollen</em> l'infinito è senza <em>zu</em> (<em>Ich will umziehen</em>)."
      },
      {
        tip: "Per descrivere un progetto in due frasi: <em>Ich habe vor, im Sommer umzuziehen. Dort werde ich studieren.</em> Prima l'intenzione con <em>vorhaben</em>, poi il seguito con <em>werden</em>."
      }
    ],
    grammar: {
      title: "vorhaben + zu e il futuro",
      note: "<b>vorhaben</b> + <b>zu</b> + infinito in fondo: <i>Ich habe vor, nach Wien zu ziehen.</i> Verbo separabile: <b>zu</b> in mezzo (<i>umzuziehen</i>). Futuro: presente + indicatore di tempo, oppure <b>werden</b> + infinito.",
      table: {
        head: ["costruzione", "esempio", "nota"],
        rows: [
          ["vorhaben + zu", "Ich habe vor, im Sommer nach Wien zu ziehen.", "vor in fondo alla principale, zu + infinito in fondo"],
          ["verbo separabile", "Ich habe vor, im Sommer umzuziehen.", "zu in mezzo: umzuziehen"],
          ["presente + tempo", "Nächstes Jahr ziehe ich nach Berlin.", "il futuro con un indicatore di tempo"],
          ["Futur I", "Ich werde im Herbst Informatik studieren.", "werden in seconda posizione, infinito in fondo"]
        ]
      },
      examples: [
        { tr: "Ho intenzione di trasferirmi in estate.", note: "umziehen: zu in mezzo, umzuziehen" },
        { tr: "Hai intenzione di lavorare a Vienna dopo gli studi?", note: "domanda: Hast du vor, ... zu ...?" },
        { tr: "Abbiamo intenzione di cercare un appartamento.", note: "zu davanti a suchen, in fondo" },
        { tr: "Che programmi hai per domani?", note: "vorhaben senza secondo verbo: vor in fondo" },
        { tr: "L'anno prossimo mi trasferisco a Berlino.", note: "presente con indicatore di tempo" },
        { tr: "In autunno studierò informatica.", note: "Futur I: werden + infinito" }
      ]
    },
    vocab: [
      "il progetto, il piano",
      "avere intenzione, avere in programma",
      "pianificare",
      "il trasloco",
      "trasferirsi",
      "gli studi universitari, il corso di studi (plurale: die Studien, poco comune)",
      "studiare (all'università)",
      "il posto di lavoro",
      "il lavoro (informale)",
      "disdire (un contratto), licenziarsi",
      "l'esame",
      "la formazione professionale"
    ],
    exercises: [
      {
        tr: "Il presente di vorhaben, tutte le persone.",
        why: "<i>Ich habe vor, du hast vor, er hat vor, wir haben vor, ihr habt vor, sie haben vor</i>: <i>haben</i> prende le desinenze, e <i>vor</i> va in fondo alla frase principale."
      },
      {
        q: "Come dici «Ho intenzione di trasferirmi in estate»?",
        opts: [
          "Ich habe vor, im Sommer umzuziehen.",
          "Ich habe vor, im Sommer zu umziehen.",
          "Ich habe vor, im Sommer umziehen zu."
        ],
        why: "Con un verbo separabile <b>zu</b> va in mezzo, tutto in una parola: <i>umzuziehen</i>."
      },
      {
        q: "Completa: «Ich habe vor, nach dem Studium in Berlin ___ arbeiten.»",
        hint: "davanti all'infinito",
        why: "<b>zu</b> sta direttamente davanti all'infinito: <i>in Berlin zu arbeiten</i>."
      },
      {
        q: "Completa con l'ausiliare werden al presente, persona wir, per formare il Futur I: «Wir ___ im Sommer nach Wien ziehen.»",
        hint: "werden, wir",
        why: "<b>Werden</b> sta in seconda posizione e l'infinito <i>ziehen</i> resta in fondo: <i>Wir werden im Sommer nach Wien ziehen.</i>"
      },
      {
        q: "Completa: «Ich habe ___, im Herbst zu studieren.» (vorhaben)",
        hint: "la parte staccata di vorhaben",
        why: "<b>Vor</b>: <i>vorhaben</i> è separabile, e la particella resta in fondo alla principale, prima della virgola."
      },
      {
        q: "Completa la frase.",
        tr: "Ho intenzione di disdire il contratto di affitto in estate.",
        why: "<i>Ich habe vor, im Sommer meine Wohnung zu kündigen</i>: <i>habe</i> con <i>ich</i>, e <i>zu</i> davanti a <i>kündigen</i>, in fondo."
      },
      {
        q: "Metti in ordine le parole.",
        tr: "Ho intenzione di trasferirmi in estate.",
        why: "<i>Ich habe vor, im Sommer umzuziehen.</i> «In estate» appartiene al trasferimento, non all'intenzione: sta quindi dentro il gruppo con <i>zu</i>, dopo la virgola."
      },
      {
        q: "Traduci: «Ho intenzione di trasferirmi a Vienna in estate.» (usa vorhaben)",
        why: "<i>Ich habe vor, im Sommer nach Wien umzuziehen</i>: <i>umzuziehen</i> in una parola. Va bene anche <i>nach Wien zu ziehen</i>."
      },
      {
        tr: "Ho intenzione di trasferirmi a Vienna in estate. Lì studierò informatica.",
        why: "In <i>Wien</i> la <b>W</b> è [v] e la <b>ie</b> si legge [iː]; in <i>Sommer</i> la <b>S</b> iniziale davanti a vocale è di norma sonora [z]; in <i>studieren</i> la <b>st</b> iniziale è [ʃt]."
      },
      {
        tr: "Dopo gli studi ho intenzione di lavorare a Berlino.",
        why: "In <i>Studium</i> la <b>st</b> iniziale è [ʃt]; in <i>nach</i> la <b>ch</b> dopo <b>a</b> è [x]."
      }
    ]
  },
  "lesson:a2-u08-l2": {
    theme: "Ripasso dei tempi",
    title: "Ripasso: i tempi",
    objectives: [
      "scegliere il tempo giusto: Perfekt, Präteritum, presente o Futur I, Konjunktiv II",
      "formare il Perfekt con haben o sein e il Partizip II",
      "usare il Präteritum di sein, haben e dei verbi modali",
      "fare una richiesta o esprimere un desiderio con könnten e hätte gern"
    ],
    theory: [
      {
        h: "Quattro modi di parlare del tempo",
        p: "<strong>Perfekt</strong> (<em>haben</em> o <em>sein</em> + Partizip II) è il passato del parlato: <em>Gestern habe ich gearbeitet. Wir sind nach Wien umgezogen.</em> Il <strong>Präteritum</strong> si usa soprattutto con <em>sein, haben</em> e i verbi modali, anche parlando: <em>Ich war krank. Wir hatten keinen Hund. Ich musste arbeiten.</em> Per il futuro: presente con un indicatore di tempo (<em>Morgen fahre ich</em>) oppure <strong>werden</strong> + infinito. Il <strong>Konjunktiv II</strong> serve per richieste e desideri: <em>Könnten Sie mir helfen? Ich hätte gern mehr Zeit.</em>"
      },
      {
        h: "haben o sein nel Perfekt",
        p: "La maggior parte dei verbi forma il Perfekt con <strong>haben</strong>: <em>Ich habe studiert.</em> I verbi intransitivi che esprimono un cambiamento di luogo o di stato prendono <strong>sein</strong> (non tutti i verbi di movimento: <em>tanzen</em> vuole <strong>haben</strong>): <em>Ich bin umgezogen. Wir sind angekommen.</em> Così anche <em>sein</em> e <em>bleiben</em>: <em>Ich bin geblieben.</em> Il verbo coniugato sta in seconda posizione, il Partizip II in fondo."
      },
      {
        contrast: "L'italiano distingue il passato prossimo dall'imperfetto (<em>ho abitato</em> / <em>abitavo</em>). Il tedesco non ha un imperfetto che corrisponda: parlando usa il Perfekt per quasi tutto (<em>Ich habe damals in Berlin gewohnt</em>), e il Präteritum compare soprattutto con <em>war, hatte</em> e i modali. Il <em>Konjunktiv II</em> di cortesia (<em>Könnten Sie ...?</em>, <em>Ich hätte gern ...</em>) corrisponde al condizionale italiano (<em>potrebbe, vorrei</em>)."
      },
      {
        trap: "Non si mescolano le due forme: «Gestern ich habe gearbeitet» ha il verbo in terza posizione, e <em>Gestern habe ich gearbeitet</em> ha il verbo coniugato in seconda. Non si dice «Ich habe umgezogen»: <em>umziehen</em> si comporta come un verbo di movimento e vuole <em>sein</em>, <em>Ich bin umgezogen</em>. E la richiesta è <em>Könnten Sie ...?</em>, non «Könnte Sie ...?»."
      },
      {
        tip: "Prima di scrivere una frase chiediti: è già successo (Perfekt, o <em>war/hatte</em>), succederà (presente + tempo, oppure <em>werden</em>), o è una richiesta (Konjunktiv II)? Poi controlla dove sta il verbo coniugato: in seconda posizione."
      }
    ],
    grammar: {
      title: "Ripasso dei tempi",
      note: "<b>Perfekt</b>: haben/sein + Partizip II in fondo. <b>Präteritum</b>: war, hatte, modali. <b>Futuro</b>: presente + tempo, oppure <b>werden</b> + infinito. <b>Konjunktiv II</b>: könnten, hätte gern.",
      table: {
        head: ["tempo", "esempio", "uso"],
        rows: [
          ["Perfekt", "Gestern habe ich den ganzen Tag gearbeitet.", "passato del parlato"],
          ["Perfekt con sein", "Letztes Jahr sind wir nach Wien umgezogen.", "movimento o cambiamento di stato"],
          ["Präteritum", "Als Kind war ich oft krank.", "sein, haben, modali"],
          ["Futuro", "Morgen werde ich dich anrufen.", "presente + tempo, oppure werden"],
          ["Konjunktiv II", "Könnten Sie mir bitte helfen?", "richieste e desideri"]
        ]
      },
      examples: [
        { tr: "Ieri ho lavorato tutto il giorno.", note: "Perfekt con haben" },
        { tr: "L'anno scorso ci siamo trasferiti a Vienna.", note: "Perfekt con sein" },
        { tr: "Da bambino ero spesso malato, e non avevamo un cane.", note: "Präteritum di sein e haben" },
        { tr: "La settimana prossima vado ad Amburgo.", note: "presente con indicatore di tempo" },
        { tr: "Domani ti chiamerò.", note: "Futur I: werden + infinito" },
        { tr: "Potrebbe aiutarmi, per favore? Vorrei avere più tempo.", note: "Konjunktiv II di cortesia e di desiderio" }
      ]
    },
    vocab: [
      "il curriculum",
      "l'esperienza",
      "il tirocinio",
      "la candidatura",
      "il capo",
      "il collega",
      "lo stipendio",
      "il corso"
    ],
    exercises: [
      {
        tr: "Il Perfekt di umziehen, tutte le persone.",
        why: "<i>Ich bin umgezogen, du bist umgezogen, er ist umgezogen, wir sind umgezogen, ihr seid umgezogen, sie sind umgezogen</i>: <i>umziehen</i> vuole <i>sein</i>, e il Partizip II ha <i>-ge-</i> in mezzo."
      },
      {
        tr: "Il Präteritum di arbeiten, tutte le persone.",
        why: "<i>Arbeitete, arbeitetest, arbeitete, arbeiteten, arbeitetet, arbeiteten</i>: la radice finisce in <i>-t</i>, quindi tra radice e desinenza si inserisce una <b>-e-</b>."
      },
      {
        tr: "Il Konjunktiv II di können, tutte le persone.",
        why: "<i>Könnte, könntest, könnte, könnten, könntet, könnten</i>: la forma si ricava dal Präteritum <i>konnte</i> con l'Umlaut."
      },
      {
        q: "Quale frase è corretta? (Ieri ho scritto una lettera.)",
        opts: [
          "Gestern ich habe einen Brief geschrieben.",
          "Gestern habe ich einen Brief geschrieben.",
          "Gestern habe ich einen Brief schrieben."
        ],
        why: "Con <i>gestern</i> in prima posizione il verbo coniugato (<i>habe</i>) resta in seconda, il soggetto lo segue e il Partizip II <i>geschrieben</i> va in fondo."
      },
      {
        q: "Quale frase è una richiesta cortese?",
        opts: [
          "Könnten Sie mir bitte helfen?",
          "Können Sie mir bitte geholfen?",
          "Könnte Sie mir bitte helfen?"
        ],
        why: "<b>Könnten Sie ...?</b>: con <i>Sie</i> la forma è <i>könnten</i>, e l'infinito <i>helfen</i> va in fondo."
      },
      {
        q: "Completa la frase (usa umziehen al Perfekt).",
        tr: "L'anno scorso ci siamo trasferiti a Vienna.",
        why: "<i>Letztes Jahr sind wir nach Wien umgezogen</i>: <i>umziehen</i> forma il Perfekt con <b>sein</b>."
      },
      {
        q: "Completa la frase.",
        tr: "Da bambino ero spesso malato, e non avevamo un cane.",
        why: "<i>Als Kind war ich oft krank, und wir hatten keinen Hund</i>: Präteritum di <i>sein</i> (<i>war</i>) e di <i>haben</i> (<i>hatten</i>)."
      },
      {
        q: "Completa la frase (primo spazio: werden, Futur I; secondo spazio: haben al Konjunktiv II).",
        tr: "Domani ti chiamerò. Vorrei avere più tempo.",
        why: "<i>Morgen werde ich dich anrufen</i>: Futur I, con l'infinito in fondo. <i>Ich hätte gern mehr Zeit</i>: Konjunktiv II di <i>haben</i>, per un desiderio."
      },
      {
        q: "Traduci: «Ieri ho lavorato tutto il giorno.» (usa il Perfekt)",
        why: "<i>Gestern habe ich den ganzen Tag gearbeitet</i>, oppure <i>Ich habe gestern den ganzen Tag gearbeitet</i>: <i>habe</i> in seconda posizione, <i>gearbeitet</i> in fondo."
      },
      {
        tr: "L'anno scorso mi sono trasferito a Vienna. Adesso lavoro lì, e l'anno prossimo seguirò un corso. Vorrei avere più tempo.",
        why: "In <i>Wien</i> la <b>W</b> è [v]; in <i>besuchen</i> la <b>ch</b> dopo <b>u</b> è [x]; in <i>gern</i> la <b>g</b> è [g]."
      },
      {
        tr: "L'anno scorso mi sono trasferito, e in autunno studierò.",
        why: "In <i>umgezogen</i> la <b>z</b> si legge sempre [ts] e la <b>g</b> è [g]; in <i>studieren</i> la <b>st</b> iniziale è [ʃt]; in <i>werde</i> la <b>w</b> è [v]."
      }
    ]
  },
  "lesson:a2-u08-l3": {
    theme: "Ripasso di casi e pronomi",
    title: "Ripasso: casi e pronomi",
    objectives: [
      "scegliere tra pronome all'accusativo e al dativo",
      "usare l'articolo al dativo (dem, der, dem, den)",
      "mettere nell'ordine giusto pronome e nome, accusativo e dativo",
      "riconoscere i verbi che vogliono il dativo (helfen, danken, gehören, schenken)"
    ],
    theory: [
      {
        h: "I pronomi: nominativo, accusativo, dativo",
        p: "<strong>ich / mich / mir</strong>, <strong>du / dich / dir</strong>, <strong>er / ihn / ihm</strong>, <strong>sie / sie / ihr</strong>, <strong>es / es / ihm</strong>, <strong>wir / uns / uns</strong>, <strong>ihr / euch / euch</strong>, <strong>sie / sie / ihnen</strong>. Il caso dipende dalla reggenza del verbo tedesco: <em>sehen</em> vuole l'accusativo (<em>Ich sehe ihn.</em>), <em>helfen</em> il dativo (<em>Ich helfe ihm.</em>), anche se in italiano si dice «aiuto lui». Le domande <em>wen? was?</em> (accusativo) e <em>wem?</em> (dativo) servono solo da appoggio: non ricavare il caso dalle domande italiane. Con <em>wir</em> e <em>ihr</em> accusativo e dativo hanno la stessa forma: <em>Er sieht uns. Er hilft uns.</em>"
      },
      {
        h: "L'articolo al dativo",
        p: "Al dativo l'articolo determinativo è <strong>dem</strong> (maschile e neutro), <strong>der</strong> (femminile), <strong>den</strong> (plurale; il nome prende <strong>-n</strong>, tranne i plurali che già finiscono in -n o -en quelli in -s e alcuni plurali di origine straniera con altre terminazioni, come <em>Praktika</em>): <em>dem Vermieter, der Mutter, den Kindern, den Nachbarn, den Jobs, den Praktika.</em> Con l'articolo indeterminativo o il possessivo: <em>einem, einer, meinem, meiner.</em> Verbi che vogliono il dativo: <strong>helfen, danken, gehören, gefallen, gratulieren</strong>. Con <strong>schenken</strong> (jemandem etwas schenken) il destinatario è al dativo e la cosa regalata all'accusativo: <em>Ich schenke meiner Mutter einen Kuchen.</em>"
      },
      {
        h: "L'ordine delle parole",
        p: "Con due nomi, di solito prima il <strong>dativo</strong>, poi l'accusativo: <em>Ich gebe dem Mann das Buch.</em> Con due pronomi, prima l'<strong>accusativo</strong>, poi il dativo: <em>Ich gebe es ihm.</em> Con un pronome e un nome, il pronome viene prima: <em>Ich gebe ihm das Buch. Ich gebe es dem Mann.</em>"
      },
      {
        contrast: "In italiano <em>mi, ti, ci, vi</em> sono uguali per l'oggetto diretto e per quello indiretto (<em>mi vede, mi dà un libro</em>), mentre il tedesco distingue <em>mich/mir</em> e <em>dich/dir</em>; solo <em>uns</em> e <em>euch</em> restano uguali. Inoltre <em>aiutare</em> in italiano vuole l'oggetto diretto (<em>lo aiuto</em>), ma <em>helfen</em> vuole il dativo (<em>ich helfe ihm</em>). Al singolare l'italiano ha <em>gli</em> (a lui) e <em>le</em> (a lei); il tedesco ha <em>ihm</em> e <em>ihr</em>, e <em>ihm</em> vale anche per i nomi neutri."
      },
      {
        trap: "Non si dice «Ich helfe ihn» né «Ich sehe ihm»: <em>helfen</em> vuole il dativo (<em>ihm</em>), <em>sehen</em> l'accusativo (<em>ihn</em>). Non si dice «Ich gebe ihm es»: con due pronomi l'accusativo viene prima, <em>Ich gebe es ihm</em>. E dopo <em>mit, bei, zu</em> l'articolo è sempre al dativo: <em>beim Umzug</em> (<em>bei dem Umzug</em>), <em>mit dem Auto</em>."
      },
      {
        tip: "Per scegliere il caso, chiediti prima se il verbo vuole il dativo (<em>helfen, danken, gehören</em>), poi se la persona riceve qualcosa. Per ogni verbo nuovo impara anche il suo caso."
      }
    ],
    grammar: {
      title: "Accusativo, dativo e pronomi",
      note: "<b>mich/mir, dich/dir, ihn/ihm, sie/ihr, uns/uns, euch/euch, sie/ihnen</b>. Articolo al dativo: <b>dem, der, dem, den</b>; al plurale il nome prende <b>-n</b> (<i>den Kindern</i>), tranne i plurali in -n/-en, in -s e alcuni plurali di origine straniera con altre terminazioni (<i>den Nachbarn, den Jobs, den Praktika</i>). Due pronomi: prima l'<b>accusativo</b> (<i>Ich gebe es ihm</i>).",
      table: {
        head: ["nominativo", "accusativo", "dativo"],
        rows: [
          ["ich", "mich", "mir"],
          ["du", "dich", "dir"],
          ["er", "ihn", "ihm"],
          ["sie", "sie", "ihr"],
          ["es", "es", "ihm"],
          ["wir", "uns", "uns"],
          ["ihr", "euch", "euch"],
          ["sie", "sie", "ihnen"]
        ]
      },
      examples: [
        { tr: "Lo vedo ogni giorno in ufficio.", note: "sehen + accusativo: ihn" },
        { tr: "Lo aiuto con il trasloco.", note: "helfen + dativo: ihm" },
        { tr: "La chiave appartiene al padrone di casa.", note: "gehören + dativo: dem Vermieter" },
        { tr: "Regalo dei fiori a mia madre.", note: "dativo femminile: meiner Mutter" },
        { tr: "Lo do a lui.", note: "due pronomi: prima l'accusativo, es ihm" },
        { tr: "Ringraziamo i vicini per l'aiuto.", note: "dativo plurale: den Nachbarn" }
      ]
    },
    vocab: [
      "il padrone di casa",
      "il vicino",
      "l'affitto",
      "il contratto di affitto",
      "la chiave",
      "lo scatolone",
      "l'indirizzo",
      "il mobile"
    ],
    exercises: [
      {
        q: "Come dici «Lo aiuto con il trasloco» (a un amico)?",
        opts: [
          "Ich helfe ihm beim Umzug.",
          "Ich helfe ihn beim Umzug.",
          "Ich helfe er beim Umzug."
        ],
        why: "<i>Helfen</i> vuole il dativo: <b>ihm</b>. <i>Beim</i> è <i>bei dem</i>, ancora il dativo."
      },
      {
        q: "Quale frase ha l'ordine giusto?",
        opts: [
          "Ich gebe ihm es.",
          "Ich gebe es ihm.",
          "Ich es gebe ihm."
        ],
        why: "Con due pronomi viene prima l'accusativo (<i>es</i>), poi il dativo (<i>ihm</i>), e il verbo coniugato resta in seconda posizione."
      },
      {
        q: "Quali frasi sono corrette?",
        opts: [
          "Ich helfe dir.",
          "Ich helfe dich.",
          "Das gehört mir.",
          "Ich sehe ihm im Büro.",
          "Wir danken euch."
        ],
        why: "<i>Helfen, gehören, danken</i> vogliono il dativo (<i>dir, mir, euch</i>). <i>Sehen</i> vuole l'accusativo: <i>Ich sehe ihn.</i>"
      },
      {
        q: "Completa: «Ich schenke ___ Mutter Blumen.» (articolo determinativo)",
        hint: "dativo femminile",
        why: "<i>Die Mutter</i> è femminile, e al dativo l'articolo è <b>der</b>: <i>Ich schenke der Mutter Blumen.</i>"
      },
      {
        q: "Completa: «Der Schlüssel gehört ___ Vermieter.» (articolo determinativo)",
        hint: "dativo maschile",
        why: "<i>Gehören</i> vuole il dativo, e <i>der Vermieter</i> è maschile: <b>dem</b>."
      },
      {
        q: "Completa: «Kennst du Tim? Ich sehe ___ oft im Büro.» (lui)",
        hint: "accusativo di er",
        why: "<i>Sehen</i> vuole l'accusativo: <b>ihn</b>."
      },
      {
        q: "Completa: «Das sind Anna und Tim. Ich danke ___ für die Hilfe.» (a loro)",
        hint: "dativo plurale",
        why: "<i>Danken</i> vuole il dativo, e al plurale il pronome è <b>ihnen</b>."
      },
      {
        q: "Completa la frase.",
        tr: "Dov'è lo scatolone? Lo cerco da molto tempo. Puoi aiutarmi?",
        why: "<i>Der Karton</i> è maschile e <i>suchen</i> vuole l'accusativo: <b>ihn</b>. <i>Helfen</i> vuole il dativo: <b>mir</b>."
      },
      {
        tr: "Aiuto la mia amica con il trasloco. Lei mi regala una torta, e io la ringrazio.",
        why: "In <i>Freundin</i> la <b>eu</b> è [ɔʏ]; in <i>schenkt</i> la <b>sch</b> è [ʃ]; in <i>Kuchen</i> la <b>ch</b> dopo <b>u</b> è [x]."
      },
      {
        tr: "Gli do la chiave, e lui mi aiuta con il trasloco.",
        why: "In <i>Schlüssel</i> la <b>sch</b> è [ʃ] e la <b>ü</b> è arrotondata; in <i>Umzug</i> la <b>z</b> è [ts]; in <i>hilft</i> la <b>h</b> iniziale è un soffio."
      }
    ]
  },
  "lesson:a2-u08-l4": {
    theme: "Le subordinate",
    title: "Pronti per il B1",
    objectives: [
      "dare un motivo con weil e riferire con dass",
      "scegliere tra als e wenn",
      "mettere il verbo coniugato in fondo nella subordinata",
      "gestire verbi modali, Perfekt e verbi separabili nella subordinata"
    ],
    theory: [
      {
        h: "weil, dass, als, wenn: il verbo va in fondo",
        p: "Dopo <strong>weil</strong> (perché), <strong>dass</strong> (che), <strong>als</strong> e <strong>wenn</strong> (quando) il verbo coniugato va <strong>in fondo</strong>, e fra principale e subordinata c'è la virgola: <em>Ich bleibe zu Hause, weil ich arbeiten muss. Ich hoffe, dass ich bald eine Stelle finde.</em> Con un modale in fondo sta il modale (<em>muss</em>), con il Perfekt l'ausiliare (<em>weil ich umgezogen bin</em>), con un verbo separabile il prefisso si riattacca (<em>weil ich früh aufstehe</em>)."
      },
      {
        h: "Se la subordinata viene prima",
        p: "Se la subordinata apre la frase, la principale comincia con il <strong>verbo coniugato</strong>: <em>Weil ich krank bin, bleibe ich zu Hause. Wenn ich Zeit habe, lerne ich Deutsch.</em> La subordinata occupa da sola la prima posizione, e il verbo della principale resta in seconda."
      },
      {
        h: "als o wenn?",
        p: "<strong>Als</strong> introduce un fatto singolo nel passato: <em>Als ich in Wien angekommen bin, habe ich dich angerufen.</em> <strong>Wenn</strong> vale per il presente, il futuro e le azioni che si ripetono: <em>Wenn ich Zeit habe, lerne ich Deutsch.</em> Alla domanda diretta si usa invece <em>wann</em>: <em>Wann kommst du?</em>"
      },
      {
        contrast: "In italiano l'ordine delle parole non cambia nella subordinata: <em>resto a casa perché devo lavorare</em>. In tedesco <em>weil ich arbeiten muss</em> manda il modale in fondo. L'italiano ha un solo <em>quando</em>; il tedesco distingue <em>als</em> (una volta, nel passato) da <em>wenn</em> (ogni volta, o nel presente e nel futuro). <em>Dass</em> corrisponde a <em>che</em>, ma in tedesco la virgola davanti è obbligatoria."
      },
      {
        trap: "Non si scrive «weil ich muss arbeiten»: il modale va in fondo, <em>weil ich arbeiten muss</em>. Per «perché» ci sono <em>weil</em> e <em>denn</em>, ma <em>denn</em> lascia il verbo in seconda posizione (<em>..., denn ich muss arbeiten</em>). Non si dice «wenn ich in Wien angekommen bin» per un fatto singolo del passato: lì ci vuole <em>als</em>. E <em>weil</em> non è una domanda: si domanda <em>Warum?</em>."
      },
      {
        tip: "Quando una frase comincia con <em>weil, dass, als, wenn</em>, cerca il verbo coniugato e portalo in fondo. Se la frase ha due verbi (<em>muss arbeiten</em>), alla fine va quello coniugato: <em>arbeiten muss</em>."
      }
    ],
    grammar: {
      title: "weil, dass, als, wenn",
      note: "Nella subordinata il verbo coniugato va <b>in fondo</b>. <b>weil</b> = perché, <b>dass</b> = che, <b>als</b> = quando (un fatto singolo nel passato), <b>wenn</b> = quando o se (presente, futuro, abitudine). Subordinata prima: la principale comincia con il verbo.",
      table: {
        head: ["congiunzione", "esempio", "nota"],
        rows: [
          ["weil", "Ich bleibe zu Hause, weil ich arbeiten muss.", "il modale in fondo"],
          ["dass", "Ich hoffe, dass ich bald eine Stelle finde.", "virgola obbligatoria"],
          ["als", "Als ich in Wien angekommen bin, habe ich dich angerufen.", "un fatto singolo nel passato"],
          ["wenn", "Wenn ich Zeit habe, lerne ich Deutsch.", "presente, futuro, abitudine"]
        ]
      },
      examples: [
        { tr: "Resto a casa perché devo lavorare.", note: "weil: il modale muss in fondo" },
        { tr: "Siccome sono malato, resto a casa.", note: "subordinata prima: la principale comincia con il verbo" },
        { tr: "Spero di trovare presto un posto di lavoro.", note: "dass: verbo coniugato in fondo" },
        { tr: "Quando sono arrivato a Vienna, ti ho chiamato.", note: "als: un fatto singolo nel passato" },
        { tr: "Quando ho tempo, studio il tedesco.", note: "wenn: presente, abitudine" },
        { tr: "So che domani non può venire.", note: "dass: kommen kann, il modale in fondo" }
      ]
    },
    vocab: [
      "il futuro",
      "il sogno",
      "l'obiettivo",
      "la possibilità",
      "la decisione",
      "sperare",
      "importante",
      "sicuro"
    ],
    exercises: [
      {
        tr: "Il presente di wollen, tutte le persone.",
        why: "<i>Will, willst, will, wollen, wollt, wollen</i>: alla prima e alla terza persona singolare la forma è uguale, senza desinenza."
      },
      {
        tr: "Il Präteritum di müssen, tutte le persone.",
        why: "<i>Musste, musstest, musste, mussten, musstet, mussten</i>: l'Umlaut sparisce, e la prima e la terza persona singolare sono uguali."
      },
      {
        tr: "Il Perfekt di bleiben, tutte le persone.",
        why: "<i>Ich bin geblieben, du bist geblieben, er ist geblieben, wir sind geblieben, ihr seid geblieben, sie sind geblieben</i>: <i>bleiben</i> vuole <i>sein</i>."
      },
      {
        q: "Completa: «Ich bleibe hier, ___ ich arbeiten muss.» (perché)",
        hint: "congiunzione che manda il verbo in fondo",
        why: "<b>weil</b> manda il verbo coniugato in fondo: <i>weil ich arbeiten muss</i>. <i>Denn</i> lascerebbe il verbo in seconda posizione."
      },
      {
        q: "Completa: «Ich hoffe, ___ ich bald eine Stelle finde.» (che)",
        hint: "congiunzione per riferire un contenuto",
        why: "<b>dass</b> introduce ciò che si spera, e il verbo coniugato <i>finde</i> va in fondo."
      },
      {
        q: "Completa: «___ ich in Wien angekommen bin, habe ich dich angerufen.» (quando)",
        hint: "un fatto singolo nel passato",
        why: "Un fatto singolo nel passato vuole <b>als</b>. Con la subordinata in prima posizione, la principale comincia con il verbo: <i>habe ich dich angerufen</i>."
      },
      {
        q: "Completa: «___ ich Zeit habe, lerne ich Deutsch.» (quando, abitualmente)",
        hint: "presente o abitudine",
        why: "Per il presente e per le azioni che si ripetono si usa <b>wenn</b>."
      },
      {
        q: "Completa: «Ich weiß, dass er morgen nicht kommen ___.» (können, er)",
        hint: "il modale va in fondo",
        why: "Nella subordinata il modale va in fondo: <b>kann</b>. La frase finisce con <i>kommen kann</i>."
      },
      {
        q: "Completa la frase.",
        tr: "Resto a casa perché sono malato.",
        why: "<i>Ich bleibe zu Hause, weil ich krank bin</i>: <i>weil</i> manda <i>bin</i> in fondo."
      },
      {
        q: "Traduci: «Resto a casa perché devo lavorare.»",
        why: "<i>Ich bleibe zu Hause, weil ich arbeiten muss</i>: il modale <i>muss</i> in fondo. Va bene anche <i>daheim</i>, e la subordinata può stare prima: <i>Weil ich arbeiten muss, bleibe ich zu Hause.</i>"
      },
      {
        tr: "Spero di trovare un posto di lavoro in autunno. Quando ho tempo, studio il tedesco, perché è importante per il mio lavoro.",
        why: "In <i>Herbst</i> la <b>b</b> prima di <b>st</b> suona [p]; in <i>wichtig</i> la desinenza <b>-ig</b> è normalmente [ɪç] nel tedesco standard (de-DE) e la <b>w</b> resta [v]; in <i>Deutsch</i> la <b>eu</b> si legge [ɔʏ] e la <b>tsch</b> [tʃ]."
      },
      {
        tr: "So che devo studiare molto, perché l'esame è difficile.",
        why: "In <i>weiß</i> la <b>ß</b> è una <b>s</b> sorda e la <b>ei</b> è [aɪ]; in <i>Prüfung</i> la <b>ü</b> è arrotondata; in <i>schwer</i> la <b>sch</b> è [ʃ]."
      }
    ]
  },
  "lesson:a2-u08-test": {
    theme: "Verifica",
    title: "Test: Progetti",
    objectives: [
      "verificare vorhaben + zu, i tempi dell'A2 (Perfekt, Präteritum, Konjunktiv II), pronomi e dativo, weil, dass, als e wenn"
    ],
    theory: [
      {
        p: "Dodici domande sull'intero livello A2. Si supera con il 70%. Non riguardare le lezioni mentre rispondi: se non ricordi qualcosa, è meglio tornare a ripassare."
      }
    ],
    exercises: [
      {
        tr: "Il Perfekt di gehen, tutte le persone.",
        why: "<i>Ich bin gegangen, du bist gegangen, er ist gegangen, wir sind gegangen, ihr seid gegangen, sie sind gegangen</i>: <i>gehen</i> vuole <i>sein</i>."
      },
      {
        tr: "Il Konjunktiv II di haben, tutte le persone.",
        why: "<i>Hätte, hättest, hätte, hätten, hättet, hätten</i>: il Präteritum <i>hatte</i> con l'Umlaut."
      },
      {
        q: "Completa: «Ich habe vor, im Herbst in Wien ___ studieren.»",
        hint: "davanti all'infinito",
        why: "<b>zu</b> sta direttamente davanti all'infinito: <i>in Wien zu studieren</i>."
      },
      {
        q: "Completa: «Als Kind ___ ich oft krank.» (essere)",
        hint: "Präteritum di sein, ich",
        why: "<b>War</b>: alla prima persona singolare non c'è nessuna desinenza."
      },
      {
        q: "Completa: «Ich helfe ___ beim Umzug.» (a lui)",
        hint: "dativo di er",
        why: "<i>Helfen</i> vuole il dativo: <b>ihm</b>."
      },
      {
        q: "Completa: «Ich bleibe zu Hause, ___ ich krank bin.» (perché)",
        hint: "congiunzione che manda il verbo in fondo",
        why: "<b>weil</b> manda il verbo coniugato in fondo: <i>weil ich krank bin</i>."
      },
      {
        q: "Completa: «Ich ___ gern ein Zimmer.» (vorrei avere)",
        hint: "Konjunktiv II di haben, ich",
        why: "<b>Hätte</b>: <i>Ich hätte gern ein Zimmer</i> è la forma cortese per un desiderio."
      },
      {
        q: "Completa: «Wir sind gestern in Berlin ___.» (Partizip II di ankommen)",
        hint: "Partizip II con -ge- in mezzo",
        why: "<b>angekommen</b>: nei verbi separabili <i>-ge-</i> va tra il prefisso e il verbo, e <i>ankommen</i> vuole <i>sein</i>."
      },
      {
        q: "Quale frase è corretta?",
        opts: [
          "Ich habe vor, nach dem Studium in Berlin zu arbeiten.",
          "Ich habe vor, nach dem Studium in Berlin arbeiten zu.",
          "Ich habe vor, nach dem Studium in Berlin zu arbeitet."
        ],
        why: "<b>zu</b> sta davanti all'infinito, e l'infinito <i>arbeiten</i> chiude la frase."
      },
      {
        q: "Completa la frase (usa ankommen al Perfekt).",
        tr: "Quando sarò arrivato a Vienna, ti chiamerò.",
        why: "<i>Wenn ich in Wien angekommen bin, rufe ich dich an</i>: <i>wenn</i> vale per il futuro, il Perfekt ha l'ausiliare <i>bin</i> in fondo, e la principale comincia con il verbo <i>rufe</i>."
      },
      {
        q: "Traduci: «Ho dato la chiave a Tim.» (usa un pronome per Tim e il Perfekt)",
        why: "<i>Ich habe ihm den Schlüssel gegeben</i>: il pronome dativo <i>ihm</i> viene prima del nome all'accusativo, <i>den Schlüssel</i>."
      },
      {
        tr: "Ho intenzione di trasferirmi, perché ho un nuovo posto di lavoro.",
        why: "In <i>umzuziehen</i> la <b>z</b> è [ts] e <i>zu</i> sta in mezzo; in <i>weil</i> la <b>w</b> è [v]; in <i>Stelle</i> la <b>st</b> iniziale è [ʃt]."
      }
    ]
  }
});
