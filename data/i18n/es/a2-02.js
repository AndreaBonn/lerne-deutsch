/* ============================================================
   Learner-language text (es) for data/core/a2-02.js, unit a2-u05.
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
        trap: "Después de <em>ob</em> no se usa <em>wenn</em>: <em>Ich weiß nicht, ob er kommt</em>. Y la coma delante de <em>ob</em>, <em>dass</em> y la palabra interrogativa es obligatoria. Después de <em>Könnten Sie mir sagen</em> la pregunta indirecta ya no es una pregunta directa: <em>Könnten Sie mir sagen, wo Frau Keller ist?</em>, no «wo ist Frau Keller»."
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
        contrast: "El español abre con <em>Estimada señora Keller:</em> (con dos puntos) o <em>Estimado señor Weber:</em> y cierra con <em>Atentamente,</em> o <em>Un cordial saludo</em>. El alemán usa <em>Sehr geehrte</em> (literalmente «muy honrada»), un adjetivo sin artículo: por eso lleva <strong>-e</strong> con <em>Frau</em> y <strong>-er</strong> con <em>Herr</em>. Después de la coma del saludo, la línea siguiente suele empezar con minúscula (<em>..., vielen Dank für ...</em>), salvo que la primera palabra sea un sustantivo. Para una mujer adulta se usa <em>Frau</em>, haya o no estado casada: <em>Fräulein</em> se considera anticuado. Con <em>du</em> se abre con <em>Liebe Anna,</em> o <em>Lieber Tim,</em> y se cierra con <em>Viele Grüße</em>."
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
        contrast: "El español usa el <em>se</em> impersonal (<em>aquí se come a las doce</em>) y la pasiva refleja (<em>se venden libros</em>, donde el verbo concuerda con <em>libros</em>). En alemán los dos casos se dicen con <em>man</em>, que es siempre el sujeto: <em>Man isst um zwölf Uhr. Man verkauft Bücher.</em> El verbo concuerda con <em>man</em>, no con el complemento. Hay un contraste más: el español no necesita ninguna palabra como sujeto (<em>aquí se trabaja hasta las cinco</em>), pero en alemán hace falta <em>man</em>: <em>Hier arbeitet man bis fünf Uhr.</em> También existen <em>uno</em> y la tercera persona del plural (<em>dicen que...</em>), pero <em>man</em> no se parece a <em>uno</em> en registro: es de uso corriente. Y con un reflexivo, el español dice <em>aquí se tutea</em> con un solo <em>se</em>; el alemán usa <em>man</em> y además <em>sich</em>: <em>Hier duzt man sich</em>."
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
        tr: "Aquí nos tuteamos.",
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
  }
});
