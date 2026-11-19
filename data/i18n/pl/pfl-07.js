/* ============================================================
   Teksty w języku ucznia (pl) dla data/core/pfl-07.js, jednostka pfl-u07.
   Klucze wskazują id w warstwie neutralnej; tablice łączą się
   po indeksie, więc ich długość musi zgadzać się z core.
   Sprawdzane przez scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("pl", {
  "unit:pfl-u07": {
    title: "Rozmowy z pacjentami i bliskimi",
    grammarNote: "proste wyjaśnianie w zdaniach podrzędnych z dass · partykuły doch, mal, ja · uprzejme prośby w Konjunktiv II · mowa zależna w Konjunktiv I · krótkie zdania z czasownikiem na drugim miejscu w rozmowie z osobami z demencją"
  },
  "lesson:pfl-u07-l1": {
    theme: "Wyjaśniać prostymi słowami",
    title: "Wyjaśniać po prostu",
    objectives: [
      "wyjaśnić pacjentowi, co się będzie działo, bez fachowych terminów",
      "używać zdań podrzędnych z dass: das heißt, dass...; wichtig ist, dass...",
      "sprawdzić, czy pacjent zrozumiał",
      "odsyłać pytania o diagnozę do lekarza: Das bespricht der Arzt mit Ihnen"
    ],
    theory: [
      {
        h: "Dwa rejestry, jedno wyjaśnienie",
        p: "Między sobą personel mówi <em>Gastroskopie</em>, do pacjenta mówi się <em>Magenspiegelung</em>. Tak samo jest z wieloma słowami z tej lekcji: dla pacjenta <strong>Diagnose</strong> to <em>was ich habe</em>, a <strong>Prognose</strong> to <em>wie es weitergeht</em>. Żeby wyjaśnić prosto: krótkie zdania, jedna informacja naraz, codzienne niemieckie słowa zamiast łacińskich. Potem sprawdza się, czy pacjent zrozumiał, ale nie pytaniem <em>Haben Sie verstanden?</em> (prawie każdy odpowie, że tak), tylko prośbą, żeby powtórzył własnymi słowami: <em>Können Sie mit Ihren eigenen Worten wiederholen, was morgen passiert?</em>"
      },
      {
        h: "Zdania podrzędne z dass",
        p: "Wyjaśnienie często buduje się z <strong>dass</strong>: <em>Das heißt, dass...</em>, <em>Wichtig ist, dass...</em>, <em>Ich verstehe, dass...</em>, <em>Ich sage dem Arzt, dass...</em> Po <em>dass</em> odmieniony czasownik idzie <strong>na koniec</strong>: <em>dass der Arzt in Ihren Magen <b>schaut</b></em>, <em>dass Sie noch Fragen <b>haben</b></em>. W czasie złożonym na koniec idzie czasownik posiłkowy, po imiesłowie: <em>dass Sie alles verstanden <b>haben</b></em>. Przed <em>dass</em> zawsze stoi przecinek, tak jak przed polskim «że»."
      },
      {
        contrast: "Polski pacjent mówi sam z siebie «gastroskopia», «USG», «nadciśnienie»: w polszczyźnie wiele terminów medycznych to po prostu codzienne słowa. W niemieckim jest inaczej, bo obok łaciny istnieje drugi, rodzimy zestaw słów: pacjent mówi <em>Magenspiegelung</em>, <em>Ultraschall</em>, <em>Bluthochdruck</em>, a łacińskie słowo, które tobie wydaje się najjaśniejsze, dla niego bywa nieprzejrzyste. Prosto wyjaśnić po niemiecku znaczy więc przełożyć z łaciny na niemiecki, a nie tylko skrócić zdanie. Zmienia się też składnia: w polskim «że» nie przesuwa czasownika («mówię panu, że lekarz zajrzy do żołądka»), a szyk jest swobodny. W niemieckim po <em>dass</em> czasownik ląduje na samym końcu: <em>dass der Arzt in Ihren Magen schaut</em>."
      },
      {
        trap: "<em>die Aufklärung</em> na oddziale to nie jakiekolwiek «wyjaśnienie»: to rozmowa, w której z reguły lekarz informuje pacjenta przed badaniem albo zabiegiem i po której pacjent wyraża zgodę, czyli to, co w Polsce nazywa się poinformowaniem przed świadomą zgodą. Ty możesz prostymi słowami powtórzyć, co się będzie działo i jak się przygotować, ale rozmowa informacyjna i diagnoza należą do lekarza: <em>Das bespricht der Arzt mit Ihnen.</em> Uwaga też na pisownię: <em>das</em> przez jedno s to rodzajnik albo zaimek (<em>Das heißt...</em>), <em>dass</em> przez dwa s to spójnik «że» (<em>..., dass der Arzt...</em>)."
      },
      {
        tip: "Kiedy pacjent zadaje pytanie, na które nie tobie odpowiadać, nie zostawiaj go bez odpowiedzi: przekaż je dalej i obiecaj coś, czego możesz dotrzymać. <em>Das bespricht der Arzt mit Ihnen. Ich sage ihm, dass Sie noch Fragen haben.</em> Pacjent wie wtedy, że pytanie dotarło, a ty nie powiedziałaś niczego, czego nie wolno ci było powiedzieć."
      }
    ],
    grammar: {
      title: "Wyjaśniać z dass",
      note: "Zdanie główne, przecinek, <b>dass</b> i odmieniony czasownik <b>na końcu</b>. W czasie złożonym: imiesłów, a po nim czasownik posiłkowy.",
      table: {
        head: ["zdanie główne", "dass + czasownik na końcu"],
        rows: [
          ["Das heißt,", "dass der Arzt in Ihren Magen schaut."],
          ["Wichtig ist,", "dass Sie ab Mitternacht nichts mehr essen."],
          ["Ich sage dem Arzt,", "dass Sie noch Fragen haben."],
          ["Ich möchte sicher sein,", "dass Sie alles verstanden haben."]
        ]
      },
      examples: [
        { tr: "Jutro rano będzie miał pan gastroskopię.", note: "Magenspiegelung: słowo pacjenta na Gastroskopie" },
        { tr: "To znaczy, że lekarz zajrzy do pana żołądka małą kamerą.", note: "dass: czasownik schaut idzie na koniec" },
        { tr: "Ważne, żeby od północy niczego już pan nie jadł.", note: "Wichtig ist, dass...: dla informacji, o której nie wolno zapomnieć" },
        { tr: "Powiem lekarzowi, że ma pan jeszcze pytania.", note: "dass: czasownik haben idzie na koniec" },
        { tr: "Chcę mieć pewność, że wszystko pan zrozumiał.", note: "czas złożony: verstanden haben, posiłkowy na końcu" },
        { tr: "O tym porozmawia z panem lekarz.", note: "zdanie na pytania o diagnozę" }
      ]
    },
    vocab: [
      "diagnoza",
      "rokowanie",
      "badanie",
      "gastroskopia (słowo pacjenta)",
      "gastroskopia (termin fachowy)",
      "rozmowa informacyjna przed badaniem albo zabiegiem",
      "termin fachowy",
      "wyjaśniać",
      "zrozumiały",
      "dopytać",
      "niejasny",
      "powtórzyć"
    ],
    dialogue: [
      "Panie Schulz, wyjaśnię krótko, co będzie jutro. Jutro rano będzie miał pan gastroskopię.",
      "Gastroskopia, tak powiedział lekarz. Co to dokładnie jest?",
      "To znaczy, że lekarz zajrzy do pana żołądka małą kamerą. Ważne, żeby od północy niczego już pan nie jadł.",
      "A co mi jest? To coś poważnego?",
      "Rozumiem, że się pan martwi. O tym porozmawia z panem lekarz.",
      "Przyjdzie jeszcze dzisiaj?",
      "Powiem mu, że ma pan jeszcze pytania. Czy coś jeszcze jest niejasne?",
      "Nie, dziękuję. Dobrze mi pani to wyjaśniła."
    ],
    culture: {
      title: "Po niemiecku: kto informuje pacjenta",
      text: "<p>W Niemczech prawo wymaga, żeby pacjenta przed badaniem albo zabiegiem poinformować w rozmowie, tak zwanej <i>Aufklärung</i>, językiem, który może zrozumieć. Rozmowę prowadzi z reguły lekarz, a pacjent często podpisuje formularz. Pielęgniarki i pielęgniarze wyjaśniają przygotowanie i część praktyczną: od kiedy nie jeść, co zabrać, jak wygląda dzień.</p><p>Wiele placówek ma też materiały w <i>Einfache Sprache</i> albo <i>Leichte Sprache</i>, czyli teksty pisane krótkimi zdaniami i zwykłymi słowami, podobne do polskich tekstów łatwych do czytania (ETR). Kto uczy się niemieckiego, często uważa je za jaśniejsze od tekstów urzędowych: warto je czytać także dla siebie.</p>"
    },
    exercises: [
      {
        q: "Pacjent pyta: «Was habe ich denn?» Lekarz jeszcze z nim nie rozmawiał. Która odpowiedź mieści się w granicach twojej roli?",
        opts: [
          "Das bespricht der Arzt mit Ihnen.",
          "Das ist sicher nichts Schlimmes.",
          "Das darf ich nicht sagen, fragen Sie nicht."
        ],
        why: "Diagnozę przekazuje lekarz: <b>Das bespricht der Arzt mit Ihnen.</b> <i>Das ist sicher nichts Schlimmes</i> to zapewnienie, którego nie możesz dać, a trzecia odpowiedź ucina rozmowę, zamiast skierować pytanie tam, gdzie trzeba."
      },
      {
        tr: "Czas teraźniejszy czasownika erklären, wszystkie osoby.",
        why: "<i>Erkläre, erklärst, erklärt, erklären, erklärt, erklären</i>: czasownik regularny. Przedrostek <i>er-</i> nigdy się nie odrywa, a <b>ä</b> zostaje we wszystkich osobach."
      },
      {
        q: "Uzupełnij: «Wichtig ist, ___ Sie ab Mitternacht nichts mehr essen.»",
        hint: "spójnik «że»",
        why: "<b>dass</b>, przez dwa s: to spójnik, który otwiera zdanie podrzędne, i dlatego czasownik <i>essen</i> idzie na koniec."
      },
      {
        q: "Uzupełnij zdanie.",
        tr: "To znaczy, że lekarz zajrzy do pana żołądka małą kamerą.",
        why: "<i>Das heißt, <b>dass</b> der Arzt ... in Ihren Magen <b>schaut</b></i> (może być też <i>sieht</i>): po <i>dass</i> odmieniony czasownik idzie na koniec."
      },
      {
        q: "Połącz każde słowo z jego znaczeniem.",
        pairs: ["diagnoza", "rokowanie", "rozmowa informacyjna przed zabiegiem", "badanie"]
      },
      {
        q: "Wybierz właściwy rodzajnik określony dla każdego rzeczownika.",
        items: ["diagnoza", "termin fachowy", "żołądek", "badanie", "rozmowa", "termin, wizyta"]
      },
      {
        q: "Które zdania są poprawne?",
        opts: [
          "Ich sage dem Arzt, dass Sie noch Fragen haben.",
          "Wichtig ist, dass Sie ab Mitternacht nichts mehr essen.",
          "Das heißt, dass der Arzt schaut in Ihren Magen.",
          "Ich verstehe, dass Sie Angst haben.",
          "Ich hoffe, dass Sie haben gut geschlafen."
        ],
        why: "Po <i>dass</i> odmieniony czasownik idzie na koniec: <i>dass der Arzt in Ihren Magen <b>schaut</b></i>, <i>dass Sie gut geschlafen <b>haben</b></i>. W czasie złożonym posiłkowy stoi po imiesłowie."
      },
      {
        q: "Ułóż słowa we właściwej kolejności.",
        tr: "Powiem lekarzowi, że ma pan jeszcze pytania.",
        why: "<i>Ich sage dem Arzt, dass Sie noch Fragen haben.</i> W zdaniu głównym czasownik <i>sage</i> stoi na drugim miejscu; po przecinku <i>dass</i> wysyła <i>haben</i> na koniec."
      },
      {
        q: "Przetłumacz dla pacjenta, bez terminów fachowych: «Jutro rano będzie miał pan gastroskopię.»",
        why: "<i>Morgen früh bekommen Sie eine Magenspiegelung.</i> Do pacjenta mówi się <b>Magenspiegelung</b>, nie <i>Gastroskopie</i>; «jutro rano» to <b>morgen früh</b>. Może być też <i>Sie haben morgen früh eine Magenspiegelung</i>."
      },
      {
        q: "Dzień przed badaniem.",
        setting: "Pan Schulz ma jutro gastroskopię i się martwi. Lekarz nie rozmawiał z nim jeszcze o wynikach.",
        lines: [
          { tr: "Co mi jest? To coś poważnego?" },
          { tr: "Odpowiedz, że rozumiesz jego niepokój i że porozmawia o tym z nim lekarz.", answerTr: "Rozumiem, że się pan martwi. O tym porozmawia z panem lekarz." },
          { tr: "A co to jest gastroskopia?" },
          { tr: "Wyjaśnij to prostymi słowami.", answerTr: "To znaczy, że lekarz zajrzy do pana żołądka małą kamerą." },
          { tr: "Mogę dziś wieczorem jeszcze coś zjeść?" },
          { tr: "Odpowiedz, że tak, ale że ważne jest, żeby od północy niczego już nie jadł.", answerTr: "Tak, ale ważne, żeby od północy niczego już pan nie jadł." }
        ]
      },
      {
        tr: "Rozumiem, że się pan martwi. O tym porozmawia z panem lekarz.",
        why: "W <i>verstehe</i> <b>st</b> na początku rdzenia czyta się [ʃt], jak polskie «szt»; w <i>bespricht</i> <b>sp</b> to [ʃp], a <b>ch</b> po <b>i</b> to [ç], miękkie, bliskie polskiemu «ś»; w <i>Arzt</i> <b>z</b> to [ts], jak polskie «c»."
      },
      {
        tr: "Powiem lekarzowi, że ma pan jeszcze pytania.",
        why: "W <i>Ich</i> <b>ch</b> po <b>i</b> to [ç]; w <i>noch</i> <b>ch</b> po <b>o</b> to [x], jak polskie «ch»; w <i>Fragen</i> <b>a</b> jest długie."
      }
    ]
  },
  "lesson:pfl-u07-l2": {
    theme: "Uspokajać i dodawać otuchy",
    title: "Uspokajać i dodawać otuchy",
    objectives: [
      "uspokoić pacjenta, który się boi, nie obiecując tego, co nie zależy od ciebie",
      "używać partykuł doch, mal i ja, żeby prośba brzmiała cieplej",
      "formułować uprzejme prośby i propozycje w Konjunktiv II: könnten, wäre",
      "pochwalić mały postęp"
    ],
    theory: [
      {
        h: "Partykuły doch, mal, ja",
        p: "<strong>Modalpartikeln</strong> to krótkie, nieakcentowane słowa, które nie zmieniają treści zdania, tylko jego ton. <em>doch</em> w zaproszeniu dodaje otuchy, jak polskie «no» albo «-że»: <em>Setzen Sie sich <b>doch</b> erst mal hin.</em> <em>mal</em> sprawia, że prośba brzmi lekko, jak «na chwilkę»: <em>Atmen Sie <b>mal</b> tief ein.</em> <em>ja</em> przypomina coś, co obie strony wiedzą, i dlatego uspokaja, jak «przecież»: <em>Ich bin <b>ja</b> direkt neben Ihnen.</em> Stoją w środku zdania, po czasowniku i zaimkach, nigdy na pierwszym miejscu. Często się łączą: <em>doch mal</em>, <em>doch erst mal</em>."
      },
      {
        h: "Uprzejmy Konjunktiv II",
        p: "Żeby uprzejmie poprosić albo coś zaproponować, używa się <strong>Konjunktiv II</strong>, jak polskiego trybu przypuszczającego: <em><b>Könnten</b> Sie mir sagen, wo es weh tut?</em> <em><b>Wäre</b> es Ihnen recht, wenn ich kurz bei Ihnen bleibe?</em> <em>Es <b>wäre</b> gut, wenn Sie heute ein paar Schritte gehen.</em> Najczęstszych form jest niewiele: <em>könnte, wäre, hätte, würde</em>. <em>Könnte</em> powstaje z Präteritum <em>konnte</em> z przegłosem. W pytaniu odmieniony czasownik stoi na pierwszym miejscu, jak w każdym pytaniu rozstrzygającym."
      },
      {
        contrast: "Polski ma swoje partykuły i robi nimi podobną robotę: «niech pan <i>no</i> usiądzie», «usiądź<i>że</i>», «<i>przecież</i> jestem obok». Dlatego niemieckie partykuły są dla ciebie mniej obce niż dla wielu innych uczniów, ale nie przekładają się jeden do jednego. <em>ja</em> to najczęściej «przecież», <em>doch</em> w zaproszeniu to raczej «no» albo «-że», a <em>mal</em> nie ma stałego odpowiednika («na chwilkę», zdrobnienie, sam ton). Uwaga na rejestr: «-że» i «no» w polskim brzmią potocznie albo niecierpliwie, a <em>doch</em> w <em>Setzen Sie sich doch</em> jest w pełni uprzejme wobec pacjenta. Bez <em>doch</em>, <em>mal</em> czy <em>ja</em> zdanie niemieckie zostaje poprawne, ale brzmi chłodniej i bardziej jak polecenie (<em>Setzen Sie sich hin.</em>). Konjunktiv II też ma polski odpowiednik: <em>Könnten Sie...?</em> to prawie słowo w słowo «Czy mógłby pan...?». Tyle że polski tryb przypuszczający robi się jednym klockiem, «by», doklejanym do formy przeszłej, a niemiecki ma własne formy czasownika (<em>könnte</em>, <em>wäre</em>) albo <em>würde</em> z bezokolicznikiem."
      },
      {
        trap: "<em>doch</em> nie znaczy tu «jednak» ani «ale», a <em>mal</em> nie ma nic wspólnego z polskim «mało»: to krótka forma od <em>einmal</em>. Uwaga też na <em>versprechen</em> i <em>sich versprechen</em>: <em>Ich kann Ihnen nichts versprechen</em> znaczy «nie mogę panu niczego obiecać», ale <em>Ich habe mich versprochen</em> znaczy «przejęzyczyłam się». A zdania, które brzmią uspokajająco, <em>Alles wird gut</em> albo <em>Sie fallen nicht</em>, to obietnice, które nie zależą od ciebie: lepiej powiedzieć, co ty robisz: <em>Ich bleibe bei Ihnen.</em>"
      },
      {
        tip: "Kolejność, która działa prawie zawsze: nazwij strach (<em>Ich verstehe, dass Sie Angst haben</em>), powiedz, co robisz (<em>Ich bin ja direkt neben Ihnen</em>), zaproponuj mały krok (<em>Setzen Sie sich doch erst mal an die Bettkante</em>) i pochwal to, co się udało (<em>Das haben Sie gut gemacht</em>)."
      }
    ],
    grammar: {
      title: "Partykuły i uprzejme prośby",
      note: "<b>doch</b>, <b>mal</b>, <b>ja</b>: bez akcentu, w środku zdania, nigdy na pierwszym miejscu. Żeby poprosić uprzejmie: <b>könnten</b>, <b>wäre</b>, <b>würden</b>.",
      table: {
        head: ["forma", "co robi", "przykład"],
        rows: [
          ["doch", "zachęcające zaproszenie, «no», «-że»", "Setzen Sie sich doch erst mal hin."],
          ["mal", "lekka prośba, «na chwilkę»", "Atmen Sie mal tief ein."],
          ["ja", "coś, co obie strony wiedzą, «przecież»", "Ich bin ja direkt neben Ihnen."],
          ["könnten", "uprzejme pytanie", "Könnten Sie mir kurz sagen, wo es weh tut?"],
          ["wäre", "uprzejma propozycja", "Wäre es Ihnen recht, wenn ich kurz bei Ihnen bleibe?"]
        ]
      },
      examples: [
        { tr: "Niech pani najpierw spokojnie usiądzie.", note: "doch erst mal: życzliwe zaproszenie, krok po kroku" },
        { tr: "Proszę spokojnie wdychać i wydychać.", note: "mal: prośba brzmi lżej" },
        { tr: "Przecież zna to pani już od wczoraj.", note: "ja: przypomina znaną rzecz, uspokaja" },
        { tr: "Czy mogłaby pani krótko powiedzieć, gdzie boli?", note: "Konjunktiv II od können: könnten" },
        { tr: "Czy będzie pani odpowiadało, jeśli chwilę z panią zostanę?", note: "Konjunktiv II od sein: wäre" },
        { tr: "Dobrze by było, gdyby zrobiła pani dziś kilka kroków.", note: "Es wäre gut, wenn...: rada bez polecenia" }
      ]
    },
    vocab: [
      "strach, lęk",
      "troska, zmartwienie",
      "uspokajać",
      "dodawać otuchy",
      "zachęta, otucha",
      "zdenerwowany, podekscytowany",
      "pocieszać",
      "postęp",
      "obiecywać",
      "szczery",
      "pełen nadziei, ufny",
      "głęboki; głęboko"
    ],
    dialogue: [
      "Tak strasznie boję się wstać. Wczoraj zakręciło mi się w głowie.",
      "Rozumiem, że się pani boi. Niech pani najpierw spokojnie usiądzie na brzegu łóżka.",
      "A jak upadnę?",
      "Przecież jestem tuż obok pani. Proszę spokojnie wdychać i wydychać.",
      "Dobrze. Mogłaby mi pani podać rękę?",
      "Oczywiście. Czy będzie pani odpowiadało, jeśli pójdziemy do okna?",
      "Spróbuję. Uff, ale to męczące.",
      "Świetnie pani poszło. Jutro spróbujemy znowu, krok po kroku."
    ],
    culture: {
      title: "Po niemiecku: najpierw się pyta, potem dotyka",
      text: "<p>Na niemieckich oddziałach do każdego dorosłego pacjenta mówi się <i>Sie</i> i zwraca się po nazwisku: <i>Frau Wagner</i>, nie po imieniu. Dotyk zwykle się zapowiada albo o niego pyta: <i>Darf ich Ihre Hand nehmen?</i> Wielu pacjentów lubi dłoń na ramieniu, inni nie, a pytanie zostawia im wybór.</p><p>Pochwały są oszczędniejsze niż w Polsce: <i>Das haben Sie gut gemacht</i> to już ciepły komplement. Zbyt wielki zachwyt nad małym krokiem może brzmieć tak, jakby mówiło się do dziecka.</p>"
    },
    exercises: [
      {
        q: "Chcesz życzliwie i z zachętą poprosić pacjentkę, żeby usiadła. Które zdanie jest poprawne?",
        opts: [
          "Setzen Sie sich doch erst mal hin.",
          "Sie setzen sich jetzt hin.",
          "Setzen Sie doch sich erst mal hin."
        ],
        why: "<b>doch erst mal</b> ociepla zaproszenie. Partykuła stoi po zaimku <i>sich</i>, nie przed nim. <i>Sie setzen sich jetzt hin</i> jest poprawne, ale brzmi jak polecenie."
      },
      {
        tr: "Konjunktiv II czasownika können, wszystkie osoby.",
        why: "<i>Könnte, könntest, könnte, könnten, könntet, könnten</i>: wychodzi się od Präteritum <i>konnte</i> i dodaje przegłos, <b>ö</b>."
      },
      {
        q: "Uzupełnij: «Es ___ gut, wenn Sie heute ein paar Schritte gehen.»",
        hint: "Konjunktiv II od sein",
        why: "<b>wäre</b>: «byłoby». Zdaniem <i>Es wäre gut, wenn...</i> dajesz radę, nie wydając polecenia."
      },
      {
        q: "Uzupełnij partykułami doch i ja.",
        tr: "Niech pani najpierw spokojnie usiądzie. Przecież jestem tuż obok pani.",
        why: "<i>Setzen Sie sich <b>doch</b> erst mal hin</i>: zachęcające zaproszenie. <i>Ich bin <b>ja</b> direkt neben Ihnen</i>: przypomina coś, co pacjentka już widzi, i ją uspokaja."
      },
      {
        q: "Które zdania uspokajają, nie obiecując za wiele?",
        opts: [
          "Ich bleibe bei Ihnen.",
          "Es wird ganz sicher alles gut.",
          "Wenn Sie etwas brauchen, drücken Sie die Klingel.",
          "Das schaffen Sie schon, Sie sind ja nicht krank.",
          "Ich verstehe, dass Sie Angst haben."
        ],
        why: "Uspokajasz tym, co zależy od ciebie: zostaniesz, jesteś pod ręką, traktujesz strach poważnie. <i>Es wird ganz sicher alles gut</i> to obietnica, której nie możesz złożyć, a <i>Sie sind ja nicht krank</i> zaprzecza temu, co pacjent czuje."
      },
      {
        q: "Wybierz właściwy rodzajnik określony dla każdego rzeczownika.",
        items: ["strach", "postęp", "zachęta", "okno", "łóżko", "krok"]
      },
      {
        q: "Połącz każde zdanie z jego tłumaczeniem.",
        pairs: ["Niech pani usiądzie.", "Proszę na chwilkę głęboko wciągnąć powietrze.", "Przecież pani to zna.", "Mógłby mi pan pomóc?"]
      },
      {
        q: "Ułóż słowa we właściwej kolejności.",
        tr: "Czy będzie pani odpowiadało, jeśli chwilę z panią zostanę?",
        why: "<i>Wäre es Ihnen recht, wenn ich kurz bei Ihnen bleibe?</i> W pytaniu czasownik <i>wäre</i> stoi na pierwszym miejscu; po <i>wenn</i> czasownik <i>bleibe</i> idzie na koniec."
      },
      {
        q: "Przetłumacz z Konjunktiv II: «Czy mogłaby mi pani powiedzieć, gdzie boli?»",
        why: "<i>Könnten Sie mir sagen, wo es weh tut?</i> (pisze się też <i>wehtut</i>). Po <i>wo</i> czasownik idzie na koniec."
      },
      {
        q: "Pierwsze wstawanie.",
        setting: "Pani Wagner ma pierwszy raz wstać po operacji i się boi.",
        lines: [
          { tr: "Tak strasznie boję się wstać." },
          { tr: "Odpowiedz, że rozumiesz jej strach, i zaproponuj, żeby najpierw usiadła na brzegu łóżka.", answerTr: "Rozumiem, że się pani boi. Niech pani najpierw spokojnie usiądzie na brzegu łóżka." },
          { tr: "A jak upadnę?" },
          { tr: "Uspokój ją: jesteś tuż obok, idziecie powoli.", answerTr: "Przecież jestem tuż obok pani. Idziemy bardzo powoli." },
          { tr: "Uff, ale to męczące." },
          { tr: "Pochwal ją i powiedz, że jutro spróbujecie znowu.", answerTr: "Świetnie pani poszło. Jutro spróbujemy znowu." }
        ]
      },
      {
        tr: "Przecież jestem tuż obok pani. Proszę spokojnie wdychać i wydychać.",
        why: "<i>ja</i> czyta się [jaː], jak polskie «ja», tylko z długim a; w <i>ruhig</i> końcowe <b>g</b> to [ç]; w <i>ein</i> dwugłoska <b>ei</b> to [aɪ], jak «aj». Partykuła <i>ja</i> nie ma tu akcentu."
      },
      {
        tr: "Niech pani najpierw spokojnie usiądzie.",
        why: "W <i>Setzen</i> początkowe <b>s</b> jest dźwięczne [z], a <b>tz</b> to [ts], jak polskie «c»; w <i>doch</i> <b>ch</b> po <b>o</b> to [x], w <i>sich</i> po <b>i</b> to [ç]. <i>doch</i> i <i>mal</i> zostają bez akcentu."
      }
    ]
  },
  "lesson:pfl-u07-l3": {
    theme: "Bliscy i tajemnica zawodowa",
    title: "Informowanie bliskich",
    objectives: [
      "przekazywać bliskim tylko te informacje, na które pacjent się zgodził",
      "relacjonować, co powiedział pacjent, w Konjunktiv I: er habe, sie sei",
      "odsyłać do lekarza pytania o diagnozę i wyniki badań",
      "wyjaśnić, dlaczego przez telefon nie udziela się informacji"
    ],
    theory: [
      {
        h: "Co wolno powiedzieć i komu",
        p: "Pielęgniarki i pielęgniarzy także obowiązuje <strong>Schweigepflicht</strong>, tajemnica zawodowa, i obowiązuje ona również wobec bliskich. Zanim poinformujesz <strong>Angehöriger</strong>, potrzebna jest zgoda pacjenta, <strong>das Einverständnis</strong>: <em>Ihr Vater ist damit einverstanden, dass wir Sie informieren.</em> Nawet wtedy przekazujesz, jak się pacjent czuje i co mówi; diagnozę, wyniki badań i rokowanie przekazuje lekarz: <em>Das bespricht der Arzt mit Ihnen. Ich kann gern ein Arztgespräch für Sie vereinbaren.</em> Przez telefon nie widać, kto dzwoni, dlatego wiele placówek nie udziela w ten sposób informacji: <em>Am Telefon darf ich leider keine Auskunft geben.</em>"
      },
      {
        h: "Konjunktiv I do relacjonowania",
        p: "Do przytaczania cudzych słów niemiecki ma <strong>Konjunktiv I</strong>; w trzeciej osobie liczby pojedynczej to rdzeń czasownika + <em>-e</em>. <em>Ich habe gut geschlafen</em> zmienia się w <em>Er sagt, er <b>habe</b> gut geschlafen.</em> <em>Sein</em> jest nieregularne: <em>ich sei, er sei, wir seien, sie seien</em>. Używa się go głównie w trzeciej osobie liczby pojedynczej, bo tam różni się od trybu oznajmującego. Tam, gdzie Konjunktiv I brzmi tak samo jak tryb oznajmujący (<em>sie haben</em>), bierze się Konjunktiv II: <em>Sie sagen, sie <b>hätten</b> Angst.</em> W mowie wielu po prostu używa <em>dass</em> z trybem oznajmującym: <em>Sie hat gesagt, dass sie gut geschlafen hat.</em> W dokumentacji pielęgniarskiej Konjunktiv I to forma typowa: <em>Patientin gibt an, sie <b>habe</b> keine Schmerzen.</em> Mówi, że to wypowiedź pacjenta, a nie fakt, który sprawdziłaś."
      },
      {
        contrast: "W polskim mowa zależna nie ma osobnego trybu: «mówi, że dobrze spał», «powiedział, że dobrze spał», tryb oznajmujący i ten sam czas co w wypowiedzi. Trybu przypuszczającego z «by» używa się tylko po czasownikach woli i prośby («prosił, żeby przyszła»), nie do zwykłej relacji. Jeśli w polskim chcesz zaznaczyć dystans do cudzych słów, dokładasz słowa: «podobno», «według pacjentki», «pacjentka podaje, że». Niemiecki ma na to formę czasownika, Konjunktiv I, rzadką w mowie, ale przydatną w dokumentacji: <em>sie sei müde</em> oddziela to, co pacjentka mówi, od tego, co sama zaobserwowałaś, tak jak w polskiej dokumentacji «pacjentka zgłasza zmęczenie». Także zasady wobec bliskich są ci znane: polska tajemnica zawodowa pielęgniarki też obowiązuje wobec rodziny, a informacje dostaje osoba upoważniona przez pacjenta. W Niemczech zasada jest równie jasna: to pacjent decyduje, kto i co może wiedzieć, a syn czy żona nie mają automatycznie prawa do informacji."
      },
      {
        trap: "<em>er habe</em> to nie błąd zamiast <em>er hat</em>: to forma mowy zależnej. <em>sie sei müde</em> tłumaczy się «(mówi, że) jest zmęczona», w trybie oznajmującym, a nie «byłaby zmęczona». <em>der Angehörige</em> to przymiotnik użyty jako rzeczownik i zmienia końcówkę: <em>der Angehörige</em>, ale <em>ein Angehöriger</em>, a w liczbie mnogiej <em>die Angehörigen</em>. <em>Auskunft geben</em> to «udzielić informacji na prośbę»; nie myl tego z <em>Aufklärung</em>, rozmową informacyjną lekarza."
      },
      {
        tip: "Jeśli ktoś z bliskich naciska, żeby poznać diagnozę, nie musisz po prostu odmawiać: wskaż właściwą drogę. <em>Das bespricht der Arzt mit Ihnen. Ich kann gern ein Arztgespräch für Sie vereinbaren.</em> Bliski dostaje termin rozmowy, a ty zostajesz w granicach tego, co wolno ci powiedzieć."
      }
    ],
    grammar: {
      title: "Relacjonować w Konjunktiv I",
      note: "Konjunktiv I, 3. osoba l. poj. = rdzeń + <b>-e</b>: er <b>habe</b>, sie <b>fühle</b>. <b>sein</b>: sei, seien. Jeśli brzmi jak tryb oznajmujący, bierze się Konjunktiv II: sie <b>hätten</b>.",
      table: {
        head: ["powiedział pacjent", "zrelacjonowane"],
        rows: [
          ["Ich habe gut geschlafen.", "Er sagt, er habe gut geschlafen."],
          ["Ich bin müde.", "Sie gibt an, sie sei müde."],
          ["Ich fühle mich besser.", "Sie sagt, sie fühle sich besser."],
          ["Wir haben Angst.", "Sie sagen, sie hätten Angst."]
        ]
      },
      examples: [
        { tr: "Pani mama powiedziała, że dobrze spała.", note: "w mowie: dass z trybem oznajmującym" },
        { tr: "Pani mama mówi, że dobrze spała.", note: "Konjunktiv I: sie habe" },
        { tr: "Pacjentka podaje, że jest zmęczona.", note: "dokumentacja: angeben + Konjunktiv I, sie sei" },
        { tr: "Pacjent podaje, że nie odczuwa bólu.", note: "er habe: wypowiedź pacjenta, nie pomiar" },
        { tr: "Niestety przez telefon nie mogę udzielać informacji.", note: "Auskunft geben: informować na prośbę" },
        { tr: "Pani tata zgadza się, żebyśmy panią informowali.", note: "damit einverstanden, dass...: najpierw zgoda" }
      ]
    },
    vocab: [
      "członek rodziny, bliski (ein Angehöriger, l. mn. die Angehörigen)",
      "tajemnica zawodowa",
      "informacja (udzielana na prośbę)",
      "zgoda",
      "zgadzający się",
      "pełnomocnictwo na wypadek niezdolności do decydowania",
      "podawać, zgłaszać",
      "poufny",
      "przekazać dalej",
      "rozmowa z lekarzem",
      "godziny odwiedzin",
      "opieka paliatywna"
    ],
    dialogue: [
      "Dzień dobry, jestem córką pana Schulza. Jak się czuje mój tata?",
      "Dzień dobry, pani Schulz. Pani tata zgadza się, żebyśmy panią informowali. Rano powiedział, że dobrze spał.",
      "A badanie? Co wykazało?",
      "O tym porozmawia z panią lekarz. Chętnie umówię panią na rozmowę z nim.",
      "Czy mogę porozmawiać z lekarzem jeszcze dzisiaj?",
      "Teraz jest na odprawie. Przekażę mu pani pytanie.",
      "Dziękuję. Może zadzwoni też moja siostra.",
      "Niestety przez telefon nie możemy udzielać informacji. Najlepiej, żeby przyszła z panią na rozmowę z lekarzem."
    ],
    culture: {
      title: "Po niemiecku: kto decyduje, gdy pacjent nie może",
      text: "<p>W Niemczech tajemnicę zawodową przewiduje kodeks karny i obowiązuje ona lekarzy, pielęgniarki i pielęgniarzy. Pacjent może zwolnić personel z tajemnicy wobec konkretnych osób, a placówka to odnotowuje.</p><p>Gdy pacjent nie może już sam decydować, liczy się osoba, która ma <i>Vorsorgevollmacht</i>, pełnomocnictwo spisane zawczasu, albo <i>Betreuer</i>, opiekun ustanowiony przez sąd. Polskie pełnomocnictwo albo upoważnienie do informacji o stanie zdrowia nie działa tak samo, więc nie zakładaj, że zasady są te same. Kim są te osoby, jest zwykle zapisane w dokumentacji: jeśli ktoś z bliskich mówi, że ma pełnomocnictwo, sprawdza się to tam albo pyta lekarza, a nie rozstrzyga ustnie na korytarzu. Co wolno powiedzieć i komu, ustalają zasady placówki razem z lekarzem.</p>"
    },
    exercises: [
      {
        q: "Przekaż córce, co powiedział jej ojciec: «Ich habe gut geschlafen.» Które zdanie jest poprawne?",
        opts: [
          "Er hat gesagt, er habe gut geschlafen.",
          "Er hat gesagt, er hätte gut schlafen.",
          "Er hat gesagt, ich habe gut geschlafen."
        ],
        why: "W mowie zależnej zaimek przechodzi w trzecią osobę (<i>er</i>), a czasownik w Konjunktiv I: <b>er habe</b> gut geschlafen. <i>hätte ... schlafen</i> nie ma imiesłowu, a <i>ich habe</i> sprawia, że mówisz o sobie."
      },
      {
        tr: "Konjunktiv I czasownika sein: ich, er/sie, wir, sie.",
        why: "<i>Sei, sei, seien, seien</i>: pierwsza i trzecia osoba liczby pojedynczej są takie same i nie mają końcówki. To najczęstsza forma w mowie zależnej: <i>sie sei müde</i>."
      },
      {
        q: "Uzupełnij (w dokumentacji): «Die Patientin gibt an, sie ___ müde.»",
        hint: "Konjunktiv I od sein",
        why: "<b>sei</b>: w dokumentacji Konjunktiv I pokazuje, że to wypowiedź pacjentki. W mowie potocznej słychać też <i>wäre</i>."
      },
      {
        q: "Uzupełnij formą Konjunktiv I czasownika haben.",
        tr: "Pacjent podaje, że nie odczuwa bólu. Mówi, że dobrze spał.",
        why: "<i>er <b>habe</b> keine Schmerzen</i>, <i>er <b>habe</b> gut geschlafen</i>: rdzeń <i>hab-</i> + <i>-e</i>, w trzeciej osobie."
      },
      {
        q: "Które zdania szanują tajemnicę zawodową?",
        opts: [
          "Am Telefon darf ich leider keine Auskunft geben.",
          "Ihr Vater hat Krebs, aber sagen Sie es ihm nicht.",
          "Das bespricht der Arzt mit Ihnen.",
          "Der Patient im Nachbarbett hat das auch.",
          "Ich frage Ihren Vater, ob wir Sie informieren dürfen."
        ],
        why: "W tej placówce nie udziela się informacji przez telefon, diagnozę przekazuje lekarz, a przed poinformowaniem bliskiego pyta się pacjenta. Pozostałe dwa zdania ujawniają dane, które nie należą ani do bliskiego, ani do ciebie."
      },
      {
        q: "Wybierz właściwy rodzajnik określony dla każdego rzeczownika.",
        items: ["tajemnica zawodowa", "informacja (udzielana na prośbę)", "zgoda", "rozmowa z lekarzem", "pełnomocnictwo na przyszłość", "telefon"]
      },
      {
        q: "Połącz każde słowo z jego znaczeniem.",
        pairs: ["tajemnica zawodowa", "informacja (udzielana na prośbę)", "zgoda", "pełnomocnictwo na przyszłość"]
      },
      {
        q: "Ułóż słowa we właściwej kolejności.",
        tr: "Pani tata zgadza się, żebyśmy panią informowali.",
        why: "<i>Ihr Vater ist damit einverstanden, dass wir Sie informieren.</i> <i>damit</i> zapowiada zdanie podrzędne; po <i>dass</i> czasownik <i>informieren</i> idzie na koniec. Polski ma tu «żebyśmy», niemiecki zostaje przy zwykłym <i>dass</i> i trybie oznajmującym."
      },
      {
        q: "Przetłumacz dla córki: «Pani mama mówi, że dziś czuje się lepiej.»",
        why: "<i>Ihre Mutter sagt, sie fühle sich heute besser</i>, z Konjunktiv I; w mowie może być też <i>Ihre Mutter sagt, dass sie sich heute besser fühlt</i>. «Dziś» to <b>heute</b>."
      },
      {
        q: "Córka na oddziale.",
        setting: "Córka pana Schulza pyta o ojca. Ojciec zgodził się, żeby ją informować, lekarz jeszcze z nią nie rozmawiał.",
        lines: [
          { tr: "Jak się czuje mój tata?" },
          { tr: "Przekaż, że rano powiedział, że dobrze spał.", answerTr: "Rano powiedział, że dobrze spał." },
          { tr: "Co wykazało badanie?" },
          { tr: "Odeślij do lekarza i zaproponuj rozmowę.", answerTr: "O tym porozmawia z panią lekarz. Chętnie umówię panią na rozmowę z nim." },
          { tr: "Moja siostra zadzwoni wieczorem. Może jej pani wszystko powiedzieć?" },
          { tr: "Wyjaśnij, że przez telefon nie możecie udzielać informacji.", answerTr: "Niestety przez telefon nie możemy udzielać informacji." }
        ]
      },
      {
        tr: "O tym porozmawia z panią lekarz. Chętnie umówię panią na rozmowę z nim.",
        why: "W <i>Arztgespräch</i> akcent pada na <b>Arzt</b>, <b>sp</b> to [ʃp], a <b>ch</b> po <b>ä</b> to [ç]; w <i>vereinbaren</i> akcent pada na <b>ein</b>, nie na przedostatnią sylabę, jak by podpowiadał polski nawyk."
      },
      {
        tr: "Niestety przez telefon nie mogę udzielać informacji.",
        why: "W <i>Telefon</i> akcent pada na ostatnią sylabę, <b>fon</b>, a nie na przedostatnią jak w polskim «telefon»; w <i>leider</i> dwugłoska <b>ei</b> to [aɪ], jak «aj»; w <i>Auskunft</i> akcent pada na <b>Aus</b>."
      }
    ]
  },
  "lesson:pfl-u07-l4": {
    theme: "Demencja",
    title: "Osoby z demencją",
    objectives: [
      "rozmawiać z osobą z demencją krótkimi zdaniami, z czasownikiem na drugim miejscu",
      "odpowiadać zgodnie z walidacją: przyjąć emocję zamiast poprawiać",
      "unikać infantylnego «my» i tonu jak do dziecka",
      "rozpoznać, kiedy nagłe splątanie trzeba zgłosić"
    ],
    theory: [
      {
        h: "Krótkie zdania, czasownik na drugim miejscu",
        p: "W rozmowie z osobą z demencją każde zdanie niesie <strong>jedną informację</strong>. Używa się krótkich zdań głównych z odmienionym czasownikiem na <strong>drugim miejscu</strong>; na pierwszym może stać czas, który pomaga się zorientować: <em><b>Jetzt</b> waschen Sie Ihr Gesicht.</em> <em><b>Nach dem Frühstück</b> kommt Ihre Tochter.</em> Bez zdań podrzędnych, bez dwóch poleceń w jednym zdaniu. Za każdym razem się przedstawiasz, imieniem: <em>Ich bin Anna. Ich helfe Ihnen heute.</em> I podajesz przedmiot w chwili, gdy go nazywasz: <em>Hier ist Ihr Waschlappen.</em>"
      },
      {
        h: "Walidacja",
        p: "<strong>Validation</strong> wychodzi z prostej myśli: wspomnienia giną, emocje zostają. Jeśli pani Lehmann chce iść do domu, bo dzieci wracają ze szkoły, poprawianie jej (<em>Ihre Kinder sind doch erwachsen</em>) stawia ją wobec straty i jej nie uspokaja. Zamiast tego nazywa się emocję (<em>Sie machen sich Sorgen um Ihre Kinder</em>) i zachęca do opowiadania (<em>Erzählen Sie mir von Ihren Kindern</em>). Znajomość jej <strong>Biografie</strong> pomaga zrozumieć, o czym mówi. Jedną rzecz trzeba odróżnić: jeśli ktoś <strong>nagle</strong> staje się splątany, może to nie być znana ci demencja, tylko nowa przyczyna; to zmiana, którą trzeba od razu zgłosić lekarzowi."
      },
      {
        contrast: "W Polsce w placówkach dla seniorów zdarza się słyszeć «babciu», «kochanieńka» czy mówienie na ty, często z czułością. W Niemczech taki ton brzmi infantylnie: także do osoby z demencją mówi się <em>Sie</em> i <em>Frau Lehmann</em>, chyba że ona sama poprosi o coś innego. To samo dotyczy pielęgniarskiego «my» («no to co, zjemy obiadek?»), które po niemiecku nazywa się z przekąsem <em>Pflege-Wir</em> (<em>Haben wir heute schon gegessen?</em>): mówi się <em>Sie</em>, kiedy to ta osoba coś robi. Pomaga też składnia. W polskim końcówki pokazują, kto co robi, i szyk może być luźny. W niemieckim zdanie główne trzyma czasownik na drugim miejscu, a zdanie podrzędne wysyła go na sam koniec, za wszystko inne: żeby zrozumieć, kto co robi, trzeba zapamiętać całe zdanie. Krótkie zdania główne zdejmują ten wysiłek."
      },
      {
        trap: "<em>Demenz</em> i <em>Vergesslichkeit</em> to nie synonimy: zapominanie zdarza się każdemu, demencja to zespół objawów wywołany różnymi chorobami, który zmienia codzienne życie. Do pacjenta i bliskich nie mówi się <em>Sie ist halt dement</em>, tylko <em>Frau Lehmann lebt mit einer Demenz.</em> A <em>verwirrt</em> opisuje stan, nie osobę: <em>plötzliche Verwirrtheit</em> może mieć nową przyczynę somatyczną, więc się ją zgłasza, a nie przyjmuje za oczywistość."
      },
      {
        tip: "Zanim zaczniesz mówić, stań przed osobą, na wysokości jej oczu, i poczekaj, aż na ciebie spojrzy. Potem jedno zdanie, pauza, następne zdanie. Jeśli nie odpowiada, powtórz tymi samymi słowami: zdanie powiedziane inaczej jest dla niej nowym zdaniem do zrozumienia."
      }
    ],
    grammar: {
      title: "Zdania, za którymi da się nadążyć",
      note: "Jedna informacja w zdaniu, odmieniony czasownik na <b>drugim miejscu</b>, czas na początku. Przyjmuje się emocję, nie poprawia.",
      table: {
        head: ["zamiast", "lepiej"],
        rows: [
          ["Ihre Kinder sind doch längst erwachsen.", "Sie machen sich Sorgen um Ihre Kinder."],
          ["Haben wir heute schon gefrühstückt?", "Haben Sie schon gefrühstückt?"],
          ["Wenn Sie fertig sind und gefrühstückt haben, kommt Ihre Tochter.", "Nach dem Frühstück kommt Ihre Tochter."],
          ["Das habe ich Ihnen doch schon gesagt.", "Ich bin Anna. Ich helfe Ihnen heute."]
        ]
      },
      examples: [
        { tr: "Jestem Anna. Dziś będę pani pomagać.", note: "przedstawiać się za każdym razem, dwa krótkie zdania" },
        { tr: "Teraz myje pani twarz.", note: "jetzt na pierwszym miejscu, czasownik waschen na drugim" },
        { tr: "Proszę, oto pani myjka.", note: "nazywać przedmiot, podając go" },
        { tr: "Martwi się pani o swoje dzieci.", note: "walidacja: nazwać emocję" },
        { tr: "Niech mi pani opowie o swoich dzieciach.", note: "zachęcić do opowiadania, zamiast poprawiać" },
        { tr: "Po śniadaniu przyjdzie pani córka.", note: "czas na pierwszym miejscu, czasownik kommt na drugim" }
      ]
    },
    vocab: [
      "demencja",
      "zapominanie, skłonność do zapominania",
      "splątany",
      "splątanie",
      "dezorientacja",
      "walidacja (metoda Validation)",
      "uczucie, emocja",
      "wspomnienie",
      "biografia, historia życia",
      "rytm dnia",
      "zaprzeczać, sprzeciwiać się",
      "znajomy, znany"
    ],
    dialogue: [
      "Dzień dobry, pani Lehmann. Jestem Anna. Dziś pomogę pani się umyć.",
      "Muszę iść do domu. Moje dzieci zaraz wracają ze szkoły.",
      "Martwi się pani o swoje dzieci.",
      "Tak. Jak wrócą, będą głodne, prawda?",
      "Dzieci są dla pani bardzo ważne. Niech mi pani o nich opowie.",
      "Peter zawsze tak psocił. A Susanne tak pięknie śpiewała.",
      "Jak pięknie. Teraz myje pani twarz. Proszę, oto pani myjka.",
      "A, tak. To umiem sama."
    ],
    culture: {
      title: "Po niemiecku: walidacja i praca z biografią",
      text: "<p>Metoda <i>Validation</i> powstała w Stanach Zjednoczonych, jej twórczynią jest Naomi Feil; w Niemczech bardzo rozpowszechniona jest jej odmiana <i>Integrative Validation</i>, opracowana przez Nicole Richard. W domach opieki mówi się o niej na szkoleniach i zebraniach zespołu, a wiele pielęgniarek zna ją pod tą nazwą.</p><p>Korzysta się też z <i>Biografiearbeit</i>: przy przyjęciu bliscy opowiadają o pracy, przyzwyczajeniach, ważnych imionach i drobnych rytuałach danej osoby. Wiedza, że pani Lehmann wychowała dwoje dzieci i wstawała wcześnie, żeby zrobić śniadanie, pomaga zrozumieć, czego szuka, kiedy mówi, że musi iść do domu.</p>"
    },
    exercises: [
      {
        q: "Pani Lehmann mówi: «Ich muss nach Hause, meine Kinder kommen aus der Schule.» Która odpowiedź jest zgodna z walidacją?",
        opts: [
          "Ihre Kinder sind doch schon lange erwachsen.",
          "Sie machen sich Sorgen um Ihre Kinder.",
          "Sie können nicht nach Hause, Sie wohnen jetzt hier."
        ],
        why: "Walidacja przyjmuje emocję: <b>Sie machen sich Sorgen um Ihre Kinder.</b> Prostowanie faktów, jak w dwóch pozostałych odpowiedziach, jej nie uspokaja i stawia ją wobec straty."
      },
      {
        q: "Uzupełnij: «Nach dem Frühstück ___ Ihre Tochter.»",
        hint: "kommen, na drugim miejscu",
        why: "<b>kommt</b>: <i>Nach dem Frühstück</i> zajmuje pierwsze miejsce, więc odmieniony czasownik stoi tuż za nim, a podmiot <i>Ihre Tochter</i> po nim."
      },
      {
        q: "Uzupełnij zdanie.",
        tr: "Teraz myje pani twarz. Proszę, oto pani myjka.",
        why: "<i>Jetzt <b>waschen</b> Sie Ihr Gesicht</i> i <i>Hier <b>ist</b> Ihr Waschlappen</i>: w obu zdaniach odmieniony czasownik stoi na drugim miejscu, po <i>jetzt</i> i <i>hier</i>."
      },
      {
        q: "Które zdania pasują do rozmowy z osobą z demencją?",
        opts: [
          "Jetzt waschen Sie Ihr Gesicht.",
          "Nachdem Sie sich gewaschen haben und bevor das Frühstück kommt, ziehen Sie sich an.",
          "Hier ist Ihr Waschlappen.",
          "Na, mein Schätzchen, haben wir heute gut gegessen?",
          "Erzählen Sie mir von Ihren Kindern."
        ],
        why: "Pasują krótkie zdania z jedną informacją i z <i>Sie</i>. Drugie zdanie ma dwa zdania podrzędne przed czasownikiem głównym; czwarte używa zdrobnienia i infantylnego «my»."
      },
      {
        q: "Wybierz właściwy rodzajnik określony dla każdego rzeczownika.",
        items: ["demencja", "uczucie, emocja", "wspomnienie", "myjka", "twarz", "śniadanie"]
      },
      {
        q: "Połącz każde słowo z jego znaczeniem.",
        pairs: ["demencja", "zapominanie", "dezorientacja", "walidacja"]
      },
      {
        q: "Ułóż słowa we właściwej kolejności.",
        tr: "Po śniadaniu przyjdzie pani córka.",
        why: "<i>Nach dem Frühstück kommt Ihre Tochter.</i> Czas na pierwszym miejscu pomaga się zorientować, czasownik <i>kommt</i> stoi na drugim."
      },
      {
        q: "Przetłumacz krótkim zdaniem: «Dziś jest wtorek.»",
        why: "<i>Heute ist Dienstag.</i> Może być też <i>Heute haben wir Dienstag</i>. «Dziś» to <b>heute</b>, a czasownik stoi na drugim miejscu."
      },
      {
        q: "Poranek z panią Lehmann.",
        setting: "Pani Lehmann żyje z demencją. Jest rano i chcesz jej pomóc się umyć.",
        lines: [
          { tr: "Muszę iść do domu. Dzieci na mnie czekają." },
          { tr: "Przyjmij jej niepokój, nie poprawiając jej.", answerTr: "Martwi się pani o swoje dzieci." },
          { tr: "A pani kim jest?" },
          { tr: "Przedstaw się spokojnie.", answerTr: "Jestem Anna. Dziś będę pani pomagać." },
          { tr: "Już nie dam rady." },
          { tr: "Dodaj jej otuchy i podaj myjkę.", answerTr: "Ależ da pani radę. Proszę, oto pani myjka." }
        ]
      },
      {
        tr: "Dzień dobry, pani Lehmann. Jestem Anna. Dziś pomogę pani się umyć.",
        why: "W <i>Lehmann</i> <b>h</b> się nie wymawia i wydłuża <b>e</b>; w <i>heute</i> dwugłoska <b>eu</b> to [ɔʏ], podobnie do «oj»; w <i>Waschen</i> <b>W</b> to [v], jak polskie «w», a <b>sch</b> to [ʃ], jak «sz»."
      },
      {
        tr: "Niech mi pani opowie o swoich dzieciach.",
        why: "W <i>Erzählen</i> <b>z</b> to [ts], jak polskie «c», a akcent pada na <b>zäh</b>; w <i>von</i> <b>v</b> czyta się [f]; w <i>Kindern</i> akcent pada na <b>Kin</b>."
      }
    ]
  },
  "lesson:pfl-u07-test": {
    theme: "Sprawdzian",
    title: "Test: Rozmowy z pacjentami i bliskimi",
    objectives: [
      "sprawdzić wyjaśnianie prostymi słowami, uprzejme prośby, mowę zależną, tajemnicę zawodową i rozmowę z osobami z demencją"
    ],
    theory: [
      {
        p: "Jedenaście pytań z całej jednostki. Zalicza 70%. Pacjenci i sytuacje są zmyśleni i służą tylko za przykład: zasady, kogo można informować i jak przygotowuje się badanie, ustalają lekarz i placówka."
      }
    ],
    exercises: [
      {
        q: "Syn pacjenta pyta: «Was hat mein Vater genau?» Lekarz jeszcze z nim nie rozmawiał.",
        opts: [
          "Das bespricht der Arzt mit Ihnen.",
          "Ich darf das eigentlich nicht sagen, aber es ist ernst.",
          "Das weiß ich nicht, fragen Sie jemand anderen."
        ],
        why: "Diagnozę przekazuje lekarz: <b>Das bespricht der Arzt mit Ihnen.</b> Druga odpowiedź sugeruje diagnozę, trzecia nie kieruje pytania tam, gdzie trzeba."
      },
      {
        q: "Uzupełnij: «Ihre Mutter sagt, sie ___ keine Schmerzen.»",
        hint: "Konjunktiv I od haben",
        why: "<b>habe</b>: rdzeń <i>hab-</i> + <i>-e</i>. To forma mowy zależnej."
      },
      {
        q: "Uzupełnij: «___ Sie mir kurz helfen?»",
        hint: "Konjunktiv II, uprzejma prośba",
        why: "<b>Könnten</b> Sie mir kurz helfen? Może być też <b>Würden</b>. W pytaniu odmieniony czasownik stoi na pierwszym miejscu."
      },
      {
        tr: "Konjunktiv II czasownika werden, wszystkie osoby.",
        why: "<i>Würde, würdest, würde, würden, würdet, würden</i>: z Präteritum <i>wurde</i> z przegłosem, <b>ü</b>."
      },
      {
        q: "Połącz każde słowo z jego znaczeniem.",
        pairs: ["gastroskopia (termin fachowy)", "tajemnica zawodowa", "walidacja", "pełnomocnictwo na przyszłość"]
      },
      {
        q: "Których zdań użyłabyś w rozmowie z pacjentem albo kimś bliskim?",
        opts: [
          "Morgen früh bekommen Sie eine Magenspiegelung.",
          "Morgen erfolgt eine ÖGD.",
          "Ich verstehe, dass Sie Angst haben.",
          "Pat. gibt an, sie habe keine Schmerzen.",
          "Wäre es Ihnen recht, wenn ich kurz bei Ihnen bleibe?"
        ],
        why: "<i>ÖGD</i> to fachowy skrót, a <i>Pat. gibt an...</i> to styl dokumentacji pielęgniarskiej: pasują między personelem i w dokumentacji, nie w rozmowie z pacjentem."
      },
      {
        q: "Uzupełnij formami Konjunktiv I i Konjunktiv II.",
        tr: "Pacjentka podaje, że jest zmęczona. Czy będzie pani odpowiadało, jeśli przyjdę później?",
        why: "<i>sie <b>sei</b> müde</i>: Konjunktiv I od sein, do relacjonowania. <i><b>Wäre</b> es Ihnen recht</i>: Konjunktiv II od sein, do uprzejmej prośby."
      },
      {
        q: "Ułóż słowa we właściwej kolejności.",
        tr: "Rozumiem, że się pan martwi.",
        why: "<i>Ich verstehe, dass Sie sich Sorgen machen.</i> Po <i>dass</i> czasownik <i>machen</i> idzie na koniec; zaimek <i>sich</i> stoi tuż za podmiotem <i>Sie</i>."
      },
      {
        q: "Wybierz właściwy rodzajnik określony dla każdego rzeczownika.",
        items: ["diagnoza", "informacja (udzielana na prośbę)", "zgoda", "uczucie, emocja", "postęp", "rozmowa z lekarzem"]
      },
      {
        tr: "Rozumiem, że się pani boi. Niech pani najpierw spokojnie usiądzie na brzegu łóżka.",
        why: "W <i>Angst</i> <b>ng</b> to [ŋ], jak w polskim «bank», bez osobnego g; w <i>Bettkante</i> akcent pada na <b>Bett</b>; <i>doch</i> i <i>mal</i> zostają bez akcentu."
      },
      {
        tr: "O tym porozmawia z panem lekarz.",
        why: "W <i>bespricht</i> akcent pada na <b>spricht</b>, <b>sp</b> to [ʃp], a <b>ch</b> to [ç]; w <i>Ihnen</i> <b>ih</b> to długie i."
      }
    ]
  }
});
