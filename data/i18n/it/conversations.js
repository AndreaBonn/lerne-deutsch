/* ============================================================
   Learner-language text (it) for data/core/conversations.js
   Keys point at ids in the neutral layer; arrays merge by index,
   so their length has to match core.
   Checked by scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("it", {
  "conv:cafe-bestellen": {
    title: "Al caffè",
    setting: "Sabato mattina, un caffè a Berlino. Ordini da bere e, in base a ciò che scegli, il conto cambia.",
    closing: "Il conto era giusto: tre euro senza torta, sei con la torta. Una scelta si vede alla fine.",
    turns: [
      { tr: "Buongiorno! Che cosa desidera da bere?" },
      { task: "Scegli che cosa ordinare da bere.", opts: [
        { tr: "Un caffè, per favore." },
        { tr: "Un tè, per favore." }
      ] },
      { tr: "Un caffè, volentieri." },
      { tr: "Un tè, volentieri." },
      { tr: "E come si chiama, per favore?" },
      { task: "Di' che ti chiami Anna.", tr: "Mi chiamo Anna." },
      { tr: "Grazie. Desidera anche un pezzo di torta?" },
      { task: "Decidi se vuoi la torta.", opts: [
        { tr: "Sì, un pezzo di torta di mele, per favore." },
        { tr: "No, grazie." }
      ] },
      { tr: "Volentieri. La torta è freschissima. Fanno sei euro." },
      { tr: "Bene. Fanno tre euro." },
      { task: "Dai i soldi alla cameriera.", tr: "Ecco, prego." },
      { tr: "Grazie mille! Arrivederci." },
      { task: "Saluta e vai via.", tr: "Arrivederci!" }
    ]
  },
  "conv:sich-vorstellen": {
    title: "Il primo giorno di corso",
    setting: "Un corso di tedesco alla Volkshochschule. Prima della lezione qualcuno si siede accanto a te.",
    closing: "Fra compagni di corso ci si dà del du fin dalla prima frase. E per dire il mestiere di solito non si usa l'articolo: «Ich bin Lehrerin». L'articolo torna con un aggettivo: «Ich bin eine gute Lehrerin».",
    turns: [
      { tr: "Ciao! È libero questo posto?" },
      { task: "Rispondi di sì e invitalo a sedersi.", tr: "Sì, certo! Siediti." },
      { tr: "Grazie. Io sono Jonas. E tu come ti chiami?" },
      { task: "Di' come ti chiami (Anna).", tr: "Mi chiamo Anna." },
      { tr: "Piacere! Di dove sei?" },
      { task: "Di' che vieni dall'Italia.", tr: "Vengo dall'Italia." },
      { tr: "Ah, bello! E che lavoro fai?" },
      { task: "Di' che fai l'insegnante.", tr: "Sono insegnante." }
    ]
  },
  "conv:wochenmarkt": {
    title: "Al mercato settimanale",
    setting: "Sabato mattina, il mercato in piazza. Il venditore ti saluta da dietro le cassette di verdura.",
    closing: "Al mercato bastano tre frasi: «Ich hätte gern…», «Was kosten…?», «Was macht das zusammen?».",
    turns: [
      { tr: "Buongiorno! Che cosa desidera? Oggi i pomodori sono particolarmente buoni." },
      { task: "Chiedi un chilo di pomodori.", tr: "Un chilo di pomodori, per favore." },
      { tr: "Ecco a lei, un chilo di pomodori, sono quattro euro e cinquanta. Desidera altro? Oggi le mele sono in offerta." },
      { task: "Chiedi quanto costano le mele.", tr: "Quanto costano le mele?" },
      { tr: "Due euro al chilo. Sono belle dolci." },
      { task: "Di' che basta così e chiedi quanto fa in tutto.", tr: "Grazie, basta così. Quanto fa in tutto?" },
      { tr: "Quattro euro e cinquanta, prego. Grazie mille e buon fine settimana!" }
    ]
  },
  "conv:im-restaurant": {
    title: "Cena al ristorante",
    setting: "Sera, un ristorante tedesco, senza prenotazione. Il cameriere vi viene incontro all'ingresso.",
    closing: "Al ristorante si dà del Sie al cameriere. «Ich nehme…» è il modo più semplice per ordinare.",
    turns: [
      { tr: "Buonasera! Avete prenotato?" },
      { task: "Rispondi di no e chiedi se c'è un tavolo per due persone.", tr: "No. Avete un tavolo per due persone?" },
      { tr: "Sì, certo. Prego, accomodatevi, ecco il menù. Che cosa desiderate da bere?" },
      { task: "Ordina una bottiglia d'acqua frizzante e un bicchiere di vino rosso.", tr: "Una bottiglia d'acqua frizzante e un bicchiere di vino rosso, per favore." },
      { tr: "Molto volentieri. E come antipasto che cosa desiderate?" },
      { task: "Ordina la zuppa di gulasch e chiedi se è piccante.", tr: "Prendo la zuppa di gulasch. È piccante?" },
      { tr: "Solo un po', è condita con la paprika. Desiderate anche un piatto principale, dopo?" },
      { task: "Rifiuta gentilmente e chiedi il conto per dopo.", tr: "No, grazie. E più tardi il conto, per favore." }
    ]
  },
  "conv:fahrkarte-kaufen": {
    title: "Al centro viaggi",
    setting: "Un Reisezentrum della Deutsche Bahn in stazione. Tocca a te allo sportello.",
    closing: "Lo Sparpreis costa meno, ma ha la Zugbindung: vale solo per il treno scelto.",
    turns: [
      { tr: "Il prossimo, prego. Che cosa posso fare per lei?" },
      { task: "Chiedi un biglietto per Amburgo per oggi pomeriggio.", tr: "Un biglietto per Amburgo per oggi pomeriggio, per favore." },
      { tr: "Con l'ICE o con il Regionalexpress? L'ICE è più veloce, ma più caro." },
      { task: "Chiedi quanto costa l'ICE.", tr: "Quanto costa l'ICE?" },
      { tr: "Oggi c'è ancora una tariffa Sparpreis: ventinove euro e novantanove in seconda classe." },
      { task: "Accetta e chiedi da quale binario parte.", tr: "Bene, lo prendo. Da quale binario parte?" },
      { tr: "Dal binario sette, fra venti minuti. Con lo Sparpreis il biglietto è legato al treno: può prendere solo questo." }
    ]
  },
  "conv:beim-arzt": {
    title: "Dal medico",
    setting: "Uno studio medico. Alla reception hai mostrato la tessera della cassa malattia (Versichertenkarte), ora sei dalla dottoressa.",
    closing: "Tre frasi che servono sempre dal medico: «Ich habe…», «Seit wann?» e «Wie oft am Tag?». In tedesco seit regge il dativo: seit drei Tagen.",
    turns: [
      { tr: "Buongiorno, si accomodi. Che cos'ha?" },
      { task: "Di' che hai mal di gola e la febbre.", tr: "Ho mal di gola e la febbre." },
      { tr: "Da quando ha questi disturbi?" },
      { task: "Di' che li hai da tre giorni.", tr: "Da tre giorni." },
      { tr: "Ha allergie a qualche farmaco?" },
      { task: "Di' che non hai allergie.", tr: "No, non ho allergie." },
      { tr: "Le scrivo una ricetta per un antibiotico. Si riposi e beva molto." },
      { task: "Chiedi quante volte al giorno devi prenderlo.", tr: "Quante volte al giorno devo prenderlo?" },
      { tr: "Tre volte al giorno, dopo i pasti, per sette giorni. Guarisca presto!" }
    ]
  },
  "conv:wohnungsbesichtigung": {
    title: "La visita all'appartamento",
    setting: "La proprietaria ti mostra un bilocale. Hai dieci minuti e molte domande.",
    closing: "In Germania si chiede sempre la Kaltmiete (l'affitto senza spese), le Nebenkosten e la Kaution. Per «farsi sentire» il tedesco usa sich melden, con bei + dativo per la persona: «Ich melde mich bei Ihnen».",
    turns: [
      { tr: "Ecco, questo è il bilocale. Come vede, è luminoso e appena ristrutturato." },
      { task: "Chiedi quanto è l'affitto senza spese.", tr: "A quanto ammonta l'affitto senza spese?" },
      { tr: "Ottocento euro al mese, spese escluse." },
      { task: "Chiedi a quanto ammontano le spese accessorie.", tr: "E a quanto ammontano le spese accessorie?" },
      { tr: "Circa centoquaranta euro al mese, il riscaldamento è già compreso." },
      { task: "Chiedi se il contratto è a tempo determinato e quant'è la cauzione.", tr: "Il contratto è a tempo determinato? E quant'è la cauzione?" },
      { tr: "No, è a tempo indeterminato. La cauzione è di tre mensilità senza spese: di più la legge non lo permette." },
      { task: "Di' che ci pensi e che ti fai sentire domani.", tr: "Ci penso e mi faccio sentire domani." }
    ]
  }
,
  "conv:vorstellungsgespraech": {
    title: "Il colloquio di lavoro",
    setting: "Un'agenzia di marketing ad Amburgo. La responsabile del personale apre con la domanda classica.",
    closing: "Nel colloquio si parla in concreto. Attenzione al verbo in fondo dopo weil: «Weil mich Ihre Projekte interessieren».",
    turns: [
      { tr: "Allora, mi racconti un po' di lei." },
      { task: "Di' come ti chiami (Anna) e che hai cinque anni di esperienza nel marketing online.", tr: "Mi chiamo Anna e ho cinque anni di esperienza nel marketing online." },
      { tr: "E perché si è candidata proprio da noi?" },
      { task: "Di' che ti interessano molto i loro progetti internazionali.", tr: "Perché i vostri progetti internazionali mi interessano molto." },
      { tr: "Quale direbbe che è il suo punto debole più grande?" },
      { task: "Di' che spesso vuoi controllare tutto da sola, ma che stai imparando a delegare.", tr: "Spesso voglio controllare tutto da sola, ma sto imparando a delegare i compiti." },
      { tr: "Bene. Ha ancora domande per noi?" },
      { task: "Chiedi com'è composto il team e quali sono i prossimi passi.", tr: "Sì: com'è composto il team, e quali sono i prossimi passi?" }
    ]
  },
  "conv:buergeramt": {
    title: "All'ufficio anagrafe",
    setting: "Il Bürgeramt della tua nuova città. Ti sei appena trasferita e devi registrare la residenza (Anmeldung).",
    closing: "Per l'Anmeldung servono un documento d'identità e la Wohnungsgeberbestätigung, la conferma firmata dal locatore. La Meldebescheinigung è il certificato che ne esce.",
    turns: [
      { tr: "Numero duecentoquattordici, sportello tre, prego. Buongiorno, che cosa posso fare per lei?" },
      { task: "Di' che vuoi registrare la residenza.", tr: "Vorrei registrare la mia residenza." },
      { tr: "Ha con sé il passaporto, la conferma del locatore e il modulo di registrazione compilato?" },
      { task: "Di' che hai il passaporto e la conferma, ma non il modulo.", tr: "Il passaporto e la conferma li ho, ma il modulo no." },
      { tr: "Nessun problema, gliene do uno io. Lo compili in stampatello, per favore." },
      { task: "Chiedi quanto ci vuole per avere il certificato di registrazione anagrafica.", tr: "Quanto ci vuole prima che riceva il certificato di registrazione anagrafica?" },
      { tr: "Lo riceve subito, qui allo sportello." }
    ]
  },
  "conv:diskussion": {
    title: "Una discussione fra amici",
    setting: "Una birra dopo il lavoro. Un amico tira fuori l'argomento del lavoro da casa.",
    closing: "Per dare ragione a metà: «Teilweise gebe ich dir recht». Per dissentire con decisione: «Da bin ich überhaupt nicht deiner Meinung». E abhängen regge von + dativo: «Das hängt davon ab, wie…».",
    turns: [
      { tr: "Secondo me il lavoro da casa ha distrutto lo spirito di squadra. Tu come la vedi?" },
      { task: "Dagli ragione in parte, ma di' che ha anche ridotto lo stress del pendolarismo.", tr: "In parte ti do ragione, ma ha anche ridotto lo stress del pendolarismo." },
      { tr: "Certo, ma non credi che i giovani imparino meno se non sono in ufficio?" },
      { task: "Di' che dipende da come l'azienda organizza l'inserimento dei nuovi.", tr: "Dipende da come l'azienda organizza l'inserimento dei nuovi." },
      { tr: "Su questo hai ragione. Ma per me il modello ibrido è il peggio di entrambi i mondi." },
      { task: "Dissenti nettamente: con l'ibrido si può decidere in base al compito.", tr: "Non sono per niente d'accordo: con il modello ibrido si può decidere in base al compito." }
    ]
  },
  "conv:restaurant-entscheidungen": {
    title: "A tavola, con qualche decisione",
    setting: "Venerdì sera, una trattoria tedesca. Le tue scelte cambiano il tavolo, il piatto e alla fine il conto.",
    closing: "Il conto ricorda le tue scelte: ventiquattro euro con lo strudel, ventuno con il caffè.",
    turns: [
      { tr: "Buonasera. Avete prenotato?" },
      { task: "Di' se avete prenotato o no.", opts: [
        { tr: "Sì, a nome Weber." },
        { tr: "No, siamo in due. Avete ancora un tavolo libero?" }
      ] },
      { tr: "Benissimo. Il vostro tavolo è vicino alla finestra. Da questa parte, prego." },
      { tr: "Un tavolo per due è ancora libero, in fondo alla sala. Prego." },
      { tr: "Ecco il menù. Volete già ordinare qualcosa da bere?" },
      { task: "Ordina una bottiglia d'acqua naturale.", tr: "Una bottiglia d'acqua naturale, per favore." },
      { tr: "Acqua naturale, arriva subito. E che cosa desiderate mangiare?" },
      { task: "Scegli che cosa mangiare.", opts: [
        { tr: "Per me la cotoletta impanata, per favore." },
        { tr: "Per me la padella di verdure, per favore. Non mangio carne." }
      ] },
      { tr: "La cotoletta oggi è ottima, impanata al momento." },
      { tr: "Volentieri. Le verdure vengono dal mercato qui accanto." },
      { tr: "Desiderate un dolce per finire? Lo strudel di mele è fatto in casa." },
      { task: "Decidi se prendere il dolce.", opts: [
        { tr: "Sì, lo strudel di mele, per favore." },
        { tr: "No, grazie. Solo un caffè, per favore." }
      ] },
      { tr: "Ottima scelta, arriva subito." },
      { tr: "Un caffè, molto volentieri." },
      { tr: "Ecco il conto: piatto principale, acqua e strudel. Fanno ventiquattro euro." },
      { tr: "Ecco il conto: piatto principale, acqua e caffè. Fanno ventuno euro." },
      { task: "Chiedi se puoi pagare con la carta.", tr: "Posso pagare con la carta?" },
      { tr: "Certo, ecco il terminale. Grazie mille e buona serata!" }
    ]
  },
  "conv:zug-verpasst": {
    title: "Allo sportello, dopo un treno saltato",
    setting: "Hai un biglietto Sparpreis (tariffa scontata valida solo sul treno prenotato) per Colonia, ma il tuo ICE delle 9:20 è partito senza di te, o non è partito affatto. Vai allo sportello della Deutsche Bahn.",
    closing: "La Zugbindung dello Sparpreis cade se il treno viene soppresso, non se lo perdi tu. Verpassen è transitivo: «Ich habe den Zug verpasst».",
    turns: [
      { tr: "Buongiorno, mi dica." },
      { task: "Spiega che cosa è successo al tuo treno.", opts: [
        { tr: "Ho perso l'ICE per Colonia delle nove e venti." },
        { tr: "Il mio ICE per Colonia è stato soppresso." }
      ] },
      { tr: "Purtroppo il suo Sparpreis vale solo per il treno prenotato. Le serve un biglietto nuovo." },
      { tr: "Il prossimo ICE per Colonia parte alle undici e quaranta. Il biglietto costa trentanove euro e novantanove." },
      { tr: "Mi dispiace. Se il treno viene soppresso, può prendere anche un altro treno." },
      { tr: "Il prossimo ICE per Colonia parte alle undici e quaranta. Lei non paga niente in più." },
      { task: "Accetta il treno delle 11:40 o chiedi se c'è qualcosa prima.", opts: [
        { tr: "Bene, allora prendo il treno delle undici e quaranta." },
        { tr: "Non c'è niente prima?" }
      ] },
      { tr: "D'accordo. Parte dal binario sette." },
      { tr: "Prima c'è solo un Intercity alle dieci e un quarto, ma deve cambiare una volta." },
      { task: "Prendi l'Intercity oppure aspetta l'ICE.", opts: [
        { tr: "Non importa, prendo l'Intercity." },
        { tr: "Allora preferisco aspettare l'ICE delle undici e quaranta." }
      ] },
      { tr: "Intercity delle dieci e un quarto, binario tre." },
      { tr: "Le stampo il collegamento. Buon viaggio!" },
      { task: "Ringrazia e saluta.", tr: "Grazie mille, buona giornata!" },
      { tr: "Arrivederci." }
    ]
  },
  "conv:wohnung-ansehen": {
    title: "Una visita all'appartamento",
    setting: "Un agente immobiliare ti mostra un monolocale. Quello che dici decide se si parla di prezzo o di date.",
    closing: "Nel confronto als introduce il secondo termine, e nella frase che segue il verbo coniugato va in fondo: «kleiner, als es auf den Fotos aussah». E per dare una risposta più tardi: «Ich sage Ihnen Bescheid».",
    turns: [
      { tr: "Ecco, questo è il soggiorno. Che cosa ne pensa?" },
      { task: "Di' che cosa ne pensi.", opts: [
        { tr: "Mi piace, ma è più piccolo di come sembrava nelle foto." },
        { tr: "È molto luminoso, mi piace." }
      ] },
      { tr: "Le foto ingannano sempre un po'. Ma l'appartamento ha trentacinque metri quadri, e non si perde spazio in lunghi corridoi." },
      { tr: "Sì, le finestre danno a sud. D'inverno bisogna accendere poco il riscaldamento." },
      { tr: "Le spese accessorie sono di circa cento euro al mese, il riscaldamento è compreso." },
      { tr: "L'affitto senza spese è di seicentocinquanta euro." },
      { task: "Chiedi se si può trattare sull'affitto o da quando è libero.", opts: [
        { tr: "Si può parlare dell'affitto?" },
        { tr: "Da quando è libero l'appartamento?" }
      ] },
      { tr: "Il proprietario scende a seicento euro, se firma il contratto entro questa settimana." },
      { tr: "L'appartamento è libero dal primo del mese prossimo." },
      { tr: "Dal primo del mese prossimo. L'affitto però resta di seicentocinquanta euro." },
      { task: "Decidi: lo prendi o ci pensi?", opts: [
        { tr: "Prendo l'appartamento." },
        { tr: "Ci penso e le faccio sapere." }
      ] },
      { tr: "Benissimo. Le mando il contratto d'affitto per e-mail entro domani." },
      { tr: "Ci sentiamo nei prossimi giorni." },
      { tr: "Certo, ci pensi con calma. Il mio numero ce l'ha." },
      { task: "Ringrazia e saluta.", tr: "Grazie, arrivederci." },
      { tr: "Arrivederci." }
    ]
  },
  "conv:arzt-halsschmerzen": {
    title: "Dal medico, con il mal di gola",
    setting: "Uno studio medico di base. Hai mal di gola da tre giorni e devi spiegare bene come stai.",
    closing: "In Germania il certificato di malattia arriva per via elettronica alla cassa malattia, ma il datore di lavoro va avvisato da te. In tedesco seit regge il dativo: seit drei Tagen.",
    turns: [
      { tr: "Buongiorno, si accomodi. Che cosa posso fare per lei?" },
      { task: "Di' che hai mal di gola da tre giorni, con o senza febbre.", opts: [
        { tr: "Ho mal di gola e la febbre da tre giorni." },
        { tr: "Ho mal di gola da tre giorni, ma niente febbre." }
      ] },
      { tr: "Tre giorni con la febbre. Quanto era alta?" },
      { task: "Di' che era a trentotto e mezzo.", tr: "Trentotto e mezzo." },
      { tr: "È già parecchio. Apra la bocca, per favore." },
      { tr: "Senza febbre, questa è già una buona notizia. Apra la bocca, per favore." },
      { tr: "La gola è molto arrossata. Le fa male quando deglutisce?" },
      { task: "Di' se deglutire ti fa male.", opts: [
        { tr: "Sì, deglutire mi fa molto male." },
        { tr: "No, mi gratta solo un po'." }
      ] },
      { tr: "Allora le faccio un tampone. In base al risultato decidiamo se le serve un antibiotico." },
      { tr: "Sembra un raffreddore: per ora non vedo motivo di prendere un antibiotico. Faccia gargarismi con acqua e sale e beva molte bevande calde." },
      { tr: "In ogni caso ha bisogno di riposo. Se fra tre giorni non va meglio, torni." },
      { task: "Chiedi del lavoro o dello sport.", opts: [
        { tr: "Devo restare a casa o posso andare al lavoro?" },
        { tr: "Posso fare sport?" }
      ] },
      { tr: "Le do tre giorni di malattia. Il certificato di inabilità al lavoro va in via elettronica alla sua cassa malattia, ma deve avvisare personalmente il suo datore di lavoro." },
      { tr: "Lo sport meglio di no, finché la gola è così. Passeggiare va bene." },
      { tr: "Guarisca presto!" },
      { task: "Ringrazia e saluta.", tr: "Grazie, arrivederci." },
      { tr: "Arrivederci." }
    ]
  }
});
