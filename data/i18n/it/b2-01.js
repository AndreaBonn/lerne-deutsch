/* ============================================================
   Learner-language text (it) for data/core/b2-01.js, unit b2-u01.
   Keys point at ids in the neutral layer; arrays merge by index,
   so their length has to match core.
   Checked by scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("it", {
  "unit:b2-u01": {
    title: "Se l'avessi saputo",
    grammarNote: "Konjunktiv II al passato (hätte gemacht, wäre gegangen) · doppio infinito con i modali (hätte anrufen sollen) · als ob, als wenn, als + verbo"
  },
  "lesson:b2-u01-l1": {
    theme: "Scelte e rimpianti",
    title: "Avrei fatto, sarei stato",
    objectives: [
      "formare il Konjunktiv II al passato con hätte o wäre + participio II",
      "scegliere fra hätte e wäre come nel Perfekt",
      "esprimere un rimpianto (Hätte ich bloß ...!)",
      "costruire un'ipotesi irreale sul passato"
    ],
    theory: [
      {
        h: "hätte o wäre + participio II",
        p: "Per parlare di ciò che <strong>sarebbe potuto succedere e non è successo</strong> si usa il Konjunktiv II al passato: <strong>hätte</strong> o <strong>wäre</strong> coniugato + <strong>participio II</strong> in fondo. <em>Ich hätte das nicht gemacht</em> (non l'avrei fatto), <em>Wir wären gern länger geblieben</em> (saremmo rimasti volentieri più a lungo). La scelta tra <em>hätte</em> e <em>wäre</em> è la stessa del Perfekt: chi al Perfekt prende <em>sein</em> (<em>ich bin gegangen, ich bin gewesen</em>) qui prende <em>wäre</em> (<em>ich wäre gegangen, ich wäre gewesen</em>); tutti gli altri prendono <em>hätte</em>."
      },
      {
        h: "Ipotesi irreale sul passato",
        p: "Quando condizione e conseguenza riguardano tutte e due il passato, tutte e due hanno il Konjunktiv II passato: <em>Wenn ich das gewusst hätte, wäre ich früher gekommen</em>. Se la conseguenza riguarda il presente, lì si usa il Konjunktiv II presente: <em>Hätte ich die Gelegenheit genutzt, wäre ich jetzt in Berlin.</em> Dopo <em>wenn</em> l'ausiliare va in fondo, dopo il participio; la principale che segue comincia con l'ausiliare. Si può anche togliere <em>wenn</em> e cominciare con il verbo: <em>Hätte ich das gewusst, wäre ich früher gekommen.</em> Con <strong>bloß</strong>, <strong>nur</strong> o <strong>doch</strong> la stessa forma diventa un rimpianto: <em>Hätte ich bloß mehr gelernt!</em>"
      },
      {
        contrast: "L'italiano usa due forme diverse nelle due parti: <em>se l'avessi saputo</em> (congiuntivo trapassato) e <em>sarei venuto</em> (condizionale passato). Il tedesco, quando tutte e due le parti riguardano il passato, usa in tutte e due il Konjunktiv II passato: <em>Wenn ich das gewusst hätte, wäre ich gekommen</em>. Non c'è una forma per il <em>se</em> e un'altra per la conseguenza: è lo stesso modo due volte."
      },
      {
        trap: "<em>Wenn ich das gewusst habe</em> è un Perfekt all'indicativo: può indicare un momento o una condizione aperta, ma non dice che non l'hai saputo. Per l'ipotesi controfattuale sul passato serve <em>gewusst hätte</em>. E attenzione a <em>wäre</em> con i verbi di movimento: <em>Ich wäre gekommen</em>, non «Ich hätte gekommen», perché al Perfekt si dice <em>ich bin gekommen</em>."
      },
      {
        tip: "Per non sbagliare l'ausiliare, pensa prima al Perfekt: <em>ich habe gemacht</em> diventa <em>ich hätte gemacht</em>, <em>ich bin geblieben</em> diventa <em>ich wäre geblieben</em>. Si sostituisce l'ausiliare con la sua forma di Konjunktiv II e il participio resta uguale."
      }
    ],
    grammar: {
      title: "Konjunktiv II al passato: hätte / wäre + participio II",
      note: "<b>hätte</b> + participio con i verbi che al Perfekt usano <i>haben</i>, <b>wäre</b> + participio con quelli che usano <i>sein</i>. Se condizione e conseguenza riguardano tutte e due il passato, tutte e due hanno il Konjunktiv II passato; una conseguenza presente usa il Konjunktiv II presente.",
      table: {
        head: ["Perfekt", "Konjunktiv II passato", "italiano"],
        rows: [
          ["ich habe gemacht", "ich hätte gemacht", "avrei fatto"],
          ["ich bin gegangen", "ich wäre gegangen", "sarei andato"],
          ["ich bin gewesen", "ich wäre gewesen", "sarei stato"],
          ["ich habe gewusst", "ich hätte gewusst", "avrei saputo"]
        ]
      },
      examples: [
        { tr: "Non l'avrei fatto.", note: "hätte + participio in fondo" },
        { tr: "Saremmo rimasti volentieri più a lungo.", note: "bleiben vuole sein: wäre" },
        { tr: "Se l'avessi saputo, sarei venuto prima.", note: "condizione e conseguenza nel passato: Konjunktiv II passato in tutte e due" },
        { tr: "Se solo avessi studiato di più!", note: "rimpianto: verbo in prima posizione + bloß" },
        { tr: "Per poco non arrivava in ritardo.", note: "fast + Konjunktiv II: qualcosa che non è successo per un pelo" },
        { tr: "Senza il tuo aiuto non ce l'avrei fatta.", note: "ohne + nome al posto della frase con wenn" }
      ]
    },
    vocab: [
      "l'occasione",
      "la decisione",
      "l'errore",
      "l'opportunità, la possibilità",
      "la scelta (anche: le elezioni, al plurale)",
      "la fortuna (Glück haben: essere fortunati)",
      "perdere (un treno, un'occasione)",
      "pentirsi di, rimpiangere",
      "sfruttare, approfittare di",
      "decidere, decidersi (für + accusativo: per)",
      "farcela, riuscire",
      "in tempo"
    ],
    exercises: [
      {
        tr: "Il Konjunktiv II passato di machen, tutte le persone.",
        why: "<i>hätte, hättest, hätte, hätten, hättet, hätten</i> + <i>gemacht</i>: <i>machen</i> al Perfekt vuole <i>haben</i>, quindi qui <i>hätte</i>."
      },
      {
        tr: "Il Konjunktiv II passato di gehen, tutte le persone.",
        why: "<i>gehen</i> al Perfekt vuole <i>sein</i> (<i>ich bin gegangen</i>), quindi <i>wäre gegangen</i>. Per <i>du</i> e <i>ihr</i> valgono sia <i>wärst, wärt</i> sia <i>wärest, wäret</i>."
      },
      {
        tr: "Il Konjunktiv II passato di sein, tutte le persone.",
        why: "<i>wäre gewesen</i>: anche <i>sein</i> forma il Perfekt con se stesso (<i>ich bin gewesen</i>), quindi <i>wäre</i> + <i>gewesen</i>."
      },
      {
        q: "Come dici «Se l'avessi saputo, sarei venuto»?",
        opts: [
          "Wenn ich das gewusst hätte, wäre ich gekommen.",
          "Wenn ich das gewusst habe, bin ich gekommen.",
          "Wenn ich das wüsste, würde ich kommen."
        ],
        why: "Per il passato serve il Konjunktiv II passato in tutte e due le parti: <b>gewusst hätte</b> e <b>wäre gekommen</b>. La seconda frase è un fatto reale al Perfekt, la terza un'ipotesi sul presente."
      },
      {
        q: "Completa: «Wir ___ gern länger geblieben.» (saremmo rimasti)",
        opts: [
          "wären",
          "hätten",
          "würden"
        ],
        why: "<i>bleiben</i> al Perfekt vuole <i>sein</i> (<i>wir sind geblieben</i>), quindi <b>wären</b>. <i>Würden ... geblieben</i> non esiste così."
      },
      {
        q: "Completa: «Ich ___ das nicht gemacht.» (non l'avrei fatto)",
        hint: "Konjunktiv II di haben, ich",
        why: "<b>Hätte</b>: <i>machen</i> al Perfekt vuole <i>haben</i>, e il participio <i>gemacht</i> sta in fondo."
      },
      {
        q: "Completa: «Sie ___ fast zu spät gekommen.» (per poco non arrivava in ritardo)",
        hint: "Konjunktiv II di sein, sie (lei)",
        why: "<b>Wäre</b>: <i>kommen</i> vuole <i>sein</i>. Con <i>fast</i> il Konjunktiv II racconta qualcosa che non è successo per poco."
      },
      {
        q: "Completa la frase.",
        tr: "Se avessimo avuto più tempo, saremmo rimasti più a lungo.",
        why: "<i>Wenn wir mehr Zeit gehabt hätten</i>: dopo <i>wenn</i> prima il participio <i>gehabt</i>, poi l'ausiliare <i>hätten</i> in fondo."
      },
      {
        q: "Traduci: «Se fossi venuto prima, l'avresti visto.» (tu, lui)",
        why: "<i>Wenn du früher gekommen wärst, hättest du ihn gesehen</i>. <i>kommen</i> prende <i>wäre</i>, <i>sehen</i> prende <i>hätte</i>. Senza <i>wenn</i>: <i>Wärst du früher gekommen, hättest du ihn gesehen</i>."
      },
      {
        tr: "Se avessi sfruttato l'occasione, adesso sarei a Berlino. Ma ho deciso diversamente.",
        why: "In <i>Gelegenheit</i> l'accento cade su <b>le</b>: ge-<b>LE</b>-gen-heit; in <i>wäre</i> la <b>ä</b> è una <i>e</i> aperta e lunga; in <i>entschieden</i> la <b>ie</b> è una <i>i</i> lunga."
      },
      {
        tr: "Se l'avessi saputo, sarei rimasto a casa.",
        why: "In <i>gewusst</i> la <b>u</b> è breve davanti alla doppia <i>s</i>; in <i>hätte</i> la <b>ä</b> è breve; in <i>geblieben</i> la <b>ie</b> è lunga."
      }
    ]
  },
  "lesson:b2-u01-l2": {
    theme: "Rimproveri e scuse",
    title: "Avrei dovuto chiamare",
    objectives: [
      "usare il doppio infinito con i modali al Konjunktiv II passato",
      "formare il Perfekt di un modale con un altro verbo",
      "mettere l'ausiliare al posto giusto nella subordinata",
      "fare un rimprovero e scusarsi"
    ],
    theory: [
      {
        h: "Il doppio infinito",
        p: "Un modale che accompagna un altro verbo, al passato composto, <strong>non usa il participio</strong> (<em>gekonnt, gesollt</em>) ma l'<strong>infinito</strong>. In fondo alla frase stanno così due infiniti: prima il verbo principale, poi il modale. L'ausiliare è sempre <strong>haben</strong>. Al Konjunktiv II: <em>Ich hätte dich anrufen sollen</em> (avrei dovuto chiamarti), <em>Wir hätten früher losfahren können</em> (saremmo potuti partire prima). Al Perfekt: <em>Er hat gestern nicht kommen können</em> (ieri non è potuto venire)."
      },
      {
        h: "Nella subordinata",
        p: "Nella subordinata l'ausiliare non va in fondo come al solito: si mette <strong>davanti ai due infiniti</strong>. <em>Ich weiß, dass ich hätte fragen sollen. Es tut mir leid, dass ich nicht habe kommen können.</em> Con i modali nel doppio infinito questa posizione è obbligatoria."
      },
      {
        contrast: "In italiano con i verbi di movimento si può usare <em>essere</em> (<em>sarei dovuto venire</em>, accanto ad <em>avrei dovuto venire</em>). Il tedesco, con un modale seguito da un altro infinito, ha sempre <em>haben</em>: <em>Ich hätte kommen sollen</em>, mai «Ich wäre kommen sollen». E l'ordine è rovesciato: in italiano il modale viene prima dell'infinito (<em>dovuto chiamare</em>), in tedesco dopo (<em>anrufen sollen</em>)."
      },
      {
        trap: "<em>Ich hätte das gekonnt</em> esiste, ma solo quando il modale è <strong>da solo</strong>, senza un altro verbo: «ne sarei stato capace». Appena c'è un secondo verbo, il participio sparisce: <em>Ich hätte das machen können</em>, non «Ich hätte das machen gekonnt»."
      },
      {
        tip: "Per un rimprovero gentile si usa spesso <em>eigentlich</em>: <em>Eigentlich hättest du mir Bescheid sagen müssen.</em> Suona meno duro di un rimprovero diretto, ma dice la stessa cosa."
      }
    ],
    grammar: {
      title: "Il doppio infinito: hätte + infinito + modale",
      note: "Con un secondo verbo il modale resta all'<b>infinito</b> e chiude la frase; l'ausiliare è sempre <b>haben</b>. Nella subordinata l'ausiliare va <b>davanti</b> ai due infiniti.",
      table: {
        head: ["", "frase principale", "subordinata"],
        rows: [
          ["Konjunktiv II passato", "Ich hätte anrufen sollen.", "..., dass ich hätte anrufen sollen."],
          ["Perfekt", "Ich habe nicht kommen können.", "..., dass ich nicht habe kommen können."],
          ["modale da solo", "Ich hätte das nicht gekonnt.", "..., dass ich das nicht gekonnt hätte."]
        ]
      },
      examples: [
        { tr: "Avrei dovuto chiamarti.", note: "doppio infinito: anrufen sollen" },
        { tr: "Avresti dovuto dirmelo.", note: "müssen: un obbligo più forte di sollen" },
        { tr: "Saremmo potuti partire prima.", note: "l'ausiliare resta haben anche con losfahren" },
        { tr: "Ieri non è potuto venire.", note: "Perfekt: hat + kommen können" },
        { tr: "Non avrebbe dovuto farlo.", note: "nicht dürfen: un divieto" },
        { tr: "So che avrei dovuto chiedere.", note: "subordinata: hätte davanti ai due infiniti" }
      ]
    },
    vocab: [
      "il rimprovero (jemandem Vorwürfe machen: rimproverare qualcuno)",
      "il dovere",
      "il ritardo",
      "la scusa (pretesto)",
      "l'intenzione",
      "la svista (aus Versehen: per sbaglio)",
      "rimproverare",
      "scusarsi",
      "dimenticare",
      "avvisare, far sapere",
      "purtroppo",
      "in realtà, a dire il vero"
    ],
    exercises: [
      {
        q: "Come dici «Avrei dovuto chiamarti»?",
        opts: [
          "Ich hätte dich anrufen sollen.",
          "Ich hätte dich angerufen gesollt.",
          "Ich wäre dich anrufen sollen."
        ],
        why: "Doppio infinito: <b>anrufen sollen</b> in fondo, ausiliare <b>hätte</b>. Il participio <i>gesollt</i> non si usa con un secondo verbo, e l'ausiliare non è mai <i>wäre</i>."
      },
      {
        q: "Come dici «Non sono potuto venire»?",
        opts: [
          "Ich habe nicht kommen können.",
          "Ich bin nicht kommen können.",
          "Ich habe nicht kommen gekonnt."
        ],
        why: "Al Perfekt il modale con un altro verbo prende <b>haben</b> e resta all'infinito: <i>habe ... kommen können</i>, anche se <i>kommen</i> da solo vorrebbe <i>sein</i>."
      },
      {
        q: "Quale subordinata è corretta?",
        opts: [
          "Ich weiß, dass ich hätte fragen sollen.",
          "Ich weiß, dass ich fragen sollen hätte.",
          "Ich weiß, dass ich hätte gefragt sollen."
        ],
        why: "Con il doppio infinito l'ausiliare va <b>davanti</b> ai due infiniti: <i>hätte fragen sollen</i>. La terza mescola participio e infinito."
      },
      {
        q: "Completa: «Du ___ mir Bescheid sagen sollen.» (avresti dovuto)",
        hint: "Konjunktiv II di haben, du",
        why: "<b>Hättest</b>: l'ausiliare del doppio infinito è sempre <i>haben</i>, qui alla seconda persona."
      },
      {
        q: "Completa con il modale: «Wir hätten früher losfahren ___.» (saremmo potuti partire)",
        hint: "potere, all'infinito",
        why: "<b>können</b> all'infinito, in fondo dopo <i>losfahren</i>: è il doppio infinito."
      },
      {
        q: "Completa la frase.",
        tr: "Avrei dovuto chiamarti ieri.",
        why: "<i>Ich hätte dich gestern anrufen sollen</i>: <i>hätte</i> in seconda posizione, <i>anrufen sollen</i> in fondo. Va bene anche <i>müssen</i>, che rende l'obbligo più forte."
      },
      {
        q: "Completa la frase al Perfekt.",
        tr: "Ieri non è potuto venire.",
        why: "<i>Er hat gestern nicht kommen können</i>: ausiliare <i>hat</i>, poi i due infiniti. Anche il Präteritum <i>Er konnte gestern nicht kommen</i> è giusto, ma qui l'esercizio chiede il Perfekt."
      },
      {
        q: "Traduci: «Avresti dovuto dirmelo.»",
        why: "<i>Du hättest es mir sagen sollen</i> (o <i>müssen</i>): <i>hättest</i> in seconda posizione, <i>sagen sollen</i> in fondo. Si può cominciare anche con <i>Das</i>: <i>Das hättest du mir sagen sollen</i>."
      },
      {
        tr: "Mi dispiace, avrei dovuto avvisarti. Purtroppo ho dimenticato l'appuntamento.",
        why: "In <i>Bescheid</i> la <b>sch</b> è [ʃ] e la <b>ei</b> è [aɪ]; in <i>vergessen</i> la <b>v</b> si legge [f]; in <i>leider</i> la <b>ei</b> è di nuovo [aɪ]."
      },
      {
        tr: "In realtà sarei dovuto partire prima.",
        why: "In <i>eigentlich</i> la <b>ch</b> finale è il suono morbido [ç]; in <i>müssen</i> la <b>ü</b> è breve e arrotondata; in <i>losfahren</i> la <b>h</b> allunga la <i>a</i>."
      }
    ]
  },
  "lesson:b2-u01-l3": {
    theme: "Apparenze",
    title: "Come se non sapesse niente",
    objectives: [
      "fare un paragone irreale con als ob e als wenn",
      "usare als da solo con il verbo subito dopo",
      "distinguere un fatto contemporaneo da uno anteriore",
      "descrivere un'impressione con aussehen, wirken, klingen"
    ],
    theory: [
      {
        h: "als ob, als wenn",
        p: "<strong>als ob</strong> e <strong>als wenn</strong> significano <em>come se</em> e introducono un paragone ipotetico: un'impressione che può essere falsa o di cui non si sa se sia vera. Di solito vogliono il <strong>Konjunktiv II</strong>, che è la forma che si impara qui, e il verbo in fondo: <em>Er tut so, als ob er nichts wüsste</em> (fa finta di non sapere niente). Si trovano spesso dopo <em>so tun</em> (fare finta), <em>aussehen</em> (sembrare, all'aspetto), <em>klingen</em> (suonare), <em>sich benehmen</em> (comportarsi)."
      },
      {
        h: "Contemporaneo o anteriore",
        p: "Se il fatto immaginato è <strong>contemporaneo</strong> si usa il Konjunktiv II presente: <em>Du siehst aus, als ob du müde wärst</em>. Se è <strong>anteriore</strong> si usa il passato: <em>Sie sieht aus, als ob sie nicht geschlafen hätte</em>. Con <strong>als</strong> da solo il verbo coniugato viene <strong>subito dopo</strong>, come in una domanda: <em>Du redest, als wärst du der Chef. Mir ist, als hätte ich ihn schon einmal gesehen.</em>"
      },
      {
        contrast: "Anche l'italiano vuole il congiuntivo dopo <em>come se</em>: <em>come se non sapesse</em>, <em>come se non avesse dormito</em>. In tedesco c'è il Konjunktiv II, e la stessa distinzione fra presente e passato: <em>als ob er nichts wüsste</em>, <em>als ob sie nicht geschlafen hätte</em>. La differenza è nell'ordine: dopo <em>als ob</em> il verbo va in fondo, dopo <em>als</em> da solo viene subito."
      },
      {
        trap: "Non mescolare le due costruzioni: <em>als ob er krank wäre</em> oppure <em>als wäre er krank</em>, ma non «als ob wäre er krank» né «als er krank wäre». E non confondere questo <em>als</em> con quello del comparativo (<em>größer als</em>) o con <em>als</em> temporale (<em>Als ich jung war</em>): qui è seguito subito dal verbo al Konjunktiv II."
      },
      {
        tip: "Nel parlato si sente spesso <em>würde</em> + infinito al posto della forma propria: <em>Sie tut so, als ob sie mich nicht kennen würde.</em> Con <em>sein</em>, <em>haben</em> e i modali però si preferisce la forma propria: <em>als ob er krank wäre</em>."
      }
    ],
    grammar: {
      title: "als ob, als wenn, als + Konjunktiv II",
      note: "<b>als ob / als wenn</b>: verbo in fondo. <b>als</b>: verbo subito dopo. Presente per un fatto contemporaneo, passato (<b>hätte / wäre</b> + participio) per un fatto anteriore.",
      table: {
        head: ["", "contemporaneo", "anteriore"],
        rows: [
          ["als ob", "..., als ob er nichts wüsste.", "..., als ob er nichts gehört hätte."],
          ["als wenn", "..., als wenn er nichts wüsste.", "..., als wenn er nichts gehört hätte."],
          ["als", "..., als wüsste er nichts.", "..., als hätte er nichts gehört."]
        ]
      },
      examples: [
        { tr: "Fa finta di non sapere niente.", note: "so tun, als ob + Konjunktiv II presente" },
        { tr: "Sembra che non abbia dormito.", note: "fatto anteriore: geschlafen hätte" },
        { tr: "Parli come se fossi il capo.", note: "als da solo: verbo subito dopo" },
        { tr: "Sembra che fuori stia piovendo.", note: "als wenn + würde: forma del parlato" },
        { tr: "Si comporta come se niente fosse successo.", note: "passieren vuole sein: passiert wäre" },
        { tr: "Ho l'impressione di averlo già visto una volta.", note: "Mir ist, als ...: una sensazione" }
      ]
    },
    vocab: [
      "l'impressione",
      "il comportamento",
      "l'apparenza (Der Schein trügt: l'apparenza inganna)",
      "l'idea, il sospetto (keine Ahnung haben: non averne idea)",
      "comportarsi",
      "fare finta",
      "sembrare (all'aspetto), avere l'aria",
      "sembrare, fare un certo effetto",
      "suonare (Das klingt gut: suona bene)",
      "sembrare (+ zu + infinito)",
      "strano",
      "sorpreso"
    ],
    exercises: [
      {
        q: "Come dici «Fa finta di non sapere niente»?",
        opts: [
          "Er tut so, als ob er nichts wüsste.",
          "Er tut so, als ob er wüsste nichts.",
          "Er tut so, als ob er nichts wissen."
        ],
        why: "Dopo <b>als ob</b> il verbo al Konjunktiv II va in fondo: <i>nichts wüsste</i>. La terza ha l'infinito senza un verbo coniugato."
      },
      {
        q: "Quale frase è corretta?",
        opts: [
          "Sie sieht aus, als ob sie nicht geschlafen hätte.",
          "Sie sieht aus, als ob hätte sie nicht geschlafen.",
          "Sie sieht aus, als sie nicht geschlafen hätte."
        ],
        why: "Con <b>als ob</b> il verbo va in fondo; con <b>als</b> da solo viene subito (<i>als hätte sie nicht geschlafen</i>). La seconda e la terza scambiano le due costruzioni."
      },
      {
        q: "Completa: «Du redest, als ___ du der Chef.» (fossi)",
        hint: "Konjunktiv II di sein, du; con als il verbo viene subito",
        why: "<b>Wärst</b> (o <i>wärest</i>): con <i>als</i> da solo il verbo coniugato sta subito dopo."
      },
      {
        q: "Completa: «Er benimmt sich, als ob nichts passiert ___.» (fosse successo)",
        hint: "Konjunktiv II di sein",
        why: "<b>Wäre</b>: <i>passieren</i> al Perfekt vuole <i>sein</i>, e dopo <i>als ob</i> l'ausiliare chiude la frase."
      },
      {
        q: "Completa la frase.",
        tr: "Ho l'impressione di averlo già visto una volta.",
        why: "<i>Mir ist, als hätte ich ihn schon einmal gesehen</i>: con <i>als</i> il verbo <i>hätte</i> viene subito, il participio <i>gesehen</i> va in fondo."
      },
      {
        q: "Quali frasi sono corrette?",
        opts: [
          "Er tut so, als ob er krank wäre.",
          "Er tut so, als wäre er krank.",
          "Er tut so, als wenn er krank wäre.",
          "Er tut so, als ob wäre er krank.",
          "Er tut so, als er krank wäre."
        ],
        why: "Le prime tre sono giuste: <i>als ob</i> e <i>als wenn</i> con il verbo in fondo, <i>als</i> con il verbo subito dopo. La 4 e la 5 mescolano le due costruzioni."
      },
      {
        q: "Metti in ordine le parole.",
        tr: "Fa finta di non conoscermi.",
        why: "<i>Sie tut so, als ob sie mich nicht kennen würde.</i> Dopo <i>als ob</i> il verbo coniugato <i>würde</i> chiude la frase, preceduto dall'infinito."
      },
      {
        q: "Traduci: «Si comporta come se niente fosse successo.» (lui)",
        why: "<i>Er benimmt sich, als ob nichts passiert wäre</i>, oppure <i>als wäre nichts passiert</i>. Al posto di <i>passiert</i> va bene <i>geschehen</i>, e al posto di <i>sich benehmen</i> anche <i>so tun</i>."
      },
      {
        tr: "Ha fatto finta di non avermi visto. Ma avevo l'impressione che mi avesse riconosciuto benissimo.",
        why: "In <i>Eindruck</i> la <b>ei</b> è [aɪ] e la <b>u</b> è breve [ʊ]; in <i>erkannt</i> la <b>r</b> dopo la <i>e</i> si sente appena; in <i>genau</i> la <b>au</b> è [aʊ]."
      },
      {
        tr: "Sembri uno che non ha dormito tutta la notte.",
        why: "In <i>siehst</i> la <b>ie</b> è lunga e la <b>h</b> non si pronuncia; in <i>Nacht</i> la <b>ch</b> è il suono duro [x]; in <i>hättest</i> la <b>ä</b> è breve."
      }
    ]
  },
  "lesson:b2-u01-test": {
    theme: "Verifica",
    title: "Test: Se l'avessi saputo",
    objectives: [
      "verificare il Konjunktiv II al passato, il doppio infinito e als ob"
    ],
    theory: [
      {
        p: "Dieci domande sull'intera unità. Si supera con il 70%. Non riguardare le lezioni mentre rispondi: se non ricordi qualcosa, è meglio tornare a ripassare."
      }
    ],
    exercises: [
      {
        tr: "Il Konjunktiv II passato di fahren, tutte le persone.",
        why: "<i>fahren</i> al Perfekt vuole <i>sein</i> (<i>ich bin gefahren</i>), quindi <i>wäre gefahren</i>. Con un complemento oggetto (<i>Ich hätte das Auto gefahren</i>) si usa <i>haben</i>, ma qui la tabella chiede il verbo di movimento."
      },
      {
        tr: "Il Konjunktiv II passato di lernen, tutte le persone.",
        why: "<i>lernen</i> al Perfekt vuole <i>haben</i>: <i>hätte gelernt</i>."
      },
      {
        q: "Completa: «Wenn ich das gewusst ___, wäre ich gekommen.»",
        hint: "Konjunktiv II di haben, ich",
        why: "<b>Hätte</b> in fondo alla frase con <i>wenn</i>, dopo il participio <i>gewusst</i>."
      },
      {
        q: "Completa con il modale: «Du hättest mich anrufen ___.» (avresti potuto)",
        hint: "potere, all'infinito",
        why: "<b>können</b>: doppio infinito, il modale resta all'infinito in fondo."
      },
      {
        q: "Completa: «Er tut so, als ob er nichts ___.» (sapesse)",
        hint: "Konjunktiv II di wissen",
        why: "<b>Wüsste</b>: Konjunktiv II di <i>wissen</i>, in fondo dopo <i>als ob</i>."
      },
      {
        q: "Completa: «Ich ___ nie weggefahren.» (non sarei mai partito)",
        opts: [
          "wäre",
          "hätte",
          "würde"
        ],
        why: "<i>wegfahren</i> vuole <i>sein</i> al Perfekt: <b>wäre</b> + <i>weggefahren</i>."
      },
      {
        q: "Quale frase esprime un rimpianto?",
        opts: [
          "Hätte ich bloß mehr gelernt!",
          "Ich habe bloß mehr gelernt.",
          "Ich lerne bloß mehr."
        ],
        why: "Qui il rimpianto è espresso dal Konjunktiv II passato, dal verbo in prima posizione e da <i>bloß</i> (vanno bene anche <i>nur</i>, <i>doch</i> o <i>Wenn ich doch ... hätte!</i>): <b>Hätte ich bloß mehr gelernt!</b> Le altre due sono indicativi."
      },
      {
        q: "Quali frasi sono corrette?",
        opts: [
          "Wir wären gern länger geblieben.",
          "Ich hätte früher aufstehen sollen.",
          "Sie sieht aus, als wäre sie krank.",
          "Ich hätte früher aufgestanden sollen.",
          "Wir hätten gern länger geblieben."
        ],
        why: "Le prime tre sono giuste. La 4 usa il participio al posto dell'infinito nel doppio infinito; la 5 usa <i>hätten</i> con <i>bleiben</i>, che vuole <i>sein</i>."
      },
      {
        tr: "Se fossimo partiti in tempo, non avremmo perso il treno. Avrei dovuto ascoltarti.",
        why: "In <i>rechtzeitig</i> la <b>ch</b> è [ç] e la <b>z</b> è [ts]; in <i>verpasst</i> la <b>v</b> si legge [f]; in <i>hören</i> la <b>ö</b> è lunga e arrotondata."
      },
      {
        tr: "Se solo l'avessi saputo prima, avrei deciso diversamente.",
        why: "In <i>bloß</i> la <b>o</b> è lunga e la <b>ß</b> è una <i>s</i> sorda; in <i>früher</i> la <b>h</b> non si pronuncia e allunga la <i>ü</i>; in <i>entschieden</i> la <b>sch</b> è [ʃ]."
      }
    ]
  }
});
