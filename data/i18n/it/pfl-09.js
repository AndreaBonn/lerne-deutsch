/* ============================================================
   Learner-language text (it) for data/core/pfl-09.js, unit pfl-u09.
   Keys point at ids in the neutral layer; arrays merge by index,
   so their length has to match core.
   Checked by scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("it", {
  "unit:pfl-u09": {
    title: "Igiene, ferite e dimissione",
    grammarNote: "l'imperativo di cortesia per le misure di igiene · il passivo presente e al Präteritum · la declinazione dell'aggettivo nella descrizione di una ferita · il Futur I per spiegare che cosa succederà dopo la dimissione · i verbi modali per compiti, permessi e obblighi"
  },
  "lesson:pfl-u09-l1": {
    theme: "Igiene e isolamento",
    title: "Igiene e isolamento",
    objectives: [
      "spiegare a un paziente e ai familiari le misure di igiene con l'imperativo di cortesia",
      "dire che cosa viene fatto con il passivo: werden desinfiziert, wurde gefunden",
      "spiegare un isolamento in parole semplici, senza allarmare",
      "distinguere Infektion e Ansteckung, Keim ed Erreger"
    ],
    theory: [
      {
        h: "Spiegare una misura di igiene",
        p: "Con pazienti e visitatori le misure di igiene si spiegano con l'<strong>imperativo di cortesia</strong>, sempre con <em>bitte</em>: <em>Desinfizieren Sie sich bitte die Hände. Ziehen Sie bitte einen Schutzkittel an.</em> Il verbo va al primo posto, <em>Sie</em> subito dopo; il prefisso separabile va in fondo (<em>ziehen ... an</em>). Quando conta che cosa si fa e non chi lo fa, si usa il <strong>passivo</strong>: <em>Die Hände <b>werden</b> desinfiziert. Das Zimmer <b>wird</b> jeden Tag gereinigt.</em> Per un fatto già successo, il passivo al Präteritum: <em>Bei Herrn Brandt <b>wurde</b> ein Keim gefunden.</em>"
      },
      {
        h: "Isolamento: che cosa dire al paziente",
        p: "Un paziente isolato spesso ha paura o si sente trattato come pericoloso. Spiega il motivo in parole semplici e metti al centro la protezione degli altri: <em>Wir wollen verhindern, dass sich andere Patienten anstecken.</em> Che cosa significa il germe per la sua salute lo spiega il medico: <em>Die Ärztin bespricht mit Ihnen, was das für Sie bedeutet.</em> Le misure concrete (camice, guanti, visite, uscite dalla stanza) le stabilisce il piano di igiene della struttura; gli esempi di questa lezione servono solo per la lingua."
      },
      {
        contrast: "In italiano «infezione» va bene sia con il medico sia con il paziente, e «contagio» indica il passaggio da una persona all'altra. In tedesco <em>die Infektion</em> è comprensibile anche ai pazienti, ma la parola di tutti i giorni per il passaggio è <em>die Ansteckung</em>, con il verbo <em>sich anstecken</em> e l'aggettivo <em>ansteckend</em> («contagioso»): <em>Ist das ansteckend?</em> è la domanda che sentirai più spesso. Anche la sigla cambia: in italiano si dice «MRSA» o «germe multiresistente»; in tedesco si dice <em>MRSA</em>, ma lettera per lettera all'alfabeto tedesco (<em>em-er-es-a</em>), e in molte strutture si usa la sigla più ampia <em>MRE</em>, <em>multiresistente Erreger</em>. Il paziente di solito dice <em>Krankenhauskeim</em>: non è un termine preciso, ma è la sua parola, e conviene capirla."
      },
      {
        trap: "<em>desinfizieren</em> finisce in <em>-ieren</em>, quindi al participio non prende <em>ge-</em>: <em>Die Hände werden desinfiziert</em>, mai <em>gedesinfiziert</em>. Con le parti del corpo il tedesco usa il pronome riflessivo al dativo, come l'italiano «disinfettarsi le mani»: <em>Desinfizieren Sie <b>sich</b> die Hände</em>. E <em>der Schutzkittel</em> è il camice protettivo monouso o lavabile, non il cappotto (<em>der Mantel</em>)."
      },
      {
        tip: "Quando spieghi una misura, mostra mentre parli: indica il dispenser, prendi un camice in mano. La parola resta più facilmente se il paziente la collega a un oggetto, e tu non devi cercare un sinonimo se non ti capisce."
      }
    ],
    grammar: {
      title: "Imperativo di cortesia e passivo",
      note: "Imperativo: <b>verbo + Sie</b> (+ bitte), il prefisso separabile in fondo. Passivo presente: <b>wird / werden</b> + participio; passivo al Präteritum: <b>wurde / wurden</b> + participio.",
      table: {
        head: ["forma", "struttura", "esempio"],
        rows: [
          ["imperativo di cortesia", "verbo + Sie + bitte", "Desinfizieren Sie sich bitte die Hände."],
          ["imperativo, verbo separabile", "verbo + Sie ... prefisso", "Ziehen Sie bitte einen Schutzkittel an."],
          ["passivo presente", "wird / werden + participio", "Die Hände werden desinfiziert."],
          ["passivo Präteritum", "wurde / wurden + participio", "Ein Erreger wurde gefunden."]
        ]
      },
      examples: [
        { tr: "Si disinfetti le mani, per favore.", note: "imperativo di cortesia, riflessivo con le parti del corpo: sich die Hände" },
        { tr: "Prima di entrare indossi un camice protettivo, per favore.", note: "anziehen è separabile: an va in fondo" },
        { tr: "Prima della visita si presenti nella stanza del personale, per favore.", note: "sich melden: riflessivo, anche all'imperativo" },
        { tr: "Le mani vengono disinfettate prima e dopo ogni contatto con il paziente.", note: "passivo presente al plurale: werden + desinfiziert, senza ge-" },
        { tr: "Nel signor Brandt è stato trovato un germe multiresistente.", note: "passivo al Präteritum: wurde + gefunden" },
        { tr: "La stanza viene pulita ogni giorno.", note: "passivo presente: wird + gereinigt" }
      ]
    },
    vocab: [
      "l'igiene",
      "l'infezione (anche termine tecnico)",
      "il contagio (parola di tutti i giorni)",
      "la disinfezione delle mani",
      "disinfettare",
      "l'isolamento",
      "isolare",
      "il germe",
      "l'agente patogeno",
      "il camice protettivo",
      "il guanto",
      "trasmettere"
    ],
    dialogue: [
      "Buongiorno, signor Brandt. Devo spiegarLe una cosa. Le hanno trovato un germe contro il quale molti antibiotici non funzionano.",
      "È pericoloso?",
      "La dottoressa Le spiegherà che cosa significa per Lei. Noi vogliamo soprattutto evitare che altri pazienti si contagino.",
      "Per questo la stanza singola?",
      "Esatto. Per un po' di tempo sarà isolato. Chi viene da Lei indossa un camice protettivo e i guanti.",
      "E mia moglie? Vuole venire a trovarmi domani.",
      "Prima Sua moglie si presenti nella stanza del personale, per favore: lì le spieghiamo tutto.",
      "E io che cosa devo fare?",
      "Si disinfetti le mani, per favore, e ci avvisi prima di uscire dalla stanza."
    ],
    culture: {
      title: "Uno sguardo tedesco: il piano di igiene",
      text: "<p>In Germania ogni ospedale e ogni struttura di assistenza ha un <i>Hygieneplan</i>, il piano di igiene, che stabilisce che cosa si fa, quando e con che cosa. Le raccomandazioni nazionali vengono dalla KRINKO, la commissione per l'igiene ospedaliera presso il <i>Robert Koch-Institut</i>. Nelle strutture più grandi c'è una <i>Hygienefachkraft</i>, un'infermiera o un infermiere con formazione specifica in igiene: è la persona a cui chiedere quando una regola non è chiara.</p><p>Chi arriva da un altro paese trova spesso misure simili a quelle che conosce, ma nomi e dettagli cambiano da struttura a struttura: il piano di igiene del reparto vale più di quello che hai imparato altrove.</p>"
    },
    exercises: [
      {
        q: "Chiedi gentilmente a un visitatore di disinfettarsi le mani. Quale frase è corretta?",
        opts: [
          "Desinfizieren Sie sich bitte die Hände.",
          "Sie desinfizieren bitte sich die Hände.",
          "Desinfiziert Sie sich bitte die Hände."
        ],
        why: "Nell'imperativo di cortesia il verbo va al primo posto e ha la forma dell'infinito: <b>Desinfizieren Sie</b>. <i>Desinfiziert</i> è la forma di <i>ihr</i> e non si combina con <i>Sie</i>; in <i>Sie desinfizieren bitte sich</i> il pronome <i>sich</i> è fuori posto (va subito dopo il verbo), e comunque è una frase affermativa, non l'imperativo richiesto."
      },
      {
        tr: "Il presente di desinfizieren, tutte le persone.",
        why: "<i>Desinfiziere, desinfizierst, desinfiziert, desinfizieren, desinfiziert, desinfizieren</i>: verbo regolare in <i>-ieren</i>, l'accento resta sempre su <b>zie</b>."
      },
      {
        q: "Completa: «Die Hände ___ vor jedem Patientenkontakt desinfiziert.»",
        hint: "passivo presente, plurale",
        why: "<b>werden</b>: il soggetto <i>die Hände</i> è plurale, quindi <i>werden</i> + participio <i>desinfiziert</i> in fondo."
      },
      {
        q: "Completa la frase.",
        tr: "Nel signor Brandt è stato trovato un germe multiresistente.",
        why: "<i>Bei Herrn Brandt <b>wurde</b> ein multiresistenter Erreger <b>gefunden</b></i>: passivo al Präteritum, <i>wurde</i> al secondo posto e il participio in fondo. Nei referti si legge anche <i>nachgewiesen</i>, «rilevato»."
      },
      {
        q: "Quali frasi puoi dire a un visitatore?",
        opts: [
          "Ziehen Sie bitte einen Schutzkittel an.",
          "Ziehen Sie bitte an einen Schutzkittel.",
          "Desinfizieren Sie sich bitte die Hände.",
          "Melden Sie sich bitte vorher im Stationszimmer.",
          "Desinfizierst du Sie bitte die Hände."
        ],
        why: "<i>anziehen</i> è separabile: il prefisso <i>an</i> va in fondo, non davanti al complemento. <i>Desinfizierst du Sie</i> mescola il tu e il Lei: con un visitatore si usa <i>Desinfizieren Sie sich</i>."
      },
      {
        q: "Scegli l'articolo determinativo giusto per ogni nome.",
        items: ["igiene", "infezione", "isolamento", "germe", "agente patogeno", "camice protettivo"]
      },
      {
        q: "Abbina ogni parola al suo significato.",
        pairs: ["la disinfezione delle mani", "il camice protettivo", "il guanto", "il germe"]
      },
      {
        q: "Metti in ordine le parole.",
        tr: "I germi vengono spesso trasmessi attraverso le mani.",
        why: "<i>Keime werden oft über die Hände übertragen.</i> Passivo presente: <i>werden</i> al secondo posto, il participio <i>übertragen</i> in fondo. <i>übertragen</i> non si separa e non prende <i>ge-</i>."
      },
      {
        q: "Traduci (a un visitatore): «Si disinfetti le mani, per favore.»",
        why: "<i>Desinfizieren Sie sich bitte die Hände</i>: verbo al primo posto, <i>Sie</i>, il riflessivo <i>sich</i> e <i>bitte</i>. Va bene anche <i>Bitte desinfizieren Sie sich die Hände</i> o <i>Desinfizieren Sie bitte Ihre Hände</i>."
      },
      {
        q: "Spiegare l'isolamento.",
        setting: "Il signor Brandt è stato spostato in una stanza singola e ti fa delle domande.",
        lines: [
          { tr: "Perché sono da solo in una stanza?" },
          { tr: "Rispondi che gli è stato trovato un germe, per questo viene isolato.", answerTr: "Le è stato trovato un germe, per questo viene isolato." },
          { tr: "Mia figlia vuole venire a trovarmi oggi." },
          { tr: "Rispondi che prima deve presentarsi nella stanza del personale.", answerTr: "Prima Sua figlia si presenti nella stanza del personale, per favore." },
          { tr: "Che cosa deve indossare nella stanza?" },
          { tr: "Rispondi: un camice protettivo e i guanti.", answerTr: "Un camice protettivo e i guanti." }
        ]
      },
      {
        tr: "Chi viene da Lei indossa un camice protettivo e i guanti.",
        why: "In <i>zieht</i> la <b>z</b> è [ts] e la <b>h</b> non si pronuncia; in <i>Schutzkittel</i> l'accento cade su <b>Schutz</b> e <b>tz</b> è [ts]; in <i>Handschuhe</i> la <b>d</b> di <i>Hand</i> si legge [t] e l'accento cade su <b>Hand</b>."
      },
      {
        tr: "Si disinfetti le mani, per favore.",
        why: "In <i>Desinfizieren</i> l'accento cade su <b>zie</b>; in <i>Sie</i> e in <i>sich</i> la <b>s</b> iniziale è sonora, [z]; in <i>Hände</i> la <b>ä</b> si legge come una <b>e</b> aperta."
      }
    ]
  },
  "lesson:pfl-u09-l2": {
    theme: "Descrivere una ferita",
    title: "Ferite e cambio della medicazione",
    objectives: [
      "descrivere una ferita con colore, forma, margini e secrezione",
      "declinare l'aggettivo davanti al nome: eine gerötete Wunde, der alte Verband",
      "distinguere l'aggettivo dopo sein, senza desinenza, da quello davanti al nome",
      "parlare della ferita con il paziente senza fare diagnosi"
    ],
    theory: [
      {
        h: "Descrivere, non valutare",
        p: "Nella descrizione di una ferita conta che cosa si vede, si tocca e si misura: dove si trova (<em>am Unterschenkel</em>), com'è il margine (<em>der Wundrand ist leicht gerötet</em>), se c'è secrezione (<em>etwas Wundsekret</em>), come è la pelle intorno (<em>warm, geschwollen</em>). Se qualcosa cambia, lo descrivi e informi: <em>Die Rötung ist größer geworden. Ich informiere die Ärztin.</em> Come si tratta la ferita lo stabiliscono il medico e lo standard della struttura; questa lezione insegna solo le parole per descriverla."
      },
      {
        h: "L'aggettivo: con o senza desinenza",
        p: "Dopo <em>sein</em> l'aggettivo resta invariato: <em>Die Wunde <b>ist</b> gerötet. Der Verband <b>war</b> feucht.</em> Davanti al nome prende una desinenza. Dopo <em>der, die, das</em> al nominativo singolare la desinenza è <b>-e</b>: <em>der alt<b>e</b> Verband, die klein<b>e</b> Wunde</em>. Dopo <em>ein, eine</em> la desinenza mostra il genere: <em>ein geschwollen<b>er</b> Knöchel, eine gerötet<b>e</b> Wunde, ein klein<b>es</b> Hämatom</em>. Anche i participi usati come aggettivi (<em>gerötet, geschwollen</em>) seguono le stesse regole."
      },
      {
        contrast: "In italiano «infiammazione» è la parola di tutti i giorni, e per questo viene spontaneo dire <em>Inflammation</em>. In tedesco <em>die Inflammation</em> esiste, ma di solito si trova nei testi medici; in reparto, anche tra colleghi, si dice quasi sempre <em>die Entzündung</em>, con l'aggettivo <em>entzündet</em>: <em>Die Wunde ist entzündet.</em> Il registro latino resta nelle parole in <em>-itis</em> (<em>Bronchitis, Arthritis</em>), che il paziente spesso conosce. Lo stesso vale per i segni: l'italiano «rubor, tumor, calor» si studia in latino, il tedesco li dice con parole comuni, <em>Rötung, Schwellung, Überwärmung</em>."
      },
      {
        trap: "<em>die Medikation</em> non è la «medicazione»: vuol dire «la terapia farmacologica». La medicazione come materiale è <em>der Verband</em>, il cambio della medicazione è <em>der Verbandswechsel</em>. E attenzione al verbo: la medicazione si cambia con <em>wechseln</em> (<em>Der Verband wird gewechselt</em>), non con <em>ändern</em>."
      },
      {
        tip: "Descrivi la ferita sempre nello stesso ordine: sede, dimensione, fondo, margine, secrezione, pelle intorno. Con uno schema fisso non dimentichi niente, e chi legge la tua descrizione il giorno dopo può confrontarla con la sua."
      }
    ],
    grammar: {
      title: "L'aggettivo nella descrizione",
      note: "Dopo <b>sein</b>: nessuna desinenza (<i>Die Wunde ist gerötet</i>). Davanti al nome, nominativo: dopo <b>der/die/das</b> → <b>-e</b>; dopo <b>ein/eine</b> → <b>-er</b> (maschile), <b>-e</b> (femminile), <b>-es</b> (neutro).",
      table: {
        head: ["posizione", "maschile", "femminile", "neutro"],
        rows: [
          ["dopo sein", "Der Verband ist feucht.", "Die Wunde ist gerötet.", "Das Bein ist geschwollen."],
          ["dopo der / die / das", "der feuchte Verband", "die gerötete Wunde", "das geschwollene Bein"],
          ["dopo ein / eine", "ein feuchter Verband", "eine gerötete Wunde", "ein geschwollenes Bein"]
        ]
      },
      examples: [
        { tr: "La ferita è arrossata e gonfia.", note: "dopo ist: gerötet e geschwollen senza desinenza" },
        { tr: "Sulla parte inferiore della gamba c'è una piccola ferita arrossata.", note: "eine + femminile: kleine, gerötete" },
        { tr: "Il margine della ferita è leggermente arrossato.", note: "dopo ist nessuna desinenza; leicht modifica gerötet" },
        { tr: "La vecchia medicazione era umida.", note: "der + nominativo: alte; dopo war: feucht senza desinenza" },
        { tr: "La nuova medicazione tiene bene.", note: "der + nominativo: neue" },
        { tr: "La ferita non mostra segni di infiammazione.", note: "einer Entzündung: genitivo femminile" }
      ]
    },
    vocab: [
      "la ferita",
      "l'infiammazione",
      "l'infiammazione (termine tecnico)",
      "l'arrossamento",
      "il gonfiore",
      "arrossato",
      "gonfio",
      "il margine della ferita",
      "la secrezione della ferita",
      "la medicazione, la fasciatura",
      "il cambio della medicazione",
      "la documentazione della ferita"
    ],
    dialogue: [
      "Mi aiuti con il cambio della medicazione del signor Brandt?",
      "Certo. Com'era la ferita ieri?",
      "Il margine era leggermente arrossato, ma asciutto.",
      "E oggi? La vecchia medicazione è piuttosto umida.",
      "Sì, c'è un po' di secrezione. L'arrossamento si è allargato e la pelle al tatto è calda.",
      "Potrebbe essere un segno di infiammazione.",
      "Esatto. Documento la ferita con una foto e informo la dottoressa.",
      "Bene. Allora dopo il giro visita vediamo come procedere."
    ],
    culture: {
      title: "Uno sguardo tedesco: la documentazione della ferita",
      text: "<p>In molti ospedali e servizi tedeschi la ferita si documenta su un modulo apposito, il <i>Wunddokumentationsbogen</i>, spesso con una foto e un righello di carta accanto alla ferita. Le ferite croniche sono seguite in molte strutture da personale con una formazione specifica, per esempio i <i>Wundexperten</i> formati secondo i corsi dell'ICW (<i>Initiative Chronische Wunden</i>).</p><p>Le foto delle ferite sono dati sanitari: si fanno con i dispositivi della struttura, non con il telefono personale. Le regole precise le trovi nelle indicazioni del reparto.</p>"
    },
    exercises: [
      {
        q: "Descrivi la ferita: il margine è leggermente arrossato. Quale frase è corretta?",
        opts: [
          "Der Wundrand ist leicht gerötete.",
          "Der Wundrand hat leicht gerötet.",
          "Der Wundrand ist leicht gerötet."
        ],
        why: "Dopo <i>sein</i> l'aggettivo resta senza desinenza: <b>ist gerötet</b>. <i>hat gerötet</i> sarebbe un Perfekt attivo («ha arrossato») e non descrive uno stato."
      },
      {
        q: "Completa: «Am Unterschenkel ist eine ___ Wunde.»",
        hint: "piccola",
        why: "<b>kleine</b>: dopo <i>eine</i>, al nominativo femminile, l'aggettivo prende <b>-e</b>."
      },
      {
        q: "Completa la frase.",
        tr: "La vecchia medicazione era umida, quella nuova tiene bene.",
        why: "<i>der <b>alte</b> Verband</i>, <i>der <b>neue</b> Verband</i>: dopo l'articolo determinativo, al nominativo maschile, la desinenza è <b>-e</b>."
      },
      {
        q: "Quali descrizioni sono corrette?",
        opts: [
          "Die Wunde ist gerötet und geschwollen.",
          "Eine gerötete Wunde am Unterschenkel.",
          "Ein geschwollener Knöchel.",
          "Der Wundrand ist gerötete.",
          "Eine kleiner Wunde am Fuß."
        ],
        why: "Dopo <i>ist</i> l'aggettivo non prende desinenza: <i>ist gerötet</i>, non <i>gerötete</i>. Dopo <i>eine</i> il femminile vuole <b>-e</b>: <i>eine kleine Wunde</i>."
      },
      {
        q: "Abbina ogni parola al suo significato.",
        pairs: ["l'arrossamento", "il gonfiore", "la secrezione della ferita", "il margine della ferita"]
      },
      {
        q: "Scegli l'articolo determinativo giusto per ogni nome.",
        items: ["ferita", "infiammazione", "medicazione", "cambio della medicazione", "secrezione della ferita", "margine della ferita"]
      },
      {
        q: "Metti in ordine le parole.",
        tr: "La ferita non mostra segni di infiammazione.",
        why: "<i>Die Wunde zeigt keine Zeichen einer Entzündung.</i> <i>einer Entzündung</i> è un genitivo femminile: «di un'infiammazione»."
      },
      {
        q: "Traduci (nel rapporto): «La ferita è asciutta e pulita.»",
        why: "<i>Die Wunde ist trocken und sauber</i>: dopo <i>ist</i> gli aggettivi restano senza desinenza. Nel rapporto si scrive anche in forma breve: <i>Wunde trocken und sauber</i>."
      },
      {
        q: "Il paziente chiede della sua ferita.",
        setting: "Durante il cambio della medicazione il signor Brandt è preoccupato e ti fa delle domande.",
        lines: [
          { tr: "La mia ferita è infiammata?" },
          { tr: "Rispondi che è un po' arrossata e che la dottoressa la guarda oggi.", answerTr: "La ferita è un po' arrossata. La dottoressa la guarda oggi." },
          { tr: "Perché la medicazione è così bagnata?" },
          { tr: "Rispondi che è secrezione, cioè liquido che esce dalla ferita, e che lo annoti.", answerTr: "È secrezione, cioè liquido che esce dalla ferita. Lo annoto." },
          { tr: "Il cambio della medicazione fa male?" },
          { tr: "Rispondi che lavori con molta cautela e che deve dirtelo subito se fa male.", answerTr: "Lavoro con molta cautela. Me lo dica subito se fa male." }
        ]
      },
      {
        tr: "Sì, c'è un po' di secrezione. L'arrossamento si è allargato e la pelle al tatto è calda.",
        why: "In <i>Rötung</i> e in <i>größer</i> la <b>ö</b> è lunga; in <i>größer</i> la <b>ß</b> è una <b>s</b> sorda; in <i>warm</i> la <b>w</b> si legge [v]; in <i>Wundsekret</i> l'accento cade su <b>Wund</b>."
      },
      {
        tr: "Il margine della ferita è leggermente arrossato.",
        why: "In <i>Wundrand</i> le due <b>d</b> in fine di sillaba si leggono [t]; in <i>leicht</i> la <b>ch</b> dopo <b>i</b> è [ç]; in <i>gerötet</i> l'accento cade su <b>rö</b>, con <b>ö</b> lunga."
      }
    ]
  },
  "lesson:pfl-u09-l3": {
    theme: "Preparare la dimissione",
    title: "La dimissione",
    objectives: [
      "spiegare al paziente che cosa succederà dopo la dimissione con il Futur I",
      "distinguere il Futur I (wird kontrollieren) dal passivo (wird entlassen)",
      "nominare ausili, servizio domiciliare e grado di non autosufficienza",
      "rispondere senza promettere ciò che decide un'altra istituzione"
    ],
    theory: [
      {
        h: "Che cosa si dice al paziente",
        p: "Alla dimissione il paziente vuole sapere chi lo aiuterà, che cosa gli serve e a chi rivolgersi. Per annunciare chi farà che cosa si usa il <strong>Futur I</strong>: <em>Ein Pflegedienst <b>wird</b> Sie morgens <b>unterstützen</b>. Ihr Hausarzt <b>wird</b> die Wunde <b>kontrollieren</b>.</em> Il Futur I suona più impegnativo e più chiaro del presente, che pure è possibile (<em>Ein Pflegedienst kommt morgens</em>). Ciò che decidono altri, per esempio la cassa per la non autosufficienza, non si promette: <em>Das entscheidet die Pflegekasse.</em>"
      },
      {
        h: "Futur I o passivo?",
        p: "Tutti e due usano <em>werden</em>, ma con forme diverse del verbo. Il <strong>Futur I</strong> vuole <em>werden</em> + <b>infinito</b>: <em>Der Hausarzt wird die Wunde <b>kontrollieren</b></em> («controllerà»). Il <strong>passivo</strong> vuole <em>werden</em> + <b>participio</b>: <em>Sie werden am Freitag <b>entlassen</b></em> («viene dimessa»). Con <em>entlassen</em> le due forme si confondono facilmente, perché infinito e participio sono uguali: la frase <em>Sie werden am Freitag entlassen</em> è un passivo presente con senso futuro, non un Futur I."
      },
      {
        contrast: "In Italia si parla di «dimissione protetta» e di «continuità assistenziale». In Germania l'organizzazione della dimissione si chiama <em>das Entlassmanagement</em>, e per gli ospedali è previsto dalla legge (§ 39 SGB V). La parola <em>die Überleitung</em> indica il passaggio verso chi assiste dopo: il servizio domiciliare, la casa di cura, il medico di famiglia; il modulo che accompagna il paziente è il <em>Überleitungsbogen</em>. Senza equivalente in italiano è <em>der Pflegegrad</em>: un grado da 1 a 5 che misura quanto una persona è autonoma nella vita quotidiana e che dà diritto a prestazioni della <em>Pflegekasse</em>. Non coincide con l'invalidità civile né con l'indennità di accompagnamento, e lo stabilisce la cassa dopo una valutazione, di solito del <em>Medizinischer Dienst</em>."
      },
      {
        trap: "<em>entlassen</em> vuol dire «dimettere» un paziente, ma anche «licenziare» un dipendente: <em>Er wurde entlassen</em> senza contesto può essere l'una o l'altra cosa. Il paziente stesso dice spesso <em>Ich darf nach Hause</em> o <em>Ich komme raus</em>. E <em>der Arztbrief</em> non è una lettera qualsiasi: è la relazione del medico che accompagna la dimissione, che in italiano si chiama «lettera di dimissione»."
      },
      {
        tip: "Prima di parlare con il paziente, scrivi tre righe: chi viene a casa, quali ausili arrivano, chi controlla e quando. Poi spiegale in quest'ordine, con il Futur I. Alla fine chiedi: <em>Haben Sie noch Fragen?</em>, e se c'è un familiare, coinvolgilo."
      }
    ],
    grammar: {
      title: "Futur I e passivo con werden",
      note: "Futur I: <b>werden</b> coniugato + <b>infinito</b> in fondo. Passivo: <b>werden</b> coniugato + <b>participio</b> in fondo. Con <i>entlassen</i> infinito e participio coincidono: decide il senso.",
      table: {
        head: ["forma", "struttura", "esempio"],
        rows: [
          ["Futur I", "werden + infinito", "Ein Pflegedienst wird Sie morgens unterstützen."],
          ["Futur I, domanda", "werden al primo posto + infinito", "Werden Sie zu Hause allein zurechtkommen?"],
          ["passivo presente", "werden + participio", "Sie werden am Freitag entlassen."],
          ["passivo presente", "werden + participio", "Der Rollator wird geliefert."]
        ]
      },
      examples: [
        { tr: "Un servizio di assistenza domiciliare la aiuterà al mattino.", note: "wird + infinito unterstützen in fondo: Futur I" },
        { tr: "Sua figlia prenderà i farmaci in farmacia.", note: "Futur I: wird ... holen" },
        { tr: "Il Suo medico di famiglia controllerà la ferita la settimana prossima.", note: "Futur I: wird ... kontrollieren" },
        { tr: "Ordineremo il deambulatore in tempo.", note: "Futur I alla prima persona plurale: werden ... bestellen" },
        { tr: "Se la caverà da sola a casa?", note: "domanda: werden al primo posto, zurechtkommen in fondo" },
        { tr: "Venerdì viene dimessa.", note: "passivo presente con senso futuro: werden + participio entlassen" }
      ]
    },
    vocab: [
      "la dimissione",
      "dimettere (un paziente)",
      "la gestione della dimissione",
      "il passaggio di presa in carico",
      "il modulo di passaggio di presa in carico",
      "l'ausilio",
      "il servizio di assistenza (domiciliare)",
      "il grado di non autosufficienza",
      "la cassa per la non autosufficienza",
      "la lettera di dimissione del medico",
      "cavarsela",
      "organizzare"
    ],
    dialogue: [
      "Signora Keller, la dottoressa ha detto che venerdì verrà dimessa.",
      "Finalmente! Ma come farò a cavarmela a casa?",
      "Ne parliamo adesso. Domani verrà da Lei una collega della gestione della dimissione.",
      "E chi mi aiuta a lavarmi?",
      "Un servizio di assistenza domiciliare la aiuterà al mattino. Ne parliamo anche con Sua figlia.",
      "Mi serve un deambulatore?",
      "Sì. Ordineremo il deambulatore in tempo, così venerdì sarà già qui.",
      "E dopo devo ancora andare dal medico?",
      "Il Suo medico di famiglia controllerà la ferita la settimana prossima. Riceverà anche la lettera di dimissione."
    ],
    culture: {
      title: "Uno sguardo tedesco: la Pflegeversicherung",
      text: "<p>Dal 1995 la Germania ha un'assicurazione obbligatoria per la non autosufficienza, la <i>Pflegeversicherung</i>, gestita dalle <i>Pflegekassen</i> presso le casse malattia. Chi ha bisogno di assistenza presenta una domanda; una persona del <i>Medizinischer Dienst</i> (o di un altro servizio incaricato) valuta l'autonomia, di solito a casa, e la cassa assegna un <i>Pflegegrad</i> da 1 a 5. Dal grado dipendono le prestazioni: denaro per chi assiste in famiglia, servizi domiciliari, contributi per la casa di cura.</p><p>In ospedale l'infermiera non decide il grado, ma spesso è la prima a notare che a casa servirà aiuto, e lo segnala all'<i>Entlassmanagement</i>.</p>"
    },
    exercises: [
      {
        q: "Annunci alla paziente che un servizio di assistenza domiciliare la aiuterà a casa. Quale frase è corretta?",
        opts: [
          "Ein Pflegedienst wird Sie zu Hause unterstützt.",
          "Ein Pflegedienst wird Sie zu Hause unterstützen.",
          "Ein Pflegedienst werden Sie zu Hause unterstützen."
        ],
        why: "Futur I: <i>wird</i> + <b>infinito</b> in fondo, <b>unterstützen</b>. <i>wird ... unterstützt</i> è la struttura del passivo, e un passivo non ammette in più il complemento all'accusativo <i>Sie</i>: la frase è sgrammaticata; <i>werden</i> non concorda con il soggetto singolare <i>ein Pflegedienst</i>."
      },
      {
        tr: "Il presente di werden, tutte le persone.",
        why: "<i>Werde, wirst, wird, werden, werdet, werden</i>: alla seconda e alla terza persona singolare la <b>e</b> diventa <b>i</b>, e la <b>d</b> cade in <i>wirst</i> ma resta in <i>wird</i>."
      },
      {
        q: "Completa: «Ihr Hausarzt ___ die Wunde nächste Woche kontrollieren.»",
        hint: "Futur I, terza persona singolare",
        why: "<b>wird</b>: il Futur I usa <i>werden</i> coniugato al secondo posto e l'infinito <i>kontrollieren</i> in fondo."
      },
      {
        q: "Completa la frase.",
        tr: "Ordineremo il deambulatore in tempo.",
        why: "<i>Wir <b>werden</b> den Rollator rechtzeitig <b>bestellen</b></i>: Futur I alla prima persona plurale, l'infinito va in fondo."
      },
      {
        q: "Quali frasi sono al Futur I?",
        opts: [
          "Der Pflegedienst wird morgens kommen.",
          "Sie werden am Freitag entlassen.",
          "Ihre Tochter wird die Medikamente holen.",
          "Der Arztbrief wurde geschrieben.",
          "Wir werden den Überleitungsbogen ausfüllen."
        ],
        why: "Il Futur I è <i>werden</i> + infinito: <i>wird kommen</i>, <i>wird holen</i>, <i>werden ausfüllen</i>. <i>werden entlassen</i> qui è un passivo presente (participio), <i>wurde geschrieben</i> un passivo al Präteritum."
      },
      {
        q: "Abbina ogni parola al suo significato.",
        pairs: ["la gestione della dimissione", "l'ausilio", "il grado di non autosufficienza", "il servizio di assistenza domiciliare"]
      },
      {
        q: "Scegli l'articolo determinativo giusto per ogni nome.",
        items: ["dimissione", "gestione della dimissione", "passaggio di presa in carico", "ausilio", "servizio di assistenza", "grado di non autosufficienza"]
      },
      {
        q: "Metti in ordine le parole.",
        tr: "Un servizio di assistenza la aiuterà al mattino.",
        why: "<i>Ein Pflegedienst wird Sie morgens unterstützen.</i> <i>wird</i> al secondo posto, l'infinito <i>unterstützen</i> in fondo."
      },
      {
        q: "Traduci con il Futur I: «Il medico di famiglia controllerà la ferita la settimana prossima.»",
        why: "<i>Der Hausarzt wird die Wunde nächste Woche kontrollieren</i>: Futur I, l'infinito in fondo. <i>nächste Woche</i> (o <i>in der nächsten Woche</i>) può stare anche al primo posto: <i>Nächste Woche wird der Hausarzt ...</i>"
      },
      {
        q: "Domande sulla dimissione.",
        setting: "La signora Keller sa che sta per tornare a casa e ti fa delle domande.",
        lines: [
          { tr: "Quando posso tornare a casa?" },
          { tr: "Rispondi che probabilmente venerdì verrà dimessa.", answerTr: "Probabilmente venerdì verrà dimessa." },
          { tr: "Chi mi aiuta a lavarmi a casa?" },
          { tr: "Rispondi che un servizio di assistenza verrà da lei al mattino.", answerTr: "Un servizio di assistenza verrà da Lei al mattino." },
          { tr: "Mi daranno un grado di non autosufficienza?" },
          { tr: "Rispondi che lo decide la cassa e che la aiutate con la domanda.", answerTr: "Lo decide la cassa per la non autosufficienza. La aiutiamo con la domanda." }
        ]
      },
      {
        tr: "Un servizio di assistenza domiciliare la aiuterà al mattino. Ne parliamo anche con Sua figlia.",
        why: "In <i>Pflegedienst</i> si pronunciano sia la <b>p</b> sia la <b>f</b>; in <i>ambulanter</i> l'accento cade su <b>lan</b>; in <i>unterstützen</i> l'accento cade su <b>stüt</b>, e la <b>st</b> è [ʃt]."
      },
      {
        tr: "Il Suo medico di famiglia controllerà la ferita la settimana prossima.",
        why: "In <i>Hausarzt</i> l'accento cade su <b>Haus</b> e alla fine si sente [tst]; in <i>nächste</i> la <b>ch</b> dopo <b>ä</b> è [ç]; in <i>kontrollieren</i> l'accento cade su <b>lie</b>."
      }
    ]
  },
  "lesson:pfl-u09-l4": {
    theme: "Compiti e responsabilità",
    title: "Che cosa posso fare, che cosa devo fare?",
    objectives: [
      "chiedere che cosa ti è permesso fare durante l'inserimento",
      "distinguere dürfen, müssen, sollen e sollten",
      "capire la differenza tra du darfst nicht e du musst nicht",
      "rifiutare con cortesia una richiesta che non ti spetta"
    ],
    theory: [
      {
        h: "Permesso, obbligo, indicazione",
        p: "<em>dürfen</em> esprime il permesso: <em>Was <b>darf</b> ich schon allein machen?</em> <em>müssen</em> l'obbligo: <em>Wenn du unsicher bist, <b>musst</b> du nachfragen.</em> <em>sollen</em> riferisce un'indicazione data da altri: <em>Die Ärztin sagt, du <b>sollst</b> den Blutzucker messen.</em> <em>sollten</em> è un consiglio: <em>Das <b>sollten</b> wir mit der Stationsleitung klären.</em> Il modale è coniugato al secondo posto, l'infinito va in fondo; in una subordinata il modale va in fondo dopo l'infinito."
      },
      {
        h: "Delega e responsabilità: con prudenza",
        p: "In Germania alcuni compiti medici possono essere delegati al personale infermieristico (<em>Delegation</em>); chi accetta un compito ne risponde per l'esecuzione. Che cosa si può delegare, a chi e a quali condizioni dipende dalla legge, dalla struttura e dalla tua posizione, per esempio durante il riconoscimento del titolo. Questa lezione insegna le parole per chiedere e per dire di no, non le regole giuridiche: per i casi concreti la persona giusta è la <em>Stationsleitung</em>."
      },
      {
        contrast: "In italiano «non devi» di solito vuol dire che è vietato: «non devi farlo da sola». In tedesco il divieto si dice con <em>dürfen</em>: <em>Das <b>darfst</b> du nicht allein machen.</em> <em>Du <b>musst</b> das nicht machen</em> vuol dire invece «non sei obbligata, non serve»: tradurre «non devi» con <em>musst nicht</em> trasforma un divieto in un permesso. Anche la domanda «posso?» si divide in due: <em>Darf ich?</em> chiede esplicitamente il permesso; <em>Kann ich?</em> chiede se è possibile o se ne sei capace, e nel parlato spesso anche il permesso. Quando conta il permesso, <em>Darf ich?</em> è la scelta chiara."
      },
      {
        trap: "<em>die Haftung</em> non è la responsabilità in generale: è la responsabilità giuridica, l'obbligo di rispondere di un danno. La responsabilità professionale e morale è <em>die Verantwortung</em>: <em>Ich trage die Verantwortung für meine Patienten.</em> E <em>die Krankenschwester</em>, che i pazienti usano ancora spesso, oggi non è più il titolo professionale: il titolo è <em>Pflegefachfrau</em> o <em>Pflegefachmann</em>."
      },
      {
        tip: "Se un familiare o un paziente ti chiede qualcosa che non ti spetta, non dire solo no: di' chi lo decide e che cosa fai adesso. <em>Das darf ich nicht allein entscheiden. Ich spreche mit der Ärztin.</em> Così la richiesta non resta senza risposta."
      }
    ],
    grammar: {
      title: "I verbi modali in reparto",
      note: "Il modale coniugato al <b>secondo posto</b>, l'infinito <b>in fondo</b>. Divieto: <b>nicht dürfen</b>. Assenza di obbligo: <b>nicht müssen</b>.",
      table: {
        head: ["modale", "significato", "esempio"],
        rows: [
          ["dürfen", "avere il permesso", "Das darfst du erst nach der Einarbeitung."],
          ["nicht dürfen", "divieto", "Das darfst du noch nicht allein machen."],
          ["müssen", "obbligo", "Wenn du unsicher bist, musst du nachfragen."],
          ["nicht müssen", "non c'è obbligo", "Das musst du nicht allein machen."],
          ["sollen", "indicazione di altri", "Die Ärztin sagt, du sollst den Blutzucker messen."],
          ["sollten", "consiglio", "Das sollten wir mit der Stationsleitung klären."]
        ]
      },
      examples: [
        { tr: "Che cosa posso già fare da sola, come nuova collega?", note: "dürfen: chiede il permesso, non la capacità" },
        { tr: "Questo compito puoi assumerlo solo quando hai finito l'inserimento.", note: "darfst al secondo posto, übernehmen in fondo; erst = solo, non prima" },
        { tr: "Determinati compiti medici possono essere delegati agli infermieri.", note: "modale + passivo: können + delegiert werden" },
        { tr: "Se non sei sicura, devi chiedere.", note: "la subordinata con wenn sta al primo posto, quindi subito musst" },
        { tr: "Non devi farlo da sola (non sei obbligata).", note: "nicht müssen: assenza di obbligo, non divieto" },
        { tr: "Dovremmo chiarirlo con la caposala.", note: "sollten: un consiglio" }
      ]
    },
    vocab: [
      "potere (avere il permesso)",
      "dovere (essere obbligati)",
      "dovere (su indicazione di altri)",
      "la delega",
      "delegare",
      "la responsabilità",
      "la responsabilità giuridica",
      "l'inserimento (del nuovo personale)",
      "inserito, formato per il reparto",
      "il compito",
      "assumere, prendere in carico",
      "rifiutare"
    ],
    dialogue: [
      "Sono qui da una settimana. Che cosa posso già fare da solo?",
      "L'igiene di base e i parametri vitali li fai già da solo. Il cambio della medicazione lo facciamo ancora insieme questa settimana.",
      "E i prelievi di sangue? Nel mio paese li facevo tutti i giorni.",
      "Ti credo. Ma qui puoi farli solo quando l'inserimento è concluso e la dottoressa te li ha delegati.",
      "Devo assumere ogni compito che mi danno?",
      "No. Se non ti senti sicuro con un compito, devi dirlo. Allora qualcuno ti fa vedere come si fa.",
      "E chi ne risponde, se qualcosa va storto?",
      "È una domanda per la caposala. Le regole non sono uguali dappertutto, per questo dovremmo chiarirlo con lei."
    ],
    culture: {
      title: "Uno sguardo tedesco: il riconoscimento del titolo",
      text: "<p>Chi ha studiato infermieristica all'estero, in Germania di solito deve far riconoscere il titolo (<i>Anerkennung</i>). A seconda del paese e della formazione può servire un corso di adattamento (<i>Anpassungslehrgang</i>) o un esame (<i>Kenntnisprüfung</i>). Fino al riconoscimento molti lavorano con un ruolo diverso, per esempio come <i>Pflegefachkraft in Anerkennung</i>, e alcuni compiti non sono ancora permessi.</p><p>Le regole cambiano da un <i>Land</i> all'altro e nel tempo: le informazioni aggiornate le danno l'ufficio competente del tuo Land e il portale ufficiale <i>Anerkennung in Deutschland</i>.</p>"
    },
    exercises: [
      {
        q: "Vuoi dire a un collega che non è obbligato a farlo da solo. Quale frase usi?",
        opts: [
          "Das darfst du nicht allein machen.",
          "Das musst du nicht allein machen.",
          "Das sollst du nicht allein machen."
        ],
        why: "<b>nicht müssen</b> vuol dire «non c'è obbligo». <i>nicht dürfen</i> è un divieto; <i>nicht sollen</i> riferisce un'indicazione di qualcun altro di non farlo."
      },
      {
        tr: "Il presente di dürfen, tutte le persone.",
        why: "<i>Darf, darfst, darf, dürfen, dürft, dürfen</i>: al singolare la <b>ü</b> diventa <b>a</b>, e la prima e la terza persona singolare non hanno desinenza."
      },
      {
        q: "Completa: «Wenn du unsicher bist, ___ du nachfragen.»",
        hint: "obbligo: müssen",
        why: "<b>musst</b>: la subordinata con <i>wenn</i> occupa il primo posto, quindi il modale viene subito dopo, poi il soggetto <i>du</i> e l'infinito in fondo."
      },
      {
        q: "Completa la frase.",
        tr: "Questo ti è permesso farlo solo quando l'inserimento è concluso.",
        why: "<i>Das <b>darfst</b> du erst machen</i>: permesso, quindi <i>dürfen</i>. <i>wenn die Einarbeitung abgeschlossen <b>ist</b></i>: nella subordinata il verbo coniugato va in fondo."
      },
      {
        q: "Quali frasi sono corrette?",
        opts: [
          "Du musst nachfragen, wenn du unsicher bist.",
          "Du musst nachfragen, wenn du bist unsicher.",
          "Diese Aufgabe darfst du erst nach der Einarbeitung übernehmen.",
          "Die Ärztin kann bestimmte Aufgaben an die Pflege delegieren.",
          "Ich darf heute Zimmer zwölf übernommen."
        ],
        why: "Dopo <i>wenn</i> il verbo coniugato va in fondo: <i>wenn du unsicher bist</i>. Con un modale il secondo verbo va all'infinito, non al participio: <i>darf ... übernehmen</i>."
      },
      {
        q: "Abbina ogni parola al suo significato.",
        pairs: ["la delega", "la responsabilità giuridica", "l'inserimento", "il compito"]
      },
      {
        q: "Scegli l'articolo determinativo giusto per ogni nome.",
        items: ["compito", "responsabilità giuridica", "cambio della medicazione", "glicemia", "paese", "consenso"]
      },
      {
        q: "Metti in ordine le parole.",
        tr: "Se non sei sicuro, devi chiedere.",
        why: "<i>Wenn du unsicher bist, musst du nachfragen.</i> La subordinata occupa il primo posto, quindi subito il modale <i>musst</i>, poi <i>du</i> e l'infinito <i>nachfragen</i> in fondo."
      },
      {
        q: "Traduci (a una collega nuova): «Non ti è ancora permesso farlo da sola.»",
        why: "<i>Das darfst du noch nicht allein machen</i>: un divieto, quindi <i>nicht dürfen</i>, non <i>nicht müssen</i>. Va bene anche <i>Du darfst das noch nicht allein machen</i>."
      },
      {
        q: "Una richiesta che non ti spetta.",
        setting: "Il figlio di un paziente ti chiede di dare un sonnifero a suo padre.",
        lines: [
          { tr: "Mio padre dorme così male. Gli dia un sonnifero, dai!" },
          { tr: "Rispondi che non puoi deciderlo da sola e che ne parli con la dottoressa.", answerTr: "Non posso deciderlo da sola. Ne parlo con la dottoressa." },
          { tr: "Ma Lei è un'infermiera!" },
          { tr: "Rispondi di sì, ma che i farmaci si danno solo su prescrizione medica.", answerTr: "Sì, ma i farmaci si danno solo su prescrizione medica." },
          { tr: "E quando so qualcosa?" },
          { tr: "Rispondi che chiami adesso la dottoressa e poi gli fai sapere.", answerTr: "Chiamo adesso la dottoressa e poi Le faccio sapere." }
        ]
      },
      {
        tr: "No. Se non ti senti sicuro con un compito, devi dirlo. Allora qualcuno ti fa vedere come si fa.",
        why: "In <i>sicher</i> la <b>s</b> iniziale è sonora, [z], e la <b>ch</b> è [ç]; in <i>fühlst</i> la <b>ü</b> è lunga; in <i>musst</i> la <b>u</b> è breve."
      },
      {
        tr: "Se non sei sicuro, devi chiedere.",
        why: "In <i>unsicher</i> l'accento cade su <b>un</b>; in <i>nachfragen</i> l'accento cade su <b>nach</b> e la <b>ch</b> dopo <b>a</b> è [x]."
      }
    ]
  },
  "lesson:pfl-u09-test": {
    theme: "Verifica finale",
    title: "Test finale: tedesco per l'assistenza infermieristica",
    objectives: [
      "verificare il passivo, la declinazione dell'aggettivo e il Futur I di questa unità",
      "ripassare il lessico di tutto il percorso: accoglienza, parametri, igiene di base, dolore, farmaci, consegna, dimissione"
    ],
    theory: [
      {
        p: "Dodici domande, l'ultima verifica del percorso: oltre a questa unità ripescano parole e situazioni di tutte le nove unità. Si supera con il 70%. I pazienti e le situazioni sono inventati e servono solo come esempio: le regole di igiene, la cura delle ferite e l'organizzazione della dimissione le stabiliscono la struttura e il medico."
      }
    ],
    exercises: [
      {
        q: "Spieghi a un paziente che ha la pressione alta. Quale frase capisce più facilmente?",
        opts: ["Sie haben eine Hypertonie.", "Sie haben Bluthochdruck.", "Ihr RR ist erhöht."],
        why: "Con il paziente si usa la parola di tutti i giorni: <b>Bluthochdruck</b>. <i>Hypertonie</i> e la sigla <i>RR</i> vanno bene tra colleghi e nella documentazione."
      },
      {
        q: "Completa: «Ich habe einen ___ Schmerz in der Brust.»",
        hint: "drückend, aggettivo davanti al nome",
        why: "<b>drückenden</b>: dopo <i>einen</i>, all'accusativo maschile, l'aggettivo prende <b>-en</b>."
      },
      {
        tr: "Il Futur I di kontrollieren, tutte le persone.",
        why: "<i>Werde, wirst, wird, werden, werdet, werden</i> + <b>kontrollieren</b>: si coniuga solo <i>werden</i>, l'infinito resta uguale e va in fondo alla frase."
      },
      {
        q: "Abbina ogni parola al suo significato.",
        pairs: ["l'infezione", "l'infiammazione", "la piaga da decubito", "lo svenimento"]
      },
      {
        q: "Quali frasi sono corrette?",
        opts: [
          "Die Wunde ist leicht gerötet.",
          "Bei Frau Keller wurde ein erhöhter Blutzucker gemessen.",
          "Der Patient hat einen starken Schmerz.",
          "Die Ärztin wurde geinformiert.",
          "Er hat eine geschwollener Knöchel."
        ],
        why: "<i>informiert</i> non prende <i>ge-</i>, perché il verbo finisce in <i>-ieren</i>. <i>Knöchel</i> è maschile: <i>einen geschwollenen Knöchel</i>."
      },
      {
        q: "Completa la frase.",
        tr: "Nel signor Brandt è stato trovato un germe multiresistente, per questo viene isolato.",
        why: "<i>Bei Herrn Brandt <b>wurde</b> ein multiresistenter Keim gefunden</i>: passivo al Präteritum. <i>deshalb <b>wird</b> er isoliert</i>: passivo presente, e dopo <i>deshalb</i> il verbo viene subito."
      },
      {
        q: "Metti in ordine le parole.",
        tr: "Le compresse vengono prese prima della colazione.",
        why: "<i>Die Tabletten werden vor dem Frühstück eingenommen.</i> Passivo presente: <i>werden</i> al secondo posto e il participio <i>eingenommen</i> in fondo."
      },
      {
        q: "Scegli l'articolo determinativo giusto per ogni nome.",
        items: ["anamnesi", "pressione arteriosa", "farmaco", "emergenza", "grado di non autosufficienza", "ausilio"]
      },
      {
        q: "Traduci (nel rapporto): «La ferita è arrossata e gonfia.»",
        why: "<i>Die Wunde ist gerötet und geschwollen</i>: dopo <i>ist</i> gli aggettivi restano senza desinenza. In forma breve: <i>Wunde gerötet und geschwollen</i>."
      },
      {
        q: "Il colloquio di dimissione.",
        setting: "Il signor Brandt torna a casa domani e ti fa le ultime domande.",
        lines: [
          { tr: "Quali compresse prendo a casa?" },
          { tr: "Rispondi che è scritto nel suo piano terapeutico e che glielo spieghi subito.", answerTr: "È scritto nel Suo piano terapeutico. Glielo spiego subito." },
          { tr: "E chi mi guarda la ferita?" },
          { tr: "Rispondi che il suo medico di famiglia la controllerà la settimana prossima.", answerTr: "Il Suo medico di famiglia la controllerà la settimana prossima." },
          { tr: "Da che cosa capisco che qualcosa non va?" },
          { tr: "Rispondi che, se la ferita diventa rossa, calda o gonfia, deve chiamare il suo medico di famiglia.", answerTr: "Se la ferita diventa rossa, calda o gonfia, chiami il Suo medico di famiglia, per favore." }
        ]
      },
      {
        tr: "La ferita non mostra segni di infiammazione.",
        why: "In <i>zeigt</i> la <b>z</b> è [ts] e la <b>g</b> finale si legge [k]; in <i>Zeichen</i> la <b>ch</b> dopo <b>ei</b> è [ç]; in <i>Entzündung</i> l'accento cade su <b>zün</b>."
      },
      {
        tr: "Le mani vengono disinfettate prima e dopo ogni contatto con il paziente.",
        why: "In <i>vor</i> la <b>v</b> si legge [f]; in <i>Patientenkontakt</i> la <b>ti</b> si legge [tsi]; in <i>desinfiziert</i> l'accento cade su <b>ziert</b>."
      }
    ]
  }
});
