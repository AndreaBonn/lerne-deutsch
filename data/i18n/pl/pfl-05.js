/* ============================================================
   Teksty w języku ucznia (pl) dla data/core/pfl-05.js, jednostka pfl-u05.
   Klucze wskazują id w warstwie neutralnej; tablice łączą się
   po indeksie, więc ich długość musi zgadzać się z core.
   Sprawdzane przez scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("pl", {
  "unit:pfl-u05": {
    title: "Leki i ulotka",
    grammarNote: "złożenia i drogi podania · vor, nach, mit, seit, zu z celownikiem · zdania z wenn i falls · strona bierna z werden i z czasownikiem modalnym"
  },
  "lesson:pfl-u05-l1": {
    theme: "Postacie i drogi",
    title: "Tabletki, krople, zastrzyki",
    objectives: [
      "nazwać najczęstsze postacie leku razem z rodzajnikiem",
      "podać drogę podania w Fachsprache i słowami zrozumiałymi dla pacjenta",
      "tworzyć złożenia takie jak Schmerztablette i Augentropfen",
      "wyjaśnić pacjentowi, co dostaje, bez wchodzenia w leczenie"
    ],
    theory: [
      {
        h: "Postacie leku",
        p: "Na oddziale codziennie nazywasz tylko kilka postaci leku: <em>die Tablette</em> (tabletka), <em>die Kapsel</em> (kapsułka), <em>der Tropfen</em> (prawie zawsze w liczbie mnogiej, <em>die Tropfen</em>), <em>der Saft</em> (syrop), <em>die Salbe</em> (maść), <em>das Zäpfchen</em> (czopek), <em>die Spritze</em> i <em>die Infusion</em>. Niemiecki tworzy z nich złożenia bez końca, a <strong>rodzajnik zależy od ostatniego członu</strong>: <em>der Schmerz + die Tablette</em> = <em>die Schmerztablette</em>; <em>das Auge + die Tropfen</em> = <em>die Augentropfen</em>; <em>der Husten + der Saft</em> = <em>der Hustensaft</em>."
      },
      {
        h: "Drogi podania",
        p: "W dokumentacji i w rozmowie z lekarzem mówi się <em>oral</em>, <em>subkutan</em> (w skrócie <em>s.c.</em>), <em>intravenös</em> (<em>i.v.</em>). Pacjentowi mówi się, dokąd lek trafia: <em>über den Mund</em>, <em>unter die Haut</em>, <em>in die Vene</em>. Przyimki stoją z biernikiem, bo wskazują kierunek: lek idzie <em>unter die Haut</em>, a nie jest <em>unter der Haut</em>. Termin fachowy to <em>die Applikation</em>; w mowie oddziałowej częściej mówi się <em>die Gabe</em>: <em>Die nächste Gabe ist um acht Uhr.</em>"
      },
      {
        contrast: "Po polsku drogi podania mają nazwy rodzime i przejrzyste: <em>doustnie</em> to dosłownie «do ust», <em>podskórnie</em> «pod skórę», <em>dożylnie</em> «do żyły». Pacjent rozumie je bez tłumaczenia, więc pielęgniarka mówi tak samo przy łóżku i w karcie. W niemieckim karta mówi po łacinie: <em>oral</em>, <em>subkutan</em> i <em>intravenös</em> znasz z wykształcenia, ale dla wielu pacjentów są nieprzejrzyste. Przy łóżku przechodzisz więc na formułę z przyimkiem, która brzmi jak polskie słowo rozłożone na części: <em>über den Mund</em>, <em>unter die Haut</em>, <em>in die Vene</em>. Tak samo z <em>die Injektion</em>: to termin fachowy, a pacjent mówi <em>die Spritze</em>, jak po polsku «zastrzyk». W rozmowie z lekarzem i przy przekazaniu dyżuru rejestr fachowy jest normalny: <em>Die Applikation ist subkutan.</em>"
      },
      {
        trap: "<em>Die Tablette</em> jest rodzaju żeńskiego jak tabletka, ale <em>der Tropfen</em> jest męski, choć kropla jest żeńska. <em>Die Spritze</em> to zarówno strzykawka, jak i zastrzyk. <em>Das Zäpfchen</em> to czopek, ale też języczek w gardle: decyduje kontekst. Wlew to <em>die Infusion</em>; pacjenci mówią jednak często <em>der Tropf</em> (<em>Ich hänge am Tropf</em>), czyli dokładnie nasza potoczna «kroplówka», a nie kropla. <em>Die Salbe</em> to maść, nie szałwia (ta jest <em>der Salbei</em>). W złożeniach uważaj na łącznik: <em>Augentropfen</em>, nie «Augetropfen»."
      },
      {
        tip: "Kiedy przynosisz lek, zawsze powiedz prostym zdaniem, jak go przyjąć: <em>Die schlucken Sie bitte mit etwas Wasser.</em> Jeśli pacjent pyta o coś, czego nie wiesz (czy można rozgryźć? rozpuścić?), nie improwizuj: <em>Das weiß ich nicht genau. Ich frage in der Apotheke nach.</em> Wszystkie nazwy leków w tej jednostce, takie jak <em>Dolorex</em> i <em>Cardiomin</em>, są zmyślone."
      }
    ],
    grammar: {
      title: "Postacie, złożenia i drogi",
      note: "W złożeniach rodzajnik pochodzi od <b>ostatniego członu</b>. Droga podania: <b>Fachsprache</b> w dokumentacji, formuła z <b>przyimkiem</b> dla pacjenta.",
      table: {
        head: ["Fachsprache", "dla pacjenta", "po polsku"],
        rows: [
          ["oral", "über den Mund", "doustnie, przez usta"],
          ["subkutan (s.c.)", "unter die Haut", "podskórnie, pod skórę"],
          ["intravenös (i.v.)", "in die Vene", "dożylnie, do żyły"],
          ["die Injektion", "die Spritze", "iniekcja, zastrzyk"],
          ["die Applikation", "die Gabe", "podanie"]
        ]
      },
      examples: [
        { tr: "To jest tabletka przeciwbólowa.", note: "Schmerz + Tablette: die, z powodu Tablette" },
        { tr: "Dolorex jest dostępny w tabletkach i w kroplach.", note: "Dolorex to nazwa zmyślona; es gibt + biernik" },
        { tr: "Zastrzyk dostanie Pani pod skórę.", note: "unter die Haut: kierunek, więc biernik" },
        { tr: "Kroplówka idzie do żyły.", note: "in die Vene: formuła dla pacjenta" },
        { tr: "Podanie jest doustne, czyli przez usta.", note: "najpierw termin fachowy, potem wyjaśnienie" },
        { tr: "Krople do oczu są w lodówce.", note: "Auge + n + Tropfen: łącznik" }
      ]
    },
    vocab: [
      "tabletka",
      "kapsułka",
      "kropla (zwykle w liczbie mnogiej: die Tropfen)",
      "strzykawka, zastrzyk",
      "wlew, kroplówka",
      "maść",
      "czopek",
      "doustny, przez usta (termin fachowy)",
      "podskórny (termin fachowy)",
      "dożylny (termin fachowy)",
      "podanie (termin fachowy)",
      "podanie, dawka podana (słowo oddziałowe)"
    ],
    dialogue: [
      "Dzień dobry, pani Kühn. Przynoszę Pani leki.",
      "A co to jest, to wszystko?",
      "To jest Cardiomin, tabletka. Proszę ją połknąć, popijając odrobiną wody.",
      "A ta buteleczka?",
      "To krople do oczu. Idą do oczu, nie do ust.",
      "Czy dzisiaj dostanę też zastrzyk?",
      "Tak, wieczorem dostanie Pani zastrzyk pod skórę.",
      "Czy to boli?",
      "Tylko małe ukłucie."
    ],
    exercises: [
      {
        q: "Lekarz zapisał «subkutan». Jak powiesz to pacjentowi?",
        opts: ["in die Vene", "unter die Haut", "über den Mund"],
        why: "<i>Subkutan</i> to «pod skórę»: pacjentowi mówi się <b>unter die Haut</b>, z biernikiem, bo lek tam trafia."
      },
      {
        q: "Połącz każdy termin fachowy z formułą dla pacjenta.",
        pairs: ["über den Mund", "unter die Haut", "in die Vene", "die Spritze"]
      },
      {
        q: "Wybierz właściwy rodzajnik określony dla każdego rzeczownika.",
        items: ["tabletka", "kapsułka", "kropla", "zastrzyk, strzykawka", "czopek", "maść"]
      },
      {
        q: "Uzupełnij złożeniem: «Eine Tablette gegen Schmerzen ist eine ___.»",
        hint: "Schmerz + Tablette",
        why: "<b>Schmerztablette</b>, rodzaju żeńskiego jak <i>Tablette</i>, ostatni człon złożenia."
      },
      {
        q: "Które postacie leku przyjmuje się doustnie?",
        opts: ["die Tablette", "die Kapsel", "das Zäpfchen", "die Infusion", "der Saft"],
        why: "Tabletka, kapsułka i syrop idą <i>über den Mund</i>. Czopek nie, a wlew idzie <i>in die Vene</i>."
      },
      {
        q: "Uzupełnij: najpierw termin fachowy, potem słowo dla pacjenta.",
        tr: "Wlew jest dożylny, czyli idzie do żyły.",
        why: "<i>Die Infusion läuft intravenös, also in die Vene</i>: <i>also</i> wprowadza wyjaśnienie dla pacjenta."
      },
      {
        q: "Ułóż słowa we właściwej kolejności.",
        tr: "Zastrzyk dostanie Pani pod skórę.",
        why: "<i>Die Spritze bekommen Sie unter die Haut.</i> Dopełnienie na początku, czasownik <i>bekommen</i> na drugim miejscu, potem podmiot <i>Sie</i>."
      },
      {
        q: "Przetłumacz: «Krople są do oczu.»",
        why: "<i>Die Tropfen sind für die Augen.</i> <i>Für</i> łączy się z biernikiem, a <i>die Augen</i> w liczbie mnogiej się nie zmienia."
      },
      {
        q: "Pacjentka pyta o leki.",
        setting: "Przynosisz pani Kühn poranne leki.",
        lines: [
          { tr: "Pani Marin, jak dostanę ten zastrzyk?" },
          { tr: "Odpowiedz, że dostanie go pod skórę.", answerTr: "Zastrzyk dostanie Pani pod skórę." },
          { tr: "A co jest w tej buteleczce?" },
          { tr: "Odpowiedz, że to krople do oczu.", answerTr: "To krople do oczu." },
          { tr: "Czy mogę rozgryźć tabletkę?" },
          { tr: "Odpowiedz, że nie wiesz na pewno i że zapytasz w aptece.", answerTr: "Nie wiem tego na pewno. Zapytam w aptece." }
        ]
      },
      {
        tr: "To jest Cardiomin, tabletka. Zastrzyk dostanie Pani wieczorem pod skórę.",
        why: "W <i>Spritze</i> początkowe <b>sp</b> czyta się [ʃp], a <b>tz</b> to [ts]; w <i>Haut</i> <b>h</b> jest przydechowe, a <b>au</b> to [aʊ]; w <i>Abend</i> końcowe <b>d</b> czyta się [t]."
      },
      {
        tr: "Zastrzyk dostanie Pani pod skórę.",
        why: "W <i>bekommen</i> akcent pada na <b>kom</b>; w <i>unter</i> końcowe <b>r</b> jest ledwo słyszalne; w <i>Sie</i> początkowe <b>s</b> jest dźwięczne [z]."
      }
    ]
  },
  "lesson:pfl-u05-l2": {
    theme: "Pory",
    title: "Przed jedzeniem czy po jedzeniu?",
    objectives: [
      "wyjaśnić, kiedy przyjmuje się lek: rano, wieczorem, przed snem, w razie potrzeby",
      "używać vor, nach, mit, seit, zu i bei z celownikiem",
      "powiedzieć pacjentowi, że musi pozostać na czczo",
      "odpowiedzieć pacjentowi, który zapomniał dawki, odsyłając do lekarza"
    ],
    theory: [
      {
        h: "Kiedy się przyjmuje",
        p: "Pory przyjmowania leku podaje się przysłówkami i przyimkami. Przysłówki: <em>morgens</em>, <em>mittags</em>, <em>abends</em>, <em>täglich</em>, <em>einmal täglich</em>, <em>dreimal täglich</em>. Stałe wyrażenia: <em>zur Nacht</em> (przed snem), <em>bei Bedarf</em> (w razie potrzeby), <em>nüchtern</em> (na czczo). Pory zapisane w planie leków ustala lekarz: ty je odczytujesz i przekazujesz, ale ich nie wybierasz."
      },
      {
        h: "Przyimki z celownikiem",
        p: "<em>Vor</em>, <em>nach</em>, <em>mit</em>, <em>seit</em>, <em>zu</em> i <em>bei</em> łączą się we wszystkich tych wyrażeniach z <strong>celownikiem</strong>: <em>vor dem Frühstück</em>, <em>nach dem Essen</em>, <em>mit einem Glas Wasser</em>, <em>seit einer Woche</em>, <em>zu den Mahlzeiten</em>, <em>bei Bedarf</em>. Celownik widać na rodzajniku: <em>das Essen</em> zmienia się w <em>dem Essen</em>, <em>die Woche</em> w <em>einer Woche</em>, <em>die Mahlzeiten</em> w <em>den Mahlzeiten</em>. Z <em>seit</em> czasownik zostaje w czasie teraźniejszym: <em>Seit einer Woche nehme ich Dolorex.</em>"
      },
      {
        contrast: "Przypadki po przyimkach nie są dla ciebie nowością, ale polski rozdaje je inaczej: «przed śniadaniem» i «z wodą» to narzędnik, «po jedzeniu» miejscownik, «od tygodnia» dopełniacz. Niemiecki ma w tej lekcji jeden przypadek dla wszystkich sześciu przyimków, celownik, i widać go na rodzajniku, nie na końcówce rzeczownika: <em>vor dem Frühstück</em>, <em>nach dem Essen</em>. Nie przenoś polskiego przypadku na niemiecki: «przed śniadaniem» z narzędnikiem to i tak <em>vor dem Frühstück</em> z celownikiem. Czas teraźniejszy z <em>seit</em> działa za to jak po polsku: «od tygodnia biorę Dolorex». Polski pacjent mówi «lek przeciwzakrzepowy» albo «coś na rozrzedzenie krwi»; niemiecki mówi prawie zawsze <em>der Blutverdünner</em>, dosłownie «rozrzedzacz krwi», a <em>das Antikoagulans</em> zostaje słowem lekarza i dokumentacji."
      },
      {
        trap: "<em>Nüchtern</em> na oddziale znaczy «na czczo», ale w języku codziennym znaczy też «trzeźwy» i nawet «rzeczowy, suchy» o stylu. Kiedy mówisz pacjentowi <em>Bleiben Sie bitte nüchtern</em>, dodaj, co to znaczy: <em>Bitte nichts essen und nichts trinken.</em> Nie myl <em>nach dem Essen</em> (przyimek + rzeczownik) z <em>nachdem</em>, które jest spójnikiem i wysyła czasownik na koniec. <em>Zur Nacht</em> to «wieczorem przed snem», <em>in der Nacht</em> to «w nocy»: w planie leków to nie to samo."
      },
      {
        tip: "Jeśli pacjent mówi, że zapomniał tabletki, nigdy sam nie mów mu, co ma zrobić: <em>Dann sagen Sie es mir bitte. Ich frage den Arzt.</em> Czy dawkę nadrobić, czy pominąć, decyduje lekarz, a właściwa odpowiedź zależy od leku."
      }
    ],
    grammar: {
      title: "Pory i przyimki z celownikiem",
      note: "<b>vor, nach, mit, seit, zu, bei</b> + <b>celownik</b>. Przysłówki czasu (<b>morgens, abends, täglich</b>) nie mają rodzajnika.",
      table: {
        head: ["wyrażenie", "celownik od", "po polsku"],
        rows: [
          ["vor dem Frühstück", "das Frühstück", "przed śniadaniem"],
          ["nach dem Essen", "das Essen", "po jedzeniu"],
          ["mit einem Glas Wasser", "ein Glas", "ze szklanką wody"],
          ["seit einer Woche", "eine Woche", "od tygodnia"],
          ["zu den Mahlzeiten", "die Mahlzeiten", "do posiłków, w czasie posiłków"],
          ["bei Bedarf", "der Bedarf", "w razie potrzeby"]
        ]
      },
      examples: [
        { tr: "Proszę przyjąć tabletkę przed śniadaniem.", note: "vor dem: celownik od das Frühstück" },
        { tr: "Antybiotyk przyjmuje Pan zawsze po jedzeniu.", note: "nach dem Essen" },
        { tr: "Na pobranie krwi musi Pani jutro przyjść na czczo.", note: "nüchtern bleiben: bez jedzenia i picia" },
        { tr: "Lek przeciwzakrzepowy dostaje Pan wieczorem.", note: "Blutverdünner: słowo pacjenta" },
        { tr: "W razie potrzeby dostanie Pani tabletkę przeciwbólową.", note: "bei Bedarf, w dokumentacji często b.B." },
        { tr: "Od tygodnia biorę Dolorex.", note: "seit + celownik, czasownik w teraźniejszym" }
      ]
    },
    vocab: [
      "przyjmowanie (leku)",
      "posiłek",
      "na czczo (też: trzeźwy)",
      "codzienny, dziennie (einmal täglich: raz dziennie)",
      "rano, co rano",
      "wieczorem, co wieczór",
      "w razie potrzeby",
      "antybiotyk",
      "lek przeciwzakrzepowy (termin fachowy)",
      "lek przeciwzakrzepowy (słowo pacjenta)",
      "połykać",
      "zapominać"
    ],
    dialogue: [
      "Pani Marin, kiedy mam brać tę tabletkę?",
      "Cardiomin bierze Pani rano, przed śniadaniem.",
      "Z kawą?",
      "Ze szklanką wody, proszę. Tak jest też zapisane w Pani planie.",
      "A antybiotyk?",
      "Ten dostaje Pani trzy razy dziennie, zawsze po jedzeniu.",
      "A jeśli zapomnę tabletki?",
      "Wtedy proszę mi powiedzieć. Zapytam lekarza, co ma Pani zrobić.",
      "Dobrze. A jutro rano?",
      "Jutro rano proszę pozostać na czczo, ze względu na pobranie krwi."
    ],
    exercises: [
      {
        q: "Lekarz mówi, że jutro rano, przed pobraniem krwi, pacjent ma być «nüchtern». Co to znaczy?",
        opts: ["na czczo", "w łóżku, bez wstawania", "bez leków"],
        why: "Na oddziale <b>nüchtern</b> znaczy «na czczo»: bez jedzenia i zwykle bez picia. W języku codziennym znaczy też «trzeźwy»."
      },
      {
        tr: "Czas teraźniejszy einnehmen, wszystkie osoby.",
        why: "<i>Nehme ein, nimmst ein, nimmt ein, nehmen ein, nehmt ein, nehmen ein</i>: czasownik rozdzielny, przedrostek <i>ein</i> idzie na koniec, a w drugiej i trzeciej osobie liczby pojedynczej <b>e</b> zmienia się w <b>i</b>."
      },
      {
        q: "Uzupełnij: «Nehmen Sie die Tablette bitte nach ___ Essen ein.»",
        hint: "nach + celownik, das Essen",
        why: "<b>dem</b>: <i>nach</i> łączy się z celownikiem, a celownik od <i>das Essen</i> to <i>dem Essen</i>."
      },
      {
        q: "Uzupełnij właściwym przyimkiem.",
        tr: "Krople bierze Pani przed śniadaniem, antybiotyk po jedzeniu.",
        why: "<i>Vor dem Frühstück</i> i <i>nach dem Essen</i>: dwa różne przyimki, ten sam celownik."
      },
      {
        q: "Połącz każde wyrażenie z jego znaczeniem.",
        pairs: ["rano", "wieczorem", "wieczorem, przed snem", "w razie potrzeby"]
      },
      {
        q: "Które wyrażenia są poprawne?",
        opts: ["nach dem Essen", "vor das Frühstück", "mit einem Glas Wasser", "seit eine Woche", "zu den Mahlzeiten"],
        why: "<i>Vor</i> i <i>seit</i> wymagają tu celownika: <i>vor dem Frühstück</i>, <i>seit einer Woche</i>. Pozostałe trzy już są w celowniku."
      },
      {
        q: "Ułóż słowa we właściwej kolejności.",
        tr: "Antybiotyk przyjmuje Pan zawsze po jedzeniu.",
        why: "<i>Das Antibiotikum nehmen Sie immer nach dem Essen.</i> Dopełnienie na początku, czasownik <i>nehmen</i> na drugim miejscu, podmiot <i>Sie</i> zaraz po nim."
      },
      {
        q: "Przetłumacz: «Proszę przyjąć tabletkę rano przed śniadaniem.»",
        why: "<i>Nehmen Sie die Tablette morgens vor dem Frühstück (ein).</i> Grzecznościowy tryb rozkazujący zaczyna się od czasownika; <i>morgens</i> i <i>vor dem Frühstück</i> oddają oba określenia czasu."
      },
      {
        q: "Pacjent pyta, kiedy przyjmować lek.",
        setting: "Pan Brandt trzyma w ręce nową tabletkę.",
        lines: [
          { tr: "Kiedy mam przyjąć tę tabletkę?" },
          { tr: "Odpowiedz: rano, przed śniadaniem.", answerTr: "Rano, przed śniadaniem." },
          { tr: "Z kawą?" },
          { tr: "Odpowiedz: ze szklanką wody, proszę.", answerTr: "Ze szklanką wody, proszę." },
          { tr: "A jeśli zapomnę tabletki?" },
          { tr: "Odpowiedz, że ma ci o tym powiedzieć i że zapytasz lekarza.", answerTr: "Wtedy proszę mi powiedzieć. Zapytam lekarza." }
        ]
      },
      {
        tr: "Cardiomin bierze Pani rano przed śniadaniem, antybiotyk zawsze po jedzeniu.",
        why: "W <i>Frühstück</i> <b>ü</b> jest długie w <i>früh</i> i krótkie w <i>Stück</i>; w <i>morgens</i> <b>g</b> jest twarde, a końcowe <b>s</b> bezdźwięczne; w <i>Essen</i> <b>ss</b> jest bezdźwięczne."
      },
      {
        tr: "Proszę przyjąć tabletkę po jedzeniu.",
        why: "W <i>nehmen</i> <b>h</b> się nie czyta i wydłuża <b>e</b>; w <i>Tablette</i> akcent pada na <b>let</b>; w <i>nach</i> <b>ch</b> po <b>a</b> to [x], jak polskie «ch»."
      }
    ]
  },
  "lesson:pfl-u05-l3": {
    theme: "Czytanie",
    title: "Ulotka",
    objectives: [
      "orientować się w punktach niemieckiej ulotki",
      "rozumieć zdania warunkowe z wenn i falls",
      "rozpoznawać przeciwwskazania, działania niepożądane i interakcje",
      "odsyłać każdą wątpliwość do lekarza albo do apteki"
    ],
    theory: [
      {
        h: "Jak zbudowana jest ulotka",
        p: "Niemiecka ulotka w mowie potocznej to <em>der Beipackzettel</em>, a na papierze <em>die Packungsbeilage</em> albo <em>Gebrauchsinformation</em>. Punkty są zawsze te same: <em>Was ist ... und wofür wird es angewendet?</em>, <em>Was sollten Sie vor der Einnahme beachten?</em>, <em>Wie ist ... einzunehmen?</em>, <em>Welche Nebenwirkungen sind möglich?</em>, <em>Wie ist ... aufzubewahren?</em> Tekst lekcji, ulotka <em>Dolorex</em>, jest zmyślony od początku do końca: służy do czytania języka, nie do stosowania leku."
      },
      {
        h: "Wenn i falls",
        p: "Ulotka jest pełna zdań warunkowych. Po <strong>wenn</strong> albo <strong>falls</strong> odmieniony czasownik idzie <strong>na koniec</strong>: <em>Wenn Sie schwanger sind, ...</em>, <em>Falls Sie eine Einnahme vergessen haben, ...</em> Jeśli zdanie warunkowe stoi na początku, zdanie główne zaczyna się od <strong>czasownika</strong>, bo warunkowe samo zajmuje pierwsze miejsce: <em>Wenn Sie Fragen haben, <b>rufen</b> Sie die Apotheke an.</em> <em>Falls</em> to tylko «w razie gdyby»; <em>wenn</em> znaczy też «kiedy»."
      },
      {
        contrast: "Budowa nie będzie ci obca: polska «ulotka dołączona do opakowania» ma te same punkty według wspólnego wzoru unijnego. Ciekawe jest słownictwo: polski, tak jak niemiecki ulotkowy, woli słowa rodzime od łacińskich. <em>Die Gegenanzeige</em> jest zbudowana dokładnie jak «przeciwwskazanie» (<em>gegen</em> = przeciw, <em>Anzeige</em> = wskazanie), a <em>die Kontraindikation</em> zostaje słowem lekarza. Różnią się za to inne pary: «działania niepożądane» to <em>Nebenwirkungen</em>, dosłownie «działania uboczne», a «interakcje» to <em>Wechselwirkungen</em>, «działania wzajemne»; słowo <em>Interaktion</em> w ulotce prawie się nie pojawia. Największa różnica jest w szyku: polskie «jeśli ma Pan pytania, proszę zadzwonić do apteki» nie przestawia słów, a w niemieckim <em>haben</em> idzie na koniec zdania warunkowego i <em>rufen</em> otwiera zdanie główne. «Wenn Sie Fragen haben, Sie rufen ...» to typowy błąd kogoś, kto myśli po polsku."
      },
      {
        trap: "W ulotce <em>häufig</em> to nie wrażenie, tylko liczba: według konwencji unijnej <em>sehr häufig</em> znaczy więcej niż 1 osoba na 10, <em>häufig</em> od 1 na 100 do 1 na 10, <em>selten</em> od 1 na 10 000 do 1 na 1000. Polska «ulotka» ma dwa znaczenia, a niemiecki dwa różne słowa: ulotka przy leku to <em>Beipackzettel</em>, a ulotka reklamowa to <em>der Flyer</em> albo <em>das Flugblatt</em>. <em>Der Apotheker</em> to farmaceuta w aptece; potoczne polskie «aptekarz» tu pasuje, ale w niemieckim to zwykłe, aktualne słowo, nie archaizm."
      },
      {
        tip: "Pacjentowi, który pyta «czy mogę to brać razem z ...?», nie odpowiadaj, czytając ulotkę: <em>Das klären wir mit dem Arzt oder der Apotheke.</em> Ulotka pomaga ci zrozumieć, o co zapytać, a nie podjąć decyzję."
      }
    ],
    grammar: {
      title: "Wenn i falls",
      note: "W zdaniu warunkowym czasownik idzie <b>na koniec</b>. Jeśli warunkowe stoi pierwsze, zdanie główne zaczyna się od <b>czasownika</b>.",
      table: {
        head: ["zdanie warunkowe", "zdanie główne", "uwaga"],
        rows: [
          ["Wenn Sie schwanger sind,", "fragen Sie Ihren Arzt.", "sind na końcu, fragen na początku"],
          ["Falls Sie eine Einnahme vergessen haben,", "fragen Sie Ihren Arzt oder Apotheker.", "Perfekt: haben po imiesłowie"],
          ["Wenn Sie Atemnot bekommen,", "gehen Sie sofort zum Arzt.", "bekommen: «dostać» objawu"],
          ["(najpierw zdanie główne)", "Dolorex darf nicht eingenommen werden, wenn ...", "warunkowe może też stać po głównym"]
        ]
      },
      examples: [
        { tr: "Jeśli jest Pani w ciąży, przed przyjęciem leku proszę zapytać lekarza.", note: "wenn: czasownik sind na końcu" },
        { tr: "Jeśli zapomniał Pan przyjąć dawkę, proszę zapytać lekarza lub farmaceutę.", note: "falls: w razie gdyby" },
        { tr: "Jeśli pojawi się duszność, proszę natychmiast iść do lekarza.", note: "zdanie główne zaczyna się od gehen" },
        { tr: "Jeśli przyjmuje Pan inne leki, proszę powiedzieć o tym lekarzowi.", note: "możliwe interakcje: Wechselwirkungen" },
        { tr: "Dolorexu nie wolno przyjmować, jeśli ma Pan uczulenie na ten lek.", note: "Dolorex jest zmyślony; strona bierna z dürfen" },
        { tr: "Jeśli ma Pani pytania, proszę zadzwonić do apteki.", note: "anrufen jest rozdzielne: an na końcu" }
      ]
    },
    vocab: [
      "ulotka (potocznie)",
      "ulotka dołączona do opakowania (termin urzędowy)",
      "działanie niepożądane, skutek uboczny",
      "interakcja (między lekami)",
      "przeciwwskazanie (termin fachowy)",
      "przeciwwskazanie (słowo z ulotki)",
      "apteka",
      "farmaceuta",
      "w ciąży",
      "uczulony",
      "przechowywać",
      "w razie gdyby, jeśli"
    ],
    dialogue: [
      "Dolorex to zmyślony lek przeciwbólowy. Istnieje tylko w tym kursie.",
      "Dolorexu nie wolno przyjmować, jeśli ma Pan uczulenie na ten lek.",
      "Jeśli jest Pani w ciąży lub karmi piersią, przed przyjęciem leku proszę zapytać lekarza lub farmaceutę.",
      "Jeśli przyjmuje Pan inne leki, proszę powiedzieć o tym lekarzowi. Możliwe są interakcje.",
      "Dolorex należy zawsze przyjmować dokładnie tak, jak zalecił lekarz.",
      "Jeśli zapomniał Pan przyjąć dawkę, proszę zapytać lekarza lub farmaceutę.",
      "Jeśli pojawi się wysypka lub duszność, proszę przerwać przyjmowanie Dolorexu i natychmiast iść do lekarza.",
      "Lek należy przechowywać w miejscu niedostępnym dla dzieci."
    ],
    culture: {
      title: "Niemieckie spojrzenie: Apotheke i Beipackzettel",
      text: "<p>W Niemczech prawie wszystkie leki sprzedaje się wyłącznie w aptece (<i>apothekenpflichtig</i>), a część tylko na receptę (<i>verschreibungspflichtig</i>). Niewiele produktów jest <i>freiverkäuflich</i> i można je kupić także w <i>Drogerie</i> albo w supermarkecie. Apteki rozpoznaje się po dużym czerwonym <b>A</b> w gotyckim stylu, a w nocy i w święta zawsze dyżuruje jakaś <i>Notdienstapotheke</i>.</p><p><i>Beipackzettel</i> jest tak obecny w codziennym życiu, że obowiązkowe zdanie z reklam leków stało się powiedzonkiem: <i>Zu Risiken und Nebenwirkungen lesen Sie die Packungsbeilage und fragen Sie Ihren Arzt oder Apotheker.</i> Dla lekarza istnieje osobny, bardziej fachowy dokument, <i>Fachinformation</i>, odpowiednik charakterystyki produktu leczniczego.</p>"
    },
    exercises: [
      {
        q: "Przeczytaj ulotkę Dolorexu. «Osoba uczulona na Dolorex może go mimo to przyjmować.»",
        opts: ["Prawda", "Fałsz"],
        why: "Fałsz: <i>Dolorex darf nicht eingenommen werden, wenn Sie allergisch dagegen sind.</i> Uczulenie na lek to przeciwwskazanie, <i>Gegenanzeige</i>."
      },
      {
        q: "Przeczytaj ulotkę Dolorexu. «W ciąży trzeba przed przyjęciem zapytać lekarza lub farmaceutę.»",
        opts: ["Prawda", "Fałsz"],
        why: "Prawda: <i>Wenn Sie schwanger sind oder stillen, fragen Sie vor der Einnahme Ihren Arzt oder Apotheker.</i>"
      },
      {
        q: "Co według ulotki należy zrobić, gdy pojawi się wysypka?",
        opts: ["Posmarować maścią i brać dalej.", "Brać dalej i czekać.", "Przerwać przyjmowanie i natychmiast iść do lekarza."],
        why: "<i>Wenn Sie Hautausschlag oder Atemnot bekommen, nehmen Sie Dolorex nicht weiter ein und gehen Sie sofort zum Arzt.</i> <i>Nicht weiter einnehmen</i> znaczy «przerwać przyjmowanie»."
      },
      {
        q: "Uzupełnij: «___ Sie schwanger sind, fragen Sie vor der Einnahme Ihren Arzt.»",
        hint: "spójnik warunkowy",
        why: "<b>Wenn</b> albo <b>Falls</b>: oba wysyłają czasownik <i>sind</i> na koniec, a zdanie główne zaczyna się od <i>fragen</i>."
      },
      {
        q: "Uzupełnij zdanie z ulotki.",
        tr: "Jeśli pojawi się duszność, proszę natychmiast iść do lekarza.",
        why: "<i>Wenn Sie Atemnot bekommen, gehen Sie sofort zum Arzt</i>: <i>bekommen</i> na końcu zdania warunkowego, <i>zum Arzt</i> na kierunek do osoby."
      },
      {
        q: "Ułóż słowa we właściwej kolejności.",
        tr: "Jeśli ma Pani pytania, proszę zadzwonić do apteki.",
        why: "<i>Wenn Sie Fragen haben, rufen Sie die Apotheke an.</i> <i>Haben</i> na końcu zdania warunkowego, <i>rufen</i> otwiera zdanie główne, przedrostek <i>an</i> je zamyka."
      },
      {
        q: "Połącz każde słowo z ulotki z jego znaczeniem.",
        pairs: ["przeciwwskazanie", "działanie niepożądane", "interakcja", "ulotka", "farmaceuta"]
      },
      {
        q: "Które zdania są zbudowane poprawnie?",
        opts: [
          "Wenn Sie Schmerzen haben, klingeln Sie bitte.",
          "Wenn Sie haben Schmerzen, klingeln Sie bitte.",
          "Falls Ihnen übel wird, sagen Sie es mir.",
          "Wenn Sie Fragen haben, Sie fragen den Arzt.",
          "Wenn Sie eine Tablette vergessen haben, fragen Sie den Arzt."
        ],
        why: "W zdaniu warunkowym czasownik idzie na koniec (<i>haben</i>, <i>wird</i>), a zdanie główne zaczyna się od czasownika (<i>klingeln</i>, <i>sagen</i>, <i>fragen</i>). Drugie i czwarte zdanie mylą się właśnie w tym."
      },
      {
        q: "Przetłumacz: «Jeśli ma Pan pytania, proszę zapytać lekarza lub farmaceutę.»",
        why: "<i>Wenn Sie Fragen haben, fragen Sie Ihren Arzt oder Apotheker.</i> Pasuje też <i>falls</i>, a zamiast <i>Ihren Arzt</i> także <i>den Arzt</i>: <i>fragen</i> łączy się z biernikiem, tak jak polskie «zapytać kogo»."
      },
      {
        tr: "Jeśli pojawi się wysypka lub duszność, proszę przerwać przyjmowanie Dolorexu i natychmiast iść do lekarza.",
        why: "W <i>Hautausschlag</i> akcent pada na pierwszą sylabę, <b>Haut</b>; w <i>Atemnot</i> na <b>A</b>; w <i>sofort</i> na drugą sylabę, <b>fort</b>."
      },
      {
        tr: "Jeśli ma Pan pytania, proszę zapytać swojego lekarza.",
        why: "W <i>Wenn</i> <b>w</b> czyta się [v], jak polskie «w»; w <i>Fragen</i> <b>a</b> jest długie; w <i>Ihren</i> <b>h</b> się nie czyta i wydłuża <b>i</b>; w <i>Arzt</i> wymawia się i <b>z</b>, i końcowe <b>t</b>."
      }
    ]
  },
  "lesson:pfl-u05-l4": {
    theme: "Bezpieczeństwo",
    title: "Przygotowanie leków",
    objectives: [
      "opisać przygotowanie leków stroną bierną",
      "używać müssen, dürfen i sollen z bezokolicznikiem strony biernej",
      "wymienić sześć «R» bezpiecznego podawania leków",
      "zapytać w aptece albo lekarza zamiast decydować samodzielnie"
    ],
    theory: [
      {
        h: "Strona bierna na oddziale",
        p: "Kiedy liczy się czynność, a nie to, kto ją wykonuje, niemiecki używa <strong>strony biernej</strong>: odmienione <em>werden</em> na drugim miejscu i imiesłów na końcu. <em>Die Medikamente werden im Stationszimmer gerichtet. Jede Gabe wird dokumentiert.</em> Z czasownikiem modalnym modalny stoi na drugim miejscu, a na końcu jest bezokolicznik strony biernej, czyli imiesłów + <em>werden</em>: <em>Vor der Gabe muss der Name kontrolliert werden.</em> W pytaniu rozstrzygającym modalny przechodzi na pierwsze miejsce: <em>Darf die Tablette geteilt werden?</em>"
      },
      {
        h: "Die 6-R-Regel",
        p: "Przed każdym podaniem sprawdza się sześć «R», od <em>richtig</em>: <em>die richtige Person</em>, <em>das richtige Medikament</em>, <em>die richtige Dosierung</em>, <em>die richtige Applikationsart</em>, <em>der richtige Zeitpunkt</em>, <em>die richtige Dokumentation</em>. Tutaj zasada jest tematem językowym: zwróć uwagę, jak <em>richtig</em> zmienia końcówkę po rodzajniku (<em>der richtige</em>, <em>die richtige</em>, <em>das richtige</em>). Niektóre placówki liczą więcej niż sześć punktów; obowiązuje zawsze standard twojej placówki."
      },
      {
        contrast: "Te punkty kontrolne znasz zapewne z polskiej praktyki, gdzie wymienia się je słowem «właściwy»: właściwy pacjent, właściwy lek, właściwa dawka, właściwa droga podania, właściwy czas. Niemiecki ma w tym miejscu <em>richtig</em> i liczy je po literze R; szóstym punktem jest zwykle <em>die richtige Dokumentation</em>. Uważaj na rodzaje, bo nie pokrywają się z polskimi: «właściwy lek» to <em>das richtige Medikament</em> (nijaki), «właściwa dawka» to <em>die richtige Dosierung</em>, a «właściwy czas» to <em>der richtige Zeitpunkt</em>. Strona bierna jest bliska polskiej z «zostać»: «leki zostają przygotowane» to <em>die Medikamente werden gerichtet</em>, i <em>werden</em> znaczy właśnie «stawać się, zostawać». Różnica to szyk: imiesłów idzie na koniec, a z modalnym na końcu stoją razem imiesłów i <em>werden</em>, podczas gdy polski mówi «musi zostać sprawdzony» jednym ciągiem. Polskie formy bezosobowe («wszystko się dokumentuje», «przygotowano leki») oddaje się stroną bierną albo przez <em>man</em>: <em>Alles wird dokumentiert</em>, <em>Man dokumentiert alles</em>."
      },
      {
        trap: "<em>Richten</em> znaczy tu «przygotowywać leki» (na wielu oddziałach mówi się też <em>stellen</em>), a nie «kierować» ani «sądzić», jak <em>richten</em> w sądzie. <em>Verabreichen</em> to podać lek; <em>verschreiben</em> to go przepisać, i robi to lekarz. <em>Die Dosierung</em> to dawkowanie (ile i kiedy), <em>die Dosis</em> to pojedyncza dawka: ta sama para co po polsku, więc łatwo ją zapamiętać, ale też łatwo pomylić w pośpiechu. Uważaj na formę: imiesłów od <em>dokumentieren</em> to <em>dokumentiert</em>, bez <em>ge-</em>, jak we wszystkich czasownikach na <em>-ieren</em>; od <em>verabreichen</em> to <em>verabreicht</em>, bez <em>ge-</em> z powodu nierozdzielnego przedrostka <em>ver-</em>."
      },
      {
        tip: "Najważniejsze zdanie tej lekcji to to, które przekazuje wątpliwość dalej: <em>Das müssen wir in der Apotheke nachfragen</em> albo <em>Das klären wir mit dem Arzt.</em> Dzielenie tabletki, rozkruszanie jej czy zmiana pory to decyzje, których nie podejmuje się z pamięci."
      }
    ],
    grammar: {
      title: "Strona bierna i czasowniki modalne",
      note: "Strona bierna: <b>werden</b> na drugim miejscu, imiesłów <b>na końcu</b>. Z modalnym: modalny na drugim miejscu (na pierwszym w pytaniu rozstrzygającym), na końcu <b>imiesłów + werden</b>.",
      table: {
        head: ["konstrukcja", "przykład", "uwaga"],
        rows: [
          ["strona bierna, czas teraźniejszy", "Die Medikamente werden gerichtet.", "werden + imiesłów"],
          ["strona bierna, liczba pojedyncza", "Jede Gabe wird dokumentiert.", "-ieren: bez ge-"],
          ["modalny + strona bierna", "Der Name muss kontrolliert werden.", "imiesłów + werden na końcu"],
          ["pytanie rozstrzygające", "Darf die Tablette geteilt werden?", "modalny otwiera zdanie"]
        ]
      },
      examples: [
        { tr: "Leki są przygotowywane w dyżurce.", note: "werden w liczbie mnogiej" },
        { tr: "Każde podanie jest od razu dokumentowane.", note: "dokumentiert: bez ge-" },
        { tr: "Przed podaniem trzeba sprawdzić nazwisko.", note: "müssen + bezokolicznik strony biernej" },
        { tr: "Czy tabletkę można dzielić?", note: "pytanie rozstrzygające: dürfen na pierwszym miejscu" },
        { tr: "Musimy o to zapytać w aptece.", note: "nachfragen: rozdzielny, w bezokoliczniku razem" },
        { tr: "Jeśli coś jest niejasne, pyta się lekarza.", note: "strona bierna: liczy się czynność, nie wykonawca" }
      ]
    },
    vocab: [
      "przygotowywać (leki)",
      "dozownik, kasetka na leki",
      "przegródka",
      "zlecenie lekarskie",
      "dawkowanie",
      "podanie",
      "podawać",
      "sprawdzać, kontrolować",
      "dokumentować",
      "dzielić",
      "chwila, pora",
      "pomyłka (leku albo pacjenta)"
    ],
    dialogue: [
      "Elena, pomożesz mi? Trzeba jeszcze przygotować leki na noc.",
      "Jasne. Sprawdzamy wszystko według zasady 6 R.",
      "Właściwa osoba: pani Kühn, sala cztery. Właściwy lek: Cardiomin.",
      "Właściwe dawkowanie i właściwa droga: tak, jak jest w zleceniu. Doustnie.",
      "Czy tabletkę można dzielić? Pani Kühn ma problem z połykaniem.",
      "Nie wiem. Musimy zapytać w aptece.",
      "Dobrze. Właściwa pora to wieczór, przed snem.",
      "Właśnie. A po podaniu wszystko się dokumentuje. To szóste R."
    ],
    exercises: [
      {
        q: "«Leki są przygotowywane w dyżurce.» Które zdanie jest poprawne?",
        opts: [
          "Die Medikamente werden im Stationszimmer gerichtet.",
          "Die Medikamente sind im Stationszimmer richten.",
          "Die Medikamente werden im Stationszimmer richten."
        ],
        why: "Strona bierna to <b>werden</b> + <b>imiesłów</b>: <i>werden ... gerichtet</i>. Z bezokolicznikiem <i>richten</i> zdanie stałoby się czasem przyszłym, który tu nie ma sensu."
      },
      {
        tr: "Czas teraźniejszy dürfen, wszystkie osoby.",
        why: "<i>Darf, darfst, darf, dürfen, dürft, dürfen</i>: w liczbie pojedynczej <b>ü</b> zmienia się w <b>a</b>, a pierwsza i trzecia osoba liczby pojedynczej są takie same, bez końcówki."
      },
      {
        q: "Uzupełnij: «Jede Gabe ___ sofort dokumentiert.»",
        hint: "werden, trzecia osoba liczby pojedynczej",
        why: "<b>wird</b>: podmiot <i>jede Gabe</i> jest w liczbie pojedynczej, a stronę bierną tworzy się z <i>werden</i>."
      },
      {
        q: "Uzupełnij czasownikiem modalnym i bezokolicznikiem strony biernej.",
        tr: "Przed podaniem trzeba sprawdzić nazwisko.",
        why: "<i>Vor der Gabe muss der Name kontrolliert werden</i>: <i>muss</i> na drugim miejscu, na końcu imiesłów <i>kontrolliert</i>, a po nim <i>werden</i>."
      },
      {
        q: "Ułóż słowa we właściwej kolejności.",
        tr: "Czy tabletkę można dzielić?",
        why: "<i>Darf die Tablette geteilt werden?</i> Pytanie rozstrzygające: modalny <i>darf</i> otwiera zdanie, <i>geteilt werden</i> je zamyka."
      },
      {
        q: "Połącz każde R z jego znaczeniem.",
        pairs: ["właściwa osoba", "właściwy lek", "właściwe dawkowanie", "właściwa droga podania", "właściwa pora", "właściwa dokumentacja"]
      },
      {
        q: "Wybierz właściwy rodzajnik określony dla każdego rzeczownika.",
        items: ["dozownik", "przegródka", "zlecenie lekarskie", "dawkowanie", "chwila, pora", "pomyłka"]
      },
      {
        q: "Które zdania są zbudowane poprawnie?",
        opts: [
          "Die Tablette darf nicht geteilt werden.",
          "Die Tablette darf nicht geteilt wird.",
          "Der Name muss kontrolliert werden.",
          "Der Name muss werden kontrolliert.",
          "Die Gabe soll dokumentiert werden."
        ],
        why: "Z modalnym na końcu zdania stoi imiesłów, a po nim <i>werden</i> w bezokoliczniku: <i>geteilt werden</i>, <i>kontrolliert werden</i>, <i>dokumentiert werden</i>."
      },
      {
        q: "Przetłumacz: «Każde podanie jest dokumentowane.»",
        why: "<i>Jede Gabe wird dokumentiert.</i> Pasuje też <i>Verabreichung</i> albo <i>Applikation</i>. Strona bierna: <i>wird</i> + imiesłów bez <i>ge-</i>."
      },
      {
        q: "Kolega pyta cię o leki na noc.",
        setting: "Jesteś w dyżurce z kolegą Jonasem.",
        lines: [
          { tr: "Leki na noc są już gotowe?" },
          { tr: "Odpowiedz, że właśnie są przygotowywane.", answerTr: "Nie, właśnie są przygotowywane." },
          { tr: "Czy tabletkę pani Kühn można dzielić?" },
          { tr: "Odpowiedz, że nie wiesz i że trzeba zapytać w aptece.", answerTr: "Nie wiem. Musimy zapytać w aptece." },
          { tr: "A po podaniu?" },
          { tr: "Odpowiedz, że po podaniu wszystko się dokumentuje.", answerTr: "Po podaniu wszystko się dokumentuje." }
        ]
      },
      {
        tr: "Leki są przygotowywane według zasady 6 R. Po podaniu wszystko się dokumentuje.",
        why: "W <i>gerichtet</i> <b>ch</b> po <b>i</b> to [ç], miękkie jak w polskim «chi»; w <i>dokumentiert</i> akcent pada na <b>tiert</b>, jak we wszystkich czasownikach na <i>-ieren</i>; w <i>Regel</i> pierwsze <b>e</b> jest długie."
      },
      {
        tr: "Czy tabletkę można dzielić?",
        why: "W <i>Darf</i> <b>r</b> po samogłosce jest ledwo słyszalne; w <i>geteilt</i> <b>ei</b> to [aɪ], jak polskie «aj»; w <i>werden</i> <b>e</b> jest długie."
      }
    ]
  },
  "lesson:pfl-u05-test": {
    theme: "Sprawdzian",
    title: "Test: Leki i ulotka",
    objectives: [
      "sprawdzić drogi podania i formuły dla pacjenta, pory z celownikiem, zdania z wenn i falls oraz stronę bierną przy przygotowaniu leków"
    ],
    theory: [
      {
        p: "Jedenaście pytań z całej jednostki. Zalicza się od 70%. Wymienione leki są zmyślone, a treści kliniczne to przykłady dydaktyczne: na oddziale obowiązuje zlecenie lekarza i procedura placówki."
      }
    ],
    exercises: [
      {
        q: "Lekarz zapisał «intravenös». Jak powiesz to pacjentowi?",
        opts: ["unter die Haut", "über den Mund", "in die Vene"],
        why: "<i>Intravenös</i> to «do żyły»: pacjentowi mówi się <b>in die Vene</b>."
      },
      {
        q: "Uzupełnij: «Nehmen Sie die Tropfen vor ___ Frühstück.»",
        hint: "vor + celownik, das Frühstück",
        why: "<b>dem</b>: w tym wyrażeniu <i>vor</i> łączy się z celownikiem."
      },
      {
        q: "Uzupełnij: «Die Medikamente ___ im Stationszimmer gerichtet.»",
        hint: "strona bierna, liczba mnoga",
        why: "<b>werden</b>: podmiot w liczbie mnogiej, strona bierna z <i>werden</i> i imiesłów <i>gerichtet</i> na końcu."
      },
      {
        q: "Połącz każdy termin fachowy ze słowem dla pacjenta albo z ulotki.",
        pairs: ["über den Mund", "unter die Haut", "in die Vene", "die Gegenanzeige"]
      },
      {
        q: "Które zdania są poprawne?",
        opts: [
          "Wenn Sie Schmerzen haben, klingeln Sie bitte.",
          "Wenn Sie haben Schmerzen, klingeln Sie bitte.",
          "Falls Sie Fragen haben, Sie rufen die Apotheke an.",
          "Vor der Gabe wird der Name kontrolliert.",
          "Nehmen Sie die Tablette nach dem Essen ein."
        ],
        why: "Po <i>wenn</i> i <i>falls</i> czasownik idzie na koniec, a zdanie główne zaczyna się od czasownika. <i>Vor der Gabe wird ... kontrolliert</i> to poprawna strona bierna, <i>nach dem Essen</i> poprawny celownik."
      },
      {
        q: "Uzupełnij zdanie.",
        tr: "Gdyby zapomniał Pan przyjąć dawkę, proszę zapytać swojego lekarza.",
        why: "<i>Falls Sie eine Einnahme vergessen haben, fragen Sie bitte Ihren Arzt</i>: imiesłów <i>vergessen</i> przed <i>haben</i>, a zdanie główne zaczyna się od <i>fragen</i>."
      },
      {
        q: "Ułóż słowa we właściwej kolejności.",
        tr: "Po podaniu wszystko się dokumentuje.",
        why: "<i>Nach der Gabe wird alles dokumentiert.</i> <i>Nach der Gabe</i> na początku, <i>wird</i> na drugim miejscu, imiesłów na końcu."
      },
      {
        q: "«Packungsbeilage» i «Beipackzettel» oznaczają tę samą ulotkę.",
        opts: ["Prawda", "Fałsz"],
        why: "Prawda: <i>Packungsbeilage</i> to nazwa urzędowa, <i>Beipackzettel</i> potoczna."
      },
      {
        q: "Wybierz właściwy rodzajnik określony dla każdego rzeczownika.",
        items: ["tabletka", "czopek", "ulotka", "działanie niepożądane", "dozownik", "antybiotyk"]
      },
      {
        tr: "Jeśli ma Pani pytania o swoje leki, proszę zapytać lekarza albo w aptece.",
        why: "W <i>Medikamenten</i> akcent pada na <b>men</b>; w <i>Apotheke</i> akcent jest na <b>the</b>, a <b>th</b> czyta się [t]; w <i>Fragen</i> <b>a</b> jest długie."
      },
      {
        tr: "Jutro rano proszę pozostać na czczo.",
        why: "W <i>nüchtern</i> <b>ü</b> jest krótkie, a <b>ch</b> to [ç]; w <i>früh</i> <b>ü</b> jest długie, a <b>h</b> się nie czyta; w <i>bleiben</i> <b>ei</b> to [aɪ]."
      }
    ]
  }
});
