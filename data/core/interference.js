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
  { id: "ente", it: "die Ente", ex: "Auf dem See schwimmt eine Ente.", for: ["it", "es"] },
  { id: "tasse", it: "die Tasse", ex: "Ich trinke Tee aus einer großen Tasse.", for: ["it"] },
  { id: "chef", it: "der Chef", ex: "Mein Chef kommt heute später ins Büro.", for: ["it", "en", "es"] },
  { id: "mappe", it: "die Mappe", ex: "Die Rechnungen liegen in der blauen Mappe.", for: ["it", "es", "pl"] },
  { id: "brav", it: "brav", ex: "Der kleine Junge war heute sehr brav.", for: ["it", "fr", "es"] },
  { id: "rente", it: "die Rente", ex: "Mein Opa bekommt jeden Monat seine Rente.", for: ["es"] },
  { id: "gymnasium", it: "das Gymnasium", ex: "Meine Tochter geht auf das Gymnasium.", for: ["es", "pl"] },
  { id: "regal", it: "das Regal", ex: "Die Bücher stehen im Regal.", for: ["es"] },
  { id: "rock", it: "der Rock", ex: "Sie trägt heute einen roten Rock.", for: ["fr", "es"] },
  { id: "rat", it: "der Rat", ex: "Danke für deinen Rat, er hat mir geholfen.", for: ["fr", "es"] },
  { id: "sage", it: "die Sage", ex: "Die Sage erzählt von einem Schatz im Wald.", for: ["fr"] },
  { id: "magazin", it: "das Magazin", ex: "Ich lese jede Woche ein Magazin über Reisen.", for: ["fr"] },
  { id: "dom", it: "der Dom", ex: "Der Dom in Köln ist sehr groß.", for: ["pl"] },
  { id: "kuchen", it: "der Kuchen", ex: "Zum Geburtstag backe ich einen Kuchen.", for: ["pl"] },
  { id: "pension", it: "die Pension", ex: "Wir übernachten in einer kleinen Pension.", for: ["pl"] },
  { id: "also", it: "also", ex: "Es regnet, also bleiben wir zu Hause.", for: ["en"] },
  { id: "bekommen", it: "bekommen", ex: "Ich bekomme morgen ein Paket.", for: ["en"] },
  { id: "gift", it: "das Gift", ex: "Dieses Gift ist für Menschen gefährlich.", for: ["en"] },
  { id: "handy", it: "das Handy", ex: "Mein Handy liegt auf dem Tisch.", for: ["en"] },
  { id: "promotion", it: "die Promotion", ex: "Nach der Promotion trägt sie den Titel Doktor.", for: ["it", "en", "es"] },
  { id: "artist", it: "der Artist", ex: "Im Zirkus läuft der Artist auf einem Seil hoch über uns.", for: ["it", "en", "es"] },
  { id: "tablett", it: "das Tablett", ex: "Der Kellner bringt die Gläser auf einem Tablett.", for: ["it", "en", "es"] },
  { id: "note", it: "die Note", ex: "In Mathe habe ich diesmal eine gute Note bekommen.", for: ["it", "en"] },
  { id: "konto", it: "das Konto", ex: "Ich überweise das Geld auf mein Konto.", for: ["it"] },
  { id: "kamera", it: "die Kamera", ex: "Ich mache mit meiner neuen Kamera viele Fotos.", for: ["it"] },
  { id: "kantine", it: "die Kantine", ex: "Mittags essen wir in der Kantine.", for: ["it"] },
  { id: "firma", it: "die Firma", ex: "Meine Schwester arbeitet bei einer großen Firma.", for: ["it", "es"] },
  { id: "konkurs", it: "der Konkurs", ex: "Nach zwei schlechten Jahren musste die Firma Konkurs anmelden.", for: ["it", "es"] },
  { id: "peperoni", it: "die Peperoni", ex: "Die Peperoni auf der Pizza sind sehr scharf.", for: ["it", "es"] },
  { id: "kalt", it: "kalt", ex: "Im Winter ist das Wasser im See sehr kalt.", for: ["it"] },
  { id: "lupe", it: "die Lupe", ex: "Mit der Lupe kann Opa die kleine Schrift lesen.", for: ["it"] },
  { id: "tante", it: "die Tante", ex: "Meine Tante wohnt mit ihrem Mann in Hamburg.", for: ["it"] },
  { id: "panne", it: "die Panne", ex: "Wir hatten auf der Autobahn eine Panne.", for: ["it"] },
  { id: "nonne", it: "die Nonne", ex: "Die Nonne lebt seit vielen Jahren im Kloster.", for: ["it"] },
  { id: "dirigent", it: "der Dirigent", ex: "Der Dirigent hebt die Hand, und das Orchester beginnt zu spielen.", for: ["it", "es"] },
  { id: "tempo", it: "das Tempo", ex: "Auf der Autobahn fährt er mit hohem Tempo.", for: ["it"] },
  { id: "station", it: "die Station", ex: "Mein Vater liegt im Krankenhaus auf Station vier.", for: ["it"] },
  { id: "prospekt", it: "der Prospekt", ex: "Im Reisebüro nehme ich einen Prospekt über Österreich mit.", for: ["it"] },
  { id: "mantel", it: "der Mantel", ex: "Es ist kalt draußen, zieh deinen Mantel an!", for: ["it", "es"] },
  { id: "kostuem", it: "das Kostüm", ex: "Zum Vorstellungsgespräch trägt sie ein dunkles Kostüm.", for: ["it"] },
  { id: "parole", it: "die Parole", ex: "Die Demonstranten rufen laut ihre Parolen.", for: ["it"] },
  { id: "patent", it: "das Patent", ex: "Die Ingenieurin hat ein Patent für ihre Erfindung bekommen.", for: ["it"] },
  { id: "termin", it: "der Termin", ex: "Ich habe morgen um zehn einen Termin beim Arzt.", for: ["it", "es"] },
  { id: "tafel", it: "die Tafel", ex: "Die Lehrerin schreibt die neuen Wörter an die Tafel.", for: ["it"] },
  { id: "weste", it: "die Weste", ex: "Unter dem Sakko trägt er eine graue Weste.", for: ["it"] },
  { id: "sensibel", it: "sensibel", ex: "Mein Sohn ist sehr sensibel und weint schnell.", for: ["en"] },
  { id: "eventuell", it: "eventuell", ex: "Ich komme eventuell etwas später, wenn der Zug Verspätung hat.", for: ["en"] },
  { id: "aktuell", it: "aktuell", ex: "Die aktuellen Nachrichten hören wir jeden Morgen im Radio.", for: ["en"] },
  { id: "brief", it: "der Brief", ex: "Ich schreibe meiner Oma einen langen Brief.", for: ["en", "es"] },
  { id: "rezept", it: "das Rezept", ex: "Der Arzt gibt mir ein Rezept für die Apotheke.", for: ["en"] },
  { id: "mist", it: "der Mist", ex: "So ein Mist, ich habe meinen Schlüssel vergessen!", for: ["en"] },
  { id: "bald", it: "bald", ex: "Der Sommer kommt bald, dann fahren wir ans Meer.", for: ["en"] },
  { id: "wer", it: "wer", ex: "Wer hat heute Geburtstag?", for: ["en"] },
  { id: "will", it: "will", ex: "Ich will heute Abend ins Kino gehen.", for: ["en"] },
  { id: "fast", it: "fast", ex: "Der Film dauert fast drei Stunden.", for: ["en"] },
  { id: "billion", it: "die Billion", ex: "Die Schulden des Landes liegen bei über einer Billion Euro.", for: ["en"] },
  { id: "spenden", it: "spenden", ex: "Wir spenden jedes Jahr Geld für arme Kinder.", for: ["en"] },
  { id: "smoking", it: "der Smoking", ex: "Zur Hochzeit trägt der Bräutigam einen schwarzen Smoking.", for: ["en"] },
  { id: "oldtimer", it: "der Oldtimer", ex: "Mein Nachbar repariert am Wochenende seinen roten Oldtimer.", for: ["en"] },
  { id: "art", it: "die Art", ex: "Welche Art von Musik hörst du gern?", for: ["en", "es"] },
  { id: "fabrik", it: "die Fabrik", ex: "In dieser Fabrik werden Autos gebaut.", for: ["en"] },
  { id: "lokal", it: "das Lokal", ex: "Am Abend gehen wir in ein gemütliches Lokal am Markt.", for: ["en"] },
  { id: "winken", it: "winken", ex: "Die Kinder winken dem Zug zum Abschied.", for: ["en"] },
  { id: "taste", it: "die Taste", ex: "Drück die grüne Taste, um das Gerät einzuschalten.", for: ["en"] },
  { id: "sympathisch", it: "sympathisch", ex: "Der neue Kollege ist mir sehr sympathisch.", for: ["en"] },
  { id: "konsequent", it: "konsequent", ex: "Die Eltern bleiben konsequent: Ohne Hausaufgaben gibt es kein Fernsehen.", for: ["en"] },
  { id: "hochzeit", it: "die Hochzeit", ex: "Die Hochzeit meiner Cousine ist im Juni.", for: ["en"] },
  { id: "stock", it: "der Stock", ex: "Wir wohnen im dritten Stock ohne Aufzug.", for: ["en", "es"] },
  { id: "pickel", it: "der Pickel", ex: "Vor dem Fest hatte ich einen Pickel auf der Nase.", for: ["en"] },
  { id: "kamin", it: "der Kamin", ex: "Im Winter sitzen wir abends gern am Kamin.", for: ["es"] },
  { id: "labor", it: "das Labor", ex: "Das Blut wird im Labor untersucht.", for: ["es"] },
  { id: "messe", it: "die Messe", ex: "Unsere Firma stellt ihre Produkte auf der Messe in Köln aus.", for: ["es"] },
  { id: "kasse", it: "die Kasse", ex: "Bitte zahlen Sie vorne an der Kasse.", for: ["es"] },
  { id: "rakete", it: "die Rakete", ex: "Die Rakete fliegt in den Weltraum.", for: ["es"] },
  { id: "roman", it: "der Roman", ex: "Ich lese gerade einen spannenden Roman.", for: ["es"] },
  { id: "lineal", it: "das Lineal", ex: "Mit dem Lineal zeichnet das Kind eine gerade Linie.", for: ["es"] },
  { id: "dose", it: "die Dose", ex: "Im Schrank steht noch eine Dose Tomaten.", for: ["es"] },
  { id: "aula", it: "die Aula", ex: "Die Abschlussfeier findet in der Aula der Schule statt.", for: ["es"] }
];
