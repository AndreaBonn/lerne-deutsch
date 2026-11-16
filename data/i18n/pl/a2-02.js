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
    grammarNote: "Könnten Sie ...? · pytania zależne z ob i zaimkiem pytajnym · list oficjalny · man · zuerst, dann, danach, außerdem"
  },
  "lesson:a2-u06-l1": {
    theme: "Przez telefon",
    title: "Czy mógłby Pan do mnie oddzwonić?",
    objectives: [
      "zadzwonić i zostawić wiadomość z użyciem Könnten Sie ...?",
      "zadać pytanie zależne z ob albo z zaimkiem pytajnym",
      "przesunąć czasownik na koniec w zdaniu z ob, wann, wo i dass"
    ],
    theory: [
      {
        h: "Prośba o oddzwonienie i zostawienie wiadomości",
        p: "Przez telefon, do osoby, której nie znasz, używasz formy grzecznościowej: <em>Guten Tag, hier ist Weber. Könnten Sie mich bitte zurückrufen?</em> Żeby zostawić wiadomość: <em>Könnten Sie Frau Keller etwas ausrichten?</em> Osoba odbierająca mówi zwykle <em>Ich verbinde Sie</em> (łączę Pana/Panią) albo <em>Frau Keller ist gerade nicht am Platz</em> (nie ma jej w tej chwili przy biurku). <em>Zurückrufen</em> i <em>ausrichten</em> to czasowniki rozdzielnie złożone: w bezokoliczniku, po <em>Könnten Sie ...</em>, zostają w całości i idą na koniec zdania."
      },
      {
        h: "Pytania zależne: ob i zaimek pytajny",
        p: "Pytanie może wejść do środka innego zdania. Jeśli pytanie bezpośrednie jest <strong>rozstrzygnięcia</strong> (tak/nie, <em>Ist Herr Weber im Büro?</em>), pytanie zależne wprowadza <strong>ob</strong>; jeśli ma <strong>zaimek pytajny</strong> (<em>wann, wo, wer, wie, warum</em>), ten zaimek zostaje i otwiera zdanie podrzędne. W obu przypadkach odmieniony czasownik idzie <strong>na koniec</strong>, a przed zdaniem stoi przecinek: <em>Ich möchte wissen, ob Herr Weber heute im Büro ist. Ich weiß nicht, wann die Besprechung beginnt. Könnten Sie mir sagen, wo Frau Keller ist?</em> Przy czasowniku rozdzielnie złożonym przedrostek łączy się z czasownikiem: <em>Ich weiß nicht, wann er anruft.</em> To samo dotyczy <strong>dass</strong>: <em>Könnten Sie ihr sagen, dass ich morgen wieder anrufe?</em>"
      },
      {
        contrast: "Przecinek przed zdaniem zależnym jest w polskim tak samo obowiązkowy jak w niemieckim: «Nie wiem, kiedy zaczyna się zebranie», «Nie wiem, czy pan Weber jest w biurze», «Powiedz jej, że zadzwonię jutro». Polskie <em>czy</em> odpowiada <em>ob</em>, a <em>jeśli</em> odpowiada <em>wenn</em>, więc tu nie ma pułapki: oba języki je rozróżniają. Różnica jest w szyku. Po polsku szyk jest swobodny i czasownik nie ma stałego miejsca (<em>kiedy zaczyna się zebranie</em>, <em>kiedy zebranie się zaczyna</em>), a w niemieckim zdaniu podrzędnym odmieniony czasownik zawsze stoi na końcu: <em>Ich weiß nicht, wann die Besprechung beginnt</em>, nie «wann beginnt die Besprechung». Druga różnica to grzeczność: polski mówi «Czy mógłby Pan ...?» albo «Czy mogłaby Pani ...?» i forma zależy od rodzaju adresata, a w niemieckim <em>Könnten Sie</em> jest jedno dla wszystkich, z czasownikiem w 3. osobie liczby <strong>mnogiej</strong>."
      },
      {
        trap: "Po <em>ob</em> nie używa się <em>wenn</em>: <em>Ich weiß nicht, ob er kommt</em>. Przecinek przed <em>ob</em>, <em>dass</em> i zaimkiem pytajnym jest obowiązkowy. Po <em>Könnten Sie mir sagen</em> pytanie zależne nie jest już pytaniem bezpośrednim: <em>Könnten Sie mir sagen, wo Frau Keller ist?</em>, nie «wo ist Frau Keller». Uwaga na szyk po polsku: bezokolicznik stoi zwykle zaraz po «mógłby» (<em>oddzwonić</em>), a po niemiecku idzie na koniec, po wszystkich dopełnieniach."
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
        why: "<b>wann</b> jest zaimkiem pytajnym i zostaje: <i>..., wann die Besprechung beginnt</i>."
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
        h: "man: ktokolwiek",
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
      "zgodny",
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
        p: "Dziesięć pytań o całej jednostce. Zaliczasz przy 70%. Nie zaglądaj do lekcji w trakcie odpowiadania: jeśli czegoś nie pamiętasz, lepiej wrócić i powtórzyć."
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
        pairs: ["wiadomość", "temat (e-maila)", "zebranie", "kolega z pracy"]
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
  }
});
