/* ============================================================
   Learner-language text (es) for data/core/c2-01.js, units c2-u01 and c2-u02.
   Keys point at ids in the neutral layer; arrays merge by index,
   so their length has to match core.
   Checked by scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("es", {
  "unit:c2-u01": {
    title: "Atributos ampliados",
    grammarNote: "El atributo participial ampliado (die seit Jahren geforderte Reform) · participio I y participio II como atributo · el Gerundivum: zu + participio I (die zu lösende Aufgabe) · Funktionsverbgefüge en la prosa ensayística (zur Anwendung kommen, Rechnung tragen, in Abrede stellen)"
  },
  "lesson:c2-u01-l1": {
    theme: "Ensayo y ciencia",
    title: "El atributo participial ampliado",
    objectives: [
      "reconocer el artículo y el sustantivo que encierran un atributo ampliado",
      "leer un atributo con varios complementos y entender su estructura",
      "transformar una oración de relativo en atributo y viceversa",
      "elegir entre participio I y participio II"
    ],
    theory: [
      {
        h: "Una oración de relativo comprimida delante del sustantivo",
        p: "En el alemán escrito un participio puede llevar consigo sus complementos y colocarse entre el artículo y el sustantivo: <em>die seit Jahren von Fachleuten geforderte Reform</em>. Es una oración de relativo comprimida: <em>die Reform, die seit Jahren von Fachleuten gefordert wird</em>. El artículo abre el paréntesis, el sustantivo lo cierra, y todo lo que queda en medio pertenece al atributo: cada complemento depende de su propio participio, que va justo antes del sustantivo y lleva la terminación del adjetivo. El <strong>participio II</strong> indica una acción sufrida o ya terminada (<em>die vorgelegten Daten</em>, los datos presentados); el <strong>participio I</strong>, una acción activa y simultánea (<em>die vorliegenden Gutachten</em>, los peritajes de que se dispone)."
      },
      {
        h: "Cómo se lee",
        p: "Si después de un artículo encuentras una preposición o un segundo artículo (<em>die von der ..., der dem ...</em>), espera un atributo ampliado: salta hacia delante hasta el sustantivo y localiza los participios declinados que lo preceden (puede haber más de uno, coordinados), luego vuelve atrás y lee los complementos de cada uno. El orden interno es el de una subordinada: complementos primero, participio al final, como el verbo al final de la oración de relativo. El pronombre reflexivo se queda dentro: <em>die sich verschärfende Wohnungsnot</em>. Dos atributos coordinados sin conjunción se separan con una coma: <em>die in der Studie befragten, überwiegend jungen Erwachsenen</em>; con <em>und</em> la coma no hace falta: <em>die angekündigte und vielfach kritisierte Reform</em>."
      },
      {
        contrast: "En español el participio va detrás del sustantivo y la frase crece hacia la derecha: <em>la reforma reclamada desde hace años por los expertos</em>. El alemán pone todo el atributo a la izquierda, entre el artículo y el sustantivo. Los complementos pueden conservar el orden español (<em>seit Jahren von Fachleuten</em>, «desde hace años por los expertos»); lo que cambia de sitio es el participio, que pasa al final, justo antes del sustantivo. El participio de presente español en <em>-ante, -ente</em> es raro y casi siempre está lexicalizado (<em>vigente, creciente</em>); donde el alemán usa un participio I, el español recurre a una relativa con <em>que</em> o a un gerundio, que en función de adjetivo especificativo la norma considera incorrecto (<em>una caja conteniendo libros</em>) y que solo en unos pocos usos fijos admitidos corresponde al participio I alemán (<em>agua hirviendo</em>, <em>kochendes Wasser</em>). El alemán forma el participio I de casi cualquier verbo y lo usa libremente como atributo: <em>die dem Gericht vorliegenden Gutachten</em>, «los peritajes de que dispone el tribunal»."
      },
      {
        trap: "El participio de una pasiva en Perfekt no lleva <em>worden</em>: <em>die Daten, die erhoben worden sind</em> se convierte en <em>die erhobenen Daten</em>, nunca en <em>die erhoben wordenen Daten</em>. Y no confundas los dos participios: <em>die steigenden Kosten</em> siguen subiendo, <em>die gestiegenen Kosten</em> ya han subido."
      },
      {
        tip: "Para traducir al español, deshaz el atributo en una oración de relativo o en un participio pospuesto. Para escribir en alemán, parte de una relativa en presente o en pasado sin verbo modal (con <em>müssen</em> hace falta el Gerundivum de la lección 2): quita el pronombre relativo, convierte el verbo en participio, declínalo y colócalo justo antes del sustantivo."
      }
    ],
    grammar: {
      title: "El atributo participial ampliado",
      note: "<b>artículo + complementos + participio declinado + sustantivo</b>. Participio II: sentido pasivo o acción terminada (<i>die vorgelegten Daten</i>). Participio I: sentido activo, acción simultánea (<i>die vorliegenden Gutachten</i>). El participio lleva la terminación del adjetivo; <i>worden</i> desaparece.",
      table: {
        head: ["oración de relativo", "atributo ampliado"],
        rows: [
          ["die Reform, die seit Jahren gefordert wird", "die seit Jahren geforderte Reform"],
          ["die Daten, die die Kommission vorgelegt hat", "die von der Kommission vorgelegten Daten"],
          ["die Gutachten, die dem Gericht vorliegen", "die dem Gericht vorliegenden Gutachten"],
          ["die Wohnungsnot, die sich verschärft", "die sich verschärfende Wohnungsnot"]
        ]
      },
      examples: [
        { tr: "La reforma de los derechos de autor, reclamada desde hace años por los expertos, se sigue haciendo esperar.", note: "participio II con dos complementos: seit Jahren, von Fachleuten" },
        { tr: "Los adultos encuestados en el estudio, en su mayoría jóvenes, mostraban una confianza sorprendentemente escasa en los medios.", note: "dos atributos coordinados, separados por una coma" },
        { tr: "La crisis de la vivienda, que se agrava desde hace décadas, no es un fenómeno nuevo.", note: "participio I de un verbo reflexivo: sich se queda en el atributo" },
        { tr: "El informe se basa en los datos presentados por la comisión el otoño pasado.", note: "participio II: von der Kommission indica el agente" },
        { tr: "Los peritajes de que dispone el tribunal se contradicen en puntos esenciales.", note: "participio I con el dativo que rige vorliegen" },
        { tr: "El modelo, que muchos consideran superado, resulta sorprendentemente sólido.", note: "für ... halten: el complemento predicativo se queda dentro del atributo" }
      ]
    },
    vocab: [
      "el tratado, el ensayo científico",
      "el hallazgo, el resultado (de un examen)",
      "el peritaje, el dictamen pericial",
      "la hipótesis",
      "el objeto, el tema (de un estudio)",
      "la investigación, el estudio",
      "presentar (un documento)",
      "resultar, revelarse",
      "demostrar, probar",
      "basarse en, apoyarse en",
      "mayoritariamente, en su mayoría",
      "decisivo, de forma decisiva"
    ],
    exercises: [
      {
        q: "En un ensayo: «Die von der Regierung im Frühjahr angekündigte und von der Opposition scharf kritisierte Reform ist bis heute nicht umgesetzt.» ¿Cuál es el sujeto de la oración?",
        opts: [
          "die Reform, con todo su atributo",
          "die Regierung",
          "die Opposition"
        ],
        why: "El artículo <i>Die</i> abre el paréntesis y <b>Reform</b> lo cierra: lo que queda en medio, dos atributos coordinados con <i>und</i>, describe la reforma. <i>von der Regierung</i> y <i>von der Opposition</i> son los agentes de los dos participios."
      },
      {
        q: "Transforma en atributo: «die Daten, die im letzten Jahr erhoben worden sind»",
        opts: [
          "die im letzten Jahr erhobenen Daten",
          "die im letzten Jahr erhoben wordenen Daten",
          "die im letzten Jahr erhebenden Daten"
        ],
        why: "La pasiva se convierte en un participio II declinado: <b>erhobenen</b>. <i>worden</i> nunca entra en el atributo; <i>erhebenden</i>, participio I, diría que son los datos los que recogen algo."
      },
      {
        q: "Completa: «Die Zahl der ___ Menschen ist im vergangenen Jahrzehnt gestiegen.» (las personas que viven en la pobreza)",
        opts: [
          "in Armut lebenden",
          "in Armut gelebten",
          "lebenden in Armut"
        ],
        why: "Acción activa y simultánea: participio I, <b>lebenden</b>. Dentro del atributo ampliado el complemento <i>in Armut</i> va antes del participio, nunca entre el participio y el sustantivo; <i>gelebten</i> es un participio II e indicaría una acción sufrida o terminada."
      },
      {
        q: "Completa: «Das dem Ausschuss seit März ___ Gutachten wurde bislang nicht veröffentlicht.»",
        hint: "de vorliegen, participio I, neutro después de das",
        why: "<b>vorliegende</b>: participio I (la comisión dispone del peritaje), terminación <i>-e</i> después de <i>das</i> en nominativo. <i>dem Ausschuss</i> es el dativo que rige <i>vorliegen</i>."
      },
      {
        q: "Completa con dos participios II: en el primer hueco «previstas», en el segundo «desfavorecidas».",
        tr: "Las consecuencias del cambio climático, previstas desde hace tiempo por numerosos investigadores, afectan sobre todo a las regiones del Sur, ya de por sí desfavorecidas.",
        why: "<i>vorhergesagten</i> (también <i>vorausgesagten</i> o <i>prognostizierten</i>) y <i>benachteiligten</i>: participios II con <i>-en</i> después del artículo plural <i>die</i>. <i>ohnehin</i> («de todos modos, ya de por sí») está dentro del segundo atributo."
      },
      {
        q: "Relaciona cada palabra con su significado.",
        pairs: [
          "el peritaje, el dictamen pericial",
          "el hallazgo, el resultado",
          "el tratado, el ensayo",
          "la hipótesis"
        ]
      },
      {
        q: "¿En qué oraciones hay un atributo participial ampliado?",
        opts: [
          "Die vom Gericht bestellte Gutachterin widersprach dem Kläger.",
          "Die über Jahrzehnte gewachsenen Strukturen lassen sich nicht über Nacht ändern.",
          "Die Gutachterin, die das Gericht bestellt hatte, widersprach dem Kläger.",
          "Die Strukturen sind über Jahrzehnte gewachsen."
        ],
        why: "En las dos primeras el participio, con sus complementos, está entre el artículo y el sustantivo (<i>die vom Gericht bestellte Gutachterin</i>, <i>die über Jahrzehnte gewachsenen Strukturen</i>). La tercera dice lo mismo que la primera con una oración de relativo; en la cuarta <i>gewachsen</i> forma parte del Perfekt y no es un atributo."
      },
      {
        q: "Traduce con un atributo participial ampliado: «El estudio presentado la semana pasada por la universidad contradice las hipótesis difundidas hasta ahora.» (vorlegen, die Annahme)",
        why: "<i>Die von der Universität letzte Woche vorgelegte Studie widerspricht den bisher verbreiteten Annahmen</i>: lo que en español sigue a «estudio» va antes de <i>Studie</i>, con el participio en última posición. <i>widersprechen</i> rige dativo: <i>den ... Annahmen</i>."
      },
      {
        tr: "La tesis defendida en el presente tratado se basa en resultados mayoritariamente antiguos. Los estudios publicados desde entonces suscitan serias dudas sobre ella.",
        why: "En <i>Abhandlung</i> el acento recae en <b>Ab</b>; en <i>Befunde</i> el acento recae en <b>fun</b>; en <i>Zweifel</i> la <b>z</b> se pronuncia [ts] y <b>ei</b> [aɪ]."
      },
      {
        tr: "La reforma reclamada desde hace años se sigue haciendo esperar.",
        why: "En <i>geforderte</i> el acento recae en <b>for</b>; en <i>Reform</i> el acento recae en <b>form</b>; en <i>lässt</i> la <b>ä</b> es breve."
      }
    ]
  },
  "lesson:c2-u01-l2": {
    theme: "Normas y contratos",
    title: "La tarea por resolver",
    objectives: [
      "entender y formar el Gerundivum: zu + participio I como atributo",
      "distinguir die zu prüfenden Anträge de die geprüften Anträge",
      "colocar zu en los verbos separables (die einzureichenden Unterlagen)",
      "alternar Gerundivum y pasiva modal en la prosa jurídica"
    ],
    theory: [
      {
        h: "sein + zu, trasladado delante del sustantivo",
        p: "En C1 viste <em>sein + zu</em> + infinitivo: <em>Die Aufgabe ist zu lösen</em>, «la tarea debe resolverse». El mismo contenido, convertido en atributo, pasa a ser <strong>zu + participio I</strong> declinado: <em>die zu lösende Aufgabe</em>. Es el llamado Gerundivum: tiene sentido pasivo y valor modal, «que debe» o «que puede» resolverse. Como todo atributo participial, se amplía con complementos: <em>die bis Monatsende einzureichenden Unterlagen</em>."
      },
      {
        h: "Deber o poder",
        p: "El valor se deduce del contexto, como con <em>sein + zu</em>. En las normas y los formularios predomina la obligación: <em>die einzureichenden Unterlagen</em>, los documentos que hay que presentar. Con una negación, el valor depende del verbo: <em>ein nicht zu unterschätzendes Risiko</em> es una advertencia, un riesgo que no se debe subestimar; <em>eine nicht zu lösende Aufgabe</em> expresa una imposibilidad, una tarea que no se puede resolver. Con <em>kaum</em> predomina la posibilidad: <em>eine kaum zu beziffernde Zahl</em>, una cifra difícilmente cuantificable. Con <em>erwarten</em> es una previsión: <em>die zu erwartenden Kosten</em>, los costes previsibles."
      },
      {
        contrast: "El español tiene un equivalente cercano en <em>por</em> + infinitivo: <em>la tarea por resolver, las cuestiones pendientes por aclarar</em>; también se oye <em>a</em> + infinitivo (<em>los documentos a presentar</em>), que se admite en algunos contextos fijos (<em>cantidad a pagar</em>) pero en muchos otros resulta forzado; la alternativa segura es <em>que hay que presentar</em>. La diferencia está en la posición y en la forma: en español todo va detrás del sustantivo y el infinitivo no cambia; en alemán todo va delante del sustantivo y el verbo se convierte en un participio de presente con la terminación del adjetivo: <em>die zu lösende Aufgabe</em>, <em>bei der zu lösenden Aufgabe</em>."
      },
      {
        trap: "No confundas <em>die zu prüfenden Anträge</em> (las solicitudes que hay que examinar, todavía pendientes) con <em>die geprüften Anträge</em> (las solicitudes ya examinadas). Y con los verbos separables <em>zu</em> se mete entre la partícula y el verbo, en una sola palabra: <em>einzureichenden, vorzunehmenden, abzugebenden</em>, no <em>zu einreichenden</em>."
      },
      {
        tip: "Para comprobar un Gerundivum, llévalo a la forma predicativa y después a la pasiva modal: <em>die zu erwartenden Kosten</em> → <em>die Kosten sind zu erwarten</em> → <em>die Kosten können erwartet werden</em>. Si el paso funciona, la forma es correcta."
      }
    ],
    grammar: {
      title: "El Gerundivum: zu + participio I",
      note: "<b>sein + zu + infinitivo</b> como predicado (<i>ist zu lösen</i>) se convierte en <b>zu + participio I</b> como atributo (<i>die zu lösende Aufgabe</i>). Sentido pasivo, valor de obligación o de posibilidad. Verbos separables: <i>einzureichenden</i>.",
      table: {
        head: ["predicado", "atributo", "sentido"],
        rows: [
          ["Die Aufgabe ist zu lösen.", "die zu lösende Aufgabe", "debe resolverse"],
          ["Die Unterlagen sind einzureichen.", "die einzureichenden Unterlagen", "deben presentarse"],
          ["Das Risiko ist nicht zu unterschätzen.", "ein nicht zu unterschätzendes Risiko", "no debe subestimarse"],
          ["Die Kosten sind zu erwarten.", "die zu erwartenden Kosten", "son previsibles"]
        ]
      },
      examples: [
        { tr: "La tarea por resolver es más compleja de lo previsto.", note: "zu + participio I: lösende" },
        { tr: "Los documentos que hay que presentar antes de fin de mes se encuentran en el anexo.", note: "verbo separable: ein-zu-reichenden" },
        { tr: "Es un riesgo que no se debe subestimar.", note: "con nicht: advertencia, «que no se debe»" },
        { tr: "Los costes previsibles superan con creces el presupuesto.", note: "zu erwarten: previsión" },
        { tr: "La tarea debe resolverse antes del viernes.", note: "forma predicativa: sein + zu + infinitivo" },
        { tr: "Las cuestiones aún por aclarar se tratarán en la próxima sesión.", note: "noch: «aún por»" }
      ]
    },
    vocab: [
      "la disposición, la norma",
      "el apoderado, el representante con poder",
      "la cláusula",
      "el recurso (jurídico)",
      "la condición, el requisito (de una autorización)",
      "los hechos, el supuesto de hecho",
      "presentar con posterioridad, completar (documentos)",
      "objetar, señalar (un defecto)",
      "subestimar",
      "garantizar, asegurar",
      "imprescindible",
      "dentro de plazo"
    ],
    exercises: [
      {
        q: "En un acta: «Die zu prüfenden Anträge werden bis Ende Mai bearbeitet.» ¿Qué significa «die zu prüfenden Anträge»?",
        opts: [
          "las solicitudes que deben ser examinadas",
          "las solicitudes que examinan",
          "las solicitudes ya examinadas"
        ],
        why: "<i>zu</i> + participio I es el <b>Gerundivum</b>: sentido pasivo y valor de obligación, como <i>die Anträge sind zu prüfen</i>. Sin <i>zu</i>, <i>prüfend</i> sería activo; <i>geprüften</i> indicaría solicitudes ya examinadas."
      },
      {
        q: "En un contrato de alquiler: «Der Mieter hat die Wohnung in ordnungsgemäßem Zustand zurückzugeben.» ¿Qué valor tiene haben + zu?",
        opts: [
          "una obligación con sujeto activo: el inquilino debe devolver",
          "una posibilidad: el inquilino puede devolver",
          "una pasiva: el piso es devuelto"
        ],
        why: "<b>haben + zu</b> es el equivalente activo de <i>sein + zu</i>: el sujeto debe hacer algo. La pasiva sería <i>Die Wohnung ist ... zurückzugeben</i>, de donde sale el atributo <i>die zurückzugebende Wohnung</i>."
      },
      {
        q: "Transforma en atributo: «Die Kosten sind nicht vorherzusehen.» → «___ Kosten»",
        opts: [
          "die nicht vorherzusehenden",
          "die nicht vorhergesehenen",
          "die nicht vorherzusehende"
        ],
        why: "Gerundivum de un verbo separable: <i>zu</i> entre <i>vorher</i> y <i>sehen</i>, terminación <b>-en</b> después del artículo plural. <i>vorhergesehenen</i> describe un hecho («los costes no previstos»), no la imposibilidad de preverlos; <i>vorherzusehende</i> tiene la terminación equivocada."
      },
      {
        q: "Completa: «Das ist ein nicht zu ___ Problem.» (subestimar)",
        hint: "de unterschätzen, neutro después de ein",
        why: "<b>unterschätzendes</b>: <i>unterschätzen</i> no es separable, así que <i>zu</i> queda delante como palabra aparte; después de <i>ein</i> en neutro nominativo la terminación es <i>-es</i>."
      },
      {
        q: "Completa: «Die bis zum 30. Juni ___ Unterlagen finden Sie in der Anlage.» (presentar)",
        hint: "de einreichen, separable, plural después de die",
        why: "<b>einzureichenden</b>: con un verbo separable <i>zu</i> se introduce entre la partícula y el verbo, y el participio lleva <i>-en</i> después de <i>die</i>."
      },
      {
        q: "Completa con el Gerundivum: en el primer hueco «resolver», en el segundo «cuantificar» (beziffern).",
        tr: "El informe señala tres problemas por resolver antes de fin de año y un número difícilmente cuantificable de procedimientos abiertos.",
        why: "<i>drei ... zu lösende Probleme</i> (o <i>zu behebende</i>): después de un numeral sin artículo la terminación es <i>-e</i>. <i>eine kaum zu beziffernde Zahl</i>: con <i>kaum</i> el Gerundivum expresa una posibilidad casi nula, con <i>-e</i> después de <i>eine</i>."
      },
      {
        q: "Ordena las palabras.",
        tr: "Las solicitudes que la autoridad debe examinar están disponibles desde hace semanas.",
        why: "<i>Die von der Behörde zu prüfenden Anträge liegen seit Wochen vor.</i> El agente <i>von der Behörde</i> está dentro del atributo, antes de <i>zu prüfenden</i>; <i>vor</i>, partícula de <i>vorliegen</i>, va al final."
      },
      {
        q: "Traduce con un Gerundivum: «Las modificaciones que hay que introducir en el contrato deben ser aprobadas por ambas partes.» (vornehmen, genehmigen, die Vertragspartei)",
        why: "<i>Die am Vertrag vorzunehmenden Änderungen müssen von beiden Vertragsparteien genehmigt werden</i>, o bien, en estilo normativo, <i>... sind von beiden Vertragsparteien zu genehmigen</i>. <i>vornehmen</i> es separable: <i>vorzunehmenden</i>."
      },
      {
        tr: "Los documentos que el solicitante debe aportar posteriormente deberán presentarse antes de fin de mes. De lo contrario, cabe esperar que se deniegue la solicitud.",
        why: "En <i>nachzureichenden</i> el acento recae en <b>nach</b>; en <i>Andernfalls</i> el acento recae en <b>An</b>; en <i>Ablehnung</i> el acento recae en <b>Ab</b> y la <b>b</b> se pronuncia [p]."
      },
      {
        tr: "Los costes previsibles son difícilmente cuantificables.",
        why: "En <i>erwartenden</i> el acento recae en <b>war</b>; en <i>beziffern</i> el acento recae en <b>zif</b> y la <b>z</b> se pronuncia [ts]; en <i>Kosten</i> la <b>o</b> es breve."
      }
    ]
  },
  "lesson:c2-u01-l3": {
    theme: "Ensayo y debate público",
    title: "Funktionsverbgefüge en el texto",
    objectives: [
      "reconocer un Funktionsverbgefüge en un período largo",
      "elegir el verbo funcional adecuado (kommen o bringen, finden o stoßen)",
      "sustituir un Funktionsverbgefüge por un verbo simple o una pasiva, y viceversa",
      "entender la diferencia entre in Abrede stellen y nicht in Abrede stellen"
    ],
    theory: [
      {
        h: "El sustantivo lleva el significado, el verbo la perspectiva",
        p: "En un Funktionsverbgefüge (locución de verbo funcional) el significado está en el sustantivo (<em>Anwendung, Zweifel, Beweis</em>), mientras que el verbo (<em>kommen, ziehen, stellen, finden</em>) dice poco por sí solo y regula sobre todo la perspectiva: activa o pasiva, inicio de un proceso o estado. En C1 los aprendiste como fórmulas; en C2 el reto es reconocerlos en una frase larga, donde el sustantivo y el verbo están en los dos extremos del paréntesis: <em>Die Ergebnisse wurden von Fachleuten in Zweifel gezogen.</em>"
      },
      {
        h: "Parejas que cambian de perspectiva",
        p: "Muchos Funktionsverbgefüge existen en pareja. <strong>zur Anwendung kommen</strong> tiene sentido pasivo (<em>wird angewendet</em>), <strong>zur Anwendung bringen</strong> sentido activo (<em>anwenden</em>). <strong>Berücksichtigung finden</strong> y <strong>auf Kritik stoßen</strong> sustituyen a una pasiva: <em>Die Einwände fanden Berücksichtigung</em> = <em>wurden berücksichtigt</em>; <em>Der Plan stieß auf Kritik</em> = <em>wurde kritisiert</em>. Otros conviven con un verbo simple casi sinónimo: <em>Rechnung tragen</em> (tener en cuenta, con dativo) equivale por lo general a <em>berücksichtigen</em>, con diferencias solo de contexto y de registro. <em>zur Debatte stehen</em>, en cambio, no tiene en alemán un verbo simple equivalente."
      },
      {
        contrast: "El español también tiene construcciones de este tipo, y a menudo coinciden: <em>poner en duda</em> (<em>in Zweifel ziehen</em>), <em>tomar en consideración</em> (<em>in Betracht ziehen</em>), <em>tener aplicación</em> (<em>zur Anwendung kommen</em>). Pero el verbo funcional no se traduce palabra por palabra: <em>unter Beweis stellen</em> no es «poner bajo prueba» sino «demostrar», <em>zur Sprache bringen</em> es «plantear» o «sacar a colación», <em>in Abrede stellen</em> es «negar». La preposición y el artículo son fijos: <em>zur Anwendung</em>, nunca <em>in die Anwendung</em>."
      },
      {
        trap: "<em>in Abrede stellen</em> significa «negar»; por tanto, <em>Sie stellt nicht in Abrede, dass ...</em> quiere decir «no niega que ...»: una concesión prudente, que no equivale necesariamente a una admisión explícita. Y <em>Rechnung tragen</em> exige el dativo sin preposición, aunque en español digamos <em>tener en cuenta</em> + complemento directo: <em>den Bedenken Rechnung tragen</em>, no <em>auf die Bedenken</em>."
      },
      {
        tip: "En los textos formales el Funktionsverbgefüge da peso al sustantivo y permite cambiar de perspectiva sin pasiva; en un texto que quiere ser ágil, un verbo simple suele ser mejor. Al escribir, úsalo donde aporte algo (perspectiva, inicio de un proceso, registro), no para alargar la frase."
      }
    ],
    grammar: {
      title: "Funktionsverbgefüge en la prosa ensayística",
      note: "<b>Sustantivo</b> = significado; <b>verbo funcional</b> = perspectiva. <i>kommen, finden, stoßen auf</i>: sentido pasivo. <i>bringen, stellen, ziehen</i>: sentido activo. La preposición y el artículo son fijos.",
      table: {
        head: ["Funktionsverbgefüge", "verbo simple o pasiva", "significado"],
        rows: [
          ["zur Anwendung kommen", "angewendet werden", "aplicarse, tener aplicación"],
          ["in Zweifel ziehen", "bezweifeln", "poner en duda"],
          ["unter Beweis stellen", "beweisen", "demostrar"],
          ["Berücksichtigung finden", "berücksichtigt werden", "ser tenido en cuenta"],
          ["auf Kritik stoßen", "kritisiert werden", "recibir críticas"],
          ["in Abrede stellen", "bestreiten", "negar"]
        ]
      },
      examples: [
        { tr: "El nuevo método ya se aplica en varias clínicas.", note: "zur Anwendung kommen: sentido pasivo" },
        { tr: "Los resultados del estudio fueron puestos en duda por los expertos.", note: "in Zweifel ziehen en pasiva: sustantivo y participio en los dos extremos de la frase" },
        { tr: "La ley no tiene suficientemente en cuenta las nuevas condiciones de vida.", note: "Rechnung tragen + dativo" },
        { tr: "La autora demuestra su tesis con numerosos ejemplos.", note: "unter Beweis stellen = beweisen" },
        { tr: "La propuesta obtuvo un amplio respaldo en la comisión.", note: "auf Zustimmung stoßen: sentido pasivo, como auf Kritik stoßen" },
        { tr: "La cuestión de la financiación no se planteó en la sesión.", note: "zur Sprache bringen en pasiva" }
      ]
    },
    vocab: [
      "aplicarse, tener aplicación",
      "poner en duda",
      "tener en cuenta (+ dativo)",
      "demostrar, dar prueba de",
      "plantear, sacar a colación (un tema)",
      "tomar en consideración",
      "ser tenido en cuenta",
      "recibir críticas",
      "negar, rechazar",
      "estar en discusión",
      "la toma de posición, el dictamen",
      "la costumbre, el uso"
    ],
    exercises: [
      {
        q: "¿Qué verbo simple corresponde a «etwas in Zweifel ziehen»?",
        opts: [
          "bezweifeln",
          "verzweifeln",
          "überziehen"
        ],
        why: "<b>bezweifeln</b>, «poner en duda». <i>verzweifeln</i> significa «desesperarse»; <i>überziehen</i>, «exagerar» o «quedarse en descubierto» en la cuenta."
      },
      {
        q: "En un informe: «Die Methode wird in drei Kliniken angewendet.» ¿Qué reformulación con un Funktionsverbgefüge tiene el mismo sentido?",
        opts: [
          "Die Methode kommt in drei Kliniken zur Anwendung.",
          "Die Methode bringt in drei Kliniken zur Anwendung.",
          "Die Methode stellt in drei Kliniken zur Anwendung."
        ],
        why: "<b>kommen</b> da el sentido pasivo: el método «se aplica». <i>zur Anwendung bringen</i> es activo y necesita un sujeto que aplique: <i>Drei Kliniken bringen die Methode zur Anwendung</i>. <i>stellen</i> no forma este Funktionsverbgefüge."
      },
      {
        q: "En una reseña: «Die Verfasserin stellt nicht in Abrede, dass ihre Quellen lückenhaft sind.» ¿Qué hace la autora?",
        opts: [
          "no niega que sus fuentes sean incompletas",
          "niega que sus fuentes sean incompletas",
          "demuestra que sus fuentes son incompletas"
        ],
        why: "<i>in Abrede stellen</i> = «negar»; con <i>nicht</i> se convierte en <b>«no negar»</b>. Es una concesión prudente, típica del ensayo: la autora no discute la limitación; cuán abiertamente la admite depende del contexto."
      },
      {
        q: "Completa: «Der Entwurf trägt den Einwänden der Verbände kaum ___.» (tiene en cuenta)",
        hint: "el sustantivo que va con tragen",
        why: "<b>Rechnung</b>: <i>einer Sache Rechnung tragen</i>, «tener algo en cuenta», con dativo (<i>den Einwänden</i>)."
      },
      {
        q: "Completa: «Die Finanzierung des Projekts steht derzeit nicht zur ___.» (no está en discusión, o no es negociable)",
        hint: "zur ... stehen",
        why: "<b>Debatte</b> o <b>Diskussion</b>: «no está en discusión». <b>Disposition</b> da la segunda lectura: <i>nicht zur Disposition stehen</i>, «no es negociable, no se pone en cuestión»."
      },
      {
        q: "Completa: en el primer hueco la preposición, en el segundo el sustantivo del Funktionsverbgefüge.",
        tr: "La comisión tomó en consideración las propuestas de la oposición, pero apenas las tuvo en cuenta en el informe final.",
        why: "<i>in Betracht ziehen</i> («tomar en consideración») y <i>Rechnung tragen</i> + dativo (<i>ihnen</i>). La frase muestra la diferencia entre los dos: considerar una propuesta no es lo mismo que tenerla en cuenta."
      },
      {
        q: "Relaciona cada expresión con su significado.",
        pairs: [
          "negar",
          "demostrar",
          "plantear (un tema)",
          "recibir críticas"
        ]
      },
      {
        q: "Traduce: «Las objeciones de los ciudadanos no se tuvieron en cuenta en el proyecto.» (der Einwand, der Entwurf, Berücksichtigung finden)",
        why: "Con el Funktionsverbgefüge: <i>Die Einwände der Bürger haben im Entwurf keine Berücksichtigung gefunden</i> (o <i>fanden ... keine Berücksichtigung</i>). La negación pasa al sustantivo: <i>keine Berücksichtigung</i>, no <i>nicht Berücksichtigung</i>. También se acepta la pasiva simple: <i>... wurden im Entwurf nicht berücksichtigt</i>."
      },
      {
        tr: "Hasta ahora, el procedimiento descrito en el estudio se aplica solo en raras ocasiones. Los autores no ponen en duda su eficacia, pero plantean la cuestión de sus elevados costes.",
        why: "En <i>Studie</i> la <b>st</b> inicial se pronuncia [ʃt]; en <i>Autoren</i> el acento recae en <b>to</b>; en <i>Sprache</i> <b>sp</b> se pronuncia [ʃp]."
      },
      {
        tr: "La ministra negó toda responsabilidad.",
        why: "En <i>Ministerin</i> el acento recae en <b>nis</b>; en <i>Verantwortung</i> el acento recae en <b>ant</b>; en <i>Abrede</i> el acento recae en <b>Ab</b> y la <b>b</b> se pronuncia [p]."
      }
    ]
  },
  "lesson:c2-u01-test": {
    theme: "Comprobación",
    title: "Test: Atributos ampliados",
    objectives: [
      "comprobar el atributo participial ampliado, el Gerundivum y los Funktionsverbgefüge"
    ],
    theory: [
      {
        p: "Diez preguntas sobre toda la unidad. Se aprueba con el 70%. No vuelvas a mirar las lecciones mientras respondes: si no recuerdas algo, es mejor volver atrás y repasar."
      }
    ],
    exercises: [
      {
        q: "Completa: «Die von der Kommission im Herbst ___ Daten sind inzwischen veraltet.» (presentar)",
        hint: "de vorlegen, participio II, plural después de die",
        why: "<b>vorgelegten</b>: participio II con sentido pasivo («presentados por la comisión»), <i>-en</i> después del artículo plural."
      },
      {
        q: "Completa: «Die bis Freitag ___ Berichte liegen noch nicht vor.» (entregar)",
        hint: "de abgeben, Gerundivum",
        why: "<b>abzugebenden</b>: <i>zu</i> entre la partícula y el verbo, participio I, <i>-en</i> después de <i>die</i>: «los informes que hay que entregar antes del viernes»."
      },
      {
        q: "Completa: «Das neue Verfahren kommt ab Januar zur ___.» (se aplicará)",
        hint: "el sustantivo que va con zur ... kommen",
        why: "<b>Anwendung</b>: <i>zur Anwendung kommen</i>, «aplicarse»."
      },
      {
        q: "Completa: «Die Autorin hat ihr Können erneut unter ___ gestellt.» (ha demostrado)",
        hint: "unter ... stellen",
        why: "<b>Beweis</b>: <i>unter Beweis stellen</i>, «demostrar, dar prueba de»."
      },
      {
        q: "«Die sich aus den neuen Vorschriften für kleine Betriebe ergebenden Pflichten sind kaum zu überblicken.» ¿A qué sustantivo se refiere el atributo?",
        opts: [
          "Pflichten",
          "Vorschriften",
          "Betriebe"
        ],
        why: "El artículo <i>Die</i> abre el paréntesis, que se cierra con el participio <i>ergebenden</i> y el sustantivo <b>Pflichten</b>: «las obligaciones que se derivan de las nuevas normas para las pequeñas empresas». <i>Vorschriften</i> y <i>Betriebe</i> están dentro de los complementos."
      },
      {
        q: "¿Qué significa «die zu befragenden Personen»?",
        opts: [
          "las personas que deben ser entrevistadas",
          "las personas que entrevistan",
          "las personas entrevistadas"
        ],
        why: "<i>zu</i> + participio I es el <b>Gerundivum</b>: sentido pasivo y valor de obligación. <i>befragend</i> sería activo; <i>befragt</i>, ya terminado."
      },
      {
        q: "¿Qué oración tiene el mismo significado que «Die Reform stieß auf heftige Kritik»?",
        opts: [
          "Die Reform wurde heftig kritisiert.",
          "Die Reform kritisierte heftig.",
          "Die Reform hat heftige Kritik geübt."
        ],
        why: "<i>auf Kritik stoßen</i> tiene sentido pasivo: la reforma <b>fue criticada</b>. <i>Kritik üben</i> es activo: quien critica es el sujeto."
      },
      {
        q: "Transforma en atributo: «die Fragen, die noch geklärt werden müssen»",
        opts: [
          "die noch zu klärenden Fragen",
          "die noch geklärten Fragen",
          "die noch klärenden Fragen"
        ],
        why: "Una pasiva con <i>müssen</i> se convierte en un <b>Gerundivum</b>: <i>zu klärenden</i>. <i>geklärten</i> diría que ya están aclaradas; <i>klärenden</i>, que son ellas las que aclaran algo."
      },
      {
        tr: "Los resultados presentados por la comisión de expertos obtuvieron un amplio respaldo. Está previsto que las medidas que han de derivarse de ellos se apliquen el año próximo.",
        why: "En <i>Expertenkommission</i> el acento principal recae en <b>per</b>; en <i>stießen</i> la <b>ie</b> es larga y la <b>ß</b> se pronuncia [s]; en <i>Maßnahmen</i> el acento recae en <b>Maß</b>, con la <b>a</b> larga."
      },
      {
        tr: "Las cuestiones aún por aclarar se plantearán en la próxima sesión.",
        why: "En <i>klärenden</i> la <b>ä</b> es larga; en <i>nächsten</i> la <b>ä</b> es larga también delante de <b>chst</b>; en <i>Sitzung</i> <b>tz</b> se pronuncia [ts]."
      }
    ]
  },
  "unit:c2-u02": {
    title: "Plurales y formación de palabras",
    grammarNote: "Plurales dobles con significado distinto (die Banken y die Bänke, die Worte y die Wörter) · plurales sustitutivos (Ratschläge, Regenfälle, Streitigkeiten) · compuestos: Grundwort y elemento de enlace (Arbeitszeit, Hundebesitzer, Schulpflicht) · derivación con -ung, -heit, -keit y con ver-, zer-, ent-, miss- · el género de los Fremdwörter (-ion, -ität, -ismus)"
  },
  "lesson:c2-u02-l1": {
    theme: "Léxico y significado",
    title: "Die Banken y die Bänke",
    objectives: [
      "distinguir los plurales que cambian de significado (Banken y Bänke, Worte y Wörter)",
      "usar los plurales sustitutivos de los sustantivos que no tienen plural (Ratschläge, Regenfälle)",
      "elegir el plural correcto según el contexto",
      "no confundir Mütter y Muttern, Bände y Bänder"
    ],
    theory: [
      {
        h: "Un singular, dos plurales",
        p: "Algunos sustantivos tienen dos plurales, y cada uno lleva un significado distinto. <em>die Bank</em> es tanto el banco donde se guarda el dinero como el banco donde uno se sienta: los bancos (entidades) son <strong>Banken</strong>, los bancos (asientos) son <strong>Bänke</strong>. <em>das Wort</em> hace <strong>Wörter</strong> cuando se trata de palabras como unidades del léxico, tomadas una a una (<em>ein Wörterbuch mit 100 000 Wörtern</em>), y <strong>Worte</strong> cuando se trata de palabras que forman un discurso o una expresión (<em>mit anderen Worten, Worte des Dankes</em>). <em>die Mutter</em> hace <strong>Mütter</strong> (las madres) y <strong>Muttern</strong> (las tuercas). A veces detrás de la misma forma hay dos sustantivos de género distinto: <em>der Band</em> (el tomo) hace <strong>Bände</strong>, <em>das Band</em> (la cinta, el ligamento) hace <strong>Bänder</strong>, y <em>die Band</em>, el grupo musical, hace <em>Bands</em>."
      },
      {
        h: "Cuando falta el plural: los plurales sustitutivos",
        p: "Otros sustantivos no tienen un plural de uso, o lo tienen raro, y el alemán lo toma de un compuesto o de un derivado. <em>der Rat</em>, en el sentido de consejo, pasa a <strong>Ratschläge</strong>: <em>Räte</em> son en cambio los órganos colegiados o sus miembros (<em>die Stadträte</em>). <em>der Regen</em> pasa a <strong>Regenfälle</strong>, <em>der Schnee</em> a <strong>Schneefälle</strong>, <em>der Streit</em> normalmente a <strong>Streitigkeiten</strong> (<em>Streite</em> existe, pero es raro). El plural sustitutivo es el punto en que el plural y la formación de palabras se encuentran: se recurre a un compuesto cuyo último elemento tiene plural (<em>Regenfälle, Ratschläge</em>) o a un derivado (<em>Streitigkeiten</em>)."
      },
      {
        contrast: "Al hispanohablante <em>die Bank</em> le tiende una trampa doble: <em>banco</em> también significa a la vez la entidad financiera y el asiento, pero en español su plural es siempre <em>bancos</em>. El alemán comparte el doble sentido y, sin embargo, obliga a elegir entre <em>Banken</em> y <em>Bänke</em>, y nada en tu lengua te avisa. El español casi no tiene plurales dobles de este tipo; lo más parecido son plurales que se alejan del singular (<em>el bien</em> y <em>los bienes</em>, <em>el resto</em> y <em>los restos</em>). Con los plurales sustitutivos pasa lo contrario: en español <em>consejos</em>, <em>lluvias</em>, <em>nevadas</em> y <em>disputas</em> son plurales normales, mientras que el alemán necesita un compuesto o un derivado: <em>Ratschläge, Regenfälle, Schneefälle, Streitigkeiten</em>."
      },
      {
        trap: "El diccionario contiene <em>Wörter</em>, nunca <em>Worte</em>; un discurso conmovedor está hecho de <em>Worte</em>. El español dice <em>palabras</em> en los dos casos (<em>en otras palabras</em>, <em>un diccionario de cien mil palabras</em>), así que el oído no te ayuda. El criterio no es el número (también <em>ein paar Worte</em> se cuentan), sino el punto de vista: unidad del léxico, <em>Wörter</em>; enunciado, lo que alguien dice, <em>Worte</em>. Y cuidado con la diéresis, que aquí distingue el significado: <em>Muttern</em> son tuercas, <em>Mütter</em> son madres; <em>Bänke</em> son bancos para sentarse, <em>Banken</em> entidades de crédito."
      },
      {
        tip: "Aprende el plural junto con el significado, no como una forma suelta. Los diccionarios monolingües (el Duden, por ejemplo) dan los dos plurales, cada uno con su definición: ahí es donde conviene comprobarlo."
      }
    ],
    grammar: {
      title: "Plurales dobles y plurales sustitutivos",
      note: "Un sustantivo, dos plurales, dos significados: <b>Banken</b> (entidades bancarias) y <b>Bänke</b> (bancos para sentarse), <b>Wörter</b> (vocablos) y <b>Worte</b> (discurso). Si falta el plural, lo aporta un compuesto: <b>Ratschläge</b>, <b>Regenfälle</b>, <b>Streitigkeiten</b>.",
      table: {
        head: ["singular", "plural", "significado"],
        rows: [
          ["die Bank", "die Banken", "los bancos (entidades)"],
          ["die Bank", "die Bänke", "los bancos (asientos)"],
          ["das Wort", "die Wörter", "las palabras (vocablos aislados)"],
          ["das Wort", "die Worte", "las palabras (de un discurso)"],
          ["die Mutter", "die Muttern", "las tuercas"],
          ["der Rat", "die Ratschläge", "los consejos"]
        ]
      },
      examples: [
        { tr: "Los bancos han vuelto a subir los tipos de interés.", note: "Banken: entidades de crédito" },
        { tr: "Delante del ayuntamiento se han colocado bancos nuevos.", note: "Bänke: bancos para sentarse, con diéresis" },
        { tr: "Con pocas palabras dio en el clavo del problema.", note: "Worte: palabras como expresión, no como vocablos" },
        { tr: "El diccionario registra más de cien mil palabras.", note: "Wörter: palabras como unidades del léxico" },
        { tr: "Aceptó agradecida los consejos de sus colegas.", note: "Ratschläge: plural sustitutivo de der Rat" },
        { tr: "Tras las fuertes lluvias el río se desbordó.", note: "Regenfälle: plural sustitutivo de der Regen" }
      ]
    },
    vocab: [
      "la entidad de crédito",
      "el banco (para sentarse)",
      "la tuerca",
      "la disputa, el litigio",
      "la lluvia, el aguacero",
      "la nevada",
      "la modalidad deportiva, el deporte",
      "el modismo, la expresión idiomática",
      "la diferencia de significado",
      "la forma de plural",
      "ambiguo, polisémico",
      "distinguir"
    ],
    exercises: [
      {
        q: "En las páginas de economía: «Mehrere ___ haben ihre Gebühren erhöht.»",
        opts: [
          "Banken",
          "Bänke",
          "Banke"
        ],
        why: "Las entidades de crédito son <b>Banken</b>; <i>Bänke</i> son los bancos para sentarse. <i>Banke</i> no existe."
      },
      {
        q: "Completa: «Zur Begrüßung sprach der Direktor ein paar ___.» (unas palabras, un breve discurso)",
        opts: [
          "Worte",
          "Wörter",
          "Worten"
        ],
        why: "Palabras que forman un discurso: <b>Worte</b>. <i>Wörter</i> son palabras consideradas como unidades del léxico; <i>Worten</i> es el dativo plural (<i>mit wenigen Worten</i>), y aquí hace falta el acusativo."
      },
      {
        q: "¿Cuál es el plural habitual de «der Rat» en el sentido de «consejo», «sugerencia»?",
        opts: [
          "die Ratschläge",
          "die Räte",
          "die Rate"
        ],
        why: "En el sentido de consejo, <i>Rat</i> no tiene un plural de uso: se recurre al plural sustitutivo <b>Ratschläge</b>. <i>Räte</i> son los órganos colegiados o sus miembros (<i>Stadträte</i>); <i>die Rate</i> es la cuota o el plazo, otra palabra."
      },
      {
        q: "Completa: «Das neue Wörterbuch verzeichnet rund 140 000 ___.»",
        hint: "plural de das Wort: unidades del léxico",
        why: "<b>Wörter</b>: un diccionario registra las palabras como unidades del léxico. Cuidado con la diéresis: <i>Worter</i> no existe."
      },
      {
        q: "Completa: «An der Schraube fehlt eine Mutter; im Werkzeugkasten liegen aber noch zwei ___.»",
        hint: "plural de die Mutter en el sentido de «tuerca»",
        why: "<b>Muttern</b> (o <b>Schraubenmuttern</b>): la tuerca hace el plural en <i>-n</i>, sin diéresis. <i>Mütter</i> son las madres."
      },
      {
        q: "Completa con dos plurales sustitutivos: en el primer hueco el plural de «der Regen», en el segundo el de «der Rat» (consejo).",
        tr: "Las fuertes lluvias de las últimas semanas han arruinado la cosecha; ahora los agricultores reciben consejos bienintencionados por todas partes.",
        why: "<i>Regen</i> no tiene un plural de uso: se dice <b>Regenfälle</b>. <i>Niederschläge</i> sería más amplio, porque incluye también la nieve y el granizo. Para los consejos hace falta <b>Ratschläge</b>. Ambos sin <i>-n</i>: el primero es un nominativo plural, el segundo un acusativo plural."
      },
      {
        q: "Relaciona cada plural con su significado.",
        pairs: [
          "los bancos (entidades)",
          "los bancos (asientos)",
          "las palabras (de un discurso)",
          "las palabras (vocablos aislados)"
        ]
      },
      {
        q: "Traduce: «Los bancos ignoraron los consejos de los expertos.» (ignorieren, der Ratschlag, der Experte)",
        why: "<i>Die Banken haben die Ratschläge der Experten ignoriert</i>. Dos plurales que hay que elegir bien: <i>Banken</i>, no <i>Bänke</i>, y <i>Ratschläge</i>, porque <i>Rat</i> en el sentido de consejo no tiene plural. Se aceptan también <i>Fachleute</i>, el Präteritum <i>ignorierten</i> y el verbo <i>missachten</i>."
      },
      {
        tr: "En los bancos delante del banco los clientes esperaban desde primera hora de la mañana. En pocas palabras, un empleado explicó por qué la sucursal seguía cerrada.",
        why: "En <i>Bänken</i> la <b>ä</b> es breve, [ɛ]; en <i>Angestellter</i> el acento recae en <b>An</b>; en <i>Filiale</i> el acento recae en la <b>a</b> larga: fi-li-<b>a</b>-le."
      },
      {
        tr: "Con pocas palabras lo ha dicho todo.",
        why: "En <i>Worten</i> la <b>o</b> es breve, [ɔ]; en <i>wenigen</i> el acento recae en <b>we</b>; en <i>gesagt</i> el acento recae en <b>sagt</b> y la <b>g</b> ante la <b>t</b> final se pronuncia [k]."
      }
    ]
  },
  "lesson:c2-u02-l2": {
    theme: "Léxico técnico y administrativo",
    title: "Compuestos y Fugenelement",
    objectives: [
      "descomponer un compuesto en Bestimmungswort y Grundwort",
      "deducir el género de un compuesto a partir del último elemento",
      "insertar el elemento de enlace correcto (-s-, -e-, -n-, -er-)",
      "reconocer los sufijos tras los cuales la -s- es la norma (-ung, -heit, -keit, -tät)"
    ],
    theory: [
      {
        h: "Decide el sustantivo de la derecha",
        p: "En un compuesto (<em>Kompositum</em>) el último elemento, el <strong>Grundwort</strong>, fija el género, el plural y la categoría; los elementos que lo preceden, los <strong>Bestimmungswörter</strong>, lo especifican. <em>das Haus + die Tür + der Schlüssel</em> dan <em>der Haustürschlüssel</em>, masculino como <em>Schlüssel</em>. El compuesto se escribe en una sola palabra y el acento principal recae normalmente en el primer elemento: <em><b>Haus</b>türschlüssel</em>."
      },
      {
        h: "El elemento de enlace",
        p: "Entre un elemento y otro puede aparecer un <strong>Fugenelement</strong>: <em>-s-</em> (<em>Arbeitszeit, Wohnungsmarkt</em>), <em>-es-</em> (<em>Tageslicht</em>), <em>-e-</em> (<em>Hundebesitzer</em>), <em>-n-</em> o <em>-en-</em> (<em>Sonnenenergie, Leinenpflicht</em>), <em>-er-</em> (<em>Kinderbuch</em>); a veces, en cambio, cae la <em>-e</em> final del primer elemento (<em>die Schule</em> → <em>Schulpflicht</em>). Un indicio fiable: tras los sufijos <em>-ung, -heit, -keit, -schaft, -ion, -tät, -ling</em> el enlace es normalmente <em>-s-</em> (<em>Gesundheitswesen, Freiheitsstrafe, Universitätsbibliothek, Lieblingsbuch</em>). Pero es un indicio, no una garantía; en los demás casos el enlace se aprende palabra por palabra, y a veces oscila: <em>Schadensersatz</em> y <em>Schadenersatz</em> son correctos los dos, y en Austria se dice <em>Schweinsbraten</em> donde en Alemania se dice <em>Schweinebraten</em>."
      },
      {
        contrast: "El español pone el sustantivo principal a la izquierda y lo especifica con una preposición o con un adjetivo de relación: <em>el mercado de la vivienda</em>, <em>la biblioteca universitaria</em>, <em>la pena de prisión</em>. Tiene compuestos (<em>sacacorchos, lavaplatos, bocacalle</em>), pero no puede encadenar sustantivos libremente. El alemán invierte el orden y lo suelda todo en una palabra: primero lo que especifica, luego el sustantivo principal: <em>Wohnungsmarkt, Universitätsbibliothek, Freiheitsstrafe</em>. Para traducir se lee de derecha a izquierda, y el adjetivo de relación español suele corresponder a un primer elemento alemán (<em>universitaria</em> → <em>Universitäts-</em>). Y la <em>-s-</em> de enlace no es un genitivo: aparece también tras sustantivos femeninos (<em>die Arbeit</em> → <em>Arbeitszeit</em>, <em>die Liebe</em> → <em>Liebesbrief</em>), que en genitivo nunca toman <em>-s</em>."
      },
      {
        trap: "El género viene siempre del último elemento, aunque el primero sea más «visible»: <em>das Arbeitsamt</em> es neutro como <em>das Amt</em>, aunque <em>Arbeit</em> sea femenino; <em>der Wohnungsmarkt</em> es masculino como <em>der Markt</em>. Y el compuesto no se separa: <em>Arbeitsbedingungen</em>, no <em>Arbeits Bedingungen</em>. El guion se usa solo por claridad o con siglas y nombres propios (<em>E-Mail-Adresse</em>)."
      },
      {
        tip: "Para entender un compuesto largo, empieza por la derecha: <em>Arbeits|bedingungen</em> son condiciones, y el primer elemento dice de qué (de trabajo). Quita el enlace, si lo hay, y busca las partes en el diccionario una por una."
      }
    ],
    grammar: {
      title: "Compuestos y elemento de enlace",
      note: "<b>Bestimmungswort + (enlace) + Grundwort</b>. El Grundwort, a la derecha, decide género y plural; el acento principal recae normalmente en el primer elemento. Tras <i>-ung, -heit, -keit, -schaft, -ion, -tät, -ling</i> el enlace es normalmente <i>-s-</i>.",
      table: {
        head: ["elementos", "enlace", "compuesto"],
        rows: [
          ["die Arbeit + die Zeit", "-s-", "die Arbeitszeit"],
          ["die Wohnung + der Markt", "-s-", "der Wohnungsmarkt"],
          ["der Hund + der Besitzer", "-e-", "der Hundebesitzer"],
          ["die Sonne + die Energie", "-n-", "die Sonnenenergie"],
          ["das Kind + das Buch", "-er-", "das Kinderbuch"],
          ["die Schule + die Pflicht", "cae la -e", "die Schulpflicht"]
        ]
      },
      examples: [
        { tr: "Las condiciones de trabajo en el sector de los cuidados apenas han mejorado.", note: "Arbeit + s + Bedingungen: -s- también tras un femenino" },
        { tr: "El dueño del perro responde de los daños.", note: "Hund + e + Besitzer" },
        { tr: "La energía solar ya cubre una parte de la demanda de electricidad.", note: "Sonne + n + Energie; Strom + Bedarf sin enlace: la -s de Strombedarfs es la desinencia del genitivo" },
        { tr: "El libro infantil se ha traducido a veinte idiomas.", note: "Kind + er + Buch: el enlace coincide con el plural Kinder" },
        { tr: "Su carta de amor nunca llegó.", note: "Liebe + s + Brief: -s- tras un femenino, así que no es un genitivo" },
        { tr: "La escolarización obligatoria empieza normalmente a los seis años.", note: "Schule + Pflicht: cae la -e final" }
      ]
    },
    vocab: [
      "el compuesto, la palabra compuesta",
      "la palabra base (el último elemento del compuesto)",
      "el determinante (el elemento que precede a la base)",
      "el elemento de enlace",
      "la condición laboral",
      "el mercado de la vivienda",
      "la biblioteca universitaria",
      "la pena de prisión",
      "la indemnización por daños y perjuicios",
      "la sanidad, el sistema sanitario",
      "componerse de, estar formado por",
      "compuesto (dicho de una palabra)"
    ],
    exercises: [
      {
        q: "¿Qué género tiene «Haustürschlüssel» (la llave de la puerta de casa)?",
        opts: [
          "der, como Schlüssel",
          "die, como Tür",
          "das, como Haus"
        ],
        why: "El género lo decide siempre el último elemento, el Grundwort: <b>der</b> Schlüssel, luego <b>der</b> Haustürschlüssel."
      },
      {
        q: "Completa: «Der ___ in München ist seit Jahren angespannt.»",
        hint: "die Wohnung + der Markt, con el elemento de enlace",
        why: "<b>Wohnungsmarkt</b>: tras <i>-ung</i> el enlace es <i>-s-</i>. El género es masculino, como <i>der Markt</i>."
      },
      {
        q: "Completa: «Die ___ ist auch am Sonntag geöffnet.»",
        hint: "die Universität + die Bibliothek",
        why: "<b>Universitätsbibliothek</b>: tras <i>-tät</i> el enlace es <i>-s-</i>, y todo se escribe en una sola palabra."
      },
      {
        q: "Completa: «Der Angeklagte wurde zu einer ___ von drei Jahren verurteilt.»",
        hint: "die Freiheit + die Strafe",
        why: "<b>Freiheitsstrafe</b>, «pena de prisión»: tras <i>-heit</i> el enlace es <i>-s-</i>."
      },
      {
        q: "Completa: «Die ___ beginnt in Deutschland in der Regel mit sechs Jahren.»",
        hint: "die Schule + die Pflicht",
        why: "<b>Schulpflicht</b>: aquí no se añade nada; al contrario, cae la <i>-e</i> final de <i>Schule</i>, como en <i>Schulbuch</i> y <i>Schulweg</i>."
      },
      {
        q: "Completa con dos compuestos: en el primer hueco «der Hund + der Besitzer», en el segundo «die Leine + die Pflicht».",
        tr: "Muchos dueños de perros protestan contra la nueva obligación de llevarlos con correa en los parques municipales.",
        why: "<b>Hundebesitzer</b> con el enlace <i>-e-</i>, <b>Leinenpflicht</b> con <i>-n-</i>. El plural de <i>Hundebesitzer</i> es igual al singular; <i>Leinenpflicht</i> es femenino como <i>die Pflicht</i>."
      },
      {
        q: "¿Qué compuestos tienen un elemento de enlace?",
        opts: [
          "Arbeitszeit",
          "Liebesbrief",
          "Haustür",
          "Tischbein"
        ],
        why: "<i>Arbeit<b>s</b>zeit</i> y <i>Liebe<b>s</b>brief</i> tienen el enlace <i>-s-</i>, aunque <i>Arbeit</i> y <i>Liebe</i> sean femeninos. <i>Haus|tür</i> y <i>Tisch|bein</i> unen los dos sustantivos sin nada en medio."
      },
      {
        q: "Traduce: «Las condiciones de trabajo en la sanidad han empeorado.» (die Arbeitsbedingung, das Gesundheitswesen, sich verschlechtern)",
        why: "<i>Die Arbeitsbedingungen im Gesundheitswesen haben sich verschlechtert</i>. Dos compuestos con <i>-s-</i>: <i>Arbeit<b>s</b>bedingungen</i> y <i>Gesundheit<b>s</b>wesen</i>. Se aceptan también <i>sind schlechter geworden</i>, el Präteritum <i>verschlechterten sich</i> y el orden con <i>Im Gesundheitswesen</i> en primera posición."
      },
      {
        tr: "El mercado de la vivienda en las ciudades universitarias está tensionado desde hace años. Muchos estudiantes solo encuentran una habitación asequible tras meses de búsqueda.",
        why: "En <i>Wohnungsmarkt</i> el acento recae en <b>Woh</b>, con la <b>o</b> larga; en <i>Universitätsstädten</i> el acento principal recae en <b>tät</b>; en <i>monatelanger</i> el acento recae en <b>Mo</b>."
      },
      {
        tr: "Las condiciones de trabajo han mejorado claramente.",
        why: "En <i>Arbeitsbedingungen</i> el acento principal recae en <b>Ar</b>, el primer elemento del compuesto; en <i>deutlich</i> <b>eu</b> se pronuncia [ɔʏ]; en <i>verbessert</i> el acento recae en <b>bes</b>."
      }
    ]
  },
  "lesson:c2-u02-l3": {
    theme: "Léxico abstracto",
    title: "Derivación y Fremdwörter",
    objectives: [
      "formar sustantivos abstractos con -ung, -heit, -keit",
      "elegir entre -heit y -keit",
      "entender el valor de los prefijos ver-, zer-, ent-, miss-",
      "deducir el género de los Fremdwörter a partir del sufijo"
    ],
    theory: [
      {
        h: "Sufijos que deciden el género",
        p: "Un sufijo lleva una palabra a otra categoría y le fija el género. <em>-ung</em> forma sustantivos a partir de verbos: <em>verbessern</em> → <em>die Verbesserung</em>. <em>-heit</em>, <em>-keit</em> e <em>-igkeit</em> forman sustantivos a partir de adjetivos: <em>frei</em> → <em>die Freiheit</em>, <em>nachhaltig</em> → <em>die Nachhaltigkeit</em>, <em>genau</em> → <em>die Genauigkeit</em>. Los sustantivos en <strong>-ung, -heit, -keit, -schaft</strong> son siempre femeninos y hacen el plural en <em>-en</em>."
      },
      {
        h: "¿-heit o -keit?",
        p: "<strong>-keit</strong> sigue a los adjetivos en <em>-bar, -ig, -lich, -sam</em> (<em>Dankbarkeit, Nachhaltigkeit, Höflichkeit, Wirksamkeit</em>) y, por lo general, a los terminados en <em>-el</em> y <em>-er</em> (<em>Eitelkeit, Sauberkeit</em>), con excepciones como <em>Sicherheit</em> y <em>Dunkelheit</em>. <strong>-heit</strong> vale en los demás casos (<em>Freiheit, Gelassenheit, Schönheit</em>). <strong>-igkeit</strong> se añade a adjetivos en <em>-los</em> y a algunos otros: <em>Arbeitslosigkeit, Genauigkeit</em>."
      },
      {
        h: "Prefijos verbales inseparables",
        p: "<em>ver-</em> tiene varios valores: cambio (<em>verändern</em>), error en los verbos reflexivos (<em>sich verschreiben, sich verrechnen, sich verlaufen</em>), consumo hasta el final (<em>verbrauchen</em>). <em>zer-</em> indica la ruptura en pedazos (<em>zerreißen, zerbrechen</em>). <em>ent-</em> indica alejamiento o privación (<em>entfernen, entwerten</em>). <em>miss-</em> indica que algo sale mal (<em>missverstehen, misslingen</em>). Todos son inseparables y no toman <em>ge-</em> en el participio: <em>zerrissen, missverstanden, entwertet</em>. <em>ver-, zer-, ent-</em> nunca llevan el acento; <em>miss-</em> lo lleva en algunos verbos (<em>missverstehen</em>) y no en otros (<em>misslingen</em>)."
      },
      {
        h: "Fremdwörter: el sufijo da el género",
        p: "También en las palabras extranjeras el sufijo orienta el género: <em>-ion, -ität, -ur, -ie</em> son por lo general femeninos (<em>die Nation, die Qualität, die Kultur, die Demokratie</em>); <em>-ismus</em> es masculino (<em>der Realismus</em>); <em>-ment</em> es casi siempre neutro (<em>das Dokument, das Argument</em>). Muchos verbos en <em>-ieren</em> forman sustantivos en <em>-ierung</em> (<em>digitalisieren</em> → <em>die Digitalisierung</em>), pero no todos: <em>studieren</em> da <em>das Studium</em>."
      },
      {
        contrast: "Para un hispanohablante muchos Fremdwörter son transparentes: <em>-idad</em> corresponde a <em>-ität</em> (<em>universidad, Universität</em>), <em>-ción</em> a <em>-tion</em> (<em>nación, Nation</em>), <em>-ismo</em> a <em>-ismus</em>, y el género a menudo coincide (<em>la nación, die Nation</em>; <em>el realismo, der Realismus</em>). Pero no se puede copiar sin más: <em>el problema</em> es <em>das Problem</em>, <em>el sistema</em> <em>das System</em>, <em>el documento</em> <em>das Dokument</em>, y el neutro no existe en tu lengua. Y hay falsos amigos: <em>die Firma</em> es la empresa, no la firma (<em>die Unterschrift</em>); <em>der Konkurs</em> es la quiebra, no el concurso."
      },
      {
        trap: "<em>ver-</em> no indica siempre un error: <em>verkaufen</em> es vender, <em>verschreiben</em> sin reflexivo es recetar (<em>ein Medikament verschreiben</em>), y <em>sich einer Sache verschreiben</em> significa entregarse a algo. Y <em>verreißen</em> no es <em>zerreißen</em>: un crítico <em>verreißt</em> un libro, es decir, lo despedaza en su reseña, no lo rompe."
      },
      {
        tip: "Ante un sustantivo abstracto que no conoces, quita prefijos y sufijos y busca la base: <em>Unzuverlässigkeit</em> → <em>un-</em> + <em>zuverlässig</em> + <em>-keit</em>, «falta de fiabilidad»."
      }
    ],
    grammar: {
      title: "Derivación: sufijos, prefijos, Fremdwörter",
      note: "<b>-ung, -heit, -keit, -schaft, -ion, -ität</b>: femeninos. <b>-ismus</b>: masculino. <b>-ment</b>: casi siempre neutro. <b>ver-, zer-, ent-, miss-</b>: prefijos inseparables, participio sin <i>ge-</i>.",
      table: {
        head: ["base", "derivado", "significado"],
        rows: [
          ["verbessern", "die Verbesserung", "la mejora"],
          ["gelassen", "die Gelassenheit", "la calma, la serenidad"],
          ["nachhaltig", "die Nachhaltigkeit", "la sostenibilidad"],
          ["reißen", "zerreißen", "romper en pedazos"],
          ["verstehen", "missverstehen", "malinterpretar"],
          ["digitalisieren", "die Digitalisierung", "la digitalización"]
        ]
      },
      examples: [
        { tr: "La mejora de las condiciones de trabajo debería haber llegado hace tiempo.", note: "verbessern + -ung: sustantivo femenino a partir de un verbo" },
        { tr: "Admiro su calma en las situaciones difíciles.", note: "gelassen + -heit" },
        { tr: "Los expertos ponen en duda la sostenibilidad del proyecto.", note: "nachhaltig + -keit: -keit tras -ig" },
        { tr: "Me he equivocado al escribir la fecha.", note: "sich verschreiben: ver- indica un error" },
        { tr: "Durante la discusión rompió la carta en pedacitos.", note: "zer-: ruptura en pedazos; participio zerrissen, sin ge-" },
        { tr: "La digitalización de la administración pública avanza solo lentamente.", note: "digitalisieren + -ung: patrón frecuente de los verbos en -ieren" }
      ]
    },
    vocab: [
      "la derivación, la palabra derivada",
      "el sufijo",
      "el prefijo",
      "el extranjerismo, la palabra extranjera",
      "la calma, la serenidad",
      "la sostenibilidad",
      "la fiabilidad",
      "la digitalización",
      "romper (en pedazos), rasgar",
      "equivocarse al escribir",
      "malinterpretar, entender mal",
      "devaluar; validar (un billete)"
    ],
    exercises: [
      {
        q: "¿Qué sustantivo deriva correctamente de «dankbar»?",
        opts: [
          "die Dankbarkeit",
          "die Dankbarheit",
          "die Dankbarung"
        ],
        why: "Tras <i>-bar</i> el sufijo es <b>-keit</b>: <i>Dankbarkeit</i>, como <i>Verfügbarkeit</i>. <i>-ung</i> forma sustantivos a partir de verbos, no de adjetivos."
      },
      {
        q: "¿Qué género tiene «Realismus»?",
        opts: [
          "der",
          "die",
          "das"
        ],
        why: "Los sustantivos en <b>-ismus</b> son masculinos: <i>der Realismus, der Optimismus</i>. El plural, cuando existe, termina en <i>-ismen</i>."
      },
      {
        q: "En un formulario: «Entschuldigung, ich habe mich beim Datum verschrieben.» ¿Qué ha pasado?",
        opts: [
          "me he equivocado al escribir la fecha",
          "me he inscrito para esa fecha",
          "he recetado la fecha"
        ],
        why: "<b>sich verschreiben</b>: aquí <i>ver-</i> indica un error, como en <i>sich verrechnen</i> y <i>sich verlaufen</i>. Sin reflexivo, <i>verschreiben</i> significa «recetar» (un medicamento); <i>sich einer Sache verschreiben</i> significa «entregarse a algo»."
      },
      {
        q: "Completa: «Seine ___ ist legendär: Er hat noch nie eine Frist versäumt.»",
        hint: "sustantivo de zuverlässig",
        why: "<b>Zuverlässigkeit</b>: tras <i>-ig</i> el sufijo es <i>-keit</i>; el sustantivo es femenino y se escribe con mayúscula."
      },
      {
        q: "Completa con dos sustantivos derivados: en el primer hueco de «digitalisieren», en el segundo de «wirksam».",
        tr: "La digitalización de la administración debería acelerar los trámites, pero los expertos no se ponen de acuerdo sobre su eficacia.",
        why: "<b>Digitalisierung</b>: de muchos verbos en <i>-ieren</i> se forma un sustantivo en <i>-ierung</i>. <b>Wirksamkeit</b>: tras <i>-sam</i> el sufijo es <i>-keit</i>."
      },
      {
        q: "Relaciona cada verbo con su significado.",
        pairs: [
          "romper en pedazos",
          "perderse, equivocarse de camino",
          "malinterpretar",
          "devaluar"
        ]
      },
      {
        q: "¿Cuáles de estos sustantivos son femeninos?",
        opts: [
          "Nation",
          "Qualität",
          "Dokument",
          "Optimismus"
        ],
        why: "<i>die Nation</i> y <i>die Qualität</i>: <b>-ion</b> e <b>-ität</b> dan femenino. <i>das Dokument</i> es neutro, <i>der Optimismus</i> masculino."
      },
      {
        q: "Traduce: «La sostenibilidad del proyecto fue puesta en duda.» (die Nachhaltigkeit, in Zweifel ziehen)",
        why: "<i>Die Nachhaltigkeit des Projekts wurde in Zweifel gezogen</i> (o <i>ist ... in Zweifel gezogen worden</i>). Se aceptan también el verbo simple <i>bezweifeln</i> y el genitivo <i>Projektes</i>."
      },
      {
        tr: "La digitalización no solo cambia el mundo laboral, sino también la lengua. Muchas palabras extranjeras procedentes del inglés ya se usan con total naturalidad.",
        why: "En <i>Digitalisierung</i> el acento recae en <b>sie</b>; en <i>Fremdwörter</i> el acento recae en <b>Fremd</b>; en <i>Englischen</i> el acento recae en <b>Eng</b> y <b>ng</b> se pronuncia [ŋ]."
      },
      {
        tr: "Su calma me impresionó.",
        why: "En <i>Gelassenheit</i> el acento recae en <b>las</b>; en <i>beeindruckt</i> las dos vocales se pronuncian por separado, be-<b>ein</b>-druckt, con el acento en <b>ein</b>."
      }
    ]
  },
  "lesson:c2-u02-test": {
    theme: "Comprobación",
    title: "Test: Plurales y formación de palabras",
    objectives: [
      "comprobar los plurales dobles y sustitutivos, los compuestos y la derivación"
    ],
    theory: [
      {
        p: "Diez preguntas sobre toda la unidad. Se aprueba con el 70%. No vuelvas a mirar las lecciones mientras respondes: si no recuerdas algo, es mejor volver atrás y repasar."
      }
    ],
    exercises: [
      {
        q: "Completa: «In der Innenstadt gibt es zu wenige ___ für ältere Menschen.» (bancos para sentarse)",
        hint: "plural de die Bank en el sentido de «banco para sentarse»",
        why: "<b>Bänke</b> (o <b>Sitzbänke</b>): los bancos para sentarse llevan diéresis; <i>Banken</i> son las entidades de crédito."
      },
      {
        q: "Completa: «Die ___ zwischen Vermieter und Mieter landeten schließlich vor Gericht.» (las disputas)",
        hint: "plural habitual de der Streit",
        why: "<b>Streitigkeiten</b>: el plural habitual de <i>Streit</i> es <i>Streitigkeiten</i>; se acepta también <i>Streite</i>, correcto pero raro."
      },
      {
        q: "Completa: «Das ___ hat die Schließung des Restaurants angeordnet.»",
        hint: "die Gesundheit + das Amt",
        why: "<b>Gesundheitsamt</b>: <i>-s-</i> tras <i>-heit</i>; neutro como <i>das Amt</i>."
      },
      {
        q: "Completa: «Mit großer ___ steuerte die Pilotin die Maschine durch den Sturm.»",
        hint: "sustantivo de besonnen (sensato, prudente)",
        why: "<b>Besonnenheit</b>: <i>besonnen</i> + <i>-heit</i>, femenino."
      },
      {
        q: "¿En qué oración se usa correctamente «Worte»?",
        opts: [
          "Ihre Worte haben mich tief berührt.",
          "Das Wörterbuch enthält 50 000 Worte.",
          "Er kennt schon viele Worte auf Englisch."
        ],
        why: "Las palabras de un discurso, las que conmueven o convencen, son <b>Worte</b>. Para las palabras como unidades del léxico, en el diccionario o en el vocabulario de una lengua, hace falta <i>Wörter</i>."
      },
      {
        q: "¿Qué género tiene «Bahnhofsvorplatz» (la explanada de la estación)?",
        opts: [
          "der",
          "die",
          "das"
        ],
        why: "Decide el último elemento: <b>der</b> Platz. La <i>-s-</i> tras <i>Bahnhof</i> es un elemento de enlace."
      },
      {
        q: "Un crítico ha juzgado muy mal una novela. ¿Qué frase usa el periódico?",
        opts: [
          "Der Kritiker hat den Roman verrissen.",
          "Der Kritiker hat den Roman zerbrochen.",
          "Der Kritiker hat den Roman entrissen."
        ],
        why: "<b>verreißen</b> significa «destrozar con la crítica». <i>zerbrechen</i> es romper un objeto frágil; <i>entreißen</i> es arrebatar algo a alguien de las manos, y lleva el dativo de la persona."
      },
      {
        q: "Relaciona cada plural con su significado.",
        pairs: [
          "las cintas, los ligamentos",
          "los tomos (de una obra)",
          "los bancos (entidades)",
          "los bancos (asientos)"
        ]
      },
      {
        tr: "En pocas palabras, la lingüista explicó la diferencia entre Wörter y Worte. Los estudiantes la escucharon con gran atención.",
        why: "En <i>Sprachwissenschaftlerin</i> el acento recae en <b>Sprach</b>; en <i>Wörtern</i> la <b>ö</b> es breve, [œ]; en <i>Aufmerksamkeit</i> el acento recae en <b>Auf</b>."
      },
      {
        tr: "La autoridad sanitaria ordenó el cierre.",
        why: "En <i>Gesundheitsamt</i> el acento recae en <b>sund</b>; en <i>Schließung</i> <b>ie</b> es larga y <b>ß</b> se pronuncia [s]; en <i>angeordnet</i> el acento recae en <b>an</b>."
      }
    ]
  }
});
