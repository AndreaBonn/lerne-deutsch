/* ============================================================
   Teksty w języku ucznia (pl) do data/core/a1-03.js, jednostka a1-u08.
   Klucze wskazują id warstwy neutralnej; tablice łączą się po
   indeksie, więc ich długość musi zgadzać się z core.
   Sprawdza to scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("pl", {
  "unit:a1-u08": {
    title: "Rodzina i przyjaciele",
    grammarNote: "zaimki dzierżawcze · przymiotnik w orzeczeniu · stopień wyższy z als i so ... wie"
  },
  "lesson:a1-u08-l1": {
    theme: "Rodzina",
    title: "Moja matka, mój szef",
    objectives: [
      "mówić, do kogo ktoś należy, za pomocą mein, dein, sein, ihr, unser",
      "wybierać właściwą formę: mein, meine, meinen",
      "wyrażać właściciela imieniem: Annas Bruder"
    ],
    theory: [
      {
        h: "Zaimek dzierżawczy idzie za właścicielem i przyjmuje końcówki ein",
        p: "Zaimek dzierżawczy wybiera się według tego, <b>kto posiada</b>: <em>mein</em> (ja), <em>dein</em> (ty), <em>sein</em> (on), <em>ihr</em> (ona), <em>unser</em> (my). Potem przyjmuje końcówki <em>ein</em>, zależnie od <b>rzeczy posiadanej</b>: <em>mein Vater</em>, <em>meine Mutter</em>, <em>mein Kind</em>, <em>meine Eltern</em>. W bierniku rodzaju męskiego przybiera postać <em>meinen</em>: <em>Ich mag meinen Bruder</em>."
      },
      {
        contrast: "W polskim „jego” i „jej” są niezmienne i mówią, kto jest właścicielem: <em>jego matka</em>, <em>jej matka</em>. Niemiecki robi to samo w podstawie: <em>seine Mutter</em> to matka jego, <em>ihre Mutter</em> to matka jej. Ale „mój, moja, moje” zmienia się w polskim przez wszystkie przypadki i rodzaje (<em>mojego brata</em>, <em>moją siostrę</em>), a w niemieckim w bierniku zmienia się tylko rodzaj męski (<em>meinen</em>); żeński zostaje <em>meine</em>. Rodzajnika, tak jak w polskim, przed zaimkiem dzierżawczym nie ma: <em>mein Chef</em>, a nie „der mein Chef”. Pamiętaj, że <em>meine</em> odpowiada „moja” w mianowniku i „moją” w bierniku liczby pojedynczej oraz „moi/moje” w mianowniku i „moich/moje” w bierniku liczby mnogiej, zależnie od rodzaju polskiego rzeczownika: <em>meine Eltern</em> = moi rodzice."
      },
      {
        trap: "Nie myl <em>sein</em> (jego) z <em>ihr</em> (jej): to właściciel decyduje o podstawie, a rzecz posiadana o końcówce. <em>Seine Mutter</em> to jego matka, <em>ihre Mutter</em> to jej matka. Zwróć też uwagę: <em>Eltern</em> („rodzice”) występuje tylko w liczbie mnogiej, więc <em>meine Eltern</em>, a nie „mein Eltern”."
      },
      {
        h: "Imię: Annas Bruder",
        p: "Żeby powiedzieć „brat Anny”, wystarczy dodać <b>-s</b> do imienia, bez apostrofu, i postawić je przed osobą: <em>Annas Bruder</em>, <em>Peters Schwester</em>. Po polsku dopełniacz stoi po rzeczowniku (<em>brat Anny</em>), po niemiecku imię z <em>-s</em> stoi przed nim. Tak jak przy zaimku dzierżawczym, rodzajnika nie ma. Jeśli imię kończy się na <em>-s</em>, <em>-x</em> lub <em>-z</em>, stawia się sam apostrof: <em>Hans' Mutter</em>."
      },
      {
        tip: "Ucz się członków rodziny zawsze razem z zaimkiem dzierżawczym: <em>meine Mutter</em>, <em>mein Vater</em>, <em>meine Eltern</em>. W ten sposób rodzaj i liczba mnoga wchodzą do pamięci razem z rzeczownikiem."
      }
    ],
    grammar: {
      title: "Mein w mianowniku i bierniku",
      note: "Końcówki <b>ein</b>: w bierniku zmienia się tylko rodzaj męski (<em>meinen</em>). Ten sam schemat dotyczy <em>dein, sein, ihr, unser</em>.",
      table: {
        head: ["rodzaj", "mianownik", "biernik", "przykład"],
        rows: [
          ["męski", "mein", "meinen", "Ich mag meinen Bruder."],
          ["żeński", "meine", "meine", "Ich mag meine Schwester."],
          ["nijaki", "mein", "mein", "Ich mag mein Auto."],
          ["liczba mnoga", "meine", "meine", "Ich mag meine Eltern."]
        ]
      },
      examples: [
        { tr: "Moja matka ma na imię Anna." },
        { tr: "Mój szef jest sympatyczny." },
        { tr: "To jest nasza rodzina.", note: "Familie jest żeńskie: unsere" },
        { tr: "Lubię mojego brata.", note: "Bruder jest męski w bierniku: meinen" },
        { tr: "Gdzie mieszka twoja siostra?" },
        { tr: "Brat Anny ma na imię Paul.", note: "imię + -s, bez rodzajnika i bez apostrofu" }
      ]
    },
    vocab: [
      "rodzina",
      "matka",
      "ojciec",
      "rodzice (po niemiecku tylko liczba mnoga)",
      "brat",
      "siostra",
      "babcia",
      "dziadek",
      "wujek",
      "ciocia",
      "szef",
      "przyjaciółka, dziewczyna"
    ],
    exercises: [
      {
        q: "Jak powiesz „moja matka”?",
        opts: ["mein Mutter", "meine Mutter", "meinen Mutter"],
        why: "<i>Mutter</i> jest rodzaju żeńskiego, więc <b>meine</b>, jak <i>eine</i>."
      },
      {
        q: "Uzupełnij: „Das ist ___ Schwester.” (To jest moja siostra.)",
        hint: "mein + końcówka rodzaju żeńskiego",
        why: "<b>Meine Schwester</b>: rodzaj żeński, mianownik."
      },
      {
        q: "Uzupełnij: „Ich mag ___ Chef.” (Lubię mojego szefa.)",
        hint: "mein + biernik rodzaju męskiego",
        why: "<b>Meinen Chef</b>: po <i>mögen</i> jest biernik, a rodzaj męski się zmienia, jak <i>einen</i>."
      },
      {
        q: "Jak powiesz „jego matka” (matka jego)?",
        opts: ["seine Mutter", "ihre Mutter", "sein Mutter"],
        why: "Właściciel jest rodzaju męskiego, więc <b>sein</b>, a <i>Mutter</i> jest żeńskie: <b>seine Mutter</b>."
      },
      {
        q: "Które zdanie jest poprawne?",
        opts: ["Ich mag mein Vater.", "Ich mag meinen Vater.", "Ich mag meine Vater."],
        why: "<i>Vater</i> jest męski i stoi w bierniku: <b>meinen Vater</b>."
      },
      {
        q: "Wybierz ein albo eine: zaimek dzierżawczy przyjmuje te same końcówki.",
        why: "Zaimek dzierżawczy przyjmuje te same końcówki co <i>ein</i>: <i>ein Bruder → mein Bruder</i>, <i>eine Tante → meine Tante</i>.",
        items: ["brat", "siostra", "wujek", "ciocia", "szef", "przyjaciółka"]
      },
      {
        q: "Przetłumacz: „Moja siostra ma na imię Lena, a mój brat ma na imię Paul.”",
        why: "Przed zaimkiem dzierżawczym nie ma rodzajnika: <i>meine Schwester</i>, <i>mein Bruder</i>."
      },
      {
        q: "Uzupełnij: „To są moi rodzice. Mój ojciec ma na imię Jan.”",
        tr: "To są moi rodzice. Mój ojciec ma na imię Jan.",
        why: "<i>Eltern</i> jest w liczbie mnogiej: <b>meine</b>. <i>Vater</i> jest męski w mianowniku: <b>Mein</b>, z wielką literą na początku zdania."
      },
      {
        tr: "Moja matka ma na imię Eva, a mój ojciec ma na imię Jan.",
        why: "W <i>heißen</i> głoska <b>ß</b> to bezdźwięczne <b>s</b>, jak w „sam”."
      },
      {
        tr: "To jest moja rodzina: mój ojciec, moja matka i mój brat.",
        why: "<i>Familie</i> wymawia się /faˈmiːli̯ə/: pierwsze <b>i</b> jest długie i akcentowane; końcówka <b>-ie</b> to /i̯ə/, a nie długie <b>i</b>."
      }
    ]
  },
  "lesson:a1-u08-l2": {
    theme: "Wygląd",
    title: "Jak wygląda?",
    objectives: [
      "pytać i mówić, jak wygląda dana osoba, za pomocą Wie sieht ... aus?",
      "używać przymiotnika po sein bez jego zmiany",
      "opisywać włosy, oczy i dodatki za pomocą haben"
    ],
    theory: [
      {
        h: "Wie sieht er aus?",
        p: "Żeby zapytać o <b>wygląd</b>, używa się <em>Wie sieht er aus?</em> („jak on wygląda?”). Na razie naucz się całej formuły, bez rozkładania czasownika: <em>Wie sieht Paul aus?</em>, <em>Wie sieht deine Schwester aus?</em> Odpowiada się za pomocą <em>sein</em> i przymiotnika: <em>Er ist groß und schlank</em>. Albo za pomocą <em>haben</em>: <em>Er hat einen Bart</em>, <em>Sie hat eine Brille</em>."
      },
      {
        contrast: "W polskim przymiotnik zgadza się z rzeczownikiem: <em>wysoki, wysoka, wysocy, wysokie</em>. W niemieckim po <em>sein</em> przymiotnik jest <b>zawsze taki sam</b>: <em>Er ist groß</em>, <em>Sie ist groß</em>, <em>Sie sind groß</em>. Nie ma formy dla rodzaju żeńskiego ani dla liczby mnogiej."
      },
      {
        h: "Włosy i oczy są w liczbie mnogiej",
        p: "<em>Die Haare</em> i <em>die Augen</em> są w liczbie mnogiej, a czasownik idzie za nimi: <em>Seine Haare sind kurz</em>, <em>Ihre Augen sind grün</em>. Można też powiedzieć <em>Er hat kurze Haare</em>, ale ta forma, z przymiotnikiem przed rzeczownikiem, pojawi się później: na razie przymiotnik stoi po <em>sein</em>."
      },
      {
        trap: "Dla wzrostu osoby niemiecki używa <em>groß</em> i <em>klein</em>, a nie słów typu „wysoki” i „niski”: <em>Meine Schwester ist klein</em>. <em>Hoch</em> i <em>niedrig</em> mówi się o rzeczach, nie o wzroście człowieka, więc „Er ist hoch” jest błędem. <em>Klein</em> znaczy zarówno „mały”, jak i „niski”, a <em>groß</em> zarówno „duży”, jak i „wysoki”. Dla włosów jest <em>kurz</em>: <em>Seine Haare sind kurz</em>, a nie „Seine Haare sind klein”. Pamiętaj też: <em>die Brille</em> jest w liczbie pojedynczej (jedna para okularów), więc <em>Sie hat eine Brille</em>, choć po polsku „okulary” są w mnogiej."
      },
      {
        tip: "Zrób opis w trzech zdaniach: <em>Er ist ...</em>, <em>Er hat ...</em>, <em>Seine Haare sind ...</em>. Za pomocą <em>sein</em> i <em>haben</em> opiszesz prawie każdego."
      }
    ],
    grammar: {
      title: "Przymiotnik po sein się nie zmienia",
      note: "Ta sama forma dla rodzaju męskiego, żeńskiego, nijakiego i liczby mnogiej. Zmienia się tylko czasownik (<em>ist, sind</em>).",
      table: {
        head: ["podmiot", "czasownik", "przymiotnik", "przykład"],
        rows: [
          ["męski", "ist", "groß", "Mein Bruder ist groß."],
          ["żeński", "ist", "groß", "Meine Schwester ist groß."],
          ["nijaki", "ist", "groß", "Das Kind ist groß."],
          ["liczba mnoga", "sind", "groß", "Meine Eltern sind groß."]
        ]
      },
      examples: [
        { tr: "Jak wygląda Paul?", note: "formuła: Wie sieht ... aus?" },
        { tr: "Jest wysoki i szczupły." },
        { tr: "Jego oczy są brązowe.", note: "Augen jest w liczbie mnogiej: sind" },
        { tr: "Moja siostra jest niska i jasnowłosa.", note: "klein dla wzrostu" },
        { tr: "Ma brodę.", note: "haben + biernik: einen Bart" },
        { tr: "Jej włosy są długie." }
      ]
    },
    vocab: [
      "wysoki, duży",
      "mały; niski (wzrostem)",
      "młody",
      "stary, w podeszłym wieku",
      "szczupły",
      "jasnowłosy, blond",
      "długi",
      "krótki",
      "włosy (liczba mnoga)",
      "oczy (liczba mnoga)",
      "okulary (po niemiecku liczba pojedyncza: die Brille)",
      "broda"
    ],
    exercises: [
      {
        q: "Jak zapytasz „Jak on wygląda?”",
        opts: ["Wie ist er aus?", "Wie sieht er aus?", "Was sieht er aus?"],
        why: "Formuła to <b>Wie sieht er aus?</b> i nie rozkłada się jej."
      },
      {
        q: "Które zdanie jest poprawne?",
        opts: ["Die Schuhe sind rote.", "Meine Schwester ist kleine.", "Meine Schwester ist klein."],
        why: "Po <i>sein</i> przymiotnik zostaje bez zmian: <b>klein</b>."
      },
      {
        q: "Uzupełnij: „Seine Augen ___ braun.” (Jego oczy są brązowe.)",
        hint: "sein, podmiot w liczbie mnogiej",
        why: "<i>Augen</i> jest w liczbie mnogiej: <b>sind</b>."
      },
      {
        q: "Uzupełnij: „Sie ___ eine Brille.” (Ma okulary.)",
        hint: "haben, trzecia osoba liczby pojedynczej",
        why: "<b>Sie hat</b>: <i>haben</i> z <i>er/sie/es</i> daje <i>hat</i>."
      },
      {
        q: "Dopasuj każde słowo do jego znaczenia.",
        pairs: ["wysoki", "szczupły", "jasnowłosy", "krótki"]
      },
      {
        tr: "Moja siostra jest niska i jasnowłosa.",
        why: "Kolejność to podmiot, czasownik, przymiotniki: <i>Meine Schwester ist klein und blond</i>."
      },
      {
        q: "Przetłumacz: „Mój brat jest wysoki i ma brodę.”",
        why: "<i>Er ist groß und hat einen Bart</i>: <i>Bart</i> jest męski w bierniku, więc <i>einen</i>."
      },
      {
        q: "Uzupełnij tekst.",
        tr: "Anna jest niska i szczupła. Ma okulary, a jej włosy są długie.",
        why: "<i>Ist</i> i <i>hat</i> z <i>Anna/sie</i>; <i>Haare</i> jest w liczbie mnogiej, więc <i>sind</i>."
      },
      {
        tr: "Moja siostra jest wysoka i szczupła, a jej włosy są jasne.",
        why: "W <i>blond</i> głoska <b>o</b> jest krótka; w <i>Haare</i> <b>aa</b> to długie <b>a</b>."
      },
      {
        tr: "Mój ojciec jest wysoki, ma brodę i okulary.",
        why: "W <i>Brille</i> głoska <b>r</b> może być języczkowa (najczęstsza) albo dziąsłowa, jak w polskim; obie są standardowe, żadna nie jest błędna. Podwójne <b>ll</b> oznacza, że poprzedzające je <b>i</b> jest krótkie, a nie że spółgłoska jest wydłużona."
      }
    ]
  },
  "lesson:a1-u08-l3": {
    theme: "Charakter",
    title: "Sympatyczny czy niesympatyczny?",
    objectives: [
      "pytać i mówić, jaka jest dana osoba, za pomocą Wie ist ...?",
      "używać przymiotników określających charakter po sein",
      "zaprzeczać przymiotnikowi za pomocą nicht"
    ],
    theory: [
      {
        h: "Wie ist er? Charakter",
        p: "<em>Wie sieht er aus?</em> pyta o wygląd, <em>Wie ist er?</em> pyta o <b>charakter</b>: <em>Wie ist dein Chef?</em> – <em>Er ist sehr nett.</em> Tu także przymiotnik stoi po <em>sein</em> i się nie zmienia: <em>Meine Freundin ist lustig</em>, <em>Meine Eltern sind intelligent</em>."
      },
      {
        contrast: "Po polsku też pytasz dwoma pytaniami: „jaki on jest?” (charakter) i „jak wygląda?” (wygląd), i to dokładnie odpowiada <em>Wie ist er?</em> i <em>Wie sieht er aus?</em>. <em>Sympathisch</em> brzmi jak „sympatyczny” i w dużej mierze znaczy to samo. <em>Nett</em> to zwykle „miły”, a <em>freundlich</em> opisuje uprzejme, życzliwe zachowanie. Przeciwieństwo <em>freundlich</em> tworzy się przedrostkiem <em>un-</em>: <em>unfreundlich</em>. W polskim „nie” stoi przed czasownikiem (<em>nie jest miły</em>), a w niemieckim <em>nicht</em> stoi po czasowniku, przed przymiotnikiem: <em>Er ist nicht nett</em>."
      },
      {
        h: "Zaprzeczanie przymiotnikowi: nicht",
        p: "Jak widziałeś w jednostce 3, przymiotnikowi zaprzecza się za pomocą <strong>nicht</strong>, które stoi przed nim: <em>Er ist nicht unfreundlich</em>, <em>Sie ist nicht faul, sie ist sehr fleißig</em>. Za pomocą <em>aber</em> przeciwstawia się: <em>Mein Chef ist nett, aber zu ernst</em>."
      },
      {
        trap: "<em>Zu</em> przed przymiotnikiem znaczy „za, zbyt”, a nie „do”: <em>zu ernst</em> to „zbyt poważny”. I <em>nicht</em> nie zamienia się w <em>kein</em> przed przymiotnikiem: „Er ist kein nett” jest błędne; żeby zaprzeczyć przymiotnikowi po <em>sein</em>, używa się <em>nicht</em>: <em>Er ist nicht nett</em>."
      },
      {
        tip: "Żeby opisać osobę, zrób dwa ruchy: wygląd (<em>Wie sieht sie aus?</em>) i charakter (<em>Wie ist sie?</em>). Dwa różne pytania, dwie różne odpowiedzi."
      }
    ],
    grammar: {
      title: "Wie ist er? Wie sieht er aus?",
      note: "<b>Wie ist ...?</b> pyta o charakter, <b>Wie sieht ... aus?</b> o wygląd. W obu przypadkach przymiotnik się nie zmienia.",
      table: {
        head: ["pytanie", "odpowiedź", "przykład"],
        rows: [
          ["Wie ist dein Chef?", "sein + przymiotnik", "Er ist nett."],
          ["Wie sieht dein Chef aus?", "sein + przymiotnik; haben + rzeczownik w bierniku", "Er ist groß. Er hat einen Bart."],
          ["zaprzeczenie przymiotnika", "nicht + przymiotnik", "Er ist nicht unfreundlich."],
          ["za, zbyt", "zu + przymiotnik", "Er ist zu ernst."]
        ]
      },
      examples: [
        { tr: "Jaki jest twój szef?", note: "Wie ist ...? pyta o charakter" },
        { tr: "Jest bardzo miły." },
        { tr: "Moja przyjaciółka jest zabawna." },
        { tr: "Nie jest leniwa, jest pracowita.", note: "nicht przed przymiotnikiem" },
        { tr: "Mój szef jest miły, ale zbyt poważny." },
        { tr: "Paul nie jest niemiły.", note: "nicht unfreundlich: zaprzeczenie przymiotnika" }
      ]
    },
    vocab: [
      "miły, sympatyczny",
      "życzliwy, przyjazny",
      "niemiły, nieuprzejmy",
      "zabawny",
      "poważny",
      "spokojny",
      "sympatyczny, budzący sympatię",
      "inteligentny",
      "pracowity",
      "leniwy",
      "nieśmiały",
      "przyjaciel"
    ],
    exercises: [
      {
        q: "Jak zapytasz o charakter jego?",
        opts: ["Wie sieht er aus?", "Wie ist er?", "Wie hat er?"],
        why: "<b>Wie ist er?</b> pyta o charakter; <i>Wie sieht er aus?</i> o wygląd."
      },
      {
        q: "Jakie jest przeciwieństwo <i>freundlich</i>?",
        opts: ["unfreundlich", "fleißig", "ruhig"],
        why: "Przedrostek <b>un-</b> zaprzecza przymiotnikowi: <i>unfreundlich</i>."
      },
      {
        q: "Paul dużo pracuje. Jaki jest?",
        opts: ["Er ist faul.", "Er ist schüchtern.", "Er ist fleißig."],
        why: "<i>Fleißig</i> to ktoś, kto pracuje z zapałem; <i>faul</i> to jego przeciwieństwo."
      },
      {
        q: "Uzupełnij: „Anna ist ___ unfreundlich, sie ist sehr nett.”",
        hint: "zaprzeczenie przymiotnika",
        why: "Przymiotnikowi zaprzecza się za pomocą <b>nicht</b>."
      },
      {
        q: "Dopasuj każde słowo do jego znaczenia.",
        pairs: ["zabawny", "poważny", "leniwy", "nieśmiały"]
      },
      {
        tr: "Mój szef jest bardzo miły i spokojny.",
        why: "Podmiot, czasownik, przymiotniki: <i>Mein Chef ist sehr nett und ruhig</i>."
      },
      {
        q: "Przetłumacz: „Moja siostra nie jest nieśmiała, jest bardzo sympatyczna.”",
        why: "<i>Nicht schüchtern</i>: <i>nicht</i> stoi przed przymiotnikiem. Potem drugie zdanie z <i>sie ist ...</i>."
      },
      {
        q: "Uzupełnij: „Jaki jest twój szef? Jest miły, ale zbyt poważny.”",
        tr: "Jaki jest twój szef? Jest miły, ale zbyt poważny.",
        why: "<i>Wie ist ...?</i> i <i>ist</i> w odpowiedziach; <i>zu</i> przed przymiotnikiem znaczy „zbyt”."
      },
      {
        tr: "Mój przyjaciel jest bardzo zabawny, ale jego siostra jest poważna i spokojna.",
        why: "W <i>lustig</i> głoska <b>u</b> jest krótka, a końcowe <b>g</b> czyta się jak miękkie <i>ch</i>."
      },
      {
        tr: "Moja przyjaciółka nie jest leniwa, jest bardzo pracowita i sympatyczna.",
        why: "W <i>fleißig</i> głoska <b>ß</b> to bezdźwięczne <b>s</b>, a <b>ei</b> czyta się jak <i>aj</i>."
      }
    ]
  },
  "lesson:a1-u08-l4": {
    theme: "Porównanie",
    title: "Większy od ciebie",
    objectives: [
      "porównywać dwie osoby za pomocą stopnia wyższego i als",
      "mówić, że dwie rzeczy są takie same, za pomocą so ... wie",
      "używać nieregularnych form besser, mehr, lieber"
    ],
    theory: [
      {
        h: "Stopień wyższy: -er i als",
        p: "Żeby powiedzieć, że ktoś jest „bardziej ...”, dodaje się <strong>-er</strong> do przymiotnika, a drugi człon wprowadza się za pomocą <strong>als</strong>: <em>Er ist größer als du</em>. Wiele krótkich przymiotników przyjmuje przegłos: <em>alt → älter</em>, <em>jung → jünger</em>, <em>groß → größer</em>. Stopień wyższy, tak jak przymiotnik, po <em>sein</em> zostaje niezmienny."
      },
      {
        contrast: "Polski ma dwa sposoby: <em>wyższy niż ty</em> albo <em>wyższy od ciebie</em>. Niemiecki zna tylko pierwszy: <em>größer als du</em>, a „od ciebie” nie ma odpowiednika (nie mów „größer von dir”). <em>Als</em> odpowiada więc polskiemu „niż”. Dla równości polskie „tak ... jak” to dokładnie <em>so ... wie</em>: <em>so groß wie ich</em>. Stopień wyższy tworzy się w polskim końcówką <em>-szy</em>, w niemieckim <em>-er</em> i często z przegłosem. Formy nieregularne są też w polskim (<em>dobry → lepszy</em>, <em>dużo → więcej</em>), a polskiemu „chętniej” albo „wolę” odpowiada <em>lieber</em> (<em>Ich trinke lieber Tee</em> = „Wolę pić herbatę”)."
      },
      {
        h: "Równość: so ... wie",
        p: "Żeby powiedzieć, że dwie rzeczy są takie same, używa się <strong>so ... wie</strong> z przymiotnikiem prostym, bez <em>-er</em>: <em>Sie ist so groß wie ich</em>. Żeby zaprzeczyć: <em>Anna ist nicht so alt wie Paul</em>."
      },
      {
        trap: "Nie mieszaj obu konstrukcji: „größer wie du” i „so groß als du” to częste błędy. <em>Als</em> idzie ze stopniem wyższym (<em>-er</em>), <em>wie</em> idzie z <em>so</em>. Niektóre formy są nieregularne: <em>gut → besser</em>, <em>viel → mehr</em>, <em>gern → lieber</em>: <em>Ich trinke lieber Tee als Kaffee</em>."
      },
      {
        tip: "Gdy porównujesz, zapytaj siebie: są takie same czy różne? Takie same: <em>so ... wie</em>. Różne: <em>-er ... als</em>."
      }
    ],
    grammar: {
      title: "Stopień wyższy i równość",
      note: "<b>-er ... als</b> dla „bardziej niż”; <b>so ... wie</b> dla „tak samo jak”. Formy nieregularne trzeba zapamiętać.",
      table: {
        head: ["przymiotnik", "stopień wyższy", "przykład"],
        rows: [
          ["klein", "kleiner", "Ich bin kleiner als du."],
          ["alt", "älter", "Er ist älter als ich."],
          ["jung", "jünger", "Sie ist jünger als ich."],
          ["groß", "größer", "Er ist größer als du."],
          ["gut", "besser", "Du sprichst besser Deutsch."],
          ["gern", "lieber", "Ich trinke lieber Tee."]
        ]
      },
      examples: [
        { tr: "On jest wyższy od ciebie.", note: "größer als: -er + als" },
        { tr: "Ona jest tak wysoka jak ja.", note: "so groß wie: przymiotnik podstawowy + wie" },
        { tr: "Mój brat jest starszy od mojej siostry." },
        { tr: "Wolę pić herbatę niż kawę.", note: "gern → lieber" },
        { tr: "Mówisz po niemiecku lepiej ode mnie.", note: "gut → besser" },
        { tr: "Anna nie jest tak stara jak Paul.", note: "nicht so ... wie" }
      ]
    },
    vocab: [
      "niż (w porównaniu)",
      "tak ... jak",
      "starszy",
      "młodszy",
      "wyższy, większy",
      "mniejszy, niższy",
      "lepszy, lepiej",
      "więcej",
      "chętniej, raczej",
      "bliźniak",
      "różnica",
      "taki sam, w tym samym wieku lub rozmiarze"
    ],
    exercises: [
      {
        q: "Jak powiesz „większy od ciebie”?",
        opts: ["größer wie du", "größer als du", "groß als du"],
        why: "Stopień wyższy ma <b>-er</b>, a drugi człon wprowadza się za pomocą <b>als</b>."
      },
      {
        q: "Jak powiesz „tak duży jak ty”?",
        opts: ["so groß wie du", "so groß als du", "größer wie du"],
        why: "Równość tworzy się za pomocą <b>so ... wie</b> i przymiotnika bez <i>-er</i>."
      },
      {
        q: "Jaki jest stopień wyższy od <i>alt</i>?",
        opts: ["alter", "älter", "alterer"],
        why: "<b>Älter</b>: <i>a</i> przyjmuje przegłos."
      },
      {
        q: "Uzupełnij: „Paul ist ___ als ich.” (Paul jest wyższy ode mnie.)",
        hint: "groß, stopień wyższy",
        why: "<b>Größer</b>: <i>groß</i> + <i>-er</i>."
      },
      {
        q: "Uzupełnij: „Anna ist so alt ___ ich.” (Anna jest w moim wieku.)",
        hint: "równość",
        why: "Przy <i>so ... wie</i> słowo to <b>wie</b>."
      },
      {
        tr: "Mój brat jest starszy od mojej siostry.",
        why: "<i>Älter als</i>: kolejność to podmiot, czasownik, stopień wyższy, <i>als</i>, drugi człon."
      },
      {
        q: "Przetłumacz: „Mówisz po niemiecku lepiej ode mnie.”",
        why: "<i>Besser</i> i <i>als ich</i>: tu <i>ich</i> stoi w mianowniku, bo jest podmiotem domyślnego zdania: <i>als ich Deutsch spreche</i>."
      },
      {
        q: "Uzupełnij zdanie. Użyj jung w pierwszej luce i alt w drugiej.",
        tr: "Jestem młodszy od ciebie, ale ty jesteś starszy ode mnie.",
        why: "<i>Jünger als du</i>, <i>älter als ich</i>: przegłosy w <i>jung</i> i <i>alt</i>."
      },
      {
        tr: "Mój brat jest starszy ode mnie, ale ja jestem wyższy od niego.",
        why: "W <i>älter</i> głoska <b>ä</b> to szerokie „e”; w <i>größer</i> głoskę <b>ö</b> wymawia się, układając usta jak do „o”, a język jak do „e”."
      },
      {
        tr: "Moja siostra jest tak wysoka jak ja, ale jest młodsza.",
        why: "W <i>jünger</i> <b>j</b> czyta się jak polskie „j”, a <b>ü</b> wymawia się, układając usta jak do „u”, a język jak do „i”."
      }
    ]
  },
  "lesson:a1-u08-test": {
    theme: "Sprawdzian",
    title: "Sprawdzian z jednostki 8",
    objectives: ["sprawdzić zaimki dzierżawcze, przymiotniki po sein i stopień wyższy"],
    theory: [
      {
        p: "Dziesięć pytań z całej jednostki. Zaliczenie od 70%. Nie zaglądaj do lekcji w trakcie odpowiadania: jeśli czegoś nie pamiętasz, lepiej wrócić do powtórki."
      }
    ],
    exercises: [
      {
        q: "Uzupełnij: „Das ist ___ Tante.” (To jest moja ciocia.)",
        hint: "mein + końcówka rodzaju żeńskiego",
        why: "<b>Meine Tante</b>: rodzaj żeński, mianownik."
      },
      {
        q: "Uzupełnij: „Ich mag ___ Onkel.” (Lubię mojego wujka.)",
        hint: "mein + biernik rodzaju męskiego",
        why: "<b>Meinen Onkel</b>: rodzaj męski, biernik."
      },
      {
        q: "Uzupełnij: „Du bist älter ___ ich.” (Jesteś starszy ode mnie.)",
        hint: "drugi człon porównania",
        why: "Po stopniu wyższym stoi <b>als</b>."
      },
      {
        q: "Uzupełnij: „Sie ist so groß ___ ich.” (Jest tak wysoka jak ja.)",
        hint: "równość",
        why: "Przy <i>so ... wie</i> słowo to <b>wie</b>."
      },
      {
        q: "Jak powiesz „jej siostra” (siostra jej)?",
        opts: ["seine Schwester", "ihre Schwester", "ihr Schwester"],
        why: "Właściciel jest rodzaju żeńskiego, więc <b>ihr-</b>, a <i>Schwester</i> jest żeńskie: <b>ihre Schwester</b>."
      },
      {
        q: "Które zdanie jest poprawne?",
        opts: ["Meine Schwester ist kleine.", "Meine Schwester ist klein.", "Meine Schwester sind klein."],
        why: "Po <i>sein</i> przymiotnik jest niezmienny, a przy podmiocie w liczbie pojedynczej czasownik to <i>ist</i>."
      },
      {
        q: "Jakie jest przeciwieństwo <i>fleißig</i>?",
        opts: ["faul", "ernst", "freundlich"],
        why: "<b>Faul</b> (leniwy) to ktoś, kto nie pracuje z zapałem."
      },
      {
        q: "Jak powiesz „lepszy niż”?",
        opts: ["gut als", "besser als", "guter als"],
        why: "<i>Gut</i> ma nieregularny stopień wyższy <b>besser</b>."
      },
      {
        tr: "Mój wujek jest starszy od mojego ojca, ale nie jest tak poważny.",
        why: "<i>Älter als</i> i <i>nicht so ... wie</i>: dwie różne konstrukcje."
      },
      {
        tr: "Moja siostra jest wyższa ode mnie i jest bardzo sympatyczna.",
        why: "<i>Größer als ich</i>, potem <i>sehr sympathisch</i>: w <i>sympathisch</i> końcówka <b>sch</b> [ʃ] wymawia się jak polskie „sz”."
      }
    ]
  }
});
