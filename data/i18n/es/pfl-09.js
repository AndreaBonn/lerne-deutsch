/* ============================================================
   Learner-language text (es) for data/core/pfl-09.js, unit pfl-u09.
   Keys point at ids in the neutral layer; arrays merge by index,
   so their length has to match core.
   Checked by scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("es", {
  "unit:pfl-u09": {
    title: "Higiene, heridas y alta",
    grammarNote: "el imperativo de cortesía para las medidas de higiene · la pasiva en presente y en Präteritum · la declinación del adjetivo al describir una herida · el Futur I para explicar qué pasará después del alta · los verbos modales para tareas, permisos y obligaciones"
  },
  "lesson:pfl-u09-l1": {
    theme: "Higiene y aislamiento",
    title: "Higiene y aislamiento",
    objectives: [
      "explicar a un paciente y a sus familiares las medidas de higiene con el imperativo de cortesía",
      "decir qué se hace con la pasiva: werden desinfiziert, wurde gefunden",
      "explicar un aislamiento con palabras sencillas, sin alarmar",
      "distinguir Infektion y Ansteckung, Keim y Erreger"
    ],
    theory: [
      {
        h: "Explicar una medida de higiene",
        p: "Con pacientes y visitas las medidas de higiene se explican con el <strong>imperativo de cortesía</strong>, siempre con <em>bitte</em>: <em>Desinfizieren Sie sich bitte die Hände. Ziehen Sie bitte einen Schutzkittel an.</em> El verbo va en primera posición y <em>Sie</em> justo después; el prefijo separable va al final (<em>ziehen ... an</em>). Cuando importa qué se hace y no quién lo hace, se usa la <strong>pasiva</strong>: <em>Die Hände <b>werden</b> desinfiziert. Das Zimmer <b>wird</b> jeden Tag gereinigt.</em> Para algo que ya ha pasado, la pasiva en Präteritum: <em>Bei Herrn Brandt <b>wurde</b> ein Keim gefunden.</em>"
      },
      {
        h: "Aislamiento: qué decirle al paciente",
        p: "Un paciente aislado a menudo tiene miedo o se siente tratado como un peligro. Explica el motivo con palabras sencillas y pon en el centro la protección de los demás: <em>Wir wollen verhindern, dass sich andere Patienten anstecken.</em> Qué significa el germen para su propia salud lo explica el médico: <em>Die Ärztin bespricht mit Ihnen, was das für Sie bedeutet.</em> Las medidas concretas (bata, guantes, visitas, salidas de la habitación) las fija el plan de higiene del centro; los ejemplos de esta lección sirven solo para la lengua."
      },
      {
        contrast: "En español «infección» vale tanto con el médico como con el paciente, y «contagio» es el paso de una persona a otra: «¿Esto se contagia?». El alemán reparte igual, pero conviene saber cuál es la palabra de la calle: <em>die Infektion</em> la entienden también los pacientes, mientras que para el paso de uno a otro se dice <em>die Ansteckung</em>, con el verbo <em>sich anstecken</em> («contagiarse») y el adjetivo <em>ansteckend</em> («contagioso»): <em>Ist das ansteckend?</em> es la pregunta que más vas a oír. Ojo con la sigla: en España se suele decir <em>SARM</em> (<i>Staphylococcus aureus</i> resistente a meticilina); en alemán se dice <em>MRSA</em>, como en inglés, pero deletreado con las letras alemanas (<em>em-er-es-a</em>), y en muchos centros se usa la sigla más amplia <em>MRE</em>, <em>multiresistente Erreger</em>. El paciente suele decir <em>Krankenhauskeim</em>, «germen del hospital»: no es un término preciso, pero es su palabra y te conviene entenderla."
      },
      {
        trap: "<em>desinfizieren</em> termina en <em>-ieren</em>, así que el participio no lleva <em>ge-</em>: <em>Die Hände werden desinfiziert</em>, nunca <em>gedesinfiziert</em>. Con las partes del cuerpo el alemán usa el pronombre reflexivo en dativo, como el español «desinfectarse las manos»: <em>Desinfizieren Sie <b>sich</b> die Hände</em>. Y <em>der Schutzkittel</em> es la bata de protección, desechable o lavable: no la confundas con <em>der Kittel</em> a secas, la bata de trabajo, ni con <em>der Mantel</em>, que es el abrigo."
      },
      {
        tip: "Mientras explicas una medida, enséñala: señala el dispensador, coge una bata en la mano. La palabra se queda mejor si el paciente la asocia a un objeto, y tú no tienes que buscar un sinónimo si no te entiende."
      }
    ],
    grammar: {
      title: "Imperativo de cortesía y pasiva",
      note: "Imperativo: <b>verbo + Sie</b> (+ bitte), el prefijo separable al final. Pasiva en presente: <b>wird / werden</b> + participio; pasiva en Präteritum: <b>wurde / wurden</b> + participio.",
      table: {
        head: ["forma", "estructura", "ejemplo"],
        rows: [
          ["imperativo de cortesía", "verbo + Sie + bitte", "Desinfizieren Sie sich bitte die Hände."],
          ["imperativo, verbo separable", "verbo + Sie ... prefijo", "Ziehen Sie bitte einen Schutzkittel an."],
          ["pasiva en presente", "wird / werden + participio", "Die Hände werden desinfiziert."],
          ["pasiva en Präteritum", "wurde / wurden + participio", "Ein Erreger wurde gefunden."]
        ]
      },
      examples: [
        { tr: "Desinféctese las manos, por favor.", note: "imperativo de cortesía, reflexivo con las partes del cuerpo: sich die Hände" },
        { tr: "Antes de entrar, póngase una bata de protección, por favor.", note: "anziehen es separable: an va al final" },
        { tr: "Antes de la visita, pase por el control de enfermería, por favor.", note: "sich melden es reflexivo, también en imperativo" },
        { tr: "Las manos se desinfectan antes y después de cada contacto con el paciente.", note: "pasiva en presente, plural: werden + desinfiziert, sin ge-" },
        { tr: "Al señor Brandt se le ha detectado un germen multirresistente.", note: "pasiva en Präteritum: wurde + gefunden" },
        { tr: "La habitación se limpia todos los días.", note: "pasiva en presente: wird + gereinigt" }
      ]
    },
    vocab: [
      "la higiene",
      "la infección (también término técnico)",
      "el contagio (palabra de todos los días)",
      "la desinfección de manos",
      "desinfectar",
      "el aislamiento",
      "aislar",
      "el germen",
      "el agente patógeno",
      "la bata de protección",
      "el guante",
      "transmitir"
    ],
    dialogue: [
      "Buenos días, señor Brandt. Tengo que explicarle una cosa. Le han encontrado un germen contra el que muchos antibióticos no funcionan.",
      "¿Es peligroso?",
      "La médica le explicará qué significa para usted. Nosotros queremos sobre todo evitar que otros pacientes se contagien.",
      "¿Por eso la habitación individual?",
      "Exacto. Va a estar aislado durante un tiempo. Quien entre a verle se pone una bata de protección y guantes.",
      "¿Y mi mujer? Quiere venir a verme mañana.",
      "Que pase antes por el control de enfermería, por favor; allí se lo explicamos todo.",
      "¿Y yo qué tengo que hacer?",
      "Desinféctese las manos, por favor, y avísenos antes de salir de la habitación."
    ],
    culture: {
      title: "Una mirada alemana: el plan de higiene",
      text: "<p>En Alemania cada hospital y cada centro de cuidados tiene un <i>Hygieneplan</i>, el plan de higiene, que fija qué se hace, cuándo y con qué. Las recomendaciones nacionales vienen de la KRINKO, la comisión de higiene hospitalaria del <i>Robert Koch-Institut</i>. En los centros más grandes hay una <i>Hygienefachkraft</i>, una enfermera o un enfermero con formación específica en higiene y prevención de infecciones, parecido a la enfermera de control de infecciones o de medicina preventiva: es la persona a quien preguntar cuando una norma no está clara.</p><p>Quien viene de otro país encuentra muchas medidas parecidas a las que conoce, pero los nombres y los detalles cambian de un centro a otro: el plan de higiene de tu planta pesa más que lo que aprendiste en otro sitio.</p>"
    },
    exercises: [
      {
        q: "Pides amablemente a una visita que se desinfecte las manos. ¿Qué frase es correcta?",
        opts: [
          "Desinfizieren Sie sich bitte die Hände.",
          "Sie desinfizieren bitte sich die Hände.",
          "Desinfiziert Sie sich bitte die Hände."
        ],
        why: "En el imperativo de cortesía el verbo va en primera posición y tiene la forma del infinitivo: <b>Desinfizieren Sie</b>. <i>Desinfiziert</i> es la forma de <i>ihr</i> y no va con <i>Sie</i>; en <i>Sie desinfizieren bitte sich</i> el pronombre <i>sich</i> está fuera de lugar (va justo después del verbo), y además es una frase afirmativa, no el imperativo que se pide."
      },
      {
        tr: "El presente de desinfizieren, todas las personas.",
        why: "<i>Desinfiziere, desinfizierst, desinfiziert, desinfizieren, desinfiziert, desinfizieren</i>: verbo regular en <i>-ieren</i>, el acento se queda siempre en <b>zie</b>."
      },
      {
        q: "Completa: «Die Hände ___ vor jedem Patientenkontakt desinfiziert.»",
        hint: "pasiva en presente, plural",
        why: "<b>werden</b>: el sujeto <i>die Hände</i> es plural, así que <i>werden</i> + el participio <i>desinfiziert</i> al final."
      },
      {
        q: "Completa la frase.",
        tr: "Al señor Brandt se le ha detectado un germen multirresistente.",
        why: "<i>Bei Herrn Brandt <b>wurde</b> ein multiresistenter Erreger <b>gefunden</b></i>: pasiva en Präteritum, <i>wurde</i> en segunda posición y el participio al final. En los informes también se lee <i>nachgewiesen</i>, «detectado»."
      },
      {
        q: "¿Qué frases puedes decirle a una visita?",
        opts: [
          "Ziehen Sie bitte einen Schutzkittel an.",
          "Ziehen Sie bitte an einen Schutzkittel.",
          "Desinfizieren Sie sich bitte die Hände.",
          "Melden Sie sich bitte vorher im Stationszimmer.",
          "Desinfizierst du Sie bitte die Hände."
        ],
        why: "<i>anziehen</i> es separable: el prefijo <i>an</i> va al final, no delante del complemento. <i>Desinfizierst du Sie</i> mezcla el tú y el usted: con una visita se dice <i>Desinfizieren Sie sich</i>."
      },
      {
        q: "Elige el artículo determinado correcto para cada sustantivo.",
        items: ["higiene", "infección", "aislamiento", "germen", "agente patógeno", "bata de protección"]
      },
      {
        q: "Relaciona cada palabra con su significado.",
        pairs: ["la desinfección de manos", "la bata de protección", "el guante", "el germen"]
      },
      {
        q: "Ordena las palabras.",
        tr: "Los gérmenes se transmiten a menudo a través de las manos.",
        why: "<i>Keime werden oft über die Hände übertragen.</i> Pasiva en presente: <i>werden</i> en segunda posición, el participio <i>übertragen</i> al final. <i>übertragen</i> no se separa y no lleva <i>ge-</i>."
      },
      {
        q: "Traduce (a una visita): «Desinféctese las manos, por favor.»",
        why: "<i>Desinfizieren Sie sich bitte die Hände</i>: verbo en primera posición, <i>Sie</i>, el reflexivo <i>sich</i> y <i>bitte</i>. También vale <i>Bitte desinfizieren Sie sich die Hände</i> o <i>Desinfizieren Sie bitte Ihre Hände</i>."
      },
      {
        q: "Explicar el aislamiento.",
        setting: "Al señor Brandt lo han pasado a una habitación individual y te hace unas preguntas.",
        lines: [
          { tr: "¿Por qué estoy solo en una habitación?" },
          { tr: "Responde que le han encontrado un germen y que por eso está aislado.", answerTr: "Le han encontrado un germen, por eso está aislado." },
          { tr: "Mi hija quiere venir a verme hoy." },
          { tr: "Responde que antes tiene que pasar por el control de enfermería.", answerTr: "Que pase antes por el control de enfermería, por favor." },
          { tr: "¿Qué tiene que ponerse en la habitación?" },
          { tr: "Responde: una bata de protección y guantes.", answerTr: "Una bata de protección y guantes." }
        ]
      },
      {
        tr: "Quien entre a verle se pone una bata de protección y guantes.",
        why: "En <i>zieht</i> la <b>z</b> es [ts] y la <b>h</b> no se pronuncia; en <i>Schutzkittel</i> el acento cae en <b>Schutz</b> y <b>tz</b> es [ts]; en <i>Handschuhe</i> la <b>H</b> inicial se aspira, a diferencia de la «h» española, y la <b>d</b> de <i>Hand</i> suena [t]."
      },
      {
        tr: "Desinféctese las manos, por favor.",
        why: "En <i>Desinfizieren</i> el acento cae en <b>zie</b>; en <i>Sie</i> y en <i>sich</i> la <b>s</b> inicial es sonora, [z], un sonido que el español casi no tiene; en <i>Hände</i> la <b>ä</b> suena como una <b>e</b> abierta y la <b>H</b> se aspira."
      }
    ]
  },
  "lesson:pfl-u09-l2": {
    theme: "Describir una herida",
    title: "Heridas y cambio de apósito",
    objectives: [
      "describir una herida por color, forma, bordes y exudado",
      "declinar el adjetivo delante del sustantivo: eine gerötete Wunde, der alte Verband",
      "distinguir el adjetivo después de sein, sin terminación, del que va delante del sustantivo",
      "hablar de la herida con el paciente sin hacer diagnósticos"
    ],
    theory: [
      {
        h: "Describir, no valorar",
        p: "Al describir una herida cuenta lo que se ve, se toca y se mide: dónde está (<em>am Unterschenkel</em>), cómo es el borde (<em>der Wundrand ist leicht gerötet</em>), si hay exudado (<em>etwas Wundsekret</em>), cómo está la piel de alrededor (<em>warm, geschwollen</em>). Si algo cambia, lo describes y avisas: <em>Die Rötung ist größer geworden. Ich informiere die Ärztin.</em> Cómo se trata la herida lo deciden el médico y el protocolo del centro; esta lección enseña solo las palabras para describirla."
      },
      {
        h: "El adjetivo: con o sin terminación",
        p: "Después de <em>sein</em> el adjetivo no cambia: <em>Die Wunde <b>ist</b> gerötet. Der Verband <b>war</b> feucht.</em> Delante del sustantivo lleva una terminación. Después de <em>der, die, das</em> en nominativo singular la terminación es <b>-e</b>: <em>der alt<b>e</b> Verband, die klein<b>e</b> Wunde</em>. Después de <em>ein, eine</em> la terminación muestra el género: <em>ein geschwollen<b>er</b> Knöchel, eine gerötet<b>e</b> Wunde, ein klein<b>es</b> Hämatom</em>. El español concuerda el adjetivo siempre, también con «ser» y «estar» («la herida está enrojecida»); el alemán, en cambio, lo deja desnudo después de <em>sein</em>. Los participios usados como adjetivo (<em>gerötet, geschwollen</em>) siguen las mismas reglas."
      },
      {
        contrast: "En español «inflamación» es la palabra de todos los días, y por eso sale sola la tentación de decir <em>Inflammation</em>. En alemán <em>die Inflammation</em> existe, pero se encuentra sobre todo en textos médicos; en la planta, también entre colegas, se dice casi siempre <em>die Entzündung</em>, con el adjetivo <em>entzündet</em>: <em>Die Wunde ist entzündet.</em> El registro latino se mantiene en las palabras en <em>-itis</em> (<em>Bronchitis, Arthritis</em>), que el paciente suele conocer. Con los signos pasa lo mismo: lo que en español se describe como «eritema, edema, calor local» el alemán lo dice con palabras corrientes, <em>Rötung, Schwellung, Überwärmung</em>. Y no confundas «infectada» con «inflamada»: <em>infiziert</em> y <em>entzündet</em> no son lo mismo, y decidir si una herida está infectada le toca al médico, no a tu descripción."
      },
      {
        trap: "<em>die Kur</em> no es la «cura» de una herida: es una estancia de reposo o rehabilitación, a menudo en un balneario. La cura como material es <em>der Verband</em> (el apósito o el vendaje), y «hacer la cura» es <em>der Verbandswechsel</em>, el cambio de apósito. <em>die Bandage</em> tampoco es el vendaje de una herida: es una ortesis o un vendaje de sujeción, por ejemplo para la rodilla. Y ojo al verbo: el apósito se cambia con <em>wechseln</em> (<em>Der Verband wird gewechselt</em>), no con <em>ändern</em>, que es «modificar»."
      },
      {
        tip: "Describe la herida siempre en el mismo orden: localización, tamaño, lecho, borde, exudado, piel de alrededor. Con un esquema fijo no se te olvida nada, y quien lea tu descripción al día siguiente puede compararla con la suya."
      }
    ],
    grammar: {
      title: "El adjetivo en la descripción",
      note: "Después de <b>sein</b>: sin terminación (<i>Die Wunde ist gerötet</i>). Delante del sustantivo, nominativo: después de <b>der/die/das</b> → <b>-e</b>; después de <b>ein/eine</b> → <b>-er</b> (masculino), <b>-e</b> (femenino), <b>-es</b> (neutro).",
      table: {
        head: ["posición", "masculino", "femenino", "neutro"],
        rows: [
          ["después de sein", "Der Verband ist feucht.", "Die Wunde ist gerötet.", "Das Bein ist geschwollen."],
          ["después de der / die / das", "der feuchte Verband", "die gerötete Wunde", "das geschwollene Bein"],
          ["después de ein / eine", "ein feuchter Verband", "eine gerötete Wunde", "ein geschwollenes Bein"]
        ]
      },
      examples: [
        { tr: "La herida está enrojecida e hinchada.", note: "después de ist: gerötet y geschwollen sin terminación" },
        { tr: "En la pierna, por debajo de la rodilla, hay una pequeña herida enrojecida.", note: "eine + femenino: kleine, gerötete" },
        { tr: "El borde de la herida está ligeramente enrojecido.", note: "después de ist, sin terminación; leicht modifica a gerötet" },
        { tr: "El apósito viejo estaba húmedo.", note: "der + nominativo: alte; después de war: feucht sin terminación" },
        { tr: "El apósito nuevo se sujeta bien.", note: "der + nominativo: neue" },
        { tr: "La herida no muestra signos de inflamación.", note: "einer Entzündung: genitivo femenino" }
      ]
    },
    vocab: [
      "la herida",
      "la inflamación",
      "la inflamación (término técnico)",
      "el enrojecimiento",
      "la hinchazón",
      "enrojecido",
      "hinchado",
      "el borde de la herida",
      "el exudado de la herida",
      "el apósito, el vendaje",
      "el cambio de apósito, la cura",
      "el registro de la herida"
    ],
    dialogue: [
      "¿Me ayudas con el cambio de apósito del señor Brandt?",
      "Claro. ¿Cómo estaba la herida ayer?",
      "El borde estaba un poco enrojecido, pero seco.",
      "¿Y hoy? El apósito viejo está bastante húmedo.",
      "Sí, hay algo de exudado. El enrojecimiento se ha extendido y la piel está caliente al tacto.",
      "Podría ser un signo de inflamación.",
      "Exacto. Registro la herida con una foto y aviso a la médica.",
      "Bien. Entonces, después de la visita, vemos cómo seguimos."
    ],
    culture: {
      title: "Una mirada alemana: el registro de la herida",
      text: "<p>En muchos hospitales y servicios alemanes la herida se registra en un formulario propio, el <i>Wunddokumentationsbogen</i>, a menudo con una foto y una regla de papel junto a la herida. En muchos centros las heridas crónicas las sigue personal con formación específica, por ejemplo los <i>Wundexperten</i> formados según los cursos de la ICW (<i>Initiative Chronische Wunden</i>), algo parecido a la enfermera especialista en heridas.</p><p>Las fotos de las heridas son datos de salud: se hacen con los dispositivos del centro, no con el móvil personal. Las normas exactas las encontrarás en las indicaciones de tu planta.</p>"
    },
    exercises: [
      {
        q: "Describe la herida: el borde está ligeramente enrojecido. ¿Qué frase es correcta?",
        opts: [
          "Der Wundrand ist leicht gerötete.",
          "Der Wundrand hat leicht gerötet.",
          "Der Wundrand ist leicht gerötet."
        ],
        why: "Después de <i>sein</i> el adjetivo va sin terminación: <b>ist gerötet</b>. <i>hat gerötet</i> sería un Perfekt activo («ha enrojecido») y no describe un estado."
      },
      {
        q: "Completa: «Am Unterschenkel ist eine ___ Wunde.»",
        hint: "pequeña",
        why: "<b>kleine</b>: después de <i>eine</i>, en nominativo femenino, el adjetivo lleva <b>-e</b>."
      },
      {
        q: "Completa la frase.",
        tr: "El apósito viejo estaba húmedo; el nuevo se sujeta bien.",
        why: "<i>der <b>alte</b> Verband</i>, <i>der <b>neue</b> Verband</i>: después del artículo determinado, en nominativo masculino, la terminación es <b>-e</b>."
      },
      {
        q: "¿Qué descripciones son correctas?",
        opts: [
          "Die Wunde ist gerötet und geschwollen.",
          "Eine gerötete Wunde am Unterschenkel.",
          "Ein geschwollener Knöchel.",
          "Der Wundrand ist gerötete.",
          "Eine kleiner Wunde am Fuß."
        ],
        why: "Después de <i>ist</i> el adjetivo no lleva terminación: <i>ist gerötet</i>, no <i>gerötete</i>. Después de <i>eine</i> el femenino pide <b>-e</b>: <i>eine kleine Wunde</i>."
      },
      {
        q: "Relaciona cada palabra con su significado.",
        pairs: ["el enrojecimiento", "la hinchazón", "el exudado de la herida", "el borde de la herida"]
      },
      {
        q: "Elige el artículo determinado correcto para cada sustantivo.",
        items: ["herida", "inflamación", "apósito", "cambio de apósito", "exudado de la herida", "borde de la herida"]
      },
      {
        q: "Ordena las palabras.",
        tr: "La herida no muestra signos de inflamación.",
        why: "<i>Die Wunde zeigt keine Zeichen einer Entzündung.</i> <i>einer Entzündung</i> es un genitivo femenino: «de una inflamación»."
      },
      {
        q: "Traduce (en el registro): «La herida está seca y limpia.»",
        why: "<i>Die Wunde ist trocken und sauber</i>: después de <i>ist</i> los adjetivos van sin terminación. En el registro también se escribe en forma breve: <i>Wunde trocken und sauber</i>."
      },
      {
        q: "El paciente pregunta por su herida.",
        setting: "Durante el cambio de apósito el señor Brandt está preocupado y te hace unas preguntas.",
        lines: [
          { tr: "¿Tengo la herida inflamada?" },
          { tr: "Responde que está un poco enrojecida y que la médica la mira hoy.", answerTr: "La herida está un poco enrojecida. La médica la mira hoy." },
          { tr: "¿Por qué está tan mojado el apósito?" },
          { tr: "Responde que es exudado, es decir, líquido que sale de la herida, y que lo apuntas.", answerTr: "Es exudado, es decir, líquido que sale de la herida. Lo apunto." },
          { tr: "¿Duele el cambio de apósito?" },
          { tr: "Responde que trabajas con mucho cuidado y que te lo diga enseguida si le duele.", answerTr: "Trabajo con mucho cuidado. Dígamelo enseguida si le duele." }
        ]
      },
      {
        tr: "Sí, hay algo de exudado. El enrojecimiento se ha extendido y la piel está caliente al tacto.",
        why: "En <i>Rötung</i> y en <i>größer</i> la <b>ö</b> es larga: una «e» con los labios redondeados; en <i>größer</i> la <b>ß</b> es una <b>s</b> sorda; en <i>warm</i> la <b>w</b> es [v], labiodental; en <i>Wundsekret</i> el acento cae en <b>Wund</b>."
      },
      {
        tr: "El borde de la herida está ligeramente enrojecido.",
        why: "En <i>Wundrand</i> las dos <b>d</b> a final de sílaba suenan [t]; en <i>leicht</i> la <b>ch</b> después de <b>i</b> es [ç], un sonido suave que no existe en español y que no es la «j»; en <i>gerötet</i> el acento cae en <b>rö</b>, con <b>ö</b> larga."
      }
    ]
  },
  "lesson:pfl-u09-l3": {
    theme: "Preparar el alta",
    title: "El alta",
    objectives: [
      "explicar al paciente qué pasará después del alta con el Futur I",
      "distinguir el Futur I (wird kontrollieren) de la pasiva (wird entlassen)",
      "nombrar ayudas técnicas, servicio de cuidados a domicilio y grado de dependencia",
      "responder sin prometer lo que decide otra institución"
    ],
    theory: [
      {
        h: "Qué se le dice al paciente",
        p: "En el alta el paciente quiere saber quién le va a ayudar, qué necesita y a quién dirigirse. Para anunciar quién hará qué se usa el <strong>Futur I</strong>: <em>Ein Pflegedienst <b>wird</b> Sie morgens <b>unterstützen</b>. Ihr Hausarzt <b>wird</b> die Wunde <b>kontrollieren</b>.</em> El Futur I suena más comprometido y más claro que el presente, que también es posible (<em>Ein Pflegedienst kommt morgens</em>). Lo que deciden otros, por ejemplo la caja del seguro de dependencia, no se promete: <em>Das entscheidet die Pflegekasse.</em>"
      },
      {
        h: "¿Futur I o pasiva?",
        p: "Los dos usan <em>werden</em>, pero con formas distintas del verbo. El <strong>Futur I</strong> pide <em>werden</em> + <b>infinitivo</b>: <em>Der Hausarzt wird die Wunde <b>kontrollieren</b></em> («controlará»). La <strong>pasiva</strong> pide <em>werden</em> + <b>participio</b>: <em>Sie werden am Freitag <b>entlassen</b></em> («le dan el alta el viernes»). Con <em>entlassen</em> las dos se confunden fácilmente, porque el infinitivo y el participio son iguales: <em>Sie werden am Freitag entlassen</em> es una pasiva en presente con sentido de futuro, no un Futur I."
      },
      {
        contrast: "En español se habla de «dar el alta», del «alta hospitalaria» y, cuando se prepara con tiempo, de «planificación del alta» o «continuidad de cuidados»; en muchos hospitales españoles se encarga la enfermera gestora de casos o de enlace. En Alemania la organización del alta se llama <em>das Entlassmanagement</em>, y la ley la exige a los hospitales (§ 39 SGB V). <em>Die Überleitung</em> es el traspaso a quien sigue cuidando después: el servicio a domicilio, la residencia, el médico de familia; el formulario que acompaña al paciente es el <em>Überleitungsbogen</em>, parecido al informe de continuidad de cuidados. <em>Der Pflegegrad</em> se parece al «grado de dependencia» español, pero no coincide: en España hay tres grados (I a III) según la Ley de Dependencia, y en otros países la situación es distinta; en Alemania hay cinco (1 a 5), miden cuánta autonomía tiene la persona en la vida diaria y dan derecho a prestaciones de la <em>Pflegekasse</em>. Lo fija la caja después de una valoración, normalmente del <em>Medizinischer Dienst</em>, no el hospital."
      },
      {
        trap: "<em>entlassen</em> significa «dar el alta» a un paciente, pero también «despedir» a un empleado: <em>Er wurde entlassen</em> sin contexto puede ser una cosa o la otra. El propio paciente suele decir <em>Ich darf nach Hause</em> o <em>Ich komme raus</em>. Y <em>der Arztbrief</em> no es una carta cualquiera: es el informe médico que acompaña el alta, lo que en español se llama «informe de alta». Ojo también con <em>die Pflegekasse</em>: no es una «caja» física, sino la entidad aseguradora del seguro de dependencia."
      },
      {
        tip: "Antes de hablar con el paciente, escribe tres líneas: quién va a ir a casa, qué ayudas técnicas llegan, quién controla qué y cuándo. Luego explícalas en ese orden, con el Futur I. Al final pregunta <em>Haben Sie noch Fragen?</em> y, si hay un familiar, inclúyelo en la conversación."
      }
    ],
    grammar: {
      title: "Futur I y pasiva con werden",
      note: "Futur I: <b>werden</b> conjugado + <b>infinitivo</b> al final. Pasiva: <b>werden</b> conjugado + <b>participio</b> al final. Con <i>entlassen</i> el infinitivo y el participio coinciden: decide el sentido.",
      table: {
        head: ["forma", "estructura", "ejemplo"],
        rows: [
          ["Futur I", "werden + infinitivo", "Ein Pflegedienst wird Sie morgens unterstützen."],
          ["Futur I, pregunta", "werden en primera posición + infinitivo", "Werden Sie zu Hause allein zurechtkommen?"],
          ["pasiva en presente", "werden + participio", "Sie werden am Freitag entlassen."],
          ["pasiva en presente", "werden + participio", "Der Rollator wird geliefert."]
        ]
      },
      examples: [
        { tr: "Un servicio de cuidados a domicilio le ayudará por las mañanas.", note: "wird + infinitivo unterstützen al final: Futur I" },
        { tr: "Su hija recogerá los medicamentos en la farmacia.", note: "Futur I: wird ... holen" },
        { tr: "Su médico de familia controlará la herida la semana que viene.", note: "Futur I: wird ... kontrollieren" },
        { tr: "Pediremos el andador con tiempo.", note: "Futur I en primera persona del plural: werden ... bestellen" },
        { tr: "¿Se las arreglará usted sola en casa?", note: "pregunta: werden en primera posición, zurechtkommen al final" },
        { tr: "Le dan el alta el viernes.", note: "pasiva en presente con sentido de futuro: werden + participio entlassen" }
      ]
    },
    vocab: [
      "el alta",
      "dar el alta (a un paciente)",
      "la gestión del alta, la planificación del alta",
      "el traspaso de cuidados, la continuidad asistencial",
      "el informe de continuidad de cuidados",
      "la ayuda técnica",
      "el servicio de cuidados (a domicilio)",
      "el grado de dependencia",
      "la caja del seguro de dependencia",
      "el informe médico de alta",
      "arreglárselas",
      "organizar"
    ],
    dialogue: [
      "Señora Keller, la médica ha dicho que le dan el alta el viernes.",
      "¡Por fin! Pero ¿cómo me las voy a arreglar en casa?",
      "De eso hablamos ahora. Mañana vendrá a verla una compañera de la gestión del alta.",
      "¿Y quién me ayuda a lavarme?",
      "Un servicio de cuidados a domicilio le ayudará por las mañanas. Lo hablamos también con su hija.",
      "¿Necesito un andador?",
      "Sí. Pediremos el andador con tiempo, para que el viernes ya esté aquí.",
      "¿Y después tengo que ir todavía al médico?",
      "Su médico de familia controlará la herida la semana que viene. También recibirá el informe de alta."
    ],
    culture: {
      title: "Una mirada alemana: la Pflegeversicherung",
      text: "<p>Desde 1995 Alemania tiene un seguro obligatorio de dependencia, la <i>Pflegeversicherung</i>, gestionado por las <i>Pflegekassen</i>, vinculadas a las cajas del seguro de enfermedad. Quien necesita cuidados presenta una solicitud; una persona del <i>Medizinischer Dienst</i> (o de otro servicio encargado) valora su autonomía, normalmente en casa, y la caja asigna un <i>Pflegegrad</i> del 1 al 5. Del grado dependen las prestaciones: dinero para quien cuida en la familia, servicios a domicilio, aportaciones para la residencia.</p><p>En el hospital la enfermera no decide el grado, pero a menudo es la primera en darse cuenta de que en casa hará falta ayuda, y lo comunica al <i>Entlassmanagement</i>.</p>"
    },
    exercises: [
      {
        q: "Le anuncias a la paciente que un servicio de cuidados a domicilio le ayudará en casa. ¿Qué frase es correcta?",
        opts: [
          "Ein Pflegedienst wird Sie zu Hause unterstützt.",
          "Ein Pflegedienst wird Sie zu Hause unterstützen.",
          "Ein Pflegedienst werden Sie zu Hause unterstützen."
        ],
        why: "Futur I: <i>wird</i> + <b>infinitivo</b> al final, <b>unterstützen</b>. <i>wird ... unterstützt</i> es la estructura de la pasiva, y una pasiva no admite además el complemento en acusativo <i>Sie</i>: la frase es agramatical; <i>werden</i> no concuerda con el sujeto singular <i>ein Pflegedienst</i>."
      },
      {
        tr: "El presente de werden, todas las personas.",
        why: "<i>Werde, wirst, wird, werden, werdet, werden</i>: en la segunda y la tercera persona del singular la <b>e</b> pasa a <b>i</b>, y la <b>d</b> cae en <i>wirst</i> pero se queda en <i>wird</i>."
      },
      {
        q: "Completa: «Ihr Hausarzt ___ die Wunde nächste Woche kontrollieren.»",
        hint: "Futur I, tercera persona del singular",
        why: "<b>wird</b>: el Futur I usa <i>werden</i> conjugado en segunda posición y el infinitivo <i>kontrollieren</i> al final."
      },
      {
        q: "Completa la frase.",
        tr: "Pediremos el andador con tiempo.",
        why: "<i>Wir <b>werden</b> den Rollator rechtzeitig <b>bestellen</b></i>: Futur I en primera persona del plural, el infinitivo va al final."
      },
      {
        q: "¿Qué frases están en Futur I?",
        opts: [
          "Der Pflegedienst wird morgens kommen.",
          "Sie werden am Freitag entlassen.",
          "Ihre Tochter wird die Medikamente holen.",
          "Der Arztbrief wurde geschrieben.",
          "Wir werden den Überleitungsbogen ausfüllen."
        ],
        why: "El Futur I es <i>werden</i> + infinitivo: <i>wird kommen</i>, <i>wird holen</i>, <i>werden ausfüllen</i>. <i>werden entlassen</i> aquí es una pasiva en presente (participio), <i>wurde geschrieben</i> una pasiva en Präteritum."
      },
      {
        q: "Relaciona cada palabra con su significado.",
        pairs: ["la gestión del alta", "la ayuda técnica", "el grado de dependencia", "el servicio de cuidados a domicilio"]
      },
      {
        q: "Elige el artículo determinado correcto para cada sustantivo.",
        items: ["alta", "gestión del alta", "traspaso de cuidados", "ayuda técnica", "servicio de cuidados", "grado de dependencia"]
      },
      {
        q: "Ordena las palabras.",
        tr: "Un servicio de cuidados le ayudará por las mañanas.",
        why: "<i>Ein Pflegedienst wird Sie morgens unterstützen.</i> <i>wird</i> en segunda posición, el infinitivo <i>unterstützen</i> al final."
      },
      {
        q: "Traduce con el Futur I: «El médico de familia controlará la herida la semana que viene.»",
        why: "<i>Der Hausarzt wird die Wunde nächste Woche kontrollieren</i>: Futur I, el infinitivo al final. <i>nächste Woche</i> (o <i>in der nächsten Woche</i>) también puede ir en primera posición: <i>Nächste Woche wird der Hausarzt ...</i>"
      },
      {
        q: "Preguntas sobre el alta.",
        setting: "La señora Keller sabe que pronto vuelve a casa y te hace unas preguntas.",
        lines: [
          { tr: "¿Cuándo puedo irme a casa?" },
          { tr: "Responde que probablemente le darán el alta el viernes.", answerTr: "Probablemente le darán el alta el viernes." },
          { tr: "¿Quién me ayuda a lavarme en casa?" },
          { tr: "Responde que un servicio de cuidados irá a su casa por las mañanas.", answerTr: "Un servicio de cuidados irá a su casa por las mañanas." },
          { tr: "¿Me van a dar un grado de dependencia?" },
          { tr: "Responde que lo decide la caja del seguro de dependencia y que la ayudáis con la solicitud.", answerTr: "Lo decide la caja del seguro de dependencia. La ayudamos con la solicitud." }
        ]
      },
      {
        tr: "Un servicio de cuidados a domicilio le ayudará por las mañanas. Lo hablamos también con su hija.",
        why: "En <i>Pflegedienst</i> se pronuncian la <b>p</b> y la <b>f</b>, sin vocal entre ellas; en <i>ambulanter</i> el acento cae en <b>lan</b>; en <i>unterstützen</i> el acento cae en <b>stüt</b>, y <b>st</b> es [ʃt], como «sht»."
      },
      {
        tr: "Su médico de familia controlará la herida la semana que viene.",
        why: "En <i>Hausarzt</i> el acento cae en <b>Haus</b>, la <b>H</b> se aspira y al final se oye [tst]; en <i>nächste</i> la <b>ch</b> después de <b>ä</b> es [ç]; en <i>kontrollieren</i> el acento cae en <b>lie</b>."
      }
    ]
  },
  "lesson:pfl-u09-l4": {
    theme: "Tareas y responsabilidad",
    title: "¿Qué puedo hacer, qué tengo que hacer?",
    objectives: [
      "preguntar qué te está permitido hacer durante el periodo de incorporación",
      "distinguir dürfen, müssen, sollen y sollten",
      "entender la diferencia entre du darfst nicht y du musst nicht",
      "rechazar con cortesía una petición que no te corresponde"
    ],
    theory: [
      {
        h: "Permiso, obligación, indicación",
        p: "<em>dürfen</em> expresa el permiso: <em>Was <b>darf</b> ich schon allein machen?</em> <em>müssen</em>, la obligación: <em>Wenn du unsicher bist, <b>musst</b> du nachfragen.</em> <em>sollen</em> transmite una indicación de otra persona: <em>Die Ärztin sagt, du <b>sollst</b> den Blutzucker messen.</em> <em>sollten</em> es un consejo: <em>Das <b>sollten</b> wir mit der Stationsleitung klären.</em> El modal conjugado va en segunda posición y el infinitivo al final; en una subordinada el modal va al final, después del infinitivo."
      },
      {
        h: "Delegación y responsabilidad: con prudencia",
        p: "En Alemania algunas tareas médicas pueden delegarse al personal de enfermería (<em>Delegation</em>); quien acepta una tarea responde de cómo la ejecuta. Qué se puede delegar, a quién y en qué condiciones depende de la ley, del centro y de tu situación, por ejemplo mientras dura el reconocimiento del título. Esta lección enseña las palabras para preguntar y para decir que no, no las normas jurídicas: para los casos concretos la persona indicada es la <em>Stationsleitung</em>, la supervisora de planta."
      },
      {
        contrast: "En español la negación separa bien los dos sentidos: «no tienes que hacerlo» quiere decir que no es obligatorio, y «no debes» o «no puedes hacerlo» quiere decir que está prohibido. El alemán reparte igual, pero con verbos que engañan: «no tener que» es <em>nicht müssen</em> (<em>Das <b>musst</b> du nicht allein machen</em>, «no tienes que hacerlo sola»), y la prohibición se dice con <em>nicht dürfen</em> (<em>Das <b>darfst</b> du nicht allein machen</em>, «no puedes hacerlo sola, no está permitido»). La trampa está en <em>müssen</em>, que suena a «deber»: traducir «no debes» con <em>musst nicht</em> convierte una prohibición en un permiso. También «¿puedo?» se divide en dos: <em>Darf ich?</em> pide permiso de forma explícita; <em>Kann ich?</em> pregunta si es posible o si eres capaz, y en la lengua hablada a menudo también pide permiso. Cuando lo que cuenta es el permiso, <em>Darf ich?</em> es la opción clara."
      },
      {
        trap: "<em>die Haftung</em> no es la responsabilidad en general: es la responsabilidad jurídica, la obligación de responder de un daño. La responsabilidad profesional y moral es <em>die Verantwortung</em>: <em>Ich trage die Verantwortung für meine Patienten.</em> Y <em>die Krankenschwester</em>, que los pacientes todavía usan mucho, ya no es el título profesional: el título es <em>Pflegefachfrau</em> o <em>Pflegefachmann</em>, lo que en español sería «enfermera» o «enfermero»."
      },
      {
        tip: "Si un familiar o un paciente te pide algo que no te corresponde, no digas solo que no: di quién lo decide y qué haces ahora. <em>Das darf ich nicht allein entscheiden. Ich spreche mit der Ärztin.</em> Así la petición no se queda sin respuesta."
      }
    ],
    grammar: {
      title: "Los verbos modales en la planta",
      note: "El modal conjugado en <b>segunda posición</b>, el infinitivo <b>al final</b>. Prohibición: <b>nicht dürfen</b>. Ausencia de obligación: <b>nicht müssen</b>.",
      table: {
        head: ["modal", "significado", "ejemplo"],
        rows: [
          ["dürfen", "tener permiso", "Das darfst du erst nach der Einarbeitung."],
          ["nicht dürfen", "prohibición, no poder", "Das darfst du noch nicht allein machen."],
          ["müssen", "obligación, tener que", "Wenn du unsicher bist, musst du nachfragen."],
          ["nicht müssen", "no tener que, no hay obligación", "Das musst du nicht allein machen."],
          ["sollen", "indicación de otra persona", "Die Ärztin sagt, du sollst den Blutzucker messen."],
          ["sollten", "consejo, debería", "Das sollten wir mit der Stationsleitung klären."]
        ]
      },
      examples: [
        { tr: "¿Qué puedo hacer ya sola, como compañera nueva?", note: "dürfen: pide permiso, no capacidad" },
        { tr: "Esta tarea solo puedes asumirla cuando hayas terminado la incorporación.", note: "darfst en segunda posición, übernehmen al final; erst = no antes de" },
        { tr: "Determinadas tareas médicas pueden delegarse a enfermería.", note: "modal + pasiva: können + delegiert werden" },
        { tr: "Si no estás segura, tienes que preguntar.", note: "la subordinada con wenn ocupa la primera posición, así que enseguida musst" },
        { tr: "No tienes que hacerlo sola.", note: "nicht müssen: no hay obligación, no es una prohibición" },
        { tr: "Deberíamos aclararlo con la supervisora.", note: "sollten: un consejo" }
      ]
    },
    vocab: [
      "poder (tener permiso)",
      "tener que (estar obligado)",
      "deber (por indicación de otro)",
      "la delegación",
      "delegar",
      "la responsabilidad",
      "la responsabilidad jurídica",
      "la incorporación, el periodo de adaptación",
      "ya formado para la planta",
      "la tarea",
      "asumir, hacerse cargo de",
      "rechazar"
    ],
    dialogue: [
      "Llevo aquí una semana. ¿Qué puedo hacer ya solo?",
      "La higiene básica y las constantes ya las haces solo. Las curas todavía las hacemos juntos esta semana.",
      "¿Y las extracciones de sangre? En mi país las hacía todos los días.",
      "Te creo. Pero aquí solo puedes hacerlas cuando termine la incorporación y la médica te las haya delegado.",
      "¿Tengo que asumir todas las tareas que me den?",
      "No. Si no te sientes seguro con una tarea, tienes que decirlo. Entonces alguien te enseña cómo se hace.",
      "¿Y quién responde si algo sale mal?",
      "Esa es una pregunta para la supervisora. Las normas no son iguales en todas partes, por eso deberíamos aclararlo con ella."
    ],
    culture: {
      title: "Una mirada alemana: el reconocimiento del título",
      text: "<p>Quien ha estudiado enfermería en el extranjero normalmente tiene que hacer reconocer el título en Alemania (<i>Anerkennung</i>). Según el país y la formación puede hacer falta un curso de adaptación (<i>Anpassungslehrgang</i>) o un examen (<i>Kenntnisprüfung</i>). Hasta el reconocimiento muchos trabajan en otro puesto, por ejemplo como <i>Pflegefachkraft in Anerkennung</i>, y algunas tareas todavía no les están permitidas.</p><p>Las normas cambian de un <i>Land</i> a otro y con el tiempo: la información actualizada la dan la oficina competente de tu Land y el portal oficial <i>Anerkennung in Deutschland</i>.</p>"
    },
    exercises: [
      {
        q: "Quieres decirle a un compañero que no tiene que hacerlo solo. ¿Qué frase usas?",
        opts: [
          "Das darfst du nicht allein machen.",
          "Das musst du nicht allein machen.",
          "Das sollst du nicht allein machen."
        ],
        why: "<b>nicht müssen</b> significa «no tener que», no hay obligación. <i>nicht dürfen</i> es una prohibición; <i>nicht sollen</i> transmite la indicación de otra persona de no hacerlo."
      },
      {
        tr: "El presente de dürfen, todas las personas.",
        why: "<i>Darf, darfst, darf, dürfen, dürft, dürfen</i>: en singular la <b>ü</b> pasa a <b>a</b>, y la primera y la tercera persona del singular no tienen terminación."
      },
      {
        q: "Completa: «Wenn du unsicher bist, ___ du nachfragen.»",
        hint: "obligación: müssen",
        why: "<b>musst</b>: la subordinada con <i>wenn</i> ocupa la primera posición, así que el modal viene justo después, luego el sujeto <i>du</i> y el infinitivo al final."
      },
      {
        q: "Completa la frase.",
        tr: "Eso solo te está permitido hacerlo cuando haya terminado la incorporación.",
        why: "<i>Das <b>darfst</b> du erst machen</i>: permiso, así que <i>dürfen</i>. <i>wenn die Einarbeitung abgeschlossen <b>ist</b></i>: en la subordinada el verbo conjugado va al final."
      },
      {
        q: "¿Qué frases son correctas?",
        opts: [
          "Du musst nachfragen, wenn du unsicher bist.",
          "Du musst nachfragen, wenn du bist unsicher.",
          "Diese Aufgabe darfst du erst nach der Einarbeitung übernehmen.",
          "Die Ärztin kann bestimmte Aufgaben an die Pflege delegieren.",
          "Ich darf heute Zimmer zwölf übernommen."
        ],
        why: "Después de <i>wenn</i> el verbo conjugado va al final: <i>wenn du unsicher bist</i>. Con un modal el segundo verbo va en infinitivo, no en participio: <i>darf ... übernehmen</i>."
      },
      {
        q: "Relaciona cada palabra con su significado.",
        pairs: ["la delegación", "la responsabilidad jurídica", "la incorporación", "la tarea"]
      },
      {
        q: "Elige el artículo determinado correcto para cada sustantivo.",
        items: ["tarea", "responsabilidad jurídica", "cambio de apósito", "glucemia", "país", "consentimiento"]
      },
      {
        q: "Ordena las palabras.",
        tr: "Si no estás seguro, tienes que preguntar.",
        why: "<i>Wenn du unsicher bist, musst du nachfragen.</i> La subordinada ocupa la primera posición, así que enseguida el modal <i>musst</i>, luego <i>du</i> y el infinitivo <i>nachfragen</i> al final."
      },
      {
        q: "Traduce (a una compañera nueva): «Todavía no puedes hacerlo sola.»",
        why: "<i>Das darfst du noch nicht allein machen</i>: es una prohibición, así que <i>nicht dürfen</i>, no <i>nicht müssen</i>. También vale <i>Du darfst das noch nicht allein machen</i>."
      },
      {
        q: "Una petición que no te corresponde.",
        setting: "El hijo de un paciente te pide que le des un somnífero a su padre.",
        lines: [
          { tr: "Mi padre duerme fatal. ¡Dele un somnífero, hombre!" },
          { tr: "Responde que no puedes decidirlo tú sola y que lo hablas con la médica.", answerTr: "No puedo decidirlo yo sola. Lo hablo con la médica." },
          { tr: "¡Pero si usted es enfermera!" },
          { tr: "Responde que sí, pero que los medicamentos solo se dan con prescripción médica.", answerTr: "Sí, pero los medicamentos solo se dan con prescripción médica." },
          { tr: "¿Y cuándo sabré algo?" },
          { tr: "Responde que llamas ahora a la médica y luego le avisas.", answerTr: "Llamo ahora a la médica y luego le aviso." }
        ]
      },
      {
        tr: "No. Si no te sientes seguro con una tarea, tienes que decirlo. Entonces alguien te enseña cómo se hace.",
        why: "En <i>sicher</i> la <b>s</b> inicial es sonora, [z], y la <b>ch</b> es [ç]; en <i>fühlst</i> la <b>ü</b> es larga: una «i» con los labios redondeados; en <i>musst</i> la <b>u</b> es breve."
      },
      {
        tr: "Si no estás seguro, tienes que preguntar.",
        why: "En <i>unsicher</i> el acento cae en <b>un</b>; en <i>nachfragen</i> el acento cae en <b>nach</b> y la <b>ch</b> después de <b>a</b> es [x], parecida a la «j» española."
      }
    ]
  },
  "lesson:pfl-u09-test": {
    theme: "Prueba final",
    title: "Prueba final: alemán para enfermería",
    objectives: [
      "comprobar la pasiva, la declinación del adjetivo y el Futur I de esta unidad",
      "repasar el vocabulario de todo el recorrido: ingreso, constantes, higiene básica, dolor, medicamentos, relevo, alta"
    ],
    theory: [
      {
        p: "Doce preguntas, la última prueba del recorrido: además de esta unidad, recuperan palabras y situaciones de las nueve unidades. Se aprueba con el 70%. Los pacientes y las situaciones son inventados y solo sirven de ejemplo: las normas de higiene, el cuidado de las heridas y la organización del alta los fijan el centro y el médico."
      }
    ],
    exercises: [
      {
        q: "Le explicas a un paciente que tiene la tensión alta. ¿Qué frase entiende con más facilidad?",
        opts: ["Sie haben eine Hypertonie.", "Sie haben Bluthochdruck.", "Ihr RR ist erhöht."],
        why: "Con el paciente se usa la palabra de todos los días: <b>Bluthochdruck</b>. <i>Hypertonie</i> y la sigla <i>RR</i> valen entre colegas y en el registro."
      },
      {
        q: "Completa: «Ich habe einen ___ Schmerz in der Brust.»",
        hint: "drückend, adjetivo delante del sustantivo",
        why: "<b>drückenden</b>: después de <i>einen</i>, en acusativo masculino, el adjetivo lleva <b>-en</b>."
      },
      {
        tr: "El Futur I de kontrollieren, todas las personas.",
        why: "<i>Werde, wirst, wird, werden, werdet, werden</i> + <b>kontrollieren</b>: solo se conjuga <i>werden</i>; el infinitivo no cambia y va al final de la frase."
      },
      {
        q: "Relaciona cada palabra con su significado.",
        pairs: ["la infección", "la inflamación", "la úlcera por presión", "el desmayo"]
      },
      {
        q: "¿Qué frases son correctas?",
        opts: [
          "Die Wunde ist leicht gerötet.",
          "Bei Frau Keller wurde ein erhöhter Blutzucker gemessen.",
          "Der Patient hat einen starken Schmerz.",
          "Die Ärztin wurde geinformiert.",
          "Er hat eine geschwollener Knöchel."
        ],
        why: "<i>informiert</i> no lleva <i>ge-</i>, porque el verbo termina en <i>-ieren</i>. <i>Knöchel</i> es masculino: <i>einen geschwollenen Knöchel</i>."
      },
      {
        q: "Completa la frase.",
        tr: "Al señor Brandt se le ha detectado un germen multirresistente, por eso está aislado.",
        why: "<i>Bei Herrn Brandt <b>wurde</b> ein multiresistenter Keim gefunden</i>: pasiva en Präteritum. <i>deshalb <b>wird</b> er isoliert</i>: pasiva en presente, y después de <i>deshalb</i> el verbo viene enseguida."
      },
      {
        q: "Ordena las palabras.",
        tr: "Las pastillas se toman antes del desayuno.",
        why: "<i>Die Tabletten werden vor dem Frühstück eingenommen.</i> Pasiva en presente: <i>werden</i> en segunda posición y el participio <i>eingenommen</i> al final."
      },
      {
        q: "Elige el artículo determinado correcto para cada sustantivo.",
        items: ["anamnesis", "tensión arterial", "medicamento", "urgencia", "grado de dependencia", "ayuda técnica"]
      },
      {
        q: "Traduce (en el registro): «La herida está enrojecida e hinchada.»",
        why: "<i>Die Wunde ist gerötet und geschwollen</i>: después de <i>ist</i> los adjetivos van sin terminación. En forma breve: <i>Wunde gerötet und geschwollen</i>."
      },
      {
        q: "La conversación del alta.",
        setting: "El señor Brandt se va mañana a casa y te hace las últimas preguntas.",
        lines: [
          { tr: "¿Qué pastillas tomo en casa?" },
          { tr: "Responde que está en su plan de medicación y que se lo explicas ahora mismo.", answerTr: "Está en su plan de medicación. Se lo explico ahora mismo." },
          { tr: "¿Y quién me mira la herida?" },
          { tr: "Responde que su médico de familia la controlará la semana que viene.", answerTr: "Su médico de familia la controlará la semana que viene." },
          { tr: "¿Cómo sé que algo no va bien?" },
          { tr: "Responde que, si la herida se pone roja, caliente o hinchada, tiene que llamar a su médico de familia.", answerTr: "Si la herida se pone roja, caliente o hinchada, llame a su médico de familia, por favor." }
        ]
      },
      {
        tr: "La herida no muestra signos de inflamación.",
        why: "En <i>zeigt</i> la <b>z</b> es [ts] y la <b>g</b> final suena [k]; en <i>Zeichen</i> la <b>ch</b> después de <b>ei</b> es [ç]; en <i>Entzündung</i> el acento cae en <b>zün</b>."
      },
      {
        tr: "Las manos se desinfectan antes y después de cada contacto con el paciente.",
        why: "En <i>vor</i> la <b>v</b> suena [f]; en <i>Patientenkontakt</i> la <b>ti</b> suena [tsi]; en <i>desinfiziert</i> el acento cae en <b>ziert</b>."
      }
    ]
  }
});
