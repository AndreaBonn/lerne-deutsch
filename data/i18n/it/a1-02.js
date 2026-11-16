/* ============================================================
   Learner-language text (it) for data/core/a1-02.js, units a1-u04 and a1-u05.
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
  },
  "unit:a1-u05": {
    title: "La mia giornata",
    grammarNote: "verbi separabili · um, am, im, von ... bis · können, wollen, müssen · avverbi di frequenza"
  },
  "lesson:a1-u05-l1": {
    theme: "Routine del mattino",
    title: "Verbi separabili: il prefisso va in fondo",
    objectives: [
      "descrivere la routine con aufstehen, frühstücken, duschen, einkaufen, fernsehen",
      "mettere il prefisso dei verbi separabili in fondo alla frase",
      "dire a che ora succede qualcosa con um + ora"
    ],
    theory: [
      {
        h: "Il prefisso si stacca e va in fondo",
        p: "Molti verbi tedeschi hanno un prefisso accentato che, nella frase principale, <strong>si stacca</strong> e va <strong>in fondo alla frase</strong>. All'infinito il verbo resta intero: <em>aufstehen</em>. Nella frase la parte coniugata sta al secondo posto, il prefisso chiude: <em>Ich stehe um sieben Uhr <strong>auf</strong></em>. Anche <em>aufwachen</em> (<em>Ich wache um sechs Uhr auf</em>), <em>einkaufen</em> (<em>Wir kaufen am Samstag ein</em>), <em>fernsehen</em> (<em>Am Abend sehe ich fern</em>), <em>anfangen</em> (<em>Der Film fängt um acht Uhr an</em>) e <em>einschlafen</em> funzionano così."
      },
      {
        contrast: "L'italiano non ha verbi che si spezzano: <em>mi alzo</em>, <em>mi sveglio</em>, <em>faccio la spesa</em> restano compatti. Inoltre <em>alzarsi</em> e <em>svegliarsi</em> sono riflessivi in italiano (<em>mi alzo</em>), mentre <em>aufstehen</em> e <em>aufwachen</em> in tedesco <strong>non vogliono nessun pronome</strong>: <em>Ich stehe auf</em>, non «Ich stehe mich auf». Lo stesso vale per <em>fare la doccia</em>: in tedesco basta il verbo regolare <em>duschen</em> (<em>Ich dusche am Morgen</em>)."
      },
      {
        h: "Le parti della giornata: un'insidia di genere",
        p: "Impara questi nomi con l'articolo: <em>der Morgen</em>, <em>der Tag</em>, <em>der Abend</em>, <em>die Nacht</em>. In italiano <em>la mattina</em> e <em>la sera</em> sono femminili, mentre in tedesco <em>der Morgen</em> e <em>der Abend</em> sono maschili. <em>Nacht</em> è invece femminile come in italiano (<em>la notte</em>): <em>die Nacht</em>, plurale <em>die Nächte</em>."
      },
      {
        trap: "Non dire «Ich aufstehe um sieben»: il prefisso non resta attaccato al verbo coniugato. E non dimenticarlo in fondo: «Ich stehe um sieben Uhr» senza <em>auf</em> è un'altra frase e non vuol dire «mi alzo». Attenzione anche ai prefissi che <strong>non</strong> si staccano mai: <em>be-</em>, <em>ver-</em>, <em>er-</em> (<em>besuchen</em> → <em>Ich besuche dich</em>, <em>verstehen</em> → <em>Ich verstehe das</em>). Il prefisso separabile è quello accentato (<em>AUFstehen</em>), quello inseparabile no (<em>beSUchen</em>)."
      },
      {
        tip: "Scrivi cinque frasi con verbi separabili diversi e controlla che il prefisso sia sempre l'ultima parola: <em>Ich wache auf. Ich stehe auf. Ich kaufe ein. Ich sehe fern. Ich schlafe ein.</em> Poi aggiungi <em>um</em> + ora a due di esse."
      }
    ],
    grammar: {
      title: "Verbi separabili nella frase principale",
      note: "Nella frase principale la parte coniugata sta al <b>secondo posto</b>, il <b>prefisso va in fondo</b>. All'infinito il verbo è intero.",
      table: {
        head: ["infinito", "presente", "esempio"],
        rows: [
          ["aufstehen", "ich stehe ... auf", "Ich stehe um sieben Uhr auf."],
          ["aufwachen", "ich wache ... auf", "Du wachst um sechs Uhr auf."],
          ["einkaufen", "wir kaufen ... ein", "Am Samstag kaufen wir ein."],
          ["fernsehen", "er sieht ... fern", "Am Abend sieht er fern."],
          ["anfangen", "er fängt ... an", "Der Film fängt um acht Uhr an."]
        ]
      },
      examples: [
        { tr: "Mi alzo alle sette.", note: "auf in fondo, nessun pronome riflessivo" },
        { tr: "Ti svegli alle sei." },
        { tr: "Il sabato facciamo la spesa.", note: "einkaufen: ein in fondo" },
        { tr: "La sera lui guarda la televisione.", note: "fernsehen: nel presente di er, sehen cambia in sieht" },
        { tr: "Il film comincia alle otto.", note: "anfangen: er fängt an, con il cambio di vocale" },
        { tr: "Faccio colazione alle sette e mezza.", note: "frühstücken non è separabile: nessun prefisso in fondo" }
      ]
    },
    vocab: [
      "alzarsi",
      "svegliarsi",
      "fare colazione",
      "fare la doccia",
      "fare la spesa, fare acquisti",
      "guardare la televisione",
      "cominciare, iniziare",
      "addormentarsi",
      "la mattina",
      "il giorno",
      "la sera",
      "la notte"
    ],
    exercises: [
      {
        q: "Quale frase è corretta?",
        opts: ["Ich aufstehe um sieben Uhr.", "Ich stehe um sieben Uhr auf.", "Ich stehe um auf sieben Uhr."],
        why: "Il verbo coniugato è al secondo posto e il prefisso <b>auf</b> chiude la frase: <b>Ich stehe um sieben Uhr auf.</b>"
      },
      {
        q: "Quale domanda è corretta?",
        opts: ["Kommst du mit?", "Mitkommst du?", "Kommst mit du?"],
        why: "<i>Mitkommen</i> è separabile: <i>Kommst du mit?</i> Il prefisso <b>mit</b> chiude la domanda."
      },
      {
        tr: "Tutta la coniugazione di aufstehen, con il prefisso.",
        why: "Scrivi sempre la forma coniugata e poi il prefisso: <i>stehe auf</i>, <i>stehst auf</i>, <i>steht auf</i>, <i>stehen auf</i>, <i>steht auf</i>, <i>stehen auf</i>. <i>Er/sie/es</i> e <i>ihr</i> hanno la stessa forma: <b>steht auf</b>."
      },
      {
        q: "Completa: «Wir ___ um sieben auf.»",
        hint: "aufstehen, prima persona plurale",
        why: "Con <b>wir</b> il verbo ha la forma dell'infinito: <i>wir stehen ... auf</i>."
      },
      {
        q: "Completa: «Ich stehe um sieben ___.»",
        hint: "il prefisso di aufstehen",
        why: "Il prefisso separabile va in fondo: <b>auf</b>."
      },
      {
        tr: "Mi alzo alle sette.",
        why: "L'ordine è: soggetto, verbo coniugato, ora, prefisso. In <i>stehe</i> la <b>st</b> a inizio sillaba si legge come «scht»: /ˈʃteːə/."
      },
      {
        q: "Completa le due parole mancanti.",
        tr: "Il sabato facciamo la spesa.",
        why: "<i>Einkaufen</i> si divide in <i>kaufen</i> e <i>ein</i>. Con <i>am Samstag</i> in prima posizione il soggetto <i>wir</i> segue il verbo."
      },
      {
        tr: "Alle sette mi alzo.",
        why: "Sono corrette anche <i>Ich stehe um sieben Uhr auf</i> e, con l'inversione, <i>Um sieben (Uhr) stehe ich auf</i>. Nella forma italiana il pronome riflessivo non si traduce."
      },
      {
        tr: "Mi alzo alle sette e faccio colazione alle otto.",
        why: "<i>Auf</i> ha il dittongo /aʊ̯/, scritto «au»: uno scivolamento da «a» a una «u» breve nella stessa sillaba. In <i>frühstücke</i> la <b>ü</b> è una «u» con le labbra arrotondate e la lingua avanti, come per dire «i»; la <b>st</b> si legge «scht»."
      },
      {
        tr: "Il sabato facciamo la spesa.",
        why: "<i>Samstag</i>: la <b>s</b> davanti a vocale è sonora; <i>ein</i> comincia con il dittongo <b>ei</b> (come «ai»)."
      }
    ]
  },
  "lesson:a1-u05-l2": {
    theme: "L'ora e i giorni",
    title: "Dire e chiedere l'ora: um, am, von ... bis",
    objectives: [
      "chiedere l'ora con Wie spät ist es? e rispondere",
      "dire le ore intere, e Viertel nach, Viertel vor, halb",
      "usare um con l'ora, am con i giorni e von ... bis"
    ],
    theory: [
      {
        h: "Chiedere e dire l'ora",
        p: "Per chiedere l'ora: <em>Wie spät ist es?</em> oppure <em>Wie viel Uhr ist es?</em> Si risponde con <em>Es ist</em> + ora: <em>Es ist sieben Uhr</em>. Per i quarti e i minuti: <em>Es ist Viertel nach sieben</em> (7:15), <em>Es ist Viertel vor acht</em> (7:45), <em>Es ist zehn nach sieben</em> (7:10), <em>Es ist zehn vor acht</em> (7:50). Con l'una si dice <em>Es ist ein Uhr</em>. In contesti ufficiali (treni, programmi televisivi, orari) si usano anche le ore da 0 a 24: <em>neunzehn Uhr dreißig</em>."
      },
      {
        contrast: "In italiano si dice <em>sono le sette</em>, plurale. In tedesco il soggetto è sempre <em>es</em> e il verbo resta singolare: <em>Es ist sieben Uhr</em>, mai «Sie sind sieben Uhr». Poi c'è <strong>halb</strong>: <em>halb acht</em> significa <strong>le sette e mezza</strong>, non le otto e mezza, perché si conta verso l'ora che sta per arrivare. Per un italiano è la trappola più frequente: <em>Es ist halb acht</em> = 7:30. Infine l'italiano usa «ora» sia per l'ora del giorno sia per la durata, il tedesco no: l'ora del giorno si dice con <em>Uhr</em> (<em>die Uhr</em> è anche «l'orologio»), la durata con <em>die Stunde</em>: <em>Es ist drei Uhr</em> (sono le tre), <em>Der Film dauert drei Stunden</em> (il film dura tre ore)."
      },
      {
        h: "um, am, von ... bis",
        p: "Con l'ora precisa si usa <strong>um</strong>: <em>Der Film beginnt um acht Uhr</em> (alle otto). Con i giorni e le parti della giornata si usa <strong>am</strong>: <em>am Montag</em>, <em>am Samstag</em>, <em>am Morgen</em>, <em>am Nachmittag</em>, <em>am Abend</em>; unica eccezione, <em>in der Nacht</em>. Con i mesi e le stagioni <strong>im</strong>: <em>im Mai</em>, <em>im Sommer</em>. Per un intervallo, <strong>von ... bis</strong>: <em>von Montag bis Freitag</em>, <em>von acht bis vier</em>. I giorni: <em>Montag, Dienstag, Mittwoch, Donnerstag, Freitag, Samstag, Sonntag</em>."
      },
      {
        trap: "In tedesco tutti i giorni sono maschili (<em>der Montag</em>, <em>der Sonntag</em>) e si scrivono con la maiuscola, come ogni nome. In italiano sono minuscoli e la domenica è femminile (<em>la domenica</em>), mentre il sabato e gli altri giorni sono maschili. Non tradurre «alle sette» con <em>am</em>: per l'ora serve <em>um</em>, per il giorno <em>am</em>. E non dire «um Montag»: lunedì è un giorno, quindi <em>am Montag</em>."
      },
      {
        tip: "Impara le tre mezze ore in coppia: <em>halb acht</em> (7:30), <em>halb neun</em> (8:30), <em>halb zehn</em> (9:30). Per controllare di aver capito, aggiungi sempre l'ora che segue: se dico <em>halb neun</em>, mi manca mezz'ora a nove."
      }
    ],
    grammar: {
      title: "L'ora e le preposizioni di tempo",
      note: "<b>um</b> + ora, <b>am</b> + giorno o parte del giorno (<em>am Morgen, am Nachmittag, am Abend</em>; eccezione: <em>in der Nacht</em>), <b>im</b> + mese o stagione. <b>Halb acht</b> = 7:30.",
      table: {
        head: ["ora", "si dice"],
        rows: [
          ["7:00", "Es ist sieben Uhr."],
          ["7:05", "Es ist fünf nach sieben."],
          ["7:15", "Es ist Viertel nach sieben."],
          ["7:30", "Es ist halb acht."],
          ["7:45", "Es ist Viertel vor acht."],
          ["7:50", "Es ist zehn vor acht."]
        ]
      },
      examples: [
        { tr: "Che ore sono?", note: "anche: Wie viel Uhr ist es?" },
        { tr: "Sono le sette.", note: "es ist, singolare" },
        { tr: "Sono le sette e un quarto." },
        { tr: "Sono le sette e mezza.", note: "halb acht: si conta verso le otto" },
        { tr: "Sono le otto meno un quarto." },
        { tr: "Il film comincia il sabato alle otto e mezza.", note: "am Samstag, um halb neun" }
      ]
    },
    vocab: [
      "l'ora, l'orologio (die Uhr)",
      "l'ora (di durata)",
      "il minuto",
      "il quarto",
      "mezzo, mezza (halb acht = le sette e mezza)",
      "meno (davanti all'ora che arriva: Viertel vor acht)",
      "dopo (Viertel nach sieben)",
      "tardi",
      "presto",
      "il lunedì",
      "il sabato",
      "il fine settimana"
    ],
    exercises: [
      {
        q: "«Es ist halb acht.» Che ore sono?",
        opts: ["le sette e mezza", "le otto e mezza", "le otto in punto"],
        why: "<i>Halb acht</i> sono le sette e mezza: si conta verso l'ora successiva, mezz'ora prima delle otto."
      },
      {
        q: "Come dici «dal lunedì al venerdì»?",
        opts: ["von Montag nach Freitag", "ab Montag zu Freitag", "von Montag bis Freitag"],
        why: "Per un intervallo si usa <b>von ... bis</b>: <i>von Montag bis Freitag</i>."
      },
      {
        q: "Completa: «Der Film beginnt ___ acht Uhr.» (alle otto)",
        hint: "con l'ora precisa",
        why: "Con l'ora si usa <b>um</b>: <i>um acht Uhr</i>."
      },
      {
        q: "Completa: «Das Konzert ist ___ Samstag.» (il sabato)",
        hint: "con un giorno della settimana",
        why: "Con i giorni si usa <b>am</b>: <i>am Samstag</i>."
      },
      {
        tr: "Sono le sette e un quarto.",
        why: "<i>Viertel nach sieben</i>: la <b>V</b> di <i>Viertel</i> si legge come «f». In <i>sieben</i> la <b>ie</b> è una «i» lunga e la <b>s</b> è sonora."
      },
      {
        q: "Abbina ogni giorno della settimana al suo significato.",
        pairs: ["lunedì", "mercoledì", "venerdì", "domenica"]
      },
      {
        q: "Completa le due frasi.",
        tr: "7:10: sono le sette e dieci. 7:50: sono le otto meno dieci.",
        why: "<i>Zehn nach sieben</i> è 7:10, <i>zehn vor acht</i> è 7:50."
      },
      {
        tr: "Che ore sono? Sono le otto e mezza.",
        why: "Le otto e mezza si dicono <i>halb neun</i>. In alternativa <i>acht Uhr dreißig</i>, più formale. <i>Wie spät ist es?</i> e <i>Wie viel Uhr ist es?</i> sono equivalenti."
      },
      {
        tr: "Che ore sono? Sono le otto meno un quarto.",
        why: "<i>Viertel vor acht</i>: 7:45. In <i>vor</i> la <b>v</b> suona come «f» e la <b>o</b> è lunga."
      },
      {
        tr: "Il film comincia alle otto e mezza.",
        why: "In <i>halb neun</i> la <b>h</b> iniziale è aspirata e la <b>b</b> finale suona come «p». <i>Beginnt</i>: la <b>g</b> è una «g» dura."
      }
    ]
  },
  "lesson:a1-u05-l3": {
    theme: "Capacità, volontà, obbligo",
    title: "Verbi modali: können, wollen, müssen",
    objectives: [
      "dire cosa si può, si vuole e si deve fare con können, wollen, müssen",
      "coniugare i tre modali al presente",
      "mettere l'infinito in fondo alla frase"
    ],
    theory: [
      {
        h: "Tre verbi, una struttura",
        p: "<strong>können</strong> (potere, sapere), <strong>wollen</strong> (volere) e <strong>müssen</strong> (dovere) si usano insieme a un altro verbo all'infinito. Il modale è coniugato e sta al secondo posto, l'<strong>infinito va in fondo alla frase</strong>: <em>Ich kann heute nicht kommen</em>, <em>Wir wollen morgen schwimmen</em>, <em>Du musst heute lernen</em>. Modale e infinito racchiudono il resto della frase come una parentesi."
      },
      {
        h: "La coniugazione",
        p: "I tre verbi hanno una coniugazione propria: la prima e la terza persona singolare sono uguali e <strong>senza desinenza</strong>. <em>Ich kann</em>, <em>er kann</em>. <em>Ich will</em>, <em>er will</em>. <em>Ich muss</em>, <em>er muss</em>. Con <em>wir</em>, <em>sie</em> e <em>Sie</em> la forma è come l'infinito: <em>wir können</em>, <em>sie wollen</em>, <em>Sie müssen</em>. Con <em>ihr</em> si ha <em>könnt, wollt, müsst</em>, con <em>du</em> <em>kannst, willst, musst</em>."
      },
      {
        contrast: "In italiano l'infinito normalmente segue il modale (<em>posso venire oggi</em>, <em>voglio dormire</em>), ma non deve occupare la posizione finale richiesta dalla struttura tedesca qui insegnata. In tedesco l'infinito sta in fondo: <em>Ich kann heute kommen</em>, e se la frase si allunga la parentesi è evidente: <em>Ich kann heute Abend mit dir ins Kino gehen</em>. Inoltre l'italiano usa «sapere» per la capacità (<em>so nuotare</em>), mentre il tedesco usa <em>können</em> per tutto: <em>Ich kann schwimmen</em> vale «posso nuotare» e «so nuotare»."
      },
      {
        trap: "Con <em>nicht</em>, <em>müssen</em> non vuol dire «non devo» nel senso di divieto. <em>Du musst nicht kommen</em> significa «non è necessario che tu venga»: non è un divieto. Per «non devi» come divieto servirà un altro verbo, <em>dürfen</em>, che arriva più avanti. Un'altra trappola: <em>wollen</em> è diretto. <em>Ich will einen Kaffee</em> può suonare brusco come richiesta. Per chiedere con gentilezza si usa <em>ich möchte</em>, che si vede più avanti e ha una <em>-e</em>: viene da <em>mögen</em> (è una forma di cortesia). Dopo un modale non c'è <em>zu</em> davanti all'infinito."
      },
      {
        tip: "Costruisci tre frasi su di te, una per modale, e dille ad alta voce: <em>Ich kann gut kochen</em>, <em>Ich will morgen schlafen</em>, <em>Ich muss heute lernen</em>. Controlla che l'infinito sia sempre l'ultima parola."
      }
    ],
    grammar: {
      title: "können, wollen, müssen al presente",
      note: "La 1ª e la 3ª persona singolare sono <b>uguali e senza desinenza</b>. L'infinito va in fondo alla frase.",
      table: {
        head: ["persona", "können", "wollen", "müssen"],
        rows: [
          ["ich", "kann", "will", "muss"],
          ["du", "kannst", "willst", "musst"],
          ["er / sie / es", "kann", "will", "muss"],
          ["wir", "können", "wollen", "müssen"],
          ["ihr", "könnt", "wollt", "müsst"],
          ["sie / Sie", "können", "wollen", "müssen"]
        ]
      },
      examples: [
        { tr: "So cucinare bene.", note: "können per la capacità" },
        { tr: "Oggi non puoi venire.", note: "nicht prima dell'infinito" },
        { tr: "Domani vogliamo nuotare." },
        { tr: "Lui oggi non vuole lavorare.", note: "er will: senza desinenza" },
        { tr: "Oggi devo studiare.", note: "ich muss: senza desinenza" },
        { tr: "Loro devono fare i compiti.", note: "sie müssen: forma come l'infinito" }
      ]
    },
    vocab: [
      "potere, sapere (capacità)",
      "volere",
      "dovere",
      "studiare, imparare",
      "cucinare",
      "nuotare",
      "dormire",
      "ballare",
      "il lavoro",
      "il compito (a casa)",
      "oggi",
      "domani"
    ],
    exercises: [
      {
        q: "Quale frase è corretta?",
        opts: ["Ich kann heute gehe.", "Ich kann heute gehen.", "Ich gehen kann heute."],
        why: "Il modale è al secondo posto, l'infinito in fondo: <b>Ich kann heute gehen.</b>"
      },
      {
        q: "Completa: «Er ___ heute lernen.» (Oggi lui deve studiare.)",
        opts: ["müsst", "muss", "müssen"],
        why: "Con <i>er</i> il modale non prende desinenza: <b>er muss</b>."
      },
      {
        tr: "Tutta la coniugazione di können.",
        why: "<i>Ich kann</i> e <i>er kann</i> sono uguali. Con <i>du</i> la forma è <i>kannst</i>, con <i>ihr</i> <i>könnt</i>."
      },
      {
        tr: "Tutta la coniugazione di wollen.",
        why: "<i>Ich will</i> e <i>er will</i> sono uguali. Con <i>du</i> la forma è <i>willst</i>, con <i>ihr</i> <i>wollt</i>."
      },
      {
        tr: "Tutta la coniugazione di müssen.",
        why: "<i>Ich muss</i> e <i>er muss</i> sono uguali. Con <i>du</i> la forma è <i>musst</i>, con <i>ihr</i> <i>müsst</i>."
      },
      {
        q: "Completa: «Wir ___ morgen schwimmen.» (Domani vogliamo nuotare.)",
        hint: "volere, prima persona plurale",
        why: "Con <b>wir</b> il modale ha la forma dell'infinito: <b>wollen</b>."
      },
      {
        q: "Completa le due frasi.",
        tr: "Non posso dormire. Devo lavorare.",
        why: "<i>Ich kann nicht schlafen</i>: <i>können</i> per la possibilità. <i>Ich muss arbeiten</i>: <i>müssen</i> per l'obbligo."
      },
      {
        tr: "Devo lavorare, ma voglio dormire.",
        why: "Due frasi con il proprio modale, unite da <i>aber</i> con la virgola prima: <i>muss</i> per l'obbligo, <i>will</i> per la volontà."
      },
      {
        tr: "Oggi non posso venire, devo lavorare.",
        why: "<i>Kann</i> con la <b>a</b> corta. In <i>kommen</i> la <b>o</b> è corta. <i>Heute</i>: la <b>eu</b> si legge «oi»."
      },
      {
        tr: "Oggi devo studiare, ma voglio nuotare.",
        why: "In <i>schwimmen</i> la <b>sch</b> si legge come «sc» di «scena» e la <b>w</b> come la «v» italiana."
      }
    ]
  },
  "lesson:a1-u05-l4": {
    theme: "Abitudini e frequenza",
    title: "Quanto spesso? immer, oft, manchmal, nie",
    objectives: [
      "dire quanto spesso si fa qualcosa con immer, oft, manchmal, selten, nie",
      "mettere l'avverbio di frequenza nel posto giusto",
      "iniziare la frase con un'indicazione di tempo e invertire verbo e soggetto"
    ],
    theory: [
      {
        h: "Gli avverbi di frequenza",
        p: "Cinque parole bastano per descrivere le abitudini: <em>immer</em> (sempre), <em>oft</em> (spesso), <em>manchmal</em> (qualche volta), <em>selten</em> (raramente), <em>nie</em> (mai). Di solito stanno <strong>dopo il verbo coniugato</strong>: <em>Ich trinke immer Kaffee</em>, <em>Ich lese oft die Zeitung</em>, <em>Ich esse selten Brot</em>. Per dire che qualcosa succede ogni mattina o ogni sera ci sono <em>morgens</em>, <em>abends</em> e <em>jeden Tag</em>."
      },
      {
        h: "Se la frase comincia con il tempo, il soggetto segue il verbo",
        p: "Il verbo coniugato sta sempre al <strong>secondo posto</strong>. Se in prima posizione c'è un'indicazione di tempo, il soggetto passa dopo il verbo (<strong>inversione</strong>): <em>Morgens trinke ich immer Kaffee</em>, <em>Abends sehe ich manchmal fern</em>, <em>Jeden Tag frühstücke ich um acht</em>. Il senso è lo stesso di <em>Ich trinke morgens immer Kaffee</em>: cambia solo l'elemento che apre la frase."
      },
      {
        contrast: "In italiano si può dire <em>La mattina io bevo sempre caffè</em>, con il soggetto prima del verbo. In tedesco «Morgens ich trinke» è un errore: dopo <em>morgens</em> il verbo viene subito. In italiano la negazione richiede <em>non</em> accanto al verbo: <em>non bevo mai birra</em>. In tedesco <em>nie</em> contiene già la negazione: <em>Ich trinke nie Bier</em>, senza <em>nicht</em>. Inoltre in italiano <em>la mattina</em> è un'espressione di tempo qualsiasi, mentre <em>morgens</em> indica un'abitudine («ogni mattina»)."
      },
      {
        trap: "Non dire «Ich trinke nie nicht Bier»: <em>nie</em> è già negativo e <em>nicht</em> si aggiunge a vuoto. E non mettere l'avverbio davanti al verbo coniugato come in italiano: «Ich immer trinke Kaffee» è un errore. Dopo il soggetto viene sempre il verbo, poi l'avverbio."
      },
      {
        tip: "Descrivi la tua giornata con una frase per avverbio: <em>Ich trinke immer Kaffee. Ich lese oft die Zeitung. Abends sehe ich manchmal fern. Ich esse selten Brot. Ich trinke nie Bier.</em> Poi prova a mettere <em>Morgens</em> o <em>Abends</em> in prima posizione e controlla il verbo."
      }
    ],
    grammar: {
      title: "Avverbi di frequenza e inversione",
      note: "L'avverbio sta di solito <b>dopo il verbo coniugato</b>. Se la frase comincia con un'indicazione di tempo, <b>il verbo resta al secondo posto</b> e il soggetto lo segue.",
      table: {
        head: ["avverbio", "significato", "esempio"],
        rows: [
          ["immer", "sempre", "Ich trinke immer Kaffee."],
          ["oft", "spesso", "Ich lese oft die Zeitung."],
          ["manchmal", "qualche volta", "Abends sehe ich manchmal fern."],
          ["selten", "raramente", "Ich esse selten Brot."],
          ["nie", "mai", "Ich trinke nie Bier."]
        ]
      },
      examples: [
        { tr: "Bevo sempre caffè." },
        { tr: "La mattina bevo sempre caffè.", note: "morgens in prima posizione: trinke ich" },
        { tr: "Leggo spesso il giornale." },
        { tr: "La sera guardo qualche volta la televisione.", note: "fernsehen: fern in fondo" },
        { tr: "Mangio raramente il pane." },
        { tr: "Non bevo mai birra.", note: "nie, senza nicht" }
      ]
    },
    vocab: [
      "sempre",
      "spesso",
      "qualche volta",
      "raramente",
      "mai",
      "la mattina, ogni mattina",
      "la sera, ogni sera",
      "ogni giorno",
      "il pane",
      "la colazione",
      "il giornale",
      "il pranzo"
    ],
    exercises: [
      {
        q: "Quale frase è corretta?",
        opts: ["Morgens ich trinke Kaffee.", "Morgens trinke ich Kaffee.", "Ich morgens trinke Kaffee."],
        why: "Dopo <i>morgens</i> viene subito il verbo coniugato (secondo posto), poi il soggetto: <b>Morgens trinke ich Kaffee.</b>"
      },
      {
        q: "Che cosa significa «Ich trinke nie Kaffee»?",
        opts: ["Non bevo mai caffè.", "Bevo sempre caffè.", "Oggi non bevo caffè."],
        why: "<i>Nie</i> vuol dire «mai» e contiene già la negazione: non serve <i>nicht</i>."
      },
      {
        q: "Quali frasi sono corrette?",
        opts: [
          "Morgens trinke ich immer Kaffee.",
          "Manchmal ich lese die Zeitung.",
          "Ich lese oft die Zeitung.",
          "Ich trinke nie nicht Kaffee.",
          "Jeden Tag frühstücke ich um acht."
        ],
        why: "La frase 2 ha il soggetto prima del verbo dopo <i>manchmal</i>; la frase 4 raddoppia la negazione, perché <i>nie</i> è già negativo."
      },
      {
        q: "Completa: «Abends ___ ich oft fern.»",
        hint: "fernsehen, prima persona singolare",
        why: "Il verbo <i>fernsehen</i> si divide: <b>sehe</b> al secondo posto, <i>fern</i> in fondo."
      },
      {
        q: "Abbina ogni avverbio al suo significato.",
        pairs: ["sempre", "spesso", "qualche volta", "mai"]
      },
      {
        tr: "La sera guardo qualche volta la televisione.",
        why: "Con <i>Abends</i> in prima posizione il verbo segue subito: <i>sehe ich</i>, poi l'avverbio, poi <i>fern</i> in fondo."
      },
      {
        q: "Completa le due parole mancanti.",
        tr: "La mattina bevo sempre caffè.",
        why: "Con <i>morgens</i> in prima posizione il verbo è al secondo posto: <i>trinke ich</i>. L'avverbio <i>immer</i> segue il soggetto."
      },
      {
        tr: "La sera guardo spesso la televisione.",
        why: "Sono corrette anche <i>Ich sehe abends oft fern</i> e <i>Oft sehe ich abends fern</i>: l'avverbio può cambiare posto, il verbo resta al secondo."
      },
      {
        tr: "La mattina bevo sempre caffè, la sera qualche volta tè.",
        why: "In <i>Kaffee</i> la doppia <b>ff</b> indica che la <b>a</b> è breve; <i>immer</i> ha la <b>i</b> corta. In <i>manchmal</i> il <b>ch</b> è lo stesso suono di <i>ich</i>."
      },
      {
        tr: "La mattina bevo sempre caffè e leggo il giornale.",
        why: "<i>Zeitung</i>: la <b>z</b> si legge «ts» e la <b>ei</b> «ai». <i>Lese</i> ha la <b>s</b> sonora."
      }
    ]
  },
  "lesson:a1-u05-test": {
    theme: "Verifica",
    title: "Verifica dell'unità 5",
    objectives: ["verificare verbi separabili, ora e preposizioni di tempo, modali e avverbi di frequenza"],
    theory: [
      {
        p: "Dieci domande su tutta l'unità. Si supera con il 70%. Non riguardare le lezioni mentre rispondi: se non ricordi qualcosa, è meglio tornare a ripassare."
      }
    ],
    exercises: [
      {
        tr: "Presente di aufstehen: ich, er/sie/es, wir.",
        why: "Il prefisso va in fondo: <i>stehe auf</i>, <i>steht auf</i>, <i>stehen auf</i>."
      },
      {
        tr: "Presente di müssen: ich, du, er/sie/es, wir.",
        why: "<i>Muss</i>, <i>musst</i>, <i>muss</i>, <i>müssen</i>: la 1ª e la 3ª persona singolare sono uguali."
      },
      {
        q: "Completa: «Der Film beginnt ___ acht Uhr.» (alle otto)",
        hint: "con l'ora precisa",
        why: "Con l'ora si usa <b>um</b>."
      },
      {
        q: "Completa: «Ich kann nicht kommen, ich ___ arbeiten.» (devo)",
        hint: "dovere, prima persona singolare",
        why: "<i>Ich muss</i>, senza desinenza."
      },
      {
        q: "Completa: «Morgens ___ ich immer Kaffee.» (bevo)",
        hint: "trinken, prima persona singolare",
        why: "Dopo <i>morgens</i> il verbo segue subito: <b>trinke</b>."
      },
      {
        q: "Quale frase è corretta?",
        opts: ["Ich aufstehe um sieben.", "Ich stehe um sieben auf.", "Ich auf stehe um sieben."],
        why: "Il prefisso <i>auf</i> va in fondo alla frase: <b>Ich stehe um sieben auf.</b>"
      },
      {
        q: "«Es ist halb zehn.» Che ore sono?",
        opts: ["le nove e mezza", "le dieci e mezza", "le dieci"],
        why: "<i>Halb zehn</i> sono le nove e mezza, mezz'ora prima delle dieci."
      },
      {
        tr: "Oggi non posso venire.",
        why: "Il modale è al secondo posto, <i>nicht</i> e l'infinito in fondo."
      },
      {
        tr: "Devo alzarmi alle sette e mezza.",
        why: "In questa frase il modale è <i>muss</i> e l'infinito <i>aufstehen</i> sta in fondo intero. Per «sette e mezza» si dice <i>halb acht</i>."
      },
      {
        tr: "La sera guardo qualche volta la televisione.",
        why: "Dopo <i>Abends</i> il verbo viene subito; <i>fern</i> chiude la frase."
      }
    ]
  }
});
