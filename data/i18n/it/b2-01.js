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
        why: "<i>fahren</i> al Perfekt vuole <i>sein</i> (<i>ich bin gefahren</i>), quindi <i>wäre gefahren</i>. La tabella chiede il verbo intransitivo di movimento; nel senso di guidare un veicolo, con un complemento oggetto, l'ausiliare abituale è <i>haben</i> (<i>Ich hätte das Auto gefahren</i>)."
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
  },
  "unit:b2-u02": {
    title: "Condizioni",
    grammarNote: "periodo ipotetico reale, irreale al presente, irreale al passato e misto · falls, sofern, es sei denn, vorausgesetzt · condizione senza wenn (Hätte ich ..., Sollten Sie ...) · bloß, nur, doch nei desideri"
  },
  "lesson:b2-u02-l1": {
    theme: "Decisioni",
    title: "Reale, irreale, misto",
    objectives: [
      "distinguere il periodo ipotetico reale da quello irreale",
      "costruire l'irreale al presente e al passato",
      "combinare una condizione passata con una conseguenza presente",
      "mettere il verbo al posto giusto dopo la frase con wenn"
    ],
    theory: [
      {
        h: "Tre tipi di periodo ipotetico",
        p: "Il periodo ipotetico <strong>reale</strong> parla di una condizione possibile e usa l'<strong>indicativo</strong>: <em>Wenn es morgen regnet, bleiben wir zu Hause.</em> L'<strong>irreale al presente</strong> parla di qualcosa che oggi non è vero e usa il <strong>Konjunktiv II presente</strong>: <em>Wenn ich mehr Geld hätte, würde ich weniger arbeiten.</em> L'<strong>irreale al passato</strong> parla di qualcosa che non è successo e usa il <strong>Konjunktiv II passato</strong>: <em>Wenn du mich gefragt hättest, hätte ich dir geholfen.</em>"
      },
      {
        h: "Il caso misto",
        p: "Condizione e conseguenza possono stare in tempi diversi. Una condizione passata con una conseguenza presente: <em>Wenn er den Job angenommen hätte, würde er jetzt in München wohnen.</em> Il primo verbo è al Konjunktiv II passato, il secondo al presente: ogni parte prende il tempo di ciò che dice. Dopo la frase con <em>wenn</em> la principale comincia con il verbo coniugato: <em>Wenn das Wetter schön ist, <strong>gehen</strong> wir wandern.</em>"
      },
      {
        contrast: "I tre tipi corrispondono a quelli italiani: <em>se piove, restiamo</em>; <em>se avessi più soldi, lavorerei meno</em>; <em>se mi avessi chiesto, ti avrei aiutato</em>. Due differenze. Nel tipo reale l'italiano usa spesso il futuro (<em>se pioverà, resteremo</em>), il tedesco il presente: <em>Wenn es regnet, bleiben wir</em>. Negli irreali l'italiano ha due modi (congiuntivo nella condizione, condizionale nella conseguenza), il tedesco uno solo, il Konjunktiv II, in tutte e due le parti."
      },
      {
        trap: "Dopo una frase con <em>wenn</em> l'italiano mantiene l'ordine soggetto-verbo (<em>se piove, noi restiamo</em>); in tedesco la frase con <em>wenn</em> occupa il primo posto e il verbo viene subito dopo: <em>Wenn es regnet, bleiben wir</em>, non «Wenn es regnet, wir bleiben». E <em>würde</em> non si usa di solito nella frase con <em>wenn</em> insieme a <em>hätte</em> o <em>wäre</em>: <em>Wenn ich Zeit hätte</em>, non «Wenn ich Zeit haben würde»."
      },
      {
        tip: "Per scegliere il tipo, chiediti: la condizione può ancora avverarsi? Se sì, indicativo. Se no e riguarda adesso, <em>hätte, wäre, würde</em>. Se no e riguarda il passato, <em>hätte</em> o <em>wäre</em> + participio."
      }
    ],
    grammar: {
      title: "Il periodo ipotetico: reale, irreale, misto",
      note: "<b>Reale</b>: indicativo. <b>Irreale presente</b>: Konjunktiv II presente. <b>Irreale passato</b>: Konjunktiv II passato. <b>Misto</b>: ogni parte prende il tempo di ciò che dice.",
      table: {
        head: ["tipo", "condizione (wenn ...)", "conseguenza"],
        rows: [
          ["reale", "Wenn es regnet,", "bleiben wir zu Hause."],
          ["irreale presente", "Wenn ich Zeit hätte,", "würde ich kommen."],
          ["irreale passato", "Wenn ich Zeit gehabt hätte,", "wäre ich gekommen."],
          ["misto", "Wenn ich den Job angenommen hätte,", "würde ich jetzt in München wohnen."]
        ]
      },
      examples: [
        { tr: "Se domani piove, restiamo a casa.", note: "reale: Präsens anche per il futuro" },
        { tr: "Se avessi più soldi, lavorerei di meno.", note: "irreale al presente" },
        { tr: "Se mi avessi chiesto, ti avrei aiutato.", note: "irreale al passato" },
        { tr: "Se avesse accettato il lavoro, adesso abiterebbe a Monaco.", note: "misto: condizione passata, conseguenza presente" },
        { tr: "Se il tempo è bello, andiamo a fare un'escursione.", note: "reale: la principale comincia con il verbo" },
        { tr: "Se fossi in te, accetterei l'offerta.", note: "irreale: il classico consiglio" }
      ]
    },
    vocab: [
      "la condizione",
      "l'offerta",
      "la possibilità",
      "il caso (in diesem Fall: in questo caso)",
      "la conseguenza",
      "il rischio",
      "accettare (un'offerta)",
      "rifiutare",
      "dipendere (von + dativo: da)",
      "rischiare",
      "eventualmente, in certe circostanze",
      "seriamente"
    ],
    exercises: [
      {
        q: "Come dici «Se domani piove, restiamo a casa»?",
        opts: [
          "Wenn es morgen regnet, bleiben wir zu Hause.",
          "Wenn es morgen regnen würde, blieben wir zu Hause.",
          "Wenn es morgen regnet, wir bleiben zu Hause."
        ],
        why: "Condizione possibile: indicativo, e dopo la frase con <i>wenn</i> il verbo viene subito: <b>bleiben wir</b>. La seconda è un irreale, cioè dice che non pioverà; la terza ha l'ordine sbagliato."
      },
      {
        q: "Che tipo di periodo ipotetico è «Wenn ich mehr Geld hätte, würde ich weniger arbeiten»?",
        opts: [
          "irreale al presente",
          "reale",
          "irreale al passato"
        ],
        why: "<i>hätte</i> e <i>würde arbeiten</i> sono Konjunktiv II presente: oggi non ho più soldi. Per il passato servirebbe <i>gehabt hätte</i>."
      },
      {
        q: "Come dici «Se mi avessi chiesto, ti avrei aiutato»?",
        opts: [
          "Wenn du mich gefragt hättest, hätte ich dir geholfen.",
          "Wenn du mich fragen würdest, würde ich dir helfen.",
          "Wenn du mich gefragt hast, habe ich dir geholfen."
        ],
        why: "Irreale al passato: Konjunktiv II passato in tutte e due le parti. La seconda frase è al presente, la terza all'indicativo."
      },
      {
        q: "Come dici «Se avesse accettato il lavoro, adesso abiterebbe a Monaco»?",
        opts: [
          "Wenn er den Job angenommen hätte, würde er jetzt in München wohnen.",
          "Wenn er den Job angenommen hätte, hätte er jetzt in München gewohnt.",
          "Wenn er den Job annehmen würde, hätte er jetzt in München gewohnt."
        ],
        why: "Caso misto: la condizione riguarda il passato (<b>angenommen hätte</b>), la conseguenza il presente (<b>würde ... wohnen</b>), come dice <i>jetzt</i>."
      },
      {
        q: "Completa: «Wenn ich du ___, würde ich das Angebot annehmen.»",
        hint: "Konjunktiv II di sein, ich",
        why: "<b>Wäre</b>: <i>Wenn ich du wäre</i> è la formula fissa del consiglio, con <i>wäre</i> in fondo alla frase con <i>wenn</i>."
      },
      {
        q: "Completa la frase.",
        tr: "Se il tempo è bello, andiamo a fare un'escursione.",
        why: "<i>Wenn das Wetter schön ist, gehen wir wandern</i>: <i>ist</i> in fondo alla frase con <i>wenn</i>, poi la principale comincia con il verbo <i>gehen</i>."
      },
      {
        q: "Completa la frase.",
        tr: "Se mi avessi chiesto, ti avrei aiutato.",
        why: "<i>Wenn du mich gefragt hättest, hätte ich dir geholfen</i>: Konjunktiv II passato in tutte e due le parti."
      },
      {
        q: "Traduci: «Se avessi più soldi, lavorerei di meno.»",
        why: "<i>Wenn ich mehr Geld hätte, würde ich weniger arbeiten</i>. Senza <i>wenn</i>: <i>Hätte ich mehr Geld, würde ich weniger arbeiten</i>."
      },
      {
        tr: "Se avessi accettato l'offerta, adesso lavorerei ad Amburgo. Ma non tutto dipende dai soldi.",
        why: "In <i>Angebot</i> l'accento cade su <b>An</b>; in <i>Hamburg</i> la <b>g</b> finale si legge [k]; in <i>hängt</i> la <b>ng</b> è un suono nasale [ŋ]."
      },
      {
        tr: "Se domani piove, restiamo a casa e giochiamo a carte.",
        why: "In <i>regnet</i> la <b>g</b> si sente davanti alla <i>n</i>: <i>reg-net</i>; in <i>bleiben</i> la <b>ei</b> è [aɪ]; in <i>spielen</i> la <b>sp</b> iniziale è [ʃp]."
      }
    ]
  },
  "lesson:b2-u02-l2": {
    theme: "Imprevisti",
    title: "Falls, sofern, es sei denn",
    objectives: [
      "esprimere una condizione con falls, sofern e vorausgesetzt",
      "dire «a meno che» con es sei denn",
      "costruire la condizione senza wenn, con il verbo al primo posto",
      "riconoscere le formule del registro formale (Sollten Sie ..., im Notfall)"
    ],
    theory: [
      {
        h: "Altre congiunzioni per la condizione",
        p: "<strong>falls</strong> (<em>nel caso in cui</em>) presenta la condizione come possibile ma non sicura: <em>Falls du Hilfe brauchst, ruf mich an.</em> <strong>sofern</strong> (<em>purché, sempre che</em>) è più formale: <em>Sofern nichts dazwischenkommt, sind wir um acht da.</em> <strong>vorausgesetzt</strong> (<em>a condizione che</em>) si usa con <em>dass</em> e il verbo in fondo o con una frase principale dopo la virgola: <em>Wir grillen, vorausgesetzt, das Wetter ist gut.</em> <strong>es sei denn</strong> (<em>a meno che</em>) è seguito da una frase con il verbo in seconda posizione: <em>Wir fahren morgen los, es sei denn, es schneit.</em>"
      },
      {
        h: "La condizione senza wenn e il registro formale",
        p: "Si può togliere <em>wenn</em> e mettere il verbo coniugato al <strong>primo posto</strong>: <em>Hätte ich das gewusst, wäre ich gekommen.</em> Nelle lettere, negli avvisi e nelle mail di lavoro si usa spesso <strong>sollte</strong> al primo posto: <em>Sollten Sie Fragen haben, wenden Sie sich bitte an uns.</em> Lo stile formale preferisce anche un nome al posto della frase: <em>im Notfall</em> (in caso di emergenza), <em>im Falle eines Brandes</em> (in caso di incendio, con il genitivo)."
      },
      {
        contrast: "<em>Nel caso in cui</em>, <em>purché</em>, <em>a meno che</em>, <em>qualora</em> vogliono in italiano il congiuntivo. Le congiunzioni tedesche corrispondenti vogliono l'<strong>indicativo</strong>: <em>falls es regnet</em>, <em>sofern nichts dazwischenkommt</em>. Il formale <em>Sollten Sie Fragen haben</em> corrisponde al <em>qualora aveste domande</em> delle lettere italiane."
      },
      {
        trap: "<em>A meno che non piova</em>: l'italiano mette un <em>non</em> che non nega niente. <em>es sei denn</em> non lo vuole: <em>es sei denn, es regnet</em>. Con <em>nicht</em> la frase direbbe il contrario. E dopo <em>es sei denn</em> il verbo sta in seconda posizione, non in fondo."
      },
      {
        tip: "Nel parlato basta quasi sempre <em>wenn</em>; <em>falls</em> è utile quando vuoi sottolineare che la cosa potrebbe anche non succedere (<em>Falls ich mich verspäte, ...</em>). Nelle mail formali, <em>Sollten Sie ...</em> suona subito professionale."
      }
    ],
    grammar: {
      title: "falls, sofern, es sei denn e la condizione senza wenn",
      note: "<b>falls, sofern</b>: verbo in fondo. <b>es sei denn,</b> + frase con il verbo in seconda posizione. <b>Senza wenn</b>: verbo coniugato al primo posto (<b>Hätte ich ..., Sollten Sie ...</b>).",
      table: {
        head: ["", "esempio", "italiano"],
        rows: [
          ["falls", "Falls du Hilfe brauchst, ruf mich an.", "nel caso in cui"],
          ["sofern", "Sofern nichts dazwischenkommt, ...", "purché, sempre che"],
          ["es sei denn", "..., es sei denn, es schneit.", "a meno che"],
          ["senza wenn", "Sollten Sie Fragen haben, ...", "qualora"]
        ]
      },
      examples: [
        { tr: "Nel caso avessi bisogno di aiuto, chiamami.", note: "falls: condizione possibile, indicativo" },
        { tr: "Salvo imprevisti, saremo lì alle otto.", note: "sofern: formale; dazwischenkommen = capitare in mezzo" },
        { tr: "Partiamo domani, a meno che non nevichi.", note: "es sei denn: nessuna negazione in tedesco" },
        { tr: "Se l'avessi saputo, sarei venuto.", note: "senza wenn: verbo al primo posto" },
        { tr: "Qualora abbiate domande, rivolgetevi a noi.", note: "Sollten Sie ...: formula delle lettere" },
        { tr: "In caso di emergenza chiamate questo numero.", note: "im Notfall: un nome al posto della frase" }
      ]
    },
    vocab: [
      "l'emergenza",
      "l'eccezione",
      "il presupposto, il requisito",
      "il dubbio (im Zweifel: nel dubbio)",
      "la richiesta (di informazioni)",
      "capitare un imprevisto",
      "rivolgersi a",
      "avvisare, informare",
      "disdire, annullare",
      "rimandare, spostare",
      "eventualmente, se necessario",
      "a condizione che"
    ],
    exercises: [
      {
        q: "Come dici «Andiamo a passeggio, a meno che non piova»?",
        opts: [
          "Wir gehen spazieren, es sei denn, es regnet.",
          "Wir gehen spazieren, es sei denn, es regnet nicht.",
          "Wir gehen spazieren, es sei denn, regnet es."
        ],
        why: "<b>es sei denn</b> non vuole la negazione (con <i>nicht</i> si dice il contrario) ed è seguito da una frase con il verbo in seconda posizione: <i>es regnet</i>."
      },
      {
        q: "Quale frase è più adatta a una mail formale?",
        opts: [
          "Sollten Sie Fragen haben, wenden Sie sich bitte an uns.",
          "Wenn du Fragen hast, frag einfach.",
          "Falls du was wissen willst, sag Bescheid."
        ],
        why: "<b>Sollten Sie ...</b> al primo posto, con <i>Sie</i> e <i>sich wenden an</i>, è la formula delle lettere e delle mail di lavoro. Le altre due danno del tu e sono colloquiali."
      },
      {
        q: "Completa: «___ du Hilfe brauchst, ruf mich an.» (nel caso in cui, non wenn)",
        hint: "congiunzione per una condizione possibile",
        why: "<b>Falls</b>: presenta la condizione come possibile ma non sicura, e manda il verbo <i>brauchst</i> in fondo."
      },
      {
        q: "Completa senza wenn: «___ ich das gewusst, wäre ich gekommen.»",
        hint: "verbo al primo posto, Konjunktiv II di haben",
        why: "<b>Hätte</b>: senza <i>wenn</i> il verbo coniugato apre la frase, e la principale comincia con <i>wäre</i>."
      },
      {
        q: "Completa la frase.",
        tr: "Partiamo domani, a meno che non nevichi.",
        why: "<i>es sei denn</i> è una formula fissa: due parole dopo <i>es</i>, poi la virgola e una frase con il verbo in seconda posizione."
      },
      {
        q: "Abbina ogni espressione al suo significato.",
        pairs: [
          "nel caso in cui",
          "purché, sempre che",
          "a meno che",
          "eventualmente, se necessario"
        ]
      },
      {
        q: "Metti in ordine le parole.",
        tr: "Qualora abbiate domande, rivolgetevi a noi.",
        why: "<i>Sollten Sie Fragen haben, wenden Sie sich bitte an uns.</i> <i>Sollten</i> apre la condizione, <i>haben</i> la chiude; la principale comincia con il verbo <i>wenden</i>."
      },
      {
        q: "Traduci senza wenn: «Se l'avessi saputo, sarei venuto.»",
        why: "<i>Hätte ich das gewusst, wäre ich gekommen</i>. Si può aggiungere <i>dann</i>: <i>Hätte ich das gewusst, dann wäre ich gekommen</i>."
      },
      {
        tr: "Qualora domani nevicasse, rimandiamo il viaggio. Se avete domande, rivolgetevi alla reception.",
        why: "In <i>schneien</i> la <b>sch</b> è [ʃ] e la <b>ei</b> è [aɪ]; in <i>verschieben</i> la <b>v</b> si legge [f]; in <i>Rezeption</i> la <b>tion</b> si legge [tsi̯oːn]."
      },
      {
        tr: "Salvo imprevisti, saremo lì alle otto.",
        why: "In <i>dazwischenkommt</i> la <b>z</b> è [ts] e la <b>sch</b> è [ʃ]; in <i>acht</i> la <b>ch</b> dopo <i>a</i> è il suono duro [x]; in <i>Uhr</i> la <b>h</b> allunga la <i>u</i>."
      }
    ]
  },
  "lesson:b2-u02-l3": {
    theme: "Desideri e rimpianti",
    title: "Se solo ...",
    objectives: [
      "esprimere un desiderio irreale con wenn ... bloß / nur / doch",
      "esprimere un rimpianto con il verbo al primo posto",
      "rafforzare un ordine con bloß",
      "usare nur nella condizione nel senso di «basterebbe che»"
    ],
    theory: [
      {
        h: "Desideri irreali",
        p: "Un desiderio che non si può realizzare ha la forma di una condizione senza conseguenza, con il <strong>Konjunktiv II</strong> e una particella: <strong>bloß</strong>, <strong>nur</strong> o <strong>doch</strong>. Con <em>wenn</em> il verbo va in fondo: <em>Wenn ich bloß mehr Zeit hätte!</em> Senza <em>wenn</em> il verbo va al primo posto: <em>Hätte ich nur nicht so viel gegessen! Wäre ich doch zu Hause geblieben!</em> Per il presente si usa anche <em>würde</em>: <em>Wenn es doch endlich regnen würde!</em>"
      },
      {
        h: "bloß negli ordini e nur nella condizione",
        p: "In un ordine <strong>bloß</strong> lo rende più insistente, quasi minaccioso: <em>Mach das bloß nicht!</em> (non provarci nemmeno). Dentro una condizione vera, <strong>nur</strong> significa «basterebbe che»: <em>Wenn du nur ein bisschen Geduld hättest, würdest du es schaffen.</em>"
      },
      {
        contrast: "L'italiano esprime lo stesso desiderio con <em>se solo</em> o <em>magari</em>: <em>Se solo avessi più tempo! Magari fossi rimasto a casa!</em> Il tedesco usa <em>bloß</em>, <em>nur</em> o <em>doch</em>, che però non stanno all'inizio come <em>se solo</em>: vanno dopo il soggetto, e prima della negazione: <em>Hätte ich nur nicht so viel gegessen!</em>"
      },
      {
        trap: "Qui <em>nur</em> e <em>bloß</em> non significano <em>solo</em>: <em>Wenn ich bloß mehr Zeit hätte!</em> non vuol dire «se avessi soltanto più tempo», ma «se solo avessi più tempo». E <em>doch</em> in un desiderio non è il <em>doch</em> della risposta (<em>Doch!</em>, sì invece): qui rafforza il desiderio."
      },
      {
        tip: "Le tre particelle sono quasi intercambiabili nei desideri; <em>bloß</em> è un po' più emotivo, <em>doch</em> un po' più letterario. Per non sbagliare l'ordine, prima scrivi la frase senza particella, poi mettila dopo il soggetto."
      }
    ],
    grammar: {
      title: "Desideri irreali: wenn ... bloß / nur / doch + Konjunktiv II",
      note: "<b>Wenn</b> + particella + verbo in fondo, oppure verbo al <b>primo posto</b> + particella. La particella sta dopo il soggetto e prima di <i>nicht</i>.",
      table: {
        head: ["", "presente", "passato"],
        rows: [
          ["con wenn", "Wenn ich bloß mehr Zeit hätte!", "Wenn ich bloß früher gekommen wäre!"],
          ["senza wenn", "Hätte ich nur mehr Zeit!", "Wäre ich doch früher gekommen!"],
          ["con würde", "Wenn es doch endlich regnen würde!", "-"]
        ]
      },
      examples: [
        { tr: "Se solo avessi più tempo!", note: "wenn + bloß, verbo in fondo" },
        { tr: "Se solo non avessi mangiato così tanto!", note: "verbo al primo posto, nur prima di nicht" },
        { tr: "Magari fossi rimasto a casa!", note: "doch: desiderio sul passato" },
        { tr: "Se solo finalmente piovesse!", note: "würde + infinito al presente" },
        { tr: "Non provarci nemmeno!", note: "bloß in un ordine: tono minaccioso" },
        { tr: "Se avessi solo un po' di pazienza, ce la faresti.", note: "nur in una vera condizione: basterebbe che" }
      ]
    },
    vocab: [
      "la pazienza",
      "la sfortuna (So ein Pech!: che sfortuna!)",
      "il caso, la coincidenza",
      "il destino",
      "la preoccupazione",
      "la rabbia, il fastidio, i guai",
      "arrabbiarsi",
      "sperare",
      "desiderare ardentemente (nach + dativo)",
      "finalmente",
      "assolutamente, a tutti i costi",
      "invano"
    ],
    exercises: [
      {
        q: "Come dici «Se solo avessi più tempo!»?",
        opts: [
          "Wenn ich bloß mehr Zeit hätte!",
          "Wenn ich bloß mehr Zeit habe!",
          "Wenn bloß ich mehr Zeit hätte!"
        ],
        why: "Il desiderio irreale vuole il Konjunktiv II (<b>hätte</b>), e <b>bloß</b> sta dopo il soggetto. La seconda è all'indicativo, la terza mette la particella davanti al soggetto."
      },
      {
        q: "Che cosa significa «Mach das bloß nicht!»?",
        opts: [
          "Non provarci nemmeno!",
          "Fallo solo una volta.",
          "Non fare solo questo."
        ],
        why: "In un ordine <b>bloß</b> rende il divieto insistente, quasi minaccioso. Non significa <i>solo</i>."
      },
      {
        q: "Completa con una particella: «Hätte ich ___ nicht so viel gegessen!»",
        hint: "particella del rimpianto, prima di nicht",
        why: "<b>nur</b>, <b>bloß</b> o <b>doch</b>: tutte e tre rafforzano il rimpianto e stanno prima di <i>nicht</i>."
      },
      {
        q: "Completa: «___ ich doch zu Hause geblieben!»",
        hint: "verbo al primo posto, Konjunktiv II di sein",
        why: "<b>Wäre</b>: <i>bleiben</i> vuole <i>sein</i>, e senza <i>wenn</i> il verbo coniugato apre la frase."
      },
      {
        q: "Completa la frase.",
        tr: "Se solo finalmente piovesse!",
        why: "<i>Wenn es doch endlich regnen würde!</i> Al presente si usa spesso <i>würde</i> + infinito; <i>würde</i> chiude la frase con <i>wenn</i>."
      },
      {
        q: "Abbina ogni espressione al suo significato.",
        pairs: [
          "Se solo ...!",
          "finalmente",
          "assolutamente, a tutti i costi",
          "invano"
        ]
      },
      {
        q: "Metti in ordine le parole.",
        tr: "Se solo non avessi mangiato così tanto!",
        why: "<i>Hätte ich nur nicht so viel gegessen!</i> Verbo al primo posto, poi il soggetto, la particella <i>nur</i>, la negazione e il participio in fondo."
      },
      {
        q: "Traduci: «Se solo me l'avessi detto prima!»",
        why: "<i>Wenn du es mir bloß früher gesagt hättest!</i> oppure <i>Hättest du es mir bloß früher gesagt!</i> Al posto di <i>bloß</i> vanno bene <i>nur</i> e <i>doch</i>."
      },
      {
        tr: "Se solo non avessi aspettato così tanto! Adesso l'appartamento non c'è più. Che sfortuna.",
        why: "In <i>bloß</i> la <b>o</b> è lunga; in <i>gewartet</i> la <b>w</b> è [v]; in <i>Pech</i> la <b>ch</b> dopo <i>e</i> è il suono morbido [ç]."
      },
      {
        tr: "Se solo avessi avuto un po' più di pazienza!",
        why: "In <i>Geduld</i> l'accento cade su <b>duld</b>; in <i>bisschen</i> la <b>sch</b> è [ʃ]; in <i>gehabt</i> la <b>b</b> finale si legge [p]."
      }
    ]
  },
  "lesson:b2-u02-test": {
    theme: "Verifica",
    title: "Test: Condizioni",
    objectives: [
      "verificare i tipi di periodo ipotetico, falls, es sei denn e la condizione senza wenn"
    ],
    theory: [
      {
        p: "Dieci domande sull'intera unità. Si supera con il 70%. Non riguardare le lezioni mentre rispondi: se non ricordi qualcosa, è meglio tornare a ripassare."
      }
    ],
    exercises: [
      {
        q: "Completa: «Wenn er früher losgefahren ___, hätte er den Zug erreicht.»",
        hint: "Konjunktiv II di sein, er",
        why: "<b>Wäre</b>: <i>losfahren</i> vuole <i>sein</i>, e il Konjunktiv II passato chiude la frase con <i>wenn</i>."
      },
      {
        q: "Completa: «Wir kommen, es sei denn, es ___ etwas dazwischen.»",
        hint: "dazwischenkommen, indicativo presente",
        why: "<b>kommt</b>: dopo <i>es sei denn</i> c'è una frase principale all'indicativo, con il verbo in seconda posizione e la particella <i>dazwischen</i> in fondo."
      },
      {
        q: "Completa la formula formale: «___ Sie Fragen haben, wenden Sie sich an uns.»",
        hint: "verbo modale al primo posto",
        why: "<b>Sollten</b>: la condizione senza <i>wenn</i> delle lettere formali, con <i>haben</i> in fondo."
      },
      {
        q: "Quale frase è un periodo ipotetico irreale al passato?",
        opts: [
          "Wenn sie angerufen hätte, wäre ich gekommen.",
          "Wenn sie anruft, komme ich.",
          "Wenn sie anrufen würde, käme ich."
        ],
        why: "Solo la prima ha il Konjunktiv II passato (<i>angerufen hätte</i>, <i>wäre gekommen</i>). La seconda è reale, la terza irreale al presente."
      },
      {
        q: "Quale frase significa «Vengo domani, a meno che non sia malato»?",
        opts: [
          "Ich komme morgen, es sei denn, ich bin krank.",
          "Ich komme morgen, es sei denn, ich bin nicht krank.",
          "Ich komme morgen, es sei denn, ich krank bin."
        ],
        why: "<i>es sei denn</i>: niente negazione e verbo in seconda posizione (<i>ich bin krank</i>)."
      },
      {
        q: "Completa: «Hätte ich gestern nicht so viel gearbeitet, ...»",
        opts: [
          "wäre ich jetzt nicht so müde.",
          "wäre ich jetzt nicht so müde gewesen.",
          "bin ich jetzt nicht so müde."
        ],
        why: "Caso misto: la condizione è passata, la conseguenza riguarda il presente (<i>jetzt</i>), quindi Konjunktiv II presente: <b>wäre ... müde</b>."
      },
      {
        q: "Completa la frase.",
        tr: "Se avessi più tempo, farei sport più spesso.",
        why: "<i>Wenn ich mehr Zeit hätte, würde ich öfter Sport machen</i>: irreale al presente, <i>hätte</i> in fondo e <i>würde</i> all'inizio della principale."
      },
      {
        q: "Completa la frase senza wenn.",
        tr: "Se l'avessi saputo, ti avrei aiutato.",
        why: "<i>Hätte ich das gewusst, hätte ich dir geholfen</i>: il primo <i>hätte</i> apre la condizione, il secondo apre la principale."
      },
      {
        tr: "Se domani hai tempo, passa da me. Se avessi saputo che eri in città, ti avrei chiamato già ieri.",
        why: "In <i>vorbei</i> la <b>v</b> si legge [f]; in <i>Stadt</i> la <b>dt</b> finale è [t]; in <i>angerufen</i> l'accento cade su <b>an</b>."
      },
      {
        tr: "Qualora fosse impedito, la preghiamo di disdire per tempo.",
        why: "In <i>verhindert</i> la <b>v</b> si legge [f]; in <i>rechtzeitig</i> la <b>ch</b> è [ç] e la <b>z</b> è [ts]; in <i>absagen</i> la <b>b</b> davanti a <i>s</i> si legge [p]."
      }
    ]
  }
});
