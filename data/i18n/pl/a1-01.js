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
  "unit:a1-u02": { title: "Kim jesteś", grammarNote: "avere · liczebniki · zawody i narodowości" },
  "lesson:a1-u02-l1": {
    theme: "Poznawanie ludzi",
    title: "Przedstawianie się",
    objectives: [
      "podać imię, pochodzenie i miejsce zamieszkania",
      "użyć czasownika chiamarsi",
      "zapytać innych o te same rzeczy"
    ],
    theory: [
      {
        h: "„Nazywam się” to czasownik zwrotny",
        p: "<strong>Chiamarsi</strong> znaczy dosłownie „nazywać siebie”. Stąd forma <em>mi chiamo</em> — „nazywam się”. Zaimek zwrotny (<em>mi, ti, si…</em>) stoi <b>przed</b> czasownikiem, inaczej niż polskie „się”, które może wędrować po zdaniu."
      },
      {
        h: "Skąd jesteś: essere di czy venire da",
        p: "O mieście mówi się <em>sono di Varsavia</em> („jestem z Warszawy”), o kraju — <em>vengo dalla Polonia</em> albo <em>sono polacco/a</em>. Nazwy państw biorą rodzajnik (<em>la Polonia, l'Italia</em>), nazwy miast nie."
      },
      {
        trap: "Narodowość po włosku pisze się <b>małą literą</b>: <em>sono polacca</em>, <em>un ragazzo italiano</em>. Wielka litera to typowy błąd Polaków i Anglików."
      },
      {
        h: "Abitare — mieszkać",
        p: "<em>Abitare a Roma</em> (w mieście), <em>abitare in Italia</em> (w kraju). Ten sam podział a/in wraca później przy podróżowaniu, więc warto go zapamiętać od razu jako parę: <b>a + miasto, in + kraj</b>."
      }
    ],
    grammar: {
      title: "Chiamarsi (nazywać się) i pytania o osobę",
      table: {
        head: ["osoba", "chiamarsi", "przykład"],
        rows: [
          ["io", "mi chiamo", "Mi chiamo Anna."],
          ["tu", "ti chiami", "Come ti chiami?"],
          ["lui / lei / Lei", "si chiama", "Come si chiama, scusi?"],
          ["noi", "ci chiamiamo", "Ci chiamiamo Rossi."],
          ["voi", "vi chiamate", "Come vi chiamate?"],
          ["loro", "si chiamano", "Si chiamano Marco e Luca."]
        ]
      },
      examples: [
        { tr: "Jak się nazywasz? — Nazywam się Ewa." },
        { tr: "Skąd jesteś? — Jestem z Krakowa." },
        { tr: "Jestem Polką, ale mieszkam w Mediolanie.", note: "narodowość małą literą" },
        { tr: "Ile masz lat? — Mam dwadzieścia osiem.", note: "wiek zawsze przez avere" },
        { tr: "Miło mi, Marco. — Cała przyjemność po mojej stronie." }
      ]
    },
    vocab: [
      "być",
      "nazywam się…",
      "jak się nazywasz?",
      "skąd jesteś?",
      "jestem z… (miasto)",
      "mieszkam w… (miasto)",
      "Polak / Polka",
      "Włoch / Włoszka",
      "imię",
      "nazwisko",
      "miło Cię poznać",
      "ja też",
      "naprawdę?"
    ],
    exercises: [
      {
        q: "Jak zapytasz nieformalnie o imię?",
        opts: ["Come si chiama?", "Come ti chiami?", "Come vi chiamate?"],
        why: "Forma tu: <i>ti chiami</i>. Wersja przez Lei to <i>come si chiama?</i>"
      },
      {
        q: "Które zdanie jest zapisane poprawnie?",
        opts: ["Sono Polacca.", "Sono polacca.", "Sono la polacca."],
        why: "Narodowości piszemy małą literą i bez rodzajnika po essere."
      },
      { q: "Uzupełnij: „___ chiamo Marta.”", why: "Zaimek zwrotny pierwszej osoby: mi chiamo." },
      {
        q: "Uzupełnij: „Abito ___ Roma.” (Mieszkam w Rzymie.)",
        why: "Miasta biorą <b>a</b>, kraje <b>in</b>: abito a Roma / abito in Italia."
      },
      {
        q: "Uzupełnij przedstawienie się.",
        tr: "Cześć! Nazywam się Kasia, jestem z Gdańska i mieszkam w Bolonii.",
        why: "Trzy czasowniki, które pojawiają się w każdym pierwszym zdaniu o sobie."
      },
      { tr: "Miło cię poznać, nazywam się Luca." },
      {
        q: "Poznajesz kogoś na kursie językowym.",
        setting: "Pierwszy dzień szkoły językowej we Florencji.",
        lines: [
          { tr: "Cześć! Jestem Giulia. A ty, jak się nazywasz?" },
          { tr: "Przedstaw się imieniem.", answerTr: "Nazywam się Ewa." },
          { tr: "Miło mi, Ewa! Skąd jesteś?" },
          { tr: "Powiedz, że jesteś z Polski.", answerTr: "Jestem z Polski." }
        ]
      },
      { tr: "Nazywam się Elena i mieszkam w Neapolu." },
      { tr: "Miło Cię poznać!" }
    ]
  },
  "lesson:a1-u02-l2": {
    theme: "Gramatyka podstawowa",
    title: "Mieć oraz liczby 0-100",
    objectives: [
      "odmienić avere",
      "użyć wyrażeń typu ho fame, ho freddo, ho ventotto anni",
      "policzyć do stu i podać cenę"
    ],
    theory: [
      {
        h: "Avere robi więcej niż polskie „mieć”",
        p: "Włoski używa <strong>avere</strong> tam, gdzie polski użyłby „być”. <em>Ho fame</em> to dosłownie „mam głód”, a nie „jestem głodny”. Ta sama logika obejmuje pragnienie, zimno, gorąco, strach, sen i wiek."
      },
      {
        h: "Wiek: zawsze avere",
        p: "<em>Ho trent'anni</em> — „mam trzydzieści lat”. Zdanie <em>sono trenta</em> nie znaczy nic. Zwróć uwagę na apostrof: <em>trent'anni</em>, <em>vent'anni</em> — końcowa samogłoska dziesiątki znika przed <em>anni</em>."
      },
      {
        h: "H, którego nie słychać",
        p: "Formy <em>ho, hai, ha, hanno</em> zaczynają się od niemego <b>h</b>. Nie wymawia się go w ogóle — służy wyłącznie do odróżnienia od innych słów: <em>ho</em> (mam) kontra <em>o</em> (albo), <em>ha</em> (ma) kontra <em>a</em> (do)."
      },
      {
        h: "Liczby: dziesiątki plus jedności",
        p: "Od 20 wzwyż liczby sklejają się w jedno słowo: <em>ventidue</em>, <em>trentasei</em>. Przed <em>uno</em> i <em>otto</em> dziesiątka gubi ostatnią samogłoskę: <b>ventuno</b>, <b>ventotto</b>, <b>trentuno</b>."
      }
    ],
    grammar: {
      title: "Avere (mieć) i liczebniki",
      table: {
        head: ["osoba", "avere", "wyrażenie"],
        rows: [
          ["io", "ho", "Ho fame. (Jestem głodny.)"],
          ["tu", "hai", "Hai freddo? (Zimno ci?)"],
          ["lui / lei / Lei", "ha", "Ha ragione. (Ma rację.)"],
          ["noi", "abbiamo", "Abbiamo sete. (Chce nam się pić.)"],
          ["voi", "avete", "Avete tempo? (Macie czas?)"],
          ["loro", "hanno", "Hanno paura. (Boją się.)"]
        ]
      },
      examples: [
        { tr: "1, 2, 3, 4, 5" },
        { tr: "6, 7, 8, 9, 10" },
        { tr: "11, 12, 13… 20" },
        { tr: "21, 22, 28", note: "przed uno i otto dziesiątka traci samogłoskę" },
        { tr: "30, 40, 50, 60" },
        { tr: "70, 80, 90, 100" },
        { tr: "Mam dwadzieścia osiem lat." }
      ]
    },
    vocab: [
      "mieć",
      "jestem głodny/a",
      "chce mi się pić",
      "jest mi zimno / gorąco",
      "chce mi się spać",
      "boję się",
      "mam rację",
      "potrzebuję…",
      "ile masz lat?",
      "ile kosztuje?",
      "euro",
      "numer, liczba",
      "numer telefonu"
    ],
    exercises: [
      { why: "Cztery formy zaczynają się od niemego h: ho, hai, ha, hanno." },
      {
        q: "Jak powiesz „jestem głodny”?",
        opts: ["Sono fame", "Ho fame", "Sto fame"],
        why: "Stany fizyczne wyraża się przez avere: ho fame, ho sete, ho freddo."
      },
      { q: "Ile to „settantasei”?", opts: ["66", "76", "86"], why: "settanta (70) + sei (6) = 76." },
      { q: "Zapisz cyfrą: „novantatré”", why: "novanta (90) + tre (3)." },
      {
        q: "Uzupełnij: „Ho vent___ anni.” (Mam dwadzieścia lat.)",
        hint: "coś znika przed „anni”",
        why: "Vent'anni — dziesiątka traci końcową samogłoskę przed anni."
      },
      { q: "„Ile masz lat?”", why: "Dosłownie: „ile lat masz”." },
      {
        q: "Połącz wyrażenie z avere i jego znaczeniem.",
        pairs: ["chce mi się pić", "chce mi się spać", "boję się", "mam rację"]
      },
      {
        q: "Uzupełnij dialog w kasie.",
        tr: "— Ile kosztuje? — Trzydzieści dwa euro. — Mam tylko dwadzieścia, przykro mi."
      },
      { tr: "Mam trzydzieści pięć lat i mieszkam w Turynie." },
      { tr: "Ile kosztuje cappuccino?" }
    ]
  },
  "lesson:a1-u02-l3": {
    theme: "Praca i ludzie",
    title: "Zawody i praca",
    objectives: [
      "powiedzieć, czym się zajmujesz",
      "użyć konstrukcji fare il / essere un",
      "utworzyć żeńskie formy nazw zawodów"
    ],
    theory: [
      {
        h: "Dwie konstrukcje, dwa odcienie",
        p: "„Jestem architektem” po włosku ma dwie wersje. <strong>Faccio l'architetto</strong> (dosłownie „robię architekta”) mówi o wykonywanym zawodzie i jest najczęstsze w rozmowie. <strong>Sono architetto</strong> podkreśla tożsamość albo kwalifikacje. Po <em>fare</em> stoi rodzajnik określony, po <em>essere</em> zwykle żadnego."
      },
      {
        h: "Formy żeńskie",
        list: [
          "-o → -a: <em>l'impiegato → l'impiegata</em>",
          "-e → -essa: <em>il professore → la professoressa</em>, <em>lo studente → la studentessa</em>",
          "-tore → -trice: <em>l'attore → l'attrice</em>, <em>il direttore → la direttrice</em>",
          "bez zmiany: <em>il/la giornalista</em>, <em>il/la dentista</em>, <em>il/la cantante</em>"
        ]
      },
      {
        h: "Nazwy zawodów w ruchu",
        p: "Formy takie jak <em>l'avvocata</em>, <em>la sindaca</em>, <em>la ministra</em> są dziś normą w prasie i dokumentach, choć jeszcze dwadzieścia lat temu budziły spór. W mowie potocznej usłyszysz też starsze <em>l'avvocato</em> o kobiecie. Obie wersje spotkasz w praktyce."
      },
      {
        contrast: "Polskie „pracuję jako…” ma odpowiednik <em>lavoro come…</em>, ale Włosi znacznie częściej mówią po prostu <em>faccio il/la…</em>"
      }
    ],
    grammar: {
      title: "Fare (robić) — czas teraźniejszy",
      note: "Nieregularny, a jednocześnie jeden z trzech najczęstszych czasowników włoskich.",
      table: {
        head: ["osoba", "fare", "przykład"],
        rows: [
          ["io", "faccio", "Faccio l'insegnante."],
          ["tu", "fai", "Che lavoro fai?"],
          ["lui / lei / Lei", "fa", "Fa il medico."],
          ["noi", "facciamo", "Facciamo colazione."],
          ["voi", "fate", "Che cosa fate?"],
          ["loro", "fanno", "Fanno gli avvocati."]
        ]
      },
      examples: [
        { tr: "Czym się zajmujesz?" },
        { tr: "Jestem dziennikarką." },
        { tr: "Jestem inżynierem.", note: "po essere zwykle bez rodzajnika" },
        { tr: "Pracuję w agencji." },
        { tr: "W tej chwili nie pracuję." },
        { tr: "Jeszcze studiuję, jestem na ostatnim roku." }
      ]
    },
    vocab: [
      "praca",
      "nauczyciel/ka",
      "lekarz / lekarka",
      "inżynier",
      "adwokat / adwokatka",
      "dziennikarz/ka",
      "urzędnik / urzędniczka",
      "kucharz / kucharka",
      "sprzedawca / sprzedawczyni",
      "robotnik",
      "osoba na własnej działalności",
      "szukam pracy"
    ],
    exercises: [
      { why: "Uwaga na podwójne c w faccio i facciamo." },
      {
        q: "Które zdanie znaczy „jestem nauczycielką” i brzmi najbardziej naturalnie?",
        opts: ["Faccio l'insegnante.", "Sono la insegnante.", "Ho insegnante."],
        why: "Fare + rodzajnik określony to najczęstsza konstrukcja o zawodzie w mowie."
      },
      {
        q: "Jak brzmi żeńska forma od „il professore”?",
        opts: ["la professora", "la professoressa", "la professrice"],
        why: "Wzorzec -e → -essa, jak studente → studentessa."
      },
      {
        q: "Uzupełnij: „Mia sorella fa ___ dottoressa.”",
        why: "Po fare stoi rodzajnik określony, dopasowany do rodzaju: la dottoressa."
      },
      { q: "Dobierz rodzajnik.", items: ["kucharka", "inżynier", "studentka", "robotnik"] },
      { q: "„Czym się zajmujesz?” (nieformalnie)", why: "Che lavoro fai? — dosłownie „jaką pracę robisz”." },
      {
        q: "Połącz formę męską z żeńską.",
        pairs: ["l'attrice", "la commessa", "la studentessa", "la giornalista"]
      },
      { tr: "Pracuję w banku w Mediolanie." },
      { tr: "Jestem architektem, pracuję z bratem." },
      { tr: "Czym się zajmujesz? Ja jestem dziennikarką." }
    ]
  },
  "lesson:a1-u02-l4": {
    theme: "Gramatyka podstawowa",
    title: "Pierwsza koniugacja",
    objectives: [
      "odmienić dowolny regularny czasownik na -are",
      "poradzić sobie ze zmianami pisowni w cercare, pagare, mangiare",
      "zbudować zdanie przeczące i pytające"
    ],
    theory: [
      {
        h: "Największa i najbardziej przewidywalna grupa",
        p: "Około 70% włoskich czasowników kończy się na <strong>-are</strong>, i prawie wszystkie odmieniają się identycznie. Wystarczy odciąć końcówkę bezokolicznika i dodać sześć zakończeń: <em>-o, -i, -a, -iamo, -ate, -ano</em>. Nauczysz się jednego wzorca i obsłużysz setki słów."
      },
      {
        h: "Akcent tam, gdzie go nie widać",
        p: "W formie <em>loro</em> akcent pada na trzecią sylabę od końca: <b>par</b>-la-no, <b>la</b>-vo-ra-no. Nie „parla-NO”. To rozróżnienie słychać i Włosi je wychwytują."
      },
      {
        h: "Pisownia ratująca wymowę",
        list: [
          "<b>-care / -gare</b> dokładają <b>h</b> przed -i i -e: <em>cercare → cerchi, cerchiamo</em>; <em>pagare → paghi, paghiamo</em>",
          "<b>-ciare / -giare</b> gubią <b>i</b> przed -i: <em>mangiare → mangi</em> (nie „mangii”), <em>cominciare → cominci</em>",
          "<b>-iare</b> bez akcentu też gubi jedno i: <em>studiare → studi, studiamo</em>"
        ]
      },
      {
        h: "Przeczenie i pytanie bez zmian",
        p: "Przeczenie to jedno słowo <strong>non</strong> przed czasownikiem: <em>non parlo italiano</em>. Pytanie nie wymaga żadnej przebudowy zdania — wystarczy intonacja: <em>Parli italiano?</em> Włoski nie ma odpowiednika angielskiego „do”."
      }
    ],
    grammar: {
      title: "Parlare (mówić) — wzorzec -ARE",
      table: {
        head: ["osoba", "końcówka", "parlare", "lavorare"],
        rows: [
          ["io", "-o", "parlo", "lavoro"],
          ["tu", "-i", "parli", "lavori"],
          ["lui / lei / Lei", "-a", "parla", "lavora"],
          ["noi", "-iamo", "parliamo", "lavoriamo"],
          ["voi", "-ate", "parlate", "lavorate"],
          ["loro", "-ano", "parlano", "lavorano"]
        ]
      },
      examples: [
        { tr: "Mówię trochę po włosku." },
        { tr: "Nie mówię dobrze, ale rozumiem." },
        { tr: "Studiujesz na uniwersytecie?", note: "pytanie tylko intonacją" },
        { tr: "Jemy o ósmej." },
        { tr: "Szukasz pracy w Mediolanie?", note: "cercare → cerchi, z h" },
        { tr: "Oni mieszkają blisko centrum.", note: "akcent: A-bi-ta-no" }
      ]
    },
    vocab: [
      "mówić, rozmawiać",
      "pracować",
      "uczyć się, studiować",
      "mieszkać",
      "jeść",
      "kupować",
      "szukać",
      "płacić",
      "słuchać",
      "patrzeć, oglądać",
      "czekać",
      "zaczynać"
    ],
    exercises: [
      { why: "Wzorzec, który obsługuje większość włoskich czasowników." },
      {
        tr: "tu, noi — uwaga na pisownię",
        why: "Cerchi i cerchiamo dostają <b>h</b>, żeby zachować twarde k."
      },
      {
        q: "Która forma jest poprawna: „ty jesz”?",
        opts: ["mangii", "mangi", "mangie"],
        why: "Czasowniki na -giare gubią i przed końcówką -i: mangi."
      },
      {
        q: "Uzupełnij: „Loro ___ a Bologna.” (Oni mieszkają w Bolonii.)",
        why: "abitare, forma loro: -ano."
      },
      {
        q: "Zaprzecz: „Parlo italiano.” → „___ parlo italiano.”",
        why: "Jedno słowo non przed czasownikiem — to całe przeczenie."
      },
      { q: "„Szukamy mieszkania w Rzymie.”", why: "cercare → cerchiamo (z h), a + miasto." },
      {
        q: "Które formy należą do „studiare”?",
        opts: ["studio", "studii", "studi", "studiamo", "studiate"],
        why: "„Studii” nie istnieje — podwójne i się redukuje."
      },
      { tr: "Nie pracuję w soboty.", why: "„Il sabato” z rodzajnikiem znaczy „w soboty”, regularnie." },
      { tr: "Uczę się włoskiego od trzech miesięcy." },
      { tr: "Nie mówię dobrze, ale rozumiem prawie wszystko." }
    ]
  },
  "lesson:a1-u02-test": {
    theme: "Sprawdzian",
    title: "Sprawdzian jednostki 2",
    objectives: ["sprawdzić avere, fare, chiamarsi, liczby i pierwszą koniugację"],
    theory: [{ p: "Dziesięć zadań. Zaliczenie od 70%." }],
    exercises: [
      { q: "„___ chiamo Piotr.”" },
      { q: "„Quanti anni ___?” (Ile masz lat?)" },
      { q: "Ile to „ottantaquattro”?", opts: ["48", "84", "94"] },
      { q: "„Jestem głodny” po włosku:", opts: ["Sono fame", "Ho fame", "Sto fame"] },
      {  },
      {
        q: "Która forma jest poprawna: „ty płacisz”?",
        opts: ["pagi", "paghi", "page"],
        why: "-gare dokłada h przed -i."
      },
      { q: "Uzupełnij.", tr: "Jestem Polką, mieszkam w Weronie i jestem nauczycielką." },
      { q: "„Nie mówię po włosku.”" },
      { tr: "Mam dwadzieścia siedem lat i szukam pracy." },
      { tr: "Nazywam się Anna i jestem dziennikarką." }
    ]
  },
  "unit:a1-u03": {
    title: "Aperitivo i jedzenie",
    grammarNote: "piacere · rodzajnik cząstkowy · -ere i -ire"
  },
  "lesson:a1-u03-l1": {
    theme: "Jedzenie",
    title: "Czasownik piacere",
    objectives: [
      "powiedzieć, co lubisz i czego nie lubisz",
      "wybrać między piace a piacciono",
      "zapytać o czyjeś upodobania"
    ],
    theory: [
      {
        h: "Zdanie stoi na głowie",
        p: "<strong>Piacere</strong> nie znaczy „lubić”, tylko „podobać się”. <em>Mi piace la pizza</em> to dosłownie „pizza podoba się mnie”. Podmiotem gramatycznym jest <b>rzecz</b>, a osoba, która lubi, występuje jako dopełnienie dalsze (<em>mi, ti, gli, le, ci, vi</em>)."
      },
      {
        h: "Dlatego czasownik ma dwie formy",
        p: "Skoro podmiotem jest rzecz, to ona decyduje o liczbie: <em>mi piace <b>il</b> caffè</em> (jedna rzecz) kontra <em>mi piacciono <b>gli</b> spaghetti</em> (wiele rzeczy). Przed bezokolicznikiem zawsze liczba pojedyncza: <em>mi piace viaggiare</em>."
      },
      {
        contrast: "Polski ma dokładnie ten sam mechanizm w czasowniku „podobać się”: „podoba mi się film”, „podobają mi się filmy”. Jeśli oprzesz włoskie zdanie na polskim „podoba mi się” zamiast na „lubię”, przestaniesz się mylić."
      },
      {
        h: "Kto lubi: mi, ti, gli, le…",
        list: [
          "<b>mi</b> piace — mnie",
          "<b>ti</b> piace — tobie",
          "<b>gli</b> piace — jemu; <b>le</b> piace — jej",
          "<b>ci</b> piace — nam · <b>vi</b> piace — wam · <b>gli</b> piace — im"
        ]
      },
      {
        trap: "Przeczenie stawia się przed zaimkiem, nie przed czasownikiem: <b>non</b> mi piace. Nie „mi non piace”."
      }
    ],
    grammar: {
      title: "Piacere — schemat zdania",
      note: "[zaimek] + piace/piacciono + [rzecz z rodzajnikiem]",
      table: {
        head: ["co lubimy", "forma", "przykład"],
        rows: [
          ["jedna rzecz", "piace", "Mi piace il vino rosso."],
          ["wiele rzeczy", "piacciono", "Mi piacciono i dolci."],
          ["czynność", "piace", "Mi piace cucinare."],
          ["przeczenie", "non … piace", "Non mi piace il pesce crudo."],
          ["pytanie", "ti piace?", "Ti piace l'aperitivo?"]
        ]
      },
      examples: [
        { tr: "Bardzo lubię kawę." },
        { tr: "Lubisz spritze?" },
        { tr: "Nie lubimy ciepłego piwa." },
        { tr: "Ona lubi tańczyć." },
        { tr: "Marco lubi ryby.", note: "z imieniem dodaje się „a”" },
        { tr: "Chętnie bym spróbował.", note: "forma warunkowa — zapamiętaj jako zwrot" }
      ]
    },
    vocab: [
      "aperitif (drink + przekąski)",
      "spritz",
      "wino czerwone / białe",
      "piwo",
      "oliwki",
      "chipsy / frytki",
      "słone przekąski",
      "szynka",
      "ser",
      "słodycze, desery",
      "ryba",
      "mięso",
      "gotować",
      "spróbować, skosztować"
    ],
    culture: {
      title: "Okiem Włocha: aperitivo to nie kolacja",
      text: "<p><b>Aperitivo</b> zaczyna się około 18:30 i trwa do 20:30. Płacisz za drinka (7-12 euro w zależności od miasta), a jedzenie przy barze jest w cenie. W Mediolanie rozrósł się do bufetu zwanego <i>apericena</i> — pół drogi do kolacji.</p><p>Zasada, o której nikt nie mówi: <b>bierze się rozsądnie</b>. Talerz ułożony w kopiec zdradza obcokrajowca szybciej niż akcent.</p><p>Klasyki: <i>spritz</i> (Aperol lub Campari), <i>negroni</i>, kieliszek wina. Piwo też uchodzi, choć puryści kręcą nosem.</p>"
    },
    exercises: [
      {
        q: "„___ piacciono le olive.” Dlaczego piacciono, a nie piace?",
        opts: ["Bo mówi o wielu osobach", "Bo „le olive” jest w liczbie mnogiej", "Bo to czas przeszły"],
        why: "Czasownik zgadza się z rzeczą, która się podoba — a ta jest w liczbie mnogiej."
      },
      { q: "Uzupełnij: „Mi ___ il vino rosso.”", why: "Jedna rzecz w liczbie pojedynczej → piace." },
      { q: "Uzupełnij: „Non mi ___ i film horror.”", why: "„I film” to liczba mnoga → piacciono." },
      {
        q: "Które zdanie jest poprawne?",
        opts: ["Mi non piace il pesce.", "Non mi piace il pesce.", "Mi piace non il pesce."],
        why: "Non stoi przed całą grupą zaimek + czasownik."
      },
      {
        q: "Jak powiesz „Marco lubi ryby”?",
        opts: ["Marco piace il pesce", "A Marco piace il pesce", "Marco piacciono pesce"],
        why: "Przed imieniem osoby, która lubi, stawia się przyimek <b>a</b>."
      },
      { q: "„Lubię gotować.”", why: "Przed bezokolicznikiem zawsze piace w liczbie pojedynczej." },
      { q: "Połącz zaimek z osobą.", pairs: ["mnie się podoba", "tobie", "jej", "nam"] },
      {
        q: "Uzupełnij rozmowę przy aperitivo.",
        tr: "— Lubisz spritz? — Tak, bardzo! Ale nie lubię oliwek."
      },
      { tr: "Bardzo lubię włoskie sery." },
      { tr: "Lubię aperitivo, ale nie lubię oliwek." }
    ]
  },
  "lesson:a1-u03-l2": {
    theme: "Gramatyka podstawowa",
    title: "Druga koniugacja i c'è / ci sono",
    objectives: [
      "odmienić regularne czasowniki na -ere",
      "użyć c'è i ci sono",
      "opisać, co się gdzieś znajduje"
    ],
    theory: [
      {
        h: "Prawie jak -are, ale nie do końca",
        p: "Grupa <strong>-ere</strong> różni się od pierwszej tylko trzema końcówkami: <em>-e</em> zamiast <em>-a</em>, <em>-ete</em> zamiast <em>-ate</em>, <em>-ono</em> zamiast <em>-ano</em>. Forma <em>noi</em> (<em>-iamo</em>) jest wspólna dla wszystkich trzech koniugacji — to najłatwiejsza końcówka we włoskim."
      },
      {
        h: "Tu ukrywa się większość nieregularnych",
        p: "Wiele bardzo częstych czasowników na -ere ma nietypowe formy — <em>bere → bevo</em>, <em>rimanere → rimango</em>, <em>scegliere → scelgo</em>. Ich nieregularność ujawnia się przede wszystkim w czasie przeszłym i w imiesłowie, do czego dojdziemy na poziomie A2."
      },
      {
        h: "C'è i ci sono",
        p: "<strong>C'è</strong> („jest, znajduje się”) i <strong>ci sono</strong> („są”) opisują istnienie czegoś w danym miejscu. Wybór zależy od liczby rzeczy, nie od osoby: <em>c'è un problema</em>, <em>ci sono due problemi</em>."
      },
      {
        trap: "Nie myl <b>c'è</b> (jest gdzieś) z <b>è</b> (jest jakieś). <em>Il ristorante è chiuso</em> — restauracja jest zamknięta. <em>C'è un ristorante qui vicino</em> — jest tu w pobliżu restauracja."
      }
    ],
    grammar: {
      title: "Leggere (czytać) — wzorzec -ERE",
      table: {
        head: ["osoba", "końcówka", "leggere", "prendere"],
        rows: [
          ["io", "-o", "leggo", "prendo"],
          ["tu", "-i", "leggi", "prendi"],
          ["lui / lei / Lei", "-e", "legge", "prende"],
          ["noi", "-iamo", "leggiamo", "prendiamo"],
          ["voi", "-ete", "leggete", "prendete"],
          ["loro", "-ono", "leggono", "prendono"]
        ]
      },
      examples: [
        { tr: "Poproszę kawę.", note: "„prendere” to najczęstszy czasownik przy zamawianiu" },
        { tr: "Czytasz menu?" },
        { tr: "Nie widzę kelnera." },
        { tr: "Jest wolny stolik?" },
        { tr: "Są dwa miejsca przy barze." },
        { tr: "Wpisujemy nazwisko do rezerwacji." }
      ]
    },
    vocab: [
      "brać, zamawiać",
      "czytać",
      "pisać",
      "widzieć",
      "pytać, prosić",
      "odpowiadać",
      "kłaść",
      "zamykać",
      "jest / są",
      "miejsce",
      "wolny / zajęty",
      "tu w pobliżu"
    ],
    exercises: [
      { why: "Zwróć uwagę na -e, -ete, -ono — to cała różnica wobec grupy -are." },
      {
        q: "Która końcówka jest wspólna dla wszystkich trzech koniugacji?",
        opts: ["-o w formie io", "-iamo w formie noi", "-ono w formie loro"],
        why: "Forma noi to zawsze -iamo, niezależnie od grupy."
      },
      { q: "Uzupełnij: „___ un tavolo libero?” (Jest wolny stolik?)", why: "Jeden stolik → c'è." },
      {
        q: "Uzupełnij: „___ tre persone in fila.” (Są trzy osoby w kolejce.)",
        why: "Liczba mnoga → ci sono."
      },
      {
        q: "„Il bar è chiuso” a „C'è un bar qui vicino” — co je różni?",
        opts: [
          "Nic, to synonimy",
          "Pierwsze opisuje cechę baru, drugie stwierdza jego istnienie w okolicy",
          "Drugie jest w czasie przeszłym"
        ],
        why: "è opisuje, c'è stwierdza obecność czegoś w miejscu."
      },
      { q: "„Biorę piwo, a ty?”", why: "Prendere jest we Włoszech domyślnym czasownikiem zamawiania." },
      {
        q: "Które czasowniki należą do grupy -ere?",
        opts: ["prendere", "abitare", "scrivere", "dormire", "chiudere"]
      },
      { tr: "Nie widzę kelnera." },
      { tr: "Jest wolny stolik dla dwóch osób?" },
      { tr: "Poprosimy dwa spritze." }
    ]
  },
  "lesson:a1-u03-l3": {
    theme: "Gramatyka podstawowa",
    title: "Trzecia koniugacja i wzorzec -isc-",
    objectives: [
      "odmienić czasowniki typu dormire i typu capire",
      "rozpoznać, które -ire wymagają wstawki -isc-",
      "użyć preferire do wyrażania preferencji"
    ],
    theory: [
      {
        h: "Jedna końcówka, dwa zachowania",
        p: "Czasowniki na <strong>-ire</strong> dzielą się na dwie podgrupy. Pierwsza (<em>dormire, partire, sentire, aprire, offrire</em>) odmienia się wprost. Druga (<em>capire, finire, preferire, pulire, spedire</em>) wstawia <b>-isc-</b> w czterech formach: <em>io, tu, lui/lei, loro</em>. Formy <em>noi</em> i <em>voi</em> zostają bez wstawki."
      },
      {
        h: "Skąd wiadomo, która to grupa",
        p: "Reguły nie ma — trzeba zapamiętać. Pomaga to, że grupa z <em>-isc-</em> jest liczniejsza i zawiera prawie wszystkie nowsze czasowniki (<em>gestire, inserire, garantire</em>). Słowniki oznaczają ją skrótem <i>(-isc-)</i> przy haśle."
      },
      {
        tip: "Wzorzec z -isc- ma kształt klamry: cztery formy z wstawką na zewnątrz, dwie bez niej w środku. Zapamiętaj rytm: <b>ca-pi-sco, ca-pi-sci, ca-pi-sce — ca-piamo, ca-pite — ca-pi-scono</b>."
      },
      {
        h: "Preferire — bardzo przydatny czasownik",
        p: "<em>Preferisco il vino bianco</em> („wolę białe wino”) to zwrot, którego użyjesz w każdej restauracji i sklepie. Buduje się go z rzeczownikiem albo z bezokolicznikiem: <em>preferisco restare a casa</em>."
      }
    ],
    grammar: {
      title: "Dormire (bez -isc-) kontra capire (z -isc-)",
      table: {
        head: ["osoba", "dormire", "capire", "po polsku"],
        rows: [
          ["io", "dormo", "capisco", "śpię / rozumiem"],
          ["tu", "dormi", "capisci", "śpisz / rozumiesz"],
          ["lui / lei", "dorme", "capisce", "śpi / rozumie"],
          ["noi", "dormiamo", "capiamo", "śpimy / rozumiemy"],
          ["voi", "dormite", "capite", "śpicie / rozumiecie"],
          ["loro", "dormono", "capiscono", "śpią / rozumieją"]
        ]
      },
      examples: [
        { tr: "Nie rozumiem, może pan powtórzyć?" },
        { tr: "Wolę stolik na zewnątrz." },
        { tr: "O której kończysz pracę?" },
        { tr: "Sklep otwiera się o dziewiątej.", note: "aprire — bez -isc-" },
        { tr: "Wyjeżdżamy jutro rano." },
        { tr: "Oni rozumieją wszystko." }
      ]
    },
    vocab: [
      "rozumieć",
      "kończyć",
      "woleć",
      "sprzątać",
      "wysyłać",
      "spać",
      "wyjeżdżać",
      "otwierać",
      "oferować, stawiać",
      "słyszeć, czuć",
      "śledzić, iść za",
      "może pan/pani powtórzyć?"
    ],
    exercises: [
      { why: "Klamra: -isc- w io, tu, lui/lei i loro; brak w noi i voi." },
      { why: "Dormire idzie wprost, bez wstawki." },
      {
        q: "Który czasownik wymaga wstawki -isc-?",
        opts: ["partire", "preferire", "aprire"],
        why: "Preferire → preferisco, preferisci, preferisce, preferiamo, preferite, preferiscono."
      },
      {
        q: "Uzupełnij: „Noi non ___ bene.” (Nie rozumiemy dobrze.)",
        hint: "forma noi nie ma wstawki",
        why: "Capiamo — w formie noi i voi -isc- znika."
      },
      { q: "Uzupełnij: „Loro ___ alle sette.” (Kończą o siódmej.)", why: "finire z -isc- w formie loro." },
      { q: "„Wolę stolik na zewnątrz.”" },
      { q: "Które formy zawierają -isc-?", opts: ["capisco", "capiamo", "finisce", "dormite", "puliscono"] },
      { tr: "Nie rozumiem, może pani powtórzyć?" },
      { tr: "Wolę wyjechać jutro wcześnie rano." },
      { tr: "Przepraszam, nie rozumiem. Może pan powtórzyć?" }
    ]
  },
  "lesson:a1-u03-l4": {
    theme: "Jedzenie",
    title: "Rodzajnik cząstkowy i ilości",
    objectives: [
      "wyrazić nieokreśloną ilość przez del, della, dei…",
      "użyć un po' di i un chilo di",
      "poprosić o produkty w sklepie"
    ],
    theory: [
      {
        h: "Trochę czegoś — bez słowa „trochę”",
        p: "Włoski wyraża nieokreśloną ilość przez <strong>rodzajnik cząstkowy</strong>: przyimek <em>di</em> zlany z rodzajnikiem określonym. <em>Vorrei del pane</em> — „poproszę (trochę) chleba”. W liczbie mnogiej odpowiada polskiemu „jakieś, kilka”: <em>dei pomodori</em> — „pomidorów”."
      },
      {
        h: "Formy",
        list: [
          "di + il = <b>del</b> pane · di + lo = <b>dello</b> zucchero · di + l' = <b>dell'</b>acqua",
          "di + la = <b>della</b> carne · di + i = <b>dei</b> pomodori",
          "di + gli = <b>degli</b> spinaci · di + le = <b>delle</b> mele"
        ]
      },
      {
        h: "Alternatywy",
        p: "Zamiast rodzajnika cząstkowego można użyć <strong>un po' di</strong> („trochę”) albo miary: <em>un chilo di, un etto di, mezzo litro di</em>. W przeczeniu rodzajnik cząstkowy zwykle znika: <em>non ho pane</em>, nie „non ho del pane”."
      },
      {
        contrast: "Polski dopełniacz cząstkowy („kup chleba”, nie „kup chleb”) robi dokładnie to samo, tylko końcówką zamiast przyimkiem. To dobra kotwica: gdzie po polsku powiesz „chleba”, po włosku będzie <em>del pane</em>."
      },
      {
        tip: "<b>Un etto</b> to 100 gramów i jest podstawową jednostką przy ladzie: <em>due etti di prosciutto</em> = 200 g szynki."
      }
    ],
    grammar: {
      title: "Rodzajnik cząstkowy i wyrażenia ilości",
      table: {
        head: ["kontekst", "forma", "przykład"],
        rows: [
          ["m. + spółgłoska", "del", "del pane"],
          ["m. + s+sp., z", "dello", "dello zucchero"],
          ["+ samogłoska", "dell'", "dell'acqua, dell'olio"],
          ["ż. + spółgłoska", "della", "della carne"],
          ["m. l.mn.", "dei / degli", "dei pomodori, degli spinaci"],
          ["ż. l.mn.", "delle", "delle mele"]
        ]
      },
      examples: [
        { tr: "Poproszę chleba." },
        { tr: "Kupuję jabłka i winogrona." },
        { tr: "Trochę soli, nie za dużo." },
        { tr: "Dwadzieścia deko szynki surowej." },
        { tr: "Pół litra mleka." },
        { tr: "Nie mam cukru w domu.", note: "w przeczeniu bez rodzajnika cząstkowego" }
      ]
    },
    vocab: [
      "chleb",
      "mleko",
      "woda",
      "cukier",
      "sól",
      "oliwa, olej",
      "pomidory",
      "jabłka",
      "sto gramów",
      "kilogram",
      "trochę",
      "pół litra",
      "wystarczy, dziękuję",
      "ile pan/pani chce?"
    ],
    exercises: [
      {
        q: "Jak poprosisz o (trochę) chleba?",
        opts: ["Vorrei il pane", "Vorrei del pane", "Vorrei un pane"],
        why: "Rodzajnik cząstkowy <b>del</b> wyraża nieokreśloną ilość."
      },
      {
        q: "Uzupełnij: „Compro ___ acqua.” (Kupuję wodę.)",
        why: "di + l' = dell', bo acqua zaczyna się od samogłoski."
      },
      {
        q: "Uzupełnij: „Vorrei ___ mele.” (Poproszę jabłka.)",
        why: "di + le = delle, rodzaj żeński w liczbie mnogiej."
      },
      {
        q: "Dobierz rodzajnik cząstkowy.",
        items: ["chleb", "cukier", "mięso", "oliwa", "pomidory", "szpinak"]
      },
      {
        q: "Ile to „due etti”?",
        opts: ["20 gramów", "200 gramów", "2 kilogramy"],
        why: "Un etto to 100 g, więc due etti = 200 g."
      },
      { q: "„Poproszę pół litra mleka.”" },
      {
        q: "Jesteś przy ladzie w sklepie spożywczym.",
        setting: "Alimentari w dzielnicy, przy ladzie z wędlinami.",
        lines: [
          { tr: "Dzień dobry! Słucham." },
          { tr: "Poproś o 200 g szynki.", answerTr: "Dwadzieścia deko szynki poproszę." },
          { tr: "Proszę. Coś jeszcze?" },
          { tr: "Poproś jeszcze o chleb.", answerTr: "Jeszcze chleba, dziękuję." }
        ]
      },
      { q: "Uzupełnij listę zakupów.", tr: "Kupuję chleb, wodę i pomidory." },
      { tr: "Poproszę kilogram pomidorów i trochę bazylii." },
      { tr: "Dwadzieścia deko sera poproszę. To wszystko." }
    ]
  },
  "lesson:a1-u03-test": {
    theme: "Sprawdzian",
    title: "Sprawdzian jednostki 3",
    objectives: ["sprawdzić piacere, koniugacje -ere i -ire, rodzajnik cząstkowy"],
    theory: [{ p: "Dziesięć zadań. Zaliczenie od 70%." }],
    exercises: [
      { q: "„Mi ___ gli spaghetti.” (Lubię spaghetti.)" },
      { q: "„Non mi ___ il pesce crudo.”" },
      {
        q: "„Marco lubi wino” to:",
        opts: ["Marco piace il vino", "A Marco piace il vino", "Marco piacciono il vino"]
      },
      {  },
      {  },
      { q: "„___ due posti liberi.” (Są dwa wolne miejsca.)" },
      { q: "Rodzajnik cząstkowy:", items: [, , , ] },
      { q: "„Wolę białe wino.”" },
      { tr: "Są oliwki i ser." },
      { tr: "Bardzo lubię włoskie aperitivo." }
    ]
  }
});
