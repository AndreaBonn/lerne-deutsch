# german-course - Specifica

Trasformare il clone `impara-tedesco` (oggi identico a `versione-statica`, corso di italiano
A1-C2) in un corso di **tedesco standard (de-DE)** speculare: stesso motore, stesse funzioni,
stessa struttura per unità e lezioni, con spiegazioni in it, en, es, fr, pl. Statico, zero
build, zero dipendenze runtime, funzionante anche da `file://`.

Vincoli dati dall'utente (D1-D12) e non rinegoziati in questo documento: fork senza toccare
l'originale (D1), lingue di spiegazione it/en/es/fr/pl (D2), A1-C2 tutto in scope (D3), nomi
interni dei campi invariati e documentati come "lingua insegnata" (D4), esame in stile
Goethe-Zertifikat B1 non ufficiale senza voto sulle prove produttive (D5), solo de-DE (D6),
ae/oe/ue/ss e minuscola del sostantivo = quasi corretto (D7), gate di qualità per lotto con
secondo modello e campione umano B2-C2 (D8), stessi numeri di unità/lezioni e progressione
Profile Deutsch (D9), lingua di riferimento it (D10), storage `linguai.tedesco.v1` schema 2
senza migrazione e chiavi LLM condivise (D11), design system copiato e adattato (D12).

## Requisiti

Un requisito per riga. "Originale" = `upstream` (`../versione-statica`) al commit `e0dd4b8`.

- R1 - Lo stato si salva sotto `linguai.tedesco.v1` con `schema: 2`; un profilo `linguai.italiano.v2` o `linguai.italiano.pl.v1` presente nello stesso localStorage non viene letto, importato né cancellato.
- R2 - Le chiavi LLM restano in `linguai.llm.v1`, condivise con l'app italiana (stessa origin).
- R3 - Le cache del service worker hanno un prefisso proprio (non `linguai-`); `activate` cancella solo cache con quel prefisso e lascia intatte le `linguai-*` dell'app italiana.
- R4 - URL, metadati social, 404, manifest e nomi dei file esportati (backup, ics, retention, anki) usano `impara-tedesco`; nessun file servito contiene il path `/impara-italiano/`.
- R5 - Le lingue di spiegazione sono esattamente it, en, es, fr, pl; it è il default; `de` non esiste più né come `ui-de.js` né come `data/i18n/de/`.
- R6 - Ogni testo nella lingua insegnata porta `lang="de"`; riconoscimento vocale `de-DE`; la sintesi di riserva sceglie voci `de`.
- R7 - `Verbs.conjugate(infinitiv, tenseKey)` restituisce 6 forme (ich, du, er/sie/es, wir, ihr, sie/Sie) o `null` per posizione assente, per i tempi `praes, praet, perf, plusq, fut1, fut2, konj2, konj2Verg, konj1, imper`.
- R8 - La coniugazione copre verbi deboli, forti, misti, modali, `sein/haben/werden/wissen`, prefissi separabili e inseparabili, `-ieren`, riflessivi, scelta dell'ausiliare haben/sein, imperativo (du/ihr/wir/Sie).
- R9 - Il coniugatore accetta infiniti tedeschi (`machen`, `sich waschen`, `aufstehen`, `wandern`) e rifiuta stringhe che non lo sono con lo stato di errore esistente.
- R10 - Il lemmatizzatore riporta al lemma forme flesse di sostantivi (plurale, Umlaut, genitivo, dativo plurale), aggettivi (desinenze, comparativo, superlativo) e verbi (tutte le forme di `Verbs`); il verbo separabile con particella staccata nella frase è un limite dichiarato.
- R11 - L'esercizio `gender` ha come opzioni predefinite `der/die/das`; il caso si esercita con `opts` espliciti (es. `den/dem/des`) e `validate.mjs` rifiuta un `items[].a` fuori da `opts`.
- R12 - Una risposta che differisce dall'attesa solo per ae/oe/ue/ss al posto di ä/ö/ü/ß, o per la minuscola di un sostantivo, è "quasi corretta" con avviso; la barra dei caratteri offre ä ö ü ß Ä Ö Ü.
- R13 - I 7 generatori di drill producono esercizi tedeschi corretti (numeri, ore, date, pronomi, ausiliare del Perfekt, preposizione+caso+contrazione, articolo per caso), restano solo scritti e deterministici per seme.
- R14 - Le flashcard riconoscono l'articolo tedesco del lemma nelle modalità che lo usano; la chiave della carta resta il solo campo `it` (che contiene tedesco, D4).
- R15 - Ogni sostantivo nel vocabolario ha genere (articolo nel campo `it`) e plurale nel campo neutro `plural` (o `"-"` per singularia tantum) [subordinato alla decisione DA-3 del piano].
- R16 - Lo strato neutro ammette ä ö ü ß é e rifiuta à è ì ò ù e le lettere specifiche delle altre lingue di spiegazione (ą ę ł ż ź ć ń ś ñ ç …); nessun valore neutro contiene stopword italiane note.
- R17 - `parity.mjs` usa `it` come riferimento e `validate.mjs` senza argomento valida `it`.
- R18 - Il corso ha 37 unità e 170 lezioni con la stessa distribuzione per livello e per unità dell'originale; per lezione il numero di esercizi sta entro ±15% dell'originale e ogni tipo di esercizio presente in un'unità dell'originale è presente nell'unità tedesca corrispondente (12 tipi nelle lezioni: `truefalse` vive solo nelle letture e `minpair` è generato a runtime da `phonetics.js`).
- R19 - La progressione grammaticale segue Profile Deutsch ed è fissata in `specs/german-course/curriculum.md`; ogni tag di lezione esiste in `GRAMMAR_REF`.
- R20 - I blocchi `{contrast}` e `{trap}` sono scritti per ciascuna lingua di spiegazione sul contrasto di quella lingua col tedesco, non tradotti dall'italiano.
- R21 - Ogni lotto di contenuto generato ha un verdetto `pass` del secondo modello registrato in `specs/german-course/reviews/`; le unità B2-C2 hanno in più un esito umano su campione.
- R22 - Ogni frase dello strato neutro destinata alla voce ha un mp3 de-DE; nessun mp3 orfano resta nel repo; `audio_hash()` e `Recordings.hash()` restano gemelli e invariati.
- R23 - Il simulatore "in stile Goethe-Zertifikat B1" ha 4 moduli (Lesen, Hören, Schreiben, Sprechen), dichiara a schermo di non essere ufficiale, non usa materiali ufficiali, assegna punteggio solo a Lesen e Hören e non mostra verdetti del modello su Schreiben e Sprechen.
- R24 - I falsi amici esistono per ciascuna coppia IT/EN/ES/FR/PL→DE, scritti per lingua; `check-falsi-amici.mjs` è verde.
- R25 - I set di coppie minime sono tedeschi e ogni coppia passa `check_minpairs.py` (le due registrazioni sono distinguibili).
- R26 - Letture, compiti di scrittura, biblioteca, conversazioni, scenari chat e lista di frequenza sono tedeschi, nello stesso numero dell'originale; la frequenza viene da Tatoeba `deu` e conserva la maiuscola dei sostantivi.
- R27 - I prompt LLM trattano il tedesco come lingua giudicata e conoscono le 5 lingue di spiegazione.
- R28 - Nome, bandiera e palette del design system sono quelli del corso di tedesco; `contrast.spec.js` è verde in entrambi i temi.
- R29 - PWA: `check_precache.mjs` e `check_swversion.mjs` verdi a ogni fase; l'app funziona da `file://`.
- R30 - Il test di piazzamento funziona con qualunque numero di livelli registrati (1-6).
- R31 - A ogni chiusura di fase sono verdi: lint, `npm test`, mutazioni, DOM, `validate.mjs` per le 5 lingue, `parity.mjs`, precache, swversion, coverage ≥ 99.
- R32 - L'originale `versione-statica` non viene modificato; nessun push dal piano.
- R33 - `CLAUDE.md` descrive il tedesco come lingua insegnata, il significato D4 dei campi `it*` e le nuove voci e prefissi.

## Definition of Done

- [ ] `npm run check:porting -- --all` esce 0: 37/37 unità con stadi core-de, it, en, es, fr, pl, audio, review (e human per B2-C2) completi.
- [ ] `node scripts/validate.mjs <lang>` esce 0 per it, en, es, fr, pl e le statistiche stampano 37 unità / 170 lezioni con la distribuzione A1 10/50, A2 8/40, B1 4/20, B2 6/24, C1 5/20, C2 4/16.
- [ ] `node scripts/parity.mjs` esce 0 con riferimento `it`.
- [ ] `npm run test:all` e `node scripts/coverage.mjs --min 99` verdi.
- [ ] Dato `linguai.italiano.v2` con 12 lezioni completate in localStorage, quando l'app tedesca si apre per la prima volta, allora mostra il benvenuto e `linguai.italiano.v2` è byte-identico dopo il primo salvataggio.
- [ ] Data la cache `linguai-shell-v35.x`, quando il SW tedesco si attiva, allora la cache esiste ancora e la shell tedesca vecchia è cancellata (test unitario).
- [ ] `Verbs.conjugate("aufstehen","perf")` = `["bin aufgestanden","bist aufgestanden","ist aufgestanden","sind aufgestanden","seid aufgestanden","sind aufgestanden"]`; `Verbs.conjugate("nehmen","imper")[1]` = `"nimm"`; il golden file passa per intero.
- [ ] Data la risposta attesa `die Straße`, quando lo studente scrive `die Strasse`, allora l'esito è quasi corretto con avviso; con `die strasse` lo stesso; con `die Strase` è errato.
- [ ] Il simulatore Goethe stile B1 completa le 2 prove; il report mostra punti solo per Lesen e Hören (test `cils-report.test.mjs`).
- [ ] `uv run --script scripts/build_audio.py --dry-run` riporta 0 file mancanti e `npm run audio:prune` (dry-run) riporta 0 orfani.
- [ ] `grep -rIl "impara-italiano" index.html 404.html sw.js manifest.webmanifest package.json assets scripts` non restituisce nulla.
