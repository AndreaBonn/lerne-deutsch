/* ============================================================
   Learner-language text (es) for data/core/b2-01.js, unit b2-u01.
   Keys point at ids in the neutral layer; arrays merge by index,
   so their length has to match core.
   Checked by scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("es", {
  "unit:b2-u01": {
    title: "Si lo hubiera sabido",
    grammarNote: "Konjunktiv II en pasado (hätte gemacht, wäre gegangen) · doble infinitivo con los modales (hätte anrufen sollen) · als ob, als wenn, als + verbo"
  },
  "lesson:b2-u01-l1": {
    theme: "Decisiones y lamentos",
    title: "Habría hecho, habría estado",
    objectives: [
      "formar el Konjunktiv II en pasado con hätte o wäre + participio II",
      "elegir entre hätte y wäre como en el Perfekt",
      "expresar un lamento (Hätte ich bloß ...!)",
      "construir una condición irreal sobre el pasado"
    ],
    theory: [
      {
        h: "hätte o wäre + participio II",
        p: "Para hablar de lo que <strong>habría podido pasar y no pasó</strong> se usa el Konjunktiv II en pasado: <strong>hätte</strong> o <strong>wäre</strong> conjugado + <strong>participio II</strong> al final. <em>Ich hätte das nicht gemacht</em> (no lo habría hecho), <em>Wir wären gern länger geblieben</em> (nos habríamos quedado con gusto más tiempo). La elección entre <em>hätte</em> y <em>wäre</em> es la misma del Perfekt: los verbos que allí llevan <em>sein</em> (<em>ich bin gegangen, ich bin gewesen</em>) aquí llevan <em>wäre</em> (<em>ich wäre gegangen, ich wäre gewesen</em>); todos los demás llevan <em>hätte</em>."
      },
      {
        h: "Condición irreal sobre el pasado",
        p: "Cuando la condición y la consecuencia se refieren las dos al pasado, las dos llevan el Konjunktiv II en pasado: <em>Wenn ich das gewusst hätte, wäre ich früher gekommen</em>. Tras <em>wenn</em> el auxiliar va al final, después del participio; la principal que sigue empieza por el auxiliar. Si la consecuencia se refiere al presente, ahí va el Konjunktiv II de presente: <em>Hätte ich die Gelegenheit genutzt, wäre ich jetzt in Berlin.</em> También se puede quitar <em>wenn</em> y empezar por el verbo: <em>Hätte ich das gewusst, wäre ich früher gekommen.</em> Con <strong>bloß</strong>, <strong>nur</strong> o <strong>doch</strong> la misma forma expresa un lamento: <em>Hätte ich bloß mehr gelernt!</em>"
      },
      {
        contrast: "El español usa dos formas distintas: <em>si lo hubiera sabido</em> (pluscuamperfecto de subjuntivo) y <em>habría venido</em> (condicional compuesto). El alemán, cuando las dos partes se refieren al pasado, usa el Konjunktiv II en pasado en las dos: <em>Wenn ich das gewusst hätte, wäre ich gekommen</em>. No hay una forma para el <em>si</em> y otra para la consecuencia: es el mismo modo dos veces."
      },
      {
        trap: "El español forma todo con <em>haber</em>: <em>habría hecho</em>, <em>habría venido</em>. El alemán copia el Perfekt, así que los verbos de movimiento y de cambio de estado llevan <em>wäre</em>: <em>Ich wäre gekommen</em>, no <em>Ich hätte gekommen</em>. Y <em>Wenn ich das gewusst habe</em> es un Perfekt de indicativo: puede indicar un momento o una condición abierta, pero no dice que no lo supieras. Para la hipótesis contraria a los hechos hace falta <em>gewusst hätte</em>."
      },
      {
        tip: "Para no equivocarte de auxiliar, piensa primero en el Perfekt: <em>ich habe gemacht</em> pasa a <em>ich hätte gemacht</em>, <em>ich bin geblieben</em> pasa a <em>ich wäre geblieben</em>. Se sustituye el auxiliar por su forma de Konjunktiv II y el participio no cambia."
      }
    ],
    grammar: {
      title: "Konjunktiv II en pasado: hätte / wäre + participio II",
      note: "<b>hätte</b> + participio con los verbos que en el Perfekt llevan <i>haben</i>, <b>wäre</b> + participio con los que llevan <i>sein</i>. Si condición y consecuencia se refieren al pasado, las dos llevan el Konjunktiv II en pasado; una consecuencia presente lleva el Konjunktiv II de presente.",
      table: {
        head: ["Perfekt", "Konjunktiv II en pasado", "español"],
        rows: [
          ["ich habe gemacht", "ich hätte gemacht", "habría hecho"],
          ["ich bin gegangen", "ich wäre gegangen", "habría ido"],
          ["ich bin gewesen", "ich wäre gewesen", "habría estado"],
          ["ich habe gewusst", "ich hätte gewusst", "habría sabido"]
        ]
      },
      examples: [
        { tr: "No lo habría hecho.", note: "hätte + participio al final" },
        { tr: "Nos habríamos quedado con gusto más tiempo.", note: "bleiben lleva sein: wäre" },
        { tr: "Si lo hubiera sabido, habría venido antes.", note: "condición y consecuencia en pasado: Konjunktiv II en pasado en las dos" },
        { tr: "¡Ojalá hubiera estudiado más!", note: "lamento: verbo en primera posición + bloß" },
        { tr: "Por poco llega tarde.", note: "fast + Konjunktiv II: algo que estuvo a punto de pasar y no pasó" },
        { tr: "Sin tu ayuda no lo habría conseguido.", note: "ohne + sustantivo en lugar de una oración con wenn" }
      ]
    },
    vocab: [
      "la ocasión, la oportunidad",
      "la decisión",
      "el error",
      "la oportunidad, la posibilidad",
      "la elección (en plural también: las elecciones)",
      "la suerte (Glück haben: tener suerte)",
      "perder (un tren, una ocasión)",
      "arrepentirse de, lamentar",
      "aprovechar",
      "decidir, decidirse (für + acusativo: por)",
      "conseguir, lograr",
      "a tiempo"
    ],
    exercises: [
      {
        tr: "El Konjunktiv II en pasado de machen, todas las personas.",
        why: "<i>hätte, hättest, hätte, hätten, hättet, hätten</i> + <i>gemacht</i>: <i>machen</i> lleva <i>haben</i> en el Perfekt, así que aquí <i>hätte</i>."
      },
      {
        tr: "El Konjunktiv II en pasado de gehen, todas las personas.",
        why: "<i>gehen</i> lleva <i>sein</i> en el Perfekt (<i>ich bin gegangen</i>), así que <i>wäre gegangen</i>. Para <i>du</i> e <i>ihr</i> valen tanto <i>wärst, wärt</i> como <i>wärest, wäret</i>."
      },
      {
        tr: "El Konjunktiv II en pasado de sein, todas las personas.",
        why: "<i>wäre gewesen</i>: <i>sein</i> forma el Perfekt consigo mismo (<i>ich bin gewesen</i>), así que <i>wäre</i> + <i>gewesen</i>."
      },
      {
        q: "¿Cómo se dice «Si lo hubiera sabido, habría venido»?",
        opts: [
          "Wenn ich das gewusst hätte, wäre ich gekommen.",
          "Wenn ich das gewusst habe, bin ich gekommen.",
          "Wenn ich das wüsste, würde ich kommen."
        ],
        why: "Para el pasado hace falta el Konjunktiv II en pasado en las dos partes: <b>gewusst hätte</b> y <b>wäre gekommen</b>. La segunda frase es un Perfekt de indicativo; la tercera, una hipótesis sobre el presente."
      },
      {
        q: "Completa: «Wir ___ gern länger geblieben.» (nos habríamos quedado)",
        opts: [
          "wären",
          "hätten",
          "würden"
        ],
        why: "<i>bleiben</i> lleva <i>sein</i> en el Perfekt (<i>wir sind geblieben</i>), así que <b>wären</b>. <i>Würden ... geblieben</i> no existe así."
      },
      {
        q: "Completa: «Ich ___ das nicht gemacht.» (no lo habría hecho)",
        hint: "Konjunktiv II de haben, ich",
        why: "<b>Hätte</b>: <i>machen</i> lleva <i>haben</i> en el Perfekt, y el participio <i>gemacht</i> va al final."
      },
      {
        q: "Completa: «Sie ___ fast zu spät gekommen.» (por poco llega tarde)",
        hint: "Konjunktiv II de sein, sie (ella)",
        why: "<b>Wäre</b>: <i>kommen</i> lleva <i>sein</i>. Con <i>fast</i>, el Konjunktiv II cuenta algo que estuvo a punto de pasar y no pasó."
      },
      {
        q: "Completa la frase.",
        tr: "Si hubiéramos tenido más tiempo, nos habríamos quedado más.",
        why: "<i>Wenn wir mehr Zeit gehabt hätten</i>: tras <i>wenn</i> primero el participio <i>gehabt</i>, luego el auxiliar <i>hätten</i> al final."
      },
      {
        q: "Traduce: «Si hubieras venido antes, lo habrías visto.» (tú, a él)",
        why: "<i>Wenn du früher gekommen wärst, hättest du ihn gesehen</i>. <i>kommen</i> lleva <i>wäre</i>, <i>sehen</i> lleva <i>hätte</i>. Sin <i>wenn</i>: <i>Wärst du früher gekommen, hättest du ihn gesehen</i>."
      },
      {
        tr: "Si hubiera aprovechado la ocasión, ahora estaría en Berlín. Pero decidí otra cosa.",
        why: "En <i>Gelegenheit</i> el acento cae en <b>le</b>: ge-<b>LE</b>-gen-heit; en <i>wäre</i> la <b>ä</b> es una <i>e</i> abierta y larga; en <i>entschieden</i> la <b>ie</b> es una <i>i</i> larga."
      },
      {
        tr: "Si lo hubiera sabido, me habría quedado en casa.",
        why: "En <i>gewusst</i> la <b>u</b> es breve delante de la doble <i>s</i>; en <i>hätte</i> la <b>ä</b> es breve; en <i>geblieben</i> la <b>ie</b> es larga."
      }
    ]
  },
  "lesson:b2-u01-l2": {
    theme: "Reproches y disculpas",
    title: "Debería haber llamado",
    objectives: [
      "usar el doble infinitivo con los modales en el Konjunktiv II en pasado",
      "formar el Perfekt de un modal con otro verbo",
      "colocar el auxiliar en su sitio en la subordinada",
      "hacer un reproche y disculparse"
    ],
    theory: [
      {
        h: "El doble infinitivo",
        p: "Un modal que acompaña a otro verbo en un tiempo compuesto <strong>no usa su participio</strong> (<em>gekonnt, gesollt</em>) sino su <strong>infinitivo</strong>. Al final de la frase quedan dos infinitivos: primero el verbo principal, luego el modal. El auxiliar es siempre <strong>haben</strong>. En Konjunktiv II: <em>Ich hätte dich anrufen sollen</em> (debería haberte llamado), <em>Wir hätten früher losfahren können</em> (podríamos haber salido antes). En Perfekt: <em>Er hat gestern nicht kommen können</em> (ayer no pudo venir)."
      },
      {
        h: "En la subordinada",
        p: "En la subordinada el auxiliar no va al final, como de costumbre: se coloca <strong>delante de los dos infinitivos</strong>. <em>Ich weiß, dass ich hätte fragen sollen. Es tut mir leid, dass ich nicht habe kommen können.</em> Con los modales en doble infinitivo esta posición es obligatoria."
      },
      {
        contrast: "El español conjuga el modal y pone <em>haber</em> + participio detrás: <em>debería haber llamado</em>, <em>podrías habérmelo dicho</em>. El alemán lo hace al revés: conjuga el auxiliar y deja el modal al final, en infinitivo: <em>Ich hätte anrufen sollen</em>. El auxiliar es siempre <em>haben</em>, también con los verbos de movimiento: <em>Ich hätte kommen sollen</em>, nunca <em>Ich wäre kommen sollen</em>."
      },
      {
        trap: "Para el lamento <em>debería haber llamado</em> la forma normal es <em>Ich hätte anrufen sollen</em>; la versión palabra por palabra, <em>Ich sollte angerufen haben</em>, necesita otro contexto (una llamada que ya tendría que estar hecha en un plazo). Y <em>Ich hätte das gekonnt</em> existe solo cuando el modal va <strong>solo</strong>: «habría sido capaz». En cuanto hay un segundo verbo, el participio desaparece: <em>Ich hätte das machen können</em>, no <em>Ich hätte das machen gekonnt</em>."
      },
      {
        tip: "Para un reproche suave se usa a menudo <em>eigentlich</em>: <em>Eigentlich hättest du mir Bescheid sagen müssen.</em> Suena menos duro que un reproche directo, pero dice lo mismo."
      }
    ],
    grammar: {
      title: "El doble infinitivo: hätte + infinitivo + modal",
      note: "Con un segundo verbo el modal queda en <b>infinitivo</b> y cierra la frase; el auxiliar es siempre <b>haben</b>. En la subordinada el auxiliar va <b>delante</b> de los dos infinitivos.",
      table: {
        head: ["", "oración principal", "subordinada"],
        rows: [
          ["Konjunktiv II en pasado", "Ich hätte anrufen sollen.", "..., dass ich hätte anrufen sollen."],
          ["Perfekt", "Ich habe nicht kommen können.", "..., dass ich nicht habe kommen können."],
          ["modal solo", "Ich hätte das nicht gekonnt.", "..., dass ich das nicht gekonnt hätte."]
        ]
      },
      examples: [
        { tr: "Debería haberte llamado.", note: "doble infinitivo: anrufen sollen" },
        { tr: "Tendrías que habérmelo dicho.", note: "müssen: una obligación más fuerte que sollen" },
        { tr: "Podríamos haber salido antes.", note: "el auxiliar sigue siendo haben también con losfahren" },
        { tr: "Ayer no pudo venir.", note: "Perfekt: hat + kommen können" },
        { tr: "No debería haberlo hecho.", note: "nicht dürfen: algo que no estaba permitido" },
        { tr: "Sé que debería haber preguntado.", note: "subordinada: hätte delante de los dos infinitivos" }
      ]
    },
    vocab: [
      "el reproche (jemandem Vorwürfe machen: reprochar algo a alguien)",
      "el deber, la obligación",
      "el retraso",
      "la excusa, el pretexto",
      "la intención",
      "el descuido (aus Versehen: sin querer, por error)",
      "reprochar",
      "disculparse, pedir perdón",
      "olvidar",
      "avisar",
      "por desgracia, lamentablemente",
      "en realidad"
    ],
    exercises: [
      {
        q: "¿Cómo se dice «Debería haberte llamado»?",
        opts: [
          "Ich hätte dich anrufen sollen.",
          "Ich hätte dich angerufen gesollt.",
          "Ich wäre dich anrufen sollen."
        ],
        why: "Doble infinitivo: <b>anrufen sollen</b> al final, auxiliar <b>hätte</b>. El participio <i>gesollt</i> no se usa con un segundo verbo, y el auxiliar nunca es <i>wäre</i>."
      },
      {
        q: "¿Cómo se dice «No pude venir» en Perfekt?",
        opts: [
          "Ich habe nicht kommen können.",
          "Ich bin nicht kommen können.",
          "Ich habe nicht kommen gekonnt."
        ],
        why: "En el Perfekt un modal con otro verbo lleva <b>haben</b> y queda en infinitivo: <i>habe ... kommen können</i>, aunque <i>kommen</i> solo llevaría <i>sein</i>."
      },
      {
        q: "¿Qué subordinada es correcta?",
        opts: [
          "Ich weiß, dass ich hätte fragen sollen.",
          "Ich weiß, dass ich fragen sollen hätte.",
          "Ich weiß, dass ich hätte gefragt sollen."
        ],
        why: "Con el doble infinitivo el auxiliar va <b>delante</b> de los dos infinitivos: <i>hätte fragen sollen</i>. La tercera mezcla participio e infinitivo."
      },
      {
        q: "Completa: «Du ___ mir Bescheid sagen sollen.» (deberías haber)",
        hint: "Konjunktiv II de haben, du",
        why: "<b>Hättest</b>: el auxiliar del doble infinitivo es siempre <i>haben</i>, aquí en segunda persona."
      },
      {
        q: "Completa con el modal: «Wir hätten früher losfahren ___.» (podríamos haber salido)",
        hint: "poder, en infinitivo",
        why: "<b>können</b> en infinitivo, al final después de <i>losfahren</i>: es el doble infinitivo."
      },
      {
        q: "Completa la frase.",
        tr: "Debería haberte llamado ayer.",
        why: "<i>Ich hätte dich gestern anrufen sollen</i>: <i>hätte</i> en segunda posición, <i>anrufen sollen</i> al final. También vale <i>müssen</i>, que hace la obligación más fuerte."
      },
      {
        q: "Completa la frase en Perfekt.",
        tr: "Ayer no pudo venir.",
        why: "<i>Er hat gestern nicht kommen können</i>: auxiliar <i>hat</i> y después los dos infinitivos. El Präteritum <i>Er konnte gestern nicht kommen</i> también es correcto, pero aquí el ejercicio pide el Perfekt."
      },
      {
        q: "Traduce: «Deberías habérmelo dicho.»",
        why: "<i>Du hättest es mir sagen sollen</i> (o <i>müssen</i>): <i>hättest</i> en segunda posición, <i>sagen sollen</i> al final. También se puede empezar por <i>Das</i>: <i>Das hättest du mir sagen sollen</i>."
      },
      {
        tr: "Lo siento, debería haberte avisado. Por desgracia olvidé la cita.",
        why: "En <i>Bescheid</i> la <b>sch</b> es [ʃ] y la <b>ei</b> es [aɪ]; en <i>vergessen</i> la <b>v</b> suena [f]; en <i>leider</i> la <b>ei</b> vuelve a ser [aɪ]."
      },
      {
        tr: "En realidad tendría que haber salido antes.",
        why: "En <i>eigentlich</i> la <b>ch</b> final es el sonido suave [ç]; en <i>müssen</i> la <b>ü</b> es breve y redondeada; en <i>losfahren</i> la <b>h</b> alarga la <i>a</i>."
      }
    ]
  },
  "lesson:b2-u01-l3": {
    theme: "Apariencias",
    title: "Como si no supiera nada",
    objectives: [
      "hacer una comparación hipotética con als ob y als wenn",
      "usar als solo con el verbo justo detrás",
      "distinguir un hecho simultáneo de uno anterior",
      "describir una impresión con aussehen, wirken, klingen"
    ],
    theory: [
      {
        h: "als ob, als wenn",
        p: "<strong>als ob</strong> y <strong>als wenn</strong> significan <em>como si</em> e introducen una comparación hipotética: una impresión que puede ser falsa o cuya verdad no se conoce. Normalmente llevan el <strong>Konjunktiv II</strong>, que es la forma que se aprende aquí, con el verbo al final: <em>Er tut so, als ob er nichts wüsste</em> (hace como si no supiera nada). Aparecen a menudo tras <em>so tun</em> (hacer como si), <em>aussehen</em> (parecer, por el aspecto), <em>klingen</em> (sonar), <em>sich benehmen</em> (comportarse)."
      },
      {
        h: "Simultáneo o anterior",
        p: "Si el hecho imaginado es <strong>simultáneo</strong>, se usa el Konjunktiv II de presente: <em>Du siehst aus, als ob du müde wärst</em>. Si es <strong>anterior</strong>, el de pasado: <em>Sie sieht aus, als ob sie nicht geschlafen hätte</em>. Con <strong>als</strong> solo, el verbo conjugado va <strong>justo detrás</strong>, como en una pregunta: <em>Du redest, als wärst du der Chef. Mir ist, als hätte ich ihn schon einmal gesehen.</em>"
      },
      {
        contrast: "También el español pide subjuntivo tras <em>como si</em>: imperfecto para lo simultáneo (<em>como si no supiera</em>) y pluscuamperfecto para lo anterior (<em>como si no hubiera dormido</em>). En alemán es el Konjunktiv II, con la misma división: <em>als ob er nichts wüsste</em>, <em>als ob sie nicht geschlafen hätte</em>. La diferencia está en el orden: tras <em>als ob</em> el verbo va al final; tras <em>als</em> solo, va justo detrás."
      },
      {
        trap: "No mezcles las dos construcciones: <em>als ob er krank wäre</em> o <em>als wäre er krank</em>, pero no <em>als ob wäre er krank</em> ni <em>als er krank wäre</em>. Y no confundas este <em>als</em> con el del comparativo (<em>größer als</em>) ni con el temporal (<em>Als ich jung war</em>): aquí lo sigue directamente un verbo en Konjunktiv II."
      },
      {
        tip: "En la lengua hablada se oye a menudo <em>würde</em> + infinitivo en lugar de la forma propia: <em>Sie tut so, als ob sie mich nicht kennen würde.</em> Con <em>sein</em>, <em>haben</em> y los modales, en cambio, se prefiere la forma propia: <em>als ob er krank wäre</em>."
      }
    ],
    grammar: {
      title: "als ob, als wenn, als + Konjunktiv II",
      note: "<b>als ob / als wenn</b>: verbo al final. <b>als</b>: verbo justo detrás. Presente para un hecho simultáneo, pasado (<b>hätte / wäre</b> + participio) para un hecho anterior.",
      table: {
        head: ["", "simultáneo", "anterior"],
        rows: [
          ["als ob", "..., als ob er nichts wüsste.", "..., als ob er nichts gehört hätte."],
          ["als wenn", "..., als wenn er nichts wüsste.", "..., als wenn er nichts gehört hätte."],
          ["als", "..., als wüsste er nichts.", "..., als hätte er nichts gehört."]
        ]
      },
      examples: [
        { tr: "Hace como si no supiera nada.", note: "so tun, als ob + Konjunktiv II de presente" },
        { tr: "Parece que no hubiera dormido.", note: "hecho anterior: geschlafen hätte" },
        { tr: "Hablas como si fueras el jefe.", note: "als solo: verbo justo detrás" },
        { tr: "Suena como si estuviera lloviendo fuera.", note: "als wenn + würde: forma de la lengua hablada" },
        { tr: "Se comporta como si no hubiera pasado nada.", note: "passieren lleva sein: passiert wäre" },
        { tr: "Tengo la sensación de haberlo visto ya alguna vez.", note: "Mir ist, als ...: una sensación" }
      ]
    },
    vocab: [
      "la impresión",
      "el comportamiento",
      "la apariencia (Der Schein trügt: las apariencias engañan)",
      "la idea, la sospecha (keine Ahnung haben: no tener ni idea)",
      "comportarse",
      "hacer como si, fingir",
      "parecer (por el aspecto), tener aspecto de",
      "parecer, dar una impresión",
      "sonar (Das klingt gut: suena bien)",
      "parecer (+ zu + infinitivo)",
      "raro, extraño",
      "sorprendido"
    ],
    exercises: [
      {
        q: "¿Cómo se dice «Hace como si no supiera nada»?",
        opts: [
          "Er tut so, als ob er nichts wüsste.",
          "Er tut so, als ob er wüsste nichts.",
          "Er tut so, als ob er nichts wissen."
        ],
        why: "Tras <b>als ob</b> el verbo en Konjunktiv II va al final: <i>nichts wüsste</i>. La tercera tiene un infinitivo sin verbo conjugado."
      },
      {
        q: "¿Qué frase es correcta?",
        opts: [
          "Sie sieht aus, als ob sie nicht geschlafen hätte.",
          "Sie sieht aus, als ob hätte sie nicht geschlafen.",
          "Sie sieht aus, als sie nicht geschlafen hätte."
        ],
        why: "Con <b>als ob</b> el verbo va al final; con <b>als</b> solo va justo detrás (<i>als hätte sie nicht geschlafen</i>). La segunda y la tercera intercambian las dos construcciones."
      },
      {
        q: "Completa: «Du redest, als ___ du der Chef.» (fueras)",
        hint: "Konjunktiv II de sein, du; con als el verbo va justo detrás",
        why: "<b>Wärst</b> (o <i>wärest</i>): con <i>als</i> solo el verbo conjugado va justo detrás."
      },
      {
        q: "Completa: «Er benimmt sich, als ob nichts passiert ___.» (hubiera pasado)",
        hint: "Konjunktiv II de sein",
        why: "<b>Wäre</b>: <i>passieren</i> lleva <i>sein</i> en el Perfekt, y tras <i>als ob</i> el auxiliar cierra la oración."
      },
      {
        q: "Completa la frase.",
        tr: "Tengo la sensación de haberlo visto ya alguna vez.",
        why: "<i>Mir ist, als hätte ich ihn schon einmal gesehen</i>: con <i>als</i> el verbo <i>hätte</i> va justo detrás y el participio <i>gesehen</i> al final."
      },
      {
        q: "¿Qué frases son correctas?",
        opts: [
          "Er tut so, als ob er krank wäre.",
          "Er tut so, als wäre er krank.",
          "Er tut so, als wenn er krank wäre.",
          "Er tut so, als ob wäre er krank.",
          "Er tut so, als er krank wäre."
        ],
        why: "Las tres primeras son correctas: <i>als ob</i> y <i>als wenn</i> con el verbo al final, <i>als</i> con el verbo justo detrás. La 4 y la 5 mezclan las dos construcciones."
      },
      {
        q: "Ordena las palabras.",
        tr: "Hace como si no me conociera.",
        why: "<i>Sie tut so, als ob sie mich nicht kennen würde.</i> Tras <i>als ob</i> el verbo conjugado <i>würde</i> cierra la oración, después del infinitivo."
      },
      {
        q: "Traduce: «Se comporta como si no hubiera pasado nada.» (él)",
        why: "<i>Er benimmt sich, als ob nichts passiert wäre</i>, o <i>als wäre nichts passiert</i>. En lugar de <i>passiert</i> vale <i>geschehen</i>, y en lugar de <i>sich benehmen</i> también <i>so tun</i>."
      },
      {
        tr: "Hizo como si no me hubiera visto. Pero tuve la impresión de que me había reconocido perfectamente.",
        why: "En <i>Eindruck</i> la <b>ei</b> es [aɪ] y la <b>u</b> es breve [ʊ]; en <i>erkannt</i> la <b>r</b> tras la <i>e</i> apenas se oye; en <i>genau</i> la <b>au</b> es [aʊ]."
      },
      {
        tr: "Pareces alguien que no ha dormido en toda la noche.",
        why: "En <i>siehst</i> la <b>ie</b> es larga y la <b>h</b> no se pronuncia; en <i>Nacht</i> la <b>ch</b> es el sonido fuerte [x], como la <i>j</i> española; en <i>hättest</i> la <b>ä</b> es breve."
      }
    ]
  },
  "lesson:b2-u01-test": {
    theme: "Evaluación",
    title: "Test: Si lo hubiera sabido",
    objectives: [
      "comprobar el Konjunktiv II en pasado, el doble infinitivo y als ob"
    ],
    theory: [
      {
        p: "Diez preguntas sobre toda la unidad. Se aprueba con el 70%. No vuelvas a mirar las lecciones mientras respondes: si no recuerdas algo, es mejor volver a repasar."
      }
    ],
    exercises: [
      {
        tr: "El Konjunktiv II en pasado de fahren, todas las personas.",
        why: "<i>fahren</i> lleva <i>sein</i> en el Perfekt (<i>ich bin gefahren</i>), así que <i>wäre gefahren</i>. La tabla pide el verbo intransitivo de movimiento; en el sentido de conducir un vehículo, con complemento directo, lo habitual es <i>haben</i> (<i>Ich hätte das Auto gefahren</i>)."
      },
      {
        tr: "El Konjunktiv II en pasado de lernen, todas las personas.",
        why: "<i>lernen</i> lleva <i>haben</i> en el Perfekt: <i>hätte gelernt</i>."
      },
      {
        q: "Completa: «Wenn ich das gewusst ___, wäre ich gekommen.»",
        hint: "Konjunktiv II de haben, ich",
        why: "<b>Hätte</b> al final de la oración con <i>wenn</i>, después del participio <i>gewusst</i>."
      },
      {
        q: "Completa con el modal: «Du hättest mich anrufen ___.» (podrías haber)",
        hint: "poder, en infinitivo",
        why: "<b>können</b>: doble infinitivo, el modal queda en infinitivo al final."
      },
      {
        q: "Completa: «Er tut so, als ob er nichts ___.» (supiera)",
        hint: "Konjunktiv II de wissen",
        why: "<b>Wüsste</b>: Konjunktiv II de <i>wissen</i>, al final tras <i>als ob</i>."
      },
      {
        q: "Completa: «Ich ___ nie weggefahren.» (nunca me habría ido)",
        opts: [
          "wäre",
          "hätte",
          "würde"
        ],
        why: "<i>wegfahren</i> lleva <i>sein</i> en el Perfekt: <b>wäre</b> + <i>weggefahren</i>."
      },
      {
        q: "¿Qué frase expresa un lamento?",
        opts: [
          "Hätte ich bloß mehr gelernt!",
          "Ich habe bloß mehr gelernt.",
          "Ich lerne bloß mehr."
        ],
        why: "Aquí el lamento lo expresan el Konjunktiv II en pasado, el verbo en primera posición y <i>bloß</i> (también valen <i>nur</i>, <i>doch</i> o <i>Wenn ich doch ... hätte!</i>): <b>Hätte ich bloß mehr gelernt!</b> Las otras dos están en indicativo."
      },
      {
        q: "¿Qué frases son correctas?",
        opts: [
          "Wir wären gern länger geblieben.",
          "Ich hätte früher aufstehen sollen.",
          "Sie sieht aus, als wäre sie krank.",
          "Ich hätte früher aufgestanden sollen.",
          "Wir hätten gern länger geblieben."
        ],
        why: "Las tres primeras son correctas. La 4 usa el participio en lugar del infinitivo en el doble infinitivo; la 5 usa <i>hätten</i> con <i>bleiben</i>, que lleva <i>sein</i>."
      },
      {
        tr: "Si hubiéramos salido a tiempo, no habríamos perdido el tren. Debería haberte hecho caso.",
        why: "En <i>rechtzeitig</i> la <b>ch</b> es [ç] y la <b>z</b> es [ts]; en <i>verpasst</i> la <b>v</b> suena [f]; en <i>hören</i> la <b>ö</b> es larga y redondeada."
      },
      {
        tr: "Si lo hubiera sabido antes, habría decidido de otra manera.",
        why: "En <i>bloß</i> la <b>o</b> es larga y la <b>ß</b> es una <i>s</i> sorda; en <i>früher</i> la <b>h</b> no se pronuncia y alarga la <i>ü</i>; en <i>entschieden</i> la <b>sch</b> es [ʃ]."
      }
    ]
  }
});
