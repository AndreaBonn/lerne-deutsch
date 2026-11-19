/* ============================================================
   Teksty w języku ucznia (pl) dla data/core/pfl-04.js, jednostka pfl-u04.
   Klucze wskazują id w warstwie neutralnej; tablice łączą się
   po indeksie, więc ich długość musi zgadzać się z core.
   Sprawdzane przez scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("pl", {
  "unit:pfl-u04": {
    title: "Ból i nagły wypadek",
    grammarNote: "odmiana przymiotnika przy opisie bólu · zdania czasowe z als, wenn, bis, während, sobald · tryb rozkazujący, gdy wzywasz pomocy · Perfekt i Präteritum w relacji z upadku"
  },
  "lesson:pfl-u04-l1": {
    theme: "Ból",
    title: "Jak silny jest ból?",
    objectives: [
      "zapytać pacjenta o natężenie bólu w skali od 0 do 10",
      "opisać rodzaj bólu: kłujący, piekący, tępy, uciskający, ciągnący",
      "dodać właściwą końcówkę przymiotnikowi przed rzeczownikiem",
      "przekazać informację o bólu lekarzowi, nie obiecując pacjentowi leku"
    ],
    theory: [
      {
        h: "Ból mierzy się pytaniem",
        p: "Bólu nie zmierzysz żadnym przyrządem: podaje go pacjent. Dlatego na wielu oddziałach używa się skali liczbowej od 0 do 10: <em>Wie stark sind die Schmerzen von null bis zehn? Null heißt keine Schmerzen, zehn heißt die stärksten Schmerzen, die Sie sich vorstellen können.</em> Potem pyta się o rodzaj bólu (<em>Wie fühlt sich der Schmerz an?</em>), o to, czy promieniuje (<em>Strahlt der Schmerz aus?</em>), i od kiedy trwa (<em>Seit wann?</em>). Liczbę zapisuje się razem z godziną, żeby następna zmiana mogła ją porównać."
      },
      {
        h: "Przymiotnik przed rzeczownikiem zmienia końcówkę",
        p: "Przymiotnik stojący <strong>przed</strong> rzeczownikiem dostaje końcówkę zależną od rodzajnika, rodzaju i przypadku: <em>ein drückend<b>er</b> Schmerz</em> (mianownik, rodzajnik nieokreślony), <em>einen stechend<b>en</b> Schmerz</em> (biernik), <em>der dumpf<b>e</b> Schmerz</em> (po rodzajniku określonym). W liczbie mnogiej bez rodzajnika końcówka to <b>-e</b> w mianowniku i bierniku (<em>starke Schmerzen</em>) i <b>-en</b> w celowniku (<em>bei leichten Schmerzen</em>); po <em>die</em> albo <em>diese</em> to <b>-en</b>: <em>diese starken Schmerzen</em>. Gdy natomiast przymiotnik stoi <strong>po</strong> <em>sein</em>, nie dostaje żadnej końcówki: <em>Der Schmerz ist dumpf.</em>"
      },
      {
        contrast: "Termin <em>Analgetikum</em> znasz z polskich studiów i dokumentacji: analgetyk, analgezja. To rejestr lekarzy i zapisów (<em>Analgetikum nach ärztlicher Anordnung</em>). Z pacjentem mówi się po niemiecku i złożeniem, którego z łaciny nie odgadniesz: <em>das Schmerzmittel</em> (lek przeciwbólowy) i <em>die Schmerzlinderung</em> (złagodzenie bólu). Przymiotniki bólu też trzeba przestawić: polski «kłujący» to <em>stechend</em>, «piekący» to <em>brennend</em>, «tępy» to <em>dumpf</em>, «uciskający» albo «gniotący» to <em>drückend</em>, a «ciągnący» to <em>ziehend</em>. Odmiana przymiotnika nie jest dla ciebie nowością, ale niemiecka działa inaczej niż polska. Po polsku przymiotnik zgadza się z rzeczownikiem zawsze, także po czasowniku («ból jest silny», «bóle są silne»), a jego końcówka zależy tylko od rodzaju, liczby i przypadku. Po niemiecku po <em>sein</em> przymiotnik nie ma końcówki wcale (<em>Die Schmerzen sind stark</em>), a przed rzeczownikiem końcówka zależy jeszcze od tego, czy stoi rodzajnik i jaki: <em>ein drückender</em>, ale <em>der drückende</em>."
      },
      {
        trap: "Niemiecki pacjent mówi o bólu prawie zawsze w liczbie mnogiej: <em>Ich habe Schmerzen</em>, <em>Haben Sie Schmerzen?</em>, tam gdzie Polak powie «boli mnie» albo «mam bóle». Liczby pojedynczej <em>der Schmerz</em> używa się, gdy opisuje się konkretny ból: <em>Der Schmerz ist stechend.</em> Uwaga na <em>stark</em>: przed rzeczownikiem w liczbie mnogiej bez rodzajnika to <em>starke</em>, nie «starken» (<em>Haben Sie starke Schmerzen?</em>). A <em>drückend</em> nie znaczy «naglący» ani «pilny»: to ból, który uciska."
      },
      {
        tip: "Jeśli pacjent prosi o coś przeciwbólowego, nie obiecuj leku: <em>Ich sage es sofort der Ärztin, sie entscheidet über ein Schmerzmittel.</em> Jaki lek i kiedy, wynika ze zlecenia lekarskiego. Potem zapytaj jeszcze raz o liczbę na skali i znowu ją zapisz: tylko tak widać, czy ból się zmniejszył."
      }
    ],
    grammar: {
      title: "Przymiotnik opisujący ból",
      note: "Przed rzeczownikiem przymiotnik dostaje <b>końcówkę</b>; po <b>sein</b> nie dostaje żadnej. W liczbie mnogiej bez rodzajnika: <b>-e</b> (mianownik, biernik), <b>-en</b> (celownik); po <i>die</i>, <i>diese</i>: <b>-en</b>.",
      table: {
        head: ["przypadek", "przykład", "końcówka"],
        rows: [
          ["mianownik, ein", "Es ist ein drückender Schmerz.", "-er"],
          ["biernik, einen", "Ich habe einen stechenden Schmerz.", "-en"],
          ["liczba mnoga bez rodzajnika", "Haben Sie starke Schmerzen?", "-e"],
          ["liczba mnoga z diese", "Seit wann haben Sie diese starken Schmerzen?", "-en"],
          ["celownik l. mn. bez rodzajnika", "Auch bei leichten Schmerzen dürfen Sie klingeln.", "-en"],
          ["po sein", "Der Schmerz ist dumpf.", "brak"]
        ]
      },
      examples: [
        { tr: "Czy ma Pani silne bóle?", note: "liczba mnoga bez rodzajnika: starke" },
        { tr: "Mam kłujący ból w boku.", note: "biernik rodzaju męskiego po einen: stechenden" },
        { tr: "To ból uciskający.", note: "mianownik rodzaju męskiego po ein: drückender" },
        { tr: "Ból jest tępy.", note: "po sein przymiotnik nie ma końcówki" },
        { tr: "Od kiedy ma Pan te silne bóle?", note: "po diese w liczbie mnogiej: starken" },
        { tr: "Także przy lekkim bólu może Pani zadzwonić.", note: "bei wymaga celownika: leichten" }
      ]
    },
    vocab: [
      "skala bólu",
      "natężenie bólu",
      "kłujący",
      "piekący",
      "tępy (o bólu)",
      "uciskający, gniotący",
      "ciągnący",
      "promieniować (der Schmerz strahlt aus: ból promieniuje)",
      "lek przeciwbólowy (słowo dla pacjenta)",
      "analgetyk (termin fachowy)",
      "złagodzenie bólu (słowo dla pacjenta)",
      "analgezja (termin fachowy)"
    ],
    dialogue: [
      "Pani Keller, czy coś Panią boli?",
      "Tak, mam silne bóle w plecach.",
      "Jak silne są te bóle w skali od zera do dziesięciu? Zero to brak bólu, dziesięć to najsilniejszy ból, jaki może sobie Pani wyobrazić.",
      "Powiedziałabym, że siedem.",
      "Jaki to ból? Kłujący, piekący czy tępy?",
      "Raczej tępy. I promieniuje do prawej nogi.",
      "Dziękuję. Zaraz powiem pani doktor, to ona zdecyduje o leku przeciwbólowym.",
      "Dziękuję, siostro Marin."
    ],
    culture: {
      title: "Niemiecka perspektywa: o ból się pyta i się go zapisuje",
      text: "<p>Dla opieki nad osobami z bólem istnieje w Niemczech krajowy <i>Expertenstandard</i> pielęgniarski, wydany przez DNQP: opisuje, jak systematycznie oceniać ból, dokumentować go i oceniać ponownie. W praktyce wiele oddziałów pyta o ból za pomocą skali liczbowej od 0 do 10, <i>Numerische Rating-Skala</i> (NRS), i zapisuje wynik w karcie obserwacji razem z parametrami życiowymi.</p><p>U osób, które nie potrafią podać liczby, na przykład w zaawansowanej demencji, stosuje się skale obserwacji zachowania: twarz, oddech, niepokój. Którą skalę stosować, ustala placówka; zasada pozostaje ta sama: ból to to, co zgłasza pacjent, a nie to, co widać z zewnątrz.</p>"
    },
    exercises: [
      {
        q: "Pacjentka chce powiedzieć «Mam kłujący ból w boku». Które zdanie jest poprawne?",
        opts: [
          "Ich habe einen stechender Schmerz in der Seite.",
          "Ich habe einen stechenden Schmerz in der Seite.",
          "Ich habe ein stechenden Schmerz in der Seite."
        ],
        why: "<i>Der Schmerz</i> jest rodzaju męskiego i tu jest dopełnieniem, więc stoi w bierniku: <b>einen stechenden Schmerz</b>. Po <i>einen</i> przymiotnik dostaje <b>-en</b>."
      },
      {
        q: "Uzupełnij: «Haben Sie ___ Schmerzen?» (stark)",
        hint: "liczba mnoga bez rodzajnika",
        why: "<b>starke</b>: w liczbie mnogiej bez rodzajnika przymiotnik dostaje <b>-e</b>, tak jak brakujący rodzajnik <i>die</i>."
      },
      {
        q: "Wybierz właściwy rodzajnik określony dla każdego rzeczownika.",
        items: ["skala bólu", "lek przeciwbólowy", "analgetyk", "złagodzenie bólu", "analgezja", "plecy"]
      },
      {
        q: "Połącz każdy przymiotnik z rodzajem bólu.",
        pairs: ["kłujący", "piekący", "tępy", "ciągnący"]
      },
      {
        q: "Ułóż słowa we właściwej kolejności.",
        tr: "Czy ból promieniuje do ręki?",
        why: "<i>Strahlt der Schmerz in den Arm aus?</i> Pytanie rozstrzygające: odmieniony czasownik <i>strahlt</i> otwiera zdanie, a rozdzielny przedrostek <i>aus</i> idzie na koniec."
      },
      {
        q: "Uzupełnij zdanie.",
        tr: "Mam tępy ból w plecach i jest bardzo silny.",
        why: "<i>einen dumpfen Schmerz</i>: przed rzeczownikiem, biernik rodzaju męskiego, końcówka <b>-en</b>. <i>er ist sehr stark</i>: po <i>sein</i> przymiotnik zostaje bez końcówki."
      },
      {
        q: "Przetłumacz, zwracając się do pacjenta: «Czy ma Pan silne bóle?»",
        why: "<i>Haben Sie starke Schmerzen?</i> W mowie potocznej słychać też <i>große Schmerzen</i>. Pytając o ból, zwykle używa się liczby mnogiej, a przymiotnik przed liczbą mnogą bez rodzajnika dostaje <b>-e</b>."
      },
      {
        q: "Które zdania mają poprawną końcówkę?",
        opts: [
          "Haben Sie starke Schmerzen?",
          "Es ist ein drückender Schmerz.",
          "Ich habe einen dumpfe Schmerz.",
          "Seit wann haben Sie diese starken Schmerzen?",
          "Der Schmerz ist stechender."
        ],
        why: "Po <i>einen</i> potrzebne jest <i>dumpfen</i>. Po <i>ist</i> przymiotnik nie dostaje końcówki: <i>Der Schmerz ist stechend</i>."
      },
      {
        q: "Pacjent dzwoni dzwonkiem.",
        setting: "Wchodzisz do sali: pacjent mówi, że boli go brzuch.",
        lines: [
          { tr: "Boli mnie brzuch." },
          { tr: "Zapytaj, jak silny jest ból w skali od zera do dziesięciu.", answerTr: "Jak silne są bóle w skali od zera do dziesięciu?" },
          { tr: "Mniej więcej sześć." },
          { tr: "Zapytaj, czy to ból kłujący, czy tępy.", answerTr: "Czy to ból kłujący, czy tępy?" },
          { tr: "Raczej kłujący. Da mi Pani teraz coś przeciwbólowego?" },
          { tr: "Odpowiedz, że zaraz powiesz pani doktor i że to ona zdecyduje.", answerTr: "Zaraz powiem pani doktor. To ona zdecyduje o leku przeciwbólowym." }
        ]
      },
      {
        tr: "Mam silne bóle w plecach. Ból jest tępy i promieniuje do prawej nogi.",
        why: "W <i>Schmerzen</i> <b>sch</b> czyta się [ʃ], jak polskie «sz», a <b>z</b> jak «c» [ts]; w <i>Rücken</i> <b>ü</b> jest krótkie; w <i>strahlt</i> nagłosowe <b>st</b> to [ʃt], a <b>h</b> wydłuża <b>a</b>."
      },
      {
        tr: "Jak silne są bóle w skali od zera do dziesięciu?",
        why: "W <i>stark</i> nagłosowe <b>st</b> to [ʃt], jak «szt»; w <i>null</i> <b>u</b> jest krótkie; w <i>zehn</i> <b>z</b> to [ts], a <b>h</b> wydłuża <b>e</b>."
      }
    ]
  },
  "lesson:pfl-u04-l2": {
    theme: "Rozpoznać nagły wypadek",
    title: "Nagły wypadek",
    objectives: [
      "rozpoznać sygnały nagłego wypadku i powiedzieć, co się zaobserwowało",
      "rozumieć i stosować pary Fachsprache / Laiensprache nagłych stanów",
      "wybrać między als a wenn i postawić czasownik na końcu zdania czasowego",
      "zapytać i zapisać, kiedy dolegliwość się zaczęła"
    ],
    theory: [
      {
        h: "Co się obserwuje",
        p: "Najpierw się rozpoznaje i wzywa pomocy. Zdania z tej lekcji opisują to, co widać i słychać: pacjent <em>reagiert nicht</em>, <em>ist nicht ansprechbar</em> (nie odpowiada, gdy się do niego mówi), <em>ist plötzlich ganz blass</em>, <em>spricht so komisch</em>, jedna ręka opada, kącik ust opada. Najważniejsze słowo to <em>plötzlich</em>, nagle: nagłą zmianę zgłasza się od razu, nawet jeśli jeszcze nie wiesz, co to jest. Diagnoza należy do lekarza; twoje zadanie to zauważyć, wezwać i zostać."
      },
      {
        h: "Zdanie czasowe",
        p: "Spójniki czasowe otwierają zdanie podrzędne z odmienionym czasownikiem <strong>na końcu</strong>: <em>bis das Team kommt</em>, <em>während ich mit ihr sprach</em>, <em>sobald das Team da ist</em>. Jeśli zdanie podrzędne stoi na początku, zdanie główne zaczyna się od czasownika: <em>Als ich ins Zimmer kam, <b>war</b> sie nicht ansprechbar.</em> Polskie «kiedy» tłumaczą dwa spójniki: <strong>als</strong> dla <b>jednorazowego zdarzenia w przeszłości</b> (<em>Als ich ins Zimmer kam</em>), <strong>wenn</strong> dla teraźniejszości, przyszłości i tego, co się powtarza (<em>Wenn ein Patient nicht reagiert, rufe ich sofort Hilfe</em>). <em>Wann</em> to z kolei pytanie: <em>Wann hat das angefangen?</em>"
      },
      {
        contrast: "Po polsku pacjent i rodzina mówią «udar», czasem jeszcze «wylew». Niemiecki odpowiednik z życia codziennego to <em>der Schlaganfall</em>, i tylko tego słowa usłyszysz od rodziny. Fachowe <em>der Apoplex</em> zna się z łaciny i z dokumentacji, ale polska «apopleksja» brzmi dziś staroświecko, więc łatwo go nie skojarzyć w karcie. Podobnie z sercem: polski «zawał» to w Niemczech <em>der Herzinfarkt</em>, a w zapisach <em>der Myokardinfarkt</em>; «omdlenie» to <em>die Ohnmacht</em>, w dokumentacji <em>die Synkope</em>; «senny» to <em>schläfrig</em>, fachowo <em>somnolent</em>. Łacińską połowę znasz, niemiecką trzeba wykuć. I jeszcze «kiedy»: polski ma jedno słowo (albo «gdy») na wszystkie sytuacje, a niemiecki trzy (<em>als, wenn, wann</em>). Pomylenie <em>als</em> i <em>wenn</em> to najczęstszy błąd w relacji ze zdarzenia."
      },
      {
        trap: "<em>Ansprechbar</em> nie znaczy «mówiący»: pacjent <b>odpowiada</b>, gdy się do niego mówi. Pacjent może być <em>wach</em> (nie śpi, ma otwarte oczy) i jednocześnie nie <em>ansprechbar</em>. <em>Die Ohnmacht</em> to omdlenie, ale w języku ogólnym znaczy też bezsilność (<em>Ohnmacht und Wut</em>); na oddziale chodzi o pierwsze znaczenie. A <em>somnolent</em> to nie po prostu «zmęczony»: pacjent dużo śpi, ale budzi się, gdy się go zawoła, i to się zapisuje i zgłasza."
      },
      {
        tip: "Zawsze zapytaj i zapisz, kiedy to się zaczęło: <em>Wann hat das angefangen?</em> Jeśli to może być udar, godzina początku objawów to jedna z pierwszych rzeczy, o które zapyta lekarz. Jeśli pacjent nie wie, zapytaj tego, kto był obok: <em>Wann haben Sie ihn zuletzt normal gesehen?</em>"
      }
    ],
    grammar: {
      title: "als, wenn, bis, während, sobald",
      note: "W zdaniu czasowym odmieniony czasownik stoi <b>na końcu</b>. <b>als</b>: jednorazowe zdarzenie w przeszłości. <b>wenn</b>: teraźniejszość, przyszłość, powtarzalność. <b>wann</b>: pytanie.",
      table: {
        head: ["spójnik", "przykład", "użycie"],
        rows: [
          ["als", "Als ich ins Zimmer kam, war sie nicht ansprechbar.", "raz, w przeszłości"],
          ["wenn", "Wenn ein Patient nicht reagiert, rufe ich sofort Hilfe.", "za każdym razem, reguła"],
          ["bis", "Ich bleibe bei der Patientin, bis das Team kommt.", "dopóki nie, aż"],
          ["während", "Während ich mit ihr sprach, wurde sie blass.", "w tym samym czasie"],
          ["sobald", "Sobald das Team da ist, berichte ich kurz.", "zaraz po tym, jak"]
        ]
      },
      examples: [
        { tr: "Kiedy weszłam do sali, pani Keller nie odpowiadała.", note: "als: jednorazowe zdarzenie w przeszłości" },
        { tr: "Kiedy pacjent nie reaguje, od razu wzywam pomocy.", note: "wenn: reguła, która obowiązuje zawsze" },
        { tr: "Zostaję z pacjentką, aż przyjdzie zespół.", note: "bis: czasownik kommt na końcu" },
        { tr: "Kiedy z nią rozmawiałam, nagle zrobiła się bardzo blada.", note: "während: dwie rzeczy w tym samym czasie" },
        { tr: "Kiedy wstała, zrobiło jej się ciemno przed oczami.", note: "jemandem wird schwarz vor Augen: częste wyrażenie" },
        { tr: "Gdy tylko zespół będzie na miejscu, krótko zrelacjonuję, co się stało.", note: "sobald: zaraz potem" }
      ]
    },
    vocab: [
      "nagły wypadek, stan nagły",
      "omdlenie, synkopa (termin fachowy)",
      "omdlenie (słowo dla pacjenta)",
      "udar, apopleksja (termin fachowy)",
      "udar (słowo dla pacjenta)",
      "zawał mięśnia sercowego (termin fachowy)",
      "zawał serca (słowo dla pacjenta)",
      "nieprzytomny",
      "odpowiadający, gdy się do niego mówi (nicht ansprechbar: nie odpowiada)",
      "senny, somnolentny (termin fachowy)",
      "senny, śpiący (słowo dla pacjenta)",
      "blady"
    ],
    dialogue: [
      "Siostro Marin, proszę szybko przyjść! Mój ojciec dziwnie mówi.",
      "Już idę. Panie Brandt, słyszy mnie Pan?",
      "Kiedy podałam mu wodę, szklanka wypadła mu z ręki.",
      "Kiedy to się zaczęło?",
      "Jakieś dziesięć minut temu, kiedy jadł.",
      "Panie Brandt, proszę podnieść obie ręce.",
      "Prawa ręka zostaje na dole. I usta opadają na jedną stronę.",
      "To może być udar. Teraz naciskam przycisk alarmowy i zostaję z nim, aż przyjdzie zespół."
    ],
    culture: {
      title: "Niemiecka perspektywa: przy udarze liczy się czas",
      text: "<p>W Niemczech wiele szpitali ma <i>Stroke Unit</i>, oddział udarowy, a na szkoleniach dla personelu i dla ogółu często uczy się testu <i>FAST</i>: <i>Face</i> (czy twarz jest asymetryczna?), <i>Arms</i> (czy jedna ręka opada?), <i>Speech</i> (czy mowa jest niewyraźna?), <i>Time</i> (liczy się czas: od razu wzywać pomoc i zapisać godzinę). To pytania, które służą do rozpoznania, nie do leczenia.</p><p>W dialogu pielęgniarka prosi o podniesienie rąk, pyta, kiedy to się zaczęło, i wzywa zespół: rozpoznać, wezwać, zostać. O dalszym postępowaniu decyduje lekarz według procedury placówki.</p>"
    },
    exercises: [
      {
        q: "Połącz każdy termin fachowy ze słowem, którego używa pacjent.",
        pairs: ["die Ohnmacht", "der Schlaganfall", "der Herzinfarkt", "schläfrig"]
      },
      {
        q: "Uzupełnij: «___ ich ins Zimmer kam, war sie nicht ansprechbar.»",
        opts: ["Als", "Wenn", "Wann"],
        why: "<b>Als</b>: jednorazowe zdarzenie w przeszłości. <i>Wenn</i> stosuje się do tego, co się powtarza, albo do teraźniejszości i przyszłości; <i>wann</i> to pytanie."
      },
      {
        q: "Uzupełnij: «Ich bleibe bei ihm, ___ das Team kommt.»",
        hint: "«aż, dopóki nie»",
        why: "<b>bis</b>: «aż, dopóki nie». Czasownik zdania podrzędnego, <i>kommt</i>, idzie na koniec."
      },
      {
        tr: "Präteritum czasownika kommen we wszystkich osobach.",
        why: "<i>Kam, kamst, kam, kamen, kamt, kamen</i>: czasownik mocny, samogłoska zmienia się na <b>a</b>. W pierwszej i trzeciej osobie liczby pojedynczej nie ma końcówki: <i>ich kam, sie kam</i>. Tej formy zwykle używa się po <i>als</i> w relacji; w mowie słychać też Perfekt."
      },
      {
        q: "Uzupełnij zdanie.",
        tr: "Kiedy pacjent nie reaguje, od razu wzywam pomocy.",
        why: "Po <i>wenn</i> czasownik <i>reagiert</i> idzie na koniec zdania podrzędnego; zdanie główne zaczyna się od czasownika: <i>rufe ich</i>."
      },
      {
        q: "Ułóż słowa we właściwej kolejności.",
        tr: "Kiedy weszłam do sali, nie odpowiadała.",
        why: "<i>Als ich ins Zimmer kam, war sie nicht ansprechbar.</i> W zdaniu podrzędnym <i>kam</i> idzie na koniec; po przecinku zdanie główne zaczyna się od czasownika <i>war</i>."
      },
      {
        q: "Które obserwacje są sygnałami do natychmiastowego zgłoszenia?",
        opts: [
          "Der Patient reagiert nicht, wenn ich ihn anspreche.",
          "Die Patientin ist plötzlich ganz blass und schwitzt.",
          "Der Patient schläft nach dem Mittagessen ein bisschen.",
          "Ein Mundwinkel hängt plötzlich nach unten.",
          "Die Patientin liest im Bett die Zeitung."
        ],
        why: "Pacjenta, który nie odpowiada, i <b>nagłą</b> (<i>plötzlich</i>) zmianę koloru skóry albo twarzy zgłasza się od razu. Drzemki po obiedzie i czytania gazety nie."
      },
      {
        q: "Wybierz właściwy rodzajnik określony dla każdego rzeczownika.",
        items: ["nagły wypadek", "omdlenie", "udar", "synkopa", "świadomość", "zawał serca"]
      },
      {
        q: "Przetłumacz: «Zostaję z nim, aż przyjdzie zespół.»",
        why: "<i>Ich bleibe bei ihm, bis das Team kommt</i>: <i>bei</i> wymaga celownika, <i>ihm</i>; po <i>bis</i> czasownik idzie na koniec. Poprawne jest też <i>bis das Team da ist</i>."
      },
      {
        tr: "Kiedy weszłam do sali, pani Keller nie odpowiadała. Od razu wezwałam pomoc.",
        why: "W <i>ansprechbar</i> <b>sp</b> to [ʃp], a <b>ch</b> po <b>e</b> to [ç], jak polskie «ch» w «chichot»; w <i>Zimmer</i> <b>z</b> to [ts]; w <i>sofort</i> nagłosowe <b>s</b> przed samogłoską jest dźwięczne [z]."
      },
      {
        tr: "Kiedy to się zaczęło?",
        why: "W <i>Wann</i> <b>w</b> czyta się jak polskie «w» [v]; w <i>angefangen</i> przedrostek <b>an</b> i <b>ge</b> wymawia się łącznie, bez przerwy, z akcentem na <b>an</b>, a końcowe <b>-ngen</b> to [ŋən], bez twardego <b>g</b>."
      }
    ]
  },
  "lesson:pfl-u04-l3": {
    theme: "Wezwanie pomocy",
    title: "Wezwanie pomocy",
    objectives: [
      "wezwać pomoc na oddziale alarmem, a w domu pacjenta numerem 112",
      "odpowiadać na pytania dyspozytora: gdzie, co się stało",
      "wydawać krótkie polecenia w trybie rozkazującym: per Sie do pacjentów i rodziny, per du do kolegów",
      "rozumieć, czym jest Reanimation, a czym Intensivstation"
    ],
    theory: [
      {
        h: "Kogo się wzywa i jak",
        p: "W szpitalu pomocy wzywa się od środka: <em>Notrufknopf</em> w sali i w łazience, alarm oddziałowy, wewnętrzny numer alarmowy placówki. Poza szpitalem, w domu pacjenta albo w domu opieki bez lekarza na miejscu, dzwoni się pod <strong>112</strong>: w Niemczech to numer ratownictwa medycznego i straży pożarnej (<em>Rettungsdienst und Feuerwehr</em>), bezpłatny z każdego telefonu. <strong>110</strong> to policja. Telefon odbiera <em>Leitstelle</em>, centrum dyspozytorskie, które zadaje pytania w kolejności, jakiej potrzebuje: pozwól mu prowadzić rozmowę."
      },
      {
        h: "Tryb rozkazujący",
        p: "Przy <strong>Sie</strong> tryb rozkazujący to bezokolicznik, a po nim <em>Sie</em>: <em>Rufen Sie bitte die 112 an! Bleiben Sie bitte bei Ihrem Mann!</em> Przy <strong>du</strong>, którego wiele oddziałów używa między kolegami, to temat czasownika, często bez <b>-e</b>: <em>Hol bitte schnell Hilfe! Lös bitte den Alarm aus!</em> Czasowniki, które w czasie teraźniejszym zmieniają <b>e</b> na <b>i</b>, robią to także tutaj: <em>du gibst</em> → <em>Gib mir bitte das Telefon!</em> Rozdzielny przedrostek idzie na koniec: <em>Rufen Sie ... an</em>, <em>Lös ... aus</em>. <em>Bitte</em> łagodzi, ale w nagłym wypadku zdanie zostaje krótkie."
      },
      {
        contrast: "W Polsce działa 112, a obok niego wciąż 999 na pogotowie (oraz 998 straż, 997 policja). W Niemczech <strong>999</strong> nie istnieje: na karetkę i straż jest <strong>112</strong>, na policję <strong>110</strong>. Inaczej brzmią też polecenia w nagłym wypadku. Po polsku grzeczne polecenie to zwykle «Proszę zadzwonić pod 112» albo «Niech Pan zostanie z żoną», z formą Pan/Pani i trzecią osobą. Niemiecki nie ma ani «proszę» z bezokolicznikiem w tej funkcji, ani rozróżnienia Pan/Pani: jest jedno <em>Sie</em>, zawsze zaraz po czasowniku w bezokoliczniku (<em>Rufen Sie</em>, <em>Bleiben Sie</em>), i to samo zdanie mówisz do mężczyzny i do kobiety. «Proszę dzwonić!» przetłumaczone dosłownie jako «Bitte anrufen!» brzmi jak napis na tabliczce, nie jak prośba do osoby. Dobra wiadomość: polska «reanimacja» to, jak niemiecka <em>Reanimation</em>, sama czynność resuscytacji, a oddział to <em>die Intensivstation</em>, polski OIOM. Słowo dla pacjenta to jednak <em>die Wiederbelebung</em>."
      },
      {
        trap: "<em>Die Ambulanz</em> w niemieckim szpitalu to zwykle przyszpitalna przychodnia; na pojazd mówi się <em>der Rettungswagen</em>. Karetka to <em>der Rettungswagen</em>, a lekarz, który z nią przyjeżdża, to <em>der Notarzt</em>. SOR, szpitalny oddział ratunkowy, to <em>die Notaufnahme</em>. I nie rozłączaj się pierwsza z dyspozytorem: <em>Bleiben Sie am Telefon</em> znaczy, że zostajesz na linii, dopóki to <em>Leitstelle</em> nie zakończy rozmowy."
      },
      {
        tip: "Pierwszego dnia na nowym oddziale zapytaj o dwie rzeczy: gdzie jest przycisk alarmowy i jaki jest wewnętrzny numer alarmowy placówki. Różnią się w zależności od szpitala, a w nagłym wypadku nie ma czasu ich szukać."
      }
    ],
    grammar: {
      title: "Tryb rozkazujący przy wzywaniu pomocy",
      note: "Przy <b>Sie</b>: bezokolicznik + Sie. Przy <b>du</b>: temat czasownika, często bez -e; <b>e</b> zmienia się w <b>i</b> tam, gdzie zmienia się też w czasie teraźniejszym. Rozdzielny przedrostek idzie <b>na koniec</b>.",
      table: {
        head: ["do kogo", "przykład", "forma"],
        rows: [
          ["pacjent, rodzina", "Rufen Sie bitte die 112 an!", "rufen + Sie, an na końcu"],
          ["pacjent, rodzina", "Bleiben Sie bitte bei Ihrem Mann!", "bleiben + Sie"],
          ["kolega", "Hol bitte schnell Hilfe!", "holen → hol"],
          ["kolega", "Lös bitte den Alarm aus!", "auslösen → lös ... aus"],
          ["kolega", "Gib mir bitte das Telefon!", "du gibst → gib"]
        ]
      },
      examples: [
        { tr: "Proszę zadzwonić pod 112!", note: "rozdzielny: an na końcu" },
        { tr: "Sprowadź szybko pomoc!", note: "do kolegi, per du" },
        { tr: "Proszę zostać z mężem!", note: "do członka rodziny, per Sie" },
        { tr: "Włącz alarm, proszę!", note: "auslösen: aus na końcu" },
        { tr: "Daj mi telefon, proszę!", note: "geben: e zmienia się w i" },
        { tr: "Proszę zostać na linii i się nie rozłączać!", note: "tak często mówi dyspozytor" }
      ]
    },
    vocab: [
      "wezwanie pomocy, zgłoszenie alarmowe (także: numer alarmowy)",
      "numer alarmowy",
      "przycisk alarmowy",
      "alarm",
      "włączyć, uruchomić (alarm)",
      "centrum dyspozytorskie ratownictwa",
      "ratownictwo medyczne, pogotowie",
      "karetka",
      "zespół resuscytacyjny",
      "resuscytacja krążeniowo-oddechowa (termin fachowy)",
      "reanimacja, ratowanie życia (słowo dla pacjenta)",
      "przynieść, sprowadzić (Hilfe holen: sprowadzić pomoc)"
    ],
    dialogue: [
      "Pani Wolf, teraz dzwonię pod 112. Proszę zostać z mężem.",
      "Numer alarmowy, straż pożarna i pogotowie. Gdzie jest zdarzenie?",
      "Lindenstraße 12, drugie piętro. Jestem pielęgniarką z opieki domowej.",
      "Co się stało?",
      "Pacjent w wieku 78 lat nagle przestał odpowiadać.",
      "Proszę zostać na linii. Karetka jest w drodze.",
      "Dobrze. Pani Wolf, proszę otworzyć drzwi wejściowe dla ratowników.",
      "Tak, już idę."
    ],
    culture: {
      title: "Niemiecka perspektywa: pytania dyspozytora",
      text: "<p>Na kursach pierwszej pomocy w Niemczech często uczy się «W» zgłoszenia alarmowego: <i>Wo</i> (gdzie), <i>Was</i> (co się stało), <i>Wie viele</i> (ile osób), <i>Welche Verletzungen</i> (jakie obrażenia albo objawy) i <i>Warten auf Rückfragen</i> (czekać na pytania). Ostatnie jest najważniejsze: dyspozytor zadaje swoje pytania i to on kończy rozmowę.</p><p>Kto pracuje w opiece domowej, nie ma zespołu oddziału kilka metrów obok, więc warto znać na pamięć zdanie, którym się przedstawia: <i>Ich bin Pflegefachkraft vom ambulanten Pflegedienst</i>, i mieć pod ręką dokładny adres pacjenta.</p>"
    },
    exercises: [
      {
        tr: "Tryb rozkazujący czasownika rufen.",
        why: "Przy <i>du</i>: <i>ruf</i>; przy <i>ihr</i>: <i>ruft</i>; przy <i>Sie</i>: <i>rufen Sie</i>; do tego forma <i>rufen wir</i>, «zadzwońmy». Tryb rozkazujący nie ma pierwszej osoby liczby pojedynczej."
      },
      {
        q: "Do kolegi, per du: «Sprowadź szybko pomoc!»",
        opts: ["Holst bitte schnell Hilfe!", "Hol bitte schnell Hilfe!", "Holen bitte schnell Hilfe!"],
        why: "W trybie rozkazującym przy <i>du</i> używa się tematu: <b>Hol</b>. <i>Holst</i> to czas teraźniejszy, a <i>Holen</i> bez <i>Sie</i> nie jest grzecznościowym trybem rozkazującym."
      },
      {
        q: "Uzupełnij, do żony pacjenta: «___ Sie bitte bei Ihrem Mann!»",
        hint: "bleiben, tryb rozkazujący per Sie",
        why: "<b>Bleiben</b>: grzecznościowy tryb rozkazujący to bezokolicznik, a po nim <i>Sie</i>."
      },
      {
        q: "Ułóż słowa we właściwej kolejności.",
        tr: "Proszę zadzwonić pod 112!",
        why: "<i>Rufen Sie bitte die 112 an!</i> Czasownik otwiera zdanie, potem <i>Sie</i>, a rozdzielny przedrostek <i>an</i> idzie na koniec. Numer czyta się <i>eins-eins-zwei</i>."
      },
      {
        q: "Uzupełnij, do kolegi per du.",
        tr: "Włącz szybko alarm!",
        why: "<i>Lös bitte schnell den Alarm aus!</i> <i>Auslösen</i> jest rozdzielny: temat <i>lös</i> (albo <i>löse</i>) na początku, <i>aus</i> na końcu."
      },
      {
        q: "Połącz każde słowo z jego znaczeniem.",
        pairs: ["pogotowie ratunkowe i straż pożarna", "policja", "resuscytacja krążeniowo-oddechowa (Wiederbelebung)", "centrum dyspozytorskie"]
      },
      {
        q: "Które formy trybu rozkazującego są poprawne?",
        opts: [
          "Rufen Sie bitte den Arzt!",
          "Ruf bitte den Arzt!",
          "Rufe Sie bitte den Arzt!",
          "Gib mir bitte das Telefon!",
          "Gibst mir bitte das Telefon!"
        ],
        why: "Przy <i>Sie</i> potrzebny jest bezokolicznik: <i>Rufen Sie</i>, nie <i>Rufe Sie</i>. Przy <i>du</i> używa się tematu bez <i>-st</i>: <i>Ruf</i>, <i>Gib</i>."
      },
      {
        q: "Przetłumacz to, co mówi dyspozytor: «Proszę zostać na linii!»",
        why: "<i>Bleiben Sie am Telefon!</i> Bezokolicznik, a po nim <i>Sie</i>; <i>am</i> to <i>an dem</i>. Z <i>bitte</i> też jest poprawnie."
      },
      {
        q: "Dzwonisz pod 112 z mieszkania pacjenta.",
        setting: "Jesteś pielęgniarką z opieki domowej; odbiera centrum dyspozytorskie.",
        lines: [
          { tr: "Numer alarmowy, straż pożarna i pogotowie. Gdzie jest zdarzenie?" },
          { tr: "Podaj adres: Lindenstraße 12, drugie piętro.", answerTr: "Lindenstraße 12, drugie piętro." },
          { tr: "Co się stało?" },
          { tr: "Odpowiedz, że pacjent nagle przestał odpowiadać.", answerTr: "Pacjent nagle przestał odpowiadać." },
          { tr: "Proszę zostać na linii." },
          { tr: "Odpowiedz, że zostajesz na linii.", answerTr: "Tak, zostaję na linii." }
        ]
      },
      {
        tr: "Pani Wolf, teraz dzwonię pod 112. Proszę zostać z mężem, a potem otworzyć drzwi wejściowe.",
        why: "112 czyta się <i>eins-eins-zwei</i>, cyfra po cyfrze; w <i>Haustür</i> <b>au</b> to [aʊ], a <b>ü</b> jest długie; w <i>öffnen</i> <b>ö</b> jest krótkie i zaokrąglone, ze ściągniętymi ustami."
      },
      {
        tr: "Sprowadź szybko pomoc!",
        why: "W <i>Hol</i> <b>o</b> jest długie; w <i>schnell</i> <b>sch</b> to [ʃ], a <b>e</b> jest krótkie; w <i>Hilfe</i> nagłosowe <b>h</b> jest słyszalne, ale lekkie, jak wydech, a nie jak polskie twarde «ch»."
      }
    ]
  },
  "lesson:pfl-u04-l4": {
    theme: "Upadek",
    title: "Upadek",
    objectives: [
      "rozmawiać z pacjentem po upadku i wezwać pomoc, nie zostawiając go samego",
      "zrelacjonować upadek lekarzowi, używając Perfekt i Präteritum",
      "odróżniać Fachsprache i Laiensprache dla złamania i krwiaka",
      "udokumentować upadek w protokole upadku, oddzielając to, co się widziało, od tego, co mówi pacjent"
    ],
    theory: [
      {
        h: "Po upadku",
        p: "Z upadkiem postępuje się zawsze tak samo: mówi się do pacjenta, wzywa pomocy, zgłasza i dokumentuje. <em>Was ist passiert? Bleiben Sie bitte liegen, ich hole Hilfe.</em> Potem pyta się o to, co pacjent potrafi powiedzieć (<em>Haben Sie sich den Kopf angeschlagen? Wo tut es weh?</em>), i zawiadamia lekarza. Każdy upadek, nawet bez widocznych skutków, zapisuje się w <em>Sturzprotokoll</em>, zgodnie z procedurą placówki."
      },
      {
        h: "Perfekt i Präteritum w relacji",
        p: "Gdy opowiada się ustnie, używa się przede wszystkim <strong>Perfekt</strong>: <em>Frau Keller ist im Bad gestürzt. Ich habe sie auf dem Boden gefunden.</em> Przy <em>sein</em>, <em>haben</em> i czasownikach modalnych zwykle używa się <strong>Präteritum</strong>, także w mowie: <em>Sie war wach und hatte Schmerzen. Ich wollte allein zur Toilette gehen.</em> Czasownik posiłkowy: nieprzechodnie czasowniki ruchu i zmiany stanu zwykle biorą <em>sein</em> (<em>ist gestürzt, ist ausgerutscht, ist gefallen</em>), pozostałe <em>haben</em>; to tendencja, posiłkowy uczy się razem z czasownikiem. Czasowniki na <em>-ieren</em> nie dostają <em>ge-</em>: <em>informiert</em>, <em>dokumentiert</em>; rozdzielne wstawiają je za przedrostkiem: <em>ausgerutscht</em>."
      },
      {
        contrast: "Po polsku przy opowiadaniu o przeszłości wybierasz <strong>aspekt</strong>: «upadła» (dokonany, zdarzenie zamknięte) albo «padała» (niedokonany, coś trwało lub się powtarzało). Niemiecki tego wyboru nie ma, a Perfekt i Präteritum to <strong>nie</strong> są odpowiedniki aspektów. <em>Sie ist gestürzt</em> i <em>sie stürzte</em> znaczą to samo «upadła»; różni je rejestr: Perfekt w mowie, Präteritum raczej w tekście pisanym. Dlatego <em>Sie war wach und hatte Schmerzen</em> nie znaczy «nie spała» w sensie trwania w odróżnieniu od zdarzenia: przy <em>sein</em> i <em>haben</em> Präteritum jest po prostu krótsze od <em>ist wach gewesen</em>. Trwanie wyraża się słowem (<em>lange</em>, <em>die ganze Zeit</em>), nie czasem. Druga różnica: polski czas przeszły nie ma czasownika posiłkowego, a niemiecki Perfekt musi go mieć, i to raz <em>sein</em>, raz <em>haben</em>. Słownictwo: <em>Fraktur</em> i <em>Hämatom</em> znasz z zajęć, ale pacjentowi mówi się <em>der Knochenbruch</em> (albo po prostu <em>Ist das Bein gebrochen?</em>) i <em>der Bluterguss</em>, nasz «siniak»."
      },
      {
        trap: "«Upaść» ma trzy tłumaczenia. <em>stürzen</em> to słowo oddziału i dokumentacji (<em>der Sturz</em>); <em>hinfallen</em> to słowo codzienne (<em>Ich bin hingefallen</em>); samo <em>fallen</em> mówi się o przedmiocie (<em>Das Glas ist gefallen</em>) i o osobie (<em>Sie ist gefallen</em>), ale w dokumentacji pisze się <em>gestürzt</em>. Uwaga na <em>gefallen</em>: to także imiesłów czasownika <em>gefallen</em>, «podobać się», z <em>haben</em> (<em>Es hat mir gefallen</em>). <em>Sie ist gefallen</em> i <em>Es hat ihr gefallen</em> to dwa różne zdania. Wreszcie <em>die Platzwunde</em> nie ma nic wspólnego z placem: to rana, która pęka od uderzenia, od <em>platzen</em>, pękać; po polsku rana tłuczona."
      },
      {
        tip: "W protokole zapisuj osobno to, co widziałaś, i to, co powiedział pacjent: <em>Patientin um 3:00 Uhr auf dem Boden im Bad aufgefunden</em> to obserwacja; <em>laut Patientin ausgerutscht</em> to jej relacja. Kto czyta po tobie, musi umieć odróżnić jedno od drugiego."
      }
    ],
    grammar: {
      title: "Relacja z upadku",
      note: "W relacji ustnej przede wszystkim <b>Perfekt</b>; przy <b>sein</b>, <b>haben</b> i modalnych zwykle <b>Präteritum</b>. Czasowniki na <b>-ieren</b> nie dostają <b>ge-</b>.",
      table: {
        head: ["czasownik", "przykład", "uwaga"],
        rows: [
          ["stürzen", "Sie ist im Bad gestürzt.", "Perfekt z sein"],
          ["finden", "Ich habe sie auf dem Boden gefunden.", "Perfekt z haben, imiesłów mocny"],
          ["ausrutschen", "Ich bin ausgerutscht.", "rozdzielny: ge- po aus"],
          ["informieren", "Wir haben die Ärztin informiert.", "-ieren: bez ge-"],
          ["sein, haben", "Sie war wach und hatte Schmerzen.", "Präteritum także w mowie"],
          ["wollen", "Ich wollte allein zur Toilette gehen.", "modalny w Präteritum"]
        ]
      },
      examples: [
        { tr: "Pani Keller upadła dziś w nocy w łazience.", note: "stürzen: Perfekt z sein" },
        { tr: "Znalazłam ją o trzeciej na podłodze.", note: "finden: Perfekt z haben" },
        { tr: "Nie spała i bolało ją lewe biodro.", note: "sein i haben w Präteritum" },
        { tr: "Chciałam sama pójść do toalety.", note: "modalny w Präteritum" },
        { tr: "Poślizgnęłam się na mokrej podłodze.", note: "ausrutschen: rozdzielny, z sein" },
        { tr: "Od razu zawiadomiliśmy panią doktor.", note: "informieren: bez ge-" }
      ]
    },
    vocab: [
      "protokół upadku",
      "upaść (słowo oddziału)",
      "poślizgnąć się",
      "przewrócić się (słowo codzienne)",
      "złamanie (termin fachowy)",
      "złamanie, złamana kość (słowo dla pacjenta)",
      "krwiak (termin fachowy)",
      "siniak (słowo dla pacjenta)",
      "biodro",
      "rana tłuczona",
      "ryzyko upadku",
      "zgłosić, przekazać informację"
    ],
    dialogue: [
      "Pani Keller! Co się stało? Proszę leżeć, idę po pomoc.",
      "Chciałam sama pójść do toalety. I wtedy się poślizgnęłam.",
      "Uderzyła się Pani w głowę?",
      "Nie, ale boli mnie biodro.",
      "Panie doktorze, pani Keller upadła o trzeciej w łazience. Znalazłam ją na podłodze.",
      "Nie spała i odpowiadała?",
      "Tak, nie spała i była zorientowana. Boli ją lewe biodro i ma mały krwiak na łokciu.",
      "Dobrze, już idę. Proszę udokumentować upadek w protokole upadku."
    ],
    culture: {
      title: "Niemiecka perspektywa: zapobiegać upadkom i je dokumentować",
      text: "<p>Także dla upadków istnieje w Niemczech <i>Expertenstandard</i> DNQP, poświęcony zapobieganiu (<i>Sturzprophylaxe</i>): wymaga rozpoznania osób zagrożonych, dostosowania otoczenia i analizy każdego upadku, do którego doszło. Dlatego wiele placówek ma osobny formularz, nazywany <i>Sturzprotokoll</i> albo <i>Sturzereignisprotokoll</i>: godzina, miejsce, co zastano, co powiedział pacjent, kogo zawiadomiono.</p><p>Formularz nie służy do szukania winnych: ma pomóc zrozumieć, dlaczego ktoś upadł, i zapobiec następnemu upadkowi. Dokładny wzór ustala placówka.</p>"
    },
    exercises: [
      {
        tr: "Perfekt czasownika fallen we wszystkich osobach.",
        why: "<i>Bin gefallen, bist gefallen, ist gefallen, sind gefallen, seid gefallen, sind gefallen</i>: czasownik ruchu, posiłkowy <i>sein</i>. O osobie na oddziale mówi się częściej <i>gestürzt</i> albo <i>hingefallen</i>."
      },
      {
        q: "Do pacjenta, prostymi słowami: «Ma Pan siniaka na ręce.»",
        opts: [
          "Sie haben ein Hämatom am Arm.",
          "Sie haben einen Bluterguss am Arm.",
          "Sie haben einen Hämatom am Arm."
        ],
        why: "Z pacjentem używa się Laiensprache: <b>einen Bluterguss</b>, rodzaj męski. Pierwsze zdanie jest poprawne, ale brzmi jak dokumentacja; w trzecim rodzajnik jest błędny, bo <i>Hämatom</i> jest rodzaju nijakiego."
      },
      {
        q: "Uzupełnij: «Ich bin auf dem nassen Boden ___.»",
        hint: "imiesłów od ausrutschen",
        why: "<b>ausgerutscht</b>: czasownik rozdzielny, <i>ge-</i> idzie za przedrostek <i>aus</i>. Posiłkowy <i>sein</i>, jak przy <i>stürzen</i>."
      },
      {
        q: "Połącz każde słowo z jego znaczeniem.",
        pairs: ["złamanie", "krwiak", "rana tłuczona", "ryzyko upadku"]
      },
      {
        q: "Uzupełnij zdanie w Präteritum.",
        tr: "Nie spała i bolało ją biodro.",
        why: "<i>Sie war wach und hatte Schmerzen in der Hüfte</i>: przy <i>sein</i> i <i>haben</i> Präteritum to zwykła forma, także w mowie."
      },
      {
        q: "Ułóż słowa we właściwej kolejności.",
        tr: "Znalazłam ją o trzeciej na podłodze.",
        why: "<i>Ich habe sie um drei Uhr auf dem Boden gefunden.</i> <i>Habe</i> na drugim miejscu, imiesłów <i>gefunden</i> na końcu; najpierw czas (<i>um drei Uhr</i>), potem miejsce."
      },
      {
        q: "Które zdania w Perfekt są poprawne?",
        opts: [
          "Sie ist im Bad gestürzt.",
          "Sie hat im Bad gestürzt.",
          "Ich habe die Ärztin informiert.",
          "Ich habe die Ärztin geinformiert.",
          "Er ist auf dem Boden ausgerutscht."
        ],
        why: "<i>stürzen</i> i <i>ausrutschen</i> wymagają tu <i>sein</i>. <i>informieren</i> kończy się na <i>-ieren</i> i nie dostaje <i>ge-</i>: <i>informiert</i>."
      },
      {
        q: "Wybierz właściwy rodzajnik określony dla każdego rzeczownika.",
        items: ["protokół upadku", "złamanie", "złamana kość", "krwiak", "siniak", "biodro"]
      },
      {
        q: "Przetłumacz, do pacjentki po upadku: «Uderzyła się Pani w głowę?»",
        why: "<i>Haben Sie sich den Kopf angeschlagen?</i> Zaimek zwrotny <i>sich</i> stoi w celowniku, a głowa jest dopełnieniem. Poprawne jest też <i>gestoßen</i>."
      },
      {
        tr: "Pani Keller upadła o trzeciej w łazience. Nie spała i bolało ją lewe biodro.",
        why: "W <i>gestürzt</i> <b>ü</b> jest krótkie, a grupę <b>rzt</b> wymawia się w całości, bez polskiego «ż»; w <i>Hüfte</i> <b>ü</b> jest krótkie; w <i>linken</i> <b>n</b> przed <b>k</b> to [ŋ], jak w polskim «bank»."
      },
      {
        tr: "Uderzyła się Pani w głowę?",
        why: "W <i>Kopf</i> słychać i <b>p</b>, i <b>f</b>; w <i>angeschlagen</i> <b>sch</b> to [ʃ], a <b>a</b> w <i>schla</i> jest długie."
      }
    ]
  },
  "lesson:pfl-u04-test": {
    theme: "Sprawdzian",
    title: "Test: Ból i nagły wypadek",
    objectives: [
      "sprawdzić końcówki przymiotnika, zdania czasowe, Perfekt w relacji i pary Fachsprache / Laiensprache bólu i nagłych stanów"
    ],
    theory: [
      {
        p: "Jedenaście pytań z całej jednostki. Do zaliczenia potrzeba 70%. Treści kliniczne to przykłady dydaktyczne: na oddziale zawsze obowiązują procedury placówki i zalecenia lekarza."
      }
    ],
    exercises: [
      {
        q: "Uzupełnij: «Es ist ein ___ Schmerz.»",
        opts: ["stechende", "stechender", "stechenden"],
        why: "Mianownik rodzaju męskiego po <i>ein</i>: <b>stechender</b>. Rodzajnik <i>ein</i> nie pokazuje rodzaju, więc pokazuje go przymiotnik końcówką <b>-er</b>."
      },
      {
        q: "Uzupełnij: «Ich bleibe bei Ihnen, ___ die Ärztin kommt.»",
        hint: "«aż, dopóki nie»",
        why: "<b>bis</b>: «aż, dopóki nie». Czasownik <i>kommt</i> idzie na koniec zdania podrzędnego."
      },
      {
        q: "Uzupełnij: «Frau Keller ist heute Nacht im Bad ___.»",
        hint: "imiesłów od stürzen",
        why: "<b>gestürzt</b>, z posiłkowym <i>ist</i>: <i>stürzen</i> to czasownik ruchu."
      },
      {
        tr: "Perfekt czasownika anrufen we wszystkich osobach.",
        why: "<i>Habe angerufen, hast angerufen, hat angerufen, haben angerufen, habt angerufen, haben angerufen</i>: rozdzielny, <i>ge-</i> stoi między <i>an</i> a <i>rufen</i>; posiłkowy <i>haben</i>."
      },
      {
        q: "Połącz każdy termin fachowy ze słowem, którego używa pacjent.",
        pairs: ["die Ohnmacht", "der Schlaganfall", "der Knochenbruch", "das Schmerzmittel"]
      },
      {
        q: "Które zdania są poprawne?",
        opts: [
          "Als ich ins Zimmer kam, lag sie auf dem Boden.",
          "Als ich ins Zimmer kam, sie lag auf dem Boden.",
          "Haben Sie starke Schmerzen?",
          "Ich habe die Ärztin sofort informiert.",
          "Wenn ich gestern um acht Uhr ins Zimmer kam, war sie wach."
        ],
        why: "Po zdaniu podrzędnym zdanie główne zaczyna się od czasownika: <i>lag sie</i>. Dla jednorazowego zdarzenia w przeszłości używa się <i>als</i>, nie <i>wenn</i>. <i>informiert</i> nie dostaje <i>ge-</i>."
      },
      {
        q: "Uzupełnij zdanie.",
        tr: "Kiedy weszłam do sali, pani Keller leżała na podłodze.",
        why: "<i>Als ich ins Zimmer kam, lag Frau Keller auf dem Boden.</i> <i>Als</i> dla jednorazowego zdarzenia w przeszłości; <i>lag</i>, Präteritum od <i>liegen</i>, otwiera zdanie główne."
      },
      {
        q: "Ułóż słowa we właściwej kolejności.",
        tr: "Zostaję z nim, aż przyjdzie zespół.",
        why: "<i>Ich bleibe bei ihm, bis das Team kommt.</i> Po <i>bis</i> czasownik <i>kommt</i> idzie na koniec."
      },
      {
        q: "Wybierz właściwy rodzajnik określony dla każdego rzeczownika.",
        items: ["nagły wypadek", "skala bólu", "protokół upadku", "udar", "centrum dyspozytorskie", "krwiak"]
      },
      {
        tr: "Kiedy weszłam do sali, pani Keller nie odpowiadała. Od razu włączyłam alarm i zostałam z nią, aż przyszedł zespół.",
        why: "W <i>ausgelöst</i> <b>ö</b> jest długie; w <i>geblieben</i> <b>ie</b> to długie <b>i</b>; w <i>Team</i> <b>ea</b> czyta się [iː], jak w angielskim."
      },
      {
        tr: "Dokumentuję upadek w protokole upadku.",
        why: "W <i>dokumentiere</i> akcent pada na <b>tie</b>, z długim <b>ie</b>; w <i>Sturzprotokoll</i> główny akcent jest na <b>Sturz</b>, a w <i>Protokoll</i> pada na ostatnią sylabę."
      }
    ]
  }
});
