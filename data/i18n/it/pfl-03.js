/* ============================================================
   Learner-language text (it) for data/core/pfl-03.js, unit pfl-u03.
   Keys point at ids in the neutral layer; arrays merge by index,
   so their length has to match core.
   Checked by scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("it", {
  "unit:pfl-u03": {
    title: "Cure di base e mobilizzazione",
    grammarNote: "i verbi riflessivi dell'igiene e della vestizione · le preposizioni con accusativo o dativo (wohin? / wo?) · i verbi modali con il paziente · l'infinito con zu · coppie Fachsprache / Laiensprache"
  },
  "lesson:pfl-u03-l1": {
    theme: "Igiene e vestizione",
    title: "Lavarsi e vestirsi",
    objectives: [
      "accompagnare il paziente nell'igiene del mattino, al lavandino o a letto",
      "usare i verbi riflessivi: sich waschen, sich anziehen, sich rasieren",
      "scegliere tra mich e mir quando nella frase c'è un oggetto",
      "proteggere l'intimità del paziente con parole e gesti rispettosi"
    ],
    theory: [
      {
        h: "L'igiene del mattino",
        p: "La <strong>Grundpflege</strong> comprende igiene, vestizione, alimentazione, eliminazione e movimento. La prima domanda non è «la lavo io?», ma che cosa il paziente vuole e può fare da solo: <em>Möchten Sie sich heute selbst waschen? Am Waschbecken oder lieber im Bett?</em> Poi si divide il lavoro, a voce: <em>Das Gesicht waschen Sie sich selbst, den Rücken wasche ich Ihnen.</em> Per l'igiene intima si offre sempre prima la possibilità di farla da sé, e si dice che cosa si fa per proteggere l'intimità: <em>Ich ziehe den Vorhang zu. Ich warte so lange draußen.</em>"
      },
      {
        h: "I verbi riflessivi",
        p: "Molti verbi dell'igiene sono riflessivi: <em>sich waschen, sich anziehen, sich ausziehen, sich rasieren, sich kämmen</em>. Nella frase principale il pronome segue il verbo coniugato: <em>Ich wasche mich. Er zieht sich an.</em> Con il Sie di cortesia il riflessivo è <strong>sich</strong>, minuscolo, non <em>Sie</em>: <em>Können Sie sich allein anziehen?</em> Quando nella frase c'è anche un oggetto all'accusativo (la parte del corpo, un indumento), il riflessivo passa al <strong>dativo</strong>: <em>Ich wasche mich</em>, ma <em>Ich wasche mir das Gesicht</em>. La differenza si vede solo con <em>ich</em> e <em>du</em> (mich/mir, dich/dir): <em>sich</em>, <em>uns</em> ed <em>euch</em> restano uguali. Al Perfekt i verbi riflessivi usano <em>haben</em>: <em>Er hat sich schon angezogen.</em>"
      },
      {
        contrast: "L'italiano conosce bene i riflessivi, e questo aiuta: «mi lavo», «si veste». Ma l'italiano mette il pronome prima del verbo («si lava da solo?»), il tedesco dopo il verbo coniugato (<em>Waschen Sie sich selbst?</em>). E l'italiano dice «mi lavo le mani» con lo stesso «mi» di «mi lavo»; il tedesco cambia caso: <em>Ich wasche mir die Hände</em>, non <em>mich</em>. Anche qui ci sono due registri. In documentazione e tra colleghi si parla di <em>Intimpflege</em> e <em>Intimbereich</em>; molti pazienti anziani non usano queste parole e dicono <em>untenherum</em>. Non serve correggerli: capisci la parola e rispondi con calma, senza nomi più espliciti di quelli che ha scelto il paziente."
      },
      {
        trap: "<em>baden</em> non vuol dire «lavarsi» in generale: è fare il bagno nella vasca. Lavarsi al lavandino è <em>sich waschen</em>, la doccia è <em>duschen</em>. <em>Das Bad</em> è sia il bagno come stanza sia il bagno nella vasca. <em>Die Wäsche</em> è il bucato o la biancheria, ma in reparto <em>die Ganzkörperwäsche</em> è il lavaggio completo del corpo, spesso a letto. E <em>das Hemd</em> è la camicia, mentre la camicia da notte è <em>das Nachthemd</em>."
      },
      {
        tip: "Annuncia ogni gesto prima di farlo: <em>Ich wasche Ihnen jetzt den Rücken.</em> Una frase breve prima di toccare il paziente rassicura più di qualsiasi spiegazione, e con il verbo riflessivo o con il dativo ti allena sullo schema che in questa lezione conta di più."
      }
    ],
    grammar: {
      title: "mich o mir?",
      note: "Senza altro oggetto il riflessivo è all'<b>accusativo</b> (<b>mich</b>). Con un altro oggetto all'accusativo, la parte del corpo o l'indumento, passa al <b>dativo</b> (<b>mir</b>). Con il paziente: sempre <b>sich</b>.",
      table: {
        head: ["persona", "senza oggetto (accusativo)", "con un oggetto (dativo)"],
        rows: [
          ["ich", "Ich wasche mich.", "Ich wasche mir die Hände."],
          ["er / sie", "Er zieht sich an.", "Er zieht sich die Jacke an."],
          ["wir", "Wir waschen uns.", "Wir putzen uns die Zähne."],
          ["Sie", "Waschen Sie sich selbst?", "Waschen Sie sich das Gesicht selbst?"]
        ]
      },
      examples: [
        { tr: "Oggi desidera lavarsi da sola?", note: "con il Sie il riflessivo è sich" },
        { tr: "Prima mi lavo la faccia.", note: "c'è un oggetto (das Gesicht): mir, al dativo" },
        { tr: "Riesce a vestirsi da solo?", note: "anziehen è separabile: Ich ziehe mich an" },
        { tr: "La zona intima se la lava da sola, io intanto aspetto fuori.", note: "si offre sempre prima l'igiene intima autonoma" },
        { tr: "Desidera radersi?", note: "sich rasieren: chiedere, non dare per scontato" },
        { tr: "Il signor Brandt si è già vestito.", note: "Perfekt dei riflessivi: sempre con haben" }
      ]
    },
    vocab: [
      "le cure di base (igiene, vestizione, alimentazione, eliminazione, movimento)",
      "l'igiene personale",
      "lavarsi",
      "vestirsi",
      "spogliarsi, togliersi (un indumento)",
      "radersi, farsi la barba",
      "pettinarsi",
      "la manopola, il guanto per lavarsi",
      "l'asciugamano",
      "il lavandino",
      "l'igiene intima",
      "la protesi dentaria, la dentiera"
    ],
    dialogue: [
      "Buongiorno, signora Keller. Ha dormito bene?",
      "Buongiorno. Così così.",
      "Oggi desidera lavarsi al lavandino o preferisce a letto?",
      "Al lavandino, se mi aiuta.",
      "Volentieri. La faccia e le braccia se le lava da sola, la schiena gliela lavo io.",
      "E la parte intima preferisco farla da sola.",
      "Certo. Le do una manopola pulita e aspetto fuori. Suoni il campanello quando ha finito.",
      "Grazie, preferisco così.",
      "Dopo si veste. Quale camicetta vuole mettere oggi?",
      "Quella blu, per favore."
    ],
    culture: {
      title: "Uno sguardo tedesco: Grundpflege e Behandlungspflege",
      text: "<p>Nel lavoro di cura tedesco si distinguono di solito due ambiti. La <i>Grundpflege</i> comprende le attività della vita quotidiana: igiene, vestizione, alimentazione, eliminazione, movimento. La <i>Behandlungspflege</i> comprende le attività legate a una prescrizione medica, per esempio medicazioni o somministrazione di farmaci. Nell'assistenza domiciliare la distinzione conta anche per chi paga la prestazione, ed è una parola che leggerai spesso nei documenti.</p><p>In ospedale parte della Grundpflege è svolta anche da personale con una formazione più breve, ma la responsabilità di valutare che cosa il paziente riesce a fare da solo resta all'infermiera.</p>"
    },
    exercises: [
      {
        q: "Vuoi chiedere alla paziente se desidera lavarsi da sola. Quale frase è corretta?",
        opts: [
          "Möchten Sie Sie selbst waschen?",
          "Möchten Sie sich selbst waschen?",
          "Möchten Sie selbst waschen sich?"
        ],
        why: "Con il Sie di cortesia il riflessivo è <b>sich</b>, non <i>Sie</i>. Il modale <i>möchten</i> apre la domanda sì/no e l'infinito <i>waschen</i> va in fondo."
      },
      {
        tr: "Il presente di sich waschen, tutte le persone.",
        why: "<i>Wasche mich, wäschst dich, wäscht sich, waschen uns, wascht euch, waschen sich</i>: alla seconda e terza persona singolare la <b>a</b> diventa <b>ä</b>, e il pronome riflessivo cambia con la persona."
      },
      {
        q: "Completa: «Können Sie ___ allein anziehen?»",
        hint: "riflessivo di Sie",
        why: "<b>sich</b>, minuscolo: il riflessivo del Sie di cortesia è uguale a quello della terza persona."
      },
      {
        q: "Completa con mich o mir.",
        tr: "Prima mi lavo la faccia, poi mi vesto.",
        why: "<i>Ich wasche mir zuerst das Gesicht</i>: c'è un oggetto, <i>das Gesicht</i>, quindi il dativo <i>mir</i>. <i>Dann ziehe ich mich an</i>: nessun oggetto, quindi l'accusativo <i>mich</i>."
      },
      {
        q: "Quali frasi sono corrette?",
        opts: [
          "Ich wasche mir die Hände.",
          "Ich wasche mich die Hände.",
          "Können Sie sich allein anziehen?",
          "Er hat sich schon rasiert.",
          "Er ist sich schon rasiert."
        ],
        why: "Con un oggetto (<i>die Hände</i>) il riflessivo è al dativo, <i>mir</i>. Al Perfekt i verbi riflessivi usano <i>haben</i>: <i>Er hat sich rasiert</i>."
      },
      {
        q: "Scegli l'articolo determinativo giusto per ogni nome.",
        items: ["manopola per lavarsi", "asciugamano", "lavandino", "igiene intima", "protesi dentaria", "cure di base"]
      },
      {
        q: "Abbina ogni verbo al suo significato.",
        pairs: ["lavarsi", "vestirsi", "spogliarsi", "radersi"]
      },
      {
        q: "Metti in ordine le parole.",
        tr: "Riesce a vestirsi da solo?",
        why: "<i>Können Sie sich allein anziehen?</i> Il modale apre la domanda sì/no, il riflessivo <i>sich</i> segue il soggetto e l'infinito <i>anziehen</i> va in fondo."
      },
      {
        q: "Traduci (al paziente): «Desidera radersi?»",
        why: "<i>Möchten Sie sich rasieren?</i> Con il paziente <i>möchten</i> è la forma più cortese; <i>Wollen Sie</i> è corretto ma suona più diretto."
      },
      {
        q: "L'igiene del mattino.",
        setting: "Entri nella stanza di una paziente che vuole lavarsi da sola.",
        lines: [
          { tr: "Buongiorno. Oggi vorrei lavarmi da sola." },
          { tr: "Rispondi che la schiena gliela lavi tu e il resto lo fa lei.", answerTr: "Volentieri. La schiena gliela lavo io, il resto lo fa Lei." },
          { tr: "E la parte intima? Mi mette un po' a disagio." },
          { tr: "Rispondi che capisci: la parte intima se la lava da sola e tu aspetti fuori.", answerTr: "La capisco. La zona intima se la lava da sola, io aspetto fuori." },
          { tr: "E dopo?" },
          { tr: "Rispondi che dopo si veste e che tu la aiuti con le calze.", answerTr: "Dopo si veste, e io La aiuto con le calze." }
        ]
      },
      {
        tr: "La faccia e le braccia se le lava da sola, la schiena gliela lavo io.",
        why: "In <i>Gesicht</i> la <b>g</b> è dura e la <b>ch</b> dopo <b>i</b> è [ç]; in <i>Rücken</i> la <b>ü</b> è breve; in <i>waschen</i> la <b>sch</b> è [ʃ]."
      },
      {
        tr: "Oggi desidera lavarsi da sola?",
        why: "In <i>Möchten</i> la <b>ö</b> è breve e la <b>ch</b> è [ç]; in <i>sich</i> la <b>s</b> iniziale è sonora [z]; in <i>selbst</i> la <b>b</b> si legge [p]."
      }
    ]
  },
  "lesson:pfl-u03-l2": {
    theme: "Movimento",
    title: "Mobilizzazione e posizionamento",
    objectives: [
      "accompagnare il paziente dal letto al bordo del letto e alla sedia a rotelle",
      "distinguere wohin? (accusativo) e wo? (dativo) con le preposizioni an, auf, in, neben",
      "usare le coppie setzen / sitzen, legen / liegen, stellen / stehen",
      "riconoscere Dekubitus e Kontraktur e dirli con parole del paziente"
    ],
    theory: [
      {
        h: "Annunciare il movimento",
        p: "Prima di mobilizzare un paziente si dice che cosa succede e si chiede se va bene: <em>Heute setzen wir Sie an die Bettkante. Ist das in Ordnung?</em> Si procede per piccoli passi, uno alla volta, e ci si ferma quando il paziente segnala un malessere: <em>Mir ist schwindelig.</em> <em>Dann bleiben Sie erst einmal sitzen.</em> Come e con quali ausili si mobilizza un paziente lo decidono la valutazione infermieristica e il protocollo della struttura: qui impari le parole per accompagnare il movimento, non la tecnica."
      },
      {
        h: "Wohin? o wo?",
        p: "Le preposizioni <em>an, auf, in, neben, unter, über, vor, hinter, zwischen</em> reggono due casi. Se c'è uno spostamento verso una meta (<strong>wohin?</strong>) vogliono l'<strong>accusativo</strong>: <em>Ich setze Sie an die Bettkante.</em> Se si descrive una posizione (<strong>wo?</strong>) vogliono il <strong>dativo</strong>: <em>Sie sitzen an der Bettkante.</em> I verbi vanno a coppie: <em>setzen, legen, stellen</em> indicano il movimento e, con la preposizione che dice la meta, prendono l'accusativo; <em>sitzen, liegen, stehen</em> indicano la posizione e prendono il dativo. Contrazioni frequenti: <em>an das → ans</em>, <em>in das → ins</em>, <em>an dem → am</em>, <em>in dem → im</em>."
      },
      {
        contrast: "Per chi parla italiano i termini tecnici sono trasparenti: <em>Dekubitus</em> è il decubito, <em>Kontraktur</em> la contrattura, <em>Mobilisation</em> la mobilizzazione. In Italia anche molti pazienti dicono «piaga da decubito». Il paziente tedesco, invece, dice spesso <em>Druckgeschwür</em> («ulcera da pressione») o usa il verbo <em>sich wundliegen</em>: <em>Ich habe mich wundgelegen.</em> Per la contrattura dice <em>Gelenkversteifung</em> o semplicemente <em>Das Knie wird steif.</em> E il paziente di solito non dice <em>Mobilisation</em> o <em>Lagerung</em>: dice <em>aufstehen</em>, <em>sich hinsetzen</em>, <em>sich umdrehen</em>. Il termine tecnico è quello giusto in consegna e nella documentazione; con il paziente funziona meglio il verbo."
      },
      {
        trap: "<em>Die Lagerung</em> in reparto è il posizionamento del paziente, ma nel tedesco di tutti i giorni è l'immagazzinamento delle merci: non usarla con il paziente, che si sentirebbe trattato come un oggetto. Di' piuttosto <em>Ich helfe Ihnen, sich auf die Seite zu drehen.</em> Non confondere <em>setzen</em> e <em>sitzen</em>: <em>Ich sitze Sie</em> non esiste. E <em>die Kante</em> è il bordo, non il «canto»."
      },
      {
        tip: "Per scegliere il caso chiediti se il paziente si muove verso un posto o se ci è già: <em>wohin?</em> e <em>wo?</em> In pratica, quasi ogni volta che parli di ciò che stai per fare usi <em>setzen, legen, stellen</em> con l'accusativo; quando descrivi com'è sistemato usi <em>sitzen, liegen, stehen</em> con il dativo."
      }
    ],
    grammar: {
      title: "Movimento e posizione",
      note: "<b>Wohin?</b> Meta del movimento + <b>accusativo</b>. <b>Wo?</b> Posizione, o movimento dentro un luogo, + <b>dativo</b>. La preposizione è la stessa, cambia il caso.",
      table: {
        head: ["wohin? (accusativo)", "wo? (dativo)"],
        rows: [
          ["Ich setze Sie an die Bettkante.", "Sie sitzen an der Bettkante."],
          ["Wir legen Sie auf die Seite.", "Sie liegen auf der Seite."],
          ["Ich stelle den Rollator neben das Bett.", "Der Rollator steht neben dem Bett."],
          ["Ich setze Sie in den Rollstuhl.", "Sie sitzen im Rollstuhl."]
        ]
      },
      examples: [
        { tr: "Adesso La metto seduto sul bordo del letto.", note: "setzen + an die: movimento, accusativo" },
        { tr: "Adesso è seduto sul bordo del letto.", note: "sitzen + an der: posizione, dativo" },
        { tr: "La giriamo sul fianco.", note: "legen + auf die: accusativo" },
        { tr: "Adesso è comodo sul fianco.", note: "liegen + auf der: dativo" },
        { tr: "Metto il deambulatore accanto al letto.", note: "stellen + neben das: accusativo" },
        { tr: "Il deambulatore è accanto al letto.", note: "stehen + neben dem: dativo" }
      ]
    },
    vocab: [
      "la mobilizzazione (termine tecnico)",
      "mobilizzare",
      "il posizionamento del paziente (termine tecnico)",
      "cambiare posizione al paziente",
      "il bordo del letto",
      "la sedia a rotelle",
      "il deambulatore con ruote, il rollator",
      "il cuscino",
      "la piaga da decubito (termine tecnico)",
      "la piaga da decubito, l'ulcera da pressione (parola per il paziente)",
      "la contrattura (termine tecnico)",
      "la rigidità dell'articolazione (parola per il paziente)"
    ],
    dialogue: [
      "Signor Brandt, oggi La mettiamo seduto sul bordo del letto per la prima volta. Le va bene?",
      "Sì, ma ho un po' paura.",
      "È del tutto normale. Mi aiuta il mio collega. Prima si giri sul fianco.",
      "Così?",
      "Esatto. Adesso mettiamo i Suoi piedi a terra, e Lei si mette seduto piano piano.",
      "Mi gira un po' la testa.",
      "Allora per adesso resti seduto tranquillo sul bordo del letto. Siamo qui con Lei.",
      "Adesso va già meglio.",
      "Bene. La sedia a rotelle è accanto al letto. Oggi, più tardi, vuole andare sulla sedia a rotelle?"
    ],
    culture: {
      title: "Uno sguardo tedesco: Rollator e Kinästhetik",
      text: "<p>Nelle strade tedesche il <i>Rollator</i>, il deambulatore con ruote, freni e sedile, è una presenza quotidiana, e molti pazienti anziani arrivano in ospedale con il proprio. Chiedi sempre dove lo vogliono tenere: per molti è la condizione per alzarsi da soli.</p><p>Nella formazione di molti infermieri tedeschi compare la <i>Kinästhetik</i>, un approccio al movimento che punta a sfruttare le capacità del paziente invece di sollevarlo di peso. Ne sentirai parlare in reparto: il principio di fondo, far fare al paziente tutto ciò che può, è lo stesso della lezione 4.</p>"
    },
    exercises: [
      {
        q: "Vuoi dire al paziente: «Adesso La metto seduto sul bordo del letto». Quale frase è corretta?",
        opts: [
          "Ich setze Sie jetzt an der Bettkante.",
          "Ich setze Sie jetzt an die Bettkante.",
          "Ich sitze Sie jetzt an die Bettkante."
        ],
        why: "<i>setzen</i> indica un movimento verso una meta (<i>wohin?</i>), quindi <i>an</i> regge l'accusativo: <b>an die</b> Bettkante. <i>sitzen</i> non ha oggetto."
      },
      {
        q: "Completa: «Der Rollator steht neben ___ Bett.»",
        hint: "wo? das Bett al dativo",
        why: "<b>dem</b>: <i>stehen</i> descrive una posizione (<i>wo?</i>), quindi <i>neben</i> regge il dativo, e <i>das Bett</i> al dativo diventa <i>dem Bett</i>."
      },
      {
        q: "Completa con l'articolo giusto.",
        tr: "La giriamo sul fianco. Adesso è comodo sul fianco.",
        why: "<i>Wir legen Sie auf die Seite</i>: movimento, accusativo. <i>Jetzt liegen Sie bequem auf der Seite</i>: posizione, dativo."
      },
      {
        q: "Quali frasi sono corrette?",
        opts: [
          "Sie sitzen jetzt an der Bettkante.",
          "Ich stelle den Rollator neben dem Bett.",
          "Wir legen Sie auf die Seite.",
          "Der Rollstuhl steht neben dem Bett.",
          "Ich setze Sie in dem Rollstuhl."
        ],
        why: "<i>stellen</i> e <i>setzen</i> indicano un movimento e vogliono l'accusativo: <i>neben das Bett</i>, <i>in den Rollstuhl</i>. <i>sitzen</i> e <i>stehen</i> indicano una posizione e vogliono il dativo."
      },
      {
        q: "Scegli l'articolo determinativo giusto per ogni nome.",
        items: ["bordo del letto", "sedia a rotelle", "deambulatore", "cuscino", "ulcera da pressione", "posizionamento"]
      },
      {
        q: "Abbina il verbo di movimento (wohin?) al verbo di posizione (wo?).",
        pairs: ["sitzen", "liegen", "stehen"]
      },
      {
        q: "Metti in ordine le parole.",
        tr: "La sedia a rotelle è accanto al letto.",
        why: "<i>Der Rollstuhl steht neben dem Bett.</i> <i>stehen</i> descrive la posizione: <i>neben</i> con il dativo."
      },
      {
        q: "Traduci: «La metto sulla sedia a rotelle.»",
        why: "<i>Ich setze Sie in den Rollstuhl.</i> In tedesco nella sedia a rotelle ci si siede «dentro», con <i>in</i>, e c'è un movimento: accusativo, <i>in den</i>."
      },
      {
        q: "Il medico ha scritto «Dekubitus». Completa per il paziente: «Wir lagern Sie um, damit kein ___ entsteht.»",
        hint: "Druck + Geschwür",
        why: "<b>Druckgeschwür</b>, neutro come <i>das Geschwür</i>. Molti pazienti dicono anche <i>sich wundliegen</i>."
      },
      {
        q: "Il paziente vuole alzarsi.",
        setting: "Aiuti il signor Brandt nella sua prima mobilizzazione.",
        lines: [
          { tr: "Oggi vorrei alzarmi." },
          { tr: "Rispondi che prima lo mettete seduto sul bordo del letto.", answerTr: "Bene. Prima La mettiamo seduto sul bordo del letto." },
          { tr: "Mi gira un po' la testa." },
          { tr: "Rispondi che allora per adesso resta seduto sul bordo del letto.", answerTr: "Allora per adesso resti seduto sul bordo del letto." },
          { tr: "Dov'è il mio deambulatore?" },
          { tr: "Rispondi che è accanto al letto.", answerTr: "È accanto al letto." }
        ]
      },
      {
        tr: "La sedia a rotelle è accanto al letto. Oggi, più tardi, vuole andare sulla sedia a rotelle?",
        why: "In <i>Rollstuhl</i> la <b>st</b> all'inizio di <i>Stuhl</i> si legge [ʃt], anche dentro il composto; in <i>steht</i> la <b>h</b> allunga la <b>e</b>; in <i>neben</i> la prima <b>e</b> è lunga."
      },
      {
        tr: "Adesso La metto seduto sul bordo del letto.",
        why: "In <i>setze</i> la <b>s</b> iniziale è sonora [z] e la <b>tz</b> è [ts]; in <i>jetzt</i> la <b>j</b> si legge [j]; in <i>Bettkante</i> l'accento cade su <b>Bett</b>."
      }
    ]
  },
  "lesson:pfl-u03-l3": {
    theme: "Pasti ed eliminazione",
    title: "Mangiare, bere, eliminare",
    objectives: [
      "offrire aiuto durante i pasti e chiedere se il paziente deglutisce bene",
      "usare i modali con il paziente: möchten, können, müssen, dürfen, sollen",
      "distinguere müssen nicht (non è necessario) da dürfen nicht (non si deve)",
      "parlare di minzione, evacuazione e incontinenza con parole rispettose"
    ],
    theory: [
      {
        h: "Domande che mettono a proprio agio",
        p: "Pasti ed eliminazione sono momenti in cui il paziente dipende dagli altri, e le parole contano. Si offre, non si impone: <em>Möchten Sie etwas trinken? Soll ich Ihnen das Fleisch klein schneiden? Darf ich Ihnen helfen?</em> Si chiede in modo semplice e adulto: <em>Müssen Sie zur Toilette? Konnten Sie Wasser lassen? Wann hatten Sie zuletzt Stuhlgang?</em> Se il paziente dice che gli va spesso di traverso (<em>Ich verschlucke mich oft</em>), lo ringrazi e lo riferisci al medico: <em>Das gebe ich an die Ärztin weiter.</em>"
      },
      {
        h: "I modali con il paziente",
        p: "Ogni modale ha il suo compito. <strong>möchten</strong> offre (<em>Möchten Sie am Tisch essen?</em>); <strong>können</strong> chiede una capacità (<em>Können Sie gut schlucken?</em>); <strong>müssen</strong> chiede un bisogno (<em>Müssen Sie zur Toilette?</em>); <strong>dürfen</strong> chiede il permesso (<em>Darf ich Ihnen helfen?</em>); <strong>sollen</strong> chiede che cosa l'altro vuole che tu faccia (<em>Soll ich das Fenster öffnen?</em>). Nella domanda sì/no il modale apre la frase e l'infinito va in fondo. <em>wollen</em> è corretto, ma rivolto al paziente suona brusco: meglio <em>möchten</em>."
      },
      {
        contrast: "I termini tecnici di questa lezione per chi parla italiano sono trasparenti: <em>Dysphagie</em> è la disfagia, <em>Miktion</em> la minzione, <em>Defäkation</em> la defecazione, <em>Inkontinenz</em> l'incontinenza. In tedesco restano parole da consegna e da documentazione. Con il paziente si dice <em>Schluckstörung</em> o <em>sich verschlucken</em>, <em>Wasser lassen</em>, <em>Stuhlgang</em>. Per l'incontinenza urinaria molti pazienti usano <em>Blasenschwäche</em>, che però indica solo la vescica: per le feci non c'è un equivalente gentile, e si chiede con una frase semplice. Evita le parole infantili che in Italia a volte si sentono in corsia («ha fatto la pipì?»): con un adulto il registro resta adulto."
      },
      {
        trap: "Il falso amico più pericoloso di questa lezione: <em>Sie müssen nicht</em> vuol dire «non è necessario», mentre «non deve» nel senso di divieto è <em>Sie dürfen nicht</em>. <em>Sie müssen sich nicht beeilen</em> rassicura; <em>Sie dürfen sich nicht beeilen</em> sembra un ordine. <em>Der Stuhl</em> è la sedia, ma in reparto vuol dire anche le feci: <em>Stuhlgang</em>, <em>Stuhlprobe</em>. E <em>die Windel</em> è il pannolino dei bambini: con un adulto si dice <em>Einlage</em> o <em>Inkontinenzeinlage</em>."
      },
      {
        tip: "Quando chiedi dell'eliminazione abbassa la voce e controlla che nessun altro ascolti: <em>Darf ich Sie kurz etwas Persönliches fragen?</em> La domanda resta la stessa, ma il paziente risponde più volentieri."
      }
    ],
    grammar: {
      title: "Un modale per ogni intenzione",
      note: "Il modale coniugato in <b>prima</b> posizione nella domanda sì/no, l'infinito <b>in fondo</b>. <b>müssen nicht</b> = non è necessario; <b>dürfen nicht</b> = è vietato.",
      table: {
        head: ["modale", "con il paziente", "a che cosa serve"],
        rows: [
          ["möchten", "Möchten Sie etwas trinken?", "offrire"],
          ["können", "Können Sie gut schlucken?", "chiedere una capacità"],
          ["müssen", "Müssen Sie zur Toilette?", "chiedere un bisogno"],
          ["dürfen", "Darf ich Ihnen beim Essen helfen?", "chiedere il permesso"],
          ["sollen", "Soll ich Ihnen das Fleisch klein schneiden?", "chiedere che cosa l'altro vuole"],
          ["müssen nicht", "Sie müssen sich nicht beeilen.", "non è necessario"]
        ]
      },
      examples: [
        { tr: "Desidera bere qualcosa?", note: "möchten: la forma più cortese per offrire" },
        { tr: "Riesce a deglutire bene?", note: "können: capacità" },
        { tr: "Ha bisogno di andare in bagno?", note: "müssen: bisogno; il verbo di movimento si può omettere" },
        { tr: "Posso aiutarLa a mangiare?", note: "dürfen: chiedere il permesso prima di intervenire" },
        { tr: "Vuole che Le tagli la carne a pezzetti?", note: "sollen: «devo...?», cioè «vuole che...?»" },
        { tr: "Non deve avere fretta.", note: "müssen nicht: non c'è bisogno, non è un divieto" }
      ]
    },
    vocab: [
      "il pasto",
      "deglutire, inghiottire",
      "andare di traverso (ich verschlucke mich: mi va di traverso)",
      "la disfagia (termine tecnico)",
      "il disturbo della deglutizione (parola per il paziente)",
      "la minzione (termine tecnico)",
      "l'urinare (Wasser lassen: urinare, parola per il paziente)",
      "la defecazione (termine tecnico)",
      "l'evacuazione, le feci (parola per il paziente)",
      "l'incontinenza (termine tecnico)",
      "l'incontinenza urinaria (parola per il paziente)",
      "l'assorbente per incontinenza"
    ],
    dialogue: [
      "Signora Keller, è arrivato il pranzo. Desidera mangiare al tavolo o a letto?",
      "Al tavolo, per favore.",
      "Vuole che Le tagli la carne a pezzetti?",
      "Sì, è gentile. Ultimamente mi va spesso di traverso.",
      "Grazie di avermelo detto. Lo riferisco alla dottoressa. Desidera bere qualcosa?",
      "Un bicchiere d'acqua, per favore. E dopo devo andare in bagno.",
      "Nessun problema. Suoni il campanello e La accompagno. Non deve avere fretta."
    ],
    culture: {
      title: "Uno sguardo tedesco: i pasti in reparto",
      text: "<p>In molti ospedali e case di riposo tedeschi la cena arriva presto, spesso tra le 17 e le 18, ed è un pasto freddo: pane, formaggio, salumi. Si chiama <i>Abendbrot</i>, letteralmente «pane della sera». Il pasto caldo è a pranzo. I pazienti scelgono spesso il menù dei giorni seguenti da una scheda, e chi ha difficoltà a deglutire può ricevere, su indicazione, consistenze diverse.</p><p>Per un paziente che arriva da un'altra cultura gli orari e il pasto freddo della sera possono essere una sorpresa: chiedere che cosa mangia volentieri fa parte dell'anamnesi, non è una cortesia in più.</p>"
    },
    exercises: [
      {
        q: "Vuoi chiedere al paziente se ha bisogno di andare in bagno. Quale frase è corretta?",
        opts: ["Sie zur Toilette müssen?", "Müssen Sie zur Toilette?", "Müssen zur Toilette Sie?"],
        why: "Nella domanda sì/no il modale <b>müssen</b> apre la frase e il soggetto <i>Sie</i> lo segue subito."
      },
      {
        tr: "Il presente di dürfen, tutte le persone.",
        why: "<i>Darf, darfst, darf, dürfen, dürft, dürfen</i>: al singolare la vocale è <b>a</b> e la prima e la terza persona non hanno desinenza, come negli altri modali."
      },
      {
        q: "Completa: «___ Sie gut schlucken?»",
        hint: "modale della capacità, Sie",
        why: "<b>Können</b>: si chiede una capacità. Il modale apre la domanda sì/no e l'infinito <i>schlucken</i> va in fondo."
      },
      {
        q: "Completa con i modali.",
        tr: "Posso aiutarLa a mangiare? Non deve avere fretta.",
        why: "Nella prima frase vanno bene <i>Darf</i>, <i>Kann</i> e <i>Soll ich</i>: tutte offrono aiuto. Nella seconda serve <i>müssen</i> con <i>nicht</i>: «non è necessario». <i>Sie dürfen sich nicht beeilen</i> sarebbe un divieto."
      },
      {
        q: "Quali frasi sono corrette?",
        opts: [
          "Möchten Sie etwas trinken?",
          "Können Sie gut schlucken?",
          "Müssen Sie zur Toilette gehen?",
          "Wollen Sie zu trinken etwas?",
          "Sie müssen nicht sich beeilen."
        ],
        why: "Il modale coniugato apre la domanda e l'infinito va in fondo. Nell'ultima il riflessivo <i>sich</i> va prima di <i>nicht</i>: <i>Sie müssen sich nicht beeilen</i>."
      },
      {
        q: "Abbina ogni termine tecnico alla parola che usa il paziente.",
        pairs: ["die Schluckstörung", "das Wasserlassen", "der Stuhlgang", "die Blasenschwäche"]
      },
      {
        q: "Scegli l'articolo determinativo giusto per ogni nome.",
        items: ["pasto", "disturbo della deglutizione", "urinare", "evacuazione", "incontinenza urinaria", "assorbente per incontinenza"]
      },
      {
        q: "Metti in ordine le parole.",
        tr: "Desidera mangiare al tavolo?",
        why: "<i>Möchten Sie am Tisch essen?</i> Il modale apre la domanda, l'infinito <i>essen</i> va in fondo; <i>am</i> è <i>an dem</i>, perché è una posizione."
      },
      {
        q: "Traduci (al paziente): «Ha bisogno di andare in bagno?»",
        why: "<i>Müssen Sie zur Toilette?</i> oppure <i>auf die Toilette</i>; il verbo <i>gehen</i> si può aggiungere o lasciare sottinteso."
      },
      {
        q: "Durante il pranzo.",
        setting: "Aiuti la signora Keller durante il pasto.",
        lines: [
          { tr: "Ho sete." },
          { tr: "Chiedi se desidera un bicchiere d'acqua.", answerTr: "Desidera un bicchiere d'acqua?" },
          { tr: "Devo anche andare in bagno, ma sono così lenta." },
          { tr: "Rispondi che non è un problema e che non deve avere fretta.", answerTr: "Nessun problema, non deve avere fretta." },
          { tr: "Quando bevo mi va spesso di traverso." },
          { tr: "Ringraziala e di' che lo riferisci alla dottoressa.", answerTr: "Grazie di avermelo detto. Lo riferisco alla dottoressa." }
        ]
      },
      {
        tr: "Un bicchiere d'acqua, per favore. E dopo devo andare in bagno.",
        why: "In <i>Toilette</i>, parola di origine francese, l'accento cade su <b>let</b> e <b>oi</b> si legge [o̯a]; in <i>Wasser</i> la <b>w</b> è [v]; in <i>danach</i> la <b>ch</b> dopo <b>a</b> è [x]."
      },
      {
        tr: "Posso aiutarLa a mangiare?",
        why: "In <i>Darf</i> la <b>r</b> dopo la vocale è appena accennata; in <i>Ihnen</i> la <b>h</b> non si legge e allunga la <b>i</b>; in <i>helfen</i> la <b>h</b> iniziale si aspira."
      }
    ]
  },
  "lesson:pfl-u03-l4": {
    theme: "Autonomia",
    title: "Da solo o con aiuto?",
    objectives: [
      "chiedere e descrivere che cosa il paziente riesce a fare da solo",
      "usare l'infinito con zu dopo versuchen, helfen, es ist wichtig, es fällt mir schwer",
      "ricordare che dopo i modali l'infinito non prende zu",
      "riconoscere Thrombose e Prophylaxe e dirli con parole del paziente"
    ],
    theory: [
      {
        h: "Fare con il paziente, non al posto suo",
        p: "Nella cura tedesca si parla di <strong>aktivierende Pflege</strong>: il paziente fa da sé tutto ciò che può, e l'infermiera aiuta dove serve. Per questo la domanda chiave è <em>Was schaffen Sie allein?</em> e l'invito è <em>Versuchen Sie bitte, das Hemd selbst anzuziehen.</em> Se il paziente chiede di fare più in fretta, si spiega il perché: <em>Es ist wichtig, möglichst viel selbst zu machen. So bleiben Sie selbstständig.</em>"
      },
      {
        h: "L'infinito con zu",
        p: "Dopo molti verbi ed espressioni l'infinito prende <strong>zu</strong> e va in fondo, di solito dopo una virgola: <em>Versuchen Sie, allein aufzustehen. Es ist wichtig, sich zu bewegen. Es fällt mir schwer, die Strümpfe anzuziehen.</em> Nei verbi separabili <em>zu</em> va <strong>tra</strong> il prefisso e il verbo: <em>aufstehen → aufzustehen</em>, <em>anziehen → anzuziehen</em>. Dopo i <strong>modali</strong> invece l'infinito non prende mai <em>zu</em>: <em>Sie können allein aufstehen</em>. <em>brauchen</em> con la negazione funziona come <em>müssen nicht</em>, ma vuole <em>zu</em>: <em>Sie brauchen sich nicht zu beeilen.</em>"
      },
      {
        contrast: "Qui il quadro dei due registri cambia: <em>Thrombose</em> è una parola che molti pazienti tedeschi conoscono e usano, come in Italia «trombosi». La parola del paziente <em>Blutgerinnsel</em> indica il coagulo, cioè il trombo, non la malattia: non sono sinonimi esatti, e in consegna si dice <em>Thrombose</em>. <em>Prophylaxe</em> è trasparente per chi parla italiano («profilassi»), mentre il paziente dice <em>Vorbeugung</em> o usa il verbo <em>vorbeugen</em>. E le calze a compressione che in documentazione sono <em>Kompressionsstrümpfe</em>, molti pazienti le chiamano <em>Thrombosestrümpfe</em>. L'infinito con <em>zu</em> corrisponde spesso all'italiano «di» o «a» davanti all'infinito: «provi a vestirsi», <em>versuchen Sie, sich anzuziehen</em>; dopo «può», «deve», «vuole» invece l'italiano non mette niente, proprio come il tedesco dopo i modali."
      },
      {
        trap: "<em>selbstständig</em> in reparto vuol dire «autonomo», ma nel mondo del lavoro <em>selbstständig sein</em> significa essere un lavoratore autonomo, con partita IVA. Il verbo <em>vorbeugen</em> ha due sensi: <em>einer Thrombose vorbeugen</em> è prevenirla, mentre <em>Beugen Sie sich bitte vor</em> vuol dire «si pieghi in avanti». E <em>der Strumpf</em> è la calza, non la calzatura: le scarpe sono <em>die Schuhe</em>."
      },
      {
        tip: "Prima di aiutare chiedi sempre <em>Was schaffen Sie allein?</em> e lascia il tempo di provare. Il tempo che spendi oggi ad aspettare è quello che il paziente guadagna in autonomia, e la frase <em>Sie brauchen sich nicht zu beeilen</em> spesso basta a fargli ritrovare un gesto."
      }
    ],
    grammar: {
      title: "zu o niente?",
      note: "Dopo un <b>modale</b> l'infinito è <b>senza zu</b>. Dopo <b>versuchen</b>, <b>helfen</b>, <b>es ist wichtig</b>, <b>es fällt mir schwer</b> e <b>nicht brauchen</b> l'infinito prende <b>zu</b>, nei separabili tra prefisso e verbo.",
      table: {
        head: ["che cosa regge l'infinito", "esempio", "zu?"],
        rows: [
          ["können, müssen, dürfen", "Sie können sich selbst waschen.", "no"],
          ["versuchen", "Versuchen Sie, sich selbst anzuziehen.", "sì"],
          ["es fällt mir schwer", "Es fällt mir schwer, allein aufzustehen.", "sì"],
          ["es ist wichtig", "Es ist wichtig, sich regelmäßig zu bewegen.", "sì"],
          ["nicht brauchen", "Sie brauchen sich nicht zu beeilen.", "sì"]
        ]
      },
      examples: [
        { tr: "Provi a vestirsi da solo, per favore.", note: "anziehen è separabile: anzuziehen" },
        { tr: "Mi è difficile alzarmi da solo.", note: "es fällt mir schwer + zu" },
        { tr: "La aiuto a mettere le calze a compressione.", note: "helfen + dativo + zu" },
        { tr: "È importante muoversi regolarmente.", note: "il riflessivo sich resta prima di zu" },
        { tr: "I denti può lavarseli da sola.", note: "dopo il modale können: nessun zu" },
        { tr: "Non deve avere fretta.", note: "nicht brauchen + zu = müssen nicht" }
      ]
    },
    vocab: [
      "autonomo, da solo",
      "l'autonomia",
      "l'aiuto",
      "il sostegno, l'aiuto",
      "provare, tentare",
      "farcela, riuscire",
      "alzarsi",
      "la trombosi",
      "il coagulo di sangue, il trombo (parola per il paziente)",
      "la profilassi (termine tecnico)",
      "la prevenzione (parola per il paziente)",
      "la calza a compressione, la calza elastica"
    ],
    dialogue: [
      "Signor Brandt, che cosa riesce già a fare da solo oggi?",
      "A lavarmi ci riesco da solo. Ma mi è difficile mettere le calze.",
      "Con quelle La aiuto volentieri. La camicia provi a mettersela da solo, per favore.",
      "Perché non lo fa Lei per me? Si fa prima.",
      "È importante fare da sé il più possibile. Così resta autonomo.",
      "E va bene. E oggi devo di nuovo camminare?",
      "Sì, andiamo insieme fino alla finestra. Il movimento è una buona prevenzione contro la trombosi."
    ],
    culture: {
      title: "Uno sguardo tedesco: aktivierende Pflege",
      text: "<p>L'idea che l'assistenza debba conservare e allenare le capacità del paziente, invece di sostituirle, è centrale nella formazione infermieristica tedesca e ha un nome: <i>aktivierende Pflege</i>. In pratica significa lasciare al paziente il pettine, la manopola, il tempo per abbottonarsi la camicia, anche quando farlo al suo posto sarebbe più rapido.</p><p>Nei documenti troverai spesso la parola <i>Ressourcen</i>: sono le capacità che il paziente ha ancora e che il piano di cura vuole conservare. Ne parlerai di nuovo nell'unità sulla consegna e sul rapporto di cura.</p>"
    },
    exercises: [
      {
        q: "Vuoi dire al paziente: «Provi a vestirsi da solo». Quale frase è corretta?",
        opts: [
          "Versuchen Sie, sich selbst anziehen.",
          "Versuchen Sie, sich selbst anzuziehen.",
          "Versuchen Sie, sich selbst zu anziehen."
        ],
        why: "Dopo <i>versuchen</i> l'infinito prende <b>zu</b>, e nei verbi separabili <i>zu</i> va tra prefisso e verbo: <b>anzuziehen</b>, in una parola."
      },
      {
        q: "Completa: «Es fällt mir schwer, allein ___.»",
        hint: "aufstehen con zu",
        why: "<b>aufzustehen</b>: <i>aufstehen</i> è separabile, quindi <i>zu</i> entra tra <i>auf</i> e <i>stehen</i>."
      },
      {
        q: "Completa: nella prima frase c'è un modale, nella seconda no.",
        tr: "Lei può lavarsi da sola. Provi, per favore, anche a vestirsi da sola.",
        why: "<i>Sie können sich selbst waschen</i>: dopo il modale <i>können</i> l'infinito è senza <i>zu</i>. <i>Versuchen Sie bitte, sich auch selbst anzuziehen</i>: dopo <i>versuchen</i> serve <i>zu</i>."
      },
      {
        q: "Quali frasi sono corrette?",
        opts: [
          "Ich versuche, allein zu gehen.",
          "Ich kann allein zu gehen.",
          "Es ist wichtig, sich zu bewegen.",
          "Sie müssen nicht sofort aufzustehen.",
          "Ich helfe Ihnen, aufzustehen."
        ],
        why: "<i>versuchen</i>, <i>es ist wichtig</i> e <i>helfen</i> vogliono l'infinito con <i>zu</i>. Dopo i modali <i>können</i> e <i>müssen</i> l'infinito è senza <i>zu</i>: <i>Ich kann allein gehen</i>, <i>Sie müssen nicht sofort aufstehen</i>."
      },
      {
        q: "Abbina ogni termine tecnico alla parola che usa il paziente.",
        pairs: ["der Gefäßverschluss durch ein Blutgerinnsel", "die Vorbeugung", "das Druckgeschwür", "die Gelenkversteifung"]
      },
      {
        q: "Scegli l'articolo determinativo giusto per ogni nome.",
        items: ["trombosi", "coagulo di sangue", "profilassi", "prevenzione", "calza a compressione", "autonomia"]
      },
      {
        q: "Metti in ordine le parole.",
        tr: "È importante muoversi regolarmente.",
        why: "<i>Es ist wichtig, sich regelmäßig zu bewegen.</i> Dopo la virgola l'infinito con <i>zu</i> va in fondo; <i>sich</i> e l'avverbio stanno prima."
      },
      {
        q: "Traduci (lo dice il paziente): «Ce la faccio da solo.»",
        why: "<i>Das schaffe ich allein</i> oppure <i>Ich schaffe das allein</i>. <i>schaffen</i> è il verbo tipico per «farcela»; <i>alleine</i> è la variante parlata."
      },
      {
        tr: "Il presente di können, tutte le persone.",
        why: "<i>Kann, kannst, kann, können, könnt, können</i>: al singolare la vocale è <b>a</b>, senza Umlaut, e la prima e la terza persona non hanno desinenza."
      },
      {
        q: "Il paziente vuole fare in fretta.",
        setting: "Il signor Brandt vorrebbe che tu lo vestissi.",
        lines: [
          { tr: "Non può semplicemente vestirmi Lei? Si fa prima." },
          { tr: "Rispondi che lo aiuti volentieri, ma che prima provi a mettersi la camicia da solo.", answerTr: "La aiuto volentieri, ma prima provi a mettersi la camicia da solo." },
          { tr: "Ma le calze non ci riesco." },
          { tr: "Rispondi che non è un problema e che con quelle lo aiuti tu.", answerTr: "Nessun problema, con quelle La aiuto io." },
          { tr: "Oggi devo di nuovo camminare?" },
          { tr: "Rispondi di sì: è importante muoversi ogni giorno.", answerTr: "Sì, è importante muoversi ogni giorno." }
        ]
      },
      {
        tr: "È importante fare da sé il più possibile. Così resta autonomo.",
        why: "In <i>wichtig</i> la <b>ch</b> e la <b>g</b> finale si leggono entrambe [ç]; in <i>möglichst</i> la <b>ö</b> è lunga; in <i>selbstständig</i> la <b>st</b> di <i>ständig</i> è [ʃt]."
      },
      {
        tr: "Provi a vestirsi da solo, per favore.",
        why: "In <i>Versuchen</i> la <b>v</b> si legge [f] e l'accento cade su <b>su</b>; in <i>anzuziehen</i> le due <b>z</b> sono [ts] e la <b>ie</b> è lunga, con la <b>h</b> muta."
      }
    ]
  },
  "lesson:pfl-u03-test": {
    theme: "Verifica",
    title: "Test: Cure di base e mobilizzazione",
    objectives: [
      "verificare i riflessivi dell'igiene, wohin? e wo? con le preposizioni, i modali con il paziente e le coppie Fachsprache / Laiensprache"
    ],
    theory: [
      {
        p: "Undici domande sull'intera unità. Si supera con il 70%. Le situazioni cliniche sono esempi didattici: come e con quali ausili si assiste un paziente lo decidono la valutazione infermieristica e il protocollo della struttura."
      }
    ],
    exercises: [
      {
        q: "Il paziente è seduto sul bordo del letto. Come lo descrivi?",
        opts: ["Er sitzt an die Bettkante.", "Er sitzt an der Bettkante.", "Er setzt an der Bettkante."],
        why: "<i>sitzen</i> descrive una posizione (<i>wo?</i>), quindi <i>an</i> regge il dativo: <b>an der</b> Bettkante."
      },
      {
        q: "Completa: «Ich wasche ___ die Hände.»",
        hint: "ich, con un oggetto",
        why: "<b>mir</b>: c'è un oggetto, <i>die Hände</i>, quindi il riflessivo passa al dativo."
      },
      {
        q: "Completa: «Ich stelle den Rollator neben ___ Bett.»",
        hint: "wohin? das Bett all'accusativo",
        why: "<b>das</b>: <i>stellen</i> indica un movimento verso una meta, quindi <i>neben</i> regge l'accusativo."
      },
      {
        tr: "Il presente di sich anziehen, tutte le persone.",
        why: "<i>Ziehe mich an, ziehst dich an, zieht sich an, ziehen uns an, zieht euch an, ziehen sich an</i>: il riflessivo segue il verbo e il prefisso <i>an</i> va in fondo."
      },
      {
        q: "Abbina ogni termine tecnico alla parola che usa il paziente.",
        pairs: ["die Schluckstörung", "die Blasenschwäche", "das Druckgeschwür", "die Vorbeugung"]
      },
      {
        q: "Quali frasi sono corrette con un paziente?",
        opts: [
          "Sie müssen sich nicht beeilen.",
          "Wir legen Sie auf der Seite.",
          "Können Sie gut schlucken?",
          "Es fällt mir schwer, allein aufzustehen.",
          "Ich kann allein aufzustehen."
        ],
        why: "<i>legen</i> indica un movimento e vuole l'accusativo: <i>auf die Seite</i>. Dopo il modale <i>können</i> l'infinito è senza <i>zu</i>: <i>Ich kann allein aufstehen</i>."
      },
      {
        q: "Completa la frase.",
        tr: "Adesso La giriamo sul fianco. È comodo?",
        why: "<i>Wir legen Sie jetzt auf die Seite</i>: movimento, accusativo. <i>Liegen Sie bequem?</i>: domanda sì/no sulla posizione, con il verbo <i>liegen</i> in prima posizione."
      },
      {
        q: "Metti in ordine le parole.",
        tr: "Posso aiutarLa a mangiare?",
        why: "<i>Darf ich Ihnen beim Essen helfen?</i> Il modale apre la domanda, <i>helfen</i> in fondo, la persona aiutata al dativo, <i>Ihnen</i>."
      },
      {
        q: "Scegli l'articolo determinativo giusto per ogni nome.",
        items: ["manopola per lavarsi", "bordo del letto", "evacuazione", "ulcera da pressione", "coagulo di sangue", "igiene intima"]
      },
      {
        tr: "La faccia e le braccia se le lava da sola. Dopo La mettiamo seduta sul bordo del letto.",
        why: "In <i>Gesicht</i> la <b>ch</b> è [ç]; in <i>Arme</i> la <b>r</b> è appena accennata; in <i>Bettkante</i> l'accento cade su <b>Bett</b>."
      },
      {
        tr: "Ha bisogno di andare in bagno?",
        why: "In <i>Müssen</i> la <b>ü</b> è breve e arrotondata; in <i>zur</i> la <b>z</b> è [ts]; in <i>Toilette</i> l'accento cade su <b>let</b>."
      }
    ]
  }
});
