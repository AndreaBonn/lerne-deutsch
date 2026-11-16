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
  }
});
