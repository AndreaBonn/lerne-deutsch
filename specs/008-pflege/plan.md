# 008 - Deutsch für die Pflege

**Stato**: proposto · **Data**: 2026-11-19
**Ambito**: una sezione di studio per infermieri e infermiere che lavorano o vogliono lavorare in
Germania: lessico, comprensione e comunicazione di reparto, registrata come pseudo-livello `PFL`
accanto ai livelli QCER; più una simulazione d'esame non ufficiale nello stile di telc Deutsch
B1·B2 Pflege.
**Fuori ambito**: medici e altre professioni sanitarie; un concetto di "percorso" (track) nel
motore; correzione o punteggio delle produzioni d'esame (ADR-009 resta com'è); qualsiasi backend.

Decisioni dell'utente già prese e non riaperte qui: pubblico = infermieri; struttura =
pseudo-livello via `LINGUAI.registerLevel` in `data/core/curriculum-index.js`, non un concetto
nuovo nel motore; esame = sì, sul formato reale telc.

## Obiettivo

Uno studente di livello B1 trova nel Percorso la scheda "Pflege", studia unità di reparto
(Aufnahme, Vitalzeichen, Übergabe...) con le stesse lezioni, vocaboli, audio registrato e
ripasso FSRS del resto del corso, impara la coppia Fachsprache/Laiensprache spiegata nella sua
lingua, e può fare una simulazione d'esame che conta solo la parte ricettiva e non promette un
certificato. Nessun contenuto medico arriva al pubblico senza la revisione di una persona
qualificata.

## Definition of Done

**Pseudo-livello (fase 1)**
- Dato `pfl-u01` registrato, quando lo studente apre `#/percorso?code=PFL`, allora vede la
  scheda col nome tradotto (`level:PFL` nelle 5 nakładki) e l'avviso "non è consulenza
  medica" (test DOM in `tests/dom/path.spec.js`).
- Dato un segnalibro `#/lezione?id=pfl-u01-l1` aperto a freddo, quando la pagina si carica,
  allora la lezione si apre. Oggi `assets/js/views-lesson.js:43` e `assets/js/app.js:303`
  estraggono il livello con `/^([a-z]\d)/i`, che su `pfl-` non trova nulla: la lezione
  risponderebbe "non trovata" (BASIS: measured, lettura del codice).
- Dato uno studente che fa il test di piazzamento e risponde giusto a tutto, quando il test
  finisce, allora il livello assegnato è al massimo `C2` e nessuna lezione `pfl-*` viene
  marcata `placed`. Oggi `assets/js/placement.js:55` cerca binariamente su tutti i livelli
  registrati e `placement.js:102` marca come fatte tutte le lezioni sotto l'indice: con PFL in
  coda il piazzamento potrebbe restituire `PFL` e segnare fatto l'intero C2.
- Dato uno studente con tutto C2 finito, quando apre Oggi, allora la "prossima lezione" non
  salta dentro PFL (`assets/js/core.js:167`, `core.js:182` camminano su tutti i livelli).
- Dato `data/core/pfl-01.js`, quando gira `node scripts/validate.mjs <lang>` per ognuna delle
  5 lingue, allora le lezioni PFL sono validate (oggi `scripts/validate.mjs:92` le salta in
  silenzio: il filtro `^[abc]\d-\d+\.js$` non le vede e `validate.mjs:228` dà solo un warning
  "brak jednostek").
- Dato `pfl-u01`, quando gira `node scripts/extract_strings.mjs`, allora le frasi PFL entrano
  in `scripts/audio-strings.json` e `check:porting -- --unit pfl-u01 --stage audio` è verde
  (oggi `extract_strings.mjs:53` le salta: niente mp3, ripiego silenzioso sulla sintesi).
- `npm run check:porting -- --all` resta verde con PFL presente: oggi
  `scripts/check_porting.mjs:160-171` darebbe `Unexpected unit: pfl-u01` e
  `PFL: incorrect unit/lesson distribution`, e la CI (`.github/workflows/ci.yml:57`) diventa
  rossa.
- Lo stadio `human` vale per ogni unità PFL, a qualunque livello: oggi
  `check_porting.mjs:105` lo applica solo a `B2/C1/C2`. Il file `<unit>-human.md` di un'unità
  PFL richiede, oltre a `ESITO:`, una riga `REVISORE:` con nome e qualifica professionale.

**Contenuto (fasi 1-3)**
- Ogni unità PFL ha 5 lezioni + test, 10 esercizi e 12 vocaboli per lezione (taglia delle unità
  B1 in `scripts/porting-target.json`), in `data/core/pfl-0N.js` + 5 nakładki.
- Ogni lezione PFL ha almeno un blocco `{contrast}` Fachsprache/Laiensprache scritto per lingua
  (es. per `it`: "ipertensione" esiste anche in italiano, il paziente tedesco però dice
  `Bluthochdruck`); `review_lot` lo verifica come punto esplicito del prompt.
- Esempio Given/When/Then del cuore contrastivo: dato l'esercizio `match` della lezione
  Vitalzeichen, quando lo studente abbina `die Hypertonie` a `der Bluthochdruck`, allora
  `onDone(true)`; abbinarlo a `der Blutzucker` dà `onDone(false)`.

**Esame (fasi 5-6)**
- Dato un tentativo Pflege con 31 punti ricettivi su 59, quando si chiude la parte ricettiva,
  allora lo schermo mostra "31/59" e la fascia "nel rango che telc associa a B1 nella parte
  scritta ricettiva", accanto alla frase fissa che Schreiben e Sprechen non sono valutati e
  che non esiste un esito d'esame. Con 26/59 mostra che in quella parte la prova non sarebbe
  superata (asimmetria di ADR-009: il no è certo, il sì non esiste).
- La simulazione Goethe esistente (`sim-1`, `sim-2`) dà gli stessi punteggi e verdetti di oggi:
  `tests/unit/cils.test.mjs` e `tests/dom/cils.spec.js` invariati e verdi.
- Lo schermo dell'esame Pflege dice: non ufficiale, non collegato a telc gGmbH, nessun
  materiale telc riprodotto.

SIGNAL: n/a, perché il corso è un sito statico senza backend né telemetria per scelta
(nessuna richiesta verso domini terzi, vedi `CLAUDE.md` § Praca bez sieci e informativa
privacy): non esiste un log o una metrica da interrogare dopo il rilascio. L'osservazione
post-rilascio sostitutiva è manuale e si dichiara come tale: apertura di `#/percorso?code=PFL`
e di un segnalibro `pfl-u01-l1` sull'URL pubblicato entro un giorno dal push.

## Assunzioni

- Livello d'ingresso B1: le lezioni PFL portano `cefr: "B1"` o `"B2"` (il livello reale del
  contenuto), mai `"PFL"`. Il campo `cefr` finisce nei prompt LLM (`assets/js/llm-prompts.js:156`,
  `:304`: "a learner at level X of the CEFR") e "PFL" lì sarebbe un livello inesistente.
- PFL non è sequenziale: non entra nel piazzamento né nella catena "prossima lezione". Lo
  esprime un campo dato `sequential: false` sulla `registerLevel`, letto da 4 punti del motore.
  È un attributo del livello, non un concetto di percorso.
- **Revisione umana a fine flusso (decisione utente 2026-11-19).** Un'infermiera rivedrà tutto
  il percorso al termine di tutte le fasi. Fino ad allora nessuna fase si ferma in attesa del
  revisore: lo stadio `human` di PFL accetta `REVISORE: in attesa` e l'avviso in app dice che il
  contenuto non è ancora stato rivisto da personale sanitario. Quando arriva la revisione, la
  riga `REVISORE:` porta il nome e l'avviso si accorcia.
- Formato telc (tempi, parti, item, fasce 0-26 / 27-42 / 43-59, regole di certificato) letto
  dall'orchestratore nel telc Übungstest 1 ufficiale (BASIS: measured); va comunque citato con
  fonte in `specs/008-pflege/telc-formato.md` (task 5.1).
- Il deploy su GitHub Pages parte dal branch, non dipende dalla CI verde (BASIS: inferred,
  `ci.yml` non ha job di deploy): una CI rossa non ferma la pubblicazione.
- Due voci soltanto (`de-DE-KatjaNeural`, `de-DE-ConradNeural`): la Teambesprechung a 3-4
  persone si registra alternando le due voci e nominando chi parla nel testo, come fa già
  `data/core/cils.js` ("Moderator:", "Frau Kraus:").
- Le pagine PFL di libreria (`library-pfl.js`) arrivano solo in fase 4.

## Disambiguazione

**D1 - Esame Pflege nel motore d'esame** (titoli prima, valutazione dopo)
- A: supporto multi-formato in `cils.js`, prima upstream (`versione-statica`) poi cherry-pick.
- B: multi-formato in `cils.js` solo nel fork, formato scelto dalla simulazione.
- C: rinvio dell'esame a un piano successivo.
- D: rotta e motore separati (`pflege-exam.js`) copiati da `cils.js`.

Valutazione:
- A → la regola "najpierw upstream" non si applica: i file d'esame sono già divergenti.
  `diff` fra i due repo: `cils.js` 103 righe diverse, `views-cils.js` 75, `cils-html.js` 50,
  `cils-run.js` 32 (BASIS: measured). `CILS_FORMATO` esiste solo nel fork; upstream ha costanti
  CILS fisse (`MAX_ABILITA = 12`, `SOGLIA_ABILITA = 7`). Portare upstream un motore che serve
  solo al tedesco costa giorni e non dà nulla al corso italiano.
- B → `CILS_FORMATO` diventa una tabella di formati (`EXAM_FORMATS`), ogni simulazione dichiara
  `formato:`, `esito` riceve il formato e conosce due modi di punteggio: `perModulo` (Goethe,
  soglia 60% per modulo, comportamento attuale) e `fasceRicettive` (telc: somma degli item di
  Hören + Lesen + Sprachbausteine, fasce). Servono due tipi di prova nuovi per i
  Sprachbausteine e il prompt LLM d'esame consapevole del formato
  (`assets/js/llm-prompts.js:216` dice "Goethe-Zertifikat B1" a codice fisso).
- C → nessun costo ora, ma l'utente ha già deciso che l'esame va fatto.
- D → due motori da tenere allineati sulle stesse garanzie (filtro `cils-report.js`, verdetto
  asimmetrico): esattamente il raddoppio che `clamp` e `CilsReport` evitano.
- **Raccomandata: B**, nelle fasi 5-6, dopo il contenuto: l'esame usa il lessico delle unità.
- **Decisa: B** (utente, 2026-11-19).

**D2 - Dove cambiano i file del motore condiviso** (`app.js`, `views-lesson.js`, `placement.js`,
`views-placement.js`, `core.js`, quasi identici a upstream: 6, 3, 0, 0, 2 righe di diff)
- A: estrazione del prefisso di livello generalizzata upstream-first (è un difetto latente
  anche lì: due regole diverse per lo stesso prefisso, `flash-rules.js:74` usa
  `split("-")[0]`), `sequential: false` solo nel fork.
- B: tutto nel fork.
- **Raccomandata: A**. Il prefisso è una correzione innocua per upstream e tiene identici i
  file; `sequential` non ha utenti upstream (YAGNI) e resta un commit isolato del fork.
- **Decisa: B** (utente, 2026-11-19): "Upstream è un corso di italiano e non gli servono questi
  aspetti". Nessun lavoro Pflege passa da `versione-statica`.

**D3 - Come gli script conoscono le unità senza originale**
- A: un file nuovo scritto a mano, `scripts/own-target.json` (livello PFL, unità, conteggi
  attesi), unito al target in `check_porting.mjs`.
- B: aggiungere PFL a `scripts/porting-target.json`.
- **Raccomandata: A**. `porting-target.json` è rigenerato da `snapshot_target.mjs:108` dal corso
  italiano: una modifica a mano sparirebbe al prossimo `npm run snapshot:target`.

**D4 - Contenuto medico non ancora revisionato**
- A: i file `pfl-0N.js` esistono e sono validati dagli script, ma la riga `registerLevel` di
  PFL in `curriculum-index.js` entra solo nel commit di rilascio, dopo la revisione umana.
  Gli script leggono PFL da `own-target.json`, l'app no.
- B: PFL registrato da subito, disciplina di push.
- **Raccomandata: A**. Con B un push chiesto per un'altra correzione pubblica contenuto medico
  non revisionato, e la CI rossa non lo ferma (assunzione sul deploy sopra).
- **Decisa: B** (utente, 2026-11-19): PFL visibile da subito. Mitigazione: l'avviso del livello
  (`notice`, task 1.6) dichiara sul percorso e in ogni lezione che il contenuto è generato e non
  ancora rivisto da personale sanitario, oltre a "non è consulenza medica". Ogni unità entra in
  `dataFiles` appena passa i gate automatici e il secondo giudice (`review_lot`).
- **D3 decisa: A** (utente, 2026-11-19).

## Complessità introdotta

- campo `sequential` su `registerLevel` → serve alla DoD piazzamento / prossima lezione | più
  semplice scartata: riconoscere i codici QCER con `/^[A-C][12]$/` nel motore, perché rimette
  nel codice l'assunzione che questo piano toglie.
- campo `notice` sul livello (chiave i18n dell'avviso) → serve alla DoD avviso medico | più
  semplice scartata: avviso dentro `level:PFL.desc`, perché un segnalibro a una lezione non
  passa dal Percorso e non lo vedrebbe.
- `scripts/own-target.json` → D3 | scartata: target a mano in `porting-target.json`, sovrascritto.
- `EXAM_FORMATS` + modo `fasceRicettive` in `cils.js` → D1 | scartata: `if (sim.id ===
  "pfl-1")` nel motore, perché il formato è dato e `Cils.conforme` lo deve controllare.
- 2 tipi di prova (`lueckeAbbina`, `lueckeMc`) in `cils-html.js`/`cils-run.js` → Sprachbausteine
  | scartata: riusare `mc` con una domanda per lacuna, perché il testo con le lacune numerate è
  il compito.
- nessun nuovo file JS del motore oltre a questi; nessuna dipendenza.

## Operazioni

- nessuna, perché il rilascio è un push di file statici su Pages che porta tutto con sé; i
  comandi nuovi sono gate di verifica (`check:porting` esteso), non operazioni su un ambiente.
  L'audio si genera col verbo esistente `npm run audio:build`.

## Fasi (ognuna mergiabile da sola)

| Fase | Contenuto | Stato usabile dopo la fase | Stima (con buffer) |
|---|---|---|---|
| 1 | Idraulica dello pseudo-livello + unità pilota `pfl-u01` Aufnahme und Anamnese, 5 lingue, audio, revisione umana, rilascio | PFL nel Percorso con 1 unità | 62-76h |
| 2 | Unità `pfl-u02`-`pfl-u05` | PFL con 5 unità | 95-110h |
| 3 | Unità `pfl-u06`-`pfl-u09` | PFL completo | 95-110h |
| 4 | Moduli secondari: 2 conversazioni ramificate, 3 scenari di chat (LLM paziente), `library-pfl.js` (3 testi) | pratica orale e lettura lunga | 36-46h |
| 5 | Motore multi-formato + Modelltest Pflege 1 completo | simulazione telc-style in `#/esame` | 66-82h |
| 6 | Modelltest Pflege 2 | due simulazioni | 34-42h |

Totale 388-466h. La fase 1 ri-stima le fasi 2-3 col costo reale per unità (regola già usata in
`specs/german-course`).

Unità proposte (5 lezioni + test ciascuna, 45 lezioni):

| id | Titolo (`titleIt`) | Cuore |
|---|---|---|
| pfl-u01 | Aufnahme und Anamnese | domande d'accoglienza, Anamnesebogen, allergie, Vorerkrankungen; Körper e Beschwerden di base |
| pfl-u02 | Körper, Beschwerden, Schmerz | parti del corpo in due registri, Schmerzskala NRS, descrivere il dolore |
| pfl-u03 | Vitalzeichen und Messwerte | Blutdruck, Puls, Temperatur, Blutzucker, SpO2; numeri e unità a voce e per iscritto |
| pfl-u04 | Grundpflege nach AEDL | Körperpflege, Mobilisation, Lagerung, Ernährung, Ausscheidung; Dekubitusprophylaxe |
| pfl-u05 | Medikamente und Beipackzettel | Darreichungsformen, Dosierung, Nebenwirkungen, leggere un foglietto |
| pfl-u06 | Dienstübergabe und Pflegebericht | Übergabe orale, Pflegedokumentation, Präteritum e Passiv nei rapporti |
| pfl-u07 | Gespräche mit Patienten und Angehörigen | spiegare, rassicurare, rifiutare con cortesia, Sie e registro |
| pfl-u08 | Notfall | Sturz, Atemnot, Reanimation: istruzioni brevi, imperativo, chiamare aiuto |
| pfl-u09 | Visite und Teambesprechung | Arztvisite, proposte e disaccordo, Konjunktiv II di cortesia |

## Rischi e mitigazioni

- Errore medico nei contenuti (dosi, valori normali, procedure) → stadio `human` obbligatorio
  con `REVISORE:`; nessun valore numerico clinico nei testi senza fonte annotata nel commento
  del file; avviso in app; registrazione del livello solo dopo la revisione (D4).
- Un giudice LLM conferma un errore condiviso da due modelli (rekcja, Fachbegriff sbagliato)
  → `review_lot` resta necessario ma non sufficiente; il campione umano lo copre.
- Piazzamento che assegna PFL e marca fatto C2 → test unitario rosso prima del fix
  (`tests/unit/placement.test.mjs`), mutazione su `sequential`.
- Contenuto telc riprodotto per abitudine → regola nel file dati come in `data/core/cils.js`:
  tutto originale; `review_lot` sul file d'esame chiede esplicitamente "somiglia a un testo
  noto?"; nessun testo, immagine o tema copiato dall'Übungstest.
- Fasce telc lette come promessa di certificato → testo fisso accanto al numero, mai "B1
  raggiunto"; il filtro `CilsReport` resta sul parere LLM; test DOM che cerca l'assenza di
  "bestanden"/"superato" appaiata a un caso positivo che trova la fascia.
- Regressione della simulazione Goethe dopo il multi-formato → i test Goethe esistenti non si
  toccano nel commit del motore; 4 mutazioni nuove in `scripts/mutations.mjs`.
- Pronuncia dei Fachbegriffe (Dekubitus, Hypertonie) letta male dalla voce → ascolto dei file
  dell'unità pilota; `STRESS_FIXES` resta vuota finché un ascolto non trova una parola sbagliata.
- `cils-report.js` taglia frasi con livelli QCER: un parere LLM su un Aufnahmebericht che
  cita "B2" viene tagliato, comportamento voluto, nessuna modifica.

## Criteri di verifica

Fine di ogni fase: `npm run lint`; `node scripts/validate.mjs` per `it en es fr pl`;
`node scripts/parity.mjs`; `node scripts/check_precache.mjs`; `node scripts/check_swversion.mjs`;
`npm run test:all`; `npm run test:mutations`; `node scripts/coverage.mjs --min 99`;
`npm run check:porting -- --all`; per ogni unità della fase
`npm run check:porting -- --unit <id> --stage core,it,en,es,fr,pl,audio,review,human`
con `review_lot` passato in tutte e 5 le lingue. Per le fasi con UI: click-through a 375 e
1280 px e `a11y-gate`.
