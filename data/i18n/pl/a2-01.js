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
  }
});
