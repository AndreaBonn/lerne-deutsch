/* ============================================================
   Learner-language text (it) for data/core/c2-02.js, unit c2-u04.
   Keys point at ids in the neutral layer; arrays merge by index,
   so their length has to match core.
   Checked by scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("it", {
  "unit:c2-u04": {
    title: "Ciò che mi preoccupa",
    grammarNote: "Relative con il genitivo dessen e deren (die Forscherin, deren Ergebnisse ...) e con la preposizione davanti al pronome (mit dem, auf dessen Grundlage) · relative con wer, was e wo(r)- + preposizione (Wer zu spät kommt, den ...; alles, was ...; vieles, worüber ...) · reggenze di verbi e aggettivi che non si deducono dall'italiano: genitivo (bedürfen, sich enthalten, beschuldigen, sich bewusst sein) e preposizioni (zweifeln an, stolz auf, bestehen auf/in)"
  },
  "lesson:c2-u04-l1": {
    theme: "Argomentazione e scrittura formale",
    title: "dessen, deren, mit dem",
    objectives: [
      "usare dessen e deren per dire «il cui, la cui, i cui»",
      "accordare dessen e deren con l'antecedente, non con il nome che segue",
      "mettere la preposizione davanti al pronome relativo (mit dem, auf deren Grundlage)",
      "declinare l'aggettivo che segue dessen e deren"
    ],
    theory: [
      {
        h: "Il genitivo del pronome relativo",
        p: "Per dire «il cui, la cui, i cui» il tedesco usa il genitivo del pronome relativo: <strong>dessen</strong> se l'antecedente è maschile o neutro, <strong>deren</strong> se è femminile o plurale. <em>Der Autor, dessen Roman verfilmt wurde</em>, «l'autore il cui romanzo è stato trasposto sullo schermo»; <em>die Forscherin, deren Ergebnisse umstritten sind</em>, «la ricercatrice i cui risultati sono contestati». Dopo <em>dessen</em> e <em>deren</em> non c'è articolo: il pronome ne prende il posto, e il nome che segue ha il caso richiesto dalla relativa."
      },
      {
        h: "La preposizione sta davanti",
        p: "Se il verbo della relativa vuole una preposizione, questa apre la relativa e regge il pronome nel suo caso: <em>die Kommission, mit der wir zusammenarbeiten</em> (mit + dativo), <em>das Thema, für das sie sich interessiert</em> (für + accusativo). Lo stesso vale con il genitivo: <em>das Gesetz, auf dessen Grundlage die Behörde entschieden hat</em>; <em>die Kollegen, mit deren Hilfe wir das Projekt abgeschlossen haben</em>. Il verbo coniugato va in fondo, come in ogni subordinata."
      },
      {
        contrast: "In italiano <em>cui</em> è invariabile e l'articolo si accorda con la cosa posseduta: <em>la scrittrice il cui romanzo</em>, <em>l'autore la cui opera</em>. In tedesco succede il contrario: <em>dessen</em> e <em>deren</em> si accordano con il possessore, cioè con l'antecedente, e non c'è articolo. <em>Das Unternehmen, dessen Chefin zurückgetreten ist</em>: <em>dessen</em> perché <em>das Unternehmen</em> è neutro, anche se <em>Chefin</em> è femminile. E dove l'italiano dice <em>con cui, su cui, per cui</em> il tedesco declina il pronome: <em>mit dem, auf die, für das</em>, secondo il genere dell'antecedente e il caso voluto dalla preposizione."
      },
      {
        trap: "<em>deren</em> e <em>derer</em> non sono la stessa cosa: <em>derer</em> è un dimostrativo che anticipa una relativa (<em>die Zahl derer, die das Angebot nutzen</em>, «il numero di coloro che ...»), mai il relativo possessivo. E l'aggettivo dopo <em>dessen</em> e <em>deren</em> prende la declinazione forte, come se non ci fosse articolo: <em>mit dessen neuem Vorschlag</em>, <em>deren letzter Roman</em>; <em>mit dessen neuen Vorschlag</em> si sente nel parlato, ma nello scritto curato è un errore."
      },
      {
        tip: "Per costruire la relativa, parti dalla frase indipendente: <em>Die Regierung beruft sich auf ihre Ergebnisse.</em> Il possessore di <em>Ergebnisse</em> è <em>die Studie</em>, femminile: <em>ihre</em> diventa <em>deren</em>, e tutto il gruppo con la preposizione va in testa alla relativa: <em>die Studie, auf deren Ergebnisse sich die Regierung beruft</em>."
      }
    ],
    grammar: {
      title: "Relativo al genitivo e con preposizione",
      note: "<b>dessen</b>: antecedente maschile o neutro · <b>deren</b>: antecedente femminile o plurale. Si accordano con il possessore, non con il nome che segue, e tolgono l'articolo. La preposizione apre la relativa: <i>mit dem, auf deren Grundlage</i>. Aggettivo dopo dessen/deren: declinazione forte.",
      table: {
        head: ["antecedente", "genitivo", "con preposizione"],
        rows: [
          ["der Autor", "dessen Roman", "mit dem, auf dessen Grundlage"],
          ["das Gesetz", "dessen Text", "nach dem, auf dessen Grundlage"],
          ["die Forscherin", "deren Ergebnisse", "mit der, mit deren Hilfe"],
          ["die Kollegen", "deren Hilfe", "mit denen, mit deren Hilfe"]
        ]
      },
      examples: [
        { tr: "L'autore, il cui romanzo è stato trasposto sullo schermo, vive molto ritirato.", note: "dessen: der Autor è maschile" },
        { tr: "La ricercatrice, i cui risultati sono contestati, ha reso pubblici i suoi dati.", note: "deren: die Forscherin è femminile, anche se Ergebnisse è plurale" },
        { tr: "I colleghi con il cui aiuto abbiamo concluso il progetto nel frattempo se ne sono andati.", note: "preposizione + deren: antecedente plurale" },
        { tr: "La legge sulla cui base l'autorità ha deciso viene sottoposta al vaglio di un tribunale.", note: "auf dessen Grundlage: das Gesetz è neutro" },
        { tr: "La commissione con cui collaboriamo da anni ha pubblicato le sue raccomandazioni.", note: "mit + dativo femminile: mit der" },
        { tr: "Il ministro, con la cui nuova proposta quasi nessuno è d'accordo, insiste sul suo piano.", note: "dopo dessen l'aggettivo è forte: neuem" }
      ]
    },
    vocab: [
      "l'obiezione",
      "la riserva, la perplessità",
      "la portata (di una decisione)",
      "lo stato dei fatti, la fattispecie",
      "la base, il fondamento",
      "l'autore, chi ha dato origine (a qualcosa)",
      "la credibilità",
      "il percorso (professionale)",
      "lasciare (un incarico), uscire (da un organo)",
      "rendere pubblico, dichiarare",
      "controverso, contestato",
      "ritirato, appartato"
    ],
    exercises: [
      {
        q: "Completa: «Der Schriftsteller, ___ Roman gerade verfilmt wird, gibt keine Interviews.»",
        opts: [
          "dessen",
          "deren",
          "dem"
        ],
        why: "L'antecedente <i>der Schriftsteller</i> è maschile: <b>dessen</b>, «il cui». <i>deren</i> andrebbe con un antecedente femminile o plurale; <i>dem</i> è un dativo, non un possessivo."
      },
      {
        q: "Completa: «Das Unternehmen, ___ Chefin vergangene Woche zurückgetreten ist, sucht einen Nachfolger.»",
        opts: [
          "dessen",
          "deren",
          "der"
        ],
        why: "Conta il possessore, <i>das Unternehmen</i>, che è neutro: <b>dessen</b>. Il genere di <i>Chefin</i> non c'entra: chi sceglie <i>deren</i> sta ragionando come con l'italiano «la cui»."
      },
      {
        q: "Completa: «Die Ministerin, mit deren ___ Vorschlag niemand einverstanden war, trat zurück.»",
        opts: [
          "neuem",
          "neuen",
          "neue"
        ],
        why: "Dopo <i>dessen</i> e <i>deren</i> l'aggettivo prende la declinazione forte, come senza articolo: <i>mit</i> + dativo maschile, <b>neuem</b>. <i>neuen</i> è frequente nel parlato, ma nello scritto curato è considerato un errore; <i>neue</i> non è un dativo."
      },
      {
        q: "Completa: «Das ist die Kollegin, mit ___ Hilfe ich die Studie abgeschlossen habe.»",
        hint: "relativo possessivo, antecedente femminile",
        why: "<b>deren</b>: <i>die Kollegin</i> è femminile, e <i>mit deren Hilfe</i> vuol dire «con il cui aiuto». La preposizione resta davanti, il nome dopo il pronome non ha articolo."
      },
      {
        q: "Completa: «Der Kollege, mit ___ ich das Büro teile, ist im Urlaub.»",
        hint: "pronome relativo dopo mit, antecedente maschile",
        why: "<b>dem</b>: <i>mit</i> regge il dativo e l'antecedente <i>der Kollege</i> è maschile. In italiano basta «con cui»; in tedesco il pronome si declina."
      },
      {
        q: "Completa con il relativo possessivo: nella prima lacuna si parla della Studie, nella seconda dell'Institut.",
        tr: "Lo studio, sui cui risultati si basa il governo, è stato realizzato da un istituto il cui finanziamento non è ancora stato chiarito.",
        why: "<b>deren</b>: <i>die Studie</i> è femminile (<i>auf deren Ergebnisse</i>, con <i>sich berufen auf</i> + accusativo). <b>dessen</b>: <i>das Institut</i> è neutro, anche se <i>Finanzierung</i> è femminile."
      },
      {
        q: "In quali frasi il pronome relativo è corretto? (due risposte)",
        opts: [
          "Die Nachbarin, deren Sohn bei uns arbeitet, ist Ärztin.",
          "Das Projekt, an dessen Erfolg niemand mehr glaubte, wurde doch abgeschlossen.",
          "Die Nachbarin, dessen Sohn bei uns arbeitet, ist Ärztin.",
          "Das Projekt, an den Erfolg niemand mehr glaubte, wurde doch abgeschlossen."
        ],
        why: "Le prime due sono corrette: <i>deren</i> per l'antecedente femminile <i>die Nachbarin</i>, <i>an dessen Erfolg</i> per il neutro <i>das Projekt</i>. Nella terza <i>dessen</i> segue il genere di <i>Sohn</i> invece di quello del possessore; nella quarta manca il genitivo: <i>an den Erfolg</i> non dice di chi è il successo."
      },
      {
        q: "Metti in ordine le parole.",
        tr: "L'azienda per i cui prodotti fa pubblicità è da mesi al centro delle critiche.",
        why: "<i>Die Firma, für deren Produkte sie wirbt, steht seit Monaten in der Kritik.</i> <i>werben für</i>: la preposizione apre la relativa, <i>deren</i> rimanda a <i>die Firma</i>, il verbo <i>wirbt</i> chiude la subordinata."
      },
      {
        q: "Traduci: «La scrittrice, il cui ultimo romanzo è stato tradotto in venti lingue, vive a Vienna.» (übersetzen)",
        why: "<i>Die Schriftstellerin, deren letzter Roman in zwanzig Sprachen übersetzt wurde, lebt in Wien.</i> <i>deren</i> perché l'antecedente è femminile; <i>letzter</i> ha la desinenza forte del nominativo maschile. Va bene anche <i>Autorin</i> e il Perfekt passivo <i>übersetzt worden ist</i>."
      },
      {
        tr: "Il rapporto, la cui pubblicazione era attesa da mesi, non contiene quasi nulla di nuovo. Gli esperti sul cui giudizio si basa il governo restano anonimi.",
        why: "In <i>Veröffentlichung</i> l'accento cade su <b>öf</b>; in <i>Urteil</i> l'accento cade su <b>Ur</b>; in <i>anonym</i> l'accento cade su <b>nym</b>."
      },
      {
        tr: "L'autrice, il cui romanzo è stato trasposto sullo schermo, vive molto ritirata.",
        why: "In <i>Autorin</i> l'accento cade su <b>to</b>; in <i>verfilmt</i> l'accento cade su <b>filmt</b>; in <i>zurückgezogen</i> l'accento cade su <b>rück</b>."
      }
    ]
  },
  "lesson:c2-u04-l2": {
    theme: "Argomentazione e scrittura formale",
    title: "wer, was, worüber",
    objectives: [
      "usare wer per «chi» generico e scegliere il caso del correlativo (der, den, dem)",
      "usare was dopo alles, nichts, etwas, das e i superlativi neutri",
      "riferire was a un'intera frase («il che»)",
      "sostituire preposizione + was con wo(r)- + preposizione (worüber, wofür, wovor)"
    ],
    theory: [
      {
        h: "wer: «chi» senza antecedente",
        p: "<strong>wer</strong> apre una relativa che non ha un nome a cui riferirsi: <em>Wer zu spät kommt, den bestraft das Leben</em>, «chi arriva tardi viene punito dalla vita». La principale riprende la relativa con un dimostrativo, il correlativo, nel caso che le serve: <em>den</em> (accusativo, <em>bestrafen</em>), <em>dem</em> (dativo: <em>Wer viel verspricht, dem glaubt man nicht</em>). Se i due casi coincidono, il correlativo si può omettere: <em>Wer A sagt, (der) muss auch B sagen</em>. Anche <em>wer</em> si declina: <em>wem</em>, <em>wen</em>, <em>wessen</em>."
      },
      {
        h: "was e wo(r)-",
        p: "<strong>was</strong> sostituisce <em>das</em> quando l'antecedente non è un nome preciso: dopo <em>alles, nichts, etwas, vieles, manches, das</em> e dopo un superlativo neutro sostantivato (<em>das Beste, was ...</em>). Si usa anche senza antecedente (<em>Was mich beunruhigt, ist ...</em>) e per riprendere un'intera frase: <em>Er hat bestanden, was niemand erwartet hatte</em>, «cosa che nessuno si aspettava». Se il verbo vuole una preposizione, al posto di preposizione + <em>was</em> si usa <strong>wo(r)- + preposizione</strong>: <em>vieles, worüber wir uns nicht einig waren</em>. La <em>r</em> compare davanti a vocale: <em>woran, worauf, worüber</em>, ma <em>wofür, womit, wovon, wovor</em>."
      },
      {
        contrast: "L'italiano distingue <em>chi</em>, <em>ciò che</em> e <em>il che</em>, e il tedesco li copre con due parole: <em>wer</em> per le persone, <em>was</em> per tutto il resto, compreso «il che» riferito a una frase intera. Dove l'italiano dice <em>ciò di cui, ciò su cui, ciò per cui</em>, il tedesco fonde preposizione e pronome: <em>das, worüber wir sprechen</em>, <em>alles, wofür sie gekämpft hat</em>. E <em>chi</em> in italiano non vuole riprese (<em>chi tace acconsente</em>), mentre il tedesco di regola aggiunge il correlativo quando cambia il caso: <em>Wem die Reform schadet, den hat man nicht gefragt</em>."
      },
      {
        trap: "Dopo <em>alles, nichts, etwas, das Einzige, das Beste</em> ci vuole <em>was</em>, non <em>das</em>: <em>Alles, was er sagt</em>, non <em>alles, das er sagt</em>. Nello scritto formale evita <em>über was, für was</em>: sono colloquiali, la forma curata è <em>worüber, wofür</em>. Con un antecedente che è un nome preciso, invece, resta preposizione + <em>der/die/das</em>: <em>die Frage, über die wir sprechen</em>."
      },
      {
        tip: "Per scegliere fra <em>wer</em> e il correlativo, fai due domande separate: che caso vuole il verbo della relativa (<em>schaden</em> + dativo: <em>wem</em>)? E che caso vuole il verbo della principale (<em>fragen</em> + accusativo: <em>den</em>)? Le due risposte possono essere diverse, ed è proprio lì che serve il correlativo."
      }
    ],
    grammar: {
      title: "Relative con wer, was e wo(r)-",
      note: "<b>wer ..., der/den/dem</b>: «chi», correlativo nel caso della principale (omissibile se il caso coincide). <b>was</b>: dopo alles, nichts, etwas, das, das Beste; senza antecedente; riferito a una frase intera. <b>wo(r)- + preposizione</b> al posto di preposizione + was: <i>worüber, woran, wofür, wovor</i>.",
      table: {
        head: ["antecedente", "relativo", "esempio"],
        rows: [
          ["nessuno (persone)", "wer, wem, wen", "Wer lügt, dem glaubt man nicht."],
          ["alles, nichts, etwas, das", "was", "Alles, was er sagt, stimmt."],
          ["superlativo neutro", "was", "das Beste, was passieren konnte"],
          ["una frase intera", "was", "..., was niemand erwartet hatte."],
          ["was + preposizione", "wo(r)- + preposizione", "vieles, worüber wir streiten"]
        ]
      },
      examples: [
        { tr: "Chi arriva tardi viene punito dalla vita.", note: "wer + correlativo all'accusativo: bestrafen vuole l'accusativo" },
        { tr: "Ciò che mi preoccupa è l'indifferenza di molte persone.", note: "was senza antecedente, come soggetto" },
        { tr: "Tutto quello che ha affermato si è potuto confutare.", note: "dopo alles: was" },
        { tr: "La cosa migliore che potesse capitarci è stato questo rifiuto.", note: "dopo un superlativo neutro: was" },
        { tr: "Ha superato l'esame, cosa che nessuno si aspettava.", note: "was riprende tutta la frase precedente" },
        { tr: "C'erano molte cose su cui non eravamo d'accordo.", note: "sich einig sein über: worüber" }
      ]
    },
    vocab: [
      "l'indifferenza",
      "l'affermazione, la tesi",
      "la contraddizione",
      "la conclusione (logica)",
      "il ragionamento fallace, l'illusione",
      "la richiesta, la questione che sta a cuore",
      "confutare, smentire",
      "documentare, comprovare",
      "preoccupare, inquietare",
      "ammettere, concedere",
      "fondato, convincente",
      "discutibile, dubbio"
    ],
    exercises: [
      {
        q: "Completa: «Alles, ___ sie gesagt hat, war gelogen.»",
        opts: [
          "was",
          "das",
          "welches"
        ],
        why: "Dopo <i>alles</i> il relativo è <b>was</b>: l'antecedente non è un nome preciso. <i>das</i> e <i>welches</i> richiederebbero un nome neutro come antecedente."
      },
      {
        q: "Completa: «___ sich nicht an die Regeln hält, ___ droht ein Bußgeld.»",
        opts: [
          "Wer ... dem",
          "Wer ... der",
          "Der ... wer"
        ],
        why: "<i>Wer</i> è il soggetto di <i>sich halten</i>; nella principale <i>drohen</i> vuole il dativo, quindi il correlativo è <b>dem</b>: «a chi non rispetta le regole spetta una multa». <i>der</i> sarebbe un nominativo."
      },
      {
        q: "In un testo scritto formale: «Das ist eine Frage, ___ ich lange nachgedacht habe.»",
        opts: [
          "über die",
          "worüber",
          "über was"
        ],
        why: "L'antecedente è un nome preciso, <i>eine Frage</i>, femminile: <b>über die</b> (<i>nachdenken über</i> + accusativo). <i>worüber</i> si usa con <i>alles, etwas, das</i> o con una frase intera; con un nome è antiquato o colloquiale. <i>über was</i> è colloquiale."
      },
      {
        q: "Completa: «Das Einzige, ___ mich an dem Vorschlag stört, ist der Zeitplan.»",
        hint: "relativo dopo das Einzige",
        why: "<b>was</b>: <i>das Einzige</i>, come <i>alles</i> e i superlativi neutri, vuole <i>was</i>."
      },
      {
        q: "Completa: «Das ist genau das, ___ ich Angst hatte.»",
        hint: "wo(r)- + la preposizione di Angst haben",
        why: "<b>wovor</b>: <i>Angst haben vor</i>; dopo <i>das</i> preposizione + <i>was</i> diventa <i>wo(r)-</i> + preposizione. Davanti a consonante niente <i>r</i>: <i>wovor</i>, non <i>worvor</i>."
      },
      {
        q: "Completa con wer declinato e il correlativo.",
        tr: "Chi è più danneggiato dalla riforma è stato il meno consultato.",
        why: "<b>Wem</b>: <i>schaden</i> vuole il dativo. <b>den</b>: nella principale <i>fragen</i> vuole l'accusativo. I casi sono diversi, quindi il correlativo rende la frase chiara; a rigore si potrebbe omettere, perché il dativo <i>wem</i> sta più in basso dell'accusativo nella gerarchia dei casi, ma lo scritto curato lo mantiene."
      },
      {
        q: "Abbina ogni parola al suo significato.",
        pairs: [
          "ammettere, concedere",
          "confutare, smentire",
          "fondato, convincente",
          "il ragionamento fallace"
        ]
      },
      {
        q: "Metti in ordine le parole.",
        tr: "Ciò che del rapporto mi preoccupa è l'indifferenza delle autorità.",
        why: "<i>Was mich an dem Bericht beunruhigt, ist die Gleichgültigkeit der Behörden.</i> La relativa con <i>was</i> fa da soggetto e occupa il primo posto; il verbo <i>ist</i> segue subito dopo la virgola."
      },
      {
        q: "Traduci: «Tutto ciò di cui abbiamo discusso resta riservato.» (vertraulich)",
        why: "<i>Alles, worüber wir gesprochen haben, bleibt vertraulich.</i> Con <i>sprechen über</i> serve <i>worüber</i>; con un verbo transitivo basta <i>was</i>: <i>Alles, was wir besprochen haben</i> (o <i>diskutiert haben</i>)."
      },
      {
        tr: "Ciò che preoccupa molti lettori non è lo studio in sé, ma ciò che la politica ne fa. Chi legge con attenzione i numeri non ci trova quasi nulla per cui ci si debba agitare.",
        why: "In <i>beunruhigt</i> l'accento cade su <b>un</b>; in <i>aufregen</i> l'accento cade su <b>auf</b>; in <i>worüber</i> l'accento cade su <b>ü</b>."
      },
      {
        tr: "Tutto quello che ha affermato si è potuto confutare.",
        why: "In <i>behauptet</i> l'accento cade su <b>haup</b>; in <i>widerlegen</i>, verbo non separabile, l'accento cade su <b>le</b>; in <i>ließ</i> <b>ie</b> è lunga."
      }
    ]
  },
  "lesson:c2-u04-l3": {
    theme: "Argomentazione e scrittura formale",
    title: "Reggenze che non si indovinano",
    objectives: [
      "usare verbi e aggettivi con il genitivo (bedürfen, sich enthalten, beschuldigen, sich bewusst sein)",
      "scegliere la preposizione giusta dove l'italiano ne usa un'altra (zweifeln an, stolz auf)",
      "distinguere bestehen auf, bestehen aus e bestehen in",
      "riconoscere il registro formale delle reggenze al genitivo"
    ],
    theory: [
      {
        h: "Verbi e aggettivi con il genitivo",
        p: "Un piccolo gruppo di verbi regge un complemento al genitivo: <em>bedürfen</em> (aver bisogno di), <em>gedenken</em> (commemorare), <em>sich enthalten</em> (astenersi da), <em>sich vergewissern</em> (accertarsi di), <em>sich bedienen</em> (servirsi di). Alcuni hanno un accusativo e un genitivo: <em>jemanden einer Sache beschuldigen</em> o <em>anklagen</em>, «accusare qualcuno di qualcosa», e <em>jemanden einer Sache verdächtigen</em>, «sospettare qualcuno di qualcosa». Lo stesso vale per alcuni aggettivi: <em>sich einer Sache bewusst sein</em>, <em>einer Sache würdig</em>, <em>sich einer Sache schuldig machen</em>. Verbi come <em>bedürfen</em>, <em>gedenken</em>, <em>sich enthalten</em> e <em>beschuldigen</em> appartengono al registro alto: nella lingua di tutti i giorni si dice <em>brauchen</em> al posto di <em>bedürfen</em>. <em>sich einer Sache bewusst sein</em> invece è comune anche nell'uso corrente."
      },
      {
        h: "La preposizione va imparata con il verbo",
        p: "Molti verbi e aggettivi tedeschi vogliono una preposizione fissa, e il caso che segue fa parte della reggenza: <em>zweifeln an</em> + dativo, <em>stolz auf</em> + accusativo, <em>angewiesen auf</em> + accusativo, <em>sich erkundigen nach</em> + dativo. Lo stesso verbo cambia significato con la preposizione: <em>bestehen auf</em> (insistere su), <em>bestehen aus</em> (essere composto di), <em>bestehen in</em> (consistere in)."
      },
      {
        contrast: "Molte reggenze tedesche non coincidono con quelle italiane, e tradurre la preposizione parola per parola porta all'errore: «dubitare <em>di</em>» è <em>zweifeln an</em>, «essere orgoglioso <em>di</em>» è <em>stolz auf</em>, «dipendere <em>da</em>» è <em>abhängen von</em>, «abituarsi <em>a</em>» è <em>sich gewöhnen an</em>. Dove l'italiano usa <em>di</em> senza articolo particolare (<em>aver bisogno di, accusare di, essere consapevole di</em>), il tedesco formale spesso usa il genitivo senza alcuna preposizione: <em>der Hilfe bedürfen</em>, <em>des Betrugs beschuldigen</em>, <em>sich der Risiken bewusst sein</em>."
      },
      {
        trap: "<em>sich interessieren für</em>, ma <em>interessiert an</em>: il verbo e l'aggettivo non hanno la stessa preposizione. E con <em>bedürfen</em> il complemento non è mai all'accusativo: <em>Der Plan bedarf einer Überarbeitung</em>, non <em>eine Überarbeitung</em>."
      },
      {
        tip: "Impara verbi e aggettivi sempre con la loro reggenza, come un'unica parola: non <em>zweifeln</em>, ma <em>an etwas (Dat.) zweifeln</em>; non <em>bewusst</em>, ma <em>sich einer Sache (Gen.) bewusst sein</em>."
      }
    ],
    grammar: {
      title: "Reggenze di verbi e aggettivi",
      note: "<b>Genitivo</b>: bedürfen, gedenken, sich enthalten, sich vergewissern; jemanden einer Sache beschuldigen; sich einer Sache bewusst sein, einer Sache würdig. <b>Preposizioni</b>: zweifeln an + Dat., stolz auf + Akk., angewiesen auf + Akk., bestehen auf / aus / in + Dat. I verbi con il genitivo sono di registro formale.",
      table: {
        head: ["tedesco", "italiano"],
        rows: [
          ["einer Sache bedürfen", "aver bisogno di qualcosa"],
          ["jemanden einer Sache beschuldigen", "accusare qualcuno di qualcosa"],
          ["sich einer Sache bewusst sein", "essere consapevole di qualcosa"],
          ["an einer Sache zweifeln", "dubitare di qualcosa"],
          ["auf etwas stolz sein", "essere orgoglioso di qualcosa"],
          ["auf etwas bestehen / aus etwas bestehen / in etwas bestehen", "insistere su / essere composto di / consistere in"]
        ]
      },
      examples: [
        { tr: "La riforma ha bisogno di un esame approfondito.", note: "bedürfen + genitivo: einer gründlichen Prüfung" },
        { tr: "Lo accusarono di frode.", note: "beschuldigen + accusativo della persona + genitivo dell'accusa" },
        { tr: "È assolutamente consapevole dei rischi.", note: "sich bewusst sein + genitivo plurale: der Risiken" },
        { tr: "Due deputati si sono astenuti.", note: "sich der Stimme enthalten: genitivo" },
        { tr: "Nessuno dubita dell'autenticità del documento.", note: "zweifeln an + dativo, non «von»" },
        { tr: "L'opposizione insiste su un'audizione pubblica.", note: "bestehen auf + dativo: insistere" }
      ]
    },
    vocab: [
      "aver bisogno di (+ genitivo)",
      "astenersi da (+ genitivo)",
      "accusare (qualcuno di qualcosa)",
      "commemorare (+ genitivo)",
      "accertarsi di (+ genitivo)",
      "dubitare di",
      "dipendere da, aver bisogno di",
      "consapevole",
      "orgoglioso di",
      "degno di (+ genitivo)",
      "la reggenza",
      "il rimprovero, l'accusa"
    ],
    exercises: [
      {
        q: "Completa: «Die Gesetzesänderung bedarf ___.»",
        opts: [
          "der Zustimmung des Bundesrats",
          "die Zustimmung des Bundesrats",
          "auf die Zustimmung des Bundesrats"
        ],
        why: "<i>bedürfen</i> regge il genitivo: <b>der Zustimmung</b>. L'accusativo <i>die Zustimmung</i> va con <i>brauchen</i>; <i>bedürfen</i> non vuole preposizioni."
      },
      {
        q: "Completa: «Niemand zweifelt ___ ihrer Ehrlichkeit.»",
        opts: [
          "an",
          "von",
          "über"
        ],
        why: "<b>zweifeln an</b> + dativo. L'italiano «dubitare di» spinge verso <i>von</i>, che qui è sbagliato."
      },
      {
        q: "«L'opposizione insiste su un'audizione pubblica.» Completa: «Die Opposition besteht ___ einer öffentlichen Anhörung.»",
        opts: [
          "auf",
          "aus",
          "in"
        ],
        why: "<b>bestehen auf</b>: insistere. <i>bestehen aus</i> vuol dire «essere composto di», <i>bestehen in</i> «consistere in»."
      },
      {
        q: "Completa: «Sie ist sich ___ Risiken durchaus bewusst.»",
        hint: "sich bewusst sein + genitivo plurale",
        why: "<b>der</b>: <i>sich einer Sache bewusst sein</i> regge il genitivo, e il genitivo plurale dell'articolo è <i>der</i>."
      },
      {
        q: "Completa: «Viele Rentner sind ___ die Hilfe ihrer Kinder angewiesen.»",
        hint: "preposizione di angewiesen",
        why: "<b>auf</b>: <i>angewiesen sein auf</i> + accusativo, «dipendere da, aver bisogno di»."
      },
      {
        q: "Completa: nella prima lacuna il pronome relativo, nella seconda la preposizione di bestehen.",
        tr: "Il deputato, accusato di corruzione, respinge l'accusa e insiste su un'indagine indipendente.",
        why: "<b>den</b>: <i>beschuldigen</i> vuole la persona all'accusativo (e l'accusa al genitivo, <i>der Bestechung</i>). <b>auf</b>: <i>bestehen auf</i>, «insistere su»."
      },
      {
        q: "In quali frasi la reggenza è corretta? (due risposte)",
        opts: [
          "Der Plan bedarf einer gründlichen Überarbeitung.",
          "Wir sind stolz auf unsere Ergebnisse.",
          "Der Plan bedarf eine gründliche Überarbeitung.",
          "Sie interessiert sich an moderner Kunst."
        ],
        why: "Le prime due sono corrette: <i>bedürfen</i> + genitivo, <i>stolz auf</i> + accusativo. Nella terza c'è un accusativo al posto del genitivo; nella quarta il verbo vuole <i>für</i>: <i>sich für moderne Kunst interessieren</i>, mentre <i>an</i> va con l'aggettivo <i>interessiert</i>."
      },
      {
        q: "Metti in ordine le parole.",
        tr: "L'imputata nega di essersi resa colpevole di frode.",
        why: "<i>Die Angeklagte bestreitet, sich des Betrugs schuldig gemacht zu haben.</i> <i>sich einer Sache schuldig machen</i> regge il genitivo; l'infinito passato <i>gemacht zu haben</i> chiude la frase."
      },
      {
        q: "Traduci: «Siamo consapevoli della responsabilità che ci assumiamo.» (sich bewusst sein, übernehmen)",
        why: "<i>Wir sind uns der Verantwortung bewusst, die wir übernehmen.</i> <i>sich bewusst sein</i> vuole il genitivo, e il riflessivo è al dativo: <i>uns</i>. La relativa può anche stare subito dopo <i>Verantwortung</i>: <i>Wir sind uns der Verantwortung, die wir übernehmen, bewusst</i>."
      },
      {
        tr: "La richiesta ha bisogno dell'approvazione di tutti i membri. Chi non può partecipare alla votazione dovrebbe informarsi prima presso il consiglio direttivo sulle scadenze.",
        why: "In <i>Zustimmung</i> l'accento cade su <b>Zu</b>; in <i>Abstimmung</i> l'accento cade su <b>Ab</b>; in <i>erkundigen</i> l'accento cade su <b>kun</b>."
      },
      {
        tr: "È assolutamente consapevole dei rischi.",
        why: "In <i>Risiken</i> l'accento cade su <b>Ri</b>; in <i>durchaus</i> l'accento può cadere su <b>durch</b> o su <b>aus</b>; in <i>bewusst</i> la <b>u</b> è breve."
      }
    ]
  },
  "lesson:c2-u04-test": {
    theme: "Verifica",
    title: "Test: Ciò che mi preoccupa",
    objectives: [
      "verificare le relative e le reggenze dell'unità e ripassare il livello C2 nell'esame finale"
    ],
    theory: [
      {
        p: "Esame finale del livello C2: dodici domande sull'unità, con un ripasso dell'attributo participiale (unità 1) e del registro (unità 3). Si supera con il 70%. Non riguardare le lezioni mentre rispondi: se non ricordi qualcosa, meglio tornare indietro e ripassare."
      }
    ],
    exercises: [
      {
        q: "Completa: «Die Firma, ___ Gründerin den Preis erhalten hat, sitzt in Basel.»",
        hint: "relativo possessivo, antecedente femminile",
        why: "<b>deren</b>: <i>die Firma</i> è femminile, e <i>deren Gründerin</i> vuol dire «la cui fondatrice»."
      },
      {
        q: "Completa: «Er hat alles verloren, ___ ihm wichtig war.»",
        hint: "relativo dopo alles",
        why: "<b>was</b>: dopo <i>alles</i> il relativo è sempre <i>was</i>."
      },
      {
        q: "Completa: «Das Vorhaben bedarf ___ sorgfältigen Planung.»",
        hint: "bedürfen + genitivo, articolo",
        why: "<b>einer</b> (o <b>der</b>): <i>bedürfen</i> regge il genitivo, e il genitivo femminile dell'articolo è <i>einer</i> o <i>der</i>."
      },
      {
        q: "Completa con l'attributo participiale: «Die im Bericht ___ Mängel wurden inzwischen behoben.» (contestare: beanstanden)",
        hint: "participio II di beanstanden, plurale dopo die",
        why: "<b>beanstandeten</b>: participio II con senso passivo («le carenze contestate nel rapporto»), desinenza <i>-en</i> dopo l'articolo plurale <i>die</i>. <i>beanstanden</i> è inseparabile: niente <i>ge-</i>."
      },
      {
        q: "In una lettera formale, quale frase è adatta?",
        opts: [
          "Wir bitten Sie, uns die fehlenden Unterlagen bis zum 15. März zukommen zu lassen.",
          "Schicken Sie uns mal die fehlenden Sachen bis zum 15. März.",
          "Wär nett, wenn Sie uns die Unterlagen bis zum 15. März schicken."
        ],
        why: "La prima usa il registro formale: <i>wir bitten Sie</i>, <i>Unterlagen</i>, <i>zukommen lassen</i>. Nella seconda <i>mal</i> e <i>Sachen</i> sono colloquiali; nella terza <i>Wär nett</i> è da conversazione."
      },
      {
        q: "Completa: «Die Frage, ___ es eigentlich ankommt, hat niemand gestellt.»",
        opts: [
          "auf die",
          "auf der",
          "auf welcher"
        ],
        why: "<i>es kommt auf etwas an</i> vuole <i>auf</i> + accusativo, e l'antecedente <i>die Frage</i> è femminile: <b>auf die</b>. <i>auf der</i> e <i>auf welcher</i> sono dativi."
      },
      {
        q: "«La difficoltà consiste nel convincere tutte le persone coinvolte.» Completa: «Die Schwierigkeit besteht ___, alle Beteiligten zu überzeugen.»",
        opts: [
          "darin",
          "darauf",
          "daraus"
        ],
        why: "<b>bestehen in</b>, «consistere in», con il pronominale <i>darin</i> che anticipa l'infinito. <i>darauf</i> vorrebbe dire «insistere», <i>daraus</i> «essere composto di»."
      },
      {
        q: "Quali frasi sono corrette? (due risposte)",
        opts: [
          "Wer zuletzt lacht, lacht am besten.",
          "Die Studie, auf deren Ergebnisse sich der Bericht stützt, ist veraltet.",
          "Die Studie, auf dessen Ergebnisse sich der Bericht stützt, ist veraltet.",
          "Er ist sich die Risiken bewusst."
        ],
        why: "Le prime due sono corrette: <i>wer</i> senza correlativo (stesso caso nelle due frasi) e <i>deren</i> per l'antecedente femminile <i>die Studie</i>. Nella terza <i>dessen</i> non concorda con <i>Studie</i>; nella quarta <i>sich bewusst sein</i> vuole il genitivo: <i>der Risiken</i>."
      },
      {
        q: "Completa: nella prima lacuna il relativo possessivo, nella seconda l'articolo retto da sich schuldig machen.",
        tr: "La ministra, di cui da settimane si chiedono le dimissioni, nega di essersi resa colpevole di un comportamento scorretto.",
        why: "<b>deren</b>: <i>die Ministerin</i> è femminile. <b>eines</b> (o <b>des</b>): <i>sich einer Sache schuldig machen</i> regge il genitivo, e <i>Fehlverhalten</i> è neutro: <i>eines Fehlverhaltens</i>."
      },
      {
        q: "Traduci in registro formale: «Chi è consapevole dei rischi non ha bisogno di ulteriori avvertimenti.» (sich bewusst sein, bedürfen)",
        why: "<i>Wer sich der Risiken bewusst ist, bedarf keiner weiteren Warnungen.</i> <i>sich bewusst sein</i> e <i>bedürfen</i> reggono entrambi il genitivo; il correlativo <i>der</i> si può aggiungere o omettere, perché <i>wer</i> e il soggetto della principale sono tutti e due al nominativo."
      },
      {
        tr: "Ciò che preoccupa gli esperti non è tanto il numero dei casi quanto l'indifferenza con cui le autorità reagiscono. Le misure indicate nel rapporto hanno urgente bisogno di una verifica.",
        why: "In <i>Gleichgültigkeit</i> l'accento cade su <b>Gleich</b>; in <i>Behörden</i> l'accento cade su <b>hör</b>; in <i>Überprüfung</i> l'accento cade su <b>prü</b>."
      },
      {
        tr: "Chi è consapevole della portata della propria decisione agisce con più prudenza.",
        why: "In <i>Tragweite</i> l'accento cade su <b>Trag</b>; in <i>Entscheidung</i> l'accento cade su <b>schei</b>; in <i>vorsichtiger</i> l'accento cade su <b>vor</b>."
      }
    ]
  }
});
