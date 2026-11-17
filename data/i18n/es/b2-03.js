/* ============================================================
   Learner-language text (es) for data/core/b2-03.js, unit b2-u06.
   Keys point at ids in the neutral layer; arrays merge by index,
   so their length has to match core.
   Checked by scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("es", {
  "unit:b2-u06": {
    title: "Aunque llueva",
    grammarNote: "Concesivas con obwohl y obgleich · trotz + genitivo · trotzdem y dennoch con inversión · auch wenn y selbst wenn, también con el Konjunktiv II · jedoch, allerdings, sondern, vielmehr, hingegen, zwar ... aber"
  },
  "lesson:b2-u06-l1": {
    theme: "Argumentar en un debate",
    title: "obwohl, obgleich, trotz",
    objectives: [
      "expresar una concesión con obwohl y obgleich",
      "usar trotz con el genitivo",
      "usar trotzdem y dennoch en la oración principal",
      "elegir entre conjunción, preposición y adverbio"
    ],
    theory: [
      {
        h: "Tres palabras para la misma idea",
        p: "El alemán expresa la concesión con tres herramientas distintas, y la diferencia está en la sintaxis. <strong>obwohl</strong> (más formal: <em>obgleich</em>) es una conjunción: abre una subordinada con el verbo al final. <em>Obwohl es regnet, gehen wir spazieren.</em> <strong>trotz</strong> es una preposición con genitivo y no lleva verbo: <em>Trotz des Regens gehen wir spazieren.</em> <strong>trotzdem</strong> y <strong>dennoch</strong> son adverbios: están en la oración principal, y si ocupan el primer lugar el verbo va justo detrás. <em>Es regnet. Trotzdem gehen wir spazieren.</em>"
      },
      {
        h: "Después de la subordinada, inversión",
        p: "Cuando la oración con <em>obwohl</em> va primero, ocupa por sí sola el primer lugar de la principal: el verbo conjugado va justo detrás y después el sujeto. <em>Obwohl er müde war, <strong>arbeitete er</strong> weiter.</em> Si la subordinada va al final, la principal mantiene su orden: <em>Er arbeitete weiter, obwohl er müde war.</em>"
      },
      {
        contrast: "El español reparte la idea igual: <em>aunque</em> abre una oración (<em>obwohl</em>), <em>a pesar de</em> va con un sustantivo (<em>trotz</em>) y <em>sin embargo</em> o <em>aun así</em> están en la principal (<em>trotzdem</em>). Dos diferencias: <em>obwohl</em> presenta normalmente un hecho y suele llevar indicativo, y el subjuntivo español no se corresponde automáticamente con un Konjunktiv alemán (para una posibilidad abierta sirve <em>auch wenn</em>); además, no existe un <em>trotz dass</em> paralelo a <em>a pesar de que</em> en la lengua escrita: para una oración se usa <em>obwohl</em>."
      },
      {
        trap: "En el alemán escrito estándar <em>trotzdem</em> es un adverbio, no una conjunción: <em>Trotzdem gehen wir</em>, no <em>trotzdem wir gehen</em>. Y <em>trotz</em> rige genitivo: <em>trotz des Regens</em>. En la lengua hablada también se oye <em>trotz dem Regen</em>, pero por escrito se usa el genitivo."
      },
      {
        tip: "En la declinación fuerte, el genitivo masculino y neutro añade <em>-s</em> o <em>-es</em> también al sustantivo (los masculinos débiles toman en cambio <em>-(e)n</em>: <em>trotz des Studenten</em>): <em>trotz des Regens, trotz des schlechten Wetters</em>. En femenino y en plural el sustantivo no cambia: <em>trotz der Kälte, trotz der hohen Kosten</em>."
      }
    ],
    grammar: {
      title: "Concesión: conjunción, preposición, adverbio",
      note: "<b>obwohl / obgleich</b> + subordinada con el verbo al final. <b>trotz</b> + genitivo, sin verbo. <b>trotzdem / dennoch</b> en la principal; en primer lugar, el verbo va justo detrás.",
      table: {
        head: ["palabra", "qué es", "posición del verbo", "ejemplo"],
        rows: [
          ["obwohl, obgleich", "conjunción", "al final de la subordinada", "obwohl es regnet"],
          ["trotz", "preposición + genitivo", "sin verbo", "trotz des Regens"],
          ["trotzdem, dennoch", "adverbio", "justo detrás, si van en primer lugar", "Trotzdem gehen wir."]
        ]
      },
      examples: [
        { tr: "Aunque llueve, vamos a dar un paseo.", note: "obwohl + indicativo, luego inversión: gehen wir" },
        { tr: "Vamos a dar un paseo, aunque llueve.", note: "subordinada al final: la principal mantiene su orden" },
        { tr: "Llueve. Aun así, vamos a dar un paseo.", note: "trotzdem en primer lugar: gehen wir" },
        { tr: "A pesar de la lluvia, vamos a dar un paseo.", note: "trotz + genitivo: des Regens" },
        { tr: "Aunque los costes han subido, el precio sigue igual.", note: "obgleich: más formal que obwohl" },
        { tr: "A pesar de los altos costes, la ciudad ha continuado el proyecto.", note: "genitivo plural: der hohen Kosten" }
      ]
    },
    vocab: [
      "la objeción",
      "la contradicción",
      "el argumento",
      "el debate",
      "el compromiso, el acuerdo intermedio",
      "la desventaja, el inconveniente",
      "aunque (+ indicativo)",
      "a pesar de (+ genitivo)",
      "sin embargo, aun así",
      "sin embargo, no obstante",
      "objetar",
      "contradecir, llevar la contraria (+ dativo)"
    ],
    exercises: [
      {
        q: "¿Qué frase es correcta?",
        opts: [
          "Obwohl es regnet, gehen wir spazieren.",
          "Obwohl es regnet, wir gehen spazieren.",
          "Obwohl regnet es, gehen wir spazieren."
        ],
        why: "Con <i>obwohl</i> el verbo va al final de la subordinada (<i>es regnet</i>), y la principal que sigue empieza con el verbo: <b>gehen wir</b>."
      },
      {
        q: "¿Qué forma es correcta en un texto escrito?",
        opts: [
          "trotz des Regens",
          "trotz der Regen",
          "trotz des Regen"
        ],
        why: "<i>trotz</i> rige genitivo: <i>der Regen</i> pasa a <b>des Regens</b>, con <i>-s</i> también en el sustantivo."
      },
      {
        q: "¿Qué frase es correcta?",
        opts: [
          "Es regnet. Trotzdem gehen wir spazieren.",
          "Es regnet. Trotzdem wir gehen spazieren.",
          "Es regnet. Trotzdem wir spazieren gehen."
        ],
        why: "<i>trotzdem</i> es un adverbio: en primer lugar lo sigue directamente el verbo conjugado, <b>gehen wir</b>."
      },
      {
        q: "Completa: «___ sie krank war, ging sie zur Arbeit.»",
        hint: "conjunción concesiva, verbo al final",
        why: "<b>Obwohl</b> (o <i>obgleich</i>, <i>obschon</i>): abre la subordinada con el verbo <i>war</i> al final."
      },
      {
        q: "Completa: «Trotz ___ schlechten Wetters fand das Konzert statt.»",
        hint: "genitivo neutro",
        why: "<b>des</b>: <i>trotz</i> rige genitivo, y <i>das Wetter</i> pasa a <i>des schlechten Wetters</i>."
      },
      {
        q: "Completa la frase.",
        tr: "El tiempo era malo. Sin embargo, el concierto se celebró.",
        why: "<i>Trotzdem</i> (o <i>Dennoch</i>) en primer lugar, luego el verbo <i>fand</i>; la partícula de <i>stattfinden</i> va al final: <i>fand ... statt</i>."
      },
      {
        q: "Relaciona cada palabra con su significado.",
        pairs: [
          "la objeción",
          "la contradicción",
          "el compromiso, el acuerdo intermedio",
          "la desventaja"
        ]
      },
      {
        q: "Ordena las palabras.",
        tr: "A pesar de los altos costes, la ciudad ha continuado el proyecto.",
        why: "<i>Trotz der hohen Kosten hat die Stadt das Projekt fortgesetzt.</i> El complemento con <i>trotz</i> ocupa el primer lugar, luego el verbo <i>hat</i>, el participio al final."
      },
      {
        q: "Traduce: «Aunque estaba cansado, siguió trabajando.» (weiterarbeiten)",
        why: "<i>Obwohl er müde war, hat er weitergearbeitet</i> (o <i>arbeitete er weiter</i>): después de la oración con <i>obwohl</i> el verbo va delante del sujeto. También es correcta la subordinada al final."
      },
      {
        tr: "Aunque los alquileres de la ciudad han subido mucho, muchos jóvenes quieren vivir allí. A pesar de los precios altos, la demanda es grande.",
        why: "En <i>gestiegen</i> la <b>ie</b> es larga; en <i>Nachfrage</i> el acento cae en <b>Nach</b>; en <i>Leute</i> <b>eu</b> es [ɔʏ]."
      },
      {
        tr: "A pesar de la lluvia, mucha gente vino a la manifestación.",
        why: "En <i>Regens</i> la <b>e</b> de la primera sílaba es larga; en <i>Demonstration</i> el acento cae en la última sílaba, <b>tion</b> [tsi̯oːn]."
      }
    ]
  },
  "lesson:b2-u06-l2": {
    theme: "Condiciones y posturas",
    title: "auch wenn, selbst wenn",
    objectives: [
      "expresar una concesión sobre un caso posible con auch wenn",
      "reforzarla con selbst wenn",
      "unir concesión e hipótesis irreal con el Konjunktiv II",
      "distinguir obwohl de auch wenn"
    ],
    theory: [
      {
        h: "Un hecho o un caso posible",
        p: "<strong>obwohl</strong> habla de un hecho: <em>Obwohl es regnet</em>, llueve de verdad. <strong>auch wenn</strong> sirve para un hecho y también para un caso solo posible: <em>Auch wenn es morgen regnet, fahren wir los</em>, quizá llueva, quizá no. <strong>selbst wenn</strong> es más fuerte: «incluso si». Como con <em>obwohl</em>, la principal que sigue empieza con el verbo: <em>Auch wenn du recht hast, <strong>solltest du</strong> höflich bleiben.</em>"
      },
      {
        h: "Con la hipótesis irreal",
        p: "Si el caso es irreal, entra el <strong>Konjunktiv II</strong> en las dos oraciones: <em>Selbst wenn ich Zeit hätte, würde ich nicht mitkommen.</em> En pasado: <em>Selbst wenn sie gewonnen hätte, wäre sie nicht zufrieden gewesen.</em> Una construcción cercana es <strong>wie ... auch</strong>, «por muy ... que»: <em>Wie schwer es auch sein mag, wir schaffen das.</em> Aquí la principal suele conservar su orden: <em>wir schaffen</em>."
      },
      {
        contrast: "En español, el modo después de <em>aunque</em> depende también de cómo presenta el hablante la información: <em>aunque llueva</em> puede ser una posibilidad, pero también un hecho conocido que no importa (<em>aunque tengas razón, no grites</em>). En alemán decide el sentido en el contexto, fáctico o hipotético, y se marca con la conjunción: <em>obwohl es regnet</em> (hecho) frente a <em>auch wenn es regnet</em> (hecho o posibilidad), normalmente con indicativo en los dos casos; solo para lo irreal pasa al Konjunktiv II: <em>hätte ... würde</em>."
      },
      {
        trap: "<em>selbst</em> aquí no significa «mismo»: <em>selbst wenn</em> es «incluso si». Y después de la subordinada no vuelvas al orden español: <em>Auch wenn es regnet, gehen wir</em>, no <em>Auch wenn es regnet, wir gehen</em>."
      },
      {
        tip: "Pregúntate si lo que concedes es un hecho o solo una posibilidad: si es una posibilidad abierta (<em>aunque llueva mañana</em>), te sirve <em>auch wenn</em>, con indicativo; si es un hecho, <em>obwohl</em> o <em>auch wenn</em>."
      }
    ],
    grammar: {
      title: "auch wenn, selbst wenn y la hipótesis irreal",
      note: "<b>obwohl</b>: un hecho. <b>auch wenn</b>: un hecho o un caso posible. <b>selbst wenn</b>: «incluso si». Hipótesis irreal: <b>Konjunktiv II</b> en las dos oraciones.",
      table: {
        head: ["frase", "qué expresa"],
        rows: [
          ["Obwohl es regnet, gehen wir spazieren.", "un hecho: llueve de verdad"],
          ["Auch wenn es morgen regnet, fahren wir los.", "un caso posible"],
          ["Selbst wenn ich Zeit hätte, würde ich nicht mitkommen.", "hipótesis irreal, Konjunktiv II"],
          ["Wie schwer es auch sein mag, wir schaffen das.", "«por muy ... que»: principal normalmente sin inversión"]
        ]
      },
      examples: [
        { tr: "Aunque llueva, vamos a dar un paseo.", note: "auch wenn: hecho o posibilidad, en indicativo" },
        { tr: "Aunque tuviera tiempo, no iría.", note: "irreal: hätte ... würde" },
        { tr: "Aunque tengas razón, deberías seguir siendo educado.", note: "después de la subordinada: solltest du" },
        { tr: "Salimos mañana, incluso si hace mal tiempo.", note: "selbst wenn: incluso si" },
        { tr: "Por muy difícil que sea, lo conseguiremos.", note: "wie ... auch: la principal queda wir schaffen" },
        { tr: "Aunque hubiera ganado, no habría estado contenta.", note: "irreal en pasado: hätte ... gewonnen, wäre ... gewesen" }
      ]
    },
    vocab: [
      "la condición",
      "el requisito, la condición previa",
      "el riesgo",
      "la decisión",
      "el punto de vista, la postura",
      "la mayoría",
      "aunque, incluso si",
      "incluso si",
      "incluso, hasta",
      "admitir, reconocer",
      "ceder",
      "insistir (auf + dativo: en)"
    ],
    exercises: [
      {
        q: "¿Qué frase es correcta?",
        opts: [
          "Auch wenn es regnet, gehen wir spazieren.",
          "Auch wenn es regnet, wir gehen spazieren.",
          "Auch wenn regnet es, gehen wir spazieren."
        ],
        why: "Verbo al final de la subordinada (<i>es regnet</i>), luego la principal empieza con el verbo: <b>gehen wir</b>."
      },
      {
        q: "¿Qué frase expresa correctamente una hipótesis irreal?",
        opts: [
          "Selbst wenn ich Zeit hätte, würde ich nicht mitkommen.",
          "Selbst wenn ich Zeit habe, würde ich nicht mitkommen.",
          "Selbst wenn hätte ich Zeit, würde ich nicht mitkommen."
        ],
        why: "Irreal: Konjunktiv II en las dos oraciones, <b>hätte ... würde</b>. La segunda mezcla indicativo y Konjunktiv, la tercera no lleva el verbo al final."
      },
      {
        q: "Todavía no sabes si mañana lloverá. ¿Qué frase sirve?",
        opts: [
          "Auch wenn es morgen regnet, fahren wir los.",
          "Obwohl es morgen regnet, fahren wir los.",
          "Trotz es morgen regnet, fahren wir los."
        ],
        why: "<b>auch wenn</b> sirve para un caso solo posible; <i>obwohl</i> presenta la lluvia como un hecho seguro. <i>trotz</i> es una preposición y no abre una oración."
      },
      {
        q: "Completa: «___ wenn du recht hast, solltest du höflich bleiben.»",
        hint: "auch o selbst",
        why: "<b>Auch</b> o <b>Selbst</b>: <i>auch wenn</i> «aunque», <i>selbst wenn</i> «incluso si»."
      },
      {
        q: "Completa: «Selbst wenn ich das Geld hätte, ___ ich das Auto nicht kaufen.»",
        hint: "Konjunktiv II de werden, ich",
        why: "<b>würde</b>: en la hipótesis irreal también la principal va en Konjunktiv II, <i>würde ... kaufen</i>."
      },
      {
        q: "Completa la frase.",
        tr: "Salimos mañana, aunque haga mal tiempo.",
        why: "<i>Wir fahren morgen los, auch wenn das Wetter schlecht ist</i> (o <i>selbst wenn</i>): indicativo <i>ist</i>, donde el español usa el subjuntivo <i>haga</i>; el verbo va al final de la subordinada."
      },
      {
        q: "¿Qué frases son correctas?",
        opts: [
          "Auch wenn es spät ist, rufe ich dich an.",
          "Selbst wenn er fragt, sage ich nichts.",
          "Auch wenn es spät ist, ich rufe dich an.",
          "Selbst wenn fragt er, sage ich nichts."
        ],
        why: "Las dos primeras. La tercera no pone el verbo en primer lugar después de la subordinada, la cuarta no lleva el verbo al final de la subordinada."
      },
      {
        q: "Ordena las palabras.",
        tr: "Aunque tuviera tiempo, no iría con vosotros.",
        why: "<i>Selbst wenn ich Zeit hätte, würde ich nicht mitkommen.</i> <i>hätte</i> cierra la subordinada, <i>würde</i> abre la principal, el infinitivo <i>mitkommen</i> va al final."
      },
      {
        q: "Traduce: «Aunque tenga razón, no debería gritar.» (él; schreien)",
        why: "<i>Auch wenn er recht hat, sollte er nicht schreien</i> (también <i>selbst wenn</i>, o <i>Recht</i> con mayúscula): después de la subordinada, el verbo <i>sollte</i> va primero."
      },
      {
        tr: "Aunque la mayoría estaba en contra, el alcalde mantuvo su plan. Incluso si hay protestas, no quiere ceder.",
        why: "En <i>Mehrheit</i> la <b>e</b> es larga y la <b>h</b> de <i>-heit</i> se pronuncia [h]; en <i>festgehalten</i> el acento cae en <b>fest</b>; en <i>Proteste</i> el acento cae en <b>tes</b>."
      },
      {
        tr: "Aunque tuviera más dinero, seguiría viviendo aquí.",
        why: "En <i>hätte</i> la <b>ä</b> es breve; en <i>würde</i> la <b>ü</b> es breve; en <i>wohnen</i> la <b>o</b> es larga y la <b>h</b> no se pronuncia."
      }
    ]
  },
  "lesson:b2-u06-l3": {
    theme: "Corregir y matizar",
    title: "jedoch, allerdings, sondern, vielmehr",
    objectives: [
      "contraponer dos ideas con jedoch y hingegen",
      "matizar una afirmación con allerdings y zwar ... aber",
      "corregir una afirmación con sondern y vielmehr",
      "reconocer los conectores típicos de la lengua escrita"
    ],
    theory: [
      {
        h: "Contraponer y matizar",
        p: "<strong>jedoch</strong> («sin embargo») es típico de la lengua escrita: funciona como un adverbio y puede ir en primer lugar, con el verbo justo detrás, o dentro de la oración. <em>Der Vorschlag klingt gut. Er ist jedoch zu teuer.</em> <strong>allerdings</strong> («eso sí, aunque») matiza lo que se acaba de decir: <em>Die Wohnung ist schön, allerdings ziemlich laut.</em> <strong>hingegen</strong> («en cambio») contrapone dos elementos o dos situaciones: <em>Ich trinke Kaffee, meine Frau hingegen trinkt Tee.</em> <strong>zwar ... aber</strong> concede y luego objeta: <em>Das Auto ist zwar alt, aber es fährt gut.</em>"
      },
      {
        h: "Corregir",
        p: "<strong>sondern</strong> sigue a una negación (<em>nicht</em>, <em>kein</em>) y pone el elemento correcto en lugar del negado: <em>Das Problem ist nicht das Geld, sondern die Zeit.</em> También forma parte de <em>nicht nur ... sondern auch</em>: <em>Er ist nicht nur Arzt, sondern auch Musiker.</em> <strong>vielmehr</strong> («más bien, al contrario») corrige con más fuerza, a menudo en una oración nueva: <em>Das war kein Zufall. Vielmehr hatte er alles geplant.</em>"
      },
      {
        contrast: "Aquí el español ayuda: distingue <em>pero</em> y <em>sino</em> igual que el alemán distingue <em>aber</em> y <em>sondern</em>. <em>No es rico, pero es feliz</em> = <em>Er ist nicht reich, aber glücklich</em>; <em>no viene hoy, sino mañana</em> = <em>Er kommt nicht heute, sondern morgen</em>. Y <em>no solo ... sino también</em> = <em>nicht nur ... sondern auch</em>. Si dudas, pregúntate si en español dirías <em>sino</em>."
      },
      {
        trap: "<em>sondern</em> introduce una corrección después de una negación (<em>Er kommt nicht heute, sondern morgen</em>); en <em>nicht nur ..., sondern auch</em> añade en cambio un segundo elemento. Si la primera afirmación sigue siendo verdad y añades un límite, necesitas <em>aber</em> o <em>allerdings</em>: <em>Das Essen war gut, aber teuer.</em>"
      },
      {
        tip: "<em>allerdings</em> tiene además un uso como respuesta enfática, «desde luego»: <em>Hat es dir gefallen? – Allerdings!</em>"
      }
    ],
    grammar: {
      title: "Conectores para contraponer, matizar y corregir",
      note: "<b>jedoch</b>, <b>allerdings</b>, <b>hingegen</b>, <b>vielmehr</b> funcionan como adverbios: en primer lugar, el verbo va justo detrás. <b>sondern</b> después de una negación, para corregir, y en <i>nicht nur ... sondern auch</i>.",
      table: {
        head: ["conector", "significado", "uso"],
        rows: [
          ["jedoch", "sin embargo", "lengua escrita; en primer lugar o dentro de la oración"],
          ["allerdings", "eso sí, aunque", "matiza lo que se acaba de decir"],
          ["hingegen", "en cambio", "contrapone dos elementos o situaciones"],
          ["zwar ... aber", "es cierto que ... pero", "concede y luego objeta"],
          ["sondern", "sino", "después de nicht o kein, corrige"],
          ["vielmehr", "más bien, al contrario", "corrige con más fuerza, a menudo en una oración nueva"]
        ]
      },
      examples: [
        { tr: "La propuesta suena bien. Sin embargo, es demasiado cara.", note: "jedoch dentro de la oración" },
        { tr: "El piso es bonito, eso sí, bastante ruidoso.", note: "allerdings: matiza" },
        { tr: "El problema no es el dinero, sino el tiempo.", note: "nicht ..., sondern: corrección" },
        { tr: "No solo es médico, sino también músico.", note: "nicht nur ... sondern auch" },
        { tr: "No fue casualidad. Al contrario, lo había planeado todo.", note: "vielmehr en primer lugar: hatte er" },
        { tr: "Yo tomo café; mi mujer, en cambio, toma té.", note: "hingegen: contraposición entre dos elementos" }
      ]
    },
    vocab: [
      "la tesis",
      "la afirmación",
      "la prueba, el dato que lo demuestra",
      "la conclusión (que se saca)",
      "el contraste, lo opuesto (im Gegensatz zu: a diferencia de)",
      "la limitación, la reserva",
      "sin embargo",
      "eso sí, aunque",
      "sino (después de una negación)",
      "más bien, al contrario",
      "en cambio",
      "es cierto que (zwar ... aber)"
    ],
    exercises: [
      {
        q: "Completa: «Er kommt nicht heute, ___ morgen.»",
        opts: [
          "sondern",
          "denn",
          "obwohl"
        ],
        why: "Después de la negación, <b>sondern</b> pone la información correcta en lugar de la negada, como el <i>sino</i> español. <i>denn</i> introduce una causa, <i>obwohl</i> una subordinada con el verbo al final."
      },
      {
        q: "Completa: «Das Essen war gut, ___ etwas teuer.»",
        opts: [
          "allerdings",
          "sondern",
          "vielmehr"
        ],
        why: "<b>allerdings</b> matiza una afirmación que sigue siendo verdad. <i>sondern</i> y <i>vielmehr</i> corrigen, y aquí no hay nada que corregir."
      },
      {
        q: "Completa: «Sie spricht nicht nur Deutsch, ___ auch Japanisch.»",
        opts: [
          "sondern",
          "denn",
          "vielmehr"
        ],
        why: "<i>nicht nur ... <b>sondern</b> auch</i> corresponde a «no solo ... sino también»."
      },
      {
        q: "Completa: «Er ist nicht krank, ___ nur müde.»",
        hint: "corrección después de una negación",
        why: "<b>sondern</b>: no está enfermo, sino solo cansado."
      },
      {
        q: "Completa: «Das Auto ist ___ alt, aber es fährt gut.»",
        hint: "es cierto que ... pero",
        why: "<b>zwar</b> ... <i>aber</i>: concedes que es viejo y luego añades la objeción."
      },
      {
        q: "Completa la frase.",
        tr: "No fue casualidad. Al contrario, lo había planeado todo.",
        why: "<i>Vielmehr hatte er alles geplant</i>: <i>vielmehr</i> en primer lugar, luego el verbo <i>hatte</i>, el participio <i>geplant</i> al final."
      },
      {
        q: "Relaciona cada conector con su significado.",
        pairs: [
          "sin embargo",
          "eso sí, aunque",
          "más bien, al contrario",
          "en cambio (en una contraposición)"
        ]
      },
      {
        q: "Ordena las palabras.",
        tr: "Yo tomo café; mi mujer, en cambio, toma té.",
        why: "<i>Ich trinke Kaffee, meine Frau hingegen trinkt Tee</i>: <i>hingegen</i> detrás del sujeto; también vale detrás del verbo, <i>meine Frau trinkt hingegen Tee</i>."
      },
      {
        q: "Traduce: «El problema no es el dinero, sino el tiempo.»",
        why: "<i>Das Problem ist nicht das Geld, sondern die Zeit</i>: después de la negación, la corrección lleva <i>sondern</i>, como <i>sino</i>."
      },
      {
        tr: "Es cierto que el estudio muestra avances, pero los resultados todavía no son seguros. El problema no es la técnica, sino la falta de dinero.",
        why: "En <i>Fortschritte</i> el acento cae en <b>Fort</b>; en <i>Ergebnisse</i> el acento cae en <b>geb</b>; en <i>Technik</i> <b>ch</b> es [ç]."
      },
      {
        tr: "No se trata de dinero; se trata más bien de respeto.",
        why: "En <i>vielmehr</i> el acento cae en <b>mehr</b>; en <i>Respekt</i> el acento cae en <b>spekt</b>; en <i>geht</i> la <b>h</b> no se pronuncia."
      }
    ]
  },
  "lesson:b2-u06-test": {
    theme: "Comprobación",
    title: "Test: Aunque llueva",
    objectives: [
      "comprobar las concesivas y los conectores, y repasar el Konjunktiv II, el Konjunktiv I y la pasiva del nivel B2"
    ],
    theory: [
      {
        p: "Doce preguntas sobre la unidad y sobre todo el nivel B2. Se aprueba con el 70%. No vuelvas a mirar las lecciones mientras respondes: si no recuerdas algo, es mejor volver atrás y repasar."
      }
    ],
    exercises: [
      {
        q: "Completa: «___ des Regens fand das Fest statt.»",
        hint: "preposición concesiva + genitivo",
        why: "<b>Trotz</b>: preposición concesiva con el genitivo <i>des Regens</i>."
      },
      {
        q: "Completa: «Wenn ich mehr Zeit gehabt ___, wäre ich gekommen.»",
        hint: "Konjunktiv II de haben, ich",
        why: "<b>hätte</b>: hipótesis irreal en pasado, <i>hätte ... gehabt</i>."
      },
      {
        q: "Completa, en estilo periodístico: «Sie erklärte, sie ___ das Problem nicht gekannt.»",
        hint: "Konjunktiv I de haben, sie (ella)",
        why: "<b>habe</b>: estilo indirecto en pasado, <i>habe ... gekannt</i>."
      },
      {
        q: "Completa en pasiva, en Präteritum: «Die Brücke ___ im Jahr 1900 gebaut.»",
        hint: "Präteritum de werden, tercera persona del singular",
        why: "<b>wurde</b>: pasiva con <i>werden</i> + participio, <i>wurde ... gebaut</i>."
      },
      {
        q: "Completa: «Obwohl er krank war, ...»",
        opts: [
          "ging er zur Arbeit.",
          "er ging zur Arbeit.",
          "ging zur Arbeit er."
        ],
        why: "Después de la subordinada, la principal empieza con el verbo: <b>ging er</b>."
      },
      {
        q: "¿Qué frase es correcta?",
        opts: [
          "Das Formular muss heute ausgefüllt werden.",
          "Das Formular muss heute ausgefüllt worden.",
          "Das Formular muss heute ausfüllen werden."
        ],
        why: "Pasiva con modal: modal + participio + <b>werden</b>. <i>worden</i> se usa en los tiempos compuestos, no después de un modal en presente."
      },
      {
        q: "Completa: «Er tut so, als ob er nichts ___.»",
        opts: [
          "wüsste",
          "gewusst",
          "wissen"
        ],
        why: "En las comparativas irreales con <i>als ob</i> se usa normalmente el Konjunktiv II: entre estas opciones, <b>wüsste</b> es la única correcta."
      },
      {
        q: "¿Qué frases son correctas?",
        opts: [
          "Auch wenn es regnet, gehen wir spazieren.",
          "Trotz des Regens gehen wir spazieren.",
          "Obwohl es regnet, wir gehen spazieren.",
          "Trotz es regnet, gehen wir spazieren."
        ],
        why: "Las dos primeras. La tercera no pone el verbo en primer lugar después de la subordinada; la cuarta usa <i>trotz</i> como conjunción, pero es una preposición."
      },
      {
        q: "Completa la frase.",
        tr: "Aunque tuviera tiempo, no iría con vosotros.",
        why: "<i>Selbst wenn ich Zeit hätte, würde ich nicht mitkommen</i>: Konjunktiv II en las dos oraciones."
      },
      {
        q: "Traduce: «A pesar del tráfico, llegamos puntuales.» (der Verkehr)",
        why: "<i>Trotz des Verkehrs sind wir pünktlich angekommen</i>: <i>trotz</i> + genitivo; también valen <i>kamen wir ... an</i> y la versión con <i>wir</i> en primer lugar."
      },
      {
        tr: "Aunque el gobierno había prometido nuevas leyes, durante mucho tiempo no cambió nada. Los críticos dijeron que no se había tomado en serio a los ciudadanos.",
        why: "En <i>Regierung</i> el acento cae en <b>gie</b>; en <i>versprochen</i> la <b>v</b> suena [f]; en <i>Kritiker</i> el acento cae en <b>Kri</b>."
      },
      {
        tr: "Aunque los costes son altos, el proyecto debería continuar.",
        why: "En <i>Kosten</i> la <b>o</b> es breve; en <i>Projekt</i> el acento cae en <b>jekt</b>; en <i>fortgesetzt</i> el acento cae en <b>fort</b>."
      }
    ]
  }
});
