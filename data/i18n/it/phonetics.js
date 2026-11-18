/* ============================================================
   Coppie minime: testi in italiano.

   Le note contrastive sono scritte per un italofono, non tradotte:
   l'italiano non distingue vocali lunghe e brevi e usa la doppia
   consonante per allungare la consonante, mentre in tedesco la doppia
   scritta segnala una vocale breve.
   ============================================================ */
LINGUAI.addStrings("it", {

  "ph:ph-lang-kurz": {
    title: "Vocale lunga e vocale breve",
    note: "In tedesco la lunghezza della vocale cambia la parola: le vocali lunghe durano più delle brevi. In molte coppie cambia anche il timbro (la lunga è più tesa e chiusa), ma non in tutte: in Staat e Stadt cambia soprattutto la durata. Nella scrittura aiuta una regola: dopo una vocale breve di solito trovi due consonanti (Bett, Mitte, offen).",
    contrast: "In italiano la doppia consonante allunga la CONSONANTE: in nonno la n è più lunga che in nono. In tedesco la doppia lettera non allunga niente: Mitte non si dice «mit-te», la t resta breve, e a diventare breve è la vocale prima. L'errore tipico è proprio leggere Bett e Mitte con la consonante lunga, e dire Miete e Beet con la vocale troppo corta. Ascolta la vocale, non la consonante.",
    pairs: [
      { glossA: "lo Stato", glossB: "la città" },
      { glossA: "offrire", glossB: "chiedere (per favore)" },
      { glossA: "la grotta", glossB: "l'inferno" },
      { glossA: "l'affitto", glossB: "il centro, la metà" },
      { glossA: "il forno, la stufa", glossB: "aperto" },
      { glossA: "l'aiuola", glossB: "il letto" }
    ]
  },

  "ph:ph-ue-i": {
    title: "ü e i",
    note: "La ü tedesca è una vocale anteriore arrotondata: la lingua sta dove sta per la i, le labbra si arrotondano come per la u. In ogni coppia cambia soltanto la forma delle labbra; la durata resta la stessa: brevi in Kissen e küssen, Kiste e Küste, lunghe in vier e für, spielen e spülen, Ziege e Züge, liegen e lügen.",
    contrast: "L'italiano non ha vocali arrotondate anteriori, quindi la ü tende a diventare una i (e küssen suona come Kissen) oppure una u. Prova così: di' una i lunga, tieni ferma la lingua e arrotonda le labbra come per dire u. Se la lingua scivola indietro, esce una u, ed è l'altro errore. Nell'ascolto, la ü suona più cupa della i.",
    pairs: [
      { glossA: "il cuscino", glossB: "baciare" },
      { glossA: "la cassa", glossB: "la costa" },
      { glossA: "quattro", glossB: "per" },
      { glossA: "giocare", glossB: "risciacquare, lavare i piatti" },
      { glossA: "la capra", glossB: "i treni" },
      { glossA: "essere disteso, trovarsi", glossB: "mentire" }
    ]
  },

  "ph:ph-oe-e": {
    title: "ö ed e",
    note: "La ö è la sorella arrotondata della e: la lingua sta come per la e, le labbra si arrotondano come per la o. Può essere lunga e chiusa (lesen e lösen, Sehne e Söhne, Hefe e Höfe) oppure breve e più aperta (kennen e können, helle e Hölle). In ogni coppia la durata non cambia: cambiano solo le labbra.",
    contrast: "Anche la ö manca in italiano, e la sostituzione più comune è una e: können finisce per suonare come kennen, Söhne come Sehne. Di' una e, tieni ferma la lingua e arrotonda le labbra come per la o. Non trasformarla in una o: la lingua resta avanti.",
    pairs: [
      { glossA: "conoscere", glossB: "potere, saper fare" },
      { glossA: "leggere", glossB: "risolvere, sciogliere" },
      { glossA: "il tendine", glossB: "i figli" },
      { glossA: "il lievito", glossB: "i cortili" },
      { glossA: "chiara, luminosa (da hell)", glossB: "l'inferno" }
    ]
  },

  "ph:ph-s-z": {
    title: "s e z all'inizio di parola",
    note: "Nel tedesco di Germania la s all'inizio di parola davanti a vocale è sonora [z], con la vibrazione delle corde vocali; la z si pronuncia sempre [ts]. Quindi Saal comincia con un ronzio e Zahl con una t seguita da s. In Austria, in Svizzera e nel sud della Germania la s iniziale è spesso sorda: le registrazioni del corso seguono la pronuncia del nord.",
    contrast: "In italiano la s iniziale davanti a vocale è sorda (sole, sale): leggere Saal come «sal» non confonde la coppia, ma non è la pronuncia standard. Il suono giusto è la s di «sbaglio» o di «smettere», dove in italiano diventa sonora da sola. Il rischio vero è la z: in italiano può essere [ts] (zio) o [dz] (zero), e una z sonora avvicina Zahl a Saal. In tedesco la z è sempre sorda, come in «pizza».",
    pairs: [
      { glossA: "da (tempo: seit gestern, da ieri)", glossB: "il tempo" },
      { glossA: "le corde", glossB: "la riga" },
      { glossA: "la sala, il salone", glossB: "il numero" },
      { glossA: "il senso", glossB: "lo stagno (metallo)" }
    ]
  }

});
