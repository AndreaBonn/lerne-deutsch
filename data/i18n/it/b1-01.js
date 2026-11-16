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
        p: "Il <strong>Konjunktiv II</strong> serve per desideri, ipotesi, richieste e consigli. Per <em>sein</em> e <em>haben</em> parte dal Präteritum (<em>war, hatte</em>), prende l'<strong>Umlaut</strong> e le desinenze <em>-e, -st, -e, -en, -t, -en</em>: <em>ich wäre, du wärst, wir wären</em> e <em>ich hätte, du hättest, wir hätten</em>. <em>Ich wäre gern Ärztin</em> (mi piacerebbe essere medico), <em>Wir hätten gern mehr Zeit</em> (vorremmo avere più tempo). Non è un tempo del passato: parla di ciò che è desiderato, immaginato o possibile ora o più avanti."
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
        { tr: "Credo che abbia ragione.", note: "dass: hat recht, il verbo in fondo" },
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
        q: "Completa con würde: «An deiner Stelle ___ ich umziehen.»",
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
    title: "Ne sono contento. Di cosa?",
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
        { tr: "Di che cosa ti arrabbi?", note: "worüber: wo + r + über" },
        { tr: "Sono contento di vederlo. Chi stai aspettando?", note: "per una persona: auf ihn, auf wen" }
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
        why: "<i>Denken an</i> diventa <b>woran</b> (wo + r + an). <i>Wonach</i> e <i>wohin</i> sono parole esistenti, ma con <i>denken</i> non si usano: la prima rimanda a <i>nach</i>, la seconda indica una direzione."
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
        q: "Completa: «Er denkt oft an seine Familie. Er denkt oft ___.»",
        hint: "da- + an",
        why: "<b>Daran</b>: <i>da</i> + <i>r</i> + <i>an</i>. Davanti alla vocale di <i>an</i> si inserisce la <b>r</b>, come in <i>darauf</i>."
      },
      {
        q: "Completa la frase.",
        tr: "Di che cosa ti arrabbi? Mi arrabbio per il rumore.",
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
        tr: "Di che cosa sei contento? Sono contento del fine settimana. E di che cosa ti sei arrabbiato? Del rumore. Mi arrabbio spesso per questo.",
        why: "In <i>freust</i> la <b>eu</b> si legge [ɔʏ]; in <i>Wochenende</i> la <b>w</b> è [v] e la <b>ch</b> [x]; in <i>Lärm</i> la <b>ä</b> è lunga [ɛː]; in <i>über</i> e <i>darüber</i> la <b>ü</b> è arrotondata."
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
        p: "Il <strong>genere e il numero</strong> si prendono dal nome a cui il pronome rimanda (<em>Buch</em> è neutro, quindi <em>das</em>). Il <strong>caso</strong> dipende dal ruolo del pronome dentro la relativa: soggetto (nominativo), oggetto diretto (accusativo) o complemento di <em>helfen, geben</em> (dativo). Le forme sono quelle dell'articolo determinativo, tranne il dativo plurale, che è <strong>denen</strong>."
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
        q: "Completa: «Die Kinder, ___ ich das Buch gebe, sind sieben.»",
        hint: "plurale, dativo",
        why: "<b>Denen</b>: dativo plurale. Il relativo ha forma propria solo qui, negli altri casi è uguale all'articolo."
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
        tr: "Questo è il libro che ho letto. È un romanzo avvincente. La collega a cui ho consigliato il romanzo lo trova avvincente.",
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
        p: "<strong>Jemand</strong> (qualcuno) e <strong>niemand</strong> (nessuno) parlano di persone in modo generico. Possono restare invariati oppure prendere <em>-en</em> all'accusativo e <em>-em</em> al dativo: <em>Ich habe niemanden gesehen</em> o <em>Ich habe niemand gesehen</em>. <em>Ich habe jemandem geholfen</em> o <em>Ich habe jemand geholfen</em>. Le forme con la desinenza sono quelle standard; quelle senza si sentono spesso nella lingua parlata e si accettano."
      },
      {
        h: "jeder e alle",
        p: "<strong>Jeder</strong> (ognuno, ciascuno) è <strong>singolare</strong>: <em>Jeder weiß das.</em> Si declina come <em>dieser</em>: <em>jeder, jeden, jedem</em> (<em>Ich kenne jeden hier</em>). <strong>Alle</strong> (tutti) è <strong>plurale</strong>: <em>Alle sind da. Alle wissen das.</em>"
      },
      {
        h: "etwas e nichts",
        p: "<strong>Etwas</strong> (qualcosa) e <strong>nichts</strong> (niente) non cambiano: <em>Ich habe etwas gehört. Ich habe nichts gesehen.</em> Un aggettivo che li segue si scrive con la maiuscola e prende <em>-es</em>: <em>etwas Neues, nichts Besonderes</em>."
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
      note: "<b>jemand</b> e <b>niemand</b>: invariati o con <b>-en</b> (acc.) e <b>-em</b> (dat.). <b>jeder</b> è singolare, <b>alle</b> è plurale. Una sola negazione: <b>nichts</b>, <b>niemand</b>.",
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
        why: "<b>Niemanden</b>: accusativo standard. Nella lingua parlata si sente e si accetta anche <i>niemand</i>. Nessun <i>nicht</i>."
      },
      {
        q: "Completa: «Ich habe ___ geholfen.» (a qualcuno)",
        hint: "qualcuno, dativo",
        why: "<b>Jemandem</b>: <i>helfen</i> vuole il dativo. Nella lingua parlata si accetta anche <i>jemand</i>."
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
        why: "<i>Ich habe niemanden gesehen und nichts gehört</i>: una sola negazione per frase, dentro <i>niemanden</i> e <i>nichts</i>."
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
        why: "<b>Niemanden</b> (o <i>niemand</i> nella lingua parlata), senza <i>nicht</i>."
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
  }
});
