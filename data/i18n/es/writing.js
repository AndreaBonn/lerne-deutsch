/* Tareas de escritura - consignas y listas de control en español.
   El texto modelo vive en la capa neutra. */
LINGUAI.addStrings("es", {

  "write:w-a1-vorstellung": {
    title: "Me presento",
    brief: "Escribe un texto breve en alemán para presentarte: cómo te llamas, de dónde eres y dónde vives ahora. Puedes añadir tu edad, tu trabajo o una afición.",
    checklist: ["¿El verbo conjugado ocupa el segundo lugar en cada oración principal?", "¿Has escrito todos los sustantivos con mayúscula?", "¿Has empezado con un saludo como Hallo o Guten Tag?"]
  },
  "write:w-a2-gestern": {
    title: "¿Qué hiciste ayer?",
    brief: "Traduce las frases al alemán. No hace falta que coincidan palabra por palabra. Donde el español usa el pretérito indefinido (fui, comimos), el alemán hablado suele usar el Perfekt.",
    checklist: ["¿Elegiste bien el auxiliar? gehen, ankommen y aufstehen van con sein; essen y verstehen, con haben. En español todos van con haber, así que esta es la elección que hay que vigilar.", "¿El participio está al final de la frase y no junto al auxiliar?", "¿Escribiste ich bin aufgestanden sin mich? Aufstehen no es reflexivo, aunque en español se diga me levanté."],
    items: [{ q: "Ayer fui al cine." }, { q: "Comimos un escalope." }, { q: "No entendí la pregunta." }, { q: "El tren llegó tarde." }, { q: "Me levanté tarde." }]
  },
  "write:w-b1-absage": {
    title: "Cancelar una cita",
    brief: "Escribe un correo formal breve: cancelas una cita, explicas en pocas palabras el motivo y propones otra fecha.",
    checklist: ["¿Usaste Sie de principio a fin, con Ihnen e Ihr en mayúscula?", "Después de Sehr geehrte Frau ... va una coma, y la línea siguiente empieza con minúscula. En español, Estimada señora lleva dos puntos y mayúscula después; ¿lo evitaste?", "¿La nueva fecha es concreta: un día y una franja horaria?"]
  },
  "write:w-b1-meinung": {
    title: "Decir lo que piensas",
    brief: "Traduce las frases al alemán.",
    checklist: ["Después de dass, ¿el verbo conjugado pasó al final de la oración?", "Depende de lo que quieras lleva subjuntivo en español; el alemán usa el indicativo: es hängt davon ab, was du willst. ¿Evitaste buscar un subjuntivo?", "¿Pusiste coma delante de dass? En alemán es obligatoria; en español no va coma delante de que."],
    items: [{ q: "Creo que es una buena idea." }, { q: "No estoy de acuerdo contigo." }, { q: "En mi opinión es demasiado caro." }, { q: "Me parece que él tiene razón." }, { q: "Depende de lo que quieras." }]
  },
  "write:w-b2-argumentieren": {
    title: "Defender una postura",
    brief: "Elige un tema que te importe, por ejemplo el teletrabajo, un límite general de velocidad en las autopistas alemanas o la apertura de las tiendas en domingo, y defiende tu postura. Expón al menos un argumento contrario y respóndelo.",
    checklist: ["¿El argumento contrario está expuesto con honestidad y no como un hombre de paja?", "Después de außerdem, deshalb o jedoch al principio de la frase, ¿viene enseguida el verbo (Deshalb liegt das Problem ...)? En español, después de por eso, el orden es libre; en alemán el verbo ocupa el segundo lugar.", "¿La conclusión es una frase y no un eslogan?"]
  },
  "write:w-c1-zusammenfassung": {
    title: "Resumir sin copiar",
    brief: "Resume el texto «Se ruega prestar atención» de la sección Leer y escuchar. No copies sus frases: escribe qué sostiene el autor y en qué se basa, y refiere sus tesis en estilo indirecto.",
    checklist: ["¿Referiste las tesis del autor con el Konjunktiv I (sei, nenne, gebe)? Este modo solo indica que la afirmación es del autor, sin añadir duda ni desacuerdo; el español confía esa tarea a palabras como según el autor.", "¿El resumen se entiende sin el texto original?", "¿Tu opinión quedó fuera, o ocupó el lugar de la del autor?"]
  }

});
