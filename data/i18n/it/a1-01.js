/* ============================================================
   Learner-language text (it) for data/core/a1-01.js, units a1-u01 and a1-u02.
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
  },
  "unit:a1-u02": {
    title: "Chi sei?",
    grammarNote: "pronomi personali · presente regolare · sein e haben · professioni · numeri fino a 100"
  },
  "lesson:a1-u02-l1": {
    theme: "Presentarsi",
    title: "Mi chiamo ...",
    objectives: [
      "dire il proprio nome e chiedere quello di un altro, con du e con Sie",
      "usare i pronomi personali al nominativo: ich, du, er, sie, es, wir, ihr, sie, Sie",
      "dire da dove si viene con «Ich komme aus ...»"
    ],
    theory: [
      {
        h: "I pronomi personali: in tedesco il soggetto si dice",
        p: "In una frase dichiarativa autonoma il verbo coniugato vuole un soggetto espresso: o un nome (<em>Anna heißt Weber</em>) o un pronome (nelle coordinate con lo stesso soggetto, come <em>Ich wohne hier und arbeite in Bonn</em>, il secondo si può sottintendere). Eccoli al nominativo: <strong>ich</strong> (io), <strong>du</strong> (tu), <strong>er</strong> (lui), <strong>sie</strong> (lei), <strong>es</strong> (esso), <strong>wir</strong> (noi), <strong>ihr</strong> (voi), <strong>sie</strong> (loro) e <strong>Sie</strong>, la forma di cortesia. Le desinenze del verbo da sole non bastano a riconoscere la persona: <em>heißt</em> vale per <em>du</em>, <em>er</em>, <em>sie</em>, <em>es</em> e <em>ihr</em>."
      },
      {
        contrast: "In italiano <em>Parlo italiano</em> sta in piedi senza «io». In tedesco <em>Spreche Deutsch</em> non è una frase: serve <em>Ich spreche Deutsch</em>. Il pronome non è enfasi, è parte della frase."
      },
      {
        h: "sie e Sie: la maiuscola cambia il senso",
        p: "Alla pronuncia <em>sie</em> e <em>Sie</em> sono uguali, nella scrittura no. <strong>sie</strong> con la minuscola vuol dire «lei» (una donna) oppure «loro»: <em>sie heißt Lena</em> con il verbo al singolare, <em>sie heißen Weber</em> con il verbo al plurale. <strong>Sie</strong> con la maiuscola è la forma di cortesia, per una persona sola o per molte, e vuole il verbo come per «loro»: <em>Wie heißen Sie?</em> A inizio frase la maiuscola c'è comunque, quindi non aiuta: <em>heißt</em> (singolare) indica «lei», mentre con <em>heißen</em> serve il contesto per distinguere «loro» dalla forma di cortesia.",
        list: [
          "<b>du</b>: una persona con cui sei in confidenza",
          "<b>ihr</b>: più persone con cui sei in confidenza (non è la forma di cortesia)",
          "<b>Sie</b>: una o più persone con cui usi la forma di cortesia"
        ]
      },
      {
        trap: "I pronomi di terza persona seguono il <b>genere grammaticale</b> del nome che sostituiscono, anche per le cose: <em>Der Tisch ist neu. Er ist groß.</em> (er = il tavolo), <em>Die Tasse ist neu. Sie ist groß.</em>, <em>Das Buch ist neu. Es ist groß.</em> In italiano si dice «è grande» senza pronome; in tedesco si dice «lui è grande», «lei è grande», «esso è grande», a seconda del genere."
      },
      {
        h: "Nome e provenienza",
        p: "Per presentarti hai due formule: <em>Ich heiße Paolo</em> oppure <em>Mein Name ist Paolo</em>. Per chiedere la provenienza si usa <strong>woher</strong> («da dove») e il verbo <strong>kommen</strong>: <em>Woher kommst du?</em> Si risponde con <em>Ich komme aus</em> e il paese o la città, di norma senza articolo: <em>Ich komme aus Italien</em>, <em>aus Berlin</em>. Per ora impara le frasi intere: i paesi che vogliono l'articolo li incontrerai più avanti."
      },
      {
        tip: "Per chiedere di ripetere: <em>Wie bitte?</em> («come, scusa?») è la formula più usata e va bene con tutti. Per rispondere a una presentazione ti serve <em>Freut mich</em> («piacere»)."
      }
    ],
    grammar: {
      title: "Pronomi personali al nominativo",
      note: "I pronomi tedeschi sono nove (<em>ich, du, er, sie, es, wir, ihr, sie, Sie</em>) ma le forme del verbo regolare sono solo quattro: <em>-e, -st, -t, -en</em>. Nella tabella <em>sie</em> e <em>Sie</em> condividono la riga perché richiedono la stessa forma del verbo.",
      table: {
        head: ["persona", "pronome", "esempio"],
        rows: [
          ["1ª singolare", "ich", "Ich heiße Paolo."],
          ["2ª singolare", "du", "Woher kommst du?"],
          ["3ª singolare", "er / sie / es", "Er heißt Tom, sie heißt Lena."],
          ["1ª plurale", "wir", "Wir heißen Weber."],
          ["2ª plurale", "ihr", "Wie heißt ihr?"],
          ["3ª plurale / cortesia", "sie / Sie", "Wie heißen Sie?"]
        ]
      },
      examples: [
        { tr: "Mi chiamo Paolo." },
        { tr: "Di dove sei?" },
        { tr: "Lui si chiama Tom, lei si chiama Lena." },
        { tr: "Ci chiamiamo Weber." },
        { tr: "Come vi chiamate?" },
        { tr: "Come si chiama Lei?", note: "forma di cortesia" }
      ]
    },
    vocab: [
      "il nome",
      "il nome di battesimo",
      "il cognome",
      "Come ti chiami?",
      "Mi chiamo ...",
      "Il mio nome è ...",
      "Piacere.",
      "Di dove sei?",
      "Vengo da ... (paese o città)",
      "Quanti anni hai?",
      "Ho ... anni.",
      "E tu?",
      "Come, scusa? (non ho capito)"
    ],
    culture: {
      title: "Uno sguardo tedesco: nomi, titoli e il passaggio al du",
      text: "<p>In Germania ci si presenta spesso con nome e cognome insieme: <i>Ich bin Anna Weber</i>. Con una persona che non conosci ti rivolgi di norma usando <i>Herr</i> o <i>Frau</i> e il cognome, non il solo nome di battesimo. Se qualcuno ha un titolo, come <i>Doktor</i>, in ambienti formali il titolo si aggiunge: <i>Frau Doktor Weber</i>.</p><p>Il vecchio <i>Fräulein</i> per le ragazze non sposate è ormai fuori uso. Oggi <i>Frau</i> vale per ogni donna adulta.</p><p>Il passaggio dal <i>Sie</i> al <i>du</i> è un piccolo evento sociale: di norma lo propone chi è più anziano o ha più responsabilità. In molte aziende e tra studenti ci si dà del <i>du</i> subito, ma nel dubbio parti con <i>Sie</i> e aspetta la proposta.</p>"
    },
    exercises: [
      {
        q: "Parli con una cliente che non conosci. Quale domanda usi per chiederle il nome?",
        opts: ["Wie heißt du?", "Wie heißen Sie?", "Wie heißt ihr?"],
        why: "Con una persona sconosciuta si usa la forma di cortesia <b>Sie</b>, con il verbo come per «loro»: <i>heißen</i>."
      },
      {
        q: "Lena è una donna. Quale pronome usi per parlare di lei?",
        opts: ["er", "sie", "es"],
        why: "Per una donna si usa <b>sie</b>, con la minuscola a metà frase. <i>Er</i> è per un uomo, <i>es</i> per i nomi neutri."
      },
      {
        q: "Completa: «___ heißt Lena.» (Lei si chiama Lena.)",
        hint: "pronome della terza persona femminile",
        why: "A inizio frase si scrive <b>Sie</b> con la maiuscola, perché è la prima parola; il verbo <i>heißt</i> è alla terza persona singolare."
      },
      {
        q: "Completa: «Ich ___ aus Italien.» (Vengo dall'Italia.)",
        hint: "prima persona singolare di kommen",
        why: "<i>Ich komme</i>: la desinenza della prima persona singolare è <b>-e</b>."
      },
      {
        q: "Completa con i pronomi giusti.",
        tr: "Ciao! Mi chiamo Paolo. E tu come ti chiami?",
        why: "Nella frase autonoma il pronome non si omette: <i>Ich heiße Paolo</i>. Con una persona in confidenza si chiede <i>Wie heißt du?</i>"
      },
      {
        q: "Una nuova conoscenza ti saluta al corso di tedesco.",
        setting: "La prima lezione, il primo giorno.",
        lines: [
          { tr: "Ciao! Sono Lena. E tu come ti chiami?" },
          { tr: "Rispondi dicendo il tuo nome.", answerTr: "Mi chiamo Paolo." },
          { tr: "Di dove sei?" },
          { tr: "Rispondi che vieni dall'Italia.", answerTr: "Vengo dall'Italia." }
        ]
      },
      {
        tr: "Il mio nome è Anna Weber.",
        why: "<i>Mein Name ist</i> è la formula alternativa a <i>Ich heiße</i>. Nome e cognome si scrivono con la maiuscola."
      },
      {
        tr: "Ciao, mi chiamo Lena e vengo da Berlino.",
        why: "Ascolta <i>ei</i> in <i>heiße</i>: si legge «ai», non «ei»."
      },
      {
        tr: "Mi chiamo Paolo. E tu come ti chiami?",
        why: "Per <i>wie</i> ricorda: la <b>w</b> si legge come una <i>v</i> italiana."
      }
    ]
  },
  "lesson:a1-u02-l2": {
    theme: "Presentarsi",
    title: "Sein, haben e i numeri",
    objectives: [
      "coniugare sein e haben al presente",
      "dire l'età con «Ich bin ... Jahre alt»",
      "contare fino a 100 e leggere un numero di telefono"
    ],
    theory: [
      {
        h: "Haben, il verbo «avere»",
        p: "Anche <strong>haben</strong> è irregolare: la forma di <em>du</em> è <em>hast</em>, quella di <em>er/sie/es</em> è <em>hat</em>, e la <em>b</em> sparisce. Servono per dire cosa hai: <em>Ich habe eine Schwester</em>, <em>Wir haben Hunger</em>. Con <em>haben</em> ciò che si possiede è un complemento oggetto, e l'articolo indefinito maschile <em>ein</em> diventa <em>einen</em>, come nella formula <em>einen Kaffee</em> (il motivo lo spiega l'unità 3): <em>Ich habe einen Bruder</em>. Con <em>Hunger haben</em> e altre espressioni simili non c'è articolo: <em>Wir haben Hunger</em>."
      },
      {
        h: "Sein con un nome: resta il nominativo",
        p: "Dopo <strong>sein</strong> il nome che descrive il soggetto sta nello stesso caso del soggetto, il nominativo: <em>Das ist ein Tisch</em>, <em>Er ist ein Lehrer</em>. Un complemento con preposizione non è un nome predicativo: <em>Ich bin in Berlin</em> dice dove sei, non chi sei."
      },
      {
        contrast: "In italiano l'età si <em>ha</em>: «ho venticinque anni». In tedesco l'età si <em>è</em>: <em>Ich bin fünfundzwanzig Jahre alt</em>, e con <em>haben</em> la frase è sbagliata. Per il freddo, invece, non si dice <em>Ich habe kalt</em> ma <em>Mir ist kalt</em> («a me è freddo»); per la fame vale <em>Ich habe Hunger</em>, come in italiano."
      },
      {
        h: "I numeri da 20 a 100",
        p: "Le decine sono <strong>zwanzig</strong>, <strong>dreißig</strong>, <strong>vierzig</strong>, <strong>fünfzig</strong>, <strong>sechzig</strong>, <strong>siebzig</strong>, <strong>achtzig</strong>, <strong>neunzig</strong>, <strong>hundert</strong>. Notare: <em>dreißig</em> si scrive con la <b>ß</b>; <em>sechzig</em> perde la <em>s</em> finale di <em>sechs</em>; <em>siebzig</em> perde la <em>-en</em> di <em>sieben</em>. I numeri da 21 a 99 si scrivono in una parola sola."
      },
      {
        trap: "Nei numeri composti si dice <b>prima l'unità, poi la decina</b>: 45 è <em>fünfundvierzig</em>, letteralmente «cinque e quaranta». In italiano si dice «quarantacinque», nell'altro ordine. Attenzione alle coppie che si confondono all'ascolto: <em>sechzehn</em> (16) e <em>sechzig</em> (60), <em>siebzehn</em> (17) e <em>siebzig</em> (70)."
      },
      {
        h: "I numeri di telefono",
        p: "Un numero di telefono si legge di solito cifra per cifra o a gruppi di due cifre: 0151 si dice <em>null eins fünf eins</em>. Lo zero si dice <em>null</em>. A volte al telefono si sente <em>zwo</em> al posto di <em>zwei</em>, per non confonderlo con <em>drei</em>. Per chiedere: <em>Wie ist deine Telefonnummer?</em>"
      }
    ],
    grammar: {
      title: "Sein (essere) e haben (avere)",
      note: "Entrambi i verbi sono irregolari e vanno memorizzati. Con <b>Sie</b> (cortesia) e con <em>sie</em> (loro) si usano <em>sind</em> e <em>haben</em>.",
      table: {
        head: ["persona", "sein", "haben"],
        rows: [
          ["ich", "bin", "habe"],
          ["du", "bist", "hast"],
          ["er / sie / es", "ist", "hat"],
          ["wir", "sind", "haben"],
          ["ihr", "seid", "habt"],
          ["sie / Sie", "sind", "haben"]
        ]
      },
      examples: [
        { tr: "Ho vent'anni." },
        { tr: "Hai una sorella." },
        { tr: "Lui ha fame." },
        { tr: "Siamo amici." },
        { tr: "Avete un fratello?" },
        { tr: "Il numero è zero tre zero, dodici, trentaquattro, cinquantasei.", note: "numero letto a gruppi" }
      ]
    },
    vocab: [
      "il numero di telefono",
      "l'anno",
      "vecchio; nell'età: «... Jahre alt» = «... anni»",
      "venti",
      "trenta",
      "quaranta",
      "cinquanta",
      "sessanta",
      "settanta",
      "ottanta",
      "novanta",
      "cento",
      "ventuno"
    ],
    exercises: [
      {
        q: "Come dici «Ho venticinque anni»?",
        opts: ["Ich habe fünfundzwanzig Jahre.", "Ich bin fünfundzwanzig Jahre alt.", "Ich habe fünfundzwanzig alt."],
        why: "In tedesco l'età si dice con <b>sein</b>: <i>Ich bin fünfundzwanzig Jahre alt</i>. Con <i>haben</i> la frase non è corretta."
      },
      {
        q: "Quale numero è «45»?",
        opts: ["vierundfünfzig", "fünfundvierzig", "vierzigfünf"],
        why: "<i>Fünfundvierzig</i>: prima l'unità (<i>fünf</i>), poi <i>und</i>, poi la decina (<i>vierzig</i>). <i>Vierundfünfzig</i> è 54."
      },
      {
        tr: "Tutta la coniugazione di haben.",
        why: "<i>Haben</i> è irregolare: <i>du hast</i> e <i>er hat</i> perdono la <i>b</i>."
      },
      {
        q: "Completa: «Du ___ eine Schwester.» (Hai una sorella.)",
        hint: "seconda persona singolare di haben",
        why: "<i>Du hast</i>: la <b>b</b> del verbo sparisce nella forma di <i>du</i>."
      },
      {
        q: "Completa: «Ihr ___ hier.» (Voi siete qui.)",
        hint: "seconda persona plurale di sein",
        why: "<i>Ihr seid</i>: attenzione a non confonderla con <i>sind</i>, che vale per <i>wir</i> e <i>sie</i>."
      },
      {
        q: "Completa con bin e habe.",
        tr: "Sono Paolo e ho venticinque anni. Ho un fratello.",
        why: "L'età e il nome si dicono con <i>sein</i> (<i>bin</i>), il fratello con <i>haben</i> (<i>habe</i>), seguito da <i>einen</i>."
      },
      {
        q: "Abbina ogni numero alla sua cifra.",
        pairs: ["30", "60", "45", "100"]
      },
      {
        q: "Traduci dando del tu: «Hai una sorella?»",
        why: "<i>Hast du eine Schwester?</i> Nella domanda sì/no il verbo va al primo posto."
      },
      {
        tr: "Il mio numero di telefono è zero uno cinque uno, due tre quattro, cinque sei.",
        why: "Lo zero si dice <i>null</i>. I numeri di telefono si leggono cifra per cifra o a gruppi."
      },
      {
        tr: "Ho venticinque anni e ho una sorella.",
        why: "<i>Fünfundzwanzig</i>: la <b>z</b> si legge sempre «ts»."
      }
    ]
  },
  "lesson:a1-u02-l3": {
    theme: "Lavoro",
    title: "Che lavoro fa?",
    objectives: [
      "chiedere e dire la professione con «Was sind Sie von Beruf?»",
      "formare il femminile delle professioni con -in",
      "usare le professioni senza articolo"
    ],
    theory: [
      {
        h: "La professione si dice senza articolo",
        p: "Per dire che lavoro fai, il tedesco usa di solito il nome senza articolo, come l'italiano: <em>Ich bin Lehrerin</em>, <em>Er ist Arzt</em>. La domanda è <strong>Was sind Sie von Beruf?</strong>, letteralmente «che cosa è Lei di professione?». Con una persona in confidenza: <em>Was bist du von Beruf?</em>"
      },
      {
        trap: "Quando la professione ha un aggettivo accanto, di solito l'articolo torna: <em>Ich bin eine gute Lehrerin</em>. La regola «senza articolo» vale quindi per la professione nuda, non per ogni frase con una professione."
      },
      {
        h: "Il femminile in -in",
        p: "In tedesco il nome della professione cambia a seconda che chi lo fa sia un uomo o una donna: <em>der Lehrer / die Lehrerin</em>, <em>der Student / die Studentin</em>. Quasi sempre si aggiunge <strong>-in</strong> al maschile, e il femminile è sempre <strong>die</strong>. Alcune vocali prendono la dieresi: <em>der Arzt → die Ärztin</em>, <em>der Koch → die Köchin</em>."
      },
      {
        contrast: "In italiano molte professioni hanno una forma sola per entrambi i generi (<em>l'insegnante</em>, <em>il/la docente</em>, <em>il giornalista / la giornalista</em>), e per molte altre il femminile si forma in modi diversi. In tedesco il genere della persona si sente quasi sempre nel nome stesso: <em>Ich bin Lehrer</em> parla un uomo, <em>Ich bin Lehrerin</em> una donna."
      },
      {
        h: "Il plurale delle forme in -in",
        p: "Il plurale del femminile si fa con <strong>-nen</strong>: <em>die Lehrerin → die Lehrerinnen</em>, con due <em>n</em>. I maschili variano: <em>die Lehrer</em>, <em>die Ärzte</em>, <em>die Studenten</em>."
      },
      {
        tip: "Quando impari una professione, impara subito entrambe le forme: <em>der Arzt, die Ärztin</em>. Ti serve per parlare di te e degli altri."
      }
    ],
    grammar: {
      title: "Professioni: maschile e femminile",
      note: "Il femminile si forma di solito con <b>-in</b>. Con <em>Arzt</em> e <em>Koch</em> la vocale prende la dieresi.",
      table: {
        head: ["maschile", "femminile", "esempio"],
        rows: [
          ["der Lehrer", "die Lehrerin", "Ich bin Lehrerin."],
          ["der Arzt", "die Ärztin", "Er ist Arzt."],
          ["der Student", "die Studentin", "Wir sind Studenten."],
          ["der Koch", "die Köchin", "Sie ist Köchin."],
          ["der Ingenieur", "die Ingenieurin", "Ich bin Ingenieurin."],
          ["der Verkäufer", "die Verkäuferin", "Sie ist Verkäuferin."]
        ]
      },
      examples: [
        { tr: "Che lavoro fa?", note: "forma di cortesia" },
        { tr: "Sono insegnante.", note: "parla una donna" },
        { tr: "Lui è medico." },
        { tr: "Lei è cuoca." },
        { tr: "Sono una brava insegnante.", note: "con l'aggettivo torna l'articolo" },
        { tr: "Siamo studenti." }
      ]
    },
    vocab: [
      "la professione",
      "l'insegnante (uomo)",
      "l'insegnante (donna)",
      "il medico (uomo)",
      "il medico (donna)",
      "lo studente",
      "la studentessa",
      "il cuoco",
      "la cuoca",
      "l'ingegnere",
      "il commesso",
      "la commessa"
    ],
    exercises: [
      {
        q: "Sei una dottoressa. Quale frase usa la forma femminile?",
        opts: ["Ich bin Arzt.", "Ich bin Ärztin.", "Ich bin Arztin."],
        why: "Il femminile di <i>Arzt</i> è <b>Ärztin</b>: si aggiunge <i>-in</i> e la <i>A</i> prende la dieresi."
      },
      {
        q: "Qual è il plurale di «die Lehrerin»?",
        opts: ["die Lehrerins", "die Lehrerinnen", "die Lehrerine"],
        why: "Il plurale delle forme in <i>-in</i> si fa con <b>-nen</b>: <i>die Lehrerinnen</i>."
      },
      {
        tr: "Il verbo studieren, tutte le persone.",
        why: "I verbi in <i>-ieren</i> si coniugano in modo regolare: <i>studier-</i> più le desinenze."
      },
      {
        q: "Completa: «Sie ist ___.» (Lei è cuoca.)",
        hint: "forma femminile di Koch",
        why: "<i>Köchin</i>: il femminile aggiunge <i>-in</i> e la <i>o</i> prende la dieresi. Senza la dieresi la parola è sbagliata."
      },
      {
        q: "Scegli l'articolo determinativo.",
        items: ["insegnante (uomo)", "insegnante (donna)", "professione", "studentessa", "medico (donna)", "cuoco"]
      },
      {
        q: "Abbina ogni professione al suo significato.",
        pairs: ["insegnante (uomo)", "medico (donna)", "cuoco", "commessa"]
      },
      {
        tr: "Che lavoro fa?",
        why: "Domanda con <i>was</i>: il verbo <i>sind</i> è al secondo posto, e con <i>Sie</i> si usa la forma di cortesia."
      },
      {
        q: "Traduci: «Io sono cuoca.»",
        why: "<i>Ich bin Köchin</i>: professione senza articolo e forma femminile con <i>-in</i>."
      },
      {
        tr: "Che lavoro fa? Sono insegnante.",
        why: "<i>Beruf</i> ha la <b>f</b> finale, che si pronuncia come l'italiana «f»."
      },
      {
        tr: "Che lavoro fa? Sono ingegnera.",
        why: "<i>Ingenieurin</i> è il femminile di <i>Ingenieur</i>: si aggiunge <b>-in</b>."
      }
    ]
  },
  "lesson:a1-u02-l4": {
    theme: "Vita quotidiana",
    title: "Wohnen, arbeiten, kommen",
    objectives: [
      "coniugare i verbi regolari al presente",
      "dire dove si abita, dove si lavora e da dove si viene",
      "riconoscere paesi e lingue"
    ],
    theory: [
      {
        h: "Il verbo regolare: radice più desinenza",
        p: "Si toglie <em>-en</em> dall'infinito e si aggiunge la desinenza della persona: <strong>-e, -st, -t, -en, -t, -en</strong>. Da <em>wohnen</em> si ha <em>ich wohne, du wohnst, er wohnt, wir wohnen, ihr wohnt, sie/Sie wohnen</em>. Le forme sono sei ma le desinenze diverse sono quattro, perché <em>er</em> e <em>ihr</em> hanno la stessa forma, come <em>wir</em> e <em>sie/Sie</em>."
      },
      {
        contrast: "In italiano ogni persona ha la sua desinenza: parlo, parli, parla, parliamo, parlate, parlano. In tedesco <em>er arbeitet</em> e <em>ihr arbeitet</em> sono identici, e <em>wir arbeiten</em> e <em>sie arbeiten</em> pure. Per questo, nella frase autonoma, il pronome non si omette."
      },
      {
        h: "Radici in -t e -d: serve una -e- in più",
        p: "Se la radice finisce in <em>-t</em> o <em>-d</em> (<em>arbeit-</em>, <em>find-</em>), per rendere pronunciabile la desinenza si inserisce una <strong>-e-</strong> davanti a <em>-st</em> e <em>-t</em>: <em>du arbeitest, er arbeitet, ihr arbeitet</em>. La forma con <em>ich</em> (<em>ich arbeite</em>) e quelle in <em>-en</em> restano regolari."
      },
      {
        h: "Wo e woher",
        p: "<strong>Wo</strong> chiede dove si trova qualcuno: <em>Wo wohnst du?</em> → <em>Ich wohne in Berlin.</em> <strong>Woher</strong> chiede la provenienza: <em>Woher kommen Sie?</em> → <em>Ich komme aus Spanien.</em> Con città e paesi si usa di norma <em>in</em> per il luogo e <em>aus</em> per la provenienza. Il verbo resta al secondo posto, e con <em>Sie</em> si coniuga come per «loro»."
      },
      {
        trap: "I nomi delle lingue sono sostantivi e si scrivono con la <b>maiuscola</b>: <em>Deutsch, Italienisch, Englisch</em>. Si usano senza articolo dopo <em>sprechen</em>: <em>Ich spreche Deutsch</em>. Attenzione: <em>sprechen</em> cambia vocale con <em>du</em> e <em>er</em> (<em>du sprichst</em>), e quel tipo di verbi lo vedrai nell'unità 3: per ora usa solo <em>ich spreche</em> e <em>wir sprechen</em>."
      },
      {
        tip: "Per dire dove lavori: <em>Ich arbeite in Hamburg</em>. Per dire che lavoro fai accanto al luogo: <em>Ich arbeite als Lehrerin</em>, di solito senza articolo dopo <em>als</em>."
      }
    ],
    grammar: {
      title: "Presente regolare: wohnen, arbeiten, kommen",
      note: "Con <em>arbeiten</em> la radice finisce in <b>-t</b>, quindi compare la <b>-e-</b> con <em>du</em>, <em>er/sie/es</em> e <em>ihr</em>.",
      table: {
        head: ["persona", "wohnen", "arbeiten", "kommen"],
        rows: [
          ["ich", "wohne", "arbeite", "komme"],
          ["du", "wohnst", "arbeitest", "kommst"],
          ["er / sie / es", "wohnt", "arbeitet", "kommt"],
          ["wir", "wohnen", "arbeiten", "kommen"],
          ["ihr", "wohnt", "arbeitet", "kommt"],
          ["sie / Sie", "wohnen", "arbeiten", "kommen"]
        ]
      },
      examples: [
        { tr: "Dove abiti?" },
        { tr: "Abito a Berlino." },
        { tr: "Tu lavori a Vienna." },
        { tr: "Lui viene dalla Spagna." },
        { tr: "Voi lavorate ad Amburgo." },
        { tr: "Di dove viene Lei?", note: "forma di cortesia" }
      ]
    },
    vocab: [
      "la Germania",
      "l'Italia",
      "l'Austria",
      "la Francia",
      "la Spagna",
      "la Polonia",
      "il tedesco (lingua)",
      "l'italiano (lingua)",
      "l'inglese (lingua)",
      "lo spagnolo (lingua)",
      "il francese (lingua)",
      "il polacco (lingua)"
    ],
    exercises: [
      {
        q: "Quale frase è corretta?",
        opts: ["Er arbeit in Berlin.", "Er arbeitet in Berlin.", "Er arbeitest in Berlin."],
        why: "La radice <i>arbeit-</i> finisce in <i>-t</i>: con <i>er</i> serve la <b>-e-</b> prima di <i>-t</i>."
      },
      {
        q: "Quali forme sono corrette con «ihr»?",
        opts: ["ihr arbeitet", "ihr kommt", "ihr wohnen", "ihr arbeitest", "ihr wohnt"],
        why: "Con <i>ihr</i> la desinenza è <b>-t</b> (<i>-et</i> con le radici in <i>-t</i>). <i>Wohnen</i> è per <i>wir</i> e <i>sie/Sie</i>; <i>-st</i> è per <i>du</i>."
      },
      {
        tr: "Il verbo arbeiten, tutte le persone.",
        why: "La radice <i>arbeit-</i> finisce in <i>-t</i>: con <i>du</i>, <i>er</i> e <i>ihr</i> compare la <b>-e-</b>."
      },
      {
        tr: "Il verbo kommen, alcune persone.",
        why: "<i>Kommen</i> è regolare: <i>du kommst</i>, <i>er kommt</i>, <i>ihr kommt</i>. Non c'è cambio di vocale."
      },
      {
        q: "Completa: «Du ___ in Wien.» (Lavori a Vienna.)",
        hint: "seconda persona singolare di arbeiten",
        why: "<i>Du arbeitest</i>: dopo la radice in <i>-t</i> serve la <b>-e-</b> prima di <i>-st</i>."
      },
      {
        q: "Completa: «Wo ___ ihr?» (Dove abitate?)",
        hint: "seconda persona plurale di wohnen",
        why: "<i>Ihr wohnt</i>: la desinenza di <i>ihr</i> è <b>-t</b>."
      },
      {
        tr: "Abito in Italia e lavoro qui.",
        why: "Nella frase con <i>und</i> il secondo verbo ha lo stesso soggetto, che si può omettere: <i>und arbeite hier</i>."
      },
      {
        q: "Traduci dando del tu: «Di dove sei?»",
        why: "<i>Woher kommst du?</i> è la forma più comune; anche <i>Woher bist du?</i> è corretta."
      },
      {
        tr: "Abito a Vienna e vengo dall'Italia.",
        why: "<i>Wien</i> si legge «vin»: la <b>w</b> è come la <i>v</i> italiana e <i>ie</i> è una <i>i</i> lunga."
      },
      {
        tr: "Vengo dall'Italia e abito a Berlino.",
        why: "Con le città si usa <i>in</i> per il luogo e <i>aus</i> per la provenienza."
      }
    ]
  },
  "lesson:a1-u02-test": {
    theme: "Verifica",
    title: "Verifica dell'unità 2",
    objectives: ["verificare pronomi, sein e haben, professioni, presente regolare, numeri"],
    theory: [
      {
        p: "Dieci domande su tutta l'unità. Si supera con il 70%. Non riguardare le lezioni mentre rispondi: se non ricordi qualcosa, è meglio tornare a ripassare."
      }
    ],
    exercises: [
      {
        q: "Come dici «Ho trent'anni»?",
        opts: ["Ich habe dreißig Jahre.", "Ich bin dreißig Jahre alt.", "Ich sind dreißig Jahre alt."],
        why: "<i>Ich bin dreißig Jahre alt</i>: l'età si dice con <b>sein</b> e <i>alt</i>."
      },
      {
        q: "Quale numero è «73»?",
        opts: ["siebenunddreißig", "dreiundsiebzig", "siebzigdrei"],
        why: "<i>Dreiundsiebzig</i>: prima l'unità (<i>drei</i>), poi la decina (<i>siebzig</i>). <i>Siebenunddreißig</i> è 37."
      },
      {
        q: "La signora Weber fa il medico. Quale frase usa la forma femminile della professione?",
        opts: ["Frau Weber ist Ärztin.", "Frau Weber ist Arzt.", "Frau Weber ist ein Ärztin."],
        why: "Il femminile è <b>Ärztin</b>, e la professione sta senza articolo."
      },
      {
        q: "Completa: «Wir ___ aus Polen.» (Veniamo dalla Polonia.)",
        why: "<i>Wir kommen</i>: con <i>wir</i> la desinenza è <b>-en</b>."
      },
      {
        q: "Completa: «Ihr ___ Hunger.» (Voi avete fame.)",
        why: "<i>Ihr habt</i>: la forma di <i>haben</i> con <i>ihr</i> è <b>habt</b>."
      },
      {
        tr: "Il verbo arbeiten: du, er, ihr.",
        why: "Con le radici in <i>-t</i> serve la <b>-e-</b>: <i>du arbeitest, er arbeitet, ihr arbeitet</i>."
      },
      {
        q: "Completa con ist, wohnt e kommt.",
        tr: "Anna è insegnante. Abita a Vienna e viene dalla Polonia.",
        why: "Tutti e tre i verbi sono alla terza persona singolare: <i>ist</i>, <i>wohnt</i>, <i>kommt</i>."
      },
      {
        q: "Traduci, rivolgendoti a una persona con il Lei: «Che lavoro fa?»",
        why: "<i>Was sind Sie von Beruf?</i> è la formula che hai imparato; <i>Was machen Sie beruflich?</i> è un'alternativa corretta."
      },
      {
        tr: "Mi chiamo Lena, ho trent'anni e vengo da Vienna.",
        why: "<i>Dreißig</i> si scrive con la <b>ß</b>: si pronuncia /s/, come la <i>s</i> di «sole», senza raddoppiarla."
      },
      {
        tr: "Mi chiamo Paolo, sono ingegnere e abito a Berlino.",
        why: "Nella frase compaiono tre verbi: <i>heiße</i>, <i>bin</i>, <i>wohne</i>."
      }
    ]
  }
});
