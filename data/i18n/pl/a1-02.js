/* ============================================================
   Teksty w języku ucznia (pl) do data/core/a1-02.js, jednostki a1-u04, a1-u05 i a1-u06.
   Klucze wskazują id warstwy neutralnej; tablice łączą się po
   indeksie, więc ich długość musi zgadzać się z core.
   Sprawdza to scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("pl", {
  "unit:a1-u04": {
    title: "Kupowanie ubrań",
    grammarNote: "orzecznik przymiotnikowy · dieser i welcher · ihn, sie, es · sehr, zu, viel"
  },
  "lesson:a1-u04-l1": {
    theme: "Ubrania i kolory",
    title: "Opisywanie ubrania: kolor i forma niezmienna",
    objectives: [
      "nazywać najczęstsze części garderoby razem z rodzajnikiem",
      "mówić, jakiego koloru jest ubranie, za pomocą sein + przymiotnik",
      "zapamiętać, że przymiotnik po sein nie przyjmuje żadnej końcówki"
    ],
    theory: [
      {
        h: "Kolor po „ist”: przymiotnik się nie zmienia",
        p: "Żeby powiedzieć, jaka jest jakaś rzecz, używa się <strong>sein</strong> i przymiotnika: <em>Der Pullover ist rot</em>, <em>Die Jacke ist blau</em>, <em>Das Hemd ist weiß</em>. Przymiotnik stojący po czasowniku nazywa się <em>orzecznikiem</em> i zawsze zostaje taki sam: żadnej końcówki, niezależnie od rodzaju rzeczownika. Zmienia się tylko czasownik, który w liczbie mnogiej przyjmuje postać <em>sind</em>: <em>Die Schuhe sind schwarz</em>."
      },
      {
        contrast: "W polskim przymiotnik w orzeczeniu zgadza się z podmiotem w rodzaju i liczbie: <em>sweter jest czerwony</em>, <em>kurtka jest czerwona</em>, <em>buty są czerwone</em>. W niemieckim po <em>sein</em> jest jedna forma: <em>rot</em>. Rodzaj rzeczownika jest ci potrzebny tylko do wyboru rodzajnika (<em>der, die, das</em>), a nie do wyboru koloru. Pamiętaj też, że polski nie ma rodzajników, więc każdy niemiecki rzeczownik uczysz się od razu z rodzajnikiem."
      },
      {
        h: "Części garderoby z rodzajnikiem",
        p: "Każdy rzeczownik ucz się z rodzajnikiem, jak już wiesz: <em>der Pullover</em>, <em>die Jacke</em>, <em>das Hemd</em>, <em>der Rock</em>, <em>das Kleid</em>. Rodzajnika nie da się odgadnąć z rodzaju rzeczy: <em>die Hose</em> jest w liczbie pojedynczej i oznacza jedną parę spodni, podczas gdy po polsku „spodnie” występują tylko w liczbie mnogiej. <em>Die Schuhe</em> to liczba mnoga od <em>der Schuh</em> (zwykle mówi się o parze)."
      },
      {
        trap: "Nie pisz „Die Jacke ist rote” ani „Der Pullover ist roter”: po <em>ist</em> przymiotnik zostaje bez zmian. Końcówki pojawiają się dopiero wtedy, gdy przymiotnik stoi <em>przed</em> rzeczownikiem (<em>der rote Pullover</em>): to zobaczysz później, teraz nie jest ci potrzebne."
      },
      {
        tip: "Opisz na głos trzy ubrania, które masz w domu: <em>Die Hose ist blau</em>, <em>Der Pullover ist grün</em>, <em>Das Hemd ist weiß</em>. Trzy ubrania, trzy kolory, trzy zdania."
      }
    ],
    grammar: {
      title: "Przymiotnik po sein",
      note: "Przymiotnik w orzeczeniu jest <b>niezmienny</b>: zmienia się tylko forma <em>sein</em> (<em>ist</em> / <em>sind</em>).",
      table: {
        head: ["rodzaj", "zdanie"],
        rows: [
          ["męski", "Der Pullover ist rot."],
          ["żeński", "Die Jacke ist blau."],
          ["nijaki", "Das Hemd ist weiß."],
          ["liczba mnoga", "Die Schuhe sind schwarz."]
        ]
      },
      examples: [
        { tr: "Sweter jest czerwony.", note: "der Pullover: rodzaj męski" },
        { tr: "Kurtka jest niebieska.", note: "die Jacke: rodzaj żeński, żadnej końcówki" },
        { tr: "Koszula jest biała.", note: "das Hemd: rodzaj nijaki" },
        { tr: "Buty są czarne.", note: "liczba mnoga: sind, ale schwarz zostaje takie samo" },
        { tr: "Spódnica jest zielona." },
        { tr: "Sukienka jest żółta." }
      ]
    },
    vocab: [
      "sweter",
      "kurtka",
      "koszula",
      "spodnie (po niemiecku liczba pojedyncza: die Hose)",
      "but",
      "koszulka, T-shirt",
      "spódnica",
      "sukienka",
      "czerwony",
      "niebieski",
      "czarny",
      "biały",
      "zielony",
      "żółty"
    ],
    exercises: [
      {
        q: "Jak powiesz „Kurtka jest niebieska”?",
        opts: ["Die Jacke ist blaue.", "Die Jacke ist blau.", "Die Jacke blau ist."],
        why: "Po <i>ist</i> przymiotnik zostaje bez zmian, a czasownik stoi na drugim miejscu: <b>Die Jacke ist blau.</b>"
      },
      {
        q: "Które zdanie jest poprawne?",
        opts: ["Die Schuhe ist schwarz.", "Die Schuhe sind schwarze.", "Die Schuhe sind schwarz."],
        why: "Podmiot jest w liczbie mnogiej, więc <b>sind</b>; przymiotnik w orzeczeniu zostaje <i>schwarz</i>."
      },
      {
        q: "Jaki kolor oznacza „weiß”?",
        opts: ["biały", "czarny", "żółty"],
        why: "<i>Weiß</i> znaczy „biały”. Pisze się z <b>ß</b> i czyta /vaɪs/: <b>ß</b> to bezdźwięczne „s”, a nie podwójna spółgłoska."
      },
      {
        q: "Uzupełnij: „Das Hemd ___ weiß.”",
        hint: "sein, trzecia osoba liczby pojedynczej",
        why: "<i>Das Hemd</i> jest w liczbie pojedynczej: <b>ist</b>."
      },
      {
        q: "Uzupełnij: „Die Schuhe ___ schwarz.”",
        hint: "sein, trzecia osoba liczby mnogiej",
        why: "<i>Die Schuhe</i> jest w liczbie mnogiej: <b>sind</b>."
      },
      {
        tr: "Sweter jest niebieski, a spodnie są czarne.",
        why: "Każde zdanie składowe ma własny odmieniony czasownik: <i>Der Pullover ist blau und die Hose ist schwarz</i>. W obu podmiot stoi przed <i>ist</i>. W drugim członie <i>die Hose</i> jest podmiotem w liczbie pojedynczej, mimo że po polsku „spodnie” są w mnogiej."
      },
      {
        q: "Dopasuj każdy kolor do jego znaczenia.",
        pairs: ["czerwony", "niebieski", "zielony", "żółty"]
      },
      {
        q: "Uzupełnij oba zdania.",
        tr: "Sukienka jest żółta, a buty są czarne.",
        why: "Podmiot w liczbie pojedynczej wymaga <i>ist</i>, w mnogiej <i>sind</i>. Przymiotniki się nie zmieniają."
      },
      {
        tr: "Kurtka jest czerwona, a spodnie są niebieskie.",
        why: "<i>Jacke</i>: <b>J</b> czyta się jak polskie „j”; <i>rot</i> ma długie <b>o</b>."
      },
      {
        tr: "Sweter jest zielony, a koszula jest biała.",
        why: "W <i>grün</i> głoskę <b>ü</b> wymawia się, układając usta jak do „u”, a język jak do „i”. <i>Weiß</i>: grupa <b>ei</b> czyta się „aj”."
      }
    ]
  },
  "lesson:a1-u04-l2": {
    theme: "W sklepie",
    title: "Wybór między dwiema rzeczami: dieser, welcher, der da",
    objectives: [
      "wskazywać ubranie za pomocą dieser / diese / dieses",
      "pytać „który?” za pomocą welcher / welche / welches",
      "używać der da / die da / das da do wskazania czegoś bliskiego lub dalszego"
    ],
    theory: [
      {
        h: "Dieser, diese, dieses: „ten, ta, to”",
        p: "<strong>Dieser</strong> działa jak rodzajnik: przybiera formę zgodną z rodzajem rzeczownika. <em>Dieser Pullover</em> (męski), <em>diese Jacke</em> (żeński), <em>dieses Hemd</em> (nijaki), <em>diese Schuhe</em> (liczba mnoga). W mianowniku końcówki są takie, jakie już znasz z <em>der / die / das</em>, tyle że doczepione do <em>dies-</em>."
      },
      {
        h: "Welcher, welche, welches: „który?”",
        p: "Żeby wybrać między dwiema rzeczami, pyta się za pomocą <strong>welcher</strong>: <em>Welcher Mantel ist schön?</em>, <em>Welche Tasche ist blau?</em>, <em>Welches Kleid ist rot?</em> Schemat jest taki sam jak przy <em>dieser</em>. Odpowiada się <em>dieser</em> albo, w mowie, <strong>der da</strong>, <strong>die da</strong>, <strong>das da</strong>: <em>Welcher Mantel ist billig? Der da.</em>"
      },
      {
        contrast: "Polski ma <em>ten / ta / to / te</em> i <em>który / która / które / które</em>, więc zgodność z rodzajem już znasz. Uwaga na rodzaje: nie zawsze pokrywają się z niemieckimi. <em>Das Hemd</em> jest nijakie, a „koszula” żeńska; <em>der Rock</em> jest męski, a „spódnica” żeńska; <em>das Kleid</em> jest nijakie, a „sukienka” żeńska. Wybór <em>dieser / diese / dieses</em> idzie za rodzajem <b>niemieckiego</b> rzeczownika. Tutaj uczysz się tylko mianownika. Polskie „ten tam” ma niemiecki odpowiednik w mowie: <em>der da</em>."
      },
      {
        trap: "Nie mów „Welche Mantel” ani „Dieser Jacke”: ostatnia litera musi iść za rodzajem rzeczownika. <em>Mantel</em> jest męski (<em>welcher</em>), <em>Jacke</em> jest żeński (<em>welche</em>), <em>Hemd</em> jest nijaki (<em>welches</em>)."
      },
      {
        tip: "W sklepie możesz wskazać palcem i powiedzieć samo słowo bez rzeczownika, ale musi się zgadzać z wskazywaną rzeczą: <em>Welcher? Dieser hier?</em> dla <em>der Mantel</em>, <em>Welche? Diese hier?</em> dla <em>die Jacke</em> lub liczby mnogiej, <em>Welches? Dieses hier?</em> dla <em>das Hemd</em>. W mówionym niemieckim dużo się skraca. W zdaniach pisanych powtarzaj rzeczownik w całości."
      }
    ],
    grammar: {
      title: "dieser i welcher w mianowniku",
      note: "Końcówki <b>dieser</b> i <b>welcher</b> idą za rodzajem rzeczownika: -er (męski), -e (żeński), -es (nijaki), -e (liczba mnoga).",
      table: {
        head: ["rodzaj", "dieser", "welcher", "przykład"],
        rows: [
          ["męski", "dieser", "welcher", "Dieser Mantel ist schön."],
          ["żeński", "diese", "welche", "Diese Jacke ist teuer."],
          ["nijaki", "dieses", "welches", "Dieses Hemd ist billig."],
          ["liczba mnoga", "diese", "welche", "Diese Schuhe sind schwarz."]
        ]
      },
      examples: [
        { tr: "Ten sweter jest ładny." },
        { tr: "Ta kurtka jest droga." },
        { tr: "Ta koszula jest tania.", note: "billig: tani, niedrogi" },
        { tr: "Który płaszcz jest ładny?", note: "rodzaj męski: welcher" },
        { tr: "Która torba jest niebieska?", note: "rodzaj żeński: welche" },
        { tr: "Która sukienka jest czerwona?", note: "welches: Kleid jest nijakie, choć „sukienka” jest żeńska" }
      ]
    },
    vocab: [
      "ten / ta / to",
      "który (męski / żeński / nijaki)",
      "tam: ten tam / ta tam (w mowie: der da, die da, das da)",
      "drogi, kosztowny",
      "tani",
      "ładny",
      "płaszcz",
      "czapka",
      "szalik",
      "skarpetka",
      "torba",
      "pasek"
    ],
    dialogue: [
      "Dzień dobry! Czego pan szuka?",
      "Dzień dobry. Szukam płaszcza.",
      "Ten płaszcz jest ładny, ale drogi.",
      "A który płaszcz jest tani?",
      "Ten tam jest tani."
    ],
    exercises: [
      {
        q: "Jak powiesz „Ta kurtka jest droga”?",
        opts: ["Dieser Jacke ist teuer.", "Diese Jacke ist teuer.", "Dieses Jacke ist teuer."],
        why: "<i>Jacke</i> jest rodzaju żeńskiego, więc <b>diese</b>."
      },
      {
        q: "Chcesz zapytać, która koszula jest ładna. Które zdanie jest poprawne?",
        opts: ["Welches Hemd ist schön?", "Welcher Hemd ist schön?", "Welche Hemd ist schön?"],
        why: "<i>Das Hemd</i> jest nijakie, więc <b>welches</b>. Po polsku „koszula” jest żeńska, ale liczy się rodzaj niemiecki."
      },
      {
        q: "Uzupełnij: „Der Rock ist schön, aber ___ Hose ist teuer.” (ta)",
        hint: "die Hose jest rodzaju żeńskiego",
        why: "<i>Hose</i> jest żeński: <b>diese</b>."
      },
      {
        q: "Uzupełnij: „___ Schal ist billig?” (który szalik)",
        hint: "der Schal jest rodzaju męskiego; pytanie",
        why: "<i>Schal</i> jest męski: <b>welcher</b>."
      },
      {
        q: "Wybierz właściwy rodzajnik: ten sam rodzaj decyduje potem, czy powiesz <i>dieser</i>, <i>diese</i> czy <i>dieses</i>.",
        why: "<i>Mantel</i> i <i>Schal</i> są męskie (der, dieser), <i>Jacke</i> i <i>Tasche</i> żeńskie (die, diese), <i>Kleid</i> i <i>Hemd</i> nijakie (das, dieses).",
        items: ["płaszcz", "kurtka", "sukienka", "szalik", "torba", "koszula"]
      },
      {
        tr: "Ten płaszcz jest ładny, ale drogi.",
        why: "Przecinek przed <i>aber</i> jest obowiązkowy. W <i>schön</i> głoskę <b>ö</b> wymawia się, układając usta jak do „o”, a język jak do „e”."
      },
      {
        q: "Przetłumacz: „Ta kurtka jest ładna, ale tamta jest droga.”",
        why: "<i>Diese Jacke ... die da ...</i>: <i>die da</i> odsyła do drugiej kurtki bez powtarzania rzeczownika. Poprawne jest też <i>diese da</i>."
      },
      {
        q: "Jesteś w sklepie.",
        setting: "Podchodzi do ciebie sprzedawca.",
        lines: [
          { tr: "Dzień dobry! Czego pan szuka?" },
          { tr: "Odpowiedz, że szukasz kurtki.", answerTr: "Szukam kurtki." },
          { tr: "Ta kurtka jest czerwona. Ta druga jest niebieska." },
          { tr: "Zapytaj, która kurtka jest tania.", answerTr: "Która kurtka jest tania?" }
        ]
      },
      {
        tr: "Ten płaszcz jest ładny, ale tamten jest drogi.",
        why: "W <i>Mantel</i> głoska <b>t</b> jest wyraźna, a <i>teuer</i> zaczyna się od <b>t</b> i „oj”: grupa <b>eu</b> czyta się „oj”."
      },
      {
        tr: "Która kurtka jest tania? Ta tam.",
        why: "<i>Welche</i> zaczyna się od <b>w</b>, które brzmi jak polskie „w”; w <i>Jacke</i> <b>J</b> brzmi jak „j”."
      }
    ]
  },
  "lesson:a1-u04-l3": {
    theme: "Ceny i zakupy",
    title: "Ceny i zaimki w bierniku: ihn, sie, es",
    objectives: [
      "pytać o cenę za pomocą Was kostet ...? i Wie viel kostet ...?",
      "mówić, ile kosztuje ubranie w euro lub we frankach",
      "zastępować wymieniony już rzeczownik zaimkiem ihn, sie, es"
    ],
    theory: [
      {
        h: "Pytanie o cenę i podawanie ceny",
        p: "Żeby zapytać o cenę: <em>Was kostet der Pullover?</em> albo <em>Wie viel kostet der Pullover?</em> Odpowiada się czasownikiem <em>kosten</em> i liczbą: <em>Der Pullover kostet vierzig Euro</em>. W Szwajcarii walutą jest frank, <em>der Franken</em>: <em>Das Hemd kostet fünfzig Franken</em>. W liczbie mnogiej czasownik zgadza się z podmiotem: <em>Die Schuhe kosten achtzig Euro</em>. Przy kasie słychać <em>Das macht fünfundvierzig Euro</em>."
      },
      {
        h: "Ihn, sie, es: nie powtarzaj rzeczownika",
        p: "Gdy ubranie zostało już nazwane, nie powtarza się go: używa się zaimka. Jako dopełnienie <em>nehmen</em> lub <em>kaufen</em> (biernik) zaimek idzie za <strong>rodzajem niemieckiego rzeczownika</strong>: <em>der Pullover</em> daje <strong>ihn</strong>, <em>die Jacke</em> daje <strong>sie</strong>, <em>das Hemd</em> daje <strong>es</strong>, <em>die Schuhe</em> daje <strong>sie</strong>. Przykład: <em>Der Pullover ist schön. Ich nehme ihn.</em>"
      },
      {
        contrast: "Po polsku zaimek w bierniku też się zmienia i też idzie za rodzajem: <em>biorę go</em> (męski), <em>biorę ją</em> (żeński), <em>biorę je</em> (nijaki i liczba mnoga rzeczy). W niemieckim zmienia się tylko forma męska (<em>er → ihn</em>), a żeńska zostaje <em>sie</em>. Po polsku często zaimek się w ogóle pomija („Biorę.”), po niemiecku zwykle nie: <em>Ich nehme ihn</em>. Zwróć też uwagę, że liczy się rodzaj niemieckiego słowa: „koszula” jest po polsku żeńska, ale <em>das Hemd</em> jest nijakie (<em>es</em>); „spódnica” jest żeńska, ale <em>der Rock</em> jest męski (<em>ihn</em>); „spodnie” są w mnogiej, a <em>die Hose</em> w pojedynczej (<em>sie</em>)."
      },
      {
        trap: "Dla rzeczy używa się rodzaju gramatycznego, a nie <em>es</em> do wszystkiego: <em>Die Jacke ist schön. Ich nehme sie</em>, a nie „Ich nehme es”. <em>Es</em> jest poprawne tylko dla rzeczownika nijakiego (<em>das Hemd</em>, <em>das Kleid</em>). Tylko forma męska zmienia się między mianownikiem (<em>er</em>) a biernikiem (<em>ihn</em>)."
      },
      {
        tip: "Żeby zdecydować się na zakup, wystarczą trzy słowa: <em>Ich nehme ihn</em> / <em>sie</em> / <em>es</em>. Żeby odmówić, dodaj <em>nicht</em> na końcu: <em>Ich nehme ihn nicht</em>."
      }
    ],
    grammar: {
      title: "Od rzeczownika do zaimka w bierniku",
      note: "Zaimek idzie za rodzajem rzeczownika. Zmienia się tylko forma męska: <b>er → ihn</b>.",
      table: {
        head: ["rzeczownik", "mianownik", "biernik", "przykład"],
        rows: [
          ["der Pullover", "er", "ihn", "Ich nehme ihn."],
          ["die Jacke", "sie", "sie", "Ich nehme sie."],
          ["das Hemd", "es", "es", "Ich nehme es."],
          ["die Schuhe", "sie", "sie", "Ich nehme sie."]
        ]
      },
      examples: [
        { tr: "Ile kosztuje sweter?" },
        { tr: "Sweter kosztuje czterdzieści euro. Biorę go.", note: "ihn: rodzaj męski" },
        { tr: "Kurtka kosztuje sześćdziesiąt euro. Biorę ją.", note: "sie: rodzaj żeński" },
        { tr: "Koszula kosztuje dwadzieścia pięć euro. Biorę ją.", note: "es: das Hemd jest nijakie, choć „koszula” jest żeńska" },
        { tr: "Buty są drogie. Nie biorę ich.", note: "nicht na końcu" },
        { tr: "Ile kosztuje płaszcz? Nie kupuję go.", note: "ihn: rodzaj męski" }
      ]
    },
    vocab: [
      "kosztować",
      "ile, ile kosztuje (wie viel)",
      "cena",
      "euro",
      "frank szwajcarski",
      "kupować",
      "kasa",
      "sprzedawca",
      "sprzedawczyni",
      "tylko",
      "go / ją / je (dopełnienie: ihn, sie, es)",
      "To wynosi ... euro"
    ],
    exercises: [
      {
        q: "„Der Pullover ist schön. Ich nehme ___.” Który zaimek?",
        opts: ["er", "ihn", "es"],
        why: "<i>Der Pullover</i> jest rodzaju męskiego i tu jest dopełnieniem <i>nehmen</i>: <b>ihn</b>."
      },
      {
        q: "„Die Jacke ist teuer. Ich kaufe ___ nicht.” Który zaimek?",
        opts: ["sie", "ihn", "es"],
        why: "<i>Die Jacke</i> jest rodzaju żeńskiego: <b>sie</b> (w rodzaju żeńskim mianownik i biernik są takie same)."
      },
      {
        q: "„Das Kleid ist schön. Ich nehme ___.” Który zaimek?",
        opts: ["ihn", "sie", "es"],
        why: "<i>Das Kleid</i> jest nijakie: <b>es</b>. Po polsku „sukienka” jest żeńska, ale liczy się rodzaj niemiecki."
      },
      {
        q: "Uzupełnij: „Der Rock ist billig. Ich kaufe ___.” (Kupuję go.)",
        hint: "der Rock jest rodzaju męskiego; biernik",
        why: "Rodzaj męski w bierniku: <b>ihn</b>."
      },
      {
        q: "Uzupełnij: „Was ___ die Schuhe?” (Ile kosztują buty?)",
        hint: "kosten, liczba mnoga",
        why: "Podmiot <i>die Schuhe</i> jest w liczbie mnogiej: <b>kosten</b>."
      },
      {
        q: "Dopasuj każde słowo do jego znaczenia.",
        pairs: ["kosztować", "cena", "kasa", "kupować"]
      },
      {
        q: "Uzupełnij oba zdania.",
        tr: "Spodnie kosztują trzydzieści euro. Biorę je. Pasek kosztuje piętnaście euro. Biorę go.",
        why: "<i>Die Hose</i> jest żeńskie: <b>sie</b>. <i>Der Gürtel</i> jest męski: <b>ihn</b>."
      },
      {
        q: "Przetłumacz: „Kurtka kosztuje sześćdziesiąt euro, biorę ją.”",
        why: "<i>Die Jacke</i> jest żeńska, więc <i>sie</i>. Liczbę można zapisać słowami (<i>sechzig</i>) albo cyframi (60)."
      },
      {
        tr: "Ile kosztuje płaszcz? Kosztuje dziewięćdziesiąt euro.",
        why: "W <i>neunzig</i> grupa <b>eu</b> czyta się „oj”, a <b>z</b> jak „c”; końcówkę <b>-ig</b> wymawia się jak miękkie <b>ch</b> z <i>ich</i>: /ˈnɔʏntsɪç/. <i>Euro</i> zaczyna się od „oj”."
      },
      {
        tr: "Koszula kosztuje tylko dwadzieścia euro. Biorę ją.",
        why: "<i>Nur</i> ma długie <b>u</b>. <i>Zwanzig</i>: grupa <b>zw</b> czyta się „cw”."
      }
    ]
  },
  "lesson:a1-u04-l4": {
    theme: "Rozmiary i oceny",
    title: "Jak bardzo? Sehr, zu, viel, wenig",
    objectives: [
      "mówić, że ubranie jest bardzo ładne (sehr) albo za drogie (zu)",
      "używać viel i wenig po kosten (kostet viel, kostet wenig)",
      "opisywać rozmiar: groß, klein, lang, kurz, eng, weit"
    ],
    theory: [
      {
        h: "Sehr i zu: przed przymiotnikiem",
        p: "<strong>Sehr</strong> (bardzo) i <strong>zu</strong> (za, zbyt) stoją <em>przed</em> przymiotnikiem i nie mają żadnej końcówki: <em>Der Pullover ist sehr schön</em>, <em>Die Hose ist zu klein</em>, <em>Das Kleid ist zu teuer</em>. Można dodać <em>ein bisschen</em> (trochę): <em>Die Jacke ist ein bisschen zu groß</em>. Do opisu rozmiaru: <em>groß</em>, <em>klein</em>, <em>lang</em>, <em>kurz</em>, <em>eng</em> (ciasny, wąski), <em>weit</em> (szeroki, luźny)."
      },
      {
        h: "Viel i wenig: po kosten",
        p: "Przy <em>kosten</em> i przy przymiotniku w stopniu równym o miejscu decyduje typ słowa: <strong>viel</strong> (dużo) i <strong>wenig</strong> (mało) stoją <em>po</em> czasowniku <em>kosten</em>, a <strong>sehr</strong> stoi przed przymiotnikiem. To nie jest reguła dla wszystkich czasowników (<em>Das gefällt mir sehr</em>) ani dla stopnia wyższego (<em>viel schöner</em>). <em>Der Mantel kostet viel</em>, <em>Das Hemd kostet wenig</em>. Z <em>zu</em> można powiedzieć <em>zu viel</em> (za dużo): <em>Der Mantel ist sehr schön, aber er kostet zu viel</em>."
      },
      {
        contrast: "Polski robi podobny podział: <em>bardzo</em> stoi przed przymiotnikiem (<em>bardzo ładny</em>), a <em>dużo</em> po czasowniku (<em>kosztuje dużo</em>). Niemiecki idzie tym samym tropem: <em>sehr schön</em>, <em>kostet viel</em>. Polskie „za” przed przymiotnikiem to niemieckie <em>zu</em> (<em>za drogi</em> = <em>zu teuer</em>), ale uwaga: <em>zu</em> ma też inne znaczenia (np. „do”). „Za dużo” przy <em>kosten</em> to <em>zu viel</em>. „Mało” to <em>wenig</em>, a „trochę” to <em>ein bisschen</em>."
      },
      {
        trap: "Nie mów „Der Pullover ist viel schön”: przed przymiotnikiem w stopniu równym potrzebne jest <em>sehr</em> (<em>viel</em> stoi natomiast przed stopniem wyższym: <em>viel schöner</em>). A przy <em>kosten</em> nie mów „Der Mantel kostet sehr”: używa się <em>viel</em> (albo <em>sehr viel</em>)."
      },
      {
        tip: "W sklepie często przydadzą ci się dwa zdania: <em>Der Mantel ist zu teuer</em> i <em>Die Hose ist zu eng</em>. Po <em>zu</em> przed przymiotnikiem nic się nie zmienia."
      }
    ],
    grammar: {
      title: "sehr, zu, viel, wenig",
      note: "<b>Sehr</b> i <b>zu</b> stoją przed przymiotnikiem w stopniu równym; przy <b>kosten</b> <b>viel</b> i <b>wenig</b> stoją po czasowniku.",
      table: {
        head: ["przysłówek", "znaczenie", "pozycja", "przykład"],
        rows: [
          ["sehr", "bardzo", "przed przymiotnikiem", "Der Pullover ist sehr schön."],
          ["zu", "za, zbyt", "przed przymiotnikiem", "Die Hose ist zu klein."],
          ["viel", "dużo", "po kosten", "Der Mantel kostet viel."],
          ["wenig", "mało", "po kosten", "Das Hemd kostet wenig."]
        ]
      },
      examples: [
        { tr: "Sweter jest bardzo ładny." },
        { tr: "Spodnie są za małe.", note: "zu przed przymiotnikiem" },
        { tr: "Sukienka jest za droga." },
        { tr: "Płaszcz kosztuje dużo.", note: "viel po kosten" },
        { tr: "Koszula kosztuje mało.", note: "wenig po kosten" },
        { tr: "Kurtka jest trochę za duża." }
      ]
    },
    vocab: [
      "bardzo (przed przymiotnikiem)",
      "za, zbyt (przed przymiotnikiem)",
      "dużo (po kosten)",
      "mało (po kosten)",
      "trochę",
      "duży, wysoki",
      "mały, niski",
      "długi",
      "krótki",
      "ciasny, wąski",
      "szeroki, luźny",
      "rozmiar"
    ],
    exercises: [
      {
        q: "Jak powiesz „Spodnie są za małe”?",
        opts: ["Die Hose ist zu klein.", "Die Hose ist sehr klein.", "Die Hose ist viel klein."],
        why: "<b>Zu</b> znaczy „za, zbyt” i stoi przed przymiotnikiem. <i>Sehr klein</i> to „bardzo małe”, bez myśli o nadmiarze."
      },
      {
        q: "Jak powiesz „Płaszcz jest bardzo ładny”?",
        opts: ["Der Mantel ist zu schön.", "Der Mantel ist sehr schön.", "Der Mantel ist wenig schön."],
        why: "<b>Sehr</b> przed przymiotnikiem. <i>Zu schön</i> znaczy „za ładny”, co zwykle nie jest komplementem."
      },
      {
        q: "Które zdania są poprawne?",
        opts: [
          "Die Hose ist zu eng.",
          "Der Pullover ist viel schön.",
          "Das Hemd kostet wenig.",
          "Der Mantel ist sehr groß.",
          "Die Jacke kostet sehr."
        ],
        why: "<i>Viel schön</i> jest błędne: przed przymiotnikiem potrzebne jest <i>sehr</i>. Przy <i>kosten</i> samo <i>kostet sehr</i> nie pasuje: mówi się <i>kostet viel</i> albo <i>kostet sehr viel</i>."
      },
      {
        q: "Uzupełnij: „Der Mantel ist ___ teuer. Ich nehme ihn nicht.” (za)",
        hint: "przed przymiotnikiem",
        why: "<b>Zu</b>: „za” przed przymiotnikiem."
      },
      {
        q: "Uzupełnij: „Das Kleid ist ___ schön.” (bardzo)",
        hint: "przed przymiotnikiem",
        why: "<b>Sehr</b>: „bardzo” przed przymiotnikiem."
      },
      {
        q: "Dopasuj każde słowo do jego znaczenia.",
        pairs: ["duży", "mały", "długi", "krótki"]
      },
      {
        q: "Uzupełnij: „Sweter jest bardzo ładny, ale kosztuje dużo.”",
        tr: "Sweter jest bardzo ładny, ale kosztuje dużo.",
        why: "<i>Sehr</i> przed przymiotnikiem, <i>viel</i> po <i>kosten</i>."
      },
      {
        q: "Przetłumacz: „Płaszcz jest bardzo ładny, ale kosztuje za dużo.”",
        why: "<i>Sehr schön</i> (przed przymiotnikiem) i <i>zu viel</i> (po <i>kosten</i>): <i>er kostet zu viel</i>."
      },
      {
        tr: "Spodnie są za małe, ale kurtka jest bardzo ładna.",
        why: "W <i>klein</i> grupa <b>ei</b> czyta się „aj”. <i>Schön</i>: <b>sch</b> czyta się jak polskie „sz”."
      },
      {
        tr: "Sukienka jest bardzo ładna, ale za droga.",
        why: "<i>Kleid</i>: <b>ei</b> czyta się „aj”, a końcowe <b>d</b> brzmi jak <b>t</b>."
      }
    ]
  },
  "lesson:a1-u04-test": {
    theme: "Sprawdzian",
    title: "Sprawdzian z jednostki 4",
    objectives: ["sprawdzić przymiotnik w orzeczeniu, dieser i welcher, zaimki w bierniku oraz sehr, zu, viel"],
    theory: [
      {
        p: "Dziesięć pytań z całej jednostki. Zaliczenie od 70%. Nie zaglądaj do lekcji w trakcie odpowiadania: jeśli czegoś nie pamiętasz, lepiej wrócić do powtórki."
      }
    ],
    exercises: [
      {
        q: "Uzupełnij: „Die Schuhe ___ schwarz.” (Buty są czarne.)",
        hint: "sein, trzecia osoba liczby mnogiej",
        why: "Podmiot w liczbie mnogiej: <b>sind</b>."
      },
      {
        q: "Uzupełnij: „Der Pullover kostet fünfzig Euro. Ich nehme ___.” (Biorę go.)",
        hint: "der Pullover jest rodzaju męskiego; biernik",
        why: "Rodzaj męski w bierniku: <b>ihn</b>."
      },
      {
        q: "Uzupełnij: „Die Hose ist ___ eng, ich nehme sie nicht.” (za)",
        hint: "przed przymiotnikiem",
        why: "<b>Zu</b>: „za” przed przymiotnikiem."
      },
      {
        q: "Wybierz właściwy rodzajnik określony dla każdego rzeczownika.",
        items: ["sweter", "spodnie", "sukienka", "spódnica"]
      },
      {
        q: "Jak zapytasz, który sweter jest tani?",
        opts: ["Welcher Pullover ist billig?", "Welche Pullover ist billig?", "Welches Pullover ist billig?"],
        why: "<i>Pullover</i> jest rodzaju męskiego: <b>welcher</b>."
      },
      {
        q: "„Das Kleid ist schön. Ich nehme ___.” Który zaimek?",
        opts: ["ihn", "sie", "es"],
        why: "<i>Das Kleid</i> jest nijakie: <b>es</b>."
      },
      {
        tr: "Koszula jest bardzo ładna, ale za droga.",
        why: "<i>Sehr schön, aber zu teuer</i>: dwa przysłówki przed przymiotnikiem."
      },
      {
        q: "Przetłumacz: „Kurtka jest ładna, ale za droga. Nie biorę jej.”",
        why: "<i>Zu</i> stoi przed przymiotnikiem <i>teuer</i>; <i>sie</i> odsyła do <i>die Jacke</i>, a <i>nicht</i> na końcu neguje zakup."
      },
      {
        tr: "Który sweter jest czerwony, a który niebieski?",
        why: "<i>Welcher Pullover</i>: rodzaj męski. Pytanie w mianowniku nie zmienia czasownika, który zostaje na drugim miejscu."
      },
      {
        tr: "Płaszcz jest bardzo ładny. Biorę go.",
        why: "<i>Mantel</i> jest męski: <i>ihn</i>."
      }
    ]
  },
  "unit:a1-u05": {
    title: "Mój dzień",
    grammarNote: "czasowniki rozdzielnie złożone · um, am, im, von ... bis · können, wollen, müssen · przysłówki częstotliwości"
  },
  "lesson:a1-u05-l1": {
    theme: "Poranna rutyna",
    title: "Czasowniki rozdzielne: przedrostek idzie na koniec",
    objectives: [
      "opisywać codzienność za pomocą aufstehen, frühstücken, duschen, einkaufen, fernsehen",
      "stawiać przedrostek czasowników rozdzielnych na końcu zdania",
      "mówić, o której godzinie coś się dzieje, za pomocą um + godzina"
    ],
    theory: [
      {
        h: "Przedrostek się oddziela i idzie na koniec",
        p: "Wiele niemieckich czasowników ma akcentowany przedrostek, który w zdaniu głównym <strong>się oddziela</strong> i idzie <strong>na koniec zdania</strong>. W bezokoliczniku czasownik pozostaje cały: <em>aufstehen</em>. W zdaniu odmieniona część stoi na drugim miejscu, a przedrostek zamyka zdanie: <em>Ich stehe um sieben Uhr <strong>auf</strong></em>. Tak samo działają <em>aufwachen</em> (<em>Ich wache um sechs Uhr auf</em>), <em>einkaufen</em> (<em>Wir kaufen am Samstag ein</em>), <em>fernsehen</em> (<em>Am Abend sehe ich fern</em>), <em>anfangen</em> (<em>Der Film fängt um acht Uhr an</em>) i <em>einschlafen</em>."
      },
      {
        contrast: "W polskim przedrostek zawsze zostaje przy czasowniku: <em>wstaję</em>, <em>zasypiam</em>, <em>zaczynam</em>, <em>robię zakupy</em>. Niemiecki przedrostek odrywa się od czasownika i ląduje na końcu zdania. Zwróć też uwagę na zaimek zwrotny: po polsku <em>budzić się</em> go ma, a <em>aufwachen</em> w niemieckim <strong>nie ma żadnego zaimka</strong>: <em>Ich wache auf</em>, a nie „Ich wache mich auf”. Podobnie <em>wstawać</em> to <em>aufstehen</em>, czyli <em>Ich stehe auf</em>. Na „brać prysznic” wystarczy czasownik <em>duschen</em>: <em>Ich dusche am Morgen</em>."
      },
      {
        h: "Pory dnia: rodzaj rzeczownika",
        p: "Ucz się tych rzeczowników z rodzajnikiem: <em>der Morgen</em>, <em>der Tag</em>, <em>der Abend</em>, <em>die Nacht</em>. Rodzaje zgadzają się z polskimi (<em>poranek</em>, <em>dzień</em>, <em>wieczór</em> są rodzaju męskiego, <em>noc</em> żeńskiego), więc tu polski ci pomaga. Uwaga na pułapkę w pisowni: <em>der Morgen</em> (poranek) pisze się wielką literą, a <em>morgen</em> małą oznacza „jutro”."
      },
      {
        trap: "Nie mów „Ich aufstehe um sieben”: przedrostek nie zostaje przyklejony do odmienionego czasownika. I nie zapominaj o nim na końcu: „Ich stehe um sieben Uhr” bez <em>auf</em> to inne zdanie i nie znaczy „wstaję”. Uważaj też na przedrostki, które <strong>nigdy</strong> się nie oddzielają: <em>be-</em>, <em>ver-</em>, <em>er-</em> (<em>besuchen</em> → <em>Ich besuche dich</em>, <em>verstehen</em> → <em>Ich verstehe das</em>). Przedrostek rozdzielny to ten z akcentem (<em>AUFstehen</em>), nierozdzielny go nie ma (<em>beSUchen</em>)."
      },
      {
        tip: "Napisz pięć zdań z różnymi czasownikami rozdzielnymi i sprawdź, czy przedrostek jest zawsze ostatnim słowem: <em>Ich wache auf. Ich stehe auf. Ich kaufe ein. Ich sehe fern. Ich schlafe ein.</em> Potem dodaj <em>um</em> + godzinę do dwóch z nich."
      }
    ],
    grammar: {
      title: "Czasowniki rozdzielne w zdaniu głównym",
      note: "W zdaniu głównym odmieniona część stoi na <b>drugim miejscu</b>, a <b>przedrostek idzie na koniec</b>. W bezokoliczniku czasownik jest cały.",
      table: {
        head: ["bezokolicznik", "czas teraźniejszy", "przykład"],
        rows: [
          ["aufstehen", "ich stehe ... auf", "Ich stehe um sieben Uhr auf."],
          ["aufwachen", "ich wache ... auf", "Du wachst um sechs Uhr auf."],
          ["einkaufen", "wir kaufen ... ein", "Am Samstag kaufen wir ein."],
          ["fernsehen", "er sieht ... fern", "Am Abend sieht er fern."],
          ["anfangen", "er fängt ... an", "Der Film fängt um acht Uhr an."]
        ]
      },
      examples: [
        { tr: "Wstaję o siódmej.", note: "auf na końcu, bez zaimka zwrotnego" },
        { tr: "Budzisz się o szóstej." },
        { tr: "W sobotę robimy zakupy.", note: "einkaufen: ein na końcu" },
        { tr: "Wieczorem on ogląda telewizję.", note: "fernsehen: sehen: du siehst, er/sie/es sieht; fernsehen: er sieht fern" },
        { tr: "Film zaczyna się o ósmej.", note: "anfangen: er fängt an, ze zmianą samogłoski" },
        { tr: "Jem śniadanie o wpół do ósmej.", note: "frühstücken nie jest rozdzielny: nie ma przedrostka na końcu" }
      ]
    },
    vocab: [
      "wstawać",
      "budzić się",
      "jeść śniadanie",
      "brać prysznic",
      "robić zakupy",
      "oglądać telewizję",
      "zaczynać się, zaczynać",
      "zasypiać",
      "rano, poranek",
      "dzień",
      "wieczór",
      "noc"
    ],
    exercises: [
      {
        q: "Które zdanie jest poprawne?",
        opts: ["Ich aufstehe um sieben Uhr.", "Ich stehe um sieben Uhr auf.", "Ich stehe um auf sieben Uhr."],
        why: "Odmieniony czasownik stoi na drugim miejscu, a przedrostek <b>auf</b> zamyka zdanie: <b>Ich stehe um sieben Uhr auf.</b>"
      },
      {
        q: "Które pytanie jest poprawne?",
        opts: ["Kommst du mit?", "Mitkommst du?", "Kommst mit du?"],
        why: "<i>Mitkommen</i> jest rozdzielne: <i>Kommst du mit?</i> Przedrostek <b>mit</b> zamyka pytanie."
      },
      {
        tr: "Cała odmiana aufstehen razem z przedrostkiem.",
        why: "Zawsze pisz formę odmienioną, a potem przedrostek: <i>stehe auf</i>, <i>stehst auf</i>, <i>steht auf</i>, <i>stehen auf</i>, <i>steht auf</i>, <i>stehen auf</i>. <i>Er/sie/es</i> i <i>ihr</i> mają tę samą formę: <b>steht auf</b>."
      },
      {
        q: "Uzupełnij: „Wir ___ um sieben auf.”",
        hint: "aufstehen, pierwsza osoba liczby mnogiej",
        why: "Przy <b>wir</b> odmieniona część ma końcówkę -en: <i>wir stehen ... auf</i>; bezokolicznik: <i>aufstehen</i>."
      },
      {
        q: "Uzupełnij: „Ich stehe um sieben ___.”",
        hint: "przedrostek czasownika aufstehen",
        why: "Przedrostek rozdzielny idzie na koniec: <b>auf</b>."
      },
      {
        tr: "Wstaję o siódmej.",
        why: "Kolejność to: podmiot, odmieniony czasownik, godzina, przedrostek. W <i>stehe</i> grupa <b>st</b> na początku sylaby czyta się jak „szt”: /ˈʃteːə/."
      },
      {
        q: "Uzupełnij oba brakujące słowa.",
        tr: "W sobotę robimy zakupy.",
        why: "<i>Einkaufen</i> dzieli się na <i>kaufen</i> i <i>ein</i>. Gdy na pierwszym miejscu stoi <i>am Samstag</i>, podmiot <i>wir</i> idzie za czasownikiem."
      },
      {
        tr: "O siódmej wstaję.",
        why: "Poprawne jest też <i>Ich stehe um sieben Uhr auf</i> oraz, z inwersją, <i>Um sieben (Uhr) stehe ich auf</i>. W polskim zdaniu nie ma odpowiednika przedrostka, więc „wstaję” to po niemiecku <i>stehe ... auf</i>."
      },
      {
        tr: "Wstaję o siódmej, a śniadanie jem o ósmej.",
        why: "<i>Auf</i> ma dyftong /aʊ̯/, zapisywany „au”: ślizg od „a” do krótkiego „u” w jednej sylabie. W <i>frühstücke</i> litera <b>ü</b> to „u” z ustami zaokrąglonymi i językiem z przodu, jak przy „i”; grupa <b>st</b> czyta się „szt”."
      },
      {
        tr: "W sobotę robimy zakupy.",
        why: "<i>Samstag</i>: <b>s</b> przed samogłoską jest dźwięczne, jak polskie „z”; <i>ein</i> zaczyna się od dyftongu <b>ei</b> (jak „aj”)."
      }
    ]
  },
  "lesson:a1-u05-l2": {
    theme: "Godzina i dni tygodnia",
    title: "Mówienie i pytanie o godzinę: um, am, von ... bis",
    objectives: [
      "pytać o godzinę za pomocą Wie spät ist es? i odpowiadać",
      "mówić pełne godziny oraz Viertel nach, Viertel vor, halb",
      "używać um z godziną, am z dniami i von ... bis"
    ],
    theory: [
      {
        h: "Pytanie o godzinę i odpowiedź",
        p: "Żeby zapytać o godzinę: <em>Wie spät ist es?</em> albo <em>Wie viel Uhr ist es?</em> Odpowiada się <em>Es ist</em> + godzina: <em>Es ist sieben Uhr</em>. Kwadranse i minuty: <em>Es ist Viertel nach sieben</em> (7:15), <em>Es ist Viertel vor acht</em> (7:45), <em>Es ist zehn nach sieben</em> (7:10), <em>Es ist zehn vor acht</em> (7:50). Przy pierwszej godzinie mówi się <em>Es ist ein Uhr</em>. W kontekstach oficjalnych (pociągi, programy telewizyjne, rozkłady) używa się też godzin od 0 do 24: <em>neunzehn Uhr dreißig</em>."
      },
      {
        contrast: "Po polsku godziny podaje się liczebnikiem porządkowym (<em>jest siódma</em>, <em>o siódmej</em>), a po niemiecku zwykłym liczebnikiem z <em>Uhr</em>: <em>Es ist sieben Uhr</em>. Podmiotem zawsze jest <em>es</em>. Dobra wiadomość to <strong>halb</strong>: <em>halb acht</em> to <strong>wpół do ósmej</strong>, czyli 7:30, tak samo jak w polskim, bo liczy się w stronę godziny, która nadchodzi. Pułapka tkwi w formie: po niemiecku nie ma słowa „do”, jest tylko <em>halb acht</em>. Podobnie <em>Viertel vor acht</em> to „za kwadrans ósma”, a <em>Viertel nach sieben</em> to „kwadrans po siódmej”. Polskie <em>godzina</em> oznacza i porę dnia, i czas trwania; niemiecki je rozróżnia: godzinę zegarową wyraża <em>Uhr</em> (<em>die Uhr</em> to także „zegar”), czas trwania <em>die Stunde</em>: <em>Es ist drei Uhr</em> (jest trzecia), <em>Der Film dauert drei Stunden</em> (film trwa trzy godziny)."
      },
      {
        h: "um, am, von ... bis",
        p: "Z dokładną godziną używa się <strong>um</strong>: <em>Der Film beginnt um acht Uhr</em> (o ósmej). Z dniami i porami dnia używa się <strong>am</strong>: <em>am Montag</em>, <em>am Samstag</em>, <em>am Morgen</em>, <em>am Nachmittag</em>, <em>am Abend</em>; jedyny wyjątek to <em>in der Nacht</em>. Z miesiącami i porami roku <strong>im</strong>: <em>im Mai</em>, <em>im Sommer</em>. Dla przedziału <strong>von ... bis</strong>: <em>von Montag bis Freitag</em>, <em>von acht bis vier</em>. Dni tygodnia: <em>Montag, Dienstag, Mittwoch, Donnerstag, Freitag, Samstag, Sonntag</em>."
      },
      {
        trap: "W niemieckim wszystkie dni tygodnia są rodzaju męskiego (<em>der Montag</em>, <em>der Sonntag</em>) i pisze się je wielką literą, jak każdy rzeczownik. W polskim są małą literą, a <em>sobota</em>, <em>środa</em> i <em>niedziela</em> są rodzaju żeńskiego. Nie tłumacz „o siódmej” przez <em>am</em>: przy godzinie jest <em>um</em>, przy dniu <em>am</em>. Po niemiecku nie ma też końcówek przypadków jak w „w sobotę”, „w poniedziałek”: po <em>am</em> stoi po prostu <em>Samstag</em>, <em>Montag</em>. I nie mów „um Montag”: poniedziałek to dzień, więc <em>am Montag</em>."
      },
      {
        tip: "Ucz się trzech pół godzin w parze: <em>halb acht</em> (7:30), <em>halb neun</em> (8:30), <em>halb zehn</em> (9:30). Żeby sprawdzić, czy rozumiesz, zawsze dodaj godzinę, która następuje: jeśli mówię <em>halb neun</em>, brakuje pół godziny do dziewiątej."
      }
    ],
    grammar: {
      title: "Godzina i przyimki czasu",
      note: "<b>um</b> + godzina, <b>am</b> + dzień lub pora dnia (<em>am Morgen, am Nachmittag, am Abend</em>; wyjątek: <em>in der Nacht</em>), <b>im</b> + miesiąc lub pora roku. <b>Halb acht</b> = 7:30.",
      table: {
        head: ["godzina", "mówi się"],
        rows: [
          ["7:00", "Es ist sieben Uhr."],
          ["7:05", "Es ist fünf nach sieben."],
          ["7:15", "Es ist Viertel nach sieben."],
          ["7:30", "Es ist halb acht."],
          ["7:45", "Es ist Viertel vor acht."],
          ["7:50", "Es ist zehn vor acht."]
        ]
      },
      examples: [
        { tr: "Która jest godzina?", note: "także: Wie viel Uhr ist es?" },
        { tr: "Jest siódma.", note: "es ist, liczba pojedyncza" },
        { tr: "Jest kwadrans po siódmej." },
        { tr: "Jest wpół do ósmej.", note: "halb acht: liczy się w stronę ósmej" },
        { tr: "Jest za kwadrans ósma." },
        { tr: "Film zaczyna się w sobotę wpół do dziewiątej.", note: "am Samstag, um halb neun" }
      ]
    },
    vocab: [
      "godzina zegarowa, zegar (die Uhr)",
      "godzina (czas trwania)",
      "minuta",
      "kwadrans",
      "pół (halb acht = wpół do ósmej)",
      "do, za (przed nadchodzącą godziną: Viertel vor acht)",
      "po (Viertel nach sieben)",
      "późno",
      "wcześnie",
      "poniedziałek",
      "sobota",
      "weekend"
    ],
    exercises: [
      {
        q: "„Es ist halb acht.” Która jest godzina?",
        opts: ["wpół do ósmej (7:30)", "wpół do dziewiątej (8:30)", "równo ósma"],
        why: "<i>Halb acht</i> to wpół do ósmej: liczy się w stronę następnej godziny, pół godziny przed ósmą."
      },
      {
        q: "Jak powiesz „od poniedziałku do piątku”?",
        opts: ["von Montag nach Freitag", "ab Montag zu Freitag", "von Montag bis Freitag"],
        why: "Dla przedziału używa się <b>von ... bis</b>: <i>von Montag bis Freitag</i>."
      },
      {
        q: "Uzupełnij: „Der Film beginnt ___ acht Uhr.” (o ósmej)",
        hint: "z dokładną godziną",
        why: "Z godziną używa się <b>um</b>: <i>um acht Uhr</i>."
      },
      {
        q: "Uzupełnij: „Das Konzert ist ___ Samstag.” (w sobotę)",
        hint: "z dniem tygodnia",
        why: "Z dniami używa się <b>am</b>: <i>am Samstag</i>."
      },
      {
        tr: "Jest kwadrans po siódmej.",
        why: "<i>Viertel nach sieben</i>: litera <b>V</b> w <i>Viertel</i> czyta się jak „f”. W <i>sieben</i> grupa <b>ie</b> to długie „i”, a <b>s</b> jest dźwięczne."
      },
      {
        q: "Dopasuj każdy dzień tygodnia do jego znaczenia.",
        pairs: ["poniedziałek", "środa", "piątek", "niedziela"]
      },
      {
        q: "Uzupełnij oba zdania.",
        tr: "7:10: jest dziesięć po siódmej. 7:50: jest za dziesięć ósma.",
        why: "<i>Zehn nach sieben</i> to 7:10, <i>zehn vor acht</i> to 7:50."
      },
      {
        tr: "Która jest godzina? Jest wpół do dziewiątej.",
        why: "Wpół do dziewiątej to po niemiecku <i>halb neun</i>. Ewentualnie, bardziej oficjalnie, <i>acht Uhr dreißig</i>. <i>Wie spät ist es?</i> i <i>Wie viel Uhr ist es?</i> są równoważne."
      },
      {
        tr: "Która jest godzina? Jest za kwadrans ósma.",
        why: "<i>Viertel vor acht</i>: 7:45. W <i>vor</i> litera <b>v</b> brzmi jak „f”, a <b>o</b> jest długie."
      },
      {
        tr: "Film zaczyna się wpół do dziewiątej.",
        why: "W <i>halb neun</i> początkowe <b>h</b> jest wyraźnie tchnione, a końcowe <b>b</b> brzmi jak „p”. <i>Beginnt</i>: <b>g</b> to twarde „g”."
      }
    ]
  },
  "lesson:a1-u05-l3": {
    theme: "Zdolność, chęć, obowiązek",
    title: "Czasowniki modalne: können, wollen, müssen",
    objectives: [
      "mówić, co można, co się chce i co trzeba zrobić, za pomocą können, wollen, müssen",
      "odmieniać trzy czasowniki modalne w czasie teraźniejszym",
      "stawiać bezokolicznik na końcu zdania"
    ],
    theory: [
      {
        h: "Trzy czasowniki, jedna konstrukcja",
        p: "<strong>können</strong> (móc, umieć), <strong>wollen</strong> (chcieć) i <strong>müssen</strong> (musieć) używa się razem z drugim czasownikiem w bezokoliczniku. Czasownik modalny jest odmieniony i stoi na drugim miejscu, a <strong>bezokolicznik idzie na koniec zdania</strong>: <em>Ich kann heute nicht kommen</em>, <em>Wir wollen morgen schwimmen</em>, <em>Du musst heute lernen</em>. Czasownik modalny i bezokolicznik obejmują resztę zdania jak nawias."
      },
      {
        h: "Odmiana",
        p: "Te trzy czasowniki mają własną odmianę: pierwsza i trzecia osoba liczby pojedynczej są takie same i <strong>nie mają końcówki</strong>. <em>Ich kann</em>, <em>er kann</em>. <em>Ich will</em>, <em>er will</em>. <em>Ich muss</em>, <em>er muss</em>. Przy <em>wir</em>, <em>sie</em> i <em>Sie</em> forma jest taka jak bezokolicznik: <em>wir können</em>, <em>sie wollen</em>, <em>Sie müssen</em>. Przy <em>ihr</em> jest <em>könnt, wollt, müsst</em>, przy <em>du</em> <em>kannst, willst, musst</em>."
      },
      {
        contrast: "Polski dopuszcza większą swobodę szyku (<em>mogę przyjść</em>, ale też <em>mogę dzisiaj przyjść</em>, <em>chcę długo spać</em>), a w niemieckim zdaniu głównym bezokolicznik zwykle zamyka nawias czasownikowy, na końcu zdania: <em>Ich kann heute kommen</em>, a gdy zdanie się wydłuża, nawias jest dobrze widoczny: <em>Ich kann heute Abend mit dir ins Kino gehen</em>. W polskim pierwsza i trzecia osoba różnią się (<em>mogę</em> i <em>może</em>, <em>muszę</em> i <em>musi</em>); w niemieckim są takie same: <em>ich kann</em>, <em>er kann</em>. Polski ma osobne <em>umieć</em> na zdolność (<em>umiem pływać</em>), a niemiecki używa <em>können</em> do wszystkiego: <em>Ich kann schwimmen</em> znaczy zarówno „mogę pływać”, jak i „umiem pływać”."
      },
      {
        trap: "Z <em>nicht</em> czasownik <em>müssen</em> nie oznacza zakazu. <em>Du musst nicht kommen</em> znaczy „nie musisz przychodzić”, czyli „nie ma takiej potrzeby”: to nie jest zakaz. Polskie <em>nie wolno</em> (zakaz) wyraża w niemieckim <em>nicht dürfen</em> (<em>dürfen</em> znaczy „mieć pozwolenie”), który pojawi się dalej: <em>Du darfst nicht kommen</em> = „nie wolno ci przychodzić”, w odróżnieniu od <em>Du musst nicht kommen</em> = „nie musisz przychodzić”. Druga pułapka: <em>wollen</em> jest bezpośrednie. <em>Ich will einen Kaffee</em> może zabrzmieć szorstko jak prośba, podobnie jak „chcę kawę”. Żeby poprosić grzecznie, używa się <em>ich möchte</em> („chciałbym, chciałabym”), które poznasz później. Po czasowniku modalnym nie stawia się <em>zu</em> przed bezokolicznikiem."
      },
      {
        tip: "Ułóż trzy zdania o sobie, po jednym na każdy czasownik modalny, i powiedz je na głos: <em>Ich kann gut kochen</em>, <em>Ich will morgen schlafen</em>, <em>Ich muss heute lernen</em>. Sprawdź, czy bezokolicznik jest zawsze ostatnim słowem."
      }
    ],
    grammar: {
      title: "können, wollen, müssen w czasie teraźniejszym",
      note: "1. i 3. osoba liczby pojedynczej są <b>takie same i bez końcówki</b>. Bezokolicznik idzie na koniec zdania.",
      table: {
        head: ["osoba", "können", "wollen", "müssen"],
        rows: [
          ["ich", "kann", "will", "muss"],
          ["du", "kannst", "willst", "musst"],
          ["er / sie / es", "kann", "will", "muss"],
          ["wir", "können", "wollen", "müssen"],
          ["ihr", "könnt", "wollt", "müsst"],
          ["sie / Sie", "können", "wollen", "müssen"]
        ]
      },
      examples: [
        { tr: "Umiem dobrze gotować.", note: "können na oznaczenie zdolności" },
        { tr: "Dzisiaj nie możesz przyjść.", note: "nicht przed bezokolicznikiem" },
        { tr: "Jutro chcemy pływać." },
        { tr: "On dzisiaj nie chce pracować.", note: "er will: bez końcówki" },
        { tr: "Dzisiaj muszę się uczyć.", note: "ich muss: bez końcówki" },
        { tr: "Oni muszą odrabiać lekcje.", note: "sie müssen: forma jak bezokolicznik" }
      ]
    },
    vocab: [
      "móc, umieć (zdolność)",
      "chcieć",
      "musieć",
      "uczyć się",
      "gotować",
      "pływać",
      "spać",
      "tańczyć",
      "praca",
      "zadanie domowe",
      "dzisiaj",
      "jutro"
    ],
    exercises: [
      {
        q: "Które zdanie jest poprawne?",
        opts: ["Ich kann heute gehe.", "Ich kann heute gehen.", "Ich gehen kann heute."],
        why: "Czasownik modalny stoi na drugim miejscu, bezokolicznik na końcu: <b>Ich kann heute gehen.</b>"
      },
      {
        q: "Uzupełnij: „Er ___ heute lernen.” (On dzisiaj musi się uczyć.)",
        opts: ["müsst", "muss", "müssen"],
        why: "Przy <i>er</i> czasownik modalny nie przyjmuje końcówki: <b>er muss</b>."
      },
      {
        tr: "Cała odmiana czasownika können.",
        why: "<i>Ich kann</i> i <i>er kann</i> są takie same. Przy <i>du</i> forma to <i>kannst</i>, przy <i>ihr</i> <i>könnt</i>."
      },
      {
        tr: "Cała odmiana czasownika wollen.",
        why: "<i>Ich will</i> i <i>er will</i> są takie same. Przy <i>du</i> forma to <i>willst</i>, przy <i>ihr</i> <i>wollt</i>."
      },
      {
        tr: "Cała odmiana czasownika müssen.",
        why: "<i>Ich muss</i> i <i>er muss</i> są takie same. Przy <i>du</i> forma to <i>musst</i>, przy <i>ihr</i> <i>müsst</i>."
      },
      {
        q: "Uzupełnij: „Wir ___ morgen schwimmen.” (Jutro chcemy pływać.)",
        hint: "chcieć, pierwsza osoba liczby mnogiej",
        why: "Przy <b>wir</b> czasownik modalny ma formę bezokolicznika: <b>wollen</b>."
      },
      {
        q: "Uzupełnij oba zdania.",
        tr: "Nie mogę spać. Muszę pracować.",
        why: "<i>Ich kann nicht schlafen</i>: <i>können</i> na oznaczenie możliwości. <i>Ich muss arbeiten</i>: <i>müssen</i> na oznaczenie obowiązku."
      },
      {
        tr: "Muszę pracować, ale chcę spać.",
        why: "Dwa zdania, każde ze swoim czasownikiem modalnym, połączone przez <i>aber</i> z przecinkiem przed: <i>muss</i> na obowiązek, <i>will</i> na chęć."
      },
      {
        tr: "Dzisiaj nie mogę przyjść, muszę pracować.",
        why: "<i>Kann</i> z krótkim <b>a</b>. W <i>kommen</i> <b>o</b> jest krótkie. <i>Heute</i>: grupa <b>eu</b> czyta się „oj”."
      },
      {
        tr: "Dzisiaj muszę się uczyć, ale chcę pływać.",
        why: "W <i>schwimmen</i> grupa <b>sch</b> czyta się jak polskie „sz”, a <b>w</b> jak polskie „w”."
      }
    ]
  },
  "lesson:a1-u05-l4": {
    theme: "Nawyki i częstotliwość",
    title: "Jak często? immer, oft, manchmal, nie",
    objectives: [
      "mówić, jak często się coś robi, za pomocą immer, oft, manchmal, selten, nie",
      "stawiać przysłówek częstotliwości we właściwym miejscu",
      "zaczynać zdanie od określenia czasu i odwracać szyk czasownika i podmiotu"
    ],
    theory: [
      {
        h: "Przysłówki częstotliwości",
        p: "Pięć słów wystarczy, żeby opisać nawyki: <em>immer</em> (zawsze), <em>oft</em> (często), <em>manchmal</em> (czasami), <em>selten</em> (rzadko), <em>nie</em> (nigdy). Zwykle stoją <strong>po odmienionym czasowniku</strong>: <em>Ich trinke immer Kaffee</em>, <em>Ich lese oft die Zeitung</em>, <em>Ich esse selten Brot</em>. Żeby powiedzieć, że coś dzieje się każdego ranka albo wieczoru, są <em>morgens</em>, <em>abends</em> i <em>jeden Tag</em> (codziennie)."
      },
      {
        h: "Gdy zdanie zaczyna się od czasu, podmiot idzie za czasownikiem",
        p: "Odmieniony czasownik zawsze stoi na <strong>drugim miejscu</strong>. Jeśli na pierwszym miejscu jest określenie czasu, podmiot przechodzi za czasownik (<strong>inwersja</strong>): <em>Morgens trinke ich immer Kaffee</em>, <em>Abends sehe ich manchmal fern</em>, <em>Jeden Tag frühstücke ich um acht</em>. Sens jest taki sam jak w <em>Ich trinke morgens immer Kaffee</em>: zmienia się tylko element otwierający zdanie."
      },
      {
        contrast: "W polskim szyk jest swobodny: można powiedzieć <em>Rano ja piję kawę</em> albo <em>Rano piję kawę</em>. W niemieckim „Morgens ich trinke” jest błędem: po <em>morgens</em> od razu stoi czasownik. Polski wymaga też podwójnego przeczenia: <em>nigdy nie piję piwa</em>. W niemieckim <em>nie</em> zawiera już przeczenie i stoi samo: <em>Ich trinke nie Bier</em>, bez <em>nicht</em>."
      },
      {
        trap: "Nie mów „Ich trinke nie nicht Bier”: <em>nie</em> jest już przeczące, a <em>nicht</em> dodaje się na darmo. Nie stawiaj też przysłówka przed odmienionym czasownikiem: „Ich immer trinke Kaffee” jest błędem. Po podmiocie zawsze idzie czasownik, potem przysłówek."
      },
      {
        tip: "Opisz swój dzień jednym zdaniem na przysłówek: <em>Ich trinke immer Kaffee. Ich lese oft die Zeitung. Abends sehe ich manchmal fern. Ich esse selten Brot. Ich trinke nie Bier.</em> Potem spróbuj postawić <em>Morgens</em> albo <em>Abends</em> na pierwszym miejscu i sprawdź czasownik."
      }
    ],
    grammar: {
      title: "Przysłówki częstotliwości i inwersja",
      note: "Przysłówek stoi zwykle <b>po odmienionym czasowniku</b>. Jeśli zdanie zaczyna się od określenia czasu, <b>czasownik zostaje na drugim miejscu</b>, a podmiot idzie za nim.",
      table: {
        head: ["przysłówek", "znaczenie", "przykład"],
        rows: [
          ["immer", "zawsze", "Ich trinke immer Kaffee."],
          ["oft", "często", "Ich lese oft die Zeitung."],
          ["manchmal", "czasami", "Abends sehe ich manchmal fern."],
          ["selten", "rzadko", "Ich esse selten Brot."],
          ["nie", "nigdy", "Ich trinke nie Bier."]
        ]
      },
      examples: [
        { tr: "Zawsze piję kawę." },
        { tr: "Rano zawsze piję kawę.", note: "morgens na pierwszym miejscu: trinke ich" },
        { tr: "Często czytam gazetę." },
        { tr: "Wieczorem czasami oglądam telewizję.", note: "fernsehen: fern na końcu" },
        { tr: "Rzadko jem chleb." },
        { tr: "Nigdy nie piję piwa.", note: "nie, bez nicht" }
      ]
    },
    vocab: [
      "zawsze",
      "często",
      "czasami",
      "rzadko",
      "nigdy",
      "rano, każdego ranka",
      "wieczorem, każdego wieczoru",
      "codziennie",
      "chleb",
      "śniadanie",
      "gazeta",
      "obiad"
    ],
    exercises: [
      {
        q: "Które zdanie jest poprawne?",
        opts: ["Morgens ich trinke Kaffee.", "Morgens trinke ich Kaffee.", "Ich morgens trinke Kaffee."],
        why: "Po <i>morgens</i> od razu stoi odmieniony czasownik (drugie miejsce), potem podmiot: <b>Morgens trinke ich Kaffee.</b>"
      },
      {
        q: "Co znaczy „Ich trinke nie Kaffee”?",
        opts: ["Nigdy nie piję kawy.", "Zawsze piję kawę.", "Dzisiaj nie piję kawy."],
        why: "<i>Nie</i> znaczy „nigdy” i zawiera już przeczenie: <i>nicht</i> nie jest potrzebne."
      },
      {
        q: "Które zdania są poprawne?",
        opts: [
          "Morgens trinke ich immer Kaffee.",
          "Manchmal ich lese die Zeitung.",
          "Ich lese oft die Zeitung.",
          "Ich trinke nie nicht Kaffee.",
          "Jeden Tag frühstücke ich um acht."
        ],
        why: "W zdaniu 2 podmiot stoi przed czasownikiem po <i>manchmal</i>; zdanie 4 podwaja przeczenie, bo <i>nie</i> jest już przeczące."
      },
      {
        q: "Uzupełnij: „Abends ___ ich oft fern.”",
        hint: "fernsehen, pierwsza osoba liczby pojedynczej",
        why: "Czasownik <i>fernsehen</i> się dzieli: <b>sehe</b> na drugim miejscu, <i>fern</i> na końcu."
      },
      {
        q: "Dopasuj każdy przysłówek do jego znaczenia.",
        pairs: ["zawsze", "często", "czasami", "nigdy"]
      },
      {
        tr: "Wieczorem czasami oglądam telewizję.",
        why: "Gdy na pierwszym miejscu jest <i>Abends</i>, czasownik idzie od razu za nim: <i>sehe ich</i>, potem przysłówek, potem <i>fern</i> na końcu."
      },
      {
        q: "Uzupełnij oba brakujące słowa.",
        tr: "Rano zawsze piję kawę.",
        why: "Gdy na pierwszym miejscu jest <i>morgens</i>, czasownik stoi na drugim: <i>trinke ich</i>. Przysłówek <i>immer</i> idzie za podmiotem."
      },
      {
        tr: "Wieczorem często oglądam telewizję.",
        why: "Poprawne są też <i>Ich sehe abends oft fern</i> i <i>Oft sehe ich abends fern</i>: przysłówek może zmieniać miejsce, czasownik zostaje na drugim."
      },
      {
        tr: "Rano zawsze piję kawę, wieczorem czasami herbatę.",
        why: "W <i>Kaffee</i> podwójne <b>ff</b> wskazuje, że <b>a</b> jest krótkie; <i>immer</i> ma krótkie <b>i</b>. W <i>manchmal</i> grupa <b>ch</b> to ten sam dźwięk co w <i>ich</i>."
      },
      {
        tr: "Rano zawsze piję kawę i czytam gazetę.",
        why: "<i>Zeitung</i>: <b>z</b> czyta się „c”, a <b>ei</b> „aj”. <i>Lese</i> ma dźwięczne <b>s</b>."
      }
    ]
  },
  "lesson:a1-u05-test": {
    theme: "Sprawdzian",
    title: "Sprawdzian z jednostki 5",
    objectives: ["sprawdzić czasowniki rozdzielne, godzinę i przyimki czasu, czasowniki modalne i przysłówki częstotliwości"],
    theory: [
      {
        p: "Dziesięć pytań z całej jednostki. Zaliczenie przy 70%. Nie zaglądaj do lekcji, kiedy odpowiadasz: jeśli czegoś nie pamiętasz, lepiej wrócić i powtórzyć."
      }
    ],
    exercises: [
      {
        tr: "Czas teraźniejszy aufstehen: ich, er/sie/es, wir.",
        why: "Przedrostek idzie na koniec: <i>stehe auf</i>, <i>steht auf</i>, <i>stehen auf</i>."
      },
      {
        tr: "Czas teraźniejszy müssen: ich, du, er/sie/es, wir.",
        why: "<i>Muss</i>, <i>musst</i>, <i>muss</i>, <i>müssen</i>: 1. i 3. osoba liczby pojedynczej są takie same."
      },
      {
        q: "Uzupełnij: „Der Film beginnt ___ acht Uhr.” (o ósmej)",
        hint: "z dokładną godziną",
        why: "Z godziną używa się <b>um</b>."
      },
      {
        q: "Uzupełnij: „Ich kann nicht kommen, ich ___ arbeiten.” (muszę)",
        hint: "musieć, pierwsza osoba liczby pojedynczej",
        why: "<i>Ich muss</i>, bez końcówki."
      },
      {
        q: "Uzupełnij: „Morgens ___ ich immer Kaffee.” (piję)",
        hint: "trinken, pierwsza osoba liczby pojedynczej",
        why: "Po <i>morgens</i> od razu stoi czasownik: <b>trinke</b>."
      },
      {
        q: "Które zdanie jest poprawne?",
        opts: ["Ich aufstehe um sieben.", "Ich stehe um sieben auf.", "Ich auf stehe um sieben."],
        why: "Przedrostek <i>auf</i> idzie na koniec zdania: <b>Ich stehe um sieben auf.</b>"
      },
      {
        q: "„Es ist halb zehn.” Która jest godzina?",
        opts: ["wpół do dziesiątej (9:30)", "wpół do jedenastej (10:30)", "równo dziesiąta"],
        why: "<i>Halb zehn</i> to wpół do dziesiątej, pół godziny przed dziesiątą."
      },
      {
        tr: "Dzisiaj nie mogę przyjść.",
        why: "Czasownik modalny stoi na drugim miejscu, <i>nicht</i> i bezokolicznik na końcu."
      },
      {
        tr: "Muszę wstać wpół do ósmej.",
        why: "W tym zdaniu czasownikiem modalnym jest <i>muss</i>, a bezokolicznik <i>aufstehen</i> stoi na końcu w całości. „Wpół do ósmej” to <i>halb acht</i>."
      },
      {
        tr: "Wieczorem czasami oglądam telewizję.",
        why: "Po <i>Abends</i> od razu stoi czasownik; <i>fern</i> zamyka zdanie."
      }
    ]
  },
  "unit:a1-u06": {
    title: "W mieście",
    grammarNote: "mit, zu, bei, aus, von · celownik (Dativ) · wo? z in, an, neben · forma grzecznościowa rozkazu · es gibt"
  },
  "lesson:a1-u06-l1": {
    theme: "Środki transportu",
    title: "Środki i cele: mit dem Bus, zum Bahnhof",
    objectives: [
      "mówić, czym się jedzie, za pomocą mit + Dativ",
      "mówić, dokąd się idzie, za pomocą zu + Dativ: zum Bahnhof, zur Schule",
      "używać rodzajnika w Dativie: dem, der, dem, den"
    ],
    theory: [
      {
        h: "Mit i zu wymagają Dativu",
        p: "Przyimki <strong>mit</strong> (z, za pomocą: środek transportu) i <strong>zu</strong> (do, w stronę miejsca lub osoby) zawsze wymagają <strong>Dativu</strong>. Rodzajnik zmienia się we wszystkich rodzajach: męski i nijaki <strong>dem</strong>, żeński <strong>der</strong>, liczba mnoga <strong>den</strong>. Przykłady: <em>Ich fahre mit dem Bus</em> (męski), <em>mit der Straßenbahn</em> (żeński), <em>mit dem Auto</em> (nijaki). W liczbie mnogiej rzeczownik zwykle dostaje jeszcze <strong>-n</strong>: <em>mit den Bussen</em>, <em>mit den Zügen</em>, <em>mit den Fahrrädern</em>. Nie dostaje go, jeśli liczba mnoga już kończy się na <strong>-n</strong> lub <strong>-s</strong>: <em>mit den Autos</em>, <em>mit den Straßenbahnen</em>."
      },
      {
        h: "zu dem staje się zum, zu der staje się zur",
        p: "Po <em>zu</em> rodzajnik zlewa się z przyimkiem: <strong>zu dem → zum</strong>, <strong>zu der → zur</strong>. Mówi się <em>Ich gehe zum Bahnhof</em> i <em>Sie geht zur Schule</em>. Na „pieszo” jest stałe wyrażenie <strong>zu Fuß</strong>: <em>Wir gehen zu Fuß zur Haltestelle</em>."
      },
      {
        contrast: "Po polsku środek transportu stoi w narzędniku, bez przyimka: <em>jadę autobusem</em>, <em>pociągiem</em>, <em>rowerem</em>. Po niemiecku potrzebny jest przyimek <strong>mit</strong> i Dativ: <em>mit dem Bus</em>, <em>mit dem Zug</em>. Cel podróży w tych przykładach to <em>do</em> + dopełniacz (<em>do dworca</em>, <em>do szkoły</em>), a po niemiecku <strong>zu</strong> + Dativ (inne cele mogą wymagać <em>nach</em> lub <em>in</em>, zobaczysz to dalej). Nie szukaj więc w tym Dativie polskiego celownika: tutaj odpowiada mu raczej narzędnik albo dopełniacz. <em>Im Bus fahren</em> istnieje, ale podkreśla, że jest się w środku. Uważaj też na rodzaje: <em>dworzec</em> jest męski i <em>der Bahnhof</em> też, ale <em>tramwaj</em> jest męski, a <em>die Straßenbahn</em> żeńska; <em>metro</em> jest nijakie, a <em>die U-Bahn</em> żeńska; <em>samochód</em> jest męski, ale <em>das Auto</em> nijakie (polskie <em>auto</em> też jest nijakie); <em>rower</em> jest męski, a <em>das Fahrrad</em> nijakie."
      },
      {
        trap: "Dla „jechać autobusem” zwykła formuła to <em>mit dem Bus fahren</em>; <em>im Bus fahren</em> podkreśla, że jest się w środku. Nie używaj formy mianownika: „mit der Bus” i „mit die Straßenbahn” są błędne. Po <em>mit</em> i <em>zu</em> rodzajnik stoi zawsze w Dativie: <em>mit dem Bus</em>, <em>mit der Straßenbahn</em>, <em>zum Bahnhof</em>, <em>zur Schule</em>."
      },
      {
        tip: "Ucz się każdego środka transportu z całym wyrażeniem: <em>mit dem Bus</em>, <em>mit der U-Bahn</em>, <em>mit dem Zug</em>, <em>mit dem Fahrrad</em>. Wtedy właściwy rodzajnik przychodzi razem z rzeczownikiem."
      }
    ],
    grammar: {
      title: "mit i zu z Dativem",
      note: "Po <b>mit</b> i <b>zu</b> rodzajnik stoi w Dativie: <b>dem</b> (r. męski i nijaki), <b>der</b> (r. żeński), <b>den</b> + -n (liczba mnoga). <b>zu dem → zum</b>, <b>zu der → zur</b>.",
      table: {
        head: ["rodzaj", "mit + Dativ", "zu + Dativ"],
        rows: [
          ["męski", "mit dem Bus", "zum Bahnhof"],
          ["żeński", "mit der Straßenbahn", "zur Schule"],
          ["nijaki", "mit dem Auto", "zum Kino"],
          ["liczba mnoga", "mit den Bussen", "zu den Haltestellen"]
        ]
      },
      examples: [
        { tr: "Jadę autobusem.", note: "mit dem Bus: rodzaj męski" },
        { tr: "Jedziesz tramwajem.", note: "mit der Straßenbahn: rodzaj żeński; fährst, ze zmianą samogłoski" },
        { tr: "Jedziemy samochodem.", note: "mit dem Auto: rodzaj nijaki" },
        { tr: "Idę na dworzec.", note: "zum = zu dem" },
        { tr: "Ona idzie do szkoły.", note: "zur = zu der" },
        { tr: "Idziemy pieszo na przystanek.", note: "zu Fuß: wyrażenie stałe" }
      ]
    },
    vocab: [
      "z, za pomocą",
      "do, w stronę (miejsca lub osoby)",
      "pieszo, na piechotę",
      "autobus",
      "tramwaj",
      "metro",
      "pociąg",
      "samochód, auto",
      "rower",
      "dworzec",
      "przystanek",
      "szkoła"
    ],
    exercises: [
      {
        q: "Które zdanie jest poprawne?",
        opts: ["Ich fahre mit der Bus.", "Ich fahre mit dem Bus.", "Ich fahre mit den Bus."],
        why: "<i>Der Bus</i> jest rodzaju męskiego: po <i>mit</i> rodzajnik to <b>dem</b>."
      },
      {
        q: "Uzupełnij: „Wir fahren mit ___ Auto.”",
        hint: "das Auto, rodzajnik określony w Dativie",
        why: "<i>Das Auto</i> jest rodzaju nijakiego: po <i>mit</i> mówi się <b>dem</b>."
      },
      {
        q: "Uzupełnij: „Ich fahre mit ___ U-Bahn.”",
        hint: "die U-Bahn, rodzajnik określony w Dativie",
        why: "<i>Die U-Bahn</i> jest rodzaju żeńskiego: w Dativie <b>der</b>."
      },
      {
        q: "Uzupełnij: „Ich gehe ___ Bahnhof.”",
        hint: "zu + dem, w formie zlanej",
        why: "<i>Zu dem</i> zlewa się w <b>zum</b>. Poprawne jest też <i>zu dem Bahnhof</i>, ale prawie zawsze mówi się <i>zum</i>."
      },
      {
        q: "Wybierz właściwy rodzajnik dla każdego rzeczownika.",
        why: "<i>Bahnhof</i> i <i>Zug</i> są rodzaju męskiego, <i>Haltestelle</i> i <i>Schule</i> żeńskiego, <i>Auto</i> i <i>Fahrrad</i> nijakiego. Uwaga: <i>samochód</i> jest męski po polsku, ale <i>das Auto</i> jest nijakie.",
        items: ["dworzec", "przystanek", "samochód", "pociąg", "szkoła", "rower"]
      },
      {
        tr: "Jedziemy pociągiem.",
        why: "Poprawne są obie pozycje: <i>Wir fahren mit dem Zug</i> i, z inwersją, <i>Mit dem Zug fahren wir</i>. Czasownik zostaje na drugim miejscu."
      },
      {
        q: "Uzupełnij oba brakujące słowa.",
        tr: "On jedzie do szkoły autobusem.",
        why: "Środek transportu wyraża się przez <i>mit</i> + Dativ (<i>dem Bus</i>), cel przez <i>zu</i> + Dativ (<i>zu der → zur Schule</i>)."
      },
      {
        tr: "Jadę na dworzec autobusem.",
        why: "Poprawne są też inne pozycje: <i>Ich fahre zum Bahnhof mit dem Bus</i>, <i>Mit dem Bus fahre ich zum Bahnhof</i> i <i>Zum Bahnhof fahre ich mit dem Bus</i>. Przy środku transportu używa się <i>fahren</i>, nie <i>gehen</i>."
      },
      {
        tr: "Jadę do szkoły autobusem.",
        why: "<i>Schule</i>: <b>sch</b> czyta się jak /ʃ/, bliskie polskiemu „sz”, a <b>u</b> jest długie. W <i>fahre</i> <b>h</b> się nie wymawia i wydłuża <b>a</b>."
      },
      {
        tr: "Jedziemy tramwajem na dworzec.",
        why: "<i>Straßenbahn</i>: <b>ß</b> to bezdźwięczne „s”, a początkowe <b>str</b> czyta się „sztr”. W <i>Bahnhof</i> <b>h</b> po <b>a</b> wydłuża samogłoskę; <b>h</b> w <i>hof</i> jest lekko dyszące, łagodniejsze niż polskie „h”."
      }
    ]
  },
  "lesson:a1-u06-l2": {
    theme: "Poruszanie się i pochodzenie",
    title: "gehen, fahren, kommen: aus, von, bei",
    objectives: [
      "odróżniać gehen (pieszo) od fahren (środkiem transportu)",
      "mówić, skąd się pochodzi, za pomocą aus i von, a gdzie się jest, za pomocą bei",
      "mówić, do jakiego miasta się jedzie, za pomocą nach"
    ],
    theory: [
      {
        h: "Gehen i fahren, kommen",
        p: "<strong>Gehen</strong> oznacza zwykle poruszanie się pieszo, <strong>fahren</strong> poruszanie się środkiem transportu (autobus, pociąg, rower, samochód). Przy <em>fahren</em> samogłoska zmienia się w 2. i 3. osobie liczby pojedynczej: <em>ich fahre</em>, <em>du f<strong>ä</strong>hrst</em>, <em>er f<strong>ä</strong>hrt</em>. <em>Gehen</em> i <em>kommen</em> są regularne: <em>ich gehe</em>, <em>du gehst</em>, <em>wir kommen</em>. Czasowniki rozdzielne <em>einsteigen</em> i <em>aussteigen</em> wysyłają przedrostek na koniec: <em>Ich steige am Bahnhof aus.</em>"
      },
      {
        h: "Aus, von i bei: skąd?",
        p: "<strong>Aus</strong> oznacza pochodzenie z miejsca lub z kraju (<em>Ich komme aus Italien</em>, <em>Sie kommt aus dem Supermarkt</em>). <strong>Von</strong> oznacza punkt wyjścia (<em>Er kommt vom Bahnhof</em>, <em>vom Arzt</em>). <strong>Bei</strong> oznacza, gdzie ktoś się znajduje: u kogoś lub przy jakimś miejscu (<em>Anna ist beim Arzt</em>). <em>Von dem → vom</em> i <em>bei dem → beim</em> też się zlewają."
      },
      {
        h: "Nach dla miast, in dla miejsca zamieszkania",
        p: "Żeby powiedzieć, dokąd się jedzie, z nazwą miasta lub kraju <strong>bez rodzajnika</strong> używa się <strong>nach</strong>: <em>Ich fahre nach Berlin</em>, <em>Wir fahren nach Italien</em>. Żeby powiedzieć, gdzie się mieszka lub jest, używa się natomiast <strong>in</strong>: <em>Ich wohne in Berlin</em>. Kraje z rodzajnikiem, jak <em>die Schweiz</em>, pojawią się później."
      },
      {
        contrast: "Tu polski jest po twojej stronie: <em>z</em> odpowiada <em>aus</em> (<em>jestem z Włoch</em>: <em>Ich komme aus Italien</em>), <em>od</em> odpowiada <em>von</em> (<em>wracam od lekarza</em>: <em>Ich komme vom Arzt</em>), <em>u</em> odpowiada <em>bei</em> (<em>jestem u lekarza</em>: <em>Ich bin beim Arzt</em>), a <em>do</em> odpowiada <em>zu</em> (<em>idę do lekarza</em>: <em>Ich gehe zum Arzt</em>). Polskie <em>od</em> ma też drugie znaczenie, „od jakiegoś czasu”: po niemiecku to <em>seit</em> (<em>mieszkam tu od roku</em>: <em>Ich wohne seit einem Jahr hier</em>). Podobnie jak niemiecki, polski rozróżnia też <em>iść</em> i <em>jechać</em>. Różnica jest gdzie indziej: polskie <em>do</em> obejmuje i miasto (<em>do Berlina</em>), i budynek (<em>do dworca</em>), a niemieckie <em>nach</em> i <em>zu</em> dzielą te zadania. Po polsku mówi się też „mieszkam w Berlinie”, i po niemiecku <em>in Berlin</em>, bez żadnego <em>nach</em>."
      },
      {
        trap: "Dla „jestem z Włoch” nie mówi się „Ich komme von Italien”: dla pochodzenia z kraju lub z miasta używa się <strong>aus</strong>. I „Ich gehe mit dem Zug” jest błędne: przy środku transportu używa się <em>fahren</em>, więc <em>Ich fahre mit dem Zug</em>."
      }
    ],
    grammar: {
      title: "aus, von, bei, zu: pochodzenie i miejsce",
      note: "<b>aus</b> = pochodzenie z miejsca lub kraju, <b>von</b> = punkt wyjścia, <b>bei</b> = u, przy, <b>zu</b> = do, w stronę. Wszystkie wymagają Dativu.",
      table: {
        head: ["przyimek", "znaczenie", "przykład"],
        rows: [
          ["aus", "z (pochodzenie)", "Ich komme aus Italien."],
          ["von", "od, z (punkt wyjścia)", "Er kommt vom Bahnhof."],
          ["bei", "u, przy", "Anna ist beim Arzt."],
          ["zu", "do, w stronę", "Wir gehen zum Arzt."]
        ]
      },
      examples: [
        { tr: "Pochodzę z Włoch.", note: "aus + kraj bez rodzajnika" },
        { tr: "Wychodzę z supermarketu.", note: "aus dem: ze środka supermarketu" },
        { tr: "On przychodzi z dworca.", note: "vom = von dem" },
        { tr: "Idziemy do lekarza.", note: "zum = zu dem" },
        { tr: "Jedziesz do parku.", note: "fährst: zmiana samogłoski" },
        { tr: "Anna jest u lekarza.", note: "beim = bei dem" }
      ]
    },
    vocab: [
      "iść (pieszo)",
      "jechać (środkiem transportu), prowadzić",
      "przychodzić, pochodzić",
      "z (pochodzenie), ze środka",
      "od, z (punkt wyjścia)",
      "u (kogoś), przy",
      "wsiadać",
      "wysiadać",
      "lekarz",
      "park",
      "supermarket",
      "miasto"
    ],
    exercises: [
      {
        tr: "Czas teraźniejszy gehen: ich, er/sie/es, wir.",
        why: "<i>Gehen</i> jest regularny: <i>gehe</i>, <i>geht</i>, <i>gehen</i>."
      },
      {
        tr: "Czas teraźniejszy fahren: ich, du, er/sie/es, wir.",
        why: "W 2. i 3. osobie liczby pojedynczej <b>a</b> zmienia się w <b>ä</b>: <i>fahre</i>, <i>fährst</i>, <i>fährt</i>, <i>fahren</i>."
      },
      {
        q: "Uzupełnij: „Ich ___ aus Italien.”",
        hint: "kommen, pierwsza osoba liczby pojedynczej",
        why: "<i>Ich komme</i>: końcówka 1. osoby to <b>-e</b>."
      },
      {
        q: "Uzupełnij: „Er ___ mit dem Zug.”",
        hint: "fahren, trzecia osoba liczby pojedynczej",
        why: "Przy <i>er</i> czasownik zmienia samogłoskę: <b>fährt</b>."
      },
      {
        q: "Uzupełnij: „Wir kommen ___ der Stadt.”",
        hint: "ze środka miejsca, pochodzenie",
        why: "Dla pochodzenia z miejsca używa się <b>aus</b>: <i>aus der Stadt</i>."
      },
      {
        q: "Jak powiesz „Wracam od lekarza”?",
        opts: ["Ich komme aus dem Arzt.", "Ich komme vom Arzt.", "Ich komme zum Arzt."],
        why: "Dla punktu wyjścia używa się <b>von</b> (<i>von dem → vom</i>). <i>Aus</i> dotyczy miejsca, nie osoby, a <i>zum</i> oznacza kierunek do, nie pochodzenie."
      },
      {
        q: "Które zdania są poprawne?",
        opts: [
          "Ich fahre mit dem Zug.",
          "Ich gehe mit dem Zug.",
          "Wir gehen zu Fuß zum Park.",
          "Du kommst aus Italien.",
          "Er fahrt zum Bahnhof."
        ],
        why: "Zdanie 2 jest błędne, bo przy środku transportu używa się <i>fahren</i>; zdanie 5 ma złą formę <i>fahren</i>: <i>fährt</i>."
      },
      {
        tr: "On przychodzi z dworca.",
        why: "Poprawna jest też inwersja <i>Vom Bahnhof kommt er</i>. Czasownik zostaje na drugim miejscu."
      },
      {
        tr: "Pochodzę z Włoch i jadę do Berlina pociągiem.",
        why: "<i>Italien</i>: akcent pada na drugą sylabę, a <b>a</b> jest długie. W <i>Berlin</i> <b>r</b> może być tylne (języczkowe) albo przednie, jak w polskim: obie wymowy są standardowe. <i>Zug</i> zaczyna się od <b>z</b> czytanego jak polskie „c”."
      },
      {
        tr: "Idziemy pieszo do parku.",
        why: "<i>Fuß</i>: <b>ß</b> to bezdźwięczne „s”, a <b>u</b> jest długie. W <i>Park</i> końcowe <b>k</b> jest wyraźne."
      }
    ]
  },
  "lesson:a1-u06-l3": {
    theme: "Pytanie o drogę",
    title: "Wo ist der Bahnhof? Gehen Sie geradeaus",
    objectives: [
      "pytać, gdzie jest jakieś miejsce, za pomocą Entschuldigung, wo ist ...?",
      "wskazywać drogę formą grzecznościową rozkazu (Gehen Sie ..., Biegen Sie ... ab)",
      "mówić, gdzie coś się znajduje, za pomocą neben, hinter, vor + Dativ"
    ],
    theory: [
      {
        h: "Grzecznościowy tryb rozkazujący: bezokolicznik + Sie",
        p: "Z <strong>Sie</strong> tryb rozkazujący ma postać <strong>bezokolicznik + Sie</strong>, z czasownikiem na <strong>pierwszym miejscu</strong>: <em>Gehen Sie geradeaus!</em>, <em>Nehmen Sie die erste Straße rechts!</em> Czasowniki rozdzielne wysyłają przedrostek na koniec: <em>Biegen Sie links <strong>ab</strong>.</em> Wyjątkiem jest <em>sein</em>: <strong>Seien Sie</strong> (<em>Seien Sie bitte pünktlich!</em>)."
      },
      {
        h: "Gdzie jest? wo? z Dativem",
        p: "Żeby zapytać, gdzie jest jakieś miejsce: <em>Entschuldigung, wo ist der Bahnhof?</em> Do odpowiedzi trzeba przyimków miejsca. Przy <strong>wo?</strong> in, an, auf, vor, hinter, neben wymagają <strong>Dativu</strong>: <em>Der Bahnhof ist neben dem Rathaus</em>, <em>Die Apotheke ist hinter der Kreuzung</em>, <em>Der Bus hält vor dem Rathaus</em>, <em>Wir sind am Bahnhof</em> (<em>an dem → am</em>) i <em>Das Café ist in der Stadt</em>."
      },
      {
        contrast: "Po polsku forma grzecznościowa też ma dwie drogi: <em>Proszę iść prosto</em> (<em>proszę</em> + bezokolicznik) albo <em>Niech pan idzie prosto</em> (<em>niech</em> + <em>pan</em> lub <em>pani</em> + czasownik w 3. osobie). Niemiecka forma jest bliższa pierwszej: bezokolicznik na początku, ale zaimek <em>Sie</em> zostaje po czasowniku, a <em>bitte</em> jest opcjonalne. <em>Sie</em> jest jedno dla „pana”, „pani” i „państwa”. <em>Przepraszam</em> mówi się <em>Entschuldigung</em> (albo <em>Entschuldigen Sie</em>), <em>prosto</em> to <em>geradeaus</em>, <em>w prawo</em> to <em>rechts</em>, a <em>w lewo</em> to <em>links</em>, bez przyimka. Po polsku przyimki miejsca też rządzą przypadkiem (<em>obok ratusza</em>, <em>przed ratuszem</em>), więc pomysł jest ci znany, ale same formy są inne i trzeba je wyuczyć. Uważaj też na rodzaj: <em>ratusz</em> jest męski, a <em>das Rathaus</em> nijakie; <em>skrzyżowanie</em> jest nijakie, a <em>die Kreuzung</em> żeńska."
      },
      {
        trap: "Tryb rozkazujący z <em>Sie</em> ma tę samą postać co pytanie tak/nie: <em>Gehen Sie geradeaus!</em> albo <em>Gehen Sie geradeaus?</em> Odróżniają je kontekst, intonacja i interpunkcja. To nie jest <em>Sie gehen geradeaus</em> (podmiot przed czasownikiem), czyli zdanie oznajmujące. A po <em>neben</em>, <em>hinter</em> i <em>vor</em> przy <em>wo?</em> nie stoi biernik: „neben den Bahnhof” jest błędne, mówi się <em>neben dem Bahnhof</em>."
      },
      {
        tip: "Żeby zapamiętać trzy zdania potrzebne na ulicy: <em>Entschuldigung, wo ist ...?</em>, <em>Gehen Sie geradeaus</em>, <em>Biegen Sie links / rechts ab</em>. Z nimi poradzisz sobie w każdym niemieckojęzycznym mieście."
      }
    ],
    grammar: {
      title: "Grzecznościowy tryb rozkazujący i wo? z Dativem",
      note: "<b>Tryb rozkazujący z Sie:</b> bezokolicznik + <b>Sie</b>, czasownik na pierwszym miejscu. <b>Wo?</b> z in, an, vor, hinter, neben: Dativ.",
      table: {
        head: ["bezokolicznik", "tryb rozkazujący", "znaczenie"],
        rows: [
          ["gehen", "Gehen Sie geradeaus.", "proszę iść prosto"],
          ["abbiegen", "Biegen Sie links ab.", "proszę skręcić w lewo"],
          ["nehmen", "Nehmen Sie die erste Straße rechts.", "proszę skręcić w pierwszą ulicę w prawo"],
          ["sein", "Seien Sie bitte pünktlich.", "proszę być punktualnym"]
        ]
      },
      examples: [
        { tr: "Proszę iść prosto.", note: "Gehen Sie: czasownik, potem Sie" },
        { tr: "Proszę skręcić w lewo.", note: "abbiegen: ab na końcu" },
        { tr: "Proszę skręcić w pierwszą ulicę w prawo.", note: "nehmen: pierwsza ulica, die erste Straße" },
        { tr: "Przepraszam, gdzie jest dworzec?" },
        { tr: "Dworzec jest obok ratusza.", note: "neben dem: Dativ rodzaju nijakiego" },
        { tr: "Apteka jest za skrzyżowaniem.", note: "hinter der: Dativ rodzaju żeńskiego" }
      ]
    },
    vocab: [
      "prosto",
      "w lewo, po lewej",
      "w prawo, po prawej",
      "skręcać",
      "przepraszam",
      "obok",
      "za, z tyłu",
      "przed",
      "ulica",
      "skrzyżowanie",
      "ratusz",
      "apteka"
    ],
    exercises: [
      {
        q: "Jak grzecznie poprosisz kogoś, żeby skręcił w lewo?",
        opts: ["Sie biegen links ab.", "Biegen Sie links ab.", "Biegen links Sie ab."],
        why: "Czasownik na pierwszym miejscu, potem <i>Sie</i>, a przedrostek <b>ab</b> na końcu: <b>Biegen Sie links ab.</b> Pierwsza opcja to zdanie oznajmujące."
      },
      {
        q: "Jak zapytasz, gdzie jest dworzec?",
        opts: ["Wo ist der Bahnhof?", "Wo der Bahnhof ist?", "Wo ist den Bahnhof?"],
        why: "W pytaniu z <i>wo</i> czasownik stoi na drugim miejscu: <b>Wo ist der Bahnhof?</b> Przy <i>sein</i> rzeczownik zostaje w mianowniku."
      },
      {
        q: "Uzupełnij: „___ Sie geradeaus.” (Proszę iść)",
        hint: "gehen, grzecznościowy tryb rozkazujący, wielką literą na początku",
        why: "Grzecznościowy tryb rozkazujący zaczyna się od bezokolicznika: <b>Gehen</b> Sie geradeaus."
      },
      {
        q: "Dopasuj każde słowo do jego znaczenia.",
        pairs: ["prosto", "w lewo", "w prawo", "za"]
      },
      {
        q: "Uzupełnij oba brakujące słowa.",
        tr: "Apteka jest za ratuszem, a dworzec obok apteki.",
        why: "<i>Hinter dem Rathaus</i> (Dativ rodzaju nijakiego) i <i>neben der Apotheke</i> (Dativ rodzaju żeńskiego): przy <i>wo?</i> te przyimki wymagają Dativu."
      },
      {
        tr: "Proszę iść prosto i skręcić w lewo.",
        why: "Każdy z dwóch trybów rozkazujących ma własne <i>Sie</i>. Przedrostek <i>ab</i> w <i>abbiegen</i> zamyka zdanie."
      },
      {
        q: "Ktoś pyta cię o drogę: odpowiedz na jego pytania.",
        setting: "W centrum pomagasz komuś znaleźć dworzec i aptekę.",
        lines: [
          { tr: "Przepraszam, gdzie jest dworzec?" },
          { tr: "Wytłumacz drogę: prosto, potem w lewo.", answerTr: "Proszę iść prosto, a potem w lewo." },
          { tr: "Dziękuję! A gdzie jest apteka?" },
          { tr: "Odpowiedz, że apteka jest obok ratusza.", answerTr: "Jest obok ratusza." }
        ]
      },
      {
        tr: "Przepraszam, gdzie jest apteka?",
        why: "Poprawne jest zarówno <i>Entschuldigung</i>, jak i <i>Entschuldigen Sie</i> (bardziej formalne). Pytanie ma czasownik na drugim miejscu: <i>wo ist</i>."
      },
      {
        tr: "Proszę iść prosto i skręcić w prawo.",
        why: "W <i>geradeaus</i> <b>g</b> jest twarde, jak w polskim „g”, a <b>au</b> to dyftong /aʊ̯/, zbliżony do polskiego „au” w „auto”: od <b>a</b> przechodzi się do krótkiego <b>u</b> w jednej sylabie. W <i>biegen</i> <b>ie</b> to długie „i”."
      },
      {
        tr: "Przepraszam, gdzie jest apteka?",
        why: "<i>Entschuldigung</i>: <b>sch</b> czyta się jak /ʃ/, bliskie polskiemu „sz”. W <i>Apotheke</i> <b>th</b> czyta się jak zwykłe „t”."
      }
    ]
  },
  "lesson:a1-u06-l4": {
    theme: "Okolica",
    title: "Es gibt, es gibt keinen",
    objectives: [
      "mówić, co jest w mieście, za pomocą es gibt + biernik",
      "mówić, że czegoś nie ma, za pomocą es gibt keinen / keine / kein",
      "pytać Gibt es hier ...?"
    ],
    theory: [
      {
        h: "Es gibt: „jest” i „są”",
        p: "Żeby powiedzieć, że coś istnieje, używa się <strong>es gibt</strong>. Forma jest <strong>zawsze taka sama</strong>, w liczbie pojedynczej i mnogiej: <em>Es gibt einen Park</em>, <em>Es gibt zwei Kinos</em>. Po <em>es gibt</em> rzeczownik stoi w <strong>bierniku</strong>, więc zmienia się tylko rodzaj męski: <em>einen Park</em> (r. m.), <em>eine Bäckerei</em> (r. ż.), <em>ein Café</em> (r. n.). Pytanie: <em>Gibt es hier ein Hotel?</em>"
      },
      {
        h: "Mówienie, że czegoś nie ma",
        p: "Do zaprzeczenia służy <strong>kein</strong>, który odmienia się jak <em>ein</em>: <em>Es gibt keinen Supermarkt</em> (r. m.), <em>keine Bank</em> (r. ż.), <em>kein Museum</em> (r. n.). W omawianych tu przykładach przy <em>es gibt</em> zaprzeczeniem jest <em>kein</em>, nie <em>nicht</em> (<em>nicht</em> występuje w innych użyciach, na przykład <em>Das gibt es nicht</em>)."
      },
      {
        contrast: "Po polsku mówi się <em>jest</em> i <em>są</em>, więc czasownik zmienia się z liczbą (<em>jest park</em>, <em>są dwa kina</em>). Niemieckie <em>es gibt</em> nie zmienia się nigdy: <em>Es gibt einen Park</em>, <em>Es gibt zwei Kinos</em>. Zaprzeczenie też jest inne: polskie <em>nie ma</em> wymaga dopełniacza (<em>nie ma supermarketu</em>, <em>nie ma banku</em>), a niemieckie <em>kein</em> przybiera końcówkę biernika (<em>keinen Supermarkt</em>, <em>keine Bank</em>, <em>kein Museum</em>). Pytanie po polsku zaczyna się od <em>czy</em> (<em>Czy tu jest hotel?</em>), po niemiecku czasownik idzie na początek: <em>Gibt es hier ein Hotel?</em> Uważaj na rodzaj: <em>bank</em> jest męski po polsku, ale <em>die Bank</em> jest żeńska; <em>kościół</em> jest męski, a <em>die Kirche</em> żeńska; <em>hotel</em> jest męski, a <em>das Hotel</em> nijakie; <em>kawiarnia</em> jest żeńska, ale <em>das Café</em> nijakie; <em>kino</em> i <em>das Kino</em>, <em>muzeum</em> i <em>das Museum</em> są nijakie w obu językach."
      },
      {
        trap: "<em>Es gibt</em> zwykle wprowadza coś nowego: <em>Es gibt ein Café neben dem Rathaus</em>. Żeby powiedzieć, gdzie jest coś już znanego, używa się raczej <em>sein</em>: <em>Wo ist das Café? Es ist neben dem Rathaus.</em> Nie mów „Es gibt ein Bäckerei”: <em>Bäckerei</em> jest rodzaju żeńskiego, więc <em>eine Bäckerei</em>. I nie mów „Es gibt ein Park”: rodzaj męski w bierniku wymaga <em>einen</em>."
      },
      {
        tip: "Żeby dowiedzieć się, co jest w nowej okolicy, pytaj: <em>Gibt es hier ein Café / einen Supermarkt / eine Bank in der Nähe?</em> Pamiętaj o <em>-en</em> tylko w rodzaju męskim."
      }
    ],
    grammar: {
      title: "es gibt z biernikiem",
      note: "<b>Es gibt</b> + biernik: <b>einen</b> (r. m.), <b>eine</b> (r. ż.), <b>ein</b> (r. n.). Zaprzeczenie to <b>keinen</b>, <b>keine</b>, <b>kein</b>. Forma <i>es gibt</i> nie zmienia się w liczbie mnogiej.",
      table: {
        head: ["rodzaj", "twierdzenie", "zaprzeczenie"],
        rows: [
          ["męski", "Es gibt einen Park.", "Es gibt keinen Supermarkt."],
          ["żeński", "Es gibt eine Bäckerei.", "Es gibt keine Bank."],
          ["nijaki", "Es gibt ein Café.", "Es gibt kein Museum."]
        ]
      },
      examples: [
        { tr: "W pobliżu jest park.", note: "einen: rodzaj męski w bierniku" },
        { tr: "Jest tu piekarnia.", note: "eine: rodzaj żeński" },
        { tr: "Obok ratusza jest kawiarnia.", note: "ein: rodzaj nijaki" },
        { tr: "Czy jest tu hotel?", note: "pytanie: czasownik na pierwszym miejscu" },
        { tr: "Nie ma tu żadnego supermarketu.", note: "keinen: zaprzeczenie rodzaju męskiego" },
        { tr: "W pobliżu nie ma żadnego banku.", note: "keine: zaprzeczenie rodzaju żeńskiego" }
      ]
    },
    vocab: [
      "jest, są",
      "tu",
      "w pobliżu, niedaleko",
      "kawiarnia",
      "kino",
      "piekarnia",
      "restauracja",
      "bank",
      "muzeum",
      "hotel",
      "biblioteka",
      "kościół"
    ],
    exercises: [
      {
        q: "Które zdanie jest poprawne?",
        opts: ["Es gibt ein Park hier.", "Es gibt einen Park hier.", "Es gibt eine Park hier."],
        why: "<i>Der Park</i> jest rodzaju męskiego, a po <i>es gibt</i> trzeba biernika: <b>einen Park</b>."
      },
      {
        q: "Uzupełnij: „Es gibt ___ Supermarkt in der Nähe.”",
        hint: "der Supermarkt, rodzajnik nieokreślony w bierniku",
        why: "<i>Der Supermarkt</i> jest rodzaju męskiego, w bierniku: <b>einen</b>."
      },
      {
        q: "Uzupełnij: „Es gibt ___ Bank hier.” (żadnego)",
        hint: "die Bank, zaprzeczenie",
        why: "<i>Die Bank</i> jest rodzaju żeńskiego: zaprzeczeniem jest <b>keine</b>."
      },
      {
        q: "Uzupełnij: „___ es hier ein Café?”",
        hint: "pytanie: czy jest ...?",
        why: "W pytaniu tak/nie czasownik stoi na pierwszym miejscu: <b>Gibt</b> es hier ein Café?"
      },
      {
        q: "Dopasuj każde słowo do jego znaczenia.",
        pairs: ["kawiarnia", "piekarnia", "kino", "kościół"]
      },
      {
        tr: "Nie ma tu żadnego supermarketu.",
        why: "Poprawne jest też <i>Es gibt keinen Supermarkt hier</i> i, z inwersją, <i>Hier gibt es keinen Supermarkt</i>. Czasownik <i>gibt</i> zostaje na drugim miejscu."
      },
      {
        q: "Uzupełnij oba brakujące słowa.",
        tr: "Jest tu piekarnia i park.",
        why: "<i>Bäckerei</i> jest rodzaju żeńskiego (<b>eine</b>), <i>Park</i> męskiego (<b>einen</b>): w bierniku zmienia się tylko rodzaj męski."
      },
      {
        q: "Przetłumacz: „W mieście jest kino, ale nie ma muzeum.”",
        why: "Po <i>es gibt</i>: <i>ein Kino</i> jest rodzaju nijakiego (<i>ein</i>), zaprzeczeniem <i>Museum</i> (nijaki) jest <i>kein</i>. Inne pozycje o tej samej budowie są również poprawne."
      },
      {
        tr: "W pobliżu jest piekarnia i park.",
        why: "<i>Bäckerei</i>: <b>ä</b> czyta się jak polskie „e”, a <b>ck</b> jak „k”. W <i>Nähe</i> <b>h</b> się nie wymawia i wydłuża samogłoskę; <b>ä</b> jest długie."
      },
      {
        tr: "Czy jest tu hotel?",
        why: "<i>Hotel</i> ma akcent na drugiej sylabie: /hoˈtɛl/. Początkowe <b>h</b> jest lekko dyszące, łagodniejsze niż polskie „h”. W <i>gibt</i> <b>g</b> jest twarde."
      }
    ]
  },
  "lesson:a1-u06-test": {
    theme: "Sprawdzian",
    title: "Sprawdzian z jednostki 6",
    objectives: ["sprawdzić środki transportu, Dativ, wskazywanie drogi, wo? i es gibt"],
    theory: [
      {
        p: "Dziesięć pytań z całej jednostki. Zaliczasz przy 70%. Nie zaglądaj do lekcji, odpowiadając: jeśli czegoś nie pamiętasz, lepiej wrócić do powtórki."
      }
    ],
    exercises: [
      {
        tr: "Czas teraźniejszy fahren: ich, du, er/sie/es, wir.",
        why: "<i>Fahre</i>, <i>fährst</i>, <i>fährt</i>, <i>fahren</i>: <b>a</b> zmienia się w <b>ä</b> w 2. i 3. osobie liczby pojedynczej."
      },
      {
        q: "Uzupełnij: „Ich fahre mit ___ Bus.”",
        hint: "der Bus, rodzajnik określony w Dativie",
        why: "<i>Der Bus</i> jest rodzaju męskiego: po <i>mit</i> mówi się <b>dem</b>."
      },
      {
        q: "Uzupełnij: „Wir gehen ___ Schule.”",
        hint: "zu + der, w formie zlanej",
        why: "<i>Zu der</i> zlewa się w <b>zur</b>."
      },
      {
        q: "Uzupełnij: „Ich komme ___ Italien.”",
        hint: "pochodzenie z kraju",
        why: "Dla pochodzenia z kraju używa się <b>aus</b>."
      },
      {
        q: "Uzupełnij: „Die Apotheke ist ___ dem Rathaus.” (obok)",
        hint: "obok",
        why: "<b>Neben</b> + Dativ: <i>neben dem Rathaus</i>."
      },
      {
        q: "Uzupełnij: „___ Sie die erste Straße links.” (Proszę skręcić)",
        hint: "nehmen, grzecznościowy tryb rozkazujący, wielką literą na początku",
        why: "Grzecznościowy tryb rozkazujący zaczyna się od bezokolicznika: <b>Nehmen</b> Sie die erste Straße links."
      },
      {
        q: "Wybierz właściwy rodzajnik dla każdego rzeczownika.",
        why: "<i>Rathaus</i> jest rodzaju nijakiego, <i>Kreuzung</i> i <i>Apotheke</i> żeńskiego, <i>Bahnhof</i> męskiego.",
        items: ["ratusz", "skrzyżowanie", "dworzec", "apteka"]
      },
      {
        q: "Jak powiesz „Nie ma supermarketu”?",
        opts: ["Es gibt kein Supermarkt.", "Es gibt keinen Supermarkt.", "Es gibt nicht Supermarkt."],
        why: "<i>Der Supermarkt</i> jest rodzaju męskiego w bierniku: <b>keinen</b>."
      },
      {
        tr: "Przepraszam, gdzie jest dworzec?",
        why: "<i>Entschuldigung</i>: <b>sch</b> czyta się jak /ʃ/, bliskie polskiemu „sz”; w <i>Bahnhof</i> <b>h</b> po <b>a</b> wydłuża samogłoskę."
      },
      {
        tr: "Proszę iść prosto, a potem w lewo.",
        why: "<i>Geradeaus</i>: <b>g</b> jest twarde, a <b>au</b> to dyftong /aʊ̯/: od <b>a</b> przechodzi się do krótkiego <b>u</b> w jednej sylabie. W <i>links</i> <b>i</b> jest krótkie."
      }
    ]
  }
});
