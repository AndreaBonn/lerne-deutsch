/* ============================================================
   Learner-language text (it) for data/core/pfl-08.js, unit pfl-u08.
   Keys point at ids in the neutral layer; arrays merge by index,
   so their length has to match core.
   Checked by scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("it", {
  "unit:pfl-u08": {
    title: "Giro visita, prescrizioni ed équipe",
    grammarNote: "il passivo al presente e con i modali nel giro visita · le subordinate con dass e ob per riferire e verificare una prescrizione · i connettivi deshalb, aber, denn · i verbi con preposizione fissa nella riunione d'équipe · il Konjunktiv II di cortesia al telefono"
  },
  "lesson:pfl-u08-l1": {
    theme: "Giro visita",
    title: "Il giro visita",
    objectives: [
      "seguire il giro visita e capire che cosa viene deciso per il paziente",
      "riconoscere il passivo: wird abgenommen, wird gewechselt, wurde gemacht",
      "capire il passivo con i modali: soll mobilisiert werden",
      "intervenire con le osservazioni dell'assistenza"
    ],
    theory: [
      {
        h: "Che cosa succede alla Visite",
        p: "Nella <strong>Visite</strong> il medico (spesso con la <em>Oberärztin</em> o il <em>Oberarzt</em>) passa di stanza in stanza con l'infermiera o l'infermiere del paziente. Si guardano i referti (<em>Befunde</em>), si decide se la terapia continua e si danno le prescrizioni per i giorni successivi. Il tuo compito è ascoltare, annotare e portare le osservazioni dell'assistenza: come ha dormito il paziente, se mangia, se si alza, se ha dolore. Le prescrizioni dette a voce durante la visita poi devono comparire per iscritto nella documentazione."
      },
      {
        h: "Il passivo: conta che cosa si fa",
        p: "Alla Visite si parla soprattutto di <strong>che cosa si fa</strong>, non di chi lo fa. Per questo si usa il <strong>passivo</strong>: <em>werden</em> coniugato + participio in fondo. Al presente: <em>Der Verband <b>wird</b> morgen <b>gewechselt</b>.</em> Al Präteritum: <em>Die Röntgenaufnahme <b>wurde</b> gestern <b>gemacht</b>.</em> Con un modale il modale si coniuga e alla fine stanno participio e <em>werden</em> all'infinito: <em>Frau Lang <b>soll</b> heute <b>mobilisiert werden</b>.</em> Spesso chi fa l'azione sei proprio tu: <em>Bei Herrn Wolf wird ein Blutbild abgenommen</em> vuol dire che dopo la visita il prelievo tocca all'assistenza."
      },
      {
        contrast: "In italiano il giro visita usa soprattutto il «si» impersonale: «si continua la terapia», «domani si fa un emocromo», «si cambia la medicazione». Il tedesco non ha un «si» impersonale così comodo per le azioni (<em>man</em> esiste, ma alla Visite suona generico): usa il passivo con <em>werden</em>, <em>Die Therapie wird fortgesetzt</em>. Il segnale da cogliere al volo è <em>wird</em> o <em>wurde</em> con un participio alla fine della frase: quando senti <em>wird ... abgenommen</em>, <em>wird ... gewechselt</em>, alla Visite è quasi sempre una prescrizione che qualcuno deve eseguire; con <em>wurde</em> invece è una cosa già fatta. Il passivo in sé descrive un'azione: che sia una prescrizione lo dice il contesto. Attenzione a non confondere il passivo con il futuro: <em>wird gewechselt</em> (participio) è passivo, «viene cambiato»; <em>wird wechseln</em> (infinito) è futuro, «cambierà»."
      },
      {
        trap: "<em>fortsetzen</em> è un verbo separabile e prende <em>ge-</em> dopo il prefisso: <em>fortgesetzt</em>, mai <em>gefortsetzt</em>. <em>mobilisieren</em> invece finisce in <em>-ieren</em> e il participio non ha <em>ge-</em>: <em>mobilisiert</em>, mai <em>gemobilisiert</em>. E <em>der Befund</em> non è solo il referto scritto: <em>ohne Befund</em> vuol dire «nella norma», quindi un referto «senza reperti» è una buona notizia, non un referto mancante."
      },
      {
        tip: "Porta alla Visite un foglio o il tablet con i tuoi pazienti e annota ogni prescrizione nel momento in cui la senti, con chi deve farla e quando. Se una frase ti sfugge, chiedi subito, davanti al letto: <em>Entschuldigung, wird das Blutbild heute oder morgen abgenommen?</em> Una domanda in più alla visita costa dieci secondi; una prescrizione capita male costa molto di più."
      }
    ],
    grammar: {
      title: "Il passivo con werden",
      note: "Presente: <b>wird</b> + participio. Präteritum: <b>wurde</b> + participio. Con un modale: <b>soll / muss / kann</b> + participio + <b>werden</b>.",
      table: {
        head: ["forma", "struttura", "esempio"],
        rows: [
          ["passivo presente", "wird + participio", "Der Verband wird morgen gewechselt."],
          ["passivo Präteritum", "wurde + participio", "Die Röntgenaufnahme wurde gestern gemacht."],
          ["passivo con modale", "soll + participio + werden", "Frau Lang soll heute mobilisiert werden."],
          ["domanda", "Wann / Wird ... + participio", "Wann wird Herr Wolf entlassen?"]
        ]
      },
      examples: [
        { tr: "Al signor Wolf oggi viene fatto un emocromo.", note: "wird ... abgenommen: il prelievo, di solito, lo fa l'assistenza" },
        { tr: "La medicazione viene cambiata domani.", note: "passivo presente: wird + gewechselt in fondo" },
        { tr: "La radiografia è stata fatta ieri.", note: "passivo al Präteritum: wurde gemacht" },
        { tr: "La signora Lang oggi deve essere mobilizzata.", note: "modale soll + mobilisiert werden; mobilisiert senza ge-" },
        { tr: "La terapia prosegue come finora.", note: "fortsetzen è separabile: fortgesetzt" },
        { tr: "Quando viene dimesso il signor Wolf?", note: "domanda con passivo: entlassen in fondo" }
      ]
    },
    vocab: [
      "il giro visita",
      "la dirigente medica (aiuto primario)",
      "il referto, il reperto",
      "l'emocromo",
      "la radiografia",
      "la terapia",
      "il trattamento, la cura",
      "il cambio della medicazione",
      "fare un prelievo di sangue",
      "proseguire, continuare",
      "dimettere",
      "nella norma, senza particolarità"
    ],
    dialogue: [
      "Buongiorno, signor Wolf. Come sta oggi?",
      "Meglio di ieri, ma sono ancora stanco.",
      "La radiografia di ieri è nella norma. La terapia prosegue come finora.",
      "Domani si fa di nuovo un emocromo?",
      "Sì, domani mattina, per favore. E la medicazione oggi va cambiata.",
      "Bene. E per la mobilizzazione?",
      "Oggi il signor Wolf deve essere mobilizzato due volte, prima sul bordo del letto.",
      "Quando vengo dimesso?",
      "Se i valori restano buoni, forse venerdì."
    ],
    culture: {
      title: "Uno sguardo tedesco: chi c'è alla Visite",
      text: "<p>Nei reparti tedeschi la <i>Visite</i> si fa di solito al mattino. Il medico di reparto (<i>Stationsarzt</i>, <i>Stationsärztin</i>) la fa ogni giorno; una o due volte alla settimana c'è anche la <i>Oberarztvisite</i> o la <i>Chefarztvisite</i>, con il primario. Le figure non coincidono con quelle italiane: l'<i>Oberarzt</i> è più o meno un dirigente medico con responsabilità di sezione, il <i>Chefarzt</i> è il primario.</p><p>La presenza dell'infermiera alla visita non è uguale ovunque: in alcuni reparti partecipa a ogni visita, in altri la consegna delle prescrizioni avviene dopo, nella stanza del personale. Chiedi al tuo arrivo come si fa nel tuo reparto.</p>"
    },
    exercises: [
      {
        q: "Alla Visite la dottoressa dice che domani mattina va fatto un emocromo. Completa: «Morgen früh ___ ein Blutbild abgenommen.»",
        opts: ["wird", "ist", "hat"],
        why: "Il passivo al presente si forma con <b>werden</b>: <i>wird</i> + participio <i>abgenommen</i> in fondo. <i>ist abgenommen</i> descrive uno stato, <i>hat abgenommen</i> è un Perfekt attivo (e con <i>abnehmen</i> può voler dire anche «è dimagrito»)."
      },
      {
        tr: "Il Präteritum di werden, tutte le persone.",
        why: "<i>Wurde, wurdest, wurde, wurden, wurdet, wurden</i>: è la forma che regge il passivo al passato, <i>wurde gemacht</i>. La prima e la terza persona singolare sono uguali."
      },
      {
        q: "Completa: «Der Verband ___ heute gewechselt.»",
        hint: "passivo al presente",
        why: "<b>wird</b>: soggetto singolare <i>der Verband</i>, passivo presente con il participio <i>gewechselt</i> in fondo."
      },
      {
        q: "Completa la frase.",
        tr: "Oggi il signor Wolf deve essere mobilizzato due volte.",
        why: "<i>soll ... <b>mobilisiert werden</b></i>: con il modale, alla fine stanno il participio e poi <i>werden</i> all'infinito. <i>mobilisiert</i> non prende <i>ge-</i> perché il verbo finisce in <i>-ieren</i>."
      },
      {
        q: "Quali frasi sono corrette?",
        opts: [
          "Die Therapie wird fortgesetzt.",
          "Die Therapie wird gefortsetzt.",
          "Das Blutbild wurde gestern abgenommen.",
          "Der Patient soll heute entlassen werden.",
          "Der Patient soll heute werden entlassen."
        ],
        why: "<i>fortsetzen</i> è separabile: <i>fort<b>ge</b>setzt</i>, con <i>ge-</i> dopo il prefisso. Con un modale l'ordine finale è participio + <i>werden</i>: <i>entlassen werden</i>, non <i>werden entlassen</i>."
      },
      {
        q: "Scegli l'articolo determinativo giusto per ogni nome.",
        items: ["giro visita", "dirigente medica", "referto", "emocromo", "radiografia", "cambio della medicazione"]
      },
      {
        q: "Abbina ogni parola al suo significato.",
        pairs: ["la terapia", "il referto", "la radiografia", "l'emocromo"]
      },
      {
        q: "Metti in ordine le parole.",
        tr: "La terapia prosegue come finora.",
        why: "<i>Die Therapie wird wie bisher fortgesetzt.</i> Il verbo coniugato <i>wird</i> al secondo posto, il participio <i>fortgesetzt</i> in fondo; <i>wie bisher</i> di norma sta nel mezzo; a voce si sente anche dopo il participio, <i>wird fortgesetzt wie bisher</i>, e anche quell'ordine è accettato."
      },
      {
        q: "Traduci (alla Visite): «Domani mattina si fa un emocromo.»",
        why: "<i>Morgen früh wird ein Blutbild abgenommen.</i> Il «si» italiano diventa passivo con <i>wird</i>. Per il prelievo il verbo tipico è <i>abnehmen</i>; va bene anche <i>gemacht</i>. A rigore si preleva il sangue (<i>Blut abnehmen</i>) e l'emocromo si fa sul campione: <i>ein Blutbild abnehmen</i> è l'abbreviazione corrente in reparto. <i>morgen früh</i> vuol dire «domani mattina»."
      },
      {
        q: "Alla Visite.",
        setting: "Sei l'infermiera del signor Wolf e partecipi al giro visita con la dirigente medica.",
        lines: [
          { tr: "Dall'assistenza c'è ancora qualcosa sul signor Wolf?" },
          { tr: "Rispondi che nella notte il signor Wolf ha dormito poco.", answerTr: "Sì, nella notte il signor Wolf ha dormito poco." },
          { tr: "La medicazione oggi va cambiata." },
          { tr: "Rispondi che la cambi dopo la visita.", answerTr: "Bene, la cambio dopo la visita." },
          { tr: "E la mobilizzazione?" },
          { tr: "Rispondi che oggi il signor Wolf è già stato mobilizzato una volta.", answerTr: "Oggi il signor Wolf è già stato mobilizzato una volta." }
        ]
      },
      {
        tr: "La radiografia di ieri è nella norma. La terapia prosegue come finora.",
        why: "In <i>Röntgenaufnahme</i> la <b>ö</b> è breve e l'accento cade su <b>Rönt</b>; in <i>unauffällig</i> l'accento cade su <b>un</b> e la <b>g</b> finale si legge [ç]; in <i>Therapie</i> la <b>th</b> è una semplice [t] e l'accento cade sull'ultima sillaba, <b>pie</b>."
      },
      {
        tr: "Al signor Wolf oggi viene fatto un emocromo.",
        why: "In <i>Blutbild</i> la <b>u</b> è lunga e la <b>d</b> finale si legge [t]; in <i>abgenommen</i> l'accento cade su <b>ab</b>; la <b>w</b> di <i>Wolf</i> e di <i>wird</i> è [v]."
      }
    ]
  },
  "lesson:pfl-u08-l2": {
    theme: "Prescrizioni e richieste di chiarimento",
    title: "Capire e verificare una prescrizione",
    objectives: [
      "riferire che cosa è stato prescritto con dass",
      "esprimere un dubbio su una prescrizione con ob",
      "chiedere chiarimenti al medico con nachfragen",
      "collegare il motivo e la conseguenza con deshalb, aber, denn"
    ],
    theory: [
      {
        h: "Una prescrizione poco chiara non si esegue",
        p: "La <strong>Anordnung</strong> è la prescrizione del medico: un esame, una medicazione, la mobilizzazione, il digiuno prima di un intervento. Se una prescrizione è poco chiara, incompleta o insolita (manca quando, manca come, non sembra adatta al paziente), la regola è una sola: <strong>prima si chiede, poi si esegue</strong>. La frase da avere pronta è <em>Ich frage noch einmal nach.</em> Chiedere non è mettere in dubbio la competenza del medico: è parte della responsabilità di chi esegue. Dopo il chiarimento la prescrizione corretta deve comparire per iscritto."
      },
      {
        h: "Riferire con dass, verificare con ob",
        p: "Per dire che cosa c'è scritto o che cosa è stato prescritto si usa <em>dass</em>: <em>In der Akte steht, <b>dass</b> sie heute nüchtern bleibt.</em> Per esprimere un dubbio si usa <em>ob</em>, la domanda indiretta sì/no: <em>Ich bin nicht sicher, <b>ob</b> die Anordnung noch gilt.</em> In tutte e due le subordinate il verbo coniugato va in fondo. Per collegare due frasi principali: <em>deshalb</em> (conseguenza, il verbo viene subito dopo), <em>aber</em> e <em>denn</em> (non cambiano l'ordine): <em>Die Anordnung ist unklar, <b>deshalb frage</b> ich nach. Ich frage nach, <b>denn</b> ich <b>möchte</b> keinen Fehler machen.</em>"
      },
      {
        contrast: "In italiano «se» fa due lavori: la condizione («se piove») e la domanda indiretta («non so se vale ancora»). Il tedesco li separa: la condizione è <em>wenn</em>, la domanda indiretta è <em>ob</em>. Chi parla italiano tende a dire <em>Ich weiß nicht, wenn die Anordnung noch gilt</em>, che per un tedesco suona come «non lo so, quando la prescrizione vale ancora». Il test è semplice: se puoi trasformare la frase in una domanda sì/no («la prescrizione vale ancora?»), serve <em>ob</em>. Anche la formula di cortesia cambia registro: dove in italiano si dice «scusi dottore, una domanda», in tedesco in reparto si dice spesso <em>Ich habe eine Rückfrage</em>, con una parola che indica proprio la richiesta di chiarimento su qualcosa già detto o scritto."
      },
      {
        trap: "<em>anordnen</em> è separabile: <em>Die Ärztin <b>ordnet</b> ein Blutbild <b>an</b></em>, al Perfekt <em>hat ... ange<b>ordnet</b></em>. Non confonderlo con <em>ordnen</em>, «riordinare». E <em>die Indikation</em> è il motivo per cui si fa un trattamento, non «l'indicazione» nel senso di istruzione: per le istruzioni si dice <em>die Anweisung</em>. Al paziente non si dice <em>Indikation</em>, ma <em>der Grund für die Behandlung</em>."
      },
      {
        tip: "Quando chiedi un chiarimento, ripeti con parole tue che cosa hai capito e poi fai la domanda: <em>In der Akte steht, dass sie nüchtern bleiben soll. Gilt das noch?</em> Così il medico vede subito dove sta il dubbio. Annota la risposta, l'ora e il nome di chi te l'ha data."
      }
    ],
    grammar: {
      title: "dass, ob e i connettivi",
      note: "<b>dass</b> riferisce un fatto, <b>ob</b> introduce un dubbio (domanda indiretta sì/no): in entrambe il verbo coniugato va in fondo. Dopo <b>deshalb</b> il verbo viene subito; <b>aber</b> e <b>denn</b> non cambiano l'ordine.",
      table: {
        head: ["parola", "funzione", "esempio"],
        rows: [
          ["dass", "riferire che cosa è scritto o prescritto", "In der Akte steht, dass der Verband täglich gewechselt wird."],
          ["ob", "esprimere un dubbio, domanda sì/no indiretta", "Ich bin nicht sicher, ob die Anordnung noch gilt."],
          ["deshalb", "conseguenza, il verbo subito dopo", "Die Anordnung ist unklar, deshalb frage ich nach."],
          ["aber", "contrasto, ordine normale", "Ich habe sie gelesen, aber ich verstehe sie nicht."],
          ["denn", "motivo, ordine normale", "Ich frage nach, denn ich möchte keinen Fehler machen."]
        ]
      },
      examples: [
        { tr: "La dottoressa ha prescritto che oggi la signora Lang resti a digiuno.", note: "dass: il verbo bleibt va in fondo" },
        { tr: "In cartella c'è scritto che la medicazione va cambiata ogni giorno.", note: "dass + passivo: gewechselt wird in fondo" },
        { tr: "Non sono sicura che la prescrizione sia ancora valida.", note: "ob: domanda indiretta sì/no, gilt in fondo; l'italiano qui usa «che» o «se»" },
        { tr: "La prescrizione non è chiara, perciò chiedo di nuovo.", note: "deshalb al primo posto, poi subito frage" },
        { tr: "Ho letto la prescrizione, ma non la capisco.", note: "aber non sposta il verbo" },
        { tr: "Preferisco chiedere una volta in più, perché non voglio sbagliare.", note: "denn non sposta il verbo: möchte resta al secondo posto" }
      ]
    },
    vocab: [
      "la prescrizione (medica), l'ordine",
      "prescrivere, disporre",
      "l'indicazione (clinica), il motivo del trattamento",
      "il motivo",
      "la richiesta di chiarimento",
      "chiedere chiarimenti, informarsi di nuovo",
      "univoco, chiaro",
      "poco chiaro",
      "valere, essere valido",
      "la cartella clinica",
      "firmare",
      "eseguire"
    ],
    dialogue: [
      "Mi scusi, dottore, ho una domanda di chiarimento sulla signora Lang.",
      "Sì, prego.",
      "In cartella c'è scritto che oggi deve restare a digiuno. Non sono sicuro che valga ancora.",
      "Ha fatto bene a chiedere. L'esame è stato rinviato, per questo può di nuovo mangiare.",
      "E l'emocromo? Qui c'è scritto solo laboratorio, ma non quando.",
      "Domani mattina, per favore. Lo aggiungo subito in cartella.",
      "Grazie. Preferisco chiedere una volta in più, perché non voglio sbagliare."
    ],
    culture: {
      title: "Uno sguardo tedesco: prescrizione e responsabilità",
      text: "<p>In Germania si distingue tra la responsabilità di chi prescrive (<i>Anordnungsverantwortung</i>, del medico) e quella di chi esegue (<i>Durchführungsverantwortung</i>, di chi fa l'intervento). Chi esegue risponde del modo in cui lo fa, e anche del fatto di averlo fatto quando aveva motivo di dubitare. Per questo una prescrizione poco chiara si chiarisce prima, e non dopo.</p><p>Le prescrizioni date a voce, per esempio al telefono di notte, nei reparti vengono di solito ripetute ad alta voce e poi firmate dal medico il prima possibile. Come funziona esattamente lo stabiliscono le regole della tua struttura: chiedile durante l'inserimento.</p>"
    },
    exercises: [
      {
        q: "Nella cartella trovi una prescrizione che ti sembra insolita. Che cosa dici?",
        opts: ["Ich mache es so, wie ich es verstehe.", "Ich frage noch einmal nach.", "Ich warte bis morgen."],
        why: "Una prescrizione poco chiara o insolita si chiarisce sempre con il medico prima di eseguirla: <b>Ich frage noch einmal nach</b>. Interpretarla da sola o rimandare senza dire niente non sono alternative sicure."
      },
      {
        tr: "Il Perfekt di anordnen, tutte le persone.",
        why: "<i>Habe angeordnet, hast angeordnet, hat angeordnet</i> ...: verbo separabile, <i>ge-</i> va tra il prefisso <i>an-</i> e la radice, e la desinenza è <i>-et</i> perché la radice finisce in <b>d</b>."
      },
      {
        q: "Completa: «Ich bin nicht sicher, ___ die Anordnung noch gilt.»",
        hint: "domanda indiretta sì/no",
        why: "<b>ob</b>: la frase nasconde una domanda sì/no («la prescrizione vale ancora?»). <i>wenn</i> sarebbe una condizione; <i>dass</i> riferisce un contenuto e non apre una domanda, e dopo <i>nicht sicher</i> la scelta normale è <i>ob</i>."
      },
      {
        q: "Completa la frase.",
        tr: "La dottoressa ha prescritto che la medicazione venga cambiata ogni giorno.",
        why: "<i><b>dass</b></i> riferisce il contenuto della prescrizione; nella subordinata il passivo finisce con <i>gewechselt <b>wird</b></i>: il verbo coniugato va in fondo, dopo il participio."
      },
      {
        q: "Quali frasi sono corrette?",
        opts: [
          "In der Akte steht, dass Frau Lang nüchtern bleibt.",
          "In der Akte steht, dass Frau Lang bleibt nüchtern.",
          "Ich weiß nicht, ob die Anordnung noch gilt.",
          "Ich weiß nicht, ob gilt die Anordnung noch.",
          "Die Anordnung ist unklar, deshalb frage ich nach."
        ],
        why: "Dopo <i>dass</i> e <i>ob</i> il verbo coniugato va in fondo: <i>nüchtern bleibt</i>, <i>noch gilt</i>. Dopo <i>deshalb</i> il verbo viene subito: <i>deshalb frage ich</i>."
      },
      {
        q: "Scegli l'articolo determinativo giusto per ogni nome.",
        items: ["prescrizione", "indicazione clinica", "motivo", "richiesta di chiarimento", "cartella clinica", "laboratorio"]
      },
      {
        q: "Abbina ogni parola al suo significato.",
        pairs: ["la prescrizione", "la richiesta di chiarimento", "l'indicazione clinica", "chiedere chiarimenti"]
      },
      {
        q: "Metti in ordine le parole.",
        tr: "Non sono sicuro che la prescrizione valga ancora.",
        why: "<i>Ich bin nicht sicher, ob die Anordnung noch gilt.</i> Dopo la virgola <i>ob</i> apre la subordinata e il verbo <i>gilt</i> va in fondo."
      },
      {
        q: "Traduci: «La prescrizione non è chiara, perciò chiedo di nuovo.»",
        why: "<i>Die Anordnung ist nicht eindeutig, deshalb frage ich noch einmal nach.</i> Va bene anche <i>unklar</i> o <i>nicht klar</i>, e <i>darum</i> o <i>deswegen</i> al posto di <i>deshalb</i>. «di nuovo» è <i>noch einmal</i>; il prefisso <i>nach</i> va in fondo."
      },
      {
        q: "Una richiesta di chiarimento.",
        setting: "Hai un dubbio sulla prescrizione della signora Lang e vai dal medico di reparto.",
        lines: [
          { tr: "Voleva parlarmi?" },
          { tr: "Rispondi che hai una domanda di chiarimento sulla prescrizione della signora Lang.", answerTr: "Sì, ho una domanda di chiarimento sulla prescrizione della signora Lang." },
          { tr: "Che cosa non è chiaro?" },
          { tr: "Rispondi che non sai se oggi deve restare a digiuno.", answerTr: "Non so se oggi deve restare a digiuno." },
          { tr: "Può di nuovo mangiare. L'esame è stato rinviato." },
          { tr: "Ringrazia e chiedi di aggiungerlo in cartella.", answerTr: "Grazie. Per favore, lo aggiunga ancora in cartella." }
        ]
      },
      {
        tr: "In cartella c'è scritto che oggi deve restare a digiuno. Non sono sicuro che valga ancora.",
        why: "In <i>nüchtern</i> la <b>ü</b> è breve e la <b>ch</b> dopo <b>ü</b> è [ç]; in <i>sicher</i> la <b>s</b> iniziale è sonora [z]; in <i>gilt</i> la <b>g</b> è sempre dura."
      },
      {
        tr: "Preferisco chiedere una volta in più, perché non voglio sbagliare.",
        why: "In <i>lieber</i> la <b>ie</b> è lunga; in <i>nach</i> la <b>ch</b> dopo <b>a</b> è [x]; in <i>möchte</i> la <b>ö</b> è breve e la <b>ch</b> è [ç]; in <i>Fehler</i> la <b>e</b> è lunga e la <b>h</b> non si pronuncia."
      }
    ]
  },
  "lesson:pfl-u08-l3": {
    theme: "Riunione d'équipe",
    title: "La riunione d'équipe",
    objectives: [
      "partecipare a una riunione d'équipe e prendere la parola",
      "usare i verbi con preposizione fissa: sich kümmern um, sich erkundigen nach, warten auf, sprechen über",
      "chiedere di che cosa si parla con worum e worauf",
      "riprendere un argomento con darum, darüber, darauf"
    ],
    theory: [
      {
        h: "Chi fa che cosa",
        p: "Nella <strong>Teambesprechung</strong> l'équipe si divide i compiti, discute i casi difficili (<em>Fallbesprechung</em>) e organizza il <em>Dienstplan</em>, il piano dei turni. La frase che ritorna più spesso è <em>Wer kümmert sich um ...?</em>, «chi si occupa di...?», e la risposta che prende un compito è <em>Ich kümmere mich darum</em> oppure, più semplice, <em>Das mache ich.</em> Per prendere la parola senza interrompere: <em>Ich würde gern etwas zu Herrn Wolf sagen.</em>"
      },
      {
        h: "Verbi con preposizione fissa",
        p: "Molti verbi tedeschi vogliono una <strong>preposizione fissa</strong>, che va imparata insieme al verbo come un blocco: <em>sich kümmern <b>um</b></em> + accusativo, <em>sich erkundigen <b>nach</b></em> + dativo, <em>warten <b>auf</b></em> + accusativo, <em>sprechen <b>über</b></em> + accusativo. La domanda si fa con <em>wo(r)</em> + preposizione: <em><b>Worauf</b> wartest du?</em> E per riprendere una cosa già detta si usa <em>da(r)</em> + preposizione: <em>Ich kümmere mich <b>darum</b>. <b>Darüber</b> sprechen wir am Ende.</em> Per le persone invece si tiene la preposizione con il pronome: <em>Ich kümmere mich <b>um ihn</b>.</em>"
      },
      {
        contrast: "Anche l'italiano ha verbi con preposizione fissa, ma le preposizioni non corrispondono quasi mai: «occuparsi <b>di</b>» è <em>sich kümmern <b>um</b></em>, «informarsi <b>su</b>» è <em>sich erkundigen <b>nach</b></em>, «aspettare» (senza preposizione) è <em>warten <b>auf</b></em>, «parlare <b>di</b>» è <em>sprechen <b>über</b></em>. Tradurre la preposizione italiana porta a errori tipici: <em>warten für</em>, <em>sich kümmern von</em>, <em>sprechen von</em> (che esiste, ma vuol dire piuttosto «nominare, accennare»). C'è poi un'altra differenza: l'italiano riprende tutto con «ne» o «ci» («me ne occupo», «ne parliamo dopo»), il tedesco costruisce la forma con <em>da-</em>: <em>Ich kümmere mich <b>darum</b>. Wir sprechen später <b>darüber</b>.</em>"
      },
      {
        trap: "<em>sich erkundigen</em> e <em>sich kümmern</em> sono riflessivi: senza <em>sich</em> la frase è sbagliata (<em>Ich kümmere <b>mich</b> um ihn</em>, non <em>Ich kümmere um ihn</em>). <em>erkundigen</em> ha il prefisso inseparabile <em>er-</em>, quindi niente <em>ge-</em> al participio: <em>hat sich erkundigt</em>. E alla domanda di un familiare sul referto la risposta non è il referto: in riunione si decide chi informa il medico, perché il colloquio sulla diagnosi spetta a lui."
      },
      {
        tip: "Impara i verbi con la preposizione e il caso già dentro una frase di reparto: <em>Ich kümmere mich um Zimmer acht. Ich warte auf den Befund. Wir sprechen über den Dienstplan.</em> Tre frasi così, ripetute ad alta voce, valgono più di una lista di preposizioni da memorizzare."
      }
    ],
    grammar: {
      title: "Verbi con preposizione fissa",
      note: "Il verbo si impara con la sua <b>preposizione</b> e il suo <b>caso</b>. Domanda: <b>wo(r)</b> + preposizione. Ripresa di una cosa: <b>da(r)</b> + preposizione. Per le persone: preposizione + pronome.",
      table: {
        head: ["verbo", "caso", "domanda", "ripresa"],
        rows: [
          ["sich kümmern um", "accusativo", "Worum kümmerst du dich?", "Ich kümmere mich darum."],
          ["sich erkundigen nach", "dativo", "Wonach hat sie sich erkundigt?", "Sie hat sich danach erkundigt."],
          ["warten auf", "accusativo", "Worauf wartest du?", "Ich warte darauf."],
          ["sprechen über", "accusativo", "Worüber sprechen wir?", "Darüber sprechen wir am Ende."]
        ]
      },
      examples: [
        { tr: "Chi si occupa oggi della stanza otto?", note: "sich kümmern um + accusativo" },
        { tr: "Mi occupo io del nuovo ricovero.", note: "um die Neuaufnahme: accusativo femminile" },
        { tr: "Oggi parliamo del piano dei turni.", note: "sprechen über + accusativo: über den Dienstplan" },
        { tr: "La figlia ha chiesto informazioni sul referto.", note: "sich erkundigen nach + dativo: nach dem Befund; erkundigt senza ge-" },
        { tr: "Sto ancora aspettando la lettera del medico.", note: "warten auf + accusativo: auf den Arztbrief" },
        { tr: "Di questo parliamo alla fine.", note: "darüber riprende un argomento già nominato" }
      ]
    },
    vocab: [
      "la riunione d'équipe",
      "il piano dei turni",
      "occuparsi di",
      "informarsi su, chiedere notizie di",
      "parlare di",
      "aspettare (qualcosa o qualcuno)",
      "lamentarsi di",
      "il nuovo ricovero, il paziente appena ricoverato",
      "la discussione del caso",
      "la proposta",
      "d'accordo",
      "la coordinatrice infermieristica, la caposala"
    ],
    dialogue: [
      "Oggi parliamo di due cose: il piano dei turni e il signor Wolf.",
      "Vorrei dire prima qualcosa sul signor Wolf.",
      "Prego.",
      "Ieri sua figlia ha chiesto informazioni sul referto. Le ho detto che ne parla il medico con lei.",
      "Mi occupo io di far sì che il medico la chiami oggi.",
      "Bene. E chi si occupa del nuovo ricovero di questo pomeriggio?",
      "Lo faccio io. Però sto ancora aspettando la lettera del medico.",
      "Va bene. Del piano dei turni parliamo alla fine."
    ],
    culture: {
      title: "Uno sguardo tedesco: la Stationsleitung e il Dienstplan",
      text: "<p>La <i>Stationsleitung</i> corrisponde più o meno alla coordinatrice infermieristica italiana: organizza il personale, prepara il <i>Dienstplan</i> e di solito guida la riunione d'équipe. Il piano dei turni si pubblica in anticipo e i desideri per i giorni liberi (<i>Wunschfrei</i>) si segnano entro una data fissata dal reparto.</p><p>Nella riunione ci si dà spesso del <i>du</i> tra colleghi, anche se con la direzione e con i medici in molti reparti si resta al <i>Sie</i>. Se non sei sicura, ascolta come si rivolgono gli altri, oppure chiedi: <i>Duzen wir uns?</i></p>"
    },
    exercises: [
      {
        q: "Completa: «Ich kümmere mich ___ die Neuaufnahme.»",
        opts: ["um", "für", "auf"],
        why: "<i>sich kümmern</i> vuole sempre <b>um</b> + accusativo. <i>für</i> è la traduzione letterale di un «per» che qui non c'è; <i>auf</i> appartiene a <i>warten auf</i>."
      },
      {
        tr: "Il presente di sich kümmern, tutte le persone.",
        why: "<i>Kümmere mich, kümmerst dich, kümmert sich, kümmern uns, kümmert euch, kümmern sich</i>: il pronome riflessivo cambia con la persona. Alla prima persona singolare la <b>e</b> davanti a <b>r</b> resta: <i>kümmere</i>."
      },
      {
        q: "Completa: «Wir warten noch ___ den Befund.»",
        hint: "preposizione di warten",
        why: "<b>auf</b>: <i>warten auf</i> + accusativo. In italiano «aspettare» non ha preposizione, per questo è facile dimenticarla o mettere <i>für</i>."
      },
      {
        q: "Completa la frase.",
        tr: "La figlia ha chiesto informazioni sul referto.",
        why: "<i>sich erkundigen <b>nach</b></i> + dativo: <i>nach dem Befund</i>. Il participio <i><b>erkundigt</b></i> non ha <i>ge-</i>, perché <i>er-</i> è un prefisso inseparabile."
      },
      {
        q: "Quali frasi sono corrette?",
        opts: [
          "Wer kümmert sich um Zimmer acht?",
          "Wer kümmert sich für Zimmer acht?",
          "Wir sprechen über den Dienstplan.",
          "Er hat sich nach seinem Befund erkundigt.",
          "Wir warten noch für die Laborwerte."
        ],
        why: "Le preposizioni fisse sono <i>kümmern <b>um</b></i>, <i>sprechen <b>über</b></i>, <i>erkundigen <b>nach</b></i>, <i>warten <b>auf</b></i>. <i>für</i> non va con nessuno di questi verbi."
      },
      {
        q: "Scegli l'articolo determinativo giusto per ogni nome.",
        items: ["riunione d'équipe", "piano dei turni", "nuovo ricovero", "discussione del caso", "proposta", "coordinatrice infermieristica"]
      },
      {
        q: "Abbina ogni verbo al suo significato.",
        pairs: ["occuparsi di", "informarsi su", "aspettare", "parlare di"]
      },
      {
        q: "Metti in ordine le parole.",
        tr: "Chi si occupa del nuovo ricovero?",
        why: "<i>Wer kümmert sich um die Neuaufnahme?</i> <i>Wer</i> è il soggetto, il verbo segue subito, poi il riflessivo <i>sich</i> e infine la preposizione con il suo complemento."
      },
      {
        q: "Traduci: «Domani parliamo del piano dei turni.»",
        why: "<i>Morgen sprechen wir über den Dienstplan</i> oppure <i>Wir sprechen morgen über den Dienstplan</i>. «parlare di» è <i>sprechen über</i> + accusativo; va bene anche <i>reden über</i>."
      },
      {
        q: "Nella riunione d'équipe.",
        setting: "La coordinatrice distribuisce i compiti. Tu segui il signor Wolf.",
        lines: [
          { tr: "Chi si occupa oggi del signor Wolf?" },
          { tr: "Rispondi che te ne occupi tu.", answerTr: "Me ne occupo io." },
          { tr: "Qualcuno ha chiesto sue notizie?" },
          { tr: "Rispondi che ieri sua figlia ha chiesto sue notizie.", answerTr: "Sì, ieri sua figlia ha chiesto sue notizie." },
          { tr: "Che cosa stai ancora aspettando?" },
          { tr: "Rispondi che aspetti ancora la lettera del medico.", answerTr: "Sto ancora aspettando la lettera del medico." }
        ]
      },
      {
        tr: "La figlia ha chiesto informazioni sul referto.",
        why: "In <i>Tochter</i> la <b>ch</b> dopo <b>o</b> è [x]; in <i>erkundigt</i> l'accento cade su <b>kun</b> e la <b>g</b> prima della <b>t</b> si legge [ç]; in <i>Befund</i> la <b>d</b> finale si legge [t]."
      },
      {
        tr: "Mi occupo io del nuovo ricovero.",
        why: "In <i>kümmere</i> la <b>ü</b> è breve; in <i>Neuaufnahme</i> ci sono due dittonghi, <b>eu</b> [ɔʏ] e <b>au</b> [aʊ], e l'accento cade su <b>Neu</b>."
      }
    ]
  },
  "lesson:pfl-u08-l4": {
    theme: "Al telefono",
    title: "Al telefono: laboratorio, farmacia, medico di base",
    objectives: [
      "presentarsi al telefono e dire da quale reparto si chiama",
      "chiedere con cortesia: hätte, könnten, wäre es möglich, würden",
      "far ripetere e far compitare un nome",
      "ripetere i dati ricevuti per controllarli"
    ],
    theory: [
      {
        h: "Una telefonata di reparto",
        p: "Al telefono si comincia dicendo chi chiama e da dove: <em>Guten Tag, hier ist Station drei.</em> Poi si dice per chi si chiama (<em>Um Herrn Wolf, Zimmer fünf</em>) e che cosa si vuole. Chi risponde dice di solito il servizio e il cognome: <em>Labor, Schneider, guten Tag.</em> Alla fine si ripetono i dati importanti: <em>Ich wiederhole: ...</em> Un valore di laboratorio ricevuto al telefono si scrive subito, si ripete per controllarlo e, se è fuori norma, si riferisce al medico."
      },
      {
        h: "Il Konjunktiv II di cortesia",
        p: "Per chiedere qualcosa con gentilezza il tedesco usa il <strong>Konjunktiv II</strong>, il condizionale. Quattro formule bastano per quasi ogni telefonata: <em>Ich <b>hätte</b> eine Frage zu ...</em> (avrei una domanda), <em><b>Könnten</b> Sie mir ... durchgeben?</em> (potrebbe...?), <em><b>Wäre</b> es möglich, ... zu schicken?</em> (sarebbe possibile...?), <em><b>Würden</b> Sie mich bitte zurückrufen?</em> (mi richiamerebbe?). Per un desiderio: <em>Ich <b>würde</b> gern mit Doktor Becker sprechen.</em> Dopo <em>Wäre es möglich</em> segue l'infinito con <em>zu</em>, in fondo: <em>den Befund heute noch <b>zu schicken</b></em>."
      },
      {
        contrast: "Il condizionale di cortesia esiste anche in italiano («potrebbe», «vorrei», «sarebbe possibile»), quindi l'idea è familiare. Le differenze sono due. Prima: il tedesco ha forme brevi proprie solo per pochi verbi frequenti (<em>hätte, wäre, könnte, würde</em>); per gli altri usa <em>würde</em> + infinito, dove l'italiano coniuga il verbo stesso («mi richiamerebbe?» diventa <em>Würden Sie mich zurückrufen?</em>). Seconda: al telefono in tedesco la frase senza condizionale suona subito brusca. <em>Geben Sie mir die Werte!</em> è un ordine; <em>Sie können mir die Werte durchgeben</em> sembra quasi un permesso concesso. In italiano «mi dà i valori?» è ancora gentile; in tedesco la versione gentile passa quasi sempre da <em>könnten</em> o <em>würden</em>."
      },
      {
        trap: "<em>Ich hätte eine Frage</em> non vuol dire che la domanda non c'è più: è semplicemente il modo cortese di dire «ho una domanda». E non confondere <em>hätte</em> (avrei) con <em>hatte</em> (avevo): la differenza è solo l'Umlaut, e al telefono si sente nella vocale, [ɛ] contro [a]. <em>durchgeben</em> è separabile: <em>Könnten Sie mir die Werte <b>durchgeben</b>?</em>, ma <em>Das Labor <b>gibt</b> die Werte <b>durch</b>.</em>"
      },
      {
        tip: "Al telefono i nomi si compitano con l'alfabeto telefonico tedesco: <em>W wie Wilhelm, O wie Otto</em>. E i numeri si dicono a uno a uno: <em>zwei, drei, vier, fünf</em>, non <em>dreiundzwanzig, fünfundvierzig</em>, perché l'ordine invertito delle decine (<em>drei-und-zwanzig</em>) è proprio il punto dove si sbaglia. Quando ricevi un dato, ripetilo sempre: <em>Ich wiederhole: ...</em>"
      }
    ],
    grammar: {
      title: "Formule di cortesia al telefono",
      note: "<b>hätte, wäre, könnte</b> sono forme proprie del Konjunktiv II. Per quasi tutti gli altri verbi: <b>würde</b> + infinito in fondo. Dopo <b>Wäre es möglich</b>: infinito con <b>zu</b> in fondo.",
      table: {
        head: ["formula", "significato", "esempio"],
        rows: [
          ["Ich hätte ...", "avrei, cioè: ho", "Ich hätte eine Frage zu einem Medikament."],
          ["Könnten Sie ...?", "potrebbe...?", "Könnten Sie mir die Laborwerte durchgeben?"],
          ["Wäre es möglich, ... zu ...?", "sarebbe possibile...?", "Wäre es möglich, den Befund heute noch zu schicken?"],
          ["Würden Sie ...?", "+ infinito: condizionale degli altri verbi", "Würden Sie mich bitte zurückrufen?"],
          ["Ich würde gern ...", "vorrei", "Ich würde gern mit Doktor Becker sprechen."]
        ]
      },
      examples: [
        { tr: "Avrei una domanda su un farmaco.", note: "hätte: forma cortese di haben" },
        { tr: "Potrebbe comunicarmi i valori di laboratorio del signor Wolf?", note: "könnten + durchgeben in fondo" },
        { tr: "Sarebbe possibile mandare il referto ancora oggi?", note: "Wäre es möglich + infinito con zu in fondo" },
        { tr: "Mi richiamerebbe, per favore?", note: "würden + infinito: zurückrufen in fondo" },
        { tr: "Vorrei parlare con il dottor Becker.", note: "würde gern + infinito" },
        { tr: "Ripeto: stanza cinque, signor Wolf.", note: "ripetere i dati per controllarli" }
      ]
    },
    vocab: [
      "il laboratorio",
      "la farmacia",
      "il medico di base, il medico di famiglia",
      "il valore di laboratorio",
      "il numero interno",
      "la richiamata",
      "comunicare (per telefono)",
      "richiamare",
      "raggiungibile, reperibile",
      "compitare, fare lo spelling",
      "passare (una telefonata), mettere in contatto",
      "consegnare, fornire"
    ],
    dialogue: [
      "Laboratorio, Schneider, buongiorno.",
      "Buongiorno, qui è il reparto tre. Avrei una domanda su un emocromo.",
      "Di quale paziente si tratta?",
      "Del signor Wolf, stanza cinque. Potrebbe dirmi se i valori sono già pronti?",
      "I valori sono quasi pronti. Glieli mando tra dieci minuti.",
      "Sarebbe possibile chiamarmi, se un valore è fuori norma?",
      "Sì, certo. Qual è il suo numero interno?",
      "Due, tre, quattro, cinque. Ripeto: mi chiama se un valore è fuori norma. Grazie mille."
    ],
    culture: {
      title: "Uno sguardo tedesco: farmacia dell'ospedale e medico di base",
      text: "<p>Negli ospedali tedeschi i farmaci arrivano di solito dalla <i>Krankenhausapotheke</i>, la farmacia interna, o da una farmacia esterna convenzionata. Le ordinazioni seguono orari fissi; per un farmaco che manca si telefona e si chiede se è possibile una consegna straordinaria.</p><p>Il <i>Hausarzt</i> è il medico di base. In reparto lo si chiama per esempio per chiedere quali farmaci il paziente prendeva a casa o per preparare la dimissione. Quali informazioni si possono dare al telefono lo stabilisce la protezione dei dati: prima di dare informazioni su un paziente, verifica chi c'è dall'altra parte.</p>"
    },
    exercises: [
      {
        q: "Telefoni al laboratorio e vuoi i valori di un paziente. Quale frase è cortese?",
        opts: ["Geben Sie mir die Werte!", "Könnten Sie mir bitte die Werte durchgeben?", "Sie können mir die Werte durchgeben."],
        why: "<b>Könnten Sie ...?</b> con il Konjunktiv II è la richiesta cortese. L'imperativo suona come un ordine, e <i>Sie können</i> come se fossi tu a dare il permesso."
      },
      {
        tr: "Il Konjunktiv II di können, tutte le persone.",
        why: "<i>Könnte, könntest, könnte, könnten, könntet, könnten</i>: la radice prende l'Umlaut (<b>ö</b>) e le desinenze sono quelle del Präteritum. Al telefono la forma che serve di più è <i>Könnten Sie ...?</i>"
      },
      {
        q: "Completa: «Ich ___ eine Frage zu einem Medikament.»",
        hint: "Konjunktiv II di haben",
        why: "<b>hätte</b>: forma cortese di <i>haben</i>, «avrei». Attenzione all'Umlaut: <i>hatte</i> senza Umlaut è il Präteritum, «avevo»."
      },
      {
        q: "Completa la frase.",
        tr: "Mi richiamerebbe, per favore?",
        why: "<i><b>Würden</b> Sie mich bitte <b>zurückrufen</b>?</i>: Konjunktiv II con <i>würden</i> e l'infinito in fondo. Va bene anche <i>Könnten</i>. <i>zurückrufen</i> all'infinito resta unito."
      },
      {
        q: "Quali frasi sono corrette?",
        opts: [
          "Ich hätte eine Frage zur Lieferung.",
          "Ich habe gern eine Frage.",
          "Wäre es möglich, den Befund heute noch zu schicken?",
          "Ich würde gern mit Doktor Becker sprechen.",
          "Ich würde gern mit Doktor Becker zu sprechen."
        ],
        why: "<i>hätte</i> è la forma cortese corretta; <i>gern</i> si usa con <i>würde</i>, non con <i>habe eine Frage</i>. Dopo <i>Wäre es möglich</i> serve <i>zu</i>; dopo <i>würde gern</i> l'infinito va senza <i>zu</i>."
      },
      {
        q: "Scegli l'articolo determinativo giusto per ogni nome.",
        items: ["laboratorio", "farmacia", "medico di base", "valore di laboratorio", "numero interno", "richiamata"]
      },
      {
        q: "Abbina ogni verbo al suo significato.",
        pairs: ["comunicare (per telefono)", "richiamare", "compitare", "passare una telefonata"]
      },
      {
        q: "Metti in ordine le parole.",
        tr: "Avrei una domanda su un emocromo.",
        why: "<i>Ich hätte eine Frage zu einem Blutbild.</i> Il verbo <i>hätte</i> al secondo posto; «su» qui è <i>zu</i> + dativo: <i>zu einem Blutbild</i>. Va bene anche <i>Ich hätte zu einem Blutbild eine Frage</i>."
      },
      {
        q: "Traduci: «Potrebbe richiamarmi tra dieci minuti?»",
        why: "<i>Könnten Sie mich in zehn Minuten zurückrufen?</i> Va bene anche <i>Würden Sie mich ... zurückrufen?</i>, con o senza <i>bitte</i>. «tra dieci minuti» è <i>in zehn Minuten</i>, non <i>zwischen</i>."
      },
      {
        q: "Una telefonata alla farmacia.",
        setting: "Un farmaco per la stanza cinque non è arrivato. Telefoni alla farmacia dell'ospedale.",
        lines: [
          { tr: "Farmacia, buongiorno." },
          { tr: "Di' da quale reparto chiami e che avresti una domanda su una consegna.", answerTr: "Buongiorno, qui è il reparto tre. Avrei una domanda su una consegna." },
          { tr: "Di che cosa si tratta esattamente?" },
          { tr: "Spiega che un farmaco per la stanza cinque non è ancora arrivato e chiedi se è possibile consegnarlo oggi.", answerTr: "Un farmaco per la stanza cinque non è ancora arrivato. Sarebbe possibile consegnarlo ancora oggi?" },
          { tr: "Verifico e la richiamo." },
          { tr: "Ringrazia e dai il tuo numero interno.", answerTr: "Grazie. Il mio numero interno è due, tre, quattro, cinque." }
        ]
      },
      {
        tr: "Sarebbe possibile chiamarmi, se un valore è fuori norma?",
        why: "In <i>wäre</i> la <b>ä</b> è lunga, [ɛː]; in <i>möglich</i> la <b>ö</b> è lunga e la <b>ch</b> finale è [ç]; in <i>auffällig</i> l'accento cade su <b>auf</b>."
      },
      {
        tr: "Avrei una domanda su un farmaco.",
        why: "In <i>hätte</i> la <b>ä</b> è breve e si distingue da <i>hatte</i> solo per la vocale; in <i>Medikament</i> l'accento cade sull'ultima sillaba, <b>ment</b>."
      }
    ]
  },
  "lesson:pfl-u08-test": {
    theme: "Verifica",
    title: "Test: Giro visita, prescrizioni ed équipe",
    objectives: [
      "verificare il passivo del giro visita, dass e ob nelle prescrizioni, i verbi con preposizione e il Konjunktiv II al telefono"
    ],
    theory: [
      {
        p: "Undici domande sull'intera unità. Si supera con il 70%. I pazienti e le situazioni sono inventati e servono solo come esempio: come si eseguono e si documentano le prescrizioni lo stabiliscono le regole della struttura. Una prescrizione poco chiara si chiarisce sempre con il medico."
      }
    ],
    exercises: [
      {
        q: "Una prescrizione ti sembra insolita. Che cosa fai?",
        opts: ["Ich führe die Anordnung trotzdem aus.", "Ich frage noch einmal bei der Ärztin nach.", "Ich ändere die Anordnung selbst."],
        why: "Una prescrizione insolita si chiarisce con il medico prima di eseguirla: <b>Ich frage noch einmal bei der Ärztin nach</b>. Eseguirla comunque o cambiarla da sola non sono vie sicure."
      },
      {
        q: "Completa: «Der Verband ___ morgen gewechselt.»",
        hint: "passivo al presente",
        why: "<b>wird</b>: passivo presente, <i>werden</i> coniugato + participio <i>gewechselt</i> in fondo."
      },
      {
        tr: "Il Konjunktiv II di haben, tutte le persone.",
        why: "<i>Hätte, hättest, hätte, hätten, hättet, hätten</i>: come il Präteritum <i>hatte</i>, ma con l'Umlaut <b>ä</b>."
      },
      {
        q: "Abbina ogni parola al suo significato.",
        pairs: ["il giro visita", "la richiesta di chiarimento", "il piano dei turni", "il numero interno"]
      },
      {
        q: "Quali frasi sono corrette?",
        opts: [
          "Die Therapie wird fortgesetzt.",
          "Ich warte noch für den Befund.",
          "Könnten Sie mich bitte zurückrufen?",
          "Ich bin nicht sicher, ob die Anordnung gilt noch.",
          "Die Tochter hat sich nach dem Befund erkundigt."
        ],
        why: "<i>warten</i> vuole <i>auf</i>, non <i>für</i>. Dopo <i>ob</i> il verbo va in fondo: <i>ob die Anordnung noch gilt</i>."
      },
      {
        q: "Completa la frase.",
        tr: "In cartella c'è scritto che oggi va fatto un emocromo.",
        why: "<i><b>dass</b></i> riferisce che cosa c'è scritto; nella subordinata il passivo finisce con <i>abgenommen <b>wird</b></i>."
      },
      {
        q: "Metti in ordine le parole.",
        tr: "Stiamo ancora aspettando i valori di laboratorio.",
        why: "<i>Wir warten noch auf die Laborwerte.</i> <i>warten auf</i> + accusativo; <i>noch</i> viene prima della preposizione."
      },
      {
        q: "Scegli l'articolo determinativo giusto per ogni nome.",
        items: ["giro visita", "prescrizione", "referto", "emocromo", "piano dei turni", "laboratorio"]
      },
      {
        q: "Traduci: «Domani viene cambiata la medicazione.»",
        why: "<i>Morgen wird der Verband gewechselt</i> oppure <i>Der Verband wird morgen gewechselt</i>: passivo presente con <i>wird</i> e il participio in fondo."
      },
      {
        tr: "La terapia prosegue come finora.",
        why: "In <i>Therapie</i> l'accento cade su <b>pie</b>; in <i>bisher</i> l'accento cade su <b>her</b>; in <i>fortgesetzt</i> l'accento cade su <b>fort</b>."
      },
      {
        tr: "Sarebbe possibile chiamarmi, se un valore è fuori norma?",
        why: "In <i>wäre</i> la <b>ä</b> è lunga; in <i>anzurufen</i> il <i>zu</i> sta tra il prefisso <i>an</i> e il verbo; in <i>Wert</i> la <b>w</b> è [v] e la <b>e</b> è lunga."
      }
    ]
  }
});
