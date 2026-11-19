/* ============================================================
   Teksty w języku ucznia (pl) dla data/core/pfl-03.js, jednostka pfl-u03.
   Klucze wskazują id w warstwie neutralnej; tablice łączą się
   po indeksie, więc ich długość musi zgadzać się z core.
   Sprawdzane przez scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("pl", {
  "unit:pfl-u03": {
    title: "Podstawowa pielęgnacja i uruchamianie",
    grammarNote: "czasowniki zwrotne przy myciu i ubieraniu · przyimki z biernikiem albo celownikiem (wohin? / wo?) · czasowniki modalne w rozmowie z pacjentem · bezokolicznik z zu · pary Fachsprache / Laiensprache"
  },
  "lesson:pfl-u03-l1": {
    theme: "Mycie i ubieranie",
    title: "Myć się i ubierać się",
    objectives: [
      "towarzyszyć pacjentowi przy porannej toalecie, przy umywalce albo w łóżku",
      "używać czasowników zwrotnych: sich waschen, sich anziehen, sich rasieren",
      "wybierać między mich a mir, gdy w zdaniu jest dopełnienie",
      "chronić intymność pacjenta słowami i gestami pełnymi szacunku"
    ],
    theory: [
      {
        h: "Poranna toaleta",
        p: "<strong>Grundpflege</strong> obejmuje mycie, ubieranie, jedzenie, wydalanie i ruch. Pierwsze pytanie nie brzmi «czy mam go umyć?», tylko co pacjent chce i może zrobić sam: <em>Möchten Sie sich heute selbst waschen? Am Waschbecken oder lieber im Bett?</em> Potem dzieli się pracę, na głos: <em>Das Gesicht waschen Sie sich selbst, den Rücken wasche ich Ihnen.</em> Przy higienie intymnej zawsze najpierw proponuje się, żeby pacjent zrobił to sam, i mówi się, co robisz, żeby chronić jego intymność: <em>Ich ziehe den Vorhang zu. Ich warte so lange draußen.</em>"
      },
      {
        h: "Czasowniki zwrotne",
        p: "Wiele czasowników związanych z myciem jest zwrotnych: <em>sich waschen, sich anziehen, sich ausziehen, sich rasieren, sich kämmen</em>. Zaimek stoi za odmienionym czasownikiem: <em>Ich wasche mich. Er zieht sich an.</em> Przy grzecznościowym Sie zaimek zwrotny to <strong>sich</strong>, małą literą, a nie <em>Sie</em>: <em>Können Sie sich allein anziehen?</em> Gdy w zdaniu jest dopełnienie (część ciała, ubranie), zaimek zwrotny przechodzi do <strong>celownika</strong>: <em>Ich wasche mich</em>, ale <em>Ich wasche mir das Gesicht</em>. Różnicę widać tylko przy <em>ich</em> i <em>du</em> (mich/mir, dich/dir): <em>sich</em>, <em>uns</em> i <em>euch</em> się nie zmieniają. W Perfekt czasowniki zwrotne łączą się z <em>haben</em>: <em>Er hat sich schon angezogen.</em>"
      },
      {
        contrast: "Polskie «się» to jedno słowo dla wszystkich osób: myję się, myjesz się, myje się. Niemiecki zaimek zwrotny zmienia się z osobą: <em>ich wasche mich, du wäschst dich, er wäscht sich</em>. Do tego «się» lubi stać przed czasownikiem («Czy Pani się sama umyje?»), a <em>sich</em> stoi za odmienionym czasownikiem: <em>Waschen Sie sich selbst?</em> Przy Pan/Pani zaimek to zawsze <em>sich</em>, nigdy «Sie Sie». Dobra wiadomość: rozróżnienie mich/mir polszczyzna już ma, to «się» i «sobie». «Ubieram się», ale «zakładam sobie kurtkę», dokładnie jak <em>Ich ziehe mich an</em> i <em>Ich ziehe mir die Jacke an</em>. Różnica jest jedna: po polsku «sobie» często się opuszcza («myję ręce»), po niemiecku celownik zostaje: <em>Ich wasche mir die Hände</em>. Także tu są dwa rejestry. W dokumentacji i między kolegami mówi się <em>Intimpflege</em> i <em>Intimbereich</em>; wielu starszych pacjentów tych słów nie używa i mówi <em>untenherum</em> («tam na dole»). Nie trzeba ich poprawiać: zrozum słowo i odpowiedz spokojnie, nie używając nazw dosadniejszych niż te, które wybrał pacjent."
      },
      {
        trap: "Na polskim oddziale «toaleta pacjenta» to mycie (toaleta całego ciała, toaleta jamy ustnej); po niemiecku <em>die Toilette</em> to wyłącznie WC. Mycie pacjenta to <em>Körperpflege</em>, a pełne mycie w łóżku <em>die Ganzkörperwäsche</em>. <em>Baden</em> nie znaczy «myć się» w ogóle, tylko kąpać się w wannie. Mycie przy umywalce to <em>sich waschen</em>, prysznic to <em>duschen</em>. <em>Die Wäsche</em> to pranie albo bielizna. A <em>das Hemd</em> to koszula, koszula nocna to <em>das Nachthemd</em>."
      },
      {
        tip: "Zapowiadaj każdy gest, zanim go wykonasz: <em>Ich wasche Ihnen jetzt den Rücken.</em> Krótkie zdanie przed dotknięciem pacjenta uspokaja bardziej niż długie wyjaśnienia, a z czasownikiem zwrotnym albo z celownikiem ćwiczy schemat, który w tej lekcji liczy się najbardziej."
      }
    ],
    grammar: {
      title: "mich czy mir?",
      note: "Bez dopełnienia zaimek zwrotny stoi w <b>bierniku</b> (<b>mich</b>). Z dopełnieniem, częścią ciała albo ubraniem, przechodzi do <b>celownika</b> (<b>mir</b>). Do pacjenta: zawsze <b>sich</b>.",
      table: {
        head: ["osoba", "bez dopełnienia (biernik)", "z dopełnieniem (celownik)"],
        rows: [
          ["ich", "Ich wasche mich.", "Ich wasche mir die Hände."],
          ["er / sie", "Er zieht sich an.", "Er zieht sich die Jacke an."],
          ["wir", "Wir waschen uns.", "Wir putzen uns die Zähne."],
          ["Sie", "Waschen Sie sich selbst?", "Waschen Sie sich das Gesicht selbst?"]
        ]
      },
      examples: [
        { tr: "Chce się Pani dziś umyć sama?", note: "przy Sie zaimek zwrotny to sich" },
        { tr: "Najpierw myję sobie twarz.", note: "jest dopełnienie (das Gesicht): mir, w celowniku" },
        { tr: "Da Pan radę sam się ubrać?", note: "anziehen jest rozdzielny: Ich ziehe mich an" },
        { tr: "Miejsca intymne umyje Pani sama, a ja w tym czasie poczekam na zewnątrz.", note: "samodzielną higienę intymną proponuje się zawsze najpierw" },
        { tr: "Chce się Pan ogolić?", note: "sich rasieren: zapytać, nie zakładać" },
        { tr: "Pan Brandt już się ubrał.", note: "Perfekt czasowników zwrotnych: zawsze z haben" }
      ]
    },
    vocab: [
      "podstawowa pielęgnacja (mycie, ubieranie, jedzenie, wydalanie, ruch)",
      "higiena osobista, toaleta ciała",
      "myć się",
      "ubierać się",
      "rozbierać się, zdejmować (ubranie)",
      "golić się",
      "czesać się",
      "myjka, rękawica do mycia",
      "ręcznik",
      "umywalka",
      "higiena intymna",
      "proteza zębowa, sztuczna szczęka"
    ],
    dialogue: [
      "Dzień dobry, pani Keller. Dobrze Pani spała?",
      "Dzień dobry. Tak sobie.",
      "Chce się Pani dziś umyć przy umywalce czy raczej w łóżku?",
      "Przy umywalce, jeśli mi Pani pomoże.",
      "Chętnie. Twarz i ręce umyje Pani sama, a plecy umyję Pani ja.",
      "A tam na dole wolę umyć się sama.",
      "Oczywiście. Dam Pani czystą myjkę i poczekam na zewnątrz. Proszę zadzwonić, kiedy Pani skończy.",
      "Dziękuję, tak wolę.",
      "Potem się Pani ubierze. Którą bluzkę chce Pani dziś włożyć?",
      "Tę niebieską, proszę."
    ],
    culture: {
      title: "Po niemiecku: Grundpflege i Behandlungspflege",
      text: "<p>W niemieckiej opiece rozróżnia się zwykle dwa obszary. <i>Grundpflege</i> obejmuje czynności życia codziennego: mycie, ubieranie, jedzenie, wydalanie, ruch. <i>Behandlungspflege</i> obejmuje czynności związane ze zleceniem lekarskim, na przykład zmianę opatrunku czy podawanie leków. W opiece domowej ten podział decyduje także o tym, kto płaci za świadczenie, i to słowo będziesz często czytać w dokumentach.</p><p>W Polsce dużą część toalety pacjenta przejmują opiekunowie medyczni. Najbliższy im niemiecki zawód to <i>Pflegehelferin</i> / <i>Pflegehelfer</i> (albo <i>Pflegeassistenz</i>), z krótszym wykształceniem; ale ocena, co pacjent potrafi zrobić sam, zostaje obowiązkiem pielęgniarki.</p>"
    },
    exercises: [
      {
        q: "Chcesz zapytać pacjentkę, czy chce się umyć sama. Które zdanie jest poprawne?",
        opts: [
          "Möchten Sie Sie selbst waschen?",
          "Möchten Sie sich selbst waschen?",
          "Möchten Sie selbst waschen sich?"
        ],
        why: "Przy grzecznościowym Sie zaimek zwrotny to <b>sich</b>, nie <i>Sie</i>. Modalne <i>möchten</i> otwiera pytanie rozstrzygające, a bezokolicznik <i>waschen</i> idzie na koniec."
      },
      {
        tr: "Czas teraźniejszy sich waschen we wszystkich osobach.",
        why: "<i>Wasche mich, wäschst dich, wäscht sich, waschen uns, wascht euch, waschen sich</i>: w drugiej i trzeciej osobie liczby pojedynczej <b>a</b> zmienia się w <b>ä</b>, a zaimek zwrotny zmienia się z osobą, inaczej niż polskie «się»."
      },
      {
        q: "Uzupełnij: «Können Sie ___ allein anziehen?»",
        hint: "zaimek zwrotny do Sie",
        why: "<b>sich</b>, małą literą: zaimek zwrotny grzecznościowego Sie jest taki sam jak w trzeciej osobie."
      },
      {
        q: "Uzupełnij, wstawiając mich albo mir.",
        tr: "Najpierw myję sobie twarz, potem się ubieram.",
        why: "<i>Ich wasche mir zuerst das Gesicht</i>: jest dopełnienie, <i>das Gesicht</i>, więc celownik <i>mir</i> (po polsku «sobie»). <i>Dann ziehe ich mich an</i>: brak dopełnienia, więc biernik <i>mich</i> (po polsku «się»)."
      },
      {
        q: "Które zdania są poprawne?",
        opts: [
          "Ich wasche mir die Hände.",
          "Ich wasche mich die Hände.",
          "Können Sie sich allein anziehen?",
          "Er hat sich schon rasiert.",
          "Er ist sich schon rasiert."
        ],
        why: "Z dopełnieniem (<i>die Hände</i>) zaimek zwrotny stoi w celowniku, <i>mir</i>. W Perfekt czasowniki zwrotne łączą się z <i>haben</i>: <i>Er hat sich rasiert</i>."
      },
      {
        q: "Wybierz właściwy rodzajnik określony dla każdego rzeczownika.",
        items: ["myjka", "ręcznik", "umywalka", "higiena intymna", "proteza zębowa", "podstawowa pielęgnacja"]
      },
      {
        q: "Połącz każdy czasownik z jego znaczeniem.",
        pairs: ["myć się", "ubierać się", "rozbierać się", "golić się"]
      },
      {
        q: "Ułóż słowa we właściwej kolejności.",
        tr: "Da Pan radę sam się ubrać?",
        why: "<i>Können Sie sich allein anziehen?</i> Modalny otwiera pytanie rozstrzygające, zaimek <i>sich</i> stoi za podmiotem, a bezokolicznik <i>anziehen</i> idzie na koniec."
      },
      {
        q: "Przetłumacz (do pacjenta): «Chce się Pan ogolić?»",
        why: "<i>Möchten Sie sich rasieren?</i> Do pacjenta <i>möchten</i> jest najgrzeczniejsze; <i>Wollen Sie</i> jest poprawne, ale brzmi bardziej bezpośrednio."
      },
      {
        q: "Poranna toaleta.",
        setting: "Wchodzisz do sali pacjentki, która chce się umyć sama.",
        lines: [
          { tr: "Dzień dobry. Dziś chciałabym umyć się sama." },
          { tr: "Odpowiedz, że plecy umyjesz jej ty, a resztę zrobi sama.", answerTr: "Chętnie. Plecy umyję Pani ja, a resztę zrobi Pani sama." },
          { tr: "A miejsca intymne? Trochę mnie to krępuje." },
          { tr: "Odpowiedz, że rozumiesz: miejsca intymne umyje sama, a ty poczekasz na zewnątrz.", answerTr: "Rozumiem. Miejsca intymne umyje Pani sama, a ja poczekam na zewnątrz." },
          { tr: "A potem?" },
          { tr: "Odpowiedz, że potem się ubierze, a ty pomożesz jej z pończochami.", answerTr: "Potem się Pani ubierze, a ja pomogę Pani z pończochami." }
        ]
      },
      {
        tr: "Twarz i ręce umyje Pani sama, a plecy umyję Pani ja.",
        why: "W <i>Gesicht</i> <b>g</b> jest twarde, a <b>ch</b> po <b>i</b> to [ç], jak w polskim «Chiny»; w <i>Rücken</i> <b>ü</b> jest krótkie, to «i» wymówione z zaokrąglonymi ustami; w <i>waschen</i> <b>sch</b> to polskie «sz»."
      },
      {
        tr: "Chce się Pani dziś umyć sama?",
        why: "W <i>Möchten</i> <b>ö</b> jest krótkie, to «e» z zaokrąglonymi ustami, a <b>ch</b> to [ç]; w <i>sich</i> początkowe <b>s</b> jest dźwięczne, jak polskie «z»; w <i>selbst</i> <b>b</b> wymawia się jak [p]."
      }
    ]
  },
  "lesson:pfl-u03-l2": {
    theme: "Ruch",
    title: "Uruchamianie i układanie",
    objectives: [
      "przeprowadzić pacjenta z łóżka na brzeg łóżka i na wózek inwalidzki",
      "odróżniać wohin? (biernik) od wo? (celownik) przy przyimkach an, auf, in, neben",
      "używać par setzen / sitzen, legen / liegen, stellen / stehen",
      "rozpoznać Dekubitus i Kontraktur i nazwać je słowami pacjenta"
    ],
    theory: [
      {
        h: "Zapowiedzieć ruch",
        p: "Zanim uruchomisz pacjenta, mówisz, co się stanie, i pytasz, czy się zgadza: <em>Heute setzen wir Sie an die Bettkante. Ist das in Ordnung?</em> Postępuje się małymi krokami, jeden po drugim, i przerywa, gdy pacjent sygnalizuje złe samopoczucie: <em>Mir ist schwindelig.</em> <em>Dann bleiben Sie erst einmal sitzen.</em> Jak i z jakim sprzętem uruchamia się pacjenta, decyduje ocena pielęgniarska i procedura placówki: tutaj uczysz się słów, którymi towarzyszysz ruchowi, a nie techniki."
      },
      {
        h: "Wohin? czy wo?",
        p: "Przyimki <em>an, auf, in, neben, unter, über, vor, hinter, zwischen</em> łączą się z dwoma przypadkami. Gdy jest ruch w stronę celu (<strong>wohin?</strong>), wymagają <strong>biernika</strong>: <em>Ich setze Sie an die Bettkante.</em> Gdy opisuje się położenie (<strong>wo?</strong>), wymagają <strong>celownika</strong>: <em>Sie sitzen an der Bettkante.</em> Czasowniki idą parami: <em>setzen, legen, stellen</em> oznaczają ruch i łączą się z biernikiem; <em>sitzen, liegen, stehen</em> oznaczają położenie i łączą się z celownikiem. Częste ściągnięcia: <em>an das → ans</em>, <em>in das → ins</em>, <em>an dem → am</em>, <em>in dem → im</em>."
      },
      {
        contrast: "Łacinę znasz z wykształcenia: <em>Dekubitus</em>, <em>Kontraktur</em>, <em>Mobilisation</em> brzmią znajomo. Trudność leży gdzie indziej: po polsku jedno słowo, «odleżyna», służy wszystkim, i lekarzowi, i pacjentowi, a po niemiecku słowa są dwa. Lekarz pisze <em>Dekubitus</em>, pacjent mówi <em>Druckgeschwür</em> (dosłownie «wrzód z ucisku») albo używa czasownika <em>sich wundliegen</em>: <em>Ich habe mich wundgelegen</em>, «zrobiła mi się odleżyna». Przykurcz to w dokumentacji <em>Kontraktur</em>, a u pacjenta <em>Gelenkversteifung</em> albo po prostu <em>Das Knie wird steif.</em> Uwaga na rodzaj: odleżyna jest żeńska, a <em>der Dekubitus</em> męski i <em>das Druckgeschwür</em> nijakie; za to <em>die Mobilisation</em> i <em>die Kontraktur</em> są żeńskie jak mobilizacja i kontraktura. Przypadki: polski też odróżnia ruch od położenia («obracamy Pana na bok», ale «leży Pan na boku»), tyle że położenie wyraża miejscownikiem, którego niemiecki nie ma, a niemiecki celownikiem. I przy posadzić, położyć, postawić polszczyzna często i tak bierze miejscownik («posadzę Pana na krześle»), a niemieckie <em>setzen, legen, stellen</em> zawsze żądają biernika: <em>Ich setze Sie auf den Stuhl.</em> Żaden pacjent nie powie też <em>Mobilisation</em> ani <em>Lagerung</em>: mówi <em>aufstehen</em>, <em>sich hinsetzen</em>, <em>sich umdrehen</em>."
      },
      {
        trap: "<em>Die Lagerung</em> to na oddziale układanie pacjenta, ale w codziennym niemieckim to magazynowanie towaru: nie używaj tego słowa wobec pacjenta, bo poczuje się jak przedmiot. Powiedz raczej <em>Ich helfe Ihnen, sich auf die Seite zu drehen.</em> Nie myl <em>setzen</em> i <em>sitzen</em>: <em>Ich sitze Sie</em> nie istnieje, tak jak nie istnieje «siedzę Pana». I <em>der Rollator</em> to chodzik, balkonik na kółkach, a nie wózek: wózek inwalidzki to <em>der Rollstuhl</em>."
      },
      {
        tip: "Żeby wybrać przypadek, zapytaj siebie, czy pacjent dopiero zmierza w jakieś miejsce, czy już tam jest: <em>wohin?</em> czy <em>wo?</em> W praktyce prawie zawsze, gdy zapowiadasz, co zrobisz, używasz <em>setzen, legen, stellen</em> z biernikiem; gdy opisujesz, jak pacjent jest ułożony, <em>sitzen, liegen, stehen</em> z celownikiem."
      }
    ],
    grammar: {
      title: "Ruch i położenie",
      note: "<b>Wohin?</b> Czasownik ruchu + <b>biernik</b>. <b>Wo?</b> Czasownik położenia + <b>celownik</b>. Przyimek ten sam, zmienia się przypadek.",
      table: {
        head: ["wohin? (biernik)", "wo? (celownik)"],
        rows: [
          ["Ich setze Sie an die Bettkante.", "Sie sitzen an der Bettkante."],
          ["Wir legen Sie auf die Seite.", "Sie liegen auf der Seite."],
          ["Ich stelle den Rollator neben das Bett.", "Der Rollator steht neben dem Bett."],
          ["Ich setze Sie in den Rollstuhl.", "Sie sitzen im Rollstuhl."]
        ]
      },
      examples: [
        { tr: "Teraz posadzę Pana na brzegu łóżka.", note: "setzen + an die: ruch, biernik" },
        { tr: "Teraz siedzi Pan na brzegu łóżka.", note: "sitzen + an der: położenie, celownik" },
        { tr: "Obracamy Pana na bok.", note: "legen + auf die: biernik" },
        { tr: "Teraz leży Pan wygodnie na boku.", note: "liegen + auf der: celownik" },
        { tr: "Stawiam chodzik obok łóżka.", note: "stellen + neben das: biernik" },
        { tr: "Chodzik stoi obok łóżka.", note: "stehen + neben dem: celownik" }
      ]
    },
    vocab: [
      "uruchamianie, mobilizacja (termin fachowy)",
      "uruchamiać pacjenta",
      "układanie pacjenta (termin fachowy)",
      "zmieniać ułożenie pacjenta",
      "brzeg łóżka",
      "wózek inwalidzki",
      "chodzik na kółkach, rolator",
      "poduszka",
      "odleżyna (termin fachowy)",
      "odleżyna, «wrzód z ucisku» (słowo pacjenta)",
      "przykurcz (termin fachowy)",
      "sztywność stawu (słowo pacjenta)"
    ],
    dialogue: [
      "Panie Brandt, dziś po raz pierwszy posadzimy Pana na brzegu łóżka. Zgadza się Pan?",
      "Tak, ale trochę się boję.",
      "To zupełnie normalne. Pomaga mi kolega. Najpierw proszę obrócić się na bok.",
      "Tak?",
      "Właśnie tak. Teraz postawimy Pana stopy na podłodze, a Pan powoli usiądzie.",
      "Trochę kręci mi się w głowie.",
      "To na razie proszę spokojnie posiedzieć na brzegu łóżka. Jesteśmy przy Panu.",
      "Już jest lepiej.",
      "Dobrze. Wózek stoi obok łóżka. Chce Pan dziś jeszcze przesiąść się na wózek?"
    ],
    culture: {
      title: "Po niemiecku: Rollator i Kinästhetik",
      text: "<p>Na niemieckich ulicach <i>Rollator</i>, chodzik na kółkach z hamulcami i siedziskiem, to codzienny widok, i wielu starszych pacjentów przyjeżdża do szpitala ze swoim. Zawsze pytaj, gdzie chcą go trzymać: dla wielu to warunek, żeby wstać samodzielnie.</p><p>W wykształceniu wielu niemieckich pielęgniarek pojawia się <i>Kinästhetik</i>, podejście do ruchu, które wykorzystuje możliwości pacjenta zamiast podnosić go siłą. Usłyszysz o niej na oddziale: zasada jest ta sama co w lekcji 4, pacjent robi wszystko, co może.</p>"
    },
    exercises: [
      {
        q: "Chcesz powiedzieć pacjentowi: «Teraz posadzę Pana na brzegu łóżka». Które zdanie jest poprawne?",
        opts: [
          "Ich setze Sie jetzt an der Bettkante.",
          "Ich setze Sie jetzt an die Bettkante.",
          "Ich sitze Sie jetzt an die Bettkante."
        ],
        why: "<i>setzen</i> oznacza ruch w stronę celu (<i>wohin?</i>), więc <i>an</i> łączy się z biernikiem: <b>an die</b> Bettkante. <i>sitzen</i> nie ma dopełnienia."
      },
      {
        q: "Uzupełnij: «Der Rollator steht neben ___ Bett.»",
        hint: "wo? das Bett w celowniku",
        why: "<b>dem</b>: <i>stehen</i> opisuje położenie (<i>wo?</i>), więc <i>neben</i> łączy się z celownikiem, a <i>das Bett</i> w celowniku to <i>dem Bett</i>."
      },
      {
        q: "Uzupełnij właściwym rodzajnikiem.",
        tr: "Obracamy Pana na bok. Teraz leży Pan wygodnie na boku.",
        why: "<i>Wir legen Sie auf die Seite</i>: ruch, biernik. <i>Jetzt liegen Sie bequem auf der Seite</i>: położenie, celownik."
      },
      {
        q: "Które zdania są poprawne?",
        opts: [
          "Sie sitzen jetzt an der Bettkante.",
          "Ich stelle den Rollator neben dem Bett.",
          "Wir legen Sie auf die Seite.",
          "Der Rollstuhl steht neben dem Bett.",
          "Ich setze Sie in dem Rollstuhl."
        ],
        why: "<i>stellen</i> i <i>setzen</i> oznaczają ruch i wymagają biernika: <i>neben das Bett</i>, <i>in den Rollstuhl</i>. <i>sitzen</i> i <i>stehen</i> oznaczają położenie i wymagają celownika."
      },
      {
        q: "Wybierz właściwy rodzajnik określony dla każdego rzeczownika.",
        items: ["brzeg łóżka", "wózek inwalidzki", "chodzik", "poduszka", "odleżyna (słowo pacjenta)", "układanie pacjenta"]
      },
      {
        q: "Połącz czasownik ruchu (wohin?) z czasownikiem położenia (wo?).",
        pairs: ["sitzen", "liegen", "stehen"]
      },
      {
        q: "Ułóż słowa we właściwej kolejności.",
        tr: "Wózek inwalidzki stoi obok łóżka.",
        why: "<i>Der Rollstuhl steht neben dem Bett.</i> <i>stehen</i> opisuje położenie: <i>neben</i> z celownikiem."
      },
      {
        q: "Przetłumacz: «Posadzę Pana na wózku.»",
        why: "<i>Ich setze Sie in den Rollstuhl.</i> Po niemiecku siada się «do» wózka, z <i>in</i>, i jest ruch: biernik, <i>in den</i>. Polski miejscownik «na wózku» tu nie pomaga."
      },
      {
        q: "Lekarz napisał «Dekubitus». Uzupełnij dla pacjenta: «Wir lagern Sie um, damit kein ___ entsteht.»",
        hint: "Druck + Geschwür",
        why: "<b>Druckgeschwür</b>, nijakie jak <i>das Geschwür</i>, choć «odleżyna» jest żeńska. Wielu pacjentów mówi też <i>sich wundliegen</i>."
      },
      {
        q: "Pacjent chce wstać.",
        setting: "Pomagasz panu Brandtowi przy pierwszym uruchomieniu.",
        lines: [
          { tr: "Dziś chciałbym wstać." },
          { tr: "Odpowiedz, że najpierw posadzicie go na brzegu łóżka.", answerTr: "Dobrze. Najpierw posadzimy Pana na brzegu łóżka." },
          { tr: "Trochę kręci mi się w głowie." },
          { tr: "Odpowiedz, że w takim razie na razie zostanie na brzegu łóżka.", answerTr: "To na razie proszę zostać na brzegu łóżka." },
          { tr: "Gdzie jest mój chodzik?" },
          { tr: "Odpowiedz, że stoi obok łóżka.", answerTr: "Stoi obok łóżka." }
        ]
      },
      {
        tr: "Wózek stoi obok łóżka. Chce Pan dziś jeszcze przesiąść się na wózek?",
        why: "W <i>Rollstuhl</i> <b>st</b> na początku <i>Stuhl</i> czyta się [ʃt], czyli «szt», także wewnątrz złożenia; w <i>steht</i> <b>h</b> wydłuża <b>e</b>; w <i>neben</i> pierwsze <b>e</b> jest długie."
      },
      {
        tr: "Teraz posadzę Pana na brzegu łóżka.",
        why: "W <i>setze</i> początkowe <b>s</b> jest dźwięczne, jak polskie «z», a <b>tz</b> to [ts], polskie «c»; w <i>jetzt</i> <b>j</b> czyta się jak polskie «j»; w <i>Bettkante</i> akcent pada na <b>Bett</b>."
      }
    ]
  },
  "lesson:pfl-u03-l3": {
    theme: "Posiłki i wydalanie",
    title: "Jedzenie, picie, wydalanie",
    objectives: [
      "zaproponować pomoc przy posiłku i zapytać, czy pacjent dobrze połyka",
      "używać czasowników modalnych w rozmowie z pacjentem: möchten, können, müssen, dürfen, sollen",
      "odróżniać müssen nicht (nie trzeba) od dürfen nicht (nie wolno)",
      "rozmawiać o oddawaniu moczu, wypróżnianiu i nietrzymaniu moczu słowami pełnymi szacunku"
    ],
    theory: [
      {
        h: "Pytania, przy których pacjent czuje się swobodnie",
        p: "Przy posiłkach i wydalaniu pacjent jest zależny od innych, i słowa mają znaczenie. Proponuje się, a nie narzuca: <em>Möchten Sie etwas trinken? Soll ich Ihnen das Fleisch klein schneiden? Darf ich Ihnen helfen?</em> Pyta się prosto i po dorosłemu: <em>Müssen Sie zur Toilette? Konnten Sie Wasser lassen? Wann hatten Sie zuletzt Stuhlgang?</em> Jeśli pacjent mówi, że często się krztusi (<em>Ich verschlucke mich oft</em>), dziękujesz i przekazujesz to lekarzowi: <em>Das gebe ich an die Ärztin weiter.</em>"
      },
      {
        h: "Czasowniki modalne w rozmowie z pacjentem",
        p: "Każdy czasownik modalny ma swoje zadanie. <strong>möchten</strong> proponuje (<em>Möchten Sie am Tisch essen?</em>); <strong>können</strong> pyta o możliwość (<em>Können Sie gut schlucken?</em>); <strong>müssen</strong> pyta o potrzebę (<em>Müssen Sie zur Toilette?</em>); <strong>dürfen</strong> prosi o pozwolenie (<em>Darf ich Ihnen helfen?</em>); <strong>sollen</strong> pyta, czego druga osoba od ciebie oczekuje (<em>Soll ich das Fenster öffnen?</em>). W pytaniu rozstrzygającym modalny otwiera zdanie, a bezokolicznik idzie na koniec. <em>wollen</em> jest poprawne, ale wobec pacjenta brzmi szorstko: lepiej <em>möchten</em>."
      },
      {
        contrast: "Terminy fachowe tej lekcji znasz z łaciny: <em>Dysphagie</em> to dysfagia, <em>Miktion</em> mikcja, <em>Defäkation</em> defekacja, <em>Inkontinenz</em> inkontynencja, czyli nietrzymanie moczu albo stolca. Po niemiecku to słowa do raportu i dokumentacji, a słowa pacjenta są dla ciebie zupełnie nieprzejrzyste. Pacjent mówi <em>Schluckstörung</em> («zaburzenie połykania») albo <em>sich verschlucken</em> («krztusić się»), <em>Wasser lassen</em> (dosłownie «puszczać wodę», czyli oddawać mocz), <em>Stuhlgang</em> («wypróżnienie»). Na nietrzymanie moczu wielu pacjentów mówi <em>Blasenschwäche</em> («słaby pęcherz»), co dotyczy tylko pęcherza: na nietrzymanie stolca nie ma delikatnego odpowiednika, i pyta się prostym zdaniem. Unikaj słów dziecięcych, które czasem słychać na polskich oddziałach («zrobiła Pani siusiu?»): z dorosłym rejestr zostaje dorosły."
      },
      {
        trap: "Najgroźniejsza pułapka tej lekcji: <em>Sie müssen nicht</em> znaczy «nie musi Pan», czyli «nie trzeba», i tu polski ci pomaga. Ale zakaz to <em>Sie dürfen nicht</em>, «nie wolno Panu», a nie <em>Sie können nicht</em>. Polskie «nie może Pan jeszcze wstawać» jest zakazem, a <em>Sie können noch nicht aufstehen</em> brzmi jak stwierdzenie, że pacjent nie jest w stanie: zakaz to <em>Sie dürfen noch nicht aufstehen</em>. <em>Der Stuhl</em> to krzesło, ale na oddziale także stolec: <em>Stuhlgang</em>, <em>Stuhlprobe</em> (zresztą polski «stolec» też dawniej znaczył «siedzisko»). A <em>die Windel</em> to pieluszka dla dziecka: przy dorosłym nie mów <em>Windel</em> ani «Pampers», tylko <em>Einlage</em> albo <em>Inkontinenzeinlage</em>."
      },
      {
        tip: "Gdy pytasz o wydalanie, ścisz głos i sprawdź, czy nikt inny nie słucha: <em>Darf ich Sie kurz etwas Persönliches fragen?</em> Pytanie jest to samo, ale pacjent chętniej odpowiada."
      }
    ],
    grammar: {
      title: "Jeden czasownik modalny na każdą intencję",
      note: "Odmieniony czasownik modalny na <b>pierwszym</b> miejscu w pytaniu rozstrzygającym, bezokolicznik <b>na końcu</b>. <b>müssen nicht</b> = nie trzeba; <b>dürfen nicht</b> = nie wolno.",
      table: {
        head: ["czasownik modalny", "do pacjenta", "do czego służy"],
        rows: [
          ["möchten", "Möchten Sie etwas trinken?", "zaproponować"],
          ["können", "Können Sie gut schlucken?", "zapytać o możliwość"],
          ["müssen", "Müssen Sie zur Toilette?", "zapytać o potrzebę"],
          ["dürfen", "Darf ich Ihnen beim Essen helfen?", "poprosić o pozwolenie"],
          ["sollen", "Soll ich Ihnen das Fleisch klein schneiden?", "zapytać, czego ktoś oczekuje"],
          ["müssen nicht", "Sie müssen sich nicht beeilen.", "nie trzeba"]
        ]
      },
      examples: [
        { tr: "Napije się Pani czegoś?", note: "möchten: najgrzeczniejsza forma propozycji" },
        { tr: "Czy dobrze Pan połyka?", note: "können: możliwość" },
        { tr: "Musi Pan do toalety?", note: "müssen: potrzeba; czasownik ruchu można opuścić, jak po polsku" },
        { tr: "Czy mogę pomóc Pani przy jedzeniu?", note: "dürfen: zapytać o pozwolenie, zanim się pomoże" },
        { tr: "Pokroić Panu mięso na małe kawałki?", note: "sollen: «czy mam...?», czyli «czy Pan chce, żebym...?»" },
        { tr: "Nie musi się Pani spieszyć.", note: "müssen nicht: nie trzeba, to nie zakaz" }
      ]
    },
    vocab: [
      "posiłek",
      "połykać",
      "krztusić się (ich verschlucke mich: krztuszę się, coś mi wpadło nie w tę dziurkę)",
      "dysfagia (termin fachowy)",
      "zaburzenie połykania (słowo pacjenta)",
      "mikcja (termin fachowy)",
      "oddawanie moczu (Wasser lassen: oddawać mocz, słowo pacjenta)",
      "defekacja (termin fachowy)",
      "wypróżnienie, stolec (słowo pacjenta)",
      "nietrzymanie moczu lub stolca, inkontynencja (termin fachowy)",
      "nietrzymanie moczu, «słaby pęcherz» (słowo pacjenta)",
      "wkładka chłonna dla osób z nietrzymaniem moczu"
    ],
    dialogue: [
      "Pani Keller, obiad już jest. Chce Pani zjeść przy stole czy w łóżku?",
      "Przy stole, proszę.",
      "Pokroić Pani mięso na małe kawałki?",
      "Tak, to miło. Ostatnio często się krztuszę.",
      "Dziękuję, że Pani mi to mówi. Przekażę to pani doktor. Napije się Pani czegoś?",
      "Szklankę wody, proszę. A potem muszę do toalety.",
      "Nie ma problemu. Proszę po prostu zadzwonić, to Panią zaprowadzę. Nie musi się Pani spieszyć."
    ],
    culture: {
      title: "Po niemiecku: posiłki na oddziale",
      text: "<p>W wielu niemieckich szpitalach i domach opieki kolacja przychodzi wcześnie, często między 17 a 18, i jest zimna: chleb, ser, wędlina. Nazywa się <i>Abendbrot</i>, dosłownie «wieczorny chleb». Ciepły posiłek jest w porze obiadu. Pacjenci często wybierają menu na kolejne dni z karty, a ci, którzy mają trudności z połykaniem, mogą na zlecenie dostać inną konsystencję posiłków.</p><p>Dla pacjenta z innej kultury pory posiłków i zimna kolacja mogą być zaskoczeniem: pytanie, co chętnie je, należy do wywiadu, a nie do dodatkowej uprzejmości.</p>"
    },
    exercises: [
      {
        q: "Chcesz zapytać pacjenta, czy musi do toalety. Które zdanie jest poprawne?",
        opts: ["Sie zur Toilette müssen?", "Müssen Sie zur Toilette?", "Müssen zur Toilette Sie?"],
        why: "W pytaniu rozstrzygającym modalne <b>müssen</b> otwiera zdanie, a podmiot <i>Sie</i> stoi zaraz za nim."
      },
      {
        tr: "Czas teraźniejszy dürfen we wszystkich osobach.",
        why: "<i>Darf, darfst, darf, dürfen, dürft, dürfen</i>: w liczbie pojedynczej samogłoska to <b>a</b>, a pierwsza i trzecia osoba nie mają końcówki, jak w innych czasownikach modalnych."
      },
      {
        q: "Uzupełnij: «___ Sie gut schlucken?»",
        hint: "czasownik modalny możliwości, Sie",
        why: "<b>Können</b>: pyta się o możliwość. Modalny otwiera pytanie rozstrzygające, a bezokolicznik <i>schlucken</i> idzie na koniec."
      },
      {
        q: "Uzupełnij czasownikami modalnymi.",
        tr: "Czy mogę pomóc Pani przy jedzeniu? Nie musi się Pani spieszyć.",
        why: "W pierwszym zdaniu pasują <i>Darf</i>, <i>Kann</i> i <i>Soll ich</i>: wszystkie proponują pomoc. W drugim potrzebne jest <i>müssen</i> z <i>nicht</i>: «nie trzeba». <i>Sie dürfen sich nicht beeilen</i> byłoby zakazem."
      },
      {
        q: "Które zdania są poprawne?",
        opts: [
          "Möchten Sie etwas trinken?",
          "Können Sie gut schlucken?",
          "Müssen Sie zur Toilette gehen?",
          "Wollen Sie zu trinken etwas?",
          "Sie müssen nicht sich beeilen."
        ],
        why: "Odmieniony czasownik modalny otwiera pytanie, a bezokolicznik idzie na koniec. W ostatnim zdaniu zaimek zwrotny <i>sich</i> stoi przed <i>nicht</i>: <i>Sie müssen sich nicht beeilen</i>."
      },
      {
        q: "Połącz każdy termin fachowy ze słowem, którego używa pacjent.",
        pairs: ["die Schluckstörung", "das Wasserlassen", "der Stuhlgang", "die Blasenschwäche"]
      },
      {
        q: "Wybierz właściwy rodzajnik określony dla każdego rzeczownika.",
        items: ["posiłek", "zaburzenie połykania", "oddawanie moczu", "wypróżnienie", "«słaby pęcherz»", "wkładka chłonna"]
      },
      {
        q: "Ułóż słowa we właściwej kolejności.",
        tr: "Chce Pani zjeść przy stole?",
        why: "<i>Möchten Sie am Tisch essen?</i> Modalny otwiera pytanie, bezokolicznik <i>essen</i> idzie na koniec; <i>am</i> to <i>an dem</i>, bo chodzi o położenie."
      },
      {
        q: "Przetłumacz (do pacjenta): «Musi Pan do toalety?»",
        why: "<i>Müssen Sie zur Toilette?</i> albo <i>auf die Toilette</i>; czasownik <i>gehen</i> można dodać albo pominąć, tak jak po polsku «iść»."
      },
      {
        q: "Przy obiedzie.",
        setting: "Pomagasz pani Keller przy posiłku.",
        lines: [
          { tr: "Chce mi się pić." },
          { tr: "Zapytaj, czy chce szklankę wody.", answerTr: "Chce Pani szklankę wody?" },
          { tr: "Muszę też do toalety, ale jestem taka powolna." },
          { tr: "Odpowiedz, że to nie problem i że nie musi się spieszyć.", answerTr: "Nie ma problemu, nie musi się Pani spieszyć." },
          { tr: "Kiedy piję, często się krztuszę." },
          { tr: "Podziękuj jej i powiedz, że przekażesz to pani doktor.", answerTr: "Dziękuję, że Pani mi to mówi. Przekażę to pani doktor." }
        ]
      },
      {
        tr: "Szklankę wody, proszę. A potem muszę do toalety.",
        why: "W <i>Toilette</i>, słowie pochodzenia francuskiego, akcent pada na <b>let</b>, a <b>oi</b> czyta się [oa]; w <i>Wasser</i> <b>w</b> to polskie «w»; w <i>danach</i> <b>ch</b> po <b>a</b> to [x], jak polskie «ch»."
      },
      {
        tr: "Czy mogę pomóc Pani przy jedzeniu?",
        why: "W <i>Darf</i> <b>r</b> po samogłosce jest ledwie słyszalne; w <i>Ihnen</i> <b>h</b> się nie czyta i wydłuża <b>i</b>; w <i>helfen</i> początkowe <b>h</b> to lekki wydech, słabszy niż polskie «ch»."
      }
    ]
  },
  "lesson:pfl-u03-l4": {
    theme: "Samodzielność",
    title: "Samodzielnie czy z pomocą?",
    objectives: [
      "zapytać i opisać, co pacjent potrafi zrobić sam",
      "używać bezokolicznika z zu po versuchen, helfen, es ist wichtig, es fällt mir schwer",
      "pamiętać, że po czasownikach modalnych bezokolicznik nie bierze zu",
      "rozpoznać Thrombose i Prophylaxe i nazwać je słowami pacjenta"
    ],
    theory: [
      {
        h: "Robić razem z pacjentem, a nie za niego",
        p: "W niemieckiej opiece mówi się o <strong>aktivierende Pflege</strong>, pielęgnacji aktywizującej: pacjent robi sam wszystko, co może, a pielęgniarka pomaga tam, gdzie trzeba. Dlatego kluczowe pytanie brzmi <em>Was schaffen Sie allein?</em>, a zachęta <em>Versuchen Sie bitte, das Hemd selbst anzuziehen.</em> Jeśli pacjent prosi, żeby było szybciej, wyjaśnia się dlaczego: <em>Es ist wichtig, möglichst viel selbst zu machen. So bleiben Sie selbstständig.</em>"
      },
      {
        h: "Bezokolicznik z zu",
        p: "Po wielu czasownikach i wyrażeniach bezokolicznik bierze <strong>zu</strong> i idzie na koniec, zwykle po przecinku: <em>Versuchen Sie, allein aufzustehen. Es ist wichtig, sich zu bewegen. Es fällt mir schwer, die Strümpfe anzuziehen.</em> W czasownikach rozdzielnych <em>zu</em> wchodzi <strong>między</strong> przedrostek a czasownik: <em>aufstehen → aufzustehen</em>, <em>anziehen → anzuziehen</em>. Po <strong>czasownikach modalnych</strong> bezokolicznik nigdy nie bierze <em>zu</em>: <em>Sie können allein aufstehen</em>. <em>brauchen</em> z przeczeniem działa jak <em>müssen nicht</em>, ale wymaga <em>zu</em>: <em>Sie brauchen sich nicht zu beeilen.</em>"
      },
      {
        contrast: "Tutaj układ dwóch rejestrów się zmienia. <em>Thrombose</em> to słowo, które wielu niemieckich pacjentów zna i używa, tak jak polscy pacjenci mówią «zakrzepica». Słowo pacjenta <em>Blutgerinnsel</em> oznacza skrzep, a nie chorobę: to nie są dokładne synonimy, i w raporcie mówi się <em>Thrombose</em>. Odwrotna pułapka czeka przy <em>Prophylaxe</em>: po polsku «profilaktyka» to słowo zupełnie potoczne, więc kusi, żeby użyć go wobec pacjenta, ale po niemiecku <em>Prophylaxe</em> brzmi fachowo, a pacjent mówi <em>Vorbeugung</em> albo używa czasownika <em>vorbeugen</em>. Pończochy uciskowe, w dokumentacji <em>Kompressionsstrümpfe</em>, wielu pacjentów nazywa <em>Thrombosestrümpfe</em>, «pończochy przeciwzakrzepowe». Bezokolicznik z <em>zu</em> nie ma polskiego odpowiednika: mówimy «proszę spróbować się ubrać», «trudno mi wstać», bez żadnej cząstki. Dlatego najłatwiej o nim zapomnieć. Po czasownikach modalnych oba języki zgadzają się: «może Pan wstać», <em>Sie können aufstehen</em>, bez <em>zu</em>."
      },
      {
        trap: "<em>selbstständig</em> na oddziale znaczy «samodzielny», ale w świecie pracy <em>selbstständig sein</em> to prowadzić własną działalność, być samozatrudnionym. Czasownik <em>vorbeugen</em> ma dwa znaczenia: <em>einer Thrombose vorbeugen</em> to zapobiegać zakrzepicy, a <em>Beugen Sie sich bitte vor</em> znaczy «proszę się pochylić do przodu». A <em>der Strumpf</em> to pończocha albo skarpeta, nie but: buty to <em>die Schuhe</em>."
      },
      {
        tip: "Zanim pomożesz, zawsze zapytaj <em>Was schaffen Sie allein?</em> i daj czas na próbę. Czas, który dziś spędzasz na czekaniu, pacjent zyskuje w samodzielności, a zdanie <em>Sie brauchen sich nicht zu beeilen</em> często wystarcza, żeby odzyskał jakiś gest."
      }
    ],
    grammar: {
      title: "zu czy nic?",
      note: "Po czasowniku <b>modalnym</b> bezokolicznik stoi <b>bez zu</b>. Po <b>versuchen</b>, <b>helfen</b>, <b>es ist wichtig</b>, <b>es fällt mir schwer</b> i <b>nicht brauchen</b> bezokolicznik bierze <b>zu</b>, w czasownikach rozdzielnych między przedrostkiem a czasownikiem.",
      table: {
        head: ["co rządzi bezokolicznikiem", "przykład", "zu?"],
        rows: [
          ["können, müssen, dürfen", "Sie können sich selbst waschen.", "nie"],
          ["versuchen", "Versuchen Sie, sich selbst anzuziehen.", "tak"],
          ["es fällt mir schwer", "Es fällt mir schwer, allein aufzustehen.", "tak"],
          ["es ist wichtig", "Es ist wichtig, sich regelmäßig zu bewegen.", "tak"],
          ["nicht brauchen", "Sie brauchen sich nicht zu beeilen.", "tak"]
        ]
      },
      examples: [
        { tr: "Proszę spróbować ubrać się samemu.", note: "anziehen jest rozdzielny: anzuziehen" },
        { tr: "Trudno mi wstać samemu.", note: "es fällt mir schwer + zu" },
        { tr: "Pomogę Panu założyć pończochy uciskowe.", note: "helfen + celownik + zu" },
        { tr: "Ważne jest, żeby regularnie się ruszać.", note: "zaimek sich stoi przed zu" },
        { tr: "Zęby może Pani umyć sobie sama.", note: "po modalnym können: bez zu" },
        { tr: "Nie musi się Pan spieszyć.", note: "nicht brauchen + zu = müssen nicht" }
      ]
    },
    vocab: [
      "samodzielny, sam",
      "samodzielność",
      "pomoc",
      "wsparcie, pomoc",
      "próbować",
      "dać radę, poradzić sobie",
      "wstawać",
      "zakrzepica",
      "skrzep krwi (słowo pacjenta)",
      "profilaktyka (termin fachowy)",
      "zapobieganie (słowo pacjenta)",
      "pończocha uciskowa"
    ],
    dialogue: [
      "Panie Brandt, co dziś już daje Pan radę zrobić sam?",
      "Umyć się umiem sam. Ale trudno mi założyć pończochy.",
      "W tym chętnie Panu pomogę. Koszulę proszę spróbować założyć samemu.",
      "Dlaczego nie zrobi Pani tego za mnie? Byłoby szybciej.",
      "Ważne jest, żeby jak najwięcej robić samemu. Wtedy zostanie Pan samodzielny.",
      "No dobrze. A dziś też muszę chodzić?",
      "Tak, pójdziemy razem do okna. Ruch to dobre zapobieganie zakrzepicy."
    ],
    culture: {
      title: "Po niemiecku: aktivierende Pflege",
      text: "<p>Idea, że opieka ma zachowywać i ćwiczyć możliwości pacjenta, a nie je zastępować, jest w niemieckim kształceniu pielęgniarek centralna i ma swoją nazwę: <i>aktivierende Pflege</i>. W praktyce oznacza to zostawić pacjentowi grzebień, myjkę i czas na zapięcie koszuli, nawet jeśli zrobienie tego za niego byłoby szybsze.</p><p>W dokumentach często spotkasz słowo <i>Ressourcen</i>: to możliwości, które pacjent wciąż ma i które plan opieki chce zachować. Wrócisz do niego w jednostce o przekazywaniu dyżuru i raporcie pielęgniarskim.</p>"
    },
    exercises: [
      {
        q: "Chcesz powiedzieć pacjentowi: «Proszę spróbować ubrać się samemu». Które zdanie jest poprawne?",
        opts: [
          "Versuchen Sie, sich selbst anziehen.",
          "Versuchen Sie, sich selbst anzuziehen.",
          "Versuchen Sie, sich selbst zu anziehen."
        ],
        why: "Po <i>versuchen</i> bezokolicznik bierze <b>zu</b>, a w czasownikach rozdzielnych <i>zu</i> wchodzi między przedrostek a czasownik: <b>anzuziehen</b>, jednym słowem."
      },
      {
        q: "Uzupełnij: «Es fällt mir schwer, allein ___.»",
        hint: "aufstehen z zu",
        why: "<b>aufzustehen</b>: <i>aufstehen</i> jest rozdzielny, więc <i>zu</i> wchodzi między <i>auf</i> a <i>stehen</i>."
      },
      {
        q: "Uzupełnij: w pierwszym zdaniu jest czasownik modalny, w drugim nie.",
        tr: "Może się Pani umyć sama. Proszę spróbować także ubrać się samej.",
        why: "<i>Sie können sich selbst waschen</i>: po modalnym <i>können</i> bezokolicznik stoi bez <i>zu</i>. <i>Versuchen Sie bitte, sich auch selbst anzuziehen</i>: po <i>versuchen</i> potrzebne jest <i>zu</i>."
      },
      {
        q: "Które zdania są poprawne?",
        opts: [
          "Ich versuche, allein zu gehen.",
          "Ich kann allein zu gehen.",
          "Es ist wichtig, sich zu bewegen.",
          "Sie müssen nicht sofort aufzustehen.",
          "Ich helfe Ihnen, aufzustehen."
        ],
        why: "<i>versuchen</i>, <i>es ist wichtig</i> i <i>helfen</i> wymagają bezokolicznika z <i>zu</i>. Po modalnych <i>können</i> i <i>müssen</i> bezokolicznik stoi bez <i>zu</i>: <i>Ich kann allein gehen</i>, <i>Sie müssen nicht sofort aufstehen</i>."
      },
      {
        q: "Połącz każdy termin fachowy ze słowem, którego używa pacjent.",
        pairs: ["das Blutgerinnsel", "die Vorbeugung", "das Druckgeschwür", "die Gelenkversteifung"]
      },
      {
        q: "Wybierz właściwy rodzajnik określony dla każdego rzeczownika.",
        items: ["zakrzepica", "skrzep krwi", "profilaktyka", "zapobieganie", "pończocha uciskowa", "samodzielność"]
      },
      {
        q: "Ułóż słowa we właściwej kolejności.",
        tr: "Ważne jest, żeby regularnie się ruszać.",
        why: "<i>Es ist wichtig, sich regelmäßig zu bewegen.</i> Po przecinku bezokolicznik z <i>zu</i> idzie na koniec; <i>sich</i> i przysłówek stoją przed nim."
      },
      {
        q: "Przetłumacz (mówi pacjent): «Dam radę sam.»",
        why: "<i>Das schaffe ich allein</i> albo <i>Ich schaffe das allein</i>. <i>schaffen</i> to typowy czasownik na «dać radę»; <i>alleine</i> to wariant potoczny."
      },
      {
        tr: "Czas teraźniejszy können we wszystkich osobach.",
        why: "<i>Kann, kannst, kann, können, könnt, können</i>: w liczbie pojedynczej samogłoska to <b>a</b>, bez Umlautu, a pierwsza i trzecia osoba nie mają końcówki."
      },
      {
        q: "Pacjent chce, żeby było szybko.",
        setting: "Pan Brandt chciałby, żebyś go ubrała.",
        lines: [
          { tr: "Nie może mnie Pani po prostu ubrać? Byłoby szybciej." },
          { tr: "Odpowiedz, że chętnie mu pomożesz, ale najpierw niech spróbuje sam założyć koszulę.", answerTr: "Chętnie Panu pomogę, ale najpierw proszę spróbować samemu założyć koszulę." },
          { tr: "Ale z pończochami sobie nie poradzę." },
          { tr: "Odpowiedz, że to nie problem i że z pończochami pomożesz mu ty.", answerTr: "Nie ma problemu, z pończochami ja Panu pomogę." },
          { tr: "Dziś znowu muszę chodzić?" },
          { tr: "Odpowiedz, że tak: ważne jest, żeby ruszać się codziennie.", answerTr: "Tak, ważne jest, żeby ruszać się codziennie." }
        ]
      },
      {
        tr: "Ważne jest, żeby jak najwięcej robić samemu. Wtedy zostanie Pan samodzielny.",
        why: "W <i>wichtig</i> zarówno <b>ch</b>, jak i końcowe <b>g</b> czyta się [ç], jak w polskim «Chiny»; w <i>möglichst</i> <b>ö</b> jest długie; w <i>selbstständig</i> <b>st</b> w <i>ständig</i> to [ʃt], czyli «szt»."
      },
      {
        tr: "Proszę spróbować ubrać się samemu.",
        why: "W <i>Versuchen</i> <b>v</b> czyta się jak [f], a akcent pada na <b>su</b>; w <i>anzuziehen</i> oba <b>z</b> to [ts], polskie «c», a <b>ie</b> jest długie, z niemym <b>h</b>."
      }
    ]
  },
  "lesson:pfl-u03-test": {
    theme: "Sprawdzian",
    title: "Test: Podstawowa pielęgnacja i uruchamianie",
    objectives: [
      "sprawdzić czasowniki zwrotne przy myciu, wohin? i wo? z przyimkami, czasowniki modalne w rozmowie z pacjentem i pary Fachsprache / Laiensprache"
    ],
    theory: [
      {
        p: "Jedenaście pytań z całej jednostki. Zalicza 70%. Sytuacje kliniczne to przykłady dydaktyczne: jak i z jakim sprzętem pomaga się pacjentowi, decyduje ocena pielęgniarska i procedura placówki."
      }
    ],
    exercises: [
      {
        q: "Pacjent siedzi na brzegu łóżka. Jak to opiszesz?",
        opts: ["Er sitzt an die Bettkante.", "Er sitzt an der Bettkante.", "Er setzt an der Bettkante."],
        why: "<i>sitzen</i> opisuje położenie (<i>wo?</i>), więc <i>an</i> łączy się z celownikiem: <b>an der</b> Bettkante."
      },
      {
        q: "Uzupełnij: «Ich wasche ___ die Hände.»",
        hint: "ich, z dopełnieniem",
        why: "<b>mir</b>: jest dopełnienie, <i>die Hände</i>, więc zaimek zwrotny przechodzi do celownika, jak polskie «sobie»."
      },
      {
        q: "Uzupełnij: «Ich stelle den Rollator neben ___ Bett.»",
        hint: "wohin? das Bett w bierniku",
        why: "<b>das</b>: <i>stellen</i> oznacza ruch w stronę celu, więc <i>neben</i> łączy się z biernikiem."
      },
      {
        tr: "Czas teraźniejszy sich anziehen we wszystkich osobach.",
        why: "<i>Ziehe mich an, ziehst dich an, zieht sich an, ziehen uns an, zieht euch an, ziehen sich an</i>: zaimek zwrotny stoi za czasownikiem, a przedrostek <i>an</i> idzie na koniec."
      },
      {
        q: "Połącz każdy termin fachowy ze słowem, którego używa pacjent.",
        pairs: ["die Schluckstörung", "die Blasenschwäche", "das Druckgeschwür", "die Vorbeugung"]
      },
      {
        q: "Które zdania są poprawne w rozmowie z pacjentem?",
        opts: [
          "Sie müssen sich nicht beeilen.",
          "Wir legen Sie auf der Seite.",
          "Können Sie gut schlucken?",
          "Es fällt mir schwer, allein aufzustehen.",
          "Ich kann allein aufzustehen."
        ],
        why: "<i>legen</i> oznacza ruch i wymaga biernika: <i>auf die Seite</i>. Po modalnym <i>können</i> bezokolicznik stoi bez <i>zu</i>: <i>Ich kann allein aufstehen</i>."
      },
      {
        q: "Uzupełnij zdanie.",
        tr: "Teraz obrócimy Pana na bok. Leży Pan wygodnie?",
        why: "<i>Wir legen Sie jetzt auf die Seite</i>: ruch, biernik. <i>Liegen Sie bequem?</i>: pytanie rozstrzygające o położenie, z czasownikiem <i>liegen</i> na pierwszym miejscu."
      },
      {
        q: "Ułóż słowa we właściwej kolejności.",
        tr: "Czy mogę pomóc Pani przy jedzeniu?",
        why: "<i>Darf ich Ihnen beim Essen helfen?</i> Modalny otwiera pytanie, <i>helfen</i> na końcu, osoba, której się pomaga, w celowniku: <i>Ihnen</i>."
      },
      {
        q: "Wybierz właściwy rodzajnik określony dla każdego rzeczownika.",
        items: ["myjka", "brzeg łóżka", "wypróżnienie", "odleżyna (słowo pacjenta)", "skrzep krwi", "higiena intymna"]
      },
      {
        tr: "Twarz i ręce umyje Pani sama. Potem posadzimy Panią na brzegu łóżka.",
        why: "W <i>Gesicht</i> <b>ch</b> to [ç], jak w polskim «Chiny»; w <i>Arme</i> <b>r</b> jest ledwie słyszalne, inaczej niż polskie «r»; w <i>Bettkante</i> akcent pada na <b>Bett</b>."
      },
      {
        tr: "Musi Pan do toalety?",
        why: "W <i>Müssen</i> <b>ü</b> jest krótkie, to «i» z zaokrąglonymi ustami; w <i>zur</i> <b>z</b> to [ts], polskie «c»; w <i>Toilette</i> akcent pada na <b>let</b>."
      }
    ]
  }
});
