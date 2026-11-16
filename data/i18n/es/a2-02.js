/* ============================================================
   Learner-language text (es) for data/core/a2-02.js, units a2-u05, a2-u06 and a2-u07.
   Keys point at ids in the neutral layer; arrays merge by index,
   so their length has to match core.
   Checked by scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("es", {
  "unit:a2-u05": {
    title: "Casa y barrio",
    grammarNote: "adjetivo después de ein, kein y posesivo · stellen/stehen, legen/liegen · género de los compuestos · Könnten Sie ...?"
  },
  "lesson:a2-u05-l1": {
    theme: "Buscar casa",
    title: "Busco un piso luminoso",
    objectives: [
      "leer un anuncio de alquiler con adjetivos delante del nombre",
      "elegir la terminación del adjetivo después de ein, kein y los posesivos",
      "describir una vivienda con hell, ruhig, günstig, möbliert"
    ],
    theory: [
      {
        h: "El adjetivo delante del nombre",
        p: "Delante del nombre el adjetivo toma una <strong>terminación</strong> que indica género, número y caso. Después de <em>ein, kein</em> y de los posesivos (<em>mein, dein, sein ...</em>) la regla práctica es una sola: donde <em>ein</em> <strong>no tiene terminación</strong> (masculino nominativo, neutro nominativo y acusativo) la lleva el adjetivo, <strong>-er</strong> o <strong>-es</strong>. En el femenino nominativo y acusativo el adjetivo toma <strong>-e</strong>; en todos los demás casos, el dativo incluido, <strong>-en</strong>. <em>Ich suche eine helle Wohnung. Die Wohnung hat einen großen Balkon. Das ist ein altes Haus.</em>"
      },
      {
        contrast: "En español el adjetivo suele ir <strong>después</strong> del nombre y concuerda en género y número: <em>una casa luminosa</em>. En alemán va <strong>antes</strong> y además lleva el caso: <em>eine helle Wohnung</em> (nominativo o acusativo), <em>einen großen Balkon</em> (acusativo masculino). Después de <em>sein</em>, en cambio, no cambia: <em>Die Wohnung ist hell</em>, sin terminación, mientras que en español «la vivienda es luminosa» sí concuerda. Cuidado con el género: «piso» es masculino en español, pero <em>die Wohnung</em> es femenino, así que «un piso luminoso» es <em>eine helle Wohnung</em>, no «ein heller Wohnung». Y «casa» es femenino, pero <em>das Haus</em> es neutro."
      },
      {
        trap: "El error más frecuente es confundir <strong>-en</strong> y <strong>-er</strong>. <em>-er</em> aparece en el masculino nominativo (<em>ein neuer Balkon</em>); ya en el acusativo pasa a ser <em>-en</em> (<em>einen neuen Balkon</em>). Además, <em>Wohnung</em> y <em>Haus</em> no coinciden con «casa»: <em>die Wohnung</em> es el piso o apartamento en que vives, sea alquilado o propio, y <em>das Haus</em> es el edificio o la casa entera."
      },
      {
        tip: "<em>dunkel</em> pierde la <em>e</em> delante de la terminación: <em>eine dunkle Küche, ein dunkles Zimmer</em>. Con los posesivos vale la misma regla que con <em>ein</em>: <em>mein neuer Nachbar, meine neue Wohnung</em>. En plural, después de <em>kein</em> y de los posesivos, el adjetivo toma <em>-en</em>: <em>keine neuen Möbel</em>."
      }
    ],
    grammar: {
      title: "Adjetivo después de ein, kein y posesivo",
      note: "Donde <b>ein</b> no tiene terminación la lleva el adjetivo (<b>-er, -es</b>); femenino nominativo y acusativo <b>-e</b>; en los demás casos <b>-en</b>.",
      table: {
        head: ["caso", "masculino", "femenino", "neutro"],
        rows: [
          ["nominativo", "ein neuer Balkon", "eine neue Küche", "ein neues Zimmer"],
          ["acusativo", "einen neuen Balkon", "eine neue Küche", "ein neues Zimmer"],
          ["dativo", "einem neuen Balkon", "einer neuen Küche", "einem neuen Zimmer"]
        ]
      },
      examples: [
        { tr: "Busco un piso luminoso.", note: "Wohnung es femenino: eine helle" },
        { tr: "El piso tiene un balcón grande.", note: "acusativo masculino: einen großen" },
        { tr: "Es una casa vieja.", note: "neutro nominativo: ein altes" },
        { tr: "No tenemos una cocina nueva.", note: "kein + femenino: keine neue" },
        { tr: "Este es mi nuevo vecino.", note: "posesivo como ein: mein neuer" },
        { tr: "Ella vive en un piso pequeño.", note: "dativo femenino: einer kleinen" }
      ]
    },
    vocab: [
      "el piso, el apartamento",
      "el alquiler",
      "el balcón",
      "el vecino",
      "el anuncio",
      "luminoso, claro",
      "oscuro",
      "tranquilo",
      "barato, económico",
      "amueblado",
      "buscar",
      "alquilar (como inquilino)"
    ],
    exercises: [
      {
        q: "¿Cómo se dice «Busco un piso luminoso»?",
        opts: ["Ich suche eine helle Wohnung.", "Ich suche ein helle Wohnung.", "Ich suche eine heller Wohnung."],
        why: "<i>Wohnung</i> es femenino: después de <i>eine</i> el adjetivo toma <b>-e</b>, es decir, <i>helle</i>."
      },
      {
        q: "Completa con la terminación correcta: «Das ist ein ___ Haus.» (alt)",
        opts: ["alter", "altes", "alten"],
        why: "<i>Haus</i> es neutro y en nominativo <i>ein</i> no tiene terminación: la lleva el adjetivo, <b>-es</b>."
      },
      {
        q: "¿Qué frase es correcta?",
        opts: [
          "Wir wohnen in einer ruhige Straße.",
          "Wir wohnen in einer ruhigen Straße.",
          "Wir wohnen in einer ruhiger Straße."
        ],
        why: "Después de <i>in</i> con <i>wo?</i> el caso es el dativo, y el dativo lleva <b>-en</b>: <i>in einer ruhigen Straße</i>."
      },
      {
        q: "Completa: «Das ist meine ___ Wohnung.» (neu, con la terminación)",
        hint: "posesivo + femenino nominativo",
        why: "Después de <i>meine</i> el femenino nominativo lleva <b>-e</b>: <i>neue</i>."
      },
      {
        q: "Une cada adjetivo con su significado.",
        pairs: ["luminoso", "oscuro", "tranquilo", "barato"]
      },
      {
        tr: "Busco un piso tranquilo y barato.",
        why: "<i>Ich suche eine ruhige und günstige Wohnung</i>: dos adjetivos unidos por <i>und</i> llevan la misma terminación, <b>-e</b>. También vale el orden inverso."
      },
      {
        q: "Completa la frase.",
        tr: "El piso tiene un balcón grande y una cocina nueva.",
        why: "<i>Balkon</i> es masculino en acusativo: <b>einen großen</b> Balkon. <i>Küche</i> es femenino: <b>eine neue</b> Küche."
      },
      {
        tr: "Buscamos un piso barato.",
        why: "El verbo conjugado va en segunda posición: <i>Wir suchen eine günstige Wohnung</i>. El adjetivo <i>günstige</i> toma <b>-e</b> porque <i>Wohnung</i> es femenino."
      },
      {
        tr: "El piso tiene un balcón grande y una cocina nueva.",
        why: "En <i>großen</i> la <b>ß</b> es una <b>s</b> sorda y la <b>o</b> es larga; en <i>Küche</i> la <b>ü</b> es breve y abierta [ʏ] y la <b>ch</b> es [ç], un sonido más suave que [x] (la «j» española): <i>Küche</i> [ˈkʏçə]."
      },
      {
        tr: "Busco un piso luminoso y tranquilo.",
        why: "En <i>Wohnung</i> la <b>h</b> no se pronuncia y alarga la <b>o</b>; en <i>helle</i> la <b>h</b> inicial es un soplo ligero (no es la «j» española) y la <b>ll</b> indica una <b>e</b> breve, no una «ll» como la de «calle»."
      }
    ]
  },
  "lesson:a2-u05-l2": {
    theme: "Amueblar",
    title: "¿Dónde pongo el sofá?",
    objectives: [
      "usar wohin? con el acusativo y wo? con el dativo",
      "elegir entre stellen/stehen y legen/liegen",
      "decir dónde se ponen los muebles y dónde están"
    ],
    theory: [
      {
        h: "¿wohin? o ¿wo?",
        p: "Las preposiciones <em>in, an, auf, vor, hinter, neben, über, unter, zwischen</em> admiten dos casos. Si la frase indica el <strong>destino</strong> (<strong>wohin?</strong>, ¿hacia dónde?) el caso es el <strong>acusativo</strong>; si indica el <strong>lugar</strong> (<strong>wo?</strong>, ¿dónde?) es el <strong>dativo</strong>, incluso cuando dentro del lugar hay movimiento (<em>Ich laufe im Garten</em>). <em>Ich stelle das Sofa an die Wand</em> (wohin?), <em>Das Sofa steht an der Wand</em> (wo?). Contracciones: <em>in das → ins, an das → ans, auf das → aufs, in dem → im, an dem → am</em>."
      },
      {
        p: "El alemán elige el verbo según la posición del objeto. <strong>stellen / stehen</strong> para lo que está de pie (<em>die Lampe, der Schrank, das Regal</em>), <strong>legen / liegen</strong> para lo que está tumbado (<em>das Buch, der Teppich</em>). <em>stellen</em> y <em>legen</em> indican un destino y responden a <em>wohin?</em>; <em>stehen</em> y <em>liegen</em> indican un lugar y responden a <em>wo?</em>. El caso afecta al complemento espacial introducido por una preposición de doble régimen (<em>auf, in, an, unter</em>...): acusativo para <em>wohin?</em>, dativo para <em>wo?</em>."
      },
      {
        contrast: "El español usa un verbo para todo, <em>poner</em>, y la misma preposición para el estado y para el movimiento: <em>pongo el libro en la mesa, el libro está en la mesa</em>. Los nombres no cambian de forma, y a ¿dónde? solo responde el contexto (existe ¿adónde?, pero casi nunca se usa para colocar objetos). El alemán distingue dos veces: con el <strong>verbo</strong> (<em>legen</em> o <em>stellen</em>, <em>liegen</em> o <em>stehen</em>) y con el <strong>caso</strong> (acusativo o dativo): <em>Ich lege das Buch auf den Tisch. Das Buch liegt auf dem Tisch.</em> Y tiene dos preguntas: <em>wohin?</em> (¿adónde?) y <em>wo?</em> (¿dónde?). Como en el español <em>al</em> y <em>del</em>, el alemán contrae preposición y artículo: <em>im, am, ins, ans, aufs</em>."
      },
      {
        trap: "No traduzcas «poner» con un solo verbo. <em>Ich stelle das Buch auf den Tisch</em> se dice si el libro está de pie, <em>Ich lege das Buch auf den Tisch</em> si está tumbado: depende del objeto y de su posición, no de la palabra española. Con <em>stehen</em> y <em>liegen</em>, que indican un lugar (<em>wo?</em>), el complemento con una preposición de doble régimen va en dativo: <em>Die Lampe steht auf dem Tisch</em>, nunca «auf den Tisch»."
      }
    ],
    grammar: {
      title: "wohin? + acusativo, wo? + dativo",
      note: "Con una preposición de doble régimen: <b>wohin?</b> (destino, con stellen, legen) = acusativo; <b>wo?</b> (lugar, con stehen, liegen) = dativo.",
      table: {
        head: ["pregunta", "verbo", "ejemplo"],
        rows: [
          ["wohin? (acusativo)", "stellen", "Ich stelle die Lampe in die Ecke."],
          ["wo? (dativo)", "stehen", "Die Lampe steht in der Ecke."],
          ["wohin? (acusativo)", "legen", "Ich lege den Teppich unter den Tisch."],
          ["wo? (dativo)", "liegen", "Der Teppich liegt unter dem Tisch."]
        ]
      },
      examples: [
        { tr: "Pongo el sofá contra la pared.", note: "wohin?: an die Wand es acusativo" },
        { tr: "El sofá está contra la pared.", note: "stehen + dativo: an der Wand" },
        { tr: "Pongo la alfombra debajo de la mesa.", note: "wohin?: unter den Tisch es acusativo" },
        { tr: "La alfombra está debajo de la mesa.", note: "liegen + dativo: unter dem Tisch" },
        { tr: "¿Dónde pones la lámpara? En la esquina.", note: "wohin? se responde con el acusativo: in die Ecke" },
        { tr: "La lámpara está en la esquina.", note: "wo? se responde con el dativo: in der Ecke" }
      ]
    },
    vocab: [
      "poner (de pie)",
      "estar (de pie)",
      "poner (tumbado)",
      "estar (tumbado)",
      "el sofá",
      "el armario, el mueble",
      "la estantería",
      "la lámpara",
      "la alfombra",
      "el cuadro",
      "la pared",
      "la esquina, el rincón"
    ],
    exercises: [
      {
        q: "¿Cómo se dice «Pongo el sofá contra la pared»?",
        opts: ["Ich stelle das Sofa an der Wand.", "Ich stelle das Sofa an die Wand.", "Ich stehe das Sofa an die Wand."],
        why: "Hay un destino (<i>wohin?</i>): <i>stellen</i> y el acusativo, <b>an die Wand</b>."
      },
      {
        q: "Elige el verbo: «Der Schrank ___ in der Ecke.»",
        opts: ["steht", "stellt", "legt"],
        why: "El armario está de pie y la frase dice dónde se encuentra (<i>in der Ecke</i>, dativo): <b>steht</b>."
      },
      {
        q: "Completa: «Ich lege das Buch auf ___ Tisch.»",
        opts: ["dem", "den", "der"],
        why: "<i>Legen</i> indica un destino (<i>wohin?</i>), por tanto acusativo: <i>Tisch</i> es masculino, <b>den</b> Tisch."
      },
      {
        q: "¿Qué frases son correctas, si stellen y legen deben decir adónde va el objeto (wohin?)?",
        opts: [
          "Ich stelle die Lampe in die Ecke.",
          "Die Lampe steht in der Ecke.",
          "Ich lege das Buch auf dem Tisch.",
          "Der Teppich liegt unter dem Tisch.",
          "Ich stelle das Regal an der Wand."
        ],
        why: "La frase 3 pide el acusativo (<i>auf den Tisch</i>), y la frase 5 también (<i>an die Wand</i>): <i>legen</i> y <i>stellen</i> responden a <i>wohin?</i>."
      },
      {
        q: "Completa: «Ich stelle das Sofa an ___ Wand.» (artículo determinado)",
        hint: "wohin? femenino acusativo",
        why: "<i>Stellen</i> + <i>wohin?</i> pide el acusativo, y <i>Wand</i> es femenino: <b>die</b>."
      },
      {
        q: "Completa: «Der Teppich ___ unter dem Tisch.» (liegen, tercera persona del singular)",
        hint: "estado, verbo de posición",
        why: "<i>Liegen</i> en la tercera persona del singular: <b>liegt</b>. <i>Unter dem Tisch</i> es dativo y responde a <i>wo?</i>."
      },
      {
        tr: "Pongo la lámpara en la esquina.",
        why: "<i>Ich stelle die Lampe in die Ecke</i>: la lámpara está de pie, por eso <i>stellen</i>, y <i>in die Ecke</i> es acusativo."
      },
      {
        q: "Completa la frase.",
        tr: "Pongo la estantería contra la pared. Ahora está ahí.",
        why: "<i>Stelle</i> indica el destino, <i>steht</i> el lugar: el primer verbo responde a <i>wohin?</i> (acusativo), el segundo a <i>wo?</i> (dativo)."
      },
      {
        tr: "Pongo el sofá contra la pared y la alfombra debajo de la mesa.",
        why: "En <i>Teppich</i> la <b>pp</b> indica una <b>e</b> breve y la <b>ch</b> después de <b>i</b> es [ç]; en <i>unter</i> la <b>u</b> es breve y la <b>t</b> es clara."
      },
      {
        tr: "La estantería está contra la pared y la alfombra está debajo de la mesa.",
        why: "En <i>Regal</i> el acento cae en <b>gal</b>; <i>Wand</i> empieza con <b>W</b>, que suena como una «v» labiodental."
      }
    ]
  },
  "lesson:a2-u05-l3": {
    theme: "Las habitaciones",
    title: "das Wohnzimmer, die Küche",
    objectives: [
      "formar y leer los nombres compuestos",
      "deducir el género a partir del último elemento del compuesto",
      "nombrar las habitaciones y los elementos de la casa"
    ],
    theory: [
      {
        h: "El género sigue al último elemento",
        p: "El alemán pega dos nombres (o un verbo y un nombre) en una sola palabra, y el género lo decide el <strong>último elemento</strong>: <em>wohnen + das Zimmer = das Wohnzimmer</em>, <em>die Küche + der Tisch = der Küchentisch</em>, <em>das Haus + die Tür = die Haustür</em>. El primer elemento precisa el significado, pero no cambia el artículo. A veces aparece una letra de enlace: los nombres en <em>-ung</em> suelen tomar una <em>-s</em>, <em>die Wohnung + die Tür = die Wohnungstür</em>."
      },
      {
        contrast: "El español casi nunca pega las palabras: las une con una preposición y el núcleo va <b>primero</b>: <em>puerta de casa, sala de estar, cuarto de baño</em>. En alemán todo se escribe junto y el núcleo va <b>al final</b>, así que se lee de derecha a izquierda. El género además puede no coincidir con el español: <em>el cuarto de baño</em> es masculino, <em>das Badezimmer</em> es neutro; <em>la sala de estar</em> es femenino, <em>das Wohnzimmer</em> es neutro; <em>el dormitorio</em> es masculino, <em>das Schlafzimmer</em> es neutro (por <em>das Zimmer</em>); <em>la llave</em> es femenino, <em>der Schlüssel</em> es masculino. Coinciden en cambio <em>la cocina</em> y <em>die Küche</em>, <em>la lavadora</em> y <em>die Waschmaschine</em>, <em>el frigorífico</em> (o <em>el refrigerador</em>) y <em>der Kühlschrank</em>."
      },
      {
        trap: "El primer elemento no decide el género: <em>die Haustür</em> es femenino aunque <em>das Haus</em> sea neutro, y <em>der Küchentisch</em> es masculino aunque <em>die Küche</em> sea femenino. Para saber el artículo mira siempre el <strong>final</strong> de la palabra. Cuando te encuentres con un compuesto largo, descompónlo de derecha a izquierda."
      },
      {
        tip: "Para entender un compuesto nuevo, léelo desde el final: <em>der Kühlschrank</em> es un <em>Schrank</em> (armario) que enfría (<em>kühlen</em>). De cada habitación aprende el nombre completo con su artículo: <em>das Wohnzimmer, das Schlafzimmer, das Badezimmer, die Küche</em>."
      }
    ],
    grammar: {
      title: "Los nombres compuestos y su género",
      note: "El género es el del <b>último</b> elemento: <b>das</b> Zimmer, por tanto <b>das</b> Wohnzimmer. Después de -ung suele aparecer una <b>-s</b>: Wohnung<b>s</b>tür.",
      table: {
        head: ["compuesto", "formación", "significado"],
        rows: [
          ["das Wohnzimmer", "wohnen + das Zimmer", "sala de estar, salón"],
          ["das Schlafzimmer", "schlafen + das Zimmer", "dormitorio"],
          ["die Haustür", "das Haus + die Tür", "puerta de casa"],
          ["der Küchentisch", "die Küche + der Tisch", "mesa de la cocina"],
          ["die Wohnungstür", "die Wohnung + s + die Tür", "puerta del piso"]
        ]
      },
      examples: [
        { tr: "El salón es grande y luminoso.", note: "das Zimmer: neutro, por tanto das Wohnzimmer" },
        { tr: "La puerta de casa es nueva.", note: "die Tür: femenino, por tanto die Haustür" },
        { tr: "La llave está sobre la mesa de la cocina.", note: "dativo con wo?: auf dem Küchentisch" },
        { tr: "El frigorífico está en la cocina.", note: "der Kühlschrank: como der Schrank" },
        { tr: "Tenemos un cuarto de baño pequeño.", note: "ein kleines Badezimmer: neutro, -es" },
        { tr: "La lavadora está en el sótano.", note: "im Keller: dativo contraído" }
      ]
    },
    vocab: [
      "la sala de estar, el salón",
      "el dormitorio",
      "el cuarto de baño",
      "la cocina",
      "el pasillo, el recibidor",
      "el sótano",
      "el jardín",
      "la puerta de casa",
      "la puerta del piso",
      "el frigorífico, el refrigerador",
      "la lavadora",
      "la llave"
    ],
    exercises: [
      {
        q: "Elige el artículo determinado correcto para cada nombre.",
        items: ["salón", "cocina", "puerta de casa", "frigorífico", "dormitorio", "lavadora"]
      },
      {
        q: "Une cada compuesto con su significado.",
        pairs: ["salón", "dormitorio", "cuarto de baño", "puerta de casa"]
      },
      {
        q: "¿Por qué «Schlafzimmer» es neutro?",
        opts: [
          "Porque Zimmer es neutro y el género sigue al último elemento.",
          "Porque schlafen es un verbo.",
          "Porque termina en -er."
        ],
        why: "El género de un compuesto es el del último elemento: <i>das Zimmer</i>, por tanto <b>das</b> Schlafzimmer."
      },
      {
        q: "Completa: «Die Küche + der Schrank = ___ Küchenschrank» (artículo determinado)",
        hint: "mira el último elemento",
        why: "El último elemento es <i>der Schrank</i>: el compuesto es masculino, <b>der</b> Küchenschrank."
      },
      {
        q: "Completa el compuesto con la letra de enlace: «Wohnung + Tür = Wohnung___tür»",
        hint: "una sola letra",
        why: "Después de <i>-ung</i> suele aparecer una <b>-s</b>: <i>die Wohnungstür</i>."
      },
      {
        tr: "El salón es grande y luminoso.",
        why: "<i>Das Wohnzimmer ist groß und hell</i>: después de <i>sein</i> los adjetivos no llevan terminación. También vale el orden inverso."
      },
      {
        q: "Completa la frase.",
        tr: "La lavadora está en el sótano y el frigorífico está en la cocina.",
        why: "<i>Waschmaschine</i> es femenino (<i>die</i>), <i>Keller</i> lleva <i>im</i> (dativo contraído), <i>Küche</i> pide <i>in der</i>."
      },
      {
        tr: "La llave está sobre la mesa de la cocina.",
        why: "<i>Der Schlüssel liegt auf dem Küchentisch</i>: la llave está tumbada (<i>liegen</i>), el estado pide el dativo, <i>auf dem</i>."
      },
      {
        tr: "El frigorífico está en la cocina y la lavadora está en el sótano.",
        why: "En <i>Küche</i> la <b>ü</b> es breve y abierta [ʏ] y la <b>ch</b> es [ç] ([ˈkʏçə]); en <i>Keller</i> la <b>e</b> es breve."
      },
      {
        tr: "El dormitorio y el cuarto de baño son pequeños, pero el salón es grande.",
        why: "En <i>Schlafzimmer</i> la <b>sch</b> es [ʃ] y el acento cae en <b>Schlaf</b>; en <i>Badezimmer</i> la <b>a</b> es larga."
      }
    ]
  },
  "lesson:a2-u05-l4": {
    theme: "Una avería en casa",
    title: "La calefacción está rota",
    objectives: [
      "avisar de una avería a la administración o al conserje",
      "formular una petición cortés con Könnten Sie ...?",
      "mantener el infinitivo al final de la frase"
    ],
    theory: [
      {
        h: "Könnten Sie ...?",
        p: "Para pedir algo a alguien a quien no conoces, a un conserje o a una administración de fincas, usas la forma de cortesía <strong>Könnten Sie ...?</strong> (<em>Konjunktiv II</em> de <em>können</em>) con el <strong>infinitivo al final</strong>: <em>Könnten Sie bitte morgen vorbeikommen? Könnten Sie die Heizung reparieren?</em> Una alternativa igual de cortés es <strong>Würden Sie ...?</strong> con el infinitivo al final. Para avisar del problema bastan frases sencillas: <em>Die Heizung ist kaputt. Der Wasserhahn tropft. Die Heizung funktioniert nicht.</em>"
      },
      {
        contrast: "<em>Könnten Sie</em> corresponde al condicional español <em>¿Podría usted ...?</em>: en las dos lenguas la forma verbal suaviza la petición. La diferencia está en el pronombre y en el orden: el español usa <em>usted</em> con la tercera persona del singular, el alemán usa <em>Sie</em> con la forma de la tercera persona del <strong>plural</strong> (<em>Könnten Sie</em>, <em>Sie sind</em>). Y el infinitivo no va pegado al modal, como en «¿Podría reparar la calefacción?»: en alemán va al final, después de todos los complementos. Después de <em>sein</em>, <em>kaputt</em> no lleva terminación, mientras que «roto» o «estropeado» concuerdan en español: <em>Die Heizung ist kaputt, Die Fenster sind kaputt</em>. Delante de un nombre sí se declina, como cualquier adjetivo: <em>die kaputte Heizung</em>."
      },
      {
        trap: "El infinitivo no sigue enseguida a <em>Könnten</em>: va al final de la frase, después de todos los complementos. <em>Könnten Sie die Heizung reparieren?</em>, no «Könnten Sie reparieren die Heizung?». Por teléfono la fórmula habitual es <em>Guten Tag, hier ist Weber</em> (como «Le habla Weber» o «Aquí Weber»); <em>Ich bin Weber</em> es correcto, pero no es la fórmula típica. Con la cortesía te quedas en <em>Sie</em>, aunque la otra persona sea más joven."
      },
      {
        tip: "Si la petición es urgente añade <em>dringend</em> o <em>so schnell wie möglich</em>, sin perder la cortesía: <em>Könnten Sie bitte so schnell wie möglich vorbeikommen?</em> <em>Bitte</em> suele ir después del pronombre."
      }
    ],
    grammar: {
      title: "Könnten Sie ...? y la avería",
      note: "<b>Könnten Sie</b> + complementos + <b>infinitivo</b> al final. Una avería: <b>... ist kaputt</b> o <b>... funktioniert nicht</b>.",
      table: {
        head: ["situación", "frase", "función"],
        rows: [
          ["presentarse", "Guten Tag, hier ist Weber.", "por teléfono"],
          ["avisar", "Die Heizung ist kaputt.", "la avería"],
          ["avisar", "Der Wasserhahn tropft.", "la avería"],
          ["pedir", "Könnten Sie bitte morgen vorbeikommen?", "petición cortés"],
          ["pedir", "Würden Sie das bitte reparieren?", "petición cortés"]
        ]
      },
      examples: [
        { tr: "Buenos días, le habla Weber, de Hauptstraße 5.", note: "por teléfono: hier ist ..." },
        { tr: "La calefacción está rota.", note: "después de sein, kaputt no lleva terminación" },
        { tr: "El grifo de la cocina gotea.", note: "tropfen: tercera persona del singular" },
        { tr: "¿Podría pasar mañana, por favor?", note: "infinitivo al final: vorbeikommen" },
        { tr: "¿Podría reparar la calefacción?", note: "Könnten Sie ... reparieren" },
        { tr: "¿Podría repararlo lo antes posible?", note: "Würden Sie ... reparieren" }
      ]
    },
    vocab: [
      "la calefacción",
      "roto, averiado",
      "funcionar",
      "reparar",
      "la administración de fincas",
      "el conserje, el portero",
      "la reparación",
      "el grifo",
      "la ventana",
      "gotear",
      "pasar (venir a casa de alguien)",
      "urgente"
    ],
    exercises: [
      {
        q: "¿Cómo pides con cortesía que reparen la calefacción?",
        opts: [
          "Könnten Sie reparieren die Heizung?",
          "Könnten Sie die Heizung reparieren?",
          "Könnten Sie die Heizung repariert?"
        ],
        why: "Con <i>Könnten</i> el infinitivo va <b>al final</b> de la frase: <i>Könnten Sie die Heizung reparieren?</i>."
      },
      {
        q: "¿Qué frase es la petición cortés?",
        opts: ["Kommen Sie morgen!", "Sie kommen morgen.", "Könnten Sie morgen vorbeikommen?"],
        why: "<b>Könnten Sie ...?</b> es la fórmula cortés. Las otras dos son una orden y una afirmación."
      },
      {
        q: "Completa: «Die Heizung ist ___.» (rota)",
        hint: "después de sein, sin terminación",
        why: "<b>kaputt</b>, con el acento en la última sílaba, después de <b>sein</b> no lleva terminación."
      },
      {
        q: "Completa: «___ Sie bitte morgen vorbeikommen?» (forma de cortesía de können)",
        hint: "Konjunktiv II, con Sie",
        why: "<b>Könnten</b>: <i>ich könnte</i>, <i>Sie könnten</i>. Con <i>Sie</i> se usa la forma plural."
      },
      {
        q: "Une cada palabra con su significado.",
        pairs: ["calefacción", "grifo", "conserje", "administración de fincas"]
      },
      {
        tr: "¿Podría reparar la calefacción, por favor?",
        why: "<i>Könnten Sie bitte die Heizung reparieren</i>: el infinitivo cierra la frase. También vale <i>Könnten Sie die Heizung bitte reparieren</i>."
      },
      {
        tr: "El grifo de la cocina gotea.",
        why: "<i>Der Wasserhahn in der Küche tropft</i>: <i>in der Küche</i> es dativo (<i>wo?</i>). También vale <i>Der Wasserhahn tropft in der Küche</i>."
      },
      {
        q: "Completa la frase.",
        tr: "Buenos días, le habla Weber. La calefacción está rota. ¿Podría pasar hoy?",
        why: "Por teléfono la fórmula habitual es <i>hier ist Weber</i> (también <i>ich bin Weber</i> es correcto). Para la petición cortés valen <i>Könnten</i> y <i>Würden</i>; <i>Können</i> también es correcto, pero menos cortés."
      },
      {
        tr: "Buenos días, le habla Weber. La calefacción está rota. ¿Podría pasar hoy?",
        why: "En <i>Heizung</i> la <b>ei</b> se lee [aɪ] como «ai» en «aire» y la <b>z</b> es [ts]; en <i>kaputt</i> el acento cae en la última sílaba."
      },
      {
        tr: "¿Podría reparar el grifo de la cocina, por favor?",
        why: "En <i>Wasserhahn</i> la primera <b>h</b> de <i>Hahn</i> es un soplo ligero y la segunda no se pronuncia y alarga la <b>a</b>; en <i>Küche</i> la <b>ch</b> es [ç]."
      }
    ]
  },
  "lesson:a2-u05-test": {
    theme: "Verificación",
    title: "Test: Casa y barrio",
    objectives: ["comprobar el adjetivo después de ein, wohin y wo con las preposiciones, los nombres compuestos y las peticiones corteses"],
    theory: [
      {
        p: "Diez preguntas sobre la unidad. Se aprueba con el 70 %. No mires las lecciones mientras respondes: si no recuerdas algo, es mejor volver a repasar."
      }
    ],
    exercises: [
      {
        q: "Completa: «Ich suche eine ___ Wohnung.» (hell, con la terminación)",
        hint: "femenino acusativo después de eine",
        why: "Después de <i>eine</i> el femenino lleva <b>-e</b>: <i>helle</i>."
      },
      {
        q: "Completa: «Das ist ein ___ Haus.» (alt, con la terminación)",
        hint: "neutro nominativo después de ein",
        why: "<i>Ein</i> no tiene terminación en el neutro nominativo, así que la lleva el adjetivo: <b>altes</b>."
      },
      {
        q: "Completa: «Ich stelle die Lampe in ___ Ecke.» (artículo determinado)",
        hint: "wohin?",
        why: "<i>Stellen</i> responde a <i>wohin?</i>: acusativo femenino, <b>die</b> Ecke."
      },
      {
        q: "Completa: «Der Teppich ___ unter dem Tisch.» (liegen)",
        hint: "tercera persona del singular",
        why: "Estado y dativo: <b>liegt</b>."
      },
      {
        q: "Completa: «Die Küche + der Schrank = ___ Küchenschrank» (artículo determinado)",
        hint: "mira el último elemento",
        why: "El género sigue al último elemento: <b>der</b> Schrank, por tanto <b>der</b> Küchenschrank."
      },
      {
        q: "¿Qué frase dice adónde va el libro (wohin?)?",
        opts: [
          "Ich lege das Buch auf dem Tisch.",
          "Ich lege das Buch auf den Tisch.",
          "Ich liege das Buch auf den Tisch."
        ],
        why: "<i>Legen</i> indica el destino (<i>wohin?</i>) y pide el acusativo: <b>auf den Tisch</b>. <i>Liegen</i> no lleva objeto."
      },
      {
        q: "¿Qué frase es la petición cortés?",
        opts: ["Sie reparieren die Heizung jetzt.", "Könnten Sie die Heizung reparieren?", "Die Heizung reparieren Sie."],
        why: "<b>Könnten Sie ...?</b> con el infinitivo al final es la fórmula cortés."
      },
      {
        q: "Une cada palabra con su significado.",
        pairs: ["calefacción", "conserje", "balcón", "llave"]
      },
      {
        tr: "El frigorífico está en la cocina y el sofá está en el salón.",
        why: "En <i>Kühlschrank</i> la <b>ü</b> es larga [yː] y <b>sch</b> es [ʃ] ([ˈkyːlʃʁaŋk]); en <i>Sofa</i> el acento cae en la <b>o</b>, que es larga."
      },
      {
        tr: "Busco un piso luminoso con un balcón grande.",
        why: "En <i>großen</i> la <b>ß</b> es una <b>s</b> sorda; <i>einem großen Balkon</i> es dativo después de <i>mit</i>, por tanto <b>-en</b>."
      }
    ]
  },
  "unit:a2-u06": {
    title: "En la oficina",
    grammarNote: "Könnten Sie ...? · preguntas indirectas con ob y palabra interrogativa · carta formal · man · zuerst, dann, danach, außerdem"
  },
  "lesson:a2-u06-l1": {
    theme: "Por teléfono",
    title: "¿Podría devolverme la llamada?",
    objectives: [
      "llamar por teléfono y dejar un recado con Könnten Sie ...?",
      "hacer una pregunta indirecta con ob o con una palabra interrogativa",
      "mandar el verbo al final en la oración introducida por ob, wann, wo y dass"
    ],
    theory: [
      {
        h: "Pedir que te devuelvan la llamada y dejar un recado",
        p: "Por teléfono, con una persona que no conoces, usas la forma de cortesía: <em>Guten Tag, hier ist Weber. Könnten Sie mich bitte zurückrufen?</em> Para dejar un recado: <em>Könnten Sie Frau Keller etwas ausrichten?</em> Quien contesta suele decir <em>Ich verbinde Sie</em> (le paso) o <em>Frau Keller ist gerade nicht am Platz</em> (no está en su puesto). <em>Zurückrufen</em> y <em>ausrichten</em> son verbos separables: en infinitivo, después de <em>Könnten Sie ...</em>, quedan enteros y van al final."
      },
      {
        h: "Preguntas indirectas: ob y palabra interrogativa",
        p: "Una pregunta puede entrar dentro de otra oración. Si la pregunta directa es de <strong>sí/no</strong> (<em>Ist Herr Weber im Büro?</em>), la indirecta se introduce con <strong>ob</strong>; si lleva una <strong>palabra interrogativa</strong> (<em>wann, wo, wer, wie, warum</em>), esa palabra se queda y abre la subordinada. En los dos casos el verbo conjugado va <strong>al final</strong> y antes hay una coma: <em>Ich möchte wissen, ob Herr Weber heute im Büro ist. Ich weiß nicht, wann die Besprechung beginnt. Könnten Sie mir sagen, wo Frau Keller ist?</em> Con un verbo separable el prefijo se une de nuevo al verbo: <em>Ich weiß nicht, wann er anruft.</em> Lo mismo vale para <strong>dass</strong>: <em>Könnten Sie ihr sagen, dass ich morgen wieder anrufe?</em>"
      },
      {
        contrast: "En español la pregunta indirecta no tiene un orden fijo: <em>no sé cuándo empieza la reunión</em> y <em>no sé cuándo la reunión empieza</em> son posibles, y el verbo suele ir junto al sujeto o delante de él. En alemán el orden es el de la subordinada, con el verbo conjugado al final: <em>Ich weiß nicht, wann die Besprechung beginnt</em>, no «wann beginnt die Besprechung». Además, el <em>si</em> español sirve para la duda y para la condición: <em>no sé si viene</em> es <em>ob</em>, <em>si viene, ...</em> es <em>wenn</em>. El alemán las separa. Otro contraste es la cortesía: el español usa el condicional con <em>usted</em> (<em>¿podría llamarme?</em>) y el clítico se pega al infinitivo (<em>llamarme</em>); en alemán <em>Könnten Sie</em> es Konjunktiv II y el pronombre va aparte, <em>mich</em>, antes del infinitivo final."
      },
      {
        trap: "Para introducir una pregunta indirecta de sí/no se usa <em>ob</em>, no <em>wenn</em>: <em>Ich weiß nicht, ob er kommt</em>. Para una condición se usa <em>wenn</em>."
      },
      {
        tip: "Otras fórmulas útiles: <em>Die Leitung ist besetzt</em> (la línea está ocupada), <em>Ich erreiche ihn nicht</em> (no consigo localizarlo), <em>Wie ist Ihre Telefonnummer?</em>. Con la forma de cortesía te quedas con <em>Sie</em> de principio a fin de la llamada. Ojo: <em>Sie</em> lleva el verbo en tercera persona del <strong>plural</strong> (<em>Könnten Sie</em>), mientras que <em>usted</em> lo lleva en singular."
      }
    ],
    grammar: {
      title: "Könnten Sie ...? y las preguntas indirectas",
      note: "<b>Könnten Sie</b> + infinitivo al final. Pregunta indirecta: <b>ob</b> o palabra interrogativa, y el verbo conjugado <b>al final</b>. Con <b>dass</b> (una afirmación, no una pregunta) el verbo también va al final: <i>Ich rufe morgen wieder an</i> pasa a <i>..., dass ich morgen wieder anrufe.</i>",
      table: {
        head: ["pregunta directa", "pregunta indirecta", "introduce"],
        rows: [
          ["Ist Herr Weber im Büro?", "..., ob Herr Weber im Büro ist.", "ob (sí/no)"],
          ["Wann beginnt die Besprechung?", "..., wann die Besprechung beginnt.", "wann"],
          ["Wo ist Frau Keller?", "..., wo Frau Keller ist.", "wo"]
        ]
      },
      examples: [
        { tr: "¿Podría devolverme la llamada, por favor?", note: "zurückrufen queda entero, al final" },
        { tr: "¿Podría darle un recado a la señora Keller?", note: "ausrichten, al final" },
        { tr: "Quisiera saber si el señor Weber está hoy en la oficina.", note: "ob: el verbo ist va al final" },
        { tr: "No sé cuándo empieza la reunión.", note: "wann: el verbo beginnt va al final" },
        { tr: "¿Podría decirme dónde está la señora Keller?", note: "wo: el verbo ist va al final" },
        { tr: "¿Podría decirle que mañana vuelvo a llamar?", note: "dass: anrufe se vuelve a unir" }
      ]
    },
    vocab: [
      "llamar por teléfono",
      "devolver la llamada",
      "el recado, el mensaje",
      "dar un recado, transmitir",
      "la extensión",
      "pasar (una llamada), poner en comunicación",
      "el contestador automático",
      "localizar, conseguir contactar",
      "ocupado",
      "el número de teléfono",
      "la cita, el plazo",
      "la línea"
    ],
    exercises: [
      {
        q: "¿Cómo pides con cortesía que te devuelvan la llamada?",
        opts: [
          "Könnten Sie mich bitte zurückrufen?",
          "Könnten Sie zurückrufen mich bitte?",
          "Könnten Sie mich bitte zurückrufe?"
        ],
        why: "<i>Könnten Sie</i> + complementos + el infinitivo <b>entero</b> al final: <i>zurückrufen</i>."
      },
      {
        tr: "Toda la conjugación de können en Konjunktiv II.",
        why: "<i>könnte, könntest, könnte, könnten, könntet, könnten</i>: la <b>ö</b> con diéresis y la <b>-e-</b> del Konjunktiv II. <i>Ich</i> y <i>er/sie/es</i> tienen la misma forma, y con <i>Sie</i> se usa <b>könnten</b>."
      },
      {
        q: "Completa: «Ich weiß nicht, ___ Herr Weber heute im Büro ist.» (si)",
        hint: "pregunta de sí/no",
        why: "Una pregunta de sí/no se vuelve indirecta con <b>ob</b>, y el verbo <i>ist</i> va al final."
      },
      {
        q: "Completa: «Ich möchte wissen, ___ die Besprechung beginnt.» (cuándo)",
        hint: "palabra interrogativa",
        why: "<b>wann</b> es la palabra interrogativa y se queda: <i>..., wann die Besprechung beginnt</i>."
      },
      {
        q: "Une cada palabra con su significado.",
        pairs: ["llamar por teléfono", "recado", "extensión", "ocupado"]
      },
      {
        tr: "¿Podría devolverme la llamada, por favor?",
        why: "<i>Könnten Sie mich bitte zurückrufen</i>: el infinitivo entero cierra la frase. También vale <i>Könnten Sie mich zurückrufen, bitte</i>."
      },
      {
        q: "Completa la frase.",
        tr: "¿Podría darle un recado al señor Weber? Quisiera saber si está en la oficina.",
        why: "<i>Etwas ausrichten</i>: el infinitivo queda entero, al final. <i>Wissen, ob ...</i>: una pregunta de sí/no se vuelve indirecta con <b>ob</b>."
      },
      {
        q: "Estás al teléfono con una empresa.",
        setting: "Llamas para hablar con la señora Keller.",
        lines: [
          { tr: "Empresa Brandt, buenos días." },
          {
            tr: "Preséntate y pide que te pasen con la señora Keller.",
            answerTr: "Buenos días, soy Weber. ¿Podría pasarme con la señora Keller?"
          },
          { tr: "La señora Keller no está en su puesto. ¿Le doy algún recado?" },
          {
            tr: "Responde que sí y pide que le digan que mañana vuelves a llamar.",
            answerTr: "Sí, gracias. ¿Podría decirle que mañana vuelvo a llamar?"
          }
        ]
      },
      {
        tr: "Buenos días, soy Weber. ¿Podría devolverme la llamada, por favor? Quisiera saber si la cita es el lunes.",
        why: "En <i>zurückrufen</i> el acento cae en <b>rück</b> (<b>ü</b> breve [ʏ]); en <i>Könnten</i> la <b>ö</b> es breve y abierta [œ]; <i>Weber</i> empieza con <b>w</b> = [v], no [w]."
      },
      {
        tr: "¿Podría decirle a la señora Keller que mañana vuelvo a llamar?",
        why: "En <i>wieder</i> la <b>ie</b> es una <b>i</b> larga [iː] y la <b>w</b> inicial se lee [v]; en <i>anrufe</i> el acento cae en <b>an</b> y el verbo está al final después de <i>dass</i>."
      }
    ]
  },
  "lesson:a2-u06-l2": {
    theme: "Escribir un correo",
    title: "Estimada señora Keller",
    objectives: [
      "abrir y cerrar un correo formal con Sehr geehrte Frau ... y Mit freundlichen Grüßen",
      "escribir las formas de cortesía Sie, Ihr, Ihnen con mayúscula",
      "pedir una confirmación con Könnten Sie ...?"
    ],
    theory: [
      {
        h: "Apertura y cierre de un correo formal",
        p: "Un correo formal tiene una fórmula fija. Al principio: <strong>Sehr geehrte Frau Keller,</strong> a una mujer, <strong>Sehr geehrter Herr Weber,</strong> a un hombre, <strong>Sehr geehrte Damen und Herren,</strong> a varias personas o a un destinatario desconocido. Se escribe <em>Frau</em> o <em>Herr</em> y el apellido, sin el nombre de pila. Al final: <strong>Mit freundlichen Grüßen</strong> y debajo el nombre, sin coma después de la despedida. El cuerpo del mensaje es breve: <em>Vielen Dank für Ihre E-Mail. Im Anhang finden Sie die Datei. Könnten Sie mir den Termin bitte bestätigen?</em>"
      },
      {
        contrast: "El español abre con <em>Estimada señora Keller:</em> (con dos puntos) o <em>Estimado señor Weber:</em> y cierra con <em>Atentamente,</em> o <em>Un cordial saludo</em>. El alemán usa <em>Sehr geehrte</em> (literalmente «muy honrada»), un adjetivo sin artículo: por eso lleva <strong>-e</strong> con <em>Frau</em> y <strong>-er</strong> con <em>Herr</em>. Después de la coma del saludo, el texto continúa con minúscula, salvo las palabras que siempre llevan mayúscula, como los sustantivos y las formas de cortesía <em>Sie</em>, <em>Ihnen</em>, <em>Ihr/Ihre</em>: <em>Sehr geehrte Frau Keller, / vielen Dank für Ihre Nachricht.</em> Para una mujer adulta se usa <em>Frau</em>, haya o no estado casada: <em>Fräulein</em> se considera anticuado. Con <em>du</em> se abre con <em>Liebe Anna,</em> o <em>Lieber Tim,</em> y se cierra con <em>Viele Grüße</em>."
      },
      {
        trap: "Las formas de cortesía llevan mayúscula en las cartas: <em>Sie</em>, <em>Ihr</em>, <em>Ihre</em> e <em>Ihnen</em> en los correos formales se escriben con mayúscula, y distinguen «usted, su» de <em>sie</em> e <em>ihre</em> (ella, ellos; su de ella, su de ellos). En español <em>usted</em> se escribe con minúscula (solo la abreviatura <em>Ud.</em> lleva mayúscula), así que aquí no hay que trasladar el hábito. <em>Mit freundlichen Grüßen</em> está en plural y en dativo: no se escribe «Mit freundliche Gruß»."
      },
      {
        tip: "Otras fórmulas: <em>Vielen Dank für Ihre schnelle Antwort</em>, <em>Im Anhang finden Sie ...</em>, <em>Könnten Sie ...?</em> En el asunto (<em>Betreff</em>) bastan pocas palabras, por ejemplo <em>Termin am Montag</em>."
      }
    ],
    grammar: {
      title: "Registro formal: el correo",
      note: "Apertura <b>Sehr geehrte Frau</b> / <b>Sehr geehrter Herr</b> + apellido; cierre <b>Mit freundlichen Grüßen</b>. <b>Sie, Ihre, Ihnen</b> con mayúscula.",
      table: {
        head: ["parte del correo", "fórmula", "significado"],
        rows: [
          ["apertura (mujer)", "Sehr geehrte Frau Keller,", "Estimada señora Keller"],
          ["apertura (hombre)", "Sehr geehrter Herr Weber,", "Estimado señor Weber"],
          ["apertura (varias personas)", "Sehr geehrte Damen und Herren,", "Estimadas señoras y estimados señores"],
          ["cuerpo", "Vielen Dank für Ihre E-Mail.", "Gracias por su correo"],
          ["cierre", "Mit freundlichen Grüßen", "Un cordial saludo"]
        ]
      },
      examples: [
        { tr: "Estimada señora Keller:", note: "Frau: geehrt + e" },
        { tr: "Estimado señor Weber:", note: "Herr: geehrt + er" },
        { tr: "Gracias por su correo.", note: "Ihre con mayúscula" },
        { tr: "En el adjunto encontrará el archivo.", note: "verbo en segunda posición: finden Sie" },
        { tr: "¿Podría confirmarme la cita, por favor?", note: "Könnten Sie ... bestätigen" },
        { tr: "Un cordial saludo", note: "Grüßen, plural y dativo" }
      ]
    },
    vocab: [
      "el correo electrónico",
      "el asunto (del correo)",
      "la fórmula de saludo",
      "el saludo, la despedida",
      "el archivo adjunto",
      "el archivo",
      "el remitente",
      "enviar, mandar",
      "adjuntar",
      "confirmar",
      "amable, cordial",
      "formal"
    ],
    exercises: [
      {
        q: "¿Qué apertura es correcta para un correo a una señora?",
        opts: ["Sehr geehrter Frau Keller,", "Sehr geehrte Frau Keller,", "Sehr geehrt Frau Keller,"],
        why: "<i>Frau</i> es femenino, así que el adjetivo lleva <b>-e</b>: <i>Sehr geehrte Frau Keller,</i>. Con <i>Herr</i> sería <i>geehrter</i>."
      },
      {
        q: "¿Qué despedida es correcta?",
        opts: ["Mit freundlichen Grüßen", "Mit freundliche Grüße", "Mit freundlichem Grüßen"],
        why: "<i>Mit</i> pide dativo y <i>Grüße</i> es plural: <b>Mit freundlichen Grüßen</b>."
      },
      {
        q: "Completa: «Sehr ___ Herr Weber,» (geehrt, con la terminación)",
        hint: "masculino, sin artículo",
        why: "Con <i>Herr</i> el adjetivo sin artículo lleva <b>-er</b>: <i>Sehr geehrter Herr Weber,</i>."
      },
      {
        q: "Completa: «Vielen Dank für ___ E-Mail.» (su, con mayúscula)",
        hint: "forma de cortesía",
        why: "<b>Ihre</b> con mayúscula es el posesivo de cortesía: su (de usted). <i>Ihre</i>, <i>Ihr</i> e <i>Ihnen</i> se escriben así en los correos formales."
      },
      {
        q: "Une cada palabra con su significado.",
        pairs: ["asunto", "adjunto", "remitente", "archivo"]
      },
      {
        tr: "En el adjunto encontrará el archivo.",
        why: "<i>Im Anhang finden Sie die Datei</i>: el verbo está en segunda posición. También valen <i>Sie finden im Anhang die Datei</i>, <i>Sie finden die Datei im Anhang</i> y <i>Die Datei finden Sie im Anhang</i>."
      },
      {
        tr: "Estimada señora Keller, gracias por su correo.",
        why: "<i>Sehr geehrte Frau Keller, vielen Dank für Ihre E-Mail</i>. También vale <i>herzlichen Dank</i> o <i>danke</i>; <i>Ihre</i> se escribe con mayúscula."
      },
      {
        q: "Completa la frase.",
        tr: "Estimada señora Keller, gracias por su correo. Un cordial saludo",
        why: "<i>Sehr geehrte</i> (femenino), <i>Ihre</i> (su, con mayúscula) y <i>Mit freundlichen Grüßen</i> (dativo plural)."
      },
      {
        tr: "Estimada señora Keller, gracias por su correo. En el adjunto encontrará el archivo. Un cordial saludo",
        why: "En <i>Grüßen</i> la <b>ü</b> es larga [yː] y la <b>ß</b> es una <b>s</b> sorda; en <i>geehrte</i> la sílaba <b>ge</b> es débil y el acento cae en <b>ehr</b>, con la <b>e</b> larga."
      },
      {
        tr: "¿Podría confirmarme la cita, por favor?",
        why: "En <i>Termin</i> el acento cae en la última sílaba, con la <b>i</b> larga; en <i>bestätigen</i> la <b>st</b> después de <b>be-</b> se lee [ʃt] y el acento cae en <b>stä</b>."
      }
    ]
  },
  "lesson:a2-u06-l3": {
    theme: "Costumbres en la oficina",
    title: "Aquí se hace así",
    objectives: [
      "usar man con el verbo en tercera persona del singular",
      "describir reglas y costumbres del lugar de trabajo",
      "usar man con muss, darf y kann"
    ],
    theory: [
      {
        h: "man: una persona cualquiera",
        p: "<strong>man</strong> indica una persona cualquiera, la gente en general, y se usa para reglas y costumbres: <em>Bei uns beginnt man um acht Uhr. Hier duzt man sich. In der Mittagspause isst man in der Kantine.</em> El verbo va en <strong>tercera persona del singular</strong>, aunque el sentido sea plural. Los verbos que cambian de vocal mantienen el cambio: <em>man isst, man liest, man fährt, man spricht</em>. Con los modales: <em>man muss, man darf, man kann</em>: <em>Hier darf man nicht rauchen. Man muss pünktlich sein.</em> Una pregunta frecuente: <em>Wie sagt man das auf Deutsch?</em>"
      },
      {
        contrast: "Para expresar la reciprocidad, el español dice aquí <em>nos tuteamos</em>; el alemán usa <em>man</em> con <em>sich</em>: <em>Hier duzt man sich.</em>"
      },
      {
        trap: "<em>man</em> no es <em>der Mann</em> (el hombre): <em>man</em> lleva una sola <strong>n</strong> y minúscula. El verbo sigue en tercera persona del singular: <em>man sagt</em>, no «man sagen», y con los modales <em>man muss</em>, no «man müssen». Ojo con <em>poder</em>: el español <em>no se puede fumar</em> cubre «está prohibido» y «es imposible», mientras que el alemán tiene dos verbos. <em>Hier darf man nicht rauchen</em> dice que no está permitido; <em>Hier kann man nicht rauchen</em> diría que no es posible hacerlo. Y para «hay que» sirve <em>man muss</em>."
      },
      {
        tip: "Para introducir una regla de la oficina abre con <em>Hier</em>, <em>Bei uns</em> o <em>In der Firma</em>; el verbo se queda en segunda posición: <em>Bei uns beginnt man um acht Uhr.</em> Para tutear o tratar de usted: <em>duzen</em> y <em>siezen</em>: <em>Den Chef siezt man hier.</em>"
      }
    ],
    grammar: {
      title: "man + tercera persona del singular",
      note: "<b>man</b> es siempre el sujeto; el verbo queda en <b>tercera persona del singular</b>: <b>man isst, man muss, man darf</b>.",
      table: {
        head: ["verbo", "con man", "ejemplo"],
        rows: [
          ["essen", "man isst", "In der Kantine isst man warm."],
          ["sagen", "man sagt", "Wie sagt man das auf Deutsch?"],
          ["müssen", "man muss", "Man muss pünktlich sein."],
          ["dürfen", "man darf", "Hier darf man nicht rauchen."],
          ["duzen", "man duzt sich", "Hier duzt man sich."]
        ]
      },
      examples: [
        { tr: "Aquí nos tuteamos.", note: "man duzt sich: tercera persona del singular" },
        { tr: "En nuestra empresa se empieza a las ocho.", note: "inversión después de Bei uns: beginnt man" },
        { tr: "En la pausa del almuerzo se come en el comedor.", note: "essen cambia de vocal: man isst" },
        { tr: "Aquí no está permitido fumar.", note: "man darf, con nicht" },
        { tr: "¿Cómo se dice esto en alemán?", note: "man sagt, no man sagen" },
        { tr: "Hay que ser puntual.", note: "man muss" }
      ]
    },
    vocab: [
      "la oficina",
      "el colega, el compañero",
      "la colega, la compañera",
      "el jefe",
      "la pausa del almuerzo",
      "el comedor, la cantina",
      "la impresora",
      "el horario de trabajo",
      "puntual",
      "tutear",
      "tratar de usted",
      "habitual, de costumbre"
    ],
    exercises: [
      {
        q: "¿Qué frase es correcta?",
        opts: [
          "Hier arbeiten man bis fünf Uhr.",
          "Hier arbeitet man bis fünf Uhr.",
          "Hier arbeitest man bis fünf Uhr."
        ],
        why: "Con <i>man</i> el verbo va en tercera persona del singular: <b>arbeitet</b>."
      },
      {
        q: "¿Cómo dices «En Alemania se come temprano»?",
        opts: [
          "In Deutschland isst man früh.",
          "In Deutschland essen man früh.",
          "In Deutschland esst man früh."
        ],
        why: "<i>Essen</i> cambia la vocal en la tercera persona del singular: <i>er isst</i>, así que <b>man isst</b>."
      },
      {
        q: "¿Qué frases son correctas?",
        opts: [
          "Man darf hier nicht rauchen.",
          "Man muss pünktlich sein.",
          "Man müssen pünktlich sein.",
          "Wie sagt man das auf Deutsch?",
          "Man fahren mit dem Bus."
        ],
        why: "Con <i>man</i> también el modal va en tercera persona del singular: <i>man muss</i>, no «man müssen». <i>Man fahren</i> es incorrecto: hace falta <i>man fährt</i>."
      },
      {
        q: "Completa: «In der Kantine ___ man mittags warm.» (essen)",
        hint: "tercera persona del singular, cambia la vocal",
        why: "<b>isst</b>: <i>essen</i> cambia <i>e</i> por <i>i</i>, y después de <i>man</i> se usa esta forma."
      },
      {
        q: "Completa: «Wie ___ man das auf Deutsch?» (sagen)",
        hint: "tercera persona del singular",
        why: "<b>sagt</b>: <i>man</i> pide la tercera persona del singular."
      },
      {
        tr: "En nuestra empresa se empieza a las ocho.",
        why: "<i>Bei uns beginnt man um acht Uhr</i>. También valen <i>Man beginnt bei uns um acht Uhr</i> y <i>Um acht Uhr beginnt man bei uns</i>: el verbo se queda en segunda posición."
      },
      {
        tr: "Aquí nos tuteamos. (usa man)",
        why: "<i>Hier duzt man sich</i>. También vale <i>Man duzt sich hier</i>. <i>Sich</i> es el reflexivo de <i>man</i>."
      },
      {
        q: "Completa la frase.",
        tr: "Aquí hay que ser puntual y no se puede fumar.",
        why: "<i>Hier muss man pünktlich sein, und man darf nicht rauchen.</i> Para «no se puede fumar» (no está permitido) el alemán dice <i>man darf nicht rauchen</i>. <i>Man kann nicht rauchen</i> diría en cambio que fumar es imposible, no que está prohibido."
      },
      {
        tr: "En nuestra empresa se empieza a las ocho. En la pausa del almuerzo se come en el comedor. Aquí nos tuteamos.",
        why: "En <i>isst</i> la <b>ss</b> es una <b>s</b> sorda y la <b>i</b> es breve; en <i>Kantine</i> el acento cae en <b>ti</b>, con la <b>i</b> larga [kanˈtiːnə]."
      },
      {
        tr: "Aquí hay que ser puntual, y en la oficina no se puede fumar.",
        why: "En <i>pünktlich</i> la <b>ü</b> es breve [ʏ], la <b>n</b> delante de <b>k</b> es nasal velar [ŋ] y la <b>ch</b> final después de <b>i</b> es [ç]."
      }
    ]
  },
  "lesson:a2-u06-l4": {
    theme: "Reunión",
    title: "En la reunión",
    objectives: [
      "ordenar las intervenciones con zuerst, dann, danach y außerdem",
      "poner el verbo justo después de estas palabras, antes del sujeto",
      "hacer una propuesta y dar la conformidad"
    ],
    theory: [
      {
        h: "zuerst, dann, danach, außerdem",
        p: "<strong>zuerst</strong> (primero, ante todo), <strong>dann</strong> (luego), <strong>danach</strong> (después, a continuación) y <strong>außerdem</strong> (además) pueden abrir una oración. Cuando ocupan la <strong>primera posición</strong>, el verbo conjugado viene <strong>justo después</strong> y el sujeto lo sigue: <em>Zuerst besprechen wir die Tagesordnung. Dann diskutieren wir den Vorschlag. Danach schreibt Anna das Protokoll. Außerdem brauchen wir einen neuen Drucker.</em> También pueden ir más adelante, después del sujeto: <em>Wir besprechen zuerst die Tagesordnung.</em> Para una propuesta: <em>Ich schlage vor, dass wir einen neuen Termin machen.</em> Para dar la conformidad: <em>Ich bin einverstanden. Ich stimme zu.</em>"
      },
      {
        contrast: "En español <em>primero, luego, después, además</em> no cambian el orden: <em>primero hablamos de la propuesta</em>, y el sujeto puede ir antes o después del verbo, o incluso omitirse. En alemán, cuando estas palabras abren la oración, el verbo conjugado queda en segunda posición: <em>Zuerst besprechen wir ...</em>, no «Zuerst wir besprechen». Y el pronombre no se puede omitir: <em>wir</em> tiene que estar. Atención a <em>antes</em> y <em>después</em>: «primero» es <em>zuerst</em>, pero «antes de la reunión» es <em>vor der Besprechung</em> (<em>vor</em> + dativo); y «después de la reunión» es <em>nach der Besprechung</em>, mientras que el adverbio «después» es <em>danach</em>."
      },
      {
        trap: "Con <em>zuerst, dann, danach, außerdem</em> delante, <em>wir besprechen</em> se convierte en <em>besprechen wir</em>. El verbo separable sigue dividido: <em>Danach fängt Anna an.</em> Después de <em>dass</em>, en cambio, el verbo conjugado va al final: <em>Ich schlage vor, dass wir einen neuen Termin machen.</em> Después de <em>glauben</em> y <em>meinen</em> también se puede omitir <em>dass</em>, y entonces el verbo vuelve a la segunda posición: <em>Ich meine, wir machen einen neuen Termin.</em>"
      },
      {
        tip: "Para discrepar con educación: <em>Das sehe ich anders.</em> Para pedir la palabra o una pausa: <em>Ich habe eine Frage. Könnten wir eine Pause machen?</em> Una lista en tres tiempos se construye con <em>zuerst, dann, danach</em>, y un punto más con <em>außerdem</em>."
      }
    ],
    grammar: {
      title: "zuerst, dann, danach, außerdem: el verbo justo después",
      note: "Con <b>zuerst, dann, danach, außerdem</b> en primera posición el verbo conjugado va en <b>segundo lugar</b> y el sujeto viene después.",
      table: {
        head: ["palabra", "significado", "ejemplo"],
        rows: [
          ["zuerst", "primero, ante todo", "Zuerst besprechen wir die Tagesordnung."],
          ["dann", "luego", "Dann diskutieren wir den Vorschlag."],
          ["danach", "después, a continuación", "Danach schreibt Anna das Protokoll."],
          ["außerdem", "además", "Außerdem brauchen wir einen neuen Drucker."]
        ]
      },
      examples: [
        { tr: "Primero hablamos del orden del día.", note: "zuerst: verbo + sujeto" },
        { tr: "Luego discutimos la propuesta.", note: "dann: diskutieren wir" },
        { tr: "Después Anna escribe el acta.", note: "danach: schreibt Anna" },
        { tr: "Además necesitamos una impresora nueva.", note: "außerdem: brauchen wir" },
        { tr: "Propongo fijar una nueva fecha.", note: "dass: el verbo va al final" },
        { tr: "Estoy de acuerdo.", note: "einverstanden con sein" }
      ]
    },
    vocab: [
      "la reunión",
      "la propuesta",
      "el orden del día",
      "el resultado",
      "el acta",
      "el punto",
      "proponer",
      "estar de acuerdo, aprobar",
      "de acuerdo",
      "primero, ante todo",
      "después, a continuación",
      "además"
    ],
    exercises: [
      {
        q: "¿Qué frase es correcta?",
        opts: [
          "Zuerst wir besprechen die Tagesordnung.",
          "Zuerst besprechen wir die Tagesordnung.",
          "Zuerst wir die Tagesordnung besprechen."
        ],
        why: "Con <i>zuerst</i> en primera posición el verbo viene justo después, luego el sujeto: <b>Zuerst besprechen wir ...</b>."
      },
      {
        q: "Completa: «Zuerst besprechen wir die Tagesordnung, ___ diskutieren wir den Vorschlag.» (luego)",
        hint: "dos palabras posibles",
        why: "Valen <b>dann</b> y <b>danach</b>: las dos abren la oración y el verbo viene justo después."
      },
      {
        q: "Completa: «Außerdem ___ wir einen neuen Drucker.» (brauchen)",
        hint: "presente, wir",
        why: "<b>brauchen</b>: después de <i>außerdem</i> el verbo va en segunda posición, luego <i>wir</i>."
      },
      {
        q: "Une cada palabra con su significado.",
        pairs: ["propuesta", "orden del día", "resultado", "acta"]
      },
      {
        tr: "Después, Anna escribe el acta.",
        why: "<i>Danach schreibt Anna das Protokoll</i>: el verbo viene justo después de <i>danach</i>. También valen <i>Anna schreibt danach das Protokoll</i>, <i>Anna schreibt das Protokoll danach</i> y <i>Das Protokoll schreibt Anna danach</i>."
      },
      {
        tr: "Además tengo una pregunta.",
        why: "<i>Außerdem habe ich eine Frage</i>: el verbo viene antes del sujeto. También vale <i>Ich habe außerdem eine Frage</i>."
      },
      {
        q: "Completa la frase.",
        tr: "Primero hablamos de la propuesta. Luego Anna escribe el acta.",
        why: "<i>Zuerst besprechen wir den Vorschlag. Dann schreibt Anna das Protokoll.</i> Para «luego» valen <i>dann</i> y <i>danach</i>."
      },
      {
        q: "Estás en una reunión.",
        setting: "Tu jefe te pregunta cómo empezar.",
        lines: [
          { tr: "¡Buenos días! Hoy tenemos mucho trabajo. ¿Cómo empezamos?" },
          {
            tr: "Responde que primero habláis del orden del día.",
            answerTr: "Primero hablamos del orden del día."
          },
          { tr: "Bien. ¿Y después?" },
          {
            tr: "Responde que luego discutís la propuesta del señor Weber.",
            answerTr: "Después discutimos la propuesta del señor Weber."
          }
        ]
      },
      {
        tr: "Primero hablamos del orden del día. Después discutimos la propuesta. Además Anna escribe el acta.",
        why: "En <i>Besprechung</i> la <b>sp</b> después de <b>Be-</b> se lee [ʃp] y la <b>ch</b> es [ç]; en <i>Protokoll</i> el acento cae en la última sílaba; en <i>außerdem</i> la <b>ß</b> es una <b>s</b> sorda."
      },
      {
        tr: "Propongo discutir primero el orden del día.",
        why: "En <i>vor</i> la <b>v</b> se lee [f] y en <i>schlage</i> la <b>sch</b> es [ʃ]; <i>zuerst</i> se lee [tsuˈʔeːɐ̯st], con <b>z</b> = [ts]."
      }
    ]
  },
  "lesson:a2-u06-test": {
    theme: "Verificación",
    title: "Test: En la oficina",
    objectives: ["comprobar las peticiones corteses, las preguntas indirectas, la carta formal, man y los conectores de secuencia"],
    theory: [
      {
        p: "Diez preguntas sobre la unidad. Se aprueba con el 70%. No vuelvas a mirar las lecciones mientras respondes: si no recuerdas algo, es mejor volver a repasar."
      }
    ],
    exercises: [
      {
        tr: "Conjuga können en Konjunktiv II: du, wir, ihr.",
        why: "<i>könntest, könnten, könntet</i>: la <b>ö</b> con diéresis y la <b>-e-</b> del Konjunktiv II."
      },
      {
        q: "Completa: «Ich weiß nicht, ___ Herr Weber im Büro ist.» (si)",
        hint: "pregunta de sí/no",
        why: "Una pregunta de sí/no se vuelve indirecta con <b>ob</b>, y el verbo va al final."
      },
      {
        q: "Completa: «Hier ___ man pünktlich sein.» (müssen)",
        hint: "tercera persona del singular",
        why: "<b>muss</b>: con <i>man</i> el modal va en tercera persona del singular."
      },
      {
        q: "Completa: «Sehr ___ Frau Keller,» (geehrt, con la terminación)",
        hint: "femenino, sin artículo",
        why: "Con <i>Frau</i> el adjetivo sin artículo lleva <b>-e</b>: <i>geehrte</i>."
      },
      {
        q: "Completa: «Zuerst ___ wir die Tagesordnung.» (besprechen)",
        hint: "verbo antes del sujeto",
        why: "Después de <i>zuerst</i> viene el verbo, luego el sujeto: <b>besprechen wir</b>."
      },
      {
        q: "¿Qué frase es la petición cortés?",
        opts: ["Rufen Sie mich zurück!", "Könnten Sie mich bitte zurückrufen?", "Sie rufen mich zurück."],
        why: "<b>Könnten Sie ...?</b> con el infinitivo al final es la fórmula cortés; las otras dos son una orden y una afirmación."
      },
      {
        q: "Une cada palabra con su significado.",
        pairs: ["recado", "asunto (del correo)", "reunión", "colega"]
      },
      {
        tr: "¿Podría confirmarme la cita, por favor?",
        why: "<i>Könnten Sie mir den Termin bitte bestätigen</i>: el infinitivo cierra la frase. También vale <i>Könnten Sie mir bitte den Termin bestätigen</i>."
      },
      {
        tr: "Quisiera saber si el señor Weber está hoy en la oficina. ¿Podría devolverme la llamada, por favor?",
        why: "En <i>Büro</i> la <b>ü</b> es [y] y el acento cae en <b>ro</b>; en <i>ich</i> la <b>ch</b> es [ç]; en <i>wissen</i> la <b>w</b> es [v] y la <b>ss</b> es una <b>s</b> sorda."
      },
      {
        tr: "En nuestra empresa se empieza a las ocho, y lo primero es hablar del orden del día.",
        why: "En <i>acht</i> la <b>ch</b> después de <b>a</b> es [x]; <i>Bei</i> tiene <b>ei</b> = [aɪ]; en <i>zuerst</i> la <b>z</b> es [ts] y las vocales <b>u</b> y <b>e</b> se pronuncian separadas."
      }
    ]
  },
  "unit:a2-u07": {
    title: "Fiestas y costumbres",
    grammarNote: "gratulieren y otros verbos con dativo · fechas (am 3. Oktober) · Hast du Lust, ... zu ...? · adjetivo usado como adverbio · normalerweise, leider, hoffentlich"
  },
  "lesson:a2-u07-l1": {
    theme: "Felicitaciones y regalos",
    title: "¡Muchas felicidades!",
    objectives: [
      "felicitar a alguien con gratulieren y Herzlichen Glückwunsch",
      "usar el dativo con gratulieren, schenken y danken",
      "decir una fecha con am y el número ordinal (am 3. Oktober)"
    ],
    theory: [
      {
        h: "Felicitar a alguien",
        p: "Para felicitar a alguien existe el verbo <strong>gratulieren</strong>: la persona va en <strong>dativo</strong> y la ocasión se introduce con <strong>zu</strong> + dativo, es decir, <em>zum</em> (<em>zu dem</em>, masculino y neutro) o <em>zur</em> (<em>zu der</em>, femenino): <em>Ich gratuliere dir zum Geburtstag. Wir gratulieren euch zur Hochzeit.</em> Como fórmula fija, sin verbo: <em>Herzlichen Glückwunsch zum Geburtstag!</em> o <em>Alles Gute zum Geburtstag!</em> Para las fiestas: <em>Frohe Weihnachten!</em> y <em>Frohes neues Jahr!</em>"
      },
      {
        h: "Regalar y agradecer: otra vez el dativo",
        p: "También <strong>schenken</strong> (regalar) y <strong>danken</strong> (agradecer, dar las gracias) piden la persona en dativo: <em>Ich schenke meiner Schwester ein Buch. Ich danke dir für das Geschenk.</em> Con <em>schenken</em> lo regalado va en acusativo (<em>ein Buch</em>); con <em>danken</em> el motivo se introduce con <strong>für</strong> + acusativo."
      },
      {
        h: "Las fechas: am + número ordinal",
        p: "Una fecha se dice con <strong>am</strong> y el número <strong>ordinal</strong>. Se escribe con punto: <em>am 3. Oktober</em>, y se lee <em>am dritten Oktober</em>. El punto después del número indica precisamente que es un ordinal. Hasta el 19 se añade <em>-ten</em> (<em>am vierten, am siebten, am achten</em>), a partir del 20 <em>-sten</em> (<em>am zwanzigsten, am dreißigsten</em>); <em>am zweiten</em> (2.) es regular; tienen formas especiales <em>am ersten</em> (1.) y <em>am dritten</em> (3.). Para decir cuándo es tu cumpleaños: <em>Wann hast du Geburtstag? Am 3. Oktober.</em> o <em>Ich habe am 3. Oktober Geburtstag.</em>"
      },
      {
        contrast: "En español <em>felicitar</em> lleva complemento directo (<em>lo felicito</em>, <em>la felicito</em>), mientras que <em>regalar</em> y <em>agradecer algo</em> llevan complemento indirecto (<em>le regalo</em>, <em>le agradezco</em>). En alemán los tres verbos piden la persona en dativo: <em>ich gratuliere <b>dir</b></em>, <em>ich danke <b>dir</b></em>, <em>ich schenke <b>dir</b></em>. Para las fechas el español usa el artículo y el cardinal (<em>el 3 de octubre</em>, solo <em>el primero</em> es ordinal); el alemán usa <em>am</em> y un ordinal para todos los días, también para el 3 y el 20, y no lleva <em>de</em> entre el día y el mes."
      },
      {
        trap: "No se dice «ich gratuliere dich» ni «ich danke dich»: como en español <em>lo felicito</em> es complemento directo, es fácil escribir <em>dich</em>, pero el pronombre es <em>dir</em>. La ocasión no lleva <em>für</em> (aunque en español se diga «felicitar por») sino <em>zu</em>: <em>zum Geburtstag</em>, no «für Geburtstag». Y <em>zum</em> o <em>zur</em> depende del género alemán: <em>der Geburtstag</em> → <em>zum</em>, <em>die Hochzeit</em> → <em>zur</em>, <em>das Fest</em> → <em>zum</em>. En la fecha se olvida a menudo el punto: <em>am 3 Oktober</em> parece un cardinal, y en alemán se escribe <em>am 3. Oktober</em>."
      },
      {
        tip: "Una frase completa para una tarjeta: <em>Liebe Anna, herzlichen Glückwunsch zum Geburtstag! Ich schenke dir ein Buch.</em> Los meses se dicen con <em>im</em> (<em>im Oktober</em>), el día concreto con <em>am</em> (<em>am 3. Oktober</em>)."
      }
    ],
    grammar: {
      title: "Verbos con dativo y fechas",
      note: "<b>gratulieren, schenken, danken</b>: la persona va en <b>dativo</b>. La ocasión: <b>zum / zur</b> + dativo. La fecha: <b>am</b> + ordinal con punto, <b>am 3. Oktober</b>.",
      table: {
        head: ["verbo", "persona (dativo)", "el resto de la frase"],
        rows: [
          ["gratulieren", "Ich gratuliere dir", "zum Geburtstag."],
          ["schenken", "Ich schenke meiner Schwester", "ein Buch."],
          ["danken", "Ich danke dir", "für das Geschenk."],
          ["Geburtstag haben", "-", "Ich habe am 3. Oktober Geburtstag. (sin persona en dativo)"]
        ]
      },
      examples: [
        { tr: "Te felicito por tu cumpleaños.", note: "gratulieren + dir; zum = zu dem" },
        { tr: "¡Muchas felicidades en tu cumpleaños!", note: "fórmula fija, sin verbo" },
        { tr: "Os felicitamos por vuestra boda.", note: "zur = zu der (die Hochzeit es femenino)" },
        { tr: "Mi cumpleaños es el 3 de octubre.", note: "am + ordinal con punto" },
        { tr: "Le regalo un libro a mi hermana.", note: "meiner Schwester: dativo femenino" },
        { tr: "Te doy las gracias por el regalo.", note: "danken + dativo; für + acusativo" }
      ]
    },
    vocab: [
      "el cumpleaños",
      "el regalo",
      "la boda",
      "la felicitación, los mejores deseos",
      "felicitar",
      "regalar",
      "agradecer, dar las gracias",
      "la fiesta, la celebración",
      "la tarta, el pastel",
      "celebrar",
      "la fiesta (entre amigos)",
      "la velita"
    ],
    exercises: [
      {
        q: "¿Cómo felicitas por su cumpleaños a un amigo?",
        opts: [
          "Ich gratuliere dir zum Geburtstag.",
          "Ich gratuliere dich zum Geburtstag.",
          "Ich gratuliere dir für Geburtstag."
        ],
        why: "<i>Gratulieren</i> pide la persona en dativo (<b>dir</b>) y la ocasión con <b>zu</b> + dativo: <i>zum Geburtstag</i>."
      },
      {
        q: "¿Cómo dices «Mi cumpleaños es el 3 de octubre»?",
        opts: [
          "Mein Geburtstag ist an 3. Oktober.",
          "Mein Geburtstag ist am 3. Oktober.",
          "Mein Geburtstag ist im 3. Oktober."
        ],
        why: "Para una fecha se usa <b>am</b> y el ordinal con punto: <i>am 3. Oktober</i>. <i>Im</i> sirve para el mes entero: <i>im Oktober</i>."
      },
      {
        q: "¿Qué le dices a alguien que se casa?",
        opts: [
          "Herzlichen Glückwunsch zum Hochzeit!",
          "Herzlichen Glückwunsch in der Hochzeit!",
          "Herzlichen Glückwunsch zur Hochzeit!"
        ],
        why: "<i>Die Hochzeit</i> es femenino: <b>zur</b> = <i>zu der</i>. <i>Zum</i> se usaría con un masculino o un neutro."
      },
      {
        q: "Completa: «Ich schenke ___ Schwester ein Buch.» (a mi hermana)",
        opts: ["meiner", "meine", "meinem"],
        why: "<i>Schenken</i> pide la persona en dativo, y <i>die Schwester</i> es femenino: <b>meiner</b>. <i>Meinem</i> es el dativo de masculino y neutro."
      },
      {
        q: "Completa: «Ich gratuliere ___ zum Geburtstag.» (a ti)",
        hint: "dativo de du",
        why: "<b>dir</b> es el dativo de <i>du</i>: <i>Ich gratuliere dir zum Geburtstag.</i>"
      },
      {
        q: "Completa: «Mein Geburtstag ist ___ 3. Oktober.» (el)",
        hint: "preposición de la fecha",
        why: "Con una fecha se usa <b>am</b>: <i>am 3. Oktober</i>."
      },
      {
        q: "Une cada palabra con su significado.",
        pairs: ["cumpleaños", "regalo", "boda", "felicitación"]
      },
      {
        tr: "Felicito a Tim por su cumpleaños. (verbo: gratulieren)",
        why: "<i>Ich gratuliere Tim zum Geburtstag</i>. También valen <i>Zum Geburtstag gratuliere ich Tim</i> e <i>Ich gratuliere Tim zu seinem Geburtstag</i>."
      },
      {
        tr: "¡Feliz cumpleaños, Anna! Te felicito y te regalo un libro.",
        why: "En <i>Glückwunsch</i> la <b>ü</b> es breve [ʏ], la <b>ck</b> se lee [k] y la <b>sch</b> es [ʃ]; en <i>herzlichen</i> la <b>z</b> es [ts] y la <b>ch</b> tras <b>i</b> es [ç]; en <i>gratuliere</i> la <b>ie</b> es una <b>i</b> larga [iː]."
      },
      {
        tr: "Felicito a mi hermana por su cumpleaños y le regalo un libro.",
        why: "En <i>Schwester</i> la <b>sch</b> es [ʃ] y la <b>w</b> es [v]; en <i>Geburtstag</i> el acento cae en <b>bur</b> y la <b>g</b> final se lee [k]."
      }
    ]
  },
  "lesson:a2-u07-l2": {
    theme: "Invitaciones",
    title: "¿Tienes ganas de venir?",
    objectives: [
      "invitar a alguien con Hast du Lust, ... zu ...?",
      "responder a una invitación: aceptar y declinar",
      "poner zu delante del infinitivo, y dentro de un verbo separable (mitzukommen)"
    ],
    theory: [
      {
        h: "Hast du Lust, ... zu ...?",
        p: "Para invitar a alguien se dice <strong>Hast du Lust, ...</strong> y luego un segundo verbo en infinitivo, precedido de <strong>zu</strong> y colocado <strong>al final</strong>: <em>Hast du Lust, am Samstag zu meiner Party zu kommen? Ich habe Lust, ins Kino zu gehen. Ich habe keine Zeit, am Samstag zu kommen.</em> Así funciona también con otras expresiones, como <em>Es ist schön, ...</em> o <em>Ich habe vor, ...</em> (mira la ficha de gramática)."
      },
      {
        h: "Verbos separables y coma",
        p: "Con un verbo separable <strong>zu va en medio</strong>, entre el prefijo y el verbo, y todo se escribe en una palabra: <em>mitkommen</em> → <em>Hast du Lust, mitzukommen?</em>; <em>einladen</em> → <em>Es ist schön, Freunde einzuladen.</em> La <strong>coma</strong> se pone cuando el grupo con <em>zu</em> está ampliado, es decir, tiene otras palabras además del infinitivo (<em>..., am Samstag zu meiner Party zu kommen</em>); tras un sustantivo como <em>Lust</em> o <em>Zeit</em> suele escribirse siempre. Tras un verbo, con el infinitivo simple (<em>Ich versuche zu schlafen</em>), la coma es facultativa."
      },
      {
        contrast: "El español usa <em>de</em> + infinitivo: <em>¿tienes ganas de venir?</em>, <em>no tengo tiempo de cocinar</em>. El alemán tiene <em>zu</em> + infinitivo, y en español el infinitivo sigue a <em>ganas de</em> o <em>tiempo de</em>, mientras que en alemán los complementos suelen ir antes de <em>zu</em> + infinitivo: <em>Lust, am Samstag ins Kino zu gehen</em>. Como el español no tiene verbos con prefijo separable, <em>mitzukommen</em> (con <em>zu</em> dentro de la palabra) es nuevo: en español sería <em>venir con</em>, en dos palabras. Tras los verbos modales (<em>können, müssen, wollen</em>) en alemán <strong>no</strong> hay <em>zu</em>, igual que en español no hay <em>de</em> tras <em>poder</em> o <em>querer</em>: <em>Kannst du kommen?</em> (¿puedes venir?)."
      },
      {
        trap: "No se escribe «zu mitkommen» ni «mit zu kommen»: la forma es <em>mitzukommen</em>, en una palabra. Y no se dice «Hast du Lust, kommen?»: hace falta <em>zu</em>, <em>Hast du Lust, zu kommen?</em>. Tras un modal, en cambio, falta <em>zu</em>: <em>Ich kann kommen</em>, no «Ich kann zu kommen»."
      },
      {
        tip: "Para responder: <em>Danke für die Einladung! Ich komme gern.</em> o <em>Ich sage gern zu</em> (acepto). Para declinar: <em>Leider habe ich keine Zeit.</em> o <em>Leider muss ich absagen.</em> Para invitar: <em>Ich lade dich zu meiner Party ein.</em>"
      }
    ],
    grammar: {
      title: "zu + infinitivo",
      note: "<b>zu</b> + infinitivo <b>al final</b>: <i>Ich habe Lust, ins Kino zu gehen.</i> Verbo separable: <b>zu</b> en medio (<i>mitzukommen</i>). Grupo ampliado: <b>coma</b>. Tras un verbo modal no hay <i>zu</i>.",
      table: {
        head: ["construcción", "ejemplo", "nota"],
        rows: [
          ["Lust haben", "Ich habe Lust, ins Kino zu gehen.", "zu delante del infinitivo, al final"],
          ["keine Zeit haben", "Ich habe keine Zeit, am Samstag zu kommen.", "grupo ampliado: coma"],
          ["verbo separable", "Hast du Lust, mitzukommen?", "zu en medio: mitzukommen"],
          ["verbo modal", "Kannst du kommen?", "sin zu"]
        ]
      },
      examples: [
        { tr: "¿Tienes ganas de venir tú también?", note: "mitkommen: zu en medio, mitzukommen" },
        { tr: "¿Tienes ganas de venir el sábado a mi fiesta?", note: "grupo ampliado: coma tras Lust" },
        { tr: "Tengo ganas de ir al cine.", note: "zu gehen: zu delante del infinitivo" },
        { tr: "No tengo tiempo de venir el sábado.", note: "keine Zeit, ... zu kommen" },
        { tr: "Es bonito invitar a los amigos.", note: "einladen: zu en medio, einzuladen" },
        { tr: "¡Gracias por la invitación! Vengo con mucho gusto.", note: "respuesta a una invitación" }
      ]
    },
    vocab: [
      "la invitación",
      "invitar",
      "las ganas",
      "venir tú también, venir con (alguien)",
      "cancelar, declinar",
      "aceptar (una invitación)",
      "la idea",
      "el invitado",
      "la visita, los invitados",
      "la sorpresa",
      "pasar (a visitar)",
      "el tiempo"
    ],
    exercises: [
      {
        q: "¿Cómo invitas a un amigo a venir contigo?",
        opts: [
          "Hast du Lust, mitzukommen?",
          "Hast du Lust, zu mitkommen?",
          "Hast du Lust, mitkommen zu?"
        ],
        why: "Con un verbo separable <b>zu</b> va en medio, todo en una palabra: <i>mitzukommen</i>."
      },
      {
        q: "Completa: «Hast du Lust, heute Abend ins Kino ___ gehen?»",
        hint: "una palabra breve antes del infinitivo",
        why: "<b>zu</b> va directamente delante del infinitivo: <i>ins Kino zu gehen</i>."
      },
      {
        q: "Completa: «Hast du ___, mitzukommen?» (ganas)",
        hint: "sustantivo, con mayúscula",
        why: "<b>Lust</b> haben: <i>Hast du Lust, mitzukommen?</i>"
      },
      {
        q: "Une cada palabra con su significado.",
        pairs: ["invitar", "cancelar, declinar", "aceptar (una invitación)", "sorpresa"]
      },
      {
        tr: "¿Tienes ganas de venir a visitarnos?",
        why: "<i>Hast du Lust, uns zu besuchen?</i>: la coma tras <i>Lust</i>, <i>zu</i> directamente delante de <i>besuchen</i>, al final."
      },
      {
        tr: "¿Tienes ganas de ir al cine?",
        why: "<i>Hast du Lust, ins Kino zu gehen?</i> También vale <i>in das Kino</i>. <i>Zu gehen</i> cierra la frase."
      },
      {
        q: "Completa la frase.",
        tr: "¡Gracias por la invitación! Tengo ganas de venir a vuestra fiesta.",
        why: "<i>Die Einladung</i> es la invitación. <i>Zu eurer Party zu kommen</i>: la primera <b>zu</b> es la preposición, la segunda introduce el infinitivo."
      },
      {
        q: "Te invitan a una fiesta.",
        setting: "Una amiga te invita a su fiesta del sábado.",
        lines: [
          { tr: "¡Hola! El sábado es mi fiesta. ¿Tienes ganas de venir?" },
          {
            tr: "Da las gracias por la invitación y di que vienes con gusto.",
            answerTr: "¡Gracias por la invitación! Vengo con mucho gusto."
          },
          { tr: "¡Genial! ¿Puedes traer una tarta?" },
          {
            tr: "Responde que sí y di que tienes ganas de hacer una tarta.",
            answerTr: "Sí, con gusto. Tengo ganas de hacer una tarta."
          }
        ]
      },
      {
        tr: "¿Tienes ganas de venir a mi fiesta el sábado? Por desgracia no tengo tiempo, ¡pero gracias por la invitación!",
        why: "En <i>Einladung</i> la <b>ei</b> es [aɪ]; en <i>Samstag</i> la <b>s</b> inicial es sonora [z]; en <i>kommen</i> la <b>o</b> es breve y la <b>mm</b> se lee como una sola [m]."
      },
      {
        tr: "¿Tienes ganas de venir conmigo al cine?",
        why: "En <i>Kino</i> la <b>i</b> es larga [iː]; en <i>mit</i> la <b>i</b> es breve; en <i>Lust</i> la <b>u</b> es breve y la <b>st</b> se lee [st]."
      }
    ]
  },
  "lesson:a2-u07-l3": {
    theme: "Saludos y costumbres",
    title: "Alemania, Austria, Suiza",
    objectives: [
      "conocer algunos saludos típicos de las tres zonas (Grüß Gott, Grüezi, Servus)",
      "describir una costumbre como tendencia, con oft y meistens",
      "decir cómo se saluda y en qué registro, entre du y Sie"
    ],
    theory: [
      {
        h: "Un alemán, tres países",
        p: "Se habla alemán en Alemania, en Austria y en Suiza (donde, además del alemán, hay francés, italiano y romanche). Alemania, Austria y Suiza comparten el alemán estándar, con algunas diferencias nacionales de léxico, pronunciación y ortografía; los saludos y algunas costumbres cambian de una región a otra. <em>Guten Tag</em> sirve más o menos en todas partes. <em>Grüß Gott</em> se oye más a menudo en el sur de Alemania y en Austria, <em>Servus</em> sobre todo en Austria y en Baviera (también se dice al despedirse), <em>Grüezi</em> en la Suiza alemana, <em>Moin</em> en el norte de Alemania. Son <strong>tendencias</strong>, no reglas: por eso en las frases de esta lección aparecen <em>oft</em> y <em>meistens</em>."
      },
      {
        h: "Contar una costumbre",
        p: "Para describir una costumbre se usa <strong>man</strong> con el verbo en tercera persona del singular: <em>In der Schweiz sagt man oft Grüezi.</em> Una tendencia se indica con <em>oft, meistens, in vielen Familien</em>: <em>In vielen Familien feiert man Weihnachten am 24. Dezember.</em> El registro se elige con <em>du</em> y <em>Sie</em>: <em>Im Büro siezt man oft, unter Freunden duzt man sich.</em>"
      },
      {
        contrast: "En español, en Navidad, la <em>Nochebuena</em> (la noche del 24) es un momento central en muchas familias, y en España muchos niños reciben los regalos el 6 de enero, el día de Reyes. En muchas familias alemanas el momento principal es también la noche del 24 de diciembre, <em>Heiligabend</em>, y con los regalos; el 25 y el 26 son <em>Feiertage</em>. Son tendencias y no reglas: cada familia y cada región tiene sus costumbres. En <em>Silvester</em> (el 31 de diciembre, Nochevieja) mucha gente lo celebra con amigos y fuegos artificiales a medianoche, no con las doce uvas. Otra diferencia: <em>du</em> y <em>Sie</em> se parecen a <em>tú</em> y <em>usted</em>, pero <em>Sie</em> sirve también para el plural (como <em>ustedes</em>) y lleva el verbo en tercera persona del plural: <em>Sie kommen</em> es «usted viene» y «ustedes vienen»."
      },
      {
        trap: "No generalices: «En Alemania se dice Grüß Gott» es demasiado amplio, porque en muchas zonas del norte casi no se oye. Mejor una frase prudente: <em>In Süddeutschland und in Österreich sagt man oft Grüß Gott.</em> Otra diferencia de escritura: en Suiza normalmente se escribe <em>ss</em> en lugar de <em>ß</em> (<em>Strasse</em>, <em>Grüsse</em>), en Alemania y en Austria se usa <em>ß</em> (<em>Straße</em>, <em>Grüße</em>)."
      },
      {
        tip: "Cuando no sabes qué saludo usar, <em>Guten Tag</em> (y <em>Auf Wiedersehen</em>) es una opción segura, y con personas que no conoces sigue valiendo la forma <em>Sie</em>."
      }
    ],
    grammar: {
      title: "Saludos en las tres zonas y registro",
      note: "Un saludo o una costumbre se describe como <b>tendencia</b>: <b>man</b> + <b>oft / meistens</b>. Entre desconocidos <b>Sie</b>, entre amigos <b>du</b>.",
      table: {
        head: ["saludo", "dónde se oye más a menudo", "nota"],
        rows: [
          ["Guten Tag", "en las tres zonas", "neutro, sirve en muchas situaciones"],
          ["Grüß Gott", "sur de Alemania, Austria", "se oye mucho también en las tiendas"],
          ["Servus", "Austria, Baviera", "informal, para saludar y para despedirse"],
          ["Grüezi", "Suiza alemana", "se dice a menudo a personas que no se conocen"],
          ["Moin", "norte de Alemania", "informal, se oye a cualquier hora"],
          ["Hallo", "en las tres zonas", "informal, entre amigos y compañeros"]
        ]
      },
      examples: [
        { tr: "En el sur de Alemania y en Austria se dice a menudo Grüß Gott.", note: "oft: una tendencia" },
        { tr: "En Suiza se dice a menudo Grüezi.", note: "man + tercera persona del singular" },
        { tr: "Entre amigos se dice también Hallo.", note: "unter Freunden: registro informal" },
        { tr: "En Austria se dice a menudo Servus.", note: "Servus: informal" },
        { tr: "En muchas familias se celebra la Navidad el 24 de diciembre.", note: "in vielen Familien: una tendencia" },
        { tr: "En la oficina a menudo se trata de usted, entre amigos de tú.", note: "siezen y duzen" }
      ]
    },
    vocab: [
      "la costumbre",
      "la tradición",
      "el país, la nación",
      "la región",
      "el día festivo",
      "el mercadillo navideño",
      "el saludo, la bienvenida",
      "saludar, recibir",
      "típico",
      "distinto, variado",
      "la diferencia",
      "Nochevieja (el 31 de diciembre)"
    ],
    exercises: [
      {
        q: "¿Qué saludo se oye a menudo en la Suiza alemana?",
        opts: ["Grüß Gott.", "Grüezi.", "Moin."],
        why: "<i>Grüezi</i> es el saludo que se oye a menudo en la Suiza alemana. <i>Grüß Gott</i> es más frecuente en el sur de Alemania y en Austria, <i>Moin</i> en el norte de Alemania."
      },
      {
        q: "Con un cliente que no conoces, normalmente tratas de...",
        opts: ["Sie", "du", "ihr"],
        why: "Con personas que no conoces y en contextos formales se usa normalmente <b>Sie</b>; <i>du</i> es para amigos y familiares."
      },
      {
        q: "¿Qué frase está formulada con prudencia, sin generalizar?",
        opts: [
          "In der Schweiz gibt es keine Traditionen.",
          "In Deutschland feiern alle Weihnachten gleich.",
          "Die Bräuche sind oft von Region zu Region verschieden."
        ],
        why: "<b>oft</b> presenta las costumbres como tendencias. Las otras dos frases son demasiado absolutas y no son verdad."
      },
      {
        q: "Completa el saludo típico del sur de Alemania y de Austria: «Grüß ___.»",
        hint: "la segunda palabra del saludo",
        why: "<b>Grüß Gott</b>: se oye a menudo en el sur de Alemania y en Austria."
      },
      {
        q: "Une cada palabra con su significado.",
        pairs: ["costumbre", "día festivo", "mercadillo navideño", "diferencia"]
      },
      {
        tr: "En Austria se dice a menudo Servus.",
        why: "<i>In Österreich sagt man oft Servus</i>. También valen <i>Man sagt in Österreich oft Servus</i>, <i>Oft sagt man in Österreich Servus</i>, <i>Man sagt oft in Österreich Servus</i> y <i>Servus sagt man in Österreich oft</i>."
      },
      {
        tr: "En nuestra casa se dice a menudo Hallo. (usa bei uns)",
        why: "<i>Bei uns sagt man oft Hallo</i>. También valen <i>Man sagt bei uns oft Hallo</i>, <i>Oft sagt man bei uns Hallo</i>, <i>Man sagt oft bei uns Hallo</i> y <i>Hallo sagt man bei uns oft</i>."
      },
      {
        q: "Completa la frase.",
        tr: "En Suiza se dice a menudo Grüezi. En Austria se dice a menudo Servus.",
        why: "<i>Die Schweiz</i> tras <i>in der</i>; <i>Österreich</i> tras <i>in</i>, sin artículo."
      },
      {
        tr: "En el sur de Alemania y en Austria se dice a menudo Grüß Gott. En Suiza se dice a menudo Grüezi. Entre amigos se dice también Hallo.",
        why: "En <i>Grüß</i> la <b>ü</b> es larga [yː] y la <b>ß</b> es una <b>s</b> sorda; en <i>Österreich</i> la <b>ö</b> es larga [øː] y la <b>ch</b> final tras <b>ei</b> es [ç]; en <i>Servus</i> la <b>s</b> inicial es sonora [z] y la <b>v</b> es [v]."
      },
      {
        tr: "Las costumbres suelen ser distintas de una región a otra.",
        why: "En <i>Bräuche</i> la <b>äu</b> es [ɔʏ] y la <b>ch</b> tras <b>äu</b> es [ç]; en <i>verschieden</i> la <b>sch</b> es [ʃ] y la <b>ie</b> es una <b>i</b> larga [iː]."
      }
    ]
  },
  "lesson:a2-u07-l4": {
    theme: "Cómo y cuándo",
    title: "normalmente, lentamente",
    objectives: [
      "usar un adjetivo como adverbio, sin terminación (langsam, schnell, laut)",
      "usar normalerweise, leider, hoffentlich y vielleicht",
      "poner el adverbio al principio y el verbo en segunda posición"
    ],
    theory: [
      {
        h: "El adjetivo que hace de adverbio",
        p: "En alemán el <strong>adjetivo</strong> sin terminación puede funcionar como <strong>adverbio</strong>, es decir, decir cómo se hace una acción: <em>Er spricht langsam. Sie fährt schnell. Wir singen laut.</em> Es la misma palabra que usas para describir un sustantivo: <em>Der Zug ist langsam</em>, pero delante de un sustantivo lleva terminación (<em>ein langsamer Zug</em>); como adverbio nunca la lleva."
      },
      {
        h: "Adverbios de frase: normalerweise, leider, hoffentlich, vielleicht",
        p: "Algunos adverbios dicen algo sobre <strong>toda la frase</strong>: <strong>normalerweise</strong> (normalmente), <strong>leider</strong> (por desgracia), <strong>hoffentlich</strong> (ojalá, espero que), <strong>vielleicht</strong> (quizá). Pueden abrir la frase, y entonces el verbo queda en <strong>segunda posición</strong> y el sujeto pasa detrás: <em>Normalerweise feiere ich meinen Geburtstag mit Freunden. Leider habe ich am Samstag keine Zeit. Hoffentlich kommst du zur Party. Vielleicht kommt Tim später.</em> Dentro de la frase suelen ir después del verbo: <em>Ich habe leider keine Zeit.</em>"
      },
      {
        contrast: "El español forma muchos adverbios con <em>-mente</em> (<em>lentamente, rápidamente</em>) o usa el adjetivo en masculino (<em>habla alto</em>, <em>conduce rápido</em>); el alemán usa casi siempre el adjetivo tal cual: <em>langsam</em> es a la vez «lento» y «lentamente». Hay otra diferencia en el orden de las palabras: en español se dice <em>Lamentablemente, yo no tengo tiempo</em>, pero el sujeto puede omitirse (<em>Lamentablemente no tengo tiempo</em>); en alemán el sujeto es obligatorio y, si el adverbio abre la frase, va detrás del verbo: <em>Leider habe ich keine Zeit</em>. Y <em>hoffentlich</em> es un adverbio por sí solo: el español construye la frase con <em>espero que</em> o con <em>ojalá</em> y subjuntivo (<em>ojalá vengas</em>), el alemán usa el indicativo y no pone <em>dass</em>: <em>Hoffentlich kommst du</em>."
      },
      {
        trap: "<em>normal</em> es un adjetivo (<em>Das ist normal</em>), mientras que «normalmente» se dice <em>normalerweise</em>. Cuando una de estas palabras abre la frase, el verbo va justo después: <em>Leider habe ich keine Zeit</em>, no «Leider ich habe keine Zeit». Y no añadas terminación al adverbio: <em>Er spricht langsam</em>, no «Er spricht langsame»."
      },
      {
        tip: "Otros adverbios útiles para aprender junto con estos: <em>deutlich</em> (claramente), <em>leise</em> (bajito, en voz baja), <em>später</em> (más tarde), <em>natürlich</em> (naturalmente, claro)."
      }
    ],
    grammar: {
      title: "Adverbios: adjetivo sin terminación y adverbios de frase",
      note: "Un <b>adjetivo sin terminación</b> hace de adverbio: <i>Er spricht langsam.</i> Los adverbios de frase como <b>normalerweise, leider, hoffentlich, vielleicht</b> pueden abrir la frase: el verbo queda en <b>segunda posición</b>.",
      table: {
        head: ["palabra", "significado", "ejemplo"],
        rows: [
          ["normalerweise", "normalmente", "Normalerweise esse ich um zwölf Uhr."],
          ["leider", "por desgracia", "Leider habe ich keine Zeit."],
          ["hoffentlich", "ojalá, espero que", "Hoffentlich kommst du zur Party."],
          ["vielleicht", "quizá", "Vielleicht komme ich später."],
          ["langsam", "lento; lentamente", "Er spricht langsam."]
        ]
      },
      examples: [
        { tr: "Normalmente celebro mi cumpleaños con amigos.", note: "normalerweise abre la frase: verbo en segunda posición" },
        { tr: "Por desgracia el sábado no tengo tiempo.", note: "leider: habe ich" },
        { tr: "Ojalá vengas a la fiesta.", note: "hoffentlich, sin dass" },
        { tr: "Anna baila despacio y con gracia.", note: "langsam y schön: adjetivos como adverbios" },
        { tr: "Cantamos en voz alta.", note: "laut: sin terminación" },
        { tr: "Quizá Tim venga más tarde.", note: "vielleicht: kommt Tim" }
      ]
    },
    vocab: [
      "normalmente",
      "por desgracia",
      "ojalá, espero que",
      "quizá",
      "lento; lentamente",
      "rápido; rápidamente",
      "fuerte, en voz alta",
      "bajito, en voz baja",
      "claro; claramente",
      "más tarde, después",
      "especialmente, sobre todo",
      "naturalmente, claro"
    ],
    exercises: [
      {
        q: "¿Qué palabra significa «por desgracia»?",
        opts: ["hoffentlich", "leider", "vielleicht"],
        why: "<b>leider</b> = por desgracia. <i>Hoffentlich</i> es «ojalá», <i>vielleicht</i> es «quizá»."
      },
      {
        q: "¿En qué frase <i>langsam</i> describe el verbo, sin terminación?",
        opts: ["Das Kind ist langsam.", "Das ist ein langsames Kind.", "Das Kind spricht langsam."],
        why: "En <i>Das Kind spricht langsam</i>, <b>langsam</b> dice cómo habla el niño, y no lleva terminación. En las otras dos frases describe al niño."
      },
      {
        q: "Completa con la palabra de la lección: «___ feiere ich meinen Geburtstag zu Hause.» (normalmente)",
        hint: "empieza por n",
        why: "<b>Normalerweise</b> abre la frase, y el verbo queda en segunda posición: <i>feiere ich</i>."
      },
      {
        q: "Completa: «___ habe ich am Samstag keine Zeit.» (por desgracia)",
        hint: "adverbio de frase",
        why: "<b>Leider</b> abre la frase y el verbo viene justo después: <i>habe ich</i>."
      },
      {
        q: "Completa: «Die Kinder singen sehr ___.» (fuerte)",
        hint: "adjetivo, sin terminación",
        why: "<b>laut</b> es un adjetivo sin terminación que hace de adverbio."
      },
      {
        q: "Une cada palabra con su significado.",
        pairs: ["normalmente", "por desgracia", "ojalá", "quizá"]
      },
      {
        tr: "Por desgracia no tengo tiempo.",
        why: "<i>Leider habe ich keine Zeit</i>. También vale <i>Ich habe leider keine Zeit</i>."
      },
      {
        q: "Completa la frase (1: despacio, 2: ojalá).",
        tr: "Habla despacio y yo lo entiendo bien. ¡Ojalá vengas a la fiesta!",
        why: "<i>Langsam</i> es el adjetivo sin terminación que hace de adverbio; <i>Hoffentlich</i> abre la frase y el verbo <i>kommst</i> queda en segunda posición."
      },
      {
        tr: "Normalmente celebro el cumpleaños en casa. Por desgracia el sábado no tengo tiempo, pero quizá lo celebremos más tarde.",
        why: "En <i>normalerweise</i> la <b>w</b> es [v] y la <b>ei</b> es [aɪ]; en <i>vielleicht</i> el acento cae en la segunda sílaba (<i>-leicht</i>), la <b>ei</b> es [aɪ] y la <b>ch</b> final es [ç]; en <i>später</i> la <b>sp</b> inicial es [ʃp]."
      },
      {
        tr: "Ojalá vengas a la fiesta. Quizá lo celebremos más tarde.",
        why: "En <i>hoffentlich</i> la <b>ch</b> tras <b>i</b> es [ç]; en <i>später</i> la <b>sp</b> inicial se lee [ʃp]; en <i>vielleicht</i> la <b>v</b> es [f]."
      }
    ]
  },
  "lesson:a2-u07-test": {
    theme: "Prueba",
    title: "Test: Fiestas y costumbres",
    objectives: ["comprobar gratulieren y el dativo, las fechas, zu + infinitivo, los saludos en las tres zonas y los adverbios"],
    theory: [
      {
        p: "Diez preguntas sobre la unidad. Se supera con el 70%. No vuelvas a mirar las lecciones mientras respondes: si no recuerdas algo, es mejor volver a repasar."
      }
    ],
    exercises: [
      {
        q: "Completa: «Wir gratulieren ___ zur Hochzeit.» (a vosotros)",
        hint: "dativo de ihr",
        why: "<b>euch</b> es el dativo de <i>ihr</i>: <i>Wir gratulieren euch zur Hochzeit.</i>"
      },
      {
        q: "Completa: «Der Kurs beginnt ___ 5. Mai.» (el)",
        hint: "preposición de la fecha",
        why: "Con una fecha se usa <b>am</b>: <i>am 5. Mai</i>."
      },
      {
        q: "Completa: «Hast du Lust, ins Kino ___ gehen?»",
        hint: "delante del infinitivo",
        why: "<b>zu</b> va directamente delante del infinitivo: <i>ins Kino zu gehen</i>."
      },
      {
        q: "Completa: «___ kommst du zur Party.» (ojalá)",
        hint: "adverbio de frase",
        why: "<b>Hoffentlich</b> abre la frase y el verbo <i>kommst</i> queda en segunda posición. Tras <i>hoffentlich</i> no hay <i>dass</i>."
      },
      {
        q: "Completa: «Ich schenke ___ Bruder ein Buch.» (a mi hermano)",
        opts: ["meinem", "meinen", "mein"],
        why: "<i>Schenken</i> pide la persona en dativo, y <i>der Bruder</i> es masculino: <b>meinem</b>."
      },
      {
        q: "¿Qué frase es una invitación correcta?",
        opts: ["Hast du Lust, zu mitkommen?", "Hast du Lust, mitzukommen?", "Hast du Lust, mitkommen?"],
        why: "Con un verbo separable <b>zu</b> va en medio: <i>mitzukommen</i>, en una palabra."
      },
      {
        q: "¿Qué significa <i>leider</i>?",
        opts: ["normalmente", "quizá", "por desgracia"],
        why: "<b>leider</b> = por desgracia. <i>Normalerweise</i> es «normalmente», <i>vielleicht</i> es «quizá»."
      },
      {
        q: "Une cada palabra con su significado.",
        pairs: ["felicitar", "regalo", "invitación", "costumbre"]
      },
      {
        tr: "¡Muchas felicidades en tu cumpleaños! ¿Tienes ganas de venir el sábado a mi fiesta?",
        why: "En <i>Glückwunsch</i> la <b>ü</b> es breve [ʏ] y la <b>sch</b> es [ʃ]; en <i>Samstag</i> la <b>s</b> inicial es sonora [z]; en <i>Lust</i> la <b>u</b> es breve."
      },
      {
        tr: "Te felicito por tu cumpleaños. ¿Tienes ganas de celebrarlo con nosotros?",
        why: "En <i>gratuliere</i> la <b>ie</b> es una <b>i</b> larga [iː]; en <i>Geburtstag</i> el acento cae en <b>bur</b>; en <i>feiern</i> la <b>ei</b> es [aɪ]."
      }
    ]
  }
});
