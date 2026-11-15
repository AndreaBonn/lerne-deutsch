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
  }
];
