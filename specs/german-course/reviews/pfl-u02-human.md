# pfl-u02 Vitalzeichen und Messwerte - revisione umana

ESITO: in attesa di revisione infermieristica (fase 7); gate automatici verdi, secondo giudice: 1 giro (vedi pfl-u02-*.json).
REVISORE: in attesa

## Da verificare con l'infermiera

- «der Sauerstoffwert» come parola del paziente per la saturazione.
- Hyperthermie distinta da Fieber nel {trap}; «tiefer Blutdruck» presentato come uso svizzero.
- «Weber, Innere.» come risposta al telefono di reparto.
- Uso misto di mg/dl e mmol/l in Germania; plurali «die Grade», «die Vitalzeichen».
- Overlay: RR usato anche nella documentazione polacca; glicemia in mg/dl in Polonia, g/l in Francia; «hyperthermie» come «fièvre» nelle consegne francesi; RR attribuito a Riva-Rocci (Torino, fine Ottocento).

## Secondo giudice: finding respinti

- en #1 `lessons[0].theory[2].contrast` («German always says Sie»): il paragrafo tratta solo l'imperativo di cortesia della lezione; du/ihr non sono in gioco.
- en #2, it #1 `lessons[0].exercises[10].why` (d di «während»): la d è finale di parola, [ˈvɛːʁənt], quindi suona [t]; il giudice sbaglia.
- en #3, es #0 `lessons[2].exercises[9].why` (ch di «Tachykardie» = [k]): Duden dà [taxykarˈdiː], ch = [x]; la spiegazione è corretta.
- en #4, es #2, fr #2, it #3 `lessons[2].grammar.table.rows[0]` (Tachykardie/Herzrasen non equivalenti): la tabella mappa registri, non diagnosi; Duden glossa sia «Tachykardie» sia «Herzrasen» con «Herzjagen», quindi «Herzrasen» è il corrispondente di Laiensprache. Da confermare con l'infermiera.
- es #3, it #4, pl #0 `lessons[2].exercises[1]` (Herzrasen per chiedere della tachicardia): stessa ragione; al paziente si chiede la parola che lui usa.
- it #5 `lessons[2].exercises[7]` («Ha la tachicardia?» → «Haben Sie Herzrasen»): stessa ragione; la consegna chiede esplicitamente la parola di tutti i giorni.
- en #5 `test.exercises[2]` (comparativo non vincolato): l'esercizio `fill` mostra il suggerimento «comparativo di langsam» sotto la domanda prima della risposta (`exercises-text.js`, `ex.hint`).
- en #6, fr #6 `test.exercises[6]`; fr #1, it #2 `lessons[1].exercises[3]`; fr #3, pl #6 `lessons[2].exercises[5]` (comparativo ambiguo nel cloze): il cloze mostra la traduzione (`ex.tr`) sopra le lacune, e la traduzione dice «più basso/alto»; la risposta è univoca.
- fr #5, pl #7 `lessons[3].exercises[5].a` («noch einmal gemessen» per «ricontrollato»): per un valore misurato ricontrollare è rimisurare; accettare anche «gemessen» non insegna nulla di sbagliato.
- en #8 `lessons[0].grammar.examples[0].tr` («roll up your sleeve» per «den Oberarm frei machen»): resa pragmatica naturale in un reparto americano; il trap della lezione glossa già il senso letterale «uncover».
- pl #4 `lessons[0].exercises[2].why` (prefisso «sempre in fondo»): la frase descrive la tabella di coniugazione al presente, cioè forme di frase principale; le subordinate non sono l'oggetto dell'esercizio.
