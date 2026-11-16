/* ============================================================
   Learner-language text (es) for data/core/a1-02.js, units a1-u04, a1-u05 and a1-u06.
   Keys point at ids in the neutral layer; arrays merge by index,
   so their length has to match core.
   Checked by scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("es", {
  "unit:a1-u04": {
    title: "Comprar ropa",
    grammarNote: "adjetivo predicativo · dieser y welcher · ihn, sie, es · sehr, zu, viel"
  },
  "lesson:a1-u04-l1": {
    theme: "Ropa y colores",
    title: "Describir una prenda: color y forma invariable",
    objectives: [
      "nombrar las prendas de ropa más comunes con su artículo",
      "decir de qué color es una prenda con sein + adjetivo",
      "recordar que el adjetivo después de sein no lleva ninguna terminación"
    ],
    theory: [
      {
        h: "El color después de «ist»: el adjetivo no cambia",
        p: "Para decir cómo es algo se usa <strong>sein</strong> y después el adjetivo: <em>Der Pullover ist rot</em>, <em>Die Jacke ist blau</em>, <em>Das Hemd ist weiß</em>. El adjetivo que va después del verbo se llama <em>predicativo</em> y siempre queda igual: sin terminación, sea cual sea el género del nombre. Solo cambia el verbo, que en plural pasa a <em>sind</em>: <em>Die Schuhe sind schwarz</em>."
      },
      {
        contrast: "En español el adjetivo concuerda: <em>el jersey es rojo</em>, <em>la chaqueta es roja</em>, <em>los jerséis son rojos</em>, <em>las chaquetas son rojas</em>. En alemán, después de <em>sein</em>, la forma es una sola: <em>rot</em>. No tienes que pensar en el género del nombre para elegir el color, solo para elegir el artículo (<em>der, die, das</em>). Además, <em>sein</em> cubre a la vez <em>ser</em> y <em>estar</em>: <em>Der Pullover ist rot</em> (es rojo) y <em>Das Kleid ist schmutzig</em> (está sucio) usan el mismo verbo."
      },
      {
        h: "Prendas con su artículo",
        p: "Aprende cada nombre con su artículo, como ya sabes: <em>der Pullover</em>, <em>die Jacke</em>, <em>das Hemd</em>, <em>der Rock</em>, <em>das Kleid</em>. El artículo no se puede deducir de la prenda ni del español: <em>la camisa</em> es femenino en español, pero <em>das Hemd</em> es neutro. <em>Die Hose</em> es singular y designa un solo pantalón, mientras que <em>die Schuhe</em> es el plural de <em>der Schuh</em> (normalmente se habla de un par)."
      },
      {
        trap: "No escribas «Die Jacke ist rote» ni «Der Pullover ist roter»: tras <em>ist</em> el adjetivo se deja tal cual, aunque en español esperarías «roja». Las terminaciones aparecen solo cuando el adjetivo va <em>delante</em> del nombre (<em>der rote Pullover</em>): eso lo verás más adelante, ahora no lo necesitas."
      },
      {
        tip: "Prueba a describir en voz alta tres prendas que tengas en casa: <em>Die Hose ist blau</em>, <em>Der Pullover ist grün</em>, <em>Das Hemd ist weiß</em>. Tres prendas, tres colores, tres frases."
      }
    ],
    grammar: {
      title: "El adjetivo después de sein",
      note: "El adjetivo predicativo es <b>invariable</b>: solo cambia la forma de <em>sein</em> (<em>ist</em> / <em>sind</em>).",
      table: {
        head: ["género", "frase"],
        rows: [
          ["masculino", "Der Pullover ist rot."],
          ["femenino", "Die Jacke ist blau."],
          ["neutro", "Das Hemd ist weiß."],
          ["plural", "Die Schuhe sind schwarz."]
        ]
      },
      examples: [
        { tr: "El jersey es rojo.", note: "der Pullover: masculino" },
        { tr: "La chaqueta es azul.", note: "die Jacke: femenino, sin terminación" },
        { tr: "La camisa es blanca.", note: "das Hemd: neutro" },
        { tr: "Los zapatos son negros.", note: "plural: sind, pero schwarz no cambia" },
        { tr: "La falda es verde." },
        { tr: "El vestido es amarillo." }
      ]
    },
    vocab: [
      "el jersey, el suéter",
      "la chaqueta",
      "la camisa",
      "los pantalones, el pantalón (singular en alemán: die Hose)",
      "el zapato",
      "la camiseta",
      "la falda",
      "el vestido",
      "rojo",
      "azul",
      "negro",
      "blanco",
      "verde",
      "amarillo"
    ],
    exercises: [
      {
        q: "¿Cómo se dice «La chaqueta es azul»?",
        opts: ["Die Jacke ist blaue.", "Die Jacke ist blau.", "Die Jacke blau ist."],
        why: "Después de <i>ist</i> el adjetivo queda invariable y el verbo va en segunda posición: <b>Die Jacke ist blau.</b>"
      },
      {
        q: "¿Qué frase es correcta?",
        opts: ["Die Schuhe ist schwarz.", "Die Schuhe sind schwarze.", "Die Schuhe sind schwarz."],
        why: "El sujeto es plural, así que <b>sind</b>; el adjetivo predicativo sigue siendo <i>schwarz</i>."
      },
      {
        q: "¿Qué color es «weiß»?",
        opts: ["blanco", "negro", "amarillo"],
        why: "<i>Weiß</i> es «blanco». Se escribe con <b>ß</b> y se lee /vaɪs/: la <b>ß</b> es una «s» sorda, no una consonante doble."
      },
      {
        q: "Completa: «Das Hemd ___ weiß.»",
        hint: "sein, tercera persona del singular",
        why: "<i>Das Hemd</i> es singular: <b>ist</b>."
      },
      {
        q: "Completa: «Die Schuhe ___ schwarz.»",
        hint: "sein, tercera persona del plural",
        why: "<i>Die Schuhe</i> es plural: <b>sind</b>."
      },
      {
        tr: "El jersey es azul y los pantalones son negros.",
        why: "Cada oración tiene su propio verbo conjugado: <i>Der Pullover ist blau und die Hose ist schwarz</i>. En ambas el sujeto va antes de <i>ist</i>. Ojo: en alemán <i>die Hose</i> es singular, así que <i>ist</i>, aunque en español digas «los pantalones son»."
      },
      {
        q: "Une cada color con su significado.",
        pairs: ["rojo", "azul", "verde", "amarillo"]
      },
      {
        q: "Completa las dos frases.",
        tr: "El vestido es amarillo y los zapatos son negros.",
        why: "Un sujeto singular lleva <i>ist</i>, uno plural <i>sind</i>. Los adjetivos no cambian."
      },
      {
        tr: "La chaqueta es roja y los pantalones son azules.",
        why: "<i>Jacke</i>: la <b>J</b> suena como la «y» de «yo»; <i>rot</i> tiene la <b>o</b> larga."
      },
      {
        tr: "El jersey es verde y la camisa es blanca.",
        why: "En <i>grün</i> la <b>ü</b> se pronuncia con los labios como para decir «u» y la lengua como para decir «i». <i>Weiß</i>: el grupo <b>ei</b> suena como «ai» en «aire»."
      }
    ]
  },
  "lesson:a1-u04-l2": {
    theme: "En la tienda",
    title: "Elegir entre dos prendas: dieser, welcher, der da",
    objectives: [
      "señalar una prenda con dieser / diese / dieses",
      "preguntar «¿cuál?» con welcher / welche / welches",
      "usar der da / die da / das da para señalar algo cercano o lejano"
    ],
    theory: [
      {
        h: "Dieser, diese, dieses: «este»",
        p: "<strong>Dieser</strong> funciona como un artículo: toma la forma según el género del nombre. <em>Dieser Pullover</em> (masculino), <em>diese Jacke</em> (femenino), <em>dieses Hemd</em> (neutro), <em>diese Schuhe</em> (plural). En nominativo se añade <em>-er</em>, <em>-e</em>, <em>-es</em> o <em>-e</em> a <em>dies-</em>: <em>dieser</em>, <em>diese</em>, <em>dieses</em>, <em>diese</em>."
      },
      {
        h: "Welcher, welche, welches: «¿cuál?»",
        p: "Para elegir entre dos prendas se pregunta con <strong>welcher</strong>: <em>Welcher Mantel ist schön?</em>, <em>Welche Tasche ist blau?</em>, <em>Welches Kleid ist rot?</em> Sigue el mismo esquema que <em>dieser</em>. Se responde con <em>dieser</em> o, al hablar, con <strong>der da</strong>, <strong>die da</strong>, <strong>das da</strong>: <em>Welcher Mantel ist billig? Der da.</em>"
      },
      {
        contrast: "El español tiene <em>este / esta / estos / estas</em>, que concuerda en género y número, igual que <em>dieser / diese</em>. Pero el alemán añade un tercer género, el neutro (<em>dieses</em>), y en plural usa una sola forma para los tres géneros (<em>diese</em>). Para preguntar, <em>¿qué abrigo?</em> y <em>¿cuál?</em> no cambian con el género en español, mientras que <em>welcher / welche / welches</em> sí. Aquí solo estudias el nominativo. Para «ese / aquel» el alemán hablado no suele tener otra palabra: usa el artículo con <em>da</em> (<em>der da</em>, «ese de ahí»)."
      },
      {
        trap: "No digas «Welche Mantel» ni «Dieser Jacke»: la última letra tiene que seguir el género del nombre. <em>Mantel</em> es masculino (<em>welcher</em>), <em>Jacke</em> es femenino (<em>welche</em>), <em>Hemd</em> es neutro (<em>welches</em>). Como en español «qué» no cambia, es fácil olvidarlo."
      },
      {
        tip: "En una tienda puedes señalar con la mano y decir solo la palabra sin el nombre, que sí concuerda con lo que señalas: <em>Welcher? Dieser hier?</em> para <em>der Mantel</em>, <em>Welche? Diese hier?</em> para <em>die Jacke</em> o un plural, <em>Welches? Dieses hier?</em> para <em>das Hemd</em>. En alemán hablado se recorta mucho. En frases escritas, repite el nombre completo."
      }
    ],
    grammar: {
      title: "dieser y welcher en nominativo",
      note: "Las terminaciones de <b>dieser</b> y <b>welcher</b> siguen el género del nombre: -er (masculino), -e (femenino), -es (neutro), -e (plural).",
      table: {
        head: ["género", "dieser", "welcher", "ejemplo"],
        rows: [
          ["masculino", "dieser", "welcher", "Dieser Mantel ist schön."],
          ["femenino", "diese", "welche", "Diese Jacke ist teuer."],
          ["neutro", "dieses", "welches", "Dieses Hemd ist billig."],
          ["plural", "diese", "welche", "Diese Schuhe sind schwarz."]
        ]
      },
      examples: [
        { tr: "Este jersey es bonito." },
        { tr: "Esta chaqueta es cara." },
        { tr: "Esta camisa es barata.", note: "billig: barato, económico" },
        { tr: "¿Qué abrigo es bonito?", note: "masculino: welcher" },
        { tr: "¿Qué bolso es azul?", note: "femenino: welche" },
        { tr: "¿Qué vestido es rojo?", note: "neutro: welches" }
      ]
    },
    vocab: [
      "este / esta / este (masculino / femenino / neutro)",
      "qué, cuál (masculino / femenino / neutro)",
      "allí, ahí: ese de ahí / esa de ahí (al hablar: der da, die da, das da)",
      "caro",
      "barato, económico",
      "bonito, bello",
      "el abrigo",
      "el gorro",
      "la bufanda",
      "el calcetín",
      "el bolso",
      "el cinturón"
    ],
    dialogue: [
      "¡Buenos días! ¿Qué desea?",
      "Buenos días. Busco un abrigo.",
      "Este abrigo es bonito, pero caro.",
      "¿Y qué abrigo es barato?",
      "Ese de ahí es barato."
    ],
    exercises: [
      {
        q: "¿Cómo se dice «Esta chaqueta es cara»?",
        opts: ["Dieser Jacke ist teuer.", "Diese Jacke ist teuer.", "Dieses Jacke ist teuer."],
        why: "<i>Jacke</i> es femenino, así que <b>diese</b>."
      },
      {
        q: "Quieres preguntar qué camisa es bonita. ¿Qué frase es correcta?",
        opts: ["Welches Hemd ist schön?", "Welcher Hemd ist schön?", "Welche Hemd ist schön?"],
        why: "<i>Das Hemd</i> es neutro, así que <b>welches</b>."
      },
      {
        q: "Completa: «Der Rock ist schön, aber ___ Hose ist teuer.» (este)",
        hint: "die Hose es femenino",
        why: "<i>Hose</i> es femenino: <b>diese</b>."
      },
      {
        q: "Completa: «___ Schal ist billig?» (qué bufanda)",
        hint: "der Schal es masculino; pregunta",
        why: "<i>Schal</i> es masculino: <b>welcher</b>."
      },
      {
        q: "Elige el artículo correcto: el mismo género decide luego si dices <i>dieser</i>, <i>diese</i> o <i>dieses</i>.",
        why: "<i>Mantel</i> y <i>Schal</i> son masculinos (der, dieser), <i>Jacke</i> y <i>Tasche</i> femeninos (die, diese), <i>Kleid</i> y <i>Hemd</i> neutros (das, dieses).",
        items: ["abrigo", "chaqueta", "vestido", "bufanda", "bolso", "camisa"]
      },
      {
        tr: "Este abrigo es bonito, pero caro.",
        why: "La coma antes de <i>aber</i> es obligatoria. En <i>schön</i> la <b>ö</b> es una «e» pronunciada con los labios redondeados."
      },
      {
        q: "Traduce: «Esta chaqueta es bonita, pero esa de ahí es cara.»",
        why: "<i>Diese Jacke ... die da ...</i>: <i>die da</i> remite a la segunda chaqueta sin repetir el nombre. También vale <i>diese da</i>."
      },
      {
        q: "Estás en una tienda.",
        setting: "Un dependiente se acerca.",
        lines: [
          { tr: "¡Buenos días! ¿Qué desea?" },
          { tr: "Responde que buscas una chaqueta.", answerTr: "Busco una chaqueta." },
          { tr: "Esta chaqueta es roja. Esta otra es azul." },
          { tr: "Pregunta qué chaqueta es barata.", answerTr: "¿Qué chaqueta es barata?" }
        ]
      },
      {
        tr: "Este abrigo es bonito, pero ese de ahí es caro.",
        why: "En <i>Mantel</i> la <b>t</b> es nítida, y <i>teuer</i> empieza por <b>t</b> seguida de «oi»: el grupo <b>eu</b> suena «oi»."
      },
      {
        tr: "¿Qué chaqueta es barata? Esa de ahí.",
        why: "<i>Welche</i> empieza con una <b>w</b> que suena como una «v» con los dientes sobre el labio inferior; en <i>Jacke</i> la <b>J</b> suena como «y»."
      }
    ]
  },
  "lesson:a1-u04-l3": {
    theme: "Precios y compras",
    title: "Precios y pronombres de acusativo: ihn, sie, es",
    objectives: [
      "preguntar el precio con Was kostet ...? y Wie viel kostet ...?",
      "decir cuánto cuesta una prenda en euros o en francos",
      "sustituir un nombre ya dicho por ihn, sie, es"
    ],
    theory: [
      {
        h: "Preguntar y decir el precio",
        p: "Para preguntar el precio: <em>Was kostet der Pullover?</em> o <em>Wie viel kostet der Pullover?</em> Se responde con el verbo <em>kosten</em> y el número: <em>Der Pullover kostet vierzig Euro</em>. En Suiza la moneda es el franco, <em>der Franken</em>: <em>Das Hemd kostet fünfzig Franken</em>. En plural, el verbo concuerda con el sujeto: <em>Die Schuhe kosten achtzig Euro</em>. En la caja se oye <em>Das macht fünfundvierzig Euro</em>."
      },
      {
        h: "Ihn, sie, es: no repitas el nombre",
        p: "Una vez nombrada una prenda, no se repite: se usa un pronombre. Como complemento de <em>nehmen</em> o <em>kaufen</em> (acusativo) el pronombre sigue el <strong>género del nombre</strong>: <em>der Pullover</em> pasa a <strong>ihn</strong>, <em>die Jacke</em> pasa a <strong>sie</strong>, <em>das Hemd</em> pasa a <strong>es</strong>, <em>die Schuhe</em> pasa a <strong>sie</strong>. Ejemplo: <em>Der Pullover ist schön. Ich nehme ihn.</em>"
      },
      {
        contrast: "En español el pronombre átono va antes del verbo y concuerda en género y número: <em>lo llevo</em>, <em>la llevo</em>, <em>los llevo</em>. En alemán va <em>después</em> del verbo, como un complemento normal: <em>Ich nehme ihn</em>. Y el género es el del nombre alemán, no el del español: <em>la camisa</em> es <em>das Hemd</em> (<em>es</em>), <em>la falda</em> es <em>der Rock</em> (<em>ihn</em>), <em>la camiseta</em> es <em>das T-Shirt</em> (<em>es</em>), y <em>los pantalones</em> son <em>die Hose</em>, singular en alemán (<em>sie</em>)."
      },
      {
        trap: "No traslades el género español al alemán: el género de la palabra alemana es el que manda. «La falda» es <em>der Rock</em>, así que se dice <em>Ich nehme ihn</em>; «la camisa» es <em>das Hemd</em>, así que se dice <em>Ich nehme es</em>. Y con <em>die Jacke</em>: <em>Ich nehme sie</em>. <em>Es</em> solo es correcto con un nombre neutro (<em>das Hemd</em>, <em>das Kleid</em>). Solo el masculino cambia de forma entre nominativo (<em>er</em>) y acusativo (<em>ihn</em>)."
      },
      {
        tip: "Para aceptar la compra bastan tres palabras: <em>Ich nehme ihn</em> / <em>sie</em> / <em>es</em>. Para rechazar, añade <em>nicht</em> al final: <em>Ich nehme ihn nicht</em>."
      }
    ],
    grammar: {
      title: "Del nombre al pronombre en acusativo",
      note: "El pronombre sigue el género del nombre. Solo cambia el masculino: <b>er → ihn</b>.",
      table: {
        head: ["nombre", "nominativo", "acusativo", "ejemplo"],
        rows: [
          ["der Pullover", "er", "ihn", "Ich nehme ihn."],
          ["die Jacke", "sie", "sie", "Ich nehme sie."],
          ["das Hemd", "es", "es", "Ich nehme es."],
          ["die Schuhe", "sie", "sie", "Ich nehme sie."]
        ]
      },
      examples: [
        { tr: "¿Cuánto cuesta el jersey?" },
        { tr: "El jersey cuesta cuarenta euros. Me lo llevo.", note: "ihn: masculino" },
        { tr: "La chaqueta cuesta sesenta euros. Me la llevo.", note: "sie: femenino" },
        { tr: "La camisa cuesta veinticinco euros. Me la llevo.", note: "es: neutro" },
        { tr: "Los zapatos son caros. No me los llevo.", note: "nicht al final" },
        { tr: "¿Cuánto cuesta el abrigo? No lo compro.", note: "ihn: masculino" }
      ]
    },
    vocab: [
      "costar",
      "cuánto, cuánto cuesta (wie viel)",
      "el precio",
      "el euro",
      "el franco suizo",
      "comprar",
      "la caja",
      "el dependiente",
      "la dependienta",
      "solo, solamente",
      "lo / la / los / las (complemento: ihn, sie, es)",
      "Son ... euros"
    ],
    exercises: [
      {
        q: "«Der Pullover ist schön. Ich nehme ___.» ¿Qué pronombre?",
        opts: ["er", "ihn", "es"],
        why: "<i>Der Pullover</i> es masculino y aquí es complemento de <i>nehmen</i>: <b>ihn</b>."
      },
      {
        q: "«Die Jacke ist teuer. Ich kaufe ___ nicht.» ¿Qué pronombre?",
        opts: ["sie", "ihn", "es"],
        why: "<i>Die Jacke</i> es femenino: <b>sie</b> (en femenino, nominativo y acusativo son iguales)."
      },
      {
        q: "«Das Kleid ist schön. Ich nehme ___.» ¿Qué pronombre?",
        opts: ["ihn", "sie", "es"],
        why: "<i>Das Kleid</i> es neutro: <b>es</b>."
      },
      {
        q: "Completa: «Der Rock ist billig. Ich kaufe ___.» (Lo compro.)",
        hint: "der Rock es masculino; acusativo",
        why: "Masculino acusativo: <b>ihn</b>."
      },
      {
        q: "Completa: «Was ___ die Schuhe?» (¿Cuánto cuestan los zapatos?)",
        hint: "kosten, plural",
        why: "El sujeto <i>die Schuhe</i> es plural: <b>kosten</b>."
      },
      {
        q: "Une cada palabra con su significado.",
        pairs: ["costar", "el precio", "la caja", "comprar"]
      },
      {
        q: "Completa las dos frases.",
        tr: "Los pantalones cuestan treinta euros. Me los llevo. El cinturón cuesta quince euros. Me lo llevo.",
        why: "<i>Die Hose</i> es femenino singular: <b>sie</b>, aunque en español sean «los pantalones». <i>Der Gürtel</i> es masculino: <b>ihn</b>."
      },
      {
        q: "Traduce: «La chaqueta cuesta sesenta euros, me la llevo.»",
        why: "<i>Die Jacke</i> es femenino, así que <i>sie</i>. El número puede escribirse con letras (<i>sechzig</i>) o con cifras (60)."
      },
      {
        tr: "¿Cuánto cuesta el abrigo? Cuesta noventa euros.",
        why: "En <i>neunzig</i> la <b>eu</b> suena «oi» y la <b>z</b> «ts»; la terminación <b>-ig</b> se pronuncia como el <b>ch</b> de <i>ich</i>: /ˈnɔʏntsɪç/. <i>Euro</i> empieza con «oi»."
      },
      {
        tr: "La camisa cuesta solo veinte euros. Me la llevo.",
        why: "<i>Nur</i> tiene la <b>u</b> larga. <i>Zwanzig</i>: la <b>zw</b> se lee «tsv»."
      }
    ]
  },
  "lesson:a1-u04-l4": {
    theme: "Tallas y opiniones",
    title: "¿Cuánto? Sehr, zu, viel, wenig",
    objectives: [
      "decir que una prenda es muy bonita (sehr) o demasiado cara (zu)",
      "usar viel y wenig después de kosten (kostet viel, kostet wenig)",
      "describir la talla: groß, klein, lang, kurz, eng, weit"
    ],
    theory: [
      {
        h: "Sehr y zu: delante del adjetivo",
        p: "<strong>Sehr</strong> (muy) y <strong>zu</strong> (demasiado) van <em>delante</em> del adjetivo, sin ninguna terminación: <em>Der Pullover ist sehr schön</em>, <em>Die Hose ist zu klein</em>, <em>Das Kleid ist zu teuer</em>. Se puede añadir <em>ein bisschen</em> (un poco): <em>Die Jacke ist ein bisschen zu groß</em>. Para describir la talla: <em>groß</em>, <em>klein</em>, <em>lang</em>, <em>kurz</em>, <em>eng</em> (estrecho, ajustado), <em>weit</em> (ancho, holgado)."
      },
      {
        h: "Viel y wenig: después de kosten",
        p: "Con <em>kosten</em> y con un adjetivo en grado positivo, la posición distingue las palabras: <strong>viel</strong> (mucho) y <strong>wenig</strong> (poco) van <em>después</em> del verbo <em>kosten</em>, mientras que <strong>sehr</strong> va delante del adjetivo. No es una regla para todos los verbos (<em>Das gefällt mir sehr</em>) ni para los comparativos (<em>viel schöner</em>). <em>Der Mantel kostet viel</em>, <em>Das Hemd kostet wenig</em>. Con <em>zu</em> se puede decir <em>zu viel</em> (demasiado): <em>Der Mantel ist sehr schön, aber er kostet zu viel</em>."
      },
      {
        contrast: "El español hace la misma distinción que el alemán: <em>muy bonito</em> (delante del adjetivo) y <em>cuesta mucho</em> (después del verbo), nunca «cuesta muy». Así que <em>sehr</em> equivale a <em>muy</em> y <em>viel</em> a <em>mucho</em>. La diferencia está en «demasiado», que en español sirve para las dos posiciones (<em>demasiado caro</em>, <em>cuesta demasiado</em>), mientras que el alemán cambia de forma: <em>zu teuer</em> con un adjetivo y <em>zu viel</em> con <em>kosten</em>. Con otros verbos puede hacer falta <em>sehr</em> (<em>Das gefällt mir sehr</em>)."
      },
      {
        trap: "No digas «Der Pullover ist viel schön»: delante de un adjetivo en grado positivo hace falta <em>sehr</em> (<em>viel</em> va, en cambio, delante del comparativo: <em>viel schöner</em>). Y con <em>kosten</em> no digas «Der Mantel kostet sehr»: se usa <em>viel</em> (o <em>sehr viel</em>)."
      },
      {
        tip: "En una tienda te harán falta a menudo dos frases: <em>Der Mantel ist zu teuer</em> y <em>Die Hose ist zu eng</em>. Después de <em>zu</em> delante de un adjetivo no cambia nada."
      }
    ],
    grammar: {
      title: "sehr, zu, viel, wenig",
      note: "<b>Sehr</b> y <b>zu</b> van delante del adjetivo en grado positivo; con <b>kosten</b>, <b>viel</b> y <b>wenig</b> van después del verbo.",
      table: {
        head: ["adverbio", "significado", "posición", "ejemplo"],
        rows: [
          ["sehr", "muy", "delante del adjetivo", "Der Pullover ist sehr schön."],
          ["zu", "demasiado", "delante del adjetivo", "Die Hose ist zu klein."],
          ["viel", "mucho", "después de kosten", "Der Mantel kostet viel."],
          ["wenig", "poco", "después de kosten", "Das Hemd kostet wenig."]
        ]
      },
      examples: [
        { tr: "El jersey es muy bonito." },
        { tr: "Los pantalones son demasiado pequeños.", note: "zu delante del adjetivo" },
        { tr: "El vestido es demasiado caro." },
        { tr: "El abrigo cuesta mucho.", note: "viel después de kosten" },
        { tr: "La camisa cuesta poco.", note: "wenig después de kosten" },
        { tr: "La chaqueta me queda un poco demasiado grande." }
      ]
    },
    vocab: [
      "muy (delante de un adjetivo)",
      "demasiado (delante de un adjetivo)",
      "mucho (después de kosten)",
      "poco (después de kosten)",
      "un poco",
      "grande, alto",
      "pequeño, bajo",
      "largo",
      "corto",
      "estrecho, ajustado",
      "ancho, holgado",
      "la talla"
    ],
    exercises: [
      {
        q: "¿Cómo se dice «Los pantalones son demasiado pequeños»?",
        opts: ["Die Hose ist zu klein.", "Die Hose ist sehr klein.", "Die Hose ist viel klein."],
        why: "<b>Zu</b> significa «demasiado» y va delante del adjetivo. <i>Sehr klein</i> sería «muy pequeños», sin idea de exceso."
      },
      {
        q: "¿Cómo se dice «El abrigo es muy bonito»?",
        opts: ["Der Mantel ist zu schön.", "Der Mantel ist sehr schön.", "Der Mantel ist wenig schön."],
        why: "<b>Sehr</b> delante del adjetivo. <i>Zu schön</i> significa «demasiado bonito», algo que normalmente no es un cumplido."
      },
      {
        q: "¿Qué frases son correctas?",
        opts: [
          "Die Hose ist zu eng.",
          "Der Pullover ist viel schön.",
          "Das Hemd kostet wenig.",
          "Der Mantel ist sehr groß.",
          "Die Jacke kostet sehr."
        ],
        why: "<i>Viel schön</i> es incorrecto: delante de un adjetivo hace falta <i>sehr</i>. Con <i>kosten</i>, <i>kostet sehr</i> solo no vale: se dice <i>kostet viel</i> o <i>kostet sehr viel</i>."
      },
      {
        q: "Completa: «Der Mantel ist ___ teuer. Ich nehme ihn nicht.» (demasiado)",
        hint: "delante del adjetivo",
        why: "<b>Zu</b>: «demasiado» delante de un adjetivo."
      },
      {
        q: "Completa: «Das Kleid ist ___ schön.» (muy)",
        hint: "delante del adjetivo",
        why: "<b>Sehr</b>: «muy» delante de un adjetivo."
      },
      {
        q: "Une cada palabra con su significado.",
        pairs: ["grande", "pequeño", "largo", "corto"]
      },
      {
        q: "Completa: «El jersey es muy bonito, pero cuesta mucho.»",
        tr: "El jersey es muy bonito, pero cuesta mucho.",
        why: "<i>Sehr</i> delante del adjetivo, <i>viel</i> después de <i>kosten</i>."
      },
      {
        q: "Traduce: «El abrigo es muy bonito, pero cuesta demasiado.»",
        why: "<i>Sehr schön</i> (delante del adjetivo) y <i>zu viel</i> (después de <i>kosten</i>): <i>er kostet zu viel</i>."
      },
      {
        tr: "Los pantalones son demasiado pequeños, pero la chaqueta es muy bonita.",
        why: "<i>Klein</i> tiene la <b>ei</b> que suena «ai». <i>Schön</i>: la <b>sch</b> suena como la «sh» del inglés «she»."
      },
      {
        tr: "El vestido es muy bonito, pero demasiado caro.",
        why: "<i>Kleid</i>: la <b>ei</b> suena «ai» y la <b>d</b> final suena como una <b>t</b>."
      }
    ]
  },
  "lesson:a1-u04-test": {
    theme: "Prueba",
    title: "Prueba de la unidad 4",
    objectives: ["comprobar adjetivo predicativo, dieser y welcher, pronombres de acusativo y sehr, zu, viel"],
    theory: [
      {
        p: "Diez preguntas sobre toda la unidad. Se supera con el 70%. No repases las lecciones mientras respondes: si no recuerdas algo, es mejor volver a repasar."
      }
    ],
    exercises: [
      {
        q: "Completa: «Die Schuhe ___ schwarz.» (Los zapatos son negros.)",
        hint: "sein, tercera persona del plural",
        why: "Sujeto plural: <b>sind</b>."
      },
      {
        q: "Completa: «Der Pullover kostet fünfzig Euro. Ich nehme ___.» (Me lo llevo.)",
        hint: "der Pullover es masculino; acusativo",
        why: "Masculino acusativo: <b>ihn</b>."
      },
      {
        q: "Completa: «Die Hose ist ___ eng, ich nehme sie nicht.» (demasiado)",
        hint: "delante del adjetivo",
        why: "<b>Zu</b>: «demasiado» delante de un adjetivo."
      },
      {
        q: "Elige el artículo determinado correcto para cada nombre.",
        items: ["jersey", "pantalones", "vestido", "falda"]
      },
      {
        q: "¿Cómo preguntas qué jersey es barato?",
        opts: ["Welcher Pullover ist billig?", "Welche Pullover ist billig?", "Welches Pullover ist billig?"],
        why: "<i>Pullover</i> es masculino: <b>welcher</b>."
      },
      {
        q: "«Das Kleid ist schön. Ich nehme ___.» ¿Qué pronombre?",
        opts: ["ihn", "sie", "es"],
        why: "<i>Das Kleid</i> es neutro: <b>es</b>."
      },
      {
        tr: "La camisa es muy bonita, pero demasiado cara.",
        why: "<i>Sehr schön, aber zu teuer</i>: dos adverbios delante del adjetivo."
      },
      {
        q: "Traduce: «La chaqueta es bonita, pero demasiado cara. No me la llevo.»",
        why: "<i>Zu</i> va delante del adjetivo <i>teuer</i>; <i>sie</i> recoge <i>die Jacke</i> y <i>nicht</i>, al final, niega la compra."
      },
      {
        tr: "¿Qué jersey es rojo y cuál es azul?",
        why: "<i>Welcher Pullover</i>: masculino. La pregunta en nominativo no cambia el verbo, que sigue en segunda posición."
      },
      {
        tr: "El abrigo es muy bonito. Me lo llevo.",
        why: "<i>Mantel</i> es masculino: <i>ihn</i>."
      }
    ]
  },
  "unit:a1-u05": {
    title: "Mi día",
    grammarNote: "verbos separables · um, am, im, von ... bis · können, wollen, müssen · adverbios de frecuencia"
  },
  "lesson:a1-u05-l1": {
    theme: "Rutina de la mañana",
    title: "Verbos separables: el prefijo va al final",
    objectives: [
      "describir la rutina con aufstehen, frühstücken, duschen, einkaufen, fernsehen",
      "poner el prefijo de los verbos separables al final de la frase",
      "decir a qué hora ocurre algo con um + hora"
    ],
    theory: [
      {
        h: "El prefijo se separa y va al final",
        p: "Muchos verbos alemanes tienen un prefijo acentuado que, en la oración principal, <strong>se separa</strong> y va <strong>al final de la frase</strong>. En infinitivo el verbo queda entero: <em>aufstehen</em>. En la frase la parte conjugada ocupa el segundo lugar y el prefijo cierra: <em>Ich stehe um sieben Uhr <strong>auf</strong></em>. También <em>aufwachen</em> (<em>Ich wache um sechs Uhr auf</em>), <em>einkaufen</em> (<em>Wir kaufen am Samstag ein</em>), <em>fernsehen</em> (<em>Am Abend sehe ich fern</em>), <em>anfangen</em> (<em>Der Film fängt um acht Uhr an</em>) y <em>einschlafen</em> funcionan así."
      },
      {
        contrast: "El español no tiene verbos que se partan: <em>me levanto</em>, <em>me despierto</em>, <em>hago la compra</em> se quedan compactos. Además, <em>levantarse</em> y <em>despertarse</em> son reflexivos en español (<em>me levanto</em>), mientras que <em>aufstehen</em> y <em>aufwachen</em> en alemán <strong>no llevan ningún pronombre</strong>: <em>Ich stehe auf</em>, no «Ich stehe mich auf». Con <em>ducharse</em> pasa lo mismo: en alemán basta el verbo regular <em>duschen</em> (<em>Ich dusche am Morgen</em>), sin pronombre."
      },
      {
        h: "Las partes del día: una trampa de género",
        p: "Aprende estos nombres con su artículo: <em>der Morgen</em>, <em>der Tag</em>, <em>der Abend</em>, <em>die Nacht</em>. En español <em>la mañana</em> y <em>la tarde</em> son femeninos (y <em>el día</em>, como <em>der Tag</em>, masculino), pero en alemán <em>der Morgen</em> y <em>der Abend</em> son masculinos. <em>Nacht</em> sí es femenino, como <em>la noche</em>: <em>die Nacht</em>, plural <em>die Nächte</em>. Y cuidado con <em>der Morgen</em> (la mañana, nombre con mayúscula) y <em>morgen</em> (mañana, adverbio en minúscula): en español es la misma palabra, en alemán se escriben distinto."
      },
      {
        trap: "No digas «Ich aufstehe um sieben»: el prefijo no se queda pegado al verbo conjugado. Y no olvides poner el prefijo al final: «Ich stehe um sieben Uhr», sin <em>auf</em>, no significa «me levanto». Cuidado también con los prefijos que normalmente <strong>no</strong> se separan: <em>be-</em>, <em>ver-</em>, <em>er-</em> (<em>besuchen</em> → <em>Ich besuche dich</em>, <em>verstehen</em> → <em>Ich verstehe das</em>). El prefijo separable es el acentuado (<em>AUFstehen</em>), el inseparable no (<em>beSUchen</em>). <em>Duschen</em> y <em>frühstücken</em> no tienen prefijo que separar, mientras que <em>fernsehen</em> y <em>einschlafen</em> sí son separables."
      },
      {
        tip: "Escribe cinco frases con verbos separables distintos y comprueba que el prefijo sea siempre la última palabra: <em>Ich wache auf. Ich stehe auf. Ich kaufe ein. Ich sehe fern. Ich schlafe ein.</em> Luego añade <em>um</em> + hora a dos de ellas."
      }
    ],
    grammar: {
      title: "Verbos separables en la oración principal",
      note: "En la oración principal la parte conjugada va en <b>segundo lugar</b> y el <b>prefijo va al final</b>. En infinitivo el verbo es entero.",
      table: {
        head: ["infinitivo", "presente", "ejemplo"],
        rows: [
          ["aufstehen", "ich stehe ... auf", "Ich stehe um sieben Uhr auf."],
          ["aufwachen", "ich wache ... auf", "Du wachst um sechs Uhr auf."],
          ["einkaufen", "wir kaufen ... ein", "Am Samstag kaufen wir ein."],
          ["fernsehen", "er sieht ... fern", "Am Abend sieht er fern."],
          ["anfangen", "er fängt ... an", "Der Film fängt um acht Uhr an."]
        ]
      },
      examples: [
        { tr: "Me levanto a las siete.", note: "auf al final, sin pronombre reflexivo" },
        { tr: "Te despiertas a las seis." },
        { tr: "Los sábados hacemos la compra.", note: "einkaufen: ein al final" },
        { tr: "Por la noche él ve la televisión.", note: "fernsehen: en el presente de er, sehen cambia a sieht" },
        { tr: "La película empieza a las ocho.", note: "anfangen: er fängt an, con cambio de vocal" },
        { tr: "Desayuno a las siete y media.", note: "frühstücken no es separable: ningún prefijo al final" }
      ]
    },
    vocab: [
      "levantarse",
      "despertarse",
      "desayunar",
      "ducharse",
      "hacer la compra, ir de compras",
      "ver la televisión",
      "empezar, comenzar",
      "dormirse",
      "la mañana",
      "el día",
      "la tarde-noche, el atardecer",
      "la noche"
    ],
    exercises: [
      {
        q: "¿Qué frase es correcta?",
        opts: ["Ich aufstehe um sieben Uhr.", "Ich stehe um sieben Uhr auf.", "Ich stehe um auf sieben Uhr."],
        why: "El verbo conjugado va en segundo lugar y el prefijo <b>auf</b> cierra la frase: <b>Ich stehe um sieben Uhr auf.</b>"
      },
      {
        q: "¿Qué pregunta es correcta?",
        opts: ["Kommst du mit?", "Mitkommst du?", "Kommst mit du?"],
        why: "<i>Mitkommen</i> es separable: <i>Kommst du mit?</i> El prefijo <b>mit</b> cierra la pregunta."
      },
      {
        tr: "Toda la conjugación de aufstehen, con el prefijo.",
        why: "Escribe siempre la forma conjugada y después el prefijo: <i>stehe auf</i>, <i>stehst auf</i>, <i>steht auf</i>, <i>stehen auf</i>, <i>steht auf</i>, <i>stehen auf</i>. <i>Er/sie/es</i> e <i>ihr</i> tienen la misma forma: <b>steht auf</b>."
      },
      {
        q: "Completa: «Nos levantamos a las siete.» → «Wir ___ um sieben auf.»",
        hint: "aufstehen, primera persona del plural",
        why: "Con <b>wir</b> el verbo tiene la forma del infinitivo: <i>wir stehen ... auf</i>."
      },
      {
        q: "Completa: «Me levanto a las siete.» → «Ich stehe um sieben ___.»",
        hint: "el prefijo de aufstehen",
        why: "El prefijo separable va al final: <b>auf</b>."
      },
      {
        tr: "Me levanto a las siete.",
        why: "El orden es: sujeto, verbo conjugado, hora, prefijo. En <i>stehe</i> la <b>st</b> a principio de sílaba se lee «scht»: /ˈʃteːə/."
      },
      {
        q: "Completa las dos palabras que faltan.",
        tr: "Los sábados hacemos la compra.",
        why: "<i>Einkaufen</i> se divide en <i>kaufen</i> y <i>ein</i>. Con <i>am Samstag</i> en primera posición, el sujeto <i>wir</i> va detrás del verbo."
      },
      {
        tr: "A las siete me levanto.",
        why: "También son correctas <i>Ich stehe um sieben Uhr auf</i> y, con inversión, <i>Um sieben (Uhr) stehe ich auf</i>. Fíjate en que en alemán no aparece ningún pronombre reflexivo: no hay «mich»."
      },
      {
        tr: "Me levanto a las siete y desayuno a las ocho.",
        why: "<i>Auf</i> tiene el diptongo /aʊ̯/, escrito «au»: un deslizamiento de «a» a una «u» breve en la misma sílaba, parecido al de «causa». En <i>frühstücke</i> la <b>ü</b> es una «u» con los labios redondeados y la lengua adelantada, como para decir «i»; la <b>st</b> se lee «scht»."
      },
      {
        tr: "Los sábados hacemos la compra.",
        why: "<i>Samstag</i>: la <b>s</b> ante vocal es sonora (vibra, como la «z» del inglés «zoo»); <i>ein</i> empieza con el diptongo <b>ei</b> (como «ai» en «aire»)."
      }
    ]
  },
  "lesson:a1-u05-l2": {
    theme: "La hora y los días",
    title: "Decir y preguntar la hora: um, am, von ... bis",
    objectives: [
      "preguntar la hora con Wie spät ist es? y responder",
      "decir las horas en punto, y Viertel nach, Viertel vor, halb",
      "usar um con la hora, am con los días y von ... bis"
    ],
    theory: [
      {
        h: "Preguntar y decir la hora",
        p: "Para preguntar la hora: <em>Wie spät ist es?</em> o <em>Wie viel Uhr ist es?</em> Se responde con <em>Es ist</em> + hora: <em>Es ist sieben Uhr</em>. Para los cuartos y los minutos: <em>Es ist Viertel nach sieben</em> (7:15), <em>Es ist Viertel vor acht</em> (7:45), <em>Es ist zehn nach sieben</em> (7:10), <em>Es ist zehn vor acht</em> (7:50). Para la una: <em>Es ist ein Uhr</em>. En contextos oficiales (trenes, programación de televisión, horarios) se usan también las horas de 0 a 24: <em>neunzehn Uhr dreißig</em>."
      },
      {
        contrast: "En español se dice <em>son las siete</em>, en plural (y <em>es la una</em> solo para la una). En alemán el sujeto es siempre <em>es</em> y el verbo queda en singular: <em>Es ist sieben Uhr</em>, nunca «Sie sind sieben Uhr». Luego está <strong>halb</strong>: <em>halb acht</em> significa <strong>las siete y media</strong>, no las ocho y media, porque se cuenta hacia la hora que está por llegar. Para un hispanohablante es la trampa más frecuente, porque el español cuenta desde la hora que ya pasó (las siete y media): <em>Es ist halb acht</em> = 7:30. Los cuartos, en cambio, son fáciles: <em>Viertel nach</em> es «y cuarto» y <em>Viertel vor</em> es «menos cuarto». Por último, el español usa «hora» tanto para la hora del reloj como para la duración; el alemán no: la hora del día se dice con <em>Uhr</em> (<em>die Uhr</em> es también «el reloj»), la duración con <em>die Stunde</em>: <em>Es ist drei Uhr</em> (son las tres), <em>Der Film dauert drei Stunden</em> (la película dura tres horas)."
      },
      {
        h: "um, am, von ... bis",
        p: "Con la hora exacta se usa <strong>um</strong>: <em>Der Film beginnt um acht Uhr</em> (a las ocho). Con los días y las partes del día se usa <strong>am</strong>: <em>am Montag</em>, <em>am Samstag</em>, <em>am Morgen</em>, <em>am Nachmittag</em>, <em>am Abend</em>; la única excepción es <em>in der Nacht</em>. Con los meses y las estaciones, <strong>im</strong>: <em>im Mai</em>, <em>im Sommer</em>. Para un intervalo, <strong>von ... bis</strong>: <em>von Montag bis Freitag</em>, <em>von acht bis vier</em>. Los días: <em>Montag, Dienstag, Mittwoch, Donnerstag, Freitag, Samstag, Sonntag</em>."
      },
      {
        trap: "En alemán todos los días son masculinos (<em>der Montag</em>, <em>der Sonntag</em>) y se escriben con mayúscula, como cualquier sustantivo; en español van en minúscula (<em>el lunes</em>). Y el español dice «el lunes» sin preposición, mientras que el alemán necesita <em>am Montag</em>. No traduzcas «a las siete» con <em>am</em>: para la hora hace falta <em>um</em>, para el día <em>am</em>. Y no digas «um Montag»: el lunes es un día, así que <em>am Montag</em>. Tampoco copies el esquema de «por la mañana, por la tarde, por la noche»: en alemán es <em>am Morgen</em>, <em>am Nachmittag</em>, <em>am Abend</em>, pero <em>in der Nacht</em>."
      },
      {
        tip: "Aprende las tres medias horas en pareja: <em>halb acht</em> (7:30), <em>halb neun</em> (8:30), <em>halb zehn</em> (9:30). Para comprobar que lo has entendido, añade siempre la hora que sigue: si digo <em>halb neun</em>, me falta media hora para las nueve."
      }
    ],
    grammar: {
      title: "La hora y las preposiciones de tiempo",
      note: "<b>um</b> + hora, <b>am</b> + día o parte del día (<em>am Morgen, am Nachmittag, am Abend</em>; excepción: <em>in der Nacht</em>), <b>im</b> + mes o estación. <b>Halb acht</b> = 7:30.",
      table: {
        head: ["hora", "se dice"],
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
        { tr: "¿Qué hora es?", note: "también: Wie viel Uhr ist es?" },
        { tr: "Son las siete.", note: "es ist, singular" },
        { tr: "Son las siete y cuarto." },
        { tr: "Son las siete y media.", note: "halb acht: se cuenta hacia las ocho" },
        { tr: "Son las ocho menos cuarto." },
        { tr: "La película empieza el sábado a las ocho y media.", note: "am Samstag, um halb neun" }
      ]
    },
    vocab: [
      "la hora, el reloj (die Uhr)",
      "la hora (duración)",
      "el minuto",
      "el cuarto",
      "medio, media (halb acht = las siete y media)",
      "menos (ante la hora que llega: Viertel vor acht)",
      "y, después de (Viertel nach sieben)",
      "tarde",
      "temprano",
      "el lunes",
      "el sábado",
      "el fin de semana"
    ],
    exercises: [
      {
        q: "«Es ist halb acht.» ¿Qué hora es?",
        opts: ["las siete y media", "las ocho y media", "las ocho en punto"],
        why: "<i>Halb acht</i> son las siete y media: se cuenta hacia la hora siguiente, media hora antes de las ocho."
      },
      {
        q: "¿Cómo se dice «de lunes a viernes»?",
        opts: ["von Montag nach Freitag", "ab Montag zu Freitag", "von Montag bis Freitag"],
        why: "Para un intervalo se usa <b>von ... bis</b>: <i>von Montag bis Freitag</i>."
      },
      {
        q: "Completa: «Der Film beginnt ___ acht Uhr.» (a las ocho)",
        hint: "con la hora exacta",
        why: "Con la hora se usa <b>um</b>: <i>um acht Uhr</i>."
      },
      {
        q: "Completa: «Das Konzert ist ___ Samstag.» (el sábado)",
        hint: "con un día de la semana",
        why: "Con los días se usa <b>am</b>: <i>am Samstag</i>."
      },
      {
        tr: "Son las siete y cuarto.",
        why: "<i>Viertel nach sieben</i>: la <b>V</b> de <i>Viertel</i> se lee como una «f». En <i>sieben</i> la <b>ie</b> es una «i» larga y la <b>s</b> es sonora."
      },
      {
        q: "Une cada día de la semana con su significado.",
        pairs: ["lunes", "miércoles", "viernes", "domingo"]
      },
      {
        q: "Completa las dos frases.",
        tr: "7:10: son las siete y diez. 7:50: son las ocho menos diez.",
        why: "<i>Zehn nach sieben</i> es 7:10, <i>zehn vor acht</i> es 7:50."
      },
      {
        tr: "¿Qué hora es? Son las ocho y media.",
        why: "Las ocho y media se dicen <i>halb neun</i>. Como alternativa, <i>acht Uhr dreißig</i>, más formal. <i>Wie spät ist es?</i> y <i>Wie viel Uhr ist es?</i> son equivalentes."
      },
      {
        tr: "¿Qué hora es? Son las ocho menos cuarto.",
        why: "<i>Viertel vor acht</i>: 7:45. En <i>vor</i> la <b>v</b> suena como «f» y la <b>o</b> es larga."
      },
      {
        tr: "La película empieza a las ocho y media.",
        why: "En <i>halb neun</i> la <b>h</b> inicial es aspirada y la <b>b</b> final suena como «p». <i>Beginnt</i>: la <b>g</b> es una «g» dura."
      }
    ]
  },
  "lesson:a1-u05-l3": {
    theme: "Capacidad, voluntad, obligación",
    title: "Verbos modales: können, wollen, müssen",
    objectives: [
      "decir lo que se puede, se quiere y se debe hacer con können, wollen, müssen",
      "conjugar los tres modales en presente",
      "poner el infinitivo al final de la frase"
    ],
    theory: [
      {
        h: "Tres verbos, una estructura",
        p: "<strong>können</strong> (poder, saber), <strong>wollen</strong> (querer) y <strong>müssen</strong> (tener que, deber) se usan junto a otro verbo en infinitivo. El modal va conjugado y ocupa el segundo lugar, mientras que el <strong>infinitivo va al final de la frase</strong>: <em>Ich kann heute nicht kommen</em>, <em>Wir wollen morgen schwimmen</em>, <em>Du musst heute lernen</em>. Modal e infinitivo encierran el resto de la frase como un paréntesis."
      },
      {
        h: "La conjugación",
        p: "Estos tres verbos tienen una conjugación propia: la primera y la tercera persona del singular son iguales y <strong>no llevan desinencia</strong>. <em>Ich kann</em>, <em>er kann</em>. <em>Ich will</em>, <em>er will</em>. <em>Ich muss</em>, <em>er muss</em>. Con <em>wir</em>, <em>sie</em> y <em>Sie</em> la forma es como el infinitivo: <em>wir können</em>, <em>sie wollen</em>, <em>Sie müssen</em>. Con <em>ihr</em> se tiene <em>könnt, wollt, müsst</em>, con <em>du</em> <em>kannst, willst, musst</em>."
      },
      {
        contrast: "En español el infinitivo sigue al verbo modal justo detrás (<em>puedo venir hoy</em>, <em>quiero dormir</em>), pero el alemán lo manda al final de la frase: <em>Ich kann heute Abend mit dir ins Kino gehen</em>. Es lo que cambia más. Además, el español separa «poder» (<em>puedo nadar</em> si hay posibilidad) de «saber» (<em>sé nadar</em>, una habilidad), y el alemán usa <em>können</em> para todo: <em>Ich kann schwimmen</em> vale «puedo nadar» y «sé nadar». Y <em>müssen</em> corresponde a «tener que» o «deber»: <em>Ich muss arbeiten</em> = «tengo que trabajar»."
      },
      {
        trap: "Con <em>nicht</em>, <em>müssen</em> no significa «no debo» como prohibición. <em>Du musst nicht kommen</em> quiere decir «no hace falta que vengas»: no es una prohibición, igual que «no tienes que venir» en español. Para «no debes» como prohibición hará falta otro verbo, <em>dürfen</em>, que llega más adelante. Otra trampa: <em>wollen</em> es directo. En español «quiero un café» suena normal al pedir algo, pero <em>Ich will einen Kaffee</em> puede sonar brusco. Para pedir con amabilidad se usa <em>ich möchte</em>, que verás más adelante; es una forma de cortesía que viene de <em>mögen</em>. Después de un modal no hay <em>zu</em> delante del infinitivo (y tampoco un «que» como en «tengo que»)."
      },
      {
        tip: "Construye tres frases sobre ti, una por modal, y dilas en voz alta: <em>Ich kann gut kochen</em>, <em>Ich will morgen schlafen</em>, <em>Ich muss heute lernen</em>. Comprueba que el infinitivo sea siempre la última palabra."
      }
    ],
    grammar: {
      title: "können, wollen, müssen en presente",
      note: "La 1ª y la 3ª persona del singular son <b>iguales y sin desinencia</b>. El infinitivo va al final de la frase.",
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
        { tr: "Sé cocinar bien.", note: "können para la capacidad" },
        { tr: "Hoy no puedes venir.", note: "nicht antes del infinitivo" },
        { tr: "Mañana queremos nadar." },
        { tr: "Hoy él no quiere trabajar.", note: "er will: sin desinencia" },
        { tr: "Hoy tengo que estudiar.", note: "ich muss: sin desinencia" },
        { tr: "Ellos tienen que hacer los deberes.", note: "sie müssen: forma igual al infinitivo" }
      ]
    },
    vocab: [
      "poder, saber (capacidad)",
      "querer",
      "tener que, deber",
      "estudiar, aprender",
      "cocinar",
      "nadar",
      "dormir",
      "bailar",
      "el trabajo",
      "los deberes (tarea escolar)",
      "hoy",
      "mañana"
    ],
    exercises: [
      {
        q: "¿Qué frase es correcta?",
        opts: ["Ich kann heute gehe.", "Ich kann heute gehen.", "Ich gehen kann heute."],
        why: "El modal va en segundo lugar, el infinitivo al final: <b>Ich kann heute gehen.</b>"
      },
      {
        q: "Completa: «Er ___ heute lernen.» (Hoy él tiene que estudiar.)",
        opts: ["müsst", "muss", "müssen"],
        why: "Con <i>er</i> el modal no lleva desinencia: <b>er muss</b>."
      },
      {
        tr: "Toda la conjugación de können.",
        why: "<i>Ich kann</i> y <i>er kann</i> son iguales. Con <i>du</i> la forma es <i>kannst</i>, con <i>ihr</i> <i>könnt</i>."
      },
      {
        tr: "Toda la conjugación de wollen.",
        why: "<i>Ich will</i> y <i>er will</i> son iguales. Con <i>du</i> la forma es <i>willst</i>, con <i>ihr</i> <i>wollt</i>."
      },
      {
        tr: "Toda la conjugación de müssen.",
        why: "<i>Ich muss</i> y <i>er muss</i> son iguales. Con <i>du</i> la forma es <i>musst</i>, con <i>ihr</i> <i>müsst</i>."
      },
      {
        q: "Completa: «Wir ___ morgen schwimmen.» (Mañana queremos nadar.)",
        hint: "querer, primera persona del plural",
        why: "Con <b>wir</b> el modal tiene la forma del infinitivo: <b>wollen</b>."
      },
      {
        q: "Completa las dos frases.",
        tr: "No puedo dormir. Tengo que trabajar.",
        why: "<i>Ich kann nicht schlafen</i>: <i>können</i> para la posibilidad. <i>Ich muss arbeiten</i>: <i>müssen</i> para la obligación."
      },
      {
        tr: "Tengo que trabajar, pero quiero dormir.",
        why: "Dos frases con su propio modal, unidas por <i>aber</i> con una coma delante: <i>muss</i> para la obligación, <i>will</i> para la voluntad."
      },
      {
        tr: "Hoy no puedo venir, tengo que trabajar.",
        why: "<i>Kann</i> con la <b>a</b> corta. En <i>kommen</i> la <b>o</b> es corta. <i>Heute</i>: la <b>eu</b> se lee «oi», como en «hoy»."
      },
      {
        tr: "Hoy tengo que estudiar, pero quiero nadar.",
        why: "En <i>schwimmen</i> la <b>sch</b> se lee como la «sh» del inglés «ship» y la <b>w</b> como una «v» labiodental (el labio inferior toca los dientes superiores)."
      }
    ]
  },
  "lesson:a1-u05-l4": {
    theme: "Costumbres y frecuencia",
    title: "¿Con qué frecuencia? immer, oft, manchmal, nie",
    objectives: [
      "decir con qué frecuencia se hace algo con immer, oft, manchmal, selten, nie",
      "poner el adverbio de frecuencia en el sitio correcto",
      "empezar la frase con una indicación de tiempo e invertir verbo y sujeto"
    ],
    theory: [
      {
        h: "Los adverbios de frecuencia",
        p: "Cinco palabras bastan para describir las costumbres: <em>immer</em> (siempre), <em>oft</em> (a menudo), <em>manchmal</em> (a veces), <em>selten</em> (raramente), <em>nie</em> (nunca). Suelen ir <strong>después del verbo conjugado</strong>: <em>Ich trinke immer Kaffee</em>, <em>Ich lese oft die Zeitung</em>, <em>Ich esse selten Brot</em>. Para indicar cuándo suele pasar algo: <em>morgens</em> = por las mañanas; <em>abends</em> = por las tardes/noches; <em>jeden Tag</em> = todos los días."
      },
      {
        h: "Si la frase empieza con el tiempo, el sujeto sigue al verbo",
        p: "El verbo conjugado va siempre en <strong>segundo lugar</strong>. Si en primera posición hay una indicación de tiempo, el sujeto pasa detrás del verbo (<strong>inversión</strong>): <em>Morgens trinke ich immer Kaffee</em>, <em>Abends sehe ich manchmal fern</em>, <em>Jeden Tag frühstücke ich um acht</em>. El sentido es el mismo que en <em>Ich trinke morgens immer Kaffee</em>: solo cambia el elemento que abre la frase."
      },
      {
        contrast: "En español el adverbio suele ir antes del verbo (<em>siempre bebo café</em>), mientras que en alemán va después del verbo conjugado (<em>Ich trinke immer Kaffee</em>). Y el español puede decir <em>Por la mañana siempre bebo café</em>, a menudo sin el pronombre sujeto; en alemán el sujeto es obligatorio y después de <em>morgens</em> el verbo viene enseguida: <em>Morgens trinke ich</em>; «Morgens ich trinke» es un error. En español la negación admite el doble <em>no</em> ... <em>nunca</em> (<em>no bebo nunca cerveza</em>), pero en alemán <em>nie</em> ya contiene la negación: <em>Ich trinke nie Bier</em>, sin <em>nicht</em>. Además, <em>morgens</em> suele expresar una costumbre («por las mañanas»); <em>am Morgen</em> puede referirse a una mañana concreta o usarse en descripciones habituales, según el contexto."
      },
      {
        trap: "No digas «Ich trinke nie nicht Bier»: <em>nie</em> ya es negativo y <em>nicht</em> se añade en balde. Y no pongas el adverbio delante del verbo conjugado como en español: «Ich immer trinke Kaffee» es un error. Si el sujeto ocupa la primera posición, el verbo conjugado va después: <em>Ich trinke immer Kaffee</em>. Si empieza la frase una indicación temporal, el verbo precede al sujeto: <em>Morgens trinke ich immer Kaffee</em>."
      },
      {
        tip: "Describe tu día con una frase por adverbio: <em>Ich trinke immer Kaffee. Ich lese oft die Zeitung. Abends sehe ich manchmal fern. Ich esse selten Brot. Ich trinke nie Bier.</em> Después prueba a poner <em>Morgens</em> o <em>Abends</em> en primera posición y comprueba el verbo."
      }
    ],
    grammar: {
      title: "Adverbios de frecuencia e inversión",
      note: "El adverbio va normalmente <b>después del verbo conjugado</b>. Si la frase empieza con una indicación de tiempo, <b>el verbo sigue en segundo lugar</b> y el sujeto lo sigue.",
      table: {
        head: ["adverbio", "significado", "ejemplo"],
        rows: [
          ["immer", "siempre", "Ich trinke immer Kaffee."],
          ["oft", "a menudo", "Ich lese oft die Zeitung."],
          ["manchmal", "a veces", "Abends sehe ich manchmal fern."],
          ["selten", "raramente", "Ich esse selten Brot."],
          ["nie", "nunca", "Ich trinke nie Bier."]
        ]
      },
      examples: [
        { tr: "Siempre bebo café." },
        { tr: "Por la mañana siempre bebo café.", note: "morgens en primera posición: trinke ich" },
        { tr: "A menudo leo el periódico." },
        { tr: "Por la noche a veces veo la televisión.", note: "fernsehen: fern al final" },
        { tr: "Raramente como pan." },
        { tr: "Nunca bebo cerveza.", note: "nie, sin nicht" }
      ]
    },
    vocab: [
      "siempre",
      "a menudo",
      "a veces",
      "raramente",
      "nunca",
      "por la mañana, cada mañana",
      "por la noche, todas las noches (abends)",
      "cada día",
      "el pan",
      "el desayuno",
      "el periódico",
      "la comida (del mediodía)"
    ],
    exercises: [
      {
        q: "¿Qué frase es correcta?",
        opts: ["Morgens ich trinke Kaffee.", "Morgens trinke ich Kaffee.", "Ich morgens trinke Kaffee."],
        why: "Después de <i>morgens</i> viene enseguida el verbo conjugado (segundo lugar), luego el sujeto: <b>Morgens trinke ich Kaffee.</b>"
      },
      {
        q: "¿Qué significa «Ich trinke nie Kaffee»?",
        opts: ["No bebo nunca café.", "Siempre bebo café.", "Hoy no bebo café."],
        why: "<i>Nie</i> significa «nunca» y ya contiene la negación: no hace falta <i>nicht</i>."
      },
      {
        q: "¿Qué frases son correctas?",
        opts: [
          "Morgens trinke ich immer Kaffee.",
          "Manchmal ich lese die Zeitung.",
          "Ich lese oft die Zeitung.",
          "Ich trinke nie nicht Kaffee.",
          "Jeden Tag frühstücke ich um acht."
        ],
        why: "La frase 2 pone el sujeto antes del verbo después de <i>manchmal</i>; la frase 4 duplica la negación, porque <i>nie</i> ya es negativo."
      },
      {
        q: "Completa: «Abends ___ ich oft fern.» (Por la noche veo a menudo la televisión.)",
        hint: "fernsehen, primera persona del singular",
        why: "El verbo <i>fernsehen</i> se divide: <b>sehe</b> en segundo lugar, <i>fern</i> al final."
      },
      {
        q: "Une cada adverbio con su significado.",
        pairs: ["siempre", "a menudo", "a veces", "nunca"]
      },
      {
        tr: "Por la noche a veces veo la televisión.",
        why: "Con <i>Abends</i> en primera posición el verbo sigue enseguida: <i>sehe ich</i>, luego el adverbio, luego <i>fern</i> al final."
      },
      {
        q: "Completa las dos palabras que faltan.",
        tr: "Por la mañana siempre bebo café.",
        why: "Con <i>morgens</i> en primera posición el verbo va en segundo lugar: <i>trinke ich</i>. El adverbio <i>immer</i> sigue al sujeto."
      },
      {
        tr: "Por la noche veo a menudo la televisión.",
        why: "También son correctas <i>Ich sehe abends oft fern</i> y <i>Oft sehe ich abends fern</i>: el adverbio puede cambiar de sitio, el verbo se queda en segundo lugar."
      },
      {
        tr: "Por la mañana siempre bebo café, por la noche a veces té.",
        why: "En <i>Kaffee</i> la doble <b>ff</b> indica que la <b>a</b> es breve; <i>immer</i> tiene la <b>i</b> corta. En <i>manchmal</i> el <b>ch</b> es el mismo sonido que en <i>ich</i>."
      },
      {
        tr: "Por la mañana siempre bebo café y leo el periódico.",
        why: "<i>Zeitung</i>: la <b>z</b> se lee «ts» y la <b>ei</b> «ai». <i>Lese</i> tiene la <b>s</b> sonora."
      }
    ]
  },
  "lesson:a1-u05-test": {
    theme: "Prueba",
    title: "Prueba de la unidad 5",
    objectives: ["comprobar verbos separables, hora y preposiciones de tiempo, modales y adverbios de frecuencia"],
    theory: [
      {
        p: "Diez preguntas sobre toda la unidad. Se aprueba con el 70%. No mires las lecciones mientras respondes: si no recuerdas algo, es mejor volver a repasar."
      }
    ],
    exercises: [
      {
        tr: "Presente de aufstehen: ich, er/sie/es, wir.",
        why: "El prefijo va al final: <i>stehe auf</i>, <i>steht auf</i>, <i>stehen auf</i>."
      },
      {
        tr: "Presente de müssen: ich, du, er/sie/es, wir.",
        why: "<i>Muss</i>, <i>musst</i>, <i>muss</i>, <i>müssen</i>: la 1ª y la 3ª persona del singular son iguales."
      },
      {
        q: "Completa: «Der Film beginnt ___ acht Uhr.» (a las ocho)",
        hint: "con la hora exacta",
        why: "Con la hora se usa <b>um</b>."
      },
      {
        q: "Completa: «Ich kann nicht kommen, ich ___ arbeiten.» (tengo que)",
        hint: "tener que, primera persona del singular",
        why: "<i>Ich muss</i>, sin desinencia."
      },
      {
        q: "Completa: «Morgens ___ ich immer Kaffee.» (bebo)",
        hint: "trinken, primera persona del singular",
        why: "Después de <i>morgens</i> el verbo sigue enseguida: <b>trinke</b>."
      },
      {
        q: "¿Qué frase es correcta?",
        opts: ["Ich aufstehe um sieben.", "Ich stehe um sieben auf.", "Ich auf stehe um sieben."],
        why: "El prefijo <i>auf</i> va al final de la frase: <b>Ich stehe um sieben auf.</b>"
      },
      {
        q: "«Es ist halb zehn.» ¿Qué hora es?",
        opts: ["las nueve y media", "las diez y media", "las diez"],
        why: "<i>Halb zehn</i> son las nueve y media, media hora antes de las diez."
      },
      {
        tr: "Hoy no puedo venir.",
        why: "El modal va en segundo lugar, <i>nicht</i> y el infinitivo al final."
      },
      {
        tr: "Tengo que levantarme a las siete y media.",
        why: "En esta frase el modal es <i>muss</i> y el infinitivo <i>aufstehen</i> va al final, entero. Para «las siete y media» se dice <i>halb acht</i>."
      },
      {
        tr: "Por la noche a veces veo la televisión.",
        why: "Después de <i>Abends</i> el verbo viene enseguida; <i>fern</i> cierra la frase."
      }
    ]
  },
  "unit:a1-u06": {
    title: "En la ciudad",
    grammarNote: "mit, zu, bei, aus, von · dativo · ¿wo? con in, an, neben · imperativo de cortesía · es gibt"
  },
  "lesson:a1-u06-l1": {
    theme: "Medios de transporte",
    title: "Medios y destinos: mit dem Bus, zum Bahnhof",
    objectives: [
      "decir en qué medio te desplazas con mit + dativo",
      "decir adónde vas con zu + dativo: zum Bahnhof, zur Schule",
      "usar el artículo en dativo: dem, der, dem, den"
    ],
    theory: [
      {
        h: "Mit y zu llevan dativo",
        p: "Las preposiciones <strong>mit</strong> (con, en el sentido de medio de transporte) y <strong>zu</strong> (hacia un lugar o una persona) llevan <strong>dativo</strong>. El artículo cambia en todos los géneros: masculino y neutro <strong>dem</strong>, femenino <strong>der</strong>, plural <strong>den</strong>. Ejemplos: <em>Ich fahre mit dem Bus</em> (masculino), <em>mit der Straßenbahn</em> (femenino), <em>mit dem Auto</em> (neutro). En plural el nombre suele añadir además una <strong>-n</strong>: <em>mit den Bussen</em>, <em>mit den Zügen</em>, <em>mit den Fahrrädern</em>. No la añade si el plural ya termina en <strong>-n</strong> o en <strong>-s</strong>: <em>mit den Autos</em>, <em>mit den Straßenbahnen</em>."
      },
      {
        h: "zu dem pasa a zum, zu der pasa a zur",
        p: "Con <em>zu</em> el artículo se funde: <strong>zu dem → zum</strong>, <strong>zu der → zur</strong>. Se dice <em>Ich gehe zum Bahnhof</em> y <em>Sie geht zur Schule</em>. Para decir que se va andando hay una expresión fija, <strong>zu Fuß</strong>: <em>Wir gehen zu Fuß zur Haltestelle</em>."
      },
      {
        contrast: "En español el medio se dice con <em>en</em> (<em>en autobús</em>, <em>en tren</em>, <em>en coche</em>, <em>en bici</em>) y el destino con <em>a</em> (<em>a la estación</em>, <em>al colegio</em>). En los ejemplos de esta lección el medio se dice con <strong>mit</strong> (<em>mit dem Bus</em>, <em>mit dem Zug</em>) y el destino con <strong>zu</strong> (otros destinos pueden pedir <em>nach</em> o <em>in</em>, como verás). Hay un paralelo útil: igual que <em>a + el → al</em>, en alemán <em>zu dem → zum</em>. Pero el español no cambia el artículo según un caso, y en alemán <em>der Bus</em> pasa a <em>dem Bus</em> después de <em>mit</em>. <em>Im Bus fahren</em> existe, pero subraya que estás a bordo. Cuidado con los géneros: <em>la estación</em> es femenino, pero <em>der Bahnhof</em> es masculino; <em>el tranvía</em> es masculino, pero <em>die Straßenbahn</em> es femenino; <em>el coche</em> es masculino, pero <em>das Auto</em> es neutro; <em>la bici</em> es <em>das Fahrrad</em>, neutro."
      },
      {
        trap: "Para «ir en autobús» lo habitual es <em>mit dem Bus fahren</em>; <em>im Bus fahren</em> pone el acento en que estás a bordo. No uses la forma del nominativo: «mit der Bus» y «mit die Straßenbahn» son incorrectas. Después de <em>mit</em> y <em>zu</em> el artículo va en dativo: <em>mit dem Bus</em>, <em>mit der Straßenbahn</em>, <em>zum Bahnhof</em>, <em>zur Schule</em>."
      },
      {
        tip: "Aprende cada medio de transporte con su frase entera: <em>mit dem Bus</em>, <em>mit der U-Bahn</em>, <em>mit dem Zug</em>, <em>mit dem Fahrrad</em>. Así el artículo correcto llega junto con el nombre."
      }
    ],
    grammar: {
      title: "mit y zu con dativo",
      note: "Después de <b>mit</b> y <b>zu</b> el artículo va en dativo: <b>dem</b> (m. y n.), <b>der</b> (f.), <b>den</b> + -n (plural). <b>zu dem → zum</b>, <b>zu der → zur</b>.",
      table: {
        head: ["género", "mit + dativo", "zu + dativo"],
        rows: [
          ["masculino", "mit dem Bus", "zum Bahnhof"],
          ["femenino", "mit der Straßenbahn", "zur Schule"],
          ["neutro", "mit dem Auto", "zum Kino"],
          ["plural", "mit den Bussen", "zu den Haltestellen"]
        ]
      },
      examples: [
        { tr: "Voy en autobús.", note: "mit dem Bus: masculino" },
        { tr: "Vas en tranvía.", note: "mit der Straßenbahn: femenino; fährst, con cambio de vocal" },
        { tr: "Vamos en coche.", note: "mit dem Auto: neutro" },
        { tr: "Voy a la estación.", note: "zum = zu dem" },
        { tr: "Ella va al colegio.", note: "zur = zu der" },
        { tr: "Vamos a pie a la parada.", note: "zu Fuß: expresión fija" }
      ]
    },
    vocab: [
      "con, por medio de",
      "a, hacia (un lugar o una persona)",
      "a pie",
      "el autobús",
      "el tranvía",
      "el metro",
      "el tren",
      "el coche",
      "la bicicleta",
      "la estación",
      "la parada",
      "el colegio"
    ],
    exercises: [
      {
        q: "¿Qué frase es correcta?",
        opts: ["Ich fahre mit der Bus.", "Ich fahre mit dem Bus.", "Ich fahre mit den Bus."],
        why: "<i>Der Bus</i> es masculino: después de <i>mit</i> el artículo es <b>dem</b>."
      },
      {
        q: "Completa: «Wir fahren mit ___ Auto.»",
        hint: "das Auto, artículo determinado en dativo",
        why: "<i>Das Auto</i> es neutro: después de <i>mit</i> se dice <b>dem</b>."
      },
      {
        q: "Completa: «Ich fahre mit ___ U-Bahn.»",
        hint: "die U-Bahn, artículo determinado en dativo",
        why: "<i>Die U-Bahn</i> es femenino: en dativo, <b>der</b>."
      },
      {
        q: "Completa: «Ich gehe ___ Bahnhof.»",
        hint: "zu + dem, en la forma contracta",
        why: "<i>Zu dem</i> se funde en <b>zum</b>. También es correcto <i>zu dem Bahnhof</i>, pero casi siempre se dice <i>zum</i>."
      },
      {
        q: "Elige el artículo correcto para cada nombre.",
        why: "<i>Bahnhof</i> y <i>Zug</i> son masculinos, <i>Haltestelle</i> y <i>Schule</i> femeninos, <i>Auto</i> y <i>Fahrrad</i> neutros. Ojo: <i>la estación</i> es femenino en español, pero <i>der Bahnhof</i> es masculino.",
        items: ["estación", "parada", "coche", "tren", "colegio", "bicicleta"]
      },
      {
        tr: "Vamos en tren.",
        why: "Las dos posiciones son correctas: <i>Wir fahren mit dem Zug</i> y, con inversión, <i>Mit dem Zug fahren wir</i>. El verbo sigue en segunda posición."
      },
      {
        q: "Completa las dos palabras que faltan.",
        tr: "Va al colegio en autobús.",
        why: "El medio se dice con <i>mit</i> + dativo (<i>dem Bus</i>), el destino con <i>zu</i> + dativo (<i>zu der → zur Schule</i>)."
      },
      {
        tr: "Voy a la estación en autobús.",
        why: "También son correctas las otras posiciones: <i>Ich fahre zum Bahnhof mit dem Bus</i>, <i>Mit dem Bus fahre ich zum Bahnhof</i> y <i>Zum Bahnhof fahre ich mit dem Bus</i>. Con un medio de transporte se usa <i>fahren</i>, no <i>gehen</i>."
      },
      {
        tr: "Voy al colegio en autobús.",
        why: "<i>Schule</i>: la <b>sch</b> suena como la «sh» inglesa (/ʃ/), un sonido que el español no tiene, y la <b>u</b> es larga. En <i>fahre</i> la <b>h</b> no se pronuncia y alarga la <b>a</b>."
      },
      {
        tr: "Vamos a la estación en tranvía.",
        why: "<i>Straßenbahn</i>: la <b>ß</b> es una «s» sorda (como en «casa») y la <b>str</b> inicial suena «sht-r». En <i>Bahnhof</i> la <b>h</b> tras la <b>a</b> alarga la vocal; la <b>h</b> de <i>hof</i> se aspira ligeramente."
      }
    ]
  },
  "lesson:a1-u06-l2": {
    theme: "Desplazarse y procedencia",
    title: "gehen, fahren, kommen: aus, von, bei",
    objectives: [
      "distinguir gehen (a pie) de fahren (con un medio de transporte)",
      "decir de dónde vienes con aus y von, y dónde estás con bei",
      "decir a qué ciudad vas con nach"
    ],
    theory: [
      {
        h: "Gehen, fahren, kommen",
        p: "<strong>Gehen</strong> indica por lo general desplazarse a pie, <strong>fahren</strong> desplazarse con un medio (autobús, tren, bici, coche). Con <em>fahren</em> la vocal cambia en la 2.ª y la 3.ª persona del singular: <em>ich fahre</em>, <em>du f<strong>ä</strong>hrst</em>, <em>er f<strong>ä</strong>hrt</em>. <em>Gehen</em> y <em>kommen</em> son regulares: <em>ich gehe</em>, <em>du gehst</em>, <em>wir kommen</em>. Los verbos separables <em>einsteigen</em> y <em>aussteigen</em> ponen el prefijo al final: <em>Ich steige am Bahnhof aus.</em>"
      },
      {
        h: "Aus, von y bei: ¿de dónde?",
        p: "<strong>Aus</strong> indica la procedencia de un lugar o de un país (<em>Ich komme aus Italien</em>, <em>Sie kommt aus dem Supermarkt</em>). <strong>Von</strong> indica el punto de partida (<em>Er kommt vom Bahnhof</em>, <em>vom Arzt</em>). <strong>Bei</strong> indica dónde se está, en un lugar o en casa de alguien (<em>Anna ist beim Arzt</em>). También <em>von dem → vom</em> y <em>bei dem → beim</em> se funden."
      },
      {
        h: "Nach para las ciudades, in para donde se vive",
        p: "Para decir adónde se va, con el nombre de una ciudad o de un país <strong>sin artículo</strong> se usa <strong>nach</strong>: <em>Ich fahre nach Berlin</em>, <em>Wir fahren nach Italien</em>. Para decir dónde se vive o se está se usa, en cambio, <strong>in</strong>: <em>Ich wohne in Berlin</em>. Los países con artículo, como <em>die Schweiz</em>, se tratan más adelante."
      },
      {
        contrast: "El español <em>de</em> se reparte en alemán entre <em>aus</em> (<em>vengo de Roma</em>: <em>Ich komme aus Rom</em>) y <em>von</em> (<em>vengo de la estación</em>: <em>Ich komme vom Bahnhof</em>). Algo parecido pasa con <em>a</em> y <em>en</em>: <em>voy al médico</em> es <em>Ich gehe zum Arzt</em>, y <em>estoy en la consulta del médico</em> es <em>Ich bin beim Arzt</em>; con las ciudades, <em>voy a Berlín</em> es <em>nach Berlin</em> y <em>vivo en Berlín</em> es <em>in Berlin</em>. Además <em>ir</em> cubre <em>gehen</em> y <em>fahren</em>: en alemán importa el medio. Y «vivo aquí desde hace un año» se dice con <em>seit</em> y presente: <em>Ich wohne seit einem Jahr hier</em>; <em>seit Montag</em> marca un punto de partida."
      },
      {
        trap: "Para «vengo de Italia» no se dice «Ich komme von Italien»: para la procedencia de un país o de una ciudad se usa <strong>aus</strong>. Y «Ich gehe mit dem Zug» es incorrecto: con un medio de transporte se usa <em>fahren</em>, así que <em>Ich fahre mit dem Zug</em>."
      }
    ],
    grammar: {
      title: "aus, von, bei, zu: procedencia y lugar",
      note: "<b>aus</b> = procedencia de un lugar o de un país, <b>von</b> = punto de partida, <b>bei</b> = en casa de, <b>zu</b> = hacia. Todas llevan dativo.",
      table: {
        head: ["preposición", "significado", "ejemplo"],
        rows: [
          ["aus", "de (procedencia)", "Ich komme aus Italien."],
          ["von", "de (punto de partida)", "Er kommt vom Bahnhof."],
          ["bei", "en, en casa de", "Anna ist beim Arzt."],
          ["zu", "hacia", "Wir gehen zum Arzt."]
        ]
      },
      examples: [
        { tr: "Vengo de Italia.", note: "aus + país sin artículo" },
        { tr: "Vengo del supermercado.", note: "aus dem: del supermercado, de dentro" },
        { tr: "Él viene de la estación.", note: "vom = von dem" },
        { tr: "Vamos al médico.", note: "zum = zu dem" },
        { tr: "Vas al parque.", note: "fährst: cambio de vocal" },
        { tr: "Anna está en el médico.", note: "beim = bei dem" }
      ]
    },
    vocab: [
      "ir (a pie)",
      "ir (con un medio de transporte), conducir",
      "venir",
      "de (procedencia), desde dentro de",
      "de (punto de partida), desde",
      "en casa de, en (una persona)",
      "subir (a un medio de transporte)",
      "bajar (de un medio de transporte)",
      "el médico",
      "el parque",
      "el supermercado",
      "la ciudad"
    ],
    exercises: [
      {
        tr: "Presente de gehen: ich, er/sie/es, wir.",
        why: "<i>Gehen</i> es regular: <i>gehe</i>, <i>geht</i>, <i>gehen</i>."
      },
      {
        tr: "Presente de fahren: ich, du, er/sie/es, wir.",
        why: "En la 2.ª y la 3.ª persona del singular la <b>a</b> pasa a <b>ä</b>: <i>fahre</i>, <i>fährst</i>, <i>fährt</i>, <i>fahren</i>."
      },
      {
        q: "Completa: «Ich ___ aus Italien.»",
        hint: "kommen, primera persona del singular",
        why: "<i>Ich komme</i>: la desinencia de la 1.ª persona es <b>-e</b>."
      },
      {
        q: "Completa: «Er ___ mit dem Zug.»",
        hint: "fahren, tercera persona del singular",
        why: "Con <i>er</i> el verbo cambia de vocal: <b>fährt</b>."
      },
      {
        q: "Completa: «Wir kommen ___ der Stadt.»",
        hint: "de dentro de un lugar, procedencia",
        why: "Para la procedencia de un lugar se usa <b>aus</b>: <i>aus der Stadt</i>."
      },
      {
        q: "¿Cómo se dice «Vengo del médico»?",
        opts: ["Ich komme aus dem Arzt.", "Ich komme vom Arzt.", "Ich komme zum Arzt."],
        why: "Para el punto de partida se usa <b>von</b> (<i>von dem → vom</i>). <i>Aus</i> vale para un lugar, no para una persona, y <i>zum</i> indica la dirección hacia, no la procedencia."
      },
      {
        q: "¿Qué frases son correctas?",
        opts: [
          "Ich fahre mit dem Zug.",
          "Ich gehe mit dem Zug.",
          "Wir gehen zu Fuß zum Park.",
          "Du kommst aus Italien.",
          "Er fahrt zum Bahnhof."
        ],
        why: "La frase 2 es incorrecta porque con un medio de transporte se usa <i>fahren</i>; la frase 5 tiene la forma equivocada de <i>fahren</i>: <i>fährt</i>."
      },
      {
        tr: "Él viene de la estación.",
        why: "También es correcta la inversión <i>Vom Bahnhof kommt er</i>. El verbo sigue en segunda posición."
      },
      {
        tr: "Vengo de Italia y voy a Berlín en tren.",
        why: "<i>Italien</i>: el acento cae en la segunda sílaba y la <b>a</b> es larga; <i>Berlin</i> se pronuncia con la <b>r</b> uvular o vibrante, ambas son pronunciaciones estándar. <i>Zug</i> empieza con la <b>z</b> «ts»."
      },
      {
        tr: "Vamos a pie al parque.",
        why: "<i>Fuß</i>: la <b>ß</b> es una «s» sorda y la <b>u</b> es larga. En <i>Park</i> la <b>k</b> final es nítida."
      }
    ]
  },
  "lesson:a1-u06-l3": {
    theme: "Preguntar el camino",
    title: "Wo ist der Bahnhof? Gehen Sie geradeaus",
    objectives: [
      "preguntar dónde está un lugar con Entschuldigung, wo ist ...?",
      "dar indicaciones con el imperativo de cortesía (Gehen Sie ..., Biegen Sie ... ab)",
      "decir dónde está algo con neben, hinter, vor + dativo"
    ],
    theory: [
      {
        h: "El imperativo de cortesía: infinitivo + Sie",
        p: "Con <strong>Sie</strong> el imperativo tiene la forma de <strong>infinitivo + Sie</strong>, con el verbo en <strong>primera posición</strong>: <em>Gehen Sie geradeaus!</em>, <em>Nehmen Sie die erste Straße rechts!</em> Los verbos separables mandan el prefijo al final: <em>Biegen Sie links <strong>ab</strong>.</em> <em>Sein</em> es la excepción: <strong>Seien Sie</strong> (<em>Seien Sie bitte pünktlich!</em>)."
      },
      {
        h: "¿Dónde está? wo? con dativo",
        p: "Para preguntar dónde está un lugar: <em>Entschuldigung, wo ist der Bahnhof?</em> Para responder hacen falta las preposiciones de lugar. Con <strong>wo?</strong>, in, an, auf, vor, hinter, neben llevan <strong>dativo</strong>: <em>Der Bahnhof ist neben dem Rathaus</em>, <em>Die Apotheke ist hinter der Kreuzung</em>, <em>Der Bus hält vor dem Rathaus</em>, <em>Wir sind am Bahnhof</em> (<em>an dem → am</em>) y <em>Das Café ist in der Stadt</em>."
      },
      {
        contrast: "En español la forma de cortesía usa el subjuntivo en tercera persona (<em>vaya recto</em>, <em>gire a la izquierda</em>, <em>tome la primera a la derecha</em>). En alemán, con <em>Sie</em>, se usa normalmente la forma del infinitivo seguida de <em>Sie</em>; con verbos separables, el prefijo va al final. <em>Sein</em> es irregular: <em>Seien Sie</em>. <em>Perdone</em> o <em>disculpe</em> se dice <em>Entschuldigung</em> (o <em>Entschuldigen Sie</em>), <em>todo recto</em> es <em>geradeaus</em>, <em>a la derecha</em> es <em>rechts</em> y <em>a la izquierda</em> es <em>links</em>, sin preposición. Las preposiciones de lugar también cambian algo respecto al español: <em>al lado del ayuntamiento</em> no modifica el artículo según el caso, pero <em>neben dem Rathaus</em> lo pone en dativo. Cuidado con el género: <em>el ayuntamiento</em> es masculino, pero <em>das Rathaus</em> es neutro; <em>el cruce</em> es masculino, pero <em>die Kreuzung</em> es femenino."
      },
      {
        trap: "El imperativo con <em>Sie</em> tiene la misma forma que una pregunta de sí o no: <em>Gehen Sie geradeaus!</em> o <em>Gehen Sie geradeaus?</em> Los distinguen el contexto, la entonación y la puntuación. No es, en cambio, <em>Sie gehen geradeaus</em> (sujeto antes del verbo), que es una oración enunciativa. Y después de <em>neben</em>, <em>hinter</em> y <em>vor</em> con <em>wo?</em> no va el acusativo: «neben den Bahnhof» es incorrecto, se dice <em>neben dem Bahnhof</em>."
      },
      {
        tip: "Para recordar las tres frases que hacen falta en la calle: <em>Entschuldigung, wo ist ...?</em>, <em>Gehen Sie geradeaus</em>, <em>Biegen Sie links / rechts ab</em>. Con estas tres te orientas en cualquier ciudad de habla alemana."
      }
    ],
    grammar: {
      title: "Imperativo de cortesía y wo? con dativo",
      note: "<b>Imperativo con Sie:</b> infinitivo + <b>Sie</b>, verbo en primera posición. <b>Wo?</b> con in, an, vor, hinter, neben: dativo.",
      table: {
        head: ["infinitivo", "imperativo", "significado"],
        rows: [
          ["gehen", "Gehen Sie geradeaus.", "vaya todo recto"],
          ["abbiegen", "Biegen Sie links ab.", "gire a la izquierda"],
          ["nehmen", "Nehmen Sie die erste Straße rechts.", "tome la primera a la derecha"],
          ["sein", "Seien Sie bitte pünktlich.", "sea puntual, por favor"]
        ]
      },
      examples: [
        { tr: "Vaya todo recto.", note: "Gehen Sie: verbo, luego Sie" },
        { tr: "Gire a la izquierda.", note: "abbiegen: ab al final" },
        { tr: "Tome la primera calle a la derecha.", note: "nehmen: la primera calle, die erste Straße" },
        { tr: "Perdone, ¿dónde está la estación?" },
        { tr: "La estación está al lado del ayuntamiento.", note: "neben dem: dativo neutro" },
        { tr: "La farmacia está detrás del cruce.", note: "hinter der: dativo femenino" }
      ]
    },
    vocab: [
      "todo recto",
      "a la izquierda",
      "a la derecha",
      "girar, doblar",
      "perdone, disculpe",
      "al lado de",
      "detrás de",
      "delante de",
      "la calle",
      "el cruce",
      "el ayuntamiento",
      "la farmacia"
    ],
    exercises: [
      {
        q: "¿Cómo le dices a alguien que gire a la izquierda con la forma de cortesía?",
        opts: ["Sie biegen links ab.", "Biegen Sie links ab.", "Biegen links Sie ab."],
        why: "Verbo en primera posición, luego <i>Sie</i>, y el prefijo <b>ab</b> al final: <b>Biegen Sie links ab.</b> La primera opción es una oración enunciativa."
      },
      {
        q: "¿Cómo preguntas dónde está la estación?",
        opts: ["Wo ist der Bahnhof?", "Wo der Bahnhof ist?", "Wo ist den Bahnhof?"],
        why: "En una pregunta con <i>wo</i> el verbo va en segunda posición: <b>Wo ist der Bahnhof?</b> Con <i>sein</i> el nombre se queda en nominativo."
      },
      {
        q: "Completa: «___ Sie geradeaus.» (Vaya)",
        hint: "gehen, imperativo de cortesía, con mayúscula inicial",
        why: "El imperativo de cortesía empieza con el infinitivo: <b>Gehen</b> Sie geradeaus."
      },
      {
        q: "Relaciona cada palabra con su significado.",
        pairs: ["todo recto", "a la izquierda", "a la derecha", "detrás de"]
      },
      {
        q: "Completa las dos palabras que faltan.",
        tr: "La farmacia está detrás del ayuntamiento y la estación está al lado de la farmacia.",
        why: "<i>Hinter dem Rathaus</i> (dativo neutro) y <i>neben der Apotheke</i> (dativo femenino): con <i>wo?</i> estas preposiciones llevan dativo."
      },
      {
        tr: "Vaya todo recto y gire a la izquierda.",
        why: "Los dos imperativos llevan cada uno su <i>Sie</i>. El prefijo <i>ab</i> de <i>abbiegen</i> cierra la frase."
      },
      {
        q: "Alguien te pregunta por el camino: responde a sus preguntas.",
        setting: "En el centro ayudas a alguien a encontrar la estación y la farmacia.",
        lines: [
          { tr: "Perdone, ¿dónde está la estación?" },
          { tr: "Explica el camino: todo recto y luego a la izquierda.", answerTr: "Vaya todo recto y luego a la izquierda." },
          { tr: "¡Gracias! ¿Y dónde está la farmacia?" },
          { tr: "Responde que la farmacia está al lado del ayuntamiento.", answerTr: "Está al lado del ayuntamiento." }
        ]
      },
      {
        tr: "Perdone, ¿dónde está la farmacia?",
        why: "Son correctas tanto <i>Entschuldigung</i> como <i>Entschuldigen Sie</i> (más formal). La pregunta lleva el verbo en segunda posición: <i>wo ist</i>."
      },
      {
        tr: "Vaya todo recto y gire a la derecha.",
        why: "En <i>geradeaus</i> la <b>g</b> es oclusiva y la <b>au</b> es un diptongo /aʊ̯/: se pasa de la <b>a</b> a una <b>u</b> breve en la misma sílaba. En <i>biegen</i> la <b>ie</b> es una «i» larga."
      },
      {
        tr: "Perdone, ¿dónde está la farmacia?",
        why: "<i>Entschuldigung</i>: la <b>sch</b> suena como la «sh» inglesa (/ʃ/). En <i>Apotheke</i> la <b>th</b> se lee como una «t» simple."
      }
    ]
  },
  "lesson:a1-u06-l4": {
    theme: "El barrio",
    title: "Es gibt, es gibt keinen",
    objectives: [
      "decir qué hay en la ciudad con es gibt + acusativo",
      "decir que algo no hay con es gibt keinen / keine / kein",
      "preguntar Gibt es hier ...?"
    ],
    theory: [
      {
        h: "Es gibt: «hay»",
        p: "Para decir que algo existe se usa <strong>es gibt</strong>. La forma es <strong>siempre la misma</strong>, en singular y en plural: <em>Es gibt einen Park</em>, <em>Es gibt zwei Kinos</em>. Después de <em>es gibt</em> el nombre va en <strong>acusativo</strong>, así que solo cambia el masculino: <em>einen Park</em> (m.), <em>eine Bäckerei</em> (f.), <em>ein Café</em> (n.). Para preguntar: <em>Gibt es hier ein Hotel?</em>"
      },
      {
        h: "Decir que algo no hay",
        p: "Para negar se usa <strong>kein</strong>, que sigue el mismo esquema que <em>ein</em>: <em>Es gibt keinen Supermarkt</em> (m.), <em>keine Bank</em> (f.), <em>kein Museum</em> (n.). En los ejemplos que se tratan aquí, con <em>es gibt</em> la negación es <em>kein</em>, no <em>nicht</em> (<em>nicht</em> aparece en otros usos, como <em>Das gibt es nicht</em>)."
      },
      {
        contrast: "Aquí el español ayuda: <em>hay</em> tampoco cambia con el número (<em>hay un parque</em>, <em>hay dos cines</em>), igual que <em>es gibt</em>. Y <em>no hay ningún supermercado</em> se parece a <em>Es gibt keinen Supermarkt</em>: <em>ningún</em> hace el papel de <em>kein</em>. Lo nuevo es que en alemán el nombre va en acusativo y <em>kein</em> cambia con el género (<em>keinen</em>, <em>keine</em>, <em>kein</em>). Y el género alemán no siempre coincide con el español: <em>el café</em> es masculino, pero <em>das Café</em> es neutro; <em>el cine</em> es masculino, <em>das Kino</em> es neutro; <em>el banco</em> es masculino, <em>die Bank</em> es femenino; <em>el museo</em> es masculino, <em>das Museum</em> es neutro; <em>la panadería</em> y <em>la iglesia</em> son femeninos en ambas lenguas: <em>die Bäckerei</em>, <em>die Kirche</em>."
      },
      {
        trap: "<em>Es gibt</em> suele introducir algo nuevo: <em>Es gibt ein Café neben dem Rathaus</em>. Para decir dónde está una cosa ya conocida se usa, en cambio, <em>sein</em>: <em>Wo ist das Café? Es ist neben dem Rathaus.</em> No digas «Es gibt ein Bäckerei»: <em>Bäckerei</em> es femenino, así que <em>eine Bäckerei</em>. Y no digas «Es gibt ein Park»: el masculino en acusativo lleva <em>einen</em>."
      },
      {
        tip: "Para saber qué hay en un barrio nuevo, pregunta: <em>Gibt es hier ein Café / einen Supermarkt / eine Bank in der Nähe?</em> Recuerda <em>-en</em> solo para el masculino."
      }
    ],
    grammar: {
      title: "es gibt con acusativo",
      note: "<b>Es gibt</b> + acusativo: <b>einen</b> (m.), <b>eine</b> (f.), <b>ein</b> (n.). La negación es <b>keinen</b>, <b>keine</b>, <b>kein</b>. La forma <i>es gibt</i> no cambia en plural.",
      table: {
        head: ["género", "afirmativo", "negativo"],
        rows: [
          ["masculino", "Es gibt einen Park.", "Es gibt keinen Supermarkt."],
          ["femenino", "Es gibt eine Bäckerei.", "Es gibt keine Bank."],
          ["neutro", "Es gibt ein Café.", "Es gibt kein Museum."]
        ]
      },
      examples: [
        { tr: "Hay un parque aquí cerca.", note: "einen: masculino en acusativo" },
        { tr: "Hay una panadería aquí.", note: "eine: femenino" },
        { tr: "Hay un café al lado del ayuntamiento.", note: "ein: neutro" },
        { tr: "¿Hay un hotel aquí?", note: "pregunta: verbo en primera posición" },
        { tr: "Aquí no hay ningún supermercado.", note: "keinen: negación del masculino" },
        { tr: "Aquí cerca no hay ningún banco.", note: "keine: negación del femenino" }
      ]
    },
    vocab: [
      "hay",
      "aquí",
      "cerca, aquí cerca",
      "el café, la cafetería",
      "el cine",
      "la panadería",
      "el restaurante",
      "el banco",
      "el museo",
      "el hotel",
      "la biblioteca",
      "la iglesia"
    ],
    exercises: [
      {
        q: "¿Qué frase es correcta?",
        opts: ["Es gibt ein Park hier.", "Es gibt einen Park hier.", "Es gibt eine Park hier."],
        why: "<i>Der Park</i> es masculino y después de <i>es gibt</i> hace falta el acusativo: <b>einen Park</b>."
      },
      {
        q: "Completa: «Es gibt ___ Supermarkt in der Nähe.»",
        hint: "der Supermarkt, artículo indeterminado en acusativo",
        why: "<i>Der Supermarkt</i> es masculino, acusativo: <b>einen</b>."
      },
      {
        q: "Completa: «Es gibt ___ Bank hier.» (ningún)",
        hint: "die Bank, negación",
        why: "<i>Die Bank</i> es femenino: la negación es <b>keine</b>."
      },
      {
        q: "Completa: «___ es hier ein Café?»",
        hint: "pregunta: ¿hay ...?",
        why: "En una pregunta de sí o no el verbo va en primera posición: <b>Gibt</b> es hier ein Café?"
      },
      {
        q: "Relaciona cada palabra con su significado.",
        pairs: ["el café, la cafetería", "la panadería", "el cine", "la iglesia"]
      },
      {
        tr: "Aquí no hay ningún supermercado.",
        why: "También son correctas <i>Es gibt keinen Supermarkt hier</i> y, con inversión, <i>Hier gibt es keinen Supermarkt</i>. El verbo <i>gibt</i> sigue en segunda posición."
      },
      {
        q: "Completa las dos palabras que faltan.",
        tr: "Hay una panadería y un parque aquí.",
        why: "<i>Bäckerei</i> es femenino (<b>eine</b>), <i>Park</i> masculino (<b>einen</b>): solo el masculino cambia en acusativo."
      },
      {
        q: "Traduce: «En la ciudad hay un cine, pero no hay ningún museo.»",
        why: "Después de <i>es gibt</i>: <i>ein Kino</i> es neutro (<i>ein</i>), la negación de <i>Museum</i> (neutro) es <i>kein</i>. También son correctas las otras posiciones con la misma estructura."
      },
      {
        tr: "Hay una panadería y un parque aquí cerca.",
        why: "<i>Bäckerei</i>: la <b>ä</b> suena como una «e» abierta y la <b>ck</b> como «k». En <i>Nähe</i> la <b>h</b> no se pronuncia y alarga la vocal; la <b>ä</b> es larga."
      },
      {
        tr: "¿Hay un hotel aquí?",
        why: "<i>Hotel</i> lleva el acento en la segunda sílaba: /hoˈtɛl/. En <i>gibt</i> la <b>g</b> es oclusiva."
      }
    ]
  },
  "lesson:a1-u06-test": {
    theme: "Prueba",
    title: "Prueba de la unidad 6",
    objectives: ["comprobar medios de transporte, dativo, indicaciones, wo? y es gibt"],
    theory: [
      {
        p: "Diez preguntas sobre toda la unidad. Se aprueba con el 70 %. No repases las lecciones mientras respondes: si no recuerdas algo, es mejor volver a repasar."
      }
    ],
    exercises: [
      {
        tr: "Presente de fahren: ich, du, er/sie/es, wir.",
        why: "<i>Fahre</i>, <i>fährst</i>, <i>fährt</i>, <i>fahren</i>: la <b>a</b> pasa a <b>ä</b> en la 2.ª y 3.ª persona del singular."
      },
      {
        q: "Completa: «Ich fahre mit ___ Bus.»",
        hint: "der Bus, artículo determinado en dativo",
        why: "<i>Der Bus</i> es masculino: después de <i>mit</i> se dice <b>dem</b>."
      },
      {
        q: "Completa: «Wir gehen ___ Schule.»",
        hint: "zu + der, en la forma contracta",
        why: "<i>Zu der</i> se funde en <b>zur</b>."
      },
      {
        q: "Completa: «Ich komme ___ Italien.»",
        hint: "procedencia de un país",
        why: "Para la procedencia de un país se usa <b>aus</b>."
      },
      {
        q: "Completa: «Die Apotheke ist ___ dem Rathaus.» (al lado)",
        hint: "al lado de",
        why: "<b>Neben</b> + dativo: <i>neben dem Rathaus</i>."
      },
      {
        q: "Completa: «___ Sie die erste Straße links.» (Tome)",
        hint: "nehmen, imperativo de cortesía, con mayúscula inicial",
        why: "El imperativo de cortesía empieza con el infinitivo: <b>Nehmen</b> Sie die erste Straße links."
      },
      {
        q: "Elige el artículo correcto para cada nombre.",
        why: "<i>Rathaus</i> es neutro, <i>Kreuzung</i> y <i>Apotheke</i> son femeninos, <i>Bahnhof</i> es masculino.",
        items: ["ayuntamiento", "cruce", "estación", "farmacia"]
      },
      {
        q: "¿Cómo se dice «No hay ningún supermercado»?",
        opts: ["Es gibt kein Supermarkt.", "Es gibt keinen Supermarkt.", "Es gibt nicht Supermarkt."],
        why: "<i>Der Supermarkt</i> es masculino en acusativo: <b>keinen</b>."
      },
      {
        tr: "Perdone, ¿dónde está la estación?",
        why: "<i>Entschuldigung</i>: la <b>sch</b> suena como la «sh» inglesa (/ʃ/); en <i>Bahnhof</i> la <b>h</b> tras la <b>a</b> alarga la vocal."
      },
      {
        tr: "Vaya todo recto y luego a la izquierda.",
        why: "<i>Geradeaus</i>: la <b>g</b> es oclusiva y la <b>au</b> es un diptongo /aʊ̯/: se pasa de la <b>a</b> a una <b>u</b> breve en la misma sílaba. En <i>links</i> la <b>i</b> es breve."
      }
    ]
  }
});
