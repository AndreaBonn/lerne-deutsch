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
  },
  "unit:a1-u09": {
    title: "Czas wolny",
    grammarNote: "czas teraźniejszy i dni · es regnet · gerade zamiast formy „właśnie coś robię” · für, ohne, um, durch, gegen · und, aber, oder, denn"
  },
  "lesson:a1-u09-l1": {
    theme: "Weekend",
    title: "Co robisz w weekend?",
    objectives: [
      "pytać i mówić, co się robi w weekend",
      "wybierać między am Samstag a samstags",
      "mówić o hobby za pomocą spielen, schwimmen, wandern, kochen"
    ],
    theory: [
      {
        h: "Czas teraźniejszy na zwyczaje i bliskie plany",
        p: "Niemiecki czas teraźniejszy służy do tego, co robisz zwykle, i do tego, co zrobisz niedługo: <em>Am Samstag spiele ich Fußball</em> (w sobotę gram w piłkę nożną). Czasownik zostaje na <b>drugim miejscu</b>: jeśli zaczynasz zdanie od <em>am Samstag</em>, podmiot przesuwa się za czasownik."
      },
      {
        contrast: "Polski odróżnia „w sobotę” (ta konkretna sobota) od „w soboty” (każdej soboty). Niemiecki ma na to dwie formy: <em>samstags</em> (z <em>-s</em>) wyraźnie oznacza zwyczaj, jak „w soboty”, natomiast <em>am Samstag</em> zależy od kontekstu: może to być jedna konkretna sobota, ale także sobota zwyczajowa (<em>Am Samstag spiele ich immer Fußball</em>). „W weekend” to <em>am Wochenende</em>: tak jak w polskim jest przyimek („w”), ale po niemiecku to <em>am</em>, a nie <em>in</em>."
      },
      {
        trap: "<em>Wochenende</em> jest rodzaju nijakiego (<em>das Wochenende</em>), a „weekend” po polsku jest rodzaju męskiego: polski rodzaj ci nie pomaga. Przy sportach i instrumentach niemiecki nie używa przyimka: <em>Fußball spielen</em>, <em>Gitarre spielen</em>, a polski mówi „grać <em>w</em> piłkę”, „grać <em>na</em> gitarze”."
      },
      {
        tip: "Żeby powiedzieć, że coś lubisz robić, dodaj <em>gern</em> po czasowniku: <em>Ich schwimme gern</em>. Do zapytania o plany najnaturalniejsze jest <em>Was machst du am Wochenende?</em>"
      }
    ],
    grammar: {
      title: "Kiedy: am, samstags, im",
      note: "<b>am</b> dla konkretnego dnia i pory dnia, <b>-s</b> dla wyraźnego zwyczaju (<b>am</b> może też oznaczać zwyczaj, zależnie od kontekstu), <b>im</b> dla pór roku.",
      table: {
        head: ["kiedy", "forma", "przykład"],
        rows: [
          ["konkretna sobota (albo zwyczajowa, zależnie od kontekstu)", "am Samstag", "Am Samstag spiele ich Fußball."],
          ["w każdą sobotę, wyraźny zwyczaj", "samstags", "Samstags schwimme ich gern."],
          ["w weekend", "am Wochenende", "Am Wochenende wandere ich."],
          ["wieczorem", "am Abend", "Am Abend koche ich."],
          ["w porze roku", "im Winter", "Im Winter tanzen wir oft."]
        ]
      },
      examples: [
        { tr: "Co robisz w weekend?", note: "am Wochenende" },
        { tr: "W sobotę gram w piłkę nożną.", note: "Fußball spielen bez przyimka" },
        { tr: "W soboty lubię pływać.", note: "samstags = w każdą sobotę" },
        { tr: "W niedzielę chodzę z przyjaciółmi na wycieczki piesze.", note: "wandern: chodzić po okolicy na wycieczkę" },
        { tr: "Wieczorem gotuję dla mojej rodziny." },
        { tr: "Zimą często tańczymy.", note: "im + pora roku" }
      ]
    },
    vocab: [
      "weekend",
      "hobby, zainteresowanie",
      "koncert",
      "film",
      "książka",
      "wycieczka",
      "grać (także na instrumencie)",
      "pływać",
      "chodzić na wycieczki piesze",
      "gotować",
      "tańczyć",
      "w soboty, w każdą sobotę"
    ],
    exercises: [
      {
        q: "Jak zapytasz przyjaciela, co robi w weekend?",
        opts: ["Was machst du am Wochenende?", "Was machst du im Wochenende?", "Was machst du an Wochenende?"],
        why: "Z weekendem używa się <b>am</b>: <i>am Wochenende</i>. <i>Im Wochenende</i> to błąd kogoś, kto myśli o „w”."
      },
      {
        q: "Jak powiesz „w każdą sobotę”?",
        opts: ["Im Samstag", "Der Samstag", "Samstags"],
        why: "<b>Samstags</b>, z <i>-s</i>, wyraźnie oznacza zwyczaj. <i>Am Samstag</i> zależy od kontekstu: zwykle chodzi o konkretną sobotę, ale może to być też zwyczaj."
      },
      {
        q: "Uzupełnij: „Ich ___ gern Fußball.” (grać, ja)",
        hint: "spielen, ich",
        why: "Z <i>ich</i> czasownik regularny kończy się na <b>-e</b>: <i>ich spiele</i>."
      },
      {
        q: "Uzupełnij: „Ich besuche ___ Sonntag meine Großmutter.” (w niedzielę)",
        hint: "przyimek przy konkretnym dniu",
        why: "Konkretny dzień wymaga <b>am</b>: <i>am Sonntag</i>."
      },
      {
        q: "Dopasuj każdy czasownik do jego znaczenia.",
        pairs: ["grać", "pływać", "chodzić na wycieczki piesze", "gotować"]
      },
      {
        q: "Przetłumacz: „W sobotę gram w piłkę nożną, a w niedzielę chodzę na wycieczkę pieszą.” (konkretne dni, użyj wandern)",
        why: "<i>Am Samstag spiele ich Fußball ...</i>: po okoliczniku czasu czasownik zostaje na drugim miejscu, a podmiot idzie za nim."
      },
      {
        q: "Uzupełnij dialog (użyj treffen).",
        tr: "Co robisz w weekend? Spotykam się z przyjaciółmi i idziemy do kina.",
        why: "Z <i>du</i> mówi się <i>machst</i>; <i>ich treffe</i> to pierwsza osoba od <i>treffen</i>; <i>ins</i> to <i>in das</i>."
      },
      {
        q: "Przyjaciel pyta cię o plany.",
        setting: "Rozmawiasz z przyjacielem przez telefon.",
        lines: [
          { tr: "Cześć! Co robisz w weekend?" },
          { tr: "Odpowiedz, że w sobotę grasz w piłkę nożną.", answerTr: "W sobotę gram w piłkę nożną." },
          { tr: "A w niedzielę?" },
          { tr: "Odpowiedz, że w niedzielę chodzisz na wycieczkę pieszą.", answerTr: "W niedzielę chodzę na wycieczkę pieszą." }
        ]
      },
      {
        tr: "W sobotę gram w piłkę nożną, a w niedzielę gotuję dla mojej rodziny.",
        why: "W <i>Fußball</i> litera <b>ß</b> oznacza bezdźwięczne <b>s</b>, a <b>u</b> jest długie."
      },
      {
        tr: "W sobotę tańczę, a w niedzielę chodzę na wycieczkę pieszą.",
        why: "W <i>tanze</i> litera <b>z</b> czyta się [ts], jak polskie „c”; w <i>wandere</i> litera <b>w</b> brzmi jak polskie „w”."
      }
    ]
  },
  "lesson:a1-u09-l2": {
    theme: "Pogoda",
    title: "Pada",
    objectives: [
      "mówić o pogodzie za pomocą es regnet, es schneit, es ist kalt",
      "używać es jako podmiotu w zdaniach o pogodzie",
      "pytać o temperaturę i ją podawać"
    ],
    theory: [
      {
        h: "Es: podmiot, którego po polsku nie ma",
        p: "Mówiąc o pogodzie, niemiecki wymaga podmiotu: <strong>es</strong>. <em>Es regnet</em> (pada deszcz), <em>Es schneit</em> (pada śnieg), <em>Es ist kalt</em> (jest zimno). <em>Es</em> nie oznacza żadnej rzeczy: tylko zajmuje miejsce podmiotu."
      },
      {
        contrast: "Po polsku mówi się „jest zimno”, „jest ciepło”, bez żadnego podmiotu, a przy deszczu podmiotem jest sam deszcz: „pada deszcz”. W niemieckim w zdaniach o pogodzie <em>es</em> się nie pomija: <em>Regnet</em> samo nie jest zdaniem. Nawet gdy zdanie zaczyna się od innego elementu, <em>es</em> zostaje i stoi za czasownikiem: <em>Heute regnet es</em>, a nie <em>Heute regnet</em>. Polskie „jest zimno” ma przysłówek, a niemieckie <em>Es ist kalt</em> ma przymiotnik <em>kalt</em> z czasownikiem <em>sein</em>."
      },
      {
        trap: "Zwróć uwagę na <em>die Sonne scheint</em>: tutaj podmiotem jest prawdziwa rzecz, <em>die Sonne</em>, i <em>es</em> nie jest potrzebne. Żeby powiedzieć „jest słonecznie”, mówi się natomiast <em>Es ist sonnig</em>. Pamiętaj też, że „pogoda” jest po polsku rodzaju żeńskiego, a <em>das Wetter</em> jest nijakie."
      },
      {
        tip: "Do temperatury: <em>Wie viel Grad sind es?</em> i <em>Es sind zwanzig Grad.</em> Po liczebniku, przy temperaturze, <em>Grad</em> się nie zmienia; zwykła liczba mnoga to <em>Grade</em>. Żeby zapytać o pogodę: <em>Wie ist das Wetter?</em>"
      }
    ],
    grammar: {
      title: "Es w zdaniach o pogodzie",
      note: "Podmiot <b>es</b> się nie pomija; gdy zdanie zaczyna się od innego elementu, stoi za czasownikiem.",
      table: {
        head: ["polski", "niemiecki", "przykład"],
        rows: [
          ["pada deszcz", "Es regnet.", "Heute regnet es nicht."],
          ["pada śnieg", "Es schneit.", "Im Winter schneit es oft."],
          ["jest zimno", "Es ist kalt.", "Heute ist es sehr kalt."],
          ["jest ciepło / gorąco", "Es ist warm / heiß.", "Im Sommer ist es warm."],
          ["jaka jest pogoda?", "Wie ist das Wetter?", "Wie ist das Wetter in Wien?"]
        ]
      },
      examples: [
        { tr: "Pada deszcz.", note: "es się nie pomija" },
        { tr: "Zimą często pada śnieg.", note: "es za czasownikiem" },
        { tr: "Dzisiaj jest bardzo zimno.", note: "sein, a nie machen" },
        { tr: "Dzisiaj nie pada.", note: "nie pada deszcz" },
        { tr: "Jaka jest pogoda?", note: "das Wetter jest nijakie" },
        { tr: "Jest dwadzieścia stopni.", note: "Po liczebniku, przy temperaturze, Grad się nie zmienia: zwanzig Grad; zwykła liczba mnoga to Grade." }
      ]
    },
    vocab: [
      "pogoda",
      "padać (o deszczu)",
      "padać (o śniegu)",
      "słońce",
      "chmura",
      "wiatr",
      "zimny, zimno",
      "ciepły (przyjemnie), ciepło",
      "bardzo gorąco, upalny",
      "słoneczny",
      "wietrzny",
      "stopień"
    ],
    exercises: [
      {
        q: "Jak powiesz „pada deszcz”?",
        opts: ["Es regnet.", "Regnet.", "Sie regnet."],
        why: "W niemieckim podmiot <b>es</b> się nie pomija: <i>Es regnet</i>."
      },
      {
        q: "Które zdanie jest poprawne?",
        opts: ["Heute es regnet.", "Heute regnet es.", "Heute regnet."],
        why: "Czasownik jest na drugim miejscu, a <i>es</i> zostaje, za czasownikiem."
      },
      {
        q: "Uzupełnij: „Im Winter ___ es oft.” (padać o śniegu)",
        hint: "schneien, es",
        why: "<b>Schneit</b>: <i>schneien</i> w trzeciej osobie, z <i>es</i>."
      },
      {
        q: "Uzupełnij: „Heute ist ___ sehr kalt.” (Dzisiaj jest bardzo zimno.)",
        hint: "podmiot zdań o pogodzie",
        why: "<b>Es</b> jest podmiotem i w zdaniach o pogodzie się go nie pomija."
      },
      {
        q: "Dopasuj każde słowo do jego znaczenia.",
        pairs: ["zimny", "bardzo gorąco", "słoneczny", "wietrzny"]
      },
      {
        tr: "Dzisiaj jest bardzo zimno.",
        why: "<i>Heute ist es sehr kalt</i>: czasownik na drugim miejscu. Poprawne jest też <i>Es ist heute sehr kalt</i>."
      },
      {
        q: "Przetłumacz: „Dzisiaj pada deszcz i jest zimno.”",
        why: "Dwa zdania, dwa <i>es</i>: <i>es regnet</i> i <i>es ist kalt</i>. Po <i>und</i> wspólny podmiot można pominąć: <i>Heute regnet es und ist kalt</i>."
      },
      {
        q: "Uzupełnij dialog (trzecia luka: zimno).",
        tr: "Jaka jest dzisiaj pogoda? Pada deszcz i jest zimno.",
        why: "<i>Das Wetter</i> jest nijakie. Przy <i>regnet</i> i <i>ist kalt</i> podmiot <i>es</i> jest zawsze."
      },
      {
        tr: "Dzisiaj świeci słońce, ale nie jest ciepło.",
        why: "W <i>scheint</i> grupa <b>sch</b> czyta się [ʃ], jak polskie „sz”, a <b>ei</b> jak „aj”."
      },
      {
        tr: "Zimą często pada śnieg i jest bardzo zimno.",
        why: "W <i>schneit</i> grupa <b>sch</b> to [ʃ] (polskie „sz”), po niej <b>n</b>, a <b>ei</b> czyta się jak „aj”."
      }
    ]
  },
  "lesson:a1-u09-l3": {
    theme: "Teraz",
    title: "Czytam właśnie",
    objectives: [
      "mówić, co się robi teraz, za pomocą czasu teraźniejszego i gerade",
      "używać im Moment jako zamiennika gerade",
      "odmieniać lesen i sehen (oraz fernsehen)"
    ],
    theory: [
      {
        h: "Gerade + czas teraźniejszy",
        p: "Niemiecki nie ma osobnej formy na „właśnie coś robię”. Żeby powiedzieć, że robisz coś teraz, używasz czasu teraźniejszego i dodajesz <strong>gerade</strong> (właśnie) albo <strong>im Moment</strong> (w tej chwili): <em>Ich lese gerade</em>. Zwykle <em>gerade</em> stoi za czasownikiem."
      },
      {
        contrast: "Pod tym względem niemiecki jest bliski polskiemu: po polsku „czytam” znaczy zarówno „zwykle czytam”, jak i „czytam teraz”, a „teraz” albo „właśnie” to tylko wskazówka. Tak samo <em>Ich lese</em>. Nowością jest co innego: niemiecki czasownik <em>lesen</em> zmienia samogłoskę w drugiej i trzeciej osobie (<em>du liest</em>), a polskie „czytasz” jest regularne. W niektórych regionach słyszy się też <em>Ich bin am Lesen</em>, ale na razie nie jest ci potrzebne."
      },
      {
        h: "Lesen i sehen zmieniają samogłoskę",
        p: "W drugiej i trzeciej osobie liczby pojedynczej <em>lesen</em> i <em>sehen</em> zmieniają <b>e → ie</b>: <em>du liest</em>, <em>er liest</em>, <em>du siehst</em>, <em>er sieht</em>. <em>Fernsehen</em> jest rozdzielne: <em>Er sieht gerade fern</em>. W polskim przedrostki się nie oddzielają od czasownika, w niemieckim <em>fern</em> idzie na koniec zdania."
      },
      {
        trap: "Samo <em>Ich lese</em> może znaczyć „czytam” (zwykle) albo „czytam teraz”. Jeśli chcesz, żeby było jasne, że to teraz, dodaj <em>gerade</em>. Używaj jednego odmienionego czasownika w czasie teraźniejszym: <em>ich lese gerade</em>. Nie dodawaj <em>bin</em>."
      },
      {
        tip: "Pytanie i odpowiedź mają ten sam schemat: <em>Was machst du gerade? Ich lese gerade.</em> Przysłówki częstotliwości (<em>immer, oft, manchmal, nie</em>) stoją za odmienionym czasownikiem i podmiotem-zaimkiem: <em>Ich lese oft</em>, <em>Heute lese ich oft</em>. W polskim szyk jest swobodniejszy, w niemieckim czasownik trzyma drugie miejsce."
      }
    ],
    grammar: {
      title: "Lesen i sehen w czasie teraźniejszym",
      note: "<b>e → ie</b> z <em>du</em> i <em>er/sie/es</em>. Z <b>gerade</b> znaczy „teraz”.",
      table: {
        head: ["osoba", "lesen", "sehen"],
        rows: [
          ["ich", "lese", "sehe"],
          ["du", "liest", "siehst"],
          ["er / sie / es", "liest", "sieht"],
          ["wir", "lesen", "sehen"],
          ["ihr", "lest", "seht"],
          ["sie / Sie", "lesen", "sehen"]
        ]
      },
      examples: [
        { tr: "Czytam właśnie książkę.", note: "czas teraźniejszy + gerade" },
        { tr: "Co teraz robisz?", note: "gerade = w tej chwili" },
        { tr: "On ogląda telewizję.", note: "fernsehen: fern na końcu" },
        { tr: "W tej chwili piszę wiadomość.", note: "im Moment na pierwszym miejscu: czasownik idzie za nim" },
        { tr: "Słuchamy piosenki." },
        { tr: "Ona właśnie rozmawia przez telefon." }
      ]
    },
    vocab: [
      "właśnie, teraz",
      "w tej chwili",
      "czytać",
      "słuchać",
      "pisać",
      "telefonować",
      "oglądać telewizję",
      "uczyć się",
      "gazeta",
      "telefon komórkowy",
      "wiadomość",
      "piosenka"
    ],
    exercises: [
      {
        q: "Jak powiesz „czytam właśnie” (teraz)?",
        opts: ["Ich lese gerade.", "Ich bin gerade lesend.", "Ich lesen gerade."],
        why: "Używa się czasu teraźniejszego z <b>gerade</b>: nie ma formy z „być”."
      },
      {
        q: "Co znaczy „Was machst du gerade?”",
        opts: ["Co robisz zwykle?", "Co robisz teraz?", "Co robiłeś wczoraj?"],
        why: "<i>Gerade</i> znaczy „w tej chwili”."
      },
      {
        q: "Uzupełnij: „Du ___ gerade ein Buch.” (czytać)",
        hint: "lesen, du",
        why: "<i>Lesen</i> z <i>du</i> zmienia <b>e → ie</b>: <b>liest</b>."
      },
      {
        q: "Uzupełnij: „Er ___ gerade fern.” (oglądać telewizję, on)",
        hint: "fernsehen, er",
        why: "<i>Fernsehen</i> jest rozdzielne i tak jak <i>sehen</i> zmienia <b>e → ie</b>: <b>sieht</b>, a <i>fern</i> idzie na koniec."
      },
      {
        q: "Uzupełnij: „Wir ___ gerade ein Lied.” (słuchać)",
        hint: "hören, wir",
        why: "Z <i>wir</i> czas teraźniejszy od <i>hören</i> to <b>wir hören</b>: forma jest taka sama jak bezokolicznik."
      },
      {
        tr: "Piszę teraz wiadomość.",
        why: "<i>Ich schreibe gerade eine Nachricht</i>. Poprawne jest też <i>Gerade schreibe ich eine Nachricht</i>, ale wtedy podmiot idzie za czasownikiem."
      },
      {
        q: "Przetłumacz: „Mój brat czyta właśnie gazetę.” (użyj gerade)",
        why: "<i>Mein Bruder liest gerade die Zeitung</i>: z <i>er</i> i <i>Bruder</i> samogłoska się zmienia, <i>liest</i>."
      },
      {
        q: "Uzupełnij: „Co teraz robisz? Czytam książkę, a mój brat ogląda telewizję.”",
        tr: "Co teraz robisz? Czytam książkę, a mój brat ogląda telewizję.",
        why: "<i>Machst</i>, <i>lese</i>, <i>sieht ... fern</i>: żadnej formy z „być”, tylko czas teraźniejszy z <i>gerade</i>."
      },
      {
        tr: "Ja właśnie czytam, a mój brat w tej chwili ogląda telewizję.",
        why: "W <i>sieht</i> litery <b>ie</b> oznaczają długie <b>i</b>, a <b>h</b> się nie wymawia; w wymowie standardowej początkowe <b>s</b> jest dźwięczne, jak polskie „z”."
      },
      {
        tr: "Piszę wiadomość i słucham piosenki.",
        why: "W <i>höre</i> litera <b>ö</b> jest długa; nie ma jej w polskim, wymawia się ją z ustami jak do „o”, ale językiem jak do „e”. W <i>Nachricht</i> pierwsze <b>ch</b> jest twarde [x], jak polskie „ch”, a drugie miękkie [ç]."
      }
    ]
  },
  "lesson:a1-u09-l4": {
    theme: "Zaproszenie",
    title: "Idziemy do kina?",
    objectives: [
      "proponować, przyjmować i odrzucać zaproszenie",
      "używać für, ohne, um, durch, gegen z biernikiem",
      "łączyć zdania za pomocą und, aber, oder, denn"
    ],
    theory: [
      {
        h: "Proponować, przyjmować, odrzucać",
        p: "Żeby zaproponować: <em>Gehen wir ins Kino?</em> albo <em>Hast du Lust?</em> Żeby przyjąć: <em>Ja, gern!</em>, <em>Gute Idee!</em> Żeby grzecznie odmówić: <em>Leider kann ich nicht</em> albo <em>Tut mir leid</em>, a potem powód z <em>denn</em>. <em>Ins</em> to <em>in das</em>: tu jest to formuła do zapamiętania w tej postaci."
      },
      {
        h: "Pięć przyimków z biernikiem",
        p: "<strong>für</strong> (dla), <strong>ohne</strong> (bez), <strong>um</strong> (wokół; z godzinami, o), <strong>durch</strong> (przez), <strong>gegen</strong> (przeciw) zawsze wymagają <b>biernika</b>. W porównaniu z mianownikiem rodzajniki zmieniają formę tylko w rodzaju męskim: <em>der → den</em>, <em>ein → einen</em>. Zaimki mają własne formy biernika. <em>Die Karte ist für den Freund</em>, <em>Wir gehen durch den Park</em>. Z zaimkami: <em>für mich, für dich, ohne ihn, ohne sie</em>."
      },
      {
        contrast: "Polskie przyimki wymagają różnych przypadków: „dla ciebie” i „bez niego” to dopełniacz, „przez park” to biernik, „przeciwko planowi” to celownik. Niemiecka piątka ma jeden przypadek, biernik, i widać go tylko w rodzaju męskim: <em>für den Freund</em>, <em>ohne meinen Bruder</em>; w żeńskim i nijakim różnicy nie widać: <em>für die Freundin</em>, <em>für das Kind</em>. „O ósmej” mówi się z <em>um</em>: <em>um acht Uhr</em>."
      },
      {
        h: "Und, aber, oder, denn",
        p: "Te cztery słowa łączą dwa zdania i <b>nie przesuwają czasownika</b>: <em>Ich bin müde, aber ich gehe ins Kino</em>. Po <em>und</em>, <em>oder</em> i <em>aber</em> identyczny podmiot można pominąć: <em>Ich gehe ins Kino und sehe einen Film</em>. Po <em>denn</em> podmiot zawsze się powtarza."
      },
      {
        trap: "Polskie „bo” jest zwykle odpowiednikiem <em>denn</em>: <em>Ich komme nicht, denn ich muss arbeiten</em> („Nie przyjdę, bo muszę pracować”). Różnica w tym, że w niemieckim czasownik po <em>denn</em> musi zostać na drugim miejscu. Błędne są <em>denn ich arbeiten muss</em> (czasownik na końcu) i <em>denn muss ich arbeiten</em> (czasownik na pierwszym miejscu); gdy na początku stoi inny element, czasownik zostaje drugi: <em>denn morgen muss ich arbeiten</em>. Inne słowo na „ponieważ”, <em>weil</em>, wysyła czasownik na koniec: pojawi się później. Uważaj też na <em>gegen</em>: znaczy „przeciw”, ale z godzinami także „około” (<em>gegen acht Uhr</em>, koło ósmej)."
      },
      {
        tip: "Żeby grzecznie odmówić: <em>Leider</em> + powód z <em>denn</em>. Przed <em>aber</em> i <em>denn</em> przecinek jest obowiązkowy, tak jak przed polskimi „ale” i „bo”."
      }
    ],
    grammar: {
      title: "Przyimki z biernikiem i spójniki",
      note: "<b>für, ohne, um, durch, gegen</b> + biernik; <b>und, aber, oder, denn</b> nie przesuwają czasownika.",
      table: {
        head: ["przyimek", "znaczenie", "przykład"],
        rows: [
          ["für", "dla", "Die Karte ist für dich."],
          ["ohne", "bez", "Ich trinke Kaffee ohne Zucker."],
          ["um", "wokół; o (przy godzinach)", "Der Film beginnt um acht Uhr."],
          ["durch", "przez", "Wir gehen durch den Park."],
          ["gegen", "przeciw", "Ich bin gegen den Plan."]
        ]
      },
      examples: [
        { tr: "Idziemy do kina?", note: "ins = in das" },
        { tr: "Bilet jest dla ciebie.", note: "für + biernik" },
        { tr: "Piję kawę bez cukru.", note: "ohne + rzeczownik niepoliczalny: tu Zucker oznacza substancję w ogóle, więc zwykle bez rodzajnika" },
        { tr: "Film zaczyna się o ósmej.", note: "um z godzinami" },
        { tr: "Idziemy przez park, ale pada deszcz.", note: "aber nie przesuwa czasownika" },
        { tr: "Nie przyjdę, bo muszę pracować.", note: "denn nie przesuwa czasownika: zostaje na drugim miejscu" }
      ]
    },
    vocab: [
      "kino",
      "bilet (także: karta, kartka)",
      "pomysł",
      "propozycja",
      "ochota",
      "niestety",
      "dla",
      "bez",
      "wokół; o (przy godzinach)",
      "przez",
      "przeciw",
      "bo (podaje powód)"
    ],
    exercises: [
      {
        q: "Jak zaproponujesz przyjacielowi pójście do kina?",
        opts: ["Gehen wir ins Kino?", "Wir ins Kino gehen?", "Gehen wir an Kino?"],
        why: "Propozycja to pytanie z czasownikiem na pierwszym miejscu: <i>Gehen wir ...?</i> <i>Ins</i> to <i>in das</i>."
      },
      {
        q: "Jak odmówisz i podasz powód?",
        opts: ["Leider nicht, denn muss ich arbeiten.", "Leider nicht, denn ich arbeiten muss.", "Leider nicht, denn ich muss arbeiten."],
        why: "<b>Denn</b> nie zajmuje miejsca w zdaniu, które po nim następuje: odmieniony czasownik zostaje na drugim miejscu, jak w <i>denn ich muss arbeiten</i> (ale także <i>denn morgen muss ich arbeiten</i>). Dwie pozostałe opcje mają czasownik na końcu albo na pierwszym miejscu."
      },
      {
        q: "Uzupełnij: „Die Karte ist ___ dich.” (dla)",
        hint: "dla + biernik",
        why: "<b>Für</b> wymaga biernika: <i>für dich</i>."
      },
      {
        q: "Uzupełnij: „Ich trinke Kaffee ___ Zucker.” (bez)",
        hint: "bez",
        why: "<b>Ohne</b> + biernik; przy rzeczowniku niepoliczalnym, takim jak <i>Zucker</i>, rodzajnika zwykle brak."
      },
      {
        q: "Dopasuj każdy przyimek do jego znaczenia.",
        pairs: ["dla", "bez", "przez", "przeciw"]
      },
      {
        tr: "Idziemy przez park.",
        why: "<i>Wir gehen durch den Park</i>: <i>durch</i> + biernik, <i>den</i>. Poprawne jest też <i>Durch den Park gehen wir</i>."
      },
      {
        q: "Przetłumacz: „Nie przyjdę, bo muszę pracować.” (użyj denn)",
        why: "<i>Ich komme nicht, denn ich muss arbeiten</i>: po <i>denn</i> odmieniony czasownik zostaje na drugim miejscu."
      },
      {
        q: "Uzupełnij dialog (druga luka: bo).",
        tr: "Idziemy do kina? Niestety nie mogę, bo muszę pracować. Ale jutro mam czas.",
        why: "<i>Ins</i> to <i>in das</i>; <i>denn</i> podaje powód i nie przesuwa czasownika; <i>ich habe Zeit</i> używa <i>haben</i>."
      },
      {
        tr: "Idziemy do kina? Niestety nie mogę, bo muszę pracować.",
        why: "W <i>leider</i> litery <b>ei</b> czyta się jak „aj”, a <b>d</b> jest dźwięczne; w <i>Kino</i> pierwsze <b>i</b> jest długie."
      },
      {
        tr: "Dobry pomysł! Idziemy do kina o ósmej?",
        why: "W <i>Uhr</i> litera <b>h</b> się nie wymawia, a <b>u</b> jest długie; w <i>Idee</i> litery <b>ee</b> oznaczają długie <b>e</b>."
      }
    ]
  },
  "lesson:a1-u09-test": {
    theme: "Sprawdzian",
    title: "Sprawdzian z jednostki 9",
    objectives: ["sprawdzić es, gerade, przyimki z biernikiem i spójniki"],
    theory: [
      {
        p: "Dziesięć pytań z całej jednostki. Zaliczasz przy 70%. Nie zaglądaj do lekcji, odpowiadając: jeśli czegoś nie pamiętasz, lepiej wrócić do powtórki."
      }
    ],
    exercises: [
      {
        q: "Uzupełnij: „Im Winter schneit ___ oft.” (Zimą często pada śnieg.)",
        hint: "podmiot zdań o pogodzie",
        why: "<b>Es</b> jest podmiotem i się go nie pomija."
      },
      {
        q: "Uzupełnij: „Die Karte ist ___ meinen Bruder.” (dla)",
        hint: "dla + biernik",
        why: "<b>Für</b> + biernik: <i>meinen Bruder</i>."
      },
      {
        q: "Uzupełnij: „Ich komme nicht, ___ ich muss arbeiten.” (bo)",
        hint: "podaje powód, czasownik zostaje na drugim miejscu",
        why: "<b>Denn</b> nie przesuwa czasownika."
      },
      {
        q: "Uzupełnij: „Wir gehen ___ den Park.” (przez)",
        hint: "przez",
        why: "<b>Durch</b> + biernik: <i>den Park</i>."
      },
      {
        q: "Które zdanie znaczy „czytam teraz”?",
        opts: ["Ich bin lesen.", "Ich lesen gerade.", "Ich lese gerade."],
        why: "Czas teraźniejszy z <b>gerade</b>: <i>ich lese gerade</i>."
      },
      {
        q: "Które zdanie jest poprawne?",
        opts: ["Er geht ohne ich ins Kino.", "Er geht ohne mich ins Kino.", "Er geht ohne mir ins Kino."],
        why: "<i>Ohne</i> wymaga biernika: <b>mich</b>."
      },
      {
        q: "Które zdanie jest poprawne?",
        opts: ["Ich bleibe zu Hause, denn ich bin müde.", "Ich bleibe zu Hause, denn ich müde bin.", "Ich bleibe zu Hause, denn bin ich müde."],
        why: "<i>Denn</i> nie zajmuje miejsca: odmieniony czasownik zostaje na drugim miejscu, jak w <i>denn ich bin müde</i> (ale także <i>denn heute bin ich müde</i>). Dwie pozostałe opcje mają czasownik na końcu albo na pierwszym miejscu."
      },
      {
        tr: "W sobotę idziemy do kina.",
        why: "<i>Am Samstag gehen wir ins Kino</i>: czasownik na drugim miejscu. Poprawne jest też <i>Wir gehen am Samstag ins Kino</i>."
      },
      {
        tr: "Pada deszcz i jest zimno, ale ja idę do kina.",
        why: "W <i>regnet</i> wymawia się [ɡn]: <b>g</b> oraz zwykłe <b>n</b>, jak w polskim „noc”; w <i>Kino</i> pierwsze <b>i</b> jest długie."
      },
      {
        tr: "Niestety nie mogę, bo o ósmej muszę pracować.",
        why: "W <i>muss</i> litery <b>ss</b> oznaczają bezdźwięczne <b>s</b>, a <b>u</b> jest krótkie; <i>arbeiten</i> to bezokolicznik na końcu zdania."
      }
    ]
  }
});
