/* ============================================================
   Learner-language text (it) for data/core/pfl-05.js, unit pfl-u05.
   Keys point at ids in the neutral layer; arrays merge by index,
   so their length has to match core.
   Checked by scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("it", {
  "unit:pfl-u05": {
    title: "Farmaci e foglietto illustrativo",
    grammarNote: "composti e vie di somministrazione · vor, nach, mit, seit, zu con il dativo · le frasi con wenn e falls · il passivo con werden e con un modale"
  },
  "lesson:pfl-u05-l1": {
    theme: "Forme e vie",
    title: "Pastiglie, gocce, iniezioni",
    objectives: [
      "nominare le forme farmaceutiche più comuni con il loro articolo",
      "dire la via di somministrazione in Fachsprache e in parole per il paziente",
      "costruire composti come Schmerztablette e Augentropfen",
      "spiegare al paziente che cosa riceve, senza entrare nella terapia"
    ],
    theory: [
      {
        h: "Le forme del farmaco",
        p: "In reparto le forme che nomini ogni giorno sono poche: <em>die Tablette</em> (pastiglia, compressa), <em>die Kapsel</em>, <em>der Tropfen</em> (quasi sempre al plurale, <em>die Tropfen</em>), <em>der Saft</em> (sciroppo), <em>die Salbe</em>, <em>das Zäpfchen</em> (supposta), <em>die Spritze</em> e <em>die Infusion</em>. Il tedesco ne fa composti a volontà, e l'<strong>articolo lo decide l'ultimo elemento</strong>: <em>der Schmerz + die Tablette</em> = <em>die Schmerztablette</em>; <em>das Auge + die Tropfen</em> = <em>die Augentropfen</em>; <em>der Husten + der Saft</em> = <em>der Hustensaft</em>."
      },
      {
        h: "Le vie di somministrazione",
        p: "In documentazione e con il medico si dice <em>oral</em>, <em>subkutan</em> (abbreviato <em>s.c.</em>), <em>intravenös</em> (<em>i.v.</em>). Al paziente si dice dove va il farmaco: <em>über den Mund</em>, <em>unter die Haut</em>, <em>in die Vene</em>. Le preposizioni sono all'accusativo perché indicano una direzione: il farmaco va <em>unter die Haut</em>, non sta <em>unter der Haut</em>. Il sostantivo tecnico è <em>die Applikation</em>; nel parlato di reparto si dice più spesso <em>die Gabe</em>: <em>Die nächste Gabe ist um acht Uhr.</em>"
      },
      {
        contrast: "In italiano «per via orale», «sottocute» ed «endovena» li capisce quasi ogni paziente, e anche al letto si dice «gliela faccio in vena». In tedesco <em>oral</em>, <em>subkutan</em> e <em>intravenös</em> sono parole da cartella: per molti pazienti sono opache. Al paziente traduci sempre nella formula con la preposizione: <em>über den Mund</em>, <em>unter die Haut</em>, <em>in die Vene</em>. Lo stesso vale per <em>die Injektion</em>: è il termine tecnico, la parola del paziente è <em>die Spritze</em>. Con il medico e in consegna resta normale il registro tecnico: <em>Die Applikation ist subkutan.</em>"
      },
      {
        trap: "<em>Die Tablette</em> non è una «tavoletta», ed è femminile come la pastiglia, mentre <em>der Tropfen</em> è maschile e la goccia no. <em>Die Spritze</em> vuol dire sia la siringa sia l'iniezione. <em>Das Zäpfchen</em> è la supposta, ma anche l'ugola: il contesto decide. La flebo è <em>die Infusion</em>; molti pazienti però dicono <em>der Tropf</em> (<em>Ich hänge am Tropf</em>), che non è la goccia. Nei composti attenzione alla lettera di giunzione: <em>Augentropfen</em>, non «Augetropfen»."
      },
      {
        tip: "Quando porti un farmaco, di' sempre come si prende in una frase semplice: <em>Die schlucken Sie bitte mit etwas Wasser.</em> Se il paziente chiede qualcosa che non sai (si può masticare? si può sciogliere?), non improvvisare: <em>Das weiß ich nicht genau. Ich frage in der Apotheke nach.</em> Tutti i nomi di farmaco di questa unità, come <em>Dolorex</em> e <em>Cardiomin</em>, sono inventati."
      }
    ],
    grammar: {
      title: "Forme, composti e vie",
      note: "Nei composti l'articolo è quello dell'<b>ultimo elemento</b>. Per la via: <b>Fachsprache</b> in documentazione, formula con la <b>preposizione</b> per il paziente.",
      table: {
        head: ["Fachsprache", "per il paziente", "italiano"],
        rows: [
          ["oral", "über den Mund", "per via orale, per bocca"],
          ["subkutan (s.c.)", "unter die Haut", "sottocute"],
          ["intravenös (i.v.)", "in die Vene", "endovena, in vena"],
          ["die Injektion", "die Spritze", "l'iniezione, la puntura"],
          ["die Applikation", "die Gabe", "la somministrazione"]
        ]
      },
      examples: [
        { tr: "Questa è una pastiglia contro il dolore.", note: "Schmerz + Tablette: die, per via di Tablette" },
        { tr: "Dolorex esiste in pastiglie e in gocce.", note: "Dolorex è un nome inventato; es gibt + accusativo" },
        { tr: "L'iniezione la riceve sottocute.", note: "unter die Haut: direzione, quindi accusativo" },
        { tr: "La flebo va in vena.", note: "in die Vene: la formula per il paziente" },
        { tr: "La somministrazione è orale, cioè per bocca.", note: "prima il termine tecnico, poi la spiegazione" },
        { tr: "Le gocce per gli occhi sono in frigorifero.", note: "Auge + n + Tropfen: lettera di giunzione" }
      ]
    },
    vocab: [
      "la pastiglia, la compressa",
      "la capsula",
      "la goccia (di solito al plurale: die Tropfen)",
      "la siringa, l'iniezione",
      "l'infusione, la flebo",
      "la pomata",
      "la supposta",
      "orale, per bocca (termine tecnico)",
      "sottocutaneo (termine tecnico)",
      "endovenoso (termine tecnico)",
      "la somministrazione (termine tecnico)",
      "la somministrazione, la dose data (parola di reparto)"
    ],
    dialogue: [
      "Buongiorno, signora Kühn. Le porto i Suoi farmaci.",
      "Ma che cos'è tutta questa roba?",
      "Questo è Cardiomin, una pastiglia. La mandi giù con un po' d'acqua, per favore.",
      "E la bottiglietta?",
      "Sono gocce per gli occhi. Vanno negli occhi, non in bocca.",
      "Oggi mi fanno anche una puntura?",
      "Sì, stasera riceve un'iniezione sottocute.",
      "Fa male?",
      "Solo una piccola puntura."
    ],
    exercises: [
      {
        q: "Il medico ha scritto «subkutan». Come lo dici al paziente?",
        opts: ["in die Vene", "unter die Haut", "über den Mund"],
        why: "<i>Subkutan</i> è «sotto la cute»: al paziente si dice <b>unter die Haut</b>, con l'accusativo perché il farmaco va lì."
      },
      {
        q: "Abbina ogni termine tecnico alla formula per il paziente.",
        pairs: ["über den Mund", "unter die Haut", "in die Vene", "die Spritze"]
      },
      {
        q: "Scegli l'articolo determinativo giusto per ogni nome.",
        items: ["pastiglia", "capsula", "goccia", "iniezione, siringa", "supposta", "pomata"]
      },
      {
        q: "Completa con una parola composta: «Eine Tablette gegen Schmerzen ist eine ___.»",
        hint: "Schmerz + Tablette",
        why: "<b>Schmerztablette</b>, femminile come <i>Tablette</i>, l'ultimo elemento del composto."
      },
      {
        q: "Quali forme si prendono per bocca?",
        opts: ["die Tablette", "die Kapsel", "das Zäpfchen", "die Infusion", "der Saft"],
        why: "Pastiglia, capsula e sciroppo vanno <i>über den Mund</i>. La supposta no, e l'infusione va <i>in die Vene</i>."
      },
      {
        q: "Completa: prima il termine tecnico, poi la parola per il paziente.",
        tr: "L'infusione è endovenosa, cioè va in vena.",
        why: "<i>Die Infusion läuft intravenös, also in die Vene</i>: <i>also</i> introduce la spiegazione per il paziente."
      },
      {
        q: "Metti in ordine le parole.",
        tr: "L'iniezione la riceve sottocute.",
        why: "<i>Die Spritze bekommen Sie unter die Haut.</i> L'oggetto in testa, il verbo <i>bekommen</i> in seconda posizione, poi il soggetto <i>Sie</i>."
      },
      {
        q: "Traduci: «Le gocce sono per gli occhi.»",
        why: "<i>Die Tropfen sind für die Augen.</i> <i>Für</i> vuole l'accusativo, e <i>die Augen</i> al plurale resta uguale."
      },
      {
        q: "Una paziente fa domande sui farmaci.",
        setting: "Porti i farmaci del mattino alla signora Kühn.",
        lines: [
          { tr: "Signora Marin, come mi fanno la puntura?" },
          { tr: "Rispondi che la riceve sottocute.", answerTr: "L'iniezione la riceve sottocute." },
          { tr: "E che cosa c'è nella bottiglietta?" },
          { tr: "Rispondi che sono gocce per gli occhi.", answerTr: "Sono gocce per gli occhi." },
          { tr: "Posso masticare la pastiglia?" },
          { tr: "Rispondi che non lo sai con certezza e che chiedi in farmacia.", answerTr: "Non lo so con certezza. Chiedo in farmacia." }
        ]
      },
      {
        tr: "Questo è Cardiomin, una pastiglia. L'iniezione la riceve stasera sottocute.",
        why: "In <i>Spritze</i> la <b>sp</b> iniziale si legge [ʃp] e la <b>tz</b> è [ts]; in <i>Haut</i> la <b>h</b> si aspira e la <b>au</b> è [aʊ]; in <i>Abend</i> la <b>d</b> finale si legge [t]."
      },
      {
        tr: "L'iniezione la riceve sottocute.",
        why: "In <i>bekommen</i> l'accento cade su <b>kom</b>; in <i>unter</i> la <b>r</b> finale è appena accennata; in <i>Sie</i> la <b>s</b> iniziale è sonora [z]."
      }
    ]
  },
  "lesson:pfl-u05-l2": {
    theme: "Orari",
    title: "Prima o dopo i pasti?",
    objectives: [
      "spiegare quando si prende un farmaco: mattina, sera, prima di dormire, al bisogno",
      "usare vor, nach, mit, seit, zu e bei con il dativo",
      "dire al paziente che deve restare a digiuno",
      "rispondere a un paziente che ha dimenticato una dose, rimandando al medico"
    ],
    theory: [
      {
        h: "Quando si prende",
        p: "Gli orari di assunzione si dicono con avverbi e con preposizioni. Avverbi: <em>morgens</em>, <em>mittags</em>, <em>abends</em>, <em>täglich</em>, <em>einmal täglich</em>, <em>dreimal täglich</em>. Espressioni fisse: <em>zur Nacht</em> (prima di dormire), <em>bei Bedarf</em> (al bisogno), <em>nüchtern</em> (a digiuno). Gli orari scritti nel piano dei farmaci li decide il medico: tu li leggi e li riferisci, non li scegli."
      },
      {
        h: "Le preposizioni con il dativo",
        p: "<em>Vor</em>, <em>nach</em>, <em>mit</em>, <em>seit</em>, <em>zu</em> e <em>bei</em> vogliono il <strong>dativo</strong> in tutte queste espressioni: <em>vor dem Frühstück</em>, <em>nach dem Essen</em>, <em>mit einem Glas Wasser</em>, <em>seit einer Woche</em>, <em>zu den Mahlzeiten</em>, <em>bei Bedarf</em>. Il dativo si vede sull'articolo: <em>das Essen</em> diventa <em>dem Essen</em>, <em>die Woche</em> diventa <em>einer Woche</em>, <em>die Mahlzeiten</em> diventa <em>den Mahlzeiten</em>. Con <em>seit</em> il verbo resta al presente: <em>Seit einer Woche nehme ich Dolorex.</em>"
      },
      {
        contrast: "In italiano «prima di colazione», «dopo mangiato», «con un bicchiere d'acqua» non cambiano l'articolo. In tedesco ogni preposizione di questa lezione fa scattare il dativo, e l'errore <em>vor das Frühstück</em> si sente subito. Anche il paziente italiano dice «prendo l'anticoagulante» o «la pastiglia per il sangue»; il paziente tedesco dice quasi sempre <em>der Blutverdünner</em>, mentre <em>das Antikoagulans</em> resta parola da medico e da cartella."
      },
      {
        trap: "<em>Nüchtern</em> in reparto vuol dire «a digiuno», ma nella lingua di tutti i giorni vuol dire anche «sobrio, non ubriaco» e perfino «asciutto, senza fronzoli». Se dici al paziente <em>Bleiben Sie bitte nüchtern</em>, aggiungi cosa significa per quell'esame: <em>Bitte nichts essen.</em> e, secondo l'indicazione, <em>Wasser dürfen Sie trinken</em> oppure <em>Bitte auch nichts trinken.</em> Non confondere <em>nach dem Essen</em> (preposizione + nome) con <em>nachdem</em>, che è una congiunzione e manda il verbo in fondo. <em>Zur Nacht</em> è «la sera prima di dormire», <em>in der Nacht</em> è «durante la notte»: sul piano dei farmaci non sono la stessa cosa."
      },
      {
        tip: "Se un paziente dice di aver dimenticato una pastiglia, non dire mai tu che cosa fare: <em>Dann sagen Sie es mir bitte. Ich frage den Arzt.</em> Recuperare o saltare una dose è una decisione del medico, e la risposta giusta cambia da farmaco a farmaco."
      }
    ],
    grammar: {
      title: "Orari e preposizioni con il dativo",
      note: "<b>vor</b> (di tempo)<b>, nach, mit, seit, zu, bei</b> + <b>dativo</b>. Gli avverbi di tempo (<b>morgens, abends, täglich</b>) non hanno articolo.",
      table: {
        head: ["espressione", "dativo di", "italiano"],
        rows: [
          ["vor dem Frühstück", "das Frühstück", "prima di colazione"],
          ["nach dem Essen", "das Essen", "dopo mangiato"],
          ["mit einem Glas Wasser", "ein Glas", "con un bicchiere d'acqua"],
          ["seit einer Woche", "eine Woche", "da una settimana"],
          ["zu den Mahlzeiten", "die Mahlzeiten", "ai pasti"],
          ["bei Bedarf", "der Bedarf", "al bisogno"]
        ]
      },
      examples: [
        { tr: "Prenda la pastiglia prima di colazione, per favore.", note: "vor dem: dativo di das Frühstück" },
        { tr: "L'antibiotico lo prende sempre dopo mangiato.", note: "nach dem Essen" },
        { tr: "Per il prelievo domani deve restare a digiuno.", note: "nüchtern bleiben: niente cibo; cosa si può bere lo dice l'indicazione per quell'esame" },
        { tr: "L'anticoagulante lo riceve la sera.", note: "Blutverdünner: la parola del paziente" },
        { tr: "Al bisogno riceve una pastiglia contro il dolore.", note: "bei Bedarf, in cartella spesso b.B." },
        { tr: "Da una settimana prendo Dolorex.", note: "seit + dativo, verbo al presente" }
      ]
    },
    vocab: [
      "l'assunzione (di un farmaco)",
      "il pasto",
      "a digiuno (anche: sobrio)",
      "giornaliero, al giorno (einmal täglich: una volta al giorno)",
      "di mattina, ogni mattina",
      "di sera, ogni sera",
      "al bisogno",
      "l'antibiotico",
      "l'anticoagulante (termine tecnico)",
      "l'anticoagulante (parola per il paziente)",
      "deglutire, mandare giù",
      "dimenticare"
    ],
    dialogue: [
      "Signora Marin, quando devo prendere questa pastiglia?",
      "Cardiomin lo prende la mattina, prima di colazione.",
      "Con il caffè?",
      "Con un bicchiere d'acqua, per favore. È scritto così anche nel Suo piano.",
      "E l'antibiotico?",
      "Quello lo riceve tre volte al giorno, sempre dopo mangiato.",
      "E se dimentico una pastiglia?",
      "Allora me lo dica, per favore. Chiedo al medico che cosa deve fare.",
      "Bene. E domattina?",
      "Domattina resti a digiuno, per favore, per via del prelievo."
    ],
    exercises: [
      {
        q: "Il medico dice che domani mattina, prima del prelievo, il paziente deve essere «nüchtern». Che cosa significa?",
        opts: ["a digiuno", "a letto, senza alzarsi", "senza farmaci"],
        why: "In reparto <b>nüchtern</b> significa «a digiuno»: niente cibo; se si può bere acqua dipende dall'esame. Nella lingua di tutti i giorni vuol dire anche «sobrio»."
      },
      {
        tr: "Il presente di einnehmen, tutte le persone.",
        why: "<i>Nehme ein, nimmst ein, nimmt ein, nehmen ein, nehmt ein, nehmen ein</i>: verbo separabile, il prefisso <i>ein</i> va in fondo, e alla seconda e terza persona singolare la <b>e</b> diventa <b>i</b>."
      },
      {
        q: "Completa: «Nehmen Sie die Tablette bitte nach ___ Essen ein.»",
        hint: "nach + dativo, das Essen",
        why: "<b>dem</b>: <i>nach</i> vuole il dativo, e il dativo di <i>das Essen</i> è <i>dem Essen</i>."
      },
      {
        q: "Completa con la preposizione giusta.",
        tr: "Le gocce le prende prima di colazione, l'antibiotico dopo mangiato.",
        why: "<i>Vor dem Frühstück</i> e <i>nach dem Essen</i>: due preposizioni diverse, lo stesso dativo."
      },
      {
        q: "Abbina ogni espressione al suo significato.",
        pairs: ["di mattina", "di sera", "la sera, prima di dormire", "al bisogno"]
      },
      {
        q: "Quali espressioni sono corrette?",
        opts: ["nach dem Essen", "vor das Frühstück", "mit einem Glas Wasser", "seit eine Woche", "zu den Mahlzeiten"],
        why: "<i>Vor</i> e <i>seit</i> qui vogliono il dativo: <i>vor dem Frühstück</i>, <i>seit einer Woche</i>. Sono quindi sbagliate le due opzioni con <i>vor</i> e <i>seit</i>; corrette <i>nach dem Essen</i>, <i>mit einem Glas Wasser</i> e <i>zu den Mahlzeiten</i>."
      },
      {
        q: "Metti in ordine le parole.",
        tr: "L'antibiotico lo prende sempre dopo mangiato.",
        why: "<i>Das Antibiotikum nehmen Sie immer nach dem Essen.</i> L'oggetto in testa, il verbo <i>nehmen</i> in seconda posizione, il soggetto <i>Sie</i> subito dopo."
      },
      {
        q: "Traduci: «Prenda la pastiglia la mattina prima di colazione.»",
        why: "<i>Nehmen Sie die Tablette morgens vor dem Frühstück (ein).</i> L'imperativo di cortesia comincia con il verbo; <i>morgens</i> e <i>vor dem Frühstück</i> traducono i due riferimenti di tempo."
      },
      {
        q: "Un paziente chiede quando prendere un farmaco.",
        setting: "Il signor Brandt ha in mano una pastiglia nuova.",
        lines: [
          { tr: "Quando devo prendere la pastiglia?" },
          { tr: "Rispondi: la mattina, prima di colazione.", answerTr: "La mattina, prima di colazione." },
          { tr: "Con il caffè?" },
          { tr: "Rispondi: con un bicchiere d'acqua, per favore.", answerTr: "Con un bicchiere d'acqua, per favore." },
          { tr: "E se dimentico la pastiglia?" },
          { tr: "Rispondi che deve dirtelo e che chiedi al medico.", answerTr: "Allora me lo dica, per favore. Chiedo al medico." }
        ]
      },
      {
        tr: "Cardiomin lo prende la mattina prima di colazione, l'antibiotico sempre dopo mangiato.",
        why: "In <i>Frühstück</i> la <b>ü</b> è lunga in <i>früh</i> e breve in <i>Stück</i>; in <i>morgens</i> la <b>g</b> è dura e la <b>s</b> finale sorda; in <i>Essen</i> la <b>ss</b> è sorda."
      },
      {
        tr: "Prenda la pastiglia dopo mangiato, per favore.",
        why: "In <i>nehmen</i> la <b>h</b> non si legge e allunga la <b>e</b>; in <i>Tablette</i> l'accento cade su <b>let</b>; in <i>nach</i> la <b>ch</b> dopo <b>a</b> è [x]."
      }
    ]
  },
  "lesson:pfl-u05-l3": {
    theme: "Leggere",
    title: "Il foglietto illustrativo",
    objectives: [
      "orientarsi nelle sezioni di un foglietto illustrativo tedesco",
      "capire le frasi condizionali con wenn e falls",
      "riconoscere controindicazioni, effetti collaterali e interazioni",
      "rimandare ogni dubbio al medico o alla farmacia"
    ],
    theory: [
      {
        h: "Come è fatto il foglietto",
        p: "Il foglietto tedesco si chiama <em>der Beipackzettel</em> nel parlato e <em>die Packungsbeilage</em> o <em>Gebrauchsinformation</em> sulla carta. Le sezioni sono sempre le stesse: <em>Was ist ... und wofür wird es angewendet?</em>, <em>Was sollten Sie vor der Einnahme beachten?</em>, <em>Wie ist ... einzunehmen?</em>, <em>Welche Nebenwirkungen sind möglich?</em>, <em>Wie ist ... aufzubewahren?</em> Il testo della lezione, quello di <em>Dolorex</em>, è inventato da cima a fondo: serve a leggere la lingua, non a usare un farmaco."
      },
      {
        h: "Wenn e falls",
        p: "Il foglietto è pieno di frasi condizionali. Dopo <strong>wenn</strong> o <strong>falls</strong> il verbo coniugato va <strong>in fondo</strong>: <em>Wenn Sie schwanger sind, ...</em>, <em>Falls Sie eine Einnahme vergessen haben, ...</em> Se la condizionale viene prima, la principale comincia con il <strong>verbo</strong>, perché la condizionale occupa da sola il primo posto: <em>Wenn Sie Fragen haben, <b>rufen</b> Sie die Apotheke an.</em> <em>Falls</em> è solo condizionale, «se, nel caso in cui»; <em>wenn</em> vuol dire anche «quando»."
      },
      {
        contrast: "In italiano il foglietto dice «controindicazioni», la stessa parola latina che usa il medico, e il paziente la capisce. Il foglietto tedesco preferisce le parole tedesche: <em>Gegenanzeigen</em>, o la formula <em>... darf nicht eingenommen werden, wenn ...</em>; <em>die Kontraindikation</em> è la parola del medico. Anche la sintassi è diversa: in italiano «se ha domande, chiami la farmacia» non cambia l'ordine delle parole; in tedesco <em>haben</em> va in fondo alla condizionale e <em>rufen</em> apre la principale. «Wenn Sie Fragen haben, Sie rufen ...» è l'errore tipico di chi pensa in italiano."
      },
      {
        trap: "Nel foglietto <em>häufig</em> non è un'impressione, è un numero: per convenzione europea <em>sehr häufig</em> vuol dire 1 persona su 10 o più, <em>häufig</em> da 1 su 100 a 1 su 10, <em>selten</em> da 1 su 10.000 a 1 su 1000. Il «bugiardino» italiano corrisponde al <em>Beipackzettel</em>, non al <em>Rezept</em>, che è la ricetta. E <em>die Drogerie</em> non è una farmacia: vende cosmetici, prodotti per la casa e al massimo qualche prodotto di libera vendita; i farmaci da farmacia e quelli con ricetta si comprano in <em>der Apotheke</em>."
      },
      {
        tip: "Al paziente che ti chiede «posso prenderlo insieme a ...?» non rispondere leggendo il foglietto: <em>Das klären wir mit dem Arzt oder der Apotheke.</em> Il foglietto serve a te per capire che cosa chiedere, non per decidere."
      }
    ],
    grammar: {
      title: "Wenn e falls",
      note: "Nella condizionale il verbo va <b>in fondo</b>. Se la condizionale è prima, la principale comincia con il <b>verbo</b>.",
      table: {
        head: ["condizionale", "principale", "nota"],
        rows: [
          ["Wenn Sie schwanger sind,", "fragen Sie Ihren Arzt.", "sind in fondo, fragen in testa"],
          ["Falls Sie eine Einnahme vergessen haben,", "fragen Sie Ihren Arzt oder Apotheker.", "Perfekt: haben dopo il participio"],
          ["Wenn Sie Atemnot bekommen,", "gehen Sie sofort zum Arzt.", "bekommen: «venire» un disturbo"],
          ["(principale prima)", "Dolorex darf nicht eingenommen werden, wenn ...", "la condizionale può anche seguire"]
        ]
      },
      examples: [
        { tr: "Se è incinta, chieda al medico prima dell'assunzione.", note: "wenn: verbo sind in fondo" },
        { tr: "Se ha dimenticato un'assunzione, chieda al medico o al farmacista.", note: "falls: nel caso in cui" },
        { tr: "Se Le manca il respiro, vada subito dal medico.", note: "la principale comincia con gehen" },
        { tr: "Se prende altri farmaci, lo dica al medico.", note: "possibili interazioni: Wechselwirkungen" },
        { tr: "Dolorex non deve essere preso se è allergico a questo farmaco.", note: "Dolorex è inventato; passivo con dürfen" },
        { tr: "Se ha domande, telefoni alla farmacia.", note: "anrufen è separabile: an in fondo" }
      ]
    },
    vocab: [
      "il foglietto illustrativo, il «bugiardino» (parlato)",
      "il foglietto illustrativo (termine ufficiale)",
      "l'effetto collaterale",
      "l'interazione (tra farmaci)",
      "la controindicazione (termine tecnico)",
      "la controindicazione (parola del foglietto)",
      "la farmacia",
      "il farmacista",
      "incinta",
      "allergico",
      "conservare",
      "nel caso in cui, se"
    ],
    dialogue: [
      "Dolorex è un antidolorifico inventato. Esiste solo in questo corso.",
      "Dolorex non deve essere preso se è allergico a questo farmaco.",
      "Se è incinta o allatta, prima dell'assunzione chieda al medico o al farmacista.",
      "Se prende altri farmaci, lo dica al medico. Possono esserci interazioni.",
      "Prenda Dolorex sempre esattamente come Le ha detto il medico.",
      "Se ha dimenticato un'assunzione, chieda al medico o al farmacista.",
      "Se compare un'eruzione cutanea o le manca il respiro, smetta di prendere Dolorex e vada subito dal medico.",
      "Conservi il farmaco fuori dalla portata dei bambini."
    ],
    culture: {
      title: "Uno sguardo tedesco: Apotheke e Beipackzettel",
      text: "<p>In Germania quasi tutti i farmaci si vendono solo in farmacia (<i>apothekenpflichtig</i>), e una parte solo con ricetta (<i>verschreibungspflichtig</i>). Pochi prodotti sono <i>freiverkäuflich</i> e si trovano anche in <i>Drogerie</i> o al supermercato. Le farmacie si riconoscono dalla grande <b>A</b> rossa in stile gotico, e di notte e nei festivi c'è sempre una <i>Notdienstapotheke</i> di turno.</p><p>Il <i>Beipackzettel</i> è così presente nella vita di tutti i giorni che la sua frase obbligatoria nelle pubblicità è diventata un modo di dire: <i>Zu Risiken und Nebenwirkungen lesen Sie die Packungsbeilage und fragen Sie Ihren Arzt oder Apotheker.</i> Per il medico esiste un documento diverso e più tecnico, la <i>Fachinformation</i>.</p>"
    },
    exercises: [
      {
        q: "Leggi il foglietto di Dolorex. «Chi è allergico a Dolorex può prenderlo lo stesso.»",
        opts: ["Vero", "Falso"],
        why: "Falso: <i>Dolorex darf nicht eingenommen werden, wenn Sie allergisch dagegen sind.</i> L'allergia al farmaco è una controindicazione, una <i>Gegenanzeige</i>."
      },
      {
        q: "Leggi il foglietto di Dolorex. «In gravidanza bisogna chiedere al medico o al farmacista prima di prenderlo.»",
        opts: ["Vero", "Falso"],
        why: "Vero: <i>Wenn Sie schwanger sind oder stillen, fragen Sie vor der Einnahme Ihren Arzt oder Apotheker.</i>"
      },
      {
        q: "Secondo il foglietto, che cosa si fa se compare un'eruzione cutanea?",
        opts: ["Si mette una pomata e si continua.", "Si continua e si aspetta.", "Si smette di prenderlo e si va subito dal medico."],
        why: "<i>Wenn Sie Hautausschlag oder Atemnot bekommen, nehmen Sie Dolorex nicht weiter ein und gehen Sie sofort zum Arzt.</i> <i>Nicht weiter einnehmen</i> vuol dire «smettere di prendere»."
      },
      {
        q: "Completa: «___ Sie schwanger sind, fragen Sie vor der Einnahme Ihren Arzt.»",
        hint: "congiunzione condizionale",
        why: "<b>Wenn</b> o <b>Falls</b>: tutte e due mandano il verbo <i>sind</i> in fondo, e la principale comincia con <i>fragen</i>."
      },
      {
        q: "Completa la frase del foglietto.",
        tr: "Se Le manca il respiro, vada subito dal medico.",
        why: "<i>Wenn Sie Atemnot bekommen, gehen Sie sofort zum Arzt</i>: <i>bekommen</i> in fondo alla condizionale, <i>zum Arzt</i> per la direzione verso una persona."
      },
      {
        q: "Metti in ordine le parole.",
        tr: "Se ha domande, telefoni alla farmacia.",
        why: "<i>Wenn Sie Fragen haben, rufen Sie die Apotheke an.</i> <i>Haben</i> in fondo alla condizionale, <i>rufen</i> apre la principale, il prefisso <i>an</i> chiude la frase."
      },
      {
        q: "Abbina ogni parola del foglietto al suo significato.",
        pairs: ["la controindicazione", "l'effetto collaterale", "l'interazione", "il foglietto illustrativo", "il farmacista"]
      },
      {
        q: "Quali frasi sono costruite correttamente?",
        opts: [
          "Wenn Sie Schmerzen haben, klingeln Sie bitte.",
          "Wenn Sie haben Schmerzen, klingeln Sie bitte.",
          "Falls Ihnen übel wird, sagen Sie es mir.",
          "Wenn Sie Fragen haben, Sie fragen den Arzt.",
          "Wenn Sie eine Tablette vergessen haben, fragen Sie den Arzt."
        ],
        why: "Nella condizionale il verbo va in fondo (<i>haben</i>, <i>wird</i>), e la principale comincia con il verbo (<i>klingeln</i>, <i>sagen</i>, <i>fragen</i>). La seconda e la quarta sbagliano proprio questo."
      },
      {
        q: "Traduci: «Se ha domande, chieda al medico o al farmacista.»",
        why: "<i>Wenn Sie Fragen haben, fragen Sie Ihren Arzt oder Apotheker.</i> Va bene anche <i>falls</i>, e <i>den Arzt</i> al posto di <i>Ihren Arzt</i>: <i>fragen</i> vuole l'accusativo."
      },
      {
        tr: "Se compare un'eruzione cutanea o le manca il respiro, smetta di prendere Dolorex e vada subito dal medico.",
        why: "In <i>Hautausschlag</i> l'accento cade sulla prima sillaba, <b>Haut</b>; in <i>Atemnot</i> sulla <b>A</b>; in <i>sofort</i> sulla seconda sillaba, <b>fort</b>."
      },
      {
        tr: "Se ha domande, chieda al Suo medico, per favore.",
        why: "In <i>Wenn</i> la <b>w</b> si legge [v]; in <i>Fragen</i> la <b>a</b> è lunga; in <i>Ihren</i> la <b>h</b> non si legge e allunga la <b>i</b>; in <i>Arzt</i> la <b>z</b> e la <b>t</b> finali si pronunciano tutte e due."
      }
    ]
  },
  "lesson:pfl-u05-l4": {
    theme: "Sicurezza",
    title: "Preparare i farmaci",
    objectives: [
      "descrivere la preparazione dei farmaci con il passivo",
      "usare müssen, dürfen e sollen con l'infinito passivo",
      "nominare le sei R della somministrazione sicura",
      "chiedere in farmacia o al medico invece di decidere da soli"
    ],
    theory: [
      {
        h: "Il passivo di reparto",
        p: "Quando conta l'azione e non chi la fa, il tedesco usa il <strong>passivo</strong>: <em>werden</em> coniugato in seconda posizione e il participio in fondo. <em>Die Medikamente werden im Stationszimmer gerichtet. Jede Gabe wird dokumentiert.</em> Con un modale il modale va in seconda posizione e in fondo c'è l'infinito passivo, participio + <em>werden</em>: <em>Vor der Gabe muss der Name kontrolliert werden.</em> Nella domanda sì/no il modale va al primo posto: <em>Darf die Tablette geteilt werden?</em>"
      },
      {
        h: "Die 6-R-Regel",
        p: "Prima di ogni somministrazione si controllano sei «R», da <em>richtig</em>: <em>die richtige Person</em>, <em>das richtige Medikament</em>, <em>die richtige Dosierung</em>, <em>die richtige Applikationsart</em>, <em>der richtige Zeitpunkt</em>, <em>die richtige Dokumentation</em>. Qui la regola è un argomento di lingua: nota come <em>richtig</em> cambia desinenza con l'articolo (<em>der richtige</em>, <em>die richtige</em>, <em>das richtige</em>). Alcune strutture ne contano più di sei; vale sempre lo standard della tua struttura."
      },
      {
        contrast: "In Italia la stessa regola si insegna come «le 6 G»: giusto paziente, giusto farmaco, giusta dose, giusta via, giusto orario, giusta registrazione. Il tedesco ha le R di <em>richtig</em>. Anche il passivo è vicino all'italiano: «i farmaci vengono preparati» corrisponde a <em>die Medikamente werden gerichtet</em>, con <em>werden</em> al posto di «venire». La differenza è la posizione: il participio va in fondo, e con un modale in fondo vanno participio e <em>werden</em> insieme, mentre l'italiano dice «deve essere controllato» tutto di seguito. Il «si» impersonale italiano («si documenta tutto») diventa passivo o <em>man</em>: <em>Alles wird dokumentiert</em>, <em>Man dokumentiert alles</em>."
      },
      {
        trap: "<em>Richten</em> qui vuol dire «preparare i farmaci» (molti reparti dicono anche <em>stellen</em>), non «dirigere» e non «richiedere». <em>Verabreichen</em> è dare il farmaco; <em>verschreiben</em> è prescriverlo, e lo fa il medico. <em>Die Dosierung</em> è lo schema (quanto e quando), <em>die Dosis</em> è la singola quantità. Attenzione anche alla forma: il participio di <em>dokumentieren</em> è <em>dokumentiert</em>, senza <em>ge-</em>, come tutti i verbi in <em>-ieren</em>; quello di <em>verabreichen</em> è <em>verabreicht</em>, senza <em>ge-</em> per via del prefisso inseparabile <em>ver-</em>."
      },
      {
        tip: "La frase più importante della lezione è quella che rimanda il dubbio: <em>Da müssen wir in der Apotheke nachfragen</em> oppure <em>Das klären wir mit dem Arzt.</em> Dividere una pastiglia, scioglierla o cambiare orario sono decisioni che non si prendono a memoria."
      }
    ],
    grammar: {
      title: "Passivo e modali",
      note: "Passivo: <b>werden</b> in seconda posizione, participio <b>in fondo</b>. Con un modale: modale in seconda posizione (prima nella domanda sì/no), in fondo <b>participio + werden</b>.",
      table: {
        head: ["struttura", "esempio", "nota"],
        rows: [
          ["passivo presente", "Die Medikamente werden gerichtet.", "werden + participio"],
          ["passivo, singolare", "Jede Gabe wird dokumentiert.", "-ieren: niente ge-"],
          ["modale + passivo", "Der Name muss kontrolliert werden.", "participio + werden in fondo"],
          ["domanda sì/no", "Darf die Tablette geteilt werden?", "il modale apre la frase"]
        ]
      },
      examples: [
        { tr: "I farmaci vengono preparati in infermeria.", note: "werden al plurale" },
        { tr: "Ogni somministrazione viene documentata subito.", note: "dokumentiert: nessun ge-" },
        { tr: "Prima della somministrazione bisogna controllare il nome.", note: "müssen + infinito passivo" },
        { tr: "Si può dividere la pastiglia?", note: "domanda sì/no: dürfen al primo posto" },
        { tr: "Dobbiamo chiederlo in farmacia.", note: "nachfragen: separabile, all'infinito resta unito" },
        { tr: "Se qualcosa non è chiaro, si chiede al medico.", note: "passivo: conta l'azione, non chi la fa" }
      ]
    },
    vocab: [
      "preparare (i farmaci)",
      "il dispenser, il portapillole",
      "lo scomparto",
      "la prescrizione, l'ordine del medico",
      "il dosaggio",
      "la somministrazione",
      "somministrare",
      "controllare",
      "documentare, registrare",
      "dividere",
      "il momento, l'orario",
      "lo scambio (di farmaci o di pazienti)"
    ],
    dialogue: [
      "Elena, mi aiuti? I farmaci per la notte devono ancora essere preparati.",
      "Certo. Controlliamo tutto con la regola delle 6 R.",
      "La persona giusta: la signora Kühn, stanza quattro. Il farmaco giusto: Cardiomin.",
      "Il dosaggio giusto e la via giusta: come è scritto nella prescrizione. Per bocca.",
      "Si può dividere la pastiglia? La signora Kühn fa fatica a deglutire.",
      "Non lo so. Dobbiamo chiederlo in farmacia.",
      "Bene. L'orario giusto è la sera, prima di dormire.",
      "Esatto. E dopo la somministrazione si documenta tutto. È la sesta R."
    ],
    exercises: [
      {
        q: "«I farmaci vengono preparati in infermeria.» Quale frase è corretta?",
        opts: [
          "Die Medikamente werden im Stationszimmer gerichtet.",
          "Die Medikamente sind im Stationszimmer richten.",
          "Die Medikamente werden im Stationszimmer richten."
        ],
        why: "Il passivo è <b>werden</b> + <b>participio</b>: <i>werden ... gerichtet</i>. Con l'infinito <i>richten</i> la frase diventerebbe un futuro, che qui non ha senso."
      },
      {
        tr: "Il presente di dürfen, tutte le persone.",
        why: "<i>Darf, darfst, darf, dürfen, dürft, dürfen</i>: al singolare la <b>ü</b> diventa <b>a</b>, e la prima e la terza persona singolare sono uguali, senza desinenza."
      },
      {
        q: "Completa: «Jede Gabe ___ sofort dokumentiert.»",
        hint: "werden, terza persona singolare",
        why: "<b>wird</b>: il soggetto <i>jede Gabe</i> è singolare, e il passivo si fa con <i>werden</i>."
      },
      {
        q: "Completa con il modale e l'infinito passivo.",
        tr: "Prima della somministrazione bisogna controllare il nome.",
        why: "<i>Vor der Gabe muss der Name kontrolliert werden</i>: <i>muss</i> in seconda posizione, in fondo il participio <i>kontrolliert</i> e poi <i>werden</i>."
      },
      {
        q: "Metti in ordine le parole.",
        tr: "Si può dividere la pastiglia?",
        why: "<i>Darf die Tablette geteilt werden?</i> Domanda sì/no: il modale <i>darf</i> apre la frase, <i>geteilt werden</i> la chiude."
      },
      {
        q: "Abbina ogni R al suo significato.",
        pairs: ["la persona giusta", "il farmaco giusto", "il dosaggio giusto", "la via di somministrazione giusta", "il momento giusto", "la documentazione giusta"]
      },
      {
        q: "Scegli l'articolo determinativo giusto per ogni nome.",
        items: ["dispenser", "scomparto", "prescrizione", "dosaggio", "momento, orario", "scambio"]
      },
      {
        q: "Quali frasi sono costruite correttamente?",
        opts: [
          "Die Tablette darf nicht geteilt werden.",
          "Die Tablette darf nicht geteilt wird.",
          "Der Name muss kontrolliert werden.",
          "Der Name muss werden kontrolliert.",
          "Die Gabe soll dokumentiert werden."
        ],
        why: "Con un modale, in fondo alla frase vanno il participio e poi <i>werden</i> all'infinito: <i>geteilt werden</i>, <i>kontrolliert werden</i>, <i>dokumentiert werden</i>."
      },
      {
        q: "Traduci: «Ogni somministrazione viene documentata.»",
        why: "<i>Jede Gabe wird dokumentiert.</i> Va bene anche <i>Verabreichung</i> o <i>Applikation</i>. Passivo: <i>wird</i> + participio senza <i>ge-</i>."
      },
      {
        q: "Un collega ti chiede dei farmaci della notte.",
        setting: "Sei in infermeria con il tuo collega Jonas.",
        lines: [
          { tr: "I farmaci per la notte sono già pronti?" },
          { tr: "Rispondi che li stanno preparando proprio adesso.", answerTr: "No, vengono preparati proprio adesso." },
          { tr: "Si può dividere la pastiglia della signora Kühn?" },
          { tr: "Rispondi che non lo sai e che bisogna chiedere in farmacia.", answerTr: "Non lo so. Dobbiamo chiedere in farmacia." },
          { tr: "E dopo la somministrazione?" },
          { tr: "Rispondi che dopo la somministrazione si documenta tutto.", answerTr: "Dopo la somministrazione si documenta tutto." }
        ]
      },
      {
        tr: "I farmaci vengono preparati secondo la regola delle 6 R. Dopo la somministrazione si documenta tutto.",
        why: "In <i>gerichtet</i> la <b>ch</b> dopo <b>i</b> è [ç]; in <i>dokumentiert</i> l'accento cade su <b>tiert</b>, come in tutti i verbi in <i>-ieren</i>; in <i>Regel</i> la prima <b>e</b> è lunga."
      },
      {
        tr: "Si può dividere la pastiglia?",
        why: "In <i>Darf</i> la <b>r</b> dopo la vocale è appena accennata; in <i>geteilt</i> la <b>ei</b> è [aɪ]; in <i>werden</i> la <b>e</b> è lunga."
      }
    ]
  },
  "lesson:pfl-u05-test": {
    theme: "Verifica",
    title: "Test: Farmaci e foglietto illustrativo",
    objectives: [
      "verificare vie di somministrazione e loro formule per il paziente, orari con il dativo, frasi con wenn e falls e il passivo della preparazione"
    ],
    theory: [
      {
        p: "Undici domande sull'intera unità. Si supera con il 70%. I farmaci citati sono inventati e i contenuti clinici sono esempi didattici: in reparto valgono la prescrizione del medico e il protocollo della struttura."
      }
    ],
    exercises: [
      {
        q: "Il medico ha scritto «intravenös». Come lo dici al paziente?",
        opts: ["unter die Haut", "über den Mund", "in die Vene"],
        why: "<i>Intravenös</i> è «in vena»: al paziente si dice <b>in die Vene</b>."
      },
      {
        q: "Completa: «Nehmen Sie die Tropfen vor ___ Frühstück.»",
        hint: "vor + dativo, das Frühstück",
        why: "<b>dem</b>: in questa espressione <i>vor</i> vuole il dativo."
      },
      {
        q: "Completa: «Die Medikamente ___ im Stationszimmer gerichtet.»",
        hint: "passivo, plurale",
        why: "<b>werden</b>: soggetto plurale, passivo con <i>werden</i> e participio <i>gerichtet</i> in fondo."
      },
      {
        q: "Abbina ogni termine tecnico alla parola per il paziente o del foglietto.",
        pairs: ["über den Mund", "unter die Haut", "in die Vene", "die Gegenanzeige"]
      },
      {
        q: "Quali frasi sono corrette?",
        opts: [
          "Wenn Sie Schmerzen haben, klingeln Sie bitte.",
          "Wenn Sie haben Schmerzen, klingeln Sie bitte.",
          "Falls Sie Fragen haben, Sie rufen die Apotheke an.",
          "Vor der Gabe wird der Name kontrolliert.",
          "Nehmen Sie die Tablette nach dem Essen ein."
        ],
        why: "Dopo <i>wenn</i> e <i>falls</i> il verbo va in fondo e la principale comincia con il verbo. <i>Vor der Gabe wird ... kontrolliert</i> è un passivo corretto, <i>nach dem Essen</i> un dativo corretto."
      },
      {
        q: "Completa la frase.",
        tr: "Nel caso in cui abbia dimenticato un'assunzione, chieda al Suo medico, per favore.",
        why: "<i>Falls Sie eine Einnahme vergessen haben, fragen Sie bitte Ihren Arzt</i>: il participio <i>vergessen</i> prima di <i>haben</i>, e la principale comincia con <i>fragen</i>."
      },
      {
        q: "Metti in ordine le parole.",
        tr: "Dopo la somministrazione si documenta tutto.",
        why: "<i>Nach der Gabe wird alles dokumentiert.</i> <i>Nach der Gabe</i> in testa, <i>wird</i> in seconda posizione, il participio in fondo."
      },
      {
        q: "«Packungsbeilage» e «Beipackzettel» indicano lo stesso foglietto.",
        opts: ["Vero", "Falso"],
        why: "Vero: <i>Packungsbeilage</i> è il nome ufficiale, <i>Beipackzettel</i> quello di tutti i giorni."
      },
      {
        q: "Scegli l'articolo determinativo giusto per ogni nome.",
        items: ["pastiglia", "supposta", "foglietto illustrativo", "effetto collaterale", "dispenser", "antibiotico"]
      },
      {
        tr: "Se ha domande sui Suoi farmaci, chieda al medico o alla farmacia, per favore.",
        why: "In <i>Medikamenten</i> l'accento cade su <b>men</b>; in <i>Apotheke</i> l'accento è su <b>the</b> e la <b>th</b> si legge [t]; in <i>Fragen</i> la <b>a</b> è lunga."
      },
      {
        tr: "Domattina resti a digiuno, per favore.",
        why: "In <i>nüchtern</i> la <b>ü</b> è breve e la <b>ch</b> è [ç]; in <i>früh</i> la <b>ü</b> è lunga e la <b>h</b> non si legge; in <i>bleiben</i> la <b>ei</b> è [aɪ]."
      }
    ]
  }
});
