/* ============================================================
   Learner-language text (it) for data/core/pfl-04.js, unit pfl-u04.
   Keys point at ids in the neutral layer; arrays merge by index,
   so their length has to match core.
   Checked by scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("it", {
  "unit:pfl-u04": {
    title: "Dolore ed emergenza",
    grammarNote: "la declinazione dell'aggettivo per descrivere il dolore · le subordinate temporali als, wenn, bis, während, sobald · l'imperativo per chiamare aiuto · Perfekt e Präteritum per riferire una caduta"
  },
  "lesson:pfl-u04-l1": {
    theme: "Il dolore",
    title: "Quanto sono forti i dolori?",
    objectives: [
      "chiedere al paziente l'intensità del dolore su una scala da 0 a 10",
      "descrivere il tipo di dolore: pungente, bruciante, sordo, gravativo, che tira",
      "mettere la desinenza giusta all'aggettivo davanti al nome",
      "riferire il dolore al medico senza promettere un farmaco al paziente"
    ],
    theory: [
      {
        h: "Misurare il dolore con una domanda",
        p: "Il dolore non si misura con uno strumento: lo dice il paziente. Per questo in molti reparti si usa una scala numerica da 0 a 10: <em>Wie stark sind die Schmerzen von null bis zehn? Null heißt keine Schmerzen, zehn heißt die stärksten Schmerzen, die Sie sich vorstellen können.</em> Poi si chiede il tipo di dolore (<em>Wie fühlt sich der Schmerz an?</em>), dove si irradia (<em>Strahlt der Schmerz aus?</em>) e da quando c'è (<em>Seit wann?</em>). Il numero si annota insieme all'ora, così chi viene dopo può confrontarlo."
      },
      {
        h: "L'aggettivo davanti al nome cambia desinenza",
        p: "Quando l'aggettivo sta <strong>davanti</strong> al nome prende una desinenza che dipende dall'articolo, dal genere e dal caso: <em>ein drückend<b>er</b> Schmerz</em> (nominativo, articolo indeterminativo), <em>einen stechend<b>en</b> Schmerz</em> (accusativo), <em>der dumpf<b>e</b> Schmerz</em> (dopo l'articolo determinativo). Al plurale senza articolo la desinenza è <b>-e</b> al nominativo e all'accusativo (<em>starke Schmerzen</em>) e <b>-en</b> al dativo (<em>bei leichten Schmerzen</em>); dopo <em>die</em> o <em>diese</em> è <b>-en</b>: <em>diese starken Schmerzen</em>. Quando invece l'aggettivo sta <strong>dopo</strong> <em>sein</em>, non prende nessuna desinenza: <em>Der Schmerz ist dumpf.</em>"
      },
      {
        contrast: "Per chi parla italiano <em>Analgetikum</em> e <em>Analgesie</em> sono trasparenti: analgesico, analgesia. È il registro dei medici e della documentazione (<em>Analgetikum nach ärztlicher Anordnung</em>). Con il paziente la parola è tedesca e composta: <em>das Schmerzmittel</em>, <em>die Schmerzlinderung</em>; un paziente italiano capisce «analgesico», molti pazienti tedeschi non dicono mai <em>Analgetikum</em>. Sull'aggettivo: in italiano concorda sempre con il nome, anche dopo il verbo («il dolore è forte», «i dolori sono forti»); in tedesco dopo <em>sein</em> resta nudo (<em>Die Schmerzen sind stark</em>) e la desinenza compare solo davanti al nome, dove l'italiano di solito mette l'aggettivo dopo: «dolori forti», ma <em>starke Schmerzen</em>."
      },
      {
        trap: "Il paziente tedesco parla quasi sempre di dolori al plurale: <em>Ich habe Schmerzen</em>, <em>Haben Sie Schmerzen?</em> Il singolare <em>der Schmerz</em> si usa quando si descrive un dolore preciso: <em>Der Schmerz ist stechend.</em> Attenzione a <em>stark</em>: davanti al nome plurale senza articolo è <em>starke</em>, non «starken» (<em>Haben Sie starke Schmerzen?</em>). E <em>drückend</em> non è «pressante» nel senso di urgente: è il dolore gravativo, che preme."
      },
      {
        tip: "Se il paziente chiede qualcosa per il dolore, non promettere un farmaco: <em>Ich sage es sofort der Ärztin, sie entscheidet über ein Schmerzmittel.</em> Quale farmaco e quando lo decide la prescrizione medica. Dopo, richiedi il numero sulla scala e annotalo di nuovo: è così che si vede se il dolore è diminuito."
      }
    ],
    grammar: {
      title: "L'aggettivo che descrive il dolore",
      note: "Davanti al nome l'aggettivo prende una <b>desinenza</b>; dopo <b>sein</b> non ne prende nessuna. Al plurale senza articolo: <b>-e</b> (nominativo, accusativo), <b>-en</b> (dativo); dopo <i>die</i>, <i>diese</i>: <b>-en</b>.",
      table: {
        head: ["caso", "esempio", "desinenza"],
        rows: [
          ["nominativo, ein", "Es ist ein drückender Schmerz.", "-er"],
          ["accusativo, einen", "Ich habe einen stechenden Schmerz.", "-en"],
          ["plurale senza articolo", "Haben Sie starke Schmerzen?", "-e"],
          ["plurale con diese", "Seit wann haben Sie diese starken Schmerzen?", "-en"],
          ["dativo plurale senza articolo", "Auch bei leichten Schmerzen dürfen Sie klingeln.", "-en"],
          ["dopo sein", "Der Schmerz ist dumpf.", "nessuna"]
        ]
      },
      examples: [
        { tr: "Ha forti dolori?", note: "plurale senza articolo: starke" },
        { tr: "Ho un dolore pungente al fianco.", note: "accusativo maschile dopo einen: stechenden" },
        { tr: "È un dolore gravativo.", note: "nominativo maschile dopo ein: drückender" },
        { tr: "Il dolore è sordo.", note: "dopo sein l'aggettivo non prende desinenza" },
        { tr: "Da quando ha questi dolori forti?", note: "dopo diese al plurale: starken" },
        { tr: "Anche se i dolori sono leggeri può suonare il campanello.", note: "bei vuole il dativo: leichten" }
      ]
    },
    vocab: [
      "la scala del dolore",
      "l'intensità del dolore",
      "pungente, a fitte",
      "bruciante",
      "sordo (di un dolore)",
      "gravativo, che preme",
      "che tira",
      "irradiarsi (der Schmerz strahlt aus: il dolore si irradia)",
      "l'antidolorifico (parola per il paziente)",
      "l'analgesico (termine tecnico)",
      "il sollievo dal dolore (parola per il paziente)",
      "l'analgesia (termine tecnico)"
    ],
    dialogue: [
      "Signora Keller, ha dolore?",
      "Sì, ho forti dolori alla schiena.",
      "Quanto sono forti i dolori da zero a dieci? Zero vuol dire nessun dolore, dieci vuol dire il dolore più forte che riesce a immaginare.",
      "Direi sette.",
      "Che tipo di dolore è? È pungente, bruciante o sordo?",
      "Più che altro sordo. E si irradia alla gamba destra.",
      "Grazie. Lo dico subito alla dottoressa, è lei che decide per un antidolorifico.",
      "Grazie, signora Marin."
    ],
    culture: {
      title: "Uno sguardo tedesco: il dolore si chiede e si annota",
      text: "<p>Per l'assistenza alle persone con dolore in Germania esiste un <i>Expertenstandard</i> nazionale della cura infermieristica, pubblicato dal DNQP: descrive come rilevare il dolore in modo sistematico, documentarlo e rivalutarlo. In pratica molti reparti chiedono il dolore con una scala numerica da 0 a 10, la <i>Numerische Rating-Skala</i> (NRS), e lo annotano nella curva insieme ai parametri vitali.</p><p>Con le persone che non riescono a dare un numero, per esempio nella demenza avanzata, si usano scale di osservazione del comportamento: il volto, il respiro, l'agitazione. Quale scala usare lo stabilisce la struttura; il principio resta che il dolore è quello che riferisce il paziente, non quello che si vede da fuori.</p>"
    },
    exercises: [
      {
        q: "La paziente vuole dire «Ho un dolore pungente al fianco». Quale frase è corretta?",
        opts: [
          "Ich habe einen stechender Schmerz in der Seite.",
          "Ich habe einen stechenden Schmerz in der Seite.",
          "Ich habe ein stechenden Schmerz in der Seite."
        ],
        why: "<i>Der Schmerz</i> è maschile e qui è complemento oggetto, quindi accusativo: <b>einen stechenden Schmerz</b>. Dopo <i>einen</i> l'aggettivo prende <b>-en</b>."
      },
      {
        q: "Completa: «Haben Sie ___ Schmerzen?» (stark)",
        hint: "plurale senza articolo",
        why: "<b>starke</b>: al plurale senza articolo l'aggettivo prende <b>-e</b>, come l'articolo <i>die</i> che manca."
      },
      {
        q: "Scegli l'articolo determinativo giusto per ogni nome.",
        items: ["scala del dolore", "antidolorifico", "analgesico", "sollievo dal dolore", "analgesia", "schiena"]
      },
      {
        q: "Abbina ogni aggettivo al tipo di dolore.",
        pairs: ["pungente, a fitte", "bruciante", "sordo", "che tira"]
      },
      {
        q: "Metti in ordine le parole.",
        tr: "Il dolore si irradia al braccio?",
        why: "<i>Strahlt der Schmerz in den Arm aus?</i> Domanda sì/no: il verbo coniugato <i>strahlt</i> apre la frase e il prefisso separabile <i>aus</i> va in fondo."
      },
      {
        q: "Completa la frase.",
        tr: "Ho un dolore sordo alla schiena, ed è molto forte.",
        why: "<i>einen dumpfen Schmerz</i>: davanti al nome, accusativo maschile, desinenza <b>-en</b>. <i>er ist sehr stark</i>: dopo <i>sein</i> l'aggettivo resta senza desinenza."
      },
      {
        q: "Traduci, rivolto al paziente: «Ha forti dolori?»",
        why: "<i>Haben Sie starke Schmerzen?</i> Nel parlato si sente anche <i>große Schmerzen</i>. Per chiedere del dolore si usa di solito il plurale, e l'aggettivo davanti al plurale senza articolo prende <b>-e</b>."
      },
      {
        q: "Quali frasi hanno la desinenza giusta?",
        opts: [
          "Haben Sie starke Schmerzen?",
          "Es ist ein drückender Schmerz.",
          "Ich habe einen dumpfe Schmerz.",
          "Seit wann haben Sie diese starken Schmerzen?",
          "Der Schmerz ist stechender."
        ],
        why: "Dopo <i>einen</i> serve <i>dumpfen</i>. Dopo <i>ist</i> l'aggettivo non prende desinenza: <i>Der Schmerz ist stechend</i>."
      },
      {
        q: "Un paziente suona il campanello.",
        setting: "Entri nella stanza: il paziente dice di avere dolore alla pancia.",
        lines: [
          { tr: "Ho dolore alla pancia." },
          { tr: "Chiedi quanto è forte il dolore da zero a dieci.", answerTr: "Quanto sono forti i dolori da zero a dieci?" },
          { tr: "Più o meno sei." },
          { tr: "Chiedi se è un dolore pungente o sordo.", answerTr: "È un dolore pungente o sordo?" },
          { tr: "Più che altro pungente. Adesso mi dà qualcosa per il dolore?" },
          { tr: "Rispondi che lo dici subito alla dottoressa e che decide lei.", answerTr: "Lo dico subito alla dottoressa. È lei che decide per un antidolorifico." }
        ]
      },
      {
        tr: "Ho forti dolori alla schiena. Il dolore è sordo e si irradia alla gamba destra.",
        why: "In <i>Schmerzen</i> la <b>sch</b> è [ʃ] e la <b>z</b> è [ts]; in <i>Rücken</i> la <b>ü</b> è breve; in <i>strahlt</i> la <b>st</b> iniziale è [ʃt] e la <b>h</b> allunga la <b>a</b>."
      },
      {
        tr: "Quanto sono forti i dolori da zero a dieci?",
        why: "In <i>stark</i> la <b>st</b> iniziale è [ʃt]; in <i>null</i> la <b>u</b> è breve; in <i>zehn</i> la <b>z</b> è [ts] e la <b>h</b> allunga la <b>e</b>."
      }
    ]
  },
  "lesson:pfl-u04-l2": {
    theme: "Riconoscere l'emergenza",
    title: "Un'emergenza",
    objectives: [
      "riconoscere i segnali di un'emergenza e dire che cosa si è osservato",
      "capire e usare le coppie Fachsprache / Laiensprache dell'emergenza",
      "scegliere tra als e wenn e mettere il verbo in fondo nella subordinata temporale",
      "chiedere e annotare quando è cominciato il disturbo"
    ],
    theory: [
      {
        h: "Che cosa si osserva",
        p: "Prima di tutto si riconosce e si chiama aiuto. Le frasi di questa lezione descrivono ciò che si vede e si sente: il paziente <em>reagiert nicht</em>, <em>ist nicht ansprechbar</em> (non risponde quando gli si parla), <em>ist plötzlich ganz blass</em>, <em>spricht so komisch</em>, un braccio resta giù, un angolo della bocca pende. La parola che conta è <em>plötzlich</em>, all'improvviso: un cambiamento improvviso si riferisce subito, anche se non sai ancora che cosa sia. La diagnosi spetta al medico; il tuo compito è vedere, chiamare e restare."
      },
      {
        h: "La subordinata temporale",
        p: "Le congiunzioni temporali aprono una subordinata con il verbo coniugato <strong>in fondo</strong>: <em>bis das Team kommt</em>, <em>während ich mit ihr sprach</em>, <em>sobald das Team da ist</em>. Se la subordinata viene prima, la principale comincia con il verbo: <em>Als ich ins Zimmer kam, <b>war</b> sie nicht ansprechbar.</em> Due congiunzioni traducono «quando»: <strong>als</strong> per un fatto <b>unico nel passato</b> (<em>Als ich ins Zimmer kam</em>), <strong>wenn</strong> per il presente, il futuro e ciò che si ripete (<em>Wenn ein Patient nicht reagiert, rufe ich sofort Hilfe</em>). <em>Wann</em> invece è la domanda: <em>Wann hat das angefangen?</em>"
      },
      {
        contrast: "I termini tecnici di questa lezione sono quasi italiani: <em>Synkope</em> sincope, <em>Apoplex</em> apoplessia, <em>Myokardinfarkt</em> infarto miocardico, <em>somnolent</em> sonnolento. Nei referti tedeschi li troverai insieme ad altri sinonimi tecnici, ma il paziente e i familiari usano le parole tedesche: <em>die Ohnmacht</em> (lo svenimento), <em>der Schlaganfall</em>, <em>der Herzinfarkt</em>, <em>schläfrig</em>. In italiano si dice comunemente «ictus»; in tedesco quella parola il paziente non la usa: dice <em>Schlaganfall</em>. Per «quando» l'italiano ha una parola sola; il tedesco ne ha tre (<em>als, wenn, wann</em>), e sbagliare tra <em>als</em> e <em>wenn</em> è l'errore più comune nel racconto di un fatto."
      },
      {
        trap: "<em>Ansprechbar</em> non vuol dire «che parla»: vuol dire che il paziente <b>risponde</b> quando gli si parla. Un paziente può essere <em>wach</em> (sveglio) e non <em>ansprechbar</em>. <em>Die Ohnmacht</em> è lo svenimento, ma nel linguaggio comune vuol dire anche impotenza, sentirsi senza potere (<em>Ohnmacht und Wut</em>); in reparto il senso è il primo. E <em>somnolent</em> non è semplicemente «stanco»: è uno stato in cui il paziente dorme molto ma si sveglia se lo chiami, da annotare e riferire."
      },
      {
        tip: "Chiedi sempre, e annota, quando è cominciato: <em>Wann hat das angefangen?</em> Se il disturbo potrebbe essere un ictus, l'ora di inizio è una delle prime cose che il medico vorrà sapere. Se il paziente non lo sa, chiedi a chi c'era: <em>Wann haben Sie ihn zuletzt normal gesehen?</em>"
      }
    ],
    grammar: {
      title: "als, wenn, bis, während, sobald",
      note: "Nella subordinata temporale il verbo coniugato va <b>in fondo</b>. <b>als</b>: un fatto unico nel passato. <b>wenn</b>: presente, futuro, ripetizione. <b>wann</b>: la domanda.",
      table: {
        head: ["congiunzione", "esempio", "uso"],
        rows: [
          ["als", "Als ich ins Zimmer kam, war sie nicht ansprechbar.", "una volta, nel passato"],
          ["wenn", "Wenn ein Patient nicht reagiert, rufe ich sofort Hilfe.", "ogni volta, regola"],
          ["bis", "Ich bleibe bei der Patientin, bis das Team kommt.", "fino a quando"],
          ["während", "Während ich mit ihr sprach, wurde sie blass.", "nello stesso momento"],
          ["sobald", "Sobald das Team da ist, berichte ich kurz.", "subito dopo"]
        ]
      },
      examples: [
        { tr: "Quando sono entrata in camera, la signora Keller non rispondeva.", note: "als: un fatto unico nel passato" },
        { tr: "Se un paziente non reagisce, chiamo subito aiuto.", note: "wenn: una regola che vale sempre" },
        { tr: "Resto con la paziente finché arriva l'équipe.", note: "bis: il verbo kommt in fondo" },
        { tr: "Mentre le parlavo, è diventata all'improvviso pallidissima.", note: "während: due cose nello stesso momento" },
        { tr: "Quando si è alzata, le si è annebbiata la vista.", note: "jemandem wird schwarz vor Augen: espressione comune" },
        { tr: "Appena l'équipe è qui, riferisco brevemente che cosa è successo.", note: "sobald: subito dopo" }
      ]
    },
    vocab: [
      "l'emergenza",
      "la sincope (termine tecnico)",
      "lo svenimento (parola per il paziente)",
      "l'ictus, l'apoplessia (termine tecnico)",
      "l'ictus (parola per il paziente)",
      "l'infarto miocardico (termine tecnico)",
      "l'infarto (parola per il paziente)",
      "privo di coscienza",
      "che risponde quando gli si parla (nicht ansprechbar: non risponde)",
      "sonnolento (termine tecnico)",
      "assonnato (parola per il paziente)",
      "pallido"
    ],
    dialogue: [
      "Signora Marin, venga presto, per favore! Mio padre parla in modo strano.",
      "Arrivo subito. Signor Brandt, mi sente?",
      "Quando gli ho dato l'acqua, gli è caduto il bicchiere di mano.",
      "Quando è cominciato?",
      "Circa dieci minuti fa, mentre mangiava.",
      "Signor Brandt, può alzare tutte e due le braccia, per favore?",
      "Il braccio destro resta giù. E la bocca pende da un lato.",
      "Può essere un ictus. Adesso premo il pulsante di allarme e resto con lui finché arriva l'équipe."
    ],
    culture: {
      title: "Uno sguardo tedesco: il tempo nell'ictus",
      text: "<p>In Germania molti ospedali hanno una <i>Stroke Unit</i>, un'unità specializzata per l'ictus, e nei corsi per il personale e per il pubblico si insegna spesso il test <i>FAST</i>: <i>Face</i> (il volto è asimmetrico?), <i>Arms</i> (un braccio cade?), <i>Speech</i> (la parola è confusa?), <i>Time</i> (il tempo conta: chiamare subito e annotare l'ora). Sono domande per riconoscere, non per curare.</p><p>Nel dialogo l'infermiera fa alzare le braccia, chiede quando è cominciato e chiama l'équipe: riconoscere, chiamare, restare. Che cosa succede dopo lo decide il medico secondo il protocollo della struttura.</p>"
    },
    exercises: [
      {
        q: "Abbina ogni termine tecnico alla parola che usa il paziente.",
        pairs: ["die Ohnmacht", "der Schlaganfall", "der Herzinfarkt", "schläfrig"]
      },
      {
        q: "Completa: «___ ich ins Zimmer kam, war sie nicht ansprechbar.»",
        opts: ["Als", "Wenn", "Wann"],
        why: "<b>Als</b>: un fatto unico nel passato. <i>Wenn</i> si usa per ciò che si ripete o per il presente e il futuro; <i>wann</i> è la domanda."
      },
      {
        q: "Completa: «Ich bleibe bei ihm, ___ das Team kommt.»",
        hint: "«finché»",
        why: "<b>bis</b>: «finché, fino a quando». Il verbo della subordinata, <i>kommt</i>, va in fondo."
      },
      {
        tr: "Il Präteritum di kommen, tutte le persone.",
        why: "<i>Kam, kamst, kam, kamen, kamt, kamen</i>: verbo forte, la vocale cambia in <b>a</b>. Alla prima e alla terza persona singolare non c'è desinenza: <i>ich kam, sie kam</i>. È la forma che di solito si usa dopo <i>als</i> nel racconto; nel parlato si sente anche il Perfekt."
      },
      {
        q: "Completa la frase.",
        tr: "Se un paziente non reagisce, chiamo subito aiuto.",
        why: "Dopo <i>wenn</i> il verbo <i>reagiert</i> va in fondo alla subordinata; la principale comincia con il verbo: <i>rufe ich</i>."
      },
      {
        q: "Metti in ordine le parole.",
        tr: "Quando sono entrata in camera, non rispondeva.",
        why: "<i>Als ich ins Zimmer kam, war sie nicht ansprechbar.</i> Nella subordinata <i>kam</i> va in fondo; dopo la virgola la principale comincia con il verbo <i>war</i>."
      },
      {
        q: "Quali osservazioni sono segnali da riferire subito?",
        opts: [
          "Der Patient reagiert nicht, wenn ich ihn anspreche.",
          "Die Patientin ist plötzlich ganz blass und schwitzt.",
          "Der Patient schläft nach dem Mittagessen ein bisschen.",
          "Ein Mundwinkel hängt plötzlich nach unten.",
          "Die Patientin liest im Bett die Zeitung."
        ],
        why: "Un paziente che non risponde e un cambiamento <b>improvviso</b> (<i>plötzlich</i>) del colore o del volto si riferiscono subito. Un sonnellino dopo pranzo e la lettura del giornale no."
      },
      {
        q: "Scegli l'articolo determinativo giusto per ogni nome.",
        items: ["emergenza", "svenimento", "ictus", "sincope", "coscienza", "infarto"]
      },
      {
        q: "Traduci: «Resto con lui finché arriva l'équipe.»",
        why: "<i>Ich bleibe bei ihm, bis das Team kommt</i>: <i>bei</i> vuole il dativo, <i>ihm</i>; dopo <i>bis</i> il verbo va in fondo. Va bene anche <i>bis das Team da ist</i>."
      },
      {
        tr: "Quando sono entrata in camera, la signora Keller non rispondeva. Ho chiamato subito aiuto.",
        why: "In <i>ansprechbar</i> la <b>sp</b> è [ʃp] e la <b>ch</b> dopo <b>e</b> è [ç]; in <i>Zimmer</i> la <b>z</b> è [ts]; in <i>sofort</i> la <b>s</b> iniziale davanti a vocale è sonora [z]."
      },
      {
        tr: "Quando è cominciato?",
        why: "In <i>Wann</i> la <b>w</b> si legge [v]; in <i>angefangen</i> il prefisso <b>an</b> e il <b>ge</b> si leggono di seguito, senza pausa e con l'accento su <b>an</b>, mentre il <b>-ngen</b> finale è [ŋən], senza una <b>g</b> dura."
      }
    ]
  },
  "lesson:pfl-u04-l3": {
    theme: "Chiamare aiuto",
    title: "Chiamare aiuto",
    objectives: [
      "chiamare aiuto in reparto con l'allarme e a domicilio con il 112",
      "rispondere alle domande della centrale operativa: dove, che cosa è successo",
      "dare istruzioni brevi con l'imperativo, al Sie con pazienti e familiari e al du con i colleghi",
      "distinguere Reanimation dal reparto di rianimazione italiano"
    ],
    theory: [
      {
        h: "Chi si chiama, e come",
        p: "In ospedale si chiama aiuto dall'interno: il <em>Notrufknopf</em> nella stanza e nel bagno, l'allarme del reparto, il numero di emergenza interno della struttura. Fuori dall'ospedale, a domicilio o in una struttura per anziani senza medico presente, si chiama il <strong>112</strong>: in Germania è il numero di soccorso sanitario e vigili del fuoco (<em>Rettungsdienst und Feuerwehr</em>) e si chiama gratis da ogni telefono. Il <strong>110</strong> è la polizia. Al telefono risponde la <em>Leitstelle</em>, la centrale operativa, che fa le domande nell'ordine che le serve: lasciala guidare."
      },
      {
        h: "L'imperativo",
        p: "Con il <strong>Sie</strong> l'imperativo è il verbo all'infinito seguito da <em>Sie</em>: <em>Rufen Sie bitte die 112 an! Bleiben Sie bitte bei Ihrem Mann!</em> Con il <strong>du</strong>, che molti reparti usano tra colleghi, è la radice del verbo, spesso senza <b>-e</b>: <em>Hol bitte schnell Hilfe! Lös bitte den Alarm aus!</em> I verbi che al presente cambiano <b>e</b> in <b>i</b> lo fanno anche qui: <em>du gibst</em> → <em>Gib mir bitte das Telefon!</em> Il prefisso separabile va in fondo: <em>Rufen Sie ... an</em>, <em>Lös ... aus</em>. <em>Bitte</em> ammorbidisce, ma in emergenza la frase resta breve."
      },
      {
        contrast: "In italiano l'imperativo di cortesia usa il congiuntivo: «chiami il 112», «resti con lui». In tedesco si usa l'infinito più <em>Sie</em>, sempre nello stesso ordine: <em>Rufen Sie</em>, <em>Bleiben Sie</em>. La coppia di questa lezione inganna proprio chi parla italiano: <em>die Reanimation</em> è la rianimazione cardiopolmonare, l'azione, e la parola del paziente è <em>die Wiederbelebung</em>. Il reparto che in Italia si chiama «rianimazione» in Germania è la <em>Intensivstation</em>. In Italia, a seconda della regione, per l'ambulanza si chiama il 112 unico oppure ancora il 118; in Germania il numero è il 112."
      },
      {
        trap: "<em>Die Notaufnahme</em> è il pronto soccorso, <em>der Notarzt</em> il medico d'emergenza che arriva con il soccorso, <em>der Rettungswagen</em> l'ambulanza. <em>Die Ambulanz</em>, in un ospedale tedesco, è di solito l'ambulatorio; per il mezzo di soccorso di' <em>der Rettungswagen</em>. E non chiudere tu la chiamata con la centrale: <em>Bleiben Sie am Telefon</em> vuol dire restare in linea finché è la <em>Leitstelle</em> a chiudere."
      },
      {
        tip: "Il primo giorno in un reparto nuovo chiedi due cose: dov'è il pulsante di allarme e qual è il numero interno di emergenza della struttura. Cambiano da ospedale a ospedale, e in un'emergenza non c'è tempo per cercarli."
      }
    ],
    grammar: {
      title: "L'imperativo per chiamare aiuto",
      note: "Al <b>Sie</b>: infinito + Sie. Al <b>du</b>: radice del verbo, spesso senza -e; <b>e</b> diventa <b>i</b> dove cambia anche al presente. Il prefisso separabile va <b>in fondo</b>.",
      table: {
        head: ["a chi", "esempio", "forma"],
        rows: [
          ["paziente, familiare", "Rufen Sie bitte die 112 an!", "rufen + Sie, an in fondo"],
          ["paziente, familiare", "Bleiben Sie bitte bei Ihrem Mann!", "bleiben + Sie"],
          ["collega", "Hol bitte schnell Hilfe!", "holen → hol"],
          ["collega", "Lös bitte den Alarm aus!", "auslösen → lös ... aus"],
          ["collega", "Gib mir bitte das Telefon!", "du gibst → gib"]
        ]
      },
      examples: [
        { tr: "Chiami il 112, per favore!", note: "separabile: an in fondo" },
        { tr: "Vai a chiamare aiuto, presto!", note: "al collega, con il du" },
        { tr: "Resti con Suo marito, per favore!", note: "al familiare, con il Sie" },
        { tr: "Fai partire l'allarme, per favore!", note: "auslösen: aus in fondo" },
        { tr: "Dammi il telefono, per favore!", note: "geben: e diventa i" },
        { tr: "Rimanga al telefono e non riattacchi!", note: "così dice spesso la centrale operativa" }
      ]
    },
    vocab: [
      "la chiamata di emergenza (anche: il numero di emergenza)",
      "il numero di emergenza",
      "il pulsante di allarme",
      "l'allarme",
      "far partire, attivare (un allarme)",
      "la centrale operativa del soccorso",
      "il servizio di soccorso sanitario",
      "l'ambulanza",
      "l'équipe di rianimazione",
      "la rianimazione cardiopolmonare (termine tecnico)",
      "la rianimazione (parola per il paziente)",
      "andare a prendere, chiamare (Hilfe holen: chiamare aiuto)"
    ],
    dialogue: [
      "Signora Wolf, adesso chiamo il 112. Resti con Suo marito, per favore.",
      "Emergenza, vigili del fuoco e soccorso sanitario. Dov'è l'emergenza?",
      "In Lindenstraße 12, al secondo piano. Sono un'infermiera del servizio di assistenza domiciliare.",
      "Che cosa è successo?",
      "Un paziente di 78 anni all'improvviso non risponde più.",
      "Rimanga al telefono, per favore. L'ambulanza è in arrivo.",
      "Bene. Signora Wolf, apra la porta di casa per il soccorso, per favore.",
      "Sì, vado subito."
    ],
    culture: {
      title: "Uno sguardo tedesco: le domande della centrale",
      text: "<p>Nei corsi di primo soccorso in Germania si insegnano spesso le «W» della chiamata di emergenza: <i>Wo</i> (dove), <i>Was</i> (che cosa è successo), <i>Wie viele</i> (quante persone), <i>Welche Verletzungen</i> (quali lesioni o sintomi) e <i>Warten auf Rückfragen</i> (aspettare le domande). L'ultima è la più importante: la centrale fa le sue domande e chiude lei la telefonata.</p><p>Chi lavora nell'assistenza domiciliare non ha l'équipe del reparto a pochi metri, quindi conviene sapere a memoria la propria frase di presentazione: <i>Ich bin Pflegefachkraft vom ambulanten Pflegedienst</i>, e tenere a portata di mano l'indirizzo esatto del paziente.</p>"
    },
    exercises: [
      {
        tr: "L'imperativo di rufen.",
        why: "Al <i>du</i>: <i>ruf</i>; al <i>ihr</i>: <i>ruft</i>; al <i>Sie</i>: <i>rufen Sie</i>; e la forma <i>rufen wir</i>, «chiamiamo». L'imperativo non ha la prima persona singolare."
      },
      {
        q: "Al collega, con il du: «Va' a chiamare aiuto, presto!»",
        opts: ["Holst bitte schnell Hilfe!", "Hol bitte schnell Hilfe!", "Holen bitte schnell Hilfe!"],
        why: "All'imperativo con il <i>du</i> si usa la radice: <b>Hol</b>. <i>Holst</i> è il presente, e <i>Holen</i> senza <i>Sie</i> non è un imperativo di cortesia."
      },
      {
        q: "Completa, alla moglie del paziente: «___ Sie bitte bei Ihrem Mann!»",
        hint: "bleiben, imperativo con il Sie",
        why: "<b>Bleiben</b>: l'imperativo di cortesia è l'infinito seguito da <i>Sie</i>."
      },
      {
        q: "Metti in ordine le parole.",
        tr: "Chiami il 112, per favore!",
        why: "<i>Rufen Sie bitte die 112 an!</i> Il verbo apre la frase, poi <i>Sie</i>, e il prefisso separabile <i>an</i> va in fondo. Il numero si legge <i>eins-eins-zwei</i>."
      },
      {
        q: "Completa, al collega con il du.",
        tr: "Fai partire l'allarme, presto!",
        why: "<i>Lös bitte schnell den Alarm aus!</i> <i>Auslösen</i> è separabile: la radice <i>lös</i> (o <i>löse</i>) in testa, <i>aus</i> in fondo."
      },
      {
        q: "Abbina ogni parola al suo significato.",
        pairs: ["soccorso sanitario e vigili del fuoco", "polizia", "la rianimazione cardiopolmonare (Wiederbelebung)", "la centrale operativa"]
      },
      {
        q: "Quali imperativi sono corretti?",
        opts: [
          "Rufen Sie bitte den Arzt!",
          "Ruf bitte den Arzt!",
          "Rufe Sie bitte den Arzt!",
          "Gib mir bitte das Telefon!",
          "Gibst mir bitte das Telefon!"
        ],
        why: "Con il <i>Sie</i> serve l'infinito: <i>Rufen Sie</i>, non <i>Rufe Sie</i>. Con il <i>du</i> si usa la radice senza <i>-st</i>: <i>Ruf</i>, <i>Gib</i>."
      },
      {
        q: "Traduci quello che dice la centrale: «Rimanga al telefono!»",
        why: "<i>Bleiben Sie am Telefon!</i> Infinito più <i>Sie</i>; <i>am</i> è <i>an dem</i>. Va bene anche con <i>bitte</i>."
      },
      {
        q: "Chiami il 112 dalla casa di un paziente.",
        setting: "Sei l'infermiera del servizio domiciliare; risponde la centrale operativa.",
        lines: [
          { tr: "Emergenza, vigili del fuoco e soccorso sanitario. Dov'è l'emergenza?" },
          { tr: "Rispondi con l'indirizzo: Lindenstraße 12, secondo piano.", answerTr: "In Lindenstraße 12, al secondo piano." },
          { tr: "Che cosa è successo?" },
          { tr: "Rispondi che un paziente all'improvviso non risponde più.", answerTr: "Un paziente all'improvviso non risponde più." },
          { tr: "Rimanga al telefono, per favore." },
          { tr: "Rispondi che resti al telefono.", answerTr: "Sì, resto al telefono." }
        ]
      },
      {
        tr: "Signora Wolf, adesso chiamo il 112. Resti con Suo marito, per favore, e poi apra la porta di casa.",
        why: "Il 112 si legge <i>eins-eins-zwei</i>, cifra per cifra; in <i>Haustür</i> la <b>au</b> è [aʊ] e la <b>ü</b> è lunga; in <i>öffnen</i> la <b>ö</b> è breve e arrotondata."
      },
      {
        tr: "Vai a chiamare aiuto, presto!",
        why: "In <i>Hol</i> la <b>o</b> è lunga; in <i>schnell</i> la <b>sch</b> è [ʃ] e la <b>e</b> è breve; in <i>Hilfe</i> la <b>h</b> iniziale si sente, come un soffio."
      }
    ]
  },
  "lesson:pfl-u04-l4": {
    theme: "La caduta",
    title: "La caduta",
    objectives: [
      "parlare con un paziente caduto e chiamare aiuto senza lasciarlo solo",
      "riferire una caduta al medico con Perfekt e Präteritum",
      "distinguere Fachsprache e Laiensprache per frattura ed ematoma",
      "documentare la caduta nel verbale di caduta, separando ciò che si è visto da ciò che riferisce il paziente"
    ],
    theory: [
      {
        h: "Dopo una caduta",
        p: "Una caduta si affronta sempre allo stesso modo: si parla al paziente, si chiama aiuto, si riferisce e si documenta. <em>Was ist passiert? Bleiben Sie bitte liegen, ich hole Hilfe.</em> Poi si chiede quello che il paziente sa dire (<em>Haben Sie sich den Kopf angeschlagen? Wo tut es weh?</em>) e si avvisa il medico. Ogni caduta, anche senza conseguenze visibili, va annotata nel <em>Sturzprotokoll</em>, secondo il protocollo della struttura."
      },
      {
        h: "Perfekt e Präteritum nel racconto",
        p: "Quando si racconta a voce si usa soprattutto il <strong>Perfekt</strong>: <em>Frau Keller ist im Bad gestürzt. Ich habe sie auf dem Boden gefunden.</em> Con <em>sein</em>, <em>haben</em> e i modali si usa di solito il <strong>Präteritum</strong>, anche nel parlato: <em>Sie war wach und hatte Schmerzen. Ich wollte allein zur Toilette gehen.</em> L'ausiliare: i verbi intransitivi di movimento e di cambiamento di stato di solito prendono <em>sein</em> (<em>ist gestürzt, ist ausgerutscht, ist gefallen</em>), gli altri <em>haben</em>; è una tendenza, l'ausiliare si impara con il verbo. I verbi in <em>-ieren</em> non prendono <em>ge-</em>: <em>informiert</em>, <em>dokumentiert</em>; i separabili lo mettono dopo il prefisso: <em>ausgerutscht</em>."
      },
      {
        contrast: "<em>Fraktur</em> ed <em>Hämatom</em> per chi parla italiano non richiedono studio: frattura, ematoma. Al paziente però si dice <em>der Knochenbruch</em> (o semplicemente <em>Ist das Bein gebrochen?</em>) e <em>der Bluterguss</em>, che corrisponde al nostro «livido». Sui tempi: l'imperfetto italiano («era sveglia, aveva dolore») descrive uno stato; il Präteritum tedesco non porta questa sfumatura, è solo un tempo del passato, e <em>Sie war wach</em> si usa al posto di <em>Sie ist wach gewesen</em> perché è più corto, non perché descrive. Il passato prossimo italiano e il Perfekt si somigliano di più: «è caduta» → <em>sie ist gestürzt</em>."
      },
      {
        trap: "«Cadere» ha tre traduzioni. <em>stürzen</em> è la parola del reparto e della documentazione (<em>der Sturz</em>); <em>hinfallen</em> è quella di tutti i giorni (<em>Ich bin hingefallen</em>); <em>fallen</em> da solo vale per un oggetto (<em>Das Glas ist gefallen</em>) e anche per una persona (<em>Sie ist gefallen</em>), ma in cartella si scrive <em>gestürzt</em>. Attenzione a <em>gefallen</em>: è anche il participio di <em>gefallen</em>, «piacere», con <em>haben</em> (<em>Es hat mir gefallen</em>). <em>Sie ist gefallen</em> e <em>Es hat ihr gefallen</em> sono due frasi diverse. Infine <em>Platzwunde</em> non viene da «piazza»: è la ferita che si apre per un colpo, da <em>platzen</em>, scoppiare."
      },
      {
        tip: "Nel verbale scrivi separato quello che hai visto e quello che ti ha detto il paziente: <em>Patientin um 3:00 Uhr auf dem Boden im Bad aufgefunden</em> è un'osservazione; <em>laut Patientin ausgerutscht</em> è il suo racconto. Chi legge dopo deve poter distinguere le due cose."
      }
    ],
    grammar: {
      title: "Raccontare una caduta",
      note: "Nel racconto orale soprattutto <b>Perfekt</b>; con <b>sein</b>, <b>haben</b> e i modali di solito <b>Präteritum</b>. I verbi in <b>-ieren</b> non prendono <b>ge-</b>.",
      table: {
        head: ["verbo", "esempio", "nota"],
        rows: [
          ["stürzen", "Sie ist im Bad gestürzt.", "Perfekt con sein"],
          ["finden", "Ich habe sie auf dem Boden gefunden.", "Perfekt con haben, participio forte"],
          ["ausrutschen", "Ich bin ausgerutscht.", "separabile: ge- dopo aus"],
          ["informieren", "Wir haben die Ärztin informiert.", "-ieren: niente ge-"],
          ["sein, haben", "Sie war wach und hatte Schmerzen.", "Präteritum anche a voce"],
          ["wollen", "Ich wollte allein zur Toilette gehen.", "modale al Präteritum"]
        ]
      },
      examples: [
        { tr: "La signora Keller è caduta stanotte in bagno.", note: "stürzen: Perfekt con sein" },
        { tr: "L'ho trovata alle tre per terra.", note: "finden: Perfekt con haben" },
        { tr: "Era sveglia e aveva dolore all'anca sinistra.", note: "sein e haben al Präteritum" },
        { tr: "Volevo andare in bagno da sola.", note: "modale al Präteritum" },
        { tr: "Sono scivolata sul pavimento bagnato.", note: "ausrutschen: separabile, con sein" },
        { tr: "Abbiamo informato subito la dottoressa.", note: "informieren: niente ge-" }
      ]
    },
    vocab: [
      "il verbale di caduta",
      "cadere (parola del reparto)",
      "scivolare",
      "cadere (parola di tutti i giorni)",
      "la frattura (termine tecnico)",
      "la frattura, l'osso rotto (parola per il paziente)",
      "l'ematoma (termine tecnico)",
      "il livido (parola per il paziente)",
      "l'anca",
      "la ferita lacero-contusa",
      "il rischio di caduta",
      "riferire, segnalare"
    ],
    dialogue: [
      "Signora Keller! Che cosa è successo? Rimanga sdraiata, per favore, vado a chiamare aiuto.",
      "Volevo andare in bagno da sola. Poi sono scivolata.",
      "Ha battuto la testa?",
      "No, ma mi fa male l'anca.",
      "Dottor Weber, la signora Keller è caduta alle tre in bagno. L'ho trovata per terra.",
      "Era sveglia e rispondeva?",
      "Sì, era sveglia e orientata. Ha dolore all'anca sinistra e un piccolo ematoma al gomito.",
      "Bene, arrivo. Documenti la caduta nel verbale di caduta, per favore."
    ],
    culture: {
      title: "Uno sguardo tedesco: prevenire e documentare le cadute",
      text: "<p>Anche per le cadute esiste in Germania un <i>Expertenstandard</i> del DNQP, dedicato alla prevenzione (<i>Sturzprophylaxe</i>): chiede di riconoscere chi è a rischio, di adattare l'ambiente e di analizzare ogni caduta avvenuta. Per questo molte strutture usano un modulo apposito, chiamato <i>Sturzprotokoll</i> o <i>Sturzereignisprotokoll</i>: ora, luogo, che cosa si è trovato, che cosa ha detto il paziente, chi è stato informato.</p><p>Il modulo non serve a cercare un colpevole: serve a capire perché la persona è caduta e a evitare la caduta successiva. Il modello esatto lo decide la struttura.</p>"
    },
    exercises: [
      {
        tr: "Il Perfekt di fallen, tutte le persone.",
        why: "<i>Bin gefallen, bist gefallen, ist gefallen, sind gefallen, seid gefallen, sind gefallen</i>: verbo di movimento, ausiliare <i>sein</i>. Per una persona in reparto si dice più spesso <i>gestürzt</i> o <i>hingefallen</i>."
      },
      {
        q: "Al paziente, con parole comuni: «Ha un livido sul braccio.»",
        opts: [
          "Sie haben ein Hämatom am Arm.",
          "Sie haben einen Bluterguss am Arm.",
          "Sie haben einen Hämatom am Arm."
        ],
        why: "Con il paziente si usa la Laiensprache: <b>einen Bluterguss</b>, maschile. La prima frase è corretta ma è da documentazione; nella terza l'articolo è sbagliato, perché <i>Hämatom</i> è neutro."
      },
      {
        q: "Completa: «Ich bin auf dem nassen Boden ___.»",
        hint: "participio di ausrutschen",
        why: "<b>ausgerutscht</b>: verbo separabile, il <i>ge-</i> va dopo il prefisso <i>aus</i>. Ausiliare <i>sein</i>, come <i>stürzen</i>."
      },
      {
        q: "Abbina ogni parola al suo significato.",
        pairs: ["la frattura", "l'ematoma", "la ferita lacero-contusa", "il rischio di caduta"]
      },
      {
        q: "Completa la frase al Präteritum.",
        tr: "Era sveglia e aveva dolore all'anca.",
        why: "<i>Sie war wach und hatte Schmerzen in der Hüfte</i>: con <i>sein</i> e <i>haben</i> il Präteritum è la forma normale anche a voce."
      },
      {
        q: "Metti in ordine le parole.",
        tr: "L'ho trovata alle tre per terra.",
        why: "<i>Ich habe sie um drei Uhr auf dem Boden gefunden.</i> <i>Habe</i> in seconda posizione, il participio <i>gefunden</i> in fondo; prima il tempo (<i>um drei Uhr</i>), poi il luogo."
      },
      {
        q: "Quali frasi al Perfekt sono corrette?",
        opts: [
          "Sie ist im Bad gestürzt.",
          "Sie hat im Bad gestürzt.",
          "Ich habe die Ärztin informiert.",
          "Ich habe die Ärztin geinformiert.",
          "Er ist auf dem Boden ausgerutscht."
        ],
        why: "<i>stürzen</i> e <i>ausrutschen</i> qui vogliono <i>sein</i>. <i>informieren</i> finisce in <i>-ieren</i> e non prende <i>ge-</i>: <i>informiert</i>."
      },
      {
        q: "Scegli l'articolo determinativo giusto per ogni nome.",
        items: ["verbale di caduta", "frattura", "osso rotto", "ematoma", "livido", "anca"]
      },
      {
        q: "Traduci, alla paziente caduta: «Ha battuto la testa?»",
        why: "<i>Haben Sie sich den Kopf angeschlagen?</i> Il pronome riflessivo <i>sich</i> è al dativo, la testa è l'oggetto. Va bene anche <i>gestoßen</i>."
      },
      {
        tr: "La signora Keller è caduta alle tre in bagno. Era sveglia e aveva dolore all'anca sinistra.",
        why: "In <i>gestürzt</i> la <b>ü</b> è breve e il gruppo <b>rzt</b> si pronuncia tutto; in <i>Hüfte</i> la <b>ü</b> è breve; in <i>linken</i> la <b>n</b> davanti a <b>k</b> è [ŋ]."
      },
      {
        tr: "Ha battuto la testa?",
        why: "In <i>Kopf</i> si sentono sia la <b>p</b> sia la <b>f</b>; in <i>angeschlagen</i> la <b>sch</b> è [ʃ] e la <b>a</b> di <i>schla</i> è lunga."
      }
    ]
  },
  "lesson:pfl-u04-test": {
    theme: "Verifica",
    title: "Test: Dolore ed emergenza",
    objectives: [
      "verificare le desinenze dell'aggettivo, le subordinate temporali, il Perfekt nel racconto e le coppie Fachsprache / Laiensprache del dolore e dell'emergenza"
    ],
    theory: [
      {
        p: "Undici domande sull'intera unità. Si supera con il 70%. I contenuti clinici sono esempi didattici: in reparto valgono sempre il protocollo della struttura e le indicazioni del medico."
      }
    ],
    exercises: [
      {
        q: "Completa: «Es ist ein ___ Schmerz.»",
        opts: ["stechende", "stechender", "stechenden"],
        why: "Nominativo maschile dopo <i>ein</i>: <b>stechender</b>. L'articolo <i>ein</i> non mostra il genere, quindi lo mostra l'aggettivo con <b>-er</b>."
      },
      {
        q: "Completa: «Ich bleibe bei Ihnen, ___ die Ärztin kommt.»",
        hint: "«finché»",
        why: "<b>bis</b>: «finché». Il verbo <i>kommt</i> va in fondo alla subordinata."
      },
      {
        q: "Completa: «Frau Keller ist heute Nacht im Bad ___.»",
        hint: "participio di stürzen",
        why: "<b>gestürzt</b>, con l'ausiliare <i>ist</i>: <i>stürzen</i> è un verbo di movimento."
      },
      {
        tr: "Il Perfekt di anrufen, tutte le persone.",
        why: "<i>Habe angerufen, hast angerufen, hat angerufen, haben angerufen, habt angerufen, haben angerufen</i>: separabile, il <i>ge-</i> va tra <i>an</i> e <i>rufen</i>; ausiliare <i>haben</i>."
      },
      {
        q: "Abbina ogni termine tecnico alla parola che usa il paziente.",
        pairs: ["die Ohnmacht", "der Schlaganfall", "der Knochenbruch", "das Schmerzmittel"]
      },
      {
        q: "Quali frasi sono corrette?",
        opts: [
          "Als ich ins Zimmer kam, lag sie auf dem Boden.",
          "Als ich ins Zimmer kam, sie lag auf dem Boden.",
          "Haben Sie starke Schmerzen?",
          "Ich habe die Ärztin sofort informiert.",
          "Wenn ich gestern um acht Uhr ins Zimmer kam, war sie wach."
        ],
        why: "Dopo la subordinata la principale comincia con il verbo: <i>lag sie</i>. Per un fatto unico nel passato si usa <i>als</i>, non <i>wenn</i>. <i>informiert</i> non prende <i>ge-</i>."
      },
      {
        q: "Completa la frase.",
        tr: "Quando sono entrata in camera, la signora Keller era per terra.",
        why: "<i>Als ich ins Zimmer kam, lag Frau Keller auf dem Boden.</i> <i>Als</i> per un fatto unico nel passato; <i>lag</i>, Präteritum di <i>liegen</i>, apre la principale."
      },
      {
        q: "Metti in ordine le parole.",
        tr: "Resto con lui finché arriva l'équipe.",
        why: "<i>Ich bleibe bei ihm, bis das Team kommt.</i> Dopo <i>bis</i> il verbo <i>kommt</i> va in fondo."
      },
      {
        q: "Scegli l'articolo determinativo giusto per ogni nome.",
        items: ["emergenza", "scala del dolore", "verbale di caduta", "ictus", "centrale operativa", "ematoma"]
      },
      {
        tr: "Quando sono entrata in camera, la signora Keller non rispondeva. Ho fatto partire subito l'allarme e sono rimasta con lei finché è arrivata l'équipe.",
        why: "In <i>ausgelöst</i> la <b>ö</b> è lunga; in <i>geblieben</i> la <b>ie</b> è una <b>i</b> lunga; in <i>Team</i> la <b>ea</b> si legge [iː], come in inglese."
      },
      {
        tr: "Documento la caduta nel verbale di caduta.",
        why: "In <i>dokumentiere</i> l'accento cade su <b>tie</b>, con la <b>ie</b> lunga; in <i>Sturzprotokoll</i> l'accento principale è su <b>Sturz</b>, e in <i>Protokoll</i> cade sull'ultima sillaba."
      }
    ]
  }
});
