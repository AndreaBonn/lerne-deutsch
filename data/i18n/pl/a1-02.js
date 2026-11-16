/* ============================================================
   Teksty w języku ucznia (pl) do data/core/a1-02.js, jednostka a1-u04.
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
  }
});
