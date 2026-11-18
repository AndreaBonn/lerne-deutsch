/* ============================================================
   Learner-language text (it) for data/core/c2-01.js, unit c2-u01.
   Keys point at ids in the neutral layer; arrays merge by index,
   so their length has to match core.
   Checked by scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("it", {
  "unit:c2-u01": {
    title: "Attributi estesi",
    grammarNote: "L'attributo participiale esteso (die seit Jahren geforderte Reform) · participio I e participio II come attributo · il Gerundivum: zu + participio I (die zu lösende Aufgabe) · Funktionsverbgefüge nella prosa saggistica (zur Anwendung kommen, Rechnung tragen, in Abrede stellen)"
  },
  "lesson:c2-u01-l1": {
    theme: "Saggistica e scienza",
    title: "L'attributo participiale esteso",
    objectives: [
      "riconoscere l'articolo e il nome che racchiudono un attributo esteso",
      "leggere un attributo con più complementi e capirne la struttura",
      "trasformare una relativa in attributo e viceversa",
      "scegliere fra participio I e participio II"
    ],
    theory: [
      {
        h: "Una relativa compressa davanti al nome",
        p: "Nel tedesco scritto un participio può portare con sé i suoi complementi e stare fra l'articolo e il nome: <em>die seit Jahren von Fachleuten geforderte Reform</em>. È una relativa compressa: <em>die Reform, die seit Jahren von Fachleuten gefordert wird</em>. L'articolo apre la parentesi, il nome la chiude, e tutto ciò che sta in mezzo dipende dal participio, che sta subito prima del nome e prende la desinenza dell'aggettivo. Il <strong>participio II</strong> indica un'azione subita o già conclusa (<em>die vorgelegten Daten</em>, i dati presentati); il <strong>participio I</strong> un'azione attiva e contemporanea (<em>die vorliegenden Gutachten</em>, le perizie che sono a disposizione)."
      },
      {
        h: "Come si legge",
        p: "Se dopo un articolo trovi una preposizione o un secondo articolo (<em>die von der ..., der dem ...</em>), aspettati un attributo esteso: salta in avanti fino al nome e individua i participi declinati che lo precedono (possono essere più d'uno, coordinati), poi torna indietro e leggi i complementi di ciascuno. L'ordine interno è quello di una subordinata: complementi prima, participio in fondo, come il verbo in fondo alla relativa. Il pronome riflessivo resta dentro: <em>die sich verschärfende Wohnungsnot</em>. Due attributi coordinati senza congiunzione si separano con una virgola: <em>die in der Studie befragten, überwiegend jungen Erwachsenen</em>; con <em>und</em> la virgola non serve: <em>die angekündigte und vielfach kritisierte Reform</em>."
      },
      {
        contrast: "In italiano il participio segue il nome e la frase si allunga verso destra: <em>la riforma chiesta da anni dagli esperti</em>. Il tedesco mette l'intero attributo a sinistra, fra l'articolo e il nome. I complementi possono conservare l'ordine italiano (<em>seit Jahren von Fachleuten</em>, «da anni dagli esperti»); quello che cambia posto è il participio, che va in fondo, subito prima del nome. Il participio presente italiano in <em>-ante, -ente</em> è raro e spesso lessicalizzato (<em>vigente, crescente</em>); il tedesco forma il participio I di quasi ogni verbo e lo usa liberamente come attributo: <em>die dem Gericht vorliegenden Gutachten</em>, «le perizie di cui dispone il tribunale»."
      },
      {
        trap: "Il participio di un passivo al Perfekt non porta <em>worden</em>: <em>die Daten, die erhoben worden sind</em> diventa <em>die erhobenen Daten</em>, mai <em>die erhoben wordenen Daten</em>. E non scambiare i due participi: <em>die steigenden Kosten</em> stanno ancora salendo, <em>die gestiegenen Kosten</em> sono già saliti."
      },
      {
        tip: "Per tradurre in italiano, sciogli l'attributo in una relativa o in un participio posposto. Per scrivere in tedesco, parti dalla relativa: togli il pronome relativo, trasforma il verbo in participio, declinalo e mettilo subito prima del nome."
      }
    ],
    grammar: {
      title: "L'attributo participiale esteso",
      note: "<b>articolo + complementi + participio declinato + nome</b>. Participio II: senso passivo o azione conclusa (<i>die vorgelegten Daten</i>). Participio I: senso attivo, azione contemporanea (<i>die vorliegenden Gutachten</i>). Il participio prende la desinenza dell'aggettivo; <i>worden</i> sparisce.",
      table: {
        head: ["relativa", "attributo esteso"],
        rows: [
          ["die Reform, die seit Jahren gefordert wird", "die seit Jahren geforderte Reform"],
          ["die Daten, die die Kommission vorgelegt hat", "die von der Kommission vorgelegten Daten"],
          ["die Gutachten, die dem Gericht vorliegen", "die dem Gericht vorliegenden Gutachten"],
          ["die Wohnungsnot, die sich verschärft", "die sich verschärfende Wohnungsnot"]
        ]
      },
      examples: [
        { tr: "La riforma del diritto d'autore, chiesta da anni dagli esperti, si fa ancora attendere.", note: "participio II con due complementi: seit Jahren, von Fachleuten" },
        { tr: "Gli adulti intervistati nello studio, per lo più giovani, mostravano una fiducia sorprendentemente scarsa nei media.", note: "due attributi coordinati, separati da una virgola" },
        { tr: "La crisi degli alloggi, che si aggrava da decenni, non è un fenomeno nuovo.", note: "participio I di un verbo riflessivo: sich resta nell'attributo" },
        { tr: "Il rapporto si basa sui dati presentati dalla commissione lo scorso autunno.", note: "participio II: von der Kommission indica l'agente" },
        { tr: "Le perizie di cui dispone il tribunale si contraddicono su punti essenziali.", note: "participio I con il dativo retto da vorliegen" },
        { tr: "Il modello, ritenuto superato da molti, si rivela sorprendentemente solido.", note: "für ... halten: il complemento predicativo resta dentro l'attributo" }
      ]
    },
    vocab: [
      "il trattato, il saggio scientifico",
      "il reperto, il risultato (di un esame)",
      "la perizia, il parere tecnico",
      "l'ipotesi",
      "l'oggetto, il tema (di uno studio)",
      "l'indagine, lo studio",
      "presentare (un documento)",
      "rivelarsi",
      "dimostrare, provare",
      "basarsi su, fondarsi su",
      "prevalentemente, per lo più",
      "determinante, in modo determinante"
    ],
    exercises: [
      {
        q: "In un saggio: «Die von der Regierung im Frühjahr angekündigte und von der Opposition scharf kritisierte Reform ist bis heute nicht umgesetzt.» Qual è il soggetto della frase?",
        opts: [
          "die Reform, con tutto il suo attributo",
          "die Regierung",
          "die Opposition"
        ],
        why: "L'articolo <i>Die</i> apre la parentesi e <b>Reform</b> la chiude: ciò che sta in mezzo, due attributi coordinati con <i>und</i>, descrive la riforma. <i>von der Regierung</i> e <i>von der Opposition</i> sono gli agenti dei due participi."
      },
      {
        q: "Trasforma in attributo: «die Daten, die im letzten Jahr erhoben worden sind»",
        opts: [
          "die im letzten Jahr erhobenen Daten",
          "die im letzten Jahr erhoben wordenen Daten",
          "die im letzten Jahr erhebenden Daten"
        ],
        why: "Il passivo diventa un participio II declinato: <b>erhobenen</b>. <i>worden</i> non entra mai nell'attributo; <i>erhebenden</i>, participio I, direbbe che sono i dati a rilevare qualcosa."
      },
      {
        q: "Completa: «Die Zahl der ___ Menschen ist im vergangenen Jahrzehnt gestiegen.» (le persone che vivono in povertà)",
        opts: [
          "in Armut lebenden",
          "in Armut gelebten",
          "lebenden in Armut"
        ],
        why: "Azione attiva e contemporanea: participio I, <b>lebenden</b>. Dentro l'attributo esteso il complemento <i>in Armut</i> sta prima del participio, mai fra participio e nome; <i>gelebten</i> è un participio II e indicherebbe un'azione subita o conclusa."
      },
      {
        q: "Completa: «Das dem Ausschuss seit März ___ Gutachten wurde bislang nicht veröffentlicht.»",
        hint: "da vorliegen, participio I, neutro dopo das",
        why: "<b>vorliegende</b>: participio I (la perizia è a disposizione della commissione), desinenza <i>-e</i> dopo <i>das</i> al nominativo. <i>dem Ausschuss</i> è il dativo retto da <i>vorliegen</i>."
      },
      {
        q: "Completa con due participi II: nella prima lacuna «previste», nella seconda «svantaggiate».",
        tr: "Le conseguenze del cambiamento climatico, previste da tempo da numerosi ricercatori, colpiscono soprattutto le regioni del Sud, già svantaggiate.",
        why: "<i>vorhergesagten</i> (anche <i>vorausgesagten</i> o <i>prognostizierten</i>) e <i>benachteiligten</i>: participi II con <i>-en</i> dopo l'articolo plurale <i>die</i>. <i>ohnehin</i> («comunque, già») sta dentro il secondo attributo."
      },
      {
        q: "Abbina ogni parola al suo significato.",
        pairs: [
          "la perizia, il parere tecnico",
          "il reperto, il risultato",
          "il trattato, il saggio",
          "l'ipotesi"
        ]
      },
      {
        q: "In quali frasi c'è un attributo participiale esteso?",
        opts: [
          "Die vom Gericht bestellte Gutachterin widersprach dem Kläger.",
          "Die über Jahrzehnte gewachsenen Strukturen lassen sich nicht über Nacht ändern.",
          "Die Gutachterin, die das Gericht bestellt hatte, widersprach dem Kläger.",
          "Die Strukturen sind über Jahrzehnte gewachsen."
        ],
        why: "Nelle prime due il participio, con i suoi complementi, sta fra articolo e nome (<i>die vom Gericht bestellte Gutachterin</i>, <i>die über Jahrzehnte gewachsenen Strukturen</i>). La terza dice la stessa cosa della prima con una relativa; nella quarta <i>gewachsen</i> fa parte del Perfekt e non è un attributo."
      },
      {
        q: "Traduci con un attributo participiale esteso: «Lo studio presentato la settimana scorsa dall'università contraddice le ipotesi finora diffuse.» (vorlegen, die Annahme)",
        why: "<i>Die von der Universität letzte Woche vorgelegte Studie widerspricht den bisher verbreiteten Annahmen</i>: ciò che in italiano segue «studio» va prima di <i>Studie</i>, con il participio in ultima posizione. <i>widersprechen</i> regge il dativo: <i>den ... Annahmen</i>."
      },
      {
        tr: "La tesi sostenuta nel presente trattato si basa su risultati per lo più datati. Gli studi usciti da allora sollevano seri dubbi su di essa.",
        why: "In <i>Abhandlung</i> l'accento cade su <b>Ab</b>; in <i>Befunde</i> l'accento cade su <b>fun</b>; in <i>Zweifel</i> la <b>z</b> si pronuncia [ts] e <b>ei</b> [aɪ]."
      },
      {
        tr: "La riforma chiesta da anni si fa ancora attendere.",
        why: "In <i>geforderte</i> l'accento cade su <b>for</b>; in <i>Reform</i> l'accento cade su <b>form</b>; in <i>lässt</i> la <b>ä</b> è breve."
      }
    ]
  },
  "lesson:c2-u01-l2": {
    theme: "Norme e contratti",
    title: "Il compito da risolvere",
    objectives: [
      "capire e formare il Gerundivum: zu + participio I come attributo",
      "distinguere die zu prüfenden Anträge da die geprüften Anträge",
      "collocare zu nei verbi separabili (die einzureichenden Unterlagen)",
      "alternare Gerundivum e passivo modale nella prosa giuridica"
    ],
    theory: [
      {
        h: "sein + zu, spostato davanti al nome",
        p: "A C1 hai visto <em>sein + zu</em> + infinito: <em>Die Aufgabe ist zu lösen</em>, «il compito va risolto». Lo stesso contenuto, trasformato in attributo, diventa <strong>zu + participio I</strong> declinato: <em>die zu lösende Aufgabe</em>. È il cosiddetto Gerundivum: ha senso passivo e valore modale, «che deve» o «che può» essere risolto. Come ogni attributo participiale si estende con i complementi: <em>die bis Monatsende einzureichenden Unterlagen</em>."
      },
      {
        h: "Dovere o potere",
        p: "Il valore si ricava dal contesto, come con <em>sein + zu</em>. Nelle norme e nei moduli prevale l'obbligo: <em>die einzureichenden Unterlagen</em>, i documenti da presentare. Con una negazione il valore dipende dal verbo: <em>ein nicht zu unterschätzendes Risiko</em> è un avvertimento, un rischio che non si deve sottovalutare; <em>eine nicht zu lösende Aufgabe</em> esprime un'impossibilità, un compito che non si può risolvere. Con <em>kaum</em> prevale la possibilità: <em>eine kaum zu beziffernde Zahl</em>, un numero difficilmente quantificabile. Con <em>erwarten</em> è una previsione: <em>die zu erwartenden Kosten</em>, i costi prevedibili."
      },
      {
        contrast: "L'italiano ha un equivalente molto vicino in <em>da</em> + infinito: <em>il compito da risolvere, i documenti da presentare</em>. La differenza è la posizione e la forma: in italiano tutto segue il nome e l'infinito non cambia; in tedesco tutto precede il nome e il verbo diventa un participio presente con la desinenza dell'aggettivo: <em>die zu lösende Aufgabe</em>, <em>bei der zu lösenden Aufgabe</em>."
      },
      {
        trap: "Non confondere <em>die zu prüfenden Anträge</em> (le domande da esaminare, ancora aperte) con <em>die geprüften Anträge</em> (le domande già esaminate). E con i verbi separabili <em>zu</em> entra fra particella e verbo, in una sola parola: <em>einzureichenden, vorzunehmenden, abzugebenden</em>, non <em>zu einreichenden</em>."
      },
      {
        tip: "Per verificare un Gerundivum, riportalo alla forma predicativa e poi al passivo modale: <em>die zu erwartenden Kosten</em> → <em>die Kosten sind zu erwarten</em> → <em>die Kosten können erwartet werden</em>. Se il passaggio regge, la forma è giusta."
      }
    ],
    grammar: {
      title: "Il Gerundivum: zu + participio I",
      note: "<b>sein + zu + infinito</b> come predicato (<i>ist zu lösen</i>) diventa <b>zu + participio I</b> come attributo (<i>die zu lösende Aufgabe</i>). Senso passivo, valore di obbligo o di possibilità. Verbi separabili: <i>einzureichenden</i>.",
      table: {
        head: ["predicato", "attributo", "senso"],
        rows: [
          ["Die Aufgabe ist zu lösen.", "die zu lösende Aufgabe", "deve essere risolto"],
          ["Die Unterlagen sind einzureichen.", "die einzureichenden Unterlagen", "devono essere presentati"],
          ["Das Risiko ist nicht zu unterschätzen.", "ein nicht zu unterschätzendes Risiko", "non deve essere sottovalutato"],
          ["Die Kosten sind zu erwarten.", "die zu erwartenden Kosten", "sono prevedibili"]
        ]
      },
      examples: [
        { tr: "Il compito da risolvere è più complesso del previsto.", note: "zu + participio I: lösende" },
        { tr: "I documenti da presentare entro fine mese si trovano in allegato.", note: "verbo separabile: ein-zu-reichenden" },
        { tr: "È un rischio da non sottovalutare.", note: "con nicht: avvertimento, «che non si deve»" },
        { tr: "I costi prevedibili superano di gran lunga il budget.", note: "zu erwarten: previsione" },
        { tr: "Il compito va risolto entro venerdì.", note: "forma predicativa: sein + zu + infinito" },
        { tr: "Le questioni ancora da chiarire saranno trattate nella prossima seduta.", note: "noch: «ancora da»" }
      ]
    },
    vocab: [
      "la disposizione, la norma",
      "il procuratore, il rappresentante con procura",
      "la clausola",
      "il mezzo di impugnazione",
      "la condizione, la prescrizione (di un'autorizzazione)",
      "i fatti, la fattispecie",
      "presentare in un secondo momento, integrare (documenti)",
      "contestare, rilevare (un difetto)",
      "sottovalutare",
      "garantire, assicurare",
      "indispensabile",
      "entro i termini"
    ],
    exercises: [
      {
        q: "In un verbale: «Die zu prüfenden Anträge werden bis Ende Mai bearbeitet.» Che cosa significa «die zu prüfenden Anträge»?",
        opts: [
          "le domande che devono essere esaminate",
          "le domande che esaminano",
          "le domande già esaminate"
        ],
        why: "<i>zu</i> + participio I è il <b>Gerundivum</b>: senso passivo e valore di obbligo, come <i>die Anträge sind zu prüfen</i>. Senza <i>zu</i>, <i>prüfend</i> sarebbe attivo; <i>geprüften</i> indicherebbe domande già esaminate."
      },
      {
        q: "In un contratto d'affitto: «Der Mieter hat die Wohnung in ordnungsgemäßem Zustand zurückzugeben.» Che valore ha haben + zu?",
        opts: [
          "un obbligo con soggetto attivo: l'inquilino deve restituire",
          "una possibilità: l'inquilino può restituire",
          "un passivo: l'appartamento viene restituito"
        ],
        why: "<b>haben + zu</b> è il corrispettivo attivo di <i>sein + zu</i>: il soggetto deve fare qualcosa. Il passivo sarebbe <i>Die Wohnung ist ... zurückzugeben</i>, da cui l'attributo <i>die zurückzugebende Wohnung</i>."
      },
      {
        q: "Trasforma in attributo: «Die Kosten sind nicht vorherzusehen.» → «___ Kosten»",
        opts: [
          "die nicht vorherzusehenden",
          "die nicht vorhergesehenen",
          "die nicht vorherzusehende"
        ],
        why: "Gerundivum di un verbo separabile: <i>zu</i> fra <i>vorher</i> e <i>sehen</i>, desinenza <b>-en</b> dopo l'articolo plurale. <i>vorhergesehenen</i> descrive un fatto («i costi non previsti»), non l'impossibilità di prevederli; <i>vorherzusehende</i> ha la desinenza sbagliata."
      },
      {
        q: "Completa: «Das ist ein nicht zu ___ Problem.» (sottovalutare)",
        hint: "da unterschätzen, neutro dopo ein",
        why: "<b>unterschätzendes</b>: <i>unterschätzen</i> non è separabile, quindi <i>zu</i> resta davanti come parola a sé; dopo <i>ein</i> al neutro nominativo la desinenza è <i>-es</i>."
      },
      {
        q: "Completa: «Die bis zum 30. Juni ___ Unterlagen finden Sie in der Anlage.» (presentare)",
        hint: "da einreichen, separabile, plurale dopo die",
        why: "<b>einzureichenden</b>: con un verbo separabile <i>zu</i> si inserisce fra particella e verbo, e il participio prende <i>-en</i> dopo <i>die</i>."
      },
      {
        q: "Completa con il Gerundivum: nella prima lacuna «risolvere», nella seconda «quantificare» (beziffern).",
        tr: "Il rapporto indica tre problemi da risolvere entro fine anno e un numero difficilmente quantificabile di procedimenti aperti.",
        why: "<i>drei ... zu lösende Probleme</i> (o <i>zu behebende</i>): dopo un numerale senza articolo la desinenza è <i>-e</i>. <i>eine kaum zu beziffernde Zahl</i>: con <i>kaum</i> il Gerundivum esprime una possibilità quasi nulla, con <i>-e</i> dopo <i>eine</i>."
      },
      {
        q: "Metti in ordine le parole.",
        tr: "Le domande che l'autorità deve esaminare giacciono da settimane.",
        why: "<i>Die von der Behörde zu prüfenden Anträge liegen seit Wochen vor.</i> L'agente <i>von der Behörde</i> sta dentro l'attributo, prima di <i>zu prüfenden</i>; <i>vor</i>, particella di <i>vorliegen</i>, va in fondo."
      },
      {
        q: "Traduci con un Gerundivum: «Le modifiche da apportare al contratto devono essere approvate da entrambe le parti.» (vornehmen, genehmigen, die Vertragspartei)",
        why: "<i>Die am Vertrag vorzunehmenden Änderungen müssen von beiden Vertragsparteien genehmigt werden</i>, oppure, in stile normativo, <i>... sind von beiden Vertragsparteien zu genehmigen</i>. <i>vornehmen</i> è separabile: <i>vorzunehmenden</i>."
      },
      {
        tr: "I documenti che il richiedente deve integrare vanno presentati entro fine mese. In caso contrario c'è da aspettarsi il rigetto della domanda.",
        why: "In <i>nachzureichenden</i> l'accento cade su <b>nach</b>; in <i>Andernfalls</i> l'accento cade su <b>An</b>; in <i>Ablehnung</i> l'accento cade su <b>Ab</b> e la <b>b</b> si pronuncia [p]."
      },
      {
        tr: "I costi prevedibili sono difficilmente quantificabili.",
        why: "In <i>erwartenden</i> l'accento cade su <b>war</b>; in <i>beziffern</i> l'accento cade su <b>zif</b> e la <b>z</b> si pronuncia [ts]; in <i>Kosten</i> la <b>o</b> è breve."
      }
    ]
  },
  "lesson:c2-u01-l3": {
    theme: "Saggistica e dibattito pubblico",
    title: "Funktionsverbgefüge nel testo",
    objectives: [
      "riconoscere un Funktionsverbgefüge in un periodo lungo",
      "scegliere il verbo funzionale giusto (kommen o bringen, finden o stoßen)",
      "sostituire un Funktionsverbgefüge con un verbo semplice o un passivo, e viceversa",
      "capire la differenza fra in Abrede stellen e nicht in Abrede stellen"
    ],
    theory: [
      {
        h: "Il nome porta il significato, il verbo la prospettiva",
        p: "In un Funktionsverbgefüge il significato sta nel nome (<em>Anwendung, Zweifel, Beweis</em>), mentre il verbo (<em>kommen, ziehen, stellen, finden</em>) dice poco di suo e regola soprattutto la prospettiva: attiva o passiva, inizio di un processo o stato. A C1 li hai imparati come formule; a C2 il problema è riconoscerli in una frase lunga, dove nome e verbo stanno ai due capi della parentesi: <em>Die Ergebnisse wurden von Fachleuten in Zweifel gezogen.</em>"
      },
      {
        h: "Coppie che cambiano prospettiva",
        p: "Molti Funktionsverbgefüge esistono in coppia. <strong>zur Anwendung kommen</strong> ha senso passivo (<em>wird angewendet</em>), <strong>zur Anwendung bringen</strong> senso attivo (<em>anwenden</em>). <strong>Berücksichtigung finden</strong> e <strong>auf Kritik stoßen</strong> sostituiscono un passivo: <em>Die Einwände fanden Berücksichtigung</em> = <em>wurden berücksichtigt</em>; <em>Der Plan stieß auf Kritik</em> = <em>wurde kritisiert</em>. Altri affiancano un verbo semplice quasi sinonimo: <em>Rechnung tragen</em> (tener conto di, con il dativo) equivale di norma a <em>berücksichtigen</em>, con differenze solo di contesto e di registro. <em>zur Debatte stehen</em>, invece, non ha un verbo semplice equivalente."
      },
      {
        contrast: "Anche l'italiano ha costruzioni di questo tipo, e spesso coincidono: <em>mettere in dubbio</em> (<em>in Zweifel ziehen</em>), <em>prendere in considerazione</em> (<em>in Betracht ziehen</em>), <em>trovare applicazione</em> (<em>zur Anwendung kommen</em>). Ma il verbo funzionale non si traduce parola per parola: <em>unter Beweis stellen</em> non è «mettere sotto prova» ma «dimostrare», <em>zur Sprache bringen</em> è «sollevare», <em>in Abrede stellen</em> è «negare». Preposizione e articolo sono fissi: <em>zur Anwendung</em>, mai <em>in die Anwendung</em>."
      },
      {
        trap: "<em>in Abrede stellen</em> significa «negare»: quindi <em>Sie stellt nicht in Abrede, dass ...</em> vuol dire «non nega, cioè ammette, che ...». E <em>Rechnung tragen</em> vuole il dativo senza preposizione: <em>den Bedenken Rechnung tragen</em>, non <em>auf die Bedenken</em>."
      },
      {
        tip: "Nei testi formali il Funktionsverbgefüge dà peso al nome e permette di cambiare prospettiva senza un passivo; in un testo che vuole essere scorrevole un verbo semplice è spesso migliore. Scrivendo, usalo dove aggiunge qualcosa (prospettiva, inizio di un processo, registro), non per allungare la frase."
      }
    ],
    grammar: {
      title: "Funktionsverbgefüge nella prosa saggistica",
      note: "<b>Nome</b> = significato; <b>verbo funzionale</b> = prospettiva. <i>kommen, finden, stoßen auf</i>: senso passivo. <i>bringen, stellen, ziehen</i>: senso attivo. Preposizione e articolo sono fissi.",
      table: {
        head: ["Funktionsverbgefüge", "verbo semplice o passivo", "significato"],
        rows: [
          ["zur Anwendung kommen", "angewendet werden", "trovare applicazione"],
          ["in Zweifel ziehen", "bezweifeln", "mettere in dubbio"],
          ["unter Beweis stellen", "beweisen", "dimostrare"],
          ["Berücksichtigung finden", "berücksichtigt werden", "essere preso in considerazione"],
          ["auf Kritik stoßen", "kritisiert werden", "incontrare critiche"],
          ["in Abrede stellen", "bestreiten", "negare"]
        ]
      },
      examples: [
        { tr: "Il nuovo metodo è già applicato in diverse cliniche.", note: "zur Anwendung kommen: senso passivo" },
        { tr: "I risultati dello studio sono stati messi in dubbio dagli esperti.", note: "in Zweifel ziehen al passivo: nome e participio ai due capi della frase" },
        { tr: "La legge non tiene sufficientemente conto delle mutate condizioni di vita.", note: "Rechnung tragen + dativo" },
        { tr: "L'autrice dimostra la sua tesi con numerosi esempi.", note: "unter Beweis stellen = beweisen" },
        { tr: "La proposta ha incontrato un ampio consenso in commissione.", note: "auf Zustimmung stoßen: senso passivo, come auf Kritik stoßen" },
        { tr: "La questione del finanziamento non è stata sollevata nella seduta.", note: "zur Sprache bringen al passivo" }
      ]
    },
    vocab: [
      "trovare applicazione, essere applicato",
      "mettere in dubbio",
      "tenere conto di (+ dativo)",
      "dimostrare, dare prova di",
      "sollevare (una questione)",
      "prendere in considerazione",
      "essere preso in considerazione",
      "incontrare critiche",
      "negare, contestare",
      "essere in discussione",
      "la presa di posizione, il parere",
      "la consuetudine, l'usanza"
    ],
    exercises: [
      {
        q: "Quale verbo semplice corrisponde a «etwas in Zweifel ziehen»?",
        opts: [
          "bezweifeln",
          "verzweifeln",
          "überziehen"
        ],
        why: "<b>bezweifeln</b>, «mettere in dubbio». <i>verzweifeln</i> significa «disperarsi»; <i>überziehen</i> «esagerare» o «andare in rosso» sul conto."
      },
      {
        q: "In un rapporto: «Die Methode wird in drei Kliniken angewendet.» Quale riformulazione con un Funktionsverbgefüge ha lo stesso senso?",
        opts: [
          "Die Methode kommt in drei Kliniken zur Anwendung.",
          "Die Methode bringt in drei Kliniken zur Anwendung.",
          "Die Methode stellt in drei Kliniken zur Anwendung."
        ],
        why: "<b>kommen</b> dà il senso passivo: il metodo «viene applicato». <i>zur Anwendung bringen</i> è attivo e vuole un soggetto che applica: <i>Drei Kliniken bringen die Methode zur Anwendung</i>. <i>stellen</i> non forma questo Funktionsverbgefüge."
      },
      {
        q: "In una recensione: «Die Verfasserin stellt nicht in Abrede, dass ihre Quellen lückenhaft sind.» Che cosa fa l'autrice?",
        opts: [
          "ammette che le sue fonti sono lacunose",
          "nega che le sue fonti siano lacunose",
          "dimostra che le sue fonti sono lacunose"
        ],
        why: "<i>in Abrede stellen</i> = «negare»; con <i>nicht</i> diventa «non negare», cioè <b>ammettere</b>. È un modo prudente, tipico della saggistica, di riconoscere un limite."
      },
      {
        q: "Completa: «Der Entwurf trägt den Einwänden der Verbände kaum ___.» (tiene conto)",
        hint: "il nome che va con tragen",
        why: "<b>Rechnung</b>: <i>einer Sache Rechnung tragen</i>, «tenere conto di qualcosa», con il dativo (<i>den Einwänden</i>)."
      },
      {
        q: "Completa: «Die Finanzierung des Projekts steht derzeit nicht zur ___.» (non è in discussione, o non è negoziabile)",
        hint: "zur ... stehen",
        why: "<b>Debatte</b> o <b>Diskussion</b>: «non è in discussione». <b>Disposition</b> rende la seconda lettura: <i>nicht zur Disposition stehen</i>, «non è negoziabile, non si mette in questione»."
      },
      {
        q: "Completa: nella prima lacuna la preposizione, nella seconda il nome del Funktionsverbgefüge.",
        tr: "La commissione ha sì preso in considerazione le proposte dell'opposizione, ma nel rapporto finale ne ha tenuto conto a malapena.",
        why: "<i>in Betracht ziehen</i> («prendere in considerazione») e <i>Rechnung tragen</i> + dativo (<i>ihnen</i>). La frase mostra la differenza fra i due: considerare una proposta non vuol dire tenerne conto."
      },
      {
        q: "Abbina ogni espressione al suo significato.",
        pairs: [
          "negare",
          "dimostrare",
          "sollevare (una questione)",
          "incontrare critiche"
        ]
      },
      {
        q: "Traduci: «Le obiezioni dei cittadini non sono state prese in considerazione nel progetto.» (der Einwand, der Entwurf, Berücksichtigung finden)",
        why: "Con il Funktionsverbgefüge: <i>Die Einwände der Bürger haben im Entwurf keine Berücksichtigung gefunden</i> (o <i>fanden ... keine Berücksichtigung</i>). La negazione passa nel nome: <i>keine Berücksichtigung</i>, non <i>nicht Berücksichtigung</i>. Si accetta anche il passivo semplice: <i>... wurden im Entwurf nicht berücksichtigt</i>."
      },
      {
        tr: "Il procedimento descritto nello studio finora trova applicazione solo di rado. Gli autori non ne mettono in dubbio l'efficacia, ma sollevano la questione dei costi elevati.",
        why: "In <i>Studie</i> <b>st</b> iniziale si pronuncia [ʃt]; in <i>Autoren</i> l'accento cade su <b>to</b>; in <i>Sprache</i> <b>sp</b> si pronuncia [ʃp]."
      },
      {
        tr: "La ministra ha negato ogni responsabilità.",
        why: "In <i>Ministerin</i> l'accento cade su <b>te</b>; in <i>Verantwortung</i> l'accento cade su <b>ant</b>; in <i>Abrede</i> l'accento cade su <b>Ab</b> e la <b>b</b> si pronuncia [p]."
      }
    ]
  },
  "lesson:c2-u01-test": {
    theme: "Verifica",
    title: "Test: Attributi estesi",
    objectives: [
      "verificare l'attributo participiale esteso, il Gerundivum e i Funktionsverbgefüge"
    ],
    theory: [
      {
        p: "Dieci domande su tutta l'unità. Si supera con il 70%. Non riguardare le lezioni mentre rispondi: se non ricordi qualcosa, meglio tornare indietro e ripassare."
      }
    ],
    exercises: [
      {
        q: "Completa: «Die von der Kommission im Herbst ___ Daten sind inzwischen veraltet.» (presentare)",
        hint: "da vorlegen, participio II, plurale dopo die",
        why: "<b>vorgelegten</b>: participio II con senso passivo («presentati dalla commissione»), <i>-en</i> dopo l'articolo plurale."
      },
      {
        q: "Completa: «Die bis Freitag ___ Berichte liegen noch nicht vor.» (consegnare)",
        hint: "da abgeben, Gerundivum",
        why: "<b>abzugebenden</b>: <i>zu</i> fra particella e verbo, participio I, <i>-en</i> dopo <i>die</i>: «i rapporti da consegnare entro venerdì»."
      },
      {
        q: "Completa: «Das neue Verfahren kommt ab Januar zur ___.» (sarà applicato)",
        hint: "il nome che va con zur ... kommen",
        why: "<b>Anwendung</b>: <i>zur Anwendung kommen</i>, «essere applicato»."
      },
      {
        q: "Completa: «Die Autorin hat ihr Können erneut unter ___ gestellt.» (ha dimostrato)",
        hint: "unter ... stellen",
        why: "<b>Beweis</b>: <i>unter Beweis stellen</i>, «dimostrare, dare prova di»."
      },
      {
        q: "«Die sich aus den neuen Vorschriften für kleine Betriebe ergebenden Pflichten sind kaum zu überblicken.» A quale nome si riferisce l'attributo?",
        opts: [
          "Pflichten",
          "Vorschriften",
          "Betriebe"
        ],
        why: "L'articolo <i>Die</i> apre la parentesi, che si chiude con il participio <i>ergebenden</i> e il nome <b>Pflichten</b>: «gli obblighi che derivano dalle nuove norme per le piccole imprese». <i>Vorschriften</i> e <i>Betriebe</i> stanno dentro i complementi."
      },
      {
        q: "Che cosa significa «die zu befragenden Personen»?",
        opts: [
          "le persone che devono essere intervistate",
          "le persone che intervistano",
          "le persone intervistate"
        ],
        why: "<i>zu</i> + participio I è il <b>Gerundivum</b>: senso passivo e valore di obbligo. <i>befragend</i> sarebbe attivo, <i>befragt</i> già concluso."
      },
      {
        q: "Quale frase ha lo stesso significato di «Die Reform stieß auf heftige Kritik»?",
        opts: [
          "Die Reform wurde heftig kritisiert.",
          "Die Reform kritisierte heftig.",
          "Die Reform hat heftige Kritik geübt."
        ],
        why: "<i>auf Kritik stoßen</i> ha senso passivo: la riforma <b>viene criticata</b>. <i>Kritik üben</i> è attivo: chi critica è il soggetto."
      },
      {
        q: "Trasforma in attributo: «die Fragen, die noch geklärt werden müssen»",
        opts: [
          "die noch zu klärenden Fragen",
          "die noch geklärten Fragen",
          "die noch klärenden Fragen"
        ],
        why: "Un passivo con <i>müssen</i> diventa un <b>Gerundivum</b>: <i>zu klärenden</i>. <i>geklärten</i> direbbe che sono già chiarite; <i>klärenden</i> che sono loro a chiarire qualcosa."
      },
      {
        tr: "I risultati presentati dalla commissione di esperti hanno incontrato un ampio consenso. È previsto che le misure che se ne devono trarre vengano applicate l'anno prossimo.",
        why: "In <i>Expertenkommission</i> l'accento principale cade su <b>per</b>; in <i>stießen</i> <b>ie</b> è lunga e <b>ß</b> si pronuncia [s]; in <i>Maßnahmen</i> l'accento cade su <b>Maß</b>, con la <b>a</b> lunga."
      },
      {
        tr: "Le questioni ancora da chiarire verranno sollevate nella prossima seduta.",
        why: "In <i>klärenden</i> la <b>ä</b> è lunga; in <i>nächsten</i> la <b>ä</b> è lunga anche davanti a <b>chst</b>; in <i>Sitzung</i> <b>tz</b> si pronuncia [ts]."
      }
    ]
  }
});
