/* ============================================================
   Learner-language text (it) for data/core/b2-03.js, unit b2-u06.
   Keys point at ids in the neutral layer; arrays merge by index,
   so their length has to match core.
   Checked by scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("it", {
  "unit:b2-u06": {
    title: "Anche se piove",
    grammarNote: "Concessive con obwohl e obgleich · trotz + genitivo · trotzdem e dennoch con inversione · auch wenn e selbst wenn, anche con il Konjunktiv II · jedoch, allerdings, sondern, vielmehr, hingegen, zwar ... aber"
  },
  "lesson:b2-u06-l1": {
    theme: "Argomentare in un dibattito",
    title: "obwohl, obgleich, trotz",
    objectives: [
      "esprimere una concessione con obwohl e obgleich",
      "usare trotz con il genitivo",
      "usare trotzdem e dennoch nella frase principale",
      "scegliere fra congiunzione, preposizione e avverbio"
    ],
    theory: [
      {
        h: "Tre parole per la stessa idea",
        p: "Il tedesco esprime la concessione con tre strumenti diversi, e la differenza sta nella sintassi. <strong>obwohl</strong> (più formale: <em>obgleich</em>) è una congiunzione: apre una secondaria con il verbo in fondo. <em>Obwohl es regnet, gehen wir spazieren.</em> <strong>trotz</strong> è una preposizione con il genitivo e non regge un verbo: <em>Trotz des Regens gehen wir spazieren.</em> <strong>trotzdem</strong> e <strong>dennoch</strong> sono avverbi: stanno nella frase principale, e se occupano il primo posto il verbo viene subito dopo. <em>Es regnet. Trotzdem gehen wir spazieren.</em>"
      },
      {
        h: "Dopo la secondaria, l'inversione",
        p: "Quando la frase con <em>obwohl</em> viene prima, occupa da sola il primo posto della principale: il verbo coniugato segue subito, poi il soggetto. <em>Obwohl er müde war, <strong>arbeitete er</strong> weiter.</em> Se la secondaria va in fondo, la principale resta normale: <em>Er arbeitete weiter, obwohl er müde war.</em>"
      },
      {
        contrast: "In italiano <em>sebbene</em> e <em>benché</em> vogliono il congiuntivo (<em>sebbene piova</em>); <em>obwohl</em> vuole l'indicativo: <em>obwohl es regnet</em>. E <em>nonostante</em> fa sia da preposizione (<em>nonostante la pioggia</em>) sia da congiunzione (<em>nonostante piova</em>): in tedesco sono due parole diverse, <em>trotz des Regens</em> e <em>obwohl es regnet</em>."
      },
      {
        trap: "Nello scritto standard <em>trotzdem</em> è un avverbio, non una congiunzione: <em>Trotzdem gehen wir</em>, non <em>trotzdem wir gehen</em>. E <em>trotz</em> regge il genitivo: <em>trotz des Regens</em>. Nel parlato si sente anche <em>trotz dem Regen</em>, ma in un testo scritto si usa il genitivo."
      },
      {
        tip: "Nella declinazione forte il genitivo maschile e neutro aggiunge <em>-s</em> o <em>-es</em> anche al nome (i maschili deboli prendono invece <em>-(e)n</em>: <em>trotz des Studenten</em>): <em>trotz des Regens, trotz des schlechten Wetters</em>. Al femminile e al plurale non cambia niente sul nome: <em>trotz der Kälte, trotz der hohen Kosten</em>."
      }
    ],
    grammar: {
      title: "Concessione: congiunzione, preposizione, avverbio",
      note: "<b>obwohl / obgleich</b> + secondaria con verbo in fondo. <b>trotz</b> + genitivo, senza verbo. <b>trotzdem / dennoch</b> nella principale; al primo posto, il verbo segue subito.",
      table: {
        head: ["parola", "che cos'è", "posizione del verbo", "esempio"],
        rows: [
          ["obwohl, obgleich", "congiunzione", "in fondo alla secondaria", "obwohl es regnet"],
          ["trotz", "preposizione + genitivo", "nessun verbo", "trotz des Regens"],
          ["trotzdem, dennoch", "avverbio", "subito dopo, se sono al primo posto", "Trotzdem gehen wir."]
        ]
      },
      examples: [
        { tr: "Anche se piove, andiamo a fare una passeggiata.", note: "obwohl + indicativo, poi inversione: gehen wir" },
        { tr: "Andiamo a fare una passeggiata, anche se piove.", note: "secondaria in fondo: la principale resta normale" },
        { tr: "Piove. Ciononostante andiamo a fare una passeggiata.", note: "trotzdem al primo posto: gehen wir" },
        { tr: "Nonostante la pioggia andiamo a fare una passeggiata.", note: "trotz + genitivo: des Regens" },
        { tr: "Sebbene i costi siano aumentati, il prezzo resta invariato.", note: "obgleich: più formale di obwohl" },
        { tr: "Nonostante i costi elevati, la città ha portato avanti il progetto.", note: "genitivo plurale: der hohen Kosten" }
      ]
    },
    vocab: [
      "l'obiezione",
      "la contraddizione",
      "l'argomento (a sostegno di una tesi)",
      "il dibattito",
      "il compromesso",
      "lo svantaggio",
      "sebbene, anche se (+ indicativo)",
      "nonostante (+ genitivo)",
      "ciononostante, lo stesso",
      "tuttavia, ciononostante",
      "obiettare",
      "contraddire (+ dativo)"
    ],
    exercises: [
      {
        q: "Quale frase è corretta?",
        opts: [
          "Obwohl es regnet, gehen wir spazieren.",
          "Obwohl es regnet, wir gehen spazieren.",
          "Obwohl regnet es, gehen wir spazieren."
        ],
        why: "Con <i>obwohl</i> il verbo va in fondo alla secondaria (<i>es regnet</i>), e la principale che segue comincia con il verbo: <b>gehen wir</b>."
      },
      {
        q: "Quale forma è corretta in un testo scritto?",
        opts: [
          "trotz des Regens",
          "trotz der Regen",
          "trotz des Regen"
        ],
        why: "<i>trotz</i> regge il genitivo: <i>der Regen</i> diventa <b>des Regens</b>, con <i>-s</i> anche sul nome."
      },
      {
        q: "Quale frase è corretta?",
        opts: [
          "Es regnet. Trotzdem gehen wir spazieren.",
          "Es regnet. Trotzdem wir gehen spazieren.",
          "Es regnet. Trotzdem wir spazieren gehen."
        ],
        why: "<i>trotzdem</i> è un avverbio: al primo posto è seguito subito dal verbo coniugato, <b>gehen wir</b>."
      },
      {
        q: "Completa: «___ sie krank war, ging sie zur Arbeit.»",
        hint: "congiunzione concessiva, verbo in fondo",
        why: "<b>Obwohl</b> (o <i>obgleich</i>, <i>obschon</i>): apre la secondaria con il verbo <i>war</i> in fondo."
      },
      {
        q: "Completa: «Trotz ___ schlechten Wetters fand das Konzert statt.»",
        hint: "genitivo neutro",
        why: "<b>des</b>: <i>trotz</i> regge il genitivo, e <i>das Wetter</i> diventa <i>des schlechten Wetters</i>."
      },
      {
        q: "Completa la frase.",
        tr: "Il tempo era brutto. Ciononostante il concerto ha avuto luogo.",
        why: "<i>Trotzdem</i> (o <i>Dennoch</i>) al primo posto, poi il verbo <i>fand</i>; la particella di <i>stattfinden</i> va in fondo: <i>fand ... statt</i>."
      },
      {
        q: "Abbina ogni parola al suo significato.",
        pairs: [
          "l'obiezione",
          "la contraddizione",
          "il compromesso",
          "lo svantaggio"
        ]
      },
      {
        q: "Metti in ordine le parole.",
        tr: "Nonostante i costi elevati, la città ha portato avanti il progetto.",
        why: "<i>Trotz der hohen Kosten hat die Stadt das Projekt fortgesetzt.</i> Il complemento con <i>trotz</i> occupa il primo posto, poi il verbo <i>hat</i>, il participio in fondo."
      },
      {
        q: "Traduci: «Sebbene fosse stanco, ha continuato a lavorare.» (weiterarbeiten)",
        why: "<i>Obwohl er müde war, hat er weitergearbeitet</i> (o <i>arbeitete er weiter</i>): indicativo dopo <i>obwohl</i>, dove l'italiano vuole il congiuntivo <i>fosse</i>. Anche la secondaria in fondo è corretta."
      },
      {
        tr: "Sebbene gli affitti in città siano aumentati molto, molti giovani vogliono abitarci. Nonostante i prezzi alti, la domanda è grande.",
        why: "In <i>gestiegen</i> la <b>ie</b> è lunga; in <i>Nachfrage</i> l'accento cade su <b>Nach</b>; in <i>Leute</i> <b>eu</b> si pronuncia [ɔʏ]."
      },
      {
        tr: "Nonostante la pioggia, molte persone sono venute alla manifestazione.",
        why: "In <i>Regens</i> la <b>e</b> della prima sillaba è lunga; in <i>Demonstration</i> l'accento cade sull'ultima sillaba, <b>tion</b> [tsi̯oːn]."
      }
    ]
  },
  "lesson:b2-u06-l2": {
    theme: "Condizioni e posizioni",
    title: "auch wenn, selbst wenn",
    objectives: [
      "esprimere una concessione su un fatto possibile con auch wenn",
      "rafforzarla con selbst wenn",
      "unire concessione e ipotesi irreale con il Konjunktiv II",
      "distinguere obwohl da auch wenn"
    ],
    theory: [
      {
        h: "Fatto certo o caso possibile",
        p: "<strong>obwohl</strong> parla di un fatto: <em>Obwohl es regnet</em>, piove davvero. <strong>auch wenn</strong> va bene per un fatto e anche per un caso solo possibile: <em>Auch wenn es morgen regnet, fahren wir los</em>, forse pioverà, forse no. <strong>selbst wenn</strong> è più forte: «perfino se». Come con <em>obwohl</em>, la principale che segue comincia con il verbo: <em>Auch wenn du recht hast, <strong>solltest du</strong> höflich bleiben.</em>"
      },
      {
        h: "Con l'ipotesi irreale",
        p: "Se il caso è irreale, entra il <strong>Konjunktiv II</strong> in tutte e due le frasi: <em>Selbst wenn ich Zeit hätte, würde ich nicht mitkommen.</em> Al passato: <em>Selbst wenn sie gewonnen hätte, wäre sie nicht zufrieden gewesen.</em> Una costruzione vicina è <strong>wie ... auch</strong>, «per quanto»: <em>Wie schwer es auch sein mag, wir schaffen das.</em> Qui la principale di norma conserva il suo ordine: <em>wir schaffen</em>."
      },
      {
        contrast: "In italiano <em>anche se</em> copre tutti i casi e cambia solo il modo: <em>anche se piove</em> (fatto o possibilità), <em>anche se avessi tempo, non verrei</em> (irreale). In tedesco la scelta è doppia: la congiunzione (<em>obwohl</em> solo per i fatti, <em>auch wenn</em> e <em>selbst wenn</em> anche per le ipotesi) e il modo (indicativo, oppure Konjunktiv II per l'irreale)."
      },
      {
        trap: "<em>selbst</em> qui non significa «stesso»: <em>selbst wenn</em> è «perfino se». E dopo la secondaria non tornare all'ordine italiano: <em>Auch wenn es regnet, gehen wir</em>, non <em>Auch wenn es regnet, wir gehen</em>."
      },
      {
        tip: "Se puoi mettere «perfino» davanti al «se» senza cambiare il senso, <em>selbst wenn</em> è la scelta più naturale; altrimenti basta <em>auch wenn</em>."
      }
    ],
    grammar: {
      title: "auch wenn, selbst wenn e l'ipotesi irreale",
      note: "<b>obwohl</b>: un fatto. <b>auch wenn</b>: un fatto o un caso possibile. <b>selbst wenn</b>: «perfino se». Ipotesi irreale: <b>Konjunktiv II</b> in tutte e due le frasi.",
      table: {
        head: ["frase", "che cosa esprime"],
        rows: [
          ["Obwohl es regnet, gehen wir spazieren.", "fatto: piove davvero"],
          ["Auch wenn es morgen regnet, fahren wir los.", "caso possibile"],
          ["Selbst wenn ich Zeit hätte, würde ich nicht mitkommen.", "ipotesi irreale, Konjunktiv II"],
          ["Wie schwer es auch sein mag, wir schaffen das.", "«per quanto»: principale di norma senza inversione"]
        ]
      },
      examples: [
        { tr: "Anche se piove, andiamo a fare una passeggiata.", note: "auch wenn: fatto o possibilità" },
        { tr: "Anche se avessi tempo, non verrei.", note: "irreale: hätte ... würde" },
        { tr: "Anche se hai ragione, dovresti restare cortese.", note: "dopo la secondaria: solltest du" },
        { tr: "Partiamo domani, anche se il tempo è brutto.", note: "selbst wenn: perfino se" },
        { tr: "Per quanto possa essere difficile, ce la faremo.", note: "wie ... auch: la principale resta wir schaffen" },
        { tr: "Anche se avesse vinto, non sarebbe stata contenta.", note: "irreale al passato: hätte ... gewonnen, wäre ... gewesen" }
      ]
    },
    vocab: [
      "la condizione",
      "il presupposto, il requisito",
      "il rischio",
      "la decisione",
      "il punto di vista",
      "la maggioranza",
      "anche se",
      "perfino se",
      "perfino, addirittura",
      "ammettere",
      "cedere",
      "insistere (auf + dativo: su)"
    ],
    exercises: [
      {
        q: "Quale frase è corretta?",
        opts: [
          "Auch wenn es regnet, gehen wir spazieren.",
          "Auch wenn es regnet, wir gehen spazieren.",
          "Auch wenn regnet es, gehen wir spazieren."
        ],
        why: "Verbo in fondo nella secondaria (<i>es regnet</i>), poi la principale comincia con il verbo: <b>gehen wir</b>."
      },
      {
        q: "Quale frase esprime correttamente un'ipotesi irreale?",
        opts: [
          "Selbst wenn ich Zeit hätte, würde ich nicht mitkommen.",
          "Selbst wenn ich Zeit habe, würde ich nicht mitkommen.",
          "Selbst wenn hätte ich Zeit, würde ich nicht mitkommen."
        ],
        why: "Irreale: Konjunktiv II in tutte e due le frasi, <b>hätte ... würde</b>. La seconda mescola indicativo e Konjunktiv, la terza non porta il verbo in fondo."
      },
      {
        q: "Non sai ancora se domani pioverà. Quale frase va bene?",
        opts: [
          "Auch wenn es morgen regnet, fahren wir los.",
          "Obwohl es morgen regnet, fahren wir los.",
          "Trotz es morgen regnet, fahren wir los."
        ],
        why: "<b>auch wenn</b> va bene per un caso solo possibile; <i>obwohl</i> presenta la pioggia come un fatto certo. <i>trotz</i> è una preposizione e non apre una frase."
      },
      {
        q: "Completa: «___ wenn du recht hast, solltest du höflich bleiben.»",
        hint: "auch o selbst",
        why: "<b>Auch</b> o <b>Selbst</b>: <i>auch wenn</i> «anche se», <i>selbst wenn</i> «perfino se»."
      },
      {
        q: "Completa: «Selbst wenn ich das Geld hätte, ___ ich das Auto nicht kaufen.»",
        hint: "Konjunktiv II di werden, ich",
        why: "<b>würde</b>: nell'ipotesi irreale anche la principale va al Konjunktiv II, <i>würde ... kaufen</i>."
      },
      {
        q: "Completa la frase.",
        tr: "Partiamo domani, anche se il tempo è brutto.",
        why: "<i>Wir fahren morgen los, auch wenn das Wetter schlecht ist</i> (o <i>selbst wenn</i>): il verbo <i>ist</i> va in fondo alla secondaria."
      },
      {
        q: "Quali frasi sono corrette?",
        opts: [
          "Auch wenn es spät ist, rufe ich dich an.",
          "Selbst wenn er fragt, sage ich nichts.",
          "Auch wenn es spät ist, ich rufe dich an.",
          "Selbst wenn fragt er, sage ich nichts."
        ],
        why: "Le prime due. La terza non mette il verbo al primo posto dopo la secondaria, la quarta non porta il verbo in fondo alla secondaria."
      },
      {
        q: "Metti in ordine le parole.",
        tr: "Anche se avessi tempo, non verrei.",
        why: "<i>Selbst wenn ich Zeit hätte, würde ich nicht mitkommen.</i> <i>hätte</i> chiude la secondaria, <i>würde</i> apre la principale, l'infinito <i>mitkommen</i> va in fondo."
      },
      {
        q: "Traduci: «Anche se ha ragione, non dovrebbe gridare.» (lui; schreien)",
        why: "<i>Auch wenn er recht hat, sollte er nicht schreien</i> (anche <i>selbst wenn</i>, o <i>Recht</i> con la maiuscola): dopo la secondaria, il verbo <i>sollte</i> viene subito."
      },
      {
        tr: "Anche se la maggioranza era contraria, il sindaco ha mantenuto il suo piano. Anche se ci sono proteste, non vuole cedere.",
        why: "In <i>Mehrheit</i> la <b>e</b> è lunga e la <b>h</b> di <i>-heit</i> si pronuncia [h]; in <i>festgehalten</i> l'accento cade su <b>fest</b>; in <i>Proteste</i> l'accento cade su <b>tes</b>."
      },
      {
        tr: "Anche se avessi più soldi, continuerei ad abitare qui.",
        why: "In <i>hätte</i> la <b>ä</b> è breve; in <i>würde</i> la <b>ü</b> è breve; in <i>wohnen</i> la <b>o</b> è lunga e la <b>h</b> è muta."
      }
    ]
  },
  "lesson:b2-u06-l3": {
    theme: "Correggere e precisare",
    title: "jedoch, allerdings, sondern, vielmehr",
    objectives: [
      "contrapporre due idee con jedoch e hingegen",
      "limitare un'affermazione con allerdings e zwar ... aber",
      "correggere un'affermazione con sondern e vielmehr",
      "riconoscere i connettivi tipici dello scritto"
    ],
    theory: [
      {
        h: "Contrapporre e limitare",
        p: "<strong>jedoch</strong> («tuttavia») è tipico dello scritto: si comporta come un avverbio e può stare al primo posto, con il verbo subito dopo, oppure dentro la frase. <em>Der Vorschlag klingt gut. Er ist jedoch zu teuer.</em> <strong>allerdings</strong> («però, a dire il vero») limita quanto si è appena detto: <em>Die Wohnung ist schön, allerdings ziemlich laut.</em> <strong>hingegen</strong> («invece») contrappone due elementi o due situazioni: <em>Ich trinke Kaffee, meine Frau hingegen trinkt Tee.</em> <strong>zwar ... aber</strong> concede e poi obietta: <em>Das Auto ist zwar alt, aber es fährt gut.</em>"
      },
      {
        h: "Correggere",
        p: "<strong>sondern</strong> segue una negazione (<em>nicht</em>, <em>kein</em>) e mette al posto dell'elemento negato quello giusto: <em>Das Problem ist nicht das Geld, sondern die Zeit.</em> Fa parte anche di <em>nicht nur ... sondern auch</em>: <em>Er ist nicht nur Arzt, sondern auch Musiker.</em> <strong>vielmehr</strong> («anzi, piuttosto») corregge con più forza, spesso in una frase nuova: <em>Das war kein Zufall. Vielmehr hatte er alles geplant.</em>"
      },
      {
        contrast: "L'italiano usa <em>ma</em> sia per aggiungere un'obiezione sia per correggere: <em>non è ricco, ma è felice</em> e <em>non è ricco, ma povero</em>. Il tedesco li distingue: <em>Er ist nicht reich, aber glücklich</em> (tutte e due le cose sono vere) e <em>Er ist nicht reich, sondern arm</em> (la seconda sostituisce la prima). E <em>non solo ... ma anche</em> si rende di norma con <em>nicht nur ... sondern auch</em>."
      },
      {
        trap: "<em>sondern</em> introduce una correzione dopo una negazione (<em>Er kommt nicht heute, sondern morgen</em>); nella struttura <em>nicht nur ..., sondern auch</em> aggiunge invece un secondo elemento. Se la prima affermazione resta vera e aggiungi un limite, serve <em>aber</em> o <em>allerdings</em>: <em>Das Essen war gut, aber teuer.</em>"
      },
      {
        tip: "Prova a riformulare con «invece»: se «non oggi, invece domani» funziona, ti serve <em>sondern</em>. Se invece funziona «però», ti serve <em>aber</em> o <em>allerdings</em>."
      }
    ],
    grammar: {
      title: "Connettivi per contrapporre, limitare e correggere",
      note: "<b>jedoch</b>, <b>allerdings</b>, <b>hingegen</b>, <b>vielmehr</b> si comportano come avverbi: al primo posto, il verbo segue subito. <b>sondern</b> dopo una negazione, per correggere, e in <i>nicht nur ... sondern auch</i>.",
      table: {
        head: ["connettivo", "significato", "uso"],
        rows: [
          ["jedoch", "tuttavia", "scritto; al primo posto o dentro la frase"],
          ["allerdings", "però, a dire il vero", "limita quanto si è appena detto"],
          ["hingegen", "invece", "contrappone due elementi o situazioni"],
          ["zwar ... aber", "è vero che ... ma", "concede e poi obietta"],
          ["sondern", "ma (al contrario)", "dopo nicht o kein, corregge"],
          ["vielmehr", "anzi, piuttosto", "corregge con più forza, spesso in una frase nuova"]
        ]
      },
      examples: [
        { tr: "La proposta sembra buona. Tuttavia è troppo cara.", note: "jedoch dentro la frase" },
        { tr: "L'appartamento è bello, però piuttosto rumoroso.", note: "allerdings: limita" },
        { tr: "Il problema non è il denaro, ma il tempo.", note: "nicht ..., sondern: correzione" },
        { tr: "Non è solo medico, ma anche musicista.", note: "nicht nur ... sondern auch" },
        { tr: "Non è stato un caso. Anzi, aveva pianificato tutto.", note: "vielmehr al primo posto: hatte er" },
        { tr: "Io bevo caffè, mia moglie invece beve tè.", note: "hingegen: contrapposizione fra due elementi" }
      ]
    },
    vocab: [
      "la tesi",
      "l'affermazione",
      "la prova, il riscontro",
      "la conclusione (che si trae)",
      "il contrasto, l'opposto (im Gegensatz zu: a differenza di)",
      "la limitazione, la riserva",
      "tuttavia",
      "però, a dire il vero",
      "ma (dopo una negazione)",
      "anzi, piuttosto",
      "invece",
      "è vero che (zwar ... aber)"
    ],
    exercises: [
      {
        q: "Completa: «Er kommt nicht heute, ___ morgen.»",
        opts: [
          "sondern",
          "denn",
          "obwohl"
        ],
        why: "Dopo la negazione, <b>sondern</b> mette l'informazione giusta al posto di quella negata: non oggi, invece domani. <i>denn</i> introduce una causa, <i>obwohl</i> una secondaria con il verbo in fondo."
      },
      {
        q: "Completa: «Das Essen war gut, ___ etwas teuer.»",
        opts: [
          "allerdings",
          "sondern",
          "vielmehr"
        ],
        why: "<b>allerdings</b> limita un'affermazione che resta vera. <i>sondern</i> e <i>vielmehr</i> correggono, e qui non c'è niente da correggere."
      },
      {
        q: "Completa: «Sie spricht nicht nur Deutsch, ___ auch Japanisch.»",
        opts: [
          "sondern",
          "denn",
          "vielmehr"
        ],
        why: "<i>nicht nur ... <b>sondern</b> auch</i> corrisponde a «non solo ... ma anche»."
      },
      {
        q: "Completa: «Er ist nicht krank, ___ nur müde.»",
        hint: "correzione dopo una negazione",
        why: "<b>sondern</b>: non è malato, è invece solo stanco."
      },
      {
        q: "Completa: «Das Auto ist ___ alt, aber es fährt gut.»",
        hint: "è vero che ... ma",
        why: "<b>zwar</b> ... <i>aber</i>: concedi che è vecchia, poi aggiungi l'obiezione."
      },
      {
        q: "Completa la frase.",
        tr: "Non è stato un caso. Anzi, aveva pianificato tutto.",
        why: "<i>Vielmehr hatte er alles geplant</i>: <i>vielmehr</i> al primo posto, poi il verbo <i>hatte</i>, il participio <i>geplant</i> in fondo."
      },
      {
        q: "Abbina ogni connettivo al suo significato.",
        pairs: [
          "tuttavia",
          "però, a dire il vero",
          "anzi, piuttosto",
          "invece (in una contrapposizione)"
        ]
      },
      {
        q: "Metti in ordine le parole.",
        tr: "Io bevo caffè, mia moglie invece beve tè.",
        why: "<i>Ich trinke Kaffee, meine Frau hingegen trinkt Tee</i>: <i>hingegen</i> dopo il soggetto; va bene anche dopo il verbo, <i>meine Frau trinkt hingegen Tee</i>."
      },
      {
        q: "Traduci: «Il problema non è il denaro, ma il tempo.»",
        why: "<i>Das Problem ist nicht das Geld, sondern die Zeit</i>: dopo la negazione, la correzione vuole <i>sondern</i>, non <i>aber</i>."
      },
      {
        tr: "È vero che lo studio mostra dei progressi, però i risultati non sono ancora sicuri. Il problema non è la tecnica, ma la mancanza di soldi.",
        why: "In <i>Fortschritte</i> l'accento cade su <b>Fort</b>; in <i>Ergebnisse</i> l'accento cade su <b>geb</b>; in <i>Technik</i> <b>ch</b> si pronuncia [ç]."
      },
      {
        tr: "Non è una questione di soldi, anzi è una questione di rispetto.",
        why: "In <i>vielmehr</i> l'accento cade su <b>mehr</b>; in <i>Respekt</i> l'accento cade su <b>spekt</b>; in <i>geht</i> la <b>h</b> è muta."
      }
    ]
  },
  "lesson:b2-u06-test": {
    theme: "Verifica",
    title: "Test: Anche se piove",
    objectives: [
      "verificare le concessive e i connettivi, e ripassare Konjunktiv II, Konjunktiv I e passivo del livello B2"
    ],
    theory: [
      {
        p: "Dodici domande sull'unità e su tutto il livello B2. Si supera con il 70%. Non riguardare le lezioni mentre rispondi: se non ricordi qualcosa, meglio tornare indietro e ripassare."
      }
    ],
    exercises: [
      {
        q: "Completa: «___ des Regens fand das Fest statt.»",
        hint: "preposizione concessiva + genitivo",
        why: "<b>Trotz</b>: preposizione concessiva con il genitivo <i>des Regens</i>."
      },
      {
        q: "Completa: «Wenn ich mehr Zeit gehabt ___, wäre ich gekommen.»",
        hint: "Konjunktiv II di haben, ich",
        why: "<b>hätte</b>: ipotesi irreale al passato, <i>hätte ... gehabt</i>."
      },
      {
        q: "Completa, in stile giornalistico: «Sie erklärte, sie ___ das Problem nicht gekannt.»",
        hint: "Konjunktiv I di haben, sie (lei)",
        why: "<b>habe</b>: discorso indiretto al passato, <i>habe ... gekannt</i>."
      },
      {
        q: "Completa al passivo, al Präteritum: «Die Brücke ___ im Jahr 1900 gebaut.»",
        hint: "Präteritum di werden, terza persona singolare",
        why: "<b>wurde</b>: passivo con <i>werden</i> + participio, <i>wurde ... gebaut</i>."
      },
      {
        q: "Completa: «Obwohl er krank war, ...»",
        opts: [
          "ging er zur Arbeit.",
          "er ging zur Arbeit.",
          "ging zur Arbeit er."
        ],
        why: "Dopo la secondaria la principale comincia con il verbo: <b>ging er</b>."
      },
      {
        q: "Quale frase è corretta?",
        opts: [
          "Das Formular muss heute ausgefüllt werden.",
          "Das Formular muss heute ausgefüllt worden.",
          "Das Formular muss heute ausfüllen werden."
        ],
        why: "Passivo con il modale: modale + participio + <b>werden</b>. <i>worden</i> si usa nei tempi composti, non dopo un modale al presente."
      },
      {
        q: "Completa: «Er tut so, als ob er nichts ___.»",
        opts: [
          "wüsste",
          "gewusst",
          "wissen"
        ],
        why: "Nelle comparative irreali con <i>als ob</i> si usa normalmente il Konjunktiv II: fra queste opzioni <b>wüsste</b> è l'unica corretta."
      },
      {
        q: "Quali frasi sono corrette?",
        opts: [
          "Auch wenn es regnet, gehen wir spazieren.",
          "Trotz des Regens gehen wir spazieren.",
          "Obwohl es regnet, wir gehen spazieren.",
          "Trotz es regnet, gehen wir spazieren."
        ],
        why: "Le prime due. La terza non mette il verbo al primo posto dopo la secondaria; nella quarta <i>trotz</i> è usato come congiunzione, ma è una preposizione."
      },
      {
        q: "Completa la frase.",
        tr: "Anche se avessi tempo, non verrei.",
        why: "<i>Selbst wenn ich Zeit hätte, würde ich nicht mitkommen</i>: Konjunktiv II in tutte e due le frasi."
      },
      {
        q: "Traduci: «Nonostante il traffico, siamo arrivati puntuali.» (der Verkehr)",
        why: "<i>Trotz des Verkehrs sind wir pünktlich angekommen</i>: <i>trotz</i> + genitivo; vanno bene anche <i>kamen wir ... an</i> e la costruzione con <i>wir</i> al primo posto."
      },
      {
        tr: "Sebbene il governo avesse promesso nuove leggi, per molto tempo non è cambiato niente. I critici hanno detto che i cittadini non erano stati presi sul serio.",
        why: "In <i>Regierung</i> l'accento cade su <b>gie</b>; in <i>versprochen</i> la <b>v</b> si pronuncia [f]; in <i>Kritiker</i> l'accento cade su <b>Kri</b>."
      },
      {
        tr: "Anche se i costi sono alti, il progetto dovrebbe essere portato avanti.",
        why: "In <i>Kosten</i> la <b>o</b> è breve; in <i>Projekt</i> l'accento cade su <b>jekt</b>; in <i>fortgesetzt</i> l'accento cade su <b>fort</b>."
      }
    ]
  }
});
