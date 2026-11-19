/* ============================================================
   Learner-language text (es) for data/core/pfl-02.js, unit pfl-u02.
   Keys point at ids in the neutral layer; arrays merge by index,
   so their length has to match core.
   Checked by scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("es", {
  "unit:pfl-u02": {
    title: "Constantes vitales y valores medidos",
    grammarNote: "el imperativo con Sie · los verbos separables durante la medición · el comparativo para comparar valores · los prefijos griegos y los compuestos del paciente · la pasiva con werden para comunicar y registrar"
  },
  "lesson:pfl-u02-l1": {
    theme: "La medición",
    title: "Descúbrase el brazo, por favor",
    objectives: [
      "guiar al paciente durante la toma de la tensión con el imperativo de cortesía",
      "usar los verbos separables de la medición: anlegen, ablesen, einatmen, freimachen",
      "anunciar al paciente lo que vas a hacer antes de tocarlo",
      "nombrar el material: manguito, tensiómetro, termómetro"
    ],
    theory: [
      {
        h: "El imperativo de cortesía",
        p: "Para dar una instrucción al paciente se usa el <strong>imperativo con Sie</strong>: el verbo delante, con la misma forma que el infinitivo pero sin el prefijo separable, que va al final, y justo después <em>Sie</em>. <em>Machen Sie bitte den Oberarm frei. Legen Sie den Arm auf den Tisch.</em> La forma es igual a la de la pregunta de sí o no; lo que las distingue es la entonación descendente y la palabra <em>bitte</em>, que en planta casi nunca falta. <em>Bitte</em> puede ir detrás de <em>Sie</em> o al principio: <em>Bitte sprechen Sie während der Messung nicht.</em> Con un verbo reflexivo hay dos pronombres: <em>Setzen Sie sich bitte hin.</em>"
      },
      {
        h: "Los verbos separables de la medición",
        p: "Casi todo lo que se dice durante una medición lleva un verbo separable: <em>anlegen</em> (poner el manguito), <em>ablesen</em> (leer el valor), <em>einatmen</em> y <em>ausatmen</em> (inspirar, espirar), <em>freimachen</em> (descubrir, subir la manga), <em>sich hinsetzen</em>, <em>sich hinlegen</em>, <em>aufstehen</em>. En el imperativo y en el presente el prefijo va <strong>al final</strong>: <em>Atmen Sie tief ein. Ich lege Ihnen die Manschette an. Ich lese den Wert ab.</em> Detrás de un modal el verbo queda entero, al final: <em>Muss ich aufstehen?</em>"
      },
      {
        contrast: "En español el imperativo de usted es una sola palabra con el pronombre pegado detrás: «siéntese», «túmbese», «respire». En alemán el <em>Sie</em> se dice siempre, separado y detrás del verbo, y con los reflexivos se añade además <em>sich</em>: <em>Setzen Sie sich hin</em>. Los errores típicos de quien habla español son <em>Setzen sich</em> (falta <em>Sie</em>, porque en «siéntese» el usted no se oye) y <em>Sie setzen sich hin</em>, que es una afirmación y no una invitación. El español no tiene nada parecido al prefijo separable: «póngale el manguito» se convierte en <em>legen Sie die Manschette an</em>, y el trozo <em>an</em> llega solo al final. Si lo olvidas, la frase queda a medias: <em>Ich lege Ihnen die Manschette</em> no es una frase completa, porque sin <em>an</em> el verbo <em>legen</em> sigue pidiendo dónde (<em>auf den Tisch</em>)."
      },
      {
        trap: "La «tensión» o la «presión arterial» no es <em>Spannung</em> ni <em>Pression</em>: es <em>der Blutdruck</em>, y se dice <em>den Blutdruck messen</em>, «tomar la tensión». <em>Der Puls</em> es solo el pulso como latido; la muñeca es <em>das Handgelenk</em>: <em>Ich messe den Puls am Handgelenk.</em> <em>Die Manschette</em> es el manguito del tensiómetro, pero también el puño de la camisa. <em>Den Arm freimachen</em> no es «liberar el brazo», sino descubrirlo, subir la manga. Y <em>die Kurve</em> en planta no es una curva cualquiera: es la gráfica de constantes del paciente."
      },
      {
        tip: "Antes de tocar al paciente, dile lo que haces y lo que va a notar: <em>Ich lege Ihnen jetzt die Manschette an. Sie drückt kurz ein bisschen.</em> Un paciente avisado se pone menos tenso, y la medición sale más fiable."
      }
    ],
    grammar: {
      title: "Imperativo con Sie y prefijos separables",
      note: "Imperativo de cortesía: <b>verbo + Sie</b>, con <b>bitte</b>. El prefijo separable va <b>al final</b>. Con los reflexivos: <b>Setzen Sie sich</b>.",
      table: {
        head: ["infinitivo", "frase", "nota"],
        rows: [
          ["freimachen", "Machen Sie bitte den Oberarm frei.", "frei al final"],
          ["sich hinsetzen", "Setzen Sie sich bitte hin.", "reflexivo: Sie y sich"],
          ["einatmen", "Atmen Sie tief ein.", "ein al final"],
          ["anlegen", "Ich lege Ihnen die Manschette an.", "presente: an al final"],
          ["sprechen", "Bitte sprechen Sie nicht.", "verbo no separable, nicht al final"]
        ]
      },
      examples: [
        { tr: "Descúbrase el brazo, por favor.", note: "freimachen: frei va al final" },
        { tr: "Siéntese, por favor, y apoye el brazo en la mesa.", note: "dos imperativos, el primero reflexivo" },
        { tr: "Ahora le pongo el manguito.", note: "anlegen en presente: an al final" },
        { tr: "Por favor, no hable durante la medición.", note: "bitte delante, luego el verbo" },
        { tr: "Inspire y espire con calma.", note: "einatmen y ausatmen comparten atmen: el verbo se dice una vez, luego ein und aus" },
        { tr: "Ahora mismo leo el valor.", note: "ablesen: ab al final" }
      ]
    },
    vocab: [
      "la medición, la toma",
      "medir, tomar (la tensión, la temperatura)",
      "la tensión arterial, la presión arterial",
      "el manguito (del tensiómetro)",
      "el tensiómetro",
      "el brazo (la parte por encima del codo)",
      "la manga",
      "el termómetro (para la fiebre)",
      "poner, colocar (el manguito)",
      "leer (un valor en un aparato)",
      "inspirar",
      "sentarse"
    ],
    dialogue: [
      "Buenos días, señora Keller. Ahora le tomo la tensión y el pulso.",
      "Buenos días. ¿Tengo que levantarme?",
      "No, quédese sentada, por favor. Descúbrase el brazo izquierdo, por favor.",
      "Ya está, ¿así está bien?",
      "Sí, gracias. Ahora le pongo el manguito. Un momento va a apretar un poco.",
      "No pasa nada.",
      "Por favor, no hable durante la medición y mantenga el brazo quieto.",
      "Y bien, ¿cuánto tengo?",
      "Lo leo ahora mismo y lo apunto en la gráfica."
    ],
    culture: {
      title: "Una mirada alemana: la Kurve",
      text: "<p>En las plantas alemanas las constantes vitales se anotan en la <i>Kurve</i>, también llamada <i>Fieberkurve</i>: la gráfica en la que, día a día, se ven la tensión, el pulso, la temperatura y los demás valores del paciente. En muchos hospitales hoy es electrónica, pero el nombre se ha quedado, y en el relevo se oye a menudo <i>Steht in der Kurve</i>, «está en la gráfica».</p><p>Cuántas veces al día se mide, y con qué aparato, lo deciden el médico o el protocolo de la planta. Los valores de esta unidad son números redondos con fines didácticos, no valores de referencia: en planta valen los umbrales fijados por el centro.</p>"
    },
    exercises: [
      {
        q: "Quieres pedir a la paciente que se descubra el brazo. ¿Qué frase es correcta?",
        opts: [
          "Mach bitte den Oberarm frei.",
          "Machen Sie bitte den Oberarm frei.",
          "Freimachen Sie bitte den Oberarm."
        ],
        why: "Con el paciente el imperativo es <b>verbo + Sie</b>: <i>Machen Sie</i>. El prefijo <i>frei</i> se separa y va al final. La primera frase usa el <i>du</i>, que con un paciente adulto no se usa."
      },
      {
        q: "Completa: «Ich lege Ihnen jetzt die Manschette ___.»",
        hint: "prefijo separable de anlegen",
        why: "<b>an</b>: <i>anlegen</i> es separable, así que en presente el prefijo va al final de la frase."
      },
      {
        tr: "El presente de ablesen, todas las personas.",
        why: "<i>Lese ab, liest ab, liest ab, lesen ab, lest ab, lesen ab</i>: en la segunda y la tercera persona del singular la <b>e</b> se convierte en <b>ie</b>, y el prefijo <i>ab</i> va siempre al final."
      },
      {
        q: "Elige el artículo determinado correcto para cada sustantivo.",
        items: ["medición", "manguito", "brazo (por encima del codo)", "manga", "tensiómetro", "tensión arterial"]
      },
      {
        q: "Relaciona cada verbo con su significado.",
        pairs: ["inspirar", "espirar", "sentarse", "tumbarse"]
      },
      {
        q: "Ordena las palabras.",
        tr: "Descúbrase el brazo izquierdo, por favor.",
        why: "<i>Machen Sie bitte den linken Oberarm frei.</i> El imperativo abre la frase, luego <i>Sie</i>; el prefijo <i>frei</i> la cierra. <i>Bitte</i> también puede ir justo antes de <i>frei</i>."
      },
      {
        q: "Completa la frase.",
        tr: "Siéntese, por favor, y apoye el brazo en la mesa.",
        why: "<i>Setzen Sie sich bitte hin</i>: imperativo reflexivo con <i>Sie</i> y <i>sich</i>, y el prefijo <i>hin</i> al final."
      },
      {
        q: "Traduce: «Ahora le pongo el manguito.»",
        why: "<i>Jetzt lege ich Ihnen die Manschette an</i> o <i>Ich lege Ihnen jetzt die Manschette an</i>. <i>Ihnen</i> va en dativo (a usted), <i>an</i> va al final, y <i>jetzt</i> no se puede omitir."
      },
      {
        q: "Le tomas la tensión a una paciente.",
        setting: "Entras en la habitación de la señora Keller con el tensiómetro.",
        lines: [
          { tr: "Buenos días. ¿Qué me va a hacer hoy?" },
          { tr: "Responde que ahora le tomas la tensión.", answerTr: "Ahora le tomo la tensión." },
          { tr: "¿Tengo que tumbarme?" },
          { tr: "Responde que no: tiene que sentarse.", answerTr: "No, siéntese, por favor." },
          { tr: "¿Me quito el jersey?" },
          { tr: "Responde que no: basta con descubrir el brazo.", answerTr: "No, descúbrase solo el brazo." }
        ]
      },
      {
        tr: "Ahora le tomo la tensión. Descúbrase el brazo izquierdo, por favor, y mantenga el brazo quieto.",
        why: "En <i>Oberarm</i> el acento cae en la primera sílaba, <b>O</b>; en <i>frei</i> la <b>ei</b> es [aɪ], como en «aire»; en <i>ruhig</i> la <b>h</b> no se pronuncia y la <b>g</b> final suena [ç]."
      },
      {
        tr: "Por favor, no hable durante la medición.",
        why: "En <i>sprechen</i> la <b>sp</b> inicial es [ʃp], sin «e» de apoyo delante; en <i>während</i> la <b>ä</b> es larga, la <b>h</b> no se pronuncia y la <b>d</b> final suena [t]; en <i>Messung</i> la <b>ss</b> es sorda."
      }
    ]
  },
  "lesson:pfl-u02-l2": {
    theme: "Los números de la planta",
    title: "Valores y unidades",
    objectives: [
      "decir en voz alta tensión, pulso, temperatura y saturación con su unidad",
      "comparar dos valores con el comparativo y als",
      "decir que un valor es igual que otro con genauso ... wie",
      "comunicar un valor a un compañero junto con la comparación con el día anterior"
    ],
    theory: [
      {
        h: "Cómo se dicen los valores",
        p: "La tensión se escribe <em>120/80 mmHg</em> y se dice <em>hundertzwanzig zu achtzig</em>: la barra se lee <strong>zu</strong>. La unidad, <em>Millimeter Quecksilbersäule</em>, casi no se dice en voz alta. El pulso: <em>80 pro Minute</em> u <em>80 Schläge pro Minute</em>. La temperatura usa la coma decimal: <em>37,5 Grad</em> se lee <em>siebenunddreißig Komma fünf</em>. La saturación se dice en porcentaje: <em>95 Prozent</em>. Para situar un valor se usa a menudo <em>liegen bei</em>: <em>Der Blutdruck liegt bei 120 zu 80.</em> Los números de esta lección son redondos y didácticos, no valores de referencia."
      },
      {
        h: "El comparativo para comparar",
        p: "El comparativo se forma con <strong>-er</strong> y el segundo término con <strong>als</strong>: <em>schneller als gestern</em>, <em>niedriger als heute Morgen</em>. Muchos adjetivos cortos llevan Umlaut: <em>hoch → höher</em> (y la <b>c</b> desaparece), <em>lang → länger</em>, <em>warm → wärmer</em>; <em>langsam</em> no: <em>langsamer</em>. El superlativo con el verbo: <em>am höchsten</em>, <em>am niedrigsten</em>. La igualdad: <em>genauso hoch wie gestern</em>."
      },
      {
        contrast: "Las unidades no te van a sorprender: grados Celsius, kilos y mg/dl, como en España y en casi toda Latinoamérica. La coma decimal tampoco, aunque si vienes de México o de otro país donde se escribe «37.5», en Alemania es <em>37,5</em> y se lee con <em>Komma</em>. Lo que cambia es cómo se dice la tensión. En España muchos pacientes, y a veces el personal, la dicen en centímetros: «tengo la tensión a doce/ocho». En Alemania siempre son milímetros: <em>120 zu 80</em>, nunca <em>12 zu 8</em>, y los dos números son <em>der obere und der untere Wert</em>, la alta y la baja. En cuanto al comparativo, el español dice «más + adjetivo»: «más alta», «más rápido». En alemán es una sola palabra, y <em>mehr hoch</em> o <em>mehr schnell</em> son errores. El «que» de la comparación no es <em>dass</em> ni <em>was</em>, sino <strong>als</strong>: «más alta que ayer» = <em>höher als gestern</em>. La igualdad, «tan alta como», usa <strong>wie</strong>: <em>genauso hoch wie gestern</em>."
      },
      {
        trap: "<em>Schneller wie gestern</em> se oye en el habla coloquial, pero en la lengua estándar y en la documentación la comparación lleva <em>als</em>. <em>Am höchsten</em> lleva Umlaut como <em>höher</em>, mientras que el adjetivo simple no: <em>hoch</em>. <em>Erhöht</em> significa «elevado, aumentado» (<em>leicht erhöhte Temperatur</em>, temperatura ligeramente elevada), no es un verbo que haya que conjugar. Y para la tensión baja en Alemania se dice <em>niedriger Blutdruck</em>; <em>tiefer Blutdruck</em> se oye sobre todo en Suiza."
      },
      {
        tip: "Cuando le pases un valor a un compañero, añade siempre la comparación: <em>130 zu 80, höher als gestern</em>. Un número solo dice poco; la comparación dice si algo está cambiando."
      }
    ],
    grammar: {
      title: "Comparativo y superlativo",
      note: "Comparativo: <b>-er + als</b>. Los adjetivos cortos llevan a menudo <b>Umlaut</b>. Superlativo con el verbo: <b>am ...-sten</b>. Igualdad: <b>genauso ... wie</b>.",
      table: {
        head: ["adjetivo", "comparativo", "superlativo"],
        rows: [
          ["hoch", "höher", "am höchsten"],
          ["niedrig", "niedriger", "am niedrigsten"],
          ["schnell", "schneller", "am schnellsten"],
          ["langsam", "langsamer", "am langsamsten"],
          ["gut", "besser", "am besten"]
        ]
      },
      examples: [
        { tr: "La tensión está en 120/80.", note: "liegen bei: la forma típica de decir un valor" },
        { tr: "Hoy el pulso es más rápido que ayer.", note: "schneller als: comparativo + als" },
        { tr: "Por la tarde la temperatura es más alta que por la mañana.", note: "hoch → höher, sin la c" },
        { tr: "El segundo valor es más bajo que el primero.", note: "niedriger als der erste" },
        { tr: "Esta mañana la tensión estaba en su punto más alto.", note: "superlativo con el verbo: am höchsten" },
        { tr: "La temperatura está igual de alta que ayer.", note: "igualdad: genauso ... wie" }
      ]
    },
    vocab: [
      "el valor",
      "el valor medido",
      "la unidad de medida",
      "el pulso, la frecuencia cardiaca",
      "la temperatura",
      "el grado (37 Grad: 37 grados)",
      "la gráfica de constantes",
      "alto (höher: más alto)",
      "bajo (niedriger: más bajo)",
      "rápido",
      "lento",
      "elevado, aumentado"
    ],
    dialogue: [
      "Le he tomado la tensión a la señora Keller: 130/80.",
      "¿Y ayer?",
      "Ayer estaba más baja, 120/80. Hoy el pulso es un poco más rápido que ayer, 80 por minuto.",
      "¿Y la temperatura?",
      "37 grados, igual que ayer.",
      "Bien. Apunta todos los valores en la gráfica, por favor.",
      "Lo hago ahora mismo."
    ],
    culture: {
      title: "Una mirada alemana: RR, un nombre italiano",
      text: "<p>En la documentación alemana la tensión arterial se escribe a menudo <i>RR</i>: <i>RR 120/80</i>. Las dos letras son las iniciales de <i>Riva-Rocci</i>, el médico italiano Scipione Riva-Rocci, que a finales del siglo XIX presentó el esfigmomanómetro de manguito. Donde en España se escribe <i>TA</i> y en muchos países de Latinoamérica <i>PA</i>, en Alemania <i>RR</i> se ha vuelto casi un sinónimo de <i>Blutdruck</i>, y en el relevo se oye <i>Wie war der RR?</i></p><p>Un consejo práctico: las abreviaturas cambian de una planta a otra. Cuando encuentres una nueva en la <i>Kurve</i>, pregunta qué significa en lugar de adivinarlo.</p>"
    },
    exercises: [
      {
        q: "Quieres decir «Hoy el pulso es más rápido que ayer». ¿Qué frase es correcta?",
        opts: [
          "Der Puls ist heute schnell als gestern.",
          "Der Puls ist heute schneller als gestern.",
          "Der Puls ist heute mehr schnell als gestern."
        ],
        why: "El comparativo es una sola palabra, <b>schneller</b>, y el segundo término se introduce con <b>als</b>."
      },
      {
        tr: "El presente de messen, todas las personas.",
        why: "<i>Messe, misst, misst, messen, messt, messen</i>: en la segunda y la tercera persona del singular la <b>e</b> se convierte en <b>i</b>, y en <i>du misst</i> la terminación <i>-st</i> se funde con la <b>ss</b> de la raíz: nada de «missst»."
      },
      {
        q: "Completa: «Am Abend ist die Temperatur ___ als am Morgen.»",
        hint: "comparativo de hoch",
        why: "<b>höher</b>: <i>hoch</i> lleva Umlaut y pierde la <b>c</b>."
      },
      {
        q: "Completa con el comparativo y el superlativo.",
        tr: "El segundo valor es más bajo que el primero, pero esta mañana la tensión estaba en su punto más alto.",
        why: "<i>niedriger als der erste</i>: comparativo + <i>als</i>. <i>am höchsten</i>: superlativo con el verbo <i>sein</i>."
      },
      {
        q: "Relaciona cada comparativo con su significado.",
        pairs: ["más alto", "más bajo", "más rápido", "más lento"]
      },
      {
        q: "Elige el artículo determinado correcto para cada sustantivo.",
        items: ["valor", "valor medido", "unidad de medida", "pulso", "temperatura", "gráfica de constantes"]
      },
      {
        q: "Ordena las palabras.",
        tr: "Hoy el pulso es más rápido que ayer.",
        why: "<i>Der Puls ist heute schneller als gestern.</i> El verbo <i>ist</i> en segunda posición, la comparación con <i>als</i> al final."
      },
      {
        q: "Traduce: «Hoy la temperatura es más alta que ayer.»",
        why: "<i>Heute ist die Temperatur höher als gestern</i> o <i>Die Temperatur ist heute höher als gestern</i>. Si empiezas con <i>heute</i>, el verbo sigue en segunda posición y el sujeto va detrás."
      },
      {
        q: "Un compañero te pide los valores de la señora Keller.",
        setting: "Acabas de tomarle la tensión, el pulso y la temperatura.",
        lines: [
          { tr: "¿Cómo tenía la tensión esta mañana?" },
          { tr: "Responde: 130/80, más alta que ayer.", answerTr: "Estaba en 130/80, más alta que ayer." },
          { tr: "¿Y el pulso?" },
          { tr: "Responde: un poco más rápido que ayer, 80 por minuto.", answerTr: "Un poco más rápido que ayer, 80 por minuto." },
          { tr: "¿Y la temperatura?" },
          { tr: "Responde: igual que ayer, 37 grados.", answerTr: "Igual que ayer, 37 grados." }
        ]
      },
      {
        tr: "Ayer la tensión estaba más baja. Hoy el pulso es un poco más rápido, y la temperatura está igual de alta que ayer.",
        why: "En <i>niedriger</i> la <b>ie</b> es una <b>i</b> larga; en <i>schneller</i> la <b>sch</b> es [ʃ]; en <i>genauso</i> el acento cae en <b>nau</b>."
      },
      {
        tr: "Hoy el pulso es más rápido que ayer.",
        why: "En <i>Puls</i> la <b>u</b> es breve; en <i>heute</i> la <b>eu</b> es [ɔʏ], parecido a «oi»; en <i>gestern</i> la <b>st</b> en medio de la palabra se lee [st], no [ʃt]."
      }
    ]
  },
  "lesson:pfl-u02-l3": {
    theme: "Dos registros",
    title: "Fiebre, pulso y glucosa",
    objectives: [
      "reconocer los términos técnicos de las constantes vitales con los prefijos griegos hiper-, hipo-, taqui-, bradi-",
      "pasar cada término técnico a la palabra que usa el paciente",
      "entender cómo se forman los compuestos del paciente: Blutzucker, Unterzuckerung, Herzrasen",
      "comunicar al médico que un valor es más bajo o más alto que el anterior"
    ],
    theory: [
      {
        h: "Los prefijos griegos de las constantes",
        p: "La Fachsprache de las constantes vitales se construye con pocas piezas griegas: <em>Hyper-</em> (por encima) e <em>Hypo-</em> (por debajo), <em>Tachy-</em> (rápido) y <em>Brady-</em> (lento), más la parte que dice de qué se habla: <em>-kardie</em> el corazón, <em>-tonie</em> la tensión, <em>-glykämie</em> el azúcar en sangre. Así salen <em>Tachykardie</em>, <em>Bradykardie</em>, <em>Hypotonie</em>, <em>Hypoglykämie</em>, <em>Hyperglykämie</em>. En alemán se escriben con <b>y</b>, <b>k</b> y <b>ä</b>: <em>Tachykardie</em>, no «Taquicardia»."
      },
      {
        h: "Las palabras del paciente",
        p: "La Laiensprache usa compuestos y palabras derivadas. <em>Blut + Zucker</em> = <em>der Blutzucker</em>; <em>Sauerstoff + Sättigung</em> = <em>die Sauerstoffsättigung</em>; <em>unter + Zucker + -ung</em> = <em>die Unterzuckerung</em>, femenino por el sufijo <em>-ung</em>. <em>Das Herzrasen</em> es un infinitivo usado como sustantivo (<em>rasen</em>, ir a toda velocidad), y por eso es neutro. Algunas palabras del paciente no son compuestos sino adjetivo y sustantivo: <em>der langsame Puls</em>, <em>der niedrige Blutdruck</em>, <em>der hohe Blutzucker</em>. Y con los valores vuelve el comparativo: <em>niedriger als heute Morgen</em>."
      },
      {
        contrast: "Para quien habla español los términos técnicos son transparentes: <em>Tachykardie</em> es taquicardia, <em>Hypoglykämie</em> hipoglucemia. La palabra que falta es la del paciente, y esa es opaca: en <em>Herzrasen</em> no hay nada que se reconozca, y no se parece a ninguna palabra española. El paciente alemán tampoco dice «glucemia»: dice <em>der Zucker</em> o <em>der Blutzucker</em>, igual que en España se dice «el azúcar», y para la hipoglucemia <em>Ich bin unterzuckert</em> o <em>Ich habe Unterzucker</em>, que es exactamente «me ha dado una bajada de azúcar». Ojo también con la fiebre: el paciente dice <em>Fieber</em>, y en la documentación también se escribe <em>Fieber</em> o <em>febril</em>. Si pasas de «fiebre» a un término técnico que suene culto, saldrá <em>Hyperthermie</em>, y eso es otra cosa."
      },
      {
        trap: "<em>Hypotonie</em> en planta es la tensión baja, es decir la <b>hipotensión</b>, no la hipotonía muscular del español: el alemán usa <em>-tonie</em> donde el español usa «-tensión», y lo mismo vale para <em>Hypertonie</em>, la hipertensión. <em>Hyperthermie</em> no es un sinónimo técnico de fiebre: en el lenguaje médico alemán indica un sobrecalentamiento del cuerpo, por ejemplo tras un golpe de calor, mientras que la fiebre se llama <em>Fieber</em> también en la documentación (<em>febril</em>). Y <em>Herzrasen</em> no es <em>Herzklopfen</em>: el primero es el corazón que va a toda velocidad, el segundo el latido fuerte que se nota, las palpitaciones."
      },
      {
        tip: "Si el paciente dice <em>Ich habe Unterzucker</em> o <em>Mir ist so zittrig</em>, mide y comunícalo enseguida: <em>Ich messe kurz Ihren Blutzucker</em>, y luego al médico el valor con la comparación. Lo que se hace después lo decide el médico, o el protocolo escrito de la planta."
      }
    ],
    grammar: {
      title: "Constantes vitales: Fachsprache y Laiensprache",
      note: "Con los médicos y en la documentación, la columna <b>Fachsprache</b>; con pacientes y familiares, la columna <b>Laiensprache</b>. Los compuestos llevan el artículo del <b>último elemento</b>; un infinitivo usado como sustantivo es <b>neutro</b>.",
      table: {
        head: ["Fachsprache", "Laiensprache", "español"],
        rows: [
          ["die Tachykardie", "das Herzrasen", "taquicardia"],
          ["die Bradykardie", "der langsame Puls", "bradicardia"],
          ["die Hypotonie", "der niedrige Blutdruck", "hipotensión"],
          ["die Hyperthermie", "die Überwärmung", "hipertermia"],
          ["die Hypoglykämie", "die Unterzuckerung", "hipoglucemia"],
          ["die Hyperglykämie", "der hohe Blutzucker", "hiperglucemia"],
          ["die Sauerstoffsättigung", "der Sauerstoffwert", "saturación de oxígeno"]
        ]
      },
      examples: [
        { tr: "La paciente tiene una taquicardia.", note: "Fachsprache: al médico o en la documentación" },
        { tr: "¿A veces nota que el corazón le va muy rápido?", note: "lo mismo dicho al paciente" },
        { tr: "El paciente tuvo una hipoglucemia por la noche.", note: "fórmula de relevo" },
        { tr: "Con una bajada de azúcar, la glucosa está demasiado baja.", note: "unter + Zucker + -ung: femenino" },
        { tr: "La saturación de oxígeno es más baja que esta mañana.", note: "comparativo para comunicar un cambio" },
        { tr: "A partir de 38 grados se suele hablar de fiebre.", note: "umbral didáctico: decide el protocolo del centro" }
      ]
    },
    vocab: [
      "las constantes vitales",
      "la fiebre",
      "la hipertermia (término técnico, no es la fiebre)",
      "la taquicardia (término técnico)",
      "el corazón acelerado (palabra del paciente)",
      "la bradicardia (término técnico)",
      "la hipotensión (término técnico)",
      "la glucosa en sangre, el azúcar",
      "la hipoglucemia (término técnico)",
      "la bajada de azúcar (palabra del paciente)",
      "la hiperglucemia (término técnico)",
      "la saturación de oxígeno"
    ],
    dialogue: [
      "Señor Lang, le voy a mirar un momento el azúcar. Es un pinchacito en el dedo.",
      "Estoy un poco tembloroso, y sudo.",
      "El valor es más bajo que esta mañana. Aviso enseguida al médico.",
      "Doctor Weber, el señor Lang tiembla y suda. La glucosa está en 60 mg/dl, sospecho una hipoglucemia.",
      "Gracias. Voy enseguida.",
      "Enfermera, ¿qué es una «Hypoglykämie»?",
      "Es una bajada de azúcar. Tiene el azúcar demasiado bajo. El médico viene ahora mismo."
    ],
    culture: {
      title: "Una mirada alemana: mg/dl o mmol/l",
      text: "<p>En Alemania la glucosa en sangre se mide en dos unidades: <i>mg/dl</i> (miligramos por decilitro), la misma que se usa en España y en Latinoamérica, y <i>mmol/l</i> (milimoles por litro). Cuál se usa depende del centro y del glucómetro; 1 mmol/l equivale a unos 18 mg/dl. Así, un 60 y un 3,3 pueden indicar el mismo valor, y por eso en el relevo y por teléfono la unidad se dice siempre.</p><p>El 60 del diálogo está en mg/dl y es un número redondo con fines didácticos. Qué cuenta como demasiado bajo o demasiado alto, y qué se hace después, lo fijan el médico y el protocolo escrito de la planta; la enfermera mide, comunica y documenta.</p>"
    },
    exercises: [
      {
        q: "Relaciona cada término técnico con la palabra que usa el paciente.",
        pairs: ["das Herzrasen", "der langsame Puls", "der niedrige Blutdruck", "die Unterzuckerung", "der hohe Blutzucker"]
      },
      {
        q: "Hablas con el paciente y quieres saber si tiene taquicardia. ¿Qué frase es adecuada?",
        opts: [
          "Haben Sie eine Tachykardie?",
          "Haben Sie Herzrasen?",
          "Besteht bei Ihnen eine Tachykardie?"
        ],
        why: "Con el paciente se usa la Laiensprache: <b>Herzrasen</b>. Las otras dos son correctas, pero son frases de médico o de documentación."
      },
      {
        q: "¿Qué palabras son adecuadas para el paciente?",
        opts: ["die Unterzuckerung", "die Hypoglykämie", "das Herzrasen", "die Tachykardie", "der niedrige Blutdruck", "die Hypotonie"],
        why: "<i>Unterzuckerung</i>, <i>Herzrasen</i> y <i>niedriger Blutdruck</i> son palabras alemanas corrientes. <i>Hypoglykämie</i>, <i>Tachykardie</i> e <i>Hypotonie</i> son términos técnicos."
      },
      {
        q: "El médico ha escrito «Hypoglykämie». Completa para el paciente: «Sie hatten eine ___.»",
        hint: "unter + Zucker + -ung",
        why: "<b>Unterzuckerung</b>, femenino por el sufijo <i>-ung</i>: por eso <i>eine</i>."
      },
      {
        q: "Elige el artículo: en los compuestos decide el último elemento.",
        items: ["fiebre", "corazón acelerado (Rasen)", "glucosa en sangre (Zucker)", "bajada de azúcar (-ung)", "saturación de oxígeno (Sättigung)", "taquicardia (término técnico)"]
      },
      {
        q: "Completa: al médico, primero la comparación, luego el término técnico.",
        tr: "La glucosa es más baja que esta mañana, sospecho una hipoglucemia.",
        why: "<i>niedriger als heute Morgen</i>: comparativo + <i>als</i>. Al médico el término técnico, <i>Hypoglykämie</i>; al paciente le dirías <i>Unterzuckerung</i>."
      },
      {
        q: "Ordena las palabras.",
        tr: "A partir de 38 grados se suele hablar de fiebre.",
        why: "<i>Ab 38 Grad spricht man meistens von Fieber.</i> <i>Ab 38 Grad</i> delante, el verbo <i>spricht</i> en segunda posición. El 38 es un umbral didáctico: en planta vale el protocolo del centro."
      },
      {
        q: "Traduce para el paciente, con la palabra alemana de todos los días: «¿Tiene taquicardia?»",
        why: "<i>Haben Sie Herzrasen?</i> Sin artículo, como <i>Haben Sie Fieber?</i> Al paciente no se le dice <i>Tachykardie</i>."
      },
      {
        q: "El médico ha escrito «Hypotonie». Completa para el paciente: «Ihr Blutdruck ist zu ___.»",
        hint: "lo contrario de hoch",
        why: "<b>niedrig</b>: <i>Hypotonie</i> es la tensión baja, la hipotensión. Atención: no es la hipotonía muscular."
      },
      {
        tr: "La paciente tiene una taquicardia. A ella le digo simplemente: tiene el corazón acelerado.",
        why: "En <i>Tachykardie</i> el acento cae en la <b>die</b> final, la <b>ch</b> se pronuncia [x], como la «j» de «jota», y la <b>y</b> como una <b>ü</b>; en <i>Herzrasen</i> la <b>z</b> es [ts] y la <b>s</b> entre dos vocales es sonora [z]."
      },
      {
        tr: "Le voy a mirar un momento el azúcar.",
        why: "En <i>Blutzucker</i> la <b>u</b> de <i>Blut</i> es larga y la de <i>Zucker</i> breve, y la <b>z</b> es [ts]; en <i>kurz</i> la <b>r</b> apenas se oye."
      }
    ]
  },
  "lesson:pfl-u02-l4": {
    theme: "Comunicar",
    title: "Avisar de un valor alterado",
    objectives: [
      "usar la pasiva con werden para describir los procedimientos de la planta",
      "formar el participio de los verbos en -ieren y de los verbos con prefijo inseparable sin ge-",
      "comunicar por teléfono un valor alterado al médico o a la supervisora, con la comparación y el estado del paciente",
      "repetir y documentar lo que indica el médico, sin decidir por tu cuenta"
    ],
    theory: [
      {
        h: "La pasiva de los procedimientos",
        p: "Cuando importa qué se hace y no quién lo hace, se usa la <strong>pasiva con werden</strong>: <em>werden</em> conjugado en segunda posición, el participio al final. <em>Der Blutdruck wird zweimal am Tag gemessen. Alle Werte werden in der Kurve dokumentiert. Ein auffälliger Wert wird sofort gemeldet.</em> El complemento directo de la frase activa pasa a ser el sujeto: <em>Ich melde den Wert</em> → <em>Der Wert wird gemeldet</em>. Quién lo hace se añade solo si hace falta, con <em>von</em> + dativo."
      },
      {
        h: "Participios sin ge-",
        p: "Muchos verbos de la planta <strong>no llevan ge-</strong>. Los verbos en <em>-ieren</em>: <em>dokumentiert</em>, <em>kontrolliert</em>, <em>informiert</em>. Los verbos con prefijo inseparable (<em>be-, ver-</em>, <em>über-</em> inseparable): <em>überwacht</em>, <em>überprüft</em>, <em>benachrichtigt</em>. Los separables, en cambio, ponen el <em>ge-</em> en medio: <em>nachmessen</em> → <em>nachgemessen</em>, <em>eintragen</em> → <em>eingetragen</em>. <em>Gedokumentiert</em> y <em>geüberwacht</em> no existen."
      },
      {
        contrast: "El español casi no usa la pasiva con «ser» para los procedimientos: dice «se toma la tensión dos veces al día», «se avisa al médico». El alemán aquí usa la pasiva con <em>werden</em>: <em>Der Blutdruck wird zweimal am Tag gemessen</em>. Calcar la pasiva refleja no funciona: <em>sich messen</em> no existe en este sentido. Y si piensas en «está medido» y lo traduces con <em>sein</em>, sale <em>der Wert ist gemessen</em>, que describe un estado, «ya ha sido medido». Para el procedimiento hace falta <em>wird</em>. En la documentación, en cambio, los adjetivos técnicos te resultarán familiares: <em>Die Patientin ist hypoton und tachykard</em>, «hipotensa y taquicárdica». Valen con el médico y en la <em>Kurve</em>; con el paciente se vuelve a la Laiensprache."
      },
      {
        trap: "<em>Melden</em> significa avisar, comunicar a quien tiene que saberlo; <em>sich melden</em> en cambio es «dar señales» o «responder» (<em>Ich melde mich später</em>, ya le digo algo luego). <em>Kontrollieren</em> es comprobar, volver a mirar un valor; vigilar a un paciente de forma continuada es <em>überwachen</em>. Ojo con los casos: <em>Ich informiere den Arzt</em> lleva acusativo, pero <em>Ich sage dem Arzt Bescheid</em> lleva dativo. Y <em>die Stationsleitung</em> es la supervisora o el supervisor de la planta, no «la dirección de la estación»."
      },
      {
        tip: "Por teléfono sigue siempre el mismo orden: quién eres y de qué planta, qué paciente y qué habitación, el valor con la comparación, cómo está el paciente, qué has hecho ya (<em>Ich habe zweimal gemessen</em>). Luego repite lo que indica el médico y apúntalo en la <em>Kurve</em>. Qué valores hay que comunicar lo dice el protocolo del centro; la tarea de la enfermera es comunicarlos, no corregirlos por su cuenta."
      }
    ],
    grammar: {
      title: "La pasiva con werden",
      note: "<b>werden</b> conjugado en segunda posición, <b>participio al final</b>. Sin <b>ge-</b> en los verbos en <b>-ieren</b> y con prefijo inseparable.",
      table: {
        head: ["activa", "pasiva", "nota"],
        rows: [
          ["Wir messen den Blutdruck.", "Der Blutdruck wird gemessen.", "messen → gemessen"],
          ["Ich dokumentiere die Werte.", "Die Werte werden dokumentiert.", "-ieren: sin ge-"],
          ["Wir überwachen den Patienten.", "Der Patient wird überwacht.", "über- inseparable: sin ge-"],
          ["Ich melde den Wert.", "Der Wert wird gemeldet.", "el complemento pasa a sujeto"]
        ]
      },
      examples: [
        { tr: "La tensión se toma dos veces al día.", note: "wird + participio al final" },
        { tr: "Todos los valores se documentan en la gráfica.", note: "plural: werden; dokumentiert sin ge-" },
        { tr: "Un valor alterado se comunica enseguida.", note: "la norma de la planta, en pasiva" },
        { tr: "Se informa a la doctora.", note: "informiert: verbo en -ieren" },
        { tr: "A los diez minutos se vuelve a comprobar el valor.", note: "noch einmal: «otra vez»" },
        { tr: "El paciente está bajo vigilancia estrecha.", note: "überwacht: prefijo inseparable" }
      ]
    },
    vocab: [
      "alterado, anómalo, llamativo",
      "comunicar, avisar",
      "documentar, registrar",
      "comprobar, controlar",
      "informar (con acusativo)",
      "vigilar, monitorizar",
      "la supervisora, el supervisor de planta",
      "el médico de planta",
      "la frecuencia respiratoria",
      "el rango normal",
      "el valor límite, el umbral",
      "la desviación"
    ],
    dialogue: [
      "Doctor Weber, soy Elena Marin, de la planta 3. Le llamo por la señora Keller, habitación 12.",
      "Sí, ¿qué pasa?",
      "Tiene la tensión a 90/60. Esta mañana estaba a 130/80. El pulso está en 110.",
      "¿Cómo está?",
      "Está mareada, por lo demás está despierta y orientada. He medido dos veces.",
      "Bien, voy enseguida. Por favor, contrólele la tensión cada quince minutos.",
      "De acuerdo. Los valores se documentan en la gráfica."
    ],
    culture: {
      title: "Una mirada alemana: quién decide y quién comunica",
      text: "<p>En una planta alemana las medidas terapéuticas parten de una <i>ärztliche Anordnung</i>, la indicación médica, o de un protocolo escrito aprobado por el centro. Cuando un valor sale de los límites fijados, la enfermera lo comunica al médico de planta o, de noche, al médico de guardia, e informa a la <i>Stationsleitung</i> o a quien coordina el turno.</p><p>En algunas clínicas se usan escalas de alerta temprana, que suman varias constantes y dicen a partir de cuándo hay que llamar al médico. Los umbrales cambian de un centro a otro: los números de esta unidad son redondos y solo sirven para practicar la lengua.</p>"
    },
    exercises: [
      {
        q: "Quieres escribir «Cada valor se documenta». ¿Qué frase es correcta?",
        opts: [
          "Jeder Wert wird dokumentiert.",
          "Jeder Wert ist dokumentiert worden wird.",
          "Jeder Wert wird gedokumentiert."
        ],
        why: "Pasiva con <b>wird</b> + participio al final. Los verbos en <b>-ieren</b> no llevan <i>ge-</i>: <i>dokumentiert</i>."
      },
      {
        q: "¿Qué frases en pasiva son correctas?",
        opts: [
          "Der Blutdruck wird zweimal am Tag gemessen.",
          "Der Blutdruck wird zweimal am Tag gemesst.",
          "Die Ärztin wird sofort informiert.",
          "Die Ärztin wird sofort geinformiert.",
          "Ein auffälliger Wert wird gemeldet."
        ],
        why: "<i>messen</i> tiene el participio fuerte <i>gemessen</i>; <i>informieren</i> termina en <i>-ieren</i> y no lleva <i>ge-</i>; <i>melden</i> hace <i>gemeldet</i>."
      },
      {
        q: "Completa: «Ein auffälliger Wert wird sofort ___.»",
        hint: "participio de melden",
        why: "<b>gemeldet</b>: verbo regular, <i>ge-</i> + raíz + <i>-et</i>, al final de la frase."
      },
      {
        q: "Completa la frase en pasiva.",
        tr: "La frecuencia respiratoria se controla cada hora.",
        why: "<i>Die Atemfrequenz wird jede Stunde kontrolliert</i>: <i>wird</i> en segunda posición, el participio al final. También vale <i>überprüft</i>: <i>über-</i> aquí es inseparable, así que sin <i>ge-</i>."
      },
      {
        q: "Ordena las palabras.",
        tr: "Se informa enseguida a la supervisora.",
        why: "<i>Die Stationsleitung wird sofort informiert.</i> <i>Wird</i> en segunda posición, el participio <i>informiert</i>, sin <i>ge-</i>, al final."
      },
      {
        q: "Traduce: «A los diez minutos se vuelve a comprobar el valor.»",
        why: "<i>Der Wert wird nach zehn Minuten noch einmal kontrolliert</i>. El «volver a» se traduce con <i>noch einmal</i> o <i>erneut</i>, y no se puede perder; también valen <i>noch einmal gemessen</i> y el orden con <i>Nach zehn Minuten</i> delante."
      },
      {
        q: "Relaciona cada adjetivo de la documentación con su significado.",
        pairs: ["con el pulso rápido (taquicárdico)", "con el pulso lento (bradicárdico)", "con la tensión baja (hipotenso)", "con fiebre (febril)"]
      },
      {
        q: "Elige el artículo determinado correcto para cada sustantivo.",
        items: ["supervisora de planta", "médico de planta", "frecuencia respiratoria", "rango normal", "valor límite", "desviación"]
      },
      {
        q: "Llamas al médico por un valor alterado.",
        setting: "Le has tomado dos veces la tensión a la señora Keller: está mucho más baja que esta mañana.",
        lines: [
          { tr: "Weber, medicina interna. ¿Qué pasa?" },
          { tr: "Preséntate y di por qué paciente llamas.", answerTr: "Soy Elena Marin, de la planta 3. Le llamo por la señora Keller." },
          { tr: "¿Qué ocurre?" },
          { tr: "Comunica que la tensión está más baja que esta mañana: 90/60.", answerTr: "Tiene la tensión más baja que esta mañana: 90/60." },
          { tr: "Bien, voy. Por favor, contrólele la tensión cada quince minutos." },
          { tr: "Confirma y di que los valores se documentan en la gráfica.", answerTr: "De acuerdo. Los valores se documentan en la gráfica." }
        ]
      },
      {
        tr: "La tensión de la señora Keller está más baja que esta mañana. El valor se comunica enseguida al médico de planta.",
        why: "En <i>Stationsarzt</i> la <b>st</b> inicial es [ʃt] y la <b>ti</b> de <i>Station</i> se lee [tsi]; en <i>wird</i> la <b>d</b> final suena [t]."
      },
      {
        tr: "Un valor alterado se comunica enseguida.",
        why: "En <i>auffälliger</i> la <b>au</b> es [aʊ] y la <b>ä</b> es breve; en <i>sofort</i> el acento cae en la segunda sílaba, <b>fort</b>; en <i>wird</i> la <b>w</b> se pronuncia [v], como una «v» labiodental."
      }
    ]
  },
  "lesson:pfl-u02-test": {
    theme: "Evaluación",
    title: "Test: Constantes vitales y valores medidos",
    objectives: [
      "comprobar el imperativo con Sie y los verbos separables, el comparativo de los valores, la pasiva con werden y los pares Fachsprache / Laiensprache"
    ],
    theory: [
      {
        p: "Once preguntas sobre toda la unidad. Se aprueba con el 70%. Los valores son números redondos con fines didácticos: en planta valen los umbrales y el protocolo del centro, y un valor alterado se comunica siempre al médico."
      }
    ],
    exercises: [
      {
        q: "Quieres pedir al paciente que se tumbe. ¿Qué frase es correcta?",
        opts: ["Legen Sie sich bitte hin.", "Hinlegen Sie sich bitte.", "Legen Sie bitte hin."],
        why: "Imperativo con <b>Sie</b>, el reflexivo <b>sich</b> y el prefijo <b>hin</b> al final. La tercera frase pierde <i>sich</i>."
      },
      {
        q: "Completa: «Atmen Sie bitte tief ___.»",
        hint: "prefijo de einatmen",
        why: "<b>ein</b>: <i>einatmen</i> es separable, así que en el imperativo el prefijo va al final."
      },
      {
        q: "Completa: «Heute ist der Puls ___ als gestern.»",
        hint: "comparativo de langsam",
        why: "<b>langsamer</b>: <i>langsam</i> no lleva Umlaut, basta con <i>-er</i>."
      },
      {
        tr: "El presente de anlegen, todas las personas.",
        why: "<i>Lege an, legst an, legt an, legen an, legt an, legen an</i>: verbo regular y separable, con <i>an</i> siempre al final."
      },
      {
        q: "Relaciona cada término técnico con la palabra que usa el paciente.",
        pairs: ["das Herzrasen", "der niedrige Blutdruck", "die Unterzuckerung", "der hohe Blutzucker"]
      },
      {
        q: "¿Qué frases en pasiva son correctas?",
        opts: [
          "Der Wert wird dokumentiert.",
          "Der Wert wird gedokumentiert.",
          "Die Ärztin wird informiert.",
          "Der Puls wird gemesst.",
          "Die Sättigung wird am Finger gemessen."
        ],
        why: "<i>dokumentiert</i> e <i>informiert</i> son verbos en <i>-ieren</i>, sin <i>ge-</i>; el participio de <i>messen</i> es <i>gemessen</i>."
      },
      {
        q: "Completa con el comparativo y la pasiva.",
        tr: "La glucosa es más baja que esta mañana. El valor se comunica enseguida.",
        why: "<i>niedriger als heute Morgen</i>, y luego la pasiva: <i>Der Wert wird sofort gemeldet</i>."
      },
      {
        q: "Ordena las palabras.",
        tr: "Descúbrase el brazo, por favor.",
        why: "<i>Machen Sie bitte den Oberarm frei.</i> El imperativo delante, <i>Sie</i> justo después, el prefijo <i>frei</i> al final."
      },
      {
        q: "Elige el artículo determinado correcto para cada sustantivo.",
        items: ["manguito", "pulso", "fiebre", "bajada de azúcar (palabra del paciente)", "frecuencia respiratoria", "valor límite"]
      },
      {
        tr: "Ahora le tomo la tensión. Por favor, no hable durante la medición.",
        why: "En <i>Blutdruck</i> la <b>u</b> de <i>Blut</i> es larga y la de <i>Druck</i> breve; en <i>jetzt</i> la <b>j</b> es [j], como la «y» de «yo» en pronunciación suave; en <i>während</i> la <b>h</b> no se pronuncia."
      },
      {
        tr: "La tensión es más baja que esta mañana.",
        why: "En <i>niedriger</i> la <b>ie</b> es una <b>i</b> larga; en <i>Morgen</i> la <b>r</b> detrás de la vocal apenas se oye; en <i>heute</i> la <b>eu</b> es [ɔʏ]."
      }
    ]
  }
});
