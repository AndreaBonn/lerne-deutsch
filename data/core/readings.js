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
      { t: "truefalse", q: "Tom möchte zu Anna du sagen.", a: 0 }
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
      "Seit das Pfand auf Einwegdosen 2003 eingeführt wurde, liegen dort viel weniger Dosen herum.",
      "Und wer seine Flaschen nicht zurückbringt, stellt sie oft neben den Mülleimer, damit andere das Pfand sammeln können."
    ],
    glossIt: ["das Pfand", "die Dose", "der Automat", "pressen", "wiederverwerten", "einführen", "der Mülleimer"],
    lexIt: ["Deutschland", "Flasche", "bezahlen", "Supermarkt", "Bremen", "Limonade", "Cent", "Geld", "leer", "Fabrik", "Metall", "reinigen", "füllen", "früher", "werfen", "Straße", "herumliegen", "sammeln"],
    questions: [
      { t: "mcq", q: "Wie viel Pfand zahlt man für eine Dose Limonade?", opts: ["fünfundzwanzig Cent", "fünf Cent", "einen Euro"], a: 0 },
      { t: "truefalse", q: "Die leeren Dosen werden gereinigt und neu gefüllt.", a: 1 },
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
      { t: "truefalse", q: "Selins Eltern hätten sich für sie lieber eine Ausbildung gewünscht.", a: 1 }
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
      "Seit das zweite Kind auf der Welt ist, ist die Wohnung für die vier eigentlich zu klein.",
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
      "Danach mussten die Einkäufe mit dem Auto in der nächsten Stadt erledigt werden, was vor allem für ältere Menschen schwierig war.",
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
      { t: "mcq", q: "Welchen Tipp gibt der erfahrene Journalist dem Praktikanten?", opts: ["den Namen jedes Gesprächspartners zweimal zu überprüfen", "jeden Tag früh zu kommen", "nur kurze Artikel zu schreiben"], a: 0 },
      { t: "truefalse", q: "Lukas nimmt das Interview mit dem Experten auf.", a: 1 },
      { t: "mcq", q: "Worüber beschwert sich der Leser?", opts: ["über den falsch geschriebenen Nachnamen des Experten", "über die Seite, auf der der Artikel steht", "über die Länge des Artikels"], a: 0 },
      { t: "truefalse", q: "Der Artikel von Lukas wird gedruckt.", a: 0 }
    ]
  },

  /* ---------------- C1 ---------------- */
  {
    id: "r-c1-amtsdeutsch",
    cefr: "C1",
    tag: "g-nominalstil",
    titleIt: "Um Beachtung wird gebeten",
    sentences: [
      "Wer einen Bescheid vom Amt erhält, stößt schnell auf eine Sprache, die sorgfältig vermeidet zu sagen, wer eigentlich was tut.",
      "„Um Beachtung der beigefügten Hinweise wird gebeten“, heißt es dann, doch weder ist erkennbar, wer bittet, noch, wer die Hinweise zu beachten hat.",
      "Der Bürger selbst tritt in solchen Schreiben nicht als Mensch auf, sondern als Antragsteller, Leistungsempfänger oder Betroffener.",
      "Die Vorliebe für schwerfällige Substantive wie „Inanspruchnahme“ oder „Antragstellung“ verleiht den Texten den Anschein strenger Sachlichkeit.",
      "Diese Distanz ist jedoch weder zufällig noch harmlos.",
      "Eine Verwaltung, die den Urheber einer Entscheidung nicht benennt, erschwert es den Betroffenen, gegen diese Entscheidung Widerspruch einzulegen.",
      "Seit Jahren geben Behörden in Deutschland, Österreich und der Schweiz Leitfäden für bürgernahe Sprache heraus.",
      "Sie werden bei jeder Gelegenheit zitiert und erstaunlich selten angewandt, was auf seine Weise ebenfalls eine Antwort ist."
    ],
    glossIt: ["der Bescheid", "die Beachtung", "beigefügt", "der Antragsteller", "der Leistungsempfänger", "die Inanspruchnahme", "der Anschein", "der Urheber", "Widerspruch einlegen", "bürgernah"],
    lexIt: ["Amt", "erhalten", "stoßen auf", "sorgfältig", "vermeiden", "Hinweis", "erkennbar", "Bürger", "Schreiben", "Betroffene", "Vorliebe", "Substantiv", "Antragstellung", "verleihen", "Sachlichkeit", "Distanz", "zufällig", "harmlos", "Verwaltung", "benennen", "erschweren", "Entscheidung", "Behörde", "Leitfaden", "Gelegenheit", "zitieren", "erstaunlich", "anwenden"],
    questions: [
      { t: "mcq", q: "Welche Eigenschaft der Behördensprache steht im Mittelpunkt des Textes?", opts: ["Sie verwendet viele Fremdwörter.", "Sie lässt offen, wer handelt.", "Sie ist besonders knapp."], a: 1 },
      { t: "truefalse", q: "Der Autor hält die Distanz der Behördensprache für unbedenklich.", a: 1 },
      { t: "mcq", q: "Welche Folge hat es laut Text, wenn der Urheber einer Entscheidung ungenannt bleibt?", opts: ["Man kann sich schwerer gegen die Entscheidung wehren.", "Die Entscheidung wird schneller getroffen.", "Der Bescheid wird kürzer."], a: 0 },
      { t: "mcq", q: "Was deutet der letzte Satz über die Leitfäden an?", opts: ["Sie sind zu kompliziert geschrieben.", "Es gibt noch zu wenige davon.", "Dass sie kaum befolgt werden, verrät etwas über die Verwaltung."], a: 2 }
    ]
  },
  {
    id: "r-c1-frauenstimmrecht",
    cefr: "C1",
    tag: "g-praeteritum",
    titleIt: "Der 7. Februar 1971",
    sentences: [
      "Am 7. Februar 1971 entschieden die Schweizer Männer in einer Volksabstimmung darüber, ob Frauen auf Bundesebene wählen und abstimmen dürften.",
      "Zwölf Jahre zuvor hatten sie dasselbe Anliegen noch mit rund zwei Dritteln der Stimmen abgelehnt.",
      "Diesmal sprachen sich knapp zwei Drittel dafür aus, und doch gehörte die Schweiz damit zu den letzten Ländern Europas, in denen Frauen das Stimmrecht erhielten.",
      "Die Verzögerung erklärt sich zum Teil aus der direkten Demokratie selbst: Über eine Verfassungsänderung entschied nicht das Parlament allein, sondern die Gesamtheit der stimmberechtigten Männer.",
      "In manchen Kantonen dauerte es noch erheblich länger, bis Frauen auch über lokale Angelegenheiten mitbestimmen konnten.",
      "Appenzell Innerrhoden führte das Frauenstimmrecht auf kantonaler Ebene erst 1990 ein, und zwar nicht aus eigenem Entschluss, sondern auf Anordnung des Bundesgerichts.",
      "Dort wird bis heute auf der Landsgemeinde, einer jährlichen Versammlung unter freiem Himmel, mit erhobener Hand abgestimmt, bis 1990 allerdings ausschließlich von Männern.",
      "Heute wird der 7. Februar in der Schweiz nicht als Feiertag begangen, doch kaum ein Datum taucht in Debatten über Gleichstellung häufiger auf."
    ],
    glossIt: ["die Volksabstimmung", "auf Bundesebene", "das Anliegen", "das Stimmrecht", "die Verfassungsänderung", "stimmberechtigt", "die Anordnung", "die Landsgemeinde", "begehen (einen Tag)"],
    lexIt: ["Februar", "entscheiden", "wählen", "abstimmen", "ablehnen", "Drittel", "Stimme", "sich aussprechen für", "Verzögerung", "Demokratie", "Parlament", "Gesamtheit", "Kanton", "Angelegenheit", "mitbestimmen", "Appenzell Innerrhoden", "einführen", "Entschluss", "Bundesgericht", "Versammlung", "Feiertag", "Datum", "Debatte", "Gleichstellung"],
    questions: [
      { t: "truefalse", q: "Bei der Abstimmung zwölf Jahre zuvor lehnten die Männer das Frauenstimmrecht ab.", a: 0 },
      { t: "mcq", q: "Wie erklärt der Text die späte Einführung?", opts: ["mit dem Widerstand des Bundesgerichts", "mit der Funktionsweise der direkten Demokratie", "mit einem Beschluss des Parlaments"], a: 1 },
      { t: "mcq", q: "Wie kam das Frauenstimmrecht in Appenzell Innerrhoden zustande?", opts: ["durch einen Beschluss der Landsgemeinde", "durch eine nationale Volksabstimmung", "durch eine Anordnung des Bundesgerichts"], a: 2 },
      { t: "truefalse", q: "Der 7. Februar ist in der Schweiz ein Feiertag.", a: 1 }
    ]
  },
  {
    id: "r-c1-innenstadt",
    cefr: "C1",
    tag: "g-konjunktiv1",
    titleIt: "Streit um die Innenstadt",
    sentences: [
      "Der Plan, die Innenstadt einer norddeutschen Hafenstadt weitgehend vom Autoverkehr zu befreien, sorgt seit Monaten für heftige Auseinandersetzungen.",
      "Die Befürworter argumentieren, eine autofreie Innenstadt sei leiser, sicherer und für Familien deutlich attraktiver.",
      "Zudem habe sich in anderen Städten gezeigt, dass Fußgängerzonen den Umsatz eher steigerten als senkten.",
      "Der Verband der Einzelhändler hält dagegen, viele Kundinnen und Kunden aus dem Umland kämen nur mit dem Auto und würden künftig lieber im Einkaufszentrum am Stadtrand einkaufen.",
      "Man habe nichts gegen weniger Verkehr, betont dessen Sprecherin, wohl aber gegen eine Planung, die über die Köpfe der Betroffenen hinweg erfolge.",
      "Die Stadtverwaltung wiederum versichert, sämtliche Einwände würden geprüft und in den endgültigen Entwurf einbezogen.",
      "Ob dies mehr ist als eine Floskel, lässt sich derzeit nicht beurteilen.",
      "Fest steht nur, dass im kommenden Frühjahr eine Bürgerbefragung stattfinden soll, deren Ergebnis allerdings rechtlich nicht bindend wäre."
    ],
    glossIt: ["die Auseinandersetzung", "der Befürworter", "der Umsatz", "der Einzelhändler", "dagegenhalten", "das Umland", "über die Köpfe hinweg", "der Einwand", "die Floskel", "rechtlich bindend"],
    lexIt: ["Plan", "Innenstadt", "Hafenstadt", "weitgehend", "Autoverkehr", "befreien", "heftig", "argumentieren", "autofrei", "leise", "sicher", "attraktiv", "Fußgängerzone", "steigern", "senken", "Verband", "Einkaufszentrum", "Stadtrand", "betonen", "Sprecherin", "Planung", "Betroffene", "Stadtverwaltung", "versichern", "prüfen", "Entwurf", "einbeziehen", "beurteilen", "Frühjahr", "Bürgerbefragung", "Ergebnis"],
    questions: [
      { t: "mcq", q: "Welches Argument bringen die Befürworter vor?", opts: ["Das Einkaufszentrum am Stadtrand müsse geschlossen werden.", "Fußgängerzonen hätten anderswo den Umsatz eher gesteigert.", "Die Kunden aus dem Umland kämen ohnehin mit dem Bus."], a: 1 },
      { t: "truefalse", q: "Die Sprecherin der Einzelhändler lehnt jede Verringerung des Verkehrs ab.", a: 1 },
      { t: "mcq", q: "Wie bewertet der Text die Zusicherung der Stadtverwaltung?", opts: ["als erwiesen", "als eindeutig falsch", "als etwas, das sich derzeit nicht beurteilen lässt"], a: 2 },
      { t: "truefalse", q: "Das Ergebnis der geplanten Bürgerbefragung wäre für die Stadt rechtlich verpflichtend.", a: 1 }
    ]
  },
  {
    id: "r-c1-hochwasser",
    cefr: "C1",
    tag: "g-partizipialattribut",
    titleIt: "Nach der Flut",
    sentences: [
      "Passau, an der Mündung von Inn und Ilz in die Donau gelegen, hat mit Hochwasser jahrhundertelange Erfahrung.",
      "Die an vielen Häusern der Altstadt angebrachten Markierungen erinnern an die Pegelstände vergangener Fluten.",
      "Eine der höchsten dieser Marken stammt aus dem Juni 2013, als das Wasser einen seit mehr als fünfhundert Jahren nicht mehr verzeichneten Stand erreichte.",
      "In den tiefer gelegenen Gassen standen Erdgeschosse und Keller tagelang unter Wasser, und zahlreiche Geschäfte mussten ihre durchnässte Ware entsorgen.",
      "Bemerkenswert war jedoch weniger der Schaden als die rasch einsetzende Hilfsbereitschaft.",
      "Über soziale Netzwerke zusammengerufene Freiwillige, viele von ihnen Studierende der örtlichen Universität, schaufelten Schlamm aus den Häusern und schleppten Sandsäcke.",
      "Über weitergehende Schutzmaßnahmen wird seither immer wieder diskutiert, denn eine durchgehende Mauer würde den Blick auf den Fluss und damit das Gesicht der Altstadt verändern.",
      "So lebt die Stadt mit einem Fluss, der ihr Reichtum und Gefahr zugleich ist."
    ],
    glossIt: ["die Mündung", "angebracht", "der Pegelstand", "verzeichnet", "das Erdgeschoss", "durchnässt", "entsorgen", "rasch einsetzend", "die Hilfsbereitschaft", "der Schlamm", "der Sandsack"],
    lexIt: ["Passau", "Inn", "Ilz", "Donau", "Hochwasser", "Erfahrung", "Altstadt", "Markierung", "erinnern", "Flut", "Marke", "Juni", "Stand", "Gasse", "Keller", "tagelang", "Geschäft", "Ware", "bemerkenswert", "Schaden", "soziale Netzwerke", "zusammenrufen", "Freiwillige", "Studierende", "Universität", "schaufeln", "schleppen", "Schutzmaßnahme", "diskutieren", "Mauer", "Blick", "Fluss", "Reichtum", "Gefahr"],
    questions: [
      { t: "mcq", q: "Woran erkennt man in der Passauer Altstadt frühere Hochwasser?", opts: ["an Sandsäcken vor den Türen", "an Markierungen an den Häusern", "an Schildern der Universität"], a: 1 },
      { t: "truefalse", q: "Im Juni 2013 stieg das Wasser so hoch wie seit über fünf Jahrhunderten nicht mehr.", a: 0 },
      { t: "mcq", q: "Was hebt der Text als besonders bemerkenswert hervor?", opts: ["die schnelle Hilfe vieler Freiwilliger", "die Höhe des Schadens", "die Arbeit der Feuerwehr"], a: 0 },
      { t: "mcq", q: "Warum ist eine durchgehende Mauer umstritten?", opts: ["Sie wäre zu teuer.", "Sie würde den Schiffsverkehr behindern.", "Sie würde das Bild der Altstadt verändern."], a: 2 }
    ]
  },
  {
    id: "r-c1-betriebsrat",
    cefr: "C1",
    tag: "g-funktionsverbgefuege",
    titleIt: "Der Betriebsrat meldet sich zu Wort",
    sentences: [
      "In einem mittelständischen Maschinenbauunternehmen bei Bielefeld hat die Geschäftsführung im Herbst eine neue Arbeitszeitregelung zur Diskussion gestellt.",
      "Künftig sollten die Beschäftigten ihre Schichten über eine App selbst planen, was zunächst nach mehr Freiheit klang.",
      "Der Betriebsrat brachte jedoch bald zur Sprache, dass die Regelung ohne seine Zustimmung gar nicht in Kraft treten dürfe.",
      "Nach dem Betriebsverfassungsgesetz steht ihm bei Fragen der Arbeitszeit nämlich ein Mitbestimmungsrecht zu.",
      "Auf der Betriebsversammlung nahmen mehrere Beschäftigte Bezug auf ähnliche Systeme in früheren Betrieben, die in der Praxis vor allem den Druck erhöht hätten.",
      "Andere gaben zu bedenken, dass Eltern auf diese Weise endlich ihre Arbeitszeit mit den Öffnungszeiten der Kita in Einklang bringen könnten.",
      "Nach wochenlangen Verhandlungen kam schließlich eine Betriebsvereinbarung zustande, die beiden Seiten Rechnung trägt: Die App wird eingeführt, doch niemand darf gezwungen werden, kurzfristig eingetragene Schichten zu übernehmen.",
      "Die Geschäftsführerin räumte später ein, sie habe den Einfluss des Betriebsrats anfangs unterschätzt, inzwischen aber Gefallen an dem Verfahren gefunden."
    ],
    glossIt: ["zur Diskussion stellen", "die Arbeitszeitregelung", "der Betriebsrat", "zur Sprache bringen", "in Kraft treten", "das Mitbestimmungsrecht", "Bezug nehmen auf", "zu bedenken geben", "in Einklang bringen", "die Betriebsvereinbarung", "Rechnung tragen", "einräumen"],
    lexIt: ["mittelständisch", "Maschinenbau", "Unternehmen", "Bielefeld", "Geschäftsführung", "Herbst", "künftig", "Beschäftigte", "Schicht", "planen", "Freiheit", "Zustimmung", "Betriebsverfassungsgesetz", "zustehen", "Betriebsversammlung", "ähnlich", "Betrieb", "Druck", "erhöhen", "Eltern", "Öffnungszeiten", "Kita", "Verhandlung", "zustande kommen", "einführen", "zwingen", "kurzfristig", "eintragen", "Einfluss", "unterschätzen", "Gefallen finden an", "Verfahren"],
    questions: [
      { t: "truefalse", q: "Die Geschäftsführung durfte die neue Regelung ohne den Betriebsrat einführen.", a: 1 },
      { t: "mcq", q: "Welchen Vorteil sahen manche Beschäftigte in der App?", opts: ["höhere Löhne", "Arbeitszeiten, die sich besser mit der Kinderbetreuung vereinbaren lassen", "weniger Nachtschichten"], a: 1 },
      { t: "mcq", q: "Was legt die Betriebsvereinbarung fest?", opts: ["Die App wird nicht eingeführt.", "Kurzfristige Schichten sind für alle Pflicht.", "Niemand muss kurzfristig eingetragene Schichten übernehmen."], a: 2 },
      { t: "truefalse", q: "Die Geschäftsführerin sieht das Verfahren inzwischen positiv.", a: 0 }
    ]
  },

  /* ---------------- C2 ---------------- */
  {
    id: "r-c2-lob",
    cefr: "C2",
    tag: "g-register",
    titleIt: "Nicht geschimpft ist genug gelobt",
    sentences: [
      "Wer im deutschsprachigen Raum ein Lob erwartet, das sich auch als solches zu erkennen gibt, wird nicht selten enttäuscht.",
      "„Nicht geschimpft ist genug gelobt“, lautet ein schwäbisches Sprichwort, und es beschreibt eine Haltung, die weit über Schwaben hinaus verbreitet ist.",
      "Ein beiläufiges „Passt schon“ kann aus dem Mund einer Vorgesetzten das höchste der Gefühle sein, während ein überschwängliches „Ganz toll!“ mitunter eher stutzig machen sollte.",
      "Umgekehrt verbirgt sich hinter einem freundlich vorgebrachten „Kann man so machen“ oft ein vernichtendes Urteil, dem nur der Nachsatz fehlt, man könne es eben auch lassen.",
      "Entscheidend ist dabei weniger der Wortlaut als die Betonung, die Pause und die Frage, wer zu wem spricht.",
      "Wer nur die wörtliche Bedeutung gelernt hat, bedankt sich artig für eine Spitze oder fühlt sich durch eine wohlwollende Untertreibung gekränkt.",
      "Ein Regelwerk, das einem diese Unterscheidungen abnähme, gibt es nicht; es gibt allenfalls die Gewöhnung, die man sich durch eine gewisse Anzahl öffentlich begangener Fehlgriffe erwirbt.",
      "Dass ausgerechnet eine Sprache, der man gern Direktheit nachsagt, so viel zwischen den Zeilen verhandelt, gehört zu ihren hübscheren Widersprüchen."
    ],
    glossIt: ["sich zu erkennen geben", "das Sprichwort", "das höchste der Gefühle", "überschwänglich", "stutzig machen", "vernichtend", "der Nachsatz", "artig", "die Spitze", "die Untertreibung", "gekränkt", "der Fehlgriff", "nachsagen"],
    lexIt: ["Raum", "Lob", "erwarten", "enttäuschen", "schwäbisch", "Haltung", "verbreitet", "beiläufig", "Vorgesetzte", "mitunter", "umgekehrt", "sich verbergen", "vorbringen", "Urteil", "entscheidend", "Wortlaut", "Betonung", "wörtlich", "Bedeutung", "sich bedanken", "wohlwollend", "Regelwerk", "abnehmen", "allenfalls", "Gewöhnung", "erwerben", "Direktheit", "Widerspruch"],
    questions: [
      { t: "mcq", q: "Was kann ein beiläufiges „Passt schon“ einer Vorgesetzten bedeuten?", opts: ["eine zurückhaltend ausgedrückte Anerkennung", "eine versteckte Kritik", "die Aufforderung, die Arbeit zu wiederholen"], a: 0 },
      { t: "mcq", q: "Was verbirgt sich laut Text oft hinter „Kann man so machen“?", opts: ["eine ehrliche Zustimmung", "eine Bitte um Hilfe", "eine scharfe Ablehnung"], a: 2 },
      { t: "truefalse", q: "Nach Ansicht des Autors lassen sich solche Feinheiten mit klaren Regeln lernen.", a: 1 },
      { t: "mcq", q: "Worin sieht der Text einen Widerspruch?", opts: ["Schwaben loben häufiger als andere.", "Eine als direkt geltende Sprache sagt vieles nur indirekt.", "Vorgesetzte sprechen undeutlicher als Kollegen."], a: 1 }
    ]
  },
  {
    id: "r-c2-arbeitszeugnis",
    cefr: "C2",
    tag: "g-komparation",
    titleIt: "Stets zu unserer vollsten Zufriedenheit",
    sentences: [
      "Arbeitszeugnisse müssen in Deutschland von Rechts wegen wohlwollend formuliert sein, zugleich aber der Wahrheit entsprechen.",
      "Aus diesem Zielkonflikt ist im Lauf der Jahrzehnte eine Geheimsprache hervorgegangen, deren Existenz offiziell niemand einräumt und die gleichwohl jede Personalabteilung beherrscht, obwohl das Gesetz Formulierungen, die etwas anderes aussagen sollen als ihr Wortlaut, ausdrücklich untersagt.",
      "Die Notenskala beginnt beim grammatisch fragwürdigen Superlativ „stets zu unserer vollsten Zufriedenheit“, der einer glatten Eins entspricht.",
      "Fehlt das Wörtchen „stets“, ist man bereits bei einer Zwei, und wer lediglich „zu unserer Zufriedenheit“ gearbeitet hat, liegt nur noch bei einem Ausreichend.",
      "Heimtückischer sind Sätze, die auf den ersten Blick schmeicheln: Wer „sich stets bemühte“, hat nach gängiger Lesart nichts zustande gebracht, und wem bescheinigt wird, er habe „durch seine Geselligkeit zur Verbesserung des Betriebsklimas beigetragen“, dem wird mitunter ein allzu entspanntes Verhältnis zum Alkohol unterstellt.",
      "Ebenso aufschlussreich ist, was fehlt: Ein Zeugnis, das die Ehrlichkeit einer Kassiererin mit keinem Wort erwähnt, sagt über sie womöglich mehr, als ihr lieb sein kann.",
      "Inzwischen kursieren derart viele Ratgeber zur Entschlüsselung, dass manche Personalverantwortliche Zeugnisse kaum noch ernst nehmen und lieber zum Telefonhörer greifen.",
      "So hat ausgerechnet das Bemühen, niemandem zu schaden, eine Textsorte hervorgebracht, der kaum noch jemand glaubt."
    ],
    glossIt: ["das Arbeitszeugnis", "von Rechts wegen", "der Zielkonflikt", "hervorgehen aus", "untersagen", "gleichwohl", "heimtückisch", "schmeicheln", "bescheinigen", "die Geselligkeit", "das Betriebsklima", "unterstellen", "aufschlussreich", "die Entschlüsselung", "die Textsorte"],
    lexIt: ["wohlwollend", "formulieren", "Wahrheit", "entsprechen", "Jahrzehnt", "Geheimsprache", "Existenz", "offiziell", "einräumen", "Gesetz", "aussagen", "ausdrücklich", "Personalabteilung", "beherrschen", "Notenskala", "fragwürdig", "Superlativ", "stets", "Zufriedenheit", "lediglich", "sich bemühen", "zustande bringen", "Verbesserung", "beitragen", "Verhältnis", "Ehrlichkeit", "Kassiererin", "erwähnen", "womöglich", "kursieren", "Ratgeber", "Personalverantwortliche", "Telefonhörer", "schaden", "hervorbringen"],
    questions: [
      { t: "mcq", q: "Welche beiden Anforderungen muss ein Arbeitszeugnis gleichzeitig erfüllen?", opts: ["Es muss kurz und vollständig sein.", "Es muss wohlwollend und wahr sein.", "Es muss verschlüsselt und offiziell sein."], a: 1 },
      { t: "truefalse", q: "Das Gesetz erlaubt Formulierungen, die etwas anderes aussagen sollen als ihr Wortlaut.", a: 1 },
      { t: "mcq", q: "Wie wird „Er hat sich stets bemüht“ in der Zeugnissprache gewöhnlich gelesen?", opts: ["Er war besonders fleißig und erfolgreich.", "Er war bei den Kollegen beliebt.", "Seine Bemühungen blieben ohne Ergebnis."], a: 2 },
      { t: "mcq", q: "Welche Folge hat die Geheimsprache laut Text?", opts: ["Manche Personalverantwortliche verlassen sich lieber auf ein Telefonat.", "Zeugnisse werden immer länger.", "Arbeitgeber stellen keine Zeugnisse mehr aus."], a: 0 }
    ]
  },
  {
    id: "r-c2-heimat",
    cefr: "C2",
    tag: "g-konjunktiv2",
    titleIt: "Ein schwieriges Wort",
    sentences: [
      "Kaum ein deutsches Wort gilt als so unübersetzbar und zugleich so belastet wie „Heimat“.",
      "Es bezeichnet nicht bloß den Ort, an dem man geboren wurde, sondern ein Geflecht aus Landschaft, Mundart, Gerüchen und Gewohnheiten, dessen Bedeutung einem meist erst in der Ferne aufgeht.",
      "Im neunzehnten Jahrhundert romantisch verklärt, im Nationalsozialismus zur Blut-und-Boden-Ideologie verengt und in der Nachkriegszeit durch kitschige Heimatfilme ins Harmlose gewendet, hat der Begriff mehr Umdeutungen erlebt als die meisten seiner Nachbarn im Wörterbuch.",
      "Lange Zeit mied ihn deshalb, wer sich für aufgeklärt hielt, und überließ ihn bereitwillig denen, die damit Grenzen ziehen wollten.",
      "Seit einigen Jahren jedoch wird das Wort neu verhandelt: Es gibt Ministerien, die es im Namen tragen, und Schriftstellerinnen mit Migrationsgeschichte fragen, ob man nicht auch mehrere Heimaten haben könne.",
      "Wäre Heimat nur eine Frage der Herkunft, so bliebe sie all jenen verschlossen, die nicht dort zur Welt gekommen sind, wo sie heute leben.",
      "Verstünde man sie hingegen als etwas, das man sich aneignet, indem man sich an einem Ort einrichtet und dort gebraucht wird, so verlöre sie womöglich ihre ausgrenzende Schärfe.",
      "Welche der beiden Lesarten sich durchsetzen wird, ist offen; dass um ein einziges Wort so erbittert gestritten wird, zeigt immerhin, wie viel man ihm noch zutraut."
    ],
    glossIt: ["belastet", "das Geflecht", "die Mundart", "aufgehen (jemandem)", "verklären", "verengen", "kitschig", "die Umdeutung", "meiden", "aufgeklärt", "sich aneignen", "ausgrenzend", "die Lesart", "erbittert", "zutrauen"],
    lexIt: ["unübersetzbar", "Heimat", "bezeichnen", "Ort", "Landschaft", "Geruch", "Gewohnheit", "Ferne", "Jahrhundert", "romantisch", "Nationalsozialismus", "Ideologie", "Nachkriegszeit", "Heimatfilm", "harmlos", "Begriff", "Wörterbuch", "bereitwillig", "Grenze", "verhandeln", "Ministerium", "Schriftstellerin", "Migrationsgeschichte", "Herkunft", "verschlossen", "sich einrichten", "brauchen", "Schärfe", "sich durchsetzen", "streiten"],
    questions: [
      { t: "mcq", q: "Wann wird einem laut Text die Bedeutung von Heimat meist bewusst?", opts: ["in der Kindheit", "wenn man weit weg ist", "beim Lesen von Wörterbüchern"], a: 1 },
      { t: "truefalse", q: "In der Nachkriegszeit wurde der Begriff durch Heimatfilme verharmlost.", a: 0 },
      { t: "mcq", q: "Welche Lesart könnte dem Begriff nach dem Text seine ausgrenzende Schärfe nehmen?", opts: ["Heimat als Frage der Herkunft", "Heimat als Begriff der Literatur", "Heimat als etwas, das man sich an einem Ort aneignet"], a: 2 },
      { t: "mcq", q: "Was zeigt der heftige Streit um das Wort laut Text?", opts: ["dass man ihm noch viel Bedeutung beimisst", "dass das Wort bald verschwinden wird", "dass die Politik es nicht mehr benutzt"], a: 0 }
    ]
  }
]);
