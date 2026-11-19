# pfl-u04 Schmerz und Notfall - revisione umana

ESITO: in attesa di revisione infermieristica (fase 7); gate automatici verdi, secondo giudice: 1 giro (vedi pfl-u04-*.json).
REVISORE: in attesa

## Da verificare con l'infermiera

- Formula con cui risponde la centrale («Notruf Feuerwehr und Rettungsdienst»); le 5 W come insegnate ai corsi.
- Expertenstandard DNQP (Schmerzmanagement, Sturzprophylaxe) e scala NRS 0-10; test FAST insegnato in Germania.
- Aggettivi del dolore: «drückend» tradotto «gravativo», «ziehend» tradotto «che tira».
- Overlay fr/pl: numeri d'emergenza nazionali (15/18/17/112, 112/999); forme polacche al femminile (l'infermiera del dialogo è donna).

## Secondo giudice: finding respinti

- it `lessons[0].dialogue.lines[6]`, virgola fra due principali: in tedesco due principali asindetiche si separano regolarmente con la virgola (Duden, regole della virgola); la frase resta.
- en `lessons[1].exercises[8/9].why`, «sp in ansprechbar è [sp]»: *an-sprech-bar*, sp sta all'inizio del tema dopo il prefisso, quindi [ʃp] come in *aussprechen*.
- pl `lessons[1].exercises[9].why`, [ç] diverso dal polacco «ch» in «chichot»: davanti a *i* il polacco palatalizza *ch* ([xʲ]~[ç]); il paragone è un'approssimazione didattica accettabile.
- pl `test.exercises[0].why`, «ein segnala il maschile»: *ein* vale per maschile e neutro al nominativo, quindi da solo non mostra il genere; la spiegazione è corretta.
- pl `lessons[3].theory[2].contrast`, ausiliare storico in «zrobiłem»: descrizione sincronica corretta per l'apprendente (nessun verbo ausiliare separato); l'etimologia non serve alla lezione.
- pl `lessons[2].theory[2].contrast`, «Sie sempre dopo il verbo» troppo assoluto: nell'imperativo di cortesia *Sie* segue sempre il verbo, anche dopo *bitte* (*Bitte rufen Sie*); il caso dell'ellissi in coordinazione non è pertinente.
- pl `lessons[2].grammar.note` (e analoghe in tutte le lingue), «infinito + Sie»: semplificazione standard dei manuali, la forma coincide con l'infinito per tutti i verbi dell'unità (l'unica eccezione, *Seien Sie*, non compare).
- fr `lessons[2].grammar.note`, regola e→i troppo generale: la nota parla solo di *e*, non di *a*→*ä* (*fahr*), quindi non è falsa; *lies* (e→ie) rientra nello stesso cambio vocalico.
- fr `lessons[0].exercises[5]`, cloze con altri aggettivi possibili: la traduzione mostrata («douleur sourde... très forte») fissa *dumpfen* e *stark*.
