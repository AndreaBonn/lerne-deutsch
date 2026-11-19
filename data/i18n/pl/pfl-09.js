/* ============================================================
   Teksty w języku ucznia (pl) dla data/core/pfl-09.js, jednostka pfl-u09.
   Klucze wskazują id z warstwy neutralnej; tablice łączą się po
   indeksie, więc ich długość musi się zgadzać z core.
   Sprawdzane przez scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("pl", {
  "unit:pfl-u09": {
    title: "Higiena, rany i wypis",
    grammarNote: "grzecznościowy tryb rozkazujący przy zasadach higieny · strona bierna w czasie teraźniejszym i w Präteritum · odmiana przymiotnika w opisie rany · Futur I, żeby wyjaśnić, co będzie po wypisie · czasowniki modalne przy zadaniach, pozwoleniach i obowiązkach"
  },
  "lesson:pfl-u09-l1": {
    theme: "Higiena i izolacja",
    title: "Higiena i izolacja",
    objectives: [
      "wyjaśnić pacjentowi i bliskim zasady higieny grzecznościowym trybem rozkazującym",
      "powiedzieć stroną bierną, co się robi: werden desinfiziert, wurde gefunden",
      "wyjaśnić izolację prostymi słowami, bez straszenia",
      "odróżniać Infektion i Ansteckung, Keim i Erreger"
    ],
    theory: [
      {
        h: "Jak wyjaśnić zasadę higieny",
        p: "Pacjentom i odwiedzającym zasady higieny wyjaśnia się <strong>grzecznościowym trybem rozkazującym</strong>, zawsze z <em>bitte</em>: <em>Desinfizieren Sie sich bitte die Hände. Ziehen Sie bitte einen Schutzkittel an.</em> Czasownik stoi na pierwszym miejscu, zaraz po nim <em>Sie</em>; przedrostek rozdzielny idzie na koniec (<em>ziehen ... an</em>). Kiedy liczy się to, co się robi, a nie kto to robi, używa się <strong>strony biernej</strong>: <em>Die Hände <b>werden</b> desinfiziert. Das Zimmer <b>wird</b> jeden Tag gereinigt.</em> O czymś, co już się stało, mówi się stroną bierną w Präteritum: <em>Bei Herrn Brandt <b>wurde</b> ein Keim gefunden.</em>"
      },
      {
        h: "Izolacja: co powiedzieć pacjentowi",
        p: "Pacjent w izolacji często się boi albo czuje się traktowany jak zagrożenie. Wyjaśnij powód prostymi słowami i postaw w centrum ochronę innych: <em>Wir wollen verhindern, dass sich andere Patienten anstecken.</em> Co ta bakteria znaczy dla jego zdrowia, wyjaśnia lekarz: <em>Die Ärztin bespricht mit Ihnen, was das für Sie bedeutet.</em> Konkretne środki (fartuch, rękawiczki, odwiedziny, wychodzenie z sali) ustala plan higieny placówki; przykłady z tej lekcji służą tylko nauce języka."
      },
      {
        contrast: "Po polsku personel mówi «zakażenie», a pacjent częściej «infekcja»; przejście choroby z człowieka na człowieka to «zarażenie», «zarazić się», «zaraźliwy». Niemiecki dzieli to podobnie, ale inaczej rozkłada słowa: <em>die Infektion</em> rozumie także pacjent, a codziennym słowem na zarażenie jest <em>die Ansteckung</em>, z czasownikiem <em>sich anstecken</em> («zarazić się») i przymiotnikiem <em>ansteckend</em> («zaraźliwy»): <em>Ist das ansteckend?</em> to pytanie, które usłyszysz najczęściej. Uwaga na pułapkę: polskie «zakazić» i «zarazić» brzmią podobnie, a niemieckie odpowiedniki nie mają ze sobą nic wspólnego w brzmieniu, więc trzeba je zapamiętać osobno. Skróty: <em>MRSA</em> jest ten sam, a czyta się go po niemiecku litera po literze, <em>em-er-es-a</em>, prawie jak po polsku. W wielu placówkach używa się jednak szerszego skrótu <em>MRE</em>, <em>multiresistente Erreger</em>, czyli mniej więcej wasze «drobnoustroje wielooporne». Pacjent mówi często <em>Krankenhauskeim</em>, «bakteria szpitalna»: to nie jest termin precyzyjny, ale to jego słowo i trzeba je rozumieć."
      },
      {
        trap: "<em>desinfizieren</em> kończy się na <em>-ieren</em>, więc jego imiesłów nie ma <em>ge-</em>: <em>Die Hände werden desinfiziert</em>, nigdy <em>gedesinfiziert</em>. Przy częściach ciała niemiecki wymaga zaimka zwrotnego w celowniku, <em>Desinfizieren Sie <b>sich</b> die Hände</em>, tam gdzie po polsku zwykle wystarczy «proszę zdezynfekować ręce», bez «sobie». <em>der Schutzkittel</em> to fartuch ochronny, a nie płaszcz (<em>der Mantel</em>). I <em>der Keim</em> znaczy też «kiełek»: w kuchni to coś zupełnie innego niż na oddziale."
      },
      {
        tip: "Kiedy wyjaśniasz jakiś środek, pokazuj w trakcie mówienia: wskaż dozownik, weź fartuch do ręki. Pacjent łatwiej zapamięta słowo, jeśli połączy je z przedmiotem, a ty nie musisz szukać synonimu, kiedy cię nie rozumie."
      }
    ],
    grammar: {
      title: "Grzecznościowy tryb rozkazujący i strona bierna",
      note: "Tryb rozkazujący: <b>czasownik + Sie</b> (+ bitte), przedrostek rozdzielny na końcu. Strona bierna, czas teraźniejszy: <b>wird / werden</b> + imiesłów; strona bierna w Präteritum: <b>wurde / wurden</b> + imiesłów.",
      table: {
        head: ["forma", "budowa", "przykład"],
        rows: [
          ["grzecznościowy tryb rozkazujący", "czasownik + Sie + bitte", "Desinfizieren Sie sich bitte die Hände."],
          ["tryb rozkazujący, czasownik rozdzielny", "czasownik + Sie ... przedrostek", "Ziehen Sie bitte einen Schutzkittel an."],
          ["strona bierna, czas teraźniejszy", "wird / werden + imiesłów", "Die Hände werden desinfiziert."],
          ["strona bierna, Präteritum", "wurde / wurden + imiesłów", "Ein Erreger wurde gefunden."]
        ]
      },
      examples: [
        { tr: "Proszę zdezynfekować ręce.", note: "grzecznościowy tryb rozkazujący, przy częściach ciała zaimek zwrotny: sich die Hände" },
        { tr: "Przed wejściem proszę włożyć fartuch ochronny.", note: "anziehen jest rozdzielny: an idzie na koniec" },
        { tr: "Przed odwiedzinami proszę zgłosić się w dyżurce.", note: "sich melden: czasownik zwrotny, także w trybie rozkazującym" },
        { tr: "Ręce dezynfekuje się przed każdym kontaktem z pacjentem i po nim.", note: "strona bierna w liczbie mnogiej: werden + desinfiziert, bez ge-" },
        { tr: "U pana Brandta wykryto drobnoustrój wielooporny.", note: "strona bierna w Präteritum: wurde + gefunden; polskie «wykryto» to tu niemiecka strona bierna" },
        { tr: "Salę sprząta się codziennie.", note: "strona bierna, czas teraźniejszy: wird + gereinigt" }
      ]
    },
    vocab: [
      "higiena",
      "zakażenie, infekcja (także termin fachowy)",
      "zarażenie (słowo potoczne)",
      "dezynfekcja rąk",
      "dezynfekować",
      "izolacja",
      "izolować",
      "zarazek, bakteria",
      "patogen, drobnoustrój chorobotwórczy",
      "fartuch ochronny",
      "rękawiczka",
      "przenosić (zarazki)"
    ],
    dialogue: [
      "Dzień dobry, panie Brandt. Muszę panu coś wyjaśnić. Wykryto u pana bakterię, na którą wiele antybiotyków nie działa.",
      "Czy to groźne?",
      "Pani doktor wyjaśni panu, co to dla pana znaczy. My chcemy przede wszystkim, żeby nie zarazili się inni pacjenci.",
      "Dlatego jestem w pojedynczej sali?",
      "Właśnie. Przez jakiś czas będzie pan w izolacji. Kto do pana przychodzi, wkłada fartuch ochronny i rękawiczki.",
      "A moja żona? Chce mnie jutro odwiedzić.",
      "Proszę, żeby najpierw zgłosiła się w dyżurce: tam wszystko jej wyjaśnimy.",
      "A co ja mam robić?",
      "Proszę dezynfekować ręce i dać nam znać, zanim wyjdzie pan z sali."
    ],
    culture: {
      title: "Po niemiecku: plan higieny",
      text: "<p>W Niemczech każdy szpital i każda placówka opieki ma <i>Hygieneplan</i>, plan higieny, który ustala, co się robi, kiedy i czym. Krajowe zalecenia przygotowuje KRINKO, komisja do spraw higieny szpitalnej przy <i>Robert Koch-Institut</i>. W większych placówkach pracuje <i>Hygienefachkraft</i>, pielęgniarka albo pielęgniarz ze specjalnym przeszkoleniem z higieny, trochę jak wasza pielęgniarka epidemiologiczna: to do tej osoby idzie się z pytaniem, kiedy jakaś zasada nie jest jasna.</p><p>Kto przyjeżdża z innego kraju, często zastaje środki podobne do tych, które zna, ale nazwy i szczegóły zmieniają się z placówki na placówkę: plan higieny oddziału jest ważniejszy niż to, czego nauczyłaś się gdzie indziej.</p>"
    },
    exercises: [
      {
        q: "Grzecznie prosisz odwiedzającego, żeby zdezynfekował ręce. Które zdanie jest poprawne?",
        opts: [
          "Desinfizieren Sie sich bitte die Hände.",
          "Sie desinfizieren bitte sich die Hände.",
          "Desinfiziert Sie sich bitte die Hände."
        ],
        why: "W grzecznościowym trybie rozkazującym czasownik stoi na pierwszym miejscu i ma formę bezokolicznika: <b>Desinfizieren Sie</b>. <i>Desinfiziert</i> to forma dla <i>ihr</i> i nie łączy się z <i>Sie</i>; <i>Sie desinfizieren bitte</i> to zdanie oznajmujące z błędnym szykiem."
      },
      {
        tr: "Czas teraźniejszy desinfizieren we wszystkich osobach.",
        why: "<i>Desinfiziere, desinfizierst, desinfiziert, desinfizieren, desinfiziert, desinfizieren</i>: regularny czasownik na <i>-ieren</i>, akcent zawsze na <b>zie</b>."
      },
      {
        q: "Uzupełnij: «Die Hände ___ vor jedem Patientenkontakt desinfiziert.»",
        hint: "strona bierna, czas teraźniejszy, liczba mnoga",
        why: "<b>werden</b>: podmiot <i>die Hände</i> jest w liczbie mnogiej, więc <i>werden</i> + imiesłów <i>desinfiziert</i> na końcu."
      },
      {
        q: "Uzupełnij zdanie.",
        tr: "U pana Brandta wykryto drobnoustrój wielooporny.",
        why: "<i>Bei Herrn Brandt <b>wurde</b> ein multiresistenter Erreger <b>gefunden</b></i>: strona bierna w Präteritum, <i>wurde</i> na drugim miejscu, imiesłów na końcu. W wynikach badań czyta się też <i>nachgewiesen</i>, «stwierdzono»."
      },
      {
        q: "Które zdania możesz powiedzieć odwiedzającemu?",
        opts: [
          "Ziehen Sie bitte einen Schutzkittel an.",
          "Ziehen Sie bitte an einen Schutzkittel.",
          "Desinfizieren Sie sich bitte die Hände.",
          "Melden Sie sich bitte vorher im Stationszimmer.",
          "Desinfizierst du Sie bitte die Hände."
        ],
        why: "<i>anziehen</i> jest rozdzielny: przedrostek <i>an</i> idzie na koniec, a nie przed dopełnienie. <i>Desinfizierst du Sie</i> miesza «ty» i formę grzecznościową: do odwiedzającego mówi się <i>Desinfizieren Sie sich</i>."
      },
      {
        q: "Wybierz właściwy rodzajnik określony dla każdego rzeczownika.",
        items: ["higiena", "zakażenie", "izolacja", "zarazek", "patogen", "fartuch ochronny"]
      },
      {
        q: "Połącz każde słowo z jego znaczeniem.",
        pairs: ["dezynfekcja rąk", "fartuch ochronny", "rękawiczka", "zarazek"]
      },
      {
        q: "Ułóż słowa w kolejności.",
        tr: "Zarazki często przenoszone są przez ręce.",
        why: "<i>Keime werden oft über die Hände übertragen.</i> Strona bierna w czasie teraźniejszym: <i>werden</i> na drugim miejscu, imiesłów <i>übertragen</i> na końcu. <i>übertragen</i> się nie rozdziela i nie dostaje <i>ge-</i>."
      },
      {
        q: "Przetłumacz (do odwiedzającego): «Proszę zdezynfekować ręce.»",
        why: "<i>Desinfizieren Sie sich bitte die Hände</i>: czasownik na pierwszym miejscu, <i>Sie</i>, zaimek zwrotny <i>sich</i> i <i>bitte</i>. Dobrze jest też <i>Bitte desinfizieren Sie sich die Hände</i> albo <i>Desinfizieren Sie bitte Ihre Hände</i>."
      },
      {
        q: "Jak wyjaśnić izolację.",
        setting: "Pana Brandta przeniesiono do pojedynczej sali i zadaje ci pytania.",
        lines: [
          { tr: "Dlaczego leżę sam w sali?" },
          { tr: "Odpowiedz, że wykryto u niego bakterię i dlatego jest w izolacji.", answerTr: "Wykryto u pana bakterię, dlatego jest pan w izolacji." },
          { tr: "Moja córka chce mnie dziś odwiedzić." },
          { tr: "Odpowiedz, że najpierw musi zgłosić się w dyżurce.", answerTr: "Proszę, żeby najpierw zgłosiła się w dyżurce." },
          { tr: "Co ona musi włożyć w sali?" },
          { tr: "Odpowiedz: fartuch ochronny i rękawiczki.", answerTr: "Fartuch ochronny i rękawiczki." }
        ]
      },
      {
        tr: "Kto do pana przychodzi, wkłada fartuch ochronny i rękawiczki.",
        why: "W <i>zieht</i> <b>z</b> wymawia się [ts], jak polskie «c», a <b>h</b> jest nieme; w <i>Schutzkittel</i> akcent pada na <b>Schutz</b>, a <b>tz</b> to [ts]; w <i>Handschuhe</i> <b>d</b> w <i>Hand</i> wymawia się [t], a akcent pada na <b>Hand</b>."
      },
      {
        tr: "Proszę zdezynfekować ręce.",
        why: "W <i>Desinfizieren</i> akcent pada na <b>zie</b>; w <i>Sie</i> i <i>sich</i> początkowe <b>s</b> jest dźwięczne, [z], jak polskie «z»; w <i>Hände</i> <b>ä</b> wymawia się jak polskie «e»."
      }
    ]
  },
  "lesson:pfl-u09-l2": {
    theme: "Opis rany",
    title: "Rany i zmiana opatrunku",
    objectives: [
      "opisać ranę: kolor, kształt, brzegi i wydzielinę",
      "odmieniać przymiotnik przed rzeczownikiem: eine gerötete Wunde, der alte Verband",
      "odróżniać przymiotnik po sein, bez końcówki, od przymiotnika przed rzeczownikiem",
      "rozmawiać z pacjentem o ranie, nie stawiając diagnozy"
    ],
    theory: [
      {
        h: "Opisywać, nie oceniać",
        p: "W opisie rany liczy się to, co się widzi, czuje pod palcami i mierzy: gdzie jest (<em>am Unterschenkel</em>), jak wyglądają brzegi (<em>der Wundrand ist leicht gerötet</em>), czy jest wydzielina (<em>etwas Wundsekret</em>), jaka jest skóra dookoła (<em>warm, geschwollen</em>). Jeśli coś się zmienia, opisujesz to i informujesz: <em>Die Rötung ist größer geworden. Ich informiere die Ärztin.</em> Jak leczyć ranę, ustala lekarz i standard placówki; ta lekcja uczy tylko słów, którymi się ją opisuje."
      },
      {
        h: "Przymiotnik: z końcówką albo bez",
        p: "Po <em>sein</em> przymiotnik się nie odmienia: <em>Die Wunde <b>ist</b> gerötet. Der Verband <b>war</b> feucht.</em> Przed rzeczownikiem dostaje końcówkę. Po <em>der, die, das</em> w mianowniku liczby pojedynczej końcówka to <b>-e</b>: <em>der alt<b>e</b> Verband, die klein<b>e</b> Wunde</em>. Po <em>ein, eine</em> końcówka pokazuje rodzaj: <em>ein geschwollen<b>er</b> Knöchel, eine gerötet<b>e</b> Wunde, ein klein<b>es</b> Hämatom</em>. Imiesłowy używane jak przymiotniki (<em>gerötet, geschwollen</em>) podlegają tym samym regułom."
      },
      {
        contrast: "Polski przymiotnik odmienia się zawsze, także po «jest»: «rana jest zaczerwieniona», «brzegi są obrzęknięte». Niemiecki robi odwrotnie: po <em>sein</em> nie ma żadnej końcówki (<em>Die Wunde ist gerötet</em>), a odmienia się dopiero przymiotnik przed rzeczownikiem. Polskie przyzwyczajenie podsuwa więc <em>Die Wunde ist gerötete</em>, a to błąd. Ze słownictwem jest łatwiej, bo tu polski i niemiecki myślą tak samo: «zapalenie» to codzienne słowo, a niemieckie <em>die Entzündung</em> (<em>entzündet</em>, «w stanie zapalnym») też jest swojskie, nie łacińskie; łacińskie <em>Inflammation</em> spotyka się głównie w tekstach medycznych. Różnica jest w nazwach chorób: tam, gdzie polski mówi opisowo «zapalenie oskrzeli», «zapalenie stawów», niemiecki pacjent zna i używa słów na <em>-itis</em>: <em>Bronchitis, Arthritis</em>. Objawy niemiecki nazywa zwykłymi słowami: <em>Rötung, Schwellung, Überwärmung</em>, czyli zaczerwienienie, obrzęk, ocieplenie."
      },
      {
        trap: "<em>der Verband</em> to opatrunek, ale też «związek, stowarzyszenie»: <em>Berufsverband</em> to związek zawodowy, a nie opatrunek zawodowy. Uwaga na czasownik: opatrunek się zmienia przez <em>wechseln</em> (<em>Der Verband wird gewechselt</em>), a nie przez <em>ändern</em>, które znaczy «zmodyfikować, przerobić». Polskie «zmienić» obejmuje oba znaczenia, niemiecki je rozdziela. I <em>die Medikation</em> to leczenie lekami, nigdy opatrunek."
      },
      {
        tip: "Opisuj ranę zawsze w tej samej kolejności: lokalizacja, wielkość, dno, brzegi, wydzielina, skóra dookoła. Przy stałym schemacie niczego nie zapomnisz, a osoba, która następnego dnia przeczyta twój opis, może porównać go ze swoim."
      }
    ],
    grammar: {
      title: "Przymiotnik w opisie",
      note: "Po <b>sein</b>: bez końcówki (<i>Die Wunde ist gerötet</i>). Przed rzeczownikiem, w mianowniku: po <b>der/die/das</b> → <b>-e</b>; po <b>ein/eine</b> → <b>-er</b> (rodzaj męski), <b>-e</b> (żeński), <b>-es</b> (nijaki).",
      table: {
        head: ["pozycja", "rodzaj męski", "rodzaj żeński", "rodzaj nijaki"],
        rows: [
          ["po sein", "Der Verband ist feucht.", "Die Wunde ist gerötet.", "Das Bein ist geschwollen."],
          ["po der / die / das", "der feuchte Verband", "die gerötete Wunde", "das geschwollene Bein"],
          ["po ein / eine", "ein feuchter Verband", "eine gerötete Wunde", "ein geschwollenes Bein"]
        ]
      },
      examples: [
        { tr: "Rana jest zaczerwieniona i obrzęknięta.", note: "po ist: gerötet i geschwollen bez końcówki, choć po polsku przymiotnik się odmienia" },
        { tr: "Na podudziu jest mała, zaczerwieniona rana.", note: "eine + rodzaj żeński: kleine, gerötete" },
        { tr: "Brzeg rany jest lekko zaczerwieniony.", note: "po ist bez końcówki; leicht określa gerötet" },
        { tr: "Stary opatrunek był wilgotny.", note: "der + mianownik: alte; po war: feucht bez końcówki" },
        { tr: "Nowy opatrunek dobrze się trzyma.", note: "der + mianownik: neue" },
        { tr: "Rana nie wykazuje oznak stanu zapalnego.", note: "einer Entzündung: dopełniacz rodzaju żeńskiego" }
      ]
    },
    vocab: [
      "rana",
      "zapalenie, stan zapalny",
      "zapalenie (termin fachowy)",
      "zaczerwienienie",
      "obrzęk",
      "zaczerwieniony",
      "obrzęknięty, spuchnięty",
      "brzeg rany",
      "wydzielina z rany",
      "opatrunek, bandaż",
      "zmiana opatrunku",
      "dokumentacja rany"
    ],
    dialogue: [
      "Pomożesz mi przy zmianie opatrunku u pana Brandta?",
      "Jasne. Jak wyglądała rana wczoraj?",
      "Brzeg był lekko zaczerwieniony, ale suchy.",
      "A dzisiaj? Stary opatrunek jest dość wilgotny.",
      "Tak, jest trochę wydzieliny. Zaczerwienienie się powiększyło, a skóra jest ciepła w dotyku.",
      "To może być oznaka stanu zapalnego.",
      "Właśnie. Dokumentuję ranę zdjęciem i informuję panią doktor.",
      "Dobrze. To po obchodzie zobaczymy, co dalej."
    ],
    culture: {
      title: "Po niemiecku: dokumentacja rany",
      text: "<p>W wielu niemieckich szpitalach i służbach ranę dokumentuje się na osobnym formularzu, <i>Wunddokumentationsbogen</i>, często ze zdjęciem i papierową miarką obok rany. Rany przewlekłe prowadzi w wielu placówkach personel ze specjalnym przeszkoleniem, na przykład <i>Wundexperten</i> po kursach ICW (<i>Initiative Chronische Wunden</i>).</p><p>Zdjęcia ran to dane o zdrowiu: robi się je sprzętem placówki, a nie prywatnym telefonem. Dokładne zasady znajdziesz w wytycznych oddziału.</p>"
    },
    exercises: [
      {
        q: "Opisz ranę: brzeg jest lekko zaczerwieniony. Które zdanie jest poprawne?",
        opts: [
          "Der Wundrand ist leicht geröteter.",
          "Der Wundrand hat leicht gerötet.",
          "Der Wundrand ist leicht gerötet."
        ],
        why: "Po <i>sein</i> przymiotnik zostaje bez końcówki: <b>ist gerötet</b>. <i>hat gerötet</i> byłoby Perfektem w stronie czynnej («zaczerwienił coś») i nie opisuje stanu."
      },
      {
        q: "Uzupełnij: «Am Unterschenkel ist eine ___ Wunde.»",
        hint: "mała",
        why: "<b>kleine</b>: po <i>eine</i>, w mianowniku rodzaju żeńskiego, przymiotnik dostaje <b>-e</b>."
      },
      {
        q: "Uzupełnij zdanie.",
        tr: "Stary opatrunek był wilgotny, nowy dobrze się trzyma.",
        why: "<i>der <b>alte</b> Verband</i>, <i>der <b>neue</b> Verband</i>: po rodzajniku określonym, w mianowniku rodzaju męskiego, końcówka to <b>-e</b>."
      },
      {
        q: "Które opisy są poprawne?",
        opts: [
          "Die Wunde ist gerötet und geschwollen.",
          "Eine gerötete Wunde am Unterschenkel.",
          "Ein geschwollener Knöchel.",
          "Der Wundrand ist gerötete.",
          "Eine kleiner Wunde am Fuß."
        ],
        why: "Po <i>ist</i> przymiotnik nie ma końcówki: <i>ist gerötet</i>, a nie <i>gerötete</i>. Po <i>eine</i> rodzaj żeński wymaga <b>-e</b>: <i>eine kleine Wunde</i>."
      },
      {
        q: "Połącz każde słowo z jego znaczeniem.",
        pairs: ["zaczerwienienie", "obrzęk", "wydzielina z rany", "brzeg rany"]
      },
      {
        q: "Wybierz właściwy rodzajnik określony dla każdego rzeczownika.",
        items: ["rana", "zapalenie", "opatrunek", "zmiana opatrunku", "wydzielina z rany", "brzeg rany"]
      },
      {
        q: "Ułóż słowa w kolejności.",
        tr: "Rana nie wykazuje oznak stanu zapalnego.",
        why: "<i>Die Wunde zeigt keine Zeichen einer Entzündung.</i> <i>einer Entzündung</i> to dopełniacz rodzaju żeńskiego: «zapalenia»."
      },
      {
        q: "Przetłumacz (do raportu): «Rana jest sucha i czysta.»",
        why: "<i>Die Wunde ist trocken und sauber</i>: po <i>ist</i> przymiotniki nie mają końcówki, choć po polsku mówimy «sucha», «czysta». W raporcie pisze się też w skrócie: <i>Wunde trocken und sauber</i>."
      },
      {
        q: "Pacjent pyta o swoją ranę.",
        setting: "Podczas zmiany opatrunku pan Brandt się martwi i zadaje ci pytania.",
        lines: [
          { tr: "Czy moja rana jest w stanie zapalnym?" },
          { tr: "Odpowiedz, że jest trochę zaczerwieniona i że pani doktor obejrzy ją dzisiaj.", answerTr: "Rana jest trochę zaczerwieniona. Pani doktor obejrzy ją dzisiaj." },
          { tr: "Dlaczego opatrunek jest taki mokry?" },
          { tr: "Odpowiedz, że to wydzielina, czyli płyn, który wypływa z rany, i że to zapisujesz.", answerTr: "To wydzielina, czyli płyn, który wypływa z rany. Zapisuję to." },
          { tr: "Czy zmiana opatrunku boli?" },
          { tr: "Odpowiedz, że pracujesz bardzo ostrożnie i że ma ci od razu powiedzieć, jeśli zaboli.", answerTr: "Pracuję bardzo ostrożnie. Proszę mi od razu powiedzieć, jeśli zaboli." }
        ]
      },
      {
        tr: "Tak, jest trochę wydzieliny. Zaczerwienienie się powiększyło, a skóra jest ciepła w dotyku.",
        why: "W <i>Rötung</i> i <i>größer</i> <b>ö</b> jest długie (usta jak do «o», język jak do «e»); w <i>größer</i> <b>ß</b> to bezdźwięczne «s»; w <i>warm</i> <b>w</b> wymawia się [v], jak polskie «w»; w <i>Wundsekret</i> akcent pada na <b>Wund</b>."
      },
      {
        tr: "Brzeg rany jest lekko zaczerwieniony.",
        why: "W <i>Wundrand</i> oba <b>d</b> na końcu sylaby wymawia się [t]; w <i>leicht</i> <b>ch</b> po <b>i</b> to [ç], miękkie jak w polskim «hiena»; w <i>gerötet</i> akcent pada na <b>rö</b>, z długim <b>ö</b>."
      }
    ]
  },
  "lesson:pfl-u09-l3": {
    theme: "Przygotowanie wypisu",
    title: "Wypis",
    objectives: [
      "wyjaśnić pacjentowi w Futur I, co będzie po wypisie",
      "odróżniać Futur I (wird kontrollieren) od strony biernej (wird entlassen)",
      "nazywać sprzęt pomocniczy, opiekę domową i stopień potrzeby opieki",
      "odpowiadać, nie obiecując tego, o czym decyduje inna instytucja"
    ],
    theory: [
      {
        h: "Co powiedzieć pacjentowi",
        p: "Przy wypisie pacjent chce wiedzieć, kto mu pomoże, czego będzie potrzebował i do kogo się zwrócić. Żeby zapowiedzieć, kto co zrobi, używa się <strong>Futur I</strong>: <em>Ein Pflegedienst <b>wird</b> Sie morgens <b>unterstützen</b>. Ihr Hausarzt <b>wird</b> die Wunde <b>kontrollieren</b>.</em> Futur I brzmi bardziej wiążąco i jaśniej niż czas teraźniejszy, który też jest możliwy (<em>Ein Pflegedienst kommt morgens</em>). Tego, o czym decydują inni, na przykład kasa ubezpieczenia pielęgnacyjnego, się nie obiecuje: <em>Das entscheidet die Pflegekasse.</em>"
      },
      {
        h: "Futur I czy strona bierna?",
        p: "Obie formy używają <em>werden</em>, ale z inną formą czasownika. <strong>Futur I</strong> to <em>werden</em> + <b>bezokolicznik</b>: <em>Der Hausarzt wird die Wunde <b>kontrollieren</b></em> («skontroluje»). <strong>Strona bierna</strong> to <em>werden</em> + <b>imiesłów</b>: <em>Sie werden am Freitag <b>entlassen</b></em> («zostanie pani wypisana w piątek»). Przy <em>entlassen</em> łatwo je pomylić, bo bezokolicznik i imiesłów brzmią tak samo: zdanie <em>Sie werden am Freitag entlassen</em> to strona bierna w czasie teraźniejszym ze znaczeniem przyszłym, a nie Futur I."
      },
      {
        contrast: "W Polsce mówi się o «wypisie ze szpitala», a pacjent dostaje «kartę informacyjną leczenia szpitalnego». W Niemczech organizacja wypisu to <em>das Entlassmanagement</em>, i szpitale mają ją obowiązek prowadzić z mocy ustawy (§ 39 SGB V); to więcej niż polskie przygotowanie do wypisu, bo obejmuje zorganizowanie opieki i sprzętu na czas po szpitalu. Słowo <em>die Überleitung</em> oznacza przekazanie pacjenta tym, którzy przejmują opiekę: opiece domowej, domowi opieki, lekarzowi rodzinnemu; formularz, który mu towarzyszy, to <em>Überleitungsbogen</em>. Największa pułapka to <em>der Pflegegrad</em>. Kusi, żeby przetłumaczyć go jako «stopień niepełnosprawności», ale to <b>nie są odpowiedniki</b>. Polskie orzeczenie (lekki, umiarkowany, znaczny) wydaje zespół do spraw orzekania o niepełnosprawności i dotyczy ogólnie ograniczeń w funkcjonowaniu. <em>Pflegegrad</em>, od 1 do 5, mierzy samodzielność w codziennym życiu, przyznaje go <em>Pflegekasse</em> po ocenie, zwykle przez <em>Medizinischer Dienst</em>, i daje prawo do świadczeń osobnego ubezpieczenia pielęgnacyjnego, którego w Polsce w tej formie nie ma. Nie przeliczaj jednego na drugie."
      },
      {
        trap: "<em>entlassen</em> znaczy «wypisać» pacjenta, ale też «zwolnić» pracownika: <em>Er wurde entlassen</em> bez kontekstu może znaczyć jedno albo drugie. Polski ma na to dwa czasowniki, niemiecki jeden. Sam pacjent mówi często <em>Ich darf nach Hause</em> albo <em>Ich komme raus</em>. A <em>der Arztbrief</em> to nie byle jaki list: to sprawozdanie lekarza dołączane do wypisu, mniej więcej wasza karta informacyjna. Uwaga też na <em>der Hausarzt</em>: to lekarz rodzinny, a nie lekarz, który przychodzi do domu."
      },
      {
        tip: "Zanim porozmawiasz z pacjentem, zapisz trzy linijki: kto przyjdzie do domu, jaki sprzęt przyjedzie, kto i kiedy skontroluje. Potem wyjaśnij to w tej kolejności, w Futur I. Na koniec zapytaj: <em>Haben Sie noch Fragen?</em>, a jeśli jest ktoś z rodziny, włącz go do rozmowy."
      }
    ],
    grammar: {
      title: "Futur I i strona bierna z werden",
      note: "Futur I: odmienione <b>werden</b> + <b>bezokolicznik</b> na końcu. Strona bierna: odmienione <b>werden</b> + <b>imiesłów</b> na końcu. Przy <i>entlassen</i> bezokolicznik i imiesłów są identyczne: rozstrzyga sens.",
      table: {
        head: ["forma", "budowa", "przykład"],
        rows: [
          ["Futur I", "werden + bezokolicznik", "Ein Pflegedienst wird Sie morgens unterstützen."],
          ["Futur I, pytanie", "werden na pierwszym miejscu + bezokolicznik", "Werden Sie zu Hause allein zurechtkommen?"],
          ["strona bierna, czas teraźniejszy", "werden + imiesłów", "Sie werden am Freitag entlassen."],
          ["strona bierna, czas teraźniejszy", "werden + imiesłów", "Der Rollator wird geliefert."]
        ]
      },
      examples: [
        { tr: "Rano będzie pani pomagać opieka domowa.", note: "wird + bezokolicznik unterstützen na końcu: Futur I" },
        { tr: "Pani córka odbierze leki z apteki.", note: "Futur I: wird ... holen" },
        { tr: "Pani lekarz rodzinny skontroluje ranę w przyszłym tygodniu.", note: "Futur I: wird ... kontrollieren" },
        { tr: "Zamówimy balkonik na czas.", note: "Futur I w pierwszej osobie liczby mnogiej: werden ... bestellen" },
        { tr: "Czy poradzi sobie pani sama w domu?", note: "pytanie: werden na pierwszym miejscu, zurechtkommen na końcu" },
        { tr: "W piątek zostanie pani wypisana.", note: "strona bierna w czasie teraźniejszym ze znaczeniem przyszłym: werden + imiesłów entlassen" }
      ]
    },
    vocab: [
      "wypis (ze szpitala)",
      "wypisać (pacjenta)",
      "organizacja wypisu",
      "przekazanie opieki",
      "formularz przekazania opieki",
      "sprzęt pomocniczy",
      "służba opiekuńcza (opieka domowa)",
      "stopień potrzeby opieki (niemiecki, od 1 do 5)",
      "kasa ubezpieczenia pielęgnacyjnego",
      "sprawozdanie lekarza przy wypisie",
      "poradzić sobie",
      "organizować"
    ],
    dialogue: [
      "Pani Keller, pani doktor powiedziała, że w piątek zostanie pani wypisana.",
      "Nareszcie! Ale jak ja sobie poradzę w domu?",
      "Porozmawiamy o tym teraz. Jutro przyjdzie do pani koleżanka z działu organizacji wypisu.",
      "A kto mi pomoże przy myciu?",
      "Rano będzie pani pomagać opieka domowa. Porozmawiamy o tym też z pani córką.",
      "Czy potrzebuję balkonika?",
      "Tak. Zamówimy balkonik na czas, żeby w piątek już tu był.",
      "A potem muszę jeszcze iść do lekarza?",
      "Pani lekarz rodzinny skontroluje ranę w przyszłym tygodniu. Dostanie też sprawozdanie ze szpitala."
    ],
    culture: {
      title: "Po niemiecku: Pflegeversicherung",
      text: "<p>Od 1995 roku Niemcy mają obowiązkowe ubezpieczenie pielęgnacyjne, <i>Pflegeversicherung</i>, prowadzone przez <i>Pflegekassen</i> przy kasach chorych. To osobna gałąź ubezpieczeń, której w Polsce w tej formie nie ma. Kto potrzebuje opieki, składa wniosek; osoba z <i>Medizinischer Dienst</i> (albo z innej zleconej służby) ocenia samodzielność, zwykle w domu, a kasa przyznaje <i>Pflegegrad</i> od 1 do 5. Od stopnia zależą świadczenia: pieniądze dla opiekującej się rodziny, opieka domowa, dopłaty do domu opieki.</p><p>W szpitalu pielęgniarka nie decyduje o stopniu, ale często pierwsza zauważa, że w domu potrzebna będzie pomoc, i zgłasza to do <i>Entlassmanagement</i>.</p>"
    },
    exercises: [
      {
        q: "Zapowiadasz pacjentce, że w domu będzie jej pomagać opieka domowa. Które zdanie jest poprawne?",
        opts: [
          "Ein Pflegedienst wird Sie zu Hause unterstützt.",
          "Ein Pflegedienst wird Sie zu Hause unterstützen.",
          "Ein Pflegedienst werden Sie zu Hause unterstützen."
        ],
        why: "Futur I: <i>wird</i> + <b>bezokolicznik</b> na końcu, <b>unterstützen</b>. Z imiesłowem <i>unterstützt</i> zdanie stałoby się bezsensowną stroną bierną; <i>werden</i> nie zgadza się z podmiotem w liczbie pojedynczej <i>ein Pflegedienst</i>."
      },
      {
        tr: "Czas teraźniejszy werden we wszystkich osobach.",
        why: "<i>Werde, wirst, wird, werden, werdet, werden</i>: w drugiej i trzeciej osobie liczby pojedynczej <b>e</b> zmienia się w <b>i</b>, a <b>d</b> zostaje tylko w trzeciej, <i>wird</i>."
      },
      {
        q: "Uzupełnij: «Ihr Hausarzt ___ die Wunde nächste Woche kontrollieren.»",
        hint: "Futur I, trzecia osoba liczby pojedynczej",
        why: "<b>wird</b>: w Futur I odmienione <i>werden</i> stoi na drugim miejscu, a bezokolicznik <i>kontrollieren</i> na końcu."
      },
      {
        q: "Uzupełnij zdanie.",
        tr: "Zamówimy balkonik na czas.",
        why: "<i>Wir <b>werden</b> den Rollator rechtzeitig <b>bestellen</b></i>: Futur I w pierwszej osobie liczby mnogiej, bezokolicznik na końcu."
      },
      {
        q: "Które zdania są w Futur I?",
        opts: [
          "Der Pflegedienst wird morgens kommen.",
          "Sie werden am Freitag entlassen.",
          "Ihre Tochter wird die Medikamente holen.",
          "Der Arztbrief wurde geschrieben.",
          "Wir werden den Überleitungsbogen ausfüllen."
        ],
        why: "Futur I to <i>werden</i> + bezokolicznik: <i>wird kommen</i>, <i>wird holen</i>, <i>werden ausfüllen</i>. <i>werden entlassen</i> to tu strona bierna w czasie teraźniejszym (imiesłów), a <i>wurde geschrieben</i> to strona bierna w Präteritum."
      },
      {
        q: "Połącz każde słowo z jego znaczeniem.",
        pairs: ["organizacja wypisu", "sprzęt pomocniczy", "stopień potrzeby opieki", "opieka domowa"]
      },
      {
        q: "Wybierz właściwy rodzajnik określony dla każdego rzeczownika.",
        items: ["wypis", "organizacja wypisu", "przekazanie opieki", "sprzęt pomocniczy", "służba opiekuńcza", "stopień potrzeby opieki"]
      },
      {
        q: "Ułóż słowa w kolejności.",
        tr: "Rano będzie pani pomagać opieka domowa.",
        why: "<i>Ein Pflegedienst wird Sie morgens unterstützen.</i> <i>wird</i> na drugim miejscu, bezokolicznik <i>unterstützen</i> na końcu."
      },
      {
        q: "Przetłumacz: «Lekarz rodzinny skontroluje ranę w przyszłym tygodniu.»",
        why: "<i>Der Hausarzt wird die Wunde nächste Woche kontrollieren</i>: Futur I, bezokolicznik na końcu. <i>nächste Woche</i> (albo <i>in der nächsten Woche</i>) może też stać na pierwszym miejscu: <i>Nächste Woche wird der Hausarzt ...</i>"
      },
      {
        q: "Pytania o wypis.",
        setting: "Pani Keller wie, że niedługo wraca do domu, i zadaje ci pytania.",
        lines: [
          { tr: "Kiedy mogę wrócić do domu?" },
          { tr: "Odpowiedz, że prawdopodobnie zostanie wypisana w piątek.", answerTr: "Prawdopodobnie zostanie pani wypisana w piątek." },
          { tr: "Kto mi pomoże przy myciu w domu?" },
          { tr: "Odpowiedz, że rano będzie do niej przychodzić opieka domowa.", answerTr: "Rano będzie do pani przychodzić opieka domowa." },
          { tr: "Czy dostanę stopień potrzeby opieki?" },
          { tr: "Odpowiedz, że decyduje o tym kasa i że pomożecie jej przy wniosku.", answerTr: "Decyduje o tym kasa ubezpieczenia pielęgnacyjnego. Pomożemy pani przy wniosku." }
        ]
      },
      {
        tr: "Rano będzie pani pomagać opieka domowa. Porozmawiamy o tym też z pani córką.",
        why: "W <i>Pflegedienst</i> wymawia się i <b>p</b>, i <b>f</b>; w <i>ambulanter</i> akcent pada na <b>lan</b>; w <i>unterstützen</i> akcent pada na <b>stüt</b>, a <b>st</b> wymawia się [ʃt], jak polskie «szt»."
      },
      {
        tr: "Pani lekarz rodzinny skontroluje ranę w przyszłym tygodniu.",
        why: "W <i>Hausarzt</i> akcent pada na <b>Haus</b>, a na końcu słychać [tst], jak polskie «tst»; w <i>nächste</i> <b>ch</b> po <b>ä</b> to [ç], miękkie jak w polskim «hiena»; w <i>kontrollieren</i> akcent pada na <b>lie</b>."
      }
    ]
  },
  "lesson:pfl-u09-l4": {
    theme: "Zadania i odpowiedzialność",
    title: "Co mi wolno, co muszę?",
    objectives: [
      "zapytać, co ci wolno robić w okresie wdrożenia",
      "odróżniać dürfen, müssen, sollen i sollten",
      "rozumieć różnicę między du darfst nicht i du musst nicht",
      "uprzejmie odmówić prośby, która nie należy do twoich zadań"
    ],
    theory: [
      {
        h: "Pozwolenie, obowiązek, polecenie",
        p: "<em>dürfen</em> wyraża pozwolenie: <em>Was <b>darf</b> ich schon allein machen?</em> <em>müssen</em> obowiązek: <em>Wenn du unsicher bist, <b>musst</b> du nachfragen.</em> <em>sollen</em> przekazuje polecenie kogoś innego: <em>Die Ärztin sagt, du <b>sollst</b> den Blutzucker messen.</em> <em>sollten</em> to rada: <em>Das <b>sollten</b> wir mit der Stationsleitung klären.</em> Odmieniony czasownik modalny stoi na drugim miejscu, bezokolicznik na końcu; w zdaniu podrzędnym modalny idzie na sam koniec, po bezokoliczniku."
      },
      {
        h: "Delegowanie i odpowiedzialność: ostrożnie",
        p: "W Niemczech niektóre zadania lekarskie można delegować personelowi pielęgniarskiemu (<em>Delegation</em>); kto przyjmuje zadanie, odpowiada za jego wykonanie. Co można delegować, komu i na jakich warunkach, zależy od prawa, od placówki i od twojej sytuacji, na przykład w trakcie uznawania dyplomu. Zakres samodzielnych czynności nie musi się pokrywać z tym, co wolno ci było w Polsce. Ta lekcja uczy słów, którymi się pyta i odmawia, a nie przepisów: w konkretnych sprawach właściwą osobą jest <em>Stationsleitung</em>."
      },
      {
        contrast: "Tu polski bardzo pomaga, bo dzieli to tak samo jak niemiecki: «nie musisz» to <em>du musst nicht</em> («nie ma obowiązku»), a «nie wolno ci» to <em>du darfst nicht</em> (zakaz). Trudność leży gdzie indziej: w polskim «nie możesz». «Nie możesz tego robić sama» to po polsku zwykle zakaz, ale <em>Du kannst das nicht allein machen</em> znaczy po niemiecku «nie dasz rady, nie potrafisz». Zakaz to zawsze <em>nicht dürfen</em>: <em>Das <b>darfst</b> du nicht allein machen.</em> Tak samo pytanie «czy mogę?» rozpada się na dwa: <em>Darf ich?</em> to «czy wolno mi?», a <em>Kann ich?</em> pyta, czy to możliwe albo czy dasz radę."
      },
      {
        trap: "Polskie «odpowiedzialność» obejmuje dwa niemieckie słowa. <em>die Haftung</em> to odpowiedzialność prawna, obowiązek odpowiadania za szkodę (cywilna albo karna). Odpowiedzialność zawodowa i moralna to <em>die Verantwortung</em>: <em>Ich trage die Verantwortung für meine Patienten.</em> A <em>die Krankenschwester</em>, której pacjenci wciąż często używają, nie jest już tytułem zawodowym: tytuł to <em>Pflegefachfrau</em> albo <em>Pflegefachmann</em>."
      },
      {
        tip: "Jeśli ktoś z rodziny albo pacjent prosi cię o coś, co nie należy do ciebie, nie mów samego «nie»: powiedz, kto o tym decyduje i co teraz robisz. <em>Das darf ich nicht allein entscheiden. Ich spreche mit der Ärztin.</em> Wtedy prośba nie zostaje bez odpowiedzi."
      }
    ],
    grammar: {
      title: "Czasowniki modalne na oddziale",
      note: "Odmieniony modalny na <b>drugim miejscu</b>, bezokolicznik <b>na końcu</b>. Zakaz: <b>nicht dürfen</b>. Brak obowiązku: <b>nicht müssen</b>.",
      table: {
        head: ["modalny", "znaczenie", "przykład"],
        rows: [
          ["dürfen", "mieć pozwolenie", "Das darfst du erst nach der Einarbeitung."],
          ["nicht dürfen", "zakaz", "Das darfst du noch nicht allein machen."],
          ["müssen", "obowiązek", "Wenn du unsicher bist, musst du nachfragen."],
          ["nicht müssen", "brak obowiązku", "Das musst du nicht allein machen."],
          ["sollen", "polecenie kogoś innego", "Die Ärztin sagt, du sollst den Blutzucker messen."],
          ["sollten", "rada", "Das sollten wir mit der Stationsleitung klären."]
        ]
      },
      examples: [
        { tr: "Co jako nowa koleżanka wolno mi już robić samej?", note: "dürfen: pyta o pozwolenie, nie o umiejętność" },
        { tr: "To zadanie wolno ci przejąć dopiero po wdrożeniu.", note: "darfst na drugim miejscu, übernehmen na końcu; erst = dopiero" },
        { tr: "Niektóre zadania lekarskie mogą zostać delegowane pielęgniarkom.", note: "modalny + strona bierna: können + delegiert werden" },
        { tr: "Jeśli nie jesteś pewna, musisz dopytać.", note: "zdanie z wenn zajmuje pierwsze miejsce, więc zaraz po nim musst" },
        { tr: "Nie musisz robić tego sama.", note: "nicht müssen: brak obowiązku, nie zakaz" },
        { tr: "Powinniśmy to wyjaśnić z oddziałową.", note: "sollten: rada" }
      ]
    },
    vocab: [
      "wolno, móc (mieć pozwolenie)",
      "musieć (mieć obowiązek)",
      "mieć (coś zrobić na polecenie kogoś innego)",
      "delegowanie",
      "delegować",
      "odpowiedzialność",
      "odpowiedzialność prawna",
      "wdrożenie (nowego pracownika)",
      "wdrożony, przeszkolony na oddziale",
      "zadanie",
      "przejąć, wziąć na siebie",
      "odmówić"
    ],
    dialogue: [
      "Jestem tu od tygodnia. Co wolno mi już robić samemu?",
      "Podstawową pielęgnację i parametry życiowe robisz już sam. Zmianę opatrunku w tym tygodniu robimy jeszcze razem.",
      "A pobieranie krwi? U siebie w kraju robiłem to codziennie.",
      "Wierzę ci. Ale tutaj wolno ci to robić dopiero wtedy, kiedy skończysz wdrożenie i pani doktor ci to zleci.",
      "Czy muszę przejmować każde zadanie, które mi dają?",
      "Nie. Jeśli przy jakimś zadaniu nie czujesz się pewnie, musisz to powiedzieć. Wtedy ktoś ci pokaże, jak to się robi.",
      "A kto za to odpowiada, jeśli coś pójdzie nie tak?",
      "To pytanie do oddziałowej. Zasady nie wszędzie są takie same, dlatego powinniśmy to z nią wyjaśnić."
    ],
    culture: {
      title: "Po niemiecku: uznanie dyplomu",
      text: "<p>Kto studiował pielęgniarstwo za granicą, w Niemczech zwykle musi uznać dyplom (<i>Anerkennung</i>). Dyplom z kraju Unii Europejskiej, także z Polski, uznaje się często prościej, ale wniosek i tak trzeba złożyć. W zależności od kraju i przebiegu kształcenia może być potrzebny kurs adaptacyjny (<i>Anpassungslehrgang</i>) albo egzamin (<i>Kenntnisprüfung</i>). Do czasu uznania wiele osób pracuje na innym stanowisku, na przykład jako <i>Pflegefachkraft in Anerkennung</i>, i niektóre zadania nie są im jeszcze dozwolone.</p><p>Zasady różnią się między krajami związkowymi (<i>Länder</i>) i zmieniają się z czasem: aktualne informacje podaje właściwy urząd w twoim kraju związkowym i oficjalny portal <i>Anerkennung in Deutschland</i>.</p>"
    },
    exercises: [
      {
        q: "Chcesz powiedzieć koledze, że nie musi tego robić sam. Którego zdania użyjesz?",
        opts: [
          "Das darfst du nicht allein machen.",
          "Das musst du nicht allein machen.",
          "Das sollst du nicht allein machen."
        ],
        why: "<b>nicht müssen</b> znaczy «nie ma obowiązku», dokładnie jak polskie «nie musisz». <i>nicht dürfen</i> to zakaz, «nie wolno ci»; <i>nicht sollen</i> przekazuje polecenie kogoś innego, żeby tego nie robić."
      },
      {
        tr: "Czas teraźniejszy dürfen we wszystkich osobach.",
        why: "<i>Darf, darfst, darf, dürfen, dürft, dürfen</i>: w liczbie pojedynczej <b>ü</b> zmienia się w <b>a</b>, a pierwsza i trzecia osoba liczby pojedynczej nie mają końcówki."
      },
      {
        q: "Uzupełnij: «Wenn du unsicher bist, ___ du nachfragen.»",
        hint: "obowiązek: müssen",
        why: "<b>musst</b>: zdanie podrzędne z <i>wenn</i> zajmuje pierwsze miejsce, więc zaraz po nim stoi modalny, potem podmiot <i>du</i>, a bezokolicznik na końcu."
      },
      {
        q: "Uzupełnij zdanie.",
        tr: "Wolno ci to robić dopiero wtedy, kiedy wdrożenie będzie zakończone.",
        why: "<i>Das <b>darfst</b> du erst machen</i>: pozwolenie, więc <i>dürfen</i>. <i>wenn die Einarbeitung abgeschlossen <b>ist</b></i>: w zdaniu podrzędnym odmieniony czasownik idzie na koniec."
      },
      {
        q: "Które zdania są poprawne?",
        opts: [
          "Du musst nachfragen, wenn du unsicher bist.",
          "Du musst nachfragen, wenn du bist unsicher.",
          "Diese Aufgabe darfst du erst nach der Einarbeitung übernehmen.",
          "Die Ärztin kann bestimmte Aufgaben an die Pflege delegieren.",
          "Ich darf heute Zimmer zwölf übernommen."
        ],
        why: "Po <i>wenn</i> odmieniony czasownik idzie na koniec: <i>wenn du unsicher bist</i>. Z czasownikiem modalnym drugi czasownik stoi w bezokoliczniku, a nie w imiesłowie: <i>darf ... übernehmen</i>."
      },
      {
        q: "Połącz każde słowo z jego znaczeniem.",
        pairs: ["delegowanie", "odpowiedzialność prawna", "wdrożenie", "zadanie"]
      },
      {
        q: "Wybierz właściwy rodzajnik określony dla każdego rzeczownika.",
        items: ["zadanie", "odpowiedzialność prawna", "zmiana opatrunku", "poziom cukru we krwi", "kraj", "zgoda"]
      },
      {
        q: "Ułóż słowa w kolejności.",
        tr: "Jeśli nie jesteś pewien, musisz dopytać.",
        why: "<i>Wenn du unsicher bist, musst du nachfragen.</i> Zdanie podrzędne zajmuje pierwsze miejsce, więc od razu modalny <i>musst</i>, potem <i>du</i>, a bezokolicznik <i>nachfragen</i> na końcu."
      },
      {
        q: "Przetłumacz (do nowej koleżanki): «Nie wolno ci jeszcze robić tego samej.»",
        why: "<i>Das darfst du noch nicht allein machen</i>: to zakaz, więc <i>nicht dürfen</i>, a nie <i>nicht müssen</i> ani <i>nicht können</i>. Dobrze jest też <i>Du darfst das noch nicht allein machen</i>."
      },
      {
        q: "Prośba, która nie należy do ciebie.",
        setting: "Syn pacjenta prosi cię, żebyś dała jego ojcu tabletkę nasenną.",
        lines: [
          { tr: "Tata tak źle śpi. Niech mu pani da coś na sen!" },
          { tr: "Odpowiedz, że nie możesz o tym decydować sama i że porozmawiasz z panią doktor.", answerTr: "Nie wolno mi o tym decydować samej. Porozmawiam z panią doktor." },
          { tr: "Ale przecież pani jest pielęgniarką!" },
          { tr: "Odpowiedz, że tak, ale leki podaje się tylko na zlecenie lekarza.", answerTr: "Tak, ale leki podaje się tylko na zlecenie lekarza." },
          { tr: "A kiedy się czegoś dowiem?" },
          { tr: "Odpowiedz, że zaraz dzwonisz do pani doktor i potem dasz mu znać.", answerTr: "Zaraz dzwonię do pani doktor, a potem dam panu znać." }
        ]
      },
      {
        tr: "Nie. Jeśli przy jakimś zadaniu nie czujesz się pewnie, musisz to powiedzieć. Wtedy ktoś ci pokaże, jak to się robi.",
        why: "W <i>sicher</i> początkowe <b>s</b> jest dźwięczne, [z], a <b>ch</b> to [ç], miękkie jak w polskim «hiena»; w <i>fühlst</i> <b>ü</b> jest długie (usta jak do «u», język jak do «i»); w <i>musst</i> <b>u</b> jest krótkie."
      },
      {
        tr: "Jeśli nie jesteś pewien, musisz dopytać.",
        why: "W <i>unsicher</i> akcent pada na <b>un</b>; w <i>nachfragen</i> akcent pada na <b>nach</b>, a <b>ch</b> po <b>a</b> to [x], jak polskie «ch»."
      }
    ]
  },
  "lesson:pfl-u09-test": {
    theme: "Test końcowy",
    title: "Test końcowy: niemiecki w pielęgniarstwie",
    objectives: [
      "sprawdzić stronę bierną, odmianę przymiotnika i Futur I z tej jednostki",
      "powtórzyć słownictwo z całego kursu: przyjęcie, parametry, pielęgnacja, ból, leki, raport, wypis"
    ],
    theory: [
      {
        p: "Dwanaście pytań, ostatni sprawdzian kursu: oprócz tej jednostki wracają w nich słowa i sytuacje ze wszystkich dziewięciu jednostek. Zalicza się od 70%. Pacjenci i sytuacje są zmyślone i służą tylko za przykład: zasady higieny, leczenie ran i organizację wypisu ustalają placówka i lekarz."
      }
    ],
    exercises: [
      {
        q: "Wyjaśniasz pacjentowi, że ma nadciśnienie. Którego zdania użyjesz?",
        opts: ["Sie haben eine Hypertonie.", "Sie haben Bluthochdruck.", "Ihr RR ist erhöht."],
        why: "Z pacjentem używa się codziennego słowa: <b>Bluthochdruck</b>. <i>Hypertonie</i>, które znasz ze studiów, i skrót <i>RR</i> są dobre między kolegami i w dokumentacji, ale pacjent może ich nie rozumieć."
      },
      {
        q: "Uzupełnij: «Ich habe einen ___ Schmerz in der Brust.»",
        hint: "drückend, przymiotnik przed rzeczownikiem",
        why: "<b>drückenden</b>: po <i>einen</i>, w bierniku rodzaju męskiego, przymiotnik dostaje <b>-en</b>."
      },
      {
        tr: "Futur I czasownika kontrollieren we wszystkich osobach.",
        why: "<i>Werde, wirst, wird, werden, werdet, werden</i> + <b>kontrollieren</b>: odmienia się tylko <i>werden</i>, bezokolicznik się nie zmienia i idzie na koniec zdania."
      },
      {
        q: "Połącz każde słowo z jego znaczeniem.",
        pairs: ["zakażenie", "zapalenie", "odleżyna", "omdlenie"]
      },
      {
        q: "Które zdania są poprawne?",
        opts: [
          "Die Wunde ist leicht gerötet.",
          "Bei Frau Keller wurde ein erhöhter Blutzucker gemessen.",
          "Der Patient hat einen starken Schmerz.",
          "Die Ärztin wurde geinformiert.",
          "Er hat eine geschwollener Knöchel."
        ],
        why: "<i>informiert</i> nie dostaje <i>ge-</i>, bo czasownik kończy się na <i>-ieren</i>. <i>Knöchel</i> jest rodzaju męskiego: <i>einen geschwollenen Knöchel</i>."
      },
      {
        q: "Uzupełnij zdanie.",
        tr: "U pana Brandta wykryto bakterię wielooporną, dlatego jest w izolacji.",
        why: "<i>Bei Herrn Brandt <b>wurde</b> ein multiresistenter Keim gefunden</i>: strona bierna w Präteritum. <i>deshalb <b>wird</b> er isoliert</i>: strona bierna w czasie teraźniejszym, a po <i>deshalb</i> czasownik stoi od razu."
      },
      {
        q: "Ułóż słowa w kolejności.",
        tr: "Tabletki przyjmuje się przed śniadaniem.",
        why: "<i>Die Tabletten werden vor dem Frühstück eingenommen.</i> Strona bierna w czasie teraźniejszym: <i>werden</i> na drugim miejscu, imiesłów <i>eingenommen</i> na końcu."
      },
      {
        q: "Wybierz właściwy rodzajnik określony dla każdego rzeczownika.",
        items: ["wywiad", "ciśnienie tętnicze", "lek", "nagły wypadek", "stopień potrzeby opieki", "sprzęt pomocniczy"]
      },
      {
        q: "Przetłumacz (do raportu): «Rana jest zaczerwieniona i obrzęknięta.»",
        why: "<i>Die Wunde ist gerötet und geschwollen</i>: po <i>ist</i> przymiotniki nie mają końcówki. W skrócie: <i>Wunde gerötet und geschwollen</i>."
      },
      {
        q: "Rozmowa przy wypisie.",
        setting: "Pan Brandt jutro wraca do domu i zadaje ci ostatnie pytania.",
        lines: [
          { tr: "Jakie tabletki mam brać w domu?" },
          { tr: "Odpowiedz, że jest to zapisane w jego planie leczenia i że zaraz mu to wyjaśnisz.", answerTr: "To jest zapisane w pana planie leczenia. Zaraz panu to wyjaśnię." },
          { tr: "A kto obejrzy moją ranę?" },
          { tr: "Odpowiedz, że jego lekarz rodzinny skontroluje ją w przyszłym tygodniu.", answerTr: "Pana lekarz rodzinny skontroluje ją w przyszłym tygodniu." },
          { tr: "Po czym poznam, że coś jest nie tak?" },
          { tr: "Odpowiedz, że jeśli rana zrobi się czerwona, ciepła albo spuchnięta, ma zadzwonić do lekarza rodzinnego.", answerTr: "Jeśli rana zrobi się czerwona, ciepła albo spuchnięta, proszę zadzwonić do swojego lekarza rodzinnego." }
        ]
      },
      {
        tr: "Rana nie wykazuje oznak stanu zapalnego.",
        why: "W <i>zeigt</i> <b>z</b> wymawia się [ts], jak polskie «c», a końcowe <b>g</b> jak [k]; w <i>Zeichen</i> <b>ch</b> po <b>ei</b> to [ç]; w <i>Entzündung</i> akcent pada na <b>zün</b>."
      },
      {
        tr: "Ręce dezynfekuje się przed każdym kontaktem z pacjentem i po nim.",
        why: "W <i>vor</i> <b>v</b> wymawia się [f]; w <i>Patientenkontakt</i> <b>ti</b> wymawia się [tsi], jak polskie «cy»; w <i>desinfiziert</i> akcent pada na <b>ziert</b>."
      }
    ]
  }
});
