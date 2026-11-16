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
  }
});
