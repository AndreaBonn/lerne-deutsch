/* ============================================================
   Teksty w języku ucznia (pl) dla data/core/pfl-06.js, jednostka pfl-u06.
   Klucze wskazują id w warstwie neutralnej; tablice łączą się
   po indeksie, więc ich długość musi zgadzać się z core.
   Sprawdzane przez scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("pl", {
  "unit:pfl-u06": {
    title: "Raport i dokumentacja pielęgniarska",
    grammarNote: "Präteritum w raporcie ustnym i pisemnym · spójniki deshalb, trotzdem, außerdem, weil · styl nominalny dokumentacji · strona bierna w Präteritum · zdania celowe z damit i um ... zu · skróty na oddziale"
  },
  "lesson:pfl-u06-l1": {
    theme: "Raport ustny",
    title: "Przekazanie dyżuru",
    objectives: [
      "zdać i przyjąć raport ustny przy zmianie dyżuru",
      "opowiedzieć o nocy za pomocą war, hatte, konnte, wollte",
      "łączyć fakty spójnikami deshalb, trotzdem, außerdem i weil",
      "zapytać koleżankę, czy jest coś jeszcze do przekazania"
    ],
    theory: [
      {
        h: "Co się mówi w raporcie",
        p: "Podczas <strong>Übergabe</strong> osoba schodząca z dyżuru przekazuje osobie, która go obejmuje, to, co jest potrzebne na zmianę: jak minęła noc albo popołudnie, co się zmieniło, co zostało zrobione i co zostało do zrobienia. Idzie się salą po sali i pacjent po pacjencie: <em>Fangen wir mit Zimmer zwölf an?</em> Przekazuje się obserwacje i fakty, nie wrażenia: <em>Sie war unruhig. Gegen drei Uhr hatte sie Bauchschmerzen.</em> Na koniec osoba przyjmująca pyta: <em>Gibt es sonst noch Besonderheiten?</em>"
      },
      {
        h: "Präteritum i spójniki",
        p: "Także w mowie <em>sein</em>, <em>haben</em> i czasowniki modalne stoją prawie zawsze w <strong>Präteritum</strong>: <em>war, hatte, konnte, wollte, musste</em>. Pozostałe czasowniki w mowie często idą w Perfekt: <em>Ich habe die Ärztin informiert.</em> Spójniki <em>deshalb</em> (dlatego), <em>trotzdem</em> (mimo to), <em>außerdem</em> (poza tym) zajmują pierwsze miejsce w zdaniu, więc odmieniony czasownik stoi zaraz po nich: <em>deshalb <b>habe</b> ich</em>, <em>trotzdem <b>fühlte</b> sie sich wohl</em>. Natomiast <em>weil</em> otwiera zdanie podrzędne i czasownik idzie na koniec: <em>weil er Schmerzen <b>hatte</b></em>."
      },
      {
        contrast: "Polski raport pielęgniarski opowiada noc jednym czasem przeszłym, a różnicę niesie <strong>aspekt</strong>: «była niespokojna, miała bóle brzucha, wezwałam lekarza dyżurnego». Niemiecki aspektu nie ma. <em>War</em> i <em>hatte</em> obejmują zarówno stan trwający («była niespokojna»), jak i zamknięty, a to, czy czynność się zakończyła, wynika z kontekstu. Zamiast aspektu niemiecki ma <strong>dwa czasy</strong>, wybierane według czasownika i sytuacji: <em>war, hatte, konnte</em> w Präteritum brzmią naturalnie także w mowie, a <em>ist gewesen</em> czy <em>hat gehabt</em> w raporcie brzmią ciężko; inne czasowniki w mowie zostają w Perfekt (<em>ich habe informiert</em>), a w raporcie pisemnym przechodzą w Präteritum (<em>Die Ärztin kam</em>). Nie szukaj więc w «wezwałam» i «wzywałam» dwóch różnych form niemieckich: obie to <em>ich habe gerufen</em>. Uwaga też na szyk: polskie «dlatego zadzwoniłam» niczego nie przestawia, a w niemieckim <em>deshalb</em> zajmuje pierwsze miejsce i czasownik stoi tuż za nim: <em>deshalb habe ich angerufen</em>, nigdy <em>deshalb ich habe</em>."
      },
      {
        trap: "<em>übergeben</em> znaczy «przekazać», ale <em>sich übergeben</em> znaczy «wymiotować»: <em>Ich übergebe dir Zimmer zwölf</em> to przekazanie dyżuru, <em>Die Patientin hat sich übergeben</em> to obserwacja do zgłoszenia. Przedrostek <em>über-</em> się tu nie odrywa: <em>ich übergebe</em>, w Perfekt <em>ich habe übergeben</em>, bez <em>ge-</em> na początku. A <em>stabil</em> opisuje stałe wartości i stan, nie ocenia pacjenta jako człowieka."
      },
      {
        tip: "Przygotuj raport w tej samej kolejności dla każdego pacjenta: jak minął dyżur, wartości poza normą, co zrobiłaś, kogo powiadomiłaś, co zostało do zrobienia. Stały schemat pozwala znaleźć słowa nawet wtedy, gdy pod koniec nocy jesteś zmęczona, a słuchający wie, gdzie szukać informacji."
      }
    ],
    grammar: {
      title: "Spójniki i miejsce czasownika",
      note: "<b>deshalb, trotzdem, außerdem</b> zajmują pierwsze miejsce: odmieniony czasownik stoi zaraz za nimi. <b>weil</b> otwiera zdanie podrzędne: odmieniony czasownik idzie na koniec.",
      table: {
        head: ["spójnik", "znaczenie", "przykład"],
        rows: [
          ["deshalb", "dlatego", "Sie hatte Schmerzen, deshalb habe ich die Ärztin informiert."],
          ["trotzdem", "mimo to", "Der Blutdruck war erhöht, trotzdem fühlte sie sich wohl."],
          ["außerdem", "poza tym, ponadto", "Außerdem wollte er nichts essen."],
          ["weil", "ponieważ, bo", "Er konnte nicht schlafen, weil er Schmerzen hatte."]
        ]
      },
      examples: [
        { tr: "Pani Keller była w nocy niespokojna.", note: "sein w Präteritum: war, naturalne także w mowie" },
        { tr: "Około trzeciej bolał ją brzuch, dlatego powiadomiłam lekarkę.", note: "deshalb na pierwszym miejscu, zaraz za nim czasownik: habe" },
        { tr: "Pan Brandt nie mógł spać, bo miał bóle.", note: "weil: odmieniony czasownik hatte idzie na koniec" },
        { tr: "Wieczorem ciśnienie było podwyższone, mimo to czuła się dobrze.", note: "trotzdem na pierwszym miejscu, potem fühlte" },
        { tr: "Poza tym nie chciał nic jeść.", note: "außerdem na pierwszym miejscu, potem wollte" },
        { tr: "Noc minęła spokojnie.", note: "verlaufen, w Präteritum verlief: typowe dla raportów" }
      ]
    },
    vocab: [
      "przekazanie dyżuru, raport (między zmianami)",
      "dyżur ranny, ranna zmiana",
      "dyżur popołudniowy",
      "dyżur nocny",
      "przekazać, zdać (dyżur)",
      "niespokojny",
      "szczególna uwaga, coś do przekazania",
      "stan",
      "stabilny",
      "dlatego",
      "mimo to",
      "poza tym, ponadto"
    ],
    dialogue: [
      "Dzień dobry. Zaczniemy od sali dwanaście?",
      "Tak, chętnie. Jak minęła noc u pani Keller?",
      "Pani Keller była niespokojna. Około trzeciej bolał ją brzuch, dlatego powiadomiłam lekarkę dyżurną.",
      "I co dalej?",
      "Lekarka przyszła i ją zbadała. Potem pani Keller znowu zasnęła.",
      "Jest coś jeszcze do przekazania?",
      "Mało piła. Poza tym wieczorem ciśnienie było podwyższone, mimo to czuła się dobrze.",
      "Dobrze, to zaraz zmierzę jej jeszcze raz ciśnienie."
    ],
    culture: {
      title: "Niemieckie spojrzenie: raport przy łóżku pacjenta",
      text: "<p>Na wielu niemieckich oddziałach <i>Dienstübergabe</i> odbywa się w dyżurce, na innych częściowo przy łóżku pacjenta: to <i>Übergabe am Bett</i>. Przy łóżku pacjent może coś poprawić albo dodać, ale obok jest też sąsiad z sali i rodzina: informacje delikatne mówi się na zewnątrz, cicho albo w dyżurce.</p><p>Zmiany zwykle nazywają się <i>Frühdienst</i>, <i>Spätdienst</i> i <i>Nachtdienst</i>, a godziny różnią się w zależności od placówki. Nowa osoba znajdzie je w <i>Dienstplan</i>, czyli grafiku dyżurów.</p>"
    },
    exercises: [
      {
        q: "W raporcie mówisz, że pacjentka była w nocy niespokojna. Które zdanie jest poprawne?",
        opts: [
          "Frau Keller hatte in der Nacht unruhig.",
          "Frau Keller war in der Nacht unruhig.",
          "Frau Keller ist in der Nacht unruhig gewesen sein."
        ],
        why: "Z przymiotnikiem takim jak <i>unruhig</i> potrzebne jest <b>sein</b>, a w raporcie używa się Präteritum: <b>war</b>. <i>hatte unruhig</i> nie istnieje, a <i>ist gewesen sein</i> to forma błędna."
      },
      {
        tr: "Präteritum czasownika schlafen we wszystkich osobach.",
        why: "<i>Schlief, schliefst, schlief, schliefen, schlieft, schliefen</i>: czasownik mocny, samogłoska zmienia się w <b>ie</b>, a pierwsza i trzecia osoba liczby pojedynczej nie mają końcówki."
      },
      {
        q: "Uzupełnij: «Sie hatte Schmerzen, ___ habe ich die Ärztin informiert.»",
        hint: "spójnik: dlatego",
        why: "<b>deshalb</b> (także <i>darum</i>, <i>daher</i>, <i>deswegen</i>): wyraża skutek i zajmuje pierwsze miejsce, dlatego czasownik <i>habe</i> stoi zaraz za nim."
      },
      {
        q: "Uzupełnij zdanie.",
        tr: "Wieczorem ciśnienie było podwyższone, mimo to czuła się dobrze.",
        why: "<i>Der Blutdruck <b>war</b> am Abend erhöht</i>: sein w Präteritum. <i><b>trotzdem</b> fühlte sie sich wohl</i>: spójnik zajmuje pierwsze miejsce, a czasownik stoi zaraz za nim."
      },
      {
        q: "Które zdania są poprawne?",
        opts: [
          "Er hatte Schmerzen, deshalb konnte er nicht schlafen.",
          "Er hatte Schmerzen, deshalb er konnte nicht schlafen.",
          "Er konnte nicht schlafen, weil er Schmerzen hatte.",
          "Außerdem wollte er nichts essen.",
          "Er konnte nicht schlafen, weil er hatte Schmerzen."
        ],
        why: "Po <i>deshalb</i> i <i>außerdem</i> od razu stoi odmieniony czasownik: <i>deshalb konnte er</i>. Po <i>weil</i> odmieniony czasownik idzie na koniec: <i>weil er Schmerzen hatte</i>."
      },
      {
        q: "Wybierz właściwy rodzajnik określony dla każdego rzeczownika.",
        items: ["przekazanie dyżuru", "dyżur ranny", "dyżur popołudniowy", "dyżur nocny", "coś do przekazania", "stan"]
      },
      {
        q: "Połącz każdy spójnik z jego znaczeniem.",
        pairs: ["dlatego", "mimo to", "poza tym", "ponieważ"]
      },
      {
        q: "Ułóż wyrazy we właściwej kolejności.",
        tr: "Miała bóle, dlatego powiadomiłam lekarkę.",
        why: "<i>Sie hatte Schmerzen, deshalb habe ich die Ärztin informiert.</i> Po przecinku <i>deshalb</i> zajmuje pierwsze miejsce drugiego zdania, potem czasownik <i>habe</i>, potem podmiot <i>ich</i>; imiesłów <i>informiert</i> idzie na koniec, bez <i>ge-</i>."
      },
      {
        q: "Przetłumacz (w raporcie): «Noc minęła spokojnie.»",
        why: "<i>Die Nacht war ruhig</i> to forma najprostsza; w raportach często czyta się <i>Die Nacht verlief ruhig</i>. W mowie można też powiedzieć <i>Die Nacht ist ruhig verlaufen</i>."
      },
      {
        q: "Raport poranny.",
        setting: "Miałaś dyżur nocny i przekazujesz go koledze.",
        lines: [
          { tr: "Jak minęła noc u pana Brandta?" },
          { tr: "Odpowiedz, że był niespokojny, bo miał bóle.", answerTr: "Był niespokojny, bo miał bóle." },
          { tr: "Powiadomiłaś lekarkę?" },
          { tr: "Odpowiedz, że tak: miał silne bóle, dlatego do niej zadzwoniłaś.", answerTr: "Tak, miał silne bóle, dlatego do niej zadzwoniłam." },
          { tr: "Jest coś jeszcze do przekazania?" },
          { tr: "Odpowiedz, że poza tym mało pił.", answerTr: "Poza tym mało pił." }
        ]
      },
      {
        tr: "Około trzeciej bolał ją brzuch, dlatego powiadomiłam lekarkę dyżurną.",
        why: "W <i>Bauchschmerzen</i> <b>ch</b> po <b>au</b> to [x], jak polskie «ch» w «dach»; w <i>deshalb</i> <b>s</b> i <b>h</b> wymawia się osobno, des-halb; w <i>diensthabende</i> akcent pada na <b>Dienst</b>."
      },
      {
        tr: "Noc minęła spokojnie, nie ma nic szczególnego do przekazania.",
        why: "W <i>Nacht</i> <b>ch</b> po <b>a</b> to [x]; w <i>ruhig</i> końcowe <b>g</b> czyta się [ç], dźwięk zbliżony do polskiego «ś»; w <i>Besonderheiten</i> akcent pada na <b>son</b>."
      }
    ]
  },
  "lesson:pfl-u06-l2": {
    theme: "Dokumentacja pisemna",
    title: "Raport pielęgniarski",
    objectives: [
      "napisać wpis do raportu pielęgniarskiego w krótkiej formie",
      "zamienić zdanie czasownikowe na styl nominalny",
      "używać strony biernej w Präteritum: wurde informiert, wurde gewechselt",
      "odróżnić obserwację od oceny"
    ],
    theory: [
      {
        h: "Co trafia do raportu",
        p: "<strong>Pflegebericht</strong> zapisuje to, co się zmieniło albo co jest ważne dla następnej zmiany: stan pacjenta, obserwacje, wykonane czynności, kogo powiadomiono. Każdy wpis ma datę, godzinę i parafę osoby, która go pisze. Zapisuje się <strong>obserwacje</strong>, nie oceny: nie <em>Patientin war schwierig</em>, tylko to, co widziałaś i słyszałaś: <em>Patientin weinte und sprach wenig.</em> Jeśli obserwacja cię niepokoi, raport odnotowuje też kolejny krok: <em>Ärztin informiert.</em>"
      },
      {
        h: "Styl nominalny i strona bierna",
        p: "Niemiecka dokumentacja woli <strong>rzeczowniki</strong> od czasowników: <em>Die Patientin wollte nichts essen</em> zmienia się w <em>Verweigerung der Nahrungsaufnahme</em>. Rzeczownik na <em>-ung</em> jest zawsze rodzaju żeńskiego, a dopełnienie po nim stoi w dopełniaczu: <em>die Verweigerung <b>der</b> Nahrungsaufnahme</em>. Gdy ważna jest czynność, a nie to, kto ją wykonał, używa się <strong>strony biernej</strong> w Präteritum: <em>Der Verband <b>wurde</b> gewechselt. Die Ärztin <b>wurde</b> informiert.</em> W krótkich wpisach czasownik posiłkowy często odpada: <em>Verband gewechselt. Ärztin informiert.</em>"
      },
      {
        contrast: "Polska dokumentacja pielęgniarska zna ten styl dobrze: «odmowa przyjmowania posiłków», «zmiana opatrunku», «lekarz powiadomiony». Mechanizm masz więc w ręku, a dopełniacz po rzeczowniku odczasownikowym działa jak po polsku: odmowa <b>przyjmowania</b>, <em>Verweigerung <b>der</b> Nahrungsaufnahme</em>. Różnica polega na tym, że polski dopełniacz siedzi w końcówce rzeczownika, a niemiecki przede wszystkim w <strong>rodzajniku</strong>: bez <em>der</em> wpis brzmi jak hasło z kartki. Polskie «przyjmowania posiłków» to dwa słowa, niemieckie <em>Nahrungsaufnahme</em> to jedno złożenie. A gdy w raporcie piszesz pełne zdanie, polskie «pacjent odmówił obiadu» w czasie dokonanym oddaje się po prostu Präteritum: <em>Der Patient verweigerte das Mittagessen.</em> Krótka forma <em>Arzt informiert</em> odpowiada dokładnie polskiemu imiesłowowi «lekarz powiadomiony»."
      },
      {
        trap: "Czasowniki na <em>-ieren</em> nie dostają <em>ge-</em> w imiesłowie: <em>informiert</em>, <em>dokumentiert</em>, <em>mobilisiert</em>, nigdy <em>geinformiert</em>. Uważaj też na podmiot: <em>Die Ärztin wurde informiert</em> znaczy, że ktoś powiadomił lekarkę; <em>Die Ärztin hat informiert</em> znaczy, że to ona kogoś powiadomiła. I polskie «zmienić» ma dwa odpowiedniki: zamienić jedno na drugie to <em>wechseln</em> (<em>Der Verband wurde gewechselt</em>), zmodyfikować to <em>ändern</em> (<em>Die Anordnung wurde geändert</em>). «Zmiana opatrunku» z <em>ändern</em> znaczyłaby, że opatrunek przerobiono."
      },
      {
        tip: "Zanim napiszesz, zapytaj się: czy koleżanka, która przeczyta ten wpis za osiem godzin, będzie wiedziała, co się stało, kiedy i kogo powiadomiono? Jeśli tak, wpis jest kompletny. Jeśli napisałaś przymiotnik taki jak <em>schwierig</em> czy <em>nervig</em>, zastąp go tym, co widziałaś albo słyszałaś."
      }
    ],
    grammar: {
      title: "Od czasownika do rzeczownika",
      note: "Czasownik → rzeczownik na <b>-ung</b> (zawsze żeński) + dopełnienie w <b>dopełniaczu</b>. Czynność bez wykonawcy: <b>wurde</b> + imiesłów.",
      table: {
        head: ["styl czasownikowy", "styl nominalny lub bierny"],
        rows: [
          ["Die Patientin wollte nichts essen.", "Verweigerung der Nahrungsaufnahme."],
          ["Ich habe die Ärztin angerufen.", "Ärztin informiert. / Die Ärztin wurde informiert."],
          ["Ich habe den Verband gewechselt.", "Verbandswechsel. / Der Verband wurde gewechselt."],
          ["Er hat wenig getrunken.", "Geringe Flüssigkeitsaufnahme."]
        ]
      },
      examples: [
        { tr: "Dziś w południe pacjentka nie chciała nic jeść.", note: "styl czasownikowy: dobry w mowie i w raporcie" },
        { tr: "Odmowa przyjmowania posiłku w południe.", note: "styl nominalny: Verweigerung + dopełniacz der" },
        { tr: "Opatrunek zmieniono o dziesiątej.", note: "strona bierna w Präteritum: wurde + gewechselt" },
        { tr: "Lekarka została powiadomiona.", note: "informiert: czasownik na -ieren, bez ge-" },
        { tr: "Po konsultacji z lekarką pionizację przełożono.", note: "nach Rücksprache mit: stała formuła dokumentacji" },
        { tr: "W ramach profilaktyki upadków łóżko obniżono.", note: "zur + rzeczownik: cel w stylu nominalnym" }
      ]
    },
    vocab: [
      "raport pielęgniarski",
      "dokumentacja",
      "wpis (w raporcie)",
      "obserwacja",
      "przyjmowanie pokarmów, odżywianie (termin fachowy)",
      "przyjmowanie płynów (termin fachowy)",
      "odmawiać, odmówić",
      "odmowa",
      "konsultacja, ustalenie (z lekarzem)",
      "samopoczucie",
      "bez odchyleń, w normie",
      "wydalanie (mocz i stolec)"
    ],
    dialogue: [
      "Możesz rzucić okiem na mój raport? Napisałem: dziś w południe pani Keller nie chciała nic jeść.",
      "Tak może być. W raporcie pisze się często krócej: odmowa przyjmowania posiłku w południe.",
      "A muszę pisać, kto zadzwonił do lekarki?",
      "Napisz po prostu: lekarka powiadomiona. Twoja parafa i tak stoi przy wpisie.",
      "Mogę też napisać, że była w złym humorze?",
      "Napisz raczej to, co widziałeś i słyszałeś: pacjentka płakała i mało mówiła.",
      "Rozumiem. Obserwacje, nie oceny."
    ],
    culture: {
      title: "Niemieckie spojrzenie: czego nie zapisano",
      text: "<p>Wśród personelu pielęgniarskiego w Niemczech krąży zdanie: <i>Was nicht dokumentiert ist, gilt als nicht gemacht</i>, «czego nie udokumentowano, uważa się za niezrobione». To nie jest przepis, ale dobrze oddaje wagę dokumentacji: jest podstawą ciągłości opieki, komunikacji z lekarzami, a w razie sporu odtworzenia tego, co się wydarzyło.</p><p>Z tego samego powodu wpisu się nie wymazuje i nie zamazuje: błąd przekreśla się tak, żeby pozostał czytelny, albo dopisuje się korektę z datą i parafą. W systemach elektronicznych zasada jest ta sama, a zapisuje ją program.</p>"
    },
    exercises: [
      {
        q: "Jak zapisać w stylu nominalnym «Die Patientin wollte nichts essen»?",
        opts: [
          "Verweigerung von der Nahrungsaufnahme essen.",
          "Verweigerung der Nahrungsaufnahme.",
          "Die Nahrungsaufnahme verweigernd."
        ],
        why: "Czasownik <i>verweigern</i> zmienia się w rzeczownik <b>die Verweigerung</b>, a dopełnienie przechodzi do dopełniacza: <b>der</b> Nahrungsaufnahme."
      },
      {
        tr: "Präteritum czasownika werden we wszystkich osobach.",
        why: "<i>Wurde, wurdest, wurde, wurden, wurdet, wurden</i>: to forma, na której stoi strona bierna w raporcie, <i>Die Ärztin wurde informiert</i>."
      },
      {
        q: "Uzupełnij: «Die Ärztin ___ um 15 Uhr informiert.»",
        hint: "strona bierna w Präteritum",
        why: "<b>wurde</b>: stronę bierną w Präteritum tworzy się z <i>wurde</i> i imiesłowem, tu <i>informiert</i>, bez <i>ge-</i>."
      },
      {
        q: "Uzupełnij zdanie.",
        tr: "Opatrunek zmieniono o dziesiątej.",
        why: "<i>Der Verband <b>wurde</b> um zehn Uhr <b>gewechselt</b></i>: <i>wurde</i> na drugim miejscu, imiesłów <i>gewechselt</i> na końcu."
      },
      {
        q: "Połącz każdy termin z dokumentacji z jego znaczeniem.",
        pairs: ["przyjmowanie pokarmów", "przyjmowanie płynów", "wydalanie (mocz i stolec)", "konsultacja z lekarzem"]
      },
      {
        q: "Wybierz właściwy rodzajnik określony dla każdego rzeczownika.",
        items: ["raport pielęgniarski", "samopoczucie", "wpis w raporcie", "obserwacja", "konsultacja z lekarzem", "dokumentacja"]
      },
      {
        q: "Które wpisy pasują do raportu pielęgniarskiego?",
        opts: [
          "Patientin weinte und sprach wenig.",
          "Patientin war wieder schwierig.",
          "Verweigerung der Nahrungsaufnahme am Mittag, Ärztin informiert.",
          "Verband um zehn Uhr gewechselt, Wunde unauffällig.",
          "Patient ist faul und will nicht laufen."
        ],
        why: "Do raportu trafiają obserwacje i czynności: co widziałaś, co zrobiono, kogo powiadomiono. <i>schwierig</i> i <i>faul</i> to oceny człowieka i nic nie mówią czytającemu."
      },
      {
        q: "Ułóż wyrazy we właściwej kolejności.",
        tr: "Po konsultacji z lekarką pionizację przełożono.",
        why: "<i>Nach Rücksprache mit der Ärztin wurde die Mobilisation verschoben.</i> Formuła <i>nach Rücksprache mit</i> zajmuje pierwsze miejsce, potem <i>wurde</i>, potem podmiot, a imiesłów <i>verschoben</i> na końcu."
      },
      {
        q: "Przetłumacz (w raporcie): «Lekarz został powiadomiony.»",
        why: "<i>Der Arzt wurde informiert</i> albo <i>Die Ärztin wurde informiert</i>, zależnie od tego, kto miał dyżur; w krótkiej formie <i>Arzt informiert</i>. W mowie można też powiedzieć <i>ist informiert worden</i>."
      },
      {
        q: "Wpis do raportu.",
        setting: "Nowa koleżanka pyta cię, jak pisać raport pielęgniarski.",
        lines: [
          { tr: "Dziś w południe pani Keller nie chciała nic jeść. Jak to zapisać?" },
          { tr: "Podyktuj krótką formę: odmowa przyjmowania posiłku w południe.", answerTr: "Odmowa przyjmowania posiłku w południe." },
          { tr: "A to, że zadzwoniłam do lekarki?" },
          { tr: "Podyktuj krótką formę: lekarka powiadomiona.", answerTr: "Lekarka powiadomiona." },
          { tr: "Mogę napisać, że była w złym humorze?" },
          { tr: "Odpowiedz, że lepiej zapisać to, co zaobserwowała: mało mówiła i płakała.", answerTr: "Zapisz raczej to, co zaobserwowałaś: mało mówiła i płakała." }
        ]
      },
      {
        tr: "Tak może być. W raporcie pisze się często krócej: odmowa przyjmowania posiłku w południe.",
        why: "W <i>Bericht</i> <b>ch</b> po <b>i</b> to [ç]; w <i>Verweigerung</i> <b>v</b> czyta się [f], a akcent pada na <b>wei</b>; w <i>Nahrungsaufnahme</i> akcent pada na <b>Nah</b>."
      },
      {
        tr: "Lekarka została powiadomiona.",
        why: "W <i>Ärztin</i> <b>ä</b> to otwarte «e», a <b>z</b> czyta się [ts], jak polskie «c»; w <i>wurde</i> <b>u</b> jest krótkie; w <i>informiert</i> akcent pada na <b>miert</b>, z długim <b>ie</b>."
      }
    ]
  },
  "lesson:pfl-u06-l3": {
    theme: "Planowanie opieki",
    title: "Plan opieki pielęgniarskiej",
    objectives: [
      "czytać plan opieki: problem, zasoby, cel, działania",
      "wyrażać cel działania za pomocą damit i um ... zu",
      "wybierać między damit a um ... zu w zależności od podmiotu",
      "formułować cel, który da się sprawdzić"
    ],
    theory: [
      {
        h: "Części planu opieki",
        p: "<strong>Pflegeplanung</strong> ma w prawie wszystkich placówkach ten sam schemat. <strong>Pflegeproblem</strong> mówi, co jest dla pacjenta trudne (<em>Sie trinkt zu wenig</em>). <strong>Ressource</strong> mówi, co pacjent wciąż robi sam (<em>Sie kann den Becher selbst halten</em>). <strong>Pflegeziel</strong> mówi, co chcemy osiągnąć, w sposób sprawdzalny (<em>Die Patientin trinkt ausreichend</em>). <strong>Maßnahmen</strong> mówią, co robimy i po co. Przy <strong>Evaluation</strong> sprawdza się, czy cel został osiągnięty. Ilości i odstępy ustala się dla każdego pacjenta, z lekarzem i według standardów placówki: w tej lekcji przykłady są dydaktyczne."
      },
      {
        h: "damit czy um ... zu?",
        p: "Cel działania wyraża zdanie celowe. Jeśli podmiot zdania celowego jest <strong>inny</strong> niż w zdaniu głównym, używa się <strong>damit</strong>, z odmienionym czasownikiem na końcu: <em>Wir bieten ihr Tee an, damit <b>sie</b> mehr trinkt.</em> Jeśli podmiot jest <strong>ten sam</strong>, można użyć <strong>um ... zu</strong> z bezokolicznikiem: <em>Wir führen ein Trinkprotokoll, um die Trinkmenge zu kontrollieren</em> (to my prowadzimy kartę i my kontrolujemy). Przy czasownikach rozdzielnych <em>zu</em> wchodzi do środka: <em>um aufzustehen</em>."
      },
      {
        contrast: "Polski robi ten podział jednym słowem: «żeby» z bezokolicznikiem, gdy podmiot jest ten sam («prowadzimy kartę, żeby kontrolować ilość»), i «żeby» z formą przeszłą, gdy się zmienia («proponujemy jej herbatę, żeby więcej piła»). Niemiecki ma na to dwie konstrukcje i nie zna polskiego «żeby piła»: po <em>damit</em> stoi zwykły czas teraźniejszy, <em>damit sie mehr trinkt</em>, a nie «damit sie mehr trank». Słownictwo planu będzie ci znane z procesu pielęgnowania: <em>Pflegeproblem</em> to problem pielęgnacyjny (w polskiej szkole często «diagnoza pielęgniarska»), <em>Ressource</em> to zasoby pacjenta, <em>Pflegeziel</em> to cel opieki, <em>Maßnahme</em> to działanie, interwencja, a <em>Evaluation</em> to ocena. Z pacjentem tych słów się nie używa: zamiast <em>Ihre Ressource</em> mówi się <em>Das können Sie schon gut allein</em>."
      },
      {
        trap: "<em>damit</em> ma dwa znaczenia. Jako spójnik wprowadza cel i wysyła czasownik na koniec: <em>damit sie mehr trinkt</em>. Jako przysłówek znaczy «z tym»: <em>Was machen wir damit?</em> «Co z tym zrobimy?». <em>Die Maßnahme</em> to działanie, interwencja, a nie pomiar: pomiar to <em>die Messung</em> (<em>die Blutdruckmessung</em>). I <em>erhalten</em> znaczy tu «zachować, utrzymać» (<em>die Selbstständigkeit erhalten</em>), a nie tylko «otrzymać»."
      },
      {
        tip: "Przy każdym działaniu z planu spróbuj na głos powiedzieć, po co je robisz, z <em>damit</em> albo <em>um ... zu</em>. Jeśli zdanie celowe nie przychodzi, często brakuje celu także w samym planie, a działanie bez celu trudno ocenić przy Evaluation."
      }
    ],
    grammar: {
      title: "Cel: damit i um ... zu",
      note: "Podmiot <b>inny</b>: <b>damit</b> + odmieniony czasownik na końcu. Podmiot <b>ten sam</b>: <b>um ... zu</b> + bezokolicznik na końcu (albo damit).",
      table: {
        head: ["zdanie główne", "zdanie celowe", "podmiot"],
        rows: [
          ["Wir bieten ihr oft Tee an,", "damit sie mehr trinkt.", "inny: damit"],
          ["Wir lagern ihn regelmäßig um,", "damit kein Dekubitus entsteht.", "inny: damit"],
          ["Er geht täglich mit dem Rollator,", "um mobil zu bleiben.", "ten sam: um ... zu"],
          ["Wir führen ein Trinkprotokoll,", "um die Trinkmenge zu kontrollieren.", "ten sam: um ... zu"]
        ]
      },
      examples: [
        { tr: "Regularnie zmieniamy ułożenie pani Keller, żeby nie powstała odleżyna.", note: "różne podmioty (wir / kein Dekubitus): damit" },
        { tr: "Często proponujemy jej herbatę, żeby więcej piła.", note: "różne podmioty (wir / sie): damit, z trybem oznajmującym" },
        { tr: "Pan Brandt codziennie chodzi z balkonikiem, żeby pozostać sprawnym.", note: "ten sam podmiot: um ... zu" },
        { tr: "Prowadzimy kartę płynów, żeby kontrolować ilość wypitych płynów.", note: "ten sam podmiot: um ... zu, bezokolicznik na końcu" },
        { tr: "Zasoby: pacjentka potrafi sama trzymać kubek.", note: "zasoby mówią, co pacjent wciąż robi sam" },
        { tr: "Cel: pacjentka pije wystarczająco.", note: "cel zapisuje się w czasie teraźniejszym, jako stan do osiągnięcia" }
      ]
    },
    vocab: [
      "plan opieki pielęgniarskiej",
      "problem pielęgnacyjny",
      "zasoby (to, co pacjent wciąż potrafi)",
      "cel opieki",
      "działanie, interwencja",
      "ocena (planu opieki)",
      "ryzyko",
      "unikać, zapobiegać",
      "zachować, utrzymać",
      "wspierać, usprawniać",
      "ilość wypitych płynów",
      "karta płynów, bilans płynów przyjętych"
    ],
    dialogue: [
      "Dziś aktualizujemy plan opieki pani Keller. Jaki jest jej problem pielęgnacyjny?",
      "Pije za mało. Istnieje ryzyko odwodnienia.",
      "Zgadza się. A jakie ma zasoby?",
      "Potrafi sama trzymać kubek i chętnie pije herbatę.",
      "Dobrze. Jakie działania planujemy?",
      "Regularnie proponujemy jej herbatę, żeby więcej piła. Poza tym prowadzimy kartę płynów, żeby kontrolować ilość wypitych płynów.",
      "Bardzo dobrze. A cel opieki?",
      "Pani Keller pije wystarczająco. Dokładną ilość ustalimy z lekarką."
    ],
    culture: {
      title: "Niemieckie spojrzenie: od procesu pielęgnowania do SIS",
      text: "<p>W niemieckim kształceniu planowania uczy się jako <i>Pflegeprozess</i>, cyklu kroków od zebrania informacji do oceny. W szpitalach plan opieki jest często modułem systemu elektronicznego, z gotowymi problemami i działaniami do wyboru i dopasowania.</p><p>W opiece nad osobami starszymi wiele niemieckich placówek używa prostszego modelu, <i>Strukturierte Informationssammlung</i> (SIS), stworzonego po to, żeby zmniejszyć ilość dokumentacji. Słowa z tej lekcji zostają te same: znajdziesz je w każdym formularzu.</p>"
    },
    exercises: [
      {
        q: "Chcesz powiedzieć, po co zmieniacie ułożenie pacjenta. Które zdanie jest poprawne?",
        opts: [
          "Wir lagern ihn regelmäßig um, um kein Dekubitus entsteht.",
          "Wir lagern ihn regelmäßig um, damit kein Dekubitus zu entstehen.",
          "Wir lagern ihn regelmäßig um, damit kein Dekubitus entsteht."
        ],
        why: "Podmioty są różne (<i>wir</i> i <i>kein Dekubitus</i>), więc potrzebne jest <b>damit</b> z odmienionym czasownikiem na końcu: <i>entsteht</i>. <i>um</i> nie łączy się z odmienionym czasownikiem, a po <i>damit</i> nie ma <i>zu</i>."
      },
      {
        q: "Uzupełnij: «Wir führen ein Trinkprotokoll, ___ die Trinkmenge zu kontrollieren.»",
        hint: "ten sam podmiot, bezokolicznik z zu",
        why: "<b>um</b>: to my prowadzimy kartę i my kontrolujemy, więc <i>um ... zu</i> z bezokolicznikiem na końcu."
      },
      {
        q: "Uzupełnij zdanie.",
        tr: "Często proponujemy jej herbatę, żeby więcej piła. On codziennie chodzi z balkonikiem, żeby pozostać sprawnym.",
        why: "<i><b>damit</b> sie mehr trinkt</i>: podmioty są różne. <i>um mobil zu <b>bleiben</b></i>: ten sam podmiot, bezokolicznik idzie na koniec po <i>zu</i>."
      },
      {
        q: "Które zdania są poprawne?",
        opts: [
          "Ich messe den Blutdruck, um Veränderungen früh zu erkennen.",
          "Ich messe den Blutdruck, damit Veränderungen früh zu erkennen.",
          "Wir mobilisieren ihn, damit er selbstständig bleibt.",
          "Wir mobilisieren ihn, um er selbstständig bleibt.",
          "Sie trinkt viel, um fit zu bleiben."
        ],
        why: "<i>um ... zu</i> wymaga bezokolicznika z <i>zu</i> i tego samego podmiotu; <i>damit</i> wymaga odmienionego czasownika. <i>damit ... zu erkennen</i> i <i>um er ... bleibt</i> mieszają obie konstrukcje."
      },
      {
        q: "Połącz każdą część planu opieki z jej znaczeniem.",
        pairs: ["to, co jest dla pacjenta trudne", "to, co pacjent wciąż robi sam", "to, co chcemy osiągnąć", "to, co robimy, żeby to osiągnąć"]
      },
      {
        q: "Wybierz właściwy rodzajnik określony dla każdego rzeczownika.",
        items: ["plan opieki", "problem pielęgnacyjny", "zasoby", "cel opieki", "ryzyko", "karta płynów"]
      },
      {
        q: "Ułóż wyrazy we właściwej kolejności.",
        tr: "Często proponujemy jej herbatę, żeby więcej piła.",
        why: "<i>Wir bieten ihr oft Tee an, damit sie mehr trinkt.</i> Partykuła <i>an</i> zamyka zdanie główne; po <i>damit</i> odmieniony czasownik <i>trinkt</i> idzie na koniec."
      },
      {
        q: "Przetłumacz (w planie opieki): «Uruchamiamy go, żeby pozostał samodzielny.»",
        why: "<i>Wir mobilisieren ihn, damit er selbstständig bleibt.</i> Podmioty są różne (<i>wir</i> i <i>er</i>), więc <i>damit</i>. Obie pisownie są poprawne, <i>selbstständig</i> i <i>selbständig</i>."
      },
      {
        q: "Plan opieki pana Brandta.",
        setting: "Opiekunka praktyk prosi cię o przedstawienie planu opieki leżącego pacjenta.",
        lines: [
          { tr: "Jaki jest problem pielęgnacyjny pana Brandta?" },
          { tr: "Odpowiedz, że mało się rusza i dlatego istnieje ryzyko odleżyn.", answerTr: "Mało się rusza, dlatego istnieje ryzyko odleżyn." },
          { tr: "A jakie działanie planujemy?" },
          { tr: "Odpowiedz, że regularnie zmieniacie jego ułożenie, żeby nie powstała odleżyna.", answerTr: "Regularnie zmieniamy jego ułożenie, żeby nie powstała odleżyna." },
          { tr: "Jakie ma zasoby?" },
          { tr: "Odpowiedz, że z pomocą potrafi sam się obrócić.", answerTr: "Z pomocą potrafi sam się obrócić." }
        ]
      },
      {
        tr: "Regularnie proponujemy jej herbatę, żeby więcej piła.",
        why: "W <i>regelmäßig</i> <b>ß</b> to bezdźwięczne [s], a końcowe <b>g</b> czyta się [ç]; w <i>damit</i> akcent pada na <b>mit</b>; w <i>trinkt</i> <b>nk</b> to [ŋk], jak w polskim «bank»."
      },
      {
        tr: "Regularnie zmieniamy ułożenie pani Keller, żeby nie powstała odleżyna.",
        why: "W <i>lagern</i> końcowe <b>-ern</b> czyta się prawie [ɐn]; w <i>Dekubitus</i> akcent pada na <b>ku</b>, z długim <b>u</b>; w <i>entsteht</i> <b>st</b> czyta się [ʃt], jak «szt», a <b>h</b> jest nieme."
      }
    ]
  },
  "lesson:pfl-u06-l4": {
    theme: "Skróty",
    title: "Skróty na oddziale",
    objectives: [
      "czytać i rozwijać najczęstsze skróty: AZ, EZ, VZ, BZ, RR, o.B., p.o., b.B.",
      "wymawiać je w rozmowie z zespołem i tłumaczyć prostymi słowami pacjentowi",
      "wiedzieć, gdzie szukać nieznanego skrótu",
      "pamiętać, że b.B. nie znaczy «według uznania»"
    ],
    theory: [
      {
        h: "Najczęstsze skróty",
        p: "W raporcie i w <strong>Kurve</strong> (karcie parametrów i leczenia) skróty są wszędzie: <em>AZ</em> Allgemeinzustand, stan ogólny; <em>EZ</em> Ernährungszustand, stan odżywienia; <em>VZ</em> Vitalzeichen, parametry życiowe; <em>BZ</em> Blutzucker, glikemia; <em>RR</em> ciśnienie tętnicze; <em>o.B.</em> ohne Befund, bez odchyleń; <em>p.o.</em> per os, doustnie; <em>b.B.</em> bei Bedarf, w razie potrzeby. W zespole czyta się je litera po literze (<em>A-Z, B-Z, o-B</em>) albo się je rozwija. Każda placówka ma swój <strong>Abkürzungsverzeichnis</strong>: dozwolone są skróty z wykazu twojej placówki, a ten sam skrót może się różnić między oddziałami."
      },
      {
        h: "Dwa rejestry",
        p: "Skróty to pisemna <strong>Fachsprache</strong>: służą w zespole i w dokumentach. Z pacjentem wraca się do <strong>Laiensprache</strong>: nie <em>Ihr AZ ist reduziert</em>, tylko <em>Sie sind im Moment etwas geschwächt</em>; nie <em>VZ o.B.</em>, tylko <em>Ihr Blutdruck, Ihr Puls und Ihre Temperatur sind in Ordnung.</em> A <em>b.B.</em> to nie decyzja pielęgniarki: znaczy, że lekarz zlecił lek do podania w razie potrzeby, na warunkach zapisanych w zleceniu."
      },
      {
        contrast: "Część tych skrótów znasz z polskiego oddziału. <em>RR</em> na ciśnienie piszą także w Polsce, od Riva-Rocciego, włoskiego lekarza, który wynalazł mankiet do pomiaru; <em>p.o.</em> to ta sama łacina, którą widzisz w polskich zleceniach. Inne nie mają polskiego odpowiednika. «Stan ogólny» w polskiej dokumentacji pisze się zwykle słowami, a w niemieckiej <em>AZ reduziert</em> to codzienna formuła. Polskie «w razie potrzeby» w zleceniu to często «doraźnie»; niemiecki ma na to <em>b.B.</em> i rzeczownik <em>die Bedarfsmedikation</em>, leki doraźne. Uważaj na <em>o.B.</em>: nie jest polskim «b.z.», «bez zmian», które porównuje z poprzednim stanem. <em>o.B.</em> mówi, że wynik jest prawidłowy, nawet jeśli wczoraj był taki sam. Niemiecki oddział skraca więcej niż polski, a styl nominalny z poprzedniej lekcji często kurczy się do jednej linijki: <em>AZ reduziert, EZ gut, VZ o.B.</em>"
      },
      {
        trap: "<em>ohne Befund</em> nie znaczy «bez badania» ani «niesprawdzone»: znaczy, że kontrolę wykonano i nie wykazała nic patologicznego. <em>Die Kurve</em> na oddziale to nie krzywa na wykresie, tylko karta, w której zapisuje się parametry i leczenie. A samo <em>der Befund</em> to wynik badania: <em>Der Befund ist da</em> znaczy, że wynik przyszedł, a nie, że jest dodatni."
      },
      {
        tip: "Jeśli nie znasz skrótu, zapytaj: <em>Was heißt das?</em> Nikt na oddziale nie oczekuje, że znasz na pamięć wykaz placówki, a źle odczytany skrót to błąd, który przechodzi z dyżuru na dyżur. Kiedy piszesz sama, w razie wątpliwości rozwiń skrót: <em>Schreib die Abkürzung im Zweifel aus.</em>"
      }
    ],
    grammar: {
      title: "Od skrótu do zdania",
      note: "W zespole: skrót albo krótka forma. Z pacjentem: pełne zdanie w <b>Laiensprache</b>, bez skrótów.",
      table: {
        head: ["skrót", "pełna forma", "do pacjenta"],
        rows: [
          ["AZ reduziert", "Allgemeinzustand reduziert", "Sie sind im Moment etwas geschwächt."],
          ["VZ o.B.", "Vitalzeichen ohne Befund", "Ihr Blutdruck, Ihr Puls und Ihre Temperatur sind in Ordnung."],
          ["BZ", "Blutzucker", "Ich messe jetzt Ihren Blutzucker."],
          ["p.o.", "per os", "Bitte schlucken Sie die Tablette mit etwas Wasser."]
        ]
      },
      examples: [
        { tr: "Stan ogólny obniżony, stan odżywienia dobry.", note: "AZ i EZ: czyta się A-Z, E-Z" },
        { tr: "Parametry życiowe bez odchyleń.", note: "o.B.: wynik prawidłowy, kontrolę wykonano" },
        { tr: "Ciśnienie i tętno skontrolowane, lekarka powiadomiona.", note: "RR: od Riva-Rocciego, ciśnienie tętnicze, jak w Polsce" },
        { tr: "Glikemię zmierzono przed obiadem.", note: "BZ: Blutzucker" },
        { tr: "Tabletki przyjęte doustnie.", note: "p.o.: per os, jak w polskich zleceniach" },
        { tr: "Lek przeciwbólowy doraźnie zgodnie ze zleceniem lekarskim.", note: "b.B.: tylko na warunkach zleconych przez lekarza" }
      ]
    },
    vocab: [
      "stan ogólny (AZ)",
      "stan odżywienia (EZ)",
      "bez odchyleń, w normie (o.B.)",
      "doustnie (p.o.)",
      "obniżony",
      "leki doraźne, leczenie w razie potrzeby",
      "karta parametrów i leczenia",
      "dokumentacja pacjenta, historia choroby",
      "skrót",
      "parafa (osoby piszącej)",
      "wykaz skrótów",
      "rozpisać, napisać w pełnym brzmieniu"
    ],
    dialogue: [
      "W raporcie jest napisane: AZ obniżony, EZ dobry. Co to znaczy?",
      "AZ to stan ogólny, EZ stan odżywienia. Czyli jest osłabiona, ale dobrze odżywiona.",
      "A VZ o.B.?",
      "Parametry życiowe są bez odchyleń, czyli w normie.",
      "Tu jest jeszcze napisane: lek przeciwbólowy b.B. Mogę jej go po prostu podać?",
      "Tylko zgodnie ze zleceniem lekarskim w karcie. W razie potrzeby znaczy: kiedy ją boli, nie automatycznie.",
      "A jeśli nie znam jakiegoś skrótu?",
      "To dopytaj. Z pacjentem i tak mówisz bez skrótów."
    ],
    culture: {
      title: "Niemieckie spojrzenie: wykaz skrótów",
      text: "<p>Wiele szpitali i domów opieki w Niemczech ma wewnętrzny <i>Abkürzungsverzeichnis</i>, który ustala, jakich skrótów wolno używać w dokumentacji. Powodem jest bezpieczeństwo: skrót o dwóch znaczeniach, odczytany przez kogoś z innego oddziału, może prowadzić do błędu.</p><p>Dlatego wewnętrzne zasady często każą pisać w pełnym brzmieniu właśnie najbardziej delikatne informacje, takie jak nazwy leków i zlecenia. Kiedy zaczynasz w nowej placówce, zapytaj, gdzie jest wykaz: to jedna z pierwszych przydatnych lektur.</p>"
    },
    exercises: [
      {
        q: "W raporcie czytasz «VZ o.B.». Co to znaczy?",
        opts: [
          "Parametrów życiowych nie zmierzono.",
          "Parametry życiowe sprawdzono i są w normie.",
          "Parametry życiowe trzeba sprawdzić ponownie."
        ],
        why: "<i>VZ</i> to <i>Vitalzeichen</i>, a <b>o.B.</b> znaczy <i>ohne Befund</i>: kontrolę wykonano i nie wykazała nic patologicznego."
      },
      {
        q: "Uzupełnij: «Tabletten werden ___ eingenommen, also über den Mund.»",
        hint: "skrót łaciński, z kropkami",
        why: "<b>p.o.</b>, czyli <i>per os</i>: doustnie, jak w polskich zleceniach."
      },
      {
        q: "Połącz każdy skrót z jego znaczeniem.",
        pairs: ["stan ogólny", "stan odżywienia", "glikemia", "parametry życiowe"]
      },
      {
        q: "Wybierz właściwy rodzajnik określony dla każdego rzeczownika.",
        items: ["stan ogólny", "stan odżywienia", "karta parametrów", "skrót", "parafa", "wykaz skrótów"]
      },
      {
        q: "Które zdania możesz powiedzieć pacjentowi?",
        opts: [
          "Ihr Blutzucker ist in Ordnung.",
          "Ihr BZ ist o.B.",
          "Sie bekommen ein Schmerzmittel, wenn Sie Schmerzen haben.",
          "Ihr AZ ist reduziert.",
          "Ihre Werte sind unauffällig."
        ],
        why: "Z pacjentem mówi się bez skrótów i bez formuł z dokumentacji. <i>BZ o.B.</i> i <i>AZ reduziert</i> są poprawne w zespole, ale pacjent ich nie rozumie."
      },
      {
        q: "Rozpisz oba skróty.",
        tr: "Stan ogólny obniżony, stan odżywienia dobry.",
        why: "<i>AZ</i> to <b>Allgemeinzustand</b>, <i>EZ</i> to <b>Ernährungszustand</b>. Oba są rodzaju męskiego: <i>der Zustand</i>."
      },
      {
        q: "Ułóż wyrazy we właściwej kolejności.",
        tr: "Parametry życiowe są w normie.",
        why: "<i>Die Vitalzeichen sind ohne Befund.</i> To pełna forma <i>VZ o.B.</i>; <i>Vitalzeichen</i> stoi tu w liczbie mnogiej, więc <i>sind</i>."
      },
      {
        q: "Przetłumacz (w raporcie): «Stan ogólny jest dobry.»",
        why: "<i>Der Allgemeinzustand ist gut</i>, a w krótkiej formie <i>Allgemeinzustand gut</i> albo <i>AZ gut</i>."
      },
      {
        q: "Pacjentka czyta raport.",
        setting: "Pani Keller przeczytała w swoich dokumentach kilka skrótów i pyta, co znaczą.",
        lines: [
          { tr: "W moim raporcie jest napisane AZ obniżony. Co to znaczy?" },
          { tr: "Odpowiedz bez skrótów: znaczy to, że jest teraz trochę osłabiona.", answerTr: "To znaczy, że jest Pani teraz trochę osłabiona." },
          { tr: "A co znaczy o.B. przy parametrach życiowych?" },
          { tr: "Odpowiedz, że ciśnienie, tętno i temperatura są w porządku.", answerTr: "Pani ciśnienie, tętno i temperatura są w porządku." },
          { tr: "Dostanę lek przeciwbólowy, jak będzie bolało?" },
          { tr: "Odpowiedz, że ma ci dać znać, kiedy ją boli: lekarka zleciła lek przeciwbólowy.", answerTr: "Tak, proszę dać mi znać, kiedy Panią boli. Lekarka zleciła lek przeciwbólowy." }
        ]
      },
      {
        tr: "Parametry życiowe są bez odchyleń, czyli w normie.",
        why: "W <i>Vitalzeichen</i> <b>V</b> czyta się [v], jak polskie «w», a <b>z</b> to [ts], jak «c»; w <i>Befund</i> końcowe <b>d</b> czyta się [t], jak w polskim «sad»; w <i>unauffällig</i> akcent pada na <b>un</b>."
      },
      {
        tr: "Z pacjentem mówimy bez skrótów.",
        why: "W <i>Patienten</i> <b>ti</b> czyta się [tsi], «cy»; w <i>sprechen</i> <b>sp</b> na początku to [ʃp], «szp»; w <i>Abkürzungen</i> akcent pada na <b>Ab</b>, a <b>ü</b> jest krótkie."
      }
    ]
  },
  "lesson:pfl-u06-test": {
    theme: "Sprawdzian",
    title: "Test: Raport i dokumentacja pielęgniarska",
    objectives: [
      "sprawdzić Präteritum w raporcie, spójniki, styl nominalny, stronę bierną, zdania celowe i skróty na oddziale"
    ],
    theory: [
      {
        p: "Jedenaście pytań z całej jednostki. Zalicza 70%. Pacjenci i sytuacje są zmyślone i służą tylko jako przykład: co się dokumentuje i jakich skrótów się używa, ustalają zasady placówki."
      }
    ],
    exercises: [
      {
        q: "W raporcie: «Herr Brandt ___ in der Nacht starke Schmerzen.»",
        opts: ["war", "hatte", "wurde"],
        why: "<i>Schmerzen haben</i>, w Präteritum <b>hatte</b>: forma używana także w mowie."
      },
      {
        q: "Uzupełnij: «Der Verband ___ gestern gewechselt.»",
        hint: "strona bierna w Präteritum",
        why: "<b>wurde</b>: strona bierna w Präteritum, z imiesłowem <i>gewechselt</i> na końcu."
      },
      {
        q: "Uzupełnij: «Wir lagern ihn regelmäßig um, ___ kein Dekubitus entsteht.»",
        hint: "zdanie celowe, różne podmioty",
        why: "<b>damit</b>: podmioty są różne (<i>wir</i> i <i>kein Dekubitus</i>), a odmieniony czasownik <i>entsteht</i> idzie na koniec."
      },
      {
        tr: "Präteritum czasownika haben we wszystkich osobach.",
        why: "<i>Hatte, hattest, hatte, hatten, hattet, hatten</i>: <b>b</b> z <i>haben</i> odpada, a <b>t</b> się podwaja."
      },
      {
        q: "Połącz każdy skrót z jego znaczeniem.",
        pairs: ["stan ogólny", "stan odżywienia", "w razie potrzeby", "doustnie"]
      },
      {
        q: "Które wpisy są poprawne w raporcie pielęgniarskim?",
        opts: [
          "Verweigerung der Nahrungsaufnahme am Abend.",
          "Ärztin geinformiert.",
          "VZ o.B., AZ stabil.",
          "Patientin war heute wieder nervig.",
          "Verband gewechselt, Wunde unauffällig."
        ],
        why: "<i>informiert</i> nie dostaje <i>ge-</i>, bo czasownik kończy się na <i>-ieren</i>. <i>nervig</i> to ocena, nie obserwacja."
      },
      {
        q: "Uzupełnij zdanie.",
        tr: "Była niespokojna, dlatego powiadomiłam lekarkę.",
        why: "<i>Sie <b>war</b> unruhig</i>: sein w Präteritum. <i><b>deshalb</b> habe ich</i>: po spójniku od razu stoi czasownik."
      },
      {
        q: "Ułóż wyrazy we właściwej kolejności.",
        tr: "Codziennie go uruchamiamy, żeby pozostał samodzielny.",
        why: "<i>Wir mobilisieren ihn täglich, damit er selbstständig bleibt.</i> Po <i>damit</i> odmieniony czasownik <i>bleibt</i> idzie na koniec."
      },
      {
        q: "Wybierz właściwy rodzajnik określony dla każdego rzeczownika.",
        items: ["przekazanie dyżuru", "raport pielęgniarski", "cel opieki", "samopoczucie", "stan ogólny", "działanie"]
      },
      {
        tr: "W nocy pani Keller była niespokojna, dlatego powiadomiłam lekarkę.",
        why: "W <i>unruhig</i> akcent pada na <b>un</b>, a końcowe <b>g</b> czyta się [ç]; w <i>deshalb</i> <b>s</b> i <b>h</b> wymawia się osobno; w <i>informiert</i> akcent pada na <b>miert</b>."
      },
      {
        tr: "Często proponujemy jej herbatę, żeby więcej piła.",
        why: "W <i>bieten</i> <b>ie</b> jest długie; w <i>Tee</i> podwójne <b>e</b> to długie, zamknięte «e»; w <i>trinkt</i> <b>nk</b> czyta się [ŋk]."
      }
    ]
  }
});
