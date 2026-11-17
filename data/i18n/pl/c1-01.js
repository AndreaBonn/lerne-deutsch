/* ============================================================
   Learner-language text (pl) for data/core/c1-01.js, unit c1-u01.
   Keys point at ids in the neutral layer; arrays merge by index,
   so their length has to match core.
   Checked by scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("pl", {
  "unit:c1-u01": {
    title: "Oblicza werden",
    grammarNote: "Pięć funkcji werden („stawać się”, przyszłość, przypuszczenie, strona bierna, würde) · geworden i worden · przymiotniki i imiesłowy zrzeczownikowione (der Bekannte, ein Bekannter) · etwas Neues, alles Gute · höchst, äußerst, überaus i superlatyw z am"
  },
  "lesson:c1-u01-l1": {
    theme: "Zmiany i prognozy",
    title: "Jedno słowo, pięć funkcji",
    objectives: [
      "rozpoznawać pięć funkcji werden w tekście",
      "wyrażać przypuszczenia o przeszłości za pomocą Futur II",
      "odróżniać geworden od worden w Perfekcie",
      "nie mylić strony biernej czasu teraźniejszego z przyszłością"
    ],
    theory: [
      {
        h: "Co towarzyszy werden",
        p: "Żeby zrozumieć, co <strong>werden</strong> robi w zdaniu, spójrz, co mu towarzyszy. Z rzeczownikiem lub przymiotnikiem jest czasownikiem samodzielnym, „stawać się, zostawać”: <em>Sie wird Ärztin. Es wird dunkel.</em> Z bezokolicznikiem tworzy <strong>przyszłość</strong> (<em>Wir werden Sie informieren</em>) albo, często z <em>wohl</em>, <strong>przypuszczenie</strong> (<em>Er wird wohl im Büro sein</em>). Z imiesłowem II tworzy <strong>stronę bierną</strong>: <em>Der Antrag wird bearbeitet.</em> Forma <strong>würde</strong> + bezokolicznik to Konjunktiv II: <em>Ich würde das nicht tun.</em> Przypuszczenie o przeszłości wyraża się w <strong>Futur II</strong>, czyli <em>werden</em> + imiesłów II + <em>haben</em> albo <em>sein</em>: <em>Er wird den Termin wohl vergessen haben. Sie wird schon losgefahren sein.</em>"
      },
      {
        h: "geworden albo worden",
        p: "W Perfekcie czasownik samodzielny ma <strong>geworden</strong>: <em>Sie ist Ärztin geworden. Es ist dunkel geworden.</em> Strona bierna ma <strong>worden</strong>, bez <em>ge-</em>: <em>Das Haus ist 1950 gebaut worden.</em> Oba wymagają <em>sein</em> jako czasownika posiłkowego."
      },
      {
        contrast: "Polski rozkłada te funkcje na różne formy: <em>zostać</em> albo <em>stać się</em> (<em>zostaje lekarką</em>), <em>robić się</em> (<em>robi się ciemno</em>), przyszłość złożona albo dokonana (<em>będziemy informować, poinformujemy</em>), strona bierna z <em>zostać</em> albo <em>być</em> (<em>wniosek zostaje rozpatrzony, jest rozpatrywany</em>), tryb przypuszczający (<em>nie zrobiłbym tego</em>). Przypuszczenie nie ma po polsku osobnej formy: wystarczy <em>pewnie</em> albo <em>chyba</em> i zwykły czas, teraźniejszy lub przeszły (<em>Pewnie jest w biurze. Pewnie zapomniał o terminie</em>). W niemieckim za wszystkim stoi <em>werden</em>, a funkcję odczytuje się z konstrukcji i kontekstu: przyszłość i przypuszczenie mają tę samą formę (<em>Er wird zu Hause sein</em>) i bez wskazówek takich jak <em>wohl</em> albo okolicznik czasu bywają dwuznaczne. Uwaga na <em>zostać</em>: służy po polsku i do „stać się” (<em>została lekarką</em>), i do strony biernej (<em>dom został zbudowany</em>), więc nie podpowiada, czy po niemiecku wybrać <em>geworden</em>, czy <em>worden</em>."
      },
      {
        trap: "<em>Der Antrag wird bearbeitet</em> formalnie nie jest czasem przyszłym: to strona bierna czasu teraźniejszego (która, jak każdy czas teraźniejszy, może odnosić się do przyszłości, gdy wskazuje na to kontekst: <em>Der Antrag wird morgen bearbeitet</em>, „wniosek zostanie rozpatrzony jutro”), „wniosek jest rozpatrywany”, a nie „zostanie rozpatrzony”. Przypuszczenia o przeszłości nie wyraża się też prostym Futur I: „pewnie był zmęczony” to <em>Er wird müde gewesen sein</em> (Futur II), a <em>Er wird müde sein</em> jako przypuszczenie bez wskazania czasu dotyczy zwykle teraźniejszości (kontekst może mu nadać znaczenie przyszłe)."
      },
      {
        tip: "Przy trudnym <em>werden</em> patrz na całą konstrukcję pod koniec zdania: <em>werden</em> z imiesłowem II innego czasownika (<em>wird bearbeitet</em>) to strona bierna, a <em>geworden</em> (<em>ist müde geworden</em>) to Perfekt od „stawać się”; <em>werden</em> + imiesłów II + <em>haben</em> albo <em>sein</em> (<em>wird vergessen haben</em>) to Futur II (przypuszczenie o przeszłości albo czynność zakończona do przyszłego momentu: <em>Bis morgen werde ich den Bericht fertiggestellt haben</em>), a bezokolicznik (<em>informieren, sein</em>) oznacza przyszłość albo przypuszczenie."
      }
    ],
    grammar: {
      title: "Funkcje werden",
      note: "<b>Rzeczownik lub przymiotnik</b>: stawać się. <b>Bezokolicznik</b>: przyszłość albo, często z <i>wohl</i>, przypuszczenie. <b>Imiesłów II</b>: strona bierna. <b>würde + bezokolicznik</b>: Konjunktiv II. Perfekt: <i>geworden</i> („stawać się”), <i>worden</i> (strona bierna).",
      table: {
        head: ["funkcja", "co mu towarzyszy", "przykład"],
        rows: [
          ["stawać się", "rzeczownik lub przymiotnik", "Sie wird Ärztin."],
          ["przyszłość", "bezokolicznik", "Wir werden Sie informieren."],
          ["przypuszczenie", "bezokolicznik, często z wohl", "Er wird wohl im Büro sein."],
          ["strona bierna", "imiesłów II", "Der Antrag wird bearbeitet."],
          ["Konjunktiv II", "würde + bezokolicznik", "Ich würde das nicht tun."]
        ]
      },
      examples: [
        { tr: "Mały start-up stał się tymczasem światowym koncernem.", note: "czasownik samodzielny „stawać się” w Perfekcie: aus ... ist ... geworden" },
        { tr: "Stopniowo staje się jasne, że projekt może się nie powieść.", note: "czasownik samodzielny z orzecznikiem przymiotnikowym i zdaniem podmiotowym na końcu (dass ...)" },
        { tr: "Poinformujemy Państwa na czas.", note: "przyszłość: werden + bezokolicznik" },
        { tr: "Wniosek jest właśnie rozpatrywany.", note: "strona bierna czasu teraźniejszego, nie przyszłość" },
        { tr: "Na twoim miejscu nie zrobiłbym tego.", note: "Konjunktiv II z würde" },
        { tr: "Pewnie jeszcze jest w biurze.", note: "przypuszczenie: werden + wohl + bezokolicznik" }
      ]
    },
    vocab: [
      "zmiana",
      "rozwój, przebieg",
      "stan",
      "przypuszczenie, domysł",
      "prognoza",
      "wniosek (urzędowy)",
      "zmieniać się",
      "powstawać",
      "przypuszczać",
      "rozpatrywać, opracowywać (sprawę)",
      "stopniowo",
      "prawdopodobnie, przypuszczalnie"
    ],
    exercises: [
      {
        q: "W wiadomości ze szpitala: „Ihr Vater wird morgen früh operiert.” Co robi tu werden?",
        opts: [
          "tworzy stronę bierną czasu teraźniejszego o znaczeniu przyszłym dzięki morgen",
          "tworzy przyszłość czynną: ojciec będzie operował",
          "wyraża przypuszczenie: może zostanie zoperowany"
        ],
        why: "Z imiesłowem II <i>operiert</i> to <b>strona bierna</b>; czas teraźniejszy ma znaczenie przyszłe dzięki <i>morgen früh</i>, jak często w niemieckim. Nie ma ani <i>wohl</i>, ani bezokolicznika: to nie przypuszczenie."
      },
      {
        q: "Kolega martwi się liczbą w raporcie. Odpowiadasz: „Das wird schon stimmen.” Co przekazujesz?",
        opts: [
          "uspokajające przypuszczenie: „na pewno się zgadza”",
          "prognozę: „zacznie się zgadzać”",
          "stronę bierną: „jest poprawiane”"
        ],
        why: "<i>werden</i> + bezokolicznik z <i>schon</i> wyraża <b>przypuszczenie</b>, które uspokaja; <i>stimmen</i> jest bezokolicznikiem, nie imiesłowem, więc to nie strona bierna."
      },
      {
        q: "W artykule gospodarczym: „Seit der Fusion ist aus zwei Konkurrenten ein einziger Konzern ___.”",
        opts: [
          "geworden",
          "worden",
          "werden"
        ],
        why: "<i>werden</i> jako czasownik samodzielny („stawać się”) ma imiesłów <b>geworden</b>. <i>worden</i> występuje tylko w stronie biernej."
      },
      {
        q: "Uzupełnij w stronie biernej: „Das Haus ist 1950 gebaut ___.”",
        hint: "imiesłów werden w stronie biernej",
        why: "<b>worden</b>: w Perfekcie strony biernej imiesłów <i>werden</i> traci <i>ge-</i>."
      },
      {
        q: "Twój przyjaciel nie przyszedł na spotkanie. Przypuszczasz: „Er wird den Termin wohl vergessen ___.”",
        hint: "Futur II: werden + imiesłów + czasownik posiłkowy",
        why: "<b>haben</b>: przypuszczenie o przeszłości w Futur II, <i>wird ... vergessen haben</i>, „pewnie zapomniał o spotkaniu”."
      },
      {
        q: "Uzupełnij zdanie.",
        tr: "Na twoim miejscu nie zrobiłbym tego.",
        why: "<i>An deiner Stelle würde ich das nicht tun</i> (albo <i>machen</i>): Konjunktiv II z <i>würde</i> i bezokolicznikiem na końcu."
      },
      {
        q: "W których zdaniach werden tworzy stronę bierną?",
        opts: [
          "Der Brief wird morgen geschickt.",
          "Die Tür wurde geöffnet.",
          "Er wird morgen kommen.",
          "Sie wird Lehrerin."
        ],
        why: "Pierwsze dwa mają imiesłów II (<i>geschickt, geöffnet</i>): strona bierna. W trzecim <i>werden</i> + bezokolicznik to przyszłość, w czwartym z rzeczownikiem znaczy „stawać się”."
      },
      {
        q: "Przekształć na przypuszczenie w Futur II: „Prawdopodobnie (on) zapomniał o spotkaniu.” (der Termin)",
        why: "<i>Er wird den Termin wohl vergessen haben</i>: <i>werden</i> + imiesłów + <i>haben</i>, z <i>wohl</i> albo <i>vermutlich</i> w miejsce „prawdopodobnie” (<i>sicher</i> wyraziłoby większą pewność)."
      },
      {
        tr: "Miasto stale rośnie. Za dziesięć lat będzie miało pewnie dwa razy więcej mieszkańców, a wiele starych domów zostanie zburzonych.",
        why: "W <i>Einwohner</i> akcent pada na <b>Ein</b>; w <i>doppelt</i> <b>o</b> jest krótkie; w <i>abgerissen</i> <b>b</b> przed <i>g</i> wymawia się [p]."
      },
      {
        tr: "Gdybym miała więcej czasu, zostałabym lekarką.",
        why: "W <i>hätte</i> <b>ä</b> jest krótkie; w <i>Ärztin</i> <b>z</b> wymawia się [ts]; w <i>werden</i> <b>r</b> ulega wokalizacji."
      }
    ]
  },
  "lesson:c1-u01-l2": {
    theme: "Osoby i oceny",
    title: "der Bekannte, etwas Neues",
    objectives: [
      "odmieniać przymiotniki i imiesłowy użyte jako rzeczowniki",
      "dobierać końcówkę według rodzajnika (der Bekannte, ein Bekannter)",
      "używać etwas, nichts i alles z przymiotnikiem zrzeczownikowionym",
      "wyrażać ocenę wyniku"
    ],
    theory: [
      {
        h: "Przymiotnik, który staje się rzeczownikiem",
        p: "Wiele osób nazywa się przymiotnikiem albo imiesłowem użytym jak rzeczownik: <em>der Bekannte</em> (znajomy), <em>der Angestellte</em> (pracownik), <em>der Erwachsene</em>, <em>der Verletzte</em>. Pisze się je wielką literą, ale odmienia jak przymiotniki: końcówka zależy od rodzajnika. <em>der Bekannte, die Bekannten</em>, ale <em>ein Bekannter, Bekannte</em> (liczba mnoga bez rodzajnika). Z <em>kein</em> liczba pojedyncza idzie za <em>ein</em> (<em>kein Bekannter</em>), a mnoga za zaimkami dzierżawczymi (<em>keine Bekannten</em>)."
      },
      {
        h: "etwas Neues, nichts Besseres, alles Gute",
        p: "Po <strong>etwas, nichts, viel, wenig</strong> przymiotnik zrzeczownikowiony jest rodzaju nijakiego, pisany wielką literą, z końcówką <em>-es</em> w mianowniku i bierniku: <em>etwas Neues, nichts Besseres, viel Interessantes</em>. Po <strong>alles</strong> ma <em>-e</em>: <em>alles Gute, alles Wichtige</em>."
      },
      {
        contrast: "Polski też ma takie rzeczowniki (<em>znajomy, ranny, dorosły</em>) i odmienia je jak przymiotniki, ale bez rodzajnika: <em>znajomy</em> brzmi tak samo, czy mówisz o kimś konkretnym, czy o jakimś znajomym. W niemieckim końcówka zmienia się razem z rodzajnikiem (<em>der Bekannte</em>, <em>ein Bekannter</em>). Inaczej jest też z <em>coś nowego</em>: po polsku przymiotnik stoi w dopełniaczu (<em>coś nowego, nic lepszego</em>), a po niemiecku przymiotnik przyjmuje przypadek całego wyrażenia, bez przyimka i wielką literą: w mianowniku i bierniku <em>etwas Neues, nichts Besseres</em>, w celowniku <em>mit etwas Neuem</em>."
      },
      {
        trap: "Polskie <em>znajomy</em> nie zmienia się z rodzajnikiem, więc łatwo napisać <em>ein Bekannte</em>. <em>der Bekannte</em> zachowuje się jak przymiotnik: <em>ein Bekannter</em> w mianowniku, <em>mit einem Bekannten</em> w celowniku. Także w liczbie mnogiej bez rodzajnika, w mianowniku i bierniku: <em>Wir haben Verwandte in Wien</em>, nie <em>Verwandten</em>; w celowniku natomiast <em>mit Verwandten</em>."
      },
      {
        tip: "Gdy nie wiesz, jakiej końcówki użyć, wyobraź sobie rzeczownik za przymiotnikiem: <em>ein bekannter (Mann)</em> → <em>ein Bekannter</em>; <em>dem bekannten (Mann)</em> → <em>dem Bekannten</em>."
      }
    ],
    grammar: {
      title: "Przymiotniki i imiesłowy zrzeczownikowione",
      note: "Odmieniają się jak przymiotniki: <b>der Bekannte</b>, <b>ein Bekannter</b>, <b>die Bekannten</b>, <b>Bekannte</b>. Po <i>etwas, nichts, viel, wenig</i>: <b>-es</b> (etwas Neues). Po <i>alles</i>: <b>-e</b> (alles Gute).",
      table: {
        head: ["", "z der, die, das", "z ein albo bez rodzajnika"],
        rows: [
          ["rodzaj męski", "der Bekannte", "ein Bekannter"],
          ["rodzaj żeński", "die Bekannte", "eine Bekannte"],
          ["liczba mnoga", "die Bekannten", "Bekannte"],
          ["celownik rodzaju męskiego", "dem Bekannten", "einem Bekannten"]
        ]
      },
      examples: [
        { tr: "Znajomy polecił mi to mieszkanie.", note: "ein Bekannter: końcówka -er po ein" },
        { tr: "Pracownicy pracują dziś dłużej.", note: "die Angestellten: -en po die" },
        { tr: "Rannego zawieziono do szpitala.", note: "der Verletzte: imiesłów zrzeczownikowiony" },
        { tr: "Nie ma prawie nic bardziej irytującego niż spóźnienie się na przesiadkę.", note: "etwas + stopień wyższy zrzeczownikowiony: etwas Ärgerlicheres" },
        { tr: "Nie ma nic lepszego niż świeży chleb.", note: "nichts Besseres: stopień wyższy zrzeczownikowiony" },
        { tr: "Wszystkiego najlepszego z okazji urodzin!", note: "alles Gute: -e po alles" }
      ]
    },
    vocab: [
      "znajomy",
      "pracownik",
      "dorosły",
      "krewny",
      "nastolatek, młody człowiek",
      "poseł",
      "znakomity",
      "przeciętny",
      "udany",
      "nieudany",
      "przekonujący",
      "jedyny w swoim rodzaju"
    ],
    exercises: [
      {
        q: "W wiadomości gospodarczej: „Die Zahl der ___ ist im Herbst gestiegen.”",
        opts: [
          "Arbeitslosen",
          "Arbeitslose",
          "Arbeitsloser"
        ],
        why: "Dopełniacz liczby mnogiej po <i>der</i>: przymiotnik zrzeczownikowiony dostaje <b>-en</b>, <i>die Zahl der Arbeitslosen</i>. <i>Arbeitslose</i> to liczba mnoga w mianowniku albo bierniku bez rodzajnika; <i>Arbeitsloser</i> to liczba pojedyncza po <i>ein</i> albo dopełniacz liczby mnogiej bez rodzajnika (<i>die Zahl Arbeitsloser</i>). Po <i>der</i> w dopełniaczu liczby mnogiej potrzeba <i>Arbeitslosen</i>."
      },
      {
        q: "W komunikacie związkowym: „Die Interessen der ___ wurden bei der Umstrukturierung kaum berücksichtigt.”",
        opts: [
          "Beschäftigten",
          "Beschäftigte",
          "Beschäftigter"
        ],
        why: "Dopełniacz liczby mnogiej po <i>der</i>: imiesłów zrzeczownikowiony dostaje <b>-en</b>, <i>der Beschäftigten</i> („pracowników”)."
      },
      {
        q: "W reportażu o fuzji: „Den Angestellten stand nach der Übernahme nichts ___ bevor.”",
        opts: [
          "Gutes",
          "Gute",
          "Guten"
        ],
        why: "Po <i>nichts</i> przymiotnik zrzeczownikowiony jest rodzaju nijakiego z <b>-es</b>, także w zdaniu złożonym: <i>nichts Gutes</i> („nic dobrego”). <i>Gute</i> idzie za <i>alles</i>."
      },
      {
        q: "Uzupełnij: „Es gibt nichts ___ als frisches Brot.”",
        opts: [
          "Besseres",
          "Bessere",
          "Besser"
        ],
        why: "Po <i>nichts</i> przymiotnik zrzeczownikowiony jest rodzaju nijakiego z <b>-es</b>: <i>nichts Besseres</i>, także w stopniu wyższym."
      },
      {
        q: "Uzupełnij zdanie: w pierwszej luce „młodzież”, w drugiej „dorośli”.",
        tr: "Wstęp jest bezpłatny dla młodzieży, dorośli płacą dziesięć euro.",
        why: "<i>Jugendliche</i> i <i>Erwachsene</i>: liczba mnoga bez rodzajnika, więc <i>-e</i>, a nie <i>-en</i>."
      },
      {
        q: "Połącz każde słowo z jego znaczeniem.",
        pairs: [
          "znajomy",
          "pracownik",
          "krewny",
          "poseł"
        ]
      },
      {
        q: "Ułóż wyrazy we właściwej kolejności.",
        tr: "Rannego zawieziono do szpitala.",
        why: "<i>Der Verletzte wurde ins Krankenhaus gebracht.</i> <i>der Verletzte</i> to imiesłów zrzeczownikowiony; <i>wurde ... gebracht</i> to strona bierna w Präteritum."
      },
      {
        q: "Przetłumacz: „Rozmawiałem ze znajomym rannego.”",
        why: "<i>Ich habe mit einem Bekannten des Verletzten gesprochen</i>: dwa zrzeczownikowione, w celowniku po <i>mit einem</i> (<i>Bekannten</i>) i w dopełniaczu po <i>des</i> (<i>Verletzten</i>), oba z <i>-en</i>."
      },
      {
        tr: "Wczoraj spotkałem starego znajomego. Opowiedział mi coś interesującego: jego firma szuka nowych pracowników.",
        why: "W <i>Bekannten</i> akcent pada na <b>kann</b>; w <i>Interessantes</i> akcent pada na <b>sant</b>."
      },
      {
        tr: "Dla dorosłych wstęp kosztuje dwanaście euro.",
        why: "W <i>Erwachsene</i> akcent pada na <b>wach</b>, a <b>chs</b> wymawia się [ks]; w <i>Eintritt</i> akcent pada na <b>Ein</b>; w <i>zwölf</i> <b>ö</b> jest krótkie."
      }
    ]
  },
  "lesson:c1-u01-l3": {
    theme: "Ocenianie jakości",
    title: "höchst, äußerst, am besten",
    objectives: [
      "wyrażać bardzo wysoki stopień bez porównania",
      "odróżniać äußerst schwierig od am schwierigsten",
      "używać höchst, äußerst, überaus, ziemlich",
      "formułować ocenę wyniku lub dzieła"
    ],
    theory: [
      {
        h: "Bardzo wysoki stopień bez porównania",
        p: "Żeby powiedzieć, że coś ma jakąś cechę w bardzo wysokim stopniu, bez porównywania z czymś innym, niemiecki stawia przysłówek przed przymiotnikiem: <em>sehr</em> i, w piśmie, <strong>höchst</strong>, <strong>äußerst</strong>, <strong>überaus</strong>; <strong>besonders</strong> („szczególnie”) natomiast uwypukla cechę, często na tle innych. <em>Das ist ein höchst interessanter Vorschlag. Die Lage ist äußerst schwierig.</em> Do złagodzenia: <strong>ziemlich</strong> („dość”), <em>relativ</em>, <em>einigermaßen</em>."
      },
      {
        h: "Superlatyw nadal jest porównaniem",
        p: "Zazwyczaj <em>am</em> + superlatyw (<em>am kürzesten, am besten</em>) porównuje rzecz z innymi; są też użycia bez realnego porównania, jak <em>Das weißt du am besten selbst</em>. Zwykła wartość, ta z tej lekcji, to porównanie: <em>Von den drei Wegen ist dieser am kürzesten.</em> W oficjalnym piśmie istnieje też <em>aufs</em> + superlatyw, pisany wielką albo małą literą, o znaczeniu bardzo wysokiego stopnia: <em>Sie hat uns aufs Herzlichste begrüßt.</em>"
      },
      {
        contrast: "Polski stopień najwyższy tworzy się przedrostkiem <em>naj-</em>, jak niemieckie <em>am</em> + superlatyw: <em>najkrótsza droga</em>, a <em>Dieser Weg ist am kürzesten</em> to „ta droga jest najkrótsza”. Bardzo wysoki stopień bez porównania oddajemy po polsku przysłówkami (<em>bardzo, niezwykle, wyjątkowo, nader</em>) albo przedrostkami (<em>przeciekawy, superciekawy</em>). Niemiecki ma kilka takich przedrostków (<em>hochinteressant</em>, <em>hocherfreut</em>, potocznie <em>superinteressant</em>), ale najczęściej używa przysłówków: <em>przeciekawy</em> to zwykle <em>äußerst interessant</em> albo <em>sehr interessant</em>, a wybór zależy od słowa i rejestru. Wyjątkiem są formuły grzecznościowe: polskie <em>najserdeczniej</em> (<em>najserdeczniej nas powitała</em>) to właśnie niemieckie <em>aufs Herzlichste</em>, a nie zwykłe <em>am herzlichsten</em>."
      },
      {
        trap: "<em>höchst</em> przed przymiotnikiem jest przysłówkiem i się nie zmienia: <em>ein höchst interessanter Vorschlag</em>, nie <em>ein höchster interessanter Vorschlag</em>, podobnie jak polskie <em>wysoce</em> (<em>wysoce interesująca propozycja</em>). Końcówkę dostaje tylko przymiotnik, który następuje."
      },
      {
        tip: "W mowie słychać też <em>total, echt, super</em> (<em>echt gut, total spannend</em>); w liście oficjalnym albo w sprawozdaniu zostają <em>äußerst, höchst, überaus</em>."
      }
    ],
    grammar: {
      title: "Bardzo wysoki stopień i superlatyw",
      note: "<b>höchst, äußerst, überaus</b> + przymiotnik: bardzo wysoki stopień, bez porównania (mocniejsze od <i>sehr</i>). <b>besonders</b> uwypukla natomiast cechę, często na tle innych. <b>am</b> + superlatyw: porównanie. <b>aufs</b> + superlatyw: bardzo wysoki stopień, styl oficjalny.",
      table: {
        head: ["forma", "wartość", "przykład"],
        rows: [
          ["sehr, äußerst, höchst + przymiotnik", "bardzo wysoki stopień", "Die Lage ist äußerst schwierig."],
          ["ziemlich + przymiotnik", "stopień średnio wysoki", "Der Film war ziemlich langweilig."],
          ["am + superlatyw", "porównanie", "Dieser Weg ist am kürzesten."],
          ["aufs + superlatyw", "bardzo wysoki stopień, styl oficjalny", "Sie hat uns aufs Herzlichste begrüßt."]
        ]
      },
      examples: [
        { tr: "To wyjątkowo interesująca propozycja.", note: "höchst: przysłówek, nie odmienia się" },
        { tr: "Sytuacja jest niezwykle trudna.", note: "äußerst zamiast przedrostka" },
        { tr: "Projekt był nader udany.", note: "überaus: styl oficjalny" },
        { tr: "Ta droga jest najkrótsza.", note: "am kürzesten: porównanie" },
        { tr: "Powitała nas najserdeczniej.", note: "aufs Herzlichste: styl oficjalny" },
        { tr: "Film był dość nudny.", note: "ziemlich: łagodzi" }
      ]
    },
    vocab: [
      "jakość",
      "wrażenie",
      "ocena, recenzja",
      "sąd, opinia",
      "miara, kryterium",
      "wynik, osiągnięcie",
      "w najwyższym stopniu",
      "niezwykle",
      "nader, nadzwyczaj",
      "dość, całkiem",
      "imponujący",
      "godny uwagi"
    ],
    exercises: [
      {
        q: "W opinii biegłego chcesz złagodzić ocenę wyników. Które zdanie wybierasz?",
        opts: [
          "Die Ergebnisse sind ziemlich widersprüchlich.",
          "Die Ergebnisse sind äußerst widersprüchlich.",
          "Die Ergebnisse sind höchst widersprüchlich."
        ],
        why: "<b>ziemlich</b> łagodzi („dość sprzeczne”); <i>äußerst</i> i <i>höchst</i> wzmacniają ocenę."
      },
      {
        q: "Spośród trzech dróg ta jest najkrótsza: „Von den drei Wegen ist dieser ___.”",
        opts: [
          "am kürzesten",
          "äußerst kurz",
          "höchst kurz"
        ],
        why: "Jest tu porównanie trzech dróg: <b>am kürzesten</b>. <i>äußerst kurz</i> mówiłoby tylko, że jest bardzo krótka."
      },
      {
        q: "Odpowiadasz listownie na ofertę handlową. Które zdanie wyraża bardzo duże zainteresowanie, bez porównania i we właściwym rejestrze?",
        opts: [
          "Ihr Angebot ist für uns äußerst interessant.",
          "Ihr Angebot ist für uns echt super.",
          "Ihr Angebot ist für uns am interessantesten."
        ],
        why: "W liście oficjalnym używa się <b>äußerst</b> (albo <i>höchst</i>); <i>echt super</i> to nieformalna mowa. <i>am interessantesten</i> jest porównaniem, a tu nie ma z czym porównywać."
      },
      {
        q: "W recenzji: „Das Ergebnis übertraf selbst die ___ Erwartungen.” (superlatyw od kühn)",
        hint: "superlatyw w funkcji przydawki po die, liczba mnoga",
        why: "<b>kühnsten</b>: superlatyw użyty jako przydawka, z końcówką <i>-en</i> po <i>die</i>; „przerósł nawet najśmielsze oczekiwania”."
      },
      {
        q: "Uzupełnij: „Die Aussicht ist ___ beeindruckend.”",
        hint: "„niezwykle”, zaczyna się od ä",
        why: "<b>äußerst</b>: bardzo wysoki stopień bez porównania, typowy dla pisma."
      },
      {
        q: "Uzupełnij zdanie.",
        tr: "Powitała nas najserdeczniej.",
        why: "<i>Sie hat uns aufs Herzlichste begrüßt</i> (pisze się też <i>aufs herzlichste</i>): <i>aufs</i> + superlatyw, formuła stylu oficjalnego."
      },
      {
        q: "Połącz każde słowo z jego znaczeniem.",
        pairs: [
          "ocena, recenzja",
          "sąd, opinia",
          "miara, kryterium",
          "wrażenie"
        ]
      },
      {
        q: "Napisz w rejestrze oficjalnym: „Wynik jest niezwykle godny uwagi, choć koszty były dość wysokie.”",
        why: "<i>Das Ergebnis ist äußerst bemerkenswert, auch wenn die Kosten ziemlich hoch waren</i>: <i>äußerst</i> (albo <i>höchst, überaus</i>) dla wysokiego stopnia, <i>ziemlich</i> dla złagodzenia; poprawne są też <i>obwohl</i> i Perfekt <i>gewesen sind</i>."
      },
      {
        tr: "Nowa wystawa jest niezwykle warta zobaczenia. Obrazy są wyjątkowo nietypowe, a zwiedzający byli pod ogromnym wrażeniem.",
        why: "W <i>Ausstellung</i> akcent pada na <b>Aus</b>; w <i>sehenswert</i> <b>h</b> jest nieme; w <i>beeindruckt</i> <b>ee</b> nie jest długie: <i>be-</i> i <i>ein</i> wymawia się osobno."
      },
      {
        tr: "To niezwykle godny uwagi wynik.",
        why: "W <i>bemerkenswertes</i> akcent pada na <b>mer</b>; w <i>Ergebnis</i> akcent pada na <b>geb</b>; w <i>höchst</i> <b>ch</b> wymawia się [ç]."
      }
    ]
  },
  "lesson:c1-u01-test": {
    theme: "Sprawdzian",
    title: "Test: Oblicza werden",
    objectives: [
      "sprawdzić funkcje werden, przymiotniki zrzeczownikowione i bardzo wysoki stopień"
    ],
    theory: [
      {
        p: "Dziesięć pytań z całej jednostki. Zaliczasz przy 70%. Nie zaglądaj do lekcji w trakcie odpowiadania: jeśli czegoś nie pamiętasz, lepiej wrócić i powtórzyć."
      }
    ],
    exercises: [
      {
        q: "Uzupełnij: „Aus der Idee zweier Studenten ist ein erfolgreiches Unternehmen ___.”",
        hint: "imiesłów werden w znaczeniu „stać się”",
        why: "<b>geworden</b>: w znaczeniu „stać się” imiesłów ma <i>ge-</i>."
      },
      {
        q: "Uzupełnij: „Ich habe gestern mit einem ___ von dir gesprochen.”",
        hint: "od bekannt, rodzaj męski, celownik po einem",
        why: "<b>Bekannten</b>: po <i>einem</i> (celownik) przymiotnik zrzeczownikowiony dostaje <i>-en</i>."
      },
      {
        q: "Uzupełnij: „Wir wohnen zurzeit in der Wohnung eines ___.”",
        hint: "od verwandt, rodzaj męski, dopełniacz po eines",
        why: "<b>Verwandten</b>: po <i>eines</i> (dopełniacz) przymiotnik zrzeczownikowiony dostaje <i>-en</i>."
      },
      {
        q: "Koleżanka nie odbiera telefonu. Co znaczy „Sie wird den Zug verpasst haben”?",
        opts: [
          "przypuszczenie o przeszłości: „pewnie spóźniła się na pociąg”",
          "przyszłość: „spóźni się na pociąg”",
          "strona bierna: „pociąg został przegapiony”"
        ],
        why: "<i>werden</i> + imiesłów + <i>haben</i> to <b>Futur II</b>: tu przypuszczenie o tym, co już się stało."
      },
      {
        q: "W raporcie technicznym: które zdanie formułuje przyczynę usterki najostrożniej?",
        opts: [
          "Der Fehler wird wohl bei der Software liegen.",
          "Der Fehler liegt bei der Software.",
          "Der Fehler wird bei der Software gesucht."
        ],
        why: "<i>werden</i> + bezokolicznik z <i>wohl</i> przedstawia przyczynę jako <b>przypuszczenie</b>; drugie zdanie to stwierdzenie, trzecie strona bierna („jest szukany”)."
      },
      {
        q: "Gość się spóźnia. Które zdanie wyraża najsłabsze przypuszczenie?",
        opts: [
          "Er wird vielleicht noch kommen.",
          "Er wird sicher noch kommen.",
          "Er kommt bestimmt noch."
        ],
        why: "<b>vielleicht</b> zostawia możliwość otwartą; <i>sicher</i> i <i>bestimmt</i> wyrażają bardzo silne przypuszczenie."
      },
      {
        q: "Wśród wszystkich kandydatów ona jest najlepsza: „Von allen Kandidaten ist sie ___.”",
        opts: [
          "am besten",
          "äußerst gut",
          "höchst gut"
        ],
        why: "Jest porównanie z pozostałymi kandydatami: <b>am besten</b>."
      },
      {
        q: "Połącz każde słowo z jego znaczeniem.",
        pairs: [
          "dorosły",
          "nastolatek, młody człowiek",
          "krewny",
          "pracownik"
        ]
      },
      {
        tr: "Projekt zostanie prawdopodobnie zakończony dopiero w przyszłym roku. Koszty są niezwykle wysokie i wielu pracowników będzie zapewne musiało pracować dłużej.",
        why: "W <i>vermutlich</i> akcent pada na <b>mut</b>; w <i>abgeschlossen</i> <b>b</b> wymawia się [p]; w <i>äußerst</i> <b>äu</b> wymawia się [ɔʏ]."
      },
      {
        tr: "Mój znajomy został posłem.",
        why: "W <i>Abgeordneter</i> akcent pada na <b>Ab</b>; w <i>geworden</i> <b>o</b> jest krótkie; w <i>Bekannter</i> akcent pada na <b>kann</b>."
      }
    ]
  },
  "unit:c1-u02": {
    title: "Doprowadzić coś do skutku",
    grammarNote: "Czasowniki funkcyjne (zur Verfügung stellen, in Frage kommen, eine Entscheidung treffen) · zamienniki strony biernej: sich lassen, sein + zu, przymiotniki na -bar · przedrostki rozdzielne i nierozdzielne o różnym znaczeniu (umfahren) · idiomy"
  },
  "lesson:c1-u02-l1": {
    theme: "Praca i projekty",
    title: "Czasowniki funkcyjne",
    objectives: [
      "rozumieć i używać czasowników funkcyjnych z tekstów oficjalnych",
      "dobierać właściwy czasownik do rzeczownika (eine Entscheidung treffen)",
      "umieszczać grupę z rzeczownikiem pod koniec zdania",
      "czytać krótkie ogłoszenie albo protokół"
    ],
    theory: [
      {
        h: "Znaczenie niesie rzeczownik",
        p: "W tekstach oficjalnych wiele czynności wyraża się <strong>rzeczownikiem</strong>, który niesie znaczenie, i <strong>czasownikiem</strong> prawie pustym: <em>eine Entscheidung treffen</em> (podjąć decyzję), <em>zur Verfügung stellen</em> (oddać do dyspozycji), <em>in Kraft treten</em> (wejść w życie), <em>in Frage kommen</em> (wchodzić w grę), <em>zum Ausdruck bringen</em> (wyrazić), <em>Rücksicht nehmen auf</em> (mieć wzgląd na). W grupach z przyimkiem przyimka i rodzajnika się nie wybiera (<em>zur Verfügung</em>); w grupach z dopełnieniem rodzajnik może się zmieniać (<em>eine Entscheidung treffen, die Entscheidung treffen</em>)."
      },
      {
        h: "Miejsce w zdaniu",
        p: "Zazwyczaj grupy z przyimkiem (<em>zur Verfügung stellen, in Kraft treten, in Frage kommen</em>) stoją pod koniec zdania, trochę jak partykuła rozdzielna: czasownik odmienia się na swoim miejscu, a grupa go dopełnia. Nie są jednak przedrostkami czasownika i dla uwypuklenia mogą stanąć na pierwszym miejscu: <em>In Frage kommt nur diese Lösung.</em> <em>Die Firma <strong>stellt</strong> uns die Räume <strong>zur Verfügung</strong>.</em> W Perfekcie i z czasownikiem modalnym grupa stoi przed imiesłowem albo bezokolicznikiem: <em>Die Firma hat uns die Räume zur Verfügung gestellt. Das Gesetz soll im Januar in Kraft treten.</em> Grupy z dopełnieniem (<em>eine Entscheidung treffen</em>) podlegają natomiast zwykłemu szykowi zdania: <em>Wir treffen heute eine Entscheidung über den Antrag. Wir müssen bis Freitag eine Entscheidung treffen.</em> Przeczenie zwykle stoi przed grupą: <em>Das kommt nicht in Frage.</em>"
      },
      {
        contrast: "Polski też ma takie zestawienia (<em>podjąć decyzję, wejść w życie, dać wyraz, wchodzić w grę</em>) i wiele z nich pokrywa się z niemieckimi, co ułatwia naukę. Ryzykiem jest kalka tam, gdzie czasownik się nie zgadza: <em>podjąć decyzję</em> to <em>eine Entscheidung treffen</em>, a nie <em>nehmen</em>; <em>zadać pytanie</em> to <em>eine Frage stellen</em>, a nie <em>machen</em>."
      },
      {
        trap: "<em>in Frage kommen</em> nie ma nic wspólnego z pytaniami: znaczy „wchodzić w grę, być branym pod uwagę”. <em>Das kommt nicht in Frage</em> to stanowcza odmowa, „nie ma mowy”."
      },
      {
        tip: "Ucz się tych grup jako całych bloków, z przyimkiem i rodzajnikiem: <em>zur Verfügung</em>, <em>in Kraft</em>, <em>zum Ausdruck</em>. Jeśli zapamiętasz tylko rzeczownik, zły czasownik pojawi się natychmiast."
      }
    ],
    grammar: {
      title: "Czasowniki funkcyjne",
      note: "Rzeczownik + czasownik prawie pusty, grupa stała. Czasownik odmienia się na swoim miejscu, a grupa z przyimkiem zwykle idzie pod koniec zdania (<i>Die Firma stellt uns die Räume zur Verfügung</i>); położenie może się zmienić zależnie od budowy zdania i tego, co się chce uwypuklić.",
      table: {
        head: ["czasownik funkcyjny", "znaczenie", "czasownik prosty"],
        rows: [
          ["eine Entscheidung treffen", "podjąć decyzję", "entscheiden"],
          ["zur Verfügung stellen", "oddać do dyspozycji", "bereitstellen"],
          ["in Kraft treten", "wejść w życie", "gültig werden"],
          ["in Frage kommen", "wchodzić w grę, być branym pod uwagę", "möglich sein"],
          ["zum Ausdruck bringen", "wyrazić", "ausdrücken"],
          ["Rücksicht nehmen auf", "mieć wzgląd na, liczyć się z", "berücksichtigen"]
        ]
      },
      examples: [
        { tr: "Firma oddaje nam do dyspozycji pomieszczenia.", note: "rzeczownik idzie pod koniec: zur Verfügung" },
        { tr: "Musimy podjąć decyzję do piątku.", note: "treffen, nie nehmen" },
        { tr: "Nowa ustawa wchodzi w życie w styczniu.", note: "in Kraft treten" },
        { tr: "Na to stanowisko wchodzi w grę tylko dwóch kandydatów.", note: "in Frage kommen: być możliwym" },
        { tr: "Wyraźnie wyraziła swoje rozczarowanie.", note: "zum Ausdruck bringen, styl oficjalny" },
        { tr: "Proszę mieć wzgląd na sąsiadów.", note: "Rücksicht nehmen auf + biernik" }
      ]
    },
    vocab: [
      "zamierzenie, przedsięwzięcie",
      "środek, działanie (zaradcze)",
      "zezwolenie, pozwolenie",
      "zlecenie",
      "termin, ostateczny termin",
      "wpływ",
      "wchodzić w życie",
      "oddawać do dyspozycji",
      "wchodzić w grę, być branym pod uwagę",
      "podejmować decyzję",
      "mieć wzgląd, liczyć się z",
      "wyrażać"
    ],
    exercises: [
      {
        q: "Przeczytaj ogłoszenie: „Ab dem 1. März tritt die neue Hausordnung in Kraft. Die Verwaltung bittet alle Mieter, Rücksicht auf die Nachbarn zu nehmen.” Co dzieje się 1 marca?",
        opts: [
          "wchodzi w życie nowy regulamin domu",
          "zarząd podejmuje decyzję w sprawie sąsiadów",
          "nowi lokatorzy wprowadzają się do mieszkań"
        ],
        why: "<i>in Kraft treten</i> znaczy „wejść w życie”: od 1 marca obowiązuje nowy regulamin (<i>Hausordnung</i>)."
      },
      {
        q: "Na zebraniu kolega mówi: „Diese Lösung kommt für uns nicht in Frage.” Co ma na myśli?",
        opts: [
          "że rozwiązanie jest wykluczone",
          "że chce zadać pytanie o to rozwiązanie",
          "że rozwiązanie jest nadal dyskutowane"
        ],
        why: "<i>nicht in Frage kommen</i> to stanowcza odmowa: rozwiązanie <b>nie wchodzi w grę</b>. Nie chodzi o zadawanie pytań."
      },
      {
        q: "Uzupełnij: „Wir müssen bis Freitag eine Entscheidung ___.”",
        hint: "czasownik funkcyjny od die Entscheidung",
        why: "<b>treffen</b> (w stylu oficjalnym także <i>fällen</i>): <i>eine Entscheidung treffen</i>, „podjąć decyzję”; nie <i>nehmen</i>."
      },
      {
        q: "Uzupełnij: „Die Firma stellt den Mitarbeitern Laptops zur ___.”",
        hint: "zur ... stellen: oddać do dyspozycji",
        why: "<b>Verfügung</b>: <i>zur Verfügung stellen</i>, stała grupa z <i>zur</i>."
      },
      {
        q: "Uzupełnij: „Sie hat ihre Kritik deutlich zum ___ gebracht.”",
        hint: "zum ... bringen: wyrazić",
        why: "<b>Ausdruck</b>: <i>zum Ausdruck bringen</i>, „wyrazić”, typowe dla stylu oficjalnego."
      },
      {
        q: "Uzupełnij protokół.",
        tr: "Wczoraj rada miasta podjęła ważną decyzję: nowy przepis wchodzi w życie w styczniu. Na jego wdrożenie miasto oddaje do dyspozycji dodatkowe środki.",
        why: "<i>getroffen</i> (Perfekt od <i>treffen</i>), <i>tritt</i> (z <i>in Kraft</i>), <i>stellt</i> (z <i>zur Verfügung</i>): każdy czasownik idzie ze swoim rzeczownikiem."
      },
      {
        q: "Połącz każde wyrażenie z jego znaczeniem.",
        pairs: [
          "wejść w życie",
          "wchodzić w grę",
          "mieć wzgląd",
          "oddać do dyspozycji"
        ]
      },
      {
        q: "Przetłumacz do protokołu: „Kierownictwo oddało do dyspozycji salę na zebranie.” (die Leitung, der Raum, die Besprechung)",
        why: "<i>Die Leitung hat einen Raum für die Besprechung zur Verfügung gestellt</i>: grupa <i>zur Verfügung</i> stoi przed imiesłowem; poprawne jest też Präteritum <i>stellte ... zur Verfügung</i>."
      },
      {
        tr: "Od przyszłego miesiąca w biurze wchodzi w życie nowa regulacja. Firma oddaje wszystkim pracownikom do dyspozycji laptopy; prywatne urządzenia nie wchodzą już w grę.",
        why: "W <i>Regelung</i> akcent pada na <b>Re</b>; w <i>Verfügung</i> akcent pada na <b>fü</b>; w <i>Geräte</i> <b>ä</b> jest długie."
      },
      {
        tr: "Musimy podjąć decyzję jeszcze dziś.",
        why: "W <i>Entscheidung</i> akcent pada na <b>schei</b>, a <b>ei</b> wymawia się [aɪ]; w <i>treffen</i> <b>e</b> jest krótkie."
      }
    ]
  },
  "lesson:c1-u02-l2": {
    theme: "Sprawy urzędowe i ogłoszenia",
    title: "Da się zrobić, jest do załatwienia",
    objectives: [
      "używać sich lassen + bezokolicznik na „da się”",
      "rozumieć sein + zu + bezokolicznik w ogłoszeniach i regulaminach",
      "rozpoznawać i tworzyć przymiotniki na -bar",
      "przekształcać stronę bierną z czasownikiem modalnym"
    ],
    theory: [
      {
        h: "Trzy sposoby na „da się” albo „trzeba”",
        p: "Obok strony biernej z czasownikiem modalnym (<em>Das Problem kann gelöst werden</em>) niemiecki ma formy zwięźlejsze. <strong>sich lassen</strong> + bezokolicznik znaczy „da się”: <em>Das Problem lässt sich leicht lösen.</em> <strong>sein + zu</strong> + bezokolicznik znaczy „da się” albo „trzeba”, a w ogłoszeniach zwykle jest to obowiązek: <em>Der Antrag ist bis Freitag abzugeben.</em> Przymiotniki na <strong>-bar</strong> utworzone od czasownika mówią, że coś da się zrobić: <em>lösbar, machbar, trinkbar</em> (nie wszystkie: <em>dankbar</em> i <em>fruchtbar</em> mają inne znaczenia)."
      },
      {
        h: "zu z czasownikami rozdzielnymi",
        p: "Z czasownikiem rozdzielnym <em>zu</em> stoi między partykułą a czasownikiem i pisze się łącznie: <em>abgeben → abzugeben, einreichen → einzureichen, ausfüllen → auszufüllen</em>. <em>Das Formular ist vollständig auszufüllen.</em>"
      },
      {
        contrast: "Polski ma bardzo podobne środki. <em>Da się</em> + bezokolicznik oddaje <em>sich lassen</em>: <em>Das Problem lässt sich leicht lösen</em> to „problem da się łatwo rozwiązać”. <em>Należy</em> + bezokolicznik albo <em>jest do</em> + rzeczownik oddaje <em>sein + zu</em>: <em>Der Antrag ist bis Freitag abzugeben</em> to „wniosek należy złożyć do piątku”. Przymiotniki na <em>-bar</em> odpowiadają polskim na <em>-alny</em> albo <em>-ywalny</em> (<em>osiągalny, rozwiązywalny</em>) albo oddaje się je opisowo: <em>zdatny do picia</em> (<em>trinkbar</em>), <em>do rozwiązania</em>. Uwaga: <em>sich lassen</em> nie tłumaczy się dosłownie: <em>Das lässt sich machen</em> to „da się to zrobić”, a nie „to się pozwala zrobić”."
      },
      {
        trap: "<em>zu</em> zmienia wszystko: <em>Die Rechnung ist zu bezahlen</em> wyraża obowiązek, „rachunek należy zapłacić”; <em>Die Rechnung ist bezahlt</em> opisuje stan wynikowy, „rachunek jest zapłacony”; Perfekt strony biernej czynności to <em>Die Rechnung ist bezahlt worden</em>, „rachunek został zapłacony”."
      },
      {
        tip: "Żeby zrozumieć <em>sein + zu</em> w regulaminie, spróbuj podstawić <em>muss ... werden</em>: <em>ist abzugeben</em> = <em>muss abgegeben werden</em>. Jeśli sens się zgadza, to obowiązek."
      }
    ],
    grammar: {
      title: "Zamienniki strony biernej o znaczeniu modalnym",
      note: "<b>sich lassen</b> + bezokolicznik: da się. <b>sein + zu</b> + bezokolicznik: da się albo trzeba (w ogłoszeniach zwykle trzeba). <b>-bar</b>: który da się. Z czasownikami rozdzielnymi: <i>abzugeben</i>.",
      table: {
        head: ["forma", "odpowiada", "przykład"],
        rows: [
          ["sich lassen + bezokolicznik", "kann ... werden", "Das Problem lässt sich lösen."],
          ["sein + zu + bezokolicznik", "muss / kann ... werden", "Der Antrag ist abzugeben."],
          ["przymiotnik na -bar", "kann ... werden", "Das Problem ist lösbar."],
          ["man + strona czynna", "konstrukcja bezosobowa", "Das macht man so."]
        ]
      },
      examples: [
        { tr: "Problem da się łatwo rozwiązać.", note: "sich lassen + bezokolicznik" },
        { tr: "Wniosek należy złożyć do piątku.", note: "sein + zu: obowiązek" },
        { tr: "Rachunek należy zapłacić w ciągu 14 dni.", note: "sein + zu w ogłoszeniach" },
        { tr: "To zadanie jest prawie nie do rozwiązania.", note: "-bar: „da się” zamknięte w przymiotniku" },
        { tr: "Woda nie nadaje się do picia.", note: "trinkbar" },
        { tr: "Tu nie wolno palić.", note: "strona bierna z czasownikiem modalnym, dla porównania" }
      ]
    },
    vocab: [
      "przepis, regulamin",
      "opłata, należność",
      "zaświadczenie",
      "dowód, potwierdzenie",
      "rachunek, faktura",
      "dokument; w liczbie mnogiej: dokumenty, dokumentacja",
      "załatwiać, zająć się",
      "składać (wniosek)",
      "wypełniać",
      "możliwy do rozwiązania",
      "wykonalny",
      "dopuszczalny"
    ],
    exercises: [
      {
        q: "Przeczytaj ogłoszenie: „Die Unterlagen sind bis zum 15. Mai beim Amt einzureichen.” Co to znaczy?",
        opts: [
          "dokumenty należy złożyć w urzędzie do 15 maja",
          "dokumenty można złożyć po 15 maja",
          "urząd wyśle dokumenty do 15 maja"
        ],
        why: "<i>sind ... einzureichen</i> to <i>sein + zu</i>: w ogłoszeniu wyraża <b>obowiązek</b>, „należy złożyć”."
      },
      {
        q: "Klient prosi o przyspieszenie dostawy. Odpowiadasz: „Das lässt sich machen.” Co mu mówisz?",
        opts: [
          "że da się to zrobić",
          "że tego nie zrobisz",
          "że ktoś ci pozwala to zrobić"
        ],
        why: "<i>Das lässt sich machen</i> = <i>Das kann gemacht werden</i>: zgadzasz się, „da się to zrobić”."
      },
      {
        q: "Które zdanie ma to samo znaczenie co „Das Problem kann leicht gelöst werden”?",
        opts: [
          "Das Problem lässt sich leicht lösen.",
          "Das Problem lässt leicht lösen.",
          "Das Problem ist leicht gelöst worden."
        ],
        why: "<b>sich lassen</b> + bezokolicznik odpowiada <i>kann ... werden</i>; bez <i>sich</i> zdanie nie działa, a trzecie to Perfekt strony biernej o innym znaczeniu."
      },
      {
        q: "Uzupełnij ogłoszenie: „Die Rechnung ist innerhalb von 14 Tagen zu ___.”",
        hint: "zapłacić",
        why: "<b>bezahlen</b> (albo <i>zahlen</i>): <i>ist zu bezahlen</i>, „należy zapłacić”."
      },
      {
        q: "W raporcie: „Die Folgen der Entscheidung sind noch nicht ___.”",
        hint: "od vorhersehen, przymiotnik na -bar",
        why: "<b>vorhersehbar</b> (albo <i>absehbar</i>): „przewidywalny”; przyrostek <i>-bar</i> mówi, że coś da się zrobić."
      },
      {
        q: "Uzupełnij ogłoszenie dla mieszkańców (w trzeciej luce przymiotnik na -bar od beheben).",
        tr: "Drodzy mieszkańcy, ogrzewanie niestety da się naprawić dopiero w przyszłym tygodniu. Do tego czasu okna należy trzymać zamknięte. Awaria jest jednak do usunięcia: technik przyjdzie w poniedziałek.",
        why: "<i>lässt sich ... reparieren</i> („da się”), <i>sind ... zu halten</i> („należy trzymać”), <i>behebbar</i> („do usunięcia”): awarię się usuwa (<i>beheben</i>), a naprawia się przedmiot (<i>Die Heizung ist reparierbar</i>)."
      },
      {
        q: "Ułóż wyrazy we właściwej kolejności.",
        tr: "Wniosek należy złożyć w urzędzie do piątku.",
        why: "<i>Der Antrag ist bis Freitag beim Amt abzugeben.</i> <i>abzugeben</i> zamyka zdanie; <i>bis Freitag</i> i <i>beim Amt</i> mogą zamienić się miejscami."
      },
      {
        q: "Przetłumacz: „Tego problemu nie da się rozwiązać w jeden dzień.”",
        why: "<i>Dieses Problem lässt sich nicht an einem Tag lösen</i>; poprawne są też <i>ist nicht ... zu lösen</i>, <i>kann nicht ... gelöst werden</i> i <i>kann man nicht ... lösen</i>."
      },
      {
        tr: "Szanowni Państwo, formularz należy wypełnić w całości i złożyć do końca miesiąca. Brakujące dokumenty można uzupełnić także później.",
        why: "W <i>vollständig</i> <b>v</b> wymawia się [f]; w <i>auszufüllen</i> akcent pada na <b>aus</b>; w <i>nachreichen</i> akcent pada na <b>nach</b>."
      },
      {
        tr: "To na pewno da się załatwić do jutra.",
        why: "W <i>lässt</i> <b>ä</b> jest krótkie; w <i>bestimmt</i> akcent pada na <b>stimmt</b>; w <i>erledigen</i> akcent pada na <b>le</b>."
      }
    ]
  },
  "lesson:c1-u02-l3": {
    theme: "Ruch drogowy i idiomy",
    title: "umfahren albo umfahren? Idiomy",
    objectives: [
      "odróżniać przedrostki rozdzielne od nierozdzielnych przy tym samym czasowniku",
      "rozumieć komunikat drogowy",
      "rozpoznawać i używać kilku częstych idiomów",
      "rozumieć, kiedy idiomu nie tłumaczy się dosłownie"
    ],
    theory: [
      {
        h: "Ten sam czasownik, dwa czasowniki",
        p: "Z <strong>durch-, über-, um-, unter-, wieder-</strong> ten sam czasownik może być rozdzielny albo nierozdzielny, z różnym znaczeniem. <em>Er hat das Schild <strong>umgefahren</strong></em>: przewrócił je samochodem (rozdzielny, akcent na <em>um</em>). <em>Wir haben den Stau <strong>umfahren</strong></em>: ominęliśmy korek (nierozdzielny, akcent na <em>fah</em>). W formach odmienionych rozdzielny się oddziela (<em>Die Fähre setzt uns über</em>), nierozdzielny nie (<em>Sie übersetzt den Text</em>)."
      },
      {
        h: "Idiomy",
        p: "Idiomy (<em>Redewendungen</em>) mają sens przenośny, którego nie da się wyprowadzić ze słów: <em>Das geht mir gegen den Strich</em> (to mi nie odpowiada), <em>den Nagel auf den Kopf treffen</em> (trafić w sedno), <em>jemandem auf die Nerven gehen</em> (działać komuś na nerwy), <em>etwas auf die lange Bank schieben</em> (odkładać coś na później). Używa się ich głównie w mowie i w tekstach prasowych; w tekście bardzo oficjalnym woli się wyrażenie bezpośrednie."
      },
      {
        contrast: "Po polsku wszystkie przedrostki są nierozdzielne: <em>objechać, najechać, przejechać</em> zawsze zostają w jednym kawałku, a różnicę znaczeń niosą przedrostek i aspekt (<em>objechać korek, najechać na znak</em>). Rozdzielność jest więc dla Polaka nowa: o tym, czy <em>umfahren</em> znaczy „ominąć”, czy „przewrócić”, decyduje w niemieckim akcent i to, czy przedrostek się oddziela. Z idiomami bywa różnie: część ma polskie odpowiedniki (<em>działać na nerwy</em> = <em>auf die Nerven gehen</em>, <em>trafić w sedno</em> = <em>den Nagel auf den Kopf treffen</em>), ale obraz jest inny: dosłownie to „trafić gwóźdź w głowę”, a <em>auf die lange Bank schieben</em> to „odsuwać na długą ławę”. Tłumaczenie słowo w słowo daje zdania niezrozumiałe."
      },
      {
        trap: "W tej parze to imiesłów odróżnia dwa czasowniki: <em>umgefahren</em> (przewrócony) albo <em>umfahren</em> (ominięty). Ogólnie liczą się też akcent i oddzielanie w formach odmienionych, bo niektóre czasowniki rozdzielne nie dostają <em>ge-</em> (<em>anprobiert</em>). Zdanie <em>Wir haben den Stau umgefahren</em> znaczy, że przewróciliście korek, a nie że go ominęliście."
      },
      {
        tip: "Gdy spotkasz nowy idiom, zapisz go w całym zdaniu i z sytuacją: <em>Er schiebt die Steuererklärung auf die lange Bank.</em> Sam się zapomina, w scenie zostaje."
      }
    ],
    grammar: {
      title: "Przedrostki rozdzielne albo nierozdzielne i idiomy",
      note: "<b>Rozdzielny</b>: akcent na przedrostku, przedrostek oddzielony, imiesłów z <i>-ge-</i>, jeśli czasownik podstawowy go ma (<i>umgefahren</i>). <b>Nierozdzielny</b>: akcent na sylabie po przedrostku (<i>wiederholen</i> z akcentem na <i>ho</i>), przedrostek przy czasowniku, imiesłów bez <i>ge-</i> (<i>umfahren</i>).",
      table: {
        head: ["rozdzielny", "znaczenie", "nierozdzielny", "znaczenie"],
        rows: [
          ["Er hat das Schild umgefahren.", "przewrócić samochodem", "Wir haben den Stau umfahren.", "ominąć"],
          ["Die Fähre setzt uns über.", "przewieźć na drugi brzeg", "Sie hat den Text übersetzt.", "przetłumaczyć"],
          ["Wir sind durchgefahren.", "jechać bez zatrzymywania się", "Wir haben die Schweiz durchfahren.", "przejechać przez"]
        ]
      },
      examples: [
        { tr: "Przewrócił samochodem znak drogowy.", note: "rozdzielny: umgefahren" },
        { tr: "Ominęliśmy korek.", note: "nierozdzielny: umfahren" },
        { tr: "Przetłumaczyła list na angielski.", note: "nierozdzielny: übersetzt" },
        { tr: "Prom przewozi nas na drugi brzeg.", note: "rozdzielny: setzt ... über" },
        { tr: "To mi się zupełnie nie podoba.", note: "idiom: gegen den Strich gehen, niezadowolenie" },
        { tr: "Trafiłeś w sedno.", note: "idiom: den Nagel auf den Kopf treffen" }
      ]
    },
    vocab: [
      "idiom",
      "przysłowie",
      "okrężna droga, nadłożenie drogi",
      "brzeg",
      "objazd (drogowy)",
      "korek, zator",
      "omijać (nierozdzielny); przewracać samochodem (rozdzielny)",
      "tłumaczyć (nierozdzielny); przewozić na drugi brzeg (rozdzielny)",
      "jechać bez zatrzymywania się (rozdzielny); przejeżdżać przez (nierozdzielny)",
      "rozmawiać, gawędzić",
      "powtarzać",
      "mit + celownik: umieć się obchodzić (rozdzielny); etwas umgehen: omijać, obchodzić (nierozdzielny)"
    ],
    exercises: [
      {
        q: "Komunikat drogowy: „Wegen eines Unfalls ist die A8 gesperrt. Autofahrer sollten den Bereich weiträumig umfahren.” Co się zaleca?",
        opts: [
          "ominąć ten odcinek szerokim łukiem",
          "przejechać przez ten odcinek powoli",
          "przewracać przeszkody na drodze"
        ],
        why: "Tu <i>umfahren</i> jest nierozdzielne (akcent na <i>fah</i>): „ominąć”. <i>weiträumig</i> znaczy „szerokim łukiem”."
      },
      {
        q: "Uzupełnij: „Der Fahrer hat das Schild ___.” (przewrócił je samochodem)",
        opts: [
          "umgefahren",
          "umfahren",
          "umgefährt"
        ],
        why: "W znaczeniu „przewrócić” <i>umfahren</i> jest rozdzielne, więc imiesłów ma <i>-ge-</i>: <b>umgefahren</b>."
      },
      {
        q: "Na zebraniu koleżanka mówi do ciebie: „Da hast du den Nagel auf den Kopf getroffen.” Co ma na myśli?",
        opts: [
          "że trafiłeś w sedno",
          "że popełniłeś poważny błąd",
          "że wypowiedziałeś się zbyt bezpośrednio"
        ],
        why: "<i>den Nagel auf den Kopf treffen</i> = „trafić w sedno”: to komplement."
      },
      {
        q: "Uzupełnij: „Die Fähre ___ uns ans andere Ufer über.”",
        hint: "übersetzen rozdzielne, trzecia osoba liczby pojedynczej",
        why: "<b>setzt</b>: w znaczeniu „przewozić na drugi brzeg” <i>übersetzen</i> jest rozdzielne, a <i>über</i> idzie na koniec."
      },
      {
        q: "Uzupełnij opowiadanie.",
        tr: "Centrum było zamknięte dla ruchu z powodu budowy, więc musieliśmy je objechać. Potem jechaliśmy całą noc bez zatrzymywania się i dotarliśmy dopiero rano.",
        why: "<i>umfahren</i> (nierozdzielne, bezokolicznik po <i>mussten</i>) i <i>durchgefahren</i> (rozdzielne, imiesłów z <i>-ge-</i>)."
      },
      {
        q: "Połącz każdy idiom z jego znaczeniem.",
        pairs: [
          "wadzić, nie odpowiadać komuś",
          "trafić w sedno",
          "działać na nerwy",
          "odkładać na później"
        ]
      },
      {
        q: "W których zdaniach przedrostek jest nierozdzielny?",
        opts: [
          "Wir haben den Stau umfahren.",
          "Sie hat den Text übersetzt.",
          "Er hat das Schild umgefahren.",
          "Die Fähre setzt uns über."
        ],
        why: "Pierwsze dwa: imiesłów bez <i>ge-</i> (<i>umfahren, übersetzt</i>). W trzecim imiesłów ma <i>-ge-</i>, w czwartym przedrostek się oddziela: to czasowniki rozdzielne."
      },
      {
        q: "Przetłumacz: „Tego idiomu nie da się przetłumaczyć dosłownie.” (die Redewendung, wörtlich)",
        why: "<i>Diese Redewendung lässt sich nicht wörtlich übersetzen</i>; poprawne są też <i>ist nicht wörtlich zu übersetzen</i>, <i>kann man nicht ...</i>, <i>kann nicht ... übersetzt werden</i> i <i>Wort für Wort</i>."
      },
      {
        tr: "Z powodu wypadku na A8 jest objazd. Najlepiej ominąć ten odcinek drogą krajową; licz się z wydłużeniem podróży o dwadzieścia minut.",
        why: "W <i>umfahren</i> akcent pada tu na <b>fah</b>; w <i>Umleitung</i> akcent pada na <b>Um</b>; w <i>Bundesstraße</i> <b>ß</b> wymawia się [s]."
      },
      {
        tr: "Tego idiomu prawie nie da się przetłumaczyć.",
        why: "W <i>Redewendung</i> akcent pada na <b>Re</b>; w <i>kaum</i> <b>au</b> wymawia się [aʊ]; w <i>übersetzen</i> akcent pada na <b>set</b>."
      }
    ]
  },
  "lesson:c1-u02-test": {
    theme: "Sprawdzian",
    title: "Test: Doprowadzić coś do skutku",
    objectives: [
      "sprawdzić czasowniki funkcyjne, zamienniki strony biernej oraz przedrostki rozdzielne i nierozdzielne"
    ],
    theory: [
      {
        p: "Dziesięć pytań z całej jednostki. Zaliczasz przy 70%. Nie zaglądaj do lekcji w trakcie odpowiadania: jeśli czegoś nie pamiętasz, lepiej wrócić i powtórzyć."
      }
    ],
    exercises: [
      {
        q: "Uzupełnij: „Wann ___ das neue Gesetz in Kraft?”",
        hint: "treten, trzecia osoba liczby pojedynczej",
        why: "<b>tritt</b>: <i>in Kraft treten</i>, ze zmianą samogłoski w czasie teraźniejszym."
      },
      {
        q: "Uzupełnij: „Das Problem ___ sich leicht lösen.” (problem da się łatwo rozwiązać)",
        hint: "czasownik, trzecia osoba liczby pojedynczej",
        why: "<b>lässt</b>: <i>lässt sich lösen</i> = <i>kann gelöst werden</i>."
      },
      {
        q: "Uzupełnij ogłoszenie: „Der Bericht ist bis Montag ___.”",
        hint: "raport należy oddać do poniedziałku (abgeben)",
        why: "<b>abzugeben</b>: <i>sein + zu</i>, z <i>zu</i> między partykułą a czasownikiem."
      },
      {
        q: "Uzupełnij: „Wir haben die Baustelle ___.” (ominęliśmy ją)",
        hint: "umfahren nierozdzielne, imiesłów",
        why: "<b>umfahren</b>: w znaczeniu „ominąć” czasownik jest nierozdzielny, a imiesłów nie ma <i>ge-</i>."
      },
      {
        q: "Przeczytaj ogłoszenie: „Für die Stelle kommen nur Bewerber mit Erfahrung in Frage.” Kto może zostać wybrany?",
        opts: [
          "tylko kandydaci z doświadczeniem",
          "wszyscy kandydaci, którzy zadają pytania",
          "na razie nikt"
        ],
        why: "<i>in Frage kommen</i> = „wchodzić w grę”: pod uwagę bierze się <b>tylko osoby z doświadczeniem</b>."
      },
      {
        q: "W regulaminie uczelni: które zdanie wyraża obowiązek, a nie tylko możliwość?",
        opts: [
          "Die Hausarbeit ist bis zum 30. Juni abzugeben.",
          "Die Hausarbeit lässt sich bis zum 30. Juni abgeben.",
          "Die Hausarbeit kann bis zum 30. Juni abgegeben werden."
        ],
        why: "W regulaminie <b>sein + zu</b> zwykle wyraża obowiązek („należy oddać”). Pozostałe dwa są poprawne, ale mówią tylko, że oddanie pracy jest możliwe."
      },
      {
        q: "Koleżanka mówi o piątkowym wieczornym zebraniu: „Das geht mir gegen den Strich.” Jak się czuje?",
        opts: [
          "jest zirytowana",
          "jest zadowolona",
          "jest zmęczona"
        ],
        why: "<i>gegen den Strich gehen</i> = „przeszkadzać, być nieprzyjemnym”."
      },
      {
        q: "Połącz każde wyrażenie z jego znaczeniem.",
        pairs: [
          "oddać do dyspozycji",
          "podjąć decyzję",
          "wchodzić w grę",
          "wyrazić"
        ]
      },
      {
        tr: "Od stycznia obowiązuje nowy przepis: wszystkie wnioski należy składać online. W tym celu miasto oddaje do dyspozycji komputery w każdej bibliotece.",
        why: "W <i>Vorschrift</i> akcent pada na <b>Vor</b>; w <i>einzureichen</i> akcent pada na <b>ein</b>; w <i>Bibliothek</i> akcent pada na <b>thek</b>."
      },
      {
        tr: "Dokumenty należy złożyć do końca miesiąca.",
        why: "W <i>Monats</i> <b>o</b> jest długie; w <i>einzureichen</i> <b>ei</b> wymawia się [aɪ]."
      }
    ]
  },
  "unit:c1-u03": {
    title: "Rejestry i spójność tekstu",
    grammarNote: "Styl nominalny i język urzędowy (Amtsdeutsch) · partykuły i elipsy w mowie · korelaty (darauf, dass; es, dass) i spójniki budujące spójny tekst · powtórka jednostek 1-3"
  },
  "lesson:c1-u03-l1": {
    theme: "Urzędy i ogłoszenia publiczne",
    title: "Niemiecki urzędowy",
    objectives: [
      "rozumieć ogłoszenie w Amtsdeutsch",
      "przekształcać styl nominalny w werbalny i odwrotnie",
      "rozpoznawać typowe czasowniki urzędowe (erfolgen, erheben, gewähren)",
      "dobierać rejestr do adresata"
    ],
    theory: [
      {
        h: "Czym jest Amtsdeutsch",
        p: "Język urzędów chętnie używa <strong>stylu nominalnego</strong>: czasowniki zamienione w rzeczowniki (<em>die Antragstellung, die Nichtbeachtung, das Betreten</em>), zdania podrzędne zastąpione grupami z przyimkiem (<em>nach Abschluss, bei Nichtbeachtung, zur Vermeidung</em>), mało wyraziste czasowniki jak <em>erfolgen</em> (następować), <em>erheben</em> (pobierać), <em>gewähren</em> (udzielać, przyznawać). <em>Die Antragstellung erfolgt online</em> znaczy po prostu „wniosek składa się online”."
      },
      {
        h: "Od stylu nominalnego do werbalnego",
        p: "Żeby zrozumieć ogłoszenie, zamień grupę rzeczownikową na zdanie podrzędne: <em>Nach Abschluss der Arbeiten</em> → <em>Nachdem die Arbeiten abgeschlossen sind</em>; <em>Bei Nichtbeachtung</em> → <em>Wenn man das nicht beachtet</em>; <em>Zur Vermeidung von Wartezeiten</em> → <em>Um Wartezeiten zu vermeiden</em>. Dopełniacz grupy rzeczownikowej (<em>der Arbeiten</em>) wraca jako podmiot albo dopełnienie zdania podrzędnego."
      },
      {
        contrast: "Polski język urzędowy też nominalizuje (<em>po zakończeniu prac</em>, <em>w razie nieprzestrzegania przepisów</em>, <em>w celu uniknięcia kolejek</em>), a dopełnienie czasownika przechodzi w dopełniacz tak samo jak w niemieckim (<em>przestrzegać zasad</em> → <em>przestrzeganie zasad</em>, <em>die Beachtung der Regeln</em>), więc struktura jest znajoma. Polski ma nawet odpowiednik <em>erfolgen</em>: <em>następuje</em> (<em>płatność następuje przelewem</em>). Różnica: w ogłoszeniach niemiecki łączy styl nominalny z <em>sein + zu</em> (<em>ist ein Helm aufzusetzen</em>), gdzie po polsku mówi się <em>należy założyć kask</em> albo <em>obowiązuje nakaz noszenia kasku</em>."
      },
      {
        trap: "Styl nominalny pasuje do ogłoszeń i listów urzędowych, nie do wiadomości do przyjaciół: <em>Nach Abschluss der Arbeiten erfolgt unser Treffen</em> w prywatnej wiadomości brzmi śmiesznie, tak samo jak polskie „po zakończeniu prac nastąpi nasze spotkanie”. Tam pisze się <em>Wir sehen uns, sobald die Arbeiten fertig sind</em>."
      },
      {
        tip: "Gdy widzisz rzeczownik na <em>-ung</em> albo bezokolicznik użyty jako rzeczownik (<em>das Betreten</em>), zapytaj, jaki czasownik za nim stoi (<em>betreten</em>) i kto wykonuje czynność: często jest to „ktokolwiek”, czyli <em>man</em>."
      }
    ],
    grammar: {
      title: "Styl nominalny i werbalny",
      note: "<b>Nominalny</b>: przyimek + rzeczownik, często z dopełniaczem zależnym od rzeczownika (<i>nach Abschluss der Arbeiten</i>). <b>Werbalny</b>: konstrukcja z czasownikiem, czyli zdanie podrzędne (<i>nachdem die Arbeiten abgeschlossen sind</i>) albo bezokolicznik z <i>zu</i> (<i>um Wartezeiten zu vermeiden</i>). Typowe czasowniki: <i>erfolgen, erheben, gewähren</i>.",
      table: {
        head: ["styl nominalny", "styl werbalny"],
        rows: [
          ["Nach Abschluss der Arbeiten ...", "Nachdem die Arbeiten abgeschlossen sind, ..."],
          ["Bei Nichtbeachtung ...", "Wenn man das nicht beachtet, ..."],
          ["Zur Vermeidung von Wartezeiten ...", "Um Wartezeiten zu vermeiden, ..."],
          ["Vor Betreten der Baustelle ...", "Bevor man die Baustelle betritt, ..."],
          ["Die Antragstellung erfolgt online.", "Man stellt den Antrag online."]
        ]
      },
      examples: [
        { tr: "Po zakończeniu prac droga zostanie ponownie otwarta.", note: "nach rządzi celownikiem (Abschluss); der Arbeiten to dopełniacz zależny od Abschluss" },
        { tr: "W razie nieprzestrzegania nakładana jest grzywna.", note: "bei Nichtbeachtung = wenn man die Vorschriften nicht beachtet" },
        { tr: "Aby uniknąć czekania, prosimy o umówienie terminu.", note: "zur Vermeidung = um ... zu vermeiden" },
        { tr: "Z powodu silnego deszczu koncert został odwołany.", note: "wegen + dopełniacz zamiast weil" },
        { tr: "Wniosek składa się online.", note: "erfolgen: następować, typowe dla urzędów" },
        { tr: "Przed wejściem na plac budowy obowiązkowo należy założyć kask.", note: "vor Betreten + sein zu" }
      ]
    },
    vocab: [
      "decyzja, pismo urzędowe",
      "grzywna, kara pieniężna",
      "urząd, organ władzy",
      "właściwość (urzędu)",
      "rozporządzenie",
      "nieprzestrzeganie",
      "następować, mieć miejsce",
      "pobierać (opłatę); nakładać (grzywnę)",
      "udzielać, przyznawać",
      "składać wniosek o",
      "właściwy",
      "zgodnie z"
    ],
    exercises: [
      {
        q: "Przeczytaj: „Bei Nichtbeachtung der Parkregeln wird ein Bußgeld erhoben.” Jak wyjaśniłbyś to przyjacielowi?",
        opts: [
          "Wenn man sich nicht an die Parkregeln hält, muss man eine Strafe zahlen.",
          "Wer die Parkregeln nicht kennt, bekommt Geld zurück.",
          "Die Stadt beachtet die Parkregeln nicht."
        ],
        why: "<i>bei Nichtbeachtung</i> = „jeśli się nie przestrzega”; <i>ein Bußgeld erheben</i> = „nałożyć grzywnę”. Pierwsze zdanie mówi to samo w stylu werbalnym."
      },
      {
        q: "Który zwrot rzeczownikowy odpowiada zdaniu „Weil es stark regnete, ...”?",
        opts: [
          "Wegen des starken Regens ...",
          "Trotz des starken Regens ...",
          "Während des starken Regens ..."
        ],
        why: "<i>weil</i> wyraża przyczynę: <b>wegen</b> + dopełniacz. <i>trotz</i> jest przyzwalające, <i>während</i> czasowe."
      },
      {
        q: "Piszesz do przyjaciółki o remoncie w domu. Które zdanie pasuje do rejestru?",
        opts: [
          "Wir sehen uns, sobald die Arbeiten fertig sind.",
          "Nach Abschluss der Arbeiten erfolgt unser Wiedersehen.",
          "Bei Fertigstellung der Arbeiten wird ein Treffen durchgeführt."
        ],
        why: "Między przyjaciółmi używa się stylu werbalnego. Pozostałe dwa są poprawne, ale to Amtsdeutsch, nie na miejscu w prywatnej wiadomości."
      },
      {
        q: "Uzupełnij ogłoszenie: „Die Antragstellung ___ ausschließlich online.”",
        hint: "czasownik urzędowy: „następuje”",
        why: "<b>erfolgt</b>: <i>erfolgen</i> to typowy czasownik urzędów dla „następować, mieć miejsce”."
      },
      {
        q: "Uzupełnij ogłoszenie urzędu miasta.",
        tr: "Szanowni Mieszkańcy, po zakończeniu prac droga zostanie ponownie otwarta. Aby uniknąć czekania, prosimy o umówienie terminu.",
        why: "<i>Nach Abschluss der Bauarbeiten</i>: <i>nach</i> + celownik, a dopełniacz <i>der Bauarbeiten</i> zależy od <i>Abschluss</i>. <i>Zur Vermeidung von Wartezeiten</i>: <i>zu</i> + celownik, z <i>von</i> + celownik zamiast dopełniacza. Obie konstrukcje zastępują zdanie podrzędne."
      },
      {
        q: "Połącz każde słowo z jego znaczeniem.",
        pairs: [
          "decyzja, pismo urzędowe",
          "urząd, organ władzy",
          "grzywna",
          "rozporządzenie"
        ]
      },
      {
        q: "Ułóż wyrazy z tablicy we właściwej kolejności.",
        tr: "Przed wejściem na plac budowy należy założyć kask.",
        why: "<i>Vor Betreten der Baustelle ist ein Helm aufzusetzen.</i> Grupa rzeczownikowa na pierwszym miejscu, potem <i>ist</i>, a <i>aufzusetzen</i> na końcu."
      },
      {
        q: "Przekształć w styl werbalny, ze zdaniem podrzędnym: „Nach Abschluss der Arbeiten wird die Straße freigegeben.”",
        why: "<i>Nachdem die Arbeiten abgeschlossen sind, wird die Straße freigegeben</i>: dopełniacz <i>der Arbeiten</i> wraca jako podmiot; poprawne są też <i>sobald</i> albo <i>wenn</i> oraz <i>abgeschlossen worden sind</i>."
      },
      {
        tr: "Szanowni Państwo, zgodnie z nowym rozporządzeniem od maja wnioski składa się wyłącznie online. W razie pytań prosimy zwrócić się do właściwego urzędu.",
        why: "W <i>Verordnung</i> akcent pada na <b>ord</b>."
      },
      {
        tr: "Płatność następuje przelewem.",
        why: "W <i>Zahlung</i> <b>a</b> jest długie, a <b>h</b> nieme; w <i>erfolgt</i> akcent pada na <b>folgt</b>; w <i>Überweisung</i> akcent pada na <b>wei</b>."
      }
    ]
  },
  "lesson:c1-u03-l2": {
    theme: "Swobodna rozmowa",
    title: "Jak się naprawdę mówi",
    objectives: [
      "rozumieć partykuły modalne w mowie (doch, ja, mal, halt, eben)",
      "rozpoznawać typowe elipsy mowy (Weiß ich nicht, Passt schon)",
      "odpowiadać naturalnie w nieformalnej rozmowie",
      "odróżniać mowę od oficjalnego pisma"
    ],
    theory: [
      {
        h: "Partykuły zmieniają ton",
        p: "W mowie partykuły modalne mówią, co myśli mówiący. <strong>doch</strong> zachęca albo przypomina (<em>Komm doch mit!</em>), <strong>ja</strong> przedstawia coś jako znane albo zaskakujące (<em>Das hast du ja schon gesagt. Das ist ja toll!</em>), <strong>mal</strong> łagodzi prośbę (<em>Hast du mal kurz Zeit?</em>), <strong>halt</strong> i <strong>eben</strong> wyrażają rezygnację (<em>Das ist halt so</em>). Bez partykuły zdanie pozostaje poprawne, ale traci ten odcień: prośba może zabrzmieć ostrzej, okrzyk traci zaskoczenie albo odwołanie do tego, co obaj wiedzą."
      },
      {
        h: "Elipsy i formuły",
        p: "Mowa pomija to, co wynika z kontekstu, często podmiot albo początkowe <em>das</em>: <em>Weiß ich nicht</em> (= <em>Das weiß ich nicht</em>), <em>Kann sein</em>, <em>Passt schon</em>, <em>Mal sehen</em>. Wśród przyjaciół i kolegów to normalne; w liście albo na egzaminie pisemnym używa się pełnych zdań."
      },
      {
        contrast: "Polski oddaje te odcienie partykułami i końcówkami: <em>no, przecież, ależ, -że</em> (<em>chodźże</em>), <em>no cóż</em>. <em>Komm doch mit!</em> to „no chodź z nami!”, <em>Das hast du ja schon gesagt</em> to „przecież już to mówiłeś”, <em>Das ist ja toll</em> to „ależ to świetne!”, <em>Das ist halt so</em> to „no cóż, tak już jest”. Elipsy są po polsku równie częste: <em>Nie wiem</em> (<em>Weiß ich nicht</em>), <em>Zobaczymy</em> (<em>Mal sehen</em>), <em>W porządku</em> albo <em>Tak może być</em> (<em>Passt schon</em>, zależnie od kontekstu). Odpowiednika słowo w słowo nie ma: uczy się funkcji."
      },
      {
        trap: "Partykuły nie stoją na pierwszym miejscu w tej funkcji: <em>Komm doch mit</em>, nie <em>Doch komm mit</em>. A <em>doch</em> jako odpowiedź na pytanie przeczące (<em>Kommst du nicht? – Doch!</em>) to coś innego: znaczy „ależ tak”, a nie „ale”. Także <em>ja</em> jako partykuła nie znaczy „tak”: <em>Das ist ja toll</em> to „ależ to świetne”."
      },
      {
        tip: "Podczas słuchania zwracaj uwagę, gdzie padają partykuły: zwykle zaraz po czasowniku i zaimkach, przed nową informacją. <em>Ich bin eigentlich ziemlich müde.</em>"
      }
    ],
    grammar: {
      title: "Partykuły i elipsy mowy",
      note: "<b>doch</b>: zachęca, przypomina. <b>ja</b>: rzecz znana, zaskoczenie. <b>mal</b>: łagodzi. <b>halt / eben</b>: rezygnacja. Elipsy: <i>Weiß ich nicht, Kann sein, Passt schon</i>.",
      table: {
        head: ["partykuła lub forma", "efekt", "przykład"],
        rows: [
          ["doch", "zachęca, przypomina", "Komm doch mit!"],
          ["ja", "rzecz znana, zaskoczenie", "Das ist ja unglaublich!"],
          ["mal", "łagodzi prośbę", "Hast du mal kurz Zeit?"],
          ["halt, eben", "rezygnacja", "Das ist halt so."],
          ["elipsa", "pomija się to, co jasne", "Weiß ich nicht. Passt schon."]
        ]
      },
      examples: [
        { tr: "No chodź z nami!", note: "doch + einfach: zaproszenie" },
        { tr: "Ależ to niewiarygodne!", note: "ja: zaskoczenie" },
        { tr: "Masz chwilkę?", note: "mal: grzeczniejsza prośba" },
        { tr: "Hm, możliwe.", note: "elipsa: Kann sein" },
        { tr: "Nie wiem.", note: "elipsa: brak das" },
        { tr: "W porządku (albo: nic nie szkodzi).", note: "formuła mowy" }
      ]
    },
    vocab: [
      "wymówka",
      "aluzja",
      "ton (głosu)",
      "frazes, zwrot grzecznościowy",
      "nieporozumienie",
      "język mówiony, rejestr potoczny",
      "gadać (potocznie)",
      "umawiać się",
      "dopytywać, dopytać się",
      "właściwie, tak naprawdę",
      "i tak, w każdym razie",
      "no cóż, tak już jest (przedstawia coś jako nieuniknione)"
    ],
    exercises: [
      {
        q: "W barze przyjaciel mówi: „Komm doch mit!” Co dodaje doch?",
        opts: [
          "zachęcające zaproszenie",
          "wyrzut",
          "wątpliwość"
        ],
        why: "W prośbie albo zaproszeniu <b>doch</b> zachęca: „no chodź z nami”."
      },
      {
        q: "Kolega mówi: „Das hast du ja schon gestern gesagt.” Co sygnalizuje ja?",
        opts: [
          "że obaj już to wiedzą",
          "że w to nie wierzy",
          "że zadaje pytanie"
        ],
        why: "Tu <b>ja</b> przedstawia informację jako znaną: „przecież już wczoraj to mówiłeś, wiemy”."
      },
      {
        q: "Przyjaciółka pyta: „Kommst du heute Abend?” Która odpowiedź jest najbardziej naturalna w mowie?",
        opts: [
          "Weiß ich noch nicht.",
          "Das Wissen darüber besitze ich noch nicht.",
          "Eine Entscheidung darüber ist noch nicht erfolgt."
        ],
        why: "W mowie pomija się <i>das</i>: <b>Weiß ich noch nicht</b>. Pozostałe dwie to styl urzędowy, nie na miejscu między przyjaciółmi."
      },
      {
        q: "Uzupełnij: „Hast du ___ kurz Zeit?”",
        hint: "partykuła, która łagodzi prośbę",
        why: "<b>mal</b>: łagodzi prośbę, jak „chwilkę”."
      },
      {
        q: "Uzupełnij: „Das ist ___ so, da kann man nichts machen.”",
        hint: "partykuła rezygnacji",
        why: "<b>halt</b> (albo <i>eben</i>): „tak już jest, nic nie poradzisz”."
      },
      {
        q: "Uzupełnij dialog słowami eigentlich, doch i echt.",
        tr: "„Idziesz dziś do kina?” „Nie wiem, właściwie jestem dość zmęczony.” „No chodź, film jest naprawdę świetny!”",
        why: "<i>eigentlich</i> („właściwie”), <i>doch</i> (zachęca), <i>echt</i> albo <i>wirklich</i> („naprawdę”): trzy słowa typowe dla mowy."
      },
      {
        q: "Które zdania są typowe dla nieformalnej mowy?",
        opts: [
          "Weiß ich nicht.",
          "Passt schon.",
          "Bei Nichtbeachtung erfolgt eine Mahnung.",
          "Gemäß der Verordnung ist dies untersagt."
        ],
        why: "Pierwsze dwa to elipsy mowy. Pozostałe dwa to Amtsdeutsch."
      },
      {
        q: "Przetłumacz w tonie nieformalnym: „No chodź z nami, i tak idziesz do centrum!” (mitkommen, sowieso, in die Stadt gehen)",
        why: "<i>Komm doch mit, du gehst sowieso in die Stadt</i>: <i>doch</i> dla zaproszenia, <i>sowieso</i> dla „i tak”; przed <i>sowieso</i> można dodać <i>ja</i> albo <i>doch</i>."
      },
      {
        tr: "„No i jak było wczoraj?” „A, właściwie całkiem dobrze. Film był, no cóż, trochę długi, ale poza tym naprawdę świetny.”",
        why: "W <i>eigentlich</i> akcent pada na <b>ei</b>; w <i>bisschen</i> <b>ss</b> wymawia się [s]; w <i>sonst</i> <b>o</b> jest krótkie."
      },
      {
        tr: "No chodź z nami, na pewno będzie wesoło!",
        why: "W <i>einfach</i> akcent pada na <b>ein</b>; w <i>bestimmt</i> akcent pada na <b>stimmt</b>; w <i>lustig</i> końcowe <b>g</b> wymawia się [ç]."
      }
    ]
  },
  "lesson:c1-u03-l3": {
    theme: "Relacje i prezentacje",
    title: "Spójność: darauf, dass ...",
    objectives: [
      "używać korelatów darauf, daran, darüber przed zdaniem podrzędnym",
      "używać es jako zapowiadacza",
      "porządkować tekst spójnikami (zunächst, darüber hinaus, schließlich)",
      "łączyć zdania akapitu odsyłaczami (dadurch, deshalb)"
    ],
    theory: [
      {
        h: "Zapowiadanie zdania",
        p: "Gdy czasownik rządzi przyimkiem (<em>sich freuen auf, bestehen auf, sich einigen auf, hinweisen auf</em>), a dopełnieniem jest zdanie, w zdaniu głównym może pojawić się przysłówek zaimkowy, który je zapowiada; przy niektórych czasownikach jest obowiązkowy (<em>bestehen auf</em>), przy innych fakultatywny albo zmienia odcień (<em>Ich freue mich, dass du kommst</em> wyraża radość z faktu, <em>Ich freue mich darauf, dass du kommst</em> oczekiwanie przyszłego wydarzenia): <em>Er besteht <strong>darauf</strong>, dass wir bleiben. Wir haben uns <strong>darauf</strong> geeinigt, den Termin zu verschieben.</em> Bez przyimka zapowiadaczem może być <strong>es</strong>: <em>Es ist wichtig, dass alle pünktlich sind.</em> Jeśli zdanie podrzędne przechodzi na pierwsze miejsce, podmiotowe <em>es</em> znika: <em>Dass alle pünktlich sind, ist wichtig.</em>"
      },
      {
        h: "Spajanie tekstu",
        p: "Spójny tekst prowadzi czytelnika. Dla kolejności: <em>zunächst, zuerst, dann, anschließend, schließlich</em>. Dla dodawania: <em>darüber hinaus, außerdem</em>. Dla odsyłania do tego, co już powiedziano: <em>dadurch, deshalb, dabei, darauf</em>: <em>Die Mieten steigen. Dadurch wird Wohnen für viele unbezahlbar.</em>"
      },
      {
        contrast: "Polski zna podobny mechanizm: <em>upiera się przy tym, żebyśmy zostali</em>, <em>zgodziliśmy się na to, żeby przesunąć termin</em>. Zaimek wskazujący z przyimkiem (<em>przy tym, na to</em>) zapowiada zdanie podrzędne, więc idea jest znajoma. Różnice są trzy. Po pierwsze niemiecki skleja to w jedno słowo: <em>da(r)</em> + przyimek (<em>darauf, daran, darüber</em>), niezmienne, bez przypadków. Po drugie przyimek jest przyimkiem niemieckiego czasownika, nie polskiego: <em>pamiętać o tym</em>, ale <em>denken an</em> → <em>daran</em>; <em>złościć się na to</em>, ale <em>sich ärgern über</em> → <em>darüber</em>. Po trzecie w konstrukcjach takich jak <em>Es ist wichtig, dass ...</em> niemiecki zapowiada zdanie podrzędne zaimkiem <em>es</em>, a polski mówi po prostu <em>ważne jest, żeby ...</em>; nie każda konstrukcja tego wymaga (<em>Ich hoffe, dass du kommst</em>). Przy <em>bestehen auf</em> uważaj też na tryb: po polsku <em>żeby</em> + forma przeszła (<em>żeby wszyscy wzięli udział</em>), po niemiecku zwykły tryb oznajmujący (<em>dass alle teilnehmen</em>)."
      },
      {
        trap: "Przysłówek zaimkowy bierze przyimek czasownika: <em>bestehen auf → darauf</em>, <em>denken an → daran</em>, <em>sich ärgern über → darüber</em>. <em>Er besteht daran, dass ...</em> jest błędne. Polskie „upierać się przy” (<em>przy tym</em>) nie jest wskazówką: niemiecki czasownik bierze <em>auf</em>."
      },
      {
        tip: "Ucz się czasowników razem z ich przyimkiem i przysłówkiem zaimkowym: <em>sich einigen auf / darauf</em>, <em>hinweisen auf / darauf</em>, <em>eingehen auf / darauf</em>. W prezentacjach pojawiają się bez przerwy."
      }
    ],
    grammar: {
      title: "Korelaty i spójniki tekstowe",
      note: "Czasownik + przyimek + zdanie: <b>da(r)- + przyimek</b> w zdaniu głównym (<i>darauf, dass ...</i>). Bez przyimka: <b>es</b> (<i>Es ist wichtig, dass ...</i>). Porządek tekstu: <i>zunächst, dann, schließlich</i>; dodawanie: <i>darüber hinaus</i>.",
      table: {
        head: ["czasownik", "korelat", "przykład"],
        rows: [
          ["bestehen auf", "darauf", "Er besteht darauf, dass wir bleiben."],
          ["sich einigen auf", "darauf", "Wir haben uns darauf geeinigt, den Termin zu verschieben."],
          ["hinweisen auf", "darauf", "Ich weise darauf hin, dass die Frist endet."],
          ["denken an", "daran", "Denk daran, das Licht auszumachen."],
          ["wichtig sein", "es", "Es ist wichtig, dass alle pünktlich sind."]
        ]
      },
      examples: [
        { tr: "Nie mogę się doczekać, aż przyjdziesz.", note: "sich freuen auf → darauf" },
        { tr: "Ważne jest, żeby wszyscy byli punktualni.", note: "es zapowiada zdanie podrzędne" },
        { tr: "Umówiliśmy się na przesunięcie terminu.", note: "sich einigen auf → darauf + bezokolicznik" },
        { tr: "Upiera się, żebyśmy zostali.", note: "bestehen auf → darauf" },
        { tr: "Ten punkt jest decydujący, dlatego chciałbym go omówić dokładniej.", note: "eingehen auf → darauf" },
        { tr: "Poza tym są jeszcze inne problemy.", note: "darüber hinaus: dodaje" }
      ]
    },
    vocab: [
      "związek, kontekst",
      "wstęp",
      "zakończenie, koniec",
      "akapit",
      "odniesienie",
      "struktura, układ (tekstu)",
      "umawiać się, uzgadniać (auf: co do)",
      "obstawać, upierać się (auf: przy)",
      "omawiać, poruszać (auf: temat)",
      "zwracać uwagę, wskazywać (auf: na coś)",
      "poza tym, ponadto",
      "w końcu, na koniec"
    ],
    exercises: [
      {
        q: "Uzupełnij: „Er besteht ___, dass wir bleiben.”",
        opts: [
          "darauf",
          "daran",
          "dafür"
        ],
        why: "<i>bestehen auf</i>: korelat bierze ten sam przyimek, <b>darauf</b>."
      },
      {
        q: "Które zdanie jest poprawne?",
        opts: [
          "Dass alle pünktlich sind, ist wichtig.",
          "Dass alle pünktlich sind, ist es wichtig.",
          "Es, dass alle pünktlich sind, ist wichtig."
        ],
        why: "Gdy zdanie podrzędne podmiotowe zajmuje pierwsze miejsce, zapowiadające je <i>es</i> (korelat) nie występuje."
      },
      {
        q: "W eseju: „Die Mieten steigen. ___ wird Wohnen für viele Familien unbezahlbar.” Który spójnik tworzy właściwy związek?",
        opts: [
          "Dadurch",
          "Trotzdem",
          "Stattdessen"
        ],
        why: "Drugie zdanie jest konsekwencją pierwszego: <b>dadurch</b>, „przez to, wskutek tego”."
      },
      {
        q: "Uzupełnij: „Wir haben uns ___ geeinigt, den Termin zu verschieben.”",
        hint: "sich einigen auf + zdanie",
        why: "<b>darauf</b>: zapowiada bezokolicznik z <i>zu</i>."
      },
      {
        q: "Uzupełnij: „Auf diese Frage gehe ich später ___.”",
        hint: "partykuła od eingehen",
        why: "<b>ein</b>: <i>eingehen auf</i> jest rozdzielne, „omówić, odnieść się do”."
      },
      {
        q: "Uzupełnij plan prezentacji.",
        tr: "Najpierw chciałbym opisać problem. Potem wskażę możliwe rozwiązania, a na koniec wyciągnę wnioski.",
        why: "<i>Zuerst/Zunächst</i>, <i>Danach/Dann/Anschließend</i>, <i>schließlich/abschließend</i>: spójniki prowadzą słuchacza."
      },
      {
        q: "Połącz każde słowo z jego znaczeniem.",
        pairs: [
          "wstęp",
          "akapit",
          "związek, kontekst",
          "struktura (tekstu)"
        ]
      },
      {
        q: "Przetłumacz: „(On) nalega, żeby wszyscy wzięli udział w zebraniu.” (bestehen auf, die Besprechung)",
        why: "<i>Er besteht darauf, dass alle an der Besprechung teilnehmen</i>: <i>darauf</i> zapowiada zdanie podrzędne; tam, gdzie polski ma <i>żeby</i> i formę przeszłą, niemiecki używa trybu oznajmującego."
      },
      {
        tr: "W moim wystąpieniu omawiam najpierw przyczyny. Poza tym chciałbym zwrócić uwagę, że są już pierwsze rozwiązania. Na koniec krótko wszystko podsumowuję.",
        why: "W <i>Vortrag</i> akcent pada na <b>Vor</b>; w <i>Ursachen</i> akcent pada na <b>Ur</b>; w <i>zusammen</i> akcent pada na <b>sam</b>."
      },
      {
        tr: "Chciałbym zwrócić uwagę, że termin upływa jutro.",
        why: "W <i>hinweisen</i> akcent pada na <b>hin</b>; w <i>Frist</i> <b>i</b> jest krótkie; w <i>endet</i> pierwsze <b>e</b> jest krótkie."
      }
    ]
  },
  "lesson:c1-u03-test": {
    theme: "Sprawdzian",
    title: "Test: Rejestry i spójność tekstu",
    objectives: [
      "sprawdzić jednostkę i powtórzyć werden, czasowniki funkcyjne i styl nominalny z jednostek 1-3"
    ],
    theory: [
      {
        p: "Dwanaście pytań z jednostki i z jednostek 1-3. Zaliczasz przy 70%. Nie zaglądaj do lekcji w trakcie odpowiadania: jeśli czegoś nie pamiętasz, lepiej wrócić i powtórzyć."
      }
    ],
    exercises: [
      {
        q: "Uzupełnij: „Er ist Lehrer ___.”",
        hint: "imiesłów werden w znaczeniu „stać się”",
        why: "<b>geworden</b>: czasownik samodzielny, z <i>ge-</i>."
      },
      {
        q: "Uzupełnij: „Das neue Gesetz tritt im Mai in ___.”",
        hint: "wejść w życie",
        why: "<b>Kraft</b>: <i>in Kraft treten</i>."
      },
      {
        q: "Uzupełnij ogłoszenie: „Die Zahlung ___ per Überweisung.”",
        hint: "następuje",
        why: "<b>erfolgt</b>: czasownik typowy dla Amtsdeutsch."
      },
      {
        q: "Uzupełnij: „Wir müssen noch eine Entscheidung ___.”",
        hint: "podjąć (decyzję)",
        why: "<b>treffen</b>: <i>eine Entscheidung treffen</i> (w stylu oficjalnym także <i>fällen</i>)."
      },
      {
        q: "Uzupełnij: „Sie besteht ___, dass wir pünktlich sind.”",
        hint: "korelat od bestehen auf",
        why: "<b>darauf</b>: zapowiada zdanie podrzędne."
      },
      {
        q: "Uzupełnij: „___ Abschluss der Arbeiten wird die Straße freigegeben.”",
        hint: "przyimek: „po”",
        why: "<b>Nach</b>: <i>nach</i> + celownik (<i>Abschluss</i>) zamiast <i>nachdem</i>; <i>der Arbeiten</i> to dopełniacz zależny od rzeczownika."
      },
      {
        q: "Kolega jeszcze nie przyszedł. Co wyraża „Er wird den Zug wohl verpasst haben”?",
        opts: [
          "przypuszczenie o przeszłości",
          "przyszłość",
          "stronę bierną"
        ],
        why: "Futur II w znaczeniu <b>przypuszczenia</b>: „pewnie spóźnił się na pociąg”."
      },
      {
        q: "Który zwrot rzeczownikowy odpowiada zdaniu „Um die Kosten zu senken, ...”?",
        opts: [
          "Zur Senkung der Kosten ...",
          "Bei Senkung der Kosten ...",
          "Trotz Senkung der Kosten ..."
        ],
        why: "Cel (<i>um ... zu</i>) oddaje się przez <b>zu</b> + rzeczownik: <i>zur Senkung der Kosten</i>."
      },
      {
        q: "Przez telefon koleżanka mówi: „Das ist halt so.” Jaką postawę wyraża?",
        opts: [
          "rezygnację",
          "entuzjazm",
          "wyrzut"
        ],
        why: "<i>halt</i> sygnalizuje, że rzeczy nie da się zmienić: <b>rezygnację</b>."
      },
      {
        q: "W regulaminie: które zdanie wyraża obowiązek?",
        opts: [
          "Der Ausweis ist stets mitzuführen.",
          "Der Ausweis lässt sich mitführen.",
          "Der Ausweis ist mitgeführt."
        ],
        why: "<b>sein + zu</b> w regulaminie wyraża obowiązek: „dokument należy zawsze mieć przy sobie”."
      },
      {
        q: "Przekształć w styl nominalny: „Weil es stark regnete, wurde das Konzert abgesagt.”",
        why: "<i>Wegen des starken Regens wurde das Konzert abgesagt</i>: <i>wegen</i> (albo <i>aufgrund</i>) + dopełniacz zamiast <i>weil</i>."
      },
      {
        tr: "Po zakończeniu prac droga zostanie ponownie otwarta.",
        why: "W <i>Abschluss</i> akcent pada na <b>Ab</b>; w <i>Arbeiten</i> akcent pada na <b>Ar</b>; w <i>freigegeben</i> akcent pada na <b>frei</b>."
      }
    ]
  }
});
