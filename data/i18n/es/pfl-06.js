/* ============================================================
   Learner-language text (es) for data/core/pfl-06.js, unit pfl-u06.
   Keys point at ids in the neutral layer; arrays merge by index,
   so their length has to match core.
   Checked by scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("es", {
  "unit:pfl-u06": {
    title: "Relevo de turno y registro de enfermería",
    grammarNote: "el Präteritum en el relevo y en el registro · los conectores deshalb, trotzdem, außerdem, weil · el estilo nominal de la documentación · la pasiva en Präteritum · las finales con damit y um ... zu · las abreviaturas de planta"
  },
  "lesson:pfl-u06-l1": {
    theme: "Relevo oral",
    title: "El relevo",
    objectives: [
      "dar y recibir el relevo oral entre un turno y otro",
      "contar cómo fue la noche con war, hatte, konnte, wollte",
      "enlazar los hechos con deshalb, trotzdem, außerdem y weil",
      "preguntar al compañero si hay algo más que destacar"
    ],
    theory: [
      {
        h: "Qué se dice en el relevo",
        p: "En la <strong>Übergabe</strong> quien sale le pasa a quien entra lo que necesita para el turno: cómo fue la noche o la tarde, qué ha cambiado, qué se ha hecho y qué queda pendiente. Se va habitación por habitación y paciente por paciente: <em>Fangen wir mit Zimmer zwölf an?</em> Se cuentan observaciones y hechos, no impresiones: <em>Sie war unruhig. Gegen drei Uhr hatte sie Bauchschmerzen.</em> Y se cierra con la pregunta de quien recibe: <em>Gibt es sonst noch Besonderheiten?</em>"
      },
      {
        h: "Präteritum y conectores",
        p: "También hablando, <em>sein</em>, <em>haben</em> y los modales van casi siempre en <strong>Präteritum</strong>: <em>war, hatte, konnte, wollte, musste</em>. Los demás verbos, hablando, suelen ir en Perfekt: <em>Ich habe die Ärztin informiert.</em> Los conectores <em>deshalb</em> (por eso), <em>trotzdem</em> (aun así) y <em>außerdem</em> (además) ocupan el primer lugar de la oración, así que el verbo conjugado va justo detrás: <em>deshalb <b>habe</b> ich</em>, <em>trotzdem <b>fühlte</b> sie sich wohl</em>. Con <em>weil</em>, en cambio, se abre una subordinada y el verbo va al final: <em>weil er Schmerzen <b>hatte</b></em>."
      },
      {
        contrast: "Lo que en España llamas el relevo, el pase de guardia o simplemente «dar el parte», y en buena parte de América Latina la entrega de turno, en alemán es la <em>Übergabe</em>. El contenido es el mismo; la gramática no. En español el relevo se cuenta en pretérito indefinido o en perfecto: «estuvo inquieta, tuvo dolor, avisé al médico» o «ha estado inquieta, ha tenido dolor». En alemán el relevo oral mezcla dos tiempos. <em>War, hatte, konnte</em> en Präteritum suenan normales también hablando, mientras que <em>ist gewesen</em> o <em>hat gehabt</em> suenan largos en un relevo; los demás verbos se quedan en Perfekt al hablar y pasan al Präteritum en el registro escrito (<em>Die Ärztin kam</em>), que es donde tu indefinido encaja de verdad. Ojo también con el orden: «por eso» no mueve nada en español («por eso llamé»), pero <em>deshalb</em> y <em>trotzdem</em> ocupan el primer lugar y el verbo los sigue enseguida: <em>deshalb habe ich angerufen</em>, nunca <em>deshalb ich habe</em>."
      },
      {
        trap: "<em>übergeben</em> significa «entregar, pasar», pero <em>sich übergeben</em> significa «vomitar»: <em>Ich übergebe dir Zimmer zwölf</em> es el relevo, <em>Die Patientin hat sich übergeben</em> es una observación que hay que contar. El prefijo <em>über-</em> aquí no se separa: <em>ich übergebe</em>, en Perfekt <em>ich habe übergeben</em>, sin <em>ge-</em> delante. Y <em>stabil</em> describe valores y situaciones constantes, no es un juicio sobre el paciente como persona. <em>Der Dienst</em> es el turno, no el servicio del hospital, que se dice <em>die Abteilung</em> o <em>die Station</em>."
      },
      {
        tip: "Prepara el relevo con el mismo orden para cada paciente: cómo fue el turno, los valores alterados, qué has hecho, a quién has avisado, qué queda pendiente. El esquema fijo te ayuda a encontrar las palabras incluso cansada al final de la noche, y quien escucha sabe dónde buscar cada dato."
      }
    ],
    grammar: {
      title: "Conectores y lugar del verbo",
      note: "<b>deshalb, trotzdem, außerdem</b> ocupan el primer lugar: el verbo conjugado va justo detrás. <b>weil</b> abre una subordinada: el verbo conjugado va al final.",
      table: {
        head: ["conector", "significado", "ejemplo"],
        rows: [
          ["deshalb", "por eso", "Sie hatte Schmerzen, deshalb habe ich die Ärztin informiert."],
          ["trotzdem", "aun así, sin embargo", "Der Blutdruck war erhöht, trotzdem fühlte sie sich wohl."],
          ["außerdem", "además", "Außerdem wollte er nichts essen."],
          ["weil", "porque", "Er konnte nicht schlafen, weil er Schmerzen hatte."]
        ]
      },
      examples: [
        { tr: "La señora Keller estuvo inquieta por la noche.", note: "sein en Präteritum: war, normal también hablando" },
        { tr: "Hacia las tres tuvo dolor abdominal, por eso avisé a la médica.", note: "deshalb en primer lugar, y enseguida el verbo: habe" },
        { tr: "El señor Brandt no podía dormir porque tenía dolor.", note: "weil: el verbo conjugado hatte va al final" },
        { tr: "Por la tarde tenía la tensión alta, pero aun así se encontraba bien.", note: "trotzdem en primer lugar, luego fühlte" },
        { tr: "Además no quería comer nada.", note: "außerdem en primer lugar, luego wollte" },
        { tr: "La noche transcurrió tranquila.", note: "verlaufen, Präteritum verlief: típico de los registros" }
      ]
    },
    vocab: [
      "el relevo, el pase de guardia",
      "el turno de mañana",
      "el turno de tarde",
      "el turno de noche",
      "entregar, dar el relevo",
      "inquieto, agitado",
      "la incidencia, lo que hay que destacar",
      "el estado",
      "estable",
      "por eso",
      "aun así, sin embargo",
      "además"
    ],
    dialogue: [
      "Buenos días. ¿Empezamos por la habitación doce?",
      "Sí, claro. ¿Qué tal la noche de la señora Keller?",
      "La señora Keller estuvo inquieta. Hacia las tres tuvo dolor abdominal, por eso avisé a la médica de guardia.",
      "¿Y luego?",
      "La médica vino y la exploró. Después la señora Keller pudo volver a dormir.",
      "¿Alguna otra incidencia?",
      "Ha bebido poco. Además por la tarde tenía la tensión alta, pero aun así se encontraba bien.",
      "Bien, entonces le vuelvo a tomar la tensión ahora mismo."
    ],
    culture: {
      title: "Una mirada alemana: el relevo a pie de cama",
      text: "<p>En muchas plantas alemanas la <i>Dienstübergabe</i> se hace en el control de enfermería; en otras, una parte se hace junto a la cama del paciente: la <i>Übergabe am Bett</i>. A pie de cama el paciente puede corregir o completar, pero también están el compañero de habitación y la familia: la información delicada se da fuera, en voz baja o en el control.</p><p>Los turnos suelen llamarse <i>Frühdienst</i>, <i>Spätdienst</i> y <i>Nachtdienst</i>, y los horarios cambian de un centro a otro. Quien llega nuevo los encuentra en el <i>Dienstplan</i>, el cuadrante de turnos.</p>"
    },
    exercises: [
      {
        q: "En el relevo cuentas que la paciente estuvo inquieta por la noche. ¿Qué frase es correcta?",
        opts: [
          "Frau Keller hatte in der Nacht unruhig.",
          "Frau Keller war in der Nacht unruhig.",
          "Frau Keller ist in der Nacht unruhig gewesen sein."
        ],
        why: "Con un adjetivo como <i>unruhig</i> hace falta <b>sein</b>, y en el relevo se usa el Präteritum: <b>war</b>. <i>hatte unruhig</i> no existe, y <i>ist gewesen sein</i> es una forma incorrecta."
      },
      {
        tr: "El Präteritum de schlafen, todas las personas.",
        why: "<i>Schlief, schliefst, schlief, schliefen, schlieft, schliefen</i>: verbo fuerte, la vocal pasa a <b>ie</b>, y la primera y la tercera persona del singular no llevan terminación."
      },
      {
        q: "Completa: «Sie hatte Schmerzen, ___ habe ich die Ärztin informiert.»",
        hint: "conector: por eso",
        why: "<b>deshalb</b> (también <i>darum</i>, <i>daher</i>, <i>deswegen</i>): expresa la consecuencia y ocupa el primer lugar, por eso el verbo <i>habe</i> va justo detrás."
      },
      {
        q: "Completa la frase.",
        tr: "Por la tarde tenía la tensión alta, pero aun así se encontraba bien.",
        why: "<i>Der Blutdruck <b>war</b> am Abend erhöht</i>: sein en Präteritum. <i><b>trotzdem</b> fühlte sie sich wohl</i>: el conector ocupa el primer lugar y el verbo lo sigue enseguida."
      },
      {
        q: "¿Qué frases son correctas?",
        opts: [
          "Er hatte Schmerzen, deshalb konnte er nicht schlafen.",
          "Er hatte Schmerzen, deshalb er konnte nicht schlafen.",
          "Er konnte nicht schlafen, weil er Schmerzen hatte.",
          "Außerdem wollte er nichts essen.",
          "Er konnte nicht schlafen, weil er hatte Schmerzen."
        ],
        why: "Después de <i>deshalb</i> y <i>außerdem</i> va enseguida el verbo conjugado: <i>deshalb konnte er</i>. Después de <i>weil</i> el verbo conjugado va al final: <i>weil er Schmerzen hatte</i>."
      },
      {
        q: "Elige el artículo determinado correcto para cada sustantivo.",
        items: ["relevo", "turno de mañana", "turno de tarde", "turno de noche", "incidencia", "estado"]
      },
      {
        q: "Une cada conector con su significado.",
        pairs: ["por eso", "aun así, sin embargo", "además", "porque"]
      },
      {
        q: "Ordena las palabras.",
        tr: "Tenía dolor, por eso avisé a la médica.",
        why: "<i>Sie hatte Schmerzen, deshalb habe ich die Ärztin informiert.</i> Después de la coma <i>deshalb</i> ocupa el primer lugar de la segunda oración, luego el verbo <i>habe</i>, luego el sujeto <i>ich</i>; el participio <i>informiert</i> va al final, sin <i>ge-</i>."
      },
      {
        q: "Traduce (en el relevo): «La noche transcurrió tranquila.»",
        why: "<i>Die Nacht war ruhig</i> es la forma más sencilla; en los registros se lee a menudo <i>Die Nacht verlief ruhig</i>. Hablando también vale <i>Die Nacht ist ruhig verlaufen</i>."
      },
      {
        q: "El relevo de la mañana.",
        setting: "Has hecho el turno de noche y das el relevo a un compañero.",
        lines: [
          { tr: "¿Qué tal la noche del señor Brandt?" },
          { tr: "Responde que estuvo inquieto porque tenía dolor.", answerTr: "Estuvo inquieto porque tenía dolor." },
          { tr: "¿Avisaste a la médica?" },
          { tr: "Responde que sí: tenía mucho dolor, por eso la llamaste.", answerTr: "Sí, tenía mucho dolor, por eso la llamé." },
          { tr: "¿Alguna otra incidencia?" },
          { tr: "Responde que además ha bebido poco.", answerTr: "Además ha bebido poco." }
        ]
      },
      {
        tr: "Hacia las tres tuvo dolor abdominal, por eso avisé a la médica de guardia.",
        why: "En <i>Bauchschmerzen</i> la <b>ch</b> después de <b>au</b> es [x], como la jota de «jamón»; en <i>deshalb</i> la <b>s</b> y la <b>h</b> se pronuncian separadas, des-halb, y la <b>h</b> se aspira; en <i>diensthabende</i> el acento cae en <b>Dienst</b>."
      },
      {
        tr: "La noche fue tranquila, no hay incidencias.",
        why: "En <i>Nacht</i> la <b>ch</b> después de <b>a</b> es [x], como una jota; en <i>ruhig</i> la <b>g</b> final se lee [ç], más suave que la jota; en <i>Besonderheiten</i> el acento cae en <b>son</b> y la <b>s</b> inicial es sonora, [z]."
      }
    ]
  },
  "lesson:pfl-u06-l2": {
    theme: "Documentación escrita",
    title: "El registro de enfermería",
    objectives: [
      "escribir una entrada del registro de enfermería en estilo breve",
      "pasar una frase verbal a estilo nominal",
      "usar la pasiva en Präteritum: wurde informiert, wurde gewechselt",
      "distinguir una observación de un juicio"
    ],
    theory: [
      {
        h: "Qué entra en el registro",
        p: "El <strong>Pflegebericht</strong> recoge lo que ha cambiado o lo que importa a quien viene después: estado del paciente, observaciones, intervenciones realizadas, a quién se ha avisado. Cada entrada lleva fecha, hora y las iniciales de quien escribe. Se escriben <strong>observaciones</strong>, no juicios: no <em>Patientin war schwierig</em>, sino lo que has visto y oído: <em>Patientin weinte und sprach wenig.</em> Si una observación te preocupa, el registro recoge también el paso siguiente: <em>Ärztin informiert.</em>"
      },
      {
        h: "Estilo nominal y pasiva",
        p: "La documentación alemana prefiere los <strong>sustantivos</strong> a los verbos: <em>Die Patientin wollte nichts essen</em> se convierte en <em>Verweigerung der Nahrungsaufnahme</em>. El sustantivo en <em>-ung</em> es siempre femenino y el complemento que lo sigue va en genitivo: <em>die Verweigerung <b>der</b> Nahrungsaufnahme</em>. Cuando importa la acción y no quién la hizo se usa la <strong>pasiva</strong>, en Präteritum: <em>Der Verband <b>wurde</b> gewechselt. Die Ärztin <b>wurde</b> informiert.</em> En las entradas breves el auxiliar a menudo desaparece: <em>Verband gewechselt. Ärztin informiert.</em>"
      },
      {
        contrast: "El estilo nominal no te va a sonar raro: el español administrativo y clínico lo usa a diario («rechazo de la ingesta», «se procede a la retirada de la sonda», «toma de constantes»). Tampoco la forma breve: «Se avisa a médico de guardia», «Cura realizada» funcionan igual que <em>Ärztin informiert</em>, <em>Verband gewechselt</em>. Lo nuevo es la mecánica alemana: el verbo <em>verweigern</em> da <em>die Verweigerung</em>, el complemento pasa a genitivo (<em>der Nahrungsaufnahme</em>, sin preposición, donde tú pondrías «de la») y las palabras se sueldan en un compuesto (<em>Nahrung</em> + <em>Aufnahme</em>). Otra diferencia: en España es muy común escribir el registro en presente («Paciente refiere dolor, se administra analgesia pautada»). El registro alemán no usa ese presente narrativo: escribe en Präteritum o en forma breve sin auxiliar: <em>Der Patient verweigerte das Mittagessen. Arzt informiert.</em> El Perfekt queda para el habla."
      },
      {
        trap: "Los verbos en <em>-ieren</em> no llevan <em>ge-</em> en el participio: <em>informiert</em>, <em>dokumentiert</em>, <em>mobilisiert</em>, nunca <em>geinformiert</em>. Y ojo con el sujeto: <em>Die Ärztin wurde informiert</em> quiere decir que alguien avisó a la médica; <em>Die Ärztin hat informiert</em>, que fue ella quien avisó a alguien. Para el apósito el verbo es <em>wechseln</em>, no <em>ändern</em>: <em>Der Verband wurde gewechselt.</em> Y <em>die Rücksprache</em> no es una «réplica»: es la consulta con el médico."
      },
      {
        tip: "Antes de escribir, pregúntate: un compañero que lea esta entrada dentro de ocho horas, ¿sabe qué pasó, cuándo y a quién se avisó? Si la respuesta es sí, la entrada está completa. Si has escrito un adjetivo como <em>schwierig</em> o <em>nervig</em>, cámbialo por lo que viste u oíste."
      }
    ],
    grammar: {
      title: "Del verbo al sustantivo",
      note: "Verbo → sustantivo en <b>-ung</b> (siempre femenino) + complemento en <b>genitivo</b>. Para la acción sin quien la hace: <b>wurde</b> + participio.",
      table: {
        head: ["estilo verbal", "estilo nominal o pasiva"],
        rows: [
          ["Die Patientin wollte nichts essen.", "Verweigerung der Nahrungsaufnahme."],
          ["Ich habe die Ärztin angerufen.", "Ärztin informiert. / Die Ärztin wurde informiert."],
          ["Ich habe den Verband gewechselt.", "Verbandswechsel. / Der Verband wurde gewechselt."],
          ["Er hat wenig getrunken.", "Geringe Flüssigkeitsaufnahme."]
        ]
      },
      examples: [
        { tr: "Hoy en la comida la paciente no quería comer nada.", note: "estilo verbal: vale hablando y en el registro" },
        { tr: "Rechazo de la ingesta en la comida.", note: "estilo nominal: Verweigerung + genitivo der" },
        { tr: "El apósito se cambió a las diez.", note: "pasiva en Präteritum: wurde + gewechselt" },
        { tr: "Se avisó a la médica.", note: "informiert: verbo en -ieren, sin ge-" },
        { tr: "Tras consultar con la médica se aplazó la movilización.", note: "nach Rücksprache mit: fórmula fija de la documentación" },
        { tr: "Para prevenir caídas se bajó la cama.", note: "zur + sustantivo: la finalidad en estilo nominal" }
      ]
    },
    vocab: [
      "el registro de enfermería, la hoja de evolución",
      "la documentación",
      "la entrada, la anotación (en el registro)",
      "la observación",
      "la ingesta de alimentos (término técnico)",
      "la ingesta de líquidos (término técnico)",
      "rechazar",
      "el rechazo",
      "la consulta (con el médico)",
      "el estado general percibido, cómo se encuentra el paciente",
      "sin alteraciones, normal",
      "la eliminación (orina y heces)"
    ],
    dialogue: [
      "¿Puedes echar un vistazo a mi registro? He escrito: hoy en la comida la señora Keller no quería comer nada.",
      "Así está bien. En el registro se suele escribir más breve: rechazo de la ingesta en la comida.",
      "¿Y tengo que escribir quién llamó a la médica?",
      "Escribe simplemente: se avisa a la médica. Tus iniciales ya están junto a la entrada.",
      "¿Puedo escribir también que estaba de mal humor?",
      "Mejor escribe lo que viste y oíste: la paciente lloraba y hablaba poco.",
      "Entendido. Observaciones, no juicios."
    ],
    culture: {
      title: "Una mirada alemana: lo que no está escrito",
      text: "<p>Entre el personal de enfermería alemán circula una frase: <i>Was nicht dokumentiert ist, gilt als nicht gemacht</i>, «lo que no está registrado se considera no hecho», la misma idea que conoces del «lo que no se registra, no existe». No es una ley, pero describe bien el peso de la documentación: es la base de la continuidad de los cuidados, de la comunicación con los médicos y, en caso de conflicto, de la reconstrucción de lo que pasó.</p><p>Por el mismo motivo una entrada no se borra ni se hace ilegible: si hay un error, se tacha de forma que siga siendo legible o se añade una corrección con fecha e iniciales. En los sistemas informáticos la regla es la misma y la registra el propio programa.</p>"
    },
    exercises: [
      {
        q: "¿Cómo se escribe en estilo nominal «Die Patientin wollte nichts essen»?",
        opts: [
          "Verweigerung von der Nahrungsaufnahme essen.",
          "Verweigerung der Nahrungsaufnahme.",
          "Die Nahrungsaufnahme verweigernd."
        ],
        why: "El verbo <i>verweigern</i> se convierte en el sustantivo <b>die Verweigerung</b>, y el complemento pasa a genitivo: <b>der</b> Nahrungsaufnahme."
      },
      {
        tr: "El Präteritum de werden, todas las personas.",
        why: "<i>Wurde, wurdest, wurde, wurden, wurdet, wurden</i>: es la forma que sostiene la pasiva en el registro, <i>Die Ärztin wurde informiert</i>."
      },
      {
        q: "Completa: «Die Ärztin ___ um 15 Uhr informiert.»",
        hint: "pasiva en Präteritum",
        why: "<b>wurde</b>: la pasiva en Präteritum se forma con <i>wurde</i> y el participio, aquí <i>informiert</i>, sin <i>ge-</i>."
      },
      {
        q: "Completa la frase.",
        tr: "El apósito se cambió a las diez.",
        why: "<i>Der Verband <b>wurde</b> um zehn Uhr <b>gewechselt</b></i>: <i>wurde</i> en segundo lugar, el participio <i>gewechselt</i> al final."
      },
      {
        q: "Une cada término de la documentación con su significado.",
        pairs: ["la ingesta de alimentos", "la ingesta de líquidos", "la eliminación (orina y heces)", "la consulta con el médico"]
      },
      {
        q: "Elige el artículo determinado correcto para cada sustantivo.",
        items: ["registro de enfermería", "estado general percibido", "entrada del registro", "observación", "consulta con el médico", "documentación"]
      },
      {
        q: "¿Qué entradas son adecuadas para un registro de enfermería?",
        opts: [
          "Patientin weinte und sprach wenig.",
          "Patientin war wieder schwierig.",
          "Verweigerung der Nahrungsaufnahme am Mittag, Ärztin informiert.",
          "Verband um zehn Uhr gewechselt, Wunde unauffällig.",
          "Patient ist faul und will nicht laufen."
        ],
        why: "En el registro entran observaciones e intervenciones: qué viste, qué se hizo, a quién se avisó. <i>schwierig</i> y <i>faul</i> son juicios sobre la persona y no dicen nada a quien lee."
      },
      {
        q: "Ordena las palabras.",
        tr: "Tras consultar con la médica se aplazó la movilización.",
        why: "<i>Nach Rücksprache mit der Ärztin wurde die Mobilisation verschoben.</i> La fórmula <i>nach Rücksprache mit</i> ocupa el primer lugar, luego <i>wurde</i>, luego el sujeto, y el participio <i>verschoben</i> al final."
      },
      {
        q: "Traduce (en el registro): «Se avisó al médico.»",
        why: "<i>Der Arzt wurde informiert</i> o <i>Die Ärztin wurde informiert</i>, según quién estuviera de guardia; en forma breve <i>Arzt informiert</i>. Hablando también vale <i>ist informiert worden</i>."
      },
      {
        q: "Una entrada del registro.",
        setting: "Una compañera nueva te pregunta cómo se escribe el registro de enfermería.",
        lines: [
          { tr: "Hoy en la comida la señora Keller no quería comer nada. ¿Cómo lo escribo?" },
          { tr: "Díctale la forma breve: rechazo de la ingesta en la comida.", answerTr: "Rechazo de la ingesta en la comida." },
          { tr: "¿Y que he llamado a la médica?" },
          { tr: "Díctale la forma breve: se avisa a la médica.", answerTr: "Se avisa a la médica." },
          { tr: "¿Puedo escribir que estaba de mal humor?" },
          { tr: "Responde que es mejor escribir lo que ha observado: hablaba poco y lloraba.", answerTr: "Mejor escribe lo que has observado: hablaba poco y lloraba." }
        ]
      },
      {
        tr: "Así está bien. En el registro se suele escribir más breve: rechazo de la ingesta en la comida.",
        why: "En <i>Bericht</i> la <b>ch</b> después de <b>i</b> es [ç], más suave que la jota; en <i>Verweigerung</i> la <b>v</b> es [f] y la <b>w</b> es una [v] labiodental, que el español no distingue de la b, con el acento en <b>wei</b>; en <i>Nahrungsaufnahme</i> el acento cae en <b>Nah</b>."
      },
      {
        tr: "Se avisó a la médica.",
        why: "En <i>Ärztin</i> la <b>ä</b> es una e abierta y la <b>z</b> es [ts]; en <i>wurde</i> la <b>u</b> es breve y la <b>w</b> es [v], con los dientes sobre el labio; en <i>informiert</i> el acento cae en <b>miert</b>, con la <b>ie</b> larga."
      }
    ]
  },
  "lesson:pfl-u06-l3": {
    theme: "Planificación",
    title: "El plan de cuidados",
    objectives: [
      "leer un plan de cuidados: problema, recurso, objetivo, intervención",
      "decir la finalidad de una intervención con damit y um ... zu",
      "elegir entre damit y um ... zu según el sujeto",
      "formular un objetivo que se pueda comprobar"
    ],
    theory: [
      {
        h: "Las partes del plan de cuidados",
        p: "La <strong>Pflegeplanung</strong> sigue el mismo esquema en casi todos los centros. El <strong>Pflegeproblem</strong> dice qué le resulta difícil al paciente (<em>Sie trinkt zu wenig</em>). La <strong>Ressource</strong> dice qué sabe hacer todavía por sí mismo (<em>Sie kann den Becher selbst halten</em>). El <strong>Pflegeziel</strong> dice qué se quiere conseguir, de forma comprobable (<em>Die Patientin trinkt ausreichend</em>). Las <strong>Maßnahmen</strong> dicen qué se hace y por qué. En la <strong>Evaluation</strong> se comprueba si se ha alcanzado el objetivo. Las cantidades y los intervalos se fijan para cada paciente, con el médico y según los protocolos del centro: en esta lección los ejemplos son didácticos."
      },
      {
        h: "¿damit o um ... zu?",
        p: "La finalidad de una intervención se expresa con una oración final. Si su sujeto es <strong>distinto</strong> del de la principal se usa <strong>damit</strong>, con el verbo conjugado al final: <em>Wir bieten ihr Tee an, damit <b>sie</b> mehr trinkt.</em> Si el sujeto es <strong>el mismo</strong> se puede usar <strong>um ... zu</strong> con el infinitivo: <em>Wir führen ein Trinkprotokoll, um die Trinkmenge zu kontrollieren</em> (somos nosotros los que llevamos el registro y nosotros los que controlamos). Con los verbos separables <em>zu</em> va en medio: <em>um aufzustehen</em>."
      },
      {
        contrast: "En español la finalidad se dice con «para» + infinitivo si el sujeto es el mismo y con «para que» + subjuntivo si cambia: «le ofrecemos té para que beba más». El alemán hace la misma división, pero sin subjuntivo: <em>damit sie mehr trinkt</em> va en indicativo. Si te formaste en España, conoces el plan de cuidados con diagnósticos NANDA, objetivos NOC e intervenciones NIC. El alemán es menos formal: el <em>Pflegeproblem</em> se escribe a menudo como una frase normal (<em>Sie trinkt zu wenig</em>) y no como una etiqueta diagnóstica; <em>Pflegeziel</em> corresponde al objetivo, <em>Maßnahme</em> a la intervención, y <em>Ressource</em>, que en vuestros planes suele faltar, recoge lo que el paciente aún puede hacer. Con el paciente estas palabras no se usan: en lugar de <em>Ihre Ressource</em> se dice <em>Das können Sie schon gut allein</em>."
      },
      {
        trap: "<em>damit</em> tiene dos significados. Como conjunción introduce la finalidad y manda el verbo al final: <em>damit sie mehr trinkt</em>. Como adverbio significa «con eso»: <em>Was machen wir damit?</em> «¿Qué hacemos con eso?». <em>Die Maßnahme</em> es la intervención, no la medida como cantidad: una medición es <em>die Messung</em>. Y <em>erhalten</em> aquí significa «conservar, mantener» (<em>die Selbstständigkeit erhalten</em>), no solo «recibir»."
      },
      {
        tip: "Para cada intervención del plan, intenta decir en voz alta el porqué con <em>damit</em> o <em>um ... zu</em>. Si la final no te sale, a menudo también le falta la finalidad al plan, y una intervención sin finalidad es difícil de valorar en la Evaluation."
      }
    ],
    grammar: {
      title: "La finalidad: damit y um ... zu",
      note: "Sujeto <b>distinto</b>: <b>damit</b> + verbo conjugado al final. Sujeto <b>igual</b>: <b>um ... zu</b> + infinitivo al final (o damit).",
      table: {
        head: ["principal", "final", "sujeto"],
        rows: [
          ["Wir bieten ihr oft Tee an,", "damit sie mehr trinkt.", "distinto: damit"],
          ["Wir lagern ihn regelmäßig um,", "damit kein Dekubitus entsteht.", "distinto: damit"],
          ["Er geht täglich mit dem Rollator,", "um mobil zu bleiben.", "igual: um ... zu"],
          ["Wir führen ein Trinkprotokoll,", "um die Trinkmenge zu kontrollieren.", "igual: um ... zu"]
        ]
      },
      examples: [
        { tr: "Cambiamos de posición a la señora Keller con regularidad para que no se forme una úlcera por presión.", note: "sujetos distintos (wir / kein Dekubitus): damit" },
        { tr: "Le ofrecemos té a menudo para que beba más.", note: "sujetos distintos (wir / sie): damit, con indicativo" },
        { tr: "El señor Brandt camina todos los días con el andador para seguir siendo autónomo.", note: "mismo sujeto: um ... zu" },
        { tr: "Llevamos un registro de líquidos para controlar lo que bebe.", note: "mismo sujeto: um ... zu, infinitivo al final" },
        { tr: "Recurso: la paciente puede sostener el vaso sola.", note: "el recurso dice qué hace todavía el paciente por sí mismo" },
        { tr: "Objetivo: la paciente bebe lo suficiente.", note: "el objetivo se escribe en presente, como un estado que alcanzar" }
      ]
    },
    vocab: [
      "el plan de cuidados, la planificación de cuidados",
      "el problema de cuidados",
      "el recurso (lo que el paciente aún puede hacer)",
      "el objetivo de cuidados",
      "la intervención, la medida",
      "la evaluación (del plan de cuidados)",
      "el riesgo",
      "evitar, prevenir",
      "conservar, mantener",
      "fomentar, favorecer",
      "la cantidad de líquidos ingerida",
      "el registro de ingesta de líquidos"
    ],
    dialogue: [
      "Hoy actualizamos el plan de cuidados de la señora Keller. ¿Cuál es su problema de cuidados?",
      "Bebe demasiado poco. Hay riesgo de deshidratación.",
      "Correcto. ¿Y qué recursos tiene?",
      "Puede sostener el vaso sola, y le gusta el té.",
      "Bien. ¿Qué intervenciones planificamos?",
      "Le ofrecemos té con regularidad para que beba más. Además llevamos un registro de líquidos para controlar lo que bebe.",
      "Muy bien. ¿Y el objetivo?",
      "La señora Keller bebe lo suficiente. La cantidad exacta la fijamos con la médica."
    ],
    culture: {
      title: "Una mirada alemana: del proceso enfermero a la SIS",
      text: "<p>En la formación alemana la planificación se enseña como <i>Pflegeprozess</i>, un ciclo de pasos que va de la recogida de datos a la evaluación, muy parecido al proceso enfermero que ya conoces. En los hospitales el plan de cuidados suele ser un módulo del sistema informático, con problemas e intervenciones ya redactados que se eligen y se adaptan.</p><p>En la atención a mayores, muchos centros alemanes usan un modelo más ligero, la <i>Strukturierte Informationssammlung</i> (SIS), creada para reducir la documentación. Las palabras de esta lección son las mismas: las encontrarás en cualquier formulario.</p>"
    },
    exercises: [
      {
        q: "Quieres decir por qué cambiáis de posición al paciente. ¿Qué frase es correcta?",
        opts: [
          "Wir lagern ihn regelmäßig um, um kein Dekubitus entsteht.",
          "Wir lagern ihn regelmäßig um, damit kein Dekubitus zu entstehen.",
          "Wir lagern ihn regelmäßig um, damit kein Dekubitus entsteht."
        ],
        why: "Los sujetos son distintos (<i>wir</i> y <i>kein Dekubitus</i>), así que hace falta <b>damit</b> con el verbo conjugado al final: <i>entsteht</i>. <i>um</i> no admite un verbo conjugado, y después de <i>damit</i> no hay <i>zu</i>."
      },
      {
        q: "Completa: «Wir führen ein Trinkprotokoll, ___ die Trinkmenge zu kontrollieren.»",
        hint: "mismo sujeto, infinitivo con zu",
        why: "<b>um</b>: somos nosotros los que llevamos el registro y nosotros los que controlamos, así que <i>um ... zu</i> con el infinitivo al final."
      },
      {
        q: "Completa la frase.",
        tr: "Le ofrecemos té a menudo para que beba más. Él camina todos los días con el andador para seguir siendo autónomo.",
        why: "<i><b>damit</b> sie mehr trinkt</i>: los sujetos son distintos. <i>um mobil zu <b>bleiben</b></i>: mismo sujeto, el infinitivo va al final después de <i>zu</i>."
      },
      {
        q: "¿Qué frases son correctas?",
        opts: [
          "Ich messe den Blutdruck, um Veränderungen früh zu erkennen.",
          "Ich messe den Blutdruck, damit Veränderungen früh zu erkennen.",
          "Wir mobilisieren ihn, damit er selbstständig bleibt.",
          "Wir mobilisieren ihn, um er selbstständig bleibt.",
          "Sie trinkt viel, um fit zu bleiben."
        ],
        why: "<i>um ... zu</i> pide el infinitivo con <i>zu</i> y el mismo sujeto; <i>damit</i> pide un verbo conjugado. <i>damit ... zu erkennen</i> y <i>um er ... bleibt</i> mezclan las dos construcciones."
      },
      {
        q: "Une cada parte del plan de cuidados con su significado.",
        pairs: ["lo que le resulta difícil al paciente", "lo que el paciente aún puede hacer solo", "lo que queremos conseguir", "lo que hacemos para conseguirlo"]
      },
      {
        q: "Elige el artículo determinado correcto para cada sustantivo.",
        items: ["plan de cuidados", "problema de cuidados", "recurso", "objetivo de cuidados", "riesgo", "registro de líquidos"]
      },
      {
        q: "Ordena las palabras.",
        tr: "Le ofrecemos té a menudo para que beba más.",
        why: "<i>Wir bieten ihr oft Tee an, damit sie mehr trinkt.</i> El prefijo <i>an</i> cierra la principal; después de <i>damit</i> el verbo conjugado <i>trinkt</i> va al final."
      },
      {
        q: "Traduce (en el plan de cuidados): «Lo movilizamos para que siga siendo autónomo.»",
        why: "<i>Wir mobilisieren ihn, damit er selbstständig bleibt.</i> Los sujetos son distintos (<i>wir</i> y <i>er</i>), así que <i>damit</i>. Las dos grafías son correctas, <i>selbstständig</i> y <i>selbständig</i>."
      },
      {
        q: "El plan de cuidados del señor Brandt.",
        setting: "Tu tutora te pide que presentes el plan de cuidados de un paciente encamado.",
        lines: [
          { tr: "¿Cuál es el problema de cuidados del señor Brandt?" },
          { tr: "Responde que se mueve poco y que por eso hay riesgo de úlcera por presión.", answerTr: "Se mueve poco, por eso hay riesgo de úlcera por presión." },
          { tr: "¿Y qué intervención planificamos?" },
          { tr: "Responde que lo cambiáis de posición con regularidad para que no se forme una úlcera.", answerTr: "Lo cambiamos de posición con regularidad para que no se forme una úlcera por presión." },
          { tr: "¿Qué recurso tiene?" },
          { tr: "Responde que con ayuda puede girarse solo.", answerTr: "Con ayuda puede girarse solo." }
        ]
      },
      {
        tr: "Le ofrecemos té con regularidad para que beba más.",
        why: "En <i>regelmäßig</i> la <b>ß</b> es una [s] sorda y la <b>g</b> final se lee [ç]; en <i>damit</i> el acento cae en <b>mit</b>; en <i>trinkt</i> la <b>nk</b> es [ŋk], como la n de «banco»."
      },
      {
        tr: "Cambiamos de posición a la señora Keller con regularidad para que no se forme una úlcera por presión.",
        why: "En <i>lagern</i> la <b>-ern</b> final se lee casi [ɐn], sin r vibrante; en <i>Dekubitus</i> el acento cae en <b>ku</b>, con la <b>u</b> larga; en <i>entsteht</i> la <b>st</b> se lee [ʃt], como «sht», y la <b>h</b> es muda."
      }
    ]
  },
  "lesson:pfl-u06-l4": {
    theme: "Abreviaturas",
    title: "Las abreviaturas de planta",
    objectives: [
      "leer y desarrollar las abreviaturas más comunes: AZ, EZ, VZ, BZ, RR, o.B., p.o., b.B.",
      "decirlas en voz alta con los compañeros y traducirlas en palabras sencillas para el paciente",
      "saber dónde buscar una abreviatura que no conoces",
      "tener claro que b.B. no significa «a criterio de enfermería»"
    ],
    theory: [
      {
        h: "Las abreviaturas más comunes",
        p: "En el registro y en la <strong>Kurve</strong> (la gráfica de constantes y tratamientos) las abreviaturas están por todas partes: <em>AZ</em> Allgemeinzustand, el estado general; <em>EZ</em> Ernährungszustand, el estado nutricional; <em>VZ</em> Vitalzeichen, las constantes vitales; <em>BZ</em> Blutzucker, la glucemia; <em>RR</em> la tensión arterial; <em>o.B.</em> ohne Befund, sin hallazgos patológicos; <em>p.o.</em> per os, por boca; <em>b.B.</em> bei Bedarf, si precisa. Entre compañeros se leen letra por letra (<em>A-Z, B-Z, o-B</em>, con el nombre alemán de las letras: «a-tset», «be-tset») o se desarrollan. Cada centro tiene su <strong>Abkürzungsverzeichnis</strong>: las abreviaturas admitidas son las de la lista de tu centro, y la misma puede cambiar de una unidad a otra."
      },
      {
        h: "Dos registros",
        p: "Las abreviaturas son <strong>Fachsprache</strong> escrita: sirven entre compañeros y en los documentos. Con el paciente se vuelve a la <strong>Laiensprache</strong>: no <em>Ihr AZ ist reduziert</em>, sino <em>Sie sind im Moment etwas geschwächt</em>; no <em>VZ o.B.</em>, sino <em>Ihr Blutdruck, Ihr Puls und Ihre Temperatur sind in Ordnung.</em> Y <em>b.B.</em> no es una decisión de la enfermera: quiere decir que el médico ha prescrito un fármaco para dar cuando haga falta, en las condiciones escritas en la prescripción."
      },
      {
        contrast: "Muchas de estas siglas tienen un equivalente directo en tu registro. <em>b.B.</em> es tu «s.p.», si precisa; <em>p.o.</em> es tu «v.o.», vía oral (el alemán usa el latín, el español no); <em>BZ</em> es la glucemia capilar, que en España mucha gente sigue llamando «BM-test». La sorpresa es <em>RR</em>: donde tú escribes TA, el alemán escribe <em>RR</em>, por Riva-Rocci, el médico italiano que inventó el esfigmomanómetro de manguito, y lo dice así también en voz alta. Otras no tienen equivalente: nadie escribe «EG disminuido» para el estado general, mientras que <em>AZ reduziert</em> es una fórmula diaria en una planta alemana. Y donde tú escribes «sin alteraciones» o «normal», el alemán abrevia: <em>o.B.</em> El estilo nominal de la lección anterior acaba a menudo en una línea de siglas: <em>AZ reduziert, EZ gut, VZ o.B.</em>"
      },
      {
        trap: "<em>ohne Befund</em> no significa «sin prueba» ni «no explorado»: significa que la exploración se hizo y no mostró nada patológico. <em>Die Kurve</em> en planta no es la curva de un gráfico: es la gráfica donde se registran constantes y tratamientos. Y <em>der Befund</em> solo es el informe o el hallazgo: <em>Der Befund ist da</em> quiere decir que ha llegado el resultado, no que sea positivo. Cuidado también con «s.p.»: no lo escribas en un registro alemán, nadie lo entenderá; allí es <em>b.B.</em>"
      },
      {
        tip: "Si no conoces una abreviatura, pregunta: <em>Was heißt das?</em> Nadie en la planta espera que te sepas de memoria la lista del centro, y una abreviatura mal leída es un error que pasa de turno en turno. Cuando escribas tú y tengas dudas, desarróllala: <em>Schreib die Abkürzung im Zweifel aus.</em>"
      }
    ],
    grammar: {
      title: "De la sigla a la frase",
      note: "Con los compañeros: la sigla o la forma breve. Con el paciente: una frase completa en <b>Laiensprache</b>, sin siglas.",
      table: {
        head: ["sigla", "desarrollada", "al paciente"],
        rows: [
          ["AZ reduziert", "Allgemeinzustand reduziert", "Sie sind im Moment etwas geschwächt."],
          ["VZ o.B.", "Vitalzeichen ohne Befund", "Ihr Blutdruck, Ihr Puls und Ihre Temperatur sind in Ordnung."],
          ["BZ", "Blutzucker", "Ich messe jetzt Ihren Blutzucker."],
          ["p.o.", "per os", "Bitte schlucken Sie die Tablette mit etwas Wasser."]
        ]
      },
      examples: [
        { tr: "Estado general disminuido, estado nutricional bueno.", note: "AZ y EZ: se leen A-Z, E-Z" },
        { tr: "Constantes vitales sin alteraciones.", note: "o.B.: sin hallazgos patológicos, el control se ha hecho" },
        { tr: "Tensión y pulso controlados, se avisa a la médica.", note: "RR: de Riva-Rocci, tu TA" },
        { tr: "Glucemia medida antes de la comida.", note: "BZ: Blutzucker" },
        { tr: "Comprimidos tomados por vía oral.", note: "p.o.: per os, tu v.o." },
        { tr: "Analgésico si precisa según prescripción médica.", note: "b.B.: tu s.p., solo en las condiciones que fijó el médico" }
      ]
    },
    vocab: [
      "el estado general (AZ)",
      "el estado nutricional (EZ)",
      "sin hallazgos patológicos, sin alteraciones (o.B.)",
      "por vía oral (p.o.)",
      "disminuido, reducido",
      "la medicación si precisa",
      "la gráfica de constantes y tratamientos",
      "la historia clínica del paciente",
      "la abreviatura",
      "las iniciales (de quien escribe)",
      "la lista de abreviaturas",
      "desarrollar, escribir completo"
    ],
    dialogue: [
      "En el registro pone: AZ disminuido, EZ bueno. ¿Qué significa?",
      "AZ es el estado general, EZ el estado nutricional. O sea, que está debilitada pero bien nutrida.",
      "¿Y VZ o.B.?",
      "Las constantes vitales están sin hallazgos patológicos, es decir, normales.",
      "Aquí pone también: analgésico b.B. ¿Se lo puedo dar sin más?",
      "Solo según la prescripción médica de la gráfica. Si precisa quiere decir: cuando tenga dolor, no de forma automática.",
      "¿Y si no conozco una abreviatura?",
      "Entonces preguntas. Con el paciente, de todos modos, hablas sin abreviaturas."
    ],
    culture: {
      title: "Una mirada alemana: la lista de abreviaturas",
      text: "<p>Muchos hospitales y residencias de Alemania tienen un <i>Abkürzungsverzeichnis</i> interno que fija qué siglas se pueden usar en la documentación. El motivo es la seguridad: una sigla con dos significados, leída por alguien que viene de otra unidad, puede llevar a un error.</p><p>Por eso las normas internas piden a menudo escribir completa justo la información más delicada, como los nombres de los fármacos y las prescripciones. Cuando empieces en un centro nuevo, pregunta dónde está la lista: es una de las primeras cosas útiles que leer.</p>"
    },
    exercises: [
      {
        q: "En el registro lees «VZ o.B.». ¿Qué significa?",
        opts: [
          "Las constantes vitales no se han tomado.",
          "Las constantes vitales se han controlado y están sin alteraciones.",
          "Las constantes vitales hay que volver a controlarlas."
        ],
        why: "<i>VZ</i> son las <i>Vitalzeichen</i>, y <b>o.B.</b> significa <i>ohne Befund</i>: el control se hizo y no mostró nada patológico."
      },
      {
        q: "Completa: «Tabletten werden ___ eingenommen, also über den Mund.»",
        hint: "la sigla latina, con puntos",
        why: "<b>p.o.</b>, es decir <i>per os</i>: por boca, tu v.o."
      },
      {
        q: "Une cada abreviatura con su significado.",
        pairs: ["el estado general", "el estado nutricional", "la glucemia", "las constantes vitales"]
      },
      {
        q: "Elige el artículo determinado correcto para cada sustantivo.",
        items: ["estado general", "estado nutricional", "gráfica de constantes", "abreviatura", "iniciales de quien escribe", "lista de abreviaturas"]
      },
      {
        q: "¿Qué frases puedes decirle a un paciente?",
        opts: [
          "Ihr Blutzucker ist in Ordnung.",
          "Ihr BZ ist o.B.",
          "Sie bekommen ein Schmerzmittel, wenn Sie Schmerzen haben.",
          "Ihr AZ ist reduziert.",
          "Ihre Werte sind unauffällig."
        ],
        why: "Con el paciente se habla sin siglas y sin fórmulas de la documentación. <i>BZ o.B.</i> y <i>AZ reduziert</i> son correctas entre compañeros, pero el paciente no las entiende."
      },
      {
        q: "Escribe completas las dos abreviaturas.",
        tr: "Estado general disminuido, estado nutricional bueno.",
        why: "<i>AZ</i> significa <b>Allgemeinzustand</b>, <i>EZ</i> <b>Ernährungszustand</b>. Los dos son masculinos: <i>der Zustand</i>."
      },
      {
        q: "Ordena las palabras.",
        tr: "Las constantes vitales están sin alteraciones.",
        why: "<i>Die Vitalzeichen sind ohne Befund.</i> Es la forma desarrollada de <i>VZ o.B.</i>; <i>Vitalzeichen</i> aquí es plural, por eso <i>sind</i>."
      },
      {
        q: "Traduce (en el registro): «El estado general es bueno.»",
        why: "<i>Der Allgemeinzustand ist gut</i>, o en forma breve <i>Allgemeinzustand gut</i> o <i>AZ gut</i>."
      },
      {
        q: "La paciente lee el registro.",
        setting: "La señora Keller ha leído algunas siglas en sus documentos y te pregunta qué significan.",
        lines: [
          { tr: "En mi registro pone AZ disminuido. ¿Qué significa?" },
          { tr: "Responde sin siglas: significa que en este momento está un poco débil.", answerTr: "Significa que en este momento usted está un poco débil." },
          { tr: "¿Y qué significa o.B. junto a las constantes?" },
          { tr: "Responde que la tensión, el pulso y la temperatura están bien.", answerTr: "Su tensión, su pulso y su temperatura están bien." },
          { tr: "¿Me darán un analgésico si me duele?" },
          { tr: "Responde que te avise cuando tenga dolor: la médica ha prescrito un analgésico.", answerTr: "Sí, avíseme cuando tenga dolor. La médica ha prescrito un analgésico." }
        ]
      },
      {
        tr: "Las constantes vitales están sin hallazgos patológicos, es decir, normales.",
        why: "En <i>Vitalzeichen</i> la <b>V</b> se lee [v], con los dientes sobre el labio inferior, no como una b, y la <b>z</b> es [ts]; en <i>Befund</i> la <b>d</b> final se lee [t]; en <i>unauffällig</i> el acento cae en <b>un</b>."
      },
      {
        tr: "Con el paciente hablamos sin abreviaturas.",
        why: "En <i>Patienten</i> la <b>ti</b> se lee [tsi], no como en «paciente»; en <i>sprechen</i> la <b>sp</b> inicial es [ʃp], sin la e de apoyo que el español añade delante («esp»); en <i>Abkürzungen</i> el acento cae en <b>Ab</b> y la <b>ü</b> es breve."
      }
    ]
  },
  "lesson:pfl-u06-test": {
    theme: "Prueba",
    title: "Prueba: Relevo de turno y registro de enfermería",
    objectives: [
      "comprobar el Präteritum del relevo, los conectores, el estilo nominal, la pasiva, las finales y las abreviaturas de planta"
    ],
    theory: [
      {
        p: "Once preguntas sobre toda la unidad. Se aprueba con el 70%. Los pacientes y las situaciones son inventados y solo sirven de ejemplo: qué se documenta y qué abreviaturas se usan lo fijan las normas del centro."
      }
    ],
    exercises: [
      {
        q: "En el relevo: «Herr Brandt ___ in der Nacht starke Schmerzen.»",
        opts: ["war", "hatte", "wurde"],
        why: "<i>Schmerzen haben</i>, en Präteritum <b>hatte</b>: la forma que se usa también hablando."
      },
      {
        q: "Completa: «Der Verband ___ gestern gewechselt.»",
        hint: "pasiva en Präteritum",
        why: "<b>wurde</b>: la pasiva en Präteritum, con el participio <i>gewechselt</i> al final."
      },
      {
        q: "Completa: «Wir lagern ihn regelmäßig um, ___ kein Dekubitus entsteht.»",
        hint: "final, sujetos distintos",
        why: "<b>damit</b>: los sujetos son distintos (<i>wir</i> y <i>kein Dekubitus</i>) y el verbo conjugado <i>entsteht</i> va al final."
      },
      {
        tr: "El Präteritum de haben, todas las personas.",
        why: "<i>Hatte, hattest, hatte, hatten, hattet, hatten</i>: la <b>b</b> de <i>haben</i> desaparece y la <b>t</b> se duplica."
      },
      {
        q: "Une cada abreviatura con su significado.",
        pairs: ["el estado general", "el estado nutricional", "si precisa", "por vía oral"]
      },
      {
        q: "¿Qué entradas son correctas en un registro de enfermería?",
        opts: [
          "Verweigerung der Nahrungsaufnahme am Abend.",
          "Ärztin geinformiert.",
          "VZ o.B., AZ stabil.",
          "Patientin war heute wieder nervig.",
          "Verband gewechselt, Wunde unauffällig."
        ],
        why: "<i>informiert</i> no lleva <i>ge-</i>, porque el verbo termina en <i>-ieren</i>. <i>nervig</i> es un juicio, no una observación."
      },
      {
        q: "Completa la frase.",
        tr: "Estaba inquieta, por eso avisé a la médica.",
        why: "<i>Sie <b>war</b> unruhig</i>: sein en Präteritum. <i><b>deshalb</b> habe ich</i>: después del conector va enseguida el verbo."
      },
      {
        q: "Ordena las palabras.",
        tr: "Lo movilizamos todos los días para que siga siendo autónomo.",
        why: "<i>Wir mobilisieren ihn täglich, damit er selbstständig bleibt.</i> Después de <i>damit</i> el verbo conjugado <i>bleibt</i> va al final."
      },
      {
        q: "Elige el artículo determinado correcto para cada sustantivo.",
        items: ["relevo", "registro de enfermería", "objetivo de cuidados", "estado general percibido", "estado general", "intervención"]
      },
      {
        tr: "Por la noche la señora Keller estuvo inquieta, por eso avisé a la médica.",
        why: "En <i>unruhig</i> el acento cae en <b>un</b> y la <b>g</b> final se lee [ç]; en <i>deshalb</i> la <b>s</b> y la <b>h</b> se pronuncian separadas; en <i>informiert</i> el acento cae en <b>miert</b>."
      },
      {
        tr: "Le ofrecemos té a menudo para que beba más.",
        why: "En <i>bieten</i> la <b>ie</b> es una i larga; en <i>Tee</i> la doble <b>e</b> es una e larga y cerrada, más larga que cualquier e española; en <i>trinkt</i> la <b>nk</b> es [ŋk]."
      }
    ]
  }
});
