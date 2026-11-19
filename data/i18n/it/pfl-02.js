/* ============================================================
   Learner-language text (it) for data/core/pfl-02.js, unit pfl-u02.
   Keys point at ids in the neutral layer; arrays merge by index,
   so their length has to match core.
   Checked by scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("it", {
  "unit:pfl-u02": {
    title: "Parametri vitali e valori misurati",
    grammarNote: "l'imperativo con Sie · i verbi separabili durante la misurazione · il comparativo per confrontare i valori · i prefissi greci e i composti del paziente · il passivo con werden per riferire e documentare"
  },
  "lesson:pfl-u02-l1": {
    theme: "La misurazione",
    title: "Scopra il braccio, per favore",
    objectives: [
      "guidare il paziente durante la misurazione della pressione con l'imperativo di cortesia",
      "usare i verbi separabili della misurazione: anlegen, ablesen, einatmen, freimachen",
      "annunciare al paziente che cosa stai per fare prima di toccarlo",
      "nominare gli strumenti: bracciale, sfigmomanometro, termometro"
    ],
    theory: [
      {
        h: "L'imperativo di cortesia",
        p: "Per dare un'istruzione al paziente si usa l'<strong>imperativo con Sie</strong>: il verbo all'infinito in testa, subito dopo <em>Sie</em>. <em>Machen Sie bitte den Oberarm frei. Legen Sie den Arm auf den Tisch.</em> La forma è uguale a quella della domanda sì/no; a distinguerle sono l'intonazione che scende e la parola <em>bitte</em>, che in reparto non manca quasi mai. <em>Bitte</em> può stare dopo <em>Sie</em> o in testa: <em>Bitte sprechen Sie während der Messung nicht.</em> Con un verbo riflessivo ci sono due pronomi: <em>Setzen Sie sich bitte hin.</em>"
      },
      {
        h: "I verbi separabili della misurazione",
        p: "Quasi tutto quello che si dice durante una misurazione usa un verbo separabile: <em>anlegen</em> (mettere il bracciale), <em>ablesen</em> (leggere il valore), <em>einatmen</em> e <em>ausatmen</em> (inspirare, espirare), <em>freimachen</em> (scoprire), <em>sich hinsetzen</em>, <em>sich hinlegen</em>, <em>aufstehen</em>. All'imperativo e al presente il prefisso va <strong>in fondo</strong>: <em>Atmen Sie tief ein. Ich lege Ihnen die Manschette an. Ich lese den Wert ab.</em> Dopo un modale il verbo resta intero, in fondo: <em>Muss ich aufstehen?</em>"
      },
      {
        contrast: "In italiano l'imperativo di cortesia è una parola sola con il pronome attaccato: «si sieda», «si sdrai», «respiri». In tedesco il <em>Sie</em> va detto sempre, dopo il verbo, e con i riflessivi si aggiunge <em>sich</em>: <em>Setzen Sie sich hin</em>. Gli errori tipici di chi parla italiano sono <em>Setzen sich</em> (manca <em>Sie</em>) e <em>Sie setzen sich hin</em>, che è un'affermazione e non un invito. L'italiano non ha nulla di simile al prefisso separabile: «metta il bracciale» diventa <em>legen Sie die Manschette an</em>, con il pezzo <em>an</em> che arriva solo alla fine. Se te lo dimentichi, la frase resta a metà: <em>Ich lege Ihnen die Manschette</em> vuol dire solo «Le appoggio il bracciale»."
      },
      {
        trap: "<em>Der Puls</em> è solo il polso come battito; il polso come parte del braccio è <em>das Handgelenk</em>: <em>Ich messe den Puls am Handgelenk.</em> La «pressione» non è <em>Pression</em> ma <em>der Blutdruck</em>, e si dice <em>den Blutdruck messen</em>. <em>Die Manschette</em> è il bracciale dello sfigmomanometro, ma anche il polsino della camicia. <em>Den Arm freimachen</em> non vuol dire «liberare il braccio», ma scoprirlo, tirare su la manica. E <em>die Kurve</em> in reparto non è una curva qualunque: è la scheda dei parametri del paziente."
      },
      {
        tip: "Prima di toccare il paziente, di' che cosa fai e che cosa sentirà: <em>Ich lege Ihnen jetzt die Manschette an. Sie drückt kurz ein bisschen.</em> Un paziente avvisato si irrigidisce meno, e la misurazione viene più affidabile."
      }
    ],
    grammar: {
      title: "Imperativo con Sie e prefissi separabili",
      note: "Imperativo di cortesia: <b>verbo + Sie</b>, con <b>bitte</b>. Il prefisso separabile va <b>in fondo</b>. Con i riflessivi: <b>Setzen Sie sich</b>.",
      table: {
        head: ["infinito", "frase", "nota"],
        rows: [
          ["freimachen", "Machen Sie bitte den Oberarm frei.", "frei in fondo"],
          ["sich hinsetzen", "Setzen Sie sich bitte hin.", "riflessivo: Sie e sich"],
          ["einatmen", "Atmen Sie tief ein.", "ein in fondo"],
          ["anlegen", "Ich lege Ihnen die Manschette an.", "presente: an in fondo"],
          ["sprechen", "Bitte sprechen Sie nicht.", "verbo non separabile, nicht in fondo"]
        ]
      },
      examples: [
        { tr: "Scopra il braccio, per favore.", note: "freimachen: frei va in fondo" },
        { tr: "Si sieda, per favore, e appoggi il braccio sul tavolo.", note: "due imperativi, il primo riflessivo" },
        { tr: "Adesso Le metto il bracciale.", note: "anlegen al presente: an in fondo" },
        { tr: "Per favore, non parli durante la misurazione.", note: "bitte in testa, poi il verbo" },
        { tr: "Inspiri ed espiri con calma.", note: "einatmen e ausatmen hanno in comune atmen: il verbo si dice una volta, poi ein und aus" },
        { tr: "Leggo subito il valore.", note: "ablesen: ab in fondo" }
      ]
    },
    vocab: [
      "la misurazione",
      "misurare",
      "la pressione arteriosa",
      "il bracciale (dello sfigmomanometro)",
      "lo sfigmomanometro, il misuratore di pressione",
      "il braccio (la parte sopra il gomito)",
      "la manica",
      "il termometro (per la febbre)",
      "mettere, applicare (il bracciale)",
      "leggere (un valore su uno strumento)",
      "inspirare",
      "sedersi"
    ],
    dialogue: [
      "Buongiorno, signora Keller. Adesso Le misuro la pressione e il polso.",
      "Buongiorno. Devo alzarmi?",
      "No, resti seduta, per favore. Scopra il braccio sinistro, per favore.",
      "Ecco, va bene così?",
      "Sì, grazie. Adesso Le metto il bracciale. Per un attimo stringe un po'.",
      "Nessun problema.",
      "Per favore, non parli durante la misurazione e tenga il braccio fermo.",
      "Allora, com'è il valore?",
      "Lo leggo subito e lo scrivo nella scheda dei parametri."
    ],
    culture: {
      title: "Uno sguardo tedesco: la Kurve",
      text: "<p>Nei reparti tedeschi i parametri vitali si annotano nella <i>Kurve</i>, detta anche <i>Fieberkurve</i>: la scheda in cui, giorno per giorno, si vedono pressione, polso, temperatura e gli altri valori del paziente. In molti ospedali oggi è elettronica, ma il nome è rimasto, e in consegna si sente spesso <i>Steht in der Kurve</i>, «è nella scheda».</p><p>Quante volte al giorno si misura, e con quale strumento, lo stabiliscono il medico o lo standard del reparto. I valori di questa unità sono numeri tondi a scopo didattico, non valori di riferimento: in reparto valgono le soglie fissate dalla struttura.</p>"
    },
    exercises: [
      {
        q: "Vuoi chiedere alla paziente di scoprire il braccio. Quale frase è corretta?",
        opts: [
          "Mach bitte den Oberarm frei.",
          "Machen Sie bitte den Oberarm frei.",
          "Freimachen Sie bitte den Oberarm."
        ],
        why: "Con il paziente l'imperativo è <b>verbo + Sie</b>: <i>Machen Sie</i>. Il prefisso <i>frei</i> si stacca e va in fondo. La prima frase usa il <i>du</i>, che con un paziente adulto non si usa."
      },
      {
        q: "Completa: «Ich lege Ihnen jetzt die Manschette ___.»",
        hint: "prefisso separabile di anlegen",
        why: "<b>an</b>: <i>anlegen</i> è separabile, quindi al presente il prefisso va in fondo alla frase."
      },
      {
        tr: "Il presente di ablesen, tutte le persone.",
        why: "<i>Lese ab, liest ab, liest ab, lesen ab, lest ab, lesen ab</i>: alla seconda e terza persona singolare la <b>e</b> diventa <b>ie</b>, e il prefisso <i>ab</i> va sempre in fondo."
      },
      {
        q: "Scegli l'articolo determinativo giusto per ogni nome.",
        items: ["misurazione", "bracciale", "braccio (sopra il gomito)", "manica", "sfigmomanometro", "pressione arteriosa"]
      },
      {
        q: "Abbina ogni verbo al suo significato.",
        pairs: ["inspirare", "espirare", "sedersi", "sdraiarsi"]
      },
      {
        q: "Metti in ordine le parole.",
        tr: "Scopra il braccio sinistro, per favore.",
        why: "<i>Machen Sie bitte den linken Oberarm frei.</i> L'imperativo apre la frase, poi <i>Sie</i>; il prefisso <i>frei</i> chiude. <i>Bitte</i> può stare anche prima di <i>frei</i>."
      },
      {
        q: "Completa la frase.",
        tr: "Si sieda, per favore, e appoggi il braccio sul tavolo.",
        why: "<i>Setzen Sie sich bitte hin</i>: imperativo riflessivo con <i>Sie</i> e <i>sich</i>, e il prefisso <i>hin</i> in fondo."
      },
      {
        q: "Traduci: «Adesso Le metto il bracciale.»",
        why: "<i>Jetzt lege ich Ihnen die Manschette an</i> oppure <i>Ich lege Ihnen jetzt die Manschette an</i>. <i>Ihnen</i> è al dativo (a Lei), <i>an</i> va in fondo, e <i>jetzt</i> non si può omettere."
      },
      {
        q: "Misuri la pressione a una paziente.",
        setting: "Entri nella stanza della signora Keller con lo sfigmomanometro.",
        lines: [
          { tr: "Buongiorno. Che cosa fa oggi da me?" },
          { tr: "Rispondi che adesso le misuri la pressione.", answerTr: "Adesso Le misuro la pressione." },
          { tr: "Devo sdraiarmi?" },
          { tr: "Rispondi di no: deve sedersi.", answerTr: "No, si sieda, per favore." },
          { tr: "Mi devo togliere il maglione?" },
          { tr: "Rispondi di no: basta scoprire il braccio.", answerTr: "No, scopra solo il braccio." }
        ]
      },
      {
        tr: "Adesso Le misuro la pressione. Scopra il braccio sinistro, per favore, e tenga il braccio fermo.",
        why: "In <i>Oberarm</i> l'accento cade sulla prima sillaba, <b>O</b>; in <i>frei</i> la <b>ei</b> è [aɪ]; in <i>ruhig</i> la <b>h</b> non si legge e la <b>g</b> finale si pronuncia [ç]."
      },
      {
        tr: "Per favore, non parli durante la misurazione.",
        why: "In <i>sprechen</i> la <b>sp</b> iniziale è [ʃp]; in <i>während</i> la <b>ä</b> è lunga, la <b>h</b> non si legge e la <b>d</b> finale suona [t]; in <i>Messung</i> la <b>ss</b> è sorda."
      }
    ]
  },
  "lesson:pfl-u02-l2": {
    theme: "I numeri del reparto",
    title: "Valori e unità di misura",
    objectives: [
      "dire ad alta voce pressione, polso, temperatura e saturazione con la loro unità",
      "confrontare due valori con il comparativo e als",
      "dire che un valore è uguale a un altro con genauso ... wie",
      "riferire un valore a un collega insieme al confronto con il giorno prima"
    ],
    theory: [
      {
        h: "Come si dicono i valori",
        p: "La pressione si scrive <em>120/80 mmHg</em> e si dice <em>hundertzwanzig zu achtzig</em>: la barra si legge <strong>zu</strong>. L'unità, <em>Millimeter Quecksilbersäule</em>, a voce quasi non si dice. Il polso: <em>80 pro Minute</em> o <em>80 Schläge pro Minute</em>. La temperatura usa la virgola come in italiano: <em>37,5 Grad</em> si legge <em>siebenunddreißig Komma fünf</em>. La saturazione si dice in percentuale: <em>95 Prozent</em>. Per collocare un valore si usa spesso <em>liegen bei</em>: <em>Der Blutdruck liegt bei 120 zu 80.</em> I numeri di questa lezione sono tondi e didattici, non valori di riferimento."
      },
      {
        h: "Il comparativo per confrontare",
        p: "Il comparativo si forma con <strong>-er</strong> e il secondo termine con <strong>als</strong>: <em>schneller als gestern</em>, <em>niedriger als heute Morgen</em>. Molti aggettivi corti prendono l'Umlaut: <em>hoch → höher</em> (e la <b>c</b> cade), <em>lang → länger</em>, <em>warm → wärmer</em>; <em>langsam</em> no: <em>langsamer</em>. Il superlativo con il verbo: <em>am höchsten</em>, <em>am niedrigsten</em>. L'uguaglianza: <em>genauso hoch wie gestern</em>."
      },
      {
        contrast: "In italiano il comparativo è quasi sempre «più + aggettivo»: «più alto», «più veloce». In tedesco è una parola sola, e <em>mehr hoch</em> o <em>mehr schnell</em> sono errori. Il «di» del confronto non è <em>von</em> ma <strong>als</strong>: «più alta di ieri» = <em>höher als gestern</em>. L'uguaglianza invece usa <strong>wie</strong>, come il «come» italiano: <em>genauso hoch wie gestern</em>. Anche il modo di dire la pressione cambia: l'italiano dice «centoventi su ottanta» o «la massima e la minima»; il tedesco dice <em>120 zu 80</em> e, a voce, <em>der obere und der untere Wert</em>."
      },
      {
        trap: "<em>Schneller wie gestern</em> si sente nel parlato, ma nella lingua standard e nella documentazione il confronto vuole <em>als</em>. <em>Am höchsten</em> ha l'Umlaut come <em>höher</em>, mentre l'aggettivo semplice no: <em>hoch</em>. <em>Erhöht</em> vuol dire «aumentato, elevato» (<em>leicht erhöhte Temperatur</em>), non è un verbo da coniugare. E per la pressione bassa in Germania si dice <em>niedriger Blutdruck</em>; <em>tiefer Blutdruck</em> si sente soprattutto in Svizzera."
      },
      {
        tip: "Quando riferisci un valore a un collega, aggiungi sempre il confronto: <em>130 zu 80, höher als gestern</em>. Un numero da solo dice poco; il confronto dice se qualcosa sta cambiando."
      }
    ],
    grammar: {
      title: "Comparativo e superlativo",
      note: "Comparativo: <b>-er + als</b>. Gli aggettivi corti prendono spesso l'<b>Umlaut</b>. Superlativo con il verbo: <b>am ...-sten</b>. Uguaglianza: <b>genauso ... wie</b>.",
      table: {
        head: ["aggettivo", "comparativo", "superlativo"],
        rows: [
          ["hoch", "höher", "am höchsten"],
          ["niedrig", "niedriger", "am niedrigsten"],
          ["schnell", "schneller", "am schnellsten"],
          ["langsam", "langsamer", "am langsamsten"],
          ["gut", "besser", "am besten"]
        ]
      },
      examples: [
        { tr: "La pressione è di 120 su 80.", note: "liegen bei: il modo tipico di dire un valore" },
        { tr: "Oggi il polso è più veloce di ieri.", note: "schneller als: comparativo + als" },
        { tr: "La sera la temperatura è più alta che al mattino.", note: "hoch → höher, senza la c" },
        { tr: "Il secondo valore è più basso del primo.", note: "niedriger als der erste" },
        { tr: "Stamattina la pressione era al livello più alto.", note: "superlativo con il verbo: am höchsten" },
        { tr: "La temperatura è alta come ieri.", note: "uguaglianza: genauso ... wie" }
      ]
    },
    vocab: [
      "il valore",
      "il valore misurato",
      "l'unità di misura",
      "il polso, la frequenza cardiaca",
      "la temperatura",
      "il grado (37 Grad: 37 gradi)",
      "la scheda dei parametri",
      "alto (höher: più alto)",
      "basso (niedriger: più basso)",
      "veloce",
      "lento",
      "aumentato, elevato"
    ],
    dialogue: [
      "Ho misurato la pressione alla signora Keller: 130 su 80.",
      "E ieri?",
      "Ieri era più bassa, 120 su 80. Oggi il polso è un po' più veloce di ieri, 80 al minuto.",
      "E la temperatura?",
      "37 gradi, come ieri.",
      "Bene. Scrivi tutti i valori nella scheda, per favore.",
      "Lo faccio subito."
    ],
    culture: {
      title: "Uno sguardo tedesco: RR, un nome italiano",
      text: "<p>Nella documentazione tedesca la pressione arteriosa si scrive spesso <i>RR</i>: <i>RR 120/80</i>. Le due lettere sono le iniziali di <i>Riva-Rocci</i>, il medico torinese Scipione Riva-Rocci, che alla fine dell'Ottocento presentò lo sfigmomanometro a bracciale. In Italia si scrive di solito <i>PA</i>, pressione arteriosa; in Germania <i>RR</i> è diventato quasi un sinonimo di <i>Blutdruck</i>, e in consegna si sente <i>Wie war der RR?</i></p><p>Un consiglio pratico: le abbreviazioni cambiano da reparto a reparto. Quando ne incontri una nuova nella <i>Kurve</i>, chiedi che cosa vuol dire invece di indovinare.</p>"
    },
    exercises: [
      {
        q: "Vuoi dire «Oggi il polso è più veloce di ieri». Quale frase è corretta?",
        opts: [
          "Der Puls ist heute schnell als gestern.",
          "Der Puls ist heute schneller als gestern.",
          "Der Puls ist heute mehr schnell als gestern."
        ],
        why: "Il comparativo è una parola sola, <b>schneller</b>, e il secondo termine si introduce con <b>als</b>."
      },
      {
        tr: "Il presente di messen, tutte le persone.",
        why: "<i>Messe, misst, misst, messen, messt, messen</i>: alla seconda e terza persona singolare la <b>e</b> diventa <b>i</b>, e in <i>du misst</i> la desinenza <i>-st</i> si fonde con la <b>ss</b> della radice: niente «missst»."
      },
      {
        q: "Completa: «Am Abend ist die Temperatur ___ als am Morgen.»",
        hint: "comparativo di hoch",
        why: "<b>höher</b>: <i>hoch</i> prende l'Umlaut e perde la <b>c</b>."
      },
      {
        q: "Completa con il comparativo e il superlativo.",
        tr: "Il secondo valore è più basso del primo, ma stamattina la pressione era al livello più alto.",
        why: "<i>niedriger als der erste</i>: comparativo + <i>als</i>. <i>am höchsten</i>: superlativo con il verbo <i>sein</i>."
      },
      {
        q: "Abbina ogni comparativo al suo significato.",
        pairs: ["più alto", "più basso", "più veloce", "più lento"]
      },
      {
        q: "Scegli l'articolo determinativo giusto per ogni nome.",
        items: ["valore", "valore misurato", "unità di misura", "polso", "temperatura", "scheda dei parametri"]
      },
      {
        q: "Metti in ordine le parole.",
        tr: "Oggi il polso è più veloce di ieri.",
        why: "<i>Der Puls ist heute schneller als gestern.</i> Il verbo <i>ist</i> in seconda posizione, il confronto con <i>als</i> alla fine."
      },
      {
        q: "Traduci: «Oggi la temperatura è più alta di ieri.»",
        why: "<i>Heute ist die Temperatur höher als gestern</i> oppure <i>Die Temperatur ist heute höher als gestern</i>. Se cominci con <i>heute</i>, il verbo resta in seconda posizione e il soggetto lo segue."
      },
      {
        q: "Un collega ti chiede i valori della signora Keller.",
        setting: "Hai appena misurato pressione, polso e temperatura.",
        lines: [
          { tr: "Com'era la pressione stamattina?" },
          { tr: "Rispondi: 130 su 80, più alta di ieri.", answerTr: "Era 130 su 80, più alta di ieri." },
          { tr: "E il polso?" },
          { tr: "Rispondi: un po' più veloce di ieri, 80 al minuto.", answerTr: "Un po' più veloce di ieri, 80 al minuto." },
          { tr: "E la temperatura?" },
          { tr: "Rispondi: alta come ieri, 37 gradi.", answerTr: "Alta come ieri, 37 gradi." }
        ]
      },
      {
        tr: "Ieri la pressione era più bassa. Oggi il polso è un po' più veloce, e la temperatura è alta come ieri.",
        why: "In <i>niedriger</i> la <b>ie</b> è una <b>i</b> lunga; in <i>schneller</i> la <b>sch</b> è [ʃ]; in <i>genauso</i> l'accento cade su <b>nau</b>."
      },
      {
        tr: "Oggi il polso è più veloce di ieri.",
        why: "In <i>Puls</i> la <b>u</b> è breve; in <i>heute</i> la <b>eu</b> è [ɔʏ]; in <i>gestern</i> la <b>st</b> in mezzo alla parola si legge [st], non [ʃt]."
      }
    ]
  },
  "lesson:pfl-u02-l3": {
    theme: "Due registri",
    title: "Febbre, polso e glicemia",
    objectives: [
      "riconoscere i termini tecnici dei parametri vitali con i prefissi greci iper-, ipo-, tachi-, bradi-",
      "tradurre ogni termine tecnico nella parola che usa il paziente",
      "capire come sono costruiti i composti del paziente: Blutzucker, Unterzuckerung, Herzrasen",
      "riferire al medico un valore più basso o più alto del precedente"
    ],
    theory: [
      {
        h: "I prefissi greci dei parametri",
        p: "La Fachsprache dei parametri vitali si costruisce con pochi pezzi greci: <em>Hyper-</em> (sopra) e <em>Hypo-</em> (sotto), <em>Tachy-</em> (veloce) e <em>Brady-</em> (lento), più la parte che dice di che cosa si parla: <em>-kardie</em> il cuore, <em>-tonie</em> la pressione, <em>-glykämie</em> lo zucchero nel sangue. Così <em>Tachykardie</em>, <em>Bradykardie</em>, <em>Hypotonie</em>, <em>Hypoglykämie</em>, <em>Hyperglykämie</em>. In tedesco si scrivono con <b>y</b>, <b>k</b> e <b>ä</b>: <em>Tachykardie</em>, non «Tachicardia»."
      },
      {
        h: "Le parole del paziente",
        p: "La Laiensprache usa composti e parole derivate. <em>Blut + Zucker</em> = <em>der Blutzucker</em>; <em>Sauerstoff + Sättigung</em> = <em>die Sauerstoffsättigung</em>; <em>unter + Zucker + -ung</em> = <em>die Unterzuckerung</em>, femminile per via di <em>-ung</em>. <em>Das Herzrasen</em> è un infinito usato come nome (<em>rasen</em>, correre all'impazzata), e per questo è neutro. Alcune parole del paziente non sono composti ma aggettivo e nome: <em>der langsame Puls</em>, <em>der niedrige Blutdruck</em>, <em>der hohe Blutzucker</em>. E con i valori torna il comparativo: <em>niedriger als heute Morgen</em>."
      },
      {
        contrast: "Per chi parla italiano i termini tecnici sono trasparenti: <em>Tachykardie</em> è tachicardia, <em>Hypoglykämie</em> ipoglicemia. La parola che manca è quella del paziente: <em>Herzrasen</em>, <em>Unterzuckerung</em>, <em>der niedrige Blutdruck</em>. Anche l'abitudine è diversa: in Italia molti pazienti diabetici dicono «la glicemia» ogni giorno, mentre il paziente tedesco dice <em>der Zucker</em> o <em>der Blutzucker</em>, e per l'ipoglicemia <em>Ich bin unterzuckert</em> o <em>Ich habe Unterzucker</em>. <em>Hypoglykämie</em>, per lui, è spesso una parola che non sente sua."
      },
      {
        trap: "<em>Hypotonie</em> in reparto è la pressione bassa, cioè l'<b>ipotensione</b>, non l'ipotonia muscolare dell'italiano: il tedesco usa <em>-tonie</em> dove l'italiano usa «-tensione», e lo stesso vale per <em>Hypertonie</em>. <em>Hyperthermie</em> non è un sinonimo elegante di febbre: nella lingua medica tedesca indica un surriscaldamento del corpo, per esempio dopo un colpo di calore, mentre la febbre si chiama <em>Fieber</em> anche in documentazione (<em>febril</em>, «febbrile»). E <em>Herzrasen</em> non è <em>Herzklopfen</em>: il primo è il cuore che corre, il secondo il battito che si sente forte, le palpitazioni."
      },
      {
        tip: "Se il paziente dice <em>Ich habe Unterzucker</em> o <em>Mir ist so zittrig</em>, misura e riferisci subito: <em>Ich messe kurz Ihren Blutzucker</em>, poi al medico il valore con il confronto. Che cosa fare dopo lo decide il medico, o lo standard scritto del reparto."
      }
    ],
    grammar: {
      title: "Parametri vitali: Fachsprache e Laiensprache",
      note: "Con medici e in documentazione la colonna <b>Fachsprache</b>; con pazienti e familiari la colonna <b>Laiensprache</b>. I composti prendono l'articolo dell'<b>ultimo elemento</b>; un infinito usato come nome è <b>neutro</b>.",
      table: {
        head: ["Fachsprache", "Laiensprache", "italiano"],
        rows: [
          ["die Tachykardie", "das Herzrasen", "tachicardia"],
          ["die Bradykardie", "der langsame Puls", "bradicardia"],
          ["die Hypotonie", "der niedrige Blutdruck", "ipotensione"],
          ["die Hyperthermie; das Fieber", "das Fieber", "ipertermia; febbre"],
          ["die Hypoglykämie", "die Unterzuckerung", "ipoglicemia"],
          ["die Hyperglykämie", "der hohe Blutzucker", "iperglicemia"],
          ["die Sauerstoffsättigung", "der Sauerstoffwert", "saturazione di ossigeno"]
        ]
      },
      examples: [
        { tr: "La paziente ha una tachicardia.", note: "Fachsprache: al medico o in documentazione" },
        { tr: "Le capita di avere il batticuore?", note: "la stessa cosa detta al paziente" },
        { tr: "Il paziente stanotte ha avuto un'ipoglicemia.", note: "formula da consegna" },
        { tr: "Con un'ipoglicemia la glicemia è troppo bassa.", note: "unter + Zucker + -ung: femminile" },
        { tr: "La saturazione di ossigeno è più bassa di stamattina.", note: "comparativo per riferire un cambiamento" },
        { tr: "Dai 38 gradi in su di solito si parla di febbre.", note: "soglia didattica: decide lo standard della struttura" }
      ]
    },
    vocab: [
      "i parametri vitali",
      "la febbre",
      "l'ipertermia (termine tecnico, non è la febbre)",
      "la tachicardia (termine tecnico)",
      "la tachicardia, il batticuore (parola per il paziente)",
      "la bradicardia (termine tecnico)",
      "l'ipotensione (termine tecnico)",
      "la glicemia, lo zucchero nel sangue",
      "l'ipoglicemia (termine tecnico)",
      "l'ipoglicemia (parola per il paziente)",
      "l'iperglicemia (termine tecnico)",
      "la saturazione di ossigeno"
    ],
    dialogue: [
      "Signor Lang, Le misuro velocemente la glicemia. È una piccola puntura sul dito.",
      "Tremo un po', e sudo.",
      "Il valore è più basso di stamattina. Avviso subito il medico.",
      "Dottor Weber, il signor Lang trema e suda. La glicemia è a 60, sospetto un'ipoglicemia.",
      "Grazie. Arrivo subito.",
      "Infermiera, che cos'è una «Hypoglykämie»?",
      "È quando lo zucchero è troppo basso. La Sua glicemia è troppo bassa. Il medico arriva subito."
    ],
    culture: {
      title: "Uno sguardo tedesco: mg/dl o mmol/l",
      text: "<p>In Germania la glicemia si misura in due unità: <i>mg/dl</i> (milligrammi per decilitro) e <i>mmol/l</i> (millimoli per litro). Quale si usa dipende dalla struttura e dal glucometro; 1 mmol/l corrisponde a circa 18 mg/dl. Un 60 e un 3,3 possono quindi indicare lo stesso valore, e per questo in consegna e al telefono l'unità va sempre detta.</p><p>Il 60 del dialogo è in mg/dl ed è un numero tondo a scopo didattico. Che cosa conta come troppo basso o troppo alto, e che cosa si fa dopo, lo stabiliscono il medico e lo standard scritto del reparto; l'infermiera misura, riferisce e documenta.</p>"
    },
    exercises: [
      {
        q: "Abbina ogni termine tecnico alla parola che usa il paziente.",
        pairs: ["das Herzrasen", "der langsame Puls", "der niedrige Blutdruck", "die Unterzuckerung", "der hohe Blutzucker"]
      },
      {
        q: "Parli con il paziente e vuoi sapere se ha la tachicardia. Quale frase è adatta?",
        opts: [
          "Haben Sie eine Tachykardie?",
          "Haben Sie Herzrasen?",
          "Besteht bei Ihnen eine Tachykardie?"
        ],
        why: "Con il paziente si usa la Laiensprache: <b>Herzrasen</b>. Le altre due sono corrette, ma sono frasi da medico o da documentazione."
      },
      {
        q: "Quali parole sono adatte al paziente?",
        opts: ["die Unterzuckerung", "die Hypoglykämie", "das Herzrasen", "die Tachykardie", "der niedrige Blutdruck", "die Hypotonie"],
        why: "<i>Unterzuckerung</i>, <i>Herzrasen</i> e <i>niedriger Blutdruck</i> sono parole tedesche comuni. <i>Hypoglykämie</i>, <i>Tachykardie</i> e <i>Hypotonie</i> sono termini tecnici."
      },
      {
        q: "Il medico ha scritto «Hypoglykämie». Completa per il paziente: «Sie hatten eine ___.»",
        hint: "unter + Zucker + -ung",
        why: "<b>Unterzuckerung</b>, femminile per via del suffisso <i>-ung</i>: per questo <i>eine</i>."
      },
      {
        q: "Scegli l'articolo: nei composti decide l'ultimo elemento.",
        items: ["febbre", "batticuore (Rasen)", "glicemia (Zucker)", "ipoglicemia (-ung)", "saturazione di ossigeno (Sättigung)", "tachicardia (termine tecnico)"]
      },
      {
        q: "Completa: al medico, prima il confronto, poi il termine tecnico.",
        tr: "La glicemia è più bassa di stamattina, sospetto un'ipoglicemia.",
        why: "<i>niedriger als heute Morgen</i>: comparativo + <i>als</i>. Al medico il termine tecnico, <i>Hypoglykämie</i>; al paziente diresti <i>Unterzuckerung</i>."
      },
      {
        q: "Metti in ordine le parole.",
        tr: "Dai 38 gradi in su di solito si parla di febbre.",
        why: "<i>Ab 38 Grad spricht man meistens von Fieber.</i> <i>Ab 38 Grad</i> in testa, il verbo <i>spricht</i> in seconda posizione. Il 38 è una soglia didattica: in reparto vale lo standard della struttura."
      },
      {
        q: "Traduci per il paziente, con la parola tedesca di tutti i giorni: «Ha la tachicardia?»",
        why: "<i>Haben Sie Herzrasen?</i> Senza articolo, come <i>Haben Sie Fieber?</i> Al paziente non si dice <i>Tachykardie</i>."
      },
      {
        q: "Il medico ha scritto «Hypotonie». Completa per il paziente: «Ihr Blutdruck ist zu ___.»",
        hint: "il contrario di hoch",
        why: "<b>niedrig</b>: <i>Hypotonie</i> è la pressione bassa, l'ipotensione. Attenzione: non è l'ipotonia muscolare."
      },
      {
        tr: "La paziente ha una tachicardia. A lei dico semplicemente: Lei ha il batticuore.",
        why: "In <i>Tachykardie</i> l'accento cade sulla <b>die</b> finale, la <b>ch</b> si legge [x] e la <b>y</b> come una <b>ü</b>; in <i>Herzrasen</i> la <b>z</b> è [ts] e la <b>s</b> fra due vocali è sonora [z]."
      },
      {
        tr: "Le misuro velocemente la glicemia.",
        why: "In <i>Blutzucker</i> la <b>u</b> di <i>Blut</i> è lunga e quella di <i>Zucker</i> breve, e la <b>z</b> è [ts]; in <i>kurz</i> la <b>r</b> si sente appena."
      }
    ]
  },
  "lesson:pfl-u02-l4": {
    theme: "Riferire",
    title: "Segnalare un valore alterato",
    objectives: [
      "usare il passivo con werden per descrivere le procedure del reparto",
      "formare il participio dei verbi in -ieren e dei verbi con prefisso inseparabile senza ge-",
      "riferire al telefono un valore alterato al medico o alla coordinatrice, con il confronto e lo stato del paziente",
      "ripetere e documentare quello che il medico dispone, senza decidere da soli"
    ],
    theory: [
      {
        h: "Il passivo delle procedure",
        p: "Quando conta che cosa si fa e non chi lo fa, si usa il <strong>passivo con werden</strong>: <em>werden</em> coniugato in seconda posizione, il participio in fondo. <em>Der Blutdruck wird zweimal am Tag gemessen. Alle Werte werden in der Kurve dokumentiert. Ein auffälliger Wert wird sofort gemeldet.</em> L'oggetto della frase attiva diventa il soggetto: <em>Ich melde den Wert</em> → <em>Der Wert wird gemeldet</em>. Chi agisce si aggiunge solo se serve, con <em>von</em> + dativo."
      },
      {
        h: "Participi senza ge-",
        p: "Molti verbi del reparto <strong>non prendono ge-</strong>. I verbi in <em>-ieren</em>: <em>dokumentiert</em>, <em>kontrolliert</em>, <em>informiert</em>. I verbi con prefisso inseparabile (<em>be-, ver-, über-</em> inseparabile): <em>überwacht</em>, <em>überprüft</em>, <em>benachrichtigt</em>. I separabili invece mettono il <em>ge-</em> in mezzo: <em>nachmessen</em> → <em>nachgemessen</em>, <em>eintragen</em> → <em>eingetragen</em>. <em>Gedokumentiert</em> e <em>geüberwacht</em> non esistono."
      },
      {
        contrast: "Il passivo con <em>werden</em> corrisponde bene al passivo italiano con «venire»: «il valore viene segnalato» = <em>der Wert wird gemeldet</em>. Il rischio è il passivo con «essere»: «il valore è misurato» in tedesco diventa <em>der Wert ist gemessen</em>, che descrive uno stato, cioè «è già stato misurato». Per la procedura serve <em>wird</em>. In documentazione il tedesco usa poi aggettivi tecnici che l'italiano riconosce: <em>Die Patientin ist hypoton und tachykard</em>, «ipotesa e tachicardica». Vanno bene con il medico e nella <em>Kurve</em>; con il paziente si torna alla Laiensprache."
      },
      {
        trap: "<em>Melden</em> vuol dire segnalare, riferire a chi deve saperlo; <em>sich melden</em> invece è «farsi sentire» o «rispondere» (<em>Ich melde mich später</em>). <em>Kontrollieren</em> è verificare, ricontrollare un valore; tenere un paziente sotto controllo nel tempo è <em>überwachen</em>. Attenzione ai casi: <em>Ich informiere den Arzt</em> vuole l'accusativo, ma <em>Ich sage dem Arzt Bescheid</em> vuole il dativo. E <em>die Stationsleitung</em> è la coordinatrice infermieristica del reparto, non «la direzione della stazione»."
      },
      {
        tip: "Al telefono segui sempre lo stesso ordine: chi sei e da quale reparto, quale paziente e quale stanza, il valore con il confronto, come sta il paziente, che cosa hai già fatto (<em>Ich habe zweimal gemessen</em>). Poi ripeti quello che il medico dispone e scrivilo nella <em>Kurve</em>. Quali valori vanno segnalati lo dice lo standard della struttura; il compito dell'infermiera è riferirli, non correggerli da sola."
      }
    ],
    grammar: {
      title: "Il passivo con werden",
      note: "<b>werden</b> coniugato in seconda posizione, <b>participio in fondo</b>. Niente <b>ge-</b> nei verbi in <b>-ieren</b> e con prefisso inseparabile.",
      table: {
        head: ["attivo", "passivo", "nota"],
        rows: [
          ["Wir messen den Blutdruck.", "Der Blutdruck wird gemessen.", "messen → gemessen"],
          ["Ich dokumentiere die Werte.", "Die Werte werden dokumentiert.", "-ieren: niente ge-"],
          ["Wir überwachen den Patienten.", "Der Patient wird überwacht.", "über- inseparabile: niente ge-"],
          ["Ich melde den Wert.", "Der Wert wird gemeldet.", "l'oggetto diventa soggetto"]
        ]
      },
      examples: [
        { tr: "La pressione viene misurata due volte al giorno.", note: "wird + participio in fondo" },
        { tr: "Tutti i valori vengono documentati nella scheda.", note: "plurale: werden; dokumentiert senza ge-" },
        { tr: "Un valore alterato viene segnalato subito.", note: "la regola di reparto, in passivo" },
        { tr: "La dottoressa viene informata.", note: "informiert: verbo in -ieren" },
        { tr: "Dopo dieci minuti il valore viene ricontrollato.", note: "noch einmal: «di nuovo»" },
        { tr: "Il paziente viene monitorato da vicino.", note: "überwacht: prefisso inseparabile" }
      ]
    },
    vocab: [
      "alterato, anomalo, che salta all'occhio",
      "segnalare, riferire",
      "documentare",
      "controllare, verificare",
      "informare (con l'accusativo)",
      "monitorare, sorvegliare",
      "la coordinatrice infermieristica, il coordinatore del reparto",
      "il medico di reparto",
      "la frequenza respiratoria",
      "l'intervallo di normalità",
      "il valore soglia",
      "lo scostamento, la deviazione"
    ],
    dialogue: [
      "Dottor Weber, sono Elena Marin del reparto 3. La chiamo per la signora Keller, stanza 12.",
      "Sì, che cosa c'è?",
      "La pressione è a 90 su 60. Stamattina era 130 su 80. Il polso è a 110.",
      "Come sta?",
      "Le gira la testa, per il resto è sveglia e orientata. Ho misurato due volte.",
      "Bene, arrivo subito. Per favore, controlli la pressione ogni quindici minuti.",
      "D'accordo. I valori vengono documentati nella scheda."
    ],
    culture: {
      title: "Uno sguardo tedesco: chi decide e chi riferisce",
      text: "<p>In un reparto tedesco le misure terapeutiche partono da una <i>ärztliche Anordnung</i>, la disposizione del medico, oppure da uno standard scritto che la struttura ha approvato. Quando un valore esce dai limiti fissati, l'infermiera lo segnala al medico di reparto o, di notte, al medico di guardia, e informa la <i>Stationsleitung</i> o chi coordina il turno.</p><p>In alcune cliniche si usano punteggi di allerta precoce, che sommano più parametri e dicono a partire da quando chiamare il medico. Le soglie cambiano da struttura a struttura: i numeri di questa unità sono tondi e servono solo a esercitare la lingua.</p>"
    },
    exercises: [
      {
        q: "Vuoi scrivere «Ogni valore viene documentato». Quale frase è corretta?",
        opts: [
          "Jeder Wert wird dokumentiert.",
          "Jeder Wert ist dokumentiert worden wird.",
          "Jeder Wert wird gedokumentiert."
        ],
        why: "Passivo con <b>wird</b> + participio in fondo. I verbi in <b>-ieren</b> non prendono <i>ge-</i>: <i>dokumentiert</i>."
      },
      {
        q: "Quali frasi al passivo sono corrette?",
        opts: [
          "Der Blutdruck wird zweimal am Tag gemessen.",
          "Der Blutdruck wird zweimal am Tag gemesst.",
          "Die Ärztin wird sofort informiert.",
          "Die Ärztin wird sofort geinformiert.",
          "Ein auffälliger Wert wird gemeldet."
        ],
        why: "<i>messen</i> ha il participio forte <i>gemessen</i>; <i>informieren</i> finisce in <i>-ieren</i> e non prende <i>ge-</i>; <i>melden</i> fa <i>gemeldet</i>."
      },
      {
        q: "Completa: «Ein auffälliger Wert wird sofort ___.»",
        hint: "participio di melden",
        why: "<b>gemeldet</b>: verbo regolare, <i>ge-</i> + radice + <i>-et</i>, in fondo alla frase."
      },
      {
        q: "Completa la frase al passivo.",
        tr: "La frequenza respiratoria viene controllata ogni ora.",
        why: "<i>Die Atemfrequenz wird jede Stunde kontrolliert</i>: <i>wird</i> in seconda posizione, il participio in fondo. Va bene anche <i>überprüft</i>: <i>über-</i> qui è inseparabile, quindi niente <i>ge-</i>."
      },
      {
        q: "Metti in ordine le parole.",
        tr: "La coordinatrice viene informata subito.",
        why: "<i>Die Stationsleitung wird sofort informiert.</i> <i>Wird</i> in seconda posizione, il participio <i>informiert</i>, senza <i>ge-</i>, in fondo."
      },
      {
        q: "Traduci: «Dopo dieci minuti il valore viene ricontrollato.»",
        why: "<i>Der Wert wird nach zehn Minuten noch einmal kontrolliert</i>. «Ri-» si rende con <i>noch einmal</i> o <i>erneut</i> e non va perso; vanno bene anche <i>noch einmal gemessen</i> e l'ordine con <i>Nach zehn Minuten</i> in testa."
      },
      {
        q: "Abbina ogni aggettivo della documentazione al suo significato.",
        pairs: ["con il polso veloce (tachicardico)", "con il polso lento (bradicardico)", "con la pressione bassa (ipoteso)", "con la febbre (febbrile)"]
      },
      {
        q: "Scegli l'articolo determinativo giusto per ogni nome.",
        items: ["coordinatrice infermieristica", "medico di reparto", "frequenza respiratoria", "intervallo di normalità", "valore soglia", "scostamento"]
      },
      {
        q: "Telefoni al medico per un valore alterato.",
        setting: "Hai misurato due volte la pressione della signora Keller: è molto più bassa di stamattina.",
        lines: [
          { tr: "Weber, medicina interna. Che cosa c'è?" },
          { tr: "Presentati e di' per quale paziente chiami.", answerTr: "Sono Elena Marin del reparto 3. La chiamo per la signora Keller." },
          { tr: "Che cosa succede?" },
          { tr: "Riferisci che la pressione è più bassa di stamattina: 90 su 60.", answerTr: "La pressione è più bassa di stamattina: 90 su 60." },
          { tr: "Bene, arrivo. Per favore, controlli la pressione ogni quindici minuti." },
          { tr: "Conferma e di' che i valori vengono documentati nella scheda.", answerTr: "D'accordo. I valori vengono documentati nella scheda." }
        ]
      },
      {
        tr: "La pressione della signora Keller è più bassa di stamattina. Il valore viene segnalato subito al medico di reparto.",
        why: "In <i>Stationsarzt</i> la <b>st</b> iniziale è [ʃt] e la <b>ti</b> di <i>Station</i> si legge [tsi]; in <i>gemeldet</i> la <b>d</b> finale suona [t]."
      },
      {
        tr: "Un valore alterato viene segnalato subito.",
        why: "In <i>auffälliger</i> la <b>au</b> è [aʊ] e la <b>ä</b> è breve; in <i>sofort</i> l'accento cade sulla seconda sillaba, <b>fort</b>; in <i>wird</i> la <b>w</b> si legge [v]."
      }
    ]
  },
  "lesson:pfl-u02-test": {
    theme: "Verifica",
    title: "Test: Parametri vitali e valori misurati",
    objectives: [
      "verificare l'imperativo con Sie e i verbi separabili, il comparativo dei valori, il passivo con werden e le coppie Fachsprache / Laiensprache"
    ],
    theory: [
      {
        p: "Undici domande sull'intera unità. Si supera con il 70%. I valori sono numeri tondi a scopo didattico: in reparto valgono le soglie e il protocollo della struttura, e un valore alterato si segnala sempre al medico."
      }
    ],
    exercises: [
      {
        q: "Vuoi chiedere al paziente di sdraiarsi. Quale frase è corretta?",
        opts: ["Legen Sie sich bitte hin.", "Hinlegen Sie sich bitte.", "Legen Sie bitte hin."],
        why: "Imperativo con <b>Sie</b>, il riflessivo <b>sich</b> e il prefisso <b>hin</b> in fondo. La terza frase perde <i>sich</i>."
      },
      {
        q: "Completa: «Atmen Sie bitte tief ___.»",
        hint: "prefisso di einatmen",
        why: "<b>ein</b>: <i>einatmen</i> è separabile, quindi all'imperativo il prefisso va in fondo."
      },
      {
        q: "Completa: «Heute ist der Puls ___ als gestern.»",
        hint: "comparativo di langsam",
        why: "<b>langsamer</b>: <i>langsam</i> non prende l'Umlaut, basta <i>-er</i>."
      },
      {
        tr: "Il presente di anlegen, tutte le persone.",
        why: "<i>Lege an, legst an, legt an, legen an, legt an, legen an</i>: verbo regolare e separabile, con <i>an</i> sempre in fondo."
      },
      {
        q: "Abbina ogni termine tecnico alla parola che usa il paziente.",
        pairs: ["das Herzrasen", "der niedrige Blutdruck", "die Unterzuckerung", "der hohe Blutzucker"]
      },
      {
        q: "Quali frasi al passivo sono corrette?",
        opts: [
          "Der Wert wird dokumentiert.",
          "Der Wert wird gedokumentiert.",
          "Die Ärztin wird informiert.",
          "Der Puls wird gemesst.",
          "Die Sättigung wird am Finger gemessen."
        ],
        why: "<i>dokumentiert</i> e <i>informiert</i> sono verbi in <i>-ieren</i>, senza <i>ge-</i>; il participio di <i>messen</i> è <i>gemessen</i>."
      },
      {
        q: "Completa con il comparativo e il passivo.",
        tr: "La glicemia è più bassa di stamattina. Il valore viene segnalato subito.",
        why: "<i>niedriger als heute Morgen</i>, poi il passivo: <i>Der Wert wird sofort gemeldet</i>."
      },
      {
        q: "Metti in ordine le parole.",
        tr: "Scopra il braccio, per favore.",
        why: "<i>Machen Sie bitte den Oberarm frei.</i> Imperativo in testa, <i>Sie</i> subito dopo, il prefisso <i>frei</i> alla fine."
      },
      {
        q: "Scegli l'articolo determinativo giusto per ogni nome.",
        items: ["bracciale", "polso", "febbre", "ipoglicemia (parola del paziente)", "frequenza respiratoria", "valore soglia"]
      },
      {
        tr: "Adesso Le misuro la pressione. Per favore, non parli durante la misurazione.",
        why: "In <i>Blutdruck</i> la <b>u</b> di <i>Blut</i> è lunga e quella di <i>Druck</i> breve; in <i>jetzt</i> la <b>j</b> è [j]; in <i>während</i> la <b>h</b> non si legge."
      },
      {
        tr: "La pressione è più bassa di stamattina.",
        why: "In <i>niedriger</i> la <b>ie</b> è una <b>i</b> lunga; in <i>Morgen</i> la <b>r</b> dopo la vocale si sente appena; in <i>heute</i> la <b>eu</b> è [ɔʏ]."
      }
    ]
  }
});
