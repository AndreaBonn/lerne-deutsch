/* ============================================================
   Learner-language text (it) for data/core/b2-02.js, unit b2-u05.
   Keys point at ids in the neutral layer; arrays merge by index,
   so their length has to match core.
   Checked by scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("it", {
  "unit:b2-u05": {
    title: "Ha detto che era malata",
    grammarNote: "Konjunktiv I nel discorso indiretto (er sei, er habe, er werde) · sostituzione con il Konjunktiv II (sie hätten) · spostamento di tempo, luogo e persona · domande con ob e con la parola interrogativa · ordini riferiti con sollen"
  },
  "lesson:b2-u05-l1": {
    theme: "Notizie e testimonianze",
    title: "Dal discorso diretto all'indiretto",
    objectives: [
      "riconoscere e formare il Konjunktiv I alla terza persona",
      "riferire le parole di qualcuno con distanza, come nei giornali",
      "sostituire il Konjunktiv I con il Konjunktiv II quando coincide con l'indicativo",
      "usare verbi come behaupten, erklären, betonen"
    ],
    theory: [
      {
        h: "Il Konjunktiv I",
        p: "Nei giornali, nei verbali e nelle relazioni le parole di un altro si riferiscono con il <strong>Konjunktiv I</strong>: chi scrive segnala che si tratta della versione di quella persona. Si forma dal <strong>tema dell'infinito</strong> + <em>-e</em> e si usa soprattutto alla terza persona singolare, dove è diverso dall'indicativo: <em>er habe, er komme, er wisse, er könne, er werde</em>. <em>sein</em> è irregolare: <em>er sei, sie seien</em>. <em>Der Minister sagte, er sei mit dem Ergebnis zufrieden.</em>"
      },
      {
        h: "Passato e sostituzione",
        p: "Il passato si forma con <strong>habe</strong> o <strong>sei</strong> + participio: <em>Die Zeugin erklärte, sie habe nichts gesehen. Laut Polizei sei der Fahrer zu schnell gefahren.</em> Il futuro con <strong>werde</strong> + infinito: <em>Die Firma werde keine Stellen streichen.</em> Dove il Konjunktiv I coincide con l'indicativo, soprattutto al plurale (<em>sie haben</em>), si usa il <strong>Konjunktiv II</strong>: <em>Sie sagten, sie hätten keine Zeit.</em>"
      },
      {
        contrast: "L'italiano giornalistico ha un mezzo simile: il <strong>condizionale di dissociazione</strong>. <em>Secondo la polizia il conducente avrebbe guidato troppo veloce</em> corrisponde a <em>Laut Polizei sei der Fahrer zu schnell gefahren</em>: in tutte e due le lingue chi scrive non si assume la responsabilità del fatto. Nel discorso indiretto con <em>disse che</em> l'italiano usa invece indicativo o congiuntivo e sposta i tempi; il tedesco usa il Konjunktiv I e non sposta il tempo."
      },
      {
        trap: "Il Konjunktiv I non è il congiuntivo italiano e non esprime dubbio: segnala solo che le parole sono di un altro. E nel parlato si usa poco: <em>Er hat gesagt, er ist krank</em> è normale in una conversazione. Nei testi scritti formali, invece, l'indicativo al posto del Konjunktiv I suona come se chi scrive garantisse la notizia."
      },
      {
        tip: "Per formare il Konjunktiv I alla terza persona singolare, togli <em>-n</em> dall'infinito: <em>haben → habe, kommen → komme, wissen → wisse, können → könne</em>. L'unica eccezione da ricordare è <em>sein → sei</em>."
      }
    ],
    grammar: {
      title: "Il Konjunktiv I nel discorso indiretto",
      note: "<b>Presente</b>: tema + <i>-e</i> (er habe, er komme; er sei). <b>Passato</b>: habe / sei + participio. <b>Futuro</b>: werde + infinito. Se coincide con l'indicativo: <b>Konjunktiv II</b> (sie hätten).",
      table: {
        head: ["infinito", "indicativo (er)", "Konjunktiv I (er)", "Konjunktiv I (sie, plurale)"],
        rows: [
          ["sein", "er ist", "er sei", "sie seien"],
          ["haben", "er hat", "er habe", "sie hätten (Konjunktiv II)"],
          ["werden", "er wird", "er werde", "sie würden (Konjunktiv II)"],
          ["wissen", "er weiß", "er wisse", "sie wüssten (Konjunktiv II)"],
          ["können", "er kann", "er könne", "sie könnten (Konjunktiv II)"]
        ]
      },
      examples: [
        { tr: "Il ministro ha detto di essere soddisfatto del risultato.", note: "er sei: Konjunktiv I di sein" },
        { tr: "La testimone ha dichiarato di non aver visto niente.", note: "passato: habe + participio" },
        { tr: "Secondo la polizia il conducente avrebbe guidato troppo veloce.", note: "laut + Konjunktiv I, come il condizionale giornalistico" },
        { tr: "Il portavoce ha sottolineato che l'azienda non taglierà posti di lavoro.", note: "futuro: werde + infinito" },
        { tr: "Hanno detto di non avere tempo.", note: "sie haben coincide con l'indicativo: hätten" },
        { tr: "Sostiene di non saperne niente.", note: "er wisse: Konjunktiv I di wissen" }
      ]
    },
    vocab: [
      "la dichiarazione, la deposizione",
      "il testimone",
      "la testimone",
      "il portavoce",
      "la notizia (breve)",
      "il resoconto, il rapporto",
      "sostenere, affermare",
      "dichiarare, spiegare",
      "sottolineare",
      "riferire, riportare (über + accusativo: su)",
      "secondo (+ dativo o genitivo)",
      "presunto, a quanto pare"
    ],
    exercises: [
      {
        q: "Come riporta un giornale «Sono malata», detto da lei?",
        opts: [
          "Sie sagte, sie sei krank.",
          "Sie sagte, sie wäre krank gewesen.",
          "Sie sagte, sie seien krank."
        ],
        why: "Konjunktiv I di <i>sein</i> alla terza persona singolare: <b>sie sei</b>. Il tempo non si sposta: <i>wäre krank gewesen</i> parlerebbe del passato, <i>seien</i> è plurale."
      },
      {
        q: "Qual è il Konjunktiv I di haben alla terza persona singolare?",
        opts: [
          "er habe",
          "er hat",
          "er hatte"
        ],
        why: "Tema dell'infinito <i>hab-</i> + <i>-e</i>: <b>er habe</b>. <i>hat</i> è l'indicativo presente, <i>hatte</i> il Präteritum."
      },
      {
        q: "Completa: «Sie sagten, sie ___ keine Zeit.»",
        opts: [
          "hätten",
          "haben",
          "hatten"
        ],
        why: "Il Konjunktiv I <i>sie haben</i> coincide con l'indicativo, quindi si usa il Konjunktiv II: <b>hätten</b>. <i>hatten</i> è il Präteritum."
      },
      {
        q: "Completa: «Der Minister sagte, er ___ zufrieden.»",
        hint: "Konjunktiv I di sein, er",
        why: "<b>sei</b>: Konjunktiv I di <i>sein</i>, la forma tipica dei giornali."
      },
      {
        q: "Completa: «Die Zeugin erklärte, sie ___ nichts gesehen.»",
        hint: "Konjunktiv I di haben, sie (lei)",
        why: "<b>habe</b>: il passato del Konjunktiv I si forma con <i>habe</i> + participio."
      },
      {
        q: "Completa la frase.",
        tr: "Sostiene di non saperne niente.",
        why: "<i>Er behauptet, er wisse von nichts</i>: <i>wisse</i> è il Konjunktiv I di <i>wissen</i>; <i>von nichts wissen</i> significa «non saperne niente»."
      },
      {
        q: "Abbina ogni verbo al suo significato.",
        pairs: [
          "sostenere, affermare",
          "sottolineare",
          "riferire, riportare",
          "dichiarare, spiegare"
        ]
      },
      {
        q: "Metti in ordine le parole.",
        tr: "Secondo la polizia il conducente avrebbe guidato troppo veloce.",
        why: "<i>Laut Polizei sei der Fahrer zu schnell gefahren.</i> <i>Laut Polizei</i> occupa il primo posto, poi il verbo <i>sei</i>, il participio <i>gefahren</i> in fondo."
      },
      {
        q: "Traduci per un articolo: «Il portavoce ha detto che l'azienda non taglierà posti di lavoro.» (Stellen streichen)",
        why: "<i>Der Sprecher sagte, die Firma werde keine Stellen streichen</i>: futuro del Konjunktiv I con <i>werde</i>. Con <i>dass</i> il verbo va in fondo: <i>..., dass die Firma keine Stellen streichen werde</i>."
      },
      {
        tr: "La polizia ha comunicato che l'incidente sarebbe avvenuto verso le otto. Un testimone ha riferito che il conducente non avrebbe frenato.",
        why: "In <i>teilte ... mit</i> la particella va in fondo; in <i>Zeuge</i> la <b>Z</b> è [ts] e la <b>eu</b> è [ɔʏ]; in <i>gebremst</i> la <b>e</b> è breve."
      },
      {
        tr: "La portavoce ha dichiarato che il problema nel frattempo è stato risolto.",
        why: "In <i>Sprecherin</i> la <b>sp</b> iniziale è [ʃp]; in <i>inzwischen</i> la <b>z</b> è [ts] e la <b>sch</b> è [ʃ]; in <i>gelöst</i> la <b>ö</b> è lunga."
      }
    ]
  },
  "lesson:b2-u05-l2": {
    theme: "Verbali e conferenze stampa",
    title: "Tempo, luogo, persona",
    objectives: [
      "spostare persona, tempo e luogo nel discorso indiretto",
      "mantenere il tempo della frase diretta nel Konjunktiv I",
      "usare am Tag davor, am nächsten Tag, dort",
      "riportare una conferenza stampa o un'intervista"
    ],
    theory: [
      {
        h: "Che cosa cambia",
        p: "Quando si riferiscono le parole di un altro cambiano la <strong>persona</strong> (<em>ich → er/sie, mein → sein/ihr</em>), il <strong>tempo</strong> espresso con avverbi (<em>heute → an diesem Tag, morgen → am nächsten Tag / am folgenden Tag, gestern → am Tag davor / am Vortag, nächste Woche → in der folgenden Woche</em>) e il <strong>luogo</strong> (<em>hier → dort</em>). „Ich komme morgen.“ → <em>Er sagte, er komme am nächsten Tag.</em> „Das ist mein Auto.“ → <em>Er sagte, das sei sein Auto.</em>"
      },
      {
        h: "Che cosa non cambia",
        p: "Il <strong>tempo verbale</strong> resta quello della frase diretta: cambia solo il modo. Presente → Konjunktiv I presente („Ich kenne ihn nicht.“ → <em>sie kenne ihn nicht</em>); passato → Konjunktiv I passato („Ich war gestern hier.“ → <em>sie sei am Tag davor dort gewesen</em>); futuro → <em>werde</em> + infinito („Ich werde anrufen.“ → <em>er werde anrufen</em>)."
      },
      {
        contrast: "L'italiano sposta il tempo verbale: <em>«Lo conosco»</em> diventa <em>disse che lo conosceva</em>, <em>«Ero qui ieri»</em> diventa <em>disse che era stata lì il giorno prima</em>, <em>«Chiamerò»</em> diventa <em>disse che avrebbe chiamato</em>. Il tedesco no: <em>sie kenne</em>, <em>sie sei ... gewesen</em>, <em>er werde anrufen</em>. Gli spostamenti di persona, tempo e luogo, invece, sono gli stessi dell'italiano."
      },
      {
        trap: "Non trasformare il futuro in un Konjunktiv II passato per imitare <em>avrebbe chiamato</em>: <em>er wäre angerufen worden</em> o <em>er hätte angerufen</em> dicono altro. Il futuro riferito è <em>er werde anrufen</em> (o, al plurale, <em>sie würden anrufen</em>)."
      },
      {
        tip: "Prima di riportare una frase, sottolinea nella frase diretta i pronomi e gli avverbi di tempo e luogo: sono le sole parole che cambiano, oltre al modo del verbo."
      }
    ],
    grammar: {
      title: "Spostamenti nel discorso indiretto",
      note: "Cambiano <b>persona</b>, <b>avverbi di tempo</b> e <b>di luogo</b>; il <b>tempo verbale</b> resta quello della frase diretta, solo al Konjunktiv I.",
      table: {
        head: ["discorso diretto", "discorso indiretto"],
        rows: [
          ["heute", "an diesem Tag"],
          ["morgen", "am nächsten Tag, am folgenden Tag"],
          ["gestern", "am Tag davor, am Vortag"],
          ["nächste Woche", "in der folgenden Woche"],
          ["hier", "dort"]
        ]
      },
      examples: [
        { tr: "Ha detto che sarebbe venuto il giorno dopo.", note: "«Ich komme morgen.»: presente → Konjunktiv I presente" },
        { tr: "Ha detto che era stata lì il giorno prima.", note: "«Ich war gestern hier.»: passato → sei ... gewesen" },
        { tr: "Hanno detto che quel giorno non avevano tempo.", note: "«Wir haben heute keine Zeit.»: hätten al posto di haben" },
        { tr: "Ha detto che avrebbe chiamato la settimana successiva.", note: "«Ich werde nächste Woche anrufen.»: werde + infinito" },
        { tr: "Ha detto che quella era la sua macchina.", note: "mein → sein" },
        { tr: "Ha detto che non lo conosceva.", note: "«Ich kenne ihn nicht.»: kenne" }
      ]
    },
    vocab: [
      "il giorno prima, la vigilia",
      "la comunicazione, l'avviso",
      "il verbale",
      "la conferenza stampa",
      "l'intervista",
      "la fonte",
      "comunicare",
      "assicurare",
      "citare",
      "riportare, riferire (wiedergeben: riprodurre parole altrui)",
      "seguente, successivo",
      "nel frattempo"
    ],
    exercises: [
      {
        q: "Una settimana dopo riferisci «Ich komme morgen» (lui). Quale frase è corretta?",
        opts: [
          "Er sagte, er komme am nächsten Tag.",
          "Er sagte, ich komme am nächsten Tag.",
          "Er sagte, er kam am nächsten Tag."
        ],
        why: "Cambiano la persona (<i>ich → er</i>) e il tempo (<i>morgen → am nächsten Tag</i>); il verbo va al Konjunktiv I presente: <b>komme</b>. <i>kam</i> è un Präteritum."
      },
      {
        q: "Come riferisci «Ich war gestern hier» (lei)?",
        opts: [
          "Sie sagte, sie sei am Tag davor dort gewesen.",
          "Sie sagte, sie war gestern hier.",
          "Sie sagte, sie sei am Tag davor hier."
        ],
        why: "Passato → <b>sei ... gewesen</b>; <i>gestern → am Tag davor</i>, <i>hier → dort</i>. La terza frase ha perso il passato."
      },
      {
        q: "Come riferisci «Das ist mein Auto» (lui)?",
        opts: [
          "Er sagte, das sei sein Auto.",
          "Er sagte, das sei mein Auto.",
          "Er sagte, das ist sein Auto sei."
        ],
        why: "Il possessivo cambia con la persona: <i>mein → sein</i>; il verbo va al Konjunktiv I: <b>sei</b>."
      },
      {
        q: "«Ich kenne ihn nicht.» → «Sie sagte, sie ___ ihn nicht.»",
        hint: "Konjunktiv I di kennen, sie (lei)",
        why: "<b>kenne</b>: tema <i>kenn-</i> + <i>-e</i>. Il tempo resta presente."
      },
      {
        q: "«Wir haben heute keine Zeit.» → «Sie sagten, sie ___ an diesem Tag keine Zeit.»",
        hint: "plurale: il Konjunktiv I coincide con l'indicativo",
        why: "<b>hätten</b>: <i>sie haben</i> sarebbe uguale all'indicativo, quindi Konjunktiv II. E <i>heute → an diesem Tag</i>."
      },
      {
        q: "Completa la frase.",
        tr: "«Ich werde nächste Woche anrufen.» → Ha detto che avrebbe chiamato la settimana successiva.",
        why: "<i>Er sagte, er werde in der folgenden Woche anrufen</i>: il futuro riferito è <i>werde</i> + infinito, non un condizionale passato come in italiano."
      },
      {
        q: "Quali frasi riportano correttamente, nello stile di un giornale, «Ich bin müde» detto da lei?",
        opts: [
          "Sie sagte, sie sei müde.",
          "Sie sagte, dass sie müde sei.",
          "Sie sagte, ich sei müde.",
          "Sie sagte, dass sie sei müde."
        ],
        why: "Le prime due sono giuste: senza <i>dass</i> il verbo sta in seconda posizione, con <i>dass</i> va in fondo. La terza non cambia la persona, la quarta non manda il verbo in fondo dopo <i>dass</i>."
      },
      {
        q: "Metti in ordine le parole.",
        tr: "Ha detto che era stata lì il giorno prima.",
        why: "<i>Sie sagte, sie sei am Tag davor dort gewesen.</i> <i>sei</i> in seconda posizione, il participio <i>gewesen</i> in fondo."
      },
      {
        q: "Traduci in stile giornalistico: «Ha detto che aveva visto il film il giorno prima.» (lui)",
        why: "<i>Er sagte, er habe den Film am Tag davor gesehen</i> (o <i>am Vortag</i>): passato del Konjunktiv I, senza lo spostamento di tempo dell'italiano."
      },
      {
        tr: "Alla conferenza stampa la sindaca ha comunicato che il ponte sarebbe stato riaperto il lunedì successivo. Ha assicurato che nel frattempo tutti i lavori erano stati conclusi.",
        why: "In <i>Bürgermeisterin</i> l'accento cade su <b>Bür</b>; in <i>versicherte</i> la <b>v</b> si legge [f]; in <i>abgeschlossen</i> la <b>b</b> davanti a <i>g</i> si legge [p]."
      },
      {
        tr: "Il ministro ha assicurato di non aver saputo niente del problema.",
        why: "In <i>Minister</i> l'accento cade su <b>nis</b>; in <i>Problem</i> l'accento cade su <b>blem</b>; in <i>gewusst</i> la <b>u</b> è breve."
      }
    ]
  },
  "lesson:b2-u05-l3": {
    theme: "Domande e ordini riferiti",
    title: "Mi ha chiesto se ...; mi ha detto di ...",
    objectives: [
      "riferire una domanda chiusa con ob",
      "riferire una domanda aperta con la parola interrogativa",
      "riferire un ordine con sollen",
      "riferire una richiesta cortese con bitten + zu + infinito"
    ],
    theory: [
      {
        h: "Domande riferite",
        p: "Una domanda <strong>chiusa</strong> (risposta sì o no) si riferisce con <strong>ob</strong> e il verbo in fondo: „Hast du Zeit?“ → <em>Er fragte, ob ich Zeit hätte.</em> Una domanda <strong>aperta</strong> conserva la parola interrogativa, e anche qui il verbo va in fondo: „Wann fährt der Zug?“ → <em>Sie fragte, wann der Zug fahre.</em> Oltre a <em>fragen</em> si usano <em>wissen wollen</em> e <em>sich erkundigen</em>: <em>Sie wollte wissen, ob ich mitkäme.</em>"
      },
      {
        h: "Ordini e richieste riferite",
        p: "Un ordine si riferisce con <strong>sollen</strong> al Konjunktiv I: „Warte hier!“ → <em>Sie sagte, ich solle hier warten.</em> <em>Der Arzt sagte, ich solle mehr schlafen.</em> Una richiesta cortese si riferisce spesso con <strong>bitten</strong> o <strong>auffordern</strong> + <em>zu</em> + infinito: „Rufen Sie mich bitte an!“ → <em>Er bat mich, ihn anzurufen.</em>"
      },
      {
        contrast: "L'italiano riferisce le domande con <em>se</em> + congiuntivo (<em>mi chiese se avessi tempo</em>) e gli ordini con <em>di</em> + infinito (<em>mi disse di aspettare</em>). Il tedesco usa <em>ob</em> + verbo in fondo, al Konjunktiv (<em>ob ich Zeit hätte</em>), e per l'ordine una frase con <em>sollen</em> (<em>ich solle warten</em>); la costruzione con l'infinito esiste, ma con <em>bitten</em> e <em>auffordern</em>, non con <em>sagen</em>."
      },
      {
        trap: "<em>ob</em> non è <em>dass</em>: <em>Er fragte, dass ich Zeit hätte</em> non ha senso. E dopo <em>ob</em> o la parola interrogativa il verbo va in fondo, non in seconda posizione come nella domanda diretta: <em>wann der Zug fahre</em>, non <em>wann fährt der Zug</em>."
      },
      {
        tip: "Per le domande riferite nel parlato basta spesso l'indicativo (<em>Er hat gefragt, ob ich Zeit habe</em>); il Konjunktiv è la forma dei testi scritti e dei resoconti."
      }
    ],
    grammar: {
      title: "Domande e ordini nel discorso indiretto",
      note: "<b>Domanda sì/no</b>: ob + verbo in fondo. <b>Domanda aperta</b>: parola interrogativa + verbo in fondo. <b>Ordine</b>: sollen al Konjunktiv I. <b>Richiesta</b>: bitten / auffordern + zu + infinito.",
      table: {
        head: ["discorso diretto", "discorso indiretto"],
        rows: [
          ["„Hast du Zeit?“", "Er fragte, ob ich Zeit hätte."],
          ["„Wann fährt der Zug?“", "Sie fragte, wann der Zug fahre."],
          ["„Warte hier!“", "Sie sagte, ich solle hier warten."],
          ["„Rufen Sie mich bitte an!“", "Er bat mich, ihn anzurufen."]
        ]
      },
      examples: [
        { tr: "Mi ha chiesto se avevo tempo.", note: "ob + verbo in fondo, Konjunktiv II al posto di ich habe" },
        { tr: "Ha chiesto quando partiva il treno.", note: "parola interrogativa + fahre" },
        { tr: "Mi ha detto di aspettare qui.", note: "ordine: ich solle" },
        { tr: "Mi ha chiesto di chiamarlo.", note: "bitten + zu + infinito" },
        { tr: "Voleva sapere se sarei venuto anch'io.", note: "wissen wollen, ob ..." },
        { tr: "Il medico mi ha detto di dormire di più.", note: "consiglio riferito con sollen" }
      ]
    },
    vocab: [
      "la richiesta, il favore",
      "l'istruzione, la direttiva",
      "l'ordine, il comando",
      "l'informazione (Auskunft geben: dare informazioni)",
      "l'interrogatorio",
      "esortare, invitare a",
      "chiedere, pregare (um + accusativo: qualcosa)",
      "informarsi (nach + dativo: su)",
      "voler sapere",
      "pretendere, esigere",
      "espressamente",
      "urgentemente"
    ],
    exercises: [
      {
        q: "Come riferisci «Hast du Zeit?» (lui a me)?",
        opts: [
          "Er fragte, ob ich Zeit hätte.",
          "Er fragte, dass ich Zeit hätte.",
          "Er fragte, hätte ich Zeit."
        ],
        why: "Domanda sì/no: <b>ob</b> + verbo in fondo. <i>dass</i> non introduce domande, e senza <i>ob</i> il verbo non può stare al primo posto."
      },
      {
        q: "Come riferisci «Warte hier!» (lei a me)?",
        opts: [
          "Sie sagte, ich solle hier warten.",
          "Sie sagte, ich warte hier.",
          "Sie sagte, warte ich hier."
        ],
        why: "L'ordine riferito si esprime con <b>sollen</b> al Konjunktiv I: <i>ich solle ... warten</i>."
      },
      {
        q: "Come riferisci «Wann fährt der Zug?» (lei)?",
        opts: [
          "Sie fragte, wann der Zug fahre.",
          "Sie fragte, wann fährt der Zug.",
          "Sie fragte, ob wann der Zug fahre."
        ],
        why: "La parola interrogativa resta e il verbo va in fondo: <b>wann der Zug fahre</b>. Non si aggiunge <i>ob</i>."
      },
      {
        q: "Completa: «Er fragte, ___ ich mitkommen wolle.»",
        hint: "domanda sì/no riferita",
        why: "<b>ob</b>: introduce una domanda chiusa riferita e manda il verbo in fondo."
      },
      {
        q: "Completa: «Der Arzt sagte, ich ___ mehr schlafen.»",
        hint: "sollen al Konjunktiv I, ich",
        why: "<b>solle</b>: Konjunktiv I di <i>sollen</i>, che qui si distingue dall'indicativo <i>ich soll</i>."
      },
      {
        q: "Completa la frase.",
        tr: "«Mi chiami, per favore!» → Mi ha chiesto di chiamarlo.",
        why: "<i>Er bat mich, ihn anzurufen</i>: <i>bat</i> è il Präteritum di <i>bitten</i>; con un verbo separabile <i>zu</i> sta tra particella e verbo."
      },
      {
        q: "Abbina ogni verbo al suo significato.",
        pairs: [
          "chiedere, pregare",
          "esortare, invitare a",
          "informarsi",
          "pretendere, esigere"
        ]
      },
      {
        q: "Metti in ordine le parole.",
        tr: "Voleva sapere se domani avevo tempo.",
        why: "<i>Sie wollte wissen, ob ich morgen Zeit hätte.</i> Dopo <i>ob</i> il verbo <i>hätte</i> chiude la frase."
      },
      {
        q: "Traduci: «Mi ha chiesto dove abitavo.» (lei)",
        why: "<i>Sie fragte mich, wo ich wohnte</i>, oppure <i>wo ich wohne</i>: il Konjunktiv I <i>ich wohne</i> coincide con l'indicativo, quindi nello scritto si preferisce <i>wohnte</i> o <i>wohnen würde</i>."
      },
      {
        tr: "Il poliziotto mi ha chiesto se avevo visto l'incidente. Poi mi ha invitato a mostrargli il documento.",
        why: "In <i>Polizist</i> l'accento cade su <b>zist</b>; in <i>forderte ... auf</i> la particella va in fondo; in <i>Ausweis</i> la <b>au</b> è [aʊ] e la <b>ei</b> è [aɪ]."
      },
      {
        tr: "Mi ha chiesto di richiamarla urgentemente.",
        why: "In <i>dringend</i> la <b>ng</b> è [ŋ] e la <b>d</b> finale si legge [t]; in <i>zurückzurufen</i> il secondo <i>zu</i> sta tra <i>zurück</i> e <i>rufen</i>."
      }
    ]
  },
  "lesson:b2-u05-test": {
    theme: "Verifica",
    title: "Test: Ha detto che era malata",
    objectives: [
      "verificare il Konjunktiv I, gli spostamenti nel discorso indiretto, ob e sollen"
    ],
    theory: [
      {
        p: "Dieci domande sull'intera unità. Si supera con il 70%. Non riguardare le lezioni mentre rispondi: se non ricordi qualcosa, è meglio tornare a ripassare."
      }
    ],
    exercises: [
      {
        q: "Completa: «Sie sagte, sie ___ keine Zeit.»",
        hint: "Konjunktiv I di haben, sie (lei)",
        why: "<b>habe</b>: alla terza persona singolare il Konjunktiv I si distingue dall'indicativo <i>hat</i>."
      },
      {
        q: "Completa: «Er erklärte, er ___ am Vortag in Berlin gewesen.»",
        hint: "Konjunktiv I di sein, er",
        why: "<b>sei</b>: passato del Konjunktiv I con <i>sein</i> + <i>gewesen</i>."
      },
      {
        q: "Completa: «Sie fragte, ___ ich Hunger hätte.»",
        hint: "domanda sì/no riferita",
        why: "<b>ob</b>, con il verbo <i>hätte</i> in fondo."
      },
      {
        q: "Qual è il Konjunktiv I di können alla terza persona singolare?",
        opts: [
          "er könne",
          "er kann",
          "er könnte"
        ],
        why: "Tema dell'infinito <i>könn-</i> + <i>-e</i>: <b>er könne</b>. <i>könnte</i> è il Konjunktiv II."
      },
      {
        q: "Come riferisci «Bring mir das Buch!» (lui a me)?",
        opts: [
          "Er sagte, ich solle ihm das Buch bringen.",
          "Er sagte, ich bringe ihm das Buch.",
          "Er sagte, bring ihm das Buch."
        ],
        why: "Ordine riferito: <b>sollen</b> al Konjunktiv I, e <i>mir</i> diventa <i>ihm</i>."
      },
      {
        q: "Completa: «Die Kinder sagten, sie ___ Hunger.»",
        opts: [
          "hätten",
          "haben",
          "habe"
        ],
        why: "Al plurale <i>sie haben</i> coincide con l'indicativo: si usa il Konjunktiv II <b>hätten</b>. <i>habe</i> è singolare."
      },
      {
        q: "Quali frasi riportano correttamente, nello stile di un giornale, «Ich kann nicht kommen» detto da lui?",
        opts: [
          "Er sagte, er könne nicht kommen.",
          "Er sagte, dass er nicht kommen könne.",
          "Er sagte, er kann nicht kommen könne.",
          "Er sagte, ich könne nicht kommen."
        ],
        why: "Le prime due sono giuste. La terza mescola indicativo e Konjunktiv, la quarta non cambia la persona."
      },
      {
        q: "Completa la frase.",
        tr: "«Ho spedito la lettera ieri.» → Ha detto di aver spedito la lettera il giorno prima.",
        why: "<i>Sie sagte, sie habe den Brief am Tag davor geschickt</i>: passato del Konjunktiv I e <i>gestern → am Tag davor</i>."
      },
      {
        tr: "La portavoce dell'azienda ha dichiarato che i clienti erano stati informati subito. Alla domanda se ci fossero altri problemi, ha risposto che non poteva ancora dirlo.",
        why: "In <i>Sprecherin</i> la <b>sp</b> è [ʃp]; in <i>informiert</i> l'accento cade su <b>miert</b>; in <i>weitere</i> la <b>ei</b> è [aɪ]."
      },
      {
        tr: "Il testimone ha detto di non aver mai visto prima quell'uomo.",
        why: "In <i>Zeuge</i> la <b>Z</b> è [ts]; in <i>zuvor</i> la <b>v</b> si legge [f]; in <i>gesehen</i> la <b>h</b> non si pronuncia."
      }
    ]
  }
});
