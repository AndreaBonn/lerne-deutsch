/* ============================================================
   Teksty w języku ucznia (pl) dla data/core/pfl-02.js, jednostka pfl-u02.
   Klucze wskazują id z warstwy neutralnej; tablice łączą się po
   indeksie, więc ich długość musi się zgadzać z core.
   Sprawdzane przez scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("pl", {
  "unit:pfl-u02": {
    title: "Parametry życiowe i wyniki pomiarów",
    grammarNote: "tryb rozkazujący z Sie · czasowniki rozdzielnie złożone podczas pomiaru · stopień wyższy do porównywania wartości · greckie przedrostki i złożenia pacjenta · strona bierna z werden do zgłaszania i dokumentowania"
  },
  "lesson:pfl-u02-l1": {
    theme: "Pomiar",
    title: "Proszę odsłonić ramię",
    objectives: [
      "prowadzić pacjenta przez pomiar ciśnienia za pomocą grzecznościowego trybu rozkazującego",
      "używać czasowników rozdzielnie złożonych przy pomiarze: anlegen, ablesen, einatmen, freimachen",
      "zapowiedzieć pacjentowi, co zrobisz, zanim go dotkniesz",
      "nazywać przyrządy: mankiet, ciśnieniomierz, termometr"
    ],
    theory: [
      {
        h: "Grzecznościowy tryb rozkazujący",
        p: "Polecenie dla pacjenta wydaje się w <strong>trybie rozkazującym z Sie</strong>: bezokolicznik na początku, zaraz za nim <em>Sie</em>. <em>Machen Sie bitte den Oberarm frei. Legen Sie den Arm auf den Tisch.</em> Forma jest taka sama jak w pytaniu rozstrzygającym; odróżnia je opadająca intonacja i słowo <em>bitte</em>, którego na oddziale prawie nigdy nie brakuje. <em>Bitte</em> może stać po <em>Sie</em> albo na początku: <em>Bitte sprechen Sie während der Messung nicht.</em> Przy czasowniku zwrotnym są dwa zaimki: <em>Setzen Sie sich bitte hin.</em>"
      },
      {
        h: "Czasowniki rozdzielnie złożone przy pomiarze",
        p: "Prawie wszystko, co mówi się podczas pomiaru, to czasownik rozdzielnie złożony: <em>anlegen</em> (założyć mankiet), <em>ablesen</em> (odczytać wynik), <em>einatmen</em> i <em>ausatmen</em> (wdychać, wydychać), <em>freimachen</em> (odsłonić), <em>sich hinsetzen</em>, <em>sich hinlegen</em>, <em>aufstehen</em>. W trybie rozkazującym i w czasie teraźniejszym przedrostek idzie <strong>na koniec</strong> zdania: <em>Atmen Sie tief ein. Ich lege Ihnen die Manschette an. Ich lese den Wert ab.</em> Po czasowniku modalnym czasownik zostaje w całości, na końcu: <em>Muss ich aufstehen?</em>"
      },
      {
        contrast: "Po polsku prośbę do pacjenta wyraża się zwykle przez «proszę» z bezokolicznikiem («Proszę odsłonić ramię», «Proszę usiąść») albo przez «niech Pan / niech Pani» («Niech Pani usiądzie»). Po niemiecku nie ma ani bezokolicznika, ani trzeciej osoby: czasownik stoi na początku, zaraz za nim <em>Sie</em>, a <em>bitte</em> dochodzi jako dodatek: <em>Setzen Sie sich bitte hin.</em> Kalka «Bitte hinsetzen» brzmi jak komenda wydana grupie, a <em>Sie setzen sich hin</em> to stwierdzenie («siada Pani»), nie prośba. Polskie <em>Pan</em>/<em>Pani</em> zdradza płeć, <em>Sie</em> nie: ta sama forma dla pani Keller i pana Langa. Drugiej rzeczy polski w ogóle nie zna: przedrostek polskiego czasownika jest przyklejony na stałe (<em>od-czytać</em>, <em>za-łożyć</em>, <em>wy-dychać</em>) i nigdy się nie odrywa. Niemieckie <em>ablesen</em>, <em>anlegen</em>, <em>einatmen</em> rozpadają się: <em>Ich lese den Wert ab</em>, <em>Atmen Sie tief ein</em>. Jeśli zapomnisz końcówki zdania, zostaje połowa: <em>Ich lege Ihnen die Manschette</em> znaczy tylko «kładę Pani mankiet»."
      },
      {
        trap: "Polskie «ciśnienie» to po niemiecku zawsze pełne <em>der Blutdruck</em>: samo <em>der Druck</em> to ucisk albo nacisk (<em>Die Manschette drückt</em>, «mankiet uciska»), więc mierzy się <em>den Blutdruck</em>, nie «den Druck». <em>Der Puls</em> to tętno, a nie miejsce, gdzie się je bada; nadgarstek to <em>das Handgelenk</em>: <em>Ich messe den Puls am Handgelenk.</em> <em>Die Manschette</em>, jak polski mankiet, to zarówno część ciśnieniomierza, jak i rękawa koszuli: tu akurat polski pomaga. <em>Den Arm freimachen</em> nie znaczy «uwolnić rękę», tylko odsłonić ją, podwinąć rękaw. A <em>die Kurve</em> na oddziale to nie zakręt ani krzywa, tylko karta obserwacji pacjenta."
      },
      {
        tip: "Zanim dotkniesz pacjenta, powiedz, co robisz i co poczuje: <em>Ich lege Ihnen jetzt die Manschette an. Sie drückt kurz ein bisschen.</em> Uprzedzony pacjent mniej się spina, a pomiar jest bardziej wiarygodny."
      }
    ],
    grammar: {
      title: "Tryb rozkazujący z Sie i przedrostki rozdzielne",
      note: "Grzecznościowy tryb rozkazujący: <b>czasownik + Sie</b>, z <b>bitte</b>. Przedrostek rozdzielny idzie <b>na koniec</b>. Przy czasownikach zwrotnych: <b>Setzen Sie sich</b>.",
      table: {
        head: ["bezokolicznik", "zdanie", "uwaga"],
        rows: [
          ["freimachen", "Machen Sie bitte den Oberarm frei.", "frei na końcu"],
          ["sich hinsetzen", "Setzen Sie sich bitte hin.", "zwrotny: Sie i sich"],
          ["einatmen", "Atmen Sie tief ein.", "ein na końcu"],
          ["anlegen", "Ich lege Ihnen die Manschette an.", "czas teraźniejszy: an na końcu"],
          ["sprechen", "Bitte sprechen Sie nicht.", "czasownik nierozdzielny, nicht na końcu"]
        ]
      },
      examples: [
        { tr: "Proszę odsłonić ramię.", note: "freimachen: frei idzie na koniec" },
        { tr: "Proszę usiąść i położyć rękę na stole.", note: "dwa polecenia, pierwsze zwrotne" },
        { tr: "Teraz założę Pani mankiet.", note: "anlegen w czasie teraźniejszym: an na końcu" },
        { tr: "Proszę nie mówić podczas pomiaru.", note: "bitte na początku, potem czasownik" },
        { tr: "Proszę spokojnie wdychać i wydychać powietrze.", note: "einatmen i ausatmen mają wspólne atmen: czasownik mówi się raz, potem ein und aus" },
        { tr: "Zaraz odczytam wynik.", note: "ablesen: ab na końcu" }
      ]
    },
    vocab: [
      "pomiar",
      "mierzyć, zmierzyć",
      "ciśnienie tętnicze (krwi)",
      "mankiet (ciśnieniomierza)",
      "ciśnieniomierz",
      "ramię (część ręki nad łokciem)",
      "rękaw",
      "termometr",
      "zakładać, założyć (mankiet)",
      "odczytywać, odczytać (wynik z urządzenia)",
      "wdychać, zrobić wdech",
      "usiąść"
    ],
    dialogue: [
      "Dzień dobry, pani Keller. Teraz zmierzę Pani ciśnienie i tętno.",
      "Dzień dobry. Mam wstać?",
      "Nie, proszę siedzieć. Proszę odsłonić lewe ramię.",
      "Tak może być?",
      "Tak, dziękuję. Teraz założę Pani mankiet. Przez chwilę będzie trochę uciskał.",
      "Nie ma problemu.",
      "Proszę nie mówić podczas pomiaru i trzymać rękę nieruchomo.",
      "I jaki jest wynik?",
      "Zaraz go odczytam i wpiszę do karty obserwacji."
    ],
    culture: {
      title: "Niemieckie spojrzenie: Kurve",
      text: "<p>Na niemieckich oddziałach parametry życiowe zapisuje się w <i>Kurve</i>, zwanej też <i>Fieberkurve</i>, dosłownie «krzywą gorączkową»: to odpowiednik polskiej karty gorączkowej czy karty obserwacji, w której dzień po dniu widać ciśnienie, tętno, temperaturę i inne wartości pacjenta. W wielu szpitalach jest dziś elektroniczna, ale nazwa została, i przy przekazaniu dyżuru często słychać <i>Steht in der Kurve</i>, «jest w karcie».</p><p>Ile razy dziennie się mierzy i jakim przyrządem, ustala lekarz albo standard oddziału. Wartości w tej jednostce to okrągłe liczby dydaktyczne, a nie wartości referencyjne: na oddziale obowiązują progi ustalone przez placówkę.</p>"
    },
    exercises: [
      {
        q: "Chcesz poprosić pacjentkę, żeby odsłoniła ramię. Które zdanie jest poprawne?",
        opts: [
          "Mach bitte den Oberarm frei.",
          "Machen Sie bitte den Oberarm frei.",
          "Freimachen Sie bitte den Oberarm."
        ],
        why: "Wobec pacjenta tryb rozkazujący to <b>czasownik + Sie</b>: <i>Machen Sie</i>. Przedrostek <i>frei</i> odrywa się i idzie na koniec. Pierwsze zdanie używa <i>du</i>, którego wobec dorosłego pacjenta się nie stosuje; trzecie zostawia <i>freimachen</i> w całości, jak polskie «odsłonić»."
      },
      {
        q: "Uzupełnij: «Ich lege Ihnen jetzt die Manschette ___.»",
        hint: "przedrostek rozdzielny czasownika anlegen",
        why: "<b>an</b>: <i>anlegen</i> jest rozdzielnie złożony, więc w czasie teraźniejszym przedrostek idzie na koniec zdania."
      },
      {
        tr: "Czas teraźniejszy czasownika ablesen, wszystkie osoby.",
        why: "<i>Lese ab, liest ab, liest ab, lesen ab, lest ab, lesen ab</i>: w drugiej i trzeciej osobie liczby pojedynczej <b>e</b> zmienia się w <b>ie</b>, a przedrostek <i>ab</i> zawsze idzie na koniec."
      },
      {
        q: "Wybierz właściwy rodzajnik określony dla każdego rzeczownika.",
        items: ["pomiar", "mankiet", "ramię (nad łokciem)", "rękaw", "ciśnieniomierz", "ciśnienie tętnicze"]
      },
      {
        q: "Połącz każdy czasownik z jego znaczeniem.",
        pairs: ["wdychać", "wydychać", "usiąść", "położyć się"]
      },
      {
        q: "Ułóż słowa we właściwej kolejności.",
        tr: "Proszę odsłonić lewe ramię.",
        why: "<i>Machen Sie bitte den linken Oberarm frei.</i> Czasownik otwiera zdanie, potem <i>Sie</i>; przedrostek <i>frei</i> je zamyka. <i>Bitte</i> może też stać tuż przed <i>frei</i>."
      },
      {
        q: "Uzupełnij zdanie.",
        tr: "Proszę usiąść i położyć rękę na stole.",
        why: "<i>Setzen Sie sich bitte hin</i>: zwrotny tryb rozkazujący z <i>Sie</i> i <i>sich</i>, a przedrostek <i>hin</i> na końcu."
      },
      {
        q: "Przetłumacz: «Teraz założę Pani mankiet.»",
        why: "<i>Jetzt lege ich Ihnen die Manschette an</i> albo <i>Ich lege Ihnen jetzt die Manschette an</i>. <i>Ihnen</i> to celownik (Pani, Panu), <i>an</i> idzie na koniec, a <i>jetzt</i> nie można pominąć. Polski przyszły czas dokonany («założę») oddaje tu niemiecki czas teraźniejszy."
      },
      {
        q: "Mierzysz ciśnienie pacjentce.",
        setting: "Wchodzisz z ciśnieniomierzem do pokoju pani Keller.",
        lines: [
          { tr: "Dzień dobry. Co mi Pani dziś będzie robić?" },
          { tr: "Odpowiedz, że teraz zmierzysz jej ciśnienie.", answerTr: "Teraz zmierzę Pani ciśnienie." },
          { tr: "Mam się położyć?" },
          { tr: "Odpowiedz, że nie: ma usiąść.", answerTr: "Nie, proszę usiąść." },
          { tr: "Mam zdjąć sweter?" },
          { tr: "Odpowiedz, że nie: wystarczy odsłonić ramię.", answerTr: "Nie, proszę tylko odsłonić ramię." }
        ]
      },
      {
        tr: "Teraz zmierzę Pani ciśnienie. Proszę odsłonić lewe ramię i trzymać rękę nieruchomo.",
        why: "W <i>Oberarm</i> akcent pada na pierwszą sylabę, <b>O</b>, a nie na przedostatnią jak w polskim; w <i>frei</i> <b>ei</b> to [aɪ], jak polskie «aj»; w <i>ruhig</i> <b>h</b> jest nieme, a końcowe <b>g</b> wymawia się [ç], miękko, jak «ch» w «chiński»."
      },
      {
        tr: "Proszę nie mówić podczas pomiaru.",
        why: "W <i>sprechen</i> początkowe <b>sp</b> to [ʃp], jak polskie «szp»; w <i>während</i> <b>ä</b> jest długie, <b>h</b> nieme, a końcowe <b>d</b> brzmi jak [t], tak samo jak w polskim «sad»; w <i>Messung</i> <b>ss</b> jest bezdźwięczne, jak polskie «s»."
      }
    ]
  },
  "lesson:pfl-u02-l2": {
    theme: "Liczby na oddziale",
    title: "Wartości i jednostki",
    objectives: [
      "podawać na głos ciśnienie, tętno, temperaturę i saturację z jednostką",
      "porównywać dwie wartości za pomocą stopnia wyższego i als",
      "mówić, że jedna wartość jest równa innej, za pomocą genauso ... wie",
      "przekazać wartość koledze razem z porównaniem z dniem poprzednim"
    ],
    theory: [
      {
        h: "Jak podawać wartości",
        p: "Ciśnienie zapisuje się <em>120/80 mmHg</em> i mówi <em>hundertzwanzig zu achtzig</em>: kreskę czyta się <strong>zu</strong>, tam gdzie po polsku mówisz «na». Jednostki, <em>Millimeter Quecksilbersäule</em>, na głos prawie się nie wymawia. Tętno: <em>80 pro Minute</em> albo <em>80 Schläge pro Minute</em>. Temperatura ma przecinek jak w polskim: <em>37,5 Grad</em> czyta się <em>siebenunddreißig Komma fünf</em>; tam gdzie po polsku powiesz «trzydzieści siedem i pół», po niemiecku na oddziale mówi się <em>Komma</em>. Saturację podaje się w procentach: <em>95 Prozent</em>. Żeby umiejscowić wartość, często używa się <em>liegen bei</em>: <em>Der Blutdruck liegt bei 120 zu 80.</em> Liczby w tej lekcji są okrągłe i dydaktyczne, to nie wartości referencyjne."
      },
      {
        h: "Stopień wyższy do porównywania",
        p: "Stopień wyższy tworzy się końcówką <strong>-er</strong>, a drugi człon porównania wprowadza <strong>als</strong>: <em>schneller als gestern</em>, <em>niedriger als heute Morgen</em>. Wiele krótkich przymiotników dostaje Umlaut: <em>hoch → höher</em> (i znika <b>c</b>), <em>lang → länger</em>, <em>warm → wärmer</em>; <em>langsam</em> nie: <em>langsamer</em>. Stopień najwyższy przy czasowniku: <em>am höchsten</em>, <em>am niedrigsten</em>. Równość: <em>genauso hoch wie gestern</em>."
      },
      {
        contrast: "Polski i niemiecki tworzą stopień wyższy podobnie, jednym słowem z końcówką: «wyższy», «szybszy», <em>höher</em>, <em>schneller</em>. Błąd <em>mehr hoch</em> grozi więc Polakowi rzadko, chyba że przeniesie polskie «bardziej», które stoi przy imiesłowach: «bardziej podwyższony». Tak po niemiecku się nie mówi. Para z dokumentacji, <em>erhöht</em> / <em>erniedrigt</em>, odpowiada polskiemu «podwyższony» / «obniżony»: «podwyższona temperatura» to <em>erhöhte Temperatur</em>, «obniżone ciśnienie» to <em>erniedrigter</em> albo po prostu <em>niedriger Blutdruck</em>. To imiesłowy, nie stopień wyższy, i porównania z <em>als</em> nie tworzą. Polskie «niż» i «od» to w porównaniu zawsze <strong>als</strong>: <em>höher als gestern</em>, nigdy «höher von gestern»; «tak samo jak» to <em>genauso ... wie</em>. Liczby idą prosto: przecinek dziesiętny jest ten sam, tylko «na» w ciśnieniu zamienia się w <em>zu</em>. A «skurczowe i rozkurczowe» w rozmowie z pacjentem to <em>der obere und der untere Wert</em>."
      },
      {
        trap: "<em>Schneller wie gestern</em> słychać w mowie potocznej, ale w języku standardowym i w dokumentacji porównanie wymaga <em>als</em>. <em>Am höchsten</em> ma Umlaut tak jak <em>höher</em>, a sam przymiotnik nie: <em>hoch</em>. <em>Erhöht</em> znaczy «podwyższony» (<em>leicht erhöhte Temperatur</em>), to nie czasownik do odmiany. Niskie ciśnienie to w Niemczech <em>niedriger Blutdruck</em>; <em>tiefer Blutdruck</em> słychać głównie w Szwajcarii. A polskie «wysokie ciśnienie» jako choroba to jedno słowo: <em>der Bluthochdruck</em>."
      },
      {
        tip: "Kiedy przekazujesz wartość koledze, zawsze dodaj porównanie: <em>130 zu 80, höher als gestern</em>. Sama liczba mówi niewiele; porównanie mówi, czy coś się zmienia."
      }
    ],
    grammar: {
      title: "Stopień wyższy i najwyższy",
      note: "Stopień wyższy: <b>-er + als</b>. Krótkie przymiotniki często dostają <b>Umlaut</b>. Stopień najwyższy przy czasowniku: <b>am ...-sten</b>. Równość: <b>genauso ... wie</b>.",
      table: {
        head: ["przymiotnik", "stopień wyższy", "stopień najwyższy"],
        rows: [
          ["hoch", "höher", "am höchsten"],
          ["niedrig", "niedriger", "am niedrigsten"],
          ["schnell", "schneller", "am schnellsten"],
          ["langsam", "langsamer", "am langsamsten"],
          ["gut", "besser", "am besten"]
        ]
      },
      examples: [
        { tr: "Ciśnienie wynosi 120 na 80.", note: "liegen bei: typowy sposób podawania wartości; «na» to po niemiecku zu" },
        { tr: "Tętno jest dziś szybsze niż wczoraj.", note: "schneller als: stopień wyższy + als" },
        { tr: "Wieczorem temperatura jest wyższa niż rano.", note: "hoch → höher, bez c" },
        { tr: "Druga wartość jest niższa od pierwszej.", note: "niedriger als der erste: polskie «od» to też als" },
        { tr: "Dziś rano ciśnienie było najwyższe.", note: "stopień najwyższy przy czasowniku: am höchsten" },
        { tr: "Temperatura jest tak samo wysoka jak wczoraj.", note: "równość: genauso ... wie" }
      ]
    },
    vocab: [
      "wartość",
      "wynik pomiaru, zmierzona wartość",
      "jednostka (miary)",
      "tętno, puls",
      "temperatura",
      "stopień (37 Grad: 37 stopni)",
      "karta obserwacji",
      "wysoki (höher: wyższy)",
      "niski (niedriger: niższy)",
      "szybki",
      "wolny",
      "podwyższony"
    ],
    dialogue: [
      "Zmierzyłam ciśnienie pani Keller: 130 na 80.",
      "A wczoraj?",
      "Wczoraj było niższe, 120 na 80. Tętno jest dziś trochę szybsze niż wczoraj, 80 na minutę.",
      "A temperatura?",
      "37 stopni, tak samo jak wczoraj.",
      "Dobrze. Wpisz, proszę, wszystkie wartości do karty obserwacji.",
      "Już robię."
    ],
    culture: {
      title: "Niemieckie spojrzenie: RR, włoskie nazwisko",
      text: "<p>W niemieckiej dokumentacji ciśnienie tętnicze zapisuje się często jako <i>RR</i>: <i>RR 120/80</i>. Te dwie litery to inicjały <i>Riva-Rocci</i>: Scipione Riva-Rocci, lekarz z Turynu, pod koniec XIX wieku przedstawił ciśnieniomierz z mankietem. Skrót jest w użyciu także w polskiej dokumentacji, więc pewnie go znasz; w Niemczech <i>RR</i> stało się niemal synonimem słowa <i>Blutdruck</i>, i przy przekazaniu dyżuru słychać <i>Wie war der RR?</i></p><p>Praktyczna rada: skróty zmieniają się od oddziału do oddziału. Kiedy w <i>Kurve</i> trafisz na nowy, zapytaj, co znaczy, zamiast zgadywać.</p>"
    },
    exercises: [
      {
        q: "Chcesz powiedzieć «Tętno jest dziś szybsze niż wczoraj». Które zdanie jest poprawne?",
        opts: [
          "Der Puls ist heute schnell als gestern.",
          "Der Puls ist heute schneller als gestern.",
          "Der Puls ist heute mehr schnell als gestern."
        ],
        why: "Stopień wyższy to jedno słowo, <b>schneller</b>, a drugi człon porównania wprowadza <b>als</b>."
      },
      {
        tr: "Czas teraźniejszy czasownika messen, wszystkie osoby.",
        why: "<i>Messe, misst, misst, messen, messt, messen</i>: w drugiej i trzeciej osobie liczby pojedynczej <b>e</b> zmienia się w <b>i</b>, a w <i>du misst</i> końcówka <i>-st</i> zlewa się z <b>ss</b> rdzenia: żadnego «missst»."
      },
      {
        q: "Uzupełnij: «Am Abend ist die Temperatur ___ als am Morgen.»",
        hint: "stopień wyższy od hoch",
        why: "<b>höher</b>: <i>hoch</i> dostaje Umlaut i traci <b>c</b>."
      },
      {
        q: "Uzupełnij stopniem wyższym i najwyższym.",
        tr: "Druga wartość jest niższa od pierwszej, ale dziś rano ciśnienie było najwyższe.",
        why: "<i>niedriger als der erste</i>: stopień wyższy + <i>als</i>. <i>am höchsten</i>: stopień najwyższy z czasownikiem <i>sein</i>."
      },
      {
        q: "Połącz każdy stopień wyższy z jego znaczeniem.",
        pairs: ["wyższy", "niższy", "szybszy", "wolniejszy"]
      },
      {
        q: "Wybierz właściwy rodzajnik określony dla każdego rzeczownika.",
        items: ["wartość", "wynik pomiaru", "jednostka", "tętno", "temperatura", "karta obserwacji"]
      },
      {
        q: "Ułóż słowa we właściwej kolejności.",
        tr: "Tętno jest dziś szybsze niż wczoraj.",
        why: "<i>Der Puls ist heute schneller als gestern.</i> Czasownik <i>ist</i> na drugim miejscu, porównanie z <i>als</i> na końcu."
      },
      {
        q: "Przetłumacz: «Dziś temperatura jest wyższa niż wczoraj.»",
        why: "<i>Heute ist die Temperatur höher als gestern</i> albo <i>Die Temperatur ist heute höher als gestern</i>. Jeśli zaczniesz od <i>heute</i>, czasownik zostaje na drugim miejscu, a podmiot idzie za nim; polski szyk «Dziś temperatura jest» po niemiecku nie przejdzie."
      },
      {
        q: "Kolega pyta cię o wartości pani Keller.",
        setting: "Właśnie zmierzyłaś ciśnienie, tętno i temperaturę.",
        lines: [
          { tr: "Jakie było ciśnienie dziś rano?" },
          { tr: "Odpowiedz: 130 na 80, wyższe niż wczoraj.", answerTr: "Było 130 na 80, wyższe niż wczoraj." },
          { tr: "A tętno?" },
          { tr: "Odpowiedz: trochę szybsze niż wczoraj, 80 na minutę.", answerTr: "Trochę szybsze niż wczoraj, 80 na minutę." },
          { tr: "A temperatura?" },
          { tr: "Odpowiedz: tak samo wysoka jak wczoraj, 37 stopni.", answerTr: "Tak samo wysoka jak wczoraj, 37 stopni." }
        ]
      },
      {
        tr: "Wczoraj ciśnienie było niższe. Dziś tętno jest trochę szybsze, a temperatura jest tak samo wysoka jak wczoraj.",
        why: "W <i>niedriger</i> <b>ie</b> to długie <b>i</b>; w <i>schneller</i> <b>sch</b> to [ʃ], polskie «sz»; w <i>genauso</i> akcent pada na <b>nau</b>, tak jak w polskim na przedostatnią sylabę, a <b>au</b> to [aʊ], blisko polskiego «ał»."
      },
      {
        tr: "Tętno jest dziś szybsze niż wczoraj.",
        why: "W <i>Puls</i> <b>u</b> jest krótkie; w <i>heute</i> <b>eu</b> to [ɔʏ], podobnie do polskiego «oj»; w <i>gestern</i> <b>st</b> w środku wyrazu czyta się [st], nie [ʃt]."
      }
    ]
  },
  "lesson:pfl-u02-l3": {
    theme: "Dwa rejestry",
    title: "Gorączka, tętno i cukier",
    objectives: [
      "rozpoznawać fachowe nazwy parametrów życiowych z greckimi przedrostkami hyper-, hypo-, tachy-, brady-",
      "przekładać każdy termin fachowy na słowo, którego używa pacjent",
      "rozumieć budowę złożeń pacjenta: Blutzucker, Unterzuckerung, Herzrasen",
      "zgłosić lekarzowi wartość niższą albo wyższą od poprzedniej"
    ],
    theory: [
      {
        h: "Greckie przedrostki parametrów",
        p: "Fachsprache parametrów życiowych buduje się z kilku greckich części: <em>Hyper-</em> (nad) i <em>Hypo-</em> (pod), <em>Tachy-</em> (szybki) i <em>Brady-</em> (wolny), plus część mówiąca, o co chodzi: <em>-kardie</em> serce, <em>-tonie</em> ciśnienie, <em>-glykämie</em> cukier we krwi. Stąd <em>Tachykardie</em>, <em>Bradykardie</em>, <em>Hypotonie</em>, <em>Hypoglykämie</em>, <em>Hyperglykämie</em>. Po niemiecku pisze się je przez <b>y</b>, <b>k</b> i <b>ä</b>: <em>Hypoglykämie</em>, a nie jak po polsku «hipoglikemia»."
      },
      {
        h: "Słowa pacjenta",
        p: "Laiensprache używa złożeń i wyrazów pochodnych. <em>Blut + Zucker</em> = <em>der Blutzucker</em>; <em>Sauerstoff + Sättigung</em> = <em>die Sauerstoffsättigung</em>; <em>unter + Zucker + -ung</em> = <em>die Unterzuckerung</em>, rodzaju żeńskiego przez <em>-ung</em>. <em>Das Herzrasen</em> to bezokolicznik użyty jako rzeczownik (<em>rasen</em>, pędzić jak szalony), i dlatego jest nijaki. Niektóre słowa pacjenta to nie złożenia, tylko przymiotnik z rzeczownikiem: <em>der langsame Puls</em>, <em>der niedrige Blutdruck</em>, <em>der hohe Blutzucker</em>. A przy wartościach wraca stopień wyższy: <em>niedriger als heute Morgen</em>."
      },
      {
        contrast: "Terminy łacińskie i greckie znasz ze studiów i z polskiej dokumentacji: <em>Tachykardie</em> to tachykardia, <em>Hypoglykämie</em> hipoglikemia, <em>Hypotonie</em> hipotonia, czyli niedociśnienie. Zmienia się tylko pisownia: <b>y</b> zamiast <b>i</b>, <b>ä</b> zamiast <b>e</b>. Zupełnie nieprzejrzysty jest za to drugi rejestr: <em>Herzrasen</em>, <em>Unterzuckerung</em>, <em>der niedrige Blutdruck</em> to niemieckie rdzenie, których polski nie podpowiada. Pacjent w Polsce mówi «mam niski cukier» albo «spadł mi cukier»; pacjent w Niemczech mówi <em>der Zucker</em> albo <em>der Blutzucker</em>, a przy hipoglikemii <em>Ich bin unterzuckert</em> lub <em>Ich habe Unterzucker</em>. <em>Hypoglykämie</em> to dla niego słowo lekarza. Polskie potoczne «niedociśnienie» i «nadciśnienie» nie mają niemieckiej kalki: mówi się <em>niedriger Blutdruck</em> i <em>Bluthochdruck</em>."
      },
      {
        trap: "<em>Unterdruck</em> i <em>Überdruck</em> istnieją, ale to podciśnienie i nadciśnienie w sensie technicznym (w ssaku, w butli), nie choroba: polskie «nadciśnienie» to <em>Bluthochdruck</em>, «niedociśnienie» to <em>niedriger Blutdruck</em>. <em>Hyperthermie</em> w niemieckim języku medycznym to przegrzanie organizmu, na przykład po udarze cieplnym, a nie zwykła gorączka: gorączka to <em>Fieber</em> także w dokumentacji (<em>febril</em>, «gorączkowy»). I <em>Herzrasen</em> to nie <em>Herzklopfen</em>: pierwsze to serce, które pędzi, drugie to bicie, które czuje się mocno, polskie «kołatanie serca»."
      },
      {
        tip: "Jeśli pacjent mówi <em>Ich habe Unterzucker</em> albo <em>Mir ist so zittrig</em>, zmierz i od razu zgłoś: <em>Ich messe kurz Ihren Blutzucker</em>, a potem lekarzowi wartość z porównaniem. Co robić dalej, decyduje lekarz albo pisemny standard oddziału."
      }
    ],
    grammar: {
      title: "Parametry życiowe: Fachsprache i Laiensprache",
      note: "Z lekarzami i w dokumentacji kolumna <b>Fachsprache</b>; z pacjentami i rodziną kolumna <b>Laiensprache</b>. Złożenia biorą rodzajnik <b>ostatniego członu</b>; bezokolicznik użyty jako rzeczownik jest <b>nijaki</b>.",
      table: {
        head: ["Fachsprache", "Laiensprache", "polski"],
        rows: [
          ["die Tachykardie", "das Herzrasen", "tachykardia"],
          ["die Bradykardie", "der langsame Puls", "bradykardia"],
          ["die Hypotonie", "der niedrige Blutdruck", "hipotonia, niedociśnienie"],
          ["die Hyperthermie; das Fieber", "das Fieber", "hipertermia (przegrzanie); gorączka"],
          ["die Hypoglykämie", "die Unterzuckerung", "hipoglikemia"],
          ["die Hyperglykämie", "der hohe Blutzucker", "hiperglikemia"],
          ["die Sauerstoffsättigung", "der Sauerstoffwert", "saturacja, wysycenie krwi tlenem"]
        ]
      },
      examples: [
        { tr: "Pacjentka ma tachykardię.", note: "Fachsprache: do lekarza albo do dokumentacji" },
        { tr: "Czy czasem czuje Pani, że serce bardzo szybko bije?", note: "to samo powiedziane pacjentowi" },
        { tr: "Pacjent miał w nocy hipoglikemię.", note: "formuła z przekazania dyżuru" },
        { tr: "Przy niedocukrzeniu cukier we krwi jest za niski.", note: "unter + Zucker + -ung: rodzaj żeński" },
        { tr: "Saturacja jest niższa niż rano.", note: "stopień wyższy, żeby zgłosić zmianę" },
        { tr: "Od 38 stopni mówi się zwykle o gorączce.", note: "próg dydaktyczny: decyduje standard placówki" }
      ]
    },
    vocab: [
      "parametry życiowe",
      "gorączka",
      "hipertermia (termin fachowy, to nie gorączka)",
      "tachykardia (termin fachowy)",
      "szybkie bicie serca (słowo dla pacjenta)",
      "bradykardia (termin fachowy)",
      "hipotonia, niedociśnienie (termin fachowy)",
      "cukier we krwi, glikemia",
      "hipoglikemia (termin fachowy)",
      "niedocukrzenie (słowo dla pacjenta)",
      "hiperglikemia (termin fachowy)",
      "saturacja, wysycenie krwi tlenem"
    ],
    dialogue: [
      "Panie Lang, szybko zmierzę Panu cukier. To małe ukłucie w palec.",
      "Trochę się trzęsę i się pocę.",
      "Wynik jest niższy niż rano. Od razu dam znać lekarzowi.",
      "Panie doktorze, pan Lang drży i się poci. Cukier wynosi 60, podejrzewam hipoglikemię.",
      "Dziękuję. Zaraz przyjdę.",
      "Siostro, co to jest «Hypoglykämie»?",
      "To niedocukrzenie. Ma Pan za niski cukier. Lekarz zaraz przyjdzie."
    ],
    culture: {
      title: "Niemieckie spojrzenie: mg/dl czy mmol/l",
      text: "<p>W Niemczech cukier we krwi mierzy się w dwóch jednostkach: <i>mg/dl</i> (miligramy na decylitr) i <i>mmol/l</i> (milimole na litr). Która obowiązuje, zależy od placówki i od glukometru; 1 mmol/l to około 18 mg/dl. Te same 60, do których przywykłaś w Polsce w mg/dl, na glukometrze w mmol/l wyglądają jak 3,3. Dlatego przy przekazaniu dyżuru i przez telefon jednostkę zawsze się mówi.</p><p>60 z dialogu jest w mg/dl i to okrągła liczba dydaktyczna. Co jest za nisko albo za wysoko i co się robi dalej, ustala lekarz i pisemny standard oddziału; pielęgniarka mierzy, zgłasza i dokumentuje.</p>"
    },
    exercises: [
      {
        q: "Połącz każdy termin fachowy ze słowem, którego używa pacjent.",
        pairs: ["das Herzrasen", "der langsame Puls", "der niedrige Blutdruck", "die Unterzuckerung", "der hohe Blutzucker"]
      },
      {
        q: "Rozmawiasz z pacjentem i chcesz wiedzieć, czy ma tachykardię. Które zdanie jest odpowiednie?",
        opts: [
          "Haben Sie eine Tachykardie?",
          "Haben Sie Herzrasen?",
          "Besteht bei Ihnen eine Tachykardie?"
        ],
        why: "Z pacjentem używa się Laiensprache: <b>Herzrasen</b>. Dwa pozostałe zdania są poprawne, ale to zdania lekarza albo dokumentacji."
      },
      {
        q: "Które słowa są odpowiednie dla pacjenta?",
        opts: ["die Unterzuckerung", "die Hypoglykämie", "das Herzrasen", "die Tachykardie", "der niedrige Blutdruck", "die Hypotonie"],
        why: "<i>Unterzuckerung</i>, <i>Herzrasen</i> i <i>niedriger Blutdruck</i> to zwykłe niemieckie słowa. <i>Hypoglykämie</i>, <i>Tachykardie</i> i <i>Hypotonie</i> to terminy fachowe, choć tobie wydają się najbardziej znajome."
      },
      {
        q: "Lekarz napisał «Hypoglykämie». Uzupełnij dla pacjenta: «Sie hatten eine ___.»",
        hint: "unter + Zucker + -ung",
        why: "<b>Unterzuckerung</b>, rodzaju żeńskiego przez przyrostek <i>-ung</i>: stąd <i>eine</i>."
      },
      {
        q: "Wybierz rodzajnik: w złożeniach decyduje ostatni człon.",
        items: ["gorączka", "szybkie bicie serca (Rasen)", "cukier we krwi (Zucker)", "niedocukrzenie (-ung)", "saturacja (Sättigung)", "tachykardia (termin fachowy)"]
      },
      {
        q: "Uzupełnij: do lekarza najpierw porównanie, potem termin fachowy.",
        tr: "Cukier jest niższy niż rano, podejrzewam hipoglikemię.",
        why: "<i>niedriger als heute Morgen</i>: stopień wyższy + <i>als</i>. Do lekarza termin fachowy, <i>Hypoglykämie</i>; pacjentowi powiesz <i>Unterzuckerung</i>."
      },
      {
        q: "Ułóż słowa we właściwej kolejności.",
        tr: "Od 38 stopni mówi się zwykle o gorączce.",
        why: "<i>Ab 38 Grad spricht man meistens von Fieber.</i> <i>Ab 38 Grad</i> na początku, czasownik <i>spricht</i> na drugim miejscu, za nim <i>man</i>: polska forma bezosobowa «mówi się» potrzebuje po niemiecku podmiotu. 38 to próg dydaktyczny: na oddziale obowiązuje standard placówki."
      },
      {
        q: "Przetłumacz dla pacjenta, zwykłym niemieckim słowem: «Czy ma Pan tachykardię?»",
        why: "<i>Haben Sie Herzrasen?</i> Bez rodzajnika, tak jak <i>Haben Sie Fieber?</i> Pacjentowi nie mówi się <i>Tachykardie</i>."
      },
      {
        q: "Lekarz napisał «Hypotonie». Uzupełnij dla pacjenta: «Ihr Blutdruck ist zu ___.»",
        hint: "przeciwieństwo hoch",
        why: "<b>niedrig</b>: <i>Hypotonie</i> to niskie ciśnienie, niedociśnienie. Nie tłumacz go na «Unterdruck»."
      },
      {
        tr: "Pacjentka ma tachykardię. Jej mówię po prostu: serce bije Pani bardzo szybko.",
        why: "W <i>Tachykardie</i> akcent pada na końcowe <b>die</b>, a nie na przedostatnią sylabę; <b>ch</b> to [x], jak polskie «ch» w «chata», a <b>y</b> wymawia się jak <b>ü</b>, którego polski nie ma: usta jak do «u», język jak do «i»; w <i>Herzrasen</i> <b>z</b> to [ts], polskie «c», a <b>s</b> między samogłoskami jest dźwięczne, jak polskie «z»."
      },
      {
        tr: "Szybko zmierzę Panu cukier.",
        why: "W <i>Blutzucker</i> <b>u</b> w <i>Blut</i> jest długie, a w <i>Zucker</i> krótkie; <b>z</b> to [ts], jak polskie «c»; w <i>kurz</i> <b>r</b> jest prawie niesłyszalne, inaczej niż wyraźne polskie r."
      }
    ]
  },
  "lesson:pfl-u02-l4": {
    theme: "Zgłaszanie",
    title: "Zgłaszanie nieprawidłowej wartości",
    objectives: [
      "używać strony biernej z werden do opisu procedur na oddziale",
      "tworzyć imiesłów czasowników na -ieren i czasowników z przedrostkiem nierozdzielnym bez ge-",
      "zgłosić przez telefon nieprawidłową wartość lekarzowi albo pielęgniarce oddziałowej, z porównaniem i stanem pacjenta",
      "powtórzyć i udokumentować zlecenie lekarza, nie decydując samodzielnie"
    ],
    theory: [
      {
        h: "Strona bierna w procedurach",
        p: "Kiedy liczy się to, co się robi, a nie kto to robi, używa się <strong>strony biernej z werden</strong>: odmienione <em>werden</em> na drugim miejscu, imiesłów na końcu. <em>Der Blutdruck wird zweimal am Tag gemessen. Alle Werte werden in der Kurve dokumentiert. Ein auffälliger Wert wird sofort gemeldet.</em> Dopełnienie zdania czynnego staje się podmiotem: <em>Ich melde den Wert</em> → <em>Der Wert wird gemeldet</em>. Wykonawcę dodaje się tylko wtedy, gdy trzeba, przez <em>von</em> + celownik."
      },
      {
        h: "Imiesłowy bez ge-",
        p: "Wiele czasowników z oddziału <strong>nie dostaje ge-</strong>. Czasowniki na <em>-ieren</em>: <em>dokumentiert</em>, <em>kontrolliert</em>, <em>informiert</em>. Czasowniki z przedrostkiem nierozdzielnym (<em>be-, ver-, über-</em> nierozdzielne): <em>überwacht</em>, <em>überprüft</em>, <em>benachrichtigt</em>. Rozdzielnie złożone wstawiają za to <em>ge-</em> w środek: <em>nachmessen</em> → <em>nachgemessen</em>, <em>eintragen</em> → <em>eingetragen</em>. <em>Gedokumentiert</em> i <em>geüberwacht</em> nie istnieją."
      },
      {
        contrast: "Strona bierna z <em>werden</em> dobrze odpowiada polskiej z «zostać» albo z «być» w znaczeniu czynności: «wynik zostaje zgłoszony», «ciśnienie jest mierzone dwa razy dziennie» = <em>Der Blutdruck wird zweimal am Tag gemessen</em>. Polski stan po czynności, «wynik jest już zgłoszony», to po niemiecku <em>sein</em>: <em>Der Wert ist gemeldet</em>. Pułapka czeka gdzie indziej: polska dokumentacja lubi formy bezosobowe («zmierzono ciśnienie», «mierzy się dwa razy dziennie»), a niemiecki takich form nie ma. Zostaje strona bierna albo <em>man</em> (<em>Man misst zweimal am Tag</em>). Przymiotniki z dokumentacji (<em>Die Patientin ist hypoton und tachykard</em>) brzmią Polakowi obco, bo polska karta częściej stawia rzeczownik: «hipotonia, tachykardia». Po niemiecku przymiotnik stoi po <em>sein</em> bez końcówki. Z lekarzem i w <em>Kurve</em> są w porządku; z pacjentem wraca Laiensprache."
      },
      {
        trap: "<em>Melden</em> znaczy zgłosić, przekazać temu, kto musi wiedzieć; <em>sich melden</em> to «odezwać się» albo «zgłosić się» (<em>Ich melde mich später</em>). <em>Kontrollieren</em> to sprawdzić, skontrolować wartość jeszcze raz; obserwowanie pacjenta przez dłuższy czas to <em>überwachen</em>. Uwaga na przypadki: <em>Ich informiere den Arzt</em> wymaga biernika, a <em>Ich sage dem Arzt Bescheid</em> celownika; tu polski akurat pomaga, bo «poinformować lekarza» i «dać znać lekarzowi» mają ten sam układ. A <em>die Stationsleitung</em> to polska pielęgniarka oddziałowa, a nie «kierownictwo stacji»."
      },
      {
        tip: "Przez telefon zawsze trzymaj się tej samej kolejności: kim jesteś i z którego oddziału, który pacjent i która sala, wartość z porównaniem, jak się czuje pacjent, co już zrobiłaś (<em>Ich habe zweimal gemessen</em>). Potem powtórz zlecenie lekarza i wpisz je do <em>Kurve</em>. Które wartości trzeba zgłaszać, mówi standard placówki; zadaniem pielęgniarki jest je zgłosić, a nie samodzielnie korygować."
      }
    ],
    grammar: {
      title: "Strona bierna z werden",
      note: "Odmienione <b>werden</b> na drugim miejscu, <b>imiesłów na końcu</b>. Bez <b>ge-</b> w czasownikach na <b>-ieren</b> i z przedrostkiem nierozdzielnym.",
      table: {
        head: ["strona czynna", "strona bierna", "uwaga"],
        rows: [
          ["Wir messen den Blutdruck.", "Der Blutdruck wird gemessen.", "messen → gemessen"],
          ["Ich dokumentiere die Werte.", "Die Werte werden dokumentiert.", "-ieren: bez ge-"],
          ["Wir überwachen den Patienten.", "Der Patient wird überwacht.", "über- nierozdzielne: bez ge-"],
          ["Ich melde den Wert.", "Der Wert wird gemeldet.", "dopełnienie staje się podmiotem"]
        ]
      },
      examples: [
        { tr: "Ciśnienie jest mierzone dwa razy dziennie.", note: "wird + imiesłów na końcu" },
        { tr: "Wszystkie wartości są dokumentowane w karcie obserwacji.", note: "liczba mnoga: werden; dokumentiert bez ge-" },
        { tr: "Nieprawidłowa wartość zostaje od razu zgłoszona.", note: "reguła oddziału w stronie biernej" },
        { tr: "Pani doktor zostaje poinformowana.", note: "informiert: czasownik na -ieren" },
        { tr: "Po dziesięciu minutach wartość jest kontrolowana ponownie.", note: "noch einmal: «jeszcze raz»" },
        { tr: "Pacjent jest ściśle monitorowany.", note: "überwacht: przedrostek nierozdzielny" }
      ]
    },
    vocab: [
      "nieprawidłowy, odbiegający od normy, niepokojący",
      "zgłaszać, zgłosić",
      "dokumentować",
      "kontrolować, sprawdzać",
      "informować, poinformować (z biernikiem)",
      "monitorować, obserwować",
      "pielęgniarka oddziałowa, pielęgniarz oddziałowy",
      "lekarz oddziałowy",
      "częstość oddechów",
      "zakres normy",
      "wartość graniczna",
      "odchylenie"
    ],
    dialogue: [
      "Panie doktorze, mówi Elena Marin z oddziału 3. Dzwonię w sprawie pani Keller, sala 12.",
      "Tak, co się dzieje?",
      "Ciśnienie wynosi 90 na 60. Rano było 130 na 80. Tętno 110.",
      "Jak się czuje?",
      "Kręci jej się w głowie, poza tym jest przytomna i zorientowana. Mierzyłam dwa razy.",
      "Dobrze, zaraz przyjdę. Proszę kontrolować ciśnienie co piętnaście minut.",
      "Dobrze. Wartości są dokumentowane w karcie obserwacji."
    ],
    culture: {
      title: "Niemieckie spojrzenie: kto decyduje, a kto zgłasza",
      text: "<p>Na niemieckim oddziale działania terapeutyczne wychodzą od <i>ärztliche Anordnung</i>, zlecenia lekarskiego, albo od pisemnego standardu zatwierdzonego przez placówkę. Kiedy wartość wychodzi poza ustalone granice, pielęgniarka zgłasza ją lekarzowi oddziałowemu albo, w nocy, lekarzowi dyżurnemu, i informuje <i>Stationsleitung</i> albo osobę koordynującą zmianę.</p><p>W niektórych klinikach używa się skal wczesnego ostrzegania, które sumują kilka parametrów i mówią, od kiedy wzywać lekarza. Progi różnią się między placówkami: liczby w tej jednostce są okrągłe i służą wyłącznie do ćwiczenia języka.</p>"
    },
    exercises: [
      {
        q: "Chcesz napisać «Każda wartość jest dokumentowana». Które zdanie jest poprawne?",
        opts: [
          "Jeder Wert wird dokumentiert.",
          "Jeder Wert ist dokumentiert worden wird.",
          "Jeder Wert wird gedokumentiert."
        ],
        why: "Strona bierna z <b>wird</b> + imiesłów na końcu. Czasowniki na <b>-ieren</b> nie dostają <i>ge-</i>: <i>dokumentiert</i>."
      },
      {
        q: "Które zdania w stronie biernej są poprawne?",
        opts: [
          "Der Blutdruck wird zweimal am Tag gemessen.",
          "Der Blutdruck wird zweimal am Tag gemesst.",
          "Die Ärztin wird sofort informiert.",
          "Die Ärztin wird sofort geinformiert.",
          "Ein auffälliger Wert wird gemeldet."
        ],
        why: "<i>messen</i> ma mocny imiesłów <i>gemessen</i>; <i>informieren</i> kończy się na <i>-ieren</i> i nie dostaje <i>ge-</i>; <i>melden</i> daje <i>gemeldet</i>."
      },
      {
        q: "Uzupełnij: «Ein auffälliger Wert wird sofort ___.»",
        hint: "imiesłów od melden",
        why: "<b>gemeldet</b>: czasownik regularny, <i>ge-</i> + rdzeń + <i>-et</i>, na końcu zdania."
      },
      {
        q: "Uzupełnij zdanie w stronie biernej.",
        tr: "Częstość oddechów jest kontrolowana co godzinę.",
        why: "<i>Die Atemfrequenz wird jede Stunde kontrolliert</i>: <i>wird</i> na drugim miejscu, imiesłów na końcu. Pasuje też <i>überprüft</i>: <i>über-</i> jest tu nierozdzielne, więc bez <i>ge-</i>."
      },
      {
        q: "Ułóż słowa we właściwej kolejności.",
        tr: "Pielęgniarka oddziałowa zostaje od razu poinformowana.",
        why: "<i>Die Stationsleitung wird sofort informiert.</i> <i>Wird</i> na drugim miejscu, imiesłów <i>informiert</i>, bez <i>ge-</i>, na końcu."
      },
      {
        q: "Przetłumacz: «Po dziesięciu minutach wartość jest ponownie kontrolowana.»",
        why: "<i>Der Wert wird nach zehn Minuten noch einmal kontrolliert</i>. «Ponownie» oddaje się przez <i>noch einmal</i> albo <i>erneut</i> i nie może zginąć; pasuje też <i>noch einmal gemessen</i> oraz szyk z <i>Nach zehn Minuten</i> na początku."
      },
      {
        q: "Połącz każdy przymiotnik z dokumentacji z jego znaczeniem.",
        pairs: ["z szybkim tętnem (tachykardia)", "z wolnym tętnem (bradykardia)", "z niskim ciśnieniem (hipotonia)", "gorączkujący"]
      },
      {
        q: "Wybierz właściwy rodzajnik określony dla każdego rzeczownika.",
        items: ["pielęgniarka oddziałowa", "lekarz oddziałowy", "częstość oddechów", "zakres normy", "wartość graniczna", "odchylenie"]
      },
      {
        q: "Dzwonisz do lekarza w sprawie nieprawidłowej wartości.",
        setting: "Dwa razy zmierzyłaś ciśnienie pani Keller: jest dużo niższe niż rano.",
        lines: [
          { tr: "Weber, interna. Co się dzieje?" },
          { tr: "Przedstaw się i powiedz, w sprawie którego pacjenta dzwonisz.", answerTr: "Mówi Elena Marin z oddziału 3. Dzwonię w sprawie pani Keller." },
          { tr: "Co jest nie tak?" },
          { tr: "Zgłoś, że ciśnienie jest niższe niż rano: 90 na 60.", answerTr: "Ciśnienie jest niższe niż rano: 90 na 60." },
          { tr: "Dobrze, przyjdę. Proszę kontrolować ciśnienie co piętnaście minut." },
          { tr: "Potwierdź i powiedz, że wartości są dokumentowane w karcie obserwacji.", answerTr: "Dobrze. Wartości są dokumentowane w karcie obserwacji." }
        ]
      },
      {
        tr: "Ciśnienie pani Keller jest niższe niż rano. Wartość zostaje od razu zgłoszona lekarzowi oddziałowemu.",
        why: "W <i>Stationsarzt</i> początkowe <b>st</b> to [ʃt], polskie «szt», a <b>ti</b> w <i>Station</i> czyta się [tsi], «cy»; w <i>gemeldet</i> końcowe <b>d</b> brzmi [t], jak w polskim."
      },
      {
        tr: "Nieprawidłowa wartość zostaje od razu zgłoszona.",
        why: "W <i>auffälliger</i> <b>au</b> to [aʊ], blisko polskiego «ał», a <b>ä</b> jest krótkie, jak polskie <b>e</b>; w <i>sofort</i> akcent pada na drugą sylabę, <b>fort</b>; w <i>wird</i> <b>w</b> czyta się [v], jak polskie w."
      }
    ]
  },
  "lesson:pfl-u02-test": {
    theme: "Sprawdzian",
    title: "Test: Parametry życiowe i wyniki pomiarów",
    objectives: [
      "sprawdzić tryb rozkazujący z Sie i czasowniki rozdzielnie złożone, stopień wyższy przy wartościach, stronę bierną z werden i pary Fachsprache / Laiensprache"
    ],
    theory: [
      {
        p: "Jedenaście pytań z całej jednostki. Zalicza się od 70%. Wartości to okrągłe liczby dydaktyczne: na oddziale obowiązują progi i procedura placówki, a nieprawidłową wartość zawsze zgłasza się lekarzowi."
      }
    ],
    exercises: [
      {
        q: "Chcesz poprosić pacjenta, żeby się położył. Które zdanie jest poprawne?",
        opts: ["Legen Sie sich bitte hin.", "Hinlegen Sie sich bitte.", "Legen Sie bitte hin."],
        why: "Tryb rozkazujący z <b>Sie</b>, zaimek zwrotny <b>sich</b> i przedrostek <b>hin</b> na końcu. W trzecim zdaniu brakuje <i>sich</i>."
      },
      {
        q: "Uzupełnij: «Atmen Sie bitte tief ___.»",
        hint: "przedrostek czasownika einatmen",
        why: "<b>ein</b>: <i>einatmen</i> jest rozdzielnie złożony, więc w trybie rozkazującym przedrostek idzie na koniec."
      },
      {
        q: "Uzupełnij: «Heute ist der Puls ___ als gestern.»",
        hint: "stopień wyższy od langsam",
        why: "<b>langsamer</b>: <i>langsam</i> nie dostaje Umlautu, wystarczy <i>-er</i>."
      },
      {
        tr: "Czas teraźniejszy czasownika anlegen, wszystkie osoby.",
        why: "<i>Lege an, legst an, legt an, legen an, legt an, legen an</i>: czasownik regularny i rozdzielnie złożony, <i>an</i> zawsze na końcu."
      },
      {
        q: "Połącz każdy termin fachowy ze słowem, którego używa pacjent.",
        pairs: ["das Herzrasen", "der niedrige Blutdruck", "die Unterzuckerung", "der hohe Blutzucker"]
      },
      {
        q: "Które zdania w stronie biernej są poprawne?",
        opts: [
          "Der Wert wird dokumentiert.",
          "Der Wert wird gedokumentiert.",
          "Die Ärztin wird informiert.",
          "Der Puls wird gemesst.",
          "Die Sättigung wird am Finger gemessen."
        ],
        why: "<i>dokumentiert</i> i <i>informiert</i> to czasowniki na <i>-ieren</i>, bez <i>ge-</i>; imiesłów od <i>messen</i> to <i>gemessen</i>."
      },
      {
        q: "Uzupełnij stopniem wyższym i stroną bierną.",
        tr: "Cukier jest niższy niż rano. Wartość zostaje od razu zgłoszona.",
        why: "<i>niedriger als heute Morgen</i>, potem strona bierna: <i>Der Wert wird sofort gemeldet</i>."
      },
      {
        q: "Ułóż słowa we właściwej kolejności.",
        tr: "Proszę odsłonić ramię.",
        why: "<i>Machen Sie bitte den Oberarm frei.</i> Czasownik na początku, zaraz za nim <i>Sie</i>, przedrostek <i>frei</i> na końcu."
      },
      {
        q: "Wybierz właściwy rodzajnik określony dla każdego rzeczownika.",
        items: ["mankiet", "tętno", "gorączka", "niedocukrzenie (słowo pacjenta)", "częstość oddechów", "wartość graniczna"]
      },
      {
        tr: "Teraz zmierzę Pani ciśnienie. Proszę nie mówić podczas pomiaru.",
        why: "W <i>Blutdruck</i> <b>u</b> w <i>Blut</i> jest długie, a w <i>Druck</i> krótkie; w <i>jetzt</i> <b>j</b> to [j], jak polskie «j»; w <i>während</i> <b>h</b> jest nieme."
      },
      {
        tr: "Ciśnienie jest niższe niż rano.",
        why: "W <i>niedriger</i> <b>ie</b> to długie <b>i</b>; w <i>Morgen</i> <b>r</b> po samogłosce jest prawie niesłyszalne; w <i>heute</i> <b>eu</b> to [ɔʏ], podobnie do polskiego «oj»."
      }
    ]
  }
});
