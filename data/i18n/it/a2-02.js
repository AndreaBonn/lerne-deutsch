/* ============================================================
   Learner-language text (it) for data/core/a2-02.js, unit a2-u05.
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
      "l'appartamento, la casa (in affitto)",
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
        why: "In <i>großen</i> la <b>ß</b> è una <b>s</b> sorda e la <b>o</b> è lunga; in <i>Küche</i> la <b>ü</b> è [y] e la <b>ch</b> dopo <b>ü</b> è [ç], un suono più morbido del [x]."
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
        p: "Le preposizioni <em>in, an, auf, vor, hinter, neben, über, unter, zwischen</em> vogliono due casi. Se la frase risponde a <strong>wohin?</strong> (verso dove? c'è uno spostamento) il caso è l'<strong>accusativo</strong>; se risponde a <strong>wo?</strong> (dove? lo stato) è il <strong>dativo</strong>. <em>Ich stelle das Sofa an die Wand</em> (wohin?), <em>Das Sofa steht an der Wand</em> (wo?). Contrazioni: <em>in das → ins, an das → ans, auf das → aufs, in dem → im, an dem → am</em>."
      },
      {
        p: "Il tedesco sceglie il verbo secondo la posizione dell'oggetto. <strong>stellen / stehen</strong> per ciò che sta in piedi (<em>die Lampe, der Schrank, das Regal</em>), <strong>legen / liegen</strong> per ciò che sta disteso (<em>das Buch, der Teppich</em>). I verbi dell'azione, <em>stellen</em> e <em>legen</em>, vogliono <em>wohin?</em> e l'accusativo; quelli dello stato, <em>stehen</em> e <em>liegen</em>, vogliono <em>wo?</em> e il dativo."
      },
      {
        contrast: "L'italiano usa un verbo per tutto, <em>mettere</em>, e la stessa preposizione per lo stato e per il movimento: <em>metto il libro sul tavolo, il libro è sul tavolo</em>. Il tedesco distingue due volte: con il <strong>verbo</strong> (<em>legen</em> o <em>stellen</em>, <em>liegen</em> o <em>stehen</em>) e con il <strong>caso</strong> (accusativo o dativo): <em>Ich lege das Buch auf den Tisch. Das Buch liegt auf dem Tisch.</em>"
      },
      {
        trap: "Non tradurre «mettere» con un verbo solo. <em>Ich stelle das Buch auf den Tisch</em> si dice se il libro sta in piedi, <em>Ich lege das Buch auf den Tisch</em> se è steso: dipende dall'oggetto e dalla posizione, non dalla parola italiana. Con <em>stehen</em> e <em>liegen</em> il caso resta il dativo: <em>Die Lampe steht auf dem Tisch</em>, mai «auf den Tisch»."
      }
    ],
    grammar: {
      title: "wohin? + accusativo, wo? + dativo",
      note: "<b>stellen, legen</b> = azione, wohin? + accusativo. <b>stehen, liegen</b> = stato, wo? + dativo.",
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
        { tr: "Metto il divano alla parete.", note: "stellen + accusativo: an die Wand" },
        { tr: "Il divano sta alla parete.", note: "stehen + dativo: an der Wand" },
        { tr: "Metto il tappeto sotto il tavolo.", note: "legen + accusativo: unter den Tisch" },
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
        why: "C'è un movimento (<i>wohin?</i>): <i>stellen</i> e l'accusativo, <b>an die Wand</b>."
      },
      {
        q: "Scegli il verbo: «Der Schrank ___ in der Ecke.»",
        opts: ["steht", "stellt", "legt"],
        why: "L'armadio sta in piedi e la frase indica dove si trova (<i>in der Ecke</i>, dativo): <b>steht</b>."
      },
      {
        q: "Completa: «Ich lege das Buch auf ___ Tisch.»",
        opts: ["dem", "den", "der"],
        why: "<i>Legen</i> indica un movimento, quindi accusativo: <i>Tisch</i> è maschile, <b>den</b> Tisch."
      },
      {
        q: "Quali frasi sono corrette?",
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
        why: "<i>Stelle</i> è l'azione, <i>steht</i> è lo stato: il primo verbo risponde a <i>wohin?</i>, il secondo a <i>wo?</i>."
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
        why: "In <i>Küche</i> la <b>ü</b> è [y] e la <b>ch</b> è [ç]; in <i>Keller</i> la <b>K</b> è piena e la <b>e</b> breve."
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
        contrast: "<em>Könnten Sie</em> corrisponde al condizionale italiano <em>potrebbe</em>: in tutte e due le lingue la forma verbale addolcisce la richiesta. La differenza sta nel pronome: l'italiano usa <em>Lei</em> con la terza persona singolare, il tedesco usa <em>Sie</em> con la forma della terza persona <strong>plurale</strong> (<em>Könnten Sie</em>, <em>Sie sind</em>). E <em>kaputt</em> è invariabile, mentre «rotto» si accorda: <em>Die Heizung ist kaputt, Die Fenster sind kaputt</em>."
      },
      {
        trap: "L'infinito non segue subito <em>Könnten</em>: va in fondo alla frase, dopo tutti i complementi. <em>Könnten Sie die Heizung reparieren?</em>, non «Könnten Sie reparieren die Heizung?». Per telefono ci si presenta con <em>Guten Tag, hier ist Weber</em> (non «Ich bin Weber») e con la cortesia si resta su <em>Sie</em>, anche se l'altra persona è più giovane."
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
        { tr: "Il riscaldamento è rotto.", note: "kaputt non cambia" },
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
        hint: "aggettivo invariabile",
        why: "<b>kaputt</b>, con accento sull'ultima sillaba, non cambia con il genere."
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
        why: "Per telefono si dice <i>hier ist Weber</i>, non «ich bin». Per la richiesta cortese vanno bene <i>Könnten</i> e <i>Würden</i>; anche <i>Können</i> è corretto, ma meno cortese."
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
        q: "Quale frase è corretta?",
        opts: [
          "Ich lege das Buch auf dem Tisch.",
          "Ich lege das Buch auf den Tisch.",
          "Ich liege das Buch auf den Tisch."
        ],
        why: "<i>Legen</i> è un'azione (<i>wohin?</i>) e vuole l'accusativo: <b>auf den Tisch</b>. <i>Liegen</i> non ha oggetto."
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
        why: "In <i>Kühlschrank</i> la <b>ü</b> è [y] e la <b>ch</b> dopo <b>ü</b> è [ç]; in <i>Sofa</i> l'accento cade sulla <b>o</b>, che è lunga."
      },
      {
        tr: "Cerco un appartamento luminoso con un balcone grande.",
        why: "In <i>großen</i> la <b>ß</b> è una <b>s</b> sorda; <i>einem großen Balkon</i> è dativo dopo <i>mit</i>, quindi <b>-en</b>."
      }
    ]
  }
});
