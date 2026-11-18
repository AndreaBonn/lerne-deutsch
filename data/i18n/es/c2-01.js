/* ============================================================
   Learner-language text (es) for data/core/c2-01.js, unit c2-u01.
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
        contrast: "En español el participio va detrás del sustantivo y la frase crece hacia la derecha: <em>la reforma reclamada desde hace años por los expertos</em>. El alemán pone todo el atributo a la izquierda, entre el artículo y el sustantivo. Los complementos pueden conservar el orden español (<em>seit Jahren von Fachleuten</em>, «desde hace años por los expertos»); lo que cambia de sitio es el participio, que pasa al final, justo antes del sustantivo. El participio de presente español en <em>-ante, -ente</em> es raro y casi siempre está lexicalizado (<em>vigente, creciente</em>); donde el alemán usa un participio I, el español recurre a una relativa con <em>que</em> o a un gerundio, que como adjetivo no se admite (<em>una caja conteniendo libros</em> es incorrecto). El alemán forma el participio I de casi cualquier verbo y lo usa libremente como atributo: <em>die dem Gericht vorliegenden Gutachten</em>, «los peritajes de que dispone el tribunal»."
      },
      {
        trap: "El participio de una pasiva en Perfekt no lleva <em>worden</em>: <em>die Daten, die erhoben worden sind</em> se convierte en <em>die erhobenen Daten</em>, nunca en <em>die erhoben wordenen Daten</em>. Y no confundas los dos participios: <em>die steigenden Kosten</em> siguen subiendo, <em>die gestiegenen Kosten</em> ya han subido."
      },
      {
        tip: "Para traducir al español, deshaz el atributo en una oración de relativo o en un participio pospuesto. Para escribir en alemán, parte de la relativa: quita el pronombre relativo, convierte el verbo en participio, declínalo y colócalo justo antes del sustantivo."
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
        contrast: "El español tiene un equivalente cercano en <em>por</em> + infinitivo: <em>la tarea por resolver, las cuestiones pendientes por aclarar</em>; también se oye <em>a</em> + infinitivo (<em>los documentos a presentar</em>), que la norma culta desaconseja y prefiere sustituir por <em>que hay que presentar</em>. La diferencia está en la posición y en la forma: en español todo va detrás del sustantivo y el infinitivo no cambia; en alemán todo va delante del sustantivo y el verbo se convierte en un participio de presente con la terminación del adjetivo: <em>die zu lösende Aufgabe</em>, <em>bei der zu lösenden Aufgabe</em>."
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
      "objetar, reparar (un defecto)",
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
        tr: "Las solicitudes que la autoridad debe examinar obran en su poder desde hace semanas.",
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
        p: "Muchos Funktionsverbgefüge existen en pareja. <strong>zur Anwendung kommen</strong> tiene sentido pasivo (<em>wird angewendet</em>), <strong>zur Anwendung bringen</strong> sentido activo (<em>anwenden</em>). <strong>Berücksichtigung finden</strong> y <strong>auf Kritik stoßen</strong> sustituyen a una pasiva: <em>Die Einwände fanden Berücksichtigung</em> = <em>wurden berücksichtigt</em>; <em>Der Plan stieß auf Kritik</em> = <em>wurde kritisiert</em>. Otros conviven con un verbo simple casi sinónimo: <em>Rechnung tragen</em> (tener en cuenta, con dativo) equivale por lo general a <em>berücksichtigen</em>, con diferencias solo de contexto y de registro. <em>zur Debatte stehen</em>, en cambio, no tiene un verbo simple equivalente."
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
      "negar, rebatir",
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
        tr: "El procedimiento descrito en el estudio hasta ahora se aplica solo en raras ocasiones. Los autores no ponen en duda su eficacia, pero plantean la cuestión de sus elevados costes.",
        why: "En <i>Studie</i> la <b>st</b> inicial se pronuncia [ʃt]; en <i>Autoren</i> el acento recae en <b>to</b>; en <i>Sprache</i> <b>sp</b> se pronuncia [ʃp]."
      },
      {
        tr: "La ministra negó toda responsabilidad.",
        why: "En <i>Ministerin</i> el acento recae en <b>te</b>; en <i>Verantwortung</i> el acento recae en <b>ant</b>; en <i>Abrede</i> el acento recae en <b>Ab</b> y la <b>b</b> se pronuncia [p]."
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
  }
});
