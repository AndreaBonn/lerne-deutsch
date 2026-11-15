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
    model: "Hallo, ich heiße Maria Rossi. Ich komme aus Italien, aus Bologna. Jetzt wohne ich in Berlin, in einer kleinen Wohnung. Ich bin 28 Jahre alt und arbeite in einem Café. Am Wochenende spiele ich gern Gitarre und lerne Deutsch. Mein Hobby ist auch Kochen."
  }
];
