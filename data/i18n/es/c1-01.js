/* ============================================================
   Learner-language text (es) for data/core/c1-01.js, unit c1-u01.
   Keys point at ids in the neutral layer; arrays merge by index,
   so their length has to match core.
   Checked by scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("es", {
  "unit:c1-u01": {
    title: "Los rostros de werden",
    grammarNote: "Las cinco funciones de werden (volverse, futuro, conjetura, pasiva, würde) · geworden y worden · adjetivos y participios sustantivados (der Bekannte, ein Bekannter) · etwas Neues, alles Gute · höchst, äußerst, überaus y el superlativo con am"
  },
  "lesson:c1-u01-l1": {
    theme: "Cambios y previsiones",
    title: "Una palabra, cinco funciones",
    objectives: [
      "reconocer las cinco funciones de werden en un texto",
      "hacer conjeturas sobre el pasado con el Futur II",
      "distinguir geworden de worden en el Perfekt",
      "no confundir una pasiva de presente con un futuro"
    ],
    theory: [
      {
        h: "Qué acompaña a werden",
        p: "Para saber qué hace <strong>werden</strong> en una oración, mira qué lo acompaña. Con un sustantivo o un adjetivo es un verbo pleno, «volverse, hacerse»: <em>Sie wird Ärztin. Es wird dunkel.</em> Con un infinitivo forma el <strong>futuro</strong> (<em>Wir werden Sie informieren</em>) o, a menudo con <em>wohl</em>, una <strong>conjetura</strong> (<em>Er wird wohl im Büro sein</em>). Con un participio II forma la <strong>pasiva</strong>: <em>Der Antrag wird bearbeitet.</em> La forma <strong>würde</strong> + infinitivo es el Konjunktiv II: <em>Ich würde das nicht tun.</em> Para una conjetura sobre el pasado se usa el <strong>Futur II</strong>, <em>werden</em> + participio II + <em>haben</em> o <em>sein</em>: <em>Er wird den Termin wohl vergessen haben. Sie wird schon losgefahren sein.</em>"
      },
      {
        h: "geworden o worden",
        p: "En el Perfekt el verbo pleno usa <strong>geworden</strong>: <em>Sie ist Ärztin geworden. Es ist dunkel geworden.</em> La pasiva usa <strong>worden</strong>, sin <em>ge-</em>: <em>Das Haus ist 1950 gebaut worden.</em> Los dos llevan <em>sein</em> como auxiliar."
      },
      {
        contrast: "El español reparte estas funciones entre formas distintas: <em>volverse, hacerse, ponerse, convertirse en</em> o <em>llegar a ser</em> para el cambio (y cada uno según el tipo de cambio: <em>ponerse nervioso, volverse loco, hacerse médica</em>), el futuro (<em>le informaremos</em>), <em>ser</em> o el <em>se</em> de la pasiva refleja (<em>la solicitud se tramita</em>) y el condicional (<em>no lo haría</em>). En alemán siempre está <em>werden</em>, y la función se deduce de la construcción y del contexto. Hay una coincidencia útil: el futuro de conjetura español (<em>estará en la oficina</em>) y el futuro perfecto (<em>habrá olvidado la cita</em>) corresponden a <em>werden</em> + infinitivo y al Futur II. Pero, igual que en español, el futuro y la conjetura tienen la misma forma (<em>Er wird zu Hause sein</em>), y sin pistas como <em>wohl</em> o una indicación de tiempo pueden quedar ambiguos."
      },
      {
        trap: "<em>Der Antrag wird bearbeitet</em> no es un futuro por su forma: es una pasiva de presente (que, como todo presente, puede referirse al futuro si el contexto lo indica: <em>Der Antrag wird morgen bearbeitet</em>, «la solicitud se tramitará mañana»), «la solicitud se tramita» o «está siendo tramitada». No leas el <em>wird</em> como «será» cuando detrás hay solo un participio, sin <em>haben</em> o <em>sein</em> al final (con ellos es el Futur II: <em>Er wird den Termin vergessen haben</em>; en pasiva, con <em>worden sein</em>: <em>Der Antrag wird bearbeitet worden sein</em>). Y la conjetura sobre el pasado no se hace con el futuro simple: «habrá estado cansado» es <em>Er wird müde gewesen sein</em> (Futur II), no <em>Er wird müde sein</em>, que según el contexto es una conjetura sobre el presente («estará cansado») o una previsión."
      },
      {
        tip: "Ante un <em>werden</em> difícil, mira la construcción completa al final de la oración: <em>werden</em> con el participio II de otro verbo (<em>wird bearbeitet</em>) es la pasiva, mientras que <em>geworden</em> (<em>ist müde geworden</em>) es el Perfekt de «volverse»; <em>werden</em> + participio II + <em>haben</em> o <em>sein</em> (<em>wird vergessen haben</em>) es el Futur II activo, y con <em>worden sein</em> (<em>wird bearbeitet worden sein</em>) el Futur II pasivo (conjetura sobre el pasado, o acción terminada antes de un momento futuro: <em>Bis morgen werde ich den Bericht fertiggestellt haben</em>), y un infinitivo (<em>informieren, sein</em>) indica el futuro o la conjetura."
      }
    ],
    grammar: {
      title: "Las funciones de werden",
      note: "<b>Sustantivo o adjetivo</b>: volverse, hacerse. <b>Infinitivo</b>: futuro o, a menudo con <i>wohl</i>, conjetura. <b>Participio II</b>: pasiva. <b>würde + infinitivo</b>: Konjunktiv II. Perfekt: <i>geworden</i> (volverse), <i>worden</i> (pasiva).",
      table: {
        head: ["función", "qué lo acompaña", "ejemplo"],
        rows: [
          ["volverse, hacerse", "un sustantivo o un adjetivo", "Sie wird Ärztin."],
          ["futuro", "un infinitivo", "Wir werden Sie informieren."],
          ["conjetura", "un infinitivo, a menudo con wohl", "Er wird wohl im Büro sein."],
          ["pasiva", "un participio II", "Der Antrag wird bearbeitet."],
          ["Konjunktiv II", "würde + infinitivo", "Ich würde das nicht tun."]
        ]
      },
      examples: [
        { tr: "La pequeña start-up se ha convertido entretanto en un grupo mundial.", note: "verbo pleno «convertirse en»: aus ... ist ... geworden" },
        { tr: "Poco a poco se va viendo claro que el proyecto podría fracasar.", note: "verbo pleno con adjetivo predicativo y subordinada pospuesta (dass ...)" },
        { tr: "Le informaremos a tiempo.", note: "futuro: werden + infinitivo" },
        { tr: "La solicitud se está tramitando ahora mismo.", note: "pasiva de presente, no futuro" },
        { tr: "En tu lugar, yo no lo haría.", note: "Konjunktiv II con würde" },
        { tr: "Todavía estará en la oficina.", note: "conjetura: werden + wohl + infinitivo" }
      ]
    },
    vocab: [
      "el cambio",
      "el desarrollo, la evolución",
      "el estado, las condiciones",
      "la suposición, la hipótesis",
      "la previsión, el pronóstico",
      "la solicitud (oficial), la instancia",
      "cambiar, transformarse",
      "surgir, originarse",
      "suponer",
      "tramitar, procesar (un expediente)",
      "poco a poco, gradualmente",
      "probablemente, presumiblemente"
    ],
    exercises: [
      {
        q: "En un mensaje del hospital: «Ihr Vater wird morgen früh operiert.» ¿Qué hace werden aquí?",
        opts: [
          "forma una pasiva de presente, con valor de futuro por morgen",
          "forma un futuro activo: el padre operará",
          "expresa una conjetura: quizá lo operarán"
        ],
        why: "Con el participio II <i>operiert</i> es una <b>pasiva</b>; el presente tiene valor de futuro gracias a <i>morgen früh</i>, como ocurre a menudo en alemán. No hay <i>wohl</i> ni infinitivo: no es una conjetura."
      },
      {
        q: "Un compañero está preocupado por una cifra de un informe. Le respondes: «Das wird schon stimmen.» ¿Qué le comunicas?",
        opts: [
          "una conjetura tranquilizadora: «ya verás cómo está bien»",
          "una previsión: «llegará a ser correcto»",
          "una pasiva: «se está corrigiendo»"
        ],
        why: "<i>werden</i> + infinitivo con <i>schon</i> expresa una <b>conjetura</b> que tranquiliza; <i>stimmen</i> es un infinitivo, no un participio, así que no es una pasiva."
      },
      {
        q: "En un artículo económico: «Seit der Fusion ist aus zwei Konkurrenten ein einziger Konzern ___.»",
        opts: [
          "geworden",
          "worden",
          "werden"
        ],
        why: "<i>werden</i> como verbo pleno («convertirse en») tiene el participio <b>geworden</b>. <i>worden</i> es solo de la pasiva."
      },
      {
        q: "Completa en pasiva: «Das Haus ist 1950 gebaut ___.»",
        hint: "participio de werden en la pasiva",
        why: "<b>worden</b>: en el Perfekt de la pasiva el participio de <i>werden</i> pierde el <i>ge-</i>."
      },
      {
        q: "Tu amigo no ha venido a la cita. Supones: «Er wird den Termin wohl vergessen ___.»",
        hint: "Futur II: werden + participio + auxiliar",
        why: "<b>haben</b>: conjetura sobre el pasado con el Futur II, <i>wird ... vergessen haben</i>, «habrá olvidado la cita»."
      },
      {
        q: "Completa la frase.",
        tr: "En tu lugar, yo no lo haría.",
        why: "<i>An deiner Stelle würde ich das nicht tun</i> (o <i>machen</i>): Konjunktiv II con <i>würde</i> y el infinitivo al final."
      },
      {
        q: "¿En qué frases forma werden la pasiva?",
        opts: [
          "Der Brief wird morgen geschickt.",
          "Die Tür wurde geöffnet.",
          "Er wird morgen kommen.",
          "Sie wird Lehrerin."
        ],
        why: "Las dos primeras llevan un participio II (<i>geschickt, geöffnet</i>): pasiva. En la tercera <i>werden</i> + infinitivo es un futuro, y en la cuarta, con un sustantivo, significa «hacerse, volverse»."
      },
      {
        q: "Reformula con el Futur II de conjetura: «Probablemente (él) ha olvidado la cita.» (der Termin)",
        why: "<i>Er wird den Termin wohl vergessen haben</i>: <i>werden</i> + participio + <i>haben</i>, con <i>wohl</i> o <i>vermutlich</i> en lugar de «probablemente» (<i>sicher</i> expresaría más certeza)."
      },
      {
        tr: "La ciudad es cada vez más grande. Dentro de diez años tendrá probablemente el doble de habitantes, y muchas casas viejas serán derribadas.",
        why: "En <i>Einwohner</i> el acento cae en <b>Ein</b>; en <i>doppelt</i> la <b>o</b> es breve; en <i>abgerissen</i> la <b>b</b> ante <i>g</i> se pronuncia [p]."
      },
      {
        tr: "Si tuviera más tiempo, me haría médica.",
        why: "En <i>hätte</i> la <b>ä</b> es breve; en <i>Ärztin</i> la <b>z</b> se pronuncia [ts]; en <i>werden</i> la <b>r</b> se vocaliza."
      }
    ]
  },
  "lesson:c1-u01-l2": {
    theme: "Personas y juicios",
    title: "der Bekannte, etwas Neues",
    objectives: [
      "declinar adjetivos y participios usados como sustantivos",
      "elegir la terminación según el artículo (der Bekannte, ein Bekannter)",
      "usar etwas, nichts y alles con un adjetivo sustantivado",
      "expresar un juicio sobre un resultado"
    ],
    theory: [
      {
        h: "El adjetivo que se hace sustantivo",
        p: "Muchas personas se designan con un adjetivo o un participio usado como sustantivo: <em>der Bekannte</em> (el conocido), <em>der Angestellte</em> (el empleado), <em>der Erwachsene</em>, <em>der Verletzte</em>. Se escriben con mayúscula, pero se declinan como adjetivos: la terminación depende del artículo. <em>der Bekannte, die Bekannten</em>, pero <em>ein Bekannter, Bekannte</em> (plural sin artículo). Con <em>kein</em>, el singular sigue a <em>ein</em> (<em>kein Bekannter</em>) y el plural a los posesivos (<em>keine Bekannten</em>)."
      },
      {
        h: "etwas Neues, nichts Besseres, alles Gute",
        p: "Tras <strong>etwas, nichts, viel, wenig</strong> el adjetivo sustantivado es neutro, con mayúscula y la terminación <em>-es</em> en nominativo y acusativo: <em>etwas Neues, nichts Besseres, viel Interessantes</em>. Tras <strong>alles</strong> toma <em>-e</em>: <em>alles Gute, alles Wichtige</em>."
      },
      {
        contrast: "En español <em>el conocido</em> y <em>un conocido</em> tienen la misma forma (cambia solo el artículo), y lo neutro se expresa con <em>lo</em> + adjetivo (<em>lo nuevo, lo bueno, todo lo importante</em>) o con <em>algo, nada</em> + adjetivo. <em>algo nuevo</em> no lleva preposición, igual que <em>etwas Neues</em>: el adjetivo sigue directamente a <em>etwas</em>. Lo que cambia es que en alemán el adjetivo va con mayúscula y con la terminación <em>-es</em>, y que en las personas la terminación varía con el artículo y con el caso (<em>der Bekannte</em>, <em>ein Bekannter</em>, <em>dem Bekannten</em>), mientras que en ejemplos como estos el español marca el género con <em>-o/-a</em> y con el artículo (<em>el conocido, la conocida</em>)."
      },
      {
        trap: "Como en español <em>un conocido</em> no cambia, es fácil dejar una terminación fija. Pero <em>der Bekannte</em> se comporta como un adjetivo: <em>mit einem Bekannten</em>, y en nominativo <em>ein Bekannter</em>, no <em>ein Bekannte</em>. Y en plural sin artículo, en nominativo y acusativo: <em>Wir haben Verwandte in Wien</em>, no <em>Verwandten</em>; en dativo, en cambio, <em>mit Verwandten</em>."
      },
      {
        tip: "Si no sabes qué terminación poner, imagina un sustantivo detrás del adjetivo: <em>ein bekannter (Mann)</em> → <em>ein Bekannter</em>; <em>dem bekannten (Mann)</em> → <em>dem Bekannten</em>."
      }
    ],
    grammar: {
      title: "Adjetivos y participios sustantivados",
      note: "Se declinan como adjetivos: <b>der Bekannte</b>, <b>ein Bekannter</b>, <b>die Bekannten</b>, <b>Bekannte</b>. Tras <i>etwas, nichts, viel, wenig</i>: <b>-es</b> (etwas Neues). Tras <i>alles</i>: <b>-e</b> (alles Gute).",
      table: {
        head: ["", "con der, die, das", "con ein o sin artículo"],
        rows: [
          ["masculino", "der Bekannte", "ein Bekannter"],
          ["femenino", "die Bekannte", "eine Bekannte"],
          ["plural", "die Bekannten", "Bekannte"],
          ["dativo masculino", "dem Bekannten", "einem Bekannten"]
        ]
      },
      examples: [
        { tr: "Un conocido me recomendó el piso.", note: "ein Bekannter: terminación -er tras ein" },
        { tr: "Los empleados trabajan hoy más tiempo.", note: "die Angestellten: -en tras die" },
        { tr: "El herido fue llevado al hospital.", note: "der Verletzte: participio sustantivado" },
        { tr: "Casi nada resulta más irritante que perder una conexión.", note: "etwas + comparativo sustantivado: etwas Ärgerlicheres" },
        { tr: "No hay nada mejor que el pan recién hecho.", note: "nichts Besseres: comparativo sustantivado" },
        { tr: "¡Todo lo mejor en tu cumpleaños!", note: "alles Gute: -e tras alles" }
      ]
    },
    vocab: [
      "el conocido",
      "el empleado, el trabajador",
      "el adulto",
      "el pariente",
      "el joven, el adolescente",
      "el diputado",
      "excelente, magnífico",
      "mediocre",
      "logrado, bien hecho",
      "fallido, malogrado",
      "convincente",
      "único, sin igual"
    ],
    exercises: [
      {
        q: "En una noticia económica: «Die Zahl der ___ ist im Herbst gestiegen.»",
        opts: [
          "Arbeitslosen",
          "Arbeitslose",
          "Arbeitsloser"
        ],
        why: "Genitivo plural tras <i>der</i>: el adjetivo sustantivado toma <b>-en</b>, <i>die Zahl der Arbeitslosen</i>. <i>Arbeitslose</i> es el plural en nominativo o acusativo sin artículo; <i>Arbeitsloser</i> es el singular tras <i>ein</i> o el genitivo plural sin artículo (<i>die Zahl Arbeitsloser</i>). Tras <i>der</i> en genitivo plural hace falta <i>Arbeitslosen</i>."
      },
      {
        q: "En un comunicado sindical: «Die Interessen der ___ wurden bei der Umstrukturierung kaum berücksichtigt.»",
        opts: [
          "Beschäftigten",
          "Beschäftigte",
          "Beschäftigter"
        ],
        why: "Genitivo plural tras <i>der</i>: el participio sustantivado toma <b>-en</b>, <i>der Beschäftigten</i> (de los empleados)."
      },
      {
        q: "En un reportaje sobre la fusión: «Den Angestellten stand nach der Übernahme nichts ___ bevor.»",
        opts: [
          "Gutes",
          "Gute",
          "Guten"
        ],
        why: "Tras <i>nichts</i> el adjetivo sustantivado es neutro con <b>-es</b>, también en una oración compleja: <i>nichts Gutes</i> («nada bueno»). <i>Gute</i> va con <i>alles</i>."
      },
      {
        q: "Completa: «Es gibt nichts ___ als frisches Brot.»",
        opts: [
          "Besseres",
          "Bessere",
          "Besser"
        ],
        why: "Tras <i>nichts</i> el adjetivo sustantivado es neutro con <b>-es</b>: <i>nichts Besseres</i>, también en comparativo."
      },
      {
        q: "Completa la frase: en el primer hueco «jóvenes», en el segundo «adultos».",
        tr: "La entrada es gratuita para los jóvenes; los adultos pagan diez euros.",
        why: "<i>Jugendliche</i> y <i>Erwachsene</i>: plural sin artículo, por tanto <i>-e</i> y no <i>-en</i>."
      },
      {
        q: "Relaciona cada palabra con su significado.",
        pairs: [
          "el conocido",
          "el empleado",
          "el pariente",
          "el diputado"
        ]
      },
      {
        q: "Ordena las palabras.",
        tr: "El herido fue llevado al hospital.",
        why: "<i>Der Verletzte wurde ins Krankenhaus gebracht.</i> <i>der Verletzte</i> es un participio sustantivado; <i>wurde ... gebracht</i> es una pasiva en Präteritum."
      },
      {
        q: "Traduce: «He hablado con un conocido del herido.»",
        why: "<i>Ich habe mit einem Bekannten des Verletzten gesprochen</i>: dos sustantivados, en dativo tras <i>mit einem</i> (<i>Bekannten</i>) y en genitivo tras <i>des</i> (<i>Verletzten</i>), los dos en <i>-en</i>."
      },
      {
        tr: "Ayer me encontré con un viejo conocido. Me contó algo interesante: su empresa busca nuevos empleados.",
        why: "En <i>Bekannten</i> el acento cae en <b>kann</b>; en <i>Interessantes</i> el acento cae en <b>sant</b>."
      },
      {
        tr: "Para los adultos la entrada cuesta doce euros.",
        why: "En <i>Erwachsene</i> el acento cae en <b>wach</b> y <b>chs</b> se pronuncia [ks]; en <i>Eintritt</i> el acento cae en <b>Ein</b>; en <i>zwölf</i> la <b>ö</b> es breve."
      }
    ]
  },
  "lesson:c1-u01-l3": {
    theme: "Juzgar la calidad",
    title: "höchst, äußerst, am besten",
    objectives: [
      "expresar un grado muy alto sin comparación",
      "distinguir äußerst schwierig de am schwierigsten",
      "usar höchst, äußerst, überaus, ziemlich",
      "formular un juicio sobre un resultado o una obra"
    ],
    theory: [
      {
        h: "Un grado muy alto sin comparación",
        p: "Para decir que algo tiene una cualidad en grado muy alto, sin compararlo con otra cosa, el alemán pone un adverbio delante del adjetivo: <em>sehr</em> y, en la lengua escrita, <strong>höchst</strong>, <strong>äußerst</strong>, <strong>überaus</strong>; <strong>besonders</strong> («especialmente») en cambio resalta una cualidad, a menudo frente a otras. <em>Das ist ein höchst interessanter Vorschlag. Die Lage ist äußerst schwierig.</em> Para atenuar: <strong>ziemlich</strong> (bastante, más bien), <em>relativ</em>, <em>einigermaßen</em>."
      },
      {
        h: "El superlativo sigue siendo una comparación",
        p: "Por lo general <em>am</em> + superlativo (<em>am kürzesten, am besten</em>) compara una cosa con otras; hay también usos sin una comparación real, como <em>Das weißt du am besten selbst</em>. El valor ordinario, el de esta lección, es la comparación: <em>Von den drei Wegen ist dieser am kürzesten.</em> En la lengua escrita formal existe además <em>aufs</em> + superlativo, con mayúscula o minúscula, con valor de grado muy alto: <em>Sie hat uns aufs Herzlichste begrüßt.</em>"
      },
      {
        contrast: "El español forma el superlativo absoluto con <em>-ísimo</em> (<em>dificilísimo, interesantísimo</em>) o con <em>muy, sumamente, en extremo</em>. El alemán no tiene un sufijo así: <em>dificilísimo</em> es <em>äußerst schwierig</em> o <em>sehr schwierig</em>. Y <em>am schwierigsten</em> normalmente no es «dificilísimo», sino «el más difícil» en una comparación, aunque tiene algunos usos sin comparación real."
      },
      {
        trap: "<em>höchst</em> delante de un adjetivo es un adverbio y no cambia, igual que <em>sumamente</em> en español: <em>ein höchst interessanter Vorschlag</em>, no <em>ein höchster interessanter Vorschlag</em>. La terminación va solo en el adjetivo que sigue."
      },
      {
        tip: "En la lengua hablada también se oyen <em>total, echt, super</em> (<em>echt gut, total spannend</em>); en una carta formal o en un informe se queda <em>äußerst, höchst, überaus</em>."
      }
    ],
    grammar: {
      title: "Grado muy alto y superlativo",
      note: "<b>höchst, äußerst, überaus</b> + adjetivo: grado muy alto, sin comparación (más fuertes que <i>sehr</i>). <b>besonders</b> resalta en cambio una cualidad, a menudo frente a otras. <b>am</b> + superlativo: comparación. <b>aufs</b> + superlativo: grado muy alto, escrito formal.",
      table: {
        head: ["forma", "valor", "ejemplo"],
        rows: [
          ["sehr, äußerst, höchst + adjetivo", "grado muy alto", "Die Lage ist äußerst schwierig."],
          ["ziemlich + adjetivo", "grado medio-alto", "Der Film war ziemlich langweilig."],
          ["am + superlativo", "comparación", "Dieser Weg ist am kürzesten."],
          ["aufs + superlativo", "grado muy alto, formal", "Sie hat uns aufs Herzlichste begrüßt."]
        ]
      },
      examples: [
        { tr: "Es una propuesta sumamente interesante.", note: "höchst: adverbio, no se declina" },
        { tr: "La situación es dificilísima.", note: "äußerst en lugar de -ísimo" },
        { tr: "El proyecto tuvo un éxito extraordinario.", note: "überaus: escrito formal" },
        { tr: "Este camino es el más corto.", note: "am kürzesten: comparación" },
        { tr: "Nos saludó de la manera más cordial.", note: "aufs Herzlichste: formal" },
        { tr: "La película era bastante aburrida.", note: "ziemlich: atenúa" }
      ]
    },
    vocab: [
      "la calidad",
      "la impresión",
      "la valoración, la reseña",
      "el juicio",
      "el criterio, la vara de medir",
      "el rendimiento, la prestación",
      "sumamente, en sumo grado",
      "extremadamente",
      "en extremo, sobremanera",
      "bastante, más bien",
      "impresionante",
      "notable, destacable"
    ],
    exercises: [
      {
        q: "En un dictamen quieres atenuar el juicio sobre los resultados. ¿Qué frase eliges?",
        opts: [
          "Die Ergebnisse sind ziemlich widersprüchlich.",
          "Die Ergebnisse sind äußerst widersprüchlich.",
          "Die Ergebnisse sind höchst widersprüchlich."
        ],
        why: "<b>ziemlich</b> atenúa («bastante contradictorios»); <i>äußerst</i> y <i>höchst</i> refuerzan el juicio."
      },
      {
        q: "De los tres caminos, este es el más corto: «Von den drei Wegen ist dieser ___.»",
        opts: [
          "am kürzesten",
          "äußerst kurz",
          "höchst kurz"
        ],
        why: "Aquí hay una comparación entre tres caminos: <b>am kürzesten</b>. <i>äußerst kurz</i> diría solo que es muy corto."
      },
      {
        q: "Respondes por carta a una oferta comercial. ¿Qué frase expresa un interés muy alto, sin comparación y en el registro adecuado?",
        opts: [
          "Ihr Angebot ist für uns äußerst interessant.",
          "Ihr Angebot ist für uns echt super.",
          "Ihr Angebot ist für uns am interessantesten."
        ],
        why: "En una carta formal se usa <b>äußerst</b> (o <i>höchst</i>); <i>echt super</i> es coloquial. <i>am interessantesten</i> es una comparación y aquí no hay nada con qué comparar."
      },
      {
        q: "En una reseña: «Das Ergebnis übertraf selbst die ___ Erwartungen.» (superlativo de kühn)",
        hint: "superlativo atributivo tras die, plural",
        why: "<b>kühnsten</b>: superlativo usado como atributo, con la terminación <i>-en</i> tras <i>die</i>; «superó incluso las expectativas más audaces»."
      },
      {
        q: "Completa: «Die Aussicht ist ___ beeindruckend.»",
        hint: "«extremadamente», empieza por ä",
        why: "<b>äußerst</b>: grado muy alto sin comparación, propio de la lengua escrita."
      },
      {
        q: "Completa la frase.",
        tr: "Nos saludó de la manera más cordial.",
        why: "<i>Sie hat uns aufs Herzlichste begrüßt</i> (también se escribe <i>aufs herzlichste</i>): <i>aufs</i> + superlativo, fórmula de la lengua escrita formal."
      },
      {
        q: "Relaciona cada palabra con su significado.",
        pairs: [
          "la valoración, la reseña",
          "el juicio",
          "el criterio, la vara de medir",
          "la impresión"
        ]
      },
      {
        q: "Escribe en registro formal: «El resultado es sumamente notable, aunque los costes han sido bastante altos.»",
        why: "<i>Das Ergebnis ist äußerst bemerkenswert, auch wenn die Kosten ziemlich hoch waren</i>: <i>äußerst</i> (o <i>höchst, überaus</i>) para el grado alto, <i>ziemlich</i> para atenuar; valen también <i>obwohl</i> y el Perfekt <i>gewesen sind</i>."
      },
      {
        tr: "La nueva exposición merece de verdad ser vista. Los cuadros son sumamente inusuales, y los visitantes quedaron en extremo impresionados.",
        why: "En <i>Ausstellung</i> el acento cae en <b>Aus</b>; en <i>sehenswert</i> la <b>h</b> es muda; en <i>beeindruckt</i> la <b>ee</b> no es larga: <i>be-</i> y <i>ein</i> se pronuncian por separado."
      },
      {
        tr: "Es un resultado sumamente notable.",
        why: "En <i>bemerkenswertes</i> el acento cae en <b>mer</b>; en <i>Ergebnis</i> el acento cae en <b>geb</b>; en <i>höchst</i> <b>ch</b> se pronuncia [ç]."
      }
    ]
  },
  "lesson:c1-u01-test": {
    theme: "Comprobación",
    title: "Test: Los rostros de werden",
    objectives: [
      "comprobar las funciones de werden, los adjetivos sustantivados y el grado muy alto"
    ],
    theory: [
      {
        p: "Diez preguntas sobre toda la unidad. Se aprueba con el 70%. No vuelvas a mirar las lecciones mientras respondes: si no recuerdas algo, es mejor volver atrás y repasar."
      }
    ],
    exercises: [
      {
        q: "Completa: «Aus der Idee zweier Studenten ist ein erfolgreiches Unternehmen ___.»",
        hint: "participio de werden «volverse»",
        why: "<b>geworden</b>: con el significado de «volverse, convertirse en» el participio lleva <i>ge-</i>."
      },
      {
        q: "Completa: «Ich habe gestern mit einem ___ von dir gesprochen.»",
        hint: "de bekannt, masculino, dativo tras einem",
        why: "<b>Bekannten</b>: tras <i>einem</i> (dativo) el adjetivo sustantivado toma <i>-en</i>."
      },
      {
        q: "Completa: «Wir wohnen zurzeit in der Wohnung eines ___.»",
        hint: "de verwandt, masculino, genitivo tras eines",
        why: "<b>Verwandten</b>: tras <i>eines</i> (genitivo) el adjetivo sustantivado toma <i>-en</i>."
      },
      {
        q: "La compañera no contesta al teléfono. ¿Qué significa «Sie wird den Zug verpasst haben»?",
        opts: [
          "una conjetura sobre el pasado: «habrá perdido el tren»",
          "un futuro: «perderá el tren»",
          "una pasiva: «el tren ha sido perdido»"
        ],
        why: "<i>werden</i> + participio + <i>haben</i> es el <b>Futur II</b>: aquí una conjetura sobre algo que ya ha ocurrido."
      },
      {
        q: "En un informe técnico: ¿qué frase formula la causa de la avería con más cautela?",
        opts: [
          "Der Fehler wird wohl bei der Software liegen.",
          "Der Fehler liegt bei der Software.",
          "Der Fehler wird bei der Software gesucht."
        ],
        why: "<i>werden</i> + infinitivo con <i>wohl</i> presenta la causa como una <b>conjetura</b>; la segunda es una afirmación, la tercera una pasiva («se está buscando»)."
      },
      {
        q: "Un invitado llega tarde. ¿Qué frase expresa la suposición más débil?",
        opts: [
          "Er wird vielleicht noch kommen.",
          "Er wird sicher noch kommen.",
          "Er kommt bestimmt noch."
        ],
        why: "<b>vielleicht</b> deja abierta la posibilidad; <i>sicher</i> y <i>bestimmt</i> expresan una suposición muy fuerte."
      },
      {
        q: "De entre todos los candidatos, ella es la mejor: «Von allen Kandidaten ist sie ___.»",
        opts: [
          "am besten",
          "äußerst gut",
          "höchst gut"
        ],
        why: "Hay una comparación con los demás candidatos: <b>am besten</b>."
      },
      {
        q: "Relaciona cada palabra con su significado.",
        pairs: [
          "el adulto",
          "el joven, el adolescente",
          "el pariente",
          "el empleado"
        ]
      },
      {
        tr: "Probablemente el proyecto se concluirá solo el año que viene. Los costes son extremadamente altos, y muchos empleados tendrán que trabajar probablemente más tiempo.",
        why: "En <i>vermutlich</i> el acento cae en <b>mut</b>; en <i>abgeschlossen</i> la <b>b</b> se pronuncia [p]; en <i>äußerst</i> <b>äu</b> se pronuncia [ɔʏ]."
      },
      {
        tr: "Un conocido mío se ha hecho diputado.",
        why: "En <i>Abgeordneter</i> el acento cae en <b>Ab</b>; en <i>geworden</i> la <b>o</b> es breve; en <i>Bekannter</i> el acento cae en <b>kann</b>."
      }
    ]
  },
  "unit:c1-u02": {
    title: "Conseguir llevar algo a cabo",
    grammarNote: "Verbos de función (zur Verfügung stellen, in Frage kommen, eine Entscheidung treffen) · sustitutos de la pasiva: sich lassen, sein + zu, adjetivos en -bar · prefijos separables e inseparables con sentido distinto (umfahren) · modismos"
  },
  "lesson:c1-u02-l1": {
    theme: "Trabajo y proyectos",
    title: "Los verbos de función",
    objectives: [
      "entender y usar los verbos de función de los textos formales",
      "elegir el verbo adecuado para el sustantivo (eine Entscheidung treffen)",
      "colocar el sustantivo del grupo hacia el final de la oración",
      "leer un aviso breve o un acta"
    ],
    theory: [
      {
        h: "El sustantivo lleva el significado",
        p: "En los textos formales muchas acciones se expresan con un <strong>sustantivo</strong> que lleva el significado y un <strong>verbo</strong> casi vacío: <em>eine Entscheidung treffen</em> (decidir), <em>zur Verfügung stellen</em> (poner a disposición), <em>in Kraft treten</em> (entrar en vigor), <em>in Frage kommen</em> (ser posible), <em>zum Ausdruck bringen</em> (expresar), <em>Rücksicht nehmen auf</em> (tener consideración con). En los grupos con preposición, la preposición y el artículo no se eligen (<em>zur Verfügung</em>); en los que llevan un objeto el artículo puede cambiar (<em>eine Entscheidung treffen, die Entscheidung treffen</em>)."
      },
      {
        h: "El lugar en la oración",
        p: "Por lo general los grupos con preposición (<em>zur Verfügung stellen, in Kraft treten, in Frage kommen</em>) van hacia el final de la oración, un poco como una partícula separable: el verbo se conjuga en su sitio y el grupo lo completa. No son, sin embargo, prefijos del verbo, y para dar relieve pueden ir en primer lugar: <em>In Frage kommt nur diese Lösung.</em> <em>Die Firma <strong>stellt</strong> uns die Räume <strong>zur Verfügung</strong>.</em> En el Perfekt y con un modal, el grupo precede al participio o al infinitivo: <em>Die Firma hat uns die Räume zur Verfügung gestellt. Das Gesetz soll im Januar in Kraft treten.</em> Los grupos con complemento directo (<em>eine Entscheidung treffen</em>) siguen en cambio el orden normal de la oración: <em>Wir treffen heute eine Entscheidung über den Antrag. Wir müssen bis Freitag eine Entscheidung treffen.</em> La negación suele ir delante del grupo: <em>Das kommt nicht in Frage.</em>"
      },
      {
        contrast: "Muchos de estos grupos existen también en español con el mismo esquema (<em>poner a disposición</em>, <em>entrar en vigor</em>, <em>tomar una decisión</em>), y es un buen apoyo. El riesgo es el calco cuando el verbo no coincide: <em>tomar una decisión</em> es <em>eine Entscheidung treffen</em>, no <em>nehmen</em> (aunque <em>tomar</em> se parezca a <em>nehmen</em>); <em>hacer una pregunta</em> es <em>eine Frage stellen</em>, no <em>machen</em>."
      },
      {
        trap: "<em>in Frage kommen</em> no tiene que ver con las preguntas: significa «ser posible, entrar en consideración». <em>Das kommt nicht in Frage</em> dice de forma neutra que algo no es una opción («está descartado»); en un contexto enfático equivale a «ni hablar»."
      },
      {
        tip: "Aprende estos grupos como bloques enteros, con preposición y artículo: <em>zur Verfügung</em>, <em>in Kraft</em>, <em>zum Ausdruck</em>. Si solo recuerdas el sustantivo, el verbo equivocado llega enseguida."
      }
    ],
    grammar: {
      title: "Verbos de función",
      note: "Sustantivo + verbo casi vacío, grupo fijo. El verbo se conjuga en su sitio y el grupo con preposición suele ir hacia el final (<i>Die Firma stellt uns die Räume zur Verfügung</i>); la posición puede cambiar según la estructura de la oración y lo que se quiera resaltar.",
      table: {
        head: ["verbo de función", "significado", "verbo simple"],
        rows: [
          ["eine Entscheidung treffen", "tomar una decisión", "entscheiden"],
          ["zur Verfügung stellen", "poner a disposición", "bereitstellen"],
          ["in Kraft treten", "entrar en vigor", "gültig werden"],
          ["in Frage kommen", "ser posible, entrar en consideración", "möglich sein"],
          ["zum Ausdruck bringen", "expresar", "ausdrücken"],
          ["Rücksicht nehmen auf", "tener consideración con", "berücksichtigen"]
        ]
      },
      examples: [
        { tr: "La empresa nos pone a disposición los locales.", note: "el sustantivo va hacia el final: zur Verfügung" },
        { tr: "Tenemos que tomar una decisión a más tardar el viernes.", note: "treffen, no nehmen" },
        { tr: "La nueva ley entra en vigor en enero.", note: "in Kraft treten" },
        { tr: "Para este puesto solo pueden tomarse en consideración dos candidatos.", note: "in Frage kommen: ser posible" },
        { tr: "Expresó con claridad su decepción.", note: "zum Ausdruck bringen, registro formal" },
        { tr: "Tengan consideración con los vecinos, por favor.", note: "Rücksicht nehmen auf + acusativo" }
      ]
    },
    vocab: [
      "el proyecto, el propósito",
      "la medida, la disposición",
      "el permiso, la autorización",
      "el encargo, el pedido",
      "el plazo, la fecha límite",
      "la influencia",
      "entrar en vigor",
      "poner a disposición",
      "ser posible, entrar en consideración",
      "tomar una decisión",
      "tener consideración, tener en cuenta",
      "expresar"
    ],
    exercises: [
      {
        q: "Lee el aviso: «Ab dem 1. März tritt die neue Hausordnung in Kraft. Die Verwaltung bittet alle Mieter, Rücksicht auf die Nachbarn zu nehmen.» ¿Qué ocurre el 1 de marzo?",
        opts: [
          "entra en vigor el nuevo reglamento de la comunidad",
          "la administración toma una decisión sobre los vecinos",
          "los nuevos inquilinos entran en los pisos"
        ],
        why: "<i>in Kraft treten</i> significa «entrar en vigor»: desde el 1 de marzo rige el nuevo reglamento (<i>Hausordnung</i>)."
      },
      {
        q: "En una reunión un compañero dice: «Diese Lösung kommt für uns nicht in Frage.» ¿Qué quiere decir?",
        opts: [
          "que la solución está descartada",
          "que quiere hacer una pregunta sobre la solución",
          "que la solución todavía se está discutiendo"
        ],
        why: "<i>nicht in Frage kommen</i>: la solución <b>está descartada</b>, no se considera una opción. No tiene que ver con hacer preguntas."
      },
      {
        q: "Completa: «Wir müssen bis Freitag eine Entscheidung ___.»",
        hint: "el verbo de función de die Entscheidung",
        why: "<b>treffen</b> (en estilo formal también <i>fällen</i>): <i>eine Entscheidung treffen</i>, «tomar una decisión»; no <i>nehmen</i>."
      },
      {
        q: "Completa: «Die Firma stellt den Mitarbeitern Laptops zur ___.»",
        hint: "zur ... stellen: poner a disposición",
        why: "<b>Verfügung</b>: <i>zur Verfügung stellen</i>, grupo fijo con <i>zur</i>."
      },
      {
        q: "Completa: «Sie hat ihre Kritik deutlich zum ___ gebracht.»",
        hint: "zum ... bringen: expresar",
        why: "<b>Ausdruck</b>: <i>zum Ausdruck bringen</i>, «expresar», propio de la lengua escrita formal."
      },
      {
        q: "Completa el acta.",
        tr: "Ayer el pleno del ayuntamiento tomó una decisión importante: la nueva norma entra en vigor en enero. Para su aplicación, la ciudad pone a disposición fondos adicionales.",
        why: "<i>getroffen</i> (Perfekt de <i>treffen</i>), <i>tritt</i> (con <i>in Kraft</i>), <i>stellt</i> (con <i>zur Verfügung</i>): cada verbo va con su sustantivo."
      },
      {
        q: "Relaciona cada grupo con su significado.",
        pairs: [
          "entrar en vigor",
          "ser posible",
          "tener consideración",
          "poner a disposición"
        ]
      },
      {
        q: "Traduce para un acta: «La dirección ha puesto a disposición una sala para la reunión.» (die Leitung, der Raum, die Besprechung)",
        why: "<i>Die Leitung hat einen Raum für die Besprechung zur Verfügung gestellt</i>: el grupo <i>zur Verfügung</i> va antes del participio; también vale el Präteritum <i>stellte ... zur Verfügung</i>."
      },
      {
        tr: "A partir del mes que viene entra en vigor en la oficina una nueva normativa. La empresa pone portátiles a disposición de todos los empleados; los dispositivos privados ya no serán una opción.",
        why: "En <i>Regelung</i> el acento cae en <b>Re</b>; en <i>Verfügung</i> el acento cae en <b>fü</b>; en <i>Geräte</i> la <b>ä</b> es larga."
      },
      {
        tr: "Tenemos que tomar una decisión hoy mismo.",
        why: "En <i>Entscheidung</i> el acento cae en <b>schei</b> y <b>ei</b> se pronuncia [aɪ]; en <i>treffen</i> la <b>e</b> es breve."
      }
    ]
  },
  "lesson:c1-u02-l2": {
    theme: "Trámites y avisos",
    title: "Se puede hacer, hay que tramitarlo",
    objectives: [
      "usar sich lassen + infinitivo para «se puede»",
      "entender sein + zu + infinitivo en avisos y reglamentos",
      "reconocer y formar los adjetivos en -bar",
      "reformular una pasiva con un modal"
    ],
    theory: [
      {
        h: "Tres maneras de decir «se puede» o «hay que»",
        p: "Junto a la pasiva con un modal (<em>Das Problem kann gelöst werden</em>) el alemán tiene formas más compactas. <strong>sich lassen</strong> + infinitivo significa «se puede»: <em>Das Problem lässt sich leicht lösen.</em> <strong>sein + zu</strong> + infinitivo significa «se puede» o «hay que», y en los avisos suele ser una obligación: <em>Der Antrag ist bis Freitag abzugeben.</em> Los adjetivos en <strong>-bar</strong> formados a partir de un verbo dicen que algo se puede hacer: <em>lösbar, machbar, trinkbar</em> (no todos: <em>dankbar</em> y <em>fruchtbar</em> tienen otros significados)."
      },
      {
        h: "zu con los verbos separables",
        p: "Con un verbo separable <em>zu</em> va entre la partícula y el verbo y se escribe junto: <em>abgeben → abzugeben, einreichen → einzureichen, ausfüllen → auszufüllen</em>. <em>Das Formular ist vollständig auszufüllen.</em>"
      },
      {
        contrast: "El español tiene formas muy próximas: la pasiva refleja <em>el problema se resuelve fácilmente</em> o <em>se puede resolver</em> corresponde a <em>lässt sich lösen</em>; <em>hay que entregar la solicitud a más tardar el viernes</em> o <em>debe entregarse</em> a <em>ist bis Freitag abzugeben</em>; y <em>-able, -ible</em> funcionan como <em>-bar</em> (<em>resoluble</em> = <em>lösbar</em>, <em>potable</em> = <em>trinkbar</em>). <em>sich lassen</em>, en cambio, no se traduce al pie de la letra: <em>Das lässt sich machen</em> es «eso se puede hacer», no «eso se deja hacer»."
      },
      {
        trap: "El <em>zu</em> lo cambia todo: <em>Die Rechnung ist zu bezahlen</em> expresa una obligación, «la factura hay que pagarla»; <em>Die Rechnung ist bezahlt</em> describe el estado resultante (pasiva de estado, como <em>estar</em> + participio), «la factura está pagada»; el Perfekt de la pasiva de proceso es <em>Die Rechnung ist bezahlt worden</em>, «ha sido pagada»."
      },
      {
        tip: "Para entender un <em>sein + zu</em> en un reglamento, prueba a sustituirlo por <em>muss ... werden</em>: <em>ist abzugeben</em> = <em>muss abgegeben werden</em>. Si el sentido se mantiene, es una obligación."
      }
    ],
    grammar: {
      title: "Sustitutos de la pasiva con valor modal",
      note: "<b>sich lassen</b> + infinitivo: se puede. <b>sein + zu</b> + infinitivo: se puede o hay que (en los avisos, por lo general hay que). <b>-bar</b>: que se puede. Con los verbos separables: <i>abzugeben</i>.",
      table: {
        head: ["forma", "equivale a", "ejemplo"],
        rows: [
          ["sich lassen + infinitivo", "kann ... werden", "Das Problem lässt sich lösen."],
          ["sein + zu + infinitivo", "muss / kann ... werden", "Der Antrag ist abzugeben."],
          ["adjetivo en -bar", "kann ... werden", "Das Problem ist lösbar."],
          ["man + activa", "impersonal", "Das macht man so."]
        ]
      },
      examples: [
        { tr: "El problema se puede resolver fácilmente.", note: "sich lassen + infinitivo" },
        { tr: "La solicitud hay que entregarla a más tardar el viernes.", note: "sein + zu: obligación" },
        { tr: "La factura debe pagarse en un plazo de 14 días.", note: "sein + zu en avisos" },
        { tr: "Esta tarea es difícilmente resoluble.", note: "-bar como -ble" },
        { tr: "El agua no es potable.", note: "trinkbar" },
        { tr: "Aquí no se puede fumar.", note: "pasiva con modal, para comparar" }
      ]
    },
    vocab: [
      "la norma, el reglamento",
      "la tasa, el derecho (que se paga)",
      "el certificado, el justificante",
      "la prueba, la documentación",
      "la factura, la cuenta",
      "el documento; en plural, la documentación",
      "despachar, ocuparse de",
      "presentar, entregar (una solicitud)",
      "rellenar",
      "resoluble",
      "factible, viable",
      "admitido, permitido"
    ],
    exercises: [
      {
        q: "Lee el aviso: «Die Unterlagen sind bis zum 15. Mai beim Amt einzureichen.» ¿Qué significa?",
        opts: [
          "los documentos deben presentarse en la oficina a más tardar el 15 de mayo",
          "los documentos se pueden presentar después del 15 de mayo",
          "la oficina enviará los documentos a más tardar el 15 de mayo"
        ],
        why: "<i>sind ... einzureichen</i> es <i>sein + zu</i>: en un aviso expresa una <b>obligación</b>, «hay que presentarlos»."
      },
      {
        q: "Un cliente te pide adelantar una entrega. Respondes: «Das lässt sich machen.» ¿Qué le dices?",
        opts: [
          "que se puede hacer",
          "que no lo harás",
          "que alguien te deja hacerlo"
        ],
        why: "<i>Das lässt sich machen</i> = <i>Das kann gemacht werden</i>: aceptas, «se puede hacer»."
      },
      {
        q: "¿Qué frase tiene el mismo significado que «Das Problem kann leicht gelöst werden»?",
        opts: [
          "Das Problem lässt sich leicht lösen.",
          "Das Problem lässt leicht lösen.",
          "Das Problem ist leicht gelöst worden."
        ],
        why: "<b>sich lassen</b> + infinitivo equivale a <i>kann ... werden</i>; sin <i>sich</i> la oración no funciona, y la tercera es un Perfekt pasivo con otro significado."
      },
      {
        q: "Completa el aviso: «Die Rechnung ist innerhalb von 14 Tagen zu ___.»",
        hint: "pagar",
        why: "<b>bezahlen</b> (o <i>zahlen</i>): <i>ist zu bezahlen</i>, «hay que pagarla»."
      },
      {
        q: "En un informe: «Die Folgen der Entscheidung sind noch nicht ___.»",
        hint: "de vorhersehen, adjetivo en -bar",
        why: "<b>vorhersehbar</b> (o <i>absehbar</i>): «previsible»; el sufijo <i>-bar</i> dice que algo se puede hacer."
      },
      {
        q: "Completa el aviso a los vecinos (en el tercer hueco, un adjetivo en -bar de beheben).",
        tr: "Estimados inquilinos, por desgracia la calefacción solo se puede reparar la semana que viene. Hasta entonces hay que mantener cerradas las ventanas. La avería, sin embargo, se puede subsanar: el técnico viene el lunes.",
        why: "<i>lässt sich ... reparieren</i> (se puede), <i>sind ... zu halten</i> (hay que mantener), <i>behebbar</i> (subsanable): la avería se subsana (<i>beheben</i>), el objeto se repara (<i>Die Heizung ist reparierbar</i>)."
      },
      {
        q: "Ordena las palabras.",
        tr: "La solicitud debe entregarse en la oficina a más tardar el viernes.",
        why: "<i>Der Antrag ist bis Freitag beim Amt abzugeben.</i> <i>abzugeben</i> cierra la oración; <i>bis Freitag</i> y <i>beim Amt</i> pueden intercambiar su lugar."
      },
      {
        q: "Traduce: «Este problema no se puede resolver en un día.»",
        why: "<i>Dieses Problem lässt sich nicht an einem Tag lösen</i>; valen también <i>ist nicht ... zu lösen</i>, <i>kann nicht ... gelöst werden</i> y <i>kann man nicht ... lösen</i>."
      },
      {
        tr: "Estimados señores, el formulario debe rellenarse por completo y presentarse a más tardar a fin de mes. Los documentos que falten se pueden entregar también más adelante.",
        why: "En <i>vollständig</i> la <b>v</b> se pronuncia [f]; en <i>auszufüllen</i> el acento cae en <b>aus</b>; en <i>nachreichen</i> el acento cae en <b>nach</b>."
      },
      {
        tr: "Esto seguro que se puede despachar a más tardar mañana.",
        why: "En <i>lässt</i> la <b>ä</b> es breve; en <i>bestimmt</i> el acento cae en <b>stimmt</b>; en <i>erledigen</i> el acento cae en <b>le</b>."
      }
    ]
  },
  "lesson:c1-u02-l3": {
    theme: "Tráfico y modismos",
    title: "umfahren o umfahren? Modismos",
    objectives: [
      "distinguir los prefijos separables de los inseparables con el mismo verbo",
      "entender un parte de tráfico",
      "reconocer y usar algunos modismos frecuentes",
      "entender cuándo un modismo no se traduce al pie de la letra"
    ],
    theory: [
      {
        h: "El mismo verbo, dos verbos",
        p: "Con <strong>durch-, über-, um-, unter-, wieder-</strong> el mismo verbo puede ser separable o inseparable, con significados distintos. <em>Er hat das Schild <strong>umgefahren</strong></em>: lo derribó con el coche (separable, acento en <em>um</em>). <em>Wir haben den Stau <strong>umfahren</strong></em>: lo rodeamos (inseparable, acento en <em>fah</em>). En las formas conjugadas el separable se separa (<em>Die Fähre setzt uns über</em>), el inseparable no (<em>Sie übersetzt den Text</em>)."
      },
      {
        h: "Los modismos",
        p: "Los modismos (<em>Redewendungen</em>) tienen un sentido figurado que no se deduce de las palabras: <em>Das geht mir gegen den Strich</em> (me molesta), <em>den Nagel auf den Kopf treffen</em> (dar en el clavo), <em>jemandem auf die Nerven gehen</em> (poner de los nervios), <em>etwas auf die lange Bank schieben</em> (aplazar algo). Se usan sobre todo en la lengua hablada y en los textos periodísticos; en un texto muy formal se prefiere la expresión directa."
      },
      {
        contrast: "El español tiene algunos modismos muy próximos: <em>dar en el clavo</em> es casi <em>den Nagel auf den Kopf treffen</em> (en alemán el clavo se golpea «en la cabeza»), y <em>poner de los nervios</em> equivale a <em>auf die Nerven gehen</em>. Pero muchos cambian de imagen: <em>dar largas</em> o <em>aplazar</em> es en alemán «empujar sobre el banco largo» (<em>auf die lange Bank schieben</em>), y <em>gegen den Strich gehen</em> recuerda a «ir a contrapelo», pero no coinciden del todo: según el contexto se dirá mejor «me molesta» o «no me gusta nada». Traducir palabra por palabra produce frases incomprensibles."
      },
      {
        trap: "En esta pareja el participio distingue los dos verbos: <em>umgefahren</em> (derribado) o <em>umfahren</em> (rodeado). En general cuentan también el acento y la separación en las formas conjugadas, porque algunos verbos separables no toman <em>ge-</em> (<em>anprobiert</em>). Escribir <em>Wir haben den Stau umgefahren</em> quiere decir que habéis derribado el atasco, no que lo habéis evitado: en español «rodear» y «derribar» son verbos distintos y no se confunden, pero en alemán la diferencia está en el acento, en el <em>ge-</em> y en la separación: <em>Er fährt das Schild um</em> frente a <em>Er umfährt den Stau</em>."
      },
      {
        tip: "Cuando encuentres un modismo nuevo, anótalo con una frase entera y una situación: <em>Er schiebt die Steuererklärung auf die lange Bank.</em> Suelto se olvida, dentro de una escena se queda."
      }
    ],
    grammar: {
      title: "Prefijos separables o inseparables, y modismos",
      note: "<b>Separable</b>: acento en el prefijo, prefijo separado, participio con <i>-ge-</i> si el verbo base lo lleva (<i>umgefahren</i>). <b>Inseparable</b>: acento en una sílaba posterior al prefijo (<i>wiederholen</i> con el acento en <i>ho</i>), prefijo unido, participio sin <i>ge-</i> (<i>umfahren</i>).",
      table: {
        head: ["separable", "significado", "inseparable", "significado"],
        rows: [
          ["Er hat das Schild umgefahren.", "derribar con el coche", "Wir haben den Stau umfahren.", "rodear"],
          ["Die Fähre setzt uns über.", "pasar en el transbordador", "Sie hat den Text übersetzt.", "traducir"],
          ["Wir sind durchgefahren.", "conducir sin parar", "Wir haben die Schweiz durchfahren.", "atravesar"]
        ]
      },
      examples: [
        { tr: "Derribó con el coche la señal de tráfico.", note: "separable: umgefahren" },
        { tr: "Hemos rodeado el atasco.", note: "inseparable: umfahren" },
        { tr: "Tradujo la carta al inglés.", note: "inseparable: übersetzt" },
        { tr: "El transbordador nos lleva a la otra orilla.", note: "separable: setzt ... über" },
        { tr: "Esto no me gusta nada.", note: "modismo: gegen den Strich gehen, contrariedad" },
        { tr: "Has dado en el clavo.", note: "modismo: den Nagel auf den Kopf treffen" }
      ]
    },
    vocab: [
      "el modismo, la expresión idiomática",
      "el refrán",
      "el rodeo, el camino más largo",
      "la orilla",
      "el desvío (de tráfico)",
      "el atasco, la retención",
      "rodear (inseparable); derribar con el coche (separable)",
      "traducir (inseparable); pasar a la otra orilla (separable)",
      "conducir sin parar (separable); atravesar (inseparable)",
      "conversar, charlar",
      "repetir",
      "mit + dativo: saber tratar (separable); etwas umgehen: eludir, sortear (inseparable)"
    ],
    exercises: [
      {
        q: "Parte de tráfico: «Wegen eines Unfalls ist die A8 gesperrt. Autofahrer sollten den Bereich weiträumig umfahren.» ¿Qué se aconseja?",
        opts: [
          "rodear la zona con un amplio margen",
          "atravesar la zona despacio",
          "derribar los obstáculos de la carretera"
        ],
        why: "Aquí <i>umfahren</i> es inseparable (acento en <i>fah</i>): «rodear». <i>weiträumig</i> significa «con un amplio margen»."
      },
      {
        q: "Completa: «Der Fahrer hat das Schild ___.» (lo derribó con el coche)",
        opts: [
          "umgefahren",
          "umfahren",
          "umgefährt"
        ],
        why: "En el sentido de «derribar» <i>umfahren</i> es separable, por tanto el participio lleva <i>-ge-</i>: <b>umgefahren</b>."
      },
      {
        q: "En una reunión una compañera te dice: «Da hast du den Nagel auf den Kopf getroffen.» ¿Qué quiere decir?",
        opts: [
          "que has dado en el clavo",
          "que has cometido un error grave",
          "que has hablado de forma demasiado directa"
        ],
        why: "<i>den Nagel auf den Kopf treffen</i> = «dar en el clavo»: es un cumplido."
      },
      {
        q: "Completa: «Die Fähre ___ uns ans andere Ufer über.»",
        hint: "übersetzen separable, tercera persona del singular",
        why: "<b>setzt</b>: en el sentido de «pasar al otro lado» <i>übersetzen</i> es separable, y <i>über</i> va al final."
      },
      {
        q: "Completa el relato.",
        tr: "El centro estaba cerrado al tráfico por las obras, así que tuvimos que rodearlo. Luego condujimos toda la noche sin parar y llegamos solo por la mañana.",
        why: "<i>umfahren</i> (inseparable, infinitivo tras <i>mussten</i>) y <i>durchgefahren</i> (separable, participio con <i>-ge-</i>)."
      },
      {
        q: "Relaciona cada modismo con su significado.",
        pairs: [
          "ir contra los propios principios o gustos",
          "dar en el clavo",
          "poner de los nervios",
          "aplazar"
        ]
      },
      {
        q: "¿En qué frases es inseparable el prefijo?",
        opts: [
          "Wir haben den Stau umfahren.",
          "Sie hat den Text übersetzt.",
          "Er hat das Schild umgefahren.",
          "Die Fähre setzt uns über."
        ],
        why: "Las dos primeras: participio sin <i>ge-</i> (<i>umfahren, übersetzt</i>). En la tercera el participio lleva <i>-ge-</i>, en la cuarta el prefijo se separa: son separables."
      },
      {
        q: "Traduce: «Este modismo no se puede traducir literalmente.» (die Redewendung, wörtlich)",
        why: "<i>Diese Redewendung lässt sich nicht wörtlich übersetzen</i>; valen también <i>ist nicht wörtlich zu übersetzen</i>, <i>kann man nicht ...</i>, <i>kann nicht ... übersetzt werden</i> y <i>Wort für Wort</i>."
      },
      {
        tr: "A causa de un accidente en la A8 hay un desvío. Lo mejor es rodear la zona por la carretera nacional; calculad un rodeo de veinte minutos más.",
        why: "En <i>umfahren</i> aquí el acento cae en <b>fah</b>; en <i>Umleitung</i> el acento cae en <b>Um</b>; en <i>Bundesstraße</i> la <b>ß</b> se pronuncia [s]."
      },
      {
        tr: "Este modismo apenas se puede traducir.",
        why: "En <i>Redewendung</i> el acento cae en <b>Re</b>; en <i>kaum</i> <b>au</b> se pronuncia [aʊ]; en <i>übersetzen</i> el acento cae en <b>set</b>."
      }
    ]
  },
  "lesson:c1-u02-test": {
    theme: "Comprobación",
    title: "Test: Conseguir llevar algo a cabo",
    objectives: [
      "comprobar los verbos de función, los sustitutos de la pasiva y los prefijos separables e inseparables"
    ],
    theory: [
      {
        p: "Diez preguntas sobre toda la unidad. Se aprueba con el 70%. No vuelvas a mirar las lecciones mientras respondes: si no recuerdas algo, es mejor volver atrás y repasar."
      }
    ],
    exercises: [
      {
        q: "Completa: «Wann ___ das neue Gesetz in Kraft?»",
        hint: "treten, tercera persona del singular",
        why: "<b>tritt</b>: <i>in Kraft treten</i>, con el cambio vocálico en presente."
      },
      {
        q: "Completa: «Das Problem ___ sich leicht lösen.» (el problema se puede resolver fácilmente)",
        hint: "un verbo, tercera persona del singular",
        why: "<b>lässt</b>: <i>lässt sich lösen</i> = <i>kann gelöst werden</i>."
      },
      {
        q: "Completa el aviso: «Der Bericht ist bis Montag ___.»",
        hint: "el informe hay que entregarlo a más tardar el lunes (abgeben)",
        why: "<b>abzugeben</b>: <i>sein + zu</i>, con <i>zu</i> entre la partícula y el verbo."
      },
      {
        q: "Completa: «Wir haben die Baustelle ___.» (la hemos rodeado)",
        hint: "umfahren inseparable, participio",
        why: "<b>umfahren</b>: en el sentido de «rodear» el verbo es inseparable y el participio no lleva <i>ge-</i>."
      },
      {
        q: "Lee el anuncio: «Für die Stelle kommen nur Bewerber mit Erfahrung in Frage.» ¿Quién puede ser elegido?",
        opts: [
          "solo candidatos con experiencia",
          "todos los candidatos que hacen preguntas",
          "ningún candidato por ahora"
        ],
        why: "<i>in Frage kommen</i> = «ser posible»: <b>solo quien tiene experiencia</b> entra en consideración."
      },
      {
        q: "En un reglamento universitario: ¿qué frase expresa una obligación y no solo una posibilidad?",
        opts: [
          "Die Hausarbeit ist bis zum 30. Juni abzugeben.",
          "Die Hausarbeit lässt sich bis zum 30. Juni abgeben.",
          "Die Hausarbeit kann bis zum 30. Juni abgegeben werden."
        ],
        why: "En un reglamento <b>sein + zu</b> expresa por lo general una obligación («hay que entregarlo»). Las otras dos son correctas, pero dicen solo que la entrega es posible."
      },
      {
        q: "Una compañera dice de la reunión del viernes por la tarde: «Das geht mir gegen den Strich.» ¿Cómo se siente?",
        opts: [
          "molesta",
          "contenta",
          "cansada"
        ],
        why: "<i>gegen den Strich gehen</i> = «molestar, resultar desagradable»."
      },
      {
        q: "Relaciona cada grupo con su significado.",
        pairs: [
          "poner a disposición",
          "tomar una decisión",
          "ser posible",
          "expresar"
        ]
      },
      {
        tr: "Desde enero entra en vigor una nueva normativa: todas las solicitudes deben presentarse en línea. Para ello la ciudad pone ordenadores a disposición en cada biblioteca.",
        why: "En <i>Vorschrift</i> el acento cae en <b>Vor</b>; en <i>einzureichen</i> el acento cae en <b>ein</b>; en <i>Bibliothek</i> el acento cae en <b>thek</b>."
      },
      {
        tr: "Los documentos deben presentarse a más tardar a fin de mes.",
        why: "En <i>Monats</i> la <b>o</b> es larga; en <i>einzureichen</i> <b>ei</b> se pronuncia [aɪ]."
      }
    ]
  },
  "unit:c1-u03": {
    title: "Registros y cohesión textual",
    grammarNote: "Estilo nominal y lenguaje burocrático (Amtsdeutsch) · partículas y elipsis de la lengua hablada · correlativos (darauf, dass; es, dass) y conectores para construir un texto cohesionado · repaso de las unidades 1-3"
  },
  "lesson:c1-u03-l1": {
    theme: "Oficinas y avisos públicos",
    title: "El alemán burocrático",
    objectives: [
      "entender un aviso en Amtsdeutsch",
      "reformular el estilo nominal en estilo verbal y viceversa",
      "reconocer los verbos típicos de la burocracia (erfolgen, erheben, gewähren)",
      "elegir el registro adecuado para el destinatario"
    ],
    theory: [
      {
        h: "Qué es el Amtsdeutsch",
        p: "La lengua de las oficinas usa mucho el <strong>estilo nominal</strong>: verbos convertidos en sustantivos (<em>die Antragstellung, die Nichtbeachtung, das Betreten</em>), subordinadas sustituidas por grupos con preposición (<em>nach Abschluss, bei Nichtbeachtung, zur Vermeidung</em>), verbos poco expresivos como <em>erfolgen</em> (tener lugar), <em>erheben</em> (cobrar, imponer), <em>gewähren</em> (conceder). <em>Die Antragstellung erfolgt online</em> significa sencillamente «la solicitud se presenta en línea»."
      },
      {
        h: "Del estilo nominal al verbal",
        p: "Para entender un aviso, convierte el grupo nominal en una subordinada: <em>Nach Abschluss der Arbeiten</em> → <em>Nachdem die Arbeiten abgeschlossen sind</em>; <em>Bei Nichtbeachtung</em> → <em>Wenn man das nicht beachtet</em>; <em>Zur Vermeidung von Wartezeiten</em> → <em>Um Wartezeiten zu vermeiden</em>. El genitivo del grupo nominal (<em>der Arbeiten</em>) vuelve a ser sujeto u objeto de la subordinada."
      },
      {
        contrast: "También el español administrativo tiene estas formas (<em>a la conclusión de las obras</em>, <em>en caso de incumplimiento</em>, <em>para evitar esperas</em>), de modo que la estructura resulta familiar. La diferencia es que en alemán el objeto del verbo se convierte en un genitivo sin preposición (<em>die Beachtung der Regeln</em>, donde el español diría <em>el cumplimiento de las normas</em>, con <em>de</em>), y que en los avisos el estilo nominal se combina con <em>sein + zu</em> (<em>ist ein Helm aufzusetzen</em>), donde el español usa <em>es obligatorio</em> o <em>hay que</em> con infinitivo (<em>se ruega</em> corresponde más bien a <em>wird gebeten</em>)."
      },
      {
        trap: "El estilo nominal es propio de avisos y cartas oficiales, no de un correo entre amigos: <em>Nach Abschluss der Arbeiten erfolgt unser Treffen</em> en un correo privado resulta ridículo. Ahí se escribe <em>Wir sehen uns, sobald die Arbeiten fertig sind</em>."
      },
      {
        tip: "Ante un sustantivo en <em>-ung</em> o un infinitivo sustantivado (<em>das Betreten</em>), pregúntate qué verbo hay detrás (<em>betreten</em>) y quién hace la acción: a menudo es «cualquiera», es decir, <em>man</em>."
      }
    ],
    grammar: {
      title: "Estilo nominal y estilo verbal",
      note: "<b>Nominal</b>: preposición + sustantivo, a menudo con un genitivo que depende del sustantivo (<i>nach Abschluss der Arbeiten</i>). <b>Verbal</b>: construcción con un verbo, es decir, una subordinada (<i>nachdem die Arbeiten abgeschlossen sind</i>) o un infinitivo con <i>zu</i> (<i>um Wartezeiten zu vermeiden</i>). Verbos típicos: <i>erfolgen, erheben, gewähren</i>.",
      table: {
        head: ["estilo nominal", "estilo verbal"],
        rows: [
          ["Nach Abschluss der Arbeiten ...", "Nachdem die Arbeiten abgeschlossen sind, ..."],
          ["Bei Nichtbeachtung ...", "Wenn man das nicht beachtet, ..."],
          ["Zur Vermeidung von Wartezeiten ...", "Um Wartezeiten zu vermeiden, ..."],
          ["Vor Betreten der Baustelle ...", "Bevor man die Baustelle betritt, ..."],
          ["Die Antragstellung erfolgt online.", "Man stellt den Antrag online."]
        ]
      },
      examples: [
        { tr: "Una vez concluidas las obras, la calle volverá a abrirse.", note: "nach rige dativo (Abschluss); der Arbeiten es el genitivo que depende de Abschluss" },
        { tr: "En caso de incumplimiento se impone una multa.", note: "bei Nichtbeachtung = wenn man die Vorschriften nicht beachtet" },
        { tr: "Para evitar esperas se ruega pedir cita previa.", note: "zur Vermeidung = um ... zu vermeiden" },
        { tr: "A causa de la fuerte lluvia, el concierto no se celebró.", note: "wegen + genitivo en lugar de weil" },
        { tr: "La solicitud se presenta en línea.", note: "erfolgen: tener lugar, típico de las oficinas" },
        { tr: "Antes de entrar en la obra es obligatorio ponerse el casco.", note: "vor Betreten + sein zu" }
      ]
    },
    vocab: [
      "la resolución, la notificación oficial",
      "la multa, la sanción",
      "la autoridad, el organismo público",
      "la competencia (de una oficina)",
      "la ordenanza, el decreto",
      "el incumplimiento",
      "tener lugar, producirse",
      "cobrar (una tasa); imponer (una multa)",
      "conceder",
      "solicitar (oficialmente)",
      "competente",
      "según, de conformidad con"
    ],
    exercises: [
      {
        q: "Lee: «Bei Nichtbeachtung der Parkregeln wird ein Bußgeld erhoben.» ¿Cómo se lo explicarías a un amigo?",
        opts: [
          "Wenn man sich nicht an die Parkregeln hält, muss man eine Strafe zahlen.",
          "Wer die Parkregeln nicht kennt, bekommt Geld zurück.",
          "Die Stadt beachtet die Parkregeln nicht."
        ],
        why: "<i>bei Nichtbeachtung</i> = «si no se respetan»; <i>ein Bußgeld erheben</i> = «imponer una multa». La primera frase dice lo mismo en estilo verbal."
      },
      {
        q: "¿Qué grupo nominal corresponde a «Weil es stark regnete, ...»?",
        opts: [
          "Wegen des starken Regens ...",
          "Trotz des starken Regens ...",
          "Während des starken Regens ..."
        ],
        why: "<i>weil</i> expresa una causa: <b>wegen</b> + genitivo. <i>trotz</i> es concesivo, <i>während</i> temporal."
      },
      {
        q: "Escribes un mensaje a una amiga sobre las obras de casa. ¿Qué frase es adecuada para el registro?",
        opts: [
          "Wir sehen uns, sobald die Arbeiten fertig sind.",
          "Nach Abschluss der Arbeiten erfolgt unser Wiedersehen.",
          "Bei Fertigstellung der Arbeiten wird ein Treffen durchgeführt."
        ],
        why: "Entre amigos se usa el estilo verbal. Las otras dos son correctas, pero en Amtsdeutsch, fuera de lugar en un mensaje privado."
      },
      {
        q: "Completa el aviso: «Die Antragstellung ___ ausschließlich online.»",
        hint: "verbo burocrático: «tiene lugar»",
        why: "<b>erfolgt</b>: <i>erfolgen</i> es el verbo típico de las oficinas para «tener lugar, producirse»."
      },
      {
        q: "Completa el aviso del ayuntamiento.",
        tr: "Estimados ciudadanos y ciudadanas, una vez concluidas las obras, la calle volverá a abrirse. Para evitar esperas, les pedimos que soliciten cita previa.",
        why: "<i>Nach Abschluss der Bauarbeiten</i>: <i>nach</i> + dativo, con el genitivo <i>der Bauarbeiten</i> que depende de <i>Abschluss</i>. <i>Zur Vermeidung von Wartezeiten</i>: <i>zu</i> + dativo, con <i>von</i> + dativo en lugar del genitivo. Los dos sustituyen a una subordinada."
      },
      {
        q: "Relaciona cada palabra con su significado.",
        pairs: [
          "la resolución, la notificación oficial",
          "la autoridad, el organismo público",
          "la multa",
          "la ordenanza"
        ]
      },
      {
        q: "Ordena las palabras del cartel.",
        tr: "Antes de entrar en la obra es obligatorio ponerse el casco.",
        why: "<i>Vor Betreten der Baustelle ist ein Helm aufzusetzen.</i> Grupo nominal en primer lugar, luego <i>ist</i>, y <i>aufzusetzen</i> al final."
      },
      {
        q: "Reformula en estilo verbal, con una subordinada: «Nach Abschluss der Arbeiten wird die Straße freigegeben.»",
        why: "<i>Nachdem die Arbeiten abgeschlossen sind, wird die Straße freigegeben</i>: el genitivo <i>der Arbeiten</i> vuelve a ser sujeto; valen también <i>sobald</i> o <i>wenn</i> y <i>abgeschlossen worden sind</i>."
      },
      {
        tr: "Estimados señores, según la nueva ordenanza, a partir de mayo la solicitud se presenta exclusivamente en línea. Para cualquier duda, diríjanse a la oficina competente.",
        why: "En <i>Verordnung</i> el acento cae en <b>ord</b>; en <i>zuständige</i> el acento cae en <b>zu</b>."
      },
      {
        tr: "El pago se efectúa mediante transferencia.",
        why: "En <i>Zahlung</i> la <b>a</b> es larga y la <b>h</b> es muda; en <i>erfolgt</i> el acento cae en <b>folgt</b>; en <i>Überweisung</i> el acento cae en <b>wei</b>."
      }
    ]
  },
  "lesson:c1-u03-l2": {
    theme: "Conversación espontánea",
    title: "Cómo se habla de verdad",
    objectives: [
      "entender las partículas modales de la lengua hablada (doch, ja, mal, halt, eben)",
      "reconocer las elipsis típicas de la lengua hablada (Weiß ich nicht, Passt schon)",
      "responder de forma natural en una conversación informal",
      "distinguir la lengua hablada de la escrita formal"
    ],
    theory: [
      {
        h: "Las partículas cambian el tono",
        p: "En la lengua hablada las partículas modales dicen cómo piensa quien habla. <strong>doch</strong> anima o recuerda (<em>Komm doch mit!</em>), <strong>ja</strong> presenta algo como sabido o sorprendente (<em>Das hast du ja schon gesagt. Das ist ja toll!</em>), <strong>mal</strong> suaviza una petición (<em>Hast du mal kurz Zeit?</em>), <strong>halt</strong> y <strong>eben</strong> expresan resignación (<em>Das ist halt so</em>). Sin la partícula la frase sigue siendo correcta, pero pierde ese matiz: una petición puede sonar más seca, una exclamación pierde la sorpresa o la alusión a lo que los dos ya saben."
      },
      {
        h: "Elipsis y fórmulas",
        p: "La lengua hablada omite lo que se entiende por el contexto, a menudo el sujeto o el <em>das</em> inicial: <em>Weiß ich nicht</em> (= <em>Das weiß ich nicht</em>), <em>Kann sein</em>, <em>Passt schon</em>, <em>Mal sehen</em>. Son normales entre amigos y compañeros; en una carta o en un examen escrito se usan las frases completas."
      },
      {
        contrast: "El español expresa estos matices con la entonación o con palabras como <em>anda, venga, pues, si, hombre, total</em>: <em>Komm doch mit!</em> se acerca a «¡anda, vente con nosotros!», <em>Das ist halt so</em> a «es lo que hay, qué le vamos a hacer». También el español omite el sujeto (<em>no sé, puede ser</em>), pero no hay un equivalente palabra por palabra de las partículas: se aprende la función."
      },
      {
        trap: "Con este valor las partículas no van en primer lugar: <em>Komm doch mit</em>, no <em>Doch komm mit</em>. Y <em>doch</em> como respuesta a una pregunta negativa (<em>Kommst du nicht? – Doch!</em>) es otra cosa: significa «sí, claro que sí», como el <em>sí</em> con que el español contradice una negación («¿No vienes? – ¡Sí, sí!»)."
      },
      {
        tip: "Cuando escuches, fíjate en dónde caen las partículas: suelen ir justo después del verbo y de los pronombres, antes de la información nueva. <em>Ich bin eigentlich ziemlich müde.</em>"
      }
    ],
    grammar: {
      title: "Partículas y elipsis de la lengua hablada",
      note: "<b>doch</b>: anima, recuerda. <b>ja</b>: algo sabido, sorpresa. <b>mal</b>: suaviza. <b>halt / eben</b>: resignación. Elipsis: <i>Weiß ich nicht, Kann sein, Passt schon</i>.",
      table: {
        head: ["partícula o forma", "efecto", "ejemplo"],
        rows: [
          ["doch", "anima, recuerda", "Komm doch mit!"],
          ["ja", "algo sabido, sorpresa", "Das ist ja unglaublich!"],
          ["mal", "suaviza una petición", "Hast du mal kurz Zeit?"],
          ["halt, eben", "resignación", "Das ist halt so."],
          ["elipsis", "se omite lo que está claro", "Weiß ich nicht. Passt schon."]
        ]
      },
      examples: [
        { tr: "¡Anda, vente tú también!", note: "doch + einfach: invitación" },
        { tr: "¡Pero esto es increíble!", note: "ja: sorpresa" },
        { tr: "¿Tienes un momento?", note: "mal: petición más amable" },
        { tr: "Bueno, puede ser.", note: "elipsis: Kann sein" },
        { tr: "No lo sé.", note: "elipsis: falta das" },
        { tr: "Está bien así, no importa.", note: "fórmula de la lengua hablada" }
      ]
    },
    vocab: [
      "la excusa, el pretexto",
      "la alusión, la insinuación",
      "el tono (de voz)",
      "la frase hecha, la fórmula de cortesía",
      "el malentendido",
      "la lengua hablada, el registro coloquial",
      "charlar (coloquial)",
      "quedar (con alguien)",
      "volver a preguntar, informarse",
      "en realidad, la verdad",
      "de todos modos, en cualquier caso",
      "es así y punto (presenta un hecho como inevitable)"
    ],
    exercises: [
      {
        q: "En el bar un amigo dice: «Komm doch mit!» ¿Qué añade doch?",
        opts: [
          "una invitación que anima",
          "un reproche",
          "una duda"
        ],
        why: "En una petición o en una invitación <b>doch</b> anima: «anda, vente tú también»."
      },
      {
        q: "Un compañero dice: «Das hast du ja schon gestern gesagt.» ¿Qué señala ja?",
        opts: [
          "que la cosa ya es sabida por los dos",
          "que no se lo cree",
          "que está haciendo una pregunta"
        ],
        why: "Aquí <b>ja</b> presenta la información como ya conocida: «ya lo dijiste ayer, lo sabemos»."
      },
      {
        q: "Una amiga te pregunta: «Kommst du heute Abend?» ¿Qué respuesta es más natural en la lengua hablada?",
        opts: [
          "Weiß ich noch nicht.",
          "Das Wissen darüber besitze ich noch nicht.",
          "Eine Entscheidung darüber ist noch nicht erfolgt."
        ],
        why: "En la lengua hablada se omite <i>das</i>: <b>Weiß ich noch nicht</b>. Las otras dos son estilo burocrático, fuera de lugar entre amigos."
      },
      {
        q: "Completa: «Hast du ___ kurz Zeit?»",
        hint: "partícula que hace amable la petición",
        why: "<b>mal</b>: suaviza la petición, como «un momentito»."
      },
      {
        q: "Completa: «Das ist ___ so, da kann man nichts machen.»",
        hint: "partícula de resignación",
        why: "<b>halt</b> (o <i>eben</i>): «es así, qué le vamos a hacer»."
      },
      {
        q: "Completa el diálogo con eigentlich, doch y echt.",
        tr: "«¿Vienes al cine hoy?» «No sé, en realidad estoy bastante cansado.» «¡Anda, vente, que la película es genial de verdad!»",
        why: "<i>eigentlich</i> (en realidad), <i>doch</i> (anima), <i>echt</i> o <i>wirklich</i> (de verdad): tres palabras típicas de la lengua hablada."
      },
      {
        q: "¿Qué frases son típicas de la lengua hablada informal?",
        opts: [
          "Weiß ich nicht.",
          "Passt schon.",
          "Bei Nichtbeachtung erfolgt eine Mahnung.",
          "Gemäß der Verordnung ist dies untersagt."
        ],
        why: "Las dos primeras son fórmulas de la lengua hablada (<i>Passt schon</i>, con el sujeto sobrentendido). Las otras dos son Amtsdeutsch."
      },
      {
        q: "Traduce, en tono informal: «¡Anda, vente tú también, total vas al centro de todas formas!» (mitkommen, sowieso, in die Stadt gehen)",
        why: "<i>Komm doch mit, du gehst sowieso in die Stadt</i>: <i>doch</i> para la invitación, <i>sowieso</i> para «de todas formas»; se puede añadir <i>ja</i> o <i>doch</i> delante de <i>sowieso</i>."
      },
      {
        tr: "«Bueno, ¿qué tal ayer?» «Ah, bien, en general. La película era un poco larga, eso sí, pero por lo demás genial de verdad.»",
        why: "En <i>eigentlich</i> el acento cae en <b>ei</b>; en <i>bisschen</i> <b>ss</b> se pronuncia [s]; en <i>sonst</i> la <b>o</b> es breve."
      },
      {
        tr: "¡Anda, vente tú también, seguro que será divertido!",
        why: "En <i>einfach</i> el acento cae en <b>ein</b>; en <i>bestimmt</i> el acento cae en <b>stimmt</b>; en <i>lustig</i> la <b>g</b> final se pronuncia [ç]."
      }
    ]
  },
  "lesson:c1-u03-l3": {
    theme: "Informes y presentaciones",
    title: "Cohesión: darauf, dass ...",
    objectives: [
      "usar los correlativos darauf, daran, darüber antes de una subordinada",
      "usar es como anticipador",
      "organizar un texto con conectores (zunächst, darüber hinaus, schließlich)",
      "enlazar las oraciones de un párrafo con referencias (dadurch, deshalb)"
    ],
    theory: [
      {
        h: "Anunciar una oración",
        p: "Cuando un verbo rige una preposición (<em>sich freuen auf, bestehen auf, sich einigen auf, hinweisen auf</em>) y el complemento es una oración, en la principal puede aparecer un adverbio pronominal que la anuncia; con algunos verbos es obligatorio (<em>bestehen auf</em>), con otros es facultativo o cambia el matiz (<em>Ich freue mich, dass du kommst</em> expresa alegría por el hecho, <em>Ich freue mich darauf, dass du kommst</em> la espera de un acontecimiento futuro): <em>Er besteht <strong>darauf</strong>, dass wir bleiben. Wir haben uns <strong>darauf</strong> geeinigt, den Termin zu verschieben.</em> Sin preposición, el anticipador puede ser <strong>es</strong>: <em>Es ist wichtig, dass alle pünktlich sind.</em> Si la subordinada pasa al primer lugar, el <em>es</em> sujeto desaparece: <em>Dass alle pünktlich sind, ist wichtig.</em>"
      },
      {
        h: "Mantener unido un texto",
        p: "Un texto cohesionado guía a quien lee. Para el orden: <em>zunächst, zuerst, dann, anschließend, schließlich</em>. Para añadir: <em>darüber hinaus, außerdem</em>. Para remitir a lo dicho: <em>dadurch, deshalb, dabei, darauf</em>: <em>Die Mieten steigen. Dadurch wird Wohnen für viele unbezahlbar.</em>"
      },
      {
        contrast: "En español la subordinada sigue directamente al verbo, con o sin la preposición del verbo: <em>insiste en que nos quedemos</em>, <em>nos hemos puesto de acuerdo en aplazar la cita</em>. En alemán el verbo con preposición suele anunciar la oración con <em>darauf, daran, darüber</em>, algo que el español no hace. Con algunos verbos el correlativo es obligatorio (<em>Er besteht darauf, dass wir bleiben</em>); con otros es facultativo (<em>Wir haben uns (darauf) geeinigt, den Termin zu verschieben</em>), y en la lengua escrita cuidada suele ponerse."
      },
      {
        trap: "El adverbio pronominal toma la preposición del verbo: <em>bestehen auf → darauf</em>, <em>denken an → daran</em>, <em>sich ärgern über → darüber</em>. <em>Er besteht daran, dass ...</em> es incorrecto. Ojo: la preposición alemana no tiene por qué coincidir con la española (<em>bestehen auf</em> es «insistir en», <em>denken an</em> «pensar en», <em>sich ärgern über</em> «enfadarse por»): hay que aprender la alemana con cada verbo."
      },
      {
        tip: "Aprende los verbos con su preposición y su adverbio juntos: <em>sich einigen auf / darauf</em>, <em>hinweisen auf / darauf</em>, <em>eingehen auf / darauf</em>. En las presentaciones aparecen continuamente."
      }
    ],
    grammar: {
      title: "Correlativos y conectores textuales",
      note: "Verbo + preposición + oración: <b>da(r)- + preposición</b> en la principal (<i>darauf, dass ...</i>). Sin preposición: <b>es</b> (<i>Es ist wichtig, dass ...</i>). Orden del texto: <i>zunächst, dann, schließlich</i>; adición: <i>darüber hinaus</i>.",
      table: {
        head: ["verbo", "correlativo", "ejemplo"],
        rows: [
          ["bestehen auf", "darauf", "Er besteht darauf, dass wir bleiben."],
          ["sich einigen auf", "darauf", "Wir haben uns darauf geeinigt, den Termin zu verschieben."],
          ["hinweisen auf", "darauf", "Ich weise darauf hin, dass die Frist endet."],
          ["denken an", "daran", "Denk daran, das Licht auszumachen."],
          ["wichtig sein", "es", "Es ist wichtig, dass alle pünktlich sind."]
        ]
      },
      examples: [
        { tr: "Tengo ganas de que vengas.", note: "sich freuen auf → darauf" },
        { tr: "Es importante que todos sean puntuales.", note: "es anticipa la subordinada" },
        { tr: "Nos hemos puesto de acuerdo en aplazar la cita.", note: "sich einigen auf → darauf + infinitivo" },
        { tr: "Insiste en que nos quedemos.", note: "bestehen auf → darauf" },
        { tr: "Este punto es decisivo, por eso me gustaría profundizar en él.", note: "eingehen auf → darauf" },
        { tr: "Además, hay otros problemas.", note: "darüber hinaus: añade" }
      ]
    },
    vocab: [
      "la relación, el contexto",
      "la introducción",
      "la conclusión, el final",
      "el párrafo",
      "la referencia",
      "la estructura, el esquema (de un texto)",
      "ponerse de acuerdo (auf: en)",
      "insistir (auf: en)",
      "profundizar, abordar (auf: un tema)",
      "hacer notar, señalar (auf: algo)",
      "además, aparte de eso",
      "por último, al final"
    ],
    exercises: [
      {
        q: "Completa: «Er besteht ___, dass wir bleiben.»",
        opts: [
          "darauf",
          "daran",
          "dafür"
        ],
        why: "<i>bestehen auf</i>: el correlativo toma la misma preposición, <b>darauf</b>."
      },
      {
        q: "¿Qué frase es correcta?",
        opts: [
          "Dass alle pünktlich sind, ist wichtig.",
          "Dass alle pünktlich sind, ist es wichtig.",
          "Es, dass alle pünktlich sind, ist wichtig."
        ],
        why: "Cuando la subordinada ocupa el primer lugar, el <i>es</i> anticipador sujeto desaparece."
      },
      {
        q: "En un ensayo: «Die Mieten steigen. ___ wird Wohnen für viele Familien unbezahlbar.» ¿Qué conector crea el enlace adecuado?",
        opts: [
          "Dadurch",
          "Trotzdem",
          "Stattdessen"
        ],
        why: "La segunda oración es una consecuencia de la primera: <b>dadurch</b>, «de este modo, por eso»."
      },
      {
        q: "Completa: «Wir haben uns ___ geeinigt, den Termin zu verschieben.»",
        hint: "sich einigen auf + oración",
        why: "<b>darauf</b>: anuncia el infinitivo con <i>zu</i>."
      },
      {
        q: "Completa: «Auf diese Frage gehe ich später ___.»",
        hint: "partícula de eingehen",
        why: "<b>ein</b>: <i>eingehen auf</i> es separable, «abordar, responder a»."
      },
      {
        q: "Completa el esquema de la presentación.",
        tr: "Primero quisiera describir el problema. Después indico posibles soluciones y por último extraigo una conclusión.",
        why: "<i>Zuerst/Zunächst</i>, <i>Danach/Dann/Anschließend</i>, <i>schließlich/abschließend</i>: los conectores guían a quien escucha."
      },
      {
        q: "Relaciona cada palabra con su significado.",
        pairs: [
          "la introducción",
          "el párrafo",
          "la relación, el contexto",
          "la estructura (de un texto)"
        ]
      },
      {
        q: "Traduce: «(Él) insiste en que todos participen en la reunión.» (bestehen auf, die Besprechung)",
        why: "<i>Er besteht darauf, dass alle an der Besprechung teilnehmen</i>: <i>darauf</i> anuncia la subordinada; donde el español usa el subjuntivo (<i>participen</i>), el alemán usa el indicativo."
      },
      {
        tr: "En mi exposición abordo primero las causas. Además, quisiera hacer notar que ya existen algunas primeras soluciones. Por último, resumo todo brevemente.",
        why: "En <i>Vortrag</i> el acento cae en <b>Vor</b>; en <i>Ursachen</i> el acento cae en <b>Ur</b>; en <i>zusammen</i> el acento cae en <b>sam</b>."
      },
      {
        tr: "Quisiera hacer notar que el plazo vence mañana.",
        why: "En <i>hinweisen</i> el acento cae en <b>hin</b>; en <i>Frist</i> la <b>i</b> es breve; en <i>endet</i> la primera <b>e</b> es breve."
      }
    ]
  },
  "lesson:c1-u03-test": {
    theme: "Comprobación",
    title: "Test: Registros y cohesión textual",
    objectives: [
      "comprobar la unidad y repasar werden, los verbos de función y el estilo nominal de las unidades 1-3"
    ],
    theory: [
      {
        p: "Doce preguntas sobre la unidad y sobre las unidades 1-3. Se aprueba con el 70%. No vuelvas a mirar las lecciones mientras respondes: si no recuerdas algo, es mejor volver atrás y repasar."
      }
    ],
    exercises: [
      {
        q: "Completa: «Er ist Lehrer ___.»",
        hint: "participio de werden «volverse, hacerse»",
        why: "<b>geworden</b>: verbo pleno, con <i>ge-</i>."
      },
      {
        q: "Completa: «Das neue Gesetz tritt im Mai in ___.»",
        hint: "entrar en vigor",
        why: "<b>Kraft</b>: <i>in Kraft treten</i>."
      },
      {
        q: "Completa el aviso: «Die Zahlung ___ per Überweisung.»",
        hint: "tiene lugar",
        why: "<b>erfolgt</b>: verbo típico del Amtsdeutsch."
      },
      {
        q: "Completa: «Wir müssen noch eine Entscheidung ___.»",
        hint: "tomar (una decisión)",
        why: "<b>treffen</b>: <i>eine Entscheidung treffen</i> (en estilo formal también <i>fällen</i>)."
      },
      {
        q: "Completa: «Sie besteht ___, dass wir pünktlich sind.»",
        hint: "correlativo de bestehen auf",
        why: "<b>darauf</b>: anuncia la subordinada."
      },
      {
        q: "Completa: «___ Abschluss der Arbeiten wird die Straße freigegeben.»",
        hint: "preposición: «tras»",
        why: "<b>Nach</b>: <i>nach</i> + dativo (<i>Abschluss</i>) en lugar de <i>nachdem</i>; <i>der Arbeiten</i> es el genitivo que depende del sustantivo."
      },
      {
        q: "El compañero todavía no ha llegado. ¿Qué expresa «Er wird den Zug wohl verpasst haben»?",
        opts: [
          "una conjetura sobre el pasado",
          "un futuro",
          "una pasiva"
        ],
        why: "Futur II con valor de <b>conjetura</b>: «habrá perdido el tren»."
      },
      {
        q: "¿Qué grupo nominal corresponde a «Um die Kosten zu senken, ...»?",
        opts: [
          "Zur Senkung der Kosten ...",
          "Bei Senkung der Kosten ...",
          "Trotz Senkung der Kosten ..."
        ],
        why: "La finalidad (<i>um ... zu</i>) se expresa con <b>zu</b> + sustantivo: <i>zur Senkung der Kosten</i>."
      },
      {
        q: "Por teléfono una compañera dice: «Das ist halt so.» ¿Qué actitud expresa?",
        opts: [
          "resignación",
          "entusiasmo",
          "reproche"
        ],
        why: "<i>halt</i> indica que la cosa no se puede cambiar: <b>resignación</b>."
      },
      {
        q: "En un reglamento: ¿qué frase expresa una obligación?",
        opts: [
          "Der Ausweis ist stets mitzuführen.",
          "Der Ausweis lässt sich mitführen.",
          "Der Ausweis ist mitgeführt."
        ],
        why: "<b>sein + zu</b> en un reglamento expresa una obligación: «el documento debe llevarse siempre encima»."
      },
      {
        q: "Reformula en estilo nominal: «Weil es stark regnete, wurde das Konzert abgesagt.»",
        why: "<i>Wegen des starken Regens wurde das Konzert abgesagt</i>: <i>wegen</i> (o <i>aufgrund</i>) + genitivo en lugar de <i>weil</i>."
      },
      {
        tr: "Una vez concluidas las obras, la calle volverá a abrirse.",
        why: "En <i>Abschluss</i> el acento cae en <b>Ab</b>; en <i>Arbeiten</i> el acento cae en <b>Ar</b>; en <i>freigegeben</i> el acento cae en <b>frei</b>."
      }
    ]
  }
});
