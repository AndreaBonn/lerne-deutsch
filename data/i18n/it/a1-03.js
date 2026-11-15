/* ============================================================
   Learner-language text (it) for data/core/a1-03.js, unit a1-u08.
   Keys point at ids in the neutral layer; arrays merge by index,
   so their length has to match core.
   Checked by scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("it", {
  "unit:a1-u08": {
    title: "Famiglia e amici",
    grammarNote: "possessivi · aggettivo predicativo · comparativo con als e so ... wie"
  },
  "lesson:a1-u08-l1": {
    theme: "La famiglia",
    title: "Mia madre, il mio capo",
    objectives: [
      "dire di chi è una persona con mein, dein, sein, ihr, unser",
      "scegliere la forma giusta: mein, meine, meinen",
      "dire il possessore con un nome proprio: Annas Bruder"
    ],
    theory: [
      {
        h: "Il possessivo segue il possessore e prende le desinenze di ein",
        p: "Il possessivo si sceglie in base a <b>chi possiede</b>: <em>mein</em> (io), <em>dein</em> (tu), <em>sein</em> (lui), <em>ihr</em> (lei), <em>unser</em> (noi). Poi prende le desinenze di <em>ein</em>, in base al <b>nome posseduto</b>: <em>mein Vater</em>, <em>meine Mutter</em>, <em>mein Kind</em>, <em>meine Eltern</em>. Al maschile accusativo diventa <em>meinen</em>: <em>Ich mag meinen Bruder</em>."
      },
      {
        contrast: "In italiano il possessivo ha l'articolo e concorda con la cosa posseduta: <em>il mio capo, la mia amica, i miei genitori</em>. In tedesco l'articolo non c'è (<em>mein Chef</em>, non «der mein Chef»). La base dipende dal possessore (<em>sein</em>, <em>ihr</em>...); la desinenza dipende da genere, numero e caso del nome posseduto: <em>meine</em> vale per «mia» e per «miei»."
      },
      {
        trap: "<em>Sua madre</em> in italiano può essere di lui o di lei. In tedesco il possessore si sente: <em>seine Mutter</em> è la madre di lui, <em>ihre Mutter</em> quella di lei. Non confondere <em>sein</em> (di lui) e <em>ihr</em> (di lei) solo perché la cosa posseduta è la stessa."
      },
      {
        h: "Il nome proprio: Annas Bruder",
        p: "Per dire «il fratello di Anna» basta aggiungere <b>-s</b> al nome, senza apostrofo, e metterlo prima della persona: <em>Annas Bruder</em>, <em>Peters Schwester</em>. Come per il possessivo, non c'è l'articolo. Se il nome finisce con <em>-s</em>, <em>-x</em> o <em>-z</em>, si mette solo un apostrofo: <em>Hans' Mutter</em>."
      },
      {
        tip: "Impara i membri della famiglia sempre con il possessivo: <em>meine Mutter</em>, <em>mein Vater</em>, <em>meine Eltern</em>. Così genere e plurale entrano insieme al nome."
      }
    ],
    grammar: {
      title: "Mein al nominativo e all'accusativo",
      note: "Desinenze di <b>ein</b>: cambia solo il maschile all'accusativo (<em>meinen</em>). Lo stesso schema vale per <em>dein, sein, ihr, unser</em>.",
      table: {
        head: ["genere", "nominativo", "accusativo", "esempio"],
        rows: [
          ["maschile", "mein", "meinen", "Ich mag meinen Bruder."],
          ["femminile", "meine", "meine", "Ich mag meine Schwester."],
          ["neutro", "mein", "mein", "Ich mag mein Auto."],
          ["plurale", "meine", "meine", "Ich mag meine Eltern."]
        ]
      },
      examples: [
        { tr: "Mia madre si chiama Anna." },
        { tr: "Il mio capo è simpatico." },
        { tr: "Questa è la nostra famiglia.", note: "Familie è femminile: unsere" },
        { tr: "Voglio bene a mio fratello.", note: "Bruder è maschile all'accusativo: meinen" },
        { tr: "Dove abita tua sorella?" },
        { tr: "Il fratello di Anna si chiama Paul.", note: "nome proprio + -s, senza articolo e senza apostrofo" }
      ]
    },
    vocab: [
      "la famiglia",
      "la madre",
      "il padre",
      "i genitori (solo plurale)",
      "il fratello",
      "la sorella",
      "la nonna",
      "il nonno",
      "lo zio",
      "la zia",
      "il capo",
      "l'amica, la fidanzata"
    ],
    exercises: [
      {
        q: "Come dici «mia madre»?",
        opts: ["mein Mutter", "meine Mutter", "meinen Mutter"],
        why: "<i>Mutter</i> è femminile, quindi <b>meine</b>, come <i>eine</i>."
      },
      {
        q: "Completa: «Das ist ___ Schwester.» (Questa è mia sorella.)",
        hint: "mein + desinenza femminile",
        why: "<b>Meine Schwester</b>: femminile, nominativo."
      },
      {
        q: "Completa: «Ich mag ___ Chef.» (Mi piace il mio capo.)",
        hint: "mein + accusativo maschile",
        why: "<b>Meinen Chef</b>: dopo <i>mögen</i> c'è l'accusativo e il maschile cambia, come <i>einen</i>."
      },
      {
        q: "Come dici «sua madre» (la madre di lui)?",
        opts: ["seine Mutter", "ihre Mutter", "sein Mutter"],
        why: "Il possessore è maschile, quindi <b>sein</b>, e <i>Mutter</i> è femminile: <b>seine Mutter</b>."
      },
      {
        q: "Quale frase è corretta?",
        opts: ["Ich mag mein Vater.", "Ich mag meinen Vater.", "Ich mag meine Vater."],
        why: "<i>Vater</i> è maschile e sta all'accusativo: <b>meinen Vater</b>."
      },
      {
        q: "Scegli ein o eine: il possessivo prende le stesse desinenze.",
        why: "Il possessivo prende le stesse desinenze di <i>ein</i>: <i>ein Bruder → mein Bruder</i>, <i>eine Tante → meine Tante</i>.",
        items: ["fratello", "sorella", "zio", "zia", "capo", "amica"]
      },
      {
        q: "Traduci: «Mia sorella si chiama Lena e mio fratello si chiama Paul.»",
        why: "Niente articolo davanti al possessivo: <i>meine Schwester</i>, <i>mein Bruder</i>."
      },
      {
        q: "Completa le due frasi.",
        tr: "Questi sono i miei genitori. Mio padre si chiama Jan.",
        why: "<i>Eltern</i> è plurale: <b>meine</b>. <i>Vater</i> è maschile nominativo: <b>Mein</b>, con la maiuscola a inizio frase."
      },
      {
        tr: "Mia madre si chiama Eva e mio padre si chiama Jan.",
        why: "In <i>heißen</i> la <b>ß</b> è una <b>s</b> sorda, come in «sasso»."
      },
      {
        tr: "Questa è la mia famiglia: mio padre, mia madre e mio fratello.",
        why: "In <i>Familie</i> la <b>ie</b> è una <b>i</b> lunga, la <b>e</b> finale si legge: «fa-MI-lie»."
      }
    ]
  },
  "lesson:a1-u08-l2": {
    theme: "Aspetto fisico",
    title: "Che aspetto ha?",
    objectives: [
      "chiedere e dire che aspetto ha una persona con Wie sieht ... aus?",
      "usare l'aggettivo dopo sein senza cambiarlo",
      "descrivere i capelli, gli occhi e gli accessori con haben"
    ],
    theory: [
      {
        h: "Wie sieht er aus?",
        p: "Per chiedere l'<b>aspetto</b> si usa <em>Wie sieht er aus?</em> («che aspetto ha?»). Per ora impara la formula intera, senza smontare il verbo: <em>Wie sieht Paul aus?</em>, <em>Wie sieht deine Schwester aus?</em> Si risponde con <em>sein</em> e un aggettivo: <em>Er ist groß und schlank</em>. Oppure con <em>haben</em>: <em>Er hat einen Bart</em>, <em>Sie hat eine Brille</em>."
      },
      {
        contrast: "In italiano l'aggettivo concorda con il nome: <em>alto, alta, alti, alte</em>. In tedesco, dopo <em>sein</em>, l'aggettivo resta <b>sempre uguale</b>: <em>Er ist groß</em>, <em>Sie ist groß</em>, <em>Sie sind groß</em>. Non esiste una forma per il femminile o per il plurale."
      },
      {
        h: "Capelli e occhi sono plurali",
        p: "<em>Die Haare</em> e <em>die Augen</em> sono plurali, e il verbo segue: <em>Seine Haare sind kurz</em>, <em>Ihre Augen sind grün</em>. Si può anche dire <em>Er hat kurze Haare</em>, ma quella forma, con l'aggettivo davanti al nome, arriverà più avanti: per ora l'aggettivo sta dopo <em>sein</em>."
      },
      {
        trap: "Per l'altezza di una persona il tedesco usa <em>klein</em> («piccolo»), non una parola per «basso»: <em>Meine Schwester ist klein</em>. Per i capelli, invece, c'è <em>kurz</em>: <em>Seine Haare sind kurz</em>. Non dire «Seine Haare sind klein». Con un soggetto plurale il verbo è <em>sind</em>: non «Die Eltern ist groß», ma <em>Die Eltern sind groß</em>."
      },
      {
        tip: "Fai una descrizione in tre frasi: <em>Er ist ...</em>, <em>Er hat ...</em>, <em>Seine Haare sind ...</em>. Con <em>sein</em> e <em>haben</em> descrivi quasi chiunque."
      }
    ],
    grammar: {
      title: "L'aggettivo dopo sein non cambia",
      note: "Stessa forma per maschile, femminile, neutro e plurale. Cambia solo il verbo (<em>ist, sind</em>).",
      table: {
        head: ["soggetto", "verbo", "aggettivo", "esempio"],
        rows: [
          ["maschile", "ist", "groß", "Mein Bruder ist groß."],
          ["femminile", "ist", "groß", "Meine Schwester ist groß."],
          ["neutro", "ist", "groß", "Das Kind ist groß."],
          ["plurale", "sind", "groß", "Meine Eltern sind groß."]
        ]
      },
      examples: [
        { tr: "Che aspetto ha Paul?", note: "formula: Wie sieht ... aus?" },
        { tr: "È alto e magro." },
        { tr: "I suoi occhi sono marroni.", note: "Augen è plurale: sind" },
        { tr: "Mia sorella è bassa e bionda.", note: "klein per la statura" },
        { tr: "Ha la barba.", note: "haben + accusativo: einen Bart" },
        { tr: "I suoi capelli sono lunghi." }
      ]
    },
    vocab: [
      "alto, grande",
      "piccolo; basso (di statura)",
      "giovane",
      "vecchio, anziano",
      "magro, snello",
      "biondo",
      "lungo",
      "corto",
      "i capelli (plurale)",
      "gli occhi (plurale)",
      "gli occhiali",
      "la barba"
    ],
    exercises: [
      {
        q: "Come chiedi «Che aspetto ha?»",
        opts: ["Wie ist er aus?", "Wie sieht er aus?", "Was sieht er aus?"],
        why: "La formula è <b>Wie sieht er aus?</b> e non si smonta."
      },
      {
        q: "Quale frase è corretta?",
        opts: ["Die Schuhe sind rote.", "Meine Schwester ist kleine.", "Meine Schwester ist klein."],
        why: "Dopo <i>sein</i> l'aggettivo resta invariato: <b>klein</b>."
      },
      {
        q: "Completa: «Seine Augen ___ braun.» (I suoi occhi sono marroni.)",
        hint: "sein, soggetto plurale",
        why: "<i>Augen</i> è plurale: <b>sind</b>."
      },
      {
        q: "Completa: «Sie ___ eine Brille.» (Ha gli occhiali.)",
        hint: "haben, terza persona singolare",
        why: "<b>Sie hat</b>: <i>haben</i> con <i>er/sie/es</i> fa <i>hat</i>."
      },
      {
        q: "Abbina ogni parola al suo significato.",
        pairs: ["alto", "magro", "biondo", "corto"]
      },
      {
        tr: "Mia sorella è bassa e bionda.",
        why: "L'ordine è soggetto, verbo, aggettivi: <i>Meine Schwester ist klein und blond</i>."
      },
      {
        q: "Traduci: «Mio fratello è alto e ha la barba.»",
        why: "<i>Er ist groß und hat einen Bart</i>: <i>Bart</i> è maschile all'accusativo, quindi <i>einen</i>."
      },
      {
        q: "Completa il testo.",
        tr: "Anna è piccola e magra. Ha gli occhiali e i suoi capelli sono lunghi.",
        why: "<i>Ist</i> e <i>hat</i> con <i>Anna/sie</i>; <i>Haare</i> è plurale, quindi <i>sind</i>."
      },
      {
        tr: "Mia sorella è alta e magra, e i suoi capelli sono biondi.",
        why: "In <i>blond</i> la <b>o</b> è breve; in <i>Haare</i> la <b>aa</b> è una <b>a</b> lunga."
      },
      {
        tr: "Mio padre è alto, ha la barba e gli occhiali.",
        why: "In <i>Brille</i> la <b>r</b> è uvulare, non rotolata; la <b>ll</b> è una <b>l</b> breve."
      }
    ]
  },
  "lesson:a1-u08-l3": {
    theme: "Il carattere",
    title: "Simpatico o antipatico?",
    objectives: [
      "chiedere e dire com'è una persona con Wie ist ...?",
      "usare aggettivi di carattere dopo sein",
      "negare un aggettivo con nicht"
    ],
    theory: [
      {
        h: "Wie ist er? Il carattere",
        p: "<em>Wie sieht er aus?</em> chiede l'aspetto, <em>Wie ist er?</em> chiede il <b>carattere</b>: <em>Wie ist dein Chef?</em> – <em>Er ist sehr nett.</em> Anche qui l'aggettivo sta dopo <em>sein</em> e non cambia: <em>Meine Freundin ist lustig</em>, <em>Meine Eltern sind intelligent</em>."
      },
      {
        contrast: "In italiano «simpatico» e «gentile» sono due parole che si scambiano spesso. In tedesco <em>nett</em> copre tutte e due («una persona carina, a modo»), <em>sympathisch</em> dice che la persona ti piace, <em>freundlich</em> che si comporta in modo cordiale. Il contrario di <em>freundlich</em> si fa con <em>un-</em>: <em>unfreundlich</em>."
      },
      {
        h: "Negare un aggettivo: nicht",
        p: "Come hai visto nell'unità 3, un aggettivo si nega con <strong>nicht</strong>, che sta davanti a lui: <em>Er ist nicht unfreundlich</em>, <em>Sie ist nicht faul, sie ist sehr fleißig</em>. Con <em>aber</em> si contrappone: <em>Mein Chef ist nett, aber zu ernst</em>."
      },
      {
        trap: "<em>Zu</em> davanti a un aggettivo significa «troppo», non «a»: <em>zu ernst</em> è «troppo serio». E <em>nicht</em> non diventa <em>kein</em> davanti a un aggettivo: «Er ist kein nett» è sbagliato, <em>kein</em> si usa solo con i nomi."
      },
      {
        tip: "Per descrivere una persona fai due mosse: l'aspetto (<em>Wie sieht sie aus?</em>) e il carattere (<em>Wie ist sie?</em>). Due domande diverse, due risposte diverse."
      }
    ],
    grammar: {
      title: "Wie ist er? Wie sieht er aus?",
      note: "<b>Wie ist ...?</b> chiede il carattere, <b>Wie sieht ... aus?</b> l'aspetto. In entrambi i casi l'aggettivo non cambia.",
      table: {
        head: ["domanda", "risposta", "esempio"],
        rows: [
          ["Wie ist dein Chef?", "sein + aggettivo", "Er ist nett."],
          ["Wie sieht dein Chef aus?", "sein + aggettivo; haben + nome all'accusativo", "Er ist groß. Er hat einen Bart."],
          ["negare un aggettivo", "nicht + aggettivo", "Er ist nicht unfreundlich."],
          ["troppo", "zu + aggettivo", "Er ist zu ernst."]
        ]
      },
      examples: [
        { tr: "Com'è il tuo capo?", note: "Wie ist ...? chiede il carattere" },
        { tr: "È molto simpatico." },
        { tr: "La mia amica è divertente." },
        { tr: "Non è pigra, è diligente.", note: "nicht davanti all'aggettivo" },
        { tr: "Il mio capo è simpatico, ma troppo serio." },
        { tr: "Paul non è scortese.", note: "nicht unfreundlich: negare un aggettivo" }
      ]
    },
    vocab: [
      "simpatico, gentile, carino",
      "cordiale, gentile",
      "scortese, poco cordiale",
      "divertente",
      "serio",
      "calmo, tranquillo",
      "simpatico, che piace",
      "intelligente",
      "diligente, che lavora con impegno",
      "pigro",
      "timido",
      "l'amico"
    ],
    exercises: [
      {
        q: "Come chiedi com'è il carattere di lui?",
        opts: ["Wie sieht er aus?", "Wie ist er?", "Wie hat er?"],
        why: "<b>Wie ist er?</b> chiede il carattere; <i>Wie sieht er aus?</i> l'aspetto."
      },
      {
        q: "Qual è il contrario di <i>freundlich</i>?",
        opts: ["unfreundlich", "fleißig", "ruhig"],
        why: "Il prefisso <b>un-</b> nega l'aggettivo: <i>unfreundlich</i>."
      },
      {
        q: "Paul arbeitet viel. Com'è?",
        opts: ["Er ist faul.", "Er ist schüchtern.", "Er ist fleißig."],
        why: "<i>Fleißig</i> è chi lavora con impegno; <i>faul</i> il suo contrario."
      },
      {
        q: "Completa: «Anna ist ___ unfreundlich, sie ist sehr nett.»",
        hint: "negare un aggettivo",
        why: "Si nega un aggettivo con <b>nicht</b>."
      },
      {
        q: "Abbina ogni parola al suo significato.",
        pairs: ["divertente", "serio", "pigro", "timido"]
      },
      {
        tr: "Il mio capo è molto simpatico e calmo.",
        why: "Soggetto, verbo, aggettivi: <i>Mein Chef ist sehr nett und ruhig</i>."
      },
      {
        q: "Traduci: «Mia sorella non è timida, è molto simpatica.»",
        why: "<i>Nicht schüchtern</i>: <i>nicht</i> sta davanti all'aggettivo. Poi una seconda frase con <i>sie ist ...</i>."
      },
      {
        q: "Completa il dialogo.",
        tr: "Com'è il tuo capo? È simpatico, ma troppo serio.",
        why: "<i>Wie ist ...?</i> e <i>ist</i> nelle risposte; <i>zu</i> davanti all'aggettivo significa «troppo»."
      },
      {
        tr: "Il mio amico è molto divertente, ma sua sorella è seria e calma.",
        why: "In <i>lustig</i> la <b>u</b> è breve e la <b>g</b> finale si legge come una <i>ch</i> dolce."
      },
      {
        tr: "La mia amica non è pigra, è molto diligente e simpatica.",
        why: "In <i>fleißig</i> la <b>ß</b> è una <b>s</b> sorda e la <b>ei</b> si legge come <i>ai</i>."
      }
    ]
  },
  "lesson:a1-u08-l4": {
    theme: "Il confronto",
    title: "Più grande di te",
    objectives: [
      "confrontare due persone con il comparativo e als",
      "dire che due cose sono uguali con so ... wie",
      "usare le forme irregolari besser, mehr, lieber"
    ],
    theory: [
      {
        h: "Il comparativo: -er e als",
        p: "Per dire che qualcuno è «più ...» si aggiunge <strong>-er</strong> all'aggettivo, e il secondo termine si introduce con <strong>als</strong>: <em>Er ist größer als du</em>. Molti aggettivi brevi prendono la dieresi: <em>alt → älter</em>, <em>jung → jünger</em>, <em>groß → größer</em>. Il comparativo, come l'aggettivo, resta invariato dopo <em>sein</em>."
      },
      {
        contrast: "L'italiano dice «più grande <em>di</em> te» con una preposizione e usa «più» davanti all'aggettivo. In tedesco il «più» sta dentro la parola (<em>größer</em>) e il secondo termine ha <em>als</em>, non una preposizione: <em>größer als du</em>."
      },
      {
        h: "Uguale: so ... wie",
        p: "Per dire che due cose sono uguali si usa <strong>so ... wie</strong> con l'aggettivo semplice, senza <em>-er</em>: <em>Sie ist so groß wie ich</em>. Per negare: <em>Anna ist nicht so alt wie Paul</em>."
      },
      {
        trap: "Non mescolare le due costruzioni: «größer wie du» e «so groß als du» sono errori comuni. <em>Als</em> va con il comparativo (<em>-er</em>), <em>wie</em> va con <em>so</em>. Alcune forme sono irregolari: <em>gut → besser</em>, <em>viel → mehr</em>, <em>gern → lieber</em>: <em>Ich trinke lieber Tee als Kaffee</em>."
      },
      {
        tip: "Quando confronti, chiediti: sono uguali o diversi? Uguali: <em>so ... wie</em>. Diversi: <em>-er ... als</em>."
      }
    ],
    grammar: {
      title: "Comparativo e uguaglianza",
      note: "<b>-er ... als</b> per «più di»; <b>so ... wie</b> per «tanto quanto». Le forme irregolari vanno imparate.",
      table: {
        head: ["aggettivo", "comparativo", "esempio"],
        rows: [
          ["klein", "kleiner", "Ich bin kleiner als du."],
          ["alt", "älter", "Er ist älter als ich."],
          ["jung", "jünger", "Sie ist jünger als ich."],
          ["groß", "größer", "Er ist größer als du."],
          ["gut", "besser", "Du sprichst besser Deutsch."],
          ["gern", "lieber", "Ich trinke lieber Tee."]
        ]
      },
      examples: [
        { tr: "Lui è più alto di te.", note: "größer als: -er + als" },
        { tr: "Lei è alta come me.", note: "so groß wie: aggettivo base + wie" },
        { tr: "Mio fratello è più grande di mia sorella." },
        { tr: "Bevo più volentieri tè che caffè.", note: "gern → lieber" },
        { tr: "Parli tedesco meglio di me.", note: "gut → besser" },
        { tr: "Anna non è vecchia come Paul.", note: "nicht so ... wie" }
      ]
    },
    vocab: [
      "di (nel confronto), che",
      "tanto ... quanto",
      "più vecchio, maggiore",
      "più giovane, minore",
      "più alto, più grande",
      "più piccolo",
      "meglio, migliore",
      "di più, più",
      "più volentieri, piuttosto",
      "il gemello",
      "la differenza",
      "uguale, della stessa età o misura"
    ],
    exercises: [
      {
        q: "Come dici «più grande di te»?",
        opts: ["größer wie du", "größer als du", "groß als du"],
        why: "Il comparativo ha <b>-er</b> e il secondo termine si introduce con <b>als</b>."
      },
      {
        q: "Come dici «grande come te»?",
        opts: ["so groß wie du", "so groß als du", "größer wie du"],
        why: "L'uguaglianza si fa con <b>so ... wie</b> e l'aggettivo senza <i>-er</i>."
      },
      {
        q: "Qual è il comparativo di <i>alt</i>?",
        opts: ["alter", "älter", "alterer"],
        why: "<b>Älter</b>: la <i>a</i> prende la dieresi."
      },
      {
        q: "Completa: «Paul ist ___ als ich.» (Paul è più alto di me.)",
        hint: "groß, comparativo",
        why: "<b>Größer</b>: <i>groß</i> + <i>-er</i>."
      },
      {
        q: "Completa: «Anna ist so alt ___ ich.» (Anna ha la mia età.)",
        hint: "uguaglianza",
        why: "Con <i>so ... wie</i> la parola è <b>wie</b>."
      },
      {
        tr: "Mio fratello è più grande di mia sorella.",
        why: "<i>Älter als</i>: l'ordine è soggetto, verbo, comparativo, <i>als</i>, secondo termine."
      },
      {
        q: "Traduci: «Tu parli tedesco meglio di me.»",
        why: "<i>Besser</i> e <i>als ich</i>: dopo <i>als</i> il pronome resta al nominativo."
      },
      {
        q: "Completa la frase.",
        tr: "Io sono più giovane di te, ma tu sei più vecchio di me.",
        why: "<i>Jünger als du</i>, <i>älter als ich</i>: le dieresi di <i>jung</i> e <i>alt</i>."
      },
      {
        tr: "Mio fratello è più grande di me, ma io sono più alto di lui.",
        why: "In <i>älter</i> la <b>ä</b> è una <b>e</b> aperta; in <i>größer</i> la <b>ö</b> è come la <i>eu</i> francese."
      },
      {
        tr: "Mia sorella è alta come me, ma è più giovane.",
        why: "In <i>jünger</i> la <b>j</b> è una <i>i</i> semiconsonantica, e la <b>ü</b> è come la <i>u</i> francese."
      }
    ]
  },
  "lesson:a1-u08-test": {
    theme: "Verifica",
    title: "Verifica dell'unità 8",
    objectives: ["verificare possessivi, aggettivi dopo sein e comparativo"],
    theory: [
      {
        p: "Dieci domande su tutta l'unità. Si supera con il 70%. Non riguardare le lezioni mentre rispondi: se non ricordi qualcosa, è meglio tornare a ripassare."
      }
    ],
    exercises: [
      {
        q: "Completa: «Das ist ___ Tante.» (Questa è mia zia.)",
        hint: "mein + desinenza femminile",
        why: "<b>Meine Tante</b>: femminile, nominativo."
      },
      {
        q: "Completa: «Ich mag ___ Onkel.» (Mi piace mio zio.)",
        hint: "mein + accusativo maschile",
        why: "<b>Meinen Onkel</b>: maschile accusativo."
      },
      {
        q: "Completa: «Du bist älter ___ ich.» (Sei più vecchio di me.)",
        hint: "secondo termine del confronto",
        why: "Dopo il comparativo si usa <b>als</b>."
      },
      {
        q: "Completa: «Sie ist so groß ___ ich.» (È alta come me.)",
        hint: "uguaglianza",
        why: "Con <i>so ... wie</i> la parola è <b>wie</b>."
      },
      {
        q: "Come dici «sua sorella» (la sorella di lei)?",
        opts: ["seine Schwester", "ihre Schwester", "ihr Schwester"],
        why: "Il possessore è femminile, quindi <b>ihr-</b>, e <i>Schwester</i> è femminile: <b>ihre Schwester</b>."
      },
      {
        q: "Quale frase è corretta?",
        opts: ["Meine Schwester ist kleine.", "Meine Schwester ist klein.", "Meine Schwester sind klein."],
        why: "Dopo <i>sein</i> l'aggettivo è invariabile, e con un soggetto singolare il verbo è <i>ist</i>."
      },
      {
        q: "Qual è il contrario di <i>fleißig</i>?",
        opts: ["faul", "ernst", "freundlich"],
        why: "<b>Faul</b> (pigro) è chi non lavora con impegno."
      },
      {
        q: "Come dici «meglio di»?",
        opts: ["gut als", "besser als", "guter als"],
        why: "<i>Gut</i> ha il comparativo irregolare <b>besser</b>."
      },
      {
        tr: "Mio zio è più vecchio di mio padre, ma non è così serio.",
        why: "<i>Älter als</i> e <i>nicht so ... wie</i>: due costruzioni diverse."
      },
      {
        tr: "Mia sorella è più alta di me ed è molto simpatica.",
        why: "<i>Größer als ich</i>, poi <i>sehr sympathisch</i>: in <i>sympathisch</i> la terminazione <b>sch</b> [ʃ] si pronuncia come <i>sc</i> in «scena»."
      }
    ]
  }
});
