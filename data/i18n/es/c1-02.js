/* ============================================================
   Learner-language text (es) for data/core/c1-02.js, unit c1-u04.
   Keys point at ids in the neutral layer; arrays merge by index,
   so their length has to match core.
   Checked by scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("es", {
  "unit:c1-u04": {
    title: "Estará cansado",
    grammarNote: "Futur I y II de conjetura (er wird wohl müde sein, sie wird es gelesen haben) · modales subjetivos: muss, dürfte, könnte, mag, soll, will · partículas modales wohl, ja, etwa, halt, eben"
  },
  "lesson:c1-u04-l1": {
    theme: "Conjeturas y grado de certeza",
    title: "El futuro que no habla del futuro",
    objectives: [
      "reconocer el Futur I como conjetura sobre el presente",
      "hacer conjeturas sobre el pasado con el Futur II",
      "distinguir la conjetura de la acción terminada a más tardar en un momento futuro",
      "dosificar la certeza con wohl, schon, sicher, vermutlich"
    ],
    theory: [
      {
        h: "Werden para conjeturar",
        p: "En alemán el futuro propiamente dicho se expresa a menudo con el presente y un indicador de tiempo (<em>Morgen fliege ich nach Wien</em>). <strong>werden</strong> + infinitivo puede expresar un hecho futuro (<em>Es wird morgen regnen</em>) o una <strong>conjetura sobre el presente</strong>; el contexto decide la lectura: <em>Er wird wohl noch im Stau stehen. Es klingelt. Das wird der Postbote sein.</em> Para una conjetura sobre el <strong>pasado</strong> se usa el <strong>Futur II</strong>, <em>werden</em> + participio II + <em>haben</em> o <em>sein</em>: <em>Sie wird die Nachricht inzwischen gelesen haben.</em> El mismo Futur II puede indicar una acción que estará <strong>terminada a más tardar en un momento futuro</strong>: <em>Bis Ende des Monats werden wir die Studie abgeschlossen haben.</em>"
      },
      {
        h: "Las pistas",
        p: "Para decidir qué lectura tienes delante, fíjate en el momento y en los adverbios. Una referencia al presente (<em>jetzt, noch, gerade</em>) o al pasado (<em>inzwischen, längst</em>) apunta a una conjetura; un plazo con <em>bis</em> apunta a una acción terminada en el futuro. Son indicios, no reglas: <em>inzwischen</em>, por ejemplo, también puede referirse a una acción futura ya completada, y decide el contexto. Los adverbios dosifican la certeza: <em>wohl</em> y <em>vermutlich</em> siguen siendo prudentes, <em>schon</em> tranquiliza (<em>Das wird schon klappen</em>), <em>sicher</em> y <em>bestimmt</em> la refuerzan."
      },
      {
        contrast: "El español tiene el mismo uso y lo emplea muchísimo: el futuro simple de conjetura (<em>estará en la oficina</em>) y el futuro perfecto (<em>lo habrá leído</em>). Por eso te sale con naturalidad. En ambas lenguas el contexto decide entre conjetura y futuro auténtico: <em>Er wird zu Hause sein</em> a secas, como «estará en casa», puede ser una suposición o un hecho previsto (<em>Morgen wird er zu Hause sein</em>). En alemán se añaden con frecuencia <em>wohl</em>, <em>schon</em> o <em>sicher</em> para marcar o matizar la conjetura. El futuro perfecto español de acción terminada (<em>para el viernes habremos acabado</em>) corresponde, en cambio, al Futur II con <em>bis</em>."
      },
      {
        trap: "Para el pasado no basta el Futur I: <em>Er wird gestern krank sein</em> no funciona, hace falta el Futur II, <em>Er wird gestern wohl krank gewesen sein</em>. Y el auxiliar del infinitivo perfecto es el del Perfekt del verbo, no el que te dicta el español (<em>haber</em> para todo): <em>Sie wird abgereist sein</em> (movimiento, <em>sein</em>), <em>Er wird es vergessen haben</em> (<em>haben</em>)."
      },
      {
        tip: "Pregúntate siempre a qué momento se refiere la oración: presente, pasado o un punto futuro (a menudo marcado con <em>bis</em>). El momento decide entre Futur I (conjetura sobre el presente), Futur II (pasado) y Futur II de acción terminada."
      }
    ],
    grammar: {
      title: "Futur I y II como conjetura",
      note: "<b>werden + infinitivo</b>: conjetura sobre el presente. <b>werden + participio II + haben/sein</b>: conjetura sobre el pasado o acción terminada a más tardar en un momento futuro (con <i>bis</i>). Dosificación: <i>wohl, vermutlich</i> (prudente), <i>schon</i> (tranquilizador), <i>sicher</i> (más seguro).",
      table: {
        head: ["construcción", "valor", "ejemplo"],
        rows: [
          ["werden + infinitivo", "conjetura sobre el presente", "Er wird wohl noch im Stau stehen."],
          ["werden + participio II + haben/sein", "conjetura sobre el pasado", "Sie wird die Nachricht inzwischen gelesen haben."],
          ["werden + participio II + haben/sein con bis", "acción terminada a más tardar en un momento futuro", "Bis Ende des Monats werden wir die Studie abgeschlossen haben."],
          ["werden + schon + infinitivo", "tranquilización", "Das wird schon klappen."],
          ["presente + indicación de tiempo", "futuro programado", "Morgen fliege ich nach Wien."]
        ]
      },
      examples: [
        { tr: "Las luces están apagadas, a esta hora estará durmiendo.", note: "conjetura sobre el presente con schon" },
        { tr: "Llaman al timbre. Será el cartero.", note: "werden + sein: conjetura" },
        { tr: "Probablemente seguirá todavía en el atasco.", note: "werden + wohl + infinitivo" },
        { tr: "El mensaje ya lo habrá leído.", note: "Futur II: conjetura sobre el pasado" },
        { tr: "A finales de mes habremos concluido el estudio.", note: "Futur II de acción terminada con bis" },
        { tr: "Ya verás cómo sale bien.", note: "werden + schon: tranquilización" }
      ]
    },
    vocab: [
      "la hipótesis, el supuesto",
      "la sospecha",
      "la probabilidad",
      "el indicio, el punto de referencia",
      "la duda",
      "la certeza",
      "suponer, considerar",
      "conjeturar, hacer suposiciones (registro periodístico)",
      "partir de la base de que",
      "probablemente",
      "seguramente, con toda seguridad",
      "entretanto, ya"
    ],
    exercises: [
      {
        q: "En el chat de la oficina lees tres frases sobre el jefe. El regreso de las vacaciones está fijado en el calendario de la empresa. ¿Qué frase presenta ese regreso como una acción futura programada y no como una conjetura?",
        opts: [
          "Der Chef wird nächste Woche aus dem Urlaub zurückkehren.",
          "Der Chef wird jetzt im Urlaub sein, er hat es ja angekündigt.",
          "Der Chef wird die Mail längst gelesen haben."
        ],
        why: "Con el regreso ya fijado en el calendario, <i>nächste Woche</i> sitúa la primera frase como un hecho programado, es decir, un futuro. En las otras el momento es el presente (<i>jetzt</i>) o el pasado (<i>längst gelesen haben</i>): son conjeturas."
      },
      {
        q: "Una cadena de tiendas anuncia: «Bis Jahresende werden wir alle Filialen modernisiert haben.» ¿Qué expresa el Futur II?",
        opts: [
          "una acción que estará terminada a más tardar en un momento futuro",
          "una conjetura sobre algo que ya ha ocurrido",
          "una pasiva de presente"
        ],
        why: "<i>bis Jahresende</i> fija el punto futuro antes del cual la acción estará terminada, y el anuncio de la cadena expresa un compromiso, no una conjetura."
      },
      {
        q: "Sabes que la carta se entregó ayer, pero no sabes si el destinatario ya la ha leído. ¿Qué frase formula la conjetura correcta?",
        opts: [
          "Er wird den Brief inzwischen gelesen haben.",
          "Er hat den Brief inzwischen gelesen.",
          "Er wird den Brief inzwischen lesen."
        ],
        why: "Hace falta el Futur II: <i>wird ... gelesen haben</i> mira hacia atrás, a una acción que se supone ya ocurrida. La segunda presenta la lectura como un hecho seguro, la tercera (Futur I) se refiere a lo que está pasando ahora o pasará."
      },
      {
        q: "Suena el timbre e imaginas que es el mensajero: «Es klingelt. Das ___ der Paketbote sein.»",
        hint: "forma de werden en tercera persona",
        why: "<b>wird</b>: <i>werden</i> + infinitivo (<i>sein</i>) es una conjetura sobre el presente, «será el mensajero»."
      },
      {
        q: "Una directiva promete: «Bis nächsten Freitag werden wir das Gutachten fertiggestellt ___.»",
        hint: "Futur II: auxiliar",
        why: "<b>haben</b>: Futur II de acción terminada. <i>fertigstellen</i> forma el Perfekt con <i>haben</i>."
      },
      {
        q: "Completa con las formas correctas.",
        tr: "Los compañeros estarán ahora en la reunión, y el informe seguro que ya lo habrán leído.",
        why: "<i>werden</i> + <i>sitzen</i> o <i>sein</i> para el presente; para el pasado <i>werden</i> + <i>gelesen haben</i>. Con <i>den Bericht</i> en primer lugar, el verbo conjugado queda en segunda posición y el sujeto <i>sie</i> lo sigue."
      },
      {
        q: "¿Qué frases expresan una conjetura y no un futuro auténtico ni una pasiva?",
        opts: [
          "Es klingelt an der Tür. Das wird der Nachbar sein.",
          "Er wird jetzt wohl schon zu Hause angekommen sein.",
          "Am Montag wird die Straße wieder freigegeben.",
          "Wir werden Sie über das Ergebnis informieren."
        ],
        why: "Las dos primeras se refieren a lo que se supone ahora: Futur I con <i>sein</i> y Futur II (<i>angekommen sein</i>). La tercera es una pasiva de presente (<i>freigegeben</i>) con valor de futuro, la cuarta un futuro auténtico."
      },
      {
        q: "Ordena la conjetura.",
        tr: "El mensaje ya lo habrá leído.",
        why: "<i>Sie wird die Nachricht inzwischen gelesen haben.</i> El verbo conjugado va en segunda posición, <i>gelesen haben</i> cierra la oración; <i>inzwischen</i> puede ir también antes de <i>die Nachricht</i>."
      },
      {
        q: "Traduce: «Las candidatas probablemente ya habrán recibido la respuesta.» (die Bewerberinnen, die Antwort, erhalten)",
        why: "<i>Die Bewerberinnen werden die Antwort wohl schon erhalten haben</i>: Futur II con <i>wohl</i> (o <i>vermutlich, wahrscheinlich</i>); <i>schon</i> o <i>bereits</i> para «ya», y el adverbio puede ir antes o después de <i>die Antwort</i>."
      },
      {
        tr: "El tren de Múnich viene con retraso. Los viajeros probablemente tendrán que esperar otra media hora, y para entonces el enlace probablemente ya habrá salido.",
        why: "Dos conjeturas: <i>werden ... warten müssen</i> (previsión prudente) y <i>wird ... abgefahren sein</i> (Futur II con <i>sein</i>, porque aquí <i>abfahren</i> es intransitivo e indica un cambio de lugar)."
      },
      {
        tr: "La luz sigue encendida, así que los compañeros probablemente seguirán trabajando.",
        why: "<i>werden</i> + <i>wohl</i> + infinitivo: conjetura sobre el presente, con <i>arbeiten</i> al final de la oración."
      }
    ]
  },
  "lesson:c1-u04-l2": {
    theme: "Certeza, rumores y declaraciones",
    title: "Er muss krank sein, sie soll reich sein",
    objectives: [
      "graduar la certeza con muss, dürfte, könnte, kann, mag",
      "referir lo que dicen otros con soll",
      "referir lo que sostiene el propio sujeto con will",
      "usar el infinitivo perfecto para hablar del pasado"
    ],
    theory: [
      {
        h: "Del deber a la certeza",
        p: "Con <em>sein</em>, <em>haben</em> o un infinitivo perfecto, los modales suelen expresar, en lugar de obligación o permiso, cuán seguro está el hablante de que algo es verdad; lo decide el contexto. <strong>muss</strong> es una deducción casi segura (<em>Es muss geregnet haben, die Straße ist nass</em>), <strong>dürfte</strong> indica que es probable (<em>Er dürfte schon angekommen sein</em>), <strong>könnte</strong> que es posible (<em>Das könnte ein Irrtum sein</em>). <strong>kann nicht</strong> dice que es imposible (<em>Das kann nicht stimmen</em>) y <strong>mag</strong> admite, normalmente como concesión (<em>Das mag sein, aber ich sehe es anders</em>)."
      },
      {
        h: "Referir: soll y will",
        p: "Otros dos modales refieren una fuente. <strong>soll</strong> dice que lo afirman otros y el hablante no lo garantiza: <em>Der Zeuge soll den Täter gesehen haben</em>, «el testigo habría visto al culpable». <strong>will</strong> dice que lo sostiene el propio sujeto, a menudo con un matiz de escepticismo: <em>Die Firma will alle Unterlagen rechtzeitig eingereicht haben</em>, «la empresa asegura haber entregado todo a tiempo». Para el pasado: modal + participio II + <em>haben</em> o <em>sein</em>."
      },
      {
        contrast: "El español usa el condicional periodístico (<em>el ministro habría destruido los documentos</em>), que no distingue quién lo dice: puede ser la prensa, un testigo o el propio ministro. Para eso hay que añadir una fórmula (<em>según un testigo, afirma que, dice que</em>). El alemán elige el modal según la fuente: <em>soll</em> para «se dice», <em>will</em> para «lo sostiene él». Para la deducción, el español tiene <em>deber de + infinitivo</em> (<em>debe de estar enfermo</em>), que corresponde a <em>muss</em> y también cubre el terreno de <em>dürfte</em>; no lo confundas con <em>deber + infinitivo</em> (<em>debe estar en cama</em>), que suele ser obligación. En alemán la misma forma <em>muss</em> sirve para ambos valores y los distingue el contexto: <em>Er muss um acht zu Hause sein</em> es una obligación, mientras que <em>Er muss noch arbeiten</em> puede ser obligación o deducción. El infinitivo solo da una pista."
      },
      {
        trap: "La negación cambia el significado. <em>Er muss nicht krank sein</em> quiere decir «no tiene por qué estar enfermo», no «no puede estar enfermo». Para la imposibilidad hace falta <em>kann nicht</em>: <em>Er kann nicht zu Hause sein, ich habe ihn eben im Büro gesehen</em>. Y <em>dürfte</em> con valor de probabilidad no debe confundirse con <em>darf</em>, que indica permiso."
      },
      {
        tip: "Antes de traducir un modal, mira el contexto y, como pista, el infinitivo. Un infinitivo perfecto (<em>gelesen haben, gewesen sein</em>) suele apuntar a una lectura subjetiva: certeza o fuente. Pero <em>sein</em> también puede aparecer en una obligación, y <em>Er soll kommen</em> puede ser una orden o referir lo que otros dicen (que vendrá): lo decide el contexto, no la forma del infinitivo."
      }
    ],
    grammar: {
      title: "Modales subjetivos",
      note: "<b>muss</b>: casi seguro. <b>dürfte</b>: probable. <b>kann / könnte</b>: posible. <b>mag</b>: concesión. <b>soll</b>: lo dicen otros. <b>will</b>: lo sostiene el sujeto. Pasado: modal + participio II + haben/sein.",
      table: {
        head: ["modal", "certeza o fuente", "ejemplo"],
        rows: [
          ["muss", "deducción casi segura", "Er muss krank sein."],
          ["dürfte", "probable", "Er dürfte krank sein."],
          ["kann / könnte", "posible", "Er könnte krank sein."],
          ["mag", "concesión", "Das mag sein."],
          ["soll", "lo dicen otros", "Er soll krank sein."],
          ["will", "lo sostiene el sujeto", "Er will krank gewesen sein."]
        ]
      },
      examples: [
        { tr: "Debe de haber llovido, la calle está mojada.", note: "muss + infinitivo perfecto: deducción" },
        { tr: "Probablemente ya ha llegado.", note: "dürfte: probable" },
        { tr: "Podría ser un error.", note: "könnte: posible" },
        { tr: "El testigo habría visto al culpable.", note: "soll: lo dicen otros" },
        { tr: "La empresa asegura haber entregado todos los documentos a tiempo.", note: "will: lo sostiene el sujeto" },
        { tr: "Puede ser, pero yo lo veo de otra manera.", note: "mag: concesión" }
      ]
    },
    vocab: [
      "el rumor",
      "el testigo",
      "la afirmación, la pretensión",
      "la fuente",
      "la prueba",
      "la declaración, el testimonio",
      "sostener, afirmar",
      "negar, rebatir",
      "documentar, acreditar",
      "presunto, según se dice (con duda)",
      "al parecer, según consta",
      "aparentemente, por lo visto"
    ],
    exercises: [
      {
        q: "Titular de periódico: «Der Bürgermeister soll Geld angenommen haben.» ¿Qué comunica el periódico?",
        opts: [
          "que alguien lo afirma, pero el periódico no lo garantiza",
          "que fue el alcalde quien declaró haber aceptado dinero",
          "que el periódico tiene pruebas de que el alcalde aceptó dinero"
        ],
        why: "<b>soll</b> + infinitivo perfecto refiere lo que dicen otros, sin asumir la responsabilidad. Si lo afirmara el alcalde haría falta <i>will</i>, y para una certeza bastaría el Perfekt (<i>hat Geld angenommen</i>)."
      },
      {
        q: "Un diario escribe: «Der Bürgermeister will das Geld nie angenommen haben.» ¿Quién sostiene que nunca lo aceptó?",
        opts: [
          "el propio alcalde; quien escribe se mantiene neutral o escéptico",
          "unos testigos; el periódico no lo garantiza",
          "nadie: es la intención del alcalde de no aceptar nunca dinero"
        ],
        why: "<b>will</b> + infinitivo perfecto: la afirmación es del propio sujeto. Para «se dice» sería <i>soll</i>; la lectura «tiene intención de» no es posible con un infinitivo perfecto."
      },
      {
        q: "Un auditor comenta un error en las cuentas y elige con cuidado el modal. ¿Qué secuencia va de mayor a menor certeza?",
        opts: [
          "Das muss ein Irrtum sein. - Das dürfte ein Irrtum sein. - Das könnte ein Irrtum sein.",
          "Das könnte ein Irrtum sein. - Das dürfte ein Irrtum sein. - Das muss ein Irrtum sein.",
          "Das dürfte ein Irrtum sein. - Das muss ein Irrtum sein. - Das könnte ein Irrtum sein."
        ],
        why: "<b>muss</b> es una deducción casi segura, <b>dürfte</b> indica probabilidad, <b>könnte</b> simple posibilidad. La segunda secuencia es la inversa, la tercera intercambia <i>muss</i> y <i>dürfte</i>."
      },
      {
        q: "Del noticiero de radio: «Laut Augenzeugen ___ der Täter in einem roten Auto geflohen sein.»",
        hint: "modal para lo que dicen otros",
        why: "<b>soll</b>: <i>laut Augenzeugen</i> introduce una fuente externa, y quien habla no lo garantiza."
      },
      {
        q: "El testigo se defiende: «Der Zeuge ___ den Mann nie zuvor gesehen haben, das behauptet er zumindest.»",
        hint: "lo afirma él mismo",
        why: "<b>will</b>: <i>das behauptet er zumindest</i> muestra que la afirmación es del sujeto."
      },
      {
        q: "Completa con muss, soll o will.",
        tr: "Las persianas están bajadas y el buzón está lleno: la familia Albers debe de estar de vacaciones, es difícil pensar otra cosa. Según un vecino, se habría ido hace ya dos semanas, pero el portero asegura que no se ha enterado de nada.",
        why: "<i>muss</i>: deducción a partir de los indicios. <i>soll</i>: lo dice un vecino (<i>einem Nachbarn zufolge</i>). <i>will</i>: lo sostiene el propio portero."
      },
      {
        q: "Une cada frase con su significado.",
        pairs: [
          "deduzco casi con certeza que está enfermo",
          "es probable que esté enfermo",
          "se dice que está enfermo",
          "asegura haber estado enfermo"
        ]
      },
      {
        q: "Ordena la noticia.",
        tr: "El ministro habría destruido los documentos.",
        why: "<i>Der Minister soll die Akten vernichtet haben.</i> <i>soll</i> en segunda posición, infinitivo perfecto al final."
      },
      {
        q: "Traduce: «Según se dice, la ministra habría abandonado el país ya ayer.» (die Ministerin, das Land, verlassen, sollen)",
        why: "<i>Die Ministerin soll das Land schon gestern verlassen haben</i>: <i>soll</i> traduce el condicional periodístico y el infinitivo perfecto <i>verlassen haben</i> va al final; <i>schon</i> o <i>bereits</i> para «ya»."
      },
      {
        tr: "El empresario habría sustraído varios millones de euros. Él asegura que no sabía nada, y su abogado probablemente rechazará mañana las acusaciones.",
        why: "Tres modales, tres fuentes: <i>soll</i> (lo dicen otros), <i>will</i> (lo sostiene él), <i>dürfte</i> (conjetura probable)."
      },
      {
        tr: "Se dice que está enfermo, pero probablemente es una excusa.",
        why: "<i>soll</i> refiere el rumor, <i>dürfte</i> expresa la valoración de quien habla."
      }
    ]
  },
  "lesson:c1-u04-l3": {
    theme: "Partículas y matices",
    title: "wohl, etwa, halt, eben",
    objectives: [
      "usar wohl para atenuar una afirmación convirtiéndola en conjetura",
      "reconocer ja como señal de algo ya sabido o sorprendente",
      "distinguir etwa partícula de etwa «aproximadamente»",
      "expresar resignación con halt y eben y elegir el registro adecuado"
    ],
    theory: [
      {
        h: "Palabras pequeñas, grandes diferencias",
        p: "Las partículas modales no se traducen palabra por palabra: dicen cómo ve el hablante lo que dice. <strong>wohl</strong> convierte una afirmación en conjetura (<em>Er ist wohl krank</em>, «estará enfermo»). <strong>ja</strong> presenta un hecho como ya conocido por ambos o sorprendente (<em>Du weißt ja, wie lange das dauert. Das ist ja ein Ding!</em>). <strong>etwa</strong> en una pregunta de sí o no muestra sorpresa o sospecha, y el hablante espera un no (<em>Hast du etwa den Schlüssel vergessen?</em>, «¿no habrás olvidado la llave?»). <strong>halt</strong> y <strong>eben</strong> declaran que algo no se puede cambiar (<em>Dann nehmen wir halt ein Taxi. Da kann man eben nichts machen.</em>)."
      },
      {
        h: "Posición y registro",
        p: "Las partículas suelen ir sin acento detrás del verbo y de los pronombres, antes de la información nueva, una tendencia más que una regla (<em>Er wird wohl noch schlafen</em>). Son propias del habla, de los chats y de los diálogos: en un texto formal, como un informe o una carta a un cliente, normalmente se evitan. <em>halt</em> es más coloquial y se oye sobre todo en el sur, <em>eben</em> es más neutro, pero en la mayoría de los casos son intercambiables."
      },
      {
        contrast: "El español expresa estos matices con la entonación y con palabras como <em>pues, ya, si, es que, acaso, no será que, qué se le va a hacer</em>: <em>Hast du etwa ...?</em> se parece a «¿acaso has ...?» o «¿no habrás ...?», <em>Dann warten wir halt</em> a «pues esperamos, qué se le va a hacer», <em>Das ist ja ein Ding!</em> a «¡mira qué cosa!» o «¡anda!». Donde el español recurre al futuro de conjetura (<em>estará</em>), el alemán puede usar el presente o <em>werden</em>, con o sin <em>wohl</em> (<em>Er ist wohl krank</em>, <em>Er wird wohl krank sein</em>). Ninguna de las cinco tiene un equivalente fijo: se aprende la función."
      },
      {
        trap: "<em>etwa</em> tiene dos vidas. Delante de un número es un adverbio, <em>etwa zwei Stunden</em>, «unas dos horas». En una pregunta con sorpresa es una partícula, <em>Ist er etwa krank?</em>. También <em>wohl</em> puede ser un adverbio pleno: <em>Ich fühle mich hier wohl</em> quiere decir «aquí me siento a gusto»."
      },
      {
        tip: "Quita la partícula y relee: la oración sigue siendo correcta, pero pierde la postura del hablante. Luego sustitúyela y fíjate en cómo cambia: <em>Das ist halt so</em> (resignado), <em>Das ist ja so</em> (ya lo sabes), <em>Das ist wohl so</em> (supongo que sí)."
      }
    ],
    grammar: {
      title: "Partículas modales: wohl, ja, etwa, halt, eben",
      note: "<b>wohl</b>: conjetura. <b>ja</b>: algo sabido o sorprendente. <b>etwa</b>: en preguntas de sí o no, sorpresa o sospecha. <b>halt / eben</b>: resignación. Registro: habla, no formal.",
      table: {
        head: ["partícula", "efecto", "ejemplo"],
        rows: [
          ["wohl", "conjetura", "Er wird wohl noch schlafen."],
          ["ja", "algo sabido o sorprendente", "Du weißt ja, wie lange das dauert."],
          ["etwa", "sorpresa o sospecha en una pregunta, se espera un no", "Hast du etwa den Schlüssel vergessen?"],
          ["halt, eben", "resignación", "Da kann man eben nichts machen."],
          ["registro", "habla, evitar en lo escrito formal", "Das ist halt so."]
        ]
      },
      examples: [
        { tr: "Seguirá durmiendo, probablemente.", note: "wohl: conjetura" },
        { tr: "Sabes bien cuánto tarda.", note: "ja: algo que ambos saben" },
        { tr: "¿No será esto ya todo?", note: "etwa: sorpresa, se espera un no" },
        { tr: "El autobús ya se ha ido, así que tendremos que ir andando, qué se le va a hacer.", note: "halt: resignación" },
        { tr: "No se puede hacer nada.", note: "eben: resignación" },
        { tr: "¿No habrás olvidado la llave?", note: "etwa: sospecha en una pregunta de sí o no" }
      ]
    },
    vocab: [
      "el trasfondo, el tono (de una frase)",
      "el matiz",
      "la expectativa",
      "la sorpresa",
      "la resignación",
      "lo obvio, lo evidente",
      "insinuar, dar a entender",
      "reprochar, acusar de",
      "aceptar, tolerar (sin reaccionar)",
      "justamente (con matiz de sorpresa o fastidio)",
      "de todos modos, en cualquier caso",
      "sencillamente, del todo"
    ],
    exercises: [
      {
        q: "Una compañera te pregunta, con tono sorprendido: «Hast du etwa schon gekündigt?» ¿Qué expresa etwa?",
        opts: [
          "sorpresa o sospecha: quien habla espera que la respuesta sea no",
          "una pregunta neutra: quien habla no tiene ninguna expectativa",
          "una petición cortés de confirmación: quien habla espera un sí"
        ],
        why: "En una pregunta de sí o no, <b>etwa</b> indica que quien habla no espera un sí y encuentra el asunto sorprendente o preocupante («¿no habrás presentado ya la dimisión?»)."
      },
      {
        q: "Por la ventana ves el coche del jefe en el aparcamiento, pero aún no lo has visto. ¿Con qué frase haces una conjetura?",
        opts: [
          "Der Chef ist wohl schon da.",
          "Der Chef ist ja schon da!",
          "Der Chef ist halt schon da."
        ],
        why: "<b>wohl</b> convierte la afirmación en conjetura («ya habrá llegado»). <i>ja</i> presentaría el hecho como seguro y sorprendente, <i>halt</i> como algo que no se puede cambiar."
      },
      {
        q: "Estás escribiendo un informe formal para un cliente y quieres decir que la conexión ferroviaria es insuficiente. ¿Qué frase es adecuada al registro?",
        opts: [
          "Die Zugverbindung ist leider unzureichend.",
          "Die Zugverbindung ist halt schlecht.",
          "Die Zugverbindung ist eben nicht so toll."
        ],
        why: "Las partículas <i>halt</i> y <i>eben</i>, junto con una expresión coloquial como <i>nicht so toll</i>, son propias del habla: un informe las evita y usa un léxico neutro como <i>unzureichend</i>."
      },
      {
        q: "El tren está suprimido y buscas una alternativa con resignación: «Der Zug fällt aus? Dann nehmen wir ___ ein Taxi.»",
        hint: "«qué se le va a hacer»: halt o eben",
        why: "<b>halt</b> o <b>eben</b>: «pues nada, cogemos un taxi»."
      },
      {
        q: "Ante una situación sorprendente: «Das ist ___ ein Ding!»",
        hint: "partícula de sorpresa",
        why: "<b>ja</b> expresa sorpresa: <i>Das ist ja ein Ding!</i> es una exclamación fija, «¡anda, mira qué cosa!»."
      },
      {
        q: "Completa el diálogo con las partículas adecuadas (en el primer hueco también vale un adverbio).",
        tr: "«¿Dónde se habrá metido Jonas?» «Estará en el atasco.» «¿No habrá perdido otra vez el autobús?» «Ya sabes cómo es: no se puede hacer nada.»",
        why: "<i>wohl</i> para la conjetura, <i>etwa</i> para la pregunta con sospecha, <i>ja</i> para lo que ambos saben, <i>halt</i> o <i>eben</i> para la resignación. En el tercer hueco también sirve <i>doch</i>."
      },
      {
        q: "¿En qué frases es etwa una partícula modal y no significa «aproximadamente»?",
        opts: [
          "Bist du etwa schon fertig?",
          "Ist er etwa krank?",
          "Das Seminar dauert etwa zwei Stunden.",
          "Wir treffen uns in etwa einer Stunde."
        ],
        why: "En las dos primeras <b>etwa</b> está en una pregunta de sí o no e indica sorpresa o sospecha. En las dos últimas es un adverbio y significa «aproximadamente»."
      },
      {
        q: "Ordena la pregunta.",
        tr: "¿No habrás olvidado otra vez la llave?",
        why: "<i>Hast du etwa schon wieder den Schlüssel vergessen?</i> Pregunta de sí o no: el verbo abre la oración y <i>etwa</i> sigue al sujeto; puede ir también después de <i>den Schlüssel</i>."
      },
      {
        q: "Traduce: «El jefe seguirá en una reunión, así que esperamos, qué se le va a hacer.» (der Chef, die Besprechung, warten; para «seguirá» usa wohl)",
        why: "<i>Der Chef wird wohl noch in einer Besprechung sein, dann warten wir eben</i>: <i>wohl</i> para «seguirá», <i>eben</i> o <i>halt</i> para «qué se le va a hacer». También valen <i>ist wohl</i> y conectores como <i>also</i> o <i>da</i>."
      },
      {
        tr: "Creo que Paul está enfermo. Normalmente nunca llega tarde, y hoy seguirá en la cama. ¿No tendrá la gripe? Bueno, entonces empezamos la reunión sin él, qué se le va a hacer.",
        why: "Cuatro partículas en pocas frases: <i>ja</i> (lo sabemos), <i>wohl</i> (conjetura), <i>etwa</i> (sospecha), <i>eben</i> (resignación)."
      },
      {
        tr: "Pues esperamos, qué se le va a hacer, el autobús llega pronto.",
        why: "<i>eben</i> (qué se le va a hacer) y <i>ja</i> (ya lo sabes) en una sola oración."
      }
    ]
  },
  "lesson:c1-u04-test": {
    theme: "Verificación",
    title: "Test: Estará cansado",
    objectives: [
      "comprobar la unidad: Futur de conjetura, modales subjetivos y partículas modales"
    ],
    theory: [
      {
        p: "Diez preguntas sobre la unidad. Se supera con el 70 %. No repases las lecciones mientras respondes: si no recuerdas algo, es mejor volver atrás y repasar."
      }
    ],
    exercises: [
      {
        q: "Un compañero espera una respuesta: «Die Sekretärin ___ den Brief inzwischen abgeschickt haben.»",
        hint: "Futur II: forma de werden",
        why: "<b>wird</b>: conjetura sobre el pasado con el Futur II, <i>wird ... abgeschickt haben</i>."
      },
      {
        q: "De un artículo: «Laut einem Zeitungsbericht ___ der Konzern die Löhne gekürzt haben.»",
        hint: "modal para un rumor referido",
        why: "<b>soll</b>: <i>laut einem Zeitungsbericht</i> introduce una fuente externa, quien escribe no lo garantiza."
      },
      {
        q: "Un compañero te mira con sospecha: «Hast du ___ schon wieder die Kaffeekasse geleert?»",
        hint: "«no habrás...»",
        why: "<b>etwa</b>: sospecha en una pregunta de sí o no, se espera un no. <i>denn</i> no basta: haría la pregunta neutra, sin la sospecha que se pide."
      },
      {
        q: "Un perito escribe: «Der Brand dürfte durch einen Kurzschluss entstanden sein.» ¿Cuán seguro está?",
        opts: [
          "lo considera probable, pero no seguro",
          "está absolutamente seguro",
          "solo refiere lo que dicen otros"
        ],
        why: "<b>dürfte</b> expresa probabilidad. Para una deducción de mayor certeza sería <i>muss</i>, para referir rumores <i>soll</i>."
      },
      {
        q: "Un compañero entra en la oficina y encuentra el trabajo ya hecho: «Du hast ja schon alles erledigt!» ¿Qué expresa ja?",
        opts: [
          "la constatación sorprendida de un hecho que se ve",
          "una conjetura sobre algo que no se ve",
          "una pregunta con expectativa de respuesta negativa"
        ],
        why: "<b>ja</b> presenta el hecho como evidente y sorprendente. Una conjetura sería <i>wohl</i>, una pregunta con expectativa negativa <i>etwa</i>."
      },
      {
        q: "Un compañero dice: «Er kann nicht krank sein, ich habe ihn eben noch gesehen.» ¿Qué significa?",
        opts: [
          "es imposible que esté enfermo",
          "no tiene por qué estar enfermo",
          "no tiene permiso para estar enfermo"
        ],
        why: "<b>kann nicht</b> es la imposibilidad. «No tiene por qué estar enfermo» sería <i>muss nicht krank sein</i>."
      },
      {
        q: "Completa con soll, will o werden.",
        tr: "Según un artículo, el ministro habría destruido unos documentos. Él asegura que no sabía nada, y su portavoz promete: para el viernes lo habremos aclarado todo.",
        why: "<i>soll</i>: lo dice un artículo. <i>will</i>: lo sostiene el propio ministro. <i>werden</i>: Futur II de acción terminada con <i>bis Freitag</i>."
      },
      {
        q: "¿Qué frases expresan una conjetura y no una obligación ni un permiso?",
        opts: [
          "Sie dürfte inzwischen zu Hause sein.",
          "Das muss ein Irrtum sein.",
          "Du musst um acht da sein.",
          "Hier darf man nicht rauchen."
        ],
        why: "Las dos primeras valoran la probabilidad: <i>dürfte</i> y <i>muss</i> con <i>sein</i>. En las dos últimas los modales indican obligación y prohibición."
      },
      {
        tr: "El partido se suspendió ayer. El campo habría estado bajo el agua, pero el entrenador asegura que no sabía nada. Los aficionados probablemente estarán decepcionados, pero en el fútbol es así, qué se le va a hacer.",
        why: "<i>soll</i> (lo dicen otros), <i>will</i> (lo sostiene él), <i>wohl</i> (conjetura) y <i>eben</i> (resignación)."
      },
      {
        tr: "No puede ser verdad, probablemente se ha equivocado.",
        why: "<i>kann nicht</i> para la imposibilidad, <i>dürfte</i> + infinitivo perfecto para la conjetura probable sobre el pasado."
      }
    ]
  }
});
