/* ============================================================
   Learner-language text (it) for data/core/a1-02.js, units a1-u04 to a1-u07.
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
  },
  "unit:a1-u06": {
    title: "In città",
    grammarNote: "mit, zu, bei, aus, von · dativo · wo? con in, an, neben · imperativo di cortesia · es gibt"
  },
  "lesson:a1-u06-l1": {
    theme: "Mezzi di trasporto",
    title: "Mezzi e destinazioni: mit dem Bus, zum Bahnhof",
    objectives: [
      "dire con che mezzo ci si sposta con mit + dativo",
      "dire dove si va con zu + dativo: zum Bahnhof, zur Schule",
      "usare l'articolo al dativo: dem, der, dem, den"
    ],
    theory: [
      {
        h: "Mit e zu vogliono il dativo",
        p: "Le preposizioni <strong>mit</strong> (con, per il mezzo di trasporto) e <strong>zu</strong> (verso un luogo o una persona) vogliono sempre il <strong>dativo</strong>. L'articolo cambia in tutti i generi: maschile e neutro <strong>dem</strong>, femminile <strong>der</strong>, plurale <strong>den</strong>. Esempi: <em>Ich fahre mit dem Bus</em> (maschile), <em>mit der Straßenbahn</em> (femminile), <em>mit dem Auto</em> (neutro). Al plurale il nome di solito prende anche una <strong>-n</strong>: <em>mit den Bussen</em>, <em>mit den Zügen</em>, <em>mit den Fahrrädern</em>. Non la prende se il plurale termina già in <strong>-n</strong> o in <strong>-s</strong>: <em>mit den Autos</em>, <em>mit den Straßenbahnen</em>."
      },
      {
        h: "zu dem diventa zum, zu der diventa zur",
        p: "Con <em>zu</em> l'articolo si fonde: <strong>zu dem → zum</strong>, <strong>zu der → zur</strong>. Si dice <em>Ich gehe zum Bahnhof</em> e <em>Sie geht zur Schule</em>. Per dire che si va a piedi c'è l'espressione fissa <strong>zu Fuß</strong>: <em>Wir gehen zu Fuß zur Haltestelle</em>."
      },
      {
        contrast: "In italiano il mezzo si dice con <em>in</em> (<em>in autobus</em>, <em>in treno</em>, <em>in macchina</em>, <em>in bicicletta</em>) e la meta con <em>a</em> (<em>alla stazione</em>, <em>a scuola</em>). Negli esempi di questa lezione il mezzo si dice con <strong>mit</strong> (<em>mit dem Bus</em>, <em>mit dem Zug</em>) e la meta con <strong>zu</strong> (le mete possono richiedere anche <em>nach</em> o <em>in</em>, come vedrai). <em>Im Bus fahren</em> esiste, ma sottolinea il trovarsi a bordo. Fai attenzione anche ai generi: <em>la stazione</em> è femminile, ma <em>der Bahnhof</em> è maschile; <em>il tram</em> è maschile, ma <em>die Straßenbahn</em> è femminile; <em>l'auto</em> è femminile in italiano, ma <em>das Auto</em> è neutro; <em>la bici</em> è <em>das Fahrrad</em>, neutro."
      },
      {
        trap: "Per «andare in autobus» la formulazione abituale è <em>mit dem Bus fahren</em>; <em>im Bus fahren</em> mette in evidenza il trovarsi a bordo. Non usare la forma del nominativo: «mit der Bus» e «mit die Straßenbahn» sono sbagliati. Dopo <em>mit</em> e <em>zu</em> l'articolo è sempre al dativo: <em>mit dem Bus</em>, <em>mit der Straßenbahn</em>, <em>zum Bahnhof</em>, <em>zur Schule</em>."
      },
      {
        tip: "Impara ogni mezzo di trasporto con la sua frase intera: <em>mit dem Bus</em>, <em>mit der U-Bahn</em>, <em>mit dem Zug</em>, <em>mit dem Fahrrad</em>. Così l'articolo giusto arriva insieme al nome."
      }
    ],
    grammar: {
      title: "mit e zu con il dativo",
      note: "Dopo <b>mit</b> e <b>zu</b> l'articolo è al dativo: <b>dem</b> (m. e n.), <b>der</b> (f.), <b>den</b> + -n (plurale). <b>zu dem → zum</b>, <b>zu der → zur</b>.",
      table: {
        head: ["genere", "mit + dativo", "zu + dativo"],
        rows: [
          ["maschile", "mit dem Bus", "zum Bahnhof"],
          ["femminile", "mit der Straßenbahn", "zur Schule"],
          ["neutro", "mit dem Auto", "zum Kino"],
          ["plurale", "mit den Bussen", "zu den Haltestellen"]
        ]
      },
      examples: [
        { tr: "Vado in autobus.", note: "mit dem Bus: maschile" },
        { tr: "Tu vai in tram.", note: "mit der Straßenbahn: femminile; fährst, con il cambio di vocale" },
        { tr: "Andiamo in macchina.", note: "mit dem Auto: neutro" },
        { tr: "Vado alla stazione.", note: "zum = zu dem" },
        { tr: "Lei va a scuola.", note: "zur = zu der" },
        { tr: "Andiamo a piedi alla fermata.", note: "zu Fuß: espressione fissa" }
      ]
    },
    vocab: [
      "con, per mezzo di",
      "a, verso (un luogo o una persona)",
      "a piedi",
      "l'autobus",
      "il tram",
      "la metropolitana",
      "il treno",
      "l'auto",
      "la bicicletta",
      "la stazione",
      "la fermata",
      "la scuola"
    ],
    exercises: [
      {
        q: "Quale frase è corretta?",
        opts: ["Ich fahre mit der Bus.", "Ich fahre mit dem Bus.", "Ich fahre mit den Bus."],
        why: "<i>Der Bus</i> è maschile: dopo <i>mit</i> l'articolo è <b>dem</b>."
      },
      {
        q: "Completa: «Wir fahren mit ___ Auto.»",
        hint: "das Auto, articolo determinativo al dativo",
        why: "<i>Das Auto</i> è neutro: dopo <i>mit</i> si dice <b>dem</b>."
      },
      {
        q: "Completa: «Ich fahre mit ___ U-Bahn.»",
        hint: "die U-Bahn, articolo determinativo al dativo",
        why: "<i>Die U-Bahn</i> è femminile: al dativo <b>der</b>."
      },
      {
        q: "Completa: «Ich gehe ___ Bahnhof.»",
        hint: "zu + dem, nella forma contratta",
        why: "<i>Zu dem</i> si fonde in <b>zum</b>. Anche <i>zu dem Bahnhof</i> è corretto, ma si dice quasi sempre <i>zum</i>."
      },
      {
        q: "Scegli l'articolo giusto per ogni nome.",
        why: "<i>Bahnhof</i> e <i>Zug</i> sono maschili, <i>Haltestelle</i> e <i>Schule</i> femminili, <i>Auto</i> e <i>Fahrrad</i> neutri. Attenzione: <i>la stazione</i> è femminile in italiano, ma <i>der Bahnhof</i> è maschile.",
        items: ["stazione", "fermata", "auto", "treno", "scuola", "bicicletta"]
      },
      {
        tr: "Andiamo in treno.",
        why: "Sono corrette entrambe le posizioni: <i>Wir fahren mit dem Zug</i> e, con l'inversione, <i>Mit dem Zug fahren wir</i>. Il verbo resta al secondo posto."
      },
      {
        q: "Completa le due parole mancanti.",
        tr: "Va a scuola con l'autobus.",
        why: "Il mezzo si dice con <i>mit</i> + dativo (<i>dem Bus</i>), la meta con <i>zu</i> + dativo (<i>zu der → zur Schule</i>)."
      },
      {
        tr: "Vado alla stazione in autobus.",
        why: "Sono corrette anche le altre posizioni: <i>Ich fahre zum Bahnhof mit dem Bus</i>, <i>Mit dem Bus fahre ich zum Bahnhof</i> e <i>Zum Bahnhof fahre ich mit dem Bus</i>. Con il mezzo si usa <i>fahren</i>, non <i>gehen</i>."
      },
      {
        tr: "Vado a scuola in autobus.",
        why: "<i>Schule</i>: la <b>sch</b> si legge come in «scena» (/ʃ/) e la <b>u</b> è lunga. In <i>fahre</i> la <b>h</b> non si pronuncia e allunga la <b>a</b>."
      },
      {
        tr: "Andiamo alla stazione in tram.",
        why: "<i>Straßenbahn</i>: la <b>ß</b> è una «s» sorda e la <b>str</b> iniziale si legge «scht-r». In <i>Bahnhof</i> la <b>h</b> dopo la <b>a</b> allunga la vocale; la <b>h</b> di <i>hof</i> si aspira leggermente."
      }
    ]
  },
  "lesson:a1-u06-l2": {
    theme: "Muoversi e provenienza",
    title: "gehen, fahren, kommen: aus, von, bei",
    objectives: [
      "distinguere gehen (a piedi) da fahren (con un mezzo)",
      "dire da dove si viene con aus e von e dove ci si trova con bei",
      "dire verso quale città si va con nach"
    ],
    theory: [
      {
        h: "Gehen e fahren, kommen",
        p: "<strong>Gehen</strong> indica di solito lo spostarsi a piedi, <strong>fahren</strong> spostarsi con un mezzo (autobus, treno, bici, auto). Con <em>fahren</em> la vocale cambia alla 2ª e alla 3ª persona singolare: <em>ich fahre</em>, <em>du f<strong>ä</strong>hrst</em>, <em>er f<strong>ä</strong>hrt</em>. <em>Gehen</em> e <em>kommen</em> sono regolari: <em>ich gehe</em>, <em>du gehst</em>, <em>wir kommen</em>. I verbi separabili <em>einsteigen</em> e <em>aussteigen</em> mettono il prefisso in fondo: <em>Ich steige am Bahnhof aus.</em>"
      },
      {
        h: "Aus, von e bei: da dove?",
        p: "<strong>Aus</strong> indica la provenienza da un luogo o da un paese (<em>Ich komme aus Italien</em>, <em>Sie kommt aus dem Supermarkt</em>). <strong>Von</strong> indica il punto di partenza (<em>Er kommt vom Bahnhof</em>, <em>vom Arzt</em>). <strong>Bei</strong> indica dove ci si trova, presso un luogo o una persona (<em>Anna ist beim Arzt</em>). Anche <em>von dem → vom</em> e <em>bei dem → beim</em> si fondono."
      },
      {
        h: "Nach per le città, in per dove si vive",
        p: "Per dire dove si va, con il nome di una città o di un paese <strong>senza articolo</strong> si usa <strong>nach</strong>: <em>Ich fahre nach Berlin</em>, <em>Wir fahren nach Italien</em>. Per dire dove si abita o si è, invece, si usa <strong>in</strong>: <em>Ich wohne in Berlin</em>. I paesi con l'articolo, come <em>die Schweiz</em>, si trattano più avanti."
      },
      {
        contrast: "L'italiano <em>da</em> è una sola parola e in tedesco diventa molte: <em>aus</em> (<em>vengo da Roma</em>: <em>Ich komme aus Rom</em>), <em>von</em> (<em>vengo dalla stazione</em>: <em>Ich komme vom Bahnhof</em>), <em>bei</em> (<em>sono dal medico</em>: <em>Ich bin beim Arzt</em>), <em>zu</em> (<em>vado dal medico</em>: <em>Ich gehe zum Arzt</em>) e <em>seit</em> (<em>abito qui da un anno</em>: <em>Ich wohne seit einem Jahr hier</em>; <em>seit Montag</em>, per un punto di inizio). Inoltre <em>andare</em> copre sia <em>gehen</em> sia <em>fahren</em>: in tedesco il mezzo conta."
      },
      {
        trap: "Per «vengo dall'Italia» non si dice «Ich komme von Italien»: per la provenienza da un paese o da una città si usa <strong>aus</strong>. E «Ich gehe mit dem Zug» è sbagliato: con un mezzo di trasporto si usa <em>fahren</em>, quindi <em>Ich fahre mit dem Zug</em>."
      }
    ],
    grammar: {
      title: "aus, von, bei, zu: provenienza e luogo",
      note: "<b>aus</b> = provenienza da un luogo o da un paese, <b>von</b> = punto di partenza, <b>bei</b> = presso, <b>zu</b> = verso. Tutte vogliono il dativo.",
      table: {
        head: ["preposizione", "significato", "esempio"],
        rows: [
          ["aus", "da (provenienza)", "Ich komme aus Italien."],
          ["von", "da (punto di partenza)", "Er kommt vom Bahnhof."],
          ["bei", "presso, da", "Anna ist beim Arzt."],
          ["zu", "verso", "Wir gehen zum Arzt."]
        ]
      },
      examples: [
        { tr: "Vengo dall'Italia.", note: "aus + paese senza articolo" },
        { tr: "Vengo dal supermercato.", note: "aus dem: dal supermercato, da dentro" },
        { tr: "Lui viene dalla stazione.", note: "vom = von dem" },
        { tr: "Andiamo dal medico.", note: "zum = zu dem" },
        { tr: "Vai al parco.", note: "fährst: cambio di vocale" },
        { tr: "Anna è dal medico.", note: "beim = bei dem" }
      ]
    },
    vocab: [
      "andare (a piedi)",
      "andare (con un mezzo), guidare",
      "venire",
      "da (provenienza), di",
      "da (punto di partenza), di",
      "presso, da (una persona)",
      "salire (su un mezzo)",
      "scendere (da un mezzo)",
      "il medico",
      "il parco",
      "il supermercato",
      "la città"
    ],
    exercises: [
      {
        tr: "Presente di gehen: ich, er/sie/es, wir.",
        why: "<i>Gehen</i> è regolare: <i>gehe</i>, <i>geht</i>, <i>gehen</i>."
      },
      {
        tr: "Presente di fahren: ich, du, er/sie/es, wir.",
        why: "Alla 2ª e 3ª persona singolare la <b>a</b> diventa <b>ä</b>: <i>fahre</i>, <i>fährst</i>, <i>fährt</i>, <i>fahren</i>."
      },
      {
        q: "Completa: «Ich ___ aus Italien.»",
        hint: "kommen, prima persona singolare",
        why: "<i>Ich komme</i>: la desinenza della 1ª persona è <b>-e</b>."
      },
      {
        q: "Completa: «Er ___ mit dem Zug.»",
        hint: "fahren, terza persona singolare",
        why: "Con <i>er</i> il verbo cambia vocale: <b>fährt</b>."
      },
      {
        q: "Completa: «Wir kommen ___ der Stadt.»",
        hint: "da dentro un luogo, provenienza",
        why: "Per la provenienza da un luogo si usa <b>aus</b>: <i>aus der Stadt</i>."
      },
      {
        q: "Come dici «Vengo dal medico»?",
        opts: ["Ich komme aus dem Arzt.", "Ich komme vom Arzt.", "Ich komme zum Arzt."],
        why: "Per il punto di partenza si usa <b>von</b> (<i>von dem → vom</i>). <i>Aus</i> vale per un luogo, non per una persona, e <i>zum</i> indica la direzione verso, non la provenienza."
      },
      {
        q: "Quali frasi sono corrette?",
        opts: [
          "Ich fahre mit dem Zug.",
          "Ich gehe mit dem Zug.",
          "Wir gehen zu Fuß zum Park.",
          "Du kommst aus Italien.",
          "Er fahrt zum Bahnhof."
        ],
        why: "La frase 2 è sbagliata perché con un mezzo si usa <i>fahren</i>; la frase 5 ha la forma sbagliata di <i>fahren</i>: <i>fährt</i>."
      },
      {
        tr: "Lui viene dalla stazione.",
        why: "È corretta anche l'inversione <i>Vom Bahnhof kommt er</i>. Il verbo resta al secondo posto."
      },
      {
        tr: "Vengo dall'Italia e vado a Berlino in treno.",
        why: "<i>Italien</i>: l'accento cade sulla seconda sillaba e la <b>a</b> è lunga; <i>Berlin</i> si legge con la <b>r</b> uvulare o apicale, sono entrambe pronunce standard. <i>Zug</i> comincia con la <b>z</b> «ts»."
      },
      {
        tr: "Andiamo a piedi al parco.",
        why: "<i>Fuß</i>: la <b>ß</b> è una «s» sorda e la <b>u</b> è lunga. In <i>Park</i> la <b>k</b> finale è netta."
      }
    ]
  },
  "lesson:a1-u06-l3": {
    theme: "Chiedere la strada",
    title: "Wo ist der Bahnhof? Gehen Sie geradeaus",
    objectives: [
      "chiedere dove si trova un luogo con Entschuldigung, wo ist ...?",
      "dare indicazioni con l'imperativo di cortesia (Gehen Sie ..., Biegen Sie ... ab)",
      "dire dove si trova qualcosa con neben, hinter, vor + dativo"
    ],
    theory: [
      {
        h: "L'imperativo di cortesia: infinito + Sie",
        p: "Con <strong>Sie</strong> l'imperativo ha la forma dell'<strong>infinito + Sie</strong>, con il verbo in <strong>prima posizione</strong>: <em>Gehen Sie geradeaus!</em>, <em>Nehmen Sie die erste Straße rechts!</em> I verbi separabili mandano il prefisso in fondo: <em>Biegen Sie links <strong>ab</strong>.</em> Fa eccezione <em>sein</em>: <strong>Seien Sie</strong> (<em>Seien Sie bitte pünktlich!</em>)."
      },
      {
        h: "Dov'è? wo? con il dativo",
        p: "Per chiedere dove si trova un luogo: <em>Entschuldigung, wo ist der Bahnhof?</em> Per rispondere servono le preposizioni di luogo. Con <strong>wo?</strong> in, an, auf, vor, hinter, neben vogliono il <strong>dativo</strong>: <em>Der Bahnhof ist neben dem Rathaus</em>, <em>Die Apotheke ist hinter der Kreuzung</em>, <em>Der Bus hält vor dem Rathaus</em>, <em>Wir sind am Bahnhof</em> (<em>an dem → am</em>) e <em>Das Café ist in der Stadt</em>."
      },
      {
        contrast: "In italiano la forma di cortesia usa il congiuntivo alla terza persona (<em>vada dritto</em>, <em>giri a sinistra</em>, <em>prenda la prima a destra</em>). In tedesco la forma di cortesia non passa dal congiuntivo: si usa l'infinito e il pronome <em>Sie</em> dopo il verbo. <em>Scusi</em> si dice <em>Entschuldigung</em> (o <em>Entschuldigen Sie</em>), <em>dritto</em> è <em>geradeaus</em>, <em>a destra</em> è <em>rechts</em> e <em>a sinistra</em> è <em>links</em>, senza preposizione. Fai attenzione anche al genere: <em>il municipio</em> è maschile, ma <em>das Rathaus</em> è neutro."
      },
      {
        trap: "L'imperativo con <em>Sie</em> ha la stessa forma di una domanda sì/no: <em>Gehen Sie geradeaus!</em> oppure <em>Gehen Sie geradeaus?</em> Li distinguono il contesto, l'intonazione e la punteggiatura. Non è, invece, <em>Sie gehen geradeaus</em> (soggetto prima del verbo), che è una frase dichiarativa. E dopo <em>neben</em>, <em>hinter</em> e <em>vor</em> con <em>wo?</em> non va l'accusativo: «neben den Bahnhof» è sbagliato, si dice <em>neben dem Bahnhof</em>."
      },
      {
        tip: "Per ricordare le tre frasi che servono per strada: <em>Entschuldigung, wo ist ...?</em>, <em>Gehen Sie geradeaus</em>, <em>Biegen Sie links / rechts ab</em>. Con queste tre ti orienti in qualsiasi città di lingua tedesca."
      }
    ],
    grammar: {
      title: "Imperativo di cortesia e wo? con il dativo",
      note: "<b>Imperativo con Sie:</b> infinito + <b>Sie</b>, verbo in prima posizione. <b>Wo?</b> con in, an, vor, hinter, neben: dativo.",
      table: {
        head: ["infinito", "imperativo", "significato"],
        rows: [
          ["gehen", "Gehen Sie geradeaus.", "vada dritto"],
          ["abbiegen", "Biegen Sie links ab.", "giri a sinistra"],
          ["nehmen", "Nehmen Sie die erste Straße rechts.", "prenda la prima a destra"],
          ["sein", "Seien Sie bitte pünktlich.", "sia puntuale"]
        ]
      },
      examples: [
        { tr: "Vada dritto.", note: "Gehen Sie: verbo, poi Sie" },
        { tr: "Giri a sinistra.", note: "abbiegen: ab in fondo" },
        { tr: "Prenda la prima strada a destra.", note: "nehmen: la prima strada, die erste Straße" },
        { tr: "Scusi, dov'è la stazione?" },
        { tr: "La stazione è accanto al municipio.", note: "neben dem: dativo neutro" },
        { tr: "La farmacia è dietro l'incrocio.", note: "hinter der: dativo femminile" }
      ]
    },
    vocab: [
      "dritto",
      "a sinistra",
      "a destra",
      "girare, svoltare",
      "scusi, mi scusi",
      "accanto a",
      "dietro",
      "davanti a",
      "la strada",
      "l'incrocio",
      "il municipio",
      "la farmacia"
    ],
    exercises: [
      {
        q: "Come inviti qualcuno a girare a sinistra con la forma di cortesia?",
        opts: ["Sie biegen links ab.", "Biegen Sie links ab.", "Biegen links Sie ab."],
        why: "Verbo in prima posizione, poi <i>Sie</i>, e il prefisso <b>ab</b> in fondo: <b>Biegen Sie links ab.</b> La prima opzione è una frase dichiarativa."
      },
      {
        q: "Come chiedi dov'è la stazione?",
        opts: ["Wo ist der Bahnhof?", "Wo der Bahnhof ist?", "Wo ist den Bahnhof?"],
        why: "In una domanda con <i>wo</i> il verbo sta al secondo posto: <b>Wo ist der Bahnhof?</b> Con <i>sein</i> il nome resta al nominativo."
      },
      {
        q: "Completa: «___ Sie geradeaus.» (Vada)",
        hint: "gehen, imperativo di cortesia, con la maiuscola iniziale",
        why: "L'imperativo di cortesia comincia con l'infinito: <b>Gehen</b> Sie geradeaus."
      },
      {
        q: "Abbina ogni parola al suo significato.",
        pairs: ["dritto", "a sinistra", "a destra", "dietro"]
      },
      {
        q: "Completa le due parole mancanti.",
        tr: "La farmacia è dietro il municipio e la stazione è accanto alla farmacia.",
        why: "<i>Hinter dem Rathaus</i> (dativo neutro) e <i>neben der Apotheke</i> (dativo femminile): con <i>wo?</i> queste preposizioni vogliono il dativo."
      },
      {
        tr: "Vada dritto e giri a sinistra.",
        why: "I due imperativi hanno ciascuno il proprio <i>Sie</i>. Il prefisso <i>ab</i> di <i>abbiegen</i> chiude la frase."
      },
      {
        q: "Una persona ti chiede la strada: rispondi alle sue domande.",
        setting: "In centro aiuti qualcuno a trovare la stazione e la farmacia.",
        lines: [
          { tr: "Scusi, dov'è la stazione?" },
          { tr: "Spiega la strada: dritto, poi a sinistra.", answerTr: "Vada dritto e poi a sinistra." },
          { tr: "Grazie! E dov'è la farmacia?" },
          { tr: "Rispondi che la farmacia è accanto al municipio.", answerTr: "È accanto al municipio." }
        ]
      },
      {
        tr: "Scusi, dov'è la farmacia?",
        why: "Sono corrette sia <i>Entschuldigung</i> sia <i>Entschuldigen Sie</i> (più formale). La domanda ha il verbo al secondo posto: <i>wo ist</i>."
      },
      {
        tr: "Vada dritto e giri a destra.",
        why: "In <i>geradeaus</i> la <b>g</b> è dura e la <b>au</b> è un dittongo /aʊ̯/: si passa dalla <b>a</b> a una <b>u</b> breve nella stessa sillaba. In <i>biegen</i> la <b>ie</b> è una «i» lunga."
      },
      {
        tr: "Scusi, dov'è la farmacia?",
        why: "<i>Entschuldigung</i>: la <b>sch</b> si legge come in «scena» (/ʃ/). In <i>Apotheke</i> la <b>th</b> si legge come una «t» semplice."
      }
    ]
  },
  "lesson:a1-u06-l4": {
    theme: "Il quartiere",
    title: "Es gibt, es gibt keinen",
    objectives: [
      "dire cosa c'è in città con es gibt + accusativo",
      "dire che qualcosa non c'è con es gibt keinen / keine / kein",
      "chiedere Gibt es hier ...?"
    ],
    theory: [
      {
        h: "Es gibt: «c'è» e «ci sono»",
        p: "Per dire che qualcosa esiste si usa <strong>es gibt</strong>. La forma è <strong>sempre la stessa</strong>, al singolare e al plurale: <em>Es gibt einen Park</em>, <em>Es gibt zwei Kinos</em>. Dopo <em>es gibt</em> il nome va all'<strong>accusativo</strong>, quindi solo il maschile cambia: <em>einen Park</em> (m.), <em>eine Bäckerei</em> (f.), <em>ein Café</em> (n.). Per chiedere: <em>Gibt es hier ein Hotel?</em>"
      },
      {
        h: "Dire che qualcosa non c'è",
        p: "Per negare si usa <strong>kein</strong>, che segue lo stesso schema di <em>ein</em>: <em>Es gibt keinen Supermarkt</em> (m.), <em>keine Bank</em> (f.), <em>kein Museum</em> (n.). Negli esempi trattati qui, con <em>es gibt</em> la negazione è <em>kein</em>, non <em>nicht</em> (<em>nicht</em> compare in usi diversi, come <em>Das gibt es nicht</em>)."
      },
      {
        contrast: "In italiano <em>c'è</em> e <em>ci sono</em> cambiano con il numero (<em>c'è un parco</em>, <em>ci sono due cinema</em>). In tedesco <em>es gibt</em> non cambia mai: <em>Es gibt einen Park</em>, <em>Es gibt zwei Kinos</em>. Anche il genere è diverso: <em>il panificio</em> è maschile, <em>die Bäckerei</em> è femminile; <em>il bar</em> è maschile in italiano, <em>das Café</em> è neutro; <em>il cinema</em> è <em>das Kino</em>, neutro; <em>la chiesa</em> è <em>die Kirche</em>."
      },
      {
        trap: "<em>Es gibt</em> di solito introduce qualcosa di nuovo: <em>Es gibt ein Café neben dem Rathaus</em>. Per dire dove si trova una cosa già nota si usa invece <em>sein</em>: <em>Wo ist das Café? Es ist neben dem Rathaus.</em> Non dire «Es gibt ein Bäckerei»: <em>Bäckerei</em> è femminile, quindi <em>eine Bäckerei</em>. E non dire «Es gibt ein Park»: il maschile all'accusativo vuole <em>einen</em>."
      },
      {
        tip: "Per scoprire cosa c'è in un quartiere nuovo, chiedi: <em>Gibt es hier ein Café / einen Supermarkt / eine Bank in der Nähe?</em> Ricorda <em>-en</em> solo per il maschile."
      }
    ],
    grammar: {
      title: "es gibt con l'accusativo",
      note: "<b>Es gibt</b> + accusativo: <b>einen</b> (m.), <b>eine</b> (f.), <b>ein</b> (n.). La negazione è <b>keinen</b>, <b>keine</b>, <b>kein</b>. La forma <i>es gibt</i> non cambia con il plurale.",
      table: {
        head: ["genere", "positivo", "negativo"],
        rows: [
          ["maschile", "Es gibt einen Park.", "Es gibt keinen Supermarkt."],
          ["femminile", "Es gibt eine Bäckerei.", "Es gibt keine Bank."],
          ["neutro", "Es gibt ein Café.", "Es gibt kein Museum."]
        ]
      },
      examples: [
        { tr: "C'è un parco qui vicino.", note: "einen: maschile all'accusativo" },
        { tr: "C'è una panetteria qui.", note: "eine: femminile" },
        { tr: "C'è un bar accanto al municipio.", note: "ein: neutro" },
        { tr: "C'è un albergo qui?", note: "domanda: verbo in prima posizione" },
        { tr: "Qui non c'è nessun supermercato.", note: "keinen: negazione del maschile" },
        { tr: "Qui vicino non c'è nessuna banca.", note: "keine: negazione del femminile" }
      ]
    },
    vocab: [
      "c'è, ci sono",
      "qui",
      "nelle vicinanze, qui vicino",
      "il bar, il caffè",
      "il cinema",
      "la panetteria",
      "il ristorante",
      "la banca",
      "il museo",
      "l'albergo",
      "la biblioteca",
      "la chiesa"
    ],
    exercises: [
      {
        q: "Quale frase è corretta?",
        opts: ["Es gibt ein Park hier.", "Es gibt einen Park hier.", "Es gibt eine Park hier."],
        why: "<i>Der Park</i> è maschile e dopo <i>es gibt</i> serve l'accusativo: <b>einen Park</b>."
      },
      {
        q: "Completa: «Es gibt ___ Supermarkt in der Nähe.»",
        hint: "der Supermarkt, articolo indeterminativo all'accusativo",
        why: "<i>Der Supermarkt</i> è maschile, accusativo: <b>einen</b>."
      },
      {
        q: "Completa: «Es gibt ___ Bank hier.» (nessuna)",
        hint: "die Bank, negazione",
        why: "<i>Die Bank</i> è femminile: la negazione è <b>keine</b>."
      },
      {
        q: "Completa: «___ es hier ein Café?»",
        hint: "domanda: c'è ...?",
        why: "In una domanda sì/no il verbo sta in prima posizione: <b>Gibt</b> es hier ein Café?"
      },
      {
        q: "Abbina ogni parola al suo significato.",
        pairs: ["il bar, il caffè", "la panetteria", "il cinema", "la chiesa"]
      },
      {
        tr: "Qui non c'è nessun supermercato.",
        why: "Sono corrette anche <i>Es gibt keinen Supermarkt hier</i> e, con l'inversione, <i>Hier gibt es keinen Supermarkt</i>. Il verbo <i>gibt</i> resta al secondo posto."
      },
      {
        q: "Completa le due parole mancanti.",
        tr: "C'è una panetteria e un parco qui.",
        why: "<i>Bäckerei</i> è femminile (<b>eine</b>), <i>Park</i> maschile (<b>einen</b>): solo il maschile cambia all'accusativo."
      },
      {
        q: "Traduci: «In città c'è un cinema, ma non c'è un museo.»",
        why: "Dopo <i>es gibt</i>: <i>ein Kino</i> è neutro (<i>ein</i>), la negazione di <i>Museum</i> (neutro) è <i>kein</i>. Sono corrette anche le altre posizioni con la stessa struttura."
      },
      {
        tr: "C'è una panetteria e un parco qui vicino.",
        why: "<i>Bäckerei</i>: la <b>ä</b> si legge come una «e» aperta, la <b>ck</b> come «k». In <i>Nähe</i> la <b>h</b> non si pronuncia e allunga la vocale; la <b>ä</b> è lunga."
      },
      {
        tr: "C'è un albergo qui?",
        why: "<i>Hotel</i> ha l'accento sulla seconda sillaba: /hoˈtɛl/. In <i>gibt</i> la <b>g</b> è dura."
      }
    ]
  },
  "lesson:a1-u06-test": {
    theme: "Verifica",
    title: "Verifica dell'unità 6",
    objectives: ["verificare mezzi di trasporto, dativo, indicazioni, wo? ed es gibt"],
    theory: [
      {
        p: "Dieci domande su tutta l'unità. Si supera con il 70%. Non riguardare le lezioni mentre rispondi: se non ricordi qualcosa, è meglio tornare a ripassare."
      }
    ],
    exercises: [
      {
        tr: "Presente di fahren: ich, du, er/sie/es, wir.",
        why: "<i>Fahre</i>, <i>fährst</i>, <i>fährt</i>, <i>fahren</i>: la <b>a</b> diventa <b>ä</b> alla 2ª e 3ª persona singolare."
      },
      {
        q: "Completa: «Ich fahre mit ___ Bus.»",
        hint: "der Bus, articolo determinativo al dativo",
        why: "<i>Der Bus</i> è maschile: dopo <i>mit</i> si dice <b>dem</b>."
      },
      {
        q: "Completa: «Wir gehen ___ Schule.»",
        hint: "zu + der, nella forma contratta",
        why: "<i>Zu der</i> si fonde in <b>zur</b>."
      },
      {
        q: "Completa: «Ich komme ___ Italien.»",
        hint: "provenienza da un paese",
        why: "Per la provenienza da un paese si usa <b>aus</b>."
      },
      {
        q: "Completa: «Die Apotheke ist ___ dem Rathaus.» (accanto)",
        hint: "accanto a",
        why: "<b>Neben</b> + dativo: <i>neben dem Rathaus</i>."
      },
      {
        q: "Completa: «___ Sie die erste Straße links.» (Prenda)",
        hint: "nehmen, imperativo di cortesia, con la maiuscola iniziale",
        why: "L'imperativo di cortesia comincia con l'infinito: <b>Nehmen</b> Sie die erste Straße links."
      },
      {
        q: "Scegli l'articolo giusto per ogni nome.",
        why: "<i>Rathaus</i> è neutro, <i>Kreuzung</i> e <i>Apotheke</i> sono femminili, <i>Bahnhof</i> è maschile.",
        items: ["municipio", "incrocio", "stazione", "farmacia"]
      },
      {
        q: "Come dici «Non c'è un supermercato»?",
        opts: ["Es gibt kein Supermarkt.", "Es gibt keinen Supermarkt.", "Es gibt nicht Supermarkt."],
        why: "<i>Der Supermarkt</i> è maschile all'accusativo: <b>keinen</b>."
      },
      {
        tr: "Scusi, dov'è la stazione?",
        why: "<i>Entschuldigung</i>: la <b>sch</b> si legge come in «scena» (/ʃ/); in <i>Bahnhof</i> la <b>h</b> dopo la <b>a</b> allunga la vocale."
      },
      {
        tr: "Vada dritto e poi a sinistra.",
        why: "<i>Geradeaus</i>: la <b>g</b> è dura e la <b>au</b> è un dittongo /aʊ̯/: si passa dalla <b>a</b> a una <b>u</b> breve nella stessa sillaba. In <i>links</i> la <b>i</b> è breve."
      }
    ]
  },
  "unit:a1-u07": {
    title: "Al ristorante",
    grammarNote: "accusativo con haben e brauchen · möchte e hätte gern · einer, eins, welche · il conto"
  },
  "lesson:a1-u07-l1": {
    theme: "Prenotare un tavolo",
    title: "Un tavolo per due: Ein Tisch für zwei",
    objectives: [
      "chiedere un tavolo con Haben Sie einen Tisch für zwei?",
      "usare l'accusativo con haben, brauchen e reservieren: einen Tisch, eine Speisekarte",
      "dire dove sedersi (drinnen, draußen) e se un posto è libero (frei)"
    ],
    theory: [
      {
        h: "Haben, brauchen, reservieren: l'accusativo",
        p: "Dopo <strong>haben</strong>, <strong>brauchen</strong>, <strong>suchen</strong> e <strong>reservieren</strong> la cosa che si chiede è il complemento diretto, quindi sta all'<strong>accusativo</strong> (lo hai già incontrato nell'unità 3). Cambia solo il maschile: <strong>der → den</strong>, <strong>ein → einen</strong>. Femminile, neutro e plurale restano uguali al nominativo: <em>Wir brauchen einen Tisch</em> (<em>der Tisch</em>), <em>Wir brauchen eine Speisekarte</em> (<em>die Speisekarte</em>), <em>Wir brauchen ein Messer</em> (<em>das Messer</em>). Il soggetto è sempre al nominativo: <em>Der Tisch ist frei.</em>"
      },
      {
        h: "Il verbo resta al secondo posto, e nelle domande al primo",
        p: "Come sempre il verbo coniugato occupa il <strong>secondo posto</strong> nella frase dichiarativa: <em>Heute Abend reserviere ich einen Tisch.</em> (se apri la frase con <em>Heute Abend</em>, il soggetto passa dopo il verbo). Nelle domande sì/no il verbo apre la frase: <em>Haben Sie einen Tisch für zwei?</em> Con il personale di sala si usa <strong>Sie</strong>, una sola forma che copre sia il «Lei» sia il «voi» di cortesia."
      },
      {
        contrast: "In italiano <em>un tavolo</em> e <em>il tavolo</em> non cambiano mai; in tedesco il maschile cambia quando è complemento diretto (<em>Der Tisch ist frei</em>, ma <em>Wir brauchen einen Tisch</em>). Fai attenzione ai generi che non coincidono: <em>il tavolo</em> e <em>der Tisch</em> sono entrambi maschili, ma <em>la sedia</em> è femminile e <em>der Stuhl</em> è maschile; <em>il menu</em> è maschile, mentre <em>die Speisekarte</em> è femminile. In più <em>das Menü</em> in tedesco indica di solito il menu a prezzo fisso (più portate insieme), non la lista dei piatti, che è <em>die Speisekarte</em>. Infine <em>il cameriere</em> è <em>der Kellner</em> e <em>la cameriera</em> è <em>die Kellnerin</em>, con il suffisso <em>-in</em>."
      },
      {
        trap: "Dopo <em>haben</em> e <em>brauchen</em> non lasciare il maschile al nominativo: «Haben Sie ein Tisch?» è sbagliato, si dice <em>Haben Sie einen Tisch?</em>. E non trasferire il cambio ai nomi che non sono maschili: con <em>die Speisekarte</em> l'articolo non cambia, quindi <em>eine Speisekarte</em> e non «einen Speisekarte». Ricorda anche che <em>für zwei</em> basta per dire «per due», senza altro nome."
      },
      {
        tip: "Impara la frase intera: <em>Haben Sie einen Tisch für zwei?</em>. Cambiando il numero (<em>für drei</em>, <em>für vier</em>) e il luogo (<em>drinnen</em>, <em>draußen</em>) hai già quasi tutto ciò che serve per essere accolto al ristorante."
      }
    ],
    grammar: {
      title: "L'accusativo con haben, brauchen e reservieren",
      note: "Solo il maschile cambia all'accusativo: <b>der → den</b>, <b>ein → einen</b>. Femminile, neutro e plurale restano uguali. Il verbo è al secondo posto; nelle domande sì/no è al primo.",
      table: {
        head: ["genere", "nominativo", "accusativo"],
        rows: [
          ["maschile", "der Tisch / ein Tisch", "den Tisch / einen Tisch"],
          ["femminile", "die Speisekarte / eine Speisekarte", "die Speisekarte / eine Speisekarte"],
          ["neutro", "das Restaurant / ein Restaurant", "das Restaurant / ein Restaurant"],
          ["plurale", "die Tische", "die Tische"]
        ]
      },
      examples: [
        { tr: "Avete un tavolo per due?", note: "Haben Sie: domanda, verbo in prima posizione; einen: accusativo maschile" },
        { tr: "Ci serve un tavolo per quattro persone.", note: "brauchen + accusativo" },
        { tr: "Ci serve un menu.", note: "femminile: eine non cambia" },
        { tr: "Stasera prenoto un tavolo.", note: "Heute Abend apre la frase: il verbo resta secondo" },
        { tr: "Il tavolo è libero.", note: "il soggetto è al nominativo: der Tisch ist frei" },
        { tr: "Avete un tavolo libero fuori?", note: "draußen: all'aperto; frei in fondo" }
      ]
    },
    vocab: [
      "il tavolo",
      "la sedia",
      "il posto",
      "il ristorante",
      "la persona",
      "la cameriera",
      "la prenotazione",
      "prenotare",
      "avere bisogno di, servire",
      "fuori, all'aperto",
      "dentro, all'interno",
      "libero"
    ],
    dialogue: [
      "Buonasera. Avete un tavolo per due?",
      "Sì, volentieri. Dentro o fuori?",
      "Fuori, per favore.",
      "Ecco un tavolo. Ecco il menu.",
      "Grazie mille!"
    ],
    exercises: [
      {
        q: "Vuoi chiedere se c'è un tavolo libero. Quale frase è corretta?",
        opts: ["Haben Sie ein Tisch frei?", "Haben Sie einen Tisch frei?", "Haben Sie eine Tisch frei?"],
        why: "<i>Der Tisch</i> è maschile e dopo <i>haben</i> è complemento diretto: <b>einen Tisch</b>."
      },
      {
        q: "Quale frase è corretta?",
        opts: ["Wir brauchen eine Speisekarte.", "Wir brauchen einen Speisekarte.", "Wir brauchen ein Speisekarte."],
        why: "<i>Die Speisekarte</i> è femminile: all'accusativo l'articolo non cambia, quindi <b>eine</b>."
      },
      {
        q: "Completa con l'articolo indeterminativo: «Ich brauche ___ Tisch für zwei.»",
        hint: "ein-, maschile, accusativo",
        why: "<i>Tisch</i> è maschile e <i>brauchen</i> vuole l'accusativo: <b>einen</b>."
      },
      {
        q: "Abbina ogni parola al suo significato.",
        pairs: ["il cameriere", "la sedia", "fuori, all'aperto", "prenotare"]
      },
      {
        tr: "Ci serve un tavolo per quattro.",
        why: "Sono corrette entrambe le posizioni: <i>Wir brauchen einen Tisch für vier</i> e, con l'oggetto davanti, <i>Einen Tisch für vier brauchen wir</i>. Il verbo resta al secondo posto."
      },
      {
        q: "Sei al ristorante e il cameriere ti accoglie.",
        setting: "All'ingresso del locale.",
        lines: [
          { tr: "Buonasera! Di che cosa ha bisogno?" },
          { tr: "Chiedi un tavolo per due.", answerTr: "Ci serve un tavolo per due." },
          { tr: "Volentieri. Ecco il tavolo." },
          { tr: "Ringrazia e chiedi il menu.", answerTr: "Grazie. Il menu, per favore." }
        ]
      },
      {
        tr: "Ha un tavolo per due?",
        why: "Il «Ha» di cortesia diventa <i>Haben Sie</i>: <i>Sie</i> è una forma sola per il «Lei» e per il «voi» di cortesia, e il verbo è alla terza persona plurale. <i>Tisch</i> è maschile, quindi <b>einen Tisch</b>."
      },
      {
        tr: "Avete un tavolo libero dentro per tre persone?",
        why: "È una domanda sì/no, quindi <i>haben</i> apre la frase. <i>Personen</i> si pronuncia con la <b>s</b> sonora (/z/); in <i>drinnen</i> la <b>i</b> è breve e <b>nn</b> si pronuncia come una sola /n/."
      },
      {
        tr: "Avete un tavolo libero fuori?",
        why: "<i>Draußen</i>: la <b>au</b> è un dittongo /aʊ̯/ (dalla <b>a</b> a una <b>u</b> breve nella stessa sillaba) e la <b>ß</b> è una «s» sorda. In <i>frei</i> la <b>ei</b> si legge /aɪ̯/, come «ai» in «hai»."
      }
    ]
  },
  "lesson:a1-u07-l2": {
    theme: "Ordinare",
    title: "Ordinare: Ich hätte gern das Schnitzel",
    objectives: [
      "ordinare con le formule ich möchte e ich hätte gern",
      "coniugare möchte: ich möchte, du möchtest, wir möchten",
      "mettere il piatto ordinato all'accusativo: den Fisch, die Suppe, das Schnitzel"
    ],
    theory: [
      {
        h: "Due formule per ordinare",
        p: "Al ristorante si ordina con <strong>ich möchte</strong> + accusativo (<em>Ich möchte das Schnitzel</em>) oppure con <strong>ich hätte gern</strong> + accusativo (<em>Ich hätte gern das Schnitzel</em>). Sono entrambe formule di cortesia. <em>möchte</em> è in origine una forma del Konjunktiv II di <em>mögen</em>, e <em>hätte</em> è il Konjunktiv II di <em>haben</em>: a questo livello le impari come formule fisse, senza costruire altre forme di quel modo. <em>gern</em> vuol dire «volentieri», quindi <em>ich hätte gern</em> si traduce con «vorrei» (alla lettera «avrei volentieri», glossa che in italiano non si usa per ordinare)."
      },
      {
        h: "möchte è un modale, con la -e",
        p: "Come gli altri modali, <em>möchte</em> manda l'infinito in fondo alla frase (<em>Ich möchte das Schnitzel essen</em>), e spesso l'infinito si omette quando il senso è chiaro (<em>Ich möchte das Schnitzel</em>). A differenza di <em>kann</em>, <em>will</em> e <em>muss</em>, ha la <strong>-e</strong> alla 1ª e alla 3ª persona singolare: <em>ich möchte</em>, <em>er möchte</em>. Le altre persone: <em>du möchtest</em>, <em>wir möchten</em>, <em>ihr möchtet</em>, <em>sie/Sie möchten</em>. Il piatto che ordini è un complemento diretto, quindi all'accusativo: <em>den Fisch</em>, <em>die Suppe</em>, <em>das Schnitzel</em>."
      },
      {
        contrast: "L'italiano <em>vorrei</em> è il condizionale di <em>volere</em>. Il tedesco ottiene lo stesso effetto di cortesia con <em>möchte</em>, che però deriva da <em>mögen</em>, non da <em>wollen</em>. Per <em>ich möchte</em> puoi pensare a «vorrei»; <em>ich hätte gern</em> è una seconda formula con lo stesso scopo, letteralmente «avrei volentieri». Fai attenzione ai generi: <em>la cotoletta</em> è femminile, ma <em>das Schnitzel</em> è neutro; <em>il pollo</em> è maschile, ma <em>das Hähnchen</em> è neutro; <em>il gelato</em> è maschile, ma <em>das Eis</em> è neutro."
      },
      {
        trap: "<em>Ich will das Schnitzel</em> è una frase corretta, ma al ristorante suona brusca, come un «voglio la cotoletta» detto al cameriere: per ordinare scegli <em>ich möchte</em> o <em>ich hätte gern</em>. E non perdere la <strong>-e</strong>: «ich möchten» è sbagliato, si dice <em>ich möchte</em>, e alla 3ª persona <em>er möchte</em> (non «er möchtet»)."
      },
      {
        tip: "Per ordinare ti bastano due schemi: <em>Ich möchte + accusativo</em> e <em>Ich hätte gern + accusativo</em>. Per più persone: <em>Wir möchten ...</em> e <em>Wir hätten gern ...</em>."
      }
    ],
    grammar: {
      title: "möchte e hätte gern",
      note: "<b>Ich möchte</b> + accusativo e <b>ich hätte gern</b> + accusativo sono formule di cortesia per ordinare. <b>möchte</b> ha la -e alla 1ª e alla 3ª persona singolare.",
      table: {
        head: ["persona", "möchten", "hätte gern"],
        rows: [
          ["ich", "möchte", "hätte gern"],
          ["du", "möchtest", "hättest gern"],
          ["er/sie/es", "möchte", "hätte gern"],
          ["wir", "möchten", "hätten gern"],
          ["ihr", "möchtet", "hättet gern"],
          ["sie/Sie", "möchten", "hätten gern"]
        ]
      },
      examples: [
        { tr: "Vorrei la cotoletta.", note: "möchte: formula di cortesia; das Schnitzel, neutro" },
        { tr: "Vorrei il formaggio.", note: "hätte gern + accusativo: den Käse" },
        { tr: "Vorrei il pesce.", note: "den Fisch: maschile all'accusativo" },
        { tr: "Che cosa desidera bere?", note: "Was in prima posizione, möchten in seconda, trinken in fondo" },
        { tr: "Desidera un antipasto?", note: "domanda sì/no: möchten in prima posizione" },
        { tr: "Vorremmo due zuppe.", note: "wir hätten gern: plurale" }
      ]
    },
    vocab: [
      "vorrei (formula di cortesia)",
      "vorrei (nella versione con hätte gern)",
      "la cotoletta, la fettina di carne (paniertes Schnitzel: impanata)",
      "la salsiccia, il wurstel",
      "la patata",
      "il riso",
      "il pollo",
      "il formaggio",
      "l'antipasto",
      "il piatto principale",
      "il dolce, il dessert",
      "il gelato"
    ],
    exercises: [
      {
        q: "Ordini il pesce in modo gentile. Quale frase è corretta?",
        opts: ["Ich möchte den Fisch.", "Ich möchten den Fisch.", "Ich möchte der Fisch."],
        why: "<b>Ich möchte</b> ha la -e, e <i>der Fisch</i> all'accusativo è <b>den Fisch</b>."
      },
      {
        q: "Quale frase è corretta?",
        opts: ["Er möchtet eine Suppe.", "Er möchte eine Suppe.", "Er möchten eine Suppe."],
        why: "Alla 3ª persona singolare <i>möchte</i> ha la <b>-e</b> e nessun'altra desinenza: <b>er möchte</b>."
      },
      {
        q: "Completa: «Ich möchte ___ Salat.» (l'insalata)",
        hint: "der Salat, articolo determinativo all'accusativo",
        why: "<i>Salat</i> è maschile (<i>l'insalata</i> è invece femminile in italiano): all'accusativo <b>den</b>."
      },
      {
        q: "Abbina ogni piatto al suo significato.",
        pairs: ["la cotoletta o fettina di carne", "la zuppa", "il pesce", "il dolce"]
      },
      {
        q: "Completa con il verbo möchten.",
        tr: "Io vorrei il pesce e tu vorresti la zuppa.",
        why: "<i>Ich möchte</i> (1ª persona, con la -e) e <i>du möchtest</i> (2ª persona, con -st)."
      },
      {
        tr: "Vorrei la cotoletta.",
        why: "Sono corrette tre posizioni: <i>Ich hätte gern das Schnitzel</i>, <i>Ich hätte das Schnitzel gern</i> e, con l'oggetto davanti, <i>Das Schnitzel hätte ich gern</i>. Il verbo resta al secondo posto."
      },
      {
        q: "Ordini al ristorante.",
        setting: "Il cameriere prende l'ordinazione.",
        lines: [
          { tr: "Che cosa desidera?" },
          { tr: "Ordina il pesce con la formula di cortesia.", answerTr: "Vorrei il pesce." },
          { tr: "E desidera anche una zuppa?" },
          { tr: "Rispondi di sì e ordina la zuppa.", answerTr: "Sì, volentieri. Vorrei una zuppa." }
        ]
      },
      {
        tr: "Vorrei la zuppa.",
        why: "Funzionano sia <i>ich möchte</i> sia <i>ich hätte gern</i>; <i>gern</i> può stare anche con <i>möchte</i> o dopo l'oggetto, e l'oggetto può aprire la frase (<i>Die Suppe möchte ich</i>). <i>Suppe</i> è femminile: all'accusativo resta <i>die</i>."
      },
      {
        tr: "Vorrei la zuppa e la cotoletta.",
        why: "<i>möchte</i>: la <b>ö</b> è breve e la <b>ch</b> dopo <b>ö</b> è il suono di <i>ich</i>, una fricativa palatale leggera: non è una «k» e non è «sc». In <i>Schnitzel</i> la <b>sch</b> è /ʃ/ e la <b>tz</b> è /ts/."
      },
      {
        tr: "Vorrei il pesce e l'insalata.",
        why: "<i>hätte</i>: la <b>ä</b> è breve, simile a una «e» aperta. In <i>gern</i> la <b>g</b> è dura e la <b>r</b> può essere uvulare o apicale: entrambe sono standard."
      }
    ]
  },
  "lesson:a1-u07-l3": {
    theme: "Uno, alcuni, nessuno",
    title: "Uno, alcuni, nessuno: Ich nehme zwei. Haben Sie welche?",
    objectives: [
      "dire «uno» senza ripetere il nome con einer, eine, eins",
      "dire «ne ho» e «ne prendo due» senza la particella ne",
      "usare welche per alcuni e keine per nessuno"
    ],
    theory: [
      {
        h: "Il nome già detto non si ripete: einer, eine, eins",
        p: "Per non ripetere un nome già detto, il tedesco usa le forme di <em>ein</em> senza il nome. Si accordano con il genere del nome sottinteso: maschile <strong>einer</strong> (accusativo <strong>einen</strong>), femminile <strong>eine</strong>, neutro <strong>eins</strong>. <em>Möchten Sie einen Apfel? Ja, ich nehme einen.</em> (<em>der Apfel</em>) <em>Möchten Sie eine Tomate? Ja, ich nehme eine.</em> (<em>die Tomate</em>) <em>Möchten Sie ein Brötchen? Ja, ich nehme eins.</em> (<em>das Brötchen</em>). Con un numero non serve altro: <em>Ich nehme zwei.</em>"
      },
      {
        h: "welche per «ne ho», keine per «non ne ho»",
        p: "Quando non c'è un numero e non si dice quanti, si usa <strong>welche</strong> al posto del nome: con un plurale (<em>Haben Sie Brötchen? Ja, wir haben welche.</em>) e con un femminile non numerabile (<em>Haben Sie Milch? Ja, wir haben welche.</em>). Con un neutro non numerabile la forma è <strong>welches</strong> (<em>Haben Sie Wasser? Ja, wir haben welches.</em>), con un maschile non numerabile all'accusativo <strong>welchen</strong> (<em>Haben Sie Saft? Ja, wir haben welchen.</em>). Per dire che non ce n'è si usa <strong>keiner / keine / keins</strong> (accusativo maschile <em>keinen</em>): <em>Wir haben leider keine.</em>"
      },
      {
        contrast: "In italiano tutto questo lo fa la particella <em>ne</em> (<em>ne prendo due</em>, <em>ne ho</em>, <em>non ne abbiamo</em>), che il tedesco non ha. Al suo posto troverai il numero da solo (<em>Ich nehme zwei</em>), <em>einer / eine / eins</em> per «uno», <em>welche</em> per «alcuni, un po'» e <em>keine</em> per «nessuno». Anche <em>uno / una</em> in italiano si accordano con il nome, ma in tedesco conta il genere tedesco: <em>il pomodoro</em> è maschile, <em>die Tomate</em> è femminile, quindi «ne prendo uno» si dice <em>Ich nehme eine</em>. Lo stesso vale per <em>la mela</em> (femminile in italiano, ma <em>der Apfel</em> è maschile: <em>einen</em>) e per <em>l'uovo</em> (<em>das Ei</em>, neutro: <em>eins</em>)."
      },
      {
        trap: "<em>welche</em> non è sempre la parola interrogativa «quale / quali» di <em>Welche Suppe möchten Sie?</em>: in <em>Haben Sie welche?</em> significa «ne avete?». Li distingue il contesto: l'uso interrogativo chiede di scegliere o identificare (<em>Welche möchten Sie?</em> funziona anche senza nome), quello indefinito riprende una quantità non precisata. E non usare <em>ein</em> da solo: «Ich nehme ein» è sbagliato, perché senza il nome servono le forme del pronome, <em>einen</em>, <em>eine</em> o <em>eins</em>."
      },
      {
        tip: "Per scegliere la forma ripensa al nome tedesco, non a quello italiano: <em>der Apfel → einen</em>, <em>die Tomate → eine</em>, <em>das Ei → eins</em>. Se hai un numero, di' il numero e basta."
      }
    ],
    grammar: {
      title: "einer, eins, welche: il nome non si ripete",
      note: "Senza il nome: maschile <b>einer / einen</b>, femminile <b>eine</b>, neutro <b>eins</b>. Con un numero basta il numero (<b>Ich nehme zwei</b>). Per «ne ho» senza numero: <b>welche</b> (plurale, femminile non numerabile), <b>welches</b> (neutro non numerabile), <b>welchen</b> (maschile non numerabile, accusativo).",
      table: {
        head: ["genere", "con il nome", "senza il nome"],
        rows: [
          ["maschile", "Ich nehme einen Apfel.", "Ich nehme einen."],
          ["femminile", "Ich nehme eine Tomate.", "Ich nehme eine."],
          ["neutro", "Ich nehme ein Brötchen.", "Ich nehme eins."],
          ["plurale", "Haben Sie Brötchen?", "Haben Sie welche?"]
        ]
      },
      examples: [
        { tr: "Ne prendo due.", note: "il numero da solo: in tedesco non c'è «ne»" },
        { tr: "Vuole un panino? Sì, ne prendo uno.", note: "das Brötchen è neutro: eins" },
        { tr: "Ha una mela? Sì, ne ho una.", note: "der Apfel è maschile: einen" },
        { tr: "Vuole un pomodoro? Sì, ne prendo uno.", note: "die Tomate è femminile: eine" },
        { tr: "Avete dei panini? Sì, ne abbiamo.", note: "plurale senza numero: welche" },
        { tr: "Avete dell'acqua? Sì, ne abbiamo.", note: "das Wasser è neutro non numerabile: welches" }
      ]
    },
    vocab: [
      "alcuni, ne (senza numero)",
      "uno / una (senza il nome)",
      "nessuno / nessuna (senza il nome)",
      "l'uovo",
      "il pomodoro",
      "il cetriolo",
      "il bicchiere",
      "la bottiglia",
      "la porzione",
      "la forchetta",
      "il cucchiaio",
      "il coltello"
    ],
    exercises: [
      {
        q: "«Haben Sie Brötchen?» Il cameriere ne ha. Come risponde?",
        opts: ["Ja, wir haben welche.", "Ja, wir haben welches.", "Ja, wir haben einen."],
        why: "<i>Brötchen</i> qui è plurale e senza numero: il pronome è <b>welche</b>. <i>Welches</i> serve per un neutro singolare non numerabile, <i>einen</i> per un maschile singolare."
      },
      {
        q: "«Möchten Sie ein Brötchen?» Rispondi: «Sì, ne prendo uno.»",
        opts: ["Ja, ich nehme ein.", "Ja, ich nehme eins.", "Ja, ich nehme einen."],
        why: "<i>Das Brötchen</i> è neutro: senza il nome si dice <b>eins</b>. «Ich nehme ein» è sbagliato, e <i>einen</i> è maschile."
      },
      {
        q: "Completa: «Haben Sie Wasser? Ja, wir haben ___.» (Avete dell'acqua? Sì, ne abbiamo.)",
        hint: "das Wasser, nome neutro non numerabile, senza numero",
        why: "<i>Das Wasser</i> è neutro e non numerabile: il pronome è <b>welches</b>."
      },
      {
        q: "Completa: «Möchten Sie eine Tomate? Ja, ich nehme ___.» (Vuole un pomodoro? Sì, ne prendo uno.)",
        hint: "die Tomate è femminile",
        why: "<i>Il pomodoro</i> è maschile in italiano, ma <i>die Tomate</i> è femminile: «uno» si dice <b>eine</b>."
      },
      {
        q: "Abbina ogni parola al suo significato.",
        pairs: ["il panino", "il latte", "l'uovo", "la bottiglia"]
      },
      {
        q: "Completa le due parole mancanti: «Avete una mela? Sì, ne abbiamo una.»",
        tr: "Avete una mela? Sì, ne abbiamo una.",
        why: "<i>Der Apfel</i> è maschile: dopo <i>haben</i> è <b>einen Apfel</b>, e il pronome senza nome è di nuovo <b>einen</b>. Attenzione: <i>la mela</i> è femminile in italiano, <i>der Apfel</i> è maschile."
      },
      {
        tr: "Purtroppo non ne abbiamo.",
        why: "Sono corrette entrambe: <i>Wir haben leider keine</i> e, con <i>leider</i> davanti, <i>Leider haben wir keine</i>. Il verbo resta al secondo posto."
      },
      {
        tr: "Hai dei panini? Sì, ne ho.",
        why: "Con <i>du</i> il verbo è <i>hast</i>. <i>Brötchen</i> è plurale e senza numero, quindi la risposta usa <b>welche</b>: non esiste un equivalente di «ne»."
      },
      {
        tr: "Abbiamo panini e mele, ma non pomodori.",
        why: "In <i>Äpfel</i> la <b>ä</b> è una «e» aperta e la <b>pf</b> si pronuncia con le due consonanti unite: la <b>p</b> è seguita subito da una <b>f</b>. In <i>keine</i> la <b>ei</b> è /aɪ̯/."
      },
      {
        tr: "Prendo due panini e una mela.",
        why: "<i>Apfel</i> è maschile, quindi <b>einen Apfel</b>. In <i>zwei</i> la <b>z</b> è /ts/ e la <b>ei</b> è /aɪ̯/."
      }
    ]
  },
  "lesson:a1-u07-l4": {
    theme: "Il conto",
    title: "Il conto: Zahlen, bitte!",
    objectives: [
      "chiedere il conto con Zahlen, bitte! e Können wir bitte zahlen?",
      "rispondere a Zusammen oder getrennt?",
      "dire la cifra e lasciare la mancia: Das macht ..., stimmt so"
    ],
    theory: [
      {
        h: "Chiedere il conto",
        p: "In un ristorante tedesco si paga di solito al tavolo, quando il cameriere passa, e non alla cassa. Per chiamare il conto si dice <strong>Zahlen, bitte!</strong> (forma breve), <strong>Die Rechnung, bitte.</strong> oppure, più per esteso, <strong>Wir möchten zahlen.</strong> o <strong>Können wir bitte zahlen?</strong> Con il cameriere si usa <em>Sie</em>; in locali giovani e informali può capitare di essere trattati con <em>du</em>, ma se non sei sicuro resta su <em>Sie</em>."
      },
      {
        h: "Zusammen oder getrennt? Il totale e la mancia",
        p: "Il cameriere chiede <em>Zusammen oder getrennt?</em>: <strong>zusammen</strong> è un conto solo, <strong>getrennt</strong> è un conto per ciascuno. Si risponde <em>Zusammen, bitte.</em> o <em>Getrennt, bitte.</em> Poi arriva il totale: <em>Das macht zweiunddreißig Euro.</em> Per lasciare la mancia (<em>das Trinkgeld</em>) si dice la cifra che si vuole pagare, già arrotondata: <em>Vierunddreißig Euro, stimmt so.</em> (<em>stimmt so</em> = il resto è per lei). In Germania e in Austria si paga in <em>Euro</em>, in Svizzera in <em>Franken</em> (franchi svizzeri). Alcuni locali accettano solo contanti: puoi chiedere <em>Kann ich mit Karte zahlen?</em>"
      },
      {
        contrast: "<em>Getrennt</em> non è «alla romana». Alla romana il totale si divide in parti uguali; con <em>getrennt</em> ognuno paga quello che ha ordinato e il cameriere calcola un conto a testa. Il servizio in genere è già compreso nel prezzo, ma lasciare la mancia è consueto: di solito si arrotonda per eccesso, e in Svizzera la mancia è più contenuta. Fai attenzione anche al genere: <em>il conto</em> è maschile, ma <em>die Rechnung</em> è femminile."
      },
      {
        trap: "<em>Zahlen, bitte!</em> non contiene <em>Sie</em>: è la forma abbreviata di «Wir möchten zahlen, bitte». Se invece trovi il verbo seguito da <em>Sie</em>, la stessa forma può essere una domanda o un invito: <em>Zahlen Sie bar oder mit Karte?</em> (domanda del cameriere) e <em>Zahlen Sie bitte an der Kasse.</em> (invito, imperativo di cortesia). Li distinguono il contesto, l'intonazione e la punteggiatura. E con <em>zahlen</em> non cercare un «Lei»: in tedesco si usa <em>Sie</em>, con il verbo al plurale."
      },
      {
        tip: "Tieni a mente la sequenza: <em>Zahlen, bitte!</em>, poi <em>Zusammen, bitte.</em> o <em>Getrennt, bitte.</em>, infine la cifra con <em>stimmt so</em>."
      }
    ],
    grammar: {
      title: "Chiedere il conto e pagare",
      note: "Con il cameriere si usa <b>Sie</b>. Frasi utili: <b>Zahlen, bitte!</b>, <b>Die Rechnung, bitte.</b>, <b>Können wir bitte zahlen?</b>. Risposte: <b>Zusammen, bitte.</b> / <b>Getrennt, bitte.</b>. <b>stimmt so</b>: il resto è per lei.",
      table: {
        head: ["il cameriere dice", "tu rispondi"],
        rows: [
          ["Zusammen oder getrennt?", "Zusammen, bitte. / Getrennt, bitte."],
          ["Bar oder mit Karte?", "Bar, bitte. / Mit Karte, bitte."],
          ["Das macht zwölf Euro.", "Dreizehn Euro, stimmt so."]
        ]
      },
      examples: [
        { tr: "Il conto, per favore!", note: "Zahlen, bitte!: forma breve, senza Sie" },
        { tr: "Il conto, per favore.", note: "die Rechnung: femminile" },
        { tr: "Possiamo pagare, per favore?", note: "können: modale in prima posizione, zahlen in fondo" },
        { tr: "Insieme o separati?", note: "zusammen: un conto solo; getrennt: un conto a testa" },
        { tr: "Fa dodici euro.", note: "das macht + importo" },
        { tr: "Tredici euro, tenga il resto.", note: "stimmt so: il resto è per lei" }
      ]
    },
    vocab: [
      "pagare",
      "il conto",
      "insieme",
      "separatamente (un conto a testa)",
      "in contanti",
      "la carta (di credito)",
      "la mancia",
      "l'euro",
      "il franco svizzero",
      "l'ospite, il cliente",
      "tenga il resto, va bene così",
      "l'importo, la somma"
    ],
    exercises: [
      {
        q: "Quale richiesta del conto è la più cortese?",
        opts: ["Ich will die Rechnung.", "Die Rechnung, bitte.", "Gib mir die Rechnung."],
        why: "<b>Die Rechnung, bitte.</b> è breve e cortese. <i>Ich will ...</i> è corretto ma suona brusco, e <i>Gib mir ...</i> è un imperativo con <i>du</i>, fuori luogo con un cameriere."
      },
      {
        q: "Il cameriere chiede «Zusammen oder getrennt?». Volete un conto a testa. Che cosa rispondi?",
        opts: ["Zusammen, bitte.", "Getrennt, bitte.", "Bar, bitte."],
        why: "<b>Getrennt</b> vuol dire un conto per ciascuno. <i>Zusammen</i> è un conto solo, e <i>bar</i> risponde a un'altra domanda (contanti)."
      },
      {
        q: "Completa con il verbo machen: «Das ___ zwölf Euro.»",
        hint: "machen, 3ª persona singolare",
        why: "<i>Das macht ...</i> è la formula per dire il totale: <b>macht</b>."
      },
      {
        q: "Abbina ogni parola al suo significato.",
        pairs: ["il conto", "la mancia", "in contanti", "separatamente (un conto a testa)"]
      },
      {
        q: "Completa con la forma giusta del verbo zahlen.",
        tr: "Io pago in contanti e lui paga con la carta.",
        why: "<i>Ich zahle</i> (1ª persona) e <i>er zahlt</i> (3ª persona singolare)."
      },
      {
        tr: "Possiamo pagare, per favore?",
        why: "<i>Können wir bitte zahlen?</i>: il modale è in prima posizione (domanda sì/no) e l'infinito <i>zahlen</i> è in fondo. Si può dire anche <i>Können wir zahlen, bitte?</i>."
      },
      {
        q: "Hai finito di mangiare.",
        setting: "Il cameriere si avvicina al tavolo.",
        lines: [
          { tr: "Desidera ancora qualcosa?" },
          { tr: "Rifiuta e chiedi il conto.", answerTr: "No, grazie. Vorremmo pagare, per favore." },
          { tr: "Volentieri. Insieme o separati?" },
          { tr: "Rispondi: insieme.", answerTr: "Insieme, per favore." },
          { tr: "Fa trentadue euro." },
          { tr: "Dai trentaquattro euro e lascia il resto.", answerTr: "Trentaquattro euro, tenga il resto." }
        ]
      },
      {
        tr: "Il conto, per favore. Paghiamo insieme.",
        why: "Il conto si chiede con <i>Die Rechnung, bitte</i>. In <i>Wir zahlen zusammen</i> l'avverbio <i>zusammen</i> sta dopo il verbo."
      },
      {
        tr: "Scusi, possiamo pagare, per favore?",
        why: "<i>Entschuldigung</i>: la <b>sch</b> è /ʃ/. In <i>zahlen</i> la <b>z</b> è /ts/ e la <b>ah</b> è una <b>a</b> lunga: la <b>h</b> non si pronuncia."
      },
      {
        tr: "Paghiamo separatamente, per favore.",
        why: "<i>Getrennt</i>: la <b>g</b> è dura e la <b>r</b> può essere uvulare o apicale (entrambe sono standard). In <i>zusammen</i> la <b>z</b> è /ts/ e la <b>s</b> tra due vocali è sonora."
      }
    ]
  },
  "lesson:a1-u07-test": {
    theme: "Verifica",
    title: "Verifica dell'unità 7",
    objectives: ["verificare accusativo al ristorante, möchte e hätte gern, einer, eins e welche, il conto"],
    theory: [
      {
        p: "Dieci domande su tutta l'unità. Si supera con il 70%. Non riguardare le lezioni mentre rispondi: se non ricordi qualcosa, è meglio tornare a ripassare."
      }
    ],
    exercises: [
      {
        q: "Completa: «Haben Sie ___ Tisch für zwei?» (Avete un tavolo per due?)",
        hint: "ein-, maschile, accusativo",
        why: "<i>Tisch</i> è maschile e dopo <i>haben</i> è complemento diretto: <b>einen</b>."
      },
      {
        q: "Completa: «Ich ___ gern das Schnitzel.» (Vorrei la cotoletta.)",
        hint: "haben, forma di cortesia che si usa con gern",
        why: "La formula è <b>ich hätte gern</b>: <i>hätte</i> è la forma di cortesia di <i>haben</i>."
      },
      {
        q: "Completa: «Haben Sie Brötchen? Ja, wir haben ___.» (Avete dei panini? Sì, ne abbiamo.)",
        hint: "plurale senza numero",
        why: "<i>Brötchen</i> è plurale e senza numero: il pronome è <b>welche</b>."
      },
      {
        q: "Quale frase è corretta?",
        opts: ["Ich möchte der Fisch.", "Ich möchte den Fisch.", "Ich möchte die Fisch."],
        why: "<i>Der Fisch</i> è maschile e dopo <i>möchte</i> sta all'accusativo: <b>den Fisch</b>."
      },
      {
        q: "«Möchten Sie ein Brötchen?» Rispondi: «Sì, ne prendo uno.»",
        opts: ["Ja, ich nehme eins.", "Ja, ich nehme ein.", "Ja, ich nehme einen."],
        why: "<i>Das Brötchen</i> è neutro: senza il nome si dice <b>eins</b>."
      },
      {
        q: "Abbina ogni parola al suo significato.",
        pairs: ["pagare", "il conto", "la mancia", "il menu (la lista dei piatti)"]
      },
      {
        tr: "Vorrei il pesce.",
        why: "Sono corrette tre posizioni: <i>Ich hätte gern den Fisch</i>, <i>Ich hätte den Fisch gern</i> e <i>Den Fisch hätte ich gern</i>. <i>Fisch</i> è maschile: <b>den</b>."
      },
      {
        tr: "Vorrei un tavolo per due.",
        why: "Funzionano <i>ich möchte</i> e <i>ich hätte gern</i> con <i>einen Tisch für zwei</i>; <i>gern</i> può stare anche con <i>möchte</i> e l'oggetto può aprire la frase. <i>Tisch</i> è maschile: <b>einen</b>."
      },
      {
        tr: "Vorremmo due zuppe e un'insalata.",
        why: "<i>hätten</i>: la <b>ä</b> è breve, simile a una «e» aperta, e <b>tt</b> si pronuncia come una sola /t/. In <i>zwei</i> la <b>z</b> è /ts/ e la <b>ei</b> è /aɪ̯/."
      },
      {
        tr: "Possiamo pagare, per favore?",
        why: "<i>Können</i>: la <b>ö</b> è breve. In <i>zahlen</i> la <b>z</b> è /ts/ e la <b>a</b> è lunga."
      }
    ]
  }
});
