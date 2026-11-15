/* ============================================================
   Teksty w języku ucznia (pl) do data/core/a1-01.js
   Klucze odsyłają do id z warstwy neutralnej; tablice łączą się
   po indeksie, więc ich długość musi się zgadzać z core.
   Sprawdza to gate parzystości w scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("pl", {
  "unit:a1-u01": {
    title: "W kawiarni",
    grammarNote: "czas teraźniejszy · rodzaj i liczba mnoga · rodzajniki · du i Sie"
  },
  "lesson:a1-u01-l1": {
    theme: "Życie codzienne",
    title: "Powitania i pierwsze zamówienie",
    objectives: [
      "witać się i żegnać zależnie od pory dnia",
      "zamówić kawę formułą „einen Kaffee, bitte”",
      "odmieniać heißen w czasie teraźniejszym i stawiać czasownik na drugim miejscu"
    ],
    theory: [
      {
        h: "Powitanie zależy od pory dnia, a niemiecki ma ich kilka",
        p: "Po polsku rano i w ciągu dnia mówi się <strong>dzień dobry</strong>, a wieczorem <strong>dobry wieczór</strong>. Niemiecki rozróżnia: <strong>Guten Morgen</strong> rano, <strong>Guten Tag</strong> od późnego przedpołudnia do wieczora, <strong>Guten Abend</strong> kiedy zapada wieczór. Granice są płynne i różnią się u różnych osób. <strong>Gute Nacht</strong> to nie powitanie, tylko odpowiednik „dobranoc”: mówi się je, żegnając się późnym wieczorem albo idąc spać."
      },
      {
        h: "Hallo i Tschüss: niemieckie „cześć” ma dwa słowa",
        p: "Między osobami, które mówią sobie na <em>du</em>, mówi się <strong>Hallo</strong> na powitanie i <strong>Tschüss</strong> na pożegnanie. Z obcymi i w sytuacjach oficjalnych mówi się <strong>Guten Tag</strong> przy przyjściu i <strong>Auf Wiedersehen</strong> przy wyjściu (jak „do widzenia”). Na południu Niemiec i w Austrii usłyszysz też <em>Servus</em> i <em>Grüß Gott</em>, w Szwajcarii <em>Grüezi</em>: zrozumiesz je od razu, ale na początek <em>Guten Tag</em> pasuje wszędzie."
      },
      {
        contrast: "Po polsku <em>cześć</em> służy i na powitanie, i na pożegnanie. Po niemiecku te dwie funkcje się rozdzielają (<em>Hallo</em> na przywitanie, <em>Tschüss</em> na pożegnanie), a dzień dzieli się na trzy powitania. Typowy błąd to <em>Gute Nacht</em> przy wejściu do lokalu wieczorem: tak jak „dobranoc”, to tylko formuła pożegnalna."
      },
      {
        h: "Czasownik stoi na drugim miejscu",
        p: "W zdaniu głównym oznajmującym odmieniony czasownik zajmuje <strong>drugie miejsce</strong>, cokolwiek stoi przed nim: <em>Ich trinke Tee</em>, ale też <em>Heute trinke ich Tee</em>, gdzie podmiot przechodzi za czasownik. Na pierwszym miejscu może stać jedno słowo albo grupa słów, nigdy dwa oddzielne elementy."
      },
      {
        contrast: "Polski ma swobodny szyk: <em>Dziś piję herbatę</em>, <em>Piję dziś herbatę</em> i <em>Herbatę piję dziś</em> są poprawne. W niemieckim czasownik jest na stałe na drugim miejscu, a wybierasz tylko, co stoi przed nim. Druga różnica: po polsku podmiot-zaimek się pomija (<em>Nazywam się Anna</em>, <em>Mówię po niemiecku</em>), po niemiecku nie: <em>Ich heiße Anna</em>, <em>Ich spreche Deutsch</em>. Podmiotem nie musi być zaimek (<em>Der Kaffee ist heiß</em>), ale podmiot w zdaniu oznajmującym zwykle się wyraża. Wreszcie <em>heißen</em> nie jest zwrotne: nie ma odpowiednika „się” (<em>nazywam się</em>), mówi się po prostu <em>Ich heiße</em>."
      },
      {
        h: "Wymowa: siedem pułapek dla polskiego ucha",
        list: [
          "<b>ü</b> i <b>ö</b> nie istnieją po polsku: <b>ü</b> to usta ułożone jak do <em>u</em> i język jak do <em>i</em> (<em>Tschüss</em>, <em>Bücher</em>), a <b>ö</b> analogicznie z <em>e</em> (<em>schön</em>, <em>möchten</em>)",
          "<b>ei</b> czyta się <em>aj</em> (<em>heißen</em> brzmi „hajsen”), a <b>ie</b> to długie <em>i</em> (<em>Wie</em> brzmi „wi:”), nie „i-e”",
          "<b>z</b> czyta się jak polskie <em>c</em> (<em>Zucker</em>, <em>zwei</em>), nie jak polskie <em>z</em>; <b>w</b> czyta się jak polskie <em>w</em> (<em>Wasser</em>), a niemieckie <b>v</b> w słowach rodzimych brzmi często jak <em>f</em> (<em>Vater</em>)",
          "<b>s</b> na początku wyrazu lub sylaby przed samogłoską jest dźwięczne, jak polskie <em>z</em> (<em>Saft</em>, <em>Rose</em>); na końcu wyrazu jest bezdźwięczne (<em>Eis</em>); <b>ß</b> i <b>ss</b> są zawsze bezdźwięczne, jak polskie <em>s</em>: <em>heißen</em>, <em>Tschüss</em>",
          "samogłoski mają długość, a po polsku jej nie ma: <em>Tag</em> ma długie <em>a</em> i końcowe bezdźwięczne <em>k</em> ([ta:k]); tak jak w polskim <em>dąb</em>, dźwięczna spółgłoska na końcu ogłusza się, ale długość samogłoski zostaje, więc nie [tak]; długość bywa rozróżnikiem (<em>Staat</em> i <em>Stadt</em>)",
          "<b>ch</b> po <em>i</em> i <em>e</em> to cichy szum, którego polski nie ma (<em>ich</em>, <em>Rechnung</em>); po <em>a</em>, <em>o</em>, <em>u</em> brzmi bliżej polskiego <em>ch</em> (<em>Buch</em>)",
          "<b>h</b> na początku wyrazu to lekki wydech, bez tarcia polskiego <em>h</em> i <em>ch</em> (<em>Hallo</em>, <em>heißen</em>); po samogłosce jest zwykle niemy i oznacza długą samogłoskę (<em>gehen</em>), ale na początku akcentowanej sylaby wewnątrz wyrazu się wymawia (<em>behalten</em>)"
        ]
      },
      {
        trap: "W Niemczech <strong>Kaffee</strong> (napój) ma zwykle akcent na pierwszej sylabie, KÀ-fe, a <strong>Café</strong> (lokal) na ostatniej, jak polskie „kafe”; w niektórych odmianach regionalnych, na przykład w Austrii, także <em>Kaffee</em> może mieć akcent na końcu. Nie daj się zwieść podobnej pisowni: to dwa różne słowa. Po polsku akcent pada zwykle na przedostatnią sylabę, po niemiecku często na pierwszą."
      },
      {
        tip: "<em>Einen Kaffee, bitte</em> to pełna formuła: zapamiętaj <em>einen Kaffee</em>, <em>einen Tee</em>, <em>ein Wasser</em>, <em>eine Cola</em>. Dlaczego <em>einen</em>, a nie <em>ein</em>, wyjaśni inna jednostka (to biernik, jak polskie <em>poproszę kawę</em>): na razie powtarzaj formułę, która przy rzeczownikach rodzaju męskiego (<em>der Kaffee</em>, <em>der Tee</em>) używa <em>einen</em>."
      }
    ],
    grammar: {
      title: "Czas teraźniejszy czasownika heißen (nazywać się)",
      note: "Uwaga na <b>ß</b>: <em>heißen</em> brzmi jak podwójne s. Forma <em>heißt</em> jest taka sama dla <em>du</em>, <em>er/sie/es</em> i <em>ihr</em>, więc to zaimek mówi, kto mówi.",
      table: {
        head: ["osoba", "forma", "przykład"],
        rows: [
          ["ich", "heiße", "Ich heiße Anna."],
          ["du", "heißt", "Wie heißt du?"],
          ["er / sie / es", "heißt", "Er heißt Tom."],
          ["wir", "heißen", "Wir heißen Weber."],
          ["ihr", "heißt", "Wie heißt ihr?"],
          ["sie / Sie", "heißen", "Wie heißen Sie?"]
        ]
      },
      examples: [
        {
          tr: "Dzień dobry, poproszę kawę.",
          note: "„einen Kaffee” uczy się jako całość, zob. wskazówkę wyżej"
        },
        { tr: "Nazywam się Anna." },
        { tr: "Jak masz na imię?" },
        { tr: "Jak się Pan nazywa?", note: "forma grzecznościowa, zob. lekcję 4" },
        { tr: "Dziś piję herbatę.", note: "czasownik zostaje na drugim miejscu, podmiot idzie za nim" },
        { tr: "Kawiarnia jest mała." }
      ]
    },
    vocab: [
      "dzień dobry (rano)",
      "dzień dobry (od późnego przedpołudnia do wieczora)",
      "dobry wieczór",
      "dobranoc (na pożegnanie późnym wieczorem lub przed snem)",
      "cześć (na powitanie)",
      "cześć, pa (na pożegnanie)",
      "do widzenia",
      "proszę (przy zamówieniu, podając coś)",
      "dziękuję",
      "przepraszam",
      "kawa",
      "herbata",
      "woda",
      "kawiarnia"
    ],
    dialogue: [
      "Dzień dobry! Co podać?",
      "Dzień dobry. Poproszę kawę.",
      "Chętnie. Coś jeszcze?",
      "Nie, dziękuję. To wszystko.",
      "Proszę bardzo. Miłego dnia!"
    ],
    culture: {
      title: "Niemieckim okiem: Café, Kaffeehaus i popołudniowa kawa",
      text: "<p>W Niemczech typowy lokal to nie bar z ladą: siada się przy stoliku, kelner przychodzi przyjąć zamówienie, a rachunek prosi się przy stoliku słowami <i>Zahlen, bitte</i> albo <i>Die Rechnung, bitte</i>. Zwykle zaokrągla się kwotę w górę, zostawiając drobny dodatek: napiwek nazywa się <i>Trinkgeld</i>.</p><p>Jeśli zamówisz <i>einen Kaffee</i>, zwykle dostaniesz kawę w dużej filiżance, parzoną w filtrze albo z ekspresu, a nie małe espresso: espresso zamawia się po nazwie, <i>einen Espresso</i>. Tradycyjna pora to popołudnie, <i>Kaffee und Kuchen</i>, czyli kawa i ciasto: przerwa między obiadem a kolacją, która wciąż jest żywym zwyczajem, szczególnie w niedzielę i w rodzinie.</p><p>W Austrii wiedeńska kawiarnia, czyli <i>das Kaffeehaus</i>, ma inną logikę: można w nim siedzieć długo przy jednej kawie, zwykle podawanej ze szklanką wody, i czytać gazetę. W Szwajcarii taką kawę nazywa się często <i>Café crème</i>.</p>"
    },
    exercises: [
      {
        q: "Wchodzisz do kawiarni o 9 rano. Co mówisz?",
        opts: ["Guten Abend", "Guten Morgen", "Gute Nacht"],
        why: "<i>Guten Morgen</i> pasuje rano. <i>Gute Nacht</i> to pożegnanie późnym wieczorem albo przed snem."
      },
      {
        q: "Które zdanie oznajmujące ma czasownik na właściwym miejscu?",
        opts: ["Ich Anna heiße.", "Heiße ich Anna.", "Ich heiße Anna."],
        why: "Odmieniony czasownik stoi na drugim miejscu, a podmiot <b>ich</b> się nie pomija."
      },
      {
        tr: "Cała odmiana, bez podglądania.",
        why: "<i>Heißen</i> odmienia się regularnie: temat <i>heiß-</i> plus końcówka. Dla <i>du</i>, <i>er</i> i <i>ihr</i> forma jest ta sama: <b>heißt</b>."
      },
      {
        q: "Uzupełnij: „Wie ___ du?” (Jak masz na imię?)",
        hint: "druga osoba liczby pojedynczej od heißen",
        why: "Przy <b>du</b> końcówka to <i>-t</i>: <i>du heißt</i>. Końcówka <i>-st</i> zlewa się z <i>ß</i> tematu."
      },
      {
        q: "Przetłumacz: „Dzień dobry, poproszę kawę.”",
        why: "Mówi się <i>Einen Kaffee, bitte</i>: w tej formule <i>bitte</i> stoi na końcu (może też stać przed <i>einen Kaffee</i>), a <i>Kaffee</i> pisze się wielką literą, jak każdy niemiecki rzeczownik."
      },
      {
        tr: "Dzień dobry, nazywam się Anna.",
        why: "Po przecinku zaczyna się zdanie główne: podmiot <i>ich</i>, potem czasownik <i>heiße</i> na drugim miejscu."
      },
      {
        q: "Dopasuj każde słowo do jego znaczenia.",
        pairs: ["dziękuję", "proszę", "przepraszam", "do widzenia"]
      },
      {
        tr: "Dobry wieczór, poproszę herbatę.",
        why: "Uwaga na <i>Abend</i>: <b>b</b> jest dźwięczne, a końcowe <b>d</b> wymawia się jak <i>t</i>."
      },
      {
        tr: "Dzień dobry, poproszę kawę.",
        why: "W Niemczech akcent w <i>Kaffee</i> pada zwykle na pierwszą sylabę: KÀ-fe."
      }
    ]
  },
  "lesson:a1-u01-l2": {
    theme: "Gramatyka podstawowa",
    title: "Rodzaj i liczba mnoga rzeczowników",
    objectives: [
      "zauważyć, że niemiecki ma trzy rodzaje: der, die, das",
      "uczyć się każdego rzeczownika razem z rodzajnikiem i liczbą mnogą",
      "liczyć od 1 do 20"
    ],
    theory: [
      {
        h: "Trzy rodzaje, jak po polsku, ale z rodzajnikiem",
        p: "Polski ma trzy rodzaje, niemiecki też: <strong>der</strong> (męski), <strong>die</strong> (żeński), <strong>das</strong> (nijaki). Różnica jest w tym, jak je widać. Po polsku rodzaj zdradza końcówka rzeczownika (<em>-a</em> to zwykle żeński), a rodzajnika nie ma wcale. Po niemiecku rodzaj widać w <strong>rodzajniku</strong> stojącym przed rzeczownikiem: <em>der Tisch</em> (stół), <em>die Tasse</em> (filiżanka), <em>das Buch</em> (książka). Rodzajnik to dla ciebie nowa kategoria."
      },
      {
        contrast: "Rodzaj niemiecki rzadko pokrywa się z polskim, więc nie da się go zgadnąć przez tłumaczenie. <em>Książka</em> jest żeńska, ale <em>das Buch</em> jest nijakie; <em>krzesło</em> jest nijakie, ale <em>der Stuhl</em> jest męski; <em>mleko</em> jest nijakie, ale <em>die Milch</em> jest żeńska; <em>dom</em> jest męski, ale <em>das Haus</em> jest nijakie; <em>słońce</em> jest nijakie, ale <em>die Sonne</em> jest żeńska. Zdarzają się też zgodności (<em>stół</em> i <em>der Tisch</em>, <em>dziecko</em> i <em>das Kind</em>), ale na nich nie można polegać. Dlatego każdy rzeczownik uczysz się z rodzajnikiem, nigdy osobno."
      },
      {
        h: "Kilka wskazówek, żadnego prawa",
        list: [
          "rzeczowniki z przyrostkiem <b>-ung</b> są żeńskie: <em>die Zeitung</em>, <em>die Rechnung</em>",
          "zdrobnienia z przyrostkiem <b>-chen</b> są nijakie: <em>das Brötchen</em> (uwaga: <em>der Kuchen</em> nie jest zdrobnieniem i jest rodzaju męskiego)",
          "wiele rzeczowników na nieakcentowane <b>-e</b> jest żeńskich: <em>die Tasse</em>, <em>die Torte</em>",
          "wskazówki mają wyjątki (<em>der Käse</em> kończy się na nieakcentowane -e i jest męski): <b>rodzajnik uczy się razem z rzeczownikiem</b>"
        ]
      },
      {
        h: "Liczba mnoga: jeden rodzajnik, różne końcówki",
        p: "W mianowniku liczby mnogiej rodzajnik określony to zawsze <strong>die</strong>, dla wszystkich trzech rodzajów (w innych przypadkach, które poznasz później, się zmienia). Po polsku liczba mnoga zmienia końcówkę rzeczownika (<em>stół, stoły</em>), po niemiecku tak samo zmienia się rzeczownik, czasem z umlautem na samogłosce: <em>die Tische</em>, <em>die Stühle</em>, <em>die Tassen</em>, <em>die Bücher</em>, <em>die Kinder</em>. Niektóre rzeczowniki zostają bez zmian (<em>die Kuchen</em>, <em>die Brötchen</em>), niewiele bierze <em>-s</em> (<em>die Cafés</em>, <em>die Kaffees</em>)."
      },
      {
        trap: "Liczby mnogiej nie da się wyprowadzić z pojedynczej: <em>der Tisch → die Tische</em>, ale <em>das Buch → die Bücher</em>. Po polsku też bywa to nieregularne (<em>dziecko → dzieci</em>), więc zasada jest znana: ucz się całej trójki, na przykład <b>der Tisch, die Tische</b>. Dlatego słownik tego kursu podaje liczbę mnogą przy każdym rzeczowniku."
      },
      {
        tip: "Wszystkie niemieckie rzeczowniki pisze się <b>wielką literą</b>, nie tak jak po polsku: <em>der Tisch</em>, nie <em>der tisch</em>. I umlaut się liczy: <em>Buch</em> i <em>Bücher</em> pisze się inaczej, a <em>Mädchen</em> bez kropek byłoby błędem, nie wariantem. Kropki zmieniają też brzmienie samogłoski."
      },
      {
        h: "Liczenie od 1 do 20",
        list: [
          "<b>1-10</b>: eins, zwei, drei, vier, fünf, sechs, sieben, acht, neun, zehn",
          "<b>11-12</b>: elf, zwölf",
          "<b>13-19</b>: dreizehn, vierzehn, fünfzehn, sechzehn, siebzehn, achtzehn, neunzehn (jak polskie -naście: <em>drei</em> + <em>zehn</em>)",
          "<b>20</b>: zwanzig"
        ]
      },
      {
        trap: "Uwaga na <em>sechzehn</em> i <em>siebzehn</em>: <em>sechs</em> traci <em>-s</em>, a <em>sieben</em> traci <em>-en</em>. I <b>z</b> czyta się jak polskie <em>c</em>: <em>zwei</em> brzmi „cwaj”, <em>zehn</em> „cen”."
      }
    ],
    grammar: {
      title: "Rodzaj i liczba mnoga",
      note: "W mianowniku liczby mnogiej rodzajnik określony to zawsze <b>die</b>.",
      table: {
        head: ["rodzaj", "liczba pojedyncza", "liczba mnoga", "po polsku"],
        rows: [
          ["der (m)", "der Tisch", "die Tische", "stół"],
          ["die (f)", "die Tasse", "die Tassen", "filiżanka"],
          ["das (n)", "das Buch", "die Bücher", "książka"],
          ["das (n)", "das Kind", "die Kinder", "dziecko"],
          ["der (m)", "der Kuchen", "die Kuchen", "ciasto"],
          ["das (n)", "das Brötchen", "die Brötchen", "bułka"]
        ]
      },
      examples: [
        { tr: "Stół jest mały." },
        { tr: "Filiżanki są duże.", note: "w liczbie mnogiej czasownik się zmienia: sind" },
        { tr: "Książka jest nowa." },
        { tr: "Dziecko pije mleko." },
        { tr: "Trzy filiżanki i dwa ciasta, poproszę.", note: "Kuchen w liczbie mnogiej się nie zmienia" },
        { tr: "Rachunek, proszę." }
      ]
    },
    vocab: [
      "stół",
      "krzesło",
      "książka",
      "dom",
      "filiżanka",
      "kobieta, pani",
      "mężczyzna",
      "dziecko",
      "gazeta",
      "ciasto",
      "mleko",
      "cukier",
      "bułka",
      "rachunek"
    ],
    exercises: [
      {
        q: "Który z tych rzeczowników jest nijaki?",
        opts: ["der Tisch", "das Buch", "die Tasse"],
        why: "<i>Das Buch</i>. Po polsku „książka” jest rodzaju żeńskiego: rodzaju się nie tłumaczy."
      },
      {
        q: "Liczba mnoga od „die Tasse”: „die ___”.",
        hint: "dodaj -n",
        why: "Wiele rzeczowników żeńskich na <i>-e</i> tworzy liczbę mnogą z <i>-n</i>: <i>Tassen</i>."
      },
      {
        q: "Liczba mnoga od „das Buch”: „die ___”.",
        hint: "u dostaje umlaut i dochodzi -er",
        why: "<i>Bücher</i>: umlaut na samogłosce i końcówka <i>-er</i>. Bez umlautu byłoby to inne słowo, źle napisane."
      },
      {
        q: "Wybierz właściwy rodzajnik określony.",
        why: "Rodzaj i liczbę mnogą uczy się razem z rzeczownikiem: <i>der Tisch</i>, <i>die Tasse</i>, <i>das Buch</i>.",
        items: ["stół", "filiżanka", "książka", "dom", "gazeta", "mężczyzna"]
      },
      {
        q: "W mianowniku liczby mnogiej rodzajnik określony to zawsze…",
        opts: ["der", "die", "das"],
        why: "<b>die</b> dla wszystkich rodzajów w mianowniku liczby mnogiej: <i>die Tische</i>, <i>die Tassen</i>, <i>die Bücher</i>."
      },
      {
        q: "Które z tych rzeczowników są rodzaju żeńskiego?",
        opts: ["die Zeitung", "der Stuhl", "die Milch", "das Kind", "die Rechnung"],
        why: "<i>Die Zeitung</i>, <i>die Milch</i>, <i>die Rechnung</i>: rodzajnik to mówi, a rzeczowniki z przyrostkiem <b>-ung</b> są żeńskie."
      },
      {
        tr: "Dziecko pije mleko.",
        why: "Podmiot, orzeczenie, dopełnienie: czasownik <i>trinkt</i> stoi na drugim miejscu. Po polsku szyk jest swobodny, tutaj nie."
      },
      {
        tr: "Dwie filiżanki i trzy bułki, poproszę.",
        why: "<i>Zwei</i> zaczyna się od <b>ts</b>, jak polskie <i>c</i>: „cwaj”."
      },
      {
        tr: "Rachunek, proszę.",
        why: "<i>Rechnung</i>: <i>ch</i> po <i>e</i> to cichy szum z <i>ich</i>, nie <i>k</i> ani polskie <i>ch</i>."
      }
    ]
  },
  "lesson:a1-u01-l3": {
    theme: "Gramatyka podstawowa",
    title: "Der czy ein? Rodzajniki w mianowniku",
    objectives: [
      "odróżniać rodzajnik określony (der, die, das) i nieokreślony (ein, eine)",
      "używać kein do zaprzeczania rzeczownikowi",
      "wybierać rodzajnik według rodzaju, nie według brzmienia"
    ],
    theory: [
      {
        h: "Określony i nieokreślony",
        p: "Po polsku rodzajników nie ma: mówisz po prostu <em>kawa</em>, a to, czy chodzi o kawę znaną, czy nową, wynika z kontekstu albo ze słów w rodzaju <em>ta</em> i <em>jakaś</em>. Po niemiecku rodzajnik <strong>określony</strong> wskazuje coś znanego (<em>der Kaffee</em>, kawa, o której mówimy), a <strong>nieokreślony</strong> coś nowego (<em>ein Kaffee</em>, jakaś kawa). W mianowniku, czyli gdy rzeczownik jest podmiotem (<em>Der Kaffee ist heiß</em>) albo stoi po <em>sein</em> (<em>Das ist eine Tasse</em>, <em>Das ist kein Tee</em>), formy są takie: <b>der / ein</b> (męski), <b>die / eine</b> (żeński), <b>das / ein</b> (nijaki), <b>die</b> (liczba mnoga)."
      },
      {
        contrast: "Po polsku rodzaj i przypadek widać w końcówce rzeczownika i przymiotnika (<em>ta kawa</em>, <em>tę kawę</em>). Po niemiecku w mianowniku to rodzajnik niesie rodzaj, a rzeczownik zwykle się nie zmienia. Po niemiecku rzeczownik w liczbie pojedynczej zwykle ma rodzajnik, także tam, gdzie po polsku stoi sam: <em>Kawa jest gorąca</em> to zwykle <em>Der Kaffee ist heiß</em>. Wybór między rodzajnikiem określonym, nieokreślonym i jego brakiem zależy od znaczenia i kontekstu, a forma rodzajnika w mianowniku liczby pojedynczej od rodzaju rzeczownika (<em>der Apfelkuchen</em>, <em>der Saft</em>, <em>der Kellner</em> mają <em>der</em>), więc musisz znać rodzaj każdego rzeczownika."
      },
      {
        trap: "W liczbie mnogiej nie ma rodzajnika nieokreślonego: <em>Tassen</em> samo znaczy „filiżanki” albo „jakieś filiżanki”. Po polsku też mówi się po prostu <em>filiżanki</em>, więc nie szukaj odpowiednika niemieckiego <em>eine</em> w liczbie mnogiej: zostaw rzeczownik bez rodzajnika."
      },
      {
        h: "Kein: przeczenie rzeczownika",
        p: "Aby powiedzieć „to nie jest…” albo „nie ma żadnego…”, używa się <strong>kein</strong>, które odmienia się jak <em>ein</em>: <em>kein</em> (męski i nijaki), <em>keine</em> (żeński i liczba mnoga). <em>Das ist kein Tee</em> znaczy „to nie jest herbata”. Nie mówi się <em>nicht ein Tee</em>."
      },
      {
        contrast: "Po polsku przecząca cząstka jest jedna: <em>to nie jest herbata</em>, <em>to nie jest gorące</em>. Po niemiecku wybierasz: <strong>nicht</strong> stoi przy czasowniku albo przymiotniku (<em>Das ist nicht heiß</em>), a <strong>kein</strong> zastępuje rodzajnik nieokreślony lub jego brak przed rzeczownikiem (<em>Das ist kein Tee</em>)."
      },
      {
        tip: "Kiedy <b>zamawiasz</b>, rzeczownik rodzaju męskiego dostaje <em>einen</em>: <em>Einen Kaffee, bitte</em>. <em>Ein</em> to forma podmiotu; <em>einen</em> to inna forma, używana, gdy rzeczownik jest dopełnieniem czynności (jak polski biernik: <em>kawa, poproszę kawę</em>), i omówimy ją później. Na razie pamiętaj: zamawiając, mówisz <em>einen</em> (męski), <em>eine</em> (żeński), <em>ein</em> (nijaki). W rodzajniku zmienia się tylko rodzaj męski."
      },
      {
        h: "Typowe zdanie: Das ist …",
        p: "Aby wskazać przedmiot: <em>Das ist ein Eis</em>, <em>Das ist eine Torte</em>. Początkowe <em>das</em> znaczy „to” i się nie zmienia, nawet jeśli następny rzeczownik jest męski albo żeński, tak jak polskie <em>to jest</em>."
      }
    ],
    grammar: {
      title: "Rodzajniki w mianowniku",
      note: "Mianownik odpowiada na pytanie <em>kto? co?</em>. Liczba mnoga ma <b>die</b> albo <b>keine</b> i nie ma rodzajnika nieokreślonego.",
      table: {
        head: ["", "męski", "żeński", "nijaki", "liczba mnoga"],
        rows: [
          ["określony", "der Kaffee", "die Tasse", "das Brötchen", "die Tassen"],
          ["nieokreślony", "ein Kaffee", "eine Tasse", "ein Brötchen", "(bez rodzajnika) Tassen"],
          ["przeczenie", "kein Kaffee", "keine Tasse", "kein Brötchen", "keine Tassen"]
        ]
      },
      examples: [
        { tr: "Kawa jest gorąca." },
        { tr: "Jedna kawa kosztuje trzy euro." },
        { tr: "To jest filiżanka." },
        { tr: "To nie jest herbata." },
        { tr: "Tort jest świeży." },
        { tr: "Oto karta dań." }
      ]
    },
    vocab: [
      "sok",
      "cola",
      "czekolada",
      "piwo",
      "wino",
      "lody",
      "szarlotka, ciasto z jabłkami",
      "tort",
      "chleb",
      "precel",
      "karta dań",
      "kelner"
    ],
    exercises: [
      {
        q: "Uzupełnij: „___ Tasse ist neu.” (jedna filiżanka)",
        opts: ["Ein", "Eine", "Einen"],
        why: "<i>Tasse</i> jest rodzaju żeńskiego, więc <b>eine</b>."
      },
      {
        q: "Uzupełnij: „Das ist ___ Tee.” (to nie jest herbata)",
        opts: ["nicht", "kein", "keine"],
        why: "Do zaprzeczenia rzeczownika rodzaju męskiego służy <b>kein</b>, nie <i>nicht ein</i>."
      },
      {
        q: "Wybierz właściwy rodzajnik nieokreślony.",
        why: "<i>Ein</i> dla rodzaju męskiego i nijakiego, <i>eine</i> dla żeńskiego.",
        items: ["sok", "cola", "tort", "chleb", "karta dań", "kelner"]
      },
      {
        q: "Uzupełnij: „Das ist ___ Eis.” (lody)",
        hint: "das Eis jest nijakie",
        why: "Nijaki w mianowniku: <b>ein</b>. Po polsku „lody” to liczba mnoga: rodzaju się nie tłumaczy."
      },
      {
        q: "Uzupełnij: „___ Speisekarte ist neu.” (ta)",
        hint: "die Speisekarte jest żeńska",
        why: "Rodzaj żeński w liczbie pojedynczej: <b>die</b>."
      },
      {
        q: "„Tassen, bitte!” Dlaczego brakuje rodzajnika?",
        opts: [
          "To błąd",
          "W liczbie mnogiej nie ma ein/eine: rzeczownik stoi sam",
          "Przed Tassen brakuje die"
        ],
        why: "Rodzajnik nieokreślony nie ma liczby mnogiej. Polskie „filiżanki” odpowiada <i>Tassen</i> bez rodzajnika."
      },
      {
        q: "Dopasuj każde wyrażenie do jego znaczenia.",
        pairs: ["jedna kawa", "jeden tort", "jeden chleb", "żadna cola"]
      },
      {
        tr: "Oto karta dań i woda.",
        why: "Przy <i>Hier</i> na pierwszym miejscu czasownik <i>ist</i> zostaje na drugim, a podmiot idzie za nim."
      },
      {
        tr: "To jest tort.",
        why: "<i>Torte</i>: początkowe <b>t</b> jest przydechowe, a końcowe <b>e</b> się wymawia."
      }
    ]
  },
  "lesson:a1-u01-l4": {
    theme: "Życie codzienne",
    title: "Jak się masz? Du albo Sie",
    objectives: [
      "pytać, jak się ktoś ma, na du i na Sie",
      "odmieniać sein w czasie teraźniejszym",
      "wybierać między du a Sie zależnie od sytuacji"
    ],
    theory: [
      {
        h: "Du, ihr i Sie: trzy formy na „ty” i „wy”",
        p: "Polski ma <em>ty</em>, <em>wy</em> oraz <em>Pan/Pani/Państwo</em>. Niemiecki ma <strong>du</strong> (jedna osoba, z którą jesteś na „ty”), <strong>ihr</strong> (kilka osób, z którymi jesteś na „ty”) i <strong>Sie</strong>, formę grzecznościową, taką samą dla jednej osoby i dla wielu: <em>Sind Sie Frau Weber?</em>, <em>Wie heißen Sie?</em>"
      },
      {
        contrast: "Po polsku formę grzecznościową tworzy się z <em>Pan</em> i <em>Pani</em> i czasownikiem w 3. osobie liczby <b>pojedynczej</b>: <em>Pan jest</em>, <em>Pani jest</em>. Niemieckie <strong>Sie</strong> bierze czasownik w 3. osobie liczby <b>mnogiej</b>: <em>Sie sind</em>, a nie <em>Sie ist</em>. Pisze się je zawsze <b>wielką literą</b>, bo małe <em>sie</em> znaczy „ona” albo „oni, one”. Niemieckie <em>Sie</em> jest jedno dla kobiet i mężczyzn, nie ma rozróżnienia Pan i Pani, a odpowiednika <em>Państwo</em> też nie trzeba: <em>Sie</em> obejmuje i jedną osobę, i kilka."
      },
      {
        h: "Kiedy przejść na du",
        p: "Z osobami, których nie znasz, z dorosłymi, klientami, w urzędach i w sytuacjach oficjalnych używa się <em>Sie</em>, razem z <em>Herr</em> lub <em>Frau</em> i nazwiskiem: <em>Frau Weber</em> (jak „pani Weber”). <em>Du</em> jest normalne między przyjaciółmi, w rodzinie, wśród rówieśników i w wielu nieformalnych środowiskach pracy. Zwykle propozycję przejścia na „ty” składa osoba starsza albo mająca więcej odpowiedzialności: <em>Wollen wir uns duzen?</em> (jak polskie „czy możemy przejść na ty?”). W razie wątpliwości używa się <em>Sie</em> i czeka, aż druga osoba zaproponuje <em>du</em>."
      },
      {
        h: "Wie geht's? Tu nie używa się sein",
        p: "Aby zapytać, jak się ktoś ma, niemiecki używa czasownika <strong>gehen</strong> (iść), w konstrukcji bezosobowej: <em>Wie geht es dir?</em> albo krótko <em>Wie geht's?</em> (jak polskie „jak leci?”). Odpowiada się <em>Mir geht es gut</em> („mnie się wiedzie dobrze”) albo <em>Es geht</em> („tak sobie”). <em>Dir</em>, <em>Ihnen</em> i <em>mir</em> to celownik, jak w polskim „jak ci idzie?”: dokładniej poznasz go później, na razie ucz się całych zdań."
      },
      {
        trap: "Nie mów <em>Ich bin gut</em>, gdy chcesz powiedzieć „mam się dobrze”: to opis cechy, „jestem dobry (w czymś)”, a nie stanu zdrowia czy nastroju. Na zdrowie i nastrój mówi się <em>Mir geht es gut</em>. Uwaga też na <em>Es geht</em>: to nie „idzie dobrze”, tylko „tak sobie”."
      },
      {
        h: "Sein, czasownik „być”",
        p: "Tak jak polskie <em>być</em>, <strong>sein</strong> jest nieregularny: formy nie przypominają bezokolicznika (<em>bin, bist, ist, sind, seid, sind</em>) i trzeba je zapamiętać. Służą do mówienia, kim jesteś i czym coś jest: <em>Ich bin Anna</em>, <em>Das ist ein Kaffee</em>."
      },
      {
        h: "Pytania: zmienia się szyk",
        p: "W pytaniu z zaimkiem pytającym (<em>wie</em>, <em>was</em>) czasownik zostaje na <strong>drugim</strong> miejscu: <em>Wie geht es Ihnen?</em> W pytaniu, na które odpowiada się „tak” albo „nie”, czasownik przechodzi na <strong>pierwsze</strong> miejsce: <em>Sind Sie Frau Weber?</em>, <em>Bist du Anna?</em> Po polsku takie pytanie zaczyna się od <em>czy</em> albo zmienia się intonację; po niemiecku nie ma odpowiednika <em>czy</em>, zmienia się szyk."
      }
    ],
    grammar: {
      title: "Sein (być) w czasie teraźniejszym",
      note: "Przy <b>Sie</b> (forma grzecznościowa) czasownik to <em>sind</em>, tak samo jak przy <em>wir</em> i <em>sie</em> (oni).",
      table: {
        head: ["osoba", "forma", "przykład"],
        rows: [
          ["ich", "bin", "Ich bin Anna."],
          ["du", "bist", "Bist du Anna?"],
          ["er / sie / es", "ist", "Das Café ist klein."],
          ["wir", "sind", "Wir sind hier."],
          ["ihr", "seid", "Seid ihr hier?"],
          ["sie / Sie", "sind", "Sind Sie Frau Weber?"]
        ]
      },
      examples: [
        { tr: "Cześć, Julia, jak leci?", note: "nieformalnie" },
        { tr: "Dzień dobry, pani Weber, jak się pani miewa?", note: "formalnie" },
        { tr: "Mam się dobrze, dziękuję. A ty?" },
        { tr: "Tak sobie." },
        { tr: "Czy pani jest panią Weber?", note: "pytanie tak/nie: czasownik idzie na pierwsze miejsce" },
        { tr: "Przejdziemy na ty?", note: "zwykle proponuje to osoba starsza" }
      ]
    },
    vocab: [
      "jak się masz? (nieformalnie)",
      "jak się Pan/Pani miewa? (formalnie)",
      "mam się dobrze",
      "tak sobie",
      "nieźle",
      "bardzo dobrze",
      "źle",
      "a ty?",
      "a Pan/Pani?",
      "Pan (przed nazwiskiem)",
      "Pani (przed nazwiskiem)",
      "do zobaczenia później"
    ],
    dialogue: [
      "Cześć, Julia! Jak się masz?",
      "Cześć! Dobrze, a ty?",
      "Nieźle, dziękuję. Do zobaczenia później!",
      "Dzień dobry, pani Weber. Jak się pani miewa?",
      "Dobrze, dziękuję. A pan?"
    ],
    exercises: [
      {
        q: "Rozmawiasz z panią Weber, którą słabo znasz. Które pytanie jest poprawne?",
        opts: ["Wie geht es dir?", "Wie geht es Ihnen?", "Wie gehst du?"],
        why: "Do osoby, do której zwracasz się per Pani, używa się <b>Ihnen</b>."
      },
      {
        q: "Które zdanie NIE znaczy „mam się dobrze”?",
        opts: ["Mir geht es gut.", "Ich bin gut.", "Es geht mir gut."],
        why: "<i>Ich bin gut</i> znaczy zwykle „jestem dobry (w czymś)”. Na zdrowie i nastrój używa się <i>gehen</i>."
      },
      {
        tr: "Wszystkie osoby czasownika sein.",
        why: "<i>Sein</i> jest nieregularny w każdej osobie, jak polskie „być”. <i>Sind</i> pasuje do <i>wir</i>, <i>sie</i> i <i>Sie</i>."
      },
      {
        q: "Uzupełnij: „___ Sie Frau Weber?” (Czy pani jest panią Weber?)",
        hint: "pytanie tak/nie: czasownik idzie na początek",
        why: "<b>Sind</b>: forma grzecznościowa bierze 3. osobę liczby mnogiej."
      },
      {
        q: "Przetłumacz, zwracając się na ty: „Mam się dobrze, dziękuję. A ty?”",
        why: "<i>Mir geht es gut, danke. Und dir?</i> Zwracając się na ty, kończysz pytaniem z <i>dir</i>."
      },
      {
        q: "W kawiarni barman, który zna cię od lat, wita cię pierwszy.",
        setting: "Kawiarnia w twojej dzielnicy, ósma rano.",
        lines: [
          { tr: "Cześć! Jak się dziś masz?" },
          { tr: "Odpowiedz, że masz się dobrze, i zapytaj o to samo.", answerTr: "Mam się dobrze, a ty?" },
          { tr: "Świetnie! Kawy?" },
          { tr: "Odpowiedz, że tak.", answerTr: "Tak, poproszę!" }
        ]
      },
      {
        q: "Dopasuj każdą odpowiedź do jej znaczenia.",
        pairs: ["tak sobie", "bardzo dobrze", "źle", "nieźle"]
      },
      {
        tr: "Dzień dobry, pani Weber, jak się pani miewa?",
        why: "<i>Ihnen</i> wymawia się „inen”: <b>h</b> po samogłosce jest niemy."
      },
      {
        tr: "Dobrze, dziękuję. A pan?",
        why: "<i>Und Ihnen?</i> zachowuje ton grzecznościowy: pytanie kończy forma <i>Ihnen</i>."
      }
    ]
  },
  "lesson:a1-u01-test": {
    theme: "Sprawdzian",
    title: "Sprawdzian jednostki 1",
    objectives: ["sprawdzić powitania, czasowniki heißen i sein w czasie teraźniejszym, rodzaj, liczbę mnogą i rodzajniki"],
    theory: [
      {
        p: "Dziesięć pytań z całej jednostki. Zaliczasz od 70%. Nie zaglądaj do lekcji w trakcie odpowiedzi: jeśli czegoś nie pamiętasz, lepiej wrócić do powtórki."
      }
    ],
    exercises: [
      {
        q: "Jest 18:30 i wchodzisz do sklepu. Co mówisz?",
        opts: ["Guten Morgen", "Guten Abend", "Gute Nacht"],
        why: "Pod wieczór mówi się <i>Guten Abend</i>. <i>Gute Nacht</i> to tylko pożegnanie."
      },
      {
        q: "Uzupełnij: „Wir ___ hier.” (Jesteśmy tutaj.)",
        why: "<i>Sein</i>, forma <i>wir</i>: <b>sind</b>."
      },
      {
        q: "Uzupełnij: „Wie ___ Sie?” (Jak się Pan/Pani nazywa?)",
        why: "<i>Heißen</i>: przy <i>Sie</i> czasownik stoi w 3. osobie liczby mnogiej."
      },
      {
        q: "Wybierz rodzajnik określony.",
        items: ["stół", "filiżanka", "dziecko", "tort"]
      },
      {
        q: "Liczba mnoga od „das Kind” to:",
        opts: ["die Kinde", "die Kinder", "die Kinds"],
        why: "<i>Die Kinder</i>: końcówka <b>-er</b>."
      },
      {
        q: "Które zdania są poprawne?",
        opts: [
          "Das ist ein Tasse.",
          "Das ist eine Tasse.",
          "Das ist kein Tee.",
          "Das ist ein Kaffee.",
          "Das ist keine Kaffee."
        ],
        why: "<i>Tasse</i> jest żeńskie (<i>eine</i>); <i>Tee</i> i <i>Kaffee</i> są rodzaju męskiego (<i>kein</i>, <i>ein</i>)."
      },
      {
        q: "Przetłumacz: „Dwie herbaty, proszę.”",
        why: "<i>Zwei Tee, bitte</i>: przy zamawianiu rzeczownik po liczebniku często zostaje bez zmian. Poprawne jest też <i>zwei Tees</i>."
      },
      {
        tr: "Jak się pani miewa, pani Weber?",
        why: "Pytanie z <i>Wie</i>: czasownik <i>geht</i> stoi na drugim miejscu."
      },
      { tr: "Dwie kawy i bułka, proszę." },
      { tr: "Dzień dobry, jak się pan miewa?" }
    ]
  },
  "unit:a1-u02": {
    title: "Kim jesteś?",
    grammarNote: "zaimki osobowe · czas teraźniejszy regularny · sein i haben · zawody · liczebniki do 100"
  },
  "lesson:a1-u02-l1": {
    theme: "Przedstawianie się",
    title: "Nazywam się ...",
    objectives: [
      "powiedzieć, jak się nazywasz, i zapytać o imię kogoś innego, na du i na Sie",
      "używać zaimków osobowych w mianowniku: ich, du, er, sie, es, wir, ihr, sie, Sie",
      "powiedzieć, skąd jesteś, formułą „Ich komme aus ...”"
    ],
    theory: [
      {
        h: "Zaimki osobowe: po niemiecku podmiot się mówi",
        p: "W samodzielnym zdaniu oznajmującym odmieniony czasownik wymaga wyrażonego podmiotu: rzeczownika (<em>Anna heißt Weber</em>) albo zaimka. W zdaniu współrzędnym o tym samym podmiocie, jak <em>Ich wohne hier und arbeite in Bonn</em>, drugi podmiot można pominąć. Oto zaimki w mianowniku: <strong>ich</strong> (ja), <strong>du</strong> (ty), <strong>er</strong> (on), <strong>sie</strong> (ona), <strong>es</strong> (ono), <strong>wir</strong> (my), <strong>ihr</strong> (wy), <strong>sie</strong> (oni, one) i <strong>Sie</strong>, forma grzecznościowa. Same końcówki czasownika nie wystarczą, żeby rozpoznać osobę: <em>heißt</em> pasuje do <em>du</em>, <em>er</em>, <em>sie</em>, <em>es</em> i <em>ihr</em>."
      },
      {
        contrast: "Po polsku <em>Mówię po niemiecku</em> stoi samo, bez „ja”: końcówka <em>-ę</em> mówi, kto mówi. Po niemiecku <em>Spreche Deutsch</em> nie jest zdaniem: potrzeba <em>Ich spreche Deutsch</em>. Zaimek nie jest tu podkreśleniem, tylko częścią zdania. Polskie <em>ja</em> dodajesz, gdy chcesz zaakcentować osobę (<em>Ja mówię, a ty słuchaj</em>); niemieckie <em>ich</em> stoi w zwykłym zdaniu oznajmującym zawsze."
      },
      {
        h: "sie i Sie: wielka litera zmienia sens",
        p: "Na słuch <em>sie</em> i <em>Sie</em> brzmią tak samo, w piśmie się różnią. <strong>sie</strong> małą literą znaczy „ona” albo „oni, one”: <em>sie heißt Lena</em> z czasownikiem w liczbie pojedynczej, <em>sie heißen Weber</em> z czasownikiem w liczbie mnogiej. <strong>Sie</strong> wielką literą to forma grzecznościowa, dla jednej osoby albo wielu, z czasownikiem jak przy „oni”: <em>Wie heißen Sie?</em> Po polsku forma grzecznościowa to <em>Pan/Pani</em> z czasownikiem w 3. osobie liczby <b>pojedynczej</b> (<em>Pan jest</em>) i <em>Państwo</em> z mnogą, a niemieckie <em>Sie</em> jest jedno dla kobiet i mężczyzn i bierze czasownik jak przy „oni”, także gdy zwracasz się do jednej osoby. Na początku zdania wielka litera i tak stoi, więc nic nie rozstrzyga: <em>heißt</em> (liczba pojedyncza) wskazuje „ona”, a przy <em>heißen</em> trzeba kontekstu, żeby odróżnić „oni” od formy grzecznościowej.",
        list: [
          "<b>du</b>: jedna osoba, z którą jesteś na „ty”",
          "<b>ihr</b>: kilka osób, z którymi jesteś na „ty” (to nie jest forma grzecznościowa)",
          "<b>Sie</b>: jedna lub kilka osób, do których zwracasz się per Pan/Pani/Państwo"
        ]
      },
      {
        trap: "Zaimki trzeciej osoby idą za <b>rodzajem gramatycznym</b> rzeczownika, który zastępują, także przy rzeczach, a rodzaj niemiecki nie zawsze zgadza się z polskim: <em>Der Tisch ist neu. Er ist groß.</em> (er = stół), <em>Die Tasse ist neu. Sie ist groß.</em>, <em>Das Buch ist neu. Es ist groß.</em> (po polsku książka jest rodzaju żeńskiego, po niemiecku <em>Buch</em> jest nijakie, więc <em>es</em>, nie <em>sie</em>). Nie tłumacz „on” ani „ona” z polskiego: patrz na niemiecki rodzajnik."
      },
      {
        h: "Imię i pochodzenie",
        p: "Żeby się przedstawić, masz dwie formuły: <em>Ich heiße Paolo</em> albo <em>Mein Name ist Paolo</em>. Pytając o pochodzenie, używa się <strong>woher</strong> („skąd”) i czasownika <strong>kommen</strong>: <em>Woher kommst du?</em> Odpowiada się <em>Ich komme aus</em> i kraj albo miasto, zwykle bez rodzajnika: <em>Ich komme aus Italien</em>, <em>aus Berlin</em>. Polski zmienia przy tym końcówkę nazwy (<em>z Włoch</em>, <em>z Berlina</em>), a niemiecki zostawia nazwę bez zmian i dodaje <em>aus</em>. Na razie ucz się całych zdań: kraje, które wymagają rodzajnika, poznasz później."
      },
      {
        tip: "Żeby poprosić o powtórzenie: <em>Wie bitte?</em> („słucham?”, „jak?”) to najczęstsza formuła, pasuje do każdego. Na przedstawienie się kogoś odpowiadasz <em>Freut mich</em> („miło mi”)."
      }
    ],
    grammar: {
      title: "Zaimki osobowe w mianowniku",
      note: "Niemieckich zaimków jest dziewięć (<em>ich, du, er, sie, es, wir, ihr, sie, Sie</em>), ale końcówek czasownika regularnego tylko cztery: <em>-e, -st, -t, -en</em>. W tabeli <em>sie</em> i <em>Sie</em> dzielą wiersz, bo wymagają tej samej formy czasownika.",
      table: {
        head: ["osoba", "zaimek", "przykład"],
        rows: [
          ["1. os. liczby pojedynczej", "ich", "Ich heiße Paolo."],
          ["2. os. liczby pojedynczej", "du", "Woher kommst du?"],
          ["3. os. liczby pojedynczej", "er / sie / es", "Er heißt Tom, sie heißt Lena."],
          ["1. os. liczby mnogiej", "wir", "Wir heißen Weber."],
          ["2. os. liczby mnogiej", "ihr", "Wie heißt ihr?"],
          ["3. os. liczby mnogiej / forma grzecznościowa", "sie / Sie", "Wie heißen Sie?"]
        ]
      },
      examples: [
        { tr: "Nazywam się Paolo." },
        { tr: "Skąd jesteś?" },
        { tr: "On nazywa się Tom, ona nazywa się Lena." },
        { tr: "Nazywamy się Weber." },
        { tr: "Jak się nazywacie?" },
        { tr: "Jak się Pan/Pani nazywa?", note: "forma grzecznościowa" }
      ]
    },
    vocab: [
      "imię i nazwisko, nazwa",
      "imię",
      "nazwisko",
      "Jak się nazywasz?",
      "Nazywam się ...",
      "Moje imię (i nazwisko) to ...",
      "Miło mi.",
      "Skąd jesteś?",
      "Jestem z ... (kraj lub miasto)",
      "Ile masz lat?",
      "Mam ... lat.",
      "A ty?",
      "Słucham? Jak? (nie zrozumiałem)"
    ],
    culture: {
      title: "Niemiecki punkt widzenia: imiona, tytuły i przejście na du",
      text: "<p>W Niemczech przedstawia się często imieniem i nazwiskiem razem: <i>Ich bin Anna Weber</i>. Do osoby, której nie znasz, zwraca się zwykle przez <i>Herr</i> albo <i>Frau</i> i nazwisko, nie samym imieniem. Jeśli ktoś ma tytuł, na przykład <i>Doktor</i>, w środowiskach oficjalnych tytuł się dodaje: <i>Frau Doktor Weber</i>.</p><p>Dawne <i>Fräulein</i> dla niezamężnych kobiet wyszło z użycia. Dziś <i>Frau</i> mówi się do każdej dorosłej kobiety.</p><p>Przejście z <i>Sie</i> na <i>du</i> to małe wydarzenie towarzyskie, podobnie jak przejście na „ty” po polsku: zwykle proponuje je osoba starsza albo mająca więcej odpowiedzialności. W wielu firmach i wśród studentów od razu mówi się sobie na <i>du</i>, ale w razie wątpliwości zacznij od <i>Sie</i> i poczekaj na propozycję.</p>"
    },
    exercises: [
      {
        q: "Rozmawiasz z klientką, której nie znasz. Jakiego pytania użyjesz, żeby zapytać, jak się nazywa?",
        opts: ["Wie heißt du?", "Wie heißen Sie?", "Wie heißt ihr?"],
        why: "Do osoby nieznajomej używa się formy grzecznościowej <b>Sie</b>, z czasownikiem jak przy „oni”: <i>heißen</i>."
      },
      {
        q: "Lena jest kobietą. Którego zaimka użyjesz, mówiąc o niej?",
        opts: ["er", "sie", "es"],
        why: "O kobiecie mówi się <b>sie</b>, małą literą w środku zdania. <i>Er</i> jest dla mężczyzny, <i>es</i> dla rzeczowników nijakich."
      },
      {
        q: "Uzupełnij: „___ heißt Lena.” (Ona nazywa się Lena.)",
        hint: "zaimek trzeciej osoby rodzaju żeńskiego",
        why: "Na początku zdania piszesz <b>Sie</b> wielką literą, bo to pierwsze słowo; czasownik <i>heißt</i> jest w 3. osobie liczby pojedynczej."
      },
      {
        q: "Uzupełnij: „Ich ___ aus Italien.” (Jestem z Włoch.)",
        hint: "1. osoba liczby pojedynczej od kommen",
        why: "<i>Ich komme</i>: końcówka 1. osoby liczby pojedynczej to <b>-e</b>."
      },
      {
        q: "Uzupełnij odpowiednimi zaimkami.",
        tr: "Cześć! Nazywam się Paolo. A ty jak się nazywasz?",
        why: "W samodzielnym zdaniu zaimka się nie pomija: <i>Ich heiße Paolo</i>. Do osoby, z którą jesteś na „ty”, pytasz <i>Wie heißt du?</i>"
      },
      {
        q: "Nowa znajoma wita się z tobą na kursie niemieckiego.",
        setting: "Pierwsze zajęcia, pierwszy dzień.",
        lines: [
          { tr: "Cześć! Jestem Lena. A ty jak się nazywasz?" },
          { tr: "Odpowiedz, podając swoje imię.", answerTr: "Nazywam się Paolo." },
          { tr: "Skąd jesteś?" },
          { tr: "Odpowiedz, że jesteś z Włoch.", answerTr: "Jestem z Włoch." }
        ]
      },
      {
        tr: "Moje imię i nazwisko to Anna Weber.",
        why: "<i>Mein Name ist</i> to formuła zamienna z <i>Ich heiße</i>. Imię i nazwisko pisze się wielką literą."
      },
      {
        tr: "Cześć, nazywam się Lena i jestem z Berlina.",
        why: "Posłuchaj <i>ei</i> w <i>heiße</i>: czyta się „aj”, nie „ej”."
      },
      {
        tr: "Nazywam się Paolo. A ty jak się nazywasz?",
        why: "W <i>wie</i> <b>w</b> czyta się jak polskie <i>w</i>, a <i>ie</i> to długie <i>i</i>."
      }
    ]
  },
  "lesson:a1-u02-l2": {
    theme: "Przedstawianie się",
    title: "Sein, haben i liczebniki",
    objectives: [
      "odmieniać sein i haben w czasie teraźniejszym",
      "podawać wiek formułą „Ich bin ... Jahre alt”",
      "liczyć do 100 i odczytać numer telefonu"
    ],
    theory: [
      {
        h: "Haben, czasownik „mieć”",
        p: "<strong>haben</strong> też jest nieregularne: forma <em>du</em> to <em>hast</em>, forma <em>er/sie/es</em> to <em>hat</em>, a <em>b</em> znika. Służy do mówienia, co masz: <em>Ich habe eine Schwester</em>, <em>Wir haben Hunger</em>. Przy <em>haben</em> to, co się posiada, jest dopełnieniem (po polsku też: <em>mam siostrę</em>, biernik), a rodzajnik nieokreślony rodzaju męskiego <em>ein</em> zmienia się w <em>einen</em>, jak w formule <em>einen Kaffee</em> (powód wyjaśni jednostka 3): <em>Ich habe einen Bruder</em>. Przy <em>Hunger haben</em> i podobnych wyrażeniach rodzajnika nie ma."
      },
      {
        h: "Sein z rzeczownikiem: zostaje mianownik",
        p: "Po <strong>sein</strong> rzeczownik opisujący podmiot stoi w tym samym przypadku co podmiot, czyli w mianowniku: <em>Das ist ein Tisch</em>, <em>Ich bin Arzt</em>, <em>Wir sind Studenten</em>. Po polsku po „jestem” zwykle stoi narzędnik (<em>jestem lekarzem</em>, <em>jesteśmy studentami</em>), po „to jest” mianownik (<em>to jest stół</em>). Po niemiecku nie szukaj więc żadnej końcówki odpowiadającej polskiemu <em>-em</em> czy <em>-ami</em>: rzeczownik zostaje w formie podstawowej. Dopełnienie z przyimkiem nie jest orzecznikiem: <em>Ich bin in Berlin</em> mówi, gdzie jesteś, nie kim jesteś."
      },
      {
        contrast: "Po polsku wiek się <em>ma</em>: „mam dwadzieścia pięć lat”. Po niemiecku wiek się <em>jest</em>: <em>Ich bin fünfundzwanzig Jahre alt</em>, a z <em>haben</em> zdanie jest błędne. To klasyczna pułapka: dosłowne „mam ... lat” nie działa. Z głodem jest odwrotnie: po polsku „jestem głodny”, po niemiecku <em>Ich habe Hunger</em> (dosłownie „mam głód”). Z zimnem konstrukcje się pokrywają: po polsku „jest mi zimno”, po niemiecku <em>Mir ist kalt</em> („mnie jest zimno”), a <em>Ich habe kalt</em> jest błędne."
      },
      {
        h: "Liczebniki od 20 do 100",
        p: "Dziesiątki to <strong>zwanzig</strong>, <strong>dreißig</strong>, <strong>vierzig</strong>, <strong>fünfzig</strong>, <strong>sechzig</strong>, <strong>siebzig</strong>, <strong>achtzig</strong>, <strong>neunzig</strong>, <strong>hundert</strong>. Uwaga: <em>dreißig</em> pisze się z <b>ß</b>; <em>sechzig</em> traci końcowe <em>s</em> z <em>sechs</em>; <em>siebzig</em> traci <em>-en</em> z <em>sieben</em>. Niemieckie liczebniki od 21 do 99 zapisuje się jednym wyrazem. Polskie złożone, na przykład <em>dwadzieścia jeden</em>, zapisuje się dwoma wyrazami."
      },
      {
        trap: "W liczbach złożonych mówi się <b>najpierw jedności, potem dziesiątki</b>: 45 to <em>fünfundvierzig</em>, dosłownie „pięć i czterdzieści”. Po polsku jest odwrotnie: <em>czterdzieści pięć</em>, dziesiątki idą przed jednościami i nie ma żadnego „i”. Tak samo <em>einundzwanzig</em> to dosłownie „jeden i dwadzieścia”, a po polsku <em>dwadzieścia jeden</em>. Uwaga na pary, które mylą się na słuch: <em>sechzehn</em> (16) i <em>sechzig</em> (60), <em>siebzehn</em> (17) i <em>siebzig</em> (70)."
      },
      {
        h: "Numery telefonów",
        p: "Numer telefonu czyta się zwykle cyfra po cyfrze albo małymi grupami: 0151 to <em>null eins fünf eins</em>. Zero to <em>null</em>. Czasem przez telefon słychać <em>zwo</em> zamiast <em>zwei</em>, żeby nie pomylić z <em>drei</em>. Żeby zapytać: <em>Wie ist deine Telefonnummer?</em>"
      }
    ],
    grammar: {
      title: "Sein (być) i haben (mieć)",
      note: "Oba czasowniki są nieregularne i trzeba je zapamiętać. Przy <b>Sie</b> (forma grzecznościowa) i przy <em>sie</em> (oni) stoją <em>sind</em> i <em>haben</em>.",
      table: {
        head: ["osoba", "sein", "haben"],
        rows: [
          ["ich", "bin", "habe"],
          ["du", "bist", "hast"],
          ["er / sie / es", "ist", "hat"],
          ["wir", "sind", "haben"],
          ["ihr", "seid", "habt"],
          ["sie / Sie", "sind", "haben"]
        ]
      },
      examples: [
        { tr: "Mam dwadzieścia lat." },
        { tr: "Masz siostrę." },
        { tr: "On jest głodny." },
        { tr: "Jesteśmy przyjaciółmi." },
        { tr: "Macie brata?" },
        { tr: "Numer to zero trzy zero, dwanaście, trzydzieści cztery, pięćdziesiąt sześć.", note: "numer czytany grupami" }
      ]
    },
    vocab: [
      "numer telefonu",
      "rok (także: wiek w latach)",
      "stary; przy wieku: „... Jahre alt” = „... lat”",
      "dwadzieścia",
      "trzydzieści",
      "czterdzieści",
      "pięćdziesiąt",
      "sześćdziesiąt",
      "siedemdziesiąt",
      "osiemdziesiąt",
      "dziewięćdziesiąt",
      "sto",
      "dwadzieścia jeden"
    ],
    exercises: [
      {
        q: "Jak powiesz „Mam dwadzieścia pięć lat”?",
        opts: ["Ich habe fünfundzwanzig Jahre.", "Ich bin fünfundzwanzig Jahre alt.", "Ich habe fünfundzwanzig alt."],
        why: "Po niemiecku wiek podaje się z <b>sein</b>: <i>Ich bin fünfundzwanzig Jahre alt</i>. Z <i>haben</i> zdanie jest niepoprawne."
      },
      {
        q: "Która liczba to „45”?",
        opts: ["vierundfünfzig", "fünfundvierzig", "vierzigfünf"],
        why: "<i>Fünfundvierzig</i>: najpierw jedność (<i>fünf</i>), potem <i>und</i>, potem dziesiątka (<i>vierzig</i>). <i>Vierundfünfzig</i> to 54."
      },
      {
        tr: "Cała odmiana czasownika haben.",
        why: "<i>Haben</i> jest nieregularne: <i>du hast</i> i <i>er hat</i> tracą <i>b</i>."
      },
      {
        q: "Uzupełnij: „Du ___ eine Schwester.” (Masz siostrę.)",
        hint: "2. osoba liczby pojedynczej od haben",
        why: "<i>Du hast</i>: <b>b</b> czasownika znika w formie <i>du</i>."
      },
      {
        q: "Uzupełnij: „Ihr ___ hier.” (Jesteście tu.)",
        hint: "2. osoba liczby mnogiej od sein",
        why: "<i>Ihr seid</i>: nie myl z <i>sind</i>, które pasuje do <i>wir</i>, <i>sie</i> i <i>Sie</i>."
      },
      {
        q: "Uzupełnij formami bin i habe.",
        tr: "Jestem Paolo i mam dwadzieścia pięć lat. Mam brata.",
        why: "Imię i wiek podaje się z <i>sein</i> (<i>bin</i>), brata z <i>haben</i> (<i>habe</i>), po którym stoi <i>einen</i>."
      },
      {
        q: "Dopasuj każdą liczbę do cyfry.",
        pairs: ["30", "60", "45", "100"]
      },
      {
        q: "Przetłumacz, mówiąc na „ty”: „Masz siostrę?”",
        why: "<i>Hast du eine Schwester?</i> W pytaniu rozstrzygnięcia (tak albo nie) czasownik stoi na pierwszym miejscu."
      },
      {
        tr: "Mój numer telefonu to zero jeden pięć jeden, dwa trzy cztery, pięć sześć.",
        why: "Zero to <i>null</i>. Numery telefonów czyta się cyfra po cyfrze albo grupami."
      },
      {
        tr: "Mam dwadzieścia pięć lat i mam siostrę.",
        why: "<i>Fünfundzwanzig</i>: <b>z</b> czyta się jak polskie <i>c</i>; wiek podajesz z <i>bin</i>, a nie z <i>habe</i>."
      }
    ]
  },
  "lesson:a1-u02-l3": {
    theme: "Praca",
    title: "Czym się Pan/Pani zajmuje?",
    objectives: [
      "pytać o zawód i podawać swój formułą „Was sind Sie von Beruf?”",
      "tworzyć formy żeńskie zawodów przez -in",
      "używać nazw zawodów bez rodzajnika"
    ],
    theory: [
      {
        h: "Zawód podaje się bez rodzajnika",
        p: "Żeby powiedzieć, czym się zajmujesz, niemiecki używa zwykle rzeczownika bez rodzajnika, tak jak polski, który rodzajników w ogóle nie ma: <em>Ich bin Lehrerin</em>, <em>Er ist Arzt</em>. Pytanie brzmi <strong>Was sind Sie von Beruf?</strong>, dosłownie „czym jest Pan/Pani z zawodu?”. Do osoby, z którą jesteś na „ty”: <em>Was bist du von Beruf?</em>"
      },
      {
        trap: "Gdy przy zawodzie stoi przymiotnik, rodzajnik zwykle wraca: <em>Ich bin eine gute Lehrerin</em>. Polski rodzajników nie ma, więc <em>Jestem dobrą nauczycielką</em> nie daje tu żadnej wskazówki: zasada „bez rodzajnika” dotyczy samego zawodu, nie każdego zdania, w którym zawód występuje."
      },
      {
        h: "Forma żeńska na -in",
        p: "Po niemiecku nazwa zawodu zmienia się zależnie od tego, czy wykonuje go mężczyzna, czy kobieta: <em>der Lehrer / die Lehrerin</em>, <em>der Student / die Studentin</em>. Prawie zawsze dodaje się <strong>-in</strong> do formy męskiej, a forma żeńska ma zawsze <strong>die</strong>. Niektóre samogłoski dostają umlaut: <em>der Arzt → die Ärztin</em>, <em>der Koch → die Köchin</em>."
      },
      {
        contrast: "Polski też tworzy formy żeńskie, często przez <em>-ka</em>: <em>nauczyciel / nauczycielka</em>, <em>student / studentka</em>, <em>kucharz / kucharka</em>. W wielu takich parach polskie <em>-ka</em> odpowiada niemieckiemu <em>-in</em>: <em>Studentin</em>, <em>Köchin</em>. Są jednak dwie różnice. Po pierwsze, po polsku formą męską mówi się często także o kobiecie (<em>jestem lekarzem</em>, <em>jestem inżynierem</em>), a niemiecki zwykle rozróżnia: <em>Ich bin Lehrer</em> mówi mężczyzna, <em>Ich bin Lehrerin</em> kobieta. Po drugie, przypadek: po polsku po <em>jestem</em> stoi zwykle narzędnik (<em>jestem nauczycielką</em>), a po niemiecku rzeczownik po <em>sein</em> zostaje w mianowniku: <em>Ich bin Lehrerin</em>, bez żadnej zmiany końcówki."
      },
      {
        h: "Liczba mnoga form na -in",
        p: "Liczbę mnogą formy żeńskiej tworzy się przez <strong>-nen</strong>: <em>die Lehrerin → die Lehrerinnen</em>, z dwoma <em>n</em>. Formy męskie są różne: <em>die Lehrer</em>, <em>die Ärzte</em>, <em>die Studenten</em>."
      },
      {
        tip: "Ucząc się zawodu, od razu zapamiętuj obie formy: <em>der Arzt, die Ärztin</em>. Przydadzą się, gdy mówisz o sobie i o innych."
      }
    ],
    grammar: {
      title: "Zawody: forma męska i żeńska",
      note: "Formę żeńską tworzy się zwykle przez <b>-in</b>. Przy <em>Arzt</em> i <em>Koch</em> samogłoska dostaje umlaut.",
      table: {
        head: ["męski", "żeński", "przykład"],
        rows: [
          ["der Lehrer", "die Lehrerin", "Ich bin Lehrerin."],
          ["der Arzt", "die Ärztin", "Er ist Arzt."],
          ["der Student", "die Studentin", "Wir sind Studenten."],
          ["der Koch", "die Köchin", "Sie ist Köchin."],
          ["der Ingenieur", "die Ingenieurin", "Ich bin Ingenieurin."],
          ["der Verkäufer", "die Verkäuferin", "Sie ist Verkäuferin."]
        ]
      },
      examples: [
        { tr: "Jaki jest Pana/Pani zawód?", note: "forma grzecznościowa" },
        { tr: "Jestem nauczycielką.", note: "mówi kobieta" },
        { tr: "On jest lekarzem." },
        { tr: "Ona jest kucharką." },
        { tr: "Jestem dobrą nauczycielką.", note: "przy przymiotniku rodzajnik wraca" },
        { tr: "Jesteśmy studentami." }
      ]
    },
    vocab: [
      "zawód",
      "nauczyciel",
      "nauczycielka",
      "lekarz",
      "lekarka",
      "student",
      "studentka",
      "kucharz",
      "kucharka",
      "inżynier",
      "sprzedawca",
      "sprzedawczyni"
    ],
    exercises: [
      {
        q: "Jesteś lekarką. Które zdanie używa formy żeńskiej?",
        opts: ["Ich bin Arzt.", "Ich bin Ärztin.", "Ich bin Arztin."],
        why: "Forma żeńska od <i>Arzt</i> to <b>Ärztin</b>: dodajesz <i>-in</i>, a <i>A</i> dostaje umlaut."
      },
      {
        q: "Jaka jest liczba mnoga od „die Lehrerin”?",
        opts: ["die Lehrerins", "die Lehrerinnen", "die Lehrerine"],
        why: "Liczbę mnogą form na <i>-in</i> tworzy się przez <b>-nen</b>: <i>die Lehrerinnen</i>."
      },
      {
        tr: "Czasownik studieren, wszystkie osoby.",
        why: "Czasowniki na <i>-ieren</i> odmieniają się regularnie: <i>studier-</i> plus końcówki."
      },
      {
        q: "Uzupełnij: „Sie ist ___.” (Ona jest kucharką.)",
        hint: "forma żeńska od Koch",
        why: "<i>Köchin</i>: forma żeńska dodaje <i>-in</i>, a <i>o</i> dostaje umlaut. Bez umlautu słowo jest błędne."
      },
      {
        q: "Wybierz rodzajnik określony.",
        items: ["nauczyciel", "nauczycielka", "zawód", "studentka", "lekarka", "kucharz"]
      },
      {
        q: "Dopasuj każdy zawód do jego znaczenia.",
        pairs: ["nauczyciel", "lekarka", "kucharz", "sprzedawczyni"]
      },
      {
        tr: "Jaki jest Pana/Pani zawód?",
        why: "Pytanie z <i>was</i>: czasownik <i>sind</i> stoi na drugim miejscu, a przy <i>Sie</i> używa się formy grzecznościowej."
      },
      {
        q: "Przetłumacz: „Jestem kucharką.”",
        why: "<i>Ich bin Köchin</i>: zawód bez rodzajnika i forma żeńska na <i>-in</i>. Polskie <i>kucharką</i> jest w narzędniku, a niemieckie <i>Köchin</i> zostaje w mianowniku."
      },
      {
        tr: "Jaki jest Pana/Pani zawód? Jestem nauczycielką.",
        why: "<i>Beruf</i>: <b>u</b> jest długie, a końcowe <b>f</b> wymawia się jak polskie <i>f</i>."
      },
      {
        tr: "Jaki jest Pana/Pani zawód? Jestem inżynierką.",
        why: "<i>Ingenieurin</i> to forma żeńska od <i>Ingenieur</i>: dodajesz <b>-in</b>."
      }
    ]
  },
  "lesson:a1-u02-l4": {
    theme: "Życie codzienne",
    title: "Wohnen, arbeiten, kommen",
    objectives: [
      "odmieniać regularne czasowniki w czasie teraźniejszym",
      "mówić, gdzie mieszkasz, gdzie pracujesz i skąd pochodzisz",
      "rozpoznawać kraje i języki"
    ],
    theory: [
      {
        h: "Czasownik regularny: temat plus końcówka",
        p: "Od bezokolicznika odejmujesz <em>-en</em> i dodajesz końcówkę osoby: <strong>-e, -st, -t, -en, -t, -en</strong>. Od <em>wohnen</em> powstaje <em>ich wohne, du wohnst, er wohnt, wir wohnen, ihr wohnt, sie/Sie wohnen</em>. Form jest sześć, ale różnych końcówek cztery, bo <em>er</em> i <em>ihr</em> mają tę samą formę, tak jak <em>wir</em> i <em>sie/Sie</em>."
      },
      {
        contrast: "Po polsku każda osoba ma własną końcówkę: <em>mieszkam, mieszkasz, mieszka, mieszkamy, mieszkacie, mieszkają</em>, i dlatego zaimek można pominąć. Po niemiecku <em>er arbeitet</em> i <em>ihr arbeitet</em> są identyczne, <em>wir arbeiten</em> i <em>sie arbeiten</em> też, więc w samodzielnym zdaniu zaimka się nie pomija."
      },
      {
        h: "Tematy na -t i -d: dodatkowe -e-",
        p: "Jeśli temat kończy się na <em>-t</em> albo <em>-d</em> (<em>arbeit-</em>, <em>find-</em>), żeby końcówkę dało się wymówić, wstawia się <strong>-e-</strong> przed <em>-st</em> i <em>-t</em>: <em>du arbeitest, er arbeitet, ihr arbeitet</em>. Forma z <em>ich</em> (<em>ich arbeite</em>) i formy na <em>-en</em> są regularne."
      },
      {
        h: "Wo i woher",
        p: "<strong>Wo</strong> pyta, gdzie ktoś jest: <em>Wo wohnst du?</em> → <em>Ich wohne in Berlin.</em> <strong>Woher</strong> pyta o pochodzenie: <em>Woher kommen Sie?</em> → <em>Ich komme aus Spanien.</em> Przy miastach i krajach używa się zwykle <em>in</em> dla miejsca i <em>aus</em> dla pochodzenia. Polski zmienia końcówkę nazwy (<em>w Berlinie</em>, <em>z Berlina</em>, <em>we Włoszech</em>, <em>z Włoch</em>), a niemiecki zostawia nazwę bez zmian i wybiera przyimek: <em>in Berlin</em>, <em>aus Berlin</em>, <em>in Italien</em>, <em>aus Italien</em>. Czasownik stoi na drugim miejscu, a przy <em>Sie</em> odmienia się jak przy „oni”."
      },
      {
        trap: "Nazwy języków są rzeczownikami i pisze się je <b>wielką literą</b>: <em>Deutsch, Italienisch, Englisch</em>. Po polsku piszesz je małą literą i mówisz <em>po niemiecku</em>, <em>po angielsku</em>; po niemieckim <em>sprechen</em> najprostsza forma to sam rzeczownik, bez przyimka i bez rodzajnika: <em>Ich spreche Deutsch</em>. Uwaga: <em>sprechen</em> zmienia samogłoskę przy <em>du</em> i <em>er</em> (<em>du sprichst</em>), takie czasowniki poznasz w jednostce 3: na razie używaj tylko <em>ich spreche</em> i <em>wir sprechen</em>."
      },
      {
        tip: "Żeby powiedzieć, gdzie pracujesz: <em>Ich arbeite in Hamburg</em>. Żeby dodać zawód: <em>Ich arbeite als Lehrerin</em> („pracuję jako nauczycielka”), zwykle bez rodzajnika po <em>als</em>."
      }
    ],
    grammar: {
      title: "Czas teraźniejszy regularny: wohnen, arbeiten, kommen",
      note: "Przy <em>arbeiten</em> temat kończy się na <b>-t</b>, więc <b>-e-</b> pojawia się przy <em>du</em>, <em>er/sie/es</em> i <em>ihr</em>.",
      table: {
        head: ["osoba", "wohnen", "arbeiten", "kommen"],
        rows: [
          ["ich", "wohne", "arbeite", "komme"],
          ["du", "wohnst", "arbeitest", "kommst"],
          ["er / sie / es", "wohnt", "arbeitet", "kommt"],
          ["wir", "wohnen", "arbeiten", "kommen"],
          ["ihr", "wohnt", "arbeitet", "kommt"],
          ["sie / Sie", "wohnen", "arbeiten", "kommen"]
        ]
      },
      examples: [
        { tr: "Gdzie mieszkasz?" },
        { tr: "Mieszkam w Berlinie." },
        { tr: "Pracujesz w Wiedniu." },
        { tr: "On pochodzi z Hiszpanii." },
        { tr: "Pracujecie w Hamburgu." },
        { tr: "Skąd Pan/Pani pochodzi?", note: "forma grzecznościowa" }
      ]
    },
    vocab: [
      "Niemcy",
      "Włochy",
      "Austria",
      "Francja",
      "Hiszpania",
      "Polska",
      "niemiecki (język)",
      "włoski (język)",
      "angielski (język)",
      "hiszpański (język)",
      "francuski (język)",
      "polski (język)"
    ],
    exercises: [
      {
        q: "Które zdanie jest poprawne?",
        opts: ["Er arbeit in Berlin.", "Er arbeitet in Berlin.", "Er arbeitest in Berlin."],
        why: "Temat <i>arbeit-</i> kończy się na <i>-t</i>: przy <i>er</i> potrzebne jest <b>-e-</b> przed <i>-t</i>."
      },
      {
        q: "Które formy są poprawne przy „ihr”?",
        opts: ["ihr arbeitet", "ihr kommt", "ihr wohnen", "ihr arbeitest", "ihr wohnt"],
        why: "Przy <i>ihr</i> końcówka to <b>-t</b> (<i>-et</i> przy tematach na <i>-t</i>). <i>Wohnen</i> pasuje do <i>wir</i> i <i>sie/Sie</i>, a <i>-st</i> do <i>du</i>."
      },
      {
        tr: "Czasownik arbeiten, wszystkie osoby.",
        why: "Temat <i>arbeit-</i> kończy się na <i>-t</i>: przy <i>du</i>, <i>er</i> i <i>ihr</i> pojawia się <b>-e-</b>."
      },
      {
        tr: "Czasownik kommen, wybrane osoby.",
        why: "<i>Kommen</i> ma w czasie teraźniejszym regularne końcówki: <i>du kommst</i>, <i>er kommt</i>, <i>ihr kommt</i>. Samogłoska się nie zmienia."
      },
      {
        q: "Uzupełnij: „Du ___ in Wien.” (Pracujesz w Wiedniu.)",
        hint: "2. osoba liczby pojedynczej od arbeiten",
        why: "<i>Du arbeitest</i>: po temacie na <i>-t</i> potrzebne jest <b>-e-</b> przed <i>-st</i>."
      },
      {
        q: "Uzupełnij: „Wo ___ ihr?” (Gdzie mieszkacie?)",
        hint: "2. osoba liczby mnogiej od wohnen",
        why: "<i>Ihr wohnt</i>: końcówka <i>ihr</i> to <b>-t</b>."
      },
      {
        tr: "Mieszkam we Włoszech i pracuję tutaj.",
        why: "W zdaniu z <i>und</i> drugi czasownik ma ten sam podmiot, który można pominąć: <i>und arbeite hier</i>."
      },
      {
        q: "Przetłumacz, mówiąc na „ty”: „Skąd jesteś?”",
        why: "<i>Woher kommst du?</i> to najczęstsza forma; <i>Woher bist du?</i> też jest poprawne."
      },
      {
        tr: "Mieszkam w Wiedniu i pochodzę z Włoch.",
        why: "<i>Wien</i> czyta się [viːn]: <b>w</b> brzmi jak polskie <i>w</i>, a <i>ie</i> to długie <i>i</i>."
      },
      {
        tr: "Pochodzę z Włoch i mieszkam w Berlinie.",
        why: "Przy miastach używa się <i>in</i> dla miejsca i <i>aus</i> dla pochodzenia; polskich końcówek (<i>w Berlinie</i>, <i>z Włoch</i>) po niemiecku nie ma."
      }
    ]
  },
  "lesson:a1-u02-test": {
    theme: "Sprawdzian",
    title: "Sprawdzian z jednostki 2",
    objectives: ["sprawdzić zaimki, sein i haben, zawody, czas teraźniejszy regularny, liczebniki"],
    theory: [
      {
        p: "Dziesięć pytań z całej jednostki. Zalicza się je przy 70%. Nie zaglądaj do lekcji w trakcie odpowiadania: jeśli czegoś nie pamiętasz, lepiej wrócić i powtórzyć."
      }
    ],
    exercises: [
      {
        q: "Jak powiesz „Mam trzydzieści lat”?",
        opts: ["Ich habe dreißig Jahre.", "Ich bin dreißig Jahre alt.", "Ich sind dreißig Jahre alt."],
        why: "<i>Ich bin dreißig Jahre alt</i>: wiek podaje się z <b>sein</b> i <i>alt</i>."
      },
      {
        q: "Która liczba to „73”?",
        opts: ["siebenunddreißig", "dreiundsiebzig", "siebzigdrei"],
        why: "<i>Dreiundsiebzig</i>: najpierw jedność (<i>drei</i>), potem dziesiątka (<i>siebzig</i>), czyli odwrotnie niż po polsku. <i>Siebenunddreißig</i> to 37."
      },
      {
        q: "Pani Weber jest lekarką. Które zdanie jest poprawne i używa żeńskiej nazwy zawodu?",
        opts: ["Frau Weber ist Ärztin.", "Frau Weber ist Arzt.", "Frau Weber ist ein Ärztin."],
        why: "Forma żeńska to <b>Ärztin</b>, a zawód stoi bez rodzajnika."
      },
      {
        q: "Uzupełnij: „Wir ___ aus Polen.” (Pochodzimy z Polski.)",
        why: "<i>Wir kommen</i>: przy <i>wir</i> końcówka to <b>-en</b>."
      },
      {
        q: "Uzupełnij: „Ihr ___ Hunger.” (Jesteście głodni, dosłownie: macie głód.)",
        why: "<i>Ihr habt</i>: forma <i>haben</i> przy <i>ihr</i> to <b>habt</b>; po niemiecku głód się „ma”."
      },
      {
        tr: "Czasownik arbeiten: du, er, ihr.",
        why: "Przy tematach na <i>-t</i> potrzebne jest <b>-e-</b>: <i>du arbeitest, er arbeitet, ihr arbeitet</i>."
      },
      {
        q: "Uzupełnij formami ist, wohnt i kommt.",
        tr: "Anna jest nauczycielką. Mieszka w Wiedniu i pochodzi z Polski.",
        why: "Wszystkie trzy czasowniki są w 3. osobie liczby pojedynczej: <i>ist</i>, <i>wohnt</i>, <i>kommt</i>."
      },
      {
        q: "Przetłumacz, zwracając się per Pan/Pani: „Czym się Pan/Pani zajmuje zawodowo?”",
        why: "<i>Was sind Sie von Beruf?</i> to poznana formuła; <i>Was machen Sie beruflich?</i> to poprawny wariant."
      },
      {
        tr: "Nazywam się Lena, mam trzydzieści lat i jestem z Wiednia.",
        why: "<i>Dreißig</i> pisze się z <b>ß</b>: czyta się jak bezdźwięczne <i>s</i>, bez podwajania."
      },
      {
        tr: "Nazywam się Paolo, jestem inżynierem i mieszkam w Berlinie.",
        why: "W zdaniu są trzy czasowniki: <i>heiße</i>, <i>bin</i>, <i>wohne</i>."
      }
    ]
  },
  "unit:a1-u03": {
    title: "Po pracy",
    grammarNote: "gern i mögen · czasowniki ze zmianą samogłoski · biernik · kein i nicht"
  },
  "lesson:a1-u03-l1": {
    theme: "Gusty i przyzwyczajenia",
    title: "Powiedzieć, co lubisz",
    objectives: [
      "powiedzieć, że lubisz coś robić, za pomocą gern",
      "powiedzieć, że lubisz jakąś rzecz, za pomocą mögen",
      "zachować czasownik na drugim miejscu także wtedy, gdy zdanie zaczyna się od heute"
    ],
    theory: [
      {
        h: "Gern: „chętnie”, które znaczy „lubię”",
        p: "Żeby powiedzieć, że lubisz coś robić, zwykle nie używa się czasownika „lubić” z bezokolicznikiem: do czasownika czynności dodaje się przysłówek <strong>gern</strong> („chętnie”). <em>Ich trinke gern Tee</em> to „chętnie piję herbatę”, czyli „lubię pić herbatę”. Zwykle <em>gern</em> stoi tuż za czasownikiem, a gdy podmiotem jest zaimek, także za nim: <em>Ich esse gern Pizza</em>, <em>Wir trinken gern Limonade</em>."
      },
      {
        contrast: "Po polsku powiesz „lubię pić herbatę”: czasownik <em>lubić</em> i bezokolicznik. Po niemiecku odmieniony zostaje czasownik samej czynności, a <em>gern</em> mu towarzyszy: <em>Ich trinke gern Tee</em>. Konstrukcja z <em>mögen</em> i bezokolicznikiem też istnieje, ale nie jest tym, czego uczysz się na tym poziomie. Bliżej niemieckiego jest polskie „chętnie piję herbatę”: tam też jest jeden odmieniony czasownik i przysłówek. Nie przenoś więc <em>lubię + bezokolicznik</em> słowo w słowo."
      },
      {
        h: "Mögen: lubię jakąś rzecz",
        p: "Gdy lubisz rzecz, a nie czynność, używasz czasownika <strong>mögen</strong>. Buduje się go jak polskie „lubić”: podmiotem jest ten, kto lubi, a rzecz jest dopełnieniem (po polsku „lubię ser”, „lubię rybę”). <em>Ich mag Käse</em>, <em>Magst du Fisch?</em>, <em>Wir mögen Suppe</em>. To czasownik nieregularny: forma <em>ich</em> i forma <em>er/sie/es</em> są takie same i nie mają przegłosu (<em>mag</em>), <em>du</em> ma <em>magst</em>. Żeby powiedzieć, że lubisz coś robić, na razie używaj <em>gern</em> za czasownikiem."
      },
      {
        trap: "Gdy mówisz o gustach w ogóle, rzeczownik stoi zwykle <b>bez rodzajnika</b>: <em>Ich mag Käse</em>, nie „Ich mag der Käse”. Po polsku rodzajników nie ma, więc „lubię ser” brzmi tu tak samo jak po niemiecku: to rzadki przypadek, w którym brak rodzajnika jest dla ciebie naturalny. Dotyczy to także liczby mnogiej: <em>Ich mag Äpfel</em>. Gdy mówisz o konkretnym serze, rodzajnik wraca: <em>Ich mag den Käse</em>."
      },
      {
        h: "Czasownik zostaje na drugim miejscu",
        p: "Po polsku szyk jest swobodny: „Dziś piję sok”, „Piję dziś sok”. Po niemiecku odmieniony czasownik w zdaniu oznajmującym stoi zawsze na drugim miejscu. Jeśli zdanie zaczyna się od <em>heute</em> („dziś”), podmiot przesuwa się za czasownik: <em>Heute trinke ich gern Saft</em>. W pytaniu rozstrzygającym czasownik idzie na pierwsze miejsce, a niemiecki nie ma słowa odpowiadającego polskiemu „czy”: <em>Trinkst du gern Tee?</em>, <em>Magst du Fisch?</em>"
      },
      {
        tip: "Powiedz na głos trzy własne zdania z <em>gern</em>: <em>Ich esse gern ...</em>, <em>Ich trinke gern ...</em>, <em>Ich mag ...</em>. Trzy formuły, całe słownictwo tej lekcji."
      }
    ],
    grammar: {
      title: "Mögen w czasie teraźniejszym",
      note: "Przy <b>ich</b> i <b>er/sie/es</b> forma jest ta sama: <em>mag</em>. Przegłos pojawia się tylko w bezokoliczniku i w liczbie mnogiej.",
      table: {
        head: ["osoba", "forma", "przykład"],
        rows: [
          ["ich", "mag", "Ich mag Käse."],
          ["du", "magst", "Magst du Fisch?"],
          ["er / sie / es", "mag", "Er mag Suppe."],
          ["wir", "mögen", "Wir mögen Suppe."],
          ["ihr", "mögt", "Mögt ihr Pizza?"],
          ["sie / Sie", "mögen", "Sie mögen Nudeln."]
        ]
      },
      examples: [
        { tr: "Chętnie piję herbatę.", note: "gern stoi zwykle za czasownikiem, a przy zaimku-podmiocie także za nim: Ich trinke gern Tee, Heute trinke ich gern Tee" },
        { tr: "Chętnie jem pizzę." },
        { tr: "Lubię ser.", note: "bez rodzajnika, w znaczeniu ogólnym" },
        { tr: "Lubisz ryby?", note: "pytanie rozstrzygające: czasownik na pierwszym miejscu" },
        { tr: "Dziś chętnie piję sok.", note: "podmiot przesuwa się za czasownik" },
        { tr: "My lubimy zupę." }
      ]
    },
    vocab: [
      "chętnie, z przyjemnością",
      "pić",
      "jeść",
      "lubić (z rzeczownikiem)",
      "jabłko",
      "pizza",
      "sałatka, sałata",
      "zupa",
      "makaron (w tym znaczeniu zwykle w liczbie mnogiej; liczba pojedyncza: die Nudel)",
      "ryba",
      "mięso",
      "owoce",
      "lemoniada (słodki napój gazowany, niekoniecznie cytrynowy)",
      "ser"
    ],
    exercises: [
      {
        q: "Jak powiesz „Lubię pić herbatę”?",
        opts: ["Ich gern trinke Tee.", "Ich trinke gern Tee.", "Gern ich trinke Tee."],
        why: "Odmieniony czasownik zostaje na drugim miejscu, a <b>gern</b> idzie za nim. (<i>Gern trinke ich Tee</i> jest możliwe, z podmiotem za czasownikiem, ale nie zdanie z <i>ich</i> przed czasownikiem.)"
      },
      {
        q: "Uzupełnij: „Ich ___ Käse.” (Lubię ser.)",
        hint: "mögen, 1. osoba liczby pojedynczej",
        why: "<i>Ich mag</i>: forma nieregularna, bez przegłosu, taka sama jak <i>er/sie/es</i>."
      },
      {
        q: "Uzupełnij: „Ich ___ gern Fisch.” (Chętnie jem rybę.)",
        hint: "essen, 1. osoba liczby pojedynczej",
        why: "Przy <i>ich</i> czasownik jest regularny: <b>esse</b>. Zmiana samogłoski dotyczy tylko <i>du</i> i <i>er</i>, poznasz ją w lekcji 2."
      },
      {
        q: "Jak powiesz „Lubię pizzę”?",
        opts: ["Ich mag Pizza.", "Ich Pizza mag.", "Mag ich Pizza."],
        why: "Czasownik jest na drugim miejscu, a rzeczownik stoi bez rodzajnika. Z czasownikiem na początku <i>Mag ich Pizza?</i> byłoby pytaniem."
      },
      {
        q: "Które zdanie ma czasownik na właściwym miejscu?",
        opts: ["Heute ich esse Salat.", "Heute esse ich Salat.", "Ich heute esse Salat."],
        why: "Jeśli zdanie zaczyna się od <i>heute</i>, podmiot przesuwa się za czasownik: <b>Heute esse ich Salat.</b>"
      },
      {
        q: "Przetłumacz: „Dziś chętnie piję herbatę.”",
        why: "<i>Heute trinke ich gern Tee</i>: czasownik na drugim miejscu, potem podmiot, potem <i>gern</i>. Poprawne jest też <i>Ich trinke heute gern Tee</i>."
      },
      {
        q: "Połącz każde słowo z jego znaczeniem.",
        pairs: ["pić", "jeść", "lubić (z rzeczownikiem)", "chętnie"]
      },
      {
        q: "Uzupełnij oba zdania.",
        tr: "Chętnie piję herbatę. A ty, czy też chętnie pijesz herbatę?",
        why: "Drugie zdanie jest pytaniem rozstrzygającym, więc czasownik idzie na pierwsze miejsce: <i>Trinkst du ...?</i> Na początku zdania piszesz wielką literą. Niemiecki nie ma odpowiednika polskiego „czy”."
      },
      {
        tr: "Chętnie jem sałatkę i chętnie piję wodę.",
        why: "<i>Salat</i>: <b>s</b> na początku przed samogłoską jest dźwięczne, jak polskie <i>z</i>. W <i>Wasser</i> <b>w</b> czyta się jak polskie <i>w</i>."
      },
      {
        tr: "Chętnie piję herbatę i chętnie jem chleb.",
        why: "W <i>Tee</i> <b>ee</b> to jedno długie <i>e</i>, dłuższe niż polskie, a nie dwie osobne samogłoski."
      }
    ]
  },
  "lesson:a1-u03-l2": {
    theme: "Gusty i przyzwyczajenia",
    title: "Czasowniki ze zmianą samogłoski",
    objectives: [
      "odmieniać nehmen, essen i sprechen w czasie teraźniejszym",
      "rozpoznać, że samogłoska zmienia się tylko przy du i er/sie/es",
      "zamawiać posiłki: nehmen i essen"
    ],
    theory: [
      {
        h: "Trzy czasowniki, jedna nowość",
        p: "<strong>Nehmen</strong> („brać”), <strong>essen</strong> („jeść”) i <strong>sprechen</strong> („mówić”) mają takie same końcówki jak inne czasowniki, ale przy <strong>du</strong> i przy <strong>er/sie/es</strong> samogłoska <em>e</em> w temacie zmienia się w <em>i</em>: <em>essen → du isst, er isst</em>; <em>sprechen → du sprichst, er spricht</em>; <em>nehmen → du nimmst, er nimmt</em> (tu zmienia się też spółgłoska: <em>nehm-</em> staje się <em>nimm-</em>)."
      },
      {
        contrast: "Zmiany w temacie czasownika znasz z polskiego: „brać” to <em>biorę, bierzesz, bierze, bierzemy, bierzecie, biorą</em>, a „jeść” to <em>jem, jesz, je, jemy, jecie, jedzą</em>. Po polsku temat zmienia się jednak w innych osobach niż po niemiecku. W trzech czasownikach z tej lekcji zmiana obejmuje tylko <b>2. i 3. osobę liczby pojedynczej</b>, czyli <em>du</em> i <em>er/sie/es</em>. Przy <em>ich</em>, <em>wir</em>, <em>ihr</em> i <em>sie/Sie</em> zostaje temat bezokolicznika: <em>ich esse</em>, <em>wir essen</em>, <em>ihr esst</em>."
      },
      {
        h: "Essen: du isst, bez podwójnej końcówki",
        p: "Temat <em>essen</em> kończy się na <em>-s</em>, więc końcówka <em>du</em> się skraca: <em>du isst</em>, a nie „du issst”. Forma <em>isst</em> jest taka sama przy <em>du</em> i <em>er/sie/es</em>. <em>Ihr esst</em> ma samogłoskę niezmienioną: to inna forma."
      },
      {
        trap: "Zmiana samogłoski nie dotyczy <em>ihr</em> („wy”): <em>ihr esst</em>, <em>ihr nehmt</em>, <em>ihr sprecht</em>. Nie obejmuje też wszystkich czasowników: <em>trinken</em> zostaje regularny (<em>du trinkst</em>). Inne czasowniki mają inne zmiany, na przykład <em>sehen → du siehst</em>: poznasz je później. Na razie naucz się tych trzech z ich formami."
      },
      {
        h: "Nehmen przy zamawianiu, sprechen przy językach",
        p: "<em>Ich nehme einen Kaffee</em> odpowiada polskiemu „wezmę kawę”: to typowa formuła, gdy w kawiarni albo w restauracji mówisz, co wybierasz. Zwróć uwagę, że po niemiecku wystarczy czas teraźniejszy, a po polsku zwykle mówi się „wezmę” albo „poproszę”. <em>Sprechen</em> używa się z nazwami języków, bez rodzajnika i bez przyimka: <em>Ich spreche Deutsch</em>, <em>Sprichst du Polnisch?</em> Po polsku jest „mówię po niemiecku”, a po niemiecku nie ma odpowiednika „po”."
      },
      {
        tip: "Naucz się tej trójki jak jednego bloku: <em>essen, du isst, er isst</em>; <em>nehmen, du nimmst, er nimmt</em>; <em>sprechen, du sprichst, er spricht</em>. Gdy wahasz się przy jakiejś formie, zapytaj: czy to <em>du</em>, czy <em>er/sie/es</em>? Tylko wtedy samogłoska się zmienia."
      }
    ],
    grammar: {
      title: "Essen, nehmen, sprechen w czasie teraźniejszym",
      note: "Samogłoska zmienia się (<b>e → i</b>) tylko przy <b>du</b> i <b>er/sie/es</b>.",
      table: {
        head: ["osoba", "essen", "nehmen", "sprechen"],
        rows: [
          ["ich", "esse", "nehme", "spreche"],
          ["du", "isst", "nimmst", "sprichst"],
          ["er / sie / es", "isst", "nimmt", "spricht"],
          ["wir", "essen", "nehmen", "sprechen"],
          ["ihr", "esst", "nehmt", "sprecht"],
          ["sie / Sie", "essen", "nehmen", "sprechen"]
        ]
      },
      examples: [
        { tr: "Jem ryż." },
        { tr: "Jesz rybę.", note: "du isst: samogłoska się zmienia" },
        { tr: "On bierze zupę." },
        { tr: "My bierzemy kawę.", note: "przy wir temat się nie zmienia" },
        { tr: "Mówisz po niemiecku?" },
        { tr: "Jecie ziemniaki.", note: "ihr esst (wy): bez zmiany samogłoski" }
      ]
    },
    vocab: [
      "brać",
      "jeść",
      "mówić",
      "kiełbasa",
      "jajko",
      "ryż",
      "ziemniak",
      "warzywa",
      "kolacja",
      "język",
      "wolno",
      "też, także"
    ],
    exercises: [
      {
        tr: "Pełna odmiana czasownika nehmen, bez zaglądania.",
        why: "Przy <i>du</i> i <i>er/sie/es</i> zmieniają się samogłoska i spółgłoska: <b>nimmst, nimmt</b>. Pozostałe osoby mają temat bezokolicznika: <i>nehme, nehmen, nehmt, nehmen</i>."
      },
      {
        q: "Jak powiesz „ty jesz”?",
        opts: ["du esst", "du isst", "du esse"],
        why: "<b>Du isst</b>: samogłoska się zmienia (e → i), a końcówka <i>-st</i> się skraca, bo temat kończy się na <i>s</i>. <i>Esst</i> to forma <i>ihr</i>."
      },
      {
        q: "Uzupełnij: „Er ___ einen Apfel.” (On bierze jabłko.)",
        hint: "nehmen, 3. osoba liczby pojedynczej",
        why: "<b>Er nimmt</b>: zmieniają się samogłoska i spółgłoska w porównaniu z <i>nehmen</i>."
      },
      {
        q: "Uzupełnij: „Du ___ sehr gut Deutsch.” (Mówisz bardzo dobrze po niemiecku.)",
        hint: "sprechen, 2. osoba liczby pojedynczej",
        why: "<b>Du sprichst</b>: e → i i końcówka <i>-st</i>."
      },
      {
        q: "Przy którym zaimku samogłoska NIE zmienia się?",
        opts: ["du", "er", "wir"],
        why: "Przy <b>wir</b> używa się tematu bezokolicznika: <i>wir essen, wir nehmen, wir sprechen</i>. Zmiana dotyczy tylko <i>du</i> i <i>er/sie/es</i>."
      },
      {
        q: "Które zdania są poprawne?",
        opts: ["Er isst Fisch.", "Du sprecht Deutsch.", "Ihr esst Reis.", "Ich nimme Tee.", "Sie nimmt eine Suppe."],
        why: "<i>Du sprichst</i> (nie „sprecht”, to forma <i>ihr</i>); <i>ich nehme</i> (przy <i>ich</i> samogłoska się nie zmienia). Pozostałe trzy są poprawne."
      },
      {
        tr: "Dziś Anna je ryż i warzywa.",
        why: "Jeśli zdanie zaczyna się od <i>heute</i>, czasownik zostaje na drugim miejscu: <i>Heute isst Anna ...</i>"
      },
      {
        q: "Przetłumacz: „Ty mówisz po włosku, a ja mówię po niemiecku.”",
        why: "<i>Du sprichst</i> ze zmianą samogłoski, <i>ich spreche</i> bez niej: zaimków się nie pomija, a po nazwie języka nie ma przyimka."
      },
      {
        tr: "Ty jesz ryż, a ja biorę ziemniaki.",
        why: "<i>Du isst</i>: <b>i</b> jest krótkie, a <b>ss</b> bezdźwięczne, jak polskie <i>s</i> w „kasa”."
      },
      {
        tr: "Ja jem ryż, a ty jesz ziemniaki.",
        why: "Pamiętaj o zmianie samogłoski: <i>ich esse</i>, ale <i>du isst</i>."
      }
    ]
  },
  "lesson:a1-u03-l3": {
    theme: "W kawiarni",
    title: "Zamawiać, proponować, przyjmować, odmawiać",
    objectives: [
      "zamówić napój z einen, eine, ein",
      "zaproponować za pomocą Möchten Sie ...? i odpowiedzieć Ja, gern albo Nein, danke",
      "rozpoznać, że w bierniku zmienia się tylko rodzaj męski w liczbie pojedynczej"
    ],
    theory: [
      {
        h: "Proponować, przyjmować, odmawiać",
        p: "Żeby coś zaproponować znajomemu, z którym jesteś na „ty”: <em>Möchtest du einen Kaffee?</em>; osobie, do której zwracasz się per Pan/Pani: <em>Möchten Sie einen Kaffee?</em> Żeby przyjąć: <strong>Ja, gern</strong> albo <strong>Ja, bitte</strong>. Żeby odmówić: <strong>Nein, danke</strong>. Żeby o coś poprosić: <em>Ich möchte einen Saft</em>, czyli „chciałbym sok”."
      },
      {
        trap: "Wobec propozycji samo <em>danke</em> bywa rozumiane jako odmowa („nie, dziękuję”), a <em>bitte</em> jako zgoda. Znasz to z polskiego: samo „dziękuję” w odpowiedzi na propozycję też często znaczy „nie”. Żeby nie było nieporozumień, mów wyraźnie <em>Ja, bitte</em> albo <em>Ja, gern</em>, gdy się zgadzasz, i <em>Nein, danke</em>, gdy odmawiasz."
      },
      {
        h: "Möchte: na razie formuła",
        p: "<em>Ich möchte ...</em> to grzeczna formuła na wyrażenie życzenia, odpowiednik „chciałbym”. Formy do nauczenia na teraz to <em>ich möchte</em>, <em>du möchtest</em> i <em>Sie möchten</em>. W tych formułach rzecz, której chcesz, jest dopełnieniem i stoi w bierniku: <em>Ich möchte einen Saft</em>."
      },
      {
        h: "Biernik: zmienia się tylko rodzaj męski",
        p: "Dopełnienie (to, co bierzesz, pijesz, zamawiasz) stoi w <strong>bierniku</strong>. W porównaniu z mianownikiem zmienia się tylko rodzaj męski w liczbie pojedynczej: <strong>der → den</strong>, <strong>ein → einen</strong>, <strong>kein → keinen</strong>. Rodzaj żeński, nijaki i liczba mnoga zostają takie same: <em>Die Cola ist kalt. Ich trinke die Cola.</em> (mianownik i biernik: <em>die</em> w obu), <em>Das ist ein Wasser. Ich nehme ein Wasser.</em> (<em>ein</em> w obu)."
      },
      {
        contrast: "Biernik znasz z polskiego, więc sama idea nie jest nowa: „piję kawę”, „biorę sok”. Różnica jest w tym, <b>gdzie</b> ją widać. Po polsku końcówkę biernika dostaje rzeczownik, i to głównie żeński: <em>kawa → kawę</em>, ale <em>sok → sok</em> bez zmiany. Po niemiecku zmiana jest na rodzajniku i dotyczy tylko rodzaju męskiego: <em>der Saft → den Saft</em>, ale <em>die Cola</em> bez zmiany. Wychodzi odwrotnie niż po polsku. Rodzajnik jest tu prawdziwą nowością, bo polski go nie ma: <em>Der Kaffee ist heiß</em> (podmiot), ale <em>Ich nehme den Kaffee</em> (dopełnienie). Dlatego w kawiarni mówi się <em>Einen Kaffee, bitte</em>: za tym stoi „(ich nehme) einen Kaffee”."
      },
      {
        trap: "Po <em>sein</em> („być”) zostaje mianownik, bo nie ma dopełnienia: <em>Das ist ein Saft</em>, nie „Das ist einen Saft”. <em>Einen</em> pojawia się z czasownikami takimi jak <em>nehmen</em>, <em>trinken</em>, <em>essen</em>, <em>möchten</em>, <em>haben</em>. I nie ufaj polskiemu rodzajowi: „kawa” jest żeńska, ale <em>der Kaffee</em> jest męski (<em>einen Kaffee</em>); „herbata” jest żeńska, ale <em>der Tee</em> męski; „woda” jest żeńska, ale <em>das Wasser</em> nijakie."
      },
      {
        tip: "Gdy wahasz się między <em>ein</em> a <em>einen</em>, sprawdź rodzaj rzeczownika: jeśli jest męski (<em>der Saft</em>, <em>der Kaffee</em>, <em>der Tee</em>) i jest dopełnieniem, jak wtedy, gdy zamawiasz albo mówisz, co bierzesz, użyj <em>einen</em>; jako podmiot zostaje <em>ein</em>. Dlatego słownictwo kursu zawsze podaje rodzajnik."
      }
    ],
    grammar: {
      title: "Mianownik i biernik rodzajnika",
      note: "Zmienia się <b>tylko rodzaj męski w liczbie pojedynczej</b>. Po <em>sein</em> używa się mianownika.",
      table: {
        head: ["rodzaj", "mianownik", "biernik", "przykład"],
        rows: [
          ["męski", "der / ein", "den / einen", "Ich nehme einen Saft."],
          ["żeński", "die / eine", "die / eine", "Ich möchte eine Cola."],
          ["nijaki", "das / ein", "das / ein", "Ich nehme ein Wasser."],
          ["mnoga", "die / (brak)", "die / (brak)", "Ich möchte Pommes."]
        ]
      },
      examples: [
        { tr: "Biorę sok.", note: "Saft jest rodzaju męskiego: einen" },
        { tr: "Chciałbym colę.", note: "rodzaj żeński: bez zmiany" },
        { tr: "Czy chciałby Pan/chciałaby Pani szklankę wody?", note: "forma grzecznościowa (Sie)" },
        { tr: "Tak, chętnie." },
        { tr: "Nie, dziękuję." },
        { tr: "To jest sok.", note: "po sein: mianownik" }
      ]
    },
    culture: {
      title: "Niemiecki punkt widzenia: Feierabend, Kneipe i Biergarten",
      text: "<p><i>Feierabend</i> to koniec dnia pracy i, szerzej, czas wolny, który po nim następuje. Komuś, kto kończy pracę, życzy się <i>Schönen Feierabend!</i>, mniej więcej „miłego wieczoru”. Wiele osób spotyka się z kolegami z pracy albo ze znajomymi w <i>Kneipe</i>, nieformalnym lokalu w dzielnicy, gdzie zwykle jest piwo i napoje bezalkoholowe, a często także coś do jedzenia.</p><p><i>Biergarten</i> to lokal ze stolikami na świeżym powietrzu, typowy dla ciepłej pory roku i tradycji bawarskiej. W niektórych tradycyjnych Biergärten można przynieść własne jedzenie, ale nie wszędzie: warto zerknąć na tablice przy wejściu. Często zamawia się przy ladzie i niesie tacę do stołu, w innych miejscach przychodzi kelner.</p><p>Zamówienie wody albo soku jest zupełnie normalne: wśród popularnych napojów bezalkoholowych jest <i>Apfelschorle</i>, czyli sok jabłkowy z wodą gazowaną. Przed wypiciem mówi się <i>Prost!</i> („na zdrowie”) i zwykle patrzy się sobie w oczy.</p>"
    },
    vocab: [
      "Chciałbym ... (grzeczna formuła)",
      "Czy chciałby Pan/chciałaby Pani ...? (forma grzecznościowa)",
      "Czy chciałbyś ...? (na „ty”)",
      "Tak, chętnie.",
      "Tak, proszę.",
      "Nie, dziękuję.",
      "Na zdrowie!",
      "sok pomarańczowy",
      "sok jabłkowy",
      "woda mineralna",
      "szklanka",
      "butelka"
    ],
    exercises: [
      {
        tr: "Wszystkie osoby czasownika trinken.",
        why: "<i>Trinken</i> jest regularny: temat <i>trink-</i> plus <i>-e, -st, -t, -en, -t, -en</i>."
      },
      {
        tr: "Czasownik bestellen („zamawiać”): ich, er, ihr.",
        why: "<i>Bestellen</i> jest regularny: temat <i>bestell-</i> plus końcówka: <i>ich bestelle, er bestellt, ihr bestellt</i>."
      },
      {
        q: "Uzupełnij: „Ich möchte ___ Saft.” (Chciałbym sok.)",
        hint: "der Saft jest rodzaju męskiego; biernik",
        why: "<b>Einen</b>: po <i>möchte</i> stoi biernik, a w rodzaju męskim <i>ein</i> zmienia się w <i>einen</i>."
      },
      {
        q: "Uzupełnij: „Ich nehme ___ Cola.” (Biorę colę.)",
        hint: "die Cola jest rodzaju żeńskiego",
        why: "<b>Eine</b>: rodzaj żeński nie zmienia się w bierniku."
      },
      {
        q: "Proponują ci: „Möchtest du ein Bier?” Nie chcesz. Co odpowiesz?",
        opts: ["Ja, gern.", "Nein, danke.", "Prost!"],
        why: "<b>Nein, danke</b> to wyraźna odmowa. <i>Ja, gern</i> to zgoda; <i>Prost!</i> mówi się przed wypiciem."
      },
      {
        q: "Które zdania są poprawne?",
        opts: [
          "Ich trinke einen Tee.",
          "Ich trinke ein Tee.",
          "Ich esse eine Suppe.",
          "Ich nehme ein Brot.",
          "Ich nehme eine Brot."
        ],
        why: "<i>Tee</i> jest męski (<i>einen</i>), <i>Suppe</i> żeńska (<i>eine</i>), <i>Brot</i> nijaki (<i>ein</i>)."
      },
      {
        tr: "Poproszę sok jabłkowy i wodę.",
        why: "<i>Apfelsaft</i> jest męski: <i>einen</i>. <i>Wasser</i> jest nijakie: <i>ein</i>."
      },
      {
        q: "Przetłumacz: „Sok pomarańczowy i wodę, poproszę.”",
        why: "<i>Einen Orangensaft</i> (męski) i <i>ein Wasser</i> (nijaki): to zamówienie w skrócie, za którym stoi „ich nehme/möchte ...”, więc biernik."
      },
      {
        tr: "Poproszę sok pomarańczowy i butelkę wody.",
        why: "W <i>Orangensaft</i> <b>g</b> czyta się jak polskie <i>ż</i> (/ʒ/), a <i>-saft</i> zaczyna się dźwięcznym <b>s</b>, jak polskie <i>z</i>."
      },
      {
        tr: "Poproszę sok jabłkowy i szklankę wody.",
        why: "<i>Glas</i> ma długie <b>a</b>, a <i>Gläser</i> to liczba mnoga z przegłosem; <b>ä</b> czyta się jak długie <i>e</i>."
      }
    ]
  },
  "lesson:a1-u03-l4": {
    theme: "Odmawiać z taktem",
    title: "Kein czy nicht, i doch",
    objectives: [
      "negować rzeczownik za pomocą kein",
      "negować czasownik albo przymiotnik za pomocą nicht",
      "odpowiadać doch na pytanie przeczące"
    ],
    theory: [
      {
        h: "Dwa przeczenia, wybierane zależnie od tego, co negujesz",
        p: "<strong>Kein</strong> neguje rzeczownik z rodzajnikiem nieokreślonym albo bez rodzajnika: <em>Ich trinke kein Bier</em>, <em>Ich habe keinen Hunger</em>, <em>Wir haben keine Cola</em>. Ma końcówki jak <em>ein</em>: <em>kein</em> (rodzaj męski w mianowniku i nijaki), <em>keinen</em> (rodzaj męski w bierniku), <em>keine</em> (żeński i liczba mnoga). <strong>Nicht</strong> neguje całą resztę: czasownik, przymiotnik, przysłówek albo rzeczownik z rodzajnikiem określonym: <em>Ich komme nicht</em>, <em>Der Kaffee ist nicht heiß</em>, <em>Ich trinke den Tee nicht</em>."
      },
      {
        contrast: "Po polsku wystarczy jedno <em>nie</em>, które przy czasowniku stoi przed nim: „nie piję piwa”, „nie przychodzę”, „kawa nie jest gorąca”. Po niemiecku trzeba wybierać: <em>Ich trinke kein Bier</em> (rzeczownik) i <em>Ich komme nicht</em> (czasownik). Przy negowaniu czasownika polskie <em>nie</em> stoi przed nim, a niemieckie <em>nicht</em> zwykle za nim. Nie ma też wielokrotnego przeczenia: „nie mam żadnego brata” to <em>Ich habe keinen Bruder</em>, jedno przeczenie."
      },
      {
        trap: "Prawdziwa pułapka to przypadek. Po polsku przeczenie zmienia dopełnienie na <b>dopełniacz</b>: „piję piwo”, ale „nie piję piwa”; „mam kawę”, ale „nie mam kawy”; „głód”, ale „nie mam głodu”. Po niemiecku przypadek <b>się nie zmienia</b>: zostaje biernik, a zmienia się tylko rodzajnik na <em>kein</em>: <em>Ich trinke keinen Kaffee</em>, <em>Ich habe keinen Hunger</em>. Nie szukaj więc końcówki dopełniacza na rzeczowniku. Częsty błąd to też „nicht kein”: po <em>kein</em> nie potrzeba żadnego innego przeczenia."
      },
      {
        h: "Gdzie stoi nicht",
        p: "Pozycja: jeśli <em>nicht</em> neguje całe zdanie, stoi zwykle bliżej <strong>końca</strong>: <em>Ich komme heute nicht</em>. Jeśli neguje jedno konkretne słowo, stoi <strong>przed</strong> nim: <em>Der Kaffee ist nicht heiß</em>, <em>Ich trinke nicht gern Bier</em>. To tendencja, nie prawo: zobaczysz ją w działaniu w przykładach tej lekcji."
      },
      {
        h: "Doch: zaprzeczyć pytaniu przeczącemu",
        p: "Jeśli ktoś zadaje pytanie przeczące (<em>Trinkst du kein Bier?</em>), a ty chcesz powiedzieć, że jednak tak, odpowiedź brzmi <strong>doch</strong>: <em>Doch, ich trinke gern Bier</em>. Jeśli chcesz potwierdzić przeczenie, odpowiadasz <em>Nein</em>: <em>Nein, ich trinke kein Bier</em>. Po polsku najbliższe są „ależ tak” albo „owszem”, ale nie jest to jedno stałe słowo jak niemieckie <em>doch</em>."
      },
      {
        tip: "Żeby odmówić z taktem, wystarczy kilka formuł: <em>Nein, danke</em>, <em>Heute nicht, danke</em>, <em>Kein Bier, bitte</em>. Są jasne i uprzejme i nie wymagają tłumaczenia."
      }
    ],
    grammar: {
      title: "Kein i nicht",
      note: "<b>Kein</b> neguje rzeczowniki z rodzajnikiem nieokreślonym albo bez rodzajnika; <b>nicht</b> neguje resztę.",
      table: {
        head: ["rodzaj", "mianownik", "biernik", "przykład"],
        rows: [
          ["męski", "kein", "keinen", "Ich trinke keinen Tee."],
          ["żeński", "keine", "keine", "Ich nehme keine Cola."],
          ["nijaki", "kein", "kein", "Ich trinke kein Bier."],
          ["mnoga", "keine", "keine", "Wir haben keine Äpfel."]
        ]
      },
      examples: [
        { tr: "Nie piję piwa.", note: "kein: rzeczownik bez rodzajnika (po polsku dopełniacz, po niemiecku biernik)" },
        { tr: "Nie jestem głodny.", note: "Hunger jest rodzaju męskiego: keinen" },
        { tr: "Kawa nie jest gorąca.", note: "nicht: przymiotnik" },
        { tr: "Dziś nie przyjdę.", note: "nicht: czasownik" },
        { tr: "Nie pijesz piwa? Ależ tak, chętnie.", note: "doch zaprzecza pytaniu przeczącemu" },
        { tr: "Nie lubię pić piwa.", note: "nicht gern" }
      ]
    },
    vocab: [
      "lokal w dzielnicy, knajpa (Kneipe)",
      "ogródek piwny (Biergarten)",
      "koniec dnia pracy, czas wolny po pracy",
      "głód",
      "pragnienie",
      "alkohol",
      "bezalkoholowy",
      "dziś",
      "ależ tak, owszem (odpowiedź na pytanie przeczące)",
      "nie (czasownik, przymiotnik, przysłówek)",
      "żaden, nie ... (przed rzeczownikiem)",
      "smakować; być smacznym",
      "jeszcze",
      "Poproszę rachunek."
    ],
    exercises: [
      {
        q: "Jak powiesz „Nie piję piwa”?",
        opts: ["Ich trinke kein Bier.", "Ich trinke keinen Bier.", "Ich trinke keine Bier."],
        why: "<i>Bier</i> jest nijakie, więc <b>kein</b>. Żeby zanegować to, czego nie pijesz (rzeczownik bez rodzajnika), używa się <i>kein</i>; rzeczownik nie dostaje przy tym końcówki dopełniacza."
      },
      {
        q: "Które przeczenie jest potrzebne? „Ich komme heute ___.”",
        opts: ["kein", "nicht", "keine"],
        why: "Tu negujesz czasownik, nie rzeczownik: <b>nicht</b>."
      },
      {
        q: "Uzupełnij: „Ich habe ___ Hunger.” (Nie jestem głodny.)",
        hint: "der Hunger jest rodzaju męskiego; biernik",
        why: "<i>Haben</i> wymaga biernika, a <i>Hunger</i> jest rodzaju męskiego: <b>keinen</b>."
      },
      {
        q: "Uzupełnij: „Der Kaffee ist ___ heiß.” (Kawa nie jest gorąca.)",
        hint: "negacja przymiotnika",
        why: "Przymiotnik neguje się za pomocą <b>nicht</b>, postawionego przed nim."
      },
      {
        q: "Ich trinke ___ ... (dopełnienie, ale z rodzajnikiem określonym). Wybierz właściwą formę dla każdego rzeczownika.",
        why: "Z rodzajnikiem określonym w bierniku zmienia się tylko rodzaj męski: <i>den Tee</i>, <i>den Saft</i>; <i>die Cola</i>, <i>die Limonade</i> oraz <i>das Bier</i>, <i>das Wasser</i> zostają bez zmian. Uwaga na rodzaj: „herbata” jest po polsku żeńska, ale <i>der Tee</i> jest męski. Rzeczownik z rodzajnikiem określonym neguje się za pomocą <i>nicht</i>: <i>Ich trinke den Tee nicht</i>.",
        items: ["herbata", "cola", "piwo", "sok", "lemoniada (słodki napój gazowany)", "woda"]
      },
      {
        q: "Przetłumacz: „Dziś nie piję piwa.”",
        why: "<i>Heute trinke ich kein Bier</i>: przy <i>heute</i> na pierwszym miejscu podmiot przesuwa się za czasownik."
      },
      {
        q: "Uzupełnij odpowiedź.",
        tr: "Nie pijesz piwa? Ależ tak, chętnie piję.",
        why: "<b>Doch</b> zaprzecza pytaniu przeczącemu. <i>Ja</i> bywałoby niejednoznaczne."
      },
      {
        q: "Przyjaciel widzi cię bez twojego zwykłego kufla.",
        setting: "Po pracy, w Kneipe.",
        lines: [
          { tr: "Nie pijesz piwa?" },
          { tr: "Odpowiedz, że pijesz, ale nie dziś.", answerTr: "Ależ tak, piję, ale dziś nie." },
          { tr: "To może sok?" },
          { tr: "Zgódź się i zamów sok jabłkowy.", answerTr: "Chętnie. Poproszę sok jabłkowy." }
        ]
      },
      {
        tr: "Jestem głodny, ale dziś nie jem ryby.",
        why: "<i>Fisch</i>: dźwięk <b>sch</b> czyta się jak polskie „sz”. W <i>Hunger</i> początkowe <b>h</b> to lekkie westchnienie, a nie polskie <i>ch</i>."
      },
      {
        tr: "Nie, dziękuję. Dziś nie piję alkoholu.",
        why: "<i>Heute</i>: grupa <b>eu</b> czyta się „oj”. Początkowe <b>h</b> to lekkie westchnienie, nie polskie <i>ch</i>."
      }
    ]
  },
  "lesson:a1-u03-test": {
    theme: "Sprawdzian",
    title: "Sprawdzian z jednostki 3",
    objectives: ["sprawdzić zmianę samogłoski, biernik, kein i nicht"],
    theory: [
      {
        p: "Dziesięć pytań z całej jednostki. Zalicza się je przy 70%. Nie zaglądaj do lekcji w trakcie odpowiadania: jeśli czegoś nie pamiętasz, lepiej wrócić i powtórzyć."
      }
    ],
    exercises: [
      {
        q: "Uzupełnij: „Du ___ gern Fisch.” (Chętnie jesz rybę.)",
        hint: "essen, 2. osoba liczby pojedynczej",
        why: "<b>Du isst</b>: samogłoska się zmienia, a końcówka się skraca."
      },
      {
        tr: "Czasownik sprechen: du, er, ihr.",
        why: "<i>du sprichst, er spricht, ihr sprecht</i>: samogłoska zmienia się tylko przy <i>du</i> i <i>er</i>."
      },
      {
        tr: "Czasownik nehmen: ich, du, wir.",
        why: "<i>ich nehme, du nimmst, wir nehmen</i>: zmienia się tylko forma <i>du</i>."
      },
      {
        q: "Uzupełnij: „Ich möchte ___ Apfelsaft.” (Chciałbym sok jabłkowy.)",
        hint: "der Apfelsaft jest rodzaju męskiego",
        why: "<b>Einen</b>: biernik rodzaju męskiego."
      },
      {
        q: "Uzupełnij: „Der Saft ist ___ kalt.” (Sok nie jest zimny.)",
        hint: "negacja przymiotnika",
        why: "Przymiotnik neguje się za pomocą <b>nicht</b>."
      },
      {
        q: "Wybierz właściwy rodzajnik nieokreślony. „Ich nehme ___ ...”",
        items: ["kawa", "cola", "chleb", "sok"]
      },
      {
        q: "Jak powiesz „Nie jem mięsa”?",
        opts: ["Ich esse kein Fleisch.", "Ich esse keinen Fleisch.", "Ich esse keine Fleisch."],
        why: "<i>Fleisch</i> jest nijakie, więc <b>kein</b>."
      },
      {
        q: "Przetłumacz: „Dziś nie piję piwa, wezmę sok.”",
        why: "<i>Kein Bier</i> (rzeczownik), <i>einen Saft</i> (biernik rodzaju męskiego)."
      },
      {
        tr: "Ty chętnie jesz rybę, ale ja nie jem ryby.",
        why: "<i>Du isst</i> ze zmianą samogłoski; <i>keinen Fisch</i>, bo <i>Fisch</i> jest rodzaju męskiego."
      },
      {
        tr: "Poproszę sok, ale nie piwo.",
        why: "<i>Einen Saft</i> i <i>kein Bier</i>: rodzaj męski się zmienia, nijaki nie."
      }
    ]
  }
});
