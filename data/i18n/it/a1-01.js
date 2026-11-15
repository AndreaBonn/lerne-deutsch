/* ============================================================
   Learner-language text (it) for data/core/a1-01.js, unit a1-u01.
   Keys point at ids in the neutral layer; arrays merge by index,
   so their length has to match core.
   Checked by scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("it", {
  "unit:a1-u01": {
    title: "Al caffè",
    grammarNote: "presente · genere e plurale · articoli · du e Sie"
  },
  "lesson:a1-u01-l1": {
    theme: "Vita quotidiana",
    title: "Saluti e prima ordinazione",
    objectives: [
      "salutare e congedarsi a seconda dell'ora del giorno",
      "ordinare un caffè con la formula «einen Kaffee, bitte»",
      "coniugare heißen al presente e mettere il verbo al secondo posto"
    ],
    theory: [
      {
        h: "Il saluto dipende dall'ora, e il tedesco ne ha più di uno",
        p: "L'italiano copre mattina e primo pomeriggio con <strong>buongiorno</strong>. Il tedesco distingue: <strong>Guten Morgen</strong> la mattina, <strong>Guten Tag</strong> dalla tarda mattinata fino a sera, <strong>Guten Abend</strong> quando cala la sera. I confini sono sfumati e cambiano da persona a persona. <strong>Gute Nacht</strong> non è un saluto d'incontro: si dice congedandosi a sera tarda o andando a letto, come «buonanotte»."
      },
      {
        h: "Hallo e Tschüss: il «ciao» tedesco ha due parole",
        p: "Tra persone che si danno del <em>du</em> si dice <strong>Hallo</strong> all'incontro e <strong>Tschüss</strong> quando ci si lascia. Con sconosciuti e in contesti formali si dice <strong>Guten Tag</strong> arrivando e <strong>Auf Wiedersehen</strong> andando via. Nel sud della Germania e in Austria senti anche <em>Servus</em> e <em>Grüß Gott</em>, in Svizzera <em>Grüezi</em>: li capisci al volo, ma per cominciare <em>Guten Tag</em> va bene dappertutto."
      },
      {
        contrast: "In italiano <em>ciao</em> serve sia per salutare sia per congedarsi, e <em>buongiorno</em> copre quasi tutta la prima metà della giornata. In tedesco le due funzioni di «ciao» si separano (<em>Hallo</em> all'arrivo, <em>Tschüss</em> all'uscita) e la giornata si divide in tre saluti. L'errore tipico è dire <em>Gute Nacht</em> entrando in un locale la sera: come «buonanotte», è solo un saluto di commiato."
      },
      {
        h: "Il verbo sta al secondo posto",
        p: "Nella frase affermativa il verbo coniugato occupa sempre la <strong>seconda posizione</strong>, qualunque cosa venga prima: <em>Ich trinke Tee</em>, ma anche <em>Heute trinke ich Tee</em>, dove il soggetto passa dopo il verbo. La prima posizione può essere occupata da una sola parola o da un gruppo di parole, mai da due elementi separati."
      },
      {
        contrast: "In italiano il pronome soggetto si omette quasi sempre: <em>Mi chiamo Anna</em>, <em>Parlo italiano</em>. In tedesco non si può: <em>Ich heiße Anna</em>, <em>Ich spreche Deutsch</em>. In una frase dichiarativa il soggetto va espresso: se non c'è un nome (<em>Der Kaffee ist heiß</em>), serve il pronome, perché le desinenze del verbo da sole non bastano a identificare la persona."
      },
      {
        h: "Pronuncia: sei suoni da non leggere all'italiana",
        list: [
          "<b>z</b> si legge sempre <em>ts</em>, come in «zio»: <em>Zucker</em>, <em>zwei</em>",
          "<b>ei</b> si legge <em>ai</em> (<em>heißen</em> suona «haissen»), mentre <b>ie</b> è una <em>i</em> lunga (<em>Wie</em> suona «vi»)",
          "<b>w</b> si legge come la <em>v</em> italiana (<em>Wasser</em> suona «vasser»), mentre la <b>v</b> tedesca nelle parole native suona spesso come <em>f</em> (<em>Vater</em>)",
          "<b>s</b> semplice all'inizio di parola o di sillaba davanti a vocale è sonora, come in «rosa» (<em>Saft</em>, <em>Rose</em>); in fine di parola resta sorda (<em>Eis</em>); <b>ß</b> e <b>ss</b> sono sorde, come in «sasso»: <em>heißen</em>, <em>Tschüss</em>",
          "<b>ü</b> si pronuncia con la bocca della <em>i</em> e le labbra della <em>u</em>: non esiste in italiano",
          "<b>ch</b> dopo <em>i</em> ed <em>e</em> è un soffio sottile, non una <em>k</em>: <em>ich</em>, <em>Rechnung</em>"
        ]
      },
      {
        trap: "In Germania <strong>Kaffee</strong> (la bevanda) ha di norma l'accento sulla prima sillaba, KÀ-fe, mentre <strong>Café</strong> (il locale) lo ha sull'ultima, come l'italiano «caffè»; in alcune varietà regionali, per esempio in Austria, anche <em>Kaffee</em> può avere l'accento finale. Non farti ingannare dall'ortografia simile: sono due parole diverse."
      },
      {
        tip: "<em>Einen Kaffee, bitte</em> è una formula completa: impara a memoria <em>einen Kaffee</em>, <em>einen Tee</em>, <em>ein Wasser</em>, <em>eine Cola</em>. Perché <em>einen</em> e non <em>ein</em> lo spiegherà un'altra unità (è il caso accusativo): per ora basta ripetere la formula, che con i nomi maschili (<em>der Kaffee</em>, <em>der Tee</em>) usa <em>einen</em>."
      }
    ],
    grammar: {
      title: "Presente di heißen (chiamarsi)",
      note: "Attenzione alla <b>ß</b>: <em>heißen</em> ha lo stesso suono di una doppia s. La forma <em>heißt</em> è uguale per <em>du</em>, <em>er/sie/es</em> e <em>ihr</em>, quindi è il pronome a dire chi parla.",
      table: {
        head: ["persona", "forma", "esempio"],
        rows: [
          ["ich", "heiße", "Ich heiße Anna."],
          ["du", "heißt", "Wie heißt du?"],
          ["er / sie / es", "heißt", "Er heißt Tom."],
          ["wir", "heißen", "Wir heißen Weber."],
          ["ihr", "heißt", "Wie heißt ihr?"],
          ["sie / Sie", "heißen", "Wie heißen Sie?"]
        ]
      },
      examples: [
        {
          tr: "Buongiorno, un caffè per favore.",
          note: "«einen Kaffee» si impara come blocco, vedi il suggerimento sopra"
        },
        { tr: "Mi chiamo Anna." },
        { tr: "Come ti chiami?" },
        { tr: "Come si chiama Lei?", note: "forma di cortesia, vedi la lezione 4" },
        { tr: "Oggi bevo tè.", note: "il verbo resta al secondo posto, il soggetto passa dopo" },
        { tr: "Il bar è piccolo." }
      ]
    },
    vocab: [
      "buongiorno (di mattina)",
      "buongiorno, buon pomeriggio (dalla tarda mattinata a sera)",
      "buonasera",
      "buonanotte (congedandosi a sera tarda o andando a letto)",
      "ciao (incontrandosi)",
      "ciao (congedandosi)",
      "arrivederci",
      "per favore, prego (porgendo qualcosa)",
      "grazie",
      "scusi, scusa",
      "il caffè",
      "il tè",
      "l'acqua",
      "il caffè, il bar"
    ],
    dialogue: [
      "Buongiorno! Cosa desidera?",
      "Buongiorno. Un caffè, per favore.",
      "Volentieri. Desidera altro?",
      "No, grazie. È tutto.",
      "Ecco a Lei. Buona giornata!"
    ],
    culture: {
      title: "Uno sguardo tedesco: Café, Kaffeehaus e il caffè del pomeriggio",
      text: "<p>In Germania il locale tipico non è il bar con il banco: ci si siede a un tavolo, il cameriere viene a prendere l'ordinazione e il conto si chiede al tavolo con <i>Zahlen, bitte</i> oppure <i>Die Rechnung, bitte</i>. Di solito si arrotonda la cifra lasciando un piccolo extra: la mancia si chiama <i>Trinkgeld</i>.</p><p>Se ordini <i>einen Kaffee</i>, di solito ti arriva un caffè lungo, fatto con il filtro o con la macchina: l'espresso va chiesto per nome, <i>einen Espresso</i>. Il momento tradizionale è il pomeriggio, <i>Kaffee und Kuchen</i>, cioè caffè e torta: una pausa tra pranzo e cena che è ancora una tradizione viva, soprattutto la domenica e in famiglia.</p><p>In Austria il <i>Kaffeehaus</i> viennese ha un'altra logica: puoi fermarti a lungo con un solo caffè, di solito servito con un bicchiere d'acqua, e leggere il giornale. In Svizzera il caffè lungo si chiama spesso <i>Café crème</i>.</p>"
    },
    exercises: [
      {
        q: "Entri in un caffè alle 9 di mattina. Cosa dici?",
        opts: ["Guten Abend", "Guten Morgen", "Gute Nacht"],
        why: "<i>Guten Morgen</i> vale per la mattina. <i>Gute Nacht</i> è un saluto di commiato per la sera tarda o per andare a letto."
      },
      {
        q: "Quale frase affermativa ha il verbo al posto giusto?",
        opts: ["Ich Anna heiße.", "Heiße ich Anna.", "Ich heiße Anna."],
        why: "Il verbo coniugato sta al secondo posto, e il soggetto <b>ich</b> non si omette."
      },
      {
        tr: "Tutta la coniugazione, senza sbirciare.",
        why: "<i>Heißen</i> segue la coniugazione regolare: radice <i>heiß-</i> più desinenza. Per <i>du</i>, <i>er</i> e <i>ihr</i> la forma è la stessa: <b>heißt</b>."
      },
      {
        q: "Completa: «Wie ___ du?» (Come ti chiami?)",
        hint: "seconda persona singolare di heißen",
        why: "Con <b>du</b> la desinenza è <i>-t</i>: <i>du heißt</i>. La <i>s</i> della desinenza <i>-st</i> si fonde con la <i>ß</i> della radice."
      },
      {
        q: "Traduci: «Buongiorno, un caffè per favore.»",
        why: "Si dice <i>Einen Kaffee, bitte</i>: in questa formula <i>bitte</i> sta alla fine (può anche precedere <i>einen Kaffee</i>), e <i>Kaffee</i> ha la maiuscola, come ogni nome tedesco."
      },
      {
        tr: "Buongiorno, mi chiamo Anna.",
        why: "Dopo la virgola comincia la frase principale: soggetto <i>ich</i>, poi il verbo <i>heiße</i> al secondo posto."
      },
      {
        q: "Abbina ogni parola al suo significato.",
        pairs: ["grazie", "per favore / prego", "scusi", "arrivederci"]
      },
      {
        tr: "Buonasera, un tè per favore.",
        why: "Attenzione ad <i>Abend</i>: la <b>b</b> è sonora e la <b>d</b> finale si pronuncia come una <i>t</i>."
      },
      {
        tr: "Buongiorno, un caffè per favore.",
        why: "In Germania l'accento di <i>Kaffee</i> cade di norma sulla prima sillaba: KÀ-fe."
      }
    ]
  },
  "lesson:a1-u01-l2": {
    theme: "Grammatica di base",
    title: "Genere e plurale dei nomi",
    objectives: [
      "riconoscere che il tedesco ha tre generi: der, die, das",
      "imparare ogni nome insieme al suo articolo e al suo plurale",
      "contare da 1 a 20"
    ],
    theory: [
      {
        h: "Tre generi, non due",
        p: "L'italiano ha solo maschile e femminile. Il tedesco aggiunge il <strong>neutro</strong>: <strong>der</strong> (maschile), <strong>die</strong> (femminile), <strong>das</strong> (neutro). Ogni nome appartiene a uno dei tre, anche gli oggetti: <em>der Tisch</em> (il tavolo), <em>die Tasse</em> (la tazza), <em>das Buch</em> (il libro)."
      },
      {
        contrast: "Il genere tedesco non ricalca quello italiano, quindi non si può indovinare per traduzione. <em>Il libro</em> è maschile, ma <em>das Buch</em> è neutro; <em>la sedia</em> è femminile, ma <em>der Stuhl</em> è maschile; <em>il latte</em> è maschile, ma <em>die Milch</em> è femminile. Succede anche con le persone: <em>das Kind</em> (il bambino) è neutro. Per questo ogni nome si impara con il suo articolo, mai da solo."
      },
      {
        h: "Qualche indizio, nessuna legge",
        list: [
          "i nomi formati con il suffisso <b>-ung</b> sono femminili: <em>die Zeitung</em>, <em>die Rechnung</em>",
          "i diminutivi con il suffisso <b>-chen</b> sono neutri: <em>das Brötchen</em> (attenzione: <em>der Kuchen</em> non è un diminutivo, ed è maschile)",
          "molti nomi in <b>-e</b> sono femminili: <em>die Tasse</em>, <em>die Torte</em>",
          "gli indizi hanno eccezioni (<em>der Kaffee</em> finisce in -e ed è maschile): <b>l'articolo si impara insieme al nome</b>"
        ]
      },
      {
        h: "Il plurale: un solo articolo, finali diverse",
        p: "Al nominativo plurale l'articolo determinativo è sempre <strong>die</strong>, per tutti e tre i generi (negli altri casi, che vedrai più avanti, cambia). Il nome invece prende finali diverse, a volte con la dieresi sulla vocale (<em>Umlaut</em>): <em>die Tische</em>, <em>die Stühle</em>, <em>die Tassen</em>, <em>die Bücher</em>, <em>die Kinder</em>. Alcuni nomi restano uguali (<em>die Kuchen</em>, <em>die Brötchen</em>), pochi prendono <em>-s</em> (<em>die Cafés</em>, <em>die Kaffees</em>)."
      },
      {
        trap: "Il plurale non si deduce dal singolare: <em>der Tisch → die Tische</em>, ma <em>das Buch → die Bücher</em>. In italiano il plurale è quasi sempre regolare (<em>-o → -i</em>, <em>-a → -e</em>), in tedesco no. Impara la terna intera, per esempio <b>der Tisch, die Tische</b>: ecco perché il vocabolario di questo corso riporta il plurale accanto a ogni nome."
      },
      {
        tip: "Tutti i nomi tedeschi si scrivono con la <b>maiuscola</b>: <em>der Tisch</em>, non <em>der tisch</em>. E la dieresi conta: <em>Buch</em> e <em>Bücher</em> si scrivono diversamente, e <em>Mädchen</em> senza dieresi sarebbe un errore, non una variante."
      },
      {
        h: "Contare da 1 a 20",
        list: [
          "<b>1-10</b>: eins, zwei, drei, vier, fünf, sechs, sieben, acht, neun, zehn",
          "<b>11-12</b>: elf, zwölf",
          "<b>13-19</b>: dreizehn, vierzehn, fünfzehn, sechzehn, siebzehn, achtzehn, neunzehn",
          "<b>20</b>: zwanzig"
        ]
      },
      {
        trap: "Attenzione a <em>sechzehn</em> e <em>siebzehn</em>: <em>sechs</em> perde la <em>-s</em> e <em>sieben</em> perde la <em>-en</em>. E la <b>z</b> si legge sempre <em>ts</em>: <em>zwei</em> suona «tsvai», <em>zehn</em> «tsen»."
      }
    ],
    grammar: {
      title: "Genere e plurale",
      note: "Al nominativo plurale l'articolo determinativo è sempre <b>die</b>.",
      table: {
        head: ["genere", "singolare", "plurale", "italiano"],
        rows: [
          ["der (m)", "der Tisch", "die Tische", "tavolo"],
          ["die (f)", "die Tasse", "die Tassen", "tazza"],
          ["das (n)", "das Buch", "die Bücher", "libro"],
          ["das (n)", "das Kind", "die Kinder", "bambino"],
          ["der (m)", "der Kuchen", "die Kuchen", "torta, dolce"],
          ["das (n)", "das Brötchen", "die Brötchen", "panino"]
        ]
      },
      examples: [
        { tr: "Il tavolo è piccolo." },
        { tr: "Le tazze sono grandi.", note: "al plurale il verbo cambia: sind" },
        { tr: "Il libro è nuovo." },
        { tr: "Il bambino beve latte." },
        { tr: "Tre tazze e due dolci, per favore.", note: "Kuchen non cambia al plurale" },
        { tr: "Il conto, per favore." }
      ]
    },
    vocab: [
      "il tavolo",
      "la sedia",
      "il libro",
      "la casa",
      "la tazza",
      "la donna, la signora",
      "l'uomo",
      "il bambino",
      "il giornale",
      "la torta, il dolce",
      "il latte",
      "lo zucchero",
      "il panino",
      "il conto"
    ],
    exercises: [
      {
        q: "Quale di questi nomi è neutro?",
        opts: ["der Tisch", "das Buch", "die Tasse"],
        why: "<i>Das Buch</i>. In italiano «il libro» è maschile: il genere non si traduce."
      },
      {
        q: "Plurale di «die Tasse»: «die ___».",
        hint: "aggiungi -n",
        why: "Molti nomi femminili in <i>-e</i> fanno il plurale in <i>-n</i>: <i>Tassen</i>."
      },
      {
        q: "Plurale di «das Buch»: «die ___».",
        hint: "la u prende la dieresi e arriva -er",
        why: "<i>Bücher</i>: dieresi sulla vocale e desinenza <i>-er</i>. Senza dieresi sarebbe un'altra parola scritta male."
      },
      {
        q: "Scegli l'articolo determinativo giusto.",
        why: "Genere e plurale vanno imparati insieme al nome: <i>der Tisch</i>, <i>die Tasse</i>, <i>das Buch</i>.",
        items: ["tavolo", "tazza", "libro", "casa", "giornale", "uomo"]
      },
      {
        q: "Al nominativo plurale l'articolo determinativo è sempre…",
        opts: ["der", "die", "das"],
        why: "<b>die</b> per tutti i generi al nominativo plurale: <i>die Tische</i>, <i>die Tassen</i>, <i>die Bücher</i>."
      },
      {
        q: "Quali di questi nomi sono femminili?",
        opts: ["die Zeitung", "der Stuhl", "die Milch", "das Kind", "die Rechnung"],
        why: "<i>Die Zeitung</i>, <i>die Milch</i>, <i>die Rechnung</i>: l'articolo lo dice, e i nomi formati con il suffisso <b>-ung</b> sono femminili."
      },
      {
        tr: "Il bambino beve latte.",
        why: "Soggetto, verbo, complemento: il verbo <i>trinkt</i> è al secondo posto."
      },
      {
        tr: "Due tazze e tre panini, per favore.",
        why: "<i>Zwei</i> comincia con <b>ts</b>: «tsvai»."
      },
      {
        tr: "Il conto, per favore.",
        why: "<i>Rechnung</i>: il <i>ch</i> dopo la <i>e</i> è il soffio sottile di <i>ich</i>, non una <i>k</i>."
      }
    ]
  },
  "lesson:a1-u01-l3": {
    theme: "Grammatica di base",
    title: "Der oder ein? Gli articoli al nominativo",
    objectives: [
      "distinguere articolo determinativo (der, die, das) e indeterminativo (ein, eine)",
      "usare kein per negare un nome",
      "scegliere l'articolo in base al genere, non al suono"
    ],
    theory: [
      {
        h: "Determinativo e indeterminativo",
        p: "Come in italiano, l'articolo <strong>determinativo</strong> indica qualcosa di noto (<em>der Kaffee</em>, il caffè di cui parliamo) e l'<strong>indeterminativo</strong> qualcosa di nuovo (<em>ein Kaffee</em>, un caffè qualsiasi). Al nominativo, cioè quando il nome è il soggetto (<em>Der Kaffee ist heiß</em>) oppure il nome dopo <em>sein</em> (<em>Das ist eine Tasse</em>, <em>Das ist kein Tee</em>), le forme sono: <b>der / ein</b> (maschile), <b>die / eine</b> (femminile), <b>das / ein</b> (neutro), <b>die</b> (plurale)."
      },
      {
        contrast: "In italiano genere e numero determinano l'articolo (<em>il, lo, la, l', i, gli, le, un, uno, una</em>), e alcune forme cambiano anche secondo il <b>suono iniziale</b> della parola: <em>lo zaino</em>, <em>l'amico</em>. In tedesco, al nominativo singolare, <em>der</em>, <em>die</em> e <em>das</em> dipendono solo dal genere, senza varianti dovute al suono iniziale: <em>der Apfelkuchen</em>, <em>der Saft</em>, <em>der Kellner</em> hanno tutti <em>der</em>, qualunque lettera segua. È più semplice, ma devi conoscere il genere."
      },
      {
        trap: "Al plurale non esiste l'articolo indeterminativo: <em>Tassen</em> da solo vale «delle tazze» o «tazze». L'articolo partitivo italiano (<em>delle</em>, <em>dei</em>) non ha un equivalente in tedesco: si lascia il nome senza articolo."
      },
      {
        h: "Kein: la negazione del nome",
        p: "Per dire «non è un…» o «non c'è alcun…» si usa <strong>kein</strong>, che segue le forme di <em>ein</em>: <em>kein</em> (maschile e neutro), <em>keine</em> (femminile e plurale). <em>Das ist kein Tee</em> significa «questo non è un tè». Non si dice <em>nicht ein Tee</em>."
      },
      {
        tip: "Quando <b>ordini</b>, il nome maschile prende <em>einen</em>: <em>Einen Kaffee, bitte</em>. <em>Ein</em> è la forma del soggetto; <em>einen</em> è un'altra forma, usata quando il nome è l'oggetto di un'azione, e la vedremo più avanti. Per ora ricorda: ordinando si dice <em>einen</em> (maschile), <em>eine</em> (femminile), <em>ein</em> (neutro)."
      },
      {
        h: "Una frase tipica: Das ist …",
        p: "Per identificare un oggetto: <em>Das ist ein Eis</em>, <em>Das ist eine Torte</em>. Il <em>das</em> iniziale vale «questo» e non cambia, anche se il nome che segue è maschile o femminile."
      }
    ],
    grammar: {
      title: "Articoli al nominativo",
      note: "Il nominativo risponde alla domanda <em>chi / che cosa è?</em>. Il plurale prende <b>die</b> o <b>keine</b>, e non ha articolo indeterminativo.",
      table: {
        head: ["", "maschile", "femminile", "neutro", "plurale"],
        rows: [
          ["determinativo", "der Kaffee", "die Tasse", "das Brötchen", "die Tassen"],
          ["indeterminativo", "ein Kaffee", "eine Tasse", "ein Brötchen", "(nessun articolo) Tassen"],
          ["negazione", "kein Kaffee", "keine Tasse", "kein Brötchen", "keine Tassen"]
        ]
      },
      examples: [
        { tr: "Il caffè è caldo." },
        { tr: "Un caffè costa tre euro." },
        { tr: "Questa è una tazza." },
        { tr: "Questo non è un tè." },
        { tr: "La torta è fresca." },
        { tr: "Ecco il menù." }
      ]
    },
    vocab: [
      "il succo",
      "la cola",
      "la cioccolata",
      "la birra",
      "il vino",
      "il gelato",
      "la torta di mele",
      "la torta",
      "il pane",
      "il bretzel",
      "il menù",
      "il cameriere"
    ],
    exercises: [
      {
        q: "Completa: «___ Tasse ist neu.» (una tazza)",
        opts: ["Ein", "Eine", "Einen"],
        why: "<i>Tasse</i> è femminile, quindi <b>eine</b>."
      },
      {
        q: "Completa: «Das ist ___ Tee.» (non è un tè)",
        opts: ["nicht", "kein", "keine"],
        why: "Per negare un nome maschile si usa <b>kein</b>, non <i>nicht ein</i>."
      },
      {
        q: "Scegli l'articolo indeterminativo giusto.",
        why: "<i>Ein</i> per maschile e neutro, <i>eine</i> per femminile.",
        items: ["succo", "cola", "torta", "pane", "menù", "cameriere"]
      },
      {
        q: "Completa: «Das ist ___ Eis.» (un gelato)",
        hint: "das Eis è neutro",
        why: "Neutro al nominativo: <b>ein</b>."
      },
      {
        q: "Completa: «___ Speisekarte ist neu.» (la)",
        hint: "die Speisekarte è femminile",
        why: "Femminile singolare: <b>die</b>."
      },
      {
        q: "«Tassen, bitte!» Perché manca l'articolo?",
        opts: [
          "È un errore",
          "Al plurale non esiste ein/eine: si usa il nome da solo",
          "Manca die davanti a Tassen"
        ],
        why: "L'articolo indeterminativo non ha plurale. L'italiano «delle tazze» corrisponde a <i>Tassen</i> senza articolo."
      },
      {
        q: "Abbina ogni espressione al suo significato.",
        pairs: ["un caffè", "una torta", "un pane", "nessuna cola"]
      },
      {
        tr: "Ecco il menù e l'acqua.",
        why: "Con <i>Hier</i> in prima posizione, il verbo <i>ist</i> resta al secondo posto e il soggetto lo segue."
      },
      {
        tr: "Questa è una torta.",
        why: "<i>Torte</i>: la <b>t</b> iniziale è aspirata e la <b>e</b> finale si pronuncia."
      }
    ]
  },
  "lesson:a1-u01-l4": {
    theme: "Vita quotidiana",
    title: "Come stai? Du oppure Sie",
    objectives: [
      "chiedere come sta qualcuno, con du e con Sie",
      "coniugare sein al presente",
      "scegliere tra du e Sie in base alla situazione"
    ],
    theory: [
      {
        h: "Du, ihr e Sie: tre forme per dire «tu» e «voi»",
        p: "L'italiano ha <em>tu</em> e <em>Lei</em>. Il tedesco ha <strong>du</strong> (una persona con cui sei in confidenza), <strong>ihr</strong> (più persone con cui sei in confidenza) e <strong>Sie</strong>, la forma di cortesia, identica per una persona sola o per molte: <em>Sind Sie Frau Weber?</em>, <em>Wie heißen Sie?</em>"
      },
      {
        contrast: "<strong>Sie</strong> corrisponde al nostro <em>Lei</em>, ma il verbo va alla terza persona <b>plurale</b>: <em>Sie sind</em>, mai «Sie ist». Si scrive sempre con la <b>S maiuscola</b>, perché la minuscola <em>sie</em> vuol dire «lei» oppure «loro». In italiano il <em>Lei</em> è una forma femminile usata anche per gli uomini; in tedesco la parola è la stessa per uomini e donne, e <em>Lei</em> non esiste."
      },
      {
        h: "Quando passare al du",
        p: "Con persone che non conosci, con gli adulti, i clienti, negli uffici e nelle situazioni ufficiali si usa <em>Sie</em>, insieme a <em>Herr</em> o <em>Frau</em> e al cognome: <em>Frau Weber</em>. Il <em>du</em> è normale tra amici, in famiglia, tra coetanei e in molti ambienti di lavoro informali. Di norma è la persona più anziana o con più responsabilità a proporre il passaggio: <em>Wollen wir uns duzen?</em> Nel dubbio si usa <em>Sie</em>, e si aspetta che sia l'altro a proporre il <em>du</em>."
      },
      {
        h: "Wie geht's? Qui non si usa sein",
        p: "Per chiedere come sta qualcuno il tedesco usa il verbo <strong>gehen</strong> (andare): <em>Wie geht es dir?</em> o, in breve, <em>Wie geht's?</em> («come va?»). Si risponde <em>Mir geht es gut</em> («a me va bene») oppure <em>Es geht</em> («così così»). <em>Dir</em>, <em>Ihnen</em> e <em>mir</em> sono forme particolari del pronome che vedrai più avanti: per ora impara le frasi intere."
      },
      {
        trap: "Non tradurre «sto bene» alla lettera con <em>Ich bin gut</em>: significa «sono bravo», non «sto bene». Per lo stato di salute e d'animo si dice <em>Mir geht es gut</em>."
      },
      {
        h: "Sein, il verbo «essere»",
        p: "Come l'italiano <em>essere</em>, <strong>sein</strong> è irregolare: le forme non somigliano all'infinito (<em>bin, bist, ist, sind, seid, sind</em>) e vanno memorizzate. Servono per dire chi sei e che cos'è qualcosa: <em>Ich bin Anna</em>, <em>Das ist ein Kaffee</em>."
      },
      {
        h: "Le domande: l'ordine delle parole cambia",
        p: "Nella domanda con una parola interrogativa (<em>wie</em>, <em>was</em>) il verbo resta al <strong>secondo</strong> posto: <em>Wie geht es Ihnen?</em> Nella domanda a cui si risponde sì o no il verbo passa al <strong>primo</strong> posto: <em>Sind Sie Frau Weber?</em>, <em>Bist du Anna?</em> In italiano basta cambiare l'intonazione; in tedesco cambia l'ordine delle parole."
      }
    ],
    grammar: {
      title: "Sein (essere) al presente",
      note: "Con <b>Sie</b> (cortesia) il verbo è <em>sind</em>, come con <em>wir</em> e con <em>sie</em> (loro).",
      table: {
        head: ["persona", "forma", "esempio"],
        rows: [
          ["ich", "bin", "Ich bin Anna."],
          ["du", "bist", "Bist du Anna?"],
          ["er / sie / es", "ist", "Das Café ist klein."],
          ["wir", "sind", "Wir sind hier."],
          ["ihr", "seid", "Seid ihr hier?"],
          ["sie / Sie", "sind", "Sind Sie Frau Weber?"]
        ]
      },
      examples: [
        { tr: "Ciao Julia, come va?", note: "informale" },
        { tr: "Buongiorno, signora Weber, come sta?", note: "formale" },
        { tr: "Sto bene, grazie. E tu?" },
        { tr: "Così così." },
        { tr: "È la signora Weber?", note: "domanda sì/no: il verbo va in prima posizione" },
        { tr: "Ci diamo del tu?", note: "di solito lo propone la persona più anziana" }
      ]
    },
    vocab: [
      "come va? (informale)",
      "come sta? (formale)",
      "sto bene",
      "così così",
      "non male",
      "benissimo",
      "male",
      "e tu?",
      "e Lei?",
      "signor (davanti al cognome)",
      "signora (davanti al cognome)",
      "a più tardi"
    ],
    dialogue: [
      "Ciao Julia! Come va?",
      "Ciao! Bene, e tu?",
      "Non male, grazie. A più tardi!",
      "Buongiorno, signora Weber. Come sta?",
      "Bene, grazie. E Lei?"
    ],
    exercises: [
      {
        q: "Stai parlando con la signora Weber, che conosci poco. Quale domanda è giusta?",
        opts: ["Wie geht es dir?", "Wie geht es Ihnen?", "Wie gehst du?"],
        why: "Con una persona a cui dai del Lei si usa <b>Ihnen</b>."
      },
      {
        q: "Quale frase NON vuol dire «sto bene»?",
        opts: ["Mir geht es gut.", "Ich bin gut.", "Es geht mir gut."],
        why: "<i>Ich bin gut</i> significa «sono bravo». Per lo stato di salute si usa <i>gehen</i>."
      },
      {
        tr: "Tutte le persone di sein.",
        why: "<i>Sein</i> è irregolare in ogni persona, come «essere». <i>Sind</i> vale per <i>wir</i>, <i>sie</i> e <i>Sie</i>."
      },
      {
        q: "Completa: «___ Sie Frau Weber?» (Lei è la signora Weber?)",
        hint: "domanda sì/no: il verbo va per primo",
        why: "<b>Sind</b>: la forma di cortesia usa la terza persona plurale."
      },
      {
        q: "Traduci dando del tu: «Sto bene, grazie. E tu?»",
        why: "<i>Mir geht es gut, danke. Und dir?</i> Dando del tu si chiude con <i>dir</i>."
      },
      {
        q: "Al bar, il barista che ti conosce da anni ti saluta per primo.",
        setting: "Il bar del quartiere, otto di mattina.",
        lines: [
          { tr: "Ciao! Come va oggi?" },
          { tr: "Rispondi che stai bene e rilancia la domanda.", answerTr: "Sto bene, e tu?" },
          { tr: "Benissimo! Un caffè?" },
          { tr: "Rispondi di sì.", answerTr: "Sì, per favore!" }
        ]
      },
      {
        q: "Abbina ogni risposta al suo significato.",
        pairs: ["così così", "benissimo", "male", "non male"]
      },
      {
        tr: "Buongiorno, signora Weber, come sta?",
        why: "<i>Ihnen</i> si pronuncia «inen»: la <b>h</b> dopo la vocale non si sente."
      },
      {
        tr: "Bene, grazie. E Lei?",
        why: "<i>Und Ihnen?</i> mantiene il tono di cortesia: la domanda si chiude con la forma <i>Ihnen</i>."
      }
    ]
  },
  "lesson:a1-u01-test": {
    theme: "Verifica",
    title: "Verifica dell'unità 1",
    objectives: ["verificare saluti, presente di heißen e sein, genere, plurale e articoli"],
    theory: [
      {
        p: "Dieci domande su tutta l'unità. Si supera con il 70%. Non riguardare le lezioni mentre rispondi: se non ricordi qualcosa, è meglio tornare a ripassare."
      }
    ],
    exercises: [
      {
        q: "Sono le 18:30 ed entri in un negozio. Cosa dici?",
        opts: ["Guten Morgen", "Guten Abend", "Gute Nacht"],
        why: "Verso sera si dice <i>Guten Abend</i>. <i>Gute Nacht</i> è solo un saluto di commiato."
      },
      {
        q: "Completa: «Wir ___ hier.» (Siamo qui.)",
        why: "<i>Sein</i>, forma di <i>wir</i>: <b>sind</b>."
      },
      {
        q: "Completa: «Wie ___ Sie?» (Come si chiama Lei?)",
        why: "<i>Heißen</i>: con <i>Sie</i> il verbo è alla terza persona plurale."
      },
      {
        q: "Scegli l'articolo determinativo.",
        items: ["tavolo", "tazza", "bambino", "torta"]
      },
      {
        q: "Il plurale di «das Kind» è:",
        opts: ["die Kinde", "die Kinder", "die Kinds"],
        why: "<i>Die Kinder</i>: desinenza <b>-er</b>."
      },
      {
        q: "Quali frasi sono corrette?",
        opts: [
          "Das ist ein Tasse.",
          "Das ist eine Tasse.",
          "Das ist kein Tee.",
          "Das ist ein Kaffee.",
          "Das ist keine Kaffee."
        ],
        why: "<i>Tasse</i> è femminile (<i>eine</i>); <i>Tee</i> e <i>Kaffee</i> sono maschili (<i>kein</i>, <i>ein</i>)."
      },
      {
        q: "Traduci: «Due tè, per favore.»",
        why: "<i>Zwei Tee, bitte</i>: ordinando si lascia spesso il nome invariato dopo il numero. Anche <i>zwei Tees</i> è corretto."
      },
      {
        tr: "Come sta, signora Weber?",
        why: "Domanda con <i>Wie</i>: il verbo <i>geht</i> è al secondo posto."
      },
      { tr: "Due caffè e un panino, per favore." },
      { tr: "Buongiorno, come sta?" }
    ]
  }
});
