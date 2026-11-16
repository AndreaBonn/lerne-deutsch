/* ============================================================
   Learner-language text (es) for data/core/a1-03.js, unit a1-u08.
   Keys point at ids in the neutral layer; arrays merge by index,
   so their length has to match core.
   Checked by scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("es", {
  "unit:a1-u08": {
    title: "Familia y amigos",
    grammarNote: "posesivos · adjetivo predicativo · comparativo con als y so ... wie"
  },
  "lesson:a1-u08-l1": {
    theme: "La familia",
    title: "Mi madre, mi jefe",
    objectives: [
      "decir de quién es una persona con mein, dein, sein, ihr, unser",
      "elegir la forma correcta: mein, meine, meinen",
      "decir el poseedor con un nombre propio: Annas Bruder"
    ],
    theory: [
      {
        h: "El posesivo sigue al poseedor y toma las terminaciones de ein",
        p: "El posesivo se elige según <b>quién posee</b>: <em>mein</em> (yo), <em>dein</em> (tú), <em>sein</em> (él), <em>ihr</em> (ella), <em>unser</em> (nosotros). Después toma las terminaciones de <em>ein</em>, según el <b>nombre poseído</b>: <em>mein Vater</em>, <em>meine Mutter</em>, <em>mein Kind</em>, <em>meine Eltern</em>. En masculino acusativo pasa a <em>meinen</em>: <em>Ich mag meinen Bruder</em>."
      },
      {
        contrast: "En español <em>mi</em> no cambia con el género (<em>mi padre</em>, <em>mi madre</em>) y solo toma <em>-s</em> en plural (<em>mis padres</em>). En alemán la terminación depende del género, el número y el caso del nombre poseído: <em>mein Vater</em>, <em>meine Mutter</em>, <em>meinen Bruder</em> (como complemento). Además, <em>su</em> es ambiguo en español (de él, de ella, de ellos, de usted), mientras que el alemán distingue al poseedor: <em>seine Mutter</em> es la madre de él e <em>ihre Mutter</em> la de ella. Igual que en español, <em>mi padre</em> no lleva artículo: <em>mein Vater</em>, nunca «der mein Vater»."
      },
      {
        trap: "La terminación sigue a la cosa poseída, no al poseedor. <em>Su madre</em> (de él) es <em>seine Mutter</em> (<em>sein</em> por el poseedor masculino, <em>-e</em> porque <em>Mutter</em> es femenino), pero <em>su hermano</em> (de ella) es <em>ihr Bruder</em>, sin terminación, porque <em>Bruder</em> es masculino y está en nominativo. No pongas <em>-e</em> a <em>ihr</em> o <em>sein</em> solo porque el poseedor sea mujer o hombre."
      },
      {
        h: "El nombre propio: Annas Bruder",
        p: "Para decir «el hermano de Ana» basta añadir <b>-s</b> al nombre, sin apóstrofo, y ponerlo antes de la persona: <em>Annas Bruder</em>, <em>Peters Schwester</em>. No hay <em>de</em> ni artículo. Si el nombre acaba en <em>-s</em>, <em>-x</em> o <em>-z</em>, solo se pone un apóstrofo: <em>Hans' Mutter</em>."
      },
      {
        tip: "Aprende siempre los miembros de la familia con el posesivo: <em>meine Mutter</em>, <em>mein Vater</em>, <em>meine Eltern</em>. Así el género y el plural entran junto con el nombre."
      }
    ],
    grammar: {
      title: "Mein en nominativo y acusativo",
      note: "Terminaciones de <b>ein</b>: solo cambia el masculino en acusativo (<em>meinen</em>). El mismo esquema vale para <em>dein, sein, ihr, unser</em>.",
      table: {
        head: ["género", "nominativo", "acusativo", "ejemplo"],
        rows: [
          ["masculino", "mein", "meinen", "Ich mag meinen Bruder."],
          ["femenino", "meine", "meine", "Ich mag meine Schwester."],
          ["neutro", "mein", "mein", "Ich mag mein Auto."],
          ["plural", "meine", "meine", "Ich mag meine Eltern."]
        ]
      },
      examples: [
        { tr: "Mi madre se llama Anna." },
        { tr: "Mi jefe es simpático." },
        { tr: "Esta es nuestra familia.", note: "Familie es femenino: unsere" },
        { tr: "Quiero a mi hermano.", note: "Bruder es masculino en acusativo: meinen" },
        { tr: "¿Dónde vive tu hermana?" },
        { tr: "El hermano de Anna se llama Paul.", note: "nombre propio + -s, sin artículo y sin apóstrofo" }
      ]
    },
    vocab: [
      "la familia",
      "la madre",
      "el padre",
      "los padres (solo plural)",
      "el hermano",
      "la hermana",
      "la abuela",
      "el abuelo",
      "el tío",
      "la tía",
      "el jefe",
      "la amiga, la novia"
    ],
    exercises: [
      {
        q: "¿Cómo se dice «mi madre»?",
        opts: ["mein Mutter", "meine Mutter", "meinen Mutter"],
        why: "<i>Mutter</i> es femenino, así que <b>meine</b>, como <i>eine</i>."
      },
      {
        q: "Completa: «Das ist ___ Schwester.» (Esta es mi hermana.)",
        hint: "mein + terminación femenina",
        why: "<b>Meine Schwester</b>: femenino, nominativo."
      },
      {
        q: "Completa: «Ich mag ___ Chef.» (Me cae bien mi jefe.)",
        hint: "mein + acusativo masculino",
        why: "<b>Meinen Chef</b>: después de <i>mögen</i> va acusativo y el masculino cambia, como <i>einen</i>."
      },
      {
        q: "¿Cómo se dice «su madre» (la madre de él)?",
        opts: ["seine Mutter", "ihre Mutter", "sein Mutter"],
        why: "El poseedor es masculino, así que <b>sein</b>, y <i>Mutter</i> es femenino: <b>seine Mutter</b>."
      },
      {
        q: "¿Qué frase es correcta?",
        opts: ["Ich mag mein Vater.", "Ich mag meinen Vater.", "Ich mag meine Vater."],
        why: "<i>Vater</i> es masculino y está en acusativo: <b>meinen Vater</b>."
      },
      {
        q: "Elige ein o eine: el posesivo toma las mismas terminaciones.",
        why: "El posesivo toma las mismas terminaciones que <i>ein</i>: <i>ein Bruder → mein Bruder</i>, <i>eine Tante → meine Tante</i>.",
        items: ["hermano", "hermana", "tío", "tía", "jefe", "amiga"]
      },
      {
        q: "Traduce: «Mi hermana se llama Lena y mi hermano se llama Paul.»",
        why: "Sin artículo delante del posesivo: <i>meine Schwester</i>, <i>mein Bruder</i>."
      },
      {
        q: "Completa: «Estos son mis padres. Mi padre se llama Jan.»",
        tr: "Estos son mis padres. Mi padre se llama Jan.",
        why: "<i>Eltern</i> es plural: <b>meine</b>. <i>Vater</i> es masculino nominativo: <b>Mein</b>, con mayúscula a principio de frase."
      },
      {
        tr: "Mi madre se llama Eva y mi padre se llama Jan.",
        why: "En <i>heißen</i> la <b>ß</b> es una <b>s</b> sorda, como la de «sol»."
      },
      {
        tr: "Esta es mi familia: mi padre, mi madre y mi hermano.",
        why: "<i>Familie</i> se pronuncia /faˈmiːli̯ə/: la primera <b>i</b> es larga y acentuada; la terminación <b>-ie</b> se pronuncia /i̯ə/, no es una <b>i</b> larga."
      }
    ]
  },
  "lesson:a1-u08-l2": {
    theme: "Aspecto físico",
    title: "¿Qué aspecto tiene?",
    objectives: [
      "preguntar y decir qué aspecto tiene una persona con Wie sieht ... aus?",
      "usar el adjetivo después de sein sin cambiarlo",
      "describir el pelo, los ojos y los accesorios con haben"
    ],
    theory: [
      {
        h: "Wie sieht er aus?",
        p: "Para preguntar por el <b>aspecto</b> se usa <em>Wie sieht er aus?</em> («¿qué aspecto tiene?»). Por ahora aprende la fórmula entera, sin desmontar el verbo: <em>Wie sieht Paul aus?</em>, <em>Wie sieht deine Schwester aus?</em> Se responde con <em>sein</em> y un adjetivo: <em>Er ist groß und schlank</em>. O con <em>haben</em>: <em>Er hat einen Bart</em>, <em>Sie hat eine Brille</em>."
      },
      {
        contrast: "En español el adjetivo concuerda con el nombre: <em>alto, alta, altos, altas</em>. En alemán, después de <em>sein</em>, el adjetivo queda <b>siempre igual</b>: <em>Er ist groß</em>, <em>Sie ist groß</em>, <em>Sie sind groß</em>. No existe una forma para el femenino ni para el plural. Fíjate también en que en esta expresión se usa el artículo indefinido: <em>Er hat einen Bart</em>, mientras que en español se dice «tiene barba»."
      },
      {
        h: "El pelo y los ojos son plurales",
        p: "<em>Die Haare</em> y <em>die Augen</em> son plurales, y el verbo los sigue: <em>Seine Haare sind kurz</em>, <em>Ihre Augen sind grün</em>. En español «el pelo» suele ir en singular, pero en alemán <em>Haare</em> va en plural. También se puede decir <em>Er hat kurze Haare</em>, pero esa forma, con el adjetivo delante del nombre, llegará más adelante: por ahora el adjetivo va después de <em>sein</em>."
      },
      {
        trap: "Para la estatura de una persona el alemán usa <em>klein</em> («pequeño»), no una palabra para «bajo»: <em>Meine Schwester ist klein</em>. Para el pelo, en cambio, existe <em>kurz</em>: <em>Seine Haare sind kurz</em>. No digas «Seine Haare sind klein». Con un sujeto plural el verbo es <em>sind</em>: no «Die Eltern ist groß», sino <em>Die Eltern sind groß</em>."
      },
      {
        tip: "Haz una descripción en tres frases: <em>Er ist ...</em>, <em>Er hat ...</em>, <em>Seine Haare sind ...</em>. Con <em>sein</em> y <em>haben</em> describes a casi cualquier persona."
      }
    ],
    grammar: {
      title: "El adjetivo después de sein no cambia",
      note: "Misma forma para masculino, femenino, neutro y plural. Solo cambia el verbo (<em>ist, sind</em>).",
      table: {
        head: ["sujeto", "verbo", "adjetivo", "ejemplo"],
        rows: [
          ["masculino", "ist", "groß", "Mein Bruder ist groß."],
          ["femenino", "ist", "groß", "Meine Schwester ist groß."],
          ["neutro", "ist", "groß", "Das Kind ist groß."],
          ["plural", "sind", "groß", "Meine Eltern sind groß."]
        ]
      },
      examples: [
        { tr: "¿Qué aspecto tiene Paul?", note: "fórmula: Wie sieht ... aus?" },
        { tr: "Es alto y delgado." },
        { tr: "Sus ojos son marrones.", note: "Augen es plural: sind" },
        { tr: "Mi hermana es baja y rubia.", note: "klein para la estatura" },
        { tr: "Tiene barba.", note: "haben + acusativo: einen Bart" },
        { tr: "Su pelo es largo.", note: "Haare es plural: sind" }
      ]
    },
    vocab: [
      "alto, grande",
      "pequeño; bajo (de estatura)",
      "joven",
      "viejo, mayor",
      "delgado, esbelto",
      "rubio",
      "largo",
      "corto",
      "el pelo (plural en alemán)",
      "los ojos (plural)",
      "las gafas (singular en alemán)",
      "la barba"
    ],
    exercises: [
      {
        q: "¿Cómo preguntas «¿Qué aspecto tiene?»",
        opts: ["Wie ist er aus?", "Wie sieht er aus?", "Was sieht er aus?"],
        why: "La fórmula es <b>Wie sieht er aus?</b> y no se desmonta."
      },
      {
        q: "¿Qué frase es correcta?",
        opts: ["Die Schuhe sind rote.", "Meine Schwester ist kleine.", "Meine Schwester ist klein."],
        why: "Después de <i>sein</i> el adjetivo queda invariable: <b>klein</b>."
      },
      {
        q: "Completa: «Seine Augen ___ braun.» (Sus ojos son marrones.)",
        hint: "sein, sujeto plural",
        why: "<i>Augen</i> es plural: <b>sind</b>."
      },
      {
        q: "Completa: «Sie ___ eine Brille.» (Lleva gafas.)",
        hint: "haben, tercera persona del singular",
        why: "<b>Sie hat</b>: <i>haben</i> con <i>er/sie/es</i> es <i>hat</i>. El alemán usa <i>haben</i> y una <i>Brille</i> en singular donde el español dice «llevar gafas»."
      },
      {
        q: "Une cada palabra con su significado.",
        pairs: ["alto", "delgado", "rubio", "corto"]
      },
      {
        tr: "Mi hermana es baja y rubia.",
        why: "El orden es sujeto, verbo, adjetivos: <i>Meine Schwester ist klein und blond</i>. La estatura es <i>klein</i>, no <i>kurz</i>."
      },
      {
        q: "Traduce: «Mi hermano es alto y tiene barba.»",
        why: "<i>Er ist groß und hat einen Bart</i>: <i>Bart</i> es masculino en acusativo, así que <i>einen</i>."
      },
      {
        q: "Completa el texto.",
        tr: "Anna es baja y delgada. Lleva gafas y su pelo es largo.",
        why: "<i>Ist</i> y <i>hat</i> con <i>Anna/sie</i>; <i>Haare</i> es plural, así que <i>sind</i>."
      },
      {
        tr: "Mi hermana es alta y delgada, y su pelo es rubio.",
        why: "En <i>blond</i> la <b>o</b> es breve; en <i>Haare</i> la <b>aa</b> es una <b>a</b> larga."
      },
      {
        tr: "Mi padre es alto, tiene barba y gafas.",
        why: "En <i>Brille</i> la <b>r</b> suele hacerse al fondo de la garganta (uvular), aunque también es estándar una <b>r</b> vibrante simple; ninguna es incorrecta. La <b>ll</b> solo marca que la <b>i</b> anterior es breve y se pronuncia como una sola <b>l</b> /l/, no como la <b>ll</b> española."
      }
    ]
  },
  "lesson:a1-u08-l3": {
    theme: "El carácter",
    title: "¿Simpático o antipático?",
    objectives: [
      "preguntar y decir cómo es una persona con Wie ist ...?",
      "usar adjetivos de carácter después de sein",
      "negar un adjetivo con nicht"
    ],
    theory: [
      {
        h: "Wie ist er? El carácter",
        p: "<em>Wie sieht er aus?</em> pregunta por el aspecto, <em>Wie ist er?</em> pregunta por el <b>carácter</b>: <em>Wie ist dein Chef?</em> - <em>Er ist sehr nett.</em> También aquí el adjetivo va después de <em>sein</em> y no cambia: <em>Meine Freundin ist lustig</em>, <em>Meine Eltern sind intelligent</em>."
      },
      {
        contrast: "El español pregunta por las dos cosas con <em>¿Cómo es?</em>, y el contexto decide si se habla del aspecto o del carácter. El alemán tiene dos preguntas: <em>Wie sieht er aus?</em> y <em>Wie ist er?</em>. Además, <em>sein</em> cubre <em>ser</em> y <em>estar</em>, así que no hay que elegir entre los dos verbos: <em>Er ist faul</em> (es vago). <em>Sympathisch</em> se parece a <em>simpático</em> y dice que una persona cae bien; <em>freundlich</em> describe un comportamiento amable; <em>nett</em> puede significar amable, agradable o simpático según el contexto. El contrario de <em>freundlich</em> se hace con <em>un-</em>: <em>unfreundlich</em>."
      },
      {
        h: "Negar un adjetivo: nicht",
        p: "Como viste en la unidad 3, un adjetivo se niega con <strong>nicht</strong>, que va delante de él: <em>Er ist nicht unfreundlich</em>, <em>Sie ist nicht faul, sie ist sehr fleißig</em>. Con <em>aber</em> se contrapone: <em>Mein Chef ist nett, aber zu ernst</em>."
      },
      {
        trap: "<em>Zu</em> delante de un adjetivo significa «demasiado», no «a»: <em>zu ernst</em> es «demasiado serio». Y <em>nicht</em> no se convierte en <em>kein</em> delante de un adjetivo: «Er ist kein nett» es incorrecto; para negar un adjetivo después de <em>sein</em> se usa <em>nicht</em>, <em>Er ist nicht nett</em>. En español el «no» va antes del verbo; en alemán <em>nicht</em> va antes del adjetivo."
      },
      {
        tip: "Para describir a una persona haz dos movimientos: el aspecto (<em>Wie sieht sie aus?</em>) y el carácter (<em>Wie ist sie?</em>). Dos preguntas distintas, dos respuestas distintas."
      }
    ],
    grammar: {
      title: "Wie ist er? Wie sieht er aus?",
      note: "<b>Wie ist ...?</b> pregunta por el carácter, <b>Wie sieht ... aus?</b> por el aspecto. En ambos casos el adjetivo no cambia.",
      table: {
        head: ["pregunta", "respuesta", "ejemplo"],
        rows: [
          ["Wie ist dein Chef?", "sein + adjetivo", "Er ist nett."],
          ["Wie sieht dein Chef aus?", "sein + adjetivo; haben + nombre en acusativo", "Er ist groß. Er hat einen Bart."],
          ["negar un adjetivo", "nicht + adjetivo", "Er ist nicht unfreundlich."],
          ["demasiado", "zu + adjetivo", "Er ist zu ernst."]
        ]
      },
      examples: [
        { tr: "¿Cómo es tu jefe?", note: "Wie ist ...? pregunta por el carácter" },
        { tr: "Es muy simpático." },
        { tr: "Mi amiga es divertida." },
        { tr: "No es vaga, es trabajadora.", note: "nicht delante del adjetivo" },
        { tr: "Mi jefe es simpático, pero demasiado serio." },
        { tr: "Paul no es antipático.", note: "nicht unfreundlich: negar un adjetivo" }
      ]
    },
    vocab: [
      "simpático, amable, agradable",
      "amable, cordial",
      "antipático, poco amable",
      "divertido, gracioso",
      "serio",
      "tranquilo, calmado",
      "simpático, que cae bien",
      "inteligente",
      "trabajador, aplicado",
      "vago, perezoso",
      "tímido",
      "el amigo, el novio"
    ],
    exercises: [
      {
        q: "¿Cómo preguntas cómo es el carácter de él?",
        opts: ["Wie sieht er aus?", "Wie ist er?", "Wie hat er?"],
        why: "<b>Wie ist er?</b> pregunta por el carácter; <i>Wie sieht er aus?</i> por el aspecto."
      },
      {
        q: "¿Cuál es el contrario de <i>freundlich</i>?",
        opts: ["unfreundlich", "fleißig", "ruhig"],
        why: "El prefijo <b>un-</b> niega el adjetivo: <i>unfreundlich</i>."
      },
      {
        q: "Paul trabaja mucho. ¿Cómo es?",
        opts: ["Er ist faul.", "Er ist schüchtern.", "Er ist fleißig."],
        why: "<i>Fleißig</i> es quien trabaja con empeño; <i>faul</i> es su contrario."
      },
      {
        q: "Completa: «Anna ist ___ unfreundlich, sie ist sehr nett.»",
        hint: "negar un adjetivo",
        why: "Un adjetivo se niega con <b>nicht</b>."
      },
      {
        q: "Une cada palabra con su significado.",
        pairs: ["divertido", "serio", "vago", "tímido"]
      },
      {
        tr: "Mi jefe es muy simpático y tranquilo.",
        why: "Sujeto, verbo, adjetivos: <i>Mein Chef ist sehr nett und ruhig</i>."
      },
      {
        q: "Traduce: «Mi hermana no es tímida, es muy simpática.»",
        why: "<i>Nicht schüchtern</i>: <i>nicht</i> va delante del adjetivo. Después una segunda frase con <i>sie ist ...</i>."
      },
      {
        q: "Completa: «¿Cómo es tu jefe? Es simpático, pero demasiado serio.»",
        tr: "¿Cómo es tu jefe? Es simpático, pero demasiado serio.",
        why: "<i>Wie ist ...?</i> e <i>ist</i> en las respuestas; <i>zu</i> delante de un adjetivo significa «demasiado»."
      },
      {
        tr: "Mi amigo es muy divertido, pero su hermana es seria y tranquila.",
        why: "En <i>lustig</i> la <b>u</b> es breve y la terminación <b>-ig</b> se pronuncia con el sonido suave de la <b>ch</b> de <i>ich</i>."
      },
      {
        tr: "Mi amiga no es vaga, es muy trabajadora y simpática.",
        why: "En <i>fleißig</i> la <b>ß</b> es una <b>s</b> sorda y la <b>ei</b> suena «ai»."
      }
    ]
  },
  "lesson:a1-u08-l4": {
    theme: "La comparación",
    title: "Más grande que tú",
    objectives: [
      "comparar a dos personas con el comparativo y als",
      "decir que dos cosas son iguales con so ... wie",
      "usar las formas irregulares besser, mehr, lieber"
    ],
    theory: [
      {
        h: "El comparativo: -er y als",
        p: "Para decir que alguien es «más ...» se añade <strong>-er</strong> al adjetivo, y el segundo término se introduce con <strong>als</strong>: <em>Er ist größer als du</em>. Muchos adjetivos cortos toman diéresis: <em>alt → älter</em>, <em>jung → jünger</em>, <em>groß → größer</em>. El comparativo, como el adjetivo, queda invariable después de <em>sein</em>."
      },
      {
        contrast: "El español dice «más alto <em>que</em> tú» con «más» delante del adjetivo. En alemán el «más» va dentro de la palabra (<em>größer</em>) y el segundo término se introduce con <em>als</em>, que corresponde a «que»: <em>größer als du</em>. Y «tan alto <em>como</em> yo» es <em>so groß wie ich</em>, con <em>wie</em> en lugar de «como». En los dos idiomas el pronombre que sigue es el de sujeto (<em>que yo</em>, <em>als ich</em>). Y los irregulares se parecen: <em>mejor</em> es <em>besser</em>, <em>más</em> es <em>mehr</em>."
      },
      {
        h: "Igual: so ... wie",
        p: "Para decir que dos cosas son iguales se usa <strong>so ... wie</strong> con el adjetivo simple, sin <em>-er</em>: <em>Sie ist so groß wie ich</em>. Para negar: <em>Anna ist nicht so alt wie Paul</em>."
      },
      {
        trap: "No mezcles las dos construcciones: «größer wie du» y «so groß als du» son errores frecuentes. <em>Als</em> va con el comparativo (<em>-er</em>), <em>wie</em> va con <em>so</em>. Algunas formas son irregulares: <em>gut → besser</em>, <em>viel → mehr</em>, <em>gern → lieber</em>: <em>Ich trinke lieber Tee als Kaffee</em> («prefiero el té al café»; <em>gern</em> significa «con gusto», y <em>lieber</em> «más a gusto»)."
      },
      {
        tip: "Cuando compares, pregúntate: ¿iguales o distintos? Iguales: <em>so ... wie</em>. Distintos: <em>-er ... als</em>."
      }
    ],
    grammar: {
      title: "Comparativo e igualdad",
      note: "<b>-er ... als</b> para «más que»; <b>so ... wie</b> para «tan ... como». Las formas irregulares hay que aprenderlas.",
      table: {
        head: ["adjetivo", "comparativo", "ejemplo"],
        rows: [
          ["klein", "kleiner", "Ich bin kleiner als du."],
          ["alt", "älter", "Er ist älter als ich."],
          ["jung", "jünger", "Sie ist jünger als ich."],
          ["groß", "größer", "Er ist größer als du."],
          ["gut", "besser", "Du sprichst besser Deutsch."],
          ["gern", "lieber", "Ich trinke lieber Tee."]
        ]
      },
      examples: [
        { tr: "Él es más alto que tú.", note: "größer als: -er + als" },
        { tr: "Ella es tan alta como yo.", note: "so groß wie: adjetivo base + wie" },
        { tr: "Mi hermano es mayor que mi hermana." },
        { tr: "Prefiero el té al café.", note: "gern → lieber" },
        { tr: "Hablas alemán mejor que yo.", note: "gut → besser" },
        { tr: "Anna no es tan mayor como Paul.", note: "nicht so ... wie" }
      ]
    },
    vocab: [
      "que (en la comparación)",
      "tan ... como",
      "mayor, más viejo",
      "más joven, menor",
      "más alto, más grande",
      "más pequeño",
      "mejor",
      "más",
      "más a gusto, preferiblemente",
      "el gemelo",
      "la diferencia",
      "igual, de la misma edad o medida"
    ],
    exercises: [
      {
        q: "¿Cómo se dice «más grande que tú»?",
        opts: ["größer wie du", "größer als du", "groß als du"],
        why: "El comparativo lleva <b>-er</b> y el segundo término se introduce con <b>als</b>."
      },
      {
        q: "¿Cómo se dice «tan grande como tú»?",
        opts: ["so groß wie du", "so groß als du", "größer wie du"],
        why: "La igualdad se expresa con <b>so ... wie</b> y el adjetivo sin <i>-er</i>."
      },
      {
        q: "¿Cuál es el comparativo de <i>alt</i>?",
        opts: ["alter", "älter", "alterer"],
        why: "<b>Älter</b>: la <i>a</i> toma diéresis."
      },
      {
        q: "Completa: «Paul ist ___ als ich.» (Paul es más alto que yo.)",
        hint: "groß, comparativo",
        why: "<b>Größer</b>: <i>groß</i> + <i>-er</i>."
      },
      {
        q: "Completa: «Anna ist so alt ___ ich.» (Anna tiene mi edad.)",
        hint: "igualdad",
        why: "Con <i>so ... wie</i> la palabra es <b>wie</b>."
      },
      {
        tr: "Mi hermano es mayor que mi hermana.",
        why: "<i>Älter als</i>: el orden es sujeto, verbo, comparativo, <i>als</i>, segundo término."
      },
      {
        q: "Traduce: «Hablas alemán mejor que yo.»",
        why: "<i>Besser</i> y <i>als ich</i>: aquí <i>ich</i> está en nominativo porque es el sujeto de la oración implícita: <i>als ich Deutsch spreche</i>."
      },
      {
        q: "Completa la frase. Usa jung en el primer hueco y alt en el segundo.",
        tr: "Yo soy más joven que tú, pero tú eres mayor que yo.",
        why: "<i>Jünger als du</i>, <i>älter als ich</i>: las diéresis de <i>jung</i> y <i>alt</i>."
      },
      {
        tr: "Mi hermano es mayor que yo, pero yo soy más alto que él.",
        why: "En <i>älter</i> la <b>ä</b> es una «e» abierta; en <i>größer</i> la <b>ö</b> se hace con los labios como para decir «o» y la lengua como para decir «e»."
      },
      {
        tr: "Mi hermana es tan alta como yo, pero es más joven.",
        why: "En <i>jünger</i> la <b>j</b> suena como una «y», y la <b>ü</b> se hace con los labios como para decir «u» y la lengua como para decir «i»."
      }
    ]
  },
  "lesson:a1-u08-test": {
    theme: "Prueba",
    title: "Prueba de la unidad 8",
    objectives: ["comprobar posesivos, adjetivos después de sein y comparativo"],
    theory: [
      {
        p: "Diez preguntas sobre toda la unidad. Se supera con el 70%. No repases las lecciones mientras respondes: si no recuerdas algo, es mejor volver a repasar."
      }
    ],
    exercises: [
      {
        q: "Completa: «Das ist ___ Tante.» (Esta es mi tía.)",
        hint: "mein + terminación femenina",
        why: "<b>Meine Tante</b>: femenino, nominativo."
      },
      {
        q: "Completa: «Ich mag ___ Onkel.» (Me cae bien mi tío.)",
        hint: "mein + acusativo masculino",
        why: "<b>Meinen Onkel</b>: masculino acusativo."
      },
      {
        q: "Completa: «Du bist älter ___ ich.» (Eres mayor que yo.)",
        hint: "segundo término de la comparación",
        why: "Después del comparativo se usa <b>als</b>."
      },
      {
        q: "Completa: «Sie ist so groß ___ ich.» (Es tan alta como yo.)",
        hint: "igualdad",
        why: "Con <i>so ... wie</i> la palabra es <b>wie</b>."
      },
      {
        q: "¿Cómo se dice «su hermana» (la hermana de ella)?",
        opts: ["seine Schwester", "ihre Schwester", "ihr Schwester"],
        why: "El poseedor es femenino, así que <b>ihr-</b>, y <i>Schwester</i> es femenino: <b>ihre Schwester</b>."
      },
      {
        q: "¿Qué frase es correcta?",
        opts: ["Meine Schwester ist kleine.", "Meine Schwester ist klein.", "Meine Schwester sind klein."],
        why: "Después de <i>sein</i> el adjetivo es invariable, y con un sujeto singular el verbo es <i>ist</i>."
      },
      {
        q: "¿Cuál es el contrario de <i>fleißig</i>?",
        opts: ["faul", "ernst", "freundlich"],
        why: "<b>Faul</b> (vago) es quien no trabaja con empeño."
      },
      {
        q: "¿Cómo se dice «mejor que»?",
        opts: ["gut als", "besser als", "guter als"],
        why: "<i>Gut</i> tiene el comparativo irregular <b>besser</b>."
      },
      {
        tr: "Mi tío es mayor que mi padre, pero no es tan serio.",
        why: "<i>Älter als</i> y <i>nicht so ... wie</i>: dos construcciones distintas."
      },
      {
        tr: "Mi hermana es más alta que yo y muy simpática.",
        why: "<i>Größer als ich</i>, luego <i>sehr sympathisch</i>: en <i>sympathisch</i> la terminación <b>sch</b> [ʃ] suena como la «sh» del inglés «she»."
      }
    ]
  },
  "unit:a1-u09": {
    title: "Tiempo libre",
    grammarNote: "presente y días · es regnet · gerade en lugar de «estar + gerundio» · für, ohne, um, durch, gegen · und, aber, oder, denn"
  },
  "lesson:a1-u09-l1": {
    theme: "El fin de semana",
    title: "¿Qué haces el fin de semana?",
    objectives: [
      "preguntar y decir qué se hace el fin de semana",
      "elegir entre am Samstag y samstags",
      "hablar de pasatiempos con spielen, schwimmen, wandern, kochen"
    ],
    theory: [
      {
        h: "El presente para los planes",
        p: "El presente alemán sirve para lo que haces habitualmente y para lo que harás pronto: <em>Am Samstag spiele ich Fußball</em> (“El sábado juego al fútbol”). El verbo se queda en <b>segunda posición</b>: si abres la frase con <em>am Samstag</em>, el sujeto pasa detrás del verbo."
      },
      {
        contrast: "El español distingue «el sábado» (ese sábado) de «los sábados» (cada sábado) con el artículo y el plural. El alemán usa dos formas distintas: <em>samstags</em> (con <em>-s</em>) indica de forma explícita el hábito, mientras que <em>am Samstag</em> depende del contexto: puede ser un sábado concreto, pero también habitual (<em>Am Samstag spiele ich immer Fußball</em>). Y «el fin de semana» es <em>am Wochenende</em>, con <em>am</em>: no digas <em>im</em> (<em>im Wochenende</em> es incorrecto)."
      },
      {
        trap: "<em>Wochenende</em> es neutro (<em>das Wochenende</em>), mientras que «el fin de semana» es masculino en español: el género español no te ayuda. Y con los deportes se dice <em>Fußball spielen</em>, sin preposición: «jugar <em>al</em> fútbol» no lleva ningún <em>an</em> ni <em>zu</em>. Con un instrumento pasa algo parecido, pero el español cambia de verbo y el alemán no: «tocar la guitarra» es <em>Gitarre spielen</em>, con el mismo <em>spielen</em> que para «jugar»."
      },
      {
        tip: "Para decir que algo te gusta, añade <em>gern</em> después del verbo: <em>Ich schwimme gern</em>. Para preguntar por los planes de alguien, <em>Was machst du am Wochenende?</em> es la pregunta más natural."
      }
    ],
    grammar: {
      title: "Cuándo: am, samstags, im",
      note: "<b>am</b> para un día concreto y para la parte del día, <b>-s</b> para el hábito explícito (<b>am</b> también puede ser habitual, según el contexto), <b>im</b> para las estaciones.",
      table: {
        head: ["cuándo", "forma", "ejemplo"],
        rows: [
          ["normalmente un sábado concreto (o habitual, según el contexto)", "am Samstag", "Am Samstag spiele ich Fußball."],
          ["todos los sábados, hábito explícito", "samstags", "Samstags schwimme ich gern."],
          ["el fin de semana", "am Wochenende", "Am Wochenende wandere ich."],
          ["por la noche", "am Abend", "Am Abend koche ich."],
          ["en una estación", "im Winter", "Im Winter tanzen wir oft."]
        ]
      },
      examples: [
        { tr: "¿Qué haces el fin de semana?", note: "am Wochenende, no im" },
        { tr: "El sábado juego al fútbol.", note: "Fußball spielen sin preposición" },
        { tr: "Los sábados nado con gusto.", note: "samstags = todos los sábados" },
        { tr: "El domingo hago senderismo con los amigos.", note: "wandern: caminar por la naturaleza" },
        { tr: "Por la noche cocino para mi familia." },
        { tr: "En invierno bailamos a menudo.", note: "im + estación" }
      ]
    },
    vocab: [
      "el fin de semana",
      "el pasatiempo, el hobby",
      "el concierto",
      "la película",
      "el libro",
      "la excursión",
      "jugar (también: tocar un instrumento)",
      "nadar",
      "hacer senderismo",
      "cocinar",
      "bailar",
      "los sábados, cada sábado"
    ],
    exercises: [
      {
        q: "¿Cómo le preguntas a un amigo qué hace el fin de semana?",
        opts: ["Was machst du am Wochenende?", "Was machst du im Wochenende?", "Was machst du an Wochenende?"],
        why: "Con el fin de semana se usa <b>am</b>: <i>am Wochenende</i>. <i>Im Wochenende</i> es el error de quien piensa en «en el»."
      },
      {
        q: "¿Cómo dices «los sábados» (cada sábado)?",
        opts: ["Im Samstag", "Der Samstag", "Samstags"],
        why: "<b>Samstags</b>, con la <i>-s</i>, indica de forma explícita un hábito. <i>Am Samstag</i> depende del contexto: normalmente un sábado concreto, pero también puede ser habitual."
      },
      {
        q: "Completa: «Ich ___ gern Fußball.» (jugar, yo)",
        hint: "spielen, ich",
        why: "Con <i>ich</i> el verbo regular acaba en <b>-e</b>: <i>ich spiele</i>."
      },
      {
        q: "Completa: «Ich besuche ___ Sonntag meine Großmutter.» (el domingo)",
        hint: "preposición para un día concreto",
        why: "Un día concreto lleva <b>am</b>: <i>am Sonntag</i>."
      },
      {
        q: "Une cada verbo con su significado.",
        pairs: ["jugar", "nadar", "hacer senderismo", "cocinar"]
      },
      {
        q: "Traduce: «El sábado juego al fútbol y el domingo hago senderismo.» (días concretos, usa wandern)",
        why: "<i>Am Samstag spiele ich Fußball ...</i>: después del complemento de tiempo el verbo sigue en segunda posición y el sujeto va detrás."
      },
      {
        q: "Completa el diálogo (usa treffen).",
        tr: "¿Qué haces el fin de semana? Quedo con amigos e iremos al cine.",
        why: "Con <i>du</i> se dice <i>machst</i>; <i>ich treffe</i> es la primera persona de <i>treffen</i>; <i>ins</i> es <i>in das</i>."
      },
      {
        q: "Un amigo te pregunta por tus planes.",
        setting: "Hablas con un amigo por teléfono.",
        lines: [
          { tr: "¡Hola! ¿Qué haces el fin de semana?" },
          { tr: "Responde que el sábado juegas al fútbol.", answerTr: "El sábado juego al fútbol." },
          { tr: "¿Y el domingo?" },
          { tr: "Responde que el domingo haces senderismo.", answerTr: "El domingo hago senderismo." }
        ]
      },
      {
        tr: "El sábado juego al fútbol y el domingo cocino para mi familia.",
        why: "En <i>Fußball</i> la <b>ß</b> es una <b>s</b> sorda y la <b>u</b> es larga."
      },
      {
        tr: "El sábado bailo y el domingo hago senderismo.",
        why: "En <i>tanze</i> la <b>z</b> se lee [ts], como en «pizza»; en <i>wandere</i> la <b>w</b> se pronuncia como una «v» labiodental, no como la «b» suave del español."
      }
    ]
  },
  "lesson:a1-u09-l2": {
    theme: "El tiempo",
    title: "Llueve",
    objectives: [
      "decir qué tiempo hace con es regnet, es schneit, es ist kalt",
      "usar es como sujeto de las frases sobre el tiempo",
      "preguntar y decir la temperatura"
    ],
    theory: [
      {
        h: "Es: el sujeto que en español no aparece",
        p: "Para hablar del tiempo el alemán exige un sujeto: <strong>es</strong>. <em>Es regnet</em> (llueve), <em>Es schneit</em> (nieva), <em>Es ist kalt</em> (hace frío). <em>Es</em> no designa una cosa: solo ocupa el lugar del sujeto."
      },
      {
        contrast: "El español omite el sujeto: «llueve», «nieva», «hace frío». En alemán, en las frases sobre el tiempo no se omite: <em>Regnet</em> solo no es una frase. Incluso cuando la frase empieza con otro elemento, <em>es</em> se queda y va detrás del verbo: <em>Heute regnet es</em>, no <em>Heute regnet</em>."
      },
      {
        trap: "«Hace frío» en español usa el verbo hacer; en alemán se usa <em>sein</em>: <em>Es ist kalt</em>, no «es macht kalt». Cuidado también con <em>die Sonne scheint</em>: aquí el sujeto es una cosa real, <em>die Sonne</em>, y no hace falta <em>es</em>. Para «está soleado» se dice, en cambio, <em>Es ist sonnig</em>."
      },
      {
        tip: "Para la temperatura: <em>Wie viel Grad sind es?</em> y <em>Es sind zwanzig Grad.</em> Con un número, para indicar la temperatura, <em>Grad</em> no cambia; el plural léxico es <em>Grade</em>. Para preguntar por el tiempo: <em>Wie ist das Wetter?</em>"
      }
    ],
    grammar: {
      title: "Es en las frases sobre el tiempo",
      note: "El sujeto <b>es</b> no se omite; si hay otro elemento en primera posición, va detrás del verbo.",
      table: {
        head: ["español", "alemán", "ejemplo"],
        rows: [
          ["llueve", "Es regnet.", "Heute regnet es nicht."],
          ["nieva", "Es schneit.", "Im Winter schneit es oft."],
          ["hace frío", "Es ist kalt.", "Heute ist es sehr kalt."],
          ["hace calor", "Es ist warm / heiß.", "Im Sommer ist es warm."],
          ["¿qué tiempo hace?", "Wie ist das Wetter?", "Wie ist das Wetter in Wien?"]
        ]
      },
      examples: [
        { tr: "Llueve.", note: "es no se omite" },
        { tr: "En invierno nieva a menudo.", note: "es detrás del verbo" },
        { tr: "Hoy hace mucho frío.", note: "sein, no machen" },
        { tr: "Hoy no llueve." },
        { tr: "¿Qué tiempo hace?", note: "das Wetter es neutro" },
        { tr: "Hay veinte grados.", note: "Con un número, para la temperatura, Grad no cambia: zwanzig Grad; el plural léxico es Grade." }
      ]
    },
    vocab: [
      "el tiempo (meteorológico)",
      "llover",
      "nevar",
      "el sol",
      "la nube",
      "el viento",
      "frío",
      "cálido (agradable), templado",
      "muy caluroso, tórrido",
      "soleado",
      "ventoso",
      "el grado"
    ],
    exercises: [
      {
        q: "¿Cómo dices «llueve»?",
        opts: ["Es regnet.", "Regnet.", "Sie regnet."],
        why: "En alemán el sujeto <b>es</b> no se omite: <i>Es regnet</i>."
      },
      {
        q: "¿Qué frase es correcta?",
        opts: ["Heute es regnet.", "Heute regnet es.", "Heute regnet."],
        why: "El verbo está en segunda posición y <i>es</i> se queda, detrás del verbo."
      },
      {
        q: "Completa: «Im Winter ___ es oft.» (nevar)",
        hint: "schneien, es",
        why: "<b>Schneit</b>: <i>schneien</i> en tercera persona, con <i>es</i>."
      },
      {
        q: "Completa: «Heute ist ___ sehr kalt.» (Hoy hace mucho frío.)",
        hint: "el sujeto de las frases sobre el tiempo",
        why: "<b>Es</b> es el sujeto y en las frases sobre el tiempo no se omite."
      },
      {
        q: "Une cada palabra con su significado.",
        pairs: ["frío", "muy caluroso", "soleado", "ventoso"]
      },
      {
        tr: "Hoy hace mucho frío.",
        why: "<i>Heute ist es sehr kalt</i>: verbo en segunda posición. También vale <i>Es ist heute sehr kalt</i>."
      },
      {
        q: "Traduce: «Hoy llueve y hace frío.»",
        why: "Dos frases, dos <i>es</i>: <i>es regnet</i> y <i>es ist kalt</i>. Después de <i>und</i> el sujeto común se puede omitir: <i>Heute regnet es und ist kalt</i>."
      },
      {
        q: "Completa el diálogo (el último hueco es «frío»).",
        tr: "¿Qué tiempo hace hoy? Llueve y hace frío.",
        why: "<i>Das Wetter</i> es neutro. Con <i>regnet</i> y <i>ist kalt</i> el sujeto <i>es</i> siempre está."
      },
      {
        tr: "Hoy hay sol, pero no hace calor.",
        why: "En <i>scheint</i> el grupo <b>sch</b> se lee [ʃ], como la «sh» inglesa de «shoe», y <b>ei</b> suena como «ai»."
      },
      {
        tr: "En invierno nieva a menudo y hace mucho frío.",
        why: "En <i>schneit</i> la <b>sch</b> es [ʃ] seguida de <b>n</b>, y <b>ei</b> suena como «ai»."
      }
    ]
  },
  "lesson:a1-u09-l3": {
    theme: "Ahora",
    title: "Estoy leyendo",
    objectives: [
      "decir qué se está haciendo ahora con el presente y gerade",
      "usar im Moment como alternativa a gerade",
      "conjugar lesen y sehen (y fernsehen)"
    ],
    theory: [
      {
        h: "Gerade + presente",
        p: "El alemán no tiene una forma como «estoy leyendo». Para decir que haces algo ahora usas el presente y añades <strong>gerade</strong> (ahora mismo) o <strong>im Moment</strong> (en este momento): <em>Ich lese gerade</em>. Normalmente <em>gerade</em> va detrás del verbo."
      },
      {
        contrast: "El español tiene «estar + gerundio»: «estoy leyendo», «está llamando». En alemán estándar no existe una construcción equivalente: <em>Ich bin lesend</em> es incorrecto. «Estoy leyendo» y «leo» son ambos <em>ich lese</em>, y solo el contexto o <em>gerade</em> dice si es ahora. En algunas regiones se oye también <em>Ich bin am Lesen</em>, pero por ahora no te hace falta."
      },
      {
        h: "Lesen y sehen cambian de vocal",
        p: "En la segunda y la tercera persona del singular <em>lesen</em> y <em>sehen</em> cambian <b>e → ie</b>: <em>du liest</em>, <em>er liest</em>, <em>du siehst</em>, <em>er sieht</em>. <em>Fernsehen</em> es separable: <em>Er sieht gerade fern</em>."
      },
      {
        trap: "<em>Ich lese</em> solo puede significar «leo» (habitualmente) o «estoy leyendo». Si quieres dejar claro que es ahora, pon <em>gerade</em>. Usa un solo verbo conjugado en presente: <em>ich lese gerade</em>. No añadas <em>bin</em>: no es un equivalente de «estoy»."
      },
      {
        tip: "La pregunta y la respuesta usan el mismo esquema: <em>Was machst du gerade? Ich lese gerade.</em> Los adverbios de frecuencia (<em>immer, oft, manchmal, nie</em>) van detrás del verbo conjugado y de un sujeto pronombre: <em>Ich lese oft</em>, <em>Heute lese ich oft</em>."
      }
    ],
    grammar: {
      title: "Lesen y sehen en presente",
      note: "<b>e → ie</b> con <em>du</em> y <em>er/sie/es</em>. Con <b>gerade</b> se dice «ahora».",
      table: {
        head: ["persona", "lesen", "sehen"],
        rows: [
          ["ich", "lese", "sehe"],
          ["du", "liest", "siehst"],
          ["er / sie / es", "liest", "sieht"],
          ["wir", "lesen", "sehen"],
          ["ihr", "lest", "seht"],
          ["sie / Sie", "lesen", "sehen"]
        ]
      },
      examples: [
        { tr: "Estoy leyendo un libro.", note: "presente + gerade" },
        { tr: "¿Qué estás haciendo?", note: "gerade = en este momento" },
        { tr: "Él está viendo la tele.", note: "fernsehen: fern al final" },
        { tr: "Ahora mismo estoy escribiendo un mensaje.", note: "im Moment en primera posición: el verbo va detrás" },
        { tr: "Estamos escuchando una canción." },
        { tr: "Ella está llamando por teléfono." }
      ]
    },
    vocab: [
      "ahora mismo, en este instante",
      "en este momento",
      "leer",
      "escuchar",
      "escribir",
      "llamar por teléfono",
      "ver la televisión",
      "aprender, estudiar",
      "el periódico",
      "el teléfono móvil",
      "el mensaje",
      "la canción"
    ],
    exercises: [
      {
        q: "¿Cómo dices «estoy leyendo» (ahora)?",
        opts: ["Ich lese gerade.", "Ich bin gerade lesend.", "Ich lesen gerade."],
        why: "Se usa el presente con <b>gerade</b>: no hay una forma con «estar»."
      },
      {
        q: "¿Qué significa «Was machst du gerade?»",
        opts: ["¿Qué haces normalmente?", "¿Qué estás haciendo ahora?", "¿Qué hiciste ayer?"],
        why: "<i>Gerade</i> significa «en este momento»."
      },
      {
        q: "Completa: «Du ___ gerade ein Buch.» (leer)",
        hint: "lesen, du",
        why: "<i>Lesen</i> cambia <b>e → ie</b> con <i>du</i>: <b>liest</b>."
      },
      {
        q: "Completa: «Er ___ gerade fern.» (ver la tele, él)",
        hint: "fernsehen, er",
        why: "<i>Fernsehen</i> es separable y, como <i>sehen</i>, cambia <b>e → ie</b>: <b>sieht</b>, y <i>fern</i> va al final."
      },
      {
        q: "Completa: «Wir ___ gerade ein Lied.» (escuchar)",
        hint: "hören, wir",
        why: "Con <i>wir</i> el presente de <i>hören</i> es <b>wir hören</b>: la forma coincide con el infinitivo."
      },
      {
        tr: "Estoy escribiendo un mensaje.",
        why: "<i>Ich schreibe gerade eine Nachricht</i>. También es correcto <i>Gerade schreibe ich eine Nachricht</i>, pero entonces el sujeto va detrás del verbo."
      },
      {
        q: "Traduce: «Mi hermano está leyendo el periódico.» (usa gerade)",
        why: "<i>Mein Bruder liest gerade die Zeitung</i>: con <i>er</i> y <i>Bruder</i> la vocal cambia, <i>liest</i>."
      },
      {
        q: "Completa el diálogo (el segundo hueco es «leer»).",
        tr: "¿Qué haces ahora? Estoy leyendo un libro y mi hermano está viendo la tele.",
        why: "<i>Machst</i>, <i>lese</i>, <i>sieht ... fern</i>: ninguna forma con «estar», solo el presente con <i>gerade</i>."
      },
      {
        tr: "Yo estoy leyendo, y mi hermano en este momento ve la televisión.",
        why: "En <i>sieht</i> la <b>ie</b> es una <b>i</b> larga y la <b>h</b> no se pronuncia; en el alemán estándar la <b>s</b> inicial es sonora, como la «z» inglesa de «zoo»."
      },
      {
        tr: "Estoy escribiendo un mensaje y escucho una canción.",
        why: "En <i>höre</i> la <b>ö</b> es larga, como la <i>eu</i> francesa de «peu». En <i>Nachricht</i> la primera <b>ch</b> es dura [x], como la «j» española, y la segunda es suave [ç]."
      }
    ]
  },
  "lesson:a1-u09-l4": {
    theme: "Una invitación",
    title: "¿Vamos al cine?",
    objectives: [
      "proponer, aceptar y rechazar una invitación",
      "usar für, ohne, um, durch, gegen con el acusativo",
      "unir frases con und, aber, oder, denn"
    ],
    theory: [
      {
        h: "Proponer, aceptar, rechazar",
        p: "Para proponer: <em>Gehen wir ins Kino?</em> o <em>Hast du Lust?</em> Para aceptar: <em>Ja, gern!</em>, <em>Gute Idee!</em> Para rechazar con amabilidad: <em>Leider kann ich nicht</em> o <em>Tut mir leid</em>, y después el motivo con <em>denn</em>. <em>Ins</em> es <em>in das</em>: aquí es una fórmula para aprender tal cual."
      },
      {
        h: "Cinco preposiciones con el acusativo",
        p: "<strong>für</strong> (para, por), <strong>ohne</strong> (sin), <strong>um</strong> (alrededor de; con las horas, a las), <strong>durch</strong> (a través de), <strong>gegen</strong> (contra) llevan siempre el <b>acusativo</b>: solo cambia el masculino. <em>Die Karte ist für den Freund</em>, <em>Wir gehen durch den Park</em>. Con los pronombres: <em>für mich, für dich, ohne ihn, ohne sie</em>."
      },
      {
        contrast: "En español «para Marco» y «sin Marco» no cambian el nombre. En alemán el artículo masculino cambia: <em>für den Freund</em>, <em>ohne meinen Bruder</em>; con el femenino y el neutro no se ve diferencia: <em>für die Freundin</em>, <em>für das Kind</em>. Ojo con <em>für</em>: cubre «para» y a menudo «por» (<em>Danke für die Karte</em>, gracias por la entrada), pero no traduzcas automáticamente «por» con <em>für</em>: según el caso corresponde a <em>durch</em>, <em>wegen</em> o <em>von</em>. «A las ocho» se dice con <em>um</em>: <em>um acht Uhr</em>."
      },
      {
        h: "Und, aber, oder, denn",
        p: "Estas cuatro palabras unen dos frases y <b>no mueven el verbo</b>: <em>Ich bin müde, aber ich gehe ins Kino</em>. Después de <em>und</em>, <em>oder</em> y <em>aber</em> el sujeto repetido se puede omitir: <em>Ich gehe ins Kino und sehe einen Film</em>. Después de <em>denn</em> el sujeto se repite siempre."
      },
      {
        trap: "El español «porque» es una sola palabra: «no vengo porque tengo que trabajar». En alemán, para dar un motivo, <em>denn</em> deja el verbo en segundo lugar: <em>Ich komme nicht, denn ich muss arbeiten</em>. Son errores <em>denn ich arbeiten muss</em> (verbo al final) y <em>denn muss ich arbeiten</em> (verbo en primer lugar); con otro elemento delante el verbo sigue siendo el segundo: <em>denn morgen muss ich arbeiten</em>. La otra palabra para «porque», <em>weil</em>, manda el verbo al final: llega más adelante. Cuidado también con <em>gegen</em>: significa «contra», pero con las horas también «hacia» (<em>gegen acht Uhr</em>, hacia las ocho)."
      },
      {
        tip: "Para rechazar con amabilidad: <em>Leider</em> + el motivo con <em>denn</em>. Antes de <em>aber</em> y <em>denn</em> la coma es obligatoria."
      }
    ],
    grammar: {
      title: "Preposiciones con el acusativo y conectores",
      note: "<b>für, ohne, um, durch, gegen</b> + acusativo; <b>und, aber, oder, denn</b> no mueven el verbo.",
      table: {
        head: ["preposición", "significado", "ejemplo"],
        rows: [
          ["für", "para, por", "Die Karte ist für dich."],
          ["ohne", "sin", "Ich trinke Kaffee ohne Zucker."],
          ["um", "alrededor de; a las (horas)", "Der Film beginnt um acht Uhr."],
          ["durch", "a través de", "Wir gehen durch den Park."],
          ["gegen", "contra", "Ich bin gegen den Plan."]
        ]
      },
      examples: [
        { tr: "¿Vamos al cine?", note: "ins = in das" },
        { tr: "La entrada es para ti.", note: "für + acusativo" },
        { tr: "Tomo el café sin azúcar.", note: "ohne + nombre incontable: aquí Zucker indica la sustancia en general, por eso normalmente no lleva artículo" },
        { tr: "La película empieza a las ocho.", note: "um con las horas" },
        { tr: "Atravesamos el parque, pero llueve.", note: "aber no mueve el verbo" },
        { tr: "No vengo, porque tengo que trabajar.", note: "denn no mueve el verbo: se queda en segunda posición" }
      ]
    },
    vocab: [
      "el cine",
      "la entrada (también: la tarjeta, la postal)",
      "la idea",
      "la propuesta",
      "las ganas",
      "por desgracia",
      "para, por",
      "sin",
      "alrededor de; a las (con las horas)",
      "a través de",
      "contra",
      "porque (explica el motivo)"
    ],
    exercises: [
      {
        q: "¿Cómo le propones a un amigo ir al cine?",
        opts: ["Gehen wir ins Kino?", "Wir ins Kino gehen?", "Gehen wir an Kino?"],
        why: "Una propuesta es una pregunta con el verbo en primer lugar: <i>Gehen wir ...?</i> <i>Ins</i> es <i>in das</i>."
      },
      {
        q: "¿Cómo rechazas y explicas el motivo?",
        opts: ["Leider nicht, denn muss ich arbeiten.", "Leider nicht, denn ich arbeiten muss.", "Leider nicht, denn ich muss arbeiten."],
        why: "<b>Denn</b> no ocupa una posición en la frase que sigue: el verbo conjugado se queda en segunda posición, como en <i>denn ich muss arbeiten</i> (pero también <i>denn morgen muss ich arbeiten</i>). Las otras dos opciones tienen el verbo al final o en primer lugar."
      },
      {
        q: "Completa: «Die Karte ist ___ dich.» (para)",
        hint: "para + acusativo",
        why: "<b>Für</b> lleva el acusativo: <i>für dich</i>."
      },
      {
        q: "Completa: «Ich trinke Kaffee ___ Zucker.» (sin)",
        hint: "sin",
        why: "<b>Ohne</b> + acusativo; con un nombre incontable como <i>Zucker</i> normalmente falta el artículo."
      },
      {
        q: "Une cada preposición con su significado.",
        pairs: ["para", "sin", "a través de", "contra"]
      },
      {
        tr: "Vamos a través del parque.",
        why: "<i>Wir gehen durch den Park</i>: <i>durch</i> + acusativo, <i>den</i>. También vale <i>Durch den Park gehen wir</i>."
      },
      {
        q: "Traduce: «No vengo, porque tengo que trabajar.» (usa denn)",
        why: "<i>Ich komme nicht, denn ich muss arbeiten</i>: después de <i>denn</i> el verbo conjugado se queda en segunda posición."
      },
      {
        q: "Completa el diálogo.",
        tr: "¿Vamos al cine? Por desgracia no puedo, porque tengo que trabajar. Pero mañana tengo tiempo.",
        why: "<i>Ins</i> es <i>in das</i>; <i>denn</i> explica el motivo y no mueve el verbo; <i>ich habe Zeit</i> usa <i>haben</i>."
      },
      {
        tr: "¿Vamos al cine? Por desgracia no puedo, porque tengo que trabajar.",
        why: "En <i>leider</i> la <b>ei</b> suena como «ai» y la <b>d</b> es sonora; en <i>Kino</i> la primera <b>i</b> es larga."
      },
      {
        tr: "¡Buena idea! ¿Vamos al cine a las ocho?",
        why: "En <i>Uhr</i> la <b>h</b> no se pronuncia y la <b>u</b> es larga; en <i>Idee</i> la <b>ee</b> es una <b>e</b> larga."
      }
    ]
  },
  "lesson:a1-u09-test": {
    theme: "Repaso",
    title: "Repaso de la unidad 9",
    objectives: ["comprobar es, gerade, preposiciones con el acusativo y conectores"],
    theory: [
      {
        p: "Diez preguntas sobre toda la unidad. Se supera con el 70 %. No vuelvas a mirar las lecciones mientras respondes: si no recuerdas algo, es mejor volver a repasar."
      }
    ],
    exercises: [
      {
        q: "Completa: «Im Winter schneit ___ oft.» (En invierno nieva a menudo.)",
        hint: "el sujeto de las frases sobre el tiempo",
        why: "<b>Es</b> es el sujeto y no se omite."
      },
      {
        q: "Completa: «Die Karte ist ___ meinen Bruder.» (para)",
        hint: "para + acusativo",
        why: "<b>Für</b> + acusativo: <i>meinen Bruder</i>."
      },
      {
        q: "Completa: «Ich komme nicht, ___ ich muss arbeiten.» (porque)",
        hint: "explica el motivo, el verbo se queda en segunda posición",
        why: "<b>Denn</b> no mueve el verbo."
      },
      {
        q: "Completa: «Wir gehen ___ den Park.» (a través de)",
        hint: "a través de",
        why: "<b>Durch</b> + acusativo: <i>den Park</i>."
      },
      {
        q: "¿Qué frase dice «estoy leyendo ahora»?",
        opts: ["Ich bin lesen.", "Ich lesen gerade.", "Ich lese gerade."],
        why: "Presente con <b>gerade</b>: <i>ich lese gerade</i>."
      },
      {
        q: "¿Qué frase es correcta?",
        opts: ["Er geht ohne ich ins Kino.", "Er geht ohne mich ins Kino.", "Er geht ohne mir ins Kino."],
        why: "<i>Ohne</i> lleva el acusativo: <b>mich</b>."
      },
      {
        q: "¿Qué frase es correcta?",
        opts: ["Ich bleibe zu Hause, denn ich bin müde.", "Ich bleibe zu Hause, denn ich müde bin.", "Ich bleibe zu Hause, denn bin ich müde."],
        why: "<i>Denn</i> no ocupa una posición: el verbo conjugado se queda en segunda posición, como en <i>denn ich bin müde</i> (pero también <i>denn heute bin ich müde</i>). Las otras dos opciones tienen el verbo al final o en primer lugar."
      },
      {
        tr: "El sábado vamos al cine.",
        why: "<i>Am Samstag gehen wir ins Kino</i>: verbo en segunda posición. También vale <i>Wir gehen am Samstag ins Kino</i>."
      },
      {
        tr: "Llueve y hace frío, pero yo voy al cine.",
        why: "En <i>regnet</i> se pronuncian tanto la <b>g</b> como la <b>n</b>; en <i>Kino</i> la primera <b>i</b> es larga."
      },
      {
        tr: "Por desgracia no puedo, porque a las ocho tengo que trabajar.",
        why: "En <i>muss</i> la <b>ss</b> es una <b>s</b> sorda y la <b>u</b> es breve; <i>arbeiten</i> está en infinitivo al final de la frase."
      }
    ]
  },
  "unit:a1-u10": {
    title: "Mi fin de semana",
    grammarNote: "Perfekt con haben y con sein · participio II regular, fuerte y separable · war y hatte como fórmulas · repaso del A1"
  },
  "lesson:a1-u10-l1": {
    theme: "El pasado hablado",
    title: "Comí, vi",
    objectives: [
      "formar el Perfekt con haben y el participio II",
      "reconocer el participio regular (ge- ... -t) y el fuerte (ge- ... -en)",
      "contar lo que has hecho ayer o el fin de semana"
    ],
    theory: [
      {
        h: "El Perfekt: el pasado de la lengua hablada",
        p: "Cuando cuentas algo pasado, de viva voz, usas el <strong>Perfekt</strong>: <strong>haben</strong> en segunda posición y el <strong>participio II</strong> al final de la frase. <em>Ich habe gegessen</em> (“he comido”, “comí”), <em>Gestern habe ich einen Film gesehen</em> (“Ayer vi una película”). El participio de los verbos regulares es <em>ge- + raíz + -t</em> (<em>machen, gemacht</em>), el de los verbos fuertes es <em>ge- + raíz, a menudo modificada, + -en</em> (<em>essen, gegessen</em>; también <em>trinken, getrunken</em> y <em>treffen, getroffen</em>, que se memorizan)."
      },
      {
        contrast: "La construcción se parece al pretérito perfecto compuesto español: «he comido» corresponde a <em>ich habe gegessen</em>. Pero el alemán hablado usa el Perfekt para contar lo ocurrido tanto donde el español dice «he visto» como donde dice «vi»: <em>Gestern habe ich einen Film gesehen</em> es «ayer vi una película». Además, como en español con <em>haber</em>, el participio <strong>no concuerda</strong>: «la he visto» es <em>Ich habe sie gesehen</em>, y no hay ningún cambio de género ni de número en <em>gesehen</em>."
      },
      {
        trap: "En español el participio va justo detrás de «he» y los complementos siguen: «he visto una película ayer». En alemán el participio va <strong>al final</strong>, detrás de todos los complementos: <em>Ich habe gestern einen Film <strong>gesehen</strong></em>, no «Ich habe gesehen gestern einen Film». Además, el participio de los verbos fuertes no se deduce del infinitivo: hay que aprenderlo junto con él (<em>trinken, getrunken</em>; <em>lesen, gelesen</em>)."
      },
      {
        tip: "No llevan <em>ge-</em> los verbos con prefijo inseparable (<em>be-, ver-, er-, ent-</em>) ni los verbos en <em>-ieren</em>: <em>besuchen, besucht</em>; <em>studieren, studiert</em>. En las preguntas vale la misma estructura: <em>Hast du am Samstag gekocht?</em> El verbo conjugado abre la frase y el participio la cierra."
      }
    ],
    grammar: {
      title: "Perfekt con haben",
      note: "<b>haben</b> en segunda posición + <b>participio II</b> al final. Regular: ge- ... -t; fuerte: ge- ... -en; sin ge- con be-, ver-, er- y con -ieren.",
      table: {
        head: ["tipo", "infinitivo", "participio II"],
        rows: [
          ["regular: ge- ... -t", "machen, kaufen, kochen", "gemacht, gekauft, gekocht"],
          ["fuerte: ge- ... -en", "essen, sehen, trinken", "gegessen, gesehen, getrunken"],
          ["fuerte: ge- ... -en", "lesen, schlafen, treffen", "gelesen, geschlafen, getroffen"],
          ["sin ge-", "besuchen, studieren", "besucht, studiert"]
        ]
      },
      examples: [
        { tr: "Ayer vi una película.", note: "participio al final de la frase" },
        { tr: "He comido pizza.", note: "essen es fuerte: gegessen" },
        { tr: "Hemos bebido café.", note: "haben con wir: haben" },
        { tr: "Él ha comprado un libro.", note: "kaufen es regular: gekauft" },
        { tr: "¿Has cocinado el sábado?", note: "pregunta: haben en primer lugar" },
        { tr: "El domingo visité a mi abuela.", note: "besuchen: sin ge-" }
      ]
    },
    vocab: [
      "ayer",
      "anteayer",
      "ver",
      "hacer (también: ¿qué has hecho?)",
      "comprar",
      "beber",
      "comer",
      "leer",
      "dormir",
      "visitar, ir a ver",
      "encontrarse con, quedar con",
      "la cena"
    ],
    exercises: [
      {
        q: "¿Cómo dices «He comido»?",
        opts: ["Ich habe gegessen.", "Ich habe essen.", "Ich bin gegessen."],
        why: "<i>Essen</i> lleva <b>haben</b> y el participio fuerte <b>gegessen</b> al final de la frase."
      },
      {
        q: "Completa: «Gestern habe ich einen Film ___.» (ver)",
        hint: "participio II de sehen",
        why: "<i>Sehen</i> es un verbo fuerte: <b>gesehen</b>. La <i>h</i> no se pronuncia."
      },
      {
        q: "Completa: «Wir ___ am Samstag Pizza gegessen.» (El sábado comimos pizza.)",
        hint: "auxiliar, primera persona del plural",
        why: "Con <i>essen</i> el auxiliar es <b>haben</b>; con <i>wir</i> tiene la misma forma que el infinitivo."
      },
      {
        q: "Completa: «Er hat ein Buch ___.» (comprar)",
        hint: "kaufen, participio II",
        why: "<i>Kaufen</i> es regular: ge- + raíz + -t, así que <b>gekauft</b>."
      },
      {
        q: "Completa: «Hast du gestern Kaffee ___?» (beber)",
        hint: "trinken, participio II",
        why: "<i>Trinken</i> es fuerte: <b>getrunken</b>."
      },
      {
        q: "Une cada participio con su significado.",
        pairs: ["visto", "comido", "comprado", "bebido"]
      },
      {
        q: "Traduce: «Ayer vi una película.»",
        why: "<i>Gestern habe ich einen Film gesehen</i>: después de <i>gestern</i> el verbo conjugado sigue en segunda posición y el sujeto va detrás. También vale <i>Ich habe gestern einen Film gesehen</i>."
      },
      {
        q: "Completa la frase.",
        tr: "Ayer comí pizza y bebí vino.",
        why: "<i>Habe</i> está en segunda posición; los dos participios, <i>gegessen</i> y <i>getrunken</i>, cierran la frase. El auxiliar no se repite."
      },
      {
        tr: "Ayer vi una película y comí pizza.",
        why: "En <i>gesehen</i> la <b>h</b> no se pronuncia y alarga la <b>e</b>; en <i>gegessen</i> la <b>ss</b> es una <b>s</b> sorda y <i>ge-</i> es átono."
      },
      {
        tr: "El sábado bebí un café y leí un libro.",
        why: "En <i>Kaffee</i> la doble <b>ff</b> indica que la <b>a</b> es breve; en <i>Buch</i> la <b>ch</b> después de <b>u</b> es [x], un sonido parecido a la «j» española de «jamón»."
      }
    ]
  },
  "lesson:a1-u10-l2": {
    theme: "Sein o haben",
    title: "Fui, me levanté",
    objectives: [
      "elegir sein o haben como auxiliar del Perfekt",
      "formar el participio de los verbos separables",
      "contar un viaje corto y el día"
    ],
    theory: [
      {
        h: "El Perfekt con sein",
        p: "Con los verbos intransitivos de <strong>cambio de lugar o de estado</strong> el auxiliar es <strong>sein</strong>: <em>fahren, gehen, kommen, fliegen, aufstehen</em>. Lo mismo vale para <em>sein, bleiben, werden, passieren</em>. <em>Ich bin nach Berlin gefahren. Wir sind früh aufgestanden. Sie ist zu Hause geblieben.</em> Con casi todos los demás verbos se usa <em>haben</em>."
      },
      {
        p: "En los verbos separables el participio es una sola palabra y <em>ge-</em> va <strong>en medio</strong>, entre el prefijo y el verbo: <em>aufstehen → aufgestanden, ankommen → angekommen, einkaufen → eingekauft, anrufen → angerufen</em>. El prefijo ya no se separa: <em>Ich bin um sieben Uhr aufgestanden</em>, mientras que en presente es <em>Ich stehe um sieben Uhr auf</em>."
      },
      {
        contrast: "El español usa siempre <em>haber</em> en los tiempos compuestos: «he ido», «he venido», «me he quedado», «he comido». El alemán reparte los verbos en dos grupos, y el grupo de <em>sein</em> es el que tienes que recordar: <em>Ich bin gegangen</em>, <em>Ich bin gekommen</em>, <em>Ich bin geblieben</em>. Un buen truco es pensar en verbos que dicen que te has movido o has cambiado de lugar o de estado. No hay ayuda del español: «he viajado» y «he caminado» llevan <em>haber</em>, y en alemán <em>Ich bin gereist</em> e <em>Ich bin gewandert</em> llevan <em>sein</em>. Comprueba cada verbo cuando lo aprendas."
      },
      {
        trap: "Un verbo de movimiento con un complemento directo en acusativo suele llevar <strong>haben</strong>: <em>Ich habe das Auto gefahren</em> (“he conducido el coche”). Un complemento con preposición no obliga a usar haben: <em>Ich bin mit dem Bus gefahren</em>, <em>Ich bin nach Wien geflogen</em>. Y ojo con «me he levantado»: en español es un verbo pronominal, pero <em>aufstehen</em> no lleva pronombre en alemán: <em>Ich bin aufgestanden</em>, sin <em>mich</em>."
      },
      {
        tip: "Si el verbo tiene un prefijo separable y un participio regular, la <em>-t</em> final se mantiene: <em>aufräumen → aufgeräumt</em>, <em>einkaufen → eingekauft</em>. Los verbos con prefijo inseparable o en <em>-ieren</em> no llevan <em>ge-</em>: <em>besucht, studiert</em>."
      }
    ],
    grammar: {
      title: "Perfekt con sein y participio separable",
      note: "<b>sein</b> con cambio de lugar o de estado; en los separables ge- va entre el prefijo y el verbo: auf<b>ge</b>standen.",
      table: {
        head: ["verbo", "auxiliar", "participio II"],
        rows: [
          ["fahren, gehen, kommen", "sein", "gefahren, gegangen, gekommen"],
          ["fliegen, reisen, bleiben", "sein", "geflogen, gereist, geblieben"],
          ["aufstehen, ankommen", "sein", "aufgestanden, angekommen"],
          ["einkaufen, anrufen", "haben", "eingekauft, angerufen"],
          ["aufräumen, fernsehen", "haben", "aufgeräumt, ferngesehen"]
        ]
      },
      examples: [
        { tr: "Fui a Berlín.", note: "cambio de lugar: sein" },
        { tr: "Nos levantamos temprano.", note: "aufstehen: aufgestanden, sin pronombre" },
        { tr: "Ella se quedó en casa.", note: "bleiben: sein" },
        { tr: "Él llegó a las ocho.", note: "ankommen: angekommen" },
        { tr: "Ayer hice la compra.", note: "einkaufen: haben, no es un cambio de lugar" },
        { tr: "¿Habéis llamado a vuestra madre?", note: "anrufen: angerufen con haben" }
      ]
    },
    vocab: [
      "ir en un vehículo, conducir",
      "ir (a pie, en general)",
      "venir",
      "volar, ir en avión",
      "quedarse",
      "viajar",
      "levantarse",
      "llegar",
      "hacer la compra",
      "llamar por teléfono",
      "ordenar, recoger",
      "el viaje"
    ],
    exercises: [
      {
        q: "¿Cómo dices «Fui a Berlín en tren»?",
        opts: [
          "Ich bin mit dem Zug nach Berlin gefahren.",
          "Ich habe mit dem Zug nach Berlin gefahren.",
          "Ich bin mit dem Zug nach Berlin fahren."
        ],
        why: "<i>Fahren</i> indica un cambio de lugar: auxiliar <b>sein</b> y participio <b>gefahren</b> al final de la frase."
      },
      {
        q: "¿Cómo dices «Me quedé en casa»?",
        opts: ["Ich habe zu Hause geblieben.", "Ich bin zu Hause geblieben.", "Ich bin zu Hause gebleibt."],
        why: "<i>Bleiben</i> lleva <b>sein</b> y tiene el participio fuerte <b>geblieben</b>."
      },
      {
        q: "¿Cómo dices «Ayer hice la compra»?",
        opts: ["Ich habe gestern eingekauft.", "Ich habe gestern geeinkauft.", "Ich bin gestern eingekauft."],
        why: "<i>Einkaufen</i> es separable: <b>ein-ge-kauft</b>, con <i>haben</i>, porque hacer la compra no es un cambio de lugar."
      },
      {
        q: "¿Qué frases son correctas?",
        opts: [
          "Sie ist um sieben Uhr aufgestanden.",
          "Ich habe gestern meine Mutter angerufen.",
          "Wir haben nach Wien geflogen.",
          "Er ist zu Hause geblieben.",
          "Ich habe um sieben aufgestehen."
        ],
        why: "La frase 3 necesita <i>sein</i> (<i>Wir sind nach Wien geflogen</i>); la frase 5 tiene dos errores: el auxiliar y el participio. Correcta: <i>Ich bin um sieben aufgestanden</i> (<i>sein</i> y <i>aufgestanden</i>, no «habe» ni «aufgestehen»)."
      },
      {
        q: "Completa: «Ich ___ gestern früh aufgestanden.» (Ayer me levanté temprano.)",
        hint: "auxiliar, primera persona del singular",
        why: "<i>Aufstehen</i> es un cambio de estado: auxiliar <b>sein</b>, así que <i>ich bin</i>."
      },
      {
        q: "Completa: «Wir sind um acht Uhr ___.» (llegar, ankommen)",
        hint: "ankommen: ge- va en medio",
        why: "<b>angekommen</b>: <i>an</i> + <i>ge</i> + <i>kommen</i>."
      },
      {
        tr: "Fuimos a Berlín.",
        why: "<i>Wir sind nach Berlin gefahren</i>: <i>sein</i> en segunda posición, participio al final. También vale <i>Nach Berlin sind wir gefahren</i>."
      },
      {
        q: "Completa la frase.",
        tr: "El sábado fuimos a Viena en tren y el domingo nos quedamos en casa.",
        why: "Con <i>fahren</i> y <i>bleiben</i> el auxiliar es <b>sein</b>; <i>gefahren</i> cierra la primera parte y <i>geblieben</i> la segunda."
      },
      {
        tr: "Me levanté a las siete y bebí un café.",
        why: "En <i>aufgestanden</i> el acento cae en <b>auf</b>; en <i>Uhr</i> la <b>h</b> no se pronuncia y alarga la <b>u</b>."
      },
      {
        tr: "Llegamos a Viena por la tarde.",
        why: "En <i>Wien</i> la <b>W</b> se lee [v], con los dientes sobre el labio, no como la «b» española; la <b>ie</b> es una <b>i</b> larga; <i>angekommen</i> tiene el acento en <b>an</b>."
      }
    ]
  },
  "lesson:a1-u10-l3": {
    theme: "El fin de semana",
    title: "Mi fin de semana",
    objectives: [
      "contar el fin de semana en orden con zuerst, dann, danach, später",
      "mantener el verbo en segunda posición después de los conectores de tiempo",
      "usar war y hatte solo como fórmulas: Es war schön, Ich hatte Glück"
    ],
    theory: [
      {
        h: "Contar en orden",
        p: "Para contar el fin de semana encadena las acciones con <strong>zuerst</strong> (primero), <strong>dann</strong> (luego), <strong>danach</strong> (después) y <strong>später</strong> (más tarde). Cada acción es un Perfekt: <em>Zuerst habe ich lange geschlafen. Dann habe ich gekocht. Danach sind wir ins Kino gegangen.</em> Estos adverbios abren la frase y ocupan la primera posición."
      },
      {
        contrast: "En español «luego cociné» no cambia el orden, y el sujeto puede desaparecer. En alemán el verbo conjugado se queda en <strong>segunda posición</strong> y el sujeto pasa detrás de él: <em>Dann habe ich gekocht</em>, nunca «Dann ich habe gekocht». Y el sujeto no se omite: <em>habe gekocht</em> solo no es una frase, mientras que en español «cociné» sí lo es."
      },
      {
        trap: "En la lengua hablada se usan <strong>war</strong> y <strong>hatte</strong>, que por ahora aprendes como fórmulas fijas: <em>Es war schön. Wie war dein Wochenende? Ich hatte Glück.</em> <strong>War</strong> corresponde a «fui/fue/era», según el sujeto y el contexto; <strong>hatte</strong> corresponde a «tenía/tuve» (<em>Ich hatte Glück</em> = «Tuve suerte», de <em>haben</em>). No hace falta conjugar otros verbos así: para todos los demás verbos sigue el Perfekt. Cuidado con <em>Wie war dein Wochenende?</em>: el español dice «¿qué tal tu fin de semana?» o «¿cómo fue?», y el alemán usa <em>war</em>."
      },
      {
        tip: "Puedes unir dos acciones con <em>und</em> o <em>aber</em> sin cambiar la estructura: <em>Ich habe gekocht, und wir haben gegessen.</em> Para decir cuándo, pon delante <em>am Samstag</em> o <em>am Sonntag</em>: el verbo sigue siendo el segundo."
      }
    ],
    grammar: {
      title: "El relato: conectores y verbo en segunda posición",
      note: "Después de <b>zuerst, dann, danach, später</b> el verbo conjugado se queda en segunda posición y el sujeto lo sigue; el participio cierra la frase.",
      table: {
        head: ["español", "alemán", "ejemplo"],
        rows: [
          ["primero, en primer lugar", "zuerst", "Zuerst habe ich geschlafen."],
          ["luego", "dann", "Dann habe ich gekocht."],
          ["después", "danach", "Danach sind wir ins Kino gegangen."],
          ["más tarde", "später", "Später habe ich gelesen."],
          ["¿cómo fue?", "Wie war ...?", "Wie war dein Wochenende?"]
        ]
      },
      examples: [
        { tr: "¿Qué tal tu fin de semana?", note: "war: fórmula fija" },
        { tr: "Primero dormí mucho.", note: "zuerst en primera posición, luego habe e ich" },
        { tr: "Luego cociné para mis amigos.", note: "dann + verbo + sujeto" },
        { tr: "Después fuimos al cine.", note: "gehen: sein" },
        { tr: "Más tarde di un paseo.", note: "einen Spaziergang machen" },
        { tr: "Fue estupendo y tuve suerte.", note: "war y hatte como fórmulas" }
      ]
    },
    vocab: [
      "primero, en primer lugar",
      "luego",
      "después",
      "más tarde",
      "la fiesta",
      "el paseo",
      "el museo",
      "el regalo",
      "fantástico, estupendo",
      "Fue bonito.",
      "¿Qué tal tu fin de semana?",
      "Tuve suerte."
    ],
    exercises: [
      {
        q: "¿Cómo le preguntas a un amigo qué tal el fin de semana?",
        opts: ["Wie war dein Wochenende?", "Wie hat dein Wochenende?", "Wie bist dein Wochenende?"],
        why: "Para «fue» se usa <b>war</b>: <i>Wie war dein Wochenende?</i> Es una fórmula que se aprende así."
      },
      {
        q: "¿Qué frase es correcta?",
        opts: ["Dann ich habe einen Film gesehen.", "Dann habe ich einen Film gesehen.", "Dann habe einen Film gesehen ich."],
        why: "Después de <i>dann</i> el verbo conjugado sigue en segunda posición y el sujeto lo sigue: <i>Dann habe ich ...</i>; el participio cierra la frase."
      },
      {
        q: "Completa: «Zuerst habe ich geschlafen, ___ habe ich gekocht.» (luego, usa dann)",
        hint: "usa dann",
        why: "<b>Dann</b> abre la segunda frase: verbo y sujeto intercambian el lugar, <i>habe ich</i>."
      },
      {
        q: "Completa: «Wie ___ dein Wochenende?» (¿Cómo fue tu fin de semana?)",
        hint: "fue: la forma fija",
        why: "<b>war</b> es la fórmula para «fue»: <i>Wie war dein Wochenende?</i>"
      },
      {
        tr: "Después leí un libro.",
        why: "<i>Danach habe ich ein Buch gelesen</i>: después de <i>danach</i> verbo y sujeto intercambian el lugar. También vale <i>Ich habe danach ein Buch gelesen</i>."
      },
      {
        q: "Traduce: «Luego cociné para mis amigos.» (usa dann)",
        why: "<i>Dann habe ich für meine Freunde gekocht</i>: <i>für</i> lleva acusativo. También vale <i>Ich habe dann für meine Freunde gekocht</i>."
      },
      {
        q: "Completa la frase.",
        tr: "El sábado dormí mucho. Luego di un paseo.",
        why: "Perfekt con <b>haben</b>: <i>habe geschlafen</i>, <i>habe ... gemacht</i>. Después de <i>danach</i> el sujeto sigue al verbo: <i>habe ich</i>."
      },
      {
        q: "Completa el diálogo.",
        setting: "Hablas con un amigo del fin de semana.",
        lines: [
          { tr: "¡Hola! ¿Qué tal tu fin de semana?" },
          { tr: "Responde que fue bonito y que has quedado con amigos.", answerTr: "¡Fue bonito! He quedado con amigos." },
          { tr: "¿Y el domingo, qué hiciste?" },
          { tr: "Responde que te quedaste en casa.", answerTr: "Me quedé en casa." }
        ]
      },
      {
        tr: "El sábado quedé con amigos, luego fuimos al cine.",
        why: "En <i>getroffen</i> la doble <b>ff</b> suele indicar una vocal breve; en <i>Kino</i> la primera <b>i</b> es larga."
      },
      {
        tr: "¡Fue fantástico! Bailé y quedé con amigos.",
        why: "En <i>getanzt</i> la <b>z</b> se lee [ts], como en «pizza»; en <i>Freunde</i> la <b>eu</b> suena como «oi» en «hoy»."
      }
    ]
  },
  "lesson:a1-u10-l4": {
    theme: "Repaso",
    title: "Repaso del A1",
    objectives: [
      "repasar el presente, el acusativo y las preposiciones con dativo",
      "usar juntos el presente y el Perfekt en pocas frases",
      "hablar de un viaje corto a un hotel"
    ],
    theory: [
      {
        h: "Repaso: tres cosas que no hay que fallar",
        p: "<strong>1.</strong> El verbo conjugado está en segunda posición y en algunos verbos fuertes cambia la vocal con <em>du</em> y <em>er/sie/es</em>: <em>ich esse, du isst, er isst</em> (pero <em>kommen, gehen, trinken</em> no cambian). <strong>2.</strong> En acusativo solo cambia el masculino: <em>der Koffer → den Koffer</em>, <em>ein Koffer → einen Koffer</em>. <strong>3.</strong> Después de <em>mit, zu, bei, aus, von</em> se usa el dativo: <em>mit dem Zug, zum Strand</em> (zu dem), <em>aus Italien</em>."
      },
      {
        contrast: "En español viajas «en tren» y «en autobús», y en alemán el medio de transporte lleva <strong>mit</strong> y dativo: <em>mit dem Zug, mit dem Bus</em>. Y «a casa de» y «en casa de» se reparten entre dos preposiciones: <em>bei</em> + dativo para estar en casa de alguien (<em>Ich bin bei meiner Tante</em>, «estoy en casa de mi tía»), y <em>zu</em> + dativo para ir a casa de alguien (<em>Ich gehe zu meiner Tante</em>, «voy a casa de mi tía»). Para «de» con el origen se usa <em>aus</em> (<em>Ich komme aus Italien</em>) y <em>von</em> para el punto de partida."
      },
      {
        trap: "En femenino y en neutro el acusativo es igual que el nominativo: <em>die Fahrkarte</em>, <em>das Zimmer</em>. Por eso <em>Ich nehme den Koffer</em> pero <em>Ich nehme die Fahrkarte</em>. Y el género alemán no siempre coincide con el español: «la maleta» es <em>der Koffer</em> (masculino), «el mar» es <em>das Meer</em> (neutro), «la playa» es <em>der Strand</em> (masculino) y «la habitación» es <em>das Zimmer</em> (neutro). Si te equivocas con el género del nombre, también te equivocas con el artículo: repasa siempre el nombre con su artículo."
      },
      {
        tip: "Para recordar las preposiciones: <em>mit, zu, bei, aus, von</em> llevan siempre dativo; <em>für, ohne, durch, um, gegen</em> llevan siempre acusativo."
      }
    ],
    grammar: {
      title: "Repaso: presente, acusativo, dativo",
      note: "Verbo en segunda posición; acusativo: solo cambia el masculino (<b>den</b>); después de <b>mit, zu, bei, aus, von</b> el dativo.",
      table: {
        head: ["qué", "regla", "ejemplo"],
        rows: [
          ["presente", "verbo en segunda posición", "Ich fahre mit dem Zug."],
          ["algunos verbos fuertes", "cambia la vocal con du y er/sie/es", "Du isst, er sieht."],
          ["acusativo", "der → den, ein → einen", "Wir nehmen den Koffer."],
          ["dativo con mit, zu, bei, aus, von", "dem, der, dem; zum, zur", "Wir gehen zum Hotel."],
          ["Perfekt", "haben o sein + participio al final", "Gestern bin ich früh aufgestanden."]
        ]
      },
      examples: [
        { tr: "Voy a la playa en tren.", note: "mit dem Zug, zum Strand" },
        { tr: "Cogemos la maleta y el billete.", note: "acusativo: den Koffer, die Fahrkarte" },
        { tr: "Vengo de Italia y vivo en casa de mi tía.", note: "aus, bei + dativo" },
        { tr: "Él ve una película y come una pizza.", note: "sehen y essen cambian la vocal" },
        { tr: "Por la noche vamos al hotel.", note: "zum = zu dem" },
        { tr: "Ayer me levanté temprano.", note: "Perfekt con sein" }
      ]
    },
    vocab: [
      "el viaje",
      "la maleta",
      "el billete (de viaje)",
      "el hotel",
      "la habitación",
      "las vacaciones",
      "el mar",
      "la playa"
    ],
    exercises: [
      {
        tr: "El presente de sein, todas las personas.",
        why: "<i>Bin, bist, ist, sind, seid, sind</i>: formas irregulares que hay que saber de memoria. <i>Wir</i> y <i>sie/Sie</i> tienen la misma forma."
      },
      {
        tr: "El presente de essen, todas las personas.",
        why: "<i>Essen</i> cambia la vocal con <i>du</i> y <i>er</i>: <b>isst</b> en ambos. <i>Ich esse, wir essen, ihr esst, sie essen</i>."
      },
      {
        tr: "El presente de fahren, todas las personas.",
        why: "<i>Fahren</i> lleva diéresis con <i>du</i> y <i>er</i>: <b>fährst</b>, <b>fährt</b>."
      },
      {
        q: "Completa: «Wir fahren ___ dem Zug nach Wien.» (en)",
        hint: "medio de transporte",
        why: "<b>Mit</b> + dativo: <i>mit dem Zug</i>."
      },
      {
        q: "Completa: «Ich nehme ___ Koffer.» (artículo determinado, acusativo)",
        hint: "Koffer es masculino",
        why: "En acusativo el masculino cambia: <b>den</b> Koffer."
      },
      {
        q: "Completa: «Ich gehe ___ Bahnhof.» (a, con el artículo contraído)",
        hint: "zu + dem",
        why: "<b>Zum</b> = <i>zu dem</i>."
      },
      {
        q: "Completa: «Er kommt ___ Italien.» (de)",
        hint: "procedencia",
        why: "Para la procedencia se usa <b>aus</b> + dativo."
      },
      {
        q: "Completa la frase.",
        tr: "Ayer me levanté temprano y bebí un café.",
        why: "<i>Aufstehen</i> lleva <b>sein</b> (<i>ich bin aufgestanden</i>); <i>trinken</i> lleva <b>haben</b> (<i>ich habe getrunken</i>)."
      },
      {
        q: "Elige el artículo determinado correcto para cada nombre.",
        items: ["maleta", "viaje", "hotel", "habitación", "playa", "billete"]
      },
      {
        tr: "Vamos a la playa en tren.",
        why: "<i>Wir fahren mit dem Zug zum Strand</i>: <i>mit</i> + dativo, <i>zu dem</i> se contrae en <i>zum</i>. Otras posiciones del complemento son posibles, porque el verbo sigue siendo el segundo."
      },
      {
        tr: "Voy a la playa en tren y cojo mi maleta.",
        why: "En <i>Strand</i> la <b>st</b> inicial se lee [ʃt], como la «sh» inglesa de «shoe», no como la «ch» de «chico», seguida de t; en <i>Koffer</i> la doble <b>ff</b> suele indicar una vocal breve."
      },
      {
        tr: "Tenemos una habitación en el hotel y mañana vamos al mar.",
        why: "En <i>Zimmer</i> la <b>Z</b> se lee [ts], no como la «z» española; en <i>Meer</i> la <b>ee</b> es una <b>e</b> larga."
      }
    ]
  },
  "lesson:a1-u10-test": {
    theme: "Prueba",
    title: "Examen final A1",
    objectives: ["comprobar el presente, el Perfekt con haben y con sein, el acusativo, el dativo y el género de los nombres"],
    theory: [
      {
        p: "Doce preguntas sobre todo el A1. Se aprueba con el 70%. No vuelvas a mirar las lecciones mientras respondes: si no recuerdas algo, es mejor volver a repasar."
      }
    ],
    exercises: [
      {
        q: "Completa: «Ich ___ gestern Fußball gespielt.» (Ayer jugué al fútbol.)",
        hint: "auxiliar, primera persona del singular",
        why: "<i>Spielen</i> lleva <b>haben</b>: <i>ich habe gespielt</i>."
      },
      {
        q: "Completa: «Am Samstag ___ wir nach Wien gefahren.» (El sábado fuimos a Viena.)",
        hint: "auxiliar, primera persona del plural",
        why: "<i>Fahren</i> con un destino indica un cambio de lugar: <b>sind</b>."
      },
      {
        q: "Completa: «Wir haben einen Film ___.» (ver)",
        hint: "participio II de sehen",
        why: "<i>Sehen</i> es fuerte: <b>gesehen</b>."
      },
      {
        q: "Completa: «Ich nehme ___ Kaffee.» (artículo determinado, acusativo)",
        hint: "Kaffee es masculino",
        why: "En acusativo el masculino cambia: <b>den</b> Kaffee."
      },
      {
        q: "Completa: «Ich fahre ___ dem Bus.» (en)",
        hint: "medio de transporte",
        why: "<b>Mit</b> + dativo."
      },
      {
        q: "Completa: «Sie ist früh ___.» (levantarse, aufstehen)",
        hint: "ge- va en medio",
        why: "<b>aufgestanden</b>: <i>auf</i> + <i>ge</i> + <i>standen</i>, con <i>sein</i>."
      },
      {
        q: "¿Qué frase es correcta?",
        opts: ["Ich habe nach Berlin gefahren.", "Ich bin nach Berlin gefahren.", "Ich bin nach Berlin gefahrt."],
        why: "<i>Fahren</i> con un destino lleva <b>sein</b> y tiene el participio fuerte <i>gefahren</i>."
      },
      {
        q: "¿Cuál es el participio II de «besuchen»?",
        opts: ["gebesucht", "besucht", "besuchen"],
        why: "<i>Be-</i> es un prefijo inseparable: sin <i>ge-</i>. El participio es <b>besucht</b>."
      },
      {
        q: "Elige el artículo determinado correcto para cada nombre.",
        items: ["película", "fin de semana", "fiesta", "paseo", "museo", "billete"]
      },
      {
        tr: "El Perfekt de gehen: auxiliar y participio.",
        why: "<i>Ich bin gegangen, du bist gegangen, er ist gegangen, wir sind gegangen</i>: <i>gehen</i> lleva <b>sein</b>."
      },
      {
        q: "Completa la frase (para la primera parte, usa zuerst).",
        tr: "Primero quedé con amigos. Luego fuimos al cine.",
        why: "<i>Zuerst</i> abre la frase; <i>habe ich ... getroffen</i> con haben; <i>sind wir ... gegangen</i> con sein."
      },
      {
        tr: "El fin de semana fui a Viena y visité un museo.",
        why: "En <i>Museum</i> el acento cae en <b>se</b> y la <b>s</b> es sonora [z], a diferencia del español «museo»; en <i>besucht</i> la <b>ch</b> después de <b>u</b> es [x]."
      }
    ]
  }
});
