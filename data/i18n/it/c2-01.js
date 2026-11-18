/* ============================================================
   Learner-language text (it) for data/core/c2-01.js, units c2-u01 and c2-u02.
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
        trap: "<em>in Abrede stellen</em> significa «negare»: quindi <em>Sie stellt nicht in Abrede, dass ...</em> vuol dire «non nega che ...»: una concessione prudente, che non equivale per forza a un'ammissione esplicita. E <em>Rechnung tragen</em> vuole il dativo senza preposizione: <em>den Bedenken Rechnung tragen</em>, non <em>auf die Bedenken</em>."
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
          "non nega che le sue fonti siano lacunose",
          "nega che le sue fonti siano lacunose",
          "dimostra che le sue fonti sono lacunose"
        ],
        why: "<i>in Abrede stellen</i> = «negare»; con <i>nicht</i> diventa <b>«non negare»</b>. È una concessione prudente, tipica della saggistica: l'autrice non contesta il limite, senza per questo dichiararlo apertamente."
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
        why: "In <i>Ministerin</i> l'accento cade su <b>nis</b>; in <i>Verantwortung</i> l'accento cade su <b>ant</b>; in <i>Abrede</i> l'accento cade su <b>Ab</b> e la <b>b</b> si pronuncia [p]."
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
  },
  "unit:c2-u02": {
    title: "Plurali e formazione delle parole",
    grammarNote: "Plurali doppi con significato diverso (die Banken e die Bänke, die Worte e die Wörter) · plurali sostitutivi (Ratschläge, Regenfälle, Streitigkeiten) · composti: Grundwort ed elemento di giunzione (Arbeitszeit, Hundebesitzer, Schulpflicht) · derivazione con -ung, -heit, -keit e con ver-, zer-, ent-, miss- · il genere dei Fremdwörter (-ion, -ität, -ismus)"
  },
  "lesson:c2-u02-l1": {
    theme: "Lessico e significato",
    title: "Die Banken e die Bänke",
    objectives: [
      "distinguere i plurali che cambiano significato (Banken e Bänke, Worte e Wörter)",
      "usare i plurali sostitutivi dei nomi che non hanno plurale (Ratschläge, Regenfälle)",
      "scegliere il plurale giusto in base al contesto",
      "non confondere Mütter e Muttern, Bände e Bänder"
    ],
    theory: [
      {
        h: "Un singolare, due plurali",
        p: "Alcuni nomi hanno due plurali, e ciascuno porta un significato diverso. <em>die Bank</em> è sia la banca sia la panchina: le banche sono <strong>Banken</strong>, le panchine <strong>Bänke</strong>. <em>das Wort</em> fa <strong>Wörter</strong> quando si tratta di vocaboli isolati, che si contano o si elencano (<em>ein Wörterbuch mit 100 000 Wörtern</em>), e <strong>Worte</strong> quando si tratta di parole che formano un discorso o un'espressione (<em>mit anderen Worten, Worte des Dankes</em>). <em>die Mutter</em> fa <strong>Mütter</strong> (le madri) e <strong>Muttern</strong> (i dadi delle viti). A volte dietro la stessa forma ci sono due nomi di genere diverso: <em>der Band</em> (il volume) fa <strong>Bände</strong>, <em>das Band</em> (il nastro, il legamento) fa <strong>Bänder</strong>, e <em>die Band</em>, il gruppo musicale, fa <em>Bands</em>."
      },
      {
        h: "Quando il plurale manca: i plurali sostitutivi",
        p: "Altri nomi non hanno un plurale d'uso, o lo hanno raro, e il tedesco lo ricava da un composto o da un derivato. <em>der Rat</em>, nel senso di consiglio, diventa <strong>Ratschläge</strong>: <em>Räte</em> sono invece gli organi collegiali o i loro membri (<em>die Stadträte</em>). <em>der Regen</em> diventa <strong>Regenfälle</strong>, <em>der Schnee</em> <strong>Schneefälle</strong>, <em>der Streit</em> di norma <strong>Streitigkeiten</strong> (<em>Streite</em> esiste, ma è raro), <em>der Sport</em> <strong>Sportarten</strong>. Il plurale sostitutivo è il punto in cui plurale e formazione delle parole si incontrano: si ricorre a un composto il cui ultimo elemento ha il plurale (<em>Regenfälle, Ratschläge, Sportarten</em>) o a un derivato (<em>Streitigkeiten</em>)."
      },
      {
        contrast: "Anche l'italiano conosce i plurali doppi: <em>le braccia</em> del corpo e <em>i bracci</em> di una gru, <em>le mura</em> della città e <em>i muri</em> di casa, <em>le membra</em> e <em>i membri</em> di un'associazione, <em>le fondamenta</em> di un edificio e <em>i fondamenti</em> di una teoria. Il meccanismo è lo stesso, ma in tedesco i casi sono altri e non corrispondono ai nostri: per un italiano <em>le banche</em> e <em>le panchine</em> sono due parole diverse, e niente segnala che in tedesco bisogna scegliere fra <em>Banken</em> e <em>Bänke</em>."
      },
      {
        trap: "Il dizionario contiene <em>Wörter</em>, mai <em>Worte</em>; un discorso commovente è fatto di <em>Worte</em>. Se le parole si contano o si elencano, sono <em>Wörter</em>. E attenzione all'Umlaut, che qui distingue il significato: <em>Muttern</em> sono dadi, <em>Mütter</em> sono madri; <em>Bänke</em> sono panchine, <em>Banken</em> istituti di credito."
      },
      {
        tip: "Impara il plurale insieme al significato, non come forma a sé. I dizionari monolingui (il Duden, per esempio) danno i due plurali ciascuno con la sua glossa: è lì che conviene controllare."
      }
    ],
    grammar: {
      title: "Plurali doppi e plurali sostitutivi",
      note: "Un nome, due plurali, due significati: <b>Banken</b> (banche) e <b>Bänke</b> (panchine), <b>Wörter</b> (vocaboli) e <b>Worte</b> (discorso). Se il plurale manca, lo fornisce un composto: <b>Ratschläge</b>, <b>Regenfälle</b>, <b>Streitigkeiten</b>.",
      table: {
        head: ["singolare", "plurale", "significato"],
        rows: [
          ["die Bank", "die Banken", "le banche"],
          ["die Bank", "die Bänke", "le panchine"],
          ["das Wort", "die Wörter", "le parole (vocaboli isolati)"],
          ["das Wort", "die Worte", "le parole (di un discorso)"],
          ["die Mutter", "die Muttern", "i dadi (delle viti)"],
          ["der Rat", "die Ratschläge", "i consigli"]
        ]
      },
      examples: [
        { tr: "Le banche hanno di nuovo alzato i tassi d'interesse.", note: "Banken: istituti di credito" },
        { tr: "Davanti al municipio sono state collocate nuove panchine.", note: "Bänke: panchine, con l'Umlaut" },
        { tr: "Con poche parole ha centrato il problema.", note: "Worte: parole come espressione, non come vocaboli" },
        { tr: "Il dizionario registra più di centomila parole.", note: "Wörter: vocaboli che si contano" },
        { tr: "Ha accettato con gratitudine i consigli dei colleghi.", note: "Ratschläge: plurale sostitutivo di der Rat" },
        { tr: "Dopo le forti piogge il fiume è straripato.", note: "Regenfälle: plurale sostitutivo di der Regen" }
      ]
    },
    vocab: [
      "l'istituto di credito",
      "la panchina",
      "il dado (della vite)",
      "la controversia, la lite",
      "la pioggia, la precipitazione",
      "la nevicata",
      "la disciplina sportiva",
      "il modo di dire, l'espressione idiomatica",
      "la differenza di significato",
      "la forma plurale",
      "ambiguo, polisemico",
      "distinguere"
    ],
    exercises: [
      {
        q: "Nelle pagine di economia: «Mehrere ___ haben ihre Gebühren erhöht.»",
        opts: [
          "Banken",
          "Bänke",
          "Banke"
        ],
        why: "Gli istituti di credito sono <b>Banken</b>; <i>Bänke</i> sono le panchine. <i>Banke</i> non esiste."
      },
      {
        q: "Completa: «Zur Begrüßung sprach der Direktor ein paar ___.» (alcune parole, un breve discorso)",
        opts: [
          "Worte",
          "Wörter",
          "Worten"
        ],
        why: "Parole che formano un discorso: <b>Worte</b>. <i>Wörter</i> sono vocaboli isolati, che si contano o si elencano; <i>Worten</i> è il dativo plurale (<i>mit wenigen Worten</i>), mentre qui serve l'accusativo."
      },
      {
        q: "Qual è il plurale usuale di «der Rat» nel senso di «consiglio», «suggerimento»?",
        opts: [
          "die Ratschläge",
          "die Räte",
          "die Rate"
        ],
        why: "Nel senso di suggerimento <i>Rat</i> non ha un plurale d'uso: si ricorre al plurale sostitutivo <b>Ratschläge</b>. <i>Räte</i> sono gli organi collegiali o i loro membri (<i>Stadträte</i>); <i>die Rate</i> è la rata, un'altra parola."
      },
      {
        q: "Completa: «Das neue Wörterbuch verzeichnet rund 140 000 ___.»",
        hint: "plurale di das Wort: vocaboli che si contano",
        why: "<b>Wörter</b>: un dizionario conta vocaboli isolati. Attenzione all'Umlaut: <i>Worter</i> non esiste."
      },
      {
        q: "Completa: «An der Schraube fehlt eine Mutter; im Werkzeugkasten liegen aber noch zwei ___.»",
        hint: "plurale di die Mutter nel senso di «dado»",
        why: "<b>Muttern</b> (o <b>Schraubenmuttern</b>): il dado fa il plurale in <i>-n</i>, senza Umlaut. <i>Mütter</i> sono le madri."
      },
      {
        q: "Completa con due plurali sostitutivi: nella prima lacuna il plurale di «der Regen», nella seconda quello di «der Rat» (consiglio).",
        tr: "Le forti piogge delle ultime settimane hanno distrutto il raccolto; ora gli agricoltori ricevono da ogni parte consigli ben intenzionati.",
        why: "<i>Regen</i> non ha un plurale d'uso: si dice <b>Regenfälle</b>. <i>Niederschläge</i> sarebbe più ampio: comprende anche neve e grandine. Per i consigli serve <b>Ratschläge</b>. Entrambi senza <i>-n</i>: il primo è un nominativo, il secondo un accusativo plurale."
      },
      {
        q: "Abbina ogni plurale al suo significato.",
        pairs: [
          "le banche",
          "le panchine",
          "le parole (di un discorso)",
          "le parole (vocaboli isolati)"
        ]
      },
      {
        q: "Traduci: «Le banche hanno ignorato i consigli degli esperti.» (ignorieren, der Ratschlag, der Experte)",
        why: "<i>Die Banken haben die Ratschläge der Experten ignoriert</i>. Due plurali da scegliere bene: <i>Banken</i>, non <i>Bänke</i>, e <i>Ratschläge</i>, perché <i>Rat</i> nel senso di consiglio non ha plurale. Si accettano anche <i>Fachleute</i>, il Präteritum <i>ignorierten</i> e il verbo <i>missachten</i>."
      },
      {
        tr: "Sulle panchine davanti alla banca i clienti aspettavano dalle prime ore del mattino. In poche parole un impiegato spiegò perché la filiale restava chiusa.",
        why: "In <i>Bänken</i> la <b>ä</b> è breve, [ɛ]; in <i>Angestellter</i> l'accento cade su <b>An</b>; in <i>Filiale</i> l'accento cade sulla <b>a</b> lunga: fi-li-<b>a</b>-le."
      },
      {
        tr: "Con poche parole ha detto tutto.",
        why: "In <i>Worten</i> la <b>o</b> è breve, [ɔ]; in <i>wenigen</i> l'accento cade su <b>we</b>; in <i>gesagt</i> l'accento cade su <b>sagt</b> e <b>gt</b> finale si pronuncia [kt]."
      }
    ]
  },
  "lesson:c2-u02-l2": {
    theme: "Lessico tecnico e amministrativo",
    title: "Composti e Fugenelement",
    objectives: [
      "scomporre un composto in Bestimmungswort e Grundwort",
      "ricavare il genere di un composto dall'ultimo elemento",
      "inserire l'elemento di giunzione giusto (-s-, -e-, -n-, -er-)",
      "riconoscere i suffissi dopo cui la -s- è la norma (-ung, -heit, -keit, -tät)"
    ],
    theory: [
      {
        h: "Decide il nome a destra",
        p: "In un composto (<em>Kompositum</em>) l'ultimo elemento, il <strong>Grundwort</strong>, fissa il genere, il plurale e la categoria; gli elementi che lo precedono, i <strong>Bestimmungswörter</strong>, lo specificano. <em>das Haus + die Tür + der Schlüssel</em> danno <em>der Haustürschlüssel</em>, maschile come <em>Schlüssel</em>. Il composto si scrive in una sola parola e l'accento principale cade di norma sul primo elemento: <em><b>Haus</b>türschlüssel</em>."
      },
      {
        h: "L'elemento di giunzione",
        p: "Fra un elemento e l'altro può comparire un <strong>Fugenelement</strong>: <em>-s-</em> (<em>Arbeitszeit, Wohnungsmarkt</em>), <em>-es-</em> (<em>Tageslicht</em>), <em>-e-</em> (<em>Hundebesitzer</em>), <em>-n-</em> o <em>-en-</em> (<em>Sonnenenergie, Leinenpflicht</em>), <em>-er-</em> (<em>Kinderbuch</em>); a volte invece la <em>-e</em> finale del primo elemento cade (<em>die Schule</em> → <em>Schulpflicht</em>). Un indizio affidabile: dopo i suffissi <em>-ung, -heit, -keit, -schaft, -ion, -tät, -ling</em> la giunzione è di norma <em>-s-</em> (<em>Gesundheitswesen, Freiheitsstrafe, Universitätsbibliothek, Lieblingsbuch</em>). Ma è un indizio, non una garanzia, e negli altri casi la giunzione si impara parola per parola, e a volte oscilla: <em>Schadensersatz</em> e <em>Schadenersatz</em> sono entrambi corretti, e in Austria si dice <em>Schweinsbraten</em> dove in Germania si dice <em>Schweinebraten</em>."
      },
      {
        contrast: "L'italiano costruisce con una preposizione e mette il nome principale a sinistra: <em>il mercato degli alloggi, la biblioteca dell'università</em>. Il tedesco capovolge l'ordine: prima ciò che specifica, poi il nome principale, in una sola parola: <em>Wohnungsmarkt, Universitätsbibliothek</em>. Per tradurre si legge da destra a sinistra. E la <em>-s-</em> di giunzione non è un genitivo: compare anche dopo nomi femminili (<em>die Arbeit</em> → <em>Arbeitszeit</em>, <em>die Liebe</em> → <em>Liebesbrief</em>), che al genitivo non prendono mai <em>-s</em>."
      },
      {
        trap: "Il genere viene sempre dall'ultimo elemento, anche quando il primo è più «visibile»: <em>das Arbeitsamt</em> è neutro come <em>das Amt</em>, benché <em>Arbeit</em> sia femminile; <em>der Wohnungsmarkt</em> è maschile come <em>der Markt</em>. E il composto non si spezza: <em>Arbeitsbedingungen</em>, non <em>Arbeits Bedingungen</em>. Il trattino si usa solo per chiarezza o con sigle e nomi propri (<em>E-Mail-Adresse</em>)."
      },
      {
        tip: "Per capire un composto lungo parti da destra: <em>Arbeits|bedingungen</em> sono condizioni, e il primo elemento dice di che cosa (di lavoro). Togli l'eventuale giunzione e cerca le parti nel dizionario una per volta."
      }
    ],
    grammar: {
      title: "Composti ed elemento di giunzione",
      note: "<b>Bestimmungswort + (giunzione) + Grundwort</b>. Il Grundwort, a destra, decide genere e plurale; l'accento principale cade di norma sul primo elemento. Dopo <i>-ung, -heit, -keit, -schaft, -ion, -tät, -ling</i> la giunzione è di norma <i>-s-</i>.",
      table: {
        head: ["elementi", "giunzione", "composto"],
        rows: [
          ["die Arbeit + die Zeit", "-s-", "die Arbeitszeit"],
          ["die Wohnung + der Markt", "-s-", "der Wohnungsmarkt"],
          ["der Hund + der Besitzer", "-e-", "der Hundebesitzer"],
          ["die Sonne + die Energie", "-n-", "die Sonnenenergie"],
          ["das Kind + das Buch", "-er-", "das Kinderbuch"],
          ["die Schule + die Pflicht", "cade la -e", "die Schulpflicht"]
        ]
      },
      examples: [
        { tr: "Le condizioni di lavoro nell'assistenza sanitaria non sono quasi migliorate.", note: "Arbeit + s + Bedingungen: -s- anche dopo un femminile" },
        { tr: "Il proprietario del cane risponde dei danni.", note: "Hund + e + Besitzer" },
        { tr: "L'energia solare copre già una parte del fabbisogno di elettricità.", note: "Sonne + n + Energie; Strom + Bedarf senza giunzione: la -s di Strombedarfs è la desinenza del genitivo" },
        { tr: "Il libro per bambini è stato tradotto in venti lingue.", note: "Kind + er + Buch: la giunzione coincide con il plurale Kinder" },
        { tr: "La sua lettera d'amore non arrivò mai.", note: "Liebe + s + Brief: -s- dopo un femminile, quindi non è un genitivo" },
        { tr: "L'obbligo scolastico inizia di norma a sei anni.", note: "Schule + Pflicht: la -e finale cade" }
      ]
    },
    vocab: [
      "il composto, la parola composta",
      "la parola di base (l'ultimo elemento del composto)",
      "il determinante (l'elemento che precede la base)",
      "l'elemento di giunzione",
      "la condizione di lavoro",
      "il mercato degli alloggi",
      "la biblioteca universitaria",
      "la pena detentiva",
      "il risarcimento del danno",
      "la sanità, il sistema sanitario",
      "essere composto da, comporsi di",
      "composto (di una parola)"
    ],
    exercises: [
      {
        q: "Che genere ha «Haustürschlüssel» (la chiave della porta di casa)?",
        opts: [
          "der, come Schlüssel",
          "die, come Tür",
          "das, come Haus"
        ],
        why: "Il genere lo decide sempre l'ultimo elemento, il Grundwort: <b>der</b> Schlüssel, quindi <b>der</b> Haustürschlüssel."
      },
      {
        q: "Completa: «Der ___ in München ist seit Jahren angespannt.»",
        hint: "die Wohnung + der Markt, con l'elemento di giunzione",
        why: "<b>Wohnungsmarkt</b>: dopo <i>-ung</i> la giunzione è <i>-s-</i>. Il genere è maschile, come <i>der Markt</i>."
      },
      {
        q: "Completa: «Die ___ ist auch am Sonntag geöffnet.»",
        hint: "die Universität + die Bibliothek",
        why: "<b>Universitätsbibliothek</b>: dopo <i>-tät</i> la giunzione è <i>-s-</i>, e tutto si scrive in una sola parola."
      },
      {
        q: "Completa: «Der Angeklagte wurde zu einer ___ von drei Jahren verurteilt.»",
        hint: "die Freiheit + die Strafe",
        why: "<b>Freiheitsstrafe</b>, «pena detentiva»: dopo <i>-heit</i> la giunzione è <i>-s-</i>."
      },
      {
        q: "Completa: «Die ___ beginnt in Deutschland in der Regel mit sechs Jahren.»",
        hint: "die Schule + die Pflicht",
        why: "<b>Schulpflicht</b>: qui non si aggiunge nulla, anzi la <i>-e</i> finale di <i>Schule</i> cade, come in <i>Schulbuch</i> e <i>Schulweg</i>."
      },
      {
        q: "Completa con due composti: nella prima lacuna «der Hund + der Besitzer», nella seconda «die Leine + die Pflicht».",
        tr: "Molti proprietari di cani protestano contro il nuovo obbligo del guinzaglio nei parchi cittadini.",
        why: "<b>Hundebesitzer</b> con la giunzione <i>-e-</i>, <b>Leinenpflicht</b> con <i>-n-</i>. Il plurale di <i>Hundebesitzer</i> è uguale al singolare; <i>Leinenpflicht</i> è femminile come <i>die Pflicht</i>."
      },
      {
        q: "In quali composti c'è un elemento di giunzione?",
        opts: [
          "Arbeitszeit",
          "Liebesbrief",
          "Haustür",
          "Tischbein"
        ],
        why: "<i>Arbeit<b>s</b>zeit</i> e <i>Liebe<b>s</b>brief</i> hanno la giunzione <i>-s-</i>, anche se <i>Arbeit</i> e <i>Liebe</i> sono femminili. <i>Haus|tür</i> e <i>Tisch|bein</i> uniscono i due nomi senza nulla in mezzo."
      },
      {
        q: "Traduci: «Le condizioni di lavoro nella sanità sono peggiorate.» (die Arbeitsbedingung, das Gesundheitswesen, sich verschlechtern)",
        why: "<i>Die Arbeitsbedingungen im Gesundheitswesen haben sich verschlechtert</i>. Due composti con <i>-s-</i>: <i>Arbeit<b>s</b>bedingungen</i> e <i>Gesundheit<b>s</b>wesen</i>. Si accettano anche <i>sind schlechter geworden</i>, il Präteritum <i>verschlechterten sich</i> e l'ordine con <i>Im Gesundheitswesen</i> in prima posizione."
      },
      {
        tr: "Il mercato degli alloggi nelle città universitarie è teso da anni. Molti studenti trovano una stanza a un prezzo accessibile solo dopo mesi di ricerca.",
        why: "In <i>Wohnungsmarkt</i> l'accento cade su <b>Woh</b>, con la <b>o</b> lunga; in <i>Universitätsstädten</i> l'accento principale cade su <b>tät</b>; in <i>monatelanger</i> l'accento cade su <b>Mo</b>."
      },
      {
        tr: "Le condizioni di lavoro sono nettamente migliorate.",
        why: "In <i>Arbeitsbedingungen</i> l'accento principale cade su <b>Ar</b>, il primo elemento del composto; in <i>deutlich</i> <b>eu</b> si pronuncia [ɔʏ]; in <i>verbessert</i> l'accento cade su <b>bes</b>."
      }
    ]
  },
  "lesson:c2-u02-l3": {
    theme: "Lessico astratto",
    title: "Derivazione e Fremdwörter",
    objectives: [
      "formare nomi astratti con -ung, -heit, -keit",
      "scegliere fra -heit e -keit",
      "capire il valore dei prefissi ver-, zer-, ent-, miss-",
      "ricavare il genere dei Fremdwörter dal suffisso"
    ],
    theory: [
      {
        h: "Suffissi che decidono il genere",
        p: "Un suffisso trasforma una parola in un'altra categoria e ne fissa il genere. <em>-ung</em> forma nomi da verbi: <em>verbessern</em> → <em>die Verbesserung</em>. <em>-heit</em>, <em>-keit</em> e <em>-igkeit</em> formano nomi da aggettivi: <em>frei</em> → <em>die Freiheit</em>, <em>nachhaltig</em> → <em>die Nachhaltigkeit</em>, <em>genau</em> → <em>die Genauigkeit</em>. I nomi in <strong>-ung, -heit, -keit, -schaft</strong> sono sempre femminili e fanno il plurale in <em>-en</em>."
      },
      {
        h: "-heit o -keit?",
        p: "<strong>-keit</strong> segue gli aggettivi in <em>-bar, -ig, -lich, -sam</em> (<em>Dankbarkeit, Nachhaltigkeit, Höflichkeit, Wirksamkeit</em>) e di solito quelli in <em>-el</em> ed <em>-er</em> (<em>Eitelkeit, Sauberkeit</em>), con eccezioni come <em>Sicherheit</em> e <em>Dunkelheit</em>. <strong>-heit</strong> vale negli altri casi (<em>Freiheit, Gelassenheit, Schönheit</em>). <strong>-igkeit</strong> si aggiunge ad aggettivi in <em>-los</em> e ad alcuni altri: <em>Arbeitslosigkeit, Genauigkeit</em>."
      },
      {
        h: "Prefissi verbali inseparabili",
        p: "<em>ver-</em> ha più valori: cambiamento (<em>verändern</em>), errore nei riflessivi (<em>sich verschreiben, sich verrechnen, sich verlaufen</em>), consumo fino in fondo (<em>verbrauchen</em>). <em>zer-</em> indica la rottura in pezzi (<em>zerreißen, zerbrechen</em>). <em>ent-</em> indica allontanamento o privazione (<em>entfernen, entwerten</em>). <em>miss-</em> indica che qualcosa riesce male (<em>missverstehen, misslingen</em>). Sono tutti inseparabili e non prendono <em>ge-</em> al participio: <em>zerrissen, missverstanden, entwertet</em>. <em>ver-, zer-, ent-</em> non portano mai l'accento; <em>miss-</em> lo porta in alcuni verbi (<em>missverstehen</em>) e non in altri (<em>misslingen</em>)."
      },
      {
        h: "Fremdwörter: il suffisso dà il genere",
        p: "Anche nelle parole straniere il suffisso orienta il genere: <em>-ion, -ität, -ur, -ie</em> sono di norma femminili (<em>die Nation, die Qualität, die Kultur, die Demokratie</em>); <em>-ismus</em> è maschile (<em>der Realismus</em>); <em>-ment</em> è quasi sempre neutro (<em>das Dokument, das Argument</em>). Molti verbi in <em>-ieren</em> formano nomi in <em>-ierung</em> (<em>digitalisieren</em> → <em>die Digitalisierung</em>), ma non tutti: <em>studieren</em> dà <em>das Studium</em>."
      },
      {
        contrast: "Per un italiano molti Fremdwörter sono trasparenti: <em>-ità</em> corrisponde a <em>-ität</em> (<em>qualità, Qualität</em>), <em>-zione</em> a <em>-tion</em> (<em>nazione, Nation</em>), <em>-ismo</em> a <em>-ismus</em>. Il genere però non si copia dall'italiano: <em>il problema</em> è <em>das Problem</em>, <em>il sistema</em> <em>das System</em>, <em>il metodo</em> <em>die Methode</em>. E ci sono falsi amici: <em>die Firma</em> è la ditta, non la firma (<em>die Unterschrift</em>); <em>der Konkurs</em> è il fallimento, non il concorso."
      },
      {
        trap: "<em>ver-</em> non indica sempre un errore: <em>verkaufen</em> è vendere, <em>verschreiben</em> senza riflessivo è prescrivere (<em>ein Medikament verschreiben</em>), e <em>sich einer Sache verschreiben</em> significa dedicarsi a qualcosa. E <em>verreißen</em> non è <em>zerreißen</em>: un critico <em>verreißt</em> un libro, cioè lo stronca, non lo strappa."
      },
      {
        tip: "Davanti a un nome astratto che non conosci, togli prefissi e suffissi e cerca la base: <em>Unzuverlässigkeit</em> → <em>un-</em> + <em>zuverlässig</em> + <em>-keit</em>, «inaffidabilità»."
      }
    ],
    grammar: {
      title: "Derivazione: suffissi, prefissi, Fremdwörter",
      note: "<b>-ung, -heit, -keit, -schaft, -ion, -ität</b>: femminili. <b>-ismus</b>: maschile. <b>-ment</b>: quasi sempre neutro. <b>ver-, zer-, ent-, miss-</b>: prefissi inseparabili, participio senza <i>ge-</i>.",
      table: {
        head: ["base", "derivato", "significato"],
        rows: [
          ["verbessern", "die Verbesserung", "il miglioramento"],
          ["gelassen", "die Gelassenheit", "la calma, la serenità"],
          ["nachhaltig", "die Nachhaltigkeit", "la sostenibilità"],
          ["reißen", "zerreißen", "strappare in pezzi"],
          ["verstehen", "missverstehen", "fraintendere"],
          ["digitalisieren", "die Digitalisierung", "la digitalizzazione"]
        ]
      },
      examples: [
        { tr: "Il miglioramento delle condizioni di lavoro avrebbe dovuto arrivare da tempo.", note: "verbessern + -ung: nome femminile da un verbo" },
        { tr: "Ammiro la sua calma nelle situazioni difficili.", note: "gelassen + -heit" },
        { tr: "La sostenibilità del progetto è messa in dubbio dagli esperti.", note: "nachhaltig + -keit: -keit dopo -ig" },
        { tr: "Ho sbagliato a scrivere la data.", note: "sich verschreiben: ver- indica un errore" },
        { tr: "Durante la lite strappò la lettera in piccoli pezzi.", note: "zer-: rottura in pezzi; participio zerrissen, senza ge-" },
        { tr: "La digitalizzazione della pubblica amministrazione procede solo lentamente.", note: "digitalisieren + -ung: schema frequente dei verbi in -ieren" }
      ]
    },
    vocab: [
      "la derivazione, la parola derivata",
      "il suffisso",
      "il prefisso",
      "la parola straniera, il forestierismo",
      "la calma, la serenità",
      "la sostenibilità",
      "l'affidabilità",
      "la digitalizzazione",
      "strappare (in pezzi)",
      "sbagliare a scrivere",
      "fraintendere",
      "svalutare; obliterare (un biglietto)"
    ],
    exercises: [
      {
        q: "Quale nome deriva correttamente da «dankbar»?",
        opts: [
          "die Dankbarkeit",
          "die Dankbarheit",
          "die Dankbarung"
        ],
        why: "Dopo <i>-bar</i> il suffisso è <b>-keit</b>: <i>Dankbarkeit</i>, come <i>Verfügbarkeit</i>. <i>-ung</i> forma nomi da verbi, non da aggettivi."
      },
      {
        q: "Che genere ha «Realismus»?",
        opts: [
          "der",
          "die",
          "das"
        ],
        why: "I nomi in <b>-ismus</b> sono maschili: <i>der Realismus, der Optimismus</i>. Il plurale, quando esiste, è in <i>-ismen</i>."
      },
      {
        q: "Su un modulo: «Entschuldigung, ich habe mich beim Datum verschrieben.» Che cosa è successo?",
        opts: [
          "ho sbagliato a scrivere la data",
          "mi sono iscritto per quella data",
          "ho prescritto la data"
        ],
        why: "<b>sich verschreiben</b>: qui <i>ver-</i> indica un errore, come in <i>sich verrechnen</i> e <i>sich verlaufen</i>. Senza riflessivo <i>verschreiben</i> significa «prescrivere» (un farmaco); <i>sich einer Sache verschreiben</i> significa «dedicarsi a qualcosa»."
      },
      {
        q: "Completa: «Seine ___ ist legendär: Er hat noch nie eine Frist versäumt.»",
        hint: "nome da zuverlässig",
        why: "<b>Zuverlässigkeit</b>: dopo <i>-ig</i> il suffisso è <i>-keit</i>; il nome è femminile e si scrive con la maiuscola."
      },
      {
        q: "Completa con due nomi derivati: nella prima lacuna da «digitalisieren», nella seconda da «wirksam».",
        tr: "La digitalizzazione dell'amministrazione dovrebbe accelerare le procedure, ma sulla sua efficacia gli esperti non sono d'accordo.",
        why: "<b>Digitalisierung</b>: da molti verbi in <i>-ieren</i> si forma un nome in <i>-ierung</i>. <b>Wirksamkeit</b>: dopo <i>-sam</i> il suffisso è <i>-keit</i>."
      },
      {
        q: "Abbina ogni verbo al suo significato.",
        pairs: [
          "strappare in pezzi",
          "perdersi, sbagliare strada",
          "fraintendere",
          "svalutare"
        ]
      },
      {
        q: "Quali di questi nomi sono femminili?",
        opts: [
          "Nation",
          "Qualität",
          "Dokument",
          "Optimismus"
        ],
        why: "<i>die Nation</i> e <i>die Qualität</i>: <b>-ion</b> e <b>-ität</b> danno il femminile. <i>das Dokument</i> è neutro, <i>der Optimismus</i> maschile."
      },
      {
        q: "Traduci: «La sostenibilità del progetto è stata messa in dubbio.» (die Nachhaltigkeit, in Zweifel ziehen)",
        why: "<i>Die Nachhaltigkeit des Projekts wurde in Zweifel gezogen</i> (o <i>ist ... in Zweifel gezogen worden</i>). Si accettano anche il verbo semplice <i>bezweifeln</i> e il genitivo <i>Projektes</i>."
      },
      {
        tr: "La digitalizzazione cambia non solo il mondo del lavoro, ma anche la lingua. Molte parole straniere provenienti dall'inglese ormai si usano con assoluta naturalezza.",
        why: "In <i>Digitalisierung</i> l'accento cade su <b>sie</b>; in <i>Fremdwörter</i> l'accento cade su <b>Fremd</b>; in <i>Englischen</i> l'accento cade su <b>Eng</b> e <b>ng</b> si pronuncia [ŋ]."
      },
      {
        tr: "La sua calma mi ha colpito.",
        why: "In <i>Gelassenheit</i> l'accento cade su <b>las</b>; in <i>beeindruckt</i> le due vocali si pronunciano separate, be-<b>ein</b>-druckt, con l'accento su <b>ein</b>."
      }
    ]
  },
  "lesson:c2-u02-test": {
    theme: "Verifica",
    title: "Test: Plurali e formazione delle parole",
    objectives: [
      "verificare i plurali doppi e sostitutivi, i composti e la derivazione"
    ],
    theory: [
      {
        p: "Dieci domande su tutta l'unità. Si supera con il 70%. Non riguardare le lezioni mentre rispondi: se non ricordi qualcosa, meglio tornare indietro e ripassare."
      }
    ],
    exercises: [
      {
        q: "Completa: «In der Innenstadt gibt es zu wenige ___ für ältere Menschen.» (panchine)",
        hint: "plurale di die Bank nel senso di «panchina»",
        why: "<b>Bänke</b> (o <b>Sitzbänke</b>): le panchine hanno l'Umlaut; <i>Banken</i> sono gli istituti di credito."
      },
      {
        q: "Completa: «Die ___ zwischen Vermieter und Mieter landeten schließlich vor Gericht.» (le liti)",
        hint: "plurale usuale di der Streit",
        why: "<b>Streitigkeiten</b>: il plurale <i>Streite</i> esiste, ma è raro; di norma si usa <i>Streitigkeiten</i>."
      },
      {
        q: "Completa: «Das ___ hat die Schließung des Restaurants angeordnet.»",
        hint: "die Gesundheit + das Amt",
        why: "<b>Gesundheitsamt</b>: <i>-s-</i> dopo <i>-heit</i>; neutro come <i>das Amt</i>."
      },
      {
        q: "Completa: «Mit großer ___ steuerte die Pilotin die Maschine durch den Sturm.»",
        hint: "nome da besonnen (ponderato, prudente)",
        why: "<b>Besonnenheit</b>: <i>besonnen</i> + <i>-heit</i>, femminile."
      },
      {
        q: "In quale frase «Worte» è usato correttamente?",
        opts: [
          "Ihre Worte haben mich tief berührt.",
          "Das Wörterbuch enthält 50 000 Worte.",
          "Er kennt schon viele Worte auf Englisch."
        ],
        why: "Le parole di un discorso, che toccano o convincono, sono <b>Worte</b>. Nel dizionario e nel lessico che si conta servono <i>Wörter</i>."
      },
      {
        q: "Che genere ha «Bahnhofsvorplatz» (il piazzale della stazione)?",
        opts: [
          "der",
          "die",
          "das"
        ],
        why: "Decide l'ultimo elemento: <b>der</b> Platz. La <i>-s-</i> dopo <i>Bahnhof</i> è un elemento di giunzione."
      },
      {
        q: "Un critico ha giudicato molto male un romanzo. Quale frase usa il giornale?",
        opts: [
          "Der Kritiker hat den Roman verrissen.",
          "Der Kritiker hat den Roman zerbrochen.",
          "Der Kritiker hat den Roman entrissen."
        ],
        why: "<b>verreißen</b> significa «stroncare». <i>zerbrechen</i> è rompere un oggetto fragile; <i>entreißen</i> è strappare di mano a qualcuno, e vuole il dativo della persona."
      },
      {
        q: "Abbina ogni plurale al suo significato.",
        pairs: [
          "i nastri, i legamenti",
          "i volumi (di un'opera)",
          "le banche",
          "le panchine"
        ]
      },
      {
        tr: "In poche parole la linguista spiegò la differenza fra Wörter e Worte. Gli studenti la ascoltarono con grande attenzione.",
        why: "In <i>Sprachwissenschaftlerin</i> l'accento cade su <b>Sprach</b>; in <i>Wörtern</i> la <b>ö</b> è breve, [œ]; in <i>Aufmerksamkeit</i> l'accento cade su <b>Auf</b>."
      },
      {
        tr: "L'ufficio d'igiene ha disposto la chiusura.",
        why: "In <i>Gesundheitsamt</i> l'accento cade su <b>sund</b>; in <i>Schließung</i> <b>ie</b> è lunga e <b>ß</b> si pronuncia [s]; in <i>angeordnet</i> l'accento cade su <b>an</b>."
      }
    ]
  }
});
