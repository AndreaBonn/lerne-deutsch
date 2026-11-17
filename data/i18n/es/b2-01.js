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
  },
  "unit:b2-u02": {
    title: "Condiciones",
    grammarNote: "condicional real, irreal de presente, irreal de pasado y mixta · falls, sofern, es sei denn, vorausgesetzt · condición sin wenn (Hätte ich ..., Sollten Sie ...) · bloß, nur, doch en los deseos"
  },
  "lesson:b2-u02-l1": {
    theme: "Decisiones",
    title: "Real, irreal, mixta",
    objectives: [
      "distinguir la condicional abierta de la irreal",
      "construir la irreal de presente y de pasado",
      "combinar una condición pasada con una consecuencia presente",
      "colocar el verbo en su sitio después de la oración con wenn"
    ],
    theory: [
      {
        h: "Tres tipos de condicional",
        p: "La condicional <strong>abierta</strong> presenta la condición como posible y usa el <strong>indicativo</strong>: <em>Wenn es morgen regnet, bleiben wir zu Hause.</em> La <strong>irreal de presente</strong> imagina algo que ahora no es así, o lo presenta como remoto, y usa el <strong>Konjunktiv II de presente</strong>: <em>Wenn ich mehr Geld hätte, würde ich weniger arbeiten.</em> La <strong>irreal de pasado</strong> habla de algo que no ocurrió y usa el <strong>Konjunktiv II de pasado</strong>: <em>Wenn du mich gefragt hättest, hätte ich dir geholfen.</em>"
      },
      {
        h: "La condicional mixta",
        p: "Condición y consecuencia pueden estar en tiempos distintos. Una condición pasada con una consecuencia presente: <em>Wenn er den Job angenommen hätte, würde er jetzt in München wohnen.</em> El primer verbo va en Konjunktiv II de pasado, el segundo en presente: cada parte toma el tiempo de lo que dice. Después de la oración con <em>wenn</em> la principal empieza por el verbo conjugado: <em>Wenn das Wetter schön ist, <strong>gehen</strong> wir wandern.</em>"
      },
      {
        contrast: "Los tres tipos coinciden con los españoles: <em>si llueve, nos quedamos</em>; <em>si tuviera más dinero, trabajaría menos</em>; <em>si me hubieras preguntado, te habría ayudado</em>. Dos diferencias. En las abiertas referidas al futuro el español usa a menudo el futuro en la principal (<em>nos quedaremos</em>); el alemán usa normalmente el presente en las dos partes. En las irreales el español usa dos modos (subjuntivo tras <em>si</em>, condicional en la consecuencia); el alemán uno solo, el Konjunktiv II, en las dos."
      },
      {
        trap: "Tras una oración con <em>si</em> el español mantiene el orden sujeto-verbo (<em>si llueve, nosotros nos quedamos</em>); en alemán la oración con <em>wenn</em> ocupa el primer lugar y el verbo va justo detrás: <em>Wenn es regnet, bleiben wir</em>, no <em>Wenn es regnet, wir bleiben</em>. Y con <em>haben</em> y <em>sein</em> la oración con <em>wenn</em> suele llevar <em>hätte</em> y <em>wäre</em>: <em>Wenn ich Zeit hätte</em> es mucho más frecuente que <em>Wenn ich Zeit haben würde</em>, que es posible pero pesado."
      },
      {
        tip: "Para elegir el tipo, pregúntate cómo presentas la condición. Abierta, es decir posible: indicativo. Imaginada, remota o contraria a cómo están las cosas ahora: <em>hätte, wäre, würde</em>. Contraria a lo que pasó: <em>hätte</em> o <em>wäre</em> + participio."
      }
    ],
    grammar: {
      title: "La condicional: real, irreal, mixta",
      note: "<b>Abierta</b>: indicativo. <b>Irreal de presente</b>: Konjunktiv II de presente. <b>Irreal de pasado</b>: Konjunktiv II de pasado. <b>Mixta</b>: cada parte toma el tiempo de lo que dice.",
      table: {
        head: ["tipo", "condición (wenn ...)", "consecuencia"],
        rows: [
          ["abierta", "Wenn es regnet,", "bleiben wir zu Hause."],
          ["irreal de presente", "Wenn ich Zeit hätte,", "würde ich kommen."],
          ["irreal de pasado", "Wenn ich Zeit gehabt hätte,", "wäre ich gekommen."],
          ["mixta", "Wenn ich den Job angenommen hätte,", "würde ich jetzt in München wohnen."]
        ]
      },
      examples: [
        { tr: "Si mañana llueve, nos quedamos en casa.", note: "abierta: Präsens también para el futuro" },
        { tr: "Si tuviera más dinero, trabajaría menos.", note: "irreal de presente" },
        { tr: "Si me hubieras preguntado, te habría ayudado.", note: "irreal de pasado" },
        { tr: "Si hubiera aceptado el trabajo, ahora viviría en Múnich.", note: "mixta: condición pasada, consecuencia presente" },
        { tr: "Si hace buen tiempo, vamos de excursión.", note: "abierta: la principal empieza por el verbo" },
        { tr: "Yo que tú, aceptaría la oferta.", note: "irreal: el consejo clásico" }
      ]
    },
    vocab: [
      "la condición",
      "la oferta",
      "la posibilidad",
      "el caso (in diesem Fall: en ese caso)",
      "la consecuencia",
      "el riesgo",
      "aceptar (una oferta)",
      "rechazar",
      "depender (von + dativo: de)",
      "arriesgar",
      "posiblemente, según las circunstancias",
      "en serio"
    ],
    exercises: [
      {
        q: "¿Cómo se dice «Si mañana llueve, nos quedamos en casa»?",
        opts: [
          "Wenn es morgen regnet, bleiben wir zu Hause.",
          "Wenn es morgen regnen würde, blieben wir zu Hause.",
          "Wenn es morgen regnet, wir bleiben zu Hause."
        ],
        why: "Condición abierta: indicativo, y tras la oración con <i>wenn</i> el verbo va justo detrás: <b>bleiben wir</b>. La segunda presenta la lluvia como una hipótesis más remota; la tercera tiene el orden equivocado."
      },
      {
        q: "¿Qué tipo de condicional es «Wenn ich mehr Geld hätte, würde ich weniger arbeiten»?",
        opts: [
          "irreal de presente",
          "abierta",
          "irreal de pasado"
        ],
        why: "<i>hätte</i> y <i>würde arbeiten</i> son Konjunktiv II de presente: ahora no tengo más dinero. Para el pasado haría falta <i>gehabt hätte</i>."
      },
      {
        q: "¿Cómo se dice «Si me hubieras preguntado, te habría ayudado»?",
        opts: [
          "Wenn du mich gefragt hättest, hätte ich dir geholfen.",
          "Wenn du mich fragen würdest, würde ich dir helfen.",
          "Wenn du mich gefragt hast, habe ich dir geholfen."
        ],
        why: "Irreal de pasado: Konjunktiv II de pasado en las dos partes. La segunda frase está en presente, la tercera en indicativo."
      },
      {
        q: "¿Cómo se dice «Si hubiera aceptado el trabajo, ahora viviría en Múnich»?",
        opts: [
          "Wenn er den Job angenommen hätte, würde er jetzt in München wohnen.",
          "Wenn er den Job angenommen hätte, hätte er jetzt in München gewohnt.",
          "Wenn er den Job annehmen würde, hätte er jetzt in München gewohnt."
        ],
        why: "Mixta: la condición es pasada (<b>angenommen hätte</b>), la consecuencia presente (<b>würde ... wohnen</b>), como indica <i>jetzt</i>."
      },
      {
        q: "Completa: «Wenn ich du ___, würde ich das Angebot annehmen.»",
        hint: "Konjunktiv II de sein, ich",
        why: "<b>Wäre</b>: <i>Wenn ich du wäre</i> es la fórmula fija del consejo, con <i>wäre</i> al final de la oración con <i>wenn</i>."
      },
      {
        q: "Completa la frase.",
        tr: "Si hace buen tiempo, vamos de excursión.",
        why: "<i>Wenn das Wetter schön ist, gehen wir wandern</i>: <i>ist</i> al final de la oración con <i>wenn</i>, y la principal empieza por el verbo <i>gehen</i>."
      },
      {
        q: "Completa la frase.",
        tr: "Si me hubieras preguntado, te habría ayudado.",
        why: "<i>Wenn du mich gefragt hättest, hätte ich dir geholfen</i>: Konjunktiv II de pasado en las dos partes."
      },
      {
        q: "Traduce: «Si tuviera más dinero, trabajaría menos.»",
        why: "<i>Wenn ich mehr Geld hätte, würde ich weniger arbeiten</i>. Sin <i>wenn</i>: <i>Hätte ich mehr Geld, würde ich weniger arbeiten</i>."
      },
      {
        tr: "Si hubiera aceptado la oferta, ahora trabajaría en Hamburgo. Pero no todo depende del dinero.",
        why: "En <i>Angebot</i> el acento cae en <b>An</b>; en <i>Hamburg</i> la <b>g</b> final suena [k]; en <i>hängt</i> la <b>ng</b> es un sonido nasal [ŋ], como en <i>tengo</i>."
      },
      {
        tr: "Si mañana llueve, nos quedamos en casa y jugamos a las cartas.",
        why: "En <i>regnet</i> la <b>g</b> se oye delante de la <i>n</i>: <i>reg-net</i>; en <i>bleiben</i> la <b>ei</b> es [aɪ]; en <i>spielen</i> la <b>sp</b> inicial es [ʃp]."
      }
    ]
  },
  "lesson:b2-u02-l2": {
    theme: "Imprevistos",
    title: "Falls, sofern, es sei denn",
    objectives: [
      "expresar una condición con falls, sofern y vorausgesetzt",
      "decir «a menos que» con es sei denn",
      "construir la condición sin wenn, con el verbo en primer lugar",
      "reconocer las fórmulas del registro formal (Sollten Sie ..., im Notfall)"
    ],
    theory: [
      {
        h: "Otras conjunciones para la condición",
        p: "<strong>falls</strong> (<em>en caso de que</em>) presenta la condición como posible pero no segura: <em>Falls du Hilfe brauchst, ruf mich an.</em> <strong>sofern</strong> (<em>siempre que, con tal de que</em>) es más formal: <em>Sofern nichts dazwischenkommt, sind wir um acht da.</em> <strong>vorausgesetzt</strong> (<em>a condición de que</em>) va con <em>dass</em> y el verbo al final, o con una oración principal después de la coma: <em>Wir grillen, vorausgesetzt, das Wetter ist gut.</em> <strong>es sei denn</strong> (<em>a menos que</em>) va seguido de una oración con el verbo en segunda posición: <em>Wir fahren morgen los, es sei denn, es schneit.</em>"
      },
      {
        h: "La condición sin wenn y el registro formal",
        p: "Se puede quitar <em>wenn</em> y poner el verbo conjugado en <strong>primer lugar</strong>: <em>Hätte ich das gewusst, wäre ich gekommen.</em> En cartas, avisos y correos de trabajo se usa a menudo <strong>sollte</strong> en primer lugar: <em>Sollten Sie Fragen haben, wenden Sie sich bitte an uns.</em> El estilo formal prefiere también un sustantivo a la oración: <em>im Notfall</em> (en caso de emergencia), <em>im Falle eines Brandes</em> (en caso de incendio, con genitivo)."
      },
      {
        contrast: "<em>En caso de que</em>, <em>siempre que</em>, <em>a menos que</em> piden en español el subjuntivo. Con las conjunciones alemanas correspondientes la condición abierta se expresa con el <strong>indicativo</strong>: <em>falls es regnet</em>, <em>sofern nichts dazwischenkommt</em>. Para presentarla como más remota se puede usar el Konjunktiv II: <em>Falls du Hilfe brauchen solltest, ...</em> La forma sin <em>wenn</em> se parece al español <em>de haberlo sabido, ...</em>, pero en alemán es normal también al hablar."
      },
      {
        trap: "Con la negación el español y el alemán funcionan igual: <em>a menos que llueva</em> es <em>es sei denn, es regnet</em>, y <em>a menos que no llueva</em> es <em>es sei denn, es regnet nicht</em>. La trampa está en el modo y en el orden: el español pone un subjuntivo, el alemán un indicativo con el verbo en segunda posición, no al final."
      },
      {
        tip: "En la lengua hablada casi siempre basta <em>wenn</em>; <em>falls</em> sirve para subrayar que algo podría no pasar (<em>Falls ich mich verspäte, ...</em>). En un correo formal, <em>Sollten Sie ...</em> suena enseguida profesional."
      }
    ],
    grammar: {
      title: "falls, sofern, es sei denn y la condición sin wenn",
      note: "<b>falls, sofern</b>: verbo al final. <b>es sei denn,</b> + oración con el verbo en segunda posición. <b>Sin wenn</b>: verbo conjugado en primer lugar (<b>Hätte ich ..., Sollten Sie ...</b>).",
      table: {
        head: ["", "ejemplo", "español"],
        rows: [
          ["falls", "Falls du Hilfe brauchst, ruf mich an.", "en caso de que"],
          ["sofern", "Sofern nichts dazwischenkommt, ...", "siempre que, con tal de que"],
          ["es sei denn", "..., es sei denn, es schneit.", "a menos que"],
          ["sin wenn", "Sollten Sie Fragen haben, ...", "si tuviera usted ..."]
        ]
      },
      examples: [
        { tr: "Si necesitas ayuda, llámame.", note: "falls: condición posible, indicativo" },
        { tr: "Salvo imprevistos, estaremos allí a las ocho.", note: "sofern: formal; dazwischenkommen = surgir un imprevisto" },
        { tr: "Salimos mañana, a menos que nieve.", note: "es sei denn: con indicativo y el verbo en segunda posición" },
        { tr: "De haberlo sabido, habría venido.", note: "sin wenn: verbo en primer lugar" },
        { tr: "Si tuviera alguna pregunta, diríjase a nosotros.", note: "Sollten Sie ...: la fórmula de las cartas" },
        { tr: "En caso de emergencia, llame a este número.", note: "im Notfall: un sustantivo en lugar de la oración" }
      ]
    },
    vocab: [
      "la emergencia",
      "la excepción",
      "el requisito",
      "la duda (im Zweifel: en caso de duda)",
      "la consulta, la solicitud",
      "surgir un imprevisto",
      "dirigirse a",
      "avisar, notificar",
      "cancelar, anular",
      "aplazar",
      "en su caso, si es necesario",
      "a condición de que"
    ],
    exercises: [
      {
        q: "¿Cómo se dice «Vamos a pasear, a menos que llueva»?",
        opts: [
          "Wir gehen spazieren, es sei denn, es regnet.",
          "Wir gehen spazieren, es sei denn, es regnet nicht.",
          "Wir gehen spazieren, es sei denn, regnet es."
        ],
        why: "Como en <i>a menos que llueva</i>, aquí no hace falta negación: con <i>nicht</i> la condición sería la contraria. <b>es sei denn</b> va seguido de una oración con el verbo en segunda posición: <i>es regnet</i>."
      },
      {
        q: "¿Qué frase encaja mejor en un correo formal?",
        opts: [
          "Sollten Sie Fragen haben, wenden Sie sich bitte an uns.",
          "Wenn du Fragen hast, frag einfach.",
          "Falls du was wissen willst, sag Bescheid."
        ],
        why: "<b>Sollten Sie ...</b> en primer lugar, con <i>Sie</i> y <i>sich wenden an</i>, es la fórmula de las cartas y los correos de trabajo. Las otras dos tutean y son coloquiales."
      },
      {
        q: "Completa: «___ du Hilfe brauchst, ruf mich an.» (en caso de que, no wenn)",
        hint: "conjunción para una condición posible",
        why: "<b>Falls</b>: presenta la condición como posible pero no segura, y manda el verbo <i>brauchst</i> al final."
      },
      {
        q: "Completa sin wenn: «___ ich das gewusst, wäre ich gekommen.»",
        hint: "verbo en primer lugar, Konjunktiv II de haben",
        why: "<b>Hätte</b>: sin <i>wenn</i> el verbo conjugado abre la oración, y la principal empieza por <i>wäre</i>."
      },
      {
        q: "Completa la frase.",
        tr: "Salimos mañana, a menos que nieve.",
        why: "<i>es sei denn</i> es una fórmula fija: dos palabras después de <i>es</i>, luego coma y una oración con el verbo en segunda posición."
      },
      {
        q: "Relaciona cada expresión con su significado.",
        pairs: [
          "en caso de que",
          "siempre que, con tal de que",
          "a menos que",
          "en su caso, si es necesario"
        ]
      },
      {
        q: "Ordena las palabras.",
        tr: "Si tuviera alguna pregunta, diríjase a nosotros.",
        why: "<i>Sollten Sie Fragen haben, wenden Sie sich bitte an uns.</i> <i>Sollten</i> abre la condición, <i>haben</i> la cierra; la principal empieza por el verbo <i>wenden</i>."
      },
      {
        q: "Traduce sin wenn: «De haberlo sabido, habría venido.»",
        why: "<i>Hätte ich das gewusst, wäre ich gekommen</i>. Se puede añadir <i>dann</i>: <i>Hätte ich das gewusst, dann wäre ich gekommen</i>."
      },
      {
        tr: "Si mañana nevara, aplazaríamos el viaje. Si tienen preguntas, diríjanse a la recepción.",
        why: "En <i>schneien</i> la <b>sch</b> es [ʃ] y la <b>ei</b> es [aɪ]; en <i>verschieben</i> la <b>v</b> suena [f]; en <i>Rezeption</i> la <b>tion</b> suena [tsi̯oːn]."
      },
      {
        tr: "Salvo imprevistos, estaremos allí a las ocho.",
        why: "En <i>dazwischenkommt</i> la <b>z</b> es [ts] y la <b>sch</b> es [ʃ]; en <i>acht</i> la <b>ch</b> tras <i>a</i> es el sonido fuerte [x], como la <i>j</i> española; en <i>Uhr</i> la <b>h</b> alarga la <i>u</i>."
      }
    ]
  },
  "lesson:b2-u02-l3": {
    theme: "Deseos y lamentos",
    title: "Si al menos ...",
    objectives: [
      "expresar un deseo irreal con wenn ... bloß / nur / doch",
      "expresar un lamento con el verbo en primer lugar",
      "hacer más insistente una orden con bloß",
      "entender nur dentro de una condicional completa (Wenn du nur ..., würdest du ...)"
    ],
    theory: [
      {
        h: "Deseos irreales",
        p: "Un deseo presentado como lejano a la realidad de ahora, o un lamento por el pasado, tiene la forma de una condición sin consecuencia, con el <strong>Konjunktiv II</strong> y una partícula: <strong>bloß</strong>, <strong>nur</strong> o <strong>doch</strong>. Con <em>wenn</em> el verbo va al final: <em>Wenn ich bloß mehr Zeit hätte!</em> Sin <em>wenn</em> el verbo va en primer lugar: <em>Hätte ich nur nicht so viel gegessen! Wäre ich doch zu Hause geblieben!</em> Para el presente se usa también <em>würde</em>: <em>Wenn es doch endlich regnen würde!</em>"
      },
      {
        h: "bloß en las órdenes y nur en la condición",
        p: "En una orden, <strong>bloß</strong> la hace más insistente, casi amenazante: <em>Mach das bloß nicht!</em> (ni se te ocurra). Dentro de una condicional completa, es decir con consecuencia, <strong>nur</strong> puede limitar lo que sigue o reforzar el deseo: <em>Wenn du nur ein bisschen Geduld hättest, würdest du es schaffen</em> puede traducirse por «bastaría un poco de paciencia y lo conseguirías»."
      },
      {
        contrast: "El español expresa el mismo deseo con <em>ojalá</em> o <em>si al menos</em>: <em>¡Ojalá tuviera más tiempo! ¡Si al menos me hubiera quedado en casa!</em> El alemán no tiene una palabra como <em>ojalá</em> al principio: usa <em>bloß</em>, <em>nur</em> o <em>doch</em> dentro de la oración, normalmente después del sujeto y los pronombres y antes de la negación: <em>Hätte ich nur nicht so viel gegessen! Wenn du es mir bloß früher gesagt hättest!</em> La posición exacta depende también de lo que se quiere resaltar."
      },
      {
        trap: "Aquí <em>nur</em> y <em>bloß</em> no significan <em>solo</em>: <em>Wenn ich bloß mehr Zeit hätte!</em> no quiere decir «si tuviera solamente más tiempo», sino «si al menos tuviera más tiempo». Y el <em>doch</em> de un deseo no es el de las respuestas (<em>Doch!</em>, que sí): aquí refuerza el deseo."
      },
      {
        tip: "Las tres partículas son casi intercambiables en los deseos; <em>doch</em> refuerza el deseo o el lamento como las otras, y la elección depende del contexto y de la entonación, no del registro: <em>Hätte ich doch ...!</em> es habitual también en la conversación. Para no equivocarte con el orden, escribe primero la oración sin partícula y luego colócala después del sujeto y los pronombres."
      }
    ],
    grammar: {
      title: "Deseos irreales: wenn ... bloß / nur / doch + Konjunktiv II",
      note: "<b>Wenn</b> + partícula + verbo al final, o verbo en <b>primer lugar</b> + partícula. La partícula va dentro de la oración, normalmente después del sujeto y los pronombres y antes de <i>nicht</i>.",
      table: {
        head: ["", "presente", "pasado"],
        rows: [
          ["con wenn", "Wenn ich bloß mehr Zeit hätte!", "Wenn ich bloß früher gekommen wäre!"],
          ["sin wenn", "Hätte ich nur mehr Zeit!", "Wäre ich doch früher gekommen!"],
          ["con würde", "Wenn es doch endlich regnen würde!", "-"]
        ]
      },
      examples: [
        { tr: "¡Ojalá tuviera más tiempo!", note: "wenn + bloß, verbo al final" },
        { tr: "¡Ojalá no hubiera comido tanto!", note: "verbo en primer lugar, nur antes de nicht" },
        { tr: "¡Si al menos me hubiera quedado en casa!", note: "doch: deseo sobre el pasado" },
        { tr: "¡Ojalá lloviera por fin!", note: "würde + infinitivo en presente" },
        { tr: "¡Ni se te ocurra hacerlo!", note: "bloß en una orden: tono amenazante" },
        { tr: "Bastaría un poco de paciencia y lo conseguirías.", note: "nur en una condicional completa: limita lo que sigue" }
      ]
    },
    vocab: [
      "la paciencia",
      "la mala suerte (So ein Pech!: ¡qué mala suerte!)",
      "la casualidad",
      "el destino",
      "la preocupación",
      "el enfado, los problemas",
      "enfadarse",
      "esperar (tener esperanza)",
      "añorar, anhelar (nach + dativo)",
      "por fin",
      "sin falta, a toda costa",
      "en vano"
    ],
    exercises: [
      {
        q: "¿Cómo se dice «¡Ojalá tuviera más tiempo!»?",
        opts: [
          "Wenn ich bloß mehr Zeit hätte!",
          "Wenn ich bloß mehr Zeit habe!",
          "Wenn ich bloß hätte mehr Zeit!"
        ],
        why: "El deseo irreal pide el Konjunktiv II (<b>hätte</b>) al final de la oración con <i>wenn</i>. La segunda está en indicativo; la tercera no manda el verbo al final, como exige <i>wenn</i>."
      },
      {
        q: "¿Qué significa «Mach das bloß nicht!»?",
        opts: [
          "¡Ni se te ocurra hacerlo!",
          "Hazlo solo una vez.",
          "No hagas solo eso."
        ],
        why: "En una orden <b>bloß</b> hace la prohibición insistente, casi amenazante. No significa <i>solo</i>."
      },
      {
        q: "Completa con una partícula: «Hätte ich ___ nicht so viel gegessen!»",
        hint: "partícula del lamento, antes de nicht",
        why: "<b>nur</b>, <b>bloß</b> o <b>doch</b>: las tres refuerzan el lamento y van antes de <i>nicht</i>."
      },
      {
        q: "Completa: «___ ich doch zu Hause geblieben!»",
        hint: "verbo en primer lugar, Konjunktiv II de sein",
        why: "<b>Wäre</b>: <i>bleiben</i> lleva <i>sein</i>, y sin <i>wenn</i> el verbo conjugado abre la oración."
      },
      {
        q: "Completa la frase.",
        tr: "¡Ojalá lloviera por fin!",
        why: "<i>Wenn es doch endlich regnen würde!</i> En presente es frecuente <i>würde</i> + infinitivo; <i>würde</i> cierra la oración con <i>wenn</i>."
      },
      {
        q: "Relaciona cada expresión con su significado.",
        pairs: [
          "¡Si al menos ...!",
          "por fin",
          "sin falta, a toda costa",
          "en vano"
        ]
      },
      {
        q: "Ordena las palabras.",
        tr: "¡Ojalá no hubiera comido tanto!",
        why: "<i>Hätte ich nur nicht so viel gegessen!</i> Verbo en primer lugar, luego el sujeto, la partícula <i>nur</i>, la negación y el participio al final."
      },
      {
        q: "Traduce: «¡Si al menos me lo hubieras dicho antes!»",
        why: "<i>Wenn du es mir bloß früher gesagt hättest!</i> o <i>Hättest du es mir bloß früher gesagt!</i> En lugar de <i>bloß</i> valen <i>nur</i> y <i>doch</i>."
      },
      {
        tr: "¡Ojalá no hubiera esperado tanto! Ahora el piso ya no está. Qué mala suerte.",
        why: "En <i>bloß</i> la <b>o</b> es larga; en <i>gewartet</i> la <b>w</b> es [v], como una <i>f</i> sonora; en <i>Pech</i> la <b>ch</b> tras <i>e</i> es el sonido suave [ç]."
      },
      {
        tr: "¡Ojalá hubiera tenido un poco más de paciencia!",
        why: "En <i>Geduld</i> el acento cae en <b>duld</b>; en <i>bisschen</i> la <b>s</b> y la <b>ch</b> se pronuncian separadas, [sç]; en <i>gehabt</i> la <b>b</b> delante de <i>t</i> suena [p]."
      }
    ]
  },
  "lesson:b2-u02-test": {
    theme: "Evaluación",
    title: "Test: Condiciones",
    objectives: [
      "comprobar los tipos de condicional, falls, es sei denn y la condición sin wenn"
    ],
    theory: [
      {
        p: "Diez preguntas sobre toda la unidad. Se aprueba con el 70%. No vuelvas a mirar las lecciones mientras respondes: si no recuerdas algo, es mejor volver a repasar."
      }
    ],
    exercises: [
      {
        q: "Completa: «Wenn er früher losgefahren ___, hätte er den Zug erreicht.»",
        hint: "Konjunktiv II de sein, er",
        why: "<b>Wäre</b>: <i>losfahren</i> lleva <i>sein</i>, y el Konjunktiv II de pasado cierra la oración con <i>wenn</i>."
      },
      {
        q: "Completa: «Wir kommen, es sei denn, es ___ etwas dazwischen.»",
        hint: "dazwischenkommen, presente de indicativo",
        why: "<b>kommt</b>: tras <i>es sei denn</i> viene una oración principal en indicativo, con el verbo en segunda posición y la partícula <i>dazwischen</i> al final."
      },
      {
        q: "Completa la fórmula formal: «___ Sie Fragen haben, wenden Sie sich an uns.»",
        hint: "verbo modal en primer lugar",
        why: "<b>Sollten</b>: la condición sin <i>wenn</i> de las cartas formales, con <i>haben</i> al final."
      },
      {
        q: "¿Qué frase es una condicional irreal de pasado?",
        opts: [
          "Wenn sie angerufen hätte, wäre ich gekommen.",
          "Wenn sie anruft, komme ich.",
          "Wenn sie anrufen würde, käme ich."
        ],
        why: "Solo la primera tiene el Konjunktiv II de pasado (<i>angerufen hätte</i>, <i>wäre gekommen</i>). La segunda es abierta, la tercera irreal de presente."
      },
      {
        q: "¿Qué frase significa «Vengo mañana, a menos que esté enfermo»?",
        opts: [
          "Ich komme morgen, es sei denn, ich bin krank.",
          "Ich komme morgen, es sei denn, ich bin nicht krank.",
          "Ich komme morgen, es sei denn, ich krank bin."
        ],
        why: "<i>es sei denn</i> + <i>ich bin krank</i>: indicativo y verbo en segunda posición, aunque el español ponga un subjuntivo. Con <i>nicht</i> la condición sería la contraria."
      },
      {
        q: "Completa con una consecuencia referida al presente (condicional mixta): «Hätte ich gestern nicht so viel gearbeitet, ...»",
        opts: [
          "wäre ich jetzt nicht so müde.",
          "wäre ich jetzt nicht so müde gewesen.",
          "bin ich jetzt nicht so müde."
        ],
        why: "Mixta: la condición es pasada, la consecuencia se refiere al presente (<i>jetzt</i>), así que Konjunktiv II de presente: <b>wäre ... müde</b>."
      },
      {
        q: "Completa la frase.",
        tr: "Si tuviera más tiempo, haría deporte más a menudo.",
        why: "<i>Wenn ich mehr Zeit hätte, würde ich öfter Sport machen</i>: irreal de presente, <i>hätte</i> al final y <i>würde</i> al principio de la principal."
      },
      {
        q: "Completa la frase sin wenn.",
        tr: "De haberlo sabido, te habría ayudado.",
        why: "<i>Hätte ich das gewusst, hätte ich dir geholfen</i>: el primer <i>hätte</i> abre la condición, el segundo abre la principal."
      },
      {
        tr: "Si mañana tienes tiempo, pásate. Si hubiera sabido que estabas en la ciudad, te habría llamado ya ayer.",
        why: "En <i>vorbei</i> la <b>v</b> suena [f]; en <i>Stadt</i> la <b>dt</b> final es [t]; en <i>angerufen</i> el acento cae en <b>an</b>."
      },
      {
        tr: "Si no pudiera asistir, le rogamos que cancele con antelación.",
        why: "En <i>verhindert</i> la <b>v</b> suena [f]; en <i>rechtzeitig</i> la <b>ch</b> es [ç] y la <b>z</b> es [ts]; en <i>absagen</i> la <b>b</b> delante de <i>s</i> suena [p]."
      }
    ]
  },
  "unit:b2-u03": {
    title: "Pasiva y tiempo narrativo",
    grammarNote: "pasiva en Perfekt y Plusquamperfekt (ist gebaut worden) · pasiva con modales (muss ausgefüllt werden) · pasiva de estado (ist geschlossen) · Präteritum narrativo · ohne ... zu, statt ... zu, ohne dass, anstatt dass"
  },
  "lesson:b2-u03-l1": {
    theme: "Historia y procesos técnicos",
    title: "Fue construido, ha sido reparado",
    objectives: [
      "formar la pasiva en Perfekt y Plusquamperfekt con worden",
      "usar la pasiva con un verbo modal",
      "distinguir la pasiva de proceso (wird geschlossen) de la de estado (ist geschlossen)",
      "contar la historia de un edificio o de un invento"
    ],
    theory: [
      {
        h: "La pasiva en Perfekt",
        p: "En el Perfekt la pasiva se forma con <strong>sein</strong> + participio II + <strong>worden</strong>: <em>Die Brücke ist letztes Jahr renoviert worden</em> (el puente fue renovado el año pasado). En el Plusquamperfekt <em>sein</em> va en Präteritum: <em>Der Fehler war schon vorher entdeckt worden</em> (el error ya había sido descubierto). En los textos escritos y en la historia se usa también mucho el Präteritum: <em>Das Rathaus wurde im sechzehnten Jahrhundert gebaut.</em>"
      },
      {
        h: "Con modales y la pasiva de estado",
        p: "Con un <strong>verbo modal</strong> se conjuga el modal y la pasiva queda en infinitivo, participio + <em>werden</em>, al final: <em>Das Formular muss bis Freitag ausgefüllt werden. Die Daten konnten nicht gespeichert werden.</em> La <strong>pasiva de estado</strong> (Zustandspassiv) se forma con <strong>sein</strong> + participio y describe el resultado de una acción: <em>Das Geschäft ist sonntags geschlossen.</em> La pasiva de proceso, con <em>werden</em>, describe la acción: <em>Das Geschäft wird um acht geschlossen.</em>"
      },
      {
        contrast: "Aquí el español ayuda: <em>ser</em> y <em>estar</em> se reparten como <em>werden</em> y <em>sein</em>. <em>La tienda es cerrada a las ocho</em> corresponde a <em>wird geschlossen</em>; <em>la tienda está cerrada</em>, a <em>ist geschlossen</em>. Cuidado con los tiempos compuestos: <em>ha sido renovado</em> lleva <em>haber</em> en español, pero en alemán el auxiliar es <em>sein</em>: <em>ist renoviert worden</em>. Y la pasiva refleja (<em>se producen coches</em>) suele corresponder a una pasiva con <em>werden</em>: <em>Autos werden hergestellt</em>."
      },
      {
        trap: "En la pasiva el participio de <em>werden</em> es <strong>worden</strong>, sin <em>ge-</em>: <em>ist gebaut worden</em>, no <em>ist gebaut geworden</em>. <em>Geworden</em> es el participio de <em>werden</em> como verbo pleno, <em>llegar a ser</em>: <em>Er ist Arzt geworden.</em> Y <em>ha sido construido</em> no es <em>ist gebaut gewesen</em>: <em>gewesen</em> no tiene aquí ningún papel."
      },
      {
        tip: "Para elegir entre <em>werden</em> y <em>sein</em>, piensa si en español dirías <em>ser</em> o <em>estar</em>: <em>Die Tür wird geöffnet</em>, la puerta es abierta (alguien la abre); <em>Die Tür ist geöffnet</em>, la puerta está abierta."
      }
    ],
    grammar: {
      title: "La pasiva: Perfekt, modales, pasiva de estado",
      note: "<b>Perfekt</b>: ist + participio + <b>worden</b>. <b>Plusquamperfekt</b>: war + participio + worden. <b>Con un modal</b>: modal + participio + werden. <b>Estado</b>: sein + participio.",
      table: {
        head: ["", "ejemplo", "español"],
        rows: [
          ["Präteritum", "Das Haus wurde 1900 gebaut.", "la casa fue construida"],
          ["Perfekt", "Das Haus ist 1900 gebaut worden.", "la casa fue construida en 1900"],
          ["Plusquamperfekt", "Das Haus war schon gebaut worden.", "la casa ya había sido construida"],
          ["con un modal", "Das Haus muss renoviert werden.", "la casa tiene que ser renovada"],
          ["pasiva de estado", "Das Haus ist renoviert.", "la casa está renovada"]
        ]
      },
      examples: [
        { tr: "El ayuntamiento fue construido en el siglo dieciséis.", note: "Präteritum: típico de los textos históricos" },
        { tr: "El puente fue renovado el año pasado.", note: "Perfekt: ist + participio + worden" },
        { tr: "El error ya había sido descubierto antes.", note: "Plusquamperfekt: war + participio + worden" },
        { tr: "El formulario tiene que rellenarse a más tardar el viernes.", note: "modal + participio + werden" },
        { tr: "No se pudieron guardar los datos.", note: "konnten ... gespeichert werden: modal en Präteritum" },
        { tr: "La tienda está cerrada los domingos.", note: "pasiva de estado: sein + participio" }
      ]
    },
    vocab: [
      "el siglo",
      "el edificio",
      "el puente",
      "la construcción, la obra (como proceso, sin plural; Bauten: los edificios, las obras construidas)",
      "el invento",
      "el procedimiento",
      "erigir, levantar",
      "destruir",
      "inventar",
      "producir, fabricar",
      "descubrir",
      "renovar, reformar"
    ],
    exercises: [
      {
        q: "¿Cómo se dice «El puente ha sido renovado»?",
        opts: [
          "Die Brücke ist renoviert worden.",
          "Die Brücke ist renoviert geworden.",
          "Die Brücke hat renoviert worden."
        ],
        why: "Pasiva en Perfekt: <b>ist</b> + participio + <b>worden</b>. <i>Geworden</i> es el participio de <i>werden</i> como <i>llegar a ser</i>, y el auxiliar es <i>sein</i>, no <i>haben</i>, aunque el español diga <i>ha</i>."
      },
      {
        q: "¿Qué frase describe un estado, «La tienda está cerrada»?",
        opts: [
          "Das Geschäft ist geschlossen.",
          "Das Geschäft wird geschlossen.",
          "Das Geschäft ist geschlossen worden."
        ],
        why: "El estado se expresa con <b>sein</b> + participio, como <i>estar</i>. <i>Wird geschlossen</i> describe la acción de cerrar, <i>ist geschlossen worden</i> un cierre que tuvo lugar en el pasado."
      },
      {
        q: "¿Cómo se dice «El formulario tiene que rellenarse»?",
        opts: [
          "Das Formular muss ausgefüllt werden.",
          "Das Formular muss ausfüllen werden.",
          "Das Formular wird ausgefüllt müssen."
        ],
        why: "Con un modal: modal conjugado (<b>muss</b>) + participio + <b>werden</b> al final."
      },
      {
        q: "Completa la pasiva en Perfekt: «Die Kirche ist 1890 gebaut ___.»",
        hint: "participio de werden en la pasiva",
        why: "<b>worden</b>: en la pasiva en Perfekt el participio de <i>werden</i> pierde el <i>ge-</i>."
      },
      {
        q: "Completa en Plusquamperfekt: «Der Fehler ___ schon vorher entdeckt worden.»",
        hint: "Präteritum de sein",
        why: "<b>war</b>: el Plusquamperfekt de la pasiva lleva <i>sein</i> en Präteritum, luego el participio y <i>worden</i>."
      },
      {
        q: "Completa: «Die Daten konnten nicht gespeichert ___.»",
        hint: "infinitivo de la pasiva",
        why: "<b>werden</b>: tras un modal la pasiva queda en infinitivo, participio + <i>werden</i>."
      },
      {
        q: "Completa la frase.",
        tr: "Aquí se fabrican coches desde 1950.",
        why: "<i>Hier werden seit 1950 Autos hergestellt</i>: la pasiva refleja española se convierte en una pasiva con <i>werden</i>, en plural porque el sujeto es <i>Autos</i>."
      },
      {
        q: "Traduce: «La ciudad fue destruida durante la guerra.»",
        why: "<i>Die Stadt ist im Krieg zerstört worden</i>, o en Präteritum <i>Die Stadt wurde im Krieg zerstört</i>. En lugar de <i>im Krieg</i> vale <i>während des Krieges</i>."
      },
      {
        tr: "El antiguo ayuntamiento fue construido en el siglo dieciséis. En la guerra quedó destruido casi por completo, pero después fue reconstruido fiel al original.",
        why: "En <i>Jahrhundert</i> la <b>J</b> es [j], sin fricción, como la <i>i</i> de <i>bien</i>; en <i>vollständig</i> la <b>v</b> suena [f] y la <b>-ig</b> final [ɪç]; en <i>originalgetreu</i> la <b>eu</b> es [ɔʏ]."
      },
      {
        tr: "El puente fue renovado el año pasado y ahora está abierto de nuevo.",
        why: "En <i>Brücke</i> la <b>ü</b> es breve; en <i>renoviert</i> la <b>v</b> suena [v] porque la palabra viene del latín; en <i>geöffnet</i> la <b>ö</b> es breve y redondeada."
      }
    ]
  },
  "lesson:b2-u03-l2": {
    theme: "Relatos",
    title: "El Präteritum en la narración",
    objectives: [
      "contar una historia en Präteritum",
      "conjugar en Präteritum los verbos fuertes más frecuentes",
      "usar el Plusquamperfekt para lo que había pasado antes",
      "reconocer el estilo de los cuentos (Es war einmal ...)"
    ],
    theory: [
      {
        h: "El tiempo del relato escrito",
        p: "En los cuentos, las novelas, las biografías y las noticias el pasado se cuenta en <strong>Präteritum</strong>: <em>Es war einmal ein armer Müller. Plötzlich klingelte das Telefon. Sie stand auf und ging zum Fenster.</em> Los verbos débiles toman <em>-te</em> (<em>klingelte, erzählte</em>); los fuertes cambian de vocal y en primera y tercera persona no llevan terminación (<em>ich lief, er lief</em>). Lo que había pasado antes se dice en <strong>Plusquamperfekt</strong>: <em>Als sie ankam, war der Zug schon abgefahren.</em>"
      },
      {
        h: "Verbos fuertes que hay que reconocer",
        p: "En los relatos vuelven siempre los mismos verbos fuertes: <em>gehen → ging, kommen → kam, stehen → stand, sitzen → saß, liegen → lag, laufen → lief, rufen → rief, ziehen → zog, treffen → traf, finden → fand, schreiben → schrieb, erschrecken → erschrak</em>. El Perfekt queda en lo que dicen los personajes, porque es el tiempo de la lengua hablada: <em>„Ich habe einen Traum gehabt“, sagte sie.</em>"
      },
      {
        contrast: "El español distingue el pretérito indefinido (<em>se levantó</em>) del imperfecto (<em>estaba sentada</em>); el alemán tiene un solo Präteritum: <em>Sie saß am Fenster</em> (estaba sentada junto a la ventana) y <em>Plötzlich stand sie auf</em> (de repente se levantó). La diferencia la dan el contexto y los adverbios (<em>plötzlich, immer, jeden Tag</em>). Además, el español usa el indefinido también al hablar, mientras que el alemán hablado prefiere el Perfekt, salvo con <em>sein</em>, <em>haben</em> y los modales."
      },
      {
        trap: "Las formas fuertes no se deducen del infinitivo con una regla: hay que aprenderlas junto con el participio (<em>laufen, lief, gelaufen</em>; <em>ziehen, zog, gezogen</em>). Atención a <em>erschrecken</em>: con el sentido de «asustarse» es fuerte (<em>sie erschrak</em>); con el de «asustar a alguien», débil (<em>er erschreckte das Kind</em>)."
      },
      {
        tip: "Leer un cuento de los hermanos Grimm es la forma más rápida de fijar el Präteritum: casi cada frase tiene uno, y las formas fuertes se repiten constantemente."
      }
    ],
    grammar: {
      title: "Präteritum y Plusquamperfekt en la narración",
      note: "<b>Verbos débiles</b>: raíz + <i>-te</i> (klingelte). <b>Verbos fuertes</b>: cambio de vocal, sin terminación con ich y er (lief, zog). <b>Plusquamperfekt</b>: hatte / war + participio, para lo que pasó antes.",
      table: {
        head: ["infinitivo", "Präteritum (er)", "Perfekt (er)"],
        rows: [
          ["klingeln", "klingelte", "hat geklingelt"],
          ["laufen", "lief", "ist gelaufen"],
          ["ziehen", "zog", "hat gezogen"],
          ["treffen", "traf", "hat getroffen"],
          ["erschrecken (asustarse)", "erschrak", "ist erschrocken"]
        ]
      },
      examples: [
        { tr: "Érase una vez un molinero pobre.", note: "Es war einmal: el comienzo de los cuentos" },
        { tr: "De repente sonó el teléfono.", note: "verbo débil: klingelte" },
        { tr: "Se levantó y fue a la ventana.", note: "verbos fuertes: stand, ging" },
        { tr: "Corría tan rápido como podía.", note: "lief: Präteritum de laufen" },
        { tr: "Cuando llegó, el tren ya había salido.", note: "Plusquamperfekt para lo que había pasado antes" },
        { tr: "Nadie sabía quién había escrito la carta.", note: "wusste (verbo mixto) y Plusquamperfekt hatte geschrieben" }
      ]
    },
    vocab: [
      "la historia, el relato",
      "el cuento",
      "el héroe",
      "el relato, la narración",
      "el comienzo",
      "el final",
      "contar, narrar",
      "suceder, ocurrir",
      "asustarse (erschrak, ist erschrocken)",
      "de repente",
      "entonces, en aquella época",
      "finalmente, al final"
    ],
    exercises: [
      {
        tr: "El Präteritum de laufen, todas las personas.",
        why: "<i>lief, liefst, lief, liefen, lieft, liefen</i>: vocal <i>ie</i>, sin terminación en primera y tercera persona."
      },
      {
        tr: "El Präteritum de ziehen, todas las personas.",
        why: "<i>zog, zogst, zog, zogen, zogt, zogen</i>: la vocal pasa a <i>o</i> y la <i>h</i> desaparece."
      },
      {
        tr: "El Präteritum de treffen, todas las personas.",
        why: "<i>traf, trafst, traf, trafen, traft, trafen</i>: la doble <i>f</i> se vuelve simple tras la vocal larga <i>a</i>."
      },
      {
        q: "¿Qué frase usa el tiempo típico del relato escrito?",
        opts: [
          "Sie stand auf und ging zum Fenster.",
          "Sie ist aufgestanden und zum Fenster gegangen.",
          "Sie steht auf und geht zum Fenster."
        ],
        why: "El relato escrito usa el <b>Präteritum</b>: <i>stand auf, ging</i>. El Perfekt es el tiempo de la lengua hablada; el presente se usa a veces para dar viveza, pero no es el tiempo normal del relato."
      },
      {
        q: "¿Cuál es el Präteritum de laufen (er)?",
        opts: [
          "lief",
          "laufte",
          "lauf"
        ],
        why: "<i>laufen</i> es un verbo fuerte: <b>lief</b>. La forma débil <i>laufte</i> no existe."
      },
      {
        q: "Completa en Präteritum: «Plötzlich ___ das Telefon.» (klingeln)",
        hint: "verbo débil, er/es",
        why: "<b>klingelte</b>: verbo débil, raíz <i>klingel-</i> + <i>-te</i>."
      },
      {
        q: "Completa: «Als sie ankam, ___ der Zug schon abgefahren.» (ya había salido)",
        hint: "Präteritum de sein",
        why: "<b>war</b>: el Plusquamperfekt de <i>abfahren</i> se forma con <i>sein</i>, porque es un verbo de movimiento, aunque el español diga <i>había</i>."
      },
      {
        q: "Completa la frase.",
        tr: "Corría tan rápido como podía.",
        why: "<i>Er lief, so schnell er konnte</i>: <i>lief</i> de <i>laufen</i>, <i>konnte</i> de <i>können</i>. En lugar de <i>lief</i> vale <i>rannte</i>, de <i>rennen</i>."
      },
      {
        q: "Traduce usando el Präteritum: «De repente se apagó la luz.»",
        why: "<i>Plötzlich ging das Licht aus</i>: <i>ausgehen</i> en Präteritum es <i>ging ... aus</i>, con la partícula al final. También vale <i>auf einmal</i>."
      },
      {
        tr: "Ya era de noche cuando llegó a casa. La puerta estaba abierta y nadie contestaba. Se asustó y llamó a la policía.",
        why: "En <i>dunkel</i> la <b>u</b> es breve; en <i>erschrak</i> la <b>sch</b> es [ʃ] y la <b>a</b> es larga; en <i>Polizei</i> el acento cae en la última sílaba, <b>zei</b>."
      },
      {
        tr: "Entonces todavía no había internet, y nos escribíamos cartas largas.",
        why: "En <i>damals</i> el acento cae en <b>da</b>; en <i>schrieben</i> la <b>ie</b> es larga; en <i>Briefe</i> la <b>ie</b> vuelve a ser una <i>i</i> larga."
      }
    ]
  },
  "lesson:b2-u03-l3": {
    theme: "Maneras de hacer las cosas",
    title: "Sin preguntar, en lugar de esperar",
    objectives: [
      "usar ohne ... zu y statt ... zu con el mismo sujeto",
      "usar ohne dass y anstatt dass con sujetos distintos",
      "colocar zu en su sitio con los verbos separables",
      "contar cómo hizo alguien una cosa"
    ],
    theory: [
      {
        h: "ohne ... zu, statt ... zu",
        p: "<strong>ohne ... zu</strong> (<em>sin</em> + infinitivo) y <strong>statt / anstatt ... zu</strong> (<em>en lugar de</em> + infinitivo) forman una oración de infinitivo con el <strong>mismo sujeto</strong> que la principal. <em>zu</em> + infinitivo va al final: <em>Er ging, ohne sich zu verabschieden. Statt zu warten, rief sie sofort an. Anstatt zu lernen, sieht er fern.</em> Con un verbo separable, <em>zu</em> va entre la partícula y el verbo: <em>ohne nachzudenken, statt fernzusehen</em>."
      },
      {
        h: "ohne dass, anstatt dass",
        p: "Si la segunda oración tiene un sujeto <strong>distinto</strong>, no se puede usar el infinitivo: hacen falta <strong>ohne dass</strong> o <strong>anstatt dass</strong> con el verbo conjugado al final. <em>Er ging, ohne dass ich es merkte</em> (se fue sin que yo me diera cuenta). <em>Anstatt dass du alles allein machst, helfen wir dir</em> (en lugar de dejar que lo hagas todo tú solo, te ayudamos). La construcción con <em>dass</em> también es posible con el mismo sujeto (<em>Anstatt dass du hilfst, schaust du nur zu</em>), pero ahí la forma con <em>zu</em> resulta más natural."
      },
      {
        contrast: "En español el infinitivo va justo detrás de la preposición (<em>sin despedirse</em>, <em>en lugar de esperar</em>); en alemán <em>zu</em> + infinitivo va al final de la oración, después de todos los complementos: <em>ohne den Vertrag zu lesen</em>, <em>sin leer el contrato</em>. Y <em>sin que</em> pide en español el subjuntivo (<em>sin que yo me diera cuenta</em>); tras <em>ohne dass</em> lo habitual es el indicativo: <em>ohne dass ich es merkte</em> (el Konjunktiv II es posible pero más raro: <em>ohne dass ich es bemerkt hätte</em>)."
      },
      {
        trap: "No olvides <em>zu</em>: <em>ohne sich verabschieden</em> es un error, hay que decir <em>ohne sich zu verabschieden</em>. Y no uses el infinitivo con un sujeto distinto: <em>Er ging, ohne mich es zu merken</em> no tiene sentido; se dice <em>ohne dass ich es merkte</em>."
      },
      {
        tip: "Para comprobarlo, piensa en <em>um ... zu</em>, que ya conoces: la construcción es la misma (<em>um zu lernen, ohne zu lernen, statt zu lernen</em>), solo cambia el significado."
      }
    ],
    grammar: {
      title: "ohne ... zu, statt ... zu, ohne dass, anstatt dass",
      note: "<b>Mismo sujeto</b>: ohne / statt / anstatt + ... + <b>zu</b> + infinitivo al final. <b>Sujeto distinto</b>: ohne dass / anstatt dass + verbo conjugado al final, normalmente en indicativo.",
      table: {
        head: ["", "mismo sujeto", "sujeto distinto"],
        rows: [
          ["sin", "Er ging, ohne sich zu verabschieden.", "Er ging, ohne dass ich es merkte."],
          ["en lugar de", "Statt zu warten, rief sie an.", "Anstatt dass du alles allein machst, helfen wir dir."],
          ["verbo separable", "..., ohne nachzudenken.", "..., ohne dass er nachdachte."]
        ]
      },
      examples: [
        { tr: "Se fue sin despedirse.", note: "ohne ... zu: mismo sujeto" },
        { tr: "En lugar de esperar, llamó enseguida.", note: "statt ... zu al principio, luego el verbo de la principal" },
        { tr: "Firmó sin leer el contrato.", note: "zu + infinitivo después de todos los complementos" },
        { tr: "En lugar de estudiar, ve la tele.", note: "anstatt ... zu; fernsehen es separable" },
        { tr: "Se fue sin que yo me diera cuenta.", note: "ohne dass: sujeto distinto, normalmente indicativo" },
        { tr: "En lugar de ayudar, solo miras.", note: "anstatt dass: posible también con el mismo sujeto" }
      ]
    },
    vocab: [
      "el contrato",
      "el permiso",
      "la despedida",
      "la consideración (Rücksicht nehmen auf: tener consideración con)",
      "la firma",
      "firmar",
      "despedirse",
      "mirar, observar (sin intervenir)",
      "reflexionar (über + acusativo: sobre)",
      "notar, darse cuenta de",
      "simplemente",
      "a escondidas"
    ],
    exercises: [
      {
        q: "¿Cómo se dice «Se fue sin despedirse»?",
        opts: [
          "Er ging, ohne sich zu verabschieden.",
          "Er ging, ohne zu verabschieden sich.",
          "Er ging, ohne sich verabschieden."
        ],
        why: "<b>ohne ... zu</b> + infinitivo al final: <i>ohne sich zu verabschieden</i>. El pronombre reflexivo va antes de <i>zu</i>, y <i>zu</i> no se puede quitar."
      },
      {
        q: "¿Cómo se dice «Se fue sin que yo me diera cuenta»?",
        opts: [
          "Er ging, ohne dass ich es merkte.",
          "Er ging, ohne mich es zu merken.",
          "Er ging, ohne dass ich es merken."
        ],
        why: "Los sujetos son distintos (<i>er</i>, <i>ich</i>), así que hace falta <b>ohne dass</b> con el verbo conjugado al final: <i>merkte</i>."
      },
      {
        q: "Completa: «Sie hat unterschrieben, ohne den Vertrag ___ lesen.»",
        hint: "la partícula del infinitivo",
        why: "<b>zu</b>: <i>ohne ... zu lesen</i>, con <i>zu</i> justo delante del infinitivo al final."
      },
      {
        q: "Completa con nachdenken: «Sie antwortete, ohne ___.»",
        hint: "verbo separable con zu",
        why: "<b>nachzudenken</b>: con un verbo separable <i>zu</i> se coloca entre la partícula <i>nach</i> y el verbo, en una sola palabra."
      },
      {
        q: "Completa: «___ du hilfst, schaust du nur zu.» (en lugar de)",
        hint: "sujeto expreso: dos palabras",
        why: "<b>Anstatt dass</b> (o <i>Statt dass</i>): la oración tiene su propio sujeto (<i>du hilfst</i>), así que no va el infinitivo sino <i>dass</i> con el verbo al final."
      },
      {
        q: "Completa la frase.",
        tr: "En lugar de esperar, llamó enseguida.",
        why: "<i>Statt zu warten, rief sie sofort an</i>: la oración de infinitivo ocupa el primer lugar, así que sigue el verbo <i>rief</i>; la partícula <i>an</i> va al final."
      },
      {
        q: "Ordena las palabras.",
        tr: "En lugar de estudiar, ve la tele todo el día.",
        why: "<i>Anstatt zu lernen, sieht er den ganzen Tag fern.</i> La oración con <i>anstatt</i> va primero, el verbo <i>sieht</i> justo detrás, la partícula <i>fern</i> al final."
      },
      {
        q: "Traduce: «Firmó el contrato sin leerlo.» (él)",
        why: "<i>Er hat den Vertrag unterschrieben, ohne ihn zu lesen</i>. También vale el Präteritum <i>unterschrieb</i>, o <i>ohne ihn gelesen zu haben</i>."
      },
      {
        tr: "Simplemente dejó el trabajo sin hablarlo con nadie. En lugar de preguntar, decidió enseguida.",
        why: "En <i>gekündigt</i> la <b>ü</b> es breve y redondeada; en <i>jemandem</i> la <b>j</b> es [j], sin fricción, como la <i>i</i> de <i>bien</i>; en <i>entschieden</i> la <b>ie</b> es larga."
      },
      {
        tr: "En lugar de esperar, deberíamos llamar enseguida.",
        why: "En <i>anstatt</i> el acento cae en <b>statt</b>; en <i>sollten</i> la <b>o</b> es breve; en <i>sofort</i> el acento cae en <b>fort</b>."
      }
    ]
  },
  "lesson:b2-u03-test": {
    theme: "Evaluación",
    title: "Test: Pasiva y tiempo narrativo",
    objectives: [
      "comprobar la pasiva en Perfekt y con modales, el Präteritum narrativo y ohne ... zu"
    ],
    theory: [
      {
        p: "Diez preguntas sobre toda la unidad. Se aprueba con el 70%. No vuelvas a mirar las lecciones mientras respondes: si no recuerdas algo, es mejor volver a repasar."
      }
    ],
    exercises: [
      {
        tr: "El Präteritum de finden, todas las personas.",
        why: "<i>fand, fandest, fand, fanden, fandet, fanden</i>: tras la <i>d</i> se añade una <i>e</i> delante de <i>-st</i> y <i>-t</i>."
      },
      {
        q: "Completa: «Das Museum ist 1910 eröffnet ___.»",
        hint: "pasiva en Perfekt",
        why: "<b>worden</b>: <i>ist eröffnet worden</i>, pasiva en Perfekt."
      },
      {
        q: "Completa: «Der Antrag muss bis Montag abgegeben ___.»",
        hint: "infinitivo de la pasiva tras un modal",
        why: "<b>werden</b>: modal + participio + <i>werden</i>."
      },
      {
        q: "Completa en Präteritum: «Plötzlich ___ sie ein Geräusch.» (hören)",
        hint: "verbo débil, sie (ella)",
        why: "<b>hörte</b>: verbo débil, <i>hör-</i> + <i>-te</i>."
      },
      {
        q: "Completa: «Er ging, ohne ein Wort ___ sagen.»",
        hint: "la partícula del infinitivo",
        why: "<b>zu</b>: <i>ohne ein Wort zu sagen</i>."
      },
      {
        q: "¿Cómo se dice «El puente ya había sido cerrado»?",
        opts: [
          "Die Brücke war schon gesperrt worden.",
          "Die Brücke ist schon gesperrt geworden.",
          "Die Brücke hatte schon gesperrt worden."
        ],
        why: "El Plusquamperfekt de la pasiva sin modal se forma con <b>war</b> + participio + <b>worden</b>, no con <i>hatte</i>, aunque el español diga <i>había</i>."
      },
      {
        q: "¿Qué frase es correcta?",
        opts: [
          "Statt dass du hilfst, schaust du zu.",
          "Statt zu du hilfst, schaust du zu.",
          "Statt dass du helfen, schaust du zu."
        ],
        why: "Con un sujeto expreso hace falta <b>statt dass</b> + el verbo conjugado al final: <i>du hilfst</i>."
      },
      {
        q: "Traduce: «La carta fue escrita ayer.»",
        why: "<i>Der Brief ist gestern geschrieben worden</i>, o en Präteritum <i>Der Brief wurde gestern geschrieben</i>."
      },
      {
        tr: "El castillo fue construido en el siglo dieciocho. Más tarde fue reformado varias veces, sin que cambiara su carácter.",
        why: "En <i>Schloss</i> la <b>o</b> es breve; en <i>achtzehnten</i> la <b>ch</b> es [x], como la <i>j</i> española, y la <b>z</b> es [ts]; en <i>Charakter</i> la <b>Ch</b> inicial suena [k]."
      },
      {
        tr: "En lugar de discutir mucho tiempo, simplemente resolvimos el problema.",
        why: "En <i>diskutieren</i> el acento cae en <b>tie</b>; en <i>Problem</i> el acento cae en <b>blem</b>; en <i>gelöst</i> la <b>ö</b> es larga."
      }
    ]
  }
});
