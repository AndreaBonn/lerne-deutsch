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
      "usare würde + infinito con i verbi che non hanno una forma propria",
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
        contrast: "L'italiano ha un <em>condizionale</em> con una forma propria per ogni verbo: <em>sarei, avrei, andrei, farei</em>. Il tedesco ha forme proprie soltanto per pochi verbi molto frequenti (<em>wäre, hätte, könnte, müsste</em>) e per tutti gli altri di solito usa <em>würde</em> + infinito: <em>andrei</em> è <em>würde gehen</em>, <em>farei</em> è <em>würde machen</em>. Inoltre il Konjunktiv II è un modo, non un tempo: <em>Ich wäre</em> corrisponde a <em>sarei</em> e riguarda il presente o il futuro."
      },
      {
        trap: "Non confondere <em>würde</em> con <em>wurde</em>: <em>wurde</em> (senza Umlaut) è il Präteritum di <em>werden</em> («diventò»), <em>würde</em> (con Umlaut) è il condizionale. Una sola lettera cambia il significato, e si sente anche: la <em>ü</em> è arrotondata. Con <em>sein</em> e <em>haben</em> di solito si preferiscono <em>wäre</em> e <em>hätte</em> a «würde sein» e «würde haben»: <em>Das wäre schön</em>, non «Das würde schön sein»."
      },
      {
        tip: "Per dare un consiglio educato usa <em>An deiner Stelle würde ich ...</em> invece di un imperativo: suona più morbido. E per un desiderio, <em>Ich hätte gern ...</em> o <em>Ich wäre gern ...</em>, seguito da un nome o da un aggettivo."
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
        p: "Dopo <em>wenn</em> il verbo coniugato va <strong>in fondo</strong> alla subordinata, e la virgola la separa dalla principale. Se la frase con <em>wenn</em> viene prima, la principale <strong>comincia con il verbo</strong>: <em>Wenn ich Zeit hätte, würde ich mehr reisen.</em> Se viene dopo, l'ordine della principale non cambia: <em>Ich würde mehr reisen, wenn ich Zeit hätte.</em> Nella subordinata con <em>wenn</em> si preferisce la forma propria (<em>hätte, wäre, könnte</em>), e <em>würde</em> + infinito sta nella principale."
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
        tip: "Prima di scrivere una frase con <em>wenn</em> chiediti: può succedere davvero? Allora presente nelle due frasi. È un'ipotesi che immagini? Allora Konjunktiv II (<em>hätte, wäre, könnte</em>) dopo <em>wenn</em> e <em>würde</em> + infinito nella principale."
      }
    ],
    grammar: {
      title: "Wenn + presente o Konjunktiv II",
      note: "<b>Reale</b>: <i>wenn</i> + presente, presente. <b>Irreale</b>: <i>wenn</i> + Konjunktiv II (<i>hätte, wäre, könnte</i>), poi <i>würde</i> + infinito. Il verbo di <i>wenn</i> va in fondo, e la principale che segue comincia con il verbo.",
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
        contrast: "In italiano <em>benché</em> e <em>sebbene</em> vogliono il congiuntivo (<em>benché piova</em>), mentre <em>anche se</em> si usa con l'indicativo (<em>anche se piove</em>). In tedesco <em>obwohl</em> ha sempre l'<strong>indicativo</strong>: <em>obwohl es regnet</em>. Il verbo va in fondo, come dopo <em>weil</em>: <em>weil es regnet</em> dice perché, <em>obwohl es regnet</em> dice «nonostante questo»."
      },
      {
        trap: "Dopo una frase con <em>obwohl</em> la principale comincia con il verbo: <em>Obwohl es regnet, gehen wir spazieren</em>, non «..., wir gehen». E dopo <em>trotzdem</em> in prima posizione il verbo viene subito: <em>trotzdem gehen wir</em>, non «trotzdem wir gehen». <em>Obwohl</em> e <em>trotzdem</em> dicono la stessa cosa: in una frase se ne sceglie uno, perché usarli insieme ripete l'idea. Non confondere <em>obwohl</em> con <em>weil</em>: sono l'uno il contrario dell'altro."
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
        why: "Dopo la frase con <b>obwohl</b> la principale comincia con il verbo: <i>gehen wir</i>. La terza ha il verbo nel posto sbagliato e ripete l'idea con <i>trotzdem</i>."
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
  }
});
