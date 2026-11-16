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
        contrast: "In italiano il possessivo di norma ha l'articolo e concorda con la cosa posseduta: <em>il mio capo, la mia amica, i miei genitori</em>; l'articolo manca solo con i nomi di parentela al singolare senza altre parole: <em>mia madre, mio padre</em>. In tedesco l'articolo non c'è mai: <em>mio padre</em> è <em>mein Vater</em> e <em>il mio capo</em> è <em>mein Chef</em>, non «der mein Chef». La base dipende dal possessore (<em>sein</em>, <em>ihr</em>...); la desinenza dipende da genere, numero e caso del nome posseduto: <em>meine</em> vale per «mia» e per «miei»."
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
        q: "Completa: «Questi sono i miei genitori. Mio padre si chiama Jan.»",
        tr: "Questi sono i miei genitori. Mio padre si chiama Jan.",
        why: "<i>Eltern</i> è plurale: <b>meine</b>. <i>Vater</i> è maschile nominativo: <b>Mein</b>, con la maiuscola a inizio frase."
      },
      {
        tr: "Mia madre si chiama Eva e mio padre si chiama Jan.",
        why: "In <i>heißen</i> la <b>ß</b> è una <b>s</b> sorda, come in «sasso»."
      },
      {
        tr: "Questa è la mia famiglia: mio padre, mia madre e mio fratello.",
        why: "<i>Familie</i> si pronuncia /faˈmiːli̯ə/: la prima <b>i</b> è lunga e accentata; la terminazione <b>-ie</b> si pronuncia /i̯ə/, non è una <b>i</b> lunga."
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
        why: "In <i>Brille</i> la <b>r</b> può essere uvulare (la più diffusa) o apicale, anch'essa standard; nessuna delle due è sbagliata. La <b>ll</b> segna la <b>i</b> breve che precede e non è una geminata come in italiano."
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
        contrast: "Come in italiano, una persona può essere gentile senza risultare simpatica. In tedesco <em>sympathisch</em> dice che una persona suscita simpatia, <em>freundlich</em> descrive un comportamento cordiale, <em>nett</em> può voler dire gentile, carino o simpatico secondo il contesto. Il contrario di <em>freundlich</em> si fa con <em>un-</em>: <em>unfreundlich</em>."
      },
      {
        h: "Negare un aggettivo: nicht",
        p: "Come hai visto nell'unità 3, un aggettivo si nega con <strong>nicht</strong>, che sta davanti a lui: <em>Er ist nicht unfreundlich</em>, <em>Sie ist nicht faul, sie ist sehr fleißig</em>. Con <em>aber</em> si contrappone: <em>Mein Chef ist nett, aber zu ernst</em>."
      },
      {
        trap: "<em>Zu</em> davanti a un aggettivo significa «troppo», non «a»: <em>zu ernst</em> è «troppo serio». E <em>nicht</em> non diventa <em>kein</em> davanti a un aggettivo: «Er ist kein nett» è sbagliato; per negare un aggettivo dopo <em>sein</em> si usa <em>nicht</em>, <em>Er ist nicht nett</em>."
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
        q: "Completa: «Com'è il tuo capo? È simpatico, ma troppo serio.»",
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
        why: "<i>Besser</i> e <i>als ich</i>: qui <i>ich</i> è al nominativo perché è il soggetto della frase sottintesa: <i>als ich Deutsch spreche</i>."
      },
      {
        q: "Completa la frase. Usa jung nella prima lacuna e alt nella seconda.",
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
  },
  "unit:a1-u09": {
    title: "Tempo libero",
    grammarNote: "presente e giorni · es regnet · gerade al posto di «stare + gerundio» · für, ohne, um, durch, gegen · und, aber, oder, denn"
  },
  "lesson:a1-u09-l1": {
    theme: "Il fine settimana",
    title: "Cosa fai nel fine settimana?",
    objectives: [
      "chiedere e dire cosa si fa nel fine settimana",
      "scegliere fra am Samstag e samstags",
      "parlare di hobby con spielen, schwimmen, wandern, kochen"
    ],
    theory: [
      {
        h: "Il presente per i programmi",
        p: "Il presente tedesco serve per quello che fai di solito e per quello che farai presto: <em>Am Samstag spiele ich Fußball</em> (sabato gioco a calcio). Il verbo resta in <b>seconda posizione</b>: se apri la frase con <em>am Samstag</em>, il soggetto passa dopo il verbo."
      },
      {
        contrast: "L'italiano distingue «sabato» (quel sabato) da «il sabato» (ogni sabato) con l'articolo. Il tedesco usa due forme diverse: <em>samstags</em> (con <em>-s</em>) indica in modo esplicito l'abitudine, mentre <em>am Samstag</em> dipende dal contesto: può essere un sabato preciso, ma anche abituale (<em>Am Samstag spiele ich immer Fußball</em>). E «nel fine settimana» è <em>am Wochenende</em>, con <em>am</em>: l'italiano «nel» fa pensare a <em>im</em>, ma <em>im Wochenende</em> è sbagliato."
      },
      {
        trap: "<em>Wochenende</em> è neutro (<em>das Wochenende</em>), mentre «il fine settimana» in italiano è maschile: il genere italiano non ti aiuta. E con gli sport si dice <em>Fußball spielen</em>, senza preposizione: «giocare <em>a</em> calcio» non ha un <em>an</em> o <em>zu</em> corrispondente. Con uno strumento vale lo stesso: <em>Gitarre spielen</em>."
      },
      {
        tip: "Per dire che una cosa ti piace aggiungi <em>gern</em> dopo il verbo: <em>Ich schwimme gern</em>. Per chiedere a qualcuno quali programmi ha, <em>Was machst du am Wochenende?</em> è la domanda più naturale."
      }
    ],
    grammar: {
      title: "Quando: am, samstags, im",
      note: "<b>am</b> per un giorno preciso e per la parte del giorno, <b>-s</b> per l'abitudine esplicita (<b>am</b> può essere anche abituale, secondo il contesto), <b>im</b> per le stagioni.",
      table: {
        head: ["quando", "forma", "esempio"],
        rows: [
          ["di solito un sabato preciso (o abituale, secondo il contesto)", "am Samstag", "Am Samstag spiele ich Fußball."],
          ["ogni sabato, abitudine esplicita", "samstags", "Samstags schwimme ich gern."],
          ["nel fine settimana", "am Wochenende", "Am Wochenende wandere ich."],
          ["la sera", "am Abend", "Am Abend koche ich."],
          ["in una stagione", "im Winter", "Im Winter tanzen wir oft."]
        ]
      },
      examples: [
        { tr: "Cosa fai nel fine settimana?", note: "am Wochenende, non im" },
        { tr: "Sabato gioco a calcio.", note: "Fußball spielen senza preposizione" },
        { tr: "Il sabato nuoto volentieri.", note: "samstags = ogni sabato" },
        { tr: "Domenica faccio escursioni con gli amici.", note: "wandern: camminare in natura" },
        { tr: "La sera cucino per la mia famiglia." },
        { tr: "In inverno balliamo spesso.", note: "im + stagione" }
      ]
    },
    vocab: [
      "il fine settimana, il weekend",
      "il passatempo, l'hobby",
      "il concerto",
      "il film",
      "il libro",
      "la gita, l'escursione",
      "giocare (anche suonare uno strumento)",
      "nuotare",
      "fare escursioni a piedi",
      "cucinare",
      "ballare",
      "il sabato, ogni sabato"
    ],
    exercises: [
      {
        q: "Come chiedi a un amico cosa fa nel fine settimana?",
        opts: ["Was machst du am Wochenende?", "Was machst du im Wochenende?", "Was machst du an Wochenende?"],
        why: "Con il fine settimana si usa <b>am</b>: <i>am Wochenende</i>. <i>Im Wochenende</i> è l'errore di chi pensa a «nel»."
      },
      {
        q: "Come dici «ogni sabato»?",
        opts: ["Im Samstag", "Der Samstag", "Samstags"],
        why: "<b>Samstags</b>, con la <i>-s</i>, indica in modo esplicito un'abitudine. <i>Am Samstag</i> dipende dal contesto: di solito un sabato preciso, ma può essere anche abituale."
      },
      {
        q: "Completa: «Ich ___ gern Fußball.» (giocare, io)",
        hint: "spielen, ich",
        why: "Con <i>ich</i> il verbo regolare finisce in <b>-e</b>: <i>ich spiele</i>."
      },
      {
        q: "Completa: «Ich besuche ___ Sonntag meine Großmutter.» (domenica)",
        hint: "preposizione per un giorno preciso",
        why: "Un giorno preciso vuole <b>am</b>: <i>am Sonntag</i>."
      },
      {
        q: "Abbina ogni verbo al suo significato.",
        pairs: ["giocare", "nuotare", "fare escursioni a piedi", "cucinare"]
      },
      {
        q: "Traduci: «Sabato gioco a calcio e domenica faccio escursioni a piedi.» (giorni precisi, usa wandern)",
        why: "<i>Am Samstag spiele ich Fußball ...</i>: dopo il complemento di tempo il verbo resta in seconda posizione e il soggetto lo segue."
      },
      {
        q: "Completa il dialogo (usa treffen).",
        tr: "Cosa fai nel fine settimana? Incontro amici e andiamo al cinema.",
        why: "Con <i>du</i> si dice <i>machst</i>; <i>ich treffe</i> è la prima persona di <i>treffen</i>; <i>ins</i> è <i>in das</i>."
      },
      {
        q: "Un amico ti chiede dei tuoi programmi.",
        setting: "Parli con un amico al telefono.",
        lines: [
          { tr: "Ciao! Cosa fai nel fine settimana?" },
          { tr: "Rispondi che sabato giochi a calcio.", answerTr: "Sabato gioco a calcio." },
          { tr: "E domenica?" },
          { tr: "Rispondi che domenica fai escursioni.", answerTr: "Domenica faccio escursioni." }
        ]
      },
      {
        tr: "Sabato gioco a calcio e domenica cucino per la mia famiglia.",
        why: "In <i>Fußball</i> la <b>ß</b> è una <b>s</b> sorda e la <b>u</b> è lunga."
      },
      {
        tr: "Sabato ballo e domenica faccio escursioni a piedi.",
        why: "In <i>tanze</i> la <b>z</b> si legge [ts], come in «pizza»; in <i>wandere</i> la <b>w</b> è come la «v» italiana."
      }
    ]
  },
  "lesson:a1-u09-l2": {
    theme: "Il tempo",
    title: "Piove",
    objectives: [
      "dire che tempo fa con es regnet, es schneit, es ist kalt",
      "usare es come soggetto delle frasi sul tempo",
      "chiedere e dire la temperatura"
    ],
    theory: [
      {
        h: "Es: il soggetto che in italiano non c'è",
        p: "Per parlare del tempo il tedesco vuole un soggetto: <strong>es</strong>. <em>Es regnet</em> (piove), <em>Es schneit</em> (nevica), <em>Es ist kalt</em> (fa freddo). <em>Es</em> non indica una cosa: tiene solo il posto del soggetto."
      },
      {
        contrast: "L'italiano omette il soggetto: «piove», «nevica», «fa freddo». In tedesco nelle frasi sul tempo non si omette: <em>Regnet</em> da solo non è una frase. Anche quando la frase comincia con un altro elemento, <em>es</em> resta e va dopo il verbo: <em>Heute regnet es</em>, non <em>Heute regnet</em>."
      },
      {
        trap: "«Fa freddo» in italiano usa il verbo fare; in tedesco usa <em>sein</em>: <em>Es ist kalt</em>, non «es macht kalt». Attenzione anche a <em>die Sonne scheint</em>: qui il soggetto è una cosa vera, <em>die Sonne</em>, e non serve <em>es</em>. Per «è soleggiato» si dice invece <em>Es ist sonnig</em>."
      },
      {
        tip: "Per la temperatura: <em>Wie viel Grad sind es?</em> e <em>Es sind zwanzig Grad.</em> Con un numero, per indicare la temperatura, <em>Grad</em> resta invariato; il plurale lessicale è <em>Grade</em>. Per chiedere il tempo: <em>Wie ist das Wetter?</em>"
      }
    ],
    grammar: {
      title: "Es nelle frasi sul tempo",
      note: "Il soggetto <b>es</b> non si omette; con un altro elemento in prima posizione va dopo il verbo.",
      table: {
        head: ["italiano", "tedesco", "esempio"],
        rows: [
          ["piove", "Es regnet.", "Heute regnet es nicht."],
          ["nevica", "Es schneit.", "Im Winter schneit es oft."],
          ["fa freddo", "Es ist kalt.", "Heute ist es sehr kalt."],
          ["fa caldo", "Es ist warm / heiß.", "Im Sommer ist es warm."],
          ["com'è il tempo?", "Wie ist das Wetter?", "Wie ist das Wetter in Wien?"]
        ]
      },
      examples: [
        { tr: "Piove.", note: "es non si omette" },
        { tr: "In inverno nevica spesso.", note: "es dopo il verbo" },
        { tr: "Oggi fa molto freddo.", note: "sein, non machen" },
        { tr: "Oggi non piove." },
        { tr: "Com'è il tempo?", note: "das Wetter è neutro" },
        { tr: "Ci sono venti gradi.", note: "Con un numero, per la temperatura, Grad resta invariato: zwanzig Grad; il plurale lessicale è Grade." }
      ]
    },
    vocab: [
      "il tempo (meteorologico)",
      "piovere",
      "nevicare",
      "il sole",
      "la nuvola",
      "il vento",
      "freddo",
      "caldo (piacevole), tiepido",
      "molto caldo, torrido",
      "soleggiato",
      "ventoso",
      "il grado"
    ],
    exercises: [
      {
        q: "Come dici «piove»?",
        opts: ["Es regnet.", "Regnet.", "Sie regnet."],
        why: "In tedesco il soggetto <b>es</b> non si omette: <i>Es regnet</i>."
      },
      {
        q: "Quale frase è corretta?",
        opts: ["Heute es regnet.", "Heute regnet es.", "Heute regnet."],
        why: "Il verbo è in seconda posizione e <i>es</i> resta, dopo il verbo."
      },
      {
        q: "Completa: «Im Winter ___ es oft.» (nevicare)",
        hint: "schneien, es",
        why: "<b>Schneit</b>: <i>schneien</i> alla terza persona, con <i>es</i>."
      },
      {
        q: "Completa: «Heute ist ___ sehr kalt.» (Oggi fa molto freddo.)",
        hint: "il soggetto delle frasi sul tempo",
        why: "<b>Es</b> è il soggetto e nelle frasi sul tempo non si omette."
      },
      {
        q: "Abbina ogni parola al suo significato.",
        pairs: ["freddo", "molto caldo", "soleggiato", "ventoso"]
      },
      {
        tr: "Oggi fa molto freddo.",
        why: "<i>Heute ist es sehr kalt</i>: verbo in seconda posizione. Va bene anche <i>Es ist heute sehr kalt</i>."
      },
      {
        q: "Traduci: «Oggi piove e fa freddo.»",
        why: "Due frasi, due <i>es</i>: <i>es regnet</i> e <i>es ist kalt</i>. Dopo <i>und</i> il soggetto comune si può omettere: <i>Heute regnet es und ist kalt</i>."
      },
      {
        q: "Completa il dialogo.",
        tr: "Com'è il tempo oggi? Piove e fa freddo.",
        why: "<i>Das Wetter</i> è neutro. Con <i>regnet</i> e <i>ist kalt</i> il soggetto <i>es</i> c'è sempre."
      },
      {
        tr: "Oggi c'è il sole, ma non fa caldo.",
        why: "In <i>scheint</i> il gruppo <b>sch</b> si legge [ʃ] e <b>ei</b> si legge come «ai»."
      },
      {
        tr: "In inverno nevica spesso e fa molto freddo.",
        why: "In <i>schneit</i> la <b>sch</b> è [ʃ] seguita da <b>n</b>, e <b>ei</b> si legge come «ai»."
      }
    ]
  },
  "lesson:a1-u09-l3": {
    theme: "Adesso",
    title: "Sto leggendo",
    objectives: [
      "dire cosa si sta facendo adesso con il presente e gerade",
      "usare im Moment come alternativa a gerade",
      "coniugare lesen e sehen (e fernsehen)"
    ],
    theory: [
      {
        h: "Gerade + presente",
        p: "Il tedesco non ha una forma come «sto leggendo». Per dire che fai qualcosa adesso usi il presente e aggiungi <strong>gerade</strong> (proprio ora) o <strong>im Moment</strong> (al momento): <em>Ich lese gerade</em>. Di solito <em>gerade</em> sta dopo il verbo."
      },
      {
        contrast: "L'italiano ha «stare + gerundio»: «sto leggendo», «sta telefonando». Nel tedesco standard non esiste una costruzione che corrisponda: <em>Ich bin lesend</em> è sbagliato. «Sto leggendo» e «leggo» sono entrambi <em>ich lese</em>, e solo il contesto o <em>gerade</em> dice se è adesso. In alcune regioni si sente anche <em>Ich bin am Lesen</em>, ma per ora non ti serve."
      },
      {
        h: "Lesen e sehen cambiano vocale",
        p: "Alla seconda e alla terza persona singolare <em>lesen</em> e <em>sehen</em> cambiano <b>e → ie</b>: <em>du liest</em>, <em>er liest</em>, <em>du siehst</em>, <em>er sieht</em>. <em>Fernsehen</em> è separabile: <em>Er sieht gerade fern</em>."
      },
      {
        trap: "<em>Ich lese</em> da solo può voler dire «leggo» (di solito) o «sto leggendo». Se vuoi che sia chiaro che è adesso, metti <em>gerade</em>. Usa un solo verbo coniugato al presente: <em>ich lese gerade</em>. Non aggiungere <em>bin</em>."
      },
      {
        tip: "La domanda e la risposta usano lo stesso schema: <em>Was machst du gerade? Ich lese gerade.</em> Gli avverbi di frequenza (<em>immer, oft, manchmal, nie</em>) seguono il verbo coniugato e il soggetto pronome: <em>Ich lese oft</em>, <em>Heute lese ich oft</em>."
      }
    ],
    grammar: {
      title: "Lesen e sehen al presente",
      note: "<b>e → ie</b> con <em>du</em> e <em>er/sie/es</em>. Con <b>gerade</b> si dice «adesso».",
      table: {
        head: ["persona", "lesen", "sehen"],
        rows: [
          ["ich", "lese", "sehe"],
          ["du", "liest", "siehst"],
          ["er / sie / es", "liest", "sieht"],
          ["wir", "lesen", "sehen"],
          ["ihr", "lest", "seht"],
          ["sie / Sie", "lesen", "sehen"]
        ]
      },
      examples: [
        { tr: "Sto leggendo un libro.", note: "presente + gerade" },
        { tr: "Che cosa stai facendo?", note: "gerade = in questo momento" },
        { tr: "Lui sta guardando la TV.", note: "fernsehen: fern in fondo" },
        { tr: "Al momento scrivo un messaggio.", note: "im Moment in prima posizione: il verbo segue" },
        { tr: "Stiamo ascoltando una canzone." },
        { tr: "Lei sta telefonando." }
      ]
    },
    vocab: [
      "proprio ora, adesso",
      "al momento, in questo momento",
      "leggere",
      "ascoltare",
      "scrivere",
      "telefonare",
      "guardare la televisione",
      "imparare, studiare",
      "il giornale",
      "il telefono cellulare",
      "il messaggio",
      "la canzone"
    ],
    exercises: [
      {
        q: "Come dici «sto leggendo» (adesso)?",
        opts: ["Ich lese gerade.", "Ich bin gerade lesend.", "Ich lesen gerade."],
        why: "Si usa il presente con <b>gerade</b>: non c'è una forma con «stare»."
      },
      {
        q: "Che cosa significa «Was machst du gerade?»",
        opts: ["Che cosa fai di solito?", "Che cosa stai facendo adesso?", "Che cosa hai fatto ieri?"],
        why: "<i>Gerade</i> vuol dire «in questo momento»."
      },
      {
        q: "Completa: «Du ___ gerade ein Buch.» (leggere)",
        hint: "lesen, du",
        why: "<i>Lesen</i> cambia <b>e → ie</b> con <i>du</i>: <b>liest</b>."
      },
      {
        q: "Completa: «Er ___ gerade fern.» (guardare la TV, lui)",
        hint: "fernsehen, er",
        why: "<i>Fernsehen</i> è separabile e come <i>sehen</i> cambia <b>e → ie</b>: <b>sieht</b>, e <i>fern</i> va in fondo."
      },
      {
        q: "Completa: «Wir ___ gerade ein Lied.» (ascoltare)",
        hint: "hören, wir",
        why: "Con <i>wir</i> il presente di <i>hören</i> è <b>wir hören</b>: la forma coincide con l'infinito."
      },
      {
        tr: "Sto scrivendo un messaggio.",
        why: "<i>Ich schreibe gerade eine Nachricht</i>. Anche <i>Gerade schreibe ich eine Nachricht</i> è corretto, ma allora il soggetto segue il verbo."
      },
      {
        q: "Traduci: «Mio fratello sta leggendo il giornale.» (usa gerade)",
        why: "<i>Mein Bruder liest gerade die Zeitung</i>: con <i>er</i> e <i>Bruder</i> la vocale cambia, <i>liest</i>."
      },
      {
        q: "Completa il dialogo.",
        tr: "Che cosa fai adesso? Sto leggendo un libro e mio fratello guarda la TV.",
        why: "<i>Machst</i>, <i>lese</i>, <i>sieht ... fern</i>: nessuna forma di «stare», solo il presente con <i>gerade</i>."
      },
      {
        tr: "Io sto leggendo, e mio fratello al momento guarda la televisione.",
        why: "In <i>sieht</i> la <b>ie</b> è una <b>i</b> lunga e la <b>h</b> non si pronuncia; nello standard la <b>s</b> iniziale è sonora, come in «rosa»."
      },
      {
        tr: "Sto scrivendo un messaggio e ascolto una canzone.",
        why: "In <i>höre</i> la <b>ö</b> è lunga, come la <i>eu</i> francese di «peu». In <i>Nachricht</i> la prima <b>ch</b> è dura [x], la seconda è dolce [ç]."
      }
    ]
  },
  "lesson:a1-u09-l4": {
    theme: "Un invito",
    title: "Andiamo al cinema?",
    objectives: [
      "proporre, accettare e rifiutare un invito",
      "usare für, ohne, um, durch, gegen con l'accusativo",
      "collegare le frasi con und, aber, oder, denn"
    ],
    theory: [
      {
        h: "Proporre, accettare, rifiutare",
        p: "Per proporre: <em>Gehen wir ins Kino?</em> oppure <em>Hast du Lust?</em> Per accettare: <em>Ja, gern!</em>, <em>Gute Idee!</em> Per rifiutare con garbo: <em>Leider kann ich nicht</em> o <em>Tut mir leid</em>, e poi il motivo con <em>denn</em>. <em>Ins</em> è <em>in das</em>: qui è una formula da imparare così."
      },
      {
        h: "Cinque preposizioni con l'accusativo",
        p: "<strong>für</strong> (per), <strong>ohne</strong> (senza), <strong>um</strong> (intorno a; con le ore, alle), <strong>durch</strong> (attraverso), <strong>gegen</strong> (contro) vogliono sempre l'<b>accusativo</b>: cambia solo il maschile. <em>Die Karte ist für den Freund</em>, <em>Wir gehen durch den Park</em>. Con i pronomi: <em>für mich, für dich, ohne ihn, ohne sie</em>."
      },
      {
        contrast: "In italiano «per Marco» e «senza Marco» non cambiano il nome. In tedesco l'articolo maschile cambia: <em>für den Freund</em>, <em>ohne meinen Bruder</em>; con il femminile e il neutro non vedi differenza: <em>für die Freundin</em>, <em>für das Kind</em>. «Alle otto» si dice con <em>um</em>: <em>um acht Uhr</em>."
      },
      {
        h: "Und, aber, oder, denn",
        p: "Queste quattro parole collegano due frasi e <b>non spostano il verbo</b>: <em>Ich bin müde, aber ich gehe ins Kino</em>. Dopo <em>und</em>, <em>oder</em> e <em>aber</em> il soggetto uguale si può omettere: <em>Ich gehe ins Kino und sehe einen Film</em>. Dopo <em>denn</em> il soggetto si ripete sempre."
      },
      {
        trap: "L'italiano «perché» è una parola sola: «non vengo perché devo lavorare». In tedesco, per spiegare un motivo, usa <em>denn</em> e lascia il verbo al secondo posto: <em>Ich komme nicht, denn ich muss arbeiten</em>. Sono errori <em>denn ich arbeiten muss</em> (verbo in fondo) e <em>denn muss ich arbeiten</em> (verbo al primo posto); con un altro elemento in testa il verbo resta secondo: <em>denn morgen muss ich arbeiten</em>. Un'altra parola per «perché», <em>weil</em>, manda il verbo in fondo: arriva più avanti. Attenzione anche a <em>gegen</em>: vuol dire «contro», ma con le ore anche «verso» (<em>gegen acht Uhr</em>, verso le otto)."
      },
      {
        tip: "Per rifiutare con garbo: <em>Leider</em> + motivo con <em>denn</em>. Prima di <em>aber</em> e <em>denn</em> la virgola è obbligatoria."
      }
    ],
    grammar: {
      title: "Preposizioni con l'accusativo e connettori",
      note: "<b>für, ohne, um, durch, gegen</b> + accusativo; <b>und, aber, oder, denn</b> non spostano il verbo.",
      table: {
        head: ["preposizione", "significato", "esempio"],
        rows: [
          ["für", "per", "Die Karte ist für dich."],
          ["ohne", "senza", "Ich trinke Kaffee ohne Zucker."],
          ["um", "intorno a; alle (ore)", "Der Film beginnt um acht Uhr."],
          ["durch", "attraverso", "Wir gehen durch den Park."],
          ["gegen", "contro", "Ich bin gegen den Plan."]
        ]
      },
      examples: [
        { tr: "Andiamo al cinema?", note: "ins = in das" },
        { tr: "Il biglietto è per te.", note: "für + accusativo" },
        { tr: "Bevo il caffè senza zucchero.", note: "ohne + nome non numerabile: qui Zucker indica la sostanza in generale, quindi di norma senza articolo" },
        { tr: "Il film comincia alle otto.", note: "um con le ore" },
        { tr: "Attraversiamo il parco, ma piove.", note: "aber non sposta il verbo" },
        { tr: "Non vengo, perché devo lavorare.", note: "denn non sposta il verbo: resta in seconda posizione" }
      ]
    },
    vocab: [
      "il cinema",
      "il biglietto (anche: la carta, la cartolina)",
      "l'idea",
      "la proposta",
      "la voglia",
      "purtroppo",
      "per",
      "senza",
      "intorno a; alle (con le ore)",
      "attraverso",
      "contro",
      "perché (spiega il motivo)"
    ],
    exercises: [
      {
        q: "Come proponi a un amico di andare al cinema?",
        opts: ["Gehen wir ins Kino?", "Wir ins Kino gehen?", "Gehen wir an Kino?"],
        why: "Una proposta è una domanda con il verbo al primo posto: <i>Gehen wir ...?</i> <i>Ins</i> è <i>in das</i>."
      },
      {
        q: "Come rifiuti e spieghi il motivo?",
        opts: ["Leider nicht, denn muss ich arbeiten.", "Leider nicht, denn ich arbeiten muss.", "Leider nicht, denn ich muss arbeiten."],
        why: "<b>Denn</b> non occupa una posizione nella frase che segue: il verbo coniugato resta in seconda posizione, come in <i>denn ich muss arbeiten</i> (ma anche <i>denn morgen muss ich arbeiten</i>). Le altre due opzioni hanno il verbo alla fine o al primo posto."
      },
      {
        q: "Completa: «Die Karte ist ___ dich.» (per)",
        hint: "per + accusativo",
        why: "<b>Für</b> vuole l'accusativo: <i>für dich</i>."
      },
      {
        q: "Completa: «Ich trinke Kaffee ___ Zucker.» (senza)",
        hint: "senza",
        why: "<b>Ohne</b> + accusativo; con un nome non numerabile come <i>Zucker</i> l'articolo di solito manca."
      },
      {
        q: "Abbina ogni preposizione al suo significato.",
        pairs: ["per", "senza", "attraverso", "contro"]
      },
      {
        tr: "Andiamo attraverso il parco.",
        why: "<i>Wir gehen durch den Park</i>: <i>durch</i> + accusativo, <i>den</i>. Va bene anche <i>Durch den Park gehen wir</i>."
      },
      {
        q: "Traduci: «Non vengo, perché devo lavorare.» (usa denn)",
        why: "<i>Ich komme nicht, denn ich muss arbeiten</i>: dopo <i>denn</i> il verbo coniugato resta in seconda posizione."
      },
      {
        q: "Completa il dialogo.",
        tr: "Andiamo al cinema? Purtroppo non posso, perché devo lavorare. Ma domani ho tempo.",
        why: "<i>Ins</i> è <i>in das</i>; <i>denn</i> spiega il motivo e non sposta il verbo; <i>ich habe Zeit</i> usa <i>haben</i>."
      },
      {
        tr: "Andiamo al cinema? Purtroppo non posso, perché devo lavorare.",
        why: "In <i>leider</i> la <b>ei</b> si legge come «ai» e la <b>d</b> è sonora; in <i>Kino</i> la prima <b>i</b> è lunga."
      },
      {
        tr: "Buona idea! Andiamo al cinema alle otto?",
        why: "In <i>Uhr</i> la <b>h</b> non si pronuncia e la <b>u</b> è lunga; in <i>Idee</i> la <b>ee</b> è una <b>e</b> lunga."
      }
    ]
  },
  "lesson:a1-u09-test": {
    theme: "Verifica",
    title: "Verifica dell'unità 9",
    objectives: ["verificare es, gerade, preposizioni con l'accusativo e connettori"],
    theory: [
      {
        p: "Dieci domande su tutta l'unità. Si supera con il 70%. Non riguardare le lezioni mentre rispondi: se non ricordi qualcosa, è meglio tornare a ripassare."
      }
    ],
    exercises: [
      {
        q: "Completa: «Im Winter schneit ___ oft.» (In inverno nevica spesso.)",
        hint: "il soggetto delle frasi sul tempo",
        why: "<b>Es</b> è il soggetto e non si omette."
      },
      {
        q: "Completa: «Die Karte ist ___ meinen Bruder.» (per)",
        hint: "per + accusativo",
        why: "<b>Für</b> + accusativo: <i>meinen Bruder</i>."
      },
      {
        q: "Completa: «Ich komme nicht, ___ ich muss arbeiten.» (perché)",
        hint: "spiega il motivo, il verbo resta in seconda posizione",
        why: "<b>Denn</b> non sposta il verbo."
      },
      {
        q: "Completa: «Wir gehen ___ den Park.» (attraverso)",
        hint: "attraverso",
        why: "<b>Durch</b> + accusativo: <i>den Park</i>."
      },
      {
        q: "Quale frase dice «sto leggendo adesso»?",
        opts: ["Ich bin lesen.", "Ich lesen gerade.", "Ich lese gerade."],
        why: "Presente con <b>gerade</b>: <i>ich lese gerade</i>."
      },
      {
        q: "Quale frase è corretta?",
        opts: ["Er geht ohne ich ins Kino.", "Er geht ohne mich ins Kino.", "Er geht ohne mir ins Kino."],
        why: "<i>Ohne</i> vuole l'accusativo: <b>mich</b>."
      },
      {
        q: "Quale frase è corretta?",
        opts: ["Ich bleibe zu Hause, denn ich bin müde.", "Ich bleibe zu Hause, denn ich müde bin.", "Ich bleibe zu Hause, denn bin ich müde."],
        why: "<i>Denn</i> non occupa una posizione: il verbo coniugato resta in seconda posizione, come in <i>denn ich bin müde</i> (ma anche <i>denn heute bin ich müde</i>). Le altre due opzioni hanno il verbo alla fine o al primo posto."
      },
      {
        tr: "Sabato andiamo al cinema.",
        why: "<i>Am Samstag gehen wir ins Kino</i>: verbo in seconda posizione. Va bene anche <i>Wir gehen am Samstag ins Kino</i>."
      },
      {
        tr: "Piove e fa freddo, ma io vado al cinema.",
        why: "In <i>regnet</i> si pronunciano sia la <b>g</b> sia la <b>n</b>; in <i>Kino</i> la prima <b>i</b> è lunga."
      },
      {
        tr: "Purtroppo non posso, perché alle otto devo lavorare.",
        why: "In <i>muss</i> la <b>ss</b> è una <b>s</b> sorda e la <b>u</b> è breve; <i>arbeiten</i> è all'infinito in fondo alla frase."
      }
    ]
  },
  "unit:a1-u10": {
    title: "Il mio fine settimana",
    grammarNote: "Perfekt con haben e con sein · participio II regolare, forte e separabile · war e hatte come formule · ripasso dell'A1"
  },
  "lesson:a1-u10-l1": {
    theme: "Il passato parlato",
    title: "Ho mangiato, ho visto",
    objectives: [
      "formare il Perfekt con haben e il participio II",
      "riconoscere il participio regolare (ge- ... -t) e quello forte (ge- ... -en)",
      "raccontare cosa si è fatto ieri o nel fine settimana"
    ],
    theory: [
      {
        h: "Il Perfekt: il passato del parlato",
        p: "Quando racconti qualcosa di passato, a voce, usi il <strong>Perfekt</strong>: <strong>haben</strong> in seconda posizione e il <strong>participio II</strong> in fondo alla frase. <em>Ich habe gegessen</em> (ho mangiato), <em>Gestern habe ich einen Film gesehen</em> (ieri ho visto un film). Il participio dei verbi regolari è <em>ge- + radice + -t</em> (<em>machen, gemacht</em>), quello dei verbi forti è <em>ge- + radice + -en</em> (<em>essen, gegessen</em>)."
      },
      {
        contrast: "La costruzione somiglia al passato prossimo italiano: <em>ho mangiato</em> corrisponde a <em>ich habe gegessen</em>. Due differenze. Nel Perfekt il participio <strong>non concorda mai</strong>: in italiano si dice <em>l'ho vista</em> e <em>sono andata</em>, in tedesco <em>Ich habe sie gesehen</em> e <em>Ich bin gegangen</em>, qualunque sia il soggetto o l'oggetto. E il tedesco parlato usa il Perfekt anche dove un italiano potrebbe dire il passato remoto: <em>Gestern habe ich einen Film gesehen</em> si traduce con «ieri ho visto» e, in certi contesti, anche con «ieri vidi»."
      },
      {
        trap: "In italiano il participio segue subito l'ausiliare: <em>ho visto ieri un film</em>. In tedesco il participio va <strong>in fondo</strong>, dopo tutti i complementi: <em>Ich habe gestern einen Film <strong>gesehen</strong></em>, non «Ich habe gesehen gestern einen Film». Il participio dei verbi forti non si deduce: va imparato insieme all'infinito (<em>trinken, getrunken</em>; <em>lesen, gelesen</em>)."
      },
      {
        tip: "Non prendono <em>ge-</em> i verbi con prefisso inseparabile (<em>be-, ver-, er-, ent-</em>) e quelli in <em>-ieren</em>: <em>besuchen, besucht</em>; <em>studieren, studiert</em>. Per le domande vale la stessa struttura: <em>Hast du am Samstag gekocht?</em> Il verbo coniugato apre la frase, il participio la chiude."
      }
    ],
    grammar: {
      title: "Perfekt con haben",
      note: "<b>haben</b> in seconda posizione + <b>participio II</b> in fondo. Regolare: ge- ... -t; forte: ge- ... -en; senza ge- con be-, ver-, er- e con -ieren.",
      table: {
        head: ["tipo", "infinito", "participio II"],
        rows: [
          ["regolare: ge- ... -t", "machen, kaufen, kochen", "gemacht, gekauft, gekocht"],
          ["forte: ge- ... -en", "essen, sehen, trinken", "gegessen, gesehen, getrunken"],
          ["forte: ge- ... -en", "lesen, schlafen, treffen", "gelesen, geschlafen, getroffen"],
          ["senza ge-", "besuchen, studieren", "besucht, studiert"]
        ]
      },
      examples: [
        { tr: "Ieri ho visto un film.", note: "participio in fondo alla frase" },
        { tr: "Ho mangiato la pizza.", note: "essen è forte: gegessen" },
        { tr: "Abbiamo bevuto il caffè.", note: "haben con wir: haben" },
        { tr: "Lui ha comprato un libro.", note: "kaufen è regolare: gekauft" },
        { tr: "Hai cucinato sabato?", note: "domanda: haben al primo posto" },
        { tr: "Domenica ho visitato mia nonna.", note: "besuchen: niente ge-" }
      ]
    },
    vocab: [
      "ieri",
      "l'altro ieri",
      "vedere",
      "fare (anche: cosa hai fatto?)",
      "comprare",
      "bere",
      "mangiare",
      "leggere",
      "dormire",
      "visitare, andare a trovare",
      "incontrare",
      "la cena"
    ],
    exercises: [
      {
        q: "Come dici «Ho mangiato»?",
        opts: ["Ich habe gegessen.", "Ich habe essen.", "Ich bin gegessen."],
        why: "<i>Essen</i> prende <b>haben</b> e il participio forte <b>gegessen</b> in fondo alla frase."
      },
      {
        q: "Completa: «Gestern habe ich einen Film ___.» (vedere)",
        hint: "participio II di sehen",
        why: "<i>Sehen</i> è un verbo forte: <b>gesehen</b>. La <i>h</i> non si pronuncia."
      },
      {
        q: "Completa: «Wir ___ am Samstag Pizza gegessen.»",
        hint: "ausiliare, prima persona plurale",
        why: "Con <i>essen</i> l'ausiliare è <b>haben</b>; con <i>wir</i> ha la stessa forma dell'infinito."
      },
      {
        q: "Completa: «Er hat ein Buch ___.» (comprare)",
        hint: "kaufen, participio II",
        why: "<i>Kaufen</i> è regolare: ge- + radice + -t, quindi <b>gekauft</b>."
      },
      {
        q: "Completa: «Hast du gestern Kaffee ___?» (bere)",
        hint: "trinken, participio II",
        why: "<i>Trinken</i> è forte: <b>getrunken</b>."
      },
      {
        q: "Abbina ogni participio al suo significato.",
        pairs: ["visto", "mangiato", "comprato", "bevuto"]
      },
      {
        q: "Traduci: «Ieri ho visto un film.»",
        why: "<i>Gestern habe ich einen Film gesehen</i>: dopo <i>gestern</i> il verbo coniugato resta in seconda posizione e il soggetto lo segue. Va bene anche <i>Ich habe gestern einen Film gesehen</i>."
      },
      {
        q: "Completa la frase.",
        tr: "Ieri ho mangiato la pizza e bevuto il vino.",
        why: "<i>Habe</i> sta in seconda posizione; i due participi, <i>gegessen</i> e <i>getrunken</i>, chiudono la frase. L'ausiliare non si ripete."
      },
      {
        tr: "Ieri ho visto un film e ho mangiato la pizza.",
        why: "In <i>gesehen</i> la <b>h</b> non si pronuncia e allunga la <b>e</b>; in <i>gegessen</i> la <b>ss</b> è una <b>s</b> sorda e <i>ge-</i> è atono."
      },
      {
        tr: "Sabato ho bevuto un caffè e ho letto un libro.",
        why: "In <i>Kaffee</i> l'accento cade sulla prima sillaba; in <i>Buch</i> la <b>ch</b> dopo <b>u</b> è [x], un suono raschiato in gola che l'italiano non ha."
      }
    ]
  },
  "lesson:a1-u10-l2": {
    theme: "Sein o haben",
    title: "Sono andato, mi sono alzato",
    objectives: [
      "scegliere sein o haben come ausiliare del Perfekt",
      "formare il participio dei verbi separabili",
      "raccontare un viaggio breve e la giornata"
    ],
    theory: [
      {
        h: "Il Perfekt con sein",
        p: "Con i verbi intransitivi di <strong>cambio di luogo o di stato</strong> l'ausiliare è <strong>sein</strong>: <em>fahren, gehen, kommen, fliegen, aufstehen</em>. Lo stesso vale per <em>sein, bleiben, werden, passieren</em>. <em>Ich bin nach Berlin gefahren. Wir sind früh aufgestanden. Sie ist zu Hause geblieben.</em> Con quasi tutti gli altri verbi si usa <em>haben</em>."
      },
      {
        p: "Nei verbi separabili il participio è una parola sola e <em>ge-</em> va <strong>in mezzo</strong>, fra il prefisso e il verbo: <em>aufstehen → aufgestanden, ankommen → angekommen, einkaufen → eingekauft, anrufen → angerufen</em>. Il prefisso non si stacca più: <em>Ich bin um sieben Uhr aufgestanden</em>, mentre al presente è <em>Ich stehe um sieben Uhr auf</em>."
      },
      {
        contrast: "Anche l'italiano usa essere con molti verbi di movimento: <em>sono andato, sono venuto, sono rimasto</em> corrispondono a <em>ich bin gegangen, ich bin gekommen, ich bin geblieben</em>. Ma l'accordo non è totale. <em>Ho viaggiato</em> e <em>ho camminato</em> vogliono avere in italiano, mentre in tedesco si dice <em>Ich bin gereist</em> e <em>Ich bin gewandert</em>, con sein. Il verbo si controlla caso per caso."
      },
      {
        trap: "Un verbo di movimento usato con un oggetto diretto all'accusativo prende di solito <strong>haben</strong>: <em>Ich habe das Auto gefahren</em> (ho guidato la macchina). Un complemento con preposizione, invece, non obbliga a haben: <em>Ich bin mit dem Bus gefahren</em>, <em>Ich bin nach Wien geflogen</em>. In italiano <em>mi sono alzato</em> è riflessivo e prende essere; in tedesco <em>aufstehen</em> non ha pronome: <em>Ich bin aufgestanden</em>."
      },
      {
        tip: "Se il verbo ha un prefisso separabile e un participio regolare, il <em>-t</em> finale resta: <em>aufräumen → aufgeräumt</em>, <em>einkaufen → eingekauft</em>. I verbi con prefisso inseparabile o in <em>-ieren</em> non prendono <em>ge-</em>: <em>besucht, studiert</em>."
      }
    ],
    grammar: {
      title: "Perfekt con sein e participio separabile",
      note: "<b>sein</b> con cambio di luogo o di stato; nei separabili ge- va fra il prefisso e il verbo: auf<b>ge</b>standen.",
      table: {
        head: ["verbo", "ausiliare", "participio II"],
        rows: [
          ["fahren, gehen, kommen", "sein", "gefahren, gegangen, gekommen"],
          ["fliegen, reisen, bleiben", "sein", "geflogen, gereist, geblieben"],
          ["aufstehen, ankommen", "sein", "aufgestanden, angekommen"],
          ["einkaufen, anrufen", "haben", "eingekauft, angerufen"],
          ["aufräumen, fernsehen", "haben", "aufgeräumt, ferngesehen"]
        ]
      },
      examples: [
        { tr: "Sono andato a Berlino in treno.", note: "cambio di luogo: sein" },
        { tr: "Ci siamo alzati presto.", note: "aufstehen: aufgestanden, senza pronome" },
        { tr: "Lei è rimasta a casa.", note: "bleiben: sein" },
        { tr: "Lui è arrivato alle otto.", note: "ankommen: angekommen" },
        { tr: "Ieri ho fatto la spesa.", note: "einkaufen: haben, non è un cambio di luogo" },
        { tr: "Avete telefonato a vostra madre?", note: "anrufen: angerufen con haben" }
      ]
    },
    vocab: [
      "andare con un mezzo, guidare",
      "andare (a piedi, in generale)",
      "venire",
      "volare, andare in aereo",
      "rimanere",
      "viaggiare",
      "alzarsi",
      "arrivare",
      "fare la spesa",
      "telefonare",
      "riordinare",
      "il viaggio"
    ],
    exercises: [
      {
        q: "Come dici «Sono andato a Berlino in treno»?",
        opts: [
          "Ich bin mit dem Zug nach Berlin gefahren.",
          "Ich habe mit dem Zug nach Berlin gefahren.",
          "Ich bin mit dem Zug nach Berlin fahren."
        ],
        why: "<i>Fahren</i> indica un cambio di luogo: ausiliare <b>sein</b> e participio <b>gefahren</b> in fondo alla frase."
      },
      {
        q: "Come dici «Sono rimasto a casa»?",
        opts: ["Ich habe zu Hause geblieben.", "Ich bin zu Hause geblieben.", "Ich bin zu Hause gebleibt."],
        why: "<i>Bleiben</i> prende <b>sein</b> e ha il participio forte <b>geblieben</b>."
      },
      {
        q: "Come dici «Ieri ho fatto la spesa»?",
        opts: ["Ich habe gestern eingekauft.", "Ich habe gestern geeinkauft.", "Ich bin gestern eingekauft."],
        why: "<i>Einkaufen</i> è separabile: <b>ein-ge-kauft</b>, con <i>haben</i>, perché fare la spesa non è un cambio di luogo."
      },
      {
        q: "Quali frasi sono corrette?",
        opts: [
          "Sie ist um sieben Uhr aufgestanden.",
          "Ich habe gestern meine Mutter angerufen.",
          "Wir haben nach Wien geflogen.",
          "Er ist zu Hause geblieben.",
          "Ich habe um sieben aufgestehen."
        ],
        why: "La frase 3 vuole <i>sein</i> (<i>Wir sind nach Wien geflogen</i>); la frase 5 ha un participio sbagliato: <i>aufgestanden</i>, non «aufgestehen»."
      },
      {
        q: "Completa: «Ich ___ gestern früh aufgestanden.»",
        hint: "ausiliare, prima persona singolare",
        why: "<i>Aufstehen</i> è un cambio di stato: ausiliare <b>sein</b>, quindi <i>ich bin</i>."
      },
      {
        q: "Completa: «Wir sind um acht Uhr ___.» (arrivare, ankommen)",
        hint: "ankommen: ge- va in mezzo",
        why: "<b>angekommen</b>: <i>an</i> + <i>ge</i> + <i>kommen</i>."
      },
      {
        tr: "Siamo andati a Berlino.",
        why: "<i>Wir sind nach Berlin gefahren</i>: <i>sein</i> in seconda posizione, participio in fondo. Va bene anche <i>Nach Berlin sind wir gefahren</i>."
      },
      {
        q: "Completa la frase.",
        tr: "Sabato siamo andati a Vienna in treno e domenica siamo rimasti a casa.",
        why: "Con <i>fahren</i> e <i>bleiben</i> l'ausiliare è <b>sein</b>; <i>gefahren</i> chiude la prima parte, <i>geblieben</i> la seconda."
      },
      {
        tr: "Mi sono alzato alle sette e ho bevuto un caffè.",
        why: "In <i>aufgestanden</i> l'accento cade su <b>auf</b>; in <i>Uhr</i> la <b>h</b> non si pronuncia e allunga la <b>u</b>."
      },
      {
        tr: "Siamo arrivati a Vienna la sera.",
        why: "In <i>Wien</i> la <b>W</b> si legge come la «v» italiana e la <b>ie</b> è una <b>i</b> lunga; <i>angekommen</i> ha l'accento su <b>an</b>."
      }
    ]
  },
  "lesson:a1-u10-l3": {
    theme: "Il fine settimana",
    title: "Il mio fine settimana",
    objectives: [
      "raccontare il fine settimana in ordine con zuerst, dann, danach, später",
      "tenere il verbo in seconda posizione dopo i connettori di tempo",
      "usare war e hatte solo come formule: Es war schön, Ich hatte Glück"
    ],
    theory: [
      {
        h: "Raccontare in ordine",
        p: "Per raccontare il fine settimana metti in fila le azioni con <strong>zuerst</strong> (prima), <strong>dann</strong> (poi), <strong>danach</strong> (dopo) e <strong>später</strong> (più tardi). Ogni azione è un Perfekt: <em>Zuerst habe ich lange geschlafen. Dann habe ich gekocht. Danach sind wir ins Kino gegangen.</em> Questi avverbi aprono la frase e occupano la prima posizione."
      },
      {
        contrast: "In italiano «poi» non cambia l'ordine: <em>poi ho cucinato</em>, e il soggetto può sparire. In tedesco il verbo coniugato resta in <strong>seconda posizione</strong> e il soggetto passa dopo di lui: <em>Dann habe ich gekocht</em>, mai «Dann ich habe gekocht». Il soggetto, inoltre, non si omette: <em>habe gekocht</em> da solo non è una frase."
      },
      {
        trap: "Per sein e haben nel parlato si usano <strong>war</strong> e <strong>hatte</strong>, che per ora impari come formule fisse: <em>Es war schön. Wie war dein Wochenende? Ich hatte Glück.</em> Non serve coniugare altri verbi in questo modo: per tutti gli altri verbi resta il Perfekt. Attenzione a <em>Wie war dein Wochenende?</em>: l'italiano dice «com'è stato», con il passato prossimo, il tedesco usa <em>war</em>."
      },
      {
        tip: "Puoi unire due azioni con <em>und</em> o <em>aber</em> senza cambiare la struttura: <em>Ich habe gekocht, und wir haben gegessen.</em> Per dire quando, premetti <em>am Samstag</em> o <em>am Sonntag</em>: il verbo resta secondo."
      }
    ],
    grammar: {
      title: "Il racconto: connettori e verbo in seconda posizione",
      note: "Dopo <b>zuerst, dann, danach, später</b> il verbo coniugato resta in seconda posizione e il soggetto lo segue; il participio chiude la frase.",
      table: {
        head: ["italiano", "tedesco", "esempio"],
        rows: [
          ["prima, per prima cosa", "zuerst", "Zuerst habe ich geschlafen."],
          ["poi", "dann", "Dann habe ich gekocht."],
          ["dopo, in seguito", "danach", "Danach sind wir ins Kino gegangen."],
          ["più tardi", "später", "Später habe ich gelesen."],
          ["com'è stato?", "Wie war ...?", "Wie war dein Wochenende?"]
        ]
      },
      examples: [
        { tr: "Com'è stato il tuo fine settimana?", note: "war: formula fissa" },
        { tr: "Per prima cosa ho dormito a lungo.", note: "zuerst in prima posizione, poi habe e ich" },
        { tr: "Poi ho cucinato per i miei amici.", note: "dann + verbo + soggetto" },
        { tr: "Dopo siamo andati al cinema.", note: "gehen: sein" },
        { tr: "Più tardi ho fatto una passeggiata.", note: "einen Spaziergang machen" },
        { tr: "È stato bellissimo e ho avuto fortuna.", note: "war e hatte come formule" }
      ]
    },
    vocab: [
      "prima, per prima cosa",
      "poi",
      "dopo, in seguito",
      "più tardi",
      "la festa (la party)",
      "la passeggiata",
      "il museo",
      "il regalo",
      "fantastico, bellissimo",
      "Era bello. / È stato bello.",
      "Com'è stato il tuo fine settimana?",
      "Ho avuto fortuna."
    ],
    exercises: [
      {
        q: "Come chiedi a un amico com'è stato il fine settimana?",
        opts: ["Wie war dein Wochenende?", "Wie hat dein Wochenende?", "Wie bist dein Wochenende?"],
        why: "Per «è stato» si usa <b>war</b>: <i>Wie war dein Wochenende?</i> È una formula da imparare così."
      },
      {
        q: "Quale frase è corretta?",
        opts: ["Dann ich habe einen Film gesehen.", "Dann habe ich einen Film gesehen.", "Dann habe einen Film gesehen ich."],
        why: "Dopo <i>dann</i> il verbo coniugato resta in seconda posizione e il soggetto lo segue: <i>Dann habe ich ...</i>; il participio chiude la frase."
      },
      {
        q: "Completa: «Zuerst habe ich geschlafen, ___ habe ich gekocht.» (poi, usa dann)",
        hint: "usa dann",
        why: "<b>Dann</b> apre la seconda frase: verbo e soggetto si scambiano di posto, <i>habe ich</i>."
      },
      {
        q: "Completa: «Wie ___ dein Wochenende?»",
        hint: "è stato: la forma fissa",
        why: "<b>war</b> è la formula per «è stato»: <i>Wie war dein Wochenende?</i>"
      },
      {
        tr: "Dopo ho letto un libro.",
        why: "<i>Danach habe ich ein Buch gelesen</i>: dopo <i>danach</i> verbo e soggetto si scambiano. Va bene anche <i>Ich habe danach ein Buch gelesen</i>."
      },
      {
        q: "Traduci: «Poi ho cucinato per i miei amici.» (usa dann)",
        why: "<i>Dann habe ich für meine Freunde gekocht</i>: <i>für</i> vuole l'accusativo. Va bene anche <i>Ich habe dann für meine Freunde gekocht</i>."
      },
      {
        q: "Completa la frase.",
        tr: "Sabato ho dormito a lungo. Poi ho fatto una passeggiata.",
        why: "Perfekt con <b>haben</b>: <i>habe geschlafen</i>, <i>habe ... gemacht</i>. Dopo <i>danach</i> il soggetto segue il verbo: <i>habe ich</i>."
      },
      {
        q: "Completa il dialogo.",
        setting: "Parli con un amico del fine settimana.",
        lines: [
          { tr: "Ciao! Com'è stato il tuo fine settimana?" },
          { tr: "Rispondi che è stato bello e che hai incontrato amici.", answerTr: "È stato bello! Ho incontrato amici." },
          { tr: "E domenica, cosa hai fatto?" },
          { tr: "Rispondi che sei rimasto a casa.", answerTr: "Sono rimasto a casa." }
        ]
      },
      {
        tr: "Sabato ho incontrato amici, poi siamo andati al cinema.",
        why: "In <i>getroffen</i> la doppia <b>ff</b> segnala di solito una vocale breve; in <i>Kino</i> la prima <b>i</b> è lunga."
      },
      {
        tr: "Era bello! Ho ballato e ho incontrato amici.",
        why: "In <i>getanzt</i> la <b>z</b> si legge [ts], come in «pizza»; in <i>Freunde</i> la <b>eu</b> si legge «oi»."
      }
    ]
  },
  "lesson:a1-u10-l4": {
    theme: "Ripasso",
    title: "Ripasso A1",
    objectives: [
      "ripassare il presente, l'accusativo e le preposizioni con il dativo",
      "usare insieme presente e Perfekt in poche frasi",
      "parlare di un viaggio breve in albergo"
    ],
    theory: [
      {
        h: "Ripasso: tre cose da non sbagliare",
        p: "<strong>1.</strong> Il verbo coniugato sta in seconda posizione e nei verbi forti cambia la vocale con <em>du</em> ed <em>er</em>: <em>ich esse, du isst, er isst</em>. <strong>2.</strong> All'accusativo cambia solo il maschile: <em>der Koffer → den Koffer</em>, <em>ein Koffer → einen Koffer</em>. <strong>3.</strong> Dopo <em>mit, zu, bei, aus, von</em> si usa il dativo: <em>mit dem Zug, zum Strand</em> (zu dem), <em>aus Italien</em>."
      },
      {
        contrast: "In italiano «in treno» e «in autobus» usano <em>in</em>; in tedesco il mezzo di trasporto vuole <strong>mit</strong> e il dativo: <em>mit dem Zug, mit dem Bus</em>. E «da» si traduce in modi diversi: <em>aus</em> per la provenienza (<em>Ich komme aus Italien</em>), <em>von</em> per il punto di partenza, <em>bei</em> per «da una persona»."
      },
      {
        trap: "Al femminile e al neutro l'accusativo è identico al nominativo: <em>die Fahrkarte</em>, <em>das Zimmer</em>. Quindi <em>Ich nehme den Koffer</em> ma <em>Ich nehme die Fahrkarte</em>. Se sbagli il genere del nome, sbagli anche l'articolo: ripassa sempre il nome con il suo articolo."
      },
      {
        tip: "Per ricordare le preposizioni: <em>mit, zu, bei, aus, von</em> vogliono sempre il dativo; <em>für, ohne, durch, um, gegen</em> vogliono sempre l'accusativo."
      }
    ],
    grammar: {
      title: "Ripasso: presente, accusativo, dativo",
      note: "Verbo in seconda posizione; accusativo: solo il maschile cambia (<b>den</b>); dopo <b>mit, zu, bei, aus, von</b> il dativo.",
      table: {
        head: ["cosa", "regola", "esempio"],
        rows: [
          ["presente", "verbo in seconda posizione", "Ich fahre mit dem Zug."],
          ["verbi forti", "vocale che cambia con du ed er", "Du isst, er sieht."],
          ["accusativo", "der → den, ein → einen", "Wir nehmen den Koffer."],
          ["dativo con mit, zu, bei, aus, von", "dem, der, dem; zum, zur", "Wir gehen zum Hotel."],
          ["Perfekt", "haben o sein + participio in fondo", "Gestern bin ich früh aufgestanden."]
        ]
      },
      examples: [
        { tr: "Vado in treno alla spiaggia.", note: "mit dem Zug, zum Strand" },
        { tr: "Prendiamo la valigia e il biglietto.", note: "accusativo: den Koffer, die Fahrkarte" },
        { tr: "Vengo dall'Italia e abito da mia zia.", note: "aus, bei + dativo" },
        { tr: "Lui vede un film e mangia una pizza.", note: "sehen e essen cambiano la vocale" },
        { tr: "La sera andiamo all'albergo.", note: "zum = zu dem" },
        { tr: "Ieri mi sono alzato presto.", note: "Perfekt con sein" }
      ]
    },
    vocab: [
      "il viaggio",
      "la valigia",
      "il biglietto (di viaggio)",
      "l'albergo",
      "la camera",
      "la vacanza",
      "il mare",
      "la spiaggia"
    ],
    exercises: [
      {
        tr: "Il presente di sein, tutte le persone.",
        why: "<i>Bin, bist, ist, sind, seid, sind</i>: forme irregolari da sapere a memoria. <i>Wir</i> e <i>sie/Sie</i> hanno la stessa forma."
      },
      {
        tr: "Il presente di essen, tutte le persone.",
        why: "<i>Essen</i> cambia vocale con <i>du</i> ed <i>er</i>: <b>isst</b> per entrambi. <i>Ich esse, wir essen, ihr esst, sie essen</i>."
      },
      {
        tr: "Il presente di fahren, tutte le persone.",
        why: "<i>Fahren</i> prende l'umlaut con <i>du</i> ed <i>er</i>: <b>fährst</b>, <b>fährt</b>."
      },
      {
        q: "Completa: «Wir fahren ___ dem Zug nach Wien.» (con)",
        hint: "mezzo di trasporto",
        why: "<b>Mit</b> + dativo: <i>mit dem Zug</i>."
      },
      {
        q: "Completa: «Ich nehme ___ Koffer.» (articolo determinativo, accusativo)",
        hint: "Koffer è maschile",
        why: "All'accusativo il maschile cambia: <b>den</b> Koffer."
      },
      {
        q: "Completa: «Ich gehe ___ Bahnhof.» (verso, con l'articolo fuso)",
        hint: "zu + dem",
        why: "<b>Zum</b> = <i>zu dem</i>."
      },
      {
        q: "Completa: «Er kommt ___ Italien.» (da)",
        hint: "provenienza",
        why: "Per la provenienza si usa <b>aus</b> + dativo."
      },
      {
        q: "Completa la frase.",
        tr: "Ieri mi sono alzato presto e ho bevuto un caffè.",
        why: "<i>Aufstehen</i> prende <b>sein</b> (<i>ich bin aufgestanden</i>); <i>trinken</i> prende <b>haben</b> (<i>ich habe getrunken</i>)."
      },
      {
        q: "Scegli l'articolo determinativo giusto per ogni nome.",
        items: ["valigia", "viaggio", "albergo", "camera", "spiaggia", "biglietto"]
      },
      {
        tr: "Andiamo in treno alla spiaggia.",
        why: "<i>Wir fahren mit dem Zug zum Strand</i>: <i>mit</i> + dativo, <i>zu dem</i> si fonde in <i>zum</i>. Le altre posizioni del complemento sono possibili, perché il verbo resta secondo."
      },
      {
        tr: "Vado in treno alla spiaggia e prendo la mia valigia.",
        why: "In <i>Strand</i> la <b>st</b> iniziale si legge [ʃt], come la «sc» di «scena» seguita da una t; in <i>Koffer</i> la doppia <b>ff</b> segnala di solito una vocale breve."
      },
      {
        tr: "Abbiamo una camera in albergo e domani andiamo al mare.",
        why: "In <i>Zimmer</i> la <b>Z</b> si legge [ts]; in <i>Meer</i> la <b>ee</b> è una <b>e</b> lunga."
      }
    ]
  },
  "lesson:a1-u10-test": {
    theme: "Verifica",
    title: "Esame finale A1",
    objectives: ["verificare presente, Perfekt con haben e con sein, accusativo, dativo e genere dei nomi"],
    theory: [
      {
        p: "Dodici domande su tutto l'A1. Si supera con il 70%. Non riguardare le lezioni mentre rispondi: se non ricordi qualcosa, è meglio tornare a ripassare."
      }
    ],
    exercises: [
      {
        q: "Completa: «Ich ___ gestern Fußball gespielt.»",
        hint: "ausiliare, prima persona singolare",
        why: "<i>Spielen</i> prende <b>haben</b>: <i>ich habe gespielt</i>."
      },
      {
        q: "Completa: «Am Samstag ___ wir nach Wien gefahren.»",
        hint: "ausiliare, prima persona plurale",
        why: "<i>Fahren</i> con una destinazione indica un cambio di luogo: <b>sind</b>."
      },
      {
        q: "Completa: «Wir haben einen Film ___.» (vedere)",
        hint: "participio II di sehen",
        why: "<i>Sehen</i> è forte: <b>gesehen</b>."
      },
      {
        q: "Completa: «Ich nehme ___ Kaffee.» (articolo determinativo, accusativo)",
        hint: "Kaffee è maschile",
        why: "All'accusativo il maschile cambia: <b>den</b> Kaffee."
      },
      {
        q: "Completa: «Ich fahre ___ dem Bus.» (con)",
        hint: "mezzo di trasporto",
        why: "<b>Mit</b> + dativo."
      },
      {
        q: "Completa: «Sie ist früh ___.» (alzarsi, aufstehen)",
        hint: "ge- va in mezzo",
        why: "<b>aufgestanden</b>: <i>auf</i> + <i>ge</i> + <i>standen</i>, con <i>sein</i>."
      },
      {
        q: "Quale frase è corretta?",
        opts: ["Ich habe nach Berlin gefahren.", "Ich bin nach Berlin gefahren.", "Ich bin nach Berlin gefahrt."],
        why: "<i>Fahren</i> con una destinazione prende <b>sein</b> e ha il participio forte <i>gefahren</i>."
      },
      {
        q: "Qual è il participio II di «besuchen»?",
        opts: ["gebesucht", "besucht", "besuchen"],
        why: "<i>Be-</i> è un prefisso inseparabile: niente <i>ge-</i>. Il participio è <b>besucht</b>."
      },
      {
        q: "Scegli l'articolo determinativo giusto per ogni nome.",
        items: ["film", "fine settimana", "festa", "passeggiata", "museo", "biglietto"]
      },
      {
        tr: "Il Perfekt di gehen: ausiliare e participio.",
        why: "<i>Ich bin gegangen, du bist gegangen, er ist gegangen, wir sind gegangen</i>: <i>gehen</i> prende <b>sein</b>."
      },
      {
        q: "Completa la frase.",
        tr: "Prima ho incontrato amici. Poi siamo andati al cinema.",
        why: "<i>Zuerst</i> apre la frase; <i>habe ich ... getroffen</i> con haben; <i>sind wir ... gegangen</i> con sein."
      },
      {
        tr: "Nel fine settimana sono andato a Vienna e ho visitato un museo.",
        why: "In <i>Museum</i> l'accento cade su <b>se</b> e la <b>s</b> è sonora; in <i>besucht</i> la <b>ch</b> dopo <b>u</b> è [x]."
      }
    ]
  }
});
