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
        contrast: "El español distingue el <b>imperfecto</b> (<em>era, tenía</em>) del <b>indefinido</b> (<em>fui, tuve</em>). El Präteritum no hace esa distinción: <em>Ich war müde</em> puede ser «estaba cansado» o «estuve cansado» según el contexto. <em>Als Kind war ich oft krank</em> = «De niño estaba enfermo a menudo»; <em>Gestern war ich beim Arzt</em> = «Ayer estuve en el médico». Además, <em>sein</em> cubre <em>ser</em> y <em>estar</em>, así que <em>war</em> puede traducir <em>era, estaba, fue y estuvo</em>. Otra diferencia: en español puedes callar el sujeto («era pequeño»), pero en alemán el sujeto se expresa siempre en las oraciones enunciativas e interrogativas normales, con un pronombre o con un nombre (<em>Mein Opa war müde</em>); la excepción es el imperativo (<em>Komm!</em>). Y como <em>ich war</em> y <em>er war</em> son iguales, sin sujeto expreso no se sabría quién es. Por último, <em>als Kind</em> no lleva artículo (como «de niño»), pero <em>Kind</em> es neutro y sirve tanto para niño como para niña, sin forma femenina."
      },
      {
        trap: "No mezcles las dos formas: <em>Ich habe war</em> no existe. Con <em>sein</em> y <em>haben</em> se elige el Präteritum (<em>Ich war</em>, <em>Ich hatte</em>) o el Perfekt (<em>Ich bin gewesen</em>, <em>Ich habe gehabt</em>), nunca una forma híbrida. Cuidado también con <em>hatte</em>: como verbo principal significa «tenía» (<em>Ich hatte ein Fahrrad</em>); como auxiliar del Plusquamperfekt corresponde a «había» (<em>Ich hatte gearbeitet</em> = había trabajado). Y fíjate en <em>wir hatten</em> y <em>wir waren</em>: en la primera persona del plural la terminación es <em>-en</em>, como en el infinitivo."
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
        { tr: "Antes pasábamos todos los veranos junto al mar.", note: "früher + sein: wir/sie/Sie waren, pero ihr wart" },
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
      note: "En Präteritum <b>müssen</b>, <b>können</b>, <b>dürfen</b> (y <b>mögen</b> → <i>mochte</i>) pierden la diéresis (Umlaut): musste, konnte, durfte; <b>wollen</b> y <b>sollen</b> no la tienen ni siquiera en el infinitivo. Después de <b>weil</b> el verbo conjugado va al final.",
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
    objectives: ["comprobar el Präteritum, als y wenn, weil, los modales en pasado y los verbos reflexivos con su preposición"],
    theory: [
      {
        p: "Diez preguntas sobre toda la unidad. Se aprueba con el 70 %. No mires las lecciones mientras respondes: si no recuerdas algo, es mejor volver a repasar."
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
        q: "Completa: «Immer ___ ich Zeit hatte, habe ich gelesen.» (cada vez que, un hecho repetido)",
        hint: "un hecho repetido en el pasado",
        why: "Un hecho repetido en el pasado: <b>wenn</b>, no <i>als</i>. En la subordinada <i>hatte</i> va al final."
      },
      {
        q: "Completa: «Meine Eltern haben viel gearbeitet, ___ ich klein war.» (cuando, un periodo cerrado)",
        hint: "un hecho único en el pasado",
        why: "Un periodo cerrado del pasado: <b>als</b>."
      },
      {
        q: "Completa la frase.",
        tr: "Recuerdo con gusto mi infancia.",
        why: "<i>Sich erinnern an</i> + acusativo: el pronombre reflexivo <i>mich</i> sigue al verbo y después viene la preposición <i>an</i>."
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
  },
  "unit:a2-u02": {
    title: "De viaje",
    grammarNote: "wohin? con nach, zu e in + acusativo · presente con indicador de tiempo y Futur I · Perfekt y registro en el hotel · wenn + Perfekt para una acción futura ya terminada"
  },
  "lesson:a2-u02-l1": {
    theme: "En la estación",
    title: "En la estación: nach Wien, in die Schweiz",
    objectives: [
      "decir adónde vas con nach, in + acusativo y zu",
      "distinguir wohin? (destino) de wo? (lugar)",
      "comprar un billete y pedir información en la estación"
    ],
    theory: [
      {
        h: "Wohin? nach, in o zu",
        p: "A la pregunta <b>wohin?</b> (¿hacia dónde?) el alemán elige la preposición según el destino. Con <b>ciudades y países sin artículo</b> se usa <strong>nach</strong>: <em>Ich fahre nach Wien. Wir fliegen nach Italien.</em> Con los <b>países que llevan artículo</b> se usa <strong>in</strong> + <b>acusativo</b>: <em>Wir fahren in die Schweiz.</em> Hacia <b>una persona</b> y, por lo general, hacia <b>un edificio o un lugar concreto</b> se usa <strong>zu</strong> + dativo: <em>Ich fahre zu meiner Tante. Wir gehen zum Bahnhof.</em> Con <em>zu</em> + artículo hay contracciones: <em>zum</em> (zu dem) y <em>zur</em> (zu der)."
      },
      {
        contrast: "El español usa casi siempre <em>a</em> para el destino: «voy a Viena», «voy a Suiza», «voy a la estación». El alemán distingue tres casos: <em>nach</em> para ciudades y países sin artículo, <em>in</em> + acusativo para los países con artículo (el artículo varía: <em>in die Schweiz</em>, <em>in den Iran</em>, <em>in die USA</em>) y <em>zu</em> para personas y lugares. Para ir a casa de alguien el español dice «a casa de mi tía» y el alemán, simplemente, <em>zu meiner Tante</em>. Además, en español «Suiza» o «Turquía» no suelen llevar artículo, pero en alemán <em>die Schweiz</em> y <em>die Türkei</em> sí, y eso decide la preposición: hay que aprender cada país con su artículo. El español también separa <em>dónde</em> y <em>adónde</em>, y el alemán tiene dos preguntas parecidas, <em>wo?</em> (lugar) y <em>wohin?</em> (dirección); la segunda cambia el caso después de <em>in</em>."
      },
      {
        trap: "El caso depende de lo que pregunta la frase. Con <b>wohin?</b> (movimiento hacia un lugar) <em>in</em> pide el <b>acusativo</b>: <em>Wir fahren in die Schweiz</em>. Con <b>wo?</b> (posición, dónde se está) pide el <b>dativo</b>: <em>Meine Tante wohnt in der Schweiz</em>. Dos frases casi iguales, dos casos distintos, y <em>die</em> frente a <em>der</em> es la única pista. Ojo también con <em>nach die Schweiz</em>: no existe, porque <em>nach</em> no va con países que llevan artículo. Y como en español los sustantivos no cambian de forma según el caso, esa diferencia no se oye por costumbre: hay que fijarse en ella a propósito."
      },
      {
        tip: "En la estación te bastan unas pocas frases hechas: <em>Eine Fahrkarte nach Wien, bitte.</em> <em>Einfach oder hin und zurück?</em> (¿solo ida o ida y vuelta?) <em>Von welchem Gleis fährt der Zug ab?</em> Aprende <em>die Schweiz</em> con su artículo, como una sola unidad."
      }
    ],
    grammar: {
      title: "Wohin? nach, in + acusativo, zu",
      note: "La preposición depende del destino. <b>nach</b> va sin artículo, <b>zu</b> pide el dativo (<i>zum</i>, <i>zur</i>), <b>in</b> con wohin? pide el acusativo.",
      table: {
        head: ["destino", "preposición", "ejemplo"],
        rows: [
          ["ciudades, países sin artículo", "nach", "nach Wien, nach Italien"],
          ["países con artículo", "in + acusativo", "in die Schweiz, in die Türkei"],
          ["personas", "zu + dativo", "zu meiner Tante, zum Arzt"],
          ["edificios, lugares concretos", "zu + dativo", "zum Bahnhof, zur Post"],
          ["lugar (wo?)", "in + dativo", "in der Schweiz"]
        ]
      },
      examples: [
        { tr: "Voy a Viena.", note: "nach + ciudad, sin artículo" },
        { tr: "Volamos a Italia.", note: "nach + país sin artículo" },
        { tr: "En verano van a Suiza.", note: "wohin? in + acusativo: in die Schweiz" },
        { tr: "Va a casa de su tía.", note: "zu + dativo: zu seiner Tante" },
        { tr: "Vamos a la estación.", note: "zu + dativo: zum (zu dem) Bahnhof" },
        { tr: "Mi tía vive en Suiza.", note: "wo? in + dativo: in der Schweiz" }
      ]
    },
    vocab: [
      "la estación",
      "el tren",
      "la vía",
      "el billete de tren",
      "el horario (de trenes)",
      "la salida",
      "la llegada",
      "Suiza",
      "el país",
      "la información (ventanilla de información)",
      "solo ida",
      "ida y vuelta"
    ],
    exercises: [
      {
        q: "Completa: «Wohin fährst du? Ich fahre ___ Wien.»",
        opts: ["nach", "in", "zu"],
        why: "Con ciudades sin artículo se usa <b>nach</b>. <i>In Wien</i> indica dónde se está, no adónde se va."
      },
      {
        q: "Dices que vais a Suiza. ¿Qué frase es correcta?",
        opts: ["Wir fahren nach die Schweiz.", "Wir fahren in die Schweiz.", "Wir fahren in der Schweiz."],
        why: "<i>Die Schweiz</i> lleva artículo: hace falta <b>in</b> + acusativo (<i>in die Schweiz</i>). <i>In der Schweiz</i> es el dativo e indica dónde se está."
      },
      {
        q: "Completa: «Morgen fliege ich ___ Italien.» (hacia un país sin artículo)",
        hint: "¿nach, in o zu?",
        why: "<i>Italien</i> no lleva artículo, así que <b>nach</b>, igual que con las ciudades."
      },
      {
        q: "Completa: «Ich fahre ___ meiner Tante.» (hacia una persona)",
        hint: "preposición + dativo",
        why: "Hacia una persona se usa <b>zu</b> + dativo: <i>zu meiner Tante</i>."
      },
      {
        q: "Completa la frase.",
        tr: "Voy a Viena. Luego vamos a Suiza, y por la noche voy a casa de mi amigo.",
        why: "Tres destinos, tres preposiciones: <i>nach Wien</i>, <i>in die Schweiz</i> (acusativo, país con artículo), <i>zu meinem Freund</i> (persona, dativo)."
      },
      {
        q: "Une cada destino con su traducción.",
        pairs: ["a Viena", "a Suiza (destino)", "a casa de mi tía", "a la estación"]
      },
      {
        q: "Traduce (verbo: fahren): «Mañana vamos a Suiza.»",
        why: "<i>Morgen fahren wir in die Schweiz</i>: <i>fahren</i> para un medio de transporte; <i>reisen</i> es una alternativa. El orden puede cambiar (<i>Wir fahren morgen ...</i>), el verbo conjugado se queda en segunda posición."
      },
      {
        q: "En la ventanilla de la estación.",
        setting: "Compras un billete para Viena.",
        lines: [
          { tr: "Buenos días. ¿Adónde va?" },
          { tr: "Responde que vas a Viena.", answerTr: "Voy a Viena." },
          { tr: "¿Solo ida o ida y vuelta?" },
          { tr: "Responde: ida y vuelta, por favor.", answerTr: "Ida y vuelta, por favor." },
          { tr: "¿Sigue luego el viaje?" },
          { tr: "Responde que después vas a casa de tu tía.", answerTr: "Sí, después voy a casa de mi tía." }
        ]
      },
      {
        tr: "Buenos días, quisiera un billete para Viena, de ida y vuelta, por favor.",
        why: "En <i>Fahrkarte</i> la primera <b>a</b> es larga; en <i>Wien</i> la <b>W</b> se lee [v] y <b>ie</b> es una <b>i</b> larga; <i>zurück</i> tiene una <b>ü</b> breve."
      },
      {
        tr: "En verano voy a Suiza y luego a casa de mi tía en Viena.",
        why: "En <i>Schweiz</i> la <b>sch</b> se lee [ʃ], la <b>w</b> es [v], <b>ei</b> suena [aɪ] y la <b>z</b> final es [ts]. En <i>Sommer</i> la <b>S</b> inicial ante vocal suele ser sonora."
      }
    ]
  },
  "lesson:a2-u02-l2": {
    theme: "Planes de viaje",
    title: "Mañana salgo, saldré",
    objectives: [
      "hablar del futuro con el presente y un indicador de tiempo",
      "formar el Futur I con werden + infinitivo al final",
      "reconocer cuándo resulta útil el Futur I (promesa, decisión, predicción)"
    ],
    theory: [
      {
        h: "El futuro: presente con indicador de tiempo, o Futur I",
        p: "Para hablar del futuro el alemán usa normalmente el <b>presente</b> junto con un indicador de tiempo: <em>Morgen fahre ich nach Wien. Nächste Woche fliegen wir nach Spanien.</em> Existe también el <strong>Futur I</strong>: <em>werden</em> conjugado en segunda posición y el <b>infinitivo al final</b> de la frase: <em>Ich werde dich morgen anrufen. Wir werden im Sommer in die Schweiz fahren.</em> El Futur I se usa para una promesa, una decisión, una predicción (<em>Es wird heute Abend regnen</em>) o cuando no hay indicador de tiempo."
      },
      {
        contrast: "El español tiene un futuro simple (<em>iré, saldré</em>) y también la perífrasis «voy a + infinitivo», y para los planes cercanos dice a menudo el presente («mañana salgo»). En alemán el presente con <em>morgen</em>, <em>nächste Woche</em> o <em>bald</em> es la forma normal, y el Futur I, correcto, es menos frecuente: <em>Morgen werde ich nach Wien fahren</em> se dice, pero <em>Morgen fahre ich nach Wien</em> es lo habitual. En alemán no existe una construcción como «ir a + infinitivo» para el futuro: <em>gehen</em> no sirve para eso. En el Futur I el verbo principal no se conjuga: queda en infinitivo al final, como en <em>Ich werde fahren</em>, mientras que en español el futuro simple lleva la terminación en el propio verbo."
      },
      {
        trap: "Con el Futur I el verbo principal queda en infinitivo: <em>Ich werde morgen nach Wien fahren</em>, no «Ich werde fahre». Con un verbo separable el infinitivo va unido: <em>Ich werde dich anrufen</em>. Ojo: <em>werden</em> es también un verbo pleno y significa «volverse, ponerse, llegar a ser»: <em>Er wird Arzt</em> (se hace médico), <em>Es wird kalt</em> (se pone frío). Si no hay infinitivo al final, no es un futuro."
      },
      {
        tip: "Busca primero un indicador de tiempo: <em>morgen, nächste Woche, im Sommer, bald, am Wochenende</em>. Si lo hay, basta el presente. Si quieres dar un tono de promesa o de decisión (<em>Ich werde es nicht vergessen</em>), usa el Futur I. En ambos casos el tiempo puede ir en primera posición: <em>Morgen fahre ich ...</em>, con el verbo en segunda."
      }
    ],
    grammar: {
      title: "El Futur I con werden",
      note: "<b>werden</b> se conjuga en segunda posición, el verbo principal va <b>en infinitivo al final</b>. Con un indicador de tiempo el presente es la forma normal.",
      table: {
        head: ["persona", "werden", "ejemplo"],
        rows: [
          ["ich", "werde", "Ich werde fahren."],
          ["du", "wirst", "Du wirst fahren."],
          ["er, sie, es", "wird", "Es wird regnen."],
          ["wir", "werden", "Wir werden fliegen."],
          ["ihr", "werdet", "Ihr werdet ankommen."],
          ["sie, Sie", "werden", "Sie werden bleiben."]
        ]
      },
      examples: [
        { tr: "Mañana voy a Viena.", note: "presente + morgen: forma normal" },
        { tr: "La semana que viene volamos a España.", note: "presente + nächste Woche" },
        { tr: "Te llamaré mañana.", note: "Futur I: verbo separable unido al infinitivo final" },
        { tr: "Esta noche lloverá.", note: "Futur I como predicción" },
        { tr: "En verano iremos a Suiza.", note: "werden en segunda posición, infinitivo al final" },
        { tr: "Te mandaré una foto.", note: "Futur I: una promesa" }
      ]
    },
    vocab: [
      "el viaje",
      "las vacaciones",
      "la semana",
      "el fin de semana",
      "el vuelo",
      "el aeropuerto",
      "la maleta",
      "el billete (de vuelo, de un evento)",
      "mañana",
      "la semana que viene",
      "pronto",
      "en verano"
    ],
    exercises: [
      {
        tr: "El presente de werden, todas las personas.",
        why: "<i>Werde, wirst, wird, werden, werdet, werden</i>: <i>werden</i> es irregular (<i>e</i> pasa a <i>i</i> en <i>du</i> y en <i>er, sie, es</i>) y es el auxiliar del Futur I."
      },
      {
        tr: "El Futur I de fahren, todas las personas.",
        why: "<i>Ich werde fahren, du wirst fahren, er wird fahren, wir werden fahren, ihr werdet fahren, sie werden fahren</i>: <i>werden</i> cambia, el infinitivo queda igual."
      },
      {
        tr: "El Futur I de fliegen, todas las personas.",
        why: "En el Futur I el infinitivo no se conjuga: <i>ich werde fliegen, du wirst fliegen ...</i>. En una frase normal va al final."
      },
      {
        q: "¿Qué frase usa correctamente el Futur I?",
        opts: [
          "Ich werde morgen nach Wien fahren.",
          "Ich werde morgen nach Wien fahre.",
          "Ich werde fahren morgen nach Wien."
        ],
        why: "<b>werden</b> en segunda posición e <b>infinitivo al final</b>. El verbo principal no se conjuga ni va en segunda posición: queda en infinitivo, al final."
      },
      {
        q: "¿Qué frase es correcta? (Mañana voy a Berlín.)",
        opts: [
          "Morgen ich fahre nach Berlin.",
          "Morgen fahre ich nach Berlin.",
          "Morgen werde fahre ich nach Berlin."
        ],
        why: "Con <i>morgen</i> en primera posición, el verbo conjugado se queda en segunda (<i>fahre</i>) y el sujeto lo sigue: <i>Morgen fahre ich ...</i>."
      },
      {
        q: "Completa: «Wir ___ im Sommer nach Spanien fliegen.» (werden, wir)",
        hint: "werden, wir",
        why: "<b>Werden</b>: en la primera persona del plural la forma coincide con el infinitivo, y <i>fliegen</i> queda en infinitivo al final."
      },
      {
        q: "Completa: «Nächste Woche ___ ich nach Hamburg.» (presente de fahren)",
        hint: "fahren, presente, ich",
        why: "<b>Fahre</b>: con <i>nächste Woche</i> basta el presente. <i>Nächste Woche</i> va en primera posición, el verbo en segunda."
      },
      {
        q: "Completa la frase (para «enviar» valen schicken y senden).",
        tr: "Mañana te enviaré una foto.",
        why: "<i>Morgen werde ich dir ein Foto schicken</i>: tras <i>morgen</i> el verbo conjugado (<i>werde</i>) va en segunda posición y el sujeto lo sigue; el infinitivo va al final. También vale <i>senden</i>."
      },
      {
        tr: "La semana que viene voy a Viena en tren, y en verano iremos a Suiza en avión.",
        why: "En <i>Nächste</i> la <b>st</b> final se queda en [st], no [ʃt]. En <i>werden</i> la <b>w</b> se lee [v]."
      },
      {
        tr: "Mañana voy a Hamburgo, y la semana que viene visitaré a mi amiga.",
        why: "En <i>Hamburg</i> la <b>g</b> final suena por lo general como una <b>k</b> sorda ([k]); en <i>besuchen</i> la <b>ch</b> tras <b>u</b> es [x] y el acento cae en la segunda sílaba, porque <i>be-</i> es átono."
      }
    ]
  },
  "lesson:a2-u02-l3": {
    theme: "En el hotel",
    title: "He reservado una habitación",
    objectives: [
      "decir que has reservado algo con el Perfekt",
      "formar el participio de reservieren y buchen",
      "elegir entre Sie y du en un hotel y usar fórmulas de cortesía"
    ],
    theory: [
      {
        h: "El Perfekt: reservar y llegar",
        p: "Para decir que ya has reservado se usa el <strong>Perfekt</strong>: auxiliar en segunda posición y <b>participio II</b> al final. <em>Ich habe ein Zimmer reserviert. Wir haben ein Doppelzimmer gebucht.</em> Los verbos en <em>-ieren</em> no llevan <em>ge-</em>: <em>reservieren → reserviert</em>. <em>Buchen</em> es regular: <em>gebucht</em>. En general, los verbos intransitivos de movimiento o de cambio de estado llevan <em>sein</em>, mientras que los transitivos y los reflexivos llevan <em>haben</em>. Aquí necesitas <em>ankommen</em> y <em>abfahren</em>: <em>Wir sind gestern Abend angekommen</em> (participio <em>angekommen</em>, con <em>ge-</em> en medio)."
      },
      {
        contrast: "El español forma el pretérito perfecto siempre con <em>haber</em>: «hemos llegado», «hemos reservado». El alemán usa <em>sein</em> con los verbos de movimiento o de cambio de estado: <em>Wir sind angekommen</em>, no «Wir haben angekommen». En el habla cotidiana el Perfekt alemán sirve para lo que el español reparte entre el pretérito perfecto y el indefinido: <em>Wir sind gestern Abend angekommen</em> = «llegamos ayer por la noche». El español usa <em>reservar</em> para ambos casos; el alemán tiene dos verbos, <em>reservieren</em> y <em>buchen</em>, a menudo intercambiables en un hotel. Para la cortesía el español usa <em>usted</em> (verbo en tercera persona del singular); el alemán usa <em>Sie</em>, que se conjuga como la tercera persona del <b>plural</b>: <em>Haben Sie ein Zimmer?</em>"
      },
      {
        trap: "No digas «Ich habe ein Zimmer reservieren» (infinitivo en lugar del participio) y no olvides el auxiliar correcto: <em>Wir sind angekommen</em>, no «Wir haben angekommen». En cuanto al registro: en la recepción se usa normalmente <em>Sie</em>, y <em>Könnten Sie mir bitte ...?</em> es más cortés que <em>Können Sie ...?</em>. Entre amigos o en un albergue entre jóvenes se suele usar <em>du</em>, pero en caso de duda elige <em>Sie</em>."
      },
      {
        tip: "Tres frases listas para el hotel: <em>Ich habe ein Zimmer reserviert.</em> <em>Haben Sie ein Zimmer für zwei Nächte frei?</em> <em>Könnten Sie mir bitte den Schlüssel geben?</em> El participio de los verbos en <em>-ieren</em> termina en <em>-iert</em> y no lleva <em>ge-</em>."
      }
    ],
    grammar: {
      title: "El Perfekt: reservieren, buchen, ankommen",
      note: "Auxiliar en segunda posición, participio II al final. <b>haben</b> con la mayoría de los verbos, <b>sein</b> en general con los verbos intransitivos de movimiento o de cambio de estado (aquí ankommen, abfahren), no con los transitivos ni los reflexivos. Los verbos en <b>-ieren</b> no llevan <i>ge-</i>.",
      table: {
        head: ["infinitivo", "participio II", "ejemplo"],
        rows: [
          ["reservieren", "reserviert", "Ich habe ein Zimmer reserviert."],
          ["buchen", "gebucht", "Wir haben ein Zimmer gebucht."],
          ["ankommen", "angekommen", "Wir sind gestern angekommen."],
          ["abfahren", "abgefahren", "Der Zug ist abgefahren."]
        ]
      },
      examples: [
        { tr: "He reservado una habitación.", note: "-ieren: reserviert, sin ge-" },
        { tr: "Hemos reservado una habitación doble para dos noches.", note: "haben + gebucht al final" },
        { tr: "Llegamos ayer por la noche.", note: "ankommen lleva sein" },
        { tr: "¿Tiene una reserva?", note: "forma de cortesía con Sie (como la tercera persona del plural)" },
        { tr: "¿Podría ayudarme, por favor?", note: "Könnten Sie: petición cortés" },
        { tr: "¿Ya has reservado un hotel?", note: "con du: Hast du ...?" }
      ]
    },
    vocab: [
      "el hotel",
      "la habitación",
      "la habitación doble",
      "la reserva",
      "la noche",
      "la llave",
      "el desayuno",
      "la recepción",
      "el huésped",
      "el equipaje",
      "reservar (una habitación, una mesa, un asiento)",
      "reservar (una habitación, un viaje)"
    ],
    exercises: [
      {
        q: "Completa: «Ich habe ein Zimmer ___.» (el participio de reservieren)",
        opts: ["gereserviert", "reserviert", "reservieren"],
        why: "Los verbos en <i>-ieren</i> no llevan <i>ge-</i>: <b>reserviert</b>. El infinitivo (<i>reservieren</i>) no ocupa el lugar del participio."
      },
      {
        q: "Completa: «Wir haben ein Doppelzimmer ___.» (el participio de buchen)",
        hint: "buchen es regular",
        why: "<b>Gebucht</b>: <i>ge-</i> + raíz + <i>-t</i>."
      },
      {
        q: "Completa: «Wir ___ gestern Abend im Hotel angekommen.» (¿haben o sein?)",
        hint: "ankommen es un verbo de movimiento",
        why: "<b>Sind</b>: <i>ankommen</i> indica un cambio de lugar y lleva <i>sein</i> en el Perfekt."
      },
      {
        q: "Completa: «Guten Abend, ___ Sie ein Zimmer frei?» (presente de haben, tratando de usted)",
        hint: "haben, presente, Sie",
        why: "<b>Haben</b>: el <i>Sie</i> de cortesía se conjuga como la tercera persona del plural."
      },
      {
        q: "Completa la frase (para la habitación valen reservieren y buchen).",
        tr: "He reservado una habitación. Llegamos ayer por la noche.",
        why: "<i>Ich habe ein Zimmer reserviert</i> (también <i>gebucht</i>) y <i>Wir sind gestern Abend angekommen</i>. Las dos frases llevan auxiliares distintos: <i>haben</i> y <i>sein</i>."
      },
      {
        q: "Une cada palabra con su significado.",
        pairs: ["la habitación doble", "la reserva", "la llave", "el desayuno"]
      },
      {
        q: "Traduce: «Hemos reservado una habitación doble para dos noches.»",
        why: "<i>Wir haben ein Doppelzimmer für zwei Nächte reserviert</i>. También vale <i>gebucht</i>; el orden de <i>für zwei Nächte</i> y <i>ein Doppelzimmer</i> puede cambiar, el participio queda al final."
      },
      {
        q: "En la recepción.",
        setting: "Llegas al hotel y hablas con el recepcionista.",
        lines: [
          { tr: "Buenas noches. ¿Tiene una reserva?" },
          { tr: "Responde que has reservado una habitación.", answerTr: "Sí, he reservado una habitación." },
          { tr: "¿Llevan mucho tiempo de viaje?" },
          { tr: "Responde que salisteis a las cinco.", answerTr: "Sí, salimos a las cinco." },
          { tr: "El desayuno es de siete a diez. ¿Tiene alguna otra pregunta?" },
          { tr: "Pide la llave con cortesía, tratando de usted.", answerTr: "Sí, ¿podría darme la llave, por favor?" }
        ]
      },
      {
        tr: "Buenas noches, he reservado una habitación doble para dos noches.",
        why: "En <i>Doppelzimmer</i> la <b>z</b> es [ts]; <i>Nächte</i> tiene una <b>ch</b> tras <b>ä</b>, es decir [ç], un soplo suave que el español no tiene. En <i>Abend</i> la <b>b</b> es sonora, porque no está al final de la sílaba."
      },
      {
        tr: "Hemos reservado una habitación y ayer por la noche llegamos al hotel.",
        why: "En <i>angekommen</i> la <b>n</b> y la <b>g</b> pertenecen a partes distintas (<i>an-ge-</i>) y se pronuncian [nɡ], no como una sola nasal [ŋ]; en <i>gebucht</i> la <b>ch</b> tras <b>u</b> es [x], raspada al fondo de la garganta."
      }
    ]
  },
  "lesson:a2-u02-l4": {
    theme: "Después de llegar",
    title: "Cuando haya llegado, te llamo",
    objectives: [
      "usar wenn + Perfekt para una acción futura ya terminada",
      "distinguir wenn (presente, futuro, repetición) de als (un hecho pasado único)",
      "combinar wenn con el presente o con el Futur I en la principal"
    ],
    theory: [
      {
        h: "Wenn + Perfekt: cuando haya llegado",
        p: "<strong>Wenn</strong> introduce un hecho del presente o del futuro. Cuando la acción de la subordinada estará <b>ya terminada</b> antes que la de la principal, en la subordinada se puede usar el <b>Perfekt</b> para destacar que la acción ya estará terminada; también es habitual el presente (<em>Wenn ich ankomme, rufe ich dich an</em>): <em>Wenn ich angekommen bin, rufe ich dich an</em> (cuando haya llegado, te llamo). El verbo conjugado (<em>bin</em>) va <b>al final</b>; la principal empieza con el verbo: <em>rufe ich</em>. En la principal puedes usar el presente (<em>rufe ich ... an</em>) o el Futur I (<em>werde ich ... anrufen</em>)."
      },
      {
        contrast: "El español usa el <b>subjuntivo</b> después de «cuando» para el futuro: «cuando llegue», «cuando haya llegado, te llamaré». El alemán no tiene subjuntivo aquí: usa el indicativo, y para marcar que la acción ya habrá terminado pone el <em>Perfekt</em> en la subordinada (<em>Wenn ich angekommen bin</em>) o, si no hace falta subrayarlo, el presente (<em>Wenn ich ankomme</em>). Existe un Futur II (<em>ich werde angekommen sein</em>), pero en las temporales referidas al futuro no hace falta. Para un hecho único del pasado el español sigue diciendo «cuando» («cuando llegamos ayer, llovía»), pero el alemán usa <em>als</em>: <em>Als wir gestern angekommen sind, hat es geregnet.</em> <em>Als</em> también va con el Präteritum: <em>Als wir gestern ankamen, regnete es.</em> Aquí lo practicamos con el Perfekt."
      },
      {
        trap: "<em>Als</em> y <em>wenn</em> no son intercambiables: con un hecho pasado único hace falta <b>als</b> (<em>Als ich gestern angekommen bin, ...</em>), con presente, futuro y hechos repetidos hace falta <b>wenn</b>. No escribas «Wenn ich bin angekommen»: tras <em>wenn</em> el verbo conjugado va al final, después del participio. Y no confundas <em>wenn</em> con <em>wann</em>, que es la palabra de la pregunta (<em>Wann kommst du an?</em>), la que en español lleva tilde: «¿cuándo?»."
      },
      {
        tip: "Construye la frase en dos piezas: la subordinada <em>Wenn ich angekommen bin,</em> con el verbo al final, luego una coma y la principal que empieza con el verbo, <em>rufe ich dich an</em>. Si la subordinada va después, el orden es normal: <em>Ich rufe dich an, wenn ich angekommen bin.</em>"
      }
    ],
    grammar: {
      title: "Wenn + Perfekt, als + Perfekt",
      note: "El verbo conjugado (el auxiliar) va <b>al final</b>, después del participio. Si la subordinada va primero, la principal empieza con el verbo.",
      table: {
        head: ["situación", "palabra y tiempo", "ejemplo"],
        rows: [
          ["futuro ya terminado", "wenn + Perfekt", "Wenn ich angekommen bin, rufe ich dich an."],
          ["presente o futuro", "wenn + presente", "Wenn ich Zeit habe, besuche ich dich."],
          ["hecho pasado único", "als + Perfekt", "Als wir gestern angekommen sind, hat es geregnet."]
        ]
      },
      examples: [
        { tr: "Cuando haya llegado, te llamo.", note: "wenn + Perfekt: auxiliar al final" },
        { tr: "Cuando hayamos encontrado el hotel, iremos a comer.", note: "gefunden haben, luego gehen wir" },
        { tr: "Cuando haya salido el tren, te llamaré.", note: "principal con Futur I: werde ich anrufen" },
        { tr: "Cuando tengo tiempo, vengo a verte.", note: "wenn + presente" },
        { tr: "Cuando llegamos ayer, llovía.", note: "als: un hecho pasado único" },
        { tr: "Te mando un mensaje cuando haya cambiado de tren.", note: "subordinada después: orden normal" }
      ]
    },
    vocab: [
      "llegar",
      "salir (un medio de transporte)",
      "cambiar (de medio, de tren)",
      "llamar por teléfono",
      "el retraso",
      "el mensaje",
      "la conexión (transbordo)",
      "la parada",
      "el taxi",
      "la conexión (trayecto)",
      "puntual",
      "más tarde"
    ],
    exercises: [
      {
        q: "¿Cómo se dice «Cuando haya llegado, te llamo»?",
        opts: [
          "Wenn ich angekommen bin, rufe ich dich an.",
          "Wenn ich ankomme bin, rufe ich dich an.",
          "Wenn ich bin angekommen, rufe ich dich an."
        ],
        why: "En la subordinada el participio va antes y el auxiliar al final: <i>angekommen bin</i>. La principal empieza con el verbo: <i>rufe ich ... an</i>."
      },
      {
        q: "¿Qué palabra? «___ ich gestern angekommen bin, hat es geregnet.»",
        opts: ["Als", "Wenn", "Wann"],
        why: "Un hecho pasado único: <b>als</b>. <i>Wenn</i> sirve para presente, futuro y hechos repetidos."
      },
      {
        q: "Completa: «Ich rufe dich an, ___ ich angekommen bin.» (cuando, usa wenn)",
        hint: "usa wenn",
        why: "<b>Wenn</b> para un hecho del futuro. El verbo conjugado (<i>bin</i>) va al final."
      },
      {
        q: "Completa: «Wenn ich angekommen ___, rufe ich dich an.» (sein, Perfekt, ich)",
        hint: "sein, presente, ich",
        why: "<b>Bin</b>: el auxiliar de <i>ankommen</i> es <i>sein</i>, y al final de la subordinada va el verbo conjugado."
      },
      {
        q: "Completa la frase.",
        tr: "Cuando hayamos encontrado el hotel, iremos a comer.",
        why: "<i>Wenn wir das Hotel gefunden haben, gehen wir essen</i>: en la subordinada <i>haben</i> cierra la frase; en la principal el verbo (<i>gehen</i>) viene justo después de la coma."
      },
      {
        q: "Une cada verbo con su significado.",
        pairs: ["llegar", "salir", "cambiar (de tren)", "llamar por teléfono"]
      },
      {
        q: "Ordena las palabras.",
        tr: "Cuando haya llegado, te llamo.",
        why: "Con estas piezas el orden es el de la subordinada primero: <i>Wenn ich angekommen bin, rufe ich dich an</i>. El verbo separable <i>anrufen</i> deja <i>an</i> al final de la principal."
      },
      {
        q: "Traduce: «Cuando haya llegado, te llamaré.»",
        why: "Basta el presente: <i>Wenn ich ankomme, rufe ich dich an</i>. También valen el Perfekt en la subordinada (<i>angekommen bin</i>) o el Futur I en la principal (<i>werde ich dich anrufen</i>), y el orden puede invertirse."
      },
      {
        tr: "Cuando haya llegado, te llamo, y luego vamos a comer juntos.",
        why: "En <i>angekommen</i> la <b>n</b> y la <b>g</b> pertenecen a partes distintas (<i>an-ge-</i>) y se pronuncian [nɡ], no como una sola nasal [ŋ]; en <i>zusammen</i> la <b>z</b> es [ts] y la <b>s</b> ante vocal suele ser sonora."
      },
      {
        tr: "Cuando haya llegado al hotel, te mando un mensaje.",
        why: "En <i>Nachricht</i> la <b>ch</b> es [x] tras <b>a</b> y [ç] tras <b>i</b>: dos sonidos distintos en la misma palabra, y la <b>sch</b> de <i>schicke</i> es [ʃ]. En <i>Hotel</i> el acento cae en la última sílaba."
      }
    ]
  },
  "lesson:a2-u02-test": {
    theme: "Verificación",
    title: "Verificación de la unidad 2",
    objectives: ["comprobar wohin? (nach, in, zu), el Futur I y wenn + Perfekt"],
    theory: [
      {
        p: "Diez preguntas sobre toda la unidad. Se aprueba con el 70 %. No mires las lecciones mientras respondes: si no recuerdas algo, es mejor volver a repasar."
      }
    ],
    exercises: [
      {
        tr: "El Futur I de kommen, todas las personas.",
        why: "<i>Ich werde kommen, du wirst kommen, er wird kommen, wir werden kommen, ihr werdet kommen, sie werden kommen</i>."
      },
      {
        q: "Completa: «Wir fahren ___ Italien.» (hacia un país sin artículo)",
        hint: "¿nach, in o zu?",
        why: "<b>Nach</b>: <i>Italien</i> no lleva artículo."
      },
      {
        q: "Completa: «Ich fahre ___ die Schweiz.» (hacia un país con artículo)",
        hint: "preposición + acusativo",
        why: "<b>In</b> + acusativo: <i>in die Schweiz</i>."
      },
      {
        q: "Completa: «Wir fahren ___ meiner Oma.» (hacia una persona)",
        hint: "preposición + dativo",
        why: "<b>Zu</b> + dativo: <i>zu meiner Oma</i>."
      },
      {
        q: "Completa: «Ich ___ morgen nach Wien fahren.» (Futur I, werden, ich)",
        hint: "werden, ich",
        why: "<b>Werde</b> en segunda posición, <i>fahren</i> en infinitivo al final."
      },
      {
        q: "Completa: «Ich rufe dich an, ___ ich im Hotel angekommen bin.» (cuando, usa wenn)",
        hint: "usa wenn",
        why: "<b>Wenn</b>: un hecho del futuro, con el verbo conjugado al final."
      },
      {
        q: "Completa: «Meine Tante wohnt ___ Schweiz.» (dónde vive: lugar)",
        opts: ["in der", "in die", "nach der"],
        why: "Lugar (wo?): <b>in</b> + dativo, y <i>die Schweiz</i> en dativo es <i>in der Schweiz</i>."
      },
      {
        q: "Traduce (verbo: fahren): «Mañana vamos a Viena.»",
        why: "<i>Morgen fahren wir nach Wien</i>: <i>nach</i> con una ciudad. El orden puede cambiar, el verbo queda en segunda posición."
      },
      {
        tr: "Mañana voy a Viena y, cuando haya llegado, te llamo.",
        why: "En <i>Wien</i> la <b>W</b> es [v] y <b>ie</b> es una <b>i</b> larga; en <i>angekommen</i> la <b>n</b> y la <b>g</b> pertenecen a partes distintas (<i>an-ge-</i>) y se pronuncian [nɡ], no como una sola nasal [ŋ]."
      },
      {
        tr: "En verano iremos a Suiza, y luego voy a casa de mi tía.",
        why: "En <i>Schweiz</i> la <b>sch</b> es [ʃ], <b>w</b> es [v] y <b>ei</b> suena [aɪ]."
      }
    ]
  },
  "unit:a2-u03": {
    title: "Lo veo, le ayudo",
    grammarNote: "pronombres de acusativo y de dativo · verbos con dativo (helfen, gefallen, gehören, danken) · orden de los objetos · imperativo con du e ihr · mal y doch"
  },
  "lesson:a2-u03-l1": {
    theme: "Hablar de personas",
    title: "ihn, sie, es",
    objectives: [
      "sustituir un nombre por mich, dich, ihn, sie, es, uns, euch, sie, Sie",
      "elegir el pronombre según el género del nombre alemán",
      "colocar el pronombre después del verbo en la oración principal"
    ],
    theory: [
      {
        h: "El pronombre de acusativo en lugar del nombre",
        p: "Para no repetir un nombre que es <b>objeto directo</b> se usa el pronombre de acusativo: <em>mich, dich, ihn, sie, es, uns, euch, sie, Sie</em>. Respecto al nominativo cambian <em>ich, du, er, wir, ihr</em>; <em>sie</em>, <em>es</em> y la forma de cortesía <em>Sie</em> se quedan igual. El pronombre sigue el <b>género del nombre alemán</b>, también para las cosas: <em>der Bruder → ihn</em>, <em>die Kollegin → sie</em>, <em>das Kind → es</em>, <em>der Schlüssel → ihn</em>. En la oración principal con el sujeto en primera posición el pronombre va justo después del verbo conjugado: <em>Ich kenne ihn gut.</em> Si la frase empieza por otro elemento, y el sujeto es un pronombre, el pronombre de objeto lo sigue: <em>Morgen sehe ich ihn.</em> Si el sujeto es un nombre, el pronombre de objeto suele ir antes: <em>Morgen sieht ihn mein Bruder.</em> También es correcto <em>Morgen sieht mein Bruder ihn</em>. En una subordinada con sujeto pronominal va después de la conjunción y del sujeto, antes del verbo final: <em>..., weil ich ihn gut kenne.</em> Con un sujeto nominal valen los dos órdenes: <em>..., weil ihn mein Bruder kennt</em> o <em>..., weil mein Bruder ihn kennt.</em>"
      },
      {
        contrast: "En español el pronombre átono va <b>antes</b> del verbo (<em>lo veo, la conozco</em>); en alemán es una palabra aparte. En una oración principal con el sujeto en primera posición, el pronombre suele ir después del verbo conjugado: <em>Ich sehe ihn.</em> También puede aparecer al principio: <em>Ihn sehe ich morgen.</em> En una subordinada: <em>..., weil ich ihn sehe.</em> Además, el género sigue la palabra alemana, no la española, y las dos lenguas no siempre coinciden: <em>la llave</em> es femenina (<em>la veo</em>), pero <em>der Schlüssel</em> es masculino: <em>Ich sehe ihn nicht</em>. Al revés, <em>el periódico</em> es masculino (<em>lo leo</em>), pero <em>die Zeitung</em> es femenina: <em>Ich lese sie</em>. El español distingue «lo» de «le» (acusativo y dativo), y el alemán distingue <em>ihn</em> de <em>ihm</em>, con la misma idea."
      },
      {
        trap: "<em>Sie</em> puede significar «ella», «ellos», «la», «las» o «los»: lo entiendes por el verbo y el contexto (<em>Ich sehe sie</em>, solo, es ambiguo). Dentro de la frase, la inicial mayúscula marca la forma de cortesía: <em>Ich kenne Sie</em> («lo conozco a usted»). Al principio de la frase la mayúscula siempre está, así que deciden el contexto y la concordancia del verbo (<em>Sie kommt</em> = ella viene, <em>Sie kommen</em> = ellos vienen o usted viene). Y no confundas <em>ihn</em> (acusativo) con <em>ihm</em> (dativo): <em>Ich sehe ihm</em> es incorrecto, porque <em>sehen</em> pide el acusativo."
      },
      {
        tip: "Antes de escribir el pronombre, repite el nombre alemán con su artículo: <em>der → ihn</em>, <em>die → sie</em>, <em>das → es</em>, <em>die</em> (plural) <em>→ sie</em>. El pronombre para una persona es igual que el de una cosa del mismo género."
      }
    ],
    grammar: {
      title: "Los pronombres de acusativo",
      note: "Sustituyen un objeto directo ya conocido. El género y el número siguen el nombre alemán: <b>der → ihn</b>, <b>die → sie</b>, <b>das → es</b>.",
      table: {
        head: ["nominativo", "acusativo", "ejemplo"],
        rows: [
          ["ich", "mich", "Er sieht mich."],
          ["du", "dich", "Ich kenne dich."],
          ["er", "ihn", "Wir sehen ihn."],
          ["sie", "sie", "Ich treffe sie."],
          ["es", "es", "Ich nehme es."],
          ["wir", "uns", "Sie laden uns ein."],
          ["ihr", "euch", "Ich besuche euch."],
          ["sie, Sie", "sie, Sie", "Wir kennen Sie."]
        ]
      },
      examples: [
        { tr: "Lo conozco bien.", note: "ihn para un nombre masculino (der Bruder)" },
        { tr: "Mañana nos encontramos con ella.", note: "sie: por ejemplo die Kollegin" },
        { tr: "Él no me ve.", note: "mich: acusativo de ich" },
        { tr: "Esta noche te llamo.", note: "dich; anrufen es separable, an va al final" },
        { tr: "El niño está enfermo. Hoy voy a visitarlo.", note: "es para das Kind, neutro" },
        { tr: "Nos invitan a la fiesta.", note: "uns; einladen es separable, ein va al final" }
      ]
    },
    vocab: [
      "el hermano",
      "la hermana",
      "el vecino",
      "la compañera de trabajo",
      "el jefe",
      "el niño",
      "la llave",
      "el periódico",
      "conocer (a una persona)",
      "ver",
      "encontrarse con",
      "invitar"
    ],
    exercises: [
      {
        q: "Hablas de tu hermano: «Lo veo a menudo.» ¿Qué frase es correcta?",
        opts: ["Ich sehe er oft.", "Ich sehe ihn oft.", "Ich sehe ihm oft."],
        why: "<b>Ihn</b>: <i>sehen</i> pide el acusativo y para <i>der Bruder</i> el pronombre es <i>ihn</i>. <i>Er</i> es el nominativo, <i>ihm</i> el dativo."
      },
      {
        q: "Completa: «Das Kind ist krank. Ich besuche ___ heute.»",
        opts: ["ihn", "sie", "es"],
        why: "<i>Das Kind</i> es neutro, así que <b>es</b>. El género sigue la palabra alemana, no el sexo de la persona."
      },
      {
        q: "¿Qué frases son correctas? (más de una)",
        opts: [
          "Ich sehe dich morgen.",
          "Wir laden sie zur Party ein.",
          "Er kennt mich gut.",
          "Ich treffe ihm heute."
        ],
        why: "Las tres primeras usan el pronombre de acusativo correcto. <i>Ihm</i> es un dativo y <i>treffen</i> pide el acusativo: <i>Ich treffe ihn heute.</i>"
      },
      {
        q: "Completa: «Das ist mein Bruder. Ich kenne ___ sehr gut.» (er, acusativo)",
        hint: "pronombre de acusativo",
        why: "<b>Ihn</b>: <i>kennen</i> pide el acusativo y <i>der Bruder</i> es masculino."
      },
      {
        q: "Completa: «Wo ist Lisa? Ich sehe ___ nicht.» (Lisa)",
        hint: "pronombre de acusativo",
        why: "<b>Sie</b>: el acusativo de <i>sie</i> (ella) es igual que el nominativo."
      },
      {
        q: "Completa la frase (segundo hueco: ich, acusativo).",
        tr: "Mi compañera de trabajo es simpática. La veo a menudo y a veces me invita.",
        why: "<i>Sie</i> es el acusativo de <i>die Kollegin</i>; <i>mich</i> es el acusativo de <i>ich</i>. <i>Einladen</i> es separable: <i>ein</i> va al final."
      },
      {
        q: "Ordena las palabras.",
        tr: "Hoy me encuentro con ella en el café.",
        why: "El verbo se queda en segunda posición y el pronombre <i>sie</i> sigue al sujeto <i>ich</i>. En las variantes con <i>sie</i> en el campo central, este sigue a <i>ich</i>; también puede ir en primer lugar para destacar a la persona: <i>Sie treffe ich heute im Café</i>."
      },
      {
        q: "Traduce (hablas de tu hermano): «Lo veo mañana.»",
        why: "<i>Ich sehe ihn morgen</i>: el pronombre sigue al verbo. Con <i>morgen</i> al principio el verbo se queda en segunda posición y el sujeto lo sigue (<i>Morgen sehe ich ihn</i>)."
      },
      {
        tr: "¿Conoces a mi hermano? Lo veo todos los días, y él me visita a menudo.",
        why: "En <i>ihn</i> y <i>sehe</i> la <b>h</b> no se pronuncia y la vocal anterior es larga; en <i>besucht</i> el acento cae en <i>-sucht</i> y la <b>ch</b> tras <b>u</b> es [x]."
      },
      {
        tr: "Mi compañera de trabajo es simpática. La veo a menudo y a veces me invita.",
        why: "En <i>sie</i> la <b>s</b> es sonora [z] y <b>ie</b> es una <b>i</b> larga; en <i>manchmal</i> la <b>ch</b> tras la <b>n</b> se lee [ç]."
      }
    ]
  },
  "lesson:a2-u03-l2": {
    theme: "Ayuda y gustos",
    title: "Te ayudo, me gusta",
    objectives: [
      "usar mir, dir, ihm, ihr, uns, euch, ihnen",
      "reconocer los verbos que piden dativo: helfen, gefallen, gehören, danken",
      "decir que algo gusta o pertenece a alguien"
    ],
    theory: [
      {
        h: "El dativo con los pronombres y con algunos verbos",
        p: "El dativo responde a la pregunta <em>¿a quién?</em>. Los pronombres son <em>mir, dir, ihm, ihr, ihm, uns, euch, ihnen</em> (cortesía: <em>Ihnen</em>). Algunos verbos piden el dativo como objeto, aunque en español el objeto parezca directo: <em>helfen</em> (<em>Ich helfe dir</em>), <em>danken</em> (<em>Ich danke dir</em>), <em>antworten</em> (<em>Er antwortet mir</em>), <em>gehören</em> (<em>Das Handy gehört mir</em>) y <em>gefallen</em> (<em>Die Jacke gefällt mir</em>). Con <em>gefallen</em> la cosa que gusta es el sujeto y la persona va en dativo: si la cosa es plural, el verbo la sigue (<em>Die Schuhe gefallen mir</em>)."
      },
      {
        contrast: "<em>Gefallen</em> funciona como el español <em>gustar</em>: «Me gusta la chaqueta» y <em>Die Jacke gefällt mir</em> tienen la misma estructura, con la cosa como sujeto y la persona en dativo («me», <em>mir</em>). Con <em>danken</em> el español usa «le» (dativo), igual que el alemán: «le agradezco», <em>Ich danke ihm</em>. En español se usan «lo/la ayudo» y también «le ayudo», según la variedad; en alemán <em>helfen</em> exige siempre el dativo: <em>Ich helfe ihm/ihr</em>. La diferencia está en el acusativo: en español <em>ver</em> y <em>conocer</em> piden «lo/la» («lo veo»), y el alemán, <em>ihn/sie/es</em>. Con <em>gehören</em> el español dice «me pertenece», con dativo, como el alemán: <em>Das gehört mir</em>."
      },
      {
        trap: "Con estos verbos el acusativo es un error: <em>Ich helfe dich</em> e <em>Ich danke ihn</em> son incorrectos. Ojo también con <em>ihr</em>: como nominativo significa «vosotros» (<em>Ihr helft mir</em>), como dativo «a ella» (<em>Ich helfe ihr</em>). El verbo y el caso te dicen cuál es. <em>Ihm</em> sirve para <em>er</em> y para <em>es</em>: <em>Ich helfe dem Kind → Ich helfe ihm</em>."
      },
      {
        tip: "Aprende estos verbos junto con el dativo: <em>helfen + dativo</em>, <em>gefallen + dativo</em>, <em>gehören + dativo</em>, <em>danken + dativo</em>. Cuando el verbo es uno de estos, el pronombre es <em>mir, dir, ihm, ihr, uns, euch, ihnen</em>."
      }
    ],
    grammar: {
      title: "Los pronombres de dativo y los verbos con dativo",
      note: "El dativo es el caso de la persona que recibe algo o ayuda, o a quien algo le gusta o le pertenece, según el verbo. <b>helfen, danken, antworten, gehören, gefallen</b> piden el dativo.",
      table: {
        head: ["nominativo", "dativo", "ejemplo"],
        rows: [
          ["ich", "mir", "Das gehört mir."],
          ["du", "dir", "Ich helfe dir."],
          ["er", "ihm", "Wir danken ihm."],
          ["sie", "ihr", "Das Buch gefällt ihr."],
          ["es", "ihm", "Ich helfe ihm."],
          ["wir", "uns", "Er hilft uns."],
          ["ihr", "euch", "Ich danke euch."],
          ["sie", "ihnen", "Ich antworte ihnen."],
          ["Sie", "Ihnen", "Ich danke Ihnen."]
        ]
      },
      examples: [
        { tr: "Te ayudo con gusto.", note: "helfen + dativo: dir" },
        { tr: "El móvil es mío.", note: "gehören + dativo: mir" },
        { tr: "Me gusta mucho la chaqueta.", note: "gefallen: la cosa es el sujeto, la persona va en dativo" },
        { tr: "Le damos las gracias por el regalo.", note: "danken + dativo: ihm" },
        { tr: "Él no me responde.", note: "antworten + dativo: mir" },
        { tr: "Mi hermana necesita ayuda. La ayudo.", note: "helfen + dativo: ihr" }
      ]
    },
    vocab: [
      "el regalo",
      "la ayuda",
      "la mochila",
      "el móvil",
      "la chaqueta",
      "el libro",
      "ayudar",
      "gustar",
      "pertenecer",
      "dar las gracias",
      "responder",
      "con gusto"
    ],
    exercises: [
      {
        q: "Dices de tu hermano: «Le ayudo.» ¿Qué frase es correcta?",
        opts: ["Ich helfe ihn.", "Ich helfe ihm.", "Ich helfe er."],
        why: "<b>Ihm</b>: <i>helfen</i> pide el dativo. <i>Ihn</i> es un acusativo."
      },
      {
        q: "¿Cómo se dice «Me gusta la chaqueta»?",
        opts: ["Die Jacke gefällt mich.", "Die Jacke gefällt mir.", "Ich gefalle die Jacke."],
        why: "La cosa es el sujeto (<i>die Jacke</i>) y la persona va en dativo (<i>mir</i>), como en «me gusta»."
      },
      {
        q: "¿Qué verbos piden el dativo? (más de uno)",
        opts: ["helfen", "gehören", "sehen", "danken"],
        why: "<i>Helfen</i>, <i>gehören</i> y <i>danken</i> piden el dativo. <i>Sehen</i> pide el acusativo: <i>Ich sehe ihn.</i>"
      },
      {
        q: "Completa: «Das ist mein Handy. Es gehört ___.» (ich, dativo)",
        hint: "pronombre de dativo",
        why: "<b>Mir</b>: <i>gehören</i> pide el dativo."
      },
      {
        q: "Completa: «Meine Schwester braucht Hilfe. Ich helfe ___ gern.» (sie: mi hermana)",
        hint: "pronombre de dativo",
        why: "<b>Ihr</b>: dativo de <i>sie</i> en singular. <i>Helfen</i> pide el dativo."
      },
      {
        q: "Completa la frase.",
        tr: "¡Gracias, Anna! Te agradezco tu ayuda.",
        why: "<i>Ich danke dir</i>: <i>danken</i> pide el dativo, así que <b>dir</b> y no <i>dich</i>."
      },
      {
        q: "Ordena las palabras.",
        tr: "Me gusta mucho la chaqueta.",
        why: "Con la cosa como sujeto: <i>Die Jacke gefällt mir sehr</i>. También vale <i>Mir gefällt die Jacke sehr</i>, con el dativo al principio."
      },
      {
        q: "Traduce (a un amigo): «Te ayudo con gusto.»",
        why: "<i>Ich helfe dir gern</i>: <i>helfen</i> pide el dativo (<i>dir</i>). También son correctas las variantes con <i>gerne</i> y con <i>gern</i> al principio."
      },
      {
        tr: "¿Puedes ayudarme, por favor? Te lo agradezco, es muy amable de tu parte.",
        why: "En <i>helfen</i> la <b>e</b> es breve; en <i>danke</i> la <b>n</b> ante <b>k</b> se lee [ŋ] y la <b>a</b> es breve."
      },
      {
        tr: "La mochila es mía, y me gusta mucho la chaqueta.",
        why: "En <i>gehört</i> el acento cae en <i>-hört</i>, donde la <b>ö</b> es larga ([øː]); en <i>Rucksack</i> las dos vocales son breves: <i>Ruck</i> + <i>Sack</i>, y cada <b>ck</b> señala la vocal breve que la precede."
      }
    ]
  },
  "lesson:a2-u03-l3": {
    theme: "Regalos y favores",
    title: "Se lo doy",
    objectives: [
      "usar dativo y acusativo en la misma frase",
      "colocar en el orden habitual dos nombres, un pronombre y un nombre, dos pronombres",
      "usar geben, schenken, zeigen, schicken, leihen, erklären"
    ],
    theory: [
      {
        h: "Dos objetos: dativo y acusativo",
        p: "Con verbos como <em>geben, schenken, zeigen, schicken, leihen, erklären</em> hay dos objetos: la persona (dativo) y la cosa (acusativo). El orden habitual, en una frase neutra, es este. Con <b>dos nombres</b> el dativo va antes del acusativo: <em>Ich schenke meiner Schwester ein Buch.</em> Con <b>un pronombre y un nombre</b> el pronombre va primero, sea cual sea su caso: <em>Ich gebe ihm das Buch. Ich gebe es meinem Bruder.</em> Con <b>dos pronombres</b> el acusativo va antes del dativo: <em>Ich gebe es ihm.</em> Son órdenes habituales, no reglas absolutas: un sustantivo o un pronombre tónico puede ir en primera posición para destacarlo (<em>Das gebe ich ihm</em>), pero el pronombre átono <em>es</em> no abre la frase como complemento: no <s>Es gebe ich ihm</s>."
      },
      {
        contrast: "En español los dos pronombres se juntan delante del verbo y el dativo va <b>primero</b>: <em>se lo doy</em>, <em>te lo doy</em> (dativo + acusativo). En alemán van después del verbo y el orden es el inverso, acusativo + dativo: <em>Ich gebe es ihm</em>, <em>Ich gebe es dir</em>. Si traduces por piezas, recoloca el orden: primero <em>es</em> (el «lo»), luego <em>dir</em> o <em>ihm</em> (el «te» o el «le»). Además, el «se» de «se lo doy» es la variante de «le/les» ante lo/la/los/las; corresponde al destinatario que el alemán expresa con <em>ihm</em>, <em>ihr</em> o <em>ihnen</em> (<em>Ihnen</em> en el trato de cortesía)."
      },
      {
        trap: "En el orden habitual <em>Ich gebe ihm es</em> suena mal: con dos pronombres va primero el acusativo, <em>Ich gebe es ihm</em>. Elige el género por la palabra alemana: <em>das Foto → es</em>, <em>der Brief → ihn</em>, <em>die Postkarte → sie</em>. Con un nombre masculino los dos pronombres son distintos: <em>Ich gebe ihn ihm</em> (el primero es acusativo, el segundo dativo)."
      },
      {
        tip: "Primero localiza la cosa y pon su pronombre (<em>es, ihn, sie</em>) justo después del verbo; luego añade la persona (<em>mir, dir, ihm, ihr</em>). Con nombres, en cambio, empieza por la persona: <em>Ich zeige meiner Mutter das Foto.</em>"
      }
    ],
    grammar: {
      title: "El orden del dativo y el acusativo",
      note: "En una frase neutra: dos nombres, <b>dativo primero</b>; un pronombre y un nombre, <b>el pronombre primero</b>; dos pronombres, <b>acusativo primero</b>.",
      table: {
        head: ["objetos", "orden habitual", "ejemplo"],
        rows: [
          ["dos nombres", "dativo, acusativo", "Ich schenke meiner Schwester ein Buch."],
          ["pronombre + nombre", "el pronombre primero", "Ich gebe ihm das Buch."],
          ["nombre + pronombre", "el pronombre primero", "Ich gebe es meinem Bruder."],
          ["dos pronombres", "acusativo, dativo", "Ich gebe es ihm."]
        ]
      },
      examples: [
        { tr: "Se lo doy.", note: "dos pronombres: es (acusativo) antes de ihm (dativo)" },
        { tr: "Te enseño la foto.", note: "pronombre de dativo antes del nombre" },
        { tr: "Le regalo un libro a mi hermana.", note: "dos nombres: dativo antes del acusativo" },
        { tr: "Me lo manda mañana.", note: "es mir: acusativo antes del dativo" },
        { tr: "Le prestamos la bicicleta.", note: "pronombre de dativo antes del nombre" },
        { tr: "Te lo explico luego.", note: "es dir: acusativo antes del dativo" }
      ]
    },
    vocab: [
      "la foto",
      "la carta",
      "el paquete",
      "el dinero",
      "la postal",
      "la bicicleta",
      "dar",
      "regalar",
      "enseñar, mostrar",
      "enviar, mandar",
      "prestar",
      "explicar"
    ],
    exercises: [
      {
        q: "Dices: «Se lo doy» (el libro, a mi hermano). ¿Qué frase tiene el orden habitual?",
        opts: ["Ich gebe ihm es.", "Ich gebe es ihm.", "Ich gebe ihm ihn."],
        why: "Con dos pronombres el acusativo va antes del dativo: <i>es ihm</i>. <i>Das Buch</i> es neutro, así que <i>es</i>."
      },
      {
        q: "¿Qué frase tiene el orden neutro con dos nombres?",
        opts: [
          "Ich schenke ein Buch meiner Schwester.",
          "Ich schenke meiner Schwester ein Buch.",
          "Ich meiner Schwester schenke ein Buch."
        ],
        why: "Con dos nombres primero el dativo (la persona), luego el acusativo (la cosa). La primera frase no es incorrecta, pero lleva a la persona al final para destacarla: no es el orden neutro. La tercera rompe la segunda posición del verbo."
      },
      {
        q: "¿Qué frases tienen un orden habitual? (más de una)",
        opts: [
          "Ich gebe es ihm.",
          "Ich zeige dir das Foto.",
          "Ich schicke dem Chef es.",
          "Ich schenke ihm einen Schlüssel."
        ],
        why: "El pronombre va antes del nombre (<i>dir das Foto</i>, <i>ihm einen Schlüssel</i>) y con dos pronombres vale <i>es ihm</i>. En «Ich schicke dem Chef es» el nombre va antes del pronombre: el orden habitual es <i>Ich schicke es dem Chef</i>."
      },
      {
        q: "Completa: «Wo ist das Foto? Ich zeige ___ dir gleich.» (das Foto)",
        hint: "pronombre de acusativo",
        why: "<b>Es</b>: <i>das Foto</i> es neutro, y el acusativo <i>es</i> va antes del dativo <i>dir</i>."
      },
      {
        q: "Completa: «Der Schlüssel gehört Paul. Ich gebe ihn ___ heute.» (Paul: er)",
        hint: "pronombre de dativo",
        why: "<b>Ihm</b>: dativo de <i>er</i>. El acusativo <i>ihn</i> (la cosa, <i>der Schlüssel</i>) va primero."
      },
      {
        q: "Completa la frase (segundo hueco: du, dativo).",
        tr: "La carta está lista. Mañana te la mando.",
        why: "<i>Der Brief</i> es masculino: <b>ihn</b> (acusativo) va antes de <b>dir</b> (dativo). En español «la carta» es femenina («te la») y el dativo va primero: el orden es el opuesto."
      },
      {
        q: "Une cada frase con su traducción.",
        pairs: ["Se lo doy.", "Le doy el libro.", "Se lo doy a mi hermano.", "Te lo doy."]
      },
      {
        q: "Traduce: «Mañana te lo doy.» (el libro: usa el pronombre es)",
        why: "<i>Ich gebe es dir morgen</i>: primero el acusativo <i>es</i>, luego el dativo <i>dir</i>. Con <i>morgen</i> al principio el verbo queda en segunda posición: <i>Morgen gebe ich es dir</i>."
      },
      {
        tr: "He encontrado tu foto. Te la enseño enseguida, y mañana se la mando a tu hermana.",
        why: "En <i>zeigen</i> la <b>z</b> es [ts] y <b>ei</b> suena [aɪ]; en <i>gleich</i> la <b>ch</b> final tras <b>ei</b> se lee [ç]."
      },
      {
        tr: "La llave es de mi hermano. Mañana se la doy.",
        why: "En <i>Schlüssel</i> la <b>sch</b> es [ʃ] y la <b>ü</b> es breve; en <i>ihn</i> e <i>ihm</i> la <b>h</b> no se pronuncia y la <b>i</b> es larga."
      }
    ]
  },
  "lesson:a2-u03-l4": {
    theme: "Instrucciones y consejos",
    title: "¡Dime! ¡Llámame!",
    objectives: [
      "formar el imperativo con du y con ihr",
      "recordar los verbos con cambio de raíz y sein",
      "usar mal y doch para cambiar el tono de una petición"
    ],
    theory: [
      {
        h: "El imperativo con du y con ihr",
        p: "Para decirle a una persona a la que tuteas que haga algo se usa la <b>raíz del verbo</b>, sin <em>du</em>: <em>Komm! Ruf mich an! Mach das Fenster zu!</em> En los verbos regulares la <b>-e</b> del imperativo singular es facultativa (<em>Mach!</em> / <em>Mache!</em>); es obligatoria cuando la raíz termina en <em>-t</em> o <em>-d</em> y en casos parecidos: <em>Warte! Arbeite! Antworte! Finde!</em> Los verbos fuertes con cambio <em>e → i/ie</em> usan la raíz cambiada y no llevan <em>-e</em>: <em>Nimm! Lies! Gib! Sprich!</em> Sin Umlaut: <em>Fahr!</em>, no <em>Fähr!</em> <em>Sein</em> es irregular: <em>Sei!</em> Para varias personas (<em>ihr</em>) el imperativo tiene la forma de <em>ihr</em> sin pronombre: <em>Kommt! Wartet! Ruft an!</em> El verbo separable deja el prefijo al final: <em>Ruf mich an!</em>"
      },
      {
        h: "mal y doch: palabras pequeñas que cambian el tono",
        p: "<em>Mal</em> y <em>doch</em> son <b>partículas modales</b>: no cambian la gramática, cambian <b>cómo suena</b> la frase. <em>Komm mal her!</em> es más ligero que <em>Komm her!</em>, como «anda, ven un momento». <em>Ruf mich doch an!</em> es una invitación amistosa o una insistencia: «llámame, anda», «venga, llámame». Van en el campo central, normalmente después del pronombre: <em>Ruf mich doch mal an!</em> No tienen una traducción fija, y aquí <em>mal</em> no significa «a veces»."
      },
      {
        contrast: "El español pega el pronombre al imperativo (<em>llámame, dime, ayúdame</em>); en alemán el pronombre es una palabra aparte después del verbo: <em>Ruf mich an! Sag es mir! Hilf mir!</em> (<em>Sag es mir!</em> equivale a «¡Dímelo!» o «¡Dime!») Para el negativo con tú el español usa el subjuntivo, con otra forma del verbo («ven» pero «no vengas»); el alemán usa el mismo imperativo con <em>nicht</em>: <em>Komm nicht zu spät!</em> Para varias personas el alemán tiene <em>ihr</em> (como «vosotros» en España), con la forma <em>Kommt!</em> A las partículas modales el español suele responder con el tono o con palabras como «anda», «venga», «pues», «un momento»; el alemán las tiene como categoría propia."
      },
      {
        trap: "No añadas <em>-st</em>: <em>Kommst!</em> no es un imperativo. Con los verbos fuertes con <em>e → i/ie</em> no digas <em>Lese!</em> sino <em>Lies!</em>, y no <em>Nehm!</em> sino <em>Nimm!</em> Con <em>sein</em> la forma es <em>Sei vorsichtig!</em> No pienses que <em>mal</em> y <em>doch</em> son palabras vacías: sin ellas la frase sigue siendo correcta, pero suena más seca."
      },
      {
        tip: "Cuando das una orden o un consejo a un amigo, con un verbo regular: parte del infinitivo, quita <em>-en</em>, añade <em>-e</em> si la raíz termina en <em>-t</em> o <em>-d</em>, y pon <em>mal</em> o <em>doch</em> para suavizar: <em>Warte mal! Komm doch mit!</em> Los verbos con cambio vocálico y <em>sein</em> son excepciones: <em>Nimm! Lies! Sei!</em>"
      }
    ],
    grammar: {
      title: "El imperativo con du e ihr; mal y doch",
      note: "Con <b>du</b> la raíz sin pronombre (<i>Komm!</i>), con <b>ihr</b> la forma de ihr (<i>Kommt!</i>). <b>mal</b> y <b>doch</b> suavizan la petición o la hacen más amistosa.",
      table: {
        head: ["infinitivo", "du", "ihr"],
        rows: [
          ["kommen", "Komm!", "Kommt!"],
          ["warten", "Warte!", "Wartet!"],
          ["anrufen", "Ruf an!", "Ruft an!"],
          ["nehmen", "Nimm!", "Nehmt!"],
          ["lesen", "Lies!", "Lest!"],
          ["sein", "Sei!", "Seid!"]
        ]
      },
      examples: [
        { tr: "¡Ven un momento!", note: "mal hace la petición más ligera" },
        { tr: "¡Espera un momento!", note: "raíz en -t: se añade -e" },
        { tr: "¡Llámame, anda!", note: "doch: invitación amistosa; an al final" },
        { tr: "¡Tómate un descanso, anda!", note: "machen: raíz Mach, sin -en" },
        { tr: "Dime, ¿tienes tiempo?", note: "Sag mal: abre una pregunta en tono coloquial" },
        { tr: "¡Tened cuidado, por favor!", note: "ihr: forma de sein, Seid" }
      ]
    },
    vocab: [
      "el consejo",
      "la idea",
      "el momento",
      "la pausa, el descanso",
      "llamar (por teléfono)",
      "esperar",
      "tomar, coger",
      "leer",
      "mal (partícula modal)",
      "doch (partícula modal)",
      "prudente, cuidadoso",
      "por favor"
    ],
    exercises: [
      {
        q: "Le dices a un amigo: «¡Espera un momento!» ¿Qué frase es correcta?",
        opts: ["Warte einen Moment!", "Wartest einen Moment!", "Warten einen Moment!"],
        why: "Con <i>du</i> el imperativo es la raíz sin pronombre; la raíz termina en <i>-t</i>, así que se añade <b>-e</b>: <i>Warte!</i>"
      },
      {
        q: "Le dices a un amigo: «¡Lee esto!» (lesen)",
        opts: ["Lese das!", "Lies das!", "Les das!"],
        why: "<i>Lesen</i> es un verbo fuerte con <i>e → ie</i>: en el imperativo cambia la raíz (<b>Lies!</b>) y no lleva <i>-e</i>."
      },
      {
        q: "Completa: «___ bitte einen Moment, Kinder!» (warten, ihr)",
        hint: "warten, imperativo ihr",
        why: "El imperativo con <i>ihr</i> tiene la forma de <i>ihr</i> sin pronombre: <b>Wartet!</b>"
      },
      {
        q: "Completa: «Ruf mich doch ___!» (anrufen: llámame, anda)",
        hint: "el prefijo del verbo separable",
        why: "<i>Anrufen</i> es separable: el prefijo <b>an</b> va al final y el verbo queda en primera posición."
      },
      {
        q: "Completa: «___ vorsichtig!» (sein, du)",
        hint: "sein, imperativo du",
        why: "<b>Sei</b>: el imperativo de <i>sein</i> es irregular (<i>sei, seid</i>)."
      },
      {
        q: "Completa la frase (valen tanto doch como mal).",
        tr: "¿Estás cansado? Entonces tómate un descanso, anda.",
        why: "<b>Mach</b>: la raíz de <i>machen</i> es <i>mach-</i>, sin <i>-en</i> y sin <i>du</i>. Valen <i>doch</i> (invitación amistosa) y <i>mal</i> (tono más ligero)."
      },
      {
        q: "Ordena las palabras.",
        tr: "¡Venga, llámame!",
        why: "El verbo abre la frase, el pronombre lo sigue, las partículas <i>doch mal</i> van antes del prefijo <i>an</i> al final."
      },
      {
        q: "Traduce (a un amigo, usa doch): «¡Llámame, anda!»",
        why: "<i>Ruf mich doch an!</i>: imperativo sin <i>du</i>, pronombre después del verbo, prefijo <i>an</i> al final; <i>doch</i> hace la invitación más amistosa. También vale con <i>mal</i> además."
      },
      {
        tr: "Dime, ¿mañana tienes tiempo? Entonces llámame, anda, y vamos a comer juntos.",
        why: "En <i>Sag</i> la <b>g</b> final se lee por lo general [k]; en <i>zusammen</i> la <b>z</b> es [ts] y la <b>s</b> ante vocal suele ser sonora."
      },
      {
        tr: "Pásate por aquí un día, venga, y tómate un momento.",
        why: "En <i>vorbei</i> la <b>v</b> se lee [f]; en <i>Moment</i> el acento cae en la segunda sílaba."
      }
    ]
  },
  "lesson:a2-u03-test": {
    theme: "Verificación",
    title: "Verificación de la unidad 3",
    objectives: [
      "comprobar los pronombres de acusativo y de dativo, los verbos con dativo y el orden de los objetos"
    ],
    theory: [
      {
        p: "Diez preguntas sobre los pronombres de acusativo y de dativo, sobre los verbos con dativo y sobre el orden de los objetos. Se aprueba con el 70 %. No mires las lecciones mientras respondes: si no recuerdas algo, es mejor volver a repasar."
      }
    ],
    exercises: [
      {
        q: "Completa: «Wo ist Anna? Ich sehe ___ nicht.» (sie: Anna)",
        hint: "pronombre de acusativo",
        why: "<b>Sie</b>: <i>sehen</i> pide el acusativo, y el de <i>sie</i> (ella) es igual que el nominativo."
      },
      {
        q: "Completa: «Du brauchst Hilfe? Ich helfe ___ gern.» (du)",
        hint: "pronombre de dativo",
        why: "<b>Dir</b>: <i>helfen</i> pide el dativo."
      },
      {
        q: "Completa: «Das Handy gehört ___.» (ich)",
        hint: "pronombre de dativo",
        why: "<b>Mir</b>: <i>gehören</i> pide el dativo."
      },
      {
        q: "Completa: «Ich habe das Buch. Ich gebe es ___ gleich.» (mein Bruder: er)",
        hint: "pronombre de dativo",
        why: "<b>Ihm</b>: con dos pronombres va primero el acusativo (<i>es</i>), luego el dativo (<i>ihm</i>)."
      },
      {
        q: "Completa: «Ihr helft uns oft. Wir danken ___ sehr.» (ihr)",
        hint: "pronombre de dativo",
        why: "<b>Euch</b>: <i>danken</i> pide el dativo, y el dativo de <i>ihr</i> es <i>euch</i>."
      },
      {
        q: "¿Cómo se dice «Me gusta mucho la idea»?",
        opts: ["Die Idee gefällt mich sehr.", "Die Idee gefällt mir sehr.", "Ich gefalle die Idee sehr."],
        why: "La cosa es el sujeto (<i>die Idee</i>) y la persona va en dativo (<i>mir</i>)."
      },
      {
        q: "Dices: «Te lo enseño» (el libro). ¿Qué frase tiene el orden habitual?",
        opts: ["Ich zeige es dir.", "Ich zeige dir es.", "Ich zeige du es."],
        why: "Con dos pronombres el acusativo (<i>es</i>) va antes del dativo (<i>dir</i>)."
      },
      {
        q: "Traduce (mi hermano: usa ihm): «Le doy el libro mañana.»",
        why: "<i>Ich gebe ihm das Buch morgen</i>: el pronombre de dativo <i>ihm</i> va antes del nombre <i>das Buch</i>. También valen <i>Morgen gebe ich ihm das Buch</i> e <i>Ich gebe ihm morgen das Buch</i>."
      },
      {
        tr: "Mi hermano cumple años. Le regalo un libro y se lo doy mañana.",
        why: "En <i>Geburtstag</i> el acento cae en <i>-burts-</i> (<i>ge-</i> es átono) y la <b>g</b> final se lee por lo general [k]."
      },
      {
        tr: "Mi compañera de trabajo necesita ayuda. La ayudo con gusto y mañana la llamo.",
        why: "En <i>braucht</i> <b>au</b> suena [aʊ] y la <b>ch</b> tras él es [x]; en <i>sie</i> la <b>s</b> es sonora [z]."
      }
    ]
  },
  "unit:a2-u04": {
    title: "Salud",
    grammarNote: "mir tut ... weh · bei y zu con el dativo · expresiones de tiempo (am, um, seit, vor) · Konjunktiv II de consejo (du solltest, ich würde) · verbos reflexivos · dass · deshalb"
  },
  "lesson:a2-u04-l1": {
    theme: "Dolores y síntomas",
    title: "Me duele la cabeza",
    objectives: [
      "decir dónde duele con el dativo de la persona: mir, dir, ihm, ihr, uns, euch, ihnen",
      "concordar tut o tun con la parte del cuerpo, que es el sujeto",
      "nombrar las partes del cuerpo con su artículo y su plural"
    ],
    theory: [
      {
        h: "La persona en dativo, la parte del cuerpo en nominativo",
        p: "Para decir que duele una parte del cuerpo el alemán usa <em>wehtun</em>. La <b>persona</b> va en <b>dativo</b> (<em>mir, dir, ihm, ihr, uns, euch, ihnen</em>) y la <b>parte del cuerpo</b> es el <b>sujeto</b>, así que el verbo concuerda con ella: <em>Mir tut der Kopf weh</em> (singular, <em>tut</em>), <em>Mir tun die Füße weh</em> (plural, <em>tun</em>). <em>Weh</em> va al final de la frase, porque <em>wehtun</em> es un verbo separable. Con un nombre, la persona toma el dativo del nombre: <em>Meiner Schwester tut der Rücken weh.</em> Se puede invertir el orden sin cambiar el sentido: <em>Der Kopf tut mir weh.</em> Para preguntar: <em>Wo tut es dir weh?</em> o <em>Was tut dir weh?</em>"
      },
      {
        contrast: "La estructura es la misma que en español: «me duele la cabeza», «me duelen los pies». También en español la persona va en objeto indirecto (<em>me</em>) y el verbo concuerda con la parte del cuerpo. La diferencia está en la forma: <em>mir</em> es una palabra independiente, no un clítico delante del verbo, y el verbo se parte en <em>tut ... weh</em>. Además, el español usa <em>me</em> tanto para el dativo como para el acusativo, mientras que el alemán distingue <em>mir</em> de <em>mich</em>. Los géneros tampoco coinciden: <em>la cabeza</em> es femenino, pero <em>der Kopf</em> es masculino; <em>la pierna</em> es femenino, <em>das Bein</em> es neutro. Para el dolor de cabeza existe también <em>Ich habe Kopfschmerzen</em>, donde el sujeto es la persona. Ojo con <em>der Hals</em>: significa tanto «cuello» como «garganta»."
      },
      {
        trap: "Con <em>wehtun</em> la persona no es el sujeto: <em>Ich tut der Kopf weh</em> y <em>Mich tut der Kopf weh</em> son incorrectas, hace falta <em>mir</em>. Y el verbo no concuerda con la persona sino con la parte del cuerpo: <em>Mir tun die Füße weh</em> (plural), no <em>Mir tut die Füße weh</em>. También es correcto <em>Mein Kopf tut weh</em>: el posesivo <em>mein</em> indica quién siente el dolor, mientras que el sujeto sigue siendo <em>Kopf</em>."
      },
      {
        tip: "Primero localiza la parte del cuerpo y mira si es singular o plural: ella decide <em>tut</em> o <em>tun</em>. Después añade la persona en dativo. El plural de los nombres del cuerpo se aprende junto con el artículo: <em>der Fuß, die Füße</em>; <em>das Ohr, die Ohren</em>."
      }
    ],
    grammar: {
      title: "mir tut ... weh",
      note: "La persona va en <b>dativo</b>, la parte del cuerpo es el <b>sujeto</b> y decide <b>tut</b> (singular) o <b>tun</b> (plural). <b>Weh</b> va al final.",
      table: {
        head: ["persona", "dativo", "ejemplo"],
        rows: [
          ["ich", "mir", "Mir tut der Kopf weh."],
          ["du", "dir", "Dir tun die Füße weh."],
          ["er", "ihm", "Ihm tut der Bauch weh."],
          ["sie", "ihr", "Ihr tut der Rücken weh."],
          ["wir", "uns", "Uns tun die Beine weh."],
          ["ihr", "euch", "Euch tut der Hals weh."],
          ["sie, Sie", "ihnen, Ihnen", "Ihnen tun die Ohren weh."]
        ]
      },
      examples: [
        { tr: "Me duele la cabeza.", note: "mir: dativo de ich; der Kopf es el sujeto" },
        { tr: "¿Dónde te duele?", note: "es es un sujeto general: Wo tut es dir weh?" },
        { tr: "Le duelen los dientes.", note: "ihm; die Zähne es plural, por eso tun" },
        { tr: "A mi hermana le duele la espalda.", note: "dativo también en el nombre: meiner Schwester" },
        { tr: "Nos duelen las piernas.", note: "uns; das Bein, die Beine" },
        { tr: "Tengo dolor de cabeza.", note: "alternativa: aquí el sujeto es ich, Kopfschmerzen es plural" }
      ]
    },
    vocab: [
      "la cabeza",
      "el cuello, la garganta",
      "la barriga",
      "la espalda",
      "la pierna",
      "el pie",
      "el diente",
      "la oreja",
      "el dolor",
      "doler",
      "enfermo",
      "cansado"
    ],
    exercises: [
      {
        q: "¿Cómo se dice «Me duele la cabeza»?",
        opts: ["Ich tut der Kopf weh.", "Mir tut der Kopf weh.", "Mich tut der Kopf weh."],
        why: "La persona va en dativo: <b>mir</b>. <i>Der Kopf</i> es el sujeto, por eso el verbo es <i>tut</i>. <i>Ich</i> es un nominativo y <i>mich</i> un acusativo."
      },
      {
        q: "¿Cómo se dice «Me duelen los pies»?",
        opts: ["Mir tut die Füße weh.", "Mir tun die Füße weh.", "Mich tun die Füße weh."],
        why: "<i>Die Füße</i> es plural y sujeto: el verbo es <b>tun</b>. La persona sigue en dativo, <i>mir</i>."
      },
      {
        q: "Completa: «Mir ___ die Beine weh.» (verbo tun, la forma que concuerda con la parte del cuerpo en plural)",
        hint: "tun, forma del plural",
        why: "<b>Tun</b>: el sujeto es <i>die Beine</i>, plural. Con un sujeto singular se diría <i>tut</i>."
      },
      {
        q: "Completa: «Anna ist krank. ___ tut der Hals weh.» (a ella: dativo de sie)",
        hint: "pronombre en dativo",
        why: "<b>Ihr</b>: dativo de <i>sie</i> (ella). <i>Der Hals</i> es el sujeto, singular."
      },
      {
        q: "Completa la frase.",
        tr: "Estoy cansado. Me duelen las piernas. ¿Y Lisa? Le duele la espalda.",
        why: "<i>Mir</i> para <i>ich</i> e <i>ihr</i> para <i>Lisa</i>: son los dativos. El verbo concuerda con la parte del cuerpo: <i>tun</i> con <i>die Beine</i>, <i>tut</i> con <i>der Rücken</i>."
      },
      {
        q: "Une cada frase con su traducción.",
        pairs: [
          "Me duele la cabeza.",
          "Me duelen los pies.",
          "Le duele la barriga.",
          "Le duelen las orejas."
        ]
      },
      {
        q: "Ordena las palabras.",
        tr: "Me duelen los pies.",
        why: "El verbo se queda en segunda posición. Valen tanto <i>Mir tun die Füße weh</i> como <i>Die Füße tun mir weh</i>: cambia el orden, no el sentido."
      },
      {
        q: "Traduce con tun ... weh y el dativo: «Me duele la cabeza.»",
        why: "<i>Mir tut der Kopf weh</i> o <i>Der Kopf tut mir weh</i>. En español <i>la cabeza</i> es femenino, pero <i>der Kopf</i> es masculino."
      },
      {
        tr: "Buenos días, doctora. Me duele la cabeza, y también me duelen las orejas.",
        why: "En <i>Kopf</i> la <b>o</b> es breve y <b>pf</b> es una africada [pf]; en <i>Ohren</i> la <b>h</b> no se pronuncia y la <b>o</b> es larga."
      },
      {
        tr: "Estoy enfermo. Me duele la garganta, y me duelen las piernas.",
        why: "En <i>Hals</i> la <b>h</b> inicial es un soplo [h]; en <i>weh</i> la <b>w</b> es [v] y la <b>h</b> no se pronuncia; en <i>Beine</i> la <b>ei</b> suena [aɪ]."
      }
    ]
  },
  "lesson:a2-u04-l2": {
    theme: "En el médico",
    title: "En el médico",
    objectives: [
      "distinguir bei + dativo (estar) de zu + dativo (ir) para decir «en casa del médico» y «al médico»",
      "usar las formas contractas beim, zum, zur",
      "decir cuándo y desde cuándo con am, um, seit y vor",
      "pedir una cita de forma comprensible"
    ],
    theory: [
      {
        h: "bei para estar con alguien, zu para ir a verlo",
        p: "Para decir <b>dónde se está</b> en casa de una persona o con ella se usa <b>bei + dativo</b>: <em>Ich bin beim Arzt</em> (<em>bei dem</em> pasa a <em>beim</em>). Para decir <b>adónde se va</b> se usa <b>zu + dativo</b>: <em>Ich gehe zum Arzt</em> (<em>zu dem</em> pasa a <em>zum</em>), <em>Ich gehe zur Ärztin</em> (<em>zu der</em> pasa a <em>zur</em>). También <em>zur Apotheke</em> es un movimiento hacia un lugar. Para el tiempo: <b>am</b> con el día (<em>am Montag</em>), <b>um</b> con la hora (<em>um zehn Uhr</em>), <b>seit + dativo</b> para lo que dura desde un momento y continúa (<em>seit drei Tagen</em>), <b>vor + dativo</b> para lo que ocurrió antes (<em>vor drei Tagen</em>). Para pedir una cita: <em>Ich möchte einen Termin vereinbaren.</em>"
      },
      {
        contrast: "El español dice «voy al médico» con <em>a + el = al</em>, una contracción como <em>zum</em>. Para decir que se está allí, en cambio, cambia la construcción («estoy en la consulta», «estoy con el médico»), y el alemán usa para eso <em>bei</em>: <em>beim Arzt</em>. Con el tiempo hay mucho parecido: «desde hace tres días» es <em>seit drei Tagen</em>, con el presente como en español (<em>Ich habe seit drei Tagen Fieber</em>, «tengo fiebre desde hace tres días»), y «hace tres días» es <em>vor drei Tagen</em>, con la preposición también <b>antes</b> del tiempo. «El lunes» es <em>am Montag</em> y «a las diez» es <em>um zehn Uhr</em>."
      },
      {
        trap: "<em>Bei</em> y <em>zu</em> rigen dativo. <em>Zum Arzt</em> y <em>zur Ärztin</em> son las formas contractas habituales: <em>zu dem</em> y <em>zu der</em> aparecen cuando se quiere destacar el artículo. <em>Zum Arzt</em> significa ir al médico y <em>beim Arzt</em> estar con el médico: no decidas solo por el verbo (no hay una regla general del tipo «tras un verbo de movimiento se usa <em>zu</em>»), fíjate en si quieres decir estar o ir. Tras <em>seit</em> y <em>vor</em> también el plural va en dativo, con <b>-n</b>: <em>seit drei Tagen</em>, no <em>seit drei Tage</em>."
      },
      {
        tip: "Pregúntate primero: «¿estoy allí o voy hacia allí?». <em>Wo?</em> pide <em>bei</em>, <em>wohin?</em> pide <em>zu</em>. Para la cita junta día y hora: <em>am Montag um zehn Uhr</em>."
      }
    ],
    grammar: {
      title: "bei, zu, am, um, seit, vor",
      note: "En el médico: <b>bei</b> + dativo para estar, <b>zu</b> + dativo para ir. En el tiempo: <b>am</b> (día), <b>um</b> (hora), <b>seit</b> (desde cuándo), <b>vor</b> (hace).",
      table: {
        head: ["pregunta", "forma", "ejemplo"],
        rows: [
          ["Wo? (en casa de alguien)", "bei + dativo", "Ich bin beim Arzt."],
          ["Wohin? (a casa de alguien)", "zu + dativo", "Ich gehe zum Arzt."],
          ["Wohin? (a un lugar)", "zu + dativo", "Ich gehe zur Apotheke."],
          ["cuándo (día)", "am", "am Montag"],
          ["cuándo (hora)", "um", "um zehn Uhr"],
          ["desde cuándo", "seit + dativo", "seit drei Tagen"],
          ["hace cuánto", "vor + dativo", "vor drei Tagen"]
        ]
      },
      examples: [
        { tr: "Estoy en el médico.", note: "bei dem pasa a beim: estado en un lugar" },
        { tr: "Voy al médico.", note: "zu dem pasa a zum: movimiento hacia una persona" },
        { tr: "Mi madre va a la doctora.", note: "zu der pasa a zur" },
        { tr: "Voy a la farmacia.", note: "zur Apotheke: movimiento hacia un lugar" },
        { tr: "Tengo fiebre desde hace tres días.", note: "seit + dativo plural: Tagen" },
        { tr: "La cita es el lunes a las diez.", note: "am con el día, um con la hora" }
      ]
    },
    vocab: [
      "el médico",
      "la doctora",
      "la consulta",
      "la cita",
      "el seguro médico",
      "la receta",
      "la farmacia",
      "la pastilla",
      "la fiebre",
      "la tos",
      "concertar (una cita)",
      "desde; desde hace (con una duración)"
    ],
    exercises: [
      {
        q: "Estás en el médico, no vas de camino. ¿Qué frase es correcta?",
        opts: ["Ich bin zum Arzt.", "Ich bin beim Arzt.", "Ich bin bei Arzt."],
        why: "Para decir dónde se está con una persona: <b>bei</b> + dativo, y <i>bei dem</i> pasa a <i>beim</i>. <i>Zum</i> indica movimiento."
      },
      {
        q: "Completa: «Ich gehe ___ Ärztin.» (zu con el artículo, forma contracta)",
        hint: "zu + der, forma contracta",
        why: "<b>Zur</b>: <i>zu der</i> se contrae en <i>zur</i>. Ir hacia una persona pide <i>zu</i> + dativo."
      },
      {
        q: "Completa: «Ich habe ___ drei Tagen Fieber.» (Tengo fiebre desde hace tres días.)",
        hint: "desde cuándo, + dativo",
        why: "<b>Seit</b> + dativo para lo que dura desde un momento y continúa; <i>Tagen</i> lleva la <b>-n</b> del dativo plural."
      },
      {
        q: "Completa la frase.",
        tr: "Quisiera pedir una cita. ¿Le va bien el lunes a las diez?",
        why: "<i>Am Montag</i> con el día, <i>um zehn Uhr</i> con la hora."
      },
      {
        q: "Une cada expresión con su traducción.",
        pairs: [
          "en el médico (estoy allí)",
          "al médico (voy)",
          "desde hace tres días",
          "hace tres días"
        ]
      },
      {
        q: "Ordena las palabras.",
        tr: "Mañana voy al médico.",
        why: "El verbo se queda en segunda posición. Valen tanto <i>Ich gehe morgen zum Arzt</i> como <i>Morgen gehe ich zum Arzt</i>; también son posibles el orden con <i>zum Arzt</i> en primera posición o con <i>morgen</i> al final, que destacan un elemento."
      },
      {
        q: "Traduce (usa am y zu): «El lunes voy a la doctora.»",
        why: "<i>Ich gehe am Montag zur Ärztin</i>: <i>am</i> con el día, <i>zur</i> (= <i>zu der</i>) con el movimiento. Con <i>Am Montag</i> delante el verbo sigue en segunda posición: <i>Am Montag gehe ich zur Ärztin</i>."
      },
      {
        q: "Llamas a una consulta médica para pedir una cita.",
        setting: "Llamas a la consulta del doctor Berger porque tienes fiebre.",
        lines: [
          { tr: "Consulta Berger, buenos días." },
          {
            tr: "Di que quisieras pedir una cita.",
            answerTr: "Buenos días, quisiera pedir una cita."
          },
          { tr: "Con mucho gusto. ¿Desde cuándo tiene fiebre?" },
          {
            tr: "Responde que tienes fiebre desde hace tres días.",
            answerTr: "Tengo fiebre desde hace tres días."
          }
        ]
      },
      {
        tr: "Buenos días, quisiera pedir una cita. Tengo fiebre desde hace tres días y me duele la cabeza.",
        why: "En <i>seit</i> la <b>s</b> inicial es sonora [z] y la <b>ei</b> suena [aɪ]; en <i>Termin</i> el acento cae en la última sílaba."
      },
      {
        tr: "El lunes a las diez tengo una cita con el médico.",
        why: "En <i>zehn</i> la <b>z</b> es [ts] y la <b>e</b> es larga, con la <b>h</b> muda; en <i>Uhr</i> la <b>u</b> es larga y la <b>r</b> final se vocaliza a menudo."
      }
    ]
  },
  "lesson:a2-u04-l3": {
    theme: "Consejos",
    title: "Deberías descansar",
    objectives: [
      "dar un consejo con du solltest, ihr solltet, Sie sollten",
      "expresar un consejo personal con ich würde + infinitivo",
      "usar el pronombre reflexivo correcto con un verbo como sich ausruhen",
      "colocar el pronombre reflexivo antes del infinitivo al final de la frase"
    ],
    theory: [
      {
        h: "El consejo con el Konjunktiv II",
        p: "Para dar un consejo el alemán usa el Konjunktiv II. Con <b>sollen</b> se dice <em>solltest</em>, <em>solltet</em>, <em>sollten</em>: <em>Du solltest dich ausruhen.</em> Para decir qué harías en el lugar del otro se usa <b>würde + infinitivo</b>: <em>Ich würde zum Arzt gehen.</em> La expresión <em>an deiner Stelle</em> combina bien con <em>würde</em>: <em>An deiner Stelle würde ich im Bett bleiben.</em> El infinitivo va al final de la frase, y el pronombre reflexivo lo precede."
      },
      {
        h: "Los verbos reflexivos léxicos",
        p: "<em>Sich ausruhen, sich hinlegen, sich erholen, sich fühlen</em> son reflexivos por naturaleza: el pronombre forma parte del verbo y no significa «descansar a sí mismo». El pronombre va en <b>acusativo</b> y cambia con la persona: <em>mich, dich, sich, uns, euch, sich</em>. Va después del verbo conjugado: <em>Ich ruhe mich aus.</em> Con <em>sollen</em> y <em>würde</em> va delante del infinitivo: <em>Du solltest dich ausruhen. Ich würde mich hinlegen.</em> Con la forma de cortesía: <em>Sie sollten sich hinlegen</em> (<em>sich</em> sigue en minúscula)."
      },
      {
        contrast: "El español construye el consejo con el condicional: «deberías descansar», «yo iría al médico». El alemán usa el Konjunktiv II de <em>sollen</em> o <em>würde</em> + infinitivo, no una desinencia propia en el verbo principal. Con los reflexivos, el clítico español se pega al infinitivo (<em>acostarte</em>); en alemán es una palabra aparte y va delante: <em>dich hinlegen</em>. Y los verbos no siempre coinciden en ser reflexivos: «descansar» no lo es en español, pero <em>sich ausruhen</em> sí; <em>sich hinlegen</em> es «acostarse» y <em>sich erholen</em> es «recuperarse»."
      },
      {
        trap: "<em>Du solltest</em> es un consejo; <em>du sollst</em> es una obligación o un encargo de otra persona, y suena mucho más fuerte. La forma reflexiva es la habitual y la que se practica en esta lección: <em>Du solltest dich ausruhen</em>. <em>Ausruhen</em> también puede usarse sin pronombre (<em>Du solltest ausruhen</em> es correcto), pero con el pronombre es la construcción corriente. Tampoco lo muevas al final: <em>Du solltest ausruhen dich</em> es incorrecto. Con <em>würde</em> el infinitivo queda al final: <em>Ich würde mich ausruhen</em>, no <em>Ich würde ausruhen mich</em>."
      },
      {
        tip: "Para el consejo prepara dos versiones: <em>Du solltest ...</em> para decírselo al otro, <em>Ich würde ...</em> para decir qué harías tú. Después comprueba el pronombre reflexivo: misma persona que el sujeto (<em>ich ... mich</em>, <em>du ... dich</em>)."
      }
    ],
    grammar: {
      title: "El Konjunktiv II de consejo",
      note: "<b>sollen</b> en Konjunktiv II para aconsejar (<b>du solltest</b>), <b>würde + infinitivo</b> para decir qué harías tú. El pronombre reflexivo es acusativo y va antes del infinitivo.",
      table: {
        head: ["persona", "sollen", "würde", "reflexivo"],
        rows: [
          ["ich", "sollte", "würde", "mich"],
          ["du", "solltest", "würdest", "dich"],
          ["er, sie, es", "sollte", "würde", "sich"],
          ["wir", "sollten", "würden", "uns"],
          ["ihr", "solltet", "würdet", "euch"],
          ["sie, Sie", "sollten", "würden", "sich"]
        ]
      },
      examples: [
        { tr: "Deberías descansar.", note: "du solltest + dich + infinitivo al final" },
        { tr: "Yo iría al médico.", note: "ich würde + infinitivo al final" },
        { tr: "En tu lugar me quedaría en la cama.", note: "an deiner Stelle: dativo tras an" },
        { tr: "Deberíais beber mucho té.", note: "ihr solltet: sollte- + la desinencia personal -t" },
        { tr: "Debería acostarse (usted).", note: "forma de cortesía: Sie sollten sich hinlegen" },
        { tr: "Yo me recuperaría en las vacaciones.", note: "sich erholen: würde + mich + infinitivo" }
      ]
    },
    vocab: [
      "descansar",
      "acostarse, tumbarse",
      "recuperarse",
      "sentirse",
      "el consejo",
      "el té",
      "la cama",
      "la calma, el reposo",
      "las vacaciones, el permiso",
      "sano, curado",
      "deber (sollen)",
      "en tu lugar"
    ],
    exercises: [
      {
        q: "Da un consejo a una amiga cansada: «Deberías descansar.»",
        opts: ["Du sollst dich ausruhen.", "Du solltest dich ausruhen.", "Du solltest ausruhen dich."],
        why: "<b>Du solltest dich ausruhen</b>: el Konjunktiv II de <i>sollen</i> da un consejo, y <i>dich</i> precede al infinitivo. <i>Du sollst</i> es una obligación; en la tercera el pronombre está mal colocado."
      },
      {
        tr: "El Konjunktiv II de sollen, todas las personas.",
        why: "<i>Sollte, solltest, sollte, sollten, solltet, sollten</i>: son las formas del Präteritum, pero aquí sirven para el consejo. La 1.ª y la 3.ª persona del singular son iguales."
      },
      {
        tr: "El Konjunktiv II de sich ausruhen con würde, todas las personas.",
        why: "<i>Würde mich ausruhen, würdest dich ausruhen, würde sich ausruhen, würden uns ausruhen, würdet euch ausruhen, würden sich ausruhen</i>: <i>würde</i> + pronombre reflexivo + infinitivo."
      },
      {
        q: "Completa: «Du bist krank. Du ___ zum Arzt gehen.» (deberías: sollen)",
        hint: "sollen, Konjunktiv II, du",
        why: "<b>Solltest</b>: la forma de <i>du</i> es <i>solltest</i>, con <b>-st</b>. El infinitivo <i>gehen</i> va al final."
      },
      {
        q: "Completa: «Wir sind müde. Wir sollten ___ ausruhen.» (wir)",
        hint: "pronombre reflexivo, acusativo",
        why: "<b>Uns</b>: el pronombre reflexivo de <i>wir</i> es <i>uns</i>, delante del infinitivo."
      },
      {
        q: "Completa la frase.",
        tr: "Tienes fiebre. En tu lugar iría al médico. Y deberías descansar.",
        why: "<i>An deiner Stelle würde ich ...</i> para decir qué harías tú; <i>du solltest dich ausruhen</i>, con <i>dich</i> para <i>du</i>."
      },
      {
        q: "Une cada frase con su traducción.",
        pairs: [
          "Deberías descansar.",
          "Yo iría al médico.",
          "Deberíais beber mucho té.",
          "Debería acostarse (usted)."
        ]
      },
      {
        q: "Traduce (usa sich ausruhen): «En tu lugar descansaría.»",
        why: "<i>An deiner Stelle würde ich mich ausruhen</i>: <i>würde</i> en segunda posición tras <i>An deiner Stelle</i>, luego <i>ich mich</i> y el infinitivo al final. También vale <i>Ich würde mich an deiner Stelle ausruhen</i>."
      },
      {
        tr: "Pareces cansado. En tu lugar me acostaría, y deberías beber mucho té.",
        why: "En <i>Stelle</i> la <b>st</b> inicial suena [ʃt], mientras que en <i>solltest</i> es [st]; en <i>würde</i> la <b>ü</b> es breve [ʏ]."
      },
      {
        tr: "Deberías descansar, y yo iría al médico.",
        why: "En <i>ausruhen</i> la <b>au</b> suena [aʊ] y la <b>h</b> no se pronuncia; en <i>dich</i> la <b>ch</b> tras <b>i</b> es [ç]."
      }
    ]
  },
  "lesson:a2-u04-l4": {
    theme: "Estilo de vida",
    title: "Vivir sano",
    objectives: [
      "introducir un contenido con dass tras ich finde, ich glaube, ich weiß, der Arzt sagt",
      "poner el verbo conjugado al final en la frase con dass",
      "unir causa y consecuencia con deshalb, que en primera posición lleva el verbo justo después",
      "hablar de deporte, alimentación, sueño y hábitos"
    ],
    theory: [
      {
        h: "dass manda el verbo al final",
        p: "Tras verbos como <em>finden, glauben, denken, wissen, sagen</em> se transmite un contenido con <b>dass</b>. La frase siguiente es subordinada: el verbo conjugado va al <b>final</b>, y la coma antes de <em>dass</em> es obligatoria. <em>Ich finde, dass Sport wichtig ist. Der Arzt sagt, dass ich mehr Wasser trinken soll.</em> Si hay un infinitivo y un modal, el modal conjugado cierra la frase: <em>... trinken soll</em>. Funciona como <em>weil</em>, <em>als</em> y <em>wenn</em>, vistos antes."
      },
      {
        h: "deshalb: la consecuencia, con inversión",
        p: "<b>Deshalb</b> («por eso») une dos oraciones principales y suele ocupar la <b>primera posición</b> de la segunda (no es obligatorio: <em>Ich bin deshalb müde</em> también es correcto); cuando va primero, el verbo conjugado viene justo después y el sujeto lo sigue. <em>Ich schlafe schlecht. Deshalb bin ich müde.</em> Sinónimos: <em>deswegen, darum</em>. También puede ir tras una coma: <em>Ich schlafe schlecht, deshalb bin ich müde.</em>"
      },
      {
        contrast: "En español, «creo que» con una afirmación va con indicativo («creo que el deporte es importante»), pero «no creo que» pide subjuntivo («no creo que sea importante»). En los ejemplos de la lección la frase con <em>dass</em> usa el indicativo, también tras la negación: <em>Ich denke, dass Sport wichtig <b>ist</b></em>, <em>Ich glaube nicht, dass Sport schlecht <b>ist</b></em>. El subjuntivo es posible (<em>..., dass ich mich ausruhen sollte</em>), pero el alemán no lo exige ni por la negación ni por el verbo principal, como sí hace el español con «no creo que». En español no se pone coma delante de «que»; en alemán la coma antes de <em>dass</em> es obligatoria. Y «por eso» no cambia el orden en español (<em>duermo mal, por eso estoy cansado</em> o <em>por eso yo estoy cansado</em>), mientras que <em>deshalb</em>, cuando abre la frase, obliga a poner el verbo enseguida: <em>Deshalb bin ich müde</em>."
      },
      {
        trap: "<em>Deshalb</em> no manda el verbo al final como hace <em>dass</em>: <em>Deshalb ich bin müde</em> y <em>Deshalb ich müde bin</em> son incorrectas. Y con <em>dass</em> el verbo no se queda en segunda posición: <em>Ich finde, dass Sport ist wichtig</em> es incorrecto. No confundas <em>dass</em> con <em>das</em>: <em>dass</em> = «que» (conjunción), <em>das</em> = «que» (pronombre relativo) o <em>das</em> = artículo neutro («el», «la»). El alemán distingue por escrito la conjunción del resto."
      },
      {
        tip: "Delante de <em>dass</em> pon la coma y lleva el verbo al final; si <em>deshalb</em> abre la frase, escribe el verbo enseguida. Antes de escribir pregúntate: ¿la frase empieza con una conjunción (<em>dass</em>, verbo al final) o con un adverbio como <em>deshalb</em> (verbo enseguida)?"
      }
    ],
    grammar: {
      title: "dass y deshalb",
      note: "<b>dass</b>: el verbo conjugado va al final. <b>deshalb</b> en primera posición: el verbo viene justo después, el sujeto lo sigue.",
      table: {
        head: ["elemento", "posición del verbo", "ejemplo"],
        rows: [
          ["oración principal", "segunda posición", "Sport ist wichtig."],
          ["dass", "al final", "Ich finde, dass Sport wichtig ist."],
          ["dass con modal", "el modal cierra", "..., dass ich mehr trinken soll."],
          ["deshalb", "justo después de deshalb, si abre la frase", "Ich schlafe schlecht. Deshalb bin ich müde."]
        ]
      },
      examples: [
        { tr: "Creo que el deporte es importante.", note: "dass + verbo al final; aquí el verbo va en indicativo (el subjuntivo es posible, pero no obligatorio)" },
        { tr: "El médico dice que tengo que beber más agua.", note: "el modal soll cierra la frase tras trinken" },
        { tr: "Sé que los cigarrillos no son sanos.", note: "dass ... sind: el verbo al final" },
        { tr: "Duermo mal. Por eso estoy cansado.", note: "deshalb en primera posición, luego bin ich" },
        { tr: "Come mucha verdura. Por eso rara vez está enferma.", note: "deshalb, luego ist sie" },
        { tr: "Creo que pasear es sano.", note: "dass ... gesund ist" }
      ]
    },
    vocab: [
      "la manzana",
      "la verdura",
      "la comida",
      "el paseo",
      "el cigarrillo",
      "el sueño",
      "la salud",
      "el agua",
      "fumar",
      "con regularidad",
      "malsano, poco sano",
      "moverse, hacer ejercicio"
    ],
    exercises: [
      {
        q: "Con dass: «Creo que el deporte es importante.» ¿Qué frase es correcta?",
        opts: [
          "Ich finde, dass Sport ist wichtig.",
          "Ich finde, dass Sport wichtig ist.",
          "Ich finde dass, Sport wichtig ist."
        ],
        why: "<b>Dass</b> manda el verbo al final, y la coma va <b>antes</b> de <i>dass</i>. En la primera el verbo está en segunda posición, en la tercera la coma está mal colocada."
      },
      {
        q: "¿Qué frase es correcta? «Duermo mal. Por eso estoy cansado.»",
        opts: [
          "Ich schlafe schlecht. Deshalb ich bin müde.",
          "Ich schlafe schlecht. Deshalb bin ich müde.",
          "Ich schlafe schlecht. Deshalb ich müde bin."
        ],
        why: "Con <b>deshalb</b> en primera posición el verbo viene enseguida, luego el sujeto: <i>Deshalb bin ich müde</i>. <i>Deshalb</i> no manda el verbo al final."
      },
      {
        q: "Completa: «Der Arzt sagt, ___ ich mehr Wasser trinken soll.» (que)",
        hint: "conjunción",
        why: "<b>Dass</b> introduce lo que dice el médico y manda el verbo al final: <i>trinken soll</i>."
      },
      {
        q: "Completa: «Ich glaube, dass er viel Gemüse ___.» (essen, er)",
        hint: "essen, er, verbo al final",
        why: "<b>Isst</b>: la forma de <i>er</i> es <i>isst</i>, y con <i>dass</i> va al final de la frase."
      },
      {
        q: "Completa: «Ich bin oft müde. Deshalb ___ ich früh ins Bett.» (gehen, ich)",
        hint: "gehen, ich",
        why: "<b>Gehe</b>: con <i>Deshalb</i> en primera posición el verbo viene enseguida, luego <i>ich</i>."
      },
      {
        q: "Completa la frase.",
        tr: "Sé que el deporte es sano. Pero hago muy poco. Por eso estoy a menudo cansado.",
        why: "<i>Dass</i> tras <i>Ich weiß,</i> con el verbo al final; <i>deshalb</i> (también <i>deswegen</i> o <i>darum</i>) abre la frase siguiente, y <i>bin ich</i> viene enseguida."
      },
      {
        q: "Une cada palabra con su traducción.",
        pairs: [
          "que (introduce una frase)",
          "por eso",
          "con regularidad",
          "malsano, poco sano"
        ]
      },
      {
        q: "Traduce (usa dass): «El médico dice que tengo que dormir más.»",
        why: "<i>Der Arzt sagt, dass ich mehr schlafen soll</i>: coma, <i>dass</i>, y el modal <i>soll</i> al final tras el infinitivo. También vale <i>muss</i>, porque «tengo que» puede traducir ambos."
      },
      {
        tr: "El médico dice que tengo que dormir más. Duermo mal, por eso estoy a menudo cansado.",
        why: "En <i>schlafen</i> y <i>schlecht</i> la <b>sch</b> es [ʃ]; en <i>dass</i> la <b>ss</b> es una <b>s</b> sorda y la <b>a</b> es breve."
      },
      {
        tr: "Creo que el deporte es sano. Por eso salgo a pasear todos los días.",
        why: "En <i>Sport</i> la <b>sp</b> inicial suena [ʃp]; en <i>gesund</i> la <b>s</b> es sonora [z]; en <i>spazieren</i> <b>sp</b> es [ʃp] y la <b>z</b> es [ts]."
      }
    ]
  },
  "lesson:a2-u04-test": {
    theme: "Prueba",
    title: "Prueba de la unidad 4",
    objectives: [
      "comprobar el dativo con wehtun, el Konjunktiv II de consejo (solltest, würde, también con un verbo reflexivo) y las frases con dass"
    ],
    theory: [
      {
        p: "Diez preguntas sobre el dativo con <em>wehtun</em>, el Konjunktiv II de consejo y las frases con <em>dass</em>. Se aprueba con el 70 %. No vuelvas a mirar las lecciones mientras respondes: si no recuerdas algo, es mejor volver a repasar."
      }
    ],
    exercises: [
      {
        tr: "El Konjunktiv II de sollen, todas las personas.",
        why: "<i>Sollte, solltest, sollte, sollten, solltet, sollten</i>: la 1.ª y la 3.ª persona del singular son iguales."
      },
      {
        q: "Completa: «Anna hat Fieber. ___ tut der Kopf weh.» (a ella)",
        hint: "pronombre en dativo",
        why: "<b>Ihr</b>: dativo de <i>sie</i>; <i>der Kopf</i> es el sujeto."
      },
      {
        q: "Completa: «Wir sind müde. ___ tun die Beine weh.» (a nosotros)",
        hint: "pronombre en dativo",
        why: "<b>Uns</b>: dativo de <i>wir</i>; <i>die Beine</i> es plural, por eso <i>tun</i>."
      },
      {
        q: "Completa: «Ich denke, ___ du dich ausruhen solltest.» (que)",
        hint: "conjunción",
        why: "<b>Dass</b> introduce lo que se piensa y manda el verbo al final: <i>ausruhen solltest</i>."
      },
      {
        q: "Completa: «Du bist krank. An deiner Stelle ___ ich zum Arzt gehen.» (werden, Konjunktiv II)",
        hint: "werden, Konjunktiv II, ich",
        why: "<b>Würde</b>: <i>würde</i> + infinitivo para decir qué harías tú."
      },
      {
        q: "¿Cómo se dice «Me duelen las piernas»?",
        opts: ["Mir tut die Beine weh.", "Mir tun die Beine weh.", "Ich tun die Beine weh."],
        why: "<i>Die Beine</i> es plural y sujeto, por eso <b>tun</b>; la persona sigue en dativo, <i>mir</i>."
      },
      {
        q: "Une cada frase con su traducción.",
        pairs: [
          "Me duele la cabeza.",
          "Deberías descansar.",
          "Yo iría al médico.",
          "Sé que está enfermo."
        ]
      },
      {
        q: "Traduce (usa dass y sollen): «El médico dice que debo descansar.» (usa sich ausruhen)",
        why: "<i>Der Arzt sagt, dass ich mich ausruhen soll</i>: <i>dass</i> manda el verbo al final; <i>mich</i> precede al infinitivo <i>ausruhen</i>."
      },
      {
        tr: "Me duele la cabeza. Creo que debería descansar.",
        why: "En <i>denke</i> la <b>n</b> ante <b>k</b> suena [ŋ]; en <i>sollte</i> la <b>o</b> es breve."
      },
      {
        tr: "Mi hermano está enfermo. Le duele la espalda, y creo que debería ir al médico.",
        why: "En <i>Rücken</i> la <b>ü</b> es breve [ʏ] y <b>ck</b> suena [k]; en <i>Mein</i> la <b>ei</b> es [aɪ]; en <i>ihm</i> la <b>h</b> no se pronuncia y la <b>i</b> es larga."
      }
    ]
  }
});
