/* ============================================================
   Learner-language text (pl) for data/core/c1-02.js, unit c1-u04.
   Keys point at ids in the neutral layer; arrays merge by index,
   so their length has to match core.
   Checked by scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("pl", {
  "unit:c1-u04": {
    title: "Pewnie jest zmęczony",
    grammarNote: "Futur I i II jako przypuszczenie (er wird wohl müde sein, sie wird es gelesen haben) · czasowniki modalne w użyciu subiektywnym: muss, dürfte, könnte, mag, soll, will · partykuły modalne wohl, ja, etwa, halt, eben"
  },
  "lesson:c1-u04-l1": {
    theme: "Przypuszczenia i stopień pewności",
    title: "Przyszłość, która nie mówi o przyszłości",
    objectives: [
      "rozpoznawać Futur I jako przypuszczenie o teraźniejszości",
      "wyrażać przypuszczenia o przeszłości za pomocą Futur II",
      "odróżniać przypuszczenie od czynności zakończonej do przyszłego momentu",
      "dawkować pewność za pomocą wohl, schon, sicher, vermutlich"
    ],
    theory: [
      {
        h: "Werden do przypuszczeń",
        p: "Prawdziwą przyszłość niemiecki często wyraża czasem teraźniejszym i okolicznikiem czasu (<em>Morgen fliege ich nach Wien</em>). <strong>werden</strong> + bezokolicznik może wyrażać przyszłość, prognozę albo, gdy wskazuje na to kontekst, <strong>przypuszczenie o teraźniejszości</strong>: <em>Er wird wohl noch im Stau stehen. Es klingelt. Das wird der Postbote sein.</em> Przypuszczenie o <strong>przeszłości</strong> można wyrazić w <strong>Futur II</strong>, czyli <em>werden</em> + imiesłów II + <em>haben</em> albo <em>sein</em>: <em>Sie wird die Nachricht inzwischen gelesen haben.</em> Ten sam Futur II może oznaczać czynność, która będzie <strong>zakończona do przyszłego momentu</strong>: <em>Bis Ende des Monats werden wir die Studie abgeschlossen haben.</em>"
      },
      {
        h: "Wskazówki",
        p: "Żeby ustalić, które znaczenie masz przed sobą, patrz na moment i okoliczniki. Odniesienie do teraźniejszości (<em>jetzt, noch, gerade</em>) albo do przeszłości (<em>inzwischen, längst</em>) sugeruje przypuszczenie, ale to wskazówki, nie reguły; termin z <em>bis</em> zwykle wskazuje na czynność zakończoną w przyszłości, ale może też towarzyszyć ostrożnej prognozie (<em>Bis morgen wird er wohl angekommen sein</em>); odróżnienie prognozy, przypuszczenia i zobowiązania zależy od kontekstu. Okoliczniki dawkują pewność: <em>wohl</em> i <em>vermutlich</em> są ostrożne, <em>schon</em> w połączeniu z <em>werden</em> i bezokolicznikiem uspokaja (<em>Das wird schon klappen</em>), <em>sicher</em> i <em>bestimmt</em> ją wzmacniają."
      },
      {
        contrast: "Po polsku przypuszczenie o teraźniejszości i o przeszłości wyraża się zwykle zwykłym czasem i słowem takim jak <em>pewnie</em>, <em>chyba</em>, <em>z pewnością</em>: <em>Pewnie jeszcze śpi. Pewnie już przeczytał wiadomość.</em> Osobnej formy czasu na to nie ma, a przyszłość złożona w rodzaju <em>będzie spał</em> brzmi jako przypuszczenie raczej rzadko. Niemiecki może to robić inaczej: obok czasu teraźniejszego albo Perfekt z <em>wohl</em> czy <em>vermutlich</em> ma też Futur I i Futur II (<em>werden</em> + imiesłów z <em>haben</em> albo <em>sein</em>), ale to możliwości, nie formy obowiązkowe. Samo <em>Er wird zu Hause sein</em> bywa czytane także jako zwykła przyszłość, więc o odczycie decyduje kontekst, często z pomocą <em>wohl</em>, <em>schon</em> albo <em>sicher</em>. Polskie <em>do końca miesiąca skończymy badanie</em> (czasownik dokonany w czasie przyszłym) odpowiada niemieckiemu Futur II z <em>bis</em>, tylko że po niemiecku widać to w formie czasownika, a po polsku w jego aspekcie."
      },
      {
        trap: "Przypuszczenia o przeszłości nie wyrazisz samym Futur I: <em>Er wird gestern krank sein</em> nie działa, potrzebny jest Futur II, <em>Er wird gestern wohl krank gewesen sein</em>. A czasownik posiłkowy w bezokoliczniku czasu przeszłego jest taki sam jak w Perfekcie danego czasownika: <em>Sie wird abgereist sein</em> (ruch, <em>sein</em>), <em>Er wird es vergessen haben</em> (<em>haben</em>)."
      },
      {
        tip: "Zawsze zapytaj, do jakiego momentu odnosi się zdanie: teraźniejszość, przeszłość czy przyszły punkt z <em>bis</em>. Przy wyborze między Futur I (przypuszczenie o teraźniejszości), Futur II (przeszłość) i Futur II zakończenia pomaga właśnie moment, razem z kontekstem."
      }
    ],
    grammar: {
      title: "Futur I i II jako przypuszczenie",
      note: "<b>werden + bezokolicznik</b>: przyszłość albo, zależnie od kontekstu, przypuszczenie o teraźniejszości. <b>werden + imiesłów II + haben/sein</b>: przypuszczenie o przeszłości albo czynność zakończona do przyszłego momentu (z <i>bis</i>). Dawkowanie: <i>wohl, vermutlich</i> (ostrożnie), <i>schon</i> (uspokajająco), <i>sicher</i> (pewniej).",
      table: {
        head: ["konstrukcja", "znaczenie", "przykład"],
        rows: [
          ["werden + bezokolicznik", "przypuszczenie o teraźniejszości", "Er wird wohl noch im Stau stehen."],
          ["werden + imiesłów II + haben/sein", "przypuszczenie o przeszłości", "Sie wird die Nachricht inzwischen gelesen haben."],
          ["werden + imiesłów II + haben/sein z bis", "czynność zakończona do przyszłego momentu", "Bis Ende des Monats werden wir die Studie abgeschlossen haben."],
          ["werden + schon + bezokolicznik", "uspokojenie", "Das wird schon klappen."],
          ["czas teraźniejszy + okolicznik czasu", "przyszłość zaplanowana", "Morgen fliege ich nach Wien."]
        ]
      },
      examples: [
        { tr: "Światła są zgaszone, o tej porze pewnie już śpi.", note: "przypuszczenie o teraźniejszości z schon" },
        { tr: "Dzwonią. To pewnie listonosz.", note: "werden + sein: przypuszczenie" },
        { tr: "Pewnie jeszcze stoi w korku.", note: "werden + wohl + bezokolicznik" },
        { tr: "Pewnie już przeczytała wiadomość.", note: "Futur II: przypuszczenie o przeszłości" },
        { tr: "Najpóźniej do końca miesiąca zakończymy badanie.", note: "Futur II zakończenia z bis" },
        { tr: "Zobaczysz, wszystko się uda.", note: "werden + schon: uspokojenie" }
      ]
    },
    vocab: [
      "założenie, hipoteza",
      "podejrzenie",
      "prawdopodobieństwo",
      "punkt zaczepienia, przesłanka",
      "wątpliwość",
      "pewność",
      "przypuszczać, zakładać",
      "snuć domysły (styl prasowy)",
      "wychodzić z założenia",
      "prawdopodobnie",
      "z pewnością, na pewno",
      "tymczasem, już"
    ],
    exercises: [
      {
        q: "Na czacie w biurze czytasz trzy zdania o szefie. Które opisuje przyszłą czynność, a nie przypuszczenie?",
        opts: [
          "Der Chef wird nächste Woche aus dem Urlaub zurückkehren.",
          "Der Chef wird jetzt im Urlaub sein, er hat es ja angekündigt.",
          "Der Chef wird die Mail längst gelesen haben."
        ],
        why: "Pierwsze ma <i>nächste Woche</i>: zdarzenie, które nastąpi, więc przyszłość. W pozostałych moment to teraźniejszość (<i>jetzt</i>) albo przeszłość (<i>längst gelesen haben</i>): to przypuszczenia."
      },
      {
        q: "Sieć sklepów ogłasza: „Bis Jahresende werden wir alle Filialen modernisiert haben.” Co wyraża Futur II?",
        opts: [
          "czynność, która będzie zakończona do przyszłego momentu",
          "przypuszczenie o czymś, co już się stało",
          "stronę bierną czasu teraźniejszego"
        ],
        why: "<i>bis Jahresende</i> wyznacza przyszły punkt, najpóźniej do którego czynność będzie skończona, a w ogłoszeniu firma mówi o własnych planach, więc zdanie czyta się jako zapowiedź, nie domysł. Brak <i>wohl</i> sam tego nie dowodzi, bo Futur II bywa też prognozą: rozstrzyga kontekst."
      },
      {
        q: "Wiesz, że list dostarczono wczoraj, ale nie wiesz, czy adresat już go przeczytał. Które zdanie wyraża właściwe przypuszczenie?",
        opts: [
          "Er wird den Brief inzwischen gelesen haben.",
          "Er hat den Brief inzwischen gelesen.",
          "Er wird den Brief inzwischen lesen."
        ],
        why: "Potrzebny jest Futur II: <i>wird ... gelesen haben</i> patrzy wstecz na czynność, o której zakłada się, że już się odbyła. Drugie zdanie przedstawia czytanie jako pewny fakt, trzecie (Futur I) dotyczy tego, co dzieje się teraz albo dopiero nastąpi."
      },
      {
        q: "Dzwoni dzwonek i domyślasz się, że to kurier: „Es klingelt. Das ___ der Paketbote sein.”",
        hint: "forma werden w trzeciej osobie",
        why: "<b>wird</b>: <i>werden</i> + bezokolicznik (<i>sein</i>) to przypuszczenie o teraźniejszości, „to pewnie kurier”."
      },
      {
        q: "Dyrektorka obiecuje: „Bis nächsten Freitag werden wir das Gutachten fertiggestellt ___.”",
        hint: "Futur II: czasownik posiłkowy",
        why: "<b>haben</b>: Futur II zakończenia, czyli najpóźniej do piątku. <i>fertigstellen</i> tworzy Perfekt z <i>haben</i>."
      },
      {
        q: "Uzupełnij właściwymi formami.",
        tr: "Koledzy będą teraz pewnie na naradzie, a raport z pewnością już przeczytali.",
        why: "<i>werden</i> + <i>sitzen</i> albo <i>sein</i> dla teraźniejszości; dla przeszłości <i>werden</i> + <i>gelesen haben</i>. Gdy <i>den Bericht</i> stoi na pierwszym miejscu, czasownik odmieniony zostaje na drugim, a podmiot <i>sie</i> idzie za nim."
      },
      {
        q: "Które zdania wyrażają przypuszczenie, a nie prawdziwą przyszłość ani stronę bierną?",
        opts: [
          "Es klingelt an der Tür. Das wird der Nachbar sein.",
          "Er wird jetzt wohl schon zu Hause angekommen sein.",
          "Am Montag wird die Straße wieder freigegeben.",
          "Wir werden Sie über das Ergebnis informieren."
        ],
        why: "Pierwsze dwa dotyczą tego, co się teraz zakłada: Futur I z <i>sein</i> i Futur II (<i>angekommen sein</i>). Trzecie to strona bierna czasu teraźniejszego (<i>freigegeben</i>) o znaczeniu przyszłym, czwarte to prawdziwa przyszłość."
      },
      {
        q: "Ułóż przypuszczenie we właściwej kolejności.",
        tr: "Pewnie już przeczytała wiadomość.",
        why: "<i>Sie wird die Nachricht inzwischen gelesen haben.</i> Czasownik odmieniony stoi na drugim miejscu, <i>gelesen haben</i> zamyka zdanie; <i>inzwischen</i> może stać także przed <i>die Nachricht</i>."
      },
      {
        q: "Przetłumacz: „Kandydatki pewnie już dostały odpowiedź.” (die Bewerberinnen, die Antwort, erhalten)",
        why: "<i>Die Bewerberinnen werden die Antwort wohl schon erhalten haben</i>: Futur II z <i>wohl</i> (albo <i>vermutlich, wahrscheinlich</i>); <i>schon</i> albo <i>bereits</i> dla „już”, a okolicznik może stać przed <i>die Antwort</i> albo po nim."
      },
      {
        tr: "Pociąg z Monachium ma opóźnienie. Podróżni będą pewnie musieli czekać jeszcze pół godziny, a pociąg, na który mają przesiadkę, do tego czasu prawdopodobnie już odjedzie.",
        why: "Dwa przypuszczenia: <i>werden ... warten müssen</i> (ostrożna prognoza) i <i>wird ... abgefahren sein</i> (Futur II z <i>sein</i>: <i>abfahren</i> jest tu nieprzechodnie i oznacza odjazd pociągu)."
      },
      {
        tr: "Światło wciąż się pali, więc koledzy pewnie jeszcze pracują.",
        why: "<i>werden</i> + <i>wohl</i> + bezokolicznik: przypuszczenie o teraźniejszości, z <i>arbeiten</i> na końcu zdania."
      }
    ]
  },
  "lesson:c1-u04-l2": {
    theme: "Pewność, pogłoski i oświadczenia",
    title: "Er muss krank sein, sie soll reich sein",
    objectives: [
      "stopniować pewność za pomocą muss, dürfte, könnte, kann, mag",
      "przekazywać to, co mówią inni, za pomocą soll",
      "przekazywać to, co twierdzi sam podmiot, za pomocą will",
      "używać bezokolicznika czasu przeszłego do mówienia o przeszłości"
    ],
    theory: [
      {
        h: "Od powinności do pewności",
        p: "Czasowniki modalne mogą wyrażać nie nakaz ani pozwolenie, lecz to, na ile mówiący jest pewien, że coś jest prawdą. Często dzieje się tak z <em>sein</em>, <em>haben</em> albo bezokolicznikiem czasu przeszłego, ale o znaczeniu decyduje kontekst: <em>Er muss zu Hause sein</em> może być też nakazem, a <em>Er muss schlafen</em> wnioskiem. <strong>muss</strong> to wniosek prawie pewny (<em>Es muss geregnet haben, die Straße ist nass</em>), <strong>dürfte</strong> oznacza, że jest to prawdopodobne (<em>Er dürfte schon angekommen sein</em>), <strong>könnte</strong>, że możliwe (<em>Das könnte ein Irrtum sein</em>). <strong>kann nicht</strong> mówi, że to niemożliwe (<em>Das kann nicht stimmen</em>), a <strong>mag</strong> dopuszcza, zwykle na zasadzie ustępstwa (<em>Das mag sein, aber ich sehe es anders</em>)."
      },
      {
        h: "Przekazywanie: soll i will",
        p: "Dwa kolejne czasowniki modalne wskazują źródło. <strong>soll</strong> mówi, że twierdzą tak inni, a mówiący za to nie ręczy: <em>Der Zeuge soll den Täter gesehen haben</em>, „świadek miał widzieć sprawcę”. <strong>will</strong> mówi, że twierdzi tak sam podmiot, często z nutą sceptycyzmu: <em>Die Firma will alle Unterlagen rechtzeitig eingereicht haben</em>, „firma twierdzi, że złożyła wszystkie dokumenty na czas”. Dla przeszłości: czasownik modalny + imiesłów II + <em>haben</em> albo <em>sein</em>."
      },
      {
        contrast: "Polski ma na to kilka środków, ale każdy z nich pokrywa inny kawałek niemieckiego podziału. <em>Musi być chory</em> odpowiada <em>muss</em>, a <em>nie może być chory</em> odpowiada <em>kann nicht</em>. Pogłoskę zapowiadają <em>podobno</em>, <em>ponoć</em> albo forma <em>ma</em> (<em>minister ma być w Berlinie</em>, <em>świadek miał widzieć sprawcę</em>), czyli <em>soll</em>; to, co twierdzi sam podmiot, wprowadza <em>twierdzi, że</em> albo <em>utrzymuje, że</em> (<em>firma twierdzi, że złożyła dokumenty</em>), czyli <em>will</em>. Zdanie z <em>będzie</em> albo <em>pewnie</em> też da się odczytać jako przypuszczenie, ale polskie <em>powinien</em> ma kilka znaczeń: może oznaczać obowiązek, a w znaczeniu prawdopodobieństwa (<em>powinien już być w domu</em>) odpowiada <em>dürfte</em>. Różnica jest w sposobie wyrażania: niemiecki wybiera czasownik modalny i jego forma sama wskazuje źródło, a polski dodaje osobne słowo."
      },
      {
        trap: "Zaprzeczenie zmienia znaczenie. <em>Er muss nicht krank sein</em> znaczy „nie musi być chory”, czyli „nie jest powiedziane, że jest chory”, a nie „nie może być chory”. Na niemożliwość potrzeba <em>kann nicht</em>: <em>Er kann nicht krank sein, ich habe ihn eben gesehen</em>. Po polsku jest podobnie, <em>nie musi</em> i <em>nie może</em> to dwa różne zdania, więc nie myl ich w tłumaczeniu. A <em>dürfte</em> w znaczeniu prawdopodobieństwa nie myl z <em>darf</em>, które oznacza pozwolenie."
      },
      {
        tip: "Zanim przetłumaczysz czasownik modalny, spójrz na kontekst, a dopiero potem na bezokolicznik. Bezokolicznik czasu przeszłego (<em>gelesen haben, gewesen sein</em>) i <em>sein</em> często towarzyszą znaczeniu subiektywnemu, ale go nie przesądzają: <em>Du musst bis Freitag angekommen sein</em> to termin. Czasownik czynności też może być subiektywny: <em>Er muss schlafen</em> bywa wnioskiem („na pewno śpi”), a <em>Er soll kommen</em> zwykle poleceniem."
      }
    ],
    grammar: {
      title: "Czasowniki modalne w użyciu subiektywnym",
      note: "<b>muss</b>: prawie pewne. <b>dürfte</b>: prawdopodobne. <b>kann / könnte</b>: możliwe. <b>mag</b>: ustępstwo. <b>soll</b>: mówią inni. <b>will</b>: twierdzi podmiot. Przeszłość: czasownik modalny + imiesłów II + haben/sein.",
      table: {
        head: ["czasownik modalny", "pewność albo źródło", "przykład"],
        rows: [
          ["muss", "wniosek prawie pewny", "Er muss krank sein."],
          ["dürfte", "prawdopodobne", "Er dürfte krank sein."],
          ["kann / könnte", "możliwe", "Er könnte krank sein."],
          ["mag", "ustępstwo", "Das mag sein."],
          ["soll", "mówią inni", "Er soll krank sein."],
          ["will", "twierdzi podmiot", "Er will krank gewesen sein."]
        ]
      },
      examples: [
        { tr: "Musiało padać, ulica jest mokra.", note: "muss + bezokolicznik czasu przeszłego: wniosek" },
        { tr: "Pewnie już dotarł.", note: "dürfte: prawdopodobne" },
        { tr: "To może być pomyłka.", note: "könnte: możliwe" },
        { tr: "Świadek miał widzieć sprawcę.", note: "soll: mówią inni" },
        { tr: "Firma twierdzi, że złożyła wszystkie dokumenty na czas.", note: "will: twierdzi podmiot" },
        { tr: "Może i tak, ale ja widzę to inaczej.", note: "mag: ustępstwo" }
      ]
    },
    vocab: [
      "pogłoska, plotka",
      "świadek",
      "twierdzenie, zarzut",
      "źródło",
      "dowód",
      "oświadczenie, zeznanie",
      "twierdzić, utrzymywać",
      "zaprzeczać, kwestionować",
      "udokumentować, potwierdzić dowodami",
      "rzekomy, podobno (z powątpiewaniem)",
      "najwyraźniej, jak się okazuje",
      "jak się zdaje, z tego, co widać"
    ],
    exercises: [
      {
        q: "Nagłówek w gazecie: „Der Bürgermeister soll Geld angenommen haben.” Co przekazuje gazeta?",
        opts: [
          "że ktoś tak twierdzi, ale gazeta za to nie ręczy",
          "że to burmistrz oświadczył, że wziął pieniądze",
          "że gazeta ma dowody, że burmistrz wziął pieniądze"
        ],
        why: "<b>soll</b> + bezokolicznik czasu przeszłego przekazuje to, co mówią inni, bez brania odpowiedzialności. Gdyby twierdził tak burmistrz, potrzebne byłoby <i>will</i>, a dla pewności wystarczyłby Perfekt (<i>hat Geld angenommen</i>)."
      },
      {
        q: "Dziennik pisze: „Der Bürgermeister will das Geld nie angenommen haben.” Kto twierdzi, że nigdy go nie wziął?",
        opts: [
          "sam burmistrz; piszący pozostaje neutralny albo sceptyczny",
          "jacyś świadkowie; gazeta za to nie ręczy",
          "nikt: to zamiar burmistrza, by nigdy nie przyjmować pieniędzy"
        ],
        why: "<b>will</b> + bezokolicznik czasu przeszłego: twierdzenie pochodzi od samego podmiotu. Dla „podobno” byłoby <i>soll</i>; znaczenie „ma zamiar” nie jest możliwe z bezokolicznikiem czasu przeszłego."
      },
      {
        q: "Biegły rewident komentuje błąd w rozliczeniu i starannie dobiera czasownik modalny. Która kolejność idzie od największej do najmniejszej pewności?",
        opts: [
          "Das muss ein Irrtum sein. - Das dürfte ein Irrtum sein. - Das könnte ein Irrtum sein.",
          "Das könnte ein Irrtum sein. - Das dürfte ein Irrtum sein. - Das muss ein Irrtum sein.",
          "Das dürfte ein Irrtum sein. - Das muss ein Irrtum sein. - Das könnte ein Irrtum sein."
        ],
        why: "<b>muss</b> to wniosek prawie pewny, <b>dürfte</b> oznacza prawdopodobieństwo, <b>könnte</b> zwykłą możliwość. Druga kolejność jest odwrotna, trzecia zamienia <i>muss</i> z <i>dürfte</i>."
      },
      {
        q: "W serwisie radiowym: „Laut Augenzeugen ___ der Täter in einem roten Auto geflohen sein.”",
        hint: "czasownik modalny dla tego, co mówią inni",
        why: "<b>soll</b>: <i>laut Augenzeugen</i> wprowadza źródło zewnętrzne, a mówiący za to nie ręczy."
      },
      {
        q: "Mężczyzna się tłumaczy: „Der Zeuge ___ den Mann nie zuvor gesehen haben, das behauptet er zumindest.”",
        hint: "twierdzi tak on sam",
        why: "<b>will</b>: <i>das behauptet er zumindest</i> pokazuje, że twierdzenie pochodzi od podmiotu."
      },
      {
        q: "Uzupełnij za pomocą muss, soll albo will.",
        tr: "Rolety są opuszczone, a skrzynka na listy pełna: rodzina Albers musi być na wakacjach, trudno myśleć inaczej. Według sąsiada miała wyjechać już dwa tygodnie temu, ale dozorca twierdzi, że niczego nie zauważył.",
        why: "<i>muss</i>: wniosek z poszlak. <i>soll</i>: mówi to sąsiad (<i>einem Nachbarn zufolge</i>). <i>will</i>: twierdzi to sam dozorca. Wskazówka <i>nach eigener Aussage</i> (według własnych słów) sprawia, że pasuje tylko <i>will</i>."
      },
      {
        q: "Połącz każde zdanie z jego znaczeniem.",
        pairs: [
          "wnioskuję, że prawie na pewno jest chory",
          "prawdopodobnie jest chory",
          "podobno jest chory",
          "twierdzi, że był chory"
        ]
      },
      {
        q: "Ułóż wiadomość we właściwej kolejności.",
        tr: "Minister miał zniszczyć dokumenty.",
        why: "<i>Der Minister soll die Akten vernichtet haben.</i> <i>soll</i> na drugim miejscu, bezokolicznik czasu przeszłego na końcu."
      },
      {
        q: "Przetłumacz: „Podobno ministra opuściła kraj już wczoraj.” (die Ministerin, das Land, verlassen, sollen)",
        why: "<i>Die Ministerin soll das Land schon gestern verlassen haben</i>: <i>soll</i> oddaje „podobno”, a bezokolicznik czasu przeszłego <i>verlassen haben</i> stoi na końcu; <i>schon</i> albo <i>bereits</i> dla „już”."
      },
      {
        tr: "Przedsiębiorca miał zdefraudować kilka milionów euro. Sam twierdzi, że nic o tym nie wiedział, a jego adwokat prawdopodobnie jutro odrzuci zarzuty.",
        why: "Trzy czasowniki modalne, trzy źródła: <i>soll</i> (mówią inni), <i>will</i> (twierdzi on sam), <i>dürfte</i> (prawdopodobne przypuszczenie)."
      },
      {
        tr: "Podobno jest chory, ale pewnie to wymówka.",
        why: "<i>soll</i> przekazuje pogłoskę, <i>dürfte</i> wyraża ocenę mówiącego."
      }
    ]
  },
  "lesson:c1-u04-l3": {
    theme: "Partykuły i niuanse",
    title: "wohl, etwa, halt, eben",
    objectives: [
      "używać wohl do złagodzenia twierdzenia w przypuszczenie",
      "rozpoznawać ja jako sygnał rzeczy znanej albo zaskakującej",
      "odróżniać etwa jako partykułę od etwa „około”",
      "wyrażać rezygnację za pomocą halt i eben oraz dobierać właściwy rejestr"
    ],
    theory: [
      {
        h: "Małe słowa, wielkie różnice",
        p: "Partykuł modalnych nie tłumaczy się słowo po słowie: pokazują, jak mówiący widzi to, co mówi. <strong>wohl</strong> zamienia twierdzenie w przypuszczenie (<em>Er ist wohl krank</em>, „pewnie jest chory”). <strong>ja</strong> przedstawia fakt jako znany obu stronom albo zaskakujący (<em>Du weißt ja, wie lange das dauert. Das ist ja ein Ding!</em>). <strong>etwa</strong> w pytaniu rozstrzygnięcia wyraża zaskoczenie albo podejrzenie, a mówiący spodziewa się odpowiedzi „nie” (<em>Hast du etwa den Schlüssel vergessen?</em>, „czyżbyś zapomniał klucza?”). <strong>halt</strong> i <strong>eben</strong> mówią, że czegoś nie da się zmienić (<em>Dann nehmen wir halt ein Taxi. Da kann man eben nichts machen.</em>)."
      },
      {
        h: "Miejsce i rejestr",
        p: "Partykuły zwykle stoją bez akcentu po czasowniku i zaimkach, przed nową informacją (<em>Er wird wohl noch schlafen</em>), ale to tendencja: miejsce zależy też od akcentu, funkcji informacyjnej i kontekstu (<em>Das hat ja er gesagt</em> jest możliwe, gdy <em>er</em> jest kontrastywne). Są typowe dla mowy, czatów i dialogów: w tekście oficjalnym, takim jak sprawozdanie albo list do klienta, zwykle się ich unika, choć zależy to od rodzaju tekstu. <em>halt</em> jest bardziej potoczne i słychać je głównie na południu, <em>eben</em> jest bardziej neutralne, ale w większości przypadków są wymienne."
      },
      {
        contrast: "Polski ma dla tych niuansów własne słowa, tylko że nie pokrywają się z niemieckimi jeden do jednego: <em>wohl</em> to najczęściej <em>chyba</em> albo <em>pewnie</em>, <em>ja</em> to <em>przecież</em> (<em>Przecież wiesz, ile to trwa</em>), <em>etwa</em> w pytaniu to <em>czyżby</em>, <em>czy aby nie</em> albo <em>chyba nie</em>, a <em>halt</em> i <em>eben</em> to <em>trudno</em>, <em>no cóż</em>, <em>po prostu</em> (<em>Dann warten wir halt</em> to „no to poczekamy, trudno”). Rolę niemieckich partykuł często pełni po polsku też intonacja i szyk zdania. Żadna z pięciu nie ma stałego odpowiednika: uczy się funkcji."
      },
      {
        trap: "<em>etwa</em> ma dwa życia. Przed liczbą to przysłówek, <em>etwa zwei Stunden</em>, „około dwóch godzin”. W pytaniu z zaskoczeniem to partykuła, <em>Ist er etwa krank?</em>. Także <em>wohl</em> bywa pełnoprawnym przysłówkiem: <em>Ich fühle mich hier wohl</em> znaczy „dobrze się tu czuję”. Po polsku to dwa różne wyrazy (<em>około</em> i <em>czyżby</em>), więc nie szukaj jednego odpowiednika na oba znaczenia."
      },
      {
        tip: "Usuń partykułę i przeczytaj jeszcze raz: zdanie nadal jest poprawne, ale traci stanowisko mówiącego. Potem wstaw ją z powrotem i posłuchaj, jak się zmienia: <em>Das ist halt so</em> (rezygnacja), <em>Das ist ja so</em> (już to wiesz), <em>Das ist wohl so</em> (chyba tak)."
      }
    ],
    grammar: {
      title: "Partykuły modalne: wohl, ja, etwa, halt, eben",
      note: "<b>wohl</b>: przypuszczenie. <b>ja</b>: rzecz znana albo zaskakująca. <b>etwa</b>: w pytaniach rozstrzygnięcia, zaskoczenie albo podejrzenie. <b>halt / eben</b>: rezygnacja. Rejestr: mowa, nie styl oficjalny.",
      table: {
        head: ["partykuła", "efekt", "przykład"],
        rows: [
          ["wohl", "przypuszczenie", "Er wird wohl noch schlafen."],
          ["ja", "rzecz znana albo zaskakująca", "Du weißt ja, wie lange das dauert."],
          ["etwa", "zaskoczenie albo podejrzenie w pytaniu, spodziewana odpowiedź „nie”", "Hast du etwa den Schlüssel vergessen?"],
          ["halt, eben", "rezygnacja", "Da kann man eben nichts machen."],
          ["rejestr", "mowa, unikać w oficjalnym piśmie", "Das ist halt so."]
        ]
      },
      examples: [
        { tr: "Pewnie jeszcze śpi.", note: "wohl: przypuszczenie" },
        { tr: "Przecież wiesz, ile to trwa.", note: "ja: rzecz znana obu stronom" },
        { tr: "Chyba to nie wszystko?", note: "etwa: zaskoczenie, spodziewana odpowiedź „nie”" },
        { tr: "Autobus odjechał, no to pójdziemy pieszo, trudno.", note: "halt: rezygnacja" },
        { tr: "Nic na to nie poradzisz.", note: "eben: rezygnacja" },
        { tr: "Czyżbyś zapomniał klucza?", note: "etwa: podejrzenie w pytaniu rozstrzygnięcia" }
      ]
    },
    vocab: [
      "podtekst, ton (zdania)",
      "niuans, odcień",
      "oczekiwanie",
      "zaskoczenie",
      "rezygnacja, pogodzenie się z losem",
      "oczywistość, rzecz naturalna",
      "dać do zrozumienia",
      "zarzucać, wytykać",
      "znosić, pogodzić się (z czymś)",
      "akurat (z odcieniem zaskoczenia lub irytacji)",
      "i tak, w każdym razie",
      "po prostu, zwyczajnie"
    ],
    exercises: [
      {
        q: "Koleżanka pyta cię z zaskoczeniem: „Hast du etwa schon gekündigt?” Co wyraża etwa?",
        opts: [
          "zaskoczenie albo podejrzenie: pytający spodziewa się odpowiedzi „nie”",
          "neutralne pytanie: pytający niczego się nie spodziewa",
          "uprzejmą prośbę o potwierdzenie: pytający spodziewa się odpowiedzi „tak”"
        ],
        why: "W pytaniu rozstrzygnięcia <b>etwa</b> sygnalizuje, że mówiący nie spodziewa się odpowiedzi „tak” i uważa sprawę za zaskakującą albo niepokojącą („czyżbyś już złożył wypowiedzenie?”)."
      },
      {
        q: "Przez okno widzisz samochód szefa na parkingu, ale jeszcze go nie spotkałeś. Którym zdaniem robisz przypuszczenie?",
        opts: [
          "Der Chef ist wohl schon da.",
          "Der Chef ist ja schon da!",
          "Der Chef ist halt schon da."
        ],
        why: "<b>wohl</b> zamienia twierdzenie w przypuszczenie („pewnie już jest”). <i>ja</i> przedstawiałoby fakt jako pewny i zaskakujący, <i>halt</i> jako coś, czego nie da się zmienić."
      },
      {
        q: "Piszesz oficjalne sprawozdanie dla klienta i chcesz powiedzieć, że połączenie kolejowe jest niewystarczające. Które zdanie pasuje do rejestru?",
        opts: [
          "Die Zugverbindung ist leider unzureichend.",
          "Die Zugverbindung ist halt schlecht.",
          "Die Zugverbindung ist eben nicht so toll."
        ],
        why: "Partykuły <i>halt</i> i <i>eben</i>, wraz ze słownictwem takim jak <i>schlecht</i> i <i>nicht so toll</i>, należą do mowy: sprawozdanie ich unika i używa neutralnego słownictwa, jak <i>unzureichend</i>."
      },
      {
        q: "Pociąg został odwołany i szukasz alternatywy z rezygnacją: „Der Zug fällt aus? Dann nehmen wir ___ ein Taxi.”",
        hint: "„trudno”: halt albo eben",
        why: "<b>halt</b> albo <b>eben</b>: „trudno, weźmiemy taksówkę”."
      },
      {
        q: "W obliczu zaskakującej sytuacji: „Das ist ___ ein Ding!”",
        hint: "partykuła zaskoczenia",
        why: "<b>ja</b> wyraża zaskoczenie: <i>Das ist ja ein Ding!</i> to stały okrzyk, „no, to dopiero!”."
      },
      {
        q: "Uzupełnij dialog właściwymi partykułami.",
        tr: "„Gdzie się podziewa Jonas?” „Pewnie stoi w korku.” „Czyżby znowu spóźnił autobus?” „Przecież wiesz, jaki jest: nic na to nie poradzisz.”",
        why: "<i>wohl</i> dla przypuszczenia, <i>etwa</i> dla pytania z podejrzeniem, <i>ja</i> dla tego, co obaj wiedzą, <i>halt</i> albo <i>eben</i> dla rezygnacji. W drugiej luce pasuje też <i>denn</i>, w trzeciej także <i>doch</i>."
      },
      {
        q: "W których zdaniach etwa jest partykułą modalną i nie znaczy „około”?",
        opts: [
          "Bist du etwa schon fertig?",
          "Ist er etwa krank?",
          "Das Seminar dauert etwa zwei Stunden.",
          "Wir treffen uns in etwa einer Stunde."
        ],
        why: "W pierwszych dwóch <b>etwa</b> stoi w pytaniu rozstrzygnięcia i sygnalizuje zaskoczenie albo podejrzenie. W ostatnich dwóch jest przysłówkiem i znaczy „około”."
      },
      {
        q: "Ułóż pytanie we właściwej kolejności.",
        tr: "Czyżbyś znowu zapomniał klucza?",
        why: "<i>Hast du etwa schon wieder den Schlüssel vergessen?</i> Pytanie rozstrzygnięcia: czasownik otwiera zdanie, a <i>etwa</i> idzie za podmiotem; może stać także po <i>den Schlüssel</i>."
      },
      {
        q: "Przetłumacz: „Szef pewnie jeszcze jest na naradzie, no to poczekamy, trudno.” (der Chef, die Besprechung, warten; dla „pewnie” użyj wohl)",
        why: "<i>Der Chef wird wohl noch in einer Besprechung sein, dann warten wir eben</i>: <i>wohl</i> dla „pewnie”, <i>eben</i> albo <i>halt</i> dla „trudno”. Pasuje też <i>ist wohl</i> i spójniki takie jak <i>also</i> albo <i>da</i>."
      },
      {
        tr: "Chyba Paul jest chory. Przecież zwykle nigdy się nie spóźnia, a dziś pewnie jeszcze leży w łóżku. Czyżby miał grypę? No cóż, to zaczniemy zebranie bez niego, trudno.",
        why: "Cztery partykuły w kilku zdaniach: <i>ja</i> (wiemy o tym), <i>wohl</i> (przypuszczenie), <i>etwa</i> (podejrzenie), <i>eben</i> (rezygnacja)."
      },
      {
        tr: "No to poczekamy, trudno, autobus przecież niedługo przyjedzie.",
        why: "<i>eben</i> (trudno) i <i>ja</i> (już to wiesz) w jednym zdaniu."
      }
    ]
  },
  "lesson:c1-u04-test": {
    theme: "Sprawdzian",
    title: "Test: Pewnie jest zmęczony",
    objectives: [
      "sprawdzić jednostkę: Futur jako przypuszczenie, czasowniki modalne w użyciu subiektywnym i partykuły modalne"
    ],
    theory: [
      {
        p: "Dziesięć pytań z całej jednostki. Zaliczasz przy 70%. Nie zaglądaj do lekcji w trakcie odpowiadania: jeśli czegoś nie pamiętasz, lepiej wrócić i powtórzyć."
      }
    ],
    exercises: [
      {
        q: "Kolega czeka na odpowiedź: „Die Sekretärin ___ den Brief inzwischen abgeschickt haben.”",
        hint: "Futur II: forma werden",
        why: "<b>wird</b>: przypuszczenie o przeszłości w Futur II, <i>wird ... abgeschickt haben</i>."
      },
      {
        q: "Z artykułu: „Laut einem Zeitungsbericht ___ der Konzern die Löhne gekürzt haben.”",
        hint: "czasownik modalny dla przekazywanej pogłoski",
        why: "<b>soll</b>: <i>laut einem Zeitungsbericht</i> wprowadza źródło zewnętrzne, piszący za to nie ręczy."
      },
      {
        q: "Kolega patrzy na ciebie podejrzliwie: „Hast du ___ schon wieder die Kaffeekasse geleert?”",
        hint: "„czyżbyś...”",
        why: "<b>etwa</b>: podejrzenie w pytaniu rozstrzygnięcia, spodziewana odpowiedź „nie”. Pasuje też <i>denn</i>, bardziej neutralne."
      },
      {
        q: "Rzeczoznawca pisze: „Der Brand dürfte durch einen Kurzschluss entstanden sein.” Na ile jest pewny?",
        opts: [
          "uważa to za prawdopodobne, ale nie pewne",
          "jest absolutnie pewny",
          "tylko przekazuje to, co mówią inni"
        ],
        why: "<b>dürfte</b> wyraża prawdopodobieństwo. <i>muss</i> wyrażałoby wniosek bardzo prawdopodobny, ale to nadal nie pewność absolutna, a dla przekazania pogłosek użyłoby się <i>soll</i>."
      },
      {
        q: "Kolega wchodzi do biura i widzi, że praca jest już zrobiona: „Du hast ja schon alles erledigt!” Co wyraża ja?",
        opts: [
          "zaskoczone stwierdzenie faktu, który widać",
          "przypuszczenie o czymś, czego nie widać",
          "pytanie, po którym spodziewana jest odpowiedź przecząca"
        ],
        why: "<b>ja</b> przedstawia fakt jako oczywisty i zaskakujący. Przypuszczeniem byłoby <i>wohl</i>, pytaniem ze spodziewanym „nie” <i>etwa</i>."
      },
      {
        q: "Kolega mówi: „Er kann nicht krank sein, ich habe ihn eben noch gesehen.” Co to znaczy?",
        opts: [
          "to niemożliwe, żeby był chory",
          "niekoniecznie jest chory",
          "nie wolno mu być chorym"
        ],
        why: "<b>kann nicht</b> to niemożliwość. „Niekoniecznie jest chory” byłoby <i>muss nicht krank sein</i>."
      },
      {
        q: "Uzupełnij za pomocą soll, will albo werden.",
        tr: "Według artykułu minister miał zniszczyć dokumenty. On sam twierdzi, że nic o tym nie wiedział, a jego rzecznik obiecuje: najpóźniej w piątek wszystko wyjaśnimy.",
        why: "<i>soll</i>: mówi to artykuł. <i>will</i>: twierdzi to sam minister. <i>werden</i>: Futur II zakończenia z <i>bis Freitag</i>."
      },
      {
        q: "Które zdania wyrażają przypuszczenie, a nie obowiązek ani pozwolenie?",
        opts: [
          "Sie dürfte inzwischen zu Hause sein.",
          "Das muss ein Irrtum sein.",
          "Du musst um acht da sein.",
          "Hier darf man nicht rauchen."
        ],
        why: "Pierwsze dwa oceniają prawdopodobieństwo: <i>dürfte</i> i <i>muss</i> z <i>sein</i>. W ostatnich dwóch czasowniki modalne wyrażają obowiązek i zakaz."
      },
      {
        tr: "Mecz wczoraj odwołano. Boisko miało być pod wodą, ale trener twierdzi, że nic o tym nie wiedział. Kibice będą pewnie rozczarowani, ale w piłce nożnej tak już jest, trudno.",
        why: "<i>soll</i> (mówią inni), <i>will</i> (twierdzi on sam), <i>wohl</i> (przypuszczenie) i <i>eben</i> (rezygnacja)."
      },
      {
        tr: "To nie może być prawda, pewnie się pomylił.",
        why: "<i>kann nicht</i> dla niemożliwości, <i>dürfte</i> + bezokolicznik czasu przeszłego dla prawdopodobnego przypuszczenia o przeszłości."
      }
    ]
  }
});
