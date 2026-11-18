/* ============================================================
   Pares mínimos: texto en español.

   Las notas contrastivas están escritas para un hispanohablante, no
   traducidas. El español tiene cinco vocales y ninguna distinción de
   duración, así que hay que aprender a oír tanto la duración como la
   diferencia de timbre entre la vocal tensa y la relajada.
   ============================================================ */
LINGUAI.addStrings("es", {

  "ph:ph-lang-kurz": {
    title: "Vocal larga y vocal corta",
    note: "En alemán la duración de la vocal cambia la palabra: las vocales largas duran más que las cortas. En muchos pares cambia también el timbre (la larga es más tensa y cerrada), pero no en todos: en Staat y Stadt cambia sobre todo la duración. La escritura ayuda: tras una vocal corta suele haber dos consonantes (Bett, Mitte, offen).",
    contrast: "En español la duración de la vocal no distingue palabras; en alemán, sí. Por eso bieten y bitten tienden a oírse como la misma palabra. Piensa en dos sonidos: una i larga y tensa (Miete) y una i corta y más abierta (Mitte). Además, en Mitte la tt representa una sola consonante t, y la doble solo avisa de que la vocal anterior es corta.",
    pairs: [
      { glossA: "el Estado", glossB: "la ciudad" },
      { glossA: "ofrecer", glossB: "pedir, rogar" },
      { glossA: "la cueva", glossB: "el infierno" },
      { glossA: "el alquiler", glossB: "el medio, el centro" },
      { glossA: "el horno, la estufa", glossB: "abierto" },
      { glossA: "el parterre", glossB: "la cama" }
    ]
  },

  "ph:ph-ue-i": {
    title: "ü e i",
    note: "La ü alemana es una vocal anterior redondeada: la lengua se coloca como para la i y los labios se redondean como para la u. En cada par solo cambia la forma de los labios; la duración es la misma: cortas en Kissen y küssen, Kiste y Küste, largas en vier y für, spielen y spülen, Ziege y Züge, liegen y lügen.",
    contrast: "El español no tiene vocales anteriores redondeadas, así que la ü tiende a convertirse en i (y küssen suena como Kissen) o en u. Prueba así: di una i, deja la lengua quieta y redondea los labios como para decir u. Si la lengua se va hacia atrás, sale una u, que es el otro error. Al escuchar, la ü suena más oscura que la i.",
    pairs: [
      { glossA: "el cojín, la almohada", glossB: "besar" },
      { glossA: "la caja", glossB: "la costa" },
      { glossA: "cuatro", glossB: "para" },
      { glossA: "jugar", glossB: "enjuagar, fregar los platos" },
      { glossA: "la cabra", glossB: "los trenes" },
      { glossA: "estar tumbado, encontrarse", glossB: "mentir" }
    ]
  },

  "ph:ph-oe-e": {
    title: "ö y e",
    note: "La ö es la pareja redondeada de la e: la lengua se coloca como para la e y los labios se redondean como para la o. Puede ser larga y cerrada (lesen y lösen, Sehne y Söhne, Hefe y Höfe) o corta y más abierta (kennen y können, helle y Hölle). En cada par la duración no cambia: solo cambian los labios.",
    contrast: "Tampoco hay ö en español, y lo habitual es sustituirla por e: können acaba sonando como kennen, Söhne como Sehne. Di una e, deja la lengua quieta y redondea los labios como para la o. No la conviertas en o: la lengua se queda adelante.",
    pairs: [
      { glossA: "conocer", glossB: "poder, saber hacer" },
      { glossA: "leer", glossB: "resolver, soltar" },
      { glossA: "el tendón", glossB: "los hijos" },
      { glossA: "la levadura", glossB: "los patios" },
      { glossA: "clara, luminosa (de hell)", glossB: "el infierno" }
    ]
  },

  "ph:ph-s-z": {
    title: "s y z a principio de palabra",
    note: "En el alemán de Alemania, la s a principio de palabra ante vocal es sonora [z], con vibración de las cuerdas vocales, y la z se pronuncia siempre [ts]. Así, Saal empieza con un zumbido y Zahl con una t seguida de s. En Austria, Suiza y el sur de Alemania la s inicial suele ser sorda; las grabaciones del curso siguen la norma del norte.",
    contrast: "Cuidado con la letra z: en español se lee [θ] o [s], según la variedad, y con [s] Zahl se confunde con Saal. La z alemana es una t y una s pronunciadas juntas, [ts], sin pausa entre las dos. La s de Saal, Sinn y seit tampoco es tu s: es una s que zumba, con vibración de las cuerdas vocales, como el zumbido de una abeja.",
    pairs: [
      { glossA: "desde (tiempo)", glossB: "el tiempo" },
      { glossA: "las cuerdas", glossB: "la línea, el renglón" },
      { glossA: "la sala", glossB: "el número" },
      { glossA: "el sentido", glossB: "el estaño" }
    ]
  }

});
