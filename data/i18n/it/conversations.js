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
});
