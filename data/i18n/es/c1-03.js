/* ============================================================
   Learner-language text (es) for data/core/c1-03.js, unit c1-u05.
   Keys point at ids in the neutral layer; arrays merge by index,
   so their length has to match core.
   Checked by scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("es", {
  "unit:c1-u05": {
    title: "Tras concluir el trabajo",
    grammarNote: "Participio I y II como atributo (atributo ampliado con moderación; el tipo completo y el Gerundivum son del C2) · nominalización en lugar de la subordinada (nach Abschluss, wegen, bei, trotz, zur, infolge) · casos en que suele convenir mantener la subordinada (ningún sustantivo adecuado, varios sujetos, matiz modal, legibilidad)"
  },
  "lesson:c1-u05-l1": {
    theme: "Actas, informes y textos académicos",
    title: "Partizip I y II como atributo",
    objectives: [
      "usar el participio I (activo, simultáneo) y el participio II (pasivo o terminado) delante de un sustantivo",
      "elegir la terminación correcta después del artículo",
      "construir un atributo ampliado breve (im Protokoll festgehaltenen Beschlüsse)",
      "reconocer cuándo un atributo demasiado largo hay que desharlo en una oración de relativo"
    ],
    theory: [
      {
        h: "El participio delante del sustantivo",
        p: "En los textos formales una oración de relativo se puede comprimir en un participio colocado delante del sustantivo, que toma la terminación de un adjetivo. El <strong>participio I</strong> (infinitivo + <em>-d</em>; excepción: <em>sein</em> → <em>seiend</em>) es activo y simultáneo: <em>die steigenden Kosten</em> = <em>die Kosten, die steigen</em>. El <strong>participio II</strong> de un verbo transitivo es pasivo y suele presentar la acción como completada, aunque el valor temporal depende del verbo y del contexto (<em>die gerade bearbeiteten Anträge</em> puede describir una tramitación en curso): <em>die geprüften Unterlagen</em> = <em>die Unterlagen, die geprüft wurden</em>. En cambio, el participio II de un verbo intransitivo (con <em>sein</em>) es activo y terminado: <em>die gestiegenen Kosten</em> = <em>die Kosten, die gestiegen sind</em>."
      },
      {
        h: "El atributo ampliado, con moderación",
        p: "Entre el artículo y el sustantivo también pueden ir complementos, y en el modelo que ilustramos el participio queda <strong>justo antes del sustantivo</strong>: <em>die im letzten Quartal erzielten Umsätze</em>. No es un vínculo absoluto: pueden seguirle otros atributos (<em>die geprüften und freigegebenen Unterlagen</em>). En las actas y los informes basta uno o dos complementos; más allá, el lector pierde el hilo y lo mejor es la oración de relativo. El tipo con <em>zu</em> (<em>die zu prüfenden Unterlagen</em>) y las construcciones más largas pertenecen al C2."
      },
      {
        contrast: "El español pone el participio <strong>detrás</strong> del sustantivo y el complemento lo sigue: <em>los resultados obtenidos en el segundo trimestre</em>, <em>los datos recogidos por la oficina</em>. En alemán todo lo que en español iría detrás del participio pasa <strong>delante</strong> del sustantivo, entre el artículo y el participio: <em>die vom Amt erhobenen Daten</em>. El participio de presente español casi no existe como forma viva (existen <em>creciente</em>, <em>vigente</em>, <em>siguiente</em>, pero en general se usa una relativa: <em>los costes que aumentan</em>), mientras que <em>steigend, laufend, vorliegend</em> son corrientes en la lengua escrita alemana."
      },
      {
        trap: "<em>die prüfenden Unterlagen</em> no son «los documentos examinados»: son documentos que <em>examinan</em> algo. Para el sentido pasivo hace falta el participio II, <em>die geprüften Unterlagen</em>. Y no confundas los dos tiempos: <em>die steigenden Kosten</em> siguen aumentando, <em>die gestiegenen Kosten</em> ya han aumentado. Después, la terminación: tras <em>die</em> en plural es <em>-en</em>, así que <em>die geprüften Unterlagen</em>, nunca <em>die geprüfte Unterlagen</em> (en español el participio concuerda con el sustantivo en género y número, <em>los documentos revisados</em>; en alemán la concordancia está en la terminación de caso)."
      },
      {
        tip: "Para entender un participio, o para elegirlo, deshazlo en una oración de relativo: si el verbo de la relativa está en presente activo (<em>die steigen</em>) hace falta el participio I; si es una pasiva, también en presente (<em>die gerade bearbeitet werden</em> → <em>die gerade bearbeiteten Anträge</em>), o una pasiva de pasado (<em>die geprüft wurden</em>), o un perfecto con <em>sein</em> (<em>die gestiegen sind</em>), hace falta el participio II. Cuenta también la diátesis, no solo el tiempo."
      }
    ],
    grammar: {
      title: "Participio I y II como atributo",
      note: "<b>Participio I</b> = infinitivo + <i>-d</i> (excepción: <i>sein</i> → <i>seiend</i>): activo, simultáneo. <b>Participio II</b>: pasivo (verbos transitivos; suele indicar acción completada, pero el valor temporal depende del verbo y del contexto), activo y terminado (intransitivos con <i>sein</i>). Delante del sustantivo, con la terminación del adjetivo; los complementos van entre el artículo y el participio.",
      table: {
        head: ["participio", "sentido", "relativa correspondiente", "ejemplo"],
        rows: [
          ["participio I", "activo, simultáneo", "die Kosten, die steigen", "die steigenden Kosten"],
          ["participio II (transitivo)", "pasivo, por lo general completado", "die Unterlagen, die geprüft wurden", "die geprüften Unterlagen"],
          ["participio II (intransitivo)", "activo, terminado", "die Kosten, die gestiegen sind", "die gestiegenen Kosten"],
          ["atributo ampliado", "complemento delante del participio", "die Umsätze, die im Quartal erzielt wurden", "die im Quartal erzielten Umsätze"]
        ]
      },
      examples: [
        { tr: "Los costes energéticos en aumento pesan sobre las familias.", note: "participio I: el aumento está en curso" },
        { tr: "Los costes aumentados se explican en el informe.", note: "participio II de verbo intransitivo: activo y terminado" },
        { tr: "Los documentos verificados se adjuntan al expediente.", note: "participio II transitivo: pasivo, normalmente «han sido verificados»" },
        { tr: "Los miembros que participaban en la sesión aprobaron la solicitud.", note: "participio I con complemento: an der Sitzung teilnehmenden" },
        { tr: "El presupuesto aprobado por el consejo de administración entra en vigor en enero.", note: "vom Vorstand verabschiedete: el complemento agente va antes del participio" },
        { tr: "Los ingresos obtenidos en el último trimestre fueron superiores a lo esperado.", note: "atributo ampliado breve: im letzten Quartal erzielten" }
      ]
    },
    vocab: [
      "el acta",
      "la negociación, las negociaciones",
      "el acuerdo, la decisión (de un órgano)",
      "el documento, la documentación",
      "la facturación, los ingresos",
      "el presupuesto",
      "aprobar (un texto o un presupuesto)",
      "obtener, lograr (un resultado)",
      "hacer constar en acta, dejar por escrito",
      "en curso, actual",
      "presente, en cuestión",
      "pendiente (de pago)"
    ],
    exercises: [
      {
        q: "En un informe trimestral se lee una vez «die steigenden Kosten» y otra «die gestiegenen Kosten». ¿Qué diferencia de sentido hay?",
        opts: [
          "steigenden: el aumento está en curso; gestiegenen: el aumento ya se ha producido",
          "steigenden: el aumento ya se ha producido; gestiegenen: el aumento está en curso",
          "ninguna: son variantes libres con el mismo significado"
        ],
        why: "El participio I (<i>steigend</i>) es activo y <b>simultáneo</b>: los costes están aumentando. El participio II de <i>steigen</i> (<i>gestiegen</i>) es <b>terminado</b>: el aumento ya ha tenido lugar. Por eso no son intercambiables."
      },
      {
        q: "De un acta: «Der vom Gemeinderat ___ Haushaltsplan tritt am 1. Januar in Kraft.» ¿Qué forma completa la frase?",
        opts: [
          "verabschiedete",
          "verabschiedende",
          "verabschiedeten"
        ],
        why: "El presupuesto no aprueba nada, <b>es aprobado</b>: hace falta el participio II (pasivo), es decir, <i>verabschiedete</i>. <i>verabschiedende</i> sería activo, y <i>verabschiedeten</i> tiene la terminación equivocada: después de <i>der</i> en nominativo masculino singular es <b>-e</b>."
      },
      {
        q: "En un informe financiero: «Die ___ Umsätze lagen über den Erwartungen.» ¿Qué atributo ampliado es correcto?",
        opts: [
          "im vierten Quartal erzielten",
          "im vierten Quartal erzielte",
          "erzielten im vierten Quartal"
        ],
        why: "En este modelo el participio va justo delante del sustantivo y tras <i>die</i> en plural toma <b>-en</b>: <i>die im vierten Quartal erzielten Umsätze</i>. <i>erzielte</i> tiene la terminación equivocada; en <i>erzielten im vierten Quartal</i> el complemento va detrás del participio, un orden posible en español pero no en alemán."
      },
      {
        q: "Completa con el participio II de prüfen y la terminación correcta: «Die vom Ausschuss ___ Unterlagen werden archiviert.»",
        hint: "participio II de prüfen, plural después de die",
        why: "<b>geprüften</b>: participio II pasivo («los documentos que han sido verificados»), con <b>-en</b> después de <i>die</i> en plural."
      },
      {
        q: "Completa con el participio I de gelten y la terminación correcta: «Wir bitten um Beachtung der ___ Vorschriften.»",
        hint: "participio I de gelten, genitivo plural después de der",
        why: "<b>geltenden</b>: participio I (activo, simultáneo: «las normas vigentes»), <b>-en</b> en genitivo plural después de <i>der</i>."
      },
      {
        q: "Completa el pasaje de un informe con el participio II de ergreifen (o treffen) y el participio I de steigen.",
        tr: "Las medidas adoptadas el año pasado no han reducido los costes, que siguen en constante aumento.",
        why: "<i>ergriffenen</i> (o <i>getroffenen</i>): participio II pasivo, «las medidas que han sido adoptadas». <i>steigenden</i>: participio I, porque el aumento sigue en curso. Los dos toman <b>-en</b> después de <i>die</i> en plural."
      },
      {
        q: "¿Qué frases usan correctamente un participio como atributo? (dos respuestas)",
        opts: [
          "Die an der Sitzung teilnehmenden Mitglieder stimmten dem Antrag zu.",
          "Die am Dienstag eingereichten Unterlagen sind vollständig.",
          "Die einreichenden Unterlagen sind vollständig.",
          "Die eingereichte Unterlagen sind vollständig."
        ],
        why: "Las dos primeras son correctas: participio I activo (los miembros <i>que participaban</i>) y participio II pasivo (los documentos <i>que han sido presentados</i>). <i>einreichenden</i> daría a los documentos un papel activo, y en <i>eingereichte</i> falta la <b>-n</b> después de <i>die</i> en plural."
      },
      {
        q: "Ordena las palabras de la frase de un acta.",
        tr: "Las decisiones hechas constar en acta son vinculantes para todos los departamentos.",
        why: "<i>Die im Protokoll festgehaltenen Beschlüsse sind für alle Abteilungen verbindlich.</i> El atributo <i>im Protokoll festgehaltenen</i> queda compacto entre <i>die</i> y <i>Beschlüsse</i>. También son posibles <i>verbindlich für alle Abteilungen</i> y la inversión con <i>Für alle Abteilungen</i> al principio."
      },
      {
        q: "Traduce usando un atributo ampliado: «Los resultados obtenidos en el segundo trimestre se discutieron en la reunión.» (das Quartal, das Ergebnis, erzielen, die Sitzung, besprechen)",
        why: "<i>Die im zweiten Quartal erzielten Ergebnisse wurden in der Sitzung besprochen.</i> También se aceptan el Perfekt pasivo (<i>sind ... besprochen worden</i>) y la inversión con <i>In der Sitzung</i> al principio. El complemento <i>im zweiten Quartal</i> va delante del participio."
      },
      {
        tr: "Las decisiones hechas constar en acta valen desde ahora. Las negociaciones en curso se concluirán en otoño y los costes aumentados siguen pesando sobre el presupuesto.",
        why: "En <i>Protokoll</i> el acento cae en <b>koll</b>; en <i>Verhandlungen</i> el acento cae en <b>hand</b>; en <i>abgeschlossen</i> el acento cae en <b>schlos</b>; en <i>Haushalt</i> el acento cae en <b>Haus</b>."
      },
      {
        tr: "Los ingresos obtenidos en el último trimestre fueron superiores a lo esperado.",
        why: "En <i>Quartal</i> el acento cae en <b>tal</b>; en <i>Umsätze</i> el acento cae en <b>Um</b>; en <i>Erwartungen</i> el acento cae en <b>war</b>."
      }
    ]
  },
  "lesson:c1-u05-l2": {
    theme: "Comunicados, avisos e informes",
    title: "Nominalización en lugar de la subordinada",
    objectives: [
      "transformar una subordinada en un grupo nominal con la preposición adecuada",
      "elegir entre nach, wegen, bei, trotz, zu, infolge según la relación lógica",
      "usar el genitivo y las terminaciones después de estas preposiciones",
      "reconocer la subordinada escondida en un grupo nominal"
    ],
    theory: [
      {
        h: "De la subordinada al sustantivo",
        p: "En los textos formales una subordinada se puede comprimir: el verbo se convierte en sustantivo (<em>abschließen</em> → <em>der Abschluss</em>), la conjunción se convierte en preposición, y el sujeto o el objeto del verbo pueden pasar a un genitivo, según el sustantivo y el contexto (a veces hace falta un complemento preposicional: <em>der Bedarf an Fachkräften</em>). <em>Nachdem die Prüfung abgeschlossen ist, ...</em> → <em>Nach Abschluss der Prüfung ...</em>. La preposición depende de la <strong>relación lógica</strong>: causa (<em>weil</em> → <em>wegen, aufgrund, infolge</em> + genitivo), concesión (<em>obwohl</em> → <em>trotz, ungeachtet</em> + genitivo), condición (<em>wenn</em> → <em>bei</em> + dativo), tiempo (<em>nachdem</em> → <em>nach</em> + dativo), finalidad (<em>um ... zu</em> → <em>zu</em> + dativo)."
      },
      {
        h: "Qué se pierde",
        p: "El grupo nominal es compacto pero más pobre: desaparecen el tiempo verbal, el modo y a menudo quién actúa. <em>Nach Abschluss der Prüfung</em> no dice quién ha concluido ni si se habla del pasado o del futuro; lo deduces del contexto. Por eso funciona bien cuando el sujeto y el tiempo son obvios, y mal cuando no lo son (véase la lección 3)."
      },
      {
        contrast: "El español también nominaliza (<em>tras la conclusión de los trabajos</em>, <em>en caso de necesidad</em>, <em>para la aclaración de cuestiones pendientes</em>), pero puede usar además construcciones de infinitivo (<em>tras concluir</em>, <em>al concluir</em>) o el gerundio (<em>concluyendo los trabajos</em>). El alemán tiene también equivalentes compactos, aunque no idénticos: <em>nach Abschluss</em>, <em>beim Abschließen</em> (infinitivo nominalizado) y el participio de presente en función de atributo. Además, el español une el sustantivo con su complemento mediante <em>de</em> (<em>la aclaración de cuestiones pendientes</em>), mientras que en alemán lo que sigue al sustantivo suele ser un <strong>genitivo sin preposición</strong> (<em>die Klärung offener Fragen</em>), aunque no siempre: hay regencias con preposición (<em>der Bedarf an Fachkräften</em>). Las preposiciones de causa y concesión rigen el genitivo, con las terminaciones que de ello se derivan: <em>offener Fragen</em> sin artículo, <em>der gestiegenen Preise</em> con artículo. También cambia la regencia: donde el español dice <em>a pesar de</em>, <em>a causa de</em> o <em>a raíz de</em> sin más, el alemán exige elegir entre genitivo y dativo."
      },
      {
        trap: "Una preposición equivocada cambia la relación lógica: <em>Nach mehrfacher Mahnung blieb die Zahlung aus</em> dice que el pago falta <em>después de</em> los recordatorios, mientras que <em>Trotz mehrfacher Mahnung</em> dice que falta <em>a pesar de</em> los recordatorios. Cuidado también con los casos: <em>infolge</em> y <em>trotz</em> piden el genitivo (<em>Infolge der gestiegenen Preise</em>), no el dativo."
      },
      {
        tip: "Ante un grupo nominal pregúntate qué conjunción se esconde: causa → <em>weil</em>, concesión → <em>obwohl</em>, condición → <em>wenn</em>, tiempo → <em>nachdem, bevor</em>, finalidad → <em>um ... zu</em>. Después reescríbelo como subordinada y comprueba que el sentido no cambie."
      }
    ],
    grammar: {
      title: "Nominalización en lugar de la subordinada",
      note: "El verbo se convierte en sustantivo, la conjunción en preposición: <b>nach, bei, zu</b> + dativo; <b>wegen, aufgrund, infolge, trotz</b> + genitivo. El sujeto o el objeto del verbo pueden pasar a un genitivo, pero depende del sustantivo y del contexto (a veces hace falta una preposición, como en <i>der Bedarf an Fachkräften</i>) y la relación puede resultar ambigua.",
      table: {
        head: ["subordinada", "grupo nominal", "ejemplo"],
        rows: [
          ["weil ... (causa)", "wegen, aufgrund, infolge + genitivo", "Wegen der Verzögerung ..."],
          ["obwohl ... (concesión)", "trotz, ungeachtet + genitivo", "Trotz mehrfacher Mahnung ..."],
          ["wenn ... (condición)", "bei + dativo", "Bei Bedarf ..."],
          ["nachdem ... (tiempo)", "nach + dativo", "Nach Abschluss der Prüfung ..."],
          ["um ... zu (finalidad)", "zu + dativo", "Zur Klärung offener Fragen ..."]
        ]
      },
      examples: [
        { tr: "Tras la conclusión de la verificación se publicará el informe.", note: "nach + dativo = nachdem; der Prüfung es el genitivo que depende de Abschluss" },
        { tr: "A causa del retraso en la entrega hubo que aplazar la fecha.", note: "wegen + genitivo = weil" },
        { tr: "En caso necesario se pueden solicitar más documentos.", note: "bei + dativo = wenn man es braucht" },
        { tr: "A pesar de los reiterados recordatorios, el pago no ha llegado.", note: "trotz + genitivo; mehrfacher: genitivo femenino sin artículo" },
        { tr: "Para aclarar las cuestiones pendientes se convoca una reunión.", note: "zu + dativo = um ... zu klären; offener Fragen: genitivo plural sin artículo" },
        { tr: "A raíz del aumento de los precios de la energía, la demanda ha caído.", note: "infolge + genitivo: causa que produce un efecto" }
      ]
    },
    vocab: [
      "la conclusión, el final",
      "el retraso",
      "la necesidad, lo que hace falta",
      "el recordatorio, la reclamación",
      "la aclaración",
      "la demanda (de mercado)",
      "solicitar, reclamar (documentos)",
      "convocar",
      "faltar, no llegar",
      "publicar",
      "a raíz de, como consecuencia de",
      "a causa de, en virtud de"
    ],
    exercises: [
      {
        q: "En una carta: «Obwohl mehrfach gemahnt wurde, blieb die Zahlung aus.» ¿Qué versión nominal tiene el mismo sentido?",
        opts: [
          "Trotz mehrfacher Mahnung blieb die Zahlung aus.",
          "Nach mehrfacher Mahnung blieb die Zahlung aus.",
          "Wegen mehrfacher Mahnung blieb die Zahlung aus."
        ],
        why: "<i>obwohl</i> es concesivo: <b>trotz</b> + genitivo. <i>nach</i> sería una relación temporal («después de los recordatorios») y <i>wegen</i> haría de los recordatorios la causa de que no se pague."
      },
      {
        q: "En un comunicado de prensa. ¿Qué frase es correcta?",
        opts: [
          "Infolge der gestiegenen Energiepreise sank die Nachfrage.",
          "Infolge den gestiegenen Energiepreisen sank die Nachfrage.",
          "Infolge die gestiegenen Energiepreise sank die Nachfrage."
        ],
        why: "<i>infolge</i> rige el <b>genitivo</b>: <i>der gestiegenen Energiepreise</i>, plural con artículo y terminación <b>-en</b>. El dativo y el acusativo no se admiten."
      },
      {
        q: "¿Qué subordinada corresponde a «Bei Bedarf können weitere Unterlagen angefordert werden»?",
        opts: [
          "Wenn weitere Unterlagen benötigt werden, können sie angefordert werden.",
          "Weil weitere Unterlagen benötigt wurden, können sie angefordert werden.",
          "Obwohl weitere Unterlagen benötigt werden, können sie angefordert werden."
        ],
        why: "<i>bei Bedarf</i> expresa una <b>condición</b>: «si hace falta». Corresponde a <i>wenn</i> (o <i>falls</i>). <i>weil</i> y <i>obwohl</i> darían una causa o una concesión."
      },
      {
        q: "Completa con la preposición concesiva: «___ mehrfacher Erinnerung ist die Zahlung nicht eingegangen.»",
        hint: "preposición concesiva: «a pesar de»",
        why: "<b>Trotz</b> (o la variante más formal <b>Ungeachtet</b>) + genitivo: <i>mehrfacher Erinnerung</i>."
      },
      {
        q: "Completa con la terminación del adjetivo: «Zur Klärung ___ Fragen wird eine Sitzung einberufen.»",
        hint: "adjetivo «offen» en genitivo plural, sin artículo",
        why: "<b>offener</b>: después de <i>zu</i> va el dativo (<i>zur Klärung</i>), pero <i>Fragen</i> depende de <i>Klärung</i> y es un genitivo plural sin artículo, así que el adjetivo toma <b>-er</b>."
      },
      {
        q: "Completa el comunicado con las dos preposiciones.",
        tr: "A causa del retraso en la entrega hubo que aplazar la fecha. En caso necesario se acordará una nueva fecha.",
        why: "<i>Wegen</i> (o <i>Aufgrund</i>, <i>Infolge</i>) + genitivo para la causa. <i>Bei Bedarf</i> para la condición; <i>Nach Bedarf</i> significaría «según necesidad», que es otro sentido y aquí no se acepta."
      },
      {
        q: "Relaciona cada expresión con su significado.",
        pairs: [
          "a raíz de, como consecuencia de",
          "a pesar de",
          "en caso necesario",
          "ante, a la vista de"
        ]
      },
      {
        q: "Ordena las palabras de la invitación.",
        tr: "Para aclarar las cuestiones pendientes se convoca una reunión.",
        why: "<i>Zur Klärung offener Fragen wird eine Sitzung einberufen.</i> El grupo nominal con <i>zur</i> abre la frase y el verbo conjugado va en segunda posición. También vale <i>Eine Sitzung wird zur Klärung offener Fragen einberufen</i>."
      },
      {
        q: "Traduce en estilo nominal: «En caso necesario se pueden solicitar más documentos.» (der Bedarf, die Unterlagen, anfordern)",
        why: "<i>Bei Bedarf können weitere Unterlagen angefordert werden.</i> Se aceptan la posición de <i>bei Bedarf</i> después del sujeto y la forma con <i>man</i>."
      },
      {
        tr: "Tras la conclusión de la verificación se publicará el informe. En caso necesario se pueden solicitar más documentos. Para aclarar las cuestiones pendientes, la dirección del proyecto está gustosamente a su disposición.",
        why: "En <i>Abschluss</i> el acento cae en <b>Ab</b>; en <i>veröffentlicht</i> el acento cae en <b>öf</b>; en <i>Klärung</i> el acento cae en <b>Klä</b>."
      },
      {
        tr: "A pesar de los reiterados recordatorios, el pago no ha llegado.",
        why: "En <i>mehrfacher</i> el acento cae en <b>mehr</b>; en <i>Erinnerung</i> el acento cae en <b>in</b>; en <i>eingegangen</i> el acento cae en <b>ein</b>."
      }
    ]
  },
  "lesson:c1-u05-l3": {
    theme: "Legibilidad y precisión",
    title: "Cuando la subordinada se queda",
    objectives: [
      "reconocer los casos en que la nominalización no conviene",
      "mantener la subordinada cuando hay varios sujetos o varias condiciones",
      "expresar con la subordinada los matices modales (sollte, falls ... sollten)",
      "elegir entre forma compacta y subordinada pensando en el lector"
    ],
    theory: [
      {
        h: "Los cuatro casos en que la subordinada se queda",
        p: "La forma compacta no siempre es la mejor. La subordinada es preferible cuando: (1) <strong>no hay un sustantivo adecuado</strong> o el sustantivo suena poco natural; (2) hay <strong>varios sujetos</strong> o varios predicados, y el grupo nominal ocultaría quién hace qué: <em>weil der Vorsitzende erkrankt war und die Referentin im Ausland festsaß</em>; (3) hace falta un <strong>matiz modal</strong> o de probabilidad (<em>sollte, könnte, offenbar</em>), que un sustantivo expresa con dificultad; una condición necesaria como <em>nur dann ..., wenn</em>, en cambio, suele tener también una forma nominal (<em>nur bei repräsentativer Stichprobe</em>); (4) la <strong>legibilidad</strong> sufre, por ejemplo con varios genitivos y complementos seguidos."
      },
      {
        h: "Cómo elegir",
        p: "Antes de nominalizar hazte cuatro preguntas. ¿Quién actúa, y lo dice el sustantivo? ¿Existe un sustantivo natural (<em>Abschluss, Klärung</em>)? ¿Puedo prescindir del tiempo y del modo? ¿El lector lo entiende a la primera lectura? Si respondes que sí a todas, la forma compacta funciona (<em>Nach Abschluss der Prüfung ...</em>); si no, la subordinada es más clara, y en los textos dirigidos a un público no especialista casi siempre lo es."
      },
      {
        contrast: "El español dispone de recursos compactos como <em>tras concluir</em> o <em>concluidos los trabajos</em>; el alemán tiene otros, no idénticos: <em>nach Abschluss der Arbeiten</em>, <em>ohne dass</em>, y no cuenta con el gerundio. Con <em>um ... zu</em> y <em>ohne ... zu</em> el sujeto implícito de la infinitiva depende de la construcción (normalmente coincide con el de la principal); cuando los sujetos son distintos suele hacer falta una subordinada con <em>dass</em>, <em>damit</em> o <em>weil</em>. El español, además, tiene el subjuntivo para marcar la eventualidad (<em>si la verificación se prolongara</em>); <em>en caso de que cambien las condiciones</em> es ya una subordinada, no una forma compacta. En alemán la eventualidad se expresa con <em>sollte</em> o <em>falls ... sollten</em>: <em>Sollte die Prüfung länger dauern, ...</em>, <em>falls sich die Bedingungen ändern sollten</em>."
      },
      {
        trap: "No nominalices todo solo porque «suena formal»: el resultado es un alemán de oficina difícil de leer, y una construcción como <em>seitens der Teilnehmenden</em> (<em>seitens</em> es una preposición) explicita a los participantes, pero recarga la frase y cuesta legibilidad. Y <em>sollte</em> en primera posición no es el «debería» de obligación: <em>Sollte die Prüfung länger dauern</em> significa «si la verificación llegara a prolongarse», una condición hipotética, presentada con cautela (el español no lo traduce con <em>debería</em>, sino con el subjuntivo o con <em>en caso de que</em>)."
      },
      {
        tip: "Lee la frase en voz alta. Si en medio de un grupo nominal tienes que tomar aire, porque hay dos genitivos y un <em>durch</em>, pártela en una subordinada."
      }
    ],
    grammar: {
      title: "Forma compacta o subordinada",
      note: "Forma compacta: mismo sujeto, sustantivo natural, tiempo obvio. Subordinada: varios sujetos, ningún sustantivo adecuado, matiz modal, genitivos seguidos. Para la eventualidad: <i>Sollte ..., falls ... sollten</i>.",
      table: {
        head: ["situación", "elección", "ejemplo"],
        rows: [
          ["mismo sujeto, sustantivo natural", "forma compacta", "Nach Abschluss der Prüfung ..."],
          ["dos sujetos o varios predicados", "subordinada", "..., weil der Vorsitzende erkrankt war und die Referentin festsaß."],
          ["matiz modal o de probabilidad", "subordinada con sollte", "Sollte die Prüfung länger dauern, ..."],
          ["varias condiciones a la vez", "subordinada", "..., wenn der Vorstand zugestimmt hat und die Finanzierung gesichert ist."],
          ["genitivos y complementos seguidos", "subordinada", "..., nachdem die Teilnehmenden den Fragebogen ausgefüllt hatten."]
        ]
      },
      examples: [
        { tr: "La sesión se aplazó porque el presidente estaba enfermo y la ponente estaba bloqueada en el extranjero.", note: "dos sujetos: la forma nominal ocultaría uno de los dos" },
        { tr: "El contrato se firmará solo cuando el consejo haya dado su aprobación y la financiación esté asegurada.", note: "dos condiciones con verbos distintos: subordinada" },
        { tr: "Si la verificación llegara a prolongarse, se aplazará la fecha.", note: "Sollte en primera posición: eventualidad hipotética, presentada con cautela" },
        { tr: "La subvención deja de concederse si las condiciones marco llegaran a cambiar.", note: "falls ... ändern sollten: matiz modal" },
        { tr: "Los resultados son significativos solo si la muestra es representativa.", note: "nur dann ..., wenn: condición necesaria; también puede conservarse en forma nominal (Nur bei repräsentativer Stichprobe ...), pero la subordinada la hace más explícita" },
        { tr: "La evaluación comenzó después de que los participantes habían rellenado el cuestionario.", note: "subordinada temporal en pluscuamperfecto: más legible que una cadena de genitivos" }
      ]
    },
    vocab: [
      "la comprensibilidad",
      "el requisito, la condición previa",
      "las condiciones marco",
      "la muestra (estadística)",
      "el presidente (de una sesión)",
      "el solicitante",
      "dejar vencer, no respetar (un plazo)",
      "dejar de concederse, quedar sin efecto",
      "aprobar, dar el consentimiento",
      "rechazar, denegar",
      "significativo, fiable",
      "representativo"
    ],
    exercises: [
      {
        q: "En un acta: «Die Sitzung wurde verschoben, weil der Vorsitzende erkrankt war und die Referentin im Ausland festsaß.» ¿Por qué aquí conviene mantener la subordinada?",
        opts: [
          "Hay dos sujetos distintos, cada uno con su predicado: en forma nominal uno de los dos actores desaparecería o la frase resultaría pesada",
          "Porque una causa nunca puede expresarse con un grupo nominal",
          "Porque el pasado (war, festsaß) no se puede expresar con un sustantivo"
        ],
        why: "Una causa sí se puede nominalizar (<i>wegen</i> + genitivo), pero aquí los hechos son <b>dos</b>, con sujetos distintos: la forma nominal los comprimiría de modo pesado o perdería uno. Las otras dos afirmaciones son falsas."
      },
      {
        q: "«Sollte die Prüfung länger dauern, wird der Termin verschoben.» ¿Qué deja menos explícito la versión nominal «Bei längerer Dauer der Prüfung wird der Termin verschoben»?",
        opts: [
          "el matiz de eventualidad hipotética expresado por sollte",
          "el valor condicional de la frase",
          "el sujeto, porque Prüfung desaparece"
        ],
        why: "<i>bei</i> mantiene la <b>condición</b>, y <i>Prüfung</i> sigue en el texto; también la versión nominal puede describir un caso posible. Lo que queda menos explícito es la marca hipotética de <i>sollte</i> («si llegara a»), que el grupo nominal deja al contexto."
      },
      {
        q: "En un informe para un público no especialista, ¿qué formulación es la más legible?",
        opts: [
          "Die Auswertung begann, nachdem die Teilnehmenden den Fragebogen ausgefüllt hatten, den die Projektleitung entwickelt hatte.",
          "Die Auswertung begann nach dem Ausfüllen des von der Projektleitung entwickelten Fragebogens durch die Teilnehmenden.",
          "Die Auswertung begann nach Ausfüllung des durch die Projektleitung entwickelten Fragebogens seitens der Teilnehmenden."
        ],
        why: "Las tres frases son gramaticales, pero en las dos últimas el lector tiene que retener genitivo, participio ampliado y complemento agente (<i>durch, seitens</i>) antes de llegar al sentido. La subordinada dice <b>quién hace qué</b> en dos pasos."
      },
      {
        q: "Completa: «Die Ergebnisse sind nur dann aussagekräftig, ___ die Stichprobe repräsentativ ist.»",
        hint: "conjunción condicional",
        why: "<b>wenn</b>: <i>nur dann ..., wenn</i> expresa una condición necesaria. Un grupo nominal también puede conservar la condición (<i>Nur bei repräsentativer Stichprobe sind die Ergebnisse aussagekräftig</i>), pero la subordinada la hace más explícita."
      },
      {
        q: "Completa con el verbo modal: «Falls sich die Rahmenbedingungen ändern ___, entfällt die Förderung.»",
        hint: "Konjunktiv II de un modal: eventualidad hipotética",
        why: "<b>sollten</b>: <i>falls ... sollten</i> señala una eventualidad hipotética, un matiz difícil de expresar en forma nominal."
      },
      {
        q: "Completa las dos condiciones de un contrato.",
        tr: "El contrato se firmará solo cuando el consejo haya dado su aprobación y la financiación esté asegurada.",
        why: "<i>wenn</i> para la primera condición (<i>sobald</i> y <i>nachdem</i> expresarían una relación temporal, no una condición), <i>ist</i> para la segunda: <i>die Finanzierung gesichert ist</i>. Dos condiciones con sujetos distintos son un buen motivo para mantener la subordinada."
      },
      {
        q: "¿En qué casos conviene mantener la subordinada? (dos respuestas)",
        opts: [
          "cuando los sujetos son dos personas distintas y el sustantivo ocultaría quién actúa",
          "cuando hace falta un matiz modal como sollte, könnte, offenbar",
          "siempre que el texto es un acta oficial",
          "siempre que la frase contiene un verbo"
        ],
        why: "Los dos criterios son los sujetos múltiples y el matiz modal. Un acta oficial admite el estilo nominal (de hecho lo usa con gusto), y que una frase tenga un verbo no dice nada sobre la elección."
      },
      {
        q: "Ordena las palabras de la frase.",
        tr: "La evaluación comenzó después de que los participantes habían rellenado el cuestionario.",
        why: "<i>Die Auswertung begann, nachdem die Teilnehmenden den Fragebogen ausgefüllt hatten.</i> En la subordinada el verbo conjugado (<i>hatten</i>) va al final. También se acepta la subordinada al principio, con <i>begann</i> justo después de la coma."
      },
      {
        q: "Traduce conservando la eventualidad: «En caso de que la comisión rechace la solicitud, se prorrogará el plazo.» (der Ausschuss, der Antrag, ablehnen, die Frist, verlängern)",
        why: "<i>Sollte der Ausschuss den Antrag ablehnen, wird die Frist verlängert.</i> También se aceptan <i>falls</i> y <i>wenn</i> (con o sin <i>sollte</i>) y la forma sin conjunción <i>Lehnt der Ausschuss den Antrag ab, ...</i>."
      },
      {
        tr: "La sesión se aplazó porque el presidente estaba enfermo y la ponente estaba bloqueada en el extranjero. Si la verificación llegara a prolongarse, se fijará de nuevo la fecha.",
        why: "En <i>Vorsitzende</i> el acento cae en <b>Vor</b>; en <i>Referentin</i> el acento cae en <b>ren</b>; en <i>Ausland</i> el acento cae en <b>Aus</b>; en <i>festgelegt</i> el acento cae en <b>fest</b>."
      },
      {
        tr: "Si la verificación llegara a prolongarse, se aplazará la fecha.",
        why: "En <i>Prüfung</i> el acento cae en <b>Prü</b>; en <i>dauern</i> el acento cae en <b>dau</b>; en <i>verschoben</i> el acento cae en <b>scho</b>."
      }
    ]
  },
  "lesson:c1-u05-test": {
    theme: "Prueba",
    title: "Test: Tras concluir el trabajo",
    objectives: [
      "comprobar la unidad y repasar las funciones de werden y el Futur de conjetura del nivel"
    ],
    theory: [
      {
        p: "Doce preguntas sobre la unidad y sobre el repaso del nivel (werden y Futur II de conjetura). Se aprueba con el 70 %. No vuelvas a mirar las lecciones mientras respondes: si no recuerdas algo, es mejor volver atrás y repasar."
      }
    ],
    exercises: [
      {
        q: "La instalación lleva horas parada. Completa la conjetura sobre el pasado: «Die Anlage wird wohl ausgefallen ___.»",
        hint: "Futur II: auxiliar de ausfallen",
        why: "<b>sein</b>: <i>ausfallen</i> es un verbo de cambio de estado y en el Perfekt lleva <i>sein</i>; el Futur II de conjetura es <i>wird ... ausgefallen sein</i>, «se habrá averiado»."
      },
      {
        q: "Completa: «Die Verhandlungen sind erst im Mai abgeschlossen ___.»",
        hint: "participio de werden en la pasiva",
        why: "<b>worden</b>: en el Perfekt pasivo el participio de <i>werden</i> pierde el <i>ge-</i>. <i>geworden</i> sería el verbo pleno «volverse»."
      },
      {
        q: "Completa con el participio I de stehen y la terminación correcta: «Die uns zur Verfügung ___ Mittel reichen nicht aus.»",
        hint: "participio I de stehen, plural después de die",
        why: "<b>stehenden</b>: <i>die uns zur Verfügung stehenden Mittel</i>, «los medios de que disponemos». Participio I activo y simultáneo, con <b>-en</b> después de <i>die</i> en plural."
      },
      {
        q: "Completa con la preposición: «___ Rücksprache mit dem Vorstand kann der Vertrag nicht geändert werden.»",
        hint: "preposición: «sin»",
        why: "<b>Ohne</b> + acusativo: <i>ohne Rücksprache</i> es la versión nominal de <i>ohne dass man sich mit dem Vorstand bespricht</i>."
      },
      {
        q: "En un correo interno: «Er wird jetzt im Meeting sein.» ¿Qué expresa werden?",
        opts: [
          "una conjetura sobre el presente",
          "un futuro",
          "una pasiva"
        ],
        why: "<i>werden</i> + infinitivo puede expresar futuro o conjetura según el contexto; con <i>jetzt</i> es una <b>conjetura</b> sobre el presente: «estará en la reunión ahora». El contexto decide: con otras pistas la misma forma puede leerse como futuro."
      },
      {
        q: "¿Qué grupo corresponde a «die Anträge, die gerade bearbeitet werden»?",
        opts: [
          "die gerade bearbeiteten Anträge",
          "die gerade bearbeitenden Anträge",
          "die gerade bearbeitete Anträge"
        ],
        why: "Es una pasiva en curso: hace falta el participio II, <i>bearbeiteten</i>, con <b>-en</b> después de <i>die</i> en plural. <i>bearbeitenden</i> daría a las solicitudes un papel activo; <i>bearbeitete</i> tiene la terminación equivocada."
      },
      {
        q: "¿Qué subordinada corresponde a «Trotz Erkrankung des Referenten fand die Tagung statt»?",
        opts: [
          "Obwohl der Referent erkrankt war, fand die Tagung statt.",
          "Weil der Referent erkrankt war, fand die Tagung statt.",
          "Nachdem der Referent erkrankt war, fand die Tagung statt."
        ],
        why: "<i>trotz</i> es concesivo: <i>obwohl</i>. <i>weil</i> y <i>nachdem</i> cambiarían la relación lógica."
      },
      {
        q: "¿Qué frases usan correctamente un participio como atributo? (dos respuestas)",
        opts: [
          "Die zur Verfügung gestellten Mittel sind begrenzt.",
          "Die auf der Sitzung getroffenen Entscheidungen gelten sofort.",
          "Die getroffene Entscheidungen gelten sofort.",
          "Die zur Verfügung stellenden Mittel sind begrenzt."
        ],
        why: "Las dos primeras son correctas: participio II pasivo con <b>-en</b> después de <i>die</i>. En <i>getroffene</i> falta la <b>-n</b>; <i>stellenden</i> daría a los medios un papel activo («los medios que ponen a disposición»)."
      },
      {
        q: "Completa el comunicado con el participio II de planen (o vorsehen) y la preposición.",
        tr: "Le informaremos a tiempo. Las medidas planificadas por nosotros solo serán efectivas tras la conclusión de la verificación.",
        why: "<i>geplanten</i> (o <i>vorgesehenen</i>): participio II pasivo con <b>-en</b>. <i>nach</i>: tiempo con <i>nach</i> + dativo (<i>nach Abschluss der Prüfung</i>), «tras la conclusión»."
      },
      {
        q: "Traduce: «Las decisiones tomadas en la reunión se comunicarán tras la conclusión de la verificación.» (die Sitzung, die Entscheidung, mitteilen, der Abschluss, die Prüfung)",
        why: "<i>Die in der Sitzung getroffenen Entscheidungen werden nach Abschluss der Prüfung mitgeteilt.</i> <i>werden ... mitgeteilt</i> es una pasiva de presente, que se refiere al futuro por el contexto (<i>nach Abschluss</i>); el Futur I pasivo sería <i>werden ... mitgeteilt werden</i>; también se acepta la frase que empieza por <i>Nach Abschluss der Prüfung</i>."
      },
      {
        tr: "Habrá terminado el informe para el viernes. Las decisiones hechas constar en acta se aplicarán tras la conclusión de la verificación.",
        why: "En <i>fertiggestellt</i> el acento cae en <b>fer</b>; en <i>Beschlüsse</i> el acento cae en <b>schlüs</b>; en <i>umgesetzt</i> el acento cae en <b>um</b>."
      },
      {
        tr: "Los costes aumentados seguirán pesando sobre el presupuesto.",
        why: "En <i>gestiegenen</i> el acento cae en <b>stie</b>; en <i>belasten</i> el acento cae en <b>las</b>; en <i>Haushalt</i> el acento cae en <b>Haus</b>."
      }
    ]
  }
});
