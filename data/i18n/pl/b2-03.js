/* ============================================================
   Learner-language text (pl) for data/core/b2-03.js, unit b2-u06.
   Keys point at ids in the neutral layer; arrays merge by index,
   so their length has to match core.
   Checked by scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("pl", {
  "unit:b2-u06": {
    title: "Nawet jeśli pada",
    grammarNote: "Zdania przyzwalające z obwohl i obgleich · trotz + dopełniacz · trotzdem i dennoch z inwersją · auch wenn i selbst wenn, także z Konjunktiv II · jedoch, allerdings, sondern, vielmehr, hingegen, zwar ... aber"
  },
  "lesson:b2-u06-l1": {
    theme: "Argumentowanie w debacie",
    title: "obwohl, obgleich, trotz",
    objectives: [
      "wyrażać przyzwolenie za pomocą obwohl i obgleich",
      "używać trotz z dopełniaczem",
      "używać trotzdem i dennoch w zdaniu głównym",
      "wybierać między spójnikiem, przyimkiem i przysłówkiem"
    ],
    theory: [
      {
        h: "Trzy słowa na jedną myśl",
        p: "Niemiecki wyraża przyzwolenie trzema różnymi środkami, a różnica tkwi w składni. <strong>obwohl</strong> (bardziej oficjalnie: <em>obgleich</em>) to spójnik: otwiera zdanie podrzędne z czasownikiem na końcu. <em>Obwohl es regnet, gehen wir spazieren.</em> <strong>trotz</strong> to przyimek z dopełniaczem i nie łączy się z czasownikiem: <em>Trotz des Regens gehen wir spazieren.</em> <strong>trotzdem</strong> i <strong>dennoch</strong> to przysłówki: stoją w zdaniu głównym, a gdy zajmują pierwsze miejsce, czasownik idzie zaraz za nimi. <em>Es regnet. Trotzdem gehen wir spazieren.</em>"
      },
      {
        h: "Po zdaniu podrzędnym inwersja",
        p: "Gdy zdanie z <em>obwohl</em> stoi na początku, samo zajmuje pierwsze miejsce zdania głównego: zaraz po nim idzie czasownik osobowy, potem podmiot. <em>Obwohl er müde war, <strong>arbeitete er</strong> weiter.</em> Jeśli zdanie podrzędne stoi na końcu, zdanie główne ma zwykły szyk: <em>Er arbeitete weiter, obwohl er müde war.</em>"
      },
      {
        contrast: "Tu polszczyzna dobrze się zgadza z niemieckim: <em>chociaż</em> i <em>mimo że</em> otwierają zdanie (<em>obwohl</em>), <em>mimo</em> i <em>pomimo</em> łączą się z rzeczownikiem w dopełniaczu, tak jak <em>trotz</em> (<em>mimo deszczu</em> = <em>trotz des Regens</em>), a <em>mimo to</em> i <em>jednak</em> stoją w zdaniu głównym (<em>trotzdem</em>, <em>dennoch</em>). Różni się szyk: po <em>Trotzdem</em> i po zdaniu z <em>obwohl</em> czasownik stoi przed podmiotem (<em>gehen wir</em>)."
      },
      {
        trap: "W standardowym języku pisanym <em>trotzdem</em> jest przysłówkiem, nie spójnikiem: <em>Trotzdem gehen wir</em>, a nie <em>trotzdem wir gehen</em>. A <em>trotz</em> rządzi dopełniaczem: <em>trotz des Regens</em>. W mowie słychać też <em>trotz dem Regen</em>, ale w piśmie używa się dopełniacza."
      },
      {
        tip: "W odmianie mocnej dopełniacz rodzaju męskiego i nijakiego dodaje <em>-s</em> albo <em>-es</em> także do rzeczownika (rzeczowniki męskie słabe dostają natomiast <em>-(e)n</em>: <em>trotz des Studenten</em>): <em>trotz des Regens, trotz des schlechten Wetters</em>. W rodzaju żeńskim i w liczbie mnogiej rzeczownik się nie zmienia: <em>trotz der Kälte, trotz der hohen Kosten</em>."
      }
    ],
    grammar: {
      title: "Przyzwolenie: spójnik, przyimek, przysłówek",
      note: "<b>obwohl / obgleich</b> + zdanie podrzędne z czasownikiem na końcu. <b>trotz</b> + dopełniacz, bez czasownika. <b>trotzdem / dennoch</b> w zdaniu głównym; na pierwszym miejscu czasownik idzie zaraz za nimi.",
      table: {
        head: ["słowo", "co to jest", "miejsce czasownika", "przykład"],
        rows: [
          ["obwohl, obgleich", "spójnik", "na końcu zdania podrzędnego", "obwohl es regnet"],
          ["trotz", "przyimek + dopełniacz", "bez czasownika", "trotz des Regens"],
          ["trotzdem, dennoch", "przysłówek", "zaraz za nimi, gdy stoją na początku", "Trotzdem gehen wir."]
        ]
      },
      examples: [
        { tr: "Chociaż pada, idziemy na spacer.", note: "obwohl + tryb oznajmujący, potem inwersja: gehen wir" },
        { tr: "Idziemy na spacer, chociaż pada.", note: "zdanie podrzędne na końcu: zdanie główne ma zwykły szyk" },
        { tr: "Pada. Mimo to idziemy na spacer.", note: "trotzdem na pierwszym miejscu: gehen wir" },
        { tr: "Mimo deszczu idziemy na spacer.", note: "trotz + dopełniacz: des Regens" },
        { tr: "Chociaż koszty wzrosły, cena pozostaje taka sama.", note: "obgleich: bardziej oficjalne niż obwohl" },
        { tr: "Mimo wysokich kosztów miasto kontynuowało projekt.", note: "dopełniacz liczby mnogiej: der hohen Kosten" }
      ]
    },
    vocab: [
      "zarzut, zastrzeżenie",
      "sprzeczność",
      "argument",
      "debata",
      "kompromis",
      "wada, minus",
      "chociaż, mimo że",
      "mimo, pomimo (+ dopełniacz)",
      "mimo to",
      "jednak, mimo to",
      "zarzucać, oponować",
      "sprzeciwiać się, zaprzeczać (+ celownik)"
    ],
    exercises: [
      {
        q: "Które zdanie jest poprawne?",
        opts: [
          "Obwohl es regnet, gehen wir spazieren.",
          "Obwohl es regnet, wir gehen spazieren.",
          "Obwohl regnet es, gehen wir spazieren."
        ],
        why: "Z <i>obwohl</i> czasownik idzie na koniec zdania podrzędnego (<i>es regnet</i>), a następujące po nim zdanie główne zaczyna się od czasownika: <b>gehen wir</b>."
      },
      {
        q: "Która forma jest poprawna w tekście pisanym?",
        opts: [
          "trotz des Regens",
          "trotz der Regen",
          "trotz des Regen"
        ],
        why: "<i>trotz</i> rządzi dopełniaczem: <i>der Regen</i> zmienia się w <b>des Regens</b>, z <i>-s</i> także na rzeczowniku."
      },
      {
        q: "Które zdanie jest poprawne?",
        opts: [
          "Es regnet. Trotzdem gehen wir spazieren.",
          "Es regnet. Trotzdem wir gehen spazieren.",
          "Es regnet. Trotzdem wir spazieren gehen."
        ],
        why: "<i>trotzdem</i> to przysłówek: na pierwszym miejscu idzie zaraz za nim czasownik osobowy, <b>gehen wir</b>."
      },
      {
        q: "Uzupełnij: „___ sie krank war, ging sie zur Arbeit.”",
        hint: "spójnik przyzwalający, czasownik na końcu",
        why: "<b>Obwohl</b> (albo <i>obgleich</i>, <i>obschon</i>): otwiera zdanie podrzędne z czasownikiem <i>war</i> na końcu."
      },
      {
        q: "Uzupełnij: „Trotz ___ schlechten Wetters fand das Konzert statt.”",
        hint: "dopełniacz rodzaju nijakiego",
        why: "<b>des</b>: <i>trotz</i> rządzi dopełniaczem, a <i>das Wetter</i> zmienia się w <i>des schlechten Wetters</i>."
      },
      {
        q: "Uzupełnij zdanie.",
        tr: "Pogoda była zła. Mimo to koncert się odbył.",
        why: "<i>Trotzdem</i> (albo <i>Dennoch</i>) na pierwszym miejscu, potem czasownik <i>fand</i>; partykuła od <i>stattfinden</i> idzie na koniec: <i>fand ... statt</i>."
      },
      {
        q: "Połącz każde słowo z jego znaczeniem.",
        pairs: [
          "zarzut, zastrzeżenie",
          "sprzeczność",
          "kompromis",
          "wada, minus"
        ]
      },
      {
        q: "Ułóż wyrazy we właściwej kolejności.",
        tr: "Mimo wysokich kosztów miasto kontynuowało projekt.",
        why: "<i>Trotz der hohen Kosten hat die Stadt das Projekt fortgesetzt.</i> Wyrażenie z <i>trotz</i> zajmuje pierwsze miejsce, potem czasownik <i>hat</i>, imiesłów na końcu."
      },
      {
        q: "Przetłumacz: „Chociaż był zmęczony, pracował dalej.” (weiterarbeiten)",
        why: "<i>Obwohl er müde war, hat er weitergearbeitet</i> (albo <i>arbeitete er weiter</i>): po zdaniu z <i>obwohl</i> czasownik stoi przed podmiotem. Zdanie podrzędne na końcu też jest poprawne."
      },
      {
        tr: "Chociaż czynsze w mieście bardzo wzrosły, wielu młodych ludzi chce tam mieszkać. Mimo wysokich cen popyt jest duży.",
        why: "W <i>gestiegen</i> <b>ie</b> jest długie; w <i>Nachfrage</i> akcent pada na <b>Nach</b>; w <i>Leute</i> <b>eu</b> to [ɔʏ]."
      },
      {
        tr: "Mimo deszczu na demonstrację przyszło wielu ludzi.",
        why: "W <i>Regens</i> <b>e</b> pierwszej sylaby jest długie; w <i>Demonstration</i> akcent pada na ostatnią sylabę, <b>tion</b> [tsi̯oːn]."
      }
    ]
  },
  "lesson:b2-u06-l2": {
    theme: "Warunki i stanowiska",
    title: "auch wenn, selbst wenn",
    objectives: [
      "wyrażać przyzwolenie wobec możliwej sytuacji za pomocą auch wenn",
      "wzmacniać je za pomocą selbst wenn",
      "łączyć przyzwolenie z hipotezą nierzeczywistą w Konjunktiv II",
      "odróżniać obwohl od auch wenn"
    ],
    theory: [
      {
        h: "Fakt albo możliwa sytuacja",
        p: "<strong>obwohl</strong> mówi o fakcie: <em>Obwohl es regnet</em>, naprawdę pada. <strong>auch wenn</strong> pasuje do faktu, a także do sytuacji tylko możliwej: <em>Auch wenn es morgen regnet, fahren wir los</em>, może będzie padać, może nie. <strong>selbst wenn</strong> jest mocniejsze: „nawet jeśli”. Tak jak po <em>obwohl</em>, następujące zdanie główne zaczyna się od czasownika: <em>Auch wenn du recht hast, <strong>solltest du</strong> höflich bleiben.</em>"
      },
      {
        h: "Z hipotezą nierzeczywistą",
        p: "Jeśli sytuacja jest nierzeczywista, w obu zdaniach pojawia się <strong>Konjunktiv II</strong>: <em>Selbst wenn ich Zeit hätte, würde ich nicht mitkommen.</em> W przeszłości: <em>Selbst wenn sie gewonnen hätte, wäre sie nicht zufrieden gewesen.</em> Bliska konstrukcja to <strong>wie ... auch</strong>, „jakkolwiek”: <em>Wie schwer es auch sein mag, wir schaffen das.</em> Tu zdanie główne zwykle zachowuje własny szyk: <em>wir schaffen</em>."
      },
      {
        contrast: "Polszczyzna rozróżnia to podobnie: <em>nawet jeśli</em> dla sytuacji możliwej (<em>auch wenn</em>, <em>selbst wenn</em>) i <em>nawet gdyby</em> dla nierzeczywistej. <em>Nawet gdybym miał czas, nie poszedłbym</em> to w niemieckim Konjunktiv II w obu zdaniach: <em>Selbst wenn ich Zeit hätte, würde ich nicht mitkommen</em>. W polskim przykładzie warunkowość zaznaczają i <em>gdybym</em>, i <em>poszedłbym</em>; w niemieckim odpowiadają im <em>hätte</em> i <em>würde ... mitkommen</em>."
      },
      {
        trap: "<em>selbst</em> nie znaczy tu „sam”: <em>selbst wenn</em> to „nawet jeśli”. I po zdaniu podrzędnym nie wracaj do polskiego szyku: <em>Auch wenn es regnet, gehen wir</em>, a nie <em>Auch wenn es regnet, wir gehen</em>."
      },
      {
        tip: "Jeśli po polsku powiesz „nawet jeśli” albo „nawet gdyby”, w niemieckim pasuje <em>auch wenn</em> albo <em>selbst wenn</em>; jeśli powiesz „chociaż” o czymś, co jest faktem, najpierw pomyśl o <em>obwohl</em>."
      }
    ],
    grammar: {
      title: "auch wenn, selbst wenn i hipoteza nierzeczywista",
      note: "<b>obwohl</b>: fakt. <b>auch wenn</b>: fakt albo sytuacja możliwa. <b>selbst wenn</b>: „nawet jeśli”. Hipoteza nierzeczywista: <b>Konjunktiv II</b> w obu zdaniach.",
      table: {
        head: ["zdanie", "co wyraża"],
        rows: [
          ["Obwohl es regnet, gehen wir spazieren.", "fakt: naprawdę pada"],
          ["Auch wenn es morgen regnet, fahren wir los.", "sytuacja możliwa"],
          ["Selbst wenn ich Zeit hätte, würde ich nicht mitkommen.", "hipoteza nierzeczywista, Konjunktiv II"],
          ["Wie schwer es auch sein mag, wir schaffen das.", "„jakkolwiek”: zdanie główne zwykle bez inwersji"]
        ]
      },
      examples: [
        { tr: "Nawet jeśli pada, idziemy na spacer.", note: "auch wenn: fakt albo możliwość" },
        { tr: "Nawet gdybym miał czas, nie poszedłbym.", note: "nierzeczywiste: hätte ... würde" },
        { tr: "Nawet jeśli masz rację, powinieneś pozostać uprzejmy.", note: "po zdaniu podrzędnym: solltest du" },
        { tr: "Wyjeżdżamy jutro, nawet jeśli będzie brzydka pogoda.", note: "selbst wenn: nawet jeśli" },
        { tr: "Jakkolwiek trudne by to było, damy radę.", note: "wie ... auch: zdanie główne zostaje wir schaffen" },
        { tr: "Nawet gdyby wygrała, nie byłaby zadowolona.", note: "nierzeczywiste w przeszłości: hätte ... gewonnen, wäre ... gewesen" }
      ]
    },
    vocab: [
      "warunek",
      "przesłanka, wymóg",
      "ryzyko",
      "decyzja",
      "punkt widzenia, stanowisko",
      "większość",
      "nawet jeśli, choćby",
      "nawet jeśli, nawet gdyby",
      "nawet",
      "przyznawać (się)",
      "ustępować",
      "obstawać (auf + celownik: przy)"
    ],
    exercises: [
      {
        q: "Które zdanie jest poprawne?",
        opts: [
          "Auch wenn es regnet, gehen wir spazieren.",
          "Auch wenn es regnet, wir gehen spazieren.",
          "Auch wenn regnet es, gehen wir spazieren."
        ],
        why: "Czasownik na końcu zdania podrzędnego (<i>es regnet</i>), potem zdanie główne zaczyna się od czasownika: <b>gehen wir</b>."
      },
      {
        q: "Które zdanie poprawnie wyraża hipotezę nierzeczywistą?",
        opts: [
          "Selbst wenn ich Zeit hätte, würde ich nicht mitkommen.",
          "Selbst wenn ich Zeit habe, würde ich nicht mitkommen.",
          "Selbst wenn hätte ich Zeit, würde ich nicht mitkommen."
        ],
        why: "Nierzeczywiste: Konjunktiv II w obu zdaniach, <b>hätte ... würde</b>. Drugie miesza tryb oznajmujący z Konjunktiv, trzecie nie przesuwa czasownika na koniec."
      },
      {
        q: "Nie wiesz jeszcze, czy jutro będzie padać. Które zdanie pasuje?",
        opts: [
          "Auch wenn es morgen regnet, fahren wir los.",
          "Obwohl es morgen regnet, fahren wir los.",
          "Trotz es morgen regnet, fahren wir los."
        ],
        why: "<b>auch wenn</b> pasuje do sytuacji tylko możliwej; <i>obwohl</i> przedstawia deszcz jako pewny fakt. <i>trotz</i> to przyimek i nie otwiera zdania."
      },
      {
        q: "Uzupełnij: „___ wenn du recht hast, solltest du höflich bleiben.”",
        hint: "auch albo selbst",
        why: "<b>Auch</b> albo <b>Selbst</b>: <i>auch wenn</i> „nawet jeśli”, <i>selbst wenn</i> mocniejsze „nawet jeśli”."
      },
      {
        q: "Uzupełnij: „Selbst wenn ich das Geld hätte, ___ ich das Auto nicht kaufen.”",
        hint: "Konjunktiv II od werden, ich",
        why: "<b>würde</b>: w hipotezie nierzeczywistej także zdanie główne przechodzi w Konjunktiv II, <i>würde ... kaufen</i>."
      },
      {
        q: "Uzupełnij zdanie.",
        tr: "Wyjeżdżamy jutro, nawet jeśli pogoda jest zła.",
        why: "<i>Wir fahren morgen los, auch wenn das Wetter schlecht ist</i> (albo <i>selbst wenn</i>): czasownik <i>ist</i> idzie na koniec zdania podrzędnego."
      },
      {
        q: "Które zdania są poprawne?",
        opts: [
          "Auch wenn es spät ist, rufe ich dich an.",
          "Selbst wenn er fragt, sage ich nichts.",
          "Auch wenn es spät ist, ich rufe dich an.",
          "Selbst wenn fragt er, sage ich nichts."
        ],
        why: "Dwa pierwsze. Trzecie nie stawia czasownika na początku po zdaniu podrzędnym, czwarte nie przesuwa czasownika na koniec zdania podrzędnego."
      },
      {
        q: "Ułóż wyrazy we właściwej kolejności.",
        tr: "Nawet gdybym miał czas, nie poszedłbym z wami.",
        why: "<i>Selbst wenn ich Zeit hätte, würde ich nicht mitkommen.</i> <i>hätte</i> zamyka zdanie podrzędne, <i>würde</i> otwiera główne, bezokolicznik <i>mitkommen</i> idzie na koniec."
      },
      {
        q: "Przetłumacz: „Nawet jeśli (on) ma rację, nie powinien krzyczeć.” (schreien)",
        why: "<i>Auch wenn er recht hat, sollte er nicht schreien</i> (także <i>selbst wenn</i> albo <i>Recht</i> wielką literą): po zdaniu podrzędnym czasownik <i>sollte</i> stoi na początku."
      },
      {
        tr: "Chociaż większość była przeciw, burmistrz trzymał się swojego planu. Nawet jeśli będą protesty, nie chce ustąpić.",
        why: "W <i>Mehrheit</i> <b>e</b> jest długie, a <b>h</b> w <i>-heit</i> się wymawia [h]; w <i>festgehalten</i> akcent pada na <b>fest</b>; w <i>Proteste</i> na <b>tes</b>."
      },
      {
        tr: "Nawet gdybym miał więcej pieniędzy, dalej mieszkałbym tutaj.",
        why: "W <i>hätte</i> <b>ä</b> jest krótkie; w <i>würde</i> <b>ü</b> jest krótkie; w <i>wohnen</i> <b>o</b> jest długie, a <b>h</b> nieme."
      }
    ]
  },
  "lesson:b2-u06-l3": {
    theme: "Poprawianie i precyzowanie",
    title: "jedoch, allerdings, sondern, vielmehr",
    objectives: [
      "przeciwstawiać dwie myśli za pomocą jedoch i hingegen",
      "zawężać stwierdzenie za pomocą allerdings i zwar ... aber",
      "poprawiać stwierdzenie za pomocą sondern i vielmehr",
      "rozpoznawać spójniki typowe dla języka pisanego"
    ],
    theory: [
      {
        h: "Przeciwstawianie i zawężanie",
        p: "<strong>jedoch</strong> („jednak”) jest typowe dla języka pisanego: zachowuje się jak przysłówek i może stać na pierwszym miejscu, z czasownikiem zaraz za nim, albo wewnątrz zdania. <em>Der Vorschlag klingt gut. Er ist jedoch zu teuer.</em> <strong>allerdings</strong> („choć, przy czym”) zawęża to, co właśnie powiedziano: <em>Die Wohnung ist schön, allerdings ziemlich laut.</em> <strong>hingegen</strong> („natomiast”) przeciwstawia dwa elementy albo dwie sytuacje: <em>Ich trinke Kaffee, meine Frau hingegen trinkt Tee.</em> <strong>zwar ... aber</strong> przyznaje, a potem się sprzeciwia: <em>Das Auto ist zwar alt, aber es fährt gut.</em>"
      },
      {
        h: "Poprawianie",
        p: "<strong>sondern</strong> następuje po przeczeniu (<em>nicht</em>, <em>kein</em>) i stawia właściwy element na miejscu zaprzeczonego: <em>Das Problem ist nicht das Geld, sondern die Zeit.</em> Występuje też w <em>nicht nur ... sondern auch</em>: <em>Er ist nicht nur Arzt, sondern auch Musiker.</em> <strong>vielmehr</strong> („raczej, przeciwnie”) poprawia mocniej, często w nowym zdaniu: <em>Das war kein Zufall. Vielmehr hatte er alles geplant.</em>"
      },
      {
        contrast: "Polszczyzna rozróżnia to podobnie: <em>ale</em> dodaje zastrzeżenie (<em>nie jest bogaty, ale jest szczęśliwy</em> = <em>aber</em>), a <em>tylko</em> albo <em>lecz</em> po przeczeniu poprawia (<em>nie dziś, tylko jutro</em> = <em>nicht heute, sondern morgen</em>). <em>Nie tylko ..., ale też</em> to zwykle <em>nicht nur ... sondern auch</em>. O wyborze decyduje relacja logiczna, nie sam polski spójnik: <em>nie jest bogaty, ale jest szczęśliwy</em> (obie rzeczy są prawdą) to <em>Er ist nicht reich, aber er ist glücklich</em>, a <em>sondern</em> stawia właściwy element na miejscu tego, któremu się zaprzeczyło."
      },
      {
        trap: "<em>sondern</em> wprowadza poprawkę po przeczeniu (<em>Er kommt nicht heute, sondern morgen</em>); w <em>nicht nur ..., sondern auch</em> dodaje natomiast drugi element. Jeśli pierwsze stwierdzenie pozostaje prawdziwe, a ty dodajesz ograniczenie, potrzebne jest <em>aber</em> albo <em>allerdings</em>: <em>Das Essen war gut, aber teuer.</em>"
      },
      {
        tip: "<em>allerdings</em> bywa też emfatyczną odpowiedzią, „jeszcze jak”: <em>Hat es dir gefallen? – Allerdings!</em>"
      }
    ],
    grammar: {
      title: "Spójniki do przeciwstawiania, zawężania i poprawiania",
      note: "<b>jedoch</b>, <b>allerdings</b>, <b>hingegen</b>, <b>vielmehr</b> zachowują się jak przysłówki: na pierwszym miejscu czasownik idzie zaraz za nimi. <b>sondern</b> po przeczeniu, żeby poprawić, oraz w <i>nicht nur ... sondern auch</i>.",
      table: {
        head: ["spójnik", "znaczenie", "użycie"],
        rows: [
          ["jedoch", "jednak", "język pisany; na pierwszym miejscu albo wewnątrz zdania"],
          ["allerdings", "choć, przy czym (zastrzeżenie)", "zawęża to, co właśnie powiedziano"],
          ["hingegen", "natomiast", "przeciwstawia dwa elementy albo sytuacje"],
          ["zwar ... aber", "wprawdzie ..., ale", "przyznaje, potem się sprzeciwia"],
          ["sondern", "tylko, lecz", "po nicht albo kein, poprawia"],
          ["vielmehr", "raczej, przeciwnie", "poprawia mocniej, często w nowym zdaniu"]
        ]
      },
      examples: [
        { tr: "Propozycja brzmi dobrze. Jest jednak za droga.", note: "jedoch wewnątrz zdania" },
        { tr: "Mieszkanie jest ładne, choć dość głośne.", note: "allerdings: zawęża" },
        { tr: "Problemem nie są pieniądze, tylko czas.", note: "nicht ..., sondern: poprawka" },
        { tr: "Jest nie tylko lekarzem, ale też muzykiem.", note: "nicht nur ... sondern auch" },
        { tr: "To nie był przypadek. Przeciwnie, wszystko zaplanował.", note: "vielmehr na pierwszym miejscu: hatte er" },
        { tr: "Ja piję kawę, moja żona natomiast pije herbatę.", note: "hingegen: przeciwstawienie dwóch elementów" }
      ]
    },
    vocab: [
      "teza",
      "twierdzenie",
      "dowód, potwierdzenie",
      "wniosek",
      "przeciwieństwo, kontrast (im Gegensatz zu: w przeciwieństwie do)",
      "ograniczenie, zastrzeżenie",
      "jednak",
      "choć, przy czym (zastrzeżenie)",
      "tylko, lecz (po przeczeniu)",
      "raczej, przeciwnie",
      "natomiast",
      "wprawdzie (zwar ... aber)"
    ],
    exercises: [
      {
        q: "Uzupełnij: „Er kommt nicht heute, ___ morgen.”",
        opts: [
          "sondern",
          "denn",
          "obwohl"
        ],
        why: "Po przeczeniu <b>sondern</b> stawia właściwą informację na miejscu zaprzeczonej: nie dziś, tylko jutro. <i>denn</i> wprowadza przyczynę, <i>obwohl</i> zdanie podrzędne z czasownikiem na końcu."
      },
      {
        q: "Uzupełnij: „Das Essen war gut, ___ etwas teuer.”",
        opts: [
          "allerdings",
          "sondern",
          "vielmehr"
        ],
        why: "<b>allerdings</b> zawęża stwierdzenie, które pozostaje prawdziwe. <i>sondern</i> i <i>vielmehr</i> poprawiają, a tu nie ma czego poprawiać."
      },
      {
        q: "Uzupełnij: „Sie spricht nicht nur Deutsch, ___ auch Japanisch.”",
        opts: [
          "sondern",
          "denn",
          "vielmehr"
        ],
        why: "<i>nicht nur ... <b>sondern</b> auch</i> odpowiada „nie tylko ..., ale też”."
      },
      {
        q: "Uzupełnij: „Er ist nicht krank, ___ nur müde.”",
        hint: "poprawka po przeczeniu",
        why: "<b>sondern</b>: nie jest chory, tylko zmęczony."
      },
      {
        q: "Uzupełnij: „Das Auto ist ___ alt, aber es fährt gut.”",
        hint: "wprawdzie ..., ale",
        why: "<b>zwar</b> ... <i>aber</i>: przyznajesz, że jest stary, a potem dodajesz zastrzeżenie."
      },
      {
        q: "Uzupełnij zdanie.",
        tr: "To nie był przypadek. Przeciwnie, wszystko zaplanował.",
        why: "<i>Vielmehr hatte er alles geplant</i>: <i>vielmehr</i> na pierwszym miejscu, potem czasownik <i>hatte</i>, imiesłów <i>geplant</i> na końcu."
      },
      {
        q: "Połącz każdy spójnik z jego znaczeniem.",
        pairs: [
          "jednak",
          "choć, przy czym (zastrzeżenie)",
          "raczej, przeciwnie",
          "natomiast (w przeciwstawieniu)"
        ]
      },
      {
        q: "Ułóż wyrazy we właściwej kolejności.",
        tr: "Ja piję kawę, moja żona natomiast pije herbatę.",
        why: "<i>Ich trinke Kaffee, meine Frau hingegen trinkt Tee</i>: <i>hingegen</i> po podmiocie; może też stać po czasowniku, <i>meine Frau trinkt hingegen Tee</i>."
      },
      {
        q: "Przetłumacz: „Problemem nie są pieniądze, tylko czas.”",
        why: "<i>Das Problem ist nicht das Geld, sondern die Zeit</i>: po przeczeniu poprawka wymaga <i>sondern</i>, nie <i>aber</i>."
      },
      {
        tr: "Badanie wprawdzie pokazuje postępy, ale wyniki nie są jeszcze pewne. Problemem nie jest technika, tylko brak pieniędzy.",
        why: "W <i>Fortschritte</i> akcent pada na <b>Fort</b>; w <i>Ergebnisse</i> na <b>geb</b>; w <i>Technik</i> <b>ch</b> to [ç]."
      },
      {
        tr: "Nie chodzi o pieniądze, raczej chodzi o szacunek.",
        why: "W <i>vielmehr</i> akcent pada na <b>mehr</b>; w <i>Respekt</i> na <b>spekt</b>; w <i>geht</i> <b>h</b> jest nieme."
      }
    ]
  },
  "lesson:b2-u06-test": {
    theme: "Sprawdzian",
    title: "Test: Nawet jeśli pada",
    objectives: [
      "sprawdzić zdania przyzwalające i spójniki oraz powtórzyć Konjunktiv II, Konjunktiv I i stronę bierną poziomu B2"
    ],
    theory: [
      {
        p: "Dwanaście pytań z jednostki i z całego poziomu B2. Zaliczenie od 70%. Nie zaglądaj do lekcji w trakcie odpowiadania: jeśli czegoś nie pamiętasz, lepiej wrócić i powtórzyć."
      }
    ],
    exercises: [
      {
        q: "Uzupełnij: „___ des Regens fand das Fest statt.”",
        hint: "przyimek przyzwalający + dopełniacz",
        why: "<b>Trotz</b>: przyimek przyzwalający z dopełniaczem <i>des Regens</i>."
      },
      {
        q: "Uzupełnij: „Wenn ich mehr Zeit gehabt ___, wäre ich gekommen.”",
        hint: "Konjunktiv II od haben, ich",
        why: "<b>hätte</b>: hipoteza nierzeczywista w przeszłości, <i>hätte ... gehabt</i>."
      },
      {
        q: "Uzupełnij w stylu prasowym: „Sie erklärte, sie ___ das Problem nicht gekannt.”",
        hint: "Konjunktiv I od haben, sie (ona)",
        why: "<b>habe</b>: mowa zależna w przeszłości, <i>habe ... gekannt</i>."
      },
      {
        q: "Uzupełnij w stronie biernej, w Präteritum: „Die Brücke ___ im Jahr 1900 gebaut.”",
        hint: "Präteritum od werden, trzecia osoba liczby pojedynczej",
        why: "<b>wurde</b>: strona bierna z <i>werden</i> + imiesłów, <i>wurde ... gebaut</i>."
      },
      {
        q: "Dokończ: „Obwohl er krank war, ...”",
        opts: [
          "ging er zur Arbeit.",
          "er ging zur Arbeit.",
          "ging zur Arbeit er."
        ],
        why: "Po zdaniu podrzędnym zdanie główne zaczyna się od czasownika: <b>ging er</b>."
      },
      {
        q: "Które zdanie jest poprawne?",
        opts: [
          "Das Formular muss heute ausgefüllt werden.",
          "Das Formular muss heute ausgefüllt worden.",
          "Das Formular muss heute ausfüllen werden."
        ],
        why: "Strona bierna z czasownikiem modalnym: modalny + imiesłów + <b>werden</b>. <i>worden</i> występuje w czasach złożonych, nie po modalnym w czasie teraźniejszym."
      },
      {
        q: "Uzupełnij: „Er tut so, als ob er nichts ___.”",
        opts: [
          "wüsste",
          "gewusst",
          "wissen"
        ],
        why: "W porównaniach nierzeczywistych z <i>als ob</i> używa się zwykle Konjunktiv II: spośród tych opcji tylko <b>wüsste</b> jest poprawne."
      },
      {
        q: "Które zdania są poprawne?",
        opts: [
          "Auch wenn es regnet, gehen wir spazieren.",
          "Trotz des Regens gehen wir spazieren.",
          "Obwohl es regnet, wir gehen spazieren.",
          "Trotz es regnet, gehen wir spazieren."
        ],
        why: "Dwa pierwsze. Trzecie nie stawia czasownika na początku po zdaniu podrzędnym; czwarte używa <i>trotz</i> jak spójnika, a to przyimek."
      },
      {
        q: "Uzupełnij zdanie.",
        tr: "Nawet gdybym miał czas, nie poszedłbym z wami.",
        why: "<i>Selbst wenn ich Zeit hätte, würde ich nicht mitkommen</i>: Konjunktiv II w obu zdaniach."
      },
      {
        q: "Przetłumacz: „Mimo ruchu na drogach przyjechaliśmy punktualnie.” (der Verkehr)",
        why: "<i>Trotz des Verkehrs sind wir pünktlich angekommen</i>: <i>trotz</i> + dopełniacz, jak polskie „mimo ruchu”; poprawne są też <i>kamen wir ... an</i> i wersja z <i>wir</i> na początku."
      },
      {
        tr: "Chociaż rząd obiecał nowe ustawy, przez długi czas nic się nie zmieniło. Krytycy mówili, że nie potraktowano obywateli poważnie.",
        why: "W <i>Regierung</i> akcent pada na <b>gie</b>; w <i>versprochen</i> <b>v</b> brzmi [f]; w <i>Kritiker</i> akcent pada na <b>Kri</b>."
      },
      {
        tr: "Nawet jeśli koszty są wysokie, projekt powinien być kontynuowany.",
        why: "W <i>Kosten</i> <b>o</b> jest krótkie; w <i>Projekt</i> akcent pada na <b>jekt</b>; w <i>fortgesetzt</i> na <b>fort</b>."
      }
    ]
  }
});
