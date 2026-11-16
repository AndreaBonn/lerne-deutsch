/* ============================================================
   Learner-language text (it) for data/core/a2-01.js, unit a2-u01.
   Keys point at ids in the neutral layer; arrays merge by index,
   so their length has to match core.
   Checked by scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("it", {
  "unit:a2-u01": {
    title: "Un tempo e oggi",
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
        contrast: "L'italiano distingue l'<b>imperfetto</b> (<em>ero, avevo</em>), che descrive come erano le cose, dal <b>passato remoto</b> (<em>fui, ebbi</em>), che racconta un fatto concluso (la distinzione, però, non si riduce a descrizione contro fatto concluso). Il Präteritum non fa questa distinzione: <em>Ich war müde</em> può corrispondere a tempi italiani diversi, secondo contesto e aspetto: <em>Als Kind war ich oft krank</em> = «Da bambino ero spesso malato», <em>Gestern war ich beim Arzt</em> = «Ieri sono stato dal medico». Un'altra differenza è piccola ma costante: in <em>als Kind</em> («da bambino») non c'è articolo, e <em>Kind</em> è neutro."
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
        why: "<i>Hatte, hattest, hatte, hatten, hattet, hatten</i>: <i>haben</i> è irregolare al Präteritum: il tema è <i>hatt-</i>, con le terminazioni <i>-e, -est, -e, -en, -et, -en</i>."
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
        why: "<i>Als</i> per un fatto solo. Il Perfekt di <i>umziehen</i> si fa con <b>sein</b>: <i>sind umgezogen</i>."
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
      "i dolci, le caramelle (plurale di <i>die Süßigkeit</i>)",
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
        why: "In <i>durfte</i> la <b>u</b> è breve; in <i>früh</i> la <b>ü</b> è lunga. In <i>lange</i> la <b>ng</b> si legge come una sola nasale [ŋ], come la nasale di «anche», senza la consonante [k]."
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
        p: "Un verbo è <b>riflessivo</b> quando l'azione torna sul soggetto: <em>Ich erinnere mich</em> (mi ricordo). Il pronome cambia con la persona: <em>mich, dich, sich, uns, euch, sich</em>. Nella principale con il soggetto in prima posizione sta dopo il verbo coniugato: <em>Du erinnerst dich an unsere Schule.</em> Nelle domande il verbo viene per primo e il pronome segue il soggetto: <em>Erinnerst du dich an unsere Schule?</em> Nel Perfekt l'ausiliare è <em>haben</em> e il pronome sta di norma vicino all'inizio del Mittelfeld, dopo un eventuale soggetto pronominale: <em>Wir haben uns am Bahnhof getroffen. Gestern haben wir uns getroffen. Gestern habe ich mich mit Anna getroffen.</em> Nella subordinata segue il soggetto: <em>weil ich mich erinnere</em>. Con <em>sich erinnern</em> e con <em>sich freuen</em> la preposizione e il suo caso si imparano insieme al verbo: <em>sich erinnern an</em> + accusativo, <em>sich freuen auf</em> + accusativo (aspettare con gioia qualcosa di futuro), <em>sich freuen über</em> + accusativo (essere contenti di qualcosa di presente o di passato)."
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
      note: "Nella principale con soggetto iniziale dopo il verbo coniugato (con soggetto pronominale posposto, dopo di lui: <i>Gestern habe ich mich ...</i>; nella subordinata: <i>weil ich mich erinnere</i>). Alla 3ª persona (singolare e plurale) il pronome è sempre <b>sich</b>.",
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
  },
  "unit:a2-u02": {
    title: "In viaggio",
    grammarNote: "wohin? con nach, zu e in + accusativo · presente con indicatore di tempo e Futur I · Perfekt e registro in albergo · wenn + Perfekt per un'azione futura già compiuta"
  },
  "lesson:a2-u02-l1": {
    theme: "In stazione",
    title: "In stazione: nach Wien, in die Schweiz",
    objectives: [
      "dire dove vai con nach, in + accusativo e zu",
      "distinguere wohin? (destinazione) da wo? (posizione)",
      "comprare un biglietto e chiedere informazioni in stazione"
    ],
    theory: [
      {
        h: "Wohin? nach, in o zu",
        p: "Alla domanda <b>wohin?</b> (verso dove?) il tedesco sceglie la preposizione secondo la destinazione. Con <b>città e paesi senza articolo</b> si usa <strong>nach</strong>: <em>Ich fahre nach Wien. Wir fliegen nach Italien.</em> Con i <b>paesi che hanno l'articolo</b> si usa <strong>in</strong> + <b>accusativo</b>: <em>Wir fahren in die Schweiz.</em> Verso <b>una persona</b> e di norma verso un <b>edificio o un luogo preciso</b> si usa <strong>zu</strong> + dativo: <em>Ich fahre zu meiner Tante. Wir gehen zum Bahnhof.</em> Con <em>zu</em> + articolo ci sono le contrazioni <em>zum</em> (zu dem) e <em>zur</em> (zu der)."
      },
      {
        contrast: "L'italiano ragiona in modo simile ma con altri confini: <em>a</em> per le città (<em>vado a Vienna</em>), <em>in</em> per i paesi (<em>vado in Svizzera, in Italia</em>), <em>da</em> per le persone (<em>vado da mia zia</em>). In tedesco i paesi si dividono in due gruppi: <em>Italien</em>, <em>Deutschland</em>, <em>Österreich</em> non hanno articolo e vogliono <em>nach</em>, proprio come le città, mentre <em>die Schweiz</em>, <em>die Türkei</em>, <em>die USA</em> hanno l'articolo e vogliono <em>in die</em>. Il nostro <em>da</em> verso una persona diventa <em>zu</em> (<em>zu meiner Tante</em>), mentre <em>bei</em> indica dove si sta (<em>bei meiner Tante</em>, «da mia zia»)."
      },
      {
        trap: "Il caso dipende da ciò che chiede la frase. Con <b>wohin?</b> (movimento verso un luogo) <em>in</em> vuole l'<b>accusativo</b>: <em>Wir fahren in die Schweiz</em>. Con <b>wo?</b> (posizione, dove si è) vuole il <b>dativo</b>: <em>Meine Tante wohnt in der Schweiz</em>. Due frasi quasi uguali, due casi diversi, e <em>die</em> contro <em>der</em> è l'unica spia. Fai attenzione anche a <em>nach die Schweiz</em>: non esiste, perché <em>nach</em> non va con i paesi che hanno l'articolo."
      },
      {
        tip: "In stazione ti serviranno poche frasi fisse: <em>Eine Fahrkarte nach Wien, bitte.</em> <em>Einfach oder hin und zurück?</em> (solo andata o andata e ritorno?) <em>Von welchem Gleis fährt der Zug ab?</em> Impara <em>die Schweiz</em> con l'articolo, come un'unità sola."
      }
    ],
    grammar: {
      title: "Wohin? nach, in + accusativo, zu",
      note: "La preposizione dipende dalla destinazione. <b>nach</b> non ha articolo, <b>zu</b> vuole il dativo (<i>zum</i>, <i>zur</i>), <b>in</b> con wohin? vuole l'accusativo.",
      table: {
        head: ["destinazione", "preposizione", "esempio"],
        rows: [
          ["città, paesi senza articolo", "nach", "nach Wien, nach Italien"],
          ["paesi con articolo", "in + accusativo", "in die Schweiz, in die Türkei"],
          ["persone", "zu + dativo", "zu meiner Tante, zum Arzt"],
          ["edifici, luoghi precisi", "zu + dativo", "zum Bahnhof, zur Post"],
          ["posizione (wo?)", "in + dativo", "in der Schweiz"]
        ]
      },
      examples: [
        { tr: "Vado a Vienna.", note: "nach + città, senza articolo" },
        { tr: "Voliamo in Italia.", note: "nach + paese senza articolo" },
        { tr: "In estate vanno in Svizzera.", note: "wohin? in + accusativo: in die Schweiz" },
        { tr: "Lui va da sua zia.", note: "zu + dativo: zu seiner Tante" },
        { tr: "Andiamo alla stazione.", note: "zu + dativo: zum (zu dem) Bahnhof" },
        { tr: "Mia zia abita in Svizzera.", note: "wo? in + dativo: in der Schweiz" }
      ]
    },
    vocab: [
      "la stazione",
      "il treno",
      "il binario",
      "il biglietto del treno",
      "l'orario (dei treni)",
      "la partenza",
      "l'arrivo",
      "la Svizzera",
      "il paese, lo Stato",
      "l'informazione (sportello informazioni)",
      "solo andata",
      "andata e ritorno"
    ],
    exercises: [
      {
        q: "Completa: «Wohin fährst du? Ich fahre ___ Wien.»",
        opts: ["nach", "in", "zu"],
        why: "Con le città senza articolo si usa <b>nach</b>. <i>In Wien</i> indica dove si è, non dove si va."
      },
      {
        q: "Dici che andate in Svizzera. Quale frase è corretta?",
        opts: ["Wir fahren nach die Schweiz.", "Wir fahren in die Schweiz.", "Wir fahren in der Schweiz."],
        why: "<i>Die Schweiz</i> ha l'articolo: serve <b>in</b> + accusativo (<i>in die Schweiz</i>). <i>In der Schweiz</i> è il dativo e dice dove si è."
      },
      {
        q: "Completa: «Morgen fliege ich ___ Italien.» (verso un paese senza articolo)",
        hint: "nach, in o zu?",
        why: "<i>Italien</i> non ha articolo, quindi <b>nach</b>, come con le città."
      },
      {
        q: "Completa: «Ich fahre ___ meiner Tante.» (verso una persona)",
        hint: "preposizione + dativo",
        why: "Verso una persona si usa <b>zu</b> + dativo: <i>zu meiner Tante</i>."
      },
      {
        q: "Completa la frase.",
        tr: "Vado a Vienna. Poi andiamo in Svizzera, e la sera vado dal mio amico.",
        why: "Tre destinazioni, tre preposizioni: <i>nach Wien</i>, <i>in die Schweiz</i> (accusativo, paese con articolo), <i>zu meinem Freund</i> (persona, dativo)."
      },
      {
        q: "Abbina ogni destinazione alla sua traduzione.",
        pairs: ["a Vienna", "in Svizzera (destinazione)", "da mia zia", "alla stazione"]
      },
      {
        q: "Traduci: «Domani andiamo in Svizzera (in treno).»",
        why: "<i>Morgen fahren wir in die Schweiz</i>: <i>fahren</i> per un mezzo di trasporto; <i>reisen</i> è un'alternativa. L'ordine può cambiare (<i>Wir fahren morgen ...</i>), il verbo coniugato resta in seconda posizione."
      },
      {
        q: "Allo sportello della stazione.",
        setting: "Compri un biglietto per Vienna.",
        lines: [
          { tr: "Buongiorno. Dove va?" },
          { tr: "Rispondi che vai a Vienna.", answerTr: "Vado a Vienna." },
          { tr: "Solo andata o andata e ritorno?" },
          { tr: "Rispondi: andata e ritorno, per favore.", answerTr: "Andata e ritorno, per favore." },
          { tr: "Poi prosegue il viaggio?" },
          { tr: "Rispondi che dopo vai da tua zia.", answerTr: "Sì, dopo vado da mia zia." }
        ]
      },
      {
        tr: "Buongiorno, vorrei un biglietto per Vienna, andata e ritorno, per favore.",
        why: "In <i>Fahrkarte</i> la prima <b>a</b> è lunga; in <i>Wien</i> la <b>W</b> si legge [v] e <b>ie</b> è una <b>i</b> lunga; <i>zurück</i> ha una <b>ü</b> breve."
      },
      {
        tr: "In estate vado in Svizzera e poi da mia zia a Vienna.",
        why: "In <i>Schweiz</i> la <b>sch</b> si legge [ʃ], la <b>w</b> è [v], <b>ei</b> suona [aɪ] e la <b>z</b> finale è [ts]. In <i>Sommer</i> la <b>S</b> iniziale davanti a vocale è di norma sonora."
      }
    ]
  },
  "lesson:a2-u02-l2": {
    theme: "Piani di viaggio",
    title: "Domani parto, partirò",
    objectives: [
      "parlare del futuro con il presente e un indicatore di tempo",
      "formare il Futur I con werden + infinito in fondo",
      "riconoscere quando il Futur I è utile (promessa, decisione, previsione)"
    ],
    theory: [
      {
        h: "Il futuro: presente con indicatore di tempo, oppure Futur I",
        p: "Per parlare del futuro il tedesco usa di solito il <b>presente</b> insieme a un indicatore di tempo: <em>Morgen fahre ich nach Wien. Nächste Woche fliegen wir nach Spanien.</em> Esiste anche il <strong>Futur I</strong>: <em>werden</em> coniugato in seconda posizione e l'<b>infinito in fondo</b> alla frase: <em>Ich werde dich morgen anrufen. Wir werden im Sommer in die Schweiz fahren.</em> Il Futur I si usa per una promessa, una decisione, una previsione (<em>Es wird heute Abend regnen</em>) oppure quando manca un indicatore di tempo."
      },
      {
        contrast: "L'italiano ha un futuro semplice (<em>andrò, partirò</em>) molto frequente, anche se per i programmi vicini si dice spesso il presente (<em>domani parto</em>). In tedesco il presente con <em>morgen</em>, <em>nächste Woche</em>, <em>bald</em> è la forma normale, e il Futur I, corretto, è meno frequente: <em>Morgen werde ich nach Wien fahren</em> si dice, ma <em>Morgen fahre ich nach Wien</em> è più abituale. Nel Futur I il verbo pieno non si coniuga: sta all'infinito in fondo, come in <em>Ich werde fahren</em>."
      },
      {
        trap: "Con il Futur I il verbo pieno resta all'infinito: <em>Ich werde morgen nach Wien fahren</em>, non «Ich werde fahre». Con un verbo separabile l'infinito resta unito: <em>Ich werde dich anrufen</em>. Attenzione: <em>werden</em> è anche un verbo pieno e significa «diventare»: <em>Er wird Arzt</em> (diventa medico), <em>Es wird kalt</em> (diventa freddo). Se manca l'infinito in fondo, non è un futuro."
      },
      {
        tip: "Prima cerca un indicatore di tempo: <em>morgen, nächste Woche, im Sommer, bald, am Wochenende</em>. Se c'è, il presente basta. Se vuoi dare un tono di promessa o di decisione (<em>Ich werde es nicht vergessen</em>), usa il Futur I. In entrambi i casi la prima posizione può essere il tempo: <em>Morgen fahre ich ...</em>, con il verbo in seconda posizione."
      }
    ],
    grammar: {
      title: "Il Futur I con werden",
      note: "<b>werden</b> si coniuga in seconda posizione, il verbo pieno va <b>all'infinito in fondo</b>. Con un indicatore di tempo il presente è la forma normale.",
      table: {
        head: ["persona", "werden", "esempio"],
        rows: [
          ["ich", "werde", "Ich werde fahren."],
          ["du", "wirst", "Du wirst fahren."],
          ["er, sie, es", "wird", "Es wird regnen."],
          ["wir", "werden", "Wir werden fliegen."],
          ["ihr", "werdet", "Ihr werdet ankommen."],
          ["sie, Sie", "werden", "Sie werden bleiben."]
        ]
      },
      examples: [
        { tr: "Domani vado a Vienna.", note: "presente + morgen: forma normale" },
        { tr: "Settimana prossima voliamo in Spagna.", note: "presente + nächste Woche" },
        { tr: "Ti chiamerò domani.", note: "Futur I: verbo separabile unito all'infinito in fondo" },
        { tr: "Stasera pioverà.", note: "Futur I come previsione" },
        { tr: "In estate andremo in Svizzera.", note: "werden in seconda posizione, infinito in fondo" },
        { tr: "Ti manderò una foto.", note: "Futur I: una promessa" }
      ]
    },
    vocab: [
      "il viaggio",
      "le ferie, la vacanza",
      "la settimana",
      "il fine settimana",
      "il volo",
      "l'aeroporto",
      "la valigia",
      "il biglietto (del volo, dell'evento)",
      "domani",
      "settimana prossima",
      "presto, tra poco",
      "in estate"
    ],
    exercises: [
      {
        tr: "Il presente di werden, tutte le persone.",
        why: "<i>Werde, wirst, wird, werden, werdet, werden</i>: <i>werden</i> è irregolare (<i>e</i> diventa <i>i</i> a <i>du</i> e a <i>er, sie, es</i>) ed è l'ausiliare del Futur I."
      },
      {
        tr: "Il Futur I di fahren, tutte le persone.",
        why: "<i>Ich werde fahren, du wirst fahren, er wird fahren, wir werden fahren, ihr werdet fahren, sie werden fahren</i>: <i>werden</i> cambia, l'infinito resta uguale."
      },
      {
        tr: "Il Futur I di fliegen, tutte le persone.",
        why: "Nel Futur I l'infinito non si coniuga: <i>ich werde fliegen, du wirst fliegen ...</i>. In frase normale sta in fondo."
      },
      {
        q: "Quale frase usa correttamente il Futur I?",
        opts: [
          "Ich werde morgen nach Wien fahren.",
          "Ich werde morgen nach Wien fahre.",
          "Ich werde fahren morgen nach Wien."
        ],
        why: "<b>werden</b> in seconda posizione e <b>infinito in fondo</b>. Il verbo pieno non si coniuga e non va in seconda posizione: resta all'infinito, in fondo."
      },
      {
        q: "Quale frase è corretta? (Domani vado a Berlino.)",
        opts: [
          "Morgen ich fahre nach Berlin.",
          "Morgen fahre ich nach Berlin.",
          "Morgen werde fahre ich nach Berlin."
        ],
        why: "Con <i>morgen</i> in prima posizione il verbo coniugato resta in seconda (<i>fahre</i>) e il soggetto lo segue: <i>Morgen fahre ich ...</i>."
      },
      {
        q: "Completa: «Wir ___ im Sommer nach Spanien fliegen.» (werden, wir)",
        hint: "werden, wir",
        why: "<b>Werden</b>: alla prima persona plurale la forma è uguale all'infinito, e <i>fliegen</i> resta all'infinito in fondo."
      },
      {
        q: "Completa: «Nächste Woche ___ ich nach Hamburg.» (presente di fahren)",
        hint: "fahren, presente, ich",
        why: "<b>Fahre</b>: con <i>nächste Woche</i> il presente basta. <i>Nächste Woche</i> sta in prima posizione, il verbo in seconda."
      },
      {
        q: "Completa la frase (per «mandare» vanno bene schicken e senden).",
        tr: "Domani ti manderò una foto.",
        why: "<i>Morgen werde ich dir ein Foto schicken</i>: dopo <i>morgen</i> il verbo coniugato (<i>werde</i>) sta in seconda posizione e il soggetto lo segue; l'infinito va in fondo. Anche <i>senden</i> va bene."
      },
      {
        tr: "Settimana prossima vado a Vienna in treno, e in estate andremo in Svizzera in aereo.",
        why: "In <i>Nächste</i> la <b>ch</b> dopo <b>ä</b> è [ç], un suono soffiato che l'italiano non ha; in <i>Woche</i> la <b>ch</b> dopo <b>o</b> è [x], più in fondo alla gola. In <i>werden</i> la <b>w</b> si legge [v]."
      },
      {
        tr: "Domani vado ad Amburgo, e settimana prossima andrò a trovare la mia amica.",
        why: "In <i>Hamburg</i> la <b>g</b> finale suona di norma come una <b>k</b> sorda ([k]); in <i>besuchen</i> la <b>ch</b> dopo <b>u</b> è [x] e l'accento cade sulla seconda sillaba, perché <i>be-</i> è atono."
      }
    ]
  },
  "lesson:a2-u02-l3": {
    theme: "In albergo",
    title: "Ho prenotato una camera",
    objectives: [
      "dire che hai prenotato o prenotato online con il Perfekt",
      "formare il participio di reservieren e buchen",
      "scegliere tra Sie e du in un albergo e usare formule cortesi"
    ],
    theory: [
      {
        h: "Il Perfekt: prenotare e arrivare",
        p: "Per dire che hai già prenotato si usa il <strong>Perfekt</strong>: ausiliare in seconda posizione e <b>participio II</b> in fondo. <em>Ich habe ein Zimmer reserviert. Wir haben ein Doppelzimmer gebucht.</em> I verbi in <em>-ieren</em> non prendono <em>ge-</em>: <em>reservieren → reserviert</em>. <em>Buchen</em> è regolare: <em>gebucht</em>. I verbi di movimento o di cambio di stato prendono <em>sein</em>: <em>Wir sind gestern Abend angekommen</em> (participio <em>angekommen</em>, con <em>ge-</em> al centro)."
      },
      {
        contrast: "Il participio tedesco non concorda con il soggetto: <em>Er ist angekommen, Sie ist angekommen, Wir sind angekommen</em>, senza <em>-o/-a/-i</em>. In italiano si dice <em>è arrivato, è arrivata, sono arrivati</em>. Inoltre l'italiano usa <em>prenotare</em> per tutto; il tedesco ha <em>reservieren</em> (tenere un posto) e <em>buchen</em> (prenotare un viaggio, una camera), spesso intercambiabili in albergo. Per la cortesia l'italiano usa il <em>Lei</em> (terza persona singolare); il tedesco usa <em>Sie</em>, che si coniuga come la terza persona <b>plurale</b>: <em>Haben Sie ein Zimmer?</em>"
      },
      {
        trap: "Non dire «Ich habe ein Zimmer reservieren» (infinito al posto del participio) e non dimenticare l'ausiliare giusto: <em>Wir sind angekommen</em>, non «Wir haben angekommen». Quanto al registro: alla reception si usa di norma <em>Sie</em>, e <em>Könnten Sie mir bitte ...?</em> è più cortese di <em>Können Sie ...?</em>. Con amici o in un ostello tra giovani di solito si usa <em>du</em>, ma nel dubbio scegli <em>Sie</em>."
      },
      {
        tip: "Tre frasi da avere pronte in albergo: <em>Ich habe ein Zimmer reserviert.</em> <em>Haben Sie ein Zimmer für zwei Nächte frei?</em> <em>Könnten Sie mir bitte den Schlüssel geben?</em> Il participio dei verbi in <em>-ieren</em> finisce in <em>-iert</em> e non prende <em>ge-</em>."
      }
    ],
    grammar: {
      title: "Il Perfekt: reservieren, buchen, ankommen",
      note: "Ausiliare in seconda posizione, participio II in fondo. <b>haben</b> con quasi tutti i verbi, <b>sein</b> con i verbi di movimento. I verbi in <b>-ieren</b> non hanno <i>ge-</i>.",
      table: {
        head: ["infinito", "participio II", "esempio"],
        rows: [
          ["reservieren", "reserviert", "Ich habe ein Zimmer reserviert."],
          ["buchen", "gebucht", "Wir haben ein Zimmer gebucht."],
          ["ankommen", "angekommen", "Wir sind gestern angekommen."],
          ["abfahren", "abgefahren", "Der Zug ist abgefahren."]
        ]
      },
      examples: [
        { tr: "Ho prenotato una camera.", note: "-ieren: reserviert, senza ge-" },
        { tr: "Abbiamo prenotato una camera doppia per due notti.", note: "haben + gebucht in fondo" },
        { tr: "Ieri sera siamo arrivati.", note: "ankommen vuole sein" },
        { tr: "Ha una prenotazione?", note: "forma di cortesia con Sie (come la terza persona plurale)" },
        { tr: "Potrebbe aiutarmi, per favore?", note: "Könnten Sie: richiesta cortese" },
        { tr: "Hai già prenotato un albergo?", note: "con du: Hast du ...?" }
      ]
    },
    vocab: [
      "l'albergo",
      "la camera",
      "la camera doppia",
      "la prenotazione",
      "la notte",
      "la chiave",
      "la colazione",
      "la reception",
      "l'ospite",
      "il bagaglio",
      "prenotare (un posto)",
      "prenotare (una camera, un viaggio)"
    ],
    exercises: [
      {
        q: "Completa: «Ich habe ein Zimmer ___.» (il participio di reservieren)",
        opts: ["gereserviert", "reserviert", "reservieren"],
        why: "I verbi in <i>-ieren</i> non prendono <i>ge-</i>: <b>reserviert</b>. L'infinito (<i>reservieren</i>) non va al posto del participio."
      },
      {
        q: "Completa: «Wir haben ein Doppelzimmer ___.» (il participio di buchen)",
        hint: "buchen è regolare",
        why: "<b>Gebucht</b>: <i>ge-</i> + radice + <i>-t</i>."
      },
      {
        q: "Completa: «Wir ___ gestern Abend im Hotel angekommen.» (haben o sein?)",
        hint: "ankommen è un verbo di movimento",
        why: "<b>Sind</b>: <i>ankommen</i> indica un cambio di luogo e vuole <i>sein</i> al Perfekt."
      },
      {
        q: "Completa: «Guten Abend, ___ Sie ein Zimmer frei?» (presente di haben, dando del Lei)",
        hint: "haben, presente, Sie",
        why: "<b>Haben</b>: <i>Sie</i> di cortesia si coniuga come la terza persona plurale."
      },
      {
        q: "Completa la frase (per la camera vanno bene reservieren e buchen).",
        tr: "Ho prenotato una camera. Ieri sera siamo arrivati.",
        why: "<i>Ich habe ein Zimmer reserviert</i> (anche <i>gebucht</i>) e <i>Wir sind gestern Abend angekommen</i>. Le due frasi hanno due ausiliari diversi: <i>haben</i> e <i>sein</i>."
      },
      {
        q: "Abbina ogni parola al suo significato.",
        pairs: ["la camera doppia", "la prenotazione", "la chiave", "la colazione"]
      },
      {
        q: "Traduci: «Abbiamo prenotato una camera doppia per due notti.»",
        why: "<i>Wir haben ein Doppelzimmer für zwei Nächte reserviert</i>. Va bene anche <i>gebucht</i>; l'ordine di <i>für zwei Nächte</i> e <i>ein Doppelzimmer</i> può cambiare, il participio resta in fondo."
      },
      {
        q: "Alla reception.",
        setting: "Arrivi in albergo e parli con il receptionist.",
        lines: [
          { tr: "Buonasera. Ha una prenotazione?" },
          { tr: "Rispondi che hai prenotato una camera.", answerTr: "Sì, ho prenotato una camera." },
          { tr: "È in viaggio da molto?" },
          { tr: "Rispondi che siete partiti alle cinque.", answerTr: "Sì, siamo partiti alle cinque." },
          { tr: "La colazione è dalle sette alle dieci. Ha altre domande?" },
          { tr: "Chiedi la chiave con cortesia, dando del Lei.", answerTr: "Sì, potrebbe darmi la chiave, per favore?" }
        ]
      },
      {
        tr: "Buonasera, ho prenotato una camera doppia per due notti.",
        why: "In <i>Doppelzimmer</i> la <b>z</b> è [ts]; <i>Nächte</i> ha una <b>ch</b> dopo <b>ä</b>, cioè [ç], un soffio sottile che l'italiano non ha. In <i>Abend</i> la <b>b</b> è sonora, perché non è alla fine della sillaba."
      },
      {
        tr: "Abbiamo prenotato una camera e ieri sera siamo arrivati in albergo.",
        why: "In <i>angekommen</i> la <b>ng</b> è una sola nasale [ŋ], senza la consonante [k]; in <i>gebucht</i> la <b>ch</b> dopo <b>u</b> è [x], raschiata in fondo alla gola."
      }
    ]
  },
  "lesson:a2-u02-l4": {
    theme: "Dopo l'arrivo",
    title: "Quando sarò arrivato, ti chiamo",
    objectives: [
      "usare wenn + Perfekt per un'azione futura già compiuta",
      "distinguere wenn (presente, futuro, ripetizione) da als (un fatto passato singolo)",
      "combinare wenn con il presente o con il Futur I nella principale"
    ],
    theory: [
      {
        h: "Wenn + Perfekt: dopo che sarò arrivato",
        p: "<strong>Wenn</strong> introduce un fatto del presente o del futuro. Quando l'azione della subordinata sarà <b>già compiuta</b> prima di quella della principale, nella subordinata si usa il <b>Perfekt</b>: <em>Wenn ich angekommen bin, rufe ich dich an</em> (quando sarò arrivato, ti chiamo). Il verbo coniugato (<em>bin</em>) va <b>in fondo</b>; la principale comincia con il verbo: <em>rufe ich</em>. Nella principale puoi usare il presente (<em>rufe ich ... an</em>) o il Futur I (<em>werde ich ... anrufen</em>)."
      },
      {
        contrast: "L'italiano per un fatto futuro già compiuto usa il <b>futuro anteriore</b> (<em>quando sarò arrivato, ti chiamerò</em>) oppure il presente (<em>quando arrivo, ti chiamo</em>). Il tedesco non ha una forma separata: nella subordinata usa il <em>Perfekt</em> per sottolineare che è compiuto (<em>Wenn ich angekommen bin</em>), oppure il presente se non serve sottolinearlo (<em>Wenn ich ankomme</em>). Per un fatto passato singolo serve <em>als</em> con il Perfekt: <em>Als wir gestern angekommen sind, hat es geregnet.</em>"
      },
      {
        trap: "<em>Als</em> e <em>wenn</em> non sono intercambiabili: con un fatto passato singolo serve <b>als</b> (<em>Als ich gestern angekommen bin, ...</em>), con presente, futuro e fatti ripetuti serve <b>wenn</b>. Non scrivere «Wenn ich bin angekommen»: dopo <em>wenn</em> il verbo coniugato va in fondo, dopo il participio. E non confondere <em>wenn</em> con <em>wann</em>, che è la parola della domanda (<em>Wann kommst du an?</em>)."
      },
      {
        tip: "Costruisci la frase in due pezzi: la subordinata <em>Wenn ich angekommen bin,</em> con il verbo in fondo, poi una virgola e la principale che comincia con il verbo, <em>rufe ich dich an</em>. Se la subordinata sta dopo, l'ordine è normale: <em>Ich rufe dich an, wenn ich angekommen bin.</em>"
      }
    ],
    grammar: {
      title: "Wenn + Perfekt, als + Perfekt",
      note: "Il verbo coniugato (l'ausiliare) va <b>in fondo</b>, dopo il participio. Se la subordinata sta prima, la principale comincia con il verbo.",
      table: {
        head: ["situazione", "parola e tempo", "esempio"],
        rows: [
          ["futuro già compiuto", "wenn + Perfekt", "Wenn ich angekommen bin, rufe ich dich an."],
          ["presente o futuro", "wenn + presente", "Wenn ich Zeit habe, besuche ich dich."],
          ["fatto passato singolo", "als + Perfekt", "Als wir gestern angekommen sind, hat es geregnet."]
        ]
      },
      examples: [
        { tr: "Quando sarò arrivato, ti chiamo.", note: "wenn + Perfekt: ausiliare in fondo" },
        { tr: "Quando avremo trovato l'albergo, andremo a mangiare.", note: "gefunden haben, poi gehen wir" },
        { tr: "Quando il treno sarà partito, ti chiamerò.", note: "principale con Futur I: werde ich anrufen" },
        { tr: "Quando ho tempo, vengo a trovarti.", note: "wenn + presente" },
        { tr: "Quando siamo arrivati ieri, pioveva.", note: "als: un fatto passato singolo" },
        { tr: "Ti mando un messaggio quando avrò cambiato treno.", note: "subordinata dopo: ordine normale" }
      ]
    },
    vocab: [
      "arrivare",
      "partire (di un mezzo)",
      "cambiare (mezzo, treno)",
      "telefonare a",
      "il ritardo",
      "il messaggio",
      "la coincidenza",
      "la fermata",
      "il taxi",
      "il collegamento",
      "puntuale",
      "più tardi"
    ],
    exercises: [
      {
        q: "Come dici: «Quando sarò arrivato, ti chiamo»?",
        opts: [
          "Wenn ich angekommen bin, rufe ich dich an.",
          "Wenn ich ankomme bin, rufe ich dich an.",
          "Wenn ich bin angekommen, rufe ich dich an."
        ],
        why: "Nella subordinata il participio va prima e l'ausiliare in fondo: <i>angekommen bin</i>. La principale comincia con il verbo: <i>rufe ich ... an</i>."
      },
      {
        q: "Quale parola? «___ ich gestern angekommen bin, hat es geregnet.»",
        opts: ["Als", "Wenn", "Wann"],
        why: "Un fatto passato singolo: <b>als</b>. <i>Wenn</i> serve per presente, futuro e fatti ripetuti."
      },
      {
        q: "Completa: «Ich rufe dich an, ___ ich angekommen bin.» (quando, usa wenn)",
        hint: "usa wenn",
        why: "<b>Wenn</b> per un fatto del futuro. Il verbo coniugato (<i>bin</i>) va in fondo."
      },
      {
        q: "Completa: «Wenn ich angekommen ___, rufe ich dich an.» (sein, Perfekt, ich)",
        hint: "sein, presente, ich",
        why: "<b>Bin</b>: l'ausiliare di <i>ankommen</i> è <i>sein</i>, e in fondo alla subordinata sta il verbo coniugato."
      },
      {
        q: "Completa la frase.",
        tr: "Quando avremo trovato l'albergo, andremo a mangiare.",
        why: "<i>Wenn wir das Hotel gefunden haben, gehen wir essen</i>: nella subordinata <i>haben</i> chiude la frase; nella principale il verbo (<i>gehen</i>) viene subito dopo la virgola."
      },
      {
        q: "Abbina ogni verbo al suo significato.",
        pairs: ["arrivare", "partire", "cambiare (treno)", "telefonare"]
      },
      {
        q: "Metti in ordine le parole.",
        tr: "Quando sarò arrivato, ti chiamo.",
        why: "Due ordini sono corretti: subordinata prima (<i>Wenn ich angekommen bin, rufe ich dich an</i>) oppure dopo (<i>Ich rufe dich an, wenn ich angekommen bin</i>). Il verbo separabile <i>anrufen</i> lascia <i>an</i> in fondo alla principale."
      },
      {
        q: "Traduci: «Quando arrivo, ti chiamo.»",
        why: "Il presente basta: <i>Wenn ich ankomme, rufe ich dich an</i>. Va bene anche il Perfekt nella subordinata (<i>angekommen bin</i>) o il Futur I nella principale (<i>werde ich dich anrufen</i>), e l'ordine può essere invertito."
      },
      {
        tr: "Quando sarò arrivato, ti chiamo, e poi andiamo a mangiare insieme.",
        why: "In <i>angekommen</i> la <b>ng</b> è una sola nasale [ŋ], senza la consonante [k]; in <i>zusammen</i> la <b>z</b> è [ts] e la <b>s</b> davanti a vocale è di norma sonora."
      },
      {
        tr: "Quando sarò arrivato in albergo, ti mando un messaggio.",
        why: "In <i>Nachricht</i> la <b>ch</b> è [x] dopo <b>a</b> e [ç] dopo <b>i</b>: due suoni diversi nella stessa parola, e la <b>sch</b> di <i>schicke</i> è [ʃ]. In <i>Hotel</i> l'accento cade sull'ultima sillaba."
      }
    ]
  },
  "lesson:a2-u02-test": {
    theme: "Verifica",
    title: "Verifica dell'unità 2",
    objectives: ["verificare wohin? (nach, in, zu), Futur I e wenn + Perfekt"],
    theory: [
      {
        p: "Dieci domande su tutta l'unità. Si supera con il 70%. Non riguardare le lezioni mentre rispondi: se non ricordi qualcosa, è meglio tornare a ripassare."
      }
    ],
    exercises: [
      {
        tr: "Il Futur I di kommen, tutte le persone.",
        why: "<i>Ich werde kommen, du wirst kommen, er wird kommen, wir werden kommen, ihr werdet kommen, sie werden kommen</i>."
      },
      {
        q: "Completa: «Wir fahren ___ Italien.» (verso un paese senza articolo)",
        hint: "nach, in o zu?",
        why: "<b>Nach</b>: <i>Italien</i> non ha articolo."
      },
      {
        q: "Completa: «Ich fahre ___ die Schweiz.» (verso un paese con l'articolo)",
        hint: "preposizione + accusativo",
        why: "<b>In</b> + accusativo: <i>in die Schweiz</i>."
      },
      {
        q: "Completa: «Wir fahren ___ meiner Oma.» (verso una persona)",
        hint: "preposizione + dativo",
        why: "<b>Zu</b> + dativo: <i>zu meiner Oma</i>."
      },
      {
        q: "Completa: «Ich ___ morgen nach Wien fahren.» (Futur I, werden, ich)",
        hint: "werden, ich",
        why: "<b>Werde</b> in seconda posizione, <i>fahren</i> all'infinito in fondo."
      },
      {
        q: "Completa: «Ich rufe dich an, ___ ich im Hotel angekommen bin.» (quando, usa wenn)",
        hint: "usa wenn",
        why: "<b>Wenn</b>: un fatto del futuro, con il verbo coniugato in fondo."
      },
      {
        q: "Completa: «Meine Tante wohnt ___ Schweiz.» (dove abita: posizione)",
        opts: ["in der", "in die", "nach der"],
        why: "Posizione (wo?): <b>in</b> + dativo, e <i>die Schweiz</i> al dativo è <i>in der Schweiz</i>."
      },
      {
        q: "Traduci: «Domani andiamo a Vienna (in treno).»",
        why: "<i>Morgen fahren wir nach Wien</i>: <i>nach</i> con una città. L'ordine può cambiare, il verbo resta in seconda posizione."
      },
      {
        tr: "Domani vado a Vienna e, quando sarò arrivato, ti chiamo.",
        why: "In <i>Wien</i> la <b>W</b> è [v] e <b>ie</b> è una <b>i</b> lunga; in <i>angekommen</i> la <b>ng</b> è una sola nasale [ŋ]."
      },
      {
        tr: "In estate andremo in Svizzera, e poi vado da mia zia.",
        why: "In <i>Schweiz</i> la <b>sch</b> è [ʃ], <b>w</b> è [v] e <b>ei</b> suona [aɪ]."
      }
    ]
  }
});
