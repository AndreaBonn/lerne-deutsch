/* ============================================================
   Learner-language text (it) for data/core/pfl-01.js, unit pfl-u01.
   Keys point at ids in the neutral layer; arrays merge by index,
   so their length has to match core.
   Checked by scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("it", {
  "unit:pfl-u01": {
    title: "Accoglienza e anamnesi",
    grammarNote: "il Sie con il paziente · il verbo in seconda posizione · il dativo con wehtun, helfen, fehlen e mir ist übel · il Perfekt per la storia clinica · composti e coppie Fachsprache / Laiensprache"
  },
  "lesson:pfl-u01-l1": {
    theme: "In reparto",
    title: "Buongiorno, sono la Sua infermiera",
    objectives: [
      "presentarsi al paziente con nome, cognome e ruolo",
      "verificare l'identità del paziente (nome, data di nascita, braccialetto)",
      "usare sempre il Sie con i pazienti adulti e i familiari",
      "tenere il verbo coniugato in seconda posizione anche quando la frase comincia con jetzt, gleich, heute"
    ],
    theory: [
      {
        h: "Presentarsi in reparto",
        p: "In un reparto tedesco ci si presenta con <strong>nome e cognome</strong> e con il ruolo: <em>Guten Tag, mein Name ist Elena Marin. Ich bin heute Ihre Pflegefachkraft.</em> Il paziente ti chiamerà <em>Frau Marin</em> o <em>Herr ...</em>. Subito dopo si verifica l'identità: <em>Wie heißen Sie, bitte? Wie ist Ihr Geburtsdatum?</em> e si controlla il braccialetto, <em>das Patientenarmband</em>. La domanda è aperta di proposito: non si chiede «Sie sind Herr Brandt, oder?», perché un paziente confuso risponde sì a tutto."
      },
      {
        h: "Il verbo in seconda posizione",
        p: "Nella frase principale il verbo coniugato sta <strong>al secondo posto</strong>. Se in testa metti un avverbio di tempo, il soggetto passa <strong>dopo</strong> il verbo: <em>Jetzt bringe ich Sie auf Ihr Zimmer. Gleich mache ich mit Ihnen das Aufnahmegespräch.</em> Nella domanda con parola interrogativa vale lo stesso (<em>Wie heißen Sie?</em>); nella domanda sì/no il verbo va al primo posto (<em>Haben Sie noch Fragen?</em>). Con un modale, il modale è al secondo posto e l'infinito in fondo: <em>Ich möchte Ihnen kurz ein paar Fragen stellen.</em> Nella domanda sì/no il modale passa al primo posto e l'infinito resta in fondo: <em>Darf ich Ihnen kurz ein paar Fragen stellen?</em>"
      },
      {
        contrast: "In italiano in corsia si passa facilmente al tu con un paziente anziano, quasi per affetto («come stiamo oggi, nonnino?»). In Germania no: con i pazienti adulti e con i familiari si usa <strong>sempre il Sie</strong>, e il <em>du</em> resta per i colleghi, se il reparto lo usa. Il Sie si porta dietro anche il possessivo e il dativo: <em>Ihre Pflegefachkraft, Ihr Zimmer, Kann ich Ihnen helfen?</em>, tutti con la maiuscola. Un altro punto: l'italiano sposta il soggetto o lo omette liberamente («Adesso la porto in camera»); il tedesco di norma non lo omette, e dopo un avverbio in testa lo mette dopo il verbo: <em>Jetzt bringe ich Sie</em>. «Jetzt ich bringe Sie» è un errore che si sente subito."
      },
      {
        trap: "<em>Krankenschwester</em> esiste ancora nel linguaggio comune, ma non è più il nome della professione: dal 2020 il titolo è <em>Pflegefachfrau</em> / <em>Pflegefachmann</em>, e <em>Pflegefachkraft</em> è il termine neutro. Non tradurre «ricoverare» con un verbo inventato: si dice <em>stationär aufnehmen</em> (<em>Wir nehmen Sie heute stationär auf</em>), e <em>die Aufnahme</em> è sia il ricovero sia l'ufficio accettazione. Attenzione anche a <em>die Station</em>: è il reparto, non la stazione. E <em>die Ambulanz</em> in Germania è l'ambulatorio dell'ospedale, non il mezzo di soccorso, che si chiama <em>der Krankenwagen</em> o <em>der Rettungswagen</em>."
      },
      {
        tip: "Prima di uscire dalla stanza mostra sempre il campanello: <em>Wenn Sie Hilfe brauchen, drücken Sie bitte die Klingel.</em> È una frase che userai decine di volte al giorno: impararla a memoria, con il verbo in fondo dopo <em>wenn</em>, ti libera la testa per il resto."
      }
    ],
    grammar: {
      title: "Dove sta il verbo",
      note: "Nella principale il verbo coniugato è in <b>seconda posizione</b>, qualunque cosa ci sia in testa. Nella domanda sì/no è in <b>prima</b>. Con il paziente sempre <b>Sie</b>, <b>Ihr</b>, <b>Ihnen</b>.",
      table: {
        head: ["tipo di frase", "esempio", "posizione del verbo"],
        rows: [
          ["domanda con W-", "Wie heißen Sie, bitte?", "2ª, il soggetto segue"],
          ["domanda sì/no", "Haben Sie noch Fragen?", "1ª"],
          ["avverbio in testa", "Jetzt bringe ich Sie auf Ihr Zimmer.", "2ª, il soggetto dopo il verbo"],
          ["con un modale", "Darf ich Ihnen kurz ein paar Fragen stellen?", "modale 1ª o 2ª, infinito in fondo"]
        ]
      },
      examples: [
        { tr: "Buongiorno, mi chiamo Elena Marin. Oggi sono la Sua infermiera.", note: "nome, cognome e ruolo: la presentazione standard" },
        { tr: "Come si chiama, per favore?", note: "domanda aperta per verificare l'identità" },
        { tr: "Qual è la Sua data di nascita?", note: "seconda verifica dell'identità" },
        { tr: "Adesso la porto in camera.", note: "jetzt in testa: il soggetto ich va dopo il verbo" },
        { tr: "Ha ancora domande?", note: "domanda sì/no: verbo in prima posizione" },
        { tr: "Posso farLe velocemente qualche domanda?", note: "modale dürfen, infinito stellen in fondo" }
      ]
    },
    vocab: [
      "il reparto (auf Station: in reparto)",
      "l'infermiera, l'infermiere (termine neutro)",
      "l'infermiera (titolo professionale)",
      "l'infermiere (titolo professionale)",
      "il paziente (die Patientin: la paziente)",
      "il ricovero, l'accettazione",
      "il colloquio di accoglienza",
      "la camera",
      "il campanello di chiamata",
      "il braccialetto identificativo",
      "accogliere, ricoverare (stationär aufnehmen: ricoverare in reparto)",
      "presentarsi"
    ],
    dialogue: [
      "Buongiorno, signor Brandt. Mi chiamo Elena Marin, oggi sono la Sua infermiera.",
      "Buongiorno, signora Marin.",
      "Posso vedere un attimo il Suo braccialetto? Qual è la Sua data di nascita, per favore?",
      "Sono nato il 12 marzo 1950.",
      "Grazie. Adesso la porto in camera. Questo è il Suo letto, vicino alla finestra.",
      "Bene, grazie.",
      "Se ha bisogno di aiuto, prema il campanello. Tra poco facciamo insieme il colloquio di accoglienza.",
      "D'accordo."
    ],
    culture: {
      title: "Uno sguardo tedesco: come si chiama chi fa assistenza",
      text: "<p>Fino al 2003 la professione si chiamava <i>Krankenschwester</i> o <i>Krankenpfleger</i>; dal 2004 <i>Gesundheits- und Krankenpflegerin</i>. Con la riforma entrata in vigore nel 2020 la formazione è diventata generalista e il titolo è <i>Pflegefachfrau</i> o <i>Pflegefachmann</i>. Nei reparti convivono tutti questi nomi, e molti pazienti anziani ti chiameranno ancora <i>Schwester</i>: non è un errore da correggere, ma tu presentati con il tuo cognome.</p><p>Accanto all'infermiera lavorano figure che in Italia hanno nomi diversi: la <i>Pflegehilfskraft</i> o <i>Pflegeassistenz</i>, con una formazione più breve, e nell'assistenza agli anziani la <i>Altenpflegerin</i>. Chi ha studiato all'estero ottiene il titolo tedesco solo dopo il riconoscimento, la <i>Anerkennung</i>: fino ad allora negli annunci di lavoro si legge spesso <i>Pflegefachkraft in Anerkennung</i>.</p>"
    },
    exercises: [
      {
        q: "Entri nella stanza di un nuovo paziente. Come ti presenti?",
        opts: [
          "Hallo, ich bin Elena, deine Krankenschwester.",
          "Guten Tag, ich bin Frau Marin, Ihre Pflegefachkraft.",
          "Guten Tag, ich bin Elena, deine Pflegefachkraft."
        ],
        why: "Con il paziente si usa il <b>Sie</b>, quindi <i>Ihre</i> con la maiuscola, e ci si presenta con il cognome. <i>Krankenschwester</i> non è più il titolo della professione."
      },
      {
        q: "Quali frasi hanno il verbo al posto giusto?",
        opts: [
          "Jetzt bringe ich Sie auf Ihr Zimmer.",
          "Jetzt ich bringe Sie auf Ihr Zimmer.",
          "Haben Sie noch Fragen?",
          "Gleich mache ich mit Ihnen das Aufnahmegespräch.",
          "Gleich ich mache mit Ihnen das Aufnahmegespräch."
        ],
        why: "Dopo <i>jetzt</i> e <i>gleich</i> in testa il verbo resta in seconda posizione e il soggetto <i>ich</i> passa dopo: <i>bringe ich</i>, <i>mache ich</i>. Nella domanda sì/no il verbo apre la frase."
      },
      {
        q: "Completa: «Guten Tag, ich bin heute ___ Pflegefachkraft.»",
        hint: "possessivo di Sie",
        why: "<b>Ihre</b>, con la maiuscola: il possessivo del Sie di cortesia. <i>Pflegefachkraft</i> è femminile, quindi <i>Ihre</i> e non <i>Ihr</i>."
      },
      {
        q: "Scegli l'articolo determinativo giusto per ogni nome.",
        items: ["reparto", "camera", "campanello", "colloquio di accoglienza", "braccialetto identificativo", "infermiera, infermiere"]
      },
      {
        q: "Abbina ogni parola al suo significato.",
        pairs: ["infermiera", "infermiere", "reparto", "campanello di chiamata"]
      },
      {
        q: "Metti in ordine le parole.",
        tr: "Adesso la porto in camera.",
        why: "<i>Jetzt bringe ich Sie auf Ihr Zimmer.</i> Se cominci con <i>jetzt</i>, il verbo <i>bringe</i> viene subito dopo e poi il soggetto <i>ich</i>."
      },
      {
        q: "Completa la frase.",
        tr: "Se ha bisogno di aiuto, prema il campanello.",
        why: "<i>Wenn Sie Hilfe brauchen, drücken Sie bitte die Klingel</i>: dopo <i>wenn</i> il verbo <i>brauchen</i> va in fondo, e la principale comincia con il verbo <i>drücken</i>."
      },
      {
        q: "Traduci: «Posso farLe qualche domanda?»",
        why: "<i>Darf ich Ihnen ein paar Fragen stellen</i>: <i>Fragen stellen</i> è «fare domande», e la persona a cui le fai va al dativo, <i>Ihnen</i>. <i>Darf ich</i> è più cortese di <i>Kann ich</i>, ma vanno bene tutti e due."
      },
      {
        q: "Un paziente arriva in reparto.",
        setting: "Sei l'infermiera di turno e accogli il signor Brandt.",
        lines: [
          { tr: "Buongiorno. Mi chiamo Brandt, vengo per il ricovero." },
          { tr: "Rispondi: saluta il paziente e presentati.", answerTr: "Buongiorno, signor Brandt. Sono la signora Marin, la Sua infermiera." },
          { tr: "Dov'è la mia camera?" },
          { tr: "Rispondi che adesso lo porti in camera.", answerTr: "Adesso la porto in camera." },
          { tr: "E se di notte ho bisogno di aiuto?" },
          { tr: "Rispondi che allora deve premere il campanello.", answerTr: "Allora prema il campanello, per favore." }
        ]
      },
      {
        tr: "Buongiorno, mi chiamo Elena Marin. Oggi sono la Sua infermiera e adesso la porto in camera.",
        why: "In <i>Pflegefachkraft</i> la <b>pf</b> si pronuncia con entrambe le consonanti, e la <b>ch</b> dopo <b>a</b> è [x]; in <i>heute</i> la <b>eu</b> si legge [ɔʏ]; in <i>Zimmer</i> la <b>z</b> è [ts]."
      },
      {
        tr: "Posso farLe velocemente qualche domanda?",
        why: "In <i>Darf</i> la <b>r</b> dopo la vocale di solito si vocalizza ed è appena accennata; in <i>Ihnen</i> la <b>h</b> non si legge e allunga la <b>i</b>; in <i>stellen</i> la <b>st</b> iniziale è [ʃt]."
      }
    ]
  },
  "lesson:pfl-u01-l2": {
    theme: "Disturbi",
    title: "Dove Le fa male?",
    objectives: [
      "chiedere dove e da quando il paziente ha dolore",
      "usare il dativo con wehtun, helfen, fehlen e con mir ist übel, mir ist schwindelig",
      "riconoscere i disturbi più frequenti detti con parole comuni",
      "rispondere a un paziente che dice di non stare bene"
    ],
    theory: [
      {
        h: "Chi sta male va al dativo",
        p: "In tedesco molti disturbi si dicono con la persona al <strong>dativo</strong>: <em>Mir tut der Bauch weh</em> (mi fa male la pancia), <em>Mir ist übel</em> (ho la nausea), <em>Mir ist schwindelig</em> (mi gira la testa). Il soggetto grammaticale di <em>wehtun</em> è la parte del corpo: <em>der Bauch tut weh</em>, <em>die Beine tun weh</em>. Con il paziente la domanda è sempre al dativo di cortesia: <em>Wo tut es Ihnen weh? Ist Ihnen übel?</em>"
      },
      {
        h: "helfen e fehlen",
        p: "Anche <strong>helfen</strong> (aiutare) e <strong>fehlen</strong> (mancare) vogliono il dativo: <em>Kann ich Ihnen helfen?</em>, <em>Was fehlt Ihnen?</em> La seconda è la domanda classica per «che cosa ha?», «che disturbi ha?». I pronomi al dativo da sapere a memoria: <em>mir, dir, ihm, ihr, uns, euch, ihnen</em> e <em>Ihnen</em> di cortesia."
      },
      {
        contrast: "In italiano «mi fa male la testa» ha già il pronome al dativo, e questo aiuta: <em>Mir tut der Kopf weh</em> segue lo stesso schema. Ma «ho la nausea» e «mi gira la testa» in tedesco non usano <em>haben</em>: <em>Mir ist übel</em>, <em>Mir ist schwindelig</em>, con <em>sein</em> e il dativo. «Ich bin übel» o «Ich habe übel» non si dicono. Inoltre l'italiano dice «ho mal di testa» al singolare; il paziente tedesco dice quasi sempre il plurale: <em>Ich habe Kopfschmerzen</em>."
      },
      {
        trap: "<em>Wo tut es Sie weh?</em> è sbagliato: con <em>wehtun</em> la persona è al dativo, <em>Ihnen</em>. E non confondere <em>Mir ist übel</em> con <em>Mir ist schlecht</em>: nel parlato può voler dire nausea, ma anche un malessere generico. Se il paziente dice <em>Mir ist schlecht</em>, chiedi: <em>Ist Ihnen übel? Müssen Sie erbrechen?</em> Ultimo falso amico: <em>der Schwindel</em> è il capogiro, ma vuol dire anche «truffa»; in reparto il senso è sempre il primo."
      },
      {
        tip: "Fai indicare il punto: <em>Können Sie es mir zeigen?</em> È più rapido e più preciso di ogni descrizione, e funziona anche quando il paziente ha parole diverse dalle tue. Poi chiedi da quando: <em>Seit wann?</em>"
      }
    ],
    grammar: {
      title: "Il dativo dei disturbi",
      note: "La persona che sta male va al <b>dativo</b>: <b>mir</b> tut ... weh, <b>mir</b> ist übel. Con il paziente: <b>Ihnen</b>.",
      table: {
        head: ["persona", "dativo", "esempio"],
        rows: [
          ["ich", "mir", "Mir ist schwindelig."],
          ["er", "ihm", "Ihm tut der Rücken weh."],
          ["sie", "ihr", "Ihr ist übel."],
          ["wir", "uns", "Uns fehlt nichts."],
          ["Sie", "Ihnen", "Wo tut es Ihnen weh?"]
        ]
      },
      examples: [
        { tr: "Dove Le fa male?", note: "wehtun: la persona al dativo" },
        { tr: "Mi fa male la pancia.", note: "der Bauch è il soggetto, mir il dativo" },
        { tr: "Mi gira la testa.", note: "sein + dativo, non haben" },
        { tr: "Lui ha la nausea.", note: "ihm: dativo di er" },
        { tr: "Che cosa ha? Che disturbi ha?", note: "fehlen + dativo" },
        { tr: "Posso aiutarLa?", note: "helfen + dativo" }
      ]
    },
    vocab: [
      "il dolore (Schmerzen haben: avere dolore)",
      "fare male (es tut mir weh: mi fa male)",
      "il mal di testa (di solito al plurale)",
      "la pancia",
      "la nausea",
      "il capogiro, le vertigini",
      "la mancanza di respiro, il fiato corto",
      "la diarrea",
      "la stitichezza",
      "nauseato (mir ist übel: ho la nausea)",
      "che gira la testa (mir ist schwindelig: mi gira la testa)",
      "aiutare (con il dativo)"
    ],
    dialogue: [
      "Signor Brandt, che disturbi ha? Perché è qui oggi?",
      "Da tre giorni mi fa male la pancia.",
      "Dove Le fa male, esattamente? Me lo può indicare?",
      "Qui, in basso a destra.",
      "Ha anche la nausea?",
      "Sì, ho la nausea, e ieri ho avuto la diarrea.",
      "Ha anche fiato corto o capogiri?",
      "No, quello no."
    ],
    exercises: [
      {
        q: "Il paziente vuole dire «Mi fa male la testa». Quale frase è corretta?",
        opts: ["Ich tut der Kopf weh.", "Mich tut der Kopf weh.", "Mir tut der Kopf weh."],
        why: "Con <i>wehtun</i> la persona va al <b>dativo</b>: <i>mir</i>. Il soggetto è <i>der Kopf</i>, per questo il verbo è <i>tut</i>."
      },
      {
        tr: "Il presente di helfen, tutte le persone.",
        why: "<i>Helfe, hilfst, hilft, helfen, helft, helfen</i>: alla seconda e terza persona singolare la <b>e</b> diventa <b>i</b>. E chi riceve l'aiuto va al dativo: <i>Ich helfe Ihnen</i>."
      },
      {
        q: "Completa: «Kann ich ___ helfen?» (al paziente)",
        hint: "Sie al dativo",
        why: "<b>Ihnen</b>: <i>helfen</i> vuole il dativo, e il dativo di cortesia è <i>Ihnen</i>, con la maiuscola."
      },
      {
        q: "Completa con il dativo di er.",
        tr: "A lui fa male la schiena e ha la nausea.",
        why: "<i>Ihm tut der Rücken weh, und ihm ist übel</i>: tutte e due le espressioni vogliono il dativo, <i>ihm</i>."
      },
      {
        q: "Abbina ogni frase del paziente al suo significato.",
        pairs: ["ho la nausea", "mi gira la testa", "mi manca il fiato", "ho la diarrea"]
      },
      {
        q: "Scegli l'articolo determinativo giusto per ogni nome.",
        items: ["pancia", "nausea", "capogiro", "fiato corto", "diarrea", "stitichezza"]
      },
      {
        q: "Metti in ordine le parole.",
        tr: "Da ieri mi fa male la testa.",
        why: "<i>Seit gestern tut mir der Kopf weh.</i> <i>Seit gestern</i> in testa, il verbo <i>tut</i> in seconda posizione, <i>weh</i> in fondo."
      },
      {
        q: "Traduci (al paziente): «Le gira la testa?»",
        why: "<i>Ist Ihnen schwindelig?</i> Con <i>sein</i> e il dativo, non con <i>haben</i>. Si scrive anche <i>schwindlig</i>."
      },
      {
        q: "Una paziente suona il campanello.",
        setting: "Entri nella stanza: la paziente dice di non stare bene.",
        lines: [
          { tr: "Buongiorno. Non sto affatto bene." },
          { tr: "Chiedi che disturbi ha.", answerTr: "Che disturbi ha?" },
          { tr: "Mi fa male la pancia." },
          { tr: "Chiedi dove le fa male, esattamente.", answerTr: "Dove Le fa male, esattamente?" },
          { tr: "Qui, a sinistra. E ho la nausea." },
          { tr: "Chiedi da quando ha la nausea.", answerTr: "Da quando ha la nausea?" }
        ]
      },
      {
        tr: "Da tre giorni mi fa male la pancia. Ho la nausea, e ieri ho avuto la diarrea.",
        why: "In <i>Bauch</i> la <b>au</b> è [aʊ] e la <b>ch</b> finale è [x]; in <i>übel</i> la <b>ü</b> è arrotondata; in <i>Durchfall</i> la <b>ch</b> dopo <b>r</b> è [ç]."
      },
      {
        tr: "Dove Le fa male, esattamente?",
        why: "In <i>genau</i> la <b>g</b> è sempre dura; in <i>tut</i> la <b>u</b> è lunga; in <i>weh</i> la <b>w</b> si legge [v] e la <b>h</b> allunga la <b>e</b>."
      }
    ]
  },
  "lesson:pfl-u01-l3": {
    theme: "La storia clinica",
    title: "Il modulo di anamnesi",
    objectives: [
      "compilare con il paziente il modulo di anamnesi",
      "chiedere malattie pregresse, operazioni, allergie e farmaci",
      "usare il Perfekt per ciò che è già successo, con haben o con sein",
      "chiedere il piano dei farmaci e quando li ha presi l'ultima volta"
    ],
    theory: [
      {
        h: "Le domande del modulo",
        p: "Il <strong>Anamnesebogen</strong> è il modulo che si compila al ricovero. Le domande fisse: <em>Haben Sie Vorerkrankungen?</em> (malattie pregresse), <em>Hatten Sie schon einmal eine Operation?</em>, <em>Haben Sie Allergien?</em>, <em>Welche Medikamente nehmen Sie regelmäßig ein?</em>, <em>Sind Sie in letzter Zeit gestürzt?</em> Su un'allergia chiedi sempre anche <strong>la reazione</strong> (<em>Was ist dann passiert?</em>) e, se il paziente non ricorda il nome del farmaco, annota chi lo sa: il medico di famiglia, <em>der Hausarzt</em>."
      },
      {
        h: "Il Perfekt della storia clinica",
        p: "Quello che è già successo si racconta al <strong>Perfekt</strong>: ausiliare in seconda posizione, participio in fondo. La maggior parte dei verbi usa <strong>haben</strong>: <em>Haben Sie Ihre Tabletten genommen? Ich habe nichts gegessen. Ich habe das Antibiotikum nicht vertragen.</em> I verbi intransitivi di spostamento o di cambiamento di stato di solito usano <strong>sein</strong>: <em>Sind Sie gestürzt?</em> È una tendenza, non una legge: decide il verbo con il suo significato (<em>Ich habe getanzt</em>), quindi l'ausiliare si impara insieme al verbo. Nei verbi separabili il <em>ge-</em> va dopo il prefisso: <em>einweisen</em> → <em>eingewiesen</em>, <em>einnehmen</em> → <em>eingenommen</em>; se il verbo base ha già un prefisso inseparabile, il <em>ge-</em> non c'è: <em>vorbereiten</em> → <em>vorbereitet</em>. Con <em>sein</em> e <em>haben</em> stessi si usa più spesso il Präteritum: <em>Ich hatte eine Operation. Ich war im Krankenhaus.</em>"
      },
      {
        contrast: "In italiano «Ha preso le pastiglie?» mette il participio subito dopo l'ausiliare. In tedesco, nella frase principale, il participio va <strong>in fondo</strong> e tutto il resto sta in mezzo: <em>Haben Sie heute schon Ihre Tabletten genommen?</em> La scelta dell'ausiliare segue più o meno la stessa logica dell'italiano (movimento e cambiamento con <em>sein</em>), ma non sempre: «sono caduto» è <em>ich bin gestürzt</em>, come in italiano, mentre «ho preso» è <em>ich habe genommen</em>. In caso di dubbio, il verbo transitivo con un oggetto vuole <em>haben</em>."
      },
      {
        trap: "<em>Die Allergie</em> somiglia all'italiano «allergia», ma l'accento cade sull'ultima sillaba: <em>Aller-<b>gie</b></em>, con la <b>g</b> dura. «Prendere» un farmaco è <em>nehmen</em> o, più formale, <em>einnehmen</em>; non usare <em>bekommen</em>, che è «ricevere» (<em>Sie bekommen eine Infusion</em>: è il personale che la dà). Il verbo <em>vertragen</em> si usa così: <em>Ich vertrage kein Penicillin</em>, «non tollero la penicillina». Infine, <em>die Einweisung</em> ha due sensi: l'impegnativa per il ricovero e, in reparto, l'istruzione all'uso di un apparecchio (<em>Geräteeinweisung</em>)."
      },
      {
        tip: "Chiedi il piano dei farmaci invece di farti dettare i nomi: <em>Haben Sie Ihren Medikationsplan dabei?</em> Un nome di farmaco pronunciato da un paziente, e capito da chi non è madrelingua, è la fonte di errore più facile del modulo."
      }
    ],
    grammar: {
      title: "Perfekt con haben e con sein",
      note: "Ausiliare in <b>seconda posizione</b> (o prima nella domanda sì/no), participio <b>in fondo</b>. di solito <b>sein</b> con i verbi intransitivi di spostamento e di cambiamento di stato, <b>haben</b> con quasi tutti gli altri.",
      table: {
        head: ["infinito", "frase al Perfekt", "nota"],
        rows: [
          ["nehmen", "Haben Sie Ihre Tabletten genommen?", "haben, participio forte"],
          ["vertragen", "Ich habe das Antibiotikum nicht vertragen.", "ver- è inseparabile: niente ge-"],
          ["einweisen", "Der Hausarzt hat mich eingewiesen.", "separabile: ge- dopo il prefisso"],
          ["stürzen", "Sind Sie gestürzt?", "sein: movimento"]
        ]
      },
      examples: [
        { tr: "Ha già preso le Sue pastiglie oggi?", note: "haben + genommen in fondo" },
        { tr: "Stamattina non ho mangiato niente.", note: "domanda tipica prima di un esame a digiuno" },
        { tr: "Il mio medico di famiglia mi ha mandato in ospedale.", note: "einweisen: impegnativa per il ricovero" },
        { tr: "È caduto di recente?", note: "stürzen vuole sein" },
        { tr: "Non ho tollerato l'antibiotico.", note: "vertragen: nessun ge-" },
        { tr: "Quando ha bevuto qualcosa l'ultima volta?", note: "domanda con W-: haben in seconda posizione" }
      ]
    },
    vocab: [
      "il modulo di anamnesi",
      "la malattia pregressa",
      "l'allergia",
      "il farmaco",
      "il piano terapeutico (elenco dei farmaci del paziente)",
      "l'operazione, l'intervento",
      "il medico di famiglia",
      "l'impegnativa di ricovero",
      "la caduta",
      "assumere, prendere (un farmaco)",
      "tollerare, sopportare",
      "regolarmente"
    ],
    dialogue: [
      "Signor Brandt, adesso compiliamo insieme il modulo di anamnesi. Ha malattie pregresse?",
      "Sì, ho la pressione alta. E due anni fa ho avuto un'operazione al ginocchio.",
      "Ha allergie?",
      "Una volta non ho tollerato un antibiotico. Mi è venuta un'eruzione cutanea.",
      "Si ricorda ancora come si chiama il farmaco?",
      "No, purtroppo no. Ma il mio medico di famiglia lo sa.",
      "Bene, chiediamo a lui. Quali farmaci prende regolarmente?",
      "Ecco il mio piano terapeutico.",
      "Grazie. Ha già preso le Sue pastiglie oggi?",
      "Sì, stamattina."
    ],
    culture: {
      title: "Uno sguardo tedesco: il Medikationsplan",
      text: "<p>In Germania chi ha l'assicurazione pubblica e assume contemporaneamente almeno tre farmaci ad azione sistemica per almeno 28 giorni ha diritto a un <i>Medikationsplan</i> su un modulo unico nazionale, compilato dal medico di famiglia e con un codice a barre che la farmacia e l'ospedale possono leggere. Molti pazienti lo portano nel portafoglio, e molti lo chiamano semplicemente <i>Medikamentenplan</i> o <i>mein Zettel</i>.</p><p>Al ricovero il piano non sostituisce la tua domanda: chiedi sempre se il paziente prende qualcosa che non c'è scritto, per esempio un prodotto comprato senza ricetta o una pomata. La risposta va nel modulo di anamnesi, e la decisione su cosa continuare spetta al medico.</p>"
    },
    exercises: [
      {
        tr: "Il Perfekt di nehmen, tutte le persone.",
        why: "<i>Habe genommen, hast genommen, hat genommen, haben genommen, habt genommen, haben genommen</i>: ausiliare <i>haben</i> e participio forte <i>genommen</i>."
      },
      {
        q: "Vuoi chiedere al paziente «È caduto di recente?». Quale frase è corretta?",
        opts: [
          "Haben Sie in letzter Zeit gestürzt?",
          "Sind Sie in letzter Zeit gestürzt?",
          "Sind Sie in letzter Zeit gestürzt worden?"
        ],
        why: "<b>stürzen</b> è un verbo di movimento e vuole <b>sein</b>: <i>Sind Sie gestürzt?</i> La terza è un passivo, che non ha senso qui."
      },
      {
        q: "Completa: «Haben Sie heute schon Ihre Tabletten ___?»",
        hint: "participio di nehmen",
        why: "<b>genommen</b>, in fondo alla frase: il participio di <i>nehmen</i> è forte e cambia la vocale."
      },
      {
        q: "Quali domande del modulo sono corrette?",
        opts: [
          "Haben Sie Allergien?",
          "Welche Medikamente nehmen Sie regelmäßig ein?",
          "Welche Medikamente Sie nehmen regelmäßig ein?",
          "Hatten Sie schon einmal eine Operation?",
          "Haben Sie schon einmal eine Operation gehabt worden?"
        ],
        why: "Nella domanda con W- il verbo viene subito dopo il gruppo interrogativo, che può avere più parole: <i>Welche Medikamente nehmen Sie</i>. L'ultima mescola Perfekt e passivo: si dice <i>Hatten Sie</i> o <i>Haben Sie ... gehabt</i>."
      },
      {
        q: "Completa la frase al Perfekt.",
        tr: "Non ho tollerato l'antibiotico.",
        why: "<i>Ich habe das Antibiotikum nicht vertragen</i>: <i>vertragen</i> ha il prefisso inseparabile <i>ver-</i>, quindi il participio non prende <i>ge-</i> ed è uguale all'infinito."
      },
      {
        q: "Metti in ordine le parole.",
        tr: "Quando ha mangiato qualcosa l'ultima volta?",
        why: "<i>Wann haben Sie zuletzt etwas gegessen?</i> La parola interrogativa, poi l'ausiliare <i>haben</i>, il soggetto, e il participio <i>gegessen</i> in fondo."
      },
      {
        q: "Scegli l'articolo determinativo giusto per ogni nome.",
        items: ["modulo di anamnesi", "malattia pregressa", "farmaco", "caduta", "operazione", "medico di famiglia"]
      },
      {
        q: "Traduci: «Ha già mangiato qualcosa oggi?»",
        why: "<i>Haben Sie heute schon etwas gegessen?</i> Domanda sì/no: l'ausiliare apre la frase e il participio va in fondo. <i>Schon</i> traduce «già»."
      },
      {
        q: "Continui il modulo di anamnesi.",
        setting: "Il paziente ha già detto che ha la pressione alta.",
        lines: [
          { tr: "Che cos'altro vuole sapere?" },
          { tr: "Chiedi se ha già avuto un'operazione.", answerTr: "Ha già avuto un'operazione?" },
          { tr: "Sì, due anni fa, al ginocchio." },
          { tr: "Chiedi se ha allergie.", answerTr: "E ha allergie?" },
          { tr: "No, credo di no." },
          { tr: "Chiedi se ha già preso le pastiglie oggi.", answerTr: "Bene. Ha già preso le Sue pastiglie oggi?" }
        ]
      },
      {
        tr: "Ho la pressione alta. Due anni fa ho avuto un'operazione al ginocchio, e non ho tollerato un antibiotico.",
        why: "In <i>Knie</i> si pronunciano sia la <b>k</b> sia la <b>n</b>; in <i>Blutdruck</i> la <b>u</b> di <i>Blut</i> è lunga e quella di <i>Druck</i> breve; in <i>vertragen</i> la <b>v</b> si legge [f]."
      },
      {
        tr: "Quali farmaci prende regolarmente?",
        why: "In <i>Medikamente</i> l'accento cade su <b>men</b>; in <i>regelmäßig</i> la <b>ä</b> è lunga e la <b>ß</b> è una <b>s</b> sorda; la <b>g</b> finale si legge [ç]."
      }
    ]
  },
  "lesson:pfl-u01-l4": {
    theme: "Due registri",
    title: "Lingua tecnica e lingua del paziente",
    objectives: [
      "riconoscere i termini tecnici di origine latina e greca usati in documentazione e con i medici",
      "tradurre ogni termine tecnico nella parola che usa il paziente",
      "scegliere il registro giusto a seconda di chi ascolta",
      "trovare l'articolo di un composto dall'ultimo elemento"
    ],
    theory: [
      {
        h: "Due lingue nello stesso reparto",
        p: "Molti concetti clinici hanno due nomi. La <strong>Fachsprache</strong>, di radice latina o greca, si usa con i medici, nella consegna e nella documentazione: <em>Hypertonie, Dyspnoe, Obstipation, Emesis</em>. La <strong>Laiensprache</strong>, tedesca, si usa con i pazienti e con i familiari: <em>Bluthochdruck, Atemnot, Verstopfung, Erbrechen</em>. Un'infermiera passa dall'una all'altra decine di volte al giorno, anche nella stessa frase: <em>Er hat eine Hypertonie</em> al medico, <em>Sie haben Bluthochdruck</em> al paziente."
      },
      {
        h: "Le parole del paziente sono composti",
        p: "La Laiensprache costruisce i nomi unendo parole semplici: <em>Blut + hoch + Druck</em> = <em>der Bluthochdruck</em>, <em>Zucker + Krankheit</em> = <em>die Zuckerkrankheit</em>, <em>Atem + Not</em> = <em>die Atemnot</em>. L'<strong>articolo lo decide l'ultimo elemento</strong>: <em>der Druck</em>, quindi <em>der Bluthochdruck</em>; <em>die Krankheit</em>, quindi <em>die Zuckerkrankheit</em>; <em>das Gespräch</em>, quindi <em>das Aufnahmegespräch</em>. Il paziente spesso accorcia ancora: <em>Ich habe Zucker</em> vuol dire «ho il diabete»."
      },
      {
        contrast: "Per chi parla italiano la Fachsprache è quasi gratis: <em>Hypertonie</em> è ipertensione, <em>Dyspnoe</em> dispnea, <em>Obstipation</em> ostipazione, <em>Zephalgie</em> cefalea, <em>Emesis</em> emesi. È proprio questo il rischio. In Italia molti di questi termini li capisce anche il paziente («ho la pressione alta, l'ipertensione»), mentre per molti pazienti tedeschi <em>Hypertonie</em> è una parola opaca, che spaventa o che non sente sua. La parola che ti manca, e che devi studiare, è quella tedesca di tutti i giorni: <em>Bluthochdruck</em>, <em>Atemnot</em>, <em>Verstopfung</em>, <em>Kopfschmerzen</em>, <em>Erbrechen</em>. In consegna, invece, il termine tecnico è l'uso normale perché è più preciso, anche se le parole comuni non sono un errore."
      },
      {
        trap: "In reparto <em>Hypertonie</em> da sola indica l'ipertensione arteriosa (<em>arterielle Hypertonie</em>); in neurologia la stessa parola vuol dire anche tono muscolare aumentato, e decide il contesto. Una lettera cambia tutto: <em>Hypertonie</em> è la pressione alta, <em>Hypotonie</em> la pressione bassa, proprio come in italiano iper- e ipo-: a voce, in una consegna veloce, si confondono facilmente, e nel dubbio conviene chiedere conferma. <em>Das Abdomen</em> è neutro, mentre la parola del paziente è maschile: <em>der Bauch</em>. E <em>Diarrhö</em> si scrive anche <em>Diarrhoe</em>: tutte e due le grafie sono corrette, «Diarrea» no."
      },
      {
        tip: "Quando spieghi al paziente quello che ha detto il medico, ripeti la parola tecnica una volta e poi traducila: <em>Das ist eine Hypertonie, also Bluthochdruck.</em> Il paziente la ritroverà nella lettera di dimissione e saprà a cosa corrisponde."
      }
    ],
    grammar: {
      title: "Fachsprache e Laiensprache",
      note: "Con medici e in documentazione la colonna <b>Fachsprache</b>; con pazienti e familiari la colonna <b>Laiensprache</b>. L'articolo dei composti è quello dell'<b>ultimo elemento</b>.",
      table: {
        head: ["Fachsprache", "Laiensprache", "italiano"],
        rows: [
          ["die Hypertonie", "der Bluthochdruck", "ipertensione"],
          ["der Diabetes mellitus", "die Zuckerkrankheit, «Zucker»", "diabete"],
          ["die Dyspnoe", "die Atemnot", "dispnea"],
          ["die Zephalgie", "die Kopfschmerzen", "cefalea"],
          ["die Nausea", "die Übelkeit", "nausea"],
          ["die Emesis", "das Erbrechen", "vomito"],
          ["die Obstipation", "die Verstopfung", "stitichezza"],
          ["die Diarrhö", "der Durchfall", "diarrea"],
          ["das Abdomen", "der Bauch", "addome, pancia"]
        ]
      },
      examples: [
        { tr: "Il paziente ha un'ipertensione nota.", note: "Fachsprache: al medico o in documentazione" },
        { tr: "Signor Brandt, Lei ha la pressione alta.", note: "Laiensprache: al paziente" },
        { tr: "Sotto sforzo il paziente ha dispnea.", note: "formula tipica della documentazione" },
        { tr: "Le manca il fiato quando fa le scale?", note: "la stessa domanda, per il paziente" },
        { tr: "Il diabete nella lingua tecnica si chiama Diabetes mellitus.", note: "Zucker + Krankheit: die, per via di Krankheit" },
        { tr: "Molti pazienti dicono semplicemente: «ho lo zucchero».", note: "Zucker per diabete: forma colloquiale molto diffusa" }
      ]
    },
    vocab: [
      "l'anamnesi (termine tecnico)",
      "la storia clinica, i precedenti (parola per il paziente)",
      "l'ipertensione (termine tecnico)",
      "la pressione alta (parola per il paziente)",
      "il diabete mellito (termine tecnico)",
      "il diabete (parola per il paziente)",
      "la dispnea (termine tecnico)",
      "la cefalea (termine tecnico)",
      "l'emesi, il vomito (termine tecnico)",
      "il vomito (parola per il paziente)",
      "la stitichezza (termine tecnico)",
      "la diarrea (termine tecnico)"
    ],
    dialogue: [
      "Dottor Weber, il signor Brandt ha un'ipertensione nota e da tre giorni dolore addominale.",
      "Ha anche nausea o vomito?",
      "Nausea sì, niente vomito. In più diarrea da ieri.",
      "Signora Marin, che cosa ha detto il medico? Non capisco queste parole.",
      "Non si preoccupi, signor Brandt. Ha solo chiesto se ha la nausea e se ha vomitato.",
      "Ah, ecco. E che cos'è una «Hypertonie»?",
      "È la pressione alta. Quella la conosce già."
    ],
    exercises: [
      {
        q: "Abbina ogni termine tecnico alla parola che usa il paziente.",
        pairs: ["der Bluthochdruck", "die Atemnot", "die Verstopfung", "die Kopfschmerzen", "das Erbrechen"]
      },
      {
        q: "Parli con il paziente. Quale frase è adatta?",
        opts: [
          "Sie haben eine Hypertonie.",
          "Bei Ihnen besteht eine arterielle Hypertonie.",
          "Sie haben Bluthochdruck."
        ],
        why: "Con il paziente si usa la Laiensprache: <b>Bluthochdruck</b>. Le prime due sono corrette, ma sono frasi da documentazione o da medico a medico."
      },
      {
        q: "Quali parole sono adatte al paziente?",
        opts: ["die Verstopfung", "die Obstipation", "die Übelkeit", "die Nausea", "der Durchfall", "die Diarrhö"],
        why: "<i>Verstopfung</i>, <i>Übelkeit</i> e <i>Durchfall</i> sono parole tedesche comuni. <i>Obstipation</i>, <i>Nausea</i> e <i>Diarrhö</i> sono termini tecnici, per il medico e la documentazione."
      },
      {
        q: "Il medico ha scritto «Hypertonie». Completa la frase per il paziente: «Sie haben ___.»",
        hint: "parola composta, Laiensprache",
        why: "<b>Bluthochdruck</b>: <i>Blut + hoch + Druck</i>. Va bene anche <i>hohen Blutdruck</i>."
      },
      {
        q: "Scegli l'articolo: nei composti decide l'ultimo elemento.",
        items: ["pressione alta (Druck)", "diabete (Krankheit)", "fiato corto (Not)", "modulo di anamnesi (Bogen)", "colloquio di accoglienza (Gespräch)", "storia clinica (Geschichte)"]
      },
      {
        q: "Completa: nella prima frase il termine tecnico, nella seconda la parola per il paziente.",
        tr: "Il paziente ha dispnea sotto sforzo. Gli chiedo: le manca il fiato quando fa le scale?",
        why: "<i>Dyspnoe</i> è il termine per la documentazione, <i>Atemnot</i> la parola per il paziente: stesso concetto, due registri."
      },
      {
        q: "Metti in ordine le parole.",
        tr: "Le manca il fiato quando fa le scale?",
        why: "<i>Haben Sie Atemnot, wenn Sie Treppen steigen?</i> La domanda sì/no comincia con il verbo; dopo <i>wenn</i> il verbo <i>steigen</i> va in fondo."
      },
      {
        q: "Traduci, rivolto al paziente: «Ha la pressione alta?»",
        why: "<i>Haben Sie Bluthochdruck?</i> oppure <i>Haben Sie hohen Blutdruck?</i> Al paziente non si dice <i>Hypertonie</i>."
      },
      {
        q: "Il medico ha scritto «Diabetes mellitus». Completa per il paziente: «Seit wann haben Sie die ___?»",
        hint: "Zucker + Krankheit",
        why: "<b>Zuckerkrankheit</b>, femminile come <i>Krankheit</i>. Molti pazienti dicono anche solo <i>Zucker</i>: <i>Ich habe Zucker</i>."
      },
      {
        tr: "Il paziente ha un'ipertensione nota. Al signor Brandt dico semplicemente: Lei ha la pressione alta.",
        why: "In <i>Hypertonie</i> l'accento cade sulla <b>nie</b> finale e la <b>y</b> si legge come una <b>ü</b>; in <i>Bluthochdruck</i> la <b>ch</b> dopo <b>o</b> è [x]."
      },
      {
        tr: "Le manca il fiato quando fa le scale?",
        why: "In <i>Atemnot</i> l'accento è sulla prima sillaba, <b>A</b>; in <i>Treppen</i> la <b>e</b> è breve; in <i>steigen</i> la <b>st</b> iniziale è [ʃt] e la <b>ei</b> è [aɪ]."
      }
    ]
  },
  "lesson:pfl-u01-test": {
    theme: "Verifica",
    title: "Test: Accoglienza e anamnesi",
    objectives: [
      "verificare il registro con il paziente, il dativo dei disturbi, il Perfekt della storia clinica e le coppie Fachsprache / Laiensprache"
    ],
    theory: [
      {
        p: "Undici domande sull'intera unità. Si supera con il 70%. I contenuti clinici sono esempi didattici: in reparto vale sempre il protocollo della struttura."
      }
    ],
    exercises: [
      {
        q: "Saluti una paziente di 75 anni che non conosci. Quale frase è adatta?",
        opts: ["Hallo, wie geht's dir?", "Guten Tag, wie geht es Ihnen?", "Guten Tag, wie geht es dir?"],
        why: "Con i pazienti si usa sempre il <b>Sie</b>: <i>Wie geht es Ihnen?</i>, con il dativo di cortesia."
      },
      {
        q: "Completa: «Wo tut es ___ weh?» (al paziente)",
        hint: "Sie al dativo",
        why: "<b>Ihnen</b>: con <i>wehtun</i> la persona va al dativo."
      },
      {
        q: "Il paziente dice «Ho la nausea». Completa: «___ ist übel.»",
        hint: "ich al dativo",
        why: "<b>Mir</b>: <i>Mir ist übel</i>, con <i>sein</i> e il dativo. «Ich bin übel» non vuol dire avere la nausea."
      },
      {
        tr: "Il Perfekt di einnehmen, tutte le persone.",
        why: "<i>Habe eingenommen, hast eingenommen, hat eingenommen, haben eingenommen, habt eingenommen, haben eingenommen</i>: verbo separabile, il <i>ge-</i> va tra <i>ein</i> e <i>nommen</i>."
      },
      {
        q: "Abbina ogni termine tecnico alla parola che usa il paziente.",
        pairs: ["der Bluthochdruck", "die Atemnot", "die Verstopfung", "der Durchfall"]
      },
      {
        q: "Quali frasi sono corrette con un paziente?",
        opts: [
          "Kann ich Ihnen helfen?",
          "Kann ich Sie helfen?",
          "Sind Sie in letzter Zeit gestürzt?",
          "Jetzt bringe ich Sie auf Ihr Zimmer.",
          "Haben Sie in letzter Zeit gestürzt?"
        ],
        why: "<i>helfen</i> vuole il dativo (<i>Ihnen</i>), <i>stürzen</i> vuole <i>sein</i> al Perfekt, e dopo <i>jetzt</i> il verbo resta in seconda posizione."
      },
      {
        q: "Completa la frase al Perfekt.",
        tr: "Il mio medico di famiglia mi ha mandato in ospedale con l'impegnativa.",
        why: "<i>Mein Hausarzt hat mich ins Krankenhaus eingewiesen</i>: <i>hat</i> in seconda posizione, il participio separabile <i>eingewiesen</i> in fondo."
      },
      {
        q: "Metti in ordine le parole.",
        tr: "Quali farmaci prende regolarmente?",
        why: "<i>Welche Medikamente nehmen Sie regelmäßig ein?</i> Il verbo <i>nehmen</i> subito dopo la parte interrogativa, il prefisso <i>ein</i> in fondo."
      },
      {
        q: "Scegli l'articolo determinativo giusto per ogni nome.",
        items: ["anamnesi", "pressione alta", "farmaco", "colloquio di accoglienza", "diarrea", "storia clinica"]
      },
      {
        tr: "Buongiorno, oggi sono la Sua infermiera. Adesso compiliamo insieme il modulo di anamnesi. Ha allergie?",
        why: "In <i>Anamnesebogen</i> l'accento cade su <b>ne</b>; in <i>Allergien</i> la <b>g</b> è dura e la <b>ie</b> finale si legge [iːən]; in <i>fülle</i> la <b>ü</b> è breve e arrotondata."
      },
      {
        tr: "Da quando Le fa male?",
        why: "In <i>Seit</i> la <b>s</b> iniziale è sonora [z] e la <b>ei</b> è [aɪ]; in <i>wann</i> la <b>w</b> si legge [v]; in <i>weh</i> la <b>h</b> allunga la <b>e</b>."
      }
    ]
  }
});
