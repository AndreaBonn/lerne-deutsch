/* ============================================================
   Learner-language text (es) for data/core/b1-01.js, unit b1-u01.
   Keys point at ids in the neutral layer; arrays merge by index,
   so their length has to match core.
   Checked by scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("es", {
  "unit:b1-u01": {
    title: "Si yo fuera tú",
    grammarNote: "Konjunktiv II en presente (wäre, hätte, würde + infinitivo, modales) · condicional real e hipotético · Ich finde, dass ... y Meiner Meinung nach ... · obwohl y trotzdem"
  },
  "lesson:b1-u01-l1": {
    theme: "Deseos y consejos",
    title: "Sería, tendría, haría",
    objectives: [
      "expresar un deseo o una hipótesis con wäre y hätte",
      "usar würde + infinitivo, que con la mayoría de los verbos sustituye a la forma propia",
      "dar un consejo con An deiner Stelle würde ich ...",
      "hacer propuestas y peticiones con könnte"
    ],
    theory: [
      {
        h: "El Konjunktiv II de sein y haben",
        p: "El <strong>Konjunktiv II</strong> sirve para deseos, hipótesis, peticiones corteses y consejos. En <em>sein</em> y <em>haben</em> parte del Präteritum (<em>war, hatte</em>), añade el <strong>Umlaut</strong> y las terminaciones <em>-e, -st, -e, -en, -t, -en</em> (en <em>haben</em>: <em>-e, -est, -e, -en, -et, -en</em>): <em>ich wäre, du wärst, wir wären</em> y <em>ich hätte, du hättest, wir hätten</em>. <em>Ich wäre gern Ärztin</em> (me gustaría ser médica), <em>Wir hätten gern mehr Zeit</em> (nos gustaría tener más tiempo). No es un tiempo del pasado: habla de lo que se desea, se imagina o es posible ahora o más adelante."
      },
      {
        h: "würde + infinitivo",
        p: "Con casi todos los demás verbos se usa <strong>würde</strong> + <strong>infinitivo al final</strong>: <em>Ich würde gern im Ausland arbeiten. Wir würden gern am Meer wohnen.</em> <em>Würde</em> se conjuga así: <em>ich würde, du würdest, er würde, wir würden, ihr würdet, sie würden</em>. Algunos modales también tienen forma propia: <em>ich könnte</em> (podría), <em>ich müsste</em> (tendría que). Un consejo suele sonar así: <em>An deiner Stelle würde ich umziehen</em> (en tu lugar, me mudaría)."
      },
      {
        contrast: "El español tiene un <em>condicional</em> con forma propia para cada verbo: <em>sería, tendría, iría, haría</em>. El alemán también tiene una forma propia para cada verbo, pero en el uso cotidiano se oye sobre todo con unos pocos verbos muy frecuentes (<em>wäre, hätte, könnte, müsste</em>). En los demás suele coincidir con el Präteritum o suena anticuada, y en su lugar se usa <em>würde</em> + infinitivo: <em>iría</em> es <em>würde gehen</em>, <em>haría</em> es <em>würde machen</em>. Además, el Konjunktiv II es un modo, no un tiempo: <em>Ich wäre</em> corresponde a <em>sería</em> (o a <em>fuera</em>, en <em>si yo fuera</em>) y se refiere al presente o al futuro. Y ojo: el infinitivo de <em>würde</em> va al final de la frase, no pegado al auxiliar como en <em>iría</em> o en <em>me gustaría ir</em>."
      },
      {
        trap: "No confundas <em>würde</em> con <em>wurde</em>: <em>wurde</em> (sin Umlaut) es el Präteritum de <em>werden</em> («se hizo, se volvió»), <em>würde</em> (con Umlaut) es el condicional. Una sola letra cambia el significado, y también se oye: la <em>ü</em> es redondeada. Con <em>sein</em> y <em>haben</em> suelen preferirse <em>wäre</em> y <em>hätte</em> a «würde sein» y «würde haben»: <em>Das wäre schön</em> es lo que más se oye; «Das würde schön sein» es correcto, pero más pesado."
      },
      {
        tip: "Para dar un consejo cortés usa <em>An deiner Stelle würde ich ...</em> en vez de un imperativo: suena más suave. Y para un deseo: <em>Ich hätte gern</em> + complemento directo (<em>Ich hätte gern mehr Zeit</em>), <em>Ich wäre gern</em> + adjetivo o nombre de un papel o profesión (<em>Ich wäre gern glücklich, Ich wäre gern Pilot</em>)."
      }
    ],
    grammar: {
      title: "Konjunktiv II: wäre, hätte, würde",
      note: "<b>wäre</b> y <b>hätte</b> para sein y haben, <b>könnte</b> y <b>müsste</b> para los modales, <b>würde</b> + infinitivo al final para casi todos los demás verbos.",
      table: {
        head: ["verbo", "ich", "du", "wir"],
        rows: [
          ["sein", "wäre", "wärst", "wären"],
          ["haben", "hätte", "hättest", "hätten"],
          ["werden (würde + infinitivo)", "würde", "würdest", "würden"],
          ["können", "könnte", "könntest", "könnten"]
        ]
      },
      examples: [
        { tr: "Me gustaría ser médica.", note: "wäre + gern: un deseo" },
        { tr: "Nos gustaría tener más tiempo.", note: "hätte + gern: un deseo" },
        { tr: "En tu lugar, me mudaría.", note: "An deiner Stelle: würde + infinitivo al final" },
        { tr: "Podría ayudarte mañana.", note: "könnte: forma propia del modal" },
        { tr: "Sería una buena idea.", note: "wäre en lugar de «würde sein»" },
        { tr: "Me gustaría trabajar en el extranjero.", note: "würde + gern + infinitivo al final" }
      ]
    },
    vocab: [
      "el deseo",
      "el consejo",
      "la idea",
      "el extranjero (im Ausland: en el extranjero)",
      "el trabajo de ensueño",
      "el viaje",
      "el mar",
      "la libertad",
      "desear (sich etwas wünschen: desear algo para uno mismo)",
      "soñar",
      "proponer",
      "posible"
    ],
    exercises: [
      {
        tr: "El Konjunktiv II de sein, todas las personas.",
        why: "<i>Wäre, wärst, wäre, wären, wärt, wären</i>: del Präteritum <i>war</i> con Umlaut y las terminaciones del Konjunktiv II. La primera y la tercera persona del singular son iguales."
      },
      {
        tr: "El Konjunktiv II de haben, todas las personas.",
        why: "<i>Hätte, hättest, hätte, hätten, hättet, hätten</i>: del Präteritum <i>hatte</i> con Umlaut."
      },
      {
        tr: "El Konjunktiv II de werden, todas las personas (la forma que se usa como auxiliar).",
        why: "<i>Würde, würdest, würde, würden, würdet, würden</i>: es el auxiliar del condicional, seguido del infinitivo al final."
      },
      {
        q: "¿Cómo se dice «Me gustaría ser médico»?",
        opts: [
          "Ich wäre gern Arzt.",
          "Ich war gern Arzt.",
          "Ich werde gern Arzt."
        ],
        why: "El deseo pide el Konjunktiv II: <b>wäre</b>. <i>War</i> es el Präteritum (era), <i>werde</i> es un futuro o un «llegar a ser»."
      },
      {
        q: "¿Qué frase significa «En tu lugar, me mudaría»?",
        opts: [
          "An deiner Stelle würde ich umziehen.",
          "An deiner Stelle werde ich umziehen.",
          "An deiner Stelle wurde ich umziehen."
        ],
        why: "<b>würde</b> (con Umlaut) es el condicional. <i>Werde</i> es el futuro («me mudaré»), <i>wurde</i> es el Präteritum de <i>werden</i>, que no da el significado correcto."
      },
      {
        q: "Completa con el Konjunktiv II de haben: «Ich ___ gern ein Haus am Meer.» (me gustaría tener)",
        hint: "Konjunktiv II de haben, ich",
        why: "<b>Hätte</b>: <i>Ich hätte gern ein Haus am Meer</i> expresa un deseo, con Umlaut en la <i>ä</i>."
      },
      {
        q: "Completa con el Konjunktiv II de sein: «Das ___ eine gute Idee.» (sería)",
        hint: "Konjunktiv II de sein",
        why: "<b>Wäre</b>: con <i>sein</i> se prefiere la forma propia a «würde sein»."
      },
      {
        q: "Completa la frase (en el primer hueco usa würde).",
        tr: "Me gustaría trabajar en el extranjero.",
        why: "<i>Ich würde gern im Ausland arbeiten</i>: <i>würde</i> en segunda posición, el infinitivo <i>arbeiten</i> al final."
      },
      {
        q: "Traduce: «En tu lugar iría al médico.» (usa würde)",
        why: "<i>An deiner Stelle würde ich zum Arzt gehen</i>: <i>würde</i> en segunda posición, <i>gehen</i> al final. También se puede decir <i>Ich würde an deiner Stelle zum Arzt gehen</i>."
      },
      {
        tr: "Me gustaría ser piloto y trabajar en el extranjero. Sería mi trabajo de ensueño.",
        why: "En <i>würde</i> la <b>ü</b> es redondeada: di una <i>i</i> con los labios adelantados como para una <i>u</i>. En <i>Ausland</i> la <b>au</b> se lee [aʊ], como en «causa»; en <i>Traumberuf</i> la <b>au</b> es el mismo diptongo."
      },
      {
        tr: "En tu lugar haría un viaje. Sería una buena idea.",
        why: "En <i>Reise</i> la <b>ei</b> se lee [aɪ], como «ai» en «aire»; en <i>wäre</i> la <b>w</b> se lee [v], con los dientes sobre el labio inferior, no como una <i>b</i> española; <i>Stelle</i> empieza por <b>st</b> = [ʃt]."
      }
    ]
  },
  "lesson:b1-u01-l2": {
    theme: "Si pudiera ...",
    title: "Si tuviera tiempo, ...",
    objectives: [
      "formular una hipótesis en presente con wenn + Konjunktiv II",
      "distinguir una condición real (wenn + presente) de una hipotética",
      "poner el verbo al final en la frase con wenn y en primera posición en la principal que sigue",
      "dar un consejo con Wenn ich du wäre, ..."
    ],
    theory: [
      {
        h: "Condición real y condición hipotética",
        p: "<strong>Wenn</strong> significa «si». Si la condición es <strong>posible</strong> o habitual, el alemán usa el <strong>presente</strong> en las dos frases: <em>Wenn es morgen regnet, bleiben wir zu Hause. Wenn du Hunger hast, kannst du etwas essen.</em> Si la condición es <strong>hipotética</strong>, improbable o contraria a los hechos (no es verdad ahora, o es algo que se imagina), se usa el <strong>Konjunktiv II</strong>: <em>Wenn ich Zeit hätte, würde ich mehr reisen. Wenn ich reich wäre, würde ich ein Haus kaufen.</em>"
      },
      {
        h: "Dónde va el verbo",
        p: "Después de <em>wenn</em> el verbo conjugado va <strong>al final</strong> de la subordinada, y una coma la separa de la principal. Si la frase con <em>wenn</em> va primero, la principal <strong>empieza con el verbo</strong>: <em>Wenn ich Zeit hätte, würde ich mehr reisen.</em> Si va después, el orden de la principal no cambia: <em>Ich würde mehr reisen, wenn ich Zeit hätte.</em> Las dos construcciones pueden aparecer en cualquiera de las dos frases: <em>Wenn ich weniger arbeiten würde, hätte ich mehr Zeit</em> es tan correcto como <em>Wenn ich Zeit hätte, würde ich mehr reisen</em>. Con <em>sein</em>, <em>haben</em> y los modales se prefiere en general la forma propia (<em>wäre, hätte, könnte</em>), con los demás verbos a menudo <em>würde</em> + infinitivo."
      },
      {
        h: "Wenn ich du wäre, ...",
        p: "La fórmula <strong>Wenn ich du wäre, würde ich ...</strong> equivale a «si yo fuera tú» y sirve para dar un consejo: <em>Wenn ich du wäre, würde ich ihn anrufen.</em> Es la versión más larga de <em>An deiner Stelle würde ich ...</em>, vista en la lección anterior."
      },
      {
        contrast: "En español la hipótesis irreal lleva imperfecto de subjuntivo en la frase con <em>si</em> y condicional en la principal: <em>Si tuviera tiempo, viajaría más</em>. El alemán hace lo mismo con su Konjunktiv II: <em>wenn ich Zeit hätte</em>, <em>würde ich reisen</em>. Dos diferencias. Primero, en alemán la forma de subjuntivo o <em>würde</em> puede aparecer en las dos frases, y en la lengua hablada se oye también <em>würde</em> dentro de la frase con <em>wenn</em> (<em>Wenn ich weniger arbeiten würde, ...</em>), algo que el español estándar no admite («si trabajaría menos» se considera un error). Segundo, <em>wenn</em> lleva el verbo al final, mientras que en español <em>si</em> no altera el orden. La condición real funciona como en español, con el presente: <em>Si llueve mañana, nos quedamos en casa</em> / <em>Wenn es morgen regnet, bleiben wir zu Hause</em>."
      },
      {
        trap: "No se escribe «Wenn ich hätte Zeit»: después de <em>wenn</em> el verbo conjugado va al final, <em>Wenn ich Zeit hätte</em>. Y la principal que sigue a la subordinada no empieza con el sujeto: «Wenn ich Zeit hätte, ich würde reisen» está mal, lo correcto es <em>..., würde ich reisen</em>. No confundas <em>wenn</em> (si, cuando) con <em>wann</em> (cuándo, en preguntas): <em>Wann kommst du?</em> pregunta por el momento."
      },
      {
        tip: "Antes de escribir una frase con <em>wenn</em>, pregúntate cómo presentas la condición. ¿Como real o abierta? La construcción básica es el presente en las dos frases. ¿Como hipotética, improbable o contraria a los hechos? Entonces Konjunktiv II en las dos frases (incluso para algo posible: <em>Wenn es morgen regnen würde, würden wir zu Hause bleiben</em>): <em>hätte, wäre, könnte</em> con <em>haben</em>, <em>sein</em> y los modales, <em>würde</em> + infinitivo con casi todos los demás verbos."
      }
    ],
    grammar: {
      title: "Wenn + presente o Konjunktiv II",
      note: "<b>Real</b>: <i>wenn</i> + presente, presente. <b>Hipotética</b>: Konjunktiv II en las dos frases (<i>hätte, wäre, könnte</i>, o <i>würde</i> + infinitivo). El verbo de <i>wenn</i> va al final, y la principal que sigue empieza con el verbo.",
      table: {
        head: ["tipo", "ejemplo", "nota"],
        rows: [
          ["real", "Wenn es morgen regnet, bleiben wir zu Hause.", "presente en las dos frases"],
          ["hipotética", "Wenn ich Zeit hätte, würde ich mehr reisen.", "Konjunktiv II + würde"],
          ["hipotética con sein", "Wenn ich reich wäre, würde ich ein Haus kaufen.", "wäre, no «würde sein»"],
          ["consejo", "Wenn ich du wäre, würde ich ihn anrufen.", "en tu lugar"]
        ]
      },
      examples: [
        { tr: "Si tuviera tiempo, viajaría más.", note: "wenn-Satz primero: la principal empieza con würde" },
        { tr: "Si fuera rico, compraría una casa.", note: "wäre después de wenn" },
        { tr: "Haría más deporte si tuviera más tiempo.", note: "wenn-Satz después: el orden de la principal no cambia" },
        { tr: "Si tienes hambre, puedes comer algo.", note: "condición real: presente" },
        { tr: "Si mañana llueve, nos quedamos en casa.", note: "condición real: presente, el verbo de wenn al final" },
        { tr: "Si yo fuera tú, lo llamaría.", note: "la fórmula del consejo" }
      ]
    },
    vocab: [
      "la ganancia, el premio",
      "ganar",
      "rico",
      "el dinero",
      "ahorrar",
      "ganar (dinero), merecer",
      "las vacaciones",
      "la casa",
      "el jardín",
      "la vuelta al mundo",
      "la lengua, el idioma",
      "la profesión, el oficio"
    ],
    exercises: [
      {
        q: "¿Cómo se dice «Si tuviera tiempo, viajaría más»?",
        opts: [
          "Wenn ich Zeit hätte, würde ich mehr reisen.",
          "Wenn ich Zeit hatte, würde ich mehr reisen.",
          "Wenn ich hätte Zeit, würde ich mehr reisen."
        ],
        why: "Condición hipotética: <b>hätte</b> después de <i>wenn</i>, con el verbo de <i>wenn</i> al final, y <i>würde ich</i> en la principal, con el verbo en primera posición."
      },
      {
        q: "¿Qué frase habla de una situación posible y real, no de una hipótesis?",
        opts: [
          "Wenn ich reich wäre, würde ich ein Haus kaufen.",
          "Wenn es morgen regnet, bleiben wir zu Hause.",
          "Wenn ich du wäre, würde ich ihn anrufen."
        ],
        why: "La segunda lleva el presente en las dos frases: la lluvia de mañana es posible. Las otras dos llevan el Konjunktiv II: son hipótesis."
      },
      {
        q: "Completa: «Wenn ich mehr Geld hätte, ___ ich ein Auto kaufen.»",
        opts: [
          "würde",
          "wurde",
          "werde"
        ],
        why: "<b>würde</b> es el condicional, y va después de la coma, con el verbo en primera posición en la principal. <i>Wurde</i> es el Präteritum, <i>werde</i> el presente."
      },
      {
        q: "¿Qué frases son correctas?",
        opts: [
          "Wenn ich reich wäre, würde ich weniger arbeiten.",
          "Ich würde weniger arbeiten, wenn ich reich wäre.",
          "Wenn ich wäre reich, würde ich weniger arbeiten.",
          "Wenn ich reich wäre, ich würde weniger arbeiten.",
          "Ich würde weniger arbeiten, wenn wäre ich reich."
        ],
        why: "Las dos primeras están bien: <i>wenn</i> manda <i>wäre</i> al final, y la principal que sigue empieza con el verbo. La 3 y la 5 ponen el verbo de <i>wenn</i> en el lugar equivocado, la 4 no hace empezar la principal con el verbo."
      },
      {
        q: "Completa con el presente de regnen: «Wenn es morgen ___, bleiben wir zu Hause.»",
        hint: "presente, 3.ª persona del singular",
        why: "<b>Regnet</b>: condición real, por tanto presente. El verbo de <i>wenn</i> va al final."
      },
      {
        q: "Completa con el Konjunktiv II de haben: «Wenn ich viel Geld ___, würde ich um die Welt reisen.»",
        hint: "Konjunktiv II de haben, ich",
        why: "<b>Hätte</b> al final de la frase con <i>wenn</i>. La principal usa <i>würde</i> + infinitivo."
      },
      {
        q: "Completa la frase (en el segundo hueco usa würde).",
        tr: "Si tuviera más tiempo, iría más a menudo al cine.",
        why: "<i>Wenn ich mehr Zeit hätte, würde ich öfter ins Kino gehen</i>: <i>hätte</i> al final de la frase con <i>wenn</i>, <i>würde</i> en primera posición en la principal, <i>gehen</i> al final."
      },
      {
        q: "Traduce: «Si fuera rico, compraría una casa.»",
        why: "<i>Wenn ich reich wäre, würde ich ein Haus kaufen</i>. También valen <i>mir ein Haus kaufen</i> y el orden inverso: <i>Ich würde ein Haus kaufen, wenn ich reich wäre.</i>"
      },
      {
        tr: "Si tuviera más dinero, daría la vuelta al mundo. Si fuera rico, compraría también una casa con jardín.",
        why: "En <i>Weltreise</i> la <b>w</b> se lee [v] y la <b>ei</b> es [aɪ]; en <i>Garten</i> la <b>g</b> es [g], como en «gato»; en <i>reich</i> la <b>ch</b> después de <b>ei</b> se lee [ç], un sonido suave y soplado, parecido a una <i>j</i> muy suave."
      },
      {
        tr: "Si tuviera más tiempo, aprendería un idioma nuevo.",
        why: "En <i>Sprache</i> la <b>sp</b> inicial se lee [ʃp] y la <b>ch</b> después de <b>a</b> es [x], como la <i>j</i> de «caja»; en <i>lernen</i> la <b>l</b> es clara."
      }
    ]
  },
  "lesson:b1-u01-l3": {
    theme: "Opiniones",
    title: "Creo que ... En mi opinión ...",
    objectives: [
      "expresar una opinión con Ich finde, dass ... y Ich glaube, dass ...",
      "poner el verbo al final después de dass",
      "dar la propia opinión con Meiner Meinung nach ...",
      "distinguir dass (conjunción) de das (artículo o pronombre)"
    ],
    theory: [
      {
        h: "Ich finde, dass ...",
        p: "Para decir lo que se piensa se usan verbos como <strong>finden, glauben, denken</strong> y la expresión <strong>der Meinung sein</strong>, seguidos de la conjunción <strong>dass</strong>. Después de <em>dass</em> el verbo conjugado va <strong>al final</strong>, y la coma es obligatoria: <em>Ich finde, dass das eine gute Idee ist. Ich bin der Meinung, dass wir mehr Zeit brauchen.</em> Se puede negar el verbo de opinión: <em>Ich glaube nicht, dass das funktioniert.</em>"
      },
      {
        h: "Sin dass",
        p: "En la lengua hablada se puede omitir <em>dass</em>: entonces la segunda frase es una principal normal, con el verbo en <strong>segunda posición</strong>: <em>Ich denke, er hat recht. Ich finde, das ist zu teuer.</em> Con <em>dass</em> el verbo va al final (<em>dass er recht hat</em>), sin <em>dass</em> se queda en segunda posición (<em>er hat recht</em>)."
      },
      {
        h: "Meiner Meinung nach ...",
        p: "<strong>Meiner Meinung nach</strong> (en mi opinión, a mi parecer) ocupa la primera posición, así que el verbo viene justo después: <em>Meiner Meinung nach ist das zu teuer.</em> <em>Meiner Meinung</em> es un dativo (<em>die Meinung</em>), y <em>nach</em> va detrás. Si empiezas por el sujeto, <em>meiner Meinung nach</em> puede ir en medio: <em>Das ist meiner Meinung nach zu teuer.</em>"
      },
      {
        contrast: "En español <em>que</em> casi nunca se puede omitir (<em>creo que es una buena idea</em>; «creo es una buena idea» no se dice), mientras que en alemán <em>dass</em> se puede quitar (<em>Ich denke, das ist richtig</em>), pero cambia el orden del verbo: al final con <em>dass</em> (<em>dass das richtig ist</em>), en segunda posición sin él (<em>das ist richtig</em>). Otra diferencia: después de <em>creo que</em> en negativo el español usa el subjuntivo (<em>no creo que funcione</em>), pero el alemán usa el <strong>indicativo</strong>: <em>Ich glaube nicht, dass das funktioniert</em>. Y en alemán la coma antes de <em>dass</em> es obligatoria, también donde en español <em>que</em> no la lleva."
      },
      {
        trap: "No se escribe «Ich finde, dass das ist gut»: después de <em>dass</em> el verbo va al final, <em>dass das gut ist</em>. No confundas <strong>dass</strong> (conjunción, dos <em>s</em>) con <strong>das</strong> (artículo o pronombre, una <em>s</em>): <em>Ich glaube, dass das Buch gut ist</em>. En la frase <em>Ich glaube, das ist gut</em> la palabra <em>das</em> es un pronombre. El español usa <em>que</em> para la conjunción, así que no hay nada que te avise de la diferencia: hay que fijarse."
      },
      {
        tip: "Si no estás seguro de si escribir <em>das</em> o <em>dass</em>, prueba a sustituirlo por <em>dieses</em> o <em>welches</em>: si funciona, es <em>das</em>. Si no, es <em>dass</em>."
      }
    ],
    grammar: {
      title: "dass y la opinión",
      note: "<b>Ich finde, dass ...</b> con el verbo al final. Sin <i>dass</i>, el verbo se queda en segunda posición. <b>Meiner Meinung nach</b> en primera posición, luego el verbo.",
      table: {
        head: ["construcción", "ejemplo", "nota"],
        rows: [
          ["Ich finde, dass ...", "Ich finde, dass das eine gute Idee ist.", "verbo al final"],
          ["sin dass", "Ich denke, er hat recht.", "verbo en segunda posición"],
          ["Meiner Meinung nach", "Meiner Meinung nach ist das zu teuer.", "el verbo justo después"],
          ["der Meinung sein", "Ich bin der Meinung, dass wir mehr Zeit brauchen.", "la coma es obligatoria"]
        ]
      },
      examples: [
        { tr: "Creo que es una buena idea.", note: "dass: verbo al final, indicativo" },
        { tr: "Creo que tiene razón.", note: "dass: recht hat, el verbo conjugado al final" },
        { tr: "Pienso que tiene razón.", note: "sin dass: verbo en segunda posición" },
        { tr: "En mi opinión es demasiado caro.", note: "Meiner Meinung nach en primera posición, luego ist" },
        { tr: "Soy de la opinión de que necesitamos más tiempo.", note: "der Meinung sein + dass" },
        { tr: "No creo que funcione.", note: "nicht delante de dass: Ich glaube nicht, dass ..." }
      ]
    },
    vocab: [
      "la opinión",
      "la propuesta",
      "el tema",
      "el motivo, la razón",
      "la ventaja",
      "la desventaja",
      "creer, pensar",
      "encontrar, opinar",
      "estar de acuerdo (con dativo)",
      "tener razón",
      "de acuerdo, conforme",
      "correcto"
    ],
    exercises: [
      {
        q: "¿Qué frase es correcta?",
        opts: [
          "Ich finde, dass das eine gute Idee ist.",
          "Ich finde, dass das ist eine gute Idee.",
          "Ich finde, dass ist das eine gute Idee."
        ],
        why: "Después de <b>dass</b> el verbo conjugado va al final: <i>dass das eine gute Idee ist</i>."
      },
      {
        q: "¿Qué frase está bien escrita?",
        opts: [
          "Ich glaube, dass er recht hat.",
          "Ich glaube, das er recht hat.",
          "Ich glaube, dass er hat recht."
        ],
        why: "La conjunción lleva dos <i>s</i>: <b>dass</b>, y manda el verbo conjugado al final (<i>recht hat</i>)."
      },
      {
        q: "Completa: «Ich finde, ___ wir mehr Zeit brauchen.»",
        hint: "conjunción",
        why: "<b>dass</b> introduce lo que se piensa, y <i>brauchen</i> va al final."
      },
      {
        q: "Completa: «Meiner ___ nach ist das zu teuer.»",
        hint: "opinión",
        why: "<b>Meinung</b>: <i>meiner Meinung nach</i> es la fórmula para «en mi opinión»."
      },
      {
        q: "Une cada expresión con su significado.",
        pairs: [
          "creo que ...",
          "en mi opinión ...",
          "estoy de acuerdo",
          "tienes razón"
        ]
      },
      {
        q: "Completa la frase (usa dass y el verbo funktionieren).",
        tr: "No creo que funcione.",
        why: "<i>Ich glaube nicht, dass das funktioniert</i>: <i>dass</i> manda <i>funktioniert</i> al final. También vale <i>klappt</i>."
      },
      {
        q: "Ordena las palabras.",
        tr: "Creo que es una buena idea.",
        why: "<i>Ich finde, dass das eine gute Idee ist.</i> La coma va después de <i>finde</i>, y el verbo <i>ist</i> cierra la subordinada."
      },
      {
        q: "Traduce: «En mi opinión esto es demasiado caro.» (usa meiner Meinung nach)",
        why: "<i>Meiner Meinung nach ist das zu teuer</i>: el verbo va justo después de la expresión. También vale <i>Das ist meiner Meinung nach zu teuer</i>."
      },
      {
        tr: "Creo que es una buena idea. En mi opinión necesitamos más tiempo, pero no creo que sea posible.",
        why: "En <i>Meinung</i> la <b>ei</b> se lee [aɪ]; en <i>möglich</i> la <b>ö</b> es redondeada (una <i>e</i> con los labios adelantados) y la <b>ch</b> final es [ç]; en <i>brauchen</i> la <b>au</b> es [aʊ] y la <b>ch</b> [x]."
      },
      {
        tr: "Soy de la opinión de que necesitamos más tiempo.",
        why: "En <i>Meinung</i> la <b>ei</b> se lee [aɪ]; en <i>dass</i> la <b>ss</b> es una <b>s</b> sorda, como en «casa»; en <i>mehr</i> la <b>h</b> no se pronuncia, solo alarga la vocal."
      }
    ]
  },
  "lesson:b1-u01-l4": {
    theme: "Contrastes",
    title: "Aunque ..., aun así",
    objectives: [
      "expresar una concesión con obwohl y el verbo al final",
      "usar trotzdem con el verbo justo después",
      "distinguir obwohl de weil",
      "decir que alguien sigue adelante a pesar de las dificultades"
    ],
    theory: [
      {
        h: "obwohl: la subordinada",
        p: "<strong>Obwohl</strong> (aunque, a pesar de que) introduce una circunstancia que debería impedir algo, y no lo impide: <em>Obwohl es regnet, gehen wir spazieren.</em> Funciona como <em>weil</em> y <em>dass</em>: el verbo conjugado va <strong>al final</strong>, y la coma separa las dos frases. Si la frase con <em>obwohl</em> va primero, la principal empieza con el verbo: <em>Obwohl er müde war, hat er noch gearbeitet.</em> Si va después: <em>Wir gehen spazieren, obwohl es regnet.</em>"
      },
      {
        h: "trotzdem: la principal",
        p: "<strong>Trotzdem</strong> (aun así, de todos modos, sin embargo) dice lo mismo con dos frases separadas. No cambia el orden de las palabras: puede ocupar la <strong>primera posición</strong>, y entonces el verbo viene justo después: <em>Es regnet. Trotzdem gehen wir spazieren.</em> O va dentro de la frase: <em>Wir gehen trotzdem spazieren.</em> Con <em>aber</em> también se puede decir <em>Sie ist krank, aber sie geht trotzdem zur Arbeit.</em>"
      },
      {
        contrast: "El español <em>aunque</em> sirve para un hecho real (<em>aunque llueve, salimos</em>) y para una posibilidad (<em>aunque llueva, saldremos</em>), y la diferencia la marca el modo del verbo. El alemán <em>obwohl</em> se usa para un hecho real, como en estos ejemplos, y lleva normalmente el <strong>indicativo</strong>: <em>obwohl es regnet</em>. Además el verbo va al final, igual que después de <em>weil</em>: <em>weil es regnet</em> dice por qué, <em>obwohl es regnet</em> dice «a pesar de eso». Para <em>aun así</em> o <em>de todos modos</em> el alemán tiene <em>trotzdem</em>; ojo con el orden: cuando <em>trotzdem</em> abre la frase, el verbo viene justo después y el sujeto pasa detrás (<em>Trotzdem gehen wir</em>), cosa que en español no ocurre (<em>aun así vamos</em>)."
      },
      {
        trap: "Después de una frase con <em>obwohl</em> la principal empieza con el verbo: <em>Obwohl es regnet, gehen wir spazieren</em>, no «..., wir gehen». Y después de <em>trotzdem</em> en primera posición el verbo viene enseguida: <em>trotzdem gehen wir</em>, no «trotzdem wir gehen». <em>Obwohl</em> y <em>trotzdem</em> también pueden ir juntos, y entonces la concesión se refuerza: <em>Obwohl es regnet, gehen wir trotzdem spazieren</em>, con <em>trotzdem</em> después del verbo. No confundas <em>obwohl</em> con <em>weil</em>: <em>weil</em> introduce una causa, <em>obwohl</em> un hecho a pesar del cual ocurre lo que dice la principal."
      },
      {
        tip: "Si la concesión está en la misma frase, usa <em>obwohl</em> con el verbo al final. Si son dos frases separadas, usa <em>trotzdem</em> y pon el verbo justo después, en segunda posición."
      }
    ],
    grammar: {
      title: "obwohl y trotzdem",
      note: "<b>obwohl</b> = aunque, verbo al final. <b>trotzdem</b> = aun así, en primera posición el verbo sigue enseguida. Dos formas de decir lo mismo.",
      table: {
        head: ["palabra", "ejemplo", "nota"],
        rows: [
          ["obwohl", "Obwohl es regnet, gehen wir spazieren.", "verbo al final, luego la principal empieza con el verbo"],
          ["obwohl después", "Wir gehen spazieren, obwohl es regnet.", "el orden de la principal no cambia"],
          ["trotzdem", "Es regnet. Trotzdem gehen wir spazieren.", "verbo justo después de trotzdem"],
          ["aber ... trotzdem", "Sie ist krank, aber sie geht trotzdem zur Arbeit.", "trotzdem después del verbo"]
        ]
      },
      examples: [
        { tr: "Aunque llueve, vamos a dar un paseo.", note: "obwohl: verbo al final, luego gehen en primera posición" },
        { tr: "Vamos a dar un paseo, aunque llueve.", note: "obwohl después de la principal" },
        { tr: "Llueve. Aun así, vamos a dar un paseo.", note: "trotzdem: el verbo justo después" },
        { tr: "Aunque estaba cansado, siguió trabajando.", note: "obwohl: war al final" },
        { tr: "Estaba cansado, pero aun así siguió trabajando.", note: "trotzdem en primera posición" },
        { tr: "Está enferma, pero va al trabajo de todos modos.", note: "aber + trotzdem dentro de la frase" }
      ]
    },
    vocab: [
      "aunque, a pesar de que",
      "aun así, de todos modos",
      "la lluvia",
      "el paseo",
      "el tiempo (atmosférico)",
      "agotador, duro",
      "difícil",
      "la dificultad",
      "el error",
      "rendirse, abandonar",
      "seguir adelante, continuar",
      "el éxito"
    ],
    exercises: [
      {
        q: "¿Qué frase es correcta?",
        opts: [
          "Obwohl es regnet, gehen wir spazieren.",
          "Obwohl es regnet, wir gehen spazieren.",
          "Obwohl es regnet, trotzdem wir gehen spazieren."
        ],
        why: "Después de la frase con <b>obwohl</b> la principal empieza con el verbo: <i>gehen wir</i>. La tercera tiene el verbo en el lugar equivocado: después de <i>trotzdem</i> en primera posición debe venir enseguida el verbo."
      },
      {
        q: "¿Qué frase es correcta?",
        opts: [
          "Es regnet, trotzdem wir gehen spazieren.",
          "Es regnet, trotzdem gehen wir spazieren.",
          "Es regnet, trotzdem wir spazieren gehen."
        ],
        why: "<b>Trotzdem</b> en primera posición pide el verbo justo después: <i>trotzdem gehen wir</i>. No manda el verbo al final, a diferencia de <i>obwohl</i>."
      },
      {
        q: "Completa con trotzdem: «Sie ist krank, ___ geht sie zur Arbeit.»",
        hint: "aun así",
        why: "<b>Trotzdem</b> en primera posición, y el verbo <i>geht</i> justo después."
      },
      {
        q: "Completa la frase (usa obwohl).",
        tr: "Aunque estaba cansado, siguió trabajando.",
        why: "<i>Obwohl er müde war, hat er noch gearbeitet</i>: <i>war</i> al final de la subordinada, luego <i>hat</i> en primera posición en la principal."
      },
      {
        q: "Une cada palabra con su significado.",
        pairs: [
          "aunque (verbo al final)",
          "aun así, de todos modos (verbo justo después)",
          "porque (verbo al final)",
          "pero (no cambia el orden)"
        ]
      },
      {
        q: "Ordena las palabras.",
        tr: "Aunque estaba cansado, siguió trabajando.",
        why: "<i>Obwohl er müde war, hat er noch gearbeitet.</i> La coma va después de <i>war</i>, luego la principal empieza con <i>hat</i>."
      },
      {
        q: "Traduce: «Aunque llueve, vamos a dar un paseo.» (usa obwohl)",
        why: "<i>Obwohl es regnet, gehen wir spazieren</i>. También vale el orden inverso (<i>Wir gehen spazieren, obwohl es regnet</i>) y <i>einen Spaziergang machen</i>."
      },
      {
        q: "Un amigo te ve salir con mal tiempo.",
        setting: "Hace mal tiempo y estás enfermo, pero sales igualmente.",
        lines: [
          { tr: "¿Mañana te quedas en casa? Hace mal tiempo." },
          { tr: "Responde: no, vas a dar un paseo aunque haga mal tiempo.", answerTr: "No, aunque hace mal tiempo, voy a dar un paseo." },
          { tr: "¡Pero estás enfermo!" },
          { tr: "Responde: sí, vas de todos modos.", answerTr: "Sí, voy de todos modos." },
          { tr: "Además estás cansado. ¿De verdad quieres salir?" },
          { tr: "Responde que sales de todos modos, pero solo un rato.", answerTr: "Sí, salgo de todos modos, pero solo un rato." }
        ]
      },
      {
        tr: "Aunque hace mal tiempo, vamos a dar un paseo. Es agotador, pero seguimos adelante de todos modos.",
        why: "En <i>Wetter</i> la <b>w</b> se lee [v]; en <i>anstrengend</i> la <b>ng</b> es un sonido nasal [ŋ], como la <i>n</i> de «banco» sin una <i>g</i> aparte; en <i>weiter</i> la <b>ei</b> es [aɪ]."
      },
      {
        tr: "Aunque estoy cansado, no me rindo.",
        why: "En <i>müde</i> la <b>ü</b> es redondeada; en <i>Obwohl</i> la <b>w</b> se lee [v]; en <i>nicht</i> la <b>ch</b> después de <b>i</b> se lee [ç]."
      }
    ]
  },
  "lesson:b1-u01-test": {
    theme: "Repaso",
    title: "Test: Si yo fuera tú",
    objectives: [
      "comprobar el Konjunktiv II, el condicional, dass y la opinión, obwohl y trotzdem"
    ],
    theory: [
      {
        p: "Diez preguntas sobre toda la unidad. Se supera con el 70 %. No vuelvas a mirar las lecciones mientras respondes: si no recuerdas algo, es mejor volver a repasar."
      }
    ],
    exercises: [
      {
        tr: "El Konjunktiv II de können, todas las personas.",
        why: "<i>Könnte, könntest, könnte, könnten, könntet, könnten</i>: del Präteritum <i>konnte</i> con Umlaut."
      },
      {
        tr: "El Konjunktiv II de müssen, todas las personas.",
        why: "<i>Müsste, müsstest, müsste, müssten, müsstet, müssten</i>: del Präteritum <i>musste</i> con Umlaut."
      },
      {
        q: "Completa con la forma adecuada del Konjunktiv II de werden: «An deiner Stelle ___ ich umziehen.»",
        hint: "condicional, ich",
        why: "<b>Würde</b>: <i>An deiner Stelle würde ich umziehen</i>. El infinitivo <i>umziehen</i> va al final."
      },
      {
        q: "Completa con el Konjunktiv II de sein: «Wenn ich du ___, würde ich ihn anrufen.»",
        hint: "Konjunktiv II de sein, ich",
        why: "<b>Wäre</b> al final de la frase con <i>wenn</i>, y la principal empieza con <i>würde</i>."
      },
      {
        q: "Completa: «Ich glaube nicht, ___ er recht hat.»",
        hint: "conjunción",
        why: "<b>dass</b> manda el verbo <i>hat</i> al final."
      },
      {
        q: "Completa con la conjunción correcta: «___ es regnet, gehen wir spazieren.» (aunque)",
        hint: "verbo al final",
        why: "<b>Obwohl</b> es la conjunción que manda el verbo al final e introduce una concesión."
      },
      {
        q: "¿Qué frase es correcta?",
        opts: [
          "Es ist spät, trotzdem arbeite ich noch.",
          "Es ist spät, trotzdem ich arbeite noch.",
          "Es ist spät, obwohl arbeite ich noch."
        ],
        why: "<b>Trotzdem</b> en primera posición pide el verbo justo después: <i>trotzdem arbeite ich</i>. La tercera usa <i>obwohl</i> con el verbo en el lugar equivocado."
      },
      {
        q: "¿Qué frases son correctas?",
        opts: [
          "Wenn ich mehr Zeit hätte, würde ich Sport machen.",
          "Ich finde, dass das zu teuer ist.",
          "Obwohl ich müde bin, gehe ich zur Arbeit.",
          "Wenn ich hätte mehr Zeit, würde ich Sport machen.",
          "Ich finde, dass das ist zu teuer."
        ],
        why: "Las tres primeras están bien: el verbo conjugado va al final después de <i>wenn</i>, <i>dass</i> y <i>obwohl</i>, y la principal que sigue empieza con el verbo. La 4 y la 5 dejan el verbo demasiado pronto."
      },
      {
        tr: "Si yo fuera tú, no dejaría el trabajo. Creo que el puesto es bueno, aunque es agotador.",
        why: "En <i>kündigen</i> la <b>ü</b> es redondeada; en <i>Stelle</i> la <b>st</b> inicial es [ʃt]; en <i>anstrengend</i> la <b>ng</b> es un sonido nasal [ŋ]."
      },
      {
        tr: "Si tuviera más dinero, compraría una casa, aunque es cara.",
        why: "En <i>würde</i> la <b>ü</b> es redondeada; en <i>teuer</i> la <b>eu</b> se lee [ɔʏ], empieza con una o abierta y termina con una vocal parecida a i, manteniendo los labios redondeados; en <i>kaufen</i> la <b>au</b> se lee [aʊ]."
      }
    ]
  },
  "unit:b1-u02": {
    title: "¿En qué piensas?",
    grammarNote: "verbos con preposición fija · darauf, worauf · oraciones de relativo (nominativo, acusativo, dativo, con preposición) · jemand, niemand, jeder"
  },
  "lesson:b1-u02-l1": {
    theme: "Intereses y preocupaciones",
    title: "Te espero",
    objectives: [
      "usar los verbos con preposición fija más frecuentes (warten auf, denken an, sich interessieren für)",
      "elegir el caso correcto después de la preposición",
      "hablar de miedos, sueños e intereses",
      "no traducir la preposición del español"
    ],
    theory: [
      {
        h: "El verbo se aprende con su preposición",
        p: "Muchos verbos alemanes piden una <strong>preposición fija</strong> y un <strong>caso fijo</strong> después de ella: <em>warten auf + Akk</em>, <em>denken an + Akk</em>, <em>sich interessieren für + Akk</em>, <em>sich kümmern um + Akk</em>. Otros piden el dativo: <em>Angst haben vor + Dat</em>, <em>träumen von + Dat</em>, <em>teilnehmen an + Dat</em>. El artículo o el pronombre que sigue a la preposición toma ese caso: <em>Ich warte auf den Bus</em> (acusativo), <em>Sie hat Angst vor dem Test</em> (dativo), <em>Ich warte auf dich</em> (pronombre en acusativo)."
      },
      {
        h: "El mismo <em>an</em>, dos casos",
        p: "La preposición <em>an</em> rige acusativo con <em>denken</em> (<em>Ich denke an meine Familie</em>) y dativo con <em>teilnehmen</em> (<em>Ich nehme an dem Kurs teil</em>). El caso no se deduce del significado: se aprende junto con el verbo."
      },
      {
        contrast: "El español también tiene verbos con preposición, pero casi nunca coincide con la alemana. <em>Esperar a alguien</em> no lleva preposición propia (solo la <em>a</em> personal), mientras que <em>warten</em> exige <em>auf</em>. <em>Pensar en</em> es <em>denken an</em>, <em>interesarse por</em> es <em>sich interessieren für</em>, <em>tener miedo de</em> es <em>Angst haben vor</em>, <em>soñar con</em> es <em>träumen von</em>, <em>ocuparse de</em> es <em>sich kümmern um</em> y <em>participar en</em> es <em>teilnehmen an</em>. Además, en español los sustantivos no cambian de forma según el caso (solo algunos pronombres: <em>te</em>, <em>ti</em>), y en alemán la preposición decide el caso del artículo y del pronombre que viene después: <em>auf dich</em>, <em>vor dem Test</em>."
      },
      {
        trap: "No elijas la preposición traduciendo del español: <em>Ich warte dich</em> o <em>Ich denke in dich</em> no son alemán correcto. Después del verbo va la preposición que ese verbo quiere, y luego el caso que ella rige: <em>Ich warte auf dich</em>, <em>Ich denke an dich</em>. Con un verbo reflexivo se mantiene el pronombre reflexivo: <em>Sie interessiert sich für Musik</em>."
      },
      {
        tip: "Cuando aprendas un verbo nuevo de este tipo, anótalo siempre con la preposición y el caso: <em>warten auf + Akk</em>, <em>Angst haben vor + Dat</em>. Es como aprender el artículo junto con el sustantivo."
      }
    ],
    grammar: {
      title: "Verbos con preposición fija",
      note: "El verbo exige una <b>preposición</b> y un <b>caso</b> concretos: <b>warten auf + Akk</b>, <b>Angst haben vor + Dat</b>. Se aprenden juntos.",
      table: {
        head: ["verbo + preposición", "caso", "ejemplo"],
        rows: [
          ["warten auf", "acusativo", "Ich warte auf dich."],
          ["denken an", "acusativo", "Er denkt oft an seine Familie."],
          ["sich interessieren für", "acusativo", "Sie interessiert sich für Musik."],
          ["sich kümmern um", "acusativo", "Wir kümmern uns um die Kinder."],
          ["Angst haben vor", "dativo", "Sie hat Angst vor dem Test."],
          ["träumen von", "dativo", "Er träumt von einem Haus am Meer."],
          ["teilnehmen an", "dativo", "Ich nehme an dem Kurs teil."]
        ]
      },
      examples: [
        { tr: "Te espero.", note: "warten auf + acusativo: en español no hay preposición" },
        { tr: "Piensa a menudo en su familia.", note: "denken an + acusativo" },
        { tr: "Se interesa por la música.", note: "sich interessieren für + acusativo, con el pronombre reflexivo" },
        { tr: "Nos ocupamos de los niños.", note: "sich kümmern um + acusativo" },
        { tr: "Tiene miedo del examen.", note: "Angst haben vor + dativo: dem Test" },
        { tr: "Sueña con una casa junto al mar.", note: "träumen von + dativo: von einem Haus" }
      ]
    },
    vocab: [
      "esperar (warten auf + acus.)",
      "pensar en (denken an + acus.)",
      "interesarse por (sich interessieren für + acus.)",
      "ocuparse de (sich kümmern um + acus.)",
      "participar en (teilnehmen an + dat.)",
      "soñar con (träumen von + dat.)",
      "el miedo",
      "el curso",
      "el examen",
      "la preocupación",
      "el interés",
      "el sueño"
    ],
    exercises: [
      {
        q: "¿Qué frase significa «Espero el autobús»?",
        opts: ["Ich warte auf den Bus.", "Ich warte den Bus.", "Ich warte für den Bus."],
        why: "<b>Warten auf + acusativo</b>: <i>auf den Bus</i>. En español <i>esperar</i> no lleva preposición, en alemán sí."
      },
      {
        q: "¿Qué frase es correcta?",
        opts: [
          "Sie hat Angst vor dem Test.",
          "Sie hat Angst von dem Test.",
          "Sie hat Angst auf den Test."
        ],
        why: "<b>Angst haben vor + dativo</b>: <i>vor dem Test</i>. Las otras dos usan una preposición que este verbo no pide."
      },
      {
        q: "Completa: «Ich warte ___ dich.»",
        hint: "esperar",
        why: "<b>Auf</b>: <i>warten auf</i>, y el pronombre <i>dich</i> está en acusativo."
      },
      {
        q: "Completa: «Er denkt oft ___ seine Familie.»",
        hint: "pensar en",
        why: "<b>An</b>: <i>denken an + acusativo</i>."
      },
      {
        q: "Completa: «Wir kümmern uns ___ die Kinder.»",
        hint: "ocuparse de",
        why: "<b>Um</b>: <i>sich kümmern um + acusativo</i>."
      },
      {
        q: "Completa la frase.",
        tr: "Se interesa por la música.",
        why: "<i>Sie interessiert sich für Musik</i>: <i>sich interessieren für + acusativo</i>, con el pronombre reflexivo <i>sich</i>."
      },
      {
        q: "Ordena las palabras.",
        tr: "Pienso a menudo en ti.",
        why: "<i>Ich denke oft an dich.</i> También vale <i>Oft denke ich an dich</i>, con el verbo en segunda posición."
      },
      {
        q: "Traduce: «Espero a Anna.» (usa warten)",
        why: "<i>Ich warte auf Anna</i>: la preposición <i>auf</i> es obligatoria también delante de un nombre de persona."
      },
      {
        tr: "Te espero. Pienso a menudo en nuestras vacaciones. Ella se interesa por la música y se ocupa de los niños.",
        why: "En <i>warte</i> la <b>w</b> se pronuncia [v]; en <i>interessiert</i> la <b>ie</b> es larga [iː]; <i>für</i> tiene [yː] y <i>kümmert</i> tiene [ʏ]; en <i>dich</i> la <b>ch</b> es [ç]."
      },
      {
        tr: "Te espero y pienso en el examen.",
        why: "En <i>Prüfung</i> la <b>ü</b> es [yː] y la <b>ng</b> es el sonido nasal [ŋ]; en <i>auf</i> la <b>au</b> es [aʊ]; en <i>dich</i> la <b>ch</b> es [ç]."
      }
    ]
  },
  "lesson:b1-u02-l2": {
    theme: "Ilusiones y molestias",
    title: "Tengo muchas ganas. ¿De qué?",
    objectives: [
      "sustituir verbo + preposición + cosa por darauf, daran, davon",
      "preguntar con worauf, woran, worüber",
      "preguntar por una persona con la preposición + wen",
      "distinguir sich freuen auf y sich freuen über"
    ],
    theory: [
      {
        h: "darauf, daran, darüber: la preposición sin el sustantivo",
        p: "Cuando el verbo con preposición se refiere a una <strong>cosa</strong> o a una situación ya conocida, la preposición se une a <strong>da-</strong>: <em>Ich warte auf den Bus. Ich warte darauf.</em> <em>Ich denke an die Prüfung. Ich denke daran.</em> Delante de una vocal se intercala una <strong>r</strong>: <em>darauf, daran, darüber</em>. Delante de una consonante: <em>davon, dafür, davor</em>."
      },
      {
        h: "worauf, woran, worüber: la pregunta",
        p: "Para preguntar por una cosa se usa <strong>wo-</strong> (<strong>wor-</strong> delante de una vocal): <em>Worauf wartest du? Woran denkst du? Worüber ärgerst du dich? Wovor hast du Angst?</em> Para una <strong>persona</strong> se usa la preposición con <em>wen</em> (acusativo) o <em>wem</em> (dativo): <em>Auf wen wartest du? An wen denkst du? Mit wem sprichst du?</em> Y la respuesta lleva la preposición con el pronombre: <em>Ich warte auf ihn.</em>"
      },
      {
        h: "sich freuen auf o über",
        p: "<em>Sich freuen</em> rige acusativo con dos preposiciones. <strong>Auf</strong> expresa la ilusión ante algo esperado: <em>Ich freue mich auf das Wochenende.</em> <strong>Über</strong> presenta un hecho o una noticia como motivo de alegría, aunque se refiera al futuro (<em>Ich freue mich darüber, dass du morgen kommst</em>): <em>Ich freue mich über das Geschenk.</em> Con <em>sich ärgern</em> se usa <em>über</em>: <em>Er ärgert sich über den Lärm.</em>"
      },
      {
        contrast: "En español la preposición se queda con un pronombre: <em>pienso en ello</em>, <em>hablo de eso</em>, <em>cuento con ello</em>. En alemán, para una cosa, la preposición se une a <em>da-</em>: <em>pienso en ello</em> es <em>Ich denke daran</em>, <em>hablo de eso</em> es <em>Ich spreche davon</em>. En las preguntas el español pone la preposición delante (<em>¿En qué piensas?</em>, <em>¿A quién esperas?</em>) y el alemán hace lo mismo con las personas (<em>An wen denkst du? Auf wen wartest du?</em>), pero con las cosas funde <em>wo-</em> y la preposición en una sola palabra: <em>Woran denkst du?</em>. Fíjate también en los verbos de emoción: el español usa <em>alegrarse de</em> o <em>por</em> y <em>tener ganas de</em>, mientras que el alemán reparte el sentido entre <em>auf</em> (expresa anticipación) y <em>über</em> (presenta algo como motivo de alegría, también si se refiere al futuro)."
      },
      {
        trap: "Las formas con <em>da-</em> y <em>wo-</em> son para <strong>cosas</strong>. Para una persona se usa la preposición con el pronombre: <em>Ich warte auf ihn</em>, <em>Ich denke an sie</em>, y en la pregunta <em>Auf wen wartest du?</em>. Recuerda también la <strong>r</strong> delante de vocal: <em>darauf</em> y <em>worauf</em>, no «daauf» ni «woauf». Y no trates <em>sich freuen auf</em> y <em>sich freuen über</em> como si fueran lo mismo: <em>Tengo muchas ganas de que llegue el fin de semana</em> es <em>auf</em>, <em>Me alegro del regalo</em> es <em>über</em>."
      },
      {
        tip: "La forma con <em>da-</em> también puede anunciar una oración que viene después: <em>Ich freue mich darauf, dass du kommst.</em> Aquí <em>darauf</em> remite a la oración con <em>dass</em>."
      }
    ],
    grammar: {
      title: "darauf, daran, worauf, woran",
      note: "Para una <b>cosa</b>: <b>da-</b> (<b>dar-</b> delante de vocal) para responder, <b>wo-</b> (<b>wor-</b>) para preguntar. Para una <b>persona</b>: preposición + pronombre o <b>wen/wem</b>.",
      table: {
        head: ["verbo + preposición", "respuesta (cosa)", "pregunta (cosa)", "pregunta (persona)"],
        rows: [
          ["warten auf", "darauf", "worauf", "auf wen"],
          ["denken an", "daran", "woran", "an wen"],
          ["sich ärgern über", "darüber", "worüber", "über wen"],
          ["sich freuen auf", "darauf", "worauf", "auf wen"],
          ["Angst haben vor", "davor", "wovor", "vor wem"]
        ]
      },
      examples: [
        { tr: "Tengo muchas ganas de que llegue el fin de semana.", note: "sich freuen auf + acusativo: algo que todavía tiene que venir" },
        { tr: "Tengo muchas ganas.", note: "darauf en lugar de auf das Wochenende" },
        { tr: "¿Qué te hace ilusión?", note: "worauf: wo + r + auf" },
        { tr: "Se enfada por el ruido.", note: "sich ärgern über + acusativo" },
        { tr: "¿Por qué cosa te enfadas?", note: "worüber: wo + r + über" },
        { tr: "Tengo ganas de verlo. ¿A quién esperas?", note: "para una persona: auf ihn, auf wen" }
      ]
    },
    vocab: [
      "tener muchas ganas, ilusionarse (sich freuen auf + acus.: algo que viene)",
      "alegrarse de (sich freuen über + acus.: un hecho o una noticia que alegra)",
      "enfadarse por (sich ärgern über + acus.)",
      "acordarse de (sich erinnern an + acus.)",
      "hablar de (sprechen über + acus.)",
      "el fin de semana",
      "el regalo",
      "el ruido",
      "la noticia",
      "el encuentro",
      "la fiesta",
      "la sorpresa"
    ],
    exercises: [
      {
        q: "¿Cómo preguntas «¿En qué piensas?»",
        opts: ["Woran denkst du?", "Wonach denkst du?", "Wohin denkst du?"],
        why: "<i>Denken an</i> se convierte en <b>woran</b> (wo + r + an). Las otras opciones no significan «¿en qué piensas?»: <i>wonach</i> remite a la preposición <i>nach</i>, y <i>Wohin denkst du?</i> es un giro que expresa sorpresa o protesta («¿pero qué te crees?»)."
      },
      {
        q: "Sustituye con una forma con da-: «Ich warte auf den Bus. Ich warte ___.»",
        opts: ["darauf", "daran", "davon"],
        why: "<b>Darauf</b>: <i>warten auf</i> + <i>da-</i> + <i>r</i> delante de la vocal de <i>auf</i>."
      },
      {
        q: "Pregunta: «¿A quién esperas?»",
        opts: ["Auf wen wartest du?", "Worauf wartest du?", "Wen wartest du?"],
        why: "Para una <b>persona</b> se usa la preposición con <i>wen</i>: <i>Auf wen wartest du?</i> <i>Worauf</i> se refiere a una cosa, y <i>Wen wartest du</i> no lleva preposición."
      },
      {
        q: "Completa la pregunta: «___ freust du dich? - Auf das Wochenende.»",
        hint: "pregunta con auf, por una cosa",
        why: "<b>Worauf</b>: <i>wo</i> + <i>r</i> + <i>auf</i>. La respuesta repite el mismo <i>auf</i>: <i>Auf das Wochenende</i>."
      },
      {
        q: "Completa: «Er denkt oft an den Urlaub. Er denkt oft ___.»",
        hint: "da- + an",
        why: "<b>Daran</b>: <i>da</i> + <i>r</i> + <i>an</i>. Delante de la vocal de <i>an</i> se intercala la <b>r</b>, como en <i>darauf</i>."
      },
      {
        q: "Completa la frase.",
        tr: "¿Por qué cosa te enfadas? Me enfado por el ruido.",
        why: "<i>Worüber ärgerst du dich? Ich ärgere mich über den Lärm.</i> <i>Sich ärgern über + acusativo</i>, y en la pregunta <i>wor-</i> delante de la vocal."
      },
      {
        q: "Une cada frase con su significado.",
        pairs: ["¿Qué esperas?", "Pienso en eso.", "¿A quién esperas?", "Pienso en él."]
      },
      {
        q: "Traduce: «Pienso en ello a menudo.» (usa denken)",
        why: "<i>Ich denke oft daran</i>: <i>en ello</i> se convierte en <i>daran</i>. También vale <i>Oft denke ich daran</i>."
      },
      {
        tr: "¿Qué te hace ilusión? Tengo muchas ganas de que llegue el fin de semana. ¿Y por qué cosa te enfadaste? Por el ruido. Me enfado a menudo por eso.",
        why: "En <i>freust</i> la <b>eu</b> es [ɔʏ]; en <i>Wochenende</i> la <b>w</b> es [v] y la <b>ch</b> es [x]; <i>über</i> y <i>darüber</i> tienen [yː]."
      },
      {
        tr: "Tengo muchas ganas de que llegue el fin de semana y ya pienso en ello.",
        why: "En <i>freue</i> la <b>eu</b> es [ɔʏ]; en <i>mich</i> la <b>ch</b> es [ç], en <i>Wochenende</i> es [x]; en <i>schon</i> la <b>sch</b> es [ʃ]."
      }
    ]
  },
  "lesson:b1-u02-l3": {
    theme: "Describir personas y cosas",
    title: "El libro que leí",
    objectives: [
      "formar una oración de relativo con der, die, das",
      "elegir género y número según el sustantivo y el caso según su función en la oración de relativo",
      "usar los relativos en nominativo, acusativo y dativo",
      "construir una oración de relativo con preposición"
    ],
    theory: [
      {
        h: "El pronombre relativo",
        p: "La <strong>oración de relativo</strong> da información sobre un sustantivo. Empieza con un <strong>pronombre relativo</strong>, lleva el verbo conjugado <strong>al final</strong> y va <strong>entre comas</strong>: <em>Das Buch, das ich gelesen habe, ist spannend.</em> Con el Perfekt, al final van el participio y el auxiliar: <em>gelesen habe</em>."
      },
      {
        h: "Dos preguntas para elegir la forma",
        p: "El <strong>género y el número</strong> se toman del sustantivo al que remite el pronombre (<em>Buch</em> es neutro, por eso <em>das</em>). El <strong>caso</strong> depende de la función del pronombre dentro de la oración de relativo: sujeto (nominativo), objeto directo (acusativo) o complemento de <em>helfen</em> o destinatario con <em>geben</em> (dativo; la cosa que se da va en acusativo: <em>Die Kinder, denen ich das Buch gebe</em> y <em>Das Buch, das ich den Kindern gebe</em>). En los tres casos que estudiamos aquí las formas son las del artículo determinado, salvo el dativo plural, que es <strong>denen</strong> (el genitivo, <em>dessen, deren</em>, viene más adelante)."
      },
      {
        h: "Con preposición",
        p: "La preposición va <strong>antes</strong> del pronombre y decide su caso: <em>Der Mann, mit dem ich spreche, ist mein Chef. Die Freundin, auf die ich warte, kommt aus Rom.</em> También existen formas del genitivo (<em>dessen, deren</em>), que por ahora no hacen falta."
      },
      {
        contrast: "El español usa <em>que</em> para casi todo (<em>el hombre que viene, el hombre que veo</em>) y, después de una preposición, <em>el que</em>, <em>quien</em> o <em>el cual</em> (<em>el hombre con el que hablo</em>). En alemán el pronombre se elige siempre con las dos preguntas anteriores: <em>der Mann, der kommt</em> (sujeto), <em>der Mann, den ich sehe</em> (objeto), <em>der Mann, mit dem ich spreche</em> (después de <em>mit</em>). Hay otra diferencia: en español la oración de relativo lleva comas solo cuando es explicativa (<em>Mi hermano, que vive en Madrid, ...</em>), y en alemán siempre va entre comas. Y el verbo se coloca al final, no después del sujeto como en español: <em>el libro que leí</em> es <em>das Buch, das ich gelesen habe</em>."
      },
      {
        trap: "No confundas el pronombre <em>das</em> con la conjunción <em>dass</em>. El español usa la misma palabra, <em>que</em>, para las dos funciones (<em>el libro que leo</em>, <em>creo que tienes razón</em>), y el alemán las separa: <em>das Buch, das ich lese</em> (relativo, remite a <em>Buch</em>) e <em>Ich glaube, dass du recht hast</em> (introduce una oración). Otra trampa es el caso: <em>Die Frau, der ich geholfen habe</em> lleva <em>der</em> porque <em>helfen</em> rige dativo, aunque <em>Frau</em> sea un sustantivo en nominativo. El español lo esconde con la <em>a</em> personal (<em>la mujer a la que ayudé</em>), pero no marca el caso."
      },
      {
        tip: "Antes de escribir la oración de relativo, pregúntate dos cosas: ¿a qué sustantivo remite el pronombre (género y número)? ¿Y qué función tiene dentro de la oración (caso)? Las dos respuestas dan la forma."
      }
    ],
    grammar: {
      title: "La oración de relativo",
      note: "Pronombre relativo = <b>género y número</b> del sustantivo, <b>caso</b> de su función en la oración. Verbo <b>al final</b>, oración entre <b>comas</b>.",
      table: {
        head: ["caso", "m.", "f.", "n.", "plural"],
        rows: [
          ["nominativo", "der", "die", "das", "die"],
          ["acusativo", "den", "die", "das", "die"],
          ["dativo", "dem", "der", "dem", "denen"]
        ]
      },
      examples: [
        { tr: "El hombre que está allí es mi profesor.", note: "der: masculino, sujeto de la oración de relativo" },
        { tr: "El libro que leí es apasionante.", note: "das: neutro, objeto directo" },
        { tr: "La mujer a la que ayudé se llama Eva.", note: "der: femenino, dativo con helfen" },
        { tr: "Los niños a los que doy el libro tienen siete años.", note: "denen: dativo plural" },
        { tr: "El hombre con el que hablo es mi jefe.", note: "mit dem: la preposición va antes del pronombre" },
        { tr: "La amiga a la que espero viene de Roma.", note: "auf die: warten auf + acusativo" }
      ]
    },
    vocab: [
      "la novela",
      "la película",
      "el vecino",
      "la colega",
      "la llave",
      "la bolsa",
      "el móvil",
      "las gafas",
      "la tienda",
      "apasionante, emocionante",
      "perder",
      "recomendar"
    ],
    exercises: [
      {
        q: "Elige el pronombre relativo: «Der Film, ___ wir gestern gesehen haben, war lang.»",
        opts: ["der", "den", "dem"],
        why: "<i>Film</i> es masculino y en la oración de relativo es objeto directo (<i>wir haben den Film gesehen</i>): por eso <b>den</b>."
      },
      {
        q: "Elige el pronombre relativo: «Das ist der Kollege, mit ___ ich arbeite.»",
        opts: ["dem", "den", "der"],
        why: "<i>Kollege</i> es masculino y <i>mit</i> rige dativo: <b>dem</b>. La preposición va antes del pronombre."
      },
      {
        q: "Completa: «Das ist das Buch, ___ ich gelesen habe.»",
        hint: "neutro, acusativo",
        why: "<b>Das</b>: <i>Buch</i> es neutro y en la oración de relativo es objeto directo (<i>das</i> en acusativo es igual que en nominativo)."
      },
      {
        q: "Completa: «Die Frau, ___ ich gestern getroffen habe, heißt Eva.»",
        hint: "femenino, acusativo",
        why: "<b>Die</b>: <i>Frau</i> es femenino y en la oración de relativo es objeto directo. El femenino tiene <i>die</i> tanto en nominativo como en acusativo."
      },
      {
        q: "Completa: «Die Kinder, ___ ich das Buch gebe, sind sieben Jahre alt.»",
        hint: "plural, dativo",
        why: "<b>Denen</b>: dativo plural. En los tres casos que estudiamos aquí el pronombre relativo coincide con el artículo determinado, salvo en el dativo plural: <i>denen</i>."
      },
      {
        q: "Completa la frase.",
        tr: "Esta es la llave que perdí.",
        why: "<i>Das ist der Schlüssel, den ich verloren habe</i>: <i>den</i> porque <i>Schlüssel</i> es masculino y objeto directo, y <i>verloren</i> con <i>habe</i> va al final."
      },
      {
        q: "Ordena las palabras.",
        tr: "Esta es la bolsa que compré ayer.",
        why: "<i>Das ist die Tasche, die ich gestern gekauft habe.</i> Después de la coma el verbo conjugado <i>habe</i> va al final, precedido de <i>gekauft</i>."
      },
      {
        q: "Traduce: «La película que vimos era larga.»",
        why: "<i>Der Film, den wir gesehen haben, war lang</i>: <i>den</i> (masculino, objeto), <i>gesehen haben</i> al final de la oración de relativo, y la principal continúa con <i>war</i>."
      },
      {
        tr: "Este es el libro que leí. Es una novela apasionante. La colega a quien le recomendé la novela también la encuentra apasionante.",
        why: "En <i>spannend</i> la <b>sp</b> inicial es [ʃp]; en <i>empfohlen</i> la <b>pf</b> es una africada [pf]; en <i>ich</i> la <b>ch</b> es [ç]."
      },
      {
        tr: "La llave que perdí estaba en mi bolsa.",
        why: "En <i>Schlüssel</i> la <b>sch</b> es [ʃ] y la <b>ü</b> es [ʏ]; en <i>verloren</i> la <b>v</b> es [f], mientras que en <i>war</i> la <b>w</b> es [v]."
      }
    ]
  },
  "lesson:b1-u02-l4": {
    theme: "Hablar en general",
    title: "Alguien, nadie, cada uno",
    objectives: [
      "usar jemand y niemand con las formas del acusativo y del dativo",
      "usar jeder (singular) y alle (plural)",
      "usar etwas y nichts",
      "construir la negación sin añadir nicht"
    ],
    theory: [
      {
        h: "jemand y niemand",
        p: "<strong>Jemand</strong> (alguien) y <strong>niemand</strong> (nadie) hablan de personas de forma general. Pueden quedarse invariables o tomar <em>-en</em> en acusativo y <em>-em</em> en dativo: <em>Ich habe niemanden gesehen</em> o <em>Ich habe niemand gesehen</em>. <em>Ich habe jemandem geholfen</em> o <em>Ich habe jemand geholfen</em>. Las dos formas son correctas, también por escrito; las formas con desinencia hacen más visible el caso."
      },
      {
        h: "jeder y alle",
        p: "<strong>Jeder</strong> (cada uno, cada cual) es <strong>singular</strong>: <em>Jeder weiß das.</em> Se declina como <em>dieser</em>: <em>jeder, jeden, jedem</em> (<em>Ich kenne jeden hier</em>). <strong>Alle</strong> (todos) es <strong>plural</strong>: <em>Alle sind da. Alle wissen das.</em>"
      },
      {
        h: "etwas y nichts",
        p: "<strong>Etwas</strong> (algo) y <strong>nichts</strong> (nada) no cambian: <em>Ich habe etwas gehört. Ich habe nichts gesehen.</em> Un adjetivo que los sigue se escribe con mayúscula y toma <em>-es</em> en nominativo y acusativo (<em>etwas Neues, nichts Besonderes</em>), <em>-em</em> en dativo (<em>mit etwas Neuem, mit nichts Besonderem</em>)."
      },
      {
        contrast: "En español, si <em>nadie</em> o <em>nada</em> van después del verbo, el verbo lleva <em>no</em>: <em>No vi a nadie, no hice nada</em>. En alemán la negación ya está dentro de <em>niemand</em> y <em>nichts</em>, y no se añade <em>nicht</em>: <em>Ich habe niemanden gesehen. Ich habe nichts gemacht.</em> Si <em>nadie</em> va antes del verbo, la frase es igual que en español: <em>Nadie llamó</em> es <em>Niemand hat angerufen</em>. Otra diferencia está en <em>todos</em>: el español usa <em>todos</em> (plural) y <em>cada uno</em> o <em>todo el mundo</em> (singular), y el alemán también lo distingue, con otras palabras: <em>alle</em> es plural (<em>Alle wissen das</em>) y <em>jeder</em> es singular (<em>Jeder weiß das</em>). <em>Etwas Neues</em> se parece a <em>algo nuevo</em> (el adjetivo va detrás), pero en alemán se escribe con mayúscula y lleva desinencia."
      },
      {
        trap: "<em>Jeder</em> es singular como <em>cada uno</em>, no como <em>todos</em>: <em>Jeder weiß das</em> (con <em>weiß</em>, 3.ª persona del singular), mientras que <em>alle</em> pide el plural: <em>Alle wissen das</em>. Además, añadir <em>nicht</em> a <em>nichts</em> o <em>niemanden</em> cambia el sentido, porque las dos negaciones se anulan: <em>Ich habe nicht nichts gehört</em> quiere decir que sí se oyó algo."
      },
      {
        tip: "Para «alguien más» se dice <em>jemand anders</em>. Para preguntar en general, <em>Hat jemand eine Frage?</em> es la forma más natural."
      }
    ],
    grammar: {
      title: "jemand, niemand, jeder",
      note: "<b>jemand</b> y <b>niemand</b>: invariables o con <b>-en</b> (acus.) y <b>-em</b> (dat.). <b>jeder</b> es singular, <b>alle</b> es plural. <b>nichts</b> y <b>niemand</b> niegan por sí solos: ningún <b>nicht</b> más.",
      table: {
        head: ["", "nominativo", "acusativo", "dativo"],
        rows: [
          ["jemand", "jemand", "jemanden, jemand", "jemandem, jemand"],
          ["niemand", "niemand", "niemanden, niemand", "niemandem, niemand"],
          ["jeder (m.)", "jeder", "jeden", "jedem"],
          ["alle (plural)", "alle", "alle", "allen"]
        ]
      },
      examples: [
        { tr: "¿Alguien ha visto mi llave?", note: "jemand en nominativo" },
        { tr: "No he visto a nadie.", note: "niemanden: acusativo, ningún nicht" },
        { tr: "He ayudado a alguien.", note: "jemandem: dativo con helfen" },
        { tr: "Cada uno lo sabe.", note: "jeder, singular: weiß" },
        { tr: "Están todos aquí.", note: "alle, plural: sind" },
        { tr: "No he oído nada.", note: "nichts: ningún nicht" }
      ]
    },
    vocab: [
      "alguien",
      "nadie",
      "cada uno (singular)",
      "todos (plural)",
      "algo",
      "nada",
      "la persona",
      "el ser humano, la gente",
      "el problema",
      "la pregunta",
      "la respuesta",
      "el secreto"
    ],
    exercises: [
      {
        q: "¿Cómo dices «No he hecho nada»?",
        opts: [
          "Ich habe nichts gemacht.",
          "Ich habe niemanden gemacht.",
          "Ich habe etwas nicht gemacht."
        ],
        why: "<b>Nichts</b> ya contiene la negación. <i>Niemanden</i> se refiere a personas, y <i>etwas nicht</i> significa «hay algo que no hice»."
      },
      {
        q: "¿Qué frase es correcta?",
        opts: ["Jeder weiß das.", "Jeder wissen das.", "Jeder wisst das."],
        why: "<b>Jeder</b> es singular: el verbo va en 3.ª persona del singular, <i>weiß</i>."
      },
      {
        q: "¿Qué frases son correctas?",
        opts: [
          "Ich kenne niemanden hier.",
          "Hat jemand Fragen?",
          "Alle sind da.",
          "Jeder sind da.",
          "Alle ist da."
        ],
        why: "Las tres primeras son correctas. <i>Jeder</i> es singular, así que la 4 tiene el verbo en plural, que está mal; <i>alle</i> es plural, así que la 5 tiene el verbo en singular, que está mal."
      },
      {
        q: "Completa: «Ich habe ___ gesehen.» (no he visto a nadie)",
        hint: "nadie, acusativo",
        why: "<b>Niemanden</b>: acusativo con desinencia; también es correcto <i>niemand</i>. Ningún <i>nicht</i>."
      },
      {
        q: "Completa: «Ich habe ___ geholfen.» (a alguien)",
        hint: "alguien, dativo",
        why: "<b>Jemandem</b>: <i>helfen</i> rige dativo. También es correcto <i>jemand</i> sin desinencia."
      },
      {
        q: "Completa: «___ weiß das.» (cada uno)",
        hint: "cada uno, singular",
        why: "<b>Jeder</b>: singular, con <i>weiß</i>. Si la frase llevara el verbo en plural, haría falta <i>alle</i>."
      },
      {
        q: "Completa: «Ich habe gestern ___ gegessen.» (nada)",
        hint: "nada",
        why: "<b>Nichts</b>: no cambia y no admite <i>nicht</i>."
      },
      {
        q: "Completa la frase.",
        tr: "No he visto a nadie y no he oído nada.",
        why: "<i>Ich habe niemanden gesehen und nichts gehört</i>: cada pronombre niega su propio complemento, y el <i>no</i> español no se traduce con un <i>nicht</i> más."
      },
      {
        tr: "¿Alguien ha visto mis gafas? No, nadie las ha visto. Todos las buscan, pero no encontramos nada.",
        why: "En <i>jemand</i> y <i>jeder</i> la <b>j</b> es [j]; en <i>niemand</i> la <b>ie</b> es larga [iː]; en <i>sucht</i> la <b>ch</b> es [x] y en <i>nichts</i> es [ç]; en <i>meine</i> la <b>ei</b> es [aɪ]."
      },
      {
        tr: "No he visto a nadie y no he oído nada.",
        why: "En <i>niemanden</i> la <b>ie</b> es larga [iː]; en <i>ich</i> y <i>nichts</i> la <b>ch</b> es [ç]; en <i>gehört</i> la <b>ö</b> es larga [øː]."
      }
    ]
  },
  "lesson:b1-u02-test": {
    theme: "Evaluación",
    title: "Test: ¿En qué piensas?",
    objectives: [
      "repasar los verbos con preposición, darauf y worauf, las oraciones de relativo, jemand, niemand y jeder"
    ],
    theory: [
      {
        p: "Diez preguntas sobre toda la unidad. Se aprueba con el 70 %. No vuelvas a mirar las lecciones mientras respondes: si no recuerdas algo, es mejor volver a repasar."
      }
    ],
    exercises: [
      {
        q: "Completa: «Ich warte ___ dich.»",
        hint: "esperar",
        why: "<b>Auf</b>: <i>warten auf + acusativo</i>."
      },
      {
        q: "Completa: «Sie hat Angst ___ dem Test.»",
        hint: "tener miedo de",
        why: "<b>Vor</b>: <i>Angst haben vor + dativo</i>."
      },
      {
        q: "Completa la pregunta: «___ denkst du? - An den Urlaub.»",
        hint: "pregunta con an, por una cosa",
        why: "<b>Woran</b>: <i>denken an</i> + <i>wo</i> + <i>r</i> delante de la vocal."
      },
      {
        q: "Completa: «Das ist der Mann, ___ ich gestern gesehen habe.»",
        hint: "masculino, acusativo",
        why: "<b>Den</b>: <i>Mann</i> es masculino y en la oración de relativo es objeto directo."
      },
      {
        q: "Completa: «Das Buch, ___ ich gelesen habe, ist spannend.»",
        hint: "neutro, acusativo",
        why: "<b>Das</b>: neutro, objeto directo de la oración de relativo."
      },
      {
        q: "Completa: «Ich habe ___ gesehen.» (no he visto a nadie)",
        hint: "nadie, acusativo",
        why: "<b>Niemanden</b> (o <i>niemand</i>, también correcto), sin <i>nicht</i>."
      },
      {
        q: "Ya has recibido el regalo y te alegras. ¿Qué frase es correcta?",
        opts: [
          "Ich freue mich über das Geschenk.",
          "Ich freue mich für das Geschenk.",
          "Ich freue mich mit das Geschenk."
        ],
        why: "<b>Sich freuen über + acusativo</b> para un hecho o una noticia que alegra. Con <i>auf</i> se mira hacia delante (<i>Ich freue mich auf das Geschenk</i> quiere decir que todavía lo esperas)."
      },
      {
        q: "Elige el pronombre relativo: «Die Frau, mit ___ ich spreche, ist meine Chefin.»",
        opts: ["der", "die", "dem"],
        why: "<i>Frau</i> es femenino y <i>mit</i> rige dativo: <b>der</b>."
      },
      {
        tr: "Te espero. La mujer que está allí tiene miedo del examen. Nadie la ayuda.",
        why: "En <i>warte</i> la <b>w</b> es [v]; en <i>steht</i> la <b>st</b> inicial es [ʃt]; en <i>niemand</i> la <b>ie</b> es larga [iː]; en <i>dich</i> la <b>ch</b> es [ç]."
      },
      {
        tr: "Pienso a menudo en el libro que leí.",
        why: "En <i>ich</i> la <b>ch</b> es [ç], en <i>Buch</i> es [x]; la <b>u</b> de <i>Buch</i> es larga [uː]; en <i>gelesen</i> la <b>s</b> es sonora [z]."
      }
    ]
  },
  "unit:b1-u03": {
    title: "Oficinas y contratos",
    grammarNote: "pasiva (Vorgangspassiv) en presente y Präteritum · genitivo y wegen, während, innerhalb · um ... zu y damit · registro formal"
  },
  "lesson:b1-u03-l1": {
    theme: "Burocracia",
    title: "La inscripción de residencia",
    objectives: [
      "entender y formar la pasiva con werden en presente y en Präteritum",
      "decir quién hace la acción con von + dativo, cuando hace falta",
      "distinguir el proceso (wird geprüft) del resultado (ist geprüft)",
      "desenvolverse en una ventanilla con el registro formal"
    ],
    theory: [
      {
        h: "La pasiva con werden",
        p: "La pasiva pone en primer plano <strong>lo que ocurre</strong>, no quién lo hace. Se forma con <strong>werden</strong> conjugado y el <strong>participio</strong> al final: <em>Das Formular wird ausgefüllt.</em> Para el pasado se usa el Präteritum de <em>werden</em>: <em>Das Formular wurde ausgefüllt.</em> El objeto de la frase activa pasa a ser el sujeto: <em>Die Beamtin prüft den Ausweis</em> se convierte en <em>Der Ausweis wird geprüft.</em>"
      },
      {
        h: "Quién actúa: von + dativo",
        p: "Si hace falta decir quién realiza la acción, se añade <strong>von + dativo</strong>: <em>Der Ausweis wird von der Beamtin geprüft.</em> Muy a menudo el agente no se dice, porque es obvio o no importa: <em>Termine werden online vergeben.</em> Por eso la pasiva es típica de formularios, avisos y oficinas."
      },
      {
        h: "En la ventanilla: el registro formal",
        p: "En una oficina se usa <strong>Sie</strong>, con <em>Herr</em> o <em>Frau</em> y el apellido. Una petición se formula con <em>ich möchte</em> o con el Konjunktiv II: <em>Ich möchte mich anmelden. Könnten Sie mir helfen?</em> La <strong>Anmeldung</strong> es la inscripción de tu domicilio en el Bürgeramt; normalmente hay que hacerla dentro de las dos semanas siguientes a la mudanza."
      },
      {
        contrast: "El español tiene dos pasivas habituales: <em>el formulario es rellenado</em> (ser + participio) y <em>se rellena el formulario</em> (pasiva refleja), y además <em>el formulario está rellenado</em> para el resultado. El alemán usa <strong>werden</strong> para la acción (<em>wird ausgefüllt</em>) y <strong>sein</strong> para el resultado (<em>ist ausgefüllt</em>), como el español con <em>ser</em> y <em>estar</em>. Pero hay una diferencia: en español el participio concuerda (<em>rellenado, rellenada, rellenados</em>), en alemán no cambia: <em>der Ausweis wird geprüft</em>, <em>die Karte wird geprüft</em>, <em>die Formulare werden geprüft</em>. Y el alemán no suele recurrir a una forma como <em>se</em>: la pasiva con <em>werden</em> es la opción normal en los textos formales."
      },
      {
        trap: "<em>Das Formular wird ausgefüllt</em> pone en primer plano la <strong>acción</strong> de rellenar el formulario, sin decir que ocurra justo ahora: puede ser un procedimiento habitual o algo futuro. <em>Das Formular ist ausgefüllt</em> es una frase correcta, pero describe el <strong>resultado</strong>: el formulario ya está rellenado. No son lo mismo: con <em>wird</em> se mira la acción, con <em>ist</em> el estado que queda. Del mismo modo, <em>wurde geprüft</em> lleva <em>werden</em>, mientras que <em>war geprüft</em> describe un estado pasado."
      },
      {
        tip: "Para pasar de activa a pasiva, busca el objeto en acusativo: se convierte en el sujeto. <em>Man gibt das Formular ab</em> pasa a <em>Das Formular wird abgegeben.</em> Con un verbo separable el participio queda unido: <em>abgegeben, ausgefüllt, angemeldet</em>."
      }
    ],
    grammar: {
      title: "La pasiva en presente y en Präteritum",
      note: "<b>werden</b> + <b>participio</b> al final: <b>wird geprüft</b> (presente), <b>wurde geprüft</b> (Präteritum). El agente, si hay, es <b>von + dativo</b>.",
      table: {
        head: ["", "presente", "Präteritum"],
        rows: [
          ["ich", "werde geprüft", "wurde geprüft"],
          ["du", "wirst geprüft", "wurdest geprüft"],
          ["er/sie/es", "wird geprüft", "wurde geprüft"],
          ["wir", "werden geprüft", "wurden geprüft"],
          ["ihr", "werdet geprüft", "wurdet geprüft"],
          ["sie/Sie", "werden geprüft", "wurden geprüft"]
        ]
      },
      examples: [
        { tr: "Se rellena el formulario.", note: "werden + participio: la acción en primer plano" },
        { tr: "Se comprueba el documento de identidad.", note: "el participio no cambia con el género" },
        { tr: "La inscripción fue confirmada ayer.", note: "wurde: Präteritum de werden" },
        { tr: "Las citas se asignan en línea.", note: "sin agente, plural: werden" },
        { tr: "El certificado fue expedido enseguida.", note: "participio de un verbo separable: ausgestellt" },
        { tr: "El formulario lo comprueba la funcionaria.", note: "von + dativo: von der Beamtin" }
      ]
    },
    vocab: [
      "la inscripción de residencia",
      "la oficina de atención al ciudadano",
      "la identificación fiscal alemana",
      "la cita",
      "el formulario",
      "la constancia (el certificado)",
      "el documento de identidad",
      "la ventanilla",
      "inscribir la residencia (sich anmelden)",
      "rellenar",
      "entregar",
      "expedir"
    ],
    exercises: [
      {
        q: "¿Qué frase significa «Se rellena el formulario»?",
        opts: ["Das Formular wird ausgefüllt.", "Das Formular ist ausgefüllt.", "Das Formular hat ausgefüllt."],
        why: "<b>Wird ausgefüllt</b>: <i>werden</i> + participio, el proceso. <i>Ist ausgefüllt</i> es una frase correcta, pero dice que el formulario ya está rellenado; <i>Das Formular hat ausgefüllt</i> está en activa: convierte el formulario en quien rellena, y eso no tiene sentido."
      },
      {
        q: "Ayer se comprobó la solicitud. ¿Qué frase?",
        opts: [
          "Der Antrag wurde gestern geprüft.",
          "Der Antrag wird gestern geprüft.",
          "Der Antrag werden gestern geprüft."
        ],
        why: "<b>Wurde geprüft</b>: Präteritum de <i>werden</i>. <i>Wird</i> es un presente, y <i>werden</i> no concuerda con el singular <i>Antrag</i>."
      },
      {
        q: "¿Qué frase es correcta?",
        opts: [
          "Der Ausweis wird von der Beamtin geprüft.",
          "Der Ausweis wird von die Beamtin geprüft.",
          "Der Ausweis wird von der Beamtin prüfen."
        ],
        why: "<b>Von + dativo</b>: <i>von der Beamtin</i>. El participio (<i>geprüft</i>) va al final, no el infinitivo."
      },
      {
        q: "Completa: «Das Formular ___ ausgefüllt.»",
        hint: "werden, presente",
        why: "<b>Wird</b>: sujeto singular, pasiva de proceso en presente."
      },
      {
        q: "Completa: «Der Pass ___ gestern ausgestellt.»",
        hint: "werden, Präteritum",
        why: "<b>Wurde</b>: la pista pide el Präteritum de <i>werden</i>, es decir, <i>wurde</i>. <i>Gestern</i> por sí solo no basta: la pasiva en Perfekt (<i>ist ... ausgestellt worden</i>) es otra forma, que aquí no se pide."
      },
      {
        q: "Completa la frase.",
        tr: "El formulario se entrega en la ventanilla (pasiva en presente).",
        why: "<i>Das Formular wird am Schalter abgegeben.</i> <i>Wird</i> + participio <i>abgegeben</i>, que queda unido."
      },
      {
        q: "Relaciona cada frase con su significado.",
        pairs: [
          "Se rellena el formulario.",
          "Se comprobó el documento de identidad.",
          "Se asigna la cita.",
          "Se expidió el certificado."
        ]
      },
      {
        q: "Traduce usando el pasivo de proceso con werden: «La solicitud es comprobada.»",
        why: "<i>Der Antrag wird geprüft</i>: <i>werden</i> + participio. También vale <i>überprüft</i>."
      },
      {
        tr: "Buenos días, quisiera inscribir mi residencia. El formulario se entrega en la ventanilla. Se comprueba el documento y el certificado se expide enseguida.",
        why: "En <i>möchte</i> la <b>ö</b> es una vocal anterior redondeada y la <b>ch</b> es [ç]; en <i>Schalter</i> la <b>sch</b> es [ʃ]; en <i>Ausweis</i> la <b>au</b> es [aʊ] y la <b>w</b> es [v]; en <i>geprüft</i> la <b>ü</b> es una vocal anterior redondeada."
      },
      {
        tr: "Buenos días, quisiera inscribir mi residencia. El formulario ya ha sido rellenado.",
        why: "En <i>ich</i> la <b>ch</b> es [ç]; en <i>schon</i> la <b>sch</b> es [ʃ]; en <i>wurde</i> la <b>w</b> es [v]; en <i>ausgefüllt</i> la <b>ü</b> es una vocal anterior redondeada."
      }
    ]
  },
  "lesson:b1-u03-l2": {
    theme: "Banco y alquiler",
    title: "El banco y el contrato de alquiler",
    objectives: [
      "usar el genitivo para decir a quién pertenece algo",
      "reconocer las terminaciones -(e)s en masculino y neutro",
      "usar wegen, während e innerhalb con el genitivo",
      "hablar en la ventanilla de un banco de forma formal"
    ],
    theory: [
      {
        h: "El genitivo",
        p: "El <strong>genitivo</strong> indica posesión o relación, y va <strong>después</strong> del nombre al que se refiere: <em>der Vertrag des Vermieters</em>, <em>die Höhe der Miete</em>. El artículo cambia: masculino y neutro <strong>des</strong>, femenino y plural <strong>der</strong>. La mayoría de los nombres masculinos y neutros toman <strong>-s</strong> o <strong>-es</strong>: <em>des Vermieters, des Vertrags, des Hauses</em>; los masculinos débiles toman <strong>-n</strong> o <strong>-en</strong>: <em>des Kunden, des Studenten</em>."
      },
      {
        h: "wegen, während, innerhalb",
        p: "Algunas preposiciones llevan genitivo: <strong>wegen</strong> (a causa de), <strong>während</strong> (durante), <strong>innerhalb</strong> (dentro de, en el plazo de). <em>Wegen des Umzugs brauche ich ein neues Konto. Während des Urlaubs habe ich viel gelesen. Innerhalb einer Woche bekommen Sie Ihre Karte.</em> En la lengua hablada tras <em>wegen</em> se oye a menudo también el dativo; en los textos escritos y en las oficinas se espera el genitivo."
      },
      {
        h: "Nombres propios y von + dativo",
        p: "Con un <strong>nombre propio</strong> el genitivo toma <em>-s</em> y va <strong>antes</strong> del nombre, sin apóstrofo: <em>Annas Konto</em>. Si el nombre termina en sibilante (<em>-s, -x, -z, -ß</em>) se pone solo el apóstrofo: <em>Hans’ Konto, Max’ Konto</em>. En la lengua hablada se sustituye a menudo por <strong>von + dativo</strong>: <em>das Konto von meinem Bruder</em>."
      },
      {
        contrast: "El español expresa la posesión con <em>de</em>: <em>el contrato del propietario, la cuenta de mi hermano</em>, y la preposición no cambia. En alemán es el artículo el que marca el caso, y el poseedor va después del nombre: <em>der Vertrag des Vermieters</em>. Solo con los nombres propios el poseedor va delante: <em>Annas Konto</em>, algo que en español sería <em>la cuenta de Ana</em>."
      },
      {
        trap: "<em>Während</em> puede ser también una conjunción, y entonces el verbo va al final: <em>Während ich arbeite, ...</em>. El español distingue <em>durante</em> (preposición) y <em>mientras</em> (conjunción); el alemán usa la misma palabra para las dos. Como preposición (<em>während des Urlaubs</em>) lleva genitivo y no tiene verbo conjugado detrás. En femenino el nombre no cambia: <em>die Höhe der Miete</em>."
      },
      {
        tip: "En la ventanilla del banco usa <em>Sie</em>: <em>Ich möchte ein Konto eröffnen. Könnten Sie mir bitte das Formular geben?</em> El registro formal no pide palabras difíciles, sino frases completas y el verbo en su sitio."
      }
    ],
    grammar: {
      title: "El genitivo y wegen, während, innerhalb",
      note: "Genitivo: <b>des</b> (m. y n.) + nombre en <b>-(e)s</b> (masculinos débiles: <b>-(e)n</b>, p. ej. <i>des Kunden</i>), <b>der</b> (f. y plural). Va <b>después</b> del nombre poseído. Con <b>wegen, während, innerhalb</b>.",
      table: {
        head: ["", "m.", "f.", "n.", "plural"],
        rows: [
          ["artículo", "des", "der", "des", "der"],
          ["ejemplo", "des Vermieters", "der Miete", "des Kontos", "der Mieter"]
        ]
      },
      examples: [
        { tr: "Este es el contrato del propietario.", note: "des Vermieters: masculino, nombre en -s" },
        { tr: "El importe del alquiler está en el contrato.", note: "der Miete: femenino, el nombre no cambia" },
        { tr: "A causa de la mudanza necesito una cuenta nueva.", note: "wegen + genitivo: des Umzugs" },
        { tr: "Durante las vacaciones leí mucho.", note: "während + genitivo: des Urlaubs" },
        { tr: "En el plazo de una semana recibe su tarjeta.", note: "innerhalb + genitivo: einer Woche" },
        { tr: "La cuenta de Ana está en otro banco.", note: "nombre propio: Annas, antes del nombre" }
      ]
    },
    vocab: [
      "el contrato de alquiler",
      "la cuenta",
      "la renta (el alquiler)",
      "el propietario (el arrendador)",
      "el inquilino (el arrendatario)",
      "la fianza",
      "la rescisión (del contrato)",
      "la fecha límite (el plazo)",
      "la transferencia",
      "abrir (una cuenta)",
      "firmar",
      "hacer una transferencia"
    ],
    exercises: [
      {
        q: "¿Qué frase es correcta?",
        opts: [
          "Die Höhe der Miete steht im Vertrag.",
          "Die Höhe den Miete steht im Vertrag.",
          "Die Höhe Miete steht im Vertrag."
        ],
        why: "<b>Der Miete</b>: <i>Miete</i> es femenino y el genitivo femenino lleva <i>der</i>. <i>Den</i> no es una forma del femenino singular, y sin artículo falta el caso."
      },
      {
        q: "Completa: «Das ist der Vertrag ___ Vermieters.»",
        hint: "genitivo masculino",
        why: "<b>Des</b>: genitivo masculino, y el nombre toma <i>-s</i> (<i>des Vermieters</i>)."
      },
      {
        q: "Completa: «Die Höhe ___ Miete steht im Vertrag.»",
        hint: "genitivo femenino",
        why: "<b>Der</b>: genitivo femenino singular. El nombre <i>Miete</i> no cambia."
      },
      {
        q: "Completa la frase.",
        tr: "Durante las vacaciones leí mucho.",
        why: "<i>Während des Urlaubs habe ich viel gelesen.</i> <i>Während</i> como preposición lleva genitivo: <i>des Urlaubs</i>."
      },
      {
        q: "Relaciona cada expresión con su significado.",
        pairs: ["el coche del padre", "a causa del tiempo", "durante las vacaciones", "en el plazo de una semana"]
      },
      {
        q: "Ordena las palabras.",
        tr: "A causa de la mudanza necesito una cuenta nueva.",
        why: "<i>Wegen des Umzugs brauche ich ein neues Konto.</i> También vale <i>Ich brauche wegen des Umzugs ein neues Konto</i>. En la primera, el verbo <i>brauche</i> está en segunda posición, tras el grupo <i>Wegen des Umzugs</i>."
      },
      {
        q: "Traduce: «Esta es la cuenta de mi hermano.»",
        why: "<i>Das ist das Konto meines Bruders</i>: genitivo masculino con <i>meines</i> y <i>-s</i> en el nombre. En la lengua hablada también vale <i>das Konto von meinem Bruder</i>."
      },
      {
        q: "Estás en el banco y hablas con un empleado.",
        setting: "Quieres abrir una cuenta y usas el registro formal.",
        lines: [
          { tr: "Buenos días. ¿En qué puedo ayudarle?" },
          { tr: "Responde: quisieras abrir una cuenta.", answerTr: "Buenos días, quisiera abrir una cuenta." },
          { tr: "Con mucho gusto. ¿Trae también una copia del contrato de alquiler?" },
          { tr: "Responde: por supuesto, a causa de la mudanza lo traes todo.", answerTr: "Por supuesto. A causa de la mudanza lo traigo todo." },
          { tr: "Perfecto. En el plazo de una semana recibe su tarjeta." },
          { tr: "Pregunta si la tarjeta se envía por correo.", answerTr: "¿Se envía la tarjeta por correo?" }
        ]
      },
      {
        tr: "Buenos días, quisiera abrir una cuenta. Aquí está el contrato de alquiler. A causa de la mudanza necesito una cuenta nueva. En el plazo de una semana recibo la tarjeta.",
        why: "En <i>eröffnen</i> la <b>ö</b> es una vocal anterior redondeada; en <i>Mietvertrag</i> la <b>ie</b> es larga [iː] y la <b>v</b> es [f]; en <i>Wegen</i> la <b>W</b> es [v]; en <i>Woche</i> la <b>ch</b> tras <b>o</b> es [x]."
      },
      {
        tr: "El alquiler se paga por transferencia el día uno del mes.",
        why: "En <i>Miete</i> la <b>ie</b> es larga [iː]; en <i>überwiesen</i> la <b>ü</b> es una vocal anterior redondeada, la <b>w</b> es [v] y la <b>s</b> entre dos vocales es sonora [z]."
      }
    ]
  },
  "lesson:b1-u03-l3": {
    theme: "Reclamaciones",
    title: "Me quejo para que ...",
    objectives: [
      "expresar la finalidad con um ... zu cuando el sujeto es el mismo",
      "expresar la finalidad con damit, sobre todo cuando los sujetos son distintos",
      "formular una queja con cortesía usando el Konjunktiv II",
      "no confundir damit (finalidad) y weil (causa)"
    ],
    theory: [
      {
        h: "um ... zu: finalidad con el mismo sujeto",
        p: "Para decir <strong>con qué fin</strong> se hace algo, cuando el sujeto es el mismo en las dos partes, se usa <strong>um ... zu</strong> con el infinitivo al final: <em>Ich rufe an, um mich zu beschweren.</em> Con un verbo separable, <em>zu</em> va en medio: <em>Ich gehe zum Bürgeramt, um mich anzumelden.</em> Las oraciones de infinitivo introducidas por <em>um</em> se separan con una coma."
      },
      {
        h: "damit: normalmente sujetos distintos",
        p: "Cuando los sujetos son <strong>distintos</strong> se usa <strong>damit</strong>, seguido de una oración con el verbo conjugado al final, en indicativo: <em>Ich schicke ein Foto, damit er den Schaden sieht.</em> Con sujetos distintos no se usa <em>um ... zu</em>. <em>Damit</em> también aparece con el mismo sujeto (<em>..., damit ich pünktlich bin</em>), pero <em>um ... zu</em> es la forma más natural."
      },
      {
        h: "Una queja educada",
        p: "En una queja el tono importa: el Konjunktiv II suaviza una petición. <em>Könnten Sie das bitte reparieren? Ich würde gern mit Ihrem Chef sprechen. Wir hätten gern eine schnelle Lösung.</em> Una petición en imperativo (<em>Reparieren Sie das!</em>) suena mucho más dura."
      },
      {
        contrast: "El español usa <em>para + infinitivo</em> (<em>llamo para quejarme</em>) y, con sujetos distintos, <em>para que</em> con <strong>subjuntivo</strong> (<em>te mando una foto para que veas el daño</em>). El alemán reparte igual los dos casos, <em>um ... zu</em> y <em>damit</em>, pero <em>damit</em> lleva el <strong>indicativo</strong>: <em>damit er den Schaden sieht</em>. Además <em>porque</em> (causa) y <em>para que</em> (finalidad) son en español palabras distintas, y también lo son en alemán: <em>weil</em> y <em>damit</em>."
      },
      {
        trap: "<em>Weil</em> da la causa, <em>damit</em> la finalidad: <em>Ich rufe an, weil die Heizung kaputt ist</em> (motivo) y <em>Ich rufe an, damit jemand sie repariert</em> (finalidad). Una oración con otro sujeto no se puede unir solo con <em>um</em>: <em>Ich rufe an, um der Handwerker kommt</em> es incorrecto. Una finalidad expresada con un nombre puede usar <em>für</em> + acusativo (<em>Ich lerne für die Prüfung</em>) o <em>zu</em> + dativo (<em>zur Anmeldung</em>, <em>zur Reparatur</em>): la elección depende de la construcción."
      },
      {
        tip: "Antes de elegir, pregúntate quién realiza las dos acciones. Si es la misma persona, <em>um ... zu</em>; si son personas distintas, <em>damit</em>. Y si hablas con una oficina o una empresa, empieza con <em>Guten Tag</em> y usa <em>Sie</em>."
      }
    ],
    grammar: {
      title: "La oración final: um ... zu y damit",
      note: "Mismo sujeto: <b>um ... zu</b> + infinitivo. Sujetos distintos (o el mismo): <b>damit</b> + verbo conjugado al final, en indicativo.",
      table: {
        head: ["construcción", "cuándo", "ejemplo"],
        rows: [
          ["um ... zu + infinitivo", "mismo sujeto", "Ich rufe an, um mich zu beschweren."],
          ["damit + verbo al final", "finalidad; sujetos iguales o distintos", "Ich schicke ein Foto, damit er den Schaden sieht."],
          ["weil + verbo al final", "causa, no finalidad", "Ich rufe an, weil die Heizung kaputt ist."]
        ]
      },
      examples: [
        { tr: "Llamo para quejarme.", note: "um ... zu, mismo sujeto: ich" },
        { tr: "Voy a la oficina para inscribir mi residencia.", note: "verbo separable: um mich anzumelden" },
        { tr: "Mando una foto para que él vea el daño.", note: "damit: dos sujetos, ich y er" },
        { tr: "¿Podría repararlo, por favor?", note: "Konjunktiv II de können: petición educada" },
        { tr: "Quisiera hablar con su jefe.", note: "würde gern + infinitivo" },
        { tr: "Querríamos una solución rápida.", note: "hätten gern: Konjunktiv II de haben" }
      ]
    },
    vocab: [
      "la queja (la reclamación)",
      "el defecto",
      "el daño",
      "la reparación",
      "el operario (el que repara)",
      "la factura",
      "la garantía",
      "la sustitución (el sustituto)",
      "quejarse",
      "reparar",
      "sustituir",
      "urgente"
    ],
    exercises: [
      {
        q: "Completa: «Ich rufe an, ___ mich zu beschweren.»",
        opts: ["um", "damit", "weil"],
        why: "<b>Um</b>: mismo sujeto (<i>ich</i>) e infinitivo con <i>zu</i>. <i>Damit</i> necesita un verbo conjugado, y <i>weil</i> da la causa."
      },
      {
        q: "Completa para expresar la finalidad: «Ich schicke ein Foto, ___ der Vermieter den Schaden sieht.» (Mando una foto para que el propietario vea el daño.)",
        opts: ["damit", "um", "weil"],
        why: "<b>Damit</b>: los sujetos son distintos (<i>ich</i> y <i>der Vermieter</i>) y hay un verbo conjugado. <i>Um</i> no se usa con un sujeto nuevo. <i>Weil</i> daría una causa («porque el propietario ve el daño»), no la finalidad pedida."
      },
      {
        q: "Completa: «Ich schreibe eine E-Mail, ___ der Vermieter die Heizung repariert.»",
        hint: "finalidad, sujetos distintos",
        why: "<b>Damit</b>: sujetos distintos, verbo conjugado al final."
      },
      {
        q: "Completa: «Ich rufe an, um mich ___ beschweren.»",
        hint: "um ... ?",
        why: "<b>Zu</b>: <i>um ... zu + infinitivo</i>, con <i>zu</i> justo antes del verbo."
      },
      {
        q: "Completa la frase.",
        tr: "Voy a la oficina para inscribir mi residencia (sich anmelden).",
        why: "<i>Ich gehe zum Bürgeramt, um mich anzumelden.</i> Con el verbo separable <i>anmelden</i>, <i>zu</i> va en medio: <i>anzumelden</i>."
      },
      {
        q: "Relaciona cada expresión con su función.",
        pairs: [
          "mismo sujeto, infinitivo",
          "finalidad, verbo conjugado al final; admite sujetos iguales o distintos",
          "indica la causa",
          "indica la finalidad con un sustantivo"
        ]
      },
      {
        q: "Ordena las palabras (empieza con Ich).",
        tr: "Mando una foto para que vea el daño.",
        why: "<i>Ich schicke ein Foto, damit er den Schaden sieht.</i> Tras <i>damit</i> el verbo conjugado <i>sieht</i> va al final."
      },
      {
        q: "Traduce: «Llamo para quejarme.» (usa anrufen y um ... zu)",
        why: "<i>Ich rufe an, um mich zu beschweren</i>: <i>anrufen</i> es separable, y tras <i>um</i> el reflexivo <i>mich</i> queda delante del infinitivo."
      },
      {
        tr: "Buenos días, llamo para quejarme. La calefacción está rota. Mando una foto para que usted vea el daño. ¿Podría enviar a alguien lo antes posible, por favor?",
        why: "En <i>beschweren</i> la <b>sch</b> es [ʃ] y la <b>w</b> es [v]; en <i>Heizung</i> la <b>z</b> es [ts]; en <i>Könnten</i> la <b>ö</b> es una vocal anterior redondeada; en <i>schicke</i> la <b>sch</b> es [ʃ] y la <b>ck</b> señala una vocal breve."
      },
      {
        tr: "Quisiera hablar con su jefe para quejarme.",
        why: "En <i>würde</i> la <b>ü</b> es una vocal anterior redondeada; en <i>Chef</i> la <b>ch</b> es [ʃ] (palabra de origen francés); en <i>sprechen</i> la <b>sp</b> a principio de sílaba se lee [ʃp] y la <b>ch</b> es [ç]."
      }
    ]
  },
  "lesson:b1-u03-l4": {
    theme: "Trabajo",
    title: "El contrato de trabajo",
    objectives: [
      "leer las cláusulas principales de un contrato de trabajo",
      "usar la pasiva y el genitivo juntos en frases formales",
      "reconocer período de prueba, preaviso y sueldo",
      "entender la diferencia entre contrato temporal e indefinido"
    ],
    theory: [
      {
        h: "El lenguaje de un contrato",
        p: "Un contrato de trabajo usa mucho la <strong>pasiva</strong> y el <strong>genitivo</strong>, porque describe reglas sin decir quién las aplica: <em>Das Gehalt wird am Ende des Monats bezahlt. Die Probezeit des Arbeitnehmers dauert sechs Monate. Die Kündigungsfrist des Vertrags beträgt vier Wochen.</em> Quien reconoce <em>wird ... bezahlt</em> y <em>des ... s</em> ya entiende la estructura de la frase."
      },
      {
        h: "Pasiva y genitivo en la misma frase",
        p: "Las dos estructuras se combinan: <em>Der Vertrag wurde von beiden Seiten unterschrieben.</em> (pasiva con agente) y <em>Die Arbeitszeit des Mitarbeiters wird im Vertrag genannt.</em> (genitivo y pasiva). En la pasiva el participio va al final, y el genitivo sigue al nombre al que se refiere."
      },
      {
        h: "Palabras que vuelven",
        p: "<strong>Arbeitgeber</strong> es quien contrata, <strong>Arbeitnehmer</strong> quien es contratado. La <strong>Probezeit</strong> es el período inicial durante el cual la relación se puede disolver con más facilidad; la <strong>Kündigungsfrist</strong> es el preaviso. Un contrato es <strong>befristet</strong> si tiene fecha de vencimiento, <strong>unbefristet</strong> si es indefinido."
      },
      {
        contrast: "En español <em>período de prueba</em> y <em>plazo de preaviso</em> se forman con <em>de</em>; en alemán son palabras compuestas: <em>Probezeit, Kündigungsfrist</em>. El género lo da el último elemento, y no siempre coincide con el español: <em>die Frist</em> da <em>die Kündigungsfrist</em> (femenino), mientras que <em>el plazo</em> es masculino. Por eso conviene aprender el artículo junto con cada compuesto. En los compuestos aparece a menudo un pequeño elemento de unión, por ejemplo la <em>-s-</em> de <em>Arbeitsvertrag</em>."
      },
      {
        trap: "No confundas el Präteritum de la pasiva con el Präteritum activo: <em>Er wurde eingestellt</em> (fue contratado) y <em>Er stellte ein</em> (contrató, activa) dan al sujeto papeles opuestos. Comprueba, pues, quién realiza la acción. Y con <em>des Arbeitnehmers</em> recuerda la <em>-s</em> del genitivo masculino."
      },
      {
        tip: "Cuando leas un contrato, subraya los verbos con <em>werden</em> y los grupos con <em>des/der + nombre</em>. Son las dos estructuras que llevan las reglas, y el resto es sobre todo vocabulario."
      }
    ],
    grammar: {
      title: "Pasiva y genitivo en los contratos",
      note: "<b>werden</b> + participio para las reglas (<b>wird bezahlt</b>), <b>des/der + nombre</b> para el poseedor (<b>des Vertrags</b>).",
      table: {
        head: ["estructura", "ejemplo", "significado"],
        rows: [
          ["pasiva presente", "Das Gehalt wird bezahlt.", "se paga el sueldo"],
          ["pasiva Präteritum", "Der Arbeitnehmer wurde eingestellt.", "el empleado fue contratado"],
          ["genitivo masculino", "die Probezeit des Arbeitnehmers", "el período de prueba del empleado"],
          ["genitivo femenino", "die Höhe der Miete", "el importe del alquiler"]
        ]
      },
      examples: [
        { tr: "El contrato fue firmado por ambas partes.", note: "pasiva con agente: von beiden Seiten" },
        { tr: "El sueldo se paga a final de mes.", note: "pasiva presente, des Monats" },
        { tr: "El período de prueba del empleado dura seis meses.", note: "genitivo masculino: des Arbeitnehmers" },
        { tr: "La jornada laboral se indica en el contrato.", note: "pasiva: wird ... genannt" },
        { tr: "El empleado fue contratado en mayo.", note: "pasiva Präteritum: wurde eingestellt" },
        { tr: "El preaviso del contrato es de cuatro semanas.", note: "genitivo masculino: des Vertrags" }
      ]
    },
    vocab: [
      "el contrato de trabajo",
      "el sueldo",
      "el período de prueba",
      "el empleador",
      "el empleado (el trabajador)",
      "el plazo de preaviso",
      "la jornada laboral",
      "el puesto de trabajo",
      "dimitir / rescindir el contrato (jemandem kündigen = despedir a alguien)",
      "contratar",
      "pagar",
      "temporal (de duración determinada)"
    ],
    exercises: [
      {
        q: "¿Qué frase es correcta?",
        opts: [
          "Das Gehalt wird am Ende des Monats bezahlt.",
          "Das Gehalt wird am Ende des Monats bezahlen.",
          "Das Gehalt wird am Ende der Monat bezahlt."
        ],
        why: "<b>Wird ... bezahlt</b> con el participio al final, y <b>des Monats</b> en genitivo masculino. El infinitivo <i>bezahlen</i> es incorrecto en la pasiva, y <i>der Monat</i> no es un genitivo."
      },
      {
        q: "Ayer el contrato fue firmado por ambas partes. ¿Qué frase?",
        opts: [
          "Der Vertrag wurde gestern von beiden Seiten unterschrieben.",
          "Der Vertrag wird gestern von beiden Seiten unterschrieben.",
          "Der Vertrag hat gestern von beiden Seiten unterschrieben."
        ],
        why: "<b>Wurde ... unterschrieben</b>: pasiva en Präteritum, con <i>von + dativo</i> para el agente. <i>Hat</i> convertiría al contrato en quien firma."
      },
      {
        q: "Completa: «Die Probezeit ___ dauert sechs Monate.»",
        opts: ["des Arbeitnehmers", "dem Arbeitnehmer", "den Arbeitnehmers"],
        why: "<b>Des Arbeitnehmers</b>: genitivo masculino singular, con <i>des</i> y <i>-s</i> en el nombre."
      },
      {
        q: "Completa: «Die Kündigungsfrist ___ Vertrags beträgt vier Wochen.»",
        hint: "genitivo masculino",
        why: "<b>Des</b>: <i>Vertrag</i> es masculino y el genitivo lleva <i>des</i> y <i>-s</i>: <i>des Vertrags</i>."
      },
      {
        q: "Completa la frase.",
        tr: "El empleado fue contratado en mayo (pasiva en Präteritum).",
        why: "<i>Der Arbeitnehmer wurde im Mai eingestellt.</i> Pasiva en Präteritum: <i>wurde</i> + participio <i>eingestellt</i>, que queda unido."
      },
      {
        q: "Relaciona cada palabra con su significado.",
        pairs: ["el período de prueba", "el preaviso", "el empleador", "el sueldo"]
      },
      {
        q: "Ordena las palabras.",
        tr: "El período de prueba del empleado dura seis meses.",
        why: "<i>Die Probezeit des Arbeitnehmers dauert sechs Monate.</i> El genitivo <i>des Arbeitnehmers</i> sigue al nombre <i>Probezeit</i>."
      },
      {
        q: "Traduce: «El sueldo se paga a final de mes.»",
        why: "<i>Das Gehalt wird am Ende des Monats bezahlt.</i> También valen <i>am Monatsende</i> y <i>ausgezahlt</i>."
      },
      {
        tr: "El contrato de trabajo fue firmado ayer por ambas partes. El período de prueba dura seis meses y el sueldo se paga a final de mes. El preaviso del contrato es de cuatro semanas.",
        why: "En <i>Arbeitsvertrag</i> la <b>ei</b> es [aɪ] y la <b>v</b> es [f]; en <i>unterschrieben</i> la <b>sch</b> es [ʃ] y la <b>ie</b> es larga [iː]; en <i>Probezeit</i> la <b>z</b> es [ts]."
      },
      {
        tr: "El sueldo del empleado se paga a final de mes.",
        why: "En <i>Arbeitnehmers</i> la <b>ei</b> es [aɪ] y la <b>eh</b> alarga la vocal [eː]; en <i>Monatsende</i> la <b>o</b> es larga [oː]; en <i>bezahlt</i> la <b>ah</b> alarga la vocal [aː]."
      }
    ]
  },
  "lesson:b1-u03-test": {
    theme: "Evaluación",
    title: "Test: Oficinas y contratos",
    objectives: [
      "comprobar la pasiva, el genitivo con wegen, während e innerhalb, um ... zu y damit"
    ],
    theory: [
      {
        p: "Diez preguntas sobre toda la unidad. Se aprueba con el 70%. No vuelvas a mirar las lecciones mientras respondes: si no recuerdas algo, es mejor volver a repasar."
      }
    ],
    exercises: [
      {
        q: "Completa: «Das Formular ___ am Schalter abgegeben.»",
        hint: "werden, presente",
        why: "<b>Wird</b>: pasiva de proceso en presente, sujeto singular."
      },
      {
        q: "Completa: «Der Mietvertrag ___ gestern unterschrieben.»",
        hint: "werden, Präteritum",
        why: "<b>Wurde</b>: la pista pide el Präteritum de <i>werden</i>, es decir, <i>wurde</i>. <i>Gestern</i> por sí solo no basta: la pasiva en Perfekt (<i>ist ... unterschrieben worden</i>) es otra forma, que aquí no se pide."
      },
      {
        q: "Completa: «Die Höhe ___ Miete steht im Vertrag.»",
        hint: "genitivo femenino",
        why: "<b>Der</b>: genitivo femenino singular."
      },
      {
        q: "Completa: «Ich schicke ein Foto, ___ er den Schaden sieht.»",
        hint: "finalidad, sujetos distintos",
        why: "<b>Damit</b>: <i>ich</i> y <i>er</i> son sujetos distintos, y el verbo conjugado va al final."
      },
      {
        q: "Ayer se abrió la cuenta. ¿Qué frase?",
        opts: [
          "Das Konto wurde gestern eröffnet.",
          "Das Konto wird gestern eröffnet.",
          "Das Konto haben gestern eröffnet."
        ],
        why: "<b>Wurde ... eröffnet</b>: pasiva en Präteritum. <i>Wird</i> es un presente, y <i>haben</i> no concuerda con <i>Konto</i>."
      },
      {
        q: "¿Qué frase es correcta?",
        opts: [
          "Während des Urlaubs bin ich nicht im Büro.",
          "Während der Urlaub bin ich nicht im Büro.",
          "Während des Urlaubs ich bin nicht im Büro."
        ],
        why: "<b>Während des Urlaubs</b>: preposición con genitivo, y el verbo <i>bin</i> justo después, en segunda posición."
      },
      {
        q: "Completa: «Er schickt eine E-Mail, ___ der Chef Bescheid weiß.»",
        opts: ["damit", "um", "ohne"],
        why: "<b>Damit</b>: los sujetos son distintos (<i>er</i> y <i>der Chef</i>) y el verbo conjugado va al final."
      },
      {
        q: "Relaciona cada expresión con su significado.",
        pairs: [
          "Se comprueba el formulario.",
          "a causa del tiempo",
          "mismo sujeto, infinitivo",
          "finalidad, verbo conjugado al final; admite sujetos iguales o distintos"
        ]
      },
      {
        tr: "El formulario se entrega en la ventanilla. A causa de la mudanza necesito una cuenta. Llamo para que alguien repare la calefacción.",
        why: "En <i>Schalter</i> la <b>sch</b> es [ʃ]; en <i>Umzugs</i> la <b>z</b> es [ts]; en <i>Heizung</i> la <b>ei</b> es [aɪ] y la <b>z</b> es [ts]; en <i>repariert</i> la <b>ie</b> es larga [iː]."
      },
      {
        tr: "El contrato de alquiler fue firmado y la fianza se paga por transferencia.",
        why: "En <i>Mietvertrag</i> la <b>ie</b> es larga [iː] y la <b>v</b> es [f]; en <i>unterschrieben</i> la <b>sch</b> es [ʃ]; en <i>überwiesen</i> la <b>ü</b> es una vocal anterior redondeada."
      }
    ]
  },
  "unit:b1-u04": {
    title: "Opiniones y medios",
    grammarNote: "dass en el estilo indirecto · Präteritum y Plusquamperfekt en los textos escritos · nachdem y bevor · zwar ... aber, sowohl ... als auch · declinación del adjetivo"
  },
  "lesson:b1-u04-l1": {
    theme: "Referir",
    title: "Ha dicho que ...",
    objectives: [
      "referir lo que alguien ha dicho con una subordinada con dass",
      "adaptar los pronombres al punto de vista de quien refiere",
      "referir una pregunta con ob o con una palabra interrogativa",
      "usar los verbos de comunicación en Perfekt: gesagt, erzählt, berichtet, behauptet"
    ],
    theory: [
      {
        h: "Referir con dass",
        p: "Para referir lo que alguien ha dicho se usa un verbo de comunicación (<em>sagen, erzählen, berichten, behaupten, meinen</em>) y una subordinada con <strong>dass</strong>. El verbo conjugado va <strong>al final</strong>, y delante de <em>dass</em> siempre hay coma: <em>Anna hat gesagt, dass sie keine Zeit hat.</em> Cuando se cuenta algo de palabra, el verbo de comunicación suele ir en Perfekt (<em>hat gesagt, hat erzählt</em>)."
      },
      {
        h: "Los pronombres cambian con el punto de vista",
        p: "Quien refiere habla desde otro punto de vista, así que las personas se adaptan. Anna dice <em>«Ich habe keine Zeit»</em>, y tú refieres <em>Anna hat gesagt, dass <strong>sie</strong> keine Zeit hat.</em> Si alguien te dice <em>«Ich helfe dir»</em>, tú refieres <em>Er hat gesagt, dass er <strong>mir</strong> hilft.</em> El sujeto se expresa siempre: en alemán no se puede omitir."
      },
      {
        h: "Preguntas y peticiones referidas",
        p: "Una pregunta de sí o no se convierte en una subordinada con <strong>ob</strong>, una pregunta con palabra interrogativa conserva esa palabra, y en los dos casos el verbo va al final: <em>Sie hat gefragt, ob ich mitkomme. Er hat gefragt, wann der Zug kommt.</em> Una petición se refiere normalmente con <em>sollen</em>: <em>Sie hat gesagt, dass ich bald kommen soll.</em>"
      },
      {
        h: "Sin dass",
        p: "Después de <em>sagen, meinen, glauben</em> se puede omitir <em>dass</em>: entonces el verbo queda en <strong>segunda posición</strong>, como en una oración normal. <em>Sie hat gesagt, sie hat keine Zeit.</em> es correcta, pero más coloquial; con <em>dass</em>, en cambio, el verbo conjugado va al final: <em>..., dass sie keine Zeit hat.</em>"
      },
      {
        contrast: "En español, al referir algo dicho en el pasado, se suele desplazar el tiempo: «No tengo tiempo» pasa a <em>dijo que no tenía tiempo</em> (concordancia de tiempos). El alemán no tiene esa regla: después de <em>hat gesagt</em> o <em>sagte</em> se mantiene normalmente el tiempo de las palabras originales (el presente se refiere al momento en que se dijeron, no garantiza que el hecho siga siendo cierto hoy): <em>Anna hat gesagt, dass sie keine Zeit <strong>hat</strong>.</em> Traducir <em>tenía</em> por <em>hatte</em> sitúa la falta de tiempo en el pasado. Además, el sujeto se expresa siempre (<em>dass <strong>sie</strong> keine Zeit hat</em>), y una petición, que en español va en subjuntivo (<em>me dijo que viniera pronto</em>), en alemán se refiere con <em>sollen</em> en indicativo: <em>Sie hat gesagt, dass ich bald kommen soll.</em>"
      },
      {
        trap: "El español usa <em>que</em> para todo: <em>dijo que no viene</em> y <em>el libro que leo</em>. El alemán separa las dos cosas: <em>dass</em>, con dos <em>s</em>, es la conjunción; <em>das</em>, con una sola, es artículo o pronombre relativo (<em>das Buch, das ich lese</em>). Y con <em>dass</em> el verbo conjugado va al final: <em>dass sie keine Zeit hat</em>, no <s>dass sie hat keine Zeit</s>. El verbo en segunda posición solo es posible en la versión sin <em>dass</em>, algo que el español, que no puede omitir el <em>que</em>, no conoce."
      },
      {
        tip: "Procedimiento en tres pasos: 1) elige el verbo de comunicación en Perfekt; 2) añade la coma y <em>dass</em> (u <em>ob</em> para las preguntas de sí o no); 3) reescribe la frase con las personas correctas y el verbo al final."
      }
    ],
    grammar: {
      title: "Del estilo directo al estilo indirecto",
      note: "verbo de comunicación en Perfekt + <b>dass</b> (afirmación) u <b>ob</b> (pregunta de sí o no) + verbo conjugado <b>al final</b>; los pronombres se adaptan a quien refiere.",
      table: {
        head: ["estilo directo", "estilo indirecto"],
        rows: [
          ["Anna: «Ich habe keine Zeit.»", "Anna hat gesagt, dass sie keine Zeit hat."],
          ["Tom: «Ich komme morgen.»", "Tom hat erzählt, dass er morgen kommt."],
          ["Anna und Tom: «Wir ziehen um.»", "Anna und Tom haben erzählt, dass sie umziehen."],
          ["Er: «Kommst du mit?»", "Er hat gefragt, ob ich mitkomme."],
          ["Sie: «Wann kommt der Zug?»", "Sie hat gefragt, wann der Zug kommt."]
        ]
      },
      examples: [
        { tr: "Anna ha dicho que no tiene tiempo.", note: "ich pasa a sie; verbo al final" },
        { tr: "Tom cuenta que viene mañana.", note: "presente con valor de futuro (morgen); sin cambio automático de tiempo" },
        { tr: "La noticia dice que los precios suben.", note: "también un texto puede «decir»" },
        { tr: "Ha preguntado si voy con ella.", note: "pregunta de sí o no: ob" },
        { tr: "Ha afirmado que no ha visto nada.", note: "behaupten + dass; Perfekt en la subordinada" },
        { tr: "Ha dicho que venga pronto.", note: "petición referida con sollen, en indicativo" }
      ]
    },
    vocab: [
      "la noticia",
      "la noticia breve, el comunicado",
      "la afirmación",
      "la declaración, el testimonio",
      "el informe, el reportaje",
      "el rumor",
      "la respuesta",
      "la pregunta",
      "contar",
      "afirmar, sostener",
      "informar",
      "responder, contestar"
    ],
    exercises: [
      {
        q: "Anna dice: «Ich habe keine Zeit.» ¿Cómo lo refieres?",
        opts: [
          "Anna sagt, dass sie keine Zeit hat.",
          "Anna sagt, dass ich keine Zeit habe.",
          "Anna sagt, dass sie hat keine Zeit."
        ],
        why: "<b>Sie</b> en lugar de <i>ich</i>, y el verbo <i>hat</i> al final de la subordinada. <i>Ich</i> seguiría siendo la persona de quien habla, no Anna."
      },
      {
        q: "Completa: «Tom hat gesagt, ___ er morgen kommt.»",
        hint: "conjunción, afirmación",
        why: "<b>Dass</b>: introduce una afirmación referida y manda el verbo al final."
      },
      {
        q: "Completa: «Sie fragt, ___ du mitkommst.»",
        hint: "pregunta de sí o no referida",
        why: "<b>Ob</b>: la pregunta original era «Kommst du mit?», de sí o no."
      },
      {
        q: "Paul dice: «Ich bin müde.» Completa: «Paul sagt, dass ___ müde ist.»",
        hint: "pronombre, 3.ª persona masculina",
        why: "<b>Er</b>: Paul es un hombre, y quien refiere no dice <i>ich</i>."
      },
      {
        q: "Completa: «Sie hat mir alles ___.»",
        hint: "erzählen, participio",
        why: "<b>Erzählt</b>: <i>hat erzählt</i>, el Perfekt de <i>erzählen</i>. El participio de los verbos débiles es <i>ge-</i> + raíz + <i>-t</i>, pero <i>erzählen</i> empieza por <i>er-</i> y no lleva <i>ge-</i>."
      },
      {
        q: "Completa la frase.",
        tr: "La noticia dice que los precios suben.",
        why: "<i>Die Meldung sagt, dass die Preise steigen.</i> Después de <i>dass</i>, el verbo <i>steigen</i> va al final."
      },
      {
        q: "Relaciona cada frase con su significado.",
        pairs: [
          "Afirma que es inocente.",
          "Ha preguntado si vengo.",
          "La noticia dice que nieva.",
          "Tom cuenta que se muda."
        ]
      },
      {
        q: "Traduce: «Anna ha dicho que no tiene tiempo.»",
        why: "<i>Anna hat gesagt, dass sie keine Zeit hat.</i> El presente <i>hat</i> repite el tiempo de las palabras de Anna; después de <i>hat gesagt</i> no hay que cambiar el tiempo automáticamente. También vale la versión sin <i>dass</i>, con el verbo en segunda posición: <i>Anna hat gesagt, sie hat keine Zeit.</i>"
      },
      {
        tr: "¿Ya has oído la noticia? Anna ha contado que se muda. Ha dicho que el piso es muy grande y ha preguntado si la ayudamos.",
        why: "En <i>Nachricht</i> la primera <b>ch</b> es [x] (después de <i>a</i>) y la segunda [ç] (después de <i>i</i>); en <i>umzieht</i> la <b>z</b> es [ts] y la <b>ie</b> es larga [iː]; en <i>sehr</i> la <b>e</b> es larga."
      },
      {
        tr: "Mi colega ha contado que viene mañana por la mañana.",
        why: "En <i>früh</i> la <b>ü</b> es redondeada y larga; en <i>kommt</i> la <b>o</b> es breve; en <i>dass</i> la <b>a</b> es breve y la <b>ss</b> es [s]."
      }
    ]
  },
  "lesson:b1-u04-l2": {
    theme: "Prensa",
    title: "Leer un artículo",
    objectives: [
      "reconocer y usar el Präteritum de los verbos débiles, fuertes y mixtos en los textos escritos",
      "formar el Plusquamperfekt con hatte o war y el participio",
      "usar nachdem con el Plusquamperfekt y bevor",
      "entender cómo un texto periodístico ordena los hechos en el tiempo"
    ],
    theory: [
      {
        h: "El Präteritum en lo escrito",
        p: "En los textos escritos que cuentan hechos pasados (artículos, informes, novelas), el tiempo narrativo normal es el <strong>Präteritum</strong>; en la conversación se usa más el Perfekt. Los verbos <strong>débiles</strong> toman <em>-te</em> (<em>meldete, machte</em>), los <strong>fuertes</strong> cambian la vocal de la raíz (<em>schrieb, ging, las</em>) y no tienen terminación en la 1.ª y la 3.ª persona del singular. Los verbos <strong>mixtos</strong> (<em>dachte, brachte</em>) cambian la raíz pero toman las terminaciones débiles. En lo hablado, <em>sein, haben</em> y los modales son muy frecuentes en Präteritum (<em>war, hatte, konnte</em>)."
      },
      {
        h: "El Plusquamperfekt: antes de otro hecho pasado",
        p: "Se forma con el auxiliar en Präteritum, <strong>hatte</strong> o <strong>war</strong>, y el participio al final: <em>Er hatte lange recherchiert. Der Zug war schon abgefahren.</em> El auxiliar es el mismo que en el Perfekt (<em>haben</em> o <em>sein</em>). Sirve para decir que un hecho ocurrió <strong>antes</strong> que otro: <em>Die Nachricht stand in der Zeitung, aber niemand hatte sie gelesen.</em>"
      },
      {
        h: "nachdem y bevor",
        p: "<strong>nachdem</strong> (después de que) introduce una subordinada con el verbo al final y, si la principal está en Präteritum, el <strong>Plusquamperfekt</strong>: <em>Nachdem der Minister gesprochen hatte, gingen die Gäste nach Hause.</em> <strong>bevor</strong> (antes de que) lleva normalmente el mismo tiempo que la principal: <em>Bevor die Zeitung den Artikel veröffentlichte, prüfte die Redaktion die Quelle.</em> Si la subordinada va delante, la principal empieza por el verbo conjugado."
      },
      {
        contrast: "El Präteritum alemán cubre a la vez el indefinido y el imperfecto: <em>schrieb</em> es <em>escribió</em> y también <em>escribía</em>, y <em>Die Zeitung erschien jeden Morgen</em> es <em>el periódico salía cada mañana</em>. El Plusquamperfekt corresponde al pluscuamperfecto (<em>había leído</em> = <em>hatte gelesen</em>); el pretérito anterior (<em>hubo hablado</em>) no tiene forma propia. Con el mismo sujeto, el español prefiere el infinitivo (<em>después de hablar, antes de publicar</em>); con <em>nachdem</em> y <em>bevor</em> el alemán necesita una <strong>subordinada con sujeto</strong> y verbo conjugado: <em>Nachdem der Minister gesprochen hatte, ...</em> Y donde el español pone subjuntivo (<em>antes de que publicaran, después de que hablara</em>), en estas narraciones de hechos pasados el alemán usa el indicativo: <em>bevor sie veröffentlichten</em>. El subjuntivo español no se traduce automáticamente por un Konjunktiv."
      },
      {
        trap: "El español dice <em>después de</em> tanto con un nombre (<em>después de la comida</em>) como con un infinitivo (<em>después de comer</em>). El alemán lo reparte: <em>nach</em> es una preposición y lleva un nombre en dativo (<em>nach dem Essen</em>); <em>nachdem</em> lleva una oración completa con el verbo al final, nunca un infinitivo. En la subordinada con <em>nachdem</em> los dos verbos van juntos al final, con el auxiliar en último lugar: <em>..., nachdem er gesprochen hatte</em>."
      },
      {
        tip: "Cuando leas un artículo, busca primero los verbos en Präteritum: son la historia. Los verbos en Plusquamperfekt (<em>hatte ... gesagt, war ... gekommen</em>) señalan lo que pasó <em>antes</em> de la historia. Con las tres formas básicas (infinitivo, Präteritum, participio) entiendes la mayoría de los artículos."
      }
    ],
    grammar: {
      title: "Präteritum y Plusquamperfekt",
      note: "<b>Präteritum</b> para la historia (<b>schrieb, ging, meldete</b>), <b>Plusquamperfekt</b> para lo que pasó antes (<b>hatte geschrieben, war gegangen</b>); <b>nachdem</b> + Plusquamperfekt; <b>bevor</b>: a menudo el mismo tiempo que la principal; también es posible el Plusquamperfekt en la principal para subrayar la anterioridad.",
      table: {
        head: ["infinitivo", "Präteritum (er/sie)", "participio"],
        rows: [
          ["schreiben", "schrieb", "geschrieben"],
          ["lesen", "las", "gelesen"],
          ["gehen", "ging", "gegangen"],
          ["sprechen", "sprach", "gesprochen"],
          ["erscheinen", "erschien", "erschienen"],
          ["melden", "meldete", "gemeldet"],
          ["denken", "dachte", "gedacht"],
          ["bringen", "brachte", "gebracht"]
        ]
      },
      examples: [
        { tr: "El periodista escribió el artículo por la noche.", note: "Präteritum fuerte: schrieb" },
        { tr: "El periódico salía cada mañana.", note: "erscheinen: erschien, también para el imperfecto" },
        { tr: "Después de que el ministro hablara, los invitados se fueron a casa.", note: "nachdem + Plusquamperfekt" },
        { tr: "Antes de que el periódico publicara el artículo, la redacción comprobó la fuente.", note: "bevor + Präteritum, en indicativo" },
        { tr: "Había investigado durante mucho tiempo antes de escribir.", note: "Plusquamperfekt: hatte recherchiert" },
        { tr: "La noticia estaba en el periódico, pero nadie la había leído.", note: "hatte ... gelesen: antes de la escena" }
      ]
    },
    vocab: [
      "el artículo",
      "el periódico",
      "el titular",
      "el título (de un texto)",
      "el periodista",
      "la fuente",
      "el lector",
      "la redacción",
      "publicar",
      "salir, publicarse",
      "investigar, documentarse",
      "informar, dar la noticia"
    ],
    exercises: [
      {
        q: "Elige la forma correcta: «Der Journalist ___ den Artikel am Abend.»",
        opts: ["schrieb", "schreibte", "geschrieben"],
        why: "<b>Schrieb</b>: <i>schreiben</i> es un verbo fuerte, el Präteritum cambia la vocal. <i>Schreibte</i> no existe; <i>geschrieben</i> es el participio y necesita un auxiliar."
      },
      {
        q: "Elige el auxiliar del Plusquamperfekt activo: «Nachdem die Redaktion die Quelle geprüft ___, veröffentlichte sie den Artikel.»",
        opts: ["hatte", "wurde", "war"],
        why: "<b>Hatte</b>: <i>prüfen</i> lleva <i>haben</i>, y con <i>nachdem</i> el tiempo es el Plusquamperfekt porque la principal está en Präteritum."
      },
      {
        q: "¿Qué frase tiene el orden correcto?",
        opts: [
          "Nachdem er den Artikel gelesen hatte, rief er die Redaktion an.",
          "Nachdem er hatte den Artikel gelesen, rief er die Redaktion an.",
          "Nachdem er den Artikel gelesen hatte, er rief die Redaktion an."
        ],
        why: "En la subordinada, el participio y el auxiliar van al final (<i>gelesen hatte</i>); después, la principal empieza por el verbo conjugado (<i>rief er</i>)."
      },
      {
        q: "Completa: «Die Zeitung ___ jeden Morgen.»",
        hint: "erscheinen, Präteritum, 3.ª persona",
        why: "<b>Erschien</b>: verbo fuerte, el Präteritum cambia la vocal de la raíz."
      },
      {
        q: "Completa: «Bevor er den Artikel ___, recherchierte er lange.»",
        hint: "schreiben, Präteritum, 3.ª persona",
        why: "<b>Schrieb</b>: aquí <i>bevor</i> lleva el mismo tiempo que la principal (es lo habitual; el Plusquamperfekt en la principal subrayaría la anterioridad), y es un verbo fuerte sin terminación."
      },
      {
        q: "Completa la frase.",
        tr: "Después de que el ministro hablara, los invitados se fueron a casa.",
        why: "<i>Nachdem der Minister gesprochen hatte, gingen die Gäste nach Hause.</i> El participio <i>gesprochen</i> y el auxiliar <i>hatte</i> van al final."
      },
      {
        q: "Relaciona cada frase con su significado.",
        pairs: [
          "Leía el periódico.",
          "Escribió un informe.",
          "El artículo salió ayer.",
          "La redacción comprobó la fuente."
        ]
      },
      {
        q: "Traduce: «El periodista escribió el artículo ayer por la noche.»",
        why: "<i>Der Journalist schrieb den Artikel gestern Abend.</i> En la conversación también se dice <i>hat ... geschrieben</i>, y la frase puede empezar por <i>Gestern Abend</i>."
      },
      {
        tr: "El periódico publicó el artículo el lunes. Después de que la redacción comprobara la fuente, el periodista escribió el título. Muchos lectores leyeron el artículo ya por la mañana.",
        why: "En <i>veröffentlichte</i> la <b>v</b> es [f] y la <b>ö</b> es redondeada; en <i>Quelle</i> la <b>qu</b> es [kv]; en <i>Überschrift</i> la <b>sch</b> es [ʃ]; en <i>Leser</i> la <b>s</b> entre vocales es sonora [z]."
      },
      {
        tr: "Después de haber escrito el informe, el periodista se fue a casa.",
        why: "En <i>Journalist</i> la <b>J</b> inicial es [ʒ], como en francés <i>jour</i>; en <i>Bericht</i> la <b>ch</b> es [ç]; en <i>geschrieben</i> la <b>sch</b> es [ʃ]; en <i>Hause</i> la <b>au</b> es [aʊ]."
      }
    ]
  },
  "lesson:b1-u04-l3": {
    theme: "Radio y pódcast",
    title: "zwar ... aber, sowohl ... als auch",
    objectives: [
      "conceder algo y luego contraponerlo con zwar ... aber",
      "unir dos elementos con sowohl ... als auch",
      "mantener el orden de las palabras después de aber",
      "hablar de radio, emisiones y pódcasts"
    ],
    theory: [
      {
        h: "zwar ... aber: es cierto, pero",
        p: "<strong>zwar</strong> admite un hecho y <strong>aber</strong> introduce el contraste: <em>Die Sendung ist zwar lang, aber sie ist interessant.</em> <em>Zwar</em> suele ir después del verbo, pero también puede abrir la frase: <em>Zwar ist die Sendung lang, aber sie ist interessant.</em> <em>Aber</em> ocupa la posición cero: el verbo de la segunda oración se queda en su sitio normal, en segunda posición después del sujeto."
      },
      {
        h: "sowohl ... als auch: tanto ... como",
        p: "<strong>sowohl ... als auch</strong> une dos elementos del mismo tipo: <em>Der Sender bringt sowohl Nachrichten als auch Musik.</em> Pueden ser dos sujetos, dos objetos, dos complementos. Con dos sujetos el verbo va en plural: <em>Sowohl Anna als auch Tom hören den Podcast.</em> Normalmente no hay coma entre los dos elementos."
      },
      {
        h: "Otra pareja: weder ... noch",
        p: "Para negar dos elementos se usa <strong>weder ... noch</strong> (ni ... ni): <em>Ich habe weder Zeit noch Lust.</em> La pareja ya niega, así que no se añade <em>nicht</em> ni <em>kein</em>."
      },
      {
        contrast: "<em>zwar ... aber</em> se parece a <em>si bien ...</em> o a <em>es cierto que ..., pero</em>, con una diferencia importante: <em>si bien</em> y <em>aunque</em> abren una subordinada, mientras que <em>zwar</em> es un simple adverbio dentro de una oración principal. Por eso el verbo sigue en segunda posición: <em>Die Sendung ist zwar lang</em>, sin mandar nada al final. <em>sowohl ... als auch</em> equivale a <em>tanto ... como</em>, y <em>weder ... noch</em> a <em>ni ... ni</em>. Cuando <em>ni ... ni</em> va detrás del verbo, el español exige un <em>no</em> delante (<em>no tengo ni tiempo ni ganas</em>); el alemán no lo admite: <em>Ich habe weder Zeit noch Lust.</em>"
      },
      {
        trap: "Por el <em>como</em> de <em>tanto ... como</em> es fácil escribir <em>wie</em>. <em>sowohl ... wie (auch)</em> existe, pero es menos frecuente; la forma habitual, y la que pide este curso, es <em>sowohl ... als auch</em>. Tampoco vale <s>sowohl ... aber</s> ni <s>sowohl ... und auch</s>. Y <em>aber</em>, igual que <em>pero</em>, no cambia el orden: <em>..., aber sie ist interessant</em>, no <s>aber ist sie interessant</s> ni <s>aber sie interessant ist</s>."
      },
      {
        tip: "Si quieres restar peso a un hecho y dárselo al segundo, pon el primero con <em>zwar</em> y deja que tu opinión llegue después de <em>aber</em>: <em>Der Podcast ist zwar neu, aber er ist wirklich gut.</em> Quien te lee entiende de dónde viene tu opinión."
      }
    ],
    grammar: {
      title: "zwar ... aber y sowohl ... als auch",
      note: "<b>zwar ... aber</b> concede y contrapone; <b>aber</b> ocupa la posición cero. <b>sowohl ... als auch</b> une dos elementos; con dos sujetos el verbo va en plural.",
      table: {
        head: ["pareja", "significado", "ejemplo"],
        rows: [
          ["zwar ... aber", "es cierto que ..., pero", "Die Sendung ist zwar lang, aber sie ist interessant."],
          ["sowohl ... als auch", "tanto ... como", "Ich höre sowohl Radio als auch Podcasts."],
          ["weder ... noch", "ni ... ni", "Ich habe weder Zeit noch Lust."]
        ]
      },
      examples: [
        { tr: "La emisión es larga, es cierto, pero es interesante.", note: "aber: posición cero, orden normal" },
        { tr: "El programa es bueno, es cierto, pero tengo poco tiempo.", note: "Zwar abre la frase: el verbo va justo después" },
        { tr: "La emisora pone tanto noticias como música.", note: "sowohl ... als auch con dos objetos" },
        { tr: "Escucho tanto la radio como pódcasts.", note: "sin coma entre los dos elementos" },
        { tr: "Tanto Anna como Tom escuchan el pódcast.", note: "dos sujetos: verbo en plural" },
        { tr: "Es cierto que no tiene mucho tiempo, pero escucha un pódcast cada día.", note: "zwar después del verbo, luego aber" }
      ]
    },
    vocab: [
      "la radio",
      "la emisión, el programa",
      "la emisora",
      "el programa",
      "el pódcast",
      "la entrevista",
      "el comentario",
      "el oyente",
      "escuchar, prestar atención",
      "encender",
      "apagar",
      "suscribirse"
    ],
    exercises: [
      {
        q: "¿Qué frase tiene el orden correcto?",
        opts: [
          "Die Sendung ist zwar lang, aber sie ist interessant.",
          "Die Sendung ist zwar lang, aber ist sie interessant.",
          "Die Sendung ist zwar lang, aber sie interessant ist."
        ],
        why: "Después de <b>aber</b> el verbo se queda en segunda posición, detrás del sujeto: <i>aber sie ist interessant</i>. <i>Aber</i> no manda el verbo al final."
      },
      {
        q: "¿Qué pareja significa «tanto ... como»?",
        opts: ["sowohl ... als auch", "zwar ... aber", "weder ... noch"],
        why: "<b>Sowohl ... als auch</b>: une dos elementos. <i>Zwar ... aber</i> concede y contrapone, <i>weder ... noch</i> niega."
      },
      {
        q: "¿Qué frase significa «Escucho tanto la radio como pódcasts»?",
        opts: [
          "Ich höre sowohl Radio als auch Podcasts.",
          "Ich höre zwar Radio als auch Podcasts.",
          "Ich höre sowohl Radio aber Podcasts."
        ],
        why: "<b>Sowohl ... als auch</b> es la pareja correcta. <i>Zwar</i> pide <i>aber</i>, y <i>sowohl</i> pide <i>als auch</i>: las dos parejas no se mezclan."
      },
      {
        q: "Completa: «Das Programm ist ___ gut, aber ich habe wenig Zeit.»",
        hint: "concesión, antes de aber",
        why: "<b>Zwar</b>: admite que el programa es bueno, y luego <i>aber</i> introduce el contraste."
      },
      {
        q: "Completa: «Der Sender bringt sowohl Nachrichten ___ auch Musik.»",
        hint: "segunda parte de la pareja, en la forma que enseña esta lección",
        why: "<b>Als</b>: la pareja es <i>sowohl ... als auch</i>."
      },
      {
        q: "Completa con la pareja zwar ... aber: «Die Sendung ist ___ kurz, ___ sie ist sehr interessant.»",
        why: "<b>Zwar ... aber</b>: la primera palabra admite un hecho, la segunda introduce el contraste."
      },
      {
        q: "Relaciona cada frase con su significado.",
        pairs: [
          "La entrevista es corta, es cierto, pero buena.",
          "Escucho tanto la radio como pódcasts.",
          "El pódcast sale todos los lunes.",
          "Los oyentes encienden la radio."
        ]
      },
      {
        q: "Ordena las palabras.",
        tr: "El programa es largo, es cierto, pero es interesante.",
        why: "<i>Das Programm ist zwar lang, aber es ist interessant</i>: <i>zwar</i> después del verbo, luego <i>aber</i> y el verbo <i>ist</i> en segunda posición."
      },
      {
        tr: "Escucho la radio todas las mañanas. La emisora pone tanto noticias como música. La emisión es larga, es cierto, pero es realmente interesante.",
        why: "En <i>höre</i> la <b>ö</b> es larga y redondeada; en <i>sowohl</i> la <b>s</b> es sonora [z] y la <b>w</b> es [v]; en <i>Nachrichten</i> la primera <b>ch</b> es [x] y la segunda [ç]; en <i>wirklich</i> la <b>w</b> es [v] y la <b>ch</b> final es [ç]."
      },
      {
        tr: "Escucho tanto la radio como pódcasts, pero no todos los días.",
        why: "En <i>sowohl</i> la <b>s</b> es sonora [z] y la <b>w</b> es [v]; en <i>höre</i> la <b>ö</b> es redondeada; en <i>nicht</i> la <b>ch</b> es [ç]; en <i>auch</i> la <b>ch</b> es [x], después de <i>au</i>."
      }
    ]
  },
  "lesson:b1-u04-l4": {
    theme: "Debate",
    title: "Defender la propia opinión",
    objectives: [
      "usar las terminaciones del adjetivo después del artículo determinado, después de ein y sin artículo",
      "expresar acuerdo y desacuerdo con fórmulas fijas",
      "construir un argumento con zwar ... aber y sowohl ... als auch",
      "leer y usar adjetivos con terminación en textos de opinión"
    ],
    theory: [
      {
        h: "Las tres series de terminaciones",
        p: "Delante del nombre, el adjetivo toma una terminación que depende de lo que lo precede. Después del <strong>artículo determinado</strong> (<em>der, die, das</em>, y también <em>dieser, jeder</em>) las terminaciones son casi siempre <strong>-en</strong>; <strong>-e</strong> aparece en el nominativo singular de los tres géneros y en el acusativo del femenino y del neutro: <em>der gute Beitrag, die gute Idee, das gute Beispiel, die guten Argumente.</em>"
      },
      {
        h: "Después de ein, kein y los posesivos",
        p: "Donde <em>ein</em> no tiene terminación, la lleva el adjetivo: <strong>ein guter</strong> Standpunkt (masculino nominativo), <strong>ein gutes</strong> Argument (neutro nominativo y acusativo). En el resto valen las mismas terminaciones que con el artículo determinado: <em>eine gute Idee, einen guten Beitrag, mit einem guten Argument.</em>"
      },
      {
        h: "Sin artículo",
        p: "Sin artículo, el adjetivo es el que lleva la marca de género y caso, con las terminaciones del artículo: <em>interessante Kommentare</em> (plural), <em>guter Rat, gutes Wetter, gute Laune</em>. La excepción es el genitivo masculino y neutro, donde el adjetivo toma <strong>-en</strong> porque el nombre ya tiene <em>-(e)s</em>: <em>guten Weines, guten Wetters</em>. Varios adjetivos delante del mismo nombre suelen llevar la misma terminación: <em>ein klarer, gut begründeter Standpunkt.</em>"
      },
      {
        h: "Fórmulas para debatir",
        p: "Para expresar acuerdo: <em>Ich stimme dir zu. Das sehe ich auch so.</em> Para el desacuerdo: <em>Da muss ich widersprechen. Ich bin anderer Meinung.</em> Para presentar tu postura: <em>Ich bin der Meinung, dass ... Meiner Ansicht nach ...</em> Para reconocer un punto y luego rebatirlo: <em>Das ist zwar richtig, aber ...</em>; para sumar razones: <em>Das hat sowohl Vorteile als auch Nachteile.</em>"
      },
      {
        contrast: "En español el adjetivo concuerda en género y número y suele ir detrás del nombre (<em>un comentario interesante</em>); el caso no cambia nada: <em>un buen argumento</em> es igual como sujeto que como complemento. En alemán el adjetivo atributivo va siempre <strong>delante</strong>, y su terminación depende también del <strong>caso</strong> y de lo que lo precede: <em>ein guter Standpunkt</em> (nominativo), <em>einen guten Standpunkt</em> (acusativo). Al revés que en español, el adjetivo después de <em>sein</em> no concuerda: <em>la idea es buena</em>, pero <em>Die Idee ist gut</em>, <em>Die Argumente sind gut</em>."
      },
      {
        trap: "Muchos adjetivos españoles distinguen el género con <em>-o</em>/<em>-a</em> (otros, como <em>interesante</em>, no cambian), y es tentador buscar en alemán una terminación fija por género: <em>-er</em> siempre con el masculino. Pero después del artículo determinado no aparece <em>-er</em>: <em>der gute Standpunkt</em>, no <s>der guter Standpunkt</s>. <em>-er</em> o <em>-es</em> aparecen solo donde el artículo no muestra la marca: <em>ein guter Standpunkt</em>, <em>ein gutes Argument</em>. La terminación no depende solo del género, sino de lo que va delante."
      },
      {
        tip: "Para elegir la terminación, pregúntate: ¿hay una marca de género y caso antes del adjetivo? Si la hay (<em>der, die, dem, einer</em>), el adjetivo toma <em>-e</em> o <em>-en</em>; si falta, la muestra el adjetivo."
      }
    ],
    grammar: {
      title: "El adjetivo después del artículo determinado",
      note: "después de <b>der, die, das</b>: <b>-e</b> en el nominativo singular y en el acusativo del femenino y del neutro, <b>-en</b> en el resto. Después de <b>ein</b>, la terminación <b>-er / -es</b> aparece donde <i>ein</i> no la muestra.",
      table: {
        head: ["", "m.", "f.", "n.", "plural"],
        rows: [
          ["nominativo", "der gute Beitrag", "die gute Idee", "das gute Beispiel", "die guten Argumente"],
          ["acusativo", "den guten Beitrag", "die gute Idee", "das gute Beispiel", "die guten Argumente"],
          ["dativo", "dem guten Beitrag", "der guten Idee", "dem guten Beispiel", "den guten Argumenten"],
          ["genitivo", "des guten Beitrags", "der guten Idee", "des guten Beispiels", "der guten Argumente"]
        ]
      },
      examples: [
        { tr: "Es un buen punto de vista.", note: "ein + masculino nominativo: -er" },
        { tr: "Tengo un buen argumento.", note: "ein + neutro acusativo: -es" },
        { tr: "Con el buen argumento convence a todos.", note: "dativo neutro después de dem: -en" },
        { tr: "Escribe una contribución larga.", note: "einen + masculino acusativo: -en" },
        { tr: "Leo con gusto comentarios interesantes.", note: "sin artículo, plural: -e" },
        { tr: "Es cierto que defiende una opinión clara, pero también escucha.", note: "eine + femenino acusativo: -e" }
      ]
    },
    vocab: [
      "la opinión, el parecer",
      "el argumento",
      "el punto de vista",
      "el debate, la discusión",
      "el ejemplo",
      "la ventaja",
      "la desventaja",
      "la contribución, la intervención",
      "convencer",
      "contradecir, llevar la contraria",
      "justificar, fundamentar",
      "estar de acuerdo"
    ],
    exercises: [
      {
        q: "¿Qué frase es correcta?",
        opts: [
          "Das ist ein guter Standpunkt.",
          "Das ist ein gute Standpunkt.",
          "Das ist ein guten Standpunkt."
        ],
        why: "<b>Ein guter Standpunkt</b>: masculino nominativo, y <i>ein</i> no tiene terminación, así que la muestra el adjetivo con <i>-er</i>."
      },
      {
        q: "Completa: «mit der ___ Idee»",
        opts: ["guten", "gute", "guter"],
        why: "<b>Guten</b>: dativo femenino después del artículo determinado, así que <i>-en</i>."
      },
      {
        q: "Completa: «Ich lese einen ___ Beitrag.»",
        hint: "interessant, acusativo masculino después de einen",
        why: "<b>Interessanten</b>: acusativo masculino después de <i>einen</i>, así que <i>-en</i>."
      },
      {
        q: "Completa: «Sie hat ein ___ Argument.»",
        hint: "stark, neutro acusativo después de ein",
        why: "<b>Starkes</b>: neutro acusativo después de <i>ein</i>, que no tiene terminación, así que <i>-es</i>."
      },
      {
        q: "Completa la frase: «Mit dem ___ Beispiel ___ sie alle.»",
        why: "<b>Guten</b> (dativo neutro después de <i>dem</i>) y <b>überzeugt</b> (presente, 3.ª persona)."
      },
      {
        q: "Relaciona cada fórmula con su significado.",
        pairs: [
          "Soy de la opinión de que ...",
          "En esto tengo que llevar la contraria.",
          "Estoy de acuerdo contigo.",
          "Es un argumento de peso."
        ]
      },
      {
        q: "Ordena las palabras.",
        tr: "Soy de la opinión de que es una gran ventaja.",
        why: "<i>Ich bin der Meinung, dass das ein großer Vorteil ist.</i> <i>Dass</i> manda el verbo <i>ist</i> al final, y <i>ein großer Vorteil</i> es masculino nominativo."
      },
      {
        q: "Traduce: «He leído un artículo largo.»",
        why: "<i>Ich habe einen langen Artikel gelesen.</i> <i>Artikel</i> es masculino, acusativo: <i>einen langen</i>. También vale el Präteritum: <i>Ich las einen langen Artikel.</i>"
      },
      {
        tr: "Soy de la opinión de que es un buen plan. Tiene tanto ventajas como desventajas, pero las ventajas son mayores. Es cierto que cuesta dinero, pero da un buen resultado.",
        why: "En <i>Meinung</i> la <b>ei</b> es [aɪ]; en <i>Vorteile</i> la <b>V</b> es [f] y la <b>ei</b> es [aɪ]; en <i>Nachteile</i> la <b>ch</b> es [x]; en <i>größer</i> la <b>ö</b> es larga y redondeada y la <b>ß</b> es [s]."
      },
      {
        tr: "Es un argumento de peso, pero yo soy de otra opinión.",
        why: "En <i>starkes</i> la <b>st</b> inicial es [ʃt]; en <i>Argument</i> la <b>g</b> es [g]; en <i>aber</i> la <b>a</b> es larga; en <i>Meinung</i> la <b>ei</b> es [aɪ]."
      }
    ]
  },
  "lesson:b1-u04-test": {
    theme: "Prueba",
    title: "Test: Opiniones y medios",
    objectives: [
      "comprobar el estilo indirecto, nachdem y bevor, zwar ... aber y sowohl ... als auch, la declinación del adjetivo"
    ],
    theory: [
      {
        p: "Doce preguntas sobre toda la unidad. Se aprueba con el 70 %. No vuelvas a mirar las lecciones mientras respondes: si no recuerdas algo, es mejor volver a repasar."
      }
    ],
    exercises: [
      {
        tr: "El Plusquamperfekt de gehen, todas las personas.",
        why: "<i>War gegangen, warst gegangen, war gegangen, waren gegangen, wart gegangen, waren gegangen</i>: <i>sein</i> en Präteritum + participio."
      },
      {
        q: "Completa: «Anna hat gesagt, ___ sie keine Zeit hat.»",
        hint: "conjunción, afirmación referida",
        why: "<b>Dass</b>: introduce una afirmación referida y manda el verbo al final."
      },
      {
        q: "Completa: «Nachdem sie die Nachricht gelesen ___, rief sie an.»",
        hint: "Plusquamperfekt, haben",
        why: "<b>Hatte</b>: <i>nachdem</i> con la principal en Präteritum (<i>rief</i>) pide el Plusquamperfekt."
      },
      {
        q: "Completa con el Präteritum de veröffentlichen: «Bevor die Zeitung den Artikel ___, prüfte die Redaktion die Quelle.»",
        hint: "Präteritum, 3.ª persona del singular",
        why: "<b>Veröffentlichte</b>: aquí <i>bevor</i> lleva el mismo tiempo que la principal (<i>prüfte</i>), el Präteritum. Verbo débil: raíz + <i>-te</i>."
      },
      {
        q: "Completa: «Die Sendung ist ___ kurz, aber sie ist sehr interessant.»",
        hint: "primer elemento de la pareja con aber",
        why: "<b>Zwar</b>: <i>zwar ... aber</i> reconoce un punto y luego lo rebate."
      },
      {
        q: "Completa: «Er hört sowohl Radio ___ auch Podcasts.»",
        hint: "segundo elemento de la pareja con sowohl, en la forma de la lección",
        why: "<b>Als</b>: la pareja es <i>sowohl ... als auch</i>."
      },
      {
        q: "Completa con el adjetivo kurz: «Sie schreibt einen ___ Kommentar.»",
        hint: "kurz, acusativo masculino después de einen",
        why: "<b>Kurzen</b>: en el acusativo masculino después de <i>einen</i>, el adjetivo toma <i>-en</i>."
      },
      {
        q: "Tom dice: «Ich komme morgen.» ¿Qué frase lo refiere sin dass?",
        opts: [
          "Tom hat gesagt, er kommt morgen.",
          "Tom hat gesagt, er morgen kommt.",
          "Tom hat gesagt, dass er kommt morgen."
        ],
        why: "<b>Tom hat gesagt, er kommt morgen.</b> Sin <i>dass</i> el verbo se queda en segunda posición; el verbo al final corresponde solo a la versión con <i>dass</i>, y con <i>dass</i> no puede ir en segunda posición."
      },
      {
        q: "¿Qué frase es correcta?",
        opts: [
          "Das ist ein gutes Argument.",
          "Das ist ein guter Argument.",
          "Das ist ein gute Argument."
        ],
        why: "<b>Ein gutes Argument</b>: <i>Argument</i> es neutro y <i>ein</i> no muestra la terminación en el nominativo neutro, así que la lleva el adjetivo: <i>-es</i>."
      },
      {
        q: "Traduce: «Tom ha dicho que tiene un buen argumento.»",
        why: "<i>Tom hat gesagt, dass er ein gutes Argument hat.</i> También vale sin <i>dass</i>, con el verbo en segunda posición, o con <i>sagte</i>. El presente <i>hat</i> repite el tiempo de las palabras de Tom, sin cambio automático."
      },
      {
        tr: "Anna ha contado que lee el periódico todas las mañanas. Después de haber leído el titular, llamó a una amiga. Es cierto que el artículo es largo, pero tiene un punto de vista claro.",
        why: "En <i>Zeitung</i> la <b>z</b> es [ts] y la <b>ei</b> es [aɪ]; en <i>Schlagzeile</i> la <b>sch</b> es [ʃ]; en <i>Freundin</i> la <b>eu</b> es [ɔʏ]."
      },
      {
        tr: "Ha dicho que escucha tanto la radio como pódcasts.",
        why: "En <i>sowohl</i> la <b>w</b> es [v] y la <b>o</b> de <i>wohl</i> es larga; en <i>Radio</i> la <b>a</b> es larga; en <i>Podcasts</i> la <b>c</b> es [k] y la <b>ts</b> final es [ts]."
      }
    ]
  }
});
