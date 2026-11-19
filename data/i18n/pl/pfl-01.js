/* ============================================================
   Teksty w języku ucznia (pl) dla data/core/pfl-01.js, jednostka pfl-u01.
   Klucze wskazują id w warstwie neutralnej; tablice łączą się
   po indeksie, więc ich długość musi zgadzać się z core.
   Sprawdzane przez scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("pl", {
  "unit:pfl-u01": {
    title: "Przyjęcie i wywiad",
    grammarNote: "Sie wobec pacjenta · czasownik na drugim miejscu · celownik przy wehtun, helfen, fehlen i mir ist übel · Perfekt w wywiadzie · złożenia i pary Fachsprache / Laiensprache"
  },
  "lesson:pfl-u01-l1": {
    theme: "Na oddziale",
    title: "Dzień dobry, jestem Pana pielęgniarką",
    objectives: [
      "przedstawić się pacjentowi imieniem, nazwiskiem i funkcją",
      "sprawdzić tożsamość pacjenta (nazwisko, data urodzenia, opaska)",
      "zawsze mówić do pacjentów i ich bliskich per Sie",
      "trzymać odmieniony czasownik na drugim miejscu, także gdy zdanie zaczyna się od jetzt, gleich, heute"
    ],
    theory: [
      {
        h: "Jak się przedstawić na oddziale",
        p: "Na niemieckim oddziale przedstawiasz się <strong>imieniem i nazwiskiem</strong> oraz funkcją: <em>Guten Tag, mein Name ist Elena Marin. Ich bin heute Ihre Pflegefachkraft.</em> Pacjent będzie mówił do ciebie <em>Frau Marin</em> albo <em>Herr ...</em>. Zaraz potem sprawdza się tożsamość: <em>Wie heißen Sie, bitte? Wie ist Ihr Geburtsdatum?</em> i kontroluje opaskę, <em>das Patientenarmband</em>. Pytanie jest celowo otwarte: nie pyta się «Sie sind Herr Brandt, oder?», bo pacjent zdezorientowany na wszystko odpowie tak."
      },
      {
        h: "Czasownik na drugim miejscu",
        p: "W zdaniu głównym odmieniony czasownik stoi <strong>na drugim miejscu</strong>. Jeśli na początek wstawisz okolicznik czasu, podmiot przechodzi <strong>za</strong> czasownik: <em>Jetzt bringe ich Sie auf Ihr Zimmer. Gleich mache ich mit Ihnen das Aufnahmegespräch.</em> W pytaniu z zaimkiem pytającym jest tak samo (<em>Wie heißen Sie?</em>); w pytaniu rozstrzygającym czasownik stoi na pierwszym miejscu (<em>Haben Sie noch Fragen?</em>). Z czasownikiem modalnym modalny jest na drugim miejscu, a bezokolicznik na końcu: <em>Darf ich Ihnen kurz ein paar Fragen stellen?</em>"
      },
      {
        contrast: "Polska forma grzecznościowa to <em>Pan</em>/<em>Pani</em> z czasownikiem w <strong>trzeciej osobie liczby pojedynczej</strong>: «Jak się Pan nazywa?», «Czy Pani ma pytania?». Niemieckie <em>Sie</em> działa inaczej: jest jedno dla kobiety i mężczyzny, i czasownik stoi w <strong>trzeciej osobie liczby mnogiej</strong>: <em>Wie heißen Sie?</em>, <em>Haben Sie Fragen?</em>, nigdy «Wie heißt Sie». Zaimek dzierżawczy i celownik też nie zdradzają płci: <em>Ihr Zimmer</em> to zarówno «Pana pokój», jak i «Pani pokój», <em>Kann ich Ihnen helfen?</em> to «Czy mogę Panu / Pani pomóc?», zawsze wielką literą. Na polskim oddziale zdarza się czułe «dziadku» czy «babciu»; w Niemczech z pacjentami i rodziną mówi się <strong>zawsze per Sie</strong>, a <em>du</em> zostaje dla kolegów z zespołu, jeśli oddział go używa. Do tego szyk: polski może opuścić podmiot i dowolnie go przestawić («Teraz zaprowadzę Pana do pokoju»), niemiecki wymaga podmiotu i po okoliczniku stawia go za czasownikiem: <em>Jetzt bringe ich Sie</em>. «Jetzt ich bringe Sie» słychać od razu."
      },
      {
        trap: "<em>Die Station</em> to oddział, nie stacja. <em>Die Ambulanz</em> to przyszpitalna przychodnia, a nie ambulans: karetka to <em>der Krankenwagen</em> albo <em>der Rettungswagen</em>. <em>Krankenschwester</em> wciąż istnieje w mowie potocznej, ale nie jest już nazwą zawodu: od 2020 roku tytuł brzmi <em>Pflegefachfrau</em> / <em>Pflegefachmann</em>, a <em>Pflegefachkraft</em> to określenie neutralne. «Przyjąć do szpitala» to <em>stationär aufnehmen</em> (<em>Wir nehmen Sie heute stationär auf</em>), a <em>die Aufnahme</em> to zarówno przyjęcie, jak i izba przyjęć, czyli biuro przyjęć."
      },
      {
        tip: "Zanim wyjdziesz z sali, zawsze pokaż dzwonek: <em>Wenn Sie Hilfe brauchen, drücken Sie bitte die Klingel.</em> To zdanie powiesz kilkadziesiąt razy dziennie: naucz się go na pamięć, z czasownikiem na końcu po <em>wenn</em>, a głowa będzie wolna na resztę."
      }
    ],
    grammar: {
      title: "Gdzie stoi czasownik",
      note: "W zdaniu głównym odmieniony czasownik stoi na <b>drugim miejscu</b>, cokolwiek jest na początku. W pytaniu rozstrzygającym stoi na <b>pierwszym</b>. Wobec pacjenta zawsze <b>Sie</b>, <b>Ihr</b>, <b>Ihnen</b>.",
      table: {
        head: ["rodzaj zdania", "przykład", "miejsce czasownika"],
        rows: [
          ["pytanie z W-", "Wie heißen Sie, bitte?", "2., podmiot za nim"],
          ["pytanie rozstrzygające", "Haben Sie noch Fragen?", "1."],
          ["okolicznik na początku", "Jetzt bringe ich Sie auf Ihr Zimmer.", "2., podmiot za czasownikiem"],
          ["z czasownikiem modalnym", "Darf ich Ihnen kurz ein paar Fragen stellen?", "modalny na 1. lub 2., bezokolicznik na końcu"]
        ]
      },
      examples: [
        { tr: "Dzień dobry, nazywam się Elena Marin. Dziś jestem Pana pielęgniarką.", note: "imię, nazwisko i funkcja: standardowe przedstawienie się" },
        { tr: "Jak się Pan nazywa?", note: "pytanie otwarte, by sprawdzić tożsamość" },
        { tr: "Jaka jest Pana data urodzenia?", note: "drugie sprawdzenie tożsamości" },
        { tr: "Teraz zaprowadzę Pana do pokoju.", note: "jetzt na początku: podmiot ich za czasownikiem" },
        { tr: "Czy ma Pan jeszcze pytania?", note: "pytanie rozstrzygające: czasownik na pierwszym miejscu" },
        { tr: "Czy mogę zadać Panu szybko kilka pytań?", note: "modalne dürfen, bezokolicznik stellen na końcu" }
      ]
    },
    vocab: [
      "oddział (auf Station: na oddziale)",
      "pielęgniarka, pielęgniarz (określenie neutralne)",
      "pielęgniarka (tytuł zawodowy)",
      "pielęgniarz (tytuł zawodowy)",
      "pacjent (die Patientin: pacjentka)",
      "przyjęcie, izba przyjęć",
      "rozmowa przy przyjęciu",
      "pokój, sala",
      "dzwonek przywoławczy",
      "opaska identyfikacyjna",
      "przyjąć (stationär aufnehmen: przyjąć na oddział)",
      "przedstawić się"
    ],
    dialogue: [
      "Dzień dobry, panie Brandt. Nazywam się Elena Marin, dziś jestem Pana pielęgniarką.",
      "Dzień dobry, pani Marin.",
      "Czy mogę na chwilę zobaczyć Pana opaskę? Jaka jest Pana data urodzenia?",
      "Urodziłem się 12 marca 1950 roku.",
      "Dziękuję. Teraz zaprowadzę Pana do pokoju. To jest Pana łóżko, przy oknie.",
      "Dobrze, dziękuję.",
      "Jeśli będzie Pan potrzebował pomocy, proszę nacisnąć dzwonek. Za chwilę zrobimy razem rozmowę przy przyjęciu.",
      "Dobrze."
    ],
    culture: {
      title: "Niemieckie spojrzenie: jak nazywa się ten, kto pielęgnuje",
      text: "<p>Do 2003 roku zawód nazywał się <i>Krankenschwester</i> albo <i>Krankenpfleger</i>; od 2004 roku <i>Gesundheits- und Krankenpflegerin</i>. Po reformie, która weszła w życie w 2020 roku, kształcenie stało się ogólne, a tytuł brzmi <i>Pflegefachfrau</i> albo <i>Pflegefachmann</i>. Na oddziałach wszystkie te nazwy żyją obok siebie i wielu starszych pacjentów nadal będzie wołać do ciebie <i>Schwester</i>, tak jak w Polsce woła się «siostro»: to nie błąd do poprawiania, ale przedstawiaj się nazwiskiem.</p><p>Obok pielęgniarki pracują osoby, które w Polsce mają inne nazwy: <i>Pflegehilfskraft</i> albo <i>Pflegeassistenz</i>, z krótszym kształceniem, mniej więcej odpowiadające opiekunowi medycznemu, a w opiece nad osobami starszymi <i>Altenpflegerin</i>. Kto kształcił się za granicą, dostaje niemiecki tytuł dopiero po uznaniu kwalifikacji, czyli <i>Anerkennung</i>: do tego czasu w ogłoszeniach o pracę często pojawia się <i>Pflegefachkraft in Anerkennung</i>.</p>"
    },
    exercises: [
      {
        q: "Wchodzisz do sali nowego pacjenta. Jak się przedstawisz?",
        opts: [
          "Hallo, ich bin Elena, deine Krankenschwester.",
          "Guten Tag, ich bin Frau Marin, Ihre Pflegefachkraft.",
          "Guten Tag, ich bin Elena, deine Pflegefachkraft."
        ],
        why: "Do pacjenta mówi się per <b>Sie</b>, więc <i>Ihre</i> wielką literą, i przedstawia się nazwiskiem. <i>Krankenschwester</i> nie jest już tytułem zawodowym."
      },
      {
        q: "Które zdania mają czasownik na właściwym miejscu?",
        opts: [
          "Jetzt bringe ich Sie auf Ihr Zimmer.",
          "Jetzt ich bringe Sie auf Ihr Zimmer.",
          "Haben Sie noch Fragen?",
          "Gleich mache ich mit Ihnen das Aufnahmegespräch.",
          "Gleich ich mache mit Ihnen das Aufnahmegespräch."
        ],
        why: "Po <i>jetzt</i> i <i>gleich</i> na początku czasownik zostaje na drugim miejscu, a podmiot <i>ich</i> idzie za nim: <i>bringe ich</i>, <i>mache ich</i>. W pytaniu rozstrzygającym czasownik otwiera zdanie."
      },
      {
        q: "Uzupełnij: «Guten Tag, ich bin heute ___ Pflegefachkraft.»",
        hint: "zaimek dzierżawczy od Sie",
        why: "<b>Ihre</b>, wielką literą: zaimek dzierżawczy grzecznościowego Sie. <i>Pflegefachkraft</i> jest rodzaju żeńskiego, więc <i>Ihre</i>, a nie <i>Ihr</i>."
      },
      {
        q: "Wybierz właściwy rodzajnik określony dla każdego rzeczownika.",
        items: ["oddział", "pokój", "dzwonek", "rozmowa przy przyjęciu", "opaska identyfikacyjna", "pielęgniarka, pielęgniarz"]
      },
      {
        q: "Połącz każde słowo z jego znaczeniem.",
        pairs: ["pielęgniarka", "pielęgniarz", "oddział", "dzwonek przywoławczy"]
      },
      {
        q: "Ułóż słowa we właściwej kolejności.",
        tr: "Teraz zaprowadzę Pana do pokoju.",
        why: "<i>Jetzt bringe ich Sie auf Ihr Zimmer.</i> Jeśli zaczynasz od <i>jetzt</i>, czasownik <i>bringe</i> stoi zaraz potem, a dopiero za nim podmiot <i>ich</i>."
      },
      {
        q: "Uzupełnij zdanie.",
        tr: "Jeśli będzie Pan potrzebował pomocy, proszę nacisnąć dzwonek.",
        why: "<i>Wenn Sie Hilfe brauchen, drücken Sie bitte die Klingel</i>: po <i>wenn</i> czasownik <i>brauchen</i> idzie na koniec, a zdanie główne zaczyna się od czasownika <i>drücken</i>."
      },
      {
        q: "Przetłumacz: «Czy mogę zadać Panu kilka pytań?»",
        why: "<i>Darf ich Ihnen ein paar Fragen stellen</i>: <i>Fragen stellen</i> to «zadawać pytania», a osoba, której je zadajesz, stoi w celowniku, <i>Ihnen</i>, tak jak po polsku «Panu». <i>Darf ich</i> jest grzeczniejsze niż <i>Kann ich</i>, ale oba są poprawne."
      },
      {
        q: "Pacjent przychodzi na oddział.",
        setting: "Jesteś pielęgniarką na dyżurze i przyjmujesz pana Brandta.",
        lines: [
          { tr: "Dzień dobry. Nazywam się Brandt, zgłaszam się do przyjęcia do szpitala." },
          { tr: "Odpowiedz: przywitaj pacjenta i przedstaw się.", answerTr: "Dzień dobry, panie Brandt. Jestem pani Marin, Pana pielęgniarka." },
          { tr: "Gdzie jest mój pokój?" },
          { tr: "Odpowiedz, że teraz zaprowadzisz go do pokoju.", answerTr: "Teraz zaprowadzę Pana do pokoju." },
          { tr: "A jeśli w nocy będę potrzebował pomocy?" },
          { tr: "Odpowiedz, że wtedy powinien nacisnąć dzwonek.", answerTr: "Wtedy proszę nacisnąć dzwonek." }
        ]
      },
      {
        tr: "Dzień dobry, nazywam się Elena Marin. Dziś jestem Pana pielęgniarką i teraz zaprowadzę Pana do pokoju.",
        why: "W <i>Pflegefachkraft</i> <b>pf</b> wymawia się z obiema spółgłoskami, a <b>ch</b> po <b>a</b> to [x], jak polskie «ch»; w <i>heute</i> <b>eu</b> czyta się [ɔʏ]; w <i>Zimmer</i> <b>z</b> to [ts], czyli polskie «c»."
      },
      {
        tr: "Czy mogę zadać Panu szybko kilka pytań?",
        why: "W <i>Darf</i> końcowe <b>r</b> jest ledwie słyszalne; w <i>Ihnen</i> <b>h</b> się nie czyta i wydłuża <b>i</b>; w <i>stellen</i> początkowe <b>st</b> to [ʃt], czyli «szt»."
      }
    ]
  },
  "lesson:pfl-u01-l2": {
    theme: "Dolegliwości",
    title: "Gdzie Pana boli?",
    objectives: [
      "zapytać, gdzie i od kiedy pacjenta boli",
      "używać celownika przy wehtun, helfen, fehlen oraz przy mir ist übel, mir ist schwindelig",
      "rozpoznać najczęstsze dolegliwości nazwane zwykłymi słowami",
      "odpowiedzieć pacjentowi, który mówi, że źle się czuje"
    ],
    theory: [
      {
        h: "Ten, kogo boli, stoi w celowniku",
        p: "Po niemiecku wiele dolegliwości wyraża się z osobą w <strong>celowniku</strong> (Dativ): <em>Mir tut der Bauch weh</em> (boli mnie brzuch), <em>Mir ist übel</em> (jest mi niedobrze), <em>Mir ist schwindelig</em> (kręci mi się w głowie). Podmiotem gramatycznym <em>wehtun</em> jest część ciała: <em>der Bauch tut weh</em>, <em>die Beine tun weh</em>. Do pacjenta pytanie zawsze stoi w grzecznościowym celowniku: <em>Wo tut es Ihnen weh? Ist Ihnen übel?</em>"
      },
      {
        h: "helfen i fehlen",
        p: "Także <strong>helfen</strong> (pomagać) i <strong>fehlen</strong> (brakować) łączą się z celownikiem: <em>Kann ich Ihnen helfen?</em>, <em>Was fehlt Ihnen?</em> To drugie to klasyczne pytanie «co Panu dolega?». Zaimki w celowniku do nauczenia na pamięć: <em>mir, dir, ihm, ihr, uns, euch, ihnen</em> i grzecznościowe <em>Ihnen</em>."
      },
      {
        contrast: "Polski też ma przypadki, i to pomaga, ale nie wszędzie w tę samą stronę. «Boli <strong>mnie</strong> brzuch» to biernik, a niemiecki stawia tu <strong>celownik</strong>: <em>Mir tut der Bauch weh</em>, nigdy «Mich tut der Bauch weh». To najczęstszy błąd polskiego ucznia w tej lekcji. Za to «jest <strong>mi</strong> niedobrze» i «kręci <strong>mi</strong> się w głowie» mają celownik tak jak niemiecki: <em>Mir ist übel</em>, <em>Mir ist schwindelig</em>, z czasownikiem <em>sein</em>. Zgadzają się też «pomóc <strong>Panu</strong>» (<em>Ihnen helfen</em>) i «co <strong>Panu</strong> dolega?» (<em>Was fehlt Ihnen?</em>). Krótko: przy bólu uważaj na przypadek, przy nudnościach, zawrotach i pomocy zaufaj polskiemu celownikowi. I jeszcze jedno: po polsku «boli mnie głowa», a niemiecki pacjent mówi zwykle <em>Ich habe Kopfschmerzen</em>, w liczbie mnogiej."
      },
      {
        trap: "<em>Wo tut es Sie weh?</em> jest błędem: przy <em>wehtun</em> osoba stoi w celowniku, <em>Ihnen</em>. Nie myl też <em>Mir ist übel</em> z <em>Mir ist schlecht</em>: w mowie potocznej to drugie też prawie zawsze znaczy nudności, a nie ogólne złe samopoczucie. Jeśli pacjent mówi <em>Mir ist schlecht</em>, zapytaj: <em>Ist Ihnen übel? Müssen Sie erbrechen?</em> Ostatni fałszywy przyjaciel: <em>der Schwindel</em> to zawroty głowy, ale też «oszustwo»; na oddziale zawsze chodzi o to pierwsze."
      },
      {
        tip: "Poproś, żeby pacjent pokazał miejsce: <em>Können Sie es mir zeigen?</em> To szybsze i dokładniejsze niż każdy opis, i działa nawet wtedy, gdy pacjent używa innych słów niż ty. Potem zapytaj, od kiedy: <em>Seit wann?</em>"
      }
    ],
    grammar: {
      title: "Celownik przy dolegliwościach",
      note: "Osoba, którą boli, stoi w <b>celowniku</b>: <b>mir</b> tut ... weh, <b>mir</b> ist übel. Wobec pacjenta: <b>Ihnen</b>.",
      table: {
        head: ["osoba", "celownik", "przykład"],
        rows: [
          ["ich", "mir", "Mir ist schwindelig."],
          ["er", "ihm", "Ihm tut der Rücken weh."],
          ["sie", "ihr", "Ihr ist übel."],
          ["wir", "uns", "Uns fehlt nichts."],
          ["Sie", "Ihnen", "Wo tut es Ihnen weh?"]
        ]
      },
      examples: [
        { tr: "Gdzie Pana boli?", note: "wehtun: osoba w celowniku, nie w bierniku jak po polsku" },
        { tr: "Boli mnie brzuch.", note: "der Bauch jest podmiotem, mir to celownik" },
        { tr: "Kręci mi się w głowie.", note: "sein + celownik, nie haben" },
        { tr: "Jest mu niedobrze.", note: "ihm: celownik od er" },
        { tr: "Co Panu dolega?", note: "fehlen + celownik" },
        { tr: "Czy mogę Panu pomóc?", note: "helfen + celownik" }
      ]
    },
    vocab: [
      "ból (Schmerzen haben: odczuwać ból)",
      "boleć (es tut mir weh: boli mnie)",
      "ból głowy (zwykle w liczbie mnogiej)",
      "brzuch",
      "nudności",
      "zawroty głowy",
      "duszność, brak tchu",
      "biegunka",
      "zaparcie",
      "niedobrze (mir ist übel: jest mi niedobrze)",
      "z zawrotami głowy (mir ist schwindelig: kręci mi się w głowie)",
      "pomagać (z celownikiem)"
    ],
    dialogue: [
      "Panie Brandt, co Panu dolega? Dlaczego jest Pan dziś tutaj?",
      "Od trzech dni boli mnie brzuch.",
      "Gdzie dokładnie Pana boli? Może mi Pan pokazać?",
      "Tutaj, nisko po prawej.",
      "Czy jest Panu też niedobrze?",
      "Tak, jest mi niedobrze, a wczoraj miałem biegunkę.",
      "Czy ma Pan też duszności albo zawroty głowy?",
      "Nie, tego nie."
    ],
    exercises: [
      {
        q: "Pacjent chce powiedzieć «Boli mnie głowa». Które zdanie jest poprawne?",
        opts: ["Ich tut der Kopf weh.", "Mich tut der Kopf weh.", "Mir tut der Kopf weh."],
        why: "Przy <i>wehtun</i> osoba stoi w <b>celowniku</b>: <i>mir</i>. Polskie «mnie» kusi do <i>mich</i>, ale to biernik. Podmiotem jest <i>der Kopf</i>, dlatego czasownik ma formę <i>tut</i>."
      },
      {
        tr: "Czas teraźniejszy od helfen, wszystkie osoby.",
        why: "<i>Helfe, hilfst, hilft, helfen, helft, helfen</i>: w drugiej i trzeciej osobie liczby pojedynczej <b>e</b> zmienia się w <b>i</b>. A ten, komu się pomaga, stoi w celowniku: <i>Ich helfe Ihnen</i>."
      },
      {
        q: "Uzupełnij: «Kann ich ___ helfen?» (do pacjenta)",
        hint: "Sie w celowniku",
        why: "<b>Ihnen</b>: <i>helfen</i> wymaga celownika, a grzecznościowy celownik to <i>Ihnen</i>, wielką literą."
      },
      {
        q: "Uzupełnij celownikiem od er.",
        tr: "Bolą go plecy i jest mu niedobrze.",
        why: "<i>Ihm tut der Rücken weh, und ihm ist übel</i>: oba wyrażenia wymagają celownika, <i>ihm</i>, choć po polsku pierwsze ma biernik («go»)."
      },
      {
        q: "Połącz każde zdanie pacjenta z jego znaczeniem.",
        pairs: ["jest mi niedobrze", "kręci mi się w głowie", "brakuje mi tchu", "mam biegunkę"]
      },
      {
        q: "Wybierz właściwy rodzajnik określony dla każdego rzeczownika.",
        items: ["brzuch", "nudności", "zawroty głowy", "duszność", "biegunka", "zaparcie"]
      },
      {
        q: "Ułóż słowa we właściwej kolejności.",
        tr: "Od wczoraj boli mnie głowa.",
        why: "<i>Seit gestern tut mir der Kopf weh.</i> <i>Seit gestern</i> na początku, czasownik <i>tut</i> na drugim miejscu, <i>weh</i> na końcu."
      },
      {
        q: "Przetłumacz (do pacjenta): «Czy kręci się Panu w głowie?»",
        why: "<i>Ist Ihnen schwindelig?</i> Z <i>sein</i> i celownikiem, nie z <i>haben</i>. Pisze się też <i>schwindlig</i>."
      },
      {
        q: "Pacjentka naciska dzwonek.",
        setting: "Wchodzisz do sali: pacjentka mówi, że źle się czuje.",
        lines: [
          { tr: "Dzień dobry. Wcale nie czuję się dobrze." },
          { tr: "Zapytaj, co jej dolega.", answerTr: "Co Pani dolega?" },
          { tr: "Boli mnie brzuch." },
          { tr: "Zapytaj, gdzie dokładnie ją boli.", answerTr: "Gdzie dokładnie Panią boli?" },
          { tr: "Tutaj, po lewej. I jest mi niedobrze." },
          { tr: "Zapytaj, od kiedy jest jej niedobrze.", answerTr: "Od kiedy jest Pani niedobrze?" }
        ]
      },
      {
        tr: "Od trzech dni boli mnie brzuch. Jest mi niedobrze, a wczoraj miałem biegunkę.",
        why: "W <i>Bauch</i> <b>au</b> to [aʊ], a końcowe <b>ch</b> to [x]; w <i>übel</i> <b>ü</b> jest zaokrąglone, polski go nie ma: ułóż usta do «u» i powiedz «i»; w <i>Durchfall</i> <b>ch</b> po <b>r</b> to [ç], miękkie jak w «chiński»."
      },
      {
        tr: "Gdzie dokładnie Pana boli?",
        why: "W <i>genau</i> <b>g</b> jest zawsze twarde; w <i>tut</i> <b>u</b> jest długie; w <i>weh</i> <b>w</b> czyta się [v], a <b>h</b> wydłuża <b>e</b>."
      }
    ]
  },
  "lesson:pfl-u01-l3": {
    theme: "Historia choroby",
    title: "Formularz wywiadu",
    objectives: [
      "wypełnić z pacjentem formularz wywiadu",
      "zapytać o przebyte choroby, operacje, alergie i leki",
      "używać czasu Perfekt do tego, co już się wydarzyło, z haben albo z sein",
      "zapytać o plan leczenia farmakologicznego i o to, kiedy pacjent ostatnio przyjął leki"
    ],
    theory: [
      {
        h: "Pytania z formularza",
        p: "<strong>Anamnesebogen</strong> to formularz wywiadu wypełniany przy przyjęciu. Stałe pytania: <em>Haben Sie Vorerkrankungen?</em> (przebyte choroby), <em>Hatten Sie schon einmal eine Operation?</em>, <em>Haben Sie Allergien?</em>, <em>Welche Medikamente nehmen Sie regelmäßig ein?</em>, <em>Sind Sie in letzter Zeit gestürzt?</em> Przy alergii zawsze pytaj też o <strong>reakcję</strong> (<em>Was ist dann passiert?</em>), a jeśli pacjent nie pamięta nazwy leku, zanotuj, kto ją zna: lekarz rodzinny, <em>der Hausarzt</em>."
      },
      {
        h: "Perfekt w wywiadzie",
        p: "To, co już się wydarzyło, opowiada się w czasie <strong>Perfekt</strong>: czasownik posiłkowy na drugim miejscu, imiesłów na końcu. Większość czasowników łączy się z <strong>haben</strong>: <em>Haben Sie Ihre Tabletten genommen? Ich habe nichts gegessen. Ich habe das Antibiotikum nicht vertragen.</em> Czasowniki ruchu albo zmiany stanu łączą się z <strong>sein</strong>: <em>Sind Sie gestürzt?</em> W czasownikach rozdzielnych <em>ge-</em> stoi za przedrostkiem: <em>einweisen</em> → <em>eingewiesen</em>, <em>einnehmen</em> → <em>eingenommen</em>. Przy samych <em>sein</em> i <em>haben</em> częściej używa się Präteritum: <em>Ich hatte eine Operation. Ich war im Krankenhaus.</em>"
      },
      {
        contrast: "Polski ma jeden czas przeszły, bez czasownika posiłkowego: «Czy wziął Pan już tabletki?», «Upadł Pan?». Niemiecki Perfekt buduje się z dwóch części: <em>haben</em> albo <em>sein</em> na drugim miejscu i imiesłów <strong>na samym końcu</strong>, a wszystko inne stoi pomiędzy: <em>Haben Sie heute schon Ihre Tabletten genommen?</em> Wybór posiłkowego to coś, czego polski w ogóle nie zna, więc trzeba go nauczyć się razem z czasownikiem: ruch i zmiana stanu z <em>sein</em> (<em>ich bin gestürzt</em>), prawie cała reszta z <em>haben</em> (<em>ich habe genommen</em>). W razie wątpliwości czasownik przechodni z dopełnieniem bierze <em>haben</em>. Odwrotnie niż w polskim nie ma też aspektu: <em>Ich habe genommen</em> to zarówno «brałem», jak i «wziąłem», a różnicę niosą słowa w rodzaju <em>schon</em>, <em>heute</em>, <em>regelmäßig</em>."
      },
      {
        trap: "<em>Die Allergie</em> wygląda jak polska alergia, ale akcent pada na ostatnią sylabę, <em>Aller-<b>gie</b></em>, a <b>g</b> jest twarde. «Brać» lek to <em>nehmen</em> albo, bardziej oficjalnie, <em>einnehmen</em>; nie używaj <em>bekommen</em>, które znaczy «dostawać» (<em>Sie bekommen eine Infusion</em>: podaje ją personel). Czasownika <em>vertragen</em> używa się tak: <em>Ich vertrage kein Penicillin</em>, «nie toleruję penicyliny». Wreszcie <em>die Einweisung</em> ma dwa znaczenia: skierowanie do szpitala i, na oddziale, instruktaż obsługi urządzenia (<em>Geräteeinweisung</em>)."
      },
      {
        tip: "Zamiast dawać sobie dyktować nazwy leków, poproś o plan: <em>Haben Sie Ihren Medikationsplan dabei?</em> Nazwa leku wypowiedziana przez pacjenta i usłyszana przez kogoś, dla kogo niemiecki nie jest językiem ojczystym, to najłatwiejsze źródło błędu w całym formularzu."
      }
    ],
    grammar: {
      title: "Perfekt z haben i z sein",
      note: "Czasownik posiłkowy na <b>drugim miejscu</b> (albo na pierwszym w pytaniu rozstrzygającym), imiesłów <b>na końcu</b>. <b>sein</b> przy czasownikach ruchu i zmiany stanu, <b>haben</b> przy prawie wszystkich pozostałych.",
      table: {
        head: ["bezokolicznik", "zdanie w Perfekt", "uwaga"],
        rows: [
          ["nehmen", "Haben Sie Ihre Tabletten genommen?", "haben, imiesłów mocny"],
          ["vertragen", "Ich habe das Antibiotikum nicht vertragen.", "ver- jest nierozdzielne: bez ge-"],
          ["einweisen", "Der Hausarzt hat mich eingewiesen.", "rozdzielne: ge- za przedrostkiem"],
          ["stürzen", "Sind Sie gestürzt?", "sein: ruch"]
        ]
      },
      examples: [
        { tr: "Czy wziął Pan już dziś swoje tabletki?", note: "haben + genommen na końcu" },
        { tr: "Dziś rano nic nie jadłem.", note: "typowe pytanie przed badaniem na czczo" },
        { tr: "Mój lekarz rodzinny skierował mnie do szpitala.", note: "einweisen: skierowanie do szpitala" },
        { tr: "Czy upadł Pan ostatnio?", note: "stürzen wymaga sein" },
        { tr: "Nie tolerowałem antybiotyku.", note: "vertragen: bez ge-" },
        { tr: "Kiedy ostatnio Pan coś pił?", note: "pytanie z W-: haben na drugim miejscu" }
      ]
    },
    vocab: [
      "formularz wywiadu",
      "przebyta choroba, choroba współistniejąca",
      "alergia",
      "lek",
      "plan leczenia farmakologicznego (lista leków pacjenta)",
      "operacja, zabieg",
      "lekarz rodzinny",
      "skierowanie do szpitala",
      "upadek",
      "przyjmować (lek)",
      "tolerować, znosić",
      "regularnie"
    ],
    dialogue: [
      "Panie Brandt, teraz razem wypełnimy formularz wywiadu. Czy ma Pan jakieś przebyte choroby?",
      "Tak, mam nadciśnienie. A dwa lata temu miałem operację kolana.",
      "Czy ma Pan alergie?",
      "Kiedyś nie tolerowałem jednego antybiotyku. Dostałem wysypki.",
      "Pamięta Pan jeszcze, jak się nazywał ten lek?",
      "Niestety nie. Ale mój lekarz rodzinny to wie.",
      "Dobrze, zapytamy jego. Jakie leki przyjmuje Pan regularnie?",
      "Tu jest mój plan leków.",
      "Dziękuję. Czy wziął Pan już dziś swoje tabletki?",
      "Tak, rano."
    ],
    culture: {
      title: "Niemieckie spojrzenie: Medikationsplan",
      text: "<p>W Niemczech każdy, kto regularnie przyjmuje co najmniej trzy leki, ma prawo do <i>Medikationsplan</i> na jednolitym ogólnokrajowym formularzu, wypełnianym przez lekarza rodzinnego i opatrzonym kodem kreskowym, który może odczytać apteka i szpital. Wielu pacjentów nosi go w portfelu, a wielu nazywa go po prostu <i>Medikamentenplan</i> albo <i>mein Zettel</i>.</p><p>Przy przyjęciu plan nie zastępuje twojego pytania: zawsze zapytaj, czy pacjent bierze coś, czego tam nie ma, na przykład środek kupiony bez recepty albo maść. Odpowiedź trafia do formularza wywiadu, a decyzja, co kontynuować, należy do lekarza.</p>"
    },
    exercises: [
      {
        tr: "Perfekt od nehmen, wszystkie osoby.",
        why: "<i>Habe genommen, hast genommen, hat genommen, haben genommen, habt genommen, haben genommen</i>: posiłkowe <i>haben</i> i mocny imiesłów <i>genommen</i>."
      },
      {
        q: "Chcesz zapytać pacjenta «Czy upadł Pan ostatnio?». Które zdanie jest poprawne?",
        opts: [
          "Haben Sie in letzter Zeit gestürzt?",
          "Sind Sie in letzter Zeit gestürzt?",
          "Sind Sie in letzter Zeit gestürzt worden?"
        ],
        why: "<b>stürzen</b> to czasownik ruchu i wymaga <b>sein</b>: <i>Sind Sie gestürzt?</i> Trzecie zdanie to strona bierna, która tu nie ma sensu."
      },
      {
        q: "Uzupełnij: «Haben Sie heute schon Ihre Tabletten ___?»",
        hint: "imiesłów od nehmen",
        why: "<b>genommen</b>, na końcu zdania: imiesłów od <i>nehmen</i> jest mocny i zmienia samogłoskę."
      },
      {
        q: "Które pytania z formularza są poprawne?",
        opts: [
          "Haben Sie Allergien?",
          "Welche Medikamente nehmen Sie regelmäßig ein?",
          "Welche Medikamente Sie nehmen regelmäßig ein?",
          "Hatten Sie schon einmal eine Operation?",
          "Haben Sie schon einmal eine Operation gehabt worden?"
        ],
        why: "W pytaniu z W- czasownik stoi zaraz po wyrazie pytającym: <i>Welche Medikamente nehmen Sie</i>. Ostatnie miesza Perfekt ze stroną bierną: mówi się <i>Hatten Sie</i> albo <i>Haben Sie ... gehabt</i>."
      },
      {
        q: "Uzupełnij zdanie w czasie Perfekt.",
        tr: "Nie tolerowałem antybiotyku.",
        why: "<i>Ich habe das Antibiotikum nicht vertragen</i>: <i>vertragen</i> ma nierozdzielny przedrostek <i>ver-</i>, więc imiesłów nie dostaje <i>ge-</i> i brzmi tak samo jak bezokolicznik."
      },
      {
        q: "Ułóż słowa we właściwej kolejności.",
        tr: "Kiedy ostatnio Pan coś jadł?",
        why: "<i>Wann haben Sie zuletzt etwas gegessen?</i> Wyraz pytający, potem posiłkowe <i>haben</i>, podmiot, a imiesłów <i>gegessen</i> na końcu."
      },
      {
        q: "Wybierz właściwy rodzajnik określony dla każdego rzeczownika.",
        items: ["formularz wywiadu", "przebyta choroba", "lek", "upadek", "operacja", "lekarz rodzinny"]
      },
      {
        q: "Przetłumacz: «Czy jadł Pan już dziś coś?»",
        why: "<i>Haben Sie heute schon etwas gegessen?</i> Pytanie rozstrzygające: posiłkowy otwiera zdanie, imiesłów idzie na koniec. <i>Schon</i> to «już»."
      },
      {
        q: "Kontynuujesz formularz wywiadu.",
        setting: "Pacjent powiedział już, że ma nadciśnienie.",
        lines: [
          { tr: "Co jeszcze chce Pani wiedzieć?" },
          { tr: "Zapytaj, czy miał już kiedyś operację.", answerTr: "Czy miał Pan już kiedyś operację?" },
          { tr: "Tak, dwa lata temu, kolano." },
          { tr: "Zapytaj, czy ma alergie.", answerTr: "A czy ma Pan alergie?" },
          { tr: "Nie, chyba nie." },
          { tr: "Zapytaj, czy wziął już dziś tabletki.", answerTr: "Dobrze. Czy wziął Pan już dziś swoje tabletki?" }
        ]
      },
      {
        tr: "Mam nadciśnienie. Dwa lata temu miałem operację kolana i nie tolerowałem jednego antybiotyku.",
        why: "W <i>Knie</i> wymawia się i <b>k</b>, i <b>n</b>; w <i>Blutdruck</i> <b>u</b> w <i>Blut</i> jest długie, a w <i>Druck</i> krótkie; w <i>vertragen</i> <b>v</b> czyta się [f]."
      },
      {
        tr: "Jakie leki przyjmuje Pan regularnie?",
        why: "W <i>Medikamente</i> akcent pada na <b>men</b>; w <i>regelmäßig</i> <b>ä</b> jest długie, a <b>ß</b> to bezdźwięczne <b>s</b>; końcowe <b>g</b> czyta się [ç]."
      }
    ]
  },
  "lesson:pfl-u01-l4": {
    theme: "Dwa rejestry",
    title: "Język fachowy i język pacjenta",
    objectives: [
      "rozpoznać terminy fachowe pochodzenia łacińskiego i greckiego używane w dokumentacji i w rozmowie z lekarzami",
      "przełożyć każdy termin fachowy na słowo, którego używa pacjent",
      "wybrać właściwy rejestr w zależności od słuchacza",
      "ustalić rodzajnik złożenia po jego ostatnim członie"
    ],
    theory: [
      {
        h: "Dwa języki na jednym oddziale",
        p: "Każde pojęcie kliniczne ma dwie nazwy. <strong>Fachsprache</strong>, o rdzeniu łacińskim lub greckim, służy do rozmowy z lekarzami, przy przekazaniu dyżuru i w dokumentacji: <em>Hypertonie, Dyspnoe, Obstipation, Emesis</em>. <strong>Laiensprache</strong>, niemiecka, służy do rozmowy z pacjentami i rodziną: <em>Bluthochdruck, Atemnot, Verstopfung, Erbrechen</em>. Pielęgniarka przechodzi z jednej do drugiej kilkadziesiąt razy dziennie, czasem w jednym zdaniu: <em>Er hat eine Hypertonie</em> do lekarza, <em>Sie haben Bluthochdruck</em> do pacjenta."
      },
      {
        h: "Słowa pacjenta to złożenia",
        p: "Laiensprache tworzy nazwy, łącząc proste słowa: <em>Blut + hoch + Druck</em> = <em>der Bluthochdruck</em>, <em>Zucker + Krankheit</em> = <em>die Zuckerkrankheit</em>, <em>Atem + Not</em> = <em>die Atemnot</em>. <strong>Rodzajnik wyznacza ostatni człon</strong>: <em>der Druck</em>, więc <em>der Bluthochdruck</em>; <em>die Krankheit</em>, więc <em>die Zuckerkrankheit</em>; <em>das Gespräch</em>, więc <em>das Aufnahmegespräch</em>. Pacjent często skraca jeszcze bardziej: <em>Ich habe Zucker</em> znaczy «mam cukrzycę»."
      },
      {
        contrast: "Łacińskie terminy znasz z kształcenia, więc kolumna Fachsprache przyjdzie ci łatwo: <em>Hypertonie</em> to hypertensio, <em>Dyspnoe</em> to dyspnoe, <em>Obstipation</em> to obstipatio. Trudność leży gdzie indziej. Polska pielęgniarka na co dzień mówi i pisze po polsku: nadciśnienie, duszność, zaparcie, wymioty. Niemiecki lekarz i niemiecka dokumentacja używają łaciny znacznie częściej, a niemiecki pacjent ma własne słowa, z którymi polski nie dzieli <strong>żadnego rdzenia</strong>: <em>Bluthochdruck</em>, <em>Atemnot</em>, <em>Verstopfung</em>, <em>Erbrechen</em> nie przypominają niczego, co znasz. Tych słów nie da się zgadnąć, trzeba się ich nauczyć. Pomaga rozkładanie złożeń na części: <em>Blut-hoch-druck</em> to dosłownie «krew-wysokie-ciśnienie», czyli polskie «wysokie ciśnienie krwi» czytane od końca. I uwaga na rodzaj: zgadza się w <em>die Allergie</em> / alergia i <em>die Operation</em> / operacja, ale <em>das Medikament</em> jest nijakie, a polski medykament męski, a <em>die Hypertonie</em> jest żeńska, choć polskie nadciśnienie jest nijakie. Rodzajnik bierz zawsze ze słownika, nie z polskiego odpowiednika."
      },
      {
        trap: "Jedna litera zmienia wszystko: <em>Hypertonie</em> to wysokie ciśnienie, <em>Hypotonie</em> niskie, tak jak hiper- i hipo-; na głos, przy szybkim przekazaniu dyżuru, łatwo je pomylić, więc w razie wątpliwości warto dopytać. <em>Das Abdomen</em> jest nijakie, a słowo pacjenta męskie: <em>der Bauch</em>. A <em>Diarrhö</em> pisze się też <em>Diarrhoe</em>: obie pisownie są poprawne, «Diarrhea» nie."
      },
      {
        tip: "Kiedy tłumaczysz pacjentowi, co powiedział lekarz, powtórz raz termin fachowy, a potem go przełóż: <em>Das ist eine Hypertonie, also Bluthochdruck.</em> Pacjent znajdzie to słowo w wypisie ze szpitala i będzie wiedział, co znaczy."
      }
    ],
    grammar: {
      title: "Fachsprache i Laiensprache",
      note: "Z lekarzami i w dokumentacji kolumna <b>Fachsprache</b>; z pacjentami i rodziną kolumna <b>Laiensprache</b>. Rodzajnik złożenia to rodzajnik <b>ostatniego członu</b>.",
      table: {
        head: ["Fachsprache", "Laiensprache", "polski"],
        rows: [
          ["die Hypertonie", "der Bluthochdruck", "nadciśnienie"],
          ["der Diabetes mellitus", "die Zuckerkrankheit, «Zucker»", "cukrzyca"],
          ["die Dyspnoe", "die Atemnot", "duszność"],
          ["die Zephalgie", "die Kopfschmerzen", "ból głowy"],
          ["die Nausea", "die Übelkeit", "nudności"],
          ["die Emesis", "das Erbrechen", "wymioty"],
          ["die Obstipation", "die Verstopfung", "zaparcie"],
          ["die Diarrhö", "der Durchfall", "biegunka"],
          ["das Abdomen", "der Bauch", "jama brzuszna, brzuch"]
        ]
      },
      examples: [
        { tr: "Pacjent ma rozpoznane nadciśnienie tętnicze.", note: "Fachsprache: do lekarza albo w dokumentacji" },
        { tr: "Panie Brandt, ma Pan wysokie ciśnienie.", note: "Laiensprache: do pacjenta" },
        { tr: "Przy wysiłku pacjent ma duszność.", note: "typowe sformułowanie z dokumentacji" },
        { tr: "Czy brakuje Panu tchu, kiedy wchodzi Pan po schodach?", note: "to samo pytanie, dla pacjenta" },
        { tr: "Cukrzyca w języku fachowym nazywa się Diabetes mellitus.", note: "Zucker + Krankheit: die, ze względu na Krankheit" },
        { tr: "Wielu pacjentów mówi po prostu: «mam cukier».", note: "Zucker zamiast cukrzycy: bardzo rozpowszechniona forma potoczna" }
      ]
    },
    vocab: [
      "anamneza, wywiad (termin fachowy)",
      "dotychczasowa historia choroby (słowo dla pacjenta)",
      "nadciśnienie (termin fachowy)",
      "wysokie ciśnienie (słowo dla pacjenta)",
      "cukrzyca, diabetes mellitus (termin fachowy)",
      "cukrzyca (słowo dla pacjenta)",
      "duszność (termin fachowy)",
      "ból głowy (termin fachowy)",
      "wymioty (termin fachowy)",
      "wymioty (słowo dla pacjenta)",
      "zaparcie (termin fachowy)",
      "biegunka (termin fachowy)"
    ],
    dialogue: [
      "Panie doktorze Weber, pan Brandt ma rozpoznane nadciśnienie i od trzech dni ból brzucha.",
      "Czy ma też nudności albo wymioty?",
      "Nudności tak, wymiotów nie. Do tego biegunka od wczoraj.",
      "Pani Marin, co powiedział lekarz? Nie rozumiem tych słów.",
      "Proszę się nie martwić, panie Brandt. Pytał tylko, czy jest Panu niedobrze i czy Pan wymiotował.",
      "Aha. A co to jest Hypertonie?",
      "To wysokie ciśnienie. To już Pan zna."
    ],
    exercises: [
      {
        q: "Połącz każdy termin fachowy ze słowem, którego używa pacjent.",
        pairs: ["der Bluthochdruck", "die Atemnot", "die Verstopfung", "die Kopfschmerzen", "das Erbrechen"]
      },
      {
        q: "Rozmawiasz z pacjentem. Które zdanie jest odpowiednie?",
        opts: [
          "Sie haben eine Hypertonie.",
          "Bei Ihnen besteht eine arterielle Hypertonie.",
          "Sie haben Bluthochdruck."
        ],
        why: "Z pacjentem używa się Laiensprache: <b>Bluthochdruck</b>. Dwa pierwsze zdania są poprawne, ale pasują do dokumentacji albo do rozmowy lekarza z lekarzem."
      },
      {
        q: "Które słowa są odpowiednie dla pacjenta?",
        opts: ["die Verstopfung", "die Obstipation", "die Übelkeit", "die Nausea", "der Durchfall", "die Diarrhö"],
        why: "<i>Verstopfung</i>, <i>Übelkeit</i> i <i>Durchfall</i> to zwykłe niemieckie słowa. <i>Obstipation</i>, <i>Nausea</i> i <i>Diarrhö</i> to terminy fachowe, dla lekarza i do dokumentacji."
      },
      {
        q: "Lekarz napisał «Hypertonie». Uzupełnij zdanie dla pacjenta: «Sie haben ___.»",
        hint: "złożenie, Laiensprache",
        why: "<b>Bluthochdruck</b>: <i>Blut + hoch + Druck</i>. Poprawne jest też <i>hohen Blutdruck</i>."
      },
      {
        q: "Wybierz rodzajnik: w złożeniach decyduje ostatni człon.",
        items: ["wysokie ciśnienie (Druck)", "cukrzyca (Krankheit)", "duszność (Not)", "formularz wywiadu (Bogen)", "rozmowa przy przyjęciu (Gespräch)", "historia choroby (Geschichte)"]
      },
      {
        q: "Uzupełnij: w pierwszym zdaniu termin fachowy, w drugim słowo dla pacjenta.",
        tr: "Pacjent ma duszność przy wysiłku. Pytam go: czy brakuje Panu tchu, kiedy wchodzi Pan po schodach?",
        why: "<i>Dyspnoe</i> to termin do dokumentacji, <i>Atemnot</i> słowo dla pacjenta: to samo pojęcie, dwa rejestry."
      },
      {
        q: "Ułóż słowa we właściwej kolejności.",
        tr: "Czy brakuje Panu tchu, kiedy wchodzi Pan po schodach?",
        why: "<i>Haben Sie Atemnot, wenn Sie Treppen steigen?</i> Pytanie rozstrzygające zaczyna się od czasownika; po <i>wenn</i> czasownik <i>steigen</i> idzie na koniec."
      },
      {
        q: "Przetłumacz, zwracając się do pacjenta: «Czy ma Pan wysokie ciśnienie?»",
        why: "<i>Haben Sie Bluthochdruck?</i> albo <i>Haben Sie hohen Blutdruck?</i> Do pacjenta nie mówi się <i>Hypertonie</i>."
      },
      {
        q: "Lekarz napisał «Diabetes mellitus». Uzupełnij dla pacjenta: «Seit wann haben Sie die ___?»",
        hint: "Zucker + Krankheit",
        why: "<b>Zuckerkrankheit</b>, rodzaju żeńskiego jak <i>Krankheit</i>. Wielu pacjentów mówi też po prostu <i>Zucker</i>: <i>Ich habe Zucker</i>."
      },
      {
        tr: "Pacjent ma rozpoznane nadciśnienie. Panu Brandtowi mówię po prostu: ma Pan wysokie ciśnienie.",
        why: "W <i>Hypertonie</i> akcent pada na końcowe <b>nie</b>, a <b>y</b> czyta się jak <b>ü</b>; w <i>Bluthochdruck</i> <b>ch</b> po <b>o</b> to [x]."
      },
      {
        tr: "Czy brakuje Panu tchu, kiedy wchodzi Pan po schodach?",
        why: "W <i>Atemnot</i> akcent pada na pierwszą sylabę, <b>A</b>; w <i>Treppen</i> <b>e</b> jest krótkie; w <i>steigen</i> początkowe <b>st</b> to [ʃt], a <b>ei</b> to [aɪ]."
      }
    ]
  },
  "lesson:pfl-u01-test": {
    theme: "Sprawdzian",
    title: "Test: Przyjęcie i wywiad",
    objectives: [
      "sprawdzić rejestr wobec pacjenta, celownik przy dolegliwościach, Perfekt w wywiadzie i pary Fachsprache / Laiensprache"
    ],
    theory: [
      {
        p: "Jedenaście pytań z całej jednostki. Zalicza się od 70%. Treści kliniczne są przykładami dydaktycznymi: na oddziale zawsze obowiązuje procedura placówki."
      }
    ],
    exercises: [
      {
        q: "Witasz 75-letnią pacjentkę, której nie znasz. Które zdanie jest odpowiednie?",
        opts: ["Hallo, wie geht's dir?", "Guten Tag, wie geht es Ihnen?", "Guten Tag, wie geht es dir?"],
        why: "Do pacjentów zawsze mówi się per <b>Sie</b>: <i>Wie geht es Ihnen?</i>, z grzecznościowym celownikiem."
      },
      {
        q: "Uzupełnij: «Wo tut es ___ weh?» (do pacjenta)",
        hint: "Sie w celowniku",
        why: "<b>Ihnen</b>: przy <i>wehtun</i> osoba stoi w celowniku."
      },
      {
        q: "Pacjent mówi «Jest mi niedobrze». Uzupełnij: «___ ist übel.»",
        hint: "ich w celowniku",
        why: "<b>Mir</b>: <i>Mir ist übel</i>, z <i>sein</i> i celownikiem, tak jak polskie «mi». «Ich bin übel» się nie mówi."
      },
      {
        tr: "Perfekt od einnehmen, wszystkie osoby.",
        why: "<i>Habe eingenommen, hast eingenommen, hat eingenommen, haben eingenommen, habt eingenommen, haben eingenommen</i>: czasownik rozdzielny, <i>ge-</i> stoi między <i>ein</i> a <i>nommen</i>."
      },
      {
        q: "Połącz każdy termin fachowy ze słowem, którego używa pacjent.",
        pairs: ["der Bluthochdruck", "die Atemnot", "die Verstopfung", "der Durchfall"]
      },
      {
        q: "Które zdania są poprawne wobec pacjenta?",
        opts: [
          "Kann ich Ihnen helfen?",
          "Kann ich Sie helfen?",
          "Sind Sie in letzter Zeit gestürzt?",
          "Jetzt bringe ich Sie auf Ihr Zimmer.",
          "Haben Sie in letzter Zeit gestürzt?"
        ],
        why: "<i>helfen</i> wymaga celownika (<i>Ihnen</i>), <i>stürzen</i> w Perfekt wymaga <i>sein</i>, a po <i>jetzt</i> czasownik zostaje na drugim miejscu."
      },
      {
        q: "Uzupełnij zdanie w czasie Perfekt.",
        tr: "Mój lekarz rodzinny dał mi skierowanie do szpitala.",
        why: "<i>Mein Hausarzt hat mich ins Krankenhaus eingewiesen</i>: <i>hat</i> na drugim miejscu, rozdzielny imiesłów <i>eingewiesen</i> na końcu."
      },
      {
        q: "Ułóż słowa we właściwej kolejności.",
        tr: "Jakie leki przyjmuje Pan regularnie?",
        why: "<i>Welche Medikamente nehmen Sie regelmäßig ein?</i> Czasownik <i>nehmen</i> zaraz po części pytającej, przedrostek <i>ein</i> na końcu."
      },
      {
        q: "Wybierz właściwy rodzajnik określony dla każdego rzeczownika.",
        items: ["anamneza", "wysokie ciśnienie", "lek", "rozmowa przy przyjęciu", "biegunka", "historia choroby"]
      },
      {
        tr: "Dzień dobry, dziś jestem Pana pielęgniarką. Teraz razem wypełnimy formularz wywiadu. Czy ma Pan alergie?",
        why: "W <i>Anamnesebogen</i> akcent pada na <b>ne</b>; w <i>Allergien</i> <b>g</b> jest twarde, a końcowe <b>ie</b> czyta się [iːən]; w <i>fülle</i> <b>ü</b> jest krótkie i zaokrąglone."
      },
      {
        tr: "Od kiedy Pana boli?",
        why: "W <i>Seit</i> początkowe <b>s</b> jest dźwięczne [z], a <b>ei</b> to [aɪ]; w <i>wann</i> <b>w</b> czyta się [v]; w <i>weh</i> <b>h</b> wydłuża <b>e</b>."
      }
    ]
  }
});
