/* ============================================================
   Learner-language text (es) for data/core/pfl-05.js, unit pfl-u05.
   Keys point at ids in the neutral layer; arrays merge by index,
   so their length has to match core.
   Checked by scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("es", {
  "unit:pfl-u05": {
    title: "Medicamentos y prospecto",
    grammarNote: "compuestos y vías de administración · vor, nach, mit, seit, zu con dativo · las oraciones con wenn y falls · la pasiva con werden y con un modal"
  },
  "lesson:pfl-u05-l1": {
    theme: "Formas y vías",
    title: "Pastillas, gotas, inyecciones",
    objectives: [
      "nombrar las formas farmacéuticas más comunes con su artículo",
      "decir la vía de administración en Fachsprache y con palabras para el paciente",
      "formar compuestos como Schmerztablette y Augentropfen",
      "explicar al paciente qué recibe, sin entrar en el tratamiento"
    ],
    theory: [
      {
        h: "Las formas del medicamento",
        p: "En planta las formas que nombras cada día son pocas: <em>die Tablette</em> (pastilla, comprimido), <em>die Kapsel</em> (cápsula), <em>der Tropfen</em> (gota, casi siempre en plural, <em>die Tropfen</em>), <em>der Saft</em> (jarabe), <em>die Salbe</em> (pomada), <em>das Zäpfchen</em> (supositorio), <em>die Spritze</em> y <em>die Infusion</em>. El alemán forma compuestos con ellas sin parar, y <strong>el artículo lo decide el último elemento</strong>: <em>der Schmerz + die Tablette</em> = <em>die Schmerztablette</em>; <em>das Auge + die Tropfen</em> = <em>die Augentropfen</em>; <em>der Husten + der Saft</em> = <em>der Hustensaft</em>."
      },
      {
        h: "Las vías de administración",
        p: "En la documentación y con el médico se dice <em>oral</em>, <em>subkutan</em> (abreviado <em>s.c.</em>) e <em>intravenös</em> (<em>i.v.</em>). Al paciente se le dice adónde va el medicamento: <em>über den Mund</em>, <em>unter die Haut</em>, <em>in die Vene</em>. Las preposiciones van con acusativo porque indican dirección: el medicamento va <em>unter die Haut</em>, no está <em>unter der Haut</em>. El sustantivo técnico es <em>die Applikation</em>; en el habla de planta se dice más a menudo <em>die Gabe</em>: <em>Die nächste Gabe ist um acht Uhr.</em>"
      },
      {
        contrast: "En español «vía oral», «subcutánea» e «intravenosa» son transparentes: casi cualquier paciente las entiende, y en planta se dice sin problema «se la pongo en la vena» o «le pongo una subcutánea». Por eso <em>oral</em>, <em>subkutan</em> e <em>intravenös</em> te parecerán palabras normales, y ese es el riesgo: en alemán son palabras de historia clínica, y para muchos pacientes resultan opacas. Con el paciente pasa siempre a la fórmula con preposición: <em>über den Mund</em>, <em>unter die Haut</em>, <em>in die Vene</em>. Lo mismo con <em>die Injektion</em>: es el término técnico; la palabra del paciente es <em>die Spritze</em>, como nuestro «pinchazo». Con el médico y en el relevo el registro técnico es lo normal: <em>Die Applikation ist subkutan.</em>"
      },
      {
        trap: "<em>Die Tablette</em> no es una «tableta» de chocolate, y es femenina como la pastilla; en cambio <em>der Tropfen</em> es masculino y la gota no. <em>Die Spritze</em> es a la vez la jeringa y la inyección. <em>Das Zäpfchen</em> es el supositorio, pero también la úvula: decide el contexto. El gotero es <em>die Infusion</em>; muchos pacientes dicen <em>der Tropf</em> (<em>Ich hänge am Tropf</em>, «estoy con el gotero»), que no es la gota. <em>Der Saft</em> es el zumo en la cafetería, pero el jarabe en el carro de medicación. Y ojo con la letra de unión en los compuestos: <em>Augentropfen</em>, no «Augetropfen»."
      },
      {
        tip: "Cuando lleves un medicamento, di siempre cómo se toma con una frase sencilla: <em>Die schlucken Sie bitte mit etwas Wasser.</em> Si el paciente pregunta algo que no sabes (¿se puede masticar?, ¿se puede disolver?), no improvises: <em>Das weiß ich nicht genau. Ich frage in der Apotheke nach.</em> Todos los nombres de medicamentos de esta unidad, como <em>Dolorex</em> y <em>Cardiomin</em>, son inventados."
      }
    ],
    grammar: {
      title: "Formas, compuestos y vías",
      note: "En los compuestos el artículo es el del <b>último elemento</b>. Para la vía: <b>Fachsprache</b> en la documentación, la fórmula con <b>preposición</b> para el paciente.",
      table: {
        head: ["Fachsprache", "para el paciente", "español"],
        rows: [
          ["oral", "über den Mund", "vía oral, por boca"],
          ["subkutan (s.c.)", "unter die Haut", "subcutáneo"],
          ["intravenös (i.v.)", "in die Vene", "intravenoso, en vena"],
          ["die Injektion", "die Spritze", "la inyección, el pinchazo"],
          ["die Applikation", "die Gabe", "la administración, la dosis"]
        ]
      },
      examples: [
        { tr: "Esto es una pastilla para el dolor.", note: "Schmerz + Tablette: die, por Tablette" },
        { tr: "Dolorex viene en pastillas y en gotas.", note: "Dolorex es un nombre inventado; es gibt + acusativo" },
        { tr: "La inyección se la ponemos debajo de la piel.", note: "unter die Haut: dirección, por eso acusativo" },
        { tr: "El gotero va a la vena.", note: "in die Vene: la fórmula para el paciente" },
        { tr: "La administración es oral, es decir, por boca.", note: "primero el término técnico, luego la explicación" },
        { tr: "Las gotas para los ojos están en la nevera.", note: "Auge + n + Tropfen: letra de unión" }
      ]
    },
    vocab: [
      "la pastilla, el comprimido",
      "la cápsula",
      "la gota (normalmente en plural: die Tropfen)",
      "la jeringa, la inyección",
      "la infusión, el gotero",
      "la pomada",
      "el supositorio",
      "oral, por boca (término técnico)",
      "subcutáneo (término técnico)",
      "intravenoso (término técnico)",
      "la administración (término técnico)",
      "la administración, la dosis dada (palabra de planta)"
    ],
    dialogue: [
      "Buenos días, señora Kühn. Le traigo sus medicamentos.",
      "¿Y qué es todo esto?",
      "Esto es Cardiomin, una pastilla. Tráguesela con un poco de agua, por favor.",
      "¿Y el frasquito?",
      "Son gotas para los ojos. Van en el ojo, no en la boca.",
      "¿Hoy también me ponen una inyección?",
      "Sí, esta noche le ponemos una inyección debajo de la piel.",
      "¿Duele?",
      "Solo un pinchacito."
    ],
    exercises: [
      {
        q: "El médico ha escrito «subkutan». ¿Cómo se lo dices al paciente?",
        opts: ["in die Vene", "unter die Haut", "über den Mund"],
        why: "<i>Subkutan</i> es «debajo de la piel»: al paciente se le dice <b>unter die Haut</b>, con acusativo porque el medicamento va hacia allí."
      },
      {
        q: "Relaciona cada término técnico con la fórmula para el paciente.",
        pairs: ["über den Mund", "unter die Haut", "in die Vene", "die Spritze"]
      },
      {
        q: "Elige el artículo determinado correcto para cada sustantivo.",
        items: ["pastilla", "cápsula", "gota", "inyección, jeringa", "supositorio", "pomada"]
      },
      {
        q: "Completa con una palabra compuesta: «Eine Tablette gegen Schmerzen ist eine ___.»",
        hint: "Schmerz + Tablette",
        why: "<b>Schmerztablette</b>, femenino como <i>Tablette</i>, el último elemento del compuesto."
      },
      {
        q: "¿Qué formas se toman por boca?",
        opts: ["die Tablette", "die Kapsel", "das Zäpfchen", "die Infusion", "der Saft"],
        why: "La pastilla, la cápsula y el jarabe van <i>über den Mund</i>. El supositorio no, y la infusión va <i>in die Vene</i>."
      },
      {
        q: "Completa: primero el término técnico, luego la palabra para el paciente.",
        tr: "La infusión es intravenosa, es decir, va a la vena.",
        why: "<i>Die Infusion läuft intravenös, also in die Vene</i>: <i>also</i> introduce la explicación para el paciente."
      },
      {
        q: "Ordena las palabras.",
        tr: "La inyección se la ponemos debajo de la piel.",
        why: "<i>Die Spritze bekommen Sie unter die Haut.</i> El objeto al principio, el verbo <i>bekommen</i> en segunda posición y luego el sujeto <i>Sie</i>."
      },
      {
        q: "Traduce: «Las gotas son para los ojos.»",
        why: "<i>Die Tropfen sind für die Augen.</i> <i>Für</i> rige acusativo, y el plural <i>die Augen</i> no cambia."
      },
      {
        q: "Una paciente pregunta por sus medicamentos.",
        setting: "Le llevas a la señora Kühn los medicamentos de la mañana.",
        lines: [
          { tr: "Señora Marin, ¿cómo me ponen la inyección?" },
          { tr: "Responde que se la ponen debajo de la piel.", answerTr: "La inyección se la ponemos debajo de la piel." },
          { tr: "¿Y qué hay en el frasquito?" },
          { tr: "Responde que son gotas para los ojos.", answerTr: "Son gotas para los ojos." },
          { tr: "¿Puedo masticar la pastilla?" },
          { tr: "Responde que no lo sabes con seguridad y que preguntas en la farmacia.", answerTr: "No lo sé con seguridad. Pregunto en la farmacia." }
        ]
      },
      {
        tr: "Esto es Cardiomin, una pastilla. La inyección se la ponemos esta noche debajo de la piel.",
        why: "En <i>Spritze</i> la <b>sp</b> inicial suena [ʃp], como «shp», y la <b>tz</b> es [ts]; en <i>Haut</i> la <b>h</b> se aspira, más suave que la jota, y la <b>au</b> es [aʊ]; en <i>Abend</i> la <b>d</b> final suena [t]."
      },
      {
        tr: "La inyección se la ponemos debajo de la piel.",
        why: "En <i>bekommen</i> el acento cae en <b>kom</b>; en <i>unter</i> la <b>r</b> final apenas se oye, nada de vibrante; en <i>Sie</i> la <b>s</b> inicial es sonora [z], un sonido que el español no tiene."
      }
    ]
  },
  "lesson:pfl-u05-l2": {
    theme: "Horarios",
    title: "¿Antes o después de comer?",
    objectives: [
      "explicar cuándo se toma un medicamento: por la mañana, por la noche, al acostarse, si es necesario",
      "usar vor, nach, mit, seit, zu y bei con dativo",
      "decir al paciente que tiene que estar en ayunas",
      "responder a un paciente que ha olvidado una dosis remitiendo al médico"
    ],
    theory: [
      {
        h: "Cuándo se toma",
        p: "Los horarios de toma se dicen con adverbios y con preposiciones. Adverbios: <em>morgens</em>, <em>mittags</em>, <em>abends</em>, <em>täglich</em>, <em>einmal täglich</em>, <em>dreimal täglich</em>. Expresiones fijas: <em>zur Nacht</em> (al acostarse), <em>bei Bedarf</em> (si es necesario), <em>nüchtern</em> (en ayunas). Los horarios del plan de medicación los decide el médico: tú los lees y los transmites, no los eliges."
      },
      {
        h: "Las preposiciones con dativo",
        p: "<em>Vor</em>, <em>nach</em>, <em>mit</em>, <em>seit</em>, <em>zu</em> y <em>bei</em> rigen <strong>dativo</strong> en todas estas expresiones: <em>vor dem Frühstück</em>, <em>nach dem Essen</em>, <em>mit einem Glas Wasser</em>, <em>seit einer Woche</em>, <em>zu den Mahlzeiten</em>, <em>bei Bedarf</em>. El dativo se ve en el artículo: <em>das Essen</em> pasa a <em>dem Essen</em>, <em>die Woche</em> a <em>einer Woche</em>, <em>die Mahlzeiten</em> a <em>den Mahlzeiten</em>. Con <em>seit</em> el verbo se queda en presente: <em>Seit einer Woche nehme ich Dolorex.</em>"
      },
      {
        contrast: "En español «antes del desayuno», «después de comer», «con un vaso de agua» no cambian el artículo. En alemán cada preposición de esta lección dispara el dativo, y el error <em>vor das Frühstück</em> se nota enseguida. <em>Seit</em> además funciona como nuestro «desde hace» con presente: «tomo Dolorex desde hace una semana» es <em>Seit einer Woche nehme ich Dolorex</em>, nunca con Perfekt. Y en la historia clínica española quizá escribas «a demanda» o «si precisa» (s/p); en Alemania es <em>bei Bedarf</em>, abreviado <em>b.B.</em> El paciente hispanohablante dice «el anticoagulante» o «la pastilla para la sangre»; el alemán dice casi siempre <em>der Blutverdünner</em>, mientras que <em>das Antikoagulans</em> queda para el médico y la historia."
      },
      {
        trap: "<em>Nüchtern</em> en planta significa «en ayunas», pero en la lengua de todos los días también quiere decir «sobrio, que no ha bebido» e incluso «sobrio, sin adornos». Si le dices al paciente <em>Bleiben Sie bitte nüchtern</em>, añade qué significa para esa prueba: <em>Bitte nichts essen.</em> y, según la indicación, <em>Wasser dürfen Sie trinken</em> o <em>Bitte auch nichts trinken.</em> No confundas <em>nach dem Essen</em> (preposición + sustantivo) con <em>nachdem</em>, que es una conjunción y manda el verbo al final. <em>Zur Nacht</em> es «al acostarse», <em>in der Nacht</em> es «durante la noche»: en el plan de medicación no son lo mismo. Y <em>morgens</em> es «por la mañana», mientras que <em>morgen</em> es «mañana», el día siguiente: el español usa la misma palabra para las dos cosas, el alemán no."
      },
      {
        tip: "Si un paciente dice que ha olvidado una pastilla, nunca le digas tú lo que tiene que hacer: <em>Dann sagen Sie es mir bitte. Ich frage den Arzt.</em> Recuperar o saltarse una dosis es una decisión del médico, y la respuesta correcta cambia de un medicamento a otro."
      }
    ],
    grammar: {
      title: "Horarios y preposiciones con dativo",
      note: "<b>vor</b> (de tiempo)<b>, nach, mit, seit, zu, bei</b> + <b>dativo</b>. Los adverbios de tiempo (<b>morgens, abends, täglich</b>) no llevan artículo.",
      table: {
        head: ["expresión", "dativo de", "español"],
        rows: [
          ["vor dem Frühstück", "das Frühstück", "antes del desayuno"],
          ["nach dem Essen", "das Essen", "después de comer"],
          ["mit einem Glas Wasser", "ein Glas", "con un vaso de agua"],
          ["seit einer Woche", "eine Woche", "desde hace una semana"],
          ["zu den Mahlzeiten", "die Mahlzeiten", "con las comidas"],
          ["bei Bedarf", "der Bedarf", "si es necesario, si precisa"]
        ]
      },
      examples: [
        { tr: "Tómese la pastilla antes del desayuno, por favor.", note: "vor dem: dativo de das Frühstück" },
        { tr: "El antibiótico tómelo siempre después de comer.", note: "nach dem Essen" },
        { tr: "Para la analítica de mañana tiene que estar en ayunas.", note: "nüchtern bleiben: sin comer; qué se puede beber lo dice la indicación de esa prueba" },
        { tr: "El anticoagulante se lo damos por la noche.", note: "Blutverdünner: la palabra del paciente" },
        { tr: "Si lo necesita, le damos una pastilla para el dolor.", note: "bei Bedarf, en la historia a menudo b.B." },
        { tr: "Tomo Dolorex desde hace una semana.", note: "seit + dativo, verbo en presente" }
      ]
    },
    vocab: [
      "la toma (de un medicamento)",
      "la comida (cada una del día)",
      "en ayunas (también: sobrio)",
      "diario, al día (einmal täglich: una vez al día)",
      "por la mañana, cada mañana",
      "por la noche, cada noche",
      "si es necesario, si precisa",
      "el antibiótico",
      "el anticoagulante (término técnico)",
      "el anticoagulante (palabra para el paciente)",
      "tragar",
      "olvidar"
    ],
    dialogue: [
      "Señora Marin, ¿cuándo tengo que tomar esta pastilla?",
      "Cardiomin lo toma por la mañana, antes del desayuno.",
      "¿Con el café?",
      "Con un vaso de agua, por favor. Así pone también en su plan.",
      "¿Y el antibiótico?",
      "Ese se lo damos tres veces al día, siempre después de comer.",
      "¿Y si me olvido de una pastilla?",
      "Entonces dígamelo, por favor. Le pregunto al médico qué tiene que hacer.",
      "Bien. ¿Y mañana por la mañana?",
      "Mañana por la mañana quédese en ayunas, por favor, por la analítica."
    ],
    exercises: [
      {
        q: "El médico dice que mañana por la mañana, antes de la analítica, el paciente tiene que estar «nüchtern». ¿Qué significa?",
        opts: ["en ayunas", "en la cama, sin levantarse", "sin medicamentos"],
        why: "En planta <b>nüchtern</b> significa «en ayunas»: sin comer; si se puede beber agua depende de la prueba. En la lengua de todos los días también quiere decir «sobrio»."
      },
      {
        tr: "El presente de einnehmen, todas las personas.",
        why: "<i>Nehme ein, nimmst ein, nimmt ein, nehmen ein, nehmt ein, nehmen ein</i>: verbo separable, el prefijo <i>ein</i> va al final, y en la segunda y tercera persona del singular la <b>e</b> pasa a <b>i</b>."
      },
      {
        q: "Completa: «Nehmen Sie die Tablette bitte nach ___ Essen ein.»",
        hint: "nach + dativo, das Essen",
        why: "<b>dem</b>: <i>nach</i> rige dativo, y el dativo de <i>das Essen</i> es <i>dem Essen</i>."
      },
      {
        q: "Completa con la preposición correcta.",
        tr: "Las gotas se toman antes del desayuno y el antibiótico después de comer.",
        why: "<i>Vor dem Frühstück</i> y <i>nach dem Essen</i>: dos preposiciones distintas, el mismo dativo."
      },
      {
        q: "Relaciona cada expresión con su significado.",
        pairs: ["por la mañana", "por la noche", "al acostarse", "si es necesario"]
      },
      {
        q: "¿Qué expresiones son correctas?",
        opts: ["nach dem Essen", "vor das Frühstück", "mit einem Glas Wasser", "seit eine Woche", "zu den Mahlzeiten"],
        why: "<i>Vor</i> y <i>seit</i> rigen aquí dativo: <i>vor dem Frühstück</i>, <i>seit einer Woche</i>. Por eso las dos opciones con <i>vor</i> y <i>seit</i> son incorrectas; <i>nach dem Essen</i>, <i>mit einem Glas Wasser</i> y <i>zu den Mahlzeiten</i> son correctas."
      },
      {
        q: "Ordena las palabras.",
        tr: "El antibiótico tómelo siempre después de comer.",
        why: "<i>Das Antibiotikum nehmen Sie immer nach dem Essen.</i> El objeto al principio, el verbo <i>nehmen</i> en segunda posición y el sujeto <i>Sie</i> justo después."
      },
      {
        q: "Traduce: «Tómese la pastilla por la mañana antes del desayuno.»",
        why: "<i>Nehmen Sie die Tablette morgens vor dem Frühstück (ein).</i> El imperativo de cortesía empieza con el verbo; <i>morgens</i> y <i>vor dem Frühstück</i> traducen las dos indicaciones de tiempo."
      },
      {
        q: "Un paciente pregunta cuándo tomar un medicamento.",
        setting: "El señor Brandt tiene en la mano una pastilla nueva.",
        lines: [
          { tr: "¿Cuándo tengo que tomar la pastilla?" },
          { tr: "Responde: por la mañana, antes del desayuno.", answerTr: "Por la mañana, antes del desayuno." },
          { tr: "¿Con el café?" },
          { tr: "Responde: con un vaso de agua, por favor.", answerTr: "Con un vaso de agua, por favor." },
          { tr: "¿Y si me olvido de la pastilla?" },
          { tr: "Responde que te lo diga y que preguntas al médico.", answerTr: "Entonces dígamelo, por favor. Le pregunto al médico." }
        ]
      },
      {
        tr: "Cardiomin lo toma por la mañana antes del desayuno, y el antibiótico siempre después de comer.",
        why: "En <i>Frühstück</i> la <b>ü</b> es larga en <i>früh</i> y breve en <i>Stück</i>: labios como para «u» y lengua como para «i»; en <i>morgens</i> la <b>g</b> es dura y la <b>s</b> final sorda; en <i>Essen</i> la <b>ss</b> es sorda."
      },
      {
        tr: "Tómese la pastilla después de comer, por favor.",
        why: "En <i>nehmen</i> la <b>h</b> no se pronuncia y alarga la <b>e</b>; en <i>Tablette</i> el acento cae en <b>let</b>; en <i>nach</i> la <b>ch</b> después de <b>a</b> es [x], muy parecida a nuestra jota."
      }
    ]
  },
  "lesson:pfl-u05-l3": {
    theme: "Leer",
    title: "El prospecto",
    objectives: [
      "orientarse en las secciones de un prospecto alemán",
      "entender las oraciones condicionales con wenn y falls",
      "reconocer contraindicaciones, efectos secundarios e interacciones",
      "remitir cualquier duda al médico o a la farmacia"
    ],
    theory: [
      {
        h: "Cómo es el prospecto",
        p: "El prospecto alemán se llama <em>der Beipackzettel</em> en el habla diaria y <em>die Packungsbeilage</em> o <em>Gebrauchsinformation</em> en el papel. Las secciones son siempre las mismas: <em>Was ist ... und wofür wird es angewendet?</em>, <em>Was sollten Sie vor der Einnahme beachten?</em>, <em>Wie ist ... einzunehmen?</em>, <em>Welche Nebenwirkungen sind möglich?</em>, <em>Wie ist ... aufzubewahren?</em> El texto de la lección, el de <em>Dolorex</em>, es inventado de principio a fin: sirve para leer la lengua, no para usar un medicamento."
      },
      {
        h: "Wenn y falls",
        p: "El prospecto está lleno de oraciones condicionales. Después de <strong>wenn</strong> o <strong>falls</strong> el verbo conjugado va <strong>al final</strong>: <em>Wenn Sie schwanger sind, ...</em>, <em>Falls Sie eine Einnahme vergessen haben, ...</em> Si la condicional va delante, la principal empieza con el <strong>verbo</strong>, porque la condicional ocupa ella sola el primer lugar: <em>Wenn Sie Fragen haben, <b>rufen</b> Sie die Apotheke an.</em> <em>Falls</em> es solo condicional, «si, en caso de que»; <em>wenn</em> significa también «cuando»."
      },
      {
        contrast: "El <em>Beipackzettel</em> es nuestro «prospecto», y las secciones te sonarán: el prospecto español también sigue el modelo europeo. La diferencia está en el vocabulario. El prospecto español dice «contraindicaciones», «reacciones adversas», «interacciones», las mismas palabras latinas que usa el médico, y el paciente las entiende. El prospecto alemán prefiere palabras alemanas: <em>Gegenanzeigen</em>, o la fórmula <em>... darf nicht eingenommen werden, wenn ...</em>; <em>Nebenwirkungen</em>; <em>Wechselwirkungen</em>. <em>Die Kontraindikation</em> es la palabra del médico. También cambia la sintaxis: en español «si tiene preguntas, llame a la farmacia» no altera el orden de las palabras; en alemán <em>haben</em> va al final de la condicional y <em>rufen</em> abre la principal. «Wenn Sie Fragen haben, Sie rufen ...» es el error típico de quien piensa en español."
      },
      {
        trap: "En el prospecto <em>häufig</em> no es una impresión, es un número: por convención europea <em>sehr häufig</em> significa 1 de cada 10 personas o más, <em>häufig</em> entre 1 de cada 100 y 1 de cada 10, <em>selten</em> entre 1 de cada 10.000 y 1 de cada 1000. El prospecto no es <em>der Prospekt</em>, que es un folleto publicitario; ni tampoco <em>das Rezept</em>, que es la receta. <em>Die Drogerie</em> se parece a «droguería», pero no es una farmacia: vende cosmética, productos para el hogar y como mucho algún producto de venta libre; los medicamentos de farmacia y los de receta se compran en <em>der Apotheke</em>. Y <em>bekommen</em> no es «convenir»: significa «recibir» o, con un síntoma, que te da algo: <em>Wenn Sie Atemnot bekommen</em> es «si le falta el aire»."
      },
      {
        tip: "Al paciente que te pregunta «¿puedo tomarlo junto con ...?» no le respondas leyendo el prospecto: <em>Das klären wir mit dem Arzt oder der Apotheke.</em> El prospecto te sirve para entender qué preguntar, no para decidir."
      }
    ],
    grammar: {
      title: "Wenn y falls",
      note: "En la condicional el verbo va <b>al final</b>. Si la condicional va delante, la principal empieza con el <b>verbo</b>.",
      table: {
        head: ["condicional", "principal", "nota"],
        rows: [
          ["Wenn Sie schwanger sind,", "fragen Sie Ihren Arzt.", "sind al final, fragen delante"],
          ["Falls Sie eine Einnahme vergessen haben,", "fragen Sie Ihren Arzt oder Apotheker.", "Perfekt: haben después del participio"],
          ["Wenn Sie Atemnot bekommen,", "gehen Sie sofort zum Arzt.", "bekommen: «darle a uno» un síntoma"],
          ["(principal delante)", "Dolorex darf nicht eingenommen werden, wenn ...", "la condicional también puede ir detrás"]
        ]
      },
      examples: [
        { tr: "Si está embarazada, consulte a su médico antes de tomarlo.", note: "wenn: el verbo sind al final" },
        { tr: "Si ha olvidado una toma, consulte a su médico o farmacéutico.", note: "falls: en caso de que" },
        { tr: "Si le falta el aire, vaya enseguida al médico.", note: "la principal empieza con gehen" },
        { tr: "Si toma otros medicamentos, dígaselo al médico.", note: "posibles interacciones: Wechselwirkungen" },
        { tr: "Dolorex no se debe tomar si es alérgico a él.", note: "Dolorex es inventado; pasiva con dürfen" },
        { tr: "Si tiene preguntas, llame a la farmacia.", note: "anrufen es separable: an al final" }
      ]
    },
    vocab: [
      "el prospecto (palabra corriente)",
      "el prospecto (término oficial)",
      "el efecto secundario",
      "la interacción (entre medicamentos)",
      "la contraindicación (término técnico)",
      "la contraindicación (palabra del prospecto)",
      "la farmacia",
      "el farmacéutico",
      "embarazada",
      "alérgico",
      "conservar, guardar",
      "en caso de que, si"
    ],
    dialogue: [
      "Dolorex es un analgésico inventado. Solo existe en este curso.",
      "Dolorex no se debe tomar si es alérgico a él.",
      "Si está embarazada o en periodo de lactancia, consulte a su médico o farmacéutico antes de tomarlo.",
      "Si toma otros medicamentos, dígaselo a su médico. Puede haber interacciones.",
      "Tome Dolorex siempre exactamente como le ha indicado su médico.",
      "Si ha olvidado una toma, consulte a su médico o farmacéutico.",
      "Si le aparece una erupción en la piel o le falta el aire, deje de tomar Dolorex y vaya enseguida al médico.",
      "Mantenga el medicamento fuera del alcance de los niños."
    ],
    culture: {
      title: "Una mirada alemana: Apotheke y Beipackzettel",
      text: "<p>En Alemania casi todos los medicamentos se venden solo en farmacias (<i>apothekenpflichtig</i>), y una parte solo con receta (<i>verschreibungspflichtig</i>). Pocos productos son <i>freiverkäuflich</i> y se encuentran también en la <i>Drogerie</i> o en el supermercado. Las farmacias se reconocen por la gran <b>A</b> roja de estilo gótico, en lugar de nuestra cruz verde, y por la noche y en festivos siempre hay una <i>Notdienstapotheke</i> de guardia.</p><p>El <i>Beipackzettel</i> está tan presente en la vida diaria que su frase obligatoria en la publicidad se ha convertido en una frase hecha: <i>Zu Risiken und Nebenwirkungen lesen Sie die Packungsbeilage und fragen Sie Ihren Arzt oder Apotheker.</i> Para el médico existe un documento distinto y más técnico, la <i>Fachinformation</i>, el equivalente de nuestra ficha técnica.</p>"
    },
    exercises: [
      {
        q: "Lee el prospecto de Dolorex. «Quien es alérgico a Dolorex puede tomarlo igualmente.»",
        opts: ["Verdadero", "Falso"],
        why: "Falso: <i>Dolorex darf nicht eingenommen werden, wenn Sie allergisch dagegen sind.</i> La alergia al medicamento es una contraindicación, una <i>Gegenanzeige</i>."
      },
      {
        q: "Lee el prospecto de Dolorex. «En el embarazo hay que consultar al médico o al farmacéutico antes de tomarlo.»",
        opts: ["Verdadero", "Falso"],
        why: "Verdadero: <i>Wenn Sie schwanger sind oder stillen, fragen Sie vor der Einnahme Ihren Arzt oder Apotheker.</i>"
      },
      {
        q: "Según el prospecto, ¿qué se hace si aparece una erupción en la piel?",
        opts: ["Se pone una pomada y se sigue tomando.", "Se sigue tomando y se espera.", "Se deja de tomar y se va enseguida al médico."],
        why: "<i>Wenn Sie Hautausschlag oder Atemnot bekommen, nehmen Sie Dolorex nicht weiter ein und gehen Sie sofort zum Arzt.</i> <i>Nicht weiter einnehmen</i> significa «dejar de tomar»."
      },
      {
        q: "Completa: «___ Sie schwanger sind, fragen Sie vor der Einnahme Ihren Arzt.»",
        hint: "conjunción condicional",
        why: "<b>Wenn</b> o <b>Falls</b>: las dos mandan el verbo <i>sind</i> al final, y la principal empieza con <i>fragen</i>."
      },
      {
        q: "Completa la frase del prospecto.",
        tr: "Si le falta el aire, vaya enseguida al médico.",
        why: "<i>Wenn Sie Atemnot bekommen, gehen Sie sofort zum Arzt</i>: <i>bekommen</i> al final de la condicional, <i>zum Arzt</i> para la dirección hacia una persona."
      },
      {
        q: "Ordena las palabras.",
        tr: "Si tiene preguntas, llame a la farmacia.",
        why: "<i>Wenn Sie Fragen haben, rufen Sie die Apotheke an.</i> <i>Haben</i> al final de la condicional, <i>rufen</i> abre la principal y el prefijo <i>an</i> cierra la frase."
      },
      {
        q: "Relaciona cada palabra del prospecto con su significado.",
        pairs: ["la contraindicación", "el efecto secundario", "la interacción", "el prospecto", "el farmacéutico"]
      },
      {
        q: "¿Qué frases están bien construidas?",
        opts: [
          "Wenn Sie Schmerzen haben, klingeln Sie bitte.",
          "Wenn Sie haben Schmerzen, klingeln Sie bitte.",
          "Falls Ihnen übel wird, sagen Sie es mir.",
          "Wenn Sie Fragen haben, Sie fragen den Arzt.",
          "Wenn Sie eine Tablette vergessen haben, fragen Sie den Arzt."
        ],
        why: "En la condicional el verbo va al final (<i>haben</i>, <i>wird</i>), y la principal empieza con el verbo (<i>klingeln</i>, <i>sagen</i>, <i>fragen</i>). La segunda y la cuarta fallan justo en eso."
      },
      {
        q: "Traduce: «Si tiene preguntas, consulte al médico o al farmacéutico.»",
        why: "<i>Wenn Sie Fragen haben, fragen Sie Ihren Arzt oder Apotheker.</i> También vale <i>falls</i>, y <i>den Arzt</i> en lugar de <i>Ihren Arzt</i>: <i>fragen</i> rige acusativo, no dativo como «preguntar a»."
      },
      {
        tr: "Si le aparece una erupción en la piel o le falta el aire, deje de tomar Dolorex y vaya enseguida al médico.",
        why: "En <i>Hautausschlag</i> el acento cae en la primera sílaba, <b>Haut</b>; en <i>Atemnot</i> en la <b>A</b>; en <i>sofort</i> en la segunda sílaba, <b>fort</b>."
      },
      {
        tr: "Si tiene preguntas, consulte a su médico, por favor.",
        why: "En <i>Wenn</i> la <b>w</b> suena [v], con los dientes sobre el labio, no como nuestra b; en <i>Fragen</i> la <b>a</b> es larga; en <i>Ihren</i> la <b>h</b> no se pronuncia y alarga la <b>i</b>; en <i>Arzt</i> se pronuncian tanto la <b>z</b> como la <b>t</b> final."
      }
    ]
  },
  "lesson:pfl-u05-l4": {
    theme: "Seguridad",
    title: "Preparar la medicación",
    objectives: [
      "describir la preparación de la medicación con la pasiva",
      "usar müssen, dürfen y sollen con el infinitivo pasivo",
      "nombrar las seis R de la administración segura",
      "preguntar en farmacia o al médico en lugar de decidir por cuenta propia"
    ],
    theory: [
      {
        h: "La pasiva de planta",
        p: "Cuando importa la acción y no quién la hace, el alemán usa la <strong>pasiva</strong>: <em>werden</em> conjugado en segunda posición y el participio al final. <em>Die Medikamente werden im Stationszimmer gerichtet. Jede Gabe wird dokumentiert.</em> Con un modal, el modal va en segunda posición y al final va el infinitivo pasivo, participio + <em>werden</em>: <em>Vor der Gabe muss der Name kontrolliert werden.</em> En la pregunta de sí o no el modal va en primer lugar: <em>Darf die Tablette geteilt werden?</em>"
      },
      {
        h: "Die 6-R-Regel",
        p: "Antes de cada administración se comprueban seis «R», de <em>richtig</em>: <em>die richtige Person</em>, <em>das richtige Medikament</em>, <em>die richtige Dosierung</em>, <em>die richtige Applikationsart</em>, <em>der richtige Zeitpunkt</em>, <em>die richtige Dokumentation</em>. Aquí la regla es un tema de lengua: fíjate en cómo <em>richtig</em> cambia de terminación con el artículo (<em>der richtige</em>, <em>die richtige</em>, <em>das richtige</em>). Algunos centros cuentan más de seis; vale siempre el estándar de tu centro."
      },
      {
        contrast: "En España y en Latinoamérica la misma regla se enseña como «los cinco correctos» (paciente, medicamento, dosis, vía y hora correctos), a menudo ampliados a seis, siete o diez con el registro. El alemán tiene las R de <em>richtig</em>, y como «correcto», <em>richtig</em> concuerda con el sustantivo, pero con el artículo delante: <em>der richtige Zeitpunkt</em>, <em>die richtige Person</em>. La pasiva también te resultará cercana: «los medicamentos son preparados» corresponde a <em>die Medikamente werden gerichtet</em>, con <em>werden</em> en lugar de «ser». Pero el español prefiere la pasiva refleja («se preparan los medicamentos», «se documenta todo»), y esa construcción con «se» no existe en alemán: se dice <em>Alles wird dokumentiert</em> o <em>Man dokumentiert alles</em>. Y la posición: el participio va al final, y con un modal van al final participio y <em>werden</em> juntos, mientras que el español dice «tiene que ser controlado» todo seguido."
      },
      {
        trap: "<em>Richten</em> aquí significa «preparar la medicación» (en muchas plantas se dice también <em>stellen</em>), no «dirigir» ni «juzgar». <em>Verabreichen</em> es administrar el medicamento; <em>verschreiben</em> es recetarlo, y eso lo hace el médico. <em>Die Dosierung</em> es la pauta (cuánto y cuándo), <em>die Dosis</em> es la cantidad de una toma. <em>Kontrollieren</em> es «comprobar», no «controlar» en el sentido de dominar algo. Ojo también con la forma: el participio de <em>dokumentieren</em> es <em>dokumentiert</em>, sin <em>ge-</em>, como todos los verbos en <em>-ieren</em>; el de <em>verabreichen</em> es <em>verabreicht</em>, sin <em>ge-</em> por el prefijo inseparable <em>ver-</em>."
      },
      {
        tip: "La frase más importante de la lección es la que remite la duda: <em>Da müssen wir in der Apotheke nachfragen</em> o <em>Das klären wir mit dem Arzt.</em> Partir una pastilla, triturarla o cambiar el horario son decisiones que no se toman de memoria."
      }
    ],
    grammar: {
      title: "Pasiva y modales",
      note: "Pasiva: <b>werden</b> en segunda posición, participio <b>al final</b>. Con un modal: modal en segunda posición (primera en la pregunta de sí o no) y al final <b>participio + werden</b>.",
      table: {
        head: ["estructura", "ejemplo", "nota"],
        rows: [
          ["pasiva en presente", "Die Medikamente werden gerichtet.", "werden + participio"],
          ["pasiva, singular", "Jede Gabe wird dokumentiert.", "-ieren: sin ge-"],
          ["modal + pasiva", "Der Name muss kontrolliert werden.", "participio + werden al final"],
          ["pregunta de sí o no", "Darf die Tablette geteilt werden?", "el modal abre la frase"]
        ]
      },
      examples: [
        { tr: "La medicación se prepara en el control de enfermería.", note: "werden en plural" },
        { tr: "Cada administración se registra enseguida.", note: "dokumentiert: sin ge-" },
        { tr: "Antes de la administración hay que comprobar el nombre.", note: "müssen + infinitivo pasivo" },
        { tr: "¿Se puede partir la pastilla?", note: "pregunta de sí o no: dürfen en primer lugar" },
        { tr: "Tenemos que preguntarlo en la farmacia.", note: "nachfragen: separable, en infinitivo va junto" },
        { tr: "Si algo no está claro, se le pregunta al médico.", note: "pasiva: importa la acción, no quién la hace" }
      ]
    },
    vocab: [
      "preparar (la medicación)",
      "el pastillero, el dispensador",
      "el compartimento",
      "la prescripción, la orden médica",
      "la dosificación, la pauta",
      "la administración",
      "administrar",
      "comprobar",
      "documentar, registrar",
      "partir, dividir",
      "el momento, la hora",
      "la confusión (de medicamentos o de pacientes)"
    ],
    dialogue: [
      "Elena, ¿me ayudas? Todavía hay que preparar la medicación de la noche.",
      "Claro. Lo comprobamos todo con la regla de las 6 R.",
      "La persona correcta: la señora Kühn, habitación cuatro. El medicamento correcto: Cardiomin.",
      "La dosis correcta y la vía correcta: como pone en la prescripción. Por boca.",
      "¿Se puede partir la pastilla? A la señora Kühn le cuesta tragar.",
      "No lo sé. Tenemos que preguntarlo en la farmacia.",
      "Bien. La hora correcta es al acostarse.",
      "Exacto. Y después de la administración se registra todo. Es la sexta R."
    ],
    exercises: [
      {
        q: "«La medicación se prepara en el control de enfermería.» ¿Qué frase es correcta?",
        opts: [
          "Die Medikamente werden im Stationszimmer gerichtet.",
          "Die Medikamente sind im Stationszimmer richten.",
          "Die Medikamente werden im Stationszimmer richten."
        ],
        why: "La pasiva es <b>werden</b> + <b>participio</b>: <i>werden ... gerichtet</i>. Con el infinitivo <i>richten</i> la frase se convertiría en un futuro, que aquí no tiene sentido."
      },
      {
        tr: "El presente de dürfen, todas las personas.",
        why: "<i>Darf, darfst, darf, dürfen, dürft, dürfen</i>: en singular la <b>ü</b> pasa a <b>a</b>, y la primera y la tercera persona del singular son iguales, sin terminación."
      },
      {
        q: "Completa: «Jede Gabe ___ sofort dokumentiert.»",
        hint: "werden, tercera persona del singular",
        why: "<b>wird</b>: el sujeto <i>jede Gabe</i> es singular, y la pasiva se forma con <i>werden</i>."
      },
      {
        q: "Completa con el modal y el infinitivo pasivo.",
        tr: "Antes de la administración hay que comprobar el nombre.",
        why: "<i>Vor der Gabe muss der Name kontrolliert werden</i>: <i>muss</i> en segunda posición, al final el participio <i>kontrolliert</i> y después <i>werden</i>."
      },
      {
        q: "Ordena las palabras.",
        tr: "¿Se puede partir la pastilla?",
        why: "<i>Darf die Tablette geteilt werden?</i> Pregunta de sí o no: el modal <i>darf</i> abre la frase y <i>geteilt werden</i> la cierra."
      },
      {
        q: "Relaciona cada R con su significado.",
        pairs: ["la persona correcta", "el medicamento correcto", "la dosis correcta", "la vía de administración correcta", "el momento correcto", "el registro correcto"]
      },
      {
        q: "Elige el artículo determinado correcto para cada sustantivo.",
        items: ["pastillero", "compartimento", "prescripción", "dosificación", "momento, hora", "confusión"]
      },
      {
        q: "¿Qué frases están bien construidas?",
        opts: [
          "Die Tablette darf nicht geteilt werden.",
          "Die Tablette darf nicht geteilt wird.",
          "Der Name muss kontrolliert werden.",
          "Der Name muss werden kontrolliert.",
          "Die Gabe soll dokumentiert werden."
        ],
        why: "Con un modal, al final de la frase van el participio y después <i>werden</i> en infinitivo: <i>geteilt werden</i>, <i>kontrolliert werden</i>, <i>dokumentiert werden</i>."
      },
      {
        q: "Traduce: «Cada administración se registra.»",
        why: "<i>Jede Gabe wird dokumentiert.</i> También valen <i>Verabreichung</i> o <i>Applikation</i>. Pasiva: <i>wird</i> + participio sin <i>ge-</i>; la pasiva refleja con «se» no tiene equivalente directo."
      },
      {
        q: "Un compañero te pregunta por la medicación de la noche.",
        setting: "Estás en el control de enfermería con tu compañero Jonas.",
        lines: [
          { tr: "¿Ya está preparada la medicación de la noche?" },
          { tr: "Responde que se está preparando ahora mismo.", answerTr: "No, se está preparando ahora mismo." },
          { tr: "¿Se puede partir la pastilla de la señora Kühn?" },
          { tr: "Responde que no lo sabes y que hay que preguntar en la farmacia.", answerTr: "No lo sé. Tenemos que preguntar en la farmacia." },
          { tr: "¿Y después de la administración?" },
          { tr: "Responde que después de la administración se registra todo.", answerTr: "Después de la administración se registra todo." }
        ]
      },
      {
        tr: "La medicación se prepara según la regla de las 6 R. Después de la administración se registra todo.",
        why: "En <i>gerichtet</i> la <b>ch</b> después de <b>i</b> es [ç], más suave y más adelante en la boca que la jota; en <i>dokumentiert</i> el acento cae en <b>tiert</b>, como en todos los verbos en <i>-ieren</i>; en <i>Regel</i> la primera <b>e</b> es larga."
      },
      {
        tr: "¿Se puede partir la pastilla?",
        why: "En <i>Darf</i> la <b>r</b> después de la vocal apenas se oye, nada de vibrante; en <i>geteilt</i> la <b>ei</b> es [aɪ], como «ai» en «aire»; en <i>werden</i> la <b>e</b> es larga."
      }
    ]
  },
  "lesson:pfl-u05-test": {
    theme: "Evaluación",
    title: "Test: Medicamentos y prospecto",
    objectives: [
      "comprobar las vías de administración y sus fórmulas para el paciente, los horarios con dativo, las oraciones con wenn y falls y la pasiva de la preparación"
    ],
    theory: [
      {
        p: "Once preguntas sobre toda la unidad. Se aprueba con el 70%. Los medicamentos citados son inventados y los contenidos clínicos son ejemplos didácticos: en planta valen la prescripción del médico y el protocolo del centro."
      }
    ],
    exercises: [
      {
        q: "El médico ha escrito «intravenös». ¿Cómo se lo dices al paciente?",
        opts: ["unter die Haut", "über den Mund", "in die Vene"],
        why: "<i>Intravenös</i> es «en la vena»: al paciente se le dice <b>in die Vene</b>."
      },
      {
        q: "Completa: «Nehmen Sie die Tropfen vor ___ Frühstück.»",
        hint: "vor + dativo, das Frühstück",
        why: "<b>dem</b>: en esta expresión <i>vor</i> rige dativo."
      },
      {
        q: "Completa: «Die Medikamente ___ im Stationszimmer gerichtet.»",
        hint: "pasiva, plural",
        why: "<b>werden</b>: sujeto plural, pasiva con <i>werden</i> y el participio <i>gerichtet</i> al final."
      },
      {
        q: "Relaciona cada término técnico con la palabra para el paciente o del prospecto.",
        pairs: ["über den Mund", "unter die Haut", "in die Vene", "die Gegenanzeige"]
      },
      {
        q: "¿Qué frases son correctas?",
        opts: [
          "Wenn Sie Schmerzen haben, klingeln Sie bitte.",
          "Wenn Sie haben Schmerzen, klingeln Sie bitte.",
          "Falls Sie Fragen haben, Sie rufen die Apotheke an.",
          "Vor der Gabe wird der Name kontrolliert.",
          "Nehmen Sie die Tablette nach dem Essen ein."
        ],
        why: "Después de <i>wenn</i> y <i>falls</i> el verbo va al final y la principal empieza con el verbo. <i>Vor der Gabe wird ... kontrolliert</i> es una pasiva correcta, <i>nach dem Essen</i> un dativo correcto."
      },
      {
        q: "Completa la frase.",
        tr: "En caso de que haya olvidado una toma, consulte a su médico, por favor.",
        why: "<i>Falls Sie eine Einnahme vergessen haben, fragen Sie bitte Ihren Arzt</i>: el participio <i>vergessen</i> antes de <i>haben</i>, y la principal empieza con <i>fragen</i>."
      },
      {
        q: "Ordena las palabras.",
        tr: "Después de la administración se registra todo.",
        why: "<i>Nach der Gabe wird alles dokumentiert.</i> <i>Nach der Gabe</i> al principio, <i>wird</i> en segunda posición y el participio al final."
      },
      {
        q: "«Packungsbeilage» y «Beipackzettel» designan el mismo prospecto.",
        opts: ["Verdadero", "Falso"],
        why: "Verdadero: <i>Packungsbeilage</i> es el nombre oficial, <i>Beipackzettel</i> el de todos los días."
      },
      {
        q: "Elige el artículo determinado correcto para cada sustantivo.",
        items: ["pastilla", "supositorio", "prospecto", "efecto secundario", "pastillero", "antibiótico"]
      },
      {
        tr: "Si tiene preguntas sobre sus medicamentos, consulte al médico o a la farmacia, por favor.",
        why: "En <i>Medikamenten</i> el acento cae en <b>men</b>; en <i>Apotheke</i> el acento está en <b>the</b> y la <b>th</b> se lee [t]; en <i>Fragen</i> la <b>a</b> es larga."
      },
      {
        tr: "Mañana por la mañana quédese en ayunas, por favor.",
        why: "En <i>nüchtern</i> la <b>ü</b> es breve y la <b>ch</b> es [ç]; en <i>früh</i> la <b>ü</b> es larga y la <b>h</b> no se pronuncia; en <i>bleiben</i> la <b>ei</b> es [aɪ], como «ai» en «aire»."
      }
    ]
  }
});
