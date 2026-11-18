/* ============================================================
   Warstwa neutralna językowo - zadania pisemne.

   Dwa rodzaje, bo dwie różne rzeczy da się sprawdzić bez człowieka:

   - `compose` - uczeń pisze sam. Zadanie DEKLARUJE konstrukcje, których
     wymaga (`requires`), a writing.js rozwija je przez koniugator i
     szuka w tekście. To nie jest ocena wypracowania, tylko odczyt: tego
     użyłeś, tego nie. Model (`model`) służy do porównania PO napisaniu,
     nigdy przed.

   - `translate` - tłumaczenie zdanie po zdaniu. Zdanie źródłowe jest w
     nakładce (bo je czyta uczeń), a przyjmowane wersje niemieckie tutaj.
     To jest zwykłe ćwiczenie `trans`, więc jedzie istniejącym builderem
     i tak samo trafia do quaderno błędów.

   Nagrań tu nie ma i nie powinno być: to jest ćwiczenie pisania, a
   każde zdanie modelu kosztowałoby plik, którego nikt by nie odtworzył.

   Lista przyjmowanych tłumaczeń jest z założenia NIEPEŁNA. Po to jest
   `checkOpen` z tolerancją i po to model do porównania: automat, który
   udaje, że zna wszystkie poprawne wersje zdania, myli się częściej niż
   uczeń.
   ============================================================ */
window.WRITING = [

  {
    id: "w-a1-vorstellung",
    cefr: "A1",
    tag: "g-praesens",
    kind: "compose",
    titleIt: "Ich stelle mich vor",
    minWords: 25,
    requires: [
      { verb: "heißen", tense: "praes" },
      { verb: "kommen", tense: "praes" },
      { verb: "wohnen", tense: "praes" },
      { any: ["Hallo", "Guten Tag", "Guten Morgen"] }
    ],
    model: "Hallo, ich heiße Maria Rossi. Ich komme aus Italien, aus Bologna. Jetzt wohne ich in Berlin, in einer kleinen Wohnung. Ich bin 28 Jahre alt und arbeite in einem Café. Am Wochenende spiele ich gern Gitarre und lerne Deutsch. Außerdem koche ich gern."
  },

  {
    id: "w-a2-gestern",
    cefr: "A2",
    tag: "g-perfekt",
    kind: "translate",
    titleIt: "Was hast du gestern gemacht?",
    items: [
      { a: ["Gestern bin ich ins Kino gegangen", "Ich bin gestern ins Kino gegangen"] },
      { a: ["Wir haben ein Schnitzel gegessen"] },
      { a: ["Ich habe die Frage nicht verstanden"] },
      { a: ["Der Zug ist zu spät angekommen", "Der Zug ist mit Verspätung angekommen", "Der Zug ist verspätet angekommen"] },
      { a: ["Ich bin spät aufgestanden"] }
    ]
  },

  {
    id: "w-b1-absage",
    cefr: "B1",
    tag: "g-register",
    kind: "compose",
    titleIt: "Einen Termin absagen",
    minWords: 50,
    requires: [
      { any: ["Sehr geehrte", "Sehr geehrter", "Guten Tag"] },
      { verb: "können", tense: "konj2" },
      { any: ["leider", "es tut mir leid"] },
      { any: ["Mit freundlichen Grüßen", "Freundliche Grüße", "Beste Grüße"] }
    ],
    model: "Sehr geehrte Frau Dr. Huber,\nleider muss ich meinen Termin am Donnerstag, dem 14. März, um 16 Uhr absagen. An diesem Tag bin ich beruflich in Hamburg, und ich kann die Reise nicht verschieben. Könnte ich in der folgenden Woche zu Ihnen kommen? Am Dienstag und am Mittwoch habe ich nachmittags Zeit. Vielen Dank für Ihr Verständnis.\n\nMit freundlichen Grüßen\nMarkus Weber"
  },

  {
    id: "w-b1-meinung",
    cefr: "B1",
    tag: "g-nebensatz-dass",
    kind: "translate",
    titleIt: "Sagen, was man denkt",
    items: [
      { a: ["Ich denke, dass das eine gute Idee ist", "Ich glaube, dass das eine gute Idee ist", "Ich finde, dass das eine gute Idee ist", "Ich denke, das ist eine gute Idee", "Ich glaube, das ist eine gute Idee", "Ich finde, das ist eine gute Idee"] },
      { a: ["Ich bin nicht deiner Meinung", "Ich bin nicht mit dir einverstanden", "Ich stimme dir nicht zu", "Ich bin anderer Meinung als du"] },
      { a: ["Meiner Meinung nach ist das zu teuer", "Meiner Meinung nach ist es zu teuer", "Ich finde das zu teuer"] },
      { a: ["Mir scheint, dass er recht hat", "Es scheint mir, dass er recht hat", "Mir scheint, er hat recht"] },
      { a: ["Das hängt davon ab, was du willst", "Es hängt davon ab, was du willst", "Das kommt darauf an, was du willst", "Es kommt darauf an, was du willst"] }
    ]
  },

  {
    id: "w-b2-argumentieren",
    cefr: "B2",
    tag: "g-konnektoren",
    kind: "compose",
    titleIt: "Eine Position vertreten",
    minWords: 80,
    requires: [
      { any: ["außerdem", "zudem", "darüber hinaus"] },
      { any: ["jedoch", "allerdings", "andererseits"] },
      { any: ["deshalb", "daher", "deswegen", "folglich"] },
      { verb: "sollen", tense: "konj2" }
    ],
    model: "Das Homeoffice hat mehr verändert, als es versprochen hat. Einerseits kann man weit weg vom Büro wohnen und seinen Tag freier einteilen. Außerdem spart man die Zeit für den Arbeitsweg, die niemand als Arbeitszeit betrachtet hat, obwohl sie es war. Andererseits lassen sich nicht alle Berufe von zu Hause aus ausüben, und wer weiterhin im Betrieb arbeitet, fühlt sich schnell als Mitarbeiter zweiter Klasse. Dieser Einwand ist berechtigt, doch er spricht nicht gegen das Homeoffice, sondern für einen Ausgleich: Wer im Betrieb arbeiten muss, könnte zum Beispiel einen Zuschuss für den Arbeitsweg oder kürzere Arbeitszeiten bekommen. Deshalb liegt das Problem nicht im Ort, sondern in der Frage, wer entscheidet. Die Unternehmen sollten das offen sagen, statt von Flexibilität zu sprechen."
  },

  {
    id: "w-c1-zusammenfassung",
    cefr: "C1",
    tag: "g-konjunktiv1",
    kind: "compose",
    titleIt: "Zusammenfassen, ohne abzuschreiben",
    minWords: 70,
    requires: [
      { any: ["dem Autor zufolge", "nach Ansicht des Autors", "laut dem Autor", "dem Text zufolge"] },
      { verb: "sein", tense: "konj1" },
      { any: ["zusammenfassend", "insgesamt", "kurz gesagt"] }
    ],
    model: "Der Text beschäftigt sich mit der Sprache der Behörden und mit ihrer Gewohnheit, offenzulassen, wer handelt. Dem Autor zufolge sei diese Distanz weder zufällig noch harmlos: Eine Verwaltung, die den Urheber einer Entscheidung nicht nenne, mache es den Betroffenen schwerer, Widerspruch einzulegen. Erwähnt werden Leitfäden für bürgernahe Sprache, die es seit Jahren gebe, die aber nur selten angewandt würden. Zusammenfassend ist die Amtssprache für den Autor kein bloßes Stilproblem, sondern eine Frage der Rechte der Bürger."
  }
];
