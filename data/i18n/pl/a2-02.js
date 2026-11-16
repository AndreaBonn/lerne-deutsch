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
  }
});
