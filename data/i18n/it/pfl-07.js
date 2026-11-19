/* ============================================================
   Learner-language text (it) for data/core/pfl-07.js, unit pfl-u07.
   Keys point at ids in the neutral layer; arrays merge by index,
   so their length has to match core.
   Checked by scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("it", {
  "unit:pfl-u07": {
    title: "Parlare con pazienti e familiari",
    grammarNote: "spiegare in parole semplici con le subordinate con dass · le particelle doch, mal, ja · le richieste cortesi al Konjunktiv II · il discorso indiretto al Konjunktiv I · frasi brevi con il verbo al secondo posto per le persone con demenza"
  },
  "lesson:pfl-u07-l1": {
    theme: "Spiegare in parole semplici",
    title: "Spiegare in modo semplice",
    objectives: [
      "spiegare al paziente che cosa succederà, senza termini tecnici",
      "usare le subordinate con dass: das heißt, dass...; wichtig ist, dass...",
      "verificare che il paziente abbia capito",
      "rimandare al medico le domande sulla diagnosi: Das bespricht der Arzt mit Ihnen"
    ],
    theory: [
      {
        h: "Due registri, una spiegazione",
        p: "Tra colleghi si dice <em>Gastroskopie</em>, al paziente si dice <em>Magenspiegelung</em>. Lo stesso vale per molte parole della lezione: la <strong>Diagnose</strong> per il paziente è <em>was ich habe</em>, la <strong>Prognose</strong> è <em>wie es weitergeht</em>. Per spiegare in modo semplice: frasi brevi, una informazione alla volta, parole tedesche di tutti i giorni al posto di quelle latine. Poi si controlla che il paziente abbia capito, non chiedendo <em>Haben Sie verstanden?</em> (quasi tutti rispondono di sì), ma facendogli ripetere con parole sue: <em>Können Sie mit Ihren eigenen Worten wiederholen, was morgen passiert?</em>"
      },
      {
        h: "Le subordinate con dass",
        p: "La spiegazione si costruisce spesso con <strong>dass</strong>: <em>Das heißt, dass...</em>, <em>Wichtig ist, dass...</em>, <em>Ich verstehe, dass...</em>, <em>Ich sage dem Arzt, dass...</em> Dopo <em>dass</em> il verbo coniugato va <strong>in fondo</strong>: <em>dass der Arzt in Ihren Magen <b>schaut</b></em>, <em>dass Sie noch Fragen <b>haben</b></em>. Con un tempo composto in fondo va l'ausiliare, dopo il participio: <em>dass Sie alles verstanden <b>haben</b></em>. Davanti a <em>dass</em> c'è sempre la virgola."
      },
      {
        contrast: "In italiano molti termini tecnici sono anche parole di tutti i giorni: un paziente italiano dice da sé «gastroscopia», «ecografia», «ipertensione». In tedesco no: il paziente dice <em>Magenspiegelung</em>, <em>Ultraschall</em>, <em>Bluthochdruck</em>, e la parola latina che a te sembra la più chiara per lui può essere opaca. Spiegare in modo semplice, in tedesco, vuol dire tradurre dal latino al tedesco, non solo accorciare la frase. Anche la sintassi cambia: in italiano «che» non sposta il verbo («Le dico che il medico guarda nello stomaco»), in tedesco dopo <em>dass</em> il verbo va in fondo: <em>dass der Arzt in Ihren Magen schaut</em>."
      },
      {
        trap: "<em>die Aufklärung</em> in reparto non è un «chiarimento» qualsiasi: è il colloquio con cui, di regola, il medico informa il paziente prima di un esame o di un intervento, e dopo il quale il paziente dà il consenso. Tu puoi ripetere in parole semplici che cosa succede e come prepararsi, ma il colloquio informativo e la diagnosi restano del medico: <em>Das bespricht der Arzt mit Ihnen.</em> Attenzione anche alla grafia: <em>das</em> con una s è articolo o pronome (<em>Das heißt...</em>), <em>dass</em> con due s è la congiunzione (<em>..., dass der Arzt...</em>)."
      },
      {
        tip: "Quando il paziente fa una domanda che non spetta a te, non lasciarla cadere: rimandala e prendi un impegno che puoi mantenere. <em>Das bespricht der Arzt mit Ihnen. Ich sage ihm, dass Sie noch Fragen haben.</em> Così il paziente sa che la domanda è arrivata, e tu non hai detto niente che non potevi dire."
      }
    ],
    grammar: {
      title: "Spiegare con dass",
      note: "Frase principale, virgola, <b>dass</b>, e il verbo coniugato <b>in fondo</b>. Con un tempo composto: participio e poi ausiliare.",
      table: {
        head: ["frase principale", "dass + verbo in fondo"],
        rows: [
          ["Das heißt,", "dass der Arzt in Ihren Magen schaut."],
          ["Wichtig ist,", "dass Sie ab Mitternacht nichts mehr essen."],
          ["Ich sage dem Arzt,", "dass Sie noch Fragen haben."],
          ["Ich möchte sicher sein,", "dass Sie alles verstanden haben."]
        ]
      },
      examples: [
        { tr: "Domani mattina Le faranno una gastroscopia.", note: "Magenspiegelung: la parola del paziente per Gastroskopie" },
        { tr: "Vuol dire che il medico guarda nel Suo stomaco con una piccola telecamera.", note: "dass: il verbo schaut va in fondo" },
        { tr: "È importante che da mezzanotte non mangi più niente.", note: "Wichtig ist, dass...: per l'informazione da non dimenticare" },
        { tr: "Dico al medico che ha ancora delle domande.", note: "dass: il verbo haben va in fondo" },
        { tr: "Voglio essere sicura che abbia capito tutto.", note: "tempo composto: verstanden haben, l'ausiliare per ultimo" },
        { tr: "Di questo parlerà con Lei il medico.", note: "la frase per le domande sulla diagnosi" }
      ]
    },
    vocab: [
      "la diagnosi",
      "la prognosi",
      "la visita, l'esame",
      "la gastroscopia (parola del paziente)",
      "la gastroscopia (termine tecnico)",
      "il colloquio informativo prima di un esame o di un intervento",
      "il termine tecnico",
      "spiegare",
      "comprensibile",
      "chiedere spiegazioni",
      "poco chiaro",
      "ripetere"
    ],
    dialogue: [
      "Signor Schulz, Le spiego brevemente che cosa succede domani. Domani mattina Le faranno una gastroscopia.",
      "Una gastroscopia, ha detto il medico. Che cos'è esattamente?",
      "Vuol dire che il medico guarda nel Suo stomaco con una piccola telecamera. È importante che da mezzanotte non mangi più niente.",
      "E che cosa ho? È una cosa grave?",
      "Capisco che sia preoccupato. Di questo parlerà con Lei il medico.",
      "Passa ancora oggi?",
      "Gli dico che ha ancora delle domande. C'è qualcos'altro che non è chiaro?",
      "No, grazie. Me l'ha spiegato bene."
    ],
    culture: {
      title: "Uno sguardo tedesco: chi informa il paziente",
      text: "<p>In Germania la legge chiede che il paziente sia informato prima di un esame o di un intervento con un colloquio, la <i>Aufklärung</i>, in un linguaggio che possa capire. Il colloquio lo fa di regola il medico, e il paziente firma spesso un modulo. Le infermiere e gli infermieri spiegano la preparazione e la parte pratica: quando non mangiare, che cosa portare, come si svolge la giornata.</p><p>Molte strutture usano anche materiali in <i>Einfache Sprache</i> o <i>Leichte Sprache</i>, cioè testi scritti con frasi brevi e parole comuni. Chi impara il tedesco li trova spesso più chiari dei testi ufficiali: vale la pena leggerli anche per sé.</p>"
    },
    exercises: [
      {
        q: "Il paziente chiede: «Was habe ich denn?» Il medico non ha ancora parlato con lui. Quale risposta rispetta i limiti del tuo ruolo?",
        opts: [
          "Das bespricht der Arzt mit Ihnen.",
          "Das ist sicher nichts Schlimmes.",
          "Das darf ich nicht sagen, fragen Sie nicht."
        ],
        why: "La diagnosi la comunica il medico: <b>Das bespricht der Arzt mit Ihnen.</b> <i>Das ist sicher nichts Schlimmes</i> è una rassicurazione che non puoi dare, e la terza risposta chiude il dialogo invece di indirizzare la domanda."
      },
      {
        tr: "Il presente di erklären, tutte le persone.",
        why: "<i>Erkläre, erklärst, erklärt, erklären, erklärt, erklären</i>: verbo regolare. Il prefisso <i>er-</i> non si separa mai e la <b>ä</b> resta in tutte le persone."
      },
      {
        q: "Completa: «Wichtig ist, ___ Sie ab Mitternacht nichts mehr essen.»",
        hint: "congiunzione «che»",
        why: "<b>dass</b>, con due s: è la congiunzione che apre la subordinata, e per questo il verbo <i>essen</i> va in fondo."
      },
      {
        q: "Completa la frase.",
        tr: "Vuol dire che il medico guarda nel Suo stomaco con una piccola telecamera.",
        why: "<i>Das heißt, <b>dass</b> der Arzt ... in Ihren Magen <b>schaut</b></i> (va bene anche <i>sieht</i>): dopo <i>dass</i> il verbo coniugato va in fondo."
      },
      {
        q: "Abbina ogni parola al suo significato.",
        pairs: ["la diagnosi", "la prognosi", "il colloquio informativo prima di un intervento", "la visita, l'esame"]
      },
      {
        q: "Scegli l'articolo determinativo giusto per ogni nome.",
        items: ["diagnosi", "termine tecnico", "stomaco", "esame, visita", "colloquio", "appuntamento"]
      },
      {
        q: "Quali frasi sono corrette?",
        opts: [
          "Ich sage dem Arzt, dass Sie noch Fragen haben.",
          "Wichtig ist, dass Sie ab Mitternacht nichts mehr essen.",
          "Das heißt, dass der Arzt schaut in Ihren Magen.",
          "Ich verstehe, dass Sie Angst haben.",
          "Ich hoffe, dass Sie haben gut geschlafen."
        ],
        why: "Dopo <i>dass</i> il verbo coniugato va in fondo: <i>dass der Arzt in Ihren Magen <b>schaut</b></i>, <i>dass Sie gut geschlafen <b>haben</b></i>. Con il tempo composto l'ausiliare viene dopo il participio."
      },
      {
        q: "Metti in ordine le parole.",
        tr: "Dico al medico che ha ancora delle domande.",
        why: "<i>Ich sage dem Arzt, dass Sie noch Fragen haben.</i> Nella principale il verbo <i>sage</i> sta al secondo posto; dopo la virgola, <i>dass</i> manda <i>haben</i> in fondo."
      },
      {
        q: "Traduci per il paziente, senza termini tecnici: «Domani mattina Le faranno una gastroscopia.»",
        why: "<i>Morgen früh bekommen Sie eine Magenspiegelung.</i> Al paziente si dice <b>Magenspiegelung</b>, non <i>Gastroskopie</i>; «domani mattina» è <b>morgen früh</b>. Va bene anche <i>Sie haben morgen früh eine Magenspiegelung</i>."
      },
      {
        q: "Il giorno prima dell'esame.",
        setting: "Il signor Schulz domani fa una gastroscopia ed è preoccupato. Il medico non gli ha ancora parlato dei risultati.",
        lines: [
          { tr: "Che cosa ho? È grave?" },
          { tr: "Rispondi che capisci la sua preoccupazione e che di questo parlerà con lui il medico.", answerTr: "Capisco che sia preoccupato. Di questo parlerà con Lei il medico." },
          { tr: "E che cos'è una gastroscopia?" },
          { tr: "Spiegalo in parole semplici.", answerTr: "Vuol dire che il medico guarda nel Suo stomaco con una piccola telecamera." },
          { tr: "Stasera posso ancora mangiare qualcosa?" },
          { tr: "Rispondi di sì, ma che è importante non mangiare più niente da mezzanotte.", answerTr: "Sì, ma è importante che da mezzanotte non mangi più niente." }
        ]
      },
      {
        tr: "Capisco che sia preoccupato. Di questo parlerà con Lei il medico.",
        why: "In <i>verstehe</i> la <b>st</b> all'inizio della radice si legge [ʃt]; in <i>bespricht</i> la <b>sp</b> è [ʃp] e la <b>ch</b> dopo <b>i</b> è [ç]; in <i>Arzt</i> la <b>z</b> è [ts]."
      },
      {
        tr: "Dico al medico che ha ancora delle domande.",
        why: "In <i>Ich</i> la <b>ch</b> dopo <b>i</b> è [ç]; in <i>noch</i> la <b>ch</b> dopo <b>o</b> è [x]; in <i>Fragen</i> la <b>a</b> è lunga."
      }
    ]
  },
  "lesson:pfl-u07-l2": {
    theme: "Rassicurare e incoraggiare",
    title: "Rassicurare e incoraggiare",
    objectives: [
      "rassicurare un paziente che ha paura, senza promettere ciò che non dipende da te",
      "usare le particelle doch, mal e ja per rendere una richiesta più calda",
      "fare richieste e proposte cortesi al Konjunktiv II: könnten, wäre",
      "lodare un piccolo progresso"
    ],
    theory: [
      {
        h: "Le particelle doch, mal, ja",
        p: "Le <strong>Modalpartikeln</strong> sono parole brevi, senza accento, che non cambiano il contenuto della frase ma il tono. <em>doch</em> in un invito lo rende incoraggiante, come «pure»: <em>Setzen Sie sich <b>doch</b> erst mal hin.</em> <em>mal</em> rende la richiesta leggera, come «un attimo»: <em>Atmen Sie <b>mal</b> tief ein.</em> <em>ja</em> richiama una cosa che sappiamo tutti e due, e per questo rassicura: <em>Ich bin <b>ja</b> direkt neben Ihnen.</em> Stanno nel mezzo della frase, dopo il verbo e i pronomi, e non vanno mai al primo posto. Spesso si combinano: <em>doch mal</em>, <em>doch erst mal</em>."
      },
      {
        h: "Il Konjunktiv II di cortesia",
        p: "Per chiedere o proporre con garbo si usa il <strong>Konjunktiv II</strong>, come il condizionale italiano: <em><b>Könnten</b> Sie mir sagen, wo es weh tut?</em> <em><b>Wäre</b> es Ihnen recht, wenn ich kurz bei Ihnen bleibe?</em> <em>Es <b>wäre</b> gut, wenn Sie heute ein paar Schritte gehen.</em> Le forme più usate sono poche: <em>könnte, wäre, hätte, würde</em>. <em>Könnte</em> nasce dal Präteritum <em>konnte</em> con l'Umlaut. Nella domanda il verbo coniugato va al primo posto, come in ogni domanda sì/no."
      },
      {
        contrast: "L'italiano non ha una classe di particelle come quella tedesca, ma fa lo stesso lavoro con altri mezzi: «si sieda <i>pure</i>», «respiri <i>un attimo</i>», il tono della voce. Per questo le particelle tedesche sono difficili da sentire e da usare: senza <em>doch</em>, <em>mal</em> o <em>ja</em> la frase resta corretta, ma suona più fredda e più come un ordine (<em>Setzen Sie sich hin.</em>). Il Konjunktiv II invece ti è familiare: <em>Könnten Sie...?</em> corrisponde quasi parola per parola a «Potrebbe...?». Attenzione però all'intonazione: un <em>doch</em> detto con impazienza suona come un rimprovero («ma si sieda, insomma»)."
      },
      {
        trap: "<em>doch</em> qui non vuol dire «però» o «comunque», e <em>mal</em> non ha niente a che fare con «male»: è la forma breve di <em>einmal</em>. Attenzione anche a <em>versprechen</em> e <em>sich versprechen</em>: <em>Ich kann Ihnen nichts versprechen</em> vuol dire «non posso prometterLe niente», ma <em>Ich habe mich versprochen</em> vuol dire «mi sono sbagliato a parlare». E le frasi che sembrano rassicuranti, <em>Alles wird gut</em> o <em>Sie fallen nicht</em>, sono promesse che non dipendono da te: meglio dire che cosa fai tu, <em>Ich bleibe bei Ihnen.</em>"
      },
      {
        tip: "Una sequenza che funziona quasi sempre: dai un nome alla paura (<em>Ich verstehe, dass Sie Angst haben</em>), di' che cosa fai tu (<em>Ich bin ja direkt neben Ihnen</em>), proponi un passo piccolo (<em>Setzen Sie sich doch erst mal an die Bettkante</em>) e loda quello che è riuscito (<em>Das haben Sie gut gemacht</em>)."
      }
    ],
    grammar: {
      title: "Particelle e richieste cortesi",
      note: "<b>doch</b>, <b>mal</b>, <b>ja</b>: senza accento, nel mezzo della frase, mai al primo posto. Per chiedere con garbo: <b>könnten</b>, <b>wäre</b>, <b>würden</b>.",
      table: {
        head: ["forma", "che cosa fa", "esempio"],
        rows: [
          ["doch", "invito incoraggiante, «pure»", "Setzen Sie sich doch erst mal hin."],
          ["mal", "richiesta leggera, «un attimo»", "Atmen Sie mal tief ein."],
          ["ja", "una cosa che sappiamo tutti e due", "Ich bin ja direkt neben Ihnen."],
          ["könnten", "domanda cortese", "Könnten Sie mir kurz sagen, wo es weh tut?"],
          ["wäre", "proposta cortese", "Wäre es Ihnen recht, wenn ich kurz bei Ihnen bleibe?"]
        ]
      },
      examples: [
        { tr: "Intanto si sieda pure.", note: "doch erst mal: invito gentile, un passo alla volta" },
        { tr: "Inspiri ed espiri con calma.", note: "mal: la richiesta suona più leggera" },
        { tr: "Questo lo conosce già da ieri.", note: "ja: richiama una cosa nota, rassicura" },
        { tr: "Potrebbe dirmi brevemente dove Le fa male?", note: "Konjunktiv II di können: könnten" },
        { tr: "Le andrebbe bene se restassi un momento con Lei?", note: "Konjunktiv II di sein: wäre" },
        { tr: "Sarebbe bene che oggi facesse qualche passo.", note: "Es wäre gut, wenn...: un consiglio senza ordine" }
      ]
    },
    vocab: [
      "la paura",
      "la preoccupazione",
      "tranquillizzare, calmare",
      "incoraggiare",
      "l'incoraggiamento",
      "agitato, emozionato",
      "consolare",
      "il progresso",
      "promettere",
      "sincero, onesto",
      "fiducioso",
      "profondo; profondamente"
    ],
    dialogue: [
      "Ho tanta paura di alzarmi. Ieri mi è girata la testa.",
      "Capisco che abbia paura. Intanto si sieda pure sul bordo del letto.",
      "E se cado?",
      "Sono qui proprio accanto a Lei. Inspiri ed espiri con calma.",
      "Va bene. Potrebbe darmi la mano, per favore?",
      "Certo. Le andrebbe bene se andassimo fino alla finestra?",
      "Ci provo. Uff, che fatica.",
      "È andata bene. Domani riproviamo, un passo alla volta."
    ],
    culture: {
      title: "Uno sguardo tedesco: prima si chiede, poi si tocca",
      text: "<p>Nei reparti tedeschi si dà del <i>Sie</i> a ogni paziente adulto e lo si chiama per cognome: <i>Frau Wagner</i>, non il nome di battesimo. Anche il contatto fisico di solito si annuncia o si chiede: <i>Darf ich Ihre Hand nehmen?</i> Molti pazienti apprezzano una mano sulla spalla, altri no, e la domanda lascia a loro la scelta.</p><p>La lode è più sobria che in italiano: <i>Das haben Sie gut gemacht</i> è già un complimento caldo. Un entusiasmo troppo forte per un piccolo passo può suonare come se si parlasse a un bambino.</p>"
    },
    exercises: [
      {
        q: "Vuoi invitare la paziente a sedersi in modo gentile e incoraggiante. Quale frase è corretta?",
        opts: [
          "Setzen Sie sich doch erst mal hin.",
          "Sie setzen sich jetzt hin.",
          "Setzen Sie doch sich erst mal hin."
        ],
        why: "<b>doch erst mal</b> rende l'invito caldo. La particella viene dopo il pronome <i>sich</i>, non prima. <i>Sie setzen sich jetzt hin</i> è corretto, ma suona come un ordine."
      },
      {
        tr: "Il Konjunktiv II di können, tutte le persone.",
        why: "<i>Könnte, könntest, könnte, könnten, könntet, könnten</i>: si parte dal Präteritum <i>konnte</i> e si aggiunge l'Umlaut, <b>ö</b>."
      },
      {
        q: "Completa: «Es ___ gut, wenn Sie heute ein paar Schritte gehen.»",
        hint: "Konjunktiv II di sein",
        why: "<b>wäre</b>: «sarebbe». Con <i>Es wäre gut, wenn...</i> dai un consiglio senza dare un ordine."
      },
      {
        q: "Completa con le particelle doch e ja.",
        tr: "Intanto si sieda pure. Sono qui proprio accanto a Lei, lo sa.",
        why: "<i>Setzen Sie sich <b>doch</b> erst mal hin</i>: invito incoraggiante. <i>Ich bin <b>ja</b> direkt neben Ihnen</i>: richiama una cosa che la paziente vede già, e la rassicura."
      },
      {
        q: "Quali frasi rassicurano senza promettere troppo?",
        opts: [
          "Ich bleibe bei Ihnen.",
          "Es wird ganz sicher alles gut.",
          "Wenn Sie etwas brauchen, drücken Sie die Klingel.",
          "Das schaffen Sie schon, Sie sind ja nicht krank.",
          "Ich verstehe, dass Sie Angst haben."
        ],
        why: "Rassicura ciò che dipende da te: restare, essere raggiungibile, prendere sul serio la paura. <i>Es wird ganz sicher alles gut</i> è una promessa che non puoi fare, e <i>Sie sind ja nicht krank</i> nega quello che il paziente sente."
      },
      {
        q: "Scegli l'articolo determinativo giusto per ogni nome.",
        items: ["paura", "progresso", "incoraggiamento", "finestra", "letto", "passo"]
      },
      {
        q: "Abbina ogni frase alla sua traduzione.",
        pairs: ["Si sieda pure.", "Inspiri un attimo profondamente.", "Questo lo conosce già.", "Potrebbe aiutarmi?"]
      },
      {
        q: "Metti in ordine le parole.",
        tr: "Le andrebbe bene se restassi un momento con Lei?",
        why: "<i>Wäre es Ihnen recht, wenn ich kurz bei Ihnen bleibe?</i> Nella domanda il verbo <i>wäre</i> va al primo posto; dopo <i>wenn</i> il verbo <i>bleibe</i> va in fondo."
      },
      {
        q: "Traduci con il Konjunktiv II: «Potrebbe dirmi dove Le fa male?»",
        why: "<i>Könnten Sie mir sagen, wo es weh tut?</i> (si scrive anche <i>wehtut</i>). Dopo <i>wo</i> il verbo va in fondo."
      },
      {
        q: "La prima volta in piedi.",
        setting: "La signora Wagner deve alzarsi per la prima volta dopo l'operazione e ha paura.",
        lines: [
          { tr: "Ho tanta paura di alzarmi." },
          { tr: "Rispondi che capisci la sua paura e invitala a sedersi intanto sul bordo del letto.", answerTr: "Capisco che abbia paura. Intanto si sieda pure sul bordo del letto." },
          { tr: "E se cado?" },
          { tr: "Rassicurala: sei proprio accanto a lei e andate piano.", answerTr: "Sono qui proprio accanto a Lei. Andiamo molto piano." },
          { tr: "Uff, che fatica." },
          { tr: "Lodala e di' che domani riprovate.", answerTr: "È andata bene. Domani riproviamo." }
        ]
      },
      {
        tr: "Sono qui proprio accanto a Lei. Inspiri ed espiri con calma.",
        why: "<i>ja</i> si legge [jaː], la <b>j</b> come la «i» di «ieri»; in <i>ruhig</i> la <b>g</b> finale è [ç]; in <i>ein</i> il dittongo <b>ei</b> è [aɪ]. La particella <i>ja</i> qui non porta accento."
      },
      {
        tr: "Intanto si sieda pure.",
        why: "In <i>Setzen</i> la <b>s</b> iniziale è sonora [z] e la <b>tz</b> è [ts]; in <i>doch</i> la <b>ch</b> dopo <b>o</b> è [x], in <i>sich</i> dopo <b>i</b> è [ç]. <i>doch</i> e <i>mal</i> restano senza accento."
      }
    ]
  },
  "lesson:pfl-u07-l3": {
    theme: "Familiari e segreto professionale",
    title: "Informare i familiari",
    objectives: [
      "dare ai familiari solo le informazioni che il paziente ha autorizzato",
      "riferire ciò che ha detto il paziente con il Konjunktiv I: er habe, sie sei",
      "rimandare al medico le domande su diagnosi ed esami",
      "spiegare perché al telefono non si danno informazioni"
    ],
    theory: [
      {
        h: "Che cosa si può dire, e a chi",
        p: "Anche le infermiere e gli infermieri sono tenuti alla <strong>Schweigepflicht</strong>, il segreto professionale, e il segreto vale anche verso i familiari. Prima di informare un <strong>Angehöriger</strong> serve l'<strong>Einverständnis</strong> del paziente: <em>Ihr Vater ist damit einverstanden, dass wir Sie informieren.</em> Anche allora, tu riferisci come sta il paziente e che cosa dice; diagnosi, risultati degli esami e prognosi li comunica il medico: <em>Das bespricht der Arzt mit Ihnen. Ich kann gern ein Arztgespräch für Sie vereinbaren.</em> Al telefono non si vede chi chiama, per questo molte strutture non danno informazioni: <em>Am Telefon darf ich leider keine Auskunft geben.</em>"
      },
      {
        h: "Il Konjunktiv I per riferire",
        p: "Per riferire le parole di un altro il tedesco ha il <strong>Konjunktiv I</strong>; alla terza persona singolare è radice del verbo + <em>-e</em>. <em>Ich habe gut geschlafen</em> diventa <em>Er sagt, er <b>habe</b> gut geschlafen.</em> <em>Sein</em> è irregolare: <em>ich sei, er sei, wir seien, sie seien</em>. Si usa soprattutto alla terza persona singolare, perché lì si distingue dall'indicativo. Dove il Konjunktiv I coincide con l'indicativo (<em>sie haben</em>), si prende il Konjunktiv II: <em>Sie sagen, sie <b>hätten</b> Angst.</em> A voce molti usano semplicemente <em>dass</em> con l'indicativo: <em>Sie hat gesagt, dass sie gut geschlafen hat.</em> Nel rapporto di cura il Konjunktiv I è la forma tipica: <em>Patientin gibt an, sie <b>habe</b> keine Schmerzen.</em> Dice che è un'affermazione del paziente, non un fatto che hai verificato."
      },
      {
        contrast: "In italiano il discorso indiretto si fa con «che» e il congiuntivo o l'indicativo: «dice che ha dormito bene» o, per prendere le distanze, «sostiene che abbia dormito bene». Il tedesco ha una forma apposta, il Konjunktiv I, che a voce si sente poco ma nella documentazione è utile: <em>sie sei müde</em> tiene la distanza tra ciò che la paziente dice e ciò che tu hai osservato. Anche le abitudini con i familiari sono diverse. In Italia per molto tempo è stato normale informare prima la famiglia, a volte più del paziente; oggi anche la legge italiana mette al centro il paziente. In Germania la regola è netta: decide il paziente chi può sapere che cosa, e il figlio o la moglie non hanno automaticamente diritto alle informazioni."
      },
      {
        trap: "<em>sei</em> in tedesco non vuol dire «sei»: <em>sie sei müde</em> è «(dice che) è stanca», al Konjunktiv I. E <em>er habe</em> non è un errore per <em>er hat</em>: è la forma del discorso indiretto. <em>der Angehörige</em> è un aggettivo usato come nome e cambia desinenza: <em>der Angehörige</em>, ma <em>ein Angehöriger</em>, e al plurale <em>die Angehörigen</em>. <em>Auskunft geben</em> è «dare informazioni su richiesta»; non confonderlo con <em>Aufklärung</em>, il colloquio informativo del medico."
      },
      {
        tip: "Se un familiare insiste per sapere la diagnosi, non serve dire di no: offri la strada giusta. <em>Das bespricht der Arzt mit Ihnen. Ich kann gern ein Arztgespräch für Sie vereinbaren.</em> Il familiare ottiene un appuntamento, e tu resti nei limiti di quello che puoi dire."
      }
    ],
    grammar: {
      title: "Riferire con il Konjunktiv I",
      note: "Konjunktiv I, 3ª persona singolare = radice + <b>-e</b>: er <b>habe</b>, sie <b>fühle</b>. <b>sein</b>: sei, seien. Se coincide con l'indicativo, si usa il Konjunktiv II: sie <b>hätten</b>.",
      table: {
        head: ["detto dal paziente", "riferito"],
        rows: [
          ["Ich habe gut geschlafen.", "Er sagt, er habe gut geschlafen."],
          ["Ich bin müde.", "Sie gibt an, sie sei müde."],
          ["Ich fühle mich besser.", "Sie sagt, sie fühle sich besser."],
          ["Wir haben Angst.", "Sie sagen, sie hätten Angst."]
        ]
      },
      examples: [
        { tr: "Sua madre ha detto che ha dormito bene.", note: "a voce: dass con l'indicativo" },
        { tr: "Sua madre dice di aver dormito bene.", note: "Konjunktiv I: sie habe" },
        { tr: "La paziente dichiara di essere stanca.", note: "rapporto di cura: angeben + Konjunktiv I, sie sei" },
        { tr: "Il paziente dichiara di non avere dolore.", note: "er habe: un'affermazione del paziente, non una misura" },
        { tr: "Al telefono purtroppo non posso dare informazioni.", note: "Auskunft geben: informare su richiesta" },
        { tr: "Suo padre è d'accordo che La informiamo.", note: "damit einverstanden, dass...: il consenso viene prima" }
      ]
    },
    vocab: [
      "il familiare (ein Angehöriger, plurale die Angehörigen)",
      "il segreto professionale",
      "l'informazione (data su richiesta)",
      "il consenso",
      "d'accordo",
      "la procura preventiva (per quando non si potrà più decidere)",
      "dichiarare, riferire",
      "riservato, confidenziale",
      "inoltrare, riferire a qualcun altro",
      "il colloquio con il medico",
      "l'orario di visita",
      "le cure palliative"
    ],
    dialogue: [
      "Buongiorno, sono la figlia del signor Schulz. Come sta mio padre?",
      "Buongiorno, signora Schulz. Suo padre è d'accordo che La informiamo. Stamattina ha detto di aver dormito bene.",
      "E l'esame? Che cosa hanno trovato?",
      "Di questo parlerà con Lei il medico. Posso fissarLe volentieri un colloquio con lui.",
      "Posso parlare con il medico ancora oggi?",
      "In questo momento è in riunione. Gli riferisco la Sua domanda.",
      "Grazie. Forse chiama anche mia sorella.",
      "Al telefono purtroppo non possiamo dare informazioni. La cosa migliore è che venga con Lei al colloquio con il medico."
    ],
    culture: {
      title: "Uno sguardo tedesco: chi decide quando il paziente non può",
      text: "<p>In Germania il segreto professionale è previsto dal codice penale e vale per medici, infermiere e infermieri. Il paziente può liberare il personale dal segreto verso persone precise, e la struttura lo annota.</p><p>Quando il paziente non può più decidere da sé, conta chi ha una <i>Vorsorgevollmacht</i>, una procura scritta in anticipo, oppure un <i>Betreuer</i> nominato dal tribunale. Chi siano queste persone sta di solito nella documentazione: se un familiare dice di avere una procura, si controlla lì o si chiede al medico, non si decide a voce in corridoio. Che cosa si può dire e a chi lo stabiliscono le regole della struttura insieme al medico.</p>"
    },
    exercises: [
      {
        q: "Riferisci alla figlia ciò che il padre ha detto: «Ich habe gut geschlafen.» Quale frase è corretta?",
        opts: [
          "Er hat gesagt, er habe gut geschlafen.",
          "Er hat gesagt, er hätte gut schlafen.",
          "Er hat gesagt, ich habe gut geschlafen."
        ],
        why: "Nel discorso indiretto il pronome passa alla terza persona (<i>er</i>) e il verbo al Konjunktiv I: <b>er habe</b> gut geschlafen. <i>hätte ... schlafen</i> non ha il participio, e <i>ich habe</i> fa parlare te."
      },
      {
        tr: "Il Konjunktiv I di sein: ich, er/sie, wir, sie.",
        why: "<i>Sei, sei, seien, seien</i>: prima e terza persona singolare sono uguali e non hanno desinenza. È la forma più usata nel discorso indiretto: <i>sie sei müde</i>."
      },
      {
        q: "Completa (nel rapporto): «Die Patientin gibt an, sie ___ müde.»",
        hint: "Konjunktiv I di sein",
        why: "<b>sei</b>: nel rapporto il Konjunktiv I mostra che è un'affermazione della paziente. Nel tedesco parlato si sente anche <i>wäre</i>."
      },
      {
        q: "Completa con il Konjunktiv I di haben.",
        tr: "Il paziente dichiara di non avere dolore. Dice di aver dormito bene.",
        why: "<i>er <b>habe</b> keine Schmerzen</i>, <i>er <b>habe</b> gut geschlafen</i>: radice <i>hab-</i> + <i>-e</i>, alla terza persona."
      },
      {
        q: "Quali frasi rispettano il segreto professionale?",
        opts: [
          "Am Telefon darf ich leider keine Auskunft geben.",
          "Ihr Vater hat Krebs, aber sagen Sie es ihm nicht.",
          "Das bespricht der Arzt mit Ihnen.",
          "Der Patient im Nachbarbett hat das auch.",
          "Ich frage Ihren Vater, ob wir Sie informieren dürfen."
        ],
        why: "In questa struttura non si danno informazioni al telefono, la diagnosi la comunica il medico, e prima di informare un familiare si chiede al paziente. Le altre due frasi rivelano dati che non spettano né al familiare né a te."
      },
      {
        q: "Scegli l'articolo determinativo giusto per ogni nome.",
        items: ["segreto professionale", "informazione (data su richiesta)", "consenso", "colloquio con il medico", "procura preventiva", "telefono"]
      },
      {
        q: "Abbina ogni parola al suo significato.",
        pairs: ["il segreto professionale", "l'informazione (data su richiesta)", "il consenso", "la procura preventiva"]
      },
      {
        q: "Metti in ordine le parole.",
        tr: "Suo padre è d'accordo che La informiamo.",
        why: "<i>Ihr Vater ist damit einverstanden, dass wir Sie informieren.</i> <i>damit</i> anticipa la subordinata; dopo <i>dass</i> il verbo <i>informieren</i> va in fondo."
      },
      {
        q: "Traduci per la figlia: «Sua madre dice che oggi si sente meglio.»",
        why: "<i>Ihre Mutter sagt, sie fühle sich heute besser</i>, con il Konjunktiv I; a voce va bene anche <i>Ihre Mutter sagt, dass sie sich heute besser fühlt</i>. «Oggi» è <b>heute</b>."
      },
      {
        q: "La figlia in reparto.",
        setting: "La figlia del signor Schulz chiede notizie. Il padre ha dato il consenso a informarla, il medico non ha ancora parlato con lei.",
        lines: [
          { tr: "Come sta mio padre?" },
          { tr: "Riferisci che stamattina ha detto di aver dormito bene.", answerTr: "Stamattina ha detto di aver dormito bene." },
          { tr: "Che cosa è venuto fuori dall'esame?" },
          { tr: "Rimanda al medico e offri un colloquio.", answerTr: "Di questo parlerà con Lei il medico. Posso fissarLe volentieri un colloquio con lui." },
          { tr: "Mia sorella chiama stasera. Può dirle tutto?" },
          { tr: "Spiega che al telefono non potete dare informazioni.", answerTr: "Al telefono purtroppo non possiamo dare informazioni." }
        ]
      },
      {
        tr: "Di questo parlerà con Lei il medico. Posso fissarLe volentieri un colloquio con lui.",
        why: "In <i>Arztgespräch</i> l'accento cade su <b>Arzt</b>, la <b>sp</b> è [ʃp] e la <b>ch</b> dopo <b>ä</b> è [ç]; in <i>vereinbaren</i> l'accento cade su <b>ein</b>."
      },
      {
        tr: "Al telefono purtroppo non posso dare informazioni.",
        why: "In <i>Telefon</i> l'accento cade sull'ultima sillaba, <b>fon</b>; in <i>leider</i> il dittongo <b>ei</b> è [aɪ]; in <i>Auskunft</i> l'accento cade su <b>Aus</b>."
      }
    ]
  },
  "lesson:pfl-u07-l4": {
    theme: "Demenza",
    title: "Persone con demenza",
    objectives: [
      "parlare con una persona con demenza con frasi brevi e il verbo al secondo posto",
      "rispondere secondo la validazione: accogliere l'emozione invece di correggere",
      "evitare il «noi» infantile e il tono da bambini",
      "riconoscere quando una confusione improvvisa va segnalata"
    ],
    theory: [
      {
        h: "Frasi brevi, il verbo al secondo posto",
        p: "Con una persona con demenza ogni frase porta <strong>una sola informazione</strong>. Si usano frasi principali brevi, con il verbo coniugato al <strong>secondo posto</strong>; al primo posto ci può stare il tempo, che orienta: <em><b>Jetzt</b> waschen Sie Ihr Gesicht.</em> <em><b>Nach dem Frühstück</b> kommt Ihre Tochter.</em> Niente subordinate, niente due istruzioni nella stessa frase. Ci si presenta ogni volta, con il nome: <em>Ich bin Anna. Ich helfe Ihnen heute.</em> E si porge l'oggetto mentre lo si nomina: <em>Hier ist Ihr Waschlappen.</em>"
      },
      {
        h: "La validazione",
        p: "La <strong>Validation</strong> parte da un'idea semplice: i ricordi si perdono, le emozioni restano. Se la signora Lehmann vuole tornare a casa perché i figli escono da scuola, correggerla (<em>Ihre Kinder sind doch erwachsen</em>) la mette davanti a una perdita e non la calma. Si dà invece un nome all'emozione (<em>Sie machen sich Sorgen um Ihre Kinder</em>) e si invita a raccontare (<em>Erzählen Sie mir von Ihren Kindern</em>). La conoscenza della sua <strong>Biografie</strong> aiuta a capire di che cosa parla. Una cosa va distinta: se una persona diventa <strong>confusa all'improvviso</strong>, può non dipendere dalla demenza che conosci ma da una causa nuova, ed è un cambiamento da segnalare subito al medico."
      },
      {
        contrast: "In Italia capita di sentire «nonnina», «tesoro» o il tu con gli anziani in struttura, ed è spesso inteso come affetto. In Germania lo stesso tono suona infantile: anche con una persona con demenza si dice <em>Sie</em> e <em>Frau Lehmann</em>, a meno che sia lei a chiedere altro. Lo stesso vale per il «noi» delle cure (<em>Haben wir heute schon gegessen?</em>), che in tedesco si chiama spesso con ironia <em>Pflege-Wir</em>: si dice <em>Sie</em> quando lo fa la persona. Anche la sintassi aiuta: in tedesco la frase principale tiene il verbo al secondo posto, mentre la subordinata lo manda in fondo, dopo tutto il resto: per capire chi fa che cosa bisogna tenere a mente la frase intera. Frasi principali brevi tolgono questa fatica."
      },
      {
        trap: "<em>Demenz</em> e <em>Vergesslichkeit</em> non sono sinonimi: la smemoratezza capita a tutti, la demenza è una sindrome, dovuta a diverse malattie, che cambia la vita di tutti i giorni. Al paziente e ai familiari non si dice <em>Sie ist halt dement</em>, ma <em>Frau Lehmann lebt mit einer Demenz.</em> E <em>verwirrt</em> descrive uno stato, non la persona: una <em>plötzliche Verwirrtheit</em> può avere una causa fisica nuova, e si riferisce, non si dà per scontata."
      },
      {
        tip: "Prima di parlare, mettiti davanti alla persona, all'altezza dei suoi occhi, e aspetta che ti guardi. Poi una frase, una pausa, la frase successiva. Se non risponde, ripeti con le stesse parole: una frase riformulata è, per lei, una frase nuova da capire."
      }
    ],
    grammar: {
      title: "Frasi che si seguono",
      note: "Una informazione per frase, il verbo coniugato al <b>secondo posto</b>, il tempo all'inizio. Si accoglie l'emozione, non si corregge.",
      table: {
        head: ["invece di", "meglio"],
        rows: [
          ["Ihre Kinder sind doch längst erwachsen.", "Sie machen sich Sorgen um Ihre Kinder."],
          ["Haben wir heute schon gefrühstückt?", "Haben Sie schon gefrühstückt?"],
          ["Wenn Sie fertig sind und gefrühstückt haben, kommt Ihre Tochter.", "Nach dem Frühstück kommt Ihre Tochter."],
          ["Das habe ich Ihnen doch schon gesagt.", "Ich bin Anna. Ich helfe Ihnen heute."]
        ]
      },
      examples: [
        { tr: "Sono Anna. Oggi La aiuto io.", note: "presentarsi ogni volta, due frasi brevi" },
        { tr: "Ora si lava il viso.", note: "jetzt al primo posto, il verbo waschen al secondo" },
        { tr: "Ecco la Sua manopola.", note: "nominare l'oggetto mentre lo si porge" },
        { tr: "Si preoccupa per i Suoi figli.", note: "validazione: dare un nome all'emozione" },
        { tr: "Mi racconti dei Suoi figli.", note: "invitare a raccontare, invece di correggere" },
        { tr: "Dopo colazione viene Sua figlia.", note: "il tempo al primo posto, il verbo kommt al secondo" }
      ]
    },
    vocab: [
      "la demenza",
      "la smemoratezza",
      "confuso",
      "lo stato confusionale",
      "il disorientamento",
      "la validazione (metodo Validation)",
      "il sentimento, l'emozione",
      "il ricordo",
      "la biografia, la storia di vita",
      "la struttura della giornata",
      "contraddire",
      "familiare, noto"
    ],
    dialogue: [
      "Buongiorno, signora Lehmann. Sono Anna. Oggi La aiuto a lavarsi.",
      "Devo andare a casa. I miei bambini tornano subito da scuola.",
      "Si preoccupa per i Suoi figli.",
      "Sì. Quando tornano a casa hanno fame, no?",
      "I Suoi figli sono molto importanti per Lei. Mi racconti dei Suoi figli.",
      "Peter era sempre così birichino. E Susanne cantava così bene.",
      "Che bello. Ora si lava il viso. Ecco la Sua manopola.",
      "Ah, sì. Questo lo so fare da sola."
    ],
    culture: {
      title: "Uno sguardo tedesco: validazione e lavoro biografico",
      text: "<p>Il metodo <i>Validation</i> è nato negli Stati Uniti con Naomi Feil; in Germania è molto diffusa la sua variante <i>Integrative Validation</i>, sviluppata da Nicole Richard. Nelle strutture per anziani se ne parla nella formazione e nelle riunioni d'équipe, e molte infermiere la conoscono con questo nome.</p><p>Ci si appoggia anche alla <i>Biografiearbeit</i>: all'ingresso i familiari raccontano lavoro, abitudini, nomi importanti e piccoli rituali della persona. Sapere che la signora Lehmann ha cresciuto due figli e si alzava presto per preparare la colazione aiuta a capire che cosa cerca quando dice che deve andare a casa.</p>"
    },
    exercises: [
      {
        q: "La signora Lehmann dice: «Ich muss nach Hause, meine Kinder kommen aus der Schule.» Qual è una risposta secondo la validazione?",
        opts: [
          "Ihre Kinder sind doch schon lange erwachsen.",
          "Sie machen sich Sorgen um Ihre Kinder.",
          "Sie können nicht nach Hause, Sie wohnen jetzt hier."
        ],
        why: "La validazione accoglie l'emozione: <b>Sie machen sich Sorgen um Ihre Kinder.</b> Correggere i fatti, come nelle altre due risposte, non la tranquillizza e la mette davanti a una perdita."
      },
      {
        q: "Completa: «Nach dem Frühstück ___ Ihre Tochter.»",
        hint: "kommen, al secondo posto",
        why: "<b>kommt</b>: <i>Nach dem Frühstück</i> occupa il primo posto, quindi il verbo coniugato viene subito dopo e il soggetto <i>Ihre Tochter</i> lo segue."
      },
      {
        q: "Completa la frase.",
        tr: "Ora si lava il viso. Ecco la Sua manopola.",
        why: "<i>Jetzt <b>waschen</b> Sie Ihr Gesicht</i> e <i>Hier <b>ist</b> Ihr Waschlappen</i>: in tutte e due le frasi il verbo coniugato sta al secondo posto, dopo <i>jetzt</i> e <i>hier</i>."
      },
      {
        q: "Quali frasi sono adatte a una persona con demenza?",
        opts: [
          "Jetzt waschen Sie Ihr Gesicht.",
          "Nachdem Sie sich gewaschen haben und bevor das Frühstück kommt, ziehen Sie sich an.",
          "Hier ist Ihr Waschlappen.",
          "Na, mein Schätzchen, haben wir heute gut gegessen?",
          "Erzählen Sie mir von Ihren Kindern."
        ],
        why: "Vanno bene le frasi brevi, con una sola informazione e il <i>Sie</i>. La seconda frase ha due subordinate prima del verbo principale; la quarta usa un vezzeggiativo e il «noi» infantile."
      },
      {
        q: "Scegli l'articolo determinativo giusto per ogni nome.",
        items: ["demenza", "sentimento, emozione", "ricordo", "manopola di spugna", "viso", "colazione"]
      },
      {
        q: "Abbina ogni parola al suo significato.",
        pairs: ["la demenza", "la smemoratezza", "il disorientamento", "la validazione"]
      },
      {
        q: "Metti in ordine le parole.",
        tr: "Dopo colazione viene Sua figlia.",
        why: "<i>Nach dem Frühstück kommt Ihre Tochter.</i> Il tempo al primo posto orienta, il verbo <i>kommt</i> sta al secondo."
      },
      {
        q: "Traduci con una frase breve: «Oggi è martedì.»",
        why: "<i>Heute ist Dienstag.</i> Va bene anche <i>Heute haben wir Dienstag</i>. «Oggi» è <b>heute</b>, e il verbo sta al secondo posto."
      },
      {
        q: "Una mattina con la signora Lehmann.",
        setting: "La signora Lehmann vive con una demenza. È mattina e vuoi aiutarla a lavarsi.",
        lines: [
          { tr: "Devo andare a casa. I miei bambini mi aspettano." },
          { tr: "Accogli la sua preoccupazione, senza correggerla.", answerTr: "Si preoccupa per i Suoi figli." },
          { tr: "Ma Lei chi è?" },
          { tr: "Presentati con calma.", answerTr: "Sono Anna. Oggi La aiuto io." },
          { tr: "Non ce la faccio più." },
          { tr: "Incoraggiala e porgile la manopola.", answerTr: "Sì che ce la fa. Ecco la Sua manopola." }
        ]
      },
      {
        tr: "Buongiorno, signora Lehmann. Sono Anna. Oggi La aiuto a lavarsi.",
        why: "In <i>Lehmann</i> la <b>h</b> non si pronuncia e allunga la <b>e</b>; in <i>heute</i> il dittongo <b>eu</b> è [ɔʏ]; in <i>Waschen</i> la <b>W</b> è [v] e la <b>sch</b> è [ʃ]."
      },
      {
        tr: "Mi racconti dei Suoi figli.",
        why: "In <i>Erzählen</i> la <b>z</b> è [ts] e l'accento cade su <b>zäh</b>; in <i>von</i> la <b>v</b> si legge [f]; in <i>Kindern</i> l'accento cade su <b>Kin</b>."
      }
    ]
  },
  "lesson:pfl-u07-test": {
    theme: "Verifica",
    title: "Test: Parlare con pazienti e familiari",
    objectives: [
      "verificare la spiegazione in parole semplici, le richieste cortesi, il discorso indiretto, il segreto professionale e la comunicazione con le persone con demenza"
    ],
    theory: [
      {
        p: "Undici domande sull'intera unità. Si supera con il 70%. I pazienti e le situazioni sono inventati e servono solo come esempio: le regole su chi può essere informato e su come si prepara un esame le stabiliscono il medico e la struttura."
      }
    ],
    exercises: [
      {
        q: "Il figlio di un paziente chiede: «Was hat mein Vater genau?» Il medico non ha ancora parlato con lui.",
        opts: [
          "Das bespricht der Arzt mit Ihnen.",
          "Ich darf das eigentlich nicht sagen, aber es ist ernst.",
          "Das weiß ich nicht, fragen Sie jemand anderen."
        ],
        why: "La diagnosi la comunica il medico: <b>Das bespricht der Arzt mit Ihnen.</b> La seconda risposta lascia intendere una diagnosi, la terza non indirizza la domanda."
      },
      {
        q: "Completa: «Ihre Mutter sagt, sie ___ keine Schmerzen.»",
        hint: "Konjunktiv I di haben",
        why: "<b>habe</b>: radice <i>hab-</i> + <i>-e</i>. È la forma del discorso indiretto."
      },
      {
        q: "Completa: «___ Sie mir kurz helfen?»",
        hint: "Konjunktiv II, richiesta cortese",
        why: "<b>Könnten</b> Sie mir kurz helfen? Va bene anche <b>Würden</b>. Nella domanda il verbo coniugato sta al primo posto."
      },
      {
        tr: "Il Konjunktiv II di werden, tutte le persone.",
        why: "<i>Würde, würdest, würde, würden, würdet, würden</i>: dal Präteritum <i>wurde</i> con l'Umlaut, <b>ü</b>."
      },
      {
        q: "Abbina ogni parola al suo significato.",
        pairs: ["la gastroscopia (termine tecnico)", "il segreto professionale", "la validazione", "la procura preventiva"]
      },
      {
        q: "Quali frasi useresti con un paziente o un familiare?",
        opts: [
          "Morgen früh bekommen Sie eine Magenspiegelung.",
          "Morgen erfolgt eine ÖGD.",
          "Ich verstehe, dass Sie Angst haben.",
          "Pat. gibt an, sie habe keine Schmerzen.",
          "Wäre es Ihnen recht, wenn ich kurz bei Ihnen bleibe?"
        ],
        why: "<i>ÖGD</i> è una sigla tecnica e <i>Pat. gibt an...</i> è lo stile del rapporto di cura: vanno bene tra colleghi e nella documentazione, non con il paziente."
      },
      {
        q: "Completa con il Konjunktiv I e il Konjunktiv II.",
        tr: "La paziente dichiara di essere stanca. Le va bene se torno più tardi?",
        why: "<i>sie <b>sei</b> müde</i>: Konjunktiv I di sein, per riferire. <i><b>Wäre</b> es Ihnen recht</i>: Konjunktiv II di sein, per chiedere con garbo."
      },
      {
        q: "Metti in ordine le parole.",
        tr: "Capisco che sia preoccupato.",
        why: "<i>Ich verstehe, dass Sie sich Sorgen machen.</i> Dopo <i>dass</i> il verbo <i>machen</i> va in fondo; il pronome <i>sich</i> segue subito il soggetto <i>Sie</i>."
      },
      {
        q: "Scegli l'articolo determinativo giusto per ogni nome.",
        items: ["diagnosi", "informazione (data su richiesta)", "consenso", "sentimento, emozione", "progresso", "colloquio con il medico"]
      },
      {
        tr: "Capisco che abbia paura. Intanto si sieda pure sul bordo del letto.",
        why: "In <i>Angst</i> la <b>ng</b> è [ŋ], senza una g separata; in <i>Bettkante</i> l'accento cade su <b>Bett</b>; <i>doch</i> e <i>mal</i> restano senza accento."
      },
      {
        tr: "Di questo parlerà con Lei il medico.",
        why: "In <i>bespricht</i> l'accento cade su <b>spricht</b>, la <b>sp</b> è [ʃp] e la <b>ch</b> è [ç]; in <i>Ihnen</i> la <b>ih</b> è una i lunga."
      }
    ]
  }
});
