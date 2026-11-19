/* ============================================================
   Teksty w języku ucznia (pl) dla data/core/pfl-08.js, jednostka pfl-u08.
   Klucze wskazują id z warstwy neutralnej; tablice łączą się po
   indeksie, więc ich długość musi się zgadzać z core.
   Sprawdzane przez scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("pl", {
  "unit:pfl-u08": {
    title: "Obchód, zlecenia lekarskie i zespół",
    grammarNote: "strona bierna w czasie teraźniejszym i z czasownikami modalnymi na obchodzie · zdania podrzędne z dass i ob, żeby zrelacjonować i sprawdzić zlecenie · spójniki deshalb, aber, denn · czasowniki ze stałym przyimkiem na zebraniu zespołu · grzecznościowy Konjunktiv II przez telefon"
  },
  "lesson:pfl-u08-l1": {
    theme: "Obchód",
    title: "Obchód lekarski",
    objectives: [
      "śledzić obchód i rozumieć, co postanowiono w sprawie pacjenta",
      "rozpoznawać stronę bierną: wird abgenommen, wird gewechselt, wurde gemacht",
      "rozumieć stronę bierną z czasownikiem modalnym: soll mobilisiert werden",
      "wtrącić obserwacje pielęgniarskie"
    ],
    theory: [
      {
        h: "Co się dzieje podczas Visite",
        p: "Podczas <strong>Visite</strong> lekarz (często razem z <em>Oberärztin</em> albo <em>Oberarztem</em>) chodzi od sali do sali z pielęgniarką albo pielęgniarzem, który opiekuje się pacjentem. Ogląda się wyniki (<em>Befunde</em>), decyduje, czy leczenie jest kontynuowane, i wydaje zlecenia na kolejne dni. Twoje zadanie to słuchać, notować i wnosić obserwacje pielęgniarskie: jak pacjent spał, czy je, czy wstaje, czy ma bóle. Zlecenia wydane ustnie na obchodzie muszą potem znaleźć się na piśmie w dokumentacji."
      },
      {
        h: "Strona bierna: liczy się, co się robi",
        p: "Na obchodzie mówi się przede wszystkim o tym, <strong>co się robi</strong>, a nie kto to robi. Dlatego używa się <strong>strony biernej</strong>: odmienione <em>werden</em> + imiesłów na końcu. W czasie teraźniejszym: <em>Der Verband <b>wird</b> morgen <b>gewechselt</b>.</em> W Präteritum: <em>Die Röntgenaufnahme <b>wurde</b> gestern <b>gemacht</b>.</em> Z czasownikiem modalnym odmienia się modalny, a na końcu stoją imiesłów i <em>werden</em> w bezokoliczniku: <em>Frau Lang <b>soll</b> heute <b>mobilisiert werden</b>.</em> Często osobą, która ma to zrobić, jesteś właśnie ty: <em>Bei Herrn Wolf wird ein Blutbild abgenommen</em> znaczy, że po obchodzie pobranie krwi należy do zespołu pielęgniarskiego."
      },
      {
        contrast: "Polski obchód mówi formami bezosobowymi: «kontynuuje się leczenie», «jutro pobieramy morfologię», «zlecono RTG», «opatrunek do zmiany». Niemiecki ma wprawdzie <em>man</em>, ale na obchodzie brzmi ono ogólnikowo; zamiast tego jest strona bierna z <em>werden</em>: <em>Die Therapie wird fortgesetzt</em>. Uwaga na pozorne podobieństwo: polskie «zostanie zmieniony» to czas przyszły, a niemieckie <em>wird gewechselt</em> to strona bierna w czasie <strong>teraźniejszym</strong>, która w praktyce oznacza «zmienia się», «jest do zmiany». Polskie «jest zmieniony» z kolei opisuje stan i odpowiada niemieckiemu <em>ist gewechselt</em>, czyli «już zmieniony», a nie zleceniu. I nie myl strony biernej z czasem przyszłym: <em>wird gewechselt</em> (imiesłów) to strona bierna, <em>wird wechseln</em> (bezokolicznik) to «zmieni». Sygnał do wyłapania w locie to <em>wird</em> albo <em>wurde</em> z imiesłowem na końcu zdania. Na obchodzie <em>wird</em> z imiesłowem to prawie zawsze zlecenie, które ktoś musi wykonać; z <em>wurde</em> to coś już zrobionego. Sama strona bierna opisuje czynność: zleceniem czyni ją kontekst."
      },
      {
        trap: "<em>fortsetzen</em> to czasownik rozdzielny i przyjmuje <em>ge-</em> po przedrostku: <em>fortgesetzt</em>, nigdy <em>gefortsetzt</em>. <em>mobilisieren</em> kończy się natomiast na <em>-ieren</em> i jego imiesłów nie ma <em>ge-</em>: <em>mobilisiert</em>, nigdy <em>gemobilisiert</em>. A <em>der Befund</em> to nie tylko opis badania: <em>ohne Befund</em> znaczy «bez zmian, w normie». Badanie «bez Befund» to więc dobra wiadomość, a nie brakujący wynik."
      },
      {
        tip: "Przynieś na obchód kartkę albo tablet ze swoimi pacjentami i zapisuj każde zlecenie w chwili, gdy je słyszysz, razem z tym, kto ma je wykonać i kiedy. Jeśli zdanie ci umknie, zapytaj od razu, przy łóżku: <em>Entschuldigung, wird das Blutbild heute oder morgen abgenommen?</em> Jedno pytanie więcej na obchodzie kosztuje dziesięć sekund; źle zrozumiane zlecenie kosztuje dużo więcej."
      }
    ],
    grammar: {
      title: "Strona bierna z werden",
      note: "Czas teraźniejszy: <b>wird</b> + imiesłów. Präteritum: <b>wurde</b> + imiesłów. Z czasownikiem modalnym: <b>soll / muss / kann</b> + imiesłów + <b>werden</b>.",
      table: {
        head: ["forma", "budowa", "przykład"],
        rows: [
          ["strona bierna, czas teraźniejszy", "wird + imiesłów", "Der Verband wird morgen gewechselt."],
          ["strona bierna, Präteritum", "wurde + imiesłów", "Die Röntgenaufnahme wurde gestern gemacht."],
          ["strona bierna z modalnym", "soll + imiesłów + werden", "Frau Lang soll heute mobilisiert werden."],
          ["pytanie", "Wann / Wird ... + imiesłów", "Wann wird Herr Wolf entlassen?"]
        ]
      },
      examples: [
        { tr: "Panu Wolfowi pobiera się dziś krew na morfologię.", note: "wird ... abgenommen: pobranie krwi zwykle wykonuje zespół pielęgniarski" },
        { tr: "Opatrunek zmienia się jutro.", note: "strona bierna, czas teraźniejszy: wird + gewechselt na końcu" },
        { tr: "Zdjęcie RTG zostało zrobione wczoraj.", note: "strona bierna w Präteritum: wurde gemacht" },
        { tr: "Pani Lang ma być dziś uruchamiana.", note: "modalny soll + mobilisiert werden; mobilisiert bez ge-" },
        { tr: "Leczenie jest kontynuowane jak dotychczas.", note: "fortsetzen jest rozdzielny: fortgesetzt" },
        { tr: "Kiedy pan Wolf zostanie wypisany?", note: "pytanie w stronie biernej: entlassen na końcu" }
      ]
    },
    vocab: [
      "obchód (lekarski)",
      "starsza lekarka, mniej więcej zastępczyni ordynatora",
      "wynik, opis badania",
      "morfologia krwi",
      "zdjęcie rentgenowskie, RTG",
      "terapia, leczenie",
      "leczenie, postępowanie",
      "zmiana opatrunku",
      "pobrać krew",
      "kontynuować",
      "wypisać (ze szpitala)",
      "bez zmian, w normie"
    ],
    dialogue: [
      "Dzień dobry, panie Wolf. Jak się pan dziś czuje?",
      "Lepiej niż wczoraj, ale wciąż jestem zmęczony.",
      "Wczorajsze zdjęcie RTG jest bez zmian. Leczenie kontynuujemy jak dotychczas.",
      "Czy jutro znowu pobieramy morfologię?",
      "Tak, jutro rano, proszę. A opatrunek trzeba dziś zmienić.",
      "Dobrze. A pionizacja?",
      "Pan Wolf ma być dziś uruchamiany dwa razy, najpierw na brzegu łóżka.",
      "Kiedy mnie wypiszą?",
      "Jeśli wyniki będą nadal dobre, może w piątek."
    ],
    culture: {
      title: "Po niemiecku: kto jest na obchodzie",
      text: "<p>Na niemieckich oddziałach <i>Visite</i> odbywa się zwykle rano. Lekarz oddziałowy (<i>Stationsarzt</i>, <i>Stationsärztin</i>, często <i>Assistenzarzt</i> w trakcie specjalizacji, mniej więcej odpowiednik rezydenta) robi go codziennie i w praktyce pełni rolę lekarza prowadzącego; raz albo dwa razy w tygodniu jest też <i>Oberarztvisite</i> albo <i>Chefarztvisite</i>, z ordynatorem. Funkcje nie pokrywają się dokładnie z polskimi: <i>Oberarzt</i> to doświadczony specjalista odpowiedzialny za część oddziału, coś pomiędzy starszym asystentem a zastępcą ordynatora, a <i>Chefarzt</i> to ordynator.</p><p>Obecność pielęgniarki na obchodzie bywa różna: na niektórych oddziałach uczestniczy w każdym obchodzie, na innych zlecenia przekazuje się później, w dyżurce. Zapytaj na początku pracy, jak to wygląda na twoim oddziale.</p>"
    },
    exercises: [
      {
        q: "Na obchodzie lekarka mówi, że jutro rano trzeba pobrać krew na morfologię. Uzupełnij: «Morgen früh ___ ein Blutbild abgenommen.»",
        opts: ["wird", "ist", "hat"],
        why: "Stronę bierną w czasie teraźniejszym tworzy się z <b>werden</b>: <i>wird</i> + imiesłów <i>abgenommen</i> na końcu. <i>ist abgenommen</i> opisuje stan, jak polskie «jest pobrana», a <i>hat abgenommen</i> to Perfekt w stronie czynnej (a przy <i>abnehmen</i> może też znaczyć «schudł»)."
      },
      {
        tr: "Präteritum czasownika werden we wszystkich osobach.",
        why: "<i>Wurde, wurdest, wurde, wurden, wurdet, wurden</i>: to forma, na której opiera się strona bierna w przeszłości, <i>wurde gemacht</i>. Pierwsza i trzecia osoba liczby pojedynczej są takie same."
      },
      {
        q: "Uzupełnij: «Der Verband ___ heute gewechselt.»",
        hint: "strona bierna, czas teraźniejszy",
        why: "<b>wird</b>: podmiot w liczbie pojedynczej <i>der Verband</i>, strona bierna w czasie teraźniejszym z imiesłowem <i>gewechselt</i> na końcu."
      },
      {
        q: "Uzupełnij zdanie.",
        tr: "Pan Wolf ma być dziś uruchamiany dwa razy.",
        why: "<i>soll ... <b>mobilisiert werden</b></i>: przy czasowniku modalnym na końcu stoją imiesłów, a po nim <i>werden</i> w bezokoliczniku. <i>mobilisiert</i> nie przyjmuje <i>ge-</i>, bo czasownik kończy się na <i>-ieren</i>."
      },
      {
        q: "Które zdania są poprawne?",
        opts: [
          "Die Therapie wird fortgesetzt.",
          "Die Therapie wird gefortsetzt.",
          "Das Blutbild wurde gestern abgenommen.",
          "Der Patient soll heute entlassen werden.",
          "Der Patient soll heute werden entlassen."
        ],
        why: "<i>fortsetzen</i> jest rozdzielny: <i>fort<b>ge</b>setzt</i>, z <i>ge-</i> po przedrostku. Przy czasowniku modalnym kolejność na końcu to imiesłów + <i>werden</i>: <i>entlassen werden</i>, a nie <i>werden entlassen</i>."
      },
      {
        q: "Wybierz właściwy rodzajnik określony dla każdego rzeczownika.",
        items: ["obchód", "starsza lekarka", "wynik badania", "morfologia krwi", "zdjęcie RTG", "zmiana opatrunku"]
      },
      {
        q: "Połącz każde słowo z jego znaczeniem.",
        pairs: ["terapia", "wynik badania", "zdjęcie RTG", "morfologia krwi"]
      },
      {
        q: "Ułóż słowa we właściwej kolejności.",
        tr: "Leczenie jest kontynuowane jak dotychczas.",
        why: "<i>Die Therapie wird wie bisher fortgesetzt.</i> Odmieniony czasownik <i>wird</i> na drugim miejscu, imiesłów <i>fortgesetzt</i> na końcu; <i>wie bisher</i> zwykle stoi pośrodku; w mowie może też stanąć po imiesłowie, <i>wird fortgesetzt wie bisher</i>, i ten szyk też jest przyjmowany."
      },
      {
        q: "Przetłumacz (na obchodzie): «Jutro rano pobieramy krew na morfologię.»",
        why: "<i>Morgen früh wird ein Blutbild abgenommen.</i> Polska forma «pobieramy» albo «pobiera się» przechodzi w stronę bierną z <i>wird</i>. Przy pobraniu krwi typowy czasownik to <i>abnehmen</i>; <i>gemacht</i> też jest przyjmowane. Ściśle biorąc pobiera się krew (<i>Blut abnehmen</i>), a morfologię robi się z próbki: <i>ein Blutbild abnehmen</i> to zwykły skrót oddziałowy. <i>morgen früh</i> znaczy «jutro rano»."
      },
      {
        q: "Na obchodzie.",
        setting: "Jesteś pielęgniarką pana Wolfa i uczestniczysz w obchodzie ze starszą lekarką.",
        lines: [
          { tr: "Czy od strony pielęgniarskiej jest coś jeszcze w sprawie pana Wolfa?" },
          { tr: "Odpowiedz, że w nocy pan Wolf mało spał.", answerTr: "Tak, w nocy pan Wolf mało spał." },
          { tr: "Opatrunek trzeba dziś zmienić." },
          { tr: "Odpowiedz, że zmienisz go po obchodzie.", answerTr: "Dobrze, zmienię go po obchodzie." },
          { tr: "A pionizacja?" },
          { tr: "Odpowiedz, że pan Wolf był już dziś raz uruchamiany.", answerTr: "Pan Wolf był już dziś raz uruchamiany." }
        ]
      },
      {
        tr: "Wczorajsze zdjęcie RTG jest bez zmian. Leczenie kontynuujemy jak dotychczas.",
        why: "W <i>Röntgenaufnahme</i> <b>ö</b> jest krótkie, a akcent pada na <b>Rönt</b>; w <i>unauffällig</i> akcent pada na <b>un</b>, a końcowe <b>g</b> wymawia się [ç]; w <i>Therapie</i> <b>th</b> to zwykłe [t], a akcent pada na ostatnią sylabę, <b>pie</b>, inaczej niż w polskim «terapia»."
      },
      {
        tr: "Panu Wolfowi pobiera się dziś krew na morfologię.",
        why: "W <i>Blutbild</i> <b>u</b> jest długie, a końcowe <b>d</b> wymawia się [t], tak jak w polskim «chleb» brzmi [p]; w <i>abgenommen</i> akcent pada na <b>ab</b>; <b>w</b> w <i>Wolf</i> i w <i>wird</i> to [v], jak polskie «w»."
      }
    ]
  },
  "lesson:pfl-u08-l2": {
    theme: "Zlecenia i dopytywanie",
    title: "Zrozumieć i sprawdzić zlecenie",
    objectives: [
      "zrelacjonować za pomocą dass, co zostało zlecone",
      "wyrazić wątpliwość co do zlecenia za pomocą ob",
      "dopytać lekarza za pomocą nachfragen",
      "łączyć przyczynę i skutek spójnikami deshalb, aber, denn"
    ],
    theory: [
      {
        h: "Niejasnego zlecenia się nie wykonuje",
        p: "<strong>Anordnung</strong> to zlecenie lekarskie: badanie, opatrunek, uruchamianie, pozostanie na czczo przed zabiegiem. Jeśli zlecenie jest niejasne, niepełne albo nietypowe (brakuje informacji kiedy, brakuje informacji jak, nie pasuje do pacjenta), obowiązuje jedna zasada: <strong>najpierw się pyta, potem się wykonuje</strong>. Zdanie, które warto mieć gotowe, to <em>Ich frage noch einmal nach.</em> Dopytanie nie podważa kompetencji lekarza: to część odpowiedzialności osoby, która wykonuje zlecenie. Po wyjaśnieniu poprawne zlecenie musi znaleźć się na piśmie."
      },
      {
        h: "Relacjonować z dass, sprawdzać z ob",
        p: "Żeby powiedzieć, co jest zapisane albo co zostało zlecone, używa się <em>dass</em>: <em>In der Akte steht, <b>dass</b> sie heute nüchtern bleibt.</em> Żeby wyrazić wątpliwość, używa się <em>ob</em>, czyli pytania zależnego typu tak/nie: <em>Ich bin nicht sicher, <b>ob</b> die Anordnung noch gilt.</em> W obu zdaniach podrzędnych odmieniony czasownik idzie na koniec. Do łączenia dwóch zdań głównych: <em>deshalb</em> (skutek, czasownik stoi zaraz po nim), <em>aber</em> i <em>denn</em> (nie zmieniają szyku): <em>Die Anordnung ist unklar, <b>deshalb frage</b> ich nach. Ich frage nach, <b>denn</b> ich <b>möchte</b> keinen Fehler machen.</em>"
      },
      {
        contrast: "Tu polski bardzo pomaga: «nie wiem, <b>czy</b> zlecenie jest aktualne» to dokładnie niemieckie <em>ob</em>, a «jeśli» to <em>wenn</em>. Trudność leży gdzie indziej. Po pierwsze, szyk: po polsku czasownik stoi, gdzie chce («czy jest nadal aktualne», «czy nadal obowiązuje»), a po <em>ob</em> i <em>dass</em> odmieniony czasownik zawsze idzie na sam koniec: <em>ob die Anordnung noch <b>gilt</b></em>. Po drugie, polskie «czy» otwiera też zwykłe pytanie («Czy zlecenie jest aktualne?»), a niemieckie <em>ob</em> nigdy: pytanie bezpośrednie zaczyna się od czasownika, <em>Gilt die Anordnung noch?</em> Samodzielne <em>Ob die Anordnung noch gilt?</em> nie jest zwykłym pytaniem: wyraża zastanawianie się, jak polskie «ciekawe, czy zlecenie jest aktualne». Ramy są ci znane: w Polsce zlecenie też trafia do karty zleceń, a zlecenie ustne to wyjątek, który lekarz potem potwierdza na piśmie. Zmienia się słowo: tam, gdzie powiesz «pani doktor, mam pytanie», na niemieckim oddziale często mówi się <em>Ich habe eine Rückfrage</em>, czyli właśnie prośba o wyjaśnienie czegoś, co już zostało powiedziane albo zapisane."
      },
      {
        trap: "<em>anordnen</em> jest rozdzielny: <em>Die Ärztin <b>ordnet</b> ein Blutbild <b>an</b></em>, w Perfekt <em>hat ... ange<b>ordnet</b></em>. Nie myl go z <em>ordnen</em>, «porządkować». <em>die Indikation</em> to medyczne «wskazanie» do leczenia, a nie «wskazówka» czy polecenie: polecenie to <em>die Anweisung</em>. Pacjentowi nie mówi się <em>Indikation</em>, tylko <em>der Grund für die Behandlung</em>."
      },
      {
        tip: "Kiedy dopytujesz, powtórz najpierw własnymi słowami, co zrozumiałaś, a dopiero potem zadaj pytanie: <em>In der Akte steht, dass sie nüchtern bleiben soll. Gilt das noch?</em> Lekarz od razu widzi, gdzie jest wątpliwość. Zapisz odpowiedź, godzinę i nazwisko osoby, która jej udzieliła."
      }
    ],
    grammar: {
      title: "dass, ob i spójniki",
      note: "<b>dass</b> relacjonuje fakt, <b>ob</b> wprowadza wątpliwość (pytanie zależne tak/nie, polskie «czy»): w obu odmieniony czasownik idzie na koniec. Po <b>deshalb</b> czasownik stoi od razu; <b>aber</b> i <b>denn</b> nie zmieniają szyku.",
      table: {
        head: ["słowo", "funkcja", "przykład"],
        rows: [
          ["dass", "zrelacjonować, co jest zapisane albo zlecone", "In der Akte steht, dass der Verband täglich gewechselt wird."],
          ["ob", "wyrazić wątpliwość, pytanie zależne tak/nie", "Ich bin nicht sicher, ob die Anordnung noch gilt."],
          ["deshalb", "skutek, czasownik zaraz potem", "Die Anordnung ist unklar, deshalb frage ich nach."],
          ["aber", "przeciwstawienie, zwykły szyk", "Ich habe sie gelesen, aber ich verstehe sie nicht."],
          ["denn", "przyczyna, zwykły szyk", "Ich frage nach, denn ich möchte keinen Fehler machen."]
        ]
      },
      examples: [
        { tr: "Lekarka zleciła, żeby pani Lang pozostała dziś na czczo.", note: "dass: czasownik bleibt idzie na koniec" },
        { tr: "W dokumentacji jest zapisane, że opatrunek zmienia się codziennie.", note: "dass + strona bierna: gewechselt wird na końcu" },
        { tr: "Nie jestem pewna, czy zlecenie jest nadal aktualne.", note: "ob: pytanie zależne tak/nie, jak polskie «czy»; gilt na końcu" },
        { tr: "Zlecenie nie jest jasne, dlatego dopytuję.", note: "deshalb na pierwszym miejscu, zaraz po nim frage" },
        { tr: "Przeczytałam zlecenie, ale go nie rozumiem.", note: "aber nie przesuwa czasownika" },
        { tr: "Wolę zapytać raz za dużo, bo nie chcę popełnić błędu.", note: "denn nie przesuwa czasownika: möchte zostaje na drugim miejscu" }
      ]
    },
    vocab: [
      "zlecenie lekarskie",
      "zlecić",
      "wskazanie (medyczne)",
      "powód",
      "pytanie o wyjaśnienie",
      "dopytać, upewnić się",
      "jednoznaczny",
      "niejasny",
      "obowiązywać, być aktualnym",
      "dokumentacja pacjenta, historia choroby",
      "podpisać",
      "wykonać"
    ],
    dialogue: [
      "Przepraszam, panie doktorze, chciałbym coś wyjaśnić w sprawie pani Lang.",
      "Tak, słucham.",
      "W dokumentacji jest zapisane, że ma dziś pozostać na czczo. Nie jestem pewien, czy to jest nadal aktualne.",
      "Dobrze, że pan pyta. Badanie zostało przełożone, więc może już jeść.",
      "A morfologia? Tu jest napisane tylko laboratorium, ale nie kiedy.",
      "Jutro rano, proszę. Zaraz to dopiszę w dokumentacji.",
      "Dziękuję. Wolę zapytać raz za dużo, bo nie chcę popełnić błędu."
    ],
    culture: {
      title: "Po niemiecku: zlecenie i odpowiedzialność",
      text: "<p>W Niemczech rozróżnia się odpowiedzialność osoby, która zleca (<i>Anordnungsverantwortung</i>, lekarza), i osoby, która wykonuje (<i>Durchführungsverantwortung</i>, tej, która przeprowadza czynność). Osoba wykonująca odpowiada za to, jak to zrobiła, a także za to, że to zrobiła, mając powód do wątpliwości. Dlatego niejasne zlecenie wyjaśnia się przed, a nie po.</p><p>Zlecenia wydane ustnie, na przykład w nocy przez telefon, na oddziałach zwykle powtarza się na głos, a lekarz podpisuje je możliwie szybko. Szczegóły określają zasady twojej placówki: zapytaj o nie w czasie wdrożenia.</p>"
    },
    exercises: [
      {
        q: "W dokumentacji znajdujesz zlecenie, które wydaje ci się nietypowe. Co mówisz?",
        opts: ["Ich mache es so, wie ich es verstehe.", "Ich frage noch einmal nach.", "Ich warte bis morgen."],
        why: "Niejasne albo nietypowe zlecenie zawsze wyjaśnia się z lekarzem przed wykonaniem: <b>Ich frage noch einmal nach</b>. Interpretowanie go na własną rękę albo odkładanie bez słowa nie są bezpieczne."
      },
      {
        tr: "Perfekt czasownika anordnen we wszystkich osobach.",
        why: "<i>Habe angeordnet, hast angeordnet, hat angeordnet</i> ...: czasownik rozdzielny, <i>ge-</i> wchodzi między przedrostek <i>an-</i> a rdzeń, a końcówka to <i>-et</i>, bo rdzeń kończy się na <b>d</b>."
      },
      {
        q: "Uzupełnij: «Ich bin nicht sicher, ___ die Anordnung noch gilt.»",
        hint: "pytanie zależne tak/nie",
        why: "<b>ob</b>: w zdaniu kryje się pytanie tak/nie («czy zlecenie jest aktualne?»), czyli polskie «czy». <i>wenn</i> byłoby warunkiem («jeśli»), a <i>dass</i> («że») relacjonuje treść i nie zadaje pytania; po <i>nicht sicher</i> normalnym wyborem jest <i>ob</i>."
      },
      {
        q: "Uzupełnij zdanie.",
        tr: "Lekarka zleciła, żeby opatrunek był zmieniany codziennie.",
        why: "<i><b>dass</b></i> relacjonuje treść zlecenia; w zdaniu podrzędnym strona bierna kończy się na <i>gewechselt <b>wird</b></i>: odmieniony czasownik idzie na koniec, po imiesłowie."
      },
      {
        q: "Które zdania są poprawne?",
        opts: [
          "In der Akte steht, dass Frau Lang nüchtern bleibt.",
          "In der Akte steht, dass Frau Lang bleibt nüchtern.",
          "Ich weiß nicht, ob die Anordnung noch gilt.",
          "Ich weiß nicht, ob gilt die Anordnung noch.",
          "Die Anordnung ist unklar, deshalb frage ich nach."
        ],
        why: "Po <i>dass</i> i <i>ob</i> odmieniony czasownik idzie na koniec: <i>nüchtern bleibt</i>, <i>noch gilt</i>. Po <i>deshalb</i> czasownik stoi od razu: <i>deshalb frage ich</i>."
      },
      {
        q: "Wybierz właściwy rodzajnik określony dla każdego rzeczownika.",
        items: ["zlecenie", "wskazanie medyczne", "powód", "pytanie o wyjaśnienie", "dokumentacja pacjenta", "laboratorium"]
      },
      {
        q: "Połącz każde słowo z jego znaczeniem.",
        pairs: ["zlecenie lekarskie", "pytanie o wyjaśnienie", "wskazanie medyczne", "dopytać"]
      },
      {
        q: "Ułóż słowa we właściwej kolejności.",
        tr: "Nie jestem pewien, czy zlecenie jest nadal aktualne.",
        why: "<i>Ich bin nicht sicher, ob die Anordnung noch gilt.</i> Po przecinku <i>ob</i> otwiera zdanie podrzędne, a czasownik <i>gilt</i> idzie na koniec."
      },
      {
        q: "Przetłumacz: «Zlecenie nie jest jasne, dlatego dopytuję.»",
        why: "<i>Die Anordnung ist nicht eindeutig, deshalb frage ich noch einmal nach.</i> Przyjmowane są też <i>unklar</i> albo <i>nicht klar</i>, a zamiast <i>deshalb</i> także <i>darum</i> albo <i>deswegen</i>. Polskie «do-» w «dopytuję» oddaje <i>noch einmal nach</i>; partykuła <i>nach</i> idzie na koniec."
      },
      {
        q: "Prośba o wyjaśnienie.",
        setting: "Masz wątpliwość co do zlecenia dla pani Lang i idziesz do lekarza oddziałowego.",
        lines: [
          { tr: "Chciała pani ze mną rozmawiać?" },
          { tr: "Odpowiedz, że masz pytanie w sprawie zlecenia dla pani Lang.", answerTr: "Tak, mam pytanie w sprawie zlecenia dla pani Lang." },
          { tr: "Co jest niejasne?" },
          { tr: "Odpowiedz, że nie wiesz, czy ma dziś pozostać na czczo.", answerTr: "Nie wiem, czy ma dziś pozostać na czczo." },
          { tr: "Może już jeść. Badanie zostało przełożone." },
          { tr: "Podziękuj i poproś o dopisanie tego w dokumentacji.", answerTr: "Dziękuję. Proszę to jeszcze dopisać w dokumentacji." }
        ]
      },
      {
        tr: "W dokumentacji jest zapisane, że ma dziś pozostać na czczo. Nie jestem pewien, czy to jest nadal aktualne.",
        why: "W <i>nüchtern</i> <b>ü</b> jest krótkie (usta jak do «u», język jak do «i»), a <b>ch</b> po <b>ü</b> to [ç], miękkie jak w polskim «hiena»; w <i>sicher</i> początkowe <b>s</b> jest dźwięczne, [z]; w <i>gilt</i> <b>g</b> jest zawsze twarde."
      },
      {
        tr: "Wolę zapytać raz za dużo, bo nie chcę popełnić błędu.",
        why: "W <i>lieber</i> <b>ie</b> jest długie; w <i>nach</i> <b>ch</b> po <b>a</b> to [x], jak polskie «ch»; w <i>möchte</i> <b>ö</b> jest krótkie, a <b>ch</b> to [ç]; w <i>Fehler</i> <b>e</b> jest długie, a <b>h</b> się nie wymawia."
      }
    ]
  },
  "lesson:pfl-u08-l3": {
    theme: "Zebranie zespołu",
    title: "Zebranie zespołu",
    objectives: [
      "uczestniczyć w zebraniu zespołu i zabierać głos",
      "używać czasowników ze stałym przyimkiem: sich kümmern um, sich erkundigen nach, warten auf, sprechen über",
      "pytać, o czym mowa, za pomocą worum i worauf",
      "nawiązywać do tematu za pomocą darum, darüber, darauf"
    ],
    theory: [
      {
        h: "Kto co robi",
        p: "Na <strong>Teambesprechung</strong> zespół dzieli się zadaniami, omawia trudne przypadki (<em>Fallbesprechung</em>) i układa <em>Dienstplan</em>, czyli grafik dyżurów. Najczęściej powraca zdanie <em>Wer kümmert sich um ...?</em>, «kto się zajmie...?», a odpowiedź, którą bierzesz zadanie, to <em>Ich kümmere mich darum</em> albo prościej <em>Das mache ich.</em> Żeby zabrać głos, nie przerywając: <em>Ich würde gern etwas zu Herrn Wolf sagen.</em>"
      },
      {
        h: "Czasowniki ze stałym przyimkiem",
        p: "Wiele niemieckich czasowników wymaga <strong>stałego przyimka</strong>, którego uczy się razem z czasownikiem, jako całości: <em>sich kümmern <b>um</b></em> + biernik, <em>sich erkundigen <b>nach</b></em> + celownik, <em>warten <b>auf</b></em> + biernik, <em>sprechen <b>über</b></em> + biernik. Pytanie tworzy się z <em>wo(r)</em> + przyimek: <em><b>Worauf</b> wartest du?</em> A żeby nawiązać do czegoś, co już padło, używa się <em>da(r)</em> + przyimek: <em>Ich kümmere mich <b>darum</b>. <b>Darüber</b> sprechen wir am Ende.</em> Przy osobach natomiast zostaje przyimek z zaimkiem: <em>Ich kümmere mich <b>um ihn</b>.</em>"
      },
      {
        contrast: "Polski też ma czasowniki z przyimkiem i przypadkiem, ale rzadko pokrywają się z niemieckimi. Jedna para jest wygodna: «czekać <b>na</b> + biernik» to dokładnie <em>warten <b>auf</b></em> + Akkusativ. Pozostałe są zdradliwe. «Zajmować się» nie ma przyimka, tylko narzędnik («zajmuję się pacjentem»), więc łatwo zgubić <em>um</em>: <em>Ich kümmere mich <b>um</b> den Patienten</em>. «Rozmawiać <b>o</b>» łączy się z miejscownikiem, a <em>sprechen <b>über</b></em> z biernikiem: <em>über <b>den</b> Dienstplan</em>, nie <em>über dem Dienstplan</em>. «Dowiadywać się <b>o</b>» to <em>sich erkundigen <b>nach</b></em> + celownik, nie <em>über</em>. Do tego polskie «tym» zastępuje rzecz już nazwaną («zajmę się tym», «porozmawiamy o tym na końcu»), a niemiecki tworzy formę z <em>da-</em>: <em>Ich kümmere mich <b>darum</b>. Wir sprechen am Ende <b>darüber</b>.</em> Przy osobie <em>da-</em> nie ma: «zajmę się nim» to <em>um ihn</em>, nigdy <em>darum</em>."
      },
      {
        trap: "<em>sich erkundigen</em> i <em>sich kümmern</em> są zwrotne, jak polskie «dowiadywać się» i «zajmować się»: bez <em>sich</em> zdanie jest błędne (<em>Ich kümmere <b>mich</b> um ihn</em>, a nie <em>Ich kümmere um ihn</em>). Uwaga: niemieckie <em>sich</em> zmienia się z osobą (<em>mich, dich, uns</em>), a polskie «się» zostaje takie samo. <em>erkundigen</em> ma nierozdzielny przedrostek <em>er-</em>, więc imiesłów nie ma <em>ge-</em>: <em>hat sich erkundigt</em>. A gdy rodzina pyta o wynik badania, odpowiedzią nie jest wynik: na zebraniu ustala się, kto powiadomi lekarza, bo rozmowa o rozpoznaniu należy do niego."
      },
      {
        tip: "Ucz się czasowników z przyimkiem i przypadkiem od razu w zdaniu z oddziału: <em>Ich kümmere mich um Zimmer acht. Ich warte auf den Befund. Wir sprechen über den Dienstplan.</em> Trzy takie zdania powtarzane na głos dają więcej niż lista przyimków do wykucia."
      }
    ],
    grammar: {
      title: "Czasowniki ze stałym przyimkiem",
      note: "Czasownika uczy się razem z jego <b>przyimkiem</b> i <b>przypadkiem</b>. Pytanie: <b>wo(r)</b> + przyimek. Nawiązanie do rzeczy: <b>da(r)</b> + przyimek. Przy osobach: przyimek + zaimek.",
      table: {
        head: ["czasownik", "przypadek", "pytanie", "nawiązanie"],
        rows: [
          ["sich kümmern um", "biernik (Akkusativ)", "Worum kümmerst du dich?", "Ich kümmere mich darum."],
          ["sich erkundigen nach", "celownik (Dativ)", "Wonach hat sie sich erkundigt?", "Sie hat sich danach erkundigt."],
          ["warten auf", "biernik (Akkusativ)", "Worauf wartest du?", "Ich warte darauf."],
          ["sprechen über", "biernik (Akkusativ)", "Worüber sprechen wir?", "Darüber sprechen wir am Ende."]
        ]
      },
      examples: [
        { tr: "Kto się dziś zajmuje salą numer osiem?", note: "sich kümmern um + biernik; po polsku narzędnik bez przyimka" },
        { tr: "Ja się zajmę nowym przyjęciem.", note: "um die Neuaufnahme: biernik rodzaju żeńskiego" },
        { tr: "Dziś rozmawiamy o grafiku dyżurów.", note: "sprechen über + biernik: über den Dienstplan, a nie miejscownik" },
        { tr: "Córka dowiadywała się o wynik badania.", note: "sich erkundigen nach + celownik: nach dem Befund; erkundigt bez ge-" },
        { tr: "Wciąż czekam na list lekarski.", note: "warten auf + biernik: auf den Arztbrief, jak polskie «czekać na»" },
        { tr: "Porozmawiamy o tym na końcu.", note: "darüber nawiązuje do tematu, który już padł, jak polskie «o tym»" }
      ]
    },
    vocab: [
      "zebranie zespołu, odprawa",
      "grafik dyżurów",
      "zajmować się (kimś, czymś)",
      "dowiadywać się o, pytać o",
      "rozmawiać o",
      "czekać na",
      "skarżyć się na",
      "nowe przyjęcie, nowo przyjęty pacjent",
      "omówienie przypadku",
      "propozycja",
      "zgadzać się (na coś), być za",
      "pielęgniarka oddziałowa"
    ],
    dialogue: [
      "Dziś rozmawiamy o dwóch sprawach: o grafiku dyżurów i o panu Wolfie.",
      "Chciałabym najpierw powiedzieć coś o panu Wolfie.",
      "Proszę.",
      "Wczoraj jego córka pytała o wynik badania. Powiedziałam jej, że porozmawia z nią o tym lekarz.",
      "Ja dopilnuję, żeby lekarz dziś do niej zadzwonił.",
      "Dobrze. A kto się zajmie popołudniowym przyjęciem?",
      "Ja to wezmę. Ale wciąż czekam na list lekarski.",
      "W porządku. O grafiku porozmawiamy na końcu."
    ],
    culture: {
      title: "Po niemiecku: Stationsleitung i Dienstplan",
      text: "<p><i>Stationsleitung</i> odpowiada mniej więcej polskiej pielęgniarce oddziałowej: organizuje personel, przygotowuje <i>Dienstplan</i> i zwykle prowadzi zebranie zespołu. Grafik publikuje się z wyprzedzeniem, a prośby o wolne dni (<i>Wunschfrei</i>) zgłasza się do terminu wyznaczonego przez oddział.</p><p>Na zebraniu koleżanki i koledzy często mówią sobie <i>du</i>, czyli na ty, a z kierownictwem i lekarzami na wielu oddziałach zostaje się przy <i>Sie</i>, odpowiedniku «pan, pani». Jeśli nie masz pewności, posłuchaj, jak zwracają się do siebie inni, albo zapytaj: <i>Duzen wir uns?</i></p>"
    },
    exercises: [
      {
        q: "Uzupełnij: «Ich kümmere mich ___ die Neuaufnahme.»",
        opts: ["um", "für", "auf"],
        why: "<i>sich kümmern</i> zawsze wymaga <b>um</b> + biernik. Polskie «zajmować się» nie ma przyimka, więc łatwo wstawić przypadkowe <i>für</i>; <i>auf</i> należy do <i>warten auf</i>."
      },
      {
        tr: "Czas teraźniejszy czasownika sich kümmern we wszystkich osobach.",
        why: "<i>Kümmere mich, kümmerst dich, kümmert sich, kümmern uns, kümmert euch, kümmern sich</i>: zaimek zwrotny zmienia się z osobą, inaczej niż polskie «się». W pierwszej osobie liczby pojedynczej <b>e</b> przed <b>r</b> zostaje: <i>kümmere</i>."
      },
      {
        q: "Uzupełnij: «Wir warten noch ___ den Befund.»",
        hint: "przyimek przy warten",
        why: "<b>auf</b>: <i>warten auf</i> + biernik, dokładnie jak polskie «czekać na» + biernik. Tu polski prowadzi we właściwą stronę."
      },
      {
        q: "Uzupełnij zdanie.",
        tr: "Córka dowiadywała się o wynik badania.",
        why: "<i>sich erkundigen <b>nach</b></i> + celownik: <i>nach dem Befund</i>, mimo polskiego «o». Imiesłów <i><b>erkundigt</b></i> nie ma <i>ge-</i>, bo <i>er-</i> jest przedrostkiem nierozdzielnym."
      },
      {
        q: "Które zdania są poprawne?",
        opts: [
          "Wer kümmert sich um Zimmer acht?",
          "Wer kümmert sich für Zimmer acht?",
          "Wir sprechen über den Dienstplan.",
          "Er hat sich nach seinem Befund erkundigt.",
          "Wir warten noch für die Laborwerte."
        ],
        why: "Stałe przyimki to <i>kümmern <b>um</b></i>, <i>sprechen <b>über</b></i>, <i>erkundigen <b>nach</b></i>, <i>warten <b>auf</b></i>. <i>für</i> nie pasuje do żadnego z tych czasowników."
      },
      {
        q: "Wybierz właściwy rodzajnik określony dla każdego rzeczownika.",
        items: ["zebranie zespołu", "grafik dyżurów", "nowe przyjęcie", "omówienie przypadku", "propozycja", "pielęgniarka oddziałowa"]
      },
      {
        q: "Połącz każdy czasownik z jego znaczeniem.",
        pairs: ["zajmować się", "dowiadywać się o", "czekać na", "rozmawiać o"]
      },
      {
        q: "Ułóż słowa we właściwej kolejności.",
        tr: "Kto się zajmie nowym przyjęciem?",
        why: "<i>Wer kümmert sich um die Neuaufnahme?</i> <i>Wer</i> jest podmiotem, czasownik stoi zaraz po nim, potem zaimek zwrotny <i>sich</i>, a na końcu przyimek z dopełnieniem."
      },
      {
        q: "Przetłumacz: «Jutro rozmawiamy o grafiku dyżurów.»",
        why: "<i>Morgen sprechen wir über den Dienstplan</i> albo <i>Wir sprechen morgen über den Dienstplan</i>. «Rozmawiać o» to <i>sprechen über</i> + biernik, więc <i>den Dienstplan</i>, a nie <i>dem</i>; przyjmowane jest też <i>reden über</i>."
      },
      {
        q: "Na zebraniu zespołu.",
        setting: "Pielęgniarka oddziałowa rozdziela zadania. Ty opiekujesz się panem Wolfem.",
        lines: [
          { tr: "Kto się dziś zajmuje panem Wolfem?" },
          { tr: "Odpowiedz, że ty się nim zajmiesz.", answerTr: "Ja się nim zajmę." },
          { tr: "Czy ktoś o niego pytał?" },
          { tr: "Odpowiedz, że wczoraj pytała o niego jego córka.", answerTr: "Tak, wczoraj pytała o niego jego córka." },
          { tr: "Na co jeszcze czekasz?" },
          { tr: "Odpowiedz, że wciąż czekasz na list lekarski.", answerTr: "Wciąż czekam na list lekarski." }
        ]
      },
      {
        tr: "Córka dowiadywała się o wynik badania.",
        why: "W <i>Tochter</i> <b>ch</b> po <b>o</b> to [x], jak polskie «ch»; w <i>erkundigt</i> akcent pada na <b>kun</b>, a <b>g</b> przed <b>t</b> wymawia się [ç]; w <i>Befund</i> końcowe <b>d</b> wymawia się [t]."
      },
      {
        tr: "Ja się zajmę nowym przyjęciem.",
        why: "W <i>kümmere</i> <b>ü</b> jest krótkie; w <i>Neuaufnahme</i> są dwa dwugłoski, <b>eu</b> [ɔʏ], podobne do «oj», i <b>au</b> [aʊ], podobne do «ał», a akcent pada na <b>Neu</b>."
      }
    ]
  },
  "lesson:pfl-u08-l4": {
    theme: "Przez telefon",
    title: "Przez telefon: laboratorium, apteka, lekarz rodzinny",
    objectives: [
      "przedstawić się przez telefon i powiedzieć, z którego oddziału się dzwoni",
      "grzecznie prosić: hätte, könnten, wäre es möglich, würden",
      "poprosić o powtórzenie i o przeliterowanie nazwiska",
      "powtórzyć otrzymane dane, żeby je sprawdzić"
    ],
    theory: [
      {
        h: "Telefon z oddziału",
        p: "Przez telefon zaczyna się od tego, kto dzwoni i skąd: <em>Guten Tag, hier ist Station drei.</em> Potem mówi się, w sprawie kogo (<em>Um Herrn Wolf, Zimmer fünf</em>) i czego się chce. Osoba, która odbiera, podaje zwykle dział i nazwisko: <em>Labor, Schneider, guten Tag.</em> Na koniec powtarza się ważne dane: <em>Ich wiederhole: ...</em> Wynik laboratoryjny przekazany przez telefon zapisuje się od razu, powtarza, żeby go sprawdzić, a jeśli jest poza normą, przekazuje się go lekarzowi."
      },
      {
        h: "Grzecznościowy Konjunktiv II",
        p: "Żeby o coś grzecznie poprosić, niemiecki używa <strong>Konjunktiv II</strong>, odpowiednika trybu przypuszczającego. Cztery zwroty wystarczą prawie na każdą rozmowę: <em>Ich <b>hätte</b> eine Frage zu ...</em> (miałabym pytanie), <em><b>Könnten</b> Sie mir ... durchgeben?</em> (czy mógłby pan...?), <em><b>Wäre</b> es möglich, ... zu schicken?</em> (czy byłoby możliwe...?), <em><b>Würden</b> Sie mich bitte zurückrufen?</em> (czy oddzwoniłby pan?). Przy życzeniu: <em>Ich <b>würde</b> gern mit Doktor Becker sprechen.</em> Po <em>Wäre es möglich</em> bezokolicznik z <em>zu</em> idzie na koniec: <em>den Befund heute noch <b>zu schicken</b></em>."
      },
      {
        contrast: "Tryb przypuszczający znasz z polskiego: «miałabym pytanie», «czy mógłby pan», «czy byłoby możliwe». Różnice są dwie. Po pierwsze, polski tworzy go z każdego czasownika tak samo, przez «-by» («oddzwoniłby pan?», «przesłałaby pani?»); niemiecki ma krótkie, żywe formy tylko dla kilku częstych czasowników (<em>hätte, wäre, könnte, würde</em>), a resztę buduje z <em>würde</em> + bezokolicznik: <em>Würden Sie mich zurückrufen?</em> Po drugie, inaczej działa grzeczność bez trybu. Polskie «proszę mi podać wyniki» jest uprzejme, bo niesie je «proszę»; niemieckie <em>Geben Sie mir bitte die Werte</em> przez telefon brzmi jak polecenie mimo <em>bitte</em>, a <em>Sie können mir die Werte durchgeben</em> jak pozwolenie, którego udzielasz. Wersja grzeczna prawie zawsze idzie przez <em>könnten</em> albo <em>würden</em>."
      },
      {
        trap: "Nie myl <em>hätte</em> (miałabym) z <em>hatte</em> (miałam): różnicę robi tylko Umlaut, a przez telefon słychać ją w samogłosce, [ɛ] zamiast [a]. Tak samo <em>wäre</em> (byłoby) i <em>war</em> (było). <em>durchgeben</em> jest rozdzielny: <em>Könnten Sie mir die Werte <b>durchgeben</b>?</em>, ale <em>Das Labor <b>gibt</b> die Werte <b>durch</b>.</em>"
      },
      {
        tip: "Przez telefon nazwiska literuje się niemieckim alfabetem telefonicznym: <em>W wie Wilhelm, O wie Otto</em>. Liczby podaje się cyfra po cyfrze: <em>zwei, drei, vier, fünf</em>, a nie <em>dreiundzwanzig, fünfundvierzig</em>, bo niemiecki mówi jedności przed dziesiątkami (<em>drei-und-zwanzig</em>, «trzy i dwadzieścia»), odwrotnie niż polski, i właśnie tam najłatwiej o pomyłkę. Gdy dostajesz dane, zawsze je powtórz: <em>Ich wiederhole: ...</em>"
      }
    ],
    grammar: {
      title: "Zwroty grzecznościowe przez telefon",
      note: "<b>hätte, wäre, könnte</b> to własne formy Konjunktiv II. Przy prawie wszystkich innych czasownikach: <b>würde</b> + bezokolicznik na końcu. Po <b>Wäre es möglich</b>: bezokolicznik z <b>zu</b> na końcu.",
      table: {
        head: ["zwrot", "znaczenie", "przykład"],
        rows: [
          ["Ich hätte ...", "miałabym, czyli: mam", "Ich hätte eine Frage zu einem Medikament."],
          ["Könnten Sie ...?", "czy mógłby pan / mogłaby pani...?", "Könnten Sie mir die Laborwerte durchgeben?"],
          ["Wäre es möglich, ... zu ...?", "czy byłoby możliwe...?", "Wäre es möglich, den Befund heute noch zu schicken?"],
          ["Würden Sie ...?", "+ bezokolicznik: tryb przypuszczający innych czasowników", "Würden Sie mich bitte zurückrufen?"],
          ["Ich würde gern ...", "chciałabym", "Ich würde gern mit Doktor Becker sprechen."]
        ]
      },
      examples: [
        { tr: "Miałabym pytanie w sprawie leku.", note: "hätte: grzecznościowa forma haben" },
        { tr: "Czy mogłaby pani przekazać mi wyniki laboratoryjne pana Wolfa?", note: "könnten + durchgeben na końcu" },
        { tr: "Czy byłoby możliwe przesłanie wyniku jeszcze dziś?", note: "Wäre es möglich + bezokolicznik z zu na końcu" },
        { tr: "Czy oddzwoniłby pan, proszę?", note: "würden + bezokolicznik: zurückrufen na końcu" },
        { tr: "Chciałabym porozmawiać z doktorem Beckerem.", note: "würde gern + bezokolicznik" },
        { tr: "Powtarzam: sala numer pięć, pan Wolf.", note: "powtórzenie danych, żeby je sprawdzić" }
      ]
    },
    vocab: [
      "laboratorium",
      "apteka",
      "lekarz rodzinny, lekarz POZ",
      "wynik badania laboratoryjnego",
      "numer wewnętrzny",
      "oddzwonienie",
      "przekazać (telefonicznie)",
      "oddzwonić",
      "osiągalny, dostępny pod telefonem",
      "przeliterować",
      "połączyć (rozmowę)",
      "dostarczyć"
    ],
    dialogue: [
      "Laboratorium, Schneider, dzień dobry.",
      "Dzień dobry, tu oddział trzeci. Miałabym pytanie w sprawie morfologii.",
      "O którego pacjenta chodzi?",
      "O pana Wolfa, sala numer pięć. Czy mogłaby pani powiedzieć, czy wyniki są już gotowe?",
      "Wyniki są prawie gotowe. Prześlę je za dziesięć minut.",
      "Czy byłoby możliwe, żeby pani zadzwoniła, jeśli któryś wynik będzie poza normą?",
      "Tak, oczywiście. Jaki jest pani numer wewnętrzny?",
      "Dwa, trzy, cztery, pięć. Powtarzam: zadzwoni pani, jeśli któryś wynik będzie poza normą. Bardzo dziękuję."
    ],
    culture: {
      title: "Po niemiecku: apteka szpitalna i lekarz rodzinny",
      text: "<p>W niemieckich szpitalach leki pochodzą zwykle z <i>Krankenhausapotheke</i>, czyli apteki szpitalnej, albo z zewnętrznej apteki, z którą szpital ma umowę. Zamówienia składa się w stałych godzinach; gdy brakuje leku, dzwoni się i pyta, czy możliwa jest dostawa poza kolejnością.</p><p><i>Hausarzt</i> to lekarz rodzinny. Oddział dzwoni do niego na przykład po to, żeby zapytać, jakie leki pacjent brał w domu, albo żeby przygotować wypis. Co wolno powiedzieć przez telefon, określa ochrona danych: zanim podasz informacje o pacjencie, sprawdź, kto jest po drugiej stronie.</p>"
    },
    exercises: [
      {
        q: "Dzwonisz do laboratorium po wyniki pacjenta. Które zdanie jest grzeczne?",
        opts: ["Geben Sie mir die Werte!", "Könnten Sie mir bitte die Werte durchgeben?", "Sie können mir die Werte durchgeben."],
        why: "<b>Könnten Sie ...?</b> w Konjunktiv II to grzeczna prośba. Tryb rozkazujący brzmi jak polecenie, a <i>Sie können</i> tak, jakbyś to ty udzielała pozwolenia."
      },
      {
        tr: "Konjunktiv II czasownika können we wszystkich osobach.",
        why: "<i>Könnte, könntest, könnte, könnten, könntet, könnten</i>: rdzeń dostaje Umlaut (<b>ö</b>), a końcówki są takie jak w Präteritum. Przez telefon najbardziej przydaje się <i>Könnten Sie ...?</i>"
      },
      {
        q: "Uzupełnij: «Ich ___ eine Frage zu einem Medikament.»",
        hint: "Konjunktiv II od haben",
        why: "<b>hätte</b>: grzecznościowa forma <i>haben</i>, «miałabym». Uwaga na Umlaut: <i>hatte</i> bez Umlautu to Präteritum, «miałam»."
      },
      {
        q: "Uzupełnij zdanie.",
        tr: "Czy oddzwoniłby pan, proszę?",
        why: "<i><b>Würden</b> Sie mich bitte <b>zurückrufen</b>?</i>: Konjunktiv II z <i>würden</i> i bezokolicznikiem na końcu. Przyjmowane jest też <i>Könnten</i>. W bezokoliczniku <i>zurückrufen</i> pisze się łącznie."
      },
      {
        q: "Które zdania są poprawne?",
        opts: [
          "Ich hätte eine Frage zur Lieferung.",
          "Ich habe gern eine Frage.",
          "Wäre es möglich, den Befund heute noch zu schicken?",
          "Ich würde gern mit Doktor Becker sprechen.",
          "Ich würde gern mit Doktor Becker zu sprechen."
        ],
        why: "<i>hätte</i> to poprawna forma grzecznościowa; <i>gern</i> łączy się z <i>würde</i>, a nie z <i>habe eine Frage</i>. Po <i>Wäre es möglich</i> potrzebne jest <i>zu</i>; po <i>würde gern</i> bezokolicznik stoi bez <i>zu</i>."
      },
      {
        q: "Wybierz właściwy rodzajnik określony dla każdego rzeczownika.",
        items: ["laboratorium", "apteka", "lekarz rodzinny", "wynik laboratoryjny", "numer wewnętrzny", "oddzwonienie"]
      },
      {
        q: "Połącz każdy czasownik z jego znaczeniem.",
        pairs: ["przekazać (telefonicznie)", "oddzwonić", "przeliterować", "połączyć rozmowę"]
      },
      {
        q: "Ułóż słowa we właściwej kolejności.",
        tr: "Miałabym pytanie w sprawie morfologii.",
        why: "<i>Ich hätte eine Frage zu einem Blutbild.</i> Czasownik <i>hätte</i> na drugim miejscu; «w sprawie» to tutaj <i>zu</i> + celownik: <i>zu einem Blutbild</i>. Przyjmowane jest też <i>Ich hätte zu einem Blutbild eine Frage</i>."
      },
      {
        q: "Przetłumacz: «Czy mógłby pan oddzwonić za dziesięć minut?»",
        why: "<i>Könnten Sie mich in zehn Minuten zurückrufen?</i> Przyjmowane jest też <i>Würden Sie mich ... zurückrufen?</i>, z <i>bitte</i> albo bez. «Za dziesięć minut» to <i>in zehn Minuten</i>, a nie <i>für</i> ani <i>nach zehn Minuten</i>."
      },
      {
        q: "Telefon do apteki.",
        setting: "Lek dla sali numer pięć nie dotarł. Dzwonisz do apteki szpitalnej.",
        lines: [
          { tr: "Apteka, dzień dobry." },
          { tr: "Powiedz, z którego oddziału dzwonisz i że miałabyś pytanie w sprawie dostawy.", answerTr: "Dzień dobry, tu oddział trzeci. Miałabym pytanie w sprawie dostawy." },
          { tr: "O co dokładnie chodzi?" },
          { tr: "Wyjaśnij, że lek dla sali numer pięć jeszcze nie dotarł, i zapytaj, czy można go dostarczyć dzisiaj.", answerTr: "Lek dla sali numer pięć jeszcze nie dotarł. Czy byłoby możliwe dostarczenie go jeszcze dziś?" },
          { tr: "Sprawdzę i oddzwonię." },
          { tr: "Podziękuj i podaj swój numer wewnętrzny.", answerTr: "Dziękuję. Mój numer wewnętrzny to dwa, trzy, cztery, pięć." }
        ]
      },
      {
        tr: "Czy byłoby możliwe, żeby pani zadzwoniła, jeśli któryś wynik będzie poza normą?",
        why: "W <i>wäre</i> <b>ä</b> jest długie, [ɛː], jak przeciągnięte polskie «e»; w <i>möglich</i> <b>ö</b> jest długie, a końcowe <b>ch</b> to [ç]; w <i>auffällig</i> akcent pada na <b>auf</b>."
      },
      {
        tr: "Miałabym pytanie w sprawie leku.",
        why: "W <i>hätte</i> <b>ä</b> jest krótkie i od <i>hatte</i> różni się tylko samogłoską; w <i>Medikament</i> akcent pada na ostatnią sylabę, <b>ment</b>, a nie na przedostatnią, jak w polskim «medykament»."
      }
    ]
  },
  "lesson:pfl-u08-test": {
    theme: "Sprawdzian",
    title: "Test: Obchód, zlecenia lekarskie i zespół",
    objectives: [
      "sprawdzić stronę bierną na obchodzie, dass i ob przy zleceniach, czasowniki z przyimkiem i Konjunktiv II przez telefon"
    ],
    theory: [
      {
        p: "Jedenaście pytań z całej jednostki. Aby zaliczyć, potrzeba 70%. Pacjenci i sytuacje są zmyślone i służą wyłącznie jako przykład: sposób wykonywania i dokumentowania zleceń określają zasady placówki. Niejasne zlecenie zawsze wyjaśnia się z lekarzem."
      }
    ],
    exercises: [
      {
        q: "Zlecenie wydaje ci się nietypowe. Co robisz?",
        opts: ["Ich führe die Anordnung trotzdem aus.", "Ich frage noch einmal bei der Ärztin nach.", "Ich ändere die Anordnung selbst."],
        why: "Nietypowe zlecenie wyjaśnia się z lekarzem przed wykonaniem: <b>Ich frage noch einmal bei der Ärztin nach</b>. Wykonanie go mimo wszystko albo samodzielna zmiana nie są bezpieczne."
      },
      {
        q: "Uzupełnij: «Der Verband ___ morgen gewechselt.»",
        hint: "strona bierna, czas teraźniejszy",
        why: "<b>wird</b>: strona bierna w czasie teraźniejszym, odmienione <i>werden</i> + imiesłów <i>gewechselt</i> na końcu. Choć po polsku powiesz «zostanie zmieniony», nie ma tu czasu przyszłego."
      },
      {
        tr: "Konjunktiv II czasownika haben we wszystkich osobach.",
        why: "<i>Hätte, hättest, hätte, hätten, hättet, hätten</i>: jak Präteritum <i>hatte</i>, ale z Umlautem <b>ä</b>."
      },
      {
        q: "Połącz każde słowo z jego znaczeniem.",
        pairs: ["obchód", "pytanie o wyjaśnienie", "grafik dyżurów", "numer wewnętrzny"]
      },
      {
        q: "Które zdania są poprawne?",
        opts: [
          "Die Therapie wird fortgesetzt.",
          "Ich warte noch für den Befund.",
          "Könnten Sie mich bitte zurückrufen?",
          "Ich bin nicht sicher, ob die Anordnung gilt noch.",
          "Die Tochter hat sich nach dem Befund erkundigt."
        ],
        why: "<i>warten</i> wymaga <i>auf</i>, a nie <i>für</i>, tak jak «czekać na». Po <i>ob</i> czasownik idzie na koniec: <i>ob die Anordnung noch gilt</i>."
      },
      {
        q: "Uzupełnij zdanie.",
        tr: "W dokumentacji jest zapisane, że dziś trzeba pobrać krew na morfologię.",
        why: "<i><b>dass</b></i> relacjonuje to, co jest zapisane; w zdaniu podrzędnym strona bierna kończy się na <i>abgenommen <b>wird</b></i>."
      },
      {
        q: "Ułóż słowa we właściwej kolejności.",
        tr: "Wciąż czekamy na wyniki laboratoryjne.",
        why: "<i>Wir warten noch auf die Laborwerte.</i> <i>warten auf</i> + biernik; <i>noch</i> stoi przed przyimkiem."
      },
      {
        q: "Wybierz właściwy rodzajnik określony dla każdego rzeczownika.",
        items: ["obchód", "zlecenie", "wynik badania", "morfologia krwi", "grafik dyżurów", "laboratorium"]
      },
      {
        q: "Przetłumacz: «Jutro zmienia się opatrunek.»",
        why: "<i>Morgen wird der Verband gewechselt</i> albo <i>Der Verband wird morgen gewechselt</i>: strona bierna w czasie teraźniejszym z <i>wird</i> i imiesłowem na końcu."
      },
      {
        tr: "Leczenie jest kontynuowane jak dotychczas.",
        why: "W <i>Therapie</i> akcent pada na <b>pie</b>; w <i>bisher</i> akcent pada na <b>her</b>; w <i>fortgesetzt</i> akcent pada na <b>fort</b>."
      },
      {
        tr: "Czy byłoby możliwe, żeby pani zadzwoniła, jeśli któryś wynik będzie poza normą?",
        why: "W <i>wäre</i> <b>ä</b> jest długie; w <i>anzurufen</i> <i>zu</i> wchodzi między przedrostek <i>an</i> a czasownik; w <i>Wert</i> <b>w</b> to [v], a <b>e</b> jest długie."
      }
    ]
  }
});
