/* ============================================================
   Learner-language text (it) for data/core/c1-02.js, unit c1-u04.
   Keys point at ids in the neutral layer; arrays merge by index,
   so their length has to match core.
   Checked by scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("it", {
  "unit:c1-u04": {
    title: "Sarà stanco",
    grammarNote: "Futur I e II di supposizione (er wird wohl müde sein, sie wird es gelesen haben) · modali soggettivi: muss, dürfte, könnte, mag, soll, will · particelle modali wohl, ja, etwa, halt, eben"
  },
  "lesson:c1-u04-l1": {
    theme: "Supposizioni e grado di certezza",
    title: "Il futuro che non parla del futuro",
    objectives: [
      "riconoscere il Futur I come supposizione sul presente",
      "fare supposizioni sul passato con il Futur II",
      "distinguere la supposizione dall'azione conclusa entro un momento futuro",
      "dosare la certezza con wohl, schon, sicher, vermutlich"
    ],
    theory: [
      {
        h: "Werden per supporre",
        p: "In tedesco il vero futuro si dice spesso con il presente e un indicatore di tempo (<em>Morgen fliege ich nach Wien</em>). <strong>werden</strong> + infinito serve soprattutto per una <strong>supposizione sul presente</strong>: <em>Er wird wohl noch im Stau stehen. Es klingelt. Das wird der Postbote sein.</em> Per una supposizione sul <strong>passato</strong> si usa il <strong>Futur II</strong>, <em>werden</em> + participio II + <em>haben</em> o <em>sein</em>: <em>Sie wird die Nachricht inzwischen gelesen haben.</em> Lo stesso Futur II può indicare un'azione che sarà <strong>conclusa entro un momento futuro</strong>: <em>Bis Ende des Monats werden wir die Studie abgeschlossen haben.</em>"
      },
      {
        h: "Gli indizi",
        p: "Per decidere quale lettura hai davanti guarda il momento e gli avverbi. Un riferimento al presente (<em>jetzt, noch, gerade</em>) o al passato (<em>inzwischen, längst</em>) indica una supposizione; una scadenza con <em>bis</em> indica un'azione conclusa nel futuro. Gli avverbi dosano la certezza: <em>wohl</em> e <em>vermutlich</em> restano prudenti, <em>schon</em> rassicura (<em>Das wird schon klappen</em>), <em>sicher</em> e <em>bestimmt</em> la rafforzano."
      },
      {
        contrast: "L'italiano ha lo stesso uso: il futuro semplice di supposizione (<em>sarà in ufficio</em>) e il futuro anteriore (<em>avrà letto</em>). Ti viene quindi naturale, ma in tedesco la frase è molto meno frequente senza un avverbio: <em>wohl</em>, <em>schon</em> o <em>sicher</em> dichiarano la supposizione, mentre <em>Er wird zu Hause sein</em> da solo, senza contesto chiaro, può essere letto anche come futuro. Il futuro anteriore italiano di conclusione (<em>entro venerdì avremo finito</em>) corrisponde invece al Futur II con <em>bis</em>."
      },
      {
        trap: "Per il passato non basta il Futur I: <em>Er wird gestern krank sein</em> non funziona, serve il Futur II, <em>Er wird gestern wohl krank gewesen sein</em>. E l'ausiliare dell'infinito perfetto è quello del Perfekt del verbo: <em>Sie wird abgereist sein</em> (moto, <em>sein</em>), <em>Er wird es vergessen haben</em> (<em>haben</em>)."
      },
      {
        tip: "Chiediti sempre a quale momento si riferisce la frase: presente, passato o un punto futuro con <em>bis</em>. Il momento decide tra Futur I (supposizione sul presente), Futur II (passato) e Futur II di conclusione."
      }
    ],
    grammar: {
      title: "Futur I e II come supposizione",
      note: "<b>werden + infinito</b>: supposizione sul presente. <b>werden + participio II + haben/sein</b>: supposizione sul passato oppure azione conclusa entro un momento futuro (con <i>bis</i>). Dosaggio: <i>wohl, vermutlich</i> (prudente), <i>schon</i> (rassicurante), <i>sicher</i> (più certo).",
      table: {
        head: ["costruzione", "valore", "esempio"],
        rows: [
          ["werden + infinito", "supposizione sul presente", "Er wird wohl noch im Stau stehen."],
          ["werden + participio II + haben/sein", "supposizione sul passato", "Sie wird die Nachricht inzwischen gelesen haben."],
          ["werden + participio II + haben/sein con bis", "azione conclusa entro un momento futuro", "Bis Ende des Monats werden wir die Studie abgeschlossen haben."],
          ["werden + infinito + schon", "rassicurazione", "Das wird schon klappen."],
          ["presente + indicazione di tempo", "futuro programmato", "Morgen fliege ich nach Wien."]
        ]
      },
      examples: [
        { tr: "Le luci sono spente, a quest'ora dormirà.", note: "supposizione sul presente con schon" },
        { tr: "Suonano. Sarà il postino.", note: "werden + sein: supposizione" },
        { tr: "Sarà probabilmente ancora in coda.", note: "werden + wohl + infinito" },
        { tr: "Il messaggio lo avrà ormai letto.", note: "Futur II: supposizione sul passato" },
        { tr: "Entro fine mese avremo concluso lo studio.", note: "Futur II di conclusione con bis" },
        { tr: "Vedrai che andrà bene.", note: "werden + schon: rassicurazione" }
      ]
    },
    vocab: [
      "l'ipotesi, il presupposto",
      "il sospetto",
      "la probabilità",
      "l'indizio, il punto di riferimento",
      "il dubbio",
      "la certezza",
      "supporre, ritenere",
      "congetturare, fare supposizioni (registro giornalistico)",
      "partire dal presupposto",
      "probabilmente",
      "sicuramente, certamente",
      "nel frattempo, ormai"
    ],
    exercises: [
      {
        q: "Nella chat dell'ufficio leggi tre frasi sul capo. Quale descrive un'azione futura e non una supposizione?",
        opts: [
          "Der Chef wird nächste Woche aus dem Urlaub zurückkehren.",
          "Der Chef wird jetzt im Urlaub sein, er hat es ja angekündigt.",
          "Der Chef wird die Mail längst gelesen haben."
        ],
        why: "La prima ha <i>nächste Woche</i>: un evento che avverrà, quindi un futuro. Nelle altre il momento è il presente (<i>jetzt</i>) o il passato (<i>längst gelesen haben</i>): sono supposizioni."
      },
      {
        q: "Una catena di negozi annuncia: «Bis Jahresende werden wir alle Filialen modernisiert haben.» Che cosa esprime il Futur II?",
        opts: [
          "un'azione che sarà conclusa entro un momento futuro",
          "una supposizione su qualcosa che è già successo",
          "un passivo al presente"
        ],
        why: "<i>bis Jahresende</i> fissa il punto futuro entro cui l'azione sarà finita, e chi parla assume un impegno, non fa una congettura: manca anche un avverbio come <i>wohl</i>."
      },
      {
        q: "Sai che la lettera è stata consegnata ieri, ma non sai se il destinatario l'ha già letta. Quale frase formula la supposizione giusta?",
        opts: [
          "Er wird den Brief inzwischen gelesen haben.",
          "Er hat den Brief inzwischen gelesen.",
          "Er wird den Brief inzwischen lesen."
        ],
        why: "Serve il Futur II: <i>wird ... gelesen haben</i> guarda indietro a un'azione che si suppone già avvenuta. La seconda presenta la lettura come un fatto sicuro, la terza (Futur I) riguarda ciò che sta succedendo adesso o succederà."
      },
      {
        q: "Il campanello suona e immagini che sia il corriere: «Es klingelt. Das ___ der Paketbote sein.»",
        hint: "forma di werden alla terza persona",
        why: "<b>wird</b>: <i>werden</i> + infinito (<i>sein</i>) è una supposizione sul presente, «sarà il corriere»."
      },
      {
        q: "Una dirigente promette: «Bis nächsten Freitag werden wir das Gutachten fertiggestellt ___.»",
        hint: "Futur II: ausiliare",
        why: "<b>haben</b>: Futur II di conclusione. <i>fertigstellen</i> forma il Perfekt con <i>haben</i>."
      },
      {
        q: "Completa con le forme giuste.",
        tr: "I colleghi saranno adesso in riunione, e il rapporto lo avranno sicuramente già letto.",
        why: "<i>werden</i> + <i>sitzen</i> o <i>sein</i> per il presente; per il passato <i>werden</i> + <i>gelesen haben</i>. Con <i>den Bericht</i> al primo posto il verbo coniugato resta al secondo e il soggetto <i>sie</i> lo segue."
      },
      {
        q: "Quali frasi esprimono una supposizione e non un vero futuro o un passivo?",
        opts: [
          "Es klingelt an der Tür. Das wird der Nachbar sein.",
          "Er wird jetzt wohl schon zu Hause angekommen sein.",
          "Am Montag wird die Straße wieder freigegeben.",
          "Wir werden Sie über das Ergebnis informieren."
        ],
        why: "Le prime due riguardano ciò che si suppone adesso: Futur I con <i>sein</i> e Futur II (<i>angekommen sein</i>). La terza è un passivo presente (<i>freigegeben</i>) con valore di futuro, la quarta un vero futuro."
      },
      {
        q: "Metti in ordine la supposizione.",
        tr: "Il messaggio lo avrà ormai letto.",
        why: "<i>Sie wird die Nachricht inzwischen gelesen haben.</i> Il verbo coniugato è al secondo posto, <i>gelesen haben</i> chiude la frase; <i>inzwischen</i> può stare anche prima di <i>die Nachricht</i>."
      },
      {
        q: "Traduci: «Le candidate avranno probabilmente già ricevuto la risposta.» (die Bewerberinnen, die Antwort, erhalten)",
        why: "<i>Die Bewerberinnen werden die Antwort wohl schon erhalten haben</i>: Futur II con <i>wohl</i> (o <i>vermutlich, wahrscheinlich</i>); <i>schon</i> o <i>bereits</i> per «già», e l'avverbio può stare prima o dopo <i>die Antwort</i>."
      },
      {
        tr: "Il treno da Monaco è in ritardo. I viaggiatori dovranno probabilmente aspettare ancora mezz'ora, e la coincidenza sarà allora probabilmente già partita.",
        why: "Due supposizioni: <i>werden ... warten müssen</i> (previsione prudente) e <i>wird ... abgefahren sein</i> (Futur II con <i>sein</i>, perché <i>abfahren</i> è un verbo di moto)."
      },
      {
        tr: "La luce è ancora accesa, quindi i colleghi staranno probabilmente ancora lavorando.",
        why: "<i>werden</i> + <i>wohl</i> + infinito: supposizione sul presente, con <i>arbeiten</i> in fondo alla frase."
      }
    ]
  },
  "lesson:c1-u04-l2": {
    theme: "Certezza, voci e dichiarazioni",
    title: "Er muss krank sein, sie soll reich sein",
    objectives: [
      "graduare la certezza con muss, dürfte, könnte, kann, mag",
      "riferire ciò che dicono altri con soll",
      "riportare ciò che sostiene il soggetto con will",
      "usare l'infinito perfetto per parlare del passato"
    ],
    theory: [
      {
        h: "Dal dovere alla certezza",
        p: "Con <em>sein</em>, <em>haben</em> o un infinito perfetto i modali non dicono più obbligo o permesso, ma quanto chi parla è sicuro che una cosa sia vera. <strong>muss</strong> è una deduzione quasi certa (<em>Es muss geregnet haben, die Straße ist nass</em>), <strong>dürfte</strong> indica che è probabile (<em>Er dürfte schon angekommen sein</em>), <strong>könnte</strong> che è possibile (<em>Das könnte ein Irrtum sein</em>). <strong>kann nicht</strong> dice che è impossibile (<em>Das kann nicht stimmen</em>) e <strong>mag</strong> ammette, di solito concedendo (<em>Das mag sein, aber ich sehe es anders</em>)."
      },
      {
        h: "Riferire: soll e will",
        p: "Altri due modali riportano una fonte. <strong>soll</strong> dice che lo affermano altri e chi parla non garantisce: <em>Der Zeuge soll den Täter gesehen haben</em>, «il testimone avrebbe visto il colpevole». <strong>will</strong> dice che lo sostiene il soggetto stesso, spesso con un velo di scetticismo: <em>Die Firma will alle Unterlagen rechtzeitig eingereicht haben</em>, «l'azienda sostiene di aver consegnato tutto in tempo». Per il passato: modale + participio II + <em>haben</em> o <em>sein</em>."
      },
      {
        contrast: "L'italiano usa il condizionale giornalistico (<em>il ministro avrebbe distrutto i documenti</em>), che non distingue chi lo dice: può essere la stampa, un testimone o lo stesso ministro. Il tedesco sceglie il modale per la fonte: <em>soll</em> per «si dice», <em>will</em> per «sostiene lui». Anche <em>deve essere malato</em> corrisponde a <em>muss</em>, mentre <em>dovrebbe</em> italiano ha più valori: nella lettura probabilistica è <em>dürfte</em>, ma può anche indicare un obbligo."
      },
      {
        trap: "La negazione cambia significato. <em>Er muss nicht krank sein</em> vuol dire «non è detto che sia malato», non «non può essere malato». Per l'impossibilità serve <em>kann nicht</em>: <em>Er kann nicht krank sein, ich habe ihn eben gesehen</em>. E <em>dürfte</em> con valore di probabilità non va confuso con <em>darf</em>, che indica un permesso."
      },
      {
        tip: "Prima di tradurre un modale guarda l'infinito. Con un infinito perfetto (<em>gelesen haben, gewesen sein</em>) o con un verbo di stato (<em>sein</em>) il valore è quasi sempre soggettivo: certezza o fonte. Con un verbo d'azione al presente (<em>Er soll kommen</em>) è un ordine."
      }
    ],
    grammar: {
      title: "Modali soggettivi",
      note: "<b>muss</b>: quasi certo. <b>dürfte</b>: probabile. <b>kann / könnte</b>: possibile. <b>mag</b>: concessione. <b>soll</b>: lo dicono altri. <b>will</b>: lo sostiene il soggetto. Passato: modale + participio II + haben/sein.",
      table: {
        head: ["modale", "certezza o fonte", "esempio"],
        rows: [
          ["muss", "deduzione quasi certa", "Er muss krank sein."],
          ["dürfte", "probabile", "Er dürfte krank sein."],
          ["kann / könnte", "possibile", "Er könnte krank sein."],
          ["mag", "concessione", "Das mag sein."],
          ["soll", "lo dicono altri", "Er soll krank sein."],
          ["will", "lo sostiene il soggetto", "Er will krank gewesen sein."]
        ]
      },
      examples: [
        { tr: "Deve aver piovuto, la strada è bagnata.", note: "muss + infinito perfetto: deduzione" },
        { tr: "Probabilmente è già arrivato.", note: "dürfte: probabile" },
        { tr: "Potrebbe essere un errore.", note: "könnte: possibile" },
        { tr: "Il testimone avrebbe visto il colpevole.", note: "soll: lo dicono altri" },
        { tr: "L'azienda sostiene di aver consegnato tutti i documenti in tempo.", note: "will: lo sostiene il soggetto" },
        { tr: "Può darsi, ma io la vedo diversamente.", note: "mag: concessione" }
      ]
    },
    vocab: [
      "la voce, la diceria",
      "il testimone",
      "l'affermazione, la pretesa",
      "la fonte",
      "la prova",
      "la dichiarazione, la deposizione",
      "sostenere, affermare",
      "negare, contestare",
      "documentare, comprovare",
      "presunto, a quanto si dice (con dubbio)",
      "evidentemente, a quanto risulta",
      "apparentemente, a quanto pare"
    ],
    exercises: [
      {
        q: "Titolo di giornale: «Der Bürgermeister soll Geld angenommen haben.» Che cosa comunica il giornale?",
        opts: [
          "che qualcuno lo afferma, ma il giornale non lo garantisce",
          "che è stato il sindaco a dichiarare di aver preso del denaro",
          "che il giornale ha le prove che il sindaco ha preso del denaro"
        ],
        why: "<b>soll</b> + infinito perfetto riferisce ciò che dicono altri, senza prendersene la responsabilità. Se fosse il sindaco ad affermarlo servirebbe <i>will</i>, e per una certezza basterebbe il Perfekt (<i>hat Geld angenommen</i>)."
      },
      {
        q: "Un quotidiano scrive: «Der Bürgermeister will das Geld nie angenommen haben.» Chi sostiene che non l'ha mai preso?",
        opts: [
          "il sindaco stesso; chi scrive resta neutrale o scettico",
          "dei testimoni; il giornale non garantisce",
          "nessuno: è l'intenzione del sindaco di non accettare mai denaro"
        ],
        why: "<b>will</b> + infinito perfetto: l'affermazione è del soggetto stesso. Per «si dice» sarebbe <i>soll</i>; la lettura «ha intenzione» non è possibile con un infinito perfetto."
      },
      {
        q: "Un revisore commenta un errore nei conti e sceglie con cura il modale. Quale sequenza va dalla certezza maggiore alla minore?",
        opts: [
          "Das muss ein Irrtum sein. - Das dürfte ein Irrtum sein. - Das könnte ein Irrtum sein.",
          "Das könnte ein Irrtum sein. - Das dürfte ein Irrtum sein. - Das muss ein Irrtum sein.",
          "Das dürfte ein Irrtum sein. - Das muss ein Irrtum sein. - Das könnte ein Irrtum sein."
        ],
        why: "<b>muss</b> è una deduzione quasi certa, <b>dürfte</b> indica probabilità, <b>könnte</b> semplice possibilità. La seconda sequenza è l'inversa, la terza scambia <i>muss</i> e <i>dürfte</i>."
      },
      {
        q: "Dal giornale radio: «Laut Augenzeugen ___ der Täter in einem roten Auto geflohen sein.»",
        hint: "modale per ciò che dicono altri",
        why: "<b>soll</b>: <i>laut Augenzeugen</i> introduce una fonte esterna, e chi parla non garantisce."
      },
      {
        q: "Un uomo si discolpa: «Der Zeuge ___ den Mann nie zuvor gesehen haben, das behauptet er zumindest.»",
        hint: "lo afferma lui stesso",
        why: "<b>will</b>: <i>das behauptet er zumindest</i> mostra che l'affermazione è del soggetto."
      },
      {
        q: "Completa con muss, soll o will.",
        tr: "Le persiane sono abbassate e la cassetta delle lettere è piena: la famiglia Albers dev'essere in vacanza, difficile pensare altro. Secondo un vicino sarebbe partita già due settimane fa, ma il portiere sostiene di non essersi accorto di niente.",
        why: "<i>muss</i>: deduzione dagli indizi. <i>soll</i>: lo dice un vicino (<i>einem Nachbarn zufolge</i>). <i>will</i>: lo sostiene il portiere stesso."
      },
      {
        q: "Abbina ogni frase al suo significato.",
        pairs: [
          "ne deduco quasi con certezza che è malato",
          "è probabile che sia malato",
          "si dice che sia malato",
          "sostiene di essere stato malato"
        ]
      },
      {
        q: "Metti in ordine la notizia.",
        tr: "Il ministro avrebbe distrutto i documenti.",
        why: "<i>Der Minister soll die Akten vernichtet haben.</i> <i>soll</i> al secondo posto, infinito perfetto in fondo."
      },
      {
        q: "Traduci: «A quanto si dice, la ministra avrebbe lasciato il paese già ieri.» (die Ministerin, das Land, verlassen, sollen)",
        why: "<i>Die Ministerin soll das Land schon gestern verlassen haben</i>: <i>soll</i> rende il condizionale giornalistico e l'infinito perfetto <i>verlassen haben</i> sta in fondo; <i>schon</i> o <i>bereits</i> per «già»."
      },
      {
        tr: "L'imprenditore avrebbe sottratto diversi milioni di euro. Lui sostiene di non averne saputo niente, e il suo avvocato probabilmente respingerà domani le accuse.",
        why: "Tre modali, tre fonti: <i>soll</i> (lo dicono altri), <i>will</i> (lo sostiene lui), <i>dürfte</i> (supposizione probabile)."
      },
      {
        tr: "Si dice che sia malato, ma probabilmente è una scusa.",
        why: "<i>soll</i> riporta la voce, <i>dürfte</i> esprime la valutazione di chi parla."
      }
    ]
  },
  "lesson:c1-u04-l3": {
    theme: "Particelle e sfumature",
    title: "wohl, etwa, halt, eben",
    objectives: [
      "usare wohl per attenuare un'affermazione in supposizione",
      "riconoscere ja come segnale di cosa nota o sorprendente",
      "distinguere etwa particella da etwa «circa»",
      "esprimere rassegnazione con halt ed eben e scegliere il registro giusto"
    ],
    theory: [
      {
        h: "Piccole parole, grandi differenze",
        p: "Le particelle modali non si traducono parola per parola: dicono come chi parla vede ciò che dice. <strong>wohl</strong> trasforma un'affermazione in supposizione (<em>Er ist wohl krank</em>, «sarà malato»). <strong>ja</strong> presenta un fatto come già noto a entrambi o sorprendente (<em>Du weißt ja, wie lange das dauert. Das ist ja ein Ding!</em>). <strong>etwa</strong> in una domanda sì o no mostra sorpresa o sospetto, e chi parla si aspetta di no (<em>Hast du etwa den Schlüssel vergessen?</em>, «non avrai mica dimenticato la chiave?»). <strong>halt</strong> ed <strong>eben</strong> dichiarano che una cosa non si può cambiare (<em>Dann nehmen wir halt ein Taxi. Da kann man eben nichts machen.</em>)."
      },
      {
        h: "Posizione e registro",
        p: "Le particelle stanno senza accento dopo il verbo e i pronomi, prima dell'informazione nuova (<em>Er wird wohl noch schlafen</em>). Sono tipiche del parlato, delle chat e dei dialoghi: in un testo formale, come una relazione o una lettera a un cliente, di solito si evitano. <em>halt</em> è più colloquiale e si sente soprattutto nel sud, <em>eben</em> è più neutro, ma nella maggior parte dei casi sono intercambiabili."
      },
      {
        contrast: "L'italiano rende queste sfumature con l'intonazione e con parole come <em>mica</em>, <em>pazienza</em>, <em>mah</em>, <em>sarà</em>: <em>Hast du etwa ...?</em> è vicino a «non avrai mica ...?», <em>Dann warten wir halt</em> a «allora aspettiamo, pazienza». Dove l'italiano cambia il tempo del verbo (<em>sarà</em>), il tedesco aggiunge <em>wohl</em>. Nessuna delle cinque ha un equivalente fisso: si impara la funzione."
      },
      {
        trap: "<em>etwa</em> ha due vite. Davanti a un numero è un avverbio, <em>etwa zwei Stunden</em>, «circa due ore». In una domanda con sorpresa è una particella, <em>Ist er etwa krank?</em>. Anche <em>wohl</em> può essere un avverbio pieno: <em>Ich fühle mich hier wohl</em> vuol dire «mi trovo bene qui»."
      },
      {
        tip: "Togli la particella e rileggi: la frase resta corretta ma perde la posizione di chi parla. Poi sostituiscila e senti come cambia: <em>Das ist halt so</em> (rassegnato), <em>Das ist ja so</em> (lo sai già), <em>Das ist wohl so</em> (credo di sì)."
      }
    ],
    grammar: {
      title: "Particelle modali: wohl, ja, etwa, halt, eben",
      note: "<b>wohl</b>: supposizione. <b>ja</b>: cosa nota o sorprendente. <b>etwa</b>: nelle domande sì/no, sorpresa o sospetto. <b>halt / eben</b>: rassegnazione. Registro: parlato, non formale.",
      table: {
        head: ["particella", "effetto", "esempio"],
        rows: [
          ["wohl", "supposizione", "Er wird wohl noch schlafen."],
          ["ja", "cosa nota o sorprendente", "Du weißt ja, wie lange das dauert."],
          ["etwa", "sorpresa o sospetto in una domanda, ci si aspetta di no", "Hast du etwa den Schlüssel vergessen?"],
          ["halt, eben", "rassegnazione", "Da kann man eben nichts machen."],
          ["registro", "parlato, evitare nello scritto formale", "Das ist halt so."]
        ]
      },
      examples: [
        { tr: "Dormirà ancora, probabilmente.", note: "wohl: supposizione" },
        { tr: "Sai bene quanto ci vuole.", note: "ja: cosa nota a entrambi" },
        { tr: "Non sarà mica già tutto?", note: "etwa: sorpresa, ci si aspetta di no" },
        { tr: "L'autobus è partito, allora andiamo a piedi, pazienza.", note: "halt: rassegnazione" },
        { tr: "Non ci si può fare niente.", note: "eben: rassegnazione" },
        { tr: "Non avrai mica dimenticato la chiave?", note: "etwa: sospetto in una domanda sì/no" }
      ]
    },
    vocab: [
      "il sottofondo, il tono (di una frase)",
      "la sfumatura",
      "l'aspettativa",
      "la sorpresa",
      "la rassegnazione",
      "l'ovvietà, la cosa scontata",
      "accennare, lasciare intendere",
      "rimproverare, accusare di",
      "accettare, subire (senza reagire)",
      "proprio (con sfumatura di sorpresa o fastidio)",
      "comunque, in ogni caso",
      "semplicemente, del tutto"
    ],
    exercises: [
      {
        q: "Una collega ti chiede, con tono sorpreso: «Hast du etwa schon gekündigt?» Che cosa esprime etwa?",
        opts: [
          "sorpresa o sospetto: chi parla si aspetta che la risposta sia no",
          "una domanda neutra: chi parla non ha nessuna aspettativa",
          "una richiesta cortese di conferma: chi parla si aspetta un sì"
        ],
        why: "In una domanda sì/no <b>etwa</b> segnala che chi parla non si aspetta un sì e trova la cosa sorprendente o preoccupante («non avrai mica già dato le dimissioni?»)."
      },
      {
        q: "Dalla finestra vedi l'auto del capo nel parcheggio, ma non lo hai ancora incontrato. Con quale frase fai una supposizione?",
        opts: [
          "Der Chef ist wohl schon da.",
          "Der Chef ist ja schon da!",
          "Der Chef ist halt schon da."
        ],
        why: "<b>wohl</b> trasforma l'affermazione in supposizione («sarà già arrivato»). <i>ja</i> presenterebbe il fatto come certo e sorprendente, <i>halt</i> come qualcosa che non si può cambiare."
      },
      {
        q: "Stai scrivendo una relazione formale per un cliente e vuoi dire che il collegamento ferroviario è insufficiente. Quale frase è adatta al registro?",
        opts: [
          "Die Zugverbindung ist leider unzureichend.",
          "Die Zugverbindung ist halt schlecht.",
          "Die Zugverbindung ist eben nicht so toll."
        ],
        why: "Le particelle <i>halt</i> ed <i>eben</i>, insieme a un lessico come <i>schlecht</i> e <i>nicht so toll</i>, sono parlato: una relazione le evita e usa un lessico neutro come <i>unzureichend</i>."
      },
      {
        q: "Il treno è soppresso e cerchi un'alternativa con rassegnazione: «Der Zug fällt aus? Dann nehmen wir ___ ein Taxi.»",
        hint: "«pazienza»: halt o eben",
        why: "<b>halt</b> o <b>eben</b>: «pazienza, prendiamo un taxi»."
      },
      {
        q: "Davanti a una situazione sorprendente: «Das ist ___ ein Ding!»",
        hint: "particella di sorpresa",
        why: "<b>ja</b> esprime sorpresa: <i>Das ist ja ein Ding!</i> è un'esclamazione fissa, «questa sì che è bella!»."
      },
      {
        q: "Completa il dialogo con le particelle giuste.",
        tr: "«Dove sarà finito Jonas?» «Sarà in coda.» «Non avrà mica perso di nuovo l'autobus?» «Lo sai com'è: non ci si può fare niente.»",
        why: "<i>wohl</i> per la supposizione, <i>etwa</i> per la domanda sospettosa, <i>ja</i> per ciò che entrambi sanno, <i>halt</i> o <i>eben</i> per la rassegnazione. Nel secondo vuoto va bene anche <i>denn</i>, nel terzo anche <i>doch</i>."
      },
      {
        q: "In quali frasi etwa è una particella modale e non significa «circa»?",
        opts: [
          "Bist du etwa schon fertig?",
          "Ist er etwa krank?",
          "Das Seminar dauert etwa zwei Stunden.",
          "Wir treffen uns in etwa einer Stunde."
        ],
        why: "Nelle prime due <b>etwa</b> sta in una domanda sì/no e segnala sorpresa o sospetto. Nelle ultime due è un avverbio e vale «circa»."
      },
      {
        q: "Metti in ordine la domanda.",
        tr: "Non avrai mica dimenticato di nuovo la chiave?",
        why: "<i>Hast du etwa schon wieder den Schlüssel vergessen?</i> Domanda sì/no: il verbo apre la frase e <i>etwa</i> segue il soggetto; può stare anche dopo <i>den Schlüssel</i>."
      },
      {
        q: "Traduci: «Il capo sarà ancora in riunione, allora aspettiamo, pazienza.» (der Chef, die Besprechung, warten; per «sarà» usa wohl)",
        why: "<i>Der Chef wird wohl noch in einer Besprechung sein, dann warten wir eben</i>: <i>wohl</i> per «sarà», <i>eben</i> o <i>halt</i> per «pazienza». Vanno bene anche <i>ist wohl</i> e connettivi come <i>also</i> o <i>da</i>."
      },
      {
        tr: "Credo che Paul sia malato. Di solito non arriva mai in ritardo, e oggi sarà ancora a letto. Non avrà mica l'influenza? Beh, allora iniziamo la riunione senza di lui, pazienza.",
        why: "Quattro particelle in poche frasi: <i>ja</i> (lo sappiamo), <i>wohl</i> (supposizione), <i>etwa</i> (sospetto), <i>eben</i> (rassegnazione)."
      },
      {
        tr: "Allora aspettiamo, pazienza, l'autobus arriva presto.",
        why: "<i>eben</i> (pazienza) e <i>ja</i> (lo sai già) in una sola frase."
      }
    ]
  },
  "lesson:c1-u04-test": {
    theme: "Verifica",
    title: "Test: Sarà stanco",
    objectives: [
      "verificare l'unità: Futur di supposizione, modali soggettivi e particelle modali"
    ],
    theory: [
      {
        p: "Dieci domande sull'unità. Si supera con il 70%. Non riguardare le lezioni mentre rispondi: se non ricordi qualcosa, meglio tornare indietro e ripassare."
      }
    ],
    exercises: [
      {
        q: "Un collega aspetta una risposta: «Die Sekretärin ___ den Brief inzwischen abgeschickt haben.»",
        hint: "Futur II: forma di werden",
        why: "<b>wird</b>: supposizione sul passato con il Futur II, <i>wird ... abgeschickt haben</i>."
      },
      {
        q: "Da un articolo: «Laut einem Zeitungsbericht ___ der Konzern die Löhne gekürzt haben.»",
        hint: "modale per una voce riportata",
        why: "<b>soll</b>: <i>laut einem Zeitungsbericht</i> introduce una fonte esterna, chi scrive non garantisce."
      },
      {
        q: "Un collega ti guarda con sospetto: «Hast du ___ schon wieder die Kaffeekasse geleert?»",
        hint: "«non avrai mica...»",
        why: "<b>etwa</b>: sospetto in una domanda sì/no, ci si aspetta di no. Va bene anche <i>denn</i>, più neutro."
      },
      {
        q: "Un perito scrive: «Der Brand dürfte durch einen Kurzschluss entstanden sein.» Quanto è sicuro?",
        opts: [
          "lo ritiene probabile, ma non certo",
          "è assolutamente certo",
          "riferisce solo ciò che dicono altri"
        ],
        why: "<b>dürfte</b> esprime probabilità. Per la certezza sarebbe <i>muss</i>, per riferire voci <i>soll</i>."
      },
      {
        q: "Un collega entra in ufficio e trova il lavoro già fatto: «Du hast ja schon alles erledigt!» Che cosa esprime ja?",
        opts: [
          "la constatazione sorpresa di un fatto che si vede",
          "una supposizione su qualcosa che non si vede",
          "una domanda con attesa di risposta negativa"
        ],
        why: "<b>ja</b> presenta il fatto come evidente e sorprendente. Una supposizione sarebbe <i>wohl</i>, una domanda con attesa negativa <i>etwa</i>."
      },
      {
        q: "Un collega dice: «Er kann nicht krank sein, ich habe ihn eben noch gesehen.» Che cosa significa?",
        opts: [
          "è impossibile che sia malato",
          "non è necessariamente malato",
          "non ha il permesso di essere malato"
        ],
        why: "<b>kann nicht</b> è l'impossibilità. «Non è necessariamente malato» sarebbe <i>muss nicht krank sein</i>."
      },
      {
        q: "Completa con soll, will o werden.",
        tr: "Secondo un articolo il ministro avrebbe distrutto dei documenti. Lui sostiene di non saperne nulla, e il suo portavoce promette: entro venerdì avremo chiarito tutto.",
        why: "<i>soll</i>: lo dice un articolo. <i>will</i>: lo sostiene il ministro stesso. <i>werden</i>: Futur II di conclusione con <i>bis Freitag</i>."
      },
      {
        q: "Quali frasi esprimono una supposizione e non un obbligo o un permesso?",
        opts: [
          "Sie dürfte inzwischen zu Hause sein.",
          "Das muss ein Irrtum sein.",
          "Du musst um acht da sein.",
          "Hier darf man nicht rauchen."
        ],
        why: "Le prime due valutano la probabilità: <i>dürfte</i> e <i>muss</i> con <i>sein</i>. Nelle ultime due i modali indicano obbligo e divieto."
      },
      {
        tr: "La partita è saltata ieri. Il campo sarebbe stato sott'acqua, ma l'allenatore sostiene di non saperne niente. I tifosi saranno probabilmente delusi, ma nel calcio è così, pazienza.",
        why: "<i>soll</i> (lo dicono altri), <i>will</i> (lo sostiene lui), <i>wohl</i> (supposizione) ed <i>eben</i> (rassegnazione)."
      },
      {
        tr: "Non può essere vero, probabilmente si è sbagliato.",
        why: "<i>kann nicht</i> per l'impossibilità, <i>dürfte</i> + infinito perfetto per la supposizione probabile sul passato."
      }
    ]
  }
});
