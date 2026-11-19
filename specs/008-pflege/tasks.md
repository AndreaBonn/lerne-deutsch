# 008 - Scomposizione

Una riga per sub-task: id, attività, dipendenze, verifica (rossa sul commit di partenza),
parallelismo, stima. Stessa forma di `specs/007-flashcard-cinque-minuti/tasks.md`. Commit
atomici su `main`, niente branch di feature, push solo su richiesta. Rollback di ogni riga:
`git revert` del commit, salvo dove indicato. Ogni test si scrive prima del codice e si vede
rosso; su codice esistente si rompe a mano il codice e si ripristina.

Gate di chiusura di ogni fase, non ripetuti nelle righe: `npm run lint`,
`node scripts/validate.mjs` per `it en es fr pl`, `node scripts/parity.mjs`,
`node scripts/check_precache.mjs`, `node scripts/check_swversion.mjs`, `npm run test:all`,
`npm run test:mutations`, `node scripts/coverage.mjs --min 99`,
`npm run check:porting -- --all`.

**Precondizioni**: D1-D4 decise (2026-11-19): D1=B, D2=B (tutto nel fork, niente upstream),
D3=A, D4=B (PFL visibile da subito con avviso "non ancora rivisto"). La revisione umana di
un'infermiera arriva a fine flusso e non blocca nessuna fase: le righe `human` producono il file
con `REVISORE: in attesa`, la revisione vera si fa in un lotto unico alla fine (task 7.1).

## Checklist (fonte di verità della notte, 2026-11-19)

Le tabelle sotto restano il dettaglio di ogni voce. Già fatte prima della notte: 1.1-1.10, 1.12-1.14, 1.16, 1.17, 1.19 (commit cd89874, fab5ade, ffe6c7e).

- [x] T1.15 review_lot (secondo giudice) di pfl-u01 per it en es fr pl
- [x] T1.18 pfl-u01-human.md con ESITO e REVISORE: in attesa | dip: T1.15
- [x] T1.20 click-through 375/1280 di PFL, a11y-gate, contrast.spec
- [x] T1.11 CLAUDE.md: pseudo-livello, sequential, notice, own-target, REVISORE
- [x] T1.21 ri-stima fasi 2-3 in plan.md col costo misurato di pfl-u01 | dip: T1.18
- [x] T2.2.a pfl-u02: core + overlay it, own-target, curriculum pointer | dip: T1.21
- [x] T2.2.c pfl-u02: overlay en es fr pl | dip: T2.2.a
- [x] T2.2.d pfl-u02: audio, registrazione in dataFiles, gate, review_lot 5 lingue, human in attesa | dip: T2.2.c
- [x] T2.3.a pfl-u03: core + overlay it, own-target, curriculum pointer | dip: T1.21
- [x] T2.3.c pfl-u03: overlay en es fr pl | dip: T2.3.a
- [x] T2.3.d pfl-u03: audio, registrazione in dataFiles, gate, review_lot 5 lingue, human in attesa | dip: T2.3.c
- [x] T2.4.a pfl-u04: core + overlay it, own-target, curriculum pointer | dip: T1.21
- [x] T2.4.c pfl-u04: overlay en es fr pl | dip: T2.4.a
- [x] T2.4.d pfl-u04: audio, registrazione in dataFiles, gate, review_lot 5 lingue, human in attesa | dip: T2.4.c
- [x] T2.5.a pfl-u05: core + overlay it, own-target, curriculum pointer | dip: T1.21
- [x] T2.5.c pfl-u05: overlay en es fr pl | dip: T2.5.a
- [x] T2.5.d pfl-u05: audio, registrazione in dataFiles, gate, review_lot 5 lingue, human in attesa | dip: T2.5.c
- [x] T3.6.a pfl-u06: core + overlay it, own-target, curriculum pointer | dip: T1.21
- [x] T3.6.c pfl-u06: overlay en es fr pl | dip: T3.6.a
- [x] T3.6.d pfl-u06: audio, registrazione in dataFiles, gate, review_lot 5 lingue, human in attesa | dip: T3.6.c
- [x] T3.7.a pfl-u07: core + overlay it, own-target, curriculum pointer | dip: T1.21
- [x] T3.7.c pfl-u07: overlay en es fr pl | dip: T3.7.a
- [x] T3.7.d pfl-u07: audio, registrazione in dataFiles, gate, review_lot 5 lingue, human in attesa | dip: T3.7.c
- [x] T3.8.a pfl-u08: core + overlay it, own-target, curriculum pointer | dip: T1.21
- [x] T3.8.c pfl-u08: overlay en es fr pl | dip: T3.8.a
- [x] T3.8.d pfl-u08: audio, registrazione in dataFiles, gate, review_lot 5 lingue, human in attesa | dip: T3.8.c
- [x] T3.9.a pfl-u09: core + overlay it, own-target, curriculum pointer | dip: T1.21
- [x] T3.9.c pfl-u09: overlay en es fr pl | dip: T3.9.a
- [ ] T3.9.d pfl-u09: audio, registrazione in dataFiles, gate, review_lot 5 lingue, human in attesa | dip: T3.9.c
- [ ] T4.1 2 conversazioni ramificate Pflege, 5 overlay, audio | dip: T1.21
- [x] T4.2 3 scenari chat Pflege | dip: T1.21
- [x] T4.3 library-pfl.js 3 testi + F1 (library-pfl in --all) | dip: T1.21
- [ ] T4.4 human in attesa dei moduli | dip: T4.1,T4.2,T4.3
- [x] T5.1 telc-formato.md con fonte
- [x] T5.2 EXAM_FORMATS e Cils.formato(sim) | dip: T5.1
- [x] T5.3 conforme con item per Teil | dip: T5.2
- [x] T5.4 esito fasceRicettive | dip: T5.2
- [x] T5.5 tipi di prova lueckeAbbina e lueckeMc | dip: T5.2
- [x] T5.6 views-cils due famiglie, avviso telc, risultato X/59; cablaggio formato in llm.js:209, cils-run.js:118 e consumatori di esito (cils-html.js:250, views-cils.js:356) | dip: T5.4,T5.5
- [x] T5.7 prompt LLM d'esame dal formato | dip: T5.2
- [x] T5.8 Schreiben Aufnahme-/Biografiebericht | dip: T5.5
- [ ] T5.9 Sprechen T1-T3 con preparazione 20 min | dip: T5.6
- [ ] T5.10 contenuto Modelltest Pflege 1 | dip: T5.3,T5.8,T5.9
- [ ] T5.11 audio Hören + check:porting + human in attesa | dip: T5.10
- [ ] T5.12 6 mutazioni d'esame | dip: T5.4,T5.5,T5.7
- [ ] T5.13 click-through esame, a11y-gate, chiavi cils.* x5 | dip: T5.11
- [x] T5.14 CLAUDE.md fasceRicettive | dip: T5.6
- [ ] T6.1 contenuto Modelltest Pflege 2 | dip: T5.13
- [ ] T6.2 audio + human in attesa | dip: T6.1
- [ ] T6.3 cils.spec con 4 simulazioni | dip: T6.1
- [ ] T6.4 swversion + click-through finale | dip: T6.2,T6.3
- [?] T7.1 revisione dell'infermiera (Q: esterna, a fine flusso, la porta l'utente)

## Fase 1 - Pseudo-livello e unità pilota

### 1a. Idraulica (nessun effetto visibile: PFL non è ancora registrato)

| id | Attività | Dip. | Verifica | Par. | Stima |
|---|---|---|---|---|---|
| 1.1 | Nel fork (D2-B): funzione unica `levelCodeOf(id)` = `split("-")[0].toUpperCase()`, usata in `app.js:303` (`guessLevel`) e `views-lesson.js:43` al posto di `/^([a-z]\d)/i`; test unitario su `"b2-u02-l1"` → `B2`, `"pfl-u01-l1"` → `PFL`, `""` → `null` | - | test rosso, poi verde (`npm test`) | ok | 2,5h |
| 1.2 | Test nel fork: livello fittizio `PFL` nel harness, segnalibro `pfl-u01-l1` caricato a freddo | 1.1 | `tests/dom/lesson.spec.js` nuovo caso: rosso su commit di partenza ("lesson.notFound"), verde dopo 1.1 | seq | 1,5h |
| 1.3 | `sequential: false` sul livello: `placement.js:55` e `:102`, `views-placement.js:50` e `:139` filtrano i livelli non sequenziali | - | `tests/unit/placement.test.mjs`: registro `[A1..C2, PFL(sequential:false)]`, tutto giusto → `wynik.code === "C2"`, nessuna lezione `pfl-*` in `state.lessons`; rosso prima | ok | 2,5h |
| 1.4 | `core.js:167` `nextOpenLesson` e `:182` `findNextLesson` saltano i livelli non sequenziali; `app.js:306` e `views-path.js:114` (livello di default) idem | 1.3 | test unitario: C2 tutto fatto, PFL vuoto → `nextOpenLesson() === null`; `findNextLesson` non chiama `loadLevelData("PFL")` | seq | 2h |
| 1.5 | Mutazioni: filtro `sequential` tolto in `placement.js` e in `core.js` | 1.3, 1.4 | `npm run test:mutations` verde, 2 uccise | seq | 0,5h |
| 1.6 | Campo `notice` del livello: `views-path.js:66` e testata di `views-lesson.js:68` mostrano `t(level.notice)` in un blocco `role="note"` | - | test DOM: livello fittizio con `notice: "pfl.notice"` → testo visibile in percorso e lezione; livello senza `notice` → nessun blocco (caso positivo appaiato) | ok | 2,5h |
| 1.7 | `scripts/own-target.json` (D3): `{ levels: { PFL: {...} }, units: { "pfl-u01": {level, lessonCount, lessons...} } }`; `check_porting.mjs` lo unisce al target; regex di unità `[a-c][12]-u\d+` generalizzata a `^[a-z][a-z0-9]*-u\d+$` in `check_porting.mjs:179`, `:262` e `review_lot.mjs:159` | - | `tests/unit/porting-*.test.mjs`: root fittizia con `pfl-u01` e own-target → `--all` verde; senza own-target → `Unexpected unit: pfl-u01` (rosso di partenza riprodotto) | ok | 3h |
| 1.8 | Stadio `human` per PFL: `humanErrors` (`check_porting.mjs:104`) vale per ogni livello marcato `human: true` in own-target, e per PFL richiede anche `^REVISORE:\s*\S` (`in attesa` è un valore valido finché la revisione di fine flusso non arriva) | 1.7 | test: `pfl-u01-human.md` con solo `ESITO:` → errore `Missing REVISORE`; con entrambe → verde; unità B1 invariata (n/a) | seq | 1,5h |
| 1.9 | Enumerazione dei file dati dagli script: `validate.mjs:92`, `extract_strings.mjs:53`, `baseline.mjs:85`, `check_lookup.mjs:59` leggono `dataFiles` di `curriculum-index.js` + i livelli di `own-target.json`, non la regex `[abc]\d`; `validate.mjs` registra nel sandbox i livelli di own-target (D4-A) | 1.7 | `node scripts/validate.mjs` su root di prova con `pfl-01.js` contenente un esercizio senza `a` → exit 1 con l'id (oggi exit 0); `baseline.mjs` senza PFL stampa le stesse 9 righe di prima (`diff`) | seq | 3,5h |
| 1.10 | `porting-modules.mjs:6` (`LEVELS`) e `:22`, `:27`, `:67` (id con `[abc][12]`): letture/libreria con `cefr` reale restano invariate; nota nel codice che PFL usa `cefr` QCER | 1.9 | `tests/unit/porting-modules.test.mjs` verde senza modifiche alle attese | seq | 1h |
| 1.11 | Riga di `CLAUDE.md` (Kontrakty): pseudo-livello, `sequential`, `notice`, `cefr` reale nelle lezioni PFL, `own-target.json`, regola `REVISORE:` | 1.3-1.9 | `grep -n "sequential" CLAUDE.md` torna la riga | seq | 1h |

Commit: `fix(lesson): read the level from the id prefix` (cherry-pick, 1.1-1.2);
`feat(levels): keep non-sequential levels out of placement and next lesson` (1.3-1.5);
`feat(levels): show a level notice on the path and its lessons` (1.6);
`feat(porting): check own units without an upstream target` (1.7-1.10). Sottototale 21,5h.

### 1b. Unità pilota `pfl-u01` Aufnahme und Anamnese

| id | Attività | Dip. | Verifica | Par. | Stima |
|---|---|---|---|---|---|
| 1.12 | `specs/008-pflege/curriculum.md`: 9 unità, 45 lezioni, tag per lezione (riuso di `GRAMMAR_REF`; tag nuovi solo se un argomento non esiste), lessico chiave e coppie Fach/Laien per unità; voce `pfl-u01` in own-target | 1.7 | `npm run check:porting -- --curriculum` verde con gli id `pfl-u0N` | ok | 3h |
| 1.13 | `data/core/pfl-01.js`: 5 lezioni + test, `cefr: "B1"`, 10 esercizi e 12 vocaboli per lezione, almeno 9 tipi di esercizio per lezione come le unità B1; tedesco solo in core | 1.12 | `npm run check:porting -- --unit pfl-u01 --stage core` verde (rosso prima: unità assente) | seq | 8h |
| 1.14 | Nakładka `data/i18n/it/pfl-01.js` con `{contrast}` Fach/Laien scritto per l'italiano; `review_lot --unit pfl-u01 --lang it` | 1.13 | `node scripts/validate.mjs it` verde con PFL contato; `specs/german-course/reviews/pfl-u01-it.json` `pass` col bundleHash corrente | seq | 4h |
| 1.15 | Nakładki `en`, `es`, `fr`, `pl`, ciascuna con contrasti propri (per `en`: il registro latino è più raro, il problema è l'opposto) + `review_lot` | 1.14 | `parity.mjs` verde; `--stage en,es,fr,pl,review` verde | par a coppie (en+es, fr+pl), seq su file condivisi | 10h |
| 1.16 | Chiavi `level:PFL` (nome, descrizione) in `data/i18n/<lang>/curriculum-index.js` e `pfl.notice` (non è consulenza medica, verifica sempre con il protocollo del reparto; contenuto generato e non ancora rivisto da personale sanitario, D4-B) nei 5 dizionari UI | 1.6 | `parity.mjs` e `tests/unit/i18n-klucze.test.mjs` verdi | ok | 1,5h |
| 1.17 | Audio: `node scripts/extract_strings.mjs`, `npm run audio:build`; ascolto di tutti i Fachbegriffe dell'unità, eventuali voci in `STRESS_FIXES` solo per parole ascoltate e sbagliate | 1.13 | `--stage audio` verde; riga nel report coi termini ascoltati | seq | 2,5h |
| 1.18 | Revisione umana: campione di 2 lezioni + test scelto a caso, `specs/german-course/reviews/pfl-u01-human.md` con `REVISORE:` e `ESITO:`; correzioni → `review_lot` di nuovo | 1.15, 1.17 | `--stage human` verde | seq | 2h + attesa esterna |
| 1.19 | Rilascio: riga `LINGUAI.registerLevel({ code: "PFL", cefrLabel: "B1-B2", sequential: false, notice: "pfl.notice", dataFiles: ["pfl-01.js"] })` in coda a `curriculum-index.js`; `check_swversion.mjs --napraw` | 1.18 | test DOM: `#/percorso?code=PFL` mostra 1 unità e l'avviso; segnalibro `pfl-u01-l1` si apre; Oggi con C2 finito non propone PFL. Rollback: revert del solo commit di rilascio (il contenuto resta, invisibile) | seq | 2h |
| 1.20 | Click-through a 375 e 1280 px: scheda PFL, avviso, 1 lezione intera, un esercizio per tipo, cinque minuti con unità PFL scelta; `a11y-gate`; `contrast.spec.js` | 1.19 | elenco dei controlli azionati con esito nel report | seq | 2h |
| 1.21 | Ri-stima delle fasi 2-3 col costo reale di 1.13-1.18 | 1.20 | riga in `plan.md` § Fasi con ore misurate per unità | seq | 0,5h |

Commit: `feat(pflege): add the pilot unit on admission and anamnesis` (1.12-1.17, contenuto non
registrato); `feat(pflege): publish the nursing level with its pilot unit` (1.19).
Sottototale 1b 35,5h + attesa. Fase 1 totale 57h, con buffer 62-76h.

## Fase 2 - Unità `pfl-u02`-`pfl-u05`

Per ogni unità `N` un lotto con la forma di 1.13-1.18, a 5 righe:

| id | Attività | Dip. | Verifica | Par. | Stima/unità |
|---|---|---|---|---|---|
| 2.N.a | `data/core/pfl-0N.js` + voce in own-target | fase 1 | `--unit pfl-u0N --stage core` verde | ok fra unità | 7h |
| 2.N.b | nakładka `it` + `review_lot` | 2.N.a | `--stage it,review` verde | seq | 3,5h |
| 2.N.c | nakładki `en es fr pl` + `review_lot` | 2.N.b | `--stage en,es,fr,pl,review` (lingue tutte) verde | seq su `reviews/` | 8h |
| 2.N.d | audio + ascolto dei Fachbegriffe | 2.N.a | `--stage audio` verde | seq (`audio-strings.json` condiviso) | 2h |
| 2.N.e | revisione umana | 2.N.c, 2.N.d | `--stage human` verde | seq | 1,5h + attesa |

Rilascio di fase: `dataFiles` di PFL esteso a `pfl-02.js`-`pfl-05.js` in un commit, dopo che
le 4 unità hanno `human` verde; test DOM: il percorso PFL conta 5 unità. Rollback: revert del
commit di rilascio. Sottototale 88h, con buffer 95-110h (ri-stimato in 1.21).

## Fase 3 - Unità `pfl-u06`-`pfl-u09`

Stessa forma della fase 2 (righe 3.N.a-e), stesso rilascio con `pfl-06.js`-`pfl-09.js`.
`pfl-u06` (Übergabe e Pflegebericht) porta anche la grammatica dei rapporti (Präteritum,
Passiv, Nominalstil): tag esistenti di `GRAMMAR_REF` verificati in 1.12. Sottototale 88h, con buffer 95-110h.

## Fase 4 - Moduli secondari

| id | Attività | Dip. | Verifica | Par. | Stima |
|---|---|---|---|---|---|
| 4.1 | 2 conversazioni ramificate in `data/core/conversations.js` (Aufnahme di un paziente anziano; telefonata con un familiare), `cefr: "B1"`, 5 nakładki | fase 1 | `npm run check:porting -- conv-2 --stage core,it,en,es,fr,pl,audio` verde; `tests/dom/conversazioni-tutte.spec.js` verde col conteggio aggiornato | ok | 12h |
| 4.2 | 3 scenari in `data/core/chat-scenarios.js` (paziente con dolore, familiare preoccupato, collega in Übergabe), `cefr: "B1"`/`"B2"`, titoli nei dizionari UI | fase 1 | `tests/unit/llm-prompts.test.mjs`: il prompt di chat dello scenario Pflege contiene "level B1 of the CEFR" e non "PFL"; `validate.mjs` (scan neutro) verde | ok | 6h |
| 4.3 | `data/core/library-pfl.js` (Beipackzettel, Pflegebericht, Rundschreiben di reparto, 400-800 parole ciascuno, `cefr` QCER) in `dataFiles` di PFL; regex `library-[abc]\d` sostituita come in 1.9 | 1.9 | `validate.mjs` esce 1 su un testo da 300 parole di prova, poi verde sui 3 testi; `--stage audio` del modulo verde | ok | 14h |
| 4.4 | Revisione umana dei tre moduli (campione) | 4.1-4.3 | `npm run check:porting -- --all` verde con le voci human dei moduli PFL | seq | 2h + attesa |

Sottototale 34h, con buffer 36-46h.

## Fase 5 - Esame Pflege, motore multi-formato e Modelltest 1

**Precondizione: D1 = B confermata e `specs/008-pflege/telc-formato.md` scritto con la fonte.**

| id | Attività | Dip. | Verifica | Par. | Stima |
|---|---|---|---|---|---|
| 5.1 | `telc-formato.md`: parti, tempi, item, fasce, cosa valutano gli esaminatori, citazione della fonte; nessun contenuto riprodotto | - | revisione dell'utente; `grep -c "Quelle\|Fonte" specs/008-pflege/telc-formato.md` >= 1 | ok | 2h |
| 5.2 | Contratto: `EXAM_FORMATS = { "goethe-b1": CILS_FORMATO, "telc-pflege": {...} }` in `data/core/cils.js`, `sim.formato`; `Cils.formato(sim)`; test di contratto su forma e campi (`punteggio: "perModulo"` / `"fasceRicettive"`, `fasce: [{min, max, etichetta}]`, moduli con `teile` e `items` attesi) | 5.1 | `tests/unit/cils.test.mjs` nuovi casi rossi, poi verdi; casi Goethe esistenti invariati | contratto (prerequisito di 5.3-5.6) | 3h |
| 5.3 | `Cils.conforme(sim)` contro il formato della simulazione, inclusi numero di item per Teil (telc li fissa: 4, 5+5, 6, 3, 4, 5, 6, 3, 8, 10) | 5.2 | test: simulazione telc con 9 lacune nei Sprachbausteine T1 → problema `items: sprachbausteine-1`; Goethe invariato | seq | 3h |
| 5.4 | `Cils.esito(punti, formato)` modo `fasceRicettive`: somma dei 59 item, fascia, verdetto `sotto-soglia` sotto il minimo della fascia più bassa altrimenti `indeterminato` | 5.2 | test: 26 → `sotto-soglia` + fascia `unter B1`; 27 → `indeterminato` + `B1`; 43 → `indeterminato` + `B2`; 59 → mai un valore "superato"; modo `perModulo` identico a prima | seq | 3h |
| 5.5 | Tipi di prova `lueckeAbbina` (testo con lacune numerate, lista di parole) e `lueckeMc` (3 opzioni per lacuna) in `cils-html.js` e `cils-run.js`; `name` del radio per lacuna, `data-p`/`data-i` coerenti con la griglia | 5.2 | `tests/unit/cils-html.test.mjs`: due lacune hanno `name` diversi, stessa lacuna stesso `name`; `cils-run.test.mjs`: risposta registrata nella cella giusta | seq | 5h |
| 5.6 | `views-cils.js`: lista con le due famiglie, avviso "non ufficiale, non collegato a telc gGmbH", ordine Hören → Lesen+Sprachbausteine (un timer da 60 min) → Schreiben → Sprechen; schermo del risultato con `X/59`, fascia e frase fissa sulle produzioni non valutate | 5.4, 5.5 | `tests/dom/cils.spec.js` nuovo caso: 31 giuste → "31/59" e testo della fascia B1; nessun "bestanden"; casi Goethe verdi | seq | 6h |
| 5.7 | `llm-prompts.js:216`: nome dell'esame dal formato (`formato.nome`), filtro `CilsReport` invariato | 5.2 | `tests/unit/llm-prompts.test.mjs`: prompt per `telc-pflege` contiene "telc Deutsch B1·B2 Pflege (unofficial)" e non "Goethe"; Goethe invariato | ok | 1,5h |
| 5.8 | Schreiben: tracce Aufnahmebericht e Biografiebericht con estratto di Anamnesebogen/Biografiebogen originale reso come tabella; `controlloScritta` con `richiede` e limiti di parole; mai punteggio | 5.5 | test: traccia senza `parole` rifiutata da `conforme`; rilevamento elementi presente/assente | seq | 4h |
| 5.9 | Sprechen: T1A/T1B, T2A (scelta 1 di 2)/T2B, T3 con affermazioni; tempo di preparazione 20 min dichiarato prima della prova orale; registrazione e revisione come oggi | 5.6 | test DOM: la preparazione mostra le tre parti, nessun punteggio orale nel risultato | seq | 4h |
| 5.10 | Contenuto Modelltest Pflege 1: Hören 4 parti (testi parlati originali, `sp` per la seconda voce, nomi nel testo per 3+ persone), Lesen 4 parti, Sprachbausteine 2 parti, Schreiben, Sprechen; tutto originale | 5.3 | `Cils.conforme` vuoto sul nuovo `pfl-sim-1`; `review_lot --file data/core/cils.js` `pass` con la domanda "somiglia a materiale telc?" nel prompt | seq | 18h |
| 5.11 | Audio Hören, `check:porting` dei moduli d'esame, revisione umana del contenuto professionale | 5.10 | `npm run check:porting -- --all` verde; `pfl-exam-human.md` con `REVISORE:` | seq | 3h + attesa |
| 5.12 | 6 mutazioni (somma delle fasce, confine 26/27, confine 42/43, modo scelto dal formato, `name` per lacuna, nome esame nel prompt) | 5.4-5.7 | `npm run test:mutations` verde | seq | 1,5h |
| 5.13 | Click-through 375/1280 di un tentativo completo, `a11y-gate`, chiavi `cils.*` nuove × 5 lingue | 5.6-5.11 | `parity.mjs` verde; elenco controlli nel report | seq | 3h |
| 5.14 | `CLAUDE.md` § Produkcje egzaminacyjne: secondo formato, modo `fasceRicettive`, perché la fascia non è un esito | 5.6 | `grep -n "fasceRicettive" CLAUDE.md` | seq | 1h |

Commit: `feat(exam): read format and scoring mode from the simulation` (5.2-5.4, 5.7, 5.12
parziale, Goethe invariato); `feat(exam): add gap-text task types` (5.5); `feat(exam): add an
unofficial nursing mock exam in the telc style` (5.6, 5.8-5.11, 5.13). Sottototale 58h + attesa,
con buffer 66-82h.

## Fase 6 - Modelltest Pflege 2

| id | Attività | Dip. | Verifica | Par. | Stima |
|---|---|---|---|---|---|
| 6.1 | Contenuto `pfl-sim-2` su temi diversi dal primo | fase 5 | `Cils.conforme` vuoto; `review_lot` `pass` | ok | 18h |
| 6.2 | Audio, revisione umana | 6.1 | `check:porting -- --all` verde | seq | 3h + attesa |
| 6.3 | `tests/dom/cils.spec.js`: lista con 4 simulazioni, ogni simulazione si apre | 6.1 | spec verde, rossa prima (3 voci) | seq | 2h |
| 6.4 | `check_swversion.mjs --napraw`, click-through | 6.3 | gate di fase verdi | seq | 2h |

Sottototale 25h + attesa, con buffer 34-42h.

## Fase 7 - Revisione umana di fine flusso

| id | Attività | Dip. | Verifica | Par. | Stima |
|---|---|---|---|---|---|
| 7.1 | Un'infermiera rivede unità, moduli ed esame; correzioni applicate, `review_lot` ripassato sui file toccati, `REVISORE:` col nome in ogni `pfl-*-human.md` | fasi 1-6 | `grep -L "REVISORE: in attesa" specs/german-course/reviews/pfl-*-human.md` elenca tutti i file | seq | attesa esterna |
| 7.2 | Avviso `pfl.notice` accorciato (resta "non è consulenza medica", sparisce "non ancora rivisto") nei 5 dizionari | 7.1 | `parity.mjs` verde | seq | 0,5h |

## Fuori scope

- Medici, OSS/Pflegehilfe, Altenpflege come pubblico separato: il lessico AEDL li tocca, il
  piano non li indirizza.
- Valutazione automatica di Schreiben e Sprechen (ADR-009).
- Riconoscimento professionale (Anerkennung, Kenntnisprüfung): non è lingua, è procedura.
- Upstream: niente di Pflege va in `versione-statica`, nemmeno la correzione del prefisso (D2-B).
