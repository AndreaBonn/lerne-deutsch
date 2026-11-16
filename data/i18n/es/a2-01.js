/* ============================================================
   Learner-language text (es) for data/core/a2-01.js, unit a2-u01.
   Keys point at ids in the neutral layer; arrays merge by index,
   so their length has to match core.
   Checked by scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("es", {
  "unit:a2-u01": {
    title: "Antes y ahora",
    grammarNote: "Präteritum de sein, haben y los modales · als y wenn · weil con el verbo al final · verbos reflexivos y sich erinnern an"
  },
  "lesson:a2-u01-l1": {
    theme: "La infancia",
    title: "De niño yo era ...",
    objectives: [
      "describir cómo era tu infancia con war y hatte",
      "conjugar sein, haben y können en Präteritum",
      "usar früher y damals para situar un hecho en el pasado"
    ],
    theory: [
      {
        h: "El Präteritum de sein y haben",
        p: "Para describir cómo eran las cosas en el pasado, sobre todo al hablar, el alemán usa las formas simples de <strong>sein</strong> y <strong>haben</strong>: <em>ich war</em>, <em>ich hatte</em>. En lugar del Perfekt (<em>Ich bin gewesen</em>, <em>Ich habe gehabt</em>), el alemán hablado casi siempre prefiere estas formas cortas: <em>Als Kind war ich oft krank</em>, <em>Wir hatten einen großen Garten</em>. En la primera y la tercera persona del singular la forma es igual: <em>ich war, er war</em>; <em>ich hatte, er hatte</em>."
      },
      {
        contrast: "El español distingue el <b>imperfecto</b> (<em>era, tenía</em>) del <b>indefinido</b> (<em>fui, tuve</em>). El Präteritum no hace esa distinción: <em>Ich war müde</em> puede ser «estaba cansado» o «estuve cansado» según el contexto. <em>Als Kind war ich oft krank</em> = «De niño estaba enfermo a menudo»; <em>Gestern war ich beim Arzt</em> = «Ayer estuve en el médico». Además, <em>sein</em> cubre <em>ser</em> y <em>estar</em>, así que <em>war</em> puede traducir <em>era, estaba, fue y estuvo</em>. Otra diferencia: en español puedes callar el sujeto («era pequeño»), pero en alemán el pronombre es obligatorio. Y como <em>ich war</em> y <em>er war</em> son iguales, el pronombre es lo único que dice quién es. Por último, <em>als Kind</em> no lleva artículo (como «de niño»), pero <em>Kind</em> es neutro y sirve tanto para niño como para niña, sin forma femenina."
      },
      {
        trap: "No mezcles las dos formas: <em>Ich habe war</em> no existe. Con <em>sein</em> y <em>haben</em> se elige el Präteritum (<em>Ich war</em>, <em>Ich hatte</em>) o el Perfekt (<em>Ich bin gewesen</em>, <em>Ich habe gehabt</em>), nunca una forma híbrida. Cuidado también con <em>hatte</em>: significa «tenía», no «había». El auxiliar «había» del español no se corresponde con <em>hatte</em> como verbo principal. Y fíjate en <em>wir hatten</em> y <em>wir waren</em>: en la primera persona del plural la terminación es <em>-en</em>, como en el infinitivo."
      },
      {
        tip: "Indicadores de tiempo útiles para el pasado: <em>früher</em> (antes, en el pasado), <em>damals</em> (entonces, en aquella época), <em>als Kind</em> (de niño), <em>als Jugendlicher</em> (de adolescente). Si empiezas la frase con uno de ellos, el verbo sigue en segunda posición: <em>Früher hatte ich ein rotes Fahrrad.</em>"
      }
    ],
    grammar: {
      title: "Präteritum de sein, haben y können",
      note: "En la 1.ª y la 3.ª persona del singular la forma es igual. <i>Sein</i> toma las terminaciones simples <b>-st</b> (du warst) y <b>-t</b> (ihr wart), y <b>-en</b> para wir y sie. <i>Haben</i> y <i>können</i> tienen las raíces <i>hatt-</i> y <i>konnt-</i> y toman <b>-est</b> y <b>-et</b> (hattest, hattet, konntest, konntet), y <b>-en</b> para wir y sie.",
      table: {
        head: ["persona", "sein", "haben", "können"],
        rows: [
          ["ich", "war", "hatte", "konnte"],
          ["du", "warst", "hattest", "konntest"],
          ["er, sie, es", "war", "hatte", "konnte"],
          ["wir", "waren", "hatten", "konnten"],
          ["ihr", "wart", "hattet", "konntet"],
          ["sie, Sie", "waren", "hatten", "konnten"]
        ]
      },
      examples: [
        { tr: "De niño estaba enfermo a menudo.", note: "als Kind: sin artículo" },
        { tr: "Teníamos un jardín grande.", note: "wir hatten" },
        { tr: "Mi abuelo tenía un perro.", note: "er hatte, igual que ich hatte" },
        { tr: "Antes pasábamos todos los veranos junto al mar.", note: "früher + sein en plural: waren" },
        { tr: "Entonces no tenía teléfono móvil.", note: "damals" },
        { tr: "¿Cómo era tu infancia?", note: "Wie war ...?" }
      ]
    },
    vocab: [
      "la infancia",
      "el jardín de infancia",
      "la escuela primaria",
      "el maestro, el profesor (hombre)",
      "la maestra, la profesora (mujer)",
      "el pueblo, la aldea",
      "la ciudad",
      "el jardín",
      "el perro",
      "la bicicleta",
      "antes, en el pasado",
      "entonces, en aquella época"
    ],
    exercises: [
      {
        tr: "El Präteritum de sein, todas las personas.",
        why: "<i>War, warst, war, waren, wart, waren</i>: formas irregulares que hay que saber de memoria. En la 1.ª y la 3.ª persona del singular la forma es idéntica."
      },
      {
        tr: "El Präteritum de haben, todas las personas.",
        why: "<i>Hatte, hattest, hatte, hatten, hattet, hatten</i>: <i>haben</i> es irregular en Präteritum. La raíz es <i>hatt-</i>, con las terminaciones <i>-e, -est, -e, -en, -et, -en</i>."
      },
      {
        tr: "El Präteritum de können, todas las personas.",
        why: "<i>Konnte, konntest, konnte, konnten, konntet, konnten</i>: desaparece la diéresis (Umlaut), y la 1.ª y la 3.ª persona del singular son iguales."
      },
      {
        q: "¿Cómo se dice «De niño tenía un perro»?",
        opts: ["Als Kind war ich einen Hund.", "Als Kind hatte ich einen Hund.", "Als Kind habe ich einen Hund war."],
        why: "Para «tener» se usa <b>hatte</b>; <i>sein</i> significa «ser, estar» y no lleva objeto directo. <i>Hund</i> es masculino: <i>einen Hund</i> en acusativo."
      },
      {
        q: "Completa: «Früher ___ wir ein Fahrrad.» (teníamos, usa haben)",
        hint: "haben, Präteritum, wir",
        why: "<b>Hatten</b>: raíz <i>hatt-</i> con la terminación <i>-en</i>, como en el infinitivo. Después de <i>früher</i> el verbo sigue en segunda posición."
      },
      {
        q: "Completa: «Als Kind ___ ich oft krank.» (estaba, usa sein)",
        hint: "sein, Präteritum, ich",
        why: "<b>War</b>: en la primera persona del singular no hay terminación."
      },
      {
        q: "Completa la frase.",
        tr: "Antes teníamos una casa en el pueblo. Era pequeña, pero mis abuelos tenían un jardín.",
        why: "<i>Wir hatten</i>, <i>es war</i>, <i>die Großeltern hatten</i>: con <i>wir</i> y con un sujeto plural la forma es <i>hatten</i>."
      },
      {
        q: "Traduce: «De niño estaba enfermo a menudo.»",
        why: "<i>Als Kind war ich oft krank</i>: <i>als Kind</i> abre la frase, luego <i>war</i> y el sujeto. También vale <i>Ich war als Kind oft krank</i>."
      },
      {
        tr: "De niño tenía un perro, y era muy bueno.",
        why: "En <i>Hund</i> la <b>u</b> es breve y la <b>d</b> final suena como una <b>t</b>; <i>lieb</i> tiene una <b>i</b> larga y termina en una <b>p</b> sorda."
      },
      {
        tr: "Antes pasábamos todos los veranos junto al mar y nos divertíamos mucho.",
        why: "En <i>Früher</i> la <b>ü</b> es larga: labios de <i>u</i> y lengua de <i>i</i>. En <i>Spaß</i> la <b>sp</b> inicial suena [ʃp] (con la «sh» de «shock») y la <b>ß</b> es una <b>s</b> sorda."
      }
    ]
  },
  "lesson:a2-u01-l2": {
    theme: "Cuando era pequeño",
    title: "Cuando era pequeño, ...",
    objectives: [
      "unir dos hechos con als (un hecho o período único en el pasado) y wenn (ocasiones repetidas)",
      "poner el verbo conjugado al final de la frase con als y wenn",
      "empezar la principal con el verbo cuando la subordinada va primero"
    ],
    theory: [
      {
        h: "Als para un hecho o período único, wenn para ocasiones repetidas",
        p: "El alemán tiene dos palabras para el «cuando» temporal. <strong>Als</strong> introduce un hecho <b>único</b> o un solo período del pasado (incluso con acciones repetidas dentro): <em>Als ich zehn war, sind wir nach Berlin umgezogen</em>; <em>Als ich klein war, bin ich jeden Tag Rad gefahren</em>. <strong>Wenn</strong> introduce un hecho <b>repetido</b> (también en el pasado: <em>Immer wenn es geschneit hat, ...</em>) o un hecho del <b>presente o del futuro</b>: <em>Wenn ich müde bin, gehe ich früh ins Bett</em>. En la subordinada el verbo conjugado va <b>al final</b>."
      },
      {
        contrast: "El español usa una sola palabra, <em>cuando</em>, y el tiempo verbal no decide cuál elegir: «Cuando tenía diez años» es un hecho único (<em>als</em>), pero «Cuando nevaba, íbamos en trineo» es un hecho habitual (<em>wenn</em>), aunque los dos lleven imperfecto. En alemán hay que elegir entre <em>als</em> y <em>wenn</em>, y el verbo conjugado va al final: <em>Als ich klein war, ...</em>, no «Als ich war klein». Cuando la subordinada va primero, la principal empieza con el verbo justo después de la coma: <em>Als ich klein war, haben wir in einem Dorf gewohnt.</em> En español el orden no cambia. Para la pregunta directa hay una tercera palabra, <em>wann</em> (¿cuándo?). Y <em>wenn</em> también significa «si»: <em>Wenn ich Zeit habe, ...</em>. Además, para el futuro el español usa el subjuntivo («cuando llegue»), mientras que el alemán usa el presente: <em>Wenn ich ankomme, rufe ich dich an.</em>"
      },
      {
        trap: "Con un hecho repetido en el pasado el instinto dice «cuando» = <em>als</em>, pero hace falta <b>wenn</b>: <em>Immer wenn es geschneit hat, sind wir Schlitten gefahren</em> («cada vez que nevaba»). Para decidir, pregúntate si hablas de un episodio o de un único período del pasado (<em>als</em>, aunque dentro haya costumbres: <em>Als ich klein war, bin ich jeden Tag Rad gefahren</em>) o de ocasiones que se repiten (<em>wenn</em>). <em>Als</em> no se usa nunca para el presente ni para el futuro."
      },
      {
        tip: "<em>Als</em> es la misma palabra del comparativo (<em>älter als ich</em>, «mayor que yo»), pero aquí cumple otro papel: une dos oraciones. Con el Perfekt en la subordinada el verbo conjugado (el auxiliar) va al final, detrás del participio: <em>Als wir in Wien gewohnt haben, ...</em>"
      }
    ],
    grammar: {
      title: "Als y wenn con el verbo al final",
      note: "Después de <b>als</b> y <b>wenn</b> el verbo conjugado va <b>al final</b>; si la subordinada va primero, la principal empieza con el verbo.",
      table: {
        head: ["situación", "palabra", "ejemplo"],
        rows: [
          ["un hecho único en el pasado", "als", "Als ich zehn war, sind wir umgezogen."],
          ["un hecho repetido en el pasado", "wenn", "Immer wenn es geschneit hat, sind wir Schlitten gefahren."],
          ["presente o futuro", "wenn", "Wenn ich müde bin, gehe ich früh ins Bett."]
        ]
      },
      examples: [
        { tr: "Cuando era pequeño, vivíamos en un pueblo.", note: "als: un periodo cerrado; luego verbo + sujeto" },
        { tr: "Cuando vivíamos en Viena, yo iba a menudo en bicicleta.", note: "Perfekt en la subordinada: gewohnt haben" },
        { tr: "Cuando tenía diez años, nos mudamos a Berlín.", note: "als: un hecho único" },
        { tr: "Cada vez que nevaba, íbamos en trineo.", note: "immer wenn: hecho repetido" },
        { tr: "Cada vez que mi abuela nos visitaba, hacía un pastel.", note: "jedes Mal, wenn" },
        { tr: "Cuando estoy cansado, me acuesto temprano.", note: "wenn: presente" }
      ]
    },
    vocab: [
      "la mudanza",
      "las vacaciones (solo plural)",
      "el verano",
      "el invierno",
      "la nieve",
      "el trineo",
      "la abuela",
      "el abuelo",
      "el vecino",
      "siempre",
      "a menudo",
      "cada vez"
    ],
    exercises: [
      {
        q: "¿Qué palabra? «___ ich klein war, haben wir in einem Dorf gewohnt.» (cuando era pequeño)",
        opts: ["Als", "Wenn", "Wann"],
        why: "Un periodo cerrado del pasado: <b>als</b>. <i>Wenn</i> sería para hechos repetidos o para el presente."
      },
      {
        q: "¿Qué palabra? «___ es geschneit hat, sind wir Schlitten gefahren.» (cada vez que nevaba)",
        opts: ["Als", "Wenn", "Wann"],
        why: "«Cada vez» indica un hecho repetido: <b>wenn</b>, aunque la frase esté en pasado."
      },
      {
        q: "¿Qué frase es correcta?",
        opts: [
          "Als ich klein war, wir haben viel gespielt.",
          "Als ich klein war, haben wir viel gespielt.",
          "Als ich war klein, haben wir viel gespielt."
        ],
        why: "En la subordinada el verbo va al final (<i>klein war</i>); luego la principal empieza con el verbo: <i>haben wir</i>."
      },
      {
        q: "¿Qué frases son correctas? (más de una)",
        opts: [
          "Als ich zehn war, sind wir umgezogen.",
          "Wenn ich müde bin, trinke ich Kaffee.",
          "Als ich Kind war, ich habe viel gespielt.",
          "Immer wenn wir Ferien hatten, sind wir ans Meer gefahren."
        ],
        why: "La tercera es incorrecta: después de la subordinada la principal empieza con el verbo (<i>habe ich viel gespielt</i>). Las demás respetan la distinción entre <i>als</i> y <i>wenn</i>."
      },
      {
        q: "Completa la frase.",
        tr: "Cuando era pequeño, vivíamos en un pueblo.",
        why: "<i>Als</i> introduce un periodo cerrado del pasado; el participio (<i>gewohnt</i>, o también <i>gelebt</i>) cierra la principal."
      },
      {
        q: "Completa la frase.",
        tr: "Cada vez que nevaba en invierno, íbamos en trineo.",
        why: "<i>Immer wenn</i> marca un hecho repetido, por eso <b>wenn</b> (en minúscula, tras <i>Immer</i>). En la principal el verbo conjugado (<i>sind</i>) va antes del sujeto."
      },
      {
        q: "Completa la frase.",
        tr: "Cuando vivíamos en Viena, yo iba a menudo en bicicleta.",
        why: "En una subordinada en Perfekt el participio (<i>gewohnt</i>) va antes del auxiliar (<i>haben</i>), que queda al final de la frase."
      },
      {
        q: "Traduce: «Cuando tenía diez años, nos mudamos a Berlín.» (usa umziehen)",
        why: "<i>Als</i> para un hecho único. El Perfekt de <i>umziehen</i> se forma con <b>sein</b>: <i>sind umgezogen</i>."
      },
      {
        tr: "Cuando tenía diez años nos mudamos a Berlín, y allí no tenía amigos.",
        why: "En <i>keine</i> la <b>ei</b> suena como «ai» de «aire»; en <i>Freunde</i> la <b>eu</b> es un diptongo parecido a «oi» de «hoy». <i>Berlin</i> lleva el acento en la última sílaba."
      },
      {
        tr: "Cada vez que nevaba, íbamos en trineo.",
        why: "En <i>geschneit</i> y <i>Schlitten</i> la <b>sch</b> suena [ʃ], como la «sh» de «shock»; <i>wenn</i> empieza con una <b>w</b>, que suena como una «v» labiodental (los dientes superiores sobre el labio inferior), no como la «b» o la «u»."
      }
    ]
  },
  "lesson:a2-u01-l3": {
    theme: "Reglas y permisos",
    title: "Tenía que, podía, porque ...",
    objectives: [
      "usar musste, konnte, wollte y durfte en Präteritum",
      "explicar un motivo con weil y el verbo al final",
      "contar las reglas y las prohibiciones de la infancia"
    ],
    theory: [
      {
        h: "Los modales en Präteritum",
        p: "Para decir lo que tenías que hacer, querías hacer o podías hacer de pequeño se usan los modales en <strong>Präteritum</strong>: <em>ich musste</em> (tenía que), <em>ich konnte</em> (podía, era capaz), <em>ich durfte</em> (me estaba permitido), <em>ich wollte</em> (quería). En Präteritum <em>müssen, können, dürfen</em> pierden la diéresis (Umlaut), mientras que <em>wollen</em> y <em>sollen</em> no la tenían. El modal va con un infinitivo al final de la frase: <em>Ich musste jeden Tag Hausaufgaben machen.</em>"
      },
      {
        contrast: "El español tiene un solo verbo, <em>poder</em>, para dos ideas distintas: «no podía salir» puede significar que no era capaz (<em>Ich konnte nicht ausgehen</em>) o que no me dejaban (<em>Ich durfte nicht ausgehen</em>). En alemán hay que elegir: <em>können</em> es la capacidad o la posibilidad, <em>dürfen</em> el permiso. Piensa en «no me dejaban» o «no me permitían»: eso es <em>dürfen</em>. Además, como con <em>sein</em> y <em>haben</em>, el alemán hablado prefiere el Präteritum de los modales al Perfekt: <em>Ich konnte nicht kommen</em> suena más natural que <em>Ich habe nicht kommen können</em>."
      },
      {
        trap: "Con <b>weil</b> («porque») el verbo conjugado va al final, después del infinitivo: <em>..., weil ich arbeiten musste</em>, no «weil ich musste arbeiten» ni «weil musste ich arbeiten». En español el orden no cambia después de «porque», y por eso el error es tan frecuente. La coma antes de <em>weil</em> es obligatoria."
      },
      {
        tip: "Para dar un motivo sin mover el verbo se puede usar <em>denn</em> (<em>Ich war müde, denn ich musste früh aufstehen</em>), pero aquí la palabra que hay que practicar es <em>weil</em>. A la pregunta <em>Warum?</em> puedes responder solo con la subordinada: <em>Warum warst du traurig? Weil ich nicht ins Kino gehen durfte.</em>"
      }
    ],
    grammar: {
      title: "Modales en Präteritum y weil",
      note: "En Präteritum los modales pierden la diéresis (Umlaut), salvo <b>wollte</b>, que no la tenía. Después de <b>weil</b> el verbo conjugado va al final.",
      table: {
        head: ["infinitivo", "Präteritum (ich)", "significado", "con weil"],
        rows: [
          ["müssen", "musste", "tenía que", "weil ich arbeiten musste"],
          ["können", "konnte", "podía, era capaz", "weil ich nicht schwimmen konnte"],
          ["dürfen", "durfte", "me estaba permitido", "weil ich nicht ins Kino gehen durfte"],
          ["wollen", "wollte", "quería", "weil ich spielen wollte"]
        ]
      },
      examples: [
        { tr: "Tenía que hacer los deberes todos los días.", note: "ich musste + infinitivo al final" },
        { tr: "No nos dejaban ver la televisión mucho tiempo.", note: "dürfen: wir durften" },
        { tr: "Yo quería un perro, pero mis padres no querían.", note: "wollen: ich wollte, sie wollten" },
        { tr: "Estaba triste porque no me dejaban ir al cine.", note: "weil: el verbo durfte va al final" },
        { tr: "No podía venir porque tenía que trabajar.", note: "weil ich arbeiten musste" },
        { tr: "Podíamos jugar en el jardín porque hacía buen tiempo.", note: "weil ... war" }
      ]
    },
    vocab: [
      "la tarea (escolar)",
      "la regla",
      "la televisión, el televisor",
      "la paga (dinero semanal)",
      "los dulces, las golosinas (plural de <i>die Süßigkeit</i>)",
      "el teléfono móvil",
      "el cumpleaños",
      "la mascota",
      "el castigo",
      "estricto",
      "permitido",
      "prohibido"
    ],
    exercises: [
      {
        q: "¿Qué frase es correcta?",
        opts: [
          "Ich konnte nicht kommen, weil musste ich arbeiten.",
          "Ich konnte nicht kommen, weil ich musste arbeiten.",
          "Ich konnte nicht kommen, weil ich arbeiten musste."
        ],
        why: "Después de <i>weil</i> el verbo conjugado (<i>musste</i>) va al final, detrás del infinitivo <i>arbeiten</i>."
      },
      {
        q: "Completa: «Ich ___ jeden Tag Hausaufgaben machen.» (tenía que, usa müssen)",
        hint: "müssen, Präteritum, ich",
        why: "<b>Musste</b>: sin diéresis y con la terminación <i>-te</i>; con <i>ich</i> no se añade nada más."
      },
      {
        q: "Completa: «Wir ___ nicht lange fernsehen.» (no nos dejaban, usa dürfen)",
        hint: "dürfen, Präteritum, wir",
        why: "<b>Durften</b>: <i>dürfen</i> pierde la diéresis y con <i>wir</i> la terminación es <i>-en</i>."
      },
      {
        q: "Completa: «Ich war traurig, ___ ich nicht ins Kino gehen durfte.» (porque, usa weil)",
        hint: "usa weil",
        why: "<b>Weil</b> manda el verbo al final: <i>..., weil ich nicht ins Kino gehen durfte</i>."
      },
      {
        q: "Une cada forma con su significado.",
        pairs: ["tenía que", "podía, era capaz", "quería", "me estaba permitido"]
      },
      {
        q: "Ordena las palabras.",
        tr: "No podía venir, porque tenía que trabajar.",
        why: "En la principal <i>konnte</i> va en segunda posición; en la subordinada <i>weil ich arbeiten musste</i> el verbo conjugado va al final."
      },
      {
        q: "Completa la frase.",
        tr: "Estaba cansado porque tenía que levantarme temprano.",
        why: "El verbo separable se queda entero con el modal: <i>früh aufstehen musste</i>, con <i>musste</i> al final."
      },
      {
        q: "Traduce: «No podía jugar porque tenía que hacer los deberes.»",
        why: "<i>Ich konnte nicht spielen, weil ich Hausaufgaben machen musste</i>. También se acepta <i>durfte</i>, si quieres decir que no te dejaban."
      },
      {
        tr: "No me dejaban ver la televisión mucho tiempo, porque tenía que acostarme temprano.",
        why: "En <i>durfte</i> la <b>u</b> es breve; en <i>früh</i> la <b>ü</b> es larga. En <i>lange</i> la <b>ng</b> es una sola nasal [ŋ], como la «n» de «banco», pero sin la [k] que sigue ni una <b>g</b> aparte."
      },
      {
        tr: "De niño no me dejaban comer dulces, porque mis padres eran estrictos.",
        why: "En <i>Süßigkeiten</i> la <b>ü</b> es larga y la <b>ß</b> es una <b>s</b> sorda; <i>streng</i> empieza con [ʃtr], como «tr» con una «sh» delante."
      }
    ]
  },
  "lesson:a2-u01-l4": {
    theme: "Los recuerdos",
    title: "¿Te acuerdas?",
    objectives: [
      "usar los pronombres reflexivos mich, dich, sich, uns, euch",
      "decir sich erinnern an y sich freuen auf con el caso correcto",
      "formar el Perfekt de los verbos reflexivos con haben"
    ],
    theory: [
      {
        h: "Los verbos reflexivos: mich, dich, sich, uns, euch",
        p: "Algunos verbos alemanes exigen un pronombre <b>reflexivo</b> referido al sujeto, aunque no siempre signifique una acción sobre uno mismo: <em>Ich erinnere mich</em> (me acuerdo), <em>Ich freue mich</em> (me alegro). El pronombre cambia con la persona: <em>mich, dich, sich, uns, euch, sich</em>. En la principal con el sujeto en primera posición va después del verbo conjugado: <em>Du erinnerst dich an unsere Schule.</em> En las preguntas el verbo va primero y el pronombre sigue al sujeto: <em>Erinnerst du dich an unsere Schule?</em> En el Perfekt el auxiliar es <em>haben</em> y el pronombre se coloca normalmente cerca del principio del campo medio, después de un sujeto pronominal: <em>Wir haben uns am Bahnhof getroffen. Gestern haben wir uns getroffen. Gestern habe ich mich mit Anna getroffen.</em> En la subordinada va antes del verbo final, después del sujeto: <em>weil ich mich erinnere</em>. Con <em>sich erinnern</em> y <em>sich freuen</em> la preposición y su caso se aprenden junto con el verbo: <em>sich erinnern an</em> + acusativo, <em>sich freuen auf</em> + acusativo (esperar con ilusión algo futuro), <em>sich freuen über</em> + acusativo (alegrarse de algo presente o pasado)."
      },
      {
        contrast: "El español también tiene muchos verbos reflexivos y, como el alemán, usa el pronombre con el verbo, pero no son los mismos verbos y las preposiciones cambian: <em>acordarse <b>de</b></em> es <em>sich erinnern <b>an</b></em>, <em>alegrarse <b>de</b></em> es <em>sich freuen <b>über</b></em> (o <em>auf</em>, si es futuro), <em>interesarse <b>por</b></em> es <em>sich interessieren <b>für</b></em>, <em>quedar <b>con</b></em> es <em>sich treffen <b>mit</b></em>. Otra diferencia es la posición: el pronombre español va delante del verbo conjugado (<em>me acuerdo</em>), mientras que en una oración principal alemana con el sujeto al principio va después (<em>Ich erinnere mich</em>). En la subordinada, en cambio, el reflexivo precede al verbo, como en español: <em>weil ich mich erinnere</em>. Y al revés, <em>levantarse</em> y <em>despertarse</em> en alemán <b>no</b> son reflexivos (<em>aufstehen, aufwachen</em>), igual que <em>llamarse</em> (<em>heißen</em>). Como en español <em>se</em>, el pronombre alemán <em>sich</em> sirve para <em>er, sie, es, sie, Sie</em>. Y <em>Wir treffen uns</em> es recíproco: «nos vemos»."
      },
      {
        trap: "En la 1.ª y la 2.ª persona el pronombre tiene dos formas: el acusativo <em>mich, dich</em> y el dativo <em>mir, dir</em>. En español <em>me</em> y <em>te</em> sirven para las dos funciones, y por eso es fácil elegir mal. Con <em>sich erinnern an</em> hace falta el <b>acusativo</b>: <em>Ich erinnere mich</em>, no «Ich erinnere mir». Atención también a <em>erinnern</em> sin pronombre: <em>Ich erinnere dich an den Termin</em> significa «te recuerdo la cita» (te lo hago acordar), que no es «me acuerdo». El español <em>recordar</em> cubre las dos ideas, y el alemán las separa."
      },
      {
        tip: "Aprende siempre el verbo reflexivo junto con su preposición: <em>sich erinnern an</em>, <em>sich freuen auf/über</em>, <em>sich interessieren für</em>, <em>sich ärgern über</em>, <em>sich treffen mit</em>. Un verbo, una preposición, un caso."
      }
    ],
    grammar: {
      title: "El pronombre reflexivo",
      note: "En la principal con el sujeto al principio, el pronombre va después del verbo conjugado (con un sujeto pronominal pospuesto, después de este: <i>Gestern habe ich mich ...</i>; en la subordinada: <i>weil ich mich erinnere</i>). En la 3.ª persona (singular y plural) el pronombre es siempre <b>sich</b>.",
      table: {
        head: ["persona", "pronombre", "ejemplo"],
        rows: [
          ["ich", "mich", "Ich erinnere mich an meine Lehrerin."],
          ["du", "dich", "Erinnerst du dich an unsere Schule?"],
          ["er, sie, es", "sich", "Er freut sich auf die Ferien."],
          ["wir", "uns", "Wir haben uns am Bahnhof getroffen."],
          ["ihr", "euch", "Freut ihr euch auf das Klassentreffen?"],
          ["sie, Sie", "sich", "Sie ärgern sich über das Wetter."]
        ]
      },
      examples: [
        { tr: "¿Te acuerdas de nuestra escuela?", note: "sich erinnern an + acusativo" },
        { tr: "Me acuerdo bien de mi maestra.", note: "ich erinnere mich" },
        { tr: "Nos vimos en la estación.", note: "Perfekt con haben: haben uns getroffen" },
        { tr: "Él espera con ilusión las vacaciones.", note: "sich freuen auf + acusativo" },
        { tr: "Ella se enfada por el tiempo.", note: "sich ärgern über + acusativo" },
        { tr: "Me intereso por las fotos antiguas.", note: "sich interessieren für + acusativo" }
      ]
    },
    vocab: [
      "acordarse (de)",
      "alegrarse (de), esperar con ilusión",
      "enfadarse (por)",
      "quedar, verse (con)",
      "interesarse (por)",
      "sentarse",
      "el recuerdo",
      "la foto",
      "el álbum",
      "el reencuentro de excompañeros de clase",
      "el compañero de clase",
      "la diversión"
    ],
    exercises: [
      {
        q: "¿Qué frase es correcta?",
        opts: ["Ich erinnere mir an meine Schule.", "Ich erinnere mich an meine Schule.", "Ich erinnere mich meine Schule."],
        why: "<i>Sich erinnern</i> lleva el acusativo <b>mich</b> y la preposición <b>an</b>."
      },
      {
        q: "Completa: «Erinnerst du ___ an unsere Lehrerin?» (el pronombre reflexivo)",
        hint: "du: acusativo",
        why: "<b>Dich</b>: el pronombre reflexivo de la 2.ª persona del singular en acusativo."
      },
      {
        q: "Completa: «Wir freuen ___ auf die Ferien.» (el pronombre reflexivo)",
        hint: "wir: acusativo",
        why: "<b>Uns</b>: para <i>wir</i> el pronombre reflexivo es <i>uns</i>."
      },
      {
        q: "Une cada verbo con su significado.",
        pairs: ["acordarse", "alegrarse", "enfadarse", "interesarse"]
      },
      {
        q: "Ordena las palabras.",
        tr: "Me acuerdo bien de mi maestra.",
        why: "El pronombre reflexivo sigue al verbo conjugado (<i>erinnere mich</i>); <i>an</i> introduce aquello de lo que te acuerdas."
      },
      {
        q: "Completa la frase.",
        tr: "Ayer quedé con Anna y nos acordamos de la escuela.",
        why: "En el Perfekt el auxiliar es <i>haben</i>: <i>habe mich ... getroffen</i> y <i>haben uns ... erinnert</i>."
      },
      {
        q: "Traduce: «Me acuerdo bien de mi escuela.»",
        why: "<i>Ich erinnere mich gut an meine Schule</i>: <i>an</i> + acusativo, y <i>gut</i> va después del pronombre."
      },
      {
        q: "Un antiguo compañero te reconoce.",
        setting: "Un excompañero de clase te saluda por la calle.",
        lines: [
          { tr: "¡Hola, Lena! ¿Te acuerdas de mí?" },
          { tr: "Responde que sí y que te acuerdas de él.", answerTr: "¡Sí, me acuerdo de ti!" },
          { tr: "Estábamos juntos en la escuela primaria." },
          { tr: "Responde que os visteis a menudo después de la escuela.", answerTr: "Sí, y nos vimos a menudo después de la escuela." },
          { tr: "¿Te hace ilusión el reencuentro de excompañeros?" },
          { tr: "Responde que estás muy contento.", answerTr: "Sí, ¡me hace mucha ilusión!" }
        ]
      },
      {
        tr: "Nos vimos a menudo después de la escuela, y me acuerdo con gusto de aquella época.",
        why: "En <i>ich</i> la <b>ch</b> después de una vocal anterior se pronuncia [ç], un sonido soplado que el español no tiene. En <i>erinnere</i> el acento cae en la segunda sílaba, y <i>er-</i> es átono."
      },
      {
        tr: "Me acuerdo bien de mi escuela primaria y me hace ilusión el reencuentro con los excompañeros.",
        why: "En <i>Grundschule</i> la <b>sch</b> es [ʃ] y la <b>d</b> de <i>Grund</i> suena como una <b>t</b>; en <i>Klassentreffen</i> la <b>ss</b> es una <b>s</b> sorda."
      }
    ]
  },
  "lesson:a2-u01-test": {
    theme: "Verificación",
    title: "Verificación de la unidad 1",
    objectives: ["comprobar el Präteritum, als, weil y los modales en pasado"],
    theory: [
      {
        p: "Preguntas sobre el Präteritum, als, weil y los modales en pasado. Se aprueba con el 70 %. No mires las lecciones mientras respondes: si no recuerdas algo, es mejor volver a repasar."
      }
    ],
    exercises: [
      {
        tr: "El Präteritum de sein, todas las personas.",
        why: "<i>War, warst, war, waren, wart, waren</i>."
      },
      {
        tr: "El Präteritum de müssen, todas las personas.",
        why: "<i>Musste, musstest, musste, mussten, musstet, mussten</i>: sin diéresis."
      },
      {
        q: "Completa: «Gestern ___ wir keine Zeit.» (no teníamos, usa haben)",
        hint: "haben, Präteritum, wir",
        why: "<b>Hatten</b>: raíz <i>hatt-</i> y terminación <i>-en</i>."
      },
      {
        q: "Completa: «Meine Eltern haben viel gearbeitet, ___ ich klein war.» (cuando, un periodo cerrado)",
        hint: "un hecho único en el pasado",
        why: "Un periodo cerrado del pasado: <b>als</b>."
      },
      {
        q: "Completa: «Ich konnte nicht kommen, ___ ich krank war.» (porque, usa weil)",
        hint: "usa weil",
        why: "<b>Weil</b> introduce el motivo y manda el verbo (<i>war</i>) al final."
      },
      {
        q: "¿Qué frase es correcta?",
        opts: [
          "Ich bleibe zu Hause, weil ich müde bin.",
          "Ich bleibe zu Hause, weil ich bin müde.",
          "Ich bleibe zu Hause, weil bin ich müde."
        ],
        why: "Después de <i>weil</i> el verbo conjugado va al final: <i>weil ich müde bin</i>."
      },
      {
        q: "Completa la frase.",
        tr: "Cuando era pequeño, tenía un perro.",
        why: "<i>War</i> al final de la subordinada; luego la principal empieza con el verbo: <i>hatte ich</i>."
      },
      {
        q: "Completa la frase.",
        tr: "No podía jugar, porque tenía que hacer los deberes.",
        why: "<i>Konnte</i> o <i>durfte</i> son posibles, según se trate de una imposibilidad o de una prohibición. En la subordinada <i>machen</i> va antes del modal <i>musste</i>, que cierra la frase."
      },
      {
        tr: "Cuando era pequeño, no me dejaban ver la televisión mucho tiempo, porque mis padres eran estrictos.",
        why: "En <i>durfte</i> la <b>u</b> es breve; en <i>streng</i> la <b>str</b> empieza con [ʃtr]; la <b>ng</b> es una sola nasal [ŋ]."
      },
      {
        tr: "Cuando era niño tenía un perro, y podía jugar con él todos los días.",
        why: "En <i>Hund</i> la <b>d</b> final suena como una <b>t</b>; en <i>jeden Tag</i> la <b>g</b> final es una <b>k</b> sorda."
      }
    ]
  }
});
