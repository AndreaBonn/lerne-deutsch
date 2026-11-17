/* ============================================================
   Learner-language text (es) for data/core/b2-02.js, unit b2-u05.
   Keys point at ids in the neutral layer; arrays merge by index,
   so their length has to match core.
   Checked by scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("es", {
  "unit:b2-u05": {
    title: "Dijo que estaba enferma",
    grammarNote: "Konjunktiv I en el estilo indirecto (er sei, er habe, er werde) · el Konjunktiv II como sustituto (sie hätten) · cambios de tiempo, lugar y persona · preguntas indirectas con ob y con interrogativo · órdenes indirectas con sollen"
  },
  "lesson:b2-u05-l1": {
    theme: "Noticias y declaraciones de testigos",
    title: "Del estilo directo al indirecto",
    objectives: [
      "reconocer y formar el Konjunktiv I en tercera persona",
      "referir palabras ajenas con distancia, como en la prensa",
      "sustituir el Konjunktiv I por el Konjunktiv II cuando coincide con el indicativo",
      "usar verbos como behaupten, erklären, betonen"
    ],
    theory: [
      {
        h: "El Konjunktiv I",
        p: "Los periódicos, las actas y los informes refieren las palabras ajenas con el <strong>Konjunktiv I</strong>: quien escribe indica que es la versión de esa persona. Se forma con la <strong>raíz del infinitivo</strong> + <em>-e</em> y se usa sobre todo en la tercera persona del singular, donde se distingue del indicativo: <em>er habe, er komme, er wisse, er könne, er werde</em>. <em>sein</em> es irregular: <em>er sei, sie seien</em>. <em>Der Minister sagte, er sei mit dem Ergebnis zufrieden.</em>"
      },
      {
        h: "Pasado y sustitución",
        p: "El pasado se forma con <strong>habe</strong> o <strong>sei</strong> + participio: <em>Die Zeugin erklärte, sie habe nichts gesehen. Laut Polizei sei der Fahrer zu schnell gefahren.</em> El futuro con <strong>werde</strong> + infinitivo: <em>Die Firma werde keine Stellen streichen.</em> Cuando el Konjunktiv I coincide con el indicativo, sobre todo en plural (<em>sie haben</em>), se usa el <strong>Konjunktiv II</strong>: <em>Sie sagten, sie hätten keine Zeit.</em>"
      },
      {
        contrast: "En español el estilo indirecto cambia el tiempo: <em>«Estoy enferma»</em> se convierte en <em>dijo que estaba enferma</em>. El alemán mantiene el tiempo y cambia el modo: <em>sie sagte, sie sei krank</em>. El Konjunktiv I atribuye la información a una fuente, sin decir si es cierta: <em>Laut Polizei sei der Fahrer zu schnell gefahren</em>, «según la policía, el conductor circulaba demasiado rápido». No equivale necesariamente al condicional de rumor de la prensa española (<em>habría circulado</em>), que añade la idea de dato no confirmado."
      },
      {
        trap: "El Konjunktiv I no expresa duda: solo marca que las palabras son de otra persona. Y es raro en la lengua hablada: <em>Er hat gesagt, er ist krank</em> es normal en una conversación. Por escrito, el Konjunktiv I marca la atribución de forma explícita; también es posible el indicativo, sobre todo con <em>dass</em> y una fuente citada, y no significa necesariamente que quien escribe garantice lo que se afirma."
      },
      {
        tip: "Con los verbos en <em>-en</em>, la tercera persona del singular del Konjunktiv I se forma quitando la <em>-n</em> del infinitivo: <em>haben → habe, kommen → komme, wissen → wisse, können → könne</em>. Las excepciones son <em>sein → sei</em> y los verbos en <em>-eln</em> o como <em>tun</em> (<em>er handle, er tue</em>)."
      }
    ],
    grammar: {
      title: "El Konjunktiv I en el estilo indirecto",
      note: "<b>Presente</b>: raíz + <i>-e</i> (er habe, er komme; er sei). <b>Pasado</b>: habe / sei + participio. <b>Futuro</b>: werde + infinitivo. Si coincide con el indicativo: <b>Konjunktiv II</b> (sie hätten).",
      table: {
        head: ["infinitivo", "indicativo (er)", "Konjunktiv I (er)", "Konjunktiv I (sie, plural)", "sustituto"],
        rows: [
          ["sein", "er ist", "er sei", "sie seien", "-"],
          ["haben", "er hat", "er habe", "sie haben", "sie hätten"],
          ["werden", "er wird", "er werde", "sie werden", "sie würden"],
          ["wissen", "er weiß", "er wisse", "sie wissen", "sie wüssten"],
          ["können", "er kann", "er könne", "sie können", "sie könnten"]
        ]
      },
      examples: [
        { tr: "El ministro dijo que estaba satisfecho con el resultado.", note: "er sei: Konjunktiv I de sein" },
        { tr: "La testigo declaró que no había visto nada.", note: "pasado: habe + participio" },
        { tr: "Según la policía, el conductor circulaba demasiado rápido.", note: "laut + Konjunktiv I: la información se atribuye a la policía" },
        { tr: "El portavoz subrayó que la empresa no recortaría puestos de trabajo.", note: "futuro: werde + infinitivo" },
        { tr: "Dijeron que no tenían tiempo.", note: "sie haben coincide con el indicativo: hätten" },
        { tr: "Afirma que no sabe nada.", note: "er wisse: Konjunktiv I de wissen" }
      ]
    },
    vocab: [
      "la declaración",
      "el testigo",
      "la testigo",
      "el portavoz",
      "la noticia, el aviso",
      "el informe, la crónica",
      "afirmar, sostener",
      "declarar, explicar",
      "subrayar, recalcar",
      "informar (über + acusativo: sobre)",
      "según (+ dativo o genitivo)",
      "supuestamente (como adjetivo: die angebliche Krankheit, la supuesta enfermedad)"
    ],
    exercises: [
      {
        q: "¿Cómo refiere un periódico «Estoy enferma», dicho por ella?",
        opts: [
          "Sie sagte, sie sei krank.",
          "Sie sagte, sie wäre krank gewesen.",
          "Sie sagte, sie seien krank."
        ],
        why: "Konjunktiv I de <i>sein</i>, tercera persona del singular: <b>sie sei</b>. El tiempo no cambia: <i>wäre krank gewesen</i> hablaría del pasado, <i>seien</i> es plural."
      },
      {
        q: "¿Cuál es el Konjunktiv I de haben en la tercera persona del singular?",
        opts: [
          "er habe",
          "er hat",
          "er hatte"
        ],
        why: "Raíz del infinitivo <i>hab-</i> + <i>-e</i>: <b>er habe</b>. <i>hat</i> es el presente de indicativo, <i>hatte</i> el Präteritum."
      },
      {
        q: "Completa, en estilo periodístico, con la forma que sustituye al Konjunktiv I: «Sie sagten, sie ___ keine Zeit.»",
        opts: [
          "hätten",
          "haben",
          "hatten"
        ],
        why: "El Konjunktiv I <i>sie haben</i> coincide con el indicativo, así que se usa el Konjunktiv II: <b>hätten</b>. <i>hatten</i> es el Präteritum."
      },
      {
        q: "Completa: «Der Minister sagte, er ___ zufrieden.»",
        hint: "Konjunktiv I de sein, er",
        why: "<b>sei</b>: Konjunktiv I de <i>sein</i>, la forma típica de la prensa."
      },
      {
        q: "Completa: «Die Zeugin erklärte, sie ___ nichts gesehen.»",
        hint: "Konjunktiv I de haben, sie (ella)",
        why: "<b>habe</b>: el pasado del Konjunktiv I se forma con <i>habe</i> + participio."
      },
      {
        q: "Completa la frase.",
        tr: "Afirma que no sabe nada.",
        why: "<i>Er behauptet, er wisse von nichts</i>: <i>wisse</i> es el Konjunktiv I de <i>wissen</i>; <i>von nichts wissen</i> significa «no saber nada de algo»."
      },
      {
        q: "Relaciona cada verbo con su significado.",
        pairs: [
          "afirmar, sostener",
          "subrayar, recalcar",
          "informar",
          "declarar, explicar"
        ]
      },
      {
        q: "Ordena las palabras.",
        tr: "Según la policía, el conductor circulaba demasiado rápido.",
        why: "<i>Laut Polizei sei der Fahrer zu schnell gefahren.</i> <i>Laut Polizei</i> ocupa la primera posición, luego el verbo <i>sei</i>, y el participio <i>gefahren</i> al final."
      },
      {
        q: "Traduce para una noticia: «El portavoz dijo que la empresa no recortaría puestos de trabajo.» (Stellen streichen)",
        why: "<i>Der Sprecher sagte, die Firma werde keine Stellen streichen</i>: futuro del Konjunktiv I con <i>werde</i>, donde el español usa el condicional <i>recortaría</i>. Con <i>dass</i> el verbo va al final: <i>..., dass die Firma keine Stellen streichen werde</i>."
      },
      {
        tr: "La policía comunicó que el accidente había ocurrido hacia las ocho. Un testigo informó de que el conductor no había frenado.",
        why: "En <i>teilte ... mit</i> la partícula va al final; en <i>Zeuge</i> la <b>Z</b> es [ts] y <b>eu</b> es [ɔʏ]; en <i>gebremst</i> el prefijo <b>ge-</b> es átono."
      },
      {
        tr: "La portavoz declaró que el problema ya se había resuelto.",
        why: "En <i>Sprecherin</i> la <b>sp</b> inicial es [ʃp]; en <i>inzwischen</i> la <b>z</b> es [ts] y <b>sch</b> es [ʃ]; en <i>gelöst</i> la <b>ö</b> es larga."
      }
    ]
  },
  "lesson:b2-u05-l2": {
    theme: "Actas y ruedas de prensa",
    title: "Tiempo, lugar, persona",
    objectives: [
      "cambiar persona, tiempo y lugar en el estilo indirecto",
      "mantener en el Konjunktiv I el tiempo del estilo directo",
      "usar am Tag davor, am nächsten Tag, dort",
      "referir una rueda de prensa o una entrevista"
    ],
    theory: [
      {
        h: "Lo que cambia",
        p: "Cuando refieres palabras ajenas en otro momento o en otro lugar, cambia la <strong>persona</strong> (<em>ich → er/sie, mein → sein/ihr</em>), cambian las expresiones de <strong>tiempo</strong> (<em>heute → an diesem Tag, morgen → am nächsten Tag / am folgenden Tag, gestern → am Tag davor / am Vortag, nächste Woche → in der folgenden Woche</em>) y de <strong>lugar</strong> (<em>hier → dort</em>). Si lo refieres el mismo día o en el mismo lugar, <em>heute</em> o <em>hier</em> pueden quedarse. „Ich komme morgen.“ → <em>Er sagte, er komme am nächsten Tag.</em> „Das ist mein Auto.“ → <em>Er sagte, das sei sein Auto.</em>"
      },
      {
        h: "Lo que no cambia",
        p: "El <strong>tiempo</strong> sigue siendo el del estilo directo; solo cambia el modo. Presente → presente del Konjunktiv I („Ich kenne ihn nicht.“ → <em>sie kenne ihn nicht</em>); pasado → pasado del Konjunktiv I („Ich war gestern hier.“ → <em>sie sei am Tag davor dort gewesen</em>); futuro → <em>werde</em> + infinitivo („Ich werde anrufen.“ → <em>er werde anrufen</em>)."
      },
      {
        contrast: "El español aplica la concordancia de tiempos: <em>«Lo conozco»</em> → <em>dijo que lo conocía</em>, <em>«Estuve aquí ayer»</em> → <em>dijo que había estado allí el día anterior</em>, <em>«Llamaré»</em> → <em>dijo que llamaría</em>. El alemán no: <em>sie kenne</em>, <em>sie sei ... gewesen</em>, <em>er werde anrufen</em>. Los cambios de persona, tiempo y lugar, en cambio, son los mismos que en español."
      },
      {
        trap: "No conviertas el futuro en un condicional para imitar <em>llamaría</em>: el futuro referido es <em>er werde anrufen</em> (en plural, <em>sie würden anrufen</em>). Y <em>el día anterior</em> es <em>am Tag davor</em> o <em>am Vortag</em>, no <em>der Tag vorher</em> como complemento de tiempo."
      },
      {
        tip: "Antes de referir una frase, subraya en el estilo directo los pronombres y las palabras de tiempo y lugar: son las únicas que cambian, además del modo del verbo."
      }
    ],
    grammar: {
      title: "Los cambios en el estilo indirecto",
      note: "Cambia la <b>persona</b> y, si el momento o el lugar de quien refiere son otros, también el <b>tiempo</b> y el <b>lugar</b>; el <b>tiempo verbal</b> sigue siendo el del estilo directo, solo que en Konjunktiv I.",
      table: {
        head: ["estilo directo", "estilo indirecto"],
        rows: [
          ["heute", "an diesem Tag"],
          ["morgen", "am nächsten Tag, am folgenden Tag"],
          ["gestern", "am Tag davor, am Vortag"],
          ["nächste Woche", "in der folgenden Woche"],
          ["hier", "dort"]
        ]
      },
      examples: [
        { tr: "Dijo que vendría al día siguiente.", note: "„Ich komme morgen.“: presente → presente del Konjunktiv I" },
        { tr: "Dijo que había estado allí el día anterior.", note: "„Ich war gestern hier.“: pasado → sei ... gewesen" },
        { tr: "Dijeron que ese día no tenían tiempo.", note: "„Wir haben heute keine Zeit.“: hätten en lugar de haben" },
        { tr: "Dijo que llamaría la semana siguiente.", note: "„Ich werde nächste Woche anrufen.“: werde + infinitivo" },
        { tr: "Dijo que aquel era su coche.", note: "mein → sein" },
        { tr: "Dijo que no lo conocía.", note: "„Ich kenne ihn nicht.“: kenne" }
      ]
    },
    vocab: [
      "el día anterior, la víspera",
      "el comunicado, el aviso",
      "el acta",
      "la rueda de prensa",
      "la entrevista",
      "la fuente",
      "comunicar, anunciar",
      "asegurar",
      "citar",
      "referir, reproducir (las palabras de alguien)",
      "siguiente",
      "entretanto; ya, a estas alturas"
    ],
    exercises: [
      {
        q: "Una semana después refieres «Ich komme morgen» (él). ¿Qué frase lo refiere en Konjunktiv I?",
        opts: [
          "Er sagte, er komme am nächsten Tag.",
          "Er sagte, ich komme am nächsten Tag.",
          "Er sagte, er kam am nächsten Tag."
        ],
        why: "Cambian la persona (<i>ich → er</i>) y el tiempo (<i>morgen → am nächsten Tag</i>); el verbo va en presente del Konjunktiv I: <b>komme</b>. <i>kam</i> es un Präteritum de indicativo, no un Konjunktiv I."
      },
      {
        q: "Días después, en otra ciudad, refieres «Ich war gestern hier» (ella). ¿Qué frase es correcta?",
        opts: [
          "Sie sagte, sie sei am Tag davor dort gewesen.",
          "Sie sagte, sie war gestern hier.",
          "Sie sagte, sie sei am Tag davor hier."
        ],
        why: "Pasado → <b>sei ... gewesen</b>; <i>gestern → am Tag davor</i>, <i>hier → dort</i>. La tercera frase ha perdido el pasado."
      },
      {
        q: "¿Cómo refieres «Das ist mein Auto» (él)?",
        opts: [
          "Er sagte, das sei sein Auto.",
          "Er sagte, das sei mein Auto.",
          "Er sagte, das ist sein Auto sei."
        ],
        why: "El posesivo cambia con la persona: <i>mein → sein</i>; el verbo pasa al Konjunktiv I: <b>sei</b>."
      },
      {
        q: "„Ich kenne ihn nicht.“ → «Sie sagte, sie ___ ihn nicht.»",
        hint: "Konjunktiv I de kennen, sie (ella)",
        why: "<b>kenne</b>: raíz <i>kenn-</i> + <i>-e</i>. El tiempo sigue en presente, donde el español diría <i>conocía</i>."
      },
      {
        q: "Referido días después: „Wir haben heute keine Zeit.“ → «Sie sagten, sie ___ an diesem Tag keine Zeit.»",
        hint: "plural: el Konjunktiv I coincide con el indicativo",
        why: "<b>hätten</b>: <i>sie haben</i> coincidiría con el indicativo, así que Konjunktiv II. Y <i>heute → an diesem Tag</i>."
      },
      {
        q: "Completa la frase.",
        tr: "„Ich werde nächste Woche anrufen.“ → Dijo que llamaría la semana siguiente.",
        why: "<i>Er sagte, er werde in der folgenden Woche anrufen</i>: el futuro referido es <i>werde</i> + infinitivo, no un condicional."
      },
      {
        q: "¿Qué frases refieren correctamente, en estilo periodístico, «Ich bin müde», dicho por ella?",
        opts: [
          "Sie sagte, sie sei müde.",
          "Sie sagte, dass sie müde sei.",
          "Sie sagte, ich sei müde.",
          "Sie sagte, dass sie sei müde."
        ],
        why: "Las dos primeras son correctas: sin <i>dass</i> el verbo va en segunda posición, con <i>dass</i> va al final. La tercera no cambia la persona, la cuarta no lleva el verbo al final después de <i>dass</i>."
      },
      {
        q: "Ordena las palabras.",
        tr: "Dijo que había estado allí el día anterior.",
        why: "<i>Sie sagte, sie sei am Tag davor dort gewesen.</i> <i>sei</i> en segunda posición, el participio <i>gewesen</i> al final."
      },
      {
        q: "Traduce, en estilo periodístico: «(Él) dijo que había visto la película el día anterior.»",
        why: "<i>Er sagte, er habe den Film am Tag davor gesehen</i> (o <i>am Vortag</i>): pasado del Konjunktiv I, sin el pluscuamperfecto del español."
      },
      {
        tr: "En la rueda de prensa, la alcaldesa comunicó que el puente volvería a abrirse el lunes siguiente. Aseguró que todas las obras ya habían terminado.",
        why: "En <i>Bürgermeisterin</i> el acento cae en <b>Bür</b>; en <i>versicherte</i> la <b>v</b> suena [f]; en <i>abgeschlossen</i> la <b>b</b> delante de <i>g</i> suena [p]."
      },
      {
        tr: "El ministro aseguró que no había sabido nada del problema.",
        why: "En <i>Minister</i> el acento cae en <b>nis</b>; en <i>Problem</i> el acento cae en <b>blem</b>; en <i>gewusst</i> la <b>u</b> es breve."
      }
    ]
  },
  "lesson:b2-u05-l3": {
    theme: "Preguntas y órdenes referidas",
    title: "Preguntó si...; me dijo que...",
    objectives: [
      "referir una pregunta de sí o no con ob",
      "referir una pregunta abierta con el interrogativo",
      "referir una orden con sollen",
      "referir una petición cortés con bitten + zu + infinitivo"
    ],
    theory: [
      {
        h: "Las preguntas indirectas",
        p: "Una pregunta de <strong>sí o no</strong> se refiere con <strong>ob</strong> y el verbo al final: „Hast du Zeit?“ → <em>Er fragte, ob ich Zeit hätte.</em> Una pregunta <strong>abierta</strong> conserva su interrogativo, y también aquí el verbo va al final: „Wann fährt der Zug?“ → <em>Sie fragte, wann der Zug fahre.</em> Además de <em>fragen</em> se usan <em>wissen wollen</em> y <em>sich erkundigen</em>: <em>Sie wollte wissen, ob ich mitkäme.</em>"
      },
      {
        h: "Las órdenes y peticiones indirectas",
        p: "Una orden se refiere con <strong>sollen</strong> en Konjunktiv I: „Warte hier!“ → <em>Sie sagte, ich solle hier warten.</em> <em>Der Arzt sagte, ich solle mehr schlafen.</em> También es posible el infinitivo con la persona como complemento: <em>Sie sagte mir, hier zu warten.</em> Una petición cortés se refiere a menudo con <strong>bitten</strong> o <strong>auffordern</strong> + <em>zu</em> + infinitivo: „Rufen Sie mich bitte an!“ → <em>Er bat mich, ihn anzurufen.</em>"
      },
      {
        contrast: "En español, la orden referida pasa al subjuntivo (<em>me dijo que esperara</em>) y la pregunta va con <em>si</em> y concordancia de tiempos (<em>preguntó si tenía tiempo</em>). Para referir una orden, el alemán suele usar el verbo <em>sollen</em> en Konjunktiv I, con o sin <em>dass</em>: <em>Sie sagte, ich solle warten</em> / <em>Sie sagte, dass ich warten solle</em>. La pregunta va con <em>ob</em> y el verbo al final, en Konjunktiv (<em>ob ich Zeit hätte</em>)."
      },
      {
        trap: "<em>ob</em> no es <em>dass</em>: <em>Er fragte, dass ich Zeit hätte</em> no tiene sentido, como no lo tendría «preguntó que tenía tiempo». Y después de <em>ob</em> o de un interrogativo el verbo va al final, no en segunda posición como en la pregunta directa: <em>wann der Zug fahre</em>, no <em>wann fährt der Zug</em>."
      },
      {
        tip: "En la lengua hablada el indicativo suele bastar en las preguntas indirectas (<em>Er hat gefragt, ob ich Zeit habe</em>); el Konjunktiv es la forma de los textos escritos y de los informes."
      }
    ],
    grammar: {
      title: "Preguntas y órdenes en el estilo indirecto",
      note: "<b>Pregunta de sí o no</b>: ob + verbo al final. <b>Pregunta abierta</b>: interrogativo + verbo al final. <b>Orden</b>: sollen en Konjunktiv I. <b>Petición</b>: jemanden bitten / jemanden auffordern, etwas zu tun (Er bat mich, ihn anzurufen. Er forderte mich auf, zu warten.).",
      table: {
        head: ["estilo directo", "estilo indirecto"],
        rows: [
          ["„Hast du Zeit?“", "Er fragte, ob ich Zeit hätte."],
          ["„Wann fährt der Zug?“", "Sie fragte, wann der Zug fahre."],
          ["„Warte hier!“", "Sie sagte, ich solle hier warten."],
          ["„Rufen Sie mich bitte an!“", "Er bat mich, ihn anzurufen."]
        ]
      },
      examples: [
        { tr: "Me preguntó si tenía tiempo.", note: "ob + verbo al final, Konjunktiv II en lugar de ich habe" },
        { tr: "Preguntó a qué hora salía el tren.", note: "interrogativo + fahre" },
        { tr: "Me dijo que esperara aquí.", note: "orden: ich solle" },
        { tr: "Me pidió que lo llamara.", note: "bitten + zu + infinitivo" },
        { tr: "Quería saber si yo iría con ellos.", note: "wissen wollen, ob ..." },
        { tr: "El médico me dijo que durmiera más.", note: "consejo referido con sollen" }
      ]
    },
    vocab: [
      "la petición, el favor",
      "la instrucción",
      "la orden",
      "la información (Auskunft geben: dar información)",
      "el interrogatorio, la declaración ante la policía",
      "instar, pedir (a alguien que haga algo)",
      "pedir (um + acusativo: algo)",
      "informarse (nach + dativo: sobre)",
      "querer saber",
      "exigir",
      "expresamente",
      "urgentemente"
    ],
    exercises: [
      {
        q: "¿Cómo refieres «Hast du Zeit?» (él a mí)?",
        opts: [
          "Er fragte, ob ich Zeit hätte.",
          "Er fragte, dass ich Zeit hätte.",
          "Er fragte, ob hätte ich Zeit."
        ],
        why: "Pregunta de sí o no: <b>ob</b> + verbo al final. <i>dass</i> no introduce preguntas, y después de <i>ob</i> el verbo tiene que ir al final, no justo detrás."
      },
      {
        q: "¿Cómo refieres «Warte hier!» (ella a mí)?",
        opts: [
          "Sie sagte, ich solle hier warten.",
          "Sie sagte, ich warte hier.",
          "Sie sagte, warte ich hier."
        ],
        why: "La orden referida se expresa con <b>sollen</b> en Konjunktiv I: <i>ich solle ... warten</i>, donde el español usaría el subjuntivo <i>que esperara</i>."
      },
      {
        q: "¿Cómo refieres «Wann fährt der Zug?» (ella)?",
        opts: [
          "Sie fragte, wann der Zug fahre.",
          "Sie fragte, wann fährt der Zug.",
          "Sie fragte, ob wann der Zug fahre."
        ],
        why: "El interrogativo se mantiene y el verbo va al final: <b>wann der Zug fahre</b>. No se añade <i>ob</i>."
      },
      {
        q: "Completa: «Er fragte, ___ ich mitkommen wolle.»",
        hint: "pregunta indirecta de sí o no",
        why: "<b>ob</b>: introduce la pregunta indirecta de sí o no y lleva el verbo al final, como el <i>si</i> español."
      },
      {
        q: "Completa: «Der Arzt sagte, ich ___ mehr schlafen.»",
        hint: "sollen en Konjunktiv I, ich",
        why: "<b>solle</b>: Konjunktiv I de <i>sollen</i>, que aquí se distingue del indicativo <i>ich soll</i>."
      },
      {
        q: "Completa la frase.",
        tr: "«¡Llámeme, por favor!» → Me pidió que lo llamara.",
        why: "<i>Er bat mich, ihn anzurufen</i>: <i>bat</i> es el Präteritum de <i>bitten</i>; con un verbo separable, <i>zu</i> va entre la partícula y el verbo."
      },
      {
        q: "Relaciona cada verbo con su significado.",
        pairs: [
          "pedir",
          "instar (a alguien a hacer algo)",
          "informarse",
          "exigir"
        ]
      },
      {
        q: "Ordena las palabras.",
        tr: "Quería saber si mañana tenía tiempo.",
        why: "<i>Sie wollte wissen, ob ich morgen Zeit hätte.</i> Después de <i>ob</i> el verbo <i>hätte</i> cierra la oración."
      },
      {
        q: "Traduce: «(Ella) me preguntó dónde vivía.»",
        why: "<i>Sie fragte mich, wo ich wohnte</i>, o <i>wo ich wohne</i>, también correcto. El Konjunktiv I <i>ich wohne</i> coincide con el indicativo, y también <i>wohnte</i>, igual al Präteritum: si quieres que el Konjunktiv se reconozca, usa <i>wo ich wohnen würde</i>."
      },
      {
        tr: "El policía me preguntó si había visto el accidente. Luego me pidió que le enseñara mi documento de identidad.",
        why: "En <i>Polizist</i> el acento cae en <b>zist</b>; en <i>forderte ... auf</i> la partícula va al final; en <i>Ausweis</i> <b>au</b> es [aʊ] y <b>ei</b> es [aɪ]."
      },
      {
        tr: "Me pidió que le devolviera la llamada con urgencia.",
        why: "En <i>dringend</i> <b>ng</b> es [ŋ] y la <b>d</b> final suena [t]; en <i>zurückzurufen</i> el segundo <i>zu</i> va entre <i>zurück</i> y <i>rufen</i>."
      }
    ]
  },
  "lesson:b2-u05-test": {
    theme: "Comprobación",
    title: "Test: Dijo que estaba enferma",
    objectives: [
      "comprobar el Konjunktiv I, los cambios del estilo indirecto, ob y sollen"
    ],
    theory: [
      {
        p: "Diez preguntas sobre toda la unidad. Se aprueba con el 70%. No vuelvas a mirar las lecciones mientras respondes: si no recuerdas algo, es mejor volver atrás y repasar."
      }
    ],
    exercises: [
      {
        q: "Completa: «Sie sagte, sie ___ keine Zeit.»",
        hint: "Konjunktiv I de haben, sie (ella)",
        why: "<b>habe</b>: en la tercera persona del singular el Konjunktiv I se distingue del indicativo <i>hat</i>."
      },
      {
        q: "Completa: «Er erklärte, er ___ am Vortag in Berlin gewesen.»",
        hint: "Konjunktiv I de sein, er",
        why: "<b>sei</b>: pasado del Konjunktiv I con <i>sein</i> + <i>gewesen</i>."
      },
      {
        q: "Completa: «Sie fragte, ___ ich Hunger hätte.»",
        hint: "pregunta indirecta de sí o no",
        why: "<b>ob</b>, con el verbo <i>hätte</i> al final."
      },
      {
        q: "¿Cuál es el Konjunktiv I de können en la tercera persona del singular?",
        opts: [
          "er könne",
          "er kann",
          "er könnte"
        ],
        why: "Raíz del infinitivo <i>könn-</i> + <i>-e</i>: <b>er könne</b>. <i>könnte</i> es el Konjunktiv II."
      },
      {
        q: "¿Cómo refieres «Bring mir das Buch!» (él a mí)?",
        opts: [
          "Er sagte, ich solle ihm das Buch bringen.",
          "Er sagte, ich bringe ihm das Buch.",
          "Er sagte, bring ihm das Buch."
        ],
        why: "Orden referida: <b>sollen</b> en Konjunktiv I, y <i>mir</i> pasa a <i>ihm</i>."
      },
      {
        q: "Completa, en estilo periodístico, con la forma que sustituye al Konjunktiv I: «Die Kinder sagten, sie ___ Hunger.»",
        opts: [
          "hätten",
          "haben",
          "habe"
        ],
        why: "En plural <i>sie haben</i> coincide con el indicativo, así que se usa el Konjunktiv II <b>hätten</b>. <i>habe</i> es singular."
      },
      {
        q: "¿Qué frases refieren correctamente, en estilo periodístico, «Ich kann nicht kommen», dicho por él?",
        opts: [
          "Er sagte, er könne nicht kommen.",
          "Er sagte, dass er nicht kommen könne.",
          "Er sagte, er kann nicht kommen könne.",
          "Er sagte, ich könne nicht kommen."
        ],
        why: "Las dos primeras son correctas. La tercera mezcla indicativo y Konjunktiv, la cuarta no cambia la persona."
      },
      {
        q: "Completa la frase.",
        tr: "«Ayer envié la carta.» (schicken) → Dijo que había enviado la carta el día anterior.",
        why: "<i>Sie sagte, sie habe den Brief am Tag davor geschickt</i>: pasado del Konjunktiv I y <i>gestern → am Tag davor</i>."
      },
      {
        tr: "La portavoz de la empresa declaró que se había informado a los clientes de inmediato. Preguntada por si había más problemas, respondió que todavía no podía decirlo.",
        why: "En <i>Sprecherin</i> <b>sp</b> es [ʃp]; en <i>informiert</i> el acento cae en <b>miert</b>; en <i>weitere</i> <b>ei</b> es [aɪ]."
      },
      {
        tr: "El testigo dijo que nunca había visto antes a aquel hombre.",
        why: "En <i>Zeuge</i> la <b>Z</b> es [ts]; en <i>zuvor</i> la <b>v</b> suena [f]; en <i>gesehen</i> la <b>h</b> no se pronuncia."
      }
    ]
  }
});
