/* ============================================================
   Learner-language text (it) for data/core/pfl-06.js, unit pfl-u06.
   Keys point at ids in the neutral layer; arrays merge by index,
   so their length has to match core.
   Checked by scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("it", {
  "unit:pfl-u06": {
    title: "Consegna e rapporto di cura",
    grammarNote: "il Präteritum nella consegna e nel rapporto · i connettivi deshalb, trotzdem, außerdem, weil · lo stile nominale della documentazione · il passivo al Präteritum · le finali con damit e um ... zu · le abbreviazioni di reparto"
  },
  "lesson:pfl-u06-l1": {
    theme: "Consegna orale",
    title: "La consegna",
    objectives: [
      "fare e ricevere una consegna orale tra un turno e l'altro",
      "raccontare la notte con war, hatte, konnte, wollte",
      "collegare i fatti con deshalb, trotzdem, außerdem e weil",
      "chiedere alla collega se ci sono altre particolarità"
    ],
    theory: [
      {
        h: "Che cosa si dice in consegna",
        p: "Nella <strong>Übergabe</strong> chi smonta passa a chi monta le informazioni che servono per il turno: come è andata la notte o il pomeriggio, che cosa è cambiato, che cosa è stato fatto e che cosa resta da fare. Si procede per stanza e per paziente: <em>Fangen wir mit Zimmer zwölf an?</em> Si riferiscono osservazioni e fatti, non impressioni: <em>Sie war unruhig. Gegen drei Uhr hatte sie Bauchschmerzen.</em> E si chiude con la domanda di chi riceve: <em>Gibt es sonst noch Besonderheiten?</em>"
      },
      {
        h: "Präteritum e connettivi",
        p: "Anche a voce, <em>sein</em>, <em>haben</em> e i modali si usano quasi sempre al <strong>Präteritum</strong>: <em>war, hatte, konnte, wollte, musste</em>. Gli altri verbi, a voce, vanno spesso al Perfekt: <em>Ich habe die Ärztin informiert.</em> I connettivi <em>deshalb</em> (per questo), <em>trotzdem</em> (tuttavia), <em>außerdem</em> (inoltre) occupano il primo posto della frase, quindi il verbo coniugato viene subito dopo: <em>deshalb <b>habe</b> ich</em>, <em>trotzdem <b>fühlte</b> sie sich wohl</em>. Con <em>weil</em> invece si apre una subordinata e il verbo va in fondo: <em>weil er Schmerzen <b>hatte</b></em>."
      },
      {
        contrast: "In italiano la consegna si racconta quasi tutta al passato prossimo: «è stata agitata, ha avuto dolore, ho chiamato il medico». In tedesco la stessa consegna mescola due tempi. <em>War, hatte, konnte</em> al Präteritum suonano normali anche a voce, mentre <em>ist gewesen</em> o <em>hat gehabt</em>, in consegna, suonano più lunghi e meno usuali. Gli altri verbi, a voce, restano al Perfekt; nel rapporto scritto passano al Präteritum (<em>Die Ärztin kam</em>). Attenzione anche all'ordine delle parole: in italiano «perciò» e «comunque» non spostano niente («perciò ho chiamato»), in tedesco <em>deshalb</em> e <em>trotzdem</em> prendono il primo posto e il verbo li segue subito: <em>deshalb habe ich angerufen</em>, mai <em>deshalb ich habe</em>."
      },
      {
        trap: "<em>übergeben</em> vuol dire «consegnare», ma <em>sich übergeben</em> vuol dire «vomitare»: <em>Ich übergebe dir Zimmer zwölf</em> è la consegna, <em>Die Patientin hat sich übergeben</em> è un'osservazione da riferire. Il prefisso <em>über-</em> qui non si separa: <em>ich übergebe</em>, al Perfekt <em>ich habe übergeben</em>, senza <em>ge-</em> davanti. E <em>stabil</em> descrive valori e condizioni costanti: non è un giudizio sul paziente come persona."
      },
      {
        tip: "Prepara la consegna con lo stesso ordine per ogni paziente: come è andato il turno, i valori fuori norma, che cosa hai fatto, chi hai informato, che cosa resta da fare. Lo schema fisso ti fa trovare le parole anche quando sei stanca a fine notte, e chi ascolta sa dove cercare l'informazione."
      }
    ],
    grammar: {
      title: "Connettivi e posto del verbo",
      note: "<b>deshalb, trotzdem, außerdem</b> occupano il primo posto: il verbo coniugato viene subito dopo. <b>weil</b> apre una subordinata: il verbo coniugato va in fondo.",
      table: {
        head: ["connettivo", "significato", "esempio"],
        rows: [
          ["deshalb", "per questo", "Sie hatte Schmerzen, deshalb habe ich die Ärztin informiert."],
          ["trotzdem", "tuttavia, comunque", "Der Blutdruck war erhöht, trotzdem fühlte sie sich wohl."],
          ["außerdem", "inoltre", "Außerdem wollte er nichts essen."],
          ["weil", "perché", "Er konnte nicht schlafen, weil er Schmerzen hatte."]
        ]
      },
      examples: [
        { tr: "La signora Keller nella notte è stata agitata.", note: "sein al Präteritum: war, normale anche a voce" },
        { tr: "Verso le tre aveva mal di pancia, per questo ho informato la dottoressa.", note: "deshalb al primo posto, poi subito il verbo: habe" },
        { tr: "Il signor Brandt non riusciva a dormire perché aveva dolore.", note: "weil: il verbo coniugato hatte va in fondo" },
        { tr: "La sera la pressione era alta, ma lei si sentiva comunque bene.", note: "trotzdem al primo posto, poi fühlte" },
        { tr: "Inoltre non voleva mangiare niente.", note: "außerdem al primo posto, poi wollte" },
        { tr: "La notte è trascorsa tranquilla.", note: "verlaufen, Präteritum verlief: tipico dei rapporti" }
      ]
    },
    vocab: [
      "la consegna (tra un turno e l'altro)",
      "il turno del mattino",
      "il turno del pomeriggio",
      "il turno di notte",
      "consegnare, passare in consegna",
      "agitato, inquieto",
      "la particolarità, l'aspetto da segnalare",
      "lo stato, la condizione",
      "stabile",
      "per questo, perciò",
      "tuttavia, comunque",
      "inoltre"
    ],
    dialogue: [
      "Buongiorno. Cominciamo dalla stanza dodici?",
      "Sì, volentieri. Com'è andata la notte della signora Keller?",
      "La signora Keller è stata agitata. Verso le tre aveva mal di pancia, per questo ho informato la dottoressa di guardia.",
      "E poi?",
      "La dottoressa è venuta e l'ha visitata. Dopo la signora Keller è riuscita a riaddormentarsi.",
      "Ci sono altre particolarità?",
      "Ha bevuto poco. Inoltre la sera la pressione era alta, ma si sentiva comunque bene.",
      "Bene, allora le misuro subito di nuovo la pressione."
    ],
    culture: {
      title: "Uno sguardo tedesco: la consegna al letto del paziente",
      text: "<p>In molti reparti tedeschi la <i>Dienstübergabe</i> si fa nella stanza del personale, in altri si fa in parte al letto del paziente: la <i>Übergabe am Bett</i>. Al letto il paziente può correggere o completare, ma ci sono anche il vicino di stanza e i familiari: le informazioni delicate si dicono fuori, a voce bassa o nella stanza del personale.</p><p>I turni di solito si chiamano <i>Frühdienst</i>, <i>Spätdienst</i> e <i>Nachtdienst</i>, e gli orari cambiano da struttura a struttura. Chi arriva nuovo li trova nel <i>Dienstplan</i>.</p>"
    },
    exercises: [
      {
        q: "Riferisci in consegna che la paziente nella notte era agitata. Quale frase è corretta?",
        opts: [
          "Frau Keller hatte in der Nacht unruhig.",
          "Frau Keller war in der Nacht unruhig.",
          "Frau Keller ist in der Nacht unruhig gewesen sein."
        ],
        why: "Con un aggettivo come <i>unruhig</i> serve <b>sein</b>, e in consegna si usa il Präteritum: <b>war</b>. <i>hatte unruhig</i> non esiste e <i>ist gewesen sein</i> è una forma sbagliata."
      },
      {
        tr: "Il Präteritum di schlafen, tutte le persone.",
        why: "<i>Schlief, schliefst, schlief, schliefen, schlieft, schliefen</i>: verbo forte, la vocale diventa <b>ie</b>, e la prima e la terza persona singolare non hanno desinenza."
      },
      {
        q: "Completa: «Sie hatte Schmerzen, ___ habe ich die Ärztin informiert.»",
        hint: "connettivo: per questo",
        why: "<b>deshalb</b> (anche <i>darum</i>, <i>daher</i>, <i>deswegen</i>): esprime la conseguenza e occupa il primo posto, per questo il verbo <i>habe</i> viene subito dopo."
      },
      {
        q: "Completa la frase.",
        tr: "La sera la pressione era alta, ma lei si sentiva comunque bene.",
        why: "<i>Der Blutdruck <b>war</b> am Abend erhöht</i>: sein al Präteritum. <i><b>trotzdem</b> fühlte sie sich wohl</i>: il connettivo prende il primo posto e il verbo lo segue subito."
      },
      {
        q: "Quali frasi sono corrette?",
        opts: [
          "Er hatte Schmerzen, deshalb konnte er nicht schlafen.",
          "Er hatte Schmerzen, deshalb er konnte nicht schlafen.",
          "Er konnte nicht schlafen, weil er Schmerzen hatte.",
          "Außerdem wollte er nichts essen.",
          "Er konnte nicht schlafen, weil er hatte Schmerzen."
        ],
        why: "Dopo <i>deshalb</i> e <i>außerdem</i> viene subito il verbo coniugato: <i>deshalb konnte er</i>. Dopo <i>weil</i> il verbo coniugato va in fondo: <i>weil er Schmerzen hatte</i>."
      },
      {
        q: "Scegli l'articolo determinativo giusto per ogni nome.",
        items: ["consegna", "turno del mattino", "turno del pomeriggio", "turno di notte", "particolarità", "stato, condizione"]
      },
      {
        q: "Abbina ogni connettivo al suo significato.",
        pairs: ["per questo", "tuttavia, comunque", "inoltre", "perché"]
      },
      {
        q: "Metti in ordine le parole.",
        tr: "Aveva dolore, per questo ho informato la dottoressa.",
        why: "<i>Sie hatte Schmerzen, deshalb habe ich die Ärztin informiert.</i> Dopo la virgola <i>deshalb</i> occupa il primo posto della seconda frase, poi il verbo <i>habe</i>, poi il soggetto <i>ich</i>; il participio <i>informiert</i> va in fondo, senza <i>ge-</i>."
      },
      {
        q: "Traduci (in consegna): «La notte è trascorsa tranquilla.»",
        why: "<i>Die Nacht war ruhig</i> è la forma più semplice; nei rapporti si legge spesso <i>Die Nacht verlief ruhig</i>. A voce va bene anche <i>Die Nacht ist ruhig verlaufen</i>."
      },
      {
        q: "La consegna del mattino.",
        setting: "Hai fatto il turno di notte e passi la consegna a un collega.",
        lines: [
          { tr: "Com'è andata la notte del signor Brandt?" },
          { tr: "Rispondi che era agitato perché aveva dolore.", answerTr: "Era agitato perché aveva dolore." },
          { tr: "Hai informato la dottoressa?" },
          { tr: "Rispondi di sì: aveva forti dolori, per questo l'hai chiamata.", answerTr: "Sì, aveva forti dolori, per questo l'ho chiamata." },
          { tr: "Ci sono altre particolarità?" },
          { tr: "Rispondi che inoltre ha bevuto poco.", answerTr: "Inoltre ha bevuto poco." }
        ]
      },
      {
        tr: "Verso le tre aveva mal di pancia, per questo ho informato la dottoressa di guardia.",
        why: "In <i>Bauchschmerzen</i> la <b>ch</b> dopo <b>au</b> è [x], come in <i>auch</i>; in <i>deshalb</i> la <b>s</b> e la <b>h</b> si pronunciano separate, des-halb; in <i>diensthabende</i> l'accento cade su <b>Dienst</b>."
      },
      {
        tr: "La notte è stata tranquilla, non ci sono particolarità.",
        why: "In <i>Nacht</i> la <b>ch</b> dopo <b>a</b> è [x]; in <i>ruhig</i> la <b>g</b> finale si legge [ç]; in <i>Besonderheiten</i> l'accento cade su <b>son</b>."
      }
    ]
  },
  "lesson:pfl-u06-l2": {
    theme: "Documentazione scritta",
    title: "Il rapporto di cura",
    objectives: [
      "scrivere una voce del rapporto di cura in stile breve",
      "trasformare una frase verbale in stile nominale",
      "usare il passivo al Präteritum: wurde informiert, wurde gewechselt",
      "distinguere un'osservazione da un giudizio"
    ],
    theory: [
      {
        h: "Che cosa entra nel rapporto",
        p: "Il <strong>Pflegebericht</strong> registra ciò che è cambiato o che conta per chi viene dopo: stato del paziente, osservazioni, interventi fatti, chi è stato informato. Ogni voce ha data, ora e la sigla di chi scrive. Si scrivono <strong>osservazioni</strong>, non giudizi: non <em>Patientin war schwierig</em>, ma che cosa hai visto e sentito: <em>Patientin weinte und sprach wenig.</em> Se un'osservazione ti preoccupa, il rapporto registra anche il passo successivo: <em>Ärztin informiert.</em>"
      },
      {
        h: "Stile nominale e passivo",
        p: "La documentazione tedesca preferisce i <strong>nomi</strong> ai verbi: <em>Die Patientin wollte nichts essen</em> diventa <em>Verweigerung der Nahrungsaufnahme</em>. Il nome in <em>-ung</em> è sempre femminile e il complemento che lo segue va al genitivo: <em>die Verweigerung <b>der</b> Nahrungsaufnahme</em>. Quando conta l'azione e non chi l'ha fatta si usa il <strong>passivo</strong>, al Präteritum: <em>Der Verband <b>wurde</b> gewechselt. Die Ärztin <b>wurde</b> informiert.</em> Nelle voci brevi spesso l'ausiliare cade: <em>Verband gewechselt. Ärztin informiert.</em>"
      },
      {
        contrast: "Anche l'italiano dei servizi conosce lo stile nominale («rifiuto dell'alimentazione», «rilevazione dei parametri»), quindi il meccanismo ti è familiare. La differenza è che in tedesco il nome si costruisce con regole precise: il verbo <em>verweigern</em> dà <em>die Verweigerung</em>, il complemento passa al genitivo (<em>der Nahrungsaufnahme</em>), e le parole si saldano in un composto (<em>Nahrung</em> + <em>Aufnahme</em>). L'italiano, invece, scrive spesso al passato prossimo («il paziente ha rifiutato il pranzo, è stato avvisato il medico»); il rapporto tedesco usa il Präteritum o la forma breve senza ausiliare: <em>Der Patient verweigerte das Mittagessen. Arzt informiert.</em> Il passato prossimo resta per il parlato."
      },
      {
        trap: "I verbi in <em>-ieren</em> non prendono <em>ge-</em> al participio: <em>informiert</em>, <em>dokumentiert</em>, <em>mobilisiert</em>, mai <em>geinformiert</em>. E attenzione al soggetto: <em>Die Ärztin wurde informiert</em> vuol dire che qualcuno ha avvisato la dottoressa; <em>Die Ärztin hat informiert</em> vuol dire che è stata lei ad avvisare qualcuno. Il verbo per la medicazione è <em>wechseln</em>, non <em>ändern</em>: <em>Der Verband wurde gewechselt.</em>"
      },
      {
        tip: "Prima di scrivere, chiediti: un collega che legge questa voce tra otto ore sa che cosa è successo, quando e chi è stato informato? Se la risposta è sì, la voce è completa. Se hai scritto un aggettivo come <em>schwierig</em> o <em>nervig</em>, sostituiscilo con quello che hai visto o sentito."
      }
    ],
    grammar: {
      title: "Dal verbo al nome",
      note: "Verbo → nome in <b>-ung</b> (sempre femminile) + complemento al <b>genitivo</b>. Per l'azione senza chi la fa: <b>wurde</b> + participio.",
      table: {
        head: ["stile verbale", "stile nominale o passivo"],
        rows: [
          ["Die Patientin wollte nichts essen.", "Verweigerung der Nahrungsaufnahme."],
          ["Ich habe die Ärztin angerufen.", "Ärztin informiert. / Die Ärztin wurde informiert."],
          ["Ich habe den Verband gewechselt.", "Verbandswechsel. / Der Verband wurde gewechselt."],
          ["Er hat wenig getrunken.", "Geringe Flüssigkeitsaufnahme."]
        ]
      },
      examples: [
        { tr: "Oggi a pranzo la paziente non voleva mangiare niente.", note: "stile verbale: va bene a voce e nel rapporto" },
        { tr: "Rifiuto dell'alimentazione a pranzo.", note: "stile nominale: Verweigerung + genitivo der" },
        { tr: "La medicazione è stata cambiata alle dieci.", note: "passivo al Präteritum: wurde + gewechselt" },
        { tr: "La dottoressa è stata informata.", note: "informiert: verbo in -ieren, senza ge-" },
        { tr: "Dopo un confronto con la dottoressa la mobilizzazione è stata rimandata.", note: "nach Rücksprache mit: formula fissa della documentazione" },
        { tr: "Per prevenire le cadute il letto è stato abbassato.", note: "zur + nome: lo scopo in stile nominale" }
      ]
    },
    vocab: [
      "il rapporto di cura, il diario infermieristico",
      "la documentazione",
      "la voce, la registrazione (nel rapporto)",
      "l'osservazione",
      "l'assunzione di cibo, l'alimentazione (termine tecnico)",
      "l'assunzione di liquidi (termine tecnico)",
      "rifiutare",
      "il rifiuto",
      "il confronto, la consultazione (con il medico)",
      "lo stato di salute percepito, come sta il paziente",
      "senza particolarità, nella norma",
      "l'eliminazione (urine e feci)"
    ],
    dialogue: [
      "Puoi dare un'occhiata al mio rapporto? Ho scritto: oggi a pranzo la signora Keller non voleva mangiare niente.",
      "Va bene così. Nel rapporto spesso si scrive più breve: rifiuto dell'alimentazione a pranzo.",
      "E devo scrivere chi ha chiamato la dottoressa?",
      "Scrivi semplicemente: dottoressa informata. La tua sigla c'è già accanto alla voce.",
      "Posso scrivere anche che era di cattivo umore?",
      "Scrivi piuttosto quello che hai visto e sentito: la paziente piangeva e parlava poco.",
      "Capito. Osservazioni, non giudizi."
    ],
    culture: {
      title: "Uno sguardo tedesco: ciò che non è scritto",
      text: "<p>In Germania circola tra il personale di cura una frase: <i>Was nicht dokumentiert ist, gilt als nicht gemacht</i>, «ciò che non è documentato si considera non fatto». Non è una legge, ma descrive bene il peso della documentazione: è la base per la continuità delle cure, per la comunicazione con i medici e, in caso di controversia, per ricostruire che cosa è successo.</p><p>Per lo stesso motivo una voce non si cancella e non si rende illeggibile: se c'è un errore, si barra in modo che resti leggibile o si aggiunge una correzione con data e sigla. Nei sistemi elettronici la regola è la stessa e la registra il programma.</p>"
    },
    exercises: [
      {
        q: "Come si scrive in stile nominale «Die Patientin wollte nichts essen»?",
        opts: [
          "Verweigerung von der Nahrungsaufnahme essen.",
          "Verweigerung der Nahrungsaufnahme.",
          "Die Nahrungsaufnahme verweigernd."
        ],
        why: "Il verbo <i>verweigern</i> diventa il nome <b>die Verweigerung</b>, e il complemento passa al genitivo: <b>der</b> Nahrungsaufnahme."
      },
      {
        tr: "Il Präteritum di werden, tutte le persone.",
        why: "<i>Wurde, wurdest, wurde, wurden, wurdet, wurden</i>: è la forma che regge il passivo nel rapporto, <i>Die Ärztin wurde informiert</i>."
      },
      {
        q: "Completa: «Die Ärztin ___ um 15 Uhr informiert.»",
        hint: "passivo al Präteritum",
        why: "<b>wurde</b>: il passivo al Präteritum si fa con <i>wurde</i> e il participio, qui <i>informiert</i>, senza <i>ge-</i>."
      },
      {
        q: "Completa la frase.",
        tr: "La medicazione è stata cambiata alle dieci.",
        why: "<i>Der Verband <b>wurde</b> um zehn Uhr <b>gewechselt</b></i>: <i>wurde</i> al secondo posto, il participio <i>gewechselt</i> in fondo."
      },
      {
        q: "Abbina ogni termine della documentazione al suo significato.",
        pairs: ["l'assunzione di cibo", "l'assunzione di liquidi", "l'eliminazione (urine e feci)", "il confronto con il medico"]
      },
      {
        q: "Scegli l'articolo determinativo giusto per ogni nome.",
        items: ["rapporto di cura", "stato di salute percepito", "voce del rapporto", "osservazione", "confronto con il medico", "documentazione"]
      },
      {
        q: "Quali voci sono adatte a un rapporto di cura?",
        opts: [
          "Patientin weinte und sprach wenig.",
          "Patientin war wieder schwierig.",
          "Verweigerung der Nahrungsaufnahme am Mittag, Ärztin informiert.",
          "Verband um zehn Uhr gewechselt, Wunde unauffällig.",
          "Patient ist faul und will nicht laufen."
        ],
        why: "Nel rapporto entrano osservazioni e interventi: che cosa hai visto, che cosa è stato fatto, chi è stato informato. <i>schwierig</i> e <i>faul</i> sono giudizi sulla persona e non dicono niente a chi legge."
      },
      {
        q: "Metti in ordine le parole.",
        tr: "Dopo un confronto con la dottoressa la mobilizzazione è stata rimandata.",
        why: "<i>Nach Rücksprache mit der Ärztin wurde die Mobilisation verschoben.</i> La formula <i>nach Rücksprache mit</i> occupa il primo posto, poi <i>wurde</i>, poi il soggetto, e il participio <i>verschoben</i> in fondo."
      },
      {
        q: "Traduci (nel rapporto): «Il medico è stato informato.»",
        why: "<i>Der Arzt wurde informiert</i> oppure <i>Die Ärztin wurde informiert</i>, a seconda di chi era di turno; nella forma breve <i>Arzt informiert</i>. A voce va bene anche <i>ist informiert worden</i>."
      },
      {
        q: "Una voce del rapporto.",
        setting: "Una collega nuova ti chiede come scrivere il rapporto di cura.",
        lines: [
          { tr: "Oggi a pranzo la signora Keller non voleva mangiare niente. Come lo scrivo?" },
          { tr: "Detta la forma breve: rifiuto dell'alimentazione a pranzo.", answerTr: "Rifiuto dell'alimentazione a pranzo." },
          { tr: "E che ho chiamato la dottoressa?" },
          { tr: "Detta la forma breve: dottoressa informata.", answerTr: "Dottoressa informata." },
          { tr: "Posso scrivere che era di cattivo umore?" },
          { tr: "Rispondi che è meglio scrivere ciò che ha osservato: parlava poco e piangeva.", answerTr: "Scrivi piuttosto quello che hai osservato: parlava poco e piangeva." }
        ]
      },
      {
        tr: "Va bene così. Nel rapporto spesso si scrive più breve: rifiuto dell'alimentazione a pranzo.",
        why: "In <i>Bericht</i> la <b>ch</b> dopo <b>i</b> è [ç]; in <i>Verweigerung</i> la <b>v</b> è [f] e l'accento cade su <b>wei</b>; in <i>Nahrungsaufnahme</i> l'accento cade su <b>Nah</b>."
      },
      {
        tr: "La dottoressa è stata informata.",
        why: "In <i>Ärztin</i> la <b>ä</b> è aperta e la <b>z</b> è [ts]; in <i>wurde</i> la <b>u</b> è breve; in <i>informiert</i> l'accento cade su <b>miert</b>, con la <b>ie</b> lunga."
      }
    ]
  },
  "lesson:pfl-u06-l3": {
    theme: "Pianificazione",
    title: "La pianificazione assistenziale",
    objectives: [
      "leggere una pianificazione assistenziale: problema, risorsa, obiettivo, intervento",
      "dire lo scopo di un intervento con damit e um ... zu",
      "scegliere tra damit e um ... zu in base al soggetto",
      "formulare un obiettivo che si possa verificare"
    ],
    theory: [
      {
        h: "Le parti della pianificazione",
        p: "La <strong>Pflegeplanung</strong> segue lo stesso schema in quasi tutte le strutture. Il <strong>Pflegeproblem</strong> dice che cosa è difficile per il paziente (<em>Sie trinkt zu wenig</em>). La <strong>Ressource</strong> dice che cosa sa ancora fare da sé (<em>Sie kann den Becher selbst halten</em>). Il <strong>Pflegeziel</strong> dice che cosa si vuole raggiungere, in modo verificabile (<em>Die Patientin trinkt ausreichend</em>). Le <strong>Maßnahmen</strong> dicono che cosa si fa e perché. Alla <strong>Evaluation</strong> si controlla se l'obiettivo è stato raggiunto. Le quantità e gli intervalli si stabiliscono per ogni paziente, con il medico e secondo gli standard della struttura: in questa lezione gli esempi sono didattici."
      },
      {
        h: "damit o um ... zu?",
        p: "Lo scopo di un intervento si esprime con una finale. Se il soggetto della finale è <strong>diverso</strong> da quello della principale si usa <strong>damit</strong>, con il verbo coniugato in fondo: <em>Wir bieten ihr Tee an, damit <b>sie</b> mehr trinkt.</em> Se il soggetto è <strong>lo stesso</strong> si può usare <strong>um ... zu</strong> con l'infinito: <em>Wir führen ein Trinkprotokoll, um die Trinkmenge zu kontrollieren</em> (siamo noi che teniamo il diario e noi che controlliamo). Con i verbi separabili <em>zu</em> va in mezzo: <em>um aufzustehen</em>."
      },
      {
        contrast: "In italiano lo scopo si dice con «per» + infinito quando il soggetto è lo stesso e con «affinché» o «perché» + congiuntivo quando cambia: «gli offriamo il tè perché beva di più». Il tedesco ha la stessa divisione, ma senza congiuntivo: <em>damit sie mehr trinkt</em> usa l'indicativo. Le parole della pianificazione sono trasparenti per chi viene dalla formazione italiana: <em>Pflegeproblem</em> è il problema assistenziale, <em>Ressource</em> la risorsa, <em>Pflegeziel</em> l'obiettivo, <em>Maßnahme</em> l'intervento. Con il paziente però non si usano: invece di <em>Ihre Ressource</em> si dice <em>Das können Sie schon gut allein</em>."
      },
      {
        trap: "<em>damit</em> ha due significati. Come congiunzione introduce lo scopo e manda il verbo in fondo: <em>damit sie mehr trinkt</em>. Come avverbio vuol dire «con questo, con ciò»: <em>Was machen wir damit?</em> «Che cosa ci facciamo?». E <em>die Maßnahme</em> è l'intervento, non la misura come quantità: una misurazione è <em>die Messung</em>. <em>Erhalten</em> qui vuol dire «conservare» (<em>die Selbstständigkeit erhalten</em>), non solo «ricevere»."
      },
      {
        tip: "Per ogni intervento della pianificazione prova a dire il perché ad alta voce, con <em>damit</em> o <em>um ... zu</em>. Se la finale non ti viene, spesso manca lo scopo anche nella pianificazione, e un intervento senza scopo è difficile da valutare all'Evaluation."
      }
    ],
    grammar: {
      title: "Lo scopo: damit e um ... zu",
      note: "Soggetto <b>diverso</b>: <b>damit</b> + verbo coniugato in fondo. Soggetto <b>uguale</b>: <b>um ... zu</b> + infinito in fondo (oppure damit).",
      table: {
        head: ["principale", "finale", "soggetto"],
        rows: [
          ["Wir bieten ihr oft Tee an,", "damit sie mehr trinkt.", "diverso: damit"],
          ["Wir lagern ihn regelmäßig um,", "damit kein Dekubitus entsteht.", "diverso: damit"],
          ["Er geht täglich mit dem Rollator,", "um mobil zu bleiben.", "uguale: um ... zu"],
          ["Wir führen ein Trinkprotokoll,", "um die Trinkmenge zu kontrollieren.", "uguale: um ... zu"]
        ]
      },
      examples: [
        { tr: "Cambiamo regolarmente posizione alla signora Keller perché non si formi una piaga da decubito.", note: "soggetti diversi (wir / kein Dekubitus): damit" },
        { tr: "Le offriamo spesso del tè perché beva di più.", note: "soggetti diversi (wir / sie): damit, con l'indicativo" },
        { tr: "Il signor Brandt cammina ogni giorno con il deambulatore per restare mobile.", note: "stesso soggetto: um ... zu" },
        { tr: "Teniamo un diario delle bevande per controllare la quantità bevuta.", note: "stesso soggetto: um ... zu, infinito in fondo" },
        { tr: "Risorsa: la paziente riesce a tenere il bicchiere da sola.", note: "la risorsa dice che cosa il paziente fa ancora da sé" },
        { tr: "Obiettivo: la paziente beve a sufficienza.", note: "l'obiettivo si scrive al presente, come uno stato da raggiungere" }
      ]
    },
    vocab: [
      "la pianificazione assistenziale",
      "il problema assistenziale",
      "la risorsa (ciò che il paziente sa ancora fare)",
      "l'obiettivo assistenziale",
      "l'intervento, il provvedimento",
      "la valutazione (della pianificazione)",
      "il rischio",
      "evitare, prevenire",
      "conservare, mantenere",
      "favorire, sostenere",
      "la quantità di liquidi bevuta",
      "il diario delle bevande, il bilancio delle entrate"
    ],
    dialogue: [
      "Oggi aggiorniamo la pianificazione assistenziale della signora Keller. Qual è il suo problema assistenziale?",
      "Beve troppo poco. C'è un rischio di disidratazione.",
      "Giusto. E quali risorse ha?",
      "Riesce a tenere il bicchiere da sola, e beve volentieri il tè.",
      "Bene. Quali interventi pianifichiamo?",
      "Le offriamo regolarmente del tè, perché beva di più. Inoltre teniamo un diario delle bevande per controllare la quantità bevuta.",
      "Molto bene. E l'obiettivo?",
      "La signora Keller beve a sufficienza. La quantità precisa la stabiliamo con la dottoressa."
    ],
    culture: {
      title: "Uno sguardo tedesco: dal processo di cura alla SIS",
      text: "<p>Nella formazione tedesca la pianificazione si insegna come <i>Pflegeprozess</i>, un ciclo di passi che va dalla raccolta di informazioni alla valutazione. Negli ospedali la pianificazione è spesso un modulo del sistema elettronico, con problemi e interventi già formulati da scegliere e adattare.</p><p>Nell'assistenza agli anziani, in Germania molte strutture usano un modello più snello, la <i>Strukturierte Informationssammlung</i> (SIS), nato per ridurre la documentazione. Le parole di questa lezione restano le stesse: le ritroverai in qualsiasi modulo.</p>"
    },
    exercises: [
      {
        q: "Vuoi dire perché cambiate posizione al paziente. Quale frase è corretta?",
        opts: [
          "Wir lagern ihn regelmäßig um, um kein Dekubitus entsteht.",
          "Wir lagern ihn regelmäßig um, damit kein Dekubitus zu entstehen.",
          "Wir lagern ihn regelmäßig um, damit kein Dekubitus entsteht."
        ],
        why: "I soggetti sono diversi (<i>wir</i> e <i>kein Dekubitus</i>), quindi serve <b>damit</b> con il verbo coniugato in fondo: <i>entsteht</i>. <i>um</i> non regge un verbo coniugato, e dopo <i>damit</i> non c'è <i>zu</i>."
      },
      {
        q: "Completa: «Wir führen ein Trinkprotokoll, ___ die Trinkmenge zu kontrollieren.»",
        hint: "stesso soggetto, infinito con zu",
        why: "<b>um</b>: siamo noi a tenere il diario e noi a controllare, quindi <i>um ... zu</i> con l'infinito in fondo."
      },
      {
        q: "Completa la frase.",
        tr: "Le offriamo spesso del tè perché beva di più. Lui cammina ogni giorno con il deambulatore per restare mobile.",
        why: "<i><b>damit</b> sie mehr trinkt</i>: i soggetti sono diversi. <i>um mobil zu <b>bleiben</b></i>: stesso soggetto, l'infinito va in fondo dopo <i>zu</i>."
      },
      {
        q: "Quali frasi sono corrette?",
        opts: [
          "Ich messe den Blutdruck, um Veränderungen früh zu erkennen.",
          "Ich messe den Blutdruck, damit Veränderungen früh zu erkennen.",
          "Wir mobilisieren ihn, damit er selbstständig bleibt.",
          "Wir mobilisieren ihn, um er selbstständig bleibt.",
          "Sie trinkt viel, um fit zu bleiben."
        ],
        why: "<i>um ... zu</i> vuole l'infinito con <i>zu</i> e lo stesso soggetto; <i>damit</i> vuole un verbo coniugato. <i>damit ... zu erkennen</i> e <i>um er ... bleibt</i> mescolano le due costruzioni."
      },
      {
        q: "Abbina ogni parte della pianificazione al suo significato.",
        pairs: ["ciò che è difficile per il paziente", "ciò che il paziente sa ancora fare da sé", "ciò che vogliamo raggiungere", "ciò che facciamo per raggiungerlo"]
      },
      {
        q: "Scegli l'articolo determinativo giusto per ogni nome.",
        items: ["pianificazione assistenziale", "problema assistenziale", "risorsa", "obiettivo assistenziale", "rischio", "diario delle bevande"]
      },
      {
        q: "Metti in ordine le parole.",
        tr: "Le offriamo spesso del tè perché beva di più.",
        why: "<i>Wir bieten ihr oft Tee an, damit sie mehr trinkt.</i> Il prefisso <i>an</i> chiude la principale; dopo <i>damit</i> il verbo coniugato <i>trinkt</i> va in fondo."
      },
      {
        q: "Traduci (nella pianificazione): «Lo mobilizziamo perché resti autonomo.»",
        why: "<i>Wir mobilisieren ihn, damit er selbstständig bleibt.</i> I soggetti sono diversi (<i>wir</i> e <i>er</i>), quindi <i>damit</i>. Sono corrette tutte e due le grafie, <i>selbstständig</i> e <i>selbständig</i>."
      },
      {
        q: "La pianificazione del signor Brandt.",
        setting: "La tutor ti chiede di presentare la pianificazione di un paziente allettato.",
        lines: [
          { tr: "Qual è il problema assistenziale del signor Brandt?" },
          { tr: "Rispondi che si muove poco e che per questo c'è un rischio di decubito.", answerTr: "Si muove poco, per questo c'è un rischio di decubito." },
          { tr: "E quale intervento pianifichiamo?" },
          { tr: "Rispondi che gli cambiate posizione regolarmente perché non si formi un decubito.", answerTr: "Gli cambiamo regolarmente posizione perché non si formi un decubito." },
          { tr: "Quale risorsa ha?" },
          { tr: "Rispondi che con un aiuto riesce a girarsi da solo.", answerTr: "Con un aiuto riesce a girarsi da solo." }
        ]
      },
      {
        tr: "Le offriamo regolarmente del tè, perché beva di più.",
        why: "In <i>regelmäßig</i> la <b>ß</b> è [s] sorda e la <b>g</b> finale si legge [ç]; in <i>damit</i> l'accento cade su <b>mit</b>; in <i>trinkt</i> la <b>nk</b> è [ŋk]."
      },
      {
        tr: "Cambiamo regolarmente posizione alla signora Keller perché non si formi una piaga da decubito.",
        why: "In <i>lagern</i> la <b>-ern</b> finale si legge quasi [ɐn]; in <i>Dekubitus</i> l'accento cade su <b>ku</b>, con la <b>u</b> lunga; in <i>entsteht</i> la <b>st</b> si legge [ʃt] e la <b>h</b> è muta."
      }
    ]
  },
  "lesson:pfl-u06-l4": {
    theme: "Abbreviazioni",
    title: "Le abbreviazioni di reparto",
    objectives: [
      "leggere e sciogliere le abbreviazioni più comuni: AZ, EZ, VZ, BZ, RR, o.B., p.o., b.B.",
      "dirle a voce con i colleghi e tradurle in parole semplici per il paziente",
      "sapere dove cercare un'abbreviazione che non conosci",
      "riconoscere che b.B. non vuol dire «a discrezione»"
    ],
    theory: [
      {
        h: "Le abbreviazioni più comuni",
        p: "Nel rapporto e nella <strong>Kurve</strong> (la cartella dei parametri) le abbreviazioni sono ovunque: <em>AZ</em> Allgemeinzustand, lo stato generale; <em>EZ</em> Ernährungszustand, lo stato nutrizionale; <em>VZ</em> Vitalzeichen, i parametri vitali; <em>BZ</em> Blutzucker, la glicemia; <em>RR</em> la pressione arteriosa; <em>o.B.</em> ohne Befund, senza reperti patologici; <em>p.o.</em> per os, per bocca; <em>b.B.</em> bei Bedarf, al bisogno. Tra colleghi si leggono lettera per lettera (<em>A-Z, B-Z, o-B</em>) oppure si sciolgono. Ogni struttura ha un suo <strong>Abkürzungsverzeichnis</strong>: le abbreviazioni ammesse sono quelle dell'elenco della tua struttura, e la stessa sigla può variare da un reparto all'altro."
      },
      {
        h: "Due registri",
        p: "Le abbreviazioni sono <strong>Fachsprache</strong> scritta: servono tra colleghi e nei documenti. Con il paziente si torna alla <strong>Laiensprache</strong>: non <em>Ihr AZ ist reduziert</em>, ma <em>Sie sind im Moment etwas geschwächt</em>; non <em>VZ o.B.</em>, ma <em>Ihr Blutdruck, Ihr Puls und Ihre Temperatur sind in Ordnung.</em> E <em>b.B.</em> non è una decisione dell'infermiera: vuol dire che il medico ha prescritto un farmaco da dare quando serve, alle condizioni scritte nella prescrizione."
      },
      {
        contrast: "Chi viene dall'Italia conosce già alcune di queste sigle: <em>RR</em> viene da Riva-Rocci, il medico italiano che ha inventato lo sfigmomanometro a bracciale, e in Germania si usa ancora per la pressione; <em>p.o.</em> è il latino «per os» che si scrive anche in Italia. Altre invece non hanno equivalente italiano: nessuno scrive «SG ridotto» per lo stato generale, mentre in tedesco <em>AZ reduziert</em> è una formula quotidiana. Lo stesso vale per <em>o.B.</em>: in italiano si scrive per esteso «nella norma» o «negativo», in tedesco la sigla basta. Il tedesco di reparto abbrevia molto più dell'italiano, e lo stile nominale della lezione precedente spesso si riduce a una riga di sigle: <em>AZ reduziert, EZ gut, VZ o.B.</em>"
      },
      {
        trap: "<em>ohne Befund</em> non vuol dire «senza esame» o «non controllato»: vuol dire che il controllo è stato fatto e non ha mostrato niente di patologico. <em>Die Kurve</em> in reparto non è la curva di un grafico, è la cartella in cui si registrano parametri e terapie. E <em>der Befund</em> da solo è il referto o il reperto: <em>Der Befund ist da</em> vuol dire che è arrivato il risultato, non che è positivo."
      },
      {
        tip: "Se non conosci un'abbreviazione, chiedi: <em>Was heißt das?</em> Nessuno in reparto si aspetta che tu conosca a memoria l'elenco della struttura, e un'abbreviazione letta male è un errore che passa di turno in turno. Quando scrivi tu, nel dubbio sciogli la sigla: <em>Schreib die Abkürzung im Zweifel aus.</em>"
      }
    ],
    grammar: {
      title: "Dalla sigla alla frase",
      note: "Con i colleghi: la sigla o la forma breve. Con il paziente: una frase completa in <b>Laiensprache</b>, senza sigle.",
      table: {
        head: ["sigla", "per esteso", "al paziente"],
        rows: [
          ["AZ reduziert", "Allgemeinzustand reduziert", "Sie sind im Moment etwas geschwächt."],
          ["VZ o.B.", "Vitalzeichen ohne Befund", "Ihr Blutdruck, Ihr Puls und Ihre Temperatur sind in Ordnung."],
          ["BZ", "Blutzucker", "Ich messe jetzt Ihren Blutzucker."],
          ["p.o.", "per os", "Bitte schlucken Sie die Tablette mit etwas Wasser."]
        ]
      },
      examples: [
        { tr: "Stato generale ridotto, stato nutrizionale buono.", note: "AZ e EZ: si leggono A-Z, E-Z" },
        { tr: "Parametri vitali nella norma.", note: "o.B.: senza reperti patologici, il controllo è stato fatto" },
        { tr: "Pressione e polso controllati, dottoressa informata.", note: "RR: da Riva-Rocci, la pressione arteriosa" },
        { tr: "Glicemia misurata prima del pranzo.", note: "BZ: Blutzucker" },
        { tr: "Compresse assunte per bocca.", note: "p.o.: per os, come in italiano" },
        { tr: "Antidolorifico al bisogno secondo la prescrizione medica.", note: "b.B.: solo alle condizioni prescritte dal medico" }
      ]
    },
    vocab: [
      "lo stato generale (AZ)",
      "lo stato nutrizionale (EZ)",
      "senza reperti patologici, nella norma (o.B.)",
      "per bocca (p.o.)",
      "ridotto",
      "la terapia al bisogno",
      "la cartella dei parametri e delle terapie",
      "la cartella del paziente",
      "l'abbreviazione",
      "la sigla (di chi scrive)",
      "l'elenco delle abbreviazioni",
      "scrivere per esteso"
    ],
    dialogue: [
      "Nel rapporto c'è scritto: AZ ridotto, EZ buono. Che cosa vuol dire?",
      "AZ è lo stato generale, EZ lo stato nutrizionale. Quindi è indebolita, ma ben nutrita.",
      "E VZ o.B.?",
      "I parametri vitali sono senza reperti patologici, cioè nella norma.",
      "Qui c'è ancora scritto: antidolorifico b.B. Posso darglielo e basta?",
      "Solo secondo la prescrizione medica nella cartella. Al bisogno vuol dire: quando ha dolore, non in automatico.",
      "E se non conosco un'abbreviazione?",
      "Allora chiedi. Con il paziente comunque parli senza abbreviazioni."
    ],
    culture: {
      title: "Uno sguardo tedesco: l'elenco delle abbreviazioni",
      text: "<p>Molti ospedali e strutture per anziani in Germania hanno un <i>Abkürzungsverzeichnis</i> interno, che stabilisce quali sigle si possono usare nella documentazione. Il motivo è la sicurezza: una sigla con due significati, letta da qualcuno che arriva da un altro reparto, può portare a un errore.</p><p>Per questo le regole interne chiedono spesso di scrivere per esteso proprio le informazioni più delicate, come i nomi dei farmaci e le prescrizioni. Quando inizi in una struttura nuova, chiedi dove si trova l'elenco: è una delle prime cose utili da leggere.</p>"
    },
    exercises: [
      {
        q: "Nel rapporto leggi «VZ o.B.». Che cosa significa?",
        opts: [
          "I parametri vitali non sono stati misurati.",
          "I parametri vitali sono stati controllati e sono nella norma.",
          "I parametri vitali sono da ricontrollare."
        ],
        why: "<i>VZ</i> sono i <i>Vitalzeichen</i>, e <b>o.B.</b> vuol dire <i>ohne Befund</i>: il controllo è stato fatto e non ha mostrato niente di patologico."
      },
      {
        q: "Completa: «Tabletten werden ___ eingenommen, also über den Mund.»",
        hint: "la sigla latina, con i punti",
        why: "<b>p.o.</b>, cioè <i>per os</i>: per bocca, come in italiano."
      },
      {
        q: "Abbina ogni abbreviazione al suo significato.",
        pairs: ["lo stato generale", "lo stato nutrizionale", "la glicemia", "i parametri vitali"]
      },
      {
        q: "Scegli l'articolo determinativo giusto per ogni nome.",
        items: ["stato generale", "stato nutrizionale", "cartella dei parametri", "abbreviazione", "sigla di chi scrive", "elenco delle abbreviazioni"]
      },
      {
        q: "Quali frasi puoi dire a un paziente?",
        opts: [
          "Ihr Blutzucker ist in Ordnung.",
          "Ihr BZ ist o.B.",
          "Sie bekommen ein Schmerzmittel, wenn Sie Schmerzen haben.",
          "Ihr AZ ist reduziert.",
          "Ihre Werte sind unauffällig."
        ],
        why: "Con il paziente si parla senza sigle e senza formule della documentazione. <i>BZ o.B.</i> e <i>AZ reduziert</i> sono corrette tra colleghi, ma il paziente non le capisce."
      },
      {
        q: "Scrivi per esteso le due abbreviazioni.",
        tr: "Stato generale ridotto, stato nutrizionale buono.",
        why: "<i>AZ</i> sta per <b>Allgemeinzustand</b>, <i>EZ</i> per <b>Ernährungszustand</b>. Tutti e due sono maschili: <i>der Zustand</i>."
      },
      {
        q: "Metti in ordine le parole.",
        tr: "I parametri vitali sono nella norma.",
        why: "<i>Die Vitalzeichen sind ohne Befund.</i> È la forma per esteso di <i>VZ o.B.</i>; <i>Vitalzeichen</i> qui è plurale, quindi <i>sind</i>."
      },
      {
        q: "Traduci (nel rapporto): «Lo stato generale è buono.»",
        why: "<i>Der Allgemeinzustand ist gut</i>, oppure in forma breve <i>Allgemeinzustand gut</i> o <i>AZ gut</i>."
      },
      {
        q: "La paziente legge il rapporto.",
        setting: "La signora Keller ha letto alcune sigle nei suoi documenti e ti chiede che cosa vogliono dire.",
        lines: [
          { tr: "Nel mio rapporto c'è scritto AZ ridotto. Che cosa vuol dire?" },
          { tr: "Rispondi senza sigle: vuol dire che in questo momento è un po' indebolita.", answerTr: "Vuol dire che in questo momento Lei è un po' indebolita." },
          { tr: "E che cosa vuol dire o.B. accanto ai parametri vitali?" },
          { tr: "Rispondi che pressione, polso e temperatura sono a posto.", answerTr: "La Sua pressione, il Suo polso e la Sua temperatura sono a posto." },
          { tr: "Mi date un antidolorifico, se ho male?" },
          { tr: "Rispondi che deve dirtelo quando ha dolore: la dottoressa ha prescritto un antidolorifico.", answerTr: "Sì, mi avvisi quando ha dolore. La dottoressa ha prescritto un antidolorifico." }
        ]
      },
      {
        tr: "I parametri vitali sono senza reperti patologici, cioè nella norma.",
        why: "In <i>Vitalzeichen</i> la <b>V</b> si legge [v], come in italiano, e la <b>z</b> è [ts]; in <i>Befund</i> la <b>d</b> finale si legge [t]; in <i>unauffällig</i> l'accento cade su <b>un</b>."
      },
      {
        tr: "Con il paziente parliamo senza abbreviazioni.",
        why: "In <i>Patienten</i> la <b>ti</b> si legge [tsi]; in <i>sprechen</i> la <b>sp</b> iniziale è [ʃp]; in <i>Abkürzungen</i> l'accento cade su <b>Ab</b> e la <b>ü</b> è breve."
      }
    ]
  },
  "lesson:pfl-u06-test": {
    theme: "Verifica",
    title: "Test: Consegna e rapporto di cura",
    objectives: [
      "verificare il Präteritum della consegna, i connettivi, lo stile nominale, il passivo, le finali e le abbreviazioni di reparto"
    ],
    theory: [
      {
        p: "Undici domande sull'intera unità. Si supera con il 70%. I pazienti e le situazioni sono inventati e servono solo come esempio: che cosa si documenta e quali abbreviazioni si usano lo stabiliscono le regole della struttura."
      }
    ],
    exercises: [
      {
        q: "In consegna: «Herr Brandt ___ in der Nacht starke Schmerzen.»",
        opts: ["war", "hatte", "wurde"],
        why: "<i>Schmerzen haben</i>, al Präteritum <b>hatte</b>: la forma che si usa anche a voce."
      },
      {
        q: "Completa: «Der Verband ___ gestern gewechselt.»",
        hint: "passivo al Präteritum",
        why: "<b>wurde</b>: il passivo al Präteritum, con il participio <i>gewechselt</i> in fondo."
      },
      {
        q: "Completa: «Wir lagern ihn regelmäßig um, ___ kein Dekubitus entsteht.»",
        hint: "finale, soggetti diversi",
        why: "<b>damit</b>: i soggetti sono diversi (<i>wir</i> e <i>kein Dekubitus</i>) e il verbo coniugato <i>entsteht</i> va in fondo."
      },
      {
        tr: "Il Präteritum di haben, tutte le persone.",
        why: "<i>Hatte, hattest, hatte, hatten, hattet, hatten</i>: la <b>b</b> di <i>haben</i> cade e la <b>t</b> si raddoppia."
      },
      {
        q: "Abbina ogni abbreviazione al suo significato.",
        pairs: ["lo stato generale", "lo stato nutrizionale", "al bisogno", "per bocca"]
      },
      {
        q: "Quali voci sono corrette in un rapporto di cura?",
        opts: [
          "Verweigerung der Nahrungsaufnahme am Abend.",
          "Ärztin geinformiert.",
          "VZ o.B., AZ stabil.",
          "Patientin war heute wieder nervig.",
          "Verband gewechselt, Wunde unauffällig."
        ],
        why: "<i>informiert</i> non prende <i>ge-</i>, perché il verbo finisce in <i>-ieren</i>. <i>nervig</i> è un giudizio, non un'osservazione."
      },
      {
        q: "Completa la frase.",
        tr: "Era agitata, per questo ho informato la dottoressa.",
        why: "<i>Sie <b>war</b> unruhig</i>: sein al Präteritum. <i><b>deshalb</b> habe ich</i>: dopo il connettivo viene subito il verbo."
      },
      {
        q: "Metti in ordine le parole.",
        tr: "Lo mobilizziamo ogni giorno perché resti autonomo.",
        why: "<i>Wir mobilisieren ihn täglich, damit er selbstständig bleibt.</i> Dopo <i>damit</i> il verbo coniugato <i>bleibt</i> va in fondo."
      },
      {
        q: "Scegli l'articolo determinativo giusto per ogni nome.",
        items: ["consegna", "rapporto di cura", "obiettivo assistenziale", "stato di salute percepito", "stato generale", "intervento"]
      },
      {
        tr: "Nella notte la signora Keller è stata agitata, per questo ho informato la dottoressa.",
        why: "In <i>unruhig</i> l'accento cade su <b>un</b> e la <b>g</b> finale si legge [ç]; in <i>deshalb</i> la <b>s</b> e la <b>h</b> si pronunciano separate; in <i>informiert</i> l'accento cade su <b>miert</b>."
      },
      {
        tr: "Le offriamo spesso del tè perché beva di più.",
        why: "In <i>bieten</i> la <b>ie</b> è lunga; in <i>Tee</i> la doppia <b>e</b> è una <b>e</b> lunga e chiusa; in <i>trinkt</i> la <b>nk</b> è [ŋk]."
      }
    ]
  }
});
