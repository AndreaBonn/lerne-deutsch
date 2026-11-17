/* ============================================================
   Learner-language text (pl) for data/core/c1-03.js, unit c1-u05.
   Keys point at ids in the neutral layer; arrays merge by index,
   so their length has to match core.
   Checked by scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("pl", {
  "unit:c1-u05": {
    title: "Po zakończeniu pracy",
    grammarNote: "Imiesłów I i II jako przydawka (rozbudowana przydawka z umiarem; pełny typ i Gerundivum należą do C2) · nominalizacja zamiast zdania podrzędnego (nach Abschluss, wegen, bei, trotz, zur, infolge) · przypadki, w których zdanie podrzędne musi zostać (brak odpowiedniego rzeczownika, kilka podmiotów, odcień modalny, czytelność)"
  },
  "lesson:c1-u05-l1": {
    theme: "Protokoły, raporty i teksty akademickie",
    title: "Partizip I i II jako przydawka",
    objectives: [
      "używać imiesłowu I (czynny, równoczesny) i imiesłowu II (bierny albo zakończony) przed rzeczownikiem",
      "dobierać właściwą końcówkę po rodzajniku",
      "budować krótką rozbudowaną przydawkę (im Protokoll festgehaltenen Beschlüsse)",
      "rozpoznawać, kiedy zbyt długą przydawkę trzeba rozpisać na zdanie względne"
    ],
    theory: [
      {
        h: "Imiesłów przed rzeczownikiem",
        p: "W tekstach oficjalnych zdanie względne można skrócić do imiesłowu stojącego przed rzeczownikiem, który przyjmuje końcówkę przymiotnika. <strong>Imiesłów I</strong> (bezokolicznik + <em>-d</em>) jest czynny i równoczesny: <em>die steigenden Kosten</em> = <em>die Kosten, die steigen</em>. <strong>Imiesłów II</strong> czasownika przechodniego jest bierny i zakończony: <em>die geprüften Unterlagen</em> = <em>die Unterlagen, die geprüft wurden</em>. Imiesłów II czasownika nieprzechodniego (z <em>sein</em>) jest natomiast czynny i zakończony: <em>die gestiegenen Kosten</em> = <em>die Kosten, die gestiegen sind</em>."
      },
      {
        h: "Rozbudowana przydawka, z umiarem",
        p: "Między rodzajnikiem a rzeczownikiem mogą stać też dopełnienia i okoliczniki, ale imiesłów zawsze stoi <strong>bezpośrednio przed rzeczownikiem</strong>: <em>die im letzten Quartal erzielten Umsätze</em>. W protokołach i raportach wystarczy jedno lub dwa takie dopowiedzenia; przy większej liczbie czytelnik gubi wątek i lepsze jest zdanie względne. Typ z <em>zu</em> (<em>die zu prüfenden Unterlagen</em>) i konstrukcje dłuższe należą do C2."
      },
      {
        contrast: "Po polsku imiesłów przymiotnikowy z dopełnieniem stoi zwykle <strong>za</strong> rzeczownikiem: <em>wyniki osiągnięte w drugim kwartale</em>, <em>dane zebrane przez urząd</em>. Po niemiecku wszystko, co w polskim zdaniu poszłoby za imiesłowem, przechodzi <strong>przed</strong> rzeczownik, między rodzajnik a imiesłów: <em>die vom Amt erhobenen Daten</em>. Sam imiesłów bez dopełnień stoi po polsku przed rzeczownikiem, tak jak po niemiecku (<em>rosnące koszty, sprawdzone dokumenty</em>). Imiesłów czynny na <em>-ący</em> jest w polskim tekście pisanym częsty (<em>rosnące, obowiązujące</em>), natomiast imiesłowu czynnego przeszłego (<em>koszty wzrosłe</em>) prawie się nie używa: po polsku powiemy raczej <em>koszty, które wzrosły</em>. Niemiecki Partizip II czasowników nieprzechodnich (<em>die gestiegenen Kosten</em>) jest za to zupełnie zwyczajny."
      },
      {
        trap: "<em>die prüfenden Unterlagen</em> nie znaczy „sprawdzone dokumenty”: to dokumenty, które coś <em>sprawdzają</em>. Do znaczenia biernego potrzebny jest imiesłów II, <em>die geprüften Unterlagen</em>. Nie myl też obu czasów: <em>die steigenden Kosten</em> nadal rosną, <em>die gestiegenen Kosten</em> już wzrosły. Pamiętaj o końcówce: polska końcówka przymiotnika zależy od rodzaju, liczby i przypadka, a niemiecka dodatkowo od rodzajnika, którego po polsku nie ma. Po <em>die</em> w liczbie mnogiej jest <em>-en</em>, więc <em>die geprüften Unterlagen</em>, nigdy <em>die geprüfte Unterlagen</em>."
      },
      {
        tip: "Żeby zrozumieć imiesłów albo go wybrać, rozpisz go na zdanie względne: jeśli czasownik w zdaniu względnym stoi w czasie teraźniejszym czynnym (<em>die steigen</em>), potrzebny jest imiesłów I; jeśli to strona bierna (<em>die geprüft wurden</em>) albo Perfekt z <em>sein</em> (<em>die gestiegen sind</em>), potrzebny jest imiesłów II."
      }
    ],
    grammar: {
      title: "Imiesłów I i II jako przydawka",
      note: "<b>Imiesłów I</b> = bezokolicznik + <i>-d</i>: czynny, równoczesny. <b>Imiesłów II</b>: bierny i zakończony (czasowniki przechodnie), czynny i zakończony (nieprzechodnie z <i>sein</i>). Zawsze przed rzeczownikiem, z końcówką przymiotnika; dopełnienia i okoliczniki stoją między rodzajnikiem a imiesłowem.",
      table: {
        head: ["imiesłów", "znaczenie", "odpowiadające zdanie względne", "przykład"],
        rows: [
          ["imiesłów I", "czynny, równoczesny", "die Kosten, die steigen", "die steigenden Kosten"],
          ["imiesłów II (przechodni)", "bierny, zakończony", "die Unterlagen, die geprüft wurden", "die geprüften Unterlagen"],
          ["imiesłów II (nieprzechodni)", "czynny, zakończony", "die Kosten, die gestiegen sind", "die gestiegenen Kosten"],
          ["rozbudowana przydawka", "dopełnienie przed imiesłowem", "die Umsätze, die im Quartal erzielt wurden", "die im Quartal erzielten Umsätze"]
        ]
      },
      examples: [
        { tr: "Rosnące koszty energii obciążają gospodarstwa domowe.", note: "imiesłów I: wzrost trwa" },
        { tr: "Koszty, które wzrosły, zostały omówione w sprawozdaniu.", note: "imiesłów II czasownika nieprzechodniego: czynny i zakończony" },
        { tr: "Sprawdzone dokumenty są dołączone do akt.", note: "imiesłów II przechodni: bierny, „zostały sprawdzone”" },
        { tr: "Członkowie uczestniczący w posiedzeniu przyjęli wniosek.", note: "imiesłów I z dopełnieniem: an der Sitzung teilnehmenden" },
        { tr: "Budżet przyjęty przez zarząd wchodzi w życie w styczniu.", note: "vom Vorstand verabschiedete: sprawca stoi przed imiesłowem" },
        { tr: "Przychody osiągnięte w ostatnim kwartale były wyższe od oczekiwań.", note: "krótka rozbudowana przydawka: im letzten Quartal erzielten" }
      ]
    },
    vocab: [
      "protokół",
      "negocjacje, rokowania",
      "uchwała, decyzja",
      "dokument, dokumentacja",
      "obrót, przychody",
      "plan budżetowy",
      "uchwalić, zatwierdzić (tekst albo budżet)",
      "osiągnąć (wynik)",
      "zapisać w protokole, ustalić na piśmie",
      "bieżący, trwający",
      "niniejszy",
      "zaległy, nieuregulowany"
    ],
    exercises: [
      {
        q: "W kwartalnym raporcie raz stoi „die steigenden Kosten”, a raz „die gestiegenen Kosten”. Jaka jest różnica znaczenia?",
        opts: [
          "steigenden: wzrost trwa; gestiegenen: wzrost już nastąpił",
          "steigenden: wzrost już nastąpił; gestiegenen: wzrost trwa",
          "żadna: to dowolne warianty o tym samym znaczeniu"
        ],
        why: "Imiesłów I (<i>steigend</i>) jest czynny i <b>równoczesny</b>: koszty rosną. Imiesłów II od <i>steigen</i> (<i>gestiegen</i>) jest <b>zakończony</b>: wzrost już był. Dlatego nie są wymienne."
      },
      {
        q: "Z protokołu: „Der vom Gemeinderat ___ Haushaltsplan tritt am 1. Januar in Kraft.” Która forma uzupełnia zdanie?",
        opts: [
          "verabschiedete",
          "verabschiedende",
          "verabschiedeten"
        ],
        why: "Budżet niczego nie uchwala, <b>jest uchwalany</b>: potrzebny jest imiesłów II (bierny), czyli <i>verabschiedete</i>. <i>verabschiedende</i> byłoby czynne, a <i>verabschiedeten</i> ma złą końcówkę: po <i>der</i> w mianowniku liczby pojedynczej rodzaju męskiego jest <b>-e</b>."
      },
      {
        q: "W sprawozdaniu finansowym: „Die ___ Umsätze lagen über den Erwartungen.” Która rozbudowana przydawka jest poprawna?",
        opts: [
          "im vierten Quartal erzielten",
          "im vierten Quartal erzielte",
          "erzielten im vierten Quartal"
        ],
        why: "Imiesłów stoi bezpośrednio przed rzeczownikiem, a po <i>die</i> w liczbie mnogiej przyjmuje <b>-en</b>: <i>die im vierten Quartal erzielten Umsätze</i>. <i>erzielte</i> ma złą końcówkę; w <i>erzielten im vierten Quartal</i> okolicznik stoi za imiesłowem, co po polsku jest możliwe, ale po niemiecku nie."
      },
      {
        q: "Uzupełnij imiesłowem II od prüfen z właściwą końcówką: „Die vom Ausschuss ___ Unterlagen werden archiviert.”",
        hint: "imiesłów II od prüfen, liczba mnoga po die",
        why: "<b>geprüften</b>: imiesłów II bierny („dokumenty, które zostały sprawdzone”), z <b>-en</b> po <i>die</i> w liczbie mnogiej."
      },
      {
        q: "Uzupełnij imiesłowem I od gelten z właściwą końcówką: „Wir bitten um Beachtung der ___ Vorschriften.”",
        hint: "imiesłów I od gelten, dopełniacz liczby mnogiej po der",
        why: "<b>geltenden</b>: imiesłów I (czynny, równoczesny: „przepisy obowiązujące”), <b>-en</b> w dopełniaczu liczby mnogiej po <i>der</i>."
      },
      {
        q: "Uzupełnij fragment raportu imiesłowem II i imiesłowem I.",
        tr: "Środki przyjęte w zeszłym roku nie obniżyły stale rosnących kosztów.",
        why: "<i>ergriffenen</i> (albo <i>getroffenen</i>): imiesłów II bierny, „środki, które zostały przyjęte”. <i>steigenden</i>: imiesłów I, bo wzrost nadal trwa. Oba przyjmują <b>-en</b> po <i>die</i> w liczbie mnogiej."
      },
      {
        q: "W których zdaniach imiesłów jest użyty poprawnie jako przydawka? (dwie odpowiedzi)",
        opts: [
          "Die an der Sitzung teilnehmenden Mitglieder stimmten dem Antrag zu.",
          "Die am Dienstag eingereichten Unterlagen sind vollständig.",
          "Die einreichenden Unterlagen sind vollständig.",
          "Die eingereichte Unterlagen sind vollständig."
        ],
        why: "Pierwsze dwa są poprawne: imiesłów I czynny (członkowie, <i>którzy uczestniczą</i>) i imiesłów II bierny (dokumenty, <i>które zostały złożone</i>). <i>einreichenden</i> przypisałoby dokumentom rolę czynną, a w <i>eingereichte</i> brakuje <b>-n</b> po <i>die</i> w liczbie mnogiej."
      },
      {
        q: "Ułóż wyrazy zdania z protokołu we właściwej kolejności.",
        tr: "Decyzje zapisane w protokole obowiązują wszystkie działy.",
        why: "<i>Die im Protokoll festgehaltenen Beschlüsse sind für alle Abteilungen verbindlich.</i> Przydawka <i>im Protokoll festgehaltenen</i> stoi zwarcie między <i>die</i> a <i>Beschlüsse</i>. Możliwe jest też <i>verbindlich für alle Abteilungen</i> oraz inwersja z <i>Für alle Abteilungen</i> na początku."
      },
      {
        q: "Przetłumacz, używając rozbudowanej przydawki: „Wyniki osiągnięte w drugim kwartale zostały omówione na posiedzeniu.” (das Quartal, das Ergebnis, erzielen, die Sitzung, besprechen)",
        why: "<i>Die im zweiten Quartal erzielten Ergebnisse wurden in der Sitzung besprochen.</i> Akceptowane są też Perfekt strony biernej (<i>sind ... besprochen worden</i>) i inwersja z <i>In der Sitzung</i> na początku. Okolicznik <i>im zweiten Quartal</i> stoi przed imiesłowem."
      },
      {
        tr: "Decyzje zapisane w protokole obowiązują od zaraz. Trwające negocjacje zakończą się jesienią, a koszty, które wzrosły, nadal obciążają budżet.",
        why: "W <i>Protokoll</i> akcent pada na <b>koll</b>; w <i>Verhandlungen</i> akcent pada na <b>hand</b>; w <i>abgeschlossen</i> akcent pada na <b>schlos</b>; w <i>Haushalt</i> akcent pada na <b>Haus</b>."
      },
      {
        tr: "Przychody osiągnięte w ostatnim kwartale były wyższe od oczekiwań.",
        why: "W <i>Quartal</i> akcent pada na <b>tal</b>; w <i>Umsätze</i> akcent pada na <b>Um</b>; w <i>Erwartungen</i> akcent pada na <b>war</b>."
      }
    ]
  },
  "lesson:c1-u05-l2": {
    theme: "Komunikaty, ogłoszenia i sprawozdania",
    title: "Nominalizacja zamiast zdania podrzędnego",
    objectives: [
      "przekształcać zdanie podrzędne w grupę rzeczownikową z odpowiednim przyimkiem",
      "wybierać między nach, wegen, bei, trotz, zu, infolge zależnie od relacji logicznej",
      "używać dopełniacza i końcówek po tych przyimkach",
      "rozpoznawać zdanie podrzędne ukryte w grupie rzeczownikowej"
    ],
    theory: [
      {
        h: "Od zdania podrzędnego do rzeczownika",
        p: "W tekstach oficjalnych zdanie podrzędne można skrócić: czasownik zamienia się w rzeczownik (<em>abschließen</em> → <em>der Abschluss</em>), spójnik w przyimek, a podmiot i dopełnienie czasownika przechodzą do dopełniacza. <em>Nachdem die Prüfung abgeschlossen ist, ...</em> → <em>Nach Abschluss der Prüfung ...</em>. Przyimek zależy od <strong>relacji logicznej</strong>: przyczyna (<em>weil</em> → <em>wegen, aufgrund, infolge</em> + dopełniacz), przyzwolenie (<em>obwohl</em> → <em>trotz, ungeachtet</em> + dopełniacz), warunek (<em>wenn</em> → <em>bei</em> + celownik), czas (<em>nachdem</em> → <em>nach</em> + celownik), cel (<em>um ... zu</em> → <em>zu</em> + celownik)."
      },
      {
        h: "Co się traci",
        p: "Grupa rzeczownikowa jest zwarta, ale uboższa: znikają czas, tryb i często wykonawca czynności. <em>Nach Abschluss der Prüfung</em> nie mówi, kto zakończył, ani czy chodzi o przeszłość, czy o przyszłość: trzeba to wywnioskować z kontekstu. Dlatego sprawdza się wtedy, gdy podmiot i czas są oczywiste, a gorzej, gdy nie są (zob. lekcja 3)."
      },
      {
        contrast: "Polski też chętnie nominalizuje w stylu urzędowym (<em>po zakończeniu kontroli</em>, <em>w razie potrzeby</em>, <em>w celu wyjaśnienia kwestii spornych</em>, <em>w wyniku wzrostu cen</em>), a zależny rzeczownik też idzie do dopełniacza, więc <em>Abschluss der Prüfung</em> to niemal kalka. Różnica jest w przyimkach: po niemiecku trzeba dobrać go do przypadka (<em>nach, bei, zu</em> + Dativ; <em>wegen, trotz, infolge</em> + Genitiv), a polskie przyimki rządzą innymi przypadkami (<em>po</em> + miejscownik, <em>mimo, z powodu</em> + dopełniacz), i jeden polski przyimek nie ma jednego niemieckiego odpowiednika (<em>w razie</em> = <em>bei</em>, <em>w celu</em> = <em>zu</em>). Po polsku nie ma też rodzajników, więc końcówkę przymiotnika w dopełniaczu trzeba w niemieckim dobrać do ich obecności: <em>offener Fragen</em> bez rodzajnika, <em>der gestiegenen Preise</em> z rodzajnikiem."
      },
      {
        trap: "Zły przyimek zmienia relację logiczną: <em>Nach mehrfacher Mahnung blieb die Zahlung aus</em> mówi, że płatności nie ma <em>po</em> ponagleniach (<em>po wielokrotnych ponagleniach</em>), a <em>Trotz mehrfacher Mahnung</em> mówi, że nie ma jej <em>mimo</em> ponagleń. Uważaj też na przypadki: <em>infolge</em> i <em>trotz</em> wymagają dopełniacza (<em>Infolge der gestiegenen Preise</em>), nie celownika."
      },
      {
        tip: "Przy grupie rzeczownikowej zapytaj, jaki spójnik się za nią kryje: przyczyna → <em>weil</em>, przyzwolenie → <em>obwohl</em>, warunek → <em>wenn</em>, czas → <em>nachdem, bevor</em>, cel → <em>um ... zu</em>. Potem napisz ją jako zdanie podrzędne i sprawdź, czy sens się nie zmienił."
      }
    ],
    grammar: {
      title: "Nominalizacja zamiast zdania podrzędnego",
      note: "Czasownik staje się rzeczownikiem, spójnik przyimkiem: <b>nach, bei, zu</b> + celownik; <b>wegen, aufgrund, infolge, trotz</b> + dopełniacz. Podmiot i dopełnienie czasownika przechodzą do dopełniacza.",
      table: {
        head: ["zdanie podrzędne", "grupa rzeczownikowa", "przykład"],
        rows: [
          ["weil ... (przyczyna)", "wegen, aufgrund, infolge + dopełniacz", "Wegen der Verzögerung ..."],
          ["obwohl ... (przyzwolenie)", "trotz, ungeachtet + dopełniacz", "Trotz mehrfacher Mahnung ..."],
          ["wenn ... (warunek)", "bei + celownik", "Bei Bedarf ..."],
          ["nachdem ... (czas)", "nach + celownik", "Nach Abschluss der Prüfung ..."],
          ["um ... zu (cel)", "zu + celownik", "Zur Klärung offener Fragen ..."]
        ]
      },
      examples: [
        { tr: "Po zakończeniu kontroli sprawozdanie zostanie opublikowane.", note: "nach + celownik = nachdem; der Prüfung to dopełniacz zależny od Abschluss" },
        { tr: "Z powodu opóźnienia dostawy termin trzeba było przesunąć.", note: "wegen + dopełniacz = weil" },
        { tr: "W razie potrzeby można zażądać dalszych dokumentów.", note: "bei + celownik = wenn man es braucht" },
        { tr: "Mimo wielokrotnych ponagleń płatność nie wpłynęła.", note: "trotz + dopełniacz; mehrfacher: dopełniacz rodzaju żeńskiego bez rodzajnika" },
        { tr: "W celu wyjaśnienia kwestii spornych zwołano posiedzenie.", note: "zu + celownik = um ... zu klären; offener Fragen: dopełniacz liczby mnogiej bez rodzajnika" },
        { tr: "W następstwie wzrostu cen energii popyt spadł.", note: "infolge + dopełniacz: przyczyna, która wywołuje skutek" }
      ]
    },
    vocab: [
      "zakończenie, koniec",
      "opóźnienie",
      "zapotrzebowanie, potrzeba",
      "ponaglenie, upomnienie",
      "wyjaśnienie",
      "popyt",
      "zażądać, zamówić (dokumenty)",
      "zwołać",
      "nie nadejść, nie wpłynąć",
      "opublikować",
      "w następstwie, wskutek",
      "z powodu, na podstawie"
    ],
    exercises: [
      {
        q: "W liście: „Obwohl mehrfach gemahnt wurde, blieb die Zahlung aus.” Która wersja nominalna ma to samo znaczenie?",
        opts: [
          "Trotz mehrfacher Mahnung blieb die Zahlung aus.",
          "Nach mehrfacher Mahnung blieb die Zahlung aus.",
          "Wegen mehrfacher Mahnung blieb die Zahlung aus."
        ],
        why: "<i>obwohl</i> jest przyzwalające: <b>trotz</b> + dopełniacz. <i>nach</i> oznaczałoby relację czasową („po ponagleniach”), a <i>wegen</i> uczyniłoby ponaglenia przyczyną braku płatności."
      },
      {
        q: "W komunikacie prasowym. Które zdanie jest poprawne?",
        opts: [
          "Infolge der gestiegenen Energiepreise sank die Nachfrage.",
          "Infolge den gestiegenen Energiepreisen sank die Nachfrage.",
          "Infolge die gestiegenen Energiepreise sank die Nachfrage."
        ],
        why: "<i>infolge</i> rządzi <b>dopełniaczem</b>: <i>der gestiegenen Energiepreise</i>, liczba mnoga z rodzajnikiem i końcówką <b>-en</b>. Celownik i biernik nie są dozwolone."
      },
      {
        q: "Które zdanie podrzędne odpowiada „Bei Bedarf können weitere Unterlagen angefordert werden”?",
        opts: [
          "Wenn weitere Unterlagen benötigt werden, können sie angefordert werden.",
          "Weil weitere Unterlagen benötigt wurden, können sie angefordert werden.",
          "Obwohl weitere Unterlagen benötigt werden, können sie angefordert werden."
        ],
        why: "<i>bei Bedarf</i> wyraża <b>warunek</b>: „jeśli trzeba”. Odpowiada mu <i>wenn</i> (albo <i>falls</i>). <i>weil</i> i <i>obwohl</i> dałyby przyczynę albo przyzwolenie."
      },
      {
        q: "Uzupełnij przyimkiem przyzwalającym: „___ mehrfacher Erinnerung ist die Zahlung nicht eingegangen.”",
        hint: "przyimek przyzwalający: „mimo”",
        why: "<b>Trotz</b> (albo bardziej oficjalne <b>Ungeachtet</b>) + dopełniacz: <i>mehrfacher Erinnerung</i>."
      },
      {
        q: "Uzupełnij końcówką przymiotnika: „Zur Klärung ___ Fragen wird eine Sitzung einberufen.”",
        hint: "przymiotnik „offen” w dopełniaczu liczby mnogiej, bez rodzajnika",
        why: "<b>offener</b>: po <i>zu</i> jest celownik (<i>zur Klärung</i>), ale <i>Fragen</i> zależy od <i>Klärung</i> i jest dopełniaczem liczby mnogiej bez rodzajnika, więc przymiotnik przyjmuje <b>-er</b>."
      },
      {
        q: "Uzupełnij komunikat dwoma przyimkami.",
        tr: "Z powodu opóźnienia dostawy termin trzeba było przesunąć. W razie potrzeby zostanie uzgodniony nowy termin.",
        why: "<i>Wegen</i> (albo <i>Aufgrund</i>, <i>Infolge</i>) + dopełniacz dla przyczyny. <i>Bei Bedarf</i> dla warunku; w tym kontekście pasuje też <i>Nach Bedarf</i>, „stosownie do potrzeb”."
      },
      {
        q: "Połącz każde wyrażenie z jego znaczeniem.",
        pairs: [
          "w następstwie, wskutek",
          "mimo",
          "w razie potrzeby",
          "wobec, w obliczu"
        ]
      },
      {
        q: "Ułóż wyrazy zaproszenia we właściwej kolejności.",
        tr: "W celu wyjaśnienia kwestii spornych zwołano posiedzenie.",
        why: "<i>Zur Klärung offener Fragen wird eine Sitzung einberufen.</i> Grupa rzeczownikowa z <i>zur</i> otwiera zdanie, a czasownik osobowy stoi na drugim miejscu. Poprawne jest też <i>Eine Sitzung wird zur Klärung offener Fragen einberufen</i>."
      },
      {
        q: "Przetłumacz w stylu nominalnym: „W razie potrzeby można zażądać dalszych dokumentów.” (der Bedarf, die Unterlagen, anfordern)",
        why: "<i>Bei Bedarf können weitere Unterlagen angefordert werden.</i> Akceptowane jest też położenie <i>bei Bedarf</i> za podmiotem oraz forma z <i>man</i>."
      },
      {
        tr: "Po zakończeniu kontroli sprawozdanie zostanie opublikowane. W razie potrzeby można zażądać dalszych dokumentów. W celu wyjaśnienia kwestii spornych kierownictwo projektu chętnie służy pomocą.",
        why: "W <i>Abschluss</i> akcent pada na <b>Ab</b>; w <i>veröffentlicht</i> akcent pada na <b>öf</b>; w <i>Klärung</i> akcent pada na <b>Klä</b>."
      },
      {
        tr: "Mimo wielokrotnych ponagleń płatność nie wpłynęła.",
        why: "W <i>mehrfacher</i> akcent pada na <b>mehr</b>; w <i>Erinnerung</i> akcent pada na <b>in</b>; w <i>eingegangen</i> akcent pada na <b>gan</b>."
      }
    ]
  },
  "lesson:c1-u05-l3": {
    theme: "Czytelność i precyzja",
    title: "Kiedy zdanie podrzędne zostaje",
    objectives: [
      "rozpoznawać przypadki, w których nominalizacja się nie opłaca",
      "zachowywać zdanie podrzędne przy kilku podmiotach albo kilku warunkach",
      "oddawać zdaniem podrzędnym odcienie modalne (sollte, falls ... sollten)",
      "wybierać między formą zwartą a zdaniem podrzędnym z myślą o czytelniku"
    ],
    theory: [
      {
        h: "Cztery przypadki, w których zdanie podrzędne zostaje",
        p: "Forma zwarta nie zawsze jest najlepsza. Zdanie podrzędne jest lepsze, gdy: (1) <strong>nie ma odpowiedniego rzeczownika</strong> albo brzmi on nienaturalnie; (2) są <strong>różne podmioty</strong> albo kilka orzeczeń, a grupa rzeczownikowa ukryłaby, kto co robi: <em>weil der Vorsitzende erkrankt war und die Referentin im Ausland festsaß</em>; (3) potrzebny jest <strong>odcień modalny</strong> albo prawdopodobieństwa (<em>sollte, könnte, offenbar, nur dann ..., wenn</em>), którego rzeczownik nie wyrazi; (4) cierpi na tym <strong>czytelność</strong>, na przykład przy kilku dopełniaczach i okolicznikach z rzędu."
      },
      {
        h: "Jak wybierać",
        p: "Przed nominalizacją zadaj cztery pytania. Kto działa i czy mówi to rzeczownik? Czy istnieje naturalny rzeczownik (<em>Abschluss, Klärung</em>)? Czy muszę zachować czas albo tryb? Czy czytelnik zrozumie to od pierwszego czytania? Jeśli na wszystkie odpowiedź brzmi „tak”, forma zwarta się sprawdzi (<em>Nach Abschluss der Prüfung ...</em>), w przeciwnym razie zdanie podrzędne jest jaśniejsze, a w tekstach dla odbiorcy niespecjalistycznego niemal zawsze."
      },
      {
        contrast: "Polski ma środki zwarte, których niemiecki nie ma: imiesłów przysłówkowy (<em>zakończywszy kontrolę</em>), <em>po zakończeniu prac</em>, <em>w razie gdyby kontrola miała potrwać dłużej</em>. Po niemiecku imiesłowu przysłówkowego brak, a bezokolicznik z <em>ohne zu</em> albo <em>um ... zu</em> wymaga tego samego podmiotu, podobnie jak polski imiesłów przysłówkowy: gdy podmioty są dwa, potrzebne jest zdanie podrzędne z <em>dass</em> albo <em>weil</em>. Odcień <em>gdyby ... miała</em> oddaje się po niemiecku przez <em>Sollte die Prüfung länger dauern, ...</em> albo <em>falls ... ändern sollten</em>, a po polsku zwykle trybem przypuszczającym z <em>gdyby</em> i <em>miała</em>."
      },
      {
        trap: "Nie nominalizuj wszystkiego tylko dlatego, że „brzmi oficjalnie”: wychodzi niemiecki z biurokratycznego urzędu, trudny do czytania, a rzeczownik taki jak <em>seitens der Teilnehmenden</em> ukrywa podmiot. <em>sollte</em> na pierwszym miejscu nie oznacza też polskiego „powinien” w sensie powinności: <em>Sollte die Prüfung länger dauern</em> znaczy „gdyby kontrola miała potrwać dłużej”, czyli mało prawdopodobny warunek, a nie „kontrola powinna trwać dłużej”."
      },
      {
        tip: "Przeczytaj zdanie na głos. Jeśli w środku grupy rzeczownikowej musisz zaczerpnąć powietrza, bo stoją w niej dwa dopełniacze i <em>durch</em>, rozbij ją na zdanie podrzędne."
      }
    ],
    grammar: {
      title: "Forma zwarta czy zdanie podrzędne",
      note: "Forma zwarta: ten sam podmiot, naturalny rzeczownik, oczywisty czas. Zdanie podrzędne: kilka podmiotów, brak odpowiedniego rzeczownika, odcień modalny, dopełniacze w szeregu. Dla ewentualności: <i>Sollte ..., falls ... sollten</i>.",
      table: {
        head: ["sytuacja", "wybór", "przykład"],
        rows: [
          ["ten sam podmiot, naturalny rzeczownik", "forma zwarta", "Nach Abschluss der Prüfung ..."],
          ["dwa podmioty albo kilka orzeczeń", "zdanie podrzędne", "..., weil der Vorsitzende erkrankt war und die Referentin festsaß."],
          ["odcień modalny albo prawdopodobieństwa", "zdanie podrzędne z sollte", "Sollte die Prüfung länger dauern, ..."],
          ["kilka warunków naraz", "zdanie podrzędne", "..., wenn der Vorstand zugestimmt hat und die Finanzierung gesichert ist."],
          ["dopełniacze i okoliczniki w szeregu", "zdanie podrzędne", "..., nachdem die Teilnehmenden den Fragebogen ausgefüllt hatten."]
        ]
      },
      examples: [
        { tr: "Posiedzenie przełożono, ponieważ przewodniczący zachorował, a referentka utknęła za granicą.", note: "dwa podmioty: forma nominalna ukryłaby jeden z nich" },
        { tr: "Umowa zostanie podpisana dopiero wtedy, gdy zarząd wyrazi zgodę, a finansowanie będzie zapewnione.", note: "dwa warunki z różnymi czasownikami: zdanie podrzędne" },
        { tr: "Gdyby kontrola miała potrwać dłużej, termin zostanie przesunięty.", note: "Sollte na pierwszym miejscu: mało prawdopodobna ewentualność" },
        { tr: "Dofinansowanie wygasa, gdyby warunki ramowe miały się zmienić.", note: "falls ... ändern sollten: odcień modalny" },
        { tr: "Wyniki są wiarygodne tylko wtedy, gdy próba jest reprezentatywna.", note: "nur dann ..., wenn: warunek konieczny, którego nie da się oddać przez bei" },
        { tr: "Ocena rozpoczęła się po tym, jak uczestnicy wypełnili kwestionariusz.", note: "zdanie czasowe w czasie zaprzeszłym: czytelniejsze niż szereg dopełniaczy" }
      ]
    },
    vocab: [
      "zrozumiałość",
      "warunek wstępny, wymóg",
      "warunki ramowe",
      "próba (statystyczna)",
      "przewodniczący (posiedzenia)",
      "wnioskodawca",
      "przegapić (termin)",
      "wygasać, ustawać",
      "zgodzić się, wyrazić zgodę",
      "odrzucić",
      "miarodajny, wiarygodny",
      "reprezentatywny"
    ],
    exercises: [
      {
        q: "W protokole: „Die Sitzung wurde verschoben, weil der Vorsitzende erkrankt war und die Referentin im Ausland festsaß.” Dlaczego lepiej zachować tu zdanie podrzędne?",
        opts: [
          "Są dwa różne podmioty z własnymi orzeczeniami: w formie nominalnej jeden z aktorów by zniknął albo zdanie stałoby się ciężkie",
          "Bo przyczyny nigdy nie da się wyrazić grupą rzeczownikową",
          "Bo czasu przeszłego (war, festsaß) nie da się wyrazić rzeczownikiem"
        ],
        why: "Przyczynę można zrzeczownikować (<i>wegen</i> + dopełniacz), ale tu są <b>dwa</b> fakty z różnymi podmiotami: forma nominalna albo ściskałaby je w ciężki sposób, albo gubiła jeden z nich. Pozostałe dwa twierdzenia są fałszywe."
      },
      {
        q: "„Sollte die Prüfung länger dauern, wird der Termin verschoben.” Co się traci w wersji nominalnej „Bei längerer Dauer der Prüfung wird der Termin verschoben”?",
        opts: [
          "odcień mało prawdopodobnej ewentualności, który wyraża sollte",
          "warunkowy charakter zdania",
          "podmiot, bo Prüfung znika"
        ],
        why: "<i>bei</i> zachowuje <b>warunek</b>, a <i>Prüfung</i> nadal jest w tekście. Traci się odcień modalny <i>sollte</i> („gdyby miała”), którego rzeczownik nie przeniesie."
      },
      {
        q: "W raporcie dla odbiorcy niespecjalistycznego: które sformułowanie jest najczytelniejsze?",
        opts: [
          "Die Auswertung begann, nachdem die Teilnehmenden den Fragebogen ausgefüllt hatten, den die Projektleitung entwickelt hatte.",
          "Die Auswertung begann nach dem Ausfüllen des von der Projektleitung entwickelten Fragebogens durch die Teilnehmenden.",
          "Die Auswertung begann nach Ausfüllung des durch die Projektleitung entwickelten Fragebogens seitens der Teilnehmenden."
        ],
        why: "Wszystkie trzy zdania są poprawne gramatycznie, ale w dwóch ostatnich czytelnik musi zebrać dopełniacz, rozbudowaną przydawkę i dopełnienie sprawcy (<i>durch, seitens</i>), zanim dojdzie do sensu. Zdanie podrzędne mówi <b>kto co robi</b> w dwóch krokach."
      },
      {
        q: "Uzupełnij: „Die Ergebnisse sind nur dann aussagekräftig, ___ die Stichprobe repräsentativ ist.”",
        hint: "spójnik warunkowy",
        why: "<b>wenn</b>: <i>nur dann ..., wenn</i> wyraża warunek konieczny. Przy grupie rzeczownikowej (<i>bei repräsentativer Stichprobe</i>) siła <i>nur dann</i> ginie."
      },
      {
        q: "Uzupełnij czasownikiem modalnym: „Falls sich die Rahmenbedingungen ändern ___, entfällt die Förderung.”",
        hint: "Konjunktiv II czasownika modalnego: mało prawdopodobna ewentualność",
        why: "<b>sollten</b>: <i>falls ... sollten</i> sygnalizuje odległą ewentualność, odcień, którego formą nominalną nie da się oddać."
      },
      {
        q: "Uzupełnij dwa warunki umowy.",
        tr: "Umowa zostanie podpisana dopiero wtedy, gdy zarząd wyrazi zgodę, a finansowanie będzie zapewnione.",
        why: "<i>wenn</i> (albo <i>sobald</i>, <i>nachdem</i>) dla pierwszego warunku, <i>ist</i> dla drugiego: <i>die Finanzierung gesichert ist</i>. Dwa warunki z różnymi podmiotami to dobry powód, żeby zachować zdanie podrzędne."
      },
      {
        q: "W jakich przypadkach warto zachować zdanie podrzędne? (dwie odpowiedzi)",
        opts: [
          "gdy podmioty to dwie różne osoby, a rzeczownik ukryłby, kto działa",
          "gdy potrzebny jest odcień modalny, taki jak sollte, könnte, offenbar",
          "za każdym razem, gdy tekst jest protokołem urzędowym",
          "za każdym razem, gdy zdanie zawiera czasownik"
        ],
        why: "Dwa kryteria to wiele podmiotów i odcień modalny. Protokół urzędowy dopuszcza styl nominalny (wręcz chętnie go stosuje), a to, że zdanie zawiera czasownik, nic nie mówi o wyborze."
      },
      {
        q: "Ułóż wyrazy zdania we właściwej kolejności.",
        tr: "Ocena rozpoczęła się po tym, jak uczestnicy wypełnili kwestionariusz.",
        why: "<i>Die Auswertung begann, nachdem die Teilnehmenden den Fragebogen ausgefüllt hatten.</i> W zdaniu podrzędnym czasownik osobowy (<i>hatten</i>) stoi na końcu. Akceptowane jest też zdanie podrzędne na początku, z <i>begann</i> tuż po przecinku."
      },
      {
        q: "Przetłumacz, zachowując ewentualność: „Gdyby komisja odrzuciła wniosek, termin zostanie przedłużony.” (der Ausschuss, der Antrag, ablehnen, die Frist, verlängern)",
        why: "<i>Sollte der Ausschuss den Antrag ablehnen, wird die Frist verlängert.</i> Akceptowane są też <i>falls</i> i <i>wenn</i> (z <i>sollte</i> albo bez) oraz forma bez spójnika <i>Lehnt der Ausschuss den Antrag ab, ...</i>."
      },
      {
        tr: "Posiedzenie przełożono, ponieważ przewodniczący zachorował, a referentka utknęła za granicą. Gdyby kontrola miała potrwać dłużej, termin zostanie wyznaczony na nowo.",
        why: "W <i>Vorsitzende</i> akcent pada na <b>Vor</b>; w <i>Referentin</i> akcent pada na <b>ren</b>; w <i>Ausland</i> akcent pada na <b>Aus</b>; w <i>festgelegt</i> akcent pada na <b>fest</b>."
      },
      {
        tr: "Gdyby kontrola miała potrwać dłużej, termin zostanie przesunięty.",
        why: "W <i>Prüfung</i> akcent pada na <b>Prü</b>; w <i>dauern</i> akcent pada na <b>dau</b>; w <i>verschoben</i> akcent pada na <b>scho</b>."
      }
    ]
  },
  "lesson:c1-u05-test": {
    theme: "Sprawdzian",
    title: "Test: Po zakończeniu pracy",
    objectives: [
      "sprawdzić jednostkę i powtórzyć funkcje werden oraz Futur II przypuszczenia z tego poziomu"
    ],
    theory: [
      {
        p: "Dwanaście pytań o jednostkę i powtórkę z poziomu (werden i Futur II przypuszczenia). Aby zaliczyć, trzeba uzyskać 70%. Nie zaglądaj do lekcji w trakcie odpowiedzi: jeśli czegoś nie pamiętasz, lepiej wrócić i powtórzyć."
      }
    ],
    exercises: [
      {
        q: "Instalacja stoi od kilku godzin. Uzupełnij przypuszczenie o przeszłości: „Die Anlage wird wohl ausgefallen ___.”",
        hint: "Futur II: czasownik posiłkowy od ausfallen",
        why: "<b>sein</b>: <i>ausfallen</i> to czasownik zmiany stanu, a w Perfekcie wymaga <i>sein</i>; Futur II przypuszczenia to <i>wird ... ausgefallen sein</i>, „pewnie uległa awarii”."
      },
      {
        q: "Uzupełnij: „Die Verhandlungen sind erst im Mai abgeschlossen ___.”",
        hint: "imiesłów werden w stronie biernej",
        why: "<b>worden</b>: w Perfekcie strony biernej imiesłów <i>werden</i> traci <i>ge-</i>. <i>geworden</i> byłoby czasownikiem samodzielnym „stawać się”."
      },
      {
        q: "Uzupełnij imiesłowem I od stehen z właściwą końcówką: „Die uns zur Verfügung ___ Mittel reichen nicht aus.”",
        hint: "imiesłów I od stehen, liczba mnoga po die",
        why: "<b>stehenden</b>: <i>die uns zur Verfügung stehenden Mittel</i>, „środki, którymi dysponujemy”. Imiesłów I czynny i równoczesny, z <b>-en</b> po <i>die</i> w liczbie mnogiej."
      },
      {
        q: "Uzupełnij przyimkiem: „___ Rücksprache mit dem Vorstand kann der Vertrag nicht geändert werden.”",
        hint: "przyimek: „bez”",
        why: "<b>Ohne</b> + biernik: <i>ohne Rücksprache</i> to nominalna wersja <i>ohne dass man sich mit dem Vorstand bespricht</i>."
      },
      {
        q: "W wewnętrznym mailu: „Er wird jetzt im Meeting sein.” Co wyraża werden?",
        opts: [
          "przypuszczenie o teraźniejszości",
          "przyszłość",
          "stronę bierną"
        ],
        why: "<i>werden</i> + bezokolicznik z <i>jetzt</i> to <b>przypuszczenie</b> o teraźniejszości: „pewnie teraz jest na spotkaniu”. Bez <i>jetzt</i> albo <i>wohl</i> można by to odczytać także jako przyszłość."
      },
      {
        q: "Która grupa odpowiada „die Anträge, die gerade bearbeitet werden”?",
        opts: [
          "die gerade bearbeiteten Anträge",
          "die gerade bearbeitenden Anträge",
          "die gerade bearbeitete Anträge"
        ],
        why: "To strona bierna w toku: potrzebny jest imiesłów II, <i>bearbeiteten</i>, z <b>-en</b> po <i>die</i> w liczbie mnogiej. <i>bearbeitenden</i> przypisałoby wnioskom rolę czynną; <i>bearbeitete</i> ma złą końcówkę."
      },
      {
        q: "Które zdanie podrzędne odpowiada „Trotz Erkrankung des Referenten fand die Tagung statt”?",
        opts: [
          "Obwohl der Referent erkrankt war, fand die Tagung statt.",
          "Weil der Referent erkrankt war, fand die Tagung statt.",
          "Nachdem der Referent erkrankt war, fand die Tagung statt."
        ],
        why: "<i>trotz</i> jest przyzwalające: <i>obwohl</i>. <i>weil</i> i <i>nachdem</i> zmieniłyby relację logiczną."
      },
      {
        q: "W których zdaniach imiesłów jest użyty poprawnie jako przydawka? (dwie odpowiedzi)",
        opts: [
          "Die zur Verfügung gestellten Mittel sind begrenzt.",
          "Die auf der Sitzung getroffenen Entscheidungen gelten sofort.",
          "Die getroffene Entscheidungen gelten sofort.",
          "Die zur Verfügung stellenden Mittel sind begrenzt."
        ],
        why: "Pierwsze dwa są poprawne: imiesłów II bierny z <b>-en</b> po <i>die</i>. W <i>getroffene</i> brakuje <b>-n</b>; <i>stellenden</i> przypisałoby środkom rolę czynną („środki, które oddają do dyspozycji”)."
      },
      {
        q: "Uzupełnij komunikat imiesłowem II i przyimkiem.",
        tr: "Poinformujemy Państwa na czas. Środki zaplanowane przez nas zaczną działać dopiero po zakończeniu kontroli.",
        why: "<i>geplanten</i> (albo <i>vorgesehenen</i>): imiesłów II bierny z <b>-en</b>. <i>nach</i> albo <i>mit Abschluss der Prüfung</i>: czas z <i>nach</i> + celownik, albo „wraz z zakończeniem”."
      },
      {
        q: "Przetłumacz: „Decyzje podjęte na posiedzeniu zostaną przekazane po zakończeniu kontroli.” (die Sitzung, die Entscheidung, mitteilen, der Abschluss, die Prüfung)",
        why: "<i>Die in der Sitzung getroffenen Entscheidungen werden nach Abschluss der Prüfung mitgeteilt.</i> Strona bierna z <i>werden</i> oddaje przyszłość polskiego tekstu; akceptowane jest też zdanie zaczynające się od <i>Nach Abschluss der Prüfung</i>."
      },
      {
        tr: "Najpóźniej w piątek będzie miał gotowe sprawozdanie. Decyzje zapisane w protokole zostaną wdrożone po zakończeniu kontroli.",
        why: "W <i>fertiggestellt</i> akcent pada na <b>fer</b>; w <i>Beschlüsse</i> akcent pada na <b>schlüs</b>; w <i>umgesetzt</i> akcent pada na <b>um</b>."
      },
      {
        tr: "Koszty, które wzrosły, nadal będą obciążać budżet.",
        why: "W <i>gestiegenen</i> akcent pada na <b>stie</b>; w <i>belasten</i> akcent pada na <b>las</b>; w <i>Haushalt</i> akcent pada na <b>Haus</b>."
      }
    ]
  }
});
