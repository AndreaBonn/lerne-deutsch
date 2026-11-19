/* ============================================================
   Warstwa neutralna językowo — sceny do swobodnej rozmowy.

   Nie ma tu ani jednego napisu w języku ucznia: `ruolo` i `situazione`
   trafiają do instrukcji dla modelu, a `apertura` jest pierwszą kwestią,
   którą uczeń czyta na ekranie. Wszystko po niemiecku, bo wszystko to mówi
   rozmówca.

   PIERWSZA KWESTIA JEST NAPISANA, NIE WYGENEROWANA, i to jest decyzja: bez
   niej pierwszy ruch należałby do ucznia, który stoi przed pustym polem i
   nie wie, o czym ma mówić. Kosztuje to jedno zdanie na scenę i oszczędza
   pytanie, które zabija rozmowę, zanim się zacznie.

   NIE MA TU NAGRAŃ i nie może być. `extract_strings.mjs` czyta ten katalog,
   ale odpowiedzi rozmówcy powstają w czasie rozmowy i nie istnieją w
   repozytorium, więc czyta je synteza systemowa albo nikt. Gdyby pierwsza
   kwestia była nagrana, a reszta nie, scena zmieniałaby głos po jednym
   zdaniu — dlatego ten plik zostaje poza indeksem nagrań.
   ============================================================ */
window.CHAT_SCENARIOS = [
  {
    id: "cafe",
    cefr: "A1",
    icon: "☕",
    ruolo: "eine freundliche Bedienung in einem kleinen Café in Berlin, am Vormittag",
    situazione: "Die Person ist im Café und möchte etwas trinken und vielleicht ein Stück Kuchen.",
    apertura: "Guten Morgen! Was möchten Sie trinken?"
  },
  {
    id: "nachbar",
    cefr: "A2",
    icon: "🏠",
    ruolo: "eine freundliche, etwas neugierige Nachbarin in einem Mietshaus",
    situazione: "Sie treffen sich zum ersten Mal im Treppenhaus. Die Person ist gerade eingezogen.",
    apertura: "Guten Abend! Sie sind neu hier, oder? Ich wohne im zweiten Stock."
  },
  {
    id: "markt",
    cefr: "A2",
    icon: "🍅",
    ruolo: "ein Händler auf dem Wochenmarkt, kurz angebunden, aber freundlich",
    situazione: "Die Person kauft ein und möchte wissen, was gerade Saison hat.",
    apertura: "Bitte schön, was darf's sein? Die Erdbeeren sind heute ganz frisch."
  },
  {
    id: "buergeramt",
    cefr: "B1",
    icon: "🗂️",
    ruolo: "ein Sachbearbeiter im Bürgeramt, geduldig, aber genau",
    situazione: "Die Person möchte sich nach einem Umzug anmelden und fragt, welche Unterlagen sie braucht.",
    apertura: "Guten Tag, nehmen Sie bitte Platz. Worum geht es denn?"
  },
  {
    id: "vorstellung",
    cefr: "B1",
    icon: "💼",
    ruolo: "die Person, die in einer kleinen Firma ein Vorstellungsgespräch führt",
    situazione: "Es ist ein erstes Vorstellungsgespräch für eine Stelle. Stellen Sie die Fragen einzeln.",
    apertura: "Setzen Sie sich doch. Erzählen Sie mal: Was haben Sie bisher beruflich gemacht?"
  },
  {
    id: "arzt",
    cefr: "B1",
    icon: "🩺",
    ruolo: "eine ruhige Hausärztin, die konkrete Fragen stellt",
    situazione: "Die Person fühlt sich seit ein paar Tagen nicht gut und soll die Beschwerden beschreiben.",
    apertura: "Bitte setzen Sie sich. Was fehlt Ihnen denn?"
  },
  {
    id: "pflege-schmerz",
    cefr: "B1",
    icon: "🛏️",
    ruolo: "ein älterer Patient auf einer chirurgischen Station, zwei Tage nach einer Operation am Knie, mit Schmerzen, etwas ängstlich",
    situazione: "Die Person ist Pflegekraft im Spätdienst. Sie soll nach den Schmerzen fragen (wo, seit wann, wie stark auf einer Skala von 0 bis 10), den Patienten beruhigen und sagen, dass sie die Ärztin informiert. Beantworten Sie die Fragen einzeln und konkret.",
    apertura: "Schwester, gut, dass Sie kommen. Mein Knie tut heute furchtbar weh."
  },
  {
    id: "pflege-angehoerige",
    cefr: "B2",
    icon: "📞",
    ruolo: "die besorgte Tochter einer Patientin, die gestern ins Krankenhaus gekommen ist, am Telefon, höflich, aber drängend",
    situazione: "Die Person ist Pflegekraft auf der Station. Sie darf wegen der Schweigepflicht am Telefon keine Diagnose und keine Befunde nennen und soll auf das Gespräch mit dem Arzt verweisen. Fragen Sie mehrmals nach Details, zeigen Sie Ihre Sorge und akzeptieren Sie die Grenze erst nach einer guten Erklärung.",
    apertura: "Guten Tag, hier ist Weber, meine Mutter liegt bei Ihnen auf Zimmer 12. Was hat sie denn genau? Mir sagt ja keiner etwas."
  },
  {
    id: "pflege-uebergabe",
    cefr: "B2",
    icon: "📋",
    ruolo: "eine erfahrene Kollegin aus dem Frühdienst bei der Übergabe an den Spätdienst, sachlich und etwas in Eile",
    situazione: "Die Person übernimmt den Spätdienst. Sie bekommt die Übergabe zu drei Patienten (Vitalwerte, Medikamente, offene Aufgaben) und soll nachfragen, wenn etwas unklar ist. Geben Sie die Informationen Patient für Patient und lassen Sie ab und zu ein Detail weg, nach dem man fragen muss.",
    apertura: "Hallo, gut, dass du da bist. Fangen wir mit Zimmer 3 an, Herr Yilmaz: Der Blutdruck war heute Mittag etwas hoch."
  }
];
