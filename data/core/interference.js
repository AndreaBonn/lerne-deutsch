/* ============================================================
   Fałszywi przyjaciele i interferencja z językiem ucznia.

   Warstwa neutralna: niemieckie słowo, zdanie z nim i DEKLARACJA, dla
   których języków ta pułapka w ogóle istnieje. „Rock" myli Francuza,
   który zna „le rock" jako muzykę, a Włocha nie myli; „Dom" myli Polaka,
   a Anglika nie mówi nic.

   Dlatego to jedyna kategoria w kursie, która NIE ma być symetryczna, i
   dlatego pole `for` jest tutaj, a nie w nakładce: parity.mjs sprawdza
   obecność wpisu w nakładce WŁAŚNIE względem tej listy. Wyłączenie
   bramki na tej kategorii nie wchodziło w grę - krótsza lista wygląda
   jak lista.

   Pole `it` trzyma słowo w języku UCZONYM (niemieckim), zob. CLAUDE.md
   „Pola it* niosą język uczony".

   Plik leży w data/core/, bo extract_strings.mjs chodzi tylko tutaj: poza
   tym katalogiem ćwiczenie rodzi się nieme.
   ============================================================ */
window.INTERFERENCE = [
  { id: "ente", it: "die Ente", ex: "Auf dem See schwimmt eine Ente.", for: ["it"] },
  { id: "tasse", it: "die Tasse", ex: "Ich trinke Tee aus einer großen Tasse.", for: ["it"] },
  { id: "chef", it: "der Chef", ex: "Mein Chef kommt heute später ins Büro.", for: ["it", "en", "es"] },
  { id: "mappe", it: "die Mappe", ex: "Die Rechnungen liegen in der blauen Mappe.", for: ["it", "es", "pl"] },
  { id: "brav", it: "brav", ex: "Der kleine Junge war heute sehr brav.", for: ["it", "fr"] },
  { id: "rente", it: "die Rente", ex: "Mein Opa bekommt jeden Monat seine Rente.", for: ["es"] },
  { id: "gymnasium", it: "das Gymnasium", ex: "Meine Tochter geht auf das Gymnasium.", for: ["es", "pl"] },
  { id: "regal", it: "das Regal", ex: "Die Bücher stehen im Regal.", for: ["es"] },
  { id: "rock", it: "der Rock", ex: "Sie trägt heute einen roten Rock.", for: ["fr"] },
  { id: "rat", it: "der Rat", ex: "Danke für deinen Rat, er hat mir geholfen.", for: ["fr"] },
  { id: "sage", it: "die Sage", ex: "Die Sage erzählt von einem Schatz im Wald.", for: ["fr"] },
  { id: "magazin", it: "das Magazin", ex: "Ich lese jede Woche ein Magazin über Reisen.", for: ["fr"] },
  { id: "dom", it: "der Dom", ex: "Der Dom in Köln ist sehr groß.", for: ["pl"] },
  { id: "kuchen", it: "der Kuchen", ex: "Zum Geburtstag backe ich einen Kuchen.", for: ["pl"] },
  { id: "pension", it: "die Pension", ex: "Wir übernachten in einer kleinen Pension.", for: ["pl"] },
  { id: "also", it: "also", ex: "Es regnet, also bleiben wir zu Hause.", for: ["en"] },
  { id: "bekommen", it: "bekommen", ex: "Ich bekomme morgen ein Paket.", for: ["en"] },
  { id: "gift", it: "das Gift", ex: "Dieses Gift ist für Menschen gefährlich.", for: ["en"] },
  { id: "handy", it: "das Handy", ex: "Mein Handy liegt auf dem Tisch.", for: ["en"] }
];
