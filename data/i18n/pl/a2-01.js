/* ============================================================
   Teksty w języku ucznia (pl) do data/core/a2-01.js, jednostka a2-u01.
   Klucze odsyłają do id warstwy neutralnej; tablice łączą się
   po indeksie, więc ich długość musi zgadzać się z core.
   Sprawdza to scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("pl", {
  "unit:a2-u01": {
    title: "Dawniej i dziś",
    grammarNote: "Präteritum czasowników sein, haben i modalnych · als i wenn · weil z czasownikiem na końcu · czasowniki zwrotne i sich erinnern an"
  },
  "lesson:a2-u01-l1": {
    theme: "Dzieciństwo",
    title: "Jako dziecko byłem ...",
    objectives: [
      "opisać swoje dzieciństwo za pomocą war i hatte",
      "odmieniać sein, haben i können w Präteritum",
      "używać früher i damals, by umieścić fakt w przeszłości"
    ],
    theory: [
      {
        h: "Präteritum czasowników sein i haben",
        p: "Żeby opisać, jak coś wyglądało dawniej, w mowie używa się prostych form czasowników <strong>sein</strong> i <strong>haben</strong>: <em>ich war</em>, <em>ich hatte</em>. Zamiast Perfekt (<em>Ich bin gewesen</em>, <em>Ich habe gehabt</em>) mówiony niemiecki bardzo często wybiera te krótkie formy: <em>Als Kind war ich oft krank</em>, <em>Wir hatten einen großen Garten</em>. W pierwszej i trzeciej osobie liczby pojedynczej forma jest taka sama: <em>ich war, er war</em>; <em>ich hatte, er hatte</em>."
      },
      {
        contrast: "Polski czas przeszły zmienia się według <b>rodzaju</b> (<em>byłem / byłam / było</em>, <em>miałem / miałam</em>), a do tego polskie czasowniki mają <b>aspekt</b>: <em>chorowałem</em> i <em>zachorowałem</em> to dwa różne czasowniki, niedokonany i dokonany. Niemieckie Präteritum nie zna ani rodzaju, ani aspektu: <em>ich war</em> to zarówno «byłem», jak i «byłam», a <em>ich hatte</em> to «miałem» i «miałam». Zdanie <em>Als Kind war ich oft krank</em> można więc oddać po polsku jako «Jako dziecko często chorowałem» (aspekt niedokonany), a <em>Gestern war ich beim Arzt</em> jako «Wczoraj byłem u lekarza». Drobna, ale stała różnica: w <em>als Kind</em> («jako dziecko») nie ma rodzajnika, a <em>Kind</em> jest rodzaju nijakiego, tak samo jak polskie «dziecko»."
      },
      {
        trap: "Nie mieszaj obu form: <em>Ich habe war</em> nie istnieje. Z <em>sein</em> i <em>haben</em> wybiera się Präteritum (<em>Ich war</em>, <em>Ich hatte</em>) albo Perfekt (<em>Ich bin gewesen</em>, <em>Ich habe gehabt</em>), nigdy formy mieszanej. Uważaj też na <em>wir hatten</em> i <em>wir waren</em>: w pierwszej osobie liczby mnogiej końcówka to <em>-en</em>, jak w bezokoliczniku."
      },
      {
        tip: "Przydatne określenia czasu do przeszłości: <em>früher</em> (dawniej), <em>damals</em> (wtedy, w tamtych czasach), <em>als Kind</em> (jako dziecko), <em>als Jugendlicher</em> (jako nastolatek). Zacznij zdanie od jednego z nich, a czasownik zostanie na drugim miejscu: <em>Früher hatte ich ein rotes Fahrrad.</em>"
      }
    ],
    grammar: {
      title: "Präteritum czasowników sein, haben i können",
      note: "W 1. i 3. osobie liczby pojedynczej forma jest taka sama. <i>Sein</i> przyjmuje proste końcówki <b>-st</b> (du warst) i <b>-t</b> (ihr wart) oraz <b>-en</b> dla wir i sie. <i>Haben</i> i <i>können</i> mają tematy <i>hatt-</i> i <i>konnt-</i> i przyjmują <b>-est</b> i <b>-et</b> (hattest, hattet, konntest, konntet) oraz <b>-en</b> dla wir i sie.",
      table: {
        head: ["osoba", "sein", "haben", "können"],
        rows: [
          ["ich", "war", "hatte", "konnte"],
          ["du", "warst", "hattest", "konntest"],
          ["er, sie, es", "war", "hatte", "konnte"],
          ["wir", "waren", "hatten", "konnten"],
          ["ihr", "wart", "hattet", "konntet"],
          ["sie, Sie", "waren", "hatten", "konnten"]
        ]
      },
      examples: [
        { tr: "Jako dziecko często chorowałem.", note: "als Kind: bez rodzajnika" },
        { tr: "Mieliśmy duży ogród.", note: "wir hatten" },
        { tr: "Mój dziadek miał psa.", note: "er hatte, tak jak ich hatte" },
        { tr: "Dawniej każdego lata byliśmy nad morzem.", note: "früher + sein w liczbie mnogiej: waren" },
        { tr: "Wtedy nie miałem telefonu komórkowego.", note: "damals" },
        { tr: "Jakie było twoje dzieciństwo?", note: "Wie war ...?" }
      ]
    },
    vocab: [
      "dzieciństwo",
      "przedszkole",
      "szkoła podstawowa",
      "nauczyciel",
      "nauczycielka",
      "wieś",
      "miasto",
      "ogród",
      "pies",
      "rower",
      "dawniej",
      "wtedy, w tamtych czasach"
    ],
    exercises: [
      {
        tr: "Präteritum czasownika sein, wszystkie osoby.",
        why: "<i>War, warst, war, waren, wart, waren</i>: formy nieregularne, które trzeba znać na pamięć. W 1. i 3. osobie liczby pojedynczej forma jest identyczna."
      },
      {
        tr: "Präteritum czasownika haben, wszystkie osoby.",
        why: "<i>Hatte, hattest, hatte, hatten, hattet, hatten</i>: w Präteritum <i>haben</i> jest nieregularne: temat to <i>hatt-</i>, końcówki <i>-e, -est, -e, -en, -et, -en</i>."
      },
      {
        tr: "Präteritum czasownika können, wszystkie osoby.",
        why: "<i>Konnte, konntest, konnte, konnten, konntet, konnten</i>: umlaut znika, a 1. i 3. osoba liczby pojedynczej są takie same."
      },
      {
        q: "Jak powiesz «Jako dziecko miałem psa»?",
        opts: ["Als Kind war ich einen Hund.", "Als Kind hatte ich einen Hund.", "Als Kind habe ich einen Hund war."],
        why: "Na «mieć» używa się <b>hatte</b>; <i>sein</i> znaczy «być» i nie służy do wyrażania posiadania: <i>Ich hatte einen Hund</i>. <i>Hund</i> jest rodzaju męskiego: <i>einen Hund</i> w bierniku."
      },
      {
        q: "Uzupełnij: «Früher ___ wir ein Fahrrad.» (mieliśmy, użyj haben)",
        hint: "haben, Präteritum, wir",
        why: "<b>Hatten</b>: temat <i>hatt-</i> z końcówką <i>-en</i>, jak w bezokoliczniku. Po <i>früher</i> czasownik zostaje na drugim miejscu."
      },
      {
        q: "Uzupełnij: «Als Kind ___ ich oft krank.» (byłem, użyj sein)",
        hint: "sein, Präteritum, ich",
        why: "<b>War</b>: w pierwszej osobie liczby pojedynczej nie dodaje się żadnej końcówki."
      },
      {
        q: "Uzupełnij zdanie.",
        tr: "Dawniej mieliśmy dom na wsi. Był mały, ale moi dziadkowie mieli ogród.",
        why: "<i>Wir hatten</i>, <i>es war</i>, <i>die Großeltern hatten</i>: z <i>wir</i> i z podmiotem w liczbie mnogiej forma to <i>hatten</i>."
      },
      {
        q: "Przetłumacz: «Jako dziecko często chorowałem.»",
        why: "<i>Als Kind war ich oft krank</i>: <i>als Kind</i> otwiera zdanie, potem idą <i>war</i> i podmiot. Poprawne jest też <i>Ich war als Kind oft krank</i>."
      },
      {
        tr: "Jako dziecko miałem psa i był bardzo grzeczny.",
        why: "W <i>Hund</i> <b>u</b> jest krótkie, a końcowe <b>d</b> wymawia się jak <b>t</b>, podobnie jak w polskim «chleb»; <i>lieb</i> kończy się bezdźwięcznym <b>p</b>."
      },
      {
        tr: "Dawniej każdego lata byliśmy nad morzem i świetnie się bawiliśmy.",
        why: "W <i>Früher</i> <b>ü</b> jest długie: wargi jak do <b>u</b>, język jak do <b>i</b>; w <i>Spaß</i> początkowe <b>sp</b> brzmi [ʃp], czyli «szp», a <b>ß</b> to bezdźwięczne <b>s</b>."
      }
    ]
  },
  "lesson:a2-u01-l2": {
    theme: "Kiedy był mały",
    title: "Kiedy byłem mały, ...",
    objectives: [
      "łączyć dwa zdarzenia za pomocą als (pojedynczy fakt z przeszłości) i wenn (fakt powtarzający się)",
      "stawiać odmieniony czasownik na końcu zdania po als i wenn",
      "zaczynać zdanie główne od czasownika, gdy zdanie podrzędne stoi na początku"
    ],
    theory: [
      {
        h: "Als dla faktu jednorazowego, wenn dla powtarzającego się",
        p: "Niemiecki ma dwa słowa na czasowe «kiedy». <strong>Als</strong> wprowadza fakt <b>jednorazowy</b> z przeszłości: <em>Als ich zehn war, sind wir nach Berlin umgezogen</em>. <strong>Wenn</strong> wprowadza fakt <b>powtarzający się</b> (także w przeszłości: <em>Immer wenn es geschneit hat, ...</em>) albo fakt <b>teraźniejszy lub przyszły</b>: <em>Wenn ich müde bin, gehe ich früh ins Bett</em>. W zdaniu podrzędnym odmieniony czasownik stoi <b>na końcu</b>."
      },
      {
        contrast: "Polski ma jedno «kiedy» (albo «gdy»), które nie zmienia szyku: <em>kiedy byłem mały, mieszkaliśmy na wsi</em>. W niemieckim trzeba wybrać między <em>als</em> a <em>wenn</em>, a odmieniony czasownik idzie na koniec: <em>Als ich klein war, ...</em>, a nie «Als ich war klein». Gdy zdanie podrzędne stoi na początku, zdanie główne zaczyna się zaraz po przecinku od odmienionego czasownika: <em>Als ich klein war, haben wir in einem Dorf gewohnt.</em> Polskie «kiedy/gdy» może stać zarówno przy zdarzeniu jednorazowym, jak i powtarzalnym, a powtarzalność doprecyzowują kontekst i określenia takie jak «za każdym razem». Niemiecki rozstrzyga to samym spójnikiem: <em>als</em> dla jednego razu, <em>wenn</em> dla powtarzalności. W pytaniu bezpośrednim jest jeszcze inne słowo, <em>wann</em> («kiedy?»). Uwaga: <em>wenn</em> znaczy też «jeśli» (<em>Wenn du willst, ...</em>), a <em>als</em> tego znaczenia nie ma."
      },
      {
        trap: "Przy powtarzającym się fakcie z przeszłości odruch podpowiada «kiedy» = <em>als</em>, a trzeba <b>wenn</b>: <em>Immer wenn es geschneit hat, sind wir Schlitten gefahren</em> (za każdym razem, gdy padał śnieg). Żeby wybrać, zapytaj siebie, czy fakt zdarzył się raz (<em>als</em>), czy wiele razy (<em>wenn</em>). <em>Als</em> jako spójnik czasowy odnosi się do jednorazowego zdarzenia lub okresu w przeszłości."
      },
      {
        tip: "<em>Als</em> to to samo słowo co w stopniu wyższym (<em>älter als ich</em>), ale tu pełni inną rolę: łączy dwa zdania. Gdy zdanie podrzędne jest w Perfekt, odmieniony czasownik (posiłkowy) stoi na końcu, za imiesłowem: <em>Als wir in Wien gewohnt haben, ...</em>"
      }
    ],
    grammar: {
      title: "Als i wenn z czasownikiem na końcu",
      note: "Po <b>als</b> i <b>wenn</b> odmieniony czasownik stoi <b>na końcu</b>; jeśli zdanie podrzędne jest pierwsze, zdanie główne zaczyna się od czasownika.",
      table: {
        head: ["sytuacja", "słowo", "przykład"],
        rows: [
          ["pojedynczy fakt z przeszłości", "als", "Als ich zehn war, sind wir umgezogen."],
          ["powtarzający się fakt z przeszłości", "wenn", "Immer wenn es geschneit hat, sind wir Schlitten gefahren."],
          ["teraźniejszość lub przyszłość", "wenn", "Wenn ich müde bin, gehe ich früh ins Bett."]
        ]
      },
      examples: [
        { tr: "Kiedy byłem mały, mieszkaliśmy na wsi.", note: "als: zamknięty okres; potem czasownik + podmiot" },
        { tr: "Kiedy mieszkaliśmy w Wiedniu, często jeździłem na rowerze.", note: "Perfekt w zdaniu podrzędnym: gewohnt haben" },
        { tr: "Kiedy miałem dziesięć lat, przeprowadziliśmy się do Berlina.", note: "als: fakt jednorazowy" },
        { tr: "Za każdym razem, gdy padał śnieg, jeździliśmy na sankach.", note: "immer wenn: fakt powtarzający się" },
        { tr: "Za każdym razem, gdy babcia nas odwiedzała, piekła ciasto.", note: "jedes Mal, wenn" },
        { tr: "Kiedy jestem zmęczony, wcześnie idę spać.", note: "wenn: teraźniejszość" }
      ]
    },
    vocab: [
      "przeprowadzka",
      "wakacje (tylko liczba mnoga)",
      "lato",
      "zima",
      "śnieg",
      "sanki",
      "babcia",
      "dziadek",
      "sąsiad",
      "zawsze",
      "często",
      "za każdym razem"
    ],
    exercises: [
      {
        q: "Które słowo? «___ ich klein war, haben wir in einem Dorf gewohnt.» (kiedy byłem mały)",
        opts: ["Als", "Wenn", "Wann"],
        why: "Zamknięty okres z przeszłości: <b>als</b>. <i>Wenn</i> byłoby dla faktów powtarzających się albo dla teraźniejszości."
      },
      {
        q: "Które słowo? «___ es geschneit hat, sind wir Schlitten gefahren.» (za każdym razem, gdy padał śnieg)",
        opts: ["Als", "Wenn", "Wann"],
        why: "«Za każdym razem» oznacza fakt powtarzający się: <b>wenn</b>, nawet jeśli zdanie jest w przeszłości."
      },
      {
        q: "Które zdanie jest poprawne?",
        opts: [
          "Als ich klein war, wir haben viel gespielt.",
          "Als ich klein war, haben wir viel gespielt.",
          "Als ich war klein, haben wir viel gespielt."
        ],
        why: "W zdaniu podrzędnym czasownik idzie na koniec (<i>klein war</i>); zdanie główne zaczyna się potem od czasownika: <i>haben wir</i>."
      },
      {
        q: "Które zdania są poprawne? (więcej niż jedno)",
        opts: [
          "Als ich zehn war, sind wir umgezogen.",
          "Wenn ich müde bin, trinke ich Kaffee.",
          "Als ich Kind war, ich habe viel gespielt.",
          "Immer wenn wir Ferien hatten, sind wir ans Meer gefahren."
        ],
        why: "Trzecie jest błędne: po zdaniu podrzędnym zdanie główne zaczyna się od czasownika (<i>habe ich viel gespielt</i>). Pozostałe zachowują różnicę między <i>als</i> a <i>wenn</i>."
      },
      {
        q: "Uzupełnij zdanie.",
        tr: "Kiedy byłem mały, mieszkaliśmy na wsi.",
        why: "<i>Als</i> wprowadza zamknięty okres z przeszłości; imiesłów (<i>gewohnt</i> albo <i>gelebt</i>) zamyka zdanie główne."
      },
      {
        q: "Uzupełnij zdanie.",
        tr: "Za każdym razem, gdy zimą padał śnieg, jeździliśmy na sankach.",
        why: "<i>Immer wenn</i> oznacza fakt powtarzający się, więc <b>wenn</b> (małą literą, po <i>Immer</i>). W zdaniu głównym odmieniony czasownik (<i>sind</i>) stoi przed podmiotem."
      },
      {
        q: "Uzupełnij zdanie.",
        tr: "Kiedy mieszkaliśmy w Wiedniu, często jeździłem na rowerze.",
        why: "W zdaniu podrzędnym w Perfekt imiesłów (<i>gewohnt</i>) stoi przed czasownikiem posiłkowym (<i>haben</i>), który jest na końcu zdania."
      },
      {
        q: "Przetłumacz: «Kiedy miałem dziesięć lat, przeprowadziliśmy się do Berlina.» (użyj umziehen)",
        why: "<i>Als</i> dla faktu jednorazowego. Perfekt od <i>umziehen</i> tworzy się z <b>sein</b>: <i>sind umgezogen</i>."
      },
      {
        tr: "Kiedy miałem dziesięć lat, przeprowadziliśmy się do Berlina i tam nie miałem przyjaciół.",
        why: "W <i>keine</i> <b>ei</b> czyta się jak polskie «aj»; w <i>Freunde</i> <b>eu</b> to dyftong zbliżony do «oj». <i>Berlin</i> ma akcent na ostatniej sylabie."
      },
      {
        tr: "Za każdym razem, gdy padał śnieg, jeździliśmy na sankach.",
        why: "W <i>geschneit</i> i <i>Schlitten</i> <b>sch</b> czyta się [ʃ], czyli «sz»; <i>wenn</i> zaczyna się od <b>w</b> wymawianego jak polskie «w»."
      }
    ]
  },
  "lesson:a2-u01-l3": {
    theme: "Zasady i pozwolenia",
    title: "Musiałem, mogłem, ponieważ ...",
    objectives: [
      "używać musste, konnte, wollte i durfte w Präteritum",
      "podawać powód za pomocą weil i czasownika na końcu",
      "opowiadać o zasadach i zakazach z dzieciństwa"
    ],
    theory: [
      {
        h: "Czasowniki modalne w Präteritum",
        p: "Żeby powiedzieć, co się musiało, chciało albo mogło robić jako dziecko, używa się czasowników modalnych w <strong>Präteritum</strong>: <em>ich musste</em> (musiałem), <em>ich konnte</em> (mogłem, potrafiłem), <em>ich durfte</em> (wolno mi było), <em>ich wollte</em> (chciałem). W Präteritum <em>müssen, können, dürfen</em> tracą umlaut, a <em>wollen</em> i <em>sollen</em> go nie miały. Czasownik modalny występuje z bezokolicznikiem na końcu zdania: <em>Ich musste jeden Tag Hausaufgaben machen.</em>"
      },
      {
        contrast: "Polski ma jeden czasownik, <em>móc</em>, na dwie różne myśli: <em>nie mogłem wyjść</em> może znaczyć, że coś mi to uniemożliwiało (<em>Ich konnte nicht ausgehen</em>), albo że mi na to nie pozwolono (<em>Ich durfte nicht ausgehen</em>). Polski ma wprawdzie też bezosobowe «wolno» (<em>nie wolno mi było</em>), ale w codziennej mowie często wystarcza «mogłem». W niemieckim trzeba wybrać: <em>können</em> to zdolność lub możliwość, <em>dürfen</em> to pozwolenie. Poza tym, tak jak przy <em>sein</em> i <em>haben</em>, mówiony niemiecki woli Präteritum od Perfekt: <em>Ich konnte nicht kommen</em> brzmi naturalniej niż <em>Ich habe nicht kommen können</em>. Polski ma tu jeden zwykły czas przeszły: «nie mogłem przyjść»."
      },
      {
        trap: "Po <b>weil</b> («ponieważ», «bo») odmieniony czasownik idzie na koniec, za bezokolicznik: <em>..., weil ich arbeiten musste</em>, a nie «weil ich musste arbeiten» ani «weil musste ich arbeiten». W polskim szyk po «ponieważ» i «bo» się nie zmienia, i dlatego ten błąd jest tak częsty. Przecinek przed <em>weil</em> jest obowiązkowy."
      },
      {
        tip: "Żeby podać powód bez przesuwania czasownika, można użyć <em>denn</em> (<em>Ich war müde, denn ich musste früh aufstehen</em>), ale tu ćwiczymy <em>weil</em>. Na pytanie <em>Warum?</em> można odpowiedzieć samym zdaniem podrzędnym: <em>Warum warst du traurig? Weil ich nicht ins Kino gehen durfte.</em>"
      }
    ],
    grammar: {
      title: "Czasowniki modalne w Präteritum i weil",
      note: "Czasowniki modalne w Präteritum tracą umlaut (oprócz <b>wollte</b>, które go nie miało). Po <b>weil</b> odmieniony czasownik idzie na koniec.",
      table: {
        head: ["bezokolicznik", "Präteritum (ich)", "znaczenie", "z weil"],
        rows: [
          ["müssen", "musste", "musiałem", "weil ich arbeiten musste"],
          ["können", "konnte", "mogłem, potrafiłem", "weil ich nicht schwimmen konnte"],
          ["dürfen", "durfte", "wolno mi było", "weil ich nicht ins Kino gehen durfte"],
          ["wollen", "wollte", "chciałem", "weil ich spielen wollte"]
        ]
      },
      examples: [
        { tr: "Musiałem codziennie odrabiać lekcje.", note: "ich musste + bezokolicznik na końcu" },
        { tr: "Nie wolno nam było długo oglądać telewizji.", note: "dürfen: wir durften" },
        { tr: "Chciałem mieć psa, ale moi rodzice nie chcieli.", note: "wollen: ich wollte, sie wollten" },
        { tr: "Byłem smutny, bo nie mogłem iść do kina.", note: "weil: czasownik durfte idzie na koniec" },
        { tr: "Nie mogłem przyjść, bo musiałem pracować.", note: "weil ich arbeiten musste" },
        { tr: "Mogliśmy bawić się w ogrodzie, bo pogoda była ładna.", note: "weil ... war" }
      ]
    },
    vocab: [
      "praca domowa",
      "zasada, reguła",
      "telewizor",
      "kieszonkowe",
      "słodycze (liczba mnoga od <i>die Süßigkeit</i>)",
      "telefon komórkowy",
      "urodziny",
      "zwierzę domowe",
      "kara",
      "surowy",
      "dozwolony",
      "zabroniony"
    ],
    exercises: [
      {
        q: "Które zdanie jest poprawne?",
        opts: [
          "Ich konnte nicht kommen, weil musste ich arbeiten.",
          "Ich konnte nicht kommen, weil ich musste arbeiten.",
          "Ich konnte nicht kommen, weil ich arbeiten musste."
        ],
        why: "Po <i>weil</i> odmieniony czasownik (<i>musste</i>) idzie na koniec, za bezokolicznik <i>arbeiten</i>."
      },
      {
        q: "Uzupełnij: «Ich ___ jeden Tag Hausaufgaben machen.» (musiałem, użyj müssen)",
        hint: "müssen, Präteritum, ich",
        why: "<b>Musste</b>: bez umlautu i z końcówką <i>-te</i>; przy <i>ich</i> nie dodaje się nic więcej."
      },
      {
        q: "Uzupełnij: «Wir ___ nicht lange fernsehen.» (nie wolno nam było, użyj dürfen)",
        hint: "dürfen, Präteritum, wir",
        why: "<b>Durften</b>: <i>dürfen</i> traci umlaut, a przy <i>wir</i> końcówka to <i>-en</i>."
      },
      {
        q: "Uzupełnij: «Ich war traurig, ___ ich nicht ins Kino gehen durfte.» (ponieważ, użyj weil)",
        hint: "użyj weil",
        why: "<b>Weil</b> odsyła czasownik na koniec: <i>..., weil ich nicht ins Kino gehen durfte</i>."
      },
      {
        q: "Dopasuj każdą formę do jej znaczenia.",
        pairs: ["musiałem", "mogłem, potrafiłem", "chciałem", "wolno mi było"]
      },
      {
        q: "Ułóż wyrazy w odpowiedniej kolejności.",
        tr: "Nie mogłem przyjść, ponieważ musiałem pracować.",
        why: "W zdaniu głównym <i>konnte</i> stoi na drugim miejscu; w zdaniu podrzędnym <i>weil ich arbeiten musste</i> odmieniony czasownik idzie na koniec."
      },
      {
        q: "Uzupełnij zdanie.",
        tr: "Byłem zmęczony, bo musiałem wcześnie wstać.",
        why: "Czasownik z przedrostkiem rozdzielnym zostaje w całości przy modalnym: <i>früh aufstehen musste</i>, z <i>musste</i> na końcu."
      },
      {
        q: "Przetłumacz: «Nie mogłem się bawić, bo musiałem odrabiać lekcje.»",
        why: "<i>Ich konnte nicht spielen, weil ich Hausaufgaben machen musste</i>. Zaakceptowane jest też <i>durfte</i>, jeśli chodzi o zakaz."
      },
      {
        tr: "Nie wolno mi było długo oglądać telewizji, bo musiałem wcześnie iść spać.",
        why: "W <i>durfte</i> <b>u</b> jest krótkie; w <i>früh</i> <b>ü</b> jest długie. W <i>lange</i> <b>ng</b> czyta się jako jedną spółgłoskę nosową [ŋ], jak polskie «n» w słowie «bank», bez osobnego [g]."
      },
      {
        tr: "Jako dziecko nie wolno mi było jeść słodyczy, bo moi rodzice byli surowi.",
        why: "W <i>Süßigkeiten</i> <b>ü</b> jest długie, a <b>ß</b> to bezdźwięczne <b>s</b>; <i>streng</i> zaczyna się od [ʃtr], czyli «sztr», bo początkowe <b>st</b> czyta się [ʃt]."
      }
    ]
  },
  "lesson:a2-u01-l4": {
    theme: "Wspomnienia",
    title: "Pamiętasz?",
    objectives: [
      "używać zaimków zwrotnych mich, dich, sich, uns, euch",
      "mówić sich erinnern an i sich freuen auf z właściwym przypadkiem",
      "tworzyć Perfekt czasowników zwrotnych z haben"
    ],
    theory: [
      {
        h: "Czasowniki zwrotne: mich, dich, sich, uns, euch",
        p: "Niektóre czasowniki niemieckie wymagają zaimka <b>zwrotnego</b>, choć nie musi on oznaczać czynności wykonywanej na sobie: <em>Ich erinnere mich</em> (przypominam sobie, pamiętam), <em>Ich interessiere mich</em> (interesuję się). Zaimek zmienia się z osobą: <em>mich, dich, sich, uns, euch, sich</em>. W zdaniu głównym z podmiotem na pierwszym miejscu stoi po odmienionym czasowniku: <em>Du erinnerst dich an unsere Schule.</em> W pytaniach czasownik jest pierwszy, a zaimek idzie za podmiotem: <em>Erinnerst du dich an unsere Schule?</em> W Perfekt czasownikiem posiłkowym jest <em>haben</em>, a zaimek stoi zwykle blisko początku Mittelfeldu, po ewentualnym podmiocie wyrażonym zaimkiem: <em>Wir haben uns am Bahnhof getroffen. Gestern haben wir uns getroffen. Gestern habe ich mich mit Anna getroffen.</em> W zdaniu podrzędnym idzie za podmiotem: <em>weil ich mich erinnere</em>. Przy <em>sich erinnern</em> i <em>sich freuen</em> należy uczyć się przyimka i wymaganego przypadka razem z czasownikiem: <em>sich erinnern an</em> + biernik, <em>sich freuen auf</em> + biernik (cieszyć się na coś, co dopiero będzie), <em>sich freuen über</em> + biernik (cieszyć się z czegoś, co jest teraz lub było)."
      },
      {
        contrast: "Polski ma jedno słowo, <em>się</em>, dla wszystkich osób: <em>cieszę się, cieszysz się, cieszymy się</em>. Niemiecki zmienia zaimek wraz z osobą: <em>mich, dich, sich, uns, euch</em>. Czasowniki zwrotne w obu językach też się nie pokrywają. «Pamiętać» jest po polsku niezwrotne i bierze biernik (<em>pamiętam szkołę</em>), a niemieckie <em>sich erinnern</em> jest zwrotne i wymaga przyimka <em>an</em>: <em>Ich erinnere mich an meine Schule</em>. Polskie «obudzić się» jest zwrotne, a niemieckie <em>aufwachen</em> nie; polskie «usiąść» nie jest zwrotne, a niemieckie <em>sich setzen</em> jest. Zwrotne w obu językach są natomiast m.in. «złościć się» i <em>sich ärgern</em>, «interesować się» i <em>sich interessieren</em>. Przypadek też bywa inny: po polsku «interesować się» bierze narzędnik (<em>interesuję się starymi zdjęciami</em>), a po niemiecku <em>sich interessieren für</em> bierze biernik. Uwaga na «spotykać się z» + narzędnik: <em>sich treffen mit</em> + celownik."
      },
      {
        trap: "W 1. i 2. osobie zaimek ma dwie formy: biernik <em>mich, dich</em> i celownik <em>mir, dir</em>. Przy <em>sich erinnern an</em> trzeba <b>biernika</b>: <em>Ich erinnere mich</em>, a nie «Ich erinnere mir». Polskie «przypominam sobie» z celownikiem «sobie» łatwo podpowiada celownik, ale po niemiecku jest <em>mich</em>. Uważaj też na <em>erinnern</em> bez zaimka: <em>Ich erinnere dich an den Termin</em> znaczy «przypominam ci o terminie», czyli co innego."
      },
      {
        tip: "Ucz się czasowników zwrotnych razem z odpowiednimi przyimkami i przypadkami: <em>sich erinnern an</em> + biernik, <em>sich freuen auf/über</em> + biernik, <em>sich interessieren für</em> + biernik, <em>sich ärgern über</em> + biernik, <em>sich treffen mit</em> + celownik."
      }
    ],
    grammar: {
      title: "Zaimek zwrotny",
      note: "Gdy podmiot stoi na początku zdania głównego, zaimek zwrotny stoi po odmienionym czasowniku. Przy szyku przestawnym i podmiocie wyrażonym zaimkiem osobowym stoi po podmiocie: <i>Gestern habe ich mich ...</i>. W zdaniu podrzędnym: <i>weil ich mich erinnere</i>. W 3. osobie (liczby pojedynczej i mnogiej) zaimek to zawsze <b>sich</b>.",
      table: {
        head: ["osoba", "zaimek", "przykład"],
        rows: [
          ["ich", "mich", "Ich erinnere mich an meine Lehrerin."],
          ["du", "dich", "Erinnerst du dich an unsere Schule?"],
          ["er, sie, es", "sich", "Er freut sich auf die Ferien."],
          ["wir", "uns", "Wir haben uns am Bahnhof getroffen."],
          ["ihr", "euch", "Freut ihr euch auf das Klassentreffen?"],
          ["sie, Sie", "sich", "Sie ärgern sich über das Wetter."]
        ]
      },
      examples: [
        { tr: "Pamiętasz naszą szkołę?", note: "sich erinnern an + biernik" },
        { tr: "Dobrze pamiętam moją nauczycielkę.", note: "ich erinnere mich" },
        { tr: "Spotkaliśmy się na dworcu.", note: "Perfekt z haben: haben uns getroffen" },
        { tr: "On cieszy się na wakacje.", note: "sich freuen auf + biernik" },
        { tr: "Ona złości się na pogodę.", note: "sich ärgern über + biernik" },
        { tr: "Interesuję się starymi zdjęciami.", note: "sich interessieren für + biernik" }
      ]
    },
    vocab: [
      "pamiętać kogoś/coś; przypominać sobie kogoś/coś (an + biernik)",
      "cieszyć się (z, na)",
      "złościć się (na, z powodu)",
      "spotykać się (z)",
      "interesować się (czymś)",
      "usiąść",
      "wspomnienie",
      "zdjęcie",
      "album",
      "spotkanie dawnych kolegów z klasy",
      "kolega z klasy",
      "przyjemność, zabawa"
    ],
    exercises: [
      {
        q: "Które zdanie jest poprawne?",
        opts: ["Ich erinnere mir an meine Schule.", "Ich erinnere mich an meine Schule.", "Ich erinnere mich meine Schule."],
        why: "<i>Sich erinnern</i> wymaga biernika <b>mich</b> i przyimka <b>an</b>."
      },
      {
        q: "Uzupełnij: «Erinnerst du ___ an unsere Lehrerin?» (zaimek zwrotny)",
        hint: "du: biernik",
        why: "<b>Dich</b>: zaimek zwrotny 2. osoby liczby pojedynczej w bierniku."
      },
      {
        q: "Uzupełnij: «Wir freuen ___ auf die Ferien.» (zaimek zwrotny)",
        hint: "wir: biernik",
        why: "<b>Uns</b>: dla <i>wir</i> zaimek zwrotny to <i>uns</i>."
      },
      {
        q: "Dopasuj każdy czasownik do jego znaczenia.",
        pairs: ["pamiętać", "cieszyć się", "złościć się", "interesować się"]
      },
      {
        q: "Ułóż wyrazy w odpowiedniej kolejności.",
        tr: "Dobrze pamiętam moją nauczycielkę.",
        why: "Zaimek zwrotny stoi za odmienionym czasownikiem (<i>erinnere mich</i>); <i>an</i> wprowadza to, co się pamięta."
      },
      {
        q: "Uzupełnij zdanie.",
        tr: "Wczoraj spotkałem się z Anną i przypomnieliśmy sobie szkołę.",
        why: "W Perfekt czasownikiem posiłkowym jest <i>haben</i>: <i>habe mich ... getroffen</i> i <i>haben uns ... erinnert</i>."
      },
      {
        q: "Przetłumacz: «Dobrze pamiętam moją szkołę.»",
        why: "<i>Ich erinnere mich gut an meine Schule</i>: <i>an</i> + biernik, a <i>gut</i> stoi po zaimku."
      },
      {
        q: "Dawny kolega cię poznaje.",
        setting: "Dawny kolega z klasy wita cię na ulicy.",
        lines: [
          { tr: "Cześć, Leno! Pamiętasz mnie?" },
          { tr: "Odpowiedz twierdząco i powiedz, że ty też go pamiętasz.", answerTr: "Tak, pamiętam cię!" },
          { tr: "Byliśmy razem w szkole podstawowej." },
          { tr: "Odpowiedz, że często spotykaliście się po szkole.", answerTr: "Tak, i często spotykaliśmy się po szkole." },
          { tr: "Cieszysz się na to spotkanie dawnych kolegów z klasy?" },
          { tr: "Odpowiedz, że bardzo się cieszysz.", answerTr: "Tak, bardzo się cieszę!" }
        ]
      },
      {
        tr: "Często spotykaliśmy się po szkole i z przyjemnością wspominam tamten czas.",
        why: "W <i>ich</i> <b>ch</b> po samogłosce przedniej wymawia się [ç], czyli cichy, miękki szum, bez polskiego odpowiednika; to nie jest polskie «ch» z «ach». W <i>erinnere</i> akcent pada na drugą sylabę, a <i>er-</i> jest nieakcentowane."
      },
      {
        tr: "Dobrze pamiętam moją szkołę podstawową i cieszę się na spotkanie z dawnymi kolegami z klasy.",
        why: "W <i>Grundschule</i> <b>sch</b> czyta się [ʃ], czyli «sz», a <b>d</b> w <i>Grund</i> wymawia się jak <b>t</b>; w <i>Klassentreffen</i> <b>ss</b> to bezdźwięczne <b>s</b>."
      }
    ]
  },
  "lesson:a2-u01-test": {
    theme: "Sprawdzian",
    title: "Sprawdzian z jednostki 1",
    objectives: ["sprawdzić Präteritum, als i wenn, weil i czasowniki modalne w przeszłości"],
    theory: [
      {
        p: "Dziesięć pytań z całej jednostki. Zaliczasz przy 70%. Nie zaglądaj do lekcji w trakcie odpowiadania: jeśli czegoś nie pamiętasz, lepiej wrócić do powtórki."
      }
    ],
    exercises: [
      {
        tr: "Präteritum czasownika sein, wszystkie osoby.",
        why: "<i>War, warst, war, waren, wart, waren</i>."
      },
      {
        tr: "Präteritum czasownika müssen, wszystkie osoby.",
        why: "<i>Musste, musstest, musste, mussten, musstet, mussten</i>: bez umlautu."
      },
      {
        q: "Uzupełnij: «Gestern ___ wir keine Zeit.» (nie mieliśmy, użyj haben)",
        hint: "haben, Präteritum, wir",
        why: "<b>Hatten</b>: temat <i>hatt-</i> i końcówka <i>-en</i>."
      },
      {
        q: "Uzupełnij: «Meine Eltern haben viel gearbeitet, ___ ich klein war.» (kiedy, zamknięty okres)",
        hint: "pojedynczy fakt z przeszłości",
        why: "Zamknięty okres z przeszłości: <b>als</b>."
      },
      {
        q: "Uzupełnij: «Ich konnte nicht kommen, ___ ich krank war.» (ponieważ, użyj weil)",
        hint: "użyj weil",
        why: "<b>Weil</b> wprowadza powód i odsyła czasownik (<i>war</i>) na koniec."
      },
      {
        q: "Które zdanie jest poprawne?",
        opts: [
          "Ich bleibe zu Hause, weil ich müde bin.",
          "Ich bleibe zu Hause, weil ich bin müde.",
          "Ich bleibe zu Hause, weil bin ich müde."
        ],
        why: "Po <i>weil</i> odmieniony czasownik idzie na koniec: <i>weil ich müde bin</i>."
      },
      {
        q: "Uzupełnij zdanie.",
        tr: "Kiedy byłem mały, miałem psa.",
        why: "<i>War</i> na końcu zdania podrzędnego; potem zdanie główne zaczyna się od czasownika: <i>hatte ich</i>."
      },
      {
        q: "Uzupełnij zdanie.",
        tr: "Nie mogłem się bawić, bo musiałem odrabiać lekcje.",
        why: "<i>Konnte</i> i <i>durfte</i> są oba możliwe, zależnie od tego, czy chodzi o niemożność, czy o zakaz. W zdaniu podrzędnym <i>machen</i> stoi przed modalnym <i>musste</i>, które zamyka zdanie."
      },
      {
        tr: "Kiedy byłem mały, nie wolno mi było długo oglądać telewizji, bo moi rodzice byli surowi.",
        why: "W <i>durfte</i> <b>u</b> jest krótkie; w <i>streng</i> <b>str</b> zaczyna się od [ʃtr]; <b>ng</b> to jedna spółgłoska nosowa [ŋ]."
      },
      {
        tr: "Kiedy byłem dzieckiem, miałem psa i mogłem się z nim bawić codziennie.",
        why: "W <i>Hund</i> końcowe <b>d</b> wymawia się jak <b>t</b>; w <i>jeden Tag</i> końcowe <b>g</b> to bezdźwięczne <b>k</b>, podobnie jak w polskim «Bóg»."
      }
    ]
  },
  "unit:a2-u02": {
    title: "W podróży",
    grammarNote: "wohin? z nach, zu i in + biernik · czas teraźniejszy ze słowem o czasie i Futur I · Perfekt i rejestr w hotelu · wenn + Perfekt dla przyszłej czynności już zakończonej"
  },
  "lesson:a2-u02-l1": {
    theme: "Na dworcu",
    title: "Na dworcu: nach Wien, in die Schweiz",
    objectives: [
      "powiedzieć, dokąd jedziesz, za pomocą nach, in + biernik i zu",
      "odróżnić wohin? (cel) od wo? (położenie)",
      "kupić bilet i zapytać o informacje na dworcu"
    ],
    theory: [
      {
        h: "Wohin? nach, in albo zu",
        p: "Na pytanie <b>wohin?</b> (dokąd?) niemiecki wybiera przyimek według celu. Przy <b>miastach i krajach bez rodzajnika</b> używa się <strong>nach</strong>: <em>Ich fahre nach Wien. Wir fliegen nach Italien.</em> Przy <b>krajach z rodzajnikiem</b> używa się <strong>in</strong> + <b>biernik</b>: <em>Wir fahren in die Schweiz.</em> Do <b>osoby</b> i zwykle do <b>budynku lub konkretnego miejsca</b> używa się <strong>zu</strong> + celownik: <em>Ich fahre zu meiner Tante. Wir gehen zum Bahnhof.</em> Z <em>zu</em> + rodzajnik występują zrosty: <em>zum</em> (zu dem) i <em>zur</em> (zu der)."
      },
      {
        contrast: "Po polsku cel ruchu wyraża zwykle jeden przyimek, <em>do</em> z dopełniaczem: <em>jadę do Wiednia, do Szwajcarii, do Włoch, do cioci</em>. Niemiecki ma trzy możliwości i wybiera między nimi według celu: <em>nach</em>, <em>in die</em> albo <em>zu</em>. Polszczyzna nie ma rodzajników, więc to, czy kraj ma rodzajnik, trzeba zapamiętać razem z nazwą: <em>Italien</em>, <em>Deutschland</em>, <em>Österreich</em> go nie mają i biorą <em>nach</em>, tak jak miasta, a <em>die Schweiz</em>, <em>die Türkei</em>, <em>die USA</em> go mają i biorą <em>in die</em>. Druga różnica: po polsku kierunek i położenie rozróżnia przyimek (<em>do Szwajcarii</em>, <em>w Szwajcarii</em>), a w niemieckim przyimek <em>in</em> zostaje ten sam i zmienia się przypadek: <em>in die Schweiz</em> (biernik) mówi, dokąd jedziesz, a <em>in der Schweiz</em> (celownik) mówi, gdzie jesteś. Podobnie z osobami: <em>do cioci</em> to <em>zu meiner Tante</em>, a <em>u cioci</em> to <em>bei meiner Tante</em>."
      },
      {
        trap: "O przypadku decyduje to, co wyraża zdanie. Przy <b>wohin?</b> (ruch do miejsca) <em>in</em> bierze <b>biernik</b>: <em>Wir fahren in die Schweiz</em>. Przy <b>wo?</b> (położenie, gdzie się jest) bierze <b>celownik</b>: <em>Meine Tante wohnt in der Schweiz</em>. Dwa prawie identyczne zdania, dwa różne przypadki, a jedyną wskazówką jest <em>die</em> albo <em>der</em>. Uważaj też na <em>nach die Schweiz</em>: taka forma nie istnieje, bo <em>nach</em> nie łączy się z krajami, które mają rodzajnik."
      },
      {
        tip: "Na dworcu przydadzą się gotowe zdania: <em>Eine Fahrkarte nach Wien, bitte.</em> <em>Einfach oder hin und zurück?</em> (w jedną stronę czy tam i z powrotem?) <em>Von welchem Gleis fährt der Zug ab?</em> Uczy się <em>die Schweiz</em> razem z rodzajnikiem, jako jednej całości."
      }
    ],
    grammar: {
      title: "Wohin? nach, in + biernik, zu",
      note: "Przyimek zależy od celu. <b>nach</b> stoi bez rodzajnika, <b>zu</b> bierze celownik (<i>zum</i>, <i>zur</i>), <b>in</b> przy wohin? bierze biernik.",
      table: {
        head: ["cel", "przyimek", "przykład"],
        rows: [
          ["miasta, kraje bez rodzajnika", "nach", "nach Wien, nach Italien"],
          ["kraje z rodzajnikiem", "in + biernik", "in die Schweiz, in die Türkei"],
          ["osoby", "zu + celownik", "zu meiner Tante, zum Arzt"],
          ["budynki, konkretne miejsca", "zu + celownik", "zum Bahnhof, zur Post"],
          ["położenie (wo?)", "in + celownik", "in der Schweiz"]
        ]
      },
      examples: [
        { tr: "Jadę do Wiednia.", note: "nach + miasto, bez rodzajnika" },
        { tr: "Lecimy do Włoch.", note: "nach + kraj bez rodzajnika" },
        { tr: "Latem jadą do Szwajcarii.", note: "wohin? in + biernik: in die Schweiz" },
        { tr: "On jedzie do swojej cioci.", note: "zu + celownik: zu seiner Tante" },
        { tr: "Idziemy na dworzec.", note: "zu + celownik: zum (zu dem) Bahnhof" },
        { tr: "Moja ciocia mieszka w Szwajcarii.", note: "wo? in + celownik: in der Schweiz" }
      ]
    },
    vocab: [
      "dworzec",
      "pociąg",
      "peron, tor",
      "bilet kolejowy",
      "rozkład jazdy",
      "odjazd",
      "przyjazd",
      "Szwajcaria",
      "kraj, państwo",
      "informacja (okienko informacji)",
      "w jedną stronę",
      "tam i z powrotem"
    ],
    exercises: [
      {
        q: "Uzupełnij: «Wohin fährst du? Ich fahre ___ Wien.»",
        opts: ["nach", "in", "zu"],
        why: "Przy miastach bez rodzajnika używa się <b>nach</b>. <i>In Wien</i> mówi, gdzie się jest, a nie dokąd się jedzie."
      },
      {
        q: "Mówisz, że jedziecie do Szwajcarii. Które zdanie jest poprawne?",
        opts: ["Wir fahren nach die Schweiz.", "Wir fahren in die Schweiz.", "Wir fahren in der Schweiz."],
        why: "<i>Die Schweiz</i> ma rodzajnik: potrzebne jest <b>in</b> + biernik (<i>in die Schweiz</i>). <i>In der Schweiz</i> to celownik i mówi, gdzie się jest."
      },
      {
        q: "Uzupełnij: «Morgen fliege ich ___ Italien.» (do kraju bez rodzajnika)",
        hint: "nach, in czy zu?",
        why: "<i>Italien</i> nie ma rodzajnika, więc <b>nach</b>, tak jak przy miastach."
      },
      {
        q: "Uzupełnij: «Ich fahre ___ meiner Tante.» (do osoby)",
        hint: "przyimek + celownik",
        why: "Do osoby używa się <b>zu</b> + celownik: <i>zu meiner Tante</i>."
      },
      {
        q: "Uzupełnij zdanie.",
        tr: "Jadę do Wiednia. Potem jedziemy do Szwajcarii, a wieczorem idę do mojego przyjaciela.",
        why: "Trzy cele, trzy przyimki: <i>nach Wien</i>, <i>in die Schweiz</i> (biernik, kraj z rodzajnikiem), <i>zu meinem Freund</i> (osoba, celownik)."
      },
      {
        q: "Dopasuj każdy cel do jego tłumaczenia.",
        pairs: ["do Wiednia", "do Szwajcarii", "do mojej cioci", "na dworzec"]
      },
      {
        q: "Przetłumacz: «Jutro jedziemy do Szwajcarii.»",
        why: "<i>Morgen fahren wir in die Schweiz</i>: <i>fahren</i> przy środku transportu; <i>reisen</i> to inna możliwość. Szyk może się zmienić (<i>Wir fahren morgen ...</i>), odmieniony czasownik zostaje na drugim miejscu."
      },
      {
        q: "Przy okienku na dworcu.",
        setting: "Kupujesz bilet do Wiednia.",
        lines: [
          { tr: "Dzień dobry. Dokąd Pan/Pani jedzie?" },
          { tr: "Odpowiedz, że jedziesz do Wiednia.", answerTr: "Jadę do Wiednia." },
          { tr: "W jedną stronę czy tam i z powrotem?" },
          { tr: "Odpowiedz: tam i z powrotem, poproszę.", answerTr: "Tam i z powrotem, poproszę." },
          { tr: "A potem jedzie Pan/Pani dalej?" },
          { tr: "Odpowiedz, że potem jedziesz do swojej cioci.", answerTr: "Tak, potem jadę do mojej cioci." }
        ]
      },
      {
        tr: "Dzień dobry, poproszę bilet do Wiednia, tam i z powrotem.",
        why: "W <i>Fahrkarte</i> pierwsze <b>a</b> jest długie; w <i>Wien</i> <b>W</b> czyta się [v], a <b>ie</b> to długie <b>i</b>; <i>zurück</i> ma krótkie <b>ü</b>: wargi jak do <b>u</b>, język jak do <b>i</b>."
      },
      {
        tr: "Latem jadę do Szwajcarii, a potem do mojej cioci do Wiednia.",
        why: "W <i>Schweiz</i> <b>sch</b> czyta się [ʃ], czyli «sz», <b>w</b> to [v], <b>ei</b> brzmi [aɪ] («aj»), a końcowe <b>z</b> to [ts], czyli «c». W <i>Sommer</i> początkowe <b>S</b> przed samogłoską jest zwykle dźwięczne [z], inaczej niż polskie «s»."
      }
    ]
  },
  "lesson:a2-u02-l2": {
    theme: "Plany podróży",
    title: "Jutro jadę, pojadę",
    objectives: [
      "mówić o przyszłości za pomocą czasu teraźniejszego i słowa o czasie",
      "tworzyć Futur I z werden + bezokolicznik na końcu",
      "rozpoznać, kiedy Futur I się przydaje (obietnica, decyzja, prognoza)"
    ],
    theory: [
      {
        h: "Przyszłość: czas teraźniejszy ze słowem o czasie albo Futur I",
        p: "Mówiąc o przyszłości, niemiecki najczęściej używa <b>czasu teraźniejszego</b> razem ze słowem o czasie: <em>Morgen fahre ich nach Wien. Nächste Woche fliegen wir nach Spanien.</em> Istnieje też <strong>Futur I</strong>: <em>werden</em> odmienione na drugim miejscu i <b>bezokolicznik na końcu</b> zdania: <em>Ich werde dich morgen anrufen. Wir werden im Sommer in die Schweiz fahren.</em> Futur I stosuje się przy obietnicy, decyzji, prognozie (<em>Es wird heute Abend regnen</em>) albo wtedy, gdy brak słowa o czasie."
      },
      {
        contrast: "Polski buduje przyszłość inaczej, w zależności od aspektu: czasownik dokonany w formie teraźniejszej oznacza przyszłość (<em>pojadę, zadzwonię</em>), a niedokonany tworzy przyszłość złożoną z <em>będę</em> + bezokolicznik albo formą na <em>-ł</em> (<em>będę jechać</em>, <em>będę jechał</em>). Niemieckie Futur I przypomina tę drugą budowę: <em>werden</em> + bezokolicznik. Niemiecki nie ma jednak aspektu, więc <em>Ich werde fahren</em> może znaczyć zarówno «będę jechać», jak i «pojadę». Tak jak po polsku, często wystarcza czas teraźniejszy ze słowem o czasie: <em>Morgen fahre ich nach Wien</em> to «Jutro jadę do Wiednia». Ta forma jest zwykła, a Futur I, choć poprawny, występuje rzadziej: <em>Morgen werde ich nach Wien fahren</em> można powiedzieć, ale <em>Morgen fahre ich nach Wien</em> jest bardziej codzienne. W Futur I czasownik główny się nie odmienia: stoi w bezokoliczniku na końcu, jak w <em>Ich werde fahren</em>."
      },
      {
        trap: "W Futur I czasownik główny zostaje w bezokoliczniku: <em>Ich werde morgen nach Wien fahren</em>, a nie «Ich werde fahre». Przy czasowniku rozdzielnym bezokolicznik pozostaje w jednym kawałku: <em>Ich werde dich anrufen</em>. Uwaga: <em>werden</em> jest też samodzielnym czasownikiem i znaczy «stawać się, zostawać»: <em>Er wird Arzt</em> (zostaje lekarzem), <em>Es wird kalt</em> (robi się zimno). Jeśli na końcu nie ma bezokolicznika, to nie jest przyszłość."
      },
      {
        tip: "Najpierw szukaj słowa o czasie: <em>morgen, nächste Woche, im Sommer, bald, am Wochenende</em>. Jeśli jest, wystarczy czas teraźniejszy. Jeśli chcesz nadać zdaniu ton obietnicy lub decyzji (<em>Ich werde es nicht vergessen</em>), użyj Futur I. W obu wypadkach na pierwszym miejscu może stać czas: <em>Morgen fahre ich ...</em>, a czasownik jest na drugim."
      }
    ],
    grammar: {
      title: "Futur I z werden",
      note: "<b>werden</b> odmienia się na drugim miejscu, czasownik główny idzie <b>w bezokoliczniku na koniec</b>. Ze słowem o czasie zwykłą formą jest czas teraźniejszy.",
      table: {
        head: ["osoba", "werden", "przykład"],
        rows: [
          ["ich", "werde", "Ich werde fahren."],
          ["du", "wirst", "Du wirst fahren."],
          ["er, sie, es", "wird", "Es wird regnen."],
          ["wir", "werden", "Wir werden fliegen."],
          ["ihr", "werdet", "Ihr werdet ankommen."],
          ["sie, Sie", "werden", "Sie werden bleiben."]
        ]
      },
      examples: [
        { tr: "Jutro jadę do Wiednia.", note: "czas teraźniejszy + morgen: forma zwykła" },
        { tr: "W przyszłym tygodniu lecimy do Hiszpanii.", note: "czas teraźniejszy + nächste Woche" },
        { tr: "Zadzwonię do ciebie jutro.", note: "Futur I: czasownik rozdzielny w całości, bezokolicznik na końcu" },
        { tr: "Dziś wieczorem będzie padać.", note: "Futur I jako prognoza" },
        { tr: "Latem pojedziemy do Szwajcarii.", note: "werden na drugim miejscu, bezokolicznik na końcu" },
        { tr: "Wyślę ci zdjęcie.", note: "Futur I: obietnica" }
      ]
    },
    vocab: [
      "podróż",
      "urlop, wakacje",
      "tydzień",
      "weekend",
      "lot",
      "lotnisko",
      "walizka",
      "bilet (na lot, na wydarzenie)",
      "jutro",
      "w przyszłym tygodniu",
      "wkrótce, niedługo",
      "latem"
    ],
    exercises: [
      {
        tr: "Czas teraźniejszy czasownika werden, wszystkie osoby.",
        why: "<i>Werde, wirst, wird, werden, werdet, werden</i>: <i>werden</i> jest nieregularne (<i>e</i> zmienia się w <i>i</i> przy <i>du</i> i <i>er, sie, es</i>) i jest czasownikiem posiłkowym Futur I."
      },
      {
        tr: "Futur I czasownika fahren, wszystkie osoby.",
        why: "<i>Ich werde fahren, du wirst fahren, er wird fahren, wir werden fahren, ihr werdet fahren, sie werden fahren</i>: zmienia się <i>werden</i>, bezokolicznik pozostaje taki sam."
      },
      {
        tr: "Futur I czasownika fliegen, wszystkie osoby.",
        why: "W Futur I bezokolicznik się nie odmienia: <i>ich werde fliegen, du wirst fliegen ...</i>. W zwykłym zdaniu stoi na końcu."
      },
      {
        q: "Które zdanie poprawnie używa Futur I?",
        opts: [
          "Ich werde morgen nach Wien fahren.",
          "Ich werde morgen nach Wien fahre.",
          "Ich werde fahren morgen nach Wien."
        ],
        why: "<b>werden</b> na drugim miejscu i <b>bezokolicznik na końcu</b>. Czasownik główny się nie odmienia i nie stoi na drugim miejscu: zostaje w bezokoliczniku, na końcu."
      },
      {
        q: "Które zdanie jest poprawne? (Jutro jadę do Berlina.)",
        opts: [
          "Morgen ich fahre nach Berlin.",
          "Morgen fahre ich nach Berlin.",
          "Morgen werde fahre ich nach Berlin."
        ],
        why: "Gdy <i>morgen</i> stoi na pierwszym miejscu, odmieniony czasownik zostaje na drugim (<i>fahre</i>), a podmiot idzie za nim: <i>Morgen fahre ich ...</i>."
      },
      {
        q: "Uzupełnij: «Wir ___ im Sommer nach Spanien fliegen.» (werden, wir)",
        hint: "werden, wir",
        why: "<b>Werden</b>: w pierwszej osobie liczby mnogiej forma jest taka sama jak bezokolicznik, a <i>fliegen</i> zostaje w bezokoliczniku, na końcu."
      },
      {
        q: "Uzupełnij: «Nächste Woche ___ ich nach Hamburg.» (czas teraźniejszy od fahren)",
        hint: "fahren, czas teraźniejszy, ich",
        why: "<b>Fahre</b>: z <i>nächste Woche</i> wystarcza czas teraźniejszy. <i>Nächste Woche</i> stoi na pierwszym miejscu, czasownik na drugim."
      },
      {
        q: "Uzupełnij zdanie (na «wysłać» pasują schicken i senden).",
        tr: "Jutro wyślę ci zdjęcie.",
        why: "<i>Morgen werde ich dir ein Foto schicken</i>: po <i>morgen</i> odmieniony czasownik (<i>werde</i>) stoi na drugim miejscu, a podmiot idzie za nim; bezokolicznik trafia na koniec. <i>Senden</i> też pasuje."
      },
      {
        tr: "W przyszłym tygodniu jadę do Wiednia pociągiem, a latem polecimy do Szwajcarii samolotem.",
        why: "W <i>Nächste</i> końcowe <b>st</b> zostaje [st], a nie [ʃt]; w <i>Woche</i> <b>ch</b> po <b>o</b> to [x], jak w polskim «chata». W <i>werden</i> <b>w</b> czyta się [v]."
      },
      {
        tr: "Jutro jadę do Hamburga, a w przyszłym tygodniu odwiedzę moją przyjaciółkę.",
        why: "W <i>Hamburg</i> końcowe <b>g</b> brzmi zwykle jak bezdźwięczne <b>k</b> ([k]), podobnie jak w polskim «Bóg»; w <i>besuchen</i> <b>ch</b> po <b>u</b> to [x], a akcent pada na drugą sylabę, bo <i>be-</i> jest nieakcentowane."
      }
    ]
  },
  "lesson:a2-u02-l3": {
    theme: "W hotelu",
    title: "Zarezerwowałem pokój",
    objectives: [
      "powiedzieć, że zarezerwowałeś pokój, za pomocą Perfekt",
      "tworzyć imiesłów od reservieren i buchen",
      "wybierać między Sie a du w hotelu i używać grzecznościowych formuł"
    ],
    theory: [
      {
        h: "Perfekt: rezerwować i przyjeżdżać",
        p: "Żeby powiedzieć, że już zarezerwowałeś, używa się <strong>Perfekt</strong>: czasownik posiłkowy na drugim miejscu i <b>imiesłów II</b> na końcu. <em>Ich habe ein Zimmer reserviert. Wir haben ein Doppelzimmer gebucht.</em> Czasowniki na <em>-ieren</em> nie dostają <em>ge-</em>: <em>reservieren → reserviert</em>. <em>Buchen</em> jest regularne: <em>gebucht</em>. Zwykle czasowniki nieprzechodnie oznaczające ruch lub zmianę stanu biorą <em>sein</em>, a przechodnie i zwrotne biorą <em>haben</em>. Tutaj przydadzą ci się <em>ankommen</em> i <em>abfahren</em>: <em>Wir sind gestern Abend angekommen</em> (imiesłów <em>angekommen</em>, z <em>ge-</em> w środku)."
      },
      {
        contrast: "Polski czas przeszły to jedna forma, która zmienia się według <b>rodzaju</b>: <em>zarezerwowałem / zarezerwowałam</em>, <em>przyjechałem / przyjechałam</em>. Niemieckie Perfekt składa się z dwóch części (<em>haben</em> albo <em>sein</em> + imiesłów) i nie zna rodzaju: <em>ich bin angekommen</em> to zarówno «przyjechałem», jak i «przyjechałam», a imiesłów <em>angekommen</em> się nie zmienia. Polski ma też aspekt (<em>rezerwować</em> / <em>zarezerwować</em>), a niemieckie <em>reservieren</em> i <em>buchen</em> aspektu nie mają. Różni się również forma grzecznościowa. Po polsku mówimy <em>Pan</em> albo <em>Pani</em> (czasownik w 3. osobie liczby pojedynczej: <em>Czy Pan ma rezerwację?</em>) lub <em>Państwo</em> (3. osoba liczby mnogiej: <em>Czy Państwo mają rezerwację?</em>). W niemieckim <em>Sie</em> to jedna forma, która zawsze łączy się z czasownikiem jak w 3. osobie liczby <b>mnogiej</b>: <em>Haben Sie ein Zimmer?</em>, bez względu na to, czy mówisz do jednej osoby, czy do kilku."
      },
      {
        trap: "Nie mów «Ich habe ein Zimmer reservieren» (bezokolicznik zamiast imiesłowu) i nie zapominaj o właściwym czasowniku posiłkowym: <em>Wir sind angekommen</em>, a nie «Wir haben angekommen». Co do rejestru: w recepcji zwykle używa się <em>Sie</em>, a <em>Könnten Sie mir bitte ...?</em> jest grzeczniejsze niż <em>Können Sie ...?</em>. Wśród znajomych albo w schronisku młodzieżowym często mówi się na <em>du</em>, ale w razie wątpliwości wybierz <em>Sie</em>."
      },
      {
        tip: "Trzy zdania, które warto mieć pod ręką w hotelu: <em>Ich habe ein Zimmer reserviert.</em> <em>Haben Sie ein Zimmer für zwei Nächte frei?</em> <em>Könnten Sie mir bitte den Schlüssel geben?</em> Imiesłów czasowników na <em>-ieren</em> kończy się na <em>-iert</em> i nie dostaje <em>ge-</em>."
      }
    ],
    grammar: {
      title: "Perfekt: reservieren, buchen, ankommen",
      note: "Czasownik posiłkowy na drugim miejscu, imiesłów II na końcu. <b>haben</b> z prawie wszystkimi czasownikami, <b>sein</b> zwykle z nieprzechodnimi czasownikami ruchu lub zmiany stanu (tu ankommen, abfahren), a nie z przechodnimi i zwrotnymi. Czasowniki na <b>-ieren</b> nie mają <i>ge-</i>.",
      table: {
        head: ["bezokolicznik", "imiesłów II", "przykład"],
        rows: [
          ["reservieren", "reserviert", "Ich habe ein Zimmer reserviert."],
          ["buchen", "gebucht", "Wir haben ein Zimmer gebucht."],
          ["ankommen", "angekommen", "Wir sind gestern angekommen."],
          ["abfahren", "abgefahren", "Der Zug ist abgefahren."]
        ]
      },
      examples: [
        { tr: "Zarezerwowałem pokój.", note: "-ieren: reserviert, bez ge-" },
        { tr: "Zarezerwowaliśmy pokój dwuosobowy na dwie noce.", note: "haben + gebucht na końcu" },
        { tr: "Wczoraj wieczorem przyjechaliśmy.", note: "ankommen bierze sein" },
        { tr: "Czy ma Pan/Pani rezerwację?", note: "forma grzecznościowa z Sie (jak 3. osoba liczby mnogiej)" },
        { tr: "Czy mógłby mi Pan/mogłaby mi Pani pomóc, proszę?", note: "Könnten Sie: grzeczna prośba" },
        { tr: "Czy już zarezerwowałeś hotel?", note: "z du: Hast du ...?" }
      ]
    },
    vocab: [
      "hotel",
      "pokój",
      "pokój dwuosobowy",
      "rezerwacja",
      "noc",
      "klucz",
      "śniadanie",
      "recepcja",
      "gość",
      "bagaż",
      "zarezerwować (miejsce)",
      "zarezerwować (pokój, podróż)"
    ],
    exercises: [
      {
        q: "Uzupełnij: «Ich habe ein Zimmer ___.» (imiesłów od reservieren)",
        opts: ["gereserviert", "reserviert", "reservieren"],
        why: "Czasowniki na <i>-ieren</i> nie dostają <i>ge-</i>: <b>reserviert</b>. Bezokolicznik (<i>reservieren</i>) nie zastępuje imiesłowu."
      },
      {
        q: "Uzupełnij: «Wir haben ein Doppelzimmer ___.» (imiesłów od buchen)",
        hint: "buchen jest regularne",
        why: "<b>Gebucht</b>: <i>ge-</i> + temat + <i>-t</i>."
      },
      {
        q: "Uzupełnij: «Wir ___ gestern Abend im Hotel angekommen.» (haben czy sein?)",
        hint: "ankommen to czasownik ruchu",
        why: "<b>Sind</b>: <i>ankommen</i> oznacza zmianę miejsca i w Perfekt bierze <i>sein</i>."
      },
      {
        q: "Uzupełnij: «Guten Abend, ___ Sie ein Zimmer frei?» (czas teraźniejszy od haben, zwracając się per Pan/Pani)",
        hint: "haben, czas teraźniejszy, Sie",
        why: "<b>Haben</b>: grzecznościowe <i>Sie</i> odmienia się jak 3. osoba liczby mnogiej."
      },
      {
        q: "Uzupełnij zdanie (na pokój pasują reservieren i buchen).",
        tr: "Zarezerwowałem pokój. Wczoraj wieczorem przyjechaliśmy.",
        why: "<i>Ich habe ein Zimmer reserviert</i> (także <i>gebucht</i>) i <i>Wir sind gestern Abend angekommen</i>. Dwa zdania mają dwa różne czasowniki posiłkowe: <i>haben</i> i <i>sein</i>."
      },
      {
        q: "Dopasuj każde słowo do jego znaczenia.",
        pairs: ["pokój dwuosobowy", "rezerwacja", "klucz", "śniadanie"]
      },
      {
        q: "Przetłumacz: «Zarezerwowaliśmy pokój dwuosobowy na dwie noce.»",
        why: "<i>Wir haben ein Doppelzimmer für zwei Nächte reserviert</i>. Pasuje też <i>gebucht</i>; kolejność <i>für zwei Nächte</i> i <i>ein Doppelzimmer</i> może się zmienić, imiesłów zostaje na końcu."
      },
      {
        q: "W recepcji.",
        setting: "Przyjeżdżasz do hotelu i rozmawiasz z recepcjonistą.",
        lines: [
          { tr: "Dobry wieczór. Czy ma Pan/Pani rezerwację?" },
          { tr: "Odpowiedz, że zarezerwowałeś pokój.", answerTr: "Tak, zarezerwowałem pokój." },
          { tr: "Czy jest Pan/Pani w podróży od dawna?" },
          { tr: "Odpowiedz, że wyjechaliście o piątej.", answerTr: "Tak, wyjechaliśmy o piątej." },
          { tr: "Śniadanie jest od siódmej do dziesiątej. Czy ma Pan/Pani jeszcze jakieś pytania?" },
          { tr: "Poproś grzecznie o klucz, zwracając się per Pan/Pani.", answerTr: "Tak, czy mógłby mi Pan podać klucz, proszę?" }
        ]
      },
      {
        tr: "Dobry wieczór, zarezerwowałem pokój dwuosobowy na dwie noce.",
        why: "W <i>Doppelzimmer</i> <b>z</b> to [ts], czyli «c»; <i>Nächte</i> ma <b>ch</b> po <b>ä</b>, czyli [ç], miękki szmer zbliżony do polskiego <b>ch</b> w «chiński». W <i>Abend</i> <b>b</b> jest dźwięczne, bo nie stoi na końcu sylaby."
      },
      {
        tr: "Zarezerwowaliśmy pokój i wczoraj wieczorem przyjechaliśmy do hotelu.",
        why: "W <i>angekommen</i> <b>n</b> i <b>g</b> należą do różnych cząstek (<i>an-ge-</i>) i wymawia się je osobno [nɡ], a nie jako jedną spółgłoskę nosową [ŋ], jak w polskim «angielski»; w <i>gebucht</i> <b>ch</b> po <b>u</b> to [x]."
      }
    ]
  },
  "lesson:a2-u02-l4": {
    theme: "Po przyjeździe",
    title: "Kiedy dojadę, zadzwonię",
    objectives: [
      "używać wenn + Perfekt dla przyszłej czynności już zakończonej",
      "odróżniać wenn (teraźniejszość, przyszłość, powtarzalność) od als (jednorazowy fakt z przeszłości)",
      "łączyć wenn z czasem teraźniejszym albo z Futur I w zdaniu głównym"
    ],
    theory: [
      {
        h: "Wenn + Perfekt: kiedy już dojadę",
        p: "<strong>Wenn</strong> wprowadza fakt teraźniejszy lub przyszły. Gdy czynność ze zdania podrzędnego będzie <b>już zakończona</b> przed czynnością zdania głównego, w zdaniu podrzędnym stosuje się <b>Perfekt</b>: <em>Wenn ich angekommen bin, rufe ich dich an</em> (kiedy dojadę, zadzwonię do ciebie). Odmieniony czasownik (<em>bin</em>) idzie <b>na koniec</b>, a zdanie główne zaczyna się od czasownika: <em>rufe ich</em>. W zdaniu głównym możesz użyć czasu teraźniejszego (<em>rufe ich ... an</em>) albo Futur I (<em>werde ich ... anrufen</em>)."
      },
      {
        contrast: "Polski ma jedno słowo, <em>kiedy</em> (także <em>gdy</em>), tam, gdzie niemiecki ma trzy: <em>wenn</em> (przyszłość, teraźniejszość, powtarzalność), <em>als</em> (jednorazowy fakt z przeszłości) i <em>wann</em> (słowo pytające: <em>Wann kommst du an?</em> to «Kiedy przyjeżdżasz?»). To, że czynność będzie już zakończona, polski oddaje aspektem dokonanym: <em>Kiedy dojadę, zadzwonię</em> (<em>dojadę</em> to forma dokonana). Niemiecki aspektu nie ma i robi to czasem: <em>Wenn ich angekommen bin, rufe ich dich an</em> (Perfekt w zdaniu podrzędnym) albo, gdy nie trzeba tego podkreślać, czasem teraźniejszym: <em>Wenn ich ankomme, rufe ich dich an.</em> Niemiecki zna też Futur II (<em>ich werde angekommen sein</em>), ale w zdaniach czasowych o przyszłości nie jest potrzebny. Dla jednorazowego zdarzenia z przeszłości używa się <em>als</em>; tu ćwiczymy je z Perfekt: <em>Als wir gestern angekommen sind, hat es geregnet.</em> Zwróć uwagę na jeszcze jedno: <em>anrufen</em> bierze biernik (<em>dich</em>), a polskie «zadzwonić» wymaga <em>do</em> z dopełniaczem (<em>do ciebie</em>)."
      },
      {
        trap: "<em>Als</em> i <em>wenn</em> nie są wymienne: przy jednorazowym fakcie z przeszłości trzeba <b>als</b> (<em>Als ich gestern angekommen bin, ...</em>), przy teraźniejszości, przyszłości i faktach powtarzalnych trzeba <b>wenn</b>. Nie pisz «Wenn ich bin angekommen»: po <em>wenn</em> odmieniony czasownik idzie na koniec, za imiesłów. I nie myl <em>wenn</em> z <em>wann</em>, słowem pytającym (<em>Wann kommst du an?</em>)."
      },
      {
        tip: "Buduj zdanie z dwóch części: zdanie podrzędne <em>Wenn ich angekommen bin,</em> z czasownikiem na końcu, potem przecinek i zdanie główne zaczynające się od czasownika, <em>rufe ich dich an</em>. Jeśli zdanie podrzędne stoi później, szyk jest zwykły: <em>Ich rufe dich an, wenn ich angekommen bin.</em>"
      }
    ],
    grammar: {
      title: "Wenn + Perfekt, als + Perfekt",
      note: "Odmieniony czasownik (posiłkowy) idzie <b>na koniec</b>, za imiesłów. Jeśli zdanie podrzędne stoi na początku, zdanie główne zaczyna się od czasownika.",
      table: {
        head: ["sytuacja", "słowo i czas", "przykład"],
        rows: [
          ["przyszłość już zakończona", "wenn + Perfekt", "Wenn ich angekommen bin, rufe ich dich an."],
          ["teraźniejszość lub przyszłość", "wenn + czas teraźniejszy", "Wenn ich Zeit habe, besuche ich dich."],
          ["jednorazowy fakt z przeszłości", "als + Perfekt", "Als wir gestern angekommen sind, hat es geregnet."]
        ]
      },
      examples: [
        { tr: "Kiedy dojadę, zadzwonię do ciebie.", note: "wenn + Perfekt: czasownik posiłkowy na końcu" },
        { tr: "Kiedy znajdziemy hotel, pójdziemy coś zjeść.", note: "gefunden haben, potem gehen wir" },
        { tr: "Kiedy pociąg odjedzie, zadzwonię do ciebie.", note: "zdanie główne z Futur I: werde ich anrufen" },
        { tr: "Kiedy mam czas, odwiedzam cię.", note: "wenn + czas teraźniejszy" },
        { tr: "Kiedy wczoraj przyjechaliśmy, padało.", note: "als: jednorazowy fakt z przeszłości" },
        { tr: "Napiszę do ciebie, kiedy się przesiądę.", note: "zdanie podrzędne później: zwykły szyk" }
      ]
    },
    vocab: [
      "przyjechać, dotrzeć",
      "odjechać (o środku transportu)",
      "przesiadać się (do innego pociągu)",
      "dzwonić do",
      "opóźnienie",
      "wiadomość",
      "przesiadka, połączenie przesiadkowe",
      "przystanek",
      "taksówka",
      "połączenie (komunikacyjne)",
      "punktualny",
      "później"
    ],
    exercises: [
      {
        q: "Jak powiesz: «Kiedy dojadę, zadzwonię do ciebie»?",
        opts: [
          "Wenn ich angekommen bin, rufe ich dich an.",
          "Wenn ich ankomme bin, rufe ich dich an.",
          "Wenn ich bin angekommen, rufe ich dich an."
        ],
        why: "W zdaniu podrzędnym imiesłów stoi wcześniej, a czasownik posiłkowy na końcu: <i>angekommen bin</i>. Zdanie główne zaczyna się od czasownika: <i>rufe ich ... an</i>."
      },
      {
        q: "Które słowo? «___ ich gestern angekommen bin, hat es geregnet.»",
        opts: ["Als", "Wenn", "Wann"],
        why: "Jednorazowy fakt z przeszłości: <b>als</b>. <i>Wenn</i> służy do teraźniejszości, przyszłości i faktów powtarzalnych."
      },
      {
        q: "Uzupełnij: «Ich rufe dich an, ___ ich angekommen bin.» (kiedy, użyj wenn)",
        hint: "użyj wenn",
        why: "<b>Wenn</b> przy fakcie przyszłym. Odmieniony czasownik (<i>bin</i>) idzie na koniec."
      },
      {
        q: "Uzupełnij: «Wenn ich angekommen ___, rufe ich dich an.» (sein, Perfekt, ich)",
        hint: "sein, czas teraźniejszy, ich",
        why: "<b>Bin</b>: czasownikiem posiłkowym od <i>ankommen</i> jest <i>sein</i>, a na końcu zdania podrzędnego stoi czasownik odmieniony."
      },
      {
        q: "Uzupełnij zdanie.",
        tr: "Kiedy znajdziemy hotel, pójdziemy coś zjeść.",
        why: "<i>Wenn wir das Hotel gefunden haben, gehen wir essen</i>: w zdaniu podrzędnym <i>haben</i> zamyka zdanie; w zdaniu głównym czasownik (<i>gehen</i>) stoi zaraz po przecinku."
      },
      {
        q: "Dopasuj każdy czasownik do jego znaczenia.",
        pairs: ["przyjechać", "odjechać", "przesiąść się", "zadzwonić"]
      },
      {
        q: "Ułóż wyrazy w odpowiedniej kolejności.",
        tr: "Kiedy dojadę, zadzwonię do ciebie.",
        why: "Z tych elementów wychodzi szyk ze zdaniem podrzędnym na początku: <i>Wenn ich angekommen bin, rufe ich dich an</i>. Czasownik rozdzielny <i>anrufen</i> zostawia <i>an</i> na końcu zdania głównego."
      },
      {
        q: "Przetłumacz: «Kiedy dojeżdżam, dzwonię do ciebie.»",
        why: "Wystarczy czas teraźniejszy: <i>Wenn ich ankomme, rufe ich dich an</i>. Pasuje też Perfekt w zdaniu podrzędnym (<i>angekommen bin</i>) albo Futur I w zdaniu głównym (<i>werde ich dich anrufen</i>), a kolejność można odwrócić."
      },
      {
        tr: "Kiedy dojadę, zadzwonię do ciebie, a potem pójdziemy razem coś zjeść.",
        why: "W <i>angekommen</i> <b>n</b> i <b>g</b> należą do różnych cząstek (<i>an-ge-</i>) i wymawia się je osobno [nɡ], a nie jako jedną spółgłoskę nosową [ŋ]; w <i>zusammen</i> <b>z</b> to [ts], a <b>s</b> przed samogłoską jest zwykle dźwięczne."
      },
      {
        tr: "Kiedy dojadę do hotelu, wyślę ci wiadomość.",
        why: "W <i>Nachricht</i> <b>ch</b> to [x] po <b>a</b> i [ç] po <b>i</b>: dwa różne dźwięki w jednym słowie, a <b>sch</b> w <i>schicke</i> to [ʃ]. W <i>Hotel</i> akcent pada na ostatnią sylabę."
      }
    ]
  },
  "lesson:a2-u02-test": {
    theme: "Sprawdzian",
    title: "Sprawdzian z jednostki 2",
    objectives: ["sprawdzić wohin? (nach, in, zu), Futur I i wenn + Perfekt"],
    theory: [
      {
        p: "Dziesięć pytań o wohin? (nach, in, zu), Futur I i wenn + Perfekt. Zaliczasz przy 70%. Nie zaglądaj do lekcji w trakcie odpowiadania: jeśli czegoś nie pamiętasz, lepiej wrócić do powtórki."
      }
    ],
    exercises: [
      {
        tr: "Futur I czasownika kommen, wszystkie osoby.",
        why: "<i>Ich werde kommen, du wirst kommen, er wird kommen, wir werden kommen, ihr werdet kommen, sie werden kommen</i>."
      },
      {
        q: "Uzupełnij: «Wir fahren ___ Italien.» (do kraju bez rodzajnika)",
        hint: "nach, in czy zu?",
        why: "<b>Nach</b>: <i>Italien</i> nie ma rodzajnika."
      },
      {
        q: "Uzupełnij: «Ich fahre ___ die Schweiz.» (do kraju z rodzajnikiem)",
        hint: "przyimek + biernik",
        why: "<b>In</b> + biernik: <i>in die Schweiz</i>."
      },
      {
        q: "Uzupełnij: «Wir fahren ___ meiner Oma.» (do osoby)",
        hint: "przyimek + celownik",
        why: "<b>Zu</b> + celownik: <i>zu meiner Oma</i>."
      },
      {
        q: "Uzupełnij: «Ich ___ morgen nach Wien fahren.» (Futur I, werden, ich)",
        hint: "werden, ich",
        why: "<b>Werde</b> na drugim miejscu, <i>fahren</i> w bezokoliczniku, na końcu."
      },
      {
        q: "Uzupełnij: «Ich rufe dich an, ___ ich im Hotel angekommen bin.» (kiedy, użyj wenn)",
        hint: "użyj wenn",
        why: "<b>Wenn</b>: fakt przyszły, z odmienionym czasownikiem na końcu."
      },
      {
        q: "Uzupełnij: «Meine Tante wohnt ___ Schweiz.» (gdzie mieszka: położenie)",
        opts: ["in der", "in die", "nach der"],
        why: "Położenie (wo?): <b>in</b> + celownik, a <i>die Schweiz</i> w celowniku to <i>in der Schweiz</i>."
      },
      {
        q: "Przetłumacz: «Jutro jedziemy do Wiednia.»",
        why: "<i>Morgen fahren wir nach Wien</i>: <i>nach</i> przy mieście. Szyk może się zmienić, czasownik zostaje na drugim miejscu."
      },
      {
        tr: "Jutro jadę do Wiednia i kiedy dojadę, zadzwonię do ciebie.",
        why: "W <i>Wien</i> <b>W</b> to [v], a <b>ie</b> to długie <b>i</b>; w <i>angekommen</i> <b>n</b> i <b>g</b> należą do różnych cząstek (<i>an-ge-</i>) i wymawia się je osobno [nɡ], a nie jako jedną spółgłoskę nosową [ŋ]."
      },
      {
        tr: "Latem pojedziemy do Szwajcarii, a potem idę do mojej cioci.",
        why: "W <i>Schweiz</i> <b>sch</b> to [ʃ], <b>w</b> to [v], a <b>ei</b> brzmi [aɪ]."
      }
    ]
  },
  "unit:a2-u03": {
    title: "Widzę go, pomagam mu",
    grammarNote: "zaimki w bierniku i celowniku · czasowniki z celownikiem (helfen, gefallen, gehören, danken) · kolejność dopełnień · tryb rozkazujący z du i ihr · mal i doch"
  },
  "lesson:a2-u03-l1": {
    theme: "Rozmowa o ludziach",
    title: "ihn, sie, es",
    objectives: [
      "zastępować rzeczownik zaimkiem mich, dich, ihn, sie, es, uns, euch, sie, Sie",
      "wybierać zaimek według rodzaju niemieckiego rzeczownika",
      "stawiać zaimek po czasowniku w zdaniu głównym"
    ],
    theory: [
      {
        h: "Zaimek w bierniku zamiast rzeczownika",
        p: "Żeby nie powtarzać rzeczownika, który jest <b>dopełnieniem bliższym</b>, używa się zaimka w bierniku: <em>mich, dich, ihn, sie, es, uns, euch, sie, Sie</em>. W porównaniu z mianownikiem zmieniają się <em>ich, du, er, wir, ihr</em>; <em>sie</em> i <em>es</em> zostają takie same. Zaimek odpowiada <b>rodzajowi niemieckiego rzeczownika</b>, także przy rzeczach: <em>der Bruder → ihn</em>, <em>die Kollegin → sie</em>, <em>das Kind → es</em>, <em>der Schlüssel → ihn</em>. W zwykłym zdaniu głównym zaimek stoi zaraz po odmienionym czasowniku: <em>Ich kenne ihn gut.</em> Jeśli zdanie zaczyna się od innego elementu, zaimek idzie za podmiotem: <em>Morgen sehe ich ihn.</em> W zdaniu podrzędnym stoi po spójniku i podmiocie, przed czasownikiem na końcu: <em>..., weil ich ihn gut kenne.</em>"
      },
      {
        contrast: "Polskie zaimki też zmieniają się w bierniku (<em>widzę go, ją, je, was</em>), ale rodzaj rzeczy nie zawsze się zgadza z niemieckim. Zaimek idzie za rodzajem <b>niemieckiego</b> rzeczownika: «rower» jest po polsku rodzaju męskiego (<em>kupuję go</em>), a <em>das Fahrrad</em> jest nijakie, więc <em>Ich kaufe es</em>; «dziewczynka» jest żeńska (<em>widzę ją</em>), a <em>das Mädchen</em> jest nijakie, więc <em>Ich sehe es</em>. Natomiast «klucz» i <em>der Schlüssel</em> są oba męskie (<em>Ich sehe ihn</em>), a «gazeta» i <em>die Zeitung</em> oba żeńskie (<em>Ich lese sie</em>). Warto też pamiętać, że niemieckie <em>sie</em> w bierniku jest takie samo jak w mianowniku, a polskie «ona» zmienia się w «ją»."
      },
      {
        trap: "<em>Sie</em> może znaczyć «ona», «oni/one», «ją», «je», a z wielką literą także grzecznościowe «Pan/Pani/Państwo»: o znaczeniu decyduje czasownik i kontekst (<em>Ich sehe sie</em>, samo, jest niejednoznaczne). Z wielką literą jest formą grzecznościową: <em>Ich kenne Sie</em> to «znam Pana/Panią/Państwa». Nie myl też <em>ihn</em> (biernik) z <em>ihm</em> (celownik): <em>Ich sehe ihm</em> jest błędne, bo <em>sehen</em> wymaga biernika."
      },
      {
        tip: "Zanim napiszesz zaimek, powtórz niemiecki rzeczownik z rodzajnikiem: <em>der → ihn</em>, <em>die → sie</em>, <em>das → es</em>, <em>die</em> (liczba mnoga) <em>→ sie</em>. Zaimek dla osoby jest taki sam jak dla rzeczy tego samego rodzaju."
      }
    ],
    grammar: {
      title: "Zaimki w bierniku",
      note: "Zastępują znane już dopełnienie bliższe. Rodzaj i liczba idą za niemieckim rzeczownikiem: <b>der → ihn</b>, <b>die → sie</b>, <b>das → es</b>.",
      table: {
        head: ["mianownik", "biernik", "przykład"],
        rows: [
          ["ich", "mich", "Er sieht mich."],
          ["du", "dich", "Ich kenne dich."],
          ["er", "ihn", "Wir sehen ihn."],
          ["sie", "sie", "Ich treffe sie."],
          ["es", "es", "Ich nehme es."],
          ["wir", "uns", "Sie laden uns ein."],
          ["ihr", "euch", "Ich besuche euch."],
          ["sie, Sie", "sie, Sie", "Wir kennen Sie."]
        ]
      },
      examples: [
        { tr: "Znam go dobrze.", note: "ihn przy rzeczowniku rodzaju męskiego (der Bruder)" },
        { tr: "Jutro się z nią spotykamy.", note: "sie: na przykład die Kollegin" },
        { tr: "On mnie nie widzi.", note: "mich: biernik od ich" },
        { tr: "Dziś wieczorem do ciebie zadzwonię.", note: "dich; anrufen jest rozdzielne, an idzie na koniec" },
        { tr: "Dziecko jest chore. Dziś je odwiedzam.", note: "es przy das Kind, rodzaj nijaki" },
        { tr: "Zapraszają nas na przyjęcie.", note: "uns; einladen jest rozdzielne, ein idzie na koniec" }
      ]
    },
    vocab: [
      "brat",
      "siostra",
      "sąsiad",
      "koleżanka z pracy",
      "szef",
      "dziecko",
      "klucz",
      "gazeta",
      "znać",
      "widzieć",
      "spotkać",
      "zaprosić"
    ],
    exercises: [
      {
        q: "Mówisz o swoim bracie: «Często go widzę.» Które zdanie jest poprawne?",
        opts: ["Ich sehe er oft.", "Ich sehe ihn oft.", "Ich sehe ihm oft."],
        why: "<b>Ihn</b>: <i>sehen</i> wymaga biernika, a dla <i>der Bruder</i> zaimkiem jest <i>ihn</i>. <i>Er</i> to mianownik, <i>ihm</i> to celownik."
      },
      {
        q: "Uzupełnij: «Das Kind ist krank. Ich besuche ___ heute.»",
        opts: ["ihn", "sie", "es"],
        why: "<i>Das Kind</i> jest rodzaju nijakiego, więc <b>es</b>. Rodzaj idzie za niemieckim słowem, a nie za płcią osoby."
      },
      {
        q: "Które zdania są poprawne? (więcej niż jedno)",
        opts: [
          "Ich sehe dich morgen.",
          "Wir laden sie zur Party ein.",
          "Er kennt mich gut.",
          "Ich treffe ihm heute."
        ],
        why: "Pierwsze trzy mają właściwy zaimek w bierniku. <i>Ihm</i> to celownik, a <i>treffen</i> wymaga biernika: <i>Ich treffe ihn heute.</i>"
      },
      {
        q: "Uzupełnij: «Das ist mein Bruder. Ich kenne ___ sehr gut.» (er, biernik)",
        hint: "zaimek w bierniku",
        why: "<b>Ihn</b>: <i>kennen</i> wymaga biernika, a <i>der Bruder</i> jest rodzaju męskiego."
      },
      {
        q: "Uzupełnij: «Wo ist Lisa? Ich sehe ___ nicht.» (Lisa)",
        hint: "zaimek w bierniku",
        why: "<b>Sie</b>: biernik od <i>sie</i> (ona) jest taki sam jak mianownik."
      },
      {
        q: "Uzupełnij zdanie.",
        tr: "Moja koleżanka z pracy jest miła. Często się z nią spotykam, a czasem mnie zaprasza.",
        why: "<i>Sie</i> to biernik od <i>die Kollegin</i>; <i>mich</i> to biernik od <i>ich</i>. <i>Einladen</i> jest rozdzielne: <i>ein</i> idzie na koniec."
      },
      {
        q: "Ułóż wyrazy w odpowiedniej kolejności.",
        tr: "Dziś spotykam się z nią w kawiarni.",
        why: "Czasownik zostaje na drugim miejscu, a zaimek <i>sie</i> idzie za podmiotem <i>ich</i>. Pasują też <i>Ich treffe sie heute im Café</i> i <i>Im Café treffe ich sie heute</i>."
      },
      {
        q: "Przetłumacz (mówisz o swoim bracie): «Widzę go jutro.»",
        why: "<i>Ich sehe ihn morgen</i>: zaimek idzie za czasownikiem. Gdy <i>morgen</i> otwiera zdanie, czasownik zostaje na drugim miejscu, a podmiot idzie za nim (<i>Morgen sehe ich ihn</i>). Pasuje też <i>treffen</i>."
      },
      {
        tr: "Znasz mojego brata? Widuję go codziennie, a on często mnie odwiedza.",
        why: "W <i>ihn</i> i <i>sehe</i> <b>h</b> się nie czyta, a poprzedzająca samogłoska jest długa; w <i>besucht</i> akcent pada na <i>-sucht</i>, a <b>ch</b> po <b>u</b> to [x]."
      },
      {
        tr: "Moja koleżanka z pracy jest miła. Często się z nią spotykam, a czasem mnie zaprasza.",
        why: "W <i>sie</i> <b>s</b> jest dźwięczne [z], inaczej niż polskie «s», a <b>ie</b> to długie <b>i</b>; w <i>manchmal</i> <b>ch</b> po <b>n</b> to [ç]."
      }
    ]
  },
  "lesson:a2-u03-l2": {
    theme: "Pomoc i upodobania",
    title: "Pomagam ci, podoba mi się",
    objectives: [
      "używać mir, dir, ihm, ihr, uns, euch, ihnen",
      "rozpoznawać czasowniki z celownikiem: helfen, gefallen, gehören, danken",
      "powiedzieć, że coś się komuś podoba albo do kogoś należy"
    ],
    theory: [
      {
        h: "Celownik z zaimkami i z niektórymi czasownikami",
        p: "Celownik odpowiada na pytanie <em>komu?</em>. Zaimki to <em>mir, dir, ihm, ihr, ihm, uns, euch, ihnen</em> (grzecznościowo: <em>Ihnen</em>). Niektóre czasowniki wymagają celownika jako dopełnienia: <em>helfen</em> (<em>Ich helfe dir</em>), <em>danken</em> (<em>Ich danke dir</em>), <em>antworten</em> (<em>Er antwortet mir</em>), <em>gehören</em> (<em>Das Handy gehört mir</em>) i <em>gefallen</em> (<em>Die Jacke gefällt mir</em>). Przy <em>gefallen</em> podmiotem jest to, co się podoba, a osoba stoi w celowniku: gdy rzecz jest w liczbie mnogiej, czasownik się z nią zgadza (<em>Die Schuhe gefallen mir</em>)."
      },
      {
        contrast: "Tu polski ma przewagę: «pomagać», «dziękować» i «odpowiadać» też wymagają celownika (<em>pomagam ci</em>, <em>dziękuję ci</em>, <em>odpowiadam mu</em>), więc <em>Ich helfe dir</em>, <em>Ich danke dir</em>, <em>Er antwortet mir</em> są zbudowane tak samo. <em>Gefallen</em> działa jak «podobać się»: <em>Ta kurtka mi się podoba</em> i <em>Die Jacke gefällt mir</em> mają tę samą budowę, z rzeczą jako podmiotem i osobą w celowniku (<em>mi</em>, <em>mir</em>). Inaczej jest z <em>gehören</em>: po polsku «należeć» wymaga <em>do</em> z dopełniaczem (<em>należy do mnie</em>), a w niemieckim jest celownik bez przyimka: <em>Das gehört mir</em>. Zwróć też uwagę na zaimki: polskie «mu» i «jej» odpowiadają niemieckim <em>ihm</em> i <em>ihr</em>, a «im» odpowiada <em>ihnen</em>."
      },
      {
        trap: "Przy tych czasownikach biernik jest błędem: <em>Ich helfe dich</em> i <em>Ich danke ihn</em> są niepoprawne. Uważaj też na <em>ihr</em>: w mianowniku znaczy «wy» (<em>Ihr helft mir</em>), w celowniku «jej» (<em>Ich helfe ihr</em>). Czasownik i przypadek pomagają zrozumieć, o które chodzi. <em>Ihm</em> odpowiada zarówno <em>er</em>, jak i <em>es</em>: <em>Ich helfe dem Kind → Ich helfe ihm</em>."
      },
      {
        tip: "Ucz się tych czasowników razem z celownikiem: <em>helfen + celownik</em>, <em>gefallen + celownik</em>, <em>gehören + celownik</em>, <em>danken + celownik</em>. Gdy czasownik jest jednym z nich, zaimek to <em>mir, dir, ihm, ihr, uns, euch, ihnen</em>."
      }
    ],
    grammar: {
      title: "Zaimki w celowniku i czasowniki z celownikiem",
      note: "Celownik to przypadek osoby, która coś dostaje albo której się pomaga, albo której coś się podoba lub do której coś należy, zależnie od czasownika. <b>helfen, danken, antworten, gehören, gefallen</b> wymagają celownika.",
      table: {
        head: ["mianownik", "celownik", "przykład"],
        rows: [
          ["ich", "mir", "Das gehört mir."],
          ["du", "dir", "Ich helfe dir."],
          ["er", "ihm", "Wir danken ihm."],
          ["sie", "ihr", "Das Buch gefällt ihr."],
          ["es", "ihm", "Ich helfe ihm."],
          ["wir", "uns", "Er hilft uns."],
          ["ihr", "euch", "Ich danke euch."],
          ["sie", "ihnen", "Ich antworte ihnen."],
          ["Sie", "Ihnen", "Ich danke Ihnen."]
        ]
      },
      examples: [
        { tr: "Chętnie ci pomogę.", note: "helfen + celownik: dir" },
        { tr: "Ta komórka jest moja.", note: "gehören + celownik: mir" },
        { tr: "Ta kurtka bardzo mi się podoba.", note: "gefallen: rzecz jest podmiotem, osoba w celowniku" },
        { tr: "Dziękujemy mu za prezent.", note: "danken + celownik: ihm" },
        { tr: "On mi nie odpowiada.", note: "antworten + celownik: mir" },
        { tr: "Moja siostra potrzebuje pomocy. Pomagam jej.", note: "helfen + celownik: ihr" }
      ]
    },
    vocab: [
      "prezent",
      "pomoc",
      "plecak",
      "telefon komórkowy",
      "kurtka",
      "książka",
      "pomagać",
      "podobać się",
      "należeć",
      "dziękować",
      "odpowiadać",
      "chętnie"
    ],
    exercises: [
      {
        q: "Mówisz o swoim bracie: «Pomagam mu.» Które zdanie jest poprawne?",
        opts: ["Ich helfe ihn.", "Ich helfe ihm.", "Ich helfe er."],
        why: "<b>Ihm</b>: <i>helfen</i> wymaga celownika. <i>Ihn</i> to biernik."
      },
      {
        q: "Jak powiesz «Podoba mi się ta kurtka»?",
        opts: ["Die Jacke gefällt mich.", "Die Jacke gefällt mir.", "Ich gefalle die Jacke."],
        why: "Rzecz jest podmiotem (<i>die Jacke</i>), a osoba stoi w celowniku (<i>mir</i>), jak w polskim «mi się podoba»."
      },
      {
        q: "Które czasowniki wymagają celownika? (więcej niż jeden)",
        opts: ["helfen", "gehören", "sehen", "danken"],
        why: "<i>Helfen</i>, <i>gehören</i> i <i>danken</i> wymagają celownika. <i>Sehen</i> wymaga biernika: <i>Ich sehe ihn.</i>"
      },
      {
        q: "Uzupełnij: «Das ist mein Handy. Es gehört ___.» (ich, celownik)",
        hint: "zaimek w celowniku",
        why: "<b>Mir</b>: <i>gehören</i> wymaga celownika."
      },
      {
        q: "Uzupełnij: «Meine Schwester braucht Hilfe. Ich helfe ___ gern.» (sie: siostra)",
        hint: "zaimek w celowniku",
        why: "<b>Ihr</b>: celownik od <i>sie</i> w liczbie pojedynczej. <i>Helfen</i> wymaga celownika."
      },
      {
        q: "Uzupełnij zdanie.",
        tr: "Dziękuję, Anno! Dziękuję ci za twoją pomoc.",
        why: "<i>Ich danke dir</i>: <i>danken</i> wymaga celownika, więc <b>dir</b>, a nie <i>dich</i>."
      },
      {
        q: "Ułóż wyrazy w odpowiedniej kolejności.",
        tr: "Ta kurtka bardzo mi się podoba.",
        why: "Z rzeczą jako podmiotem: <i>Die Jacke gefällt mir sehr</i>. Pasuje też <i>Mir gefällt die Jacke sehr</i>, z celownikiem na początku."
      },
      {
        q: "Przetłumacz (do przyjaciela): «Chętnie ci pomogę.»",
        why: "<i>Ich helfe dir gern</i>: <i>helfen</i> wymaga celownika (<i>dir</i>). Poprawne są też warianty z <i>gerne</i> i z <i>gern</i> na początku."
      },
      {
        tr: "Możesz mi pomóc, proszę? Dziękuję ci, to bardzo miło z twojej strony.",
        why: "W <i>helfen</i> <b>e</b> jest krótkie; w <i>danke</i> <b>n</b> przed <b>k</b> czyta się [ŋ], jak w polskim «bank», a <b>a</b> jest krótkie."
      },
      {
        tr: "Plecak jest mój, a kurtka bardzo mi się podoba.",
        why: "W <i>gehört</i> akcent pada na <i>-hört</i>, gdzie <b>ö</b> jest długie ([øː]): wargi jak do <b>o</b>, język jak do <b>e</b>; w <i>Rucksack</i> obie samogłoski są krótkie, a <b>ck</b> sygnalizuje krótkie <b>a</b>."
      }
    ]
  },
  "lesson:a2-u03-l3": {
    theme: "Prezenty i przysługi",
    title: "Daję mu to",
    objectives: [
      "używać celownika i biernika w jednym zdaniu",
      "ułożyć w zwykłej kolejności dwa rzeczowniki, zaimek i rzeczownik, dwa zaimki",
      "używać geben, schenken, zeigen, schicken, leihen, erklären"
    ],
    theory: [
      {
        h: "Dwa dopełnienia: celownik i biernik",
        p: "Przy czasownikach takich jak <em>geben, schenken, zeigen, schicken, leihen, erklären</em> są dwa dopełnienia: osoba (celownik) i rzecz (biernik). Zwykła kolejność w zdaniu neutralnym jest taka. Przy <b>dwóch rzeczownikach</b> celownik stoi przed biernikiem: <em>Ich schenke meiner Schwester ein Buch.</em> Przy <b>zaimku i rzeczowniku</b> zaimek stoi pierwszy, bez względu na przypadek: <em>Ich gebe ihm das Buch. Ich gebe es meinem Bruder.</em> Przy <b>dwóch zaimkach</b> biernik stoi przed celownikiem: <em>Ich gebe es ihm.</em> To kolejności zwykłe, a nie bezwzględne reguły: żeby coś podkreślić, można element przesunąć."
      },
      {
        contrast: "Po polsku kolejność dopełnień jest swobodna i zależy od akcentu: <em>daję mu książkę</em> albo <em>daję książkę jemu</em>. Przy dwóch zaimkach zwykle stoi najpierw celownik, potem biernik: <em>daję mu to</em>, <em>daję ci to</em> (mu, ci to celownik, to jest biernik). W niemieckim w zwykłej kolejności jest odwrotnie: najpierw biernik, potem celownik: <em>Ich gebe es ihm</em>, <em>Ich gebe es dir</em>. Jeśli tłumaczysz z polskiego, odwróć kolejność: najpierw <em>es</em> (polskie «to»), potem <em>dir</em> albo <em>ihm</em> (polskie «ci» albo «mu»). Przy zaimku i rzeczowniku polski i niemiecki zgadzają się: <em>daję mu książkę</em> to <em>Ich gebe ihm das Buch</em>."
      },
      {
        trap: "W zwykłej kolejności <em>Ich gebe ihm es</em> brzmi źle: przy dwóch zaimkach najpierw idzie biernik, <em>Ich gebe es ihm</em>. Rodzaj wybieraj według niemieckiego słowa: <em>das Foto → es</em>, <em>der Brief → ihn</em>, <em>die Postkarte → sie</em>. Przy rzeczowniku rodzaju męskiego oba zaimki są różne: <em>Ich gebe ihn ihm</em> (pierwszy to biernik, drugi celownik)."
      },
      {
        tip: "Najpierw znajdź rzecz i postaw jej zaimek (<em>es, ihn, sie</em>) zaraz po czasowniku; potem dodaj osobę (<em>mir, dir, ihm, ihr</em>). Przy rzeczownikach zacznij za to od osoby: <em>Ich zeige meiner Mutter das Foto.</em>"
      }
    ],
    grammar: {
      title: "Kolejność celownika i biernika",
      note: "W zdaniu neutralnym: dwa rzeczowniki, <b>celownik pierwszy</b>; zaimek i rzeczownik, <b>zaimek pierwszy</b>; dwa zaimki, <b>biernik pierwszy</b>.",
      table: {
        head: ["dopełnienia", "zwykła kolejność", "przykład"],
        rows: [
          ["dwa rzeczowniki", "celownik, biernik", "Ich schenke meiner Schwester ein Buch."],
          ["zaimek + rzeczownik", "zaimek pierwszy", "Ich gebe ihm das Buch."],
          ["rzeczownik + zaimek", "zaimek pierwszy", "Ich gebe es meinem Bruder."],
          ["dwa zaimki", "biernik, celownik", "Ich gebe es ihm."]
        ]
      },
      examples: [
        { tr: "Daję mu to.", note: "dwa zaimki: es (biernik) przed ihm (celownik)" },
        { tr: "Pokazuję ci zdjęcie.", note: "zaimek w celowniku przed rzeczownikiem" },
        { tr: "Daruję mojej siostrze książkę.", note: "dwa rzeczowniki: celownik przed biernikiem" },
        { tr: "Wyśle mi to jutro.", note: "es mir: biernik przed celownikiem" },
        { tr: "Pożyczamy mu rower.", note: "zaimek w celowniku przed rzeczownikiem" },
        { tr: "Wyjaśnię ci to później.", note: "es dir: biernik przed celownikiem" }
      ]
    },
    vocab: [
      "zdjęcie",
      "list",
      "paczka",
      "pieniądze",
      "pocztówka",
      "rower",
      "dać",
      "podarować",
      "pokazać",
      "wysłać",
      "pożyczyć",
      "wyjaśnić"
    ],
    exercises: [
      {
        q: "Mówisz: «Daję mu to» (książkę, mojemu bratu). Które zdanie ma zwykłą kolejność?",
        opts: ["Ich gebe ihm es.", "Ich gebe es ihm.", "Ich gebe ihm ihn."],
        why: "Przy dwóch zaimkach biernik stoi przed celownikiem: <i>es ihm</i>. <i>Das Buch</i> jest rodzaju nijakiego, więc <i>es</i>."
      },
      {
        q: "Które zdanie ma kolejność neutralną przy dwóch rzeczownikach?",
        opts: [
          "Ich schenke ein Buch meiner Schwester.",
          "Ich schenke meiner Schwester ein Buch.",
          "Ich meiner Schwester schenke ein Buch."
        ],
        why: "Przy dwóch rzeczownikach najpierw celownik (osoba), potem biernik (rzecz). Pierwsze zdanie nie jest błędne, ale przesuwa osobę na koniec, żeby ją podkreślić: to nie jest kolejność neutralna. Trzecie łamie drugie miejsce czasownika."
      },
      {
        q: "Które zdania mają zwykłą kolejność? (więcej niż jedno)",
        opts: [
          "Ich gebe es ihm.",
          "Ich zeige dir das Foto.",
          "Ich schicke dem Chef es.",
          "Ich schenke ihm einen Schlüssel."
        ],
        why: "Zaimek stoi przed rzeczownikiem (<i>dir das Foto</i>, <i>ihm einen Schlüssel</i>), a przy dwóch zaimkach obowiązuje <i>es ihm</i>. W «Ich schicke dem Chef es» rzeczownik poprzedza zaimek: zwykła kolejność to <i>Ich schicke es dem Chef</i>."
      },
      {
        q: "Uzupełnij: «Wo ist das Foto? Ich zeige ___ dir gleich.» (das Foto)",
        hint: "zaimek w bierniku",
        why: "<b>Es</b>: <i>das Foto</i> jest rodzaju nijakiego, a biernik <i>es</i> stoi przed celownikiem <i>dir</i>."
      },
      {
        q: "Uzupełnij: «Der Schlüssel gehört Paul. Ich gebe ihn ___ heute.» (Paul: er)",
        hint: "zaimek w celowniku",
        why: "<b>Ihm</b>: celownik od <i>er</i>. Biernik <i>ihn</i> (rzecz, <i>der Schlüssel</i>) stoi pierwszy."
      },
      {
        q: "Uzupełnij zdanie.",
        tr: "List jest gotowy. Jutro ci go wyślę.",
        why: "<i>Der Brief</i> jest rodzaju męskiego: <b>ihn</b> (biernik) stoi przed <b>dir</b> (celownik). Po polsku «ci go» ma celownik na pierwszym miejscu: w niemieckim kolejność jest odwrotna."
      },
      {
        q: "Dopasuj każde zdanie do jego tłumaczenia.",
        pairs: ["Daję mu to.", "Daję mu książkę.", "Daję to mojemu bratu.", "Daję ci to."]
      },
      {
        q: "Przetłumacz: «Jutro ci to dam.» (książkę: użyj zaimka es)",
        why: "<i>Ich gebe es dir morgen</i>: najpierw biernik <i>es</i>, potem celownik <i>dir</i>. Gdy <i>morgen</i> otwiera zdanie, czasownik zostaje na drugim miejscu: <i>Morgen gebe ich es dir</i>."
      },
      {
        tr: "Znalazłem twoje zdjęcie. Zaraz ci je pokażę, a jutro wyślę je twojej siostrze.",
        why: "W <i>zeigen</i> <b>z</b> to [ts], czyli «c», a <b>ei</b> brzmi [aɪ]; w <i>gleich</i> końcowe <b>ch</b> po <b>ei</b> czyta się [ç]."
      },
      {
        tr: "Klucz jest mojego brata. Jutro mu go oddam.",
        why: "W <i>Schlüssel</i> <b>sch</b> to [ʃ], a <b>ü</b> jest krótkie; w <i>ihn</i> i <i>ihm</i> <b>h</b> się nie czyta, a <b>i</b> jest długie."
      }
    ]
  },
  "lesson:a2-u03-l4": {
    theme: "Polecenia i rady",
    title: "Powiedz mi! Zadzwoń do mnie!",
    objectives: [
      "tworzyć tryb rozkazujący z du i z ihr",
      "zapamiętać czasowniki ze zmianą tematu i sein",
      "używać mal i doch, żeby zmienić ton prośby"
    ],
    theory: [
      {
        h: "Tryb rozkazujący z du i z ihr",
        p: "Żeby powiedzieć osobie, do której zwracasz się na «ty», żeby coś zrobiła, używa się <b>tematu czasownika</b>, bez <em>du</em>: <em>Komm! Ruf mich an! Mach das Fenster zu!</em> Przy czasownikach słabych, których temat kończy się na <em>-t</em> lub <em>-d</em>, dodaje się zwykle <b>-e</b>: <em>Warte! Arbeite! Antworte!</em> Czasowniki mocne ze zmianą <em>e → i/ie</em> używają zmienionego tematu i nie mają <em>-e</em>: <em>Nimm! Lies! Gib! Sprich!</em> Bez Umlautu: <em>Fahr!</em>, a nie <em>Fähr!</em> <em>Sein</em> jest nieregularne: <em>Sei!</em> Dla kilku osób (<em>ihr</em>) tryb rozkazujący ma formę <em>ihr</em> bez zaimka: <em>Kommt! Wartet! Ruft an!</em> Czasownik rozdzielny zostawia przedrostek na końcu: <em>Ruf mich an!</em>"
      },
      {
        h: "mal i doch: małe słówka zmieniające ton",
        p: "<em>Mal</em> i <em>doch</em> to <b>partykuły modalne</b>: nie zmieniają gramatyki, zmieniają <b>brzmienie</b> zdania. <em>Komm mal her!</em> jest lżejsze niż <em>Komm her!</em>, jak «przyjdź no tu na chwilę». <em>Ruf mich doch an!</em> to przyjazne zaproszenie albo naleganie: «zadzwoń do mnie śmiało». Stoją w polu środkowym, zwykle po zaimku: <em>Ruf mich doch mal an!</em> Nie mają stałego tłumaczenia."
      },
      {
        contrast: "Po polsku też nie ma zaimka w trybie rozkazującym (<em>chodź, czekaj, zadzwoń</em>), a dla kilku osób forma ma końcówkę <em>-cie</em> (<em>chodźcie, czekajcie</em>), tak jak niemieckie <em>ihr</em> (<em>Kommt! Wartet!</em>). Polskie czasowniki tworzą tryb rozkazujący końcówkami (<em>-j</em>, <em>-ij</em>, <em>-ź</em> i inne), a niemiecki dla <em>du</em> po prostu bierze temat: <em>Komm!</em>, <em>Warte!</em>. Różnica w rekcji: <em>zadzwoń do mnie</em> to <em>do</em> z dopełniaczem, a <em>Ruf mich an!</em> ma biernik (<em>mich</em>) i przedrostek na końcu. W zaprzeczeniu polski używa <em>nie</em> przed czasownikiem (<em>nie spóźnij się</em>), a niemiecki dodaje <em>nicht</em> w zdaniu: <em>Komm nicht zu spät!</em> Polski ma własne słówka zmieniające ton (<em>no</em>, <em>przecież</em>, <em>sobie</em>, <em>śmiało</em>), ale nie odpowiadają one niemieckim <em>mal</em> i <em>doch</em> jeden do jednego: tłumaczy się je tonem, a nie słowem."
      },
      {
        trap: "Nie dodawaj <em>-st</em>: <em>Kommst!</em> nie jest trybem rozkazującym. Przy czasownikach mocnych z <em>e → ie</em> nie mów <em>Lese!</em>, tylko <em>Lies!</em>, a nie <em>Nehm!</em>, tylko <em>Nimm!</em> Przy <em>sein</em> forma to <em>Sei vorsichtig!</em> Nie myśl, że <em>mal</em> i <em>doch</em> to puste słowa: bez nich zdanie jest nadal poprawne, ale brzmi ostrzej."
      },
      {
        tip: "Gdy dajesz przyjacielowi polecenie albo radę: zacznij od bezokolicznika, odrzuć <em>-en</em>, dodaj <em>-e</em>, jeśli temat kończy się na <em>-t</em> lub <em>-d</em>, i wstaw <em>mal</em> lub <em>doch</em>, żeby złagodzić: <em>Warte mal! Komm doch mit!</em>"
      }
    ],
    grammar: {
      title: "Tryb rozkazujący z du i ihr; mal i doch",
      note: "Z <b>du</b> temat bez zaimka (<i>Komm!</i>), z <b>ihr</b> forma ihr (<i>Kommt!</i>). <b>mal</b> i <b>doch</b> łagodzą prośbę albo czynią ją bardziej przyjazną.",
      table: {
        head: ["bezokolicznik", "du", "ihr"],
        rows: [
          ["kommen", "Komm!", "Kommt!"],
          ["warten", "Warte!", "Wartet!"],
          ["anrufen", "Ruf an!", "Ruft an!"],
          ["nehmen", "Nimm!", "Nehmt!"],
          ["lesen", "Lies!", "Lest!"],
          ["sein", "Sei!", "Seid!"]
        ]
      },
      examples: [
        { tr: "Przyjdź no tu na chwilę!", note: "mal czyni prośbę lżejszą" },
        { tr: "Zaczekaj chwilę!", note: "temat na -t: dodaje się -e" },
        { tr: "Zadzwoń do mnie śmiało!", note: "doch: przyjazne zaproszenie; an na końcu" },
        { tr: "Zrób sobie przerwę!", note: "machen: temat Mach, bez -en" },
        { tr: "Powiedz mi, masz czas?", note: "Sag mal: otwiera pytanie w tonie potocznym" },
        { tr: "Bądźcie ostrożni, proszę!", note: "ihr: forma sein, Seid" }
      ]
    },
    vocab: [
      "rada",
      "pomysł",
      "chwila",
      "przerwa",
      "dzwonić (telefonicznie)",
      "czekać",
      "brać",
      "czytać",
      "mal (partykuła modalna)",
      "doch (partykuła modalna)",
      "ostrożny, uważny",
      "proszę"
    ],
    exercises: [
      {
        q: "Mówisz do przyjaciela: «Zaczekaj chwilę!» Które zdanie jest poprawne?",
        opts: ["Warte einen Moment!", "Wartest einen Moment!", "Warten einen Moment!"],
        why: "Z <i>du</i> tryb rozkazujący to temat bez zaimka; temat kończy się na <i>-t</i>, więc dodaje się <b>-e</b>: <i>Warte!</i>"
      },
      {
        q: "Mówisz do przyjaciela: «Przeczytaj to!» (lesen)",
        opts: ["Lese das!", "Lies das!", "Les das!"],
        why: "<i>Lesen</i> to czasownik mocny z <i>e → ie</i>: w trybie rozkazującym zmienia się temat (<b>Lies!</b>) i nie ma <i>-e</i>."
      },
      {
        q: "Uzupełnij: «___ bitte einen Moment, Kinder!» (warten, ihr)",
        hint: "warten, tryb rozkazujący ihr",
        why: "Tryb rozkazujący z <i>ihr</i> ma formę <i>ihr</i> bez zaimka: <b>Wartet!</b>"
      },
      {
        q: "Uzupełnij: «Ruf mich doch ___!» (anrufen: zadzwoń do mnie śmiało)",
        hint: "przedrostek czasownika rozdzielnego",
        why: "<i>Anrufen</i> jest rozdzielne: przedrostek <b>an</b> idzie na koniec, a czasownik zostaje na pierwszym miejscu."
      },
      {
        q: "Uzupełnij: «___ vorsichtig!» (sein, du)",
        hint: "sein, tryb rozkazujący du",
        why: "<b>Sei</b>: tryb rozkazujący od <i>sein</i> jest nieregularny (<i>sei, seid</i>)."
      },
      {
        q: "Uzupełnij zdanie (pasują i doch, i mal).",
        tr: "Jesteś zmęczony? To zrób sobie przerwę!",
        why: "<b>Mach</b>: temat od <i>machen</i> to <i>mach-</i>, bez <i>-en</i> i bez <i>du</i>. Pasują <i>doch</i> (przyjazne zaproszenie) i <i>mal</i> (lżejszy ton)."
      },
      {
        q: "Ułóż wyrazy w odpowiedniej kolejności.",
        tr: "No, zadzwoń do mnie!",
        why: "Czasownik otwiera zdanie, zaimek idzie za nim, a partykuły <i>doch mal</i> stoją przed przedrostkiem <i>an</i> na końcu."
      },
      {
        q: "Przetłumacz (do przyjaciela, użyj doch): «Zadzwoń do mnie śmiało!»",
        why: "<i>Ruf mich doch an!</i>: tryb rozkazujący bez <i>du</i>, zaimek po czasowniku, przedrostek <i>an</i> na końcu; <i>doch</i> czyni zaproszenie bardziej przyjaznym. Pasuje też z dodatkowym <i>mal</i>."
      },
      {
        tr: "Powiedz mi, masz jutro czas? To zadzwoń do mnie śmiało i pójdziemy razem coś zjeść.",
        why: "W <i>Sag</i> końcowe <b>g</b> czyta się zwykle [k], jak w polskim «Bóg»; w <i>zusammen</i> <b>z</b> to [ts], a <b>s</b> przed samogłoską jest zwykle dźwięczne."
      },
      {
        tr: "Wpadnij do mnie kiedyś i weź sobie trochę czasu!",
        why: "W <i>vorbei</i> <b>v</b> czyta się [f]; w <i>Moment</i> akcent pada na drugą sylabę."
      }
    ]
  },
  "lesson:a2-u03-test": {
    theme: "Sprawdzian",
    title: "Sprawdzian z jednostki 3",
    objectives: [
      "sprawdzić zaimki w bierniku i celowniku, czasowniki z celownikiem i kolejność dopełnień"
    ],
    theory: [
      {
        p: "Dziesięć pytań o zaimki w bierniku i celowniku, o czasowniki z celownikiem i o kolejność dopełnień. Zaliczasz przy 70%. Nie zaglądaj do lekcji w trakcie odpowiadania: jeśli czegoś nie pamiętasz, lepiej wrócić do powtórki."
      }
    ],
    exercises: [
      {
        q: "Uzupełnij: «Wo ist Anna? Ich sehe ___ nicht.» (sie: Anna)",
        hint: "zaimek w bierniku",
        why: "<b>Sie</b>: <i>sehen</i> wymaga biernika, a biernik od <i>sie</i> (ona) jest taki sam jak mianownik."
      },
      {
        q: "Uzupełnij: «Du brauchst Hilfe? Ich helfe ___ gern.» (du)",
        hint: "zaimek w celowniku",
        why: "<b>Dir</b>: <i>helfen</i> wymaga celownika."
      },
      {
        q: "Uzupełnij: «Das Handy gehört ___.» (ich)",
        hint: "zaimek w celowniku",
        why: "<b>Mir</b>: <i>gehören</i> wymaga celownika."
      },
      {
        q: "Uzupełnij: «Ich habe das Buch. Ich gebe es ___ gleich.» (mein Bruder: er)",
        hint: "zaimek w celowniku",
        why: "<b>Ihm</b>: przy dwóch zaimkach najpierw idzie biernik (<i>es</i>), potem celownik (<i>ihm</i>)."
      },
      {
        q: "Uzupełnij: «Ihr helft uns oft. Wir danken ___ sehr.» (ihr)",
        hint: "zaimek w celowniku",
        why: "<b>Euch</b>: <i>danken</i> wymaga celownika, a celownik od <i>ihr</i> to <i>euch</i>."
      },
      {
        q: "Jak powiesz «Ten pomysł bardzo mi się podoba»?",
        opts: ["Die Idee gefällt mich sehr.", "Die Idee gefällt mir sehr.", "Ich gefalle die Idee sehr."],
        why: "Rzecz jest podmiotem (<i>die Idee</i>), a osoba stoi w celowniku (<i>mir</i>)."
      },
      {
        q: "Mówisz: «Pokazuję ci to» (książkę). Które zdanie ma zwykłą kolejność?",
        opts: ["Ich zeige es dir.", "Ich zeige dir es.", "Ich zeige du es."],
        why: "Przy dwóch zaimkach biernik (<i>es</i>) stoi przed celownikiem (<i>dir</i>)."
      },
      {
        q: "Przetłumacz: «Jutro dam mu książkę.»",
        why: "<i>Ich gebe ihm das Buch morgen</i>: zaimek w celowniku <i>ihm</i> stoi przed rzeczownikiem <i>das Buch</i>. Pasują też <i>Morgen gebe ich ihm das Buch</i> i <i>Ich gebe ihm morgen das Buch</i>."
      },
      {
        tr: "Mój brat ma urodziny. Daruję mu książkę i dam mu ją jutro.",
        why: "W <i>Geburtstag</i> akcent pada na <i>-burts-</i> (<i>ge-</i> jest nieakcentowane), a końcowe <b>g</b> czyta się zwykle [k]."
      },
      {
        tr: "Moja koleżanka z pracy potrzebuje pomocy. Chętnie jej pomogę, a jutro do niej zadzwonię.",
        why: "W <i>braucht</i> <b>au</b> brzmi [aʊ], a następujące po nim <b>ch</b> to [x]; w <i>sie</i> <b>s</b> jest dźwięczne [z]."
      }
    ]
  }
});
