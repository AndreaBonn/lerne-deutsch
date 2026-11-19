/* ============================================================
   Learner-language text (es) for data/core/pfl-03.js, unit pfl-u03.
   Keys point at ids in the neutral layer; arrays merge by index,
   so their length has to match core.
   Checked by scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("es", {
  "unit:pfl-u03": {
    title: "Cuidados básicos y movilización",
    grammarNote: "los verbos reflexivos del aseo y del vestido · las preposiciones con acusativo o dativo (wohin? / wo?) · los verbos modales con el paciente · el infinitivo con zu · pares Fachsprache / Laiensprache"
  },
  "lesson:pfl-u03-l1": {
    theme: "Aseo y vestido",
    title: "Asearse y vestirse",
    objectives: [
      "acompañar al paciente en el aseo de la mañana, en el lavabo o en la cama",
      "usar los verbos reflexivos: sich waschen, sich anziehen, sich rasieren",
      "elegir entre mich y mir cuando la frase tiene un complemento",
      "proteger la intimidad del paciente con palabras y gestos respetuosos"
    ],
    theory: [
      {
        h: "El aseo de la mañana",
        p: "La <strong>Grundpflege</strong> abarca aseo, vestido, alimentación, eliminación y movilidad. La primera pregunta no es «¿lo lavo yo?», sino qué quiere y qué puede hacer solo el paciente: <em>Möchten Sie sich heute selbst waschen? Am Waschbecken oder lieber im Bett?</em> Después se reparte el trabajo, en voz alta: <em>Das Gesicht waschen Sie sich selbst, den Rücken wasche ich Ihnen.</em> Para la higiene íntima se ofrece siempre primero que la haga el propio paciente, y se dice qué se hace para proteger su intimidad: <em>Ich ziehe den Vorhang zu. Ich warte so lange draußen.</em>"
      },
      {
        h: "Los verbos reflexivos",
        p: "Muchos verbos del aseo son reflexivos: <em>sich waschen, sich anziehen, sich ausziehen, sich rasieren, sich kämmen</em>. En la oración principal el pronombre va detrás del verbo conjugado: <em>Ich wasche mich. Er zieht sich an.</em> Con el Sie de cortesía el reflexivo es <strong>sich</strong>, en minúscula, no <em>Sie</em>: <em>Können Sie sich allein anziehen?</em> Cuando la frase tiene además un complemento directo en acusativo (la parte del cuerpo, una prenda), el reflexivo pasa al <strong>dativo</strong>: <em>Ich wasche mich</em>, pero <em>Ich wasche mir das Gesicht</em>. La diferencia solo se ve con <em>ich</em> y <em>du</em> (mich/mir, dich/dir): <em>sich</em>, <em>uns</em> y <em>euch</em> no cambian. En el Perfekt los verbos reflexivos van con <em>haben</em>: <em>Er hat sich schon angezogen.</em>"
      },
      {
        contrast: "El español tiene los mismos reflexivos, y eso ayuda: «me lavo», «se viste», «¿se afeita usted?». La diferencia está en la posición. El español pone el pronombre delante del verbo conjugado («¿se lava usted solo?») o lo pega al infinitivo («¿puede vestirse?»); el alemán lo pone siempre detrás del verbo conjugado, también con un modal, y deja el infinitivo al final: <em>Können Sie sich allein anziehen?</em>, nunca «Können Sie anziehen sich». Y el español dice «me lavo las manos» con el mismo «me» que «me lavo»; el alemán cambia de caso: <em>Ich wasche mir die Hände</em>, no <em>mich</em>. Lo bueno es que ninguna de las dos lenguas usa aquí el posesivo: ni «lavo mis manos» ni «meine Hände». En la documentación y entre compañeros se habla de <em>Intimpflege</em> e <em>Intimbereich</em>, términos transparentes para ti; muchos pacientes mayores no usan estas palabras y dicen <em>untenherum</em>, algo así como «ahí abajo». No hace falta corregirlos: entiende la palabra y responde con calma, sin nombres más explícitos que los que ha elegido el paciente."
      },
      {
        trap: "<em>baden</em> no significa «lavarse» en general: es bañarse en la bañera. Lavarse en el lavabo es <em>sich waschen</em>, la ducha es <em>duschen</em>. <em>Das Bad</em> es a la vez el cuarto de baño y el baño en la bañera. <em>Die Wäsche</em> es la colada o la ropa blanca, pero en planta <em>die Ganzkörperwäsche</em> es el aseo completo del cuerpo, a menudo en la cama. Y cuidado con <em>das Hemd</em>: es la camisa, mientras que el camisón es <em>das Nachthemd</em>."
      },
      {
        tip: "Anuncia cada gesto antes de hacerlo: <em>Ich wasche Ihnen jetzt den Rücken.</em> Una frase breve antes de tocar al paciente tranquiliza más que cualquier explicación, y con el reflexivo o el dativo te entrena en el esquema que más cuenta en esta lección."
      }
    ],
    grammar: {
      title: "¿mich o mir?",
      note: "Sin otro complemento directo el reflexivo va en <b>acusativo</b> (<b>mich</b>). Con un complemento directo en acusativo, la parte del cuerpo o la prenda, pasa al <b>dativo</b> (<b>mir</b>). Con el paciente: siempre <b>sich</b>.",
      table: {
        head: ["persona", "sin complemento (acusativo)", "con un complemento (dativo)"],
        rows: [
          ["ich", "Ich wasche mich.", "Ich wasche mir die Hände."],
          ["er / sie", "Er zieht sich an.", "Er zieht sich die Jacke an."],
          ["wir", "Wir waschen uns.", "Wir putzen uns die Zähne."],
          ["Sie", "Waschen Sie sich selbst?", "Waschen Sie sich das Gesicht selbst?"]
        ]
      },
      examples: [
        { tr: "¿Hoy quiere lavarse usted sola?", note: "con el Sie el reflexivo es sich" },
        { tr: "Primero me lavo la cara.", note: "hay un complemento (das Gesicht): mir, en dativo" },
        { tr: "¿Puede vestirse usted solo?", note: "anziehen es separable: Ich ziehe mich an" },
        { tr: "La zona íntima se la lava usted misma, yo mientras espero fuera.", note: "se ofrece siempre primero la higiene íntima autónoma" },
        { tr: "¿Quiere afeitarse?", note: "sich rasieren: preguntar, no dar por supuesto" },
        { tr: "El señor Brandt ya se ha vestido.", note: "Perfekt de los reflexivos: siempre con haben" }
      ]
    },
    vocab: [
      "los cuidados básicos (aseo, vestido, alimentación, eliminación, movilidad)",
      "la higiene personal",
      "lavarse",
      "vestirse",
      "desvestirse, quitarse (una prenda)",
      "afeitarse",
      "peinarse",
      "la manopla de aseo",
      "la toalla",
      "el lavabo",
      "la higiene íntima",
      "la prótesis dental, la dentadura postiza"
    ],
    dialogue: [
      "Buenos días, señora Keller. ¿Ha dormido bien?",
      "Buenos días. Regular.",
      "¿Hoy quiere lavarse en el lavabo o prefiere en la cama?",
      "En el lavabo, si me ayuda.",
      "Con mucho gusto. La cara y los brazos se los lava usted, la espalda se la lavo yo.",
      "Y la parte de abajo prefiero hacerla yo sola.",
      "Claro. Le doy una manopla limpia y espero fuera. Toque el timbre cuando termine.",
      "Gracias, lo prefiero así.",
      "Después se viste. ¿Qué blusa quiere ponerse hoy?",
      "La azul, por favor."
    ],
    culture: {
      title: "Una mirada alemana: Grundpflege y Behandlungspflege",
      text: "<p>En los cuidados alemanes se suelen distinguir dos ámbitos. La <i>Grundpflege</i> abarca las actividades de la vida diaria: aseo, vestido, alimentación, eliminación, movilidad. La <i>Behandlungspflege</i> abarca las tareas ligadas a una prescripción médica, por ejemplo curas o administración de medicamentos. En la atención domiciliaria la distinción decide también quién paga el servicio, así que es una palabra que leerás a menudo en los documentos.</p><p>En el hospital parte de la Grundpflege la hace también personal con una formación más corta, parecido a los auxiliares de enfermería (TCAE en España), pero la responsabilidad de valorar qué puede hacer solo el paciente sigue siendo de la enfermera.</p>"
    },
    exercises: [
      {
        q: "Quieres preguntar a la paciente si quiere lavarse sola. ¿Qué frase es correcta?",
        opts: [
          "Möchten Sie Sie selbst waschen?",
          "Möchten Sie sich selbst waschen?",
          "Möchten Sie selbst waschen sich?"
        ],
        why: "Con el Sie de cortesía el reflexivo es <b>sich</b>, no <i>Sie</i>. El modal <i>möchten</i> abre la pregunta de sí o no y el infinitivo <i>waschen</i> va al final."
      },
      {
        tr: "El presente de sich waschen, todas las personas.",
        why: "<i>Wasche mich, wäschst dich, wäscht sich, waschen uns, wascht euch, waschen sich</i>: en la segunda y tercera persona del singular la <b>a</b> pasa a <b>ä</b>, y el pronombre reflexivo cambia con la persona."
      },
      {
        q: "Completa: «Können Sie ___ allein anziehen?»",
        hint: "reflexivo de Sie",
        why: "<b>sich</b>, en minúscula: el reflexivo del Sie de cortesía es igual al de la tercera persona."
      },
      {
        q: "Completa con mich o mir.",
        tr: "Primero me lavo la cara, después me visto.",
        why: "<i>Ich wasche mir zuerst das Gesicht</i>: hay un complemento, <i>das Gesicht</i>, así que dativo <i>mir</i>. <i>Dann ziehe ich mich an</i>: no hay complemento, así que acusativo <i>mich</i>."
      },
      {
        q: "¿Qué frases son correctas?",
        opts: [
          "Ich wasche mir die Hände.",
          "Ich wasche mich die Hände.",
          "Können Sie sich allein anziehen?",
          "Er hat sich schon rasiert.",
          "Er ist sich schon rasiert."
        ],
        why: "Con un complemento (<i>die Hände</i>) el reflexivo va en dativo, <i>mir</i>. En el Perfekt los verbos reflexivos van con <i>haben</i>: <i>Er hat sich rasiert</i>."
      },
      {
        q: "Elige el artículo determinado correcto para cada sustantivo.",
        items: ["manopla de aseo", "toalla", "lavabo", "higiene íntima", "prótesis dental", "cuidados básicos"]
      },
      {
        q: "Relaciona cada verbo con su significado.",
        pairs: ["lavarse", "vestirse", "desvestirse", "afeitarse"]
      },
      {
        q: "Ordena las palabras.",
        tr: "¿Puede vestirse usted solo?",
        why: "<i>Können Sie sich allein anziehen?</i> El modal abre la pregunta de sí o no, el reflexivo <i>sich</i> sigue al sujeto y el infinitivo <i>anziehen</i> va al final."
      },
      {
        q: "Traduce (al paciente): «¿Quiere afeitarse?»",
        why: "<i>Möchten Sie sich rasieren?</i> Con el paciente <i>möchten</i> es la forma más cortés; <i>Wollen Sie</i> es correcto, pero suena más directo."
      },
      {
        q: "El aseo de la mañana.",
        setting: "Entras en la habitación de una paciente que quiere lavarse sola.",
        lines: [
          { tr: "Buenos días. Hoy me gustaría lavarme sola." },
          { tr: "Responde que la espalda se la lavas tú y el resto lo hace ella.", answerTr: "Con mucho gusto. La espalda se la lavo yo, el resto lo hace usted." },
          { tr: "¿Y la parte de abajo? Me da un poco de apuro." },
          { tr: "Responde que lo entiendes: la zona íntima se la lava ella misma y tú esperas fuera.", answerTr: "Lo entiendo. La zona íntima se la lava usted misma, yo espero fuera." },
          { tr: "¿Y después?" },
          { tr: "Responde que después se viste y que tú la ayudas con las medias.", answerTr: "Después se viste, y yo la ayudo con las medias." }
        ]
      },
      {
        tr: "La cara y los brazos se los lava usted, la espalda se la lavo yo.",
        why: "En <i>Gesicht</i> la <b>g</b> es dura (como en «gato») y la <b>ch</b> tras <b>i</b> es [ç], un sonido que el español no tiene; en <i>Rücken</i> la <b>ü</b> es breve; en <i>waschen</i> la <b>sch</b> es [ʃ]."
      },
      {
        tr: "¿Hoy quiere lavarse usted sola?",
        why: "En <i>Möchten</i> la <b>ö</b> es breve y la <b>ch</b> es [ç]; en <i>sich</i> la <b>s</b> inicial es sonora [z]; en <i>selbst</i> la <b>b</b> se pronuncia [p]."
      }
    ]
  },
  "lesson:pfl-u03-l2": {
    theme: "Movimiento",
    title: "Movilización y posicionamiento",
    objectives: [
      "acompañar al paciente de la cama al borde de la cama y a la silla de ruedas",
      "distinguir wohin? (acusativo) y wo? (dativo) con las preposiciones an, auf, in, neben",
      "usar los pares setzen / sitzen, legen / liegen, stellen / stehen",
      "reconocer Dekubitus y Kontraktur y decirlos con palabras del paciente"
    ],
    theory: [
      {
        h: "Anunciar el movimiento",
        p: "Antes de movilizar a un paciente se dice qué va a pasar y se pregunta si le parece bien: <em>Heute setzen wir Sie an die Bettkante. Ist das in Ordnung?</em> Se avanza en pasos pequeños, uno cada vez, y se para cuando el paciente avisa de que se encuentra mal: <em>Mir ist schwindelig.</em> <em>Dann bleiben Sie erst einmal sitzen.</em> Cómo y con qué ayudas técnicas se moviliza a un paciente lo deciden la valoración de enfermería y el protocolo del centro: aquí aprendes las palabras para acompañar el movimiento, no la técnica."
      },
      {
        h: "¿Wohin? o ¿wo?",
        p: "Las preposiciones <em>an, auf, in, neben, unter, über, vor, hinter, zwischen</em> rigen dos casos. Si hay un desplazamiento hacia un destino (<strong>wohin?</strong>) llevan <strong>acusativo</strong>: <em>Ich setze Sie an die Bettkante.</em> Si se describe una posición (<strong>wo?</strong>) llevan <strong>dativo</strong>: <em>Sie sitzen an der Bettkante.</em> Los verbos van en pares: <em>setzen, legen, stellen</em> indican el movimiento y, con la preposición que marca el destino, llevan acusativo; <em>sitzen, liegen, stehen</em> indican la posición y llevan dativo. Contracciones frecuentes: <em>an das → ans</em>, <em>in das → ins</em>, <em>an dem → am</em>, <em>in dem → im</em>."
      },
      {
        contrast: "Para quien habla español los términos técnicos son transparentes: <em>Dekubitus</em> es la úlcera por decúbito (no la postura: en español «decúbito» es la posición del cuerpo), <em>Kontraktur</em> la contractura, <em>Mobilisation</em> la movilización. En España y en Latinoamérica muchos pacientes también dicen «úlcera por presión» o «escara». El paciente alemán, en cambio, suele decir <em>Druckgeschwür</em> (literalmente «úlcera por presión») o usa el verbo <em>sich wundliegen</em>: <em>Ich habe mich wundgelegen.</em> Para la contractura dice <em>Gelenkversteifung</em> o simplemente <em>Das Knie wird steif.</em> Y el paciente rara vez dice <em>Mobilisation</em> o <em>Lagerung</em>: dice <em>aufstehen</em>, <em>sich hinsetzen</em>, <em>sich umdrehen</em>. Otra diferencia: el español distingue «en» sin marcar si hay movimiento («lo siento en la silla», «está sentado en la silla»); el alemán lo marca con el caso, y por eso tienes que elegir cada vez entre <em>in den</em> e <em>im</em>."
      },
      {
        trap: "<em>Die Lagerung</em> en planta es el posicionamiento del paciente, pero en el alemán de todos los días es el almacenamiento de mercancías: no la uses con el paciente, que se sentiría tratado como un paquete. Di mejor <em>Ich helfe Ihnen, sich auf die Seite zu drehen.</em> No confundas <em>setzen</em> y <em>sitzen</em>: <em>Ich sitze Sie</em> no existe. Y <em>die Kante</em> es el borde, nada que ver con «cantar» ni con «canto»."
      },
      {
        tip: "Para elegir el caso pregúntate si el paciente se mueve hacia un sitio o si ya está allí: <em>wohin?</em> o <em>wo?</em> En la práctica, casi siempre que hablas de lo que vas a hacer usas <em>setzen, legen, stellen</em> con acusativo; cuando describes cómo está colocado usas <em>sitzen, liegen, stehen</em> con dativo."
      }
    ],
    grammar: {
      title: "Movimiento y posición",
      note: "<b>Wohin?</b> Destino del movimiento + <b>acusativo</b>. <b>Wo?</b> Posición, o movimiento dentro de un lugar, + <b>dativo</b>. La preposición es la misma, cambia el caso.",
      table: {
        head: ["wohin? (acusativo)", "wo? (dativo)"],
        rows: [
          ["Ich setze Sie an die Bettkante.", "Sie sitzen an der Bettkante."],
          ["Wir legen Sie auf die Seite.", "Sie liegen auf der Seite."],
          ["Ich stelle den Rollator neben das Bett.", "Der Rollator steht neben dem Bett."],
          ["Ich setze Sie in den Rollstuhl.", "Sie sitzen im Rollstuhl."]
        ]
      },
      examples: [
        { tr: "Ahora lo siento en el borde de la cama.", note: "setzen + an die: movimiento, acusativo" },
        { tr: "Ahora está sentado en el borde de la cama.", note: "sitzen + an der: posición, dativo" },
        { tr: "Lo ponemos de lado.", note: "legen + auf die: acusativo" },
        { tr: "Ahora está cómodo de lado.", note: "liegen + auf der: dativo" },
        { tr: "Pongo el andador junto a la cama.", note: "stellen + neben das: acusativo" },
        { tr: "El andador está junto a la cama.", note: "stehen + neben dem: dativo" }
      ]
    },
    vocab: [
      "la movilización (término técnico)",
      "movilizar",
      "el posicionamiento del paciente (término técnico)",
      "cambiar de posición al paciente",
      "el borde de la cama",
      "la silla de ruedas",
      "el andador con ruedas, el rollator",
      "la almohada",
      "la úlcera por decúbito (término técnico)",
      "la úlcera por presión, la escara (palabra del paciente)",
      "la contractura (término técnico)",
      "la rigidez de la articulación (palabra del paciente)"
    ],
    dialogue: [
      "Señor Brandt, hoy lo vamos a sentar por primera vez en el borde de la cama. ¿Le parece bien?",
      "Sí, pero me da un poco de miedo.",
      "Es completamente normal. Me ayuda mi compañero. Primero gírese de lado.",
      "¿Así?",
      "Exacto. Ahora ponemos sus pies en el suelo, y usted se incorpora despacio.",
      "Me mareo un poco.",
      "Entonces quédese sentado tranquilo en el borde de la cama por ahora. Estamos aquí con usted.",
      "Ya estoy mejor.",
      "Bien. La silla de ruedas está junto a la cama. ¿Quiere pasar hoy también a la silla de ruedas?"
    ],
    culture: {
      title: "Una mirada alemana: el Rollator y la Kinästhetik",
      text: "<p>En las calles alemanas el <i>Rollator</i>, el andador con ruedas, frenos y asiento, forma parte del paisaje diario, y muchos pacientes mayores llegan al hospital con el suyo. Pregunta siempre dónde lo quieren tener: para muchos es la condición para levantarse solos.</p><p>En la formación de muchas enfermeras alemanas aparece la <i>Kinästhetik</i>, un enfoque del movimiento que aprovecha las capacidades del paciente en lugar de levantarlo a peso. Lo oirás nombrar en planta: la idea de fondo, que el paciente haga todo lo que pueda, es la misma de la lección 4.</p>"
    },
    exercises: [
      {
        q: "Quieres decir al paciente: «Ahora lo siento en el borde de la cama». ¿Qué frase es correcta?",
        opts: [
          "Ich setze Sie jetzt an der Bettkante.",
          "Ich setze Sie jetzt an die Bettkante.",
          "Ich sitze Sie jetzt an die Bettkante."
        ],
        why: "<i>setzen</i> indica un movimiento hacia un destino (<i>wohin?</i>), así que <i>an</i> rige acusativo: <b>an die</b> Bettkante. <i>sitzen</i> no lleva complemento."
      },
      {
        q: "Completa: «Der Rollator steht neben ___ Bett.»",
        hint: "wo? das Bett en dativo",
        why: "<b>dem</b>: <i>stehen</i> describe una posición (<i>wo?</i>), así que <i>neben</i> rige dativo, y <i>das Bett</i> en dativo es <i>dem Bett</i>."
      },
      {
        q: "Completa con el artículo correcto.",
        tr: "Lo ponemos de lado. Ahora está cómodo de lado.",
        why: "<i>Wir legen Sie auf die Seite</i>: movimiento, acusativo. <i>Jetzt liegen Sie bequem auf der Seite</i>: posición, dativo."
      },
      {
        q: "¿Qué frases son correctas?",
        opts: [
          "Sie sitzen jetzt an der Bettkante.",
          "Ich stelle den Rollator neben dem Bett.",
          "Wir legen Sie auf die Seite.",
          "Der Rollstuhl steht neben dem Bett.",
          "Ich setze Sie in dem Rollstuhl."
        ],
        why: "<i>stellen</i> y <i>setzen</i> indican movimiento y llevan acusativo: <i>neben das Bett</i>, <i>in den Rollstuhl</i>. <i>sitzen</i> y <i>stehen</i> indican posición y llevan dativo."
      },
      {
        q: "Elige el artículo determinado correcto para cada sustantivo.",
        items: ["borde de la cama", "silla de ruedas", "andador", "almohada", "úlcera por presión", "posicionamiento"]
      },
      {
        q: "Relaciona el verbo de movimiento (wohin?) con el verbo de posición (wo?).",
        pairs: ["sitzen", "liegen", "stehen"]
      },
      {
        q: "Ordena las palabras.",
        tr: "La silla de ruedas está junto a la cama.",
        why: "<i>Der Rollstuhl steht neben dem Bett.</i> <i>stehen</i> describe la posición: <i>neben</i> con dativo."
      },
      {
        q: "Traduce: «Lo siento en la silla de ruedas.»",
        why: "<i>Ich setze Sie in den Rollstuhl.</i> En alemán uno se sienta «dentro» de la silla de ruedas, con <i>in</i>, y hay movimiento: acusativo, <i>in den</i>."
      },
      {
        q: "El médico ha escrito «Dekubitus». Completa para el paciente: «Wir lagern Sie um, damit kein ___ entsteht.»",
        hint: "Druck + Geschwür",
        why: "<b>Druckgeschwür</b>, neutro como <i>das Geschwür</i>. Muchos pacientes dicen también <i>sich wundliegen</i>."
      },
      {
        q: "El paciente quiere levantarse.",
        setting: "Ayudas al señor Brandt en su primera movilización.",
        lines: [
          { tr: "Hoy me gustaría levantarme." },
          { tr: "Responde que primero lo sentáis en el borde de la cama.", answerTr: "Bien. Primero lo sentamos en el borde de la cama." },
          { tr: "Me mareo un poco." },
          { tr: "Responde que entonces por ahora se queda sentado en el borde de la cama.", answerTr: "Entonces quédese sentado en el borde de la cama por ahora." },
          { tr: "¿Dónde está mi andador?" },
          { tr: "Responde que está junto a la cama.", answerTr: "Está junto a la cama." }
        ]
      },
      {
        tr: "La silla de ruedas está junto a la cama. ¿Quiere pasar hoy también a la silla de ruedas?",
        why: "En <i>Rollstuhl</i> la <b>st</b> al principio de <i>Stuhl</i> se pronuncia [ʃt], también dentro del compuesto; en <i>steht</i> la <b>h</b> alarga la <b>e</b>; en <i>neben</i> la primera <b>e</b> es larga."
      },
      {
        tr: "Ahora lo siento en el borde de la cama.",
        why: "En <i>setze</i> la <b>s</b> inicial es sonora [z] y la <b>tz</b> es [ts]; en <i>jetzt</i> la <b>j</b> suena como la «y» de «yo», nunca como la jota española; en <i>Bettkante</i> el acento cae en <b>Bett</b>."
      }
    ]
  },
  "lesson:pfl-u03-l3": {
    theme: "Comidas y eliminación",
    title: "Comer, beber, eliminar",
    objectives: [
      "ofrecer ayuda durante las comidas y preguntar si el paciente traga bien",
      "usar los modales con el paciente: möchten, können, müssen, dürfen, sollen",
      "distinguir müssen nicht (no hace falta) de dürfen nicht (no se debe)",
      "hablar de micción, deposiciones e incontinencia con palabras respetuosas"
    ],
    theory: [
      {
        h: "Preguntas que hacen sentir cómodo",
        p: "Las comidas y la eliminación son momentos en los que el paciente depende de otros, y las palabras cuentan. Se ofrece, no se impone: <em>Möchten Sie etwas trinken? Soll ich Ihnen das Fleisch klein schneiden? Darf ich Ihnen helfen?</em> Se pregunta de forma sencilla y adulta: <em>Müssen Sie zur Toilette? Konnten Sie Wasser lassen? Wann hatten Sie zuletzt Stuhlgang?</em> Si el paciente dice que a menudo se atraganta (<em>Ich verschlucke mich oft</em>), se le agradece y se comunica a la médica: <em>Das gebe ich an die Ärztin weiter.</em>"
      },
      {
        h: "Los modales con el paciente",
        p: "Cada modal tiene su función. <strong>möchten</strong> ofrece (<em>Möchten Sie am Tisch essen?</em>); <strong>können</strong> pregunta por una capacidad (<em>Können Sie gut schlucken?</em>); <strong>müssen</strong> pregunta por una necesidad (<em>Müssen Sie zur Toilette?</em>); <strong>dürfen</strong> pide permiso (<em>Darf ich Ihnen helfen?</em>); <strong>sollen</strong> pregunta qué quiere el otro que hagas (<em>Soll ich das Fenster öffnen?</em>). En la pregunta de sí o no el modal abre la frase y el infinitivo va al final. <em>wollen</em> es correcto, pero dirigido al paciente suena brusco: mejor <em>möchten</em>."
      },
      {
        contrast: "Los términos técnicos de esta lección son transparentes para quien habla español: <em>Dysphagie</em> es la disfagia, <em>Miktion</em> la micción, <em>Defäkation</em> la defecación, <em>Inkontinenz</em> la incontinencia. En alemán siguen siendo palabras de relevo y de documentación. Con el paciente se dice <em>Schluckstörung</em> o <em>sich verschlucken</em>, <em>Wasser lassen</em>, <em>Stuhlgang</em>. Para la incontinencia urinaria muchos pacientes usan <em>Blasenschwäche</em> («debilidad de vejiga»), que solo se refiere a la vejiga: para las heces no hay un equivalente amable, y se pregunta con una frase sencilla. Evita los diminutivos cariñosos que a veces se oyen en planta («¿ha hecho pipí?», «¿quiere un poquito de agua, abuelo?»): en alemán suenan infantiles, y con un adulto el registro se mantiene adulto."
      },
      {
        trap: "El falso amigo más peligroso de esta lección: <em>Sie müssen nicht</em> significa «no hace falta que», mientras que «no debe» en el sentido de prohibición es <em>Sie dürfen nicht</em>. <em>Sie müssen sich nicht beeilen</em> tranquiliza; <em>Sie dürfen sich nicht beeilen</em> suena a orden. <em>Der Stuhl</em> es la silla, pero en planta también son las heces: <em>Stuhlgang</em>, <em>Stuhlprobe</em>. Y <em>die Windel</em> es el pañal de los bebés: con un adulto se dice <em>Einlage</em> o <em>Inkontinenzeinlage</em>, igual que en español se habla de «absorbente» y no de «pañal»."
      },
      {
        tip: "Cuando preguntes por la eliminación, baja la voz y comprueba que nadie más escucha: <em>Darf ich Sie kurz etwas Persönliches fragen?</em> La pregunta es la misma, pero el paciente responde con más ganas."
      }
    ],
    grammar: {
      title: "Un modal para cada intención",
      note: "El modal conjugado va en <b>primera</b> posición en la pregunta de sí o no, el infinitivo <b>al final</b>. <b>müssen nicht</b> = no hace falta; <b>dürfen nicht</b> = está prohibido.",
      table: {
        head: ["modal", "con el paciente", "para qué sirve"],
        rows: [
          ["möchten", "Möchten Sie etwas trinken?", "ofrecer"],
          ["können", "Können Sie gut schlucken?", "preguntar por una capacidad"],
          ["müssen", "Müssen Sie zur Toilette?", "preguntar por una necesidad"],
          ["dürfen", "Darf ich Ihnen beim Essen helfen?", "pedir permiso"],
          ["sollen", "Soll ich Ihnen das Fleisch klein schneiden?", "preguntar qué quiere el otro"],
          ["müssen nicht", "Sie müssen sich nicht beeilen.", "no hace falta"]
        ]
      },
      examples: [
        { tr: "¿Quiere beber algo?", note: "möchten: la forma más cortés para ofrecer" },
        { tr: "¿Traga bien?", note: "können: capacidad" },
        { tr: "¿Necesita ir al baño?", note: "müssen: necesidad; el verbo de movimiento se puede omitir" },
        { tr: "¿Puedo ayudarle a comer?", note: "dürfen: pedir permiso antes de intervenir" },
        { tr: "¿Quiere que le corte la carne en trocitos?", note: "sollen: «¿debo...?», es decir, «¿quiere que...?»" },
        { tr: "No hace falta que se dé prisa.", note: "müssen nicht: no hace falta, no es una prohibición" }
      ]
    },
    vocab: [
      "la comida",
      "tragar, deglutir",
      "atragantarse (ich verschlucke mich: me atraganto)",
      "la disfagia (término técnico)",
      "el problema para tragar (palabra del paciente)",
      "la micción (término técnico)",
      "orinar (Wasser lassen: orinar, palabra del paciente)",
      "la defecación (término técnico)",
      "la deposición, las heces (palabra del paciente)",
      "la incontinencia (término técnico)",
      "la incontinencia urinaria, la vejiga débil (palabra del paciente)",
      "el absorbente para incontinencia"
    ],
    dialogue: [
      "Señora Keller, ha llegado la comida. ¿Quiere comer en la mesa o en la cama?",
      "En la mesa, por favor.",
      "¿Quiere que le corte la carne en trocitos?",
      "Sí, es usted muy amable. Últimamente me atraganto a menudo.",
      "Gracias por decírmelo. Se lo comunico a la médica. ¿Quiere beber algo?",
      "Un vaso de agua, por favor. Y después tengo que ir al baño.",
      "No hay problema. Toque el timbre y la acompaño. No hace falta que se dé prisa."
    ],
    culture: {
      title: "Una mirada alemana: las comidas en planta",
      text: "<p>En muchos hospitales y residencias alemanes la cena llega pronto, a menudo entre las 17 y las 18, y es una comida fría: pan, queso, embutido. Se llama <i>Abendbrot</i>, literalmente «pan de la noche». La comida caliente es al mediodía. Los pacientes suelen elegir el menú de los días siguientes en una hoja, y quien tiene dificultades para tragar puede recibir, por indicación, texturas adaptadas.</p><p>Para alguien acostumbrado a cenar a las nueve o las diez, como en España, la hora y la cena fría pueden ser una sorpresa, también para muchos pacientes: preguntar qué comen a gusto forma parte de la anamnesis, no es una cortesía de más.</p>"
    },
    exercises: [
      {
        q: "Quieres preguntar al paciente si necesita ir al baño. ¿Qué frase es correcta?",
        opts: ["Sie zur Toilette müssen?", "Müssen Sie zur Toilette?", "Müssen zur Toilette Sie?"],
        why: "En la pregunta de sí o no el modal <b>müssen</b> abre la frase y el sujeto <i>Sie</i> lo sigue enseguida."
      },
      {
        tr: "El presente de dürfen, todas las personas.",
        why: "<i>Darf, darfst, darf, dürfen, dürft, dürfen</i>: en singular la vocal es <b>a</b>, y la primera y la tercera persona no tienen desinencia, como en los demás modales."
      },
      {
        q: "Completa: «___ Sie gut schlucken?»",
        hint: "modal de la capacidad, Sie",
        why: "<b>Können</b>: se pregunta por una capacidad. El modal abre la pregunta de sí o no y el infinitivo <i>schlucken</i> va al final."
      },
      {
        q: "Completa con los modales.",
        tr: "¿Puedo ayudarle a comer? No hace falta que se dé prisa.",
        why: "En la primera frase valen <i>Darf</i>, <i>Kann</i> y <i>Soll ich</i>: todas ofrecen ayuda. En la segunda hace falta <i>müssen</i> con <i>nicht</i>: «no hace falta». <i>Sie dürfen sich nicht beeilen</i> sería una prohibición."
      },
      {
        q: "¿Qué frases son correctas?",
        opts: [
          "Möchten Sie etwas trinken?",
          "Können Sie gut schlucken?",
          "Müssen Sie zur Toilette gehen?",
          "Wollen Sie zu trinken etwas?",
          "Sie müssen nicht sich beeilen."
        ],
        why: "El modal conjugado abre la pregunta y el infinitivo va al final. En la última el reflexivo <i>sich</i> va antes de <i>nicht</i>: <i>Sie müssen sich nicht beeilen</i>."
      },
      {
        q: "Relaciona cada término técnico con la palabra que usa el paciente.",
        pairs: ["die Schluckstörung", "das Wasserlassen", "der Stuhlgang", "die Blasenschwäche"]
      },
      {
        q: "Elige el artículo determinado correcto para cada sustantivo.",
        items: ["comida", "problema para tragar", "orinar", "deposición", "vejiga débil", "absorbente para incontinencia"]
      },
      {
        q: "Ordena las palabras.",
        tr: "¿Quiere comer en la mesa?",
        why: "<i>Möchten Sie am Tisch essen?</i> El modal abre la pregunta, el infinitivo <i>essen</i> va al final; <i>am</i> es <i>an dem</i>, porque es una posición."
      },
      {
        q: "Traduce (al paciente): «¿Necesita ir al baño?»",
        why: "<i>Müssen Sie zur Toilette?</i> o bien <i>auf die Toilette</i>; el verbo <i>gehen</i> se puede añadir o dejar sobrentendido."
      },
      {
        q: "Durante la comida.",
        setting: "Ayudas a la señora Keller durante la comida.",
        lines: [
          { tr: "Tengo sed." },
          { tr: "Pregunta si quiere un vaso de agua.", answerTr: "¿Quiere un vaso de agua?" },
          { tr: "También tengo que ir al baño, pero soy tan lenta." },
          { tr: "Responde que no es un problema y que no hace falta que se dé prisa.", answerTr: "No hay problema, no hace falta que se dé prisa." },
          { tr: "Cuando bebo, me atraganto a menudo." },
          { tr: "Dale las gracias y di que se lo comunicas a la médica.", answerTr: "Gracias por decírmelo. Se lo comunico a la médica." }
        ]
      },
      {
        tr: "Un vaso de agua, por favor. Y después tengo que ir al baño.",
        why: "En <i>Toilette</i>, palabra de origen francés, el acento cae en <b>let</b> y <b>oi</b> se pronuncia [o̯a]; en <i>Wasser</i> la <b>w</b> es [v], con los dientes sobre el labio, no como la «b» española; en <i>danach</i> la <b>ch</b> tras <b>a</b> es [x], parecida a la jota."
      },
      {
        tr: "¿Puedo ayudarle a comer?",
        why: "En <i>Darf</i> la <b>r</b> tras la vocal apenas se oye; en <i>Ihnen</i> la <b>h</b> no suena y alarga la <b>i</b>; en <i>helfen</i> la <b>h</b> inicial se aspira, como una jota muy suave."
      }
    ]
  },
  "lesson:pfl-u03-l4": {
    theme: "Autonomía",
    title: "¿Solo o con ayuda?",
    objectives: [
      "preguntar y describir qué puede hacer solo el paciente",
      "usar el infinitivo con zu después de versuchen, helfen, es ist wichtig, es fällt mir schwer",
      "recordar que después de los modales el infinitivo no lleva zu",
      "reconocer Thrombose y Prophylaxe y decirlos con palabras del paciente"
    ],
    theory: [
      {
        h: "Hacer con el paciente, no en su lugar",
        p: "En los cuidados alemanes se habla de <strong>aktivierende Pflege</strong>: el paciente hace por sí mismo todo lo que puede, y la enfermera ayuda donde hace falta. Por eso la pregunta clave es <em>Was schaffen Sie allein?</em> y la invitación es <em>Versuchen Sie bitte, das Hemd selbst anzuziehen.</em> Si el paciente pide que se haga más deprisa, se explica el porqué: <em>Es ist wichtig, möglichst viel selbst zu machen. So bleiben Sie selbstständig.</em>"
      },
      {
        h: "El infinitivo con zu",
        p: "Después de muchos verbos y expresiones el infinitivo lleva <strong>zu</strong> y va al final, normalmente tras una coma: <em>Versuchen Sie, allein aufzustehen. Es ist wichtig, sich zu bewegen. Es fällt mir schwer, die Strümpfe anzuziehen.</em> En los verbos separables <em>zu</em> va <strong>entre</strong> el prefijo y el verbo: <em>aufstehen → aufzustehen</em>, <em>anziehen → anzuziehen</em>. Después de los <strong>modales</strong>, en cambio, el infinitivo nunca lleva <em>zu</em>: <em>Sie können allein aufstehen</em>. <em>brauchen</em> con negación funciona como <em>müssen nicht</em>, pero lleva <em>zu</em>: <em>Sie brauchen sich nicht zu beeilen.</em>"
      },
      {
        contrast: "Aquí el cuadro de los dos registros cambia: <em>Thrombose</em> es una palabra que muchos pacientes alemanes conocen y usan, como en español «trombosis». La palabra del paciente <em>Blutgerinnsel</em> indica el coágulo, es decir, el trombo, no la enfermedad: no son sinónimos exactos, y en el relevo se dice <em>Thrombose</em>. <em>Prophylaxe</em> es transparente para ti («profilaxis»), mientras que el paciente dice <em>Vorbeugung</em> o usa el verbo <em>vorbeugen</em>. Y las medias que en la documentación son <em>Kompressionsstrümpfe</em> muchos pacientes las llaman <em>Thrombosestrümpfe</em>. El infinitivo con <em>zu</em> corresponde a menudo al español «a» o «de» delante del infinitivo: «intente vestirse» no lleva nada, pero «le ayudo a levantarse» sí, y el alemán dice en ambos casos <em>zu</em>: <em>Versuchen Sie, sich anzuziehen</em>, <em>Ich helfe Ihnen, aufzustehen</em>. Fíjate también en el reflexivo: el español lo pega al infinitivo («levantarse»), el alemán lo pone delante de <em>zu</em> (<em>sich zu bewegen</em>)."
      },
      {
        trap: "<em>selbstständig</em> en planta significa «autónomo» para las actividades diarias, pero en el mundo laboral <em>selbstständig sein</em> es ser trabajador autónomo, por cuenta propia. El verbo <em>vorbeugen</em> tiene dos sentidos: <em>einer Thrombose vorbeugen</em> es prevenirla, mientras que <em>Beugen Sie sich bitte vor</em> significa «inclínese hacia delante». Y <em>der Strumpf</em> es la media; los calcetines normales son <em>die Socken</em>. Ojo con el plural: <em>die Medien</em> son los medios de comunicación, nunca las medias."
      },
      {
        tip: "Antes de ayudar pregunta siempre <em>Was schaffen Sie allein?</em> y deja tiempo para intentarlo. El tiempo que inviertes hoy en esperar es autonomía que gana el paciente, y la frase <em>Sie brauchen sich nicht zu beeilen</em> a menudo basta para que recupere un gesto."
      }
    ],
    grammar: {
      title: "¿zu o nada?",
      note: "Después de un <b>modal</b> el infinitivo va <b>sin zu</b>. Después de <b>versuchen</b>, <b>helfen</b>, <b>es ist wichtig</b>, <b>es fällt mir schwer</b> y <b>nicht brauchen</b> el infinitivo lleva <b>zu</b>, en los separables entre prefijo y verbo.",
      table: {
        head: ["qué rige el infinitivo", "ejemplo", "¿zu?"],
        rows: [
          ["können, müssen, dürfen", "Sie können sich selbst waschen.", "no"],
          ["versuchen", "Versuchen Sie, sich selbst anzuziehen.", "sí"],
          ["es fällt mir schwer", "Es fällt mir schwer, allein aufzustehen.", "sí"],
          ["es ist wichtig", "Es ist wichtig, sich regelmäßig zu bewegen.", "sí"],
          ["nicht brauchen", "Sie brauchen sich nicht zu beeilen.", "sí"]
        ]
      },
      examples: [
        { tr: "Intente vestirse usted solo, por favor.", note: "anziehen es separable: anzuziehen" },
        { tr: "Me cuesta levantarme solo.", note: "es fällt mir schwer + zu" },
        { tr: "Le ayudo a ponerse las medias de compresión.", note: "helfen + dativo + zu" },
        { tr: "Es importante moverse con regularidad.", note: "el reflexivo sich va antes de zu" },
        { tr: "Los dientes puede lavárselos usted sola.", note: "después del modal können: sin zu" },
        { tr: "No hace falta que se dé prisa.", note: "nicht brauchen + zu = müssen nicht" }
      ]
    },
    vocab: [
      "autónomo, solo",
      "la autonomía",
      "la ayuda",
      "el apoyo, la ayuda",
      "intentar, probar",
      "conseguir, lograr",
      "levantarse",
      "la trombosis",
      "el coágulo de sangre, el trombo (palabra del paciente)",
      "la profilaxis (término técnico)",
      "la prevención (palabra del paciente)",
      "la media de compresión"
    ],
    dialogue: [
      "Señor Brandt, ¿qué puede hacer ya solo hoy?",
      "Lavarme puedo solo. Pero me cuesta ponerme las medias.",
      "Con eso le ayudo con mucho gusto. La camisa intente ponérsela usted solo, por favor.",
      "¿Por qué no lo hace usted por mí? Es más rápido.",
      "Es importante hacer usted mismo todo lo posible. Así sigue siendo autónomo.",
      "Bueno, está bien. ¿Y hoy tengo que volver a caminar?",
      "Sí, vamos juntos hasta la ventana. El movimiento es una buena prevención contra la trombosis."
    ],
    culture: {
      title: "Una mirada alemana: aktivierende Pflege",
      text: "<p>La idea de que los cuidados deben conservar y entrenar las capacidades del paciente, en lugar de sustituirlas, es central en la formación de enfermería alemana y tiene un nombre: <i>aktivierende Pflege</i>. En la práctica significa dejarle al paciente el peine, la manopla y el tiempo para abrocharse la camisa, aunque hacerlo por él sería más rápido.</p><p>En los documentos verás a menudo la palabra <i>Ressourcen</i>: son las capacidades que el paciente conserva y que el plan de cuidados quiere mantener. Volverás a ella en la unidad sobre el relevo y el informe de enfermería.</p>"
    },
    exercises: [
      {
        q: "Quieres decir al paciente: «Intente vestirse usted solo». ¿Qué frase es correcta?",
        opts: [
          "Versuchen Sie, sich selbst anziehen.",
          "Versuchen Sie, sich selbst anzuziehen.",
          "Versuchen Sie, sich selbst zu anziehen."
        ],
        why: "Después de <i>versuchen</i> el infinitivo lleva <b>zu</b>, y en los verbos separables <i>zu</i> va entre prefijo y verbo: <b>anzuziehen</b>, en una sola palabra."
      },
      {
        q: "Completa: «Es fällt mir schwer, allein ___.»",
        hint: "aufstehen con zu",
        why: "<b>aufzustehen</b>: <i>aufstehen</i> es separable, así que <i>zu</i> entra entre <i>auf</i> y <i>stehen</i>."
      },
      {
        q: "Completa: en la primera frase hay un modal, en la segunda no.",
        tr: "Usted puede lavarse sola. Intente, por favor, vestirse también sola.",
        why: "<i>Sie können sich selbst waschen</i>: después del modal <i>können</i> el infinitivo va sin <i>zu</i>. <i>Versuchen Sie bitte, sich auch selbst anzuziehen</i>: después de <i>versuchen</i> hace falta <i>zu</i>."
      },
      {
        q: "¿Qué frases son correctas?",
        opts: [
          "Ich versuche, allein zu gehen.",
          "Ich kann allein zu gehen.",
          "Es ist wichtig, sich zu bewegen.",
          "Sie müssen nicht sofort aufzustehen.",
          "Ich helfe Ihnen, aufzustehen."
        ],
        why: "<i>versuchen</i>, <i>es ist wichtig</i> y <i>helfen</i> llevan el infinitivo con <i>zu</i>. Después de los modales <i>können</i> y <i>müssen</i> el infinitivo va sin <i>zu</i>: <i>Ich kann allein gehen</i>, <i>Sie müssen nicht sofort aufstehen</i>."
      },
      {
        q: "Relaciona cada término técnico con la palabra que usa el paciente.",
        pairs: ["der Gefäßverschluss durch ein Blutgerinnsel", "die Vorbeugung", "das Druckgeschwür", "die Gelenkversteifung"]
      },
      {
        q: "Elige el artículo determinado correcto para cada sustantivo.",
        items: ["trombosis", "coágulo de sangre", "profilaxis", "prevención", "media de compresión", "autonomía"]
      },
      {
        q: "Ordena las palabras.",
        tr: "Es importante moverse con regularidad.",
        why: "<i>Es ist wichtig, sich regelmäßig zu bewegen.</i> Tras la coma el infinitivo con <i>zu</i> va al final; <i>sich</i> y el adverbio van delante."
      },
      {
        q: "Traduce (lo dice el paciente): «Puedo hacerlo solo.»",
        why: "<i>Das schaffe ich allein</i> o bien <i>Ich schaffe das allein</i>. <i>schaffen</i> es el verbo típico para «conseguirlo, poder con algo»; <i>alleine</i> es la variante hablada."
      },
      {
        tr: "El presente de können, todas las personas.",
        why: "<i>Kann, kannst, kann, können, könnt, können</i>: en singular la vocal es <b>a</b>, sin Umlaut, y la primera y la tercera persona no tienen desinencia."
      },
      {
        q: "El paciente quiere ir deprisa.",
        setting: "El señor Brandt querría que lo vistieras tú.",
        lines: [
          { tr: "¿No puede vestirme usted y ya está? Es más rápido." },
          { tr: "Responde que lo ayudas con gusto, pero que primero intente ponerse la camisa él solo.", answerTr: "Le ayudo con mucho gusto, pero primero intente ponerse la camisa usted solo." },
          { tr: "Pero con las medias no puedo." },
          { tr: "Responde que no es un problema y que con eso lo ayudas tú.", answerTr: "No hay problema, con eso le ayudo yo." },
          { tr: "¿Hoy tengo que volver a caminar?" },
          { tr: "Responde que sí: es importante moverse todos los días.", answerTr: "Sí, es importante moverse todos los días." }
        ]
      },
      {
        tr: "Es importante hacer usted mismo todo lo posible. Así sigue siendo autónomo.",
        why: "En <i>wichtig</i> la <b>ch</b> y la <b>g</b> final se pronuncian las dos [ç]; en <i>möglichst</i> la <b>ö</b> es larga; en <i>selbstständig</i> la <b>st</b> de <i>ständig</i> es [ʃt]."
      },
      {
        tr: "Intente vestirse usted solo, por favor.",
        why: "En <i>Versuchen</i> la <b>v</b> se pronuncia [f] y el acento cae en <b>su</b>; en <i>anzuziehen</i> las dos <b>z</b> son [ts] y la <b>ie</b> es larga, con la <b>h</b> muda."
      }
    ]
  },
  "lesson:pfl-u03-test": {
    theme: "Evaluación",
    title: "Test: Cuidados básicos y movilización",
    objectives: [
      "comprobar los reflexivos del aseo, wohin? y wo? con las preposiciones, los modales con el paciente y los pares Fachsprache / Laiensprache"
    ],
    theory: [
      {
        p: "Once preguntas sobre toda la unidad. Se aprueba con el 70%. Las situaciones clínicas son ejemplos didácticos: cómo y con qué ayudas se asiste a un paciente lo deciden la valoración de enfermería y el protocolo del centro."
      }
    ],
    exercises: [
      {
        q: "El paciente está sentado en el borde de la cama. ¿Cómo lo describes?",
        opts: ["Er sitzt an die Bettkante.", "Er sitzt an der Bettkante.", "Er setzt an der Bettkante."],
        why: "<i>sitzen</i> describe una posición (<i>wo?</i>), así que <i>an</i> rige dativo: <b>an der</b> Bettkante."
      },
      {
        q: "Completa: «Ich wasche ___ die Hände.»",
        hint: "ich, con un complemento",
        why: "<b>mir</b>: hay un complemento, <i>die Hände</i>, así que el reflexivo pasa al dativo."
      },
      {
        q: "Completa: «Ich stelle den Rollator neben ___ Bett.»",
        hint: "wohin? das Bett en acusativo",
        why: "<b>das</b>: <i>stellen</i> indica un movimiento hacia un destino, así que <i>neben</i> rige acusativo."
      },
      {
        tr: "El presente de sich anziehen, todas las personas.",
        why: "<i>Ziehe mich an, ziehst dich an, zieht sich an, ziehen uns an, zieht euch an, ziehen sich an</i>: el reflexivo sigue al verbo y el prefijo <i>an</i> va al final."
      },
      {
        q: "Relaciona cada término técnico con la palabra que usa el paciente.",
        pairs: ["die Schluckstörung", "die Blasenschwäche", "das Druckgeschwür", "die Vorbeugung"]
      },
      {
        q: "¿Qué frases son correctas en una conversación con un paciente?",
        opts: [
          "Sie müssen sich nicht beeilen.",
          "Wir legen Sie auf der Seite.",
          "Können Sie gut schlucken?",
          "Es fällt mir schwer, allein aufzustehen.",
          "Ich kann allein aufzustehen."
        ],
        why: "<i>legen</i> indica movimiento y lleva acusativo: <i>auf die Seite</i>. Después del modal <i>können</i> el infinitivo va sin <i>zu</i>: <i>Ich kann allein aufstehen</i>."
      },
      {
        q: "Completa la frase.",
        tr: "Ahora lo ponemos de lado. ¿Está cómodo?",
        why: "<i>Wir legen Sie jetzt auf die Seite</i>: movimiento, acusativo. <i>Liegen Sie bequem?</i>: pregunta de sí o no sobre la posición, con el verbo <i>liegen</i> en primera posición."
      },
      {
        q: "Ordena las palabras.",
        tr: "¿Puedo ayudarle a comer?",
        why: "<i>Darf ich Ihnen beim Essen helfen?</i> El modal abre la pregunta, <i>helfen</i> va al final, y la persona a la que se ayuda va en dativo, <i>Ihnen</i>."
      },
      {
        q: "Elige el artículo determinado correcto para cada sustantivo.",
        items: ["manopla de aseo", "borde de la cama", "deposición", "úlcera por presión", "coágulo de sangre", "higiene íntima"]
      },
      {
        tr: "La cara y los brazos se los lava usted. Después la sentamos en el borde de la cama.",
        why: "En <i>Gesicht</i> la <b>ch</b> es [ç]; en <i>Arme</i> la <b>r</b> apenas se oye, nada que ver con la erre española; en <i>Bettkante</i> el acento cae en <b>Bett</b>."
      },
      {
        tr: "¿Necesita ir al baño?",
        why: "En <i>Müssen</i> la <b>ü</b> es breve y redondeada, una «i» con los labios de «u»; en <i>zur</i> la <b>z</b> es [ts]; en <i>Toilette</i> el acento cae en <b>let</b>."
      }
    ]
  }
});
