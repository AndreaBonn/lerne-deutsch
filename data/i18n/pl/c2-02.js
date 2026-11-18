/* ============================================================
   Learner-language text (pl) for data/core/c2-02.js, unit c2-u04.
   Keys point at ids in the neutral layer; arrays merge by index,
   so their length has to match core.
   Checked by scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("pl", {
  "unit:c2-u04": {
    title: "Co mnie niepokoi",
    grammarNote: "Zdania względne z dopełniaczem dessen i deren (die Forscherin, deren Ergebnisse ...) oraz z przyimkiem przed zaimkiem (mit dem, auf dessen Grundlage) · zdania względne z wer, was i wo(r)- + przyimek (Wer zu spät kommt, den ...; alles, was ...; vieles, worüber ...) · rekcja czasowników i przymiotników, której nie da się wywnioskować z polskiego: dopełniacz (bedürfen, sich enthalten, beschuldigen, sich bewusst sein) i przyimki (zweifeln an, stolz auf, bestehen auf/in)"
  },
  "lesson:c2-u04-l1": {
    theme: "Argumentacja i pisanie formalne",
    title: "dessen, deren, mit dem",
    objectives: [
      "używać dessen i deren w znaczeniu „którego, której, których” (dzierżawczo)",
      "uzgadniać dessen i deren z poprzednikiem, a nie z rzeczownikiem, który po nich stoi",
      "stawiać przyimek przed zaimkiem względnym (mit dem, auf deren Grundlage)",
      "odmieniać przymiotnik, który stoi po dessen i deren"
    ],
    theory: [
      {
        h: "Dopełniacz zaimka względnego",
        p: "Żeby powiedzieć „którego powieść”, „której wyniki”, niemiecki używa dopełniacza zaimka względnego: <strong>dessen</strong>, gdy poprzednik jest rodzaju męskiego lub nijakiego, <strong>deren</strong>, gdy jest rodzaju żeńskiego lub w liczbie mnogiej. <em>Der Autor, dessen Roman verfilmt wurde</em>, „autor, którego powieść zekranizowano”; <em>die Forscherin, deren Ergebnisse umstritten sind</em>, „badaczka, której wyniki są kontrowersyjne”. Po <em>dessen</em> i <em>deren</em> nie ma rodzajnika: zaimek zajmuje jego miejsce, a rzeczownik, który po nim stoi, ma przypadek wymagany w zdaniu względnym."
      },
      {
        h: "Przyimek stoi z przodu",
        p: "Jeśli czasownik zdania względnego wymaga przyimka, przyimek otwiera zdanie względne i rządzi zaimkiem w swoim przypadku: <em>die Kommission, mit der wir zusammenarbeiten</em> (mit + celownik), <em>das Thema, für das sie sich interessiert</em> (für + biernik). Przy dopełniaczu przyimek też stoi z przodu, ale rządzi rzeczownikiem, a nie zaimkiem: w <em>das Gesetz, auf dessen Grundlage die Behörde entschieden hat</em> i <em>die Kollegen, mit deren Hilfe wir das Projekt abgeschlossen haben</em> <em>auf</em> i <em>mit</em> rządzą słowami <em>Grundlage</em> i <em>Hilfe</em>, a <em>dessen</em> i <em>deren</em> zostają w dopełniaczu, bo wskazują posiadacza. Czasownik w formie osobowej idzie na koniec, jak w każdym zdaniu podrzędnym."
      },
      {
        contrast: "Tu polski robi to samo co niemiecki: <em>którego, której, których</em> uzgadnia się z posiadaczem, czyli z poprzednikiem, a nie z rzeczą posiadaną. <em>Przedsiębiorstwo, którego szefowa ustąpiła</em> to dokładnie <em>Das Unternehmen, dessen Chefin zurückgetreten ist</em>: rodzaj nijaki przedsiębiorstwa, mimo że szefowa jest kobietą. Pułapki są gdzie indziej. Po pierwsze, podział form jest inny: <em>dessen</em> odpowiada polskiemu <em>którego</em> (rodzaj męski i nijaki), ale <em>deren</em> obejmuje i <em>której</em>, i <em>których</em>. Po drugie, rodzaj liczy się niemiecki, nie polski: <em>die Firma</em> to <em>deren</em>, choć „firma” też jest żeńska, ale <em>das Gesetz</em> to <em>dessen</em>, choć „ustawa” jest żeńska. Po trzecie, szyk: polski po przyimku stawia zaimek za rzeczownikiem (<em>na podstawie którego</em>, <em>z pomocą których</em>), a niemiecki zawsze przed nim: <em>auf dessen Grundlage</em>, <em>mit deren Hilfe</em>."
      },
      {
        trap: "<em>deren</em> i <em>derer</em> to nie to samo: <em>derer</em> to przeważnie zaimek wskazujący, który zapowiada zdanie względne (<em>die Zahl derer, die das Angebot nutzen</em>, „liczba tych, którzy ...”), a jako forma dzierżawcza przed rzeczownikiem nie występuje nigdy: tam zawsze stoi <em>deren</em> (<em>die Forscherin, deren Ergebnisse</em>). A przymiotnik po <em>dessen</em> i <em>deren</em> dostaje odmianę mocną, tak jakby nie było rodzajnika: <em>mit dessen neuem Vorschlag</em>, <em>deren letzter Roman</em>; <em>mit dessen neuen Vorschlag</em> słychać w mowie potocznej, ale w starannym tekście pisanym to błąd."
      },
      {
        tip: "Żeby zbudować zdanie względne, zacznij od zdania samodzielnego: <em>Die Regierung beruft sich auf ihre Ergebnisse.</em> Posiadaczem <em>Ergebnisse</em> jest <em>die Studie</em>, rodzaj żeński: <em>ihre</em> zamienia się w <em>deren</em>, a cała grupa z przyimkiem przechodzi na początek zdania względnego: <em>die Studie, auf deren Ergebnisse sich die Regierung beruft</em>."
      }
    ],
    grammar: {
      title: "Zaimek względny w dopełniaczu i z przyimkiem",
      note: "<b>dessen</b>: poprzednik rodzaju męskiego lub nijakiego · <b>deren</b>: poprzednik rodzaju żeńskiego lub w liczbie mnogiej. Uzgadnia się je z posiadaczem, a nie z rzeczownikiem, który po nich stoi, i zastępują rodzajnik. Przyimek otwiera zdanie względne: <i>mit dem, auf deren Grundlage</i>. Przymiotnik po dessen/deren: odmiana mocna.",
      table: {
        head: ["poprzednik", "dopełniacz", "z przyimkiem"],
        rows: [
          ["der Autor", "dessen Roman", "mit dem, auf dessen Grundlage"],
          ["das Gesetz", "dessen Text", "nach dem, auf dessen Grundlage"],
          ["die Forscherin", "deren Ergebnisse", "mit der, mit deren Hilfe"],
          ["die Kollegen", "deren Hilfe", "mit denen, mit deren Hilfe"]
        ]
      },
      examples: [
        { tr: "Autor, którego powieść zekranizowano, żyje bardzo na uboczu.", note: "dessen: der Autor jest rodzaju męskiego" },
        { tr: "Badaczka, której wyniki są kontrowersyjne, ujawniła swoje dane.", note: "deren: die Forscherin jest rodzaju żeńskiego, choć Ergebnisse to liczba mnoga" },
        { tr: "Koledzy, z których pomocą ukończyliśmy projekt, w międzyczasie odeszli.", note: "przyimek + deren: poprzednik w liczbie mnogiej" },
        { tr: "Ustawa, na podstawie której urząd podjął decyzję, jest badana przez sąd.", note: "auf dessen Grundlage: das Gesetz jest rodzaju nijakiego, choć „ustawa” jest żeńska" },
        { tr: "Komisja, z którą od lat współpracujemy, opublikowała swoje zalecenia.", note: "mit + celownik rodzaju żeńskiego: mit der" },
        { tr: "Minister, z którego nową propozycją prawie nikt się nie zgadza, trwa przy swoim planie.", note: "po dessen przymiotnik ma odmianę mocną: neuem" }
      ]
    },
    vocab: [
      "zarzut, obiekcja",
      "zastrzeżenie, rezerwa",
      "doniosłość, zasięg (decyzji)",
      "stan faktyczny, stan rzeczy",
      "podstawa",
      "autor, sprawca (czegoś)",
      "wiarygodność",
      "droga zawodowa, przebieg kariery",
      "odejść (ze stanowiska), wystąpić (z gremium)",
      "ujawnić, podać do wiadomości",
      "sporny, kontrowersyjny",
      "na uboczu, w odosobnieniu"
    ],
    exercises: [
      {
        q: "Uzupełnij: „Der Schriftsteller, ___ Roman gerade verfilmt wird, gibt keine Interviews.”",
        opts: [
          "dessen",
          "deren",
          "dem"
        ],
        why: "Poprzednik <i>der Schriftsteller</i> jest rodzaju męskiego: <b>dessen</b>, „którego”. <i>deren</i> pasowałoby do poprzednika żeńskiego albo w liczbie mnogiej; <i>dem</i> to celownik, a nie forma dzierżawcza."
      },
      {
        q: "Uzupełnij: „Das Unternehmen, ___ Chefin vergangene Woche zurückgetreten ist, sucht einen Nachfolger.”",
        opts: [
          "dessen",
          "deren",
          "der"
        ],
        why: "Liczy się posiadacz, <i>das Unternehmen</i>, który jest rodzaju nijakiego: <b>dessen</b>, jak w „przedsiębiorstwo, którego szefowa”. Rodzaj <i>Chefin</i> nie ma znaczenia: kto wybiera <i>deren</i>, uzgadnia zaimek z niewłaściwym rzeczownikiem."
      },
      {
        q: "Uzupełnij: „Die Ministerin, mit deren ___ Vorschlag niemand einverstanden war, trat zurück.”",
        opts: [
          "neuem",
          "neuen",
          "neue"
        ],
        why: "Po <i>dessen</i> i <i>deren</i> przymiotnik dostaje odmianę mocną, jak bez rodzajnika: <i>mit</i> + celownik rodzaju męskiego, <b>neuem</b>. <i>neuen</i> jest częste w mowie, ale w starannym tekście pisanym uchodzi za błąd; <i>neue</i> to nie celownik."
      },
      {
        q: "Uzupełnij: „Das ist die Kollegin, mit ___ Hilfe ich die Studie abgeschlossen habe.”",
        hint: "zaimek względny dzierżawczy, poprzednik rodzaju żeńskiego",
        why: "<b>deren</b>: <i>die Kollegin</i> jest rodzaju żeńskiego, a <i>mit deren Hilfe</i> znaczy „z której pomocą”. Przyimek zostaje z przodu, a zaimek stoi przed rzeczownikiem, nie za nim jak w polskim."
      },
      {
        q: "Uzupełnij: „Der Kollege, mit ___ ich das Büro teile, ist im Urlaub.”",
        hint: "zaimek względny po mit, poprzednik rodzaju męskiego",
        why: "<b>dem</b>: <i>mit</i> rządzi celownikiem, a poprzednik <i>der Kollege</i> jest rodzaju męskiego. Polskie „z którym” podsuwa narzędnik; po niemiecku przypadek wyznacza <i>mit</i>, a więc celownik."
      },
      {
        q: "Uzupełnij zaimkiem dzierżawczym: w pierwszej luce chodzi o Studie, w drugiej o Institut.",
        tr: "Badanie, na którego wynikach opiera się rząd, przygotował instytut, którego finansowanie do dziś nie zostało wyjaśnione.",
        why: "<b>deren</b>: <i>die Studie</i> jest rodzaju żeńskiego (<i>auf deren Ergebnisse</i>, z <i>sich berufen auf</i> + biernik), choć polskie „badanie” jest nijakie. <b>dessen</b>: <i>das Institut</i> jest rodzaju nijakiego, choć <i>Finanzierung</i> jest żeńskie."
      },
      {
        q: "W których zdaniach zaimek względny jest poprawny? (dwie odpowiedzi)",
        opts: [
          "Die Nachbarin, deren Sohn bei uns arbeitet, ist Ärztin.",
          "Das Projekt, an dessen Erfolg niemand mehr glaubte, wurde doch abgeschlossen.",
          "Die Nachbarin, dessen Sohn bei uns arbeitet, ist Ärztin.",
          "Das Projekt, an den Erfolg niemand mehr glaubte, wurde doch abgeschlossen."
        ],
        why: "Pierwsze dwa są poprawne: <i>deren</i> dla poprzednika żeńskiego <i>die Nachbarin</i>, <i>an dessen Erfolg</i> dla nijakiego <i>das Projekt</i>. W trzecim <i>dessen</i> idzie za rodzajem <i>Sohn</i>, a nie posiadacza; w czwartym brakuje dopełniacza: <i>an den Erfolg</i> nie mówi, czyj to sukces."
      },
      {
        q: "Ułóż słowa we właściwej kolejności.",
        tr: "Firma, której produkty ona reklamuje, od miesięcy znajduje się pod ostrzałem krytyki.",
        why: "<i>Die Firma, für deren Produkte sie wirbt, steht seit Monaten in der Kritik.</i> <i>werben für</i>: przyimek otwiera zdanie względne, <i>deren</i> odsyła do <i>die Firma</i>, a czasownik <i>wirbt</i> zamyka zdanie podrzędne. Polskie „reklamować coś” nie ma przyimka, niemieckie <i>werben</i> go wymaga."
      },
      {
        q: "Przetłumacz: „Pisarka, której ostatnią powieść przetłumaczono na dwadzieścia języków, mieszka w Wiedniu.” (übersetzen)",
        why: "<i>Die Schriftstellerin, deren letzter Roman in zwanzig Sprachen übersetzt wurde, lebt in Wien.</i> <i>deren</i>, bo poprzednik jest rodzaju żeńskiego; <i>letzter</i> ma mocną końcówkę mianownika rodzaju męskiego, bo <i>Roman</i> jest podmiotem strony biernej. Przyjmowane są też <i>Autorin</i> i Perfekt strony biernej <i>übersetzt worden ist</i>."
      },
      {
        tr: "Raport, którego publikacji oczekiwano od miesięcy, nie zawiera prawie nic nowego. Eksperci, na których ocenie opiera się rząd, pozostają anonimowi.",
        why: "W <i>Veröffentlichung</i> akcent pada na <b>öf</b>; w <i>Urteil</i> akcent pada na <b>Ur</b>; w <i>anonym</i> akcent pada na <b>nym</b>."
      },
      {
        tr: "Autorka, której powieść zekranizowano, żyje bardzo na uboczu.",
        why: "W <i>Autorin</i> akcent pada na <b>to</b>; w <i>verfilmt</i> akcent pada na <b>filmt</b>; w <i>zurückgezogen</i> akcent pada na <b>rück</b>."
      }
    ]
  },
  "lesson:c2-u04-l2": {
    theme: "Argumentacja i pisanie formalne",
    title: "wer, was, worüber",
    objectives: [
      "używać wer w znaczeniu ogólnego „kto” i dobierać przypadek korelatu (der, den, dem)",
      "używać was po alles, nichts, etwas, das i po rzeczownikowym stopniu najwyższym rodzaju nijakiego",
      "odnosić was do całego zdania („co”)",
      "zastępować przyimek + was formą wo(r)- + przyimek (worüber, wofür, wovor)"
    ],
    theory: [
      {
        h: "wer: „kto” bez poprzednika",
        p: "<strong>wer</strong> otwiera zdanie względne, które nie odnosi się do żadnego rzeczownika: <em>Wer zu spät kommt, den bestraft das Leben</em>, „kto się spóźnia, tego karze życie”. Zdanie główne podejmuje zdanie względne zaimkiem wskazującym, korelatem, w przypadku, którego samo potrzebuje: <em>den</em> (biernik, <em>bestrafen</em>), <em>dem</em> (celownik: <em>Wer viel verspricht, dem glaubt man nicht</em>). Jeśli oba przypadki są takie same, korelat można pominąć: <em>Wer A sagt, (der) muss auch B sagen</em>. Może też odpaść, gdy przypadek w zdaniu względnym stoi niżej w hierarchii niż w zdaniu głównym (mianownik, potem biernik, potem celownik): <em>Wem das zu viel ist, (der) kann gehen</em>; większość piszących i tak go zostawia, dla jasności. Również <em>wer</em> się odmienia: <em>wem</em>, <em>wen</em>, <em>wessen</em>."
      },
      {
        h: "was i wo(r)-",
        p: "<strong>was</strong> zastępuje <em>das</em>, gdy poprzednik nie jest konkretnym rzeczownikiem: po <em>alles, nichts, etwas, vieles, manches, das</em> i po rzeczownikowym stopniu najwyższym rodzaju nijakiego (<em>das Beste, was ...</em>). Używa się go też bez poprzednika (<em>Was mich beunruhigt, ist ...</em>) i w odniesieniu do całego zdania: <em>Er hat bestanden, was niemand erwartet hatte</em>, „czego nikt się nie spodziewał”. Jeśli czasownik wymaga przyimka, zamiast przyimka + <em>was</em> używa się <strong>wo(r)- + przyimek</strong>: <em>vieles, worüber wir uns nicht einig waren</em>. <em>r</em> pojawia się przed samogłoską: <em>woran, worauf, worüber</em>, ale <em>wofür, womit, wovon, wovor</em>."
      },
      {
        contrast: "Polski ma tu konstrukcję bardzo podobną: <em>kto ..., ten / tego / temu</em>. <em>Kto rano wstaje, temu Pan Bóg daje</em> działa jak <em>Wer früh aufsteht, dem ...</em>: <em>kto</em> stoi w przypadku zdania względnego, a zaimek wskazujący w przypadku zdania głównego. Tak samo <em>co</em>: <em>wszystko, co mówi</em> to <em>alles, was er sagt</em>, a <em>..., czego nikt się nie spodziewał</em> to <em>..., was niemand erwartet hatte</em>. Różnica zaczyna się przy przyimkach. Polski zostawia przyimek przed odmienionym <em>co</em> (<em>to, o czym mówimy</em>; <em>wszystko, o co walczyła</em>; <em>to, czego się bałem</em>), a niemiecki zlewa przyimek z zaimkiem w jedno słowo: <em>das, worüber wir sprechen</em>; <em>alles, wofür sie gekämpft hat</em>; <em>das, wovor ich Angst hatte</em>. A przyimek bierze się z niemieckiego czasownika, nie z polskiego: „walczyć <em>o</em>” to <em>kämpfen für</em>, więc <em>wofür</em>, nie <em>worum</em>."
      },
      {
        trap: "Po <em>alles, nichts, etwas, das Einzige, das Beste</em> stoi <em>was</em>, nie <em>das</em>: <em>Alles, was er sagt</em>, a nie <em>alles, das er sagt</em>. Dosłowne tłumaczenie „o czym”, „za co” daje <em>über was, für was</em>: w tekście formalnym to formy potoczne, staranna forma to <em>worüber, wofür</em>. Natomiast przy poprzedniku, który jest konkretnym rzeczownikiem, zostaje przyimek + <em>der/die/das</em>: <em>die Frage, über die wir sprechen</em>."
      },
      {
        tip: "Żeby wybrać formę <em>wer</em> i korelat, zadaj dwa osobne pytania: jakiego przypadka wymaga czasownik zdania względnego (<em>schaden</em> + celownik: <em>wem</em>)? I jakiego przypadka wymaga czasownik zdania głównego (<em>fragen</em> + biernik: <em>den</em>)? Odpowiedzi mogą się różnić i wtedy korelat jest zwykle potrzebny. Przypadek bierze się zawsze z czasownika niemieckiego, nie z polskiego: „szkodzić komuś” i <em>schaden</em> zgadzają się tu przypadkiem."
      }
    ],
    grammar: {
      title: "Zdania względne z wer, was i wo(r)-",
      note: "<b>wer ..., der/den/dem</b>: „kto”, korelat w przypadku zdania głównego (można go pominąć, gdy przypadek jest ten sam). <b>was</b>: po alles, nichts, etwas, das, das Beste; bez poprzednika; w odniesieniu do całego zdania. <b>wo(r)- + przyimek</b> zamiast przyimka + was: <i>worüber, woran, wofür, wovor</i>.",
      table: {
        head: ["poprzednik", "zaimek względny", "przykład"],
        rows: [
          ["brak (osoby)", "wer, wem, wen", "Wer lügt, dem glaubt man nicht."],
          ["alles, nichts, etwas, das", "was", "Alles, was er sagt, stimmt."],
          ["stopień najwyższy, rodzaj nijaki", "was", "das Beste, was passieren konnte"],
          ["całe zdanie", "was", "..., was niemand erwartet hatte."],
          ["was + przyimek", "wo(r)- + przyimek", "vieles, worüber wir streiten"]
        ]
      },
      examples: [
        { tr: "Kto się spóźnia, tego karze życie.", note: "wer + korelat w bierniku: bestrafen wymaga biernika" },
        { tr: "To, co mnie niepokoi, to obojętność wielu ludzi.", note: "was bez poprzednika, jako podmiot" },
        { tr: "Wszystko, co twierdził, dało się obalić.", note: "po alles: was" },
        { tr: "Najlepsze, co mogło nas spotkać, to była ta odmowa.", note: "po rzeczownikowym stopniu najwyższym: was" },
        { tr: "Zdał egzamin, czego nikt się nie spodziewał.", note: "was podejmuje całe poprzednie zdanie" },
        { tr: "Było wiele rzeczy, co do których nie byliśmy zgodni.", note: "sich einig sein über: worüber" }
      ]
    },
    vocab: [
      "obojętność",
      "twierdzenie, teza",
      "sprzeczność",
      "wniosek (logiczny)",
      "błędny wniosek, złudzenie",
      "prośba, sprawa (leżąca komuś na sercu)",
      "obalić, odeprzeć",
      "udokumentować, potwierdzić",
      "niepokoić",
      "przyznać (coś), przyznać się (do czegoś)",
      "trafny, przekonujący",
      "wątpliwy, dyskusyjny"
    ],
    exercises: [
      {
        q: "Uzupełnij: „Alles, ___ sie gesagt hat, war gelogen.”",
        opts: [
          "was",
          "das",
          "welches"
        ],
        why: "Po <i>alles</i> zaimkiem względnym jest <b>was</b>: poprzednik nie jest konkretnym rzeczownikiem, jak w polskim „wszystko, co”. <i>das</i> i <i>welches</i> wymagałyby rzeczownika rodzaju nijakiego jako poprzednika."
      },
      {
        q: "Uzupełnij: „___ sich nicht an die Regeln hält, ___ droht ein Bußgeld.”",
        opts: [
          "Wer ... dem",
          "Wer ... der",
          "Der ... wer"
        ],
        why: "<i>Wer</i> jest podmiotem <i>sich halten</i>; w zdaniu głównym <i>drohen</i> wymaga celownika, więc korelat to <b>dem</b>: „kto nie przestrzega zasad, temu grozi grzywna”. <i>der</i> to mianownik."
      },
      {
        q: "W formalnym tekście pisanym: „Das ist eine Frage, ___ ich lange nachgedacht habe.”",
        opts: [
          "über die",
          "worüber",
          "über was"
        ],
        why: "Poprzednik jest konkretnym rzeczownikiem, <i>eine Frage</i>, rodzaju żeńskiego: <b>über die</b> (<i>nachdenken über</i> + biernik). <i>worüber</i> stosuje się po <i>alles, etwas, das</i> albo w odniesieniu do całego zdania; po rzeczowniku jest przestarzałe lub potoczne. <i>über was</i> jest potoczne."
      },
      {
        q: "Uzupełnij: „Das Einzige, ___ mich an dem Vorschlag stört, ist der Zeitplan.”",
        hint: "zaimek względny po das Einzige",
        why: "<b>was</b>: <i>das Einzige</i>, tak jak <i>alles</i> i rzeczownikowy stopień najwyższy rodzaju nijakiego, wymaga <i>was</i>."
      },
      {
        q: "Uzupełnij: „Das ist genau das, ___ ich Angst hatte.”",
        hint: "wo(r)- + przyimek z Angst haben",
        why: "<b>wovor</b>: <i>Angst haben vor</i>; po <i>das</i> przyimek + <i>was</i> zamienia się w <i>wo(r)-</i> + przyimek. Polskie „to, czego się bałem” nie ma przyimka, niemieckie wymaga <i>vor</i>. Przed spółgłoską nie ma <i>r</i>: <i>wovor</i>, nie <i>worvor</i>."
      },
      {
        q: "Uzupełnij odmienionym wer i korelatem.",
        tr: "Tych, którym reforma najbardziej szkodzi, najmniej pytano o zdanie.",
        why: "<b>Wem</b>: <i>schaden</i> wymaga celownika. <b>den</b>: w zdaniu głównym <i>fragen</i> wymaga biernika, tak jak polskie „pytać kogoś”. Przypadki są różne, więc korelat czyni zdanie jasnym; ściśle biorąc można by go pominąć, bo celownik <i>wem</i> stoi w hierarchii niżej niż biernik, ale w starannym tekście się go zostawia."
      },
      {
        q: "Połącz każde słowo z jego znaczeniem.",
        pairs: [
          "przyznać (coś), przyznać się (do czegoś)",
          "obalić, odeprzeć",
          "trafny, przekonujący",
          "błędny wniosek"
        ]
      },
      {
        q: "Ułóż słowa we właściwej kolejności.",
        tr: "Tym, co mnie niepokoi w raporcie, jest obojętność władz.",
        why: "<i>Was mich an dem Bericht beunruhigt, ist die Gleichgültigkeit der Behörden.</i> Zdanie względne z <i>was</i> pełni funkcję podmiotu i zajmuje pierwsze miejsce; czasownik <i>ist</i> stoi zaraz po przecinku."
      },
      {
        q: "Przetłumacz: „Wszystko, o czym rozmawialiśmy, pozostaje poufne.” (vertraulich)",
        why: "<i>Alles, worüber wir gesprochen haben, bleibt vertraulich.</i> Przy <i>sprechen über</i> potrzebne jest <i>worüber</i>, nie dosłowne <i>über was</i>; przy czasowniku przechodnim wystarczy <i>was</i>: <i>Alles, was wir besprochen haben</i> (albo <i>diskutiert haben</i>)."
      },
      {
        tr: "Wielu czytelników niepokoi nie samo badanie, lecz to, co robi z nim polityka. Kto uważnie czyta liczby, nie znajduje w nich prawie nic, czym należałoby się denerwować.",
        why: "W <i>beunruhigt</i> akcent pada na <b>un</b>; w <i>aufregen</i> akcent pada na <b>auf</b>; w <i>worüber</i> akcent pada na <b>ü</b>."
      },
      {
        tr: "Wszystko, co twierdził, dało się obalić.",
        why: "W <i>behauptet</i> akcent pada na <b>haup</b>; w <i>widerlegen</i>, czasowniku nierozdzielnym, akcent pada na <b>le</b>; w <i>ließ</i> <b>ie</b> jest długie."
      }
    ]
  },
  "lesson:c2-u04-l3": {
    theme: "Argumentacja i pisanie formalne",
    title: "Rekcja, której nie da się zgadnąć",
    objectives: [
      "używać czasowników i przymiotników z dopełniaczem (bedürfen, sich enthalten, beschuldigen, sich bewusst sein)",
      "dobierać właściwy przyimek tam, gdzie polski używa innego (zweifeln an, stolz auf)",
      "odróżniać bestehen auf, bestehen aus i bestehen in",
      "rozpoznawać rejestr formalny rekcji z dopełniaczem"
    ],
    theory: [
      {
        h: "Czasowniki i przymiotniki z dopełniaczem",
        p: "Niewielka grupa czasowników łączy się z dopełnieniem w dopełniaczu: <em>bedürfen</em> (potrzebować, wymagać), <em>gedenken</em> (upamiętniać, czcić pamięć), <em>sich enthalten</em> (powstrzymać się od), <em>sich vergewissern</em> (upewnić się co do), <em>sich bedienen</em> (posłużyć się). Niektóre mają biernik i dopełniacz: <em>jemanden einer Sache beschuldigen</em> albo <em>anklagen</em>, „oskarżać kogoś o coś”, oraz <em>jemanden einer Sache verdächtigen</em>, „podejrzewać kogoś o coś”. Tak samo kilka przymiotników: <em>sich einer Sache bewusst sein</em>, <em>einer Sache würdig</em>, <em>sich einer Sache schuldig machen</em>. Czasowniki takie jak <em>bedürfen</em>, <em>gedenken</em>, <em>sich enthalten</em> i <em>beschuldigen</em> należą do rejestru wysokiego: na co dzień mówi się <em>brauchen</em> zamiast <em>bedürfen</em>. Natomiast <em>sich einer Sache bewusst sein</em> jest powszechne także w zwykłym użyciu."
      },
      {
        h: "Przyimka uczymy się razem z czasownikiem",
        p: "Wiele niemieckich czasowników i przymiotników wymaga stałego przyimka, a przypadek, który po nim następuje, jest częścią rekcji: <em>zweifeln an</em> + celownik, <em>stolz auf</em> + biernik, <em>angewiesen auf</em> + biernik, <em>sich erkundigen nach</em> + celownik. Ten sam czasownik zmienia znaczenie razem z przyimkiem: <em>bestehen auf</em> (nalegać na, obstawać przy), <em>bestehen aus</em> (składać się z), <em>bestehen in</em> (polegać na)."
      },
      {
        contrast: "Polski też ma czasowniki z dopełniaczem i tu często zgadza się z niemieckim: „potrzebować czegoś” to <em>einer Sache bedürfen</em>, „być świadomym czegoś” to <em>sich einer Sache bewusst sein</em>, „być godnym czegoś” to <em>einer Sache würdig</em>. Ale to nie reguła: „oskarżać kogoś <em>o</em> coś” (o + biernik) to <em>jemanden einer Sache beschuldigen</em>, dopełniacz bez przyimka, a „wstrzymać się <em>od</em> głosu” to <em>sich der Stimme enthalten</em>. Przyimki zgadzają się rzadko: „wątpić <em>w</em> coś” to <em>an etwas zweifeln</em>, „dumny <em>z</em>” to <em>stolz auf</em>, „zależeć <em>od</em>” to <em>abhängen von</em>, „przyzwyczaić się <em>do</em>” to <em>sich gewöhnen an</em>. Najgroźniejsze jest „polegać <em>na</em>”: <em>Trudność polega na tym, żeby ...</em> to <em>Die Schwierigkeit besteht darin, ...</em>, a nie <em>darauf</em>, bo <em>bestehen auf</em> znaczy „nalegać na”. Polskie <em>na</em> pasuje tylko do tego drugiego."
      },
      {
        trap: "<em>sich interessieren für</em>, ale <em>interessiert an</em>: czasownik i przymiotnik mają różne przyimki, a polskie „interesować się czymś” (narzędnik bez przyimka) nie podpowiada żadnego z nich. A przy <em>bedürfen</em> dopełnienie nigdy nie stoi w bierniku: <em>Der Plan bedarf einer Überarbeitung</em>, a nie <em>eine Überarbeitung</em>."
      },
      {
        tip: "Ucz się czasowników i przymiotników zawsze razem z ich rekcją, jak jednego słowa: nie <em>zweifeln</em>, tylko <em>an etwas (Dat.) zweifeln</em>; nie <em>bewusst</em>, tylko <em>sich einer Sache (Gen.) bewusst sein</em>."
      }
    ],
    grammar: {
      title: "Rekcja czasowników i przymiotników",
      note: "<b>Dopełniacz</b>: bedürfen, gedenken, sich enthalten, sich vergewissern; jemanden einer Sache beschuldigen; sich einer Sache bewusst sein, einer Sache würdig. <b>Przyimki</b>: zweifeln an + Dat., stolz auf + Akk., angewiesen auf + Akk., bestehen auf / aus / in + Dat. Czasowniki z dopełniaczem należą do rejestru formalnego.",
      table: {
        head: ["niemiecki", "polski"],
        rows: [
          ["einer Sache bedürfen", "potrzebować czegoś, wymagać czegoś"],
          ["jemanden einer Sache beschuldigen", "oskarżać kogoś o coś"],
          ["sich einer Sache bewusst sein", "być świadomym czegoś"],
          ["an einer Sache zweifeln", "wątpić w coś"],
          ["auf etwas stolz sein", "być dumnym z czegoś"],
          ["auf etwas bestehen / aus etwas bestehen / in etwas bestehen", "nalegać na / składać się z / polegać na"]
        ]
      },
      examples: [
        { tr: "Reforma wymaga gruntownego sprawdzenia.", note: "bedürfen + dopełniacz: einer gründlichen Prüfung" },
        { tr: "Oskarżono go o oszustwo.", note: "beschuldigen + biernik osoby + dopełniacz zarzutu" },
        { tr: "Jest w pełni świadoma ryzyka.", note: "sich bewusst sein + dopełniacz liczby mnogiej: der Risiken" },
        { tr: "Dwóch posłów wstrzymało się od głosu.", note: "sich der Stimme enthalten: dopełniacz, bez przyimka" },
        { tr: "Nikt nie wątpi w autentyczność dokumentu.", note: "zweifeln an + celownik, a nie „in”" },
        { tr: "Opozycja nalega na jawne przesłuchanie.", note: "bestehen auf + celownik: nalegać" }
      ]
    },
    vocab: [
      "potrzebować, wymagać (+ dopełniacz)",
      "powstrzymać się od, wstrzymać się od (+ dopełniacz)",
      "oskarżać (kogoś o coś)",
      "upamiętniać, czcić pamięć (+ dopełniacz)",
      "upewnić się co do (+ dopełniacz)",
      "wątpić w",
      "zdany na, zależny od",
      "świadomy",
      "dumny z",
      "godny (+ dopełniacz)",
      "rekcja",
      "zarzut"
    ],
    exercises: [
      {
        q: "Uzupełnij: „Die Gesetzesänderung bedarf ___.”",
        opts: [
          "der Zustimmung des Bundesrats",
          "die Zustimmung des Bundesrats",
          "auf die Zustimmung des Bundesrats"
        ],
        why: "<i>bedürfen</i> rządzi dopełniaczem, tak jak polskie „wymagać czegoś”: <b>der Zustimmung</b>. Biernik <i>die Zustimmung</i> idzie z <i>brauchen</i>; <i>bedürfen</i> nie łączy się z przyimkiem."
      },
      {
        q: "Uzupełnij: „Niemand zweifelt ___ ihrer Ehrlichkeit.”",
        opts: [
          "an",
          "von",
          "über"
        ],
        why: "<b>zweifeln an</b> + celownik. Polskie „wątpić w” nie pomaga, a „wątpliwości co do” kusi <i>über</i>, które jest tu błędne; <i>von</i> też nie pasuje."
      },
      {
        q: "„Opozycja nalega na jawne przesłuchanie.” Uzupełnij: „Die Opposition besteht ___ einer öffentlichen Anhörung.”",
        opts: [
          "auf",
          "aus",
          "in"
        ],
        why: "<b>bestehen auf</b>: nalegać na, obstawać przy. <i>bestehen aus</i> znaczy „składać się z”, <i>bestehen in</i> „polegać na”."
      },
      {
        q: "Uzupełnij: „Sie ist sich ___ Risiken durchaus bewusst.”",
        hint: "sich bewusst sein + dopełniacz liczby mnogiej",
        why: "<b>der</b>: <i>sich einer Sache bewusst sein</i> rządzi dopełniaczem, jak polskie „świadomy czegoś”, a dopełniacz liczby mnogiej rodzajnika to <i>der</i>."
      },
      {
        q: "Uzupełnij: „Viele Rentner sind ___ die Hilfe ihrer Kinder angewiesen.”",
        hint: "przyimek przy angewiesen",
        why: "<b>auf</b>: <i>angewiesen sein auf</i> + biernik, „być zdanym na, zależeć od”."
      },
      {
        q: "Uzupełnij: w pierwszej luce zaimek względny, w drugiej przyimek przy bestehen.",
        tr: "Poseł, którego oskarża się o przekupstwo, odrzuca zarzut i nalega na niezależne śledztwo.",
        why: "<b>den</b>: <i>beschuldigen</i> wymaga osoby w bierniku (a zarzutu w dopełniaczu, <i>der Bestechung</i>, bez przyimka „o”). <b>auf</b>: <i>bestehen auf</i>, „nalegać na”."
      },
      {
        q: "W których zdaniach rekcja jest poprawna? (dwie odpowiedzi)",
        opts: [
          "Der Plan bedarf einer gründlichen Überarbeitung.",
          "Wir sind stolz auf unsere Ergebnisse.",
          "Der Plan bedarf eine gründliche Überarbeitung.",
          "Sie interessiert sich an moderner Kunst."
        ],
        why: "Pierwsze dwa są poprawne: <i>bedürfen</i> + dopełniacz, <i>stolz auf</i> + biernik. W trzecim jest biernik zamiast dopełniacza; w czwartym czasownik wymaga <i>für</i>: <i>sich für moderne Kunst interessieren</i>, a <i>an</i> łączy się z przymiotnikiem <i>interessiert</i>."
      },
      {
        q: "Ułóż słowa we właściwej kolejności.",
        tr: "Oskarżona zaprzecza, jakoby dopuściła się oszustwa.",
        why: "<i>Die Angeklagte bestreitet, sich des Betrugs schuldig gemacht zu haben.</i> <i>sich einer Sache schuldig machen</i> rządzi dopełniaczem, jak polskie „dopuścić się czegoś”; bezokolicznik przeszły <i>gemacht zu haben</i> zamyka zdanie."
      },
      {
        q: "Przetłumacz: „Jesteśmy świadomi odpowiedzialności, którą bierzemy na siebie.” (sich bewusst sein, übernehmen)",
        why: "<i>Wir sind uns der Verantwortung bewusst, die wir übernehmen.</i> <i>sich bewusst sein</i> wymaga dopełniacza, a zaimek zwrotny stoi w celowniku: <i>uns</i>. Zdanie względne może też stać zaraz po <i>Verantwortung</i>: <i>Wir sind uns der Verantwortung, die wir übernehmen, bewusst</i>."
      },
      {
        tr: "Wniosek wymaga zgody wszystkich członków. Kto nie może wziąć udziału w głosowaniu, powinien wcześniej dowiedzieć się w zarządzie, jakie są terminy.",
        why: "W <i>Zustimmung</i> akcent pada na <b>Zu</b>; w <i>Abstimmung</i> akcent pada na <b>Ab</b>; w <i>erkundigen</i> akcent pada na <b>kun</b>."
      },
      {
        tr: "Jest w pełni świadoma ryzyka.",
        why: "W <i>Risiken</i> akcent pada na <b>Ri</b>; w <i>durchaus</i> akcent może padać na <b>durch</b> albo na <b>aus</b>; w <i>bewusst</i> <b>u</b> jest krótkie."
      }
    ]
  },
  "lesson:c2-u04-test": {
    theme: "Sprawdzian",
    title: "Test: Co mnie niepokoi",
    objectives: [
      "sprawdzić zdania względne i rekcję z tej jednostki oraz powtórzyć poziom C2 na egzaminie końcowym"
    ],
    theory: [
      {
        p: "Egzamin końcowy poziomu C2: dwanaście pytań z tej jednostki, z powtórką przydawki imiesłowowej (jednostka 1) i rejestru (jednostka 3). Zaliczasz przy 70%. Nie zaglądaj do lekcji w trakcie odpowiadania: jeśli czegoś nie pamiętasz, lepiej wrócić i powtórzyć."
      }
    ],
    exercises: [
      {
        q: "Uzupełnij: „Die Firma, ___ Gründerin den Preis erhalten hat, sitzt in Basel.”",
        hint: "zaimek względny dzierżawczy, poprzednik rodzaju żeńskiego",
        why: "<b>deren</b>: <i>die Firma</i> jest rodzaju żeńskiego, a <i>deren Gründerin</i> znaczy „której założycielka”."
      },
      {
        q: "Uzupełnij: „Er hat alles verloren, ___ ihm wichtig war.”",
        hint: "zaimek względny po alles",
        why: "<b>was</b>: po <i>alles</i> zaimkiem względnym jest zawsze <i>was</i>."
      },
      {
        q: "Uzupełnij: „Das Vorhaben bedarf ___ sorgfältigen Planung.”",
        hint: "bedürfen + dopełniacz, rodzajnik",
        why: "<b>einer</b> (albo <b>der</b>): <i>bedürfen</i> rządzi dopełniaczem, a dopełniacz rodzaju żeńskiego rodzajnika to <i>einer</i> albo <i>der</i>."
      },
      {
        q: "Uzupełnij przydawką imiesłowową: „Die im Bericht ___ Mängel wurden inzwischen behoben.” (zakwestionować, wytknąć: beanstanden)",
        hint: "imiesłów II od beanstanden, liczba mnoga po die",
        why: "<b>beanstandeten</b>: imiesłów II w znaczeniu biernym („usterki wytknięte w raporcie”), końcówka <i>-en</i> po rodzajniku liczby mnogiej <i>die</i>. <i>beanstanden</i> jest nierozdzielny: bez <i>ge-</i>."
      },
      {
        q: "Które zdanie pasuje do formalnego listu?",
        opts: [
          "Wir bitten Sie, uns die fehlenden Unterlagen bis zum 15. März zukommen zu lassen.",
          "Schicken Sie uns mal die fehlenden Sachen bis zum 15. März.",
          "Wär nett, wenn Sie uns die Unterlagen bis zum 15. März schicken."
        ],
        why: "Pierwsze jest w rejestrze formalnym: <i>wir bitten Sie</i>, <i>Unterlagen</i>, <i>zukommen lassen</i>. W drugim <i>mal</i> i <i>Sachen</i> są potoczne; w trzecim <i>Wär nett</i> pochodzi z rozmowy."
      },
      {
        q: "Uzupełnij: „Die Frage, ___ es eigentlich ankommt, hat niemand gestellt.”",
        opts: [
          "auf die",
          "auf der",
          "auf welcher"
        ],
        why: "<i>es kommt auf etwas an</i> wymaga <i>auf</i> + biernik, a poprzednik <i>die Frage</i> jest rodzaju żeńskiego: <b>auf die</b>. <i>auf der</i> i <i>auf welcher</i> to celowniki."
      },
      {
        q: "„Trudność polega na tym, żeby przekonać wszystkich zainteresowanych.” Uzupełnij: „Die Schwierigkeit besteht ___, alle Beteiligten zu überzeugen.”",
        opts: [
          "darin",
          "darauf",
          "daraus"
        ],
        why: "<b>bestehen in</b>, „polegać na”, z zaimkiem przysłówkowym <i>darin</i>, który zapowiada bezokolicznik. Polskie „na tym” kusi <i>darauf</i>, ale to znaczyłoby „nalegać”; <i>daraus</i> to „składać się z”."
      },
      {
        q: "Które zdania są poprawne? (dwie odpowiedzi)",
        opts: [
          "Wer zuletzt lacht, lacht am besten.",
          "Die Studie, auf deren Ergebnisse sich der Bericht stützt, ist veraltet.",
          "Die Studie, auf dessen Ergebnisse sich der Bericht stützt, ist veraltet.",
          "Er ist sich die Risiken bewusst."
        ],
        why: "Pierwsze dwa są poprawne: <i>wer</i> bez korelatu (ten sam przypadek w obu zdaniach) i <i>deren</i> dla poprzednika żeńskiego <i>die Studie</i>. W trzecim <i>dessen</i> nie zgadza się z <i>Studie</i>; w czwartym <i>sich bewusst sein</i> wymaga dopełniacza: <i>der Risiken</i>."
      },
      {
        q: "Uzupełnij: w pierwszej luce zaimek względny dzierżawczy, w drugiej rodzajnik, którego wymaga sich schuldig machen.",
        tr: "Ministra, której dymisji od tygodni się domagają, zaprzecza, jakoby dopuściła się niewłaściwego postępowania.",
        why: "<b>deren</b>: <i>die Ministerin</i> jest rodzaju żeńskiego. <b>eines</b> (albo <b>des</b>): <i>sich einer Sache schuldig machen</i> rządzi dopełniaczem, a <i>Fehlverhalten</i> jest rodzaju nijakiego: <i>eines Fehlverhaltens</i>."
      },
      {
        q: "Przetłumacz w rejestrze formalnym: „Kto jest świadomy ryzyka, nie potrzebuje dalszych ostrzeżeń.” (sich bewusst sein, bedürfen)",
        why: "<i>Wer sich der Risiken bewusst ist, bedarf keiner weiteren Warnungen.</i> <i>sich bewusst sein</i> i <i>bedürfen</i> rządzą dopełniaczem, podobnie jak polskie „świadomy czegoś”, „potrzebować czegoś”; korelat <i>der</i> można dodać albo pominąć, bo <i>wer</i> i podmiot zdania głównego stoją w mianowniku."
      },
      {
        tr: "Ekspertów niepokoi nie tyle liczba przypadków, ile obojętność, z jaką reagują na nie władze. Środki wymienione w raporcie pilnie wymagają weryfikacji.",
        why: "W <i>Gleichgültigkeit</i> akcent pada na <b>Gleich</b>; w <i>Behörden</i> akcent pada na <b>hör</b>; w <i>Überprüfung</i> akcent pada na <b>prü</b>."
      },
      {
        tr: "Kto jest świadomy doniosłości swojej decyzji, działa ostrożniej.",
        why: "W <i>Tragweite</i> akcent pada na <b>Trag</b>; w <i>Entscheidung</i> akcent pada na <b>schei</b>; w <i>vorsichtiger</i> akcent pada na <b>vor</b>."
      }
    ]
  }
});
