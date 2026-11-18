/* ============================================================
   Pary minimalne - teksty po polsku.

   Uwagi kontrastywne pisane pod polskiego ucznia, nie tłumaczone.
   Polszczyzna nie rozróżnia samogłosek długich i krótkich, a dźwięków
   „ö" i „ü" w ogóle nie ma, więc dla Polaka to są dwie osobne trudności.
   ============================================================ */
LINGUAI.addStrings("pl", {

  "ph:ph-lang-kurz": {
    title: "Samogłoska długa i krótka",
    note: "W niemieckim długość samogłoski zmienia słowo: samogłoski długie trwają dłużej niż krótkie. W wielu parach zmienia się też barwa (długa jest bardziej napięta i zamknięta), ale nie we wszystkich: w Staat i Stadt różni się głównie czas trwania. Pomaga pisownia: po samogłosce krótkiej zwykle stoją dwie spółgłoski (Bett, Mitte, offen).",
    contrast: "W polskim długość samogłoski nie odróżnia znaczeń wyrazów, dlatego niemieckie bieten i bitten mogą być trudne do rozróżnienia. Różnią się długością i barwą samogłoski: [iː] oraz [ɪ]. Naucz się słyszeć dwa „i”: długie i napięte (Miete) oraz krótkie i luźniejsze (Mitte). W parze Höhle i Hölle dochodzi „ö”, którego polski nie zna: usta jak do „o”, język jak do „e”. Podwójna litera w Bett i Mitte nie oznacza dłuższej spółgłoski, tylko krótką samogłoskę przed nią.",
    pairs: [
      { glossA: "państwo", glossB: "miasto" },
      { glossA: "oferować", glossB: "prosić" },
      { glossA: "jaskinia", glossB: "piekło" },
      { glossA: "czynsz", glossB: "środek" },
      { glossA: "piec", glossB: "otwarty" },
      { glossA: "rabata", glossB: "łóżko" }
    ]
  },

  "ph:ph-ue-i": {
    title: "ü oraz i",
    note: "Niemieckie ü to samogłoska przednia zaokrąglona: język układa się jak do „i”, usta zaokrąglają się jak do „u”. W każdej parze zmieniają się tylko usta, długość zostaje ta sama: krótka w Kissen i küssen, Kiste i Küste, długa w vier i für, spielen i spülen, Ziege i Züge, liegen i lügen.",
    contrast: "W polskim nie ma samogłosek przednich zaokrąglonych, więc ü zwykle zamienia się w „i” (wtedy küssen brzmi jak Kissen) albo w „u”. Spróbuj tak: powiedz „i”, zostaw język w miejscu i zaokrąglij usta jak do „u”. Jeśli język cofnie się do tyłu, wyjdzie „u”, a to drugi błąd. Polskie „y” też nie jest „ü”: przy „ü” usta są zaokrąglone. W słuchaniu „ü” brzmi ciemniej niż „i”.",
    pairs: [
      { glossA: "poduszka", glossB: "całować" },
      { glossA: "skrzynia", glossB: "wybrzeże" },
      { glossA: "cztery", glossB: "dla" },
      { glossA: "grać, bawić się", glossB: "płukać, zmywać naczynia" },
      { glossA: "koza", glossB: "pociągi" },
      { glossA: "leżeć", glossB: "kłamać" }
    ]
  },

  "ph:ph-oe-e": {
    title: "ö oraz e",
    note: "„ö” to zaokrąglona para „e”: język układa się jak do „e”, usta zaokrąglają się jak do „o”. Bywa długie i zamknięte (lesen i lösen, Sehne i Söhne, Hefe i Höfe) albo krótkie i bardziej otwarte (kennen i können, helle i Hölle). W każdej parze długość się nie zmienia, zmieniają się tylko usta.",
    contrast: "„ö” w polskim nie ma, a najczęstszy zamiennik to „e”: können zaczyna brzmieć jak kennen, Söhne jak Sehne. Powiedz „e”, zostaw język w miejscu i zaokrąglij usta jak do „o”. Nie zamieniaj go w „o”: język zostaje z przodu. Przy długim „ö” w Söhne i Höfe pamiętaj jeszcze o długości, której polski nie odróżnia.",
    pairs: [
      { glossA: "znać", glossB: "móc, umieć" },
      { glossA: "czytać", glossB: "rozwiązywać, rozluźniać" },
      { glossA: "ścięgno", glossB: "synowie" },
      { glossA: "drożdże", glossB: "podwórza" },
      { glossA: "jasna (od hell)", glossB: "piekło" }
    ]
  },

  "ph:ph-s-z": {
    title: "s oraz z na początku wyrazu",
    note: "W niemieckim z Niemiec „s” na początku wyrazu przed samogłoską jest dźwięczne [z], a „z” wymawia się zawsze [ts]. Saal zaczyna się więc jak polskie „z”, a Zahl jak polskie „c”. W Austrii, Szwajcarii i na południu Niemiec początkowe „s” bywa bezdźwięczne; nagrania kursu idą za normą północną.",
    contrast: "Tu trzeba odwrócić nawyk czytania. Po polsku litera „z” to dźwięk [z], więc Zahl przeczytane po polsku brzmi jak Saal. Niemieckie „z” czytaj jak polskie „c” (Zahl jak „cal”, Zeit jak „cajt”), a niemieckie „s” przed samogłoską jak polskie „z” (Saal jak „zal”, seit jak „zajt”).",
    pairs: [
      { glossA: "od (o czasie)", glossB: "czas" },
      { glossA: "liny", glossB: "wiersz, linijka" },
      { glossA: "sala", glossB: "liczba" },
      { glossA: "sens", glossB: "cyna" }
    ]
  }

});
