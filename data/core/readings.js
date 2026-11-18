/* Neutral layer: reading texts. Every sentence is German and spoken; a
   recording is made per sentence, so the same file serves dictation and
   continuous listening. The comprehension questions are German too and live
   here, not in the overlay: testing a German text in the learner's language
   tests translation, not understanding. The overlay holds the title, the
   glosses of hard words and the lookup meanings. */
/* APPENDS rather than assigns: the library adds its long texts to this same
   list from the level files, and an assignment here would wipe whatever
   arrived first. */
LINGUAI.addReadings([

  /* ---------------- A1 ---------------- */
  {
    id: "r-a1-cafe",
    cefr: "A1",
    tag: "g-praesens",
    titleIt: "Feierabend im Café",
    sentences: [
      "Es ist Feierabend, und Anna geht ins Café.",
      "Sie ist Lehrerin von Beruf und arbeitet in Köln.",
      "An der Theke sagt sie: „Guten Abend, einen Kaffee, bitte.“",
      "Der Kellner heißt Jonas und fragt: „Mit Milch?“",
      "„Ja, bitte“, sagt Anna, „und ein Wasser.“",
      "Am Nachbartisch sitzt ein Mann und liest die Zeitung.",
      "Er fragt: „Entschuldigung, wie heißen Sie?“",
      "„Ich heiße Anna. Und Sie?“",
      "„Ich bin Tom. Wir sagen du, okay?“",
      "Anna lacht. Der Kaffee ist heiß, und der Feierabend ist schön."
    ],
    glossIt: ["der Feierabend", "die Theke", "der Kellner", "der Nachbartisch", "Entschuldigung"],
    lexIt: ["Café", "Lehrerin", "Beruf", "arbeiten", "Köln", "Milch", "Wasser", "Zeitung", "lesen", "lachen", "heiß", "schön"],
    questions: [
      { t: "truefalse", q: "Anna bestellt einen Tee.", a: 1 },
      { t: "mcq", q: "Was ist Anna von Beruf?", opts: ["Lehrerin", "Kellnerin", "Ärztin"], a: 0 },
      { t: "mcq", q: "Wie heißt der Kellner?", opts: ["Jonas", "Tom", "Anna"], a: 0 },
      { t: "truefalse", q: "Tom möchte mit Anna per du sein.", a: 0 }
    ]
  },
  {
    id: "r-a1-markt",
    cefr: "A1",
    tag: "g-artikel-akk",
    titleIt: "Samstag auf dem Markt",
    sentences: [
      "Am Samstag geht Lena auf den Markt in Bern.",
      "Sie braucht Obst und Gemüse für das Wochenende.",
      "Am ersten Stand kauft sie einen Salat und ein Kilo Tomaten.",
      "Die Verkäuferin fragt: „Möchten Sie auch Äpfel?“",
      "„Ja, gern, ein Kilo, bitte. Was kostet das?“",
      "„Das macht zusammen acht Franken.“",
      "Lena hat keinen Korb, aber sie hat eine Tasche.",
      "Am Ende kauft sie noch einen Käse und ein Brot und geht nach Hause."
    ],
    glossIt: ["das Gemüse", "der Stand", "die Verkäuferin", "zusammen", "der Korb"],
    lexIt: ["Samstag", "Markt", "Bern", "brauchen", "Obst", "Wochenende", "kaufen", "Salat", "Kilo", "Tomate", "Apfel", "kosten", "Franken", "Tasche", "Käse", "Brot"],
    questions: [
      { t: "mcq", q: "Wo ist der Markt?", opts: ["in Bern", "in Wien", "in Köln"], a: 0 },
      { t: "truefalse", q: "Lena hat einen Korb.", a: 1 },
      { t: "mcq", q: "Wie viel kostet alles am ersten Stand?", opts: ["acht Franken", "acht Euro", "zehn Franken"], a: 0 }
    ]
  },

  /* ---------------- A2 ---------------- */
  {
    id: "r-a2-kaernten",
    cefr: "A2",
    tag: "g-praeteritum",
    titleIt: "Sommer am See",
    sentences: [
      "Als Kind war Paul jeden Sommer bei seiner Oma in Kärnten.",
      "Ihr Haus war klein, aber es hatte einen großen Garten direkt am See.",
      "Paul durfte jeden Tag schwimmen, und abends gab es oft Marillenknödel.",
      "Einen Fernseher hatte die Oma nicht, deshalb haben sie abends Karten gespielt.",
      "Manchmal wollte Paul nicht ins Bett, aber er musste um neun schlafen gehen.",
      "Heute ist Paul dreißig und wohnt in Hamburg.",
      "Er erinnert sich gern an diese Sommer.",
      "Nächsten Juli fährt er wieder nach Kärnten, diesmal mit seiner Tochter."
    ],
    glossIt: ["die Marillenknödel", "der Fernseher", "deshalb", "sich erinnern"],
    lexIt: ["Kind", "Sommer", "Oma", "Kärnten", "Haus", "Garten", "See", "schwimmen", "Karte", "Bett", "Hamburg", "Tochter"],
    questions: [
      { t: "mcq", q: "Wo war Paul als Kind im Sommer?", opts: ["bei seiner Oma in Kärnten", "bei seiner Tochter in Hamburg", "bei seinen Eltern am Meer"], a: 0 },
      { t: "truefalse", q: "Die Oma hatte einen Fernseher.", a: 1 },
      { t: "mcq", q: "Was musste Paul um neun Uhr machen?", opts: ["schlafen gehen", "schwimmen", "Karten spielen"], a: 0 },
      { t: "truefalse", q: "Im Juli fährt Paul allein nach Kärnten.", a: 1 }
    ]
  },
  {
    id: "r-a2-zug",
    cefr: "A2",
    tag: "g-perfekt",
    titleIt: "Verspätung nach Salzburg",
    sentences: [
      "Letzten Freitag wollte Sara von München nach Salzburg fahren.",
      "Sie ist früh aufgestanden und hat am Automaten eine Fahrkarte gekauft.",
      "Dann hat sie auf die Anzeigetafel geschaut: Der Zug hatte vierzig Minuten Verspätung.",
      "Außerdem ist er nicht von Gleis 12 abgefahren, sondern von Gleis 15.",
      "Sara hat einen Kaffee getrunken und eine Brezel gegessen.",
      "Am Gleis hat sie eine Frau aus Linz kennengelernt.",
      "Die beiden haben die ganze Fahrt geredet, und die Zeit ist schnell vergangen.",
      "In Salzburg haben sie ihre Telefonnummern getauscht."
    ],
    glossIt: ["der Automat", "die Anzeigetafel", "die Verspätung", "das Gleis", "vergehen"],
    lexIt: ["Freitag", "München", "Salzburg", "aufstehen", "Fahrkarte", "kaufen", "schauen", "abfahren", "trinken", "Brezel", "essen", "Linz", "kennenlernen", "Fahrt", "reden", "Telefonnummer", "tauschen"],
    questions: [
      { t: "truefalse", q: "Der Zug ist pünktlich abgefahren.", a: 1 },
      { t: "mcq", q: "Von welchem Gleis ist der Zug abgefahren?", opts: ["von Gleis 15", "von Gleis 12", "von Gleis 40"], a: 0 },
      { t: "mcq", q: "Woher kommt die Frau?", opts: ["aus Linz", "aus München", "aus Salzburg"], a: 0 }
    ]
  },
  {
    id: "r-a2-arzt",
    cefr: "A2",
    tag: "g-pron-dat",
    titleIt: "Termin beim Hausarzt",
    sentences: [
      "Jan Weber arbeitet viel am Computer, und seit drei Tagen tut ihm der Rücken weh.",
      "Am Montag ruft er in der Praxis an und bekommt einen Termin um zehn Uhr.",
      "Er nimmt seine Gesundheitskarte von der Krankenkasse mit.",
      "Die Ärztin fragt ihn: „Wo genau tut es Ihnen weh?“",
      "Sie untersucht ihn und sagt: „Das ist nichts Schlimmes, aber Sie sollten mehr Pausen machen.“",
      "Sie gibt ihm ein Rezept für eine Salbe und schreibt ihn für zwei Tage krank.",
      "In der Apotheke erklärt ihm die Apothekerin: „Tragen Sie die Salbe zweimal am Tag auf.“",
      "Am Abend geht es Jan schon ein bisschen besser."
    ],
    glossIt: ["der Rücken", "die Praxis", "die Gesundheitskarte", "das Rezept", "die Salbe", "krankschreiben"],
    lexIt: ["Computer", "wehtun", "anrufen", "Termin", "mitnehmen", "Krankenkasse", "Ärztin", "untersuchen", "Pause", "Apotheke", "erklären", "Apothekerin", "auftragen", "besser"],
    questions: [
      { t: "mcq", q: "Was tut Jan weh?", opts: ["der Rücken", "der Kopf", "der Bauch"], a: 0 },
      { t: "truefalse", q: "Die Ärztin sagt, Jan muss ins Krankenhaus.", a: 1 },
      { t: "mcq", q: "Wie oft soll Jan die Salbe auftragen?", opts: ["zweimal am Tag", "einmal am Tag", "dreimal am Tag"], a: 0 },
      { t: "truefalse", q: "Die Ärztin schreibt Jan für zwei Tage krank.", a: 0 }
    ]
  },
  {
    id: "r-a2-wg",
    cefr: "A2",
    tag: "g-wechselpraep",
    titleIt: "Ein Zimmer in Leipzig",
    sentences: [
      "Mia studiert in Leipzig und sucht ein Zimmer in einer WG.",
      "Im Internet findet sie eine Anzeige: 14 Quadratmeter, 320 Euro warm, ab dem ersten März.",
      "Bei der Besichtigung zeigt ihr Ben die Wohnung.",
      "In der Küche steht ein großer Tisch, und auf dem Balkon ist Platz für Pflanzen.",
      "Das Zimmer ist noch leer, aber es ist hell und ruhig.",
      "Mia denkt: „Das Bett stelle ich an die Wand und den Schreibtisch vor das Fenster.“",
      "Am Abend schreibt Ben ihr eine Nachricht: „Wir möchten dich gern als Mitbewohnerin!“",
      "Mia freut sich sehr und sagt sofort ja."
    ],
    glossIt: ["die WG", "die Anzeige", "warm", "die Besichtigung", "die Mitbewohnerin"],
    lexIt: ["studieren", "Leipzig", "suchen", "Zimmer", "Quadratmeter", "Wohnung", "Küche", "Balkon", "Pflanze", "leer", "hell", "ruhig", "stellen", "Wand", "Schreibtisch", "Fenster", "Nachricht", "sich freuen"],
    questions: [
      { t: "mcq", q: "Wie viel kostet das Zimmer im Monat?", opts: ["320 Euro", "14 Euro", "300 Euro"], a: 0 },
      { t: "truefalse", q: "Im Zimmer stehen schon Möbel.", a: 1 },
      { t: "mcq", q: "Wohin möchte Mia den Schreibtisch stellen?", opts: ["vor das Fenster", "an die Wand", "in die Küche"], a: 0 }
    ]
  },
  {
    id: "r-a2-geburtstag",
    cefr: "A2",
    tag: "g-verben-dativ",
    titleIt: "Ein Fest in Zürich",
    sentences: [
      "Am Samstag hat Lukas Geburtstag, und er feiert mit Freunden in Zürich.",
      "Seine Kollegin Elif bekommt eine Einladung: „Hast du Lust, am Samstag zu kommen?“",
      "Elif antwortet ihm sofort: „Sehr gern, danke!“",
      "Aber was soll sie ihm schenken?",
      "Lukas hört gern Jazz, deshalb kauft sie ihm eine alte Jazzplatte.",
      "Auf der Party gratuliert sie ihm: „Alles Gute zum Geburtstag!“",
      "Die Platte gefällt Lukas sehr, und er dankt ihr herzlich.",
      "Die Mutter von Lukas begrüßt Elif mit „Grüezi“, denn so sagt man in Zürich „Guten Tag“."
    ],
    glossIt: ["die Einladung", "Lust haben", "die Platte", "gratulieren", "Grüezi"],
    lexIt: ["Geburtstag", "feiern", "Freund", "Zürich", "Kollegin", "antworten", "schenken", "Jazz", "Party", "gefallen", "danken", "herzlich", "Mutter", "begrüßen"],
    questions: [
      { t: "mcq", q: "Wo feiert Lukas seinen Geburtstag?", opts: ["in Zürich", "in Bern", "in Wien"], a: 0 },
      { t: "mcq", q: "Was schenkt Elif Lukas?", opts: ["eine Jazzplatte", "ein Buch", "Blumen"], a: 0 },
      { t: "truefalse", q: "Das Geschenk gefällt Lukas nicht.", a: 1 }
    ]
  },
  {
    id: "r-a2-wien",
    cefr: "A2",
    tag: "g-nebensatz-weil",
    titleIt: "Nächstes Jahr in Wien",
    sentences: [
      "Karim arbeitet als Koch in einem Hotel in Düsseldorf.",
      "Nächstes Jahr möchte er nach Wien ziehen, weil seine Freundin dort eine Stelle gefunden hat.",
      "Er hat vor, in Wien ein kleines Restaurant zu eröffnen.",
      "Zuerst wird er aber in einem Kaffeehaus arbeiten, weil er die Wiener Küche noch nicht gut kennt.",
      "Er weiß, dass die Wohnungssuche in Wien Zeit braucht.",
      "Deshalb sucht er schon jetzt im Internet.",
      "Seine Eltern sind ein bisschen traurig, weil er dann weit weg wohnt.",
      "Aber Karim sagt: „Mit dem Zug seid ihr in ungefähr zehn Stunden bei uns!“"
    ],
    glossIt: ["die Stelle", "vorhaben", "eröffnen", "das Kaffeehaus", "die Wohnungssuche"],
    lexIt: ["Koch", "Hotel", "Düsseldorf", "ziehen", "Freundin", "Wien", "Restaurant", "Küche", "kennen", "wissen", "Eltern", "traurig", "weit", "Zug", "ungefähr", "Stunde"],
    questions: [
      { t: "mcq", q: "Warum möchte Karim nach Wien ziehen?", opts: ["Seine Freundin hat dort eine Stelle gefunden.", "Er hat dort eine Wohnung gekauft.", "Seine Eltern wohnen dort."], a: 0 },
      { t: "truefalse", q: "In Wien möchte Karim zuerst ein Restaurant eröffnen.", a: 1 },
      { t: "mcq", q: "Wie lange dauert die Zugfahrt nach Wien laut Karim?", opts: ["ungefähr zehn Stunden", "ungefähr vier Stunden", "ungefähr zwei Tage"], a: 0 }
    ]
  },

  /* ---------------- B1 ---------------- */
  {
    id: "r-b1-fahrrad",
    cefr: "B1",
    tag: "g-plusquamperfekt",
    titleIt: "Das verschwundene Fahrrad",
    sentences: [
      "Münster ist die Stadt der Fahrräder, und auch Jana fährt jeden Tag mit dem Rad zur Uni.",
      "Letzten Dienstag stand sie nach der Vorlesung vor dem Fahrradständer und suchte ihr Rad vergeblich.",
      "Am Morgen hatte sie es wie immer vor der Bibliothek abgestellt, aber sie hatte vergessen, es abzuschließen.",
      "Nachdem sie eine Viertelstunde gesucht hatte, ging sie zur Polizei und erstattete Anzeige.",
      "Der Polizist erklärte ihr, dass in der Stadt jedes Jahr Tausende Fahrräder verschwinden.",
      "Zwei Wochen später bekam sie einen Anruf: Man hatte ihr Rad in einem Park am Stadtrand gefunden.",
      "Jemand hatte es dort zurückgelassen, nur die Klingel fehlte.",
      "Seitdem schließt Jana ihr Fahrrad immer ab, auch wenn sie nur kurz in einen Laden geht."
    ],
    glossIt: ["die Vorlesung", "der Fahrradständer", "vergeblich", "abschließen", "Anzeige erstatten", "der Stadtrand", "die Klingel"],
    lexIt: ["Münster", "Fahrrad", "Uni", "Dienstag", "suchen", "Morgen", "Bibliothek", "abstellen", "vergessen", "Viertelstunde", "Polizei", "erklären", "verschwinden", "Woche", "Anruf", "Park", "finden", "fehlen", "Laden"],
    questions: [
      { t: "mcq", q: "Wo hatte Jana ihr Fahrrad am Morgen abgestellt?", opts: ["vor der Bibliothek", "vor der Polizei", "in einem Park"], a: 0 },
      { t: "truefalse", q: "Jana hatte ihr Fahrrad abgeschlossen.", a: 1 },
      { t: "mcq", q: "Was fehlte an dem Fahrrad, als man es fand?", opts: ["die Klingel", "das Licht", "der Sattel"], a: 0 },
      { t: "truefalse", q: "Heute schließt Jana ihr Rad auch bei kurzen Einkäufen ab.", a: 0 }
    ]
  },
  {
    id: "r-b1-pfand",
    cefr: "B1",
    tag: "g-passiv",
    titleIt: "Was mit der Dose passiert",
    sentences: [
      "In Deutschland wird auf viele Flaschen und Dosen ein Pfand bezahlt.",
      "Wer zum Beispiel in einem Supermarkt in Bremen eine Dose Limonade kauft, zahlt fünfundzwanzig Cent mehr.",
      "Das Geld bekommt man zurück, wenn die leere Dose in einen Automaten gesteckt wird.",
      "Danach wird die Dose gepresst und zu einer Fabrik gebracht, wo das Metall wiederverwertet wird.",
      "Viele Glasflaschen werden dagegen gereinigt und bis zu fünfzigmal neu gefüllt.",
      "Früher wurden viele Dosen einfach in den Park oder auf die Straße geworfen.",
      "Seit das Pfand 2003 eingeführt wurde, sieht man viel weniger Müll.",
      "Und wer seine Flaschen nicht zurückbringt, stellt sie oft neben den Mülleimer, damit andere das Pfand sammeln können."
    ],
    glossIt: ["das Pfand", "die Dose", "der Automat", "pressen", "wiederverwerten", "einführen", "der Mülleimer"],
    lexIt: ["Deutschland", "Flasche", "bezahlen", "Supermarkt", "Bremen", "Limonade", "Cent", "Geld", "leer", "Fabrik", "Metall", "reinigen", "füllen", "früher", "werfen", "Straße", "Müll", "sammeln"],
    questions: [
      { t: "mcq", q: "Wie viel Pfand zahlt man für eine Dose Limonade?", opts: ["fünfundzwanzig Cent", "fünf Cent", "einen Euro"], a: 0 },
      { t: "truefalse", q: "Glasflaschen werden nach dem ersten Gebrauch gepresst.", a: 1 },
      { t: "mcq", q: "Warum stellen manche Leute ihre Flaschen neben den Mülleimer?", opts: ["Damit andere das Pfand sammeln können.", "Weil der Automat kaputt ist.", "Weil Glas nicht wiederverwertet wird."], a: 0 }
    ]
  },
  {
    id: "r-b1-ausbildung",
    cefr: "B1",
    tag: "g-nebensatz-final",
    titleIt: "Lieber in die Werkstatt",
    sentences: [
      "Nach dem Abitur wusste Selin nicht, ob sie studieren oder eine Ausbildung machen sollte.",
      "Um Erfahrungen zu sammeln, machte sie zuerst ein Praktikum in einer Autowerkstatt in Stuttgart.",
      "Dort merkte sie, dass ihr die Arbeit mit den Händen viel Spaß macht.",
      "Heute macht sie eine Ausbildung zur Kfz-Mechatronikerin und ist drei Tage pro Woche im Betrieb und zwei Tage in der Berufsschule.",
      "Ihr Chef erklärt ihr jeden neuen Arbeitsschritt genau, damit sie keine Fehler macht.",
      "Abends wiederholt sie den Stoff aus der Berufsschule, um die Prüfungen gut zu bestehen.",
      "Ihre Eltern hatten sich eigentlich ein Studium für sie gewünscht.",
      "Aber Selin verdient schon jetzt ihr eigenes Geld und spart, damit sie später vielleicht eine eigene Werkstatt eröffnen kann."
    ],
    glossIt: ["das Abitur", "die Ausbildung", "die Werkstatt", "die Kfz-Mechatronikerin", "der Betrieb", "die Berufsschule", "der Arbeitsschritt", "der Stoff"],
    lexIt: ["studieren", "Erfahrung", "sammeln", "Praktikum", "Stuttgart", "merken", "Hand", "Spaß", "Woche", "Chef", "Fehler", "wiederholen", "Prüfung", "bestehen", "Eltern", "wünschen", "verdienen", "sparen", "eröffnen"],
    questions: [
      { t: "truefalse", q: "Selin hat zuerst ein Praktikum gemacht, um Erfahrungen zu sammeln.", a: 0 },
      { t: "mcq", q: "Wie viele Tage pro Woche ist Selin in der Berufsschule?", opts: ["zwei", "drei", "fünf"], a: 0 },
      { t: "mcq", q: "Warum erklärt der Chef jeden Arbeitsschritt genau?", opts: ["Damit Selin keine Fehler macht.", "Damit Selin früher nach Hause gehen kann.", "Weil Selin die Prüfung schon bestanden hat."], a: 0 },
      { t: "truefalse", q: "Selins Eltern wollten von Anfang an, dass sie eine Ausbildung macht.", a: 1 }
    ]
  },
  {
    id: "r-b1-tafel",
    cefr: "B1",
    tag: "g-relativsatz",
    titleIt: "Samstags bei der Tafel",
    sentences: [
      "Herr Becker ist ein Rentner, der seit zwei Jahren bei der Tafel in Freiburg mitarbeitet.",
      "Die Tafel ist ein Verein, der Lebensmittel von Supermärkten und Bäckereien abholt.",
      "Das sind Produkte, die noch gut sind, die die Geschäfte aber nicht mehr verkaufen können.",
      "Die Lebensmittel bekommen dann Menschen, die wenig Geld haben.",
      "Am Samstag sortiert Herr Becker Obst und Gemüse, zusammen mit einer Studentin, mit der er sich gut versteht.",
      "Die Frau, der er heute eine Tüte mit Brot gibt, kommt jede Woche und bedankt sich immer freundlich.",
      "Für Herrn Becker ist das Ehrenamt eine Aufgabe, auf die er nicht mehr verzichten möchte.",
      "Er sagt: „Hier treffe ich jede Woche Menschen, mit denen ich sonst nie sprechen würde.“"
    ],
    glossIt: ["der Rentner", "die Tafel", "der Verein", "die Lebensmittel", "abholen", "das Ehrenamt", "verzichten auf"],
    lexIt: ["mitarbeiten", "Freiburg", "Supermarkt", "Bäckerei", "Produkt", "Geschäft", "verkaufen", "Geld", "sortieren", "Obst", "Gemüse", "Studentin", "sich verstehen", "Tüte", "Brot", "sich bedanken", "freundlich", "Aufgabe", "treffen"],
    questions: [
      { t: "mcq", q: "Was holt die Tafel von Supermärkten und Bäckereien ab?", opts: ["Lebensmittel, die die Geschäfte nicht mehr verkaufen können", "Geld für Menschen, die wenig haben", "Kleidung für Studenten"], a: 0 },
      { t: "truefalse", q: "Herr Becker arbeitet erst seit ein paar Wochen bei der Tafel.", a: 1 },
      { t: "mcq", q: "Mit wem sortiert Herr Becker am Samstag Obst und Gemüse?", opts: ["mit einer Studentin", "mit seiner Frau", "mit einem Bäcker"], a: 0 }
    ]
  },
  {
    id: "r-b1-graz",
    cefr: "B1",
    tag: "g-konditionalsatz",
    titleIt: "Wenn die Wohnung größer wäre",
    sentences: [
      "Familie Hofer wohnt in einer Dreizimmerwohnung im Zentrum von Graz.",
      "Seit das zweite Kind auf der Welt ist, ist die Wohnung eigentlich zu klein.",
      "„Wenn wir ein Zimmer mehr hätten, könnte jedes Kind ein eigenes Zimmer haben“, sagt Frau Hofer.",
      "Ihr Mann meint: „Wenn wir aufs Land ziehen würden, wäre die Miete viel billiger.“",
      "Aber dann müsste er jeden Tag eine Stunde mit dem Auto zur Arbeit fahren.",
      "„Und wenn wir hierbleiben, haben wir die Schule, den Park und den Markt direkt vor der Tür“, sagt sie.",
      "Am Ende beschließen sie, noch ein Jahr zu warten und dann zu entscheiden.",
      "Wenn bis dahin im selben Haus eine größere Wohnung frei wird, fragen sie sofort beim Vermieter nach."
    ],
    glossIt: ["die Dreizimmerwohnung", "auf der Welt sein", "aufs Land ziehen", "die Miete", "beschließen", "der Vermieter", "nachfragen"],
    lexIt: ["Familie", "Zentrum", "Graz", "Kind", "klein", "Zimmer", "eigen", "billig", "Stunde", "Auto", "Arbeit", "Schule", "Park", "Markt", "Tür", "warten", "entscheiden", "frei"],
    questions: [
      { t: "truefalse", q: "Familie Hofer hat zwei Kinder.", a: 0 },
      { t: "mcq", q: "Was wäre auf dem Land besser?", opts: ["Die Miete wäre billiger.", "Die Schule wäre näher.", "Der Weg zur Arbeit wäre kürzer."], a: 0 },
      { t: "mcq", q: "Was beschließt die Familie am Ende?", opts: ["noch ein Jahr zu warten", "sofort aufs Land zu ziehen", "eine Wohnung zu kaufen"], a: 0 }
    ]
  },

  /* ---------------- B2 ---------------- */
  {
    id: "r-b2-grenze",
    cefr: "B2",
    tag: "g-konzessiv",
    titleIt: "Jeden Tag über die Grenze",
    sentences: [
      "Obwohl Marco in Lörrach wohnt, arbeitet er seit fünf Jahren bei einem Pharmaunternehmen in Basel.",
      "Jeden Morgen fährt er mit der S-Bahn über die Grenze, ohne dass jemand seinen Ausweis sehen will.",
      "Trotz des frühen Arbeitsbeginns lohnt sich die Stelle für ihn, denn in Basel verdient er deutlich mehr als in Deutschland.",
      "Allerdings hat das Leben als Grenzgänger auch Nachteile: Bei der Steuererklärung braucht er jedes Jahr die Hilfe einer Beraterin.",
      "Seine Kollegen kommen aus Deutschland, Frankreich und der Schweiz, und obgleich in der Firma meistens Englisch gesprochen wird, hört man in der Pause oft Baseldeutsch.",
      "Marco versteht den Dialekt inzwischen ziemlich gut, sprechen kann er ihn jedoch noch nicht.",
      "Selbst wenn er ein besseres Angebot aus Karlsruhe bekäme, würde er die Stelle wohl nicht wechseln.",
      "„Die Grenze merke ich eigentlich nur noch, wenn ich in Basel einkaufe und die Preise sehe“, sagt er lachend."
    ],
    glossIt: ["der Arbeitsbeginn", "sich lohnen", "der Grenzgänger", "die Steuererklärung", "die Beraterin", "obgleich", "das Baseldeutsch", "das Angebot"],
    lexIt: ["Lörrach", "Pharmaunternehmen", "Basel", "Grenze", "S-Bahn", "Ausweis", "Stelle", "verdienen", "deutlich", "Nachteil", "Kollege", "Frankreich", "Schweiz", "Firma", "Pause", "Dialekt", "inzwischen", "wechseln", "merken", "einkaufen", "Preis"],
    questions: [
      { t: "truefalse", q: "Marco wohnt in der Schweiz und arbeitet in Deutschland.", a: 1 },
      { t: "mcq", q: "Was ist für Marco ein Nachteil seiner Situation?", opts: ["die komplizierte Steuererklärung", "die Kontrollen an der Grenze", "das niedrige Gehalt"], a: 0 },
      { t: "mcq", q: "Welche Sprache hört man in der Pause oft?", opts: ["Baseldeutsch", "Französisch", "Englisch"], a: 0 },
      { t: "truefalse", q: "Für ein besseres Angebot aus Karlsruhe würde Marco sofort wechseln.", a: 1 }
    ]
  },
  {
    id: "r-b2-dorfladen",
    cefr: "B2",
    tag: "g-passiv",
    titleIt: "Ein Laden für das ganze Dorf",
    sentences: [
      "Vor sechs Jahren wurde der letzte Lebensmittelladen in einem kleinen Dorf im Allgäu geschlossen.",
      "Seitdem mussten die Einkäufe mit dem Auto in der nächsten Stadt erledigt werden, was vor allem für ältere Menschen schwierig war.",
      "Deshalb wurde im Gemeinderat eine Idee diskutiert, die zunächst etwas verrückt klang: Der Laden sollte von den Bewohnern selbst betrieben werden.",
      "Innerhalb weniger Monate wurden mehr als zweihundert Anteile verkauft, und das alte Geschäft ist von Freiwilligen renoviert worden.",
      "Heute ist der Dorfladen an sechs Tagen in der Woche geöffnet.",
      "Milch, Käse und Eier werden direkt von Bauernhöfen aus der Umgebung geliefert.",
      "Zwei Verkäuferinnen sind fest angestellt, alle anderen Schichten werden von Ehrenamtlichen übernommen.",
      "Ob der Laden langfristig überleben kann, ist noch nicht entschieden, aber im Dorf wird oft gesagt: Endlich gibt es wieder einen Ort, an dem man sich trifft."
    ],
    glossIt: ["der Lebensmittelladen", "erledigen", "der Gemeinderat", "betreiben", "der Anteil", "die Freiwilligen", "die Schicht", "die Ehrenamtlichen"],
    lexIt: ["Dorf", "Allgäu", "schließen", "Einkauf", "Auto", "Stadt", "schwierig", "Idee", "diskutieren", "verrückt", "Bewohner", "Monat", "verkaufen", "renovieren", "öffnen", "Milch", "Käse", "Ei", "Bauernhof", "Umgebung", "liefern", "Verkäuferin", "anstellen", "übernehmen", "überleben", "entscheiden"],
    questions: [
      { t: "truefalse", q: "Der Dorfladen ist heute jeden Tag geöffnet.", a: 1 },
      { t: "mcq", q: "Wer hat das alte Geschäft renoviert?", opts: ["Freiwillige", "eine Baufirma", "der Gemeinderat"], a: 0 },
      { t: "mcq", q: "Woher kommen Milch, Käse und Eier?", opts: ["von Bauernhöfen aus der Umgebung", "aus der nächsten Stadt", "aus dem Ausland"], a: 0 }
    ]
  },
  {
    id: "r-b2-redaktion",
    cefr: "B2",
    tag: "g-n-deklination",
    titleIt: "Der neue Praktikant",
    sentences: [
      "Lukas hat ein Praktikum bei einer Tageszeitung in Innsbruck begonnen und ist der jüngste Praktikant in der Redaktion.",
      "Am ersten Tag stellt ihn die Chefredakteurin den Kollegen vor, und jeder gibt dem neuen Praktikanten einen Tipp.",
      "Ein erfahrener Journalist rät ihm, den Namen jedes Gesprächspartners zweimal zu überprüfen.",
      "Schon in der zweiten Woche darf Lukas einen Experten für Lawinen interviewen, der an der Universität forscht.",
      "Leider vergisst er bei dem Gespräch, das Aufnahmegerät einzuschalten, und muss den Inhalt aus seinen Notizen rekonstruieren.",
      "Der Text des Praktikanten wird am nächsten Tag trotzdem gedruckt, wenn auch nur auf Seite zwölf.",
      "Am Abend ruft ein Leser bei Herrn Moser, dem Chef vom Dienst, an und beschwert sich: Der Nachname des Experten sei falsch geschrieben.",
      "Lukas wird rot, denn ausgerechnet diesen einen Namen hatte er nicht überprüft."
    ],
    glossIt: ["die Tageszeitung", "die Redaktion", "der Praktikant", "die Chefredakteurin", "der Gesprächspartner", "die Lawine", "das Aufnahmegerät", "der Chef vom Dienst", "sich beschweren", "ausgerechnet"],
    lexIt: ["Praktikum", "Innsbruck", "jung", "vorstellen", "Kollege", "Tipp", "erfahren", "Journalist", "raten", "Name", "überprüfen", "Experte", "interviewen", "Universität", "forschen", "vergessen", "Gespräch", "einschalten", "Inhalt", "Notiz", "rekonstruieren", "drucken", "Seite", "Leser", "Nachname", "falsch", "rot"],
    questions: [
      { t: "mcq", q: "Welchen Tipp gibt der erfahrene Journalist dem Praktikanten?", opts: ["jeden Namen zweimal zu überprüfen", "jeden Tag früh zu kommen", "nur kurze Artikel zu schreiben"], a: 0 },
      { t: "truefalse", q: "Lukas nimmt das Interview mit dem Experten auf.", a: 1 },
      { t: "mcq", q: "Worüber beschwert sich der Leser?", opts: ["über den falsch geschriebenen Nachnamen des Experten", "über die Seite, auf der der Artikel steht", "über die Länge des Artikels"], a: 0 },
      { t: "truefalse", q: "Der Artikel von Lukas wird gedruckt.", a: 0 }
    ]
  }
]);
