/* ============================================================
   Learner-language text (it) for data/core/a1-02.js, unit a1-u04.
   Keys point at ids in the neutral layer; arrays merge by index,
   so their length has to match core.
   Checked by scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("it", {
  "unit:a1-u04": {
    title: "Comprare vestiti",
    grammarNote: "aggettivo predicativo · dieser e welcher · ihn, sie, es · sehr, zu, viel"
  },
  "lesson:a1-u04-l1": {
    theme: "Vestiti e colori",
    title: "Descrivere un capo: colore e forma invariabile",
    objectives: [
      "nominare i capi di abbigliamento più comuni con il loro articolo",
      "dire di che colore è un capo con sein + aggettivo",
      "ricordare che l'aggettivo dopo sein non prende nessuna desinenza"
    ],
    theory: [
      {
        h: "Il colore dopo «ist»: l'aggettivo non cambia",
        p: "Per dire com'è qualcosa si usa <strong>sein</strong> e poi l'aggettivo: <em>Der Pullover ist rot</em>, <em>Die Jacke ist blau</em>, <em>Das Hemd ist weiß</em>. L'aggettivo che sta dopo il verbo si chiama <em>predicativo</em> e resta sempre uguale: nessuna desinenza, qualunque sia il genere del nome. Cambia solo il verbo, che al plurale diventa <em>sind</em>: <em>Die Schuhe sind schwarz</em>."
      },
      {
        contrast: "In italiano l'aggettivo si accorda: <em>il maglione è rosso</em>, <em>la giacca è rossa</em>, <em>i maglioni sono rossi</em>, <em>le giacche sono rosse</em>. In tedesco, dopo <em>sein</em>, la forma è una sola: <em>rot</em>. Non devi pensare al genere del nome per scegliere il colore, ma solo per scegliere l'articolo (<em>der, die, das</em>)."
      },
      {
        h: "Capi di abbigliamento con il loro articolo",
        p: "Impara ogni nome con l'articolo, come già sai: <em>der Pullover</em>, <em>die Jacke</em>, <em>das Hemd</em>, <em>der Rock</em>, <em>das Kleid</em>. L'articolo non è prevedibile dal capo: <em>die Hose</em> è singolare e indica un solo paio di pantaloni, mentre <em>die Schuhe</em> è il plurale di <em>der Schuh</em> (di solito si parla di un paio)."
      },
      {
        trap: "Non scrivere «Die Jacke ist rote» né «Der Pullover ist roter»: dopo <em>ist</em> l'aggettivo si lascia così com'è. Le desinenze compaiono solo quando l'aggettivo sta <em>davanti</em> al nome (<em>der rote Pullover</em>): questo lo vedrai più avanti, non ti serve ora."
      },
      {
        tip: "Prova a descrivere ad alta voce tre capi che hai in casa: <em>Die Hose ist blau</em>, <em>Der Pullover ist grün</em>, <em>Das Hemd ist weiß</em>. Tre capi, tre colori, tre frasi."
      }
    ],
    grammar: {
      title: "L'aggettivo dopo sein",
      note: "L'aggettivo predicativo è <b>invariabile</b>: cambia solo la forma di <em>sein</em> (<em>ist</em> / <em>sind</em>).",
      table: {
        head: ["genere", "frase"],
        rows: [
          ["maschile", "Der Pullover ist rot."],
          ["femminile", "Die Jacke ist blau."],
          ["neutro", "Das Hemd ist weiß."],
          ["plurale", "Die Schuhe sind schwarz."]
        ]
      },
      examples: [
        { tr: "Il maglione è rosso.", note: "der Pullover: maschile" },
        { tr: "La giacca è blu.", note: "die Jacke: femminile, nessuna desinenza" },
        { tr: "La camicia è bianca.", note: "das Hemd: neutro" },
        { tr: "Le scarpe sono nere.", note: "plurale: sind, ma schwarz resta uguale" },
        { tr: "La gonna è verde." },
        { tr: "Il vestito è giallo." }
      ]
    },
    vocab: [
      "il maglione",
      "la giacca",
      "la camicia",
      "i pantaloni, il paio di pantaloni (singolare: die Hose)",
      "la scarpa",
      "la maglietta",
      "la gonna",
      "il vestito (da donna), l'abito",
      "rosso",
      "blu, azzurro",
      "nero",
      "bianco",
      "verde",
      "giallo"
    ],
    exercises: [
      {
        q: "Come dici «La giacca è blu»?",
        opts: ["Die Jacke ist blaue.", "Die Jacke ist blau.", "Die Jacke blau ist."],
        why: "Dopo <i>ist</i> l'aggettivo resta invariato e il verbo sta al secondo posto: <b>Die Jacke ist blau.</b>"
      },
      {
        q: "Quale frase è corretta?",
        opts: ["Die Schuhe ist schwarz.", "Die Schuhe sind schwarze.", "Die Schuhe sind schwarz."],
        why: "Il soggetto è plurale, quindi <b>sind</b>; l'aggettivo predicativo resta <i>schwarz</i>."
      },
      {
        q: "Che colore è «weiß»?",
        opts: ["bianco", "nero", "giallo"],
        why: "<i>Weiß</i> è «bianco». Si scrive con la <b>ß</b> e si legge /vaɪs/: la <b>ß</b> è una «s» sorda, non una consonante doppia."
      },
      {
        q: "Completa: «Das Hemd ___ weiß.»",
        hint: "sein, terza persona singolare",
        why: "<i>Das Hemd</i> è singolare: <b>ist</b>."
      },
      {
        q: "Completa: «Die Schuhe ___ schwarz.»",
        hint: "sein, terza persona plurale",
        why: "<i>Die Schuhe</i> è plurale: <b>sind</b>."
      },
      {
        tr: "Il maglione è blu e i pantaloni sono neri.",
        why: "Ogni proposizione ha il proprio verbo coniugato: <i>Der Pullover ist blau und die Hose ist schwarz</i>. In entrambe il soggetto precede <i>ist</i>. Nel secondo membro, <i>die Hose</i> è il soggetto singolare."
      },
      {
        q: "Abbina ogni colore al suo significato.",
        pairs: ["rosso", "blu", "verde", "giallo"]
      },
      {
        q: "Completa le due frasi.",
        tr: "Il vestito è giallo e le scarpe sono nere.",
        why: "Un soggetto singolare vuole <i>ist</i>, uno plurale <i>sind</i>. Gli aggettivi non cambiano."
      },
      {
        tr: "La giacca è rossa e i pantaloni sono blu.",
        why: "<i>Jacke</i>: la <b>J</b> suona come una «i» semiconsonantica italiana; <i>rot</i> ha la <b>o</b> lunga."
      },
      {
        tr: "Il maglione è verde e la camicia è bianca.",
        why: "In <i>grün</i> la <b>ü</b> si pronuncia con le labbra come per dire «u» e la lingua come per dire «i». <i>Weiß</i>: il gruppo <b>ei</b> si legge «ai»."
      }
    ]
  },
  "lesson:a1-u04-l2": {
    theme: "In negozio",
    title: "Scegliere fra due capi: dieser, welcher, der da",
    objectives: [
      "indicare un capo con dieser / diese / dieses",
      "chiedere «quale?» con welcher / welche / welches",
      "usare der da / die da / das da per indicare qualcosa di vicino o lontano"
    ],
    theory: [
      {
        h: "Dieser, diese, dieses: «questo»",
        p: "<strong>Dieser</strong> funziona come un articolo: sceglie la forma secondo il genere del nome. <em>Dieser Pullover</em> (maschile), <em>diese Jacke</em> (femminile), <em>dieses Hemd</em> (neutro), <em>diese Schuhe</em> (plurale). Al nominativo le desinenze sono quelle che già conosci da <em>der / die / das</em>, ma attaccate a <em>dies-</em>."
      },
      {
        h: "Welcher, welche, welches: «quale?»",
        p: "Per scegliere fra due capi si chiede con <strong>welcher</strong>: <em>Welcher Mantel ist schön?</em>, <em>Welche Tasche ist blau?</em>, <em>Welches Kleid ist rot?</em> Segue lo stesso schema di <em>dieser</em>. Si risponde con <em>dieser</em> oppure, a voce, con <strong>der da</strong>, <strong>die da</strong>, <strong>das da</strong>: <em>Welcher Mantel ist billig? Der da.</em>"
      },
      {
        contrast: "L'italiano ha «questo» e «quello», e «quale» che concorda con il nome (<em>quale giacca</em>, <em>quali scarpe</em>). Il tedesco concorda anche lui, ma con tre generi, il plurale e quattro casi: <em>dieser</em> e <em>welcher</em> cambiano desinenza secondo genere, numero e caso. Qui studi solo il nominativo: <em>dieser / welcher</em>, <em>diese / welche</em>, <em>dieses / welches</em>. Per «quello» a voce di solito non c'è un'altra parola: si usa l'articolo accompagnato da <em>da</em> (<em>der da</em>, «quello là»)."
      },
      {
        trap: "Non dire «Welche Mantel», né «Dieser Jacke»: l'ultima lettera deve seguire il genere del nome. <em>Mantel</em> è maschile (<em>welcher</em>), <em>Jacke</em> è femminile (<em>welche</em>), <em>Hemd</em> è neutro (<em>welches</em>)."
      },
      {
        tip: "In un negozio puoi indicare con la mano e dire solo la parola senza il nome, che però concorda con la cosa indicata: <em>Welcher? Dieser hier?</em> per <em>der Mantel</em>, <em>Welche? Diese hier?</em> per <em>die Jacke</em> o un plurale, <em>Welches? Dieses hier?</em> per <em>das Hemd</em>. Nel tedesco parlato si taglia molto. Per le frasi scritte, ripeti il nome per intero."
      }
    ],
    grammar: {
      title: "dieser e welcher al nominativo",
      note: "Le desinenze di <b>dieser</b> e <b>welcher</b> seguono il genere del nome: -er (maschile), -e (femminile), -es (neutro), -e (plurale).",
      table: {
        head: ["genere", "dieser", "welcher", "esempio"],
        rows: [
          ["maschile", "dieser", "welcher", "Dieser Mantel ist schön."],
          ["femminile", "diese", "welche", "Diese Jacke ist teuer."],
          ["neutro", "dieses", "welches", "Dieses Hemd ist billig."],
          ["plurale", "diese", "welche", "Diese Schuhe sind schwarz."]
        ]
      },
      examples: [
        { tr: "Questo maglione è bello." },
        { tr: "Questa giacca è cara." },
        { tr: "Questa camicia costa poco.", note: "billig: a buon mercato, economico" },
        { tr: "Quale cappotto è bello?", note: "maschile: welcher" },
        { tr: "Quale borsa è blu?", note: "femminile: welche" },
        { tr: "Quale vestito è rosso?", note: "neutro: welches" }
      ]
    },
    vocab: [
      "questo / questa / questo",
      "quale (maschile / femminile / neutro)",
      "là: quello là / quella là (a voce: der da, die da, das da)",
      "caro, costoso",
      "economico, a buon mercato",
      "bello",
      "il cappotto",
      "il berretto",
      "la sciarpa",
      "il calzino",
      "la borsa",
      "la cintura"
    ],
    dialogue: [
      "Buongiorno! Cosa cerca?",
      "Buongiorno. Cerco un cappotto.",
      "Questo cappotto è bello, ma caro.",
      "E quale cappotto è economico?",
      "Quello là è economico."
    ],
    exercises: [
      {
        q: "Come dici «Questa giacca è cara»?",
        opts: ["Dieser Jacke ist teuer.", "Diese Jacke ist teuer.", "Dieses Jacke ist teuer."],
        why: "<i>Jacke</i> è femminile, quindi <b>diese</b>."
      },
      {
        q: "Vuoi chiedere quale camicia è bella. Quale frase è corretta?",
        opts: ["Welches Hemd ist schön?", "Welcher Hemd ist schön?", "Welche Hemd ist schön?"],
        why: "<i>Das Hemd</i> è neutro, quindi <b>welches</b>."
      },
      {
        q: "Completa: «Der Rock ist schön, aber ___ Hose ist teuer.» (questa)",
        hint: "die Hose è femminile",
        why: "<i>Hose</i> è femminile: <b>diese</b>."
      },
      {
        q: "Completa: «___ Schal ist billig?» (quale sciarpa)",
        hint: "der Schal è maschile; domanda",
        why: "<i>Schal</i> è maschile: <b>welcher</b>."
      },
      {
        q: "Scegli l'articolo giusto: lo stesso genere decide poi se dici <i>dieser</i>, <i>diese</i> o <i>dieses</i>.",
        why: "<i>Mantel</i> e <i>Schal</i> sono maschili (der, dieser), <i>Jacke</i> e <i>Tasche</i> femminili (die, diese), <i>Kleid</i> e <i>Hemd</i> neutri (das, dieses).",
        items: ["cappotto", "giacca", "vestito", "sciarpa", "borsa", "camicia"]
      },
      {
        tr: "Questo cappotto è bello, ma caro.",
        why: "La virgola prima di <i>aber</i> è obbligatoria. In <i>schön</i> la <b>ö</b> è una «e» pronunciata con le labbra arrotondate."
      },
      {
        q: "Traduci: «Questa giacca è bella, ma quella là è cara.»",
        why: "<i>Diese Jacke ... die da ...</i>: <i>die da</i> rimanda alla seconda giacca senza ripetere il nome. Va bene anche <i>diese da</i>."
      },
      {
        q: "Sei in un negozio.",
        setting: "Un commesso ti viene incontro.",
        lines: [
          { tr: "Buongiorno! Cosa cerca?" },
          { tr: "Rispondi che cerchi una giacca.", answerTr: "Cerco una giacca." },
          { tr: "Questa giacca è rossa. Quest'altra è blu." },
          { tr: "Chiedi quale giacca è economica.", answerTr: "Quale giacca è economica?" }
        ]
      },
      {
        tr: "Questo cappotto è bello, ma quello là è caro.",
        why: "In <i>Mantel</i> la <b>t</b> è netta, e <i>teuer</i> comincia con <b>t</b> seguita da «oi»: il gruppo <b>eu</b> si legge «oi»."
      },
      {
        tr: "Quale giacca è economica? Quella là.",
        why: "<i>Welche</i> comincia con una <b>w</b> che suona come la «v» italiana; in <i>Jacke</i> la <b>J</b> suona «i»."
      }
    ]
  },
  "lesson:a1-u04-l3": {
    theme: "Prezzi e acquisti",
    title: "Prezzi e pronomi all'accusativo: ihn, sie, es",
    objectives: [
      "chiedere il prezzo con Was kostet ...? e Wie viel kostet ...?",
      "dire quanto costa un capo in euro o in franchi",
      "sostituire un nome già detto con ihn, sie, es"
    ],
    theory: [
      {
        h: "Chiedere e dire il prezzo",
        p: "Per chiedere il prezzo: <em>Was kostet der Pullover?</em> oppure <em>Wie viel kostet der Pullover?</em> Si risponde con il verbo <em>kosten</em> e il numero: <em>Der Pullover kostet vierzig Euro</em>. In Svizzera la moneta è il franco, <em>der Franken</em>: <em>Das Hemd kostet fünfzig Franken</em>. Al plurale, il verbo concorda con il soggetto: <em>Die Schuhe kosten achtzig Euro</em>. Alla cassa si sente <em>Das macht fünfundvierzig Euro</em>."
      },
      {
        h: "Ihn, sie, es: non ripetere il nome",
        p: "Dopo aver nominato un capo, non lo si ripete: si usa un pronome. Come oggetto di <em>nehmen</em> o <em>kaufen</em> (accusativo) il pronome segue il <strong>genere del nome</strong>: <em>der Pullover</em> diventa <strong>ihn</strong>, <em>die Jacke</em> diventa <strong>sie</strong>, <em>das Hemd</em> diventa <strong>es</strong>, <em>die Schuhe</em> diventa <strong>sie</strong>. Esempio: <em>Der Pullover ist schön. Ich nehme ihn.</em>"
      },
      {
        contrast: "In italiano il pronome atono sta prima del verbo e concorda in genere e numero: <em>lo prendo</em>, <em>la prendo</em>, <em>li prendo</em>. In tedesco sta <em>dopo</em> il verbo, come un normale oggetto: <em>Ich nehme ihn</em>. E il genere è quello del nome tedesco, non del suo significato: <em>der Pullover</em> è maschile (<em>ihn</em>), anche quando l'italiano suggerisce un altro genere: <em>la camicia</em> è <em>das Hemd</em> (<em>es</em>), <em>la gonna</em> è <em>der Rock</em> (<em>ihn</em>), <em>i pantaloni</em> sono <em>die Hose</em>, singolare in tedesco (<em>sie</em>)."
      },
      {
        trap: "Per le cose si usa il genere grammaticale, non <em>es</em> per tutto: <em>Die Jacke ist schön. Ich nehme sie</em>, non «Ich nehme es». <em>Es</em> è corretto solo per un nome neutro (<em>das Hemd</em>, <em>das Kleid</em>). Solo il maschile cambia forma tra nominativo (<em>er</em>) e accusativo (<em>ihn</em>)."
      },
      {
        tip: "Per accettare l'acquisto bastano tre parole: <em>Ich nehme ihn</em> / <em>sie</em> / <em>es</em>. Per rifiutare, aggiungi <em>nicht</em> alla fine: <em>Ich nehme ihn nicht</em>."
      }
    ],
    grammar: {
      title: "Dal nome al pronome all'accusativo",
      note: "Il pronome segue il genere del nome. Solo il maschile cambia: <b>er → ihn</b>.",
      table: {
        head: ["nome", "nominativo", "accusativo", "esempio"],
        rows: [
          ["der Pullover", "er", "ihn", "Ich nehme ihn."],
          ["die Jacke", "sie", "sie", "Ich nehme sie."],
          ["das Hemd", "es", "es", "Ich nehme es."],
          ["die Schuhe", "sie", "sie", "Ich nehme sie."]
        ]
      },
      examples: [
        { tr: "Quanto costa il maglione?" },
        { tr: "Il maglione costa quaranta euro. Lo prendo.", note: "ihn: maschile" },
        { tr: "La giacca costa sessanta euro. La prendo.", note: "sie: femminile" },
        { tr: "La camicia costa venticinque euro. La prendo.", note: "es: neutro" },
        { tr: "Le scarpe sono care. Non le prendo.", note: "nicht alla fine" },
        { tr: "Quanto costa il cappotto? Non lo compro.", note: "ihn: maschile" }
      ]
    },
    vocab: [
      "costare",
      "quanto, quanto costa (wie viel)",
      "il prezzo",
      "l'euro",
      "il franco svizzero",
      "comprare",
      "la cassa",
      "il commesso",
      "la commessa",
      "solo, soltanto",
      "lo / la / li / le (oggetto: ihn, sie, es)",
      "Fanno ... euro"
    ],
    exercises: [
      {
        q: "«Der Pullover ist schön. Ich nehme ___.» Quale pronome?",
        opts: ["er", "ihn", "es"],
        why: "<i>Der Pullover</i> è maschile e qui è oggetto di <i>nehmen</i>: <b>ihn</b>."
      },
      {
        q: "«Die Jacke ist teuer. Ich kaufe ___ nicht.» Quale pronome?",
        opts: ["sie", "ihn", "es"],
        why: "<i>Die Jacke</i> è femminile: <b>sie</b> (al femminile nominativo e accusativo sono uguali)."
      },
      {
        q: "«Das Kleid ist schön. Ich nehme ___.» Quale pronome?",
        opts: ["ihn", "sie", "es"],
        why: "<i>Das Kleid</i> è neutro: <b>es</b>."
      },
      {
        q: "Completa: «Der Rock ist billig. Ich kaufe ___.» (Lo compro.)",
        hint: "der Rock è maschile; accusativo",
        why: "Maschile accusativo: <b>ihn</b>."
      },
      {
        q: "Completa: «Was ___ die Schuhe?» (Quanto costano le scarpe?)",
        hint: "kosten, plurale",
        why: "Il soggetto <i>die Schuhe</i> è plurale: <b>kosten</b>."
      },
      {
        q: "Abbina ogni parola al suo significato.",
        pairs: ["costare", "il prezzo", "la cassa", "comprare"]
      },
      {
        q: "Completa le due frasi.",
        tr: "I pantaloni costano trenta euro. Li prendo. La cintura costa quindici euro. La prendo.",
        why: "<i>Die Hose</i> è femminile: <b>sie</b>. <i>Der Gürtel</i> è maschile: <b>ihn</b>."
      },
      {
        q: "Traduci: «La giacca costa sessanta euro, la prendo.»",
        why: "<i>Die Jacke</i> è femminile, quindi <i>sie</i>. Il numero può essere scritto in lettere (<i>sechzig</i>) o in cifre (60)."
      },
      {
        tr: "Quanto costa il cappotto? Costa novanta euro.",
        why: "In <i>neunzig</i> la <b>eu</b> si legge «oi» e la <b>z</b> «ts»; la finale <b>-ig</b> si pronuncia come il <b>ch</b> di <i>ich</i>: /ˈnɔʏntsɪç/. <i>Euro</i> comincia con «oi»."
      },
      {
        tr: "La camicia costa solo venti euro. La prendo.",
        why: "<i>Nur</i> ha la <b>u</b> lunga. <i>Zwanzig</i>: la <b>zw</b> si legge «tsv»."
      }
    ]
  },
  "lesson:a1-u04-l4": {
    theme: "Taglie e giudizi",
    title: "Quanto? Sehr, zu, viel, wenig",
    objectives: [
      "dire che un capo è molto bello (sehr) o troppo caro (zu)",
      "usare viel e wenig dopo kosten (kostet viel, kostet wenig)",
      "descrivere la taglia: groß, klein, lang, kurz, eng, weit"
    ],
    theory: [
      {
        h: "Sehr e zu: davanti all'aggettivo",
        p: "<strong>Sehr</strong> (molto) e <strong>zu</strong> (troppo) stanno <em>davanti</em> all'aggettivo, senza alcuna desinenza: <em>Der Pullover ist sehr schön</em>, <em>Die Hose ist zu klein</em>, <em>Das Kleid ist zu teuer</em>. Si può aggiungere <em>ein bisschen</em> (un po'): <em>Die Jacke ist ein bisschen zu groß</em>. Per descrivere la taglia: <em>groß</em>, <em>klein</em>, <em>lang</em>, <em>kurz</em>, <em>eng</em> (stretto), <em>weit</em> (largo)."
      },
      {
        h: "Viel e wenig: dopo kosten",
        p: "Con <em>kosten</em> e con un aggettivo al grado positivo la posizione distingue le parole: <strong>viel</strong> (molto, tanto) e <strong>wenig</strong> (poco) stanno <em>dopo</em> il verbo <em>kosten</em>, mentre <strong>sehr</strong> sta davanti all'aggettivo. Non è una regola per tutti i verbi (<em>Das gefällt mir sehr</em>) né per i comparativi (<em>viel schöner</em>). <em>Der Mantel kostet viel</em>, <em>Das Hemd kostet wenig</em>. Con <em>zu</em> si può dire <em>zu viel</em> (troppo): <em>Der Mantel ist sehr schön, aber er kostet zu viel</em>."
      },
      {
        contrast: "L'italiano usa «molto» per tutto: <em>molto bello</em>, <em>costa molto</em>, <em>molti vestiti</em>. In tedesco, con un aggettivo al grado positivo si usa <em>sehr</em> (<em>sehr schön</em>) e con <em>kosten</em> si usa <em>viel</em> dopo il verbo (<em>kostet viel</em>). Con altri verbi può servire <em>sehr</em> (<em>Das gefällt mir sehr</em>). Lo stesso vale per «poco» (<em>wenig</em>) e «troppo» (<em>zu</em> davanti all'aggettivo, <em>zu viel</em> con <em>kosten</em>)."
      },
      {
        trap: "Non dire «Der Pullover ist viel schön»: davanti a un aggettivo al grado positivo ci vuole <em>sehr</em> (<em>viel</em> sta invece davanti al comparativo: <em>viel schöner</em>). E con <em>kosten</em> non dire «Der Mantel kostet sehr»: si usa <em>viel</em> (o <em>sehr viel</em>)."
      },
      {
        tip: "In negozio ti serviranno spesso due frasi: <em>Der Mantel ist zu teuer</em> e <em>Die Hose ist zu eng</em>. Dopo <em>zu</em> davanti a un aggettivo non cambia niente."
      }
    ],
    grammar: {
      title: "sehr, zu, viel, wenig",
      note: "<b>Sehr</b> e <b>zu</b> stanno davanti all'aggettivo al grado positivo; con <b>kosten</b>, <b>viel</b> e <b>wenig</b> stanno dopo il verbo.",
      table: {
        head: ["avverbio", "significato", "posizione", "esempio"],
        rows: [
          ["sehr", "molto", "davanti all'aggettivo", "Der Pullover ist sehr schön."],
          ["zu", "troppo", "davanti all'aggettivo", "Die Hose ist zu klein."],
          ["viel", "molto, tanto", "dopo kosten", "Der Mantel kostet viel."],
          ["wenig", "poco", "dopo kosten", "Das Hemd kostet wenig."]
        ]
      },
      examples: [
        { tr: "Il maglione è molto bello." },
        { tr: "I pantaloni sono troppo piccoli.", note: "zu davanti all'aggettivo" },
        { tr: "Il vestito è troppo caro." },
        { tr: "Il cappotto costa molto.", note: "viel dopo kosten" },
        { tr: "La camicia costa poco.", note: "wenig dopo kosten" },
        { tr: "La giacca è un po' troppo grande." }
      ]
    },
    vocab: [
      "molto (davanti a un aggettivo)",
      "troppo (davanti a un aggettivo)",
      "molto, tanto (dopo kosten)",
      "poco (dopo kosten)",
      "un po'",
      "grande, alto",
      "piccolo, basso",
      "lungo",
      "corto",
      "stretto, attillato",
      "largo, ampio",
      "la taglia, la misura"
    ],
    exercises: [
      {
        q: "Come dici «I pantaloni sono troppo piccoli»?",
        opts: ["Die Hose ist zu klein.", "Die Hose ist sehr klein.", "Die Hose ist viel klein."],
        why: "<b>Zu</b> vuol dire «troppo» e sta davanti all'aggettivo. <i>Sehr klein</i> sarebbe «molto piccoli», senza l'idea di eccesso."
      },
      {
        q: "Come dici «Il cappotto è molto bello»?",
        opts: ["Der Mantel ist zu schön.", "Der Mantel ist sehr schön.", "Der Mantel ist wenig schön."],
        why: "<b>Sehr</b> davanti all'aggettivo. <i>Zu schön</i> vuol dire «troppo bello», cosa che di solito non è un complimento."
      },
      {
        q: "Quali frasi sono corrette?",
        opts: [
          "Die Hose ist zu eng.",
          "Der Pullover ist viel schön.",
          "Das Hemd kostet wenig.",
          "Der Mantel ist sehr groß.",
          "Die Jacke kostet sehr."
        ],
        why: "<i>Viel schön</i> è sbagliato: davanti a un aggettivo ci vuole <i>sehr</i>. Con <i>kosten</i>, <i>kostet sehr</i> da solo non va: si dice <i>kostet viel</i> o <i>kostet sehr viel</i>."
      },
      {
        q: "Completa: «Der Mantel ist ___ teuer. Ich nehme ihn nicht.» (troppo)",
        hint: "davanti all'aggettivo",
        why: "<b>Zu</b>: «troppo» davanti a un aggettivo."
      },
      {
        q: "Completa: «Das Kleid ist ___ schön.» (molto)",
        hint: "davanti all'aggettivo",
        why: "<b>Sehr</b>: «molto» davanti a un aggettivo."
      },
      {
        q: "Abbina ogni parola al suo significato.",
        pairs: ["grande", "piccolo", "lungo", "corto"]
      },
      {
        q: "Completa: «Il maglione è molto bello, ma costa molto.»",
        tr: "Il maglione è molto bello, ma costa molto.",
        why: "<i>Sehr</i> davanti all'aggettivo, <i>viel</i> dopo <i>kosten</i>."
      },
      {
        q: "Traduci: «Il cappotto è molto bello, ma costa troppo.»",
        why: "<i>Sehr schön</i> (davanti all'aggettivo) e <i>zu viel</i> (dopo <i>kosten</i>): <i>er kostet zu viel</i>."
      },
      {
        tr: "I pantaloni sono troppo piccoli, ma la giacca è molto bella.",
        why: "<i>Klein</i> ha la <b>ei</b> che si legge «ai». <i>Schön</i>: la <b>sch</b> è come «sc» di «scena»."
      },
      {
        tr: "Il vestito è molto bello, ma troppo caro.",
        why: "<i>Kleid</i>: la <b>ei</b> si legge «ai» e la <b>d</b> finale suona come una <b>t</b>."
      }
    ]
  },
  "lesson:a1-u04-test": {
    theme: "Verifica",
    title: "Verifica dell'unità 4",
    objectives: ["verificare aggettivo predicativo, dieser e welcher, pronomi all'accusativo e sehr, zu, viel"],
    theory: [
      {
        p: "Dieci domande su tutta l'unità. Si supera con il 70%. Non riguardare le lezioni mentre rispondi: se non ricordi qualcosa, è meglio tornare a ripassare."
      }
    ],
    exercises: [
      {
        q: "Completa: «Die Schuhe ___ schwarz.» (Le scarpe sono nere.)",
        hint: "sein, terza persona plurale",
        why: "Soggetto plurale: <b>sind</b>."
      },
      {
        q: "Completa: «Der Pullover kostet fünfzig Euro. Ich nehme ___.» (Lo prendo.)",
        hint: "der Pullover è maschile; accusativo",
        why: "Maschile accusativo: <b>ihn</b>."
      },
      {
        q: "Completa: «Die Hose ist ___ eng, ich nehme sie nicht.» (troppo)",
        hint: "davanti all'aggettivo",
        why: "<b>Zu</b>: «troppo» davanti a un aggettivo."
      },
      {
        q: "Scegli l'articolo determinativo giusto per ogni nome.",
        items: ["maglione", "pantaloni", "vestito", "gonna"]
      },
      {
        q: "Come chiedi quale maglione è economico?",
        opts: ["Welcher Pullover ist billig?", "Welche Pullover ist billig?", "Welches Pullover ist billig?"],
        why: "<i>Pullover</i> è maschile: <b>welcher</b>."
      },
      {
        q: "«Das Kleid ist schön. Ich nehme ___.» Quale pronome?",
        opts: ["ihn", "sie", "es"],
        why: "<i>Das Kleid</i> è neutro: <b>es</b>."
      },
      {
        tr: "La camicia è molto bella, ma troppo cara.",
        why: "<i>Sehr schön, aber zu teuer</i>: due avverbi davanti all'aggettivo."
      },
      {
        q: "Traduci: «La giacca è bella, ma troppo cara. Non la prendo.»",
        why: "<i>Zu</i> sta davanti all'aggettivo <i>teuer</i>; <i>sie</i> riprende <i>die Jacke</i> e <i>nicht</i>, in fondo, nega l'acquisto."
      },
      {
        tr: "Quale maglione è rosso e quale è blu?",
        why: "<i>Welcher Pullover</i>: maschile. La domanda al nominativo non cambia il verbo, che resta al secondo posto."
      },
      {
        tr: "Il cappotto è molto bello. Lo prendo.",
        why: "<i>Mantel</i> è maschile: <i>ihn</i>."
      }
    ]
  }
});
