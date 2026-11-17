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
  },
  "unit:c1-u02": {
    title: "Riuscire a realizzare",
    grammarNote: "Verbi di funzione (zur Verfügung stellen, in Frage kommen, eine Entscheidung treffen) · sostituti del passivo: sich lassen, sein + zu, aggettivi in -bar · prefissi separabili e inseparabili con senso diverso (umfahren) · modi di dire"
  },
  "lesson:c1-u02-l1": {
    theme: "Lavoro e progetti",
    title: "I verbi di funzione",
    objectives: [
      "capire e usare i verbi di funzione dei testi formali",
      "scegliere il verbo giusto per il nome (eine Entscheidung treffen)",
      "collocare il nome del gruppo verso la fine della frase",
      "leggere un breve avviso o un verbale"
    ],
    theory: [
      {
        h: "Il nome porta il significato",
        p: "Nei testi formali molte azioni si dicono con un <strong>nome</strong> che porta il significato e un <strong>verbo</strong> quasi vuoto: <em>eine Entscheidung treffen</em> (decidere), <em>zur Verfügung stellen</em> (mettere a disposizione), <em>in Kraft treten</em> (entrare in vigore), <em>in Frage kommen</em> (essere possibile), <em>zum Ausdruck bringen</em> (esprimere), <em>Rücksicht nehmen auf</em> (avere riguardo per). Nei gruppi con preposizione la preposizione e l'articolo non si scelgono (<em>zur Verfügung</em>); in quelli con un oggetto l'articolo può cambiare (<em>eine Entscheidung treffen, die Entscheidung treffen</em>)."
      },
      {
        h: "Il posto nella frase",
        p: "I gruppi con preposizione (<em>zur Verfügung stellen, in Kraft treten, in Frage kommen</em>) si comportano come una particella separabile: il verbo si coniuga al suo posto e il gruppo va verso la fine. <em>Die Firma <strong>stellt</strong> uns die Räume <strong>zur Verfügung</strong>.</em> Al Perfekt e con un modale il gruppo precede il participio o l'infinito: <em>Die Firma hat uns die Räume zur Verfügung gestellt. Das Gesetz soll im Januar in Kraft treten.</em> I gruppi con un complemento oggetto (<em>eine Entscheidung treffen</em>) seguono invece l'ordine normale della frase: <em>Wir treffen heute eine Entscheidung über den Antrag. Wir müssen bis Freitag eine Entscheidung treffen.</em> La negazione di solito precede il gruppo: <em>Das kommt nicht in Frage.</em>"
      },
      {
        contrast: "Molti di questi gruppi esistono anche in italiano con lo stesso schema (<em>mettere a disposizione</em>, <em>entrare in vigore</em>, <em>prendere una decisione</em>), ed è un buon appiglio. Il rischio è il calco quando il verbo non coincide: <em>prendere una decisione</em> è <em>eine Entscheidung treffen</em>, non <em>nehmen</em>; <em>fare una domanda</em> è <em>eine Frage stellen</em>, non <em>machen</em>."
      },
      {
        trap: "<em>in Frage kommen</em> non ha a che fare con le domande: significa «essere possibile, entrare in considerazione». <em>Das kommt nicht in Frage</em> è un rifiuto netto, «non se ne parla»."
      },
      {
        tip: "Impara questi gruppi come blocchi interi, con preposizione e articolo: <em>zur Verfügung</em>, <em>in Kraft</em>, <em>zum Ausdruck</em>. Se ne ricordi solo il nome, il verbo sbagliato arriva subito."
      }
    ],
    grammar: {
      title: "Verbi di funzione",
      note: "Nome + verbo quasi vuoto, gruppo fisso. Il verbo si coniuga al suo posto, il nome con la preposizione va verso la fine: <i>Die Firma stellt uns die Räume zur Verfügung.</i>",
      table: {
        head: ["verbo di funzione", "significato", "verbo semplice"],
        rows: [
          ["eine Entscheidung treffen", "prendere una decisione", "entscheiden"],
          ["zur Verfügung stellen", "mettere a disposizione", "bereitstellen"],
          ["in Kraft treten", "entrare in vigore", "gültig werden"],
          ["in Frage kommen", "essere possibile, entrare in considerazione", "möglich sein"],
          ["zum Ausdruck bringen", "esprimere", "ausdrücken"],
          ["Rücksicht nehmen auf", "avere riguardo per", "berücksichtigen"]
        ]
      },
      examples: [
        { tr: "La ditta ci mette a disposizione i locali.", note: "il nome va verso la fine: zur Verfügung" },
        { tr: "Dobbiamo prendere una decisione entro venerdì.", note: "treffen, non nehmen" },
        { tr: "La nuova legge entra in vigore a gennaio.", note: "in Kraft treten" },
        { tr: "Per questo posto possono essere presi in considerazione solo due candidati.", note: "in Frage kommen: essere possibile" },
        { tr: "Ha espresso chiaramente la sua delusione.", note: "zum Ausdruck bringen, registro formale" },
        { tr: "Abbiate riguardo per i vicini, per favore.", note: "Rücksicht nehmen auf + accusativo" }
      ]
    },
    vocab: [
      "il progetto, il proposito",
      "il provvedimento, la misura",
      "il permesso, l'autorizzazione",
      "l'incarico, la commessa",
      "il termine, la scadenza",
      "l'influenza, l'influsso",
      "entrare in vigore",
      "mettere a disposizione",
      "essere possibile, entrare in considerazione",
      "prendere una decisione",
      "avere riguardo, tenere conto",
      "esprimere"
    ],
    exercises: [
      {
        q: "Leggi l'avviso: «Ab dem 1. März tritt die neue Hausordnung in Kraft. Die Verwaltung bittet alle Mieter, Rücksicht auf die Nachbarn zu nehmen.» Che cosa succede il 1° marzo?",
        opts: [
          "entra in vigore il nuovo regolamento del condominio",
          "l'amministrazione prende una decisione sui vicini",
          "i nuovi inquilini entrano negli appartamenti"
        ],
        why: "<i>in Kraft treten</i> significa «entrare in vigore»: dal 1° marzo vale il nuovo regolamento (<i>Hausordnung</i>)."
      },
      {
        q: "In una riunione un collega dice: «Diese Lösung kommt für uns nicht in Frage.» Che cosa intende?",
        opts: [
          "che la soluzione è esclusa",
          "che vuole fare una domanda sulla soluzione",
          "che la soluzione è ancora in discussione"
        ],
        why: "<i>nicht in Frage kommen</i> è un rifiuto netto: la soluzione <b>non è possibile</b>. Non c'entra il fare domande."
      },
      {
        q: "Completa: «Wir müssen bis Freitag eine Entscheidung ___.»",
        hint: "il verbo di funzione di die Entscheidung",
        why: "<b>treffen</b> (nello stile formale anche <i>fällen</i>): <i>eine Entscheidung treffen</i>, «prendere una decisione»; non <i>nehmen</i>."
      },
      {
        q: "Completa: «Die Firma stellt den Mitarbeitern Laptops zur ___.»",
        hint: "zur ... stellen: mettere a disposizione",
        why: "<b>Verfügung</b>: <i>zur Verfügung stellen</i>, gruppo fisso con <i>zur</i>."
      },
      {
        q: "Completa: «Sie hat ihre Kritik deutlich zum ___ gebracht.»",
        hint: "zum ... bringen: esprimere",
        why: "<b>Ausdruck</b>: <i>zum Ausdruck bringen</i>, «esprimere», tipico dello scritto formale."
      },
      {
        q: "Completa il verbale.",
        tr: "Ieri il consiglio comunale ha preso una decisione importante: la nuova regola entra in vigore a gennaio. Per l'attuazione la città mette a disposizione fondi aggiuntivi.",
        why: "<i>getroffen</i> (Perfekt di <i>treffen</i>), <i>tritt</i> (con <i>in Kraft</i>), <i>stellt</i> (con <i>zur Verfügung</i>): ogni verbo va con il suo nome."
      },
      {
        q: "Abbina ogni gruppo al suo significato.",
        pairs: [
          "entrare in vigore",
          "essere possibile",
          "avere riguardo",
          "mettere a disposizione"
        ]
      },
      {
        q: "Traduci per un verbale: «La direzione ha messo a disposizione una sala per la riunione.» (die Leitung, der Raum, die Besprechung)",
        why: "<i>Die Leitung hat einen Raum für die Besprechung zur Verfügung gestellt</i>: il gruppo <i>zur Verfügung</i> va prima del participio; va bene anche il Präteritum <i>stellte ... zur Verfügung</i>."
      },
      {
        tr: "Dal mese prossimo in ufficio entra in vigore una nuova regola. La ditta mette a disposizione di tutti i dipendenti dei portatili; i dispositivi privati non saranno più ammessi.",
        why: "In <i>Regelung</i> l'accento cade su <b>Re</b>; in <i>Verfügung</i> l'accento cade su <b>fü</b>; in <i>Geräte</i> la <b>ä</b> è lunga."
      },
      {
        tr: "Dobbiamo prendere una decisione oggi stesso.",
        why: "In <i>Entscheidung</i> l'accento cade su <b>schei</b> e <b>ei</b> si pronuncia [aɪ]; in <i>treffen</i> la <b>e</b> è breve."
      }
    ]
  },
  "lesson:c1-u02-l2": {
    theme: "Pratiche e avvisi",
    title: "Si può fare, è da sbrigare",
    objectives: [
      "usare sich lassen + infinito per «si può»",
      "capire sein + zu + infinito negli avvisi e nei regolamenti",
      "riconoscere e formare gli aggettivi in -bar",
      "riformulare un passivo con un modale"
    ],
    theory: [
      {
        h: "Tre modi di dire «si può» o «si deve»",
        p: "Accanto al passivo con un modale (<em>Das Problem kann gelöst werden</em>) il tedesco ha forme più compatte. <strong>sich lassen</strong> + infinito significa «si può»: <em>Das Problem lässt sich leicht lösen.</em> <strong>sein + zu</strong> + infinito significa «si può» o «si deve», e negli avvisi di solito è un obbligo: <em>Der Antrag ist bis Freitag abzugeben.</em> Gli aggettivi in <strong>-bar</strong> dicono che una cosa si può fare: <em>lösbar, machbar, trinkbar</em>."
      },
      {
        h: "zu con i verbi separabili",
        p: "Con un verbo separabile <em>zu</em> sta fra la particella e il verbo e si scrive attaccato: <em>abgeben → abzugeben, einreichen → einzureichen, ausfüllen → auszufüllen</em>. <em>Das Formular ist vollständig auszufüllen.</em>"
      },
      {
        contrast: "L'italiano ha forme molto vicine: <em>il modulo è da consegnare entro venerdì</em> corrisponde a <em>ist bis Freitag abzugeben</em>, e <em>-abile, -ibile</em> funzionano come <em>-bar</em> (<em>risolvibile</em> = <em>lösbar</em>). <em>sich lassen</em> invece non si traduce alla lettera: <em>Das lässt sich machen</em> è «si può fare», non «si lascia fare»."
      },
      {
        trap: "Il <em>zu</em> cambia tutto: <em>Die Rechnung ist zu bezahlen</em> esprime un obbligo, «la fattura va pagata»; <em>Die Rechnung ist bezahlt</em> descrive lo stato risultante (passivo di stato), «la fattura è pagata»; il Perfekt del passivo di processo è <em>Die Rechnung ist bezahlt worden</em>."
      },
      {
        tip: "Per capire un <em>sein + zu</em> in un regolamento, prova a sostituirlo con <em>muss ... werden</em>: <em>ist abzugeben</em> = <em>muss abgegeben werden</em>. Se il senso regge, è un obbligo."
      }
    ],
    grammar: {
      title: "Sostituti del passivo con valore modale",
      note: "<b>sich lassen</b> + infinito: si può. <b>sein + zu</b> + infinito: si può o si deve (negli avvisi, di solito si deve). <b>-bar</b>: che si può. Con i verbi separabili: <i>abzugeben</i>.",
      table: {
        head: ["forma", "equivale a", "esempio"],
        rows: [
          ["sich lassen + infinito", "kann ... werden", "Das Problem lässt sich lösen."],
          ["sein + zu + infinito", "muss / kann ... werden", "Der Antrag ist abzugeben."],
          ["aggettivo in -bar", "kann ... werden", "Das Problem ist lösbar."],
          ["man + attivo", "impersonale", "Das macht man so."]
        ]
      },
      examples: [
        { tr: "Il problema si può risolvere facilmente.", note: "sich lassen + infinito" },
        { tr: "La domanda è da consegnare entro venerdì.", note: "sein + zu: obbligo" },
        { tr: "La fattura va pagata entro 14 giorni.", note: "sein + zu negli avvisi" },
        { tr: "Questo compito è difficilmente risolvibile.", note: "-bar come -ibile" },
        { tr: "L'acqua non è potabile.", note: "trinkbar" },
        { tr: "Qui non si può fumare.", note: "passivo con modale, per confronto" }
      ]
    },
    vocab: [
      "la norma, il regolamento",
      "la tassa, il diritto (da pagare)",
      "il certificato, l'attestato",
      "la prova, la documentazione",
      "la fattura, il conto",
      "il documento; al plurale, la documentazione",
      "sbrigare, occuparsi di",
      "presentare, inoltrare (una domanda)",
      "compilare",
      "risolvibile",
      "fattibile",
      "ammesso, consentito"
    ],
    exercises: [
      {
        q: "Leggi l'avviso: «Die Unterlagen sind bis zum 15. Mai beim Amt einzureichen.» Che cosa significa?",
        opts: [
          "i documenti devono essere presentati all'ufficio entro il 15 maggio",
          "i documenti si possono presentare dopo il 15 maggio",
          "l'ufficio invierà i documenti entro il 15 maggio"
        ],
        why: "<i>sind ... einzureichen</i> è <i>sein + zu</i>: in un avviso esprime un <b>obbligo</b>, «vanno presentati»."
      },
      {
        q: "Un cliente ti chiede di anticipare una consegna. Rispondi: «Das lässt sich machen.» Che cosa gli dici?",
        opts: [
          "che si può fare",
          "che non lo farai",
          "che qualcuno ti lascia farlo"
        ],
        why: "<i>Das lässt sich machen</i> = <i>Das kann gemacht werden</i>: accetti, «si può fare»."
      },
      {
        q: "Quale frase ha lo stesso significato di «Das Problem kann leicht gelöst werden»?",
        opts: [
          "Das Problem lässt sich leicht lösen.",
          "Das Problem lässt leicht lösen.",
          "Das Problem ist leicht gelöst worden."
        ],
        why: "<b>sich lassen</b> + infinito equivale a <i>kann ... werden</i>; senza <i>sich</i> la frase non funziona, e la terza è un Perfekt passivo con un altro significato."
      },
      {
        q: "Completa l'avviso: «Die Rechnung ist innerhalb von 14 Tagen zu ___.»",
        hint: "pagare",
        why: "<b>bezahlen</b> (o <i>zahlen</i>): <i>ist zu bezahlen</i>, «va pagata»."
      },
      {
        q: "Completa: «Das Wasser ist nicht ___.»",
        hint: "che si può bere, aggettivo in -bar",
        why: "<b>trinkbar</b>: «potabile»; il suffisso <i>-bar</i> dice che una cosa si può fare."
      },
      {
        q: "Completa l'avviso ai condomini.",
        tr: "Gentili inquilini, il riscaldamento purtroppo si potrà riparare solo la settimana prossima. Fino ad allora le finestre vanno tenute chiuse. Il guasto però è riparabile: il tecnico viene lunedì.",
        why: "<i>lässt sich ... reparieren</i> (si può), <i>sind ... zu halten</i> (vanno tenute), <i>behebbar</i>, <i>reparierbar</i> o <i>reparabel</i> (riparabile)."
      },
      {
        q: "Metti in ordine le parole.",
        tr: "La domanda è da consegnare in ufficio entro venerdì.",
        why: "<i>Der Antrag ist bis Freitag beim Amt abzugeben.</i> <i>abzugeben</i> chiude la frase; <i>bis Freitag</i> e <i>beim Amt</i> possono scambiarsi di posto."
      },
      {
        q: "Traduci: «Questo problema non si può risolvere in un giorno.»",
        why: "<i>Dieses Problem lässt sich nicht an einem Tag lösen</i>; vanno bene anche <i>ist nicht ... zu lösen</i>, <i>kann nicht ... gelöst werden</i> e <i>kann man nicht ... lösen</i>."
      },
      {
        tr: "Gentili signore e signori, il modulo va compilato in ogni sua parte e presentato entro la fine del mese. I documenti mancanti si possono consegnare anche in seguito.",
        why: "In <i>vollständig</i> la <b>v</b> si pronuncia [f]; in <i>auszufüllen</i> l'accento cade su <b>aus</b>; in <i>nachreichen</i> l'accento cade su <b>nach</b>."
      },
      {
        tr: "Questo si può sicuramente sbrigare entro domani.",
        why: "In <i>lässt</i> la <b>ä</b> è breve; in <i>bestimmt</i> l'accento cade su <b>stimmt</b>; in <i>erledigen</i> l'accento cade su <b>le</b>."
      }
    ]
  },
  "lesson:c1-u02-l3": {
    theme: "Traffico e modi di dire",
    title: "umfahren o umfahren? Modi di dire",
    objectives: [
      "distinguere i prefissi separabili da quelli inseparabili con lo stesso verbo",
      "capire un notiziario del traffico",
      "riconoscere e usare alcuni modi di dire frequenti",
      "capire quando un modo di dire non si traduce alla lettera"
    ],
    theory: [
      {
        h: "Lo stesso verbo, due verbi",
        p: "Con <strong>durch-, über-, um-, unter-, wieder-</strong> lo stesso verbo può essere separabile o inseparabile, con significati diversi. <em>Er hat das Schild <strong>umgefahren</strong></em>: l'ha abbattuto con l'auto (separabile, accento su <em>um</em>). <em>Wir haben den Stau <strong>umfahren</strong></em>: l'abbiamo aggirato (inseparabile, accento su <em>fah</em>). Nelle forme coniugate il separabile si stacca (<em>Die Fähre setzt uns über</em>), l'inseparabile no (<em>Sie übersetzt den Text</em>)."
      },
      {
        h: "I modi di dire",
        p: "I modi di dire (<em>Redewendungen</em>) hanno un senso figurato che non si ricava dalle parole: <em>Das geht mir gegen den Strich</em> (mi dà fastidio), <em>den Nagel auf den Kopf treffen</em> (cogliere nel segno), <em>jemandem auf die Nerven gehen</em> (dare sui nervi), <em>etwas auf die lange Bank schieben</em> (rimandare). Si usano soprattutto nel parlato e nei testi giornalistici; in un testo molto formale si preferisce l'espressione diretta."
      },
      {
        contrast: "L'italiano ha alcuni modi di dire vicini (<em>dare sui nervi</em> = <em>auf die Nerven gehen</em>), ma molti cambiano immagine: <em>cogliere nel segno</em> diventa «colpire il chiodo sulla testa», <em>rimandare alle calende greche</em> diventa «spingere sulla panca lunga». Tradurre parola per parola produce frasi incomprensibili."
      },
      {
        trap: "Con i verbi separabili e inseparabili il participio decide: <em>umgefahren</em> (abbattuto) o <em>umfahren</em> (aggirato). Scrivere <em>Wir haben den Stau umgefahren</em> vuol dire che avete abbattuto la coda, non che l'avete evitata."
      },
      {
        tip: "Quando incontri un modo di dire nuovo, annotalo con una frase intera e una situazione: <em>Er schiebt die Steuererklärung auf die lange Bank.</em> Da solo si dimentica, dentro una scena resta."
      }
    ],
    grammar: {
      title: "Prefissi separabili o inseparabili, e modi di dire",
      note: "<b>Separabile</b>: accento sul prefisso, prefisso staccato, participio con <i>-ge-</i> se il verbo base lo prevede (<i>umgefahren</i>). <b>Inseparabile</b>: accento sul verbo dopo il prefisso (<i>wiederholen</i> con l'accento su <i>ho</i>), prefisso attaccato, participio senza <i>ge-</i> (<i>umfahren</i>).",
      table: {
        head: ["separabile", "significato", "inseparabile", "significato"],
        rows: [
          ["Er hat das Schild umgefahren.", "abbattere con l'auto", "Wir haben den Stau umfahren.", "aggirare"],
          ["Die Fähre setzt uns über.", "traghettare", "Sie hat den Text übersetzt.", "tradurre"],
          ["Wir sind durchgefahren.", "guidare senza fermarsi", "Wir haben die Schweiz durchfahren.", "attraversare"]
        ]
      },
      examples: [
        { tr: "Ha abbattuto il cartello stradale con l'auto.", note: "separabile: umgefahren" },
        { tr: "Abbiamo aggirato la coda.", note: "inseparabile: umfahren" },
        { tr: "Ha tradotto la lettera in inglese.", note: "inseparabile: übersetzt" },
        { tr: "Il traghetto ci porta sull'altra riva.", note: "separabile: setzt ... über" },
        { tr: "Questo mi dà proprio fastidio.", note: "modo di dire: gegen den Strich gehen" },
        { tr: "Hai colto nel segno.", note: "modo di dire: den Nagel auf den Kopf treffen" }
      ]
    },
    vocab: [
      "il modo di dire",
      "il proverbio",
      "la deviazione, il giro più lungo",
      "la riva",
      "la deviazione (stradale)",
      "la coda, l'ingorgo",
      "aggirare (inseparabile); abbattere con l'auto (separabile)",
      "tradurre (inseparabile); traghettare (separabile)",
      "guidare senza fermarsi (separabile); attraversare (inseparabile)",
      "conversare, chiacchierare",
      "ripetere",
      "saper trattare (separabile); aggirare, eludere (inseparabile)"
    ],
    exercises: [
      {
        q: "Notiziario del traffico: «Wegen eines Unfalls ist die A8 gesperrt. Autofahrer sollten den Bereich weiträumig umfahren.» Che cosa si consiglia?",
        opts: [
          "di aggirare la zona con ampio margine",
          "di attraversare la zona lentamente",
          "di abbattere gli ostacoli sulla strada"
        ],
        why: "Qui <i>umfahren</i> è inseparabile (accento su <i>fah</i>): «aggirare». <i>weiträumig</i> significa «con ampio margine»."
      },
      {
        q: "Completa: «Der Fahrer hat das Schild ___.» (l'ha abbattuto con l'auto)",
        opts: [
          "umgefahren",
          "umfahren",
          "umgefährt"
        ],
        why: "Nel senso di «abbattere» <i>umfahren</i> è separabile, quindi il participio ha <i>-ge-</i>: <b>umgefahren</b>."
      },
      {
        q: "In riunione una collega ti dice: «Da hast du den Nagel auf den Kopf getroffen.» Che cosa intende?",
        opts: [
          "che hai colto nel segno",
          "che hai fatto un errore grave",
          "che hai parlato in modo troppo diretto"
        ],
        why: "<i>den Nagel auf den Kopf treffen</i> = «cogliere nel segno»: è un complimento."
      },
      {
        q: "Completa: «Die Fähre ___ uns ans andere Ufer über.»",
        hint: "übersetzen separabile, terza persona singolare",
        why: "<b>setzt</b>: nel senso di «traghettare» <i>übersetzen</i> è separabile, e <i>über</i> va in fondo."
      },
      {
        q: "Completa il racconto.",
        tr: "Il centro era chiuso al traffico per il cantiere, quindi abbiamo dovuto aggirarlo. Poi abbiamo guidato tutta la notte senza fermarci e siamo arrivati solo al mattino.",
        why: "<i>umfahren</i> (inseparabile, infinito dopo <i>mussten</i>) e <i>durchgefahren</i> (separabile, participio con <i>-ge-</i>)."
      },
      {
        q: "Abbina ogni modo di dire al suo significato.",
        pairs: [
          "andare contro i propri principi o gusti",
          "cogliere nel segno",
          "dare sui nervi",
          "rimandare"
        ]
      },
      {
        q: "In quali frasi il prefisso è inseparabile?",
        opts: [
          "Wir haben den Stau umfahren.",
          "Sie hat den Text übersetzt.",
          "Er hat das Schild umgefahren.",
          "Die Fähre setzt uns über."
        ],
        why: "Le prime due: participio senza <i>ge-</i> (<i>umfahren, übersetzt</i>). Nella terza il participio ha <i>-ge-</i>, nella quarta il prefisso si stacca: sono separabili."
      },
      {
        q: "Traduci: «Questo modo di dire non si può tradurre parola per parola.» (die Redewendung)",
        why: "<i>Diese Redewendung lässt sich nicht wörtlich übersetzen</i>; vanno bene anche <i>ist nicht wörtlich zu übersetzen</i>, <i>kann man nicht ...</i>, <i>kann nicht ... übersetzt werden</i> e <i>Wort für Wort</i>."
      },
      {
        tr: "A causa di un incidente sulla A8 c'è una deviazione. La cosa migliore è aggirare la zona passando per la statale; calcolate un giro più lungo di venti minuti.",
        why: "In <i>umfahren</i> qui l'accento cade su <b>fah</b>; in <i>Umleitung</i> l'accento cade su <b>Um</b>; in <i>Bundesstraße</i> <b>ß</b> si pronuncia [s]."
      },
      {
        tr: "Questo modo di dire si può tradurre a malapena.",
        why: "In <i>Redewendung</i> l'accento cade su <b>Re</b>; in <i>kaum</i> <b>au</b> si pronuncia [aʊ]; in <i>übersetzen</i> l'accento cade su <b>set</b>."
      }
    ]
  },
  "lesson:c1-u02-test": {
    theme: "Verifica",
    title: "Test: Riuscire a realizzare",
    objectives: [
      "verificare i verbi di funzione, i sostituti del passivo e i prefissi separabili e inseparabili"
    ],
    theory: [
      {
        p: "Dieci domande su tutta l'unità. Si supera con il 70%. Non riguardare le lezioni mentre rispondi: se non ricordi qualcosa, meglio tornare indietro e ripassare."
      }
    ],
    exercises: [
      {
        q: "Completa: «Wann ___ das neue Gesetz in Kraft?»",
        hint: "treten, terza persona singolare",
        why: "<b>tritt</b>: <i>in Kraft treten</i>, con il cambio vocalico al presente."
      },
      {
        q: "Completa: «Das Problem ___ sich leicht lösen.» (il problema si può risolvere facilmente)",
        hint: "un verbo, terza persona singolare",
        why: "<b>lässt</b>: <i>lässt sich lösen</i> = <i>kann gelöst werden</i>."
      },
      {
        q: "Completa l'avviso: «Der Bericht ist bis Montag ___.»",
        hint: "il rapporto va consegnato entro lunedì (abgeben)",
        why: "<b>abzugeben</b>: <i>sein + zu</i>, con <i>zu</i> fra particella e verbo."
      },
      {
        q: "Completa: «Wir haben die Baustelle ___.» (l'abbiamo aggirata)",
        hint: "umfahren inseparabile, participio",
        why: "<b>umfahren</b>: nel senso di «aggirare» il verbo è inseparabile e il participio non ha <i>ge-</i>."
      },
      {
        q: "Leggi l'annuncio: «Für die Stelle kommen nur Bewerber mit Erfahrung in Frage.» Chi può essere scelto?",
        opts: [
          "solo candidati con esperienza",
          "tutti i candidati che fanno domande",
          "nessun candidato per ora"
        ],
        why: "<i>in Frage kommen</i> = «essere possibile»: <b>solo chi ha esperienza</b> entra in considerazione."
      },
      {
        q: "In un regolamento universitario: quale frase esprime un obbligo, e non solo una possibilità?",
        opts: [
          "Die Hausarbeit ist bis zum 30. Juni abzugeben.",
          "Die Hausarbeit lässt sich bis zum 30. Juni abgeben.",
          "Die Hausarbeit kann bis zum 30. Juni abgegeben werden."
        ],
        why: "In un regolamento <b>sein + zu</b> esprime di norma un obbligo («va consegnata»). Le altre due sono corrette ma dicono solo che la consegna è possibile."
      },
      {
        q: "Una collega dice della riunione del venerdì sera: «Das geht mir gegen den Strich.» Come si sente?",
        opts: [
          "infastidita",
          "contenta",
          "stanca"
        ],
        why: "<i>gegen den Strich gehen</i> = «dare fastidio, risultare sgradito»."
      },
      {
        q: "Abbina ogni gruppo al suo significato.",
        pairs: [
          "mettere a disposizione",
          "prendere una decisione",
          "essere possibile",
          "esprimere"
        ]
      },
      {
        tr: "Da gennaio entra in vigore una nuova norma: tutte le domande vanno presentate online. A questo scopo la città mette a disposizione dei computer in ogni biblioteca.",
        why: "In <i>Vorschrift</i> l'accento cade su <b>Vor</b>; in <i>einzureichen</i> l'accento cade su <b>ein</b>; in <i>Bibliothek</i> l'accento cade su <b>thek</b>."
      },
      {
        tr: "I documenti vanno presentati entro la fine del mese.",
        why: "In <i>Monats</i> la <b>o</b> è lunga; in <i>einzureichen</i> <b>ei</b> si pronuncia [aɪ]."
      }
    ]
  },
  "unit:c1-u03": {
    title: "Registri e testualità",
    grammarNote: "Stile nominale e lingua burocratica (Amtsdeutsch) · particelle ed ellissi del parlato · correlativi (darauf, dass; es, dass) e connettivi per costruire un testo coeso · ripasso delle unità 1-3"
  },
  "lesson:c1-u03-l1": {
    theme: "Uffici e avvisi pubblici",
    title: "Il tedesco burocratico",
    objectives: [
      "capire un avviso in Amtsdeutsch",
      "riformulare lo stile nominale in stile verbale e viceversa",
      "riconoscere i verbi tipici della burocrazia (erfolgen, erheben, gewähren)",
      "scegliere il registro adatto al destinatario"
    ],
    theory: [
      {
        h: "Che cos'è l'Amtsdeutsch",
        p: "La lingua degli uffici usa molto lo <strong>stile nominale</strong>: verbi trasformati in nomi (<em>die Antragstellung, die Nichtbeachtung, das Betreten</em>), secondarie sostituite da gruppi con una preposizione (<em>nach Abschluss, bei Nichtbeachtung, zur Vermeidung</em>), verbi poco espressivi come <em>erfolgen</em> (avvenire), <em>erheben</em> (riscuotere), <em>gewähren</em> (concedere). <em>Die Antragstellung erfolgt online</em> significa semplicemente «la domanda si presenta online»."
      },
      {
        h: "Dallo stile nominale a quello verbale",
        p: "Per capire un avviso, trasforma il gruppo nominale in una secondaria: <em>Nach Abschluss der Arbeiten</em> → <em>Nachdem die Arbeiten abgeschlossen sind</em>; <em>Bei Nichtbeachtung</em> → <em>Wenn man das nicht beachtet</em>; <em>Zur Vermeidung von Wartezeiten</em> → <em>Um Wartezeiten zu vermeiden</em>. Il genitivo del gruppo nominale (<em>der Arbeiten</em>) torna soggetto o oggetto della secondaria."
      },
      {
        contrast: "Anche l'italiano burocratico ha queste forme (<em>a seguito della conclusione dei lavori</em>, <em>in caso di mancata osservanza</em>), quindi la struttura è familiare. La differenza è che in tedesco l'oggetto del verbo diventa un genitivo senza preposizione (<em>die Beachtung der Regeln</em>), e che negli avvisi lo stile nominale si combina con <em>sein + zu</em> (<em>ist ein Helm aufzusetzen</em>)."
      },
      {
        trap: "Lo stile nominale è adatto agli avvisi e alle lettere ufficiali, non a una mail fra amici: <em>Nach Abschluss der Arbeiten erfolgt unser Treffen</em> in una mail privata suona ridicolo. Lì si scrive <em>Wir sehen uns, sobald die Arbeiten fertig sind</em>."
      },
      {
        tip: "Davanti a un nome in <em>-ung</em> o a un infinito sostantivato (<em>das Betreten</em>), chiediti quale verbo c'è dietro (<em>betreten</em>) e chi fa l'azione: spesso è «chiunque», cioè <em>man</em>."
      }
    ],
    grammar: {
      title: "Stile nominale e stile verbale",
      note: "<b>Nominale</b>: preposizione + nome, spesso con un genitivo che dipende dal nome (<i>nach Abschluss der Arbeiten</i>). <b>Verbale</b>: costruzione con un verbo, cioè una secondaria (<i>nachdem die Arbeiten abgeschlossen sind</i>) o un infinito con <i>zu</i> (<i>um Wartezeiten zu vermeiden</i>). Verbi tipici: <i>erfolgen, erheben, gewähren</i>.",
      table: {
        head: ["stile nominale", "stile verbale"],
        rows: [
          ["Nach Abschluss der Arbeiten ...", "Nachdem die Arbeiten abgeschlossen sind, ..."],
          ["Bei Nichtbeachtung ...", "Wenn man das nicht beachtet, ..."],
          ["Zur Vermeidung von Wartezeiten ...", "Um Wartezeiten zu vermeiden, ..."],
          ["Vor Betreten der Baustelle ...", "Bevor man die Baustelle betritt, ..."],
          ["Die Antragstellung erfolgt online.", "Man stellt den Antrag online."]
        ]
      },
      examples: [
        { tr: "Al termine dei lavori la strada sarà riaperta.", note: "nach regge il dativo (Abschluss); der Arbeiten è il genitivo che dipende da Abschluss" },
        { tr: "In caso di mancata osservanza viene comminata una multa.", note: "bei Nichtbeachtung = wenn man die Vorschriften nicht beachtet" },
        { tr: "Per evitare attese si prega di prenotare un appuntamento.", note: "zur Vermeidung = um ... zu vermeiden" },
        { tr: "A causa della forte pioggia il concerto è stato annullato.", note: "wegen + genitivo al posto di weil" },
        { tr: "La domanda si presenta online.", note: "erfolgen: avvenire, tipico degli uffici" },
        { tr: "Prima di entrare nel cantiere è obbligatorio indossare il casco.", note: "vor Betreten + sein zu" }
      ]
    },
    vocab: [
      "il provvedimento, la comunicazione ufficiale",
      "la multa, la sanzione",
      "l'autorità, l'ente pubblico",
      "la competenza (di un ufficio)",
      "l'ordinanza, il decreto",
      "la mancata osservanza",
      "avvenire, aver luogo",
      "riscuotere (una tassa); infliggere (una multa)",
      "concedere",
      "richiedere (ufficialmente)",
      "competente",
      "secondo, conformemente a"
    ],
    exercises: [
      {
        q: "Leggi: «Bei Nichtbeachtung der Parkregeln wird ein Bußgeld erhoben.» Come lo spiegheresti a un amico?",
        opts: [
          "Wenn man sich nicht an die Parkregeln hält, muss man eine Strafe zahlen.",
          "Wer die Parkregeln nicht kennt, bekommt Geld zurück.",
          "Die Stadt beachtet die Parkregeln nicht."
        ],
        why: "<i>bei Nichtbeachtung</i> = «se non si rispettano»; <i>ein Bußgeld erheben</i> = «infliggere una multa». La prima frase dice lo stesso in stile verbale."
      },
      {
        q: "Quale gruppo nominale corrisponde a «Weil es stark regnete, ...»?",
        opts: [
          "Wegen des starken Regens ...",
          "Trotz des starken Regens ...",
          "Während des starken Regens ..."
        ],
        why: "<i>weil</i> esprime una causa: <b>wegen</b> + genitivo. <i>trotz</i> è concessivo, <i>während</i> temporale."
      },
      {
        q: "Scrivi un messaggio a un'amica sui lavori in casa. Quale frase è adatta al registro?",
        opts: [
          "Wir sehen uns, sobald die Arbeiten fertig sind.",
          "Nach Abschluss der Arbeiten erfolgt unser Wiedersehen.",
          "Bei Fertigstellung der Arbeiten wird ein Treffen durchgeführt."
        ],
        why: "Fra amici si usa lo stile verbale. Le altre due sono corrette ma in Amtsdeutsch, fuori luogo in un messaggio privato."
      },
      {
        q: "Completa l'avviso: «Die Antragstellung ___ ausschließlich online.»",
        hint: "verbo burocratico: «avviene»",
        why: "<b>erfolgt</b>: <i>erfolgen</i> è il verbo tipico degli uffici per «avvenire, aver luogo»."
      },
      {
        q: "Completa l'avviso del comune.",
        tr: "Gentili cittadine e cittadini, al termine dei lavori la strada sarà riaperta. Per evitare attese chiediamo di prenotare un appuntamento.",
        why: "<i>Nach Abschluss der Bauarbeiten</i>: <i>nach</i> + dativo, con il genitivo <i>der Bauarbeiten</i> che dipende da <i>Abschluss</i>. <i>Zur Vermeidung von Wartezeiten</i>: <i>zu</i> + dativo, con <i>von</i> + dativo al posto del genitivo. Tutti e due sostituiscono una secondaria."
      },
      {
        q: "Abbina ogni parola al suo significato.",
        pairs: [
          "il provvedimento, la comunicazione ufficiale",
          "l'autorità, l'ente pubblico",
          "la multa",
          "l'ordinanza"
        ]
      },
      {
        q: "Metti in ordine le parole del cartello.",
        tr: "Prima di entrare nel cantiere è obbligatorio indossare il casco.",
        why: "<i>Vor Betreten der Baustelle ist ein Helm aufzusetzen.</i> Gruppo nominale al primo posto, poi <i>ist</i>, e <i>aufzusetzen</i> in fondo."
      },
      {
        q: "Riformula in stile verbale, con una secondaria: «Nach Abschluss der Arbeiten wird die Straße freigegeben.»",
        why: "<i>Nachdem die Arbeiten abgeschlossen sind, wird die Straße freigegeben</i>: il genitivo <i>der Arbeiten</i> torna soggetto; vanno bene anche <i>sobald</i> o <i>wenn</i> e <i>abgeschlossen worden sind</i>."
      },
      {
        tr: "Gentili signore e signori, secondo la nuova ordinanza da maggio la domanda si presenta esclusivamente online. Per domande rivolgetevi all'ufficio competente.",
        why: "In <i>Verordnung</i> l'accento cade su <b>ord</b>; in <i>ausschließlich</i> l'accento cade su <b>aus</b>; in <i>zuständige</i> l'accento cade su <b>zu</b>."
      },
      {
        tr: "Il pagamento avviene tramite bonifico.",
        why: "In <i>Zahlung</i> la <b>a</b> è lunga e la <b>h</b> è muta; in <i>erfolgt</i> l'accento cade su <b>folgt</b>; in <i>Überweisung</i> l'accento cade su <b>wei</b>."
      }
    ]
  },
  "lesson:c1-u03-l2": {
    theme: "Conversazione spontanea",
    title: "Come si parla davvero",
    objectives: [
      "capire le particelle modali del parlato (doch, ja, mal, halt, eben)",
      "riconoscere le ellissi tipiche del parlato (Weiß ich nicht, Passt schon)",
      "rispondere in modo naturale in una conversazione informale",
      "distinguere il parlato dallo scritto formale"
    ],
    theory: [
      {
        h: "Le particelle cambiano il tono",
        p: "Nel parlato le particelle modali dicono come la pensa chi parla. <strong>doch</strong> incoraggia o ricorda (<em>Komm doch mit!</em>), <strong>ja</strong> presenta una cosa come nota o sorprendente (<em>Das hast du ja schon gesagt. Das ist ja toll!</em>), <strong>mal</strong> ammorbidisce una richiesta (<em>Hast du mal kurz Zeit?</em>), <strong>halt</strong> ed <strong>eben</strong> esprimono rassegnazione (<em>Das ist halt so</em>). Tolta la particella, la frase resta corretta ma perde quella sfumatura: una richiesta può suonare più brusca, un'esclamazione perde la sorpresa o il richiamo a ciò che entrambi sanno."
      },
      {
        h: "Ellissi e formule",
        p: "Il parlato lascia cadere ciò che si capisce dal contesto, spesso il soggetto o il <em>das</em> iniziale: <em>Weiß ich nicht</em> (= <em>Das weiß ich nicht</em>), <em>Kann sein</em>, <em>Passt schon</em>, <em>Mal sehen</em>. Sono normali fra amici e colleghi; in una lettera o in un esame scritto si usano le frasi complete."
      },
      {
        contrast: "L'italiano rende queste sfumature con l'intonazione o con parole come <em>dai</em>, <em>pure</em>, <em>mica</em>, <em>beh</em>: <em>Komm doch mit!</em> è vicino a «dai, vieni anche tu!», <em>Das ist halt so</em> a «è così, che ci vuoi fare». Non esiste un equivalente parola per parola: si impara la funzione."
      },
      {
        trap: "Le particelle non stanno al primo posto con questo valore: <em>Komm doch mit</em>, non <em>Doch komm mit</em>. E <em>doch</em> come risposta a una domanda negativa (<em>Kommst du nicht? – Doch!</em>) è un'altra cosa: significa «sì, invece»."
      },
      {
        tip: "Quando ascolti, nota dove cadono le particelle: di solito subito dopo il verbo e i pronomi, prima dell'informazione nuova. <em>Ich bin eigentlich ziemlich müde.</em>"
      }
    ],
    grammar: {
      title: "Particelle ed ellissi del parlato",
      note: "<b>doch</b>: incoraggia, ricorda. <b>ja</b>: cosa nota, sorpresa. <b>mal</b>: ammorbidisce. <b>halt / eben</b>: rassegnazione. Ellissi: <i>Weiß ich nicht, Kann sein, Passt schon</i>.",
      table: {
        head: ["particella o forma", "effetto", "esempio"],
        rows: [
          ["doch", "incoraggia, ricorda", "Komm doch mit!"],
          ["ja", "cosa nota, sorpresa", "Das ist ja unglaublich!"],
          ["mal", "ammorbidisce una richiesta", "Hast du mal kurz Zeit?"],
          ["halt, eben", "rassegnazione", "Das ist halt so."],
          ["ellissi", "si omette ciò che è chiaro", "Weiß ich nicht. Passt schon."]
        ]
      },
      examples: [
        { tr: "Dai, vieni anche tu!", note: "doch + einfach: invito" },
        { tr: "Ma è incredibile!", note: "ja: sorpresa" },
        { tr: "Hai un momento?", note: "mal: richiesta più gentile" },
        { tr: "Mah, può darsi.", note: "ellissi: Kann sein" },
        { tr: "Non lo so.", note: "ellissi: manca das" },
        { tr: "Va bene così, non importa.", note: "formula del parlato" }
      ]
    },
    vocab: [
      "la scusa, il pretesto",
      "l'allusione, l'accenno",
      "il tono (della voce)",
      "la frase fatta, la formula di cortesia",
      "il malinteso",
      "la lingua parlata, il registro colloquiale",
      "chiacchierare (colloquiale)",
      "darsi appuntamento",
      "chiedere di nuovo, informarsi",
      "in realtà, veramente",
      "comunque, in ogni caso",
      "è così e basta (presenta un fatto come inevitabile)"
    ],
    exercises: [
      {
        q: "Al bar un amico dice: «Komm doch mit!» Che cosa aggiunge doch?",
        opts: [
          "un invito incoraggiante",
          "un rimprovero",
          "un dubbio"
        ],
        why: "In una richiesta o in un invito <b>doch</b> incoraggia: «dai, vieni anche tu»."
      },
      {
        q: "Un collega dice: «Das hast du ja schon gestern gesagt.» Che cosa segnala ja?",
        opts: [
          "che la cosa è già nota a entrambi",
          "che non ci crede",
          "che sta facendo una domanda"
        ],
        why: "Qui <b>ja</b> presenta l'informazione come già nota: «l'hai già detto ieri, lo sappiamo»."
      },
      {
        q: "Un'amica ti chiede: «Kommst du heute Abend?» Quale risposta è più naturale nel parlato?",
        opts: [
          "Weiß ich noch nicht.",
          "Das Wissen darüber besitze ich noch nicht.",
          "Eine Entscheidung darüber ist noch nicht erfolgt."
        ],
        why: "Nel parlato si omette <i>das</i>: <b>Weiß ich noch nicht</b>. Le altre due sono stile burocratico, fuori luogo fra amici."
      },
      {
        q: "Completa: «Hast du ___ kurz Zeit?»",
        hint: "particella che rende gentile la richiesta",
        why: "<b>mal</b>: ammorbidisce la richiesta, come «un attimo»."
      },
      {
        q: "Completa: «Das ist ___ so, da kann man nichts machen.»",
        hint: "particella di rassegnazione",
        why: "<b>halt</b> (o <i>eben</i>): «è così, che ci vuoi fare»."
      },
      {
        q: "Completa il dialogo con eigentlich, doch ed echt.",
        tr: "«Vieni al cinema stasera?» «Non so, in realtà sono piuttosto stanco.» «Ma dai, vieni, il film è davvero fantastico!»",
        why: "<i>eigentlich</i> (in realtà), <i>doch</i> (incoraggia), <i>echt</i> o <i>wirklich</i> (davvero): tre parole tipiche del parlato."
      },
      {
        q: "Quali frasi sono tipiche del parlato informale?",
        opts: [
          "Weiß ich nicht.",
          "Passt schon.",
          "Bei Nichtbeachtung erfolgt eine Mahnung.",
          "Gemäß der Verordnung ist dies untersagt."
        ],
        why: "Le prime due sono ellissi del parlato. Le altre due sono Amtsdeutsch."
      },
      {
        q: "Traduci, in tono informale: «Dai, vieni anche tu, tanto vai comunque in centro!» (mitkommen, sowieso, in die Stadt gehen)",
        why: "<i>Komm doch mit, du gehst sowieso in die Stadt</i>: <i>doch</i> per l'invito, <i>sowieso</i> per «comunque»; si può aggiungere <i>ja</i> o <i>doch</i> davanti a <i>sowieso</i>."
      },
      {
        tr: "«Allora, com'è andata ieri?» «Ah, tutto sommato bene. Il film era un po' lungo, ecco, ma per il resto davvero fantastico.»",
        why: "In <i>eigentlich</i> l'accento cade su <b>ei</b>; in <i>bisschen</i> <b>ss</b> si pronuncia [s]; in <i>sonst</i> la <b>o</b> è breve."
      },
      {
        tr: "Dai, vieni anche tu, sarà sicuramente divertente!",
        why: "In <i>einfach</i> l'accento cade su <b>ein</b>; in <i>bestimmt</i> l'accento cade su <b>stimmt</b>; in <i>lustig</i> <b>g</b> finale si pronuncia [ç]."
      }
    ]
  },
  "lesson:c1-u03-l3": {
    theme: "Relazioni e presentazioni",
    title: "Coesione: darauf, dass ...",
    objectives: [
      "usare i correlativi darauf, daran, darüber prima di una secondaria",
      "usare es come anticipatore",
      "organizzare un testo con connettivi (zunächst, darüber hinaus, schließlich)",
      "collegare le frasi di un paragrafo con rinvii (dadurch, deshalb)"
    ],
    theory: [
      {
        h: "Annunciare una frase",
        p: "Quando un verbo regge una preposizione (<em>sich freuen auf, bestehen auf, sich einigen auf, hinweisen auf</em>) e il complemento è una frase, nella principale può comparire un avverbio pronominale che la annuncia; con alcuni verbi è obbligatorio (<em>bestehen auf</em>), con altri è facoltativo o cambia la sfumatura (<em>Ich freue mich, dass du kommst</em> esprime gioia per il fatto, <em>Ich freue mich darauf, dass du kommst</em> l'attesa di un evento futuro): <em>Er besteht <strong>darauf</strong>, dass wir bleiben. Wir haben uns <strong>darauf</strong> geeinigt, den Termin zu verschieben.</em> Senza preposizione, l'anticipatore può essere <strong>es</strong>: <em>Es ist wichtig, dass alle pünktlich sind.</em> Se la secondaria passa al primo posto, l'<em>es</em> soggetto sparisce: <em>Dass alle pünktlich sind, ist wichtig.</em>"
      },
      {
        h: "Tenere insieme un testo",
        p: "Un testo coeso guida chi legge. Per l'ordine: <em>zunächst, zuerst, dann, anschließend, schließlich</em>. Per aggiungere: <em>darüber hinaus, außerdem</em>. Per rinviare a ciò che si è detto: <em>dadurch, deshalb, dabei, darauf</em>: <em>Die Mieten steigen. Dadurch wird Wohnen für viele unbezahlbar.</em>"
      },
      {
        contrast: "In italiano la secondaria segue direttamente il verbo: <em>insiste perché restiamo</em>, <em>ci siamo accordati per rinviare</em>. In tedesco il verbo con preposizione spesso annuncia la frase con <em>darauf, daran, darüber</em>. Con alcuni verbi il correlativo è obbligatorio (<em>Er besteht darauf, dass wir bleiben</em>); con altri è facoltativo (<em>Wir haben uns (darauf) geeinigt, den Termin zu verschieben</em>), e nello scritto curato di solito si mette."
      },
      {
        trap: "L'avverbio pronominale prende la preposizione del verbo: <em>bestehen auf → darauf</em>, <em>denken an → daran</em>, <em>sich ärgern über → darüber</em>. <em>Er besteht daran, dass ...</em> è sbagliato."
      },
      {
        tip: "Impara i verbi con la loro preposizione e il loro avverbio insieme: <em>sich einigen auf / darauf</em>, <em>hinweisen auf / darauf</em>, <em>eingehen auf / darauf</em>. Nelle presentazioni compaiono di continuo."
      }
    ],
    grammar: {
      title: "Correlativi e connettivi testuali",
      note: "Verbo + preposizione + frase: <b>da(r)- + preposizione</b> nella principale (<i>darauf, dass ...</i>). Senza preposizione: <b>es</b> (<i>Es ist wichtig, dass ...</i>). Ordine del testo: <i>zunächst, dann, schließlich</i>; aggiunta: <i>darüber hinaus</i>.",
      table: {
        head: ["verbo", "correlativo", "esempio"],
        rows: [
          ["bestehen auf", "darauf", "Er besteht darauf, dass wir bleiben."],
          ["sich einigen auf", "darauf", "Wir haben uns darauf geeinigt, den Termin zu verschieben."],
          ["hinweisen auf", "darauf", "Ich weise darauf hin, dass die Frist endet."],
          ["denken an", "daran", "Denk daran, das Licht auszumachen."],
          ["wichtig sein", "es", "Es ist wichtig, dass alle pünktlich sind."]
        ]
      },
      examples: [
        { tr: "Non vedo l'ora che tu venga.", note: "sich freuen auf → darauf" },
        { tr: "È importante che tutti siano puntuali.", note: "es anticipa la secondaria" },
        { tr: "Ci siamo accordati per rinviare l'appuntamento.", note: "sich einigen auf → darauf + infinito" },
        { tr: "Insiste perché restiamo.", note: "bestehen auf → darauf" },
        { tr: "Questo punto è decisivo, per questo vorrei approfondirlo.", note: "eingehen auf → darauf" },
        { tr: "Inoltre ci sono altri problemi.", note: "darüber hinaus: aggiunge" }
      ]
    },
    vocab: [
      "il nesso, il contesto",
      "l'introduzione",
      "la conclusione, la fine",
      "il paragrafo, il capoverso",
      "il riferimento",
      "la struttura, lo schema (di un testo)",
      "accordarsi (auf: su)",
      "insistere (auf: su)",
      "approfondire, affrontare (auf: un tema)",
      "far notare, segnalare (auf: qualcosa)",
      "inoltre, oltre a ciò",
      "infine, alla fine"
    ],
    exercises: [
      {
        q: "Completa: «Er besteht ___, dass wir bleiben.»",
        opts: [
          "darauf",
          "daran",
          "dafür"
        ],
        why: "<i>bestehen auf</i>: il correlativo prende la stessa preposizione, <b>darauf</b>."
      },
      {
        q: "Quale frase è corretta?",
        opts: [
          "Dass alle pünktlich sind, ist wichtig.",
          "Dass alle pünktlich sind, ist es wichtig.",
          "Es, dass alle pünktlich sind, ist wichtig."
        ],
        why: "Quando la secondaria occupa il primo posto, l'<i>es</i> anticipatore soggetto sparisce."
      },
      {
        q: "In un saggio: «Die Mieten steigen. ___ wird Wohnen für viele Familien unbezahlbar.» Quale connettivo crea il legame giusto?",
        opts: [
          "Dadurch",
          "Trotzdem",
          "Stattdessen"
        ],
        why: "La seconda frase è una conseguenza della prima: <b>dadurch</b>, «in questo modo, per questo»."
      },
      {
        q: "Completa: «Wir haben uns ___ geeinigt, den Termin zu verschieben.»",
        hint: "sich einigen auf + frase",
        why: "<b>darauf</b>: annuncia l'infinito con <i>zu</i>."
      },
      {
        q: "Completa: «Auf diese Frage gehe ich später ___.»",
        hint: "particella di eingehen",
        why: "<b>ein</b>: <i>eingehen auf</i> è separabile, «approfondire, rispondere a»."
      },
      {
        q: "Completa lo schema della presentazione.",
        tr: "Prima vorrei descrivere il problema. Poi indico possibili soluzioni e infine traggo una conclusione.",
        why: "<i>Zuerst/Zunächst</i>, <i>Danach/Dann/Anschließend</i>, <i>schließlich/abschließend</i>: i connettivi guidano chi ascolta."
      },
      {
        q: "Abbina ogni parola al suo significato.",
        pairs: [
          "l'introduzione",
          "il paragrafo",
          "il nesso, il contesto",
          "la struttura (di un testo)"
        ]
      },
      {
        q: "Traduci: «(Lui) insiste perché tutti partecipino alla riunione.» (bestehen auf, die Besprechung)",
        why: "<i>Er besteht darauf, dass alle an der Besprechung teilnehmen</i>: <i>darauf</i> annuncia la secondaria; dove l'italiano usa il congiuntivo, il tedesco usa l'indicativo."
      },
      {
        tr: "Nella mia relazione affronto prima le cause. Inoltre vorrei far notare che ci sono già le prime soluzioni. Infine riassumo tutto brevemente.",
        why: "In <i>Vortrag</i> l'accento cade su <b>Vor</b>; in <i>Ursachen</i> l'accento cade su <b>Ur</b>; in <i>zusammen</i> l'accento cade su <b>sam</b>."
      },
      {
        tr: "Vorrei far notare che il termine scade domani.",
        why: "In <i>hinweisen</i> l'accento cade su <b>hin</b>; in <i>Frist</i> la <b>i</b> è breve; in <i>endet</i> la prima <b>e</b> è breve."
      }
    ]
  },
  "lesson:c1-u03-test": {
    theme: "Verifica",
    title: "Test: Registri e testualità",
    objectives: [
      "verificare l'unità e ripassare werden, i verbi di funzione e lo stile nominale delle unità 1-3"
    ],
    theory: [
      {
        p: "Dodici domande sull'unità e sulle unità 1-3. Si supera con il 70%. Non riguardare le lezioni mentre rispondi: se non ricordi qualcosa, meglio tornare indietro e ripassare."
      }
    ],
    exercises: [
      {
        q: "Completa: «Er ist Lehrer ___.»",
        hint: "participio di werden «diventare»",
        why: "<b>geworden</b>: verbo pieno, con <i>ge-</i>."
      },
      {
        q: "Completa: «Das neue Gesetz tritt im Mai in ___.»",
        hint: "entrare in vigore",
        why: "<b>Kraft</b>: <i>in Kraft treten</i>."
      },
      {
        q: "Completa l'avviso: «Die Zahlung ___ per Überweisung.»",
        hint: "avviene",
        why: "<b>erfolgt</b>: verbo tipico dell'Amtsdeutsch."
      },
      {
        q: "Completa: «Wir müssen noch eine Entscheidung ___.»",
        hint: "prendere (una decisione)",
        why: "<b>treffen</b>: <i>eine Entscheidung treffen</i> (nello stile formale anche <i>fällen</i>)."
      },
      {
        q: "Completa: «Sie besteht ___, dass wir pünktlich sind.»",
        hint: "correlativo di bestehen auf",
        why: "<b>darauf</b>: annuncia la secondaria."
      },
      {
        q: "Completa: «___ Abschluss der Arbeiten wird die Straße freigegeben.»",
        hint: "preposizione: «dopo»",
        why: "<b>Nach</b>: <i>nach</i> + dativo (<i>Abschluss</i>) al posto di <i>nachdem</i>; <i>der Arbeiten</i> è il genitivo che dipende dal nome."
      },
      {
        q: "Il collega non è ancora arrivato. Che cosa esprime «Er wird den Zug wohl verpasst haben»?",
        opts: [
          "una supposizione sul passato",
          "un futuro",
          "un passivo"
        ],
        why: "Futur II con valore di <b>supposizione</b>: «avrà perso il treno»."
      },
      {
        q: "Quale gruppo nominale corrisponde a «Um die Kosten zu senken, ...»?",
        opts: [
          "Zur Senkung der Kosten ...",
          "Bei Senkung der Kosten ...",
          "Trotz Senkung der Kosten ..."
        ],
        why: "Lo scopo (<i>um ... zu</i>) si rende con <b>zu</b> + nome: <i>zur Senkung der Kosten</i>."
      },
      {
        q: "Al telefono una collega dice: «Das ist halt so.» Che atteggiamento esprime?",
        opts: [
          "rassegnazione",
          "entusiasmo",
          "rimprovero"
        ],
        why: "<i>halt</i> segnala che la cosa non si può cambiare: <b>rassegnazione</b>."
      },
      {
        q: "In un regolamento: quale frase esprime un obbligo?",
        opts: [
          "Der Ausweis ist stets mitzuführen.",
          "Der Ausweis lässt sich mitführen.",
          "Der Ausweis ist mitgeführt."
        ],
        why: "<b>sein + zu</b> in un regolamento esprime un obbligo: «il documento va portato sempre con sé»."
      },
      {
        q: "Riformula in stile nominale: «Weil es stark regnete, wurde das Konzert abgesagt.»",
        why: "<i>Wegen des starken Regens wurde das Konzert abgesagt</i>: <i>wegen</i> (o <i>aufgrund</i>) + genitivo al posto di <i>weil</i>."
      },
      {
        tr: "Al termine dei lavori la strada sarà riaperta.",
        why: "In <i>Abschluss</i> l'accento cade su <b>Ab</b>; in <i>Arbeiten</i> l'accento cade su <b>Ar</b>; in <i>freigegeben</i> l'accento cade su <b>frei</b>."
      }
    ]
  }
});
