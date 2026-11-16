/* ============================================================
   Learner-language text (es) for data/core/a1-02.js, unit a1-u04.
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
  }
});
