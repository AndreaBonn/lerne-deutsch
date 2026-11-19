# Moduli secondari PFL (conversazioni, chat, biblioteca) - revisione umana

ESITO: in attesa di revisione infermieristica (fase 7); gate automatici verdi (check:porting --all exit 0).
REVISORE: in attesa

## Conversazioni a bivi (data/core/conversations.js)

- `pflege-aufnahme` (B1) e `pflege-telefon-angehoerige` (B2). Ogni opzione è un ramo valido, non un distrattore: il motore sceglie l'opzione più vicina a ciò che dice lo studente.
- Da verificare: «Ich bin Lena, Ihre Pflegekraft»; «Wassertablette» come parola del paziente per un diuretico; «Medikamentenplan» (accettato anche «Medikationsplan»); «Ansprechpartnerin angegeben»; nella chiusura inglese, la violazione della Schweigepflicht come reato (§ 203 StGB, non verificato).

## Scene di chat libera (data/core/chat-scenarios.js)

- `pflege-schmerz` (B1), `pflege-angehoerige` (B2), `pflege-uebergabe` (B2): il modello interpreta paziente, familiare, collega. Nessun contenuto fisso da verificare oltre al ruolo e alla situazione di partenza.

## Biblioteca (library-pfl, vedi anche library-pfl-human.md)

- Foglietto illustrativo di un farmaco inventato (Musterolin), rapporto di turno, circolare di reparto: tutti dichiarati inventati nel testo.
