/* ============================================================
   Learner-language text (es) for data/core/pfl-01.js, unit pfl-u01.
   Keys point at ids in the neutral layer; arrays merge by index,
   so their length has to match core.
   Checked by scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("es", {
  "unit:pfl-u01": {
    title: "Ingreso y anamnesis",
    grammarNote: "el Sie con el paciente · el verbo en segunda posición · el dativo con wehtun, helfen, fehlen y mir ist übel · el Perfekt para la historia clínica · compuestos y pares Fachsprache / Laiensprache"
  },
  "lesson:pfl-u01-l1": {
    theme: "En planta",
    title: "Buenos días, soy su enfermera",
    objectives: [
      "presentarse al paciente con nombre, apellido y función",
      "comprobar la identidad del paciente (nombre, fecha de nacimiento, pulsera)",
      "usar siempre el Sie con pacientes y familiares",
      "mantener el verbo conjugado en segunda posición también cuando la frase empieza con jetzt, gleich, heute"
    ],
    theory: [
      {
        h: "Presentarse en planta",
        p: "En una planta de hospital alemana una se presenta con <strong>nombre y apellido</strong> y con su función: <em>Guten Tag, mein Name ist Elena Marin. Ich bin heute Ihre Pflegefachkraft.</em> El paciente la llamará <em>Frau Marin</em> o <em>Herr ...</em>. Justo después se comprueba la identidad: <em>Wie heißen Sie, bitte? Wie ist Ihr Geburtsdatum?</em> y se revisa la pulsera identificativa, <em>das Patientenarmband</em>. La pregunta es abierta a propósito: no se pregunta «Sie sind Herr Brandt, oder?», porque un paciente desorientado dice que sí a todo."
      },
      {
        h: "El verbo en segunda posición",
        p: "En la oración principal el verbo conjugado va <strong>en segundo lugar</strong>. Si al principio pones un adverbio de tiempo, el sujeto pasa <strong>detrás</strong> del verbo: <em>Jetzt bringe ich Sie auf Ihr Zimmer. Gleich mache ich mit Ihnen das Aufnahmegespräch.</em> En la pregunta con partícula interrogativa pasa lo mismo (<em>Wie heißen Sie?</em>); en la pregunta de sí o no el verbo va en primer lugar (<em>Haben Sie noch Fragen?</em>). Con un modal, el modal va en segundo lugar y el infinitivo al final: <em>Darf ich Ihnen kurz ein paar Fragen stellen?</em>"
      },
      {
        contrast: "El español también tiene un trato formal, y <em>usted</em> se parece mucho a <em>Sie</em>. La diferencia está en cuándo se abandona. En muchos hospitales de España es habitual tutear a los pacientes, sobre todo a los mayores y con cariño («¿cómo estamos hoy, Manolo?»), y en buena parte de Latinoamérica el <em>usted</em> se mantiene, pero junto a «mi amor» o «mi reina». En Alemania no hay término medio: con pacientes y familiares se usa <strong>siempre el Sie</strong> y el apellido, aunque el paciente lleve semanas en la planta, y el <em>du</em> queda para los compañeros, si la planta lo usa. El Sie arrastra también el posesivo y el dativo: <em>Ihre Pflegefachkraft, Ihr Zimmer, Kann ich Ihnen helfen?</em>, todo con mayúscula. Otra cosa: el español omite el sujeto («Ahora lo llevo a su habitación»); el alemán lo exige siempre, y tras un adverbio inicial lo pone detrás del verbo: <em>Jetzt bringe ich Sie</em>. «Jetzt ich bringe Sie» es un error que se nota enseguida."
      },
      {
        trap: "<em>Krankenschwester</em> sigue existiendo en el habla común, pero ya no es el nombre de la profesión: desde 2020 el título es <em>Pflegefachfrau</em> / <em>Pflegefachmann</em>, y <em>Pflegefachkraft</em> es el término neutro. «Ingresar» a un paciente no se traduce con un verbo inventado: se dice <em>stationär aufnehmen</em> (<em>Wir nehmen Sie heute stationär auf</em>), y <em>die Aufnahme</em> es a la vez el ingreso y la oficina de admisión. Cuidado con <em>die Station</em>: es la planta o la unidad, no la estación. Y <em>die Ambulanz</em> en Alemania es la consulta externa del hospital, no la ambulancia, que se llama <em>der Krankenwagen</em> o <em>der Rettungswagen</em>."
      },
      {
        tip: "Antes de salir de la habitación enseña siempre el timbre: <em>Wenn Sie Hilfe brauchen, drücken Sie bitte die Klingel.</em> Es una frase que dirás decenas de veces al día: aprenderla de memoria, con el verbo al final después de <em>wenn</em>, te deja la cabeza libre para lo demás."
      }
    ],
    grammar: {
      title: "Dónde va el verbo",
      note: "En la oración principal el verbo conjugado va en <b>segunda posición</b>, sea lo que sea lo que va delante. En la pregunta de sí o no va en <b>primera</b>. Con el paciente siempre <b>Sie</b>, <b>Ihr</b>, <b>Ihnen</b>.",
      table: {
        head: ["tipo de frase", "ejemplo", "posición del verbo"],
        rows: [
          ["pregunta con W-", "Wie heißen Sie, bitte?", "2.ª, el sujeto detrás"],
          ["pregunta de sí o no", "Haben Sie noch Fragen?", "1.ª"],
          ["adverbio delante", "Jetzt bringe ich Sie auf Ihr Zimmer.", "2.ª, el sujeto después del verbo"],
          ["con un modal", "Darf ich Ihnen kurz ein paar Fragen stellen?", "modal 1.ª o 2.ª, infinitivo al final"]
        ]
      },
      examples: [
        { tr: "Buenos días, me llamo Elena Marin. Hoy soy su enfermera.", note: "nombre, apellido y función: la presentación estándar" },
        { tr: "¿Cómo se llama, por favor?", note: "pregunta abierta para comprobar la identidad" },
        { tr: "¿Cuál es su fecha de nacimiento?", note: "segunda comprobación de la identidad" },
        { tr: "Ahora lo llevo a su habitación.", note: "jetzt delante: el sujeto ich va detrás del verbo" },
        { tr: "¿Tiene alguna pregunta más?", note: "pregunta de sí o no: verbo en primera posición" },
        { tr: "¿Puedo hacerle rápidamente unas preguntas?", note: "modal dürfen, infinitivo stellen al final" }
      ]
    },
    vocab: [
      "la planta, la unidad (auf Station: en planta)",
      "la enfermera, el enfermero (término neutro)",
      "la enfermera (título profesional)",
      "el enfermero (título profesional)",
      "el paciente (die Patientin: la paciente)",
      "el ingreso, la admisión",
      "la entrevista de ingreso",
      "la habitación",
      "el timbre de llamada",
      "la pulsera identificativa",
      "ingresar, acoger (stationär aufnehmen: ingresar en planta)",
      "presentarse"
    ],
    dialogue: [
      "Buenos días, señor Brandt. Me llamo Elena Marin, hoy soy su enfermera.",
      "Buenos días, señora Marin.",
      "¿Puedo ver un momento su pulsera? ¿Cuál es su fecha de nacimiento, por favor?",
      "Nací el 12 de marzo de 1950.",
      "Gracias. Ahora lo llevo a su habitación. Esta es su cama, junto a la ventana.",
      "Muy bien, gracias.",
      "Si necesita ayuda, pulse el timbre, por favor. Enseguida hacemos juntos la entrevista de ingreso.",
      "De acuerdo."
    ],
    culture: {
      title: "Una mirada alemana: cómo se llama quien cuida",
      text: "<p>Hasta 2003 la profesión se llamaba <i>Krankenschwester</i> o <i>Krankenpfleger</i>; desde 2004 <i>Gesundheits- und Krankenpflegerin</i>. Con la reforma que entró en vigor en 2020 la formación pasó a ser generalista y el título es <i>Pflegefachfrau</i> o <i>Pflegefachmann</i>. En las plantas conviven todos estos nombres, y muchos pacientes mayores te seguirán llamando <i>Schwester</i>: no es un error que haya que corregir, pero tú preséntate con tu apellido.</p><p>A diferencia de España y de buena parte de Latinoamérica, donde enfermería es una carrera universitaria, en Alemania la formación suele ser una formación profesional de tres años, aunque también existen estudios universitarios. Junto a la enfermera trabajan la <i>Pflegehilfskraft</i> o <i>Pflegeassistenz</i>, con una formación más corta (parecida a la de técnico en cuidados auxiliares), y en la atención a mayores la <i>Altenpflegerin</i>. Quien se ha formado en el extranjero obtiene el título alemán solo tras el reconocimiento, la <i>Anerkennung</i>: hasta entonces en las ofertas de empleo se lee a menudo <i>Pflegefachkraft in Anerkennung</i>.</p>"
    },
    exercises: [
      {
        q: "Entras en la habitación de un paciente nuevo. ¿Cómo te presentas?",
        opts: [
          "Hallo, ich bin Elena, deine Krankenschwester.",
          "Guten Tag, ich bin Frau Marin, Ihre Pflegefachkraft.",
          "Guten Tag, ich bin Elena, deine Pflegefachkraft."
        ],
        why: "Con el paciente se usa el <b>Sie</b>, así que <i>Ihre</i> con mayúscula, y una se presenta con el apellido. <i>Krankenschwester</i> ya no es el título de la profesión."
      },
      {
        q: "¿Qué frases tienen el verbo en su sitio?",
        opts: [
          "Jetzt bringe ich Sie auf Ihr Zimmer.",
          "Jetzt ich bringe Sie auf Ihr Zimmer.",
          "Haben Sie noch Fragen?",
          "Gleich mache ich mit Ihnen das Aufnahmegespräch.",
          "Gleich ich mache mit Ihnen das Aufnahmegespräch."
        ],
        why: "Con <i>jetzt</i> y <i>gleich</i> delante, el verbo sigue en segunda posición y el sujeto <i>ich</i> pasa detrás: <i>bringe ich</i>, <i>mache ich</i>. En la pregunta de sí o no el verbo abre la frase."
      },
      {
        q: "Completa: «Guten Tag, ich bin heute ___ Pflegefachkraft.»",
        hint: "posesivo de Sie",
        why: "<b>Ihre</b>, con mayúscula: el posesivo del Sie de cortesía. <i>Pflegefachkraft</i> es femenino, así que <i>Ihre</i> y no <i>Ihr</i>."
      },
      {
        q: "Elige el artículo determinado correcto para cada sustantivo.",
        items: ["planta, unidad", "habitación", "timbre", "entrevista de ingreso", "pulsera identificativa", "enfermera, enfermero"]
      },
      {
        q: "Une cada palabra con su significado.",
        pairs: ["enfermera", "enfermero", "planta, unidad", "timbre de llamada"]
      },
      {
        q: "Ordena las palabras.",
        tr: "Ahora lo llevo a su habitación.",
        why: "<i>Jetzt bringe ich Sie auf Ihr Zimmer.</i> Si empiezas con <i>jetzt</i>, el verbo <i>bringe</i> va justo después y luego el sujeto <i>ich</i>, que en español ni siquiera se diría."
      },
      {
        q: "Completa la frase.",
        tr: "Si necesita ayuda, pulse el timbre, por favor.",
        why: "<i>Wenn Sie Hilfe brauchen, drücken Sie bitte die Klingel</i>: después de <i>wenn</i> el verbo <i>brauchen</i> va al final, y la principal empieza con el verbo <i>drücken</i>."
      },
      {
        q: "Traduce: «¿Puedo hacerle unas preguntas?»",
        why: "<i>Darf ich Ihnen ein paar Fragen stellen</i>: <i>Fragen stellen</i> es «hacer preguntas», y la persona a la que se las haces va en dativo, <i>Ihnen</i>, como el «le» de «hacerle». <i>Darf ich</i> es más cortés que <i>Kann ich</i>, pero las dos valen."
      },
      {
        q: "Un paciente llega a la planta.",
        setting: "Eres la enfermera de turno y recibes al señor Brandt.",
        lines: [
          { tr: "Buenos días. Me llamo Brandt, vengo para el ingreso." },
          { tr: "Responde: saluda al paciente y preséntate.", answerTr: "Buenos días, señor Brandt. Soy la señora Marin, su enfermera." },
          { tr: "¿Dónde está mi habitación?" },
          { tr: "Responde que ahora lo llevas a su habitación.", answerTr: "Ahora lo llevo a su habitación." },
          { tr: "¿Y si por la noche necesito ayuda?" },
          { tr: "Responde que entonces pulse el timbre.", answerTr: "Entonces pulse el timbre, por favor." }
        ]
      },
      {
        tr: "Buenos días, me llamo Elena Marin. Hoy soy su enfermera y ahora lo llevo a su habitación.",
        why: "En <i>Pflegefachkraft</i> la <b>pf</b> se pronuncia con las dos consonantes, y la <b>ch</b> después de <b>a</b> es [x], como la jota española; en <i>heute</i> la <b>eu</b> se lee [ɔʏ], parecido a «oi»; en <i>Zimmer</i> la <b>z</b> es [ts]."
      },
      {
        tr: "¿Puedo hacerle rápidamente unas preguntas?",
        why: "En <i>Darf</i> la <b>r</b> final apenas se oye, nunca vibrante; en <i>Ihnen</i> la <b>h</b> no suena y alarga la <b>i</b>; en <i>stellen</i> la <b>st</b> inicial es [ʃt], sin «e» de apoyo delante."
      }
    ]
  },
  "lesson:pfl-u01-l2": {
    theme: "Síntomas",
    title: "¿Dónde le duele?",
    objectives: [
      "preguntar dónde y desde cuándo le duele al paciente",
      "usar el dativo con wehtun, helfen, fehlen y con mir ist übel, mir ist schwindelig",
      "reconocer los síntomas más frecuentes dichos con palabras comunes",
      "responder a un paciente que dice que no se encuentra bien"
    ],
    theory: [
      {
        h: "Quien se encuentra mal va en dativo",
        p: "En alemán muchos síntomas se dicen con la persona en <strong>dativo</strong>: <em>Mir tut der Bauch weh</em> (me duele la barriga), <em>Mir ist übel</em> (tengo náuseas), <em>Mir ist schwindelig</em> (estoy mareado). El sujeto gramatical de <em>wehtun</em> es la parte del cuerpo: <em>der Bauch tut weh</em>, <em>die Beine tun weh</em>. Con el paciente la pregunta va siempre con el dativo de cortesía: <em>Wo tut es Ihnen weh? Ist Ihnen übel?</em>"
      },
      {
        h: "helfen y fehlen",
        p: "También <strong>helfen</strong> (ayudar) y <strong>fehlen</strong> (faltar) piden dativo: <em>Kann ich Ihnen helfen?</em>, <em>Was fehlt Ihnen?</em> La segunda es la pregunta clásica para «¿qué le pasa?», «¿qué molestias tiene?». Los pronombres en dativo que hay que saber de memoria: <em>mir, dir, ihm, ihr, uns, euch, ihnen</em> y <em>Ihnen</em> de cortesía."
      },
      {
        contrast: "En español «me duele la cabeza» ya tiene el pronombre en dativo, y eso ayuda: <em>Mir tut der Kopf weh</em> sigue el mismo esquema, con la parte del cuerpo como sujeto. Pero «tengo náuseas» y «estoy mareado» no se construyen ni con <em>haben</em> ni con <em>sein</em> + persona como sujeto: <em>Mir ist übel</em>, <em>Mir ist schwindelig</em>, con <em>sein</em> y el dativo. «Ich habe übel» o «Ich bin schwindelig» no se dicen. Ojo también con <em>helfen</em>: en español se ayuda «a alguien» con complemento directo («lo ayudo»), en alemán con dativo (<em>Ich helfe Ihnen</em>). Y el español dice «dolor de cabeza» en singular; el paciente alemán dice casi siempre el plural: <em>Ich habe Kopfschmerzen</em>."
      },
      {
        trap: "<em>Wo tut es Sie weh?</em> es incorrecto: con <em>wehtun</em> la persona va en dativo, <em>Ihnen</em>. No confundas <em>Mir ist übel</em> con un malestar general: <em>Mir ist schlecht</em> también significa casi siempre náuseas en el habla, no «me encuentro mal» en general. Si el paciente lo dice, pregunta: <em>Ist Ihnen übel? Müssen Sie erbrechen?</em> Otro falso amigo: <em>der Schwindel</em> es el mareo, pero también significa «estafa»; en planta el sentido es siempre el primero. Y <em>der Bauch</em> es la barriga o el vientre, nunca «el estómago» en sentido anatómico, que es <em>der Magen</em>."
      },
      {
        tip: "Pide que te señale el sitio: <em>Können Sie es mir zeigen?</em> Es más rápido y más preciso que cualquier descripción, y funciona también cuando el paciente usa palabras distintas de las tuyas. Luego pregunta desde cuándo: <em>Seit wann?</em>"
      }
    ],
    grammar: {
      title: "El dativo de los síntomas",
      note: "La persona que se encuentra mal va en <b>dativo</b>: <b>mir</b> tut ... weh, <b>mir</b> ist übel. Con el paciente: <b>Ihnen</b>.",
      table: {
        head: ["persona", "dativo", "ejemplo"],
        rows: [
          ["ich", "mir", "Mir ist schwindelig."],
          ["er", "ihm", "Ihm tut der Rücken weh."],
          ["sie", "ihr", "Ihr ist übel."],
          ["wir", "uns", "Uns fehlt nichts."],
          ["Sie", "Ihnen", "Wo tut es Ihnen weh?"]
        ]
      },
      examples: [
        { tr: "¿Dónde le duele?", note: "wehtun: la persona en dativo" },
        { tr: "Me duele la barriga.", note: "der Bauch es el sujeto, mir el dativo" },
        { tr: "Estoy mareado.", note: "sein + dativo, no haben" },
        { tr: "Él tiene náuseas.", note: "ihm: dativo de er" },
        { tr: "¿Qué le pasa? ¿Qué molestias tiene?", note: "fehlen + dativo" },
        { tr: "¿Puedo ayudarle?", note: "helfen + dativo" }
      ]
    },
    vocab: [
      "el dolor (Schmerzen haben: tener dolor)",
      "doler (es tut mir weh: me duele)",
      "el dolor de cabeza (normalmente en plural)",
      "la barriga, el vientre",
      "las náuseas",
      "el mareo, el vértigo",
      "la falta de aire, la dificultad para respirar",
      "la diarrea",
      "el estreñimiento",
      "con náuseas (mir ist übel: tengo náuseas)",
      "mareado (mir ist schwindelig: estoy mareado)",
      "ayudar (con dativo)"
    ],
    dialogue: [
      "Señor Brandt, ¿qué le pasa? ¿Por qué está hoy aquí?",
      "Desde hace tres días me duele la barriga.",
      "¿Dónde le duele exactamente? ¿Me lo puede señalar?",
      "Aquí, abajo a la derecha.",
      "¿Tiene también náuseas?",
      "Sí, tengo náuseas, y ayer tuve diarrea.",
      "¿Tiene también falta de aire o mareos?",
      "No, eso no."
    ],
    exercises: [
      {
        q: "El paciente quiere decir «Me duele la cabeza». ¿Qué frase es correcta?",
        opts: ["Ich tut der Kopf weh.", "Mich tut der Kopf weh.", "Mir tut der Kopf weh."],
        why: "Con <i>wehtun</i> la persona va en <b>dativo</b>: <i>mir</i>, como el «me» de «me duele». El sujeto es <i>der Kopf</i>, por eso el verbo es <i>tut</i>."
      },
      {
        tr: "El presente de helfen, todas las personas.",
        why: "<i>Helfe, hilfst, hilft, helfen, helft, helfen</i>: en la segunda y tercera persona del singular la <b>e</b> se convierte en <b>i</b>. Y quien recibe la ayuda va en dativo: <i>Ich helfe Ihnen</i>."
      },
      {
        q: "Completa: «Kann ich ___ helfen?» (al paciente)",
        hint: "Sie en dativo",
        why: "<b>Ihnen</b>: <i>helfen</i> pide dativo, y el dativo de cortesía es <i>Ihnen</i>, con mayúscula."
      },
      {
        q: "Completa con el dativo de er.",
        tr: "A él le duele la espalda y tiene náuseas.",
        why: "<i>Ihm tut der Rücken weh, und ihm ist übel</i>: las dos expresiones piden dativo, <i>ihm</i>."
      },
      {
        q: "Une cada frase del paciente con su significado.",
        pairs: ["tengo náuseas", "estoy mareado", "me falta el aire", "tengo diarrea"]
      },
      {
        q: "Elige el artículo determinado correcto para cada sustantivo.",
        items: ["barriga", "náuseas", "mareo", "falta de aire", "diarrea", "estreñimiento"]
      },
      {
        q: "Ordena las palabras.",
        tr: "Desde ayer me duele la cabeza.",
        why: "<i>Seit gestern tut mir der Kopf weh.</i> <i>Seit gestern</i> delante, el verbo <i>tut</i> en segunda posición, <i>weh</i> al final."
      },
      {
        q: "Traduce (al paciente): «¿Está mareado?»",
        why: "<i>Ist Ihnen schwindelig?</i> Con <i>sein</i> y el dativo, no con <i>haben</i>, y no «Sind Sie schwindelig». También se escribe <i>schwindlig</i>."
      },
      {
        q: "Una paciente toca el timbre.",
        setting: "Entras en la habitación: la paciente dice que no se encuentra bien.",
        lines: [
          { tr: "Buenos días. No me encuentro nada bien." },
          { tr: "Pregunta qué le pasa.", answerTr: "¿Qué le pasa?" },
          { tr: "Me duele la barriga." },
          { tr: "Pregunta dónde le duele exactamente.", answerTr: "¿Dónde le duele exactamente?" },
          { tr: "Aquí, a la izquierda. Y tengo náuseas." },
          { tr: "Pregunta desde cuándo tiene náuseas.", answerTr: "¿Desde cuándo tiene náuseas?" }
        ]
      },
      {
        tr: "Desde hace tres días me duele la barriga. Tengo náuseas, y ayer tuve diarrea.",
        why: "En <i>Bauch</i> la <b>au</b> es [aʊ] y la <b>ch</b> final es [x], como la jota; en <i>übel</i> la <b>ü</b> es una «i» con los labios redondeados; en <i>Durchfall</i> la <b>ch</b> después de <b>r</b> es [ç], más suave que la jota."
      },
      {
        tr: "¿Dónde le duele exactamente?",
        why: "En <i>genau</i> la <b>g</b> es siempre dura, también ante <b>e</b> o <b>i</b>, nunca como la jota; en <i>tut</i> la <b>u</b> es larga; en <i>weh</i> la <b>w</b> se lee [v], con los dientes sobre el labio, y la <b>h</b> alarga la <b>e</b>."
      }
    ]
  },
  "lesson:pfl-u01-l3": {
    theme: "La historia clínica",
    title: "El formulario de anamnesis",
    objectives: [
      "rellenar con el paciente el formulario de anamnesis",
      "preguntar por enfermedades previas, operaciones, alergias y medicamentos",
      "usar el Perfekt para lo que ya ha pasado, con haben o con sein",
      "pedir el plan de medicación y preguntar cuándo tomó los medicamentos por última vez"
    ],
    theory: [
      {
        h: "Las preguntas del formulario",
        p: "El <strong>Anamnesebogen</strong> es el formulario que se rellena al ingreso. Las preguntas fijas: <em>Haben Sie Vorerkrankungen?</em> (enfermedades previas), <em>Hatten Sie schon einmal eine Operation?</em>, <em>Haben Sie Allergien?</em>, <em>Welche Medikamente nehmen Sie regelmäßig ein?</em>, <em>Sind Sie in letzter Zeit gestürzt?</em> Ante una alergia pregunta siempre también por <strong>la reacción</strong> (<em>Was ist dann passiert?</em>) y, si el paciente no recuerda el nombre del medicamento, anota quién lo sabe: el médico de cabecera, <em>der Hausarzt</em>."
      },
      {
        h: "El Perfekt de la historia clínica",
        p: "Lo que ya ha pasado se cuenta en <strong>Perfekt</strong>: auxiliar en segunda posición, participio al final. La mayoría de los verbos usa <strong>haben</strong>: <em>Haben Sie Ihre Tabletten genommen? Ich habe nichts gegessen. Ich habe das Antibiotikum nicht vertragen.</em> Los verbos de movimiento o de cambio de estado usan <strong>sein</strong>: <em>Sind Sie gestürzt?</em> En los verbos separables el <em>ge-</em> va detrás del prefijo: <em>einweisen</em> → <em>eingewiesen</em>, <em>einnehmen</em> → <em>eingenommen</em>. Con <em>sein</em> y <em>haben</em> se usa más el Präteritum: <em>Ich hatte eine Operation. Ich war im Krankenhaus.</em>"
      },
      {
        contrast: "En español «¿Ha tomado las pastillas?» pone el participio justo detrás del auxiliar, y en buena parte de Latinoamérica se diría incluso «¿Tomó las pastillas?», en indefinido. El alemán hablado usa el <strong>Perfekt</strong> para todo el pasado de la conversación, también donde tú usarías el indefinido, y manda el participio <strong>al final</strong>, con todo lo demás en medio: <em>Haben Sie heute schon Ihre Tabletten genommen?</em> La otra novedad es el auxiliar. El español usa siempre <em>haber</em>; el alemán usa <em>sein</em> con los verbos de movimiento y de cambio de estado: «se ha caído» es <em>er ist gestürzt</em>, nunca «er hat gestürzt». En caso de duda: el verbo transitivo con complemento directo lleva <em>haben</em>."
      },
      {
        trap: "<em>Die Allergie</em> se parece a «alergia», pero el acento cae en la última sílaba, <em>Aller-<b>gie</b></em>, la <b>ie</b> es una «i» larga y la <b>g</b> es dura, como en «guitarra», nunca como la jota de «alergia». «Tomar» un medicamento es <em>nehmen</em> o, más formal, <em>einnehmen</em>; no uses <em>bekommen</em>, que es «recibir» (<em>Sie bekommen eine Infusion</em>: es el personal quien la pone). <em>Vertragen</em> se usa así: <em>Ich vertrage kein Penicillin</em>, «no tolero la penicilina». Por último, <em>die Einweisung</em> tiene dos sentidos: el volante de ingreso del médico y, en planta, la formación en el uso de un aparato (<em>Geräteeinweisung</em>)."
      },
      {
        tip: "Pide el plan de medicación en lugar de que te dicten los nombres: <em>Haben Sie Ihren Medikationsplan dabei?</em> Un nombre de medicamento dicho por un paciente, y entendido por quien no es nativo, es la fuente de error más fácil del formulario. Además, muchas marcas alemanas no coinciden con las que conoces."
      }
    ],
    grammar: {
      title: "Perfekt con haben y con sein",
      note: "Auxiliar en <b>segunda posición</b> (o primera en la pregunta de sí o no), participio <b>al final</b>. <b>sein</b> con los verbos de movimiento y de cambio de estado, <b>haben</b> con casi todos los demás.",
      table: {
        head: ["infinitivo", "frase en Perfekt", "nota"],
        rows: [
          ["nehmen", "Haben Sie Ihre Tabletten genommen?", "haben, participio fuerte"],
          ["vertragen", "Ich habe das Antibiotikum nicht vertragen.", "ver- es inseparable: sin ge-"],
          ["einweisen", "Der Hausarzt hat mich eingewiesen.", "separable: ge- detrás del prefijo"],
          ["stürzen", "Sind Sie gestürzt?", "sein: movimiento"]
        ]
      },
      examples: [
        { tr: "¿Ya ha tomado hoy sus pastillas?", note: "haben + genommen al final" },
        { tr: "Esta mañana no he comido nada.", note: "pregunta típica antes de una prueba en ayunas" },
        { tr: "Mi médico de cabecera me ha mandado al hospital.", note: "einweisen: volante de ingreso" },
        { tr: "¿Se ha caído últimamente?", note: "stürzen pide sein" },
        { tr: "No toleré el antibiótico.", note: "vertragen: sin ge-" },
        { tr: "¿Cuándo bebió algo por última vez?", note: "pregunta con W-: haben en segunda posición" }
      ]
    },
    vocab: [
      "el formulario de anamnesis",
      "la enfermedad previa, el antecedente",
      "la alergia",
      "el medicamento, el fármaco",
      "el plan de medicación (lista de los medicamentos del paciente)",
      "la operación, la intervención",
      "el médico de cabecera, el médico de familia",
      "el volante de ingreso",
      "la caída",
      "tomar (un medicamento)",
      "tolerar, sentar bien",
      "regularmente"
    ],
    dialogue: [
      "Señor Brandt, ahora rellenamos juntos el formulario de anamnesis. ¿Tiene alguna enfermedad previa?",
      "Sí, tengo la tensión alta. Y hace dos años me operaron de la rodilla.",
      "¿Tiene alergias?",
      "Una vez no toleré un antibiótico. Me salió un sarpullido.",
      "¿Recuerda cómo se llama el medicamento?",
      "No, por desgracia no. Pero mi médico de cabecera lo sabe.",
      "Bien, se lo preguntamos a él. ¿Qué medicamentos toma regularmente?",
      "Aquí tiene mi plan de medicación.",
      "Gracias. ¿Ya ha tomado hoy sus pastillas?",
      "Sí, esta mañana."
    ],
    culture: {
      title: "Una mirada alemana: el Medikationsplan",
      text: "<p>En Alemania quien toma regularmente al menos tres medicamentos tiene derecho a un <i>Medikationsplan</i> en un formulario único nacional, rellenado por el médico de cabecera y con un código de barras que la farmacia y el hospital pueden leer. Muchos pacientes lo llevan en la cartera, y muchos lo llaman simplemente <i>Medikamentenplan</i> o <i>mein Zettel</i>.</p><p>Al ingreso el plan no sustituye a tu pregunta: pregunta siempre si el paciente toma algo que no está apuntado, por ejemplo un producto comprado sin receta o una pomada. La respuesta va al formulario de anamnesis, y la decisión sobre qué continuar le corresponde al médico.</p>"
    },
    exercises: [
      {
        tr: "El Perfekt de nehmen, todas las personas.",
        why: "<i>Habe genommen, hast genommen, hat genommen, haben genommen, habt genommen, haben genommen</i>: auxiliar <i>haben</i> y participio fuerte <i>genommen</i>."
      },
      {
        q: "Quieres preguntar al paciente «¿Se ha caído últimamente?». ¿Qué frase es correcta?",
        opts: [
          "Haben Sie in letzter Zeit gestürzt?",
          "Sind Sie in letzter Zeit gestürzt?",
          "Sind Sie in letzter Zeit gestürzt worden?"
        ],
        why: "<b>stürzen</b> es un verbo de movimiento y pide <b>sein</b>: <i>Sind Sie gestürzt?</i> La tercera es una pasiva, que aquí no tiene sentido."
      },
      {
        q: "Completa: «Haben Sie heute schon Ihre Tabletten ___?»",
        hint: "participio de nehmen",
        why: "<b>genommen</b>, al final de la frase: el participio de <i>nehmen</i> es fuerte y cambia la vocal."
      },
      {
        q: "¿Qué preguntas del formulario son correctas?",
        opts: [
          "Haben Sie Allergien?",
          "Welche Medikamente nehmen Sie regelmäßig ein?",
          "Welche Medikamente Sie nehmen regelmäßig ein?",
          "Hatten Sie schon einmal eine Operation?",
          "Haben Sie schon einmal eine Operation gehabt worden?"
        ],
        why: "En la pregunta con W- el verbo va justo después de la parte interrogativa: <i>Welche Medikamente nehmen Sie</i>. La última mezcla Perfekt y pasiva: se dice <i>Hatten Sie</i> o <i>Haben Sie ... gehabt</i>."
      },
      {
        q: "Completa la frase en Perfekt.",
        tr: "No toleré el antibiótico.",
        why: "<i>Ich habe das Antibiotikum nicht vertragen</i>: <i>vertragen</i> tiene el prefijo inseparable <i>ver-</i>, así que el participio no lleva <i>ge-</i> y es igual al infinitivo."
      },
      {
        q: "Ordena las palabras.",
        tr: "¿Cuándo comió algo por última vez?",
        why: "<i>Wann haben Sie zuletzt etwas gegessen?</i> La partícula interrogativa, luego el auxiliar <i>haben</i>, el sujeto, y el participio <i>gegessen</i> al final."
      },
      {
        q: "Elige el artículo determinado correcto para cada sustantivo.",
        items: ["formulario de anamnesis", "enfermedad previa", "medicamento", "caída", "operación", "médico de cabecera"]
      },
      {
        q: "Traduce: «¿Ya ha comido algo hoy?»",
        why: "<i>Haben Sie heute schon etwas gegessen?</i> Pregunta de sí o no: el auxiliar abre la frase y el participio va al final. <i>Schon</i> traduce «ya»."
      },
      {
        q: "Sigues con el formulario de anamnesis.",
        setting: "El paciente ya ha dicho que tiene la tensión alta.",
        lines: [
          { tr: "¿Qué más quiere saber?" },
          { tr: "Pregunta si alguna vez lo han operado.", answerTr: "¿Lo han operado alguna vez?" },
          { tr: "Sí, hace dos años, de la rodilla." },
          { tr: "Pregunta si tiene alergias.", answerTr: "¿Y tiene alergias?" },
          { tr: "No, creo que no." },
          { tr: "Pregunta si ya ha tomado hoy las pastillas.", answerTr: "Bien. ¿Ya ha tomado hoy sus pastillas?" }
        ]
      },
      {
        tr: "Tengo la tensión alta. Hace dos años me operaron de la rodilla, y no toleré un antibiótico.",
        why: "En <i>Knie</i> se pronuncian tanto la <b>k</b> como la <b>n</b>; en <i>Blutdruck</i> la <b>u</b> de <i>Blut</i> es larga y la de <i>Druck</i> breve; en <i>vertragen</i> la <b>v</b> se lee [f]."
      },
      {
        tr: "¿Qué medicamentos toma regularmente?",
        why: "En <i>Medikamente</i> el acento cae en <b>men</b>; en <i>regelmäßig</i> la <b>ä</b> es larga y la <b>ß</b> es una <b>s</b> sorda; la <b>g</b> final se lee [ç]."
      }
    ]
  },
  "lesson:pfl-u01-l4": {
    theme: "Dos registros",
    title: "Lenguaje técnico y lenguaje del paciente",
    objectives: [
      "reconocer los términos técnicos de origen latino y griego que se usan en la documentación y con los médicos",
      "traducir cada término técnico a la palabra que usa el paciente",
      "elegir el registro adecuado según quién escucha",
      "encontrar el artículo de un compuesto a partir de su último elemento"
    ],
    theory: [
      {
        h: "Dos lenguas en la misma planta",
        p: "Cada concepto clínico tiene dos nombres. La <strong>Fachsprache</strong>, de raíz latina o griega, se usa con los médicos, en el relevo y en la documentación: <em>Hypertonie, Dyspnoe, Obstipation, Emesis</em>. La <strong>Laiensprache</strong>, alemana, se usa con pacientes y familiares: <em>Bluthochdruck, Atemnot, Verstopfung, Erbrechen</em>. Una enfermera pasa de una a otra decenas de veces al día, incluso en la misma frase: <em>Er hat eine Hypertonie</em> al médico, <em>Sie haben Bluthochdruck</em> al paciente."
      },
      {
        h: "Las palabras del paciente son compuestos",
        p: "La Laiensprache forma los sustantivos uniendo palabras simples: <em>Blut + hoch + Druck</em> = <em>der Bluthochdruck</em>, <em>Zucker + Krankheit</em> = <em>die Zuckerkrankheit</em>, <em>Atem + Not</em> = <em>die Atemnot</em>. <strong>El artículo lo decide el último elemento</strong>: <em>der Druck</em>, así que <em>der Bluthochdruck</em>; <em>die Krankheit</em>, así que <em>die Zuckerkrankheit</em>; <em>das Gespräch</em>, así que <em>das Aufnahmegespräch</em>. El paciente a menudo acorta aún más: <em>Ich habe Zucker</em> quiere decir «tengo diabetes», como el «tener azúcar» que se oye en muchos países hispanohablantes."
      },
      {
        contrast: "Para quien habla español la Fachsprache sale casi gratis: <em>Hypertonie</em> es hipertensión, <em>Dyspnoe</em> disnea, <em>Zephalgie</em> cefalea, <em>Emesis</em> emesis, <em>Diarrhö</em> diarrea. Ahí está precisamente el riesgo. En español muchas de estas palabras las entiende también el paciente («tengo hipertensión»), mientras que para un paciente alemán <em>Hypertonie</em> es una palabra opaca, que asusta o que no siente suya. La palabra que te falta, y la que tienes que estudiar, es la alemana de todos los días: <em>Bluthochdruck</em>, <em>Atemnot</em>, <em>Verstopfung</em>, <em>Kopfschmerzen</em>, <em>Erbrechen</em>. Y no tiene nada de latino: no hay forma de adivinarla. Al revés, en el relevo, usar solo las palabras comunes puede sonar poco profesional."
      },
      {
        trap: "El falso amigo de esta lección: en España «estar constipado» significa estar resfriado, no estreñido. El estreñimiento es <em>die Obstipation</em> en la documentación y <em>die Verstopfung</em> con el paciente; el resfriado es <em>die Erkältung</em>. En algunos países de Latinoamérica, en cambio, «constipación» sí se usa por estreñimiento: si dudas, pregunta con la palabra alemana. Una letra lo cambia todo: <em>Hypertonie</em> es la tensión alta, <em>Hypotonie</em> la baja, igual que hiper- e hipo- en español; en un relevo rápido se confunden con facilidad, y ante la duda conviene pedir confirmación. Por último, <em>das Abdomen</em> es neutro, mientras que la palabra del paciente es masculina: <em>der Bauch</em>."
      },
      {
        tip: "Cuando expliques al paciente lo que ha dicho el médico, repite una vez la palabra técnica y luego tradúcela: <em>Das ist eine Hypertonie, also Bluthochdruck.</em> El paciente la volverá a encontrar en el informe de alta y sabrá a qué corresponde."
      }
    ],
    grammar: {
      title: "Fachsprache y Laiensprache",
      note: "Con médicos y en la documentación la columna <b>Fachsprache</b>; con pacientes y familiares la columna <b>Laiensprache</b>. El artículo de los compuestos es el del <b>último elemento</b>.",
      table: {
        head: ["Fachsprache", "Laiensprache", "español"],
        rows: [
          ["die Hypertonie", "der Bluthochdruck", "hipertensión"],
          ["der Diabetes mellitus", "die Zuckerkrankheit, «Zucker»", "diabetes"],
          ["die Dyspnoe", "die Atemnot", "disnea"],
          ["die Zephalgie", "die Kopfschmerzen", "cefalea"],
          ["die Nausea", "die Übelkeit", "náuseas"],
          ["die Emesis", "das Erbrechen", "vómito"],
          ["die Obstipation", "die Verstopfung", "estreñimiento"],
          ["die Diarrhö", "der Durchfall", "diarrea"],
          ["das Abdomen", "der Bauch", "abdomen, barriga"]
        ]
      },
      examples: [
        { tr: "El paciente tiene una hipertensión conocida.", note: "Fachsprache: al médico o en la documentación" },
        { tr: "Señor Brandt, usted tiene la tensión alta.", note: "Laiensprache: al paciente" },
        { tr: "Con el esfuerzo el paciente tiene disnea.", note: "fórmula típica de la documentación" },
        { tr: "¿Le falta el aire cuando sube escaleras?", note: "la misma pregunta, para el paciente" },
        { tr: "En el lenguaje técnico la diabetes se llama Diabetes mellitus.", note: "Zucker + Krankheit: die, por Krankheit" },
        { tr: "Muchos pacientes dicen simplemente: «tengo azúcar».", note: "Zucker por diabetes: forma coloquial muy extendida" }
      ]
    },
    vocab: [
      "la anamnesis (término técnico)",
      "la historia previa, los antecedentes (palabra para el paciente)",
      "la hipertensión (término técnico)",
      "la tensión alta (palabra para el paciente)",
      "la diabetes mellitus (término técnico)",
      "la diabetes (palabra para el paciente)",
      "la disnea (término técnico)",
      "la cefalea (término técnico)",
      "la emesis, el vómito (término técnico)",
      "el vómito (palabra para el paciente)",
      "el estreñimiento (término técnico)",
      "la diarrea (término técnico)"
    ],
    dialogue: [
      "Doctor Weber, el señor Brandt tiene una hipertensión conocida y desde hace tres días dolor abdominal.",
      "¿Tiene también náuseas o vómitos?",
      "Náuseas sí, vómitos no. Además diarrea desde ayer.",
      "Señora Marin, ¿qué ha dicho el médico? No entiendo estas palabras.",
      "No se preocupe, señor Brandt. Solo ha preguntado si tiene náuseas y si ha vomitado.",
      "Ah, ya. ¿Y qué es una Hypertonie?",
      "Es la tensión alta. Eso ya lo conoce."
    ],
    exercises: [
      {
        q: "Une cada término técnico con la palabra que usa el paciente.",
        pairs: ["der Bluthochdruck", "die Atemnot", "die Verstopfung", "die Kopfschmerzen", "das Erbrechen"]
      },
      {
        q: "Hablas con el paciente. ¿Qué frase es adecuada?",
        opts: [
          "Sie haben eine Hypertonie.",
          "Bei Ihnen besteht eine arterielle Hypertonie.",
          "Sie haben Bluthochdruck."
        ],
        why: "Con el paciente se usa la Laiensprache: <b>Bluthochdruck</b>. Las dos primeras son correctas, pero son frases de documentación o de médico a médico."
      },
      {
        q: "¿Qué palabras son adecuadas para el paciente?",
        opts: ["die Verstopfung", "die Obstipation", "die Übelkeit", "die Nausea", "der Durchfall", "die Diarrhö"],
        why: "<i>Verstopfung</i>, <i>Übelkeit</i> y <i>Durchfall</i> son palabras alemanas comunes. <i>Obstipation</i>, <i>Nausea</i> y <i>Diarrhö</i> son términos técnicos, para el médico y la documentación."
      },
      {
        q: "El médico ha escrito «Hypertonie». Completa la frase para el paciente: «Sie haben ___.»",
        hint: "palabra compuesta, Laiensprache",
        why: "<b>Bluthochdruck</b>: <i>Blut + hoch + Druck</i>. También vale <i>hohen Blutdruck</i>."
      },
      {
        q: "Elige el artículo: en los compuestos decide el último elemento.",
        items: ["tensión alta (Druck)", "diabetes (Krankheit)", "falta de aire (Not)", "formulario de anamnesis (Bogen)", "entrevista de ingreso (Gespräch)", "antecedentes (Geschichte)"]
      },
      {
        q: "Completa: en la primera frase el término técnico, en la segunda la palabra para el paciente.",
        tr: "El paciente tiene disnea con el esfuerzo. Le pregunto: ¿le falta el aire cuando sube escaleras?",
        why: "<i>Dyspnoe</i> es el término para la documentación, <i>Atemnot</i> la palabra para el paciente: mismo concepto, dos registros."
      },
      {
        q: "Ordena las palabras.",
        tr: "¿Le falta el aire cuando sube escaleras?",
        why: "<i>Haben Sie Atemnot, wenn Sie Treppen steigen?</i> La pregunta de sí o no empieza con el verbo; después de <i>wenn</i> el verbo <i>steigen</i> va al final."
      },
      {
        q: "Traduce, dirigiéndote al paciente: «¿Tiene la tensión alta?»",
        why: "<i>Haben Sie Bluthochdruck?</i> o <i>Haben Sie hohen Blutdruck?</i> Al paciente no se le dice <i>Hypertonie</i>."
      },
      {
        q: "El médico ha escrito «Diabetes mellitus». Completa para el paciente: «Seit wann haben Sie die ___?»",
        hint: "Zucker + Krankheit",
        why: "<b>Zuckerkrankheit</b>, femenino como <i>Krankheit</i>. Muchos pacientes dicen también solo <i>Zucker</i>: <i>Ich habe Zucker</i>."
      },
      {
        tr: "El paciente tiene una hipertensión conocida. Al señor Brandt le digo simplemente: usted tiene la tensión alta.",
        why: "En <i>Hypertonie</i> el acento cae en la <b>nie</b> final y la <b>y</b> se lee como una <b>ü</b>, no como la «i» de «hipertensión»; en <i>Bluthochdruck</i> la <b>ch</b> después de <b>o</b> es [x], como la jota."
      },
      {
        tr: "¿Le falta el aire cuando sube escaleras?",
        why: "En <i>Atemnot</i> el acento está en la primera sílaba, <b>A</b>; en <i>Treppen</i> la <b>e</b> es breve; en <i>steigen</i> la <b>st</b> inicial es [ʃt] y la <b>ei</b> es [aɪ], como «ai»."
      }
    ]
  },
  "lesson:pfl-u01-test": {
    theme: "Evaluación",
    title: "Test: Ingreso y anamnesis",
    objectives: [
      "comprobar el registro con el paciente, el dativo de los síntomas, el Perfekt de la historia clínica y los pares Fachsprache / Laiensprache"
    ],
    theory: [
      {
        p: "Once preguntas sobre toda la unidad. Se aprueba con el 70 %. Los contenidos clínicos son ejemplos didácticos: en planta vale siempre el protocolo del centro."
      }
    ],
    exercises: [
      {
        q: "Saludas a una paciente de 75 años a la que no conoces. ¿Qué frase es adecuada?",
        opts: ["Hallo, wie geht's dir?", "Guten Tag, wie geht es Ihnen?", "Guten Tag, wie geht es dir?"],
        why: "Con los pacientes se usa siempre el <b>Sie</b>: <i>Wie geht es Ihnen?</i>, con el dativo de cortesía."
      },
      {
        q: "Completa: «Wo tut es ___ weh?» (al paciente)",
        hint: "Sie en dativo",
        why: "<b>Ihnen</b>: con <i>wehtun</i> la persona va en dativo."
      },
      {
        q: "El paciente dice «Tengo náuseas». Completa: «___ ist übel.»",
        hint: "ich en dativo",
        why: "<b>Mir</b>: <i>Mir ist übel</i>, con <i>sein</i> y el dativo. «Ich bin übel» no se dice."
      },
      {
        tr: "El Perfekt de einnehmen, todas las personas.",
        why: "<i>Habe eingenommen, hast eingenommen, hat eingenommen, haben eingenommen, habt eingenommen, haben eingenommen</i>: verbo separable, el <i>ge-</i> va entre <i>ein</i> y <i>nommen</i>."
      },
      {
        q: "Une cada término técnico con la palabra que usa el paciente.",
        pairs: ["der Bluthochdruck", "die Atemnot", "die Verstopfung", "der Durchfall"]
      },
      {
        q: "¿Qué frases son correctas con un paciente?",
        opts: [
          "Kann ich Ihnen helfen?",
          "Kann ich Sie helfen?",
          "Sind Sie in letzter Zeit gestürzt?",
          "Jetzt bringe ich Sie auf Ihr Zimmer.",
          "Haben Sie in letzter Zeit gestürzt?"
        ],
        why: "<i>helfen</i> pide dativo (<i>Ihnen</i>), <i>stürzen</i> pide <i>sein</i> en Perfekt, y después de <i>jetzt</i> el verbo sigue en segunda posición."
      },
      {
        q: "Completa la frase en Perfekt.",
        tr: "Mi médico de cabecera me ha mandado al hospital con un volante de ingreso.",
        why: "<i>Mein Hausarzt hat mich ins Krankenhaus eingewiesen</i>: <i>hat</i> en segunda posición, el participio separable <i>eingewiesen</i> al final."
      },
      {
        q: "Ordena las palabras.",
        tr: "¿Qué medicamentos toma regularmente?",
        why: "<i>Welche Medikamente nehmen Sie regelmäßig ein?</i> El verbo <i>nehmen</i> justo después de la parte interrogativa, el prefijo <i>ein</i> al final."
      },
      {
        q: "Elige el artículo determinado correcto para cada sustantivo.",
        items: ["anamnesis", "tensión alta", "medicamento", "entrevista de ingreso", "diarrea", "antecedentes"]
      },
      {
        tr: "Buenos días, hoy soy su enfermera. Ahora rellenamos juntos el formulario de anamnesis. ¿Tiene alergias?",
        why: "En <i>Anamnesebogen</i> el acento cae en <b>ne</b>; en <i>Allergien</i> la <b>g</b> es dura y la <b>ie</b> final se lee [iːən]; en <i>fülle</i> la <b>ü</b> es breve y redondeada."
      },
      {
        tr: "¿Desde cuándo le duele?",
        why: "En <i>Seit</i> la <b>s</b> inicial es sonora [z], un sonido que el español no tiene, y la <b>ei</b> es [aɪ]; en <i>wann</i> la <b>w</b> se lee [v]; en <i>weh</i> la <b>h</b> alarga la <b>e</b>."
      }
    ]
  }
});
