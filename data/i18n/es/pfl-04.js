/* ============================================================
   Learner-language text (es) for data/core/pfl-04.js, unit pfl-u04.
   Keys point at ids in the neutral layer; arrays merge by index,
   so their length has to match core.
   Checked by scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("es", {
  "unit:pfl-u04": {
    title: "Dolor y urgencias",
    grammarNote: "la declinación del adjetivo para describir el dolor · las subordinadas temporales con als, wenn, bis, während, sobald · el imperativo para pedir ayuda · Perfekt y Präteritum para contar una caída"
  },
  "lesson:pfl-u04-l1": {
    theme: "El dolor",
    title: "¿Cuánto le duele?",
    objectives: [
      "preguntar al paciente la intensidad del dolor en una escala de 0 a 10",
      "describir el tipo de dolor: punzante, quemante, sordo, opresivo, que tira",
      "poner la terminación correcta al adjetivo delante del sustantivo",
      "comunicar el dolor al médico sin prometer un medicamento al paciente"
    ],
    theory: [
      {
        h: "Medir el dolor con una pregunta",
        p: "El dolor no se mide con un aparato: lo dice el paciente. Por eso en muchas unidades se usa una escala numérica de 0 a 10: <em>Wie stark sind die Schmerzen von null bis zehn? Null heißt keine Schmerzen, zehn heißt die stärksten Schmerzen, die Sie sich vorstellen können.</em> Después se pregunta el tipo de dolor (<em>Wie fühlt sich der Schmerz an?</em>), si se irradia (<em>Strahlt der Schmerz aus?</em>) y desde cuándo (<em>Seit wann?</em>). El número se registra junto con la hora, para que quien venga después pueda compararlo."
      },
      {
        h: "El adjetivo delante del sustantivo cambia de terminación",
        p: "Cuando el adjetivo va <strong>delante</strong> del sustantivo, lleva una terminación que depende del artículo, del género y del caso: <em>ein drückend<b>er</b> Schmerz</em> (nominativo, artículo indeterminado), <em>einen stechend<b>en</b> Schmerz</em> (acusativo), <em>der dumpf<b>e</b> Schmerz</em> (tras el artículo determinado). En plural sin artículo la terminación es <b>-e</b>: <em>starke Schmerzen</em>; tras <em>die</em> o <em>diese</em> es <b>-en</b>: <em>diese starken Schmerzen</em>. Cuando el adjetivo va <strong>después</strong> de <em>sein</em>, no lleva ninguna terminación: <em>Der Schmerz ist dumpf.</em>"
      },
      {
        contrast: "En español el adjetivo concuerda siempre, también después del verbo («el dolor es fuerte», «los dolores son fuertes»), y casi siempre va detrás del sustantivo: «un dolor punzante», «dolores fuertes». En alemán va delante y la terminación solo aparece ahí: <em>starke Schmerzen</em>, pero <em>Die Schmerzen sind stark</em>, sin nada. Los adjetivos del dolor se corresponden bien con los que ya usas en la valoración: <em>stechend</em> es punzante, <em>brennend</em> quemante o urente, <em>dumpf</em> sordo, <em>drückend</em> opresivo; <em>ziehend</em> no tiene un equivalente tan fijo: es el dolor «que tira», tirante. Sobre el registro: en España y en América Latina el paciente dice «analgésico» o «calmante» sin problema; el paciente alemán casi nunca dice <em>Analgetikum</em>, que es la palabra de la historia clínica. Con él la palabra es <em>das Schmerzmittel</em>."
      },
      {
        trap: "El paciente alemán habla casi siempre del dolor en plural: <em>Ich habe Schmerzen</em>, <em>Haben Sie Schmerzen?</em> El singular <em>der Schmerz</em> se usa al describir un dolor concreto: <em>Der Schmerz ist stechend.</em> Cuidado con <em>stark</em>: delante de un plural sin artículo es <em>starke</em>, no «starken» (<em>Haben Sie starke Schmerzen?</em>). Y <em>drückend</em> no tiene nada que ver con «urgente»: es el dolor opresivo, el que aprieta."
      },
      {
        tip: "Si el paciente pide algo para el dolor, no prometas un medicamento: <em>Ich sage es sofort der Ärztin, sie entscheidet über ein Schmerzmittel.</em> Qué medicamento y cuándo lo decide la prescripción médica. Después, vuelve a preguntar el número en la escala y regístralo: así se ve si el dolor ha bajado."
      }
    ],
    grammar: {
      title: "El adjetivo que describe el dolor",
      note: "Delante del sustantivo el adjetivo lleva <b>terminación</b>; después de <b>sein</b>, ninguna. En plural sin artículo: <b>-e</b>; tras <i>die</i>, <i>diese</i>: <b>-en</b>.",
      table: {
        head: ["caso", "ejemplo", "terminación"],
        rows: [
          ["nominativo, ein", "Es ist ein drückender Schmerz.", "-er"],
          ["acusativo, einen", "Ich habe einen stechenden Schmerz.", "-en"],
          ["plural sin artículo", "Haben Sie starke Schmerzen?", "-e"],
          ["plural con diese", "Seit wann haben Sie diese starken Schmerzen?", "-en"],
          ["dativo plural sin artículo", "Auch bei leichten Schmerzen dürfen Sie klingeln.", "-en"],
          ["después de sein", "Der Schmerz ist dumpf.", "ninguna"]
        ]
      },
      examples: [
        { tr: "¿Tiene dolores fuertes?", note: "plural sin artículo: starke" },
        { tr: "Tengo un dolor punzante en el costado.", note: "acusativo masculino tras einen: stechenden" },
        { tr: "Es un dolor opresivo.", note: "nominativo masculino tras ein: drückender" },
        { tr: "El dolor es sordo.", note: "después de sein el adjetivo no lleva terminación" },
        { tr: "¿Desde cuándo tiene estos dolores fuertes?", note: "tras diese en plural: starken" },
        { tr: "Aunque el dolor sea leve, puede tocar el timbre.", note: "bei rige dativo: leichten" }
      ]
    },
    vocab: [
      "la escala del dolor",
      "la intensidad del dolor",
      "punzante",
      "quemante, urente",
      "sordo (dicho de un dolor)",
      "opresivo, que aprieta",
      "que tira, tirante",
      "irradiarse (der Schmerz strahlt aus: el dolor se irradia)",
      "el calmante, el medicamento para el dolor (palabra para el paciente)",
      "el analgésico (término técnico)",
      "el alivio del dolor (palabra para el paciente)",
      "la analgesia (término técnico)"
    ],
    dialogue: [
      "Señora Keller, ¿tiene dolor?",
      "Sí, tengo dolores fuertes en la espalda.",
      "¿Cuánto le duele de cero a diez? Cero es nada de dolor, diez es el peor dolor que pueda imaginar.",
      "Diría que un siete.",
      "¿Cómo es el dolor? ¿Punzante, quemante o sordo?",
      "Más bien sordo. Y se me va a la pierna derecha.",
      "Gracias. Se lo digo enseguida a la doctora, ella decide si le da un analgésico.",
      "Gracias, señora Marin."
    ],
    culture: {
      title: "Una mirada alemana: el dolor se pregunta y se registra",
      text: "<p>Para la atención a las personas con dolor existe en Alemania un <i>Expertenstandard</i> nacional de enfermería, publicado por el DNQP: describe cómo valorar el dolor de forma sistemática, documentarlo y reevaluarlo. En la práctica muchas unidades preguntan el dolor con una escala numérica de 0 a 10, la <i>Numerische Rating-Skala</i> (NRS), y lo anotan en la gráfica junto con las constantes vitales.</p><p>Con las personas que no pueden dar un número, por ejemplo en la demencia avanzada, se usan escalas de observación de la conducta: la cara, la respiración, la agitación. Qué escala usar lo decide el centro; el principio es el mismo: el dolor es el que refiere el paciente, no el que se ve desde fuera.</p>"
    },
    exercises: [
      {
        q: "La paciente quiere decir «Tengo un dolor punzante en el costado». ¿Qué frase es correcta?",
        opts: [
          "Ich habe einen stechender Schmerz in der Seite.",
          "Ich habe einen stechenden Schmerz in der Seite.",
          "Ich habe ein stechenden Schmerz in der Seite."
        ],
        why: "<i>Der Schmerz</i> es masculino y aquí es complemento directo, por tanto acusativo: <b>einen stechenden Schmerz</b>. Tras <i>einen</i> el adjetivo lleva <b>-en</b>."
      },
      {
        q: "Completa: «Haben Sie ___ Schmerzen?» (stark)",
        hint: "plural sin artículo",
        why: "<b>starke</b>: en plural sin artículo el adjetivo lleva <b>-e</b>, como el artículo <i>die</i> que falta."
      },
      {
        q: "Elige el artículo determinado correcto para cada sustantivo.",
        items: ["escala del dolor", "calmante", "analgésico", "alivio del dolor", "analgesia", "espalda"]
      },
      {
        q: "Une cada adjetivo con el tipo de dolor.",
        pairs: ["punzante", "quemante", "sordo", "que tira"]
      },
      {
        q: "Ordena las palabras.",
        tr: "¿El dolor se irradia al brazo?",
        why: "<i>Strahlt der Schmerz in den Arm aus?</i> Pregunta de sí o no: el verbo conjugado <i>strahlt</i> abre la frase y el prefijo separable <i>aus</i> va al final."
      },
      {
        q: "Completa la frase.",
        tr: "Tengo un dolor sordo en la espalda, y es muy fuerte.",
        why: "<i>einen dumpfen Schmerz</i>: delante del sustantivo, acusativo masculino, terminación <b>-en</b>. <i>er ist sehr stark</i>: después de <i>sein</i> el adjetivo queda sin terminación."
      },
      {
        q: "Traduce, dirigiéndote al paciente: «¿Tiene dolores fuertes?»",
        why: "<i>Haben Sie starke Schmerzen?</i> En la lengua hablada también se oye <i>große Schmerzen</i>. El dolor se dice en plural, y el adjetivo delante de un plural sin artículo lleva <b>-e</b>."
      },
      {
        q: "¿Qué frases tienen la terminación correcta?",
        opts: [
          "Haben Sie starke Schmerzen?",
          "Es ist ein drückender Schmerz.",
          "Ich habe einen dumpfe Schmerz.",
          "Seit wann haben Sie diese starken Schmerzen?",
          "Der Schmerz ist stechender."
        ],
        why: "Tras <i>einen</i> hace falta <i>dumpfen</i>. Después de <i>ist</i> el adjetivo no lleva terminación: <i>Der Schmerz ist stechend</i>."
      },
      {
        q: "Un paciente toca el timbre.",
        setting: "Entras en la habitación: el paciente dice que le duele la barriga.",
        lines: [
          { tr: "Me duele la barriga." },
          { tr: "Pregunta cuánto le duele de cero a diez.", answerTr: "¿Cuánto le duele de cero a diez?" },
          { tr: "Más o menos un seis." },
          { tr: "Pregunta si es un dolor punzante o sordo.", answerTr: "¿Es un dolor punzante o sordo?" },
          { tr: "Más bien punzante. ¿Me da ahora algo para el dolor?" },
          { tr: "Responde que se lo dices enseguida a la doctora y que decide ella.", answerTr: "Se lo digo enseguida a la doctora. Ella decide si le da un analgésico." }
        ]
      },
      {
        tr: "Tengo dolores fuertes en la espalda. El dolor es sordo y se irradia a la pierna derecha.",
        why: "En <i>Schmerzen</i> la <b>sch</b> es [ʃ] y la <b>z</b> es [ts]; en <i>Rücken</i> la <b>ü</b> es breve; en <i>strahlt</i> la <b>st</b> inicial es [ʃt] y la <b>h</b> alarga la <b>a</b>."
      },
      {
        tr: "¿Cuánto le duele de cero a diez?",
        why: "En <i>stark</i> la <b>st</b> inicial es [ʃt]; en <i>null</i> la <b>u</b> es breve; en <i>zehn</i> la <b>z</b> es [ts] y la <b>h</b> alarga la <b>e</b>."
      }
    ]
  },
  "lesson:pfl-u04-l2": {
    theme: "Reconocer una urgencia",
    title: "Una urgencia",
    objectives: [
      "reconocer los signos de una urgencia y decir qué has observado",
      "entender y usar los pares Fachsprache / Laiensprache de la urgencia",
      "elegir entre als y wenn y poner el verbo al final de la subordinada temporal",
      "preguntar y registrar cuándo empezaron los síntomas"
    ],
    theory: [
      {
        h: "Qué se observa",
        p: "Primero se reconoce y se pide ayuda. Las frases de esta lección describen lo que se ve y se oye: el paciente <em>reagiert nicht</em>, <em>ist nicht ansprechbar</em> (no responde cuando se le habla), <em>ist plötzlich ganz blass</em>, <em>spricht so komisch</em>, un brazo se queda abajo, una comisura de la boca cae. La palabra clave es <em>plötzlich</em>, de repente: un cambio repentino se comunica enseguida, aunque todavía no sepas qué es. El diagnóstico corresponde al médico; tu tarea es ver, llamar y quedarte."
      },
      {
        h: "La subordinada temporal",
        p: "Las conjunciones temporales abren una subordinada con el verbo conjugado <strong>al final</strong>: <em>bis das Team kommt</em>, <em>während ich mit ihr sprach</em>, <em>sobald das Team da ist</em>. Si la subordinada va primero, la principal empieza por el verbo: <em>Als ich ins Zimmer kam, <b>war</b> sie nicht ansprechbar.</em> Dos conjunciones traducen «cuando»: <strong>als</strong> para un hecho <b>único en el pasado</b> (<em>Als ich ins Zimmer kam</em>), <strong>wenn</strong> para el presente, el futuro y lo que se repite (<em>Wenn ein Patient nicht reagiert, rufe ich sofort Hilfe</em>). <em>Wann</em> es la pregunta: <em>Wann hat das angefangen?</em>"
      },
      {
        contrast: "Los términos técnicos de esta lección son casi españoles: <em>Synkope</em> síncope, <em>Apoplex</em> apoplejía, <em>Myokardinfarkt</em> infarto de miocardio, <em>somnolent</em> somnoliento. Pero el paciente y la familia usan las palabras alemanas: <em>die Ohnmacht</em> (el desmayo), <em>der Schlaganfall</em>, <em>der Herzinfarkt</em>, <em>schläfrig</em>. En España se dice «ictus», y en buena parte de América Latina «derrame cerebral» o «ACV»; en alemán el paciente no dice ninguna de las dos cosas: dice <em>Schlaganfall</em>. Para «cuando» el español tiene una sola palabra; el alemán tiene tres (<em>als, wenn, wann</em>), y equivocarse entre <em>als</em> y <em>wenn</em> es el error más frecuente al contar un hecho."
      },
      {
        trap: "<em>Ansprechbar</em> no significa «que habla»: significa que el paciente <b>responde</b> cuando se le habla. Un paciente puede estar <em>wach</em> (despierto) y no <em>ansprechbar</em>. <em>Die Ohnmacht</em> es el desmayo, pero en la lengua común también significa impotencia (<em>Ohnmacht und Wut</em>); en la unidad vale el primer sentido. Y <em>somnolent</em> no es simplemente «cansado»: es un estado en el que el paciente duerme mucho pero se despierta si lo llamas, y hay que registrarlo y comunicarlo."
      },
      {
        tip: "Pregunta siempre, y registra, cuándo empezó: <em>Wann hat das angefangen?</em> Si podría ser un ictus, la hora de inicio es una de las primeras cosas que querrá saber el médico. Si el paciente no lo sabe, pregunta a quien estaba con él: <em>Wann haben Sie ihn zuletzt normal gesehen?</em>"
      }
    ],
    grammar: {
      title: "als, wenn, bis, während, sobald",
      note: "En la subordinada temporal el verbo conjugado va <b>al final</b>. <b>als</b>: un hecho único en el pasado. <b>wenn</b>: presente, futuro, repetición. <b>wann</b>: la pregunta.",
      table: {
        head: ["conjunción", "ejemplo", "uso"],
        rows: [
          ["als", "Als ich ins Zimmer kam, war sie nicht ansprechbar.", "una vez, en el pasado"],
          ["wenn", "Wenn ein Patient nicht reagiert, rufe ich sofort Hilfe.", "cada vez, regla"],
          ["bis", "Ich bleibe bei der Patientin, bis das Team kommt.", "hasta que"],
          ["während", "Während ich mit ihr sprach, wurde sie blass.", "al mismo tiempo"],
          ["sobald", "Sobald das Team da ist, berichte ich kurz.", "en cuanto"]
        ]
      },
      examples: [
        { tr: "Cuando entré en la habitación, la señora Keller no respondía.", note: "als: un hecho único en el pasado" },
        { tr: "Si un paciente no reacciona, pido ayuda enseguida.", note: "wenn: una regla que vale siempre" },
        { tr: "Me quedo con la paciente hasta que llegue el equipo.", note: "bis: el verbo kommt al final" },
        { tr: "Mientras hablaba con ella, se puso de repente muy pálida.", note: "während: dos cosas al mismo tiempo" },
        { tr: "Cuando se levantó, se le nubló la vista.", note: "jemandem wird schwarz vor Augen: expresión común" },
        { tr: "En cuanto llegue el equipo, informo brevemente de lo que ha pasado.", note: "sobald: justo después" }
      ]
    },
    vocab: [
      "la urgencia, la emergencia",
      "el síncope (término técnico)",
      "el desmayo (palabra para el paciente)",
      "el ictus, la apoplejía (término técnico)",
      "el ictus, el derrame cerebral (palabra para el paciente)",
      "el infarto de miocardio (término técnico)",
      "el infarto, el ataque al corazón (palabra para el paciente)",
      "inconsciente",
      "que responde cuando se le habla (nicht ansprechbar: no responde)",
      "somnoliento (término técnico)",
      "adormilado (palabra para el paciente)",
      "pálido"
    ],
    dialogue: [
      "¡Señora Marin, venga rápido, por favor! Mi padre habla muy raro.",
      "Voy enseguida. Señor Brandt, ¿me oye?",
      "Cuando le di el agua, se le cayó el vaso de la mano.",
      "¿Cuándo empezó?",
      "Hace unos diez minutos, mientras comía.",
      "Señor Brandt, ¿puede levantar los dos brazos, por favor?",
      "El brazo derecho se queda abajo. Y la boca le cae de un lado.",
      "Puede ser un ictus. Ahora pulso el botón de alarma y me quedo con él hasta que llegue el equipo."
    ],
    culture: {
      title: "Una mirada alemana: el tiempo en el ictus",
      text: "<p>En Alemania muchos hospitales tienen una <i>Stroke Unit</i>, una unidad de ictus, y en los cursos para el personal y para el público se enseña a menudo el test <i>FAST</i>: <i>Face</i> (¿la cara está asimétrica?), <i>Arms</i> (¿cae un brazo?), <i>Speech</i> (¿el habla es confusa?), <i>Time</i> (el tiempo cuenta: llamar enseguida y anotar la hora). Son preguntas para reconocer, no para tratar.</p><p>En el diálogo la enfermera hace levantar los brazos, pregunta cuándo empezó y llama al equipo: reconocer, llamar, quedarse. Lo que pasa después lo decide el médico según el protocolo del centro.</p>"
    },
    exercises: [
      {
        q: "Une cada término técnico con la palabra que usa el paciente.",
        pairs: ["die Ohnmacht", "der Schlaganfall", "der Herzinfarkt", "schläfrig"]
      },
      {
        q: "Completa: «___ ich ins Zimmer kam, war sie nicht ansprechbar.»",
        opts: ["Als", "Wenn", "Wann"],
        why: "<b>Als</b>: un hecho único en el pasado. <i>Wenn</i> se usa para lo que se repite o para el presente y el futuro; <i>wann</i> es la pregunta."
      },
      {
        q: "Completa: «Ich bleibe bei ihm, ___ das Team kommt.»",
        hint: "«hasta que»",
        why: "<b>bis</b>: «hasta que». El verbo de la subordinada, <i>kommt</i>, va al final, y en alemán va en indicativo, no en subjuntivo como en «hasta que llegue»."
      },
      {
        tr: "El Präteritum de kommen, todas las personas.",
        why: "<i>Kam, kamst, kam, kamen, kamt, kamen</i>: verbo fuerte, la vocal cambia a <b>a</b>. En la primera y la tercera persona del singular no hay terminación: <i>ich kam, sie kam</i>. Es la forma que se usa tras <i>als</i> al contar algo."
      },
      {
        q: "Completa la frase.",
        tr: "Si un paciente no reacciona, pido ayuda enseguida.",
        why: "Tras <i>wenn</i> el verbo <i>reagiert</i> va al final de la subordinada; la principal empieza por el verbo: <i>rufe ich</i>."
      },
      {
        q: "Ordena las palabras.",
        tr: "Cuando entré en la habitación, no respondía.",
        why: "<i>Als ich ins Zimmer kam, war sie nicht ansprechbar.</i> En la subordinada <i>kam</i> va al final; tras la coma la principal empieza por el verbo <i>war</i>."
      },
      {
        q: "¿Qué observaciones son signos que hay que comunicar enseguida?",
        opts: [
          "Der Patient reagiert nicht, wenn ich ihn anspreche.",
          "Die Patientin ist plötzlich ganz blass und schwitzt.",
          "Der Patient schläft nach dem Mittagessen ein bisschen.",
          "Ein Mundwinkel hängt plötzlich nach unten.",
          "Die Patientin liest im Bett die Zeitung."
        ],
        why: "Un paciente que no responde y un cambio <b>repentino</b> (<i>plötzlich</i>) del color o de la cara se comunican enseguida. Una siesta después de comer y leer el periódico, no."
      },
      {
        q: "Elige el artículo determinado correcto para cada sustantivo.",
        items: ["urgencia", "desmayo", "ictus", "síncope", "conciencia", "infarto"]
      },
      {
        q: "Traduce: «Me quedo con él hasta que llegue el equipo.»",
        why: "<i>Ich bleibe bei ihm, bis das Team kommt</i>: <i>bei</i> rige dativo, <i>ihm</i>; tras <i>bis</i> el verbo va al final. También vale <i>bis das Team da ist</i>."
      },
      {
        tr: "Cuando entré en la habitación, la señora Keller no respondía. Pedí ayuda enseguida.",
        why: "En <i>ansprechbar</i> la <b>sp</b> es [ʃp] y la <b>ch</b> tras <b>e</b> es [ç]; en <i>Zimmer</i> la <b>z</b> es [ts]; en <i>sofort</i> la <b>s</b> inicial ante vocal es sonora [z], un sonido que el español no tiene en esa posición."
      },
      {
        tr: "¿Cuándo empezó?",
        why: "En <i>Wann</i> la <b>w</b> se lee [v], con los dientes sobre el labio; en <i>angefangen</i> el prefijo <b>an</b> y el <b>ge</b> se pronuncian separados, y el <b>-ngen</b> final es [ŋən], sin <b>g</b> fuerte."
      }
    ]
  },
  "lesson:pfl-u04-l3": {
    theme: "Pedir ayuda",
    title: "Pedir ayuda",
    objectives: [
      "pedir ayuda en la unidad con la alarma y a domicilio con el 112",
      "responder a las preguntas de la central de emergencias: dónde, qué ha pasado",
      "dar instrucciones breves con el imperativo, de Sie con pacientes y familiares y de du con los compañeros",
      "distinguir Reanimation (la reanimación cardiopulmonar) de Intensivstation (la UCI)"
    ],
    theory: [
      {
        h: "A quién se llama, y cómo",
        p: "En el hospital se pide ayuda desde dentro: el <em>Notrufknopf</em> en la habitación y en el baño, la alarma de la unidad, el número de emergencia interno del centro. Fuera del hospital, a domicilio o en una residencia sin médico presente, se llama al <strong>112</strong>: en Alemania es el número de emergencias sanitarias y bomberos (<em>Rettungsdienst und Feuerwehr</em>) y es gratuito desde cualquier teléfono. El <strong>110</strong> es la policía. Al teléfono responde la <em>Leitstelle</em>, la central de emergencias, que hace las preguntas en el orden que necesita: deja que te guíe."
      },
      {
        h: "El imperativo",
        p: "Con <strong>Sie</strong> el imperativo es el verbo en infinitivo seguido de <em>Sie</em>: <em>Rufen Sie bitte die 112 an! Bleiben Sie bitte bei Ihrem Mann!</em> Con <strong>du</strong>, que muchas unidades usan entre compañeros, es la raíz del verbo, a menudo sin <b>-e</b>: <em>Hol bitte schnell Hilfe! Lös bitte den Alarm aus!</em> Los verbos que en presente cambian <b>e</b> por <b>i</b> también lo hacen aquí: <em>du gibst</em> → <em>Gib mir bitte das Telefon!</em> El prefijo separable va al final: <em>Rufen Sie ... an</em>, <em>Lös ... aus</em>. <em>Bitte</em> suaviza, pero en una urgencia la frase sigue siendo corta."
      },
      {
        contrast: "Si vienes de España, el 112 ya lo conoces: es el mismo número de emergencias. En América Latina el número cambia según el país (en México, por ejemplo, es el 911), así que conviene aprenderse el 112 alemán antes del primer turno a domicilio, y recordar que la policía tiene otro número, el 110. En español el imperativo de cortesía usa el subjuntivo: «llame al 112», «quédese con él». En alemán se usa el infinitivo más <em>Sie</em>, siempre en el mismo orden: <em>Rufen Sie</em>, <em>Bleiben Sie</em>. <em>Die Reanimation</em> es la reanimación cardiopulmonar, la RCP, la acción; la palabra del paciente es <em>die Wiederbelebung</em>. Si en tu hospital «Reanimación» era también el nombre de una unidad, en alemán no se llama así: la UCI es la <em>Intensivstation</em>."
      },
      {
        trap: "<em>Die Ambulanz</em> parece «la ambulancia», y no lo es: es el ambulatorio, la consulta externa del hospital. La ambulancia es <em>der Rettungswagen</em>. <em>Die Notaufnahme</em> es urgencias, el servicio del hospital, y <em>der Notarzt</em> es el médico de emergencias que llega con el servicio de rescate. Y no cuelgues tú a la central: <em>Bleiben Sie am Telefon</em> quiere decir seguir en línea hasta que sea la <em>Leitstelle</em> la que cuelgue."
      },
      {
        tip: "El primer día en una unidad nueva pregunta dos cosas: dónde está el botón de alarma y cuál es el número de emergencia interno del centro. Cambian de un hospital a otro, y en una urgencia no hay tiempo para buscarlos."
      }
    ],
    grammar: {
      title: "El imperativo para pedir ayuda",
      note: "Con <b>Sie</b>: infinitivo + Sie. Con <b>du</b>: la raíz del verbo, a menudo sin -e; la <b>e</b> pasa a <b>i</b> donde también cambia en presente. El prefijo separable va <b>al final</b>.",
      table: {
        head: ["a quién", "ejemplo", "forma"],
        rows: [
          ["paciente, familiar", "Rufen Sie bitte die 112 an!", "rufen + Sie, an al final"],
          ["paciente, familiar", "Bleiben Sie bitte bei Ihrem Mann!", "bleiben + Sie"],
          ["compañero", "Hol bitte schnell Hilfe!", "holen → hol"],
          ["compañero", "Lös bitte den Alarm aus!", "auslösen → lös ... aus"],
          ["compañero", "Gib mir bitte das Telefon!", "du gibst → gib"]
        ]
      },
      examples: [
        { tr: "¡Llame al 112, por favor!", note: "separable: an al final" },
        { tr: "¡Ve a buscar ayuda, rápido!", note: "al compañero, de du" },
        { tr: "¡Quédese con su marido, por favor!", note: "al familiar, de Sie" },
        { tr: "¡Activa la alarma, por favor!", note: "auslösen: aus al final" },
        { tr: "¡Dame el teléfono, por favor!", note: "geben: la e pasa a i" },
        { tr: "¡No se retire del teléfono y no cuelgue!", note: "lo que suele decir la central" }
      ]
    },
    vocab: [
      "la llamada de emergencia (también: el número de emergencia)",
      "el número de emergencia",
      "el botón de alarma",
      "la alarma",
      "activar, hacer saltar (una alarma)",
      "la central de emergencias",
      "el servicio de emergencias sanitarias",
      "la ambulancia",
      "el equipo de reanimación",
      "la reanimación cardiopulmonar, la RCP (término técnico)",
      "la reanimación (palabra para el paciente)",
      "ir a buscar, traer (Hilfe holen: pedir ayuda)"
    ],
    dialogue: [
      "Señora Wolf, ahora llamo al 112. Quédese con su marido, por favor.",
      "Emergencias, bomberos y servicio sanitario. ¿Dónde es la emergencia?",
      "En la Lindenstraße 12, segundo piso. Soy enfermera del servicio de atención domiciliaria.",
      "¿Qué ha pasado?",
      "Un paciente de 78 años de repente ya no responde.",
      "No se retire del teléfono, por favor. La ambulancia está en camino.",
      "Bien. Señora Wolf, abra la puerta de casa para los sanitarios, por favor.",
      "Sí, voy ahora mismo."
    ],
    culture: {
      title: "Una mirada alemana: las preguntas de la central",
      text: "<p>En los cursos de primeros auxilios en Alemania se enseñan a menudo las «W» de la llamada de emergencia: <i>Wo</i> (dónde), <i>Was</i> (qué ha pasado), <i>Wie viele</i> (cuántas personas), <i>Welche Verletzungen</i> (qué lesiones o síntomas) y <i>Warten auf Rückfragen</i> (esperar las preguntas). La última es la más importante: la central hace sus preguntas y es ella la que cuelga.</p><p>Quien trabaja en atención domiciliaria no tiene al equipo de la unidad a pocos metros, así que conviene saberse de memoria la frase de presentación: <i>Ich bin Pflegefachkraft vom ambulanten Pflegedienst</i>, y tener a mano la dirección exacta del paciente.</p>"
    },
    exercises: [
      {
        tr: "El imperativo de rufen.",
        why: "De <i>du</i>: <i>ruf</i>; de <i>ihr</i>: <i>ruft</i>; de <i>Sie</i>: <i>rufen Sie</i>; y la forma <i>rufen wir</i>, «llamemos». El imperativo no tiene primera persona del singular."
      },
      {
        q: "Al compañero, de du: «¡Ve a buscar ayuda, rápido!»",
        opts: ["Holst bitte schnell Hilfe!", "Hol bitte schnell Hilfe!", "Holen bitte schnell Hilfe!"],
        why: "En el imperativo de <i>du</i> se usa la raíz: <b>Hol</b>. <i>Holst</i> es el presente, y <i>Holen</i> sin <i>Sie</i> no es un imperativo de cortesía."
      },
      {
        q: "Completa, a la mujer del paciente: «___ Sie bitte bei Ihrem Mann!»",
        hint: "bleiben, imperativo de Sie",
        why: "<b>Bleiben</b>: el imperativo de cortesía es el infinitivo seguido de <i>Sie</i>."
      },
      {
        q: "Ordena las palabras.",
        tr: "¡Llame al 112, por favor!",
        why: "<i>Rufen Sie bitte die 112 an!</i> El verbo abre la frase, después <i>Sie</i>, y el prefijo separable <i>an</i> va al final. El número se lee <i>eins-eins-zwei</i>."
      },
      {
        q: "Completa, al compañero de du.",
        tr: "¡Activa la alarma, rápido!",
        why: "<i>Lös bitte schnell den Alarm aus!</i> <i>Auslösen</i> es separable: la raíz <i>lös</i> (o <i>löse</i>) delante, <i>aus</i> al final."
      },
      {
        q: "Une cada palabra con su significado.",
        pairs: ["emergencias sanitarias y bomberos", "policía", "la reanimación cardiopulmonar (Wiederbelebung)", "la central de emergencias"]
      },
      {
        q: "¿Qué imperativos son correctos?",
        opts: [
          "Rufen Sie bitte den Arzt!",
          "Ruf bitte den Arzt!",
          "Rufe Sie bitte den Arzt!",
          "Gib mir bitte das Telefon!",
          "Gibst mir bitte das Telefon!"
        ],
        why: "Con <i>Sie</i> hace falta el infinitivo: <i>Rufen Sie</i>, no <i>Rufe Sie</i>. Con <i>du</i> se usa la raíz sin <i>-st</i>: <i>Ruf</i>, <i>Gib</i>."
      },
      {
        q: "Traduce lo que dice la central: «¡No se retire del teléfono!»",
        why: "<i>Bleiben Sie am Telefon!</i> Infinitivo más <i>Sie</i>; <i>am</i> es <i>an dem</i>. También vale con <i>bitte</i>."
      },
      {
        q: "Llamas al 112 desde casa de un paciente.",
        setting: "Eres la enfermera del servicio domiciliario; responde la central de emergencias.",
        lines: [
          { tr: "Emergencias, bomberos y servicio sanitario. ¿Dónde es la emergencia?" },
          { tr: "Responde con la dirección: Lindenstraße 12, segundo piso.", answerTr: "En la Lindenstraße 12, segundo piso." },
          { tr: "¿Qué ha pasado?" },
          { tr: "Responde que un paciente de repente ya no responde.", answerTr: "Un paciente de repente ya no responde." },
          { tr: "No se retire del teléfono, por favor." },
          { tr: "Responde que sigues al teléfono.", answerTr: "Sí, sigo al teléfono." }
        ]
      },
      {
        tr: "Señora Wolf, ahora llamo al 112. Quédese con su marido, por favor, y después abra la puerta de casa.",
        why: "El 112 se lee <i>eins-eins-zwei</i>, cifra por cifra; en <i>Haustür</i> la <b>au</b> es [aʊ] y la <b>ü</b> es larga; en <i>öffnen</i> la <b>ö</b> es breve y redondeada, una <b>e</b> dicha con los labios de <b>o</b>."
      },
      {
        tr: "¡Ve a buscar ayuda, rápido!",
        why: "En <i>Hol</i> la <b>o</b> es larga; en <i>schnell</i> la <b>sch</b> es [ʃ] y la <b>e</b> es breve; en <i>Hilfe</i> la <b>h</b> inicial se oye, como un soplo suave, nunca como la <b>j</b> española."
      }
    ]
  },
  "lesson:pfl-u04-l4": {
    theme: "La caída",
    title: "La caída",
    objectives: [
      "hablar con un paciente que se ha caído y pedir ayuda sin dejarlo solo",
      "informar de una caída al médico con Perfekt y Präteritum",
      "distinguir Fachsprache y Laiensprache para fractura y hematoma",
      "documentar la caída en el registro de caídas, separando lo que se ha visto de lo que cuenta el paciente"
    ],
    theory: [
      {
        h: "Después de una caída",
        p: "Una caída se afronta siempre del mismo modo: se habla al paciente, se pide ayuda, se informa y se documenta. <em>Was ist passiert? Bleiben Sie bitte liegen, ich hole Hilfe.</em> Después se pregunta lo que el paciente sabe decir (<em>Haben Sie sich den Kopf angeschlagen? Wo tut es weh?</em>) y se avisa al médico. Toda caída, aunque no tenga consecuencias visibles, se anota en el <em>Sturzprotokoll</em>, según el protocolo del centro."
      },
      {
        h: "Perfekt y Präteritum al contar",
        p: "Cuando se cuenta algo de palabra se usa sobre todo el <strong>Perfekt</strong>: <em>Frau Keller ist im Bad gestürzt. Ich habe sie auf dem Boden gefunden.</em> Con <em>sein</em>, <em>haben</em> y los modales se usa normalmente el <strong>Präteritum</strong>, también al hablar: <em>Sie war wach und hatte Schmerzen. Ich wollte allein zur Toilette gehen.</em> El auxiliar: los verbos intransitivos de movimiento y de cambio de estado suelen llevar <em>sein</em> (<em>ist gestürzt, ist ausgerutscht, ist gefallen</em>), los demás <em>haben</em>; es una tendencia, el auxiliar se aprende con el verbo. Los verbos en <em>-ieren</em> no llevan <em>ge-</em>: <em>informiert</em>, <em>dokumentiert</em>; los separables lo ponen detrás del prefijo: <em>ausgerutscht</em>."
      },
      {
        contrast: "En español «caerse» es pronominal: «me caí», «se ha caído». En alemán no hay pronombre: <em>Ich bin gestürzt</em>, <em>Ich bin hingefallen</em>, y «ich habe mich gefallen» no existe. Tampoco hay «haber»: el auxiliar es <em>sein</em>, porque caer es movimiento. Sobre los tiempos: en buena parte de América Latina se cuenta con el indefinido («se cayó anoche»), en España a menudo con el perfecto («se ha caído esta noche»); en alemán, al hablar, se usa el Perfekt en los dos casos: <em>Sie ist heute Nacht gestürzt</em>. El imperfecto español («estaba despierta, tenía dolor») describe un estado; el Präteritum alemán no lleva ese matiz y <em>Sie war wach</em> se usa porque es más corto que <em>Sie ist wach gewesen</em>. <em>Fraktur</em> y <em>Hämatom</em> no necesitan estudio: fractura, hematoma. Al paciente, en cambio, se le dice <em>der Knochenbruch</em> (o simplemente <em>Ist das Bein gebrochen?</em>) y <em>der Bluterguss</em>, nuestro «moratón» o «moretón»."
      },
      {
        trap: "«Caerse» tiene tres traducciones. <em>stürzen</em> es la palabra de la unidad y de la documentación (<em>der Sturz</em>, la caída); <em>hinfallen</em> es la de todos los días (<em>Ich bin hingefallen</em>); <em>fallen</em>, sin más, se dice sobre todo de un objeto que cae (<em>Das Glas ist gefallen</em>). Cuidado con <em>gefallen</em>: también es el verbo «gustar», con <em>haben</em> (<em>Es hat mir gefallen</em>, «me gustó»). <em>Sie ist gefallen</em> y <em>Es hat ihr gefallen</em> son dos frases distintas. Por último, <em>Platzwunde</em> no viene de «plaza»: es la herida que se abre por un golpe, de <em>platzen</em>, reventar."
      },
      {
        tip: "En el registro escribe por separado lo que has visto y lo que te ha dicho el paciente: <em>Patientin um 3:00 Uhr auf dem Boden im Bad aufgefunden</em> es una observación; <em>laut Patientin ausgerutscht</em> es su relato. Quien lo lea después tiene que poder distinguir las dos cosas."
      }
    ],
    grammar: {
      title: "Contar una caída",
      note: "Al contar de palabra, sobre todo <b>Perfekt</b>; con <b>sein</b>, <b>haben</b> y los modales normalmente <b>Präteritum</b>. Los verbos en <b>-ieren</b> no llevan <b>ge-</b>.",
      table: {
        head: ["verbo", "ejemplo", "nota"],
        rows: [
          ["stürzen", "Sie ist im Bad gestürzt.", "Perfekt con sein"],
          ["finden", "Ich habe sie auf dem Boden gefunden.", "Perfekt con haben, participio fuerte"],
          ["ausrutschen", "Ich bin ausgerutscht.", "separable: ge- tras aus"],
          ["informieren", "Wir haben die Ärztin informiert.", "-ieren: sin ge-"],
          ["sein, haben", "Sie war wach und hatte Schmerzen.", "Präteritum también al hablar"],
          ["wollen", "Ich wollte allein zur Toilette gehen.", "modal en Präteritum"]
        ]
      },
      examples: [
        { tr: "La señora Keller se ha caído esta noche en el baño.", note: "stürzen: Perfekt con sein" },
        { tr: "La encontré a las tres en el suelo.", note: "finden: Perfekt con haben" },
        { tr: "Estaba despierta y tenía dolor en la cadera izquierda.", note: "sein y haben en Präteritum" },
        { tr: "Quería ir al baño sola.", note: "modal en Präteritum" },
        { tr: "Me resbalé en el suelo mojado.", note: "ausrutschen: separable, con sein" },
        { tr: "Avisamos enseguida a la doctora.", note: "informieren: sin ge-" }
      ]
    },
    vocab: [
      "el registro de caídas",
      "caerse (palabra de la unidad)",
      "resbalar",
      "caerse (palabra de todos los días)",
      "la fractura (término técnico)",
      "la fractura, el hueso roto (palabra para el paciente)",
      "el hematoma (término técnico)",
      "el moratón, el moretón (palabra para el paciente)",
      "la cadera",
      "la herida contusa",
      "el riesgo de caídas",
      "comunicar, notificar"
    ],
    dialogue: [
      "¡Señora Keller! ¿Qué ha pasado? Quédese tumbada, por favor, voy a buscar ayuda.",
      "Quería ir al baño sola. Y luego me resbalé.",
      "¿Se ha golpeado la cabeza?",
      "No, pero me duele la cadera.",
      "Doctor Weber, la señora Keller se ha caído a las tres en el baño. La encontré en el suelo.",
      "¿Estaba despierta y respondía?",
      "Sí, estaba despierta y orientada. Tiene dolor en la cadera izquierda y un pequeño hematoma en el codo.",
      "Bien, voy. Documente la caída en el registro de caídas, por favor."
    ],
    culture: {
      title: "Una mirada alemana: prevenir y documentar las caídas",
      text: "<p>También para las caídas existe en Alemania un <i>Expertenstandard</i> del DNQP, dedicado a la prevención (<i>Sturzprophylaxe</i>): pide reconocer quién está en riesgo, adaptar el entorno y analizar cada caída que se produce. Por eso muchos centros usan un formulario propio, llamado <i>Sturzprotokoll</i> o <i>Sturzereignisprotokoll</i>: hora, lugar, qué se encontró, qué dijo el paciente, a quién se informó.</p><p>El formulario no sirve para buscar un culpable: sirve para entender por qué la persona se cayó y evitar la caída siguiente. El modelo exacto lo decide el centro.</p>"
    },
    exercises: [
      {
        tr: "El Perfekt de fallen, todas las personas.",
        why: "<i>Bin gefallen, bist gefallen, ist gefallen, sind gefallen, seid gefallen, sind gefallen</i>: verbo de movimiento, auxiliar <i>sein</i>. Para una persona en la unidad se dice más a menudo <i>gestürzt</i> o <i>hingefallen</i>."
      },
      {
        q: "Al paciente, con palabras comunes: «Tiene un moratón en el brazo.»",
        opts: [
          "Sie haben ein Hämatom am Arm.",
          "Sie haben einen Bluterguss am Arm.",
          "Sie haben einen Hämatom am Arm."
        ],
        why: "Con el paciente se usa la Laiensprache: <b>einen Bluterguss</b>, masculino. La primera frase es correcta pero es de documentación; en la tercera el artículo está mal, porque <i>Hämatom</i> es neutro, aunque «hematoma» en español sea masculino."
      },
      {
        q: "Completa: «Ich bin auf dem nassen Boden ___.»",
        hint: "participio de ausrutschen",
        why: "<b>ausgerutscht</b>: verbo separable, el <i>ge-</i> va detrás del prefijo <i>aus</i>. Auxiliar <i>sein</i>, como <i>stürzen</i>."
      },
      {
        q: "Une cada palabra con su significado.",
        pairs: ["la fractura", "el hematoma", "la herida contusa", "el riesgo de caídas"]
      },
      {
        q: "Completa la frase en Präteritum.",
        tr: "Estaba despierta y tenía dolor en la cadera.",
        why: "<i>Sie war wach und hatte Schmerzen in der Hüfte</i>: con <i>sein</i> y <i>haben</i> el Präteritum es la forma normal también al hablar."
      },
      {
        q: "Ordena las palabras.",
        tr: "La encontré a las tres en el suelo.",
        why: "<i>Ich habe sie um drei Uhr auf dem Boden gefunden.</i> <i>Habe</i> en segunda posición, el participio <i>gefunden</i> al final; primero el tiempo (<i>um drei Uhr</i>), después el lugar."
      },
      {
        q: "¿Qué frases en Perfekt son correctas?",
        opts: [
          "Sie ist im Bad gestürzt.",
          "Sie hat im Bad gestürzt.",
          "Ich habe die Ärztin informiert.",
          "Ich habe die Ärztin geinformiert.",
          "Er ist auf dem Boden ausgerutscht."
        ],
        why: "<i>stürzen</i> y <i>ausrutschen</i> llevan aquí <i>sein</i>. <i>informieren</i> termina en <i>-ieren</i> y no lleva <i>ge-</i>: <i>informiert</i>."
      },
      {
        q: "Elige el artículo determinado correcto para cada sustantivo.",
        items: ["registro de caídas", "fractura (término técnico)", "hueso roto", "hematoma", "moratón", "cadera"]
      },
      {
        q: "Traduce, a la paciente que se ha caído: «¿Se ha golpeado la cabeza?»",
        why: "<i>Haben Sie sich den Kopf angeschlagen?</i> El reflexivo <i>sich</i> está en dativo y la cabeza es el objeto, como en «se ha golpeado la cabeza». También vale <i>gestoßen</i>."
      },
      {
        tr: "La señora Keller se ha caído a las tres en el baño. Estaba despierta y tenía dolor en la cadera izquierda.",
        why: "En <i>gestürzt</i> la <b>ü</b> es breve y el grupo <b>rzt</b> se pronuncia entero; en <i>Hüfte</i> la <b>ü</b> es breve; en <i>linken</i> la <b>n</b> delante de <b>k</b> es [ŋ], como en «banco»."
      },
      {
        tr: "¿Se ha golpeado la cabeza?",
        why: "En <i>Kopf</i> se oyen tanto la <b>p</b> como la <b>f</b>; en <i>angeschlagen</i> la <b>sch</b> es [ʃ] y la <b>a</b> de <i>schla</i> es larga."
      }
    ]
  },
  "lesson:pfl-u04-test": {
    theme: "Evaluación",
    title: "Test: Dolor y urgencias",
    objectives: [
      "comprobar las terminaciones del adjetivo, las subordinadas temporales, el Perfekt al contar y los pares Fachsprache / Laiensprache del dolor y de la urgencia"
    ],
    theory: [
      {
        p: "Once preguntas sobre toda la unidad. Se aprueba con el 70%. Los contenidos clínicos son ejemplos didácticos: en la unidad valen siempre el protocolo del centro y las indicaciones del médico."
      }
    ],
    exercises: [
      {
        q: "Completa: «Es ist ein ___ Schmerz.»",
        opts: ["stechende", "stechender", "stechenden"],
        why: "Nominativo masculino tras <i>ein</i>: <b>stechender</b>. El artículo <i>ein</i> no muestra el género, así que lo muestra el adjetivo con <b>-er</b>."
      },
      {
        q: "Completa: «Ich bleibe bei Ihnen, ___ die Ärztin kommt.»",
        hint: "«hasta que»",
        why: "<b>bis</b>: «hasta que». El verbo <i>kommt</i> va al final de la subordinada."
      },
      {
        q: "Completa: «Frau Keller ist heute Nacht im Bad ___.»",
        hint: "participio de stürzen",
        why: "<b>gestürzt</b>, con el auxiliar <i>ist</i>: <i>stürzen</i> es un verbo de movimiento."
      },
      {
        tr: "El Perfekt de anrufen, todas las personas.",
        why: "<i>Habe angerufen, hast angerufen, hat angerufen, haben angerufen, habt angerufen, haben angerufen</i>: separable, el <i>ge-</i> va entre <i>an</i> y <i>rufen</i>; auxiliar <i>haben</i>."
      },
      {
        q: "Une cada término técnico con la palabra que usa el paciente.",
        pairs: ["die Ohnmacht", "der Schlaganfall", "der Knochenbruch", "das Schmerzmittel"]
      },
      {
        q: "¿Qué frases son correctas?",
        opts: [
          "Als ich ins Zimmer kam, lag sie auf dem Boden.",
          "Als ich ins Zimmer kam, sie lag auf dem Boden.",
          "Haben Sie starke Schmerzen?",
          "Ich habe die Ärztin sofort informiert.",
          "Wenn ich gestern ins Zimmer kam, war sie wach."
        ],
        why: "Tras la subordinada la principal empieza por el verbo: <i>lag sie</i>. Para un hecho único en el pasado se usa <i>als</i>, no <i>wenn</i>. <i>informiert</i> no lleva <i>ge-</i>."
      },
      {
        q: "Completa la frase.",
        tr: "Cuando entré en la habitación, la señora Keller estaba en el suelo.",
        why: "<i>Als ich ins Zimmer kam, lag Frau Keller auf dem Boden.</i> <i>Als</i> para un hecho único en el pasado; <i>lag</i>, Präteritum de <i>liegen</i>, abre la principal."
      },
      {
        q: "Ordena las palabras.",
        tr: "Me quedo con él hasta que llegue el equipo.",
        why: "<i>Ich bleibe bei ihm, bis das Team kommt.</i> Tras <i>bis</i> el verbo <i>kommt</i> va al final."
      },
      {
        q: "Elige el artículo determinado correcto para cada sustantivo.",
        items: ["urgencia", "escala del dolor", "registro de caídas", "ictus", "central de emergencias", "hematoma"]
      },
      {
        tr: "Cuando entré en la habitación, la señora Keller no respondía. Activé enseguida la alarma y me quedé con ella hasta que llegó el equipo.",
        why: "En <i>ausgelöst</i> la <b>ö</b> es larga; en <i>geblieben</i> la <b>ie</b> es una <b>i</b> larga; en <i>Team</i> la <b>ea</b> se lee [iː], como en inglés."
      },
      {
        tr: "Documento la caída en el registro de caídas.",
        why: "En <i>dokumentiere</i> el acento cae en <b>tie</b>, con la <b>ie</b> larga; en <i>Sturzprotokoll</i> el acento principal está en <b>Sturz</b>, y en <i>Protokoll</i> cae en la última sílaba."
      }
    ]
  }
});
