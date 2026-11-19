# Curriculum del percorso PFL "Deutsch für die Pflege" (task 1.12)

Contratto dei lotti di contenuto delle fasi 1-3. Fissa per ogni unità tema, obiettivi, livello
reale, tag e le coppie Fachsprache / Laiensprache su cui poggiano i blocchi `{contrast}`. Un
cambiamento di progressione passa da qui prima che dai dati.

- Pubblico: infermiere e infermieri formati all'estero che lavorano o lavoreranno in Germania
  (ospedale, Altenheim, ambulante). Ingresso consigliato: B1 generale.
- Pseudo-livello `PFL`, `cefrLabel: "B1-B2"`, `sequential: false`: fuori dal piazzamento e dalla
  catena "prossima lezione". Ogni lezione porta il `cefr` QCER reale (`B1` o `B2`), mai `PFL`.
- Id: `pfl-u01` ... `pfl-u09`, lezioni `l1`-`l4` + `test` (5 per unità, 45 in tutto), file
  `data/core/pfl-0N.js` e `data/i18n/<lang>/pfl-0N.js`.
- Taglia per lezione come le unità B1: circa 12 vocaboli, 10 esercizi, almeno 6 tipi diversi.
  Il `test` mescola le quattro lezioni.
- Tag: solo id esistenti di `GRAMMAR_REF` (nessun id nuovo serve). La grammatica è al servizio
  della situazione di reparto, non ripassata in astratto.
- **Asse contrastivo dell'intero percorso.** Ogni concetto clinico ha due registri: la
  Fachsprache, di radice latina o greca (`Hypertonie`), che si usa con medici, in consegna e
  nella documentazione; e la Laiensprache tedesca (`Bluthochdruck`), che si usa con pazienti e
  familiari. Chi parla italiano, spagnolo o francese riconosce subito il primo registro e manca
  il secondo; per chi parla inglese il registro latino è meno trasparente (il medico
  anglofono dice `high blood pressure` anche al collega); per chi parla polacco i termini
  latini sono noti dalla formazione ma la Laiensprache tedesca è del tutto opaca. Le note
  `{contrast}` si scrivono per lingua, non si traducono.
- Rubrica fissa nelle nakładki: ogni lezione con coppie Fach/Laien ha almeno un `{trap}` sul
  "falso amico di reparto" (es. it. `ricoverare` ≠ `aufnehmen` nel senso generale; it.
  `infermiera` / de. `Pflegefachfrau`, `Krankenschwester` antiquato).
- Sicurezza del contenuto: nessun dosaggio reale di farmaci specifici, nessuna indicazione
  terapeutica presentata come raccomandazione. Valori di riferimento (pressione, temperatura,
  glicemia) solo come cifre tonde didattiche e dichiarate tali nelle note. Revisione di
  un'infermiera a fine flusso (fase 7); fino ad allora l'avviso del livello lo dichiara.

## Unità

| Unità | Lez. | CEFR | Tema | Can-do | Tag |
|---|---|---|---|---|---|
| pfl-u01 | 5 | B1 | Aufnahme und Anamnese | accogliere un paziente in reparto; chiedere disturbi, malattie pregresse, allergie e farmaci; passare dal registro tecnico a quello per il paziente | g-register, g-satz-v2, g-pron-dat, g-verben-dativ, g-perfekt, g-wortbildung |
| pfl-u02 | 5 | B1 | Vitalzeichen und Messwerte | guidare il paziente durante una misurazione; leggere e dire valori e unità; riferire un valore alterato | g-imperativ, g-trennbare-verben, g-komparation, g-wortbildung, g-passiv |
| pfl-u03 | 5 | B1 | Grundpflege und Mobilisation | accompagnare igiene, vestizione, alimentazione ed eliminazione; mobilizzare e posizionare; dire cosa il paziente fa da solo | g-reflexivverben, g-wechselpraep, g-modalverben, g-infinitiv-zu |
| pfl-u04 | 5 | B1 | Schmerz und Notfall | chiedere e descrivere il dolore; riconoscere un'emergenza e chiamare aiuto; raccontare una caduta | g-adjektivdeklination, g-nebensatz-temporal, g-imperativ, g-perfekt, g-praeteritum |
| pfl-u05 | 5 | B1 | Medikamente und Beipackzettel | nominare forme e vie di somministrazione; spiegare orari di assunzione; leggere un foglietto illustrativo | g-wortbildung, g-temporalangaben, g-praep-dativ, g-konditionalsatz, g-passiv, g-modalverben |
| pfl-u06 | 5 | B2 | Dienstübergabe und Pflegebericht | fare una consegna orale; scrivere un rapporto di cura; leggere una pianificazione assistenziale e le abbreviazioni | g-praeteritum, g-konnektoren, g-nominalstil, g-passiv, g-nebensatz-final, g-register |
| pfl-u07 | 5 | B2 | Gespräche mit Patienten und Angehörigen | spiegare in parole semplici; rassicurare; informare i familiari nei limiti del segreto professionale; parlare con una persona con demenza | g-register, g-nebensatz-dass, g-modalpartikeln, g-konjunktiv2, g-konjunktiv1 |
| pfl-u08 | 5 | B2 | Visite, Anordnungen und Team | seguire il giro visita; capire e verificare una prescrizione; partecipare a una riunione d'équipe; telefonare a laboratorio e farmacia | g-passiv, g-nebensatz-dass, g-konnektoren, g-praep-verben, g-konjunktiv2 |
| pfl-u09 | 5 | B2 | Hygiene, Wunden und Entlassung | spiegare misure di igiene e isolamento; descrivere una ferita e una medicazione; preparare la dimissione | g-imperativ, g-passiv, g-adjektivdeklination, g-futur, g-modalverben |

Lezioni:
- pfl-u01: l1 Guten Tag, ich bin Ihre Pflegefachkraft [g-register, g-satz-v2]; l2 Wo tut es weh? [g-pron-dat, g-verben-dativ]; l3 Der Anamnesebogen [g-perfekt, g-satz-v2]; l4 Fachsprache und Laiensprache [g-wortbildung, g-register]; test [g-register, g-pron-dat, g-perfekt]
- pfl-u02: l1 Machen Sie bitte den Arm frei [g-imperativ, g-trennbare-verben]; l2 Werte und Einheiten [g-komparation]; l3 Fieber, Puls und Blutzucker [g-wortbildung, g-komparation]; l4 Auffällige Werte melden [g-passiv]; test [g-imperativ, g-komparation, g-passiv]
- pfl-u03: l1 Waschen und Anziehen [g-reflexivverben]; l2 Mobilisation und Lagerung [g-wechselpraep]; l3 Essen, Trinken, Ausscheiden [g-modalverben]; l4 Selbstständig oder mit Hilfe? [g-infinitiv-zu, g-modalverben]; test [g-reflexivverben, g-wechselpraep, g-modalverben]
- pfl-u04: l1 Wie stark sind die Schmerzen? [g-adjektivdeklination]; l2 Ein Notfall [g-nebensatz-temporal]; l3 Hilfe holen [g-imperativ]; l4 Der Sturz [g-perfekt, g-praeteritum]; test [g-adjektivdeklination, g-nebensatz-temporal, g-perfekt]
- pfl-u05: l1 Tabletten, Tropfen, Spritzen [g-wortbildung]; l2 Vor oder nach dem Essen? [g-temporalangaben, g-praep-dativ]; l3 Der Beipackzettel [g-konditionalsatz]; l4 Medikamente richten [g-passiv, g-modalverben]; test [g-temporalangaben, g-konditionalsatz, g-passiv]
- pfl-u06: l1 Die Übergabe [g-praeteritum, g-konnektoren]; l2 Der Pflegebericht [g-nominalstil, g-passiv]; l3 Die Pflegeplanung [g-nebensatz-final]; l4 Abkürzungen im Stationsalltag [g-register]; test [g-praeteritum, g-nominalstil, g-nebensatz-final]
- pfl-u07: l1 Einfach erklären [g-register, g-nebensatz-dass]; l2 Beruhigen und ermutigen [g-modalpartikeln, g-konjunktiv2]; l3 Angehörige informieren [g-konjunktiv1, g-nebensatz-dass]; l4 Menschen mit Demenz [g-satz-v2, g-register]; test [g-register, g-konjunktiv2, g-konjunktiv1]
- pfl-u08: l1 Die Visite [g-passiv]; l2 Anordnungen verstehen und nachfragen [g-nebensatz-dass, g-konnektoren]; l3 Die Teambesprechung [g-praep-verben]; l4 Am Telefon: Labor, Apotheke, Hausarzt [g-konjunktiv2]; test [g-passiv, g-praep-verben, g-konjunktiv2]
- pfl-u09: l1 Hygiene und Isolation [g-imperativ, g-passiv]; l2 Wunden und Verbandswechsel [g-adjektivdeklination]; l3 Die Entlassung [g-futur]; l4 Was darf ich, was muss ich? [g-modalverben]; test [g-passiv, g-adjektivdeklination, g-futur]

## Coppie Fachsprache / Laiensprache per unità

Il nucleo del lessico di ogni unità. Le coppie entrano nei vocaboli (`vocab[].it` porta il
termine tedesco con articolo; la Laiensprache può essere un vocabolo a sé) e negli esercizi
`match`; le note `{contrast}` le commentano per lingua.

- pfl-u01: die Anamnese / die Vorgeschichte; die Hypertonie / der Bluthochdruck; der Diabetes mellitus / die Zuckerkrankheit; die Zephalgie / die Kopfschmerzen; die Nausea / die Übelkeit; die Emesis / das Erbrechen; die Dyspnoe / die Atemnot; die Vertigo / der Schwindel; die Obstipation / die Verstopfung; die Diarrhö / der Durchfall; das Abdomen / der Bauch; die Allergie (identico nei due registri).
- pfl-u02: die Vitalzeichen; die Tachykardie / das Herzrasen; die Bradykardie / der langsame Puls; die Hypotonie / der niedrige Blutdruck; die Hyperthermie, das Fieber; die Hypoglykämie / die Unterzuckerung; die Hyperglykämie / der hohe Blutzucker; die Sauerstoffsättigung; die Atemfrequenz; der Blutdruck (RR, nach Riva-Rocci).
- pfl-u03: der Dekubitus / das Druckgeschwür; die Dysphagie / die Schluckstörung; die Inkontinenz / die Blasenschwäche; die Miktion / das Wasserlassen; die Defäkation / der Stuhlgang; die Mobilisation; die Lagerung; die Kontraktur / die Gelenkversteifung; die Thrombose / das Blutgerinnsel; die Prophylaxe / die Vorbeugung.
- pfl-u04: die Analgesie / die Schmerzlinderung; das Analgetikum / das Schmerzmittel; die Synkope / die Ohnmacht; der Apoplex / der Schlaganfall; der Myokardinfarkt / der Herzinfarkt; die Reanimation / die Wiederbelebung; die Fraktur / der Knochenbruch; das Hämatom / der Bluterguss; somnolent / schläfrig; bewusstlos.
- pfl-u05: oral / über den Mund; subkutan / unter die Haut; intravenös / in die Vene; die Applikation / die Gabe; die Kontraindikation / die Gegenanzeige; die Nebenwirkung; die Wechselwirkung; die Dosierung; nüchtern; das Antibiotikum; das Antikoagulans / der Blutverdünner.
- pfl-u06: die Übergabe; der Pflegebericht; die Pflegeplanung; das Pflegeproblem; die Ressource; der Allgemeinzustand (AZ); der Ernährungszustand (EZ); ohne Befund (o.B.); per os (p.o.); der Blutzucker (BZ); die Vitalzeichen (VZ); bei Bedarf (b.B.).
- pfl-u07: die Diagnose / was der Patient hat; die Prognose / wie es weitergeht; die Schweigepflicht; die Angehörigen; die Demenz / die Vergesslichkeit (con nota: non equivalenti); die Desorientierung / die Verwirrtheit; die Validation; die Palliativpflege.
- pfl-u08: die Visite; die Anordnung; die Indikation / der Grund für die Behandlung; die Therapie / die Behandlung; der Befund; das Labor; das Blutbild; die Röntgenaufnahme; die Rückfrage; der Dienstplan.
- pfl-u09: die Infektion / die Ansteckung; die Desinfektion; die Isolation; der Keim, multiresistente Erreger (MRSA); die Wunde; die Inflammation / die Entzündung; die Rötung, die Schwellung; der Verbandswechsel; die Entlassung; das Entlassmanagement / die Überleitung; das Hilfsmittel; der Pflegegrad.

## Tag usati dal percorso

g-adjektivdeklination, g-futur, g-imperativ, g-infinitiv-zu, g-komparation, g-konditionalsatz,
g-konjunktiv1, g-konjunktiv2, g-konnektoren, g-modalpartikeln, g-modalverben,
g-nebensatz-dass, g-nebensatz-final, g-nebensatz-temporal, g-nominalstil, g-passiv, g-perfekt,
g-praep-dativ, g-praep-verben, g-praeteritum, g-pron-dat, g-reflexivverben, g-register,
g-satz-v2, g-temporalangaben, g-trennbare-verben, g-verben-dativ, g-wechselpraep, g-wortbildung.
