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
    situazione: "Sie sind im Café. Sie möchten etwas trinken und vielleicht ein Stück Kuchen.",
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
  }
];
