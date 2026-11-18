[English](./README.md) | [Italiano](./README.it.md) | **Polski**

# Deutsch lernen 🇩🇪

Kurs języka niemieckiego od zera (A1) do poziomu biegłości (C2), z wyjaśnieniami po polsku.
Działa w przeglądarce, nie wymaga konta ani internetu po pierwszym wczytaniu, a postępy zapisują się na Twoim urządzeniu.

Niemiecki jest zawsze językiem, którego się uczysz. Wyjaśnienia można przełączyć w każdej chwili na włoski, angielski (amerykański), hiszpański, francuski lub polski, bez utraty postępów.

## Co jest w środku

- **170 lekcji** w 37 jednostkach, od poziomu A1 do C2
- **1735 ćwiczeń** w trzynastu formatach, które występują w danych kursu (czternasty typ jest w silniku): wybór, prawda/fałsz, uzupełnianie luk, tłumaczenie, układanie zdań, łączenie w pary, odmiana czasowników, dyktando ze słuchu i wymowa do mikrofonu
- **14 rozmów na głos**: aplikacja mówi po niemiecku, Ty odpowiadasz
- **1592 słówka** z wymową i systemem powtórek (FSRS), który przypomina o nich wtedy, kiedy zaczynasz zapominać; do tego sesja „pięć minut” zbudowana z tych samych kart
- **Głos lektorski**, nie robot: każde niemieckie zdanie kursu jest nagrane głosem neuronowym (Katja), a rozmówca w dialogach mówi drugim głosem (Conrad). Nagrań jest 4248
- **Gramatyka od A do Z**: 55 haseł
- **Odmiana czasowników**: wpisujesz dowolny bezokolicznik, dostajesz dziesięć czasów i trybów
- **Biblioteka** długich tekstów, które otwierają się razem z poziomem (6 tekstów, 3411 słów), i **swobodna rozmowa** z modelem językowym (opcjonalna, opisana niżej)
- **Symulacja egzaminu** w stylu Goethe-Zertifikat B1, z osobnym zegarem na każdy moduł. To symulacja nieoficjalna: nie jest powiązana z Goethe-Institut i nie korzysta z jego materiałów. Punktowane są wyłącznie Lesen i Hören

Wyjaśnienia są po polsku i wprost mówią, gdzie niemiecki działa inaczej niż polski, bo tam właśnie robi się błędy.

## Jak zacząć

**Najprościej:** otwórz plik `index.html` podwójnym kliknięciem. Kurs działa, ale bez dwóch rzeczy, których przeglądarka nie daje na `file://`: rozpoznawania mowy i pracy bez sieci.

**Zalecane** (pełna funkcjonalność, bez ograniczeń przeglądarki):

```bash
git clone git@github.com:AndreaBonn/impara-tedesco.git
cd impara-tedesco
npm run serve
```

Potem wejdź na `http://localhost:8080`. Sam kurs niczego nie instaluje, ale serwer startuje przez `node` (potrzebna jest wersja 24 lub nowsza). Własny port: `npm run serve -- 3000`.

Używaj tego serwera, a nie `python3 -m http.server`: ten drugi po zmianie pliku dalej podaje stare skrypty, więc strona pokazuje coś, czego w repozytorium już nie ma.

### Mówienie i słuchanie

**Czytanie na głos** działa wszędzie i brzmi tak samo na każdym systemie, bo to nagrania, a nie synteza w przeglądarce. Nic nie musisz instalować.

**Rozpoznawanie mowy** (ćwiczenia, w których mówisz do mikrofonu) wymaga połączenia szyfrowanego: działa na `localhost` i po opublikowaniu na HTTPS, ale nie po otwarciu pliku z dysku. W pozostałych przypadkach te ćwiczenia zamieniają się w pisane, a kurs działa dalej, tylko bez oceny wymowy.

**Dopóki sam tego nie włączysz, nic nie opuszcza Twojego urządzenia.** Rozpoznawanie mowy nie liczy się w przeglądarce: przeglądarki, które je udostępniają, wysyłają nagranie Twojego głosu na serwer swojego dostawcy i odsyłają tekst. Nie mamy nad tym kontroli i nie da się tego zrobić inaczej bez własnego serwera, którego kurs celowo nie ma. Jeśli Ci to nie odpowiada, nie dotykaj mikrofonu: te ćwiczenia same zamieniają się w pisane i kurs działa w całości. Szczegóły są w [SECURITY.md](./SECURITY.md).

Drugie i ostatnie takie miejsce to opisane niżej sprawdzanie odpowiedzi przez model, domyślnie wyłączone.

### Sprawdzanie odpowiedzi przez model (opcjonalne)

Kurs porównuje Twoją odpowiedź ze wzorcem, więc zdanie poprawne, ale ułożone inaczej, potrafi odrzucić. Możesz dać mu drugą opinię: w **Ustawieniach** wklejasz klucz API dostawcy, z którego już korzystasz (Google Gemini, Groq, OpenAI albo Anthropic), i zaznaczasz zgodę na wysyłanie odpowiedzi.

Co się wtedy zmienia:

- kurs pyta model **tylko wtedy, gdy sam odrzucił** Twoją odpowiedź, i tylko o tę jedną odpowiedź;
- model może **wyłącznie** zamienić odrzucenie w zaliczenie i dopisać zdanie wyjaśnienia. Nie ma drogi, którą mógłby odebrać punkt za odpowiedź już uznaną za dobrą: model, który odpowiada bzdury, daje w najgorszym razie brak poprawki, czyli kurs taki jak dziś;
- na ekranie pisania pojawia się przycisk, który prosi model o opinię o całym tekście. Ta opinia niczego nie ocenia i nie zmienia żadnego wyniku;
- ta sama możliwość czytania dotyczy prac pisemnych i ustnych z symulacji egzaminu, ale nigdy ich nie ocenia: z odpowiedzi modelu program wycina zdania z ułamkiem, procentem, liczbą przy słowie „punkty” albo słowem werdyktu;
- swobodna rozmowa ma własny limit na sesję, osobny od limitu sprawdzania odpowiedzi.

Klucz zostaje w tej przeglądarce, w innym miejscu niż postępy, więc **nie wchodzi do pliku z eksportem**. Za każde zapytanie płacisz Ty, u swojego dostawcy, dlatego kurs pyta oszczędnie i ma twardy limit na sesję. Bez klucza, bez zgody albo po otwarciu pliku z dysku nie dzieje się nic z powyższych i kurs działa dokładnie tak jak wcześniej.

## Postępy

Wszystko zapisuje się lokalnie w przeglądarce. Nie ma serwera, konta ani śledzenia, a kurs nie wysyła Twoich postępów nigdzie. Wyjątki są dwa i oba opisano wyżej: rozpoznawanie mowy, kiedy sam włączysz mikrofon, i sprawdzanie odpowiedzi przez model, kiedy sam wpiszesz klucz. W zakładce **Ustawienia** możesz wyeksportować postępy do pliku i wczytać je na innym komputerze.

Wyczyszczenie danych przeglądarki kasuje postępy. Warto co jakiś czas zrobić eksport. Próg zaliczenia lekcji to 70%.

Informacja o prywatności jest stroną w samym kursie (`#/privacy`), dostępną ze stopki każdego ekranu i z Ustawień.

## Struktura plików

```
index.html              powłoka aplikacji
assets/css/app.css      cały wygląd
assets/fonts/           Spectral, Manrope i JetBrains Mono, u siebie (kurs nie odpytuje cudzych domen)
assets/js/              84 moduły silnika, po jednym globalnym obiekcie na plik
  core.js               postępy ucznia i fasada silnika
  store.js              stan, zapis, migracje
  srs.js, fsrs.js       harmonogram powtórek (FSRS; quaderno błędów zostało na SM-2)
  i18n.js               napisy interfejsu
  i18n-merge.js         nakładanie języka wyjaśnień na dane kursu
  audio.js              nagrania lektorskie, synteza i rozpoznawanie mowy
  verbs.js              silnik odmiany czasowników
  exercises*.js         typy ćwiczeń
  views*.js             ekrany aplikacji
  app.js                pasek, motyw, przełącznik języka, start
data/
  core/                 warstwa neutralna: struktura, niemiecki, klucze odpowiedzi
    curriculum-index.js   mapa poziomów
    a1-*.js … c2-*.js     treść lekcji
    conversations.js      scenariusze rozmów
    grammar-reference.js  encyklopedia gramatyczna
  i18n/<lang>/          wyjaśnienia w języku ucznia (it, en, es, fr, pl)
  audio-index.js        skróty zdań, które mają nagranie (generowany)
audio/<xx>/<hash>.mp3   nagrania lektorskie (generowane)
sw.js                   praca bez sieci
scripts/                kontrola danych, testy mutacyjne, pokrycie, generowanie nagrań
tests/                  unit/ (node:vm) i dom/ (Playwright)
```

Statystyki repozytorium (liczby lekcji, ćwiczeń, nagrań, plików silnika) wypisuje `node scripts/baseline.mjs`.

## Dodawanie własnych lekcji

Treść jest oddzielona od silnika, a od kiedy kurs mówi w pięciu językach, także od wyjaśnień. Jednostka mieszka więc w dwóch plikach o tej samej nazwie.

W `data/core/` idzie to, co jest niemieckie, sprawdza odpowiedź albo trzyma strukturę:

```js
LINGUAI.addUnits("A1", [{
  id: "a1-u01", icon: "☕", titleIt: "Im Café",
  lessons: [{
    id: "a1-u01-l1",
    tags: ["g-praesens", "g-satz-v2", "g-aussprache"],
    /* … */
  }],
  test: { /* … */ }
}]);
```

Pola o nazwach `it*` (`it`, `titleIt`, `hintIt`, `dir: "toIt"`) to pozostałość po kursie włoskim, z którego to repozytorium się wywodzi. Trzymają język, którego się uczysz, czyli tutaj niemiecki: `vocab[].it` zawiera `der Tisch`. Nazwy zostały, żeby poprawki silnika dało się dalej przenosić z repozytorium źródłowego.

W `data/i18n/<lang>/` idzie to, co uczeń czyta po swojemu, same napisy, ta sama kolejność:

```js
LINGUAI.addStrings("pl", {
  "unit:a1-u01": { title: "W kawiarni", grammarNote: "czas teraźniejszy · rodzaj i liczba mnoga" },
  "lesson:a1-u01-l1": { title: "…", theme: "…", objectives: [ /* … */ ] }
});
```

Tablice łączą się **po indeksie**, więc po obu stronach muszą mieć tyle samo elementów. Uwaga kontrastywna („w twoim języku jest inaczej”) pisze się dla każdego języka od nowa, nie tłumaczy: to, co dla Polaka jest pułapką, dla Amerykanina bywa nieistotne.

Po dopisaniu uruchom kontrolę:

```bash
node scripts/validate.mjs      # duplikaty id, kompletność ćwiczeń, statystyki
node scripts/parity.mjs        # czy każdy język ma ten sam kształt co włoski
```

Pierwszy sprawdza duplikaty identyfikatorów, kompletność ćwiczeń i zgodność liczby luk z liczbą odpowiedzi, a także to, czy warstwa neutralna nie zawiera słów w języku ucznia. Drugi pilnuje, żeby nakładka krótsza o jeden element nie zostawiła po cichu jednego ćwiczenia w poprzednim języku. Oba zwracają kod błędu, jeśli coś się nie zgadza. Każda lekcja potrzebuje co najmniej jednego tagu z `GRAMMAR_REF`.

Po dodaniu pliku do `assets/js/` albo `data/core/` dopisz go do `PRECACHE` w `sw.js`; `node scripts/check_precache.mjs` pilnuje, żeby o tym nie zapomnieć, a `node scripts/check_swversion.mjs --napraw` odświeża odcisk wersji.

Nowe zdania niemieckie nie mają jeszcze nagrania i odezwą się głosem systemowym. Żeby je dograć:

```bash
node scripts/extract_strings.mjs
uv run --script scripts/build_audio.py
```

Potrzebne są `ffmpeg` i dostęp do sieci (skrypt korzysta z Edge TTS). Nazwy plików pochodzą z treści zdania, więc powtórne uruchomienie dogrywa **tylko** to, czego brakuje, a istniejące nagrania zostają nietknięte.

## Testy

```bash
npm install
npx playwright install --with-deps chromium
npm run test:all
```

`npm run test:all` uruchamia testy jednostkowe, testy mutacyjne i testy w przeglądarce. Pozostałe kontrole (`npm run lint`, `node scripts/coverage.mjs --min 99` i inne) są opisane w [README po angielsku](./README.md#quality-gates).

## Licencja i źródła

Kod jest na licencji MIT, a treść kursu, razem z nagraniami, na licencji CC BY-SA 4.0. Zob. [LICENSE](./LICENSE) i [LICENSE-CONTENT](./LICENSE-CONTENT). Fonty: Spectral, Manrope i JetBrains Mono (SIL Open Font License). Lista frekwencyjna, na której opiera się ekran pokrycia, pochodzi z niemieckich zdań [projektu Tatoeba](https://tatoeba.org) na licencji CC BY 2.0 FR i wymaga uznania autorstwa.

## Wesprzyj projekt

Kurs Deutsch lernen jest bezpłatny. Jeśli kurs Ci się przydał i chcesz się odwdzięczyć, możesz zostawić napiwek przez PayPal. Kwotę wybierasz sam, a wpłata jest całkowicie dobrowolna.

<div align="center">

[![Wesprzyj przez PayPal](https://img.shields.io/badge/Wesprzyj-PayPal-00457C?logo=paypal&logoColor=white&style=for-the-badge)](https://paypal.me/AndreaBonacci19)

</div>
