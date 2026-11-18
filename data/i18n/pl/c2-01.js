/* ============================================================
   Learner-language text (pl) for data/core/c2-01.js, unit c2-u01.
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
        p: "W niemczyźnie pisanej imiesłów może zabrać ze sobą swoje określenia i stanąć między rodzajnikiem a rzeczownikiem: <em>die seit Jahren von Fachleuten geforderte Reform</em>. To ściśnięte zdanie względne: <em>die Reform, die seit Jahren von Fachleuten gefordert wird</em>. Rodzajnik otwiera nawias, rzeczownik go zamyka, a wszystko pomiędzy należy do przydawki: każde określenie zależy od własnego imiesłowu, który stoi tuż przed rzeczownikiem i dostaje końcówkę przymiotnika. <strong>Imiesłów II</strong> oznacza czynność, której coś podlega albo która już się zakończyła (<em>die vorgelegten Daten</em>, przedstawione dane); <strong>imiesłów I</strong> czynność aktywną i równoczesną (<em>die vorliegenden Gutachten</em>, opinie, którymi się dysponuje)."
      },
      {
        h: "Jak to czytać",
        p: "Jeśli po rodzajniku stoi przyimek albo drugi rodzajnik (<em>die von der ..., der dem ...</em>), spodziewaj się rozbudowanej przydawki: przeskocz do rzeczownika i znajdź odmienione imiesłowy tuż przed nim (może ich być kilka, współrzędnych), potem wróć i przeczytaj określenia każdego z nich. Szyk wewnątrz jest szykiem zdania podrzędnego: najpierw określenia, imiesłów na końcu, tak jak czasownik na końcu zdania względnego. Zaimek zwrotny zostaje w środku: <em>die sich verschärfende Wohnungsnot</em>. Dwie przydawki współrzędne bez spójnika rozdziela przecinek: <em>die in der Studie befragten, überwiegend jungen Erwachsenen</em>; przy <em>und</em> przecinek jest zbędny: <em>die angekündigte und vielfach kritisierte Reform</em>."
      },
      {
        contrast: "Polski też stawia imiesłów przymiotnikowy przed rzeczownikiem i też go odmienia (<em>rosnące koszty, przedstawione dane</em>), a w tekstach urzędowych i naukowych bywa przed rzeczownikiem nawet z określeniami: <em>od lat postulowana przez ekspertów reforma</em>. Częściej jednak dłuższa grupa idzie za rzeczownik: <em>reforma postulowana od lat przez ekspertów</em>, a po niemiecku tej możliwości nie ma: cała grupa stoi między rodzajnikiem a rzeczownikiem, a imiesłów zamyka ją na samym końcu. Druga różnica: polski imiesłów czynny (<em>-ący</em>) tworzy się tylko od czasowników niedokonanych, a czynnego imiesłowu przeszłego w funkcji przydawki prawie nie ma. Niemiecki imiesłów II czasowników z <em>sein</em> pełni właśnie tę funkcję: <em>die gestiegenen Kosten</em> to „koszty, które wzrosły”, <em>die über Jahrzehnte gewachsenen Strukturen</em> to „struktury, które narastały przez dziesięciolecia”."
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
      note: "<b>rodzajnik + określenia + odmieniony imiesłów + rzeczownik</b>. Imiesłów II: znaczenie bierne albo czynność zakończona (<i>die vorgelegten Daten</i>). Imiesłów I: znaczenie czynne, czynność równoczesna (<i>die vorliegenden Gutachten</i>). Imiesłów dostaje końcówkę przymiotnika; <i>worden</i> znika.",
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
        q: "Przetłumacz z rozbudowaną przydawką imiesłowową: „Badanie przedstawione w zeszłym tygodniu przez uniwersytet podważa rozpowszechnione dotąd założenia.” (vorlegen, die Annahme)",
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
          ["Die Kosten sind zu erwarten.", "die zu erwartenden Kosten", "można przewidzieć"]
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
        tr: "Wnioski, które urząd musi rozpatrzyć, leżą w nim od tygodni.",
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
        why: "W <i>Ministerin</i> akcent pada na <b>te</b>; w <i>Verantwortung</i> akcent pada na <b>ant</b>; w <i>Abrede</i> akcent pada na <b>Ab</b>, a <b>b</b> wymawia się [p]."
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
  }
});
