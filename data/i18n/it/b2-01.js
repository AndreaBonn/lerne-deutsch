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
        trap: "Dopo una frase con <em>wenn</em> l'italiano mantiene l'ordine soggetto-verbo (<em>se piove, noi restiamo</em>); in tedesco la frase con <em>wenn</em> occupa il primo posto e il verbo viene subito dopo: <em>Wenn es regnet, bleiben wir</em>, non «Wenn es regnet, wir bleiben». E con <em>haben</em> e <em>sein</em> nella frase con <em>wenn</em> si preferiscono normalmente <em>hätte</em> e <em>wäre</em>: <em>Wenn ich Zeit hätte</em> è più comune di <em>Wenn ich Zeit haben würde</em>, che è possibile ma pesante."
      },
      {
        tip: "Per scegliere il tipo, chiediti come presenti la condizione. Aperta, cioè possibile: indicativo. Immaginata, remota o contraria ai fatti di adesso: <em>hätte, wäre, würde</em>. Contraria a ciò che è successo: <em>hätte</em> o <em>wäre</em> + participio."
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
        why: "Condizione possibile: indicativo, e dopo la frase con <i>wenn</i> il verbo viene subito: <b>bleiben wir</b>. La seconda presenta la pioggia come un'ipotesi più remota; la terza ha l'ordine sbagliato."
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
        contrast: "<em>Nel caso in cui</em>, <em>purché</em>, <em>a meno che</em>, <em>qualora</em> vogliono in italiano il congiuntivo. Con le congiunzioni tedesche corrispondenti la condizione aperta si esprime con l'<strong>indicativo</strong>, senza alcun congiuntivo: <em>falls es regnet</em>, <em>sofern nichts dazwischenkommt</em>. Per presentarla come più remota si può usare il Konjunktiv II: <em>Falls du Hilfe brauchen solltest, ...</em> Il formale <em>Sollten Sie Fragen haben</em> corrisponde al <em>qualora aveste domande</em> delle lettere italiane."
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
        { tr: "Salvo imprevisti, saremo lì alle otto.", note: "sofern: formale; dazwischenkommen = sopraggiungere un imprevisto" },
        { tr: "Partiamo domani, a meno che non nevichi.", note: "es sei denn: niente «non» espletivo in tedesco" },
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
        why: "<b>es sei denn</b> significa già «a meno che» e non vuole il «non» espletivo dell'italiano (con <i>nicht</i> la condizione sarebbe la contraria); è seguito da una frase con il verbo in seconda posizione: <i>es regnet</i>."
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
      "capire nur dentro un periodo ipotetico completo (Wenn du nur ..., würdest du ...)"
    ],
    theory: [
      {
        h: "Desideri irreali",
        p: "Un desiderio presentato come lontano dalla realtà di adesso, oppure un rimpianto per il passato, ha la forma di una condizione senza conseguenza, con il <strong>Konjunktiv II</strong> e una particella: <strong>bloß</strong>, <strong>nur</strong> o <strong>doch</strong>. Con <em>wenn</em> il verbo va in fondo: <em>Wenn ich bloß mehr Zeit hätte!</em> Senza <em>wenn</em> il verbo va al primo posto: <em>Hätte ich nur nicht so viel gegessen! Wäre ich doch zu Hause geblieben!</em> Per il presente si usa anche <em>würde</em>: <em>Wenn es doch endlich regnen würde!</em>"
      },
      {
        h: "bloß negli ordini e nur nella condizione",
        p: "In un ordine <strong>bloß</strong> lo rende più insistente, quasi minaccioso: <em>Mach das bloß nicht!</em> (non provarci nemmeno). Dentro un periodo ipotetico completo, cioè con la conseguenza, <strong>nur</strong> può limitare ciò che segue o rafforzare il desiderio: <em>Wenn du nur ein bisschen Geduld hättest, würdest du es schaffen</em> si può rendere con «basterebbe un po' di pazienza e ce la faresti»."
      },
      {
        contrast: "L'italiano esprime lo stesso desiderio con <em>se solo</em> o <em>magari</em>: <em>Se solo avessi più tempo! Magari fossi rimasto a casa!</em> Il tedesco usa <em>bloß</em>, <em>nur</em> o <em>doch</em>, che però non stanno all'inizio come <em>se solo</em>: vanno dentro la frase, di solito dopo il soggetto e i pronomi e prima della negazione: <em>Hätte ich nur nicht so viel gegessen! Wenn du es mir bloß früher gesagt hättest!</em> La posizione esatta dipende anche da ciò che si vuole mettere in rilievo."
      },
      {
        trap: "Qui <em>nur</em> e <em>bloß</em> non significano <em>solo</em>: <em>Wenn ich bloß mehr Zeit hätte!</em> non vuol dire «se avessi soltanto più tempo», ma «se solo avessi più tempo». E <em>doch</em> in un desiderio non è il <em>doch</em> della risposta (<em>Doch!</em>, sì invece): qui rafforza il desiderio."
      },
      {
        tip: "Le tre particelle sono quasi intercambiabili nei desideri; <em>doch</em> rafforza il desiderio o il rimpianto come le altre, e la scelta dipende dal contesto e dall'intonazione, non dal registro: <em>Hätte ich doch ...!</em> si sente anche nella conversazione di tutti i giorni. Per non sbagliare l'ordine, prima scrivi la frase senza particella, poi mettila dopo il soggetto e gli eventuali pronomi."
      }
    ],
    grammar: {
      title: "Desideri irreali: wenn ... bloß / nur / doch + Konjunktiv II",
      note: "<b>Wenn</b> + particella + verbo in fondo, oppure verbo al <b>primo posto</b> + particella. La particella sta dentro la frase, di solito dopo il soggetto e i pronomi e prima di <i>nicht</i>.",
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
        { tr: "Basterebbe un po' di pazienza e ce la faresti.", note: "nur in un periodo ipotetico completo: limita ciò che segue" }
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
          "Wenn ich bloß hätte mehr Zeit!"
        ],
        why: "Il desiderio irreale vuole il Konjunktiv II (<b>hätte</b>), e <b>bloß</b> sta dopo il soggetto. La seconda è all'indicativo; la terza non manda il verbo in fondo, come vuole <i>wenn</i>."
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
        why: "In <i>Geduld</i> l'accento cade su <b>duld</b>; in <i>bisschen</i> la <b>s</b> e la <b>ch</b> si pronunciano separate, [sç]; in <i>gehabt</i> la <b>b</b> davanti a <i>t</i> si legge [p]."
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
        why: "<i>es sei denn</i>: niente «non» espletivo e verbo in seconda posizione (<i>ich bin krank</i>)."
      },
      {
        q: "Completa con una conseguenza che riguarda il presente (periodo ipotetico misto): «Hätte ich gestern nicht so viel gearbeitet, ...»",
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
  },
  "unit:b2-u03": {
    title: "Passivo e tempo del racconto",
    grammarNote: "passivo al Perfekt e al Plusquamperfekt (ist gebaut worden) · passivo con i modali (muss ausgefüllt werden) · passivo di stato (ist geschlossen) · Präteritum narrativo · ohne ... zu, statt ... zu, ohne dass, anstatt dass"
  },
  "lesson:b2-u03-l1": {
    theme: "Storia e processi tecnici",
    title: "È stato costruito, è stato riparato",
    objectives: [
      "formare il passivo al Perfekt e al Plusquamperfekt con worden",
      "usare il passivo con un verbo modale",
      "distinguere il passivo di processo (wird geschlossen) da quello di stato (ist geschlossen)",
      "raccontare la storia di un edificio o di un'invenzione"
    ],
    theory: [
      {
        h: "Il passivo al Perfekt",
        p: "Al Perfekt il passivo si forma con <strong>sein</strong> + participio II + <strong>worden</strong>: <em>Die Brücke ist letztes Jahr renoviert worden</em> (il ponte è stato ristrutturato l'anno scorso). Al Plusquamperfekt <em>sein</em> va al Präteritum: <em>Der Fehler war schon vorher entdeckt worden</em> (l'errore era già stato scoperto). Nei testi scritti e nella storia si usa spesso anche il Präteritum: <em>Das Rathaus wurde im sechzehnten Jahrhundert gebaut.</em>"
      },
      {
        h: "Con i modali e il passivo di stato",
        p: "Con un <strong>verbo modale</strong> si coniuga il modale e il passivo resta all'infinito, participio + <em>werden</em>, in fondo: <em>Das Formular muss bis Freitag ausgefüllt werden. Die Daten konnten nicht gespeichert werden.</em> Il <strong>passivo di stato</strong> (Zustandspassiv) si forma con <strong>sein</strong> + participio e descrive il risultato di un'azione: <em>Das Geschäft ist sonntags geschlossen.</em> Il passivo di processo, con <em>werden</em>, descrive l'azione: <em>Das Geschäft wird um acht geschlossen.</em>"
      },
      {
        contrast: "L'italiano usa <em>essere</em> sia per il processo sia per lo stato (<em>il negozio è chiuso</em>), e <em>venire</em> solo per il processo e solo nei tempi semplici (<em>viene chiuso alle otto</em>). Il tedesco separa sempre: <em>werden</em> per il processo, <em>sein</em> per lo stato. <em>È stato costruito</em> diventa <em>ist gebaut worden</em>: anche qui c'è <em>sein</em>, come in italiano, ma accanto al participio serve <em>worden</em>."
      },
      {
        trap: "Nel passivo il participio di <em>werden</em> è <strong>worden</strong>, senza <em>ge-</em>: <em>ist gebaut worden</em>, non «ist gebaut geworden». <em>Geworden</em> è il participio di <em>werden</em> come verbo pieno, <em>diventare</em>: <em>Er ist Arzt geworden.</em> E <em>è stato costruito</em> non è «ist gebaut gewesen»: <em>gewesen</em> qui non si usa."
      },
      {
        tip: "Per capire se serve <em>werden</em> o <em>sein</em>, chiediti: sta succedendo qualcosa, o descrivo come stanno le cose? <em>Die Tür wird geöffnet</em>: qualcuno la apre. <em>Die Tür ist geöffnet</em>: è aperta."
      }
    ],
    grammar: {
      title: "Il passivo: Perfekt, modali, passivo di stato",
      note: "<b>Perfekt</b>: ist + participio + <b>worden</b>. <b>Plusquamperfekt</b>: war + participio + worden. <b>Con un modale</b>: modale + participio + werden. <b>Stato</b>: sein + participio.",
      table: {
        head: ["", "esempio", "italiano"],
        rows: [
          ["Präteritum", "Das Haus wurde 1900 gebaut.", "la casa fu costruita"],
          ["Perfekt", "Das Haus ist 1900 gebaut worden.", "la casa è stata costruita"],
          ["Plusquamperfekt", "Das Haus war schon gebaut worden.", "la casa era già stata costruita"],
          ["con un modale", "Das Haus muss renoviert werden.", "la casa deve essere ristrutturata"],
          ["passivo di stato", "Das Haus ist renoviert.", "la casa è ristrutturata"]
        ]
      },
      examples: [
        { tr: "Il municipio fu costruito nel sedicesimo secolo.", note: "Präteritum: tipico dei testi storici" },
        { tr: "Il ponte è stato ristrutturato l'anno scorso.", note: "Perfekt: ist + participio + worden" },
        { tr: "L'errore era già stato scoperto prima.", note: "Plusquamperfekt: war + participio + worden" },
        { tr: "Il modulo deve essere compilato entro venerdì.", note: "modale + participio + werden" },
        { tr: "Non è stato possibile salvare i dati.", note: "konnten ... gespeichert werden: modale al Präteritum" },
        { tr: "Il negozio la domenica è chiuso.", note: "passivo di stato: sein + participio" }
      ]
    },
    vocab: [
      "il secolo",
      "l'edificio",
      "il ponte",
      "l'opera architettonica, l'edificio",
      "l'invenzione",
      "il procedimento",
      "erigere, costruire",
      "distruggere",
      "inventare",
      "produrre, fabbricare",
      "scoprire",
      "ristrutturare"
    ],
    exercises: [
      {
        q: "Come dici «Il ponte è stato ristrutturato»?",
        opts: [
          "Die Brücke ist renoviert worden.",
          "Die Brücke ist renoviert geworden.",
          "Die Brücke hat renoviert worden."
        ],
        why: "Passivo al Perfekt: <b>ist</b> + participio + <b>worden</b>. <i>Geworden</i> è il participio di <i>werden</i> come <i>diventare</i>, e l'ausiliare è <i>sein</i>, non <i>haben</i>."
      },
      {
        q: "Quale frase descrive uno stato, «Il negozio è chiuso»?",
        opts: [
          "Das Geschäft ist geschlossen.",
          "Das Geschäft wird geschlossen.",
          "Das Geschäft ist geschlossen worden."
        ],
        why: "Lo stato si esprime con <b>sein</b> + participio. <i>Wird geschlossen</i> descrive l'azione di chiudere, <i>ist geschlossen worden</i> un'azione di chiusura avvenuta in passato."
      },
      {
        q: "Come dici «Il modulo deve essere compilato»?",
        opts: [
          "Das Formular muss ausgefüllt werden.",
          "Das Formular muss ausfüllen werden.",
          "Das Formular wird ausgefüllt müssen."
        ],
        why: "Con un modale: modale coniugato (<b>muss</b>) + participio + <b>werden</b> in fondo."
      },
      {
        q: "Completa il passivo al Perfekt: «Die Kirche ist 1890 gebaut ___.»",
        hint: "participio di werden nel passivo",
        why: "<b>worden</b>: nel passivo al Perfekt il participio di <i>werden</i> perde il <i>ge-</i>."
      },
      {
        q: "Completa al Plusquamperfekt: «Der Fehler ___ schon vorher entdeckt worden.»",
        hint: "Präteritum di sein",
        why: "<b>war</b>: il Plusquamperfekt del passivo ha <i>sein</i> al Präteritum, poi participio e <i>worden</i>."
      },
      {
        q: "Completa: «Die Daten konnten nicht gespeichert ___.»",
        hint: "infinito del passivo",
        why: "<b>werden</b>: dopo un modale il passivo resta all'infinito, participio + <i>werden</i>."
      },
      {
        q: "Completa la frase.",
        tr: "Qui dal 1950 si producono automobili.",
        why: "<i>Hier werden seit 1950 Autos hergestellt</i>: il <i>si</i> passivante italiano diventa un passivo con <i>werden</i>, al plurale perché il soggetto è <i>Autos</i>."
      },
      {
        q: "Traduci: «La città è stata distrutta durante la guerra.»",
        why: "<i>Die Stadt ist im Krieg zerstört worden</i>, oppure al Präteritum <i>Die Stadt wurde im Krieg zerstört</i>. Al posto di <i>im Krieg</i> va bene <i>während des Krieges</i>."
      },
      {
        tr: "Il vecchio municipio fu costruito nel sedicesimo secolo. In guerra è stato distrutto quasi completamente, ma dopo è stato ricostruito fedele all'originale.",
        why: "In <i>Jahrhundert</i> la <b>J</b> si legge [j]; in <i>vollständig</i> la <b>v</b> si legge [f] e il <b>-ig</b> finale [ɪç]; in <i>originalgetreu</i> la <b>eu</b> è [ɔʏ]."
      },
      {
        tr: "Il ponte è stato ristrutturato l'anno scorso e adesso è di nuovo aperto.",
        why: "In <i>Brücke</i> la <b>ü</b> è breve; in <i>renoviert</i> la <b>v</b> si legge [v] perché la parola è di origine latina; in <i>geöffnet</i> la <b>ö</b> è breve e arrotondata."
      }
    ]
  },
  "lesson:b2-u03-l2": {
    theme: "Racconti",
    title: "Il Präteritum nel racconto",
    objectives: [
      "raccontare una storia al Präteritum",
      "coniugare al Präteritum i verbi forti più frequenti",
      "usare il Plusquamperfekt per ciò che era successo prima",
      "riconoscere lo stile delle fiabe (Es war einmal ...)"
    ],
    theory: [
      {
        h: "Il tempo del racconto scritto",
        p: "Nelle fiabe, nei romanzi, nelle biografie e negli articoli di cronaca il passato si racconta con il <strong>Präteritum</strong>: <em>Es war einmal ein armer Müller. Plötzlich klingelte das Telefon. Sie stand auf und ging zum Fenster.</em> I verbi deboli prendono <em>-te</em> (<em>klingelte, erzählte</em>); i verbi forti cambiano la vocale e alla prima e alla terza persona singolare non hanno desinenza (<em>ich lief, er lief</em>). Ciò che era successo prima si dice con il <strong>Plusquamperfekt</strong>: <em>Als sie ankam, war der Zug schon abgefahren.</em>"
      },
      {
        h: "Verbi forti da riconoscere",
        p: "Nel racconto tornano sempre gli stessi verbi forti: <em>gehen → ging, kommen → kam, stehen → stand, sitzen → saß, liegen → lag, laufen → lief, rufen → rief, ziehen → zog, treffen → traf, finden → fand, schreiben → schrieb, erschrecken → erschrak</em>. Il Perfekt resta nelle battute dei personaggi, perché è il tempo del parlato: <em>«Ich habe einen Traum gehabt», sagte sie.</em>"
      },
      {
        contrast: "La divisione assomiglia a quella italiana: nella lingua scritta si racconta con il passato remoto, nel parlato si usa il passato prossimo, come il tedesco usa Präteritum e Perfekt. La differenza è che il tedesco non ha un imperfetto separato: <em>Sie saß am Fenster</em> è <em>sedeva alla finestra</em>, <em>Plötzlich stand sie auf</em> è <em>all'improvviso si alzò</em>. Lo stesso tempo fa tutte e due le cose, e la differenza la danno gli avverbi (<em>plötzlich, immer, jeden Tag</em>)."
      },
      {
        trap: "Le forme forti non si ricavano dall'infinito con una regola: vanno imparate insieme al participio (<em>laufen, lief, gelaufen</em>; <em>ziehen, zog, gezogen</em>). Attenzione a <em>erschrecken</em>: nel senso di «spaventarsi» è forte (<em>sie erschrak</em>), nel senso di «spaventare qualcuno» è debole (<em>er erschreckte das Kind</em>)."
      },
      {
        tip: "Leggere una fiaba dei fratelli Grimm è il modo più rapido per fissare il Präteritum: quasi ogni frase ne ha uno, e le forme forti si ripetono di continuo."
      }
    ],
    grammar: {
      title: "Präteritum e Plusquamperfekt nel racconto",
      note: "<b>Verbi deboli</b>: tema + <i>-te</i> (klingelte). <b>Verbi forti</b>: cambio di vocale, nessuna desinenza a ich ed er (lief, zog). <b>Plusquamperfekt</b>: hatte / war + participio, per ciò che è successo prima.",
      table: {
        head: ["infinito", "Präteritum (er)", "Perfekt (er)"],
        rows: [
          ["klingeln", "klingelte", "hat geklingelt"],
          ["laufen", "lief", "ist gelaufen"],
          ["ziehen", "zog", "hat gezogen"],
          ["treffen", "traf", "hat getroffen"],
          ["erschrecken (spaventarsi)", "erschrak", "ist erschrocken"]
        ]
      },
      examples: [
        { tr: "C'era una volta un povero mugnaio.", note: "Es war einmal: l'inizio delle fiabe" },
        { tr: "All'improvviso squillò il telefono.", note: "verbo debole: klingelte" },
        { tr: "Si alzò e andò alla finestra.", note: "verbi forti: stand, ging" },
        { tr: "Correva più veloce che poteva.", note: "lief: Präteritum di laufen" },
        { tr: "Quando arrivò, il treno era già partito.", note: "Plusquamperfekt per ciò che era successo prima" },
        { tr: "Nessuno sapeva chi avesse scritto la lettera.", note: "wusste (verbo misto) e Plusquamperfekt hatte geschrieben" }
      ]
    },
    vocab: [
      "la storia, il racconto",
      "la fiaba",
      "l'eroe",
      "il racconto, la narrazione",
      "l'inizio",
      "la fine",
      "raccontare",
      "accadere, succedere",
      "spaventarsi (erschrak, ist erschrocken)",
      "all'improvviso",
      "allora, a quel tempo",
      "infine, alla fine"
    ],
    exercises: [
      {
        tr: "Il Präteritum di laufen, tutte le persone.",
        why: "<i>lief, liefst, lief, liefen, lieft, liefen</i>: vocale <i>ie</i>, nessuna desinenza alla prima e alla terza persona singolare."
      },
      {
        tr: "Il Präteritum di ziehen, tutte le persone.",
        why: "<i>zog, zogst, zog, zogen, zogt, zogen</i>: la vocale diventa <i>o</i> e la <i>h</i> sparisce."
      },
      {
        tr: "Il Präteritum di treffen, tutte le persone.",
        why: "<i>traf, trafst, traf, trafen, traft, trafen</i>: la doppia <i>f</i> diventa semplice dopo la vocale lunga <i>a</i>."
      },
      {
        q: "Quale frase usa il tempo tipico del racconto scritto?",
        opts: [
          "Sie stand auf und ging zum Fenster.",
          "Sie ist aufgestanden und zum Fenster gegangen.",
          "Sie steht auf und geht zum Fenster."
        ],
        why: "Il racconto scritto usa il <b>Präteritum</b>: <i>stand auf, ging</i>. Il Perfekt è il tempo del parlato; il presente si usa a volte per dare vivacità, ma non è il tempo normale del racconto."
      },
      {
        q: "Qual è il Präteritum di laufen (er)?",
        opts: [
          "lief",
          "laufte",
          "lauf"
        ],
        why: "<i>laufen</i> è un verbo forte: <b>lief</b>. La forma debole <i>laufte</i> non esiste."
      },
      {
        q: "Completa al Präteritum: «Plötzlich ___ das Telefon.» (klingeln)",
        hint: "verbo debole, er/es",
        why: "<b>klingelte</b>: verbo debole, tema <i>klingel-</i> + <i>-te</i>."
      },
      {
        q: "Completa: «Als sie ankam, ___ der Zug schon abgefahren.» (era già partito)",
        hint: "Präteritum di sein",
        why: "<b>war</b>: il Plusquamperfekt di <i>abfahren</i> si forma con <i>sein</i>, perché è un verbo di movimento."
      },
      {
        q: "Completa la frase con laufen al Präteritum.",
        tr: "Correva più veloce che poteva.",
        why: "<i>Er lief, so schnell er konnte</i>: <i>lief</i> da <i>laufen</i>, <i>konnte</i> da <i>können</i>."
      },
      {
        q: "Traduci: «All'improvviso si spense la luce.»",
        why: "<i>Plötzlich ging das Licht aus</i>: <i>ausgehen</i> al Präteritum è <i>ging ... aus</i>, con la particella in fondo. Va bene anche <i>auf einmal</i>."
      },
      {
        tr: "Era già buio quando tornò a casa. La porta era aperta e nessuno rispondeva. Si spaventò e chiamò la polizia.",
        why: "In <i>dunkel</i> la <b>u</b> è breve; in <i>erschrak</i> la <b>sch</b> è [ʃ] e la <b>a</b> è lunga; in <i>Polizei</i> l'accento cade sull'ultima sillaba, <b>zei</b>."
      },
      {
        tr: "A quel tempo non c'era ancora internet, e ci scrivevamo lunghe lettere.",
        why: "In <i>damals</i> l'accento cade su <b>da</b>; in <i>schrieben</i> la <b>ie</b> è lunga; in <i>Briefe</i> la <b>ie</b> è di nuovo una <i>i</i> lunga."
      }
    ]
  },
  "lesson:b2-u03-l3": {
    theme: "Modi di fare",
    title: "Senza chiedere, invece di aspettare",
    objectives: [
      "usare ohne ... zu e statt ... zu con lo stesso soggetto",
      "usare ohne dass e anstatt dass con soggetti diversi",
      "mettere zu al posto giusto con i verbi separabili",
      "raccontare come qualcuno ha fatto una cosa"
    ],
    theory: [
      {
        h: "ohne ... zu, statt ... zu",
        p: "<strong>ohne ... zu</strong> (<em>senza</em> + infinito) e <strong>statt / anstatt ... zu</strong> (<em>invece di</em> + infinito) formano una frase infinitiva con lo <strong>stesso soggetto</strong> della principale. <em>zu</em> + infinito va in fondo: <em>Er ging, ohne sich zu verabschieden. Statt zu warten, rief sie sofort an. Anstatt zu lernen, sieht er fern.</em> Con un verbo separabile <em>zu</em> sta fra particella e verbo: <em>ohne nachzudenken, statt fernzusehen</em>."
      },
      {
        h: "ohne dass, anstatt dass",
        p: "Se il soggetto della seconda frase è <strong>diverso</strong>, non si può usare l'infinito: servono <strong>ohne dass</strong> o <strong>anstatt dass</strong> con il verbo coniugato in fondo. <em>Er ging, ohne dass ich es merkte</em> (se ne andò senza che me ne accorgessi). <em>Anstatt dass du alles allein machst, helfen wir dir</em> (invece di lasciarti fare tutto da solo, ti aiutiamo). La costruzione con <em>dass</em> è possibile anche con lo stesso soggetto (<em>Anstatt dass du hilfst, schaust du nur zu</em>), ma lì la forma con <em>zu</em> è più naturale."
      },
      {
        contrast: "In italiano l'infinito segue subito la preposizione (<em>senza salutare</em>, <em>invece di aspettare</em>); in tedesco <em>zu</em> + infinito va alla fine della frase, dopo tutti i complementi: <em>ohne den Vertrag zu lesen</em>, <em>senza leggere il contratto</em>. E <em>senza che</em> vuole in italiano il congiuntivo (<em>senza che io me ne accorgessi</em>); dopo <em>ohne dass</em> di solito c'è l'indicativo: <em>ohne dass ich es merkte</em> (il Konjunktiv II è possibile ma più raro: <em>ohne dass ich es bemerkt hätte</em>)."
      },
      {
        trap: "Non dimenticare <em>zu</em>: <em>ohne sich verabschieden</em> è un errore, serve <em>ohne sich zu verabschieden</em>. E non usare l'infinito con un soggetto diverso: <em>Er ging, ohne mich es zu merken</em> non ha senso; si dice <em>ohne dass ich es merkte</em>."
      },
      {
        tip: "Per verificare, sostituisci mentalmente con <em>um ... zu</em>, che conosci già: la costruzione è la stessa (<em>um zu lernen, ohne zu lernen, statt zu lernen</em>), cambia solo il significato."
      }
    ],
    grammar: {
      title: "ohne ... zu, statt ... zu, ohne dass, anstatt dass",
      note: "<b>Stesso soggetto</b>: ohne / statt / anstatt + ... + <b>zu</b> + infinito in fondo. <b>Soggetto diverso</b>: ohne dass / anstatt dass + verbo coniugato in fondo, di solito all'indicativo.",
      table: {
        head: ["", "stesso soggetto", "soggetto diverso"],
        rows: [
          ["senza", "Er ging, ohne sich zu verabschieden.", "Er ging, ohne dass ich es merkte."],
          ["invece di", "Statt zu warten, rief sie an.", "Anstatt dass du alles allein machst, helfen wir dir."],
          ["verbo separabile", "..., ohne nachzudenken.", "..., ohne dass er nachdachte."]
        ]
      },
      examples: [
        { tr: "Se ne andò senza salutare.", note: "ohne ... zu: stesso soggetto" },
        { tr: "Invece di aspettare, chiamò subito.", note: "statt ... zu all'inizio, poi il verbo della principale" },
        { tr: "Ha firmato senza leggere il contratto.", note: "zu + infinito dopo tutti i complementi" },
        { tr: "Invece di studiare, guarda la televisione.", note: "anstatt ... zu; fernsehen è separabile" },
        { tr: "Se ne andò senza che me ne accorgessi.", note: "ohne dass: soggetto diverso, di solito indicativo" },
        { tr: "Invece di aiutare, stai solo a guardare.", note: "anstatt dass: possibile anche con lo stesso soggetto" }
      ]
    },
    vocab: [
      "il contratto",
      "il permesso",
      "il congedo, l'addio",
      "il piano, il progetto",
      "la firma",
      "firmare",
      "congedarsi, salutare",
      "stare a guardare",
      "riflettere (über + accusativo: su)",
      "notare, accorgersi di",
      "semplicemente",
      "di nascosto"
    ],
    exercises: [
      {
        q: "Come dici «Se ne andò senza salutare»?",
        opts: [
          "Er ging, ohne sich zu verabschieden.",
          "Er ging, ohne zu verabschieden sich.",
          "Er ging, ohne sich verabschieden."
        ],
        why: "<b>ohne ... zu</b> + infinito in fondo: <i>ohne sich zu verabschieden</i>. Il pronome riflessivo viene prima di <i>zu</i>, e <i>zu</i> non si può togliere."
      },
      {
        q: "Come dici «Se ne andò senza che me ne accorgessi»?",
        opts: [
          "Er ging, ohne dass ich es merkte.",
          "Er ging, ohne mich es zu merken.",
          "Er ging, ohne dass ich es merken."
        ],
        why: "Il soggetto è diverso (<i>er</i>, <i>ich</i>), quindi serve <b>ohne dass</b> con il verbo coniugato in fondo: <i>merkte</i>."
      },
      {
        q: "Completa: «Sie hat unterschrieben, ohne den Vertrag ___ lesen.»",
        hint: "la particella dell'infinito",
        why: "<b>zu</b>: <i>ohne ... zu lesen</i>, con <i>zu</i> subito prima dell'infinito in fondo."
      },
      {
        q: "Completa con nachdenken: «Sie antwortete, ohne ___.»",
        hint: "verbo separabile con zu",
        why: "<b>nachzudenken</b>: con un verbo separabile <i>zu</i> si inserisce fra la particella <i>nach</i> e il verbo, in una parola sola."
      },
      {
        q: "Completa: «___ du hilfst, schaust du nur zu.» (invece di)",
        hint: "soggetto espresso: due parole",
        why: "<b>Anstatt dass</b> (o <i>Statt dass</i>): c'è un soggetto espresso nella frase (<i>du hilfst</i>), quindi non l'infinito ma <i>dass</i> con il verbo in fondo."
      },
      {
        q: "Completa la frase.",
        tr: "Invece di aspettare, ha chiamato subito.",
        why: "<i>Statt zu warten, rief sie sofort an</i>: la frase infinitiva occupa il primo posto, quindi segue subito il verbo <i>rief</i>; la particella <i>an</i> va in fondo."
      },
      {
        q: "Metti in ordine le parole.",
        tr: "Invece di studiare, guarda la televisione tutto il giorno.",
        why: "<i>Anstatt zu lernen, sieht er den ganzen Tag fern.</i> La frase con <i>anstatt</i> è al primo posto, il verbo <i>sieht</i> viene subito dopo, la particella <i>fern</i> in fondo."
      },
      {
        q: "Traduci: «Ha firmato il contratto senza leggerlo.» (lui)",
        why: "<i>Er hat den Vertrag unterschrieben, ohne ihn zu lesen</i>. Va bene anche il Präteritum <i>unterschrieb</i>, o <i>ohne ihn gelesen zu haben</i>."
      },
      {
        tr: "Si è licenziato senza parlarne con nessuno. Invece di chiedere, ha deciso subito.",
        why: "In <i>gekündigt</i> la <b>ü</b> è breve e arrotondata; in <i>jemandem</i> la <b>j</b> è [j]; in <i>entschieden</i> la <b>ie</b> è lunga."
      },
      {
        tr: "Invece di aspettare, dovremmo chiamare subito.",
        why: "In <i>anstatt</i> l'accento cade su <b>statt</b>; in <i>sollten</i> la <b>o</b> è breve; in <i>sofort</i> l'accento cade su <b>fort</b>."
      }
    ]
  },
  "lesson:b2-u03-test": {
    theme: "Verifica",
    title: "Test: Passivo e tempo del racconto",
    objectives: [
      "verificare il passivo al Perfekt e con i modali, il Präteritum narrativo e ohne ... zu"
    ],
    theory: [
      {
        p: "Dieci domande sull'intera unità. Si supera con il 70%. Non riguardare le lezioni mentre rispondi: se non ricordi qualcosa, è meglio tornare a ripassare."
      }
    ],
    exercises: [
      {
        tr: "Il Präteritum di finden, tutte le persone.",
        why: "<i>fand, fandest, fand, fanden, fandet, fanden</i>: dopo la <i>d</i> si inserisce una <i>e</i> davanti a <i>-st</i> e <i>-t</i>."
      },
      {
        q: "Completa: «Das Museum ist 1910 eröffnet ___.»",
        hint: "passivo al Perfekt",
        why: "<b>worden</b>: <i>ist eröffnet worden</i>, passivo al Perfekt."
      },
      {
        q: "Completa: «Der Antrag muss bis Montag abgegeben ___.»",
        hint: "infinito del passivo dopo un modale",
        why: "<b>werden</b>: modale + participio + <i>werden</i>."
      },
      {
        q: "Completa al Präteritum: «Plötzlich ___ sie ein Geräusch.» (hören)",
        hint: "verbo debole, sie (lei)",
        why: "<b>hörte</b>: verbo debole, <i>hör-</i> + <i>-te</i>."
      },
      {
        q: "Completa: «Er ging, ohne ein Wort ___ sagen.»",
        hint: "la particella dell'infinito",
        why: "<b>zu</b>: <i>ohne ein Wort zu sagen</i>."
      },
      {
        q: "Come dici «Il ponte era già stato chiuso»?",
        opts: [
          "Die Brücke war schon gesperrt worden.",
          "Die Brücke ist schon gesperrt geworden.",
          "Die Brücke hatte schon gesperrt worden."
        ],
        why: "Il Plusquamperfekt del passivo senza modale si forma con <b>war</b> + participio + <b>worden</b>, non con <i>hatte</i>."
      },
      {
        q: "Quale frase è corretta?",
        opts: [
          "Statt dass du hilfst, schaust du zu.",
          "Statt zu du hilfst, schaust du zu.",
          "Statt dass du helfen, schaust du zu."
        ],
        why: "Con un soggetto espresso serve <b>statt dass</b> + verbo coniugato in fondo: <i>du hilfst</i>."
      },
      {
        q: "Traduci: «La lettera è stata scritta ieri.»",
        why: "<i>Der Brief ist gestern geschrieben worden</i>, oppure al Präteritum <i>Der Brief wurde gestern geschrieben</i>."
      },
      {
        tr: "Il castello fu costruito nel diciottesimo secolo. In seguito è stato trasformato più volte, senza che il suo carattere cambiasse.",
        why: "In <i>Schloss</i> la <b>o</b> è breve; in <i>achtzehnten</i> la <b>ch</b> è [x] e la <b>z</b> è [ts]; in <i>Charakter</i> la <b>Ch</b> iniziale si legge [k]."
      },
      {
        tr: "Invece di discutere a lungo, abbiamo semplicemente risolto il problema.",
        why: "In <i>diskutieren</i> l'accento cade su <b>tie</b>; in <i>Problem</i> l'accento cade su <b>blem</b>; in <i>gelöst</i> la <b>ö</b> è lunga."
      }
    ]
  },
  "unit:b2-u04": {
    title: "Società e dibattito",
    grammarNote: "declinazione debole dei maschili (der Kunde, den Kunden, des Kunden) · je ... desto / umso, immer + comparativo · einerseits ... andererseits, zwar ... aber · sostenere una posizione con il Konjunktiv II (Ich würde sagen ..., Es wäre besser, wenn ...)"
  },
  "lesson:b2-u04-l1": {
    theme: "Economia e lavoro",
    title: "Il cliente, del cliente",
    objectives: [
      "riconoscere i maschili della declinazione debole",
      "aggiungere -n o -en nei casi diversi dal nominativo singolare",
      "usare Herr e Herrn in lettere e mail",
      "parlare di clienti, colleghi e fornitori"
    ],
    theory: [
      {
        h: "Che cos'è la n-Deklination",
        p: "Un gruppo di nomi <strong>maschili</strong> prende <strong>-n</strong> o <strong>-en</strong> in tutti i casi tranne il nominativo singolare: <em>der Kunde, den Kunden, dem Kunden, des Kunden</em>. Sono soprattutto i maschili in <strong>-e</strong> che indicano persone o animali (<em>der Kollege, der Experte, der Junge</em>) e i maschili di origine straniera in <strong>-ent, -ant, -ist, -at, -oge</strong> (<em>der Präsident, der Praktikant, der Lieferant, der Journalist</em>). Questi nomi hanno il plurale in <em>-n</em> o <em>-en</em>: <em>die Kunden, die Präsidenten</em>."
      },
      {
        h: "Herr, Herrn",
        p: "Anche <strong>Herr</strong> segue questa declinazione, con <em>-n</em> al singolare e <em>-en</em> al plurale. Nelle lettere e nelle mail si vede di continuo: <em>Sehr geehrter Herr Müller</em> (nominativo, nell'intestazione), ma <em>Ich habe Herrn Müller eine Mail geschrieben</em> (dativo) e <em>Kennen Sie Herrn Müller?</em> (accusativo). <em>Meine Damen und Herren</em> è il plurale."
      },
      {
        contrast: "L'italiano non segna il caso sul nome: <em>il cliente</em> resta uguale come soggetto, complemento oggetto o con una preposizione. In tedesco questi maschili cambiano, e la <em>-n</em> sembra un plurale: <em>den Kunden</em> può essere un cliente (accusativo singolare) o i clienti (dativo plurale), con lo stesso articolo. Lo decide il caso richiesto dal verbo: <em>Ich rufe den Kunden an</em> (un cliente, accusativo), <em>Ich helfe den Kunden</em> (i clienti, dativo plurale)."
      },
      {
        trap: "L'errore più frequente è dimenticare la desinenza: <em>Ich frage den Student</em> invece di <em>den Studenten</em>, <em>mit dem Kollege</em> invece di <em>mit dem Kollegen</em>. I femminili non seguono questa declinazione: <em>die Kundin, der Kundin</em>, e non tutti i maschili la seguono: <em>der Lehrer, den Lehrer</em>."
      },
      {
        tip: "Quando impari un maschile che indica una persona, guarda il genitivo nel dizionario: <em>der Kunde, -n, -n</em> vuol dire genitivo <em>des Kunden</em>, plurale <em>die Kunden</em>, ed è il segnale della declinazione debole."
      }
    ],
    grammar: {
      title: "La n-Deklination",
      note: "Maschili in <b>-e</b> (persone, animali) e maschili stranieri in <b>-ent, -ant, -ist, -at, -oge</b>: <b>-n / -en</b> in tutti i casi tranne il nominativo singolare. Anche <b>Herr → Herrn</b>.",
      table: {
        head: ["", "der Kunde", "der Präsident", "der Herr"],
        rows: [
          ["nominativo", "der Kunde", "der Präsident", "der Herr"],
          ["accusativo", "den Kunden", "den Präsidenten", "den Herrn"],
          ["dativo", "dem Kunden", "dem Präsidenten", "dem Herrn"],
          ["genitivo", "des Kunden", "des Präsidenten", "des Herrn"],
          ["plurale", "die Kunden", "die Präsidenten", "die Herren"]
        ]
      },
      examples: [
        { tr: "Il cliente si è lamentato.", note: "nominativo: senza -n" },
        { tr: "Abbiamo chiamato subito il cliente.", note: "accusativo: den Kunden" },
        { tr: "Domani parlo con il collega.", note: "dativo dopo mit: dem Kollegen" },
        { tr: "Questo è l'ufficio del presidente.", note: "genitivo: des Präsidenten, senza -s" },
        { tr: "Il tirocinante aiuta il giornalista.", note: "helfen + dativo: dem Journalisten" },
        { tr: "Ho scritto una mail al signor Müller.", note: "Herrn al dativo" }
      ]
    },
    vocab: [
      "il cliente",
      "il collega",
      "il tirocinante",
      "il presidente",
      "il fornitore",
      "l'esperto",
      "la ditta, l'azienda",
      "il fatturato",
      "l'incarico, l'ordine (di un cliente)",
      "lamentarsi (über + accusativo: di)",
      "consigliare, dare consulenza",
      "assumere"
    ],
    exercises: [
      {
        q: "Come dici «Ho chiamato il cliente»?",
        opts: [
          "Ich habe den Kunden angerufen.",
          "Ich habe den Kunde angerufen.",
          "Ich habe dem Kunden angerufen."
        ],
        why: "<i>anrufen</i> vuole l'accusativo, e <i>Kunde</i> prende <b>-n</b>: <b>den Kunden</b>. La terza usa il dativo, che <i>anrufen</i> non regge."
      },
      {
        q: "Quale nome segue la declinazione debole (den ...-en)?",
        opts: [
          "der Student",
          "der Lehrer",
          "die Studentin"
        ],
        why: "<b>der Student</b> è un maschile straniero in <i>-ent</i>: <i>den Studenten</i>. <i>der Lehrer</i> fa <i>den Lehrer</i>; i femminili non seguono questa declinazione."
      },
      {
        q: "Completa: «Ich spreche morgen mit dem ___.» (der Kollege)",
        hint: "dativo dopo mit",
        why: "<b>Kollegen</b>: dopo <i>mit</i> c'è il dativo, e <i>Kollege</i> prende <i>-n</i>."
      },
      {
        q: "Completa: «Das ist das Büro des ___.» (der Präsident)",
        hint: "genitivo",
        why: "<b>Präsidenten</b>: al genitivo questi nomi prendono <i>-en</i> e non la <i>-s</i> dei maschili normali."
      },
      {
        q: "Completa la frase.",
        tr: "Il tirocinante aiuta il giornalista.",
        why: "<i>Der Praktikant hilft dem Journalisten</i>: <i>helfen</i> vuole il dativo, e <i>Journalist</i> prende <i>-en</i>."
      },
      {
        q: "Abbina ogni nome al suo significato.",
        pairs: [
          "il cliente",
          "il fornitore",
          "il tirocinante",
          "l'esperto"
        ]
      },
      {
        q: "Metti in ordine le parole.",
        tr: "Abbiamo chiesto consiglio a un esperto.",
        why: "<i>Wir haben einen Experten um Rat gefragt.</i> <i>fragen</i> vuole l'accusativo: <i>einen Experten</i>, con <i>-n</i>; <i>um Rat</i> significa «un consiglio»."
      },
      {
        q: "Traduci: «Ho scritto una mail al signor Müller.»",
        why: "<i>Ich habe Herrn Müller eine Mail geschrieben</i>: al dativo <i>Herr</i> diventa <i>Herrn</i>. Va bene anche <i>E-Mail</i>."
      },
      {
        tr: "Ieri un cliente si è lamentato del fornitore. Il nostro collega ha richiamato subito il cliente e gli ha dato consigli.",
        why: "In <i>beschwert</i> la <b>sch</b> è [ʃ]; in <i>Lieferanten</i> l'accento cade su <b>ran</b>; in <i>zurückgerufen</i> l'accento cade su <b>rück</b>."
      },
      {
        tr: "L'azienda assume un nuovo tirocinante.",
        why: "In <i>Firma</i> la <b>i</b> è breve; in <i>Praktikanten</i> l'accento cade su <b>kan</b>; in <i>stellt ... ein</i> la particella <b>ein</b> va in fondo."
      }
    ]
  },
  "lesson:b2-u04-l2": {
    theme: "Ambiente e tecnologia",
    title: "Più ..., più ...",
    objectives: [
      "esprimere una proporzione con je ... desto / umso",
      "mettere il verbo al posto giusto nelle due parti",
      "dire che qualcosa cresce o cala con immer + comparativo",
      "parlare di consumi, rifiuti ed energia"
    ],
    theory: [
      {
        h: "je ... desto, je ... umso",
        p: "Per dire che due cose crescono o calano insieme si usa <strong>je</strong> + comparativo nella prima parte e <strong>desto</strong> o <strong>umso</strong> + comparativo nella seconda. La parte con <em>je</em> è una subordinata, con il verbo <strong>in fondo</strong>; la parte con <em>desto</em> è la principale, e il verbo viene <strong>subito dopo</strong> il gruppo del comparativo, che può comprendere un nome (<em>desto weniger Müll gibt es</em>): <em>Je mehr wir recyceln, desto weniger Müll gibt es. Je länger man wartet, umso teurer wird es.</em> Se c'è un nome, sta subito dopo il comparativo: <em>Je mehr Autos fahren, desto schlechter wird die Luft.</em>"
      },
      {
        h: "Forme brevi e immer + comparativo",
        p: "Nel parlato si usa spesso la forma breve, senza verbi: <em>Je früher, desto besser.</em> Per una crescita continua si usa <strong>immer</strong> + comparativo: <em>Solarstrom wird immer billiger</em> (diventa sempre più economico), <em>Die Winter werden immer wärmer.</em>"
      },
      {
        contrast: "L'italiano dice <em>più ricicliamo, meno rifiuti ci sono</em>, con la stessa parola (<em>più, meno</em>) e lo stesso ordine nelle due parti. Il tedesco ha due parole diverse (<em>je ... desto</em>) e due ordini diversi: verbo in fondo nella prima parte, verbo subito dopo il comparativo nella seconda. <em>Sempre più</em> non è «immer mehr» davanti all'aggettivo: si dice <em>immer billiger</em>, non «immer mehr billig»."
      },
      {
        trap: "Dopo <em>desto</em> non viene il soggetto: <em>desto weniger Müll gibt es</em>, non «desto es gibt weniger Müll». E <em>je</em> e <em>desto</em> vogliono il comparativo, non l'aggettivo semplice: <em>je länger</em>, non «je lang»."
      },
      {
        tip: "Pensa alla frase come a due metà incastrate: la prima finisce con il verbo (<em>... wartet,</em>), la seconda comincia con il gruppo del comparativo e poi il verbo (<em>umso teurer wird ...</em>, <em>desto weniger Müll gibt ...</em>)."
      }
    ],
    grammar: {
      title: "je ... desto / umso",
      note: "<b>je</b> + comparativo + ... + verbo in fondo, <b>desto / umso</b> + gruppo del comparativo (anche con un nome) + verbo + soggetto. Per una crescita continua: <b>immer</b> + comparativo.",
      table: {
        head: ["prima parte (je ...)", "seconda parte (desto / umso ...)"],
        rows: [
          ["Je mehr wir recyceln,", "desto weniger Müll gibt es."],
          ["Je länger man wartet,", "umso teurer wird es."],
          ["Je weniger Energie wir verbrauchen,", "desto besser ist es für das Klima."],
          ["Je früher,", "desto besser."]
        ]
      },
      examples: [
        { tr: "Più ricicliamo, meno rifiuti ci sono.", note: "je + verbo in fondo, desto + weniger Müll + verbo" },
        { tr: "Più si aspetta, più diventa caro.", note: "umso al posto di desto" },
        { tr: "Prima è, meglio è.", note: "forma breve senza verbi" },
        { tr: "Più auto circolano, peggiore diventa l'aria.", note: "il nome segue subito il comparativo" },
        { tr: "L'energia solare diventa sempre più economica.", note: "immer + comparativo" },
        { tr: "Meno energia consumiamo, meglio è per il clima.", note: "weniger: comparativo di wenig" }
      ]
    },
    vocab: [
      "l'ambiente",
      "i rifiuti, la spazzatura",
      "l'energia (erneuerbare Energien: energie rinnovabili)",
      "il cambiamento climatico",
      "l'apparecchio",
      "l'emissione",
      "proteggere",
      "consumare",
      "risparmiare",
      "salire, aumentare",
      "scendere, diminuire",
      "sostenibile, in modo sostenibile"
    ],
    exercises: [
      {
        q: "Come dici «Più leggo, meglio capisco»?",
        opts: [
          "Je mehr ich lese, desto besser verstehe ich.",
          "Je mehr ich lese, desto ich verstehe besser.",
          "Je mehr lese ich, desto besser verstehe ich."
        ],
        why: "Nella parte con <b>je</b> il verbo va in fondo (<i>ich lese</i>); nella parte con <b>desto</b> il verbo viene subito dopo il comparativo (<i>besser verstehe ich</i>)."
      },
      {
        q: "Come dici «Prima è, meglio è»?",
        opts: [
          "Je früher, desto besser.",
          "Je früher, so besser.",
          "Desto früher, je besser."
        ],
        why: "La forma breve fissa è <b>Je früher, desto besser</b>: <i>je</i> nella prima parte, <i>desto</i> nella seconda."
      },
      {
        q: "Completa: «Je länger man wartet, ___ teurer wird es.»",
        hint: "seconda parte della proporzione",
        why: "<b>desto</b> o <b>umso</b>: tutte e due aprono la seconda parte, seguite dal comparativo e dal verbo."
      },
      {
        q: "Completa: «Je mehr Autos fahren, desto schlechter ___ die Luft.» (diventa)",
        hint: "werden, terza persona",
        why: "<b>wird</b>: dopo <i>desto</i> + comparativo viene subito il verbo, poi il soggetto <i>die Luft</i>."
      },
      {
        q: "Completa la frase.",
        tr: "Meno energia consumiamo, meglio è per il clima.",
        why: "<i>Je weniger Energie wir verbrauchen, desto besser ist es für das Klima</i>: <i>verbrauchen</i> in fondo alla prima parte, <i>ist</i> subito dopo <i>besser</i>."
      },
      {
        q: "Abbina ogni verbo al suo significato.",
        pairs: [
          "salire, aumentare",
          "scendere, diminuire",
          "risparmiare",
          "proteggere"
        ]
      },
      {
        q: "Metti in ordine le parole.",
        tr: "Più ricicliamo, meno rifiuti ci sono.",
        why: "<i>Je mehr wir recyceln, desto weniger Müll gibt es.</i> <i>recyceln</i> in fondo alla prima parte, <i>gibt es</i> dopo <i>weniger Müll</i>."
      },
      {
        q: "Traduci: «Più si aspetta, più diventa caro.»",
        why: "<i>Je länger man wartet, desto teurer wird es</i> (o <i>umso teurer</i>). <i>Più si aspetta</i> riguarda il tempo, quindi <i>länger</i>, non <i>mehr</i>."
      },
      {
        tr: "Più persone vanno in bicicletta, più pulita diventa l'aria in città. In più risparmiano soldi.",
        why: "In <i>sauberer</i> la <b>au</b> è [aʊ]; in <i>Außerdem</i> la <b>ß</b> è una <i>s</i> sorda; in <i>Fahrrad</i> la <b>h</b> allunga la <i>a</i>."
      },
      {
        tr: "Prima risparmiamo energia, meglio è per l'ambiente.",
        why: "In <i>Energie</i> l'accento cade sull'ultima sillaba, <b>gie</b>, e la <b>g</b> è [g]; in <i>Umwelt</i> la <b>w</b> è [v]; in <i>sparen</i> la <b>sp</b> iniziale è [ʃp]."
      }
    ]
  },
  "lesson:b2-u04-l3": {
    theme: "Discussioni",
    title: "Sostenere una posizione",
    objectives: [
      "presentare due aspetti con einerseits ... andererseits",
      "concedere un punto con zwar ... aber",
      "esprimere un'opinione con prudenza (Ich würde sagen ..., Es wäre besser, wenn ...)",
      "essere d'accordo o in disaccordo in modo cortese"
    ],
    theory: [
      {
        h: "einerseits ... andererseits, zwar ... aber",
        p: "Per presentare due lati di una questione si usa <strong>einerseits ... andererseits</strong> (<em>da un lato ... dall'altro</em>). Tutte e due le parole occupano il primo posto, quindi il verbo viene subito dopo: <em>Einerseits ist das Homeoffice praktisch, andererseits fehlt der Kontakt zu den Kollegen.</em> Per concedere un punto e poi limitarlo si usa <strong>zwar ... aber</strong>: <em>Zwar ist die Technik teuer, aber sie spart Zeit.</em> Dopo <em>aber</em> l'ordine è quello normale (<em>aber sie spart</em>)."
      },
      {
        h: "Un'opinione detta con prudenza",
        p: "In una discussione il <strong>Konjunktiv II</strong> rende l'opinione meno brusca: <em>Ich würde sagen, dass die Vorteile überwiegen. Es wäre besser, wenn die Stadt mehr Radwege bauen würde. Man sollte das Problem anders lösen.</em> Per l'accordo e il disaccordo: <em>Da stimme ich Ihnen zu. Da muss ich Ihnen widersprechen.</em> Per l'opinione: <em>Meiner Ansicht nach ..., Ich bin der Meinung, dass ...</em>"
      },
      {
        contrast: "<em>Da un lato ... dall'altro</em> in italiano non cambia l'ordine delle parole; <em>einerseits</em> e <em>andererseits</em> sì, perché prendono il primo posto. <em>È vero che ..., ma ...</em> corrisponde a <em>zwar ..., aber ...</em>, molto più frequente in tedesco. E <em>sarebbe meglio se</em> + congiuntivo imperfetto diventa <em>es wäre besser, wenn</em> + Konjunktiv II: lo stesso modo nelle due parti."
      },
      {
        trap: "Dopo <em>andererseits</em> il verbo viene subito: <em>andererseits fehlt der Kontakt</em>, non «andererseits der Kontakt fehlt». Dopo <em>aber</em>, invece, nessuna inversione: <em>aber der Kontakt ist wichtig</em>, non «aber ist der Kontakt wichtig»."
      },
      {
        tip: "In un dibattito, prima di contraddire riconosci un punto dell'altro: <em>Da haben Sie zwar recht, aber ...</em> Suona più convincente di un no secco."
      }
    ],
    grammar: {
      title: "Connettivi del dibattito e Konjunktiv II",
      note: "<b>einerseits / andererseits / zwar</b> al primo posto: verbo subito dopo. <b>aber</b>: nessuna inversione. Opinione prudente: <b>Ich würde sagen ..., Es wäre besser, wenn ...</b>",
      table: {
        head: ["funzione", "esempio"],
        rows: [
          ["due lati", "Einerseits ist es praktisch, andererseits ist es teuer."],
          ["concessione", "Zwar ist es teuer, aber es lohnt sich."],
          ["opinione prudente", "Ich würde sagen, dass ..."],
          ["proposta", "Es wäre besser, wenn ..."],
          ["accordo / disaccordo", "Da stimme ich zu. / Da muss ich widersprechen."]
        ]
      },
      examples: [
        { tr: "Da un lato il lavoro da casa è pratico, dall'altro manca il contatto con i colleghi.", note: "einerseits / andererseits: verbo subito dopo" },
        { tr: "Direi che i vantaggi prevalgono.", note: "würde sagen: opinione prudente" },
        { tr: "Sarebbe meglio se la città costruisse più piste ciclabili.", note: "es wäre besser, wenn + Konjunktiv II" },
        { tr: "È vero che la tecnologia è cara, ma fa risparmiare tempo.", note: "zwar ... aber" },
        { tr: "Secondo me si dovrebbe risolvere il problema in un altro modo.", note: "meiner Ansicht nach + sollte" },
        { tr: "Sono dell'opinione che dovremmo investire di più.", note: "der Meinung sein, dass ..." }
      ]
    },
    vocab: [
      "il vantaggio",
      "lo svantaggio",
      "l'opinione, il parere",
      "l'argomento",
      "la soluzione",
      "la società",
      "prevalere",
      "sostenere (una posizione), rappresentare",
      "contraddire (+ dativo)",
      "essere d'accordo (+ dativo)",
      "investire",
      "convinto"
    ],
    exercises: [
      {
        q: "Quale frase è corretta?",
        opts: [
          "Einerseits ist es praktisch, andererseits ist es teuer.",
          "Einerseits es ist praktisch, andererseits es ist teuer.",
          "Einerseits ist es praktisch, andererseits es ist teuer."
        ],
        why: "<b>einerseits</b> e <b>andererseits</b> occupano il primo posto, quindi il verbo viene subito dopo in tutte e due le parti."
      },
      {
        q: "Completa: «Es ___ besser, wenn wir mehr Radwege hätten.» (sarebbe)",
        hint: "Konjunktiv II di sein",
        why: "<b>wäre</b>: una proposta prudente con il Konjunktiv II, e nella frase con <i>wenn</i> c'è di nuovo il Konjunktiv II (<i>hätten</i>)."
      },
      {
        q: "Completa: «Da stimme ich Ihnen ___.» (sono d'accordo con Lei)",
        hint: "particella di zustimmen",
        why: "<b>zu</b>: <i>zustimmen</i> è separabile, e la particella va in fondo. Regge il dativo: <i>Ihnen</i>."
      },
      {
        q: "Completa la frase.",
        tr: "È vero che la tecnologia è cara, ma fa risparmiare tempo.",
        why: "<i>Zwar ist die Technik teuer, aber sie spart Zeit</i>: dopo <i>zwar</i> al primo posto il verbo viene subito; dopo <i>aber</i> l'ordine è normale."
      },
      {
        q: "Abbina ogni espressione al suo significato.",
        pairs: [
          "il vantaggio",
          "lo svantaggio",
          "essere d'accordo",
          "contraddire"
        ]
      },
      {
        q: "Metti in ordine le parole.",
        tr: "Direi che i vantaggi prevalgono.",
        why: "<i>Ich würde sagen, dass die Vorteile überwiegen.</i> <i>würde ... sagen</i> nella principale, <i>überwiegen</i> in fondo alla frase con <i>dass</i>."
      },
      {
        q: "Una collega ti chiede che cosa pensi del lavoro da casa.",
        setting: "Discussione in ufficio: vedi vantaggi e svantaggi.",
        lines: [
          { tr: "Che cosa pensa del lavoro da casa?" },
          { tr: "Rispondi: da un lato è pratico, dall'altro manca il contatto con i colleghi.", answerTr: "Da un lato è pratico, dall'altro manca il contatto con i colleghi." },
          { tr: "Quindi l'azienda dovrebbe vietarlo?" },
          { tr: "Rispondi: no, ma sarebbe meglio se tutti venissero in ufficio due volte alla settimana.", answerTr: "No, ma sarebbe meglio se tutti venissero in ufficio due volte alla settimana." },
          { tr: "E i costi dell'ufficio?" },
          { tr: "Rispondi: è vero che l'ufficio costa, ma il contatto è importante.", answerTr: "È vero che l'ufficio costa, ma il contatto è importante." }
        ]
      },
      {
        q: "Traduci: «Secondo me la città dovrebbe investire di più.»",
        why: "<i>Meiner Meinung nach sollte die Stadt mehr investieren</i>: dopo <i>meiner Meinung nach</i> il verbo viene subito. Vanno bene anche <i>Meiner Ansicht nach</i>, <i>Ich finde, ...</i> e <i>Ich bin der Meinung, dass ...</i> con il verbo in fondo."
      },
      {
        tr: "Da un lato capisco gli argomenti di chi è contrario, dall'altro sono convinto che dobbiamo agire. Sarebbe un errore aspettare ancora.",
        why: "In <i>Argumente</i> l'accento cade su <b>men</b>; in <i>überzeugt</i> la <b>z</b> è [ts] e la <b>eu</b> è [ɔʏ]; in <i>handeln</i> la <b>h</b> iniziale si pronuncia."
      },
      {
        tr: "Secondo me prevalgono i vantaggi, anche se ci sono alcuni svantaggi.",
        why: "In <i>Ansicht</i> la <b>ch</b> è [ç]; in <i>überwiegen</i> l'accento cade su <b>wie</b>; in <i>Nachteile</i> la <b>ch</b> dopo <i>a</i> è [x]."
      }
    ]
  },
  "lesson:b2-u04-test": {
    theme: "Verifica",
    title: "Test: Società e dibattito",
    objectives: [
      "ripassare le unità 1-4: Konjunktiv II passato, periodo ipotetico, passivo, n-Deklination, je ... desto"
    ],
    theory: [
      {
        p: "Dodici domande sulle prime quattro unità del livello. Si supera con il 70%. Non riguardare le lezioni mentre rispondi: se non ricordi qualcosa, è meglio tornare a ripassare."
      }
    ],
    exercises: [
      {
        tr: "Il Konjunktiv II passato di kommen, tutte le persone.",
        why: "<i>kommen</i> al Perfekt vuole <i>sein</i>: <i>wäre gekommen</i>. Per <i>du</i> e <i>ihr</i> valgono <i>wärst, wärt</i> e <i>wärest, wäret</i>."
      },
      {
        q: "Completa: «Wir ___ gern länger geblieben.» (saremmo rimasti)",
        hint: "Konjunktiv II di sein, wir",
        why: "<b>wären</b>: <i>bleiben</i> vuole <i>sein</i> al Perfekt."
      },
      {
        q: "Completa con il modale: «Du hättest mich anrufen ___.» (avresti dovuto)",
        hint: "dovere, all'infinito",
        why: "<b>sollen</b> (o <i>müssen</i>): doppio infinito, il modale resta all'infinito in fondo."
      },
      {
        q: "Completa: «Wir gehen spazieren, es sei denn, es ___.» (regnen)",
        hint: "indicativo presente",
        why: "<b>regnet</b>: dopo <i>es sei denn</i> c'è una frase all'indicativo con il verbo in seconda posizione."
      },
      {
        q: "Completa: «Die Brücke ist 1990 gebaut ___.»",
        hint: "passivo al Perfekt",
        why: "<b>worden</b>: <i>ist gebaut worden</i>."
      },
      {
        q: "Completa: «Ich habe gestern mit dem ___ gesprochen.» (der Kunde)",
        hint: "dativo dopo mit",
        why: "<b>Kunden</b>: n-Deklination, <i>-n</i> al dativo."
      },
      {
        q: "Completa: «Je mehr ich lerne, ___ besser verstehe ich.»",
        hint: "seconda parte della proporzione",
        why: "<b>desto</b> o <b>umso</b>, seguiti dal comparativo e dal verbo."
      },
      {
        q: "Quale frase è corretta?",
        opts: [
          "Er tut so, als ob er nichts wüsste.",
          "Er tut so, als ob er wüsste nichts.",
          "Er tut so, als er nichts wüsste."
        ],
        why: "Dopo <b>als ob</b> il verbo va in fondo. Con <i>als</i> da solo il verbo verrebbe subito: <i>als wüsste er nichts</i>."
      },
      {
        q: "Come dici «Il problema deve essere risolto»?",
        opts: [
          "Das Problem muss gelöst werden.",
          "Das Problem muss lösen werden.",
          "Das Problem muss gelöst worden."
        ],
        why: "Passivo con un modale: modale + participio + <b>werden</b>."
      },
      {
        q: "Completa la frase senza wenn.",
        tr: "Se avessi avuto più tempo, sarei venuto anch'io.",
        why: "<i>Hätte ich mehr Zeit gehabt, wäre ich mitgekommen</i>: verbo al primo posto, Konjunktiv II passato in tutte e due le parti."
      },
      {
        q: "Traduci: «Saremmo potuti partire prima.»",
        why: "<i>Wir hätten früher losfahren können</i>: doppio infinito con <i>hätten</i>. Vanno bene anche <i>abfahren</i> e <i>aufbrechen</i>."
      },
      {
        tr: "Da un lato la città è cara, dall'altro lì ci sono molti posti di lavoro.",
        why: "In <i>einerseits</i> l'accento cade su <b>ei</b>; in <i>andererseits</i> la <b>r</b> finale delle sillabe si sente appena; in <i>Jobs</i> la <b>J</b> si legge come in inglese, [dʒ]."
      }
    ]
  }
});
