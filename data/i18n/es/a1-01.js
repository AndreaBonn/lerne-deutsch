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
  "unit:a1-u02": { title: "Quién eres", grammarNote: "avere · números · profesiones y nacionalidades" },
  "lesson:a1-u02-l1": {
    theme: "Conocer gente",
    title: "Presentarse",
    objectives: [
      "decir tu nombre, de dónde eres y dónde vives",
      "usar el verbo chiamarsi",
      "preguntar lo mismo a los demás"
    ],
    theory: [
      {
        h: "«Me llamo» es un verbo reflexivo",
        p: "<strong>Chiamarsi</strong> significa literalmente «llamarse». De ahí <em>mi chiamo</em>. El pronombre reflexivo (<em>mi, ti, si…</em>) va <b>delante</b> del verbo, exactamente como en español."
      },
      {
        h: "De dónde eres: essere di o venire da",
        p: "Para una ciudad se dice <em>sono di Madrid</em>; para un país, <em>vengo dalla Spagna</em> o <em>sono spagnolo/a</em>. Los nombres de país llevan artículo (<em>l'Italia, la Spagna</em>), los de ciudad no."
      },
      {
        trap: "Las nacionalidades se escriben en <b>minúscula</b>: <em>sono spagnola</em>, <em>un ragazzo italiano</em>. Como en español, así que aquí no hay nada que desaprender: el que sufre es quien viene del inglés."
      },
      {
        h: "Abitare: vivir en un sitio",
        p: "<em>Abitare a Roma</em> (ciudad), <em>abitare in Italia</em> (país). El mismo reparto a/in vuelve más adelante con los viajes, así que conviene memorizarlo ya como pareja: <b>a + ciudad, in + país</b>. El español usa «en» para las dos cosas, y ahí está la dificultad."
      }
    ],
    grammar: {
      title: "Chiamarsi (llamarse) y preguntar por alguien",
      table: {
        head: ["persona", "chiamarsi", "ejemplo"],
        rows: [
          ["io", "mi chiamo", "Mi chiamo Anna."],
          ["tu", "ti chiami", "Come ti chiami?"],
          ["lui / lei / Lei", "si chiama", "Come si chiama, scusi?"],
          ["noi", "ci chiamiamo", "Ci chiamiamo Rossi."],
          ["voi", "vi chiamate", "Come vi chiamate?"],
          ["loro", "si chiamano", "Si chiamano Marco e Luca."]
        ]
      },
      examples: [
        { tr: "¿Cómo te llamas? — Me llamo Eva." },
        { tr: "¿De dónde eres? — Soy de Sevilla." },
        { tr: "Soy española, pero vivo en Milán.", note: "la nacionalidad en minúscula" },
        { tr: "¿Cuántos años tienes? — Tengo veintiocho.", note: "la edad siempre va con avere" },
        { tr: "Encantado, Marco. — El gusto es mío." }
      ]
    },
    vocab: [
      "ser/estar",
      "me llamo…",
      "¿cómo te llamas?",
      "¿de dónde eres?",
      "soy de… (ciudad)",
      "vivo en… (ciudad)",
      "español (m. / f.)",
      "italiano (m. / f.)",
      "nombre",
      "apellido",
      "encantado",
      "yo también",
      "¿en serio?"
    ],
    exercises: [
      {
        q: "¿Cómo preguntas el nombre de manera informal?",
        opts: ["Come si chiama?", "Come ti chiami?", "Come vi chiamate?"],
        why: "La forma de tu: <i>ti chiami</i>. La versión de Lei es <i>come si chiama?</i>"
      },
      {
        q: "¿Qué frase está bien escrita?",
        opts: ["Sono Spagnola.", "Sono spagnola.", "Sono la spagnola."],
        why: "Las nacionalidades van en minúscula y sin artículo después de essere."
      },
      { q: "Completa: «___ chiamo Marta.»", why: "Pronombre reflexivo de primera persona: mi chiamo." },
      {
        q: "Completa: «Abito ___ Roma.» (Vivo en Roma.)",
        why: "Las ciudades llevan <b>a</b> y los países <b>in</b>: abito a Roma / abito in Italia."
      },
      {
        q: "Completa la presentación.",
        tr: "¡Hola! Me llamo Kate, soy de Sevilla y vivo en Bolonia.",
        why: "Los tres verbos que salen en cualquier primera frase sobre uno mismo."
      },
      { tr: "Encantado, me llamo Luca." },
      {
        q: "Conoces a alguien en una escuela de idiomas.",
        setting: "Primer día en una escuela de idiomas de Florencia.",
        lines: [
          { tr: "¡Hola! Soy Giulia. ¿Y tú, cómo te llamas?" },
          { tr: "Preséntate con tu nombre.", answerTr: "Me llamo Eva." },
          { tr: "¡Encantada, Eva! ¿De dónde eres?" },
          { tr: "Di que eres de Polonia: es la respuesta modelo grabada.", answerTr: "Soy de Polonia." }
        ]
      },
      { tr: "Me llamo Elena y vivo en Nápoles." },
      { tr: "¡Encantado!" }
    ]
  },
  "lesson:a1-u02-l2": {
    theme: "Gramática básica",
    title: "Tener, y los números del 0 al 100",
    objectives: [
      "conjugar avere",
      "usar expresiones como ho fame, ho freddo, ho ventotto anni",
      "contar hasta cien y decir un precio"
    ],
    theory: [
      {
        h: "Avere trabaja igual que «tener»",
        p: "El italiano usa <strong>avere</strong> donde el inglés usa «ser». <em>Ho fame</em> es literalmente «tengo hambre», y eso en español ya lo dices así. Lo mismo con la sed, el frío, el calor, el miedo, el sueño y la edad. Es uno de los capítulos que el español te regala entero."
      },
      {
        h: "La edad: siempre avere",
        p: "<em>Ho trent'anni</em>, «tengo treinta años». Fíjate en el apóstrofo: <em>trent'anni</em>, <em>vent'anni</em>. La vocal final de la decena desaparece delante de <em>anni</em>."
      },
      {
        h: "La h que nunca se oye",
        p: "Las formas <em>ho, hai, ha, hanno</em> empiezan por una <b>h</b> muda. No se pronuncia en absoluto: existe solo para distinguirlas de otras palabras — <em>ho</em> (tengo) frente a <em>o</em> (o), <em>ha</em> (tiene) frente a <em>a</em> (a). Es la misma h muda del español, con una función distinta."
      },
      {
        h: "Números: decena más unidad",
        p: "A partir de 20 se escriben en una sola palabra: <em>ventidue</em>, <em>trentasei</em>. Delante de <em>uno</em> y de <em>otto</em> la decena pierde su vocal final: <b>ventuno</b>, <b>ventotto</b>, <b>trentuno</b>."
      }
    ],
    grammar: {
      title: "Avere (tener) y los números",
      table: {
        head: ["persona", "avere", "expresión"],
        rows: [
          ["io", "ho", "Ho fame. (Tengo hambre.)"],
          ["tu", "hai", "Hai freddo? (¿Tienes frío?)"],
          ["lui / lei / Lei", "ha", "Ha ragione. (Tiene razón.)"],
          ["noi", "abbiamo", "Abbiamo sete. (Tenemos sed.)"],
          ["voi", "avete", "Avete tempo? (¿Tenéis tiempo?)"],
          ["loro", "hanno", "Hanno paura. (Tienen miedo.)"]
        ]
      },
      examples: [
        { tr: "1, 2, 3, 4, 5" },
        { tr: "6, 7, 8, 9, 10" },
        { tr: "11, 12, 13… 20" },
        { tr: "21, 22, 28", note: "delante de uno y otto la decena pierde la vocal" },
        { tr: "30, 40, 50, 60" },
        { tr: "70, 80, 90, 100" },
        { tr: "Tengo veintiocho años." }
      ]
    },
    vocab: [
      "tener",
      "tengo hambre",
      "tengo sed",
      "tengo frío / calor",
      "tengo sueño",
      "tengo miedo",
      "tengo razón",
      "necesito…",
      "¿cuántos años tienes?",
      "¿cuánto es?",
      "euro",
      "número",
      "número de teléfono"
    ],
    exercises: [
      { why: "Cuatro formas empiezan por h muda: ho, hai, ha, hanno." },
      {
        q: "¿Cómo se dice «tengo hambre»?",
        opts: ["Sono fame", "Ho fame", "Sto fame"],
        why: "Los estados físicos van con avere: ho fame, ho sete, ho freddo. Igual que en español."
      },
      { q: "¿Qué número es «settantasei»?", opts: ["66", "76", "86"], why: "settanta (70) + sei (6) = 76." },
      { q: "Escríbelo en cifras: «novantatré»", why: "novanta (90) + tre (3)." },
      {
        q: "Completa: «Ho vent___ anni.» (Tengo veinte años.)",
        hint: "algo desaparece delante de «anni»",
        why: "Vent'anni: la decena pierde la vocal final delante de anni."
      },
      { q: "«¿Cuántos años tienes?»", why: "Literalmente: «cuántos años tienes», igual que en español." },
      {
        q: "Empareja la expresión con avere y su significado.",
        pairs: ["tengo sed", "tengo sueño", "tengo miedo", "tengo razón"]
      },
      {
        q: "Completa el intercambio en la caja.",
        tr: "— ¿Cuánto es? — Treinta y dos euros. — Solo tengo veinte, lo siento."
      },
      { tr: "Tengo treinta y cinco años y vivo en Turín." },
      { tr: "¿Cuánto cuesta un capuchino?" }
    ]
  },
  "lesson:a1-u02-l3": {
    theme: "Trabajo y personas",
    title: "Profesiones y trabajo",
    objectives: [
      "decir a qué te dedicas",
      "usar fare il / essere un",
      "formar el femenino de los nombres de profesión"
    ],
    theory: [
      {
        h: "Dos construcciones, dos matices",
        p: "«Soy arquitecto» tiene dos versiones en italiano. <strong>Faccio l'architetto</strong> (literalmente «hago el arquitecto») habla del oficio que ejerces y es lo más común al hablar. <strong>Sono architetto</strong> subraya la identidad o la titulación. Después de <em>fare</em> va el artículo determinado; después de <em>essere</em>, normalmente ninguno — igual que en español, «soy arquitecto» sin artículo."
      },
      {
        h: "Formas femeninas",
        list: [
          "-o → -a: <em>l'impiegato → l'impiegata</em>",
          "-e → -essa: <em>il professore → la professoressa</em>, <em>lo studente → la studentessa</em>",
          "-tore → -trice: <em>l'attore → l'attrice</em>, <em>il direttore → la direttrice</em>",
          "sin cambio: <em>il/la giornalista</em>, <em>il/la dentista</em>, <em>il/la cantante</em>"
        ]
      },
      {
        h: "Nombres de profesión en movimiento",
        p: "Formas como <em>l'avvocata</em>, <em>la sindaca</em>, <em>la ministra</em> son hoy estándar en la prensa y en los documentos oficiales, aunque hace veinte años provocaban discusiones. Al hablar todavía se oye <em>l'avvocato</em> referido a una mujer. Es el mismo debate que «la jueza» o «la médica» en español, y va por el mismo camino."
      },
      {
        contrast: "El sufijo <em>-essa</em> no tiene equivalente español y suena raro al principio: <em>la professoressa</em>, <em>la studentessa</em>, <em>la dottoressa</em>. No es una forma anticuada ni despectiva, es la normal."
      }
    ],
    grammar: {
      title: "Fare (hacer) — presente",
      note: "Irregular y, al mismo tiempo, uno de los tres verbos italianos más frecuentes.",
      table: {
        head: ["persona", "fare", "ejemplo"],
        rows: [
          ["io", "faccio", "Faccio l'insegnante."],
          ["tu", "fai", "Che lavoro fai?"],
          ["lui / lei / Lei", "fa", "Fa il medico."],
          ["noi", "facciamo", "Facciamo colazione."],
          ["voi", "fate", "Che cosa fate?"],
          ["loro", "fanno", "Fanno gli avvocati."]
        ]
      },
      examples: [
        { tr: "¿A qué te dedicas?" },
        { tr: "Soy periodista." },
        { tr: "Soy ingeniero.", note: "después de essere, normalmente sin artículo" },
        { tr: "Trabajo en una agencia." },
        { tr: "Ahora mismo no trabajo." },
        { tr: "Todavía estudio, estoy en el último año." }
      ]
    },
    vocab: [
      "trabajo",
      "profesor",
      "médico",
      "ingeniero",
      "abogado",
      "periodista",
      "administrativo",
      "cocinero",
      "dependiente",
      "obrero",
      "autónomo",
      "estoy buscando trabajo"
    ],
    exercises: [
      { why: "Ojo con la doble c de faccio y facciamo." },
      {
        q: "¿Qué frase significa «soy profesor» y suena más natural?",
        opts: ["Faccio l'insegnante.", "Sono la insegnante.", "Ho insegnante."],
        why: "Fare + artículo determinado es la forma más habitual de decir tu oficio al hablar."
      },
      {
        q: "¿Cuál es el femenino de «il professore»?",
        opts: ["la professora", "la professoressa", "la professrice"],
        why: "El patrón -e → -essa, como studente → studentessa."
      },
      {
        q: "Completa: «Mia sorella fa ___ dottoressa.»",
        why: "Después de fare va el artículo determinado, ajustado al género: la dottoressa."
      },
      { q: "Elige el artículo.", items: ["cocinera", "ingeniero", "estudiante (f.)", "obrero"] },
      { q: "«¿A qué te dedicas?» (informal)", why: "Che lavoro fai?, literalmente «qué trabajo haces»." },
      {
        q: "Empareja la forma masculina con la femenina.",
        pairs: ["l'attrice", "la commessa", "la studentessa", "la giornalista"]
      },
      { tr: "Trabajo en un banco de Milán." },
      { tr: "Soy arquitecto, trabajo con mi hermano." },
      { tr: "¿A qué te dedicas? Soy periodista." }
    ]
  },
  "lesson:a1-u02-l4": {
    theme: "Gramática básica",
    title: "La primera conjugación",
    objectives: [
      "conjugar cualquier verbo regular en -are",
      "manejar los cambios ortográficos de cercare, pagare, mangiare",
      "construir una negación y una pregunta"
    ],
    theory: [
      {
        h: "El grupo más grande y más previsible",
        p: "Cerca del 70% de los verbos italianos terminan en <strong>-are</strong>, y casi todos se comportan igual. Quitas la terminación del infinitivo y añades seis propias: <em>-o, -i, -a, -iamo, -ate, -ano</em>. Es tu conjugación en <em>-ar</em>, con desinencias parecidas pero no idénticas: ojo con <em>-iamo</em> y <em>-ate</em>, donde el español dice -amos y -áis."
      },
      {
        h: "Un acento que no se ve",
        p: "En la forma de <em>loro</em> el acento cae en la antepenúltima sílaba: <b>par</b>-la-no, <b>la</b>-vo-ra-no. No «parla-NO». La diferencia se oye y los italianos la notan. El español coloca el acento en el mismo sitio en «hablan», así que el instinto sirve."
      },
      {
        h: "Ortografía que salva la pronunciación",
        list: [
          "<b>-care / -gare</b> añaden una <b>h</b> ante -i y -e: <em>cercare → cerchi, cerchiamo</em>; <em>pagare → paghi, paghiamo</em>. Es tu qu/gu de «busque» y «pague».",
          "<b>-ciare / -giare</b> pierden la <b>i</b> ante -i: <em>mangiare → mangi</em> (no «mangii»), <em>cominciare → cominci</em>",
          "<b>-iare</b> átono también pierde una i: <em>studiare → studi, studiamo</em>"
        ]
      },
      {
        h: "Negación y pregunta no necesitan nada nuevo",
        p: "La negación es una sola palabra, <strong>non</strong>, delante del verbo: <em>non parlo italiano</em>. La pregunta no cambia el orden: basta la entonación, <em>Parli italiano?</em> Igual que en español, y sin nada parecido al auxiliar inglés «do»."
      }
    ],
    grammar: {
      title: "Parlare (hablar) — el patrón -ARE",
      table: {
        head: ["persona", "desinencia", "parlare", "lavorare"],
        rows: [
          ["io", "-o", "parlo", "lavoro"],
          ["tu", "-i", "parli", "lavori"],
          ["lui / lei / Lei", "-a", "parla", "lavora"],
          ["noi", "-iamo", "parliamo", "lavoriamo"],
          ["voi", "-ate", "parlate", "lavorate"],
          ["loro", "-ano", "parlano", "lavorano"]
        ]
      },
      examples: [
        { tr: "Hablo un poco de italiano." },
        { tr: "No hablo bien, pero entiendo." },
        { tr: "¿Estudias en la universidad?", note: "una pregunta solo por entonación" },
        { tr: "Comemos a las ocho." },
        { tr: "¿Buscas trabajo en Milán?", note: "cercare → cerchi, con h" },
        { tr: "Viven cerca del centro.", note: "acento: A-bi-ta-no" }
      ]
    },
    vocab: [
      "hablar",
      "trabajar",
      "estudiar",
      "vivir (en un sitio)",
      "comer",
      "comprar",
      "buscar",
      "pagar",
      "escuchar",
      "mirar",
      "esperar",
      "empezar"
    ],
    exercises: [
      { why: "El patrón que cubre la mayoría de los verbos italianos." },
      {
        tr: "tu, noi — atención a la ortografía",
        why: "Cerchi y cerchiamo llevan <b>h</b> para mantener el sonido de k."
      },
      {
        q: "¿Qué forma es la correcta para «comes»?",
        opts: ["mangii", "mangi", "mangie"],
        why: "Los verbos en -giare pierden la i ante la desinencia -i: mangi."
      },
      {
        q: "Completa: «Loro ___ a Bologna.» (Viven en Bolonia.)",
        why: "abitare, la forma de loro: -ano."
      },
      {
        q: "Ponlo en negativo: «Parlo italiano.» → «___ parlo italiano.»",
        why: "Una sola palabra, non, delante del verbo: eso es toda la negación."
      },
      { q: "«Buscamos un piso en Roma.»", why: "cercare → cerchiamo (con h), a + ciudad." },
      {
        q: "¿Qué formas pertenecen a «studiare»?",
        opts: ["studio", "studii", "studi", "studiamo", "studiate"],
        why: "«Studii» no existe: la doble i se reduce a una."
      },
      { tr: "Los sábados no trabajo.", why: "«Il sabato» con artículo significa «los sábados», con regularidad." },
      { tr: "Estudio italiano desde hace tres meses." },
      { tr: "No hablo bien, pero lo entiendo casi todo." }
    ]
  },
  "lesson:a1-u02-test": {
    theme: "Prueba",
    title: "Prueba de la unidad 2",
    objectives: ["comprobar avere, fare, chiamarsi, los números y la primera conjugación"],
    theory: [{ p: "Diez preguntas. Se aprueba con un 70%." }],
    exercises: [
      { q: "«___ chiamo Peter.»" },
      { q: "«Quanti anni ___?» (¿Cuántos años tienes?)" },
      { q: "¿Qué número es «ottantaquattro»?", opts: ["48", "84", "94"] },
      { q: "«Tengo hambre» en italiano:", opts: ["Sono fame", "Ho fame", "Sto fame"] },
      {  },
      {
        q: "¿Qué forma es correcta para «pagas»?",
        opts: ["pagi", "paghi", "page"],
        why: "-gare añade una h ante -i."
      },
      { q: "Complétalo.", tr: "Soy española, vivo en Verona y soy profesora." },
      { q: "«No hablo italiano.»" },
      { tr: "Tengo veintisiete años y estoy buscando trabajo." },
      { tr: "Me llamo Anna y soy periodista." }
    ]
  },
  "unit:a1-u03": {
    title: "Aperitivo y comida",
    grammarNote: "piacere · artículo partitivo · -ere e -ire"
  },
  "lesson:a1-u03-l1": {
    theme: "Comida",
    title: "El verbo piacere",
    objectives: [
      "decir qué te gusta y qué no",
      "elegir entre piace y piacciono",
      "preguntar a los demás qué les gusta"
    ],
    theory: [
      {
        h: "La frase se construye del revés",
        p: "<strong>Piacere</strong> no significa «gustar de algo», significa «resultar agradable». <em>Mi piace la pizza</em> es literalmente «la pizza me resulta agradable». El sujeto gramatical es <b>la cosa</b>, y quien siente el gusto aparece como complemento indirecto (<em>mi, ti, gli, le, ci, vi</em>)."
      },
      {
        h: "Por eso el verbo tiene dos formas",
        p: "Como el sujeto es la cosa, es la cosa la que decide el número: <em>mi piace <b>il</b> caffè</em> (una) frente a <em>mi piacciono <b>gli</b> spaghetti</em> (varias). Ante un infinitivo va siempre en singular: <em>mi piace viaggiare</em>."
      },
      {
        contrast: "Este capítulo el español te lo regala entero: «gustar» funciona exactamente igual, con el mismo complemento indirecto y la misma concordancia con la cosa. «Me gusta el café» / «me gustan los espaguetis» es <em>mi piace il caffè</em> / <em>mi piacciono gli spaghetti</em>, palabra por palabra. Donde un anglófono se pasa meses produciendo errores, tú solo cambias de vocabulario."
      },
      {
        h: "Quién siente el gusto: mi, ti, gli, le…",
        list: [
          "<b>mi</b> piace — me",
          "<b>ti</b> piace — te",
          "<b>gli</b> piace — le (a él); <b>le</b> piace — le (a ella)",
          "<b>ci</b> piace — nos · <b>vi</b> piace — os · <b>gli</b> piace — les"
        ]
      },
      {
        trap: "La negación va delante del pronombre, no del verbo: <b>non</b> mi piace. Nunca «mi non piace». Exactamente como «no me gusta»."
      }
    ],
    grammar: {
      title: "Piacere: el esquema de la frase",
      note: "[pronombre] + piace/piacciono + [la cosa, con su artículo]",
      table: {
        head: ["lo que gusta", "forma", "ejemplo"],
        rows: [
          ["una cosa", "piace", "Mi piace il vino rosso."],
          ["varias cosas", "piacciono", "Mi piacciono i dolci."],
          ["una actividad", "piace", "Mi piace cucinare."],
          ["negativo", "non … piace", "Non mi piace il pesce crudo."],
          ["pregunta", "ti piace?", "Ti piace l'aperitivo?"]
        ]
      },
      examples: [
        { tr: "Me gusta mucho el café." },
        { tr: "¿Te gusta el spritz?" },
        { tr: "No nos gusta la cerveza caliente." },
        { tr: "A ella le gusta bailar." },
        { tr: "A Marco le gusta el pescado.", note: "con un nombre se añade «a» delante" },
        { tr: "Me encantaría probarlo.", note: "una forma de condicional: apréndela como bloque" }
      ]
    },
    vocab: [
      "aperitivo (bebida con algo de picar)",
      "spritz",
      "vino tinto / blanco",
      "cerveza",
      "aceitunas",
      "patatas fritas",
      "aperitivos salados",
      "jamón curado",
      "queso",
      "dulces, postres",
      "pescado",
      "carne",
      "cocinar",
      "probar"
    ],
    culture: {
      title: "Con ojos italianos: el aperitivo no es la cena",
      text: "<p>El <b>aperitivo</b> empieza sobre las seis y media y dura hasta las ocho y media. Se paga la bebida (entre 7 y 12 euros según la ciudad) y la comida de la barra viene incluida. En Milán ha crecido hasta convertirse en un bufé llamado <i>apericena</i>, a medio camino de la cena.</p><p>La regla que nadie enuncia en voz alta: <b>sírvete una cantidad razonable</b>. Un plato montado en torre delata a un extranjero más rápido que el acento.</p><p>Los clásicos: <i>spritz</i> (con Aperol o Campari), <i>negroni</i>, una copa de vino. La cerveza también pasa, aunque los puristas arruguen la nariz.</p>"
    },
    exercises: [
      {
        q: "«___ piacciono le olive.» ¿Por qué piacciono y no piace?",
        opts: ["Porque se trata de varias personas", "Porque «le olive» está en plural", "Porque es un pasado"],
        why: "El verbo concuerda con la cosa que gusta, y esa cosa está en plural."
      },
      { q: "Completa: «Mi ___ il vino rosso.»", why: "Una cosa en singular → piace." },
      { q: "Completa: «Non mi ___ i film horror.»", why: "«I film» es plural → piacciono." },
      {
        q: "¿Qué frase es correcta?",
        opts: ["Mi non piace il pesce.", "Non mi piace il pesce.", "Mi piace non il pesce."],
        why: "Non va delante de todo el grupo pronombre + verbo."
      },
      {
        q: "¿Cómo se dice «a Marco le gusta el pescado»?",
        opts: ["Marco piace il pesce", "A Marco piace il pesce", "Marco piacciono pesce"],
        why: "Quien siente el gusto lleva la preposición <b>a</b> delante del nombre, como en español."
      },
      { q: "«Me gusta cocinar.»", why: "Ante un infinitivo va siempre el singular piace." },
      { q: "Empareja el pronombre con la persona.", pairs: ["me", "te", "le (a ella)", "nos"] },
      {
        q: "Completa la conversación durante un aperitivo.",
        tr: "— ¿Te gusta el spritz? — ¡Sí, mucho! Pero no me gustan las aceitunas."
      },
      { tr: "Me gustan mucho los quesos italianos." },
      { tr: "Me gusta el aperitivo, pero no me gustan las aceitunas." }
    ]
  },
  "lesson:a1-u03-l2": {
    theme: "Gramática básica",
    title: "La segunda conjugación y c'è / ci sono",
    objectives: [
      "conjugar los verbos regulares en -ere",
      "usar c'è y ci sono",
      "describir lo que hay en un sitio"
    ],
    theory: [
      {
        h: "Casi como -are, pero no del todo",
        p: "El grupo <strong>-ere</strong> se diferencia del primero solo en tres desinencias: <em>-e</em> en vez de <em>-a</em>, <em>-ete</em> en vez de <em>-ate</em>, <em>-ono</em> en vez de <em>-ano</em>. La forma de <em>noi</em> (<em>-iamo</em>) es común a las tres conjugaciones: la desinencia más fácil de la lengua."
      },
      {
        h: "Aquí se esconden casi todos los irregulares",
        p: "Muchos verbos en -ere muy frecuentes tienen formas raras: <em>bere → bevo</em>, <em>rimanere → rimango</em>, <em>scegliere → scelgo</em>. Su irregularidad se nota sobre todo en el pasado y en el participio, que llegan en A2."
      },
      {
        h: "C'è y ci sono",
        p: "<strong>C'è</strong> («hay», una cosa) y <strong>ci sono</strong> («hay», varias) dicen que algo existe en un sitio. La elección depende del número, no de la persona: <em>c'è un problema</em>, <em>ci sono due problemi</em>."
      },
      {
        contrast: "Y ahí está la diferencia con el español: «hay» es invariable, sirve para uno y para mil. El italiano obliga a elegir entre <em>c'è</em> y <em>ci sono</em> según el número, y decir «c'è due problemi» es un error que se oye enseguida. Cuenta antes de hablar."
      },
      {
        trap: "No confundas <b>c'è</b> (hay) con <b>è</b> (es/está). <em>Il ristorante è chiuso</em>: el restaurante está cerrado. <em>C'è un ristorante qui vicino</em>: hay un restaurante aquí cerca."
      }
    ],
    grammar: {
      title: "Leggere (leer) — el patrón -ERE",
      table: {
        head: ["persona", "desinencia", "leggere", "prendere"],
        rows: [
          ["io", "-o", "leggo", "prendo"],
          ["tu", "-i", "leggi", "prendi"],
          ["lui / lei / Lei", "-e", "legge", "prende"],
          ["noi", "-iamo", "leggiamo", "prendiamo"],
          ["voi", "-ete", "leggete", "prendete"],
          ["loro", "-ono", "leggono", "prendono"]
        ]
      },
      examples: [
        { tr: "Yo tomo un café.", note: "«prendere» es el verbo normal para pedir" },
        { tr: "¿Estás leyendo la carta?" },
        { tr: "No veo al camarero." },
        { tr: "¿Hay una mesa libre?" },
        { tr: "Hay dos sitios en la barra." },
        { tr: "Escribimos el nombre para la reserva." }
      ]
    },
    vocab: [
      "tomar, pedir",
      "leer",
      "escribir",
      "ver",
      "preguntar",
      "responder",
      "poner",
      "cerrar",
      "hay",
      "sitio, plaza",
      "libre / ocupado",
      "aquí cerca"
    ],
    exercises: [
      { why: "Fíjate en -e, -ete, -ono: esa es toda la diferencia con el grupo -are." },
      {
        q: "¿Qué desinencia comparten las tres conjugaciones?",
        opts: ["-o en la forma de io", "-iamo en la forma de noi", "-ono en la forma de loro"],
        why: "La forma de noi es siempre -iamo, sea cual sea el grupo."
      },
      { q: "Completa: «___ un tavolo libero?» (¿Hay una mesa libre?)", why: "Una mesa → c'è." },
      {
        q: "Completa: «___ tre persone in fila.» (Hay tres personas en la cola.)",
        why: "Plural → ci sono."
      },
      {
        q: "«Il bar è chiuso» frente a «C'è un bar qui vicino»: ¿cuál es la diferencia?",
        opts: [
          "Ninguna, son sinónimos",
          "La primera describe el bar, la segunda dice que existe uno cerca",
          "La segunda está en pasado"
        ],
        why: "è describe, c'è afirma que algo está presente en un sitio."
      },
      { q: "«Yo tomo una cerveza, ¿y tú?»", why: "Prendere es el verbo por defecto para pedir en Italia." },
      {
        q: "¿Qué verbos pertenecen al grupo -ere?",
        opts: ["prendere", "abitare", "scrivere", "dormire", "chiudere"]
      },
      { tr: "No veo al camarero." },
      { tr: "¿Hay mesa para dos?" },
      { tr: "Tomamos dos spritz." }
    ]
  },
  "lesson:a1-u03-l3": {
    theme: "Gramática básica",
    title: "La tercera conjugación y el patrón -isc-",
    objectives: [
      "conjugar los verbos como dormire y los como capire",
      "reconocer qué verbos en -ire necesitan el infijo -isc-",
      "usar preferire para expresar una preferencia"
    ],
    theory: [
      {
        h: "Una terminación, dos comportamientos",
        p: "Los verbos en <strong>-ire</strong> se dividen en dos subgrupos. El primero (<em>dormire, partire, sentire, aprire, offrire</em>) se conjuga sin sorpresas. El segundo (<em>capire, finire, preferire, pulire, spedire</em>) inserta <b>-isc-</b> en cuatro formas: <em>io, tu, lui/lei, loro</em>. Las de <em>noi</em> y <em>voi</em> van sin él."
      },
      {
        h: "Cómo saber a qué grupo pertenece",
        p: "No hay regla: se memoriza. Ayuda que el grupo del <em>-isc-</em> es el más numeroso y se lleva casi todos los verbos nuevos (<em>gestire, inserire, garantire</em>). Los diccionarios lo señalan con <i>(-isc-)</i> junto a la entrada."
      },
      {
        contrast: "El español no tiene nada parecido: sus verbos en -ir se conjugan de una sola manera. Aquí no hay intuición que traer, hay que aprender la lista. Consuelo: el infijo es siempre el mismo y su ritmo se pega rápido."
      },
      {
        tip: "El patrón -isc- tiene forma de paréntesis: cuatro formas con el infijo por fuera, dos sin él en medio. Aprende el ritmo: <b>ca-pi-sco, ca-pi-sci, ca-pi-sce — ca-piamo, ca-pite — ca-pi-scono</b>."
      }
    ],
    grammar: {
      title: "Dormire (sin -isc-) frente a capire (con -isc-)",
      table: {
        head: ["persona", "dormire", "capire", "en español"],
        rows: [
          ["io", "dormo", "capisco", "duermo / entiendo"],
          ["tu", "dormi", "capisci", "duermes / entiendes"],
          ["lui / lei", "dorme", "capisce", "duerme / entiende"],
          ["noi", "dormiamo", "capiamo", "dormimos / entendemos"],
          ["voi", "dormite", "capite", "dormís / entendéis"],
          ["loro", "dormono", "capiscono", "duermen / entienden"]
        ]
      },
      examples: [
        { tr: "No entiendo, ¿puede repetir?" },
        { tr: "Prefiero una mesa fuera." },
        { tr: "¿A qué hora terminas de trabajar?" },
        { tr: "La tienda abre a las nueve.", note: "aprire, sin -isc-" },
        { tr: "Salimos mañana por la mañana." },
        { tr: "Lo entienden todo." }
      ]
    },
    vocab: [
      "entender",
      "terminar",
      "preferir",
      "limpiar",
      "enviar",
      "dormir",
      "salir, partir",
      "abrir",
      "invitar (a una ronda)",
      "oír, sentir",
      "seguir",
      "¿puede repetir?"
    ],
    exercises: [
      { why: "El paréntesis: -isc- en io, tu, lui/lei y loro; ausente en noi y voi." },
      { why: "Dormire va de corrido, sin infijo." },
      {
        q: "¿Qué verbo necesita el infijo -isc-?",
        opts: ["partire", "preferire", "aprire"],
        why: "Preferire → preferisco, preferisci, preferisce, preferiamo, preferite, preferiscono."
      },
      {
        q: "Completa: «Noi non ___ bene.» (No entendemos bien.)",
        hint: "la forma de noi no lleva infijo",
        why: "Capiamo: en noi y voi el -isc- desaparece."
      },
      { q: "Completa: «Loro ___ alle sette.» (Terminan a las siete.)", why: "finire con -isc- en la forma de loro." },
      { q: "«Prefiero una mesa fuera.»" },
      { q: "¿Qué formas llevan -isc-?", opts: ["capisco", "capiamo", "finisce", "dormite", "puliscono"] },
      { tr: "No entiendo, ¿puede repetir?" },
      { tr: "Prefiero salir temprano mañana por la mañana." },
      { tr: "Perdone, no entiendo. ¿Puede repetirlo?" }
    ]
  },
  "lesson:a1-u03-l4": {
    theme: "Comida",
    title: "El artículo partitivo y las cantidades",
    objectives: [
      "expresar una cantidad indeterminada con del, della, dei…",
      "usar un po' di y un chilo di",
      "pedir la compra en una tienda"
    ],
    theory: [
      {
        h: "Algo de algo, sin una palabra para «algo»",
        p: "El italiano expresa la cantidad indeterminada con el <strong>artículo partitivo</strong>: la preposición <em>di</em> fundida con el artículo determinado. <em>Vorrei del pane</em>, «querría pan». En plural cubre lo que el español dice con «unos»: <em>dei pomodori</em>."
      },
      {
        h: "Las formas",
        list: [
          "di + il = <b>del</b> pane · di + lo = <b>dello</b> zucchero · di + l' = <b>dell'</b>acqua",
          "di + la = <b>della</b> carne · di + i = <b>dei</b> pomodori",
          "di + gli = <b>degli</b> spinaci · di + le = <b>delle</b> mele"
        ]
      },
      {
        h: "Las alternativas",
        p: "En lugar del partitivo puedes usar <strong>un po' di</strong> («un poco de») o una medida: <em>un chilo di, un etto di, mezzo litro di</em>. En la negación el partitivo suele desaparecer: <em>non ho pane</em>, no «non ho del pane»."
      },
      {
        contrast: "Esta es la construcción que el español no tiene. Donde tú dices «quiero pan» a secas, el italiano quiere <em>del pane</em>. Omitirlo no es agramatical, pero suena entrecortado, como una lista de la compra leída en voz alta. Es de los detalles que más rápido mejoran la naturalidad."
      },
      {
        tip: "<b>Un etto</b> son 100 gramos y es la unidad de trabajo en la charcutería: <em>due etti di prosciutto</em> = 200 gramos de jamón."
      }
    ],
    grammar: {
      title: "El artículo partitivo y las expresiones de cantidad",
      table: {
        head: ["contexto", "forma", "ejemplo"],
        rows: [
          ["m. + consonante", "del", "del pane"],
          ["m. + s+cons., z", "dello", "dello zucchero"],
          ["+ vocal", "dell'", "dell'acqua, dell'olio"],
          ["f. + consonante", "della", "della carne"],
          ["m. plural", "dei / degli", "dei pomodori, degli spinaci"],
          ["f. plural", "delle", "delle mele"]
        ]
      },
      examples: [
        { tr: "Querría pan." },
        { tr: "Compro manzanas y uvas." },
        { tr: "Un poco de sal, no mucha." },
        { tr: "Doscientos gramos de jamón serrano." },
        { tr: "Medio litro de leche." },
        { tr: "No tengo azúcar en casa.", note: "sin partitivo en la negación" }
      ]
    },
    vocab: [
      "pan",
      "leche",
      "agua",
      "azúcar",
      "sal",
      "aceite, aceite de oliva",
      "tomates",
      "manzanas",
      "cien gramos",
      "un kilo",
      "un poco",
      "medio litro",
      "así está bien, gracias",
      "¿cuánto quiere?"
    ],
    exercises: [
      {
        q: "¿Cómo pides pan?",
        opts: ["Vorrei il pane", "Vorrei del pane", "Vorrei un pane"],
        why: "El partitivo <b>del</b> expresa una cantidad indeterminada."
      },
      {
        q: "Completa: «Compro ___ acqua.» (Compro agua.)",
        why: "di + l' = dell', porque acqua empieza por vocal."
      },
      {
        q: "Completa: «Vorrei ___ mele.» (Querría unas manzanas.)",
        why: "di + le = delle, femenino plural."
      },
      {
        q: "Elige el artículo partitivo.",
        items: ["pan", "azúcar", "carne", "aceite", "tomates", "espinacas"]
      },
      {
        q: "¿Cuánto son «due etti»?",
        opts: ["20 gramos", "200 gramos", "2 kilos"],
        why: "Un etto son 100 g, así que due etti = 200 g."
      },
      { q: "«Medio litro de leche, por favor.»" },
      {
        q: "Estás en el mostrador de una tienda de alimentación.",
        setting: "Una alimentari de barrio, en el mostrador de embutidos.",
        lines: [
          { tr: "¡Buenos días! ¿Qué le pongo?" },
          { tr: "Pide 200 g de jamón.", answerTr: "Doscientos gramos de jamón, por favor." },
          { tr: "Aquí tiene. ¿Algo más?" },
          { tr: "Pide también un poco de pan.", answerTr: "Pan también, gracias." }
        ]
      },
      { q: "Completa la lista de la compra.", tr: "Compro pan, agua y tomates." },
      { tr: "Un kilo de tomates y albahaca, por favor." },
      { tr: "Doscientos gramos de queso, por favor. Ya está." }
    ]
  },
  "lesson:a1-u03-test": {
    theme: "Prueba",
    title: "Prueba de la unidad 3",
    objectives: ["comprobar piacere, las conjugaciones -ere e -ire, el partitivo"],
    theory: [{ p: "Diez preguntas. Se aprueba con un 70%." }],
    exercises: [
      { q: "«Mi ___ gli spaghetti.» (Me gustan los espaguetis.)" },
      { q: "«Non mi ___ il pesce crudo.»" },
      {
        q: "«A Marco le gusta el vino» es:",
        opts: ["Marco piace il vino", "A Marco piace il vino", "Marco piacciono il vino"]
      },
      {  },
      {  },
      { q: "«___ due posti liberi.» (Hay dos sitios libres.)" },
      { q: "El artículo partitivo:", items: [, , , ] },
      { q: "«Prefiero el vino blanco.»" },
      { tr: "Hay aceitunas y queso." },
      { tr: "Me gusta mucho el aperitivo italiano." }
    ]
  }
});
