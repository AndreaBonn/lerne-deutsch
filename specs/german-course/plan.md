# german-course - Piano

## Obiettivo

A fine lavoro il repo `impara-tedesco` è un corso di tedesco de-DE A1-C2 con la stessa
struttura, le stesse funzioni e lo stesso motore dell'originale italiano, spiegato in it, en,
es, fr, pl, isolato dall'app italiana che vive sulla stessa origin GitHub Pages.

## Definition of Done

Le condizioni verificabili sono in `spec.md` § Definition of Done. In sintesi: `check:porting
--all` verde su 37 unità, `validate.mjs` verde nelle 5 lingue con la distribuzione
dell'originale, `parity.mjs` verde con riferimento it, `test:all` e coverage 99 verdi,
isolamento di storage e cache provato da test, golden file dei verbi verde, D7 provato su
`Straße`, simulatore Goethe stile B1 senza voto sulle prove produttive, zero mp3 mancanti o
orfani.

SIGNAL: `curl -sf https://andreabonn.github.io/impara-tedesco/sw.js | grep -o 'SW_VERSION = "[^"]*"'` | atteso il `SW_VERSION` del commit pubblicato, e `node scripts/check_ogtags.mjs --live` esce 0 | entro 15 minuti dal push su `main` fatto dall'utente. Il comportamento degli studenti non è osservabile per costruzione (nessuna telemetria, scelta di privacy del progetto), quindi il segnale si ferma a "la versione giusta è servita e si annuncia". Il comando diventa `npm run check:live` nel task T10.03.

## Assunzioni

- A1 [BLOCCANTE] La pubblicazione su Pages avviene la prima volta a fine F1 (corso con A1 U1-U3 e moduli secondari in forma di seme), non prima: F0 lascia un'app italiana su un URL nuovo che non va pubblicata. Se l'utente preferisce pubblicare solo a fine F4 (A1-B1 completi), il piano non cambia, cambia solo quando parte il SIGNAL.
- A2 [BLOCCANTE] D8 autorizza in modo permanente le chiamate `codex exec` del gate per lotto (circa 37 unità × 3 lotti + moduli secondari, ~150 chiamate). Senza questa autorizzazione ogni lotto si ferma ad aspettare un "vai" in chat e la stima calendario raddoppia.
- A3 Il campione umano B2-C2 è 1 lezione su 4 per unità (minimo 1), scelta da `review_lot.mjs` con seme fisso; l'esito lo scrive l'utente in `specs/german-course/reviews/<unit>-human.md`. È tempo dell'utente, fuori dalla stima.
- A4 Voci: `de-DE-KatjaNeural` (principale) e `de-DE-ConradNeural` (interlocutore), da confermare con l'ascolto di 20 frasi campione in T1.61. `STRESS_FIXES` parte vuota; l'accento tonico tedesco è più prevedibile dell'italiano, ma composti e prestiti (Hotel, Restaurant, Büro) vanno ascoltati.
- A5 D7 non include "a per ä": `schon`/`schön`, `Bar`/`Bär` sono parole diverse, quindi `Madchen` per `Mädchen` è errato, non quasi corretto. Solo le trascrizioni ae/oe/ue/ss e la minuscola valgono "quasi".
- A6 La minuscola vale "quasi" su qualunque parola che nell'attesa ha la maiuscola fuori dalla posizione iniziale (in pratica i sostantivi), senza bisogno di sapere che è un sostantivo. Il confronto resta insensibile alla maiuscola iniziale come oggi.
- A7 Il caso nell'esercizio `gender` si esercita con `opts` espliciti e item in contesto (`mit ___ Frau` → `der`): lo schema non cambia, cambiano solo default e validazione.
- A8 I nomi interni restano anche per il simulatore: file `cils*.js`, rotta `#/cils`, chiavi `cils.*`; cambia solo il testo visibile (stesso principio di D4).
- A9 L'identificativo del brand è "Deutsch lernen" (speculare a "Impara l'Italiano", nome nella lingua insegnata); la cartella del design system viene copiata con il nome originale e resta non tracciata come nell'originale. Vedi decisione aperta DA-4.
- A10 Il motore di esame legge sezioni e parti dai dati di `cils.js` (lo suggeriscono gli `id: "ascolto"/"lettura"` nel core). Se invece le sezioni CILS sono cablate nel codice, F5 cresce di 6-10h.
- A11 Passivo, Konjunktiv I come discorso indiretto e verbi con doppio ausiliare si insegnano nelle lezioni; `Verbs` non ha tempi passivi (l'originale non li aveva) e per i verbi di moto con uso transitivo usa l'ausiliare del significato intransitivo, con elenco in `verbs-data.js`.
- A12 Profile Deutsch non è consultabile come banca dati (prodotto commerciale): la progressione si costruisce su descrittori CEFR, sommari pubblici di Profile Deutsch e sui Wortlisten Goethe A1-B1 come riferimento di copertura lessicale, mai copiati come materiale d'esame. Vedi DA-5.
- A13 Dentro una fase, fra due task, `validate.mjs` e la suite DOM possono essere rossi (lo strato dati è a metà); `npm test` resta verde a ogni turno (lo impone `verify.sh`) e tutti i gate sono verdi alla chiusura di fase.
- A14 Anchor incidentale, non vincolo: la suddivisione attuale delle unità nei file `a1-01.js` … `c2-02.js` si conserva perché non costa nulla e rende il confronto con l'originale diretto; si può cambiare senza toccare R18.

## Approccio

### Disambiguazione

Approcci elencati prima di valutarli.

Transizione dal corso italiano al tedesco:
- Opzione A: cutover a livelli, i file italiani non ancora portati escono dall'albero.
- Opzione B: profilo di lingua parametrico (`target.js`) che tiene italiano e tedesco vivi insieme durante la transizione.
- Opzione C: big bang, tutto il lavoro su un ramo e un merge finale unico.

Valutazione: A rende ogni fase pubblicabile, i dati italiani restano recuperabili da
`upstream` e nessun gate deve conoscere due alfabeti insieme. B crea un'astrazione con un solo
caso d'uso reale a regime (D1: l'italiano vive nell'altro repo). C viola la richiesta di fasi
mergiabili e sposta ogni errore di design alla fine. **Raccomandata: A.**

Fonte dei contenuti tedeschi:
- Opzione A: scrittura da zero sulla progressione Profile Deutsch, con i temi delle unità originali come traccia.
- Opzione B: inversione degli strati, cioè le traduzioni tedesche della nakładka `de` attuale diventano lo strato neutro e l'italiano attuale diventa la nakładka `it`.
- Opzione C: ibrido, grammatica ed esercizi da zero, lessico tematico e idee di dialogo prese dal seme B come bozza.

Valutazione: B è rapida ma produce frasi tedesche costruite per esercitare grammatica
italiana (congiuntivo, articoli partitivi), contro D9; la cultura resta italiana. A è la più
coerente con D9. C accelera il vocabolario dei temi comuni (bar, viaggio, casa) senza
ereditare la grammatica. **Raccomandata: C**, con regola: dal seme si prende solo il
vocabolario tematico, ogni frase di esercizio e di dialogo si scrive nuova.

Plurale dei sostantivi (DA-3, decisione aperta con default):
- Opzione A: plurale dentro `it` (`der Tisch, die Tische`).
- Opzione B: campo neutro nuovo `plural` sul vocabolo.
- Opzione C: plurale solo nell'esempio `ex`.

Valutazione: A cambia chiave della flashcard e testo registrato; C non è verificabile né
esercitabile. B aggiunge un campo e una regola di validazione, lascia chiavi e audio intatti.
**Raccomandata: B** (default se l'utente non risponde).

### Forma del lavoro

1. **F0 Fondamenta**: isolamento (storage, cache, URL, nomi export) e attrezzi del porting
   (`check_porting`, `review_lot`, `prune_audio`, snapshot dei conteggi dell'originale).
   L'app è ancora il corso italiano, isolato. Non si pubblica.
2. **F1 Cutover**: contratti (curriculum, Verbs, genere/caso, plurale, D7, Lemma), motore
   morfologico tedesco, lingue di spiegazione, validatori invertiti, rebrand, A1 U1-U3 in 5
   lingue con audio, semi dei moduli secondari, test riscritti. Da qui l'app è un corso di
   tedesco piccolo ma intero: è la prima versione pubblicabile.
3. **F2-F4**: A1 U4-U10, A2, B1, un lotto per unità (core+it, gate D8, en+es, fr+pl, audio).
4. **F5 Esame in stile Goethe B1**, anticipato rispetto all'ordine suggerito: richiede solo
   contenuti fino a B1 e sostituisce il seme mostrato da F1, che è la parte meno rifinita
   dell'app pubblicata.
5. **F6-F8**: B2, C1, C2, con campione umano D8.
6. **F9 Moduli secondari completi**: letture e scrittura, biblioteca, conversazioni e chat,
   coppie minime, falsi amici, frequenza. Tre sottofasi indipendenti.
7. **F10 Chiusura**: documentazione, baseline, `check:live`.

Ogni lotto di contenuto ha lo stesso ciclo: (a) core de + nakładka it, (b) gate D8 con
correzioni, (c) en+es e (d) fr+pl, ciascuno con la sua revisione D8 limitata a
`theory/contrast/trap` e fedeltà della traduzione, (e) audio. `check_porting.mjs` registra
ogni stadio, quindi il verify di ogni lotto parte rosso per costruzione.

### Decisioni aperte (con default)

- DA-1 Prima pubblicazione su Pages: fine F1 (default) o fine F4 (A1-B1). Vedi A1.
- DA-2 D8 come autorizzazione permanente alle ~150 chiamate `codex exec` (default: sì). Vedi A2.
- DA-3 Plurale: campo neutro `plural` (default) contro plurale dentro `it`.
- DA-4 Nome del brand: "Deutsch lernen" (default, nella lingua insegnata come l'originale) o "Impara il tedesco".
- DA-5 Wortlisten Goethe A1-B1 come riferimento di copertura lessicale (default: sì, solo come lista di controllo, nessun testo copiato).
- DA-6 Esame anticipato dopo B1 (default) invece che dopo C2 come nell'ordine suggerito.

## Complessità introdotta

- `scripts/check_porting.mjs` → serve a R18, R21, R22 e al verify rosso di ogni lotto | più semplice scartata: `parity.mjs` per file, perché ragiona per file (fino a 4 unità) e non vede né il gate D8 né l'audio.
- `scripts/porting-target.json` + `scripts/snapshot_target.mjs` → serve a R18 (conteggi per unità dell'originale) | scartata: confronto live con `../versione-statica`, perché lega CI e test a un path fuori dal repo (lo stesso difetto di `gen_anki_sample.mjs`).
- `scripts/review_lot.mjs` + `prompts/review-lot-v1.md` → serve a R21 (D8), ~150 esecuzioni | scartata: chiamata a mano a Codex, perché la stessa sequenza ripetuta oltre la seconda volta diventa script (code-standards § Entry point) e il verdetto deve essere un file leggibile da `check_porting`.
- `scripts/prune_audio.mjs` (dry-run di default) → serve a R22: ogni fase rende orfani i mp3 italiani o le frasi corrette | scartata: `git rm` a mano, perché la cancellazione massiva riscritta ogni volta è quella che sbaglia il filtro.
- `scripts/neutral-letters.mjs` (regex e scansione dello strato neutro estratte da `validate.mjs`) → serve a R16, condivisa da `validate.mjs` e `check_porting.mjs` e testabile | scartata: due copie della regex, perché divergerebbero in silenzio.
- Campo neutro `plural` sul vocabolo → serve a R15 | scartata: plurale dentro `it`, perché cambia chiave flashcard e nome dei file audio (subordinato a DA-3).
- `scripts/porting-all.mjs` → serve a R21 e alla DoD (`--all`, Q7 A): decide cosa controlla il gate della CI e stampa la review come report | scartata: tutto dentro `check_porting.mjs`, perché lo portava oltre le 300 righe.
- Target di 4 set di coppie minime invece dei 5 dello snapshot (`GERMAN_PHONETIC_SETS` in `porting-modules.mjs`) → serve a R25: il quinto candidato, ch [ç]/[x], è un solo fonema in due varianti posizionali e non ha coppie fra parole comuni (T9.30) | scartata: un set con parole marginali, che `phonetics.js` non ammette.
- Nessuna dipendenza npm o Python nuova; nessun livello di astrazione nel motore (il tedesco sostituisce l'italiano nelle stesse tabelle e funzioni).

## Operazioni

Runner esistente: script di `package.json`. Verbi aggiunti:

- `npm run snapshot:target -- <path-originale>` → rigenera `scripts/porting-target.json` dai dati dell'originale | task: T0.02
- `npm run check:porting -- <unit|--level L|--all> [--stage s1,s2]` → stato del porting, exit 1 se incompleto | task: T0.03
- `npm run review:lot -- <unit> --lang <it|en|es|fr|pl> [--dry-run]` → gate D8 con Codex, scrive il verdetto | task: T0.04
- `npm run audio:strings` → `node scripts/extract_strings.mjs` | task: T0.06
- `npm run audio:build` → `uv run --script scripts/build_audio.py` (solo file mancanti) | task: T0.06
- `npm run audio:prune [-- --apply]` → elenca (default) o cancella gli mp3 orfani, stampa conteggio e MB, mai testi | task: T0.05
- `npm run check:live` → SIGNAL dopo il push dell'utente | task: T10.03

Il push e la pubblicazione su Pages restano all'utente (R32). Rollback di una pubblicazione:
revert del commit su `main` fatto dall'utente; il SW annuncia la versione precedente come
nuova perché `SW_VERSION` cambia con l'impronta del PRECACHE (`check_swversion.mjs`).

## Fasi

| Fase | Contenuto | Task | Stima (h) | Dopo la fase |
|---|---|---|---|---|
| F0 | Fondamenta e attrezzi | 13 | 7 | app italiana isolata, attrezzi pronti, non pubblicata |
| F1 | Contratti, motore tedesco, rebrand, A1 U1-U3, semi | 79 | 66-73 | corso di tedesco pubblicabile (A1 U1-U3) |
| F2 | A1 U4-U10 | 37 | 36-51 | A1 completo |
| F3 | A2 | 42 | 41-58 | A1-A2 |
| F4 | B1 | 22 | 27-35 | A1-B1, placement su 3 livelli |
| F5 | Esame in stile Goethe B1 | 20 | 29 (+6-10 se A10 è falsa) | esame completo, seme sostituito |
| F6 | B2 | 32 | 45-61 | A1-B2 |
| F7 | C1 | 27 | 38-52 | A1-C1 |
| F8 | C2 | 22 | 31-42 | corso completo |
| F9 | Moduli secondari completi (3 sottofasi) | 22 | 56 | parità funzionale con l'originale |
| F10 | Chiusura | 5 | 5 | documentazione e segnale |
| | **Totale** | **321** | **380-467** | |

Somme delle righe di `tasks.md`. Buffer: +15% imprevisti tecnici, +10% rilavorazione da gate
D8 (stima: 1 lotto su 5 torna indietro) → **475-585h di lavoro assistito**, escluso il tempo
dell'utente per il campione umano B2-C2 e per le approvazioni. Calendario: l'originale ha fatto motore e
contenuti in ~5 settimane, ma i contenuti in 5 lingue sono arrivati a ondate; qui partono
tutti insieme e ogni lotto paga il gate D8. Le 6-8 settimane reggono solo con 2-3 unità in
volo in parallelo (file diversi, `par: ok`) e con A2 confermata; in sequenza stretta servono
10-13 settimane. Ri-stimare a fine F2: è la prima fase fatta solo di lotti e dà il costo reale
per unità.

## Fuori scope

- Varianti austriache e svizzere, ortografia pre-1996 (D6).
- Modificare `versione-statica` o portargli fix (D1: i fix vanno nell'altro verso, cherry-pick da `upstream`).
- Migrare profili dall'app italiana (D11).
- Materiali ufficiali Goethe, punteggi o verdetti su Schreiben e Sprechen (D5).
- Rinominare campi, file o rotte interne (`it`, `titleIt`, `cils*`, `#/cils`) (D4, A8).
- Riscrivere i README e `SECURITY*.md` oltre ai riferimenti a nome e URL: lo chiede T10.01 solo se l'utente lo conferma (code-standards § Documentazione).
- Push, creazione del repo GitHub, impostazioni di Pages (D11).

## File da modificare

| File | Tipo | Scopo |
|---|---|---|
| `assets/js/store.js`, `sw.js` | modifica | isolamento storage e cache (R1, R3) |
| `assets/js/core.js`, `views-settings.js`, `retention.js`, `ics.js`, `anki.js` | modifica | nomi export (R4) |
| `package.json`, `index.html`, `404.html`, `manifest.webmanifest`, `scripts/og-template.html`, `build_og.mjs`, `check_ogtags.mjs`, `check_404.mjs`, `gen_anki_sample.mjs` | modifica | URL, brand, path (R4, R28) |
| `scripts/check_porting.mjs`, `snapshot_target.mjs`, `porting-target.json`, `review_lot.mjs`, `prune_audio.mjs`, `neutral-letters.mjs`, `prompts/review-lot-v1.md` | nuovo | attrezzi del porting |
| `assets/js/verbs-data.js`, `verbs.js`, `views-conjugator.js`, `exercises-text.js`, `writing.js`, `views-writing.js` | modifica (riscrittura) | coniugazione tedesca (R7-R9) |
| `assets/js/lemma-morf.js`, `lemma.js`, `frequency.js`, `views-lookup.js` | modifica (riscrittura) | lemmatizzazione (R10) |
| `assets/js/text.js`, `keys.js`, `search.js` | modifica | D7 e barra caratteri (R12) |
| `assets/js/exercises-choice.js`, `flash-modes.js`, `views-lexicon.js`, `views-flash.js` | modifica | genere, articoli, plurale (R11, R14, R15) |
| `assets/js/drills.js`, `drills-lex.js` | modifica (riscrittura) | drill tedeschi (R13) |
| `assets/js/audio.js`, `scripts/build_audio.py`, `check_minpairs.py`, `check_connected.py`, `extract_strings.mjs` | modifica | voce de-DE (R6, R22) |
| `assets/js/i18n.js`, `data/i18n/ui-it.js` (nuovo), `ui-{en,es,fr,pl}.js`, `data/i18n/it/` (nuovo), `data/i18n/de/`, `ui-de.js` (eliminati) | misto | lingue di spiegazione (R5) |
| `assets/js/llm-prompts.js` | modifica | prompt (R27) |
| `assets/js/cils*.js`, `views-cils.js`, `data/core/cils.js` | modifica | esame stile Goethe (R23) |
| `scripts/validate.mjs`, `parity.mjs`, `check-falsi-amici.mjs`, `build_frequency.mjs` | modifica | gate e dati (R16, R17, R24, R26) |
| `data/core/*.js`, `data/i18n/{it,en,es,fr,pl}/*.js`, `data/audio-index.js`, `audio/**` | riscrittura | contenuti (R18-R22, R24-R26) |
| `assets/css/*`, `assets/icons/*`, design system | modifica | rebrand (R28) |
| `tests/unit/*.mjs` (~36), `tests/dom/*.spec.js` (~23), `_harness.mjs` | modifica | test su contenuto e motore tedeschi |
| `CLAUDE.md` | modifica | R33 |

## Rischi e mitigazioni

- Poiché il SW italiano cancella ogni cache `linguai-*` non sua (`sw.js:236`), una cache tedesca con quel prefisso verrebbe cancellata a ogni visita dell'app italiana, e lo studente perderebbe l'offline e gli mp3 scaricati (ri-download di ~46 MB). → T0.08 usa il prefisso `impara-tedesco-`, test unitario con cache finte di entrambe le app.
- Poiché le due app condividono i ~5 MB di localStorage dell'origin, lo spazio di una riduce quello dell'altra e la potatura per quota del Store tedesco può scattare prima. → test in T0.07 con profilo italiano grande presente; la potatura tocca solo la chiave propria (già così, va solo pinnato).
- Poiché `store.js:197` legge la chiave legacy `linguai.italiano.pl.v1`, l'app tedesca importerebbe i progressi del corso italiano di chi li ha. → T0.07 toglie il ramo, test con la chiave presente.
- Poiché il gate D8 è un secondo modello, può confermare errori comuni a entrambi (genere dei prestiti, Rektion delle preposizioni, registro C1-C2), e questi entrerebbero nel corso con un verdetto `pass`. → golden file dei verbi rivisto a parte; campione umano B2-C2; checklist del prompt con le categorie di errore note; `validate.mjs` controlla meccanicamente `gender`, `plural`, `conj`.
- Poiché un lotto core+it richiede 2-3,5h di generazione e revisione, una rilavorazione oltre il 20% dei lotti sposta il calendario di 2-3 settimane. → ri-stima obbligatoria a fine F2 con i numeri reali.
- Poiché 59 file di test citano contenuti italiani, il cutover rende rossi in blocco test DOM che non riguardano il motore, e la fase F1 rischia di restare aperta a lungo. → riscrittura per gruppi (T1.90-T1.96) ancorata ai semi, che hanno id stabili; i test motore vengono riscritti dentro i task motore.
- Poiché `edge-tts` è un servizio non garantito, un cambio di voce o di endpoint blocca gli stadi audio. → gli stadi audio sono separati (lotto e) e il corso funziona con la sintesi di riserva; nessun lotto testuale dipende dall'audio.
- Poiché il verbo separabile in frase ("ich stehe um 7 Uhr auf") non è lemmatizzabile token per token, il lookup su "stehe" porta a `stehen` invece di `aufstehen`. → limite dichiarato in R10 e in `CLAUDE.md`; nessuna euristica sulla frase in questo piano.
- Poiché alcune coppie minime tedesche (Hütte/Hüte, Miete/Mitte) dipendono dalla lunghezza vocalica che il TTS può appiattire, un set può non passare `check_minpairs.py`, come è successo con le "o" italiane. → il set che non passa non entra; il numero di set può scendere sotto 5 con dichiarazione (R25 vince su R26 per le coppie).
- Poiché l'esame mostrato da F1 è un seme di una sola parte, la prima versione pubblicata ha un esame incompleto. → etichetta "anteprima" visibile fino a F5.

## Criteri di successo

- Tutte le voci della Definition of Done di `spec.md` verdi, ciascuna col suo comando.
- `npm run check:porting -- --all` esce 0 e il suo output è allegato alla chiusura di F8 e F9.
- I verdetti in `specs/german-course/reviews/` sono uno per lotto e lingua, nessuno `fail` senza un `pass` successivo.
- Dopo il primo push dell'utente su `main`, il SIGNAL torna il `SW_VERSION` atteso entro 15 minuti.
