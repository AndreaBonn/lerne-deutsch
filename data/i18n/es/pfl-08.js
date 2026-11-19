/* ============================================================
   Learner-language text (es) for data/core/pfl-08.js, unit pfl-u08.
   Keys point at ids in the neutral layer; arrays merge by index,
   so their length has to match core.
   Checked by scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("es", {
  "unit:pfl-u08": {
    title: "Pase de visita, órdenes médicas y equipo",
    grammarNote: "la pasiva en presente y con modales en el pase de visita · las subordinadas con dass y ob para referir y comprobar una orden · los conectores deshalb, aber, denn · los verbos con preposición fija en la reunión de equipo · el Konjunktiv II de cortesía al teléfono"
  },
  "lesson:pfl-u08-l1": {
    theme: "Pase de visita",
    title: "El pase de visita",
    objectives: [
      "seguir el pase de visita y entender qué se decide para el paciente",
      "reconocer la pasiva: wird abgenommen, wird gewechselt, wurde gemacht",
      "entender la pasiva con modales: soll mobilisiert werden",
      "intervenir con las observaciones de enfermería"
    ],
    theory: [
      {
        h: "Qué pasa en la Visite",
        p: "En la <strong>Visite</strong> el médico (a menudo con la <em>Oberärztin</em> o el <em>Oberarzt</em>) pasa de habitación en habitación con la enfermera o el enfermero del paciente. Se miran los resultados (<em>Befunde</em>), se decide si el tratamiento sigue y se dan las órdenes para los días siguientes. Tu tarea es escuchar, apuntar y aportar las observaciones de enfermería: cómo ha dormido el paciente, si come, si se levanta, si tiene dolor. Las órdenes dadas de palabra durante la visita tienen que quedar luego por escrito en la documentación."
      },
      {
        h: "La pasiva: importa qué se hace",
        p: "En la Visite se habla sobre todo de <strong>qué se hace</strong>, no de quién lo hace. Por eso se usa la <strong>pasiva</strong>: <em>werden</em> conjugado + participio al final. En presente: <em>Der Verband <b>wird</b> morgen <b>gewechselt</b>.</em> En Präteritum: <em>Die Röntgenaufnahme <b>wurde</b> gestern <b>gemacht</b>.</em> Con un modal, se conjuga el modal y al final van el participio y <em>werden</em> en infinitivo: <em>Frau Lang <b>soll</b> heute <b>mobilisiert werden</b>.</em> Muchas veces quien hace la acción eres tú: <em>Bei Herrn Wolf wird ein Blutbild abgenommen</em> quiere decir que, después de la visita, la extracción le toca a enfermería."
      },
      {
        contrast: "En español el pase de visita se cuenta sobre todo con la pasiva refleja: «se sigue con el tratamiento», «mañana se saca un hemograma», «se cambia la cura». El alemán no tiene ese «se» tan cómodo para las acciones (<em>man</em> existe, pero en la Visite suena genérico): usa la pasiva con <em>werden</em>, <em>Die Therapie wird fortgesetzt</em>. Tampoco te apoyes en la pasiva con «ser» o «estar»: <em>Der Verband ist gewechselt</em> se parece a «la cura está cambiada» y describe un estado ya terminado, no la orden. La señal que hay que captar al vuelo es <em>wird</em> o <em>wurde</em> con un participio al final de la frase: cuando oyes <em>wird ... abgenommen</em>, es una orden que alguien tiene que cumplir. Y no la confundas con el futuro: <em>wird gewechselt</em> (participio) es pasiva, «se cambia»; <em>wird wechseln</em> (infinitivo) es futuro, «cambiará». Los cargos tampoco coinciden: el <em>Assistenzarzt</em> está en formación de especialidad, más o menos un residente; el <em>Oberarzt</em> es un especialista con responsabilidad sobre una sección, cerca de un médico adjunto; el <em>Chefarzt</em> es el jefe de servicio."
      },
      {
        trap: "<em>fortsetzen</em> es un verbo separable y lleva <em>ge-</em> después del prefijo: <em>fortgesetzt</em>, nunca <em>gefortsetzt</em>. <em>mobilisieren</em> en cambio termina en <em>-ieren</em> y su participio no lleva <em>ge-</em>: <em>mobilisiert</em>, nunca <em>gemobilisiert</em>. <em>Der Befund</em> no es solo el informe escrito: <em>ohne Befund</em> significa «sin hallazgos, normal», así que un informe «sin hallazgos» es una buena noticia, no un informe que falta. Y <em>die Visite</em> no es la visita de los familiares, que se dice <em>der Besuch</em>."
      },
      {
        tip: "Lleva a la Visite una hoja o la tableta con tus pacientes y apunta cada orden en el momento en que la oyes, con quién la hace y cuándo. Si se te escapa una frase, pregunta enseguida, junto a la cama: <em>Entschuldigung, wird das Blutbild heute oder morgen abgenommen?</em> Una pregunta más en la visita cuesta diez segundos; una orden mal entendida cuesta mucho más."
      }
    ],
    grammar: {
      title: "La pasiva con werden",
      note: "Presente: <b>wird</b> + participio. Präteritum: <b>wurde</b> + participio. Con un modal: <b>soll / muss / kann</b> + participio + <b>werden</b>.",
      table: {
        head: ["forma", "estructura", "ejemplo"],
        rows: [
          ["pasiva en presente", "wird + participio", "Der Verband wird morgen gewechselt."],
          ["pasiva en Präteritum", "wurde + participio", "Die Röntgenaufnahme wurde gestern gemacht."],
          ["pasiva con modal", "soll + participio + werden", "Frau Lang soll heute mobilisiert werden."],
          ["pregunta", "Wann / Wird ... + participio", "Wann wird Herr Wolf entlassen?"]
        ]
      },
      examples: [
        { tr: "Al señor Wolf hoy se le saca un hemograma.", note: "wird ... abgenommen: la extracción suele hacerla enfermería" },
        { tr: "La cura se cambia mañana.", note: "pasiva en presente: wird + gewechselt al final" },
        { tr: "La radiografía se hizo ayer.", note: "pasiva en Präteritum: wurde gemacht" },
        { tr: "A la señora Lang hay que levantarla hoy.", note: "modal soll + mobilisiert werden; mobilisiert sin ge-" },
        { tr: "El tratamiento sigue como hasta ahora.", note: "fortsetzen es separable: fortgesetzt" },
        { tr: "¿Cuándo le dan el alta al señor Wolf?", note: "pregunta con pasiva: entlassen al final" }
      ]
    },
    vocab: [
      "el pase de visita",
      "la médica adjunta (médica sénior)",
      "el resultado, el hallazgo",
      "el hemograma",
      "la radiografía",
      "la terapia, el tratamiento",
      "el tratamiento, la atención",
      "el cambio de apósito, la cura",
      "sacar sangre, hacer una extracción",
      "continuar, seguir con",
      "dar el alta",
      "normal, sin hallazgos"
    ],
    dialogue: [
      "Buenos días, señor Wolf. ¿Cómo se encuentra hoy?",
      "Mejor que ayer, pero todavía estoy cansado.",
      "La radiografía de ayer es normal. El tratamiento sigue como hasta ahora.",
      "¿Mañana se saca otro hemograma?",
      "Sí, mañana por la mañana, por favor. Y la cura se cambia hoy.",
      "De acuerdo. ¿Y la movilización?",
      "Al señor Wolf hay que movilizarlo hoy dos veces, primero al borde de la cama.",
      "¿Cuándo me dan el alta?",
      "Si los valores siguen bien, quizá el viernes."
    ],
    culture: {
      title: "Una mirada alemana: quién está en la Visite",
      text: "<p>En las plantas alemanas la <i>Visite</i> se hace normalmente por la mañana. El médico de planta (<i>Stationsarzt</i>, <i>Stationsärztin</i>) la hace a diario; una o dos veces por semana hay además la <i>Oberarztvisite</i> o la <i>Chefarztvisite</i>, con el jefe de servicio. Los cargos no coinciden exactamente con los de España o América Latina: el <i>Oberarzt</i> es más o menos un médico adjunto con responsabilidad de sección, el <i>Chefarzt</i> es el jefe de servicio y el <i>Assistenzarzt</i> es el médico en formación, como un residente.</p><p>La presencia de la enfermera en la visita no es igual en todas partes: en algunas plantas acompaña cada visita, en otras las órdenes se pasan después, en el control de enfermería. Pregunta al llegar cómo se hace en tu planta.</p>"
    },
    exercises: [
      {
        q: "En la Visite la médica dice que mañana por la mañana hay que sacar un hemograma. Completa: «Morgen früh ___ ein Blutbild abgenommen.»",
        opts: ["wird", "ist", "hat"],
        why: "La pasiva en presente se forma con <b>werden</b>: <i>wird</i> + el participio <i>abgenommen</i> al final. <i>ist abgenommen</i> describe un estado, <i>hat abgenommen</i> es un Perfekt activo (y con <i>abnehmen</i> también puede significar «ha adelgazado»)."
      },
      {
        tr: "El Präteritum de werden, todas las personas.",
        why: "<i>Wurde, wurdest, wurde, wurden, wurdet, wurden</i>: es la forma que sostiene la pasiva en pasado, <i>wurde gemacht</i>. La primera y la tercera persona del singular son iguales."
      },
      {
        q: "Completa: «Der Verband ___ heute gewechselt.»",
        hint: "pasiva en presente",
        why: "<b>wird</b>: sujeto singular <i>der Verband</i>, pasiva en presente con el participio <i>gewechselt</i> al final."
      },
      {
        q: "Completa la frase.",
        tr: "Al señor Wolf hay que movilizarlo hoy dos veces.",
        why: "<i>soll ... <b>mobilisiert werden</b></i>: con el modal, al final van el participio y luego <i>werden</i> en infinitivo. <i>mobilisiert</i> no lleva <i>ge-</i> porque el verbo termina en <i>-ieren</i>."
      },
      {
        q: "¿Qué frases son correctas?",
        opts: [
          "Die Therapie wird fortgesetzt.",
          "Die Therapie wird gefortsetzt.",
          "Das Blutbild wurde gestern abgenommen.",
          "Der Patient soll heute entlassen werden.",
          "Der Patient soll heute werden entlassen."
        ],
        why: "<i>fortsetzen</i> es separable: <i>fort<b>ge</b>setzt</i>, con <i>ge-</i> después del prefijo. Con un modal el orden final es participio + <i>werden</i>: <i>entlassen werden</i>, no <i>werden entlassen</i>."
      },
      {
        q: "Elige el artículo determinado correcto para cada sustantivo.",
        items: ["pase de visita", "médica adjunta", "resultado", "hemograma", "radiografía", "cambio de apósito"]
      },
      {
        q: "Relaciona cada palabra con su significado.",
        pairs: ["la terapia", "el resultado", "la radiografía", "el hemograma"]
      },
      {
        q: "Ordena las palabras.",
        tr: "El tratamiento sigue como hasta ahora.",
        why: "<i>Die Therapie wird wie bisher fortgesetzt.</i> El verbo conjugado <i>wird</i> en segunda posición, el participio <i>fortgesetzt</i> al final; <i>wie bisher</i> va en medio."
      },
      {
        q: "Traduce (en la Visite): «Mañana por la mañana se saca un hemograma.»",
        why: "<i>Morgen früh wird ein Blutbild abgenommen.</i> El «se» español se convierte en pasiva con <i>wird</i>. Para la extracción el verbo típico es <i>abnehmen</i>; también vale <i>gemacht</i>. <i>morgen früh</i> significa «mañana por la mañana»."
      },
      {
        q: "En la Visite.",
        setting: "Eres la enfermera del señor Wolf y acompañas el pase de visita con la médica adjunta.",
        lines: [
          { tr: "¿Enfermería tiene algo más sobre el señor Wolf?" },
          { tr: "Responde que por la noche el señor Wolf ha dormido poco.", answerTr: "Sí, por la noche el señor Wolf ha dormido poco." },
          { tr: "La cura se cambia hoy." },
          { tr: "Responde que la cambias después de la visita.", answerTr: "Bien, la cambio después de la visita." },
          { tr: "¿Y la movilización?" },
          { tr: "Responde que hoy el señor Wolf ya se ha levantado una vez.", answerTr: "Hoy al señor Wolf ya se le ha movilizado una vez." }
        ]
      },
      {
        tr: "La radiografía de ayer es normal. El tratamiento sigue como hasta ahora.",
        why: "En <i>Röntgenaufnahme</i> la <b>ö</b> es breve y el acento cae en <b>Rönt</b>; en <i>unauffällig</i> el acento cae en <b>un</b> y la <b>g</b> final suena [ç]; en <i>Therapie</i> la <b>th</b> es una simple [t] y el acento cae en la última sílaba, <b>pie</b>, como en «terapia» pero sin la <b>a</b> final."
      },
      {
        tr: "Al señor Wolf hoy se le saca un hemograma.",
        why: "En <i>Blutbild</i> la <b>u</b> es larga y la <b>d</b> final suena [t]; en <i>abgenommen</i> el acento cae en <b>ab</b>; la <b>w</b> de <i>Wolf</i> y de <i>wird</i> es [v], una «v» labiodental que el español no distingue de la «b»."
      }
    ]
  },
  "lesson:pfl-u08-l2": {
    theme: "Órdenes médicas y aclaraciones",
    title: "Entender y comprobar una orden médica",
    objectives: [
      "referir qué se ha ordenado con dass",
      "expresar una duda sobre una orden con ob",
      "pedir una aclaración al médico con nachfragen",
      "unir causa y consecuencia con deshalb, aber, denn"
    ],
    theory: [
      {
        h: "Una orden poco clara no se ejecuta",
        p: "La <strong>Anordnung</strong> es la orden médica: una prueba, una cura, la movilización, el ayuno antes de una intervención. Si una orden es poco clara, está incompleta o es inusual (falta cuándo, falta cómo, no parece adecuada para el paciente), la regla es una sola: <strong>primero se pregunta, luego se ejecuta</strong>. La frase que hay que tener lista es <em>Ich frage noch einmal nach.</em> Preguntar no es poner en duda la competencia del médico: es parte de la responsabilidad de quien ejecuta. Después de la aclaración, la orden correcta tiene que quedar por escrito."
      },
      {
        h: "Referir con dass, comprobar con ob",
        p: "Para decir qué pone o qué se ha ordenado se usa <em>dass</em>: <em>In der Akte steht, <b>dass</b> sie heute nüchtern bleibt.</em> Para expresar una duda se usa <em>ob</em>, la pregunta indirecta de sí o no: <em>Ich bin nicht sicher, <b>ob</b> die Anordnung noch gilt.</em> En las dos subordinadas el verbo conjugado va al final. Para unir dos oraciones principales: <em>deshalb</em> (consecuencia, el verbo va justo después), <em>aber</em> y <em>denn</em> (no cambian el orden): <em>Die Anordnung ist unklar, <b>deshalb frage</b> ich nach. Ich frage nach, <b>denn</b> ich <b>möchte</b> keinen Fehler machen.</em>"
      },
      {
        contrast: "En español «si» hace dos trabajos: la condición («si llueve») y la pregunta indirecta («no sé si sigue vigente»). El alemán los separa: la condición es <em>wenn</em>, la pregunta indirecta es <em>ob</em>. Quien habla español tiende a decir <em>Ich weiß nicht, wenn die Anordnung noch gilt</em>, que a un alemán le suena a «no lo sé, cuando la orden sigue vigente». La prueba es sencilla: si puedes convertir la frase en una pregunta de sí o no («¿sigue vigente la orden?»), necesitas <em>ob</em>. Y fíjate en el modo: tras «no estoy segura de que» el español pide subjuntivo («de que sea válida»); el alemán con <em>ob</em> sigue en indicativo, <em>ob die Anordnung noch gilt</em>, solo con el verbo al final. Para pedir la aclaración, donde en español dices «doctor, una pregunta» o «una duda con la señora Lang», en planta se dice a menudo <em>Ich habe eine Rückfrage</em>, una palabra que significa justamente pregunta de aclaración sobre algo ya dicho o escrito."
      },
      {
        trap: "<em>anordnen</em> es separable: <em>Die Ärztin <b>ordnet</b> ein Blutbild <b>an</b></em>, en Perfekt <em>hat ... ange<b>ordnet</b></em>. No lo confundas con <em>ordnen</em>, «ordenar» en el sentido de poner en orden. Tampoco con <em>bestellen</em>, que es pedir material o comida. <em>Die Indikation</em> es el motivo clínico de un tratamiento, como «indicación» en español médico, no unas instrucciones, que se dicen <em>die Anweisung</em>. Al paciente no se le dice <em>Indikation</em>, sino <em>der Grund für die Behandlung</em>."
      },
      {
        tip: "Cuando pidas una aclaración, repite con tus palabras lo que has entendido y luego haz la pregunta: <em>In der Akte steht, dass sie nüchtern bleiben soll. Gilt das noch?</em> Así el médico ve enseguida dónde está la duda. Apunta la respuesta, la hora y el nombre de quien te la ha dado."
      }
    ],
    grammar: {
      title: "dass, ob y los conectores",
      note: "<b>dass</b> refiere un hecho, <b>ob</b> introduce una duda (pregunta indirecta de sí o no): en ambas el verbo conjugado va al final. Después de <b>deshalb</b> el verbo va enseguida; <b>aber</b> y <b>denn</b> no cambian el orden.",
      table: {
        head: ["palabra", "función", "ejemplo"],
        rows: [
          ["dass", "referir qué pone o qué se ha ordenado", "In der Akte steht, dass der Verband täglich gewechselt wird."],
          ["ob", "expresar una duda, pregunta indirecta de sí o no", "Ich bin nicht sicher, ob die Anordnung noch gilt."],
          ["deshalb", "consecuencia, el verbo justo después", "Die Anordnung ist unklar, deshalb frage ich nach."],
          ["aber", "contraste, orden normal", "Ich habe sie gelesen, aber ich verstehe sie nicht."],
          ["denn", "causa, orden normal", "Ich frage nach, denn ich möchte keinen Fehler machen."]
        ]
      },
      examples: [
        { tr: "La médica ha ordenado que la señora Lang esté hoy en ayunas.", note: "dass: el verbo bleibt va al final" },
        { tr: "En la historia pone que la cura se cambia todos los días.", note: "dass + pasiva: gewechselt wird al final" },
        { tr: "No estoy segura de si la orden sigue vigente.", note: "ob: pregunta indirecta de sí o no, gilt al final y en indicativo" },
        { tr: "La orden no está clara, por eso vuelvo a preguntar.", note: "deshalb en primera posición, luego enseguida frage" },
        { tr: "He leído la orden, pero no la entiendo.", note: "aber no mueve el verbo" },
        { tr: "Prefiero preguntar una vez más, porque no quiero equivocarme.", note: "denn no mueve el verbo: möchte se queda en segunda posición" }
      ]
    },
    vocab: [
      "la orden médica, la prescripción",
      "ordenar, prescribir",
      "la indicación (clínica), el motivo del tratamiento",
      "el motivo, la razón",
      "la pregunta de aclaración",
      "volver a preguntar, consultar",
      "inequívoco, claro",
      "poco claro",
      "valer, estar vigente",
      "la historia clínica",
      "firmar",
      "ejecutar, llevar a cabo"
    ],
    dialogue: [
      "Perdone, doctor, tengo una pregunta sobre la señora Lang.",
      "Sí, dígame.",
      "En la historia pone que hoy tiene que estar en ayunas. No estoy seguro de si eso sigue vigente.",
      "Ha hecho bien en preguntar. La prueba se ha aplazado, así que ya puede comer.",
      "¿Y el hemograma? Aquí solo pone laboratorio, pero no cuándo.",
      "Mañana por la mañana, por favor. Lo añado ahora mismo en la historia.",
      "Gracias. Prefiero preguntar una vez más, porque no quiero equivocarme."
    ],
    culture: {
      title: "Una mirada alemana: orden médica y responsabilidad",
      text: "<p>En Alemania se distingue entre la responsabilidad de quien ordena (<i>Anordnungsverantwortung</i>, del médico) y la de quien ejecuta (<i>Durchführungsverantwortung</i>, de quien realiza la intervención). Quien ejecuta responde de cómo lo hace, y también de haberlo hecho cuando tenía motivos para dudar. Por eso una orden poco clara se aclara antes, no después.</p><p>Las órdenes verbales, por ejemplo por teléfono de noche, suelen repetirse en voz alta en la planta y el médico las firma lo antes posible. Cómo funciona exactamente lo fijan las normas de tu centro: pregúntalo durante la incorporación.</p>"
    },
    exercises: [
      {
        q: "En la historia encuentras una orden que te parece inusual. ¿Qué dices?",
        opts: ["Ich mache es so, wie ich es verstehe.", "Ich frage noch einmal nach.", "Ich warte bis morgen."],
        why: "Una orden poco clara o inusual se aclara siempre con el médico antes de ejecutarla: <b>Ich frage noch einmal nach</b>. Interpretarla por tu cuenta o aplazarla sin decir nada no son alternativas seguras."
      },
      {
        tr: "El Perfekt de anordnen, todas las personas.",
        why: "<i>Habe angeordnet, hast angeordnet, hat angeordnet</i> ...: verbo separable, <i>ge-</i> va entre el prefijo <i>an-</i> y la raíz, y la terminación es <i>-et</i> porque la raíz acaba en <b>d</b>."
      },
      {
        q: "Completa: «Ich bin nicht sicher, ___ die Anordnung noch gilt.»",
        hint: "pregunta indirecta de sí o no",
        why: "<b>ob</b>: la frase esconde una pregunta de sí o no («¿sigue vigente la orden?»). Es el «si» de «no sé si», no el de «si llueve». <i>wenn</i> sería una condición y <i>dass</i> un hecho seguro, que aquí falta."
      },
      {
        q: "Completa la frase.",
        tr: "La médica ha ordenado que la cura se cambie todos los días.",
        why: "<i><b>dass</b></i> refiere el contenido de la orden; en la subordinada la pasiva termina en <i>gewechselt <b>wird</b></i>: el verbo conjugado va al final, después del participio, y en indicativo, aunque el español use subjuntivo («que se cambie»)."
      },
      {
        q: "¿Qué frases son correctas?",
        opts: [
          "In der Akte steht, dass Frau Lang nüchtern bleibt.",
          "In der Akte steht, dass Frau Lang bleibt nüchtern.",
          "Ich weiß nicht, ob die Anordnung noch gilt.",
          "Ich weiß nicht, ob gilt die Anordnung noch.",
          "Die Anordnung ist unklar, deshalb frage ich nach."
        ],
        why: "Después de <i>dass</i> y <i>ob</i> el verbo conjugado va al final: <i>nüchtern bleibt</i>, <i>noch gilt</i>. Después de <i>deshalb</i> el verbo va enseguida: <i>deshalb frage ich</i>."
      },
      {
        q: "Elige el artículo determinado correcto para cada sustantivo.",
        items: ["orden médica", "indicación clínica", "motivo", "pregunta de aclaración", "historia clínica", "laboratorio"]
      },
      {
        q: "Relaciona cada palabra con su significado.",
        pairs: ["la orden médica", "la pregunta de aclaración", "la indicación clínica", "volver a preguntar"]
      },
      {
        q: "Ordena las palabras.",
        tr: "No estoy seguro de si la orden sigue vigente.",
        why: "<i>Ich bin nicht sicher, ob die Anordnung noch gilt.</i> Después de la coma <i>ob</i> abre la subordinada y el verbo <i>gilt</i> va al final."
      },
      {
        q: "Traduce: «La orden no está clara, por eso vuelvo a preguntar.»",
        why: "<i>Die Anordnung ist nicht eindeutig, deshalb frage ich noch einmal nach.</i> También vale <i>unklar</i> o <i>nicht klar</i>, y <i>darum</i> o <i>deswegen</i> en lugar de <i>deshalb</i>. «vuelvo a preguntar» es <i>frage ... noch einmal nach</i>; el prefijo <i>nach</i> va al final."
      },
      {
        q: "Una pregunta de aclaración.",
        setting: "Tienes una duda sobre la orden de la señora Lang y vas a ver al médico de planta.",
        lines: [
          { tr: "¿Quería hablar conmigo?" },
          { tr: "Responde que tienes una pregunta sobre la orden de la señora Lang.", answerTr: "Sí, tengo una pregunta sobre la orden de la señora Lang." },
          { tr: "¿Qué es lo que no está claro?" },
          { tr: "Responde que no sabes si hoy tiene que estar en ayunas.", answerTr: "No sé si hoy tiene que estar en ayunas." },
          { tr: "Ya puede comer. La prueba se ha aplazado." },
          { tr: "Da las gracias y pide que lo añada en la historia.", answerTr: "Gracias. Por favor, añádalo también en la historia." }
        ]
      },
      {
        tr: "En la historia pone que hoy tiene que estar en ayunas. No estoy seguro de si eso sigue vigente.",
        why: "En <i>nüchtern</i> la <b>ü</b> es breve y la <b>ch</b> después de <b>ü</b> es [ç]; en <i>sicher</i> la <b>s</b> inicial es sonora [z], un sonido que el español no tiene en esa posición; en <i>gilt</i> la <b>g</b> es siempre dura, como en «guitarra», nunca como en «gente»."
      },
      {
        tr: "Prefiero preguntar una vez más, porque no quiero equivocarme.",
        why: "En <i>lieber</i> la <b>ie</b> es larga; en <i>nach</i> la <b>ch</b> después de <b>a</b> es [x], parecida a la «j» española; en <i>möchte</i> la <b>ö</b> es breve y la <b>ch</b> es [ç]; en <i>Fehler</i> la <b>e</b> es larga y la <b>h</b> no se pronuncia."
      }
    ]
  },
  "lesson:pfl-u08-l3": {
    theme: "Reunión de equipo",
    title: "La reunión de equipo",
    objectives: [
      "participar en una reunión de equipo y tomar la palabra",
      "usar los verbos con preposición fija: sich kümmern um, sich erkundigen nach, warten auf, sprechen über",
      "preguntar de qué se habla con worum y worauf",
      "retomar un tema con darum, darüber, darauf"
    ],
    theory: [
      {
        h: "Quién hace qué",
        p: "En la <strong>Teambesprechung</strong> el equipo se reparte las tareas, comenta los casos difíciles (<em>Fallbesprechung</em>) y organiza el <em>Dienstplan</em>, el cuadrante de turnos. La pregunta que más se repite es <em>Wer kümmert sich um ...?</em>, «¿quién se encarga de ...?», y la respuesta que acepta una tarea es <em>Ich kümmere mich darum</em> o, más sencillo, <em>Das mache ich.</em> Para tomar la palabra sin interrumpir: <em>Ich würde gern etwas zu Herrn Wolf sagen.</em>"
      },
      {
        h: "Verbos con preposición fija",
        p: "Muchos verbos alemanes llevan una <strong>preposición fija</strong>, que se aprende junto con el verbo como un bloque: <em>sich kümmern <b>um</b></em> + acusativo, <em>sich erkundigen <b>nach</b></em> + dativo, <em>warten <b>auf</b></em> + acusativo, <em>sprechen <b>über</b></em> + acusativo. La pregunta se hace con <em>wo(r)</em> + preposición: <em><b>Worauf</b> wartest du?</em> Y para retomar algo ya dicho se usa <em>da(r)</em> + preposición: <em>Ich kümmere mich <b>darum</b>. <b>Darüber</b> sprechen wir am Ende.</em> Para las personas, en cambio, se mantiene la preposición con el pronombre: <em>Ich kümmere mich <b>um ihn</b>.</em>"
      },
      {
        contrast: "El español también tiene verbos con preposición fija, pero las preposiciones casi nunca coinciden: «ocuparse <b>de</b>» o «encargarse <b>de</b>» es <em>sich kümmern <b>um</b></em>, «preguntar <b>por</b>» es <em>sich erkundigen <b>nach</b></em>, «esperar» (sin preposición) es <em>warten <b>auf</b></em>, «hablar <b>de</b>» es <em>sprechen <b>über</b></em>. Traducir la preposición española lleva a errores típicos: <em>sich kümmern von</em>, <em>sich erkundigen für</em>, <em>warten für</em> o directamente <em>warten den Befund</em>, porque en español «espero el informe» no lleva nada. Hay otra diferencia: el español retoma con un pronombre átono, «yo me encargo», «de eso hablamos luego», «lo espero»; el alemán construye una palabra con <em>da-</em>: <em>Ich kümmere mich <b>darum</b>. Wir sprechen später <b>darüber</b>. Ich warte <b>darauf</b>.</em> Y la pregunta «¿qué esperas?» no es <em>Was wartest du?</em>, sino <em><b>Worauf</b> wartest du?</em>"
      },
      {
        trap: "<em>sich erkundigen</em> y <em>sich kümmern</em> son reflexivos, como «encargarse» u «ocuparse»: sin <em>sich</em> la frase está mal (<em>Ich kümmere <b>mich</b> um ihn</em>, no <em>Ich kümmere um ihn</em>). <em>erkundigen</em> tiene el prefijo inseparable <em>er-</em>, así que sin <em>ge-</em> en el participio: <em>hat sich erkundigt</em>. Y cuando un familiar pregunta por un resultado, en la reunión no se decide la respuesta sino quién avisa al médico, porque la conversación sobre el diagnóstico le corresponde a él."
      },
      {
        tip: "Aprende los verbos con la preposición y el caso ya dentro de una frase de planta: <em>Ich kümmere mich um Zimmer acht. Ich warte auf den Befund. Wir sprechen über den Dienstplan.</em> Tres frases así, repetidas en voz alta, valen más que una lista de preposiciones de memoria."
      }
    ],
    grammar: {
      title: "Verbos con preposición fija",
      note: "El verbo se aprende con su <b>preposición</b> y su <b>caso</b>. Pregunta: <b>wo(r)</b> + preposición. Retomar una cosa: <b>da(r)</b> + preposición. Para personas: preposición + pronombre.",
      table: {
        head: ["verbo", "caso", "pregunta", "retomar"],
        rows: [
          ["sich kümmern um", "acusativo", "Worum kümmerst du dich?", "Ich kümmere mich darum."],
          ["sich erkundigen nach", "dativo", "Wonach hat sie sich erkundigt?", "Sie hat sich danach erkundigt."],
          ["warten auf", "acusativo", "Worauf wartest du?", "Ich warte darauf."],
          ["sprechen über", "acusativo", "Worüber sprechen wir?", "Darüber sprechen wir am Ende."]
        ]
      },
      examples: [
        { tr: "¿Quién se encarga hoy de la habitación ocho?", note: "sich kümmern um + acusativo" },
        { tr: "Yo me encargo del nuevo ingreso.", note: "um die Neuaufnahme: acusativo femenino" },
        { tr: "Hoy hablamos del cuadrante de turnos.", note: "sprechen über + acusativo: über den Dienstplan" },
        { tr: "La hija ha preguntado por el resultado.", note: "sich erkundigen nach + dativo: nach dem Befund; erkundigt sin ge-" },
        { tr: "Todavía estoy esperando el informe médico.", note: "warten auf + acusativo: auf den Arztbrief" },
        { tr: "De eso hablamos al final.", note: "darüber retoma un tema ya mencionado" }
      ]
    },
    vocab: [
      "la reunión de equipo",
      "el cuadrante de turnos",
      "ocuparse de, encargarse de",
      "preguntar por, informarse sobre",
      "hablar de",
      "esperar (algo o a alguien)",
      "quejarse de",
      "el nuevo ingreso, el paciente recién ingresado",
      "la sesión clínica, el comentario de un caso",
      "la propuesta",
      "de acuerdo",
      "la supervisora de planta, la jefa de enfermería de la unidad"
    ],
    dialogue: [
      "Hoy tenemos dos temas: el cuadrante y el señor Wolf.",
      "Me gustaría decir primero algo sobre el señor Wolf.",
      "Adelante.",
      "Ayer su hija preguntó por el resultado. Le dije que el médico hablará con ella.",
      "Yo me encargo de que el médico la llame hoy.",
      "Bien. ¿Y quién se encarga del nuevo ingreso de esta tarde?",
      "Lo hago yo. Pero todavía estoy esperando el informe médico.",
      "De acuerdo. Del cuadrante hablamos al final."
    ],
    culture: {
      title: "Una mirada alemana: la Stationsleitung y el Dienstplan",
      text: "<p>La <i>Stationsleitung</i> corresponde más o menos a la supervisora de planta: organiza al personal, prepara el <i>Dienstplan</i> y suele dirigir la reunión de equipo. El cuadrante se publica con antelación y los días libres deseados (<i>Wunschfrei</i>) se apuntan antes de una fecha fijada por la planta.</p><p>En la reunión los compañeros se tratan a menudo de <i>du</i>, aunque con la dirección y con los médicos en muchas plantas se mantiene el <i>Sie</i>. El tuteo en alemán es menos automático que en España; si no estás segura, escucha cómo se tratan los demás o pregunta: <i>Duzen wir uns?</i></p>"
    },
    exercises: [
      {
        q: "Completa: «Ich kümmere mich ___ die Neuaufnahme.»",
        opts: ["um", "für", "auf"],
        why: "<i>sich kümmern</i> lleva siempre <b>um</b> + acusativo. <i>für</i> es la traducción literal de un «por» o «para» que aquí no hay; <i>auf</i> va con <i>warten auf</i>."
      },
      {
        tr: "El presente de sich kümmern, todas las personas.",
        why: "<i>Kümmere mich, kümmerst dich, kümmert sich, kümmern uns, kümmert euch, kümmern sich</i>: el pronombre reflexivo cambia con la persona, como «me encargo, te encargas». En la primera persona del singular la <b>e</b> delante de <b>r</b> se mantiene: <i>kümmere</i>."
      },
      {
        q: "Completa: «Wir warten noch ___ den Befund.»",
        hint: "preposición de warten",
        why: "<b>auf</b>: <i>warten auf</i> + acusativo. En español «esperar» no lleva preposición, por eso es fácil olvidarla o poner <i>für</i>."
      },
      {
        q: "Completa la frase.",
        tr: "La hija ha preguntado por el resultado.",
        why: "<i>sich erkundigen <b>nach</b></i> + dativo: <i>nach dem Befund</i>. El «por» español no se traduce con <i>für</i>. El participio <i><b>erkundigt</b></i> no lleva <i>ge-</i>, porque <i>er-</i> es un prefijo inseparable."
      },
      {
        q: "¿Qué frases son correctas?",
        opts: [
          "Wer kümmert sich um Zimmer acht?",
          "Wer kümmert sich für Zimmer acht?",
          "Wir sprechen über den Dienstplan.",
          "Er hat sich nach seinem Befund erkundigt.",
          "Wir warten noch für die Laborwerte."
        ],
        why: "Las preposiciones fijas son <i>kümmern <b>um</b></i>, <i>sprechen <b>über</b></i>, <i>erkundigen <b>nach</b></i>, <i>warten <b>auf</b></i>. <i>für</i> no va con ninguno de estos verbos."
      },
      {
        q: "Elige el artículo determinado correcto para cada sustantivo.",
        items: ["reunión de equipo", "cuadrante de turnos", "nuevo ingreso", "comentario de un caso", "propuesta", "supervisora de planta"]
      },
      {
        q: "Relaciona cada verbo con su significado.",
        pairs: ["encargarse de", "preguntar por", "esperar", "hablar de"]
      },
      {
        q: "Ordena las palabras.",
        tr: "¿Quién se encarga del nuevo ingreso?",
        why: "<i>Wer kümmert sich um die Neuaufnahme?</i> <i>Wer</i> es el sujeto, el verbo va justo después, luego el reflexivo <i>sich</i> y al final la preposición con su complemento."
      },
      {
        q: "Traduce: «Mañana hablamos del cuadrante de turnos.»",
        why: "<i>Morgen sprechen wir über den Dienstplan</i> o <i>Wir sprechen morgen über den Dienstplan</i>. «hablar de» es <i>sprechen über</i> + acusativo, no <i>von</i>; también vale <i>reden über</i>."
      },
      {
        q: "En la reunión de equipo.",
        setting: "La supervisora reparte las tareas. Tú llevas al señor Wolf.",
        lines: [
          { tr: "¿Quién se encarga hoy del señor Wolf?" },
          { tr: "Responde que te encargas tú de él.", answerTr: "Me encargo yo de él." },
          { tr: "¿Alguien ha preguntado por él?" },
          { tr: "Responde que ayer su hija preguntó por él.", answerTr: "Sí, ayer su hija preguntó por él." },
          { tr: "¿Qué estás esperando todavía?" },
          { tr: "Responde que todavía esperas el informe médico.", answerTr: "Todavía estoy esperando el informe médico." }
        ]
      },
      {
        tr: "La hija ha preguntado por el resultado.",
        why: "En <i>Tochter</i> la <b>ch</b> después de <b>o</b> es [x], como una «j» española; en <i>erkundigt</i> el acento cae en <b>kun</b> y la <b>g</b> delante de <b>t</b> suena [ç]; en <i>Befund</i> la <b>d</b> final suena [t]."
      },
      {
        tr: "Yo me encargo del nuevo ingreso.",
        why: "En <i>kümmere</i> la <b>ü</b> es breve: se dice con los labios de «u» y la lengua de «i»; en <i>Neuaufnahme</i> hay dos diptongos, <b>eu</b> [ɔʏ], parecido a «oi», y <b>au</b> [aʊ], como en «causa», y el acento cae en <b>Neu</b>."
      }
    ]
  },
  "lesson:pfl-u08-l4": {
    theme: "Al teléfono",
    title: "Al teléfono: laboratorio, farmacia, médico de cabecera",
    objectives: [
      "presentarse al teléfono y decir desde qué planta se llama",
      "pedir con cortesía: hätte, könnten, wäre es möglich, würden",
      "pedir que repitan o deletreen un nombre",
      "repetir los datos recibidos para comprobarlos"
    ],
    theory: [
      {
        h: "Una llamada desde la planta",
        p: "Al teléfono se empieza diciendo quién llama y desde dónde: <em>Guten Tag, hier ist Station drei.</em> Luego se dice por qué paciente se llama (<em>Um Herrn Wolf, Zimmer fünf</em>) y qué se necesita. Quien contesta suele decir el servicio y su apellido: <em>Labor, Schneider, guten Tag.</em> Al final se repiten los datos importantes: <em>Ich wiederhole: ...</em> Un valor de laboratorio recibido por teléfono se apunta enseguida, se repite para comprobarlo y, si está alterado, se comunica al médico."
      },
      {
        h: "El Konjunktiv II de cortesía",
        p: "Para pedir algo con amabilidad el alemán usa el <strong>Konjunktiv II</strong>, el equivalente del condicional. Cuatro fórmulas bastan para casi cualquier llamada: <em>Ich <b>hätte</b> eine Frage zu ...</em> (tendría una pregunta), <em><b>Könnten</b> Sie mir ... durchgeben?</em> (¿podría ...?), <em><b>Wäre</b> es möglich, ... zu schicken?</em> (¿sería posible ...?), <em><b>Würden</b> Sie mich bitte zurückrufen?</em> (¿me devolvería la llamada?). Para un deseo: <em>Ich <b>würde</b> gern mit Doktor Becker sprechen.</em> Después de <em>Wäre es möglich</em> va el infinitivo con <em>zu</em>, al final: <em>den Befund heute noch <b>zu schicken</b></em>."
      },
      {
        contrast: "El condicional de cortesía existe también en español («¿podría ...?», «querría», «¿sería posible ...?»), así que la idea te resulta familiar. Las diferencias son dos. Primera: el español conjuga en condicional cualquier verbo («¿me llamaría?», «¿me mandaría?»), mientras que el alemán solo tiene formas propias para unos pocos verbos frecuentes (<em>hätte, wäre, könnte</em>); para los demás usa <em>würde</em> + infinitivo al final: «¿me devolvería la llamada?» es <em>Würden Sie mich zurückrufen?</em> Segunda: en español «¿me pasa los valores?» en presente ya es amable, y en muchas plantas basta con «pásame los valores, porfa». En alemán al teléfono la frase sin condicional suena brusca enseguida: <em>Geben Sie mir die Werte!</em> es una orden, y <em>Sie können mir die Werte durchgeben</em> suena casi a permiso concedido. La versión segura pasa por <em>könnten</em> o <em>würden</em>."
      },
      {
        trap: "<em>Ich hätte eine Frage</em> no significa que la pregunta sea hipotética: es simplemente la forma amable de decir «tengo una pregunta», como «querría preguntarle». No confundas <em>hätte</em> (tendría) con <em>hatte</em> (tenía): la diferencia es solo la diéresis, y al teléfono se oye en la vocal, [ɛ] frente a [a]. <em>durchgeben</em> es separable: <em>Könnten Sie mir die Werte <b>durchgeben</b>?</em>, pero <em>Das Labor <b>gibt</b> die Werte <b>durch</b>.</em> Y <em>die Durchwahl</em> es la extensión, el número directo, no la «vía» de un acceso venoso."
      },
      {
        tip: "Al teléfono los nombres se deletrean con el alfabeto telefónico alemán: <em>W wie Wilhelm, O wie Otto</em>, como en español «W de Washington, O de Oviedo», pero con otras palabras. Los números se dicen de uno en uno: <em>zwei, drei, vier, fünf</em>, no <em>dreiundzwanzig, fünfundvierzig</em>, porque el orden invertido de las decenas (<em>drei-und-zwanzig</em>, «tres y veinte») es justo donde se cometen errores. Cuando recibas un dato, repítelo siempre: <em>Ich wiederhole: ...</em>"
      }
    ],
    grammar: {
      title: "Fórmulas de cortesía al teléfono",
      note: "<b>hätte, wäre, könnte</b> son formas propias del Konjunktiv II. Para casi todos los demás verbos: <b>würde</b> + infinitivo al final. Después de <b>Wäre es möglich</b>: infinitivo con <b>zu</b> al final.",
      table: {
        head: ["fórmula", "significado", "ejemplo"],
        rows: [
          ["Ich hätte ...", "tendría, es decir: tengo", "Ich hätte eine Frage zu einem Medikament."],
          ["Könnten Sie ...?", "¿podría ...?", "Könnten Sie mir die Laborwerte durchgeben?"],
          ["Wäre es möglich, ... zu ...?", "¿sería posible ...?", "Wäre es möglich, den Befund heute noch zu schicken?"],
          ["Würden Sie ...?", "+ infinitivo: condicional de los demás verbos", "Würden Sie mich bitte zurückrufen?"],
          ["Ich würde gern ...", "me gustaría, querría", "Ich würde gern mit Doktor Becker sprechen."]
        ]
      },
      examples: [
        { tr: "Tendría una pregunta sobre un medicamento.", note: "hätte: forma de cortesía de haben" },
        { tr: "¿Podría pasarme los resultados de laboratorio del señor Wolf?", note: "könnten + durchgeben al final" },
        { tr: "¿Sería posible mandar el informe todavía hoy?", note: "Wäre es möglich + infinitivo con zu al final" },
        { tr: "¿Me devolvería la llamada, por favor?", note: "würden + infinitivo: zurückrufen al final" },
        { tr: "Me gustaría hablar con el doctor Becker.", note: "würde gern + infinitivo" },
        { tr: "Repito: habitación cinco, señor Wolf.", note: "repetir los datos para comprobarlos" }
      ]
    },
    vocab: [
      "el laboratorio",
      "la farmacia",
      "el médico de cabecera, el médico de familia",
      "el valor de laboratorio",
      "la extensión, el número directo",
      "la devolución de la llamada",
      "comunicar, pasar (por teléfono)",
      "devolver la llamada",
      "localizable, disponible",
      "deletrear",
      "pasar (una llamada), poner en contacto",
      "suministrar, entregar"
    ],
    dialogue: [
      "Laboratorio, Schneider, buenas tardes.",
      "Buenas tardes, le llamo de la planta tres. Tendría una pregunta sobre un hemograma.",
      "¿De qué paciente se trata?",
      "Del señor Wolf, habitación cinco. ¿Podría decirme si ya están los valores?",
      "Los valores están casi listos. Se los mando en diez minutos.",
      "¿Sería posible que me llamara si algún valor sale alterado?",
      "Sí, claro. ¿Cuál es su extensión?",
      "Dos, tres, cuatro, cinco. Repito: me llama si algún valor sale alterado. Muchas gracias."
    ],
    culture: {
      title: "Una mirada alemana: farmacia del hospital y médico de cabecera",
      text: "<p>En los hospitales alemanes los medicamentos suelen llegar de la <i>Krankenhausapotheke</i>, la farmacia hospitalaria, o de una farmacia externa concertada. Los pedidos siguen horarios fijos; si falta un medicamento se llama por teléfono y se pregunta si es posible una entrega extraordinaria.</p><p>El <i>Hausarzt</i> es el médico de cabecera. Desde la planta se le llama, por ejemplo, para preguntar qué medicamentos tomaba el paciente en casa o para preparar el alta. Qué se puede decir por teléfono lo fija la protección de datos: antes de dar información sobre un paciente, comprueba quién está al otro lado.</p>"
    },
    exercises: [
      {
        q: "Llamas al laboratorio y quieres los valores de un paciente. ¿Qué frase es cortés?",
        opts: ["Geben Sie mir die Werte!", "Könnten Sie mir bitte die Werte durchgeben?", "Sie können mir die Werte durchgeben."],
        why: "<b>Könnten Sie ...?</b> con el Konjunktiv II es la petición cortés. El imperativo suena a orden, y <i>Sie können</i> como si fueras tú quien da permiso."
      },
      {
        tr: "El Konjunktiv II de können, todas las personas.",
        why: "<i>Könnte, könntest, könnte, könnten, könntet, könnten</i>: la raíz lleva diéresis (<b>ö</b>) y las terminaciones son las del Präteritum. Al teléfono la forma que más se usa es <i>Könnten Sie ...?</i>"
      },
      {
        q: "Completa: «Ich ___ eine Frage zu einem Medikament.»",
        hint: "Konjunktiv II de haben",
        why: "<b>hätte</b>: forma de cortesía de <i>haben</i>, «tendría». Ojo con la diéresis: <i>hatte</i> sin ella es el Präteritum, «tenía»."
      },
      {
        q: "Completa la frase.",
        tr: "¿Me devolvería la llamada, por favor?",
        why: "<i><b>Würden</b> Sie mich bitte <b>zurückrufen</b>?</i>: Konjunktiv II con <i>würden</i> y el infinitivo al final, donde el español conjuga el propio verbo («devolvería»). También vale <i>Könnten</i>. En infinitivo <i>zurückrufen</i> va junto."
      },
      {
        q: "¿Qué frases son correctas?",
        opts: [
          "Ich hätte eine Frage zur Lieferung.",
          "Ich habe gern eine Frage.",
          "Wäre es möglich, den Befund heute noch zu schicken?",
          "Ich würde gern mit Doktor Becker sprechen.",
          "Ich würde gern mit Doktor Becker zu sprechen."
        ],
        why: "<i>hätte</i> es la forma de cortesía correcta; <i>gern</i> va con <i>würde</i>, no con <i>habe eine Frage</i>. Después de <i>Wäre es möglich</i> hace falta <i>zu</i>; después de <i>würde gern</i> el infinitivo va sin <i>zu</i>."
      },
      {
        q: "Elige el artículo determinado correcto para cada sustantivo.",
        items: ["laboratorio", "farmacia", "médico de cabecera", "valor de laboratorio", "extensión", "devolución de la llamada"]
      },
      {
        q: "Relaciona cada verbo con su significado.",
        pairs: ["comunicar (por teléfono)", "devolver la llamada", "deletrear", "pasar una llamada"]
      },
      {
        q: "Ordena las palabras.",
        tr: "Tendría una pregunta sobre un hemograma.",
        why: "<i>Ich hätte eine Frage zu einem Blutbild.</i> El verbo <i>hätte</i> en segunda posición; «sobre» aquí es <i>zu</i> + dativo: <i>zu einem Blutbild</i>. También vale <i>Ich hätte zu einem Blutbild eine Frage</i>."
      },
      {
        q: "Traduce: «¿Podría devolverme la llamada dentro de diez minutos?»",
        why: "<i>Könnten Sie mich in zehn Minuten zurückrufen?</i> También vale <i>Würden Sie mich ... zurückrufen?</i>, con o sin <i>bitte</i>. «dentro de diez minutos» es <i>in zehn Minuten</i>, no <i>innerhalb</i>."
      },
      {
        q: "Una llamada a la farmacia.",
        setting: "No ha llegado un medicamento para la habitación cinco. Llamas a la farmacia del hospital.",
        lines: [
          { tr: "Farmacia, buenas tardes." },
          { tr: "Di desde qué planta llamas y que tendrías una pregunta sobre una entrega.", answerTr: "Buenas tardes, le llamo de la planta tres. Tendría una pregunta sobre una entrega." },
          { tr: "¿De qué se trata exactamente?" },
          { tr: "Explica que todavía no ha llegado un medicamento para la habitación cinco y pregunta si sería posible entregarlo hoy.", answerTr: "Todavía no ha llegado un medicamento para la habitación cinco. ¿Sería posible entregarlo todavía hoy?" },
          { tr: "Lo compruebo y le devuelvo la llamada." },
          { tr: "Da las gracias y di tu extensión.", answerTr: "Gracias. Mi extensión es dos, tres, cuatro, cinco." }
        ]
      },
      {
        tr: "¿Sería posible que me llamara si algún valor sale alterado?",
        why: "En <i>wäre</i> la <b>ä</b> es larga, [ɛː], una «e» abierta y larga; en <i>möglich</i> la <b>ö</b> es larga y la <b>ch</b> final es [ç]; en <i>auffällig</i> el acento cae en <b>auf</b>."
      },
      {
        tr: "Tendría una pregunta sobre un medicamento.",
        why: "En <i>hätte</i> la <b>ä</b> es breve y se distingue de <i>hatte</i> solo por la vocal; en <i>Medikament</i> el acento cae en la última sílaba, <b>ment</b>, no en la penúltima como en «medicamento»."
      }
    ]
  },
  "lesson:pfl-u08-test": {
    theme: "Prueba",
    title: "Prueba: Pase de visita, órdenes médicas y equipo",
    objectives: [
      "comprobar la pasiva del pase de visita, dass y ob en las órdenes, los verbos con preposición y el Konjunktiv II al teléfono"
    ],
    theory: [
      {
        p: "Once preguntas sobre toda la unidad. Se aprueba con el 70%. Los pacientes y las situaciones son inventados y solo sirven de ejemplo: cómo se ejecutan y se documentan las órdenes lo fijan las normas del centro. Una orden poco clara se aclara siempre con el médico."
      }
    ],
    exercises: [
      {
        q: "Una orden te parece inusual. ¿Qué haces?",
        opts: ["Ich führe sie trotzdem aus.", "Ich frage noch einmal bei der Ärztin nach.", "Ich ändere sie selbst."],
        why: "Una orden inusual se aclara con el médico antes de ejecutarla: <b>Ich frage noch einmal bei der Ärztin nach</b>. Ejecutarla de todos modos o cambiarla por tu cuenta no son vías seguras."
      },
      {
        q: "Completa: «Der Verband ___ morgen gewechselt.»",
        hint: "pasiva en presente",
        why: "<b>wird</b>: pasiva en presente, <i>werden</i> conjugado + el participio <i>gewechselt</i> al final."
      },
      {
        tr: "El Konjunktiv II de haben, todas las personas.",
        why: "<i>Hätte, hättest, hätte, hätten, hättet, hätten</i>: como el Präteritum <i>hatte</i>, pero con la diéresis <b>ä</b>."
      },
      {
        q: "Relaciona cada palabra con su significado.",
        pairs: ["el pase de visita", "la pregunta de aclaración", "el cuadrante de turnos", "la extensión"]
      },
      {
        q: "¿Qué frases son correctas?",
        opts: [
          "Die Therapie wird fortgesetzt.",
          "Ich warte noch für den Befund.",
          "Könnten Sie mich bitte zurückrufen?",
          "Ich bin nicht sicher, ob die Anordnung gilt noch.",
          "Die Tochter hat sich nach dem Befund erkundigt."
        ],
        why: "<i>warten</i> lleva <i>auf</i>, no <i>für</i>. Después de <i>ob</i> el verbo va al final: <i>ob die Anordnung noch gilt</i>."
      },
      {
        q: "Completa la frase.",
        tr: "En la historia pone que hoy hay que sacar un hemograma.",
        why: "<i><b>dass</b></i> refiere lo que pone; en la subordinada la pasiva termina en <i>abgenommen <b>wird</b></i>."
      },
      {
        q: "Ordena las palabras.",
        tr: "Todavía estamos esperando los resultados de laboratorio.",
        why: "<i>Wir warten noch auf die Laborwerte.</i> <i>warten auf</i> + acusativo; <i>noch</i> va antes de la preposición."
      },
      {
        q: "Elige el artículo determinado correcto para cada sustantivo.",
        items: ["pase de visita", "orden médica", "resultado", "hemograma", "cuadrante de turnos", "laboratorio"]
      },
      {
        q: "Traduce: «Mañana se cambia la cura.»",
        why: "<i>Morgen wird der Verband gewechselt</i> o <i>Der Verband wird morgen gewechselt</i>: pasiva en presente con <i>wird</i> y el participio al final. El «se» español no tiene equivalente directo aquí."
      },
      {
        tr: "El tratamiento sigue como hasta ahora.",
        why: "En <i>Therapie</i> el acento cae en <b>pie</b>; en <i>bisher</i> el acento cae en <b>her</b>; en <i>fortgesetzt</i> el acento cae en <b>fort</b>."
      },
      {
        tr: "¿Sería posible que me llamara si algún valor sale alterado?",
        why: "En <i>wäre</i> la <b>ä</b> es larga; en <i>anzurufen</i> el <i>zu</i> va entre el prefijo <i>an</i> y el verbo; en <i>Wert</i> la <b>w</b> es [v] y la <b>e</b> es larga."
      }
    ]
  }
});
