/* ============================================================
   Learner-language text (it) for data/core/b1-01.js, unit b1-u01.
   Keys point at ids in the neutral layer; arrays merge by index,
   so their length has to match core.
   Checked by scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("it", {
  "unit:b1-u01": {
    title: "Se fossi in te",
    grammarNote: "Konjunktiv II al presente (wäre, hätte, würde + infinito, modali) · periodo ipotetico reale e irreale · Ich finde, dass ... e Meiner Meinung nach ... · obwohl e trotzdem"
  },
  "lesson:b1-u01-l1": {
    theme: "Desideri e consigli",
    title: "Sarei, avrei, farei",
    objectives: [
      "esprimere un desiderio o un'ipotesi con wäre e hätte",
      "usare würde + infinito, che con la maggior parte dei verbi sostituisce la forma propria",
      "dare un consiglio con An deiner Stelle würde ich ...",
      "fare proposte e richieste con könnte"
    ],
    theory: [
      {
        h: "Il Konjunktiv II di sein e haben",
        p: "Il <strong>Konjunktiv II</strong> serve per desideri, ipotesi, richieste e consigli. Per <em>sein</em> e <em>haben</em> parte dal Präteritum (<em>war, hatte</em>), prende l'<strong>Umlaut</strong> e le desinenze <em>-e, -st, -e, -en, -t, -en</em> (per <em>haben</em>: <em>-e, -est, -e, -en, -et, -en</em>): <em>ich wäre, du wärst, wir wären</em> e <em>ich hätte, du hättest, wir hätten</em>. <em>Ich wäre gern Ärztin</em> (mi piacerebbe essere medico), <em>Wir hätten gern mehr Zeit</em> (vorremmo avere più tempo). Non è un tempo del passato: parla di ciò che è desiderato, immaginato o possibile ora o più avanti."
      },
      {
        h: "würde + infinito",
        p: "Con quasi tutti gli altri verbi si usa <strong>würde</strong> + <strong>infinito in fondo</strong>: <em>Ich würde gern im Ausland arbeiten. Wir würden gern am Meer wohnen.</em> <em>Würde</em> si coniuga così: <em>ich würde, du würdest, er würde, wir würden, ihr würdet, sie würden</em>. Anche alcuni modali hanno la forma propria: <em>ich könnte</em> (potrei), <em>ich müsste</em> (dovrei). Un consiglio si dà spesso così: <em>An deiner Stelle würde ich umziehen</em> (al posto tuo mi trasferirei)."
      },
      {
        contrast: "L'italiano ha un <em>condizionale</em> con una forma propria per ogni verbo: <em>sarei, avrei, andrei, farei</em>. Anche il tedesco ha una forma propria per ogni verbo, ma nell'uso quotidiano la si sente soprattutto con pochi verbi molto frequenti (<em>wäre, hätte, könnte, müsste</em>): negli altri spesso coincide con il Präteritum o suona antiquata, e al suo posto si usa <em>würde</em> + infinito: <em>andrei</em> è <em>würde gehen</em>, <em>farei</em> è <em>würde machen</em>. Inoltre il Konjunktiv II è un modo, non un tempo: <em>Ich wäre</em> corrisponde a <em>sarei</em> e riguarda il presente o il futuro."
      },
      {
        trap: "Non confondere <em>würde</em> con <em>wurde</em>: <em>wurde</em> (senza Umlaut) è il Präteritum di <em>werden</em> («diventò»), <em>würde</em> (con Umlaut) è il condizionale. Una sola lettera cambia il significato, e si sente anche: la <em>ü</em> è arrotondata. Con <em>sein</em> e <em>haben</em> di solito si preferiscono <em>wäre</em> e <em>hätte</em> a «würde sein» e «würde haben»: <em>Das wäre schön</em> è la forma che si sente di più; «Das würde schön sein» è corretto ma più pesante."
      },
      {
        tip: "Per dare un consiglio educato usa <em>An deiner Stelle würde ich ...</em> invece di un imperativo: suona più morbido. E per un desiderio: <em>Ich hätte gern</em> + complemento oggetto (<em>Ich hätte gern mehr Zeit</em>), <em>Ich wäre gern</em> + aggettivo o nome di ruolo (<em>Ich wäre gern glücklich, Ich wäre gern Pilot</em>)."
      }
    ],
    grammar: {
      title: "Konjunktiv II: wäre, hätte, würde",
      note: "<b>wäre</b> e <b>hätte</b> per sein e haben, <b>könnte</b> e <b>müsste</b> per i modali, <b>würde</b> + infinito in fondo per quasi tutti gli altri verbi.",
      table: {
        head: ["verbo", "ich", "du", "wir"],
        rows: [
          ["sein", "wäre", "wärst", "wären"],
          ["haben", "hätte", "hättest", "hätten"],
          ["werden (würde + infinito)", "würde", "würdest", "würden"],
          ["können", "könnte", "könntest", "könnten"]
        ]
      },
      examples: [
        { tr: "Mi piacerebbe essere medico.", note: "wäre + gern: un desiderio" },
        { tr: "Vorremmo avere più tempo.", note: "hätte + gern: un desiderio" },
        { tr: "Al posto tuo mi trasferirei.", note: "An deiner Stelle: würde + infinito in fondo" },
        { tr: "Potrei aiutarti domani.", note: "könnte: forma propria del modale" },
        { tr: "Sarebbe una buona idea.", note: "wäre al posto di «würde sein»" },
        { tr: "Mi piacerebbe lavorare all'estero.", note: "würde + gern + infinito in fondo" }
      ]
    },
    vocab: [
      "il desiderio",
      "il consiglio",
      "l'idea",
      "l'estero (im Ausland: all'estero)",
      "il lavoro dei sogni",
      "il viaggio",
      "il mare",
      "la libertà",
      "desiderare (sich etwas wünschen: desiderare per sé)",
      "sognare",
      "proporre",
      "possibile"
    ],
    exercises: [
      {
        tr: "Il Konjunktiv II di sein, tutte le persone.",
        why: "<i>Wäre, wärst, wäre, wären, wärt, wären</i>: dal Präteritum <i>war</i> con l'Umlaut e le desinenze del Konjunktiv II. La prima e la terza persona singolare sono uguali."
      },
      {
        tr: "Il Konjunktiv II di haben, tutte le persone.",
        why: "<i>Hätte, hättest, hätte, hätten, hättet, hätten</i>: dal Präteritum <i>hatte</i> con l'Umlaut."
      },
      {
        tr: "Il Konjunktiv II di werden, tutte le persone (la forma che si usa come ausiliare).",
        why: "<i>Würde, würdest, würde, würden, würdet, würden</i>: è l'ausiliare del condizionale, seguito dall'infinito in fondo."
      },
      {
        q: "Come dici «Mi piacerebbe essere medico»?",
        opts: [
          "Ich wäre gern Arzt.",
          "Ich war gern Arzt.",
          "Ich werde gern Arzt."
        ],
        why: "Il desiderio vuole il Konjunktiv II: <b>wäre</b>. <i>War</i> è il Präteritum (ero), <i>werde</i> è un futuro o un «diventare»."
      },
      {
        q: "Quale frase significa «Al posto tuo mi trasferirei»?",
        opts: [
          "An deiner Stelle würde ich umziehen.",
          "An deiner Stelle werde ich umziehen.",
          "An deiner Stelle wurde ich umziehen."
        ],
        why: "<b>würde</b> (con Umlaut) è il condizionale. <i>Werde</i> è il futuro («mi trasferirò»), <i>wurde</i> è il Präteritum di <i>werden</i>, senza il significato giusto."
      },
      {
        q: "Completa con il Konjunktiv II di haben: «Ich ___ gern ein Haus am Meer.» (vorrei avere)",
        hint: "Konjunktiv II di haben, ich",
        why: "<b>Hätte</b>: <i>Ich hätte gern ein Haus am Meer</i> esprime un desiderio, con l'Umlaut sulla <i>ä</i>."
      },
      {
        q: "Completa con il Konjunktiv II di sein: «Das ___ eine gute Idee.» (sarebbe)",
        hint: "Konjunktiv II di sein",
        why: "<b>Wäre</b>: con <i>sein</i> si preferisce la forma propria a «würde sein»."
      },
      {
        q: "Completa la frase (nel primo spazio usa würde).",
        tr: "Mi piacerebbe lavorare all'estero.",
        why: "<i>Ich würde gern im Ausland arbeiten</i>: <i>würde</i> in seconda posizione, l'infinito <i>arbeiten</i> in fondo."
      },
      {
        q: "Traduci: «Al posto tuo andrei dal medico.» (usa würde)",
        why: "<i>An deiner Stelle würde ich zum Arzt gehen</i>: <i>würde</i> in seconda posizione, <i>gehen</i> in fondo. Si può anche dire <i>Ich würde an deiner Stelle zum Arzt gehen</i>."
      },
      {
        tr: "Mi piacerebbe fare il pilota e lavorare all'estero. Sarebbe il mio lavoro dei sogni.",
        why: "In <i>würde</i> la <b>ü</b> è arrotondata (la bocca fa una <i>u</i>, la lingua una <i>i</i>); in <i>Ausland</i> la <b>au</b> si legge [aʊ]; in <i>Traumberuf</i> la <b>au</b> è lo stesso dittongo."
      },
      {
        tr: "Al posto tuo farei un viaggio. Sarebbe una buona idea.",
        why: "In <i>Reise</i> la <b>ei</b> si legge [aɪ]; in <i>wäre</i> la <b>w</b> si legge [v]; <i>Stelle</i> comincia con <b>st</b> = [ʃt]."
      }
    ]
  },
  "lesson:b1-u01-l2": {
    theme: "Se potessi ...",
    title: "Se avessi tempo, ...",
    objectives: [
      "formulare un'ipotesi irreale al presente con wenn + Konjunktiv II",
      "distinguere un'ipotesi reale (wenn + presente) da una irreale",
      "mettere il verbo in fondo nella frase con wenn e in prima posizione nella principale che segue",
      "dare un consiglio con Wenn ich du wäre, ..."
    ],
    theory: [
      {
        h: "Ipotesi reale e ipotesi irreale",
        p: "Con <strong>wenn</strong> si dice «se». Se la condizione è <strong>possibile</strong> o abituale, il tedesco usa il <strong>presente</strong> in entrambe le frasi: <em>Wenn es morgen regnet, bleiben wir zu Hause. Wenn du Hunger hast, kannst du etwas essen.</em> Se la condizione è <strong>irreale</strong> o improbabile (non è vera ora, o è un'ipotesi che si immagina), si usa il <strong>Konjunktiv II</strong>: <em>Wenn ich Zeit hätte, würde ich mehr reisen. Wenn ich reich wäre, würde ich ein Haus kaufen.</em>"
      },
      {
        h: "Dove sta il verbo",
        p: "Dopo <em>wenn</em> il verbo coniugato va <strong>in fondo</strong> alla subordinata, e la virgola la separa dalla principale. Se la frase con <em>wenn</em> viene prima, la principale <strong>comincia con il verbo</strong>: <em>Wenn ich Zeit hätte, würde ich mehr reisen.</em> Se viene dopo, l'ordine della principale non cambia: <em>Ich würde mehr reisen, wenn ich Zeit hätte.</em> Le due costruzioni possono stare in tutte e due le frasi: <em>Wenn ich weniger arbeiten würde, hätte ich mehr Zeit</em> è corretto quanto <em>Wenn ich Zeit hätte, würde ich mehr reisen</em>. Con <em>sein</em>, <em>haben</em> e i modali si preferisce in genere la forma propria (<em>wäre, hätte, könnte</em>), con gli altri verbi spesso <em>würde</em> + infinito."
      },
      {
        h: "Wenn ich du wäre, ...",
        p: "La formula <strong>Wenn ich du wäre, würde ich ...</strong> corrisponde al «se fossi in te» italiano e serve per dare un consiglio: <em>Wenn ich du wäre, würde ich ihn anrufen.</em> È la forma più lunga di <em>An deiner Stelle würde ich ...</em> vista nella lezione precedente."
      },
      {
        contrast: "In italiano l'ipotesi irreale ha un congiuntivo imperfetto nella frase con <em>se</em> e un condizionale nella principale: <em>Se avessi tempo, viaggerei di più</em>. In tedesco la stessa forma, il Konjunktiv II, compare in entrambe le frasi: <em>wenn ich Zeit hätte</em> e <em>würde ich reisen</em>. L'ipotesi reale invece funziona come in italiano con il presente: <em>Se piove domani, restiamo a casa</em> / <em>Wenn es morgen regnet, bleiben wir zu Hause</em>."
      },
      {
        trap: "Non si scrive «Wenn ich hätte Zeit»: dopo <em>wenn</em> il verbo coniugato va in fondo, <em>Wenn ich Zeit hätte</em>. E la principale dopo la subordinata non comincia con il soggetto: «Wenn ich Zeit hätte, ich würde reisen» è sbagliato, giusto è <em>..., würde ich reisen</em>. Non confondere <em>wenn</em> (se) con <em>wann</em> (quando, nelle domande)."
      },
      {
        tip: "Prima di scrivere una frase con <em>wenn</em> chiediti come presenti la condizione. Come reale o aperta? La costruzione di base è il presente nelle due frasi. Come ipotetica, improbabile o contraria ai fatti? Allora Konjunktiv II in tutte e due le frasi (anche per qualcosa di possibile: <em>Wenn es morgen regnen würde, würden wir zu Hause bleiben</em>): <em>hätte, wäre, könnte</em> con <em>haben</em>, <em>sein</em> e i modali, <em>würde</em> + infinito con quasi tutti gli altri verbi."
      }
    ],
    grammar: {
      title: "Wenn + presente o Konjunktiv II",
      note: "<b>Reale</b>: <i>wenn</i> + presente, presente. <b>Irreale</b>: Konjunktiv II in entrambe le frasi (<i>hätte, wäre, könnte</i>, o <i>würde</i> + infinito). Il verbo di <i>wenn</i> va in fondo, e la principale che segue comincia con il verbo.",
      table: {
        head: ["tipo", "esempio", "nota"],
        rows: [
          ["reale", "Wenn es morgen regnet, bleiben wir zu Hause.", "presente nelle due frasi"],
          ["irreale", "Wenn ich Zeit hätte, würde ich mehr reisen.", "Konjunktiv II + würde"],
          ["irreale con sein", "Wenn ich reich wäre, würde ich ein Haus kaufen.", "wäre, non «würde sein»"],
          ["consiglio", "Wenn ich du wäre, würde ich ihn anrufen.", "al posto tuo"]
        ]
      },
      examples: [
        { tr: "Se avessi tempo, viaggerei di più.", note: "wenn-Satz prima: la principale comincia con würde" },
        { tr: "Se fossi ricco, comprerei una casa.", note: "wäre dopo wenn" },
        { tr: "Farei più sport, se avessi più tempo.", note: "wenn-Satz dopo: l'ordine della principale non cambia" },
        { tr: "Se hai fame, puoi mangiare qualcosa.", note: "ipotesi reale: presente" },
        { tr: "Se domani piove, restiamo a casa.", note: "ipotesi reale: presente, verbo di wenn in fondo" },
        { tr: "Se fossi in te, lo chiamerei.", note: "formula del consiglio" }
      ]
    },
    vocab: [
      "la vincita",
      "vincere",
      "ricco",
      "il denaro, i soldi",
      "risparmiare",
      "guadagnare",
      "le ferie, la vacanza",
      "la casa",
      "il giardino",
      "il giro del mondo",
      "la lingua",
      "la professione, il mestiere"
    ],
    exercises: [
      {
        q: "Come dici «Se avessi tempo, viaggerei di più»?",
        opts: [
          "Wenn ich Zeit hätte, würde ich mehr reisen.",
          "Wenn ich Zeit hatte, würde ich mehr reisen.",
          "Wenn ich hätte Zeit, würde ich mehr reisen."
        ],
        why: "Ipotesi irreale: <b>hätte</b> dopo <i>wenn</i>, con il verbo di <i>wenn</i> in fondo, e <i>würde ich</i> nella principale, con il verbo in prima posizione."
      },
      {
        q: "Quale frase parla di una situazione possibile e reale, non di un'ipotesi irreale?",
        opts: [
          "Wenn ich reich wäre, würde ich ein Haus kaufen.",
          "Wenn es morgen regnet, bleiben wir zu Hause.",
          "Wenn ich du wäre, würde ich ihn anrufen."
        ],
        why: "La seconda ha il presente nelle due frasi: la pioggia di domani è possibile. Le altre due hanno il Konjunktiv II: sono ipotesi irreali."
      },
      {
        q: "Completa: «Wenn ich mehr Geld hätte, ___ ich ein Auto kaufen.»",
        opts: [
          "würde",
          "wurde",
          "werde"
        ],
        why: "<b>würde</b> è il condizionale, e viene dopo la virgola, con il verbo in prima posizione nella principale. <i>Wurde</i> è il Präteritum, <i>werde</i> il presente."
      },
      {
        q: "Quali frasi sono corrette?",
        opts: [
          "Wenn ich reich wäre, würde ich weniger arbeiten.",
          "Ich würde weniger arbeiten, wenn ich reich wäre.",
          "Wenn ich wäre reich, würde ich weniger arbeiten.",
          "Wenn ich reich wäre, ich würde weniger arbeiten.",
          "Ich würde weniger arbeiten, wenn wäre ich reich."
        ],
        why: "Le prime due vanno bene: <i>wenn</i> manda <i>wäre</i> in fondo, e la principale che segue comincia con il verbo. La 3 e la 5 mettono il verbo di <i>wenn</i> nel posto sbagliato, la 4 non fa cominciare la principale con il verbo."
      },
      {
        q: "Completa con il presente di regnen: «Wenn es morgen ___, bleiben wir zu Hause.»",
        hint: "presente, 3ª persona singolare",
        why: "<b>Regnet</b>: ipotesi reale, quindi presente. Il verbo di <i>wenn</i> va in fondo."
      },
      {
        q: "Completa con il Konjunktiv II di haben: «Wenn ich viel Geld ___, würde ich um die Welt reisen.»",
        hint: "Konjunktiv II di haben, ich",
        why: "<b>Hätte</b> in fondo alla frase con <i>wenn</i>. La principale usa <i>würde</i> + infinito."
      },
      {
        q: "Completa la frase (nel secondo spazio usa würde).",
        tr: "Se avessi più tempo, andrei più spesso al cinema.",
        why: "<i>Wenn ich mehr Zeit hätte, würde ich öfter ins Kino gehen</i>: <i>hätte</i> in fondo alla frase con <i>wenn</i>, <i>würde</i> in prima posizione nella principale, <i>gehen</i> in fondo."
      },
      {
        q: "Traduci: «Se fossi ricco, comprerei una casa.»",
        why: "<i>Wenn ich reich wäre, würde ich ein Haus kaufen</i>. Vanno bene anche <i>mir ein Haus kaufen</i> e l'ordine inverso: <i>Ich würde ein Haus kaufen, wenn ich reich wäre.</i>"
      },
      {
        tr: "Se avessi più soldi, farei il giro del mondo. Se fossi ricco, comprerei anche una casa con giardino.",
        why: "In <i>Weltreise</i> la <b>w</b> si legge [v] e la <b>ei</b> è [aɪ]; in <i>Garten</i> la <b>g</b> è [g]; in <i>reich</i> la <b>ch</b> dopo <b>ei</b> si legge [ç], un suono soffiato."
      },
      {
        tr: "Se avessi più tempo, imparerei una lingua nuova.",
        why: "In <i>Sprache</i> la <b>sp</b> iniziale si legge [ʃp] e la <b>ch</b> dopo <b>a</b> è [x]; in <i>lernen</i> la <b>l</b> è chiara."
      }
    ]
  },
  "lesson:b1-u01-l3": {
    theme: "Opinioni",
    title: "Penso che ... Secondo me ...",
    objectives: [
      "esprimere un'opinione con Ich finde, dass ... e Ich glaube, dass ...",
      "mettere il verbo in fondo dopo dass",
      "esprimere la propria opinione con Meiner Meinung nach ...",
      "distinguere dass (congiunzione) da das (articolo o pronome)"
    ],
    theory: [
      {
        h: "Ich finde, dass ...",
        p: "Per dire che cosa si pensa si usano verbi come <strong>finden, glauben, denken</strong> e l'espressione <strong>der Meinung sein</strong>, seguiti dalla congiunzione <strong>dass</strong>. Dopo <em>dass</em> il verbo coniugato va <strong>in fondo</strong>, e la virgola è obbligatoria: <em>Ich finde, dass das eine gute Idee ist. Ich bin der Meinung, dass wir mehr Zeit brauchen.</em> Si può negare il verbo di opinione: <em>Ich glaube nicht, dass das funktioniert.</em>"
      },
      {
        h: "Senza dass",
        p: "Nel parlato si può togliere <em>dass</em>: allora la seconda frase è una frase principale normale, con il verbo in <strong>seconda posizione</strong>: <em>Ich denke, er hat recht. Ich finde, das ist zu teuer.</em> Con <em>dass</em> il verbo va in fondo (<em>dass er recht hat</em>), senza <em>dass</em> resta in seconda posizione (<em>er hat recht</em>)."
      },
      {
        h: "Meiner Meinung nach ...",
        p: "<strong>Meiner Meinung nach</strong> (secondo me, a mio parere) occupa la prima posizione, quindi il verbo viene subito dopo: <em>Meiner Meinung nach ist das zu teuer.</em> <em>Meiner Meinung</em> è un dativo (<em>die Meinung</em>), e <em>nach</em> sta dopo. Se invece parti dal soggetto, <em>meiner Meinung nach</em> può stare in mezzo: <em>Das ist meiner Meinung nach zu teuer.</em>"
      },
      {
        contrast: "In italiano dopo <em>penso che</em>, <em>credo che</em>, <em>trovo che</em> si usa il <strong>congiuntivo</strong>: <em>penso che sia giusto</em>. In tedesco dopo <em>Ich denke, dass</em>, <em>Ich glaube, dass</em> si usa l'<strong>indicativo</strong>: <em>Ich denke, dass das richtig ist</em>. In italiano <em>che</em> si può togliere solo in pochi casi, mentre in tedesco <em>dass</em> si può togliere (<em>Ich denke, das ist richtig</em>), ma cambia l'ordine del verbo."
      },
      {
        trap: "Non si scrive «Ich finde, dass das ist gut»: dopo <em>dass</em> il verbo va in fondo, <em>dass das gut ist</em>. Non confondere <strong>dass</strong> (congiunzione, due <em>s</em>) con <strong>das</strong> (articolo o pronome, una <em>s</em>): <em>Ich glaube, dass das Buch gut ist</em>. Nella frase <em>Ich glaube, das ist gut</em> la parola <em>das</em> è un pronome."
      },
      {
        tip: "Se non sei sicuro di scrivere <em>das</em> o <em>dass</em>, prova a sostituirlo con <em>dieses</em> o <em>welches</em>: se funziona, è <em>das</em>. Altrimenti è <em>dass</em>."
      }
    ],
    grammar: {
      title: "dass e l'opinione",
      note: "<b>Ich finde, dass ...</b> con il verbo in fondo. Senza <i>dass</i>, il verbo resta in seconda posizione. <b>Meiner Meinung nach</b> in prima posizione, poi il verbo.",
      table: {
        head: ["costruzione", "esempio", "nota"],
        rows: [
          ["Ich finde, dass ...", "Ich finde, dass das eine gute Idee ist.", "verbo in fondo"],
          ["senza dass", "Ich denke, er hat recht.", "verbo in seconda posizione"],
          ["Meiner Meinung nach", "Meiner Meinung nach ist das zu teuer.", "il verbo subito dopo"],
          ["der Meinung sein", "Ich bin der Meinung, dass wir mehr Zeit brauchen.", "la virgola è obbligatoria"]
        ]
      },
      examples: [
        { tr: "Penso che sia una buona idea.", note: "dass: verbo in fondo, indicativo" },
        { tr: "Credo che abbia ragione.", note: "dass: recht hat, il verbo coniugato in fondo" },
        { tr: "Penso che abbia ragione.", note: "senza dass: verbo in seconda posizione" },
        { tr: "Secondo me è troppo caro.", note: "Meiner Meinung nach in prima posizione, poi ist" },
        { tr: "Sono dell'opinione che ci serva più tempo.", note: "der Meinung sein + dass" },
        { tr: "Non credo che funzioni.", note: "nicht davanti a dass: Ich glaube nicht, dass ..." }
      ]
    },
    vocab: [
      "l'opinione",
      "la proposta",
      "l'argomento, il tema",
      "il motivo",
      "il vantaggio",
      "lo svantaggio",
      "credere, pensare",
      "trovare, ritenere",
      "essere d'accordo (con il dativo)",
      "avere ragione",
      "d'accordo",
      "giusto, corretto"
    ],
    exercises: [
      {
        q: "Quale frase è corretta?",
        opts: [
          "Ich finde, dass das eine gute Idee ist.",
          "Ich finde, dass das ist eine gute Idee.",
          "Ich finde, dass ist das eine gute Idee."
        ],
        why: "Dopo <b>dass</b> il verbo coniugato va in fondo: <i>dass das eine gute Idee ist</i>."
      },
      {
        q: "Quale frase ha la scrittura giusta?",
        opts: [
          "Ich glaube, dass er recht hat.",
          "Ich glaube, das er recht hat.",
          "Ich glaube, dass er hat recht."
        ],
        why: "La congiunzione ha due <i>s</i>: <b>dass</b>, e manda il verbo coniugato in fondo (<i>recht hat</i>)."
      },
      {
        q: "Completa: «Ich finde, ___ wir mehr Zeit brauchen.»",
        hint: "congiunzione",
        why: "<b>dass</b> introduce ciò che si pensa, e <i>brauchen</i> va in fondo."
      },
      {
        q: "Completa: «Meiner ___ nach ist das zu teuer.»",
        hint: "opinione",
        why: "<b>Meinung</b>: <i>meiner Meinung nach</i> è la formula per «secondo me»."
      },
      {
        q: "Abbina ogni espressione al suo significato.",
        pairs: [
          "penso che ...",
          "secondo me ...",
          "sono d'accordo",
          "hai ragione"
        ]
      },
      {
        q: "Completa la frase (usa dass e il verbo funktionieren).",
        tr: "Non credo che funzioni.",
        why: "<i>Ich glaube nicht, dass das funktioniert</i>: <i>dass</i> manda <i>funktioniert</i> in fondo. Va bene anche <i>klappt</i>."
      },
      {
        q: "Metti in ordine le parole.",
        tr: "Penso che sia una buona idea.",
        why: "<i>Ich finde, dass das eine gute Idee ist.</i> La virgola sta dopo <i>finde</i>, e il verbo <i>ist</i> chiude la subordinata."
      },
      {
        q: "Traduci: «Secondo me questo è troppo caro.» (usa meiner Meinung nach)",
        why: "<i>Meiner Meinung nach ist das zu teuer</i>: il verbo sta subito dopo l'espressione. Va bene anche <i>Das ist meiner Meinung nach zu teuer</i>."
      },
      {
        tr: "Penso che sia una buona idea. Secondo me ci serve più tempo, ma non credo che sia possibile.",
        why: "In <i>Meinung</i> la <b>ei</b> si legge [aɪ]; in <i>möglich</i> la <b>ö</b> è arrotondata e la <b>ch</b> finale è [ç]; in <i>brauchen</i> la <b>au</b> è [aʊ] e la <b>ch</b> [x]."
      },
      {
        tr: "Sono dell'opinione che ci serva più tempo.",
        why: "In <i>Meinung</i> la <b>ei</b> si legge [aɪ]; in <i>dass</i> la <b>ss</b> è una <b>s</b> sorda; in <i>mehr</i> la <b>h</b> non si legge."
      }
    ]
  },
  "lesson:b1-u01-l4": {
    theme: "Contrasti",
    title: "Anche se ..., comunque",
    objectives: [
      "esprimere una concessione con obwohl e il verbo in fondo",
      "usare trotzdem con il verbo subito dopo",
      "distinguere obwohl da weil",
      "dire che qualcuno continua nonostante le difficoltà"
    ],
    theory: [
      {
        h: "obwohl: la subordinata",
        p: "<strong>Obwohl</strong> (anche se, sebbene) introduce una circostanza che dovrebbe impedire qualcosa, e invece non lo impedisce: <em>Obwohl es regnet, gehen wir spazieren.</em> Funziona come <em>weil</em> e <em>dass</em>: il verbo coniugato va <strong>in fondo</strong>, la virgola separa le due frasi. Se la frase con <em>obwohl</em> viene prima, la principale comincia con il verbo: <em>Obwohl er müde war, hat er noch gearbeitet.</em> Se viene dopo: <em>Wir gehen spazieren, obwohl es regnet.</em>"
      },
      {
        h: "trotzdem: la principale",
        p: "<strong>Trotzdem</strong> (comunque, lo stesso, ciononostante) dice la stessa cosa con due frasi separate. Non cambia l'ordine delle parole: può occupare la <strong>prima posizione</strong>, e allora il verbo viene subito dopo: <em>Es regnet. Trotzdem gehen wir spazieren.</em> Oppure sta nella frase: <em>Wir gehen trotzdem spazieren.</em> Con <em>aber</em> si può anche dire <em>Sie ist krank, aber sie geht trotzdem zur Arbeit.</em>"
      },
      {
        contrast: "In italiano <em>benché</em> e <em>sebbene</em> vogliono il congiuntivo (<em>benché piova</em>), mentre <em>anche se</em> si usa con l'indicativo (<em>anche se piove</em>). In tedesco, quando <em>obwohl</em> introduce un fatto reale come in questi esempi, si usa normalmente l'<strong>indicativo</strong>: <em>obwohl es regnet</em>. Il verbo va in fondo, come dopo <em>weil</em>: <em>weil es regnet</em> dice perché, <em>obwohl es regnet</em> dice «nonostante questo»."
      },
      {
        trap: "Dopo una frase con <em>obwohl</em> la principale comincia con il verbo: <em>Obwohl es regnet, gehen wir spazieren</em>, non «..., wir gehen». E dopo <em>trotzdem</em> in prima posizione il verbo viene subito: <em>trotzdem gehen wir</em>, non «trotzdem wir gehen». <em>Obwohl</em> e <em>trotzdem</em> possono anche stare insieme, e allora la concessione si rafforza: <em>Obwohl es regnet, gehen wir trotzdem spazieren</em>, con <em>trotzdem</em> dopo il verbo. Non confondere <em>obwohl</em> con <em>weil</em>: <em>weil</em> introduce una causa, <em>obwohl</em> un fatto nonostante il quale succede ciò che dice la principale."
      },
      {
        tip: "Se la concessione sta nella stessa frase, usa <em>obwohl</em> con il verbo in fondo. Se sono due frasi separate, usa <em>trotzdem</em> e metti il verbo subito dopo, in seconda posizione."
      }
    ],
    grammar: {
      title: "obwohl e trotzdem",
      note: "<b>obwohl</b> = anche se, verbo in fondo. <b>trotzdem</b> = comunque, in prima posizione il verbo segue subito. Due modi per dire la stessa cosa.",
      table: {
        head: ["parola", "esempio", "nota"],
        rows: [
          ["obwohl", "Obwohl es regnet, gehen wir spazieren.", "verbo in fondo, poi la principale comincia con il verbo"],
          ["obwohl dopo", "Wir gehen spazieren, obwohl es regnet.", "l'ordine della principale non cambia"],
          ["trotzdem", "Es regnet. Trotzdem gehen wir spazieren.", "verbo subito dopo trotzdem"],
          ["aber ... trotzdem", "Sie ist krank, aber sie geht trotzdem zur Arbeit.", "trotzdem dopo il verbo"]
        ]
      },
      examples: [
        { tr: "Anche se piove, andiamo a fare una passeggiata.", note: "obwohl: verbo in fondo, poi gehen in prima posizione" },
        { tr: "Andiamo a fare una passeggiata, anche se piove.", note: "obwohl dopo la principale" },
        { tr: "Piove. Andiamo comunque a fare una passeggiata.", note: "trotzdem: il verbo subito dopo" },
        { tr: "Anche se era stanco, ha ancora lavorato.", note: "obwohl: war in fondo" },
        { tr: "Era stanco, ma ha comunque lavorato.", note: "trotzdem in prima posizione" },
        { tr: "È malata, ma va comunque al lavoro.", note: "aber + trotzdem nella frase" }
      ]
    },
    vocab: [
      "anche se, sebbene",
      "comunque, lo stesso",
      "la pioggia",
      "la passeggiata",
      "il tempo (atmosferico)",
      "faticoso",
      "difficile",
      "la difficoltà",
      "l'errore",
      "arrendersi, rinunciare",
      "andare avanti, continuare",
      "il successo"
    ],
    exercises: [
      {
        q: "Quale frase è corretta?",
        opts: [
          "Obwohl es regnet, gehen wir spazieren.",
          "Obwohl es regnet, wir gehen spazieren.",
          "Obwohl es regnet, trotzdem wir gehen spazieren."
        ],
        why: "Dopo la frase con <b>obwohl</b> la principale comincia con il verbo: <i>gehen wir</i>. La terza ha il verbo nel posto sbagliato: dopo <i>trotzdem</i> in prima posizione deve venire subito il verbo."
      },
      {
        q: "Quale frase è corretta?",
        opts: [
          "Es regnet, trotzdem wir gehen spazieren.",
          "Es regnet, trotzdem gehen wir spazieren.",
          "Es regnet, trotzdem wir spazieren gehen."
        ],
        why: "<b>Trotzdem</b> in prima posizione vuole il verbo subito dopo: <i>trotzdem gehen wir</i>. Non manda il verbo in fondo, a differenza di <i>obwohl</i>."
      },
      {
        q: "Completa con trotzdem: «Sie ist krank, ___ geht sie zur Arbeit.»",
        hint: "comunque",
        why: "<b>Trotzdem</b> in prima posizione, e il verbo <i>geht</i> subito dopo."
      },
      {
        q: "Completa la frase (usa obwohl).",
        tr: "Anche se era stanco, ha ancora lavorato.",
        why: "<i>Obwohl er müde war, hat er noch gearbeitet</i>: <i>war</i> in fondo alla subordinata, poi <i>hat</i> in prima posizione nella principale."
      },
      {
        q: "Abbina ogni parola al suo significato.",
        pairs: [
          "anche se (verbo in fondo)",
          "comunque, lo stesso (verbo subito dopo)",
          "perché (verbo in fondo)",
          "ma (non cambia l'ordine)"
        ]
      },
      {
        q: "Metti in ordine le parole.",
        tr: "Anche se era stanco, ha ancora lavorato.",
        why: "<i>Obwohl er müde war, hat er noch gearbeitet.</i> La virgola sta dopo <i>war</i>, poi la principale comincia con <i>hat</i>."
      },
      {
        q: "Traduci: «Anche se piove, andiamo a fare una passeggiata.» (usa obwohl)",
        why: "<i>Obwohl es regnet, gehen wir spazieren</i>. Va bene anche l'ordine inverso (<i>Wir gehen spazieren, obwohl es regnet</i>) e <i>einen Spaziergang machen</i>."
      },
      {
        q: "Un amico ti vede uscire con il brutto tempo.",
        setting: "Il tempo è brutto e sei malato, ma esci lo stesso.",
        lines: [
          { tr: "Domani resti a casa? Il tempo è brutto." },
          { tr: "Rispondi: no, vai a passeggio anche se il tempo è brutto.", answerTr: "No, anche se il tempo è brutto, vado a passeggio." },
          { tr: "Ma sei malato!" },
          { tr: "Rispondi: sì, comunque vai.", answerTr: "Sì, comunque ci vado." },
          { tr: "Sei anche stanco. Vuoi davvero uscire?" },
          { tr: "Rispondi che esci comunque, ma solo per poco.", answerTr: "Sì, esco comunque, ma solo per poco." }
        ]
      },
      {
        tr: "Anche se il tempo è brutto, andiamo a fare una passeggiata. È faticoso, ma andiamo avanti lo stesso.",
        why: "In <i>Wetter</i> la <b>w</b> si legge [v]; in <i>anstrengend</i> la <b>ng</b> è un suono nasale [ŋ]; in <i>weiter</i> la <b>ei</b> è [aɪ]."
      },
      {
        tr: "Anche se sono stanco, non mi arrendo.",
        why: "In <i>müde</i> la <b>ü</b> è arrotondata; in <i>Obwohl</i> la <b>w</b> si legge [v]; in <i>nicht</i> la <b>ch</b> dopo <b>i</b> si legge [ç]."
      }
    ]
  },
  "lesson:b1-u01-test": {
    theme: "Verifica",
    title: "Test: Se fossi in te",
    objectives: [
      "verificare il Konjunktiv II, il periodo ipotetico, dass e l'opinione, obwohl e trotzdem"
    ],
    theory: [
      {
        p: "Dieci domande sull'intera unità. Si supera con il 70%. Non riguardare le lezioni mentre rispondi: se non ricordi qualcosa, è meglio tornare a ripassare."
      }
    ],
    exercises: [
      {
        tr: "Il Konjunktiv II di können, tutte le persone.",
        why: "<i>Könnte, könntest, könnte, könnten, könntet, könnten</i>: dal Präteritum <i>konnte</i> con l'Umlaut."
      },
      {
        tr: "Il Konjunktiv II di müssen, tutte le persone.",
        why: "<i>Müsste, müsstest, müsste, müssten, müsstet, müssten</i>: dal Präteritum <i>musste</i> con l'Umlaut."
      },
      {
        q: "Completa con la forma giusta del Konjunktiv II di werden: «An deiner Stelle ___ ich umziehen.»",
        hint: "condizionale, ich",
        why: "<b>Würde</b>: <i>An deiner Stelle würde ich umziehen</i>. L'infinito <i>umziehen</i> va in fondo."
      },
      {
        q: "Completa con il Konjunktiv II di sein: «Wenn ich du ___, würde ich ihn anrufen.»",
        hint: "Konjunktiv II di sein, ich",
        why: "<b>Wäre</b> in fondo alla frase con <i>wenn</i>, e la principale comincia con <i>würde</i>."
      },
      {
        q: "Completa: «Ich glaube nicht, ___ er recht hat.»",
        hint: "congiunzione",
        why: "<b>dass</b> manda il verbo <i>hat</i> in fondo."
      },
      {
        q: "Completa con la congiunzione giusta: «___ es regnet, gehen wir spazieren.» (anche se)",
        hint: "verbo in fondo",
        why: "<b>Obwohl</b> è la congiunzione che manda il verbo in fondo e introduce una concessione."
      },
      {
        q: "Quale frase è corretta?",
        opts: [
          "Es ist spät, trotzdem arbeite ich noch.",
          "Es ist spät, trotzdem ich arbeite noch.",
          "Es ist spät, obwohl arbeite ich noch."
        ],
        why: "<b>Trotzdem</b> in prima posizione vuole il verbo subito dopo: <i>trotzdem arbeite ich</i>. La terza usa <i>obwohl</i> con il verbo nel posto sbagliato."
      },
      {
        q: "Quali frasi sono corrette?",
        opts: [
          "Wenn ich mehr Zeit hätte, würde ich Sport machen.",
          "Ich finde, dass das zu teuer ist.",
          "Obwohl ich müde bin, gehe ich zur Arbeit.",
          "Wenn ich hätte mehr Zeit, würde ich Sport machen.",
          "Ich finde, dass das ist zu teuer."
        ],
        why: "Le prime tre sono giuste: il verbo coniugato va in fondo dopo <i>wenn</i>, <i>dass</i> e <i>obwohl</i>, e la principale che segue comincia con il verbo. La 4 e la 5 lasciano il verbo troppo presto."
      },
      {
        tr: "Se fossi in te, non mi licenzierei. Penso che il posto sia buono, anche se è faticoso.",
        why: "In <i>kündigen</i> la <b>ü</b> è arrotondata; in <i>Stelle</i> la <b>st</b> iniziale è [ʃt]; in <i>anstrengend</i> la <b>ng</b> è un suono nasale [ŋ]."
      },
      {
        tr: "Se avessi più soldi, comprerei una casa, anche se è cara.",
        why: "In <i>würde</i> la <b>ü</b> è arrotondata; in <i>teuer</i> la <b>eu</b> si legge [ɔʏ]; in <i>kaufen</i> la <b>au</b> si legge [aʊ]."
      }
    ]
  },
  "unit:b1-u02": {
    title: "A cosa pensi?",
    grammarNote: "verbi con preposizione fissa · darauf, worauf · frasi relative (nominativo, accusativo, dativo, con preposizione) · jemand, niemand, jeder"
  },
  "lesson:b1-u02-l1": {
    theme: "Interessi e preoccupazioni",
    title: "Aspetto te",
    objectives: [
      "usare i verbi con preposizione fissa più frequenti (warten auf, denken an, sich interessieren für)",
      "scegliere il caso giusto dopo la preposizione",
      "parlare di paure, sogni e interessi",
      "non tradurre la preposizione dall'italiano"
    ],
    theory: [
      {
        h: "Il verbo si impara con la sua preposizione",
        p: "Molti verbi tedeschi vogliono una <strong>preposizione fissa</strong> e un <strong>caso fisso</strong> dopo di essa: <em>warten auf + Akk</em>, <em>denken an + Akk</em>, <em>sich interessieren für + Akk</em>, <em>sich kümmern um + Akk</em>. Altri vogliono il dativo: <em>Angst haben vor + Dat</em>, <em>träumen von + Dat</em>, <em>teilnehmen an + Dat</em>. Dopo la preposizione l'articolo o il pronome prende quel caso: <em>Ich warte auf den Bus</em> (accusativo), <em>Sie hat Angst vor dem Test</em> (dativo), <em>Ich warte auf dich</em> (pronome all'accusativo)."
      },
      {
        h: "Lo stesso <em>an</em>, due casi",
        p: "La preposizione <em>an</em> regge l'accusativo con <em>denken</em> (<em>Ich denke an meine Familie</em>) e il dativo con <em>teilnehmen</em> (<em>Ich nehme an dem Kurs teil</em>). Il caso non si ricava dal significato: va imparato insieme al verbo."
      },
      {
        contrast: "In italiano <em>aspettare qualcuno</em> non ha preposizione, mentre in tedesco serve: <em>warten auf</em>. Anche le altre preposizioni spesso non coincidono: <em>pensare a</em> è <em>denken an</em>, <em>interessarsi di</em> è <em>sich interessieren für</em>, <em>avere paura di</em> è <em>Angst haben vor</em>, <em>occuparsi di</em> è <em>sich kümmern um</em>, <em>partecipare a</em> è <em>teilnehmen an</em>."
      },
      {
        trap: "Non scegliere la preposizione traducendo dall'italiano: <em>Ich warte dich</em> o <em>Ich denke zu dir</em> non sono frasi tedesche corrette. Dopo il verbo c'è la preposizione che il verbo vuole, e poi il caso che essa regge: <em>Ich warte auf dich</em>, <em>Ich denke an dich</em>. Con un verbo riflessivo il pronome riflessivo resta: <em>Sie interessiert sich für Musik</em>."
      },
      {
        tip: "Quando impari un verbo nuovo di questo tipo, scrivilo sempre con la preposizione e il caso: <em>warten auf + Akk</em>, <em>Angst haben vor + Dat</em>. È come imparare l'articolo insieme al nome."
      }
    ],
    grammar: {
      title: "Verbi con preposizione fissa",
      note: "Il verbo vuole una <b>preposizione</b> e un <b>caso</b> precisi: <b>warten auf + Akk</b>, <b>Angst haben vor + Dat</b>. Si imparano insieme.",
      table: {
        head: ["verbo + preposizione", "caso", "esempio"],
        rows: [
          ["warten auf", "accusativo", "Ich warte auf dich."],
          ["denken an", "accusativo", "Er denkt oft an seine Familie."],
          ["sich interessieren für", "accusativo", "Sie interessiert sich für Musik."],
          ["sich kümmern um", "accusativo", "Wir kümmern uns um die Kinder."],
          ["Angst haben vor", "dativo", "Sie hat Angst vor dem Test."],
          ["träumen von", "dativo", "Er träumt von einem Haus am Meer."],
          ["teilnehmen an", "dativo", "Ich nehme an dem Kurs teil."]
        ]
      },
      examples: [
        { tr: "Ti aspetto.", note: "warten auf + accusativo: nessuna preposizione in italiano" },
        { tr: "Pensa spesso alla sua famiglia.", note: "denken an + accusativo" },
        { tr: "Si interessa di musica.", note: "sich interessieren für + accusativo, con il pronome riflessivo" },
        { tr: "Ci occupiamo dei bambini.", note: "sich kümmern um + accusativo" },
        { tr: "Ha paura del test.", note: "Angst haben vor + dativo: dem Test" },
        { tr: "Sogna una casa al mare.", note: "träumen von + dativo: von einem Haus" }
      ]
    },
    vocab: [
      "aspettare (warten auf + acc.)",
      "pensare a (denken an + acc.)",
      "interessarsi di (sich interessieren für + acc.)",
      "occuparsi di (sich kümmern um + acc.)",
      "partecipare a (teilnehmen an + dat.)",
      "sognare (träumen von + dat.)",
      "la paura",
      "il corso",
      "l'esame",
      "la preoccupazione",
      "l'interesse",
      "il sogno"
    ],
    exercises: [
      {
        q: "Quale frase significa «Aspetto l'autobus»?",
        opts: ["Ich warte auf den Bus.", "Ich warte den Bus.", "Ich warte für den Bus."],
        why: "<b>Warten auf + accusativo</b>: <i>auf den Bus</i>. In italiano <i>aspettare</i> non vuole preposizione, in tedesco sì."
      },
      {
        q: "Quale frase è corretta?",
        opts: [
          "Sie hat Angst vor dem Test.",
          "Sie hat Angst von dem Test.",
          "Sie hat Angst auf den Test."
        ],
        why: "<b>Angst haben vor + dativo</b>: <i>vor dem Test</i>. Le altre due usano una preposizione che questo verbo non vuole."
      },
      {
        q: "Completa: «Ich warte ___ dich.»",
        hint: "aspettare",
        why: "<b>Auf</b>: <i>warten auf</i>, e il pronome <i>dich</i> è all'accusativo."
      },
      {
        q: "Completa: «Er denkt oft ___ seine Familie.»",
        hint: "pensare a",
        why: "<b>An</b>: <i>denken an + accusativo</i>."
      },
      {
        q: "Completa: «Wir kümmern uns ___ die Kinder.»",
        hint: "occuparsi di",
        why: "<b>Um</b>: <i>sich kümmern um + accusativo</i>."
      },
      {
        q: "Completa la frase.",
        tr: "Si interessa di musica.",
        why: "<i>Sie interessiert sich für Musik</i>: <i>sich interessieren für + accusativo</i>, con il pronome riflessivo <i>sich</i>."
      },
      {
        q: "Metti in ordine le parole.",
        tr: "Penso spesso a te.",
        why: "<i>Ich denke oft an dich.</i> Va bene anche <i>Oft denke ich an dich</i>, con il verbo in seconda posizione."
      },
      {
        q: "Traduci: «Aspetto Anna.» (usa warten)",
        why: "<i>Ich warte auf Anna</i>: la preposizione <i>auf</i> è obbligatoria anche davanti a un nome di persona."
      },
      {
        tr: "Ti aspetto. Penso spesso alla nostra vacanza. Si interessa di musica e si occupa dei bambini.",
        why: "In <i>warte</i> la <b>w</b> si legge [v]; in <i>interessiert</i> la <b>ie</b> è lunga [iː]; in <i>für</i> e <i>kümmert</i> la <b>ü</b> è arrotondata; in <i>dich</i> la <b>ch</b> è [ç]."
      },
      {
        tr: "Ti aspetto e penso all'esame.",
        why: "In <i>Prüfung</i> la <b>ü</b> è arrotondata e la <b>ng</b> è un suono nasale [ŋ]; in <i>auf</i> la <b>au</b> si legge [aʊ]; in <i>dich</i> la <b>ch</b> è [ç]."
      }
    ]
  },
  "lesson:b1-u02-l2": {
    theme: "Attese e fastidi",
    title: "Lo aspetto con gioia. Che cosa?",
    objectives: [
      "sostituire verbo + preposizione + cosa con darauf, daran, davon",
      "chiedere con worauf, woran, worüber",
      "chiedere di una persona con la preposizione + wen",
      "distinguere sich freuen auf e sich freuen über"
    ],
    theory: [
      {
        h: "darauf, daran, darüber: la preposizione senza il nome",
        p: "Quando il verbo con preposizione si riferisce a una <strong>cosa</strong> o a una situazione già nota, la preposizione si unisce a <strong>da-</strong>: <em>Ich warte auf den Bus. Ich warte darauf.</em> <em>Ich denke an die Prüfung. Ich denke daran.</em> Davanti a una vocale si inserisce una <strong>r</strong>: <em>darauf, daran, darüber</em>. Con una consonante: <em>davon, dafür, davor</em>."
      },
      {
        h: "worauf, woran, worüber: la domanda",
        p: "Per chiedere di una cosa si usa <strong>wo-</strong> (davanti a una vocale <strong>wor-</strong>): <em>Worauf wartest du? Woran denkst du? Worüber ärgerst du dich? Wovor hast du Angst?</em> Per una <strong>persona</strong> si usa invece la preposizione con <em>wen</em> (accusativo) o <em>wem</em> (dativo): <em>Auf wen wartest du? An wen denkst du? Mit wem sprichst du?</em> E la risposta ha la preposizione con il pronome: <em>Ich warte auf ihn.</em>"
      },
      {
        h: "sich freuen auf o über",
        p: "<em>Sich freuen</em> vuole l'accusativo con due preposizioni. <strong>Auf</strong> guarda avanti, a qualcosa che deve ancora venire: <em>Ich freue mich auf das Wochenende.</em> <strong>Über</strong> guarda a ciò che c'è o è già successo: <em>Ich freue mich über das Geschenk.</em> Con <em>sich ärgern</em> si usa <em>über</em>: <em>Er ärgert sich über den Lärm.</em>"
      },
      {
        contrast: "L'italiano usa <em>ci</em> e <em>ne</em>: <em>ci penso</em>, <em>ne parlo</em>, <em>ci conto</em>. In tedesco queste particelle non esistono: per una cosa si usa la forma con <em>da-</em>, e <em>ci penso</em> diventa <em>Ich denke daran</em>, <em>ne parlo</em> diventa <em>Ich spreche davon</em>."
      },
      {
        trap: "Le forme con <em>da-</em> e <em>wo-</em> servono per le <strong>cose</strong>. Per una persona si usa la preposizione con il pronome: <em>Ich warte auf ihn</em>, <em>Ich denke an sie</em>, e nella domanda <em>Auf wen wartest du?</em>. Ricorda anche la <strong>r</strong> davanti a una vocale: <em>darauf</em> e <em>worauf</em>, non «daauf» o «woauf»."
      },
      {
        tip: "La forma con <em>da-</em> può anche annunciare una frase che segue: <em>Ich freue mich darauf, dass du kommst.</em> Qui <em>darauf</em> rimanda alla frase con <em>dass</em>."
      }
    ],
    grammar: {
      title: "darauf, daran, worauf, woran",
      note: "Per una <b>cosa</b>: <b>da-</b> (<b>dar-</b> davanti a vocale) per rispondere, <b>wo-</b> (<b>wor-</b>) per chiedere. Per una <b>persona</b>: preposizione + pronome o <b>wen/wem</b>.",
      table: {
        head: ["verbo + preposizione", "risposta (cosa)", "domanda (cosa)", "domanda (persona)"],
        rows: [
          ["warten auf", "darauf", "worauf", "auf wen"],
          ["denken an", "daran", "woran", "an wen"],
          ["sich ärgern über", "darüber", "worüber", "über wen"],
          ["sich freuen auf", "darauf", "worauf", "auf wen"],
          ["Angst haben vor", "davor", "wovor", "vor wem"]
        ]
      },
      examples: [
        { tr: "Non vedo l'ora che arrivi il fine settimana.", note: "sich freuen auf + accusativo: qualcosa che deve venire" },
        { tr: "Non vedo l'ora.", note: "darauf al posto di auf das Wochenende" },
        { tr: "Che cosa aspetti con gioia?", note: "worauf: wo + r + auf" },
        { tr: "Si arrabbia per il rumore.", note: "sich ärgern über + accusativo" },
        { tr: "Per che cosa ti arrabbi?", note: "worüber: wo + r + über" },
        { tr: "Non vedo l'ora di vederlo. Chi stai aspettando?", note: "per una persona: auf ihn, auf wen" }
      ]
    },
    vocab: [
      "non vedere l'ora, rallegrarsi (sich freuen auf + acc.: per qualcosa che verrà)",
      "essere contento di (sich freuen über + acc.: per qualcosa che c'è)",
      "arrabbiarsi per (sich ärgern über + acc.)",
      "ricordarsi di (sich erinnern an + acc.)",
      "parlare di (sprechen über + acc.)",
      "il fine settimana",
      "il regalo",
      "il rumore",
      "la notizia",
      "l'incontro",
      "la festa",
      "la sorpresa"
    ],
    exercises: [
      {
        q: "Come chiedi «A cosa pensi?»",
        opts: ["Woran denkst du?", "Wonach denkst du?", "Wohin denkst du?"],
        why: "<i>Denken an</i> diventa <b>woran</b> (wo + r + an). Le altre opzioni non significano «a che cosa pensi?»: <i>wonach</i> rimanda alla preposizione <i>nach</i>, e <i>Wohin denkst du?</i> è un modo di dire che esprime stupore o protesta («ma che ti salta in mente?»)."
      },
      {
        q: "Sostituisci con una forma con da-: «Ich warte auf den Bus. Ich warte ___.»",
        opts: ["darauf", "daran", "davon"],
        why: "<b>Darauf</b>: <i>warten auf</i> + <i>da-</i> + <i>r</i> davanti alla vocale di <i>auf</i>."
      },
      {
        q: "Chiedi: «Chi stai aspettando?»",
        opts: ["Auf wen wartest du?", "Worauf wartest du?", "Wen wartest du?"],
        why: "Per una <b>persona</b> si usa la preposizione con <i>wen</i>: <i>Auf wen wartest du?</i> <i>Worauf</i> si riferisce a una cosa, e <i>Wen wartest du</i> non ha la preposizione."
      },
      {
        q: "Completa la domanda: «___ freust du dich? - Auf das Wochenende.»",
        hint: "domanda con auf, per una cosa",
        why: "<b>Worauf</b>: <i>wo</i> + <i>r</i> + <i>auf</i>. La risposta ha lo stesso <i>auf</i>: <i>Auf das Wochenende</i>."
      },
      {
        q: "Completa: «Er denkt oft an den Urlaub. Er denkt oft ___.»",
        hint: "da- + an",
        why: "<b>Daran</b>: <i>da</i> + <i>r</i> + <i>an</i>. Davanti alla vocale di <i>an</i> si inserisce la <b>r</b>, come in <i>darauf</i>."
      },
      {
        q: "Completa la frase.",
        tr: "Per che cosa ti arrabbi? Mi arrabbio per il rumore.",
        why: "<i>Worüber ärgerst du dich? Ich ärgere mich über den Lärm.</i> <i>Sich ärgern über + accusativo</i>, e nella domanda <i>wor-</i> davanti alla vocale."
      },
      {
        q: "Abbina ogni frase al suo significato.",
        pairs: ["Che cosa aspetti?", "Ci penso.", "Chi aspetti?", "Penso a lui."]
      },
      {
        q: "Traduci: «Ci penso spesso.» (usa denken)",
        why: "<i>Ich denke oft daran</i>: <i>ci</i> diventa <i>daran</i>. Va bene anche <i>Oft denke ich daran</i>."
      },
      {
        tr: "Che cosa aspetti con gioia? Non vedo l'ora che arrivi il fine settimana. E per che cosa ti sei arrabbiato? Per il rumore. Mi arrabbio spesso per questo.",
        why: "In <i>freust</i> la <b>eu</b> si legge [ɔʏ]; in <i>Wochenende</i> la <b>w</b> è [v] e la <b>ch</b> [x]; in <i>über</i> e <i>darüber</i> la <b>ü</b> è arrotondata."
      },
      {
        tr: "Non vedo l'ora che arrivi il fine settimana e ci penso già.",
        why: "In <i>freue</i> la <b>eu</b> si legge [ɔʏ]; in <i>mich</i> la <b>ch</b> è [ç], in <i>Wochenende</i> è [x]; in <i>schon</i> la <b>sch</b> si legge [ʃ]."
      }
    ]
  },
  "lesson:b1-u02-l3": {
    theme: "Descrivere persone e cose",
    title: "Il libro che ho letto",
    objectives: [
      "formare una frase relativa con der, die, das",
      "scegliere genere e numero dal nome e il caso dal ruolo nella relativa",
      "usare i relativi al nominativo, accusativo e dativo",
      "costruire una relativa con preposizione"
    ],
    theory: [
      {
        h: "Il pronome relativo",
        p: "La <strong>frase relativa</strong> dà informazioni su un nome. Comincia con un <strong>pronome relativo</strong>, ha il verbo coniugato <strong>in fondo</strong> e sta <strong>tra virgole</strong>: <em>Das Buch, das ich gelesen habe, ist spannend.</em> Con il Perfekt in fondo vanno il participio e l'ausiliare: <em>gelesen habe</em>."
      },
      {
        h: "Due domande per scegliere la forma",
        p: "Il <strong>genere e il numero</strong> si prendono dal nome a cui il pronome rimanda (<em>Buch</em> è neutro, quindi <em>das</em>). Il <strong>caso</strong> dipende dal ruolo del pronome dentro la relativa: soggetto (nominativo), oggetto diretto (accusativo) o complemento indiretto, come il destinatario con <em>geben</em> o l'oggetto di <em>helfen</em> (dativo): <em>das Buch, das ich den Kindern gebe</em> (la cosa data: accusativo), <em>die Kinder, denen ich das Buch gebe</em> (chi riceve: dativo). Nei tre casi studiati qui le forme sono quelle dell'articolo determinativo, tranne il dativo plurale, che è <strong>denen</strong> (il genitivo, <em>dessen, deren</em>, arriva più avanti)."
      },
      {
        h: "Con la preposizione",
        p: "La preposizione sta <strong>prima</strong> del pronome e ne decide il caso: <em>Der Mann, mit dem ich spreche, ist mein Chef. Die Freundin, auf die ich warte, kommt aus Rom.</em> Esistono anche forme del genitivo (<em>dessen, deren</em>), che per ora non servono."
      },
      {
        contrast: "L'italiano <em>che</em> non cambia mai (<em>l'uomo che vedo, l'uomo che parla</em>) e dopo una preposizione diventa <em>cui</em> (<em>l'uomo con cui parlo</em>). Il tedesco sceglie la forma secondo il caso: <em>der Mann, der kommt</em> (soggetto), <em>der Mann, den ich sehe</em> (oggetto), <em>der Mann, mit dem ich spreche</em> (dopo <em>mit</em>). E in tedesco la relativa è sempre chiusa tra virgole, anche quando in italiano non c'è nessuna virgola."
      },
      {
        trap: "Non confondere il pronome <em>das</em> con la congiunzione <em>dass</em>: <em>das Buch, das ich lese</em> (relativo, rimanda a <em>Buch</em>) e <em>Ich glaube, dass du recht hast</em> (introduce una frase). Un'altra insidia è il caso: <em>Die Frau, der ich geholfen habe</em> ha <em>der</em> perché <em>helfen</em> vuole il dativo, anche se <em>Frau</em> è un nome in nominativo."
      },
      {
        tip: "Prima di scrivere la relativa chiediti due cose: a quale nome rimanda il pronome (genere e numero)? E che ruolo ha il pronome dentro la relativa (caso)? Le due risposte danno la forma."
      }
    ],
    grammar: {
      title: "La frase relativa",
      note: "Pronome relativo = <b>genere e numero</b> del nome, <b>caso</b> del ruolo nella relativa. Verbo <b>in fondo</b>, relativa tra <b>virgole</b>.",
      table: {
        head: ["caso", "m.", "f.", "n.", "plurale"],
        rows: [
          ["nominativo", "der", "die", "das", "die"],
          ["accusativo", "den", "die", "das", "die"],
          ["dativo", "dem", "der", "dem", "denen"]
        ]
      },
      examples: [
        { tr: "L'uomo che è lì è il mio insegnante.", note: "der: maschile, soggetto della relativa" },
        { tr: "Il libro che ho letto è avvincente.", note: "das: neutro, oggetto diretto" },
        { tr: "La donna a cui ho dato una mano si chiama Eva.", note: "der: femminile, dativo con helfen" },
        { tr: "I bambini a cui do il libro hanno sette anni.", note: "denen: dativo plurale" },
        { tr: "L'uomo con cui parlo è il mio capo.", note: "mit dem: la preposizione precede il pronome" },
        { tr: "L'amica che aspetto viene da Roma.", note: "auf die: warten auf + accusativo" }
      ]
    },
    vocab: [
      "il romanzo",
      "il film",
      "il vicino",
      "la collega",
      "la chiave",
      "la borsa",
      "il cellulare",
      "gli occhiali",
      "il negozio",
      "avvincente, appassionante",
      "perdere",
      "consigliare"
    ],
    exercises: [
      {
        q: "Scegli il pronome relativo: «Der Film, ___ wir gestern gesehen haben, war lang.»",
        opts: ["der", "den", "dem"],
        why: "<i>Film</i> è maschile e nella relativa è oggetto diretto (<i>wir haben den Film gesehen</i>): quindi <b>den</b>."
      },
      {
        q: "Scegli il pronome relativo: «Das ist der Kollege, mit ___ ich arbeite.»",
        opts: ["dem", "den", "der"],
        why: "<i>Kollege</i> è maschile e <i>mit</i> vuole il dativo: <b>dem</b>. La preposizione sta prima del pronome."
      },
      {
        q: "Completa: «Das ist das Buch, ___ ich gelesen habe.»",
        hint: "neutro, accusativo",
        why: "<b>Das</b>: <i>Buch</i> è neutro e nella relativa è oggetto diretto (<i>das</i> all'accusativo è uguale al nominativo)."
      },
      {
        q: "Completa: «Die Frau, ___ ich gestern getroffen habe, heißt Eva.»",
        hint: "femminile, accusativo",
        why: "<b>Die</b>: <i>Frau</i> è femminile e nella relativa è oggetto diretto. Il femminile ha <i>die</i> sia al nominativo sia all'accusativo."
      },
      {
        q: "Completa: «Die Kinder, ___ ich das Buch gebe, sind sieben Jahre alt.»",
        hint: "plurale, dativo",
        why: "<b>Denen</b>: dativo plurale. Nei tre casi studiati qui il pronome relativo coincide con l'articolo determinativo, tranne al dativo plurale: <i>denen</i>."
      },
      {
        q: "Completa la frase.",
        tr: "Questa è la chiave che ho perso.",
        why: "<i>Das ist der Schlüssel, den ich verloren habe</i>: <i>den</i> perché <i>Schlüssel</i> è maschile e oggetto diretto, e <i>verloren</i> con <i>habe</i> sta in fondo."
      },
      {
        q: "Metti in ordine le parole.",
        tr: "Questa è la borsa che ho comprato ieri.",
        why: "<i>Das ist die Tasche, die ich gestern gekauft habe.</i> Dopo la virgola il verbo coniugato <i>habe</i> sta in fondo, preceduto da <i>gekauft</i>."
      },
      {
        q: "Traduci: «Il film che abbiamo visto era lungo.»",
        why: "<i>Der Film, den wir gesehen haben, war lang</i>: <i>den</i> (maschile, oggetto), <i>gesehen haben</i> in fondo alla relativa, e la principale riprende con <i>war</i>."
      },
      {
        tr: "Questo è il libro che ho letto. È un romanzo avvincente. Anche la collega a cui ho consigliato il romanzo lo trova avvincente.",
        why: "In <i>spannend</i> la <b>sp</b> iniziale si legge [ʃp]; in <i>empfohlen</i> la <b>pf</b> è un'affricata [pf]; in <i>ich</i> la <b>ch</b> è [ç]."
      },
      {
        tr: "La chiave che ho perso era nella mia borsa.",
        why: "In <i>Schlüssel</i> la <b>sch</b> si legge [ʃ] e la <b>ü</b> è arrotondata; in <i>verloren</i> la <b>v</b> è [f], mentre in <i>war</i> la <b>w</b> è [v]."
      }
    ]
  },
  "lesson:b1-u02-l4": {
    theme: "Parlare in modo generico",
    title: "Qualcuno, nessuno, ognuno",
    objectives: [
      "usare jemand e niemand con le forme dell'accusativo e del dativo",
      "usare jeder (singolare) e alle (plurale)",
      "usare etwas e nichts",
      "costruire la negazione senza nicht aggiunto"
    ],
    theory: [
      {
        h: "jemand e niemand",
        p: "<strong>Jemand</strong> (qualcuno) e <strong>niemand</strong> (nessuno) parlano di persone in modo generico. Possono restare invariati oppure prendere <em>-en</em> all'accusativo e <em>-em</em> al dativo: <em>Ich habe niemanden gesehen</em> o <em>Ich habe niemand gesehen</em>. <em>Ich habe jemandem geholfen</em> o <em>Ich habe jemand geholfen</em>. Tutte e due le forme sono corrette, anche nella lingua scritta; le forme con la desinenza rendono il caso più evidente."
      },
      {
        h: "jeder e alle",
        p: "<strong>Jeder</strong> (ognuno, ciascuno) è <strong>singolare</strong>: <em>Jeder weiß das.</em> Si declina come <em>dieser</em>: <em>jeder, jeden, jedem</em> (<em>Ich kenne jeden hier</em>). <strong>Alle</strong> (tutti) è <strong>plurale</strong>: <em>Alle sind da. Alle wissen das.</em>"
      },
      {
        h: "etwas e nichts",
        p: "<strong>Etwas</strong> (qualcosa) e <strong>nichts</strong> (niente) non cambiano: <em>Ich habe etwas gehört. Ich habe nichts gesehen.</em> Un aggettivo che li segue si scrive con la maiuscola e prende <em>-es</em> al nominativo e all'accusativo (<em>etwas Neues, nichts Besonderes</em>), <em>-em</em> al dativo (<em>mit etwas Neuem, mit nichts Besonderem</em>)."
      },
      {
        contrast: "In italiano <em>nessuno</em> e <em>niente</em> dopo il verbo vogliono <em>non</em>: <em>Non ho visto nessuno, non ho fatto niente</em>. In tedesco la negazione sta già in <em>niemand</em> e <em>nichts</em>, e di solito non si aggiunge <em>nicht</em>: <em>Ich habe niemanden gesehen. Ich habe nichts gemacht.</em> Se <em>nessuno</em> sta prima del verbo, come in italiano, la frase è identica: <em>Nessuno ha chiamato</em> è <em>Niemand hat angerufen</em>."
      },
      {
        trap: "<em>Jeder</em> è singolare come <em>ognuno</em>, non come <em>tutti</em>: <em>Jeder weiß das</em> (con <em>weiß</em>, 3ª persona singolare), mentre <em>alle</em> vuole il plurale: <em>Alle wissen das</em>. Inoltre aggiungere <em>nicht</em> a <em>nichts</em> o <em>niemanden</em> cambia il senso, perché le due negazioni si annullano: <em>Ich habe nicht nichts gehört</em> vuol dire che qualcosa si è sentito."
      },
      {
        tip: "Per «qualcun altro» si dice <em>jemand anders</em>. Per chiedere in generale, <em>Hat jemand eine Frage?</em> è la forma più naturale."
      }
    ],
    grammar: {
      title: "jemand, niemand, jeder",
      note: "<b>jemand</b> e <b>niemand</b>: invariati o con <b>-en</b> (acc.) e <b>-em</b> (dat.). <b>jeder</b> è singolare, <b>alle</b> è plurale. <b>nichts</b> e <b>niemand</b> negano da soli: niente <b>nicht</b> in più.",
      table: {
        head: ["", "nominativo", "accusativo", "dativo"],
        rows: [
          ["jemand", "jemand", "jemanden, jemand", "jemandem, jemand"],
          ["niemand", "niemand", "niemanden, niemand", "niemandem, niemand"],
          ["jeder (m.)", "jeder", "jeden", "jedem"],
          ["alle (plurale)", "alle", "alle", "allen"]
        ]
      },
      examples: [
        { tr: "Qualcuno ha visto la mia chiave?", note: "jemand al nominativo" },
        { tr: "Non ho visto nessuno.", note: "niemanden: accusativo, nessun nicht" },
        { tr: "Ho aiutato qualcuno.", note: "jemandem: dativo con helfen" },
        { tr: "Lo sanno tutti.", note: "jeder, singolare: weiß" },
        { tr: "Sono tutti qui.", note: "alle, plurale: sind" },
        { tr: "Non ho sentito niente.", note: "nichts: nessun nicht" }
      ]
    },
    vocab: [
      "qualcuno",
      "nessuno",
      "ognuno, ciascuno (singolare)",
      "tutti (plurale)",
      "qualcosa",
      "niente",
      "la persona",
      "l'essere umano, la gente",
      "il problema",
      "la domanda",
      "la risposta",
      "il segreto"
    ],
    exercises: [
      {
        q: "Come dici «Non ho fatto niente»?",
        opts: [
          "Ich habe nichts gemacht.",
          "Ich habe niemanden gemacht.",
          "Ich habe etwas nicht gemacht."
        ],
        why: "<b>Nichts</b> contiene già la negazione. <i>Niemanden</i> si riferisce a persone, e <i>etwas nicht</i> vuol dire «qualcosa non l'ho fatto»."
      },
      {
        q: "Quale frase è corretta?",
        opts: ["Jeder weiß das.", "Jeder wissen das.", "Jeder wisst das."],
        why: "<b>Jeder</b> è singolare: il verbo è alla 3ª persona singolare, <i>weiß</i>."
      },
      {
        q: "Quali frasi sono corrette?",
        opts: [
          "Ich kenne niemanden hier.",
          "Hat jemand Fragen?",
          "Alle sind da.",
          "Jeder sind da.",
          "Alle ist da."
        ],
        why: "Le prime tre sono giuste. <i>Jeder</i> è singolare, quindi la 4 ha il verbo plurale sbagliato; <i>alle</i> è plurale, quindi la 5 ha il verbo singolare sbagliato."
      },
      {
        q: "Completa: «Ich habe ___ gesehen.» (non ho visto nessuno)",
        hint: "nessuno, accusativo",
        why: "<b>Niemanden</b>: accusativo con la desinenza; è corretto anche <i>niemand</i>. Nessun <i>nicht</i>."
      },
      {
        q: "Completa: «Ich habe ___ geholfen.» (a qualcuno)",
        hint: "qualcuno, dativo",
        why: "<b>Jemandem</b>: <i>helfen</i> vuole il dativo. È corretto anche <i>jemand</i> senza desinenza."
      },
      {
        q: "Completa: «___ weiß das.» (ognuno)",
        hint: "ognuno, singolare",
        why: "<b>Jeder</b>: singolare, con <i>weiß</i>. Se la frase avesse il plurale, servirebbe <i>alle</i>."
      },
      {
        q: "Completa: «Ich habe gestern ___ gegessen.» (niente)",
        hint: "niente",
        why: "<b>Nichts</b>: non cambia e non vuole <i>nicht</i>."
      },
      {
        q: "Completa la frase.",
        tr: "Non ho visto nessuno e non ho sentito niente.",
        why: "<i>Ich habe niemanden gesehen und nichts gehört</i>: ciascun pronome nega il proprio complemento, e il <i>non</i> italiano non si traduce con un <i>nicht</i> in più."
      },
      {
        tr: "Qualcuno ha visto i miei occhiali? No, nessuno li ha visti. Ognuno li cerca, ma non troviamo niente.",
        why: "In <i>jemand</i> e <i>jeder</i> la <b>j</b> si legge [j]; in <i>niemand</i> la <b>ie</b> è lunga [iː]; in <i>sucht</i> la <b>ch</b> è [x] e in <i>nichts</i> è [ç]; in <i>meine</i> la <b>ei</b> è [aɪ]."
      },
      {
        tr: "Non ho visto nessuno e non ho sentito niente.",
        why: "In <i>niemanden</i> la <b>ie</b> è lunga [iː]; in <i>ich</i> e <i>nichts</i> la <b>ch</b> è [ç]; in <i>gehört</i> la <b>ö</b> è lunga e arrotondata [øː]."
      }
    ]
  },
  "lesson:b1-u02-test": {
    theme: "Verifica",
    title: "Test: A cosa pensi?",
    objectives: [
      "verificare i verbi con preposizione, darauf e worauf, le frasi relative, jemand, niemand e jeder"
    ],
    theory: [
      {
        p: "Dieci domande sull'intera unità. Si supera con il 70%. Non riguardare le lezioni mentre rispondi: se non ricordi qualcosa, è meglio tornare a ripassare."
      }
    ],
    exercises: [
      {
        q: "Completa: «Ich warte ___ dich.»",
        hint: "aspettare",
        why: "<b>Auf</b>: <i>warten auf + accusativo</i>."
      },
      {
        q: "Completa: «Sie hat Angst ___ dem Test.»",
        hint: "avere paura di",
        why: "<b>Vor</b>: <i>Angst haben vor + dativo</i>."
      },
      {
        q: "Completa la domanda: «___ denkst du? - An den Urlaub.»",
        hint: "domanda con an, per una cosa",
        why: "<b>Woran</b>: <i>denken an</i> + <i>wo</i> + <i>r</i> davanti alla vocale."
      },
      {
        q: "Completa: «Das ist der Mann, ___ ich gestern gesehen habe.»",
        hint: "maschile, accusativo",
        why: "<b>Den</b>: <i>Mann</i> è maschile e nella relativa è oggetto diretto."
      },
      {
        q: "Completa: «Das Buch, ___ ich gelesen habe, ist spannend.»",
        hint: "neutro, accusativo",
        why: "<b>Das</b>: neutro, oggetto diretto della relativa."
      },
      {
        q: "Completa: «Ich habe ___ gesehen.» (non ho visto nessuno)",
        hint: "nessuno, accusativo",
        why: "<b>Niemanden</b> (o <i>niemand</i>, anch'esso corretto), senza <i>nicht</i>."
      },
      {
        q: "Hai già ricevuto il regalo e ne sei contento. Quale frase è corretta?",
        opts: [
          "Ich freue mich über das Geschenk.",
          "Ich freue mich für das Geschenk.",
          "Ich freue mich mit das Geschenk."
        ],
        why: "<b>Sich freuen über + accusativo</b> per qualcosa che c'è già. Con <i>auf</i> si guarda avanti (<i>Ich freue mich auf das Geschenk</i> vuol dire che lo aspetti ancora)."
      },
      {
        q: "Scegli il pronome relativo: «Die Frau, mit ___ ich spreche, ist meine Chefin.»",
        opts: ["der", "die", "dem"],
        why: "<i>Frau</i> è femminile e <i>mit</i> vuole il dativo: <b>der</b>."
      },
      {
        tr: "Ti aspetto. La donna che è lì ha paura del test. Nessuno la aiuta.",
        why: "In <i>warte</i> la <b>w</b> è [v]; in <i>steht</i> la <b>st</b> iniziale è [ʃt]; in <i>niemand</i> la <b>ie</b> è lunga [iː]; in <i>dich</i> la <b>ch</b> è [ç]."
      },
      {
        tr: "Penso spesso al libro che ho letto.",
        why: "In <i>ich</i> la <b>ch</b> è [ç], in <i>Buch</i> è [x]; la <b>u</b> di <i>Buch</i> è lunga [uː]; in <i>gelesen</i> la <b>s</b> è sonora [z]."
      }
    ]
  },
  "unit:b1-u03": {
    title: "Uffici e contratti",
    grammarNote: "passivo (Vorgangspassiv) al presente e al Präteritum · genitivo e wegen, während, innerhalb · um ... zu e damit · registro formale"
  },
  "lesson:b1-u03-l1": {
    theme: "Burocrazia",
    title: "La registrazione di residenza",
    objectives: [
      "capire e formare il passivo con werden al presente e al Präteritum",
      "dire chi compie l'azione con von + dativo, quando serve",
      "distinguere il processo (wird geprüft) dal risultato (ist geprüft)",
      "affrontare lo sportello di un ufficio con il registro formale"
    ],
    theory: [
      {
        h: "Il passivo con werden",
        p: "Il passivo mette in primo piano <strong>ciò che succede</strong>, non chi lo fa. Si forma con <strong>werden</strong> coniugato e il <strong>participio II</strong> in fondo: <em>Das Formular wird ausgefüllt.</em> Al passato si usa il Präteritum di <em>werden</em>: <em>Das Formular wurde ausgefüllt.</em> L'oggetto della frase attiva diventa il soggetto: <em>Die Beamtin prüft den Ausweis</em> diventa <em>Der Ausweis wird geprüft.</em>"
      },
      {
        h: "Chi agisce: von + dativo",
        p: "Se serve dire chi compie l'azione, si aggiunge <strong>von + dativo</strong>: <em>Der Ausweis wird von der Beamtin geprüft.</em> Molto spesso l'agente non si dice, perché è ovvio o non importa: <em>Termine werden online vergeben.</em> Questo è il motivo per cui il passivo è tipico di moduli, avvisi e uffici."
      },
      {
        h: "Allo sportello: il registro formale",
        p: "In un ufficio si usa <strong>Sie</strong>, con <em>Herr</em> o <em>Frau</em> e il cognome. Una richiesta si formula con <em>ich möchte</em> o con il Konjunktiv II: <em>Ich möchte mich anmelden. Könnten Sie mir helfen?</em> L'<strong>Anmeldung</strong> è la registrazione del proprio indirizzo presso il Bürgeramt; di solito va fatta entro due settimane dal trasloco."
      },
      {
        contrast: "In italiano il passivo si forma con <em>essere</em> o <em>venire</em> (<em>il modulo è compilato, il modulo viene compilato</em>) e il participio concorda con il soggetto (<em>compilato, compilata, compilati</em>). In tedesco l'ausiliare è <strong>werden</strong> e il participio non cambia mai: <em>der Ausweis wird geprüft</em>, <em>die Karte wird geprüft</em>, <em>die Formulare werden geprüft</em>."
      },
      {
        trap: "<em>Das Formular wird ausgefüllt</em> mette in primo piano l'<strong>azione</strong> di compilare il modulo, senza dire che sia in corso proprio adesso: può essere una procedura abituale o un fatto futuro. <em>Das Formular ist ausgefüllt</em> è una frase corretta, ma descrive il <strong>risultato</strong>: il modulo è già compilato. Non sono la stessa cosa: con <em>wird</em> si guarda l'azione, con <em>ist</em> lo stato che ne resta. Allo stesso modo <em>wurde geprüft</em> ha <em>werden</em>, mentre <em>war geprüft</em> descrive uno stato passato."
      },
      {
        tip: "Per passare dall'attivo al passivo, cerca l'oggetto in accusativo: diventa il soggetto. <em>Man gibt das Formular ab</em> diventa <em>Das Formular wird abgegeben.</em> Con un verbo separabile il participio II resta unito: <em>abgegeben, ausgefüllt, angemeldet</em>."
      }
    ],
    grammar: {
      title: "Il passivo al presente e al Präteritum",
      note: "<b>werden</b> + <b>participio II</b> in fondo: <b>wird geprüft</b> (presente), <b>wurde geprüft</b> (Präteritum). L'agente, se c'è, è <b>von + dativo</b>.",
      table: {
        head: ["", "presente", "Präteritum"],
        rows: [
          ["ich", "werde geprüft", "wurde geprüft"],
          ["du", "wirst geprüft", "wurdest geprüft"],
          ["er/sie/es", "wird geprüft", "wurde geprüft"],
          ["wir", "werden geprüft", "wurden geprüft"],
          ["ihr", "werdet geprüft", "wurdet geprüft"],
          ["sie/Sie", "werden geprüft", "wurden geprüft"]
        ]
      },
      examples: [
        { tr: "Il modulo viene compilato.", note: "werden + participio II: l'azione in primo piano" },
        { tr: "La carta d'identità viene controllata.", note: "il participio non cambia con il genere" },
        { tr: "La registrazione è stata confermata ieri.", note: "wurde: Präteritum di werden" },
        { tr: "Gli appuntamenti vengono assegnati online.", note: "senza agente, plurale: werden" },
        { tr: "Il certificato è stato rilasciato subito.", note: "participio di un verbo separabile: ausgestellt" },
        { tr: "Il modulo viene controllato dall'impiegata.", note: "von + dativo: von der Beamtin" }
      ]
    },
    vocab: [
      "la registrazione di residenza",
      "l'ufficio dei servizi al cittadino",
      "il codice fiscale tedesco (identificativo fiscale)",
      "l'appuntamento",
      "il modulo",
      "il certificato",
      "il documento d'identità",
      "lo sportello",
      "registrare la residenza (sich anmelden)",
      "compilare",
      "consegnare",
      "rilasciare"
    ],
    exercises: [
      {
        q: "Quale frase significa «Il modulo viene compilato»?",
        opts: ["Das Formular wird ausgefüllt.", "Das Formular ist ausgefüllt.", "Das Formular hat ausgefüllt."],
        why: "<b>Wird ausgefüllt</b>: <i>werden</i> + participio II, il processo. <i>Ist ausgefüllt</i> è una frase corretta ma dice che il modulo è già compilato; <i>Das Formular hat ausgefüllt</i> è attiva: fa del modulo chi compila, e non ha senso."
      },
      {
        q: "Ieri la domanda è stata controllata. Quale frase?",
        opts: [
          "Der Antrag wurde gestern geprüft.",
          "Der Antrag wird gestern geprüft.",
          "Der Antrag werden gestern geprüft."
        ],
        why: "<b>Wurde geprüft</b>: Präteritum di <i>werden</i>. <i>Wird</i> è un presente, e <i>werden</i> non concorda con il singolare <i>Antrag</i>."
      },
      {
        q: "Quale frase è corretta?",
        opts: [
          "Der Ausweis wird von der Beamtin geprüft.",
          "Der Ausweis wird von die Beamtin geprüft.",
          "Der Ausweis wird von der Beamtin prüfen."
        ],
        why: "<b>Von + dativo</b>: <i>von der Beamtin</i>. Il participio II (<i>geprüft</i>) sta in fondo, non l'infinito."
      },
      {
        q: "Completa: «Das Formular ___ ausgefüllt.»",
        hint: "werden, presente",
        why: "<b>Wird</b>: soggetto singolare, passivo di processo al presente."
      },
      {
        q: "Completa: «Der Pass ___ gestern ausgestellt.»",
        hint: "werden, Präteritum",
        why: "<b>Wurde</b>: il suggerimento chiede il Präteritum di <i>werden</i>, quindi <i>wurde</i>. <i>Gestern</i> da solo non basta: il passivo al Perfekt (<i>ist ... ausgestellt worden</i>) è un'altra forma, qui non richiesta."
      },
      {
        q: "Completa la frase.",
        tr: "Il modulo viene consegnato allo sportello (passivo al presente).",
        why: "<i>Das Formular wird am Schalter abgegeben.</i> <i>Wird</i> + participio II <i>abgegeben</i>, che resta unito."
      },
      {
        q: "Abbina ogni frase al suo significato.",
        pairs: [
          "Il modulo viene compilato.",
          "La carta d'identità è stata controllata.",
          "L'appuntamento viene assegnato.",
          "Il certificato è stato rilasciato."
        ]
      },
      {
        q: "Traduci: «La domanda viene controllata.»",
        why: "<i>Der Antrag wird geprüft</i>: <i>werden</i> + participio II. Va bene anche <i>überprüft</i>."
      },
      {
        tr: "Buongiorno, vorrei registrare la mia residenza. Il modulo viene consegnato allo sportello. Il documento viene controllato e il certificato viene rilasciato subito.",
        why: "In <i>möchte</i> la <b>ö</b> è arrotondata e la <b>ch</b> è [ç]; in <i>Schalter</i> la <b>sch</b> è [ʃ]; in <i>Ausweis</i> la <b>au</b> è [aʊ] e la <b>w</b> è [v]; in <i>geprüft</i> la <b>ü</b> è arrotondata."
      },
      {
        tr: "Buongiorno, vorrei registrare la mia residenza. Il modulo è già stato compilato.",
        why: "In <i>ich</i> la <b>ch</b> è [ç]; in <i>schon</i> la <b>sch</b> è [ʃ]; in <i>wurde</i> la <b>w</b> è [v]; in <i>ausgefüllt</i> la <b>ü</b> è arrotondata."
      }
    ]
  },
  "lesson:b1-u03-l2": {
    theme: "Banca e affitto",
    title: "Banca e contratto d'affitto",
    objectives: [
      "usare il genitivo per dire a chi appartiene qualcosa",
      "riconoscere le desinenze -(e)s al maschile e al neutro, e -(e)n dei maschili deboli",
      "usare wegen, während e innerhalb con il genitivo",
      "parlare allo sportello di una banca in modo formale"
    ],
    theory: [
      {
        h: "Il genitivo: il secondo caso",
        p: "Il <strong>genitivo</strong> indica il possesso o la relazione, e sta <strong>dopo</strong> il nome a cui si riferisce: <em>der Vertrag des Vermieters</em>, <em>die Höhe der Miete</em>. L'articolo cambia: maschile e neutro <strong>des</strong>, femminile e plurale <strong>der</strong>. Al maschile e al neutro la maggior parte dei nomi prende anche <strong>-s</strong> o <strong>-es</strong>: <em>des Vermieters, des Vertrags, des Hauses</em>. I maschili deboli prendono <strong>-(e)n</strong>: <em>des Kunden, des Studenten</em>."
      },
      {
        h: "wegen, während, innerhalb",
        p: "Alcune preposizioni vogliono il genitivo: <strong>wegen</strong> (a causa di), <strong>während</strong> (durante), <strong>innerhalb</strong> (entro, all'interno di). <em>Wegen des Umzugs brauche ich ein neues Konto. Während des Urlaubs habe ich viel gelesen. Innerhalb einer Woche bekommen Sie Ihre Karte.</em> Nel parlato dopo <em>wegen</em> si sente spesso anche il dativo; nei testi scritti e negli uffici il genitivo è la forma attesa."
      },
      {
        h: "Nomi propri e von + dativo",
        p: "Con un <strong>nome proprio</strong> il genitivo prende <em>-s</em> e sta <strong>prima</strong> del nome, senza apostrofo: <em>Annas Konto</em>. Se il nome finisce in sibilante (<em>-s, -x, -z, -ß</em>) si mette solo l’apostrofo: <em>Hans’ Konto, Max’ Konto</em>. Nel parlato si sostituisce spesso con <strong>von + dativo</strong>: <em>das Konto von meinem Bruder</em>."
      },
      {
        contrast: "L'italiano dice il possesso con <em>di</em>: <em>il contratto del padrone di casa, il conto di mio fratello</em>, e la preposizione non cambia. In tedesco è l'articolo a segnare il caso, e il nome del possessore sta dopo: <em>der Vertrag des Vermieters</em>.  Solo con i nomi propri il possessore va davanti: <em>Annas Konto</em>."
      },
      {
        trap: "<em>Während</em> può essere anche una congiunzione, e allora il verbo va in fondo: <em>Während ich arbeite, ...</em>. Come preposizione (<em>während des Urlaubs</em>) regge il genitivo e non ha un verbo coniugato dopo di sé. Al femminile il nome non cambia: <em>die Höhe der Miete</em>."
      },
      {
        tip: "Allo sportello della banca usa <em>Sie</em>: <em>Ich möchte ein Konto eröffnen. Könnten Sie mir bitte das Formular geben?</em> Il registro formale non richiede parole difficili, ma frasi complete e il verbo al posto giusto."
      }
    ],
    grammar: {
      title: "Il genitivo e wegen, während, innerhalb",
      note: "Genitivo: <b>des</b> (m. e n.) + nome in <b>-(e)s</b> (i maschili deboli: <b>-(e)n</b>, <i>des Kunden</i>), <b>der</b> (f. e plurale). Sta <b>dopo</b> il nome posseduto. Con <b>wegen, während, innerhalb</b>.",
      table: {
        head: ["", "m.", "f.", "n.", "plurale"],
        rows: [
          ["articolo", "des", "der", "des", "der"],
          ["esempio", "des Vermieters", "der Miete", "des Kontos", "der Mieter"]
        ]
      },
      examples: [
        { tr: "Questo è il contratto del padrone di casa.", note: "des Vermieters: maschile, nome in -s" },
        { tr: "L'importo dell'affitto è nel contratto.", note: "der Miete: femminile, il nome non cambia" },
        { tr: "A causa del trasloco mi serve un nuovo conto.", note: "wegen + genitivo: des Umzugs" },
        { tr: "Durante le vacanze ho letto molto.", note: "während + genitivo: des Urlaubs" },
        { tr: "Entro una settimana riceve la carta.", note: "innerhalb + genitivo: einer Woche" },
        { tr: "Il conto di Anna è presso un'altra banca.", note: "nome proprio: Annas, prima del nome" }
      ]
    },
    vocab: [
      "il contratto d'affitto",
      "il conto",
      "l'affitto",
      "il padrone di casa (il locatore)",
      "l'inquilino (il conduttore)",
      "la cauzione",
      "la disdetta",
      "il termine",
      "il bonifico",
      "aprire (un conto)",
      "firmare",
      "fare un bonifico"
    ],
    exercises: [
      {
        q: "Quale frase è corretta?",
        opts: [
          "Die Höhe der Miete steht im Vertrag.",
          "Die Höhe den Miete steht im Vertrag.",
          "Die Höhe Miete steht im Vertrag."
        ],
        why: "<b>Der Miete</b>: <i>Miete</i> è femminile e il genitivo femminile ha <i>der</i>. <i>Den</i> non è una forma del singolare femminile, e senza articolo manca il caso."
      },
      {
        q: "Completa: «Das ist der Vertrag ___ Vermieters.»",
        hint: "genitivo maschile",
        why: "<b>Des</b>: genitivo maschile, e il nome prende <i>-s</i> (<i>des Vermieters</i>)."
      },
      {
        q: "Completa: «Die Höhe ___ Miete steht im Vertrag.»",
        hint: "genitivo femminile",
        why: "<b>Der</b>: genitivo femminile singolare. Il nome <i>Miete</i> non cambia."
      },
      {
        q: "Completa la frase.",
        tr: "Durante le vacanze ho letto molto.",
        why: "<i>Während des Urlaubs habe ich viel gelesen.</i> <i>Während</i> come preposizione regge il genitivo: <i>des Urlaubs</i>."
      },
      {
        q: "Abbina ogni espressione al suo significato.",
        pairs: ["l'auto del padre", "a causa del tempo", "durante le vacanze", "entro una settimana"]
      },
      {
        q: "Metti in ordine le parole.",
        tr: "A causa del trasloco mi serve un nuovo conto.",
        why: "<i>Wegen des Umzugs brauche ich ein neues Konto.</i> Va bene anche <i>Ich brauche wegen des Umzugs ein neues Konto</i>. Nella prima il verbo <i>brauche</i> è in seconda posizione dopo il gruppo <i>Wegen des Umzugs</i>."
      },
      {
        q: "Traduci: «Questo è il conto di mio fratello.»",
        why: "<i>Das ist das Konto meines Bruders</i>: genitivo maschile con <i>meines</i> e <i>-s</i> sul nome. Nel parlato va bene anche <i>das Konto von meinem Bruder</i>."
      },
      {
        q: "Sei in banca e parli con un impiegato.",
        setting: "Vuoi aprire un conto e usi il registro formale.",
        lines: [
          { tr: "Buongiorno. Cosa posso fare per Lei?" },
          { tr: "Rispondi: vorresti aprire un conto.", answerTr: "Buongiorno, vorrei aprire un conto." },
          { tr: "Volentieri. Ha con sé anche una copia del contratto d'affitto?" },
          { tr: "Rispondi: certo, a causa del trasloco hai tutto con te.", answerTr: "Certo. A causa del trasloco ho tutto con me." },
          { tr: "Perfetto. Entro una settimana riceve la carta." },
          { tr: "Chiedi se la carta viene spedita per posta.", answerTr: "La carta viene spedita per posta?" }
        ]
      },
      {
        tr: "Buongiorno, vorrei aprire un conto. Ecco il contratto d'affitto. A causa del trasloco mi serve un nuovo conto. Entro una settimana ricevo la carta.",
        why: "In <i>eröffnen</i> la <b>ö</b> è arrotondata; in <i>Mietvertrag</i> la <b>ie</b> è lunga [iː] e la <b>v</b> è [f]; in <i>Wegen</i> la <b>W</b> è [v]; in <i>Woche</i> la <b>ch</b> dopo <b>o</b> è [x]."
      },
      {
        tr: "L'affitto viene pagato con bonifico il primo del mese.",
        why: "In <i>Miete</i> la <b>ie</b> è lunga [iː]; in <i>überwiesen</i> la <b>ü</b> è arrotondata, la <b>w</b> è [v] e la <b>s</b> tra due vocali è sonora [z]."
      }
    ]
  },
  "lesson:b1-u03-l3": {
    theme: "Reclami",
    title: "Mi lamento, affinché ...",
    objectives: [
      "dire lo scopo con um ... zu quando il soggetto è lo stesso",
      "dire lo scopo con damit, soprattutto quando i soggetti sono diversi",
      "formulare un reclamo in modo educato con il Konjunktiv II",
      "non confondere damit (scopo) e weil (causa)"
    ],
    theory: [
      {
        h: "um ... zu: lo scopo con lo stesso soggetto",
        p: "Per dire <strong>a che scopo</strong> si fa qualcosa, quando il soggetto è lo stesso nelle due parti, si usa <strong>um ... zu</strong> con l'infinito in fondo: <em>Ich rufe an, um mich zu beschweren.</em> Con un verbo separabile <em>zu</em> va in mezzo: <em>Ich gehe zum Bürgeramt, um mich anzumelden.</em> Prima di <em>um</em> c'è sempre la virgola."
      },
      {
        h: "damit: lo scopo con un verbo coniugato",
        p: "<strong>Damit</strong> esprime lo scopo e introduce una frase con il verbo coniugato in fondo, all'indicativo. È possibile con soggetti diversi (<em>Ich schicke ein Foto, damit er den Schaden sieht.</em>) e con lo stesso soggetto (<em>..., damit ich pünktlich bin</em>). Con soggetti diversi <em>um ... zu</em> non è possibile; con lo stesso soggetto <em>um ... zu</em> è la forma più naturale."
      },
      {
        h: "Un reclamo educato",
        p: "In un reclamo il tono conta: il Konjunktiv II ammorbidisce una richiesta. <em>Könnten Sie das bitte reparieren? Ich würde gern mit Ihrem Chef sprechen. Wir hätten gern eine schnelle Lösung.</em> Una richiesta all'imperativo (<em>Reparieren Sie das!</em>) suona molto più dura."
      },
      {
        contrast: "L'italiano usa <em>per + infinito</em> (<em>chiamo per lamentarmi</em>) e, con soggetti diversi, <em>affinché</em> o <em>perché</em> con il <strong>congiuntivo</strong> (<em>ti mando una foto perché tu veda</em>). Il tedesco usa <em>um ... zu</em> e <em>damit</em> con l'<strong>indicativo</strong>: <em>damit er den Schaden sieht</em>. Inoltre <em>perché</em> italiano è sia causale sia finale, mentre in tedesco sono due parole diverse."
      },
      {
        trap: "<em>Weil</em> dà la causa, <em>damit</em> lo scopo: <em>Ich rufe an, weil die Heizung kaputt ist</em> (motivo) e <em>Ich rufe an, damit jemand sie repariert</em> (scopo). Con <em>um</em> da solo non si può unire una frase con un altro soggetto: <em>Ich rufe an, um der Handwerker kommt</em> è sbagliato. Lo scopo espresso con un nome può usare <em>für</em> + accusativo (<em>Ich lerne für die Prüfung</em>) oppure <em>zu</em> + dativo (<em>zur Anmeldung</em>, <em>zur Reparatur</em>): la scelta dipende dalla costruzione."
      },
      {
        tip: "Prima di scegliere, chiediti: chi compie le due azioni? Se è la stessa persona, <em>um ... zu</em> è più naturale (<em>damit</em> resta possibile); se sono persone diverse, serve <em>damit</em>. E se parli con un ufficio o con un'azienda, apri con <em>Guten Tag</em> e usa <em>Sie</em>."
      }
    ],
    grammar: {
      title: "La finale: um ... zu e damit",
      note: "Scopo: <b>um ... zu</b> + infinito (stesso soggetto, forma più naturale) oppure <b>damit</b> + verbo coniugato in fondo, all'indicativo (stesso soggetto o soggetti diversi).",
      table: {
        head: ["costruzione", "quando", "esempio"],
        rows: [
          ["um ... zu + infinito", "stesso soggetto", "Ich rufe an, um mich zu beschweren."],
          ["damit + verbo in fondo", "stesso soggetto o soggetti diversi", "Ich schicke ein Foto, damit er den Schaden sieht."],
          ["weil + verbo in fondo", "causa, non scopo", "Ich rufe an, weil die Heizung kaputt ist."]
        ]
      },
      examples: [
        { tr: "Chiamo per lamentarmi.", note: "um ... zu, stesso soggetto: ich" },
        { tr: "Vado all'ufficio per registrare la residenza.", note: "verbo separabile: um mich anzumelden" },
        { tr: "Mando una foto affinché lui veda il danno.", note: "damit: scopo, due soggetti (ich e er)" },
        { tr: "Potrebbe ripararlo, per favore?", note: "Konjunktiv II di können: richiesta educata" },
        { tr: "Vorrei parlare con il Suo capo.", note: "würde gern + infinito" },
        { tr: "Vorremmo una soluzione rapida.", note: "hätten gern: Konjunktiv II di haben" }
      ]
    },
    vocab: [
      "il reclamo",
      "il difetto",
      "il danno",
      "la riparazione",
      "l'artigiano (l'operaio che ripara)",
      "la fattura (il conto da pagare)",
      "la garanzia",
      "la sostituzione, il sostituto",
      "lamentarsi",
      "riparare",
      "sostituire",
      "urgente"
    ],
    exercises: [
      {
        q: "Completa: «Ich rufe an, ___ mich zu beschweren.»",
        opts: ["um", "damit", "weil"],
        why: "<b>Um</b>: stesso soggetto (<i>ich</i>) e infinito con <i>zu</i>. <i>Damit</i> vuole un verbo coniugato, <i>weil</i> dà la causa."
      },
      {
        q: "Completa per esprimere lo scopo: «Ich schicke ein Foto, ___ der Vermieter den Schaden sieht.» (Mando una foto affinché il proprietario veda il danno.)",
        opts: ["damit", "um", "weil"],
        why: "<b>Damit</b>: i soggetti sono diversi (<i>ich</i> e <i>der Vermieter</i>) e c'è un verbo coniugato. <i>Um</i> non si usa con un soggetto nuovo. <i>Weil</i> darebbe una causa («perché il proprietario vede il danno»), non lo scopo richiesto."
      },
      {
        q: "Completa: «Ich schreibe eine E-Mail, ___ der Vermieter die Heizung repariert.»",
        hint: "scopo, soggetti diversi",
        why: "<b>Damit</b>: scopo con un verbo coniugato in fondo (qui soggetti diversi)."
      },
      {
        q: "Completa: «Ich rufe an, um mich ___ beschweren.»",
        hint: "um ... ?",
        why: "<b>Zu</b>: <i>um ... zu + infinito</i>, con <i>zu</i> subito prima del verbo."
      },
      {
        q: "Completa la frase.",
        tr: "Vado all'ufficio per registrare la residenza (sich anmelden).",
        why: "<i>Ich gehe zum Bürgeramt, um mich anzumelden.</i> Con il verbo separabile <i>anmelden</i> la <i>zu</i> va in mezzo: <i>anzumelden</i>."
      },
      {
        q: "Abbina ogni espressione alla sua funzione.",
        pairs: [
          "scopo, infinito (stesso soggetto)",
          "scopo, verbo coniugato in fondo",
          "indica la causa",
          "indica lo scopo con un sostantivo"
        ]
      },
      {
        q: "Metti in ordine le parole (comincia con Ich).",
        tr: "Mando una foto affinché lui veda il danno.",
        why: "<i>Ich schicke ein Foto, damit er den Schaden sieht.</i> Dopo <i>damit</i> il verbo coniugato <i>sieht</i> va in fondo."
      },
      {
        q: "Traduci: «Chiamo per lamentarmi.» (usa anrufen e um ... zu)",
        why: "<i>Ich rufe an, um mich zu beschweren</i>: <i>anrufen</i> è separabile, e dopo <i>um</i> il riflessivo <i>mich</i> resta davanti all'infinito."
      },
      {
        tr: "Buongiorno, chiamo per lamentarmi. Il riscaldamento è rotto. Mando una foto affinché Lei veda il danno. Potrebbe mandare qualcuno al più presto, per favore?",
        why: "In <i>beschweren</i> la <b>sch</b> è [ʃ] e la <b>w</b> è [v]; in <i>Heizung</i> la <b>z</b> è [ts]; in <i>Könnten</i> la <b>ö</b> è arrotondata; in <i>schicke</i> la <b>sch</b> è [ʃ] e la <b>ck</b> segnala una vocale breve."
      },
      {
        tr: "Vorrei parlare con il Suo capo per lamentarmi.",
        why: "In <i>würde</i> la <b>ü</b> è arrotondata; in <i>Chef</i> la <b>ch</b> è [ʃ] (parola di origine francese); in <i>sprechen</i> la <b>sp</b> a inizio sillaba si legge [ʃp] e la <b>ch</b> è [ç]."
      }
    ]
  },
  "lesson:b1-u03-l4": {
    theme: "Lavoro",
    title: "Il contratto di lavoro",
    objectives: [
      "leggere le clausole principali di un contratto di lavoro",
      "usare il passivo e il genitivo insieme in frasi formali",
      "riconoscere periodo di prova, preavviso e stipendio",
      "capire la differenza tra contratto a termine e indeterminato"
    ],
    theory: [
      {
        h: "Il linguaggio di un contratto",
        p: "Un contratto di lavoro usa molto il <strong>passivo</strong> e il <strong>genitivo</strong>, perché descrive regole senza dire chi le applica: <em>Das Gehalt wird am Ende des Monats bezahlt. Die Probezeit des Arbeitnehmers dauert sechs Monate. Die Kündigungsfrist des Vertrags beträgt vier Wochen.</em> Chi riconosce <em>wird ... bezahlt</em> e <em>des ... s</em> capisce già la struttura della frase."
      },
      {
        h: "Passivo e genitivo nella stessa frase",
        p: "Le due strutture si combinano: <em>Der Vertrag wurde von beiden Seiten unterschrieben.</em> (passivo con agente) e <em>Die Arbeitszeit des Mitarbeiters wird im Vertrag genannt.</em> (genitivo e passivo). Nel passivo il participio II sta in fondo, e il genitivo segue il nome a cui si riferisce."
      },
      {
        h: "Parole che tornano",
        p: "<strong>Arbeitgeber</strong> è chi assume, <strong>Arbeitnehmer</strong> chi viene assunto. La <strong>Probezeit</strong> è il periodo iniziale durante il quale il rapporto si può sciogliere più facilmente; la <strong>Kündigungsfrist</strong> è il preavviso. Un contratto è <strong>befristet</strong> se ha una scadenza, <strong>unbefristet</strong> se è a tempo indeterminato."
      },
      {
        contrast: "In italiano <em>periodo di prova</em> e <em>termine di preavviso</em> sono espressioni formate con <em>di</em>, mentre in tedesco sono parole composte: <em>Probezeit, Kündigungsfrist</em>. Il genere segue l'ultimo elemento: <em>die Zeit</em> dà <em>die Probezeit</em>, <em>die Frist</em> dà <em>die Kündigungsfrist</em>. Nei composti compare spesso una piccola giunzione, per esempio la <em>-s-</em> di <em>Arbeitsvertrag</em>."
      },
      {
        trap: "Non confondere il Präteritum del passivo con il Präteritum attivo: <em>Er wurde eingestellt</em> (è stato assunto) e <em>Er stellte ein</em> (ha assunto, attivo) hanno soggetti con ruoli opposti. Controlla quindi chi compie l'azione. E con <em>des Arbeitnehmers</em> ricorda la <em>-s</em> del genitivo maschile."
      },
      {
        tip: "Quando leggi un contratto, sottolinea i verbi con <em>werden</em> e i gruppi con <em>des/der + nome</em>. Sono le due strutture che portano le regole, e il resto è quasi sempre vocabolario."
      }
    ],
    grammar: {
      title: "Passivo e genitivo nei contratti",
      note: "<b>werden</b> + participio II per le regole (<b>wird bezahlt</b>), <b>des/der + nome</b> per il possessore (<b>des Vertrags</b>).",
      table: {
        head: ["struttura", "esempio", "significato"],
        rows: [
          ["passivo presente", "Das Gehalt wird bezahlt.", "lo stipendio viene pagato"],
          ["passivo Präteritum", "Der Arbeitnehmer wurde eingestellt.", "il dipendente è stato assunto"],
          ["genitivo maschile", "die Probezeit des Arbeitnehmers", "il periodo di prova del dipendente"],
          ["genitivo femminile", "die Höhe der Miete", "l'importo dell'affitto"]
        ]
      },
      examples: [
        { tr: "Il contratto è stato firmato da entrambe le parti.", note: "passivo con agente: von beiden Seiten" },
        { tr: "Lo stipendio viene pagato alla fine del mese.", note: "passivo presente, des Monats" },
        { tr: "Il periodo di prova del dipendente dura sei mesi.", note: "genitivo maschile: des Arbeitnehmers" },
        { tr: "L'orario di lavoro è indicato nel contratto.", note: "passivo: wird ... genannt" },
        { tr: "Il dipendente è stato assunto a maggio.", note: "passivo Präteritum: wurde eingestellt" },
        { tr: "Il preavviso del contratto è di quattro settimane.", note: "genitivo maschile: des Vertrags" }
      ]
    },
    vocab: [
      "il contratto di lavoro",
      "lo stipendio",
      "il periodo di prova",
      "il datore di lavoro",
      "il dipendente (il lavoratore)",
      "il preavviso",
      "l'orario di lavoro",
      "il posto di lavoro",
      "dimettersi / recedere dal contratto (jemandem kündigen = licenziare qualcuno)",
      "assumere",
      "pagare",
      "a termine"
    ],
    exercises: [
      {
        q: "Quale frase è corretta?",
        opts: [
          "Das Gehalt wird am Ende des Monats bezahlt.",
          "Das Gehalt wird am Ende des Monats bezahlen.",
          "Das Gehalt wird am Ende der Monat bezahlt."
        ],
        why: "<b>Wird ... bezahlt</b> con il participio II in fondo, e <b>des Monats</b> al genitivo maschile. L'infinito <i>bezahlen</i> è sbagliato nel passivo, e <i>der Monat</i> non è un genitivo."
      },
      {
        q: "Ieri il contratto è stato firmato da entrambe le parti. Quale frase?",
        opts: [
          "Der Vertrag wurde gestern von beiden Seiten unterschrieben.",
          "Der Vertrag wird gestern von beiden Seiten unterschrieben.",
          "Der Vertrag hat gestern von beiden Seiten unterschrieben."
        ],
        why: "<b>Wurde ... unterschrieben</b>: passivo al Präteritum, con <i>von + dativo</i> per l'agente. <i>Hat</i> farebbe del contratto il soggetto che firma."
      },
      {
        q: "Completa: «Die Probezeit ___ dauert sechs Monate.»",
        opts: ["des Arbeitnehmers", "dem Arbeitnehmer", "den Arbeitnehmers"],
        why: "<b>Des Arbeitnehmers</b>: genitivo maschile singolare, con <i>des</i> e <i>-s</i> sul nome."
      },
      {
        q: "Completa: «Die Kündigungsfrist ___ Vertrags beträgt vier Wochen.»",
        hint: "genitivo maschile",
        why: "<b>Des</b>: <i>Vertrag</i> è maschile e il genitivo ha <i>des</i> e <i>-s</i>: <i>des Vertrags</i>."
      },
      {
        q: "Completa la frase.",
        tr: "Il dipendente è stato assunto a maggio (passivo al Präteritum).",
        why: "<i>Der Arbeitnehmer wurde im Mai eingestellt.</i> Passivo al Präteritum: <i>wurde</i> + participio II <i>eingestellt</i>, che resta unito."
      },
      {
        q: "Abbina ogni parola al suo significato.",
        pairs: ["il periodo di prova", "il preavviso", "il datore di lavoro", "lo stipendio"]
      },
      {
        q: "Metti in ordine le parole.",
        tr: "Il periodo di prova del dipendente dura sei mesi.",
        why: "<i>Die Probezeit des Arbeitnehmers dauert sechs Monate.</i> Il genitivo <i>des Arbeitnehmers</i> segue il nome <i>Probezeit</i>."
      },
      {
        q: "Traduci: «Lo stipendio viene pagato alla fine del mese.»",
        why: "<i>Das Gehalt wird am Ende des Monats bezahlt.</i> Vanno bene anche <i>am Monatsende</i> e <i>ausgezahlt</i>."
      },
      {
        tr: "Il contratto di lavoro è stato firmato ieri da entrambe le parti. Il periodo di prova dura sei mesi e lo stipendio viene pagato alla fine del mese. Il preavviso del contratto è di quattro settimane.",
        why: "In <i>Arbeitsvertrag</i> la <b>ei</b> è [aɪ] e la <b>v</b> è [f]; in <i>unterschrieben</i> la <b>sch</b> è [ʃ] e la <b>ie</b> è lunga [iː]; in <i>Probezeit</i> la <b>z</b> è [ts]."
      },
      {
        tr: "Lo stipendio del dipendente viene pagato alla fine del mese.",
        why: "In <i>Arbeitnehmers</i> la <b>ei</b> è [aɪ] e la <b>eh</b> allunga la vocale [eː]; in <i>Monatsende</i> la <b>o</b> è lunga [oː]; in <i>bezahlt</i> la <b>ah</b> allunga la vocale [aː]."
      }
    ]
  },
  "lesson:b1-u03-test": {
    theme: "Verifica",
    title: "Test: Uffici e contratti",
    objectives: [
      "verificare il passivo, il genitivo con wegen, während e innerhalb, um ... zu e damit"
    ],
    theory: [
      {
        p: "Dieci domande sull'intera unità. Si supera con il 70%. Non riguardare le lezioni mentre rispondi: se non ricordi qualcosa, è meglio tornare a ripassare."
      }
    ],
    exercises: [
      {
        q: "Completa: «Das Formular ___ am Schalter abgegeben.»",
        hint: "werden, presente",
        why: "<b>Wird</b>: passivo di processo al presente, soggetto singolare."
      },
      {
        q: "Completa: «Der Mietvertrag ___ gestern unterschrieben.»",
        hint: "werden, Präteritum",
        why: "<b>Wurde</b>: il suggerimento chiede il Präteritum di <i>werden</i>, quindi <i>wurde</i>. <i>Gestern</i> da solo non basta: il passivo al Perfekt (<i>ist ... unterschrieben worden</i>) è un'altra forma, qui non richiesta."
      },
      {
        q: "Completa: «Die Höhe ___ Miete steht im Vertrag.»",
        hint: "genitivo femminile",
        why: "<b>Der</b>: genitivo femminile singolare."
      },
      {
        q: "Completa: «Ich schicke ein Foto, ___ er den Schaden sieht.»",
        hint: "scopo, soggetti diversi",
        why: "<b>Damit</b>: <i>ich</i> e <i>er</i> sono soggetti diversi, e il verbo coniugato va in fondo."
      },
      {
        q: "Ieri il conto è stato aperto. Quale frase?",
        opts: [
          "Das Konto wurde gestern eröffnet.",
          "Das Konto wird gestern eröffnet.",
          "Das Konto haben gestern eröffnet."
        ],
        why: "<b>Wurde ... eröffnet</b>: passivo al Präteritum. <i>Wird</i> è un presente, e <i>haben</i> non concorda con <i>Konto</i>."
      },
      {
        q: "Quale frase è corretta?",
        opts: [
          "Während des Urlaubs bin ich nicht im Büro.",
          "Während der Urlaub bin ich nicht im Büro.",
          "Während des Urlaubs ich bin nicht im Büro."
        ],
        why: "<b>Während des Urlaubs</b>: preposizione con il genitivo, e il verbo <i>bin</i> subito dopo, in seconda posizione."
      },
      {
        q: "Completa: «Er schickt eine E-Mail, ___ der Chef Bescheid weiß.»",
        opts: ["damit", "um", "ohne"],
        why: "<b>Damit</b>: i soggetti sono diversi (<i>er</i> e <i>der Chef</i>) e il verbo coniugato va in fondo."
      },
      {
        q: "Abbina ogni espressione al suo significato.",
        pairs: [
          "Il modulo viene controllato.",
          "a causa del tempo",
          "scopo, infinito (stesso soggetto)",
          "scopo, verbo coniugato in fondo"
        ]
      },
      {
        tr: "Il modulo viene consegnato allo sportello. A causa del trasloco mi serve un conto. Chiamo perché qualcuno ripari il riscaldamento.",
        why: "In <i>Schalter</i> la <b>sch</b> è [ʃ]; in <i>Umzugs</i> la <b>z</b> è [ts]; in <i>Heizung</i> la <b>ei</b> è [aɪ] e la <b>z</b> è [ts]; in <i>repariert</i> la <b>ie</b> è lunga [iː]."
      },
      {
        tr: "Il contratto d'affitto è stato firmato e la cauzione viene versata con bonifico.",
        why: "In <i>Mietvertrag</i> la <b>ie</b> è lunga [iː] e la <b>v</b> è [f]; in <i>unterschrieben</i> la <b>sch</b> è [ʃ]; in <i>überwiesen</i> la <b>ü</b> è arrotondata."
      }
    ]
  },
  "unit:b1-u04": {
    title: "Opinioni e media",
    grammarNote: "dass nel discorso riferito · Präteritum e Plusquamperfekt nei testi scritti · nachdem e bevor · zwar ... aber, sowohl ... als auch · declinazione dell'aggettivo"
  },
  "lesson:b1-u04-l1": {
    theme: "Riferire",
    title: "Ha detto che ...",
    objectives: [
      "riferire ciò che qualcuno ha detto con una subordinata con dass",
      "adattare i pronomi al punto di vista di chi riferisce",
      "riferire una domanda con ob o con una parola interrogativa",
      "usare i verbi di comunicazione al Perfekt: gesagt, erzählt, berichtet, behauptet"
    ],
    theory: [
      {
        h: "Riferire con dass",
        p: "Per riferire ciò che qualcuno ha detto si usa un verbo di comunicazione (<em>sagen, erzählen, berichten, behaupten, meinen</em>) e una subordinata con <strong>dass</strong>. Il verbo coniugato va <strong>in fondo</strong>, e prima di <em>dass</em> c'è sempre la virgola: <em>Anna hat gesagt, dass sie keine Zeit hat.</em> Il verbo di comunicazione sta di solito al Perfekt (<em>hat gesagt, hat erzählt</em>) quando si racconta qualcosa a voce."
      },
      {
        h: "I pronomi cambiano con il punto di vista",
        p: "Chi riferisce parla da un altro punto di vista, quindi le persone si adattano. Anna dice <em>«Ich habe keine Zeit»</em>, e tu riferisci <em>Anna hat gesagt, dass <strong>sie</strong> keine Zeit hat.</em> Se qualcuno dice a te <em>«Ich helfe dir»</em>, tu riferisci <em>Er hat gesagt, dass er <strong>mir</strong> hilft.</em> Il soggetto va sempre espresso: in tedesco non si può lasciarlo sottinteso."
      },
      {
        h: "Domande e richieste riferite",
        p: "Una domanda sì/no diventa una subordinata con <strong>ob</strong>, una domanda con parola interrogativa mantiene quella parola, e il verbo va in fondo in entrambi i casi: <em>Sie hat gefragt, ob ich mitkomme. Er hat gefragt, wann der Zug kommt.</em> Una richiesta si riferisce di solito con <em>sollen</em>: <em>Sie hat gesagt, dass ich bald kommen soll.</em>"
      },
      {
        h: "Senza dass",
        p: "Dopo <em>sagen, meinen, glauben</em> si può anche tralasciare <em>dass</em>: allora il verbo resta in <strong>seconda posizione</strong>, come in una frase normale. <em>Sie hat gesagt, sie hat keine Zeit.</em> è corretta, ma è una scelta più colloquiale; con <em>dass</em> il verbo coniugato va invece in fondo: <em>..., dass sie keine Zeit hat.</em>"
      },
      {
        contrast: "L'italiano può lasciare il soggetto sottinteso (<em>ha detto che non ha tempo</em>) e spesso sposta i tempi indietro (<em>ha detto che veniva, che sarebbe venuto</em>). Il tedesco di solito richiede <strong>il soggetto espresso</strong> (<em>dass sie keine Zeit hat</em>), e quando il fatto vale ancora mantiene spesso il tempo del discorso originale: <em>Er hat gesagt, dass er kommt.</em> <em>dass er kommen würde</em> non è una semplice variante: secondo il contesto esprime un condizionale o un futuro visto dal passato."
      },
      {
        trap: "<em>dass</em> con due <em>s</em> è la congiunzione; <em>das</em> con una sola è articolo o pronome (<em>das Buch, das ich lese</em>). In una frase con <em>dass</em> il verbo coniugato va in fondo: <em>dass sie keine Zeit hat</em>, non <s>dass sie hat keine Zeit</s>. Il verbo in seconda posizione appartiene soltanto alla versione senza <em>dass</em>."
      },
      {
        tip: "Procedimento in tre passi: 1) scegli il verbo di comunicazione al Perfekt; 2) aggiungi la virgola e <em>dass</em> (o <em>ob</em> per le domande sì/no); 3) riscrivi la frase con le persone giuste e il verbo in fondo."
      }
    ],
    grammar: {
      title: "Dal discorso diretto al discorso riferito",
      note: "verbo di comunicazione al Perfekt + <b>dass</b> (affermazione) o <b>ob</b> (domanda sì/no) + verbo coniugato <b>in fondo</b>; i pronomi si adattano a chi riferisce.",
      table: {
        head: ["discorso diretto", "discorso riferito"],
        rows: [
          ["Anna: «Ich habe keine Zeit.»", "Anna hat gesagt, dass sie keine Zeit hat."],
          ["Tom: «Ich komme morgen.»", "Tom hat erzählt, dass er morgen kommt."],
          ["Anna und Tom: «Wir ziehen um.»", "Anna und Tom haben erzählt, dass sie umziehen."],
          ["Er: «Kommst du mit?»", "Er hat gefragt, ob ich mitkomme."],
          ["Sie: «Wann kommt der Zug?»", "Sie hat gefragt, wann der Zug kommt."]
        ]
      },
      examples: [
        { tr: "Anna ha detto che non ha tempo.", note: "ich diventa sie; verbo in fondo" },
        { tr: "Tom racconta che domani viene.", note: "presente, perché il fatto vale ancora" },
        { tr: "La notizia dice che i prezzi salgono.", note: "anche un testo può «dire»" },
        { tr: "Ha chiesto se vengo con lei.", note: "domanda sì/no: ob" },
        { tr: "Ha sostenuto di non aver visto niente.", note: "behaupten + dass; Perfekt nella subordinata" },
        { tr: "Ha detto che devo venire presto.", note: "richiesta riferita con sollen" }
      ]
    },
    vocab: [
      "la notizia",
      "la notizia breve, il comunicato",
      "l'affermazione, la tesi sostenuta",
      "la dichiarazione, la testimonianza",
      "il rapporto, il resoconto",
      "la voce, la diceria",
      "la risposta",
      "la domanda",
      "raccontare",
      "sostenere, affermare",
      "riferire",
      "rispondere"
    ],
    exercises: [
      {
        q: "Anna dice: «Ich habe keine Zeit.» Come lo riferisci?",
        opts: [
          "Anna sagt, dass sie keine Zeit hat.",
          "Anna sagt, dass ich keine Zeit habe.",
          "Anna sagt, dass sie hat keine Zeit."
        ],
        why: "<b>Sie</b> al posto di <i>ich</i>, e il verbo <i>hat</i> in fondo alla subordinata. <i>Ich</i> resterebbe la persona di chi parla, non di Anna."
      },
      {
        q: "Completa: «Tom hat gesagt, ___ er morgen kommt.»",
        hint: "congiunzione, affermazione",
        why: "<b>Dass</b>: introduce un'affermazione riferita e manda il verbo in fondo."
      },
      {
        q: "Completa: «Sie fragt, ___ du mitkommst.»",
        hint: "domanda sì/no riferita",
        why: "<b>Ob</b>: la domanda originale era «Kommst du mit?», sì o no."
      },
      {
        q: "Paul dice: «Ich bin müde.» Completa: «Paul sagt, dass ___ müde ist.»",
        hint: "pronome, 3ª persona maschile",
        why: "<b>Er</b>: Paul è un uomo, e chi riferisce non dice <i>ich</i>."
      },
      {
        q: "Completa: «Sie hat mir alles ___.»",
        hint: "erzählen, participio II",
        why: "<b>Erzählt</b>: <i>hat erzählt</i>, il Perfekt di <i>erzählen</i>. Il participio dei verbi deboli è <i>ge-</i> + tema + <i>-t</i>, ma <i>erzählen</i> comincia con <i>er-</i> e non prende <i>ge-</i>."
      },
      {
        q: "Completa la frase.",
        tr: "La notizia dice che i prezzi salgono.",
        why: "<i>Die Meldung sagt, dass die Preise steigen.</i> Dopo <i>dass</i> il verbo <i>steigen</i> va in fondo."
      },
      {
        q: "Abbina ogni frase al suo significato.",
        pairs: [
          "Sostiene di essere innocente.",
          "Ha chiesto se vengo.",
          "La notizia dice che nevica.",
          "Tom racconta che si trasferisce."
        ]
      },
      {
        q: "Traduci: «Anna ha detto che non ha tempo.»",
        why: "<i>Anna hat gesagt, dass sie keine Zeit hat.</i> Qui il presente <i>hat</i> indica che la mancanza di tempo è ancora attuale; non occorre cambiare automaticamente il tempo dopo <i>hat gesagt</i>. Va bene anche la versione senza <i>dass</i> con il verbo in seconda posizione: <i>Anna hat gesagt, sie hat keine Zeit.</i>"
      },
      {
        tr: "Hai già sentito la notizia? Anna ha raccontato che si trasferisce. Ha detto che l'appartamento è molto grande e ha chiesto se la aiutiamo.",
        why: "In <i>Nachricht</i> la prima <b>ch</b> è [x] (dopo <i>a</i>) e la seconda [ç] (dopo <i>i</i>); in <i>umzieht</i> la <b>z</b> è [ts] e la <b>ie</b> è lunga [iː]; in <i>sehr</i> la <b>e</b> è lunga."
      },
      {
        tr: "Il mio collega ha raccontato che domani mattina viene.",
        why: "In <i>früh</i> la <b>ü</b> è arrotondata e lunga; in <i>kommt</i> la <b>o</b> è breve; in <i>dass</i> la <b>a</b> è breve e la <b>ss</b> è [s]."
      }
    ]
  },
  "lesson:b1-u04-l2": {
    theme: "Stampa",
    title: "Leggere un articolo",
    objectives: [
      "riconoscere e usare il Präteritum dei verbi deboli, forti e misti nei testi scritti",
      "formare il Plusquamperfekt con hatte o war e il participio II",
      "usare nachdem con il Plusquamperfekt e bevor",
      "capire come un testo di giornale ordina i fatti nel tempo"
    ],
    theory: [
      {
        h: "Il Präteritum nello scritto",
        p: "Nei testi scritti che raccontano fatti passati (articoli, resoconti, romanzi) il tempo narrativo di norma è il <strong>Präteritum</strong>; nella conversazione si usa più spesso il Perfekt. I verbi <strong>deboli</strong> prendono <em>-te</em> (<em>meldete, machte</em>), quelli <strong>forti</strong> cambiano la vocale del tema (<em>schrieb, ging, las</em>) e non hanno desinenza alla 1ª e alla 3ª persona singolare. I verbi <strong>misti</strong> (<em>dachte, brachte</em>) cambiano il tema ma prendono le desinenze deboli. Nel parlato <em>sein, haben</em> e i modali sono molto frequenti al Präteritum (<em>war, hatte, konnte</em>)."
      },
      {
        h: "Il Plusquamperfekt: prima di un altro fatto passato",
        p: "Si forma con l'ausiliare al Präteritum, <strong>hatte</strong> o <strong>war</strong>, e il participio II in fondo: <em>Er hatte lange recherchiert. Der Zug war schon abgefahren.</em> L'ausiliare è lo stesso del Perfekt (<em>haben</em> o <em>sein</em>). Serve a dire che un fatto è accaduto <strong>prima</strong> di un altro: <em>Die Nachricht stand in der Zeitung, aber niemand hatte sie gelesen.</em>"
      },
      {
        h: "nachdem e bevor",
        p: "<strong>nachdem</strong> (dopo che) introduce una subordinata con il verbo in fondo e, se la principale è al Präteritum, il <strong>Plusquamperfekt</strong>: <em>Nachdem der Minister gesprochen hatte, gingen die Gäste nach Hause.</em> <strong>bevor</strong> (prima che) di solito ha lo stesso tempo della principale: <em>Bevor die Zeitung den Artikel veröffentlichte, prüfte die Redaktion die Quelle.</em> Con la subordinata in testa, la principale comincia con il verbo coniugato."
      },
      {
        contrast: "L'italiano con lo stesso soggetto usa spesso l'infinito: <em>dopo aver parlato, il ministro è uscito; prima di pubblicare, la redazione ha controllato</em>. In tedesco, con <em>nachdem</em> e <em>bevor</em>, serve una <strong>subordinata con il suo soggetto</strong> e un verbo coniugato: <em>Nachdem der Minister gesprochen hatte, ...</em> Con soggetti diversi, <em>prima che</em> richiede il congiuntivo (<em>prima che tu parta</em>), mentre <em>dopo che</em> normalmente introduce l'indicativo (<em>dopo che il ministro aveva parlato, gli ospiti andarono a casa</em>); il tedesco usa l'indicativo in entrambi i casi: <em>bevor du gehst</em>."
      },
      {
        trap: "Non confondere <em>nachdem</em> con <em>nach</em>: <em>nach</em> è una preposizione e vuole un nome al dativo (<em>nach dem Essen</em>), <em>nachdem</em> vuole una frase con il verbo in fondo. Nella subordinata con <em>nachdem</em> i due verbi stanno insieme in fondo, con l'ausiliare per ultimo: <em>..., nachdem er gesprochen hatte</em>."
      },
      {
        tip: "Quando leggi un articolo, cerca prima i verbi al Präteritum: sono la storia. I verbi al Plusquamperfekt (<em>hatte ... gesagt, war ... gekommen</em>) segnalano ciò che è successo <em>prima</em> della storia. Con le tre forme di base (infinito, Präteritum, participio II) leggi la maggior parte degli articoli."
      }
    ],
    grammar: {
      title: "Präteritum e Plusquamperfekt",
      note: "<b>Präteritum</b> per la storia (<b>schrieb, ging, meldete</b>), <b>Plusquamperfekt</b> per ciò che è successo prima (<b>hatte geschrieben, war gegangen</b>); <b>nachdem</b> + Plusquamperfekt, <b>bevor</b>: spesso lo stesso tempo della principale; è possibile anche il Plusquamperfekt nella principale per sottolineare l'anteriorità.",
      table: {
        head: ["infinito", "Präteritum (er/sie)", "participio II"],
        rows: [
          ["schreiben", "schrieb", "geschrieben"],
          ["lesen", "las", "gelesen"],
          ["gehen", "ging", "gegangen"],
          ["sprechen", "sprach", "gesprochen"],
          ["erscheinen", "erschien", "erschienen"],
          ["melden", "meldete", "gemeldet"],
          ["denken", "dachte", "gedacht"],
          ["bringen", "brachte", "gebracht"]
        ]
      },
      examples: [
        { tr: "Il giornalista scrisse l'articolo la sera.", note: "Präteritum forte: schrieb" },
        { tr: "Il giornale usciva ogni mattina.", note: "erscheinen: erschien" },
        { tr: "Dopo che il ministro ebbe parlato, gli ospiti andarono a casa.", note: "nachdem + Plusquamperfekt" },
        { tr: "Prima che il giornale pubblicasse l'articolo, la redazione controllò la fonte.", note: "bevor + Präteritum" },
        { tr: "Aveva fatto a lungo ricerche prima di scrivere.", note: "Plusquamperfekt: hatte recherchiert" },
        { tr: "La notizia era sul giornale, ma nessuno l'aveva letta.", note: "hatte ... gelesen: prima della scena" }
      ]
    },
    vocab: [
      "l'articolo",
      "il giornale",
      "il titolo in prima pagina, il titolone",
      "il titolo (di un testo)",
      "il giornalista",
      "la fonte",
      "il lettore",
      "la redazione",
      "pubblicare",
      "uscire, essere pubblicato",
      "fare ricerche, documentarsi",
      "comunicare, dare notizia"
    ],
    exercises: [
      {
        q: "Scegli la forma giusta: «Der Journalist ___ den Artikel am Abend.»",
        opts: ["schrieb", "schreibte", "geschrieben"],
        why: "<b>Schrieb</b>: <i>schreiben</i> è un verbo forte, il Präteritum cambia la vocale. <i>Schreibte</i> non esiste; <i>geschrieben</i> è il participio e vuole un ausiliare."
      },
      {
        q: "Scegli l'ausiliare: «Nachdem die Redaktion die Quelle geprüft ___, veröffentlichte sie den Artikel.»",
        opts: ["hatte", "wurde", "war"],
        why: "<b>Hatte</b>: <i>prüfen</i> vuole <i>haben</i>, e con <i>nachdem</i> il tempo è il Plusquamperfekt perché la principale è al Präteritum."
      },
      {
        q: "Quale frase ha l'ordine giusto?",
        opts: [
          "Nachdem er den Artikel gelesen hatte, rief er die Redaktion an.",
          "Nachdem er hatte den Artikel gelesen, rief er die Redaktion an.",
          "Nachdem er den Artikel gelesen hatte, er rief die Redaktion an."
        ],
        why: "Nella subordinata il participio e l'ausiliare vanno in fondo (<i>gelesen hatte</i>); poi la principale comincia con il verbo coniugato (<i>rief er</i>)."
      },
      {
        q: "Completa: «Die Zeitung ___ jeden Morgen.»",
        hint: "erscheinen, Präteritum, 3ª persona",
        why: "<b>Erschien</b>: verbo forte, il Präteritum cambia la vocale del tema."
      },
      {
        q: "Completa: «Bevor er den Artikel ___, recherchierte er lange.»",
        hint: "schreiben, Präteritum, 3ª persona",
        why: "<b>Schrieb</b>: <i>bevor</i> qui ha lo stesso tempo della principale (spesso è così; il Plusquamperfekt nella principale sottolineerebbe l'anteriorità), e verbo forte senza desinenza."
      },
      {
        q: "Completa la frase.",
        tr: "Dopo che il ministro ebbe parlato, gli ospiti andarono a casa.",
        why: "<i>Nachdem der Minister gesprochen hatte, gingen die Gäste nach Hause.</i> Participio <i>gesprochen</i> e ausiliare <i>hatte</i> in fondo."
      },
      {
        q: "Abbina ogni frase al suo significato.",
        pairs: [
          "Leggeva il giornale.",
          "Scrisse un rapporto.",
          "L'articolo uscì ieri.",
          "La redazione controllò la fonte."
        ]
      },
      {
        q: "Traduci: «Il giornalista scrisse l'articolo ieri sera.»",
        why: "<i>Der Journalist schrieb den Artikel gestern Abend.</i> Nel parlato si dice anche <i>hat ... geschrieben</i>, e la frase può cominciare con <i>Gestern Abend</i>."
      },
      {
        tr: "Il giornale ha pubblicato l'articolo lunedì. Dopo che la redazione aveva controllato la fonte, il giornalista ha scritto il titolo. Molti lettori hanno letto l'articolo già al mattino.",
        why: "In <i>veröffentlichte</i> la <b>v</b> è [f] e la <b>ö</b> è arrotondata; in <i>Quelle</i> la <b>qu</b> è [kv]; in <i>Überschrift</i> la <b>sch</b> è [ʃ]; in <i>Leser</i> la <b>s</b> tra vocali è sonora [z]."
      },
      {
        tr: "Dopo che il giornalista aveva scritto il rapporto, andò a casa.",
        why: "In <i>Journalist</i> la <b>J</b> iniziale è [ʒ], come in francese <i>jour</i>; in <i>Bericht</i> la <b>ch</b> è [ç]; in <i>geschrieben</i> la <b>sch</b> è [ʃ]; in <i>Hause</i> la <b>au</b> è [aʊ]."
      }
    ]
  },
  "lesson:b1-u04-l3": {
    theme: "Radio e podcast",
    title: "zwar ... aber, sowohl ... als auch",
    objectives: [
      "concedere qualcosa e poi contrastarlo con zwar ... aber",
      "collegare due elementi con sowohl ... als auch",
      "mantenere l'ordine delle parole dopo aber",
      "parlare di radio, trasmissioni e podcast"
    ],
    theory: [
      {
        h: "zwar ... aber: è vero, ma",
        p: "<strong>zwar</strong> ammette un fatto e <strong>aber</strong> introduce il contrasto: <em>Die Sendung ist zwar lang, aber sie ist interessant.</em> <em>Zwar</em> sta di solito dopo il verbo, ma può anche aprire la frase: <em>Zwar ist die Sendung lang, aber sie ist interessant.</em> <em>Aber</em> è in posizione zero: il verbo della seconda frase resta nel suo posto normale, in seconda posizione dopo il soggetto."
      },
      {
        h: "sowohl ... als auch: sia ... sia",
        p: "<strong>sowohl ... als auch</strong> unisce due elementi dello stesso tipo: <em>Der Sender bringt sowohl Nachrichten als auch Musik.</em> Possono essere due soggetti, due oggetti, due complementi. Con due soggetti il verbo va al plurale: <em>Sowohl Anna als auch Tom hören den Podcast.</em> Di norma tra i due elementi non c'è la virgola."
      },
      {
        h: "Un'altra coppia: weder ... noch",
        p: "Per negare due elementi si usa <strong>weder ... noch</strong> (né ... né): <em>Ich habe weder Zeit noch Lust.</em> Il verbo è già negato dalla coppia, quindi non si aggiunge <em>nicht</em> né <em>kein</em>."
      },
      {
        contrast: "<em>zwar ... aber</em> non ha un equivalente fisso in italiano: si rende con <em>sì ... ma</em> o <em>è vero che ... ma</em>, mentre in tedesco la coppia è molto frequente. <em>sowohl ... als auch</em> corrisponde a <em>sia ... sia</em> o <em>sia ... che</em>, mentre <em>weder ... noch</em> a <em>né ... né</em>: in italiano <em>né ... né</em> accetta spesso un <em>non</em> davanti al verbo (<em>non ho né tempo né voglia</em>), in tedesco no: <em>Ich habe weder Zeit noch Lust.</em>"
      },
      {
        trap: "<em>aber</em> non cambia l'ordine della frase: <em>..., aber sie ist interessant</em>, non <s>aber ist sie interessant</s> e non <s>aber sie interessant ist</s>. Il verbo in fondo è tipico delle subordinate (<em>obwohl, weil, dass</em>), e <em>aber</em> non è una subordinante. Dopo <em>sowohl</em> la seconda parte è <em>als auch</em>, non <s>aber</s> né <s>und auch</s>."
      },
      {
        tip: "Se vuoi dare un peso minore a un fatto e maggiore al secondo, mettilo con <em>zwar</em> e fai arrivare l'opinione dopo <em>aber</em>: <em>Der Podcast ist zwar neu, aber er ist wirklich gut.</em> Il lettore capisce da dove viene la tua opinione."
      }
    ],
    grammar: {
      title: "zwar ... aber e sowohl ... als auch",
      note: "<b>zwar ... aber</b> concede e contrasta; <b>aber</b> è in posizione zero. <b>sowohl ... als auch</b> unisce due elementi; con due soggetti il verbo è al plurale.",
      table: {
        head: ["coppia", "significato", "esempio"],
        rows: [
          ["zwar ... aber", "è vero che ... ma", "Die Sendung ist zwar lang, aber sie ist interessant."],
          ["sowohl ... als auch", "sia ... sia", "Ich höre sowohl Radio als auch Podcasts."],
          ["weder ... noch", "né ... né", "Ich habe weder Zeit noch Lust."]
        ]
      },
      examples: [
        { tr: "La trasmissione è lunga, è vero, ma è interessante.", note: "aber: posizione zero, ordine normale" },
        { tr: "Il programma è buono, è vero, ma ho poco tempo.", note: "Zwar apre la frase: il verbo viene subito dopo" },
        { tr: "L'emittente trasmette sia notizie sia musica.", note: "sowohl ... als auch con due oggetti" },
        { tr: "Ascolto sia la radio sia i podcast.", note: "senza virgola tra i due elementi" },
        { tr: "Sia Anna sia Tom ascoltano il podcast.", note: "due soggetti: verbo al plurale" },
        { tr: "Non ha molto tempo, ma ascolta un podcast ogni giorno.", note: "zwar dopo il verbo, poi aber" }
      ]
    },
    vocab: [
      "la radio",
      "la trasmissione",
      "l'emittente",
      "il programma",
      "il podcast",
      "l'intervista",
      "il commento",
      "l'ascoltatore",
      "ascoltare, stare ad ascoltare",
      "accendere",
      "spegnere",
      "abbonarsi"
    ],
    exercises: [
      {
        q: "Quale frase ha l'ordine giusto?",
        opts: [
          "Die Sendung ist zwar lang, aber sie ist interessant.",
          "Die Sendung ist zwar lang, aber ist sie interessant.",
          "Die Sendung ist zwar lang, aber sie interessant ist."
        ],
        why: "Dopo <b>aber</b> il verbo resta in seconda posizione, dopo il soggetto: <i>aber sie ist interessant</i>. <i>Aber</i> non manda il verbo in fondo."
      },
      {
        q: "Quale coppia significa «sia ... sia»?",
        opts: ["sowohl ... als auch", "zwar ... aber", "weder ... noch"],
        why: "<b>Sowohl ... als auch</b>: unisce due elementi. <i>Zwar ... aber</i> concede e contrasta, <i>weder ... noch</i> nega."
      },
      {
        q: "Quale frase significa «Ascolto sia la radio sia i podcast»?",
        opts: [
          "Ich höre sowohl Radio als auch Podcasts.",
          "Ich höre zwar Radio als auch Podcasts.",
          "Ich höre sowohl Radio aber Podcasts."
        ],
        why: "<b>Sowohl ... als auch</b> è la coppia corretta. <i>Zwar</i> vuole <i>aber</i>, e <i>sowohl</i> vuole <i>als auch</i>: le due coppie non si mescolano."
      },
      {
        q: "Completa: «Das Programm ist ___ gut, aber ich habe wenig Zeit.»",
        hint: "concessione, prima di aber",
        why: "<b>Zwar</b>: ammette che il programma è buono, poi <i>aber</i> introduce il contrasto."
      },
      {
        q: "Completa: «Der Sender bringt sowohl Nachrichten ___ auch Musik.»",
        hint: "seconda parte della coppia",
        why: "<b>Als</b>: la coppia è <i>sowohl ... als auch</i>."
      },
      {
        q: "Completa con la coppia zwar ... aber: «Die Sendung ist ___ kurz, ___ sie ist sehr interessant.»",
        why: "<b>Zwar ... aber</b>: la prima parola ammette un fatto, la seconda introduce il contrasto."
      },
      {
        q: "Abbina ogni frase al suo significato.",
        pairs: [
          "L'intervista è breve, è vero, ma buona.",
          "Ascolto sia la radio sia i podcast.",
          "Il podcast va in onda ogni lunedì.",
          "Gli ascoltatori accendono la radio."
        ]
      },
      {
        q: "Metti in ordine le parole.",
        tr: "Il programma è lungo, è vero, ma è interessante.",
        why: "<i>Das Programm ist zwar lang, aber es ist interessant</i>: <i>zwar</i> dopo il verbo, poi <i>aber</i> e il verbo <i>ist</i> in seconda posizione."
      },
      {
        tr: "Ascolto la radio ogni mattina. L'emittente trasmette sia notizie sia musica. La trasmissione è lunga, è vero, ma è davvero interessante.",
        why: "In <i>höre</i> la <b>ö</b> è lunga e arrotondata; in <i>sowohl</i> la <b>s</b> è sonora [z] e la <b>w</b> è [v]; in <i>Nachrichten</i> la prima <b>ch</b> è [x] e la seconda [ç]; in <i>wirklich</i> la <b>w</b> è [v] e la <b>ch</b> finale è [ç]."
      },
      {
        tr: "Ascolto sia la radio sia i podcast, ma non ogni giorno.",
        why: "In <i>sowohl</i> la <b>s</b> è sonora [z] e la <b>w</b> è [v]; in <i>höre</i> la <b>ö</b> è arrotondata; in <i>nicht</i> la <b>ch</b> è [ç]; in <i>auch</i> la <b>ch</b> è [x], dopo <i>au</i>."
      }
    ]
  },
  "lesson:b1-u04-l4": {
    theme: "Discussione",
    title: "Difendere la propria opinione",
    objectives: [
      "usare le desinenze dell'aggettivo dopo l'articolo determinativo, dopo ein e senza articolo",
      "esprimere accordo e disaccordo con formule fisse",
      "costruire un argomento con zwar ... aber e sowohl ... als auch",
      "leggere e usare aggettivi con desinenza in testi di opinione"
    ],
    theory: [
      {
        h: "Le tre serie di desinenze",
        p: "Davanti al nome l'aggettivo prende una desinenza che dipende da ciò che lo precede. Dopo l'<strong>articolo determinativo</strong> (<em>der, die, das</em>, anche <em>dieser, jeder</em>) le desinenze sono quasi sempre <strong>-en</strong>; <strong>-e</strong> compare al nominativo singolare dei tre generi e all'accusativo del femminile e del neutro: <em>der gute Beitrag, die gute Idee, das gute Beispiel, die guten Argumente.</em>"
      },
      {
        h: "Dopo ein, kein e i possessivi",
        p: "Dove <em>ein</em> non ha desinenza, la porta l'aggettivo: <strong>ein guter</strong> Standpunkt (maschile nominativo), <strong>ein gutes</strong> Argument (neutro nominativo e accusativo). Per il resto valgono le stesse desinenze dell'articolo determinativo: <em>eine gute Idee, einen guten Beitrag, mit einem guten Argument.</em>"
      },
      {
        h: "Senza articolo",
        p: "Senza articolo l'aggettivo porta lui il segnale di genere e caso, con le desinenze dell'articolo: <em>interessante Kommentare</em> (plurale), <em>guter Rat, gutes Wetter, gute Laune</em>. Fa eccezione il genitivo maschile e neutro, dove l'aggettivo prende <strong>-en</strong> perché il nome ha già <em>-(e)s</em>: <em>guten Weines, guten Wetters</em>. Più aggettivi prima dello stesso nome hanno di solito la stessa desinenza: <em>ein klarer, gut begründeter Standpunkt.</em>"
      },
      {
        h: "Formule per discutere",
        p: "Per esprimere accordo: <em>Ich stimme dir zu. Das sehe ich auch so.</em> Per il disaccordo: <em>Da muss ich widersprechen. Ich bin anderer Meinung.</em> Per introdurre la tua posizione: <em>Ich bin der Meinung, dass ... Meiner Ansicht nach ...</em> Per riconoscere un punto e poi controbattere: <em>Das ist zwar richtig, aber ...</em>; per sommare ragioni: <em>Das hat sowohl Vorteile als auch Nachteile.</em>"
      },
      {
        contrast: "In italiano l'aggettivo concorda in genere e numero (<em>un buon argomento, una buona idea, buoni argomenti</em>) e di solito sta dopo il nome. In tedesco sta <strong>prima</strong> e porta anche il <strong>caso</strong>: <em>ein guter Standpunkt</em> (nominativo), <em>einen guten Standpunkt</em> (accusativo). L'aggettivo dopo <em>sein</em> invece non cambia: <em>Der Standpunkt ist gut.</em>"
      },
      {
        trap: "Dopo l'articolo determinativo non compare <em>-er</em>: <em>der gute Standpunkt</em>, non <s>der guter Standpunkt</s>. La desinenza <em>-er</em> o <em>-es</em> si mette dove l'articolo non la mostra: <em>ein guter Standpunkt</em>, <em>ein gutes Argument</em>. Chi sbaglia di solito applica la serie di <em>ein</em> a <em>der</em>, o viceversa."
      },
      {
        tip: "Per scegliere la desinenza chiediti: c'è un segnale di genere e caso prima dell'aggettivo? Se c'è (<em>der, die, dem, einer</em>), l'aggettivo prende <em>-e</em> o <em>-en</em>; se manca, lo mostra l'aggettivo."
      }
    ],
    grammar: {
      title: "L'aggettivo dopo l'articolo determinativo",
      note: "dopo <b>der, die, das</b>: <b>-e</b> al nominativo singolare e all'accusativo del femminile e del neutro, <b>-en</b> altrove. Dopo <b>ein</b> la desinenza <b>-er / -es</b> compare dove <i>ein</i> non la mostra.",
      table: {
        head: ["", "m.", "f.", "n.", "plurale"],
        rows: [
          ["nominativo", "der gute Beitrag", "die gute Idee", "das gute Beispiel", "die guten Argumente"],
          ["accusativo", "den guten Beitrag", "die gute Idee", "das gute Beispiel", "die guten Argumente"],
          ["dativo", "dem guten Beitrag", "der guten Idee", "dem guten Beispiel", "den guten Argumenten"],
          ["genitivo", "des guten Beitrags", "der guten Idee", "des guten Beispiels", "der guten Argumente"]
        ]
      },
      examples: [
        { tr: "È un buon punto di vista.", note: "ein + maschile nominativo: -er" },
        { tr: "Ho un buon argomento.", note: "ein + neutro accusativo: -es" },
        { tr: "Con il buon argomento convince tutti.", note: "dativo neutro dopo dem: -en" },
        { tr: "Scrive un lungo contributo.", note: "einen + maschile accusativo: -en" },
        { tr: "Leggo volentieri commenti interessanti.", note: "senza articolo, plurale: -e" },
        { tr: "Sostiene un'opinione chiara, ma ascolta anche.", note: "eine + femminile accusativo: -e" }
      ]
    },
    vocab: [
      "l'opinione, il parere",
      "l'argomento",
      "il punto di vista",
      "la discussione",
      "l'esempio",
      "il vantaggio",
      "lo svantaggio",
      "il contributo, l'intervento",
      "convincere",
      "contraddire, obiettare",
      "motivare, giustificare",
      "essere d'accordo"
    ],
    exercises: [
      {
        q: "Quale frase è corretta?",
        opts: [
          "Das ist ein guter Standpunkt.",
          "Das ist ein gute Standpunkt.",
          "Das ist ein guten Standpunkt."
        ],
        why: "<b>Ein guter Standpunkt</b>: maschile nominativo, e <i>ein</i> non ha desinenza, quindi la mostra l'aggettivo con <i>-er</i>."
      },
      {
        q: "Completa: «mit der ___ Idee»",
        opts: ["guten", "gute", "guter"],
        why: "<b>Guten</b>: dativo femminile dopo l'articolo determinativo, quindi <i>-en</i>."
      },
      {
        q: "Completa: «Ich lese einen ___ Beitrag.»",
        hint: "interessant, accusativo maschile dopo einen",
        why: "<b>Interessanten</b>: accusativo maschile dopo <i>einen</i>, quindi <i>-en</i>."
      },
      {
        q: "Completa: «Sie hat ein ___ Argument.»",
        hint: "stark, neutro accusativo dopo ein",
        why: "<b>Starkes</b>: neutro accusativo dopo <i>ein</i>, che non ha desinenza, quindi <i>-es</i>."
      },
      {
        q: "Completa la frase: «Mit dem ___ Beispiel ___ sie alle.»",
        why: "<b>Guten</b> (dativo neutro dopo <i>dem</i>) e <b>überzeugt</b> (presente, 3ª persona)."
      },
      {
        q: "Abbina ogni formula al suo significato.",
        pairs: [
          "Sono dell'opinione che ...",
          "Qui devo obiettare.",
          "Sono d'accordo con te.",
          "È un argomento forte."
        ]
      },
      {
        q: "Metti in ordine le parole.",
        tr: "Sono dell'opinione che sia un grande vantaggio.",
        why: "<i>Ich bin der Meinung, dass das ein großer Vorteil ist.</i> <i>Dass</i> manda il verbo <i>ist</i> in fondo, e <i>ein großer Vorteil</i> è maschile nominativo."
      },
      {
        q: "Traduci: «Ho letto un lungo articolo.»",
        why: "<i>Ich habe einen langen Artikel gelesen.</i> <i>Artikel</i> è maschile, accusativo: <i>einen langen</i>. Va bene anche il Präteritum: <i>Ich las einen langen Artikel.</i>"
      },
      {
        tr: "Sono dell'opinione che sia un buon piano. Ha sia vantaggi sia svantaggi, ma i vantaggi sono maggiori. Costa soldi, è vero, ma porta un buon risultato.",
        why: "In <i>Meinung</i> la <b>ei</b> è [aɪ]; in <i>Vorteile</i> la <b>V</b> è [f] e la <b>ei</b> è [aɪ]; in <i>Nachteile</i> la <b>ch</b> è [x]; in <i>größer</i> la <b>ö</b> è lunga e arrotondata e la <b>ß</b> è [s]."
      },
      {
        tr: "È un argomento forte, ma io sono di un altro parere.",
        why: "In <i>starkes</i> la <b>st</b> iniziale è [ʃt]; in <i>Argument</i> la <b>g</b> è [g]; in <i>aber</i> la <b>a</b> è lunga; in <i>Meinung</i> la <b>ei</b> è [aɪ]."
      }
    ]
  },
  "lesson:b1-u04-test": {
    theme: "Verifica",
    title: "Test: Opinioni e media",
    objectives: [
      "verificare il discorso riferito, nachdem e bevor, zwar ... aber e sowohl ... als auch, la declinazione dell'aggettivo"
    ],
    theory: [
      {
        p: "Dodici domande sull'intera unità. Si supera con il 70%. Non riguardare le lezioni mentre rispondi: se non ricordi qualcosa, è meglio tornare a ripassare."
      }
    ],
    exercises: [
      {
        tr: "Il Plusquamperfekt di gehen, tutte le persone.",
        why: "<i>War gegangen, warst gegangen, war gegangen, waren gegangen, wart gegangen, waren gegangen</i>: <i>sein</i> al Präteritum + participio II."
      },
      {
        q: "Completa: «Anna hat gesagt, ___ sie keine Zeit hat.»",
        hint: "congiunzione, affermazione riferita",
        why: "<b>Dass</b>: introduce un'affermazione riferita e manda il verbo in fondo."
      },
      {
        q: "Completa: «Nachdem sie die Nachricht gelesen ___, rief sie an.»",
        hint: "Plusquamperfekt, haben",
        why: "<b>Hatte</b>: <i>nachdem</i> con la principale al Präteritum (<i>rief</i>) vuole il Plusquamperfekt."
      },
      {
        q: "Completa con il Präteritum di veröffentlichen: «Bevor die Zeitung den Artikel ___, prüfte die Redaktion die Quelle.»",
        hint: "Präteritum, 3ª persona singolare",
        why: "<b>Veröffentlichte</b>: <i>bevor</i> qui ha lo stesso tempo della principale (<i>prüfte</i>), il Präteritum. Verbo debole: tema + <i>-te</i>."
      },
      {
        q: "Completa: «Die Sendung ist ___ kurz, aber sie ist sehr interessant.»",
        hint: "primo elemento della coppia con aber",
        why: "<b>Zwar</b>: <i>zwar ... aber</i> riconosce un punto e poi controbatte."
      },
      {
        q: "Completa: «Er hört sowohl Radio ___ auch Podcasts.»",
        hint: "secondo elemento della coppia con sowohl",
        why: "<b>Als</b>: la coppia è <i>sowohl ... als auch</i>."
      },
      {
        q: "Completa con l'aggettivo kurz: «Sie schreibt einen ___ Kommentar.»",
        hint: "kurz, accusativo maschile dopo einen",
        why: "<b>Kurzen</b>: all'accusativo maschile dopo <i>einen</i> l'aggettivo prende <i>-en</i>."
      },
      {
        q: "Tom dice: «Ich komme morgen.» Quale frase lo riferisce senza dass?",
        opts: [
          "Tom hat gesagt, er kommt morgen.",
          "Tom hat gesagt, er morgen kommt.",
          "Tom hat gesagt, dass er kommt morgen."
        ],
        why: "<b>Tom hat gesagt, er kommt morgen.</b> Senza <i>dass</i> il verbo resta in seconda posizione; il verbo in fondo appartiene solo alla versione con <i>dass</i>, e con <i>dass</i> non può stare in seconda posizione."
      },
      {
        q: "Quale frase è corretta?",
        opts: [
          "Das ist ein gutes Argument.",
          "Das ist ein guter Argument.",
          "Das ist ein gute Argument."
        ],
        why: "<b>Ein gutes Argument</b>: <i>Argument</i> è neutro e <i>ein</i> non mostra la desinenza al nominativo neutro, quindi la porta l'aggettivo: <i>-es</i>."
      },
      {
        q: "Traduci: «Tom ha detto che ha un buon argomento.»",
        why: "<i>Tom hat gesagt, dass er ein gutes Argument hat.</i> Va bene anche senza <i>dass</i>, con il verbo in seconda posizione, o con <i>sagte</i>. Il presente <i>hat</i> indica che il fatto vale ancora."
      },
      {
        tr: "Anna ha raccontato che ogni mattina legge il giornale. Dopo che aveva letto il titolo, ha chiamato un'amica. L'articolo è sì lungo, ma ha un punto di vista chiaro.",
        why: "In <i>Zeitung</i> la <b>z</b> è [ts] e la <b>ei</b> è [aɪ]; in <i>Schlagzeile</i> la <b>sch</b> è [ʃ]; in <i>Freundin</i> la <b>eu</b> è [ɔʏ]."
      },
      {
        tr: "Ha detto che ascolta sia la radio sia i podcast.",
        why: "In <i>sowohl</i> la <b>w</b> è [v] e la <b>o</b> di <i>wohl</i> è lunga; in <i>Radio</i> la <b>a</b> è lunga; in <i>Podcasts</i> la <b>c</b> è [k] e la <b>ts</b> finale è [ts]."
      }
    ]
  }
});
