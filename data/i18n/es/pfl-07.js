/* ============================================================
   Learner-language text (es) for data/core/pfl-07.js, unit pfl-u07.
   Keys point at ids in the neutral layer; arrays merge by index,
   so their length has to match core.
   Checked by scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("es", {
  "unit:pfl-u07": {
    title: "Hablar con pacientes y familiares",
    grammarNote: "explicar con palabras sencillas con las subordinadas con dass · las partículas doch, mal, ja · las peticiones corteses en Konjunktiv II · el estilo indirecto en Konjunktiv I · frases breves con el verbo en segundo lugar para las personas con demencia"
  },
  "lesson:pfl-u07-l1": {
    theme: "Explicar con palabras sencillas",
    title: "Explicar de forma sencilla",
    objectives: [
      "explicar al paciente lo que va a pasar, sin tecnicismos",
      "usar las subordinadas con dass: das heißt, dass...; wichtig ist, dass...",
      "comprobar que el paciente ha entendido",
      "remitir al médico las preguntas sobre el diagnóstico: Das bespricht der Arzt mit Ihnen"
    ],
    theory: [
      {
        h: "Dos registros, una explicación",
        p: "Entre colegas se dice <em>Gastroskopie</em>; al paciente se le dice <em>Magenspiegelung</em>. Lo mismo vale para muchas palabras de esta lección: para el paciente la <strong>Diagnose</strong> es <em>was ich habe</em> y la <strong>Prognose</strong> es <em>wie es weitergeht</em>. Para explicar de forma sencilla: frases breves, una información cada vez, palabras alemanas de todos los días en lugar de las latinas. Después se comprueba que el paciente ha entendido, no preguntando <em>Haben Sie verstanden?</em> (casi todos dicen que sí), sino pidiéndole que lo repita con sus palabras: <em>Können Sie mit Ihren eigenen Worten wiederholen, was morgen passiert?</em>"
      },
      {
        h: "Las subordinadas con dass",
        p: "La explicación se construye a menudo con <strong>dass</strong>: <em>Das heißt, dass...</em>, <em>Wichtig ist, dass...</em>, <em>Ich verstehe, dass...</em>, <em>Ich sage dem Arzt, dass...</em> Después de <em>dass</em> el verbo conjugado va <strong>al final</strong>: <em>dass der Arzt in Ihren Magen <b>schaut</b></em>, <em>dass Sie noch Fragen <b>haben</b></em>. Con un tiempo compuesto, al final va el auxiliar, detrás del participio: <em>dass Sie alles verstanden <b>haben</b></em>. Delante de <em>dass</em> siempre hay coma."
      },
      {
        contrast: "En español muchos términos técnicos son también palabras de la calle: un paciente dice él solo «gastroscopia», «ecografía», «hipertensión». En alemán no: el paciente dice <em>Magenspiegelung</em>, <em>Ultraschall</em>, <em>Bluthochdruck</em>, y la palabra latina que a ti te parece la más clara puede resultarle opaca. Explicar de forma sencilla en alemán significa traducir del latín al alemán, no solo acortar la frase. La sintaxis también cambia: en español «que» no mueve el verbo («le digo al médico que tiene preguntas»), y además lo pide a veces en subjuntivo («es importante que no coma»). El alemán no cambia de modo detrás de <em>dass</em>: <em>wichtig ist, dass Sie nichts essen</em> va en indicativo. Lo que cambia es el orden: el verbo va al final, <em>dass Sie noch Fragen haben</em>."
      },
      {
        trap: "<em>die Aufklärung</em> en planta no es una «aclaración» cualquiera: es la conversación con la que, por regla general, el médico informa al paciente antes de una prueba o una intervención, el equivalente del consentimiento informado. Tú puedes repetir con palabras sencillas lo que va a pasar y cómo prepararse, pero la información para el consentimiento y el diagnóstico son del médico: <em>Das bespricht der Arzt mit Ihnen.</em> Cuidado también con la ortografía: <em>das</em> con una s es artículo o pronombre (<em>Das heißt...</em>), <em>dass</em> con dos es la conjunción «que» (<em>..., dass der Arzt...</em>)."
      },
      {
        tip: "Cuando el paciente pregunta algo que no te corresponde, no dejes caer la pregunta: remítela y comprométete a algo que puedas cumplir. <em>Das bespricht der Arzt mit Ihnen. Ich sage ihm, dass Sie noch Fragen haben.</em> Así el paciente sabe que su pregunta ha llegado a alguien, y tú no has dicho nada que no pudieras decir."
      }
    ],
    grammar: {
      title: "Explicar con dass",
      note: "Oración principal, coma, <b>dass</b> y el verbo conjugado <b>al final</b>. Con un tiempo compuesto: participio y después auxiliar.",
      table: {
        head: ["oración principal", "dass + verbo al final"],
        rows: [
          ["Das heißt,", "dass der Arzt in Ihren Magen schaut."],
          ["Wichtig ist,", "dass Sie ab Mitternacht nichts mehr essen."],
          ["Ich sage dem Arzt,", "dass Sie noch Fragen haben."],
          ["Ich möchte sicher sein,", "dass Sie alles verstanden haben."]
        ]
      },
      examples: [
        { tr: "Mañana por la mañana le hacen una gastroscopia.", note: "Magenspiegelung: la palabra del paciente para Gastroskopie" },
        { tr: "Quiere decir que el médico mira dentro de su estómago con una cámara pequeña.", note: "dass: el verbo schaut va al final" },
        { tr: "Es importante que a partir de medianoche no coma nada.", note: "Wichtig ist, dass...: para la información que no hay que olvidar" },
        { tr: "Le digo al médico que usted todavía tiene preguntas.", note: "dass: el verbo haben va al final" },
        { tr: "Quiero estar segura de que lo ha entendido todo.", note: "tiempo compuesto: verstanden haben, el auxiliar al final" },
        { tr: "Eso lo hablará el médico con usted.", note: "la frase para las preguntas sobre el diagnóstico" }
      ]
    },
    vocab: [
      "el diagnóstico",
      "el pronóstico",
      "la exploración, la prueba",
      "la gastroscopia (palabra del paciente)",
      "la gastroscopia (término técnico)",
      "la información para el consentimiento antes de una prueba o intervención",
      "el término técnico",
      "explicar",
      "comprensible",
      "preguntar, pedir aclaraciones",
      "poco claro",
      "repetir"
    ],
    dialogue: [
      "Señor Schulz, le explico brevemente lo que pasa mañana. Mañana por la mañana le hacen una gastroscopia.",
      "Una gastroscopia, dijo el médico. ¿Qué es exactamente?",
      "Quiere decir que el médico mira dentro de su estómago con una cámara pequeña. Es importante que a partir de medianoche no coma nada.",
      "¿Y qué es lo que tengo? ¿Es algo grave?",
      "Entiendo que esté preocupado. Eso lo hablará el médico con usted.",
      "¿Viene hoy todavía?",
      "Le digo que usted todavía tiene preguntas. ¿Hay algo más que no esté claro?",
      "No, gracias. Me lo ha explicado bien."
    ],
    culture: {
      title: "Una mirada alemana: quién informa al paciente",
      text: "<p>En Alemania la ley exige que el paciente sea informado antes de una prueba o una intervención en una conversación, la <i>Aufklärung</i>, con un lenguaje que pueda entender. Esa conversación la hace por regla general el médico, y el paciente firma a menudo un formulario. Las enfermeras y los enfermeros explican la preparación y la parte práctica: cuándo dejar de comer, qué traer, cómo será el día.</p><p>Muchos centros usan también materiales en <i>Einfache Sprache</i> o <i>Leichte Sprache</i>, es decir, textos con frases breves y palabras comunes, parecidos a lo que en español se llama «lectura fácil». Quien aprende alemán los encuentra a menudo más claros que los textos oficiales: vale la pena leerlos también para uno mismo.</p>"
    },
    exercises: [
      {
        q: "El paciente pregunta: «Was habe ich denn?» El médico todavía no ha hablado con él. ¿Qué respuesta respeta los límites de tu función?",
        opts: [
          "Das bespricht der Arzt mit Ihnen.",
          "Das ist sicher nichts Schlimmes.",
          "Das darf ich nicht sagen, fragen Sie nicht."
        ],
        why: "El diagnóstico lo comunica el médico: <b>Das bespricht der Arzt mit Ihnen.</b> <i>Das ist sicher nichts Schlimmes</i> es una tranquilidad que no puedes dar, y la tercera respuesta cierra la conversación en lugar de encauzar la pregunta."
      },
      {
        tr: "El presente de erklären, todas las personas.",
        why: "<i>Erkläre, erklärst, erklärt, erklären, erklärt, erklären</i>: verbo regular. El prefijo <i>er-</i> no se separa nunca y la <b>ä</b> se mantiene en todas las personas."
      },
      {
        q: "Completa: «Wichtig ist, ___ Sie ab Mitternacht nichts mehr essen.»",
        hint: "la conjunción «que»",
        why: "<b>dass</b>, con dos s: es la conjunción que abre la subordinada, y por eso el verbo <i>essen</i> va al final."
      },
      {
        q: "Completa la frase.",
        tr: "Quiere decir que el médico mira dentro de su estómago con una cámara pequeña.",
        why: "<i>Das heißt, <b>dass</b> der Arzt ... in Ihren Magen <b>schaut</b></i> (también vale <i>sieht</i>): después de <i>dass</i> el verbo conjugado va al final."
      },
      {
        q: "Une cada palabra con su significado.",
        pairs: ["el diagnóstico", "el pronóstico", "la información para el consentimiento antes de una intervención", "la exploración, la prueba"]
      },
      {
        q: "Elige el artículo determinado correcto para cada sustantivo.",
        items: ["diagnóstico", "término técnico", "estómago", "exploración, prueba", "conversación", "cita"]
      },
      {
        q: "¿Qué frases son correctas?",
        opts: [
          "Ich sage dem Arzt, dass Sie noch Fragen haben.",
          "Wichtig ist, dass Sie ab Mitternacht nichts mehr essen.",
          "Das heißt, dass der Arzt schaut in Ihren Magen.",
          "Ich verstehe, dass Sie Angst haben.",
          "Ich hoffe, dass Sie haben gut geschlafen."
        ],
        why: "Después de <i>dass</i> el verbo conjugado va al final: <i>dass der Arzt in Ihren Magen <b>schaut</b></i>, <i>dass Sie gut geschlafen <b>haben</b></i>. Con el tiempo compuesto, el auxiliar va detrás del participio."
      },
      {
        q: "Ordena las palabras.",
        tr: "Le digo al médico que usted todavía tiene preguntas.",
        why: "<i>Ich sage dem Arzt, dass Sie noch Fragen haben.</i> En la principal el verbo <i>sage</i> está en segundo lugar; después de la coma, <i>dass</i> manda <i>haben</i> al final."
      },
      {
        q: "Traduce para el paciente, sin tecnicismos: «Mañana por la mañana le hacen una gastroscopia.»",
        why: "<i>Morgen früh bekommen Sie eine Magenspiegelung.</i> Al paciente se le dice <b>Magenspiegelung</b>, no <i>Gastroskopie</i>; «mañana por la mañana» es <b>morgen früh</b>. También vale <i>Sie haben morgen früh eine Magenspiegelung</i>."
      },
      {
        q: "El día antes de la prueba.",
        setting: "Al señor Schulz le hacen mañana una gastroscopia y está preocupado. El médico todavía no le ha hablado de resultados.",
        lines: [
          { tr: "¿Qué tengo? ¿Es grave?" },
          { tr: "Responde que entiendes su preocupación y que eso lo hablará el médico con él.", answerTr: "Entiendo que esté preocupado. Eso lo hablará el médico con usted." },
          { tr: "¿Y qué es una gastroscopia?" },
          { tr: "Explícalo con palabras sencillas.", answerTr: "Quiere decir que el médico mira dentro de su estómago con una cámara pequeña." },
          { tr: "¿Esta noche puedo comer algo todavía?" },
          { tr: "Responde que sí, pero que es importante no comer nada a partir de medianoche.", answerTr: "Sí, pero es importante que a partir de medianoche no coma nada." }
        ]
      },
      {
        tr: "Entiendo que esté preocupado. Eso lo hablará el médico con usted.",
        why: "En <i>verstehe</i> la <b>st</b> al principio de la raíz se pronuncia [ʃt], como «sht»; en <i>bespricht</i> la <b>sp</b> es [ʃp] y la <b>ch</b> detrás de <b>i</b> es [ç], un sonido suave que el español no tiene; en <i>Arzt</i> la <b>z</b> es [ts]."
      },
      {
        tr: "Le digo al médico que usted todavía tiene preguntas.",
        why: "En <i>Ich</i> la <b>ch</b> detrás de <b>i</b> es [ç]; en <i>noch</i> la <b>ch</b> detrás de <b>o</b> es [x], como la jota de «jamón»; en <i>Fragen</i> la <b>a</b> es larga."
      }
    ]
  },
  "lesson:pfl-u07-l2": {
    theme: "Tranquilizar y animar",
    title: "Tranquilizar y animar",
    objectives: [
      "tranquilizar a un paciente con miedo, sin prometer lo que no depende de ti",
      "usar las partículas doch, mal y ja para hacer una petición más cálida",
      "hacer peticiones y propuestas corteses en Konjunktiv II: könnten, wäre",
      "elogiar un pequeño avance"
    ],
    theory: [
      {
        h: "Las partículas doch, mal, ja",
        p: "Las <strong>Modalpartikeln</strong> son palabras breves, sin acento, que no cambian el contenido de la frase sino el tono. <em>doch</em> en una invitación la hace alentadora, como «usted tranquilo, siéntese»: <em>Setzen Sie sich <b>doch</b> erst mal hin.</em> <em>mal</em> hace ligera la petición, como «un momentito»: <em>Atmen Sie <b>mal</b> tief ein.</em> <em>ja</em> recuerda algo que sabemos los dos, y por eso tranquiliza: <em>Ich bin <b>ja</b> direkt neben Ihnen.</em> Van en medio de la frase, detrás del verbo y de los pronombres, y nunca en primer lugar. A menudo se combinan: <em>doch mal</em>, <em>doch erst mal</em>."
      },
      {
        h: "El Konjunktiv II de cortesía",
        p: "Para pedir o proponer con amabilidad se usa el <strong>Konjunktiv II</strong>, como el condicional español: <em><b>Könnten</b> Sie mir sagen, wo es weh tut?</em> <em><b>Wäre</b> es Ihnen recht, wenn ich kurz bei Ihnen bleibe?</em> <em>Es <b>wäre</b> gut, wenn Sie heute ein paar Schritte gehen.</em> Las formas más usadas son pocas: <em>könnte, wäre, hätte, würde</em>. <em>Könnte</em> sale del Präteritum <em>konnte</em> con Umlaut. En la pregunta el verbo conjugado va en primer lugar, como en toda pregunta de sí o no."
      },
      {
        contrast: "El español no tiene una clase de partículas como la alemana. Algo se acerca: «pues siéntese», «ya verá como sale bien», «venga, un pasito más». Pero «pues» y «ya» solo cubren una parte, y el resto del trabajo lo hacen el diminutivo («un momentito», «un poquito de agua»), el «usted tranquilo» y el tono de voz. El alemán no suaviza con diminutivos en planta, así que la calidez la pone la partícula: sin <em>doch</em>, <em>mal</em> o <em>ja</em> la frase sigue siendo correcta, pero suena más fría y más a orden (<em>Setzen Sie sich hin.</em>). El Konjunktiv II, en cambio, te resultará cercano: <em>Könnten Sie...?</em> es casi palabra por palabra «¿Podría...?», un condicional y no un subjuntivo. No lo confundas con tu subjuntivo: el «es mejor que camine» español pide subjuntivo, mientras que <em>Es wäre gut, wenn Sie gehen</em> deja el verbo de <em>wenn</em> en indicativo. Ojo con la entonación: un <em>doch</em> dicho con impaciencia suena a reproche («pero siéntese ya»)."
      },
      {
        trap: "<em>doch</em> aquí no significa «pero» ni «sin embargo», y <em>mal</em> no tiene nada que ver con el «mal» español: es la forma breve de <em>einmal</em>, «una vez». Cuidado también con <em>versprechen</em> y <em>sich versprechen</em>: <em>Ich kann Ihnen nichts versprechen</em> significa «no le puedo prometer nada», pero <em>Ich habe mich versprochen</em> significa «me he equivocado al hablar». Y las frases que parecen tranquilizadoras, <em>Alles wird gut</em> o <em>Sie fallen nicht</em>, son promesas que no dependen de ti: mejor di lo que haces tú, <em>Ich bleibe bei Ihnen.</em>"
      },
      {
        tip: "Una secuencia que funciona casi siempre: ponle nombre al miedo (<em>Ich verstehe, dass Sie Angst haben</em>), di lo que haces tú (<em>Ich bin ja direkt neben Ihnen</em>), propón un paso pequeño (<em>Setzen Sie sich doch erst mal an die Bettkante</em>) y elogia lo que ha salido bien (<em>Das haben Sie gut gemacht</em>)."
      }
    ],
    grammar: {
      title: "Partículas y peticiones corteses",
      note: "<b>doch</b>, <b>mal</b>, <b>ja</b>: sin acento, en medio de la frase, nunca en primer lugar. Para pedir con amabilidad: <b>könnten</b>, <b>wäre</b>, <b>würden</b>.",
      table: {
        head: ["forma", "qué hace", "ejemplo"],
        rows: [
          ["doch", "invitación alentadora, «usted tranquilo»", "Setzen Sie sich doch erst mal hin."],
          ["mal", "petición ligera, «un momentito»", "Atmen Sie mal tief ein."],
          ["ja", "algo que sabemos los dos", "Ich bin ja direkt neben Ihnen."],
          ["könnten", "pregunta cortés", "Könnten Sie mir kurz sagen, wo es weh tut?"],
          ["wäre", "propuesta cortés", "Wäre es Ihnen recht, wenn ich kurz bei Ihnen bleibe?"]
        ]
      },
      examples: [
        { tr: "Siéntese primero, tranquilo.", note: "doch erst mal: invitación amable, paso a paso" },
        { tr: "Inspire y espire con calma.", note: "mal: la petición suena más ligera" },
        { tr: "Esto ya lo conoce de ayer.", note: "ja: recuerda algo conocido, tranquiliza" },
        { tr: "¿Podría decirme brevemente dónde le duele?", note: "Konjunktiv II de können: könnten" },
        { tr: "¿Le parecería bien que me quedara un momento con usted?", note: "Konjunktiv II de sein: wäre" },
        { tr: "Sería bueno que hoy diera unos pasos.", note: "Es wäre gut, wenn...: un consejo sin orden" }
      ]
    },
    vocab: [
      "el miedo",
      "la preocupación",
      "tranquilizar, calmar",
      "animar",
      "el ánimo, el aliento",
      "nervioso, alterado",
      "consolar",
      "el avance, el progreso",
      "prometer",
      "sincero, honesto",
      "confiado, optimista",
      "profundo; profundamente"
    ],
    dialogue: [
      "Tengo tanto miedo de levantarme. Ayer me mareé.",
      "Entiendo que tenga miedo. Siéntese primero en el borde de la cama, tranquila.",
      "¿Y si me caigo?",
      "Estoy aquí mismo, a su lado. Inspire y espire con calma.",
      "Bien. ¿Podría darme la mano, por favor?",
      "Claro. ¿Le parecería bien que fuéramos hasta la ventana?",
      "Lo intento. Uf, qué cansado ha sido.",
      "Lo ha hecho muy bien. Mañana lo volvemos a intentar, paso a paso."
    ],
    culture: {
      title: "Una mirada alemana: primero se pregunta, después se toca",
      text: "<p>En las plantas alemanas se trata de <i>Sie</i> a todo paciente adulto y se le llama por el apellido: <i>Frau Wagner</i>, no por el nombre de pila. El tuteo que en muchos hospitales españoles es habitual con los pacientes aquí sonaría a falta de respeto. También el contacto físico se anuncia o se pide: <i>Darf ich Ihre Hand nehmen?</i> Muchos pacientes agradecen una mano en el hombro, otros no, y la pregunta les deja la elección.</p><p>El elogio es más sobrio que en español: <i>Das haben Sie gut gemacht</i> ya es un cumplido cálido. Un entusiasmo muy fuerte por un paso pequeño puede sonar como si se le hablara a un niño.</p>"
    },
    exercises: [
      {
        q: "Quieres invitar a la paciente a sentarse de forma amable y alentadora. ¿Qué frase es correcta?",
        opts: [
          "Setzen Sie sich doch erst mal hin.",
          "Sie setzen sich jetzt hin.",
          "Setzen Sie doch sich erst mal hin."
        ],
        why: "<b>doch erst mal</b> hace cálida la invitación. La partícula va detrás del pronombre <i>sich</i>, no delante. <i>Sie setzen sich jetzt hin</i> es correcta, pero suena a orden."
      },
      {
        tr: "El Konjunktiv II de können, todas las personas.",
        why: "<i>Könnte, könntest, könnte, könnten, könntet, könnten</i>: se parte del Präteritum <i>konnte</i> y se añade el Umlaut, <b>ö</b>."
      },
      {
        q: "Completa: «Es ___ gut, wenn Sie heute ein paar Schritte gehen.»",
        hint: "Konjunktiv II de sein",
        why: "<b>wäre</b>: «sería». Con <i>Es wäre gut, wenn...</i> das un consejo sin dar una orden."
      },
      {
        q: "Completa con las partículas doch y ja.",
        tr: "Siéntese primero, tranquila. Estoy aquí mismo, a su lado, ya lo ve.",
        why: "<i>Setzen Sie sich <b>doch</b> erst mal hin</i>: invitación alentadora. <i>Ich bin <b>ja</b> direkt neben Ihnen</i>: recuerda algo que la paciente ya ve, y la tranquiliza."
      },
      {
        q: "¿Qué frases tranquilizan sin prometer demasiado?",
        opts: [
          "Ich bleibe bei Ihnen.",
          "Es wird ganz sicher alles gut.",
          "Wenn Sie etwas brauchen, drücken Sie die Klingel.",
          "Das schaffen Sie schon, Sie sind ja nicht krank.",
          "Ich verstehe, dass Sie Angst haben."
        ],
        why: "Tranquiliza lo que depende de ti: quedarte, estar localizable, tomarte en serio el miedo. <i>Es wird ganz sicher alles gut</i> es una promesa que no puedes hacer, y <i>Sie sind ja nicht krank</i> niega lo que el paciente siente."
      },
      {
        q: "Elige el artículo determinado correcto para cada sustantivo.",
        items: ["miedo", "avance, progreso", "ánimo, aliento", "ventana", "cama", "paso"]
      },
      {
        q: "Une cada frase con su traducción.",
        pairs: ["Siéntese, tranquilo.", "Respire hondo un momentito.", "Esto ya lo conoce.", "¿Podría ayudarme?"]
      },
      {
        q: "Ordena las palabras.",
        tr: "¿Le parecería bien que me quedara un momento con usted?",
        why: "<i>Wäre es Ihnen recht, wenn ich kurz bei Ihnen bleibe?</i> En la pregunta el verbo <i>wäre</i> va en primer lugar; después de <i>wenn</i> el verbo <i>bleibe</i> va al final."
      },
      {
        q: "Traduce con el Konjunktiv II: «¿Podría decirme dónde le duele?»",
        why: "<i>Könnten Sie mir sagen, wo es weh tut?</i> (también se escribe <i>wehtut</i>). Después de <i>wo</i> el verbo va al final."
      },
      {
        q: "La primera vez de pie.",
        setting: "La señora Wagner tiene que levantarse por primera vez después de la operación y tiene miedo.",
        lines: [
          { tr: "Tengo tanto miedo de levantarme." },
          { tr: "Responde que entiendes su miedo e invítala a sentarse primero en el borde de la cama.", answerTr: "Entiendo que tenga miedo. Siéntese primero en el borde de la cama, tranquila." },
          { tr: "¿Y si me caigo?" },
          { tr: "Tranquilízala: estás justo a su lado e iréis despacio.", answerTr: "Estoy aquí mismo, a su lado. Vamos muy despacio." },
          { tr: "Uf, qué cansado ha sido." },
          { tr: "Elógiala y dile que mañana lo volvéis a intentar.", answerTr: "Lo ha hecho muy bien. Mañana lo volvemos a intentar." }
        ]
      },
      {
        tr: "Estoy aquí mismo, a su lado. Inspire y espire con calma.",
        why: "<i>ja</i> se pronuncia [jaː], con la <b>j</b> como la «y» de «yo»; en <i>ruhig</i> la <b>g</b> final es [ç]; en <i>ein</i> el diptongo <b>ei</b> es [aɪ], como en «hay». La partícula <i>ja</i> aquí no lleva acento."
      },
      {
        tr: "Siéntese primero, tranquilo.",
        why: "En <i>Setzen</i> la <b>s</b> inicial es sonora [z], un sonido que el español casi no tiene, y la <b>tz</b> es [ts]; en <i>doch</i> la <b>ch</b> detrás de <b>o</b> es [x], en <i>sich</i> detrás de <b>i</b> es [ç]. <i>doch</i> y <i>mal</i> quedan sin acento."
      }
    ]
  },
  "lesson:pfl-u07-l3": {
    theme: "Familiares y secreto profesional",
    title: "Informar a los familiares",
    objectives: [
      "dar a los familiares solo la información que el paciente ha autorizado",
      "referir lo que ha dicho el paciente con el Konjunktiv I: er habe, sie sei",
      "remitir al médico las preguntas sobre diagnóstico y pruebas",
      "explicar por qué no se da información por teléfono"
    ],
    theory: [
      {
        h: "Qué se puede decir, y a quién",
        p: "También las enfermeras y los enfermeros están obligados por la <strong>Schweigepflicht</strong>, el secreto profesional, y el secreto vale también frente a los familiares. Antes de informar a un <strong>Angehöriger</strong> hace falta el <strong>Einverständnis</strong> del paciente: <em>Ihr Vater ist damit einverstanden, dass wir Sie informieren.</em> Incluso entonces, tú cuentas cómo está el paciente y lo que dice; el diagnóstico, los resultados de las pruebas y el pronóstico los comunica el médico: <em>Das bespricht der Arzt mit Ihnen. Ich kann gern ein Arztgespräch für Sie vereinbaren.</em> Por teléfono no se ve quién llama, y por eso muchos centros no dan información: <em>Am Telefon darf ich leider keine Auskunft geben.</em>"
      },
      {
        h: "El Konjunktiv I para referir",
        p: "Para referir las palabras de otro el alemán tiene el <strong>Konjunktiv I</strong>: raíz del verbo + <em>-e</em>. <em>Ich habe gut geschlafen</em> se convierte en <em>Er sagt, er <b>habe</b> gut geschlafen.</em> <em>Sein</em> es irregular: <em>ich sei, er sei, wir seien, sie seien</em>. Se usa sobre todo en la tercera persona del singular, porque ahí se distingue del indicativo. Donde el Konjunktiv I coincide con el indicativo (<em>sie haben</em>), se toma el Konjunktiv II: <em>Sie sagen, sie <b>hätten</b> Angst.</em> Hablando, muchos usan simplemente <em>dass</em> con indicativo: <em>Sie hat gesagt, dass sie gut geschlafen hat.</em> En el registro de enfermería el Konjunktiv I es la forma típica: <em>Patientin gibt an, sie <b>habe</b> keine Schmerzen.</em> Indica que es una afirmación del paciente, no un hecho que tú hayas comprobado."
      },
      {
        contrast: "El nombre engaña: el Konjunktiv I no es tu subjuntivo. El subjuntivo español expresa deseo, duda, orden o valoración («quiero que duerma», «dudo que haya dormido»), mientras que el estilo indirecto de una afirmación va en indicativo: «dice que ha dormido bien». Si pones subjuntivo, cambias el sentido: «le dice que se siente» es una orden, no una información. El Konjunktiv I hace justo lo contrario: no expresa duda ni deseo, solo marca que la frase la ha dicho otro, como el «refiere» de vuestros registros (<em>sie sei müde</em>, «refiere cansancio»). Con los familiares las costumbres también cambian. En España la ley de autonomía del paciente prevé informar a las personas vinculadas en la medida en que el paciente lo permita, incluso de forma tácita, y en la práctica la familia suele estar muy presente. En Alemania la regla es más estricta: la <em>Schweigepflicht</em>, que es un deber penal como vuestro secreto profesional, y la protección de datos piden el consentimiento del paciente, y el hijo o la esposa no tienen derecho automático a la información."
      },
      {
        trap: "<em>er habe</em> no es un error por <em>er hat</em>: es la forma del estilo indirecto. <em>der Angehörige</em> es un adjetivo usado como sustantivo y cambia la terminación: <em>der Angehörige</em>, pero <em>ein Angehöriger</em>, y en plural <em>die Angehörigen</em>. <em>Auskunft geben</em> es «dar información a petición de alguien»; no lo confundas con <em>Aufklärung</em>, la información del médico antes del consentimiento. Y <em>Vorsorgevollmacht</em> es un poder preventivo, la persona que decide por el paciente; las instrucciones previas o voluntades anticipadas, lo que el paciente deja escrito sobre sus tratamientos, son otra cosa: en alemán, <em>Patientenverfügung</em>."
      },
      {
        tip: "Si un familiar insiste en saber el diagnóstico, no hace falta decirle que no: ofrécele el camino correcto. <em>Das bespricht der Arzt mit Ihnen. Ich kann gern ein Arztgespräch für Sie vereinbaren.</em> El familiar consigue una cita, y tú te quedas dentro de lo que puedes decir."
      }
    ],
    grammar: {
      title: "Referir con el Konjunktiv I",
      note: "Konjunktiv I = raíz + <b>-e</b>: er <b>habe</b>, sie <b>fühle</b>. <b>sein</b>: sei, seien. Si coincide con el indicativo, se usa el Konjunktiv II: sie <b>hätten</b>.",
      table: {
        head: ["lo que dice el paciente", "referido"],
        rows: [
          ["Ich habe gut geschlafen.", "Er sagt, er habe gut geschlafen."],
          ["Ich bin müde.", "Sie gibt an, sie sei müde."],
          ["Ich fühle mich besser.", "Sie sagt, sie fühle sich besser."],
          ["Wir haben Angst.", "Sie sagen, sie hätten Angst."]
        ]
      },
      examples: [
        { tr: "Su madre ha dicho que ha dormido bien.", note: "hablando: dass con indicativo" },
        { tr: "Su madre dice que ha dormido bien.", note: "Konjunktiv I: sie habe" },
        { tr: "La paciente refiere cansancio.", note: "registro: angeben + Konjunktiv I, sie sei" },
        { tr: "El paciente refiere no tener dolor.", note: "er habe: una afirmación del paciente, no una medición" },
        { tr: "Por teléfono, lamentablemente, no puedo dar información.", note: "Auskunft geben: informar a petición" },
        { tr: "Su padre está de acuerdo en que la informemos.", note: "damit einverstanden, dass...: primero el consentimiento" }
      ]
    },
    vocab: [
      "el familiar (ein Angehöriger, plural die Angehörigen)",
      "el secreto profesional",
      "la información (dada a petición)",
      "el consentimiento",
      "de acuerdo, conforme",
      "el poder preventivo (para cuando ya no se pueda decidir)",
      "declarar, referir",
      "confidencial",
      "transmitir, pasar a otra persona",
      "la conversación con el médico",
      "el horario de visitas",
      "los cuidados paliativos"
    ],
    dialogue: [
      "Buenos días, soy la hija del señor Schulz. ¿Cómo está mi padre?",
      "Buenos días, señora Schulz. Su padre está de acuerdo en que la informemos. Esta mañana ha dicho que había dormido bien.",
      "¿Y la prueba? ¿Qué han encontrado?",
      "Eso lo hablará el médico con usted. Con mucho gusto le pido una cita con él.",
      "¿Puedo hablar con el médico hoy mismo?",
      "Ahora está en una reunión. Le transmito su pregunta.",
      "Gracias. Quizá llame también mi hermana.",
      "Por teléfono, lamentablemente, no podemos dar información. Lo mejor es que venga con usted a la conversación con el médico."
    ],
    culture: {
      title: "Una mirada alemana: quién decide cuando el paciente no puede",
      text: "<p>En Alemania el secreto profesional está recogido en el código penal y vale para médicos, enfermeras y enfermeros. El paciente puede liberar al personal del secreto frente a personas concretas, y el centro lo anota.</p><p>Cuando el paciente ya no puede decidir por sí mismo, cuenta quién tiene una <i>Vorsorgevollmacht</i>, un poder otorgado por adelantado, o un <i>Betreuer</i>, una persona nombrada por el juzgado para apoyarle. Quiénes son estas personas suele constar en la documentación: si un familiar dice que tiene un poder, se comprueba allí o se pregunta al médico, no se decide de palabra en el pasillo. Qué se puede decir y a quién lo establecen las normas del centro junto con el médico.</p>"
    },
    exercises: [
      {
        q: "Cuéntale a la hija lo que ha dicho el padre: «Ich habe gut geschlafen.» ¿Qué frase es correcta?",
        opts: [
          "Er hat gesagt, er habe gut geschlafen.",
          "Er hat gesagt, er hätte gut schlafen.",
          "Er hat gesagt, ich habe gut geschlafen."
        ],
        why: "En el estilo indirecto el pronombre pasa a la tercera persona (<i>er</i>) y el verbo al Konjunktiv I: <b>er habe</b> gut geschlafen. <i>hätte ... schlafen</i> no tiene participio, y <i>ich habe</i> te hace hablar a ti."
      },
      {
        tr: "El Konjunktiv I de sein: ich, er/sie, wir, sie.",
        why: "<i>Sei, sei, seien, seien</i>: la primera y la tercera persona del singular son iguales y no tienen terminación. Es la forma más usada en el estilo indirecto: <i>sie sei müde</i>."
      },
      {
        q: "Completa (en el registro): «Die Patientin gibt an, sie ___ müde.»",
        hint: "Konjunktiv I de sein",
        why: "<b>sei</b>: en el registro el Konjunktiv I muestra que es una afirmación de la paciente. En el alemán hablado también se oye <i>wäre</i>."
      },
      {
        q: "Completa con el Konjunktiv I de haben.",
        tr: "El paciente refiere no tener dolor. Dice que ha dormido bien.",
        why: "<i>er <b>habe</b> keine Schmerzen</i>, <i>er <b>habe</b> gut geschlafen</i>: raíz <i>hab-</i> + <i>-e</i>, en tercera persona."
      },
      {
        q: "¿Qué frases respetan el secreto profesional?",
        opts: [
          "Am Telefon darf ich leider keine Auskunft geben.",
          "Ihr Vater hat Krebs, aber sagen Sie es ihm nicht.",
          "Das bespricht der Arzt mit Ihnen.",
          "Der Patient im Nachbarbett hat das auch.",
          "Ich frage Ihren Vater, ob wir Sie informieren dürfen."
        ],
        why: "No se da información por teléfono, el diagnóstico lo comunica el médico, y antes de informar a un familiar se pregunta al paciente. Las otras dos frases revelan datos que no corresponden ni al familiar ni a ti."
      },
      {
        q: "Elige el artículo determinado correcto para cada sustantivo.",
        items: ["secreto profesional", "información (dada a petición)", "consentimiento", "conversación con el médico", "poder preventivo", "teléfono"]
      },
      {
        q: "Une cada palabra con su significado.",
        pairs: ["el secreto profesional", "la información (dada a petición)", "el consentimiento", "el poder preventivo"]
      },
      {
        q: "Ordena las palabras.",
        tr: "Su padre está de acuerdo en que la informemos.",
        why: "<i>Ihr Vater ist damit einverstanden, dass wir Sie informieren.</i> <i>damit</i> anticipa la subordinada; después de <i>dass</i> el verbo <i>informieren</i> va al final, y en indicativo, donde el español pone subjuntivo («que la informemos»)."
      },
      {
        q: "Traduce para la hija: «Su madre dice que hoy se siente mejor.»",
        why: "<i>Ihre Mutter sagt, sie fühle sich heute besser</i>, con el Konjunktiv I; hablando también vale <i>Ihre Mutter sagt, dass sie sich heute besser fühlt</i>. «Hoy» es <b>heute</b>."
      },
      {
        q: "La hija en la planta.",
        setting: "La hija del señor Schulz pregunta cómo está. El padre ha dado su consentimiento para que la informen; el médico todavía no ha hablado con ella.",
        lines: [
          { tr: "¿Cómo está mi padre?" },
          { tr: "Cuéntale que esta mañana ha dicho que había dormido bien.", answerTr: "Esta mañana ha dicho que había dormido bien." },
          { tr: "¿Qué ha salido en la prueba?" },
          { tr: "Remítela al médico y ofrécele una cita.", answerTr: "Eso lo hablará el médico con usted. Con mucho gusto le pido una cita con él." },
          { tr: "Mi hermana llama esta noche. ¿Puede contárselo todo?" },
          { tr: "Explica que por teléfono no podéis dar información.", answerTr: "Por teléfono, lamentablemente, no podemos dar información." }
        ]
      },
      {
        tr: "Eso lo hablará el médico con usted. Con mucho gusto le pido una cita con él.",
        why: "En <i>Arztgespräch</i> el acento cae en <b>Arzt</b>, la <b>sp</b> es [ʃp] y la <b>ch</b> detrás de <b>ä</b> es [ç]; en <i>vereinbaren</i> el acento cae en <b>ein</b>."
      },
      {
        tr: "Por teléfono, lamentablemente, no puedo dar información.",
        why: "En <i>Telefon</i> el acento cae en la última sílaba, <b>fon</b>, no en la penúltima como en «teléfono»; en <i>leider</i> el diptongo <b>ei</b> es [aɪ]; en <i>Auskunft</i> el acento cae en <b>Aus</b>."
      }
    ]
  },
  "lesson:pfl-u07-l4": {
    theme: "Demencia",
    title: "Personas con demencia",
    objectives: [
      "hablar con una persona con demencia con frases breves y el verbo en segundo lugar",
      "responder según la validación: acoger la emoción en lugar de corregir",
      "evitar el «nosotros» infantil y el tono de hablarle a un niño",
      "reconocer cuándo una confusión repentina hay que comunicarla"
    ],
    theory: [
      {
        h: "Frases breves, el verbo en segundo lugar",
        p: "Con una persona con demencia cada frase lleva <strong>una sola información</strong>. Se usan oraciones principales breves, con el verbo conjugado en <strong>segundo lugar</strong>; en el primero puede ir el tiempo, que orienta: <em><b>Jetzt</b> waschen Sie Ihr Gesicht.</em> <em><b>Nach dem Frühstück</b> kommt Ihre Tochter.</em> Nada de subordinadas, nada de dos instrucciones en la misma frase. Uno se presenta cada vez, con su nombre: <em>Ich bin Anna. Ich helfe Ihnen heute.</em> Y se da el objeto mientras se nombra: <em>Hier ist Ihr Waschlappen.</em>"
      },
      {
        h: "La validación",
        p: "La <strong>Validation</strong> parte de una idea sencilla: los recuerdos se pierden, las emociones se quedan. Si la señora Lehmann quiere volver a casa porque sus hijos salen del colegio, corregirla (<em>Ihre Kinder sind doch erwachsen</em>) la pone frente a una pérdida y no la calma. En cambio, se le pone nombre a la emoción (<em>Sie machen sich Sorgen um Ihre Kinder</em>) y se la invita a contar (<em>Erzählen Sie mir von Ihren Kindern</em>). Conocer su <strong>Biografie</strong> ayuda a entender de qué habla. Hay que distinguir una cosa: si una persona se vuelve <strong>confusa de repente</strong>, no es la demencia que conoces, y es un cambio que hay que comunicar enseguida al médico."
      },
      {
        contrast: "En España y en América Latina se oye a menudo «abuelita», «cariño», «mi niña» o el tuteo con los mayores en las residencias, y muchas veces se dice con afecto. En Alemania el mismo tono suena infantil: también con una persona con demencia se dice <em>Sie</em> y <em>Frau Lehmann</em>, salvo que sea ella quien pida otra cosa. Lo mismo vale para el «nosotros» de los cuidados («¿cómo estamos hoy?», «¿ya hemos comido?», <em>Haben wir heute schon gegessen?</em>), que en alemán se llama con ironía <em>Pflege-Wir</em>: se dice <em>Sie</em> cuando lo hace la persona. También la sintaxis ayuda: en español el verbo de la subordinada va pronto («cuando sus hijos vuelvan»), en alemán la subordinada lo manda al final, detrás de todo lo demás, y para entender quién hace qué hay que retener la frase entera. Las principales breves quitan ese esfuerzo."
      },
      {
        trap: "<em>Demenz</em> y <em>Vergesslichkeit</em> no son sinónimos: los despistes le pasan a cualquiera, la demencia es una enfermedad que cambia la vida diaria. Al paciente y a los familiares no se les dice <em>Sie ist halt dement</em>, igual que en español «está demente» suena a insulto, sino <em>Frau Lehmann lebt mit einer Demenz.</em> Y <em>verwirrt</em> describe un estado, no a la persona: una <em>plötzliche Verwirrtheit</em>, un cuadro confusional agudo, puede tener una causa física nueva, y se comunica, no se da por hecho."
      },
      {
        tip: "Antes de hablar, ponte delante de la persona, a la altura de sus ojos, y espera a que te mire. Después una frase, una pausa, la frase siguiente. Si no responde, repite con las mismas palabras: una frase reformulada es, para ella, una frase nueva que entender."
      }
    ],
    grammar: {
      title: "Frases que se siguen bien",
      note: "Una información por frase, el verbo conjugado en <b>segundo lugar</b>, el tiempo al principio. Se acoge la emoción, no se corrige.",
      table: {
        head: ["en lugar de", "mejor"],
        rows: [
          ["Ihre Kinder sind doch längst erwachsen.", "Sie machen sich Sorgen um Ihre Kinder."],
          ["Haben wir heute schon gefrühstückt?", "Haben Sie schon gefrühstückt?"],
          ["Wenn Sie fertig sind und gefrühstückt haben, kommt Ihre Tochter.", "Nach dem Frühstück kommt Ihre Tochter."],
          ["Das habe ich Ihnen doch schon gesagt.", "Ich bin Anna. Ich helfe Ihnen heute."]
        ]
      },
      examples: [
        { tr: "Soy Anna. Hoy la ayudo yo.", note: "presentarse cada vez, dos frases breves" },
        { tr: "Ahora se lava la cara.", note: "jetzt en primer lugar, el verbo waschen en segundo" },
        { tr: "Aquí tiene su manopla.", note: "nombrar el objeto mientras se da" },
        { tr: "Está preocupada por sus hijos.", note: "validación: ponerle nombre a la emoción" },
        { tr: "Cuénteme de sus hijos.", note: "invitar a contar, en lugar de corregir" },
        { tr: "Después del desayuno viene su hija.", note: "el tiempo en primer lugar, el verbo kommt en segundo" }
      ]
    },
    vocab: [
      "la demencia",
      "los despistes, la falta de memoria",
      "confuso, desorientado",
      "el estado confusional",
      "la desorientación",
      "la validación (método Validation)",
      "el sentimiento, la emoción",
      "el recuerdo",
      "la biografía, la historia de vida",
      "la rutina diaria, la estructura del día",
      "contradecir, llevar la contraria",
      "familiar, conocido"
    ],
    dialogue: [
      "Buenos días, señora Lehmann. Soy Anna. Hoy la ayudo a lavarse.",
      "Tengo que irme a casa. Mis niños salen enseguida del colegio.",
      "Está preocupada por sus hijos.",
      "Sí. Cuando llegan a casa tienen hambre, ¿sabe?",
      "Sus hijos son muy importantes para usted. Cuénteme de sus hijos.",
      "Peter siempre fue muy travieso. Y Susanne cantaba tan bien.",
      "Qué bonito. Ahora se lava la cara. Aquí tiene su manopla.",
      "Ah, sí. Esto lo sé hacer yo sola."
    ],
    culture: {
      title: "Una mirada alemana: validación y trabajo biográfico",
      text: "<p>El método <i>Validation</i> nació en Estados Unidos con Naomi Feil; en Alemania está muy extendida su variante <i>Integrative Validation</i>, desarrollada por Nicole Richard. En las residencias de mayores se habla de ella en la formación y en las reuniones de equipo, y muchas enfermeras la conocen con ese nombre.</p><p>También se apoyan en la <i>Biografiearbeit</i>, el trabajo con la historia de vida: al ingreso, los familiares cuentan el oficio, las costumbres, los nombres importantes y los pequeños rituales de la persona. Saber que la señora Lehmann crió a dos hijos y se levantaba temprano para preparar el desayuno ayuda a entender qué busca cuando dice que tiene que irse a casa.</p>"
    },
    exercises: [
      {
        q: "La señora Lehmann dice: «Ich muss nach Hause, meine Kinder kommen aus der Schule.» ¿Cuál es una respuesta según la validación?",
        opts: [
          "Ihre Kinder sind doch schon lange erwachsen.",
          "Sie machen sich Sorgen um Ihre Kinder.",
          "Sie können nicht nach Hause, Sie wohnen jetzt hier."
        ],
        why: "La validación acoge la emoción: <b>Sie machen sich Sorgen um Ihre Kinder.</b> Corregir los hechos, como en las otras dos respuestas, no la tranquiliza y la pone frente a una pérdida."
      },
      {
        q: "Completa: «Nach dem Frühstück ___ Ihre Tochter.»",
        hint: "kommen, en segundo lugar",
        why: "<b>kommt</b>: <i>Nach dem Frühstück</i> ocupa el primer lugar, así que el verbo conjugado viene justo después y el sujeto <i>Ihre Tochter</i> lo sigue."
      },
      {
        q: "Completa las frases.",
        tr: "Ahora se lava la cara. Aquí tiene su manopla.",
        why: "<i>Jetzt <b>waschen</b> Sie Ihr Gesicht</i> y <i>Hier <b>ist</b> Ihr Waschlappen</i>: en las dos frases el verbo conjugado está en segundo lugar, detrás de <i>jetzt</i> y de <i>hier</i>."
      },
      {
        q: "¿Qué frases son adecuadas para una persona con demencia?",
        opts: [
          "Jetzt waschen Sie Ihr Gesicht.",
          "Nachdem Sie sich gewaschen haben und bevor das Frühstück kommt, ziehen Sie sich an.",
          "Hier ist Ihr Waschlappen.",
          "Na, mein Schätzchen, haben wir heute gut gegessen?",
          "Erzählen Sie mir von Ihren Kindern."
        ],
        why: "Sirven las frases breves, con una sola información y con <i>Sie</i>. La segunda frase tiene dos subordinadas antes del verbo principal; la cuarta usa un apelativo cariñoso y el «nosotros» infantil."
      },
      {
        q: "Elige el artículo determinado correcto para cada sustantivo.",
        items: ["demencia", "sentimiento, emoción", "recuerdo", "manopla de aseo", "cara", "desayuno"]
      },
      {
        q: "Une cada palabra con su significado.",
        pairs: ["la demencia", "los despistes, la falta de memoria", "la desorientación", "la validación"]
      },
      {
        q: "Ordena las palabras.",
        tr: "Después del desayuno viene su hija.",
        why: "<i>Nach dem Frühstück kommt Ihre Tochter.</i> El tiempo en primer lugar orienta, el verbo <i>kommt</i> está en segundo."
      },
      {
        q: "Traduce con una frase breve: «Hoy es martes.»",
        why: "<i>Heute ist Dienstag.</i> También vale <i>Heute haben wir Dienstag</i>. «Hoy» es <b>heute</b>, y el verbo está en segundo lugar."
      },
      {
        q: "Una mañana con la señora Lehmann.",
        setting: "La señora Lehmann vive con una demencia. Es por la mañana y quieres ayudarla a lavarse.",
        lines: [
          { tr: "Tengo que irme a casa. Mis niños me esperan." },
          { tr: "Acoge su preocupación, sin corregirla.", answerTr: "Está preocupada por sus hijos." },
          { tr: "¿Y usted quién es?" },
          { tr: "Preséntate con calma.", answerTr: "Soy Anna. Hoy la ayudo yo." },
          { tr: "Ya no puedo más." },
          { tr: "Anímala y dale la manopla.", answerTr: "Claro que puede. Aquí tiene su manopla." }
        ]
      },
      {
        tr: "Buenos días, señora Lehmann. Soy Anna. Hoy la ayudo a lavarse.",
        why: "En <i>Lehmann</i> la <b>h</b> no se pronuncia y alarga la <b>e</b>; en <i>heute</i> el diptongo <b>eu</b> es [ɔʏ], parecido a «oy» de «hoy»; en <i>Waschen</i> la <b>W</b> es [v], como una f sonora, y la <b>sch</b> es [ʃ]."
      },
      {
        tr: "Cuénteme de sus hijos.",
        why: "En <i>Erzählen</i> la <b>z</b> es [ts] y el acento cae en <b>zäh</b>; en <i>von</i> la <b>v</b> se pronuncia [f]; en <i>Kindern</i> el acento cae en <b>Kin</b>."
      }
    ]
  },
  "lesson:pfl-u07-test": {
    theme: "Prueba",
    title: "Prueba: Hablar con pacientes y familiares",
    objectives: [
      "comprobar la explicación con palabras sencillas, las peticiones corteses, el estilo indirecto, el secreto profesional y la comunicación con las personas con demencia"
    ],
    theory: [
      {
        p: "Once preguntas sobre toda la unidad. Se aprueba con el 70%. Los pacientes y las situaciones son inventados y sirven solo como ejemplo: las normas sobre quién puede ser informado y cómo se prepara una prueba las establecen el médico y el centro."
      }
    ],
    exercises: [
      {
        q: "El hijo de un paciente pregunta: «Was hat mein Vater genau?» El médico todavía no ha hablado con él.",
        opts: [
          "Das bespricht der Arzt mit Ihnen.",
          "Ich darf das eigentlich nicht sagen, aber es ist ernst.",
          "Das weiß ich nicht, fragen Sie jemand anderen."
        ],
        why: "El diagnóstico lo comunica el médico: <b>Das bespricht der Arzt mit Ihnen.</b> La segunda respuesta deja entrever un diagnóstico, la tercera no encauza la pregunta."
      },
      {
        q: "Completa: «Ihre Mutter sagt, sie ___ keine Schmerzen.»",
        hint: "Konjunktiv I de haben",
        why: "<b>habe</b>: raíz <i>hab-</i> + <i>-e</i>. Es la forma del estilo indirecto."
      },
      {
        q: "Completa: «___ Sie mir kurz helfen?»",
        hint: "Konjunktiv II, petición cortés",
        why: "<b>Könnten</b> Sie mir kurz helfen? También vale <b>Würden</b>. En la pregunta el verbo conjugado está en primer lugar."
      },
      {
        tr: "El Konjunktiv II de werden, todas las personas.",
        why: "<i>Würde, würdest, würde, würden, würdet, würden</i>: del Präteritum <i>wurde</i> con el Umlaut, <b>ü</b>."
      },
      {
        q: "Une cada palabra con su significado.",
        pairs: ["la gastroscopia (término técnico)", "el secreto profesional", "la validación", "el poder preventivo"]
      },
      {
        q: "¿Qué frases usarías con un paciente o un familiar?",
        opts: [
          "Morgen früh bekommen Sie eine Magenspiegelung.",
          "Morgen erfolgt eine ÖGD.",
          "Ich verstehe, dass Sie Angst haben.",
          "Pat. gibt an, sie habe keine Schmerzen.",
          "Wäre es Ihnen recht, wenn ich kurz bei Ihnen bleibe?"
        ],
        why: "<i>ÖGD</i> es una sigla técnica y <i>Pat. gibt an...</i> es el estilo del registro de enfermería: sirven entre colegas y en la documentación, no con el paciente."
      },
      {
        q: "Completa con el Konjunktiv I y el Konjunktiv II.",
        tr: "La paciente refiere cansancio. ¿Le parece bien que vuelva más tarde?",
        why: "<i>sie <b>sei</b> müde</i>: Konjunktiv I de sein, para referir. <i><b>Wäre</b> es Ihnen recht</i>: Konjunktiv II de sein, para pedir con amabilidad."
      },
      {
        q: "Ordena las palabras.",
        tr: "Entiendo que esté preocupado.",
        why: "<i>Ich verstehe, dass Sie sich Sorgen machen.</i> Después de <i>dass</i> el verbo <i>machen</i> va al final, en indicativo aunque el español diga «esté»; el pronombre <i>sich</i> sigue enseguida al sujeto <i>Sie</i>."
      },
      {
        q: "Elige el artículo determinado correcto para cada sustantivo.",
        items: ["diagnóstico", "información (dada a petición)", "consentimiento", "sentimiento, emoción", "avance, progreso", "conversación con el médico"]
      },
      {
        tr: "Entiendo que tenga miedo. Siéntese primero en el borde de la cama, tranquila.",
        why: "En <i>Angst</i> la <b>ng</b> es [ŋ], como la n de «tengo», sin una g separada; en <i>Bettkante</i> el acento cae en <b>Bett</b>; <i>doch</i> y <i>mal</i> quedan sin acento."
      },
      {
        tr: "Eso lo hablará el médico con usted.",
        why: "En <i>bespricht</i> el acento cae en <b>spricht</b>, la <b>sp</b> es [ʃp] y la <b>ch</b> es [ç]; en <i>Ihnen</i> la <b>ih</b> es una i larga."
      }
    ]
  }
});
