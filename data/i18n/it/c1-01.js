/* ============================================================
   Learner-language text (it) for data/core/c1-01.js, unit c1-u01.
   Keys point at ids in the neutral layer; arrays merge by index,
   so their length has to match core.
   Checked by scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("it", {
  "unit:c1-u01": {
    title: "I volti di werden",
    grammarNote: "Le cinque funzioni di werden (diventare, futuro, supposizione, passivo, würde) · geworden e worden · aggettivi e participi sostantivati (der Bekannte, ein Bekannter) · etwas Neues, alles Gute · höchst, äußerst, überaus e il superlativo con am"
  },
  "lesson:c1-u01-l1": {
    theme: "Cambiamenti e previsioni",
    title: "Una parola, cinque funzioni",
    objectives: [
      "riconoscere le cinque funzioni di werden in un testo",
      "fare supposizioni sul passato con il Futur II",
      "distinguere geworden da worden al Perfekt",
      "non scambiare un passivo presente per un futuro"
    ],
    theory: [
      {
        h: "Che cosa accompagna werden",
        p: "Per capire che cosa fa <strong>werden</strong> in una frase, guarda che cosa lo accompagna. Con un nome o un aggettivo è un verbo pieno, «diventare»: <em>Sie wird Ärztin. Es wird dunkel.</em> Con un infinito forma il <strong>futuro</strong> (<em>Wir werden Sie informieren</em>) o, spesso con <em>wohl</em>, una <strong>supposizione</strong> (<em>Er wird wohl im Büro sein</em>). Con un participio II forma il <strong>passivo</strong>: <em>Der Antrag wird bearbeitet.</em> La forma <strong>würde</strong> + infinito è il Konjunktiv II: <em>Ich würde das nicht tun.</em> Per una supposizione sul passato si usa il <strong>Futur II</strong>, <em>werden</em> + participio II + <em>haben</em> o <em>sein</em>: <em>Er wird den Termin wohl vergessen haben. Sie wird schon losgefahren sein.</em>"
      },
      {
        h: "geworden o worden",
        p: "Al Perfekt il verbo pieno usa <strong>geworden</strong>: <em>Sie ist Ärztin geworden. Es ist dunkel geworden.</em> Il passivo usa <strong>worden</strong>, senza <em>ge-</em>: <em>Das Haus ist 1950 gebaut worden.</em> Tutti e due vogliono <em>sein</em> come ausiliare."
      },
      {
        contrast: "L'italiano usa forme diverse per queste funzioni: <em>diventare</em>, il futuro (<em>vi informeremo</em>), il futuro di supposizione (<em>sarà in ufficio</em>), <em>venire</em> o <em>essere</em> nel passivo, il condizionale (<em>non lo farei</em>). In tedesco c'è sempre <em>werden</em>, e la funzione si capisce solo dal resto della frase."
      },
      {
        trap: "<em>Der Antrag wird bearbeitet</em> non è un futuro: è un passivo presente, «la domanda viene elaborata». E la supposizione sul passato non si fa con il futuro semplice: <em>sarà stato stanco</em> è <em>Er wird müde gewesen sein</em> (Futur II), non <em>Er wird müde sein</em>, che riguarda il presente."
      },
      {
        tip: "Davanti a un <em>werden</em> difficile, cerca la fine della frase: un participio II (<em>bearbeitet</em>) segnala il passivo, un infinito (<em>informieren, sein</em>) il futuro o la supposizione."
      }
    ],
    grammar: {
      title: "Le funzioni di werden",
      note: "<b>Nome o aggettivo</b>: diventare. <b>Infinito</b>: futuro o, spesso con <i>wohl</i>, supposizione. <b>Participio II</b>: passivo. <b>würde + infinito</b>: Konjunktiv II. Perfekt: <i>geworden</i> (diventare), <i>worden</i> (passivo).",
      table: {
        head: ["funzione", "che cosa lo accompagna", "esempio"],
        rows: [
          ["diventare", "un nome o un aggettivo", "Sie wird Ärztin."],
          ["futuro", "un infinito", "Wir werden Sie informieren."],
          ["supposizione", "un infinito, spesso con wohl", "Er wird wohl im Büro sein."],
          ["passivo", "un participio II", "Der Antrag wird bearbeitet."],
          ["Konjunktiv II", "würde + infinito", "Ich würde das nicht tun."]
        ]
      },
      examples: [
        { tr: "Diventa medico.", note: "verbo pieno, con un nome" },
        { tr: "Si sta facendo buio.", note: "verbo pieno, con un aggettivo" },
        { tr: "La informeremo in tempo.", note: "futuro: werden + infinito" },
        { tr: "La domanda viene elaborata proprio adesso.", note: "passivo presente, non futuro" },
        { tr: "Al tuo posto non lo farei.", note: "Konjunktiv II con würde" },
        { tr: "Sarà ancora in ufficio.", note: "supposizione: werden + wohl + infinito" }
      ]
    },
    vocab: [
      "il cambiamento",
      "lo sviluppo, l'andamento",
      "lo stato, le condizioni",
      "la supposizione, l'ipotesi",
      "la previsione",
      "la domanda (ufficiale), l'istanza",
      "cambiare, trasformarsi",
      "nascere, avere origine",
      "supporre",
      "elaborare, trattare (una pratica)",
      "a poco a poco, gradualmente",
      "probabilmente, presumibilmente"
    ],
    exercises: [
      {
        q: "In un messaggio dell'ospedale: «Ihr Vater wird morgen früh operiert.» Che cosa fa werden qui?",
        opts: [
          "forma un passivo presente, con valore di futuro per via di morgen",
          "forma un futuro attivo: il padre opererà",
          "esprime una supposizione: forse verrà operato"
        ],
        why: "Con il participio II <i>operiert</i> è un <b>passivo</b>; il presente ha valore di futuro grazie a <i>morgen früh</i>, come spesso in tedesco. Non c'è <i>wohl</i> né infinito: non è una supposizione."
      },
      {
        q: "Un collega è preoccupato per una cifra in un rapporto. Rispondi: «Das wird schon stimmen.» Che cosa comunichi?",
        opts: [
          "una supposizione rassicurante: «sarà sicuramente giusto»",
          "una previsione: «diventerà giusto»",
          "un passivo: «viene corretto»"
        ],
        why: "<i>werden</i> + infinito con <i>schon</i> esprime una <b>supposizione</b> che rassicura; <i>stimmen</i> è un infinito, non un participio, quindi non è un passivo."
      },
      {
        q: "Completa: «Er ist Arzt ___.»",
        opts: [
          "geworden",
          "worden",
          "werden"
        ],
        why: "<i>werden</i> come verbo pieno («diventare») ha il participio <b>geworden</b>. <i>worden</i> è solo del passivo."
      },
      {
        q: "Completa al passivo: «Das Haus ist 1950 gebaut ___.»",
        hint: "participio di werden nel passivo",
        why: "<b>worden</b>: nel Perfekt passivo il participio di <i>werden</i> perde <i>ge-</i>."
      },
      {
        q: "Il tuo amico non è venuto all'appuntamento. Supponi: «Er wird den Termin wohl vergessen ___.»",
        hint: "Futur II: werden + participio + ausiliare",
        why: "<b>haben</b>: supposizione sul passato con il Futur II, <i>wird ... vergessen haben</i>, «avrà dimenticato l'appuntamento»."
      },
      {
        q: "Completa la frase.",
        tr: "Al tuo posto non lo farei.",
        why: "<i>An deiner Stelle würde ich das nicht tun</i> (o <i>machen</i>): Konjunktiv II con <i>würde</i> e l'infinito in fondo."
      },
      {
        q: "In quali frasi werden forma il passivo?",
        opts: [
          "Der Brief wird morgen geschickt.",
          "Die Tür wurde geöffnet.",
          "Er wird morgen kommen.",
          "Sie wird Lehrerin."
        ],
        why: "Le prime due hanno un participio II (<i>geschickt, geöffnet</i>): passivo. Nella terza <i>werden</i> + infinito è un futuro, nella quarta con un nome è «diventare»."
      },
      {
        q: "Riformula con il Futur II di supposizione: «Probabilmente (lui) ha dimenticato l'appuntamento.» (der Termin)",
        why: "<i>Er wird den Termin wohl vergessen haben</i>: <i>werden</i> + participio + <i>haben</i>, con <i>wohl</i> o <i>vermutlich</i> al posto di «probabilmente» (<i>sicher</i> direbbe una certezza maggiore)."
      },
      {
        tr: "La città diventa sempre più grande. Fra dieci anni avrà probabilmente il doppio degli abitanti, e molte case vecchie verranno demolite.",
        why: "In <i>Einwohner</i> l'accento cade su <b>Ein</b>; in <i>doppelt</i> la <b>o</b> è breve; in <i>abgerissen</i> la <b>b</b> davanti a <i>g</i> si pronuncia [p]."
      },
      {
        tr: "Se avessi più tempo, diventerei medico.",
        why: "In <i>hätte</i> la <b>ä</b> è breve; in <i>Ärztin</i> la <b>ä</b> è lunga e <b>z</b> si pronuncia [ts]; in <i>werden</i> la <b>e</b> è lunga."
      }
    ]
  },
  "lesson:c1-u01-l2": {
    theme: "Persone e giudizi",
    title: "der Bekannte, etwas Neues",
    objectives: [
      "declinare aggettivi e participi usati come nomi",
      "scegliere la desinenza secondo l'articolo (der Bekannte, ein Bekannter)",
      "usare etwas, nichts e alles con un aggettivo sostantivato",
      "esprimere un giudizio su un risultato"
    ],
    theory: [
      {
        h: "L'aggettivo che diventa nome",
        p: "Molte persone si indicano con un aggettivo o un participio usato come nome: <em>der Bekannte</em> (il conoscente), <em>der Angestellte</em> (l'impiegato), <em>der Erwachsene</em>, <em>der Verletzte</em>. Si scrivono con la maiuscola ma si declinano come aggettivi: la desinenza dipende dall'articolo. <em>der Bekannte, die Bekannten</em>, ma <em>ein Bekannter, Bekannte</em> (plurale senza articolo). Con <em>kein</em>, il singolare segue <em>ein</em> (<em>kein Bekannter</em>) e il plurale i possessivi (<em>keine Bekannten</em>)."
      },
      {
        h: "etwas Neues, nichts Besseres, alles Gute",
        p: "Dopo <strong>etwas, nichts, viel, wenig</strong> l'aggettivo sostantivato è neutro, con la maiuscola e la desinenza <em>-es</em> al nominativo e all'accusativo: <em>etwas Neues, nichts Besseres, viel Interessantes</em>. Dopo <strong>alles</strong> prende <em>-e</em>: <em>alles Gute, alles Wichtige</em>."
      },
      {
        contrast: "In italiano <em>il conoscente</em> e <em>un conoscente</em> hanno la stessa forma, e <em>qualcosa di nuovo</em> si costruisce con <em>di</em>. In tedesco la desinenza cambia con l'articolo (<em>der Bekannte</em>, <em>ein Bekannter</em>) e <em>etwas Neues</em> non ha preposizione: l'aggettivo segue direttamente <em>etwas</em>, con la maiuscola."
      },
      {
        trap: "Non mettere la desinenza del nome maschile debole: <em>der Bekannte</em> si comporta come un aggettivo, quindi <em>mit einem Bekannten</em>, ma <em>ein Bekannter</em> al nominativo, non <em>ein Bekannte</em>. E al plurale senza articolo: <em>Wir haben Verwandte in Wien</em>, non <em>Verwandten</em>."
      },
      {
        tip: "Se non sai che desinenza usare, immagina un nome dopo l'aggettivo: <em>ein bekannter (Mann)</em> → <em>ein Bekannter</em>; <em>dem bekannten (Mann)</em> → <em>dem Bekannten</em>."
      }
    ],
    grammar: {
      title: "Aggettivi e participi sostantivati",
      note: "Si declinano come aggettivi: <b>der Bekannte</b>, <b>ein Bekannter</b>, <b>die Bekannten</b>, <b>Bekannte</b>. Dopo <i>etwas, nichts, viel, wenig</i>: <b>-es</b> (etwas Neues). Dopo <i>alles</i>: <b>-e</b> (alles Gute).",
      table: {
        head: ["", "con der, die, das", "con ein o senza articolo"],
        rows: [
          ["maschile", "der Bekannte", "ein Bekannter"],
          ["femminile", "die Bekannte", "eine Bekannte"],
          ["plurale", "die Bekannten", "Bekannte"],
          ["dativo maschile", "dem Bekannten", "einem Bekannten"]
        ]
      },
      examples: [
        { tr: "Un conoscente mi ha consigliato l'appartamento.", note: "ein Bekannter: desinenza -er dopo ein" },
        { tr: "Gli impiegati oggi lavorano più a lungo.", note: "die Angestellten: -en dopo die" },
        { tr: "Il ferito è stato portato in ospedale.", note: "der Verletzte: participio sostantivato" },
        { tr: "Ho imparato qualcosa di nuovo.", note: "etwas Neues: maiuscola e -es" },
        { tr: "Non c'è niente di meglio del pane fresco.", note: "nichts Besseres: comparativo sostantivato" },
        { tr: "Tanti auguri di buon compleanno!", note: "alles Gute: -e dopo alles" }
      ]
    },
    vocab: [
      "il conoscente",
      "l'impiegato, il dipendente",
      "l'adulto",
      "il parente",
      "il ragazzo, il giovane",
      "il deputato",
      "eccellente, ottimo",
      "mediocre",
      "riuscito, ben fatto",
      "fallito, non riuscito",
      "convincente",
      "unico, senza pari"
    ],
    exercises: [
      {
        q: "In una notizia economica: «Die Zahl der ___ ist im Herbst gestiegen.»",
        opts: [
          "Arbeitslosen",
          "Arbeitslose",
          "Arbeitsloser"
        ],
        why: "Genitivo plurale dopo <i>der</i>: l'aggettivo sostantivato prende <b>-en</b>, <i>die Zahl der Arbeitslosen</i>. <i>Arbeitslose</i> è il plurale nominativo o accusativo senza articolo; <i>Arbeitsloser</i> è il singolare dopo <i>ein</i> oppure il genitivo plurale senza articolo (<i>die Zahl Arbeitsloser</i>). Dopo <i>der</i> al genitivo plurale serve <i>Arbeitslosen</i>."
      },
      {
        q: "Completa: «Ich habe mit dem ___ gesprochen.»",
        opts: [
          "Angestellten",
          "Angestellter",
          "Angestellte"
        ],
        why: "Dopo <i>dem</i> (dativo) l'aggettivo sostantivato prende <b>-en</b>: <i>dem Angestellten</i>."
      },
      {
        q: "Completa: «Ich wünsche dir alles ___!»",
        opts: [
          "Gute",
          "Gutes",
          "Guten"
        ],
        why: "Dopo <i>alles</i> l'aggettivo sostantivato prende <b>-e</b>: <i>alles Gute</i>."
      },
      {
        q: "Completa: «Es gibt nichts ___ als frisches Brot.»",
        opts: [
          "Besseres",
          "Bessere",
          "Besser"
        ],
        why: "Dopo <i>nichts</i> l'aggettivo sostantivato è neutro con <b>-es</b>: <i>nichts Besseres</i>, anche al comparativo."
      },
      {
        q: "Completa la frase: nella prima lacuna «ragazzi», nella seconda «adulti».",
        tr: "L'ingresso è gratuito per i ragazzi, gli adulti pagano dieci euro.",
        why: "<i>Jugendliche</i> ed <i>Erwachsene</i>: plurale senza articolo, quindi <i>-e</i> e non <i>-en</i>."
      },
      {
        q: "Abbina ogni parola al suo significato.",
        pairs: [
          "il conoscente",
          "l'impiegato",
          "il parente",
          "il deputato"
        ]
      },
      {
        q: "Metti in ordine le parole.",
        tr: "Il ferito è stato portato in ospedale.",
        why: "<i>Der Verletzte wurde ins Krankenhaus gebracht.</i> <i>der Verletzte</i> è un participio sostantivato; <i>wurde ... gebracht</i> è un passivo al Präteritum."
      },
      {
        q: "Traduci: «Ho parlato con un conoscente del ferito.»",
        why: "<i>Ich habe mit einem Bekannten des Verletzten gesprochen</i>: due sostantivati, al dativo dopo <i>mit einem</i> (<i>Bekannten</i>) e al genitivo dopo <i>des</i> (<i>Verletzten</i>), tutti e due in <i>-en</i>."
      },
      {
        tr: "Ieri ho incontrato un vecchio conoscente. Mi ha raccontato una cosa interessante: la sua ditta cerca nuovi impiegati.",
        why: "In <i>Bekannten</i> l'accento cade su <b>kann</b>; in <i>Interessantes</i> l'accento cade su <b>sant</b>; in <i>Angestellte</i> l'accento cade su <b>An</b>."
      },
      {
        tr: "Per gli adulti l'ingresso costa dodici euro.",
        why: "In <i>Erwachsene</i> l'accento cade su <b>wach</b> e <b>chs</b> si pronuncia [ks]; in <i>Eintritt</i> l'accento cade su <b>Ein</b>; in <i>zwölf</i> la <b>ö</b> è breve."
      }
    ]
  },
  "lesson:c1-u01-l3": {
    theme: "Giudicare la qualità",
    title: "höchst, äußerst, am besten",
    objectives: [
      "esprimere un grado molto alto senza confronto",
      "distinguere äußerst schwierig da am schwierigsten",
      "usare höchst, äußerst, überaus, ziemlich",
      "formulare un giudizio su un risultato o un'opera"
    ],
    theory: [
      {
        h: "Un grado molto alto senza confronto",
        p: "Per dire che qualcosa ha una qualità in grado molto alto, senza paragonarlo ad altro, il tedesco mette un avverbio davanti all'aggettivo: <em>sehr</em> e, nello scritto, <strong>höchst</strong>, <strong>äußerst</strong>, <strong>überaus</strong>, <strong>besonders</strong>. <em>Das ist ein höchst interessanter Vorschlag. Die Lage ist äußerst schwierig.</em> Per attenuare: <strong>ziemlich</strong> (piuttosto), <em>relativ</em>, <em>einigermaßen</em>."
      },
      {
        h: "Il superlativo resta un confronto",
        p: "Di norma <em>am</em> + superlativo (<em>am kürzesten, am besten</em>) confronta una cosa con altre; ci sono anche usi senza un confronto reale, come <em>Das weißt du am besten selbst</em>. Il valore ordinario, quello di questa lezione, è il confronto: <em>Von den drei Wegen ist dieser am kürzesten.</em> Nello scritto formale esiste anche <em>aufs</em> + superlativo, con la maiuscola o la minuscola, con valore di grado molto alto: <em>Sie hat uns aufs Herzlichste begrüßt.</em>"
      },
      {
        contrast: "L'italiano forma il superlativo assoluto con <em>-issimo</em> (<em>difficilissimo, interessantissimo</em>). Il tedesco non ha un suffisso così: <em>difficilissimo</em> è <em>äußerst schwierig</em> o <em>sehr schwierig</em>. E <em>am schwierigsten</em> non è «difficilissimo», ma «il più difficile» in un confronto."
      },
      {
        trap: "<em>höchst</em> davanti a un aggettivo è un avverbio e non cambia: <em>ein höchst interessanter Vorschlag</em>, non <em>ein höchster interessanter Vorschlag</em>. La desinenza va solo sull'aggettivo che segue."
      },
      {
        tip: "Nel parlato si sentono anche <em>total, echt, super</em> (<em>echt gut, total spannend</em>); in una lettera formale o in una relazione restano <em>äußerst, höchst, überaus</em>."
      }
    ],
    grammar: {
      title: "Grado molto alto e superlativo",
      note: "<b>höchst, äußerst, überaus, besonders</b> + aggettivo: grado molto alto, senza confronto. <b>am</b> + superlativo: confronto. <b>aufs</b> + superlativo: grado molto alto, scritto formale.",
      table: {
        head: ["forma", "valore", "esempio"],
        rows: [
          ["sehr, äußerst, höchst + aggettivo", "grado molto alto", "Die Lage ist äußerst schwierig."],
          ["ziemlich + aggettivo", "grado medio-alto", "Der Film war ziemlich langweilig."],
          ["am + superlativo", "confronto", "Dieser Weg ist am kürzesten."],
          ["aufs + superlativo", "grado molto alto, formale", "Sie hat uns aufs Herzlichste begrüßt."]
        ]
      },
      examples: [
        { tr: "È una proposta estremamente interessante.", note: "höchst: avverbio, non si declina" },
        { tr: "La situazione è difficilissima.", note: "äußerst al posto di -issimo" },
        { tr: "Il progetto ha avuto un successo straordinario.", note: "überaus: scritto formale" },
        { tr: "Questo percorso è il più breve.", note: "am kürzesten: confronto" },
        { tr: "Ci ha salutati nel modo più cordiale.", note: "aufs Herzlichste: formale" },
        { tr: "Il film era piuttosto noioso.", note: "ziemlich: attenua" }
      ]
    },
    vocab: [
      "la qualità",
      "l'impressione",
      "la valutazione, la recensione",
      "il giudizio",
      "il criterio, il metro di misura",
      "la prestazione, il rendimento",
      "sommamente, estremamente",
      "estremamente",
      "oltremodo, straordinariamente",
      "piuttosto, abbastanza",
      "impressionante",
      "notevole"
    ],
    exercises: [
      {
        q: "Come si dice «difficilissimo», senza confronto?",
        opts: [
          "äußerst schwierig",
          "am schwierigsten",
          "schwierigst"
        ],
        why: "Senza confronto: avverbio + aggettivo, <b>äußerst schwierig</b>. <i>am schwierigsten</i> è «il più difficile» in un confronto."
      },
      {
        q: "Dei tre percorsi, questo è il più breve: «Von den drei Wegen ist dieser ___.»",
        opts: [
          "am kürzesten",
          "äußerst kurz",
          "höchst kurz"
        ],
        why: "Qui c'è un confronto fra tre percorsi: <b>am kürzesten</b>. <i>äußerst kurz</i> direbbe solo che è molto breve."
      },
      {
        q: "Rispondi per lettera a un'offerta commerciale. Quale frase esprime un interesse molto alto, senza confronto e nel registro adatto?",
        opts: [
          "Ihr Angebot ist für uns äußerst interessant.",
          "Ihr Angebot ist für uns echt super.",
          "Ihr Angebot ist für uns am interessantesten."
        ],
        why: "In una lettera formale si usa <b>äußerst</b> (o <i>höchst</i>); <i>echt super</i> è parlato informale. <i>am interessantesten</i> è un confronto e qui non c'è nulla con cui confrontare."
      },
      {
        q: "Completa con il superlativo di kurz: «Dieser Weg ist am ___.»",
        hint: "superlativo di kurz, con la ü",
        why: "<b>kürzesten</b>: <i>kurz</i> prende l'Umlaut e <i>-esten</i> dopo <i>z</i>."
      },
      {
        q: "Completa: «Die Aussicht ist ___ beeindruckend.»",
        hint: "«estremamente», comincia con ä",
        why: "<b>äußerst</b>: grado molto alto senza confronto, tipico dello scritto."
      },
      {
        q: "Completa la frase.",
        tr: "Ci ha salutati nel modo più cordiale.",
        why: "<i>Sie hat uns aufs Herzlichste begrüßt</i> (si scrive anche <i>aufs herzlichste</i>): <i>aufs</i> + superlativo, formula dello scritto formale."
      },
      {
        q: "Abbina ogni parola al suo significato.",
        pairs: [
          "la valutazione, la recensione",
          "il giudizio",
          "il criterio, il metro di misura",
          "l'impressione"
        ]
      },
      {
        q: "Scrivi in registro formale: «Il risultato è estremamente notevole, anche se i costi sono stati piuttosto alti.»",
        why: "<i>Das Ergebnis ist äußerst bemerkenswert, auch wenn die Kosten ziemlich hoch waren</i>: <i>äußerst</i> (o <i>höchst, überaus</i>) per il grado alto, <i>ziemlich</i> per attenuare; vanno bene anche <i>obwohl</i> e il Perfekt <i>gewesen sind</i>."
      },
      {
        tr: "La nuova mostra merita davvero di essere vista. I quadri sono estremamente insoliti, e i visitatori sono rimasti oltremodo colpiti.",
        why: "In <i>Ausstellung</i> l'accento cade su <b>Aus</b>; in <i>sehenswert</i> la <b>h</b> è muta; in <i>ungewöhnlich</i> l'accento cade su <b>un</b>."
      },
      {
        tr: "È un risultato estremamente notevole.",
        why: "In <i>bemerkenswertes</i> l'accento cade su <b>mer</b>; in <i>Ergebnis</i> l'accento cade su <b>geb</b>; in <i>höchst</i> <b>ch</b> si pronuncia [ç]."
      }
    ]
  },
  "lesson:c1-u01-test": {
    theme: "Verifica",
    title: "Test: I volti di werden",
    objectives: [
      "verificare le funzioni di werden, gli aggettivi sostantivati e il grado molto alto"
    ],
    theory: [
      {
        p: "Dieci domande su tutta l'unità. Si supera con il 70%. Non riguardare le lezioni mentre rispondi: se non ricordi qualcosa, meglio tornare indietro e ripassare."
      }
    ],
    exercises: [
      {
        q: "Completa: «Sie ist Ärztin ___.»",
        hint: "participio di werden «diventare»",
        why: "<b>geworden</b>: con il significato di «diventare» il participio ha <i>ge-</i>."
      },
      {
        q: "Completa: «Ich habe gestern mit einem ___ von dir gesprochen.»",
        hint: "da bekannt, maschile, dativo dopo einem",
        why: "<b>Bekannten</b>: dopo <i>einem</i> (dativo) l'aggettivo sostantivato prende <i>-en</i>."
      },
      {
        q: "Completa: «Wir wohnen zurzeit in der Wohnung eines ___.»",
        hint: "da verwandt, maschile, genitivo dopo eines",
        why: "<b>Verwandten</b>: dopo <i>eines</i> (genitivo) l'aggettivo sostantivato prende <i>-en</i>."
      },
      {
        q: "La collega non risponde al telefono. Che cosa significa «Sie wird den Zug verpasst haben»?",
        opts: [
          "una supposizione sul passato: «avrà perso il treno»",
          "un futuro: «perderà il treno»",
          "un passivo: «il treno è stato perso»"
        ],
        why: "<i>werden</i> + participio + <i>haben</i> è il <b>Futur II</b>: qui una supposizione su qualcosa di già accaduto."
      },
      {
        q: "Che cosa esprime «Er wird wohl krank sein»?",
        opts: [
          "una supposizione",
          "un passivo",
          "un ordine"
        ],
        why: "<i>werden</i> + infinito con <i>wohl</i>: <b>supposizione</b>, «sarà malato»."
      },
      {
        q: "Un ospite è in ritardo. Quale frase esprime la supposizione più debole?",
        opts: [
          "Er wird vielleicht noch kommen.",
          "Er wird sicher noch kommen.",
          "Er kommt bestimmt noch."
        ],
        why: "<b>vielleicht</b> lascia aperta la possibilità; <i>sicher</i> e <i>bestimmt</i> esprimono una supposizione molto forte."
      },
      {
        q: "Fra tutti i candidati, lei è la migliore: «Von allen Kandidaten ist sie ___.»",
        opts: [
          "am besten",
          "äußerst gut",
          "höchst gut"
        ],
        why: "C'è un confronto con gli altri candidati: <b>am besten</b>."
      },
      {
        q: "Abbina ogni parola al suo significato.",
        pairs: [
          "l'adulto",
          "il ragazzo, il giovane",
          "il parente",
          "l'impiegato"
        ]
      },
      {
        tr: "Probabilmente il progetto sarà concluso solo l'anno prossimo. I costi sono estremamente alti, e molti impiegati dovranno probabilmente lavorare più a lungo.",
        why: "In <i>vermutlich</i> l'accento cade su <b>mut</b>; in <i>abgeschlossen</i> la <b>b</b> si pronuncia [p]; in <i>äußerst</i> <b>äu</b> si pronuncia [ɔʏ]."
      },
      {
        tr: "Un mio conoscente è diventato deputato.",
        why: "In <i>Abgeordneter</i> l'accento cade su <b>Ab</b>; in <i>geworden</i> la <b>o</b> è breve; in <i>Bekannter</i> l'accento cade su <b>kann</b>."
      }
    ]
  }
});
