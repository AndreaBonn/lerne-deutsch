# Esame Pflege (pfl-sim-1, stile telc B1·B2 Pflege, non ufficiale) - revisione umana

ESITO: in attesa di revisione infermieristica (fase 7); conforme() vuoto, gate automatici verdi.
REVISORE: in attesa

## Da verificare con l'infermiera

- Realismo delle situazioni di Hören (messaggi telefonici, visita, consegna, riunione d'équipe) e dei testi di Lesen (e-mail, Pflegeplanung, foglietto, circolare).
- Il farmaco inventato «Tarvelin»: controllare che non coincida con un marchio reale.
- Moduli di Schreiben (Anamnesebogen e Biografiebogen): campi verosimili per un reparto tedesco; limiti di parole 100-150 scelti dal kurs (il formato telc non li fissa).
- Temi di Sprechen (Schichtarbeit, igiene, turno di notte o simili): adatti alla discussione d'esame.
- Somiglianza con materiali telc: tutto è originale; il secondo giudice è stato interrogato anche su questo (review di data/core/cils.js).

## Secondo giudice (review_lot su data/core/cils.js): esito

- Corretti: la domanda su «Herr Brenner» (era il padre, ora «Der Sohn ...»); la parlante del dialogo con Herr Kaya ora si presenta come Stationsärztin.
- Respinto: Sprachbausteine T1, lacuna 1, «denn» come alternativa a «weil». Dopo la lacuna il verbo è in fondo («... sie Schmerzen im linken Bein hatte»), quindi «denn», che vuole il verbo in seconda posizione, è sbagliato e «weil» resta univoco.

## Secondo giudice, secondo giro (con pfl-sim-2)

- pfl-sim-1, Hören T2, item 1: «Frau Ostermann hatte in der Nacht Fieber» era ambiguo (il dialogo dice solo che la febbre non c'era più alle sei). Ora l'affermazione scritta si riferisce alla misurazione: «Bei der Messung um sechs Uhr hatte Frau Ostermann Fieber.» (chiave invariata: falsch). Dialogo non toccato.
- pfl-sim-1, Hören T2, item 10: «Wann soll Herr Brenner seinen Vater besuchen?» diventa «Wann soll der Sohn seinen Vater besuchen?». Herr Brenner è il padre; il primo giro aveva corretto la domanda gemella dell'item 5 ma non questa.
- pfl-sim-2, Hören T1, messaggio 1: «Wenn es schneller gehen muss, ...» contraddiceva la cronologia (ritiro da domani alle 10, consegna domani pomeriggio). Ora: «Wenn Sie die Streifen nicht selbst abholen können, bringt unser Bote sie morgen Nachmittag auch vorbei.» Testo parlato: nagranie rigenerato.
- pfl-sim-2, Lesen T3, item 3: l'avviso non limita le visite ai familiari. Opzione corretta ora: «nur Besucher von schwer kranken oder sterbenden Bewohnern nach telefonischer Anmeldung» (chiave invariata: b).
- pfl-sim-2, Hören T3, item 2: «bis zum ersten des Monats» diventa «bis zum Ersten des Monats» (ordinale sostantivato).
- Gemelli cercati nelle due simulazioni: nomi propri nelle domande assenti dai testi, ordinali sostantivati minuscoli dopo zum/am/vom/bis zum. Nessuno trovato.
- Fuori scope: il finding su CILS[0] (simulazione Goethe B1, Lesen T4, «Ist Petra für Sonntagsöffnung?» senza articolo) non riguarda l'esame Pflege e non è stato toccato in questo giro.
