/* ============================================================
   Learner-language text (it) for data/core/a2-01.js, unit a2-u01.
   Keys point at ids in the neutral layer; arrays merge by index,
   so their length has to match core.
   Checked by scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("it", {
  "unit:a2-u01": {
    title: "Ieri e oggi",
    grammarNote: "Präteritum di sein, haben e dei modali · als e wenn · weil con il verbo in fondo · verbi riflessivi e sich erinnern an"
  },
  "lesson:a2-u01-l1": {
    theme: "L'infanzia",
    title: "Da bambino ero ...",
    objectives: [
      "descrivere com'era la tua infanzia con war e hatte",
      "coniugare sein, haben e können al Präteritum",
      "usare früher e damals per collocare un fatto nel passato"
    ],
    theory: [
      {
        h: "Il Präteritum di sein e haben",
        p: "Per descrivere come erano le cose in passato, a voce, si usano le forme semplici di <strong>sein</strong> e <strong>haben</strong>: <em>ich war</em>, <em>ich hatte</em>. Al posto del Perfekt (<em>Ich bin gewesen</em>, <em>Ich habe gehabt</em>) il tedesco parlato preferisce quasi sempre queste forme brevi: <em>Als Kind war ich oft krank</em>, <em>Wir hatten einen großen Garten</em>. Alla prima e alla terza persona singolare la forma è uguale: <em>ich war, er war</em>; <em>ich hatte, er hatte</em>."
      },
      {
        contrast: "L'italiano distingue l'<b>imperfetto</b> (<em>ero, avevo</em>), che descrive come erano le cose, dal <b>passato remoto</b> (<em>fui, ebbi</em>), che racconta un fatto concluso. Il Präteritum non fa questa distinzione: <em>Ich war müde</em> può rendere <em>ero stanco</em> e <em>fui stanco</em>, e lo decide il contesto. Un'altra differenza è piccola ma costante: in <em>als Kind</em> («da bambino») non c'è articolo, e <em>Kind</em> è neutro."
      },
      {
        trap: "Non mescolare le due forme: <em>Ich habe war</em> non esiste. Con <em>sein</em> e <em>haben</em> si sceglie il Präteritum (<em>Ich war</em>, <em>Ich hatte</em>) oppure il Perfekt (<em>Ich bin gewesen</em>, <em>Ich habe gehabt</em>), mai una forma ibrida. Fai attenzione anche a <em>wir hatten</em> e <em>wir waren</em>: alla prima persona plurale la desinenza è <em>-en</em>, come all'infinito."
      },
      {
        tip: "Segnali di tempo utili per il passato: <em>früher</em> (in passato, un tempo), <em>damals</em> (a quel tempo), <em>als Kind</em> (da bambino), <em>als Jugendlicher</em> (da adolescente). Comincia una frase con uno di questi e il verbo resta in seconda posizione: <em>Früher hatte ich ein rotes Fahrrad.</em>"
      }
    ],
    grammar: {
      title: "Präteritum di sein, haben e können",
      note: "Alla 1ª e alla 3ª persona singolare la forma è uguale. Le terminazioni sono quelle del Präteritum: <b>-st</b>, <b>-en</b>, <b>-t</b>, <b>-en</b>.",
      table: {
        head: ["persona", "sein", "haben", "können"],
        rows: [
          ["ich", "war", "hatte", "konnte"],
          ["du", "warst", "hattest", "konntest"],
          ["er, sie, es", "war", "hatte", "konnte"],
          ["wir", "waren", "hatten", "konnten"],
          ["ihr", "wart", "hattet", "konntet"],
          ["sie, Sie", "waren", "hatten", "konnten"]
        ]
      },
      examples: [
        { tr: "Da bambino ero spesso malato.", note: "als Kind: senza articolo" },
        { tr: "Avevamo un grande giardino.", note: "wir hatten" },
        { tr: "Mio nonno aveva un cane.", note: "er hatte, come ich hatte" },
        { tr: "Un tempo andavamo ogni estate al mare.", note: "früher + war al plurale: waren" },
        { tr: "A quel tempo non avevo il cellulare.", note: "damals" },
        { tr: "Com'era la tua infanzia?", note: "Wie war ...?" }
      ]
    },
    vocab: [
      "l'infanzia",
      "la scuola dell'infanzia",
      "la scuola elementare",
      "l'insegnante (maschile)",
      "l'insegnante (femminile)",
      "il paese, il villaggio",
      "la città",
      "il giardino",
      "il cane",
      "la bicicletta",
      "un tempo, in passato",
      "a quel tempo"
    ],
    exercises: [
      {
        tr: "Il Präteritum di sein, tutte le persone.",
        why: "<i>War, warst, war, waren, wart, waren</i>: forme irregolari da sapere a memoria. Alla 1ª e alla 3ª persona singolare la forma è identica."
      },
      {
        tr: "Il Präteritum di haben, tutte le persone.",
        why: "<i>Hatte, hattest, hatte, hatten, hattet, hatten</i>: la radice si accorcia (<i>hab-</i> diventa <i>hat-</i>) e poi arrivano le terminazioni."
      },
      {
        tr: "Il Präteritum di können, tutte le persone.",
        why: "<i>Konnte, konntest, konnte, konnten, konntet, konnten</i>: l'Umlaut sparisce, e la 1ª e la 3ª persona singolare sono uguali."
      },
      {
        q: "Come dici «Da bambino avevo un cane»?",
        opts: ["Als Kind war ich einen Hund.", "Als Kind hatte ich einen Hund.", "Als Kind habe ich einen Hund war."],
        why: "Per «avere» si usa <b>hatte</b>; <i>sein</i> significa «essere» e non va con un oggetto. <i>Hund</i> è maschile: <i>einen Hund</i> all'accusativo."
      },
      {
        q: "Completa: «Früher ___ wir ein Fahrrad.» (avevamo, usa haben)",
        hint: "haben, Präteritum, wir",
        why: "<b>Hatten</b>: radice <i>hatt-</i> con la terminazione <i>-en</i>, come all'infinito. Dopo <i>früher</i> il verbo resta in seconda posizione."
      },
      {
        q: "Completa: «Als Kind ___ ich oft krank.» (ero, usa sein)",
        hint: "sein, Präteritum, ich",
        why: "<b>War</b>: alla prima persona singolare non c'è nessuna terminazione."
      },
      {
        q: "Completa la frase.",
        tr: "Un tempo avevamo una casa in paese. Era piccola, ma i miei nonni avevano un giardino.",
        why: "<i>Wir hatten</i>, <i>es war</i>, <i>die Großeltern hatten</i>: con <i>wir</i> e con un soggetto plurale la forma è <i>hatten</i>."
      },
      {
        q: "Traduci: «Da bambino ero spesso malato.»",
        why: "<i>Als Kind war ich oft krank</i>: <i>als Kind</i> apre la frase, poi <i>war</i> e il soggetto. Va bene anche <i>Ich war als Kind oft krank</i>."
      },
      {
        tr: "Da bambino avevo un cane, ed era molto buono.",
        why: "In <i>Hund</i> la <b>u</b> è breve e la <b>d</b> finale si pronuncia come una <b>t</b>; <i>lieb</i> finisce con una <b>p</b> sorda."
      },
      {
        tr: "Un tempo andavamo ogni estate al mare e ci divertivamo molto.",
        why: "In <i>Früher</i> la <b>ü</b> è lunga e si pronuncia con le labbra della <i>u</i> e la lingua della <i>i</i>; in <i>Spaß</i> la <b>sp</b> iniziale suona [ʃp] e la <b>ß</b> è una <b>s</b> sorda."
      }
    ]
  },
  "lesson:a2-u01-l2": {
    theme: "Quando era piccolo",
    title: "Quando ero piccolo, ...",
    objectives: [
      "collegare due eventi con als (un fatto singolo nel passato) e wenn (un fatto ripetuto)",
      "mettere il verbo coniugato in fondo alla frase con als e wenn",
      "cominciare la principale con il verbo quando la subordinata sta prima"
    ],
    theory: [
      {
        h: "Als per un fatto solo, wenn per un fatto ripetuto",
        p: "Il tedesco ha due parole per il «quando» temporale. <strong>Als</strong> introduce un fatto <b>singolo</b> nel passato: <em>Als ich zehn war, sind wir nach Berlin umgezogen</em>. <strong>Wenn</strong> introduce un fatto <b>ripetuto</b> (anche nel passato: <em>Immer wenn es geschneit hat, ...</em>) oppure un fatto del <b>presente o del futuro</b>: <em>Wenn ich müde bin, gehe ich früh ins Bett</em>. Nella subordinata il verbo coniugato va <b>in fondo</b>."
      },
      {
        contrast: "L'italiano ha un solo <em>quando</em> e di norma non cambia l'ordine delle parole: <em>quando ero piccolo, abitavamo in paese</em>. In tedesco bisogna scegliere tra <em>als</em> e <em>wenn</em> e il verbo coniugato va in fondo: <em>Als ich klein war, ...</em>, non «Als ich war klein». Quando la subordinata sta all'inizio, la principale ricomincia con il verbo coniugato subito dopo la virgola: <em>Als ich klein war, haben wir in einem Dorf gewohnt.</em> Per la domanda diretta si usa un'altra parola ancora, <em>wann</em>."
      },
      {
        trap: "Con un fatto ripetuto nel passato l'istinto italiano è «quando» = <em>als</em>, ma serve <b>wenn</b>: <em>Immer wenn es geschneit hat, sind wir Schlitten gefahren</em> (ogni volta che nevicava). Per capire quale usare, chiediti se il fatto è successo una volta sola (<em>als</em>) o più volte (<em>wenn</em>). <em>Als</em> non si usa mai al presente o al futuro."
      },
      {
        tip: "<em>Als</em> è la stessa parola del comparativo (<em>älter als ich</em>), ma qui ha un altro ruolo: collega due frasi. Con il Perfekt nella subordinata il verbo coniugato (l'ausiliare) va in fondo, dopo il participio: <em>Als wir in Wien gewohnt haben, ...</em>"
      }
    ],
    grammar: {
      title: "Als e wenn con il verbo in fondo",
      note: "Dopo <b>als</b> e <b>wenn</b> il verbo coniugato va <b>in fondo</b>; se la subordinata sta prima, la principale comincia con il verbo.",
      table: {
        head: ["situazione", "parola", "esempio"],
        rows: [
          ["un fatto singolo nel passato", "als", "Als ich zehn war, sind wir umgezogen."],
          ["un fatto ripetuto nel passato", "wenn", "Immer wenn es geschneit hat, sind wir Schlitten gefahren."],
          ["presente o futuro", "wenn", "Wenn ich müde bin, gehe ich früh ins Bett."]
        ]
      },
      examples: [
        { tr: "Quando ero piccolo, abitavamo in un paese.", note: "als: un periodo concluso; poi verbo + soggetto" },
        { tr: "Quando abitavamo a Vienna, andavo spesso in bicicletta.", note: "Perfekt nella subordinata: gewohnt haben" },
        { tr: "Quando avevo dieci anni, ci siamo trasferiti a Berlino.", note: "als: un fatto solo" },
        { tr: "Ogni volta che nevicava, andavamo in slittino.", note: "immer wenn: fatto ripetuto" },
        { tr: "Ogni volta che mia nonna veniva a trovarci, faceva una torta.", note: "jedes Mal, wenn" },
        { tr: "Quando sono stanco, vado a letto presto.", note: "wenn: presente" }
      ]
    },
    vocab: [
      "il trasloco",
      "le vacanze (solo plurale)",
      "l'estate",
      "l'inverno",
      "la neve",
      "la slitta",
      "la nonna",
      "il nonno",
      "il vicino",
      "sempre",
      "spesso",
      "ogni volta"
    ],
    exercises: [
      {
        q: "Quale parola? «___ ich klein war, haben wir in einem Dorf gewohnt.» (quando ero piccolo)",
        opts: ["Als", "Wenn", "Wann"],
        why: "Un periodo concluso del passato: <b>als</b>. <i>Wenn</i> sarebbe per i fatti ripetuti o per il presente."
      },
      {
        q: "Quale parola? «___ es geschneit hat, sind wir Schlitten gefahren.» (ogni volta che nevicava)",
        opts: ["Als", "Wenn", "Wann"],
        why: "«Ogni volta» indica un fatto ripetuto: <b>wenn</b>, anche se la frase è al passato."
      },
      {
        q: "Quale frase è corretta?",
        opts: [
          "Als ich klein war, wir haben viel gespielt.",
          "Als ich klein war, haben wir viel gespielt.",
          "Als ich war klein, haben wir viel gespielt."
        ],
        why: "Nella subordinata il verbo va in fondo (<i>klein war</i>); la principale comincia poi con il verbo: <i>haben wir</i>."
      },
      {
        q: "Quali frasi sono corrette? (più di una)",
        opts: [
          "Als ich zehn war, sind wir umgezogen.",
          "Wenn ich müde bin, trinke ich Kaffee.",
          "Als ich Kind war, ich habe viel gespielt.",
          "Immer wenn wir Ferien hatten, sind wir ans Meer gefahren."
        ],
        why: "La terza è sbagliata: dopo la subordinata la principale comincia con il verbo (<i>habe ich viel gespielt</i>). Le altre rispettano la distinzione tra <i>als</i> e <i>wenn</i>."
      },
      {
        q: "Completa la frase.",
        tr: "Quando ero piccolo, abitavamo in un paese.",
        why: "<i>Als</i> introduce un periodo concluso del passato; il participio <i>gewohnt</i> chiude la principale."
      },
      {
        q: "Completa la frase.",
        tr: "Ogni volta che d'inverno nevicava, andavamo in slittino.",
        why: "Fatto ripetuto: <b>wenn</b>. Nella principale il verbo coniugato (<i>sind</i>) viene prima del soggetto."
      },
      {
        q: "Completa la frase.",
        tr: "Quando abitavamo a Vienna, andavo spesso in bicicletta.",
        why: "Nella subordinata al Perfekt il participio (<i>gewohnt</i>) precede l'ausiliare (<i>haben</i>), che sta in fondo alla frase."
      },
      {
        q: "Traduci: «Quando avevo dieci anni, ci siamo trasferiti a Berlino.» (usa umziehen)",
        why: "<i>Als</i> per un fatto solo. Il Perfekt di <i>umziehen</i> si fa con <b>sein</b>: <i>sind umgezogen</i>. Va bene anche <i>gezogen</i>."
      },
      {
        tr: "Quando avevo dieci anni ci siamo trasferiti a Berlino, e lì non avevo amici.",
        why: "In <i>keine</i> la <b>ei</b> si legge come «ai» di «mai»; in <i>Freunde</i> la <b>eu</b> è un dittongo vicino a «oi». <i>Berlin</i> ha l'accento sull'ultima sillaba."
      },
      {
        tr: "Ogni volta che nevicava, andavamo in slittino.",
        why: "In <i>geschneit</i> e <i>Schlitten</i> la <b>sch</b> si legge [ʃ], come <i>sc</i> in «scena»; <i>wenn</i> inizia con una <b>w</b> pronunciata come la «v» italiana."
      }
    ]
  },
  "lesson:a2-u01-l3": {
    theme: "Regole e permessi",
    title: "Dovevo, potevo, perché ...",
    objectives: [
      "usare musste, konnte, wollte e durfte al Präteritum",
      "spiegare un motivo con weil e il verbo in fondo",
      "raccontare regole e divieti dell'infanzia"
    ],
    theory: [
      {
        h: "I modali al Präteritum",
        p: "Per dire cosa si doveva, voleva o poteva fare da piccoli si usano i modali al <strong>Präteritum</strong>: <em>ich musste</em> (dovevo), <em>ich konnte</em> (potevo, ero in grado), <em>ich durfte</em> (mi era permesso), <em>ich wollte</em> (volevo). Nel Präteritum <em>müssen, können, dürfen</em> perdono l'Umlaut, mentre <em>wollen</em> e <em>sollen</em> non lo avevano. Il modale va con un infinito alla fine della frase: <em>Ich musste jeden Tag Hausaufgaben machen.</em>"
      },
      {
        contrast: "L'italiano ha un solo verbo, <em>potere</em>, per due idee diverse: <em>non potevo uscire</em> può voler dire che ero impedito (<em>Ich konnte nicht ausgehen</em>) oppure che non mi era permesso (<em>Ich durfte nicht ausgehen</em>). In tedesco devi scegliere: <em>können</em> è la capacità o la possibilità, <em>dürfen</em> il permesso. In più, come per <em>sein</em> e <em>haben</em>, il tedesco parlato preferisce il Präteritum al Perfekt: <em>Ich konnte nicht kommen</em> è più naturale di <em>Ich habe nicht kommen können</em>."
      },
      {
        trap: "Con <b>weil</b> («perché») il verbo coniugato va in fondo, dopo l'infinito: <em>..., weil ich arbeiten musste</em>, non «weil ich musste arbeiten» e non «weil musste ich arbeiten». In italiano l'ordine delle parole non cambia dopo «perché», ed è per questo che l'errore è così frequente. La virgola prima di <em>weil</em> è obbligatoria."
      },
      {
        tip: "Per dare un motivo senza spostare il verbo si può usare <em>denn</em> (<em>Ich war müde, denn ich musste früh aufstehen</em>), ma qui è <em>weil</em> a essere la parola da esercitare. Alla domanda <em>Warum?</em> puoi rispondere con la sola subordinata: <em>Warum warst du traurig? Weil ich nicht ins Kino gehen durfte.</em>"
      }
    ],
    grammar: {
      title: "Modali al Präteritum e weil",
      note: "I modali al Präteritum perdono l'Umlaut (eccetto <b>wollte</b>, che non l'aveva). Dopo <b>weil</b> il verbo coniugato va in fondo.",
      table: {
        head: ["infinito", "Präteritum (ich)", "significato", "con weil"],
        rows: [
          ["müssen", "musste", "dovevo", "weil ich arbeiten musste"],
          ["können", "konnte", "potevo, ero in grado", "weil ich nicht schwimmen konnte"],
          ["dürfen", "durfte", "mi era permesso", "weil ich nicht ins Kino gehen durfte"],
          ["wollen", "wollte", "volevo", "weil ich spielen wollte"]
        ]
      },
      examples: [
        { tr: "Dovevo fare i compiti ogni giorno.", note: "ich musste + infinito in fondo" },
        { tr: "Non ci era permesso guardare la televisione a lungo.", note: "dürfen: wir durften" },
        { tr: "Volevo un cane, ma i miei genitori non volevano.", note: "wollen: ich wollte, sie wollten" },
        { tr: "Ero triste perché non potevo andare al cinema.", note: "weil: il verbo durfte va in fondo" },
        { tr: "Non potevo venire perché dovevo lavorare.", note: "weil ich arbeiten musste" },
        { tr: "Potevamo giocare in giardino perché il tempo era bello.", note: "weil ... war" }
      ]
    },
    vocab: [
      "il compito (a casa)",
      "la regola",
      "la televisione, il televisore",
      "la paghetta",
      "i dolci, le caramelle (solo plurale)",
      "il cellulare",
      "il compleanno",
      "l'animale domestico",
      "la punizione",
      "severo",
      "permesso",
      "vietato"
    ],
    exercises: [
      {
        q: "Quale frase è corretta?",
        opts: [
          "Ich konnte nicht kommen, weil musste ich arbeiten.",
          "Ich konnte nicht kommen, weil ich musste arbeiten.",
          "Ich konnte nicht kommen, weil ich arbeiten musste."
        ],
        why: "Dopo <i>weil</i> il verbo coniugato (<i>musste</i>) va in fondo, dopo l'infinito <i>arbeiten</i>."
      },
      {
        q: "Completa: «Ich ___ jeden Tag Hausaufgaben machen.» (dovevo, usa müssen)",
        hint: "müssen, Präteritum, ich",
        why: "<b>Musste</b>: senza Umlaut e con la terminazione <i>-te</i>; con <i>ich</i> non si aggiunge altro."
      },
      {
        q: "Completa: «Wir ___ nicht lange fernsehen.» (non ci era permesso, usa dürfen)",
        hint: "dürfen, Präteritum, wir",
        why: "<b>Durften</b>: <i>dürfen</i> perde l'Umlaut e con <i>wir</i> la desinenza è <i>-en</i>."
      },
      {
        q: "Completa: «Ich war traurig, ___ ich nicht ins Kino gehen durfte.» (perché, usa weil)",
        hint: "usa weil",
        why: "<b>Weil</b> manda il verbo in fondo: <i>..., weil ich nicht ins Kino gehen durfte</i>."
      },
      {
        q: "Abbina ogni forma al suo significato.",
        pairs: ["dovevo", "potevo, ero in grado", "volevo", "mi era permesso"]
      },
      {
        q: "Metti in ordine le parole.",
        tr: "Non potevo venire, perché dovevo lavorare.",
        why: "Nella principale <i>konnte</i> è in seconda posizione; nella subordinata <i>weil ich arbeiten musste</i> il verbo coniugato va in fondo."
      },
      {
        q: "Completa la frase.",
        tr: "Ero stanco perché dovevo alzarmi presto.",
        why: "Il verbo separabile resta intero con il modale: <i>früh aufstehen musste</i>, con <i>musste</i> in fondo."
      },
      {
        q: "Traduci: «Non potevo giocare perché dovevo fare i compiti.»",
        why: "<i>Ich konnte nicht spielen, weil ich Hausaufgaben machen musste</i>. Anche <i>durfte</i> è accettato, se intendi un divieto."
      },
      {
        tr: "Non mi era permesso guardare la televisione a lungo, perché dovevo andare a letto presto.",
        why: "In <i>durfte</i> la <b>u</b> è breve; in <i>früh</i> la <b>ü</b> è lunga. In <i>lange</i> la <b>ng</b> si legge come una sola nasale [ŋ], come in «anche»."
      },
      {
        tr: "Da bambino non mi era permesso mangiare dolci, perché i miei genitori erano severi.",
        why: "In <i>Süßigkeiten</i> la <b>ü</b> è lunga e la <b>ß</b> è una <b>s</b> sorda; <i>streng</i> comincia con [ʃtr], come in «strada» con una <i>sc</i> al posto della <i>s</i>."
      }
    ]
  },
  "lesson:a2-u01-l4": {
    theme: "I ricordi",
    title: "Ti ricordi?",
    objectives: [
      "usare i pronomi riflessivi mich, dich, sich, uns, euch",
      "dire sich erinnern an e sich freuen auf con il caso giusto",
      "formare il Perfekt dei verbi riflessivi con haben"
    ],
    theory: [
      {
        h: "I verbi riflessivi: mich, dich, sich, uns, euch",
        p: "Un verbo è <b>riflessivo</b> quando l'azione torna sul soggetto: <em>Ich erinnere mich</em> (mi ricordo). Il pronome cambia con la persona: <em>mich, dich, sich, uns, euch, sich</em>. Sta dopo il verbo coniugato: <em>Erinnerst du dich an unsere Schule?</em> Nel Perfekt l'ausiliare è <em>haben</em> e il pronome si colloca subito dopo: <em>Wir haben uns am Bahnhof getroffen.</em> Con <em>sich erinnern</em> e con <em>sich freuen</em> la preposizione e il suo caso si imparano insieme al verbo: <em>sich erinnern an</em> + accusativo, <em>sich freuen auf</em> + accusativo (aspettare con gioia qualcosa di futuro), <em>sich freuen über</em> + accusativo (essere contenti di qualcosa di presente o di passato)."
      },
      {
        contrast: "L'italiano ha molti verbi riflessivi, ma non sono gli stessi. <em>Ricordare qualcosa</em> è transitivo, mentre in tedesco <em>sich erinnern</em> è riflessivo e vuole <em>an</em>: <em>Ich erinnere mich an meine Lehrerin</em>. Al contrario, <em>alzarsi</em> e <em>svegliarsi</em> in tedesco <b>non</b> sono riflessivi (<em>aufstehen, aufwachen</em>), mentre <em>sich ärgern</em> (arrabbiarsi) e <em>sich setzen</em> (sedersi) lo sono. Anche <em>sich treffen</em> è usato in modo reciproco: <em>Wir treffen uns</em> è «ci incontriamo»."
      },
      {
        trap: "Alla 1ª e alla 2ª persona il pronome ha due forme: l'accusativo <em>mich, dich</em> e il dativo <em>mir, dir</em>. Con <em>sich erinnern an</em> serve l'<b>accusativo</b>: <em>Ich erinnere mich</em>, non «Ich erinnere mir». Fai attenzione anche a <em>erinnern</em> senza pronome: <em>Ich erinnere dich an den Termin</em> significa «ti ricordo (ti faccio ricordare) l'appuntamento», che è un'altra cosa."
      },
      {
        tip: "Impara il verbo riflessivo sempre insieme alla sua preposizione: <em>sich erinnern an</em>, <em>sich freuen auf/über</em>, <em>sich interessieren für</em>, <em>sich ärgern über</em>, <em>sich treffen mit</em>. Un verbo, una preposizione, un caso."
      }
    ],
    grammar: {
      title: "Il pronome riflessivo",
      note: "Dopo il verbo coniugato. Alla 3ª persona (singolare e plurale) il pronome è sempre <b>sich</b>.",
      table: {
        head: ["persona", "pronome", "esempio"],
        rows: [
          ["ich", "mich", "Ich erinnere mich an meine Lehrerin."],
          ["du", "dich", "Erinnerst du dich an unsere Schule?"],
          ["er, sie, es", "sich", "Er freut sich auf die Ferien."],
          ["wir", "uns", "Wir haben uns am Bahnhof getroffen."],
          ["ihr", "euch", "Freut ihr euch auf das Klassentreffen?"],
          ["sie, Sie", "sich", "Sie ärgern sich über das Wetter."]
        ]
      },
      examples: [
        { tr: "Ti ricordi della nostra scuola?", note: "sich erinnern an + accusativo" },
        { tr: "Mi ricordo bene della mia insegnante.", note: "ich erinnere mich" },
        { tr: "Ci siamo incontrati alla stazione.", note: "Perfekt con haben: haben uns getroffen" },
        { tr: "Lui aspetta con gioia le vacanze.", note: "sich freuen auf + accusativo" },
        { tr: "Lei si arrabbia per il tempo.", note: "sich ärgern über + accusativo" },
        { tr: "Mi interesso di vecchie foto.", note: "sich interessieren für + accusativo" }
      ]
    },
    vocab: [
      "ricordarsi (di)",
      "essere contento, rallegrarsi (di, per)",
      "arrabbiarsi (per)",
      "incontrarsi (con)",
      "interessarsi (di)",
      "sedersi",
      "il ricordo",
      "la foto",
      "l'album",
      "l'incontro tra ex compagni di classe",
      "il compagno di classe",
      "il divertimento"
    ],
    exercises: [
      {
        q: "Quale frase è corretta?",
        opts: ["Ich erinnere mir an meine Schule.", "Ich erinnere mich an meine Schule.", "Ich erinnere mich meine Schule."],
        why: "<i>Sich erinnern</i> vuole l'accusativo <b>mich</b> e la preposizione <b>an</b>."
      },
      {
        q: "Completa: «Erinnerst du ___ an unsere Lehrerin?» (il pronome riflessivo)",
        hint: "du: accusativo",
        why: "<b>Dich</b>: il pronome riflessivo della 2ª persona singolare all'accusativo."
      },
      {
        q: "Completa: «Wir freuen ___ auf die Ferien.» (il pronome riflessivo)",
        hint: "wir: accusativo",
        why: "<b>Uns</b>: per <i>wir</i> il pronome riflessivo è <i>uns</i>."
      },
      {
        q: "Abbina ogni verbo al suo significato.",
        pairs: ["ricordarsi", "rallegrarsi", "arrabbiarsi", "interessarsi"]
      },
      {
        q: "Metti in ordine le parole.",
        tr: "Mi ricordo bene della mia insegnante.",
        why: "Il pronome riflessivo segue il verbo coniugato (<i>erinnere mich</i>); <i>an</i> introduce ciò di cui ci si ricorda."
      },
      {
        q: "Completa la frase.",
        tr: "Ieri mi sono incontrato con Anna e ci siamo ricordati della scuola.",
        why: "Nel Perfekt l'ausiliare è <i>haben</i>: <i>habe mich ... getroffen</i> e <i>haben uns ... erinnert</i>."
      },
      {
        q: "Traduci: «Mi ricordo bene della mia scuola.»",
        why: "<i>Ich erinnere mich gut an meine Schule</i>: <i>an</i> + accusativo, e <i>gut</i> sta dopo il pronome."
      },
      {
        q: "Un vecchio compagno ti riconosce.",
        setting: "Un ex compagno di classe ti saluta per strada.",
        lines: [
          { tr: "Ciao Lena! Ti ricordi di me?" },
          { tr: "Rispondi di sì e che ti ricordi di lui.", answerTr: "Sì, mi ricordo di te!" },
          { tr: "Eravamo insieme alle elementari." },
          { tr: "Rispondi che vi siete incontrati spesso dopo la scuola.", answerTr: "Sì, e ci siamo incontrati spesso dopo la scuola." },
          { tr: "Ti fa piacere l'incontro tra ex compagni?" },
          { tr: "Rispondi che sei molto contento.", answerTr: "Sì, sono molto contento!" }
        ]
      },
      {
        tr: "Ci siamo incontrati spesso dopo la scuola, e mi ricordo volentieri di quel periodo.",
        why: "In <i>ich</i> la <b>ch</b> dopo una vocale anteriore si pronuncia [ç], un suono soffiato che l'italiano non ha. In <i>erinnere</i> l'accento cade sulla seconda sillaba, e <i>er-</i> è atono."
      },
      {
        tr: "Mi ricordo bene della mia scuola elementare e mi rallegro per il ritrovo con gli ex compagni.",
        why: "In <i>Grundschule</i> la <b>sch</b> si legge [ʃ] e la <b>d</b> di <i>Grund</i> si pronuncia come una <b>t</b>; in <i>Klassentreffen</i> la <b>ss</b> è una <b>s</b> sorda."
      }
    ]
  },
  "lesson:a2-u01-test": {
    theme: "Verifica",
    title: "Verifica dell'unità 1",
    objectives: ["verificare Präteritum, als e wenn, weil e i modali al passato"],
    theory: [
      {
        p: "Dieci domande su tutta l'unità. Si supera con il 70%. Non riguardare le lezioni mentre rispondi: se non ricordi qualcosa, è meglio tornare a ripassare."
      }
    ],
    exercises: [
      {
        tr: "Il Präteritum di sein, tutte le persone.",
        why: "<i>War, warst, war, waren, wart, waren</i>."
      },
      {
        tr: "Il Präteritum di müssen, tutte le persone.",
        why: "<i>Musste, musstest, musste, mussten, musstet, mussten</i>: senza Umlaut."
      },
      {
        q: "Completa: «Gestern ___ wir keine Zeit.» (non avevamo, usa haben)",
        hint: "haben, Präteritum, wir",
        why: "<b>Hatten</b>: radice <i>hatt-</i> e terminazione <i>-en</i>."
      },
      {
        q: "Completa: «Meine Eltern haben viel gearbeitet, ___ ich klein war.» (quando, un periodo concluso)",
        hint: "un fatto singolo nel passato",
        why: "Un periodo concluso del passato: <b>als</b>."
      },
      {
        q: "Completa: «Ich konnte nicht kommen, ___ ich krank war.» (perché, usa weil)",
        hint: "usa weil",
        why: "<b>Weil</b> introduce il motivo e manda il verbo (<i>war</i>) in fondo."
      },
      {
        q: "Quale frase è corretta?",
        opts: [
          "Ich bleibe zu Hause, weil ich müde bin.",
          "Ich bleibe zu Hause, weil ich bin müde.",
          "Ich bleibe zu Hause, weil bin ich müde."
        ],
        why: "Dopo <i>weil</i> il verbo coniugato va in fondo: <i>weil ich müde bin</i>."
      },
      {
        q: "Completa la frase.",
        tr: "Quando ero piccolo, avevo un cane.",
        why: "<i>War</i> in fondo alla subordinata; poi la principale comincia con il verbo: <i>hatte ich</i>."
      },
      {
        q: "Completa la frase.",
        tr: "Non potevo giocare, perché dovevo fare i compiti.",
        why: "<i>Konnte</i> o <i>durfte</i> sono entrambi possibili, secondo che si tratti di impossibilità o di permesso. Nella subordinata <i>machen</i> precede il modale <i>musste</i>, che chiude la frase."
      },
      {
        tr: "Quando ero piccolo, non mi era permesso guardare la televisione a lungo, perché i miei genitori erano severi.",
        why: "In <i>durfte</i> la <b>u</b> è breve; in <i>streng</i> la <b>str</b> inizia con [ʃtr]; la <b>ng</b> è una sola nasale [ŋ]."
      },
      {
        tr: "Quando ero bambino avevo un cane, e potevo giocare con lui ogni giorno.",
        why: "In <i>Hund</i> la <b>d</b> finale si pronuncia come una <b>t</b>; in <i>jeden Tag</i> la <b>g</b> finale è una <b>k</b> sorda."
      }
    ]
  }
});
