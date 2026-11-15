/* ============================================================
   Textos en la lengua del alumno (es) para data/core/a1-01.js
   Las claves remiten a los id de la capa neutra; los arrays se unen
   por índice, así que su longitud debe coincidir con core.
   Lo comprueba scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("es", {
  "unit:a1-u01": {
    title: "En el café",
    grammarNote: "presente · género y plural · artículos · du y Sie"
  },
  "lesson:a1-u01-l1": {
    theme: "Vida cotidiana",
    title: "Saludos y primer pedido",
    objectives: [
      "saludar y despedirse según la hora del día",
      "pedir un café con la fórmula «einen Kaffee, bitte»",
      "conjugar heißen en presente y poner el verbo en segunda posición"
    ],
    theory: [
      {
        h: "El saludo depende de la hora, y el alemán tiene varios",
        p: "El español distingue <em>buenos días</em>, <em>buenas tardes</em> y <em>buenas noches</em>. El alemán también reparte el día, pero con otros límites: <strong>Guten Morgen</strong> por la mañana, <strong>Guten Tag</strong> desde media mañana hasta la tarde (y a menudo como saludo general), <strong>Guten Abend</strong> cuando cae la tarde. Los límites son difusos y cambian de una persona a otra. <strong>Gute Nacht</strong> no es un saludo de llegada: se dice al despedirse a última hora de la noche o al irse a dormir."
      },
      {
        h: "Hallo y Tschüss: dos palabras para el «hola» y el «adiós» informales",
        p: "Entre personas que se tratan de <em>du</em> se dice <strong>Hallo</strong> al encontrarse y <strong>Tschüss</strong> al separarse. Con desconocidos y en contextos formales se dice <strong>Guten Tag</strong> al llegar y <strong>Auf Wiedersehen</strong> al irse. En el sur de Alemania y en Austria también se oye <em>Servus</em> y <em>Grüß Gott</em>, en Suiza <em>Grüezi</em>: los entenderás enseguida, pero para empezar <em>Guten Tag</em> sirve en todas partes. <em>Tschüss</em> se pronuncia con <em>tsch</em> (como la <em>ch</em> de «chico») y una <em>ü</em> alemana (véase abajo)."
      },
      {
        contrast: "En español <em>buenas noches</em> sirve para saludar al llegar de noche y también para despedirse. En alemán esas dos funciones se separan: al llegar por la noche se dice <em>Guten Abend</em>, y <em>Gute Nacht</em> es solo una despedida. El error típico es decir <em>Gute Nacht</em> al entrar en un local por la noche, como si fuera «buenas noches». Y al revés: <em>Guten Tag</em> cubre buena parte de la mañana y de la tarde, y es el saludo neutro de todos los días, no uno rígido."
      },
      {
        h: "El verbo va en segunda posición",
        p: "En la oración afirmativa el verbo conjugado ocupa la <strong>segunda posición</strong>, sea lo que sea lo que venga antes: <em>Ich trinke Tee</em>, pero también <em>Heute trinke ich Tee</em>, donde el sujeto pasa detrás del verbo. La primera posición puede ocuparla una sola palabra o un grupo de palabras, pero no dos elementos separados."
      },
      {
        contrast: "En español el pronombre sujeto casi siempre se omite: <em>Me llamo Ana</em>, <em>Hablo alemán</em>. En alemán no se puede: <em>Ich heiße Anna</em>, <em>Ich spreche Deutsch</em>. En una oración declarativa el sujeto tiene que estar expresado: si no hay un nombre (<em>Der Kaffee ist heiß</em>), hace falta el pronombre, porque las terminaciones del verbo no bastan para identificar a la persona (<em>heißt</em> sirve para <em>du</em>, <em>er</em> e <em>ihr</em>). Otra diferencia: <em>me llamo</em> es reflexivo, pero <em>ich heiße</em> no lleva ningún <em>mich</em>."
      },
      {
        h: "Pronunciación: seis hábitos que hay que cambiar",
        list: [
          "<b>z</b> se lee <em>ts</em>, como en «tsunami»: <em>Zucker</em>, <em>zwei</em>; no suena como la <em>z</em> española de «zapato» ni como una <em>s</em>",
          "<b>ei</b> se lee <em>ai</em> (<em>heißen</em> suena «háisen», con una <em>h</em> aspirada suave y una <em>s</em> sorda), mientras que <b>ie</b> es una <em>i</em> larga (<em>Wie</em> suena «vi»)",
          "<b>w</b> se lee como una <em>v</em> pronunciada con los dientes sobre el labio inferior (<em>Wasser</em> suena «vásser»), no como una <em>b</em>; la <b>v</b> alemana en palabras nativas suena a menudo como <em>f</em> (<em>Vater</em>)",
          "una <b>s</b> simple al comienzo de palabra o de sílaba ante vocal es sonora, como la <em>s</em> de «mismo» (<em>Saft</em>, <em>Rose</em>); al final de palabra es sorda (<em>Eis</em>), y lo mismo les pasa a <b>b</b>, <b>d</b>, <b>g</b> finales, que suenan como <em>p</em>, <em>t</em>, <em>k</em> (<em>Abend</em> acaba en «t»); <b>ß</b> y <b>ss</b> son sordas: <em>heißen</em>, <em>Tschüss</em>",
          "<b>ü</b> se pronuncia con la lengua de la <em>i</em> y los labios de la <em>u</em>: no existe en español",
          "<b>ch</b> tras <em>i</em> y <em>e</em> es un soplo suave, más suave que la <em>j</em> española (<em>ich</em>, <em>Rechnung</em>), y tras <em>a</em>, <em>o</em>, <em>u</em> suena más áspera, como una <em>j</em> (<em>Buch</em>); además, la <b>h</b> inicial sí se pronuncia, como una <em>j</em> muy suave (<em>Hallo</em>, <em>Haus</em>), a diferencia de la <em>h</em> muda del español"
        ]
      },
      {
        trap: "En Alemania <strong>Kaffee</strong> (la bebida) lleva normalmente el acento en la primera sílaba, KA-ffee, con una <em>e</em> final clara, mientras que <strong>Café</strong> (el local) lo lleva en la última, como el español «ca-FÉ»; en algunas variedades regionales, por ejemplo en Austria, también <em>Kaffee</em> puede llevar el acento final. No te dejes engañar por la ortografía parecida: son dos palabras distintas."
      },
      {
        tip: "<em>Einen Kaffee, bitte</em> es una fórmula completa: aprende de memoria <em>einen Kaffee</em>, <em>einen Tee</em>, <em>ein Wasser</em>, <em>eine Cola</em>. Por qué <em>einen</em> y no <em>ein</em> lo explicará otra unidad (es el caso acusativo): por ahora basta con repetir la fórmula, que con los sustantivos masculinos (<em>der Kaffee</em>, <em>der Tee</em>) usa <em>einen</em>."
      }
    ],
    grammar: {
      title: "Presente de heißen (llamarse)",
      note: "Cuidado con la <b>ß</b>: no es una B, y <em>heißen</em> suena como si llevara una doble s. La forma <em>heißt</em> es igual para <em>du</em>, <em>er/sie/es</em> e <em>ihr</em>, así que es el pronombre el que dice quién habla.",
      table: {
        head: ["persona", "forma", "ejemplo"],
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
          tr: "Buenos días, un café, por favor.",
          note: "«einen Kaffee» se aprende como bloque, véase el consejo de arriba"
        },
        { tr: "Me llamo Anna.", note: "en alemán no hay pronombre reflexivo: no se dice «mich»" },
        { tr: "¿Cómo te llamas?" },
        { tr: "¿Cómo se llama usted?", note: "forma de cortesía, véase la lección 4" },
        { tr: "Hoy tomo té.", note: "el verbo sigue en segunda posición y el sujeto pasa detrás" },
        { tr: "La cafetería es pequeña." }
      ]
    },
    vocab: [
      "buenos días (por la mañana)",
      "buenos días, buenas tardes (trato neutro, desde media mañana hasta la tarde)",
      "buenas tardes, buenas noches (al llegar, cuando anochece)",
      "buenas noches (al despedirse a última hora o antes de dormir)",
      "hola (informal)",
      "adiós, chao (informal)",
      "adiós (formal)",
      "por favor; aquí tiene; de nada",
      "gracias",
      "perdone, disculpe",
      "el café (la bebida)",
      "el té",
      "el agua",
      "el café, la cafetería (el local)"
    ],
    dialogue: [
      "¡Buenos días! ¿Qué desea?",
      "Buenos días. Un café, por favor.",
      "Con mucho gusto. ¿Algo más?",
      "No, gracias. Eso es todo.",
      "Aquí tiene. ¡Que tenga un buen día!"
    ],
    culture: {
      title: "Una mirada alemana: Café, Kaffeehaus y el café de la tarde",
      text: "<p>En una cafetería alemana tradicional te sientas a una mesa, el camarero viene a tomar nota y la cuenta se pide en la mesa con <i>Zahlen, bitte</i> o <i>Die Rechnung, bitte</i>. Es otro ritmo que el del bar español, donde el café se suele tomar de pie en la barra y se paga al irse. Hay locales con servicio en el mostrador, pero lo habitual es sentarse un rato. Normalmente se redondea la cifra dejando un pequeño extra: la propina se llama <i>Trinkgeld</i>.</p><p>En España se pide «un café» y se precisa si es solo, cortado o con leche. En Alemania, si pides <i>einen Kaffee</i>, lo normal es que te sirvan un café largo, de filtro o de máquina, más cercano a un café americano que a un café solo: el expreso se pide por su nombre, <i>einen Espresso</i>. El momento tradicional es la tarde, <i>Kaffee und Kuchen</i>, es decir, café y tarta: una pausa entre la comida y la cena que sigue siendo una tradición viva, sobre todo los domingos y en familia.</p><p>En Austria el <i>Kaffeehaus</i> vienés tiene otra lógica: puedes quedarte mucho tiempo con un solo café, que suele servirse con un vaso de agua, y leer el periódico. En Suiza el café largo se llama a menudo <i>Café crème</i>.</p>"
    },
    exercises: [
      {
        q: "Entras en una cafetería a las 9 de la mañana. ¿Qué dices?",
        opts: ["Guten Abend", "Guten Morgen", "Gute Nacht"],
        why: "<i>Guten Morgen</i> vale para la mañana. <i>Gute Nacht</i> es una despedida para última hora de la noche o para irse a dormir."
      },
      {
        q: "¿Qué frase afirmativa tiene el verbo en el lugar correcto?",
        opts: ["Ich Anna heiße.", "Heiße ich Anna.", "Ich heiße Anna."],
        why: "El verbo conjugado va en segunda posición, y el sujeto <b>ich</b> no se omite, a diferencia del español."
      },
      {
        tr: "Toda la conjugación, sin mirar.",
        why: "<i>Heißen</i> es regular: raíz <i>heiß-</i> más terminación. Para <i>du</i>, <i>er</i> e <i>ihr</i> la forma es la misma: <b>heißt</b>."
      },
      {
        q: "Completa: «Wie ___ du?» (¿Cómo te llamas?)",
        hint: "segunda persona del singular de heißen",
        why: "Con <b>du</b> la terminación es <i>-t</i>: <i>du heißt</i>. La <i>s</i> de la terminación <i>-st</i> se funde con la <i>ß</i> de la raíz."
      },
      {
        q: "Traduce: «Buenos días, un café, por favor.»",
        why: "Se dice <i>Einen Kaffee, bitte</i>: en esta fórmula <i>bitte</i> va al final (también puede ir antes de <i>einen Kaffee</i>), y <i>Kaffee</i> lleva mayúscula, como todo sustantivo alemán."
      },
      {
        tr: "Hola, me llamo Anna.",
        why: "Tras la coma empieza la oración principal: sujeto <i>ich</i> (que no se omite), luego el verbo <i>heiße</i> en segunda posición."
      },
      {
        q: "Une cada palabra con su significado.",
        pairs: ["gracias", "por favor / aquí tiene", "perdone", "adiós"]
      },
      {
        tr: "Buenas noches, un té, por favor.",
        why: "Atención a <i>Abend</i>: la <b>b</b> es sonora y la <b>d</b> final suena como una <i>t</i>. Al llegar por la noche se dice <i>Guten Abend</i>, no <i>Gute Nacht</i>."
      },
      {
        tr: "Hola, un café, por favor.",
        why: "En Alemania el acento de <i>Kaffee</i> cae normalmente en la primera sílaba: KA-ffee, no «ca-FÉ»."
      }
    ]
  },
  "lesson:a1-u01-l2": {
    theme: "Gramática básica",
    title: "Género y plural de los sustantivos",
    objectives: [
      "reconocer que el alemán tiene tres géneros: der, die, das",
      "aprender cada sustantivo junto con su artículo y su plural",
      "contar del 1 al 20"
    ],
    theory: [
      {
        h: "Tres géneros, no dos",
        p: "El español tiene masculino y femenino (<em>el</em>, <em>la</em>). El alemán añade el <strong>neutro</strong>: <strong>der</strong> (masculino), <strong>die</strong> (femenino), <strong>das</strong> (neutro). Cada sustantivo pertenece a uno de los tres, también los objetos: <em>der Tisch</em> (la mesa), <em>die Tasse</em> (la taza), <em>das Buch</em> (el libro)."
      },
      {
        contrast: "El género alemán a menudo no coincide con el español, así que no se puede adivinar por traducción. <em>El libro</em> es masculino, pero <em>das Buch</em> es neutro; <em>la silla</em> es femenino, pero <em>der Stuhl</em> es masculino; <em>el niño</em> es masculino, pero <em>das Kind</em> es neutro, y <em>das Mädchen</em> (la niña) también. A veces coincide (<em>la leche</em> y <em>die Milch</em> son femeninas, <em>el café</em> y <em>der Kaffee</em> masculinos), y justo por eso es tentador fiarse de la analogía. En español la terminación suele delatar el género (<em>-o</em>, <em>-a</em>); en alemán casi nunca. Por eso cada sustantivo se aprende con su artículo, nunca solo."
      },
      {
        h: "Algunas pistas, ninguna ley",
        list: [
          "los sustantivos con el sufijo <b>-ung</b> son femeninos, como los españoles en <em>-ción</em>: <em>die Zeitung</em>, <em>die Rechnung</em>",
          "los diminutivos con el sufijo <b>-chen</b> son neutros: <em>das Brötchen</em> (ojo: <em>der Kuchen</em> no es un diminutivo y es masculino)",
          "muchos sustantivos en <b>-e</b> son femeninos: <em>die Tasse</em>, <em>die Torte</em>",
          "las pistas tienen excepciones (<em>der Kaffee</em> acaba en -e y es masculino): <b>el artículo se aprende junto con el sustantivo</b>"
        ]
      },
      {
        h: "El plural: un solo artículo, terminaciones distintas",
        p: "En el nominativo plural el artículo determinado es siempre <strong>die</strong>, para los tres géneros (en los demás casos, que verás más adelante, cambia). En español el plural distingue género (<em>los</em>, <em>las</em>); en alemán no. El sustantivo, en cambio, toma terminaciones distintas, a veces con diéresis en la vocal (<em>Umlaut</em>): <em>die Tische</em>, <em>die Stühle</em>, <em>die Tassen</em>, <em>die Bücher</em>, <em>die Kinder</em>. Algunos sustantivos no cambian (<em>die Kuchen</em>, <em>die Brötchen</em>) y pocos toman <em>-s</em> (<em>die Cafés</em>, <em>die Kaffees</em>)."
      },
      {
        trap: "El plural no se deduce del singular: <em>der Tisch → die Tische</em>, pero <em>das Buch → die Bücher</em>. En español casi siempre basta añadir <em>-s</em> o <em>-es</em>; en alemán no. Aprende el conjunto entero, por ejemplo <b>der Tisch, die Tische</b>: por eso el vocabulario de este curso muestra el plural junto a cada sustantivo."
      },
      {
        tip: "Todos los sustantivos alemanes se escriben con <b>mayúscula</b>: <em>der Tisch</em>, no <em>der tisch</em>. En español van en minúscula, así que hay que acostumbrarse. Y la diéresis cuenta: <em>Buch</em> y <em>Bücher</em> se escriben distinto, y <em>Madchen</em> sin diéresis sería una falta, no una variante."
      },
      {
        h: "Contar del 1 al 20",
        list: [
          "<b>1-10</b>: eins, zwei, drei, vier, fünf, sechs, sieben, acht, neun, zehn",
          "<b>11-12</b>: elf, zwölf",
          "<b>13-19</b>: dreizehn, vierzehn, fünfzehn, sechzehn, siebzehn, achtzehn, neunzehn",
          "<b>20</b>: zwanzig"
        ]
      },
      {
        trap: "Atención a <em>sechzehn</em> y <em>siebzehn</em>: <em>sechs</em> pierde la <em>-s</em> y <em>sieben</em> pierde la <em>-en</em>. Y la <b>z</b> se lee siempre <em>ts</em>, no como la <em>z</em> española: <em>zwei</em> suena «tsvái», <em>zehn</em> «tsen»."
      }
    ],
    grammar: {
      title: "Género y plural",
      note: "En el nominativo plural el artículo determinado es siempre <b>die</b>.",
      table: {
        head: ["género", "singular", "plural", "español"],
        rows: [
          ["der (m)", "der Tisch", "die Tische", "mesa"],
          ["die (f)", "die Tasse", "die Tassen", "taza"],
          ["das (n)", "das Buch", "die Bücher", "libro"],
          ["das (n)", "das Kind", "die Kinder", "niño"],
          ["der (m)", "der Kuchen", "die Kuchen", "tarta, pastel"],
          ["das (n)", "das Brötchen", "die Brötchen", "panecillo"]
        ]
      },
      examples: [
        { tr: "La mesa es pequeña." },
        { tr: "Las tazas son grandes.", note: "en plural el verbo también cambia: sind" },
        { tr: "El libro es nuevo." },
        { tr: "El niño bebe leche." },
        { tr: "Tres tazas y dos pasteles, por favor.", note: "Kuchen no cambia en plural" },
        { tr: "La cuenta, por favor." }
      ]
    },
    vocab: [
      "la mesa",
      "la silla",
      "el libro",
      "la casa",
      "la taza",
      "la mujer, la señora",
      "el hombre",
      "el niño, la niña",
      "el periódico",
      "la tarta, el pastel",
      "la leche",
      "el azúcar",
      "el panecillo",
      "la cuenta"
    ],
    exercises: [
      {
        q: "¿Cuál de estos sustantivos es neutro?",
        opts: ["der Tisch", "das Buch", "die Tasse"],
        why: "<i>Das Buch</i>. En español «el libro» es masculino: el género no se traduce."
      },
      {
        q: "Plural de «die Tasse»: «die ___».",
        hint: "añade -n",
        why: "Muchos sustantivos femeninos en <i>-e</i> forman el plural en <i>-n</i>: <i>Tassen</i>."
      },
      {
        q: "Plural de «das Buch»: «die ___».",
        hint: "la u lleva diéresis y se añade -er",
        why: "<i>Bücher</i>: diéresis en la vocal y terminación <i>-er</i>. Sin diéresis sería una palabra mal escrita."
      },
      {
        q: "Elige el artículo determinado correcto.",
        why: "El género y el plural se aprenden junto con el sustantivo: <i>der Tisch</i>, <i>die Tasse</i>, <i>das Buch</i>.",
        items: ["mesa", "taza", "libro", "casa", "periódico", "hombre"]
      },
      {
        q: "En el nominativo plural el artículo determinado es siempre…",
        opts: ["der", "die", "das"],
        why: "<b>die</b> para todos los géneros en el nominativo plural: <i>die Tische</i>, <i>die Tassen</i>, <i>die Bücher</i>."
      },
      {
        q: "¿Cuáles de estos sustantivos son femeninos?",
        opts: ["die Zeitung", "der Stuhl", "die Milch", "das Kind", "die Rechnung"],
        why: "<i>Die Zeitung</i>, <i>die Milch</i>, <i>die Rechnung</i>: lo dice el artículo, y los sustantivos con el sufijo <b>-ung</b> son femeninos."
      },
      {
        tr: "El niño bebe leche.",
        why: "Sujeto, verbo, complemento: el verbo <i>trinkt</i> está en segunda posición."
      },
      {
        tr: "Dos tazas y tres panecillos, por favor.",
        why: "<i>Zwei</i> empieza por <b>ts</b> y la <b>w</b> suena como una <i>v</i>: «tsvái»."
      },
      {
        tr: "La cuenta, por favor.",
        why: "<i>Rechnung</i>: la <i>ch</i> tras la <i>e</i> es el soplo suave de <i>ich</i>, más suave que la <i>j</i> española, y no una <i>k</i>."
      }
    ]
  },
  "lesson:a1-u01-l3": {
    theme: "Gramática básica",
    title: "¿Der o ein? Los artículos en nominativo",
    objectives: [
      "distinguir el artículo determinado (der, die, das) del indeterminado (ein, eine)",
      "usar kein para negar un sustantivo",
      "elegir el artículo según el género, no según el sonido"
    ],
    theory: [
      {
        h: "Determinado e indeterminado",
        p: "Como en español, el artículo <strong>determinado</strong> señala algo conocido (<em>der Kaffee</em>, el café del que hablamos) y el <strong>indeterminado</strong> algo nuevo (<em>ein Kaffee</em>, un café cualquiera). En nominativo, es decir, cuando el sustantivo es el sujeto (<em>Der Kaffee ist heiß</em>) o el sustantivo que sigue a <em>sein</em> (<em>Das ist eine Tasse</em>, <em>Das ist kein Tee</em>), las formas son: <b>der / ein</b> (masculino), <b>die / eine</b> (femenino), <b>das / ein</b> (neutro), <b>die</b> (plural)."
      },
      {
        contrast: "En español el artículo cambia según el género y el número (<em>el, la, los, las, un, una, unos, unas</em>), y alguna forma varía por el <b>sonido inicial</b>: <em>el agua</em>, <em>un águila</em>. En alemán, en nominativo singular, <em>der</em>, <em>die</em> y <em>das</em> solo dependen del género, sin variantes por el sonido inicial: <em>der Apfelkuchen</em>, <em>der Saft</em>, <em>der Kellner</em> llevan todos <em>der</em>, sea cual sea la letra siguiente. Es más sencillo, pero hay que conocer el género, y la terminación <em>-o</em>/<em>-a</em> del sustantivo no te ayuda como en español."
      },
      {
        trap: "En plural no existe el artículo indeterminado: <em>Tassen</em> solo vale «tazas» o «unas tazas». El español <em>unos</em>, <em>unas</em> no tiene equivalente en alemán: se deja el sustantivo sin artículo."
      },
      {
        h: "Kein: la negación del sustantivo",
        p: "Para decir «no es un…» o «no hay ningún…» se usa <strong>kein</strong>, que sigue las formas de <em>ein</em>: <em>kein</em> (masculino y neutro), <em>keine</em> (femenino y plural). <em>Das ist kein Tee</em> significa «esto no es un té». En español la negación va delante del verbo (<em>no es un té</em>); en alemán se funde con el artículo, y no se dice <em>nicht ein Tee</em>."
      },
      {
        tip: "Cuando <b>pides</b>, el sustantivo masculino lleva <em>einen</em>: <em>Einen Kaffee, bitte</em>. En español <em>un café</em> no cambia de forma, sea sujeto u objeto; en alemán el masculino sí: <em>ein</em> es la forma del sujeto y <em>einen</em> es otra forma, que se usa cuando el sustantivo es el objeto de una acción y que veremos más adelante. Por ahora recuerda: al pedir se dice <em>einen</em> (masculino), <em>eine</em> (femenino), <em>ein</em> (neutro)."
      },
      {
        h: "Una frase típica: Das ist …",
        p: "Para identificar un objeto: <em>Das ist ein Eis</em>, <em>Das ist eine Torte</em>. El <em>das</em> inicial vale «esto» y no cambia, aunque el sustantivo que sigue sea masculino o femenino."
      }
    ],
    grammar: {
      title: "Artículos en nominativo",
      note: "El nominativo responde a la pregunta <em>¿quién / qué es?</em>. El plural lleva <b>die</b> o <b>keine</b> y no tiene artículo indeterminado.",
      table: {
        head: ["", "masculino", "femenino", "neutro", "plural"],
        rows: [
          ["determinado", "der Kaffee", "die Tasse", "das Brötchen", "die Tassen"],
          ["indeterminado", "ein Kaffee", "eine Tasse", "ein Brötchen", "(sin artículo) Tassen"],
          ["negación", "kein Kaffee", "keine Tasse", "kein Brötchen", "keine Tassen"]
        ]
      },
      examples: [
        { tr: "El café está caliente." },
        { tr: "Un café cuesta tres euros." },
        { tr: "Esto es una taza." },
        { tr: "Esto no es un té." },
        { tr: "La tarta está fresca." },
        { tr: "Aquí está la carta." }
      ]
    },
    vocab: [
      "el zumo",
      "la cola",
      "el chocolate",
      "la cerveza",
      "el vino",
      "el helado",
      "la tarta de manzana",
      "la tarta",
      "el pan",
      "el pretzel",
      "la carta, el menú",
      "el camarero"
    ],
    exercises: [
      {
        q: "Completa: «___ Tasse ist neu.» (una taza)",
        opts: ["Ein", "Eine", "Einen"],
        why: "<i>Tasse</i> es femenino, así que <b>eine</b>."
      },
      {
        q: "Completa: «Das ist ___ Tee.» (no es un té)",
        opts: ["nicht", "kein", "keine"],
        why: "Para negar un sustantivo masculino se usa <b>kein</b>, no <i>nicht ein</i>."
      },
      {
        q: "Elige el artículo indeterminado correcto.",
        why: "<i>Ein</i> para masculino y neutro, <i>eine</i> para femenino.",
        items: ["zumo", "cola", "tarta", "pan", "carta", "camarero"]
      },
      {
        q: "Completa: «Das ist ___ Eis.» (un helado)",
        hint: "das Eis es neutro",
        why: "Neutro en nominativo: <b>ein</b>. No es el género del español («el helado» es masculino) lo que decide."
      },
      {
        q: "Completa: «___ Speisekarte ist neu.» (la)",
        hint: "die Speisekarte es femenino",
        why: "Femenino singular: <b>die</b>."
      },
      {
        q: "«Tassen, bitte!» ¿Por qué no lleva artículo?",
        opts: [
          "Es un error",
          "En plural no existe ein/eine: el sustantivo va solo",
          "Falta die delante de Tassen"
        ],
        why: "El artículo indeterminado no tiene plural. El español «unas tazas» corresponde a <i>Tassen</i> sin artículo."
      },
      {
        q: "Une cada expresión con su significado.",
        pairs: ["un café", "una tarta", "un pan", "ninguna cola"]
      },
      {
        tr: "Aquí está la carta y el agua.",
        why: "Con <i>Hier</i> en primera posición, el verbo <i>ist</i> sigue en segunda posición y el sujeto va detrás."
      },
      {
        tr: "Esto es una tarta.",
        why: "<i>Torte</i>: la <b>t</b> inicial se pronuncia aspirada, con un soplo de aire, y la <b>e</b> final es una vocal breve y átona, más neutra que la <i>e</i> española: TOR-te."
      }
    ]
  },
  "lesson:a1-u01-l4": {
    theme: "Vida cotidiana",
    title: "¿Cómo estás? Du o Sie",
    objectives: [
      "preguntar cómo está alguien, con du y con Sie",
      "conjugar sein en presente",
      "elegir entre du y Sie según la situación"
    ],
    theory: [
      {
        h: "Du, ihr y Sie: tres formas para «tú», «vosotros» y «usted»",
        p: "El español tiene <em>tú</em> y <em>usted</em> (y <em>vosotros</em> y <em>ustedes</em> en España; en Latinoamérica solo <em>ustedes</em>). El alemán tiene <strong>du</strong> (una persona de confianza), <strong>ihr</strong> (varias personas de confianza) y <strong>Sie</strong>, la forma de cortesía, idéntica para una sola persona o para varias: <em>Sind Sie Frau Weber?</em>, <em>Wie heißen Sie?</em>"
      },
      {
        contrast: "<strong>Sie</strong> corresponde a <em>usted</em> y a <em>ustedes</em>, pero el verbo va en tercera persona del <b>plural</b>, incluso para una sola persona: <em>Sie sind</em>, mientras que en español <em>usted</em> lleva el verbo en singular (<em>usted es</em>). Se escribe siempre con <b>S mayúscula</b>, porque <em>sie</em> con minúscula significa «ella» o «ellos» (al comienzo de la frase las dos formas se ven iguales y lo decide el contexto). En español <em>usted</em> se escribe con minúscula; el equivalente de <em>tutear</em> es <em>duzen</em>."
      },
      {
        h: "Cuándo pasar al du",
        p: "Con personas que no conoces, con adultos, con clientes, en las oficinas y en situaciones oficiales se usa <em>Sie</em>, junto con <em>Herr</em> o <em>Frau</em> y el apellido: <em>Frau Weber</em>. El <em>du</em> es normal entre amigos, en la familia, entre personas de la misma edad y en muchos ambientes de trabajo informales. En España el tuteo suele llegar pronto; en los países de habla alemana <em>Sie</em> con apellido suele durar más, así que ante la duda se usa <em>Sie</em> y se espera a que el otro proponga el <em>du</em>. A menudo lo propone la persona mayor o la que tiene más responsabilidad: <em>Wollen wir uns duzen?</em> («¿nos tuteamos?»)."
      },
      {
        h: "Wie geht's? Aquí no se usa sein",
        p: "Para preguntar cómo está alguien, el español usa <em>estar</em> (<em>¿cómo estás?</em>). El alemán usa el verbo <strong>gehen</strong> (ir): <em>Wie geht es dir?</em> o, más corto, <em>Wie geht's?</em> («¿qué tal?», literalmente «¿cómo va?»). Se responde <em>Mir geht es gut</em> («me va bien») o <em>Es geht</em> («regular»). <em>Dir</em>, <em>Ihnen</em> y <em>mir</em> son formas especiales del pronombre que verás más adelante: por ahora aprende las frases enteras."
      },
      {
        trap: "No traduzcas «estoy bien» palabra por palabra con <em>Ich bin gut</em>: significa «soy bueno» (hábil, competente), no «estoy bien». Para decir que estás bien se dice <em>Mir geht es gut</em>."
      },
      {
        h: "Sein, el verbo «ser» y también «estar»",
        p: "Como el español <em>ser</em>, <strong>sein</strong> es irregular: las formas no se parecen al infinitivo (<em>bin, bist, ist, sind, seid, sind</em>) y hay que memorizarlas. Sirven para decir quién eres y qué es algo: <em>Ich bin Anna</em>, <em>Das ist ein Kaffee</em>. El alemán no distingue entre <em>ser</em> y <em>estar</em>: <em>Wir sind hier</em> es «estamos aquí», y con un adjetivo concreto también se usa <em>sein</em> (<em>Ich bin müde</em>, «estoy cansado»). Solo la fórmula «¿cómo estás? / estoy bien» pasa por <em>gehen</em>."
      },
      {
        h: "Las preguntas: cambia el orden de las palabras",
        p: "En la pregunta con una palabra interrogativa (<em>wie</em>, <em>was</em>) el verbo se queda en <strong>segunda</strong> posición: <em>Wie geht es Ihnen?</em> En la pregunta de sí o no el verbo pasa a <strong>primera</strong> posición: <em>Sind Sie Frau Weber?</em>, <em>Bist du Anna?</em> En español basta con cambiar la entonación (<em>¿Eres Anna?</em>); en alemán lo normal es cambiar el orden de las palabras."
      }
    ],
    grammar: {
      title: "Sein (ser, estar) en presente",
      note: "Con <b>Sie</b> (cortesía) el verbo es <em>sind</em>, igual que con <em>wir</em> y con <em>sie</em> (ellos).",
      table: {
        head: ["persona", "forma", "ejemplo"],
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
        { tr: "Hola, Julia, ¿qué tal?", note: "informal" },
        { tr: "Buenos días, señora Weber, ¿cómo está usted?", note: "formal" },
        { tr: "Estoy bien, gracias. ¿Y tú?" },
        { tr: "Regular." },
        { tr: "¿Es usted la señora Weber?", note: "pregunta de sí o no: el verbo va en primera posición" },
        { tr: "¿Nos tuteamos?", note: "suele proponerlo la persona mayor" }
      ]
    },
    vocab: [
      "¿qué tal? (informal)",
      "¿cómo está usted? (formal)",
      "estoy bien",
      "regular",
      "no está mal",
      "muy bien",
      "mal",
      "¿y tú?",
      "¿y usted?",
      "señor (delante del apellido)",
      "señora (delante del apellido)",
      "hasta luego"
    ],
    dialogue: [
      "¡Hola, Julia! ¿Qué tal?",
      "¡Hola! Bien, ¿y tú?",
      "No está mal, gracias. ¡Hasta luego!",
      "Buenos días, señora Weber. ¿Cómo está usted?",
      "Bien, gracias. ¿Y usted?"
    ],
    exercises: [
      {
        q: "Hablas con la señora Weber, a quien conoces poco. ¿Qué pregunta es correcta?",
        opts: ["Wie geht es dir?", "Wie geht es Ihnen?", "Wie gehst du?"],
        why: "Con una persona a la que tratas de usted se usa <b>Ihnen</b>."
      },
      {
        q: "¿Qué frase NO significa «estoy bien»?",
        opts: ["Mir geht es gut.", "Ich bin gut.", "Es geht mir gut."],
        why: "<i>Ich bin gut</i> significa «soy bueno» (hábil). Para decir que estás bien se usa <i>gehen</i>."
      },
      {
        tr: "Todas las personas de sein.",
        why: "<i>Sein</i> es irregular en todas las personas, como «ser». <i>Sind</i> vale para <i>wir</i>, <i>sie</i> y <i>Sie</i>."
      },
      {
        q: "Completa: «___ Sie Frau Weber?» (¿Es usted la señora Weber?)",
        hint: "pregunta de sí o no: el verbo va primero",
        why: "<b>Sind</b>: la forma de cortesía usa la tercera persona del plural, no la del singular como el español «usted es»."
      },
      {
        q: "Traduce tuteando: «Estoy bien, gracias. ¿Y tú?»",
        why: "<i>Mir geht es gut, danke. Und dir?</i> Al tutear, la pregunta termina con <i>dir</i>."
      },
      {
        q: "En el café, el camarero que te conoce desde hace años te saluda primero.",
        setting: "La cafetería del barrio, ocho de la mañana.",
        lines: [
          { tr: "¡Hola! ¿Qué tal hoy?" },
          { tr: "Responde que estás bien y devuelve la pregunta.", answerTr: "Estoy bien, ¿y tú?" },
          { tr: "¡Muy bien! ¿Un café?" },
          { tr: "Di que sí.", answerTr: "¡Sí, por favor!" }
        ]
      },
      {
        q: "Une cada respuesta con su significado.",
        pairs: ["regular", "muy bien", "mal", "no está mal"]
      },
      {
        tr: "Buenos días, señora Weber, ¿cómo está usted?",
        why: "<i>Ihnen</i> suena «ínen», con la <i>i</i> larga: la <b>h</b> tras la vocal no se pronuncia."
      },
      {
        tr: "Bien, gracias. ¿Y usted?",
        why: "<i>Und Ihnen?</i> mantiene el tono de cortesía: la pregunta termina con la forma <i>Ihnen</i>."
      }
    ]
  },
  "lesson:a1-u01-test": {
    theme: "Verificación",
    title: "Verificación de la unidad 1",
    objectives: ["comprobar saludos, el presente de heißen y sein, género, plural y artículos"],
    theory: [
      {
        p: "Diez preguntas sobre toda la unidad. Se supera con el 70 %. No vuelvas a mirar las lecciones mientras respondes: si no recuerdas algo, es mejor volver a repasar."
      }
    ],
    exercises: [
      {
        q: "Son las 18:30 y entras en una tienda. ¿Qué dices?",
        opts: ["Guten Morgen", "Guten Abend", "Gute Nacht"],
        why: "Hacia la noche se dice <i>Guten Abend</i>. <i>Gute Nacht</i> es solo una despedida, a diferencia de «buenas noches»."
      },
      {
        q: "Completa: «Wir ___ hier.» (Estamos aquí.)",
        why: "<i>Sein</i>, forma de <i>wir</i>: <b>sind</b>. En alemán sirve tanto para «ser» como para «estar»."
      },
      {
        q: "Completa: «Wie ___ Sie?» (¿Cómo se llama usted?)",
        why: "<i>Heißen</i>: con <i>Sie</i> el verbo va en tercera persona del plural."
      },
      {
        q: "Elige el artículo determinado.",
        items: ["mesa", "taza", "niño", "tarta"]
      },
      {
        q: "El plural de «das Kind» es:",
        opts: ["die Kinde", "die Kinder", "die Kinds"],
        why: "<i>Die Kinder</i>: terminación <b>-er</b>."
      },
      {
        q: "¿Qué frases son correctas?",
        opts: [
          "Das ist ein Tasse.",
          "Das ist eine Tasse.",
          "Das ist kein Tee.",
          "Das ist ein Kaffee.",
          "Das ist keine Kaffee."
        ],
        why: "<i>Tasse</i> es femenino (<i>eine</i>); <i>Tee</i> y <i>Kaffee</i> son masculinos (<i>kein</i>, <i>ein</i>)."
      },
      {
        q: "Traduce: «Dos tés, por favor.»",
        why: "<i>Zwei Tee, bitte</i> es una fórmula de pedido con raciones sobreentendidas (dos tazas de té). El plural normal es <i>zwei Tees</i>, o bien <i>zwei Tassen Tee</i>."
      },
      {
        tr: "¿Cómo está usted, señora Weber?",
        why: "Pregunta con <i>Wie</i>: el verbo <i>geht</i> está en segunda posición."
      },
      { tr: "Dos cafés y un panecillo, por favor." },
      { tr: "Buenos días, ¿cómo está usted?" }
    ]
  },
  "unit:a1-u02": {
    title: "¿Quién eres?",
    grammarNote: "pronombres personales · presente regular · sein y haben · profesiones · números hasta 100"
  },
  "lesson:a1-u02-l1": {
    theme: "Presentarse",
    title: "Me llamo ...",
    objectives: [
      "decir tu nombre y preguntar el de otra persona, con du y con Sie",
      "usar los pronombres personales en nominativo: ich, du, er, sie, es, wir, ihr, sie, Sie",
      "decir de dónde eres con «Ich komme aus ...»"
    ],
    theory: [
      {
        h: "Los pronombres personales: en alemán el sujeto se dice",
        p: "En una oración principal que se sostiene sola, el verbo conjugado necesita un sujeto expreso: un nombre (<em>Anna heißt Weber</em>) o un pronombre (en las coordinadas con el mismo sujeto, como <em>Ich wohne hier und arbeite in Bonn</em>, el segundo puede omitirse). Aquí están en nominativo: <strong>ich</strong> (yo), <strong>du</strong> (tú), <strong>er</strong> (él), <strong>sie</strong> (ella), <strong>es</strong> (neutro), <strong>wir</strong> (nosotros), <strong>ihr</strong> (vosotros), <strong>sie</strong> (ellos, ellas) y <strong>Sie</strong>, la forma de cortesía. Las terminaciones del verbo no bastan para reconocer la persona: <em>heißt</em> vale para <em>du</em>, <em>er</em>, <em>sie</em>, <em>es</em> e <em>ihr</em>."
      },
      {
        contrast: "En español <em>Hablo alemán</em> se sostiene sin «yo». En alemán <em>Spreche Deutsch</em> no es una oración: hace falta <em>Ich spreche Deutsch</em>. El pronombre no es énfasis, forma parte de la oración. Otra diferencia: <em>ihr</em> corresponde al «vosotros» de España; en Latinoamérica se usa «ustedes» también entre amigos, pero el alemán sigue distinguiendo <em>ihr</em> (confianza) de <em>Sie</em> (cortesía)."
      },
      {
        h: "sie y Sie: la mayúscula cambia el sentido",
        p: "Al hablar, <em>sie</em> y <em>Sie</em> suenan igual; al escribir, no. <strong>sie</strong> con minúscula significa «ella» o «ellos/ellas»: <em>sie heißt Lena</em> con el verbo en singular, <em>sie heißen Weber</em> con el verbo en plural. <strong>Sie</strong> con mayúscula es la forma de cortesía, para una persona o para varias (equivale a «usted» y «ustedes»), y lleva el verbo como «ellos»: <em>Wie heißen Sie?</em> Ojo: «usted» lleva el verbo en tercera persona del singular, pero <em>Sie</em> lo lleva en tercera del plural, aunque hables con una sola persona. Al comienzo de la oración la mayúscula está de todos modos y no ayuda: <em>heißt</em> (singular) indica «ella», mientras que con <em>heißen</em> el contexto decide si es «ellos» o la forma de cortesía.",
        list: [
          "<b>du</b>: una persona con la que tienes confianza",
          "<b>ihr</b>: varias personas con las que tienes confianza (no es la forma de cortesía)",
          "<b>Sie</b>: una o varias personas a las que tratas de usted"
        ]
      },
      {
        trap: "Los pronombres de tercera persona siguen el <b>género gramatical</b> del sustantivo al que sustituyen, también para las cosas: <em>Der Tisch ist neu. Er ist groß.</em> (er = la mesa), <em>Die Tasse ist neu. Sie ist groß.</em>, <em>Das Buch ist neu. Es ist groß.</em> En español se dice «es grande» sin pronombre; en alemán se dice literalmente «él es grande», «ella es grande» o «ello es grande», según el género. Y el género no siempre coincide con el español: «la mesa» es <em>der Tisch</em> (masculino) y «el sol» es <em>die Sonne</em> (femenino)."
      },
      {
        h: "Nombre y procedencia",
        p: "Para presentarte tienes dos fórmulas: <em>Ich heiße Paolo</em> o <em>Mein Name ist Paolo</em>. Para preguntar la procedencia se usa <strong>woher</strong> («de dónde», en una sola palabra) y el verbo <strong>kommen</strong>: <em>Woher kommst du?</em> Se responde con <em>Ich komme aus</em> y el país o la ciudad, normalmente sin artículo: <em>Ich komme aus Italien</em> («vengo de Italia»), <em>aus Berlin</em>. Se oye también <em>Woher bist du?</em> («¿de dónde eres?»). Por ahora aprende las frases enteras: los países que llevan artículo llegarán más adelante."
      },
      {
        tip: "Para pedir que repitan: <em>Wie bitte?</em> («¿cómo?», «¿perdón?») es la fórmula más usada y sirve con todo el mundo. Para responder a una presentación te hace falta <em>Freut mich</em> («encantado», «mucho gusto»)."
      }
    ],
    grammar: {
      title: "Pronombres personales en nominativo",
      note: "Los pronombres alemanes son nueve (<em>ich, du, er, sie, es, wir, ihr, sie, Sie</em>), pero las formas del verbo regular son solo cuatro: <em>-e, -st, -t, -en</em>. En la tabla <em>sie</em> y <em>Sie</em> comparten fila porque piden la misma forma del verbo.",
      table: {
        head: ["persona", "pronombre", "ejemplo"],
        rows: [
          ["1.ª singular", "ich", "Ich heiße Paolo."],
          ["2.ª singular", "du", "Woher kommst du?"],
          ["3.ª singular", "er / sie / es", "Er heißt Tom, sie heißt Lena."],
          ["1.ª plural", "wir", "Wir heißen Weber."],
          ["2.ª plural", "ihr", "Wie heißt ihr?"],
          ["3.ª plural / cortesía", "sie / Sie", "Wie heißen Sie?"]
        ]
      },
      examples: [
        { tr: "Me llamo Paolo." },
        { tr: "¿De dónde eres?" },
        { tr: "Él se llama Tom, ella se llama Lena." },
        { tr: "Nos llamamos Weber." },
        { tr: "¿Cómo os llamáis?" },
        { tr: "¿Cómo se llama usted?", note: "forma de cortesía" }
      ]
    },
    vocab: [
      "el nombre",
      "el nombre de pila",
      "el apellido",
      "¿Cómo te llamas?",
      "Me llamo ...",
      "Mi nombre es ...",
      "Encantado, mucho gusto.",
      "¿De dónde eres?",
      "Vengo de ... (país o ciudad)",
      "¿Cuántos años tienes?",
      "Tengo ... años.",
      "¿Y tú?",
      "¿Perdón? (no he entendido)"
    ],
    culture: {
      title: "Una mirada alemana: nombres, títulos y el paso al du",
      text: "<p>En Alemania es frecuente presentarse con nombre y apellido juntos: <i>Ich bin Anna Weber</i>. A una persona que no conoces te diriges normalmente con <i>Herr</i> o <i>Frau</i> y el apellido, no con el nombre de pila solo. Si alguien tiene un título, como <i>Doktor</i>, en ambientes formales se añade: <i>Frau Doktor Weber</i>.</p><p>El antiguo <i>Fräulein</i> para las jóvenes solteras ya no se usa. Hoy <i>Frau</i> vale para toda mujer adulta, casada o no.</p><p>El paso de <i>Sie</i> a <i>du</i> es un pequeño acontecimiento social: lo propone normalmente la persona de más edad o la que tiene más responsabilidad. En muchas empresas y entre estudiantes se tutea enseguida, pero en caso de duda empieza con <i>Sie</i> y espera la propuesta.</p>"
    },
    exercises: [
      {
        q: "Hablas con una clienta a la que no conoces. ¿Qué pregunta usas para preguntarle el nombre?",
        opts: ["Wie heißt du?", "Wie heißen Sie?", "Wie heißt ihr?"],
        why: "A una persona desconocida se le habla de <b>Sie</b>, con el verbo como para «ellos»: <i>heißen</i>. <i>Wie heißt du?</i> es para un amigo, <i>Wie heißt ihr?</i> para varios."
      },
      {
        q: "Lena es una mujer. ¿Qué pronombre usas para hablar de ella?",
        opts: ["er", "sie", "es"],
        why: "Para una mujer se usa <b>sie</b>, con minúscula en medio de la oración. <i>Er</i> es para un hombre y <i>es</i> para los sustantivos neutros."
      },
      {
        q: "Completa: «___ heißt Lena.» (Ella se llama Lena.)",
        hint: "pronombre de tercera persona femenino singular",
        why: "Al comienzo de la oración se escribe <b>Sie</b> con mayúscula, porque es la primera palabra; el verbo <i>heißt</i> está en tercera persona del singular."
      },
      {
        q: "Completa: «Ich ___ aus Italien.» (Vengo de Italia.)",
        hint: "primera persona del singular de kommen",
        why: "<i>Ich komme</i>: la terminación de la primera persona del singular es <b>-e</b>."
      },
      {
        q: "Completa con los pronombres correctos.",
        tr: "¡Hola! Me llamo Paolo. ¿Y tú cómo te llamas?",
        why: "En la oración principal el pronombre no se omite: <i>Ich heiße Paolo</i>. A alguien de confianza se le pregunta <i>Wie heißt du?</i>"
      },
      {
        q: "Una nueva conocida te saluda en el curso de alemán.",
        setting: "La primera clase, el primer día.",
        lines: [
          { tr: "¡Hola! Soy Lena. ¿Y tú cómo te llamas?" },
          { tr: "Responde diciendo tu nombre.", answerTr: "Me llamo Paolo." },
          { tr: "¿De dónde eres?" },
          { tr: "Responde que vienes de Italia.", answerTr: "Vengo de Italia." }
        ]
      },
      {
        tr: "Mi nombre es Anna Weber.",
        why: "<i>Mein Name ist</i> es la fórmula alternativa a <i>Ich heiße</i>. Nombre y apellido se escriben con mayúscula."
      },
      {
        tr: "Hola, me llamo Lena y vengo de Berlín.",
        why: "Escucha la <i>ei</i> de <i>heiße</i>: suena «ai», no «ei»."
      },
      {
        tr: "Me llamo Paolo. ¿Y tú cómo te llamas?",
        why: "En <i>wie</i> la <b>w</b> es una <i>v</i> sonora, no una <i>b</i>: los dientes superiores tocan el labio inferior y vibran las cuerdas vocales. <i>Ie</i> es una <i>i</i> larga: /viː/."
      }
    ]
  },
  "lesson:a1-u02-l2": {
    theme: "Presentarse",
    title: "Sein, haben y los números",
    objectives: [
      "conjugar sein y haben en presente",
      "decir la edad con «Ich bin ... Jahre alt»",
      "contar hasta 100 y leer un número de teléfono"
    ],
    theory: [
      {
        h: "Haben, el verbo «tener»",
        p: "Como <em>sein</em> en la unidad 1, <strong>haben</strong> es irregular: la forma de <em>du</em> es <em>hast</em>, la de <em>er/sie/es</em> es <em>hat</em>, y la <em>b</em> desaparece. Equivale a «tener» cuando indica posesión: <em>Ich habe eine Schwester</em>. Más adelante verás que <em>haben</em> hace también de «haber» en los tiempos compuestos. Con <em>haben</em> lo que se posee es complemento directo, y el artículo indefinido masculino <em>ein</em> pasa a <em>einen</em>, como en la fórmula <em>einen Kaffee</em> (la unidad 3 explica el motivo): <em>Ich habe einen Bruder</em>. Con <em>Hunger haben</em> («tener hambre») y expresiones parecidas no hay artículo: <em>Wir haben Hunger</em>."
      },
      {
        h: "Sein con un sustantivo: se mantiene el nominativo",
        p: "Después de <strong>sein</strong> el sustantivo que describe al sujeto va en el mismo caso que el sujeto, el nominativo: <em>Das ist ein Tisch</em>, <em>Das ist mein Lehrer</em>. Un complemento con preposición no dice quién eres: <em>Ich bin in Berlin</em> dice dónde estás, no quién eres."
      },
      {
        contrast: "En español la edad se <em>tiene</em>: «tengo veinticinco años». En alemán la edad se <em>es</em>: <em>Ich bin fünfundzwanzig Jahre alt</em>, y con <em>haben</em> la oración es incorrecta: <em>Ich habe fünfundzwanzig Jahre</em> no se dice. Es una trampa típica de quien piensa en español. Con el hambre coinciden: <em>Ich habe Hunger</em> es «tengo hambre». Con el frío no: no se dice <em>Ich habe kalt</em> sino <em>Mir ist kalt</em> («a mí me es frío»)."
      },
      {
        h: "Los números del 20 al 100",
        p: "Las decenas son <strong>zwanzig</strong>, <strong>dreißig</strong>, <strong>vierzig</strong>, <strong>fünfzig</strong>, <strong>sechzig</strong>, <strong>siebzig</strong>, <strong>achtzig</strong>, <strong>neunzig</strong>, <strong>hundert</strong>. Ojo: <em>dreißig</em> se escribe con <b>ß</b>; <em>sechzig</em> pierde la <em>s</em> final de <em>sechs</em>; <em>siebzig</em> pierde la <em>-en</em> de <em>sieben</em>. Los números del 21 al 99 se escriben en una sola palabra, y en ellos el 1 es <em>ein</em>: <em>einundzwanzig</em>."
      },
      {
        trap: "En los números compuestos se dice <b>primero la unidad y luego la decena</b>: 45 es <em>fünfundvierzig</em>, literalmente «cinco y cuarenta». El español dice «cuarenta y cinco»: aparece la misma «y» (<em>und</em>), pero en el orden contrario. Y el 21 es <em>einundzwanzig</em> («uno y veinte»), mientras que el español dice «veintiuno»: la decena primero. Cuidado con las parejas que se confunden al oído: <em>sechzehn</em> (16) y <em>sechzig</em> (60), <em>siebzehn</em> (17) y <em>siebzig</em> (70)."
      },
      {
        h: "Los números de teléfono",
        p: "Un número de teléfono suele leerse cifra por cifra o en grupos pequeños: 0151 se dice <em>null eins fünf eins</em>. El cero se dice <em>null</em>. A veces por teléfono se oye <em>zwo</em> en lugar de <em>zwei</em>, para no confundirlo con <em>drei</em>. La agrupación varía, así que fíjate en las pausas. Para preguntar: <em>Wie ist deine Telefonnummer?</em>"
      }
    ],
    grammar: {
      title: "Sein (ser, estar) y haben (tener)",
      note: "Los dos verbos son irregulares y hay que memorizarlos. Con <b>Sie</b> (cortesía) y con <em>sie</em> (ellos) se usan <em>sind</em> y <em>haben</em>.",
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
        { tr: "Tengo veinte años.", note: "en alemán la edad se dice con «sein» (ser)" },
        { tr: "Tienes una hermana." },
        { tr: "Él tiene hambre." },
        { tr: "Somos amigos." },
        { tr: "¿Tenéis un hermano?" },
        { tr: "El número es cero tres cero, doce, treinta y cuatro, cincuenta y seis.", note: "número leído por grupos" }
      ]
    },
    vocab: [
      "el número de teléfono",
      "el año",
      "viejo; en la edad: «... Jahre alt» = «... años»",
      "veinte",
      "treinta",
      "cuarenta",
      "cincuenta",
      "sesenta",
      "setenta",
      "ochenta",
      "noventa",
      "cien",
      "veintiuno"
    ],
    exercises: [
      {
        q: "¿Cómo se dice «Tengo veinticinco años»?",
        opts: ["Ich habe fünfundzwanzig Jahre.", "Ich bin fünfundzwanzig Jahre alt.", "Ich habe fünfundzwanzig alt."],
        why: "En alemán la edad se dice con <b>sein</b>: <i>Ich bin fünfundzwanzig Jahre alt</i>. Con <i>haben</i> la oración no es correcta."
      },
      {
        q: "¿Qué número es «45»?",
        opts: ["vierundfünfzig", "fünfundvierzig", "vierzigfünf"],
        why: "<i>Fünfundvierzig</i>: primero la unidad (<i>fünf</i>), luego <i>und</i> y por último la decena (<i>vierzig</i>). <i>Vierundfünfzig</i> es 54."
      },
      {
        tr: "Toda la conjugación de haben.",
        why: "<i>Haben</i> es irregular: <i>du hast</i> y <i>er hat</i> pierden la <i>b</i>."
      },
      {
        q: "Completa: «Du ___ eine Schwester.» (Tienes una hermana.)",
        hint: "segunda persona del singular de haben",
        why: "<i>Du hast</i>: la <b>b</b> del verbo desaparece en la forma de <i>du</i>."
      },
      {
        q: "Completa: «Ihr ___ hier.» (Vosotros estáis aquí.)",
        hint: "segunda persona del plural de sein",
        why: "<i>Ihr seid</i>: no la confundas con <i>sind</i>, que vale para <i>wir</i> y <i>sie</i>."
      },
      {
        q: "Completa con bin y habe.",
        tr: "Soy Paolo y tengo veinticinco años. Tengo un hermano.",
        why: "El nombre y la edad se dicen con <i>sein</i> (<i>bin</i>), el hermano con <i>haben</i> (<i>habe</i>), seguido de <i>einen</i>."
      },
      {
        q: "Une cada número con su cifra.",
        pairs: ["30", "60", "45", "100"]
      },
      {
        q: "Traduce tuteando: «¿Tienes una hermana?»",
        why: "<i>Hast du eine Schwester?</i> En la pregunta de sí o no el verbo va en primer lugar."
      },
      {
        tr: "Mi número de teléfono es cero uno cinco uno, dos tres cuatro, cinco seis.",
        why: "El cero se dice <i>null</i>. Los números de teléfono se leen cifra por cifra o en grupos."
      },
      {
        tr: "Tengo veinticinco años y tengo una hermana.",
        why: "<i>Fünfundzwanzig</i>: la <b>z</b> se lee siempre «ts»."
      }
    ]
  },
  "lesson:a1-u02-l3": {
    theme: "Trabajo",
    title: "¿A qué se dedica usted?",
    objectives: [
      "preguntar y decir la profesión con «Was sind Sie von Beruf?»",
      "formar el femenino de las profesiones con -in",
      "usar las profesiones sin artículo"
    ],
    theory: [
      {
        h: "La profesión se dice sin artículo",
        p: "Para decir a qué te dedicas, el alemán usa normalmente el sustantivo sin artículo, igual que el español: <em>Ich bin Lehrerin</em> («soy profesora»), <em>Er ist Arzt</em> («es médico»). Es una semejanza real y te ahorra un error. La pregunta es <strong>Was sind Sie von Beruf?</strong>, que equivale a «¿a qué se dedica usted?». Con alguien de confianza: <em>Was bist du von Beruf?</em>"
      },
      {
        trap: "Cuando la profesión lleva un adjetivo, el artículo suele volver: <em>Ich bin eine gute Lehrerin</em>, como en español («soy una buena profesora»). La regla de «sin artículo» vale, por tanto, para la profesión sola, no para cualquier oración que contenga una profesión."
      },
      {
        h: "El femenino en -in",
        p: "En alemán el nombre de la profesión cambia según la ejerza un hombre o una mujer, como en «profesor / profesora»: <em>der Lehrer / die Lehrerin</em>, <em>der Student / die Studentin</em>. Casi siempre se añade <strong>-in</strong> al masculino, que hace el papel de la <em>-a</em> española, y el femenino lleva siempre <strong>die</strong>. Algunas vocales llevan diéresis: <em>der Arzt → die Ärztin</em>, <em>der Koch → die Köchin</em>."
      },
      {
        contrast: "En español muchas profesiones tienen una sola forma para los dos géneros (<em>el/la estudiante</em>, <em>el/la periodista</em>). En alemán, en cambio, también esas se desdoblan: <em>der Student / die Studentin</em>, <em>der Journalist / die Journalistin</em>. El género de la persona se oye casi siempre en el propio nombre: <em>Ich bin Lehrer</em> lo dice un hombre y <em>Ich bin Lehrerin</em> una mujer."
      },
      {
        h: "El plural de las formas en -in",
        p: "El plural del femenino se hace con <strong>-nen</strong>: <em>die Lehrerin → die Lehrerinnen</em>, con dos <em>n</em>. Los plurales masculinos varían: <em>die Lehrer</em>, <em>die Ärzte</em>, <em>die Studenten</em>."
      },
      {
        tip: "Cuando aprendas una profesión, aprende enseguida las dos formas: <em>der Arzt, die Ärztin</em>. Las necesitas para hablar de ti y de los demás. Ojo: <em>Student</em> y <em>Studentin</em> son quienes estudian en la universidad; un alumno de colegio es un <em>Schüler</em> o una <em>Schülerin</em>, así que «estudiante» a secas es un falso amigo."
      }
    ],
    grammar: {
      title: "Profesiones: masculino y femenino",
      note: "El femenino se forma normalmente con <b>-in</b>. Con <em>Arzt</em> y <em>Koch</em> la vocal lleva diéresis.",
      table: {
        head: ["masculino", "femenino", "ejemplo"],
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
        { tr: "¿A qué se dedica usted?", note: "forma de cortesía" },
        { tr: "Soy profesora.", note: "habla una mujer" },
        { tr: "Él es médico." },
        { tr: "Ella es cocinera." },
        { tr: "Soy una buena profesora.", note: "con el adjetivo vuelve el artículo" },
        { tr: "Somos estudiantes universitarios.", note: "un alumno de colegio es un Schüler" }
      ]
    },
    vocab: [
      "la profesión",
      "el profesor",
      "la profesora",
      "el médico",
      "la médica, la doctora",
      "el estudiante universitario",
      "la estudiante universitaria",
      "el cocinero",
      "la cocinera",
      "el ingeniero",
      "el dependiente",
      "la dependienta"
    ],
    exercises: [
      {
        q: "Eres médica. ¿Qué frase usa la forma femenina?",
        opts: ["Ich bin Arzt.", "Ich bin Ärztin.", "Ich bin Arztin."],
        why: "El femenino de <i>Arzt</i> es <b>Ärztin</b>: se añade <i>-in</i> y la <i>A</i> lleva diéresis."
      },
      {
        q: "¿Cuál es el plural de «die Lehrerin»?",
        opts: ["die Lehrerins", "die Lehrerinnen", "die Lehrerine"],
        why: "El plural de las formas en <i>-in</i> se hace con <b>-nen</b>: <i>die Lehrerinnen</i>."
      },
      {
        tr: "El verbo studieren, todas las personas.",
        why: "Los verbos en <i>-ieren</i> se conjugan de forma regular: <i>studier-</i> más las terminaciones."
      },
      {
        q: "Completa: «Sie ist ___.» (Ella es cocinera.)",
        hint: "forma femenina de Koch",
        why: "<i>Köchin</i>: el femenino añade <i>-in</i> y la <i>o</i> lleva diéresis. Sin la diéresis la palabra es incorrecta."
      },
      {
        q: "Elige el artículo determinado.",
        items: [
          "profesor",
          "profesora",
          "profesión",
          "estudiante universitaria",
          "médica",
          "cocinero"
        ]
      },
      {
        q: "Une cada profesión con su significado.",
        pairs: ["profesor", "médica", "cocinero", "dependienta"]
      },
      {
        tr: "¿A qué se dedica usted?",
        why: "Pregunta con <i>was</i>: el verbo <i>sind</i> va en segunda posición, y con <i>Sie</i> se usa la forma de cortesía."
      },
      {
        q: "Traduce: «Yo soy cocinera.»",
        why: "<i>Ich bin Köchin</i>: profesión sin artículo y forma femenina con <i>-in</i>."
      },
      {
        tr: "¿A qué se dedica usted? Soy profesora.",
        why: "<i>Beruf</i> termina en una <b>f</b> clara, y el acento cae en la segunda sílaba: be-RUF."
      },
      {
        tr: "¿A qué se dedica usted? Soy ingeniera.",
        why: "<i>Ingenieurin</i> es el femenino de <i>Ingenieur</i>: se añade <b>-in</b>. Y sin artículo, como en español."
      }
    ]
  },
  "lesson:a1-u02-l4": {
    theme: "Vida cotidiana",
    title: "Wohnen, arbeiten, kommen",
    objectives: [
      "conjugar los verbos regulares en presente",
      "decir dónde vives, dónde trabajas y de dónde vienes",
      "reconocer países e idiomas"
    ],
    theory: [
      {
        h: "El verbo regular: raíz más terminación",
        p: "Se quita <em>-en</em> del infinitivo y se añade la terminación de la persona: <strong>-e, -st, -t, -en, -t, -en</strong>. De <em>wohnen</em> sale <em>ich wohne, du wohnst, er wohnt, wir wohnen, ihr wohnt, sie/Sie wohnen</em>. Son seis formas pero cuatro terminaciones distintas, porque <em>er</em> e <em>ihr</em> tienen la misma forma, igual que <em>wir</em> y <em>sie/Sie</em>."
      },
      {
        contrast: "En español cada persona tiene su terminación: trabajo, trabajas, trabaja, trabajamos, trabajáis, trabajan. En alemán <em>er arbeitet</em> e <em>ihr arbeitet</em> son idénticas, y <em>wir arbeiten</em> y <em>sie arbeiten</em> también. Por eso, en la oración principal, el pronombre no se omite."
      },
      {
        h: "Raíces en -t y -d: hace falta una -e- más",
        p: "Si la raíz termina en <em>-t</em> o <em>-d</em> (<em>arbeit-</em>, <em>find-</em>), para que la terminación se pueda pronunciar se intercala una <strong>-e-</strong> delante de <em>-st</em> y <em>-t</em>: <em>du arbeitest, er arbeitet, ihr arbeitet</em>. La forma de <em>ich</em> (<em>ich arbeite</em>) y las formas en <em>-en</em> siguen siendo regulares."
      },
      {
        h: "Wo y woher",
        p: "<strong>Wo</strong> pregunta dónde está alguien: <em>Wo wohnst du?</em> → <em>Ich wohne in Berlin.</em> <strong>Woher</strong> pregunta la procedencia: <em>Woher kommen Sie?</em> → <em>Ich komme aus Spanien.</em> Con ciudades y países se usa normalmente <em>in</em> para el lugar y <em>aus</em> para la procedencia. El verbo sigue en segunda posición, y con <em>Sie</em> se conjuga como para «ellos». Ojo con «vivir»: el alemán lo reparte en dos verbos. <em>Wohnen</em> es el verbo corriente para el lugar donde resides; <em>leben</em> es más general (estar vivo, vivir una vida), así que para una dirección empieza por <em>wohnen</em>."
      },
      {
        trap: "Los nombres de los idiomas son sustantivos y se escriben con <b>mayúscula</b>: <em>Deutsch, Italienisch, Englisch</em>, a diferencia del español («alemán», «italiano», «inglés»). Después de <em>sprechen</em> no llevan artículo: <em>Ich spreche Deutsch</em>. Atención: <em>sprechen</em> cambia de vocal con <em>du</em> y <em>er</em> (<em>du sprichst</em>), y ese tipo de verbos lo verás en la unidad 3: por ahora usa solo <em>ich spreche</em> y <em>wir sprechen</em>."
      },
      {
        tip: "Para decir dónde trabajas: <em>Ich arbeite in Hamburg</em>. Para añadir qué haces: <em>Ich arbeite als Lehrerin</em> («trabajo de profesora»), normalmente sin artículo después de <em>als</em>."
      }
    ],
    grammar: {
      title: "Presente regular: wohnen, arbeiten, kommen",
      note: "Con <em>arbeiten</em> la raíz termina en <b>-t</b>, así que aparece la <b>-e-</b> con <em>du</em>, <em>er/sie/es</em> e <em>ihr</em>.",
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
        { tr: "¿Dónde vives?" },
        { tr: "Vivo en Berlín." },
        { tr: "Tú trabajas en Viena." },
        { tr: "Él viene de España." },
        { tr: "Vosotros trabajáis en Hamburgo." },
        { tr: "¿De dónde es usted?", note: "forma de cortesía" }
      ]
    },
    vocab: [
      "Alemania",
      "Italia",
      "Austria",
      "Francia",
      "España",
      "Polonia",
      "el alemán (idioma)",
      "el italiano (idioma)",
      "el inglés (idioma)",
      "el español (idioma)",
      "el francés (idioma)",
      "el polaco (idioma)"
    ],
    exercises: [
      {
        q: "¿Qué frase es correcta?",
        opts: ["Er arbeit in Berlin.", "Er arbeitet in Berlin.", "Er arbeitest in Berlin."],
        why: "La raíz <i>arbeit-</i> termina en <i>-t</i>: con <i>er</i> hace falta la <b>-e-</b> antes de <i>-t</i>."
      },
      {
        q: "¿Qué formas son correctas con «ihr»?",
        opts: ["ihr arbeitet", "ihr kommt", "ihr wohnen", "ihr arbeitest", "ihr wohnt"],
        why: "Con <i>ihr</i> la terminación es <b>-t</b> (<i>-et</i> con raíces en <i>-t</i>). <i>Wohnen</i> es para <i>wir</i> y <i>sie/Sie</i>; <i>-st</i> es para <i>du</i>."
      },
      {
        tr: "El verbo arbeiten, todas las personas.",
        why: "La raíz <i>arbeit-</i> termina en <i>-t</i>: con <i>du</i>, <i>er</i> e <i>ihr</i> aparece la <b>-e-</b>."
      },
      {
        tr: "El verbo kommen, algunas personas.",
        why: "<i>Kommen</i> es regular: <i>du kommst</i>, <i>er kommt</i>, <i>ihr kommt</i>. No hay cambio de vocal."
      },
      {
        q: "Completa: «Du ___ in Wien.» (Trabajas en Viena.)",
        hint: "segunda persona del singular de arbeiten",
        why: "<i>Du arbeitest</i>: tras una raíz en <i>-t</i> hace falta una <b>-e-</b> antes de <i>-st</i>."
      },
      {
        q: "Completa: «Wo ___ ihr?» (¿Dónde vivís?)",
        hint: "segunda persona del plural de wohnen",
        why: "<i>Ihr wohnt</i>: la terminación de <i>ihr</i> es <b>-t</b>."
      },
      {
        tr: "Vivo en Italia y trabajo aquí.",
        why: "En la oración con <i>und</i> el segundo verbo tiene el mismo sujeto, que puede omitirse: <i>und arbeite hier</i>."
      },
      {
        q: "Traduce tuteando: «¿De dónde eres?»",
        why: "<i>Woher kommst du?</i> es la forma más corriente; también es correcta <i>Woher bist du?</i>"
      },
      {
        tr: "Vivo en Viena y vengo de Italia.",
        why: "<i>Wien</i> se pronuncia /viːn/: la <b>w</b> es una <i>v</i> sonora (los dientes superiores tocan el labio inferior, sin pronunciarla como una <i>b</i>) e <i>ie</i> es una <i>i</i> larga."
      },
      {
        tr: "Vengo de Italia y vivo en Berlín.",
        why: "Con las ciudades se usa <i>in</i> para el lugar y <i>aus</i> para la procedencia."
      }
    ]
  },
  "lesson:a1-u02-test": {
    theme: "Prueba",
    title: "Prueba de la unidad 2",
    objectives: ["comprobar pronombres, sein y haben, profesiones, presente regular y números"],
    theory: [
      {
        p: "Diez preguntas sobre toda la unidad. Se aprueba con el 70 %. No repases las lecciones mientras contestas: si no recuerdas algo, es mejor volver a repasar."
      }
    ],
    exercises: [
      {
        q: "¿Cómo se dice «Tengo treinta años»?",
        opts: ["Ich habe dreißig Jahre.", "Ich bin dreißig Jahre alt.", "Ich sind dreißig Jahre alt."],
        why: "<i>Ich bin dreißig Jahre alt</i>: la edad se dice con <b>sein</b> y <i>alt</i>."
      },
      {
        q: "¿Qué número es «73»?",
        opts: ["siebenunddreißig", "dreiundsiebzig", "siebzigdrei"],
        why: "<i>Dreiundsiebzig</i>: primero la unidad (<i>drei</i>), luego la decena (<i>siebzig</i>). <i>Siebenunddreißig</i> es 37."
      },
      {
        q: "La señora Weber es médica. ¿Qué frase usa la forma femenina de la profesión?",
        opts: ["Frau Weber ist Ärztin.", "Frau Weber ist Arzt.", "Frau Weber ist ein Ärztin."],
        why: "El femenino es <b>Ärztin</b>, y la profesión va sin artículo."
      },
      {
        q: "Completa: «Wir ___ aus Polen.» (Venimos de Polonia.)",
        why: "<i>Wir kommen</i>: con <i>wir</i> la terminación es <b>-en</b>."
      },
      {
        q: "Completa: «Ihr ___ Hunger.» (Vosotros tenéis hambre.)",
        why: "<i>Ihr habt</i>: la forma de <i>haben</i> con <i>ihr</i> es <b>habt</b>."
      },
      {
        tr: "El verbo arbeiten: du, er, ihr.",
        why: "Con las raíces en <i>-t</i> hace falta la <b>-e-</b>: <i>du arbeitest, er arbeitet, ihr arbeitet</i>."
      },
      {
        q: "Completa con ist, wohnt y kommt.",
        tr: "Anna es profesora. Vive en Viena y viene de Polonia.",
        why: "Los tres verbos están en tercera persona del singular: <i>ist</i>, <i>wohnt</i>, <i>kommt</i>."
      },
      {
        q: "Traduce, dirigiéndote a una persona de usted: «¿A qué se dedica?»",
        why: "<i>Was sind Sie von Beruf?</i> es la fórmula que has aprendido; <i>Was machen Sie beruflich?</i> es una alternativa correcta."
      },
      {
        tr: "Me llamo Lena, tengo treinta años y vengo de Viena.",
        why: "<i>Dreißig</i> se escribe con <b>ß</b>: se pronuncia como una <i>s</i> sorda, sin duplicarla, y nunca como una «z»."
      },
      {
        tr: "Me llamo Paolo, soy ingeniero y vivo en Berlín.",
        why: "En la oración aparecen tres verbos: <i>heiße</i>, <i>bin</i>, <i>wohne</i>."
      }
    ]
  },
  "unit:a1-u03": {
    title: "Después del trabajo",
    grammarNote: "gern y mögen · verbos con cambio de vocal · acusativo · kein y nicht"
  },
  "lesson:a1-u03-l1": {
    theme: "Gustos y costumbres",
    title: "Decir lo que te gusta",
    objectives: [
      "decir que te gusta hacer algo con gern",
      "decir que te gusta una cosa con mögen",
      "mantener el verbo en segunda posición también cuando la oración empieza por heute"
    ],
    theory: [
      {
        h: "Gern: «con gusto» que se convierte en «me gusta»",
        p: "Para decir que te gusta hacer algo, el alemán no usa un verbo que signifique «gustar»: añade al verbo el adverbio <strong>gern</strong> («con gusto, de buena gana»). <em>Ich trinke gern Tee</em> es «bebo té con gusto», es decir, «me gusta beber té». <em>Gern</em> suele ir justo después del verbo, y después de un pronombre sujeto: <em>Ich esse gern Pizza</em>, <em>Wir trinken gern Limonade</em>."
      },
      {
        contrast: "En español <em>me gusta</em> da la vuelta a la oración: lo que gusta es el sujeto y el verbo concuerda con ello (<em>me gusta el té</em>, <em>me gustan las aceitunas</em>), mientras que quien disfruta pasa a ser complemento indirecto (<em>me, te, le</em>). En alemán no hay esa inversión: el sujeto es quien come o bebe y el verbo concuerda con él: <em>ich trinke</em>, <em>du trinkst</em>. No existe una forma como «gustan»: <em>Ich esse gern Oliven</em>. Además <em>gern</em> no cambia nunca: <em>ich esse gern</em>, <em>du isst gern</em>, <em>wir essen gern</em>."
      },
      {
        h: "Mögen: me gusta una cosa",
        p: "Cuando te gusta una cosa y no una acción, existe el verbo <strong>mögen</strong>: <em>Ich mag Käse</em>, <em>Magst du Fisch?</em>, <em>Wir mögen Suppe</em>. Es irregular: la forma de <em>ich</em> y la de <em>er/sie/es</em> son iguales y no llevan diéresis (<em>mag</em>), y <em>du</em> hace <em>magst</em>. Para decir que te gusta hacer algo, por ahora usa <em>gern</em> después del verbo."
      },
      {
        trap: "Cuando hablas de gustos en general, el sustantivo va normalmente <b>sin artículo</b>: <em>Ich mag Käse</em>, no «Ich mag der Käse». El español dice «me gusta <em>el</em> queso»; el alemán, en este sentido general, omite el artículo (y lo mismo ocurre con el plural: <em>Ich mag Äpfel</em>)."
      },
      {
        h: "El verbo sigue en segunda posición",
        p: "Si la oración empieza por <em>heute</em> (hoy), el sujeto pasa detrás del verbo: <em>Heute trinke ich gern Saft</em>. El verbo conjugado está siempre en segunda posición. En la pregunta de sí o no, en cambio, va en primer lugar: <em>Trinkst du gern Tee?</em>, <em>Magst du Fisch?</em>"
      },
      {
        tip: "Di en voz alta tres oraciones tuyas con <em>gern</em>: <em>Ich esse gern ...</em>, <em>Ich trinke gern ...</em>, <em>Ich mag ...</em>. Tres fórmulas, todo el vocabulario de esta lección."
      }
    ],
    grammar: {
      title: "Mögen en presente",
      note: "Con <b>ich</b> y <b>er/sie/es</b> la forma es la misma: <em>mag</em>. La diéresis aparece solo en el infinitivo y en el plural.",
      table: {
        head: ["persona", "forma", "ejemplo"],
        rows: [
          ["ich", "mag", "Ich mag Käse."],
          ["du", "magst", "Magst du Fisch?"],
          ["er / sie / es", "mag", "Er mag Suppe."],
          ["wir", "mögen", "Wir mögen Suppe."],
          ["ihr", "mögt", "Mögt ihr Pizza?"],
          ["sie / Sie", "mögen", "Sie mögen Nudeln."]
        ]
      },
      examples: [
        { tr: "Me gusta beber té.", note: "gern suele ir después del verbo y después de un pronombre sujeto: Ich trinke gern Tee, Heute trinke ich gern Tee" },
        { tr: "Me gusta comer pizza." },
        { tr: "Me gusta el queso.", note: "sin artículo, en sentido general" },
        { tr: "¿Te gusta el pescado?", note: "pregunta de sí o no: el verbo va primero" },
        { tr: "Hoy bebo zumo con gusto.", note: "el sujeto pasa detrás del verbo" },
        { tr: "Nos gusta la sopa." }
      ]
    },
    vocab: [
      "con gusto, de buena gana",
      "beber",
      "comer",
      "gustar, apreciar (con un sustantivo)",
      "la manzana",
      "la pizza",
      "la ensalada",
      "la sopa",
      "la pasta, los fideos (suele usarse en plural; singular: die Nudel)",
      "el pescado",
      "la carne",
      "la fruta",
      "el refresco dulce con gas (Limonade; no necesariamente de limón)",
      "el queso"
    ],
    exercises: [
      {
        q: "¿Cómo se dice «Me gusta beber té»?",
        opts: ["Ich gern trinke Tee.", "Ich trinke gern Tee.", "Gern ich trinke Tee."],
        why: "El verbo conjugado se queda en segunda posición y <b>gern</b> lo sigue. (<i>Gern trinke ich Tee</i> es posible, con el sujeto detrás del verbo, pero no la versión con <i>ich</i> antes del verbo.)"
      },
      {
        q: "Completa: «Ich ___ Käse.» (Me gusta el queso.)",
        hint: "mögen, primera persona del singular",
        why: "<i>Ich mag</i>: forma irregular, sin diéresis, igual que la de <i>er/sie/es</i>."
      },
      {
        q: "Completa: «Ich ___ gern Fisch.» (Me gusta comer pescado.)",
        hint: "essen, primera persona del singular",
        why: "Con <i>ich</i> el verbo es regular: <b>esse</b>. El cambio de vocal afecta solo a <i>du</i> y a <i>er</i>, lo verás en la lección 2."
      },
      {
        q: "¿Cómo se dice «Me gusta la pizza»?",
        opts: ["Ich mag Pizza.", "Ich Pizza mag.", "Mag ich Pizza."],
        why: "El verbo está en segunda posición y el sustantivo va sin artículo. Con el verbo delante, <i>Mag ich Pizza?</i> sería una pregunta."
      },
      {
        q: "¿Qué oración tiene el verbo en el lugar correcto?",
        opts: ["Heute ich esse Salat.", "Heute esse ich Salat.", "Ich heute esse Salat."],
        why: "Si la oración empieza por <i>heute</i>, el sujeto pasa detrás del verbo: <b>Heute esse ich Salat.</b>"
      },
      {
        q: "Traduce: «Hoy me gusta beber té.»",
        why: "<i>Heute trinke ich gern Tee</i>: el verbo en segunda posición, luego el sujeto, luego <i>gern</i>. También es correcto <i>Ich trinke heute gern Tee</i>."
      },
      {
        q: "Une cada palabra con su significado.",
        pairs: ["beber", "comer", "gustar (con un sustantivo)", "con gusto"]
      },
      {
        q: "Completa las dos oraciones.",
        tr: "Me gusta beber té. ¿Y a ti, te gusta beber té?",
        why: "La segunda oración es una pregunta de sí o no, así que el verbo va en primera posición: <i>Trinkst du ...?</i> Al principio de la oración se escribe con mayúscula."
      },
      {
        tr: "Me gusta comer ensalada y beber agua.",
        why: "En <i>Salat</i> la <b>s</b> inicial ante vocal es sonora, como la <i>s</i> de «mismo». En <i>Wasser</i> la <b>w</b> suena como una <i>v</i> con los dientes sobre el labio inferior, no como una <i>b</i>."
      },
      {
        tr: "Me gusta beber té y comer pan.",
        why: "En <i>Tee</i> la <b>ee</b> es una sola vocal larga, no dos vocales separadas."
      }
    ]
  },
  "lesson:a1-u03-l2": {
    theme: "Gustos y costumbres",
    title: "Verbos con cambio de vocal",
    objectives: [
      "conjugar nehmen, essen y sprechen en presente",
      "reconocer que la vocal cambia solo con du y er/sie/es",
      "pedir la comida: nehmen y essen"
    ],
    theory: [
      {
        h: "Tres verbos, una sola novedad",
        p: "<strong>Nehmen</strong> («tomar»), <strong>essen</strong> («comer») y <strong>sprechen</strong> («hablar») llevan las mismas terminaciones que los demás verbos, pero con <strong>du</strong> y con <strong>er/sie/es</strong> la <em>e</em> de la raíz pasa a <em>i</em>: <em>essen → du isst, er isst</em>; <em>sprechen → du sprichst, er spricht</em>; <em>nehmen → du nimmst, er nimmt</em> (aquí cambia también la consonante: <em>nehm-</em> pasa a <em>nimm-</em>)."
      },
      {
        contrast: "El español conoce bien este fenómeno: <em>pedir → pido</em>, <em>pensar → pienso</em>, <em>poder → puedo</em>. Pero hay una diferencia útil. En español el cambio afecta a yo, tú, él y ellos, y no a nosotros ni a vosotros (<em>pensamos</em>, <em>pensáis</em>). En alemán afecta solo a <b>du</b> y <b>er/sie/es</b>, y la forma de <em>ich</em> no cambia: <em>ich esse</em>, no «ich isse». Con <em>wir</em>, <em>ihr</em> y <em>sie/Sie</em> se usa la raíz del infinitivo: <em>wir essen</em>, <em>ihr esst</em>."
      },
      {
        h: "Essen: du isst, sin doble terminación",
        p: "La raíz de <em>essen</em> termina en <em>-s</em>, así que la terminación de <em>du</em> se reduce: <em>du isst</em>, no «du issst». La forma <em>isst</em> es igual para <em>du</em> y <em>er/sie/es</em>. <em>Ihr esst</em> conserva la vocal original: es otra forma."
      },
      {
        trap: "El cambio de vocal no se aplica a <em>ihr</em>: <em>ihr esst</em>, <em>ihr nehmt</em>, <em>ihr sprecht</em>. Y no vale para todos los verbos: <em>trinken</em> sigue siendo regular (<em>du trinkst</em>). Otros verbos tienen otras alternancias, por ejemplo <em>sehen → du siehst</em>: las verás más adelante. Por ahora aprende estos tres con sus formas."
      },
      {
        h: "Nehmen para pedir, sprechen para los idiomas",
        p: "<em>Ich nehme einen Kaffee</em> equivale a «tomo un café»: es la fórmula típica para decir lo que eliges en un bar o en un restaurante. <em>Sprechen</em> se usa con los idiomas, sin artículo: <em>Ich spreche Deutsch</em>, <em>Sprichst du Italienisch?</em>"
      },
      {
        tip: "Aprende cada verbo como un bloque: <em>essen, du isst, er isst</em>; <em>nehmen, du nimmst, er nimmt</em>; <em>sprechen, du sprichst, er spricht</em>. Si dudas de una forma, pregúntate: ¿es <em>du</em> o <em>er/sie/es</em>? Solo entonces cambia la vocal."
      }
    ],
    grammar: {
      title: "Essen, nehmen, sprechen en presente",
      note: "La vocal cambia (<b>e → i</b>) solo con <b>du</b> y <b>er/sie/es</b>.",
      table: {
        head: ["persona", "essen", "nehmen", "sprechen"],
        rows: [
          ["ich", "esse", "nehme", "spreche"],
          ["du", "isst", "nimmst", "sprichst"],
          ["er / sie / es", "isst", "nimmt", "spricht"],
          ["wir", "essen", "nehmen", "sprechen"],
          ["ihr", "esst", "nehmt", "sprecht"],
          ["sie / Sie", "essen", "nehmen", "sprechen"]
        ]
      },
      examples: [
        { tr: "Como arroz." },
        { tr: "Tú comes pescado.", note: "du isst: la vocal cambia" },
        { tr: "Él toma una sopa." },
        { tr: "Nosotros tomamos café.", note: "con wir la raíz no cambia" },
        { tr: "¿Hablas alemán?" },
        { tr: "Vosotros coméis patatas.", note: "ihr esst: sin cambio de vocal" }
      ]
    },
    vocab: [
      "tomar (también al pedir en un bar)",
      "comer",
      "hablar",
      "la salchicha",
      "el huevo",
      "el arroz",
      "la patata",
      "la verdura",
      "la cena",
      "el idioma, la lengua",
      "despacio",
      "también (no confundir con la palabra alemana «also», que significa «así que»)"
    ],
    exercises: [
      {
        tr: "Toda la conjugación de nehmen, sin mirar.",
        why: "Con <i>du</i> y <i>er/sie/es</i> cambian la vocal y la consonante: <b>nimmst, nimmt</b>. Las demás personas usan la raíz del infinitivo: <i>nehme, nehmen, nehmt, nehmen</i>."
      },
      {
        q: "¿Cómo se dice «tú comes»?",
        opts: ["du esst", "du isst", "du esse"],
        why: "<b>Du isst</b>: la vocal cambia (e → i) y la terminación <i>-st</i> se reduce porque la raíz acaba en <i>s</i>. <i>Esst</i> es la forma de <i>ihr</i>."
      },
      {
        q: "Completa: «Er ___ einen Apfel.» (Él toma una manzana.)",
        hint: "nehmen, tercera persona del singular",
        why: "<b>Er nimmt</b>: cambian tanto la vocal como la consonante respecto a <i>nehmen</i>."
      },
      {
        q: "Completa: «Du ___ sehr gut Deutsch.» (Hablas muy bien alemán.)",
        hint: "sprechen, segunda persona del singular",
        why: "<b>Du sprichst</b>: e → i y terminación <i>-st</i>."
      },
      {
        q: "¿Con qué pronombre NO cambia la vocal?",
        opts: ["du", "er", "wir"],
        why: "Con <b>wir</b> se usa la raíz del infinitivo: <i>wir essen, wir nehmen, wir sprechen</i>. El cambio afecta solo a <i>du</i> y a <i>er/sie/es</i>."
      },
      {
        q: "¿Qué oraciones son correctas?",
        opts: ["Er isst Fisch.", "Du sprecht Deutsch.", "Ihr esst Reis.", "Ich nimme Tee.", "Sie nimmt eine Suppe."],
        why: "<i>Du sprichst</i> (no «sprecht», que es de <i>ihr</i>); <i>ich nehme</i> (con <i>ich</i> la vocal no cambia). Las otras tres son correctas."
      },
      {
        tr: "Hoy Anna come arroz y verdura.",
        why: "Si la oración empieza por <i>heute</i>, el verbo se queda en segunda posición: <i>Heute isst Anna ...</i>"
      },
      {
        q: "Traduce: «Tú hablas italiano y yo hablo alemán.»",
        why: "<i>Du sprichst</i> con cambio de vocal, <i>ich spreche</i> sin él: los pronombres no se omiten."
      },
      {
        tr: "Tú comes arroz y yo tomo patatas.",
        why: "<i>Du isst</i>: la <b>i</b> es breve y la <b>ss</b> es sorda, como la <i>s</i> de «casa» en español."
      },
      {
        tr: "Yo como arroz y tú comes patatas.",
        why: "Recuerda el cambio de vocal: <i>ich esse</i>, pero <i>du isst</i>."
      }
    ]
  },
  "lesson:a1-u03-l3": {
    theme: "En el bar",
    title: "Pedir, ofrecer, aceptar, rechazar",
    objectives: [
      "pedir una bebida con einen, eine, ein",
      "ofrecer con Möchten Sie ...? y responder con Ja, gern o Nein, danke",
      "reconocer que en el caso acusativo solo cambia el masculino singular"
    ],
    theory: [
      {
        h: "Ofrecer, aceptar, rechazar",
        p: "Para ofrecer algo a un conocido: <em>Möchtest du einen Kaffee?</em>; a una persona a la que tratas de usted: <em>Möchten Sie einen Kaffee?</em> Para aceptar: <strong>Ja, gern</strong> o <strong>Ja, bitte</strong>. Para rechazar: <strong>Nein, danke</strong>. Para pedir algo: <em>Ich möchte einen Saft</em>, es decir, «quisiera un zumo»."
      },
      {
        trap: "Ante un ofrecimiento, en español un «gracias» a secas puede ser sí o no según el tono. En alemán, <em>danke</em> solo suele entenderse a menudo como rechazo («no, gracias»), mientras que <em>bitte</em> suena a aceptación. Para que no haya malentendidos, di <em>Ja, bitte</em> o <em>Ja, gern</em> si aceptas, y <em>Nein, danke</em> si rechazas."
      },
      {
        h: "Möchte: por ahora, una fórmula",
        p: "<em>Ich möchte ...</em> es la fórmula amable para decir lo que deseas, equivalente a «quisiera». Las formas que debes aprender ahora son <em>ich möchte</em>, <em>du möchtest</em> y <em>Sie möchten</em>. En estas fórmulas lo que deseas es el complemento directo y va en acusativo: <em>Ich möchte einen Saft</em>."
      },
      {
        h: "El acusativo: solo cambia el masculino",
        p: "El complemento directo (lo que tomas, bebes, pides) va en <strong>acusativo</strong>. Respecto al nominativo, solo cambia el masculino singular: <strong>der → den</strong>, <strong>ein → einen</strong>, <strong>kein → keinen</strong>. El femenino, el neutro y el plural no cambian: <em>Die Cola ist kalt. Ich trinke die Cola.</em> (nominativo y acusativo: <em>die</em> en ambos), <em>Das ist ein Wasser. Ich nehme ein Wasser.</em> (<em>ein</em> en ambos)."
      },
      {
        contrast: "En español <em>un café</em> es siempre <em>un café</em>, sea sujeto u objeto: la función se entiende por la posición. En alemán la función se lee en el artículo, y solo en el masculino: <em>Der Kaffee ist heiß</em> (sujeto), pero <em>Ich nehme den Kaffee</em> (objeto). El español tiene la «a» personal (<em>veo a Ana</em>), pero no es un equivalente: marca ciertos complementos directos de persona, mientras que el acusativo alemán se ve en el artículo masculino, sea persona o cosa. No busques una «a» en alemán. Por eso en el bar se dice <em>Einen Kaffee, bitte</em>: detrás hay un «(ich nehme) einen Kaffee»."
      },
      {
        trap: "Después de <em>sein</em> («ser») se queda el nominativo, porque no hay complemento directo: <em>Das ist ein Saft</em>, no «Das ist einen Saft». <em>Einen</em> aparece con verbos como <em>nehmen</em>, <em>trinken</em>, <em>essen</em>, <em>möchten</em>, <em>haben</em>."
      },
      {
        tip: "Cuando tengas que elegir entre <em>ein</em> y <em>einen</em>, mira el género del sustantivo: si es masculino (<em>der Saft</em>, <em>der Kaffee</em>, <em>der Tee</em>) y es el complemento directo, como cuando pides o dices lo que tomas, usa <em>einen</em>; como sujeto se queda <em>ein</em>. Por eso el vocabulario del curso muestra siempre el artículo."
      }
    ],
    grammar: {
      title: "Nominativo y acusativo del artículo",
      note: "Cambia <b>solo el masculino singular</b>. Después de <em>sein</em> se usa el nominativo.",
      table: {
        head: ["género", "nominativo", "acusativo", "ejemplo"],
        rows: [
          ["masculino", "der / ein", "den / einen", "Ich nehme einen Saft."],
          ["femenino", "die / eine", "die / eine", "Ich möchte eine Cola."],
          ["neutro", "das / ein", "das / ein", "Ich nehme ein Wasser."],
          ["plural", "die / (ninguno)", "die / (ninguno)", "Ich möchte Pommes."]
        ]
      },
      examples: [
        { tr: "Tomo un zumo.", note: "Saft es masculino: einen" },
        { tr: "Quisiera una cola.", note: "femenino: no cambia" },
        { tr: "¿Desea un vaso de agua?", note: "forma de cortesía" },
        { tr: "Sí, con gusto." },
        { tr: "No, gracias." },
        { tr: "Esto es un zumo.", note: "después de sein: nominativo" }
      ]
    },
    culture: {
      title: "Una mirada alemana: Feierabend, Kneipe y Biergarten",
      text: "<p><i>Feierabend</i> es el final de la jornada laboral y, por extensión, el tiempo libre que viene después. A quien está terminando de trabajar se le desea <i>Schönen Feierabend!</i> Muchos se reúnen con compañeros o amigos en una <i>Kneipe</i>, un local informal de barrio donde normalmente hay cerveza y bebidas sin alcohol, y a menudo algo de comer. A diferencia de la caña con tapa de muchos bares españoles, en una Kneipe lo habitual es que la comida se pida aparte y no venga incluida con la bebida.</p><p>El <i>Biergarten</i> es un local con mesas al aire libre, típico de la buena estación y de la tradición bávara. En algunos Biergärten tradicionales se puede llevar la propia comida, pero no en todos: conviene mirar los carteles de la entrada. A menudo se pide en la barra y se lleva la bandeja a la mesa, y en otros casos viene el camarero.</p><p>Pedir un agua o un zumo es perfectamente normal: entre las bebidas sin alcohol muy habituales está la <i>Apfelschorle</i>, zumo de manzana con agua con gas. Antes de beber se dice <i>Prost!</i> («¡salud!») y es costumbre mirarse a los ojos.</p>"
    },
    vocab: [
      "Quisiera ... (fórmula amable)",
      "¿Desea ...? (cortesía)",
      "¿Quieres ...? (informal)",
      "Sí, con gusto.",
      "Sí, por favor.",
      "No, gracias.",
      "¡Salud!",
      "el zumo de naranja",
      "el zumo de manzana",
      "el agua mineral",
      "el vaso",
      "la botella"
    ],
    exercises: [
      {
        tr: "Todas las personas de trinken.",
        why: "<i>Trinken</i> es regular: raíz <i>trink-</i> más <i>-e, -st, -t, -en, -t, -en</i>."
      },
      {
        tr: "El verbo bestellen (pedir): ich, er, ihr.",
        why: "<i>Bestellen</i> es regular: raíz <i>bestell-</i> más la terminación: <i>ich bestelle, er bestellt, ihr bestellt</i>."
      },
      {
        q: "Completa: «Ich möchte ___ Saft.» (Quisiera un zumo.)",
        hint: "der Saft es masculino; acusativo",
        why: "<b>Einen</b>: después de <i>möchte</i> va el acusativo, y en el masculino <i>ein</i> pasa a <i>einen</i>."
      },
      {
        q: "Completa: «Ich nehme ___ Cola.» (Tomo una cola.)",
        hint: "die Cola es femenino",
        why: "<b>Eine</b>: el femenino no cambia en acusativo."
      },
      {
        q: "Te ofrecen: «Möchtest du ein Bier?» No quieres. ¿Qué respondes?",
        opts: ["Ja, gern.", "Nein, danke.", "Prost!"],
        why: "<b>Nein, danke</b> es el rechazo claro. <i>Ja, gern</i> acepta; <i>Prost!</i> se dice antes de beber."
      },
      {
        q: "¿Qué oraciones son correctas?",
        opts: [
          "Ich trinke einen Tee.",
          "Ich trinke ein Tee.",
          "Ich esse eine Suppe.",
          "Ich nehme ein Brot.",
          "Ich nehme eine Brot."
        ],
        why: "<i>Tee</i> es masculino (<i>einen</i>), <i>Suppe</i> es femenino (<i>eine</i>), <i>Brot</i> es neutro (<i>ein</i>)."
      },
      {
        tr: "Quisiera un zumo de manzana y un agua.",
        why: "<i>Apfelsaft</i> es masculino: <i>einen</i>. <i>Wasser</i> es neutro: <i>ein</i>."
      },
      {
        q: "Traduce: «Un zumo de naranja y un agua, por favor.»",
        why: "<i>Einen Orangensaft</i> (masculino) y <i>ein Wasser</i> (neutro): la oración es un pedido abreviado, con un «(ich nehme/möchte) ...» detrás, así que va el acusativo."
      },
      {
        tr: "Quisiera un zumo de naranja y una botella de agua, por favor.",
        why: "En <i>Orangensaft</i> la <b>g</b> se pronuncia como la <i>j</i> francesa de «jour» (/ʒ/), no como la <i>j</i> española ni como la <i>g</i> de «gato», y <i>-saft</i> empieza por una <b>s</b> sonora."
      },
      {
        tr: "Un zumo de manzana y un vaso de agua, por favor.",
        why: "<i>Glas</i> tiene la <b>a</b> larga, y <i>Gläser</i> es el plural con diéresis."
      }
    ]
  },
  "lesson:a1-u03-l4": {
    theme: "Rechazar con educación",
    title: "Kein o nicht, y doch",
    objectives: [
      "negar un sustantivo con kein",
      "negar un verbo o un adjetivo con nicht",
      "responder con doch a una pregunta negativa"
    ],
    theory: [
      {
        h: "Dos negaciones, elegidas según lo que niegas",
        p: "<strong>Kein</strong> niega un sustantivo que lleva artículo indefinido o ninguno: <em>Ich trinke kein Bier</em>, <em>Ich habe keinen Hunger</em>, <em>Wir haben keine Cola</em>. Toma las terminaciones de <em>ein</em>: <em>kein</em> (masculino nominativo y neutro), <em>keinen</em> (masculino acusativo), <em>keine</em> (femenino y plural). <strong>Nicht</strong> niega todo lo demás: un verbo, un adjetivo, un adverbio, o un sustantivo con artículo definido: <em>Ich komme nicht</em>, <em>Der Kaffee ist nicht heiß</em>, <em>Ich trinke den Tee nicht</em>."
      },
      {
        contrast: "El español tiene una sola palabra, <em>no</em>, que va delante del verbo: <em>no bebo cerveza</em>, <em>no vengo</em>. En alemán hay que elegir: <em>Ich trinke kein Bier</em> (sustantivo) e <em>Ich komme nicht</em> (verbo), y <em>nicht</em> no va delante del verbo: palabra por palabra sería «yo vengo no». <em>Kein</em> se parece a «ningún» o a «no ... un»: <em>Ich habe keinen Bruder</em> es «no tengo ningún hermano». Y mientras el español acumula negaciones (<em>no tengo ningún hermano</em>), el alemán usa una sola."
      },
      {
        h: "Dónde va nicht",
        p: "Posición: si <em>nicht</em> niega toda la oración, suele ir hacia el <strong>final</strong>: <em>Ich komme heute nicht</em>. Si niega una palabra concreta, va <strong>antes</strong> de ella: <em>Der Kaffee ist nicht heiß</em>, <em>Ich trinke nicht gern Bier</em>. Es una tendencia, no una ley: en los ejemplos de la lección la verás en acción."
      },
      {
        h: "Doch: contradecir una pregunta negativa",
        p: "Si alguien te hace una pregunta negativa (<em>Trinkst du kein Bier?</em>) y quieres decir que sí, la respuesta es <strong>doch</strong>: <em>Doch, ich trinke gern Bier</em>. Si quieres confirmar la negación, responde <em>Nein</em>: <em>Nein, ich trinke kein Bier</em>."
      },
      {
        trap: "El español responde «sí» a una pregunta negativa para contradecirla: <em>¿No bebes cerveza? Sí, la bebo</em>. En alemán <em>Ja</em> puede resultar ambiguo, y se usa <em>doch</em>. Otro error frecuente, sobre todo si estás acostumbrado a acumular negaciones, es «nicht kein»: después de <em>kein</em> no hace falta otra negación. Y con un sustantivo sin artículo no se dice <em>Ich trinke nicht Bier</em>, sino <em>Ich trinke kein Bier</em>."
      },
      {
        tip: "Para rechazar con educación bastan pocas fórmulas: <em>Nein, danke</em>, <em>Heute nicht, danke</em>, <em>Kein Bier, bitte</em>. Son claras y amables, y no necesitan explicación."
      }
    ],
    grammar: {
      title: "Kein y nicht",
      note: "<b>Kein</b> niega los sustantivos con artículo indefinido o sin artículo; <b>nicht</b> niega el resto.",
      table: {
        head: ["género", "nominativo", "acusativo", "ejemplo"],
        rows: [
          ["masculino", "kein", "keinen", "Ich trinke keinen Tee."],
          ["femenino", "keine", "keine", "Ich nehme keine Cola."],
          ["neutro", "kein", "kein", "Ich trinke kein Bier."],
          ["plural", "keine", "keine", "Wir haben keine Äpfel."]
        ]
      },
      examples: [
        { tr: "No bebo cerveza.", note: "kein: sustantivo sin artículo" },
        { tr: "No tengo hambre.", note: "Hunger es masculino: keinen" },
        { tr: "El café no está caliente.", note: "nicht: adjetivo" },
        { tr: "Hoy no vengo.", note: "nicht: verbo" },
        { tr: "¿No bebes cerveza? Sí, con gusto.", note: "doch contradice la pregunta negativa" },
        { tr: "No me gusta beber cerveza.", note: "nicht gern" }
      ]
    },
    vocab: [
      "el bar de barrio (Kneipe)",
      "el jardín de cerveza (Biergarten)",
      "el final de la jornada laboral, el tiempo libre después del trabajo",
      "el hambre",
      "la sed",
      "el alcohol",
      "sin alcohol",
      "hoy",
      "sí (respuesta que contradice una pregunta negativa)",
      "no (verbo, adjetivo, adverbio)",
      "ningún, no ... un (delante de un sustantivo)",
      "saber (a); estar rico",
      "todavía; otro, más",
      "La cuenta, por favor."
    ],
    exercises: [
      {
        q: "¿Cómo se dice «No bebo cerveza»?",
        opts: ["Ich trinke kein Bier.", "Ich trinke keinen Bier.", "Ich trinke keine Bier."],
        why: "<i>Bier</i> es neutro, por tanto <b>kein</b>. Para nombrar lo que no bebes (un sustantivo sin artículo) se usa <i>kein</i>."
      },
      {
        q: "¿Qué negación hace falta? «Ich komme heute ___.»",
        opts: ["kein", "nicht", "keine"],
        why: "Aquí se niega un verbo, no un sustantivo: <b>nicht</b>."
      },
      {
        q: "Completa: «Ich habe ___ Hunger.» (No tengo hambre.)",
        hint: "der Hunger es masculino; acusativo",
        why: "<i>Haben</i> pide acusativo y <i>Hunger</i> es masculino: <b>keinen</b>."
      },
      {
        q: "Completa: «Der Kaffee ist ___ heiß.» (El café no está caliente.)",
        hint: "negación de un adjetivo",
        why: "Un adjetivo se niega con <b>nicht</b>, colocado delante."
      },
      {
        q: "Ich trinke ___ ... (complemento directo, con artículo definido). Elige la forma correcta para cada sustantivo.",
        why: "Con el artículo definido, en acusativo solo cambia el masculino: <i>den Tee</i>, <i>den Saft</i>; <i>die Cola</i>, <i>die Limonade</i> y <i>das Bier</i>, <i>das Wasser</i> se quedan igual. Un sustantivo con artículo definido se niega con <i>nicht</i>: <i>Ich trinke den Tee nicht</i>.",
        items: ["té", "cola", "cerveza", "zumo", "refresco dulce con gas", "agua"]
      },
      {
        q: "Traduce: «Hoy no bebo cerveza.»",
        why: "<i>Heute trinke ich kein Bier</i>: con <i>heute</i> en primera posición, el sujeto pasa detrás del verbo."
      },
      {
        q: "Completa la respuesta.",
        tr: "¿No bebes cerveza? Sí que bebo, con gusto.",
        why: "<b>Doch</b> contradice una pregunta negativa. <i>Ja</i> sería ambiguo."
      },
      {
        q: "Un amigo te ve sin tu vaso de siempre.",
        setting: "Después del trabajo, en una Kneipe.",
        lines: [
          { tr: "¿No bebes cerveza?" },
          { tr: "Responde que sí, pero hoy no.", answerTr: "Sí que bebo, pero hoy no." },
          { tr: "¿Entonces un zumo?" },
          { tr: "Acepta y pide un zumo de manzana.", answerTr: "Sí, con gusto. Un zumo de manzana, por favor." }
        ]
      },
      {
        tr: "Tengo hambre, pero hoy no como pescado.",
        why: "<i>Fisch</i> es masculino, de ahí <i>keinen Fisch</i>. El sonido <b>sch</b> es como la «sh» del inglés «ship», que no existe en español, y en <i>Hunger</i> la <b>h</b> inicial es un soplo de aire, no una <i>j</i> española."
      },
      {
        tr: "No, gracias. Hoy no bebo alcohol.",
        why: "<i>Heute</i>: el grupo <b>eu</b> suena «oi»."
      }
    ]
  },
  "lesson:a1-u03-test": {
    theme: "Verificación",
    title: "Verificación de la unidad 3",
    objectives: ["comprobar el cambio de vocal, el acusativo, kein y nicht"],
    theory: [
      {
        p: "Diez preguntas sobre toda la unidad. Se supera con el 70%. No repases las lecciones mientras respondes: si no recuerdas algo, es mejor volver a repasar."
      }
    ],
    exercises: [
      {
        q: "Completa: «Du ___ gern Fisch.» (Te gusta comer pescado.)",
        hint: "essen, segunda persona del singular",
        why: "<b>Du isst</b>: la vocal cambia y la terminación se reduce."
      },
      {
        tr: "El verbo sprechen: du, er, ihr.",
        why: "<i>du sprichst, er spricht, ihr sprecht</i>: la vocal cambia solo con <i>du</i> y <i>er</i>."
      },
      {
        tr: "El verbo nehmen: ich, du, wir.",
        why: "<i>ich nehme, du nimmst, wir nehmen</i>: cambia solo la forma de <i>du</i>."
      },
      {
        q: "Completa: «Ich möchte ___ Apfelsaft.» (Quisiera un zumo de manzana.)",
        hint: "der Apfelsaft es masculino",
        why: "<b>Einen</b>: acusativo masculino."
      },
      {
        q: "Completa: «Der Saft ist ___ kalt.» (El zumo no está frío.)",
        hint: "negación de un adjetivo",
        why: "Un adjetivo se niega con <b>nicht</b>."
      },
      {
        q: "Elige el artículo indefinido correcto. «Ich nehme ___ ...»",
        items: ["café", "cola", "pan", "zumo"]
      },
      {
        q: "¿Cómo se dice «No como carne»?",
        opts: ["Ich esse kein Fleisch.", "Ich esse keinen Fleisch.", "Ich esse keine Fleisch."],
        why: "<i>Fleisch</i> es neutro, por tanto <b>kein</b>."
      },
      {
        q: "Traduce: «Hoy no bebo cerveza, tomo un zumo.»",
        why: "<i>Kein Bier</i> (sustantivo), <i>einen Saft</i> (masculino acusativo)."
      },
      {
        tr: "Tú comes pescado con gusto, pero yo no como pescado.",
        why: "<i>Du isst</i> con cambio de vocal; <i>keinen Fisch</i> porque <i>Fisch</i> es masculino."
      },
      {
        tr: "Quisiera un zumo, pero no una cerveza, por favor.",
        why: "<i>Einen Saft</i> y <i>kein Bier</i>: el masculino cambia, el neutro no."
      }
    ]
  }
});
