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
      note: "Alla 1ª e alla 3ª persona singolare la forma è uguale. <i>Sein</i> prende le terminazioni semplici <b>-st</b> (du warst) e <b>-t</b> (ihr wart), e <b>-en</b> per wir e sie. <i>Haben</i> e <i>können</i> hanno i temi <i>hatt-</i> e <i>konnt-</i> e prendono <b>-est</b> e <b>-et</b> (hattest, hattet, konntest, konntet), e <b>-en</b> per wir e sie.",
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
        { tr: "Un tempo ogni estate eravamo al mare.", note: "früher + sein: wir/sie/Sie waren, ma ihr wart" },
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
        tr: "Un tempo ogni estate eravamo al mare e ci divertivamo molto.",
        why: "In <i>Früher</i> la <b>ü</b> è lunga e si pronuncia con le labbra della <i>u</i> e la lingua della <i>i</i>; in <i>Spaß</i> la <b>sp</b> iniziale suona [ʃp] e la <b>ß</b> è una <b>s</b> sorda."
      }
    ]
  },
  "lesson:a2-u01-l2": {
    theme: "Quando era piccolo",
    title: "Quando ero piccolo, ...",
    objectives: [
      "collegare due eventi con als (un fatto o un periodo unico nel passato) e wenn (occasioni ripetute)",
      "mettere il verbo coniugato in fondo alla frase con als e wenn",
      "cominciare la principale con il verbo quando la subordinata sta prima"
    ],
    theory: [
      {
        h: "Als per un fatto o un periodo unico, wenn per occasioni ripetute",
        p: "Il tedesco ha due parole per il «quando» temporale. <strong>Als</strong> introduce un fatto <b>singolo</b> o un unico periodo del passato (anche con azioni ripetute al suo interno): <em>Als ich zehn war, sind wir nach Berlin umgezogen</em>; <em>Als ich klein war, bin ich jeden Tag Fahrrad gefahren</em>. <strong>Wenn</strong> introduce un fatto <b>ripetuto</b> (anche nel passato: <em>Immer wenn es geschneit hat, ...</em>) oppure un fatto del <b>presente o del futuro</b>: <em>Wenn ich müde bin, gehe ich früh ins Bett</em>. Nella subordinata il verbo coniugato va <b>in fondo</b>."
      },
      {
        contrast: "L'italiano ha un solo <em>quando</em> e di norma non cambia l'ordine delle parole: <em>quando ero piccolo, abitavamo in paese</em>. In tedesco bisogna scegliere tra <em>als</em> e <em>wenn</em> e il verbo coniugato va in fondo: <em>Als ich klein war, ...</em>, non «Als ich war klein». Quando la subordinata sta all'inizio, la principale ricomincia con il verbo coniugato subito dopo la virgola: <em>Als ich klein war, haben wir in einem Dorf gewohnt.</em> Per la domanda diretta si usa un'altra parola ancora, <em>wann</em>."
      },
      {
        trap: "Con un fatto ripetuto nel passato l'istinto italiano è «quando» = <em>als</em>, ma serve <b>wenn</b>: <em>Immer wenn es geschneit hat, sind wir Schlitten gefahren</em> (ogni volta che nevicava). Per capire quale usare, chiediti se parli di un episodio o di un unico periodo del passato (<em>als</em>, anche se dentro ci sono azioni abituali: <em>Als ich klein war, bin ich jeden Tag Fahrrad gefahren</em>) o di occasioni che si ripetono (<em>wenn</em>). <em>Als</em> non si usa mai al presente o al futuro."
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
        why: "<i>Als</i> introduce un periodo concluso del passato; il participio (<i>gewohnt</i>, oppure <i>gelebt</i>) chiude la principale."
      },
      {
        q: "Completa la frase.",
        tr: "Ogni volta che d'inverno nevicava, andavamo in slittino.",
        why: "Fatto ripetuto: <i>immer wenn</i>, quindi <b>wenn</b>. Nella principale il verbo coniugato (<i>sind</i>) viene prima del soggetto."
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
      note: "Al Präteritum <b>müssen</b>, <b>können</b> e <b>dürfen</b> perdono l'Umlaut (musste, konnte, durfte; anche <b>mögen</b> diventa mochte); <b>wollen</b> e <b>sollen</b> non ce l'hanno nemmeno all'infinito. Dopo <b>weil</b> il verbo coniugato va in fondo.",
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
        p: "Alcuni verbi tedeschi richiedono un pronome <b>riflessivo</b> riferito al soggetto: <em>Ich erinnere mich</em> (mi ricordo, uso lessicale) o <em>Wir treffen uns</em> (ci incontriamo, uso reciproco). Il pronome cambia con la persona: <em>mich, dich, sich, uns, euch, sich</em>. Nella principale con il soggetto in prima posizione sta dopo il verbo coniugato: <em>Du erinnerst dich an unsere Schule.</em> Nelle domande il verbo viene per primo e il pronome segue il soggetto: <em>Erinnerst du dich an unsere Schule?</em> Nel Perfekt l'ausiliare è <em>haben</em> e il pronome sta di norma vicino all'inizio del Mittelfeld, dopo un eventuale soggetto pronominale: <em>Wir haben uns am Bahnhof getroffen. Gestern haben wir uns getroffen. Gestern habe ich mich mit Anna getroffen.</em> Nella subordinata segue il soggetto: <em>weil ich mich erinnere</em>. Con <em>sich erinnern</em> e con <em>sich freuen</em> la preposizione e il suo caso si imparano insieme al verbo: <em>sich erinnern an</em> + accusativo, <em>sich freuen auf</em> + accusativo (aspettare con gioia qualcosa di futuro), <em>sich freuen über</em> + accusativo (essere contenti di qualcosa di presente o di passato)."
      },
      {
        contrast: "L'italiano ha molti verbi riflessivi, ma non sono gli stessi. <em>Ricordare qualcosa</em> è transitivo, mentre in tedesco <em>sich erinnern</em> è riflessivo e vuole <em>an</em>: <em>Ich erinnere mich an meine Lehrerin</em>. Al contrario, <em>alzarsi</em> e <em>svegliarsi</em> in tedesco <b>non</b> sono riflessivi (<em>aufstehen, aufwachen</em>), mentre <em>sich ärgern</em> (arrabbiarsi) e <em>sich setzen</em> (sedersi) lo sono. Anche <em>sich treffen</em> è usato in modo reciproco: <em>Wir treffen uns</em> è «ci incontriamo»."
      },
      {
        trap: "Alla 1ª e alla 2ª persona il pronome ha due forme: l'accusativo <em>mich, dich</em> e il dativo <em>mir, dir</em>. Con <em>sich erinnern an</em> serve l'<b>accusativo</b>: <em>Ich erinnere mich</em>, non «Ich erinnere mir». Fai attenzione anche a <em>erinnern</em> senza pronome: <em>Ich erinnere dich an den Termin</em> significa «ti ricordo (ti faccio ricordare) l'appuntamento», che è un'altra cosa."
      },
      {
        tip: "Impara il verbo riflessivo sempre insieme alla sua preposizione: <em>sich erinnern an</em>, <em>sich freuen auf/über</em>, <em>sich interessieren für</em>, <em>sich ärgern über</em>, <em>sich treffen mit</em> + dativo (<em>Ich treffe mich mit meinem Freund</em>). Un verbo, una preposizione, un caso."
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
        tr: "Mi ricordo bene della mia scuola elementare e aspetto con gioia l'incontro con gli ex compagni.",
        why: "In <i>Grundschule</i> la <b>sch</b> si legge [ʃ] e la <b>d</b> di <i>Grund</i> si pronuncia come una <b>t</b>; in <i>Klassentreffen</i> la <b>ss</b> è una <b>s</b> sorda."
      }
    ]
  },
  "lesson:a2-u01-test": {
    theme: "Verifica",
    title: "Verifica dell'unità 1",
    objectives: ["verificare Präteritum, als e wenn, weil, i modali al passato e i verbi riflessivi con la loro preposizione"],
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
        q: "Completa: «Immer ___ ich Zeit hatte, habe ich gelesen.» (ogni volta che, un fatto ripetuto)",
        hint: "un fatto ripetuto nel passato",
        why: "Un fatto ripetuto nel passato: <b>wenn</b>, non <i>als</i>. Nella subordinata <i>hatte</i> va in fondo."
      },
      {
        q: "Completa: «Meine Eltern haben viel gearbeitet, ___ ich klein war.» (quando, un periodo concluso)",
        hint: "un fatto singolo nel passato",
        why: "Un periodo concluso del passato: <b>als</b>."
      },
      {
        q: "Completa la frase.",
        tr: "Mi ricordo volentieri della mia infanzia.",
        why: "<i>Sich erinnern an</i> + accusativo: il pronome riflessivo <i>mich</i> segue il verbo, poi viene la preposizione <i>an</i>."
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
        q: "Traduci: «Domani andiamo in Svizzera.»",
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
        why: "In <i>Nächste</i> la <b>st</b> finale resta [st], non [ʃt]; in <i>Woche</i> la <b>ch</b> dopo <b>o</b> è [x], più in fondo alla gola. In <i>werden</i> la <b>w</b> si legge [v]."
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
        p: "Per dire che hai già prenotato si usa il <strong>Perfekt</strong>: ausiliare in seconda posizione e <b>participio II</b> in fondo. <em>Ich habe ein Zimmer reserviert. Wir haben ein Doppelzimmer gebucht.</em> I verbi in <em>-ieren</em> non prendono <em>ge-</em>: <em>reservieren → reserviert</em>. <em>Buchen</em> è regolare: <em>gebucht</em>. In genere i verbi intransitivi di movimento o di cambio di stato prendono <em>sein</em>, mentre i verbi transitivi e riflessivi prendono <em>haben</em>. Qui ti servono <em>ankommen</em> e <em>abfahren</em>: <em>Wir sind gestern Abend angekommen</em> (participio <em>angekommen</em>, con <em>ge-</em> al centro)."
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
      note: "Ausiliare in seconda posizione, participio II in fondo. <b>haben</b> con quasi tutti i verbi, <b>sein</b> in genere con i verbi intransitivi di movimento o di cambio di stato (qui ankommen, abfahren), non con quelli transitivi o riflessivi. I verbi in <b>-ieren</b> non hanno <i>ge-</i>.",
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
        why: "In <i>angekommen</i> <b>n</b> e <b>g</b> appartengono a parti diverse (<i>an-ge-</i>) e si pronunciano [nɡ], non come una sola nasale [ŋ]; in <i>gebucht</i> la <b>ch</b> dopo <b>u</b> è [x], raschiata in fondo alla gola."
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
        contrast: "L'italiano per un fatto futuro già compiuto usa il <b>futuro anteriore</b> (<em>quando sarò arrivato, ti chiamerò</em>) oppure il presente (<em>quando arrivo, ti chiamo</em>). Il tedesco ha un Futur II (<em>ich werde angekommen sein</em>), ma nelle temporali riferite al futuro non serve: per esprimere l'anteriorità si usa di norma il <em>Perfekt</em> nella subordinata, per sottolineare che è compiuto (<em>Wenn ich angekommen bin</em>), oppure il presente se non serve sottolinearlo (<em>Wenn ich ankomme</em>). Per un evento singolo nel passato si usa <em>als</em>; qui lo esercitiamo con il Perfekt: <em>Als wir gestern angekommen sind, hat es geregnet.</em>"
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
        why: "Con questi pezzi l'ordine è quello della subordinata prima: <i>Wenn ich angekommen bin, rufe ich dich an</i>.  Il verbo separabile <i>anrufen</i> lascia <i>an</i> in fondo alla principale."
      },
      {
        q: "Traduci: «Quando arrivo, ti chiamo.»",
        why: "Il presente basta: <i>Wenn ich ankomme, rufe ich dich an</i>. Va bene anche il Perfekt nella subordinata (<i>angekommen bin</i>) o il Futur I nella principale (<i>werde ich dich anrufen</i>), e l'ordine può essere invertito."
      },
      {
        tr: "Quando sarò arrivato, ti chiamo, e poi andiamo a mangiare insieme.",
        why: "In <i>angekommen</i> <b>n</b> e <b>g</b> appartengono a parti diverse (<i>an-ge-</i>) e si pronunciano [nɡ], non come una sola nasale [ŋ]; in <i>zusammen</i> la <b>z</b> è [ts] e la <b>s</b> davanti a vocale è di norma sonora."
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
        q: "Traduci: «Domani andiamo a Vienna.»",
        why: "<i>Morgen fahren wir nach Wien</i>: <i>nach</i> con una città. L'ordine può cambiare, il verbo resta in seconda posizione."
      },
      {
        tr: "Domani vado a Vienna e, quando sarò arrivato, ti chiamo.",
        why: "In <i>Wien</i> la <b>W</b> è [v] e <b>ie</b> è una <b>i</b> lunga; in <i>angekommen</i> <b>n</b> e <b>g</b> appartengono a parti diverse (<i>an-ge-</i>) e si pronunciano [nɡ], non come una sola nasale [ŋ]."
      },
      {
        tr: "In estate andremo in Svizzera, e poi vado da mia zia.",
        why: "In <i>Schweiz</i> la <b>sch</b> è [ʃ], <b>w</b> è [v] e <b>ei</b> suona [aɪ]."
      }
    ]
  },
  "unit:a2-u03": {
    title: "Lo vedo, lo aiuto",
    grammarNote: "pronomi all'accusativo e al dativo · verbi con il dativo (helfen, gefallen, gehören, danken) · ordine degli oggetti · imperativo con du e ihr · mal e doch"
  },
  "lesson:a2-u03-l1": {
    theme: "Parlare di persone",
    title: "ihn, sie, es",
    objectives: [
      "sostituire un nome con mich, dich, ihn, sie, es, uns, euch, sie, Sie",
      "scegliere il pronome secondo il genere del nome tedesco",
      "collocare il pronome dopo il verbo nella frase principale"
    ],
    theory: [
      {
        h: "Il pronome all'accusativo al posto del nome",
        p: "Per non ripetere un nome che è <b>oggetto diretto</b> si usa il pronome all'accusativo: <em>mich, dich, ihn, sie, es, uns, euch, sie, Sie</em>. Rispetto al nominativo cambiano <em>ich, du, er, wir, ihr</em>; <em>sie</em> ed <em>es</em> restano uguali. Il pronome segue il <b>genere del nome tedesco</b>, anche per le cose: <em>der Bruder → ihn</em>, <em>die Kollegin → sie</em>, <em>das Kind → es</em>, <em>der Schlüssel → ihn</em>. Nella frase principale neutra il pronome sta subito dopo il verbo coniugato: <em>Ich kenne ihn gut.</em> Se la frase comincia con un altro elemento, e il soggetto è un pronome, il pronome oggetto lo segue: <em>Morgen sehe ich ihn.</em> Se il soggetto è un nome, il pronome oggetto di norma lo precede: <em>Morgen sieht ihn mein Bruder.</em> In una subordinata con soggetto pronominale sta dopo la congiunzione e il soggetto, prima del verbo in fondo: <em>..., weil ich ihn gut kenne.</em> Con un soggetto nominale sono possibili entrambi gli ordini: <em>..., weil ihn mein Bruder kennt</em> e <em>..., weil mein Bruder ihn kennt</em> (il secondo è neutro e molto frequente)."
      },
      {
        contrast: "In italiano il pronome atono sta <b>prima</b> del verbo (<em>lo vedo, la conosco</em>); in tedesco è una parola a sé e sta dopo il verbo: <em>Ich sehe ihn.</em> Inoltre il genere segue la parola tedesca, non quella italiana: <em>il giornale</em> è maschile (<em>lo leggo</em>), ma <em>die Zeitung</em> è femminile, quindi <em>Ich lese sie</em>. Al contrario <em>la chiave</em> è femminile (<em>la vedo</em>), ma <em>der Schlüssel</em> è maschile: <em>Ich sehe ihn nicht</em>."
      },
      {
        trap: "<em>Sie</em> può voler dire «lei», «loro», «la», «le» o «li»: lo capisci dal verbo e dal contesto (<em>Ich sehe sie</em>, da solo, è ambiguo). Il tedesco non distingue il genere al plurale: <em>Ich sehe die Brüder → Ich sehe sie</em> = «Vedo i fratelli → Li vedo». Dentro la frase l'iniziale maiuscola indica la forma di cortesia: <em>Ich kenne Sie</em>. A inizio frase la maiuscola c'è sempre, quindi decidono contesto e accordo del verbo (<em>Sie kommt</em> = lei viene, <em>Sie kommen</em> = loro vengono o Lei viene). E non confondere <em>ihn</em> (accusativo) con <em>ihm</em> (dativo): <em>Ich sehe ihm</em> è sbagliato, perché <em>sehen</em> vuole l'accusativo."
      },
      {
        tip: "Prima di scrivere il pronome ripeti il nome tedesco con l'articolo: <em>der → ihn</em>, <em>die → sie</em>, <em>das → es</em>, <em>die</em> (plurale) <em>→ sie</em>. Il pronome per una persona è uguale a quello per una cosa dello stesso genere."
      }
    ],
    grammar: {
      title: "I pronomi all'accusativo",
      note: "Sostituiscono un oggetto diretto già noto. Genere e numero seguono il nome tedesco: <b>der → ihn</b>, <b>die → sie</b>, <b>das → es</b>.",
      table: {
        head: ["nominativo", "accusativo", "esempio"],
        rows: [
          ["ich", "mich", "Er sieht mich."],
          ["du", "dich", "Ich kenne dich."],
          ["er", "ihn", "Wir sehen ihn."],
          ["sie", "sie", "Ich treffe sie."],
          ["es", "es", "Ich nehme es."],
          ["wir", "uns", "Sie laden uns ein."],
          ["ihr", "euch", "Ich besuche euch."],
          ["sie, Sie", "sie, Sie", "Wir kennen Sie."]
        ]
      },
      examples: [
        { tr: "Lo conosco bene.", note: "ihn per un nome maschile (der Bruder)" },
        { tr: "Domani la incontriamo.", note: "sie: per esempio die Kollegin" },
        { tr: "Lui non mi vede.", note: "mich: accusativo di ich" },
        { tr: "Stasera ti chiamo.", note: "dich; anrufen è separabile, an va in fondo" },
        { tr: "Il bambino è malato. Lo vado a trovare oggi.", note: "es per das Kind, neutro" },
        { tr: "Ci invitano alla festa.", note: "uns; einladen è separabile, ein va in fondo" }
      ]
    },
    vocab: [
      "il fratello",
      "la sorella",
      "il vicino",
      "la collega",
      "il capo",
      "il bambino",
      "la chiave",
      "il giornale",
      "conoscere",
      "vedere",
      "incontrare",
      "invitare"
    ],
    exercises: [
      {
        q: "Parli di tuo fratello: «Lo vedo spesso.» Quale frase è corretta?",
        opts: ["Ich sehe er oft.", "Ich sehe ihn oft.", "Ich sehe ihm oft."],
        why: "<b>Ihn</b>: <i>sehen</i> vuole l'accusativo e per <i>der Bruder</i> il pronome è <i>ihn</i>. <i>Er</i> è il nominativo, <i>ihm</i> il dativo."
      },
      {
        q: "Completa: «Das Kind ist krank. Ich besuche ___ heute.»",
        opts: ["ihn", "sie", "es"],
        why: "<i>Das Kind</i> è neutro, quindi <b>es</b>. Il genere segue la parola tedesca, non il sesso della persona."
      },
      {
        q: "Quali frasi sono corrette? (più di una)",
        opts: [
          "Ich sehe dich morgen.",
          "Wir laden sie zur Party ein.",
          "Er kennt mich gut.",
          "Ich treffe ihm heute."
        ],
        why: "Le prime tre usano il pronome giusto all'accusativo. <i>Ihm</i> è un dativo e <i>treffen</i> vuole l'accusativo: <i>Ich treffe ihn heute.</i>"
      },
      {
        q: "Completa: «Das ist mein Bruder. Ich kenne ___ sehr gut.» (er, accusativo)",
        hint: "pronome all'accusativo",
        why: "<b>Ihn</b>: <i>kennen</i> vuole l'accusativo e <i>der Bruder</i> è maschile."
      },
      {
        q: "Completa: «Wo ist Lisa? Ich sehe ___ nicht.» (Lisa)",
        hint: "pronome all'accusativo",
        why: "<b>Sie</b>: l'accusativo di <i>sie</i> (lei) è uguale al nominativo."
      },
      {
        q: "Completa la frase (secondo spazio: ich, accusativo).",
        tr: "La mia collega è simpatica. La incontro spesso e a volte mi invita.",
        why: "<i>Sie</i> è l'accusativo per <i>die Kollegin</i>; <i>mich</i> è l'accusativo di <i>ich</i>. <i>Einladen</i> è separabile: <i>ein</i> va in fondo."
      },
      {
        q: "Metti in ordine le parole.",
        tr: "Oggi la incontro al caffè.",
        why: "Il verbo resta in seconda posizione e il pronome <i>sie</i> segue il soggetto <i>ich</i>. Vanno bene anche <i>Ich treffe sie heute im Café</i> e <i>Im Café treffe ich sie heute</i>. Il pronome complemento può stare anche in prima posizione per enfasi: <i>Sie treffe ich heute im Café</i> è corretto, con il verbo sempre al secondo posto."
      },
      {
        q: "Traduci (parli di tuo fratello): «Lo vedo domani.»",
        why: "<i>Ich sehe ihn morgen</i>: il pronome segue il verbo. Con <i>morgen</i> in testa il verbo resta in seconda posizione e il soggetto lo segue (<i>Morgen sehe ich ihn</i>)."
      },
      {
        tr: "Conosci mio fratello? Lo vedo ogni giorno, e lui mi viene spesso a trovare.",
        why: "In <i>ihn</i> e <i>sehe</i> la <b>h</b> non si legge e la vocale precedente è lunga; in <i>besucht</i> l'accento cade su <i>-sucht</i> e la <b>ch</b> dopo <b>u</b> è [x]."
      },
      {
        tr: "La mia collega è simpatica. La incontro spesso e a volte mi invita.",
        why: "In <i>sie</i> la <b>s</b> è sonora [z] e <b>ie</b> è una <b>i</b> lunga; in <i>manchmal</i> la <b>ch</b> dopo la <b>n</b> si legge [ç]."
      }
    ]
  },
  "lesson:a2-u03-l2": {
    theme: "Aiuto e gusti",
    title: "Ti aiuto, mi piace",
    objectives: [
      "usare mir, dir, ihm, ihr, uns, euch, ihnen",
      "riconoscere i verbi che vogliono il dativo: helfen, gefallen, gehören, danken",
      "dire che una cosa piace o appartiene a qualcuno"
    ],
    theory: [
      {
        h: "Il dativo con i pronomi e con alcuni verbi",
        p: "Il dativo risponde alla domanda <em>a chi?</em>. I pronomi sono <em>mir, dir, ihm, ihr, ihm, uns, euch, ihnen</em> (cortesia: <em>Ihnen</em>). Alcuni verbi vogliono il dativo come oggetto, anche quando in italiano l'oggetto sembra diretto: <em>helfen</em> (<em>Ich helfe dir</em>), <em>danken</em> (<em>Ich danke dir</em>), <em>antworten</em> (<em>Er antwortet mir</em>), <em>gehören</em> (<em>Das Handy gehört mir</em>) e <em>gefallen</em> (<em>Die Jacke gefällt mir</em>). Con <em>gefallen</em> la cosa che piace è il soggetto e la persona sta al dativo: se la cosa è plurale il verbo la segue (<em>Die Schuhe gefallen mir</em>)."
      },
      {
        contrast: "<em>Gefallen</em> funziona come l'italiano <em>piacere</em>: <em>Mi piace la giacca</em> e <em>Die Jacke gefällt mir</em> hanno la stessa struttura, con la cosa come soggetto e la persona al dativo (<em>mi</em>, <em>mir</em>). Più sorprendenti sono <em>helfen</em> e <em>danken</em>: in italiano <em>lo aiuto</em> e <em>lo ringrazio</em> hanno un pronome diretto (<em>lo</em>), in tedesco vogliono il dativo: <em>Ich helfe ihm</em>, <em>Ich danke ihm</em>. Anche <em>gehören</em> ha il dativo, come l'italiano <em>mi appartiene</em> (a me): <em>Das gehört mir</em>."
      },
      {
        trap: "Con questi verbi l'accusativo è un errore: <em>Ich helfe dich</em> e <em>Ich danke ihn</em> sono sbagliati. Attenzione anche a <em>ihr</em>: come nominativo vuol dire «voi» (<em>Ihr helft mir</em>), come dativo «a lei» (<em>Ich helfe ihr</em>). Il verbo e il caso aiutano a capire quale dei due è. <em>Ihm</em> vale per <em>er</em> e per <em>es</em>: <em>Ich helfe dem Kind → Ich helfe ihm</em>."
      },
      {
        tip: "Impara questi verbi insieme al dativo: <em>helfen + dativo</em>, <em>gefallen + dativo</em>, <em>gehören + dativo</em>, <em>danken + dativo</em>. Quando il verbo è uno di questi, il pronome è <em>mir, dir, ihm, ihr, uns, euch, ihnen</em>."
      }
    ],
    grammar: {
      title: "I pronomi al dativo e i verbi con il dativo",
      note: "Il dativo è il caso della persona che riceve qualcosa o riceve aiuto, oppure a cui qualcosa piace o appartiene, a seconda del verbo. <b>helfen, danken, antworten, gehören, gefallen</b> vogliono il dativo.",
      table: {
        head: ["nominativo", "dativo", "esempio"],
        rows: [
          ["ich", "mir", "Das gehört mir."],
          ["du", "dir", "Ich helfe dir."],
          ["er", "ihm", "Wir danken ihm."],
          ["sie", "ihr", "Das Buch gefällt ihr."],
          ["es", "ihm", "Ich helfe ihm."],
          ["wir", "uns", "Er hilft uns."],
          ["ihr", "euch", "Ich danke euch."],
          ["sie", "ihnen", "Ich antworte ihnen."],
          ["Sie", "Ihnen", "Ich danke Ihnen."]
        ]
      },
      examples: [
        { tr: "Ti aiuto volentieri.", note: "helfen + dativo: dir" },
        { tr: "Il cellulare è mio.", note: "gehören + dativo: mir" },
        { tr: "La giacca mi piace molto.", note: "gefallen: la cosa è il soggetto, la persona è al dativo" },
        { tr: "Lo ringraziamo per il regalo.", note: "danken + dativo: ihm" },
        { tr: "Lui non mi risponde.", note: "antworten + dativo: mir" },
        { tr: "Mia sorella ha bisogno di aiuto. La aiuto.", note: "helfen + dativo: ihr" }
      ]
    },
    vocab: [
      "il regalo",
      "l'aiuto",
      "lo zaino",
      "il cellulare",
      "la giacca",
      "il libro",
      "aiutare",
      "piacere",
      "appartenere",
      "ringraziare",
      "rispondere",
      "volentieri"
    ],
    exercises: [
      {
        q: "Dici di tuo fratello: «Lo aiuto.» Quale frase è corretta?",
        opts: ["Ich helfe ihn.", "Ich helfe ihm.", "Ich helfe er."],
        why: "<b>Ihm</b>: <i>helfen</i> vuole il dativo, anche se in italiano si dice «lo aiuto». <i>Ihn</i> è un accusativo."
      },
      {
        q: "Come dici «Mi piace la giacca»?",
        opts: ["Die Jacke gefällt mich.", "Die Jacke gefällt mir.", "Ich gefalle die Jacke."],
        why: "La cosa è il soggetto (<i>die Jacke</i>) e la persona sta al dativo (<i>mir</i>), come in «mi piace»."
      },
      {
        q: "Quali verbi vogliono il dativo? (più di una)",
        opts: ["helfen", "gehören", "sehen", "danken"],
        why: "<i>Helfen</i>, <i>gehören</i> e <i>danken</i> vogliono il dativo. <i>Sehen</i> vuole l'accusativo: <i>Ich sehe ihn.</i>"
      },
      {
        q: "Completa: «Das ist mein Handy. Es gehört ___.» (ich, dativo)",
        hint: "pronome al dativo",
        why: "<b>Mir</b>: <i>gehören</i> vuole il dativo."
      },
      {
        q: "Completa: «Meine Schwester braucht Hilfe. Ich helfe ___ gern.» (sie: la sorella)",
        hint: "pronome al dativo",
        why: "<b>Ihr</b>: dativo di <i>sie</i> al singolare. <i>Helfen</i> vuole il dativo."
      },
      {
        q: "Completa la frase.",
        tr: "Grazie, Anna! Ti ringrazio per il tuo aiuto.",
        why: "<i>Ich danke dir</i>: <i>danken</i> vuole il dativo, quindi <b>dir</b> e non <i>dich</i>."
      },
      {
        q: "Metti in ordine le parole.",
        tr: "La giacca mi piace molto.",
        why: "Con la cosa come soggetto: <i>Die Jacke gefällt mir sehr</i>. Va bene anche <i>Mir gefällt die Jacke sehr</i>, con il dativo in testa."
      },
      {
        q: "Traduci (a un amico): «Ti aiuto volentieri.»",
        why: "<i>Ich helfe dir gern</i>: <i>helfen</i> vuole il dativo (<i>dir</i>). Sono corrette anche le varianti con <i>gerne</i> e con <i>gern</i> in testa."
      },
      {
        tr: "Puoi aiutarmi, per favore? Ti ringrazio, è molto gentile da parte tua.",
        why: "In <i>helfen</i> la <b>e</b> è breve; in <i>danke</i> la <b>n</b> davanti a <b>k</b> si legge [ŋ] e la <b>a</b> è breve."
      },
      {
        tr: "Lo zaino è mio, e la giacca mi piace molto.",
        why: "In <i>gehört</i> l'accento cade su <i>-hört</i>, dove la <b>ö</b> è lunga ([øː]); in <i>Rucksack</i> entrambe le vocali sono brevi: <i>Ruck</i> + <i>Sack</i>, e ogni <b>ck</b> segnala la vocale breve che lo precede."
      }
    ]
  },
  "lesson:a2-u03-l3": {
    theme: "Regali e favori",
    title: "Glielo do",
    objectives: [
      "usare dativo e accusativo nella stessa frase",
      "mettere nell'ordine abituale due nomi, un pronome e un nome, due pronomi",
      "usare geben, schenken, zeigen, schicken, leihen, erklären"
    ],
    theory: [
      {
        h: "Due oggetti: dativo e accusativo",
        p: "Con verbi come <em>geben, schenken, zeigen, schicken, leihen, erklären</em> ci sono due oggetti: la persona (dativo) e la cosa (accusativo). L'ordine abituale, nella frase neutra, è questo. Con <b>due nomi</b> il dativo precede l'accusativo: <em>Ich schenke meiner Schwester ein Buch.</em> Con <b>un pronome e un nome</b> il pronome viene prima, qualunque sia il suo caso: <em>Ich gebe ihm das Buch. Ich gebe es meinem Bruder.</em> Con <b>due pronomi</b> l'accusativo precede il dativo: <em>Ich gebe es ihm.</em> Sono ordini abituali, non regole assolute: un nome o un pronome tonico si può spostare in prima posizione per metterlo in risalto (<em>Das gebe ich ihm</em>), ma il pronome atono <em>es</em> non va in prima posizione come complemento: non <s>Es gebe ich ihm</s>."
      },
      {
        contrast: "In italiano i due pronomi stanno davanti al verbo e il dativo viene <b>prima</b>: <em>te lo do</em>, <em>glielo do</em> (dativo + accusativo). «Te lo» resta in due parole; si fondono graficamente solo forme come <em>glielo</em> o <em>dammelo</em>. In tedesco vanno dopo il verbo e l'ordine è l'inverso, accusativo + dativo: <em>Ich gebe es ihm</em>, <em>Ich gebe es dir</em>. Se traduci a pezzi, rimetti l'ordine: prima <em>es</em> (il «lo»), poi <em>dir</em> o <em>ihm</em> (il «te» o il «gli»)."
      },
      {
        trap: "Nell'ordine abituale <em>Ich gebe ihm es</em> suona sbagliato: con due pronomi viene prima l'accusativo, <em>Ich gebe es ihm</em>. Scegli il genere dalla parola tedesca: <em>das Foto → es</em>, <em>der Brief → ihn</em>, <em>die Postkarte → sie</em>. Con un nome maschile i due pronomi sono diversi: <em>Ich gebe ihn ihm</em> (il primo è accusativo, il secondo dativo)."
      },
      {
        tip: "Prima trova la cosa e metti il suo pronome (<em>es, ihn, sie</em>) subito dopo il verbo; poi aggiungi la persona (<em>mir, dir, ihm, ihr</em>). Con i nomi parti invece dalla persona: <em>Ich zeige meiner Mutter das Foto.</em>"
      }
    ],
    grammar: {
      title: "L'ordine di dativo e accusativo",
      note: "Nella frase neutra: due nomi, <b>dativo prima</b>; un pronome e un nome, <b>il pronome prima</b>; due pronomi, <b>accusativo prima</b>.",
      table: {
        head: ["oggetti", "ordine abituale", "esempio"],
        rows: [
          ["due nomi", "dativo, accusativo", "Ich schenke meiner Schwester ein Buch."],
          ["pronome + nome", "il pronome prima", "Ich gebe ihm das Buch."],
          ["nome + pronome", "il pronome prima", "Ich gebe es meinem Bruder."],
          ["due pronomi", "accusativo, dativo", "Ich gebe es ihm."]
        ]
      },
      examples: [
        { tr: "Glielo do.", note: "due pronomi: es (accusativo) prima di ihm (dativo)" },
        { tr: "Ti mostro la foto.", note: "pronome dativo prima del nome" },
        { tr: "Regalo un libro a mia sorella.", note: "due nomi: dativo prima dell'accusativo" },
        { tr: "Me lo manda domani.", note: "es mir: accusativo prima del dativo" },
        { tr: "Gli prestiamo la bicicletta.", note: "pronome dativo prima del nome" },
        { tr: "Te lo spiego dopo.", note: "es dir: accusativo prima del dativo" }
      ]
    },
    vocab: [
      "la foto",
      "la lettera",
      "il pacco",
      "i soldi, il denaro",
      "la cartolina",
      "la bicicletta",
      "dare",
      "regalare",
      "mostrare",
      "mandare",
      "prestare",
      "spiegare"
    ],
    exercises: [
      {
        q: "Dici: «Glielo do» (il libro, a mio fratello). Quale frase ha l'ordine abituale?",
        opts: ["Ich gebe ihm es.", "Ich gebe es ihm.", "Ich gebe ihm ihn."],
        why: "Con due pronomi l'accusativo viene prima del dativo: <i>es ihm</i>. <i>Das Buch</i> è neutro, quindi <i>es</i>."
      },
      {
        q: "Quale frase ha l'ordine neutro con due nomi?",
        opts: [
          "Ich schenke ein Buch meiner Schwester.",
          "Ich schenke meiner Schwester ein Buch.",
          "Ich meiner Schwester schenke ein Buch."
        ],
        why: "Con due nomi prima il dativo (la persona), poi l'accusativo (la cosa). La prima frase non è sbagliata, ma sposta la persona in fondo per metterla in risalto: non è l'ordine neutro. La terza rompe la seconda posizione del verbo."
      },
      {
        q: "Quali frasi hanno un ordine abituale? (più di una)",
        opts: [
          "Ich gebe es ihm.",
          "Ich zeige dir das Foto.",
          "Ich schicke dem Chef es.",
          "Ich schenke ihm einen Schlüssel."
        ],
        why: "Il pronome sta prima del nome (<i>dir das Foto</i>, <i>ihm einen Schlüssel</i>) e con due pronomi vale <i>es ihm</i>. In «Ich schicke dem Chef es» il nome precede il pronome: l'ordine abituale è <i>Ich schicke es dem Chef</i>."
      },
      {
        q: "Completa: «Wo ist das Foto? Ich zeige ___ dir gleich.» (das Foto)",
        hint: "pronome all'accusativo",
        why: "<b>Es</b>: <i>das Foto</i> è neutro, e l'accusativo <i>es</i> viene prima del dativo <i>dir</i>."
      },
      {
        q: "Completa: «Der Schlüssel gehört Paul. Ich gebe ihn ___ heute.» (Paul: er)",
        hint: "pronome al dativo",
        why: "<b>Ihm</b>: dativo di <i>er</i>. L'accusativo <i>ihn</i> (la cosa, <i>der Schlüssel</i>) viene prima."
      },
      {
        q: "Completa la frase (secondo spazio: du, dativo).",
        tr: "La lettera è pronta. Domani te la mando.",
        why: "<i>Der Brief</i> è maschile: <b>ihn</b> (accusativo) viene prima di <b>dir</b> (dativo). In italiano «la lettera» è femminile (<i>te la</i>) e il dativo viene prima: l'ordine è opposto."
      },
      {
        q: "Abbina ogni frase alla sua traduzione.",
        pairs: ["Glielo do.", "Gli do il libro.", "Lo do a mio fratello.", "Te lo do."]
      },
      {
        q: "Traduci: «Domani te lo do.» (il libro: usa il pronome es)",
        why: "<i>Ich gebe es dir morgen</i>: prima l'accusativo <i>es</i>, poi il dativo <i>dir</i>. Con <i>morgen</i> in testa il verbo resta in seconda posizione: <i>Morgen gebe ich es dir</i>."
      },
      {
        tr: "Ho trovato la tua foto. Te la mostro subito, e domani la mando a tua sorella.",
        why: "In <i>zeigen</i> la <b>z</b> è [ts] e <b>ei</b> suona [aɪ]; in <i>gleich</i> la <b>ch</b> finale dopo <b>ei</b> si legge [ç]."
      },
      {
        tr: "La chiave è di mio fratello. Domani gliela do.",
        why: "In <i>Schlüssel</i> la <b>sch</b> è [ʃ] e la <b>ü</b> è breve; in <i>ihn</i> e <i>ihm</i> la <b>h</b> non si legge e la <b>i</b> è lunga."
      }
    ]
  },
  "lesson:a2-u03-l4": {
    theme: "Istruzioni e consigli",
    title: "Dimmi! Chiamami pure!",
    objectives: [
      "formare l'imperativo con du e con ihr",
      "ricordare i verbi con cambio di tema e sein",
      "usare mal e doch per cambiare il tono di una richiesta"
    ],
    theory: [
      {
        h: "L'imperativo con du e con ihr",
        p: "Per dire a una persona che dai del <em>tu</em> di fare qualcosa si usa il <b>tema del verbo</b>, senza <em>du</em>: <em>Komm! Ruf mich an! Mach das Fenster zu!</em> Con i verbi deboli il cui tema finisce in <em>-t</em> o <em>-d</em> si aggiunge di norma una <b>-e</b>: <em>Warte! Arbeite! Antworte!</em> I verbi forti con cambio <em>e → i/ie</em> usano il tema cambiato e non hanno la <em>-e</em>: <em>Nimm! Lies! Gib! Sprich!</em> Senza Umlaut: <em>Fahr!</em>, non <em>Fähr!</em> <em>Sein</em> è irregolare: <em>Sei!</em> Per più persone (<em>ihr</em>) l'imperativo ha la forma di <em>ihr</em> senza pronome: <em>Kommt! Wartet! Ruft an!</em> Il verbo separabile lascia il prefisso in fondo: <em>Ruf mich an!</em>"
      },
      {
        h: "mal e doch: piccole parole che cambiano il tono",
        p: "<em>Mal</em> e <em>doch</em> sono <b>particelle modali</b>: non cambiano la grammatica, cambiano <b>come suona</b> la frase. <em>Komm mal her!</em> è più leggero di <em>Komm her!</em>, come «dai, vieni un attimo». <em>Ruf mich doch an!</em> è un invito amichevole o un'insistenza: «chiamami pure», «dai, chiamami». Stanno nel campo centrale, di norma dopo il pronome: <em>Ruf mich doch mal an!</em> Non hanno una traduzione fissa."
      },
      {
        contrast: "L'italiano attacca il pronome all'imperativo (<em>chiamami, dimmi, aiutami</em>); in tedesco il pronome è una parola separata dopo il verbo: <em>Ruf mich an! Sag es mir! Hilf mir!</em> Per il negativo con tu l'italiano usa l'infinito (<em>non venire</em>); il tedesco usa lo stesso imperativo con <em>nicht</em>: <em>Komm nicht zu spät!</em> Le particelle modali in italiano non hanno una categoria a sé: si rendono con il tono o con parole come <em>dai, pure, un attimo</em>."
      },
      {
        trap: "Non aggiungere <em>-st</em>: <em>Kommst!</em> non è un imperativo. Con i verbi forti con <em>e → i/ie</em> non dire <em>Lese!</em> ma <em>Lies!</em>, e non <em>Nehm!</em> ma <em>Nimm!</em> Con <em>sein</em> la forma è <em>Sei vorsichtig!</em> Non pensare che <em>mal</em> e <em>doch</em> siano parole vuote: tolte, la frase resta corretta ma suona più secca."
      },
      {
        tip: "Quando dai un ordine o un consiglio a un amico, con un verbo regolare: parti dall'infinito, togli <em>-en</em>, aggiungi <em>-e</em> se il tema finisce in <em>-t</em> o <em>-d</em>, e metti <em>mal</em> o <em>doch</em> per ammorbidire: <em>Warte mal! Komm doch mit!</em> I verbi con cambio vocalico e <em>sein</em> fanno eccezione: <em>Nimm! Lies! Sei!</em>"
      }
    ],
    grammar: {
      title: "L'imperativo con du e ihr; mal e doch",
      note: "Con <b>du</b> il tema senza pronome (<i>Komm!</i>), con <b>ihr</b> la forma di ihr (<i>Kommt!</i>). <b>mal</b> e <b>doch</b> ammorbidiscono o rendono più amichevole la richiesta.",
      table: {
        head: ["infinito", "du", "ihr"],
        rows: [
          ["kommen", "Komm!", "Kommt!"],
          ["warten", "Warte!", "Wartet!"],
          ["anrufen", "Ruf an!", "Ruft an!"],
          ["nehmen", "Nimm!", "Nehmt!"],
          ["lesen", "Lies!", "Lest!"],
          ["sein", "Sei!", "Seid!"]
        ]
      },
      examples: [
        { tr: "Vieni un attimo qui!", note: "mal rende la richiesta più leggera" },
        { tr: "Aspetta un momento!", note: "tema in -t: si aggiunge -e" },
        { tr: "Chiamami pure!", note: "doch: invito amichevole; an in fondo" },
        { tr: "Fai pure una pausa!", note: "machen: tema Mach, senza -en" },
        { tr: "Dimmi un po', hai tempo?", note: "Sag mal: apre una domanda in tono colloquiale" },
        { tr: "State attenti, per favore!", note: "ihr: forma di sein, Seid" }
      ]
    },
    vocab: [
      "il consiglio",
      "l'idea",
      "il momento",
      "la pausa",
      "chiamare (al telefono)",
      "aspettare",
      "prendere",
      "leggere",
      "mal (particella modale)",
      "doch (particella modale)",
      "prudente, attento",
      "per favore"
    ],
    exercises: [
      {
        q: "Dici a un amico: «Aspetta un momento!» Quale frase è corretta?",
        opts: ["Warte einen Moment!", "Wartest einen Moment!", "Warten einen Moment!"],
        why: "Con <i>du</i> l'imperativo è il tema senza pronome; il tema finisce in <i>-t</i>, quindi si aggiunge <b>-e</b>: <i>Warte!</i>"
      },
      {
        q: "Dici a un amico: «Leggi questo!» (lesen)",
        opts: ["Lese das!", "Lies das!", "Les das!"],
        why: "<i>Lesen</i> è un verbo forte con <i>e → ie</i>: nell'imperativo cambia il tema (<b>Lies!</b>) e non ha la <i>-e</i>."
      },
      {
        q: "Completa: «___ bitte einen Moment, Kinder!» (warten, ihr)",
        hint: "warten, imperativo ihr",
        why: "L'imperativo con <i>ihr</i> ha la forma di <i>ihr</i> senza pronome: <b>Wartet!</b>"
      },
      {
        q: "Completa: «Ruf mich doch ___!» (anrufen: chiamami pure)",
        hint: "il prefisso del verbo separabile",
        why: "<i>Anrufen</i> è separabile: il prefisso <b>an</b> va in fondo e il verbo resta in prima posizione."
      },
      {
        q: "Completa: «___ vorsichtig!» (sein, du)",
        hint: "sein, imperativo du",
        why: "<b>Sei</b>: l'imperativo di <i>sein</i> è irregolare (<i>sei, seid</i>)."
      },
      {
        q: "Completa la frase (vanno bene sia doch sia mal).",
        tr: "Sei stanco? Allora fai pure una pausa!",
        why: "<b>Mach</b>: il tema di <i>machen</i> è <i>mach-</i>, senza <i>-en</i> e senza <i>du</i>. Vanno bene <i>doch</i> (invito amichevole) e <i>mal</i> (tono più leggero)."
      },
      {
        q: "Metti in ordine le parole.",
        tr: "Dai, chiamami!",
        why: "Il verbo apre la frase, il pronome lo segue, le particelle <i>doch mal</i> precedono il prefisso <i>an</i> in fondo."
      },
      {
        q: "Traduci (a un amico, usa doch): «Chiamami pure!»",
        why: "<i>Ruf mich doch an!</i>: imperativo senza <i>du</i>, pronome dopo il verbo, prefisso <i>an</i> in fondo; <i>doch</i> rende l'invito più amichevole. Va bene anche con <i>mal</i> in più."
      },
      {
        tr: "Dimmi un po', domani hai tempo? Allora chiamami pure, e andiamo a mangiare insieme.",
        why: "In <i>Sag</i> la <b>g</b> finale si legge di norma [k]; in <i>zusammen</i> la <b>z</b> è [ts] e la <b>s</b> davanti a vocale è di norma sonora."
      },
      {
        tr: "Dai, passa da me e prenditi un momento di tempo!",
        why: "In <i>vorbei</i> la <b>v</b> si legge [f]; in <i>Moment</i> l'accento cade sulla seconda sillaba."
      }
    ]
  },
  "lesson:a2-u03-test": {
    theme: "Verifica",
    title: "Verifica dell'unità 3",
    objectives: [
      "verificare i pronomi all'accusativo e al dativo, i verbi con il dativo e l'ordine degli oggetti"
    ],
    theory: [
      {
        p: "Dieci domande sui pronomi all'accusativo e al dativo, sui verbi con il dativo e sull'ordine degli oggetti. Si supera con il 70%. Non riguardare le lezioni mentre rispondi: se non ricordi qualcosa, è meglio tornare a ripassare."
      }
    ],
    exercises: [
      {
        q: "Completa: «Wo ist Anna? Ich sehe ___ nicht.» (sie: Anna)",
        hint: "pronome all'accusativo",
        why: "<b>Sie</b>: <i>sehen</i> vuole l'accusativo, e quello di <i>sie</i> (lei) è uguale al nominativo."
      },
      {
        q: "Completa: «Du brauchst Hilfe? Ich helfe ___ gern.» (du)",
        hint: "pronome al dativo",
        why: "<b>Dir</b>: <i>helfen</i> vuole il dativo."
      },
      {
        q: "Completa: «Das Handy gehört ___.» (ich)",
        hint: "pronome al dativo",
        why: "<b>Mir</b>: <i>gehören</i> vuole il dativo."
      },
      {
        q: "Completa: «Ich habe das Buch. Ich gebe es ___ gleich.» (mein Bruder: er)",
        hint: "pronome al dativo",
        why: "<b>Ihm</b>: con due pronomi viene prima l'accusativo (<i>es</i>), poi il dativo (<i>ihm</i>)."
      },
      {
        q: "Completa: «Ihr helft uns oft. Wir danken ___ sehr.» (ihr)",
        hint: "pronome al dativo",
        why: "<b>Euch</b>: <i>danken</i> vuole il dativo, e il dativo di <i>ihr</i> è <i>euch</i>."
      },
      {
        q: "Come dici «L'idea mi piace molto»?",
        opts: ["Die Idee gefällt mich sehr.", "Die Idee gefällt mir sehr.", "Ich gefalle die Idee sehr."],
        why: "La cosa è il soggetto (<i>die Idee</i>) e la persona sta al dativo (<i>mir</i>)."
      },
      {
        q: "Dici: «Te lo mostro» (il libro). Quale frase ha l'ordine abituale?",
        opts: ["Ich zeige es dir.", "Ich zeige dir es.", "Ich zeige du es."],
        why: "Con due pronomi l'accusativo (<i>es</i>) viene prima del dativo (<i>dir</i>)."
      },
      {
        q: "Traduci: «Gli do il libro domani.»",
        why: "<i>Ich gebe ihm das Buch morgen</i>: il pronome dativo <i>ihm</i> viene prima del nome <i>das Buch</i>. Vanno bene anche <i>Morgen gebe ich ihm das Buch</i> e <i>Ich gebe ihm morgen das Buch</i>."
      },
      {
        tr: "Mio fratello compie gli anni. Gli regalo un libro e glielo do domani.",
        why: "In <i>Geburtstag</i> l'accento cade su <i>-burts-</i> (<i>ge-</i> è atono) e la <b>g</b> finale si legge di norma [k]."
      },
      {
        tr: "La mia collega ha bisogno di aiuto. La aiuto volentieri e domani la chiamo.",
        why: "In <i>braucht</i> <b>au</b> suona [aʊ] e la <b>ch</b> dopo di esso è [x]; in <i>sie</i> la <b>s</b> è sonora [z]."
      }
    ]
  },
  "unit:a2-u04": {
    title: "Salute",
    grammarNote: "mir tut ... weh · bei e zu con il dativo · espressioni di tempo (am, um, seit, vor) · Konjunktiv II di consiglio (du solltest, ich würde) · verbi riflessivi · dass · deshalb"
  },
  "lesson:a2-u04-l1": {
    theme: "Dolori e sintomi",
    title: "Mi fa male la testa",
    objectives: [
      "dire dove si sente dolore con il dativo della persona: mir, dir, ihm, ihr, uns, euch, ihnen",
      "accordare tut o tun alla parte del corpo, che è il soggetto",
      "nominare le parti del corpo con il loro articolo e il plurale"
    ],
    theory: [
      {
        h: "La persona al dativo, la parte del corpo al nominativo",
        p: "Per dire che una parte del corpo fa male il tedesco usa <em>wehtun</em>. La <b>persona</b> sta al <b>dativo</b> (<em>mir, dir, ihm, ihr, uns, euch, ihnen</em>) e la <b>parte del corpo</b> è il <b>soggetto</b>, quindi il verbo si accorda con lei: <em>Mir tut der Kopf weh</em> (singolare, <em>tut</em>), <em>Mir tun die Füße weh</em> (plurale, <em>tun</em>). <em>Weh</em> va in fondo alla frase, perché <em>wehtun</em> è un verbo separabile. Con un nome la persona prende il dativo del nome: <em>Meiner Schwester tut der Rücken weh.</em> L'ordine si può invertire senza cambiare il senso: <em>Der Kopf tut mir weh.</em> Per chiedere: <em>Wo tut es dir weh?</em> oppure <em>Was tut dir weh?</em>"
      },
      {
        contrast: "La struttura è la stessa dell'italiano: «mi fa male la testa», «mi fanno male i piedi». Anche in italiano la persona è all'indiretto (<em>mi</em>) e il verbo si accorda con la parte del corpo. La differenza è nella forma: <em>mir</em> è una parola a sé, non un pronome atono prima del verbo, e il verbo si spezza in <em>tut ... weh</em>. Anche i generi non coincidono: <em>la testa</em> è femminile, ma <em>der Kopf</em> è maschile; <em>la gamba</em> è femminile, <em>das Bein</em> è neutro. Per il mal di testa c'è anche <em>Ich habe Kopfschmerzen</em>, dove il soggetto è la persona. Attenzione a <em>der Hals</em>: indica sia il collo sia la gola."
      },
      {
        trap: "Con <em>wehtun</em> la persona non è il soggetto: <em>Ich tut der Kopf weh</em> e <em>Mich tut der Kopf weh</em> sono sbagliati, serve <em>mir</em>. E il verbo non segue la persona ma la parte del corpo: <em>Mir tun die Füße weh</em> (plurale), non <em>Mir tut die Füße weh</em>. È corretto anche <em>Mein Kopf tut weh</em>: il possessivo <em>mein</em> identifica chi prova dolore, mentre il soggetto resta <em>Kopf</em>."
      },
      {
        tip: "Prima trova la parte del corpo e guarda se è singolare o plurale: è lei che decide <em>tut</em> o <em>tun</em>. Poi aggiungi la persona al dativo. Il plurale dei nomi del corpo va imparato insieme all'articolo: <em>der Fuß, die Füße</em>; <em>das Ohr, die Ohren</em>."
      }
    ],
    grammar: {
      title: "mir tut ... weh",
      note: "La persona è al <b>dativo</b>, la parte del corpo è il <b>soggetto</b> e decide <b>tut</b> (singolare) o <b>tun</b> (plurale). <b>Weh</b> va in fondo.",
      table: {
        head: ["persona", "dativo", "esempio"],
        rows: [
          ["ich", "mir", "Mir tut der Kopf weh."],
          ["du", "dir", "Dir tun die Füße weh."],
          ["er", "ihm", "Ihm tut der Bauch weh."],
          ["sie", "ihr", "Ihr tut der Rücken weh."],
          ["wir", "uns", "Uns tun die Beine weh."],
          ["ihr", "euch", "Euch tut der Hals weh."],
          ["sie, Sie", "ihnen, Ihnen", "Ihnen tun die Ohren weh."]
        ]
      },
      examples: [
        { tr: "Mi fa male la testa.", note: "mir: dativo di ich; der Kopf è il soggetto" },
        { tr: "Dove ti fa male?", note: "es è soggetto generico: Wo tut es dir weh?" },
        { tr: "Gli fanno male i denti.", note: "ihm; die Zähne è plurale, quindi tun" },
        { tr: "A mia sorella fa male la schiena.", note: "dativo anche sul nome: meiner Schwester" },
        { tr: "Ci fanno male le gambe.", note: "uns; das Bein, die Beine" },
        { tr: "Ho mal di testa.", note: "alternativa: qui il soggetto è ich, Kopfschmerzen è plurale" }
      ]
    },
    vocab: [
      "la testa",
      "il collo, la gola",
      "la pancia",
      "la schiena",
      "la gamba",
      "il piede",
      "il dente",
      "l'orecchio",
      "il dolore",
      "fare male",
      "malato",
      "stanco"
    ],
    exercises: [
      {
        q: "Come dici «Mi fa male la testa»?",
        opts: ["Ich tut der Kopf weh.", "Mir tut der Kopf weh.", "Mich tut der Kopf weh."],
        why: "La persona sta al dativo: <b>mir</b>. <i>Der Kopf</i> è il soggetto, quindi il verbo è <i>tut</i>. <i>Ich</i> è un nominativo e <i>mich</i> un accusativo."
      },
      {
        q: "Come dici «Mi fanno male i piedi»?",
        opts: ["Mir tut die Füße weh.", "Mir tun die Füße weh.", "Mich tun die Füße weh."],
        why: "<i>Die Füße</i> è plurale e soggetto: il verbo è <b>tun</b>. La persona resta al dativo, <i>mir</i>."
      },
      {
        q: "Completa: «Mir ___ die Beine weh.» (fare, plurale della parte del corpo)",
        hint: "tun, forma del plurale",
        why: "<b>Tun</b>: il soggetto è <i>die Beine</i>, plurale. Con un soggetto singolare si direbbe <i>tut</i>."
      },
      {
        q: "Completa: «Anna ist krank. ___ tut der Hals weh.» (a lei: dativo di sie)",
        hint: "pronome al dativo",
        why: "<b>Ihr</b>: dativo di <i>sie</i> (lei). <i>Der Hals</i> è il soggetto, singolare."
      },
      {
        q: "Completa la frase.",
        tr: "Sono stanco. Mi fanno male le gambe. E Lisa? Le fa male la schiena.",
        why: "<i>Mir</i> per <i>ich</i> e <i>ihr</i> per <i>Lisa</i>: sono i dativi. Il verbo si accorda con la parte del corpo: <i>tun</i> con <i>die Beine</i>, <i>tut</i> con <i>der Rücken</i>."
      },
      {
        q: "Abbina ogni frase alla sua traduzione.",
        pairs: [
          "Mi fa male la testa.",
          "Mi fanno male i piedi.",
          "Le fa male la pancia.",
          "Gli fanno male le orecchie."
        ]
      },
      {
        q: "Metti in ordine le parole.",
        tr: "Mi fanno male i piedi.",
        why: "Il verbo resta in seconda posizione. Vanno bene <i>Mir tun die Füße weh</i> e <i>Die Füße tun mir weh</i>: cambia l'ordine, non il senso."
      },
      {
        q: "Traduci con tun ... weh e il dativo: «Mi fa male la testa.»",
        why: "<i>Mir tut der Kopf weh</i> oppure <i>Der Kopf tut mir weh</i>. In italiano <i>la testa</i> è femminile, ma <i>der Kopf</i> è maschile."
      },
      {
        tr: "Buongiorno, dottoressa. Mi fa male la testa, e mi fanno male anche le orecchie.",
        why: "In <i>Kopf</i> la <b>o</b> è breve e la <b>pf</b> è un'affricata [pf]; in <i>Ohren</i> la <b>h</b> non si legge e la <b>o</b> è lunga."
      },
      {
        tr: "Sono malato. Mi fa male la gola, e mi fanno male le gambe.",
        why: "In <i>Hals</i> la <b>h</b> iniziale è un soffio [h]; in <i>weh</i> la <b>w</b> è [v] e la <b>h</b> non si legge; in <i>Beine</i> la <b>ei</b> suona [aɪ]."
      }
    ]
  },
  "lesson:a2-u04-l2": {
    theme: "Dal medico",
    title: "Dal medico",
    objectives: [
      "distinguere bei + dativo (stato) da zu + dativo (moto) per dire «dal medico»",
      "usare le forme contratte beim, zum, zur",
      "dire quando e da quanto tempo con am, um, seit e vor",
      "fissare un appuntamento in modo comprensibile"
    ],
    theory: [
      {
        h: "bei per essere da qualcuno, zu per andarci",
        p: "Per dire <b>dove si è</b> presso una persona si usa <b>bei + dativo</b>: <em>Ich bin beim Arzt</em> (<em>bei dem</em> diventa <em>beim</em>). Per dire <b>dove si va</b> si usa <b>zu + dativo</b>: <em>Ich gehe zum Arzt</em> (<em>zu dem</em> diventa <em>zum</em>), <em>Ich gehe zur Ärztin</em> (<em>zu der</em> diventa <em>zur</em>). Anche <em>zur Apotheke</em> è un moto verso un luogo. Per il tempo: <b>am</b> con il giorno (<em>am Montag</em>), <b>um</b> con l'ora (<em>um zehn Uhr</em>), <b>seit + dativo</b> per ciò che dura da un certo momento e continua (<em>seit drei Tagen</em>), <b>vor + dativo</b> per ciò che è accaduto prima (<em>vor drei Tagen</em>). Per fissare un appuntamento: <em>Ich möchte einen Termin vereinbaren.</em>"
      },
      {
        contrast: "L'italiano usa <em>da</em> in entrambi i casi: «sono dal medico» e «vado dal medico». Il tedesco separa i due significati: <em>bei</em> (si è lì) e <em>zu</em> (ci si va). Anche il tempo cambia: «da tre giorni» è <em>seit drei Tagen</em>, con il presente come in italiano (<em>Ich habe seit drei Tagen Fieber</em>, «ho la febbre da tre giorni»), mentre «tre giorni fa» è <em>vor drei Tagen</em> e la preposizione sta <b>prima</b>, non dopo come <em>fa</em>."
      },
      {
        trap: "<em>Bei</em> e <em>zu</em> reggono il dativo. <em>Zum Arzt</em> e <em>zur Ärztin</em> sono le forme contratte usuali: <em>zu dem</em> e <em>zu der</em> compaiono quando si vuole mettere in evidenza l'articolo. Per dire che vai dal medico usa <em>Ich gehe zum Arzt</em>; <em>beim Arzt</em> indica che sei dal medico. Dopo <em>seit</em> e <em>vor</em> anche il plurale è al dativo, con la <b>-n</b>: <em>seit drei Tagen</em>, non <em>seit drei Tage</em>."
      },
      {
        tip: "Chiediti prima: «si è lì o ci si va?». <em>Wo?</em> chiede <em>bei</em>, <em>wohin?</em> chiede <em>zu</em>. Per l'appuntamento tieni insieme giorno e ora: <em>am Montag um zehn Uhr</em>."
      }
    ],
    grammar: {
      title: "bei, zu, am, um, seit, vor",
      note: "Dal medico: <b>bei</b> + dativo per lo stato, <b>zu</b> + dativo per il moto. Nel tempo: <b>am</b> (giorno), <b>um</b> (ora), <b>seit</b> (da quando), <b>vor</b> (fa).",
      table: {
        head: ["domanda", "forma", "esempio"],
        rows: [
          ["Wo? (da una persona)", "bei + dativo", "Ich bin beim Arzt."],
          ["Wohin? (da una persona)", "zu + dativo", "Ich gehe zum Arzt."],
          ["Wohin? (a un luogo)", "zu + dativo", "Ich gehe zur Apotheke."],
          ["quando (giorno)", "am", "am Montag"],
          ["quando (ora)", "um", "um zehn Uhr"],
          ["da quanto tempo", "seit + dativo", "seit drei Tagen"],
          ["quanto tempo fa", "vor + dativo", "vor drei Tagen"]
        ]
      },
      examples: [
        { tr: "Sono dal medico.", note: "bei dem diventa beim: stato in luogo" },
        { tr: "Vado dal medico.", note: "zu dem diventa zum: moto verso una persona" },
        { tr: "Mia madre va dalla dottoressa.", note: "zu der diventa zur" },
        { tr: "Vado in farmacia.", note: "zur Apotheke: moto verso un luogo" },
        { tr: "Ho la febbre da tre giorni.", note: "seit + dativo plurale: Tagen" },
        { tr: "L'appuntamento è lunedì alle dieci.", note: "am con il giorno, um con l'ora" }
      ]
    },
    vocab: [
      "il medico",
      "la dottoressa",
      "lo studio medico",
      "l'appuntamento",
      "la cassa mutua, l'assicurazione sanitaria",
      "la ricetta",
      "la farmacia",
      "la compressa",
      "la febbre",
      "la tosse",
      "fissare (un appuntamento)",
      "da (tempo)"
    ],
    exercises: [
      {
        q: "Sei dal medico, non ci stai andando. Quale frase è corretta?",
        opts: ["Ich bin zum Arzt.", "Ich bin beim Arzt.", "Ich bin bei Arzt."],
        why: "Per dire dove si è presso una persona: <b>bei</b> + dativo, e <i>bei dem</i> diventa <i>beim</i>. <i>Zum</i> indica il moto."
      },
      {
        q: "Completa: «Ich gehe ___ Ärztin.» (usa zu con l'articolo, nella forma contratta)",
        hint: "zu + der, forma contratta",
        why: "<b>Zur</b>: <i>zu der</i> si contrae in <i>zur</i>. Dopo un verbo di moto verso una persona serve <i>zu</i> + dativo."
      },
      {
        q: "Completa: «Ich habe ___ drei Tagen Fieber.» (Ho la febbre da tre giorni.)",
        hint: "da quanto tempo, + dativo",
        why: "<b>Seit</b> + dativo per ciò che dura da un certo momento e continua; <i>Tagen</i> ha la <b>-n</b> del dativo plurale."
      },
      {
        q: "Completa la frase.",
        tr: "Vorrei fissare un appuntamento. Va bene lunedì alle dieci?",
        why: "<i>Am Montag</i> con il giorno, <i>um zehn Uhr</i> con l'ora."
      },
      {
        q: "Abbina ogni espressione alla sua traduzione.",
        pairs: [
          "dal medico (ci sono)",
          "dal medico (ci vado)",
          "da tre giorni",
          "tre giorni fa"
        ]
      },
      {
        q: "Metti in ordine le parole.",
        tr: "Domani vado dal medico.",
        why: "Il verbo resta in seconda posizione. Vanno bene <i>Ich gehe morgen zum Arzt</i> e <i>Morgen gehe ich zum Arzt</i>; sono possibili anche l'ordine con <i>zum Arzt</i> in prima posizione o con <i>morgen</i> in fondo, che mettono in risalto un elemento."
      },
      {
        q: "Traduci (usa am e zu): «Lunedì vado dalla dottoressa.»",
        why: "<i>Ich gehe am Montag zur Ärztin</i>: <i>am</i> con il giorno, <i>zur</i> (= <i>zu der</i>) con il moto. Con <i>Am Montag</i> in testa il verbo resta in seconda posizione: <i>Am Montag gehe ich zur Ärztin</i>."
      },
      {
        q: "Telefoni a uno studio medico per fissare un appuntamento.",
        setting: "Chiami lo studio del dottor Berger perché hai la febbre.",
        lines: [
          { tr: "Studio Berger, buongiorno." },
          {
            tr: "Di' che vorresti fissare un appuntamento.",
            answerTr: "Buongiorno, vorrei fissare un appuntamento."
          },
          { tr: "Volentieri. Da quanto tempo ha la febbre?" },
          {
            tr: "Rispondi che hai la febbre da tre giorni.",
            answerTr: "Ho la febbre da tre giorni."
          }
        ]
      },
      {
        tr: "Buongiorno, vorrei fissare un appuntamento. Ho la febbre da tre giorni e mi fa male la testa.",
        why: "In <i>seit</i> la <b>s</b> iniziale è sonora [z] e la <b>ei</b> suona [aɪ]; in <i>Termin</i> l'accento cade sull'ultima sillaba."
      },
      {
        tr: "Lunedì alle dieci ho un appuntamento dal medico.",
        why: "In <i>zehn</i> la <b>z</b> è [ts] e la <b>e</b> è lunga, con la <b>h</b> muta; in <i>Uhr</i> la <b>u</b> è lunga e la <b>r</b> finale si vocalizza spesso."
      }
    ]
  },
  "lesson:a2-u04-l3": {
    theme: "Consigli",
    title: "Dovresti riposarti",
    objectives: [
      "dare un consiglio con du solltest, ihr solltet, Sie sollten",
      "esprimere un consiglio personale con ich würde + infinito",
      "usare il pronome riflessivo giusto con un verbo come sich ausruhen",
      "collocare il pronome riflessivo prima dell'infinito in fondo alla frase"
    ],
    theory: [
      {
        h: "Il consiglio con il Konjunktiv II",
        p: "Per dare un consiglio il tedesco usa il Konjunktiv II. Con <b>sollen</b> si dice <em>solltest</em>, <em>solltet</em>, <em>sollten</em>: <em>Du solltest dich ausruhen.</em> Per dire che cosa si farebbe al posto dell'altro si usa <b>würde + infinito</b>: <em>Ich würde zum Arzt gehen.</em> L'espressione <em>an deiner Stelle</em> si abbina bene a <em>würde</em>: <em>An deiner Stelle würde ich im Bett bleiben.</em> L'infinito va in fondo alla frase, e il pronome riflessivo lo precede."
      },
      {
        h: "I verbi riflessivi lessicali",
        p: "<em>Sich ausruhen, sich hinlegen, sich erholen, sich fühlen</em> sono riflessivi per natura: il pronome fa parte del verbo e non significa «riposare sé stesso». Il pronome è all'<b>accusativo</b> e cambia con la persona: <em>mich, dich, sich, uns, euch, sich</em>. Il pronome sta dopo il verbo coniugato: <em>Ich ruhe mich aus.</em> Con <em>sollen</em> e <em>würde</em> sta davanti all'infinito: <em>Du solltest dich ausruhen. Ich würde mich hinlegen.</em> Con la forma di cortesia: <em>Sie sollten sich hinlegen</em> (<em>sich</em> resta minuscolo)."
      },
      {
        contrast: "L'italiano costruisce il consiglio con il condizionale: «dovresti riposarti», «io andrei dal medico». Il tedesco usa il Konjunktiv II di <em>sollen</em> o <em>würde</em> + infinito, non una desinenza propria sul verbo principale. Per i riflessivi in italiano il pronome si attacca all'infinito (<em>riposarti</em>); in tedesco è una parola a sé e sta davanti: <em>dich ausruhen</em>. Anche i verbi non sempre coincidono: <em>sich ausruhen</em> corrisponde a «riposarsi», ma <em>sich hinlegen</em> è «sdraiarsi» e <em>sich erholen</em> è «riprendersi»."
      },
      {
        trap: "<em>Du solltest</em> è un consiglio; <em>du sollst</em> è un obbligo o l'incarico di qualcun altro, e suona molto più forte. Non spostare il pronome in fondo: <em>Du solltest ausruhen dich</em> è sbagliato, l'ordine è <em>dich ausruhen</em>. Con <em>würde</em> l'infinito resta in fondo: <em>Ich würde mich ausruhen</em>, non <em>Ich würde ausruhen mich</em>."
      },
      {
        tip: "Per il consiglio formula due versioni: <em>Du solltest ...</em> per dirlo all'altro, <em>Ich würde ...</em> per dire cosa faresti tu. Poi controlla il pronome riflessivo: stessa persona del soggetto (<em>ich ... mich</em>, <em>du ... dich</em>)."
      }
    ],
    grammar: {
      title: "Il Konjunktiv II di consiglio",
      note: "<b>sollen</b> al Konjunktiv II per consigliare (<b>du solltest</b>), <b>würde + infinito</b> per dire cosa faresti tu. Il pronome riflessivo è accusativo e sta prima dell'infinito.",
      table: {
        head: ["persona", "sollen", "würde", "riflessivo"],
        rows: [
          ["ich", "sollte", "würde", "mich"],
          ["du", "solltest", "würdest", "dich"],
          ["er, sie, es", "sollte", "würde", "sich"],
          ["wir", "sollten", "würden", "uns"],
          ["ihr", "solltet", "würdet", "euch"],
          ["sie, Sie", "sollten", "würden", "sich"]
        ]
      },
      examples: [
        { tr: "Dovresti riposarti.", note: "du solltest + dich + infinito in fondo" },
        { tr: "Io andrei dal medico.", note: "ich würde + infinito in fondo" },
        { tr: "Al tuo posto resterei a letto.", note: "an deiner Stelle: dativo dopo an" },
        { tr: "Dovreste bere molto tè.", note: "ihr solltet: sollte- + la desinenza personale -t" },
        { tr: "Dovrebbe sdraiarsi.", note: "forma di cortesia: Sie sollten sich hinlegen" },
        { tr: "Io mi riprenderei in vacanza.", note: "sich erholen: würde + mich + infinito" }
      ]
    },
    vocab: [
      "riposarsi",
      "sdraiarsi",
      "riprendersi, rimettersi",
      "sentirsi",
      "il consiglio",
      "il tè",
      "il letto",
      "la quiete, il riposo",
      "le vacanze, il congedo",
      "sano, guarito",
      "dovere (sollen)",
      "al tuo posto"
    ],
    exercises: [
      {
        q: "Dai un consiglio a un'amica stanca: «Dovresti riposarti.»",
        opts: ["Du sollst dich ausruhen.", "Du solltest dich ausruhen.", "Du solltest ausruhen dich."],
        why: "<b>Du solltest dich ausruhen</b>: il Konjunktiv II di <i>sollen</i> dà un consiglio, e <i>dich</i> precede l'infinito. <i>Du sollst</i> è un obbligo; nella terza il pronome è nel posto sbagliato."
      },
      {
        tr: "Il Konjunktiv II di sollen, tutte le persone.",
        why: "<i>Sollte, solltest, sollte, sollten, solltet, sollten</i>: sono le forme del Präteritum, ma qui servono per il consiglio. La 1ª e la 3ª persona singolare sono uguali."
      },
      {
        tr: "Il Konjunktiv II di sich ausruhen con würde, tutte le persone.",
        why: "<i>Würde mich ausruhen, würdest dich ausruhen, würde sich ausruhen, würden uns ausruhen, würdet euch ausruhen, würden sich ausruhen</i>: <i>würde</i> + pronome riflessivo + infinito."
      },
      {
        q: "Completa: «Du bist krank. Du ___ zum Arzt gehen.» (dovresti: sollen)",
        hint: "sollen, Konjunktiv II, du",
        why: "<b>Solltest</b>: la forma di <i>du</i> è <i>solltest</i>, con la <b>-st</b>. L'infinito <i>gehen</i> sta in fondo."
      },
      {
        q: "Completa: «Wir sind müde. Wir sollten ___ ausruhen.» (wir)",
        hint: "pronome riflessivo, accusativo",
        why: "<b>Uns</b>: il pronome riflessivo di <i>wir</i> è <i>uns</i>, davanti all'infinito."
      },
      {
        q: "Completa la frase.",
        tr: "Hai la febbre. Al tuo posto andrei dal medico. E dovresti riposarti.",
        why: "<i>An deiner Stelle würde ich ...</i> per dire cosa faresti tu; <i>du solltest dich ausruhen</i>, con <i>dich</i> per <i>du</i>."
      },
      {
        q: "Abbina ogni frase alla sua traduzione.",
        pairs: [
          "Dovresti riposarti.",
          "Io andrei dal medico.",
          "Dovreste bere molto tè.",
          "Dovrebbe sdraiarsi."
        ]
      },
      {
        q: "Traduci (usa sich ausruhen): «Al tuo posto mi riposerei.»",
        why: "<i>An deiner Stelle würde ich mich ausruhen</i>: <i>würde</i> dopo <i>An deiner Stelle</i> in seconda posizione, poi <i>ich mich</i> e l'infinito in fondo. Va bene anche <i>Ich würde mich an deiner Stelle ausruhen</i>."
      },
      {
        tr: "Sembri stanco. Al tuo posto mi sdraierei, e dovresti bere molto tè.",
        why: "In <i>Stelle</i> la <b>st</b> iniziale suona [ʃt], mentre in <i>solltest</i> è [st]; in <i>würde</i> la <b>ü</b> è breve [ʏ]."
      },
      {
        tr: "Dovresti riposarti, e io andrei dal medico.",
        why: "In <i>ausruhen</i> la <b>au</b> suona [aʊ] e la <b>h</b> non si legge; in <i>dich</i> la <b>ch</b> dopo <b>i</b> è [ç]."
      }
    ]
  },
  "lesson:a2-u04-l4": {
    theme: "Stile di vita",
    title: "Vivere in salute",
    objectives: [
      "introdurre un contenuto con dass dopo ich finde, ich glaube, ich weiß, der Arzt sagt",
      "mettere il verbo coniugato in fondo nella frase con dass",
      "collegare causa e conseguenza con deshalb, che in prima posizione porta il verbo subito dopo",
      "parlare di sport, alimentazione, sonno e abitudini"
    ],
    theory: [
      {
        h: "dass manda il verbo in fondo",
        p: "Dopo verbi come <em>finden, glauben, denken, wissen, sagen</em> si riporta un contenuto con <b>dass</b>. La frase che segue è una subordinata: il verbo coniugato va in <b>fondo</b>, e la virgola prima di <em>dass</em> è obbligatoria. <em>Ich finde, dass Sport wichtig ist. Der Arzt sagt, dass ich mehr Wasser trinken soll.</em> Se ci sono un infinito e un modale, il modale coniugato chiude la frase: <em>... trinken soll</em>. Funziona come <em>weil</em>, <em>als</em> e <em>wenn</em> viste prima."
      },
      {
        h: "deshalb: la conseguenza, con inversione",
        p: "<b>Deshalb</b> («per questo») collega due frasi principali e di solito occupa la <b>prima posizione</b> della seconda (non è obbligatorio: <em>Ich bin deshalb müde</em> è corretto); quando sta in testa, il verbo coniugato viene subito dopo e il soggetto lo segue. <em>Ich schlafe schlecht. Deshalb bin ich müde.</em> Sinonimi: <em>deswegen, darum</em>. Si può mettere anche dopo una virgola: <em>Ich schlafe schlecht, deshalb bin ich müde.</em>"
      },
      {
        contrast: "In italiano «penso che» regge il <b>congiuntivo</b> («penso che sia importante»), mentre «so che» regge l'indicativo («so che è importante»); in tedesco entrambe le frasi con <em>dass</em> usano l'indicativo: <em>Ich denke, dass Sport wichtig <b>ist</b></em>, <em>Ich weiß, dass Sport wichtig <b>ist</b></em>. In italiano «che» non vuole la virgola davanti; in tedesco la virgola prima di <em>dass</em> è obbligatoria. E «per questo», «quindi» non cambiano l'ordine in italiano (<em>dormo male, quindi sono stanco</em>), mentre <em>deshalb</em> inverte soggetto e verbo: <em>Deshalb bin ich müde</em>."
      },
      {
        trap: "<em>Deshalb</em> non manda il verbo in fondo come fa <em>dass</em>: <em>Deshalb ich bin müde</em> e <em>Deshalb ich müde bin</em> sono sbagliati. E con <em>dass</em> il verbo non resta in seconda posizione: <em>Ich finde, dass Sport ist wichtig</em> è sbagliato. Non confondere <em>dass</em> (congiunzione) con <em>das</em> (articolo o pronome)."
      },
      {
        tip: "Davanti a <em>dass</em> metti la virgola e porta il verbo in fondo; se <em>deshalb</em> apre la frase, scrivi subito il verbo. Prima di scrivere chiediti: la frase comincia con una congiunzione (<em>dass</em>, verbo in fondo) o con un avverbio come <em>deshalb</em> (verbo subito)?"
      }
    ],
    grammar: {
      title: "dass e deshalb",
      note: "<b>dass</b>: il verbo coniugato va in fondo. <b>deshalb</b> in prima posizione: il verbo viene subito dopo, il soggetto lo segue.",
      table: {
        head: ["elemento", "posizione del verbo", "esempio"],
        rows: [
          ["frase principale", "seconda posizione", "Sport ist wichtig."],
          ["dass", "in fondo", "Ich finde, dass Sport wichtig ist."],
          ["dass con modale", "il modale chiude", "..., dass ich mehr trinken soll."],
          ["deshalb", "subito dopo deshalb, se apre la frase", "Ich schlafe schlecht. Deshalb bin ich müde."]
        ]
      },
      examples: [
        { tr: "Penso che lo sport sia importante.", note: "dass + verbo in fondo; l'italiano chiede il congiuntivo, il tedesco no" },
        { tr: "Il medico dice che devo bere più acqua.", note: "il modale soll chiude la frase dopo trinken" },
        { tr: "So che le sigarette non fanno bene.", note: "dass ... sind: il verbo in fondo" },
        { tr: "Dormo male. Per questo sono stanco.", note: "deshalb in prima posizione, poi bin ich" },
        { tr: "Mangia molta verdura. Per questo è raramente malata.", note: "deshalb, poi ist sie" },
        { tr: "Penso che una passeggiata faccia bene.", note: "dass ... gesund ist" }
      ]
    },
    vocab: [
      "la mela",
      "la verdura",
      "il pasto",
      "la passeggiata",
      "la sigaretta",
      "il sonno",
      "la salute",
      "l'acqua",
      "fumare",
      "regolarmente",
      "malsano, poco salutare",
      "muoversi, fare movimento"
    ],
    exercises: [
      {
        q: "Con dass: «Penso che lo sport sia importante.» Quale frase è corretta?",
        opts: [
          "Ich finde, dass Sport ist wichtig.",
          "Ich finde, dass Sport wichtig ist.",
          "Ich finde dass, Sport wichtig ist."
        ],
        why: "<b>Dass</b> manda il verbo in fondo, e la virgola va <b>prima</b> di <i>dass</i>. Nella prima il verbo è in seconda posizione, nella terza la virgola è al posto sbagliato."
      },
      {
        q: "Quale frase è corretta? «Dormo male. Per questo sono stanco.»",
        opts: [
          "Ich schlafe schlecht. Deshalb ich bin müde.",
          "Ich schlafe schlecht. Deshalb bin ich müde.",
          "Ich schlafe schlecht. Deshalb ich müde bin."
        ],
        why: "Con <b>deshalb</b> in prima posizione il verbo viene subito, poi il soggetto: <i>Deshalb bin ich müde</i>. <i>Deshalb</i> non manda il verbo in fondo."
      },
      {
        q: "Completa: «Der Arzt sagt, ___ ich mehr Wasser trinken soll.» (che)",
        hint: "congiunzione",
        why: "<b>Dass</b> introduce ciò che dice il medico e manda il verbo in fondo: <i>trinken soll</i>."
      },
      {
        q: "Completa: «Ich glaube, dass er viel Gemüse ___.» (essen, er)",
        hint: "essen, er, verbo in fondo",
        why: "<b>Isst</b>: la forma di <i>er</i> è <i>isst</i>, e con <i>dass</i> sta in fondo alla frase."
      },
      {
        q: "Completa: «Ich bin oft müde. Deshalb ___ ich früh ins Bett.» (gehen, ich)",
        hint: "gehen, ich",
        why: "<b>Gehe</b>: con <i>Deshalb</i> in prima posizione il verbo viene subito, poi <i>ich</i>."
      },
      {
        q: "Completa la frase.",
        tr: "So che lo sport fa bene. Ma ne faccio troppo poco. Per questo sono spesso stanco.",
        why: "<i>Dass</i> dopo <i>Ich weiß,</i> con il verbo in fondo; <i>deshalb</i> (anche <i>deswegen</i> o <i>darum</i>) apre la frase seguente, e <i>bin ich</i> viene subito dopo."
      },
      {
        q: "Abbina ogni parola alla sua traduzione.",
        pairs: [
          "che (introduce una frase)",
          "per questo",
          "regolarmente",
          "malsano, poco salutare"
        ]
      },
      {
        q: "Traduci (usa dass): «Il medico dice che devo dormire di più.»",
        why: "<i>Der Arzt sagt, dass ich mehr schlafen soll</i>: virgola, <i>dass</i>, e il modale <i>soll</i> in fondo dopo l'infinito. Va bene anche <i>muss</i>, perché «devo» può tradurre l'uno e l'altro."
      },
      {
        tr: "Il medico dice che devo dormire di più. Dormo male, per questo sono spesso stanco.",
        why: "In <i>schlafen</i> e <i>schlecht</i> la <b>sch</b> è [ʃ]; in <i>dass</i> la <b>ss</b> è una <b>s</b> sorda e la <b>a</b> è breve."
      },
      {
        tr: "Credo che lo sport faccia bene. Per questo vado a passeggio ogni giorno.",
        why: "In <i>Sport</i> la <b>sp</b> iniziale suona [ʃp]; in <i>gesund</i> la <b>s</b> è sonora [z]; in <i>spazieren</i> <b>sp</b> è [ʃp] e la <b>z</b> è [ts]."
      }
    ]
  },
  "lesson:a2-u04-test": {
    theme: "Verifica",
    title: "Verifica dell'unità 4",
    objectives: [
      "verificare il dativo con wehtun, il Konjunktiv II di consiglio (solltest, würde, anche con un verbo riflessivo) e le frasi con dass"
    ],
    theory: [
      {
        p: "Dieci domande sul dativo con <em>wehtun</em>, sul Konjunktiv II di consiglio e sulle frasi con <em>dass</em>. Si supera con il 70%. Non riguardare le lezioni mentre rispondi: se non ricordi qualcosa, è meglio tornare a ripassare."
      }
    ],
    exercises: [
      {
        tr: "Il Konjunktiv II di sollen, tutte le persone.",
        why: "<i>Sollte, solltest, sollte, sollten, solltet, sollten</i>: la 1ª e la 3ª persona singolare sono uguali."
      },
      {
        q: "Completa: «Anna hat Fieber. ___ tut der Kopf weh.» (a lei)",
        hint: "pronome al dativo",
        why: "<b>Ihr</b>: dativo di <i>sie</i>; <i>der Kopf</i> è il soggetto."
      },
      {
        q: "Completa: «Wir sind müde. ___ tun die Beine weh.» (a noi)",
        hint: "pronome al dativo",
        why: "<b>Uns</b>: dativo di <i>wir</i>; <i>die Beine</i> è plurale, quindi <i>tun</i>."
      },
      {
        q: "Completa: «Ich denke, ___ du dich ausruhen solltest.» (che)",
        hint: "congiunzione",
        why: "<b>Dass</b> introduce ciò che si pensa e manda il verbo in fondo: <i>ausruhen solltest</i>."
      },
      {
        q: "Completa: «Du bist krank. An deiner Stelle ___ ich zum Arzt gehen.» (werden, Konjunktiv II)",
        hint: "werden, Konjunktiv II, ich",
        why: "<b>Würde</b>: <i>würde</i> + infinito per dire cosa faresti tu."
      },
      {
        q: "Come dici «Mi fanno male le gambe»?",
        opts: ["Mir tut die Beine weh.", "Mir tun die Beine weh.", "Ich tun die Beine weh."],
        why: "<i>Die Beine</i> è plurale e soggetto, quindi <b>tun</b>; la persona resta al dativo, <i>mir</i>."
      },
      {
        q: "Abbina ogni frase alla sua traduzione.",
        pairs: [
          "Mi fa male la testa.",
          "Dovresti riposarti.",
          "Io andrei dal medico.",
          "So che è malato."
        ]
      },
      {
        q: "Traduci (usa dass e sollen): «Il medico dice che devo riposarmi.»",
        why: "<i>Der Arzt sagt, dass ich mich ausruhen soll</i>: <i>dass</i> manda il verbo in fondo; <i>mich</i> precede l'infinito <i>ausruhen</i>."
      },
      {
        tr: "Mi fa male la testa. Penso che dovrei riposarmi.",
        why: "In <i>denke</i> la <b>n</b> davanti a <b>k</b> suona [ŋ]; in <i>sollte</i> la <b>o</b> è breve."
      },
      {
        tr: "Mio fratello è malato. Gli fa male la schiena, e credo che dovrebbe andare dal medico.",
        why: "In <i>Rücken</i> la <b>ü</b> è breve [ʏ] e <b>ck</b> suona [k]; in <i>Mein</i> la <b>ei</b> è [aɪ]; in <i>ihm</i> la <b>h</b> non si legge e la <b>i</b> è lunga."
      }
    ]
  }
});
