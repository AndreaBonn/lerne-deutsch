/* ============================================================
   Learner-language text (it) for data/core/c1-03.js, unit c1-u05.
   Keys point at ids in the neutral layer; arrays merge by index,
   so their length has to match core.
   Checked by scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("it", {
  "unit:c1-u05": {
    title: "Finito il lavoro",
    grammarNote: "Participio I e II come attributo (attributo ampliato con moderazione; il tipo completo e il Gerundivum sono del C2) · nominalizzazione al posto della subordinata (nach Abschluss, wegen, bei, trotz, zur, infolge) · casi in cui la subordinata deve restare (nessun nome adatto, più soggetti, sfumatura modale, leggibilità)"
  },
  "lesson:c1-u05-l1": {
    theme: "Verbali, rapporti e testi accademici",
    title: "Partizip I e II come attributo",
    objectives: [
      "usare il participio I (attivo, simultaneo) e il participio II (passivo o concluso) davanti a un nome",
      "scegliere la desinenza giusta dopo l'articolo",
      "costruire un attributo ampliato breve (im Protokoll festgehaltenen Beschlüsse)",
      "riconoscere quando un attributo troppo lungo va sciolto in una relativa"
    ],
    theory: [
      {
        h: "Il participio davanti al nome",
        p: "Nei testi formali una relativa si comprime in un participio posto davanti al nome, che prende la desinenza di un aggettivo. Il <strong>participio I</strong> (infinito + <em>-d</em>) è attivo e contemporaneo: <em>die steigenden Kosten</em> = <em>die Kosten, die steigen</em>. Il <strong>participio II</strong> di un verbo transitivo è passivo e concluso: <em>die geprüften Unterlagen</em> = <em>die Unterlagen, die geprüft wurden</em>. Il participio II di un verbo intransitivo (con <em>sein</em>) è invece attivo e concluso: <em>die gestiegenen Kosten</em> = <em>die Kosten, die gestiegen sind</em>."
      },
      {
        h: "L'attributo ampliato, con moderazione",
        p: "Tra l'articolo e il nome possono stare anche complementi, ma il participio resta sempre <strong>subito prima del nome</strong>: <em>die im letzten Quartal erzielten Umsätze</em>. Nei verbali e nei rapporti basta un complemento o due; oltre, il lettore perde il filo e la relativa è la scelta migliore. Il tipo con <em>zu</em> (<em>die zu prüfenden Unterlagen</em>) e le costruzioni più lunghe appartengono al C2."
      },
      {
        contrast: "L'italiano mette il participio <strong>dopo</strong> il nome e il complemento lo segue: <em>i risultati ottenuti nel secondo trimestre</em>, <em>i dati raccolti dall'ufficio</em>. In tedesco tutto ciò che nell'italiano seguirebbe il participio passa <strong>davanti</strong> al nome, in mezzo fra articolo e participio: <em>die vom Amt erhobenen Daten</em>. Il participio presente italiano è raro (<em>le spese crescenti</em>, più spesso <em>in aumento</em>), mentre <em>steigend, laufend, vorliegend</em> sono ovunque nella lingua scritta."
      },
      {
        trap: "<em>die prüfenden Unterlagen</em> non è «i documenti esaminati»: sono documenti che <em>esaminano</em> qualcosa. Per il senso passivo ci vuole il participio II, <em>die geprüften Unterlagen</em>. E non scambiare i due tempi: <em>die steigenden Kosten</em> aumentano ancora, <em>die gestiegenen Kosten</em> sono già aumentate. Poi la desinenza: dopo <em>die</em> al plurale è <em>-en</em>, quindi <em>die geprüften Unterlagen</em>, mai <em>die geprüfte Unterlagen</em>."
      },
      {
        tip: "Per capire un participio, o per sceglierlo, scioglilo in una relativa: se il verbo alla relativa è al presente attivo (<em>die steigen</em>) serve il participio I; se è un passivo (<em>die geprüft wurden</em>) o un perfetto con <em>sein</em> (<em>die gestiegen sind</em>) serve il participio II."
      }
    ],
    grammar: {
      title: "Participio I e II come attributo",
      note: "<b>Participio I</b> = infinito + <i>-d</i>: attivo, contemporaneo. <b>Participio II</b>: passivo e concluso (verbi transitivi), attivo e concluso (intransitivi con <i>sein</i>). Sempre davanti al nome, con la desinenza dell'aggettivo; i complementi vanno tra articolo e participio.",
      table: {
        head: ["participio", "senso", "relativa corrispondente", "esempio"],
        rows: [
          ["participio I", "attivo, contemporaneo", "die Kosten, die steigen", "die steigenden Kosten"],
          ["participio II (transitivo)", "passivo, concluso", "die Unterlagen, die geprüft wurden", "die geprüften Unterlagen"],
          ["participio II (intransitivo)", "attivo, concluso", "die Kosten, die gestiegen sind", "die gestiegenen Kosten"],
          ["attributo ampliato", "complemento davanti al participio", "die Umsätze, die im Quartal erzielt wurden", "die im Quartal erzielten Umsätze"]
        ]
      },
      examples: [
        { tr: "I costi energetici in aumento gravano sulle famiglie.", note: "participio I: l'aumento è in corso" },
        { tr: "I costi aumentati sono illustrati nella relazione.", note: "participio II di verbo intransitivo: attivo e concluso" },
        { tr: "I documenti verificati sono allegati al fascicolo.", note: "participio II transitivo: passivo, «sono stati verificati»" },
        { tr: "I membri che partecipano alla seduta hanno approvato la richiesta.", note: "participio I con complemento: an der Sitzung teilnehmenden" },
        { tr: "Il bilancio approvato dal consiglio di amministrazione entra in vigore a gennaio.", note: "vom Vorstand verabschiedete: il complemento d'agente sta prima del participio" },
        { tr: "I ricavi ottenuti nell'ultimo trimestre sono stati superiori alle attese.", note: "attributo ampliato breve: im letzten Quartal erzielten" }
      ]
    },
    vocab: [
      "il verbale",
      "la trattativa, le trattative",
      "la delibera, la decisione",
      "il documento, la documentazione",
      "il fatturato, i ricavi",
      "il bilancio preventivo",
      "approvare (un testo o un bilancio)",
      "ottenere, conseguire (un risultato)",
      "mettere a verbale, fissare per iscritto",
      "in corso, corrente",
      "qui presente, in oggetto",
      "in sospeso, ancora da pagare"
    ],
    exercises: [
      {
        q: "In un rapporto trimestrale si legge una volta «die steigenden Kosten» e una volta «die gestiegenen Kosten». Che differenza di senso c'è?",
        opts: [
          "steigenden: l'aumento è in corso; gestiegenen: l'aumento è già avvenuto",
          "steigenden: l'aumento è già avvenuto; gestiegenen: l'aumento è in corso",
          "nessuna: sono varianti libere con lo stesso significato"
        ],
        why: "Il participio I (<i>steigend</i>) è attivo e <b>contemporaneo</b>: i costi stanno aumentando. Il participio II di <i>steigen</i> (<i>gestiegen</i>) è <b>concluso</b>: l'aumento c'è già stato. Per questo non sono intercambiabili."
      },
      {
        q: "Da un verbale: «Der vom Gemeinderat ___ Haushaltsplan tritt am 1. Januar in Kraft.» Quale forma completa la frase?",
        opts: [
          "verabschiedete",
          "verabschiedende",
          "verabschiedeten"
        ],
        why: "Il bilancio non approva nulla, <b>viene approvato</b>: serve il participio II (passivo), quindi <i>verabschiedete</i>. <i>verabschiedende</i> sarebbe attivo, e <i>verabschiedeten</i> ha la desinenza sbagliata: dopo <i>der</i> al nominativo maschile singolare è <b>-e</b>."
      },
      {
        q: "In una relazione finanziaria: «Die ___ Umsätze lagen über den Erwartungen.» Quale attributo ampliato è corretto?",
        opts: [
          "im vierten Quartal erzielten",
          "im vierten Quartal erzielte",
          "erzielten im vierten Quartal"
        ],
        why: "Il participio sta subito davanti al nome e dopo <i>die</i> al plurale prende <b>-en</b>: <i>die im vierten Quartal erzielten Umsätze</i>. <i>erzielte</i> ha la desinenza sbagliata; in <i>erzielten im vierten Quartal</i> il complemento sta dopo il participio, ordine possibile in italiano ma non in tedesco."
      },
      {
        q: "Completa con il participio II di prüfen e la desinenza giusta: «Die vom Ausschuss ___ Unterlagen werden archiviert.»",
        hint: "participio II di prüfen, plurale dopo die",
        why: "<b>geprüften</b>: participio II passivo («i documenti che sono stati verificati»), con <b>-en</b> dopo <i>die</i> al plurale."
      },
      {
        q: "Completa con il participio I di gelten e la desinenza giusta: «Wir bitten um Beachtung der ___ Vorschriften.»",
        hint: "participio I di gelten, genitivo plurale dopo der",
        why: "<b>geltenden</b>: participio I (attivo, contemporaneo: «le norme in vigore»), <b>-en</b> al genitivo plurale dopo <i>der</i>."
      },
      {
        q: "Completa il passaggio di un rapporto con il participio II e il participio I.",
        tr: "Le misure adottate l'anno scorso non hanno ridotto i costi in costante aumento.",
        why: "<i>ergriffenen</i> (o <i>getroffenen</i>): participio II passivo, «le misure che sono state adottate». <i>steigenden</i>: participio I, perché l'aumento è ancora in corso. Tutti e due prendono <b>-en</b> dopo <i>die</i> al plurale."
      },
      {
        q: "Quali frasi usano correttamente un participio come attributo? (due risposte)",
        opts: [
          "Die an der Sitzung teilnehmenden Mitglieder stimmten dem Antrag zu.",
          "Die am Dienstag eingereichten Unterlagen sind vollständig.",
          "Die einreichenden Unterlagen sind vollständig.",
          "Die eingereichte Unterlagen sind vollständig."
        ],
        why: "Le prime due sono corrette: participio I attivo (i membri <i>che partecipano</i>) e participio II passivo (i documenti <i>che sono stati presentati</i>). <i>einreichenden</i> darebbe ai documenti un ruolo attivo, e in <i>eingereichte</i> manca il <b>-n</b> dopo <i>die</i> al plurale."
      },
      {
        q: "Metti in ordine le parole della frase di un verbale.",
        tr: "Le decisioni messe a verbale sono vincolanti per tutti i reparti.",
        why: "<i>Die im Protokoll festgehaltenen Beschlüsse sind für alle Abteilungen verbindlich.</i> L'attributo <i>im Protokoll festgehaltenen</i> resta compatto fra <i>die</i> e <i>Beschlüsse</i>. Sono possibili anche <i>verbindlich für alle Abteilungen</i> e l'inversione con <i>Für alle Abteilungen</i> in testa."
      },
      {
        q: "Traduci usando un attributo ampliato: «I risultati ottenuti nel secondo trimestre sono stati discussi nella riunione.» (das Quartal, das Ergebnis, erzielen, die Sitzung, besprechen)",
        why: "<i>Die im zweiten Quartal erzielten Ergebnisse wurden in der Sitzung besprochen.</i> Sono accettati anche il Perfekt passivo (<i>sind ... besprochen worden</i>) e l'inversione con <i>In der Sitzung</i> in testa. Il complemento <i>im zweiten Quartal</i> va davanti al participio."
      },
      {
        tr: "Le decisioni messe a verbale valgono da subito. Le trattative in corso saranno concluse in autunno e i costi aumentati continuano a gravare sul bilancio.",
        why: "In <i>Protokoll</i> l'accento cade su <b>koll</b>; in <i>Verhandlungen</i> l'accento cade su <b>hand</b>; in <i>abgeschlossen</i> l'accento cade su <b>schlos</b>; in <i>Haushalt</i> l'accento cade su <b>Haus</b>."
      },
      {
        tr: "I ricavi ottenuti nell'ultimo trimestre sono stati superiori alle attese.",
        why: "In <i>Quartal</i> l'accento cade su <b>tal</b>; in <i>Umsätze</i> l'accento cade su <b>Um</b>; in <i>Erwartungen</i> l'accento cade su <b>war</b>."
      }
    ]
  },
  "lesson:c1-u05-l2": {
    theme: "Comunicati, avvisi e relazioni",
    title: "Nominalizzazione al posto della subordinata",
    objectives: [
      "trasformare una subordinata in un gruppo nominale con la preposizione adatta",
      "scegliere fra nach, wegen, bei, trotz, zu, infolge secondo il rapporto logico",
      "usare il genitivo e le desinenze dopo queste preposizioni",
      "riconoscere la subordinata nascosta in un gruppo nominale"
    ],
    theory: [
      {
        h: "Dalla subordinata al nome",
        p: "Nei testi formali una subordinata si può comprimere: il verbo diventa un nome (<em>abschließen</em> → <em>der Abschluss</em>), la congiunzione diventa una preposizione, soggetto e oggetto del verbo passano a un genitivo. <em>Nachdem die Prüfung abgeschlossen ist, ...</em> → <em>Nach Abschluss der Prüfung ...</em>. La preposizione dipende dal <strong>rapporto logico</strong>: causa (<em>weil</em> → <em>wegen, aufgrund, infolge</em> + genitivo), concessione (<em>obwohl</em> → <em>trotz, ungeachtet</em> + genitivo), condizione (<em>wenn</em> → <em>bei</em> + dativo), tempo (<em>nachdem</em> → <em>nach</em> + dativo), scopo (<em>um ... zu</em> → <em>zu</em> + dativo)."
      },
      {
        h: "Che cosa si perde",
        p: "Il gruppo nominale è compatto ma più povero: scompaiono il tempo verbale, il modo e spesso chi agisce. <em>Nach Abschluss der Prüfung</em> non dice chi ha concluso né se si parla del passato o del futuro, lo deduci dal contesto. Per questo funziona bene quando soggetto e tempo sono ovvi, e male quando non lo sono (vedi la lezione 3)."
      },
      {
        contrast: "Anche l'italiano nominalizza (<em>a seguito della conclusione dei lavori</em>, <em>in caso di necessità</em>, <em>per il chiarimento di questioni aperte</em>), ma può usare l'infinito o il gerundio (<em>dopo aver concluso</em>), che in tedesco non esistono. In tedesco ciò che segue il nome è un <strong>genitivo senza preposizione</strong> (<em>die Klärung offener Fragen</em>) e le preposizioni di causa e concessione reggono il genitivo, con le desinenze che ne derivano: <em>offener Fragen</em> senza articolo, <em>der gestiegenen Preise</em> con l'articolo."
      },
      {
        trap: "Una preposizione sbagliata cambia il rapporto logico: <em>Nach mehrfacher Mahnung blieb die Zahlung aus</em> dice che il pagamento manca <em>dopo</em> i solleciti, mentre <em>Trotz mehrfacher Mahnung</em> dice che manca <em>nonostante</em> i solleciti. Attenzione anche ai casi: <em>infolge</em> e <em>trotz</em> vogliono il genitivo (<em>Infolge der gestiegenen Preise</em>), non il dativo."
      },
      {
        tip: "Davanti a un gruppo nominale chiediti quale congiunzione si nasconde: causa → <em>weil</em>, concessione → <em>obwohl</em>, condizione → <em>wenn</em>, tempo → <em>nachdem, bevor</em>, scopo → <em>um ... zu</em>. Poi riscrivilo come subordinata e controlla che il senso non cambi."
      }
    ],
    grammar: {
      title: "Nominalizzazione al posto della subordinata",
      note: "Il verbo diventa un nome, la congiunzione una preposizione: <b>nach, bei, zu</b> + dativo; <b>wegen, aufgrund, infolge, trotz</b> + genitivo. Soggetto e oggetto del verbo passano a un genitivo.",
      table: {
        head: ["subordinata", "gruppo nominale", "esempio"],
        rows: [
          ["weil ... (causa)", "wegen, aufgrund, infolge + genitivo", "Wegen der Verzögerung ..."],
          ["obwohl ... (concessione)", "trotz, ungeachtet + genitivo", "Trotz mehrfacher Mahnung ..."],
          ["wenn ... (condizione)", "bei + dativo", "Bei Bedarf ..."],
          ["nachdem ... (tempo)", "nach + dativo", "Nach Abschluss der Prüfung ..."],
          ["um ... zu (scopo)", "zu + dativo", "Zur Klärung offener Fragen ..."]
        ]
      },
      examples: [
        { tr: "Dopo la conclusione della verifica la relazione sarà pubblicata.", note: "nach + dativo = nachdem; der Prüfung è il genitivo che dipende da Abschluss" },
        { tr: "A causa del ritardo della consegna la data ha dovuto essere rinviata.", note: "wegen + genitivo = weil" },
        { tr: "Se necessario si possono richiedere altri documenti.", note: "bei + dativo = wenn man es braucht" },
        { tr: "Nonostante ripetuti solleciti il pagamento non è arrivato.", note: "trotz + genitivo; mehrfacher: genitivo femminile senza articolo" },
        { tr: "Per chiarire le questioni aperte viene convocata una riunione.", note: "zu + dativo = um ... zu klären; offener Fragen: genitivo plurale senza articolo" },
        { tr: "A seguito dell'aumento dei prezzi dell'energia la domanda è calata.", note: "infolge + genitivo: causa che produce un effetto" }
      ]
    },
    vocab: [
      "la conclusione, la fine",
      "il ritardo",
      "il fabbisogno, la necessità",
      "il sollecito, il richiamo",
      "il chiarimento",
      "la domanda (di mercato)",
      "richiedere, sollecitare (documenti)",
      "convocare",
      "mancare, non arrivare",
      "pubblicare",
      "a seguito di, in conseguenza di",
      "a causa di, in base a"
    ],
    exercises: [
      {
        q: "In una lettera: «Obwohl mehrfach gemahnt wurde, blieb die Zahlung aus.» Quale versione nominale ha lo stesso senso?",
        opts: [
          "Trotz mehrfacher Mahnung blieb die Zahlung aus.",
          "Nach mehrfacher Mahnung blieb die Zahlung aus.",
          "Wegen mehrfacher Mahnung blieb die Zahlung aus."
        ],
        why: "<i>obwohl</i> è concessivo: <b>trotz</b> + genitivo. <i>nach</i> sarebbe un rapporto temporale («dopo i solleciti») e <i>wegen</i> farebbe dei solleciti la causa del mancato pagamento."
      },
      {
        q: "In un comunicato stampa. Quale frase è corretta?",
        opts: [
          "Infolge der gestiegenen Energiepreise sank die Nachfrage.",
          "Infolge den gestiegenen Energiepreisen sank die Nachfrage.",
          "Infolge die gestiegenen Energiepreise sank die Nachfrage."
        ],
        why: "<i>infolge</i> regge il <b>genitivo</b>: <i>der gestiegenen Energiepreise</i>, plurale con articolo e desinenza <b>-en</b>. Dativo e accusativo non sono ammessi."
      },
      {
        q: "Quale subordinata corrisponde a «Bei Bedarf können weitere Unterlagen angefordert werden»?",
        opts: [
          "Wenn weitere Unterlagen benötigt werden, können sie angefordert werden.",
          "Weil weitere Unterlagen benötigt wurden, können sie angefordert werden.",
          "Obwohl weitere Unterlagen benötigt werden, können sie angefordert werden."
        ],
        why: "<i>bei Bedarf</i> esprime una <b>condizione</b>: «se serve». Corrisponde a <i>wenn</i> (o <i>falls</i>). <i>weil</i> e <i>obwohl</i> darebbero una causa o una concessione."
      },
      {
        q: "Completa con la preposizione concessiva: «___ mehrfacher Erinnerung ist die Zahlung nicht eingegangen.»",
        hint: "preposizione concessiva: «nonostante»",
        why: "<b>Trotz</b> (o la variante più formale <b>Ungeachtet</b>) + genitivo: <i>mehrfacher Erinnerung</i>."
      },
      {
        q: "Completa con la desinenza dell'aggettivo: «Zur Klärung ___ Fragen wird eine Sitzung einberufen.»",
        hint: "aggettivo «offen» al genitivo plurale, senza articolo",
        why: "<b>offener</b>: dopo <i>zu</i> si ha il dativo (<i>zur Klärung</i>), ma <i>Fragen</i> dipende da <i>Klärung</i> ed è un genitivo plurale senza articolo, quindi l'aggettivo prende <b>-er</b>."
      },
      {
        q: "Completa il comunicato con le due preposizioni.",
        tr: "A causa del ritardo della consegna la data ha dovuto essere rinviata. Se necessario sarà concordata una nuova data.",
        why: "<i>Wegen</i> (o <i>Aufgrund</i>, <i>Infolge</i>) + genitivo per la causa. <i>Bei Bedarf</i> per la condizione; in questo contesto va bene anche <i>Nach Bedarf</i>, «secondo necessità»."
      },
      {
        q: "Abbina ogni espressione al suo significato.",
        pairs: [
          "a seguito di, in conseguenza di",
          "nonostante",
          "se necessario",
          "alla luce di, visto che"
        ]
      },
      {
        q: "Metti in ordine le parole dell'invito.",
        tr: "Per chiarire le questioni aperte viene convocata una riunione.",
        why: "<i>Zur Klärung offener Fragen wird eine Sitzung einberufen.</i> Il gruppo nominale con <i>zur</i> apre la frase e il verbo finito è in seconda posizione. Va bene anche <i>Eine Sitzung wird zur Klärung offener Fragen einberufen</i>."
      },
      {
        q: "Traduci in stile nominale: «Se necessario si possono richiedere ulteriori documenti.» (der Bedarf, die Unterlagen, anfordern)",
        why: "<i>Bei Bedarf können weitere Unterlagen angefordert werden.</i> Sono accettate la posizione di <i>bei Bedarf</i> dopo il soggetto e la forma con <i>man</i>."
      },
      {
        tr: "Dopo la conclusione della verifica la relazione sarà pubblicata. Se necessario si possono richiedere altri documenti. Per chiarire le questioni aperte la direzione del progetto è volentieri a disposizione.",
        why: "In <i>Abschluss</i> l'accento cade su <b>Ab</b>; in <i>veröffentlicht</i> l'accento cade su <b>öf</b>; in <i>Klärung</i> l'accento cade su <b>Klä</b>."
      },
      {
        tr: "Nonostante ripetuti solleciti il pagamento non è arrivato.",
        why: "In <i>mehrfacher</i> l'accento cade su <b>mehr</b>; in <i>Erinnerung</i> l'accento cade su <b>in</b>; in <i>eingegangen</i> l'accento cade su <b>gan</b>."
      }
    ]
  },
  "lesson:c1-u05-l3": {
    theme: "Leggibilità e precisione",
    title: "Quando la subordinata resta",
    objectives: [
      "riconoscere i casi in cui la nominalizzazione non conviene",
      "mantenere la subordinata quando ci sono più soggetti o più condizioni",
      "rendere con la subordinata le sfumature modali (sollte, falls ... sollten)",
      "scegliere fra forma compatta e subordinata pensando al lettore"
    ],
    theory: [
      {
        h: "I quattro casi in cui la subordinata resta",
        p: "La forma compatta non è sempre la migliore. La subordinata è preferibile quando: (1) <strong>non c'è un nome adatto</strong> o il nome suona innaturale; (2) ci sono <strong>più soggetti</strong> o più predicati, e il gruppo nominale nasconderebbe chi fa che cosa: <em>weil der Vorsitzende erkrankt war und die Referentin im Ausland festsaß</em>; (3) serve una <strong>sfumatura modale</strong> o di probabilità (<em>sollte, könnte, offenbar, nur dann ..., wenn</em>), che un nome non esprime; (4) la <strong>leggibilità</strong> ne soffre, per esempio con più genitivi e complementi in fila."
      },
      {
        h: "Come scegliere",
        p: "Prima di nominalizzare fai quattro domande. Chi agisce, e il nome lo dice? Esiste un nome naturale (<em>Abschluss, Klärung</em>)? Devo mantenere un tempo o un modo? Il lettore ci arriva alla prima lettura? Se rispondi sì a tutte, la forma compatta funziona (<em>Nach Abschluss der Prüfung ...</em>), altrimenti la subordinata è più chiara, e nei testi destinati a un pubblico non specialistico lo è quasi sempre."
      },
      {
        contrast: "L'italiano ha strumenti compatti che il tedesco non ha: <em>dopo aver concluso</em>, <em>a lavori ultimati</em>, <em>qualora la verifica dovesse durare di più</em>. In tedesco il gerundio manca e l'infinito con <em>ohne zu</em> o <em>um ... zu</em> richiede lo stesso soggetto: quando i soggetti sono due serve una subordinata con <em>dass</em> o <em>weil</em>. La sfumatura di <em>qualora ... dovesse</em> si rende con <em>Sollte die Prüfung länger dauern, ...</em> o <em>falls ... ändern sollten</em>."
      },
      {
        trap: "Non nominalizzare tutto solo perché «suona formale»: il risultato è un tedesco da ufficio difficile da leggere, e un nome come <em>seitens der Teilnehmenden</em> nasconde il soggetto. E <em>sollte</em> in prima posizione non è «dovrebbe» di obbligo: <em>Sollte die Prüfung länger dauern</em> significa «se mai la verifica dovesse durare di più», una condizione poco probabile."
      },
      {
        tip: "Leggi la frase ad alta voce. Se in mezzo a un gruppo nominale devi riprendere fiato, perché ci sono due genitivi e un <em>durch</em>, spezzala in una subordinata."
      }
    ],
    grammar: {
      title: "Forma compatta o subordinata",
      note: "Forma compatta: stesso soggetto, nome naturale, tempo ovvio. Subordinata: più soggetti, nessun nome adatto, sfumatura modale, genitivi in fila. Per l'eventualità: <i>Sollte ..., falls ... sollten</i>.",
      table: {
        head: ["situazione", "scelta", "esempio"],
        rows: [
          ["stesso soggetto, nome naturale", "forma compatta", "Nach Abschluss der Prüfung ..."],
          ["due soggetti o più predicati", "subordinata", "..., weil der Vorsitzende erkrankt war und die Referentin festsaß."],
          ["sfumatura modale o di probabilità", "subordinata con sollte", "Sollte die Prüfung länger dauern, ..."],
          ["più condizioni insieme", "subordinata", "..., wenn der Vorstand zugestimmt hat und die Finanzierung gesichert ist."],
          ["genitivi e complementi in fila", "subordinata", "..., nachdem die Teilnehmenden den Fragebogen ausgefüllt hatten."]
        ]
      },
      examples: [
        { tr: "La seduta è stata rinviata perché il presidente era malato e la relatrice era bloccata all'estero.", note: "due soggetti: la forma nominale nasconderebbe uno dei due" },
        { tr: "Il contratto sarà firmato solo quando il consiglio avrà approvato e il finanziamento sarà assicurato.", note: "due condizioni con verbi diversi: subordinata" },
        { tr: "Se la verifica dovesse durare più a lungo, la data sarà rinviata.", note: "Sollte in prima posizione: eventualità poco probabile" },
        { tr: "Il finanziamento decade se le condizioni quadro dovessero cambiare.", note: "falls ... ändern sollten: sfumatura modale" },
        { tr: "I risultati sono significativi solo se il campione è rappresentativo.", note: "nur dann ..., wenn: condizione necessaria, non rendibile con bei" },
        { tr: "La valutazione è iniziata dopo che i partecipanti avevano compilato il questionario.", note: "subordinata temporale al trapassato: più leggibile di una catena di genitivi" }
      ]
    },
    vocab: [
      "la comprensibilità",
      "il presupposto, il requisito",
      "le condizioni quadro",
      "il campione (statistico)",
      "il presidente (di una seduta)",
      "il richiedente",
      "lasciar scadere, non rispettare (un termine)",
      "decadere, venire meno",
      "approvare, dare il consenso",
      "respingere, rifiutare",
      "significativo, attendibile",
      "rappresentativo"
    ],
    exercises: [
      {
        q: "In un verbale: «Die Sitzung wurde verschoben, weil der Vorsitzende erkrankt war und die Referentin im Ausland festsaß.» Perché qui è meglio mantenere la subordinata?",
        opts: [
          "Ci sono due soggetti diversi con il loro predicato: in forma nominale uno dei due attori scomparirebbe o la frase diventerebbe pesante",
          "Perché una causa non può mai essere espressa con un gruppo nominale",
          "Perché il passato (war, festsaß) non si può esprimere con un nome"
        ],
        why: "Una causa si può nominalizzare (<i>wegen</i> + genitivo), ma qui i fatti sono <b>due</b>, con soggetti diversi: la forma nominale li comprimerebbe in modo pesante o ne perderebbe uno. Le altre due affermazioni sono false."
      },
      {
        q: "«Sollte die Prüfung länger dauern, wird der Termin verschoben.» Che cosa si perde con la versione nominale «Bei längerer Dauer der Prüfung wird der Termin verschoben»?",
        opts: [
          "la sfumatura di eventualità poco probabile espressa da sollte",
          "il valore condizionale della frase",
          "il soggetto, perché Prüfung sparisce"
        ],
        why: "<i>bei</i> mantiene la <b>condizione</b>, e <i>Prüfung</i> è ancora nel testo. Si perde la sfumatura modale di <i>sollte</i> («se mai dovesse»), che un nome non può portare."
      },
      {
        q: "In un rapporto per un pubblico non specialistico, quale formulazione è la più leggibile?",
        opts: [
          "Die Auswertung begann, nachdem die Teilnehmenden den Fragebogen ausgefüllt hatten, den die Projektleitung entwickelt hatte.",
          "Die Auswertung begann nach dem Ausfüllen des von der Projektleitung entwickelten Fragebogens durch die Teilnehmenden.",
          "Die Auswertung begann nach Ausfüllung des durch die Projektleitung entwickelten Fragebogens seitens der Teilnehmenden."
        ],
        why: "Le tre frasi sono grammaticali, ma nelle ultime due il lettore deve tenere insieme genitivo, participio ampliato e complemento d'agente (<i>durch, seitens</i>) prima di arrivare al senso. La subordinata dice <b>chi fa che cosa</b> in due passi."
      },
      {
        q: "Completa: «Die Ergebnisse sind nur dann aussagekräftig, ___ die Stichprobe repräsentativ ist.»",
        hint: "congiunzione condizionale",
        why: "<b>wenn</b>: <i>nur dann ..., wenn</i> esprime una condizione necessaria. Con un gruppo nominale (<i>bei repräsentativer Stichprobe</i>) la forza di <i>nur dann</i> si perde."
      },
      {
        q: "Completa con il verbo modale: «Falls sich die Rahmenbedingungen ändern ___, entfällt die Förderung.»",
        hint: "Konjunktiv II di un modale: eventualità poco probabile",
        why: "<b>sollten</b>: <i>falls ... sollten</i> segnala un'eventualità remota, la sfumatura che in forma nominale non si può rendere."
      },
      {
        q: "Completa le due condizioni di un contratto.",
        tr: "Il contratto sarà firmato solo quando il consiglio avrà approvato e il finanziamento sarà assicurato.",
        why: "<i>wenn</i> (o <i>sobald</i>, <i>nachdem</i>) per la prima condizione, <i>ist</i> per la seconda: <i>die Finanzierung gesichert ist</i>. Due condizioni con soggetti diversi sono un buon motivo per tenere la subordinata."
      },
      {
        q: "In quali casi conviene mantenere la subordinata? (due risposte)",
        opts: [
          "quando i soggetti sono due persone diverse e il nome nasconderebbe chi agisce",
          "quando serve una sfumatura modale come sollte, könnte, offenbar",
          "ogni volta che il testo è un verbale ufficiale",
          "ogni volta che la frase contiene un verbo"
        ],
        why: "I due criteri sono i soggetti multipli e la sfumatura modale. Un verbale ufficiale ammette stile nominale (anzi, lo usa volentieri), e il fatto che una frase abbia un verbo non dice nulla sulla scelta."
      },
      {
        q: "Metti in ordine le parole della frase.",
        tr: "La valutazione è iniziata dopo che i partecipanti avevano compilato il questionario.",
        why: "<i>Die Auswertung begann, nachdem die Teilnehmenden den Fragebogen ausgefüllt hatten.</i> Nella subordinata il verbo finito (<i>hatten</i>) va in fondo. È accettata anche la subordinata in testa, con <i>begann</i> subito dopo la virgola."
      },
      {
        q: "Traduci conservando l'eventualità: «Qualora la commissione respinga la richiesta, il termine sarà prorogato.» (der Ausschuss, der Antrag, ablehnen, die Frist, verlängern)",
        why: "<i>Sollte der Ausschuss den Antrag ablehnen, wird die Frist verlängert.</i> Sono accettati anche <i>falls</i> e <i>wenn</i> (con o senza <i>sollte</i>) e la forma senza congiunzione <i>Lehnt der Ausschuss den Antrag ab, ...</i>."
      },
      {
        tr: "La seduta è stata rinviata perché il presidente era malato e la relatrice era bloccata all'estero. Se la verifica dovesse durare più a lungo, la data sarà fissata di nuovo.",
        why: "In <i>Vorsitzende</i> l'accento cade su <b>Vor</b>; in <i>Referentin</i> l'accento cade su <b>ren</b>; in <i>Ausland</i> l'accento cade su <b>Aus</b>; in <i>festgelegt</i> l'accento cade su <b>fest</b>."
      },
      {
        tr: "Se la verifica dovesse durare più a lungo, la data sarà rinviata.",
        why: "In <i>Prüfung</i> l'accento cade su <b>Prü</b>; in <i>dauern</i> l'accento cade su <b>dau</b>; in <i>verschoben</i> l'accento cade su <b>scho</b>."
      }
    ]
  },
  "lesson:c1-u05-test": {
    theme: "Verifica",
    title: "Test: Finito il lavoro",
    objectives: [
      "verificare l'unità e ripassare le funzioni di werden e il Futur di supposizione del livello"
    ],
    theory: [
      {
        p: "Dodici domande sull'unità e sul ripasso del livello (werden e Futur II di supposizione). Si supera con il 70%. Non riguardare le lezioni mentre rispondi: se non ricordi qualcosa, meglio tornare indietro e ripassare."
      }
    ],
    exercises: [
      {
        q: "L'impianto è fermo da ore. Completa la supposizione sul passato: «Die Anlage wird wohl ausgefallen ___.»",
        hint: "Futur II: ausiliare di ausfallen",
        why: "<b>sein</b>: <i>ausfallen</i> è un verbo di cambiamento di stato e al Perfekt vuole <i>sein</i>; il Futur II di supposizione è <i>wird ... ausgefallen sein</i>, «sarà andato in avaria»."
      },
      {
        q: "Completa: «Die Verhandlungen sind erst im Mai abgeschlossen ___.»",
        hint: "participio di werden nel passivo",
        why: "<b>worden</b>: nel Perfekt passivo il participio di <i>werden</i> perde <i>ge-</i>. <i>geworden</i> sarebbe il verbo pieno «diventare»."
      },
      {
        q: "Completa con il participio I di stehen e la desinenza giusta: «Die uns zur Verfügung ___ Mittel reichen nicht aus.»",
        hint: "participio I di stehen, plurale dopo die",
        why: "<b>stehenden</b>: <i>die uns zur Verfügung stehenden Mittel</i>, «i mezzi di cui disponiamo». Participio I attivo e contemporaneo, con <b>-en</b> dopo <i>die</i> al plurale."
      },
      {
        q: "Completa con la preposizione: «___ Rücksprache mit dem Vorstand kann der Vertrag nicht geändert werden.»",
        hint: "preposizione: «senza»",
        why: "<b>Ohne</b> + accusativo: <i>ohne Rücksprache</i> è la versione nominale di <i>ohne dass man sich mit dem Vorstand bespricht</i>."
      },
      {
        q: "In una mail interna: «Er wird jetzt im Meeting sein.» Che cosa esprime werden?",
        opts: [
          "una supposizione sul presente",
          "un futuro",
          "un passivo"
        ],
        why: "<i>werden</i> + infinito con <i>jetzt</i> è una <b>supposizione</b> sul presente: «sarà in riunione adesso». Senza <i>jetzt</i> o <i>wohl</i> potrebbe essere letto anche come futuro."
      },
      {
        q: "Quale gruppo corrisponde a «die Anträge, die gerade bearbeitet werden»?",
        opts: [
          "die gerade bearbeiteten Anträge",
          "die gerade bearbeitenden Anträge",
          "die gerade bearbeitete Anträge"
        ],
        why: "È un passivo in corso: serve il participio II, <i>bearbeiteten</i>, con <b>-en</b> dopo <i>die</i> al plurale. <i>bearbeitenden</i> darebbe alle domande un ruolo attivo; <i>bearbeitete</i> ha la desinenza sbagliata."
      },
      {
        q: "Quale subordinata corrisponde a «Trotz Erkrankung des Referenten fand die Tagung statt»?",
        opts: [
          "Obwohl der Referent erkrankt war, fand die Tagung statt.",
          "Weil der Referent erkrankt war, fand die Tagung statt.",
          "Nachdem der Referent erkrankt war, fand die Tagung statt."
        ],
        why: "<i>trotz</i> è concessivo: <i>obwohl</i>. <i>weil</i> e <i>nachdem</i> cambierebbero il rapporto logico."
      },
      {
        q: "Quali frasi usano correttamente un participio come attributo? (due risposte)",
        opts: [
          "Die zur Verfügung gestellten Mittel sind begrenzt.",
          "Die auf der Sitzung getroffenen Entscheidungen gelten sofort.",
          "Die getroffene Entscheidungen gelten sofort.",
          "Die zur Verfügung stellenden Mittel sind begrenzt."
        ],
        why: "Le prime due sono corrette: participio II passivo con <b>-en</b> dopo <i>die</i>. In <i>getroffene</i> manca il <b>-n</b>; <i>stellenden</i> darebbe ai mezzi un ruolo attivo («i mezzi che mettono a disposizione»)."
      },
      {
        q: "Completa il comunicato con il participio II e la preposizione.",
        tr: "La informeremo in tempo. Le misure pianificate da noi diventeranno efficaci solo dopo la conclusione della verifica.",
        why: "<i>geplanten</i> (o <i>vorgesehenen</i>): participio II passivo con <b>-en</b>. <i>nach</i> o <i>mit Abschluss der Prüfung</i>: tempo con <i>nach</i> + dativo, oppure «con la conclusione»."
      },
      {
        q: "Traduci: «Le decisioni prese nella riunione saranno comunicate dopo la conclusione della verifica.» (die Sitzung, die Entscheidung, mitteilen, der Abschluss, die Prüfung)",
        why: "<i>Die in der Sitzung getroffenen Entscheidungen werden nach Abschluss der Prüfung mitgeteilt.</i> Il passivo con <i>werden</i> rende il futuro del testo italiano; è accettata anche la frase che comincia con <i>Nach Abschluss der Prüfung</i>."
      },
      {
        tr: "Avrà terminato la relazione entro venerdì. Le decisioni messe a verbale saranno attuate dopo la conclusione della verifica.",
        why: "In <i>fertiggestellt</i> l'accento cade su <b>fer</b>; in <i>Beschlüsse</i> l'accento cade su <b>schlüs</b>; in <i>umgesetzt</i> l'accento cade su <b>um</b>."
      },
      {
        tr: "I costi aumentati continueranno a gravare sul bilancio.",
        why: "In <i>gestiegenen</i> l'accento cade su <b>stie</b>; in <i>belasten</i> l'accento cade su <b>las</b>; in <i>Haushalt</i> l'accento cade su <b>Haus</b>."
      }
    ]
  }
});
