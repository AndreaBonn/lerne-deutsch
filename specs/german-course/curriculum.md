# Curriculum del corso di tedesco (contratto T1.01)

Contratto per R18 e R19. Fissa per ogni unità il tema, gli obiettivi, i target grammaticali e i
tag, e l'elenco chiuso degli id di `GRAMMAR_REF` tedeschi. I lotti di contenuto (F1-F4) scrivono
le lezioni contro questo file; un cambiamento di progressione passa da qui prima che dal codice.

- Lingua insegnata: tedesco standard de-DE. Varianti austriache e svizzere solo in ricezione
  (lezioni marcate `g-register`), mai come forma attesa negli esercizi.
- Lingue di spiegazione: it, en, es, fr, pl. Lingua di riferimento per la revisione: it.
- Struttura (D9): stessi id di unità dell'originale, stesso numero di lezioni per unità
  (`scripts/porting-target.json`): 37 unità, 170 lezioni. A1 10 unità / 50 lezioni, A2 8 / 40,
  B1 4 / 20, B2 6 / 24, C1 5 / 20, C2 4 / 16.
- Ogni unità chiude con la lezione `<unità>-test`; da A1 a B1 le lezioni sono `l1`-`l4` + test,
  da B2 a C2 `l1`-`l3` + test. L'ultima unità di ogni livello ha come test l'esame finale del
  livello, come nell'originale.
- Progressione: descrittori CEFR e sommari pubblici di Profile Deutsch (A12), non l'ordine
  italiano. Il tema di ogni unità rispecchia la funzione comunicativa dell'unità originale
  (`titleIt` in `data/core/*.js`), trasportata in contesti di lingua tedesca.
- Lessico: i Wortlisten Goethe A1-B1 servono solo come lista di controllo della copertura
  (DA-5). Nessuna frase, esempio o testo viene copiato.
- Tag: ogni lezione ha almeno un tag; ogni tag è un id dell'elenco in fondo; ogni id è usato da
  almeno un'unità. Il titolo leggibile di ogni id sta in `ref:<id>` nelle cinque lingue.

Legenda colonne: **Lez.** numero di lezioni (test incluso); **Can-do** obiettivi comunicativi;
**Tag** unione dei tag delle lezioni dell'unità (dettaglio per lezione sotto ogni tabella).

## A1 (10 unità, 50 lezioni)

| Unità | Lez. | Tema (originale) | Can-do | Grammatica | Lessico | Tag |
|---|---|---|---|---|---|---|
| a1-u01 | 5 | Im Café (Al bar) | salutare e congedarsi; ordinare una bevanda; scegliere fra du e Sie | Präsens ich/du/Sie; verbo in seconda posizione e domande; der/die/das; plurale; articolo al nominativo; "einen Kaffee" come formula | saluti, bevande, numeri 1-20 | g-praesens, g-satz-v2, g-aussprache, g-genus, g-plural, g-artikel-nom, g-register |
| a1-u02 | 5 | Wer bist du? (Chi sei?) | presentarsi (nome, provenienza, lavoro); chiedere dati personali; dire età e numero di telefono | pronomi personali al nominativo; Präsens regolare completo; sein e haben; professione senza articolo, femminile in -in | paesi, lingue, professioni, numeri fino a 100 | g-personalpron, g-praesens, g-genus |
| a1-u03 | 5 | Feierabend (L'aperitivo) | dire cosa piace con gern e mögen; offrire, accettare e rifiutare | verbi forti con cambio vocalico (essen, nehmen, sprechen); accusativo dell'articolo; kein e nicht | cibo e bevande, Kneipe, Biergarten | g-praesens, g-satz-v2, g-artikel-akk, g-negation |
| a1-u04 | 5 | Kleidung kaufen (Vetrine e taglie) | chiedere taglia, colore e prezzo; scegliere fra due capi | aggettivo predicativo invariabile; dieser e welcher; pronomi all'accusativo (ihn, sie, es); sehr, zu, viel | vestiti, colori, taglie, prezzi in euro e franchi | g-adjektivdeklination, g-artikel-nom, g-pron-akk, g-adverbien |
| a1-u05 | 5 | Mein Tag (La giornata) | descrivere la routine; dire e chiedere l'ora; dire cosa si può, si vuole, si deve fare | verbi separabili e parentesi verbale; um, am, im, von ... bis; können, müssen, wollen; avverbi di frequenza e inversione | routine, orari, giorni della settimana | g-trennbare-verben, g-temporalangaben, g-modalverben, g-adverbien, g-satz-v2 |
| a1-u06 | 5 | In der Stadt (In città) | chiedere e dare indicazioni; dire con che mezzo ci si sposta; dire cosa c'è nel quartiere | preposizioni con dativo (mit, zu, bei, aus, von); articolo al dativo; wo? con in/an/auf + dativo; imperativo di cortesia; es gibt | edifici, mezzi pubblici, indicazioni stradali | g-praep-dativ, g-artikel-dat, g-praesens, g-imperativ, g-wechselpraep, g-es, g-artikel-akk |
| a1-u07 | 5 | Im Restaurant (A tavola) | chiedere un tavolo; ordinare; chiedere il conto (zusammen oder getrennt) | möchte e "hätte gern" come formule; accusativo in contesto; einer, eins, welche | menu, piatti di Germania, Austria e Svizzera | g-artikel-akk, g-satz-v2, g-modalverben, g-indefinitpron, g-register |
| a1-u08 | 5 | Familie und Freunde (Le persone) | presentare la famiglia; descrivere aspetto e carattere; confrontare due persone | possessivi al nominativo e accusativo; genitivo sassone dei nomi propri (Annas Bruder); aggettivo predicativo; comparativo con als e so ... wie | famiglia, aspetto fisico, carattere | g-possessiv, g-adjektivdeklination, g-komparation |
| a1-u09 | 5 | Freizeit (Tempo libero) | parlare di hobby e meteo; proporre, accettare e rifiutare un appuntamento | preposizioni con accusativo (für, ohne, um, durch); es regnet; gerade + Präsens al posto della forma progressiva; und, aber, oder, denn | hobby, meteo, cinema e sport | g-praesens, g-temporalangaben, g-es, g-adverbien, g-konnektoren, g-praep-akk |
| a1-u10 | 5 | Mein Wochenende (Uno sguardo indietro) | raccontare a voce il fine settimana; ripassare l'A1 | Perfekt con haben e con sein; participio II regolare, forte e separabile; war e hatte solo come formule | attività del fine settimana, viaggi brevi | g-perfekt, g-trennbare-verben, g-satz-v2, g-praesens, g-artikel-akk, g-praep-dativ, g-genus |

Lezioni:
- a1-u01: l1 Guten Tag, einen Kaffee [g-praesens, g-satz-v2, g-aussprache]; l2 der, die, das [g-genus, g-plural]; l3 der oder ein? [g-artikel-nom]; l4 Wie geht's? du oder Sie [g-register, g-satz-v2]; test [g-praesens, g-genus, g-artikel-nom]
- a1-u02: l1 Ich heiße ... [g-personalpron, g-praesens]; l2 sein, haben e i numeri [g-praesens]; l3 Was sind Sie von Beruf? [g-praesens, g-genus]; l4 wohnen, arbeiten, kommen [g-praesens, g-personalpron]; test [g-praesens, g-personalpron]
- a1-u03: l1 Ich trinke gern ... [g-praesens, g-satz-v2]; l2 nehmen, essen, sprechen [g-praesens]; l3 Einen Saft, bitte [g-artikel-akk]; l4 Kein Bier, nicht heute [g-negation, g-artikel-akk]; test [g-praesens, g-artikel-akk, g-negation]
- a1-u04: l1 Der Pullover ist rot [g-adjektivdeklination]; l2 Dieser oder der da? [g-artikel-nom, g-adjektivdeklination]; l3 Was kostet ...? Ich nehme ihn [g-pron-akk]; l4 sehr, zu, viel, wenig [g-adverbien]; test [g-adjektivdeklination, g-pron-akk, g-adverbien]
- a1-u05: l1 Ich stehe um sieben auf [g-trennbare-verben, g-temporalangaben]; l2 Wie spät ist es? [g-temporalangaben]; l3 Ich kann, ich will, ich muss [g-modalverben]; l4 Morgens trinke ich immer ... [g-adverbien, g-satz-v2]; test [g-trennbare-verben, g-modalverben, g-temporalangaben]
- a1-u06: l1 mit dem Bus, zum Bahnhof [g-praep-dativ, g-artikel-dat]; l2 gehen, fahren, kommen aus [g-praesens, g-praep-dativ]; l3 Wo ist der Bahnhof? Gehen Sie geradeaus [g-imperativ, g-wechselpraep]; l4 Es gibt, es gibt keinen [g-es, g-artikel-akk]; test [g-praep-dativ, g-artikel-dat, g-wechselpraep]
- a1-u07: l1 Ein Tisch für zwei [g-artikel-akk, g-satz-v2]; l2 Ich hätte gern das Schnitzel [g-modalverben]; l3 Ich nehme zwei. Haben Sie welche? [g-indefinitpron]; l4 Zahlen, bitte! [g-register]; test [g-artikel-akk, g-indefinitpron, g-modalverben]
- a1-u08: l1 Meine Mutter, mein Chef [g-possessiv]; l2 Wie sieht er aus? [g-adjektivdeklination]; l3 Nett oder unfreundlich? [g-adjektivdeklination]; l4 Größer als du [g-komparation]; test [g-possessiv, g-komparation, g-adjektivdeklination]
- a1-u09: l1 Was machst du am Wochenende? [g-praesens, g-temporalangaben]; l2 Es regnet [g-es]; l3 Ich lese gerade [g-praesens, g-adverbien]; l4 Gehen wir ins Kino? [g-konnektoren, g-praep-akk]; test [g-praep-akk, g-konnektoren, g-es]
- a1-u10: l1 Ich habe gegessen, ich habe gesehen [g-perfekt]; l2 Ich bin gefahren, ich bin aufgestanden [g-perfekt, g-trennbare-verben]; l3 Mein Wochenende [g-perfekt, g-satz-v2]; l4 Ripasso A1 [g-praesens, g-artikel-akk, g-praep-dativ]; test, esame finale A1 [g-praesens, g-perfekt, g-artikel-akk, g-genus]

## A2 (8 unità, 40 lezioni)

| Unità | Lez. | Tema (originale) | Can-do | Grammatica | Lessico | Tag |
|---|---|---|---|---|---|---|
| a2-u01 | 5 | Früher und heute (Ieri e oggi) | raccontare l'infanzia; collegare due eventi nel tempo; spiegare un motivo | Präteritum di sein, haben e modali; prima subordinata con verbo in fondo (als, wenn); weil; sich erinnern | infanzia, scuola, città d'origine | g-praeteritum, g-nebensatz-temporal, g-perfekt, g-nebensatz-weil, g-reflexivverben |
| a2-u02 | 5 | Unterwegs (In viaggio) | comprare un biglietto e chiedere informazioni in stazione; parlare di piani di viaggio; gestire una prenotazione | wohin? nach, zu, in + accusativo; Futur I e Präsens con indicatore temporale; wenn + Perfekt per un'azione futura compiuta | treno, hotel, paesi e città | g-wechselpraep, g-praep-dativ, g-futur, g-perfekt, g-register, g-nebensatz-temporal |
| a2-u03 | 5 | Ich sehe ihn, ich helfe ihm (Lo vedo, gli parlo) | parlare di persone senza ripeterne il nome; chiedere e offrire aiuto; dare istruzioni informali | pronomi all'accusativo e al dativo; verbi con dativo (helfen, gefallen, gehören); ordine degli oggetti; imperativo du/ihr; mal, doch | relazioni, favori, regali | g-pron-akk, g-pron-dat, g-verben-dativ, g-wortstellung, g-imperativ, g-modalpartikeln |
| a2-u04 | 5 | Gesundheit (Salute) | descrivere sintomi; fissare un appuntamento dal medico; dare e ricevere consigli | mir tut ... weh; bei e zu + dativo; Konjunktiv II di consiglio (du solltest, ich würde); dass; deshalb | corpo, sintomi, farmacia, Krankenkasse | g-pron-dat, g-verben-dativ, g-praep-dativ, g-temporalangaben, g-konjunktiv2, g-reflexivverben, g-nebensatz-dass, g-konnektoren |
| a2-u05 | 5 | Wohnen (Casa e quartiere) | capire un annuncio di affitto; descrivere la casa; segnalare un guasto | aggettivo dopo ein, kein e possessivo; stellen/stehen, legen/liegen; genere dei composti (das Wohnzimmer); Könnten Sie ...? | stanze, mobili, WG, Hausverwaltung | g-adjektivdeklination, g-wechselpraep, g-wortbildung, g-genus, g-konjunktiv2, g-register |
| a2-u06 | 5 | Im Büro (Al lavoro) | telefonare e lasciare un messaggio; scrivere una mail formale breve; descrivere le abitudini del posto di lavoro; intervenire in riunione | Könnten Sie ...?; interrogative indirette con ob e W-; man; zuerst, dann, außerdem | ufficio, telefono, mail, riunioni | g-konjunktiv2, g-nebensatz-dass, g-register, g-man, g-konnektoren |
| a2-u07 | 5 | Feste und Bräuche (Feste e tradizioni) | fare gli auguri; invitare e rispondere a un invito; confrontare usanze di Germania, Austria e Svizzera | gratulieren + dativo; Hast du Lust, ... zu ...?; date (am 3. Oktober); aggettivo usato come avverbio | feste, regali, Grüß Gott e Grüezi | g-verben-dativ, g-temporalangaben, g-infinitiv-zu, g-register, g-adverbien |
| a2-u08 | 5 | Pläne (Progetti) | parlare di intenzioni e progetti; ripassare tempi, pronomi e subordinate dell'A2 | vorhaben + zu; ripasso dei tempi; ripasso di casi e pronomi; weil, dass, wenn | lavoro, studio, trasferimenti | g-infinitiv-zu, g-futur, g-perfekt, g-praeteritum, g-konjunktiv2, g-pron-akk, g-pron-dat, g-artikel-dat, g-nebensatz-weil, g-nebensatz-dass, g-nebensatz-temporal |

Lezioni:
- a2-u01: l1 Als Kind war ich ... [g-praeteritum]; l2 Als ich klein war, ... [g-nebensatz-temporal, g-perfekt]; l3 Ich musste, ich durfte, weil ... [g-praeteritum, g-nebensatz-weil]; l4 Erinnerst du dich? [g-reflexivverben]; test [g-praeteritum, g-nebensatz-temporal, g-nebensatz-weil]
- a2-u02: l1 Am Bahnhof: nach Wien, in die Schweiz [g-wechselpraep, g-praep-dativ]; l2 Morgen fahre ich, ich werde fahren [g-futur]; l3 Ich habe ein Zimmer reserviert [g-perfekt, g-register]; l4 Wenn ich angekommen bin, rufe ich an [g-nebensatz-temporal, g-futur]; test [g-futur, g-wechselpraep, g-nebensatz-temporal]
- a2-u03: l1 ihn, sie, es [g-pron-akk]; l2 Ich helfe dir, das gefällt mir [g-pron-dat, g-verben-dativ]; l3 Ich gebe es ihm [g-wortstellung, g-pron-dat]; l4 Sag mal! Ruf mich doch an! [g-imperativ, g-modalpartikeln]; test [g-pron-akk, g-pron-dat, g-verben-dativ]
- a2-u04: l1 Mir tut der Kopf weh [g-pron-dat, g-verben-dativ]; l2 Beim Arzt [g-praep-dativ, g-temporalangaben]; l3 Du solltest dich ausruhen [g-konjunktiv2, g-reflexivverben]; l4 Gesund leben [g-nebensatz-dass, g-konnektoren]; test [g-konjunktiv2, g-nebensatz-dass, g-pron-dat]
- a2-u05: l1 Ich suche eine helle Wohnung [g-adjektivdeklination]; l2 Wohin stelle ich das Sofa? [g-wechselpraep]; l3 das Wohnzimmer, die Küche [g-wortbildung, g-genus]; l4 Die Heizung ist kaputt [g-konjunktiv2, g-register]; test [g-wechselpraep, g-adjektivdeklination, g-wortbildung]
- a2-u06: l1 Könnten Sie mich zurückrufen? [g-konjunktiv2, g-nebensatz-dass]; l2 Sehr geehrte Frau ... [g-register]; l3 Hier macht man das so [g-man]; l4 In der Besprechung [g-konnektoren]; test [g-konjunktiv2, g-man, g-register]
- a2-u07: l1 Herzlichen Glückwunsch! [g-verben-dativ, g-temporalangaben]; l2 Hast du Lust, mitzukommen? [g-infinitiv-zu]; l3 Deutschland, Österreich, Schweiz [g-register]; l4 normalerweise, langsam [g-adverbien]; test [g-infinitiv-zu, g-adverbien, g-verben-dativ]
- a2-u08: l1 Ich habe vor, ... zu ... [g-infinitiv-zu, g-futur]; l2 Ripasso: i tempi [g-perfekt, g-praeteritum, g-futur, g-konjunktiv2]; l3 Ripasso: casi e pronomi [g-pron-akk, g-pron-dat, g-artikel-dat]; l4 Pronti per il B1 [g-nebensatz-weil, g-nebensatz-dass, g-nebensatz-temporal]; test, esame finale A2 [g-perfekt, g-praeteritum, g-pron-dat, g-konjunktiv2, g-nebensatz-weil]

## B1 (4 unità, 20 lezioni)

| Unità | Lez. | Tema (originale) | Can-do | Grammatica | Lessico | Tag |
|---|---|---|---|---|---|---|
| b1-u01 | 5 | Wenn ich du wäre (Penso che sia) | esprimere opinioni; formulare ipotesi e desideri irreali; ammettere e controbattere | Konjunktiv II completo al presente (wäre, hätte, würde + infinito, modali); periodo ipotetico reale e irreale al presente; Ich finde, dass ...; obwohl e trotzdem | opinioni, desideri, scelte di vita | g-konjunktiv2, g-konditionalsatz, g-nebensatz-dass, g-satz-v2, g-konzessiv, g-konnektoren |
| b1-u02 | 5 | Woran denkst du? (Me lo dai?) | parlare di interessi, attese e preoccupazioni; descrivere persone e cose con precisione; parlare in modo generico | verbi con preposizione fissa; darauf, worauf; frasi relative al nominativo, accusativo, dativo e con preposizione; jemand, niemand, jeder | interessi, sentimenti, oggetti quotidiani | g-praep-verben, g-relativsatz, g-indefinitpron |
| b1-u03 | 5 | Ämter und Verträge (Burocrazia italiana) | fare l'Anmeldung e aprire un conto; capire un contratto d'affitto o di lavoro; presentare un reclamo | passivo (Vorgangspassiv) al presente e al Präteritum; genitivo e wegen, innerhalb, während; um ... zu e damit | Bürgeramt, Steuer-ID, banca, contratti | g-passiv, g-register, g-genitiv, g-nebensatz-final, g-konjunktiv2 |
| b1-u04 | 5 | Meinungen und Medien (Opinioni e media) | riferire ciò che qualcuno ha detto; capire un articolo di giornale; esporre e difendere un'opinione | dass nel discorso riferito; Präteritum completo nei testi scritti; Plusquamperfekt con nachdem e bevor; zwar ... aber, sowohl ... als auch; declinazione completa dell'aggettivo | stampa, radio, social media | g-nebensatz-dass, g-perfekt, g-praeteritum, g-plusquamperfekt, g-nebensatz-temporal, g-konnektoren, g-adjektivdeklination, g-passiv, g-relativsatz, g-konjunktiv2, g-praep-verben |

Lezioni:
- b1-u01: l1 ich wäre, ich hätte, ich würde [g-konjunktiv2]; l2 Wenn ich Zeit hätte ... [g-konjunktiv2, g-konditionalsatz]; l3 Ich finde, dass ... Meiner Meinung nach ... [g-nebensatz-dass, g-satz-v2]; l4 Obwohl ..., trotzdem [g-konzessiv, g-konnektoren]; test [g-konjunktiv2, g-konditionalsatz, g-konzessiv]
- b1-u02: l1 Ich warte auf dich [g-praep-verben]; l2 Darauf freue ich mich. Worauf? [g-praep-verben]; l3 Das Buch, das ich gelesen habe [g-relativsatz]; l4 jemand, niemand, jeder [g-indefinitpron]; test [g-praep-verben, g-relativsatz, g-indefinitpron]
- b1-u03: l1 Die Anmeldung [g-passiv, g-register]; l2 Bank und Mietvertrag [g-genitiv, g-register]; l3 Ich beschwere mich, damit ... [g-nebensatz-final, g-konjunktiv2]; l4 Der Arbeitsvertrag [g-passiv, g-genitiv]; test [g-passiv, g-genitiv, g-nebensatz-final]
- b1-u04: l1 Sie hat gesagt, dass ... [g-nebensatz-dass, g-perfekt]; l2 Einen Artikel lesen [g-praeteritum, g-plusquamperfekt, g-nebensatz-temporal]; l3 zwar ... aber, sowohl ... als auch [g-konnektoren]; l4 Seine Meinung vertreten [g-adjektivdeklination, g-konnektoren]; test, esame finale B1 [g-passiv, g-relativsatz, g-konjunktiv2, g-plusquamperfekt, g-praep-verben]

## B2 (6 unità, 24 lezioni)

| Unità | Lez. | Tema (originale) | Can-do | Grammatica | Lessico | Tag |
|---|---|---|---|---|---|---|
| b2-u01 | 4 | Hätte ich das gewusst (Se fosse) | parlare di occasioni mancate; fare paragoni irreali | Konjunktiv II al passato (hätte gemacht, wäre gegangen); doppio infinito con modali (hätte anrufen sollen); als ob, als wenn | scelte, rimpianti, comportamenti | g-konjunktiv2, g-modalverben, g-konnektoren |
| b2-u02 | 4 | Bedingungen (Periodo ipotetico) | formulare condizioni reali e irreali al presente e al passato; variare il registro | i tipi di periodo ipotetico; falls, sofern, es sei denn; condizionale senza wenn (Hätte ich ...); bloß, nur | decisioni, imprevisti | g-konditionalsatz, g-register, g-modalpartikeln, g-konjunktiv2 |
| b2-u03 | 4 | Passiv und Erzählzeit (Passivo e remoto) | descrivere processi e risultati; capire un racconto scritto; condensare una frase | passivo al Perfekt e con modali; Zustandspassiv; Präteritum narrativo dei verbi forti; ohne ... zu, statt ... zu, anstatt dass | storia, racconti, processi tecnici | g-passiv, g-praeteritum, g-infinitiv-zu, g-nebensatz-final |
| b2-u04 | 4 | Gesellschaft und Debatte (Società e dibattito) | discutere di economia, ambiente e tecnologia; sostenere una posizione | n-Deklination (des Kunden, dem Kollegen); einerseits ... andererseits; je ... desto | economia, ambiente, digitale | g-n-deklination, g-konnektoren, g-komparation, g-konjunktiv2, g-konditionalsatz, g-passiv |
| b2-u05 | 4 | Sie sagte, sie sei krank (Me l'ha detto lui) | riferire parole, domande e ordini altrui con distanza | Konjunktiv I (er sei, er habe) e sostituzione con il Konjunktiv II; spostamento di tempo, luogo e persona; ob; sollen negli ordini riferiti | notizie, testimonianze, verbali | g-konjunktiv1, g-temporalangaben, g-nebensatz-dass, g-modalverben |
| b2-u06 | 4 | Auch wenn es regnet (Anche se piove) | esprimere concessioni e contrasti; correggere un'affermazione | obwohl, obgleich, trotz + genitivo, trotzdem; auch wenn, selbst wenn; jedoch, allerdings, sondern, vielmehr | argomentazione, dibattito pubblico | g-konzessiv, g-genitiv, g-konditionalsatz, g-konnektoren, g-register, g-konjunktiv2, g-konjunktiv1, g-passiv |

Lezioni:
- b2-u01: l1 Ich hätte, ich wäre gewesen [g-konjunktiv2]; l2 Ich hätte anrufen sollen [g-konjunktiv2, g-modalverben]; l3 Als ob er nichts wüsste [g-konjunktiv2, g-konnektoren]; test [g-konjunktiv2, g-modalverben]
- b2-u02: l1 I tipi di periodo ipotetico [g-konditionalsatz]; l2 falls, sofern, Hätte ich ... [g-konditionalsatz, g-register]; l3 Wenn ich bloß ... [g-konditionalsatz, g-modalpartikeln]; test [g-konditionalsatz, g-konjunktiv2]
- b2-u03: l1 Es wurde gebaut, es ist repariert worden [g-passiv]; l2 Das Präteritum im Erzählen [g-praeteritum]; l3 Ohne zu fragen, statt zu warten [g-infinitiv-zu, g-nebensatz-final]; test [g-passiv, g-praeteritum]
- b2-u04: l1 Wirtschaft und Arbeit: der Kunde, des Kunden [g-n-deklination]; l2 Umwelt und Technik: je mehr, desto ... [g-konnektoren, g-komparation]; l3 Eine Position vertreten [g-konnektoren, g-konjunktiv2]; test, ripasso unità 1-4 [g-konjunktiv2, g-konditionalsatz, g-passiv, g-n-deklination]
- b2-u05: l1 Dal discorso diretto all'indiretto [g-konjunktiv1]; l2 Tempo, luogo, persona [g-konjunktiv1, g-temporalangaben]; l3 Er fragte, ob ...; sie sagte, ich solle ... [g-konjunktiv1, g-nebensatz-dass, g-modalverben]; test [g-konjunktiv1]
- b2-u06: l1 obwohl, obgleich, trotz [g-konzessiv, g-genitiv]; l2 auch wenn, selbst wenn [g-konzessiv, g-konditionalsatz]; l3 jedoch, allerdings, sondern, vielmehr [g-konnektoren, g-register]; test, esame finale B2 [g-konzessiv, g-konjunktiv2, g-konjunktiv1, g-passiv]

## C1 (5 unità, 20 lezioni)

| Unità | Lez. | Tema (originale) | Can-do | Grammatica | Lessico | Tag |
|---|---|---|---|---|---|---|
| c1-u01 | 4 | Die Gesichter von werden (I valori del si) | riconoscere le funzioni di una sola parola in un testo; descrivere con precisione e intensità | werden come verbo pieno, ausiliare del futuro e del passivo, würde, supposizione; aggettivi sostantivati (der Bekannte, etwas Neues); superlativo assoluto e intensificatori | descrizione, giudizio, qualità | g-werden, g-adjektivdeklination, g-komparation, g-adverbien |
| c1-u02 | 4 | Zustande bringen (Farcela, cavarsela) | usare espressioni verbali idiomatiche; esprimere possibilità e necessità in forma impersonale | Funktionsverbgefüge (zur Verfügung stellen, in Frage kommen); sostituti del passivo (lässt sich, ist zu, -bar); prefissi separabili e inseparabili con cambio di senso (umfahren) | modi di dire, lavoro e progetti | g-funktionsverbgefuege, g-passiv, g-trennbare-verben, g-register |
| c1-u03 | 4 | Register und Textaufbau (Registri e testualità) | capire e riformulare un testo amministrativo; riconoscere il parlato reale; costruire un testo coeso | Nominalstil e Amtsdeutsch; particelle e ellissi del parlato; correlati (darauf, dass; es, dass) e rinvii testuali | amministrazione, conversazione spontanea | g-nominalstil, g-register, g-modalpartikeln, g-konnektoren, g-es, g-werden, g-funktionsverbgefuege |
| c1-u04 | 4 | Er wird wohl müde sein (Sarà stanco) | esprimere supposizioni e gradi di certezza; riferire voci e pretese | Futur I e II di supposizione; modali soggettivi (muss, dürfte, soll, will); wohl, ja, etwa, halt, eben | ipotesi, voci, valutazioni | g-futur, g-modalverben, g-modalpartikeln, g-register |
| c1-u05 | 4 | Nach Abschluss der Arbeit (Finito il lavoro) | condensare informazioni in testi formali; scegliere fra forma compatta e subordinata | participio I e II come attributo; nominalizzazione al posto della subordinata; casi in cui la subordinata resta obbligatoria | relazioni, verbali, testi accademici | g-partizipialattribut, g-nominalstil, g-nebensatz-temporal, g-register, g-futur, g-werden |

Lezioni:
- c1-u01: l1 Una parola, cinque funzioni [g-werden]; l2 der Bekannte, etwas Neues [g-adjektivdeklination]; l3 höchst, äußerst, am besten [g-komparation, g-adverbien]; test [g-werden, g-adjektivdeklination]
- c1-u02: l1 Funktionsverbgefüge [g-funktionsverbgefuege]; l2 Das lässt sich machen, das ist zu erledigen [g-passiv]; l3 umfahren o umfahren? Redewendungen [g-trennbare-verben, g-register]; test [g-funktionsverbgefuege, g-passiv]
- c1-u03: l1 Amtsdeutsch [g-nominalstil, g-register]; l2 So spricht man wirklich [g-modalpartikeln, g-register]; l3 Kohäsion: darauf, dass ... [g-konnektoren, g-es]; test, ripasso unità 1-3 [g-werden, g-funktionsverbgefuege, g-nominalstil]
- c1-u04: l1 Il futuro che non parla del futuro [g-futur]; l2 Er muss krank sein, sie soll reich sein [g-modalverben]; l3 wohl, etwa, halt, eben [g-modalpartikeln, g-register]; test [g-futur, g-modalverben, g-modalpartikeln]
- c1-u05: l1 Partizip I e II come attributo [g-partizipialattribut]; l2 Nominalisierung statt Nebensatz [g-nominalstil, g-nebensatz-temporal]; l3 Quando la subordinata resta [g-nebensatz-temporal, g-register]; test, esame finale C1 [g-partizipialattribut, g-nominalstil, g-futur, g-werden]

## C2 (4 unità, 16 lezioni)

| Unità | Lez. | Tema (originale) | Can-do | Grammatica | Lessico | Tag |
|---|---|---|---|---|---|---|
| c2-u01 | 4 | Erweiterte Attribute (Participi e perifrasi) | leggere e produrre prosa saggistica densa | attributo participiale esteso; Gerundivum (die zu lösende Aufgabe); Funktionsverbgefüge nel testo | saggistica, scienza, diritto | g-partizipialattribut, g-passiv, g-funktionsverbgefuege, g-nominalstil |
| c2-u02 | 4 | Plural und Wortbildung (Plurali e derivazione) | distinguere plurali con significato diverso; capire e formare parole nuove | plurali doppi (Banken/Bänke, Worte/Wörter); composti e Fugenelement; derivazione (-ung, -heit, -keit, ver-, zer-) | lessico astratto e tecnico | g-plural, g-wortbildung |
| c2-u03 | 4 | Zwischentöne (Sfumature) | cogliere ironia e understatement; riconoscere varietà regionali e registro colto | litote e understatement (nicht schlecht); Umgangssprache, dialetto, austriacismi ed elvetismi in ricezione; latinismi e Bildungssprache | colloquiale, regionale, colto | g-register, g-modalpartikeln, g-aussprache, g-wortbildung, g-partizipialattribut |
| c2-u04 | 4 | Was mich beunruhigt (Il che mi preoccupa) | costruire periodi complessi senza ambiguità; usare reggenze che non si deducono | relative con dessen, deren, was, wo(r)- e wer ... der; reggenze di verbi e aggettivi (bedürfen + genitivo, stolz auf) | argomentazione, scrittura formale | g-relativsatz, g-praep-verben, g-genitiv, g-partizipialattribut, g-register |

Lezioni:
- c2-u01: l1 L'attributo participiale esteso [g-partizipialattribut]; l2 Die zu lösende Aufgabe [g-partizipialattribut, g-passiv]; l3 Funktionsverbgefüge nel testo [g-funktionsverbgefuege, g-nominalstil]; test [g-partizipialattribut, g-funktionsverbgefuege]
- c2-u02: l1 die Banken e die Bänke [g-plural, g-wortbildung]; l2 Composti e Fugenelement [g-wortbildung]; l3 Derivazione e Fremdwörter [g-wortbildung]; test [g-wortbildung, g-plural]
- c2-u03: l1 Ironia e understatement [g-register, g-modalpartikeln]; l2 Umgangssprache, dialetto, varietà [g-register, g-aussprache]; l3 Latinismi e Bildungssprache [g-register, g-wortbildung]; test, ripasso unità 1-3 [g-register, g-wortbildung, g-partizipialattribut]
- c2-u04: l1 dessen, deren, mit dem [g-relativsatz]; l2 wer, was, worüber [g-relativsatz]; l3 Reggenze che non si indovinano [g-praep-verben, g-genitiv]; test, esame finale C2 [g-relativsatz, g-praep-verben, g-partizipialattribut, g-register]

## Id di GRAMMAR_REF (55)

Otto gruppi, come gli otto blocchi `items` dell'originale. Colonne: id, livello di prima
introduzione (il valore `cefr` in `GRAMMAR_REF`), descrizione, unità che lo introduce. Un id
introdotto a un livello si approfondisce nei livelli successivi senza cambiare id.

### 1. Nome e articolo

| Id | Livello | Descrizione | Introdotto in |
|---|---|---|---|
| g-genus | A1 | Genere dei nomi (der, die, das) e indizi formali; femminile in -in | a1-u01 |
| g-plural | A1 | Formazione del plurale (-e, -er, -n, -s, umlaut); C2: plurali doppi | a1-u01 |
| g-artikel-nom | A1 | Articolo determinativo e indeterminativo al nominativo; dieser, welcher | a1-u01 |
| g-artikel-akk | A1 | Accusativo di articoli e kein; solo il maschile cambia | a1-u03 |
| g-artikel-dat | A1 | Dativo di articoli e possessivi; -n al dativo plurale | a1-u06 |
| g-genitiv | B1 | Genitivo di articoli e nomi; preposizioni con genitivo (wegen, trotz, während, innerhalb); C2: verbi con genitivo | b1-u03 |
| g-n-deklination | B2 | Declinazione debole dei maschili (der Kunde, des Kunden, dem Kollegen) | b2-u04 |
| g-wortbildung | A2 | Composti e genere dell'ultimo elemento; C2: derivazione e Fugenelement | a2-u05 |

### 2. Aggettivo e avverbio

| Id | Livello | Descrizione | Introdotto in |
|---|---|---|---|
| g-adjektivdeklination | A1 | Aggettivo predicativo invariabile; A2 dopo ein; B1 declinazione completa; C1 aggettivo sostantivato | a1-u04 |
| g-komparation | A1 | Comparativo (als, so ... wie), superlativo (am besten); B2 je ... desto; C1 intensificatori | a1-u08 |
| g-possessiv | A1 | Possessivi (mein, dein, sein, ihr, unser, euer, Ihr) e genitivo sassone dei nomi propri | a1-u08 |
| g-adverbien | A1 | Avverbi di grado, frequenza e modo; aggettivo usato come avverbio | a1-u04 |

### 3. Pronomi

| Id | Livello | Descrizione | Introdotto in |
|---|---|---|---|
| g-personalpron | A1 | Pronomi personali al nominativo; du, ihr, Sie | a1-u02 |
| g-pron-akk | A1 | Pronomi personali all'accusativo (mich, dich, ihn, sie, es) | a1-u04 |
| g-pron-dat | A2 | Pronomi personali al dativo (mir, dir, ihm, ihr) | a2-u03 |
| g-indefinitpron | A1 | einer, eins, welche, keiner; B1 jemand, niemand, jeder, etwas, nichts | a1-u07 |
| g-es | A1 | es gibt, es regnet, es geht; C1 es correlato e posizionale | a1-u06 |
| g-man | A2 | Soggetto impersonale man e le sue forme (einen, einem) | a2-u06 |

### 4. Verbo: forme e tempi

| Id | Livello | Descrizione | Introdotto in |
|---|---|---|---|
| g-praesens | A1 | Presente dei verbi deboli e forti (cambio vocalico), sein, haben, werden, wissen; nessuna forma progressiva | a1-u01 |
| g-modalverben | A1 | Verbi modali e möchte; parentesi verbale; B2 doppio infinito; C1 uso soggettivo (muss, dürfte, soll, will) | a1-u05 |
| g-trennbare-verben | A1 | Verbi separabili; C1 prefissi separabili e inseparabili con cambio di senso | a1-u05 |
| g-imperativ | A1 | Imperativo con Sie; A2 du e ihr | a1-u06 |
| g-perfekt | A1 | Perfekt con haben e sein; participio II; uso nel parlato | a1-u10 |
| g-praeteritum | A2 | Präteritum di sein, haben e modali; B1 verbi deboli e forti nello scritto; B2 narrazione | a2-u01 |
| g-reflexivverben | A2 | Verbi riflessivi con pronome accusativo e dativo (sich erinnern, sich die Hände waschen) | a2-u01 |
| g-verben-dativ | A2 | Verbi con oggetto al dativo (helfen, danken, gefallen, gehören, gratulieren) | a2-u03 |
| g-futur | A2 | Futuro con Präsens e indicatore temporale; Futur I; C1 Futur I e II di supposizione | a2-u02 |
| g-praep-verben | B1 | Verbi e aggettivi con preposizione fissa; avverbi pronominali (darauf, worauf) | b1-u02 |
| g-plusquamperfekt | B1 | Trapassato (hatte gemacht, war gegangen) e anteriorità | b1-u04 |
| g-werden | C1 | Le funzioni di werden: verbo pieno, futuro, passivo, würde, supposizione | c1-u01 |
| g-funktionsverbgefuege | C1 | Locuzioni con verbo di supporto (zur Verfügung stellen, in Frage kommen) | c1-u02 |

### 5. Modi e passivo

| Id | Livello | Descrizione | Introdotto in |
|---|---|---|---|
| g-konjunktiv2 | A2 | Konjunktiv II di cortesia e consiglio (könnten, solltest, würde); B1 irreale al presente; B2 al passato e als ob | a2-u04 |
| g-passiv | B1 | Passivo con werden al presente e al Präteritum; B2 Perfekt, modali, Zustandspassiv; C1 sostituti del passivo | b1-u03 |
| g-konjunktiv1 | B2 | Konjunktiv I nel discorso indiretto e sostituzione con il Konjunktiv II | b2-u05 |
| g-partizipialattribut | C1 | Participio I e II come attributo; C2 attributo esteso e Gerundivum | c1-u05 |

### 6. Preposizioni

| Id | Livello | Descrizione | Introdotto in |
|---|---|---|---|
| g-praep-akk | A1 | Preposizioni con accusativo (für, ohne, um, durch, gegen) | a1-u09 |
| g-praep-dativ | A1 | Preposizioni con dativo (mit, zu, bei, aus, von, nach, seit); preposizioni articolate (zum, beim) | a1-u06 |
| g-wechselpraep | A1 | Preposizioni con dativo o accusativo: wo? (A1) e wohin? (A2); stellen/stehen | a1-u06 |
| g-temporalangaben | A1 | Ora, giorni, mesi e date (um, am, im, von ... bis, vor, seit) | a1-u05 |

### 7. Frase

| Id | Livello | Descrizione | Introdotto in |
|---|---|---|---|
| g-satz-v2 | A1 | Verbo in seconda posizione, inversione, domande sì/no e con W- | a1-u01 |
| g-negation | A1 | nicht e kein; posizione di nicht | a1-u03 |
| g-konnektoren | A1 | und, aber, oder, denn (posizione zero); A2 deshalb, trotzdem (con inversione); B1 connettori a due parti | a1-u09 |
| g-wortstellung | A2 | Ordine nel campo centrale: oggetti al dativo e all'accusativo, tempo-causa-modo-luogo | a2-u03 |
| g-nebensatz-weil | A2 | Subordinata causale con weil e da, verbo in fondo | a2-u01 |
| g-nebensatz-temporal | A2 | als e wenn; B1 nachdem, bevor, seit, bis, während | a2-u01 |
| g-nebensatz-dass | A2 | Subordinate con dass, ob e interrogative indirette | a2-u04 |
| g-infinitiv-zu | A2 | Infinito con zu (Lust haben, vorhaben); B2 ohne ... zu, statt ... zu | a2-u07 |
| g-relativsatz | B1 | Frasi relative al nominativo, accusativo, dativo e con preposizione; C2 dessen, deren, was, wo(r)-, wer ... der | b1-u02 |
| g-nebensatz-final | B1 | Finalità con um ... zu e damit | b1-u03 |
| g-konzessiv | B1 | Concessione con obwohl e trotzdem; B2 obgleich, trotz, auch wenn, selbst wenn | b1-u01 |
| g-konditionalsatz | B1 | Periodo ipotetico reale e irreale al presente; B2 al passato, falls, sofern, forma senza wenn | b1-u01 |

### 8. Testo e registro

| Id | Livello | Descrizione | Introdotto in |
|---|---|---|---|
| g-register | A1 | du e Sie, formule di cortesia, mail formali; varietà di Austria e Svizzera; registro colloquiale e colto | a1-u01 |
| g-modalpartikeln | A2 | Particelle modali (mal, doch, ja, halt, eben, wohl, etwa) | a2-u03 |
| g-nominalstil | C1 | Stile nominale e Amtsdeutsch; nominalizzazione al posto della subordinata | c1-u03 |
| g-aussprache | A1 | Pronuncia: umlaut, ß, ch, desonorizzazione finale, accento di parola e di frase | a1-u01 |

## Copertura lessicale (DA-5)

Per A1-B1 i campi lessicali delle unità si confrontano con i Wortlisten Goethe del livello come
lista di controllo: una parola della lista assente da tutte le unità del livello è un buco da
valutare, non un obbligo. Si annota solo la parola mancante, mai l'esempio della lista. Per
B2-C2 non esiste una lista di riferimento; la copertura si giudica in revisione.

## Cosa non è nel curriculum

- Esercizi, dialoghi, testi e audio delle lezioni: li scrivono i lotti F1-F4 contro questo file.
- Il modulo d'esame in stile Goethe B1 (DA-6): è un modulo secondario che segue il B1, non
  un'unità, e non cambia il numero di unità né di lezioni.
- Letture, biblioteca, conversazioni, chat, scrittura e coppie minime: hanno contratti propri.
- Ortografia anteriore alla riforma del 1996, Fraktur e grafia svizzera senza ß come forma attesa.
- Produzione in dialetto: austriacismi, elvetismi e dialetti restano in ricezione (a2-u07, c2-u03).
- Tempi passivi nel coniugatore `Verbs` (A11): il passivo si insegna nelle lezioni.
- Il numero degli id di `GRAMMAR_REF` non deve coincidere con i 42 dell'originale: l'elenco
  sopra è chiuso per il tedesco, e un id nuovo entra solo modificando questo file.
