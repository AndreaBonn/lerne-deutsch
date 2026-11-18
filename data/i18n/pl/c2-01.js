/* ============================================================
   Learner-language text (pl) for data/core/c2-01.js, units c2-u01 and c2-u02.
   Keys point at ids in the neutral layer; arrays merge by index,
   so their length has to match core.
   Checked by scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("pl", {
  "unit:c2-u01": {
    title: "Rozbudowane przydawki",
    grammarNote: "Rozbudowana przydawka imiesłowowa (die seit Jahren geforderte Reform) · imiesłów I i imiesłów II jako przydawka · Gerundivum: zu + imiesłów I (die zu lösende Aufgabe) · Funktionsverbgefüge w prozie naukowej i publicystycznej (zur Anwendung kommen, Rechnung tragen, in Abrede stellen)"
  },
  "lesson:c2-u01-l1": {
    theme: "Teksty naukowe i eseistyka",
    title: "Rozbudowana przydawka imiesłowowa",
    objectives: [
      "rozpoznać rodzajnik i rzeczownik, które obejmują rozbudowaną przydawkę",
      "przeczytać przydawkę z kilkoma określeniami i zrozumieć jej budowę",
      "zamienić zdanie względne na przydawkę i odwrotnie",
      "wybrać między imiesłowem I a imiesłowem II"
    ],
    theory: [
      {
        h: "Zdanie względne ściśnięte przed rzeczownikiem",
        p: "W niemczyźnie pisanej imiesłów może zabrać ze sobą swoje określenia i stanąć między rodzajnikiem a rzeczownikiem: <em>die seit Jahren von Fachleuten geforderte Reform</em>. To ściśnięte zdanie względne: <em>die Reform, die seit Jahren von Fachleuten gefordert wird</em>. Rodzajnik otwiera nawias, rzeczownik go zamyka, a wszystko pomiędzy należy do przydawki. Przydawek współrzędnych może być kilka i każda ma własne określenia; imiesłów stoi tuż przed rzeczownikiem i dostaje końcówkę przymiotnika. <strong>Imiesłów II</strong> oznacza czynność, której coś podlega albo która już się zakończyła (<em>die vorgelegten Daten</em>, przedstawione dane); <strong>imiesłów I</strong> czynność aktywną i równoczesną (<em>die vorliegenden Gutachten</em>, opinie, którymi się dysponuje)."
      },
      {
        h: "Jak to czytać",
        p: "Jeśli po rodzajniku stoi przyimek albo drugi rodzajnik (<em>die von der ..., der dem ...</em>), spodziewaj się rozbudowanej przydawki: przeskocz do rzeczownika i znajdź odmienione imiesłowy tuż przed nim (może ich być kilka, współrzędnych), potem wróć i przeczytaj określenia każdego z nich. Szyk wewnątrz jest szykiem zdania podrzędnego: najpierw określenia, imiesłów na końcu, tak jak czasownik na końcu zdania względnego. Zaimek zwrotny zostaje w środku: <em>die sich verschärfende Wohnungsnot</em>. Dwie przydawki współrzędne bez spójnika rozdziela przecinek: <em>die in der Studie befragten, überwiegend jungen Erwachsenen</em>; przy <em>und</em> przecinek jest zbędny: <em>die angekündigte und vielfach kritisierte Reform</em>."
      },
      {
        contrast: "Polski też stawia imiesłów przymiotnikowy przed rzeczownikiem i też go odmienia (<em>rosnące koszty, przedstawione dane</em>), a w tekstach urzędowych i naukowych bywa przed rzeczownikiem nawet z określeniami: <em>od lat postulowana przez ekspertów reforma</em>. Częściej jednak dłuższa grupa idzie za rzeczownik: <em>reforma postulowana od lat przez ekspertów</em>, a po niemiecku odmieniana przydawka nie może stanąć za rzeczownikiem: cała grupa stoi między rodzajnikiem a rzeczownikiem, a imiesłów zamyka ją na samym końcu. Grupa imiesłowowa za rzeczownikiem (<em>die Reform, seit Jahren von Fachleuten gefordert, ...</em>) to osobna, nieodmienna i wydzielona przecinkami konstrukcja, rzadsza i bardziej książkowa. Druga różnica: polski imiesłów czynny (<em>-ący</em>) tworzy się tylko od czasowników niedokonanych, a czynnego imiesłowu przeszłego w funkcji przydawki prawie nie ma. Niemiecki imiesłów II czasowników z <em>sein</em> pełni właśnie tę funkcję: <em>die gestiegenen Kosten</em> to „koszty, które wzrosły”, <em>die über Jahrzehnte gewachsenen Strukturen</em> to „struktury, które narastały przez dziesięciolecia”."
      },
      {
        trap: "Imiesłów strony biernej w Perfekt nie dostaje <em>worden</em>: <em>die Daten, die erhoben worden sind</em> to <em>die erhobenen Daten</em>, nigdy <em>die erhoben wordenen Daten</em>. I nie myl dwóch imiesłowów: <em>die steigenden Kosten</em> wciąż rosną, <em>die gestiegenen Kosten</em> już wzrosły."
      },
      {
        tip: "Tłumacząc na polski, rozwiń przydawkę w zdanie względne albo w imiesłów po rzeczowniku. Pisząc po niemiecku, zacznij od zdania względnego: usuń zaimek względny, zamień czasownik na imiesłów, odmień go i postaw tuż przed rzeczownikiem."
      }
    ],
    grammar: {
      title: "Rozbudowana przydawka imiesłowowa",
      note: "<b>rodzajnik + określenia + odmieniony imiesłów + rzeczownik</b>. Imiesłów II: znaczenie bierne albo czynność zakończona (<i>die vorgelegten Daten</i>). Imiesłów I: znaczenie czynne, zwykle czynność równoczesna (<i>die vorliegenden Gutachten</i>). Imiesłów dostaje końcówkę przymiotnika; <i>worden</i> znika.",
      table: {
        head: ["zdanie względne", "rozbudowana przydawka"],
        rows: [
          ["die Reform, die seit Jahren gefordert wird", "die seit Jahren geforderte Reform"],
          ["die Daten, die die Kommission vorgelegt hat", "die von der Kommission vorgelegten Daten"],
          ["die Gutachten, die dem Gericht vorliegen", "die dem Gericht vorliegenden Gutachten"],
          ["die Wohnungsnot, die sich verschärft", "die sich verschärfende Wohnungsnot"]
        ]
      },
      examples: [
        { tr: "Postulowana od lat przez ekspertów reforma prawa autorskiego wciąż każe na siebie czekać.", note: "imiesłów II z dwoma określeniami: seit Jahren, von Fachleuten" },
        { tr: "Dorośli ankietowani w badaniu, w większości młodzi, wykazywali zaskakująco niskie zaufanie do mediów.", note: "dwie przydawki współrzędne, rozdzielone przecinkiem" },
        { tr: "Pogłębiający się od dziesięcioleci kryzys mieszkaniowy nie jest nowym zjawiskiem.", note: "imiesłów I czasownika zwrotnego: sich zostaje w przydawce" },
        { tr: "Raport opiera się na danych przedstawionych przez komisję zeszłej jesieni.", note: "imiesłów II: von der Kommission wskazuje wykonawcę czynności" },
        { tr: "Opinie, którymi dysponuje sąd, są ze sobą sprzeczne w istotnych punktach.", note: "imiesłów I z celownikiem, którego wymaga vorliegen" },
        { tr: "Model uważany przez wielu za przestarzały okazuje się zaskakująco solidny.", note: "für ... halten: orzecznik zostaje w przydawce" }
      ]
    },
    vocab: [
      "rozprawa, praca naukowa",
      "wynik (badania), ustalenie",
      "opinia biegłego, ekspertyza",
      "hipoteza",
      "przedmiot (badania), temat",
      "badanie, dochodzenie",
      "przedłożyć, przedstawić (dokument)",
      "okazać się",
      "udowodnić, wykazać",
      "opierać się na",
      "przeważnie, w przeważającej części",
      "decydujący, w decydującym stopniu"
    ],
    exercises: [
      {
        q: "W eseju: „Die von der Regierung im Frühjahr angekündigte und von der Opposition scharf kritisierte Reform ist bis heute nicht umgesetzt.” Co jest podmiotem zdania?",
        opts: [
          "die Reform, razem z całą przydawką",
          "die Regierung",
          "die Opposition"
        ],
        why: "Rodzajnik <i>Die</i> otwiera nawias, a <b>Reform</b> go zamyka: to, co pomiędzy, czyli dwie przydawki połączone przez <i>und</i>, opisuje reformę. <i>von der Regierung</i> i <i>von der Opposition</i> to wykonawcy czynności obu imiesłowów."
      },
      {
        q: "Zamień na przydawkę: „die Daten, die im letzten Jahr erhoben worden sind”",
        opts: [
          "die im letzten Jahr erhobenen Daten",
          "die im letzten Jahr erhoben wordenen Daten",
          "die im letzten Jahr erhebenden Daten"
        ],
        why: "Strona bierna zmienia się w odmieniony imiesłów II: <b>erhobenen</b>. <i>worden</i> nigdy nie wchodzi do przydawki; <i>erhebenden</i>, imiesłów I, znaczyłoby, że to dane coś zbierają."
      },
      {
        q: "Uzupełnij: „Die Zahl der ___ Menschen ist im vergangenen Jahrzehnt gestiegen.” (ludzi żyjących w ubóstwie)",
        opts: [
          "in Armut lebenden",
          "in Armut gelebten",
          "lebenden in Armut"
        ],
        why: "Czynność aktywna i równoczesna: imiesłów I, <b>lebenden</b>. W rozbudowanej przydawce określenie <i>in Armut</i> stoi przed imiesłowem, nigdy między imiesłowem a rzeczownikiem, choć po polsku mówimy <em>żyjących w ubóstwie</em>; <i>gelebten</i> to imiesłów II i oznaczałby czynność, której coś podlega, albo zakończoną."
      },
      {
        q: "Uzupełnij: „Das dem Ausschuss seit März ___ Gutachten wurde bislang nicht veröffentlicht.”",
        hint: "od vorliegen, imiesłów I, rodzaj nijaki po das",
        why: "<b>vorliegende</b>: imiesłów I (komisja dysponuje opinią), końcówka <i>-e</i> po <i>das</i> w mianowniku. <i>dem Ausschuss</i> to celownik, którego wymaga <i>vorliegen</i>."
      },
      {
        q: "Uzupełnij dwoma imiesłowami II: w pierwszej luce „przewidywane”, w drugiej „upośledzone”.",
        tr: "Przewidywane od dawna przez licznych badaczy skutki zmian klimatu dotykają przede wszystkim i tak już upośledzonych regionów Południa.",
        why: "<i>vorhergesagten</i> (także <i>vorausgesagten</i> albo <i>prognostizierten</i>) i <i>benachteiligten</i>: imiesłowy II z <i>-en</i> po rodzajniku liczby mnogiej <i>die</i>. <i>ohnehin</i> („i tak już”) stoi wewnątrz drugiej przydawki."
      },
      {
        q: "Połącz każde słowo z jego znaczeniem.",
        pairs: [
          "opinia biegłego, ekspertyza",
          "wynik (badania), ustalenie",
          "rozprawa, praca naukowa",
          "hipoteza"
        ]
      },
      {
        q: "W których zdaniach jest rozbudowana przydawka imiesłowowa?",
        opts: [
          "Die vom Gericht bestellte Gutachterin widersprach dem Kläger.",
          "Die über Jahrzehnte gewachsenen Strukturen lassen sich nicht über Nacht ändern.",
          "Die Gutachterin, die das Gericht bestellt hatte, widersprach dem Kläger.",
          "Die Strukturen sind über Jahrzehnte gewachsen."
        ],
        why: "W dwóch pierwszych imiesłów ze swoimi określeniami stoi między rodzajnikiem a rzeczownikiem (<i>die vom Gericht bestellte Gutachterin</i>, <i>die über Jahrzehnte gewachsenen Strukturen</i>). Trzecie mówi to samo co pierwsze, ale zdaniem względnym; w czwartym <i>gewachsen</i> należy do Perfekt i nie jest przydawką."
      },
      {
        q: "Przetłumacz z rozbudowaną przydawką imiesłowową: „Badanie przedstawione w zeszłym tygodniu przez uniwersytet przeczy rozpowszechnionym dotąd założeniom.” (vorlegen, die Annahme)",
        why: "<i>Die von der Universität letzte Woche vorgelegte Studie widerspricht den bisher verbreiteten Annahmen</i>: to, co po polsku stoi za słowem „badanie”, po niemiecku idzie przed <i>Studie</i>, z imiesłowem na ostatnim miejscu. <i>widersprechen</i> łączy się z celownikiem: <i>den ... Annahmen</i>."
      },
      {
        tr: "Teza broniona w niniejszej rozprawie opiera się na przeważnie starszych wynikach. Opublikowane od tego czasu badania budzą poważne wątpliwości co do niej.",
        why: "W <i>Abhandlung</i> akcent pada na <b>Ab</b>; w <i>Befunde</i> akcent pada na <b>fun</b>; w <i>Zweifel</i> <b>z</b> wymawia się [ts], a <b>ei</b> [aɪ]."
      },
      {
        tr: "Postulowana od lat reforma wciąż każe na siebie czekać.",
        why: "W <i>geforderte</i> akcent pada na <b>for</b>; w <i>Reform</i> akcent pada na <b>form</b>; w <i>lässt</i> <b>ä</b> jest krótkie."
      }
    ]
  },
  "lesson:c2-u01-l2": {
    theme: "Przepisy i umowy",
    title: "Zadanie do rozwiązania",
    objectives: [
      "zrozumieć i tworzyć Gerundivum: zu + imiesłów I jako przydawka",
      "odróżnić die zu prüfenden Anträge od die geprüften Anträge",
      "umieścić zu w czasownikach rozdzielnych (die einzureichenden Unterlagen)",
      "stosować na zmianę Gerundivum i modalną stronę bierną w prozie prawniczej"
    ],
    theory: [
      {
        h: "sein + zu, przeniesione przed rzeczownik",
        p: "Na poziomie C1 poznałeś <em>sein + zu</em> + bezokolicznik: <em>Die Aufgabe ist zu lösen</em>, „zadanie należy rozwiązać”. Ta sama treść zamieniona na przydawkę daje <strong>zu + imiesłów I</strong> z końcówką przymiotnika: <em>die zu lösende Aufgabe</em>. To tak zwane Gerundivum: ma znaczenie bierne i wartość modalną, „który trzeba” albo „który można” rozwiązać. Jak każda przydawka imiesłowowa rozbudowuje się o określenia: <em>die bis Monatsende einzureichenden Unterlagen</em>."
      },
      {
        h: "Trzeba czy można",
        p: "Wartość wynika z kontekstu, tak jak przy <em>sein + zu</em>. W przepisach i formularzach przeważa obowiązek: <em>die einzureichenden Unterlagen</em>, dokumenty do złożenia. Przy przeczeniu wartość zależy od czasownika: <em>ein nicht zu unterschätzendes Risiko</em> to ostrzeżenie, ryzyko, którego nie należy lekceważyć; <em>eine nicht zu lösende Aufgabe</em> wyraża niemożliwość, zadanie, którego nie da się rozwiązać. Przy <em>kaum</em> przeważa możliwość: <em>eine kaum zu beziffernde Zahl</em>, liczba trudna do oszacowania. Przy <em>erwarten</em> to prognoza: <em>die zu erwartenden Kosten</em>, przewidywane koszty."
      },
      {
        contrast: "Polski ma bliski odpowiednik w konstrukcji <em>do</em> + rzeczownik odczasownikowy: <em>zadanie do rozwiązania, dokumenty do złożenia, liczba trudna do oszacowania</em>. Różnica leży w miejscu i w formie: po polsku wszystko stoi za rzeczownikiem, a <em>rozwiązania</em> się nie zmienia; po niemiecku wszystko stoi przed rzeczownikiem, a czasownik staje się imiesłowem czynnym z końcówką przymiotnika: <em>die zu lösende Aufgabe</em>, <em>bei der zu lösenden Aufgabe</em>. Uwaga: forma jest czynna (<em>lösend</em>), a znaczenie bierne, czego polski imiesłów na <em>-ący</em> nigdy nie robi."
      },
      {
        trap: "Nie myl <em>die zu prüfenden Anträge</em> (wnioski do rozpatrzenia, jeszcze otwarte) z <em>die geprüften Anträge</em> (wnioski już rozpatrzone). A przy czasownikach rozdzielnych <em>zu</em> wchodzi między przedrostek a czasownik, w jednym słowie: <em>einzureichenden, vorzunehmenden, abzugebenden</em>, a nie <em>zu einreichenden</em>."
      },
      {
        tip: "Żeby sprawdzić Gerundivum, sprowadź je do formy orzeczeniowej, a potem do modalnej strony biernej: <em>die zu erwartenden Kosten</em> → <em>die Kosten sind zu erwarten</em> → <em>die Kosten können erwartet werden</em>. Jeśli przejście się zgadza, forma jest poprawna."
      }
    ],
    grammar: {
      title: "Gerundivum: zu + imiesłów I",
      note: "<b>sein + zu + bezokolicznik</b> jako orzeczenie (<i>ist zu lösen</i>) zmienia się w <b>zu + imiesłów I</b> jako przydawkę (<i>die zu lösende Aufgabe</i>). Znaczenie bierne, wartość obowiązku albo możliwości. Czasowniki rozdzielne: <i>einzureichenden</i>.",
      table: {
        head: ["orzeczenie", "przydawka", "znaczenie"],
        rows: [
          ["Die Aufgabe ist zu lösen.", "die zu lösende Aufgabe", "trzeba rozwiązać"],
          ["Die Unterlagen sind einzureichen.", "die einzureichenden Unterlagen", "trzeba złożyć"],
          ["Das Risiko ist nicht zu unterschätzen.", "ein nicht zu unterschätzendes Risiko", "nie należy lekceważyć"],
          ["Die Kosten sind zu erwarten.", "die zu erwartenden Kosten", "należy się spodziewać"]
        ]
      },
      examples: [
        { tr: "Zadanie do rozwiązania jest bardziej złożone, niż oczekiwano.", note: "zu + imiesłów I: lösende" },
        { tr: "Dokumenty, które należy złożyć do końca miesiąca, znajdą Państwo w załączniku.", note: "czasownik rozdzielny: ein-zu-reichenden" },
        { tr: "To ryzyko, którego nie należy lekceważyć.", note: "z nicht: ostrzeżenie, „którego nie należy”" },
        { tr: "Przewidywane koszty znacznie przekraczają budżet.", note: "zu erwarten: prognoza" },
        { tr: "Zadanie należy rozwiązać do piątku.", note: "forma orzeczeniowa: sein + zu + bezokolicznik" },
        { tr: "Sprawy, które pozostają do wyjaśnienia, zostaną omówione na najbliższym posiedzeniu.", note: "noch: „jeszcze do”" }
      ]
    },
    vocab: [
      "przepis, postanowienie",
      "pełnomocnik",
      "klauzula",
      "środek odwoławczy",
      "warunek, wymóg (pozwolenia)",
      "stan faktyczny",
      "dosłać, uzupełnić (dokumenty)",
      "zakwestionować, wytknąć (uchybienie)",
      "nie doceniać, lekceważyć",
      "zapewnić, zagwarantować",
      "niezbędny",
      "w terminie"
    ],
    exercises: [
      {
        q: "W protokole: „Die zu prüfenden Anträge werden bis Ende Mai bearbeitet.” Co znaczy „die zu prüfenden Anträge”?",
        opts: [
          "wnioski, które należy rozpatrzyć",
          "wnioski, które rozpatrują",
          "wnioski już rozpatrzone"
        ],
        why: "<i>zu</i> + imiesłów I to <b>Gerundivum</b>: znaczenie bierne i wartość obowiązku, jak <i>die Anträge sind zu prüfen</i>. Bez <i>zu</i> <i>prüfend</i> byłoby czynne; <i>geprüften</i> oznaczałoby wnioski już rozpatrzone."
      },
      {
        q: "W umowie najmu: „Der Mieter hat die Wohnung in ordnungsgemäßem Zustand zurückzugeben.” Co wyraża haben + zu?",
        opts: [
          "obowiązek z czynnym podmiotem: najemca musi zwrócić",
          "możliwość: najemca może zwrócić",
          "stronę bierną: mieszkanie zostaje zwrócone"
        ],
        why: "<b>haben + zu</b> to czynny odpowiednik <i>sein + zu</i>: podmiot musi coś zrobić. Strona bierna brzmiałaby <i>Die Wohnung ist ... zurückzugeben</i>, a z niej powstaje przydawka <i>die zurückzugebende Wohnung</i>."
      },
      {
        q: "Zamień na przydawkę: „Die Kosten sind nicht vorherzusehen.” → „___ Kosten”",
        opts: [
          "die nicht vorherzusehenden",
          "die nicht vorhergesehenen",
          "die nicht vorherzusehende"
        ],
        why: "Gerundivum czasownika rozdzielnego: <i>zu</i> między <i>vorher</i> a <i>sehen</i>, końcówka <b>-en</b> po rodzajniku liczby mnogiej. <i>vorhergesehenen</i> opisuje fakt („nieprzewidziane koszty”), a nie to, że nie da się ich przewidzieć; <i>vorherzusehende</i> ma złą końcówkę."
      },
      {
        q: "Uzupełnij: „Das ist ein nicht zu ___ Problem.” (lekceważyć)",
        hint: "od unterschätzen, rodzaj nijaki po ein",
        why: "<b>unterschätzendes</b>: <i>unterschätzen</i> nie jest rozdzielny, więc <i>zu</i> stoi przed nim jako osobne słowo; po <i>ein</i> w rodzaju nijakim w mianowniku końcówka to <i>-es</i>."
      },
      {
        q: "Uzupełnij: „Die bis zum 30. Juni ___ Unterlagen finden Sie in der Anlage.” (złożyć)",
        hint: "od einreichen, rozdzielny, liczba mnoga po die",
        why: "<b>einzureichenden</b>: przy czasowniku rozdzielnym <i>zu</i> wchodzi między przedrostek a czasownik, a imiesłów dostaje <i>-en</i> po <i>die</i>."
      },
      {
        q: "Uzupełnij formą Gerundivum: w pierwszej luce „rozwiązać”, w drugiej „oszacować” (beziffern).",
        tr: "Raport wymienia trzy problemy do rozwiązania do końca roku i trudną do oszacowania liczbę otwartych postępowań.",
        why: "<i>drei ... zu lösende Probleme</i> (albo <i>zu behebende</i>): po liczebniku bez rodzajnika końcówka to <i>-e</i>. <i>eine kaum zu beziffernde Zahl</i>: z <i>kaum</i> Gerundivum wyraża możliwość bliską zeru, z <i>-e</i> po <i>eine</i>."
      },
      {
        q: "Ułóż słowa we właściwej kolejności.",
        tr: "Wnioski, które urząd musi rozpatrzyć, są dostępne od tygodni.",
        why: "<i>Die von der Behörde zu prüfenden Anträge liegen seit Wochen vor.</i> Wykonawca czynności <i>von der Behörde</i> stoi w przydawce, przed <i>zu prüfenden</i>; <i>vor</i>, przedrostek <i>vorliegen</i>, idzie na koniec."
      },
      {
        q: "Przetłumacz z Gerundivum: „Zmiany, które należy wprowadzić do umowy, muszą zostać zatwierdzone przez obie strony.” (vornehmen, genehmigen, die Vertragspartei)",
        why: "<i>Die am Vertrag vorzunehmenden Änderungen müssen von beiden Vertragsparteien genehmigt werden</i> albo, stylem przepisów, <i>... sind von beiden Vertragsparteien zu genehmigen</i>. <i>vornehmen</i> jest rozdzielny: <i>vorzunehmenden</i>."
      },
      {
        tr: "Dokumenty, które wnioskodawca musi dosłać, należy złożyć do końca miesiąca. W przeciwnym razie należy liczyć się z odrzuceniem wniosku.",
        why: "W <i>nachzureichenden</i> akcent pada na <b>nach</b>; w <i>Andernfalls</i> akcent pada na <b>An</b>; w <i>Ablehnung</i> akcent pada na <b>Ab</b>, a <b>b</b> wymawia się [p]."
      },
      {
        tr: "Przewidywane koszty są trudne do oszacowania.",
        why: "W <i>erwartenden</i> akcent pada na <b>war</b>; w <i>beziffern</i> akcent pada na <b>zif</b>, a <b>z</b> wymawia się [ts]; w <i>Kosten</i> <b>o</b> jest krótkie."
      }
    ]
  },
  "lesson:c2-u01-l3": {
    theme: "Eseistyka i debata publiczna",
    title: "Funktionsverbgefüge w tekście",
    objectives: [
      "rozpoznać Funktionsverbgefüge w długim zdaniu",
      "wybrać właściwy czasownik funkcyjny (kommen czy bringen, finden czy stoßen)",
      "zastąpić Funktionsverbgefüge czasownikiem prostym albo stroną bierną i odwrotnie",
      "zrozumieć różnicę między in Abrede stellen a nicht in Abrede stellen"
    ],
    theory: [
      {
        h: "Rzeczownik niesie znaczenie, czasownik perspektywę",
        p: "W Funktionsverbgefüge (wyrażeniu z czasownikiem funkcyjnym) znaczenie niesie rzeczownik (<em>Anwendung, Zweifel, Beweis</em>), a czasownik (<em>kommen, ziehen, stellen, finden</em>) sam mówi niewiele i ustala przede wszystkim perspektywę: czynną albo bierną, początek procesu albo stan. Na C1 poznałeś je jako gotowe formuły; na C2 trudność polega na tym, żeby rozpoznać je w długim zdaniu, gdzie rzeczownik i czasownik stoją na dwóch końcach nawiasu: <em>Die Ergebnisse wurden von Fachleuten in Zweifel gezogen.</em>"
      },
      {
        h: "Pary, które zmieniają perspektywę",
        p: "Wiele Funktionsverbgefüge występuje w parach. <strong>zur Anwendung kommen</strong> ma znaczenie bierne (<em>wird angewendet</em>), <strong>zur Anwendung bringen</strong> czynne (<em>anwenden</em>). <strong>Berücksichtigung finden</strong> i <strong>auf Kritik stoßen</strong> zastępują stronę bierną: <em>Die Einwände fanden Berücksichtigung</em> = <em>wurden berücksichtigt</em>; <em>Der Plan stieß auf Kritik</em> = <em>wurde kritisiert</em>. Inne mają obok siebie prawie synonimiczny czasownik prosty: <em>Rechnung tragen</em> (uwzględniać, z celownikiem) odpowiada zwykle <em>berücksichtigen</em>, a różnice dotyczą tylko kontekstu i rejestru. <em>zur Debatte stehen</em> natomiast nie ma prostego odpowiednika."
      },
      {
        contrast: "Polski zna takie połączenia i często się one pokrywają: <em>poddać w wątpliwość</em> (<em>in Zweifel ziehen</em>), <em>brać pod uwagę</em> (<em>in Betracht ziehen</em>), <em>znaleźć zastosowanie</em> (<em>zur Anwendung kommen</em>), <em>spotkać się z krytyką</em> (<em>auf Kritik stoßen</em>). Czasownika funkcyjnego nie tłumaczy się jednak słowo w słowo: <em>unter Beweis stellen</em> to nie „postawić pod dowodem”, tylko „udowodnić, dać dowód”, <em>zur Sprache bringen</em> to „poruszyć”, <em>in Abrede stellen</em> to „zaprzeczyć”. Przyimek i rodzajnik są stałe: <em>zur Anwendung</em>, nigdy <em>in die Anwendung</em>."
      },
      {
        trap: "<em>in Abrede stellen</em> znaczy „zaprzeczać”, więc <em>Sie stellt nicht in Abrede, dass ...</em> to „nie zaprzecza, że ...”: ostrożne ustępstwo, które nie musi być wyraźnym przyznaniem. A <em>Rechnung tragen</em> wymaga celownika bez przyimka, choć polskie <em>uwzględniać</em> łączy się z biernikiem: <em>den Bedenken Rechnung tragen</em>, a nie <em>auf die Bedenken</em>."
      },
      {
        tip: "W tekstach formalnych Funktionsverbgefüge nadaje wagę rzeczownikowi i pozwala zmienić perspektywę bez strony biernej; w tekście, który ma się czytać lekko, czasownik prosty jest często lepszy. Pisząc, używaj go tam, gdzie coś wnosi (perspektywę, początek procesu, rejestr), a nie po to, żeby wydłużyć zdanie."
      }
    ],
    grammar: {
      title: "Funktionsverbgefüge w prozie naukowej i publicystycznej",
      note: "<b>Rzeczownik</b> = znaczenie; <b>czasownik funkcyjny</b> = perspektywa. <i>kommen, finden, stoßen auf</i>: znaczenie bierne. <i>bringen, stellen, ziehen</i>: znaczenie czynne. Przyimek i rodzajnik są stałe.",
      table: {
        head: ["Funktionsverbgefüge", "czasownik prosty lub strona bierna", "znaczenie"],
        rows: [
          ["zur Anwendung kommen", "angewendet werden", "znaleźć zastosowanie"],
          ["in Zweifel ziehen", "bezweifeln", "poddać w wątpliwość"],
          ["unter Beweis stellen", "beweisen", "udowodnić"],
          ["Berücksichtigung finden", "berücksichtigt werden", "zostać uwzględnionym"],
          ["auf Kritik stoßen", "kritisiert werden", "spotkać się z krytyką"],
          ["in Abrede stellen", "bestreiten", "zaprzeczyć"]
        ]
      },
      examples: [
        { tr: "Nowa metoda jest już stosowana w kilku klinikach.", note: "zur Anwendung kommen: znaczenie bierne" },
        { tr: "Wyniki badania zostały podane w wątpliwość przez specjalistów.", note: "in Zweifel ziehen w stronie biernej: rzeczownik i imiesłów na dwóch końcach zdania" },
        { tr: "Ustawa w niewystarczającym stopniu uwzględnia zmienione warunki życia.", note: "Rechnung tragen + celownik" },
        { tr: "Autorka dowodzi swojej tezy na licznych przykładach.", note: "unter Beweis stellen = beweisen" },
        { tr: "Propozycja spotkała się w komisji z szerokim poparciem.", note: "auf Zustimmung stoßen: znaczenie bierne, jak auf Kritik stoßen" },
        { tr: "Kwestia finansowania nie została poruszona na posiedzeniu.", note: "zur Sprache bringen w stronie biernej" }
      ]
    },
    vocab: [
      "znaleźć zastosowanie, być stosowanym",
      "poddać w wątpliwość",
      "uwzględniać (+ celownik)",
      "udowodnić, dać dowód",
      "poruszyć (kwestię)",
      "brać pod uwagę",
      "zostać uwzględnionym",
      "spotkać się z krytyką",
      "zaprzeczać, kwestionować",
      "być przedmiotem dyskusji",
      "stanowisko, opinia",
      "zwyczaj, obyczaj"
    ],
    exercises: [
      {
        q: "Który czasownik prosty odpowiada wyrażeniu „etwas in Zweifel ziehen”?",
        opts: [
          "bezweifeln",
          "verzweifeln",
          "überziehen"
        ],
        why: "<b>bezweifeln</b>, „wątpić w coś, kwestionować”. <i>verzweifeln</i> znaczy „rozpaczać”; <i>überziehen</i> „przesadzić” albo „przekroczyć stan konta”."
      },
      {
        q: "W raporcie: „Die Methode wird in drei Kliniken angewendet.” Które sformułowanie z Funktionsverbgefüge znaczy to samo?",
        opts: [
          "Die Methode kommt in drei Kliniken zur Anwendung.",
          "Die Methode bringt in drei Kliniken zur Anwendung.",
          "Die Methode stellt in drei Kliniken zur Anwendung."
        ],
        why: "<b>kommen</b> daje znaczenie bierne: metoda „jest stosowana”. <i>zur Anwendung bringen</i> jest czynne i wymaga podmiotu, który stosuje: <i>Drei Kliniken bringen die Methode zur Anwendung</i>. <i>stellen</i> nie tworzy tego Funktionsverbgefüge."
      },
      {
        q: "W recenzji: „Die Verfasserin stellt nicht in Abrede, dass ihre Quellen lückenhaft sind.” Co robi autorka?",
        opts: [
          "nie zaprzecza, że jej źródła są niepełne",
          "zaprzecza, że jej źródła są niepełne",
          "dowodzi, że jej źródła są niepełne"
        ],
        why: "<i>in Abrede stellen</i> = „zaprzeczać”; z <i>nicht</i> daje <b>„nie zaprzeczać”</b>. To ostrożne ustępstwo, typowe dla prozy naukowej: autorka nie kwestionuje ograniczenia; to, jak otwarcie je przyznaje, zależy od kontekstu."
      },
      {
        q: "Uzupełnij: „Der Entwurf trägt den Einwänden der Verbände kaum ___.” (uwzględnia)",
        hint: "rzeczownik, który łączy się z tragen",
        why: "<b>Rechnung</b>: <i>einer Sache Rechnung tragen</i>, „uwzględniać coś”, z celownikiem (<i>den Einwänden</i>)."
      },
      {
        q: "Uzupełnij: „Die Finanzierung des Projekts steht derzeit nicht zur ___.” (nie jest przedmiotem dyskusji albo nie podlega negocjacji)",
        hint: "zur ... stehen",
        why: "<b>Debatte</b> albo <b>Diskussion</b>: „nie jest przedmiotem dyskusji”. <b>Disposition</b> daje drugie odczytanie: <i>nicht zur Disposition stehen</i>, „nie podlega negocjacji, nie jest kwestionowane”."
      },
      {
        q: "Uzupełnij: w pierwszej luce przyimek, w drugiej rzeczownik z Funktionsverbgefüge.",
        tr: "Komisja wprawdzie wzięła pod uwagę propozycje opozycji, ale w raporcie końcowym prawie ich nie uwzględniła.",
        why: "<i>in Betracht ziehen</i> („brać pod uwagę”) i <i>Rechnung tragen</i> + celownik (<i>ihnen</i>). Zdanie pokazuje różnicę między nimi: rozważyć propozycję to nie to samo, co ją uwzględnić."
      },
      {
        q: "Połącz każde wyrażenie z jego znaczeniem.",
        pairs: [
          "zaprzeczyć",
          "udowodnić",
          "poruszyć (kwestię)",
          "spotkać się z krytyką"
        ]
      },
      {
        q: "Przetłumacz: „Zastrzeżenia obywateli nie zostały uwzględnione w projekcie.” (der Einwand, der Entwurf, Berücksichtigung finden)",
        why: "Z Funktionsverbgefüge: <i>Die Einwände der Bürger haben im Entwurf keine Berücksichtigung gefunden</i> (albo <i>fanden ... keine Berücksichtigung</i>). Przeczenie przechodzi do rzeczownika: <i>keine Berücksichtigung</i>, a nie <i>nicht Berücksichtigung</i>. Przyjmuje się też zwykłą stronę bierną: <i>... wurden im Entwurf nicht berücksichtigt</i>."
      },
      {
        tr: "Opisana w badaniu procedura jak dotąd rzadko znajduje zastosowanie. Autorzy nie podają w wątpliwość jej skuteczności, ale poruszają kwestię wysokich kosztów.",
        why: "W <i>Studie</i> początkowe <b>st</b> wymawia się [ʃt]; w <i>Autoren</i> akcent pada na <b>to</b>; w <i>Sprache</i> <b>sp</b> wymawia się [ʃp]."
      },
      {
        tr: "Pani minister wyparła się wszelkiej odpowiedzialności.",
        why: "W <i>Ministerin</i> akcent pada na <b>nis</b>; w <i>Verantwortung</i> akcent pada na <b>ant</b>; w <i>Abrede</i> akcent pada na <b>Ab</b>, a <b>b</b> wymawia się [p]."
      }
    ]
  },
  "lesson:c2-u01-test": {
    theme: "Sprawdzian",
    title: "Test: Rozbudowane przydawki",
    objectives: [
      "sprawdzić rozbudowaną przydawkę imiesłowową, Gerundivum i Funktionsverbgefüge"
    ],
    theory: [
      {
        p: "Dziesięć pytań z całej jednostki. Zaliczasz przy 70%. Nie zaglądaj do lekcji w trakcie odpowiadania: jeśli czegoś nie pamiętasz, lepiej wrócić i powtórzyć."
      }
    ],
    exercises: [
      {
        q: "Uzupełnij: „Die von der Kommission im Herbst ___ Daten sind inzwischen veraltet.” (przedstawić)",
        hint: "od vorlegen, imiesłów II, liczba mnoga po die",
        why: "<b>vorgelegten</b>: imiesłów II o znaczeniu biernym („przedstawione przez komisję”), <i>-en</i> po rodzajniku liczby mnogiej."
      },
      {
        q: "Uzupełnij: „Die bis Freitag ___ Berichte liegen noch nicht vor.” (oddać)",
        hint: "od abgeben, Gerundivum",
        why: "<b>abzugebenden</b>: <i>zu</i> między przedrostkiem a czasownikiem, imiesłów I, <i>-en</i> po <i>die</i>: „sprawozdania do oddania do piątku”."
      },
      {
        q: "Uzupełnij: „Das neue Verfahren kommt ab Januar zur ___.” (będzie stosowana)",
        hint: "rzeczownik, który łączy się z zur ... kommen",
        why: "<b>Anwendung</b>: <i>zur Anwendung kommen</i>, „być stosowanym, znaleźć zastosowanie”."
      },
      {
        q: "Uzupełnij: „Die Autorin hat ihr Können erneut unter ___ gestellt.” (udowodniła)",
        hint: "unter ... stellen",
        why: "<b>Beweis</b>: <i>unter Beweis stellen</i>, „udowodnić, dać dowód”."
      },
      {
        q: "„Die sich aus den neuen Vorschriften für kleine Betriebe ergebenden Pflichten sind kaum zu überblicken.” Do którego rzeczownika odnosi się przydawka?",
        opts: [
          "Pflichten",
          "Vorschriften",
          "Betriebe"
        ],
        why: "Rodzajnik <i>Die</i> otwiera nawias, który zamyka imiesłów <i>ergebenden</i> i rzeczownik <b>Pflichten</b>: „obowiązki wynikające z nowych przepisów dla małych firm”. <i>Vorschriften</i> i <i>Betriebe</i> należą do określeń."
      },
      {
        q: "Co znaczy „die zu befragenden Personen”?",
        opts: [
          "osoby, które należy ankietować",
          "osoby, które ankietują",
          "osoby już ankietowane"
        ],
        why: "<i>zu</i> + imiesłów I to <b>Gerundivum</b>: znaczenie bierne i wartość obowiązku. <i>befragend</i> byłoby czynne, <i>befragt</i> już zakończone."
      },
      {
        q: "Które zdanie znaczy to samo co „Die Reform stieß auf heftige Kritik”?",
        opts: [
          "Die Reform wurde heftig kritisiert.",
          "Die Reform kritisierte heftig.",
          "Die Reform hat heftige Kritik geübt."
        ],
        why: "<i>auf Kritik stoßen</i> ma znaczenie bierne: reforma <b>została ostro skrytykowana</b>. <i>Kritik üben</i> jest czynne: krytykuje podmiot."
      },
      {
        q: "Zamień na przydawkę: „die Fragen, die noch geklärt werden müssen”",
        opts: [
          "die noch zu klärenden Fragen",
          "die noch geklärten Fragen",
          "die noch klärenden Fragen"
        ],
        why: "Strona bierna z <i>müssen</i> zmienia się w <b>Gerundivum</b>: <i>zu klärenden</i>. <i>geklärten</i> znaczyłoby, że są już wyjaśnione; <i>klärenden</i>, że to one coś wyjaśniają."
      },
      {
        tr: "Wyniki przedstawione przez komisję ekspertów spotkały się z szerokim poparciem. Środki, które należy z nich wyprowadzić, mają zostać wdrożone w przyszłym roku.",
        why: "W <i>Expertenkommission</i> główny akcent pada na <b>per</b>; w <i>stießen</i> <b>ie</b> jest długie, a <b>ß</b> wymawia się [s]; w <i>Maßnahmen</i> akcent pada na <b>Maß</b>, z długim <b>a</b>."
      },
      {
        tr: "Sprawy, które pozostają do wyjaśnienia, zostaną poruszone na najbliższym posiedzeniu.",
        why: "W <i>klärenden</i> <b>ä</b> jest długie; w <i>nächsten</i> <b>ä</b> jest długie także przed <b>chst</b>; w <i>Sitzung</i> <b>tz</b> wymawia się [ts]."
      }
    ]
  },
  "unit:c2-u02": {
    title: "Liczba mnoga i słowotwórstwo",
    grammarNote: "Podwójna liczba mnoga o różnym znaczeniu (die Banken i die Bänke, die Worte i die Wörter) · zastępcza liczba mnoga (Ratschläge, Regenfälle, Streitigkeiten) · złożenia: Grundwort i element łączący (Arbeitszeit, Hundebesitzer, Schulpflicht) · derywacja z -ung, -heit, -keit oraz z ver-, zer-, ent-, miss- · rodzaj Fremdwörter (-ion, -ität, -ismus)"
  },
  "lesson:c2-u02-l1": {
    theme: "Słownictwo i znaczenie",
    title: "Die Banken i die Bänke",
    objectives: [
      "odróżniać formy liczby mnogiej, które zmieniają znaczenie (Banken i Bänke, Worte i Wörter)",
      "używać zastępczej liczby mnogiej rzeczowników, które jej nie mają (Ratschläge, Regenfälle)",
      "wybierać właściwą liczbę mnogą zależnie od kontekstu",
      "nie mylić Mütter i Muttern, Bände i Bänder"
    ],
    theory: [
      {
        h: "Jedna liczba pojedyncza, dwie mnogie",
        p: "Niektóre rzeczowniki mają dwie formy liczby mnogiej i każda niesie inne znaczenie. <em>die Bank</em> to zarówno bank, jak i ławka: banki to <strong>Banken</strong>, ławki to <strong>Bänke</strong>. <em>das Wort</em> ma liczbę mnogą <strong>Wörter</strong>, gdy chodzi o słowa jako jednostki słownika, brane pojedynczo (<em>ein Wörterbuch mit 100 000 Wörtern</em>), i <strong>Worte</strong>, gdy chodzi o słowa, które składają się na wypowiedź (<em>mit anderen Worten, Worte des Dankes</em>). <em>die Mutter</em> daje <strong>Mütter</strong> (matki) i <strong>Muttern</strong> (nakrętki). Czasem za tą samą formą kryją się dwa rzeczowniki różnego rodzaju: <em>der Band</em> (tom) ma liczbę mnogą <strong>Bände</strong>, <em>das Band</em> (wstążka, więzadło) ma <strong>Bänder</strong>, a <em>die Band</em>, zespół muzyczny, ma <em>Bands</em>."
      },
      {
        h: "Gdy liczby mnogiej brakuje: zastępcza liczba mnoga",
        p: "Inne rzeczowniki nie mają liczby mnogiej w zwykłym użyciu albo mają ją rzadką, i niemiecki bierze ją od złożenia albo od derywatu. <em>der Rat</em> w znaczeniu „rada, porada” przechodzi w <strong>Ratschläge</strong>: <em>Räte</em> to natomiast rady jako organy kolegialne albo ich członkowie (<em>die Stadträte</em>). <em>der Regen</em> przechodzi w <strong>Regenfälle</strong>, <em>der Schnee</em> w <strong>Schneefälle</strong>, <em>der Streit</em> zwykle w <strong>Streitigkeiten</strong> (<em>Streite</em> istnieje, ale jest rzadkie). Zastępcza liczba mnoga to miejsce, w którym fleksja spotyka się ze słowotwórstwem: sięga się po złożenie, którego ostatni człon ma liczbę mnogą (<em>Regenfälle, Ratschläge</em>), albo po derywat (<em>Streitigkeiten</em>)."
      },
      {
        contrast: "Polszczyzna zna ten mechanizm z własnego podwórka: <em>oczy</em> to narząd wzroku, a <em>oka</em> to oczka sieci albo tłuszczu na rosole; <em>uszy</em> słyszą, a <em>ucha</em> ma garnek. Niemieckie pary są jednak inne i nie pokrywają się z polskimi: <em>bank</em> i <em>ławka</em> to dla Ciebie dwa różne słowa, więc nic nie podpowiada, że po niemiecku trzeba wybierać między <em>Banken</em> a <em>Bänke</em>. Z <em>Rat</em> jest odwrotnie: polska <em>rada</em> też znaczy i poradę, i gremium, ale w obu znaczeniach ma zwykłą liczbę mnogą <em>rady</em>, a niemiecki rozdziela <em>Ratschläge</em> i <em>Räte</em>. Za to <em>Regenfälle</em> brzmi znajomo: polskie <em>opady deszczu</em> robią to samo, co niemieckie złożenie."
      },
      {
        trap: "Słownik zawiera <em>Wörter</em>, nigdy <em>Worte</em>; wzruszające przemówienie składa się z <em>Worte</em>. Polszczyzna częściowo pomaga: <em>Wörter</em> to mniej więcej <em>wyrazy</em>, a <em>Worte</em> to <em>słowa</em> w sensie wypowiedzi (<em>w kilku słowach</em>, <em>słowa podziękowania</em>). Ale po polsku słownik też „zawiera sto tysięcy słów”, więc ta para nie jest bezpiecznym drogowskazem. Kryterium nie jest liczba (<em>ein paar Worte</em> też da się policzyć), tylko punkt widzenia: jednostka słownika, <em>Wörter</em>; wypowiedź, to, co ktoś mówi, <em>Worte</em>. I uwaga na umlaut, który tu rozróżnia znaczenie: <em>Muttern</em> to nakrętki, <em>Mütter</em> to matki; <em>Bänke</em> to ławki, <em>Banken</em> to instytucje kredytowe."
      },
      {
        tip: "Ucz się liczby mnogiej razem ze znaczeniem, nie jako osobnej formy. Słowniki jednojęzyczne (na przykład Duden) podają obie formy, każdą z własną definicją: tam warto sprawdzać."
      }
    ],
    grammar: {
      title: "Podwójna i zastępcza liczba mnoga",
      note: "Jeden rzeczownik, dwie liczby mnogie, dwa znaczenia: <b>Banken</b> (banki) i <b>Bänke</b> (ławki), <b>Wörter</b> (wyrazy) i <b>Worte</b> (słowa, wypowiedź). Gdy liczby mnogiej brakuje, dostarcza jej złożenie: <b>Ratschläge</b>, <b>Regenfälle</b>, <b>Streitigkeiten</b>.",
      table: {
        head: ["liczba pojedyncza", "liczba mnoga", "znaczenie"],
        rows: [
          ["die Bank", "die Banken", "banki"],
          ["die Bank", "die Bänke", "ławki"],
          ["das Wort", "die Wörter", "wyrazy (pojedyncze jednostki słownika)"],
          ["das Wort", "die Worte", "słowa (wypowiedzi)"],
          ["die Mutter", "die Muttern", "nakrętki"],
          ["der Rat", "die Ratschläge", "rady, porady"]
        ]
      },
      examples: [
        { tr: "Banki znowu podniosły stopy procentowe.", note: "Banken: instytucje kredytowe" },
        { tr: "Przed ratuszem ustawiono nowe ławki.", note: "Bänke: ławki, z umlautem" },
        { tr: "W kilku słowach trafnie ujęła sedno problemu.", note: "Worte: słowa jako wypowiedź, nie jako wyrazy" },
        { tr: "Słownik notuje ponad sto tysięcy wyrazów.", note: "Wörter: słowa jako jednostki słownika" },
        { tr: "Z wdzięcznością przyjęła rady koleżanek i kolegów.", note: "Ratschläge: zastępcza liczba mnoga od der Rat" },
        { tr: "Po ulewnych deszczach rzeka wystąpiła z brzegów.", note: "Regenfälle: zastępcza liczba mnoga od der Regen" }
      ]
    },
    vocab: [
      "instytucja kredytowa",
      "ławka",
      "nakrętka",
      "spór, kłótnia",
      "opad deszczu",
      "opad śniegu",
      "dyscyplina sportu",
      "zwrot, wyrażenie idiomatyczne",
      "różnica znaczeniowa",
      "forma liczby mnogiej",
      "wieloznaczny",
      "odróżniać, rozróżniać"
    ],
    exercises: [
      {
        q: "W dziale gospodarczym: „Mehrere ___ haben ihre Gebühren erhöht.”",
        opts: [
          "Banken",
          "Bänke",
          "Banke"
        ],
        why: "Instytucje kredytowe to <b>Banken</b>; <i>Bänke</i> to ławki. <i>Banke</i> nie istnieje."
      },
      {
        q: "Uzupełnij: „Zur Begrüßung sprach der Direktor ein paar ___.” (kilka słów, krótkie przemówienie)",
        opts: [
          "Worte",
          "Wörter",
          "Worten"
        ],
        why: "Słowa, które składają się na wypowiedź: <b>Worte</b>. <i>Wörter</i> to słowa jako jednostki słownika; <i>Worten</i> to celownik liczby mnogiej (<i>mit wenigen Worten</i>), a tu potrzebny jest biernik."
      },
      {
        q: "Jaka jest zwykła liczba mnoga od „der Rat” w znaczeniu „rada, porada”?",
        opts: [
          "die Ratschläge",
          "die Räte",
          "die Rate"
        ],
        why: "W znaczeniu porady <i>Rat</i> nie ma liczby mnogiej w zwykłym użyciu: sięga się po zastępczą liczbę mnogą <b>Ratschläge</b>. <i>Räte</i> to organy kolegialne albo ich członkowie (<i>Stadträte</i>); <i>die Rate</i> to rata, inne słowo."
      },
      {
        q: "Uzupełnij: „Das neue Wörterbuch verzeichnet rund 140 000 ___.”",
        hint: "liczba mnoga od das Wort: jednostki słownika",
        why: "<b>Wörter</b>: słownik notuje słowa jako jednostki słownika. Uwaga na umlaut: <i>Worter</i> nie istnieje."
      },
      {
        q: "Uzupełnij: „An der Schraube fehlt eine Mutter; im Werkzeugkasten liegen aber noch zwei ___.”",
        hint: "liczba mnoga od die Mutter w znaczeniu „nakrętka”",
        why: "<b>Muttern</b> (albo <b>Schraubenmuttern</b>): nakrętka tworzy liczbę mnogą na <i>-n</i>, bez umlautu. <i>Mütter</i> to matki."
      },
      {
        q: "Uzupełnij dwiema formami zastępczej liczby mnogiej: w pierwszej luce liczbę mnogą od „der Regen”, w drugiej od „der Rat” (porada).",
        tr: "Ulewne deszcze ostatnich tygodni zniszczyły zbiory; teraz rolnicy dostają ze wszystkich stron życzliwe rady.",
        why: "<i>Regen</i> nie ma liczby mnogiej w zwykłym użyciu: mówi się <b>Regenfälle</b>. <i>Niederschläge</i> byłoby szersze, bo obejmuje też śnieg i grad. Dla porad potrzebne jest <b>Ratschläge</b>. Obie formy bez <i>-n</i>: pierwsza to mianownik liczby mnogiej, druga biernik liczby mnogiej."
      },
      {
        q: "Połącz każdą formę liczby mnogiej z jej znaczeniem.",
        pairs: [
          "banki",
          "ławki",
          "słowa (wypowiedzi)",
          "wyrazy (pojedyncze jednostki słownika)"
        ]
      },
      {
        q: "Przetłumacz: „Banki zignorowały rady ekspertów.” (ignorieren, der Ratschlag, der Experte)",
        why: "<i>Die Banken haben die Ratschläge der Experten ignoriert</i>. Dwie formy liczby mnogiej do starannego wyboru: <i>Banken</i>, nie <i>Bänke</i>, oraz <i>Ratschläge</i>, bo <i>Rat</i> w znaczeniu porady nie ma liczby mnogiej. Przyjmowane są też <i>Fachleute</i>, Präteritum <i>ignorierten</i> i czasownik <i>missachten</i>."
      },
      {
        tr: "Na ławkach przed bankiem klienci czekali od wczesnego rana. W kilku słowach jeden z pracowników wyjaśnił, dlaczego oddział pozostaje zamknięty.",
        why: "W <i>Bänken</i> <b>ä</b> jest krótkie, [ɛ]; w <i>Angestellter</i> akcent pada na <b>An</b>; w <i>Filiale</i> akcent pada na długie <b>a</b>: fi-li-<b>a</b>-le."
      },
      {
        tr: "W kilku słowach powiedziała wszystko.",
        why: "W <i>Worten</i> <b>o</b> jest krótkie, [ɔ]; w <i>wenigen</i> akcent pada na <b>we</b>; w <i>gesagt</i> akcent pada na <b>sagt</b>, a <b>g</b> przed końcowym <b>t</b> wymawia się [k]."
      }
    ]
  },
  "lesson:c2-u02-l2": {
    theme: "Słownictwo specjalistyczne i urzędowe",
    title: "Złożenia i Fugenelement",
    objectives: [
      "rozkładać złożenie na Bestimmungswort i Grundwort",
      "ustalać rodzaj złożenia na podstawie ostatniego członu",
      "wstawiać właściwy element łączący (-s-, -e-, -n-, -er-)",
      "rozpoznawać przyrostki, po których normą jest -s- (-ung, -heit, -keit, -tät)"
    ],
    theory: [
      {
        h: "Decyduje rzeczownik po prawej",
        p: "W złożeniu (<em>Kompositum</em>) ostatni człon, <strong>Grundwort</strong>, ustala rodzaj, liczbę mnogą i część mowy; człony przed nim, <strong>Bestimmungswörter</strong>, go określają. <em>das Haus + die Tür + der Schlüssel</em> dają <em>der Haustürschlüssel</em>, rodzaju męskiego jak <em>Schlüssel</em>. Złożenie pisze się łącznie, a główny akcent pada zwykle na pierwszy człon: <em><b>Haus</b>türschlüssel</em>."
      },
      {
        h: "Element łączący",
        p: "Między członami może pojawić się <strong>Fugenelement</strong>: <em>-s-</em> (<em>Arbeitszeit, Wohnungsmarkt</em>), <em>-es-</em> (<em>Tageslicht</em>), <em>-e-</em> (<em>Hundebesitzer</em>), <em>-n-</em> albo <em>-en-</em> (<em>Sonnenenergie, Leinenpflicht</em>), <em>-er-</em> (<em>Kinderbuch</em>); czasem przeciwnie, końcowe <em>-e</em> pierwszego członu odpada (<em>die Schule</em> → <em>Schulpflicht</em>). Wiarygodna wskazówka: po przyrostkach <em>-ung, -heit, -keit, -schaft, -ion, -tät, -ling</em> elementem łączącym jest zwykle <em>-s-</em> (<em>Gesundheitswesen, Freiheitsstrafe, Universitätsbibliothek, Lieblingsbuch</em>). To jednak wskazówka, nie gwarancja; w pozostałych przypadkach element łączący trzeba poznawać słowo po słowie, a czasem się waha: <em>Schadensersatz</em> i <em>Schadenersatz</em> są oba poprawne, a w Austrii mówi się <em>Schweinsbraten</em> tam, gdzie w Niemczech <em>Schweinebraten</em>."
      },
      {
        contrast: "Polszczyzna też ma złożenia z elementem łączącym, najczęściej <em>-o-</em>: <em>językoznawca, gwiazdozbiór, wodociąg</em>, i w nich też człon główny stoi na końcu (<em>gwiazdozbiór</em> to zbiór gwiazd). Ale takich słów jest ograniczona liczba i nie tworzy się ich swobodnie: na co dzień polski stawia rzeczownik główny na początku i dookreśla go przymiotnikiem albo dopełniaczem: <em>rynek mieszkaniowy</em>, <em>biblioteka uniwersytecka</em>, <em>warunki pracy</em>. Niemiecki tworzy złożenia bez ograniczeń i zwykle zapisuje je łącznie: <em>Wohnungsmarkt, Universitätsbibliothek, Arbeitsbedingungen</em>. Przy tłumaczeniu czyta się od prawej do lewej, a polski przymiotnik albo dopełniacz odpowiada zwykle pierwszemu członowi. I właśnie dlatego <em>-s-</em> łączące nie jest dopełniaczem, choć polskie <em>warunki pracy</em> to sugerują: pojawia się też po rzeczownikach żeńskich (<em>die Arbeit</em> → <em>Arbeitszeit</em>, <em>die Liebe</em> → <em>Liebesbrief</em>), które w dopełniaczu nigdy nie dostają <em>-s</em>."
      },
      {
        trap: "Rodzaj pochodzi zawsze od ostatniego członu, nawet gdy pierwszy jest bardziej „widoczny”: <em>das Arbeitsamt</em> jest nijakie jak <em>das Amt</em>, choć <em>Arbeit</em> jest żeńska; <em>der Wohnungsmarkt</em> jest męski jak <em>der Markt</em>. Uwaga, bo polski odpowiednik często ma inny rodzaj (<em>rynek</em> się zgadza, ale <em>urząd pracy</em> jest męski). I złożenia się nie rozdziela: <em>Arbeitsbedingungen</em>, nie <em>Arbeits Bedingungen</em>. Łącznik stosuje się tylko dla przejrzystości albo przy skrótowcach i nazwach własnych (<em>E-Mail-Adresse</em>)."
      },
      {
        tip: "Żeby zrozumieć długie złożenie, zacznij od prawej: <em>Arbeits|bedingungen</em> to warunki, a pierwszy człon mówi jakie (pracy). Odetnij ewentualny element łączący i szukaj części w słowniku po kolei."
      }
    ],
    grammar: {
      title: "Złożenia i element łączący",
      note: "<b>Bestimmungswort + (element łączący) + Grundwort</b>. Grundwort, po prawej, decyduje o rodzaju i liczbie mnogiej; główny akcent pada zwykle na pierwszy człon. Po <i>-ung, -heit, -keit, -schaft, -ion, -tät, -ling</i> elementem łączącym jest zwykle <i>-s-</i>.",
      table: {
        head: ["człony", "element łączący", "złożenie"],
        rows: [
          ["die Arbeit + die Zeit", "-s-", "die Arbeitszeit"],
          ["die Wohnung + der Markt", "-s-", "der Wohnungsmarkt"],
          ["der Hund + der Besitzer", "-e-", "der Hundebesitzer"],
          ["die Sonne + die Energie", "-n-", "die Sonnenenergie"],
          ["das Kind + das Buch", "-er-", "das Kinderbuch"],
          ["die Schule + die Pflicht", "odpada -e", "die Schulpflicht"]
        ]
      },
      examples: [
        { tr: "Warunki pracy w opiece prawie się nie poprawiły.", note: "Arbeit + s + Bedingungen: -s- także po rzeczowniku żeńskim" },
        { tr: "Właściciel psa odpowiada za szkody.", note: "Hund + e + Besitzer" },
        { tr: "Energia słoneczna pokrywa już część zapotrzebowania na prąd.", note: "Sonne + n + Energie; Strom + Bedarf bez elementu łączącego: -s w Strombedarfs to końcówka dopełniacza" },
        { tr: "Książkę dla dzieci przetłumaczono na dwadzieścia języków.", note: "Kind + er + Buch: element łączący pokrywa się z liczbą mnogą Kinder" },
        { tr: "Jej list miłosny nigdy nie dotarł.", note: "Liebe + s + Brief: -s- po rzeczowniku żeńskim, więc to nie dopełniacz" },
        { tr: "Obowiązek szkolny zaczyna się zwykle w wieku sześciu lat.", note: "Schule + Pflicht: końcowe -e odpada" }
      ]
    },
    vocab: [
      "złożenie, wyraz złożony",
      "człon główny (ostatni człon złożenia)",
      "człon określający (człon przed członem głównym)",
      "element łączący",
      "warunek pracy",
      "rynek mieszkaniowy",
      "biblioteka uniwersytecka",
      "kara pozbawienia wolności",
      "odszkodowanie",
      "ochrona zdrowia, system opieki zdrowotnej",
      "składać się z",
      "złożony (o wyrazie)"
    ],
    exercises: [
      {
        q: "Jaki rodzaj ma „Haustürschlüssel” (klucz do drzwi wejściowych)?",
        opts: [
          "der, jak Schlüssel",
          "die, jak Tür",
          "das, jak Haus"
        ],
        why: "O rodzaju decyduje zawsze ostatni człon, Grundwort: <b>der</b> Schlüssel, więc <b>der</b> Haustürschlüssel."
      },
      {
        q: "Uzupełnij: „Der ___ in München ist seit Jahren angespannt.”",
        hint: "die Wohnung + der Markt, z elementem łączącym",
        why: "<b>Wohnungsmarkt</b>: po <i>-ung</i> elementem łączącym jest <i>-s-</i>. Rodzaj męski, jak <i>der Markt</i>."
      },
      {
        q: "Uzupełnij: „Die ___ ist auch am Sonntag geöffnet.”",
        hint: "die Universität + die Bibliothek",
        why: "<b>Universitätsbibliothek</b>: po <i>-tät</i> elementem łączącym jest <i>-s-</i>, a całość pisze się jednym słowem."
      },
      {
        q: "Uzupełnij: „Der Angeklagte wurde zu einer ___ von drei Jahren verurteilt.”",
        hint: "die Freiheit + die Strafe",
        why: "<b>Freiheitsstrafe</b>, „kara pozbawienia wolności”: po <i>-heit</i> elementem łączącym jest <i>-s-</i>."
      },
      {
        q: "Uzupełnij: „Die ___ beginnt in Deutschland in der Regel mit sechs Jahren.”",
        hint: "die Schule + die Pflicht",
        why: "<b>Schulpflicht</b>: nic się tu nie dodaje, przeciwnie, końcowe <i>-e</i> od <i>Schule</i> odpada, jak w <i>Schulbuch</i> i <i>Schulweg</i>."
      },
      {
        q: "Uzupełnij dwoma złożeniami: w pierwszej luce „der Hund + der Besitzer”, w drugiej „die Leine + die Pflicht”.",
        tr: "Wielu właścicieli psów protestuje przeciwko nowemu obowiązkowi wyprowadzania psów na smyczy w miejskich parkach.",
        why: "<b>Hundebesitzer</b> z elementem łączącym <i>-e-</i>, <b>Leinenpflicht</b> z <i>-n-</i>. Liczba mnoga <i>Hundebesitzer</i> brzmi tak samo jak pojedyncza; <i>Leinenpflicht</i> jest żeńskie jak <i>die Pflicht</i>."
      },
      {
        q: "Które złożenia mają element łączący?",
        opts: [
          "Arbeitszeit",
          "Liebesbrief",
          "Haustür",
          "Tischbein"
        ],
        why: "<i>Arbeit<b>s</b>zeit</i> i <i>Liebe<b>s</b>brief</i> mają element łączący <i>-s-</i>, choć <i>Arbeit</i> i <i>Liebe</i> są żeńskie. <i>Haus|tür</i> i <i>Tisch|bein</i> łączą dwa rzeczowniki bez niczego pośrodku."
      },
      {
        q: "Przetłumacz: „Warunki pracy w ochronie zdrowia się pogorszyły.” (die Arbeitsbedingung, das Gesundheitswesen, sich verschlechtern)",
        why: "<i>Die Arbeitsbedingungen im Gesundheitswesen haben sich verschlechtert</i>. Dwa złożenia z <i>-s-</i>: <i>Arbeit<b>s</b>bedingungen</i> i <i>Gesundheit<b>s</b>wesen</i>. Przyjmowane są też <i>sind schlechter geworden</i>, Präteritum <i>verschlechterten sich</i> i szyk z <i>Im Gesundheitswesen</i> na pierwszym miejscu."
      },
      {
        tr: "Rynek mieszkaniowy w miastach uniwersyteckich jest napięty od lat. Wielu studentów znajduje pokój w przystępnej cenie dopiero po miesiącach szukania.",
        why: "W <i>Wohnungsmarkt</i> akcent pada na <b>Woh</b>, z długim <b>o</b>; w <i>Universitätsstädten</i> główny akcent pada na <b>tät</b>; w <i>monatelanger</i> akcent pada na <b>Mo</b>."
      },
      {
        tr: "Warunki pracy wyraźnie się poprawiły.",
        why: "W <i>Arbeitsbedingungen</i> główny akcent pada na <b>Ar</b>, pierwszy człon złożenia; w <i>deutlich</i> <b>eu</b> wymawia się [ɔʏ]; w <i>verbessert</i> akcent pada na <b>bes</b>."
      }
    ]
  },
  "lesson:c2-u02-l3": {
    theme: "Słownictwo abstrakcyjne",
    title: "Derywacja i Fremdwörter",
    objectives: [
      "tworzyć rzeczowniki abstrakcyjne z -ung, -heit, -keit",
      "wybierać między -heit a -keit",
      "rozumieć, co wnoszą przedrostki ver-, zer-, ent-, miss-",
      "ustalać rodzaj Fremdwörter na podstawie przyrostka"
    ],
    theory: [
      {
        h: "Przyrostki, które decydują o rodzaju",
        p: "Przyrostek przenosi wyraz do innej części mowy i ustala jego rodzaj. <em>-ung</em> tworzy rzeczowniki od czasowników: <em>verbessern</em> → <em>die Verbesserung</em>. <em>-heit</em>, <em>-keit</em> i <em>-igkeit</em> tworzą rzeczowniki od przymiotników: <em>frei</em> → <em>die Freiheit</em>, <em>nachhaltig</em> → <em>die Nachhaltigkeit</em>, <em>genau</em> → <em>die Genauigkeit</em>. Rzeczowniki na <strong>-ung, -heit, -keit, -schaft</strong> są zawsze żeńskie, a jeśli mają liczbę mnogą, tworzą ją na <em>-en</em>; wiele rzeczowników abstrakcyjnych, jak <em>Gelassenheit</em>, jej nie ma."
      },
      {
        h: "-heit czy -keit?",
        p: "<strong>-keit</strong> występuje po przymiotnikach na <em>-bar, -ig, -lich, -sam</em> (<em>Dankbarkeit, Nachhaltigkeit, Höflichkeit, Wirksamkeit</em>) i zwykle po tych na <em>-el</em> i <em>-er</em> (<em>Eitelkeit, Sauberkeit</em>), z wyjątkami jak <em>Sicherheit</em> i <em>Dunkelheit</em>. <strong>-heit</strong> obowiązuje w większości pozostałych przypadków (<em>Freiheit, Gelassenheit, Schönheit</em>). <strong>-igkeit</strong> dodaje się do przymiotników na <em>-los</em> i do kilku innych: <em>Arbeitslosigkeit, Genauigkeit</em>."
      },
      {
        h: "Nierozdzielne przedrostki czasownikowe",
        p: "<em>ver-</em> ma kilka znaczeń: zmianę (<em>verändern</em>), pomyłkę w czasownikach zwrotnych (<em>sich verschreiben, sich verrechnen, sich verlaufen</em>), zużycie do końca (<em>verbrauchen</em>). <em>zer-</em> oznacza rozpad na kawałki (<em>zerreißen, zerbrechen</em>). <em>ent-</em> oznacza oddalenie albo pozbawienie (<em>entfernen, entwerten</em>). <em>miss-</em> oznacza, że coś się nie udaje (<em>missverstehen, misslingen</em>). Wszystkie są nierozdzielne i nie przyjmują <em>ge-</em> w imiesłowie: <em>zerrissen, missverstanden, entwertet</em>. <em>ver-, zer-, ent-</em> nigdy nie są akcentowane; <em>miss-</em> jest akcentowane w niektórych czasownikach (<em>missverstehen</em>), a w innych nie (<em>misslingen</em>)."
      },
      {
        h: "Fremdwörter: przyrostek wskazuje rodzaj",
        p: "Także w wyrazach obcych przyrostek podpowiada rodzaj: <em>-ion, -ität, -ur, -ie</em> są zwykle żeńskie (<em>die Nation, die Qualität, die Kultur, die Demokratie</em>); <em>-ismus</em> jest męski (<em>der Realismus</em>); <em>-ment</em> jest niemal zawsze nijaki (<em>das Dokument, das Argument</em>). Wiele czasowników na <em>-ieren</em> tworzy rzeczowniki na <em>-ierung</em> (<em>digitalisieren</em> → <em>die Digitalisierung</em>), ale nie wszystkie: <em>studieren</em> daje <em>das Studium</em>."
      },
      {
        contrast: "Polskie przyrostki dają tu dobre punkty zaczepienia. <em>-ość</em> jest żeńskie jak <em>-heit</em> i <em>-keit</em> (<em>wolność, Freiheit</em>; <em>niezawodność, Zuverlässigkeit</em>), <em>-izm</em> męski jak <em>-ismus</em>, <em>-acja</em> i <em>-cja</em> żeńskie jak <em>-ation</em> i <em>-ion</em> (<em>kwalifikacja, Qualifikation</em>; <em>cyfryzacja, Digitalisierung</em>). Pułapka kryje się przy rzeczownikach odczasownikowych: <em>ulepszenie</em> jest nijakie, a <em>die Verbesserung</em> żeńska, i tak jest ze wszystkimi na <em>-ung</em>. Rodzaj wyrazów obcych też nie zawsze się przenosi: <em>dokument</em>, <em>argument</em>, <em>problem</em> i <em>system</em> są po polsku męskie, a po niemiecku nijakie (<em>das Dokument, das Problem, das System</em>). <em>zer-</em> odpowiada często polskiemu <em>roz-</em> (<em>zerreißen</em>, rozedrzeć; <em>zerbrechen</em>, rozbić). I fałszywy przyjaciel: <em>der Konkurs</em> to upadłość, nie konkurs (<em>der Wettbewerb</em>)."
      },
      {
        trap: "<em>ver-</em> nie zawsze oznacza pomyłkę: <em>verkaufen</em> to sprzedawać, <em>verschreiben</em> bez zaimka zwrotnego to przepisywać lek (<em>ein Medikament verschreiben</em>), a <em>sich einer Sache verschreiben</em> to poświęcić się czemuś. I <em>verreißen</em> to nie <em>zerreißen</em>: krytyk, który <em>verreißt</em> książkę, miażdży ją w recenzji, a nie drze na strzępy."
      },
      {
        tip: "Gdy trafisz na nieznany rzeczownik abstrakcyjny, odetnij przedrostki i przyrostki i szukaj podstawy: <em>Unzuverlässigkeit</em> → <em>un-</em> + <em>zuverlässig</em> + <em>-keit</em>, „zawodność, brak rzetelności”."
      }
    ],
    grammar: {
      title: "Derywacja: przyrostki, przedrostki, Fremdwörter",
      note: "<b>-ung, -heit, -keit, -schaft, -ion, -ität</b>: rodzaj żeński. <b>-ismus</b>: męski. <b>-ment</b>: niemal zawsze nijaki. <b>ver-, zer-, ent-, miss-</b>: przedrostki nierozdzielne, imiesłów bez <i>ge-</i>.",
      table: {
        head: ["podstawa", "derywat", "znaczenie"],
        rows: [
          ["verbessern", "die Verbesserung", "poprawa, ulepszenie"],
          ["gelassen", "die Gelassenheit", "spokój, opanowanie"],
          ["nachhaltig", "die Nachhaltigkeit", "zrównoważony rozwój, trwałość"],
          ["reißen", "zerreißen", "podrzeć, rozedrzeć na kawałki"],
          ["verstehen", "missverstehen", "źle zrozumieć"],
          ["digitalisieren", "die Digitalisierung", "cyfryzacja"]
        ]
      },
      examples: [
        { tr: "Poprawa warunków pracy powinna była nastąpić już dawno.", note: "verbessern + -ung: rzeczownik żeński od czasownika" },
        { tr: "Podziwiam jej spokój w trudnych sytuacjach.", note: "gelassen + -heit" },
        { tr: "Specjaliści podają w wątpliwość trwałość efektów projektu.", note: "nachhaltig + -keit: -keit po -ig" },
        { tr: "Pomyliłem się, wpisując datę.", note: "sich verschreiben: ver- oznacza pomyłkę" },
        { tr: "W trakcie kłótni podarła list na drobne kawałki.", note: "zer-: rozpad na kawałki; imiesłów zerrissen, bez ge-" },
        { tr: "Cyfryzacja administracji publicznej postępuje bardzo powoli.", note: "digitalisieren + -ung: częsty wzorzec czasowników na -ieren" }
      ]
    },
    vocab: [
      "derywacja, wyraz pochodny",
      "przyrostek",
      "przedrostek",
      "wyraz obcy, zapożyczenie",
      "spokój, opanowanie",
      "zrównoważony rozwój, trwałość",
      "niezawodność, rzetelność",
      "cyfryzacja",
      "podrzeć (na kawałki)",
      "pomylić się przy pisaniu",
      "źle zrozumieć",
      "dewaluować; skasować (bilet)"
    ],
    exercises: [
      {
        q: "Który rzeczownik jest poprawnie utworzony od „dankbar”?",
        opts: [
          "die Dankbarkeit",
          "die Dankbarheit",
          "die Dankbarung"
        ],
        why: "Po <i>-bar</i> przyrostkiem jest <b>-keit</b>: <i>Dankbarkeit</i>, jak <i>Verfügbarkeit</i>. <i>-ung</i> tworzy rzeczowniki od czasowników, nie od przymiotników."
      },
      {
        q: "Jaki rodzaj ma „Realismus”?",
        opts: [
          "der",
          "die",
          "das"
        ],
        why: "Rzeczowniki na <b>-ismus</b> są męskie: <i>der Realismus, der Optimismus</i>. Liczba mnoga, jeśli istnieje, kończy się na <i>-ismen</i>."
      },
      {
        q: "Na formularzu: „Entschuldigung, ich habe mich beim Datum verschrieben.” Co się stało?",
        opts: [
          "pomyliłem się, wpisując datę",
          "zapisałem się na ten termin",
          "przepisałem datę jak lek"
        ],
        why: "<b>sich verschreiben</b>: tu <i>ver-</i> oznacza pomyłkę, jak w <i>sich verrechnen</i> i <i>sich verlaufen</i>. Bez zaimka zwrotnego <i>verschreiben</i> znaczy „przepisać” (lek); <i>sich einer Sache verschreiben</i> znaczy „poświęcić się czemuś”."
      },
      {
        q: "Uzupełnij: „Seine ___ ist legendär: Er hat noch nie eine Frist versäumt.”",
        hint: "rzeczownik od zuverlässig",
        why: "<b>Zuverlässigkeit</b>: po <i>-ig</i> przyrostkiem jest <i>-keit</i>; rzeczownik jest żeński i pisze się go wielką literą."
      },
      {
        q: "Uzupełnij dwoma rzeczownikami pochodnymi: w pierwszej luce od „digitalisieren”, w drugiej od „wirksam”.",
        tr: "Cyfryzacja administracji ma przyspieszyć procedury, ale co do jej skuteczności specjaliści się nie zgadzają.",
        why: "<b>Digitalisierung</b>: od wielu czasowników na <i>-ieren</i> tworzy się rzeczownik na <i>-ierung</i>. <b>Wirksamkeit</b>: po <i>-sam</i> przyrostkiem jest <i>-keit</i>."
      },
      {
        q: "Połącz każdy czasownik z jego znaczeniem.",
        pairs: [
          "podrzeć na kawałki",
          "zgubić się, zabłądzić",
          "źle zrozumieć",
          "zdewaluować, pozbawić wartości"
        ]
      },
      {
        q: "Które z tych rzeczowników są żeńskie?",
        opts: [
          "Nation",
          "Qualität",
          "Dokument",
          "Optimismus"
        ],
        why: "<i>die Nation</i> i <i>die Qualität</i>: <b>-ion</b> i <b>-ität</b> dają rodzaj żeński. <i>das Dokument</i> jest nijakie, <i>der Optimismus</i> męski."
      },
      {
        q: "Przetłumacz: „Trwałość efektów projektu została podana w wątpliwość.” (die Nachhaltigkeit, in Zweifel ziehen)",
        why: "<i>Die Nachhaltigkeit des Projekts wurde in Zweifel gezogen</i> (albo <i>ist ... in Zweifel gezogen worden</i>). Przyjmowane są też czasownik prosty <i>bezweifeln</i> i dopełniacz <i>Projektes</i>."
      },
      {
        tr: "Cyfryzacja zmienia nie tylko świat pracy, ale i język. Wiele wyrazów obcych z angielskiego używa się dziś całkiem naturalnie.",
        why: "W <i>Digitalisierung</i> akcent pada na <b>sie</b>; w <i>Fremdwörter</i> akcent pada na <b>Fremd</b>; w <i>Englischen</i> akcent pada na <b>Eng</b>, a <b>ng</b> wymawia się [ŋ]."
      },
      {
        tr: "Jej spokój zrobił na mnie wrażenie.",
        why: "W <i>Gelassenheit</i> akcent pada na <b>las</b>; w <i>beeindruckt</i> obie samogłoski wymawia się osobno, be-<b>ein</b>-druckt, z akcentem na <b>ein</b>."
      }
    ]
  },
  "lesson:c2-u02-test": {
    theme: "Sprawdzian",
    title: "Test: Liczba mnoga i słowotwórstwo",
    objectives: [
      "sprawdzić podwójną i zastępczą liczbę mnogą, złożenia i derywację"
    ],
    theory: [
      {
        p: "Dziesięć pytań z całej jednostki. Zaliczasz przy 70%. Nie zaglądaj do lekcji w trakcie odpowiadania: jeśli czegoś nie pamiętasz, lepiej wrócić i powtórzyć."
      }
    ],
    exercises: [
      {
        q: "Uzupełnij: „In der Innenstadt gibt es zu wenige ___ für ältere Menschen.” (ławki)",
        hint: "liczba mnoga od die Bank w znaczeniu „ławka”",
        why: "<b>Bänke</b> (albo <b>Sitzbänke</b>): ławki mają umlaut; <i>Banken</i> to instytucje kredytowe."
      },
      {
        q: "Uzupełnij: „Die ___ zwischen Vermieter und Mieter landeten schließlich vor Gericht.” (spory)",
        hint: "zwykła liczba mnoga od der Streit",
        why: "<b>Streitigkeiten</b>: zwykłą liczbą mnogą od <i>Streit</i> jest <i>Streitigkeiten</i>; przyjmowane jest też <i>Streite</i>, poprawne, ale rzadkie."
      },
      {
        q: "Uzupełnij: „Das ___ hat die Schließung des Restaurants angeordnet.”",
        hint: "die Gesundheit + das Amt",
        why: "<b>Gesundheitsamt</b>: <i>-s-</i> po <i>-heit</i>; rodzaj nijaki jak <i>das Amt</i>."
      },
      {
        q: "Uzupełnij: „Mit großer ___ steuerte die Pilotin die Maschine durch den Sturm.”",
        hint: "rzeczownik od besonnen (rozważny, opanowany)",
        why: "<b>Besonnenheit</b>: <i>besonnen</i> + <i>-heit</i>, rodzaj żeński."
      },
      {
        q: "W którym zdaniu „Worte” użyto poprawnie?",
        opts: [
          "Ihre Worte haben mich tief berührt.",
          "Das Wörterbuch enthält 50 000 Worte.",
          "Er kennt schon viele Worte auf Englisch."
        ],
        why: "Słowa wypowiedzi, te, które poruszają albo przekonują, to <b>Worte</b>. Dla słów jako jednostek słownika, w słowniku albo w zasobie słownictwa języka, potrzebne jest <i>Wörter</i>."
      },
      {
        q: "Jaki rodzaj ma „Bahnhofsvorplatz” (plac przed dworcem)?",
        opts: [
          "der",
          "die",
          "das"
        ],
        why: "Decyduje ostatni człon: <b>der</b> Platz. <i>-s-</i> po <i>Bahnhof</i> to element łączący."
      },
      {
        q: "Krytyk ocenił powieść bardzo surowo. Którego zdania użyje gazeta?",
        opts: [
          "Der Kritiker hat den Roman verrissen.",
          "Der Kritiker hat den Roman zerbrochen.",
          "Der Kritiker hat den Roman entrissen."
        ],
        why: "<b>verreißen</b> znaczy „zmiażdżyć w recenzji”. <i>zerbrechen</i> to rozbić kruchy przedmiot; <i>entreißen</i> to wyrwać coś komuś z rąk, z celownikiem osoby."
      },
      {
        q: "Połącz każdą formę liczby mnogiej z jej znaczeniem.",
        pairs: [
          "wstążki, więzadła",
          "tomy (dzieła)",
          "banki",
          "ławki"
        ]
      },
      {
        tr: "W kilku słowach językoznawczyni wyjaśniła różnicę między Wörter a Worte. Studenci słuchali jej z wielką uwagą.",
        why: "W <i>Sprachwissenschaftlerin</i> akcent pada na <b>Sprach</b>; w <i>Wörtern</i> <b>ö</b> jest krótkie, [œ]; w <i>Aufmerksamkeit</i> akcent pada na <b>Auf</b>."
      },
      {
        tr: "Inspekcja sanitarna zarządziła zamknięcie.",
        why: "W <i>Gesundheitsamt</i> akcent pada na <b>sund</b>; w <i>Schließung</i> <b>ie</b> jest długie, a <b>ß</b> wymawia się [s]; w <i>angeordnet</i> akcent pada na <b>an</b>."
      }
    ]
  }
});
