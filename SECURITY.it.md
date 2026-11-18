[English](./SECURITY.md) | **Italiano**

# Politica di sicurezza

## Versioni supportate

Il progetto non ha tag di rilascio. Le correzioni di sicurezza vengono applicate all'ultimo commit su `main`, che è ciò che GitHub Pages pubblica su <https://andreabonn.github.io/lerne-deutsch/>.

## Segnalare una vulnerabilità

Segnala tramite [GitHub Security Advisories](https://github.com/AndreaBonn/lerne-deutsch/security/advisories/new). Non aprire una issue pubblica per una vulnerabilità.

Includi:

- una descrizione della vulnerabilità
- i passi per riprodurla, con browser e versione
- il comportamento atteso e quello osservato
- cosa potrebbe ottenere un attaccante

Tempi di risposta:

- presa in carico entro 72 ore
- correzione delle vulnerabilità critiche entro 30 giorni
- divulgazione pubblica coordinata dopo il rilascio della correzione

## Che cos'è l'applicazione

Un sito statico senza backend, senza account e senza memorizzazione lato server. Tutto ciò che fa chi studia resta nel suo browser (`localStorage`). La superficie d'attacco è quindi la pagina stessa, i file di dati che carica, le chiamate facoltative a un fornitore di modelli e i file che chi studia importa.

## Misure di sicurezza implementate

- **Content Security Policy**: `default-src 'self'`, `script-src 'self'` (nessuno script inline o di terze parti), `object-src 'none'`, `base-uri 'none'`, `form-action 'none'`; le connessioni in uscita sono limitate ai quattro fornitori di modelli (`index.html:27`). Un test nel browser verifica che la policy sia attiva (`tests/dom/csp.spec.js`).
- **Nessuna risorsa di terze parti a runtime**: i font sono ospitati in locale e `font-src 'self'` blocca qualsiasi font esterno (`index.html:27`, `assets/fonts/`).
- **Escape HTML del testo dinamico**: il testo che non proviene dai dati del corso viene sottoposto a escape prima di essere inserito nella pagina (`assets/js/text.js:127`).
- **Chiavi API escluse dal backup dei progressi**: le chiavi API dei modelli stanno in una voce di memorizzazione separata, `linguai.llm.v1` (`assets/js/llm-keys.js:30`), che l'esportazione del backup non legge (`assets/js/store.js:391`).
- **Consenso prima che la voce lasci il dispositivo**: il riconoscimento vocale non parte senza il consenso registrato di chi studia (`assets/js/audio.js:240`), e il consenso si può ritirare nelle Impostazioni (`assets/js/consent.js:45`).
- **Consenso prima che le risposte vadano a un modello**: il controllo con un modello è spento senza un consenso a parte (`assets/js/consent.js:93`) e non gira mai da `file://` (`assets/js/llm.js:69`).
- **Un modello non può bocciare una risposta giusta**: al modello vengono sottoposte solo risposte già rifiutate in locale, e il suo verdetto può solo trasformare un rifiuto in un'accettazione (`assets/js/llm-rules.js:173`).
- **Tetto alle chiamate a pagamento**: al massimo 60 chiamate al modello per sessione per il controllo delle risposte (`assets/js/llm.js:41`) e un budget separato di 40 per la conversazione libera (`assets/js/llm.js:49`), così un ciclo o un tentativo ripetuto non fa crescere la spesa di chi studia.
- **Validazione dell'importazione**: un backup importato viene rifiutato sopra gli 8 MB e controllato per versione dello schema e tipo dei campi prima di sostituire lo stato attuale (`assets/js/store.js:418`, `assets/js/store.js:474`).
- **Ambito del service worker**: il service worker ignora ogni richiesta verso un'altra origine, quindi nella sua cache non entra nulla di terze parti (`sw.js:280`).
- **Dipendenze bloccate**: le dipendenze di sviluppo sono fissate in `package-lock.json`; l'applicazione non ne carica nessuna.

## Best practice per gli utenti

- Le chiavi API sono salvate in chiaro nel `localStorage` del browser. Chi ha accesso al tuo profilo del browser può leggerle. Usa una chiave con un limite di spesa e, su un computer condiviso, usa "Elimina tutte le chiavi" nelle Impostazioni.
- Un file di backup contiene i tuoi progressi (lezioni, carte, statistiche, testi scritti). Conservalo come qualsiasi file personale.
- Cancellare i dati del sito nel browser elimina i progressi per sempre. Esporta prima un backup.

## Fuori ambito

- Self-XSS (attacchi che richiedono alla vittima di incollare codice nella propria console)
- Lettura del `localStorage` con accesso fisico o da amministratore al dispositivo
- Vulnerabilità nelle API dei fornitori di modelli (da segnalare al fornitore)
- Vulnerabilità già pubbliche nelle dipendenze di sviluppo di terze parti (da segnalare a monte)
- Ingegneria sociale

---

[Torna al README](./README.it.md)
