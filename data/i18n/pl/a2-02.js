/* ============================================================
   Teksty w języku ucznia (pl) do data/core/a2-02.js, jednostka a2-u05.
   Klucze odsyłają do id warstwy neutralnej; tablice łączą się
   po indeksie, więc ich długość musi zgadzać się z core.
   Sprawdza to scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("pl", {
  "unit:a2-u05": {
    title: "Dom i okolica",
    grammarNote: "przymiotnik po ein, kein i zaimku dzierżawczym · stellen/stehen, legen/liegen · rodzaj wyrazów złożonych · Könnten Sie ...?"
  },
  "lesson:a2-u05-l1": {
    theme: "Szukanie mieszkania",
    title: "Szukam jasnego mieszkania",
    objectives: [
      "czytać ogłoszenie o wynajmie z przymiotnikami przed rzeczownikiem",
      "wybierać końcówkę przymiotnika po ein, kein i zaimkach dzierżawczych",
      "opisywać mieszkanie za pomocą hell, ruhig, günstig, möbliert"
    ],
    theory: [
      {
        h: "Przymiotnik przed rzeczownikiem",
        p: "Przed rzeczownikiem przymiotnik dostaje <strong>końcówkę</strong>, która wskazuje rodzaj, liczbę i przypadek. Po <em>ein, kein</em> i zaimkach dzierżawczych (<em>mein, dein, sein ...</em>) praktyczna reguła jest jedna: tam, gdzie <em>ein</em> <strong>nie ma końcówki</strong> (rodzaj męski w mianowniku, rodzaj nijaki w mianowniku i bierniku), końcówkę niesie przymiotnik, <strong>-er</strong> albo <strong>-es</strong>. W rodzaju żeńskim w mianowniku i bierniku przymiotnik ma <strong>-e</strong>; we wszystkich pozostałych przypadkach, razem z celownikiem, <strong>-en</strong>. <em>Ich suche eine helle Wohnung. Die Wohnung hat einen großen Balkon. Das ist ein altes Haus.</em>"
      },
      {
        contrast: "W polskim przymiotnik też zgadza się z rzeczownikiem w rodzaju, liczbie i przypadku (<em>jasne mieszkanie, jasnego mieszkania, jasnym mieszkaniem</em>), więc sama idea końcówek nie jest obca. Różnice są dwie. Po pierwsze, polski nie ma rodzajnika, więc końcówka zawsze jest ta sama, a w niemieckim zależy od tego, co stoi przed przymiotnikiem (<em>ein</em> kontra <em>der</em>). Po drugie, po <em>sein</em> niemiecki przymiotnik <strong>nie zmienia się</strong>: <em>Die Wohnung ist hell</em>, podczas gdy po polsku «mieszkanie jest jasne» i «kuchnia jest jasna» mają różne końcówki. Uwaga na rodzaj: polskie «mieszkanie» jest nijakie, ale <em>die Wohnung</em> jest żeńskie, więc «jasne mieszkanie» to <em>eine helle Wohnung</em>, a nie «ein helles Wohnung». Przy czasowniku <em>suchen</em> polski bierze dopełniacz («szukam jasnego mieszkania»), a niemiecki biernik: <em>Ich suche eine helle Wohnung</em>."
      },
      {
        trap: "Najczęstszy błąd to pomylenie <strong>-en</strong> i <strong>-er</strong>. <em>-er</em> pojawia się tylko w rodzaju męskim w mianowniku (<em>ein neuer Balkon</em>); już w bierniku zmienia się w <em>-en</em> (<em>einen neuen Balkon</em>). Również <em>Wohnung</em> i <em>Haus</em> nie pokrywają się dokładnie z polskim «dom» i «mieszkanie»: <em>die Wohnung</em> to mieszkanie, w którym się mieszka, <em>das Haus</em> to budynek albo cały dom."
      },
      {
        tip: "<em>dunkel</em> traci <em>e</em> przed końcówką: <em>eine dunkle Küche, ein dunkles Zimmer</em>. Z zaimkami dzierżawczymi obowiązuje ta sama reguła co z <em>ein</em>: <em>mein neuer Nachbar, meine neue Wohnung</em>. W liczbie mnogiej po <em>kein</em> i zaimkach dzierżawczych przymiotnik ma <em>-en</em>: <em>keine neuen Möbel</em>."
      }
    ],
    grammar: {
      title: "Przymiotnik po ein, kein i zaimku dzierżawczym",
      note: "Tam, gdzie <b>ein</b> nie ma końcówki, niesie ją przymiotnik (<b>-er, -es</b>); rodzaj żeński w mianowniku i bierniku <b>-e</b>; w pozostałych przypadkach <b>-en</b>.",
      table: {
        head: ["przypadek", "rodzaj męski", "rodzaj żeński", "rodzaj nijaki"],
        rows: [
          ["mianownik", "ein neuer Balkon", "eine neue Küche", "ein neues Zimmer"],
          ["biernik", "einen neuen Balkon", "eine neue Küche", "ein neues Zimmer"],
          ["celownik", "einem neuen Balkon", "einer neuen Küche", "einem neuen Zimmer"]
        ]
      },
      examples: [
        { tr: "Szukam jasnego mieszkania.", note: "Wohnung jest rodzaju żeńskiego: eine helle" },
        { tr: "Mieszkanie ma duży balkon.", note: "biernik rodzaju męskiego: einen großen" },
        { tr: "To stary dom.", note: "rodzaj nijaki w mianowniku: ein altes" },
        { tr: "Nie mamy nowej kuchni.", note: "kein + rodzaj żeński: keine neue" },
        { tr: "To mój nowy sąsiad.", note: "zaimek dzierżawczy jak ein: mein neuer" },
        { tr: "Ona mieszka w małym mieszkaniu.", note: "celownik rodzaju żeńskiego: einer kleinen" }
      ]
    },
    vocab: [
      "mieszkanie",
      "czynsz",
      "balkon",
      "sąsiad",
      "ogłoszenie",
      "jasny",
      "ciemny",
      "spokojny, cichy",
      "korzystny cenowo, tani",
      "umeblowany",
      "szukać",
      "wynajmować, brać w najem"
    ],
    exercises: [
      {
        q: "Jak powiesz «Szukam jasnego mieszkania»?",
        opts: ["Ich suche eine helle Wohnung.", "Ich suche ein helle Wohnung.", "Ich suche eine heller Wohnung."],
        why: "<i>Wohnung</i> jest rodzaju żeńskiego: po <i>eine</i> przymiotnik ma <b>-e</b>, czyli <i>helle</i>."
      },
      {
        q: "Uzupełnij właściwą końcówką: «Das ist ein ___ Haus.» (alt)",
        opts: ["alter", "altes", "alten"],
        why: "<i>Haus</i> jest nijakie, a w mianowniku <i>ein</i> nie ma końcówki: niesie ją przymiotnik, <b>-es</b>."
      },
      {
        q: "Które zdanie jest poprawne?",
        opts: [
          "Wir wohnen in einer ruhige Straße.",
          "Wir wohnen in einer ruhigen Straße.",
          "Wir wohnen in einer ruhiger Straße."
        ],
        why: "Po <i>in</i> przy pytaniu <i>wo?</i> przypadkiem jest celownik, a celownik wymaga <b>-en</b>: <i>in einer ruhigen Straße</i>."
      },
      {
        q: "Uzupełnij: «Das ist meine ___ Wohnung.» (neu, z końcówką)",
        hint: "zaimek dzierżawczy + rodzaj żeński w mianowniku",
        why: "Po <i>meine</i> rodzaj żeński w mianowniku ma <b>-e</b>: <i>neue</i>."
      },
      {
        q: "Dopasuj każdy przymiotnik do jego znaczenia.",
        pairs: ["jasny", "ciemny", "spokojny", "korzystny cenowo"]
      },
      {
        tr: "Szukam spokojnego i niedrogiego mieszkania.",
        why: "<i>Ich suche eine ruhige und günstige Wohnung</i>: dwa przymiotniki połączone przez <i>und</i> dostają tę samą końcówkę, <b>-e</b>. Odwrotna kolejność też jest poprawna."
      },
      {
        q: "Uzupełnij zdanie.",
        tr: "Mieszkanie ma duży balkon i nową kuchnię.",
        why: "<i>Balkon</i> jest rodzaju męskiego w bierniku: <b>einen großen</b> Balkon. <i>Küche</i> jest żeńskie: <b>eine neue</b> Küche."
      },
      {
        tr: "Szukamy taniego mieszkania.",
        why: "Odmieniony czasownik stoi na drugim miejscu: <i>Wir suchen eine günstige Wohnung</i>. Przymiotnik <i>günstige</i> dostaje <b>-e</b>, bo <i>Wohnung</i> jest rodzaju żeńskiego."
      },
      {
        tr: "Mieszkanie ma duży balkon i nową kuchnię.",
        why: "W <i>großen</i> <b>ß</b> to bezdźwięczne <b>s</b>, a <b>o</b> jest długie; w <i>Küche</i> <b>ü</b> jest krótkie i otwarte [ʏ], a <b>ch</b> to [ç], miękki szum bez polskiego odpowiednika (to nie polskie «ch» z «ach»): <i>Küche</i> [ˈkʏçə]."
      },
      {
        tr: "Szukam jasnego i spokojnego mieszkania.",
        why: "W <i>Wohnung</i> <b>h</b> nie jest wymawiane i wydłuża <b>o</b>; w <i>helle</i> początkowe <b>h</b> to lekki oddech, słabszy niż polskie «h», a <b>ll</b> wskazuje na krótkie <b>e</b>."
      }
    ]
  },
  "lesson:a2-u05-l2": {
    theme: "Urządzanie",
    title: "Gdzie postawię kanapę?",
    objectives: [
      "używać wohin? z biernikiem i wo? z celownikiem",
      "wybierać między stellen/stehen a legen/liegen",
      "mówić, gdzie się stawia meble i gdzie stoją"
    ],
    theory: [
      {
        h: "wohin? czy wo?",
        p: "Przyimki <em>in, an, auf, vor, hinter, neben, über, unter, zwischen</em> łączą się z dwoma przypadkami. Jeśli zdanie wskazuje <strong>cel</strong> (<strong>wohin?</strong>, dokąd?), przypadkiem jest <strong>biernik</strong>; jeśli wskazuje <strong>miejsce</strong> (<strong>wo?</strong>, gdzie?), jest to <strong>celownik</strong>, także wtedy, gdy w tym miejscu odbywa się ruch (<em>Ich laufe im Garten</em>). <em>Ich stelle das Sofa an die Wand</em> (wohin?), <em>Das Sofa steht an der Wand</em> (wo?). Zlewanie się przyimka z rodzajnikiem: <em>in das → ins, an das → ans, auf das → aufs, in dem → im, an dem → am</em>."
      },
      {
        p: "Niemiecki wybiera czasownik według położenia przedmiotu. <strong>stellen / stehen</strong> dla tego, co stoi pionowo (<em>die Lampe, der Schrank, das Regal</em>), <strong>legen / liegen</strong> dla tego, co leży poziomo (<em>das Buch, der Teppich</em>). <em>stellen</em> i <em>legen</em> wskazują cel i odpowiadają na <em>wohin?</em>; <em>stehen</em> i <em>liegen</em> wskazują miejsce i odpowiadają na <em>wo?</em>. Przypadek dotyczy okolicznika miejsca wprowadzonego przyimkiem o podwójnej rekcji (<em>auf, in, an, unter</em>...): biernik dla <em>wohin?</em>, celownik dla <em>wo?</em>."
      },
      {
        contrast: "Polski zna podobną parę: <em>stawiać / stać</em> (pionowo) i <em>kłaść / leżeć</em> (poziomo), a przy wielu przyimkach (<em>na, pod, za, nad, przed</em>) cel idzie w bierniku, a miejsce w miejscowniku albo narzędniku: <em>kładę książkę na stół</em>, ale <em>książka leży na stole</em>; <em>stawiam kanapę pod ścianę</em>, ale <em>kanapa stoi pod ścianą</em>. Nie przenoś jednak polskiego przypadku na niemiecki: po polsku miejsce to miejscownik albo narzędnik, a po niemiecku zawsze <strong>celownik</strong>. Polski też nie jest tu konsekwentny: obok «stawiam kanapę pod ścianę» mówi się «stawiam lampę w kącie» (miejscownik mimo celu), a niemiecki przy przyimku o podwójnej rekcji i okoliczniku celu wymaga biernika: <em>Ich stelle die Lampe in die Ecke</em>."
      },
      {
        trap: "Nie tłumacz «postawić» zawsze jednym czasownikiem i nie myl pozycji. <em>Ich stelle das Buch auf den Tisch</em> mówi się, gdy książka stoi, <em>Ich lege das Buch auf den Tisch</em>, gdy leży: zależy to od przedmiotu i jego położenia, a nie od polskiego słowa. Przy <em>stehen</em> i <em>liegen</em>, które wskazują miejsce (<em>wo?</em>), okolicznik z przyimkiem o podwójnej rekcji idzie w celowniku: <em>Die Lampe steht auf dem Tisch</em>, nigdy «auf den Tisch»."
      }
    ],
    grammar: {
      title: "wohin? + biernik, wo? + celownik",
      note: "Przy przyimku o podwójnej rekcji: <b>wohin?</b> (cel, z stellen, legen) = biernik; <b>wo?</b> (miejsce, z stehen, liegen) = celownik.",
      table: {
        head: ["pytanie", "czasownik", "przykład"],
        rows: [
          ["wohin? (biernik)", "stellen", "Ich stelle die Lampe in die Ecke."],
          ["wo? (celownik)", "stehen", "Die Lampe steht in der Ecke."],
          ["wohin? (biernik)", "legen", "Ich lege den Teppich unter den Tisch."],
          ["wo? (celownik)", "liegen", "Der Teppich liegt unter dem Tisch."]
        ]
      },
      examples: [
        { tr: "Stawiam kanapę pod ścianę.", note: "wohin?: an die Wand to biernik" },
        { tr: "Kanapa stoi pod ścianą.", note: "stehen + celownik: an der Wand" },
        { tr: "Kładę dywan pod stół.", note: "wohin?: unter den Tisch to biernik" },
        { tr: "Dywan leży pod stołem.", note: "liegen + celownik: unter dem Tisch" },
        { tr: "Gdzie stawiasz lampę? W kącie.", note: "wohin? wymaga biernika: in die Ecke" },
        { tr: "Lampa stoi w kącie.", note: "wo? wymaga celownika: in der Ecke" }
      ]
    },
    vocab: [
      "postawić (pionowo)",
      "stać (pionowo)",
      "położyć (poziomo)",
      "leżeć (poziomo)",
      "kanapa",
      "szafa, szafka",
      "regał",
      "lampa",
      "dywan",
      "obraz",
      "ściana",
      "kąt"
    ],
    exercises: [
      {
        q: "Jak powiesz «Stawiam kanapę pod ścianę»?",
        opts: ["Ich stelle das Sofa an der Wand.", "Ich stelle das Sofa an die Wand.", "Ich stehe das Sofa an die Wand."],
        why: "Jest cel (<i>wohin?</i>): <i>stellen</i> i biernik, <b>an die Wand</b>."
      },
      {
        q: "Wybierz czasownik: «Der Schrank ___ in der Ecke.»",
        opts: ["steht", "stellt", "legt"],
        why: "Szafa stoi pionowo, a zdanie wskazuje, gdzie się znajduje (<i>in der Ecke</i>, celownik): <b>steht</b>."
      },
      {
        q: "Uzupełnij: «Ich lege das Buch auf ___ Tisch.»",
        opts: ["dem", "den", "der"],
        why: "<i>Legen</i> wskazuje cel (<i>wohin?</i>), czyli biernik: <i>Tisch</i> jest rodzaju męskiego, <b>den</b> Tisch."
      },
      {
        q: "Które zdania są poprawne, jeśli stellen i legen mają mówić, dokąd trafia przedmiot (wohin?)?",
        opts: [
          "Ich stelle die Lampe in die Ecke.",
          "Die Lampe steht in der Ecke.",
          "Ich lege das Buch auf dem Tisch.",
          "Der Teppich liegt unter dem Tisch.",
          "Ich stelle das Regal an der Wand."
        ],
        why: "Zdanie 3 wymaga biernika (<i>auf den Tisch</i>), zdanie 5 też (<i>an die Wand</i>): <i>legen</i> i <i>stellen</i> odpowiadają na <i>wohin?</i>."
      },
      {
        q: "Uzupełnij: «Ich stelle das Sofa an ___ Wand.» (rodzajnik określony)",
        hint: "wohin? rodzaj żeński, biernik",
        why: "<i>Stellen</i> + <i>wohin?</i> wymaga biernika, a <i>Wand</i> jest rodzaju żeńskiego: <b>die</b>."
      },
      {
        q: "Uzupełnij: «Der Teppich ___ unter dem Tisch.» (liegen, 3. osoba liczby pojedynczej)",
        hint: "stan, czasownik położenia",
        why: "<i>Liegen</i> w 3. osobie liczby pojedynczej: <b>liegt</b>. <i>Unter dem Tisch</i> to celownik i odpowiada na <i>wo?</i>."
      },
      {
        tr: "Stawiam lampę w kącie.",
        why: "<i>Ich stelle die Lampe in die Ecke</i>: lampa stoi pionowo, więc <i>stellen</i>, a <i>in die Ecke</i> to biernik."
      },
      {
        q: "Uzupełnij zdanie.",
        tr: "Stawiam regał pod ścianę. Teraz stoi tam.",
        why: "<i>Stelle</i> wskazuje cel, <i>steht</i> miejsce: pierwszy czasownik odpowiada na <i>wohin?</i> (biernik), drugi na <i>wo?</i> (celownik)."
      },
      {
        tr: "Stawiam kanapę pod ścianę, a dywan kładę pod stół.",
        why: "W <i>Teppich</i> <b>pp</b> wskazuje krótkie <b>e</b>, a <b>ch</b> po <b>i</b> to [ç]; w <i>unter</i> <b>u</b> jest krótkie, a <b>t</b> wyraźne, z lekkim przydechem."
      },
      {
        tr: "Regał stoi pod ścianą, a dywan leży pod stołem.",
        why: "W <i>Regal</i> akcent pada na <b>gal</b>; <i>Wand</i> zaczyna się od <b>W</b>, czytanego jak polskie «w»."
      }
    ]
  },
  "lesson:a2-u05-l3": {
    theme: "Pomieszczenia",
    title: "salon, kuchnia",
    objectives: [
      "tworzyć i czytać rzeczowniki złożone",
      "odczytywać rodzaj z ostatniego członu wyrazu złożonego",
      "nazywać pomieszczenia i elementy domu"
    ],
    theory: [
      {
        h: "Rodzaj wyznacza ostatni człon",
        p: "Niemiecki skleja dwa rzeczowniki (albo czasownik i rzeczownik) w jeden wyraz, a o rodzaju decyduje <strong>ostatni człon</strong>: <em>wohnen + das Zimmer = das Wohnzimmer</em>, <em>die Küche + der Tisch = der Küchentisch</em>, <em>das Haus + die Tür = die Haustür</em>. Pierwszy człon precyzuje znaczenie, ale nie zmienia rodzajnika. Czasem pojawia się litera łącząca: rzeczowniki na <em>-ung</em> zwykle dostają <em>-s</em>, <em>die Wohnung + die Tür = die Wohnungstür</em>."
      },
      {
        contrast: "Polski rzadko skleja wyrazy w ten sposób, a zamiast tego dodaje przymiotnik albo dopełniacz: <em>pokój dzienny, drzwi wejściowe, stół kuchenny</em>. Niemiecki pisze wszystko jako jeden wyraz, a jego rodzaj może nie pokrywać się z polskim: «sypialnia» jest żeńska, <em>das Schlafzimmer</em> jest nijakie (bo <em>das Zimmer</em>); «łazienka» jest żeńska, <em>das Badezimmer</em> nijakie; «salon» jest męski, <em>das Wohnzimmer</em> nijakie; «lodówka» jest żeńska, <em>der Kühlschrank</em> męski. Zgadzają się natomiast «kuchnia» i <em>die Küche</em> oraz «pralka» i <em>die Waschmaschine</em> (oba żeńskie). Uwaga: «drzwi» są po polsku tylko w liczbie mnogiej, a <em>die Tür</em> jest w liczbie pojedynczej."
      },
      {
        trap: "Pierwszy człon nie decyduje o rodzaju: <em>die Haustür</em> jest żeńskie, choć <em>das Haus</em> jest nijakie, a <em>der Küchentisch</em> jest męski, choć <em>die Küche</em> jest żeńska. Żeby poznać rodzajnik, patrz zawsze na <strong>koniec</strong> wyrazu. Przy długim wyrazie złożonym rozbieraj go od prawej do lewej."
      },
      {
        tip: "Żeby zrozumieć nowy wyraz złożony, czytaj go od końca: <em>der Kühlschrank</em> to <em>Schrank</em> (szafa), który chłodzi (<em>kühlen</em>). Dla każdego pomieszczenia ucz się całej nazwy z rodzajnikiem: <em>das Wohnzimmer, das Schlafzimmer, das Badezimmer, die Küche</em>."
      }
    ],
    grammar: {
      title: "Rzeczowniki złożone i ich rodzaj",
      note: "Rodzaj wyznacza <b>ostatni</b> człon: <b>das</b> Zimmer, więc <b>das</b> Wohnzimmer. Po -ung często pojawia się <b>-s</b>: Wohnung<b>s</b>tür.",
      table: {
        head: ["wyraz złożony", "budowa", "znaczenie"],
        rows: [
          ["das Wohnzimmer", "wohnen + das Zimmer", "salon"],
          ["das Schlafzimmer", "schlafen + das Zimmer", "sypialnia"],
          ["die Haustür", "das Haus + die Tür", "drzwi wejściowe do domu"],
          ["der Küchentisch", "die Küche + der Tisch", "stół kuchenny"],
          ["die Wohnungstür", "die Wohnung + s + die Tür", "drzwi do mieszkania"]
        ]
      },
      examples: [
        { tr: "Salon jest duży i jasny.", note: "das Zimmer: nijakie, więc das Wohnzimmer" },
        { tr: "Drzwi wejściowe są nowe.", note: "die Tür: żeńskie, więc die Haustür" },
        { tr: "Klucz leży na stole kuchennym.", note: "celownik przy wo?: auf dem Küchentisch" },
        { tr: "Lodówka stoi w kuchni.", note: "der Kühlschrank: jak der Schrank" },
        { tr: "Mamy małą łazienkę.", note: "ein kleines Badezimmer: nijakie, -es" },
        { tr: "Pralka jest w piwnicy.", note: "im Keller: celownik ze zlaniem się przyimka z rodzajnikiem" }
      ]
    },
    vocab: [
      "salon",
      "sypialnia",
      "łazienka",
      "kuchnia",
      "korytarz, przedpokój",
      "piwnica",
      "ogród",
      "drzwi wejściowe do domu",
      "drzwi do mieszkania",
      "lodówka",
      "pralka",
      "klucz"
    ],
    exercises: [
      {
        q: "Wybierz właściwy rodzajnik określony dla każdego rzeczownika.",
        items: ["salon", "kuchnia", "drzwi wejściowe", "lodówka", "sypialnia", "pralka"]
      },
      {
        q: "Dopasuj każdy wyraz złożony do jego znaczenia.",
        pairs: ["salon", "sypialnia", "łazienka", "drzwi wejściowe do domu"]
      },
      {
        q: "Dlaczego «Schlafzimmer» jest rodzaju nijakiego?",
        opts: [
          "Bo Zimmer jest nijakie, a rodzaj idzie za ostatnim członem.",
          "Bo schlafen jest czasownikiem.",
          "Bo kończy się na -er."
        ],
        why: "Rodzaj wyrazu złożonego jest taki jak jego ostatniego członu: <i>das Zimmer</i>, więc <b>das</b> Schlafzimmer."
      },
      {
        q: "Uzupełnij: «Die Küche + der Schrank = ___ Küchenschrank» (rodzajnik określony)",
        hint: "patrz na ostatni człon",
        why: "Ostatni człon to <i>der Schrank</i>: wyraz złożony jest rodzaju męskiego, <b>der</b> Küchenschrank."
      },
      {
        q: "Uzupełnij wyraz złożony literą łączącą: «Wohnung + Tür = Wohnung___tür»",
        hint: "jedna litera",
        why: "Po <i>-ung</i> zwykle pojawia się <b>-s</b>: <i>die Wohnungstür</i>."
      },
      {
        tr: "Salon jest duży i jasny.",
        why: "<i>Das Wohnzimmer ist groß und hell</i>: po <i>sein</i> przymiotniki nie dostają końcówki. Odwrotna kolejność też jest poprawna."
      },
      {
        q: "Uzupełnij zdanie.",
        tr: "Pralka jest w piwnicy, a lodówka w kuchni.",
        why: "<i>Waschmaschine</i> jest rodzaju żeńskiego (<i>die</i>), <i>Keller</i> bierze <i>im</i> (celownik zlany z przyimkiem), <i>Küche</i> wymaga <i>in der</i>."
      },
      {
        tr: "Klucz leży na stole kuchennym.",
        why: "<i>Der Schlüssel liegt auf dem Küchentisch</i>: klucz leży poziomo (<i>liegen</i>), stan wymaga celownika, <i>auf dem</i>."
      },
      {
        tr: "Lodówka jest w kuchni, a pralka w piwnicy.",
        why: "W <i>Küche</i> <b>ü</b> jest krótkie i otwarte [ʏ], a <b>ch</b> to [ç] ([ˈkʏçə]); w <i>Keller</i> <b>K</b> jest wyraźne, z lekkim przydechem, a <b>e</b> krótkie."
      },
      {
        tr: "Sypialnia i łazienka są małe, ale salon jest duży.",
        why: "W <i>Schlafzimmer</i> <b>sch</b> to [ʃ], czyli «sz», a akcent pada na <b>Schlaf</b>; w <i>Badezimmer</i> <b>a</b> jest długie."
      }
    ]
  },
  "lesson:a2-u05-l4": {
    theme: "Awaria w domu",
    title: "Ogrzewanie jest zepsute",
    objectives: [
      "zgłosić awarię administracji albo dozorcy",
      "sformułować uprzejmą prośbę za pomocą Könnten Sie ...?",
      "zachować bezokolicznik na końcu zdania"
    ],
    theory: [
      {
        h: "Könnten Sie ...?",
        p: "Żeby o coś poprosić kogoś, kogo się nie zna, dozorcę albo administrację, używa się formy grzecznościowej <strong>Könnten Sie ...?</strong> (<em>Konjunktiv II</em> od <em>können</em>) z <strong>bezokolicznikiem na końcu</strong>: <em>Könnten Sie bitte morgen vorbeikommen? Könnten Sie die Heizung reparieren?</em> Równie uprzejma jest forma <strong>Würden Sie ...?</strong> z bezokolicznikiem na końcu. Żeby zgłosić problem, wystarczą proste zdania: <em>Die Heizung ist kaputt. Der Wasserhahn tropft. Die Heizung funktioniert nicht.</em>"
      },
      {
        contrast: "<em>Könnten Sie</em> odpowiada polskiemu trybowi warunkowemu: «Czy mógłby Pan ...?», «Czy mogłaby Pani ...?», «Czy mogliby Państwo ...?». W polskim forma zależy od rodzaju i liczby adresata (<em>Pan, Pani, Państwo</em>), a czasownik w trybie warunkowym ma też rodzaj (<em>mógłby / mogłaby</em>). W niemieckim jest jedno <em>Sie</em> dla wszystkich, z formą czasownika taką jak dla 3. osoby liczby <strong>mnogiej</strong> (<em>Könnten Sie</em>, <em>Sie sind</em>), niezależnie od tego, czy zwracasz się do mężczyzny, kobiety, jednej osoby czy kilku. Po <em>sein</em> <em>kaputt</em> pozostaje bez końcówki, podczas gdy polskie «zepsuty» się zgadza: <em>Die Heizung ist kaputt</em> («ogrzewanie jest zepsute»), <em>Die Fenster sind kaputt</em> («okna są zepsute»). Przy rzeczowniku <em>kaputt</em> odmienia się jak przymiotnik: <em>die kaputte Heizung</em>. Po polsku bezokolicznik stoi zwykle zaraz po «mógłby», a po niemiecku idzie na koniec zdania."
      },
      {
        trap: "Bezokolicznik nie stoi zaraz po <em>Könnten</em>: idzie na koniec zdania, za wszystkie dopełnienia. <em>Könnten Sie die Heizung reparieren?</em>, a nie «Könnten Sie reparieren die Heizung?». Przez telefon zwykła formuła to <em>Guten Tag, hier ist Weber</em> (po polsku «Dzień dobry, mówi Weber»); <em>Ich bin Weber</em> nie jest błędem, ale to nie jest typowa formuła. Z uprzejmości zostaje się przy <em>Sie</em>, nawet jeśli rozmówca jest młodszy."
      },
      {
        tip: "Jeśli sprawa jest pilna, dodaj <em>dringend</em> albo <em>so schnell wie möglich</em>, nie tracąc uprzejmości: <em>Könnten Sie bitte so schnell wie möglich vorbeikommen?</em> <em>Bitte</em> stoi zwykle po zaimku."
      }
    ],
    grammar: {
      title: "Könnten Sie ...? i awaria",
      note: "<b>Könnten Sie</b> + dopełnienia + <b>bezokolicznik</b> na końcu. Awaria: <b>... ist kaputt</b> albo <b>... funktioniert nicht</b>.",
      table: {
        head: ["sytuacja", "zdanie", "funkcja"],
        rows: [
          ["przedstawienie się", "Guten Tag, hier ist Weber.", "przez telefon"],
          ["zgłoszenie", "Die Heizung ist kaputt.", "awaria"],
          ["zgłoszenie", "Der Wasserhahn tropft.", "awaria"],
          ["prośba", "Könnten Sie bitte morgen vorbeikommen?", "uprzejma prośba"],
          ["prośba", "Würden Sie das bitte reparieren?", "uprzejma prośba"]
        ]
      },
      examples: [
        { tr: "Dzień dobry, mówi Weber, z Hauptstraße 5.", note: "przez telefon: hier ist ..." },
        { tr: "Ogrzewanie jest zepsute.", note: "po sein kaputt nie ma końcówki" },
        { tr: "Kran w kuchni kapie.", note: "tropfen: 3. osoba liczby pojedynczej" },
        { tr: "Czy mógłby Pan przyjść jutro?", note: "bezokolicznik na końcu: vorbeikommen" },
        { tr: "Czy mógłby Pan naprawić ogrzewanie?", note: "Könnten Sie ... reparieren" },
        { tr: "Czy mógłby Pan to naprawić jak najszybciej?", note: "Würden Sie ... reparieren" }
      ]
    },
    vocab: [
      "ogrzewanie",
      "zepsuty",
      "działać",
      "naprawiać",
      "zarząd budynku, administracja",
      "dozorca, stróż",
      "naprawa",
      "kran",
      "okno",
      "kapać",
      "wpaść, przyjść (do kogoś)",
      "pilny"
    ],
    exercises: [
      {
        q: "Jak uprzejmie poprosisz o naprawę ogrzewania?",
        opts: [
          "Könnten Sie reparieren die Heizung?",
          "Könnten Sie die Heizung reparieren?",
          "Könnten Sie die Heizung repariert?"
        ],
        why: "Z <i>Könnten</i> bezokolicznik idzie <b>na koniec</b> zdania: <i>Könnten Sie die Heizung reparieren?</i>."
      },
      {
        q: "Które zdanie jest uprzejmą prośbą?",
        opts: ["Kommen Sie morgen!", "Sie kommen morgen.", "Könnten Sie morgen vorbeikommen?"],
        why: "<b>Könnten Sie ...?</b> to formuła uprzejma. Pozostałe dwa to rozkaz i oznajmienie."
      },
      {
        q: "Uzupełnij: «Die Heizung ist ___.» (zepsute)",
        hint: "po sein, bez końcówki",
        why: "<b>kaputt</b>, z akcentem na ostatniej sylabie, po <b>sein</b> pozostaje bez końcówki."
      },
      {
        q: "Uzupełnij: «___ Sie bitte morgen vorbeikommen?» (forma grzecznościowa od können)",
        hint: "Konjunktiv II, z Sie",
        why: "<b>Könnten</b>: <i>ich könnte</i>, <i>Sie könnten</i>. Z <i>Sie</i> używa się formy liczby mnogiej."
      },
      {
        q: "Dopasuj każde słowo do jego znaczenia.",
        pairs: ["ogrzewanie", "kran", "dozorca", "zarząd budynku"]
      },
      {
        tr: "Czy mógłby Pan naprawić ogrzewanie?",
        why: "<i>Könnten Sie bitte die Heizung reparieren</i>: bezokolicznik zamyka zdanie. Poprawne jest też <i>Könnten Sie die Heizung bitte reparieren</i>."
      },
      {
        tr: "Kran w kuchni kapie.",
        why: "<i>Der Wasserhahn in der Küche tropft</i>: <i>in der Küche</i> to celownik (<i>wo?</i>). Poprawne jest też <i>Der Wasserhahn tropft in der Küche</i>."
      },
      {
        q: "Uzupełnij zdanie.",
        tr: "Dzień dobry, mówi Weber. Ogrzewanie jest zepsute. Czy mogliby Państwo dziś przyjść?",
        why: "Przez telefon zwykła formuła to <i>hier ist Weber</i> (<i>ich bin Weber</i> też jest poprawne). Do uprzejmej prośby pasują <i>Könnten</i> i <i>Würden</i>; <i>Können</i> też jest poprawne, ale mniej uprzejme."
      },
      {
        tr: "Dzień dobry, mówi Weber. Ogrzewanie jest zepsute. Czy mogliby Państwo dziś przyjść?",
        why: "W <i>Heizung</i> <b>ei</b> czyta się [aɪ], czyli «aj», a <b>z</b> to [ts], jak polskie «c»; w <i>kaputt</i> akcent pada na ostatnią sylabę."
      },
      {
        tr: "Czy mógłby Pan naprawić kran w kuchni?",
        why: "W <i>Wasserhahn</i> pierwsze <b>h</b> w <i>Hahn</i> to lekki oddech, drugie nie jest wymawiane i wydłuża <b>a</b>; w <i>Küche</i> <b>ch</b> to [ç]."
      }
    ]
  },
  "lesson:a2-u05-test": {
    theme: "Sprawdzian",
    title: "Test: Dom i okolica",
    objectives: ["sprawdzić przymiotnik po ein, wohin i wo z przyimkami, rzeczowniki złożone i uprzejme prośby"],
    theory: [
      {
        p: "Dziesięć pytań z jednostki. Zaliczasz przy 70%. Nie zaglądaj do lekcji w trakcie odpowiadania: jeśli czegoś nie pamiętasz, lepiej wrócić do powtórki."
      }
    ],
    exercises: [
      {
        q: "Uzupełnij: «Ich suche eine ___ Wohnung.» (hell, z końcówką)",
        hint: "rodzaj żeński, biernik po eine",
        why: "Po <i>eine</i> rodzaj żeński ma <b>-e</b>: <i>helle</i>."
      },
      {
        q: "Uzupełnij: «Das ist ein ___ Haus.» (alt, z końcówką)",
        hint: "rodzaj nijaki w mianowniku po ein",
        why: "<i>Ein</i> nie ma końcówki w rodzaju nijakim w mianowniku, więc niesie ją przymiotnik: <b>altes</b>."
      },
      {
        q: "Uzupełnij: «Ich stelle die Lampe in ___ Ecke.» (rodzajnik określony)",
        hint: "wohin?",
        why: "<i>Stellen</i> odpowiada na <i>wohin?</i>: biernik rodzaju żeńskiego, <b>die</b> Ecke."
      },
      {
        q: "Uzupełnij: «Der Teppich ___ unter dem Tisch.» (liegen)",
        hint: "3. osoba liczby pojedynczej",
        why: "Stan i celownik: <b>liegt</b>."
      },
      {
        q: "Uzupełnij: «Die Küche + der Schrank = ___ Küchenschrank» (rodzajnik określony)",
        hint: "patrz na ostatni człon",
        why: "Rodzaj idzie za ostatnim członem: <b>der</b> Schrank, więc <b>der</b> Küchenschrank."
      },
      {
        q: "Które zdanie mówi, dokąd trafia książka (wohin?)?",
        opts: [
          "Ich lege das Buch auf dem Tisch.",
          "Ich lege das Buch auf den Tisch.",
          "Ich liege das Buch auf den Tisch."
        ],
        why: "<i>Legen</i> wskazuje cel (<i>wohin?</i>) i wymaga biernika: <b>auf den Tisch</b>. <i>Liegen</i> nie ma dopełnienia."
      },
      {
        q: "Które zdanie jest uprzejmą prośbą?",
        opts: ["Sie reparieren die Heizung jetzt.", "Könnten Sie die Heizung reparieren?", "Die Heizung reparieren Sie."],
        why: "<b>Könnten Sie ...?</b> z bezokolicznikiem na końcu to formuła uprzejma."
      },
      {
        q: "Dopasuj każde słowo do jego znaczenia.",
        pairs: ["ogrzewanie", "dozorca", "balkon", "klucz"]
      },
      {
        tr: "Lodówka jest w kuchni, a kanapa w salonie.",
        why: "W <i>Kühlschrank</i> <b>ü</b> jest długie [yː]: wargi jak do <b>u</b>, język jak do <b>i</b>, a <b>sch</b> to [ʃ], czyli «sz» ([ˈkyːlʃʁaŋk]); w <i>Sofa</i> akcent pada na <b>o</b>, które jest długie."
      },
      {
        tr: "Szukam jasnego mieszkania z dużym balkonem.",
        why: "W <i>großen</i> <b>ß</b> to bezdźwięczne <b>s</b>; <i>einem großen Balkon</i> to celownik po <i>mit</i>, więc <b>-en</b>."
      }
    ]
  },
  "unit:a2-u06": {
    title: "W biurze",
    grammarNote: "Könnten Sie ...? · pytania zależne z ob i wyrazem pytajnym · list oficjalny · man · zuerst, dann, danach, außerdem"
  },
  "lesson:a2-u06-l1": {
    theme: "Przez telefon",
    title: "Czy mógłby Pan do mnie oddzwonić?",
    objectives: [
      "zadzwonić i zostawić wiadomość z użyciem Könnten Sie ...?",
      "zadać pytanie zależne z ob albo z wyrazem pytajnym",
      "przesunąć czasownik na koniec w zdaniu z ob, wann, wo i dass"
    ],
    theory: [
      {
        h: "Prośba o oddzwonienie i zostawienie wiadomości",
        p: "Przez telefon, do osoby, której nie znasz, używasz formy grzecznościowej: <em>Guten Tag, hier ist Weber. Könnten Sie mich bitte zurückrufen?</em> Żeby zostawić wiadomość: <em>Könnten Sie Frau Keller etwas ausrichten?</em> Osoba odbierająca mówi zwykle <em>Ich verbinde Sie</em> (łączę Pana/Panią) albo <em>Frau Keller ist gerade nicht am Platz</em> (nie ma jej w tej chwili przy biurku). <em>Zurückrufen</em> i <em>ausrichten</em> to czasowniki rozdzielnie złożone: w bezokoliczniku, po <em>Könnten Sie ...</em>, zostają w całości i idą na koniec zdania."
      },
      {
        h: "Pytania zależne: ob i zaimek pytajny",
        p: "Pytanie może wejść do środka innego zdania. Jeśli pytanie bezpośrednie jest <strong>rozstrzygnięcia</strong> (tak/nie, <em>Ist Herr Weber im Büro?</em>), pytanie zależne wprowadza <strong>ob</strong>; jeśli ma <strong>wyraz pytajny</strong> (<em>wann, wo, wer, wie, warum</em>), ten wyraz zostaje i otwiera zdanie podrzędne. W obu przypadkach odmieniony czasownik idzie <strong>na koniec</strong>, a przed zdaniem stoi przecinek: <em>Ich möchte wissen, ob Herr Weber heute im Büro ist. Ich weiß nicht, wann die Besprechung beginnt. Könnten Sie mir sagen, wo Frau Keller ist?</em> Przy czasowniku rozdzielnie złożonym przedrostek łączy się z czasownikiem: <em>Ich weiß nicht, wann er anruft.</em> To samo dotyczy <strong>dass</strong>: <em>Könnten Sie ihr sagen, dass ich morgen wieder anrufe?</em>"
      },
      {
        contrast: "Przecinek przed zdaniem zależnym jest w polskim tak samo obowiązkowy jak w niemieckim: «Nie wiem, kiedy zaczyna się zebranie», «Nie wiem, czy pan Weber jest w biurze», «Powiedz jej, że zadzwonię jutro». Polskie <em>czy</em> odpowiada <em>ob</em>, a <em>jeśli</em> odpowiada <em>wenn</em>, więc tu nie ma pułapki: oba języki je rozróżniają. Różnica jest w szyku. Po polsku szyk jest swobodny i czasownik nie ma stałego miejsca (<em>kiedy zaczyna się zebranie</em>, <em>kiedy zebranie się zaczyna</em>), a w niemieckim zdaniu podrzędnym odmieniony czasownik zawsze stoi na końcu: <em>Ich weiß nicht, wann die Besprechung beginnt</em>, nie «wann beginnt die Besprechung». Druga różnica to grzeczność: polski mówi «Czy mógłby Pan ...?» albo «Czy mogłaby Pani ...?» i forma zależy od rodzaju adresata, a w niemieckim <em>Könnten Sie</em> jest jedno dla wszystkich, z czasownikiem w 3. osobie liczby <strong>mnogiej</strong>."
      },
      {
        trap: "W pytaniach zależnych typu tak/nie używa się <em>ob</em>, a nie <em>wenn</em>: <em>Ich weiß nicht, ob er kommt</em>. Przecinek przed <em>ob</em>, <em>dass</em> i wyrazem pytajnym jest obowiązkowy. Po <em>Könnten Sie mir sagen</em> pytanie zależne nie jest już pytaniem bezpośrednim: <em>Könnten Sie mir sagen, wo Frau Keller ist?</em>, nie «wo ist Frau Keller». Po polsku bezokolicznik nie ma stałego miejsca na końcu zdania: <em>Czy mógłby Pan do mnie oddzwonić?</em> W niemieckim po <em>Könnten Sie</em> bezokolicznik zamyka zdanie: <em>Könnten Sie mich bitte zurückrufen?</em>"
      },
      {
        tip: "Inne przydatne zwroty: <em>Die Leitung ist besetzt</em> (linia jest zajęta), <em>Ich erreiche ihn nicht</em> (nie mogę się z nim skontaktować), <em>Wie ist Ihre Telefonnummer?</em>. W formie grzecznościowej zostajesz przy <em>Sie</em> od początku do końca rozmowy."
      }
    ],
    grammar: {
      title: "Könnten Sie ...? i pytania zależne",
      note: "<b>Könnten Sie</b> + bezokolicznik na końcu. Pytanie zależne: <b>ob</b> albo zaimek pytajny, a odmieniony czasownik <b>na końcu</b>. Z <b>dass</b> (twierdzenie, nie pytanie) czasownik też idzie na koniec: <i>Ich rufe morgen wieder an</i> zamienia się w <i>..., dass ich morgen wieder anrufe.</i>",
      table: {
        head: ["pytanie bezpośrednie", "pytanie zależne", "wprowadza"],
        rows: [
          ["Ist Herr Weber im Büro?", "..., ob Herr Weber im Büro ist.", "ob (tak/nie)"],
          ["Wann beginnt die Besprechung?", "..., wann die Besprechung beginnt.", "wann"],
          ["Wo ist Frau Keller?", "..., wo Frau Keller ist.", "wo"]
        ]
      },
      examples: [
        { tr: "Czy mógłby Pan do mnie oddzwonić, proszę?", note: "zurückrufen zostaje w całości, na końcu" },
        { tr: "Czy mógłby Pan coś przekazać pani Keller?", note: "ausrichten, na końcu" },
        { tr: "Chciałbym wiedzieć, czy pan Weber jest dziś w biurze.", note: "ob: czasownik ist idzie na koniec" },
        { tr: "Nie wiem, kiedy zaczyna się zebranie.", note: "wann: czasownik beginnt idzie na koniec" },
        { tr: "Czy mógłby Pan powiedzieć mi, gdzie jest pani Keller?", note: "wo: czasownik ist idzie na koniec" },
        { tr: "Czy mógłby Pan jej powiedzieć, że jutro zadzwonię ponownie?", note: "dass: anrufe się łączy" }
      ]
    },
    vocab: [
      "dzwonić, telefonować",
      "oddzwonić",
      "wiadomość",
      "przekazać (wiadomość)",
      "numer wewnętrzny",
      "połączyć (z kimś)",
      "automatyczna sekretarka",
      "dodzwonić się, skontaktować się",
      "zajęty",
      "numer telefonu",
      "termin, spotkanie",
      "linia"
    ],
    exercises: [
      {
        q: "Jak grzecznie prosisz, żeby ktoś do ciebie oddzwonił?",
        opts: [
          "Könnten Sie mich bitte zurückrufen?",
          "Könnten Sie zurückrufen mich bitte?",
          "Könnten Sie mich bitte zurückrufe?"
        ],
        why: "<i>Könnten Sie</i> + dopełnienia + <b>cały</b> bezokolicznik na końcu: <i>zurückrufen</i>."
      },
      {
        tr: "Cała odmiana czasownika können w Konjunktiv II.",
        why: "<i>könnte, könntest, könnte, könnten, könntet, könnten</i>: <b>ö</b> z umlautem i <b>-e-</b> w Konjunktiv II. <i>Ich</i> i <i>er/sie/es</i> mają tę samą formę, a przy <i>Sie</i> używa się <b>könnten</b>."
      },
      {
        q: "Uzupełnij: «Ich weiß nicht, ___ Herr Weber heute im Büro ist.» (czy)",
        hint: "pytanie rozstrzygnięcia (tak/nie)",
        why: "Pytanie tak/nie staje się zależne dzięki <b>ob</b>, a czasownik <i>ist</i> idzie na koniec."
      },
      {
        q: "Uzupełnij: «Ich möchte wissen, ___ die Besprechung beginnt.» (kiedy)",
        hint: "zaimek pytajny",
        why: "<b>wann</b> jest wyrazem pytajnym i zostaje: <i>..., wann die Besprechung beginnt</i>."
      },
      {
        q: "Dopasuj każde słowo do jego znaczenia.",
        pairs: ["dzwonić", "wiadomość", "numer wewnętrzny", "zajęty"]
      },
      {
        tr: "Czy mógłby Pan do mnie oddzwonić, proszę?",
        why: "<i>Könnten Sie mich bitte zurückrufen</i>: cały bezokolicznik zamyka zdanie. Pasuje też <i>Könnten Sie mich zurückrufen, bitte</i>."
      },
      {
        q: "Uzupełnij zdanie.",
        tr: "Czy mógłby Pan coś przekazać panu Weberowi? Chciałbym wiedzieć, czy jest w biurze.",
        why: "<i>Etwas ausrichten</i>: bezokolicznik zostaje w całości, na końcu. <i>Wissen, ob ...</i>: pytanie tak/nie staje się zależne dzięki <b>ob</b>."
      },
      {
        q: "Rozmawiasz przez telefon z firmą.",
        setting: "Dzwonisz, żeby porozmawiać z panią Keller.",
        lines: [
          { tr: "Firma Brandt, dzień dobry." },
          {
            tr: "Przedstaw się i poproś o połączenie z panią Keller.",
            answerTr: "Dzień dobry, mówi Weber. Czy mógłby mnie Pan połączyć z panią Keller?"
          },
          { tr: "Pani Keller nie ma teraz przy biurku. Mam jej coś przekazać?" },
          {
            tr: "Odpowiedz, że tak, i poproś o przekazanie, że zadzwonisz jutro.",
            answerTr: "Tak, dziękuję. Czy mógłby Pan jej powiedzieć, że jutro zadzwonię ponownie?"
          }
        ]
      },
      {
        tr: "Dzień dobry, mówi Weber. Czy mógłby Pan do mnie oddzwonić, proszę? Chciałbym wiedzieć, czy termin jest w poniedziałek.",
        why: "W <i>zurückrufen</i> akcent pada na <b>rück</b> (krótkie <b>ü</b> [ʏ], to nie polskie <b>y</b>); w <i>Könnten</i> <b>ö</b> jest krótkie i otwarte [œ]; <i>Weber</i> zaczyna się od <b>w</b> = [v], jak po polsku."
      },
      {
        tr: "Czy mógłby Pan powiedzieć pani Keller, że jutro zadzwonię ponownie?",
        why: "W <i>wieder</i> <b>ie</b> to długie <b>i</b> [iː], a początkowe <b>w</b> czyta się [v]; w <i>anrufe</i> akcent pada na <b>an</b>, a czasownik stoi na końcu po <i>dass</i>."
      }
    ]
  },
  "lesson:a2-u06-l2": {
    theme: "Pisanie e-maila",
    title: "Szanowna Pani Keller",
    objectives: [
      "rozpocząć i zakończyć oficjalny e-mail formułami Sehr geehrte Frau ... i Mit freundlichen Grüßen",
      "pisać formy grzecznościowe Sie, Ihr, Ihnen wielką literą",
      "poprosić o potwierdzenie z użyciem Könnten Sie ...?"
    ],
    theory: [
      {
        h: "Początek i koniec oficjalnego e-maila",
        p: "Oficjalny e-mail ma stałą formułę. Na początku: <strong>Sehr geehrte Frau Keller,</strong> do kobiety, <strong>Sehr geehrter Herr Weber,</strong> do mężczyzny, <strong>Sehr geehrte Damen und Herren,</strong> do kilku osób albo do nieznanego adresata. Pisze się <em>Frau</em> albo <em>Herr</em> i nazwisko, bez imienia. Na końcu: <strong>Mit freundlichen Grüßen</strong> i pod spodem imię i nazwisko, bez przecinka po formule. Treść jest krótka: <em>Vielen Dank für Ihre E-Mail. Im Anhang finden Sie die Datei. Könnten Sie mir den Termin bitte bestätigen?</em>"
      },
      {
        contrast: "Polski zaczyna od <em>Szanowna Pani Keller,</em> albo <em>Szanowny Panie,</em> i kończy <em>Z poważaniem</em> albo <em>Z wyrazami szacunku</em>. Niemieckie <em>Sehr geehrte</em> (dosłownie «bardzo szanowna») jest przymiotnikiem bez rodzajnika, więc ma <strong>-e</strong> przy <em>Frau</em> i <strong>-er</strong> przy <em>Herr</em>, podobnie jak polskie <em>Szanowna</em> i <em>Szanowny</em> zgadzają się z adresatem. Niemieckie <em>Mit freundlichen Grüßen</em> znaczy dosłownie «z przyjaznymi pozdrowieniami» i stoi w celowniku liczby mnogiej po <em>mit</em>, tak jak polskie «z» wymaga narzędnika. Po przecinku formuły zwracania się następny wiersz zaczyna się zwykle małą literą (<em>..., vielen Dank für ...</em>), chyba że pierwszym słowem jest rzeczownik. Do dorosłej kobiety zawsze <em>Frau</em>: <em>Fräulein</em> uchodzi za przestarzałe. Przy <em>du</em> zaczynasz od <em>Liebe Anna,</em> lub <em>Lieber Tim,</em> i kończysz <em>Viele Grüße</em>."
      },
      {
        trap: "Zasada wielkiej litery jest ta sama co w polskich listach: w oficjalnym e-mailu <em>Sie</em>, <em>Ihr</em>, <em>Ihre</em> i <em>Ihnen</em> pisze się wielką literą, tak jak polskie <em>Pan, Pani, Państwo</em>, i to odróżnia «Pan, Pański» od <em>sie</em> i <em>ihre</em> (ona, oni; jej, ich). Uwaga na czasownik: przy <em>Sie</em> idzie w 3. osobie liczby <strong>mnogiej</strong> (<em>Sie finden</em>), a nie w 3. osobie liczby pojedynczej jak po polsku (<em>Pan znajdzie</em>). <em>Mit freundlichen Grüßen</em> jest w liczbie mnogiej i w celowniku: nie pisze się «Mit freundliche Gruß»."
      },
      {
        tip: "Inne formuły: <em>Vielen Dank für Ihre schnelle Antwort</em>, <em>Im Anhang finden Sie ...</em>, <em>Könnten Sie ...?</em> W temacie (<em>Betreff</em>) wystarczy kilka słów, na przykład <em>Termin am Montag</em>."
      }
    ],
    grammar: {
      title: "Rejestr oficjalny: e-mail",
      note: "Początek <b>Sehr geehrte Frau</b> / <b>Sehr geehrter Herr</b> + nazwisko; zakończenie <b>Mit freundlichen Grüßen</b>. <b>Sie, Ihre, Ihnen</b> wielką literą.",
      table: {
        head: ["część e-maila", "formuła", "znaczenie"],
        rows: [
          ["początek (kobieta)", "Sehr geehrte Frau Keller,", "Szanowna Pani Keller"],
          ["początek (mężczyzna)", "Sehr geehrter Herr Weber,", "Szanowny Panie Weber"],
          ["początek (kilka osób)", "Sehr geehrte Damen und Herren,", "Szanowni Państwo"],
          ["treść", "Vielen Dank für Ihre E-Mail.", "Dziękuję za Pani/Pana e-mail"],
          ["zakończenie", "Mit freundlichen Grüßen", "Z poważaniem"]
        ]
      },
      examples: [
        { tr: "Szanowna Pani Keller,", note: "Frau: geehrt + e" },
        { tr: "Szanowny Panie Weber,", note: "Herr: geehrt + er" },
        { tr: "Dziękuję za Pani e-mail.", note: "Ihre wielką literą" },
        { tr: "W załączniku znajdzie Pani plik.", note: "czasownik na drugim miejscu: finden Sie" },
        { tr: "Czy mogłaby Pani potwierdzić mi termin, proszę?", note: "Könnten Sie ... bestätigen" },
        { tr: "Z poważaniem", note: "Grüßen, liczba mnoga i celownik" }
      ]
    },
    vocab: [
      "e-mail",
      "temat (e-maila)",
      "zwrot na początku listu",
      "pozdrowienie, formuła końcowa",
      "załącznik",
      "plik",
      "nadawca",
      "wysłać",
      "załączyć",
      "potwierdzić",
      "uprzejmy, serdeczny",
      "oficjalny"
    ],
    exercises: [
      {
        q: "Który początek jest poprawny w e-mailu do pani?",
        opts: ["Sehr geehrter Frau Keller,", "Sehr geehrte Frau Keller,", "Sehr geehrt Frau Keller,"],
        why: "<i>Frau</i> jest rodzaju żeńskiego, więc przymiotnik ma <b>-e</b>: <i>Sehr geehrte Frau Keller,</i>. Przy <i>Herr</i> byłoby <i>geehrter</i>."
      },
      {
        q: "Które zakończenie jest poprawne?",
        opts: ["Mit freundlichen Grüßen", "Mit freundliche Grüße", "Mit freundlichem Grüßen"],
        why: "<i>Mit</i> wymaga celownika, a <i>Grüße</i> jest w liczbie mnogiej: <b>Mit freundlichen Grüßen</b>."
      },
      {
        q: "Uzupełnij: «Sehr ___ Herr Weber,» (geehrt, z końcówką)",
        hint: "rodzaj męski, bez rodzajnika",
        why: "Przy <i>Herr</i> przymiotnik bez rodzajnika ma <b>-er</b>: <i>Sehr geehrter Herr Weber,</i>."
      },
      {
        q: "Uzupełnij: «Vielen Dank für ___ E-Mail.» (Pani/Pana, wielką literą)",
        hint: "forma grzecznościowa",
        why: "<b>Ihre</b> wielką literą to zaimek dzierżawczy grzecznościowy: Pani/Pana. <i>Ihre</i>, <i>Ihr</i> i <i>Ihnen</i> pisze się tak w oficjalnych e-mailach."
      },
      {
        q: "Dopasuj każde słowo do jego znaczenia.",
        pairs: ["temat", "załącznik", "nadawca", "plik"]
      },
      {
        tr: "W załączniku znajdzie Pani plik.",
        why: "<i>Im Anhang finden Sie die Datei</i>: czasownik stoi na drugim miejscu. Pasują też <i>Sie finden im Anhang die Datei</i>, <i>Sie finden die Datei im Anhang</i> i <i>Die Datei finden Sie im Anhang</i>."
      },
      {
        tr: "Szanowna Pani Keller, dziękuję za Pani e-mail.",
        why: "<i>Sehr geehrte Frau Keller, vielen Dank für Ihre E-Mail</i>. Pasuje też <i>herzlichen Dank</i> albo <i>danke</i>; <i>Ihre</i> pisze się wielką literą."
      },
      {
        q: "Uzupełnij zdanie.",
        tr: "Szanowna Pani Keller, dziękuję za Pani e-mail. Z poważaniem",
        why: "<i>Sehr geehrte</i> (rodzaj żeński), <i>Ihre</i> (Pani, wielką literą) i <i>Mit freundlichen Grüßen</i> (celownik liczby mnogiej)."
      },
      {
        tr: "Szanowna Pani Keller, dziękuję za Pani e-mail. W załączniku znajdzie Pani plik. Z poważaniem",
        why: "W <i>Grüßen</i> <b>ü</b> jest długie [yː] (to nie polskie <b>y</b>), a <b>ß</b> to bezdźwięczne <b>s</b>; w <i>geehrte</i> sylaba <b>ge</b> jest słaba, a akcent pada na <b>ehr</b>, z długim <b>e</b>."
      },
      {
        tr: "Czy mogłaby Pani potwierdzić mi termin, proszę?",
        why: "W <i>Termin</i> akcent pada na ostatnią sylabę, z długim <b>i</b>; w <i>bestätigen</i> <b>st</b> po <b>be-</b> czyta się [ʃt], a akcent pada na <b>stä</b>."
      }
    ]
  },
  "lesson:a2-u06-l3": {
    theme: "Zwyczaje w biurze",
    title: "U nas robi się tak",
    objectives: [
      "używać man z czasownikiem w 3. osobie liczby pojedynczej",
      "opisywać zasady i zwyczaje w miejscu pracy",
      "używać man z muss, darf i kann"
    ],
    theory: [
      {
        h: "man: podmiot nieokreślony",
        p: "<strong>man</strong> oznacza dowolną osobę, ludzi w ogóle, i służy do opisywania zasad i zwyczajów: <em>Bei uns beginnt man um acht Uhr. Hier duzt man sich. In der Mittagspause isst man in der Kantine.</em> Czasownik stoi w <strong>3. osobie liczby pojedynczej</strong>, choć sens jest zbiorowy. Czasowniki ze zmianą samogłoski ją zachowują: <em>man isst, man liest, man fährt, man spricht</em>. Z czasownikami modalnymi: <em>man muss, man darf, man kann</em>: <em>Hier darf man nicht rauchen. Man muss pünktlich sein.</em> Częste pytanie: <em>Wie sagt man das auf Deutsch?</em>"
      },
      {
        contrast: "Polski nie ma jednego słowa jak <em>man</em>. Zwykle używa formy ze <em>się</em> (<em>Tutaj się nie pali</em>, <em>Jak się to mówi po niemiecku?</em>, <em>W Niemczech je się wcześnie</em>), trzeciej osoby liczby mnogiej (<em>Tutaj pracują do piątej</em>), bezokolicznika (<em>Nie wolno palić</em>, <em>Trzeba być punktualnym</em>) albo drugiej osoby (<em>Tu zaczynasz o ósmej</em>). Polskie formy na <em>-no/-to</em> (<em>mówiono</em>) dotyczą czasu przeszłego, więc zasadę biurową wyraża się raczej przez <em>się</em>. W niemieckim wszystkie te sposoby oddaje <em>man</em>, które jest zawsze podmiotem i musi stać w zdaniu: <em>Hier arbeitet man bis fünf Uhr</em>, bo polskie «Tu się pracuje do piątej» nie ma w zdaniu żadnego podmiotu, a w tym zdaniu niemieckim jest on potrzebny. Polskie «się» robi tu za wszystko naraz, a po niemiecku mówimy <em>man</em> i, gdy czasownik jest zwrotny, jeszcze <em>sich</em>: <em>Hier duzt man sich</em>."
      },
      {
        trap: "<em>man</em> to nie <em>der Mann</em> (mężczyzna): <em>man</em> ma jedno <strong>n</strong> i pisze się małą literą. Czasownik zostaje w 3. osobie liczby pojedynczej: <em>man sagt</em>, nie «man sagen», a z modalnymi <em>man muss</em>, nie «man müssen». Uważaj na modalne: polskie «nie wolno palić» odpowiada <em>man darf nicht rauchen</em> (zakaz), a <em>man kann nicht rauchen</em> mówiłoby, że palenie jest niemożliwe, a nie zabronione. Polskie «można» obejmuje i pozwolenie, i możliwość, a niemiecki ma dwa czasowniki: <em>darf</em> i <em>kann</em>. «Trzeba» to <em>man muss</em>."
      },
      {
        tip: "Zasadę biurową zaczynasz od <em>Hier</em>, <em>Bei uns</em> albo <em>In der Firma</em>; czasownik zostaje na drugim miejscu: <em>Bei uns beginnt man um acht Uhr.</em> Na «ty» i «Pan/Pani»: <em>duzen</em> i <em>siezen</em>: <em>Den Chef siezt man hier.</em>"
      }
    ],
    grammar: {
      title: "man + 3. osoba liczby pojedynczej",
      note: "<b>man</b> jest zawsze podmiotem; czasownik zostaje w <b>3. osobie liczby pojedynczej</b>: <b>man isst, man muss, man darf</b>.",
      table: {
        head: ["czasownik", "z man", "przykład"],
        rows: [
          ["essen", "man isst", "In der Kantine isst man warm."],
          ["sagen", "man sagt", "Wie sagt man das auf Deutsch?"],
          ["müssen", "man muss", "Man muss pünktlich sein."],
          ["dürfen", "man darf", "Hier darf man nicht rauchen."],
          ["duzen", "man duzt sich", "Hier duzt man sich."]
        ]
      },
      examples: [
        { tr: "Tutaj mówimy sobie na ty.", note: "man duzt sich: 3. osoba liczby pojedynczej" },
        { tr: "U nas zaczyna się o ósmej.", note: "inwersja po Bei uns: beginnt man" },
        { tr: "W przerwie obiadowej je się w stołówce.", note: "essen zmienia samogłoskę: man isst" },
        { tr: "Tutaj nie wolno palić.", note: "man darf, z nicht" },
        { tr: "Jak się to mówi po niemiecku?", note: "man sagt, nie man sagen" },
        { tr: "Trzeba być punktualnym.", note: "man muss" }
      ]
    },
    vocab: [
      "biuro",
      "kolega z pracy",
      "koleżanka z pracy",
      "szef",
      "przerwa obiadowa",
      "stołówka",
      "drukarka",
      "godziny pracy",
      "punktualny",
      "mówić sobie na ty",
      "mówić do kogoś per Pan/Pani",
      "zwyczajowy, przyjęty"
    ],
    exercises: [
      {
        q: "Które zdanie jest poprawne?",
        opts: [
          "Hier arbeiten man bis fünf Uhr.",
          "Hier arbeitet man bis fünf Uhr.",
          "Hier arbeitest man bis fünf Uhr."
        ],
        why: "Z <i>man</i> czasownik stoi w 3. osobie liczby pojedynczej: <b>arbeitet</b>."
      },
      {
        q: "Jak powiesz «W Niemczech je się wcześnie»?",
        opts: [
          "In Deutschland isst man früh.",
          "In Deutschland essen man früh.",
          "In Deutschland esst man früh."
        ],
        why: "<i>Essen</i> zmienia samogłoskę w 3. osobie liczby pojedynczej: <i>er isst</i>, więc <b>man isst</b>."
      },
      {
        q: "Które zdania są poprawne?",
        opts: [
          "Man darf hier nicht rauchen.",
          "Man muss pünktlich sein.",
          "Man müssen pünktlich sein.",
          "Wie sagt man das auf Deutsch?",
          "Man fahren mit dem Bus."
        ],
        why: "Z <i>man</i> także czasownik modalny stoi w 3. osobie liczby pojedynczej: <i>man muss</i>, nie «man müssen». <i>Man fahren</i> jest błędne: trzeba <i>man fährt</i>."
      },
      {
        q: "Uzupełnij: «In der Kantine ___ man mittags warm.» (essen)",
        hint: "3. osoba liczby pojedynczej, zmienia się samogłoska",
        why: "<b>isst</b>: <i>essen</i> zmienia <i>e</i> w <i>i</i>, a po <i>man</i> używa się tej formy."
      },
      {
        q: "Uzupełnij: «Wie ___ man das auf Deutsch?» (sagen)",
        hint: "3. osoba liczby pojedynczej",
        why: "<b>sagt</b>: <i>man</i> wymaga 3. osoby liczby pojedynczej."
      },
      {
        tr: "U nas zaczyna się o ósmej.",
        why: "<i>Bei uns beginnt man um acht Uhr</i>. Pasują też <i>Man beginnt bei uns um acht Uhr</i> i <i>Um acht Uhr beginnt man bei uns</i>: czasownik zostaje na drugim miejscu."
      },
      {
        tr: "Tutaj mówimy sobie na ty.",
        why: "<i>Hier duzt man sich</i>. Pasuje też <i>Man duzt sich hier</i>. <i>Sich</i> to zaimek zwrotny przy <i>man</i>."
      },
      {
        q: "Uzupełnij zdanie.",
        tr: "Tutaj trzeba być punktualnym i nie wolno palić.",
        why: "<i>Hier muss man pünktlich sein, und man darf nicht rauchen.</i> Dla «nie wolno palić» (zakaz) niemiecki mówi <i>man darf nicht rauchen</i>. <i>Man kann nicht rauchen</i> mówiłoby raczej, że palenie jest niemożliwe, a nie zabronione."
      },
      {
        tr: "U nas zaczyna się o ósmej. W przerwie obiadowej je się w stołówce. Tutaj mówimy sobie na ty.",
        why: "W <i>isst</i> <b>ss</b> to bezdźwięczne <b>s</b>, a <b>i</b> jest krótkie; w <i>Kantine</i> akcent pada na <b>ti</b>, z długim <b>i</b> [kanˈtiːnə]."
      },
      {
        tr: "Tutaj trzeba być punktualnym, a w biurze nie wolno palić.",
        why: "W <i>pünktlich</i> <b>ü</b> jest krótkie [ʏ], <b>n</b> przed <b>k</b> jest nosowym welarnym [ŋ], a końcowe <b>ch</b> po <b>i</b> to [ç]."
      }
    ]
  },
  "lesson:a2-u06-l4": {
    theme: "Zebranie",
    title: "Na zebraniu",
    objectives: [
      "porządkować wypowiedzi za pomocą zuerst, dann, danach i außerdem",
      "stawiać czasownik zaraz po tych słowach, przed podmiotem",
      "złożyć propozycję i wyrazić zgodę"
    ],
    theory: [
      {
        h: "zuerst, dann, danach, außerdem",
        p: "<strong>zuerst</strong> (najpierw), <strong>dann</strong> (potem), <strong>danach</strong> (po tym, następnie) i <strong>außerdem</strong> (poza tym) mogą otwierać zdanie. Gdy stoją na <strong>pierwszym miejscu</strong>, odmieniony czasownik następuje <strong>zaraz po nich</strong>, a podmiot po nim: <em>Zuerst besprechen wir die Tagesordnung. Dann diskutieren wir den Vorschlag. Danach schreibt Anna das Protokoll. Außerdem brauchen wir einen neuen Drucker.</em> Mogą też stać dalej, po podmiocie: <em>Wir besprechen zuerst die Tagesordnung.</em> Przy propozycji: <em>Ich schlage vor, dass wir einen neuen Termin machen.</em> Przy zgodzie: <em>Ich bin einverstanden. Ich stimme zu.</em>"
      },
      {
        contrast: "Po polsku <em>najpierw, potem, następnie, poza tym</em> nie wymuszają żadnego szyku: «Najpierw omawiamy porządek obrad», «Najpierw my omawiamy», «Najpierw porządek obrad omawiamy» są poprawne, a podmiot można w ogóle pominąć. W niemieckim, gdy te słowa otwierają zdanie, odmieniony czasownik zostaje na drugim miejscu: <em>Zuerst besprechen wir ...</em>, nie «Zuerst wir besprechen». I zaimka nie wolno opuścić: <em>wir</em> musi być. Uwaga na «przed» i «po»: «najpierw» to <em>zuerst</em>, ale «przed zebraniem» to <em>vor der Besprechung</em> (<em>vor</em> + celownik), a «po zebraniu» to <em>nach der Besprechung</em>, podczas gdy przysłówek «potem» to <em>danach</em> albo <em>dann</em>. Spójnik «zanim» to z kolei <em>bevor</em>."
      },
      {
        trap: "Z <em>zuerst, dann, danach, außerdem</em> na początku <em>wir besprechen</em> zamienia się w <em>besprechen wir</em>. Czasownik rozdzielnie złożony pozostaje rozdzielony: <em>Danach fängt Anna an.</em> Po <em>dass</em> natomiast odmieniony czasownik idzie na koniec: <em>Ich schlage vor, dass wir einen neuen Termin machen.</em> Po <em>glauben</em> i <em>meinen</em> można też pominąć <em>dass</em>, a wtedy czasownik wraca na drugie miejsce: <em>Ich meine, wir machen einen neuen Termin.</em>"
      },
      {
        tip: "Żeby grzecznie się nie zgodzić: <em>Das sehe ich anders.</em> Żeby poprosić o głos albo przerwę: <em>Ich habe eine Frage. Könnten wir eine Pause machen?</em> Listę w trzech krokach buduje się z <em>zuerst, dann, danach</em>, a <em>außerdem</em> dodaje jeszcze jeden punkt."
      }
    ],
    grammar: {
      title: "zuerst, dann, danach, außerdem: czasownik zaraz po nich",
      note: "Z <b>zuerst, dann, danach, außerdem</b> na pierwszym miejscu odmieniony czasownik stoi na <b>drugim miejscu</b>, a podmiot po nim.",
      table: {
        head: ["słowo", "znaczenie", "przykład"],
        rows: [
          ["zuerst", "najpierw", "Zuerst besprechen wir die Tagesordnung."],
          ["dann", "potem", "Dann diskutieren wir den Vorschlag."],
          ["danach", "po tym, następnie", "Danach schreibt Anna das Protokoll."],
          ["außerdem", "poza tym", "Außerdem brauchen wir einen neuen Drucker."]
        ]
      },
      examples: [
        { tr: "Najpierw rozmawiamy o porządku obrad.", note: "zuerst: czasownik + podmiot" },
        { tr: "Potem omawiamy propozycję.", note: "dann: diskutieren wir" },
        { tr: "Następnie Anna pisze protokół.", note: "danach: schreibt Anna" },
        { tr: "Poza tym potrzebujemy nowej drukarki.", note: "außerdem: brauchen wir" },
        { tr: "Proponuję ustalić nowy termin.", note: "dass: czasownik idzie na koniec" },
        { tr: "Zgadzam się.", note: "einverstanden z sein" }
      ]
    },
    vocab: [
      "zebranie, narada",
      "propozycja",
      "porządek obrad",
      "wynik",
      "protokół",
      "punkt",
      "proponować",
      "zgadzać się, przyznawać rację",
      "zgadzający się (einverstanden sein = zgadzać się)",
      "najpierw, przede wszystkim",
      "po tym, następnie",
      "poza tym"
    ],
    exercises: [
      {
        q: "Które zdanie jest poprawne?",
        opts: [
          "Zuerst wir besprechen die Tagesordnung.",
          "Zuerst besprechen wir die Tagesordnung.",
          "Zuerst wir die Tagesordnung besprechen."
        ],
        why: "Z <i>zuerst</i> na pierwszym miejscu czasownik następuje zaraz po nim, potem podmiot: <b>Zuerst besprechen wir ...</b>."
      },
      {
        q: "Uzupełnij: «Zuerst besprechen wir die Tagesordnung, ___ diskutieren wir den Vorschlag.» (potem)",
        hint: "dwa możliwe słowa",
        why: "Pasują <b>dann</b> i <b>danach</b>: oba otwierają zdanie, a czasownik następuje zaraz po nich."
      },
      {
        q: "Uzupełnij: «Außerdem ___ wir einen neuen Drucker.» (brauchen)",
        hint: "czas teraźniejszy, wir",
        why: "<b>brauchen</b>: po <i>außerdem</i> czasownik stoi na drugim miejscu, potem <i>wir</i>."
      },
      {
        q: "Dopasuj każde słowo do jego znaczenia.",
        pairs: ["propozycja", "porządek obrad", "wynik", "protokół"]
      },
      {
        tr: "Potem Anna pisze protokół.",
        why: "<i>Danach schreibt Anna das Protokoll</i>: czasownik następuje zaraz po <i>danach</i>. Pasują też <i>Anna schreibt danach das Protokoll</i>, <i>Anna schreibt das Protokoll danach</i> i <i>Das Protokoll schreibt Anna danach</i>."
      },
      {
        tr: "Poza tym mam pytanie.",
        why: "<i>Außerdem habe ich eine Frage</i>: czasownik stoi przed podmiotem. Pasuje też <i>Ich habe außerdem eine Frage</i>."
      },
      {
        q: "Uzupełnij zdanie.",
        tr: "Najpierw rozmawiamy o propozycji. Potem Anna pisze protokół.",
        why: "<i>Zuerst besprechen wir den Vorschlag. Dann schreibt Anna das Protokoll.</i> Dla «potem» pasują <i>dann</i> i <i>danach</i>."
      },
      {
        q: "Jesteś na zebraniu.",
        setting: "Szef pyta cię, jak zacząć.",
        lines: [
          { tr: "Dzień dobry! Dzisiaj mamy dużo pracy. Jak zaczynamy?" },
          {
            tr: "Odpowiedz, że najpierw rozmawiacie o porządku obrad.",
            answerTr: "Najpierw rozmawiamy o porządku obrad."
          },
          { tr: "Dobrze. A potem?" },
          {
            tr: "Odpowiedz, że potem omawiacie propozycję pana Webera.",
            answerTr: "Potem omawiamy propozycję pana Webera."
          }
        ]
      },
      {
        tr: "Najpierw rozmawiamy o porządku obrad. Potem omawiamy propozycję. Poza tym Anna pisze protokół.",
        why: "W <i>Besprechung</i> <b>sp</b> po <b>Be-</b> czyta się [ʃp], a <b>ch</b> to [ç]; w <i>Protokoll</i> akcent pada na ostatnią sylabę; w <i>außerdem</i> <b>ß</b> to bezdźwięczne <b>s</b>."
      },
      {
        tr: "Proponuję omówić najpierw porządek obrad.",
        why: "W <i>vor</i> <b>v</b> czyta się [f], a w <i>schlage</i> <b>sch</b> to [ʃ] (jak polskie <b>sz</b>); <i>zuerst</i> czyta się [tsuˈʔeːɐ̯st], z <b>z</b> = [ts] (jak polskie <b>c</b>)."
      }
    ]
  },
  "lesson:a2-u06-test": {
    theme: "Sprawdzian",
    title: "Test: W biurze",
    objectives: ["sprawdzić uprzejme prośby, pytania zależne, list oficjalny, man i spójniki kolejności"],
    theory: [
      {
        p: "Dziesięć pytań z całej jednostki. Zaliczasz przy 70%. Nie zaglądaj do lekcji w trakcie odpowiadania: jeśli czegoś nie pamiętasz, lepiej wrócić i powtórzyć."
      }
    ],
    exercises: [
      {
        tr: "Odmień können w Konjunktiv II: du, wir, ihr.",
        why: "<i>könntest, könnten, könntet</i>: <b>ö</b> z umlautem i <b>-e-</b> w Konjunktiv II."
      },
      {
        q: "Uzupełnij: «Ich weiß nicht, ___ Herr Weber im Büro ist.» (czy)",
        hint: "pytanie rozstrzygnięcia (tak/nie)",
        why: "Pytanie tak/nie staje się zależne dzięki <b>ob</b>, a czasownik idzie na koniec."
      },
      {
        q: "Uzupełnij: «Hier ___ man pünktlich sein.» (müssen)",
        hint: "3. osoba liczby pojedynczej",
        why: "<b>muss</b>: z <i>man</i> czasownik modalny stoi w 3. osobie liczby pojedynczej."
      },
      {
        q: "Uzupełnij: «Sehr ___ Frau Keller,» (geehrt, z końcówką)",
        hint: "rodzaj żeński, bez rodzajnika",
        why: "Przy <i>Frau</i> przymiotnik bez rodzajnika ma <b>-e</b>: <i>geehrte</i>."
      },
      {
        q: "Uzupełnij: «Zuerst ___ wir die Tagesordnung.» (besprechen)",
        hint: "czasownik przed podmiotem",
        why: "Po <i>zuerst</i> następuje czasownik, potem podmiot: <b>besprechen wir</b>."
      },
      {
        q: "Które zdanie jest uprzejmą prośbą?",
        opts: ["Rufen Sie mich zurück!", "Könnten Sie mich bitte zurückrufen?", "Sie rufen mich zurück."],
        why: "<b>Könnten Sie ...?</b> z bezokolicznikiem na końcu to formuła uprzejma; pozostałe dwa to rozkaz i twierdzenie."
      },
      {
        q: "Dopasuj każde słowo do jego znaczenia.",
        pairs: ["wiadomość", "temat (e-maila)", "zebranie", "koleżanka z pracy"]
      },
      {
        tr: "Czy mogłaby Pani potwierdzić mi termin, proszę?",
        why: "<i>Könnten Sie mir den Termin bitte bestätigen</i>: bezokolicznik zamyka zdanie. Pasuje też <i>Könnten Sie mir bitte den Termin bestätigen</i>."
      },
      {
        tr: "Chciałbym wiedzieć, czy pan Weber jest dziś w biurze. Czy mógłby Pan do mnie oddzwonić, proszę?",
        why: "W <i>Büro</i> <b>ü</b> to [y], a akcent pada na <b>ro</b>; w <i>ich</i> <b>ch</b> to [ç]; w <i>wissen</i> <b>w</b> to [v], a <b>ss</b> to bezdźwięczne <b>s</b>."
      },
      {
        tr: "U nas zaczyna się o ósmej, a najpierw rozmawiamy o porządku obrad.",
        why: "W <i>acht</i> <b>ch</b> po <b>a</b> to [x]; <i>Bei</i> ma <b>ei</b> = [aɪ]; w <i>zuerst</i> <b>z</b> to [ts], a samogłoski <b>u</b> i <b>e</b> wymawia się osobno."
      }
    ]
  },
  "unit:a2-u07": {
    title: "Święta i zwyczaje",
    grammarNote: "gratulieren i inne czasowniki z celownikiem · daty (am 3. Oktober) · Hast du Lust, ... zu ...? · przymiotnik w roli przysłówka · normalerweise, leider, hoffentlich"
  },
  "lesson:a2-u07-l1": {
    theme: "Życzenia i prezenty",
    title: "Wszystkiego najlepszego!",
    objectives: [
      "składać życzenia za pomocą gratulieren i Herzlichen Glückwunsch",
      "używać celownika z gratulieren, schenken i danken",
      "podawać datę z am i liczebnikiem porządkowym (am 3. Oktober)"
    ],
    theory: [
      {
        h: "Składanie życzeń",
        p: "Żeby komuś pogratulować, używa się czasownika <strong>gratulieren</strong>: osoba stoi w <strong>celowniku</strong>, a okazję wprowadza się przez <strong>zu</strong> + celownik, czyli <em>zum</em> (<em>zu dem</em>, rodzaj męski i nijaki) albo <em>zur</em> (<em>zu der</em>, rodzaj żeński): <em>Ich gratuliere dir zum Geburtstag. Wir gratulieren euch zur Hochzeit.</em> Jako stała formuła, bez czasownika: <em>Herzlichen Glückwunsch zum Geburtstag!</em> albo <em>Alles Gute zum Geburtstag!</em> Na święta: <em>Frohe Weihnachten!</em> i <em>Frohes neues Jahr!</em>"
      },
      {
        h: "Obdarowywanie i dziękowanie: znowu celownik",
        p: "<strong>schenken</strong> (podarować) i <strong>danken</strong> (dziękować) też wymagają osoby w celowniku: <em>Ich schenke meiner Schwester ein Buch. Ich danke dir für das Geschenk.</em> Przy <em>schenken</em> to, co się daje, stoi w bierniku (<em>ein Buch</em>); przy <em>danken</em> powód wprowadza się przez <strong>für</strong> + biernik."
      },
      {
        h: "Daty: am + liczebnik porządkowy",
        p: "Datę podaje się z <strong>am</strong> i <strong>liczebnikiem porządkowym</strong>. Pisze się ją z kropką: <em>am 3. Oktober</em>, a czyta <em>am dritten Oktober</em>. Kropka po liczbie oznacza właśnie, że to liczebnik porządkowy. Do 19 dodaje się <em>-t-</em> i końcówkę (<em>am vierten, am zwölften</em>), od 20 <em>-st-</em> i końcówkę (<em>am zwanzigsten, am dreißigsten</em>); <em>am zweiten</em> (2.) jest regularne; formy szczególne mają <em>am ersten</em> (1.), <em>am dritten</em> (3.), <em>am siebten</em> (7.) i <em>am achten</em> (8.). Żeby powiedzieć, kiedy ma się urodziny: <em>Wann hast du Geburtstag? Am 3. Oktober.</em> albo <em>Ich habe am 3. Oktober Geburtstag.</em>"
      },
      {
        contrast: "Po polsku <em>dziękować</em>, <em>gratulować</em> i <em>podarować</em> też wymagają celownika (<em>dziękuję ci</em>, <em>gratuluję ci</em>, <em>podaruję ci</em>), więc ten wzorzec jest ci znany; i podobnie jak <em>dziękuję za prezent</em> daje <em>danken für</em>, tak <em>für</em> + biernik pasuje do powodu podziękowania. Różnica jest w okazji: po polsku stoi ona w dopełniaczu albo z <em>z okazji</em> (<em>z okazji urodzin</em>), a po niemiecku to <em>zu</em> + celownik (<em>gratulieren</em> służy też do życzeń urodzinowych, podczas gdy po polsku zwykle odróżnia się <em>gratulować</em> osiągnięć od <em>składać życzenia</em>: <em>składam ci życzenia urodzinowe</em>), i w tym <em>zum</em> / <em>zur</em> trzeba znać rodzaj niemieckiego rzeczownika. Rodzaj często nie zgadza się z polskim odpowiednikiem: <em>die Hochzeit</em> jest żeńskie, a polski <em>ślub</em> męski. Po polsku data nie ma przyimka, a miesiąc stoi w dopełniaczu (<em>3 października</em>, czytane jako <em>trzeciego października</em>); po niemiecku jest <em>am</em>, kropka po liczbie i miesiąc bez zmiany końcówki: <em>am 3. Oktober</em>."
      },
      {
        trap: "<em>Zum</em> czy <em>zur</em> zależy od rodzaju <strong>niemieckiego</strong> rzeczownika, nie polskiego: <em>der Geburtstag</em> → <em>zum</em>, <em>die Hochzeit</em> → <em>zur</em>, <em>das Fest</em> → <em>zum</em>. Polskie <em>urodziny</em> to liczba mnoga i nic ci tu nie podpowie. Okazja nie bierze <em>für</em> (choć po polsku jest <em>za</em> przy podziękowaniu) tylko <em>zu</em>: <em>zum Geburtstag</em>, nie «für Geburtstag». W dacie często brakuje kropki: <em>am 3 Oktober</em> wygląda jak liczebnik główny, a po niemiecku poprawny zapis to <em>am 3. Oktober</em>."
      },
      {
        tip: "Pełne zdanie na kartkę: <em>Liebe Anna, herzlichen Glückwunsch zum Geburtstag! Ich schenke dir ein Buch.</em> Miesiące mówi się z <em>im</em> (<em>im Oktober</em>), konkretny dzień z <em>am</em> (<em>am 3. Oktober</em>)."
      }
    ],
    grammar: {
      title: "Czasowniki z celownikiem i daty",
      note: "<b>gratulieren, schenken, danken</b>: osoba stoi w <b>celowniku</b>. Okazja: <b>zum / zur</b> + celownik. Data: <b>am</b> + liczebnik porządkowy z kropką, <b>am 3. Oktober</b>.",
      table: {
        head: ["czasownik", "osoba (celownik)", "reszta zdania"],
        rows: [
          ["gratulieren", "Ich gratuliere dir", "zum Geburtstag."],
          ["schenken", "Ich schenke meiner Schwester", "ein Buch."],
          ["danken", "Ich danke dir", "für das Geschenk."],
          ["Geburtstag haben", "Ich habe", "am 3. Oktober Geburtstag."]
        ]
      },
      examples: [
        { tr: "Składam ci życzenia urodzinowe.", note: "gratulieren + dir; zum = zu dem" },
        { tr: "Wszystkiego najlepszego z okazji urodzin!", note: "stała formuła, bez czasownika" },
        { tr: "Gratulujemy wam ślubu.", note: "zur = zu der (die Hochzeit jest rodzaju żeńskiego)" },
        { tr: "Moje urodziny są 3 października.", note: "am + liczebnik porządkowy z kropką" },
        { tr: "Daję siostrze książkę w prezencie.", note: "meiner Schwester: celownik rodzaju żeńskiego" },
        { tr: "Dziękuję ci za prezent.", note: "danken + celownik; für + biernik" }
      ]
    },
    vocab: [
      "urodziny",
      "prezent",
      "ślub, wesele",
      "życzenia, gratulacje",
      "gratulować, składać życzenia",
      "podarować",
      "dziękować",
      "święto, uroczystość",
      "ciasto",
      "świętować",
      "przyjęcie (wśród przyjaciół)",
      "świeczka"
    ],
    exercises: [
      {
        q: "Jak złożysz przyjacielowi życzenia urodzinowe?",
        opts: [
          "Ich gratuliere dir zum Geburtstag.",
          "Ich gratuliere dich zum Geburtstag.",
          "Ich gratuliere dir für Geburtstag."
        ],
        why: "<i>Gratulieren</i> wymaga osoby w celowniku (<b>dir</b>) i okazji z <b>zu</b> + celownik: <i>zum Geburtstag</i>."
      },
      {
        q: "Jak powiesz „Moje urodziny są 3 października”?",
        opts: [
          "Mein Geburtstag ist an 3. Oktober.",
          "Mein Geburtstag ist am 3. Oktober.",
          "Mein Geburtstag ist im 3. Oktober."
        ],
        why: "Do daty używa się <b>am</b> i liczebnika porządkowego z kropką: <i>am 3. Oktober</i>. <i>Im</i> służy do całego miesiąca: <i>im Oktober</i>."
      },
      {
        q: "Co powiesz komuś, kto się żeni?",
        opts: [
          "Herzlichen Glückwunsch zum Hochzeit!",
          "Herzlichen Glückwunsch in der Hochzeit!",
          "Herzlichen Glückwunsch zur Hochzeit!"
        ],
        why: "<i>Die Hochzeit</i> jest rodzaju żeńskiego: <b>zur</b> = <i>zu der</i>. <i>Zum</i> pasowałoby do rodzaju męskiego lub nijakiego."
      },
      {
        q: "Uzupełnij: „Ich schenke ___ Schwester ein Buch.” (mojej siostrze)",
        opts: ["meiner", "meine", "meinem"],
        why: "<i>Schenken</i> wymaga osoby w celowniku, a <i>die Schwester</i> jest rodzaju żeńskiego: <b>meiner</b>. <i>Meinem</i> to celownik rodzaju męskiego i nijakiego."
      },
      {
        q: "Uzupełnij: „Ich gratuliere ___ zum Geburtstag.” (tobie)",
        hint: "celownik od du",
        why: "<b>dir</b> to celownik od <i>du</i>: <i>Ich gratuliere dir zum Geburtstag.</i>"
      },
      {
        q: "Uzupełnij: „Mein Geburtstag ist ___ 3. Oktober.” (w)",
        hint: "przyimek przy dacie",
        why: "Przy dacie używa się <b>am</b>: <i>am 3. Oktober</i>."
      },
      {
        q: "Dopasuj każde słowo do jego znaczenia.",
        pairs: ["urodziny", "prezent", "ślub", "życzenia"]
      },
      {
        tr: "Składam Timowi życzenia urodzinowe. (czasownik: gratulieren)",
        why: "<i>Ich gratuliere Tim zum Geburtstag</i>. Pasują też <i>Zum Geburtstag gratuliere ich Tim</i> i <i>Ich gratuliere Tim zu seinem Geburtstag</i>."
      },
      {
        tr: "Wszystkiego najlepszego, Anno! Składam ci życzenia urodzinowe i daję ci w prezencie książkę.",
        why: "W <i>Glückwunsch</i> <b>ü</b> jest krótkie [ʏ], <b>ck</b> czyta się [k], a <b>sch</b> to [ʃ]; w <i>herzlichen</i> <b>z</b> to [ts], a <b>ch</b> po <b>i</b> to [ç]; w <i>gratuliere</i> <b>ie</b> to długie <b>i</b> [iː]."
      },
      {
        tr: "Składam mojej siostrze życzenia urodzinowe i daję jej w prezencie książkę.",
        why: "W <i>Schwester</i> <b>sch</b> to [ʃ], a <b>w</b> to [v]; w <i>Geburtstag</i> akcent pada na <b>bur</b>, a końcowe <b>g</b> czyta się [k]."
      }
    ]
  },
  "lesson:a2-u07-l2": {
    theme: "Zaproszenia",
    title: "Masz ochotę przyjść?",
    objectives: [
      "zapraszać kogoś za pomocą Hast du Lust, ... zu ...?",
      "odpowiadać na zaproszenie: przyjmować i odmawiać",
      "stawiać zu przed bezokolicznikiem, także wewnątrz czasownika rozdzielnie złożonego (mitzukommen)"
    ],
    theory: [
      {
        h: "Hast du Lust, ... zu ...?",
        p: "Żeby kogoś zaprosić, mówi się <strong>Hast du Lust, ...</strong>, a potem drugi czasownik w bezokoliczniku, poprzedzony <strong>zu</strong> i postawiony <strong>na końcu</strong>: <em>Hast du Lust, am Samstag zu meiner Party zu kommen? Ich habe Lust, ins Kino zu gehen. Ich habe keine Zeit, am Samstag zu kommen.</em> Tak samo działa to z innymi wyrażeniami, np. <em>Es ist schön, ...</em> albo <em>Ich habe vor, ...</em> (zobacz kartę gramatyczną)."
      },
      {
        h: "Czasowniki rozdzielnie złożone i przecinek",
        p: "Przy czasowniku rozdzielnie złożonym <strong>zu stoi w środku</strong>, między przedrostkiem a czasownikiem, a całość pisze się razem: <em>mitkommen</em> → <em>Hast du Lust, mitzukommen?</em>; <em>einladen</em> → <em>Es ist schön, Freunde einzuladen.</em> <strong>Przecinek</strong> jest obowiązkowy, gdy grupa z <em>zu</em> zależy od rzeczownika takiego jak <em>Lust</em> czy <em>Zeit</em> (<em>Hast du Lust, mitzukommen?</em>) albo od wyrazu odsyłającego; w pozostałych przypadkach, np. po czasowniku przy samym bezokoliczniku (<em>Ich versuche zu schlafen</em>), przecinek jest często dowolny."
      },
      {
        contrast: "Po polsku bezokolicznik stoi bez żadnej partykuły: <em>masz ochotę przyjść?</em>, <em>nie mam czasu gotować</em>. Po niemiecku przed bezokolicznikiem po <em>Lust haben</em> trzeba <em>zu</em>, które stoi bezpośrednio przed czasownikiem i na końcu zdania. Polski nie ma też czasowników z rozdzielnym przedrostkiem w niemieckim sensie: <em>mitzukommen</em> pisze się jako jedno słowo, a po polsku mówi się <em>przyjść z nami</em>. Po czasownikach modalnych (<em>können, müssen, wollen</em>) po niemiecku <strong>nie</strong> ma <em>zu</em>, tak jak po polsku nie ma żadnej partykuły: <em>Kannst du kommen?</em> (możesz przyjść?)."
      },
      {
        trap: "Nie pisze się «zu mitkommen» ani «mit zu kommen»: forma to <em>mitzukommen</em>, w jednym słowie. I nie mówi się «Hast du Lust, kommen?»: potrzebne jest <em>zu</em>, <em>Hast du Lust, zu kommen?</em>. Po czasowniku modalnym natomiast <em>zu</em> brakuje: <em>Ich kann kommen</em>, nie «Ich kann zu kommen». Polskie <em>masz ochotę przyjść</em> bez żadnej partykuły łatwo przenieść na niemiecki i zgubić <em>zu</em>."
      },
      {
        tip: "Żeby odpowiedzieć: <em>Danke für die Einladung! Ich komme gern.</em> albo <em>Ich sage gern zu</em> (przyjmuję). Żeby odmówić: <em>Leider habe ich keine Zeit.</em> albo <em>Leider muss ich absagen.</em> Żeby zaprosić: <em>Ich lade dich zu meiner Party ein.</em>"
      }
    ],
    grammar: {
      title: "zu + bezokolicznik",
      note: "<b>zu</b> + bezokolicznik <b>na końcu</b>: <i>Ich habe Lust, ins Kino zu gehen.</i> Czasownik rozdzielnie złożony: <b>zu</b> w środku (<i>mitzukommen</i>). Przecinek jest obowiązkowy, gdy grupa z <i>zu</i> zależy od rzeczownika (<i>Lust</i>, <i>Zeit</i>) lub wyrazu odsyłającego, a w innych przypadkach często dowolny. Po czasowniku modalnym nie ma <i>zu</i>.",
      table: {
        head: ["konstrukcja", "przykład", "uwaga"],
        rows: [
          ["Lust haben", "Ich habe Lust, ins Kino zu gehen.", "zu przed bezokolicznikiem, na końcu"],
          ["keine Zeit haben", "Ich habe keine Zeit, am Samstag zu kommen.", "po rzeczowniku Zeit: przecinek obowiązkowy"],
          ["czasownik rozdzielny", "Hast du Lust, mitzukommen?", "zu w środku: mitzukommen"],
          ["czasownik modalny", "Kannst du kommen?", "bez zu"]
        ]
      },
      examples: [
        { tr: "Masz ochotę pójść ze mną?", note: "mitkommen: zu w środku, mitzukommen" },
        { tr: "Masz ochotę przyjść w sobotę na moje przyjęcie?", note: "po rzeczowniku Lust: przecinek obowiązkowy" },
        { tr: "Mam ochotę iść do kina.", note: "zu gehen: zu przed bezokolicznikiem" },
        { tr: "Nie mam czasu przyjść w sobotę.", note: "keine Zeit, ... zu kommen" },
        { tr: "Miło jest zapraszać przyjaciół.", note: "einladen: zu w środku, einzuladen" },
        { tr: "Dziękuję za zaproszenie! Chętnie przyjdę.", note: "odpowiedź na zaproszenie" }
      ]
    },
    vocab: [
      "zaproszenie",
      "zapraszać",
      "ochota",
      "pójść/przyjść razem z kimś",
      "odwołać, odmówić",
      "przyjąć (zaproszenie)",
      "pomysł",
      "gość",
      "wizyta, goście",
      "niespodzianka",
      "wpaść (z wizytą)",
      "czas"
    ],
    exercises: [
      {
        q: "Jak powiesz po niemiecku: «Masz ochotę pójść ze mną?»",
        opts: [
          "Hast du Lust, mitzukommen?",
          "Hast du Lust, zu mitkommen?",
          "Hast du Lust, mitkommen zu?"
        ],
        why: "Przy czasowniku rozdzielnie złożonym <b>zu</b> stoi w środku, całość w jednym słowie: <i>mitzukommen</i>."
      },
      {
        q: "Uzupełnij: „Hast du Lust, heute Abend ins Kino ___ gehen?”",
        hint: "krótkie słowo przed bezokolicznikiem",
        why: "<b>zu</b> stoi bezpośrednio przed bezokolicznikiem: <i>ins Kino zu gehen</i>."
      },
      {
        q: "Uzupełnij: „Hast du ___, mitzukommen?” (ochotę)",
        hint: "rzeczownik, wielką literą",
        why: "<b>Lust</b> haben: <i>Hast du Lust, mitzukommen?</i>"
      },
      {
        q: "Dopasuj każde słowo do jego znaczenia.",
        pairs: ["zapraszać", "odwołać, odmówić", "przyjąć (zaproszenie)", "niespodzianka"]
      },
      {
        tr: "Masz ochotę nas odwiedzić?",
        why: "<i>Hast du Lust, uns zu besuchen?</i>: przecinek po <i>Lust</i>, <i>zu</i> bezpośrednio przed <i>besuchen</i>, na końcu."
      },
      {
        tr: "Masz ochotę iść do kina?",
        why: "<i>Hast du Lust, ins Kino zu gehen?</i> Pasuje też <i>in das Kino</i>. <i>Zu gehen</i> zamyka zdanie."
      },
      {
        q: "Uzupełnij zdanie.",
        tr: "Dziękuję za zaproszenie! Mam ochotę przyjść na wasze przyjęcie.",
        why: "<i>Die Einladung</i> to zaproszenie. <i>Zu eurer Party zu kommen</i>: pierwsze <b>zu</b> jest przyimkiem, drugie wprowadza bezokolicznik."
      },
      {
        q: "Jesteś zaproszony na przyjęcie.",
        setting: "Koleżanka zaprasza cię na swoje przyjęcie w sobotę.",
        lines: [
          { tr: "Cześć! W sobotę mam przyjęcie. Masz ochotę przyjść?" },
          {
            tr: "Podziękuj za zaproszenie i powiedz, że chętnie przyjdziesz.",
            answerTr: "Dziękuję za zaproszenie! Chętnie przyjdę."
          },
          { tr: "Świetnie! Możesz przynieść ciasto?" },
          {
            tr: "Odpowiedz, że tak, i powiedz, że masz ochotę upiec ciasto.",
            answerTr: "Tak, chętnie. Mam ochotę upiec ciasto."
          }
        ]
      },
      {
        tr: "Masz ochotę przyjść w sobotę na moje przyjęcie? Niestety nie mam czasu, ale dziękuję za zaproszenie!",
        why: "W <i>Einladung</i> <b>ei</b> to [aɪ]; w <i>Samstag</i> początkowe <b>s</b> jest dźwięczne [z]; w <i>Zeit</i> <b>z</b> to [ts], a <b>ei</b> to [aɪ]."
      },
      {
        tr: "Masz ochotę pójść ze mną do kina?",
        why: "W <i>Kino</i> <b>i</b> jest długie [iː]; w <i>mit</i> <b>i</b> jest krótkie; w <i>Lust</i> <b>u</b> jest krótkie, a <b>st</b> czyta się [st]."
      }
    ]
  },
  "lesson:a2-u07-l3": {
    theme: "Pozdrowienia i zwyczaje",
    title: "Niemcy, Austria, Szwajcaria",
    objectives: [
      "poznać kilka typowych pozdrowień z trzech obszarów (Grüß Gott, Grüezi, Servus)",
      "opisać zwyczaj jako tendencję, z oft i meistens",
      "powiedzieć, jak się wita i w jakim rejestrze, między du a Sie"
    ],
    theory: [
      {
        h: "Jeden niemiecki, trzy kraje",
        p: "Po niemiecku mówi się w Niemczech, w Austrii i w Szwajcarii (gdzie oprócz niemieckiego są jeszcze francuski, włoski i romansz). Niemcy, Austria i Szwajcaria mają wspólny niemiecki standardowy, z pewnymi różnicami narodowymi w słownictwie, wymowie i pisowni; pozdrowienia i niektóre zwyczaje zmieniają się z regionu na region. <em>Guten Tag</em> pasuje mniej więcej wszędzie. <em>Grüß Gott</em> słychać częściej na południu Niemiec i w Austrii, <em>Servus</em> głównie w Austrii i w Bawarii (mówi się tak też na pożegnanie), <em>Grüezi</em> w niemieckojęzycznej Szwajcarii, <em>Moin</em> na północy Niemiec. To są <strong>tendencje</strong>, nie reguły: dlatego w zdaniach tej lekcji pojawiają się <em>oft</em> i <em>meistens</em>."
      },
      {
        h: "Opowiadanie o zwyczaju",
        p: "Żeby opisać zwyczaj, używa się <strong>man</strong> z czasownikiem w trzeciej osobie liczby pojedynczej: <em>In der Schweiz sagt man oft Grüezi.</em> Tendencję zaznacza się przez <em>oft, meistens, in vielen Familien</em>: <em>In vielen Familien feiert man Weihnachten am 24. Dezember.</em> Rejestr wybiera się przez <em>du</em> i <em>Sie</em>: <em>Im Büro siezt man oft, unter Freunden duzt man sich.</em>"
      },
      {
        contrast: "W Polsce Wigilia, wieczór 24 grudnia, jest dla wielu rodzin głównym momentem świąt, często też z prezentami tego samego wieczoru. W wielu niemieckich rodzinach to również wieczór 24 grudnia, <em>Heiligabend</em>, z prezentami; 25 i 26 grudnia to <em>Feiertage</em>. To tendencje, nie reguły: każda rodzina i każdy region mają swoje zwyczaje. Na <em>Silvester</em> (31 grudnia, po polsku sylwester) wiele osób świętuje z przyjaciółmi i o północy ogląda fajerwerki. Inna różnica to zwracanie się do kogoś: po polsku mówi się <em>proszę pana</em> lub <em>proszę pani</em> i trzeba wybrać formę według płci, a po niemiecku jest jedno <em>Sie</em> dla każdego, z czasownikiem w trzeciej osobie liczby mnogiej: <em>Sie kommen</em>. Po polsku <em>dzień dobry</em> pasuje prawie wszędzie; po niemiecku wybór między <em>Grüß Gott</em>, <em>Grüezi</em> i <em>Servus</em> zależy mocno od miejsca, w którym jesteś."
      },
      {
        trap: "Nie uogólniaj: «W Niemczech mówi się Grüß Gott» jest zbyt szerokie, bo w wielu regionach północy prawie się tego nie słyszy. Lepiej ostrożne zdanie: <em>In Süddeutschland und in Österreich sagt man oft Grüß Gott.</em> Inna różnica w pisowni: w Szwajcarii zwykle pisze się <em>ss</em> zamiast <em>ß</em> (<em>Strasse</em>, <em>Grüsse</em>), a w Niemczech i w Austrii używa się <em>ß</em> (<em>Straße</em>, <em>Grüße</em>)."
      },
      {
        tip: "Kiedy nie wiesz, jakiego pozdrowienia użyć, <em>Guten Tag</em> (i <em>Auf Wiedersehen</em>) to bezpieczny wybór, a wobec osób, których nie znasz, zostaje forma <em>Sie</em>."
      }
    ],
    grammar: {
      title: "Pozdrowienia w trzech obszarach i rejestr",
      note: "Pozdrowienie albo zwyczaj opisuje się jako <b>tendencję</b>: <b>man</b> + <b>oft / meistens</b>. Między nieznajomymi <b>Sie</b>, między przyjaciółmi <b>du</b>.",
      table: {
        head: ["pozdrowienie", "gdzie słychać je najczęściej", "uwaga"],
        rows: [
          ["Guten Tag", "w trzech obszarach", "neutralne, pasuje do wielu sytuacji"],
          ["Grüß Gott", "południe Niemiec, Austria", "często słychać je też w sklepach"],
          ["Servus", "Austria, Bawaria", "nieformalne, na powitanie i na pożegnanie"],
          ["Grüezi", "niemieckojęzyczna Szwajcaria", "często mówi się je do osób, których się nie zna"],
          ["Moin", "północ Niemiec", "nieformalne, słychać je o każdej porze"],
          ["Hallo", "w trzech obszarach", "nieformalne, między przyjaciółmi i kolegami"]
        ]
      },
      examples: [
        { tr: "Na południu Niemiec i w Austrii często mówi się Grüß Gott.", note: "oft: tendencja" },
        { tr: "W Szwajcarii często mówi się Grüezi.", note: "man + trzecia osoba liczby pojedynczej" },
        { tr: "Między przyjaciółmi mówi się też Hallo.", note: "unter Freunden: rejestr nieformalny" },
        { tr: "W Austrii często mówi się Servus.", note: "Servus: nieformalne" },
        { tr: "W wielu rodzinach świętuje się Boże Narodzenie 24 grudnia.", note: "in vielen Familien: tendencja" },
        { tr: "W biurze często mówi się sobie per pan/pani, między przyjaciółmi per ty.", note: "siezen i duzen" }
      ]
    },
    vocab: [
      "zwyczaj, obyczaj",
      "tradycja",
      "kraj, państwo",
      "region",
      "dzień świąteczny",
      "jarmark bożonarodzeniowy",
      "pozdrowienie, powitanie",
      "pozdrawiać, witać",
      "typowy",
      "różny, zróżnicowany",
      "różnica",
      "sylwester (31 grudnia)"
    ],
    exercises: [
      {
        q: "Które pozdrowienie często słychać w niemieckojęzycznej Szwajcarii?",
        opts: ["Grüß Gott.", "Grüezi.", "Moin."],
        why: "<i>Grüezi</i> to pozdrowienie, które często słychać w niemieckojęzycznej Szwajcarii. <i>Grüß Gott</i> jest częstsze na południu Niemiec i w Austrii, <i>Moin</i> na północy Niemiec."
      },
      {
        q: "Do klienta, którego nie znasz, zwykle zwracasz się per...",
        opts: ["Sie", "du", "ihr"],
        why: "Wobec osób, których nie znasz, i w kontekstach formalnych używa się zwykle <b>Sie</b>; <i>du</i> jest dla przyjaciół i rodziny."
      },
      {
        q: "Które zdanie jest sformułowane ostrożnie, bez uogólniania?",
        opts: [
          "In der Schweiz gibt es keine Traditionen.",
          "In Deutschland feiern alle Weihnachten gleich.",
          "Die Bräuche sind oft von Region zu Region verschieden."
        ],
        why: "<b>oft</b> przedstawia zwyczaje jako tendencje. Pozostałe dwa zdania są zbyt absolutne i nie są prawdziwe."
      },
      {
        q: "Uzupełnij typowe pozdrowienie z południa Niemiec i z Austrii: „Grüß ___.”",
        hint: "drugie słowo pozdrowienia",
        why: "<b>Grüß Gott</b>: często słychać je na południu Niemiec i w Austrii."
      },
      {
        q: "Dopasuj każde słowo do jego znaczenia.",
        pairs: ["zwyczaj", "dzień świąteczny", "jarmark bożonarodzeniowy", "różnica"]
      },
      {
        tr: "W Austrii często mówi się Servus.",
        why: "<i>In Österreich sagt man oft Servus</i>. Pasują też <i>Man sagt in Österreich oft Servus</i>, <i>Oft sagt man in Österreich Servus</i>, <i>Man sagt oft in Österreich Servus</i> i <i>Servus sagt man in Österreich oft</i>."
      },
      {
        tr: "U nas często mówi się Hallo.",
        why: "<i>Bei uns sagt man oft Hallo</i>. Pasują też <i>Man sagt bei uns oft Hallo</i>, <i>Oft sagt man bei uns Hallo</i>, <i>Man sagt oft bei uns Hallo</i> i <i>Hallo sagt man bei uns oft</i>."
      },
      {
        q: "Uzupełnij zdanie.",
        tr: "W Szwajcarii często mówi się Grüezi. W Austrii często mówi się Servus.",
        why: "<i>Die Schweiz</i> po <i>in der</i>; <i>Österreich</i> po <i>in</i>, bez rodzajnika."
      },
      {
        tr: "Na południu Niemiec i w Austrii często mówi się Grüß Gott. W Szwajcarii często mówi się Grüezi. Między przyjaciółmi mówi się też Hallo.",
        why: "W <i>Grüß</i> <b>ü</b> jest długie [yː], a <b>ß</b> to bezdźwięczne <b>s</b>; w <i>Österreich</i> <b>ö</b> jest długie [øː], a końcowe <b>ch</b> po <b>ei</b> to [ç]; w <i>Schweiz</i> <b>sch</b> to [ʃ], a <b>w</b> to [v]."
      },
      {
        tr: "Zwyczaje są często różne w różnych regionach.",
        why: "W <i>Bräuche</i> <b>äu</b> to [ɔʏ], a <b>ch</b> po <b>äu</b> to [ç]; w <i>verschieden</i> <b>sch</b> to [ʃ], a <b>ie</b> to długie <b>i</b> [iː]."
      }
    ]
  },
  "lesson:a2-u07-l4": {
    theme: "Jak i kiedy",
    title: "normalnie, powoli",
    objectives: [
      "używać przymiotnika jako przysłówka, bez końcówki (langsam, schnell, laut)",
      "używać normalerweise, leider, hoffentlich i vielleicht",
      "stawiać przysłówek na początku, a czasownik na drugim miejscu"
    ],
    theory: [
      {
        h: "Przymiotnik w roli przysłówka",
        p: "Po niemiecku <strong>przymiotnik</strong> bez końcówki może pełnić rolę <strong>przysłówka</strong>, czyli mówić, jak coś się robi: <em>Er spricht langsam. Sie fährt schnell. Wir singen laut.</em> To to samo słowo, którego używasz do opisu rzeczownika: <em>Der Zug ist langsam</em>, ale przy rzeczowniku ma końcówkę (<em>ein langsamer Zug</em>); jako przysłówek końcówki nigdy nie ma."
      },
      {
        h: "Przysłówki zdaniowe: normalerweise, leider, hoffentlich, vielleicht",
        p: "Niektóre przysłówki mówią coś o <strong>całym zdaniu</strong>: <strong>normalerweise</strong> (zwykle), <strong>leider</strong> (niestety), <strong>hoffentlich</strong> (oby, mam nadzieję, że), <strong>vielleicht</strong> (może). Mogą otwierać zdanie, a wtedy czasownik zostaje na <strong>drugim miejscu</strong>, a podmiot idzie za nim: <em>Normalerweise feiere ich meinen Geburtstag mit Freunden. Leider habe ich am Samstag keine Zeit. Hoffentlich kommst du zur Party. Vielleicht kommt Tim später.</em> We wnętrzu zdania stoją zwykle po czasowniku: <em>Ich habe leider keine Zeit.</em>"
      },
      {
        contrast: "Po polsku przysłówek odprzymiotnikowy ma własną końcówkę: <em>wolny</em> → <em>wolno</em>, <em>szybki</em> → <em>szybko</em>, <em>głośny</em> → <em>głośno</em>. Po niemiecku nic się nie zmienia: <em>langsam</em> znaczy zarówno „wolny”, jak i „powoli”. Drugą różnicą jest szyk. Po polsku szyk jest swobodny i <em>Niestety nie mam czasu</em> nie wymaga niczego szczególnego, a po niemieckim przysłówku na początku czasownik musi być zaraz za nim: <em>Leider habe ich keine Zeit</em>. <em>Hoffentlich</em> jest przysłówkiem samym w sobie: po polsku jest <em>mam nadzieję, że przyjdziesz</em> albo <em>obyś przyszedł</em> (<em>obyś przyszła</em>), a po niemiecku <em>Hoffentlich kommst du</em>, bez <em>dass</em>."
      },
      {
        trap: "<em>normal</em> znaczy „normalny” (<em>Das ist normal</em>), a jako przysłówek „normalnie, w zwykły sposób” (<em>Er spricht normal</em>); „zwykle” mówi się <em>normalerweise</em>. Gdy jedno z tych słów otwiera zdanie, czasownik idzie zaraz po nim: <em>Leider habe ich keine Zeit</em>, nie «Leider ich habe keine Zeit» (polski szyk). I nie dodawaj do przysłówka końcówki: <em>Er spricht langsam</em>, nie «Er spricht langsame»."
      },
      {
        tip: "Inne przydatne przysłówki do nauki razem z tymi: <em>deutlich</em> (wyraźnie), <em>leise</em> (cicho), <em>später</em> (później), <em>natürlich</em> (oczywiście)."
      }
    ],
    grammar: {
      title: "Przysłówki: przymiotnik bez końcówki i przysłówki zdaniowe",
      note: "<b>Przymiotnik bez końcówki</b> pełni rolę przysłówka: <i>Er spricht langsam.</i> Przysłówki zdaniowe takie jak <b>normalerweise, leider, hoffentlich, vielleicht</b> mogą otwierać zdanie: czasownik zostaje na <b>drugim miejscu</b>.",
      table: {
        head: ["słowo", "znaczenie", "przykład"],
        rows: [
          ["normalerweise", "zwykle", "Normalerweise esse ich um zwölf Uhr."],
          ["leider", "niestety", "Leider habe ich keine Zeit."],
          ["hoffentlich", "oby, mam nadzieję, że", "Hoffentlich kommst du zur Party."],
          ["vielleicht", "może", "Vielleicht komme ich später."],
          ["langsam", "wolny; powoli", "Er spricht langsam."]
        ]
      },
      examples: [
        { tr: "Zwykle świętuję urodziny z przyjaciółmi.", note: "normalerweise otwiera zdanie: czasownik na drugim miejscu" },
        { tr: "Niestety w sobotę nie mam czasu.", note: "leider: habe ich" },
        { tr: "Mam nadzieję, że przyjdziesz na przyjęcie.", note: "hoffentlich, bez dass" },
        { tr: "Anna tańczy powoli i z wdziękiem.", note: "langsam i schön: przymiotniki w roli przysłówków" },
        { tr: "Śpiewamy głośno.", note: "laut: bez końcówki" },
        { tr: "Może Tim przyjdzie później.", note: "vielleicht: kommt Tim" }
      ]
    },
    vocab: [
      "zwykle, normalnie",
      "niestety",
      "oby, mam nadzieję, że",
      "może",
      "wolny; powoli",
      "szybki; szybko",
      "głośny, głośno",
      "cichy, cicho",
      "wyraźny; wyraźnie",
      "później, potem",
      "szczególnie, zwłaszcza",
      "oczywiście, naturalnie"
    ],
    exercises: [
      {
        q: "Które słowo znaczy „niestety”?",
        opts: ["hoffentlich", "leider", "vielleicht"],
        why: "<b>leider</b> = niestety. <i>Hoffentlich</i> to „oby”, <i>vielleicht</i> to „może”."
      },
      {
        q: "W którym zdaniu <i>langsam</i> opisuje czasownik, bez końcówki?",
        opts: ["Das Kind ist langsam.", "Das ist ein langsames Kind.", "Das Kind spricht langsam."],
        why: "W <i>Das Kind spricht langsam</i> <b>langsam</b> mówi, jak dziecko mówi, i nie ma końcówki. W pozostałych dwóch zdaniach opisuje dziecko."
      },
      {
        q: "Uzupełnij słowem z lekcji: „___ feiere ich meinen Geburtstag zu Hause.” (zwykle)",
        hint: "zaczyna się na n",
        why: "<b>Normalerweise</b> otwiera zdanie, a czasownik zostaje na drugim miejscu: <i>feiere ich</i>."
      },
      {
        q: "Uzupełnij: „___ habe ich am Samstag keine Zeit.” (niestety)",
        hint: "przysłówek zdaniowy",
        why: "<b>Leider</b> otwiera zdanie, a czasownik idzie zaraz po nim: <i>habe ich</i>."
      },
      {
        q: "Uzupełnij: „Die Kinder singen sehr ___.” (głośno)",
        hint: "przymiotnik, bez końcówki",
        why: "<b>laut</b> to przymiotnik bez końcówki, który pełni rolę przysłówka."
      },
      {
        q: "Dopasuj każde słowo do jego znaczenia.",
        pairs: ["zwykle", "niestety", "mam nadzieję, że", "może"]
      },
      {
        tr: "Niestety nie mam czasu.",
        why: "<i>Leider habe ich keine Zeit</i>. Pasuje też <i>Ich habe leider keine Zeit</i>."
      },
      {
        q: "Uzupełnij zdanie.",
        tr: "On mówi powoli i dobrze go rozumiem. Mam nadzieję, że przyjdziesz na przyjęcie!",
        why: "<i>Langsam</i> to przymiotnik bez końcówki w roli przysłówka; <i>Hoffentlich</i> otwiera zdanie, a czasownik <i>kommst</i> zostaje na drugim miejscu."
      },
      {
        tr: "Zwykle świętuję urodziny w domu. Niestety w sobotę nie mam czasu, ale może będziemy świętować później.",
        why: "W <i>normalerweise</i> <b>w</b> to [v], a <b>ei</b> to [aɪ]; w <i>vielleicht</i> akcent pada na drugą sylabę (<i>-leicht</i>), <b>ei</b> to [aɪ], a końcowe <b>ch</b> to [ç]; w <i>später</i> początkowe <b>sp</b> to [ʃp]."
      },
      {
        tr: "Mam nadzieję, że przyjdziesz na przyjęcie. Może będziemy świętować później.",
        why: "W <i>hoffentlich</i> <b>ch</b> po <b>i</b> to [ç]; w <i>später</i> początkowe <b>sp</b> czyta się [ʃp]; w <i>vielleicht</i> <b>v</b> to [f]."
      }
    ]
  },
  "lesson:a2-u07-test": {
    theme: "Sprawdzian",
    title: "Test: Święta i zwyczaje",
    objectives: ["sprawdzić gratulieren i celownik, daty, zu + bezokolicznik i przysłówki"],
    theory: [
      {
        p: "Dziesięć pytań o jednostce. Zaliczenie od 70%. Nie zaglądaj do lekcji, odpowiadając: jeśli czegoś nie pamiętasz, lepiej wrócić do powtórki."
      }
    ],
    exercises: [
      {
        q: "Uzupełnij: „Wir gratulieren ___ zur Hochzeit.” (wam)",
        hint: "celownik od ihr",
        why: "<b>euch</b> to celownik od <i>ihr</i>: <i>Wir gratulieren euch zur Hochzeit.</i>"
      },
      {
        q: "Uzupełnij: „Der Kurs beginnt ___ 5. Mai.” (w)",
        hint: "przyimek przy dacie",
        why: "Przy dacie używa się <b>am</b>: <i>am 5. Mai</i>."
      },
      {
        q: "Uzupełnij: „Hast du Lust, ins Kino ___ gehen?”",
        hint: "przed bezokolicznikiem",
        why: "<b>zu</b> stoi bezpośrednio przed bezokolicznikiem: <i>ins Kino zu gehen</i>."
      },
      {
        q: "Uzupełnij: „___ kommst du zur Party.” (oby)",
        hint: "przysłówek zdaniowy",
        why: "<b>Hoffentlich</b> otwiera zdanie, a czasownik <i>kommst</i> zostaje na drugim miejscu. Po <i>hoffentlich</i> nie ma <i>dass</i>."
      },
      {
        q: "Uzupełnij: „Ich schenke ___ Bruder ein Buch.” (mojemu bratu)",
        opts: ["meinem", "meinen", "mein"],
        why: "<i>Schenken</i> wymaga osoby w celowniku, a <i>der Bruder</i> jest rodzaju męskiego: <b>meinem</b>."
      },
      {
        q: "Które zdanie jest poprawnym zaproszeniem?",
        opts: ["Hast du Lust, zu mitkommen?", "Hast du Lust, mitzukommen?", "Hast du Lust, mitkommen?"],
        why: "Przy czasowniku rozdzielnie złożonym <b>zu</b> stoi w środku: <i>mitzukommen</i>, w jednym słowie."
      },
      {
        q: "Co znaczy <i>leider</i>?",
        opts: ["zwykle", "może", "niestety"],
        why: "<b>leider</b> = niestety. <i>Normalerweise</i> to „zwykle”, <i>vielleicht</i> to „może”."
      },
      {
        q: "Dopasuj każde słowo do jego znaczenia.",
        pairs: ["gratulować", "prezent", "zaproszenie", "zwyczaj"]
      },
      {
        tr: "Wszystkiego najlepszego z okazji urodzin! Masz ochotę przyjść w sobotę na moje przyjęcie?",
        why: "W <i>Glückwunsch</i> <b>ü</b> jest krótkie [ʏ], a <b>sch</b> to [ʃ]; w <i>Samstag</i> początkowe <b>s</b> jest dźwięczne [z]; w <i>Lust</i> <b>u</b> jest krótkie."
      },
      {
        tr: "Składam ci życzenia urodzinowe. Masz ochotę świętować z nami?",
        why: "W <i>gratuliere</i> <b>ie</b> to długie <b>i</b> [iː]; w <i>Geburtstag</i> akcent pada na <b>bur</b>; w <i>feiern</i> <b>ei</b> to [aɪ]."
      }
    ]
  },
  "unit:a2-u08": {
    title: "Plany",
    grammarNote: "vorhaben + zu · powtórka czasów (Perfekt, Präteritum, Futur, Konjunktiv II) · powtórka przypadków i zaimków · weil, dass, als, wenn"
  },
  "lesson:a2-u08-l1": {
    theme: "Plany i zamiary",
    title: "Mam zamiar ...",
    objectives: [
      "mówić, co się ma zamiar zrobić, za pomocą Ich habe vor, ... zu ...",
      "pytać o plany drugiej osoby: Was hast du vor?",
      "mówić o przyszłości czasem teraźniejszym ze wskaźnikiem czasu albo z werden"
    ],
    theory: [
      {
        h: "vorhaben + zu + bezokolicznik",
        p: "Żeby powiedzieć, co się ma <strong>zamiar</strong> zrobić, używa się czasownika <strong>vorhaben</strong>, po którym stoi drugi czasownik w bezokoliczniku z <strong>zu</strong>, na końcu zdania: <em>Ich habe vor, im Sommer nach Wien zu ziehen. Hast du vor, nach dem Studium in Berlin zu arbeiten?</em> Przy czasowniku rozdzielnie złożonym <em>zu</em> wchodzi w środek, w jednym wyrazie: <em>umziehen</em> → <em>Ich habe vor, im Sommer umzuziehen.</em> Przecinek stawia się wtedy, gdy grupa z <em>zu</em> zawiera poza bezokolicznikiem inne wyrazy."
      },
      {
        h: "vorhaben jest czasownikiem rozdzielnie złożonym",
        p: "<em>Vorhaben</em> rozdziela się jak <em>aufstehen</em>: <strong>haben</strong> przyjmuje końcówki, a <strong>vor</strong> idzie na koniec zdania głównego: <em>Ich habe vor, ... / Wir haben vor, ...</em> Bez drugiego czasownika można zapytać <em>Was hast du morgen vor?</em> (co masz zaplanowane na jutro?), a odpowiedzią może być <em>Ich habe nichts vor</em> (nie mam żadnych planów)."
      },
      {
        h: "Przyszłość: czas teraźniejszy albo werden",
        p: "Mówiąc o planach, po niemiecku często używa się <strong>czasu teraźniejszego</strong> ze wskaźnikiem czasu: <em>Nächstes Jahr ziehe ich nach Berlin.</em> <strong>Futur I</strong> (<em>werden</em> + bezokolicznik) służy m.in. do mówienia o przyszłości; zależnie od kontekstu może też wyrażać obietnicę lub przypuszczenie: <em>Ich werde im Herbst Informatik studieren.</em> Po <em>werden</em> i po czasownikach modalnych nie ma <em>zu</em>."
      },
      {
        contrast: "Po polsku mówi się <em>mam zamiar</em> albo <em>zamierzam</em> i od razu następuje bezokolicznik: <em>zamierzam przeprowadzić się latem</em>, bez żadnego dodatkowego słowa. Po niemiecku <em>vorhaben</em> wymaga <em>zu</em> + bezokolicznik, a cząstka <em>vor</em> odrywa się i idzie na koniec. W planach na przyszłość oba języki mogą użyć czasu teraźniejszego: <em>W przyszłym roku przeprowadzam się do Berlina</em> / <em>Nächstes Jahr ziehe ich nach Berlin um</em>. Różnica dotyczy głównie budowy niemieckiego Futur I: <em>werden</em> + bezokolicznik na końcu zdania."
      },
      {
        trap: "Nie mówi się „Ich habe vor, umziehen” ani „Ich habe vor, zu umziehen”: przy czasowniku rozdzielnie złożonym forma brzmi <em>umzuziehen</em>. Po polsku po <em>zamierzam</em> stoi sam bezokolicznik, więc łatwo pominąć <em>zu</em>: <em>Ich habe vor, nach Wien ziehen</em> jest błędem. Po <em>werden</em> też nie ma <em>zu</em>: <em>Ich werde studieren</em>, nie „Ich werde zu studieren”. Nie myl <em>Ich habe vor, ... zu ...</em> z <em>Ich will ...</em>: po <em>wollen</em> bezokolicznik stoi bez <em>zu</em> (<em>Ich will umziehen</em>)."
      },
      {
        tip: "Żeby opisać plan dwoma zdaniami: <em>Ich habe vor, im Sommer umzuziehen. Dort werde ich studieren.</em> Najpierw zamiar z <em>vorhaben</em>, potem ciąg dalszy z <em>werden</em>."
      }
    ],
    grammar: {
      title: "vorhaben + zu i przyszłość",
      note: "<b>vorhaben</b> + <b>zu</b> + bezokolicznik na końcu: <i>Ich habe vor, nach Wien zu ziehen.</i> Czasownik rozdzielnie złożony: <b>zu</b> w środku (<i>umzuziehen</i>). Przyszłość: czas teraźniejszy + wskaźnik czasu albo <b>werden</b> + bezokolicznik.",
      table: {
        head: ["konstrukcja", "przykład", "uwaga"],
        rows: [
          ["vorhaben + zu", "Ich habe vor, im Sommer nach Wien zu ziehen.", "vor na końcu zdania głównego, zu + bezokolicznik na końcu"],
          ["czasownik rozdzielnie złożony", "Ich habe vor, im Sommer umzuziehen.", "zu w środku: umzuziehen"],
          ["czas teraźniejszy + czas", "Nächstes Jahr ziehe ich nach Berlin.", "przyszłość ze wskaźnikiem czasu"],
          ["Futur I", "Ich werde im Herbst Informatik studieren.", "werden na drugim miejscu, bezokolicznik na końcu"]
        ]
      },
      examples: [
        { tr: "Mam zamiar przeprowadzić się latem.", note: "umziehen: zu w środku, umzuziehen" },
        { tr: "Czy masz zamiar pracować w Wiedniu po studiach?", note: "pytanie: Hast du vor, ... zu ...?" },
        { tr: "Mamy zamiar poszukać mieszkania.", note: "zu przed suchen, na końcu" },
        { tr: "Co masz zaplanowane na jutro?", note: "vorhaben bez drugiego czasownika: vor na końcu" },
        { tr: "W przyszłym roku przeprowadzam się do Berlina.", note: "czas teraźniejszy ze wskaźnikiem czasu" },
        { tr: "Jesienią będę studiować informatykę.", note: "Futur I: werden + bezokolicznik" }
      ]
    },
    vocab: [
      "plan",
      "mieć zamiar, mieć w planach",
      "planować",
      "przeprowadzka",
      "przeprowadzić się",
      "studia, kierunek studiów (liczba mnoga die Studien, rzadko używana)",
      "studiować",
      "miejsce pracy, posada",
      "praca (potocznie)",
      "wypowiedzieć (umowę), zwolnić się z pracy",
      "egzamin",
      "nauka zawodu"
    ],
    exercises: [
      {
        tr: "Czas teraźniejszy czasownika vorhaben, wszystkie osoby.",
        why: "<i>Ich habe vor, du hast vor, er hat vor, wir haben vor, ihr habt vor, sie haben vor</i>: <i>haben</i> przyjmuje końcówki, a <i>vor</i> idzie na koniec zdania głównego."
      },
      {
        q: "Jak powiedzieć „Mam zamiar przeprowadzić się latem”?",
        opts: [
          "Ich habe vor, im Sommer umzuziehen.",
          "Ich habe vor, im Sommer zu umziehen.",
          "Ich habe vor, im Sommer umziehen zu."
        ],
        why: "Przy czasowniku rozdzielnie złożonym <b>zu</b> wchodzi w środek, w jednym wyrazie: <i>umzuziehen</i>."
      },
      {
        q: "Uzupełnij: „Ich habe vor, nach dem Studium in Berlin ___ arbeiten.”",
        hint: "przed bezokolicznikiem",
        why: "<b>zu</b> stoi bezpośrednio przed bezokolicznikiem: <i>in Berlin zu arbeiten</i>."
      },
      {
        q: "Uzupełnij: „Wir ___ im Sommer nach Wien ziehen.” (Futur I od werden, wir)",
        hint: "werden, wir",
        why: "<b>Werden</b> stoi na drugim miejscu, a bezokolicznik <i>ziehen</i> zostaje na końcu: <i>Wir werden im Sommer nach Wien ziehen.</i>"
      },
      {
        q: "Uzupełnij: „Ich habe ___, im Herbst zu studieren.” (vorhaben)",
        hint: "oderwana część vorhaben",
        why: "<b>Vor</b>: <i>vorhaben</i> jest rozdzielne, a cząstka zostaje na końcu zdania głównego, przed przecinkiem."
      },
      {
        q: "Uzupełnij zdanie.",
        tr: "Mam zamiar wypowiedzieć latem umowę najmu.",
        why: "<i>Ich habe vor, im Sommer meine Wohnung zu kündigen</i>: <i>habe</i> przy <i>ich</i>, a <i>zu</i> przed <i>kündigen</i>, na końcu."
      },
      {
        q: "Ułóż wyrazy w odpowiedniej kolejności.",
        tr: "Mam zamiar przeprowadzić się latem.",
        why: "<i>Ich habe vor, im Sommer umzuziehen.</i> „Latem” odnosi się do przeprowadzki, a nie do zamiaru: stoi więc w grupie z <i>zu</i>, po przecinku."
      },
      {
        q: "Przetłumacz: „Mam zamiar przeprowadzić się latem do Wiednia.” (użyj vorhaben)",
        why: "<i>Ich habe vor, im Sommer nach Wien umzuziehen</i>: <i>umzuziehen</i> w jednym wyrazie. Poprawne jest też <i>nach Wien zu ziehen</i>."
      },
      {
        tr: "Mam zamiar przeprowadzić się latem do Wiednia. Tam będę studiować informatykę.",
        why: "W <i>Wien</i> <b>W</b> to [v], a <b>ie</b> czyta się [iː]; w <i>Sommer</i> początkowe <b>S</b> przed samogłoską jest zwykle dźwięczne [z]; w <i>studieren</i> początkowe <b>st</b> to [ʃt]."
      },
      {
        tr: "Po studiach mam zamiar pracować w Berlinie.",
        why: "W <i>Studium</i> początkowe <b>st</b> to [ʃt]; w <i>nach</i> <b>ch</b> po <b>a</b> to [x]."
      }
    ]
  },
  "lesson:a2-u08-l2": {
    theme: "Powtórka czasów",
    title: "Powtórka: czasy",
    objectives: [
      "wybrać właściwy czas: Perfekt, Präteritum, czas teraźniejszy lub Futur I, Konjunktiv II",
      "tworzyć Perfekt z haben albo sein i Partizip II",
      "używać Präteritum od sein, haben i czasowników modalnych",
      "złożyć prośbę albo wyrazić życzenie za pomocą könnten i hätte gern"
    ],
    theory: [
      {
        h: "Cztery sposoby mówienia o czasie",
        p: "<strong>Perfekt</strong> (<em>haben</em> albo <em>sein</em> + Partizip II) to czas przeszły języka mówionego: <em>Gestern habe ich gearbeitet. Wir sind nach Wien umgezogen.</em> <strong>Präteritum</strong> stosuje się głównie z <em>sein, haben</em> i czasownikami modalnymi, także w mowie: <em>Ich war krank. Wir hatten keinen Hund. Ich musste arbeiten.</em> Przyszłość: czas teraźniejszy ze wskaźnikiem czasu (<em>Morgen fahre ich</em>) albo <strong>werden</strong> + bezokolicznik. <strong>Konjunktiv II</strong> służy do próśb i życzeń: <em>Könnten Sie mir helfen? Ich hätte gern mehr Zeit.</em>"
      },
      {
        h: "haben czy sein w Perfekcie",
        p: "Większość czasowników tworzy Perfekt z <strong>haben</strong>: <em>Ich habe studiert.</em> Czasowniki nieprzechodnie, które wyrażają zmianę miejsca albo stanu, biorą <strong>sein</strong> (nie wszystkie czasowniki ruchu: <em>tanzen</em> bierze <strong>haben</strong>): <em>Ich bin umgezogen. Wir sind angekommen.</em> Tak samo <em>sein</em> i <em>bleiben</em>: <em>Ich bin geblieben.</em> Odmieniony czasownik stoi na drugim miejscu, Partizip II na końcu."
      },
      {
        contrast: "Po polsku jest jeden czas przeszły (<em>pisałem</em>, <em>napisałem</em>), bez czasownika posiłkowego, a różnicę robi aspekt. Po niemiecku Perfekt wymaga <em>haben</em> albo <em>sein</em> i nie oznacza aspektu: <em>Ich habe geschrieben</em> może odpowiadać obu polskim formom, zależnie od kontekstu. Dlatego wybór <em>haben</em> albo <em>sein</em> jest dla Polaka czymś nowym: <em>przeprowadziłem się</em> to po niemiecku <em>Ich bin umgezogen</em>. Präteritum pojawia się w mowie głównie przy <em>war, hatte</em> i czasownikach modalnych. <em>Konjunktiv II</em> grzecznościowy (<em>Könnten Sie ...?</em>, <em>Ich hätte gern ...</em>) odpowiada polskiemu trybowi przypuszczającemu (<em>czy mógłby Pan ..., chciałbym</em>)."
      },
      {
        trap: "Nie miesza się szyku: „Gestern ich habe gearbeitet” ma czasownik na trzecim miejscu, a <em>Gestern habe ich gearbeitet</em> ma odmieniony czasownik na drugim. Nie mówi się „Ich habe umgezogen” (jak po polsku, gdzie nie ma czasownika posiłkowego): <em>umziehen</em> zachowuje się jak czasownik ruchu i bierze <em>sein</em>, <em>Ich bin umgezogen</em>. A prośba brzmi <em>Könnten Sie ...?</em>, nie „Könnte Sie ...?”."
      },
      {
        tip: "Zanim napiszesz zdanie, zapytaj się: czy to już się stało (Perfekt albo <em>war/hatte</em>), czy się stanie (czas teraźniejszy + czas albo <em>werden</em>), czy to prośba (Konjunktiv II)? Potem sprawdź, gdzie stoi odmieniony czasownik: w zdaniu oznajmującym na drugim miejscu, a w pytaniu bez wyrazu pytającego na pierwszym (<em>Könnten Sie mir helfen?</em>)."
      }
    ],
    grammar: {
      title: "Powtórka czasów",
      note: "<b>Perfekt</b>: haben/sein + Partizip II na końcu. <b>Präteritum</b>: war, hatte, czasowniki modalne. <b>Przyszłość</b>: czas teraźniejszy + czas albo <b>werden</b> + bezokolicznik. <b>Konjunktiv II</b>: könnten, hätte gern.",
      table: {
        head: ["czas", "przykład", "zastosowanie"],
        rows: [
          ["Perfekt", "Gestern habe ich den ganzen Tag gearbeitet.", "czas przeszły języka mówionego"],
          ["Perfekt z sein", "Letztes Jahr sind wir nach Wien umgezogen.", "ruch albo zmiana stanu"],
          ["Präteritum", "Als Kind war ich oft krank.", "sein, haben, czasowniki modalne"],
          ["Przyszłość", "Morgen werde ich dich anrufen.", "czas teraźniejszy + czas albo werden"],
          ["Konjunktiv II", "Könnten Sie mir bitte helfen?", "prośby i życzenia"]
        ]
      },
      examples: [
        { tr: "Wczoraj pracowałem cały dzień.", note: "Perfekt z haben" },
        { tr: "W zeszłym roku przeprowadziliśmy się do Wiednia.", note: "Perfekt z sein" },
        { tr: "Jako dziecko często chorowałem i nie mieliśmy psa.", note: "Präteritum od sein i haben" },
        { tr: "W przyszłym tygodniu jadę do Hamburga.", note: "czas teraźniejszy ze wskaźnikiem czasu" },
        { tr: "Jutro do ciebie zadzwonię.", note: "Futur I: werden + bezokolicznik" },
        { tr: "Czy mógłby mi Pan pomóc? Chciałbym mieć więcej czasu.", note: "Konjunktiv II grzecznościowy i życzeniowy" }
      ]
    },
    vocab: [
      "CV, życiorys",
      "doświadczenie",
      "praktyka, staż",
      "aplikacja, podanie o pracę",
      "szef",
      "kolega z pracy",
      "pensja",
      "kurs"
    ],
    exercises: [
      {
        tr: "Perfekt od umziehen, wszystkie osoby.",
        why: "<i>Ich bin umgezogen, du bist umgezogen, er ist umgezogen, wir sind umgezogen, ihr seid umgezogen, sie sind umgezogen</i>: <i>umziehen</i> bierze <i>sein</i>, a Partizip II ma <i>-ge-</i> w środku."
      },
      {
        tr: "Präteritum od arbeiten, wszystkie osoby.",
        why: "<i>Arbeitete, arbeitetest, arbeitete, arbeiteten, arbeitetet, arbeiteten</i>: temat kończy się na <i>-t</i>, więc między tematem a końcówką wstawia się <b>-e-</b>."
      },
      {
        tr: "Konjunktiv II od können, wszystkie osoby.",
        why: "<i>Könnte, könntest, könnte, könnten, könntet, könnten</i>: formę tworzy się od Präteritum <i>konnte</i> z przegłosem."
      },
      {
        q: "Które zdanie jest poprawne? (Wczoraj napisałem list.)",
        opts: [
          "Gestern ich habe einen Brief geschrieben.",
          "Gestern habe ich einen Brief geschrieben.",
          "Gestern habe ich einen Brief schrieben."
        ],
        why: "Gdy <i>gestern</i> stoi na pierwszym miejscu, odmieniony czasownik (<i>habe</i>) zostaje na drugim, podmiot idzie za nim, a Partizip II <i>geschrieben</i> na końcu."
      },
      {
        q: "Które zdanie jest grzeczną prośbą?",
        opts: [
          "Könnten Sie mir bitte helfen?",
          "Können Sie mir bitte geholfen?",
          "Könnte Sie mir bitte helfen?"
        ],
        why: "<b>Könnten Sie ...?</b>: przy <i>Sie</i> forma brzmi <i>könnten</i>, a bezokolicznik <i>helfen</i> idzie na koniec."
      },
      {
        q: "Uzupełnij zdanie.",
        tr: "W zeszłym roku przeprowadziliśmy się do Wiednia.",
        why: "<i>Letztes Jahr sind wir nach Wien umgezogen</i>: <i>umziehen</i> tworzy Perfekt z <b>sein</b>."
      },
      {
        q: "Uzupełnij zdanie.",
        tr: "Jako dziecko często chorowałem i nie mieliśmy psa.",
        why: "<i>Als Kind war ich oft krank, und wir hatten keinen Hund</i>: Präteritum od <i>sein</i> (<i>war</i>) i od <i>haben</i> (<i>hatten</i>)."
      },
      {
        q: "Uzupełnij zdanie (pierwsza luka: werden w Futur I; druga luka: haben w Konjunktiv II).",
        tr: "Jutro do ciebie zadzwonię. Chciałbym mieć więcej czasu.",
        why: "<i>Morgen werde ich dich anrufen</i>: Futur I, z bezokolicznikiem na końcu. <i>Ich hätte gern mehr Zeit</i>: Konjunktiv II od <i>haben</i>, wyrażający życzenie."
      },
      {
        q: "Przetłumacz: „Wczoraj pracowałem cały dzień.” (użyj Perfekt)",
        why: "<i>Gestern habe ich den ganzen Tag gearbeitet</i> albo <i>Ich habe gestern den ganzen Tag gearbeitet</i>: <i>habe</i> na drugim miejscu, <i>gearbeitet</i> na końcu."
      },
      {
        tr: "W zeszłym roku przeprowadziłem się do Wiednia. Teraz tam pracuję, a w przyszłym roku pójdę na kurs. Chciałbym mieć więcej czasu.",
        why: "W <i>Wien</i> <b>W</b> to [v]; w <i>besuchen</i> <b>ch</b> po <b>u</b> to [x]; w <i>gern</i> <b>g</b> to [g]."
      },
      {
        tr: "W zeszłym roku przeprowadziłem się, a jesienią będę studiować.",
        why: "W <i>umgezogen</i> <b>z</b> czyta się zawsze [ts], a <b>g</b> to [g]; w <i>studieren</i> początkowe <b>st</b> to [ʃt]; w <i>werde</i> <b>w</b> to [v]."
      }
    ]
  },
  "lesson:a2-u08-l3": {
    theme: "Powtórka przypadków i zaimków",
    title: "Powtórka: przypadki i zaimki",
    objectives: [
      "wybrać między zaimkiem w bierniku a w celowniku",
      "używać rodzajnika w celowniku (dem, der, dem, den)",
      "ułożyć w dobrej kolejności zaimek i rzeczownik, biernik i celownik",
      "rozpoznawać czasowniki, które wymagają celownika (helfen, danken, gehören, schenken)"
    ],
    theory: [
      {
        h: "Zaimki: mianownik, biernik, celownik",
        p: "<strong>ich / mich / mir</strong>, <strong>du / dich / dir</strong>, <strong>er / ihn / ihm</strong>, <strong>sie / sie / ihr</strong>, <strong>es / es / ihm</strong>, <strong>wir / uns / uns</strong>, <strong>ihr / euch / euch</strong>, <strong>sie / sie / ihnen</strong>. Biernik odpowiada na pytanie <em>kogo? co?</em> (<em>Ich sehe ihn.</em>), celownik na pytanie <em>komu?</em> (<em>Ich helfe ihm.</em>). Przy <em>wir</em> i <em>ihr</em> biernik i celownik mają tę samą formę: <em>Er sieht uns. Er hilft uns.</em>"
      },
      {
        h: "Rodzajnik w celowniku",
        p: "W celowniku rodzajnik określony to <strong>dem</strong> (rodzaj męski i nijaki), <strong>der</strong> (rodzaj żeński), <strong>den</strong> (liczba mnoga; rzeczownik dostaje <strong>-n</strong>, z wyjątkiem liczby mnogiej, która już kończy się na -n lub -en, na -s oraz niektórych obcych form liczby mnogiej o innych końcówkach, jak <em>Praktika</em>): <em>dem Vermieter, der Mutter, den Kindern, den Nachbarn, den Jobs, den Praktika.</em> Z rodzajnikiem nieokreślonym i zaimkiem dzierżawczym: <em>einem, einer, meinem, meiner.</em> Czasowniki z celownikiem: <strong>helfen, danken, gehören, gefallen, gratulieren</strong>. Przy <strong>schenken</strong> (jemandem etwas schenken) odbiorca stoi w celowniku, a podarowana rzecz w bierniku: <em>Ich schenke meiner Mutter einen Kuchen.</em>"
      },
      {
        h: "Szyk wyrazów",
        p: "Przy dwóch rzeczownikach zwykle najpierw <strong>celownik</strong>, potem biernik: <em>Ich gebe dem Mann das Buch.</em> Przy dwóch zaimkach najpierw <strong>biernik</strong>, potem celownik: <em>Ich gebe es ihm.</em> Przy zaimku i rzeczowniku zaimek stoi pierwszy: <em>Ich gebe ihm das Buch. Ich gebe es dem Mann.</em>"
      },
      {
        contrast: "Polak ma tu przewagę: celownik zna z własnego języka, a wiele czasowników rządzi nim tak samo po obu stronach (<em>pomagam mu</em> = <em>ich helfe ihm</em>, <em>dziękuję mu</em> = <em>ich danke ihm</em>, <em>podaruję mu</em> = <em>ich schenke ihm</em>). Kłopot jest gdzie indziej. Po niemiecku rodzajnik i końcówka rzeczownika zmieniają się wraz z przypadkiem (<em>dem, der, den</em> + <em>-n</em>), a po polsku rodzajników nie ma. Szyk jest sztywny: po polsku można powiedzieć <em>daję mu to</em> albo <em>daję to jemu</em>, a po niemiecku przy dwóch zaimkach zawsze <em>Ich gebe es ihm</em>. Trzecia osoba rozróżnia rodzaj: <em>ihm</em> (męski i nijaki), <em>ihr</em> (żeński). I uwaga na <em>gehören</em>: po polsku <em>należy do mnie</em> (przyimek <em>do</em> + dopełniacz), po niemiecku sam celownik: <em>Das gehört mir</em>."
      },
      {
        trap: "Nie mówi się „Ich helfe ihn” ani „Ich sehe ihm”: <em>helfen</em> wymaga celownika (<em>ihm</em>), <em>sehen</em> biernika (<em>ihn</em>). Nie mówi się „Ich gebe ihm es”: przy dwóch zaimkach biernik idzie pierwszy, <em>Ich gebe es ihm</em>. Nie mówi się też „Der Schlüssel gehört zum Vermieter”: w znaczeniu „należy do kogoś” <em>gehören</em> nie ma <em>zu</em>, <em>Der Schlüssel gehört dem Vermieter</em>. A po <em>mit, bei, zu</em> rodzajnik jest zawsze w celowniku: <em>beim Umzug</em> (<em>bei dem Umzug</em>), <em>mit dem Auto</em>."
      },
      {
        tip: "Żeby wybrać przypadek, zapytaj najpierw, czy czasownik wymaga celownika (<em>helfen, danken, gehören</em>), a potem, czy osoba coś dostaje. Przy każdym nowym czasowniku ucz się też jego przypadka."
      }
    ],
    grammar: {
      title: "Biernik, celownik i zaimki",
      note: "<b>mich/mir, dich/dir, ihn/ihm, sie/ihr, uns/uns, euch/euch, sie/ihnen</b>. Rodzajnik w celowniku: <b>dem, der, dem, den</b>; w liczbie mnogiej rzeczownik dostaje <b>-n</b> (<i>den Kindern</i>), z wyjątkiem liczby mnogiej na -n/-en, na -s i niektórych obcych form liczby mnogiej o innych końcówkach (<i>den Nachbarn, den Jobs, den Praktika</i>). Dwa zaimki: najpierw <b>biernik</b> (<i>Ich gebe es ihm</i>).",
      table: {
        head: ["mianownik", "biernik", "celownik"],
        rows: [
          ["ich", "mich", "mir"],
          ["du", "dich", "dir"],
          ["er", "ihn", "ihm"],
          ["sie", "sie", "ihr"],
          ["es", "es", "ihm"],
          ["wir", "uns", "uns"],
          ["ihr", "euch", "euch"],
          ["sie", "sie", "ihnen"]
        ]
      },
      examples: [
        { tr: "Widzę go codziennie w biurze.", note: "sehen + biernik: ihn" },
        { tr: "Pomagam mu w przeprowadzce.", note: "helfen + celownik: ihm" },
        { tr: "Klucz należy do właściciela mieszkania.", note: "gehören + celownik: dem Vermieter" },
        { tr: "Daję mojej matce kwiaty w prezencie.", note: "celownik rodzaju żeńskiego: meiner Mutter" },
        { tr: "Daję to jemu.", note: "dwa zaimki: najpierw biernik, es ihm" },
        { tr: "Dziękujemy sąsiadom za pomoc.", note: "celownik liczby mnogiej: den Nachbarn" }
      ]
    },
    vocab: [
      "wynajmujący, właściciel mieszkania",
      "sąsiad",
      "czynsz",
      "umowa najmu",
      "klucz",
      "karton",
      "adres",
      "mebel"
    ],
    exercises: [
      {
        q: "Jak powiedzieć „Pomagam mu w przeprowadzce” (o koledze)?",
        opts: [
          "Ich helfe ihm beim Umzug.",
          "Ich helfe ihn beim Umzug.",
          "Ich helfe er beim Umzug."
        ],
        why: "<i>Helfen</i> wymaga celownika: <b>ihm</b>. <i>Beim</i> to <i>bei dem</i>, znowu celownik."
      },
      {
        q: "Które zdanie ma właściwy szyk?",
        opts: [
          "Ich gebe ihm es.",
          "Ich gebe es ihm.",
          "Ich es gebe ihm."
        ],
        why: "Przy dwóch zaimkach najpierw stoi biernik (<i>es</i>), potem celownik (<i>ihm</i>), a odmieniony czasownik zostaje na drugim miejscu."
      },
      {
        q: "Które zdania są poprawne?",
        opts: [
          "Ich helfe dir.",
          "Ich helfe dich.",
          "Das gehört mir.",
          "Ich sehe ihm im Büro.",
          "Wir danken euch."
        ],
        why: "<i>Helfen, gehören, danken</i> wymagają celownika (<i>dir, mir, euch</i>). <i>Sehen</i> wymaga biernika: <i>Ich sehe ihn.</i>"
      },
      {
        q: "Uzupełnij: „Ich schenke ___ Mutter Blumen.” (rodzajnik określony)",
        hint: "celownik rodzaju żeńskiego",
        why: "<i>Die Mutter</i> jest rodzaju żeńskiego, a w celowniku rodzajnik brzmi <b>der</b>: <i>Ich schenke der Mutter Blumen.</i>"
      },
      {
        q: "Uzupełnij: „Der Schlüssel gehört ___ Vermieter.” (rodzajnik określony)",
        hint: "celownik rodzaju męskiego",
        why: "<i>Gehören</i> wymaga celownika, a <i>der Vermieter</i> jest rodzaju męskiego: <b>dem</b>."
      },
      {
        q: "Uzupełnij: „Kennst du Tim? Ich sehe ___ oft im Büro.” (go: Tima)",
        hint: "biernik od er",
        why: "<i>Sehen</i> wymaga biernika: <b>ihn</b>."
      },
      {
        q: "Uzupełnij: „Das sind Anna und Tim. Ich danke ___ für die Hilfe.” (im)",
        hint: "celownik liczby mnogiej",
        why: "<i>Danken</i> wymaga celownika, a w liczbie mnogiej zaimek brzmi <b>ihnen</b>."
      },
      {
        q: "Uzupełnij zdanie.",
        tr: "Gdzie jest karton? Szukam go od dawna. Możesz mi pomóc?",
        why: "<i>Der Karton</i> jest rodzaju męskiego, a <i>suchen</i> wymaga biernika: <b>ihn</b>. <i>Helfen</i> wymaga celownika: <b>mir</b>."
      },
      {
        tr: "Pomagam mojej koleżance w przeprowadzce. Daje mi w prezencie ciasto, a ja jej dziękuję.",
        why: "W <i>Freundin</i> <b>eu</b> to [ɔʏ]; w <i>schenkt</i> <b>sch</b> to [ʃ]; w <i>Kuchen</i> <b>ch</b> po <b>u</b> to [x]."
      },
      {
        tr: "Daję mu klucz, a on pomaga mi w przeprowadzce.",
        why: "W <i>Schlüssel</i> <b>sch</b> to [ʃ], a <b>ü</b> jest zaokrąglone; w <i>Umzug</i> <b>z</b> to [ts]; w <i>hilft</i> początkowe <b>h</b> to lekki oddech."
      }
    ]
  },
  "lesson:a2-u08-l4": {
    theme: "Zdania podrzędne",
    title: "Gotowi na B1",
    objectives: [
      "podać powód za pomocą weil i zdawać relację za pomocą dass",
      "wybierać między als a wenn",
      "stawiać odmieniony czasownik na końcu zdania podrzędnego",
      "radzić sobie z czasownikami modalnymi, Perfektem i czasownikami rozdzielnie złożonymi w zdaniu podrzędnym"
    ],
    theory: [
      {
        h: "weil, dass, als, wenn: czasownik idzie na koniec",
        p: "Po <strong>weil</strong> (ponieważ, bo), <strong>dass</strong> (że), <strong>als</strong> i <strong>wenn</strong> (kiedy) odmieniony czasownik idzie <strong>na koniec</strong>, a między zdaniem głównym a podrzędnym stoi przecinek: <em>Ich bleibe zu Hause, weil ich arbeiten muss. Ich hoffe, dass ich bald eine Stelle finde.</em> Gdy na końcu stoi czasownik modalny, to on jest odmieniony (<em>muss</em>); przy Perfekcie jest to czasownik posiłkowy (<em>weil ich umgezogen bin</em>); przy czasowniku rozdzielnie złożonym przedrostek łączy się z powrotem (<em>weil ich früh aufstehe</em>)."
      },
      {
        h: "Gdy zdanie podrzędne stoi na początku",
        p: "Jeśli zdanie podrzędne otwiera całość, zdanie główne zaczyna się od <strong>odmienionego czasownika</strong>: <em>Weil ich krank bin, bleibe ich zu Hause. Wenn ich Zeit habe, lerne ich Deutsch.</em> Zdanie podrzędne zajmuje samo pierwsze miejsce, a czasownik zdania głównego zostaje na drugim."
      },
      {
        h: "als czy wenn?",
        p: "<strong>Als</strong> wprowadza jednorazowy fakt z przeszłości: <em>Als ich in Wien angekommen bin, habe ich dich angerufen.</em> <strong>Wenn</strong> dotyczy teraźniejszości, przyszłości i czynności powtarzających się: <em>Wenn ich Zeit habe, lerne ich Deutsch.</em> W pytaniu bezpośrednim używa się natomiast <em>wann</em>: <em>Wann kommst du?</em>"
      },
      {
        contrast: "Po polsku szyk w zdaniu podrzędnym się nie zmienia: <em>zostaję w domu, bo muszę pracować</em>. Po niemiecku <em>weil ich arbeiten muss</em> odsyła czasownik modalny na koniec. Przecinek przed <em>że</em> po polsku też się stawia, więc <em>dass</em> nie sprawi kłopotu. Po polsku jest jedno <em>kiedy</em> (także <em>gdy</em>), a niemiecki rozróżnia <em>als</em> (raz, w przeszłości) i <em>wenn</em> (za każdym razem albo w teraźniejszości i przyszłości); <em>wenn</em> znaczy też <em>jeśli</em>. Polskie <em>bo</em> odpowiada <em>weil</em> albo <em>denn</em>, ale tylko po <em>weil</em> czasownik idzie na koniec."
      },
      {
        trap: "Nie pisze się „weil ich muss arbeiten”: czasownik modalny idzie na koniec, <em>weil ich arbeiten muss</em>. Na „bo” są <em>weil</em> i <em>denn</em>, ale po <em>denn</em> czasownik zostaje na drugim miejscu (<em>..., denn ich muss arbeiten</em>). Nie mówi się „wenn ich in Wien angekommen bin” o jednorazowym fakcie z przeszłości: tam trzeba <em>als</em>. I <em>weil</em> nie jest pytaniem: pyta się <em>Warum?</em>."
      },
      {
        tip: "Gdy zdanie zaczyna się od <em>weil, dass, als, wenn</em>, znajdź odmieniony czasownik i przenieś go na koniec. Jeśli w zdaniu są dwa czasowniki (<em>muss arbeiten</em>), na końcu stoi ten odmieniony: <em>arbeiten muss</em>."
      }
    ],
    grammar: {
      title: "weil, dass, als, wenn",
      note: "W zdaniu podrzędnym odmieniony czasownik idzie <b>na koniec</b>. <b>weil</b> = ponieważ, <b>dass</b> = że, <b>als</b> = kiedy (jednorazowy fakt z przeszłości), <b>wenn</b> = kiedy lub jeśli (teraźniejszość, przyszłość, zwyczaj). Zdanie podrzędne na początku: zdanie główne zaczyna się od czasownika.",
      table: {
        head: ["spójnik", "przykład", "uwaga"],
        rows: [
          ["weil", "Ich bleibe zu Hause, weil ich arbeiten muss.", "czasownik modalny na końcu"],
          ["dass", "Ich hoffe, dass ich bald eine Stelle finde.", "przecinek obowiązkowy"],
          ["als", "Als ich in Wien angekommen bin, habe ich dich angerufen.", "jednorazowy fakt z przeszłości"],
          ["wenn", "Wenn ich Zeit habe, lerne ich Deutsch.", "teraźniejszość, przyszłość, zwyczaj"]
        ]
      },
      examples: [
        { tr: "Zostaję w domu, bo muszę pracować.", note: "weil: czasownik modalny muss na końcu" },
        { tr: "Ponieważ jestem chory, zostaję w domu.", note: "zdanie podrzędne na początku: zdanie główne zaczyna się od czasownika" },
        { tr: "Mam nadzieję, że niedługo znajdę pracę.", note: "dass: odmieniony czasownik na końcu" },
        { tr: "Kiedy przyjechałem do Wiednia, zadzwoniłem do ciebie.", note: "als: jednorazowy fakt z przeszłości" },
        { tr: "Kiedy mam czas, uczę się niemieckiego.", note: "wenn: teraźniejszość, zwyczaj" },
        { tr: "Wiem, że jutro nie może przyjść.", note: "dass: kommen kann, czasownik modalny na końcu" }
      ]
    },
    vocab: [
      "przyszłość",
      "marzenie",
      "cel",
      "możliwość",
      "decyzja",
      "mieć nadzieję",
      "ważny",
      "pewny"
    ],
    exercises: [
      {
        tr: "Czas teraźniejszy czasownika wollen, wszystkie osoby.",
        why: "<i>Will, willst, will, wollen, wollt, wollen</i>: w pierwszej i trzeciej osobie liczby pojedynczej forma jest taka sama, bez końcówki."
      },
      {
        tr: "Präteritum od müssen, wszystkie osoby.",
        why: "<i>Musste, musstest, musste, mussten, musstet, mussten</i>: przegłos znika, a pierwsza i trzecia osoba liczby pojedynczej są takie same."
      },
      {
        tr: "Perfekt od bleiben, wszystkie osoby.",
        why: "<i>Ich bin geblieben, du bist geblieben, er ist geblieben, wir sind geblieben, ihr seid geblieben, sie sind geblieben</i>: <i>bleiben</i> bierze <i>sein</i>."
      },
      {
        q: "Uzupełnij: „Ich bleibe hier, ___ ich arbeiten muss.” (ponieważ)",
        hint: "spójnik, który odsyła czasownik na koniec",
        why: "<b>weil</b> odsyła odmieniony czasownik na koniec: <i>weil ich arbeiten muss</i>. <i>Denn</i> zostawiłoby czasownik na drugim miejscu."
      },
      {
        q: "Uzupełnij: „Ich hoffe, ___ ich bald eine Stelle finde.” (że)",
        hint: "spójnik wprowadzający treść",
        why: "<b>dass</b> wprowadza to, na co się liczy, a odmieniony czasownik <i>finde</i> idzie na koniec."
      },
      {
        q: "Uzupełnij: „___ ich in Wien angekommen bin, habe ich dich angerufen.” (kiedy)",
        hint: "jednorazowy fakt z przeszłości",
        why: "Jednorazowy fakt z przeszłości wymaga <b>als</b>. Gdy zdanie podrzędne stoi na pierwszym miejscu, zdanie główne zaczyna się od czasownika: <i>habe ich dich angerufen</i>."
      },
      {
        q: "Uzupełnij: „___ ich Zeit habe, lerne ich Deutsch.” (kiedy, zwykle)",
        hint: "teraźniejszość albo zwyczaj",
        why: "Przy teraźniejszości i czynnościach powtarzających się używa się <b>wenn</b>."
      },
      {
        q: "Uzupełnij: „Ich weiß, dass er morgen nicht kommen ___.” (können, er)",
        hint: "czasownik modalny idzie na koniec",
        why: "W zdaniu podrzędnym czasownik modalny idzie na koniec: <b>kann</b>. Zdanie kończy się na <i>kommen kann</i>."
      },
      {
        q: "Uzupełnij zdanie.",
        tr: "Zostaję w domu, bo jestem chory.",
        why: "<i>Ich bleibe zu Hause, weil ich krank bin</i>: <i>weil</i> odsyła <i>bin</i> na koniec."
      },
      {
        q: "Przetłumacz: „Zostaję w domu, bo muszę pracować.”",
        why: "<i>Ich bleibe zu Hause, weil ich arbeiten muss</i>: czasownik modalny <i>muss</i> na końcu. Poprawne jest też <i>daheim</i>, a zdanie podrzędne może stać na początku: <i>Weil ich arbeiten muss, bleibe ich zu Hause.</i>"
      },
      {
        tr: "Mam nadzieję, że jesienią znajdę pracę. Kiedy mam czas, uczę się niemieckiego, bo jest to ważne w mojej pracy.",
        why: "W <i>Herbst</i> <b>b</b> przed <b>st</b> brzmi [p]; w <i>wichtig</i> końcówka <b>-ig</b> to w standardowym niemieckim (de-DE) zwykle [ɪç], a <b>w</b> pozostaje [v]; w <i>Deutsch</i> <b>eu</b> czyta się [ɔʏ], a <b>tsch</b> [tʃ]."
      },
      {
        tr: "Wiem, że muszę dużo się uczyć, bo egzamin jest trudny.",
        why: "W <i>weiß</i> <b>ß</b> to bezdźwięczne <b>s</b>, a <b>ei</b> to [aɪ]; w <i>Prüfung</i> <b>ü</b> jest zaokrąglone; w <i>schwer</i> <b>sch</b> to [ʃ]."
      }
    ]
  },
  "lesson:a2-u08-test": {
    theme: "Sprawdzian",
    title: "Test: Plany",
    objectives: ["sprawdzić vorhaben + zu, czasy poziomu A2 (Perfekt, Präteritum, Konjunktiv II), zaimki i celownik, weil, dass, als i wenn"],
    theory: [
      {
        p: "Dwanaście pytań z całego poziomu A2. Zaliczenie od 70%. Nie zaglądaj do lekcji, odpowiadając: jeśli czegoś nie pamiętasz, lepiej wrócić do powtórki."
      }
    ],
    exercises: [
      {
        tr: "Perfekt od gehen, wszystkie osoby.",
        why: "<i>Ich bin gegangen, du bist gegangen, er ist gegangen, wir sind gegangen, ihr seid gegangen, sie sind gegangen</i>: <i>gehen</i> bierze <i>sein</i>."
      },
      {
        tr: "Konjunktiv II od haben, wszystkie osoby.",
        why: "<i>Hätte, hättest, hätte, hätten, hättet, hätten</i>: Präteritum <i>hatte</i> z przegłosem."
      },
      {
        q: "Uzupełnij: „Ich habe vor, im Herbst in Wien ___ studieren.”",
        hint: "przed bezokolicznikiem",
        why: "<b>zu</b> stoi bezpośrednio przed bezokolicznikiem: <i>in Wien zu studieren</i>."
      },
      {
        q: "Uzupełnij: „Als Kind ___ ich oft krank.” (być)",
        hint: "Präteritum od sein, ich",
        why: "<b>War</b>: w pierwszej osobie liczby pojedynczej nie ma żadnej końcówki."
      },
      {
        q: "Uzupełnij: „Ich helfe ___ beim Umzug.” (jemu)",
        hint: "celownik od er",
        why: "<i>Helfen</i> wymaga celownika: <b>ihm</b>."
      },
      {
        q: "Uzupełnij: „Ich bleibe zu Hause, ___ ich krank bin.” (ponieważ)",
        hint: "spójnik, który odsyła czasownik na koniec",
        why: "<b>weil</b> odsyła odmieniony czasownik na koniec: <i>weil ich krank bin</i>."
      },
      {
        q: "Uzupełnij: „Ich ___ gern ein Zimmer.” (chciałbym mieć)",
        hint: "Konjunktiv II od haben, ich",
        why: "<b>Hätte</b>: <i>Ich hätte gern ein Zimmer</i> to grzeczna forma wyrażająca życzenie."
      },
      {
        q: "Uzupełnij: „Wir sind gestern in Berlin ___.” (Partizip II od ankommen)",
        hint: "Partizip II z -ge- w środku",
        why: "<b>angekommen</b>: w czasownikach rozdzielnie złożonych <i>-ge-</i> wchodzi między przedrostek a czasownik, a <i>ankommen</i> bierze <i>sein</i>."
      },
      {
        q: "Które zdanie jest poprawne?",
        opts: [
          "Ich habe vor, nach dem Studium in Berlin zu arbeiten.",
          "Ich habe vor, nach dem Studium in Berlin arbeiten zu.",
          "Ich habe vor, nach dem Studium in Berlin zu arbeitet."
        ],
        why: "<b>zu</b> stoi przed bezokolicznikiem, a bezokolicznik <i>arbeiten</i> kończy zdanie."
      },
      {
        q: "Uzupełnij zdanie (użyj ankommen w Perfekcie).",
        tr: "Kiedy dojadę do Wiednia, zadzwonię do ciebie.",
        why: "<i>Wenn ich in Wien angekommen bin, rufe ich dich an</i>: <i>wenn</i> dotyczy przyszłości, Perfekt ma czasownik posiłkowy <i>bin</i> na końcu, a zdanie główne zaczyna się od czasownika <i>rufe</i>."
      },
      {
        q: "Przetłumacz: „Dałem klucz Timowi.” (użyj zaimka za Tima i Perfektu)",
        why: "<i>Ich habe ihm den Schlüssel gegeben</i>: zaimek w celowniku <i>ihm</i> stoi przed rzeczownikiem w bierniku, <i>den Schlüssel</i>."
      },
      {
        tr: "Mam zamiar się przeprowadzić, bo mam nową pracę.",
        why: "W <i>umzuziehen</i> <b>z</b> to [ts], a <i>zu</i> stoi w środku; w <i>weil</i> <b>w</b> to [v]; w <i>Stelle</i> początkowe <b>st</b> to [ʃt]."
      }
    ]
  }
});
