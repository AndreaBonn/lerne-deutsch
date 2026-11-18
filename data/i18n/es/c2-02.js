/* ============================================================
   Learner-language text (es) for data/core/c2-02.js, unit c2-u04.
   Keys point at ids in the neutral layer; arrays merge by index,
   so their length has to match core.
   Checked by scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("es", {
  "unit:c2-u04": {
    title: "Lo que me preocupa",
    grammarNote: "Relativas con el genitivo dessen y deren (die Forscherin, deren Ergebnisse ...) y con la preposición delante del pronombre (mit dem, auf dessen Grundlage) · relativas con wer, was y wo(r)- + preposición (Wer zu spät kommt, den ...; alles, was ...; vieles, worüber ...) · régimen de verbos y adjetivos que no se deduce del español: genitivo (bedürfen, sich enthalten, beschuldigen, sich bewusst sein) y preposiciones (zweifeln an, stolz auf, bestehen auf/in)"
  },
  "lesson:c2-u04-l1": {
    theme: "Argumentación y escritura formal",
    title: "dessen, deren, mit dem",
    objectives: [
      "usar dessen y deren para decir «cuyo, cuya, cuyos, cuyas»",
      "hacer concordar dessen y deren con el antecedente, no con el sustantivo que sigue",
      "poner la preposición delante del pronombre relativo (mit dem, auf deren Grundlage)",
      "declinar el adjetivo que sigue a dessen y deren"
    ],
    theory: [
      {
        h: "El genitivo del pronombre relativo",
        p: "Para decir «cuyo» el alemán usa el genitivo del pronombre relativo: <strong>dessen</strong> si el antecedente es masculino o neutro, <strong>deren</strong> si es femenino o plural. <em>Der Autor, dessen Roman verfilmt wurde</em>, «el autor cuya novela fue llevada al cine»; <em>die Forscherin, deren Ergebnisse umstritten sind</em>, «la investigadora cuyos resultados son discutidos». Después de <em>dessen</em> y <em>deren</em> no hay artículo: el pronombre ocupa su lugar, y el sustantivo que sigue lleva el caso que exige la relativa."
      },
      {
        h: "La preposición va delante",
        p: "Si el verbo de la relativa pide una preposición, esta abre la relativa y rige el pronombre en su caso: <em>die Kommission, mit der wir zusammenarbeiten</em> (mit + dativo), <em>das Thema, für das sie sich interessiert</em> (für + acusativo). Con el genitivo la preposición también va delante, pero rige el sustantivo, no el pronombre: en <em>das Gesetz, auf dessen Grundlage die Behörde entschieden hat</em> y en <em>die Kollegen, mit deren Hilfe wir das Projekt abgeschlossen haben</em>, <em>auf</em> y <em>mit</em> rigen <em>Grundlage</em> y <em>Hilfe</em>, mientras que <em>dessen</em> y <em>deren</em> siguen en genitivo porque indican el poseedor. El verbo conjugado va al final, como en toda subordinada."
      },
      {
        contrast: "En español <em>cuyo</em> concuerda con la cosa poseída: <em>el autor cuya novela</em>, <em>la autora cuyo libro</em>, <em>la investigadora cuyos resultados</em>. En alemán ocurre lo contrario: <em>dessen</em> y <em>deren</em> concuerdan con el poseedor, es decir, con el antecedente. <em>Das Unternehmen, dessen Chefin zurückgetreten ist</em>: <em>dessen</em> porque <em>das Unternehmen</em> es neutro, aunque <em>Chefin</em> sea femenino; donde el español diría «la empresa cuya jefa», con <em>cuya</em> por <em>jefa</em>, el alemán mira a la empresa. Lo que sí coincide es que tras <em>cuyo</em> y tras <em>dessen</em> no hay artículo. Con preposición el orden coincide: <em>sobre cuya base</em> y <em>con cuya ayuda</em> corresponden a <em>auf dessen Grundlage</em> y <em>mit deren Hilfe</em>. La diferencia es que el español prefiere a menudo otra construcción (<em>la ley en la que se basa</em>, <em>con la ayuda de los cuales</em>), mientras que el alemán escrito usa casi siempre la de genitivo delante del sustantivo."
      },
      {
        trap: "<em>deren</em> y <em>derer</em> no son lo mismo: <em>derer</em> es sobre todo un demostrativo que anticipa una relativa (<em>die Zahl derer, die das Angebot nutzen</em>, «el número de quienes ...»), y como posesivo delante de un sustantivo no se usa nunca: ahí siempre va <em>deren</em> (<em>die Forscherin, deren Ergebnisse</em>). Y el adjetivo que sigue a <em>dessen</em> y <em>deren</em> toma la declinación fuerte, como si no hubiera artículo: <em>mit dessen neuem Vorschlag</em>, <em>deren letzter Roman</em>; <em>mit dessen neuen Vorschlag</em> se oye en la lengua hablada, pero en la escritura cuidada es un error."
      },
      {
        tip: "Para construir la relativa, parte de la oración independiente: <em>Die Regierung beruft sich auf ihre Ergebnisse.</em> El poseedor de <em>Ergebnisse</em> es <em>die Studie</em>, femenino: <em>ihre</em> se convierte en <em>deren</em>, y todo el grupo con la preposición pasa al comienzo de la relativa: <em>die Studie, auf deren Ergebnisse sich die Regierung beruft</em>."
      }
    ],
    grammar: {
      title: "Relativo en genitivo y con preposición",
      note: "<b>dessen</b>: antecedente masculino o neutro · <b>deren</b>: antecedente femenino o plural. Concuerdan con el poseedor, no con el sustantivo que sigue, y sustituyen al artículo. La preposición abre la relativa: <i>mit dem, auf deren Grundlage</i>. Adjetivo tras dessen/deren: declinación fuerte.",
      table: {
        head: ["antecedente", "genitivo", "con preposición"],
        rows: [
          ["der Autor", "dessen Roman", "mit dem, auf dessen Grundlage"],
          ["das Gesetz", "dessen Text", "nach dem, auf dessen Grundlage"],
          ["die Forscherin", "deren Ergebnisse", "mit der, mit deren Hilfe"],
          ["die Kollegen", "deren Hilfe", "mit denen, mit deren Hilfe"]
        ]
      },
      examples: [
        { tr: "El autor, cuya novela fue llevada al cine, vive muy retirado.", note: "dessen: der Autor es masculino" },
        { tr: "La investigadora, cuyos resultados son discutidos, ha hecho públicos sus datos.", note: "deren: die Forscherin es femenino, aunque Ergebnisse sea plural" },
        { tr: "Los colegas con cuya ayuda terminamos el proyecto ya se han marchado.", note: "preposición + deren: antecedente plural" },
        { tr: "La ley en la que se basó la decisión de la autoridad está siendo examinada por un tribunal.", note: "auf dessen Grundlage: das Gesetz es neutro" },
        { tr: "La comisión con la que colaboramos desde hace años ha publicado sus recomendaciones.", note: "mit + dativo femenino: mit der" },
        { tr: "El ministro, con cuya nueva propuesta casi nadie está de acuerdo, se mantiene firme en su plan.", note: "después de dessen el adjetivo es fuerte: neuem" }
      ]
    },
    vocab: [
      "la objeción",
      "la reserva, el recelo",
      "el alcance (de una decisión)",
      "los hechos, el estado de cosas",
      "la base, el fundamento",
      "el autor, el causante (de algo)",
      "la credibilidad",
      "la trayectoria (profesional)",
      "dejar (un cargo), salir (de un órgano)",
      "hacer público, revelar",
      "controvertido, discutido",
      "retirado, apartado"
    ],
    exercises: [
      {
        q: "Completa: «Der Schriftsteller, ___ Roman gerade verfilmt wird, gibt keine Interviews.»",
        opts: [
          "dessen",
          "deren",
          "dem"
        ],
        why: "El antecedente <i>der Schriftsteller</i> es masculino: <b>dessen</b>, «cuyo». <i>deren</i> iría con un antecedente femenino o plural; <i>dem</i> es un dativo, no un posesivo."
      },
      {
        q: "Completa: «Das Unternehmen, ___ Chefin vergangene Woche zurückgetreten ist, sucht einen Nachfolger.»",
        opts: [
          "dessen",
          "deren",
          "der"
        ],
        why: "Cuenta el poseedor, <i>das Unternehmen</i>, que es neutro: <b>dessen</b>. El género de <i>Chefin</i> no importa: quien elige <i>deren</i> está razonando como con «cuya jefa» en español."
      },
      {
        q: "Completa: «Die Ministerin, mit deren ___ Vorschlag niemand einverstanden war, trat zurück.»",
        opts: [
          "neuem",
          "neuen",
          "neue"
        ],
        why: "Después de <i>dessen</i> y <i>deren</i> el adjetivo toma la declinación fuerte, como sin artículo: <i>mit</i> + dativo masculino, <b>neuem</b>. <i>neuen</i> es frecuente en la lengua hablada, pero en la escritura cuidada se considera un error; <i>neue</i> no es un dativo."
      },
      {
        q: "Completa: «Das ist die Kollegin, mit ___ Hilfe ich die Studie abgeschlossen habe.»",
        hint: "relativo posesivo, antecedente femenino",
        why: "<b>deren</b>: <i>die Kollegin</i> es femenino, y <i>mit deren Hilfe</i> significa «con cuya ayuda». La preposición queda delante, y el sustantivo que sigue al pronombre no lleva artículo."
      },
      {
        q: "Completa: «Der Kollege, mit ___ ich das Büro teile, ist im Urlaub.»",
        hint: "pronombre relativo tras mit, antecedente masculino",
        why: "<b>dem</b>: <i>mit</i> rige dativo y el antecedente <i>der Kollege</i> es masculino. Como en «con el que», el pronombre sigue al antecedente en género; pero el caso lo decide la preposición, y en alemán se declina."
      },
      {
        q: "Completa con el relativo posesivo: en el primer hueco se habla de la Studie, en el segundo del Institut.",
        tr: "El estudio en cuyos resultados se apoya el Gobierno fue elaborado por un instituto cuya financiación sigue sin aclararse.",
        why: "<b>deren</b>: <i>die Studie</i> es femenino (<i>auf deren Ergebnisse</i>, con <i>sich berufen auf</i> + acusativo). <b>dessen</b>: <i>das Institut</i> es neutro, aunque <i>Finanzierung</i> sea femenino."
      },
      {
        q: "¿En qué frases es correcto el pronombre relativo? (dos respuestas)",
        opts: [
          "Die Nachbarin, deren Sohn bei uns arbeitet, ist Ärztin.",
          "Das Projekt, an dessen Erfolg niemand mehr glaubte, wurde doch abgeschlossen.",
          "Die Nachbarin, dessen Sohn bei uns arbeitet, ist Ärztin.",
          "Das Projekt, an den Erfolg niemand mehr glaubte, wurde doch abgeschlossen."
        ],
        why: "Las dos primeras son correctas: <i>deren</i> para el antecedente femenino <i>die Nachbarin</i>, <i>an dessen Erfolg</i> para el neutro <i>das Projekt</i>. En la tercera <i>dessen</i> sigue el género de <i>Sohn</i>, como haría <i>cuyo</i>, en lugar del poseedor; en la cuarta falta el genitivo: <i>an den Erfolg</i> no dice de quién es el éxito."
      },
      {
        q: "Ordena las palabras.",
        tr: "La empresa para cuyos productos hace publicidad está desde hace meses en el punto de mira de las críticas.",
        why: "<i>Die Firma, für deren Produkte sie wirbt, steht seit Monaten in der Kritik.</i> <i>werben für</i>: la preposición abre la relativa, <i>deren</i> remite a <i>die Firma</i> y el verbo <i>wirbt</i> cierra la subordinada."
      },
      {
        q: "Traduce: «La escritora, cuya última novela ha sido traducida a veinte idiomas, vive en Viena.» (übersetzen)",
        why: "<i>Die Schriftstellerin, deren letzter Roman in zwanzig Sprachen übersetzt wurde, lebt in Wien.</i> <i>deren</i> porque el antecedente es femenino, aunque en español sea «cuya» por <i>novela</i>; <i>letzter</i> lleva la desinencia fuerte del nominativo masculino. También vale <i>Autorin</i> y el Perfekt pasivo <i>übersetzt worden ist</i>."
      },
      {
        tr: "El informe, cuya publicación se esperaba desde hacía meses, no contiene casi nada nuevo. Los expertos en cuyo juicio se apoya el Gobierno siguen siendo anónimos.",
        why: "En <i>Veröffentlichung</i> el acento recae en <b>öf</b>; en <i>Urteil</i> el acento recae en <b>Ur</b>; en <i>anonym</i> el acento recae en <b>nym</b>."
      },
      {
        tr: "La autora, cuya novela fue llevada al cine, vive muy retirada.",
        why: "En <i>Autorin</i> el acento recae en <b>to</b>; en <i>verfilmt</i> el acento recae en <b>filmt</b>; en <i>zurückgezogen</i> el acento recae en <b>rück</b>."
      }
    ]
  },
  "lesson:c2-u04-l2": {
    theme: "Argumentación y escritura formal",
    title: "wer, was, worüber",
    objectives: [
      "usar wer para el «quien» genérico y elegir el caso del correlativo (der, den, dem)",
      "usar was después de alles, nichts, etwas, das y de los superlativos neutros",
      "referir was a una oración entera («lo cual, lo que»)",
      "sustituir preposición + was por wo(r)- + preposición (worüber, wofür, wovor)"
    ],
    theory: [
      {
        h: "wer: «quien» sin antecedente",
        p: "<strong>wer</strong> abre una relativa que no tiene un sustantivo al que referirse: <em>Wer zu spät kommt, den bestraft das Leben</em>, «a quien llega tarde, lo castiga la vida». La principal retoma la relativa con un demostrativo, el correlativo, en el caso que necesita: <em>den</em> (acusativo, <em>bestrafen</em>), <em>dem</em> (dativo: <em>Wer viel verspricht, dem glaubt man nicht</em>). Si los dos casos coinciden, el correlativo se puede omitir: <em>Wer A sagt, (der) muss auch B sagen</em>. También puede caer cuando el caso de la relativa está por debajo del de la principal (nominativo, luego acusativo, luego dativo): <em>Wem das zu viel ist, (der) kann gehen</em>; aun así, la mayoría lo mantiene por claridad. También <em>wer</em> se declina: <em>wem</em>, <em>wen</em>, <em>wessen</em>."
      },
      {
        h: "was y wo(r)-",
        p: "<strong>was</strong> sustituye a <em>das</em> cuando el antecedente no es un sustantivo concreto: después de <em>alles, nichts, etwas, vieles, manches, das</em> y después de un superlativo neutro sustantivado (<em>das Beste, was ...</em>). Se usa también sin antecedente (<em>Was mich beunruhigt, ist ...</em>) y para retomar una oración entera: <em>Er hat bestanden, was niemand erwartet hatte</em>, «lo cual nadie esperaba». Si el verbo pide una preposición, en lugar de preposición + <em>was</em> se usa <strong>wo(r)- + preposición</strong>: <em>vieles, worüber wir uns nicht einig waren</em>. La <em>r</em> aparece delante de vocal: <em>woran, worauf, worüber</em>, pero <em>wofür, womit, wovon, wovor</em>."
      },
      {
        contrast: "El español tiene <em>quien</em>, <em>lo que</em> y <em>lo cual</em>, y el alemán los cubre con dos palabras: <em>wer</em> para personas, <em>was</em> para todo lo demás, incluido el «lo cual» que se refiere a una oración entera. <em>Todo lo que dice</em> es <em>alles, was er sagt</em>, sin nada que corresponda al artículo <em>lo</em>. Donde el español dice <em>aquello de lo que, aquello sobre lo que, todo aquello por lo que</em>, el alemán funde preposición y pronombre en una sola palabra: <em>das, worüber wir sprechen</em>, <em>alles, wofür sie gekämpft hat</em>. El correlativo tampoco es del todo ajeno al español: en <em>a quien madruga, Dios le ayuda</em> el pronombre <em>le</em> retoma a <em>quien</em> en otra función, como el alemán <em>Wer früh aufsteht, dem hilft Gott</em>. En alemán, sin embargo, ese correlativo es lo habitual cuando el caso cambia: <em>Wem die Reform schadet, den hat man nicht gefragt</em>."
      },
      {
        trap: "Después de <em>alles, nichts, etwas, das Einzige, das Beste</em> va <em>was</em>, no <em>das</em>: <em>Alles, was er sagt</em>, no <em>alles, das er sagt</em>. En la escritura formal evita <em>über was, für was</em>, calcos de «sobre lo que, para lo que»: son coloquiales, y la forma cuidada es <em>worüber, wofür</em>. Con un antecedente que es un sustantivo concreto, en cambio, se mantiene preposición + <em>der/die/das</em>: <em>die Frage, über die wir sprechen</em>."
      },
      {
        tip: "Para elegir entre <em>wer</em> y el correlativo, hazte dos preguntas por separado: ¿qué caso pide el verbo de la relativa (<em>schaden</em> + dativo: <em>wem</em>)? ¿Y qué caso pide el verbo de la principal (<em>fragen</em> + acusativo: <em>den</em>)? Las dos respuestas pueden ser distintas, y es ahí donde normalmente hace falta el correlativo."
      }
    ],
    grammar: {
      title: "Relativas con wer, was y wo(r)-",
      note: "<b>wer ..., der/den/dem</b>: «quien», correlativo en el caso de la principal (se omite si el caso coincide). <b>was</b>: después de alles, nichts, etwas, das, das Beste; sin antecedente; referido a una oración entera. <b>wo(r)- + preposición</b> en lugar de preposición + was: <i>worüber, woran, wofür, wovor</i>.",
      table: {
        head: ["antecedente", "relativo", "ejemplo"],
        rows: [
          ["ninguno (personas)", "wer, wem, wen", "Wer lügt, dem glaubt man nicht."],
          ["alles, nichts, etwas, das", "was", "Alles, was er sagt, stimmt."],
          ["superlativo neutro", "was", "das Beste, was passieren konnte"],
          ["una oración entera", "was", "..., was niemand erwartet hatte."],
          ["was + preposición", "wo(r)- + preposición", "vieles, worüber wir streiten"]
        ]
      },
      examples: [
        { tr: "A quien llega tarde, lo castiga la vida.", note: "wer + correlativo en acusativo: bestrafen pide acusativo" },
        { tr: "Lo que me preocupa es la indiferencia de mucha gente.", note: "was sin antecedente, como sujeto" },
        { tr: "Todo lo que afirmó pudo ser refutado.", note: "después de alles: was" },
        { tr: "Lo mejor que nos podía pasar fue este rechazo.", note: "después de un superlativo neutro: was" },
        { tr: "Aprobó el examen, lo cual nadie esperaba.", note: "was retoma toda la oración anterior" },
        { tr: "Había muchas cosas sobre las que no estábamos de acuerdo.", note: "sich einig sein über: worüber" }
      ]
    },
    vocab: [
      "la indiferencia",
      "la afirmación, la tesis",
      "la contradicción",
      "la conclusión (lógica)",
      "la falacia, el razonamiento erróneo",
      "la petición, el asunto que importa",
      "refutar, desmentir",
      "documentar, demostrar",
      "inquietar, preocupar",
      "admitir, reconocer",
      "fundado, convincente",
      "cuestionable, dudoso"
    ],
    exercises: [
      {
        q: "Completa: «Alles, ___ sie gesagt hat, war gelogen.»",
        opts: [
          "was",
          "das",
          "welches"
        ],
        why: "Después de <i>alles</i> el relativo es <b>was</b>: el antecedente no es un sustantivo concreto. <i>das</i> y <i>welches</i> necesitarían un sustantivo neutro como antecedente."
      },
      {
        q: "Completa: «___ sich nicht an die Regeln hält, ___ droht ein Bußgeld.»",
        opts: [
          "Wer ... dem",
          "Wer ... der",
          "Der ... wer"
        ],
        why: "<i>Wer</i> es el sujeto de <i>sich halten</i>; en la principal <i>drohen</i> pide dativo, así que el correlativo es <b>dem</b>: «a quien no respeta las normas le espera una multa». <i>der</i> sería un nominativo."
      },
      {
        q: "En un texto escrito formal: «Das ist eine Frage, ___ ich lange nachgedacht habe.»",
        opts: [
          "über die",
          "worüber",
          "über was"
        ],
        why: "El antecedente es un sustantivo concreto, <i>eine Frage</i>, femenino: <b>über die</b> (<i>nachdenken über</i> + acusativo). <i>worüber</i> se usa con <i>alles, etwas, das</i> o con una oración entera; con un sustantivo es anticuado o coloquial. <i>über was</i> es coloquial."
      },
      {
        q: "Completa: «Das Einzige, ___ mich an dem Vorschlag stört, ist der Zeitplan.»",
        hint: "relativo después de das Einzige",
        why: "<b>was</b>: <i>das Einzige</i>, como <i>alles</i> y los superlativos neutros, pide <i>was</i>."
      },
      {
        q: "Completa: «Das ist genau das, ___ ich Angst hatte.»",
        hint: "wo(r)- + la preposición de Angst haben",
        why: "<b>wovor</b>: <i>Angst haben vor</i>; después de <i>das</i>, preposición + <i>was</i> se convierte en <i>wo(r)-</i> + preposición. Delante de consonante no hay <i>r</i>: <i>wovor</i>, no <i>worvor</i>."
      },
      {
        q: "Completa con wer declinado y el correlativo.",
        tr: "A quienes más perjudica la reforma es a quienes menos se ha consultado.",
        why: "<b>Wem</b>: <i>schaden</i> pide dativo. <b>den</b>: en la principal <i>fragen</i> pide acusativo. Los casos son distintos, así que el correlativo aclara la frase; en rigor podría omitirse, porque el dativo <i>wem</i> está por debajo del acusativo, pero la escritura cuidada lo mantiene."
      },
      {
        q: "Relaciona cada palabra con su significado.",
        pairs: [
          "admitir, reconocer",
          "refutar, desmentir",
          "fundado, convincente",
          "la falacia"
        ]
      },
      {
        q: "Ordena las palabras.",
        tr: "Lo que me preocupa del informe es la indiferencia de las autoridades.",
        why: "<i>Was mich an dem Bericht beunruhigt, ist die Gleichgültigkeit der Behörden.</i> La relativa con <i>was</i> es el sujeto y ocupa la primera posición; el verbo <i>ist</i> viene justo después de la coma."
      },
      {
        q: "Traduce: «Todo aquello de lo que hemos hablado sigue siendo confidencial.» (vertraulich)",
        why: "<i>Alles, worüber wir gesprochen haben, bleibt vertraulich.</i> Con <i>sprechen über</i> hace falta <i>worüber</i>; con un verbo transitivo basta <i>was</i>: <i>Alles, was wir besprochen haben</i> (o <i>diskutiert haben</i>)."
      },
      {
        tr: "Lo que preocupa a muchos lectores no es el estudio en sí, sino lo que la política hace con él. Quien lee las cifras con atención no encuentra en ellas casi nada por lo que haya que alterarse.",
        why: "En <i>beunruhigt</i> el acento recae en <b>un</b>; en <i>aufregen</i> el acento recae en <b>auf</b>; en <i>worüber</i> el acento recae en <b>ü</b>."
      },
      {
        tr: "Todo lo que afirmó pudo ser refutado.",
        why: "En <i>behauptet</i> el acento recae en <b>haup</b>; en <i>widerlegen</i>, verbo no separable, el acento recae en <b>le</b>; en <i>ließ</i> la <b>ie</b> es larga."
      }
    ]
  },
  "lesson:c2-u04-l3": {
    theme: "Argumentación y escritura formal",
    title: "Un régimen que no se adivina",
    objectives: [
      "usar verbos y adjetivos con genitivo (bedürfen, sich enthalten, beschuldigen, sich bewusst sein)",
      "elegir la preposición correcta donde el español usa otra (zweifeln an, stolz auf)",
      "distinguir bestehen auf, bestehen aus y bestehen in",
      "reconocer el registro formal del régimen en genitivo"
    ],
    theory: [
      {
        h: "Verbos y adjetivos con genitivo",
        p: "Un pequeño grupo de verbos rige un complemento en genitivo: <em>bedürfen</em> (necesitar, requerir), <em>gedenken</em> (conmemorar, recordar a), <em>sich enthalten</em> (abstenerse de), <em>sich vergewissern</em> (cerciorarse de), <em>sich bedienen</em> (servirse de). Algunos llevan un acusativo y un genitivo: <em>jemanden einer Sache beschuldigen</em> o <em>anklagen</em>, «acusar a alguien de algo», y <em>jemanden einer Sache verdächtigen</em>, «sospechar de alguien por algo». Lo mismo vale para algunos adjetivos: <em>sich einer Sache bewusst sein</em>, <em>einer Sache würdig</em>, <em>sich einer Sache schuldig machen</em>. Verbos como <em>bedürfen</em>, <em>gedenken</em>, <em>sich enthalten</em> y <em>beschuldigen</em> pertenecen al registro alto: en la lengua de todos los días se dice <em>brauchen</em> en lugar de <em>bedürfen</em>. <em>sich einer Sache bewusst sein</em>, en cambio, es común también en el uso corriente."
      },
      {
        h: "La preposición se aprende con el verbo",
        p: "Muchos verbos y adjetivos alemanes piden una preposición fija, y el caso que sigue forma parte del régimen: <em>zweifeln an</em> + dativo, <em>stolz auf</em> + acusativo, <em>angewiesen auf</em> + acusativo, <em>sich erkundigen nach</em> + dativo. El mismo verbo cambia de significado con la preposición: <em>bestehen auf</em> (insistir en), <em>bestehen aus</em> (constar de, estar compuesto de), <em>bestehen in</em> (consistir en)."
      },
      {
        contrast: "Muchos regímenes alemanes no coinciden con los españoles, y traducir la preposición palabra por palabra lleva al error: «dudar <em>de</em>» es <em>zweifeln an</em>, «estar orgulloso <em>de</em>» es <em>stolz auf</em>, «depender <em>de</em>» es <em>abhängen von</em>, «acostumbrarse <em>a</em>» es <em>sich gewöhnen an</em>. El caso más traicionero es <em>en</em>: «insistir <em>en</em>» y «consistir <em>en</em>» llevan la misma preposición en español, pero en alemán son <em>bestehen auf</em> y <em>bestehen in</em>, y solo la preposición distingue los dos significados. Donde el español usa <em>de</em> o un complemento directo (<em>necesitar algo, acusar de, ser consciente de</em>), el alemán formal usa a menudo el genitivo sin preposición: <em>der Hilfe bedürfen</em>, <em>des Betrugs beschuldigen</em>, <em>sich der Risiken bewusst sein</em>."
      },
      {
        trap: "<em>sich interessieren für</em>, pero <em>interessiert an</em>: el verbo y el adjetivo no llevan la misma preposición, y ninguno de los dos lleva <em>in</em> como el español «interesado en». Y con <em>bedürfen</em> el complemento nunca va en acusativo: <em>Der Plan bedarf einer Überarbeitung</em>, no <em>eine Überarbeitung</em>."
      },
      {
        tip: "Aprende verbos y adjetivos siempre con su régimen, como una sola palabra: no <em>zweifeln</em>, sino <em>an etwas (Dat.) zweifeln</em>; no <em>bewusst</em>, sino <em>sich einer Sache (Gen.) bewusst sein</em>."
      }
    ],
    grammar: {
      title: "Régimen de verbos y adjetivos",
      note: "<b>Genitivo</b>: bedürfen, gedenken, sich enthalten, sich vergewissern; jemanden einer Sache beschuldigen; sich einer Sache bewusst sein, einer Sache würdig. <b>Preposiciones</b>: zweifeln an + Dat., stolz auf + Akk., angewiesen auf + Akk., bestehen auf / aus / in + Dat. Los verbos con genitivo son de registro formal.",
      table: {
        head: ["alemán", "español"],
        rows: [
          ["einer Sache bedürfen", "necesitar, requerir algo"],
          ["jemanden einer Sache beschuldigen", "acusar a alguien de algo"],
          ["sich einer Sache bewusst sein", "ser consciente de algo"],
          ["an einer Sache zweifeln", "dudar de algo"],
          ["auf etwas stolz sein", "estar orgulloso de algo"],
          ["auf etwas bestehen / aus etwas bestehen / in etwas bestehen", "insistir en / constar de / consistir en"]
        ]
      },
      examples: [
        { tr: "La reforma requiere un examen a fondo.", note: "bedürfen + genitivo: einer gründlichen Prüfung" },
        { tr: "Lo acusaron de fraude.", note: "beschuldigen + acusativo de la persona + genitivo de la acusación" },
        { tr: "Es perfectamente consciente de los riesgos.", note: "sich bewusst sein + genitivo plural: der Risiken" },
        { tr: "Dos diputados se abstuvieron.", note: "sich der Stimme enthalten: genitivo" },
        { tr: "Nadie duda de la autenticidad del documento.", note: "zweifeln an + dativo, no «von»" },
        { tr: "La oposición insiste en una audiencia pública.", note: "bestehen auf + dativo: insistir; con in significaría «consistir»" }
      ]
    },
    vocab: [
      "necesitar, requerir (+ genitivo)",
      "abstenerse de (+ genitivo)",
      "acusar (a alguien de algo)",
      "conmemorar, recordar a (+ genitivo)",
      "cerciorarse de (+ genitivo)",
      "dudar de",
      "depender de, necesitar",
      "consciente",
      "orgulloso de",
      "digno de (+ genitivo)",
      "el régimen (de un verbo)",
      "el reproche, la acusación"
    ],
    exercises: [
      {
        q: "Completa: «Die Gesetzesänderung bedarf ___.»",
        opts: [
          "der Zustimmung des Bundesrats",
          "die Zustimmung des Bundesrats",
          "auf die Zustimmung des Bundesrats"
        ],
        why: "<i>bedürfen</i> rige genitivo: <b>der Zustimmung</b>. El acusativo <i>die Zustimmung</i> va con <i>brauchen</i>; <i>bedürfen</i> no lleva preposición."
      },
      {
        q: "Completa: «Niemand zweifelt ___ ihrer Ehrlichkeit.»",
        opts: [
          "an",
          "von",
          "über"
        ],
        why: "<b>zweifeln an</b> + dativo. El español «dudar de» empuja hacia <i>von</i>, que aquí es incorrecto."
      },
      {
        q: "«La oposición insiste en una audiencia pública.» Completa: «Die Opposition besteht ___ einer öffentlichen Anhörung.»",
        opts: [
          "auf",
          "aus",
          "in"
        ],
        why: "<b>bestehen auf</b>: insistir. El «en» del español empuja hacia <i>in</i>, pero <i>bestehen in</i> significa «consistir en»; <i>bestehen aus</i>, «constar de»."
      },
      {
        q: "Completa: «Sie ist sich ___ Risiken durchaus bewusst.»",
        hint: "sich bewusst sein + genitivo plural",
        why: "<b>der</b>: <i>sich einer Sache bewusst sein</i> rige genitivo, y el genitivo plural del artículo es <i>der</i>."
      },
      {
        q: "Completa: «Viele Rentner sind ___ die Hilfe ihrer Kinder angewiesen.»",
        hint: "preposición de angewiesen",
        why: "<b>auf</b>: <i>angewiesen sein auf</i> + acusativo, «depender de, necesitar»."
      },
      {
        q: "Completa: en el primer hueco el pronombre relativo, en el segundo la preposición de bestehen.",
        tr: "El diputado, al que se acusa de soborno, rechaza la acusación e insiste en una investigación independiente.",
        why: "<b>den</b>: <i>beschuldigen</i> pide la persona en acusativo (y la acusación en genitivo, <i>der Bestechung</i>). <b>auf</b>: <i>bestehen auf</i>, «insistir en»."
      },
      {
        q: "¿En qué frases es correcto el régimen? (dos respuestas)",
        opts: [
          "Der Plan bedarf einer gründlichen Überarbeitung.",
          "Wir sind stolz auf unsere Ergebnisse.",
          "Der Plan bedarf eine gründliche Überarbeitung.",
          "Sie interessiert sich an moderner Kunst."
        ],
        why: "Las dos primeras son correctas: <i>bedürfen</i> + genitivo, <i>stolz auf</i> + acusativo. En la tercera hay un acusativo en lugar del genitivo; en la cuarta el verbo pide <i>für</i>: <i>sich für moderne Kunst interessieren</i>, mientras que <i>an</i> va con el adjetivo <i>interessiert</i>."
      },
      {
        q: "Ordena las palabras.",
        tr: "La acusada niega haberse hecho culpable de fraude.",
        why: "<i>Die Angeklagte bestreitet, sich des Betrugs schuldig gemacht zu haben.</i> <i>sich einer Sache schuldig machen</i> rige genitivo; el infinitivo compuesto <i>gemacht zu haben</i> cierra la frase."
      },
      {
        q: "Traduce: «Somos conscientes de la responsabilidad que asumimos.» (sich bewusst sein, übernehmen)",
        why: "<i>Wir sind uns der Verantwortung bewusst, die wir übernehmen.</i> <i>sich bewusst sein</i> pide genitivo, y el reflexivo va en dativo: <i>uns</i>. La relativa puede ir también justo después de <i>Verantwortung</i>: <i>Wir sind uns der Verantwortung, die wir übernehmen, bewusst</i>."
      },
      {
        tr: "La solicitud requiere la aprobación de todos los miembros. Quien no pueda participar en la votación debería informarse antes sobre los plazos en la junta directiva.",
        why: "En <i>Zustimmung</i> el acento recae en <b>Zu</b>; en <i>Abstimmung</i> el acento recae en <b>Ab</b>; en <i>erkundigen</i> el acento recae en <b>kun</b>."
      },
      {
        tr: "Es perfectamente consciente de los riesgos.",
        why: "En <i>Risiken</i> el acento recae en <b>Ri</b>; en <i>durchaus</i> el acento puede recaer en <b>durch</b> o en <b>aus</b>; en <i>bewusst</i> la <b>u</b> es breve."
      }
    ]
  },
  "lesson:c2-u04-test": {
    theme: "Evaluación",
    title: "Test: Lo que me preocupa",
    objectives: [
      "comprobar las relativas y el régimen de la unidad y repasar el nivel C2 en el examen final"
    ],
    theory: [
      {
        p: "Examen final del nivel C2: doce preguntas sobre la unidad, con un repaso del atributo participial (unidad 1) y del registro (unidad 3). Se aprueba con el 70%. No vuelvas a mirar las lecciones mientras respondes: si no recuerdas algo, es mejor volver atrás y repasar."
      }
    ],
    exercises: [
      {
        q: "Completa: «Die Firma, ___ Gründerin den Preis erhalten hat, sitzt in Basel.»",
        hint: "relativo posesivo, antecedente femenino",
        why: "<b>deren</b>: <i>die Firma</i> es femenino, y <i>deren Gründerin</i> significa «cuya fundadora»."
      },
      {
        q: "Completa: «Er hat alles verloren, ___ ihm wichtig war.»",
        hint: "relativo después de alles",
        why: "<b>was</b>: después de <i>alles</i> el relativo es siempre <i>was</i>."
      },
      {
        q: "Completa: «Das Vorhaben bedarf ___ sorgfältigen Planung.»",
        hint: "bedürfen + genitivo, artículo",
        why: "<b>einer</b> (o <b>der</b>): <i>bedürfen</i> rige genitivo, y el genitivo femenino del artículo es <i>einer</i> o <i>der</i>."
      },
      {
        q: "Completa con el atributo participial: «Die im Bericht ___ Mängel wurden inzwischen behoben.» (señalar como defectuoso, objetar: beanstanden)",
        hint: "participio II de beanstanden, plural después de die",
        why: "<b>beanstandeten</b>: participio II con sentido pasivo («las deficiencias señaladas en el informe»), desinencia <i>-en</i> después del artículo plural <i>die</i>. <i>beanstanden</i> es inseparable: sin <i>ge-</i>."
      },
      {
        q: "En una carta formal, ¿qué frase es adecuada?",
        opts: [
          "Wir bitten Sie, uns die fehlenden Unterlagen bis zum 15. März zukommen zu lassen.",
          "Schicken Sie uns mal die fehlenden Sachen bis zum 15. März.",
          "Wär nett, wenn Sie uns die Unterlagen bis zum 15. März schicken."
        ],
        why: "La primera usa el registro formal: <i>wir bitten Sie</i>, <i>Unterlagen</i>, <i>zukommen lassen</i>. En la segunda <i>mal</i> y <i>Sachen</i> son coloquiales; en la tercera <i>Wär nett</i> es propio de la conversación."
      },
      {
        q: "Completa: «Die Frage, ___ es eigentlich ankommt, hat niemand gestellt.»",
        opts: [
          "auf die",
          "auf der",
          "auf welcher"
        ],
        why: "<i>es kommt auf etwas an</i> pide <i>auf</i> + acusativo, y el antecedente <i>die Frage</i> es femenino: <b>auf die</b>. <i>auf der</i> y <i>auf welcher</i> son dativos."
      },
      {
        q: "«La dificultad consiste en convencer a todas las personas implicadas.» Completa: «Die Schwierigkeit besteht ___, alle Beteiligten zu überzeugen.»",
        opts: [
          "darin",
          "darauf",
          "daraus"
        ],
        why: "<b>bestehen in</b>, «consistir en», con el pronominal <i>darin</i> que anticipa el infinitivo. <i>darauf</i> significaría «insistir», <i>daraus</i> «constar de»: el mismo «en» español no distingue los dos primeros."
      },
      {
        q: "¿Qué frases son correctas? (dos respuestas)",
        opts: [
          "Wer zuletzt lacht, lacht am besten.",
          "Die Studie, auf deren Ergebnisse sich der Bericht stützt, ist veraltet.",
          "Die Studie, auf dessen Ergebnisse sich der Bericht stützt, ist veraltet.",
          "Er ist sich die Risiken bewusst."
        ],
        why: "Las dos primeras son correctas: <i>wer</i> sin correlativo (el mismo caso en las dos oraciones) y <i>deren</i> para el antecedente femenino <i>die Studie</i>. En la tercera <i>dessen</i> no concuerda con <i>Studie</i>; en la cuarta <i>sich bewusst sein</i> pide genitivo: <i>der Risiken</i>."
      },
      {
        q: "Completa: en el primer hueco el relativo posesivo, en el segundo el artículo que rige sich schuldig machen.",
        tr: "La ministra, cuya dimisión se exige desde hace semanas, niega haberse hecho culpable de una conducta indebida.",
        why: "<b>deren</b>: <i>die Ministerin</i> es femenino. <b>eines</b> (o <b>des</b>): <i>sich einer Sache schuldig machen</i> rige genitivo, y <i>Fehlverhalten</i> es neutro: <i>eines Fehlverhaltens</i>."
      },
      {
        q: "Traduce en registro formal: «Quien es consciente de los riesgos no necesita más advertencias.» (sich bewusst sein, bedürfen)",
        why: "<i>Wer sich der Risiken bewusst ist, bedarf keiner weiteren Warnungen.</i> <i>sich bewusst sein</i> y <i>bedürfen</i> rigen ambos genitivo; el correlativo <i>der</i> se puede añadir u omitir, porque <i>wer</i> y el sujeto de la principal están los dos en nominativo."
      },
      {
        tr: "Lo que preocupa a los expertos no es tanto el número de casos como la indiferencia con la que reaccionan las autoridades. Las medidas indicadas en el informe necesitan con urgencia una revisión.",
        why: "En <i>Gleichgültigkeit</i> el acento recae en <b>Gleich</b>; en <i>Behörden</i> el acento recae en <b>hör</b>; en <i>Überprüfung</i> el acento recae en <b>prü</b>."
      },
      {
        tr: "Quien es consciente del alcance de su decisión actúa con más prudencia.",
        why: "En <i>Tragweite</i> el acento recae en <b>Trag</b>; en <i>Entscheidung</i> el acento recae en <b>schei</b>; en <i>vorsichtiger</i> el acento recae en <b>vor</b>."
      }
    ]
  }
});
