/* ============================================================
   Teksty w języku ucznia (pl) do data/core/b1-01.js, jednostka b1-u01.
   Klucze odsyłają do id warstwy neutralnej ; tablice łączą się po
   indeksie, więc ich długość musi zgadzać się z core.
   Sprawdza to scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("pl", {
  "unit:b1-u01": {
    title: "Gdybym był tobą",
    grammarNote: "Konjunktiv II w czasie teraźniejszym (wäre, hätte, würde + bezokolicznik, czasowniki modalne) · okres warunkowy realny i nierealny · Ich finde, dass ... i Meiner Meinung nach ... · obwohl i trotzdem"
  },
  "lesson:b1-u01-l1": {
    theme: "Życzenia i rady",
    title: "Byłbym, miałbym, zrobiłbym",
    objectives: [
      "wyrazić życzenie lub przypuszczenie za pomocą wäre i hätte",
      "używać würde + bezokolicznik, który przy większości czasowników zastępuje formę własną",
      "dać radę zwrotem An deiner Stelle würde ich ...",
      "składać propozycje i prośby z könnte"
    ],
    theory: [
      {
        h: "Konjunktiv II od sein i haben",
        p: "<strong>Konjunktiv II</strong> służy do życzeń, przypuszczeń, próśb i rad. Dla <em>sein</em> i <em>haben</em> wychodzi się od Präteritum (<em>war, hatte</em>), dodaje <strong>Umlaut</strong> i końcówki <em>-e, -st, -e, -en, -t, -en</em> (przy <em>haben</em>: <em>-e, -est, -e, -en, -et, -en</em>): <em>ich wäre, du wärst, wir wären</em> oraz <em>ich hätte, du hättest, wir hätten</em>. <em>Ich wäre gern Ärztin</em> (chciałabym być lekarką), <em>Wir hätten gern mehr Zeit</em> (chcielibyśmy mieć więcej czasu). To nie jest czas przeszły: mówi o tym, czego się chce, co się sobie wyobraża albo co jest możliwe teraz lub później."
      },
      {
        h: "würde + bezokolicznik",
        p: "Z prawie wszystkimi pozostałymi czasownikami używa się <strong>würde</strong> + <strong>bezokolicznik na końcu</strong>: <em>Ich würde gern im Ausland arbeiten. Wir würden gern am Meer wohnen.</em> <em>Würde</em> odmienia się tak: <em>ich würde, du würdest, er würde, wir würden, ihr würdet, sie würden</em>. Niektóre czasowniki modalne mają też własną formę: <em>ich könnte</em> (mógłbym), <em>ich müsste</em> (musiałbym). Radę często daje się tak: <em>An deiner Stelle würde ich umziehen</em> (na twoim miejscu przeprowadziłbym się)."
      },
      {
        contrast: "Polski ma tryb przypuszczający z cząstką <em>-by</em>: <em>byłbym, miałbym, poszedłbym, zrobiłbym</em>. Ta sama cząstka stoi przy każdym czasowniku, więc nie trzeba wybierać między formami. W niemieckim jest inaczej: wprawdzie każdy czasownik ma własną formę Konjunktiv II, ale w codziennej mowie słychać ją głównie przy kilku bardzo częstych (<em>wäre, hätte, könnte, müsste</em>); przy pozostałych często brzmi tak samo jak Präteritum albo staroświecko, więc mówi się <em>würde</em> + bezokolicznik: <em>poszedłbym</em> to <em>würde gehen</em>, <em>zrobiłbym</em> to <em>würde machen</em>. Niemiecka forma nie zmienia się też według rodzaju mówiącego: polskie <em>byłbym / byłabym</em> to po niemiecku jedno <em>ich wäre</em>. I jeszcze jedno: Konjunktiv II to tryb, nie czas. <em>Ich wäre</em> odpowiada <em>byłbym</em> i dotyczy teraźniejszości albo przyszłości. Partykuła <em>gern</em> to zwykle <em>chętnie</em> (<em>Ich arbeite gern</em> = <em>chętnie pracuję</em>, lubię pracować). W życzeniach z <em>ich hätte gern / ich wäre gern</em> naturalnym tłumaczeniem jest <em>chciałbym / chciałabym mieć / być</em> (<em>Ich hätte gern ...</em> = <em>chciałbym mieć ...</em>)."
      },
      {
        trap: "Nie mylić <em>würde</em> z <em>wurde</em>: <em>wurde</em> (bez Umlautu) to Präteritum od <em>werden</em> («stał się»), <em>würde</em> (z Umlautem) to tryb przypuszczający. Jedna litera zmienia znaczenie i słychać to: <em>ü</em> jest zaokrąglone. Przy <em>sein</em> i <em>haben</em> zwykle woli się <em>wäre</em> i <em>hätte</em> od «würde sein» i «würde haben»: <em>Das wäre schön</em> to forma najczęściej słyszana; «Das würde schön sein» jest poprawne, ale cięższe."
      },
      {
        tip: "Żeby grzecznie dać radę, użyj <em>An deiner Stelle würde ich ...</em> zamiast trybu rozkazującego: brzmi łagodniej. A do życzenia: <em>Ich hätte gern</em> + dopełnienie (<em>Ich hätte gern mehr Zeit</em>), <em>Ich wäre gern</em> + przymiotnik albo nazwa roli (<em>Ich wäre gern glücklich, Ich wäre gern Pilot</em>)."
      }
    ],
    grammar: {
      title: "Konjunktiv II: wäre, hätte, würde",
      note: "<b>wäre</b> i <b>hätte</b> dla sein i haben, <b>könnte</b> i <b>müsste</b> dla czasowników modalnych, <b>würde</b> + bezokolicznik na końcu dla prawie wszystkich pozostałych.",
      table: {
        head: ["czasownik", "ich", "du", "wir"],
        rows: [
          ["sein", "wäre", "wärst", "wären"],
          ["haben", "hätte", "hättest", "hätten"],
          ["werden (würde + bezokolicznik)", "würde", "würdest", "würden"],
          ["können", "könnte", "könntest", "könnten"]
        ]
      },
      examples: [
        { tr: "Chciałabym być lekarką.", note: "wäre + gern: życzenie" },
        { tr: "Chcielibyśmy mieć więcej czasu.", note: "hätte + gern: życzenie" },
        { tr: "Na twoim miejscu przeprowadziłbym się.", note: "An deiner Stelle: würde + bezokolicznik na końcu" },
        { tr: "Mógłbym ci jutro pomóc.", note: "könnte: własna forma czasownika modalnego" },
        { tr: "To byłby dobry pomysł.", note: "wäre zamiast «würde sein»" },
        { tr: "Chciałbym pracować za granicą.", note: "würde + gern + bezokolicznik na końcu" }
      ]
    },
    vocab: [
      "życzenie, pragnienie",
      "rada",
      "pomysł",
      "zagranica (im Ausland: za granicą)",
      "wymarzony zawód",
      "podróż",
      "morze",
      "wolność",
      "życzyć sobie (sich etwas wünschen: życzyć sobie czegoś)",
      "marzyć",
      "proponować",
      "możliwy"
    ],
    exercises: [
      {
        tr: "Konjunktiv II od sein, wszystkie osoby.",
        why: "<i>Wäre, wärst, wäre, wären, wärt, wären</i>: od Präteritum <i>war</i>, z Umlautem i końcówkami Konjunktiv II. Pierwsza i trzecia osoba liczby pojedynczej brzmią tak samo."
      },
      {
        tr: "Konjunktiv II od haben, wszystkie osoby.",
        why: "<i>Hätte, hättest, hätte, hätten, hättet, hätten</i>: od Präteritum <i>hatte</i>, z Umlautem."
      },
      {
        tr: "Konjunktiv II od werden, wszystkie osoby (forma używana jako czasownik posiłkowy).",
        why: "<i>Würde, würdest, würde, würden, würdet, würden</i>: to czasownik posiłkowy trybu przypuszczającego, po którym bezokolicznik stoi na końcu."
      },
      {
        q: "Jak powiesz «Chciałbym być lekarzem»?",
        opts: [
          "Ich wäre gern Arzt.",
          "Ich war gern Arzt.",
          "Ich werde gern Arzt."
        ],
        why: "Życzenie wymaga Konjunktiv II: <b>wäre</b>. <i>War</i> to Präteritum (byłem), <i>werde</i> to czas przyszły albo «stawać się»."
      },
      {
        q: "Które zdanie znaczy «Na twoim miejscu przeprowadziłbym się»?",
        opts: [
          "An deiner Stelle würde ich umziehen.",
          "An deiner Stelle werde ich umziehen.",
          "An deiner Stelle wurde ich umziehen."
        ],
        why: "<b>würde</b> (z Umlautem) to tryb przypuszczający. <i>Werde</i> to czas przyszły («przeprowadzę się»), <i>wurde</i> to Präteritum od <i>werden</i>, w tym zdaniu bez właściwego sensu."
      },
      {
        q: "Uzupełnij Konjunktiv II od haben: «Ich ___ gern ein Haus am Meer.» (chciałbym mieć)",
        hint: "Konjunktiv II od haben, ich",
        why: "<b>Hätte</b>: <i>Ich hätte gern ein Haus am Meer</i> wyraża życzenie, z Umlautem na <i>ä</i>."
      },
      {
        q: "Uzupełnij Konjunktiv II od sein: «Das ___ eine gute Idee.» (byłoby)",
        hint: "Konjunktiv II od sein",
        why: "<b>Wäre</b>: przy <i>sein</i> woli się formę własną od «würde sein»."
      },
      {
        q: "Uzupełnij zdanie (w pierwszej luce użyj würde).",
        tr: "Chciałbym pracować za granicą.",
        why: "<i>Ich würde gern im Ausland arbeiten</i>: <i>würde</i> na drugim miejscu, bezokolicznik <i>arbeiten</i> na końcu."
      },
      {
        q: "Przetłumacz: «Na twoim miejscu poszedłbym do lekarza.» (użyj würde)",
        why: "<i>An deiner Stelle würde ich zum Arzt gehen</i>: <i>würde</i> na drugim miejscu, <i>gehen</i> na końcu. Można też powiedzieć <i>Ich würde an deiner Stelle zum Arzt gehen</i>."
      },
      {
        tr: "Chciałbym być pilotem i pracować za granicą. To byłby mój wymarzony zawód.",
        why: "W <i>würde</i> <b>ü</b> jest zaokrąglone (usta jak do <i>u</i>, język jak do <i>i</i>); w <i>Ausland</i> <b>au</b> czyta się [aʊ], jak w polskim «auto»; w <i>Traumberuf</i> <b>au</b> to ta sama dyftongowa głoska."
      },
      {
        tr: "Na twoim miejscu wybrałbym się w podróż. To byłby dobry pomysł.",
        why: "W <i>Reise</i> <b>ei</b> czyta się [aɪ], jak w polskim «aj»; w <i>wäre</i> <b>w</b> czyta się [v], tak jak po polsku; <i>Stelle</i> zaczyna się od <b>st</b> = [ʃt], jak polskie «szt»."
      }
    ]
  },
  "lesson:b1-u01-l2": {
    theme: "Gdybym mógł ...",
    title: "Gdybym miał czas, ...",
    objectives: [
      "sformułować nierealne przypuszczenie w teraźniejszości za pomocą wenn + Konjunktiv II",
      "odróżnić warunek realny (wenn + czas teraźniejszy) od nierealnego",
      "ustawić czasownik na końcu zdania z wenn i na pierwszym miejscu w zdaniu głównym, które po nim następuje",
      "dać radę zwrotem Wenn ich du wäre, ..."
    ],
    theory: [
      {
        h: "Warunek realny i nierealny",
        p: "<strong>Wenn</strong> znaczy «jeśli, gdy». Jeśli warunek jest <strong>możliwy</strong> albo zwyczajowy, niemiecki zwykle używa <strong>czasu teraźniejszego</strong> w obu zdaniach: <em>Wenn es morgen regnet, bleiben wir zu Hause. Wenn du Hunger hast, kannst du etwas essen.</em> Jeśli warunek jest <strong>nierealny</strong> albo mało prawdopodobny (nie jest prawdziwy teraz albo to coś, co sobie wyobrażamy), używa się <strong>Konjunktiv II</strong>: <em>Wenn ich Zeit hätte, würde ich mehr reisen. Wenn ich reich wäre, würde ich ein Haus kaufen.</em>"
      },
      {
        h: "Gdzie stoi czasownik",
        p: "Po <em>wenn</em> odmieniony czasownik idzie <strong>na koniec</strong> zdania podrzędnego, a przecinek oddziela je od głównego. Jeśli zdanie z <em>wenn</em> stoi pierwsze, zdanie główne <strong>zaczyna się od czasownika</strong>: <em>Wenn ich Zeit hätte, würde ich mehr reisen.</em> Jeśli stoi po nim, szyk zdania głównego się nie zmienia: <em>Ich würde mehr reisen, wenn ich Zeit hätte.</em> Obie konstrukcje mogą stać w obu zdaniach: <em>Wenn ich weniger arbeiten würde, hätte ich mehr Zeit</em> jest tak samo poprawne jak <em>Wenn ich Zeit hätte, würde ich mehr reisen</em>. Przy <em>sein</em>, <em>haben</em> i czasownikach modalnych zwykle woli się formę własną (<em>wäre, hätte, könnte</em>), przy pozostałych często <em>würde</em> + bezokolicznik."
      },
      {
        h: "Wenn ich du wäre, ...",
        p: "Zwrot <strong>Wenn ich du wäre, würde ich ...</strong> odpowiada polskiemu «gdybym był tobą» i służy do dawania rady: <em>Wenn ich du wäre, würde ich ihn anrufen.</em> To dłuższa wersja <em>An deiner Stelle würde ich ...</em> z poprzedniej lekcji."
      },
      {
        contrast: "Po polsku warunek nierealny buduje się trybem przypuszczającym w obu zdaniach: <em>Gdybym miał czas, podróżowałbym więcej</em>. W niemieckim jest bardzo podobnie: Konjunktiv II stoi w obu zdaniach (<em>wenn ich Zeit hätte</em> i <em>würde ich reisen</em>), a <em>würde</em> może stać nawet po <em>wenn</em>: <em>Wenn ich weniger arbeiten würde, ...</em>. Różnica jest w warunku realnym: po polsku pada tu często czas przyszły (<em>Jeśli jutro będzie padać, zostaniemy w domu</em>), a po niemiecku w obu zdaniach często stoi czas teraźniejszy, choć inne konstrukcje też są możliwe (<em>..., werde ich zu Hause bleiben</em>): <em>Wenn es morgen regnet, bleiben wir zu Hause</em>. Szyk też jest inny: polskie <em>jeśli</em> i <em>gdyby</em> nie przesuwają czasownika na koniec, niemieckie <em>wenn</em> tak."
      },
      {
        trap: "Nie pisze się «Wenn ich hätte Zeit»: po <em>wenn</em> odmieniony czasownik idzie na koniec, <em>Wenn ich Zeit hätte</em>. A zdanie główne po podrzędnym nie zaczyna się od podmiotu: «Wenn ich Zeit hätte, ich würde reisen» jest błędne, poprawnie jest <em>..., würde ich reisen</em>. Nie mylić <em>wenn</em> («jeśli») z <em>wann</em> («kiedy», w pytaniach)."
      },
      {
        tip: "Zanim napiszesz zdanie z <em>wenn</em>, zapytaj siebie, jak przedstawiasz warunek. Jako realny albo otwarty? Podstawą jest czas teraźniejszy w obu zdaniach. Jako hipotetyczny, mało prawdopodobny albo sprzeczny z faktami? Wtedy Konjunktiv II w obu zdaniach (także przy czymś możliwym: <em>Wenn es morgen regnen würde, würden wir zu Hause bleiben</em>): <em>hätte, wäre, könnte</em> przy <em>haben</em>, <em>sein</em> i czasownikach modalnych, <em>würde</em> + bezokolicznik przy prawie wszystkich pozostałych."
      }
    ],
    grammar: {
      title: "Wenn + czas teraźniejszy albo Konjunktiv II",
      note: "<b>Realny</b>: <i>wenn</i> + czas teraźniejszy, czas teraźniejszy (najczęstszy przypadek). <b>Nierealny</b>: Konjunktiv II w obu zdaniach (<i>hätte, wäre, könnte</i> albo <i>würde</i> + bezokolicznik). Czasownik zdania z <i>wenn</i> idzie na koniec, a zdanie główne, które po nim następuje, zaczyna się od czasownika.",
      table: {
        head: ["typ", "przykład", "uwaga"],
        rows: [
          ["realny", "Wenn es morgen regnet, bleiben wir zu Hause.", "zwykle czas teraźniejszy w obu zdaniach"],
          ["nierealny", "Wenn ich Zeit hätte, würde ich mehr reisen.", "Konjunktiv II + würde"],
          ["nierealny z sein", "Wenn ich reich wäre, würde ich ein Haus kaufen.", "zwykle wäre zamiast «würde sein»"],
          ["rada", "Wenn ich du wäre, würde ich ihn anrufen.", "na twoim miejscu"]
        ]
      },
      examples: [
        { tr: "Gdybym miał czas, podróżowałbym więcej.", note: "wenn-Satz pierwszy: zdanie główne zaczyna się od würde" },
        { tr: "Gdybym był bogaty, kupiłbym dom.", note: "wäre po wenn" },
        { tr: "Uprawiałbym więcej sportu, gdybym miał więcej czasu.", note: "wenn-Satz na końcu: szyk zdania głównego się nie zmienia" },
        { tr: "Jeśli jesteś głodny, możesz coś zjeść.", note: "warunek realny: czas teraźniejszy" },
        { tr: "Jeśli jutro będzie padać, zostaniemy w domu.", note: "warunek realny: czas teraźniejszy, czasownik zdania z wenn na końcu" },
        { tr: "Gdybym był tobą, zadzwoniłbym do niego.", note: "formuła rady" }
      ]
    },
    vocab: [
      "wygrana",
      "wygrywać",
      "bogaty",
      "pieniądze",
      "oszczędzać",
      "zarabiać",
      "urlop, wakacje",
      "dom",
      "ogród",
      "podróż dookoła świata",
      "język",
      "zawód"
    ],
    exercises: [
      {
        q: "Jak powiesz «Gdybym miał czas, podróżowałbym więcej»?",
        opts: [
          "Wenn ich Zeit hätte, würde ich mehr reisen.",
          "Wenn ich Zeit hatte, würde ich mehr reisen.",
          "Wenn ich hätte Zeit, würde ich mehr reisen."
        ],
        why: "Warunek nierealny: <b>hätte</b> po <i>wenn</i>, z czasownikiem zdania z <i>wenn</i> na końcu, i <i>würde ich</i> w zdaniu głównym, z czasownikiem na pierwszym miejscu."
      },
      {
        q: "Które zdanie mówi o sytuacji możliwej i realnej, a nie o warunku nierealnym?",
        opts: [
          "Wenn ich reich wäre, würde ich ein Haus kaufen.",
          "Wenn es morgen regnet, bleiben wir zu Hause.",
          "Wenn ich du wäre, würde ich ihn anrufen."
        ],
        why: "Drugie ma czas teraźniejszy w obu zdaniach: jutrzejszy deszcz jest możliwy. Pozostałe dwa mają Konjunktiv II: to warunki nierealne."
      },
      {
        q: "Uzupełnij: «Wenn ich mehr Geld hätte, ___ ich ein Auto kaufen.»",
        opts: [
          "würde",
          "wurde",
          "werde"
        ],
        why: "<b>würde</b> to tryb przypuszczający i stoi po przecinku, z czasownikiem na pierwszym miejscu w zdaniu głównym. <i>Wurde</i> to Präteritum, <i>werde</i> czas teraźniejszy."
      },
      {
        q: "Które zdania są poprawne?",
        opts: [
          "Wenn ich reich wäre, würde ich weniger arbeiten.",
          "Ich würde weniger arbeiten, wenn ich reich wäre.",
          "Wenn ich wäre reich, würde ich weniger arbeiten.",
          "Wenn ich reich wäre, ich würde weniger arbeiten.",
          "Ich würde weniger arbeiten, wenn wäre ich reich."
        ],
        why: "Dwa pierwsze są dobre: <i>wenn</i> wysyła <i>wäre</i> na koniec, a zdanie główne, które po nim następuje, zaczyna się od czasownika. Trzecie i piąte stawiają czasownik zdania z <i>wenn</i> w złym miejscu, czwarte nie zaczyna zdania głównego od czasownika."
      },
      {
        q: "Uzupełnij czasem teraźniejszym od regnen: «Wenn es morgen ___, bleiben wir zu Hause.»",
        hint: "czas teraźniejszy, 3. osoba liczby pojedynczej",
        why: "<b>Regnet</b>: warunek realny, więc czas teraźniejszy. Czasownik zdania z <i>wenn</i> idzie na koniec."
      },
      {
        q: "Uzupełnij Konjunktiv II od haben: «Wenn ich viel Geld ___, würde ich um die Welt reisen.»",
        hint: "Konjunktiv II od haben, ich",
        why: "<b>Hätte</b> na końcu zdania z <i>wenn</i>. Zdanie główne używa <i>würde</i> + bezokolicznik."
      },
      {
        q: "Uzupełnij zdanie (w drugiej luce użyj würde).",
        tr: "Gdybym miał więcej czasu, chodziłbym częściej do kina.",
        why: "<i>Wenn ich mehr Zeit hätte, würde ich öfter ins Kino gehen</i>: <i>hätte</i> na końcu zdania z <i>wenn</i>, <i>würde</i> na pierwszym miejscu w zdaniu głównym, <i>gehen</i> na końcu."
      },
      {
        q: "Przetłumacz: «Gdybym był bogaty, kupiłbym dom.»",
        why: "<i>Wenn ich reich wäre, würde ich ein Haus kaufen</i>. Dobre jest też <i>mir ein Haus kaufen</i> oraz odwrócony szyk: <i>Ich würde ein Haus kaufen, wenn ich reich wäre.</i>"
      },
      {
        tr: "Gdybym miał więcej pieniędzy, odbyłbym podróż dookoła świata. Gdybym był bogaty, kupiłbym też dom z ogrodem.",
        why: "W <i>Weltreise</i> <b>w</b> czyta się [v], a <b>ei</b> to [aɪ]; w <i>Garten</i> <b>g</b> to [g]; w <i>reich</i> <b>ch</b> po <b>ei</b> czyta się [ç], łagodny szeleszczący dźwięk, zbliżony do polskiego ch w «chiński»."
      },
      {
        tr: "Gdybym miał więcej czasu, nauczyłbym się nowego języka.",
        why: "W <i>Sprache</i> początkowe <b>sp</b> czyta się [ʃp], jak polskie «szp», a <b>ch</b> po <b>a</b> to [x], jak polskie ch; w <i>lernen</i> <b>l</b> jest jasne."
      }
    ]
  },
  "lesson:b1-u01-l3": {
    theme: "Opinie",
    title: "Uważam, że ... Moim zdaniem ...",
    objectives: [
      "wyrazić opinię za pomocą Ich finde, dass ... i Ich glaube, dass ...",
      "ustawić czasownik na końcu po dass",
      "wyrazić własne zdanie zwrotem Meiner Meinung nach ...",
      "odróżnić dass (spójnik) od das (rodzajnik lub zaimek)"
    ],
    theory: [
      {
        h: "Ich finde, dass ...",
        p: "Żeby powiedzieć, co się myśli, używa się czasowników takich jak <strong>finden, glauben, denken</strong> i wyrażenia <strong>der Meinung sein</strong>, po których stoi spójnik <strong>dass</strong>. Po <em>dass</em> odmieniony czasownik idzie <strong>na koniec</strong>, a przecinek jest obowiązkowy: <em>Ich finde, dass das eine gute Idee ist. Ich bin der Meinung, dass wir mehr Zeit brauchen.</em> Czasownik opinii można zaprzeczyć: <em>Ich glaube nicht, dass das funktioniert.</em>"
      },
      {
        h: "Bez dass",
        p: "W mowie można pominąć <em>dass</em>: wtedy drugie zdanie jest zdaniem podrzędnym dopełnieniowym bez spójnika, z czasownikiem na <strong>drugim miejscu</strong>: <em>Ich denke, er hat recht. Ich finde, das ist zu teuer.</em> Z <em>dass</em> czasownik idzie na koniec (<em>dass er recht hat</em>), bez <em>dass</em> zostaje na drugim miejscu (<em>er hat recht</em>)."
      },
      {
        h: "Meiner Meinung nach ...",
        p: "<strong>Meiner Meinung nach</strong> (moim zdaniem) zajmuje pierwsze miejsce, więc czasownik stoi zaraz po nim: <em>Meiner Meinung nach ist das zu teuer.</em> <em>Meiner Meinung</em> to celownik (<em>die Meinung</em>), a <em>nach</em> stoi po nim. Jeśli zaczynasz od podmiotu, <em>meiner Meinung nach</em> może stać w środku: <em>Das ist meiner Meinung nach zu teuer.</em>"
      },
      {
        contrast: "Po polsku po <em>uważam, że</em>, <em>myślę, że</em> stoi tryb oznajmujący, i tak samo w niemieckim: <em>Ich denke, dass das richtig ist</em>. Także po przeczeniu w tych przykładach oba języki zostają przy trybie oznajmującym: <em>Nie sądzę, że to działa</em> / <em>Ich glaube nicht, dass das funktioniert</em>. Różni je szyk: polskie <em>że</em> nie przesuwa czasownika, a niemieckie <em>dass</em> wysyła go na koniec. Różni je też pominięcie spójnika: po polsku <em>że</em> zwykle zostaje, a po niemiecku <em>dass</em> można opuścić (<em>Ich denke, das ist richtig</em>), ale wtedy zmienia się szyk czasownika. Polskie <em>moim zdaniem</em> ma po niemiecku stały zwrot <em>meiner Meinung nach</em>, w którym <em>nach</em> stoi po rzeczowniku."
      },
      {
        trap: "Nie pisze się «Ich finde, dass das ist gut»: po <em>dass</em> czasownik idzie na koniec, <em>dass das gut ist</em>. Nie mylić <strong>dass</strong> (spójnik, dwa <em>s</em>) z <strong>das</strong> (rodzajnik lub zaimek, jedno <em>s</em>): <em>Ich glaube, dass das Buch gut ist</em>. W zdaniu <em>Ich glaube, das ist gut</em> słowo <em>das</em> jest zaimkiem."
      },
      {
        tip: "Jeśli nie jesteś pewien, czy pisać <em>das</em> czy <em>dass</em>, spróbuj zastąpić je słowem <em>dieses</em> albo <em>welches</em>: jeśli pasuje, to jest <em>das</em>. Jeśli nie, to <em>dass</em>."
      }
    ],
    grammar: {
      title: "dass i opinia",
      note: "<b>Ich finde, dass ...</b> z czasownikiem na końcu. Bez <i>dass</i> czasownik zostaje na drugim miejscu. <b>Meiner Meinung nach</b> na pierwszym miejscu, potem czasownik.",
      table: {
        head: ["konstrukcja", "przykład", "uwaga"],
        rows: [
          ["Ich finde, dass ...", "Ich finde, dass das eine gute Idee ist.", "czasownik na końcu"],
          ["bez dass", "Ich denke, er hat recht.", "czasownik na drugim miejscu"],
          ["Meiner Meinung nach", "Meiner Meinung nach ist das zu teuer.", "czasownik zaraz po nim"],
          ["der Meinung sein", "Ich bin der Meinung, dass wir mehr Zeit brauchen.", "przecinek jest obowiązkowy"]
        ]
      },
      examples: [
        { tr: "Uważam, że to dobry pomysł.", note: "dass: czasownik na końcu, tryb oznajmujący" },
        { tr: "Wierzę, że on ma rację.", note: "dass: recht hat, odmieniony czasownik na końcu" },
        { tr: "Myślę, że on ma rację.", note: "bez dass: czasownik na drugim miejscu" },
        { tr: "Moim zdaniem to za drogie.", note: "Meiner Meinung nach na pierwszym miejscu, potem ist" },
        { tr: "Jestem zdania, że potrzebujemy więcej czasu.", note: "der Meinung sein + dass" },
        { tr: "Nie sądzę, że to zadziała.", note: "nicht przed dass: Ich glaube nicht, dass ..." }
      ]
    },
    vocab: [
      "opinia, zdanie",
      "propozycja",
      "temat",
      "powód",
      "zaleta",
      "wada",
      "wierzyć, sądzić",
      "uważać, uznawać",
      "zgadzać się (z celownikiem)",
      "mieć rację",
      "zgodny, zgadzam się",
      "słuszny, poprawny"
    ],
    exercises: [
      {
        q: "Które zdanie jest poprawne?",
        opts: [
          "Ich finde, dass das eine gute Idee ist.",
          "Ich finde, dass das ist eine gute Idee.",
          "Ich finde, dass ist das eine gute Idee."
        ],
        why: "Po <b>dass</b> odmieniony czasownik idzie na koniec: <i>dass das eine gute Idee ist</i>."
      },
      {
        q: "Które zdanie jest poprawne gramatycznie i ortograficznie?",
        opts: [
          "Ich glaube, dass er recht hat.",
          "Ich glaube, das er recht hat.",
          "Ich glaube, dass er hat recht."
        ],
        why: "Spójnik pisze się z dwoma <i>s</i>: <b>dass</b>, i wysyła odmieniony czasownik na koniec (<i>recht hat</i>)."
      },
      {
        q: "Uzupełnij: «Ich finde, ___ wir mehr Zeit brauchen.»",
        hint: "spójnik",
        why: "<b>dass</b> wprowadza to, co się myśli, a <i>brauchen</i> idzie na koniec."
      },
      {
        q: "Uzupełnij: «Meiner ___ nach ist das zu teuer.»",
        hint: "opinia",
        why: "<b>Meinung</b>: <i>meiner Meinung nach</i> to formuła na «moim zdaniem»."
      },
      {
        q: "Dopasuj każde wyrażenie do jego znaczenia.",
        pairs: [
          "uważam, że ...",
          "moim zdaniem ...",
          "zgadzam się",
          "masz rację"
        ]
      },
      {
        q: "Uzupełnij zdanie (użyj dass i czasownika funktionieren).",
        tr: "Nie sądzę, że to zadziała.",
        why: "<i>Ich glaube nicht, dass das funktioniert</i>: <i>dass</i> wysyła <i>funktioniert</i> na koniec. Dobre jest też <i>klappt</i>."
      },
      {
        q: "Ułóż słowa w odpowiedniej kolejności.",
        tr: "Uważam, że to dobry pomysł.",
        why: "<i>Ich finde, dass das eine gute Idee ist.</i> Przecinek stoi po <i>finde</i>, a czasownik <i>ist</i> zamyka zdanie podrzędne."
      },
      {
        q: "Przetłumacz: «Moim zdaniem to za drogie.» (użyj meiner Meinung nach)",
        why: "<i>Meiner Meinung nach ist das zu teuer</i>: czasownik stoi zaraz po wyrażeniu. Dobre jest też <i>Das ist meiner Meinung nach zu teuer</i>."
      },
      {
        tr: "Uważam, że to dobry pomysł. Moim zdaniem potrzebujemy więcej czasu, ale nie sądzę, że to możliwe.",
        why: "W <i>Meinung</i> <b>ei</b> czyta się [aɪ]; w <i>möglich</i> <b>ö</b> jest zaokrąglone (usta jak do <i>o</i>, język jak do <i>e</i>), a końcowe <b>ch</b> to [ç]; w <i>brauchen</i> <b>au</b> to [aʊ], a <b>ch</b> to [x]."
      },
      {
        tr: "Jestem zdania, że potrzebujemy więcej czasu.",
        why: "W <i>Meinung</i> <b>ei</b> czyta się [aɪ]; w <i>dass</i> <b>ss</b> to bezdźwięczne <b>s</b>; w <i>mehr</i> <b>h</b> nie jest wymawiane."
      }
    ]
  },
  "lesson:b1-u01-l4": {
    theme: "Kontrasty",
    title: "Chociaż ..., mimo to",
    objectives: [
      "wyrazić zdanie przyzwalające za pomocą obwohl i czasownika na końcu",
      "używać trotzdem z czasownikiem zaraz po nim",
      "odróżnić obwohl od weil",
      "powiedzieć, że ktoś trwa mimo trudności"
    ],
    theory: [
      {
        h: "obwohl: zdanie podrzędne",
        p: "<strong>Obwohl</strong> (chociaż, choć) wprowadza okoliczność, która powinna czemuś przeszkodzić, a jednak nie przeszkadza: <em>Obwohl es regnet, gehen wir spazieren.</em> Działa jak <em>weil</em> i <em>dass</em>: odmieniony czasownik idzie <strong>na koniec</strong>, przecinek oddziela oba zdania. Jeśli zdanie z <em>obwohl</em> stoi pierwsze, zdanie główne zaczyna się od czasownika: <em>Obwohl er müde war, hat er noch gearbeitet.</em> Jeśli stoi po nim: <em>Wir gehen spazieren, obwohl es regnet.</em>"
      },
      {
        h: "trotzdem: zdanie główne",
        p: "<strong>Trotzdem</strong> (mimo to, jednak, a jednak) mówi to samo dwoma oddzielnymi zdaniami. Jest przysłówkiem i występuje w zdaniu głównym z czasownikiem na drugim miejscu. Jeśli stoi na początku, czasownik odmieniony następuje zaraz po nim, a dopiero potem podmiot: <em>Es regnet. Trotzdem gehen wir spazieren.</em> Albo stoi wewnątrz zdania: <em>Wir gehen trotzdem spazieren.</em> Z <em>aber</em> można też powiedzieć <em>Sie ist krank, aber sie geht trotzdem zur Arbeit.</em>"
      },
      {
        contrast: "Po polsku <em>chociaż</em>, <em>choć</em> i <em>mimo że</em> też łączą się z trybem oznajmującym przy faktach: <em>chociaż pada</em>. W niemieckim jest tak samo: gdy <em>obwohl</em> wprowadza fakt realny, jak w tych przykładach, stoi zwykle <strong>tryb oznajmujący</strong>: <em>obwohl es regnet</em>. Różnica jest w szyku: po polsku w zdaniu z <em>chociaż</em> czasownik zostaje tam, gdzie był (<em>chociaż pada, idziemy na spacer</em>), a po niemiecku <em>obwohl</em> wysyła go na koniec, tak jak <em>weil</em>: <em>weil es regnet</em> mówi dlaczego, <em>obwohl es regnet</em> mówi «mimo to». Polskiemu <em>mimo to</em> odpowiada <em>trotzdem</em>, które stoi w zdaniu głównym."
      },
      {
        trap: "Po zdaniu z <em>obwohl</em> zdanie główne zaczyna się od czasownika: <em>Obwohl es regnet, gehen wir spazieren</em>, nie «..., wir gehen». A po <em>trotzdem</em> na pierwszym miejscu czasownik stoi od razu: <em>trotzdem gehen wir</em>, nie «trotzdem wir gehen». <em>Obwohl</em> i <em>trotzdem</em> mogą też stać razem, i wtedy przyzwolenie się wzmacnia: <em>Obwohl es regnet, gehen wir trotzdem spazieren</em>, z <em>trotzdem</em> po czasowniku. Nie mylić <em>obwohl</em> z <em>weil</em>: <em>weil</em> wprowadza przyczynę, <em>obwohl</em> fakt, mimo którego dzieje się to, co mówi zdanie główne."
      },
      {
        tip: "<em>Obwohl</em> wprowadza zdanie podrzędne z odmienionym czasownikiem na końcu. <em>Trotzdem</em> jest przysłówkiem w zdaniu głównym: na początku zdania czasownik odmieniony stoi zaraz po nim. Dwa zdania główne można rozdzielić przecinkiem albo kropką."
      }
    ],
    grammar: {
      title: "obwohl i trotzdem",
      note: "<b>obwohl</b> = chociaż, czasownik na końcu. <b>trotzdem</b> = mimo to, na pierwszym miejscu czasownik następuje od razu. Dwa sposoby na powiedzenie tego samego.",
      table: {
        head: ["słowo", "przykład", "uwaga"],
        rows: [
          ["obwohl", "Obwohl es regnet, gehen wir spazieren.", "czasownik na końcu, potem zdanie główne zaczyna się od czasownika"],
          ["obwohl po", "Wir gehen spazieren, obwohl es regnet.", "szyk zdania głównego się nie zmienia"],
          ["trotzdem", "Es regnet. Trotzdem gehen wir spazieren.", "czasownik zaraz po trotzdem"],
          ["aber ... trotzdem", "Sie ist krank, aber sie geht trotzdem zur Arbeit.", "trotzdem po czasowniku"]
        ]
      },
      examples: [
        { tr: "Chociaż pada, idziemy na spacer.", note: "obwohl: czasownik na końcu, potem gehen na pierwszym miejscu" },
        { tr: "Idziemy na spacer, chociaż pada.", note: "obwohl po zdaniu głównym" },
        { tr: "Pada. Mimo to idziemy na spacer.", note: "trotzdem: czasownik zaraz po nim" },
        { tr: "Chociaż był zmęczony, jeszcze pracował.", note: "obwohl: war na końcu" },
        { tr: "Był zmęczony, ale mimo to pracował.", note: "trotzdem na pierwszym miejscu" },
        { tr: "Jest chora, ale mimo to idzie do pracy.", note: "aber + trotzdem w zdaniu" }
      ]
    },
    vocab: [
      "chociaż, choć",
      "mimo to, jednak",
      "deszcz",
      "spacer",
      "pogoda",
      "męczący",
      "trudny",
      "trudność",
      "błąd",
      "poddawać się, rezygnować",
      "iść dalej, kontynuować",
      "sukces"
    ],
    exercises: [
      {
        q: "Które zdanie jest poprawne?",
        opts: [
          "Obwohl es regnet, gehen wir spazieren.",
          "Obwohl es regnet, wir gehen spazieren.",
          "Obwohl es regnet, trotzdem wir gehen spazieren."
        ],
        why: "Po zdaniu z <b>obwohl</b> zdanie główne zaczyna się od czasownika: <i>gehen wir</i>. Trzecie ma czasownik w złym miejscu: po <i>trotzdem</i> na pierwszym miejscu czasownik musi stać od razu."
      },
      {
        q: "Które zdanie jest poprawne?",
        opts: [
          "Es regnet, trotzdem wir gehen spazieren.",
          "Es regnet, trotzdem gehen wir spazieren.",
          "Es regnet, trotzdem wir spazieren gehen."
        ],
        why: "<b>Trotzdem</b> na pierwszym miejscu wymaga czasownika zaraz po sobie: <i>trotzdem gehen wir</i>. Nie wysyła czasownika na koniec, inaczej niż <i>obwohl</i>."
      },
      {
        q: "Uzupełnij słowem trotzdem: «Sie ist krank, ___ geht sie zur Arbeit.»",
        hint: "mimo to",
        why: "<b>Trotzdem</b> na pierwszym miejscu, a czasownik <i>geht</i> zaraz po nim."
      },
      {
        q: "Uzupełnij zdanie (użyj obwohl).",
        tr: "Chociaż był zmęczony, jeszcze pracował.",
        why: "<i>Obwohl er müde war, hat er noch gearbeitet</i>: <i>war</i> na końcu zdania podrzędnego, potem <i>hat</i> na pierwszym miejscu w zdaniu głównym."
      },
      {
        q: "Dopasuj każde słowo do jego znaczenia.",
        pairs: [
          "chociaż (czasownik na końcu)",
          "mimo to (czasownik zaraz po nim)",
          "ponieważ (czasownik na końcu)",
          "ale (nie zmienia szyku)"
        ]
      },
      {
        q: "Ułóż słowa w odpowiedniej kolejności.",
        tr: "Chociaż był zmęczony, jeszcze pracował.",
        why: "<i>Obwohl er müde war, hat er noch gearbeitet.</i> Przecinek stoi po <i>war</i>, potem zdanie główne zaczyna się od <i>hat</i>."
      },
      {
        q: "Przetłumacz: «Chociaż pada, idziemy na spacer.» (użyj obwohl)",
        why: "<i>Obwohl es regnet, gehen wir spazieren</i>. Dobry jest też odwrócony szyk (<i>Wir gehen spazieren, obwohl es regnet</i>) oraz <i>einen Spaziergang machen</i>."
      },
      {
        q: "Przyjaciel widzi, jak wychodzisz w złą pogodę.",
        setting: "Pogoda jest zła i jesteś chory, ale mimo to wychodzisz.",
        lines: [
          { tr: "Zostajesz jutro w domu? Pogoda jest zła." },
          { tr: "Odpowiedz: nie, idziesz na spacer, chociaż pogoda jest zła.", answerTr: "Nie, chociaż pogoda jest zła, idę na spacer." },
          { tr: "Ale jesteś chory!" },
          { tr: "Odpowiedz: tak, mimo to idziesz.", answerTr: "Tak, mimo to idę." },
          { tr: "Jesteś też zmęczony. Naprawdę chcesz wyjść?" },
          { tr: "Odpowiedz, że mimo to wychodzisz, ale tylko na chwilę.", answerTr: "Tak, mimo to wychodzę, ale tylko na chwilę." }
        ]
      },
      {
        tr: "Chociaż pogoda jest zła, idziemy na spacer. To męczące, ale mimo to idziemy dalej.",
        why: "W <i>Wetter</i> <b>w</b> czyta się [v]; w <i>anstrengend</i> <b>ng</b> to nosowe [ŋ], jak w polskim «bank»; w <i>weiter</i> <b>ei</b> to [aɪ]."
      },
      {
        tr: "Chociaż jestem zmęczony, nie poddaję się.",
        why: "W <i>müde</i> <b>ü</b> jest zaokrąglone; w <i>Obwohl</i> <b>w</b> czyta się [v]; w <i>nicht</i> <b>ch</b> po <b>i</b> czyta się [ç]."
      }
    ]
  },
  "lesson:b1-u01-test": {
    theme: "Sprawdzian",
    title: "Test: Gdybym był tobą",
    objectives: [
      "sprawdzić Konjunktiv II, okres warunkowy, dass i opinię, obwohl i trotzdem"
    ],
    theory: [
      {
        p: "Dziesięć pytań z całej jednostki. Zaliczasz z wynikiem 70%. Nie zaglądaj do lekcji podczas odpowiadania: jeśli czegoś nie pamiętasz, lepiej wrócić do powtórki."
      }
    ],
    exercises: [
      {
        tr: "Konjunktiv II od können, wszystkie osoby.",
        why: "<i>Könnte, könntest, könnte, könnten, könntet, könnten</i>: od Präteritum <i>konnte</i>, z Umlautem."
      },
      {
        tr: "Konjunktiv II od müssen, wszystkie osoby.",
        why: "<i>Müsste, müsstest, müsste, müssten, müsstet, müssten</i>: od Präteritum <i>musste</i>, z Umlautem."
      },
      {
        q: "Uzupełnij odpowiednią formą Konjunktiv II od werden: «An deiner Stelle ___ ich umziehen.»",
        hint: "tryb przypuszczający, ich",
        why: "<b>Würde</b>: <i>An deiner Stelle würde ich umziehen</i>. Bezokolicznik <i>umziehen</i> idzie na koniec."
      },
      {
        q: "Uzupełnij Konjunktiv II od sein: «Wenn ich du ___, würde ich ihn anrufen.»",
        hint: "Konjunktiv II od sein, ich",
        why: "<b>Wäre</b> na końcu zdania z <i>wenn</i>, a zdanie główne zaczyna się od <i>würde</i>."
      },
      {
        q: "Uzupełnij: «Ich glaube nicht, ___ er recht hat.»",
        hint: "spójnik",
        why: "<b>dass</b> wysyła czasownik <i>hat</i> na koniec."
      },
      {
        q: "Uzupełnij właściwym spójnikiem: «___ es regnet, gehen wir spazieren.» (chociaż)",
        hint: "czasownik na końcu",
        why: "<b>Obwohl</b> to spójnik, który wysyła czasownik na koniec i wprowadza przyzwolenie."
      },
      {
        q: "Które zdanie jest poprawne?",
        opts: [
          "Es ist spät, trotzdem arbeite ich noch.",
          "Es ist spät, trotzdem ich arbeite noch.",
          "Es ist spät, obwohl arbeite ich noch."
        ],
        why: "<b>Trotzdem</b> na pierwszym miejscu wymaga czasownika zaraz po sobie: <i>trotzdem arbeite ich</i>. Trzecie używa <i>obwohl</i> z czasownikiem w złym miejscu."
      },
      {
        q: "Które zdania są poprawne?",
        opts: [
          "Wenn ich mehr Zeit hätte, würde ich Sport machen.",
          "Ich finde, dass das zu teuer ist.",
          "Obwohl ich müde bin, gehe ich zur Arbeit.",
          "Wenn ich hätte mehr Zeit, würde ich Sport machen.",
          "Ich finde, dass das ist zu teuer."
        ],
        why: "Pierwsze trzy są dobre: odmieniony czasownik idzie na koniec po <i>wenn</i>, <i>dass</i> i <i>obwohl</i>, a zdanie główne, które po nim następuje, zaczyna się od czasownika. Czwarte i piąte zostawiają czasownik zbyt wcześnie."
      },
      {
        tr: "Na twoim miejscu nie zrezygnowałbym z pracy. Uważam, że ta praca jest dobra, chociaż jest męcząca.",
        why: "W <i>kündigen</i> <b>ü</b> jest zaokrąglone; w <i>Stelle</i> początkowe <b>st</b> to [ʃt], jak polskie «szt»; w <i>anstrengend</i> <b>ng</b> to nosowe [ŋ]."
      },
      {
        tr: "Gdybym miał więcej pieniędzy, kupiłbym dom, chociaż jest drogi.",
        why: "W <i>würde</i> <b>ü</b> jest zaokrąglone; w <i>teuer</i> <b>eu</b> czyta się [ɔʏ], zbliżone do polskiego «oj»; w <i>kaufen</i> <b>au</b> czyta się [aʊ]."
      }
    ]
  },
  "unit:b1-u02": {
    title: "O czym myślisz?",
    grammarNote: "czasowniki ze stałym przyimkiem · darauf, worauf · zdania względne (mianownik, biernik, celownik, z przyimkiem) · jemand, niemand, jeder"
  },
  "lesson:b1-u02-l1": {
    theme: "Zainteresowania i zmartwienia",
    title: "Czekam na ciebie",
    objectives: [
      "używać najczęstszych czasowników ze stałym przyimkiem (warten auf, denken an, sich interessieren für)",
      "wybierać właściwy przypadek po przyimku",
      "mówić o lękach, marzeniach i zainteresowaniach",
      "nie tłumaczyć przyimka z polskiego"
    ],
    theory: [
      {
        h: "Czasownika uczymy się razem z jego przyimkiem",
        p: "Wiele czasowników niemieckich wymaga <strong>stałego przyimka</strong> i <strong>stałego przypadku</strong> po nim: <em>warten auf + Akk</em>, <em>denken an + Akk</em>, <em>sich interessieren für + Akk</em>, <em>sich kümmern um + Akk</em>. Inne wymagają celownika: <em>Angst haben vor + Dat</em>, <em>träumen von + Dat</em>, <em>teilnehmen an + Dat</em>. Po przyimku rodzajnik albo zaimek przyjmuje ten przypadek: <em>Ich warte auf den Bus</em> (biernik), <em>Sie hat Angst vor dem Test</em> (celownik), <em>Ich warte auf dich</em> (zaimek w bierniku)."
      },
      {
        h: "To samo <em>an</em>, dwa przypadki",
        p: "Przyimek <em>an</em> łączy się z biernikiem przy <em>denken</em> (<em>Ich denke an meine Familie</em>) i z celownikiem przy <em>teilnehmen</em> (<em>Ich nehme an dem Kurs teil</em>). Przypadku nie da się wyprowadzić ze znaczenia: uczy się go razem z czasownikiem."
      },
      {
        contrast: "Polskie czasowniki też mają stałe przyimki i przypadki, ale nie pokrywają się one z niemieckimi, więc nie wolno ich przenosić. <em>Czekać na kogoś</em> wygląda tak samo (<em>warten auf</em> + biernik), ale <em>myśleć o kimś</em> (przyimek <em>o</em> i miejscownik) to <em>denken an</em> + biernik, <em>interesować się czymś</em> (narzędnik, bez przyimka) to <em>sich interessieren für</em> + biernik, <em>bać się czegoś</em> (dopełniacz, bez przyimka) to <em>Angst haben vor</em> + celownik, <em>marzyć o czymś</em> to <em>träumen von</em>, <em>brać udział w czymś</em> to <em>teilnehmen an</em>. W obu językach czasowniki i przyimki mogą wymagać określonego przypadku. W polskim pokazują go m.in. końcówki rzeczowników i zaimków, a w niemieckim także formy rodzajników: <em>auf den Bus</em>, <em>vor dem Test</em>."
      },
      {
        trap: "Nie dobieraj przyimka, tłumacząc z polskiego: <em>Ich denke über dich</em> czy <em>Ich interessiere mich mit Musik</em> nie są poprawnymi zdaniami niemieckimi. Po czasowniku stoi przyimek, którego ten czasownik wymaga, a potem przypadek, który ten przyimek rządzi: <em>Ich warte auf dich</em>, <em>Ich denke an dich</em>. Przy czasowniku zwrotnym zaimek zwrotny zostaje: <em>Sie interessiert sich für Musik</em>."
      },
      {
        tip: "Ucząc się nowego czasownika tego typu, zapisuj go zawsze z przyimkiem i przypadkiem: <em>warten auf + Akk</em>, <em>Angst haben vor + Dat</em>. To jak uczenie się rodzajnika razem z rzeczownikiem."
      }
    ],
    grammar: {
      title: "Czasowniki ze stałym przyimkiem",
      note: "Czasownik wymaga określonego <b>przyimka</b> i <b>przypadku</b>: <b>warten auf + Akk</b>, <b>Angst haben vor + Dat</b>. Uczy się ich razem.",
      table: {
        head: ["czasownik + przyimek", "przypadek", "przykład"],
        rows: [
          ["warten auf", "biernik", "Ich warte auf dich."],
          ["denken an", "biernik", "Er denkt oft an seine Familie."],
          ["sich interessieren für", "biernik", "Sie interessiert sich für Musik."],
          ["sich kümmern um", "biernik", "Wir kümmern uns um die Kinder."],
          ["Angst haben vor", "celownik", "Sie hat Angst vor dem Test."],
          ["träumen von", "celownik", "Er träumt von einem Haus am Meer."],
          ["teilnehmen an", "celownik", "Ich nehme an dem Kurs teil."]
        ]
      },
      examples: [
        { tr: "Czekam na ciebie.", note: "warten auf + biernik: dla zaimka forma dich" },
        { tr: "Często myśli o swojej rodzinie.", note: "denken an + biernik" },
        { tr: "Interesuje się muzyką.", note: "sich interessieren für + biernik, z zaimkiem zwrotnym" },
        { tr: "Zajmujemy się dziećmi.", note: "sich kümmern um + biernik" },
        { tr: "Boi się testu.", note: "Angst haben vor + celownik: dem Test" },
        { tr: "Marzy o domu nad morzem.", note: "träumen von + celownik: von einem Haus" }
      ]
    },
    vocab: [
      "czekać na (warten auf + Akk)",
      "myśleć o (denken an + Akk)",
      "interesować się (sich interessieren für + Akk)",
      "zajmować się (sich kümmern um + Akk)",
      "brać udział w (teilnehmen an + Dat)",
      "marzyć o (träumen von + Dat)",
      "strach, lęk",
      "kurs",
      "egzamin",
      "zmartwienie",
      "zainteresowanie",
      "marzenie"
    ],
    exercises: [
      {
        q: "Które zdanie znaczy „Czekam na autobus”?",
        opts: ["Ich warte auf den Bus.", "Ich warte den Bus.", "Ich warte für den Bus."],
        why: "<b>Warten auf + biernik</b>: <i>auf den Bus</i>. Przyimka nie wolno pominąć ani zastąpić innym."
      },
      {
        q: "Które zdanie jest poprawne?",
        opts: [
          "Sie hat Angst vor dem Test.",
          "Sie hat Angst von dem Test.",
          "Sie hat Angst auf den Test."
        ],
        why: "<b>Angst haben vor + celownik</b>: <i>vor dem Test</i>. Pozostałe dwa używają przyimka, którego ten czasownik nie wymaga."
      },
      {
        q: "Uzupełnij: „Ich warte ___ dich.”",
        hint: "czekać",
        why: "<b>Auf</b>: <i>warten auf</i>, a zaimek <i>dich</i> jest w bierniku."
      },
      {
        q: "Uzupełnij: „Er denkt oft ___ seine Familie.”",
        hint: "myśleć o",
        why: "<b>An</b>: <i>denken an + biernik</i>."
      },
      {
        q: "Uzupełnij: „Wir kümmern uns ___ die Kinder.”",
        hint: "zajmować się",
        why: "<b>Um</b>: <i>sich kümmern um + biernik</i>."
      },
      {
        q: "Uzupełnij zdanie.",
        tr: "Interesuje się muzyką.",
        why: "<i>Sie interessiert sich für Musik</i>: <i>sich interessieren für + biernik</i>, z zaimkiem zwrotnym <i>sich</i>."
      },
      {
        q: "Ułóż wyrazy w odpowiedniej kolejności.",
        tr: "Często o tobie myślę.",
        why: "<i>Ich denke oft an dich.</i> Poprawne jest też <i>Oft denke ich an dich</i>, z czasownikiem na drugim miejscu."
      },
      {
        q: "Przetłumacz: „Czekam na Annę.” (użyj warten)",
        why: "<i>Ich warte auf Anna</i>: przyimek <i>auf</i> jest obowiązkowy także przed imieniem osoby."
      },
      {
        tr: "Czekam na ciebie. Często myślę o naszych wakacjach. Ona interesuje się muzyką i zajmuje się dziećmi.",
        why: "W <i>warte</i> litera <b>w</b> czyta się [v]; w <i>interessiert</i> <b>ie</b> jest długie [iː]; w <i>dich</i> <b>ch</b> to [ç]."
      },
      {
        tr: "Czekam na ciebie i myślę o egzaminie.",
        why: "W <i>Prüfung</i> <b>ng</b> to dźwięk nosowy [ŋ]; w <i>auf</i> <b>au</b> czyta się [aʊ]; w <i>dich</i> <b>ch</b> to [ç]."
      }
    ]
  },
  "lesson:b1-u02-l2": {
    theme: "Oczekiwania i irytacje",
    title: "Nie mogę się tego doczekać. Czego?",
    objectives: [
      "zastępować dopełnienia przyimkowe odnoszące się do rzeczy formami darauf, daran, davon",
      "pytać za pomocą worauf, woran, worüber",
      "pytać o osobę przyimkiem z wen",
      "odróżniać sich freuen auf od sich freuen über"
    ],
    theory: [
      {
        h: "darauf, daran, darüber: przyimek bez rzeczownika",
        p: "Gdy czasownik z przyimkiem odnosi się do <strong>rzeczy</strong> albo znanej już sytuacji, przyimek łączy się z <strong>da-</strong>: <em>Ich warte auf den Bus. Ich warte darauf.</em> <em>Ich denke an die Prüfung. Ich denke daran.</em> Przed samogłoską wstawia się <strong>r</strong>: <em>darauf, daran, darüber</em>. Przed spółgłoską: <em>davon, dafür, davor</em>."
      },
      {
        h: "worauf, woran, worüber: pytanie",
        p: "Żeby zapytać o rzecz, używa się <strong>wo-</strong> (przed samogłoską <strong>wor-</strong>): <em>Worauf wartest du? Woran denkst du? Worüber ärgerst du dich? Wovor hast du Angst?</em> O <strong>osobę</strong> pyta się natomiast przyimkiem z <em>wen</em> (biernik) albo <em>wem</em> (celownik): <em>Auf wen wartest du? An wen denkst du? Mit wem sprichst du?</em> A w odpowiedzi stoi przyimek z zaimkiem: <em>Ich warte auf ihn.</em>"
      },
      {
        h: "sich freuen auf czy über",
        p: "<em>Sich freuen</em> łączy się z biernikiem i dwoma przyimkami. <strong>Auf</strong> patrzy w przód, na coś, co dopiero nastąpi: <em>Ich freue mich auf das Wochenende.</em> <strong>Über</strong> przedstawia fakt lub wiadomość jako powód radości, także gdy dotyczy przyszłości (<em>Ich freue mich darüber, dass du morgen kommst</em>): <em>Ich freue mich über das Geschenk.</em> Przy <em>sich ärgern</em> używa się <em>über</em>: <em>Er ärgert sich über den Lärm.</em>"
      },
      {
        contrast: "Po polsku przyimek stoi przed zaimkiem pokazującym: <em>czekam na to</em>, <em>myślę o tym</em>, <em>mówię o tym</em>, a w pytaniu <em>na co</em>, <em>o czym</em>. Po niemiecku w odniesieniu do rzeczy przyimek skleja się z <em>da-</em> albo <em>wo-</em> w jedno słowo: <em>Ich warte darauf</em>, <em>Ich denke daran</em>, <em>Worauf wartest du?</em>. Zaimka <em>es</em> po przyimku nie używa się dla rzeczy (nie <em>auf es</em>). Dla osoby jest tak jak po polsku: przyimek i zaimek, <em>myślę o nim</em> to <em>Ich denke an ihn</em>. Uwaga na różnicę <em>sich freuen auf / über</em>: po polsku <em>cieszyć się z prezentu</em> to <em>über</em>, a <em>nie móc się doczekać weekendu</em> to <em>auf</em>."
      },
      {
        trap: "Formy z <em>da-</em> i <em>wo-</em> służą do <strong>rzeczy</strong>. Dla osoby używa się przyimka z zaimkiem: <em>Ich warte auf ihn</em>, <em>Ich denke an sie</em>, a w pytaniu <em>Auf wen wartest du?</em>. Pamiętaj też o <strong>r</strong> przed samogłoską: <em>darauf</em> i <em>worauf</em>, nie „daauf” ani „woauf”."
      },
      {
        tip: "Forma z <em>da-</em> może też zapowiadać następujące po niej zdanie: <em>Ich freue mich darauf, dass du kommst.</em> Tu <em>darauf</em> odsyła do zdania z <em>dass</em>."
      }
    ],
    grammar: {
      title: "darauf, daran, worauf, woran",
      note: "Dla <b>rzeczy</b>: <b>da-</b> (<b>dar-</b> przed samogłoską) w odpowiedzi, <b>wo-</b> (<b>wor-</b>) w pytaniu. Dla <b>osoby</b>: przyimek + zaimek albo <b>wen/wem</b>.",
      table: {
        head: ["czasownik + przyimek", "odpowiedź (rzecz)", "pytanie (rzecz)", "pytanie (osoba)"],
        rows: [
          ["warten auf", "darauf", "worauf", "auf wen"],
          ["denken an", "daran", "woran", "an wen"],
          ["sich ärgern über", "darüber", "worüber", "über wen"],
          ["sich freuen auf", "darauf", "worauf", "auf wen"],
          ["Angst haben vor", "davor", "wovor", "vor wem"]
        ]
      },
      examples: [
        { tr: "Nie mogę się doczekać weekendu.", note: "sich freuen auf + biernik: coś, co dopiero nastąpi" },
        { tr: "Nie mogę się tego doczekać.", note: "darauf zamiast auf das Wochenende" },
        { tr: "Czego nie możesz się doczekać?", note: "worauf: wo + r + auf" },
        { tr: "Denerwuje się hałasem.", note: "sich ärgern über + biernik" },
        { tr: "Czym się denerwujesz?", note: "worüber: wo + r + über" },
        { tr: "Nie mogę się doczekać spotkania z nim. Na kogo czekasz?", note: "dla osoby: auf ihn, auf wen" }
      ]
    },
    vocab: [
      "nie móc się doczekać (sich freuen auf + Akk: coś, co dopiero będzie)",
      "cieszyć się z (sich freuen über + Akk: fakt lub wiadomość, która cieszy)",
      "denerwować się czymś (sich ärgern über + Akk)",
      "przypominać sobie, wspominać (sich erinnern an + Akk; różnica względem denken an: pamiętać o spotkaniu)",
      "rozmawiać o (sprechen über + Akk)",
      "weekend",
      "prezent",
      "hałas",
      "wiadomość",
      "spotkanie",
      "święto, przyjęcie",
      "niespodzianka"
    ],
    exercises: [
      {
        q: "Jak zapytasz „O czym myślisz?”",
        opts: ["Woran denkst du?", "Wonach denkst du?", "Wohin denkst du?"],
        why: "<i>Denken an</i> daje <b>woran</b> (wo + r + an). Pozostałe opcje nie oddają znaczenia „o czym myślisz?”: <i>wonach</i> odsyła do przyimka <i>nach</i>, a <i>Wohin denkst du?</i> to zwrot wyrażający zdziwienie lub sprzeciw („co ty sobie myślisz?”)."
      },
      {
        q: "Zastąp formą z da-: „Ich warte auf den Bus. Ich warte ___.”",
        opts: ["darauf", "daran", "davon"],
        why: "<b>Darauf</b>: <i>warten auf</i> + <i>da-</i> + <i>r</i> przed samogłoską w <i>auf</i>."
      },
      {
        q: "Zapytaj: „Na kogo czekasz?”",
        opts: ["Auf wen wartest du?", "Worauf wartest du?", "Wen wartest du?"],
        why: "O <b>osobę</b> pyta się przyimkiem z <i>wen</i>: <i>Auf wen wartest du?</i> <i>Worauf</i> dotyczy rzeczy, a <i>Wen wartest du</i> nie ma przyimka."
      },
      {
        q: "Uzupełnij pytanie: „___ freust du dich? - Auf das Wochenende.”",
        hint: "pytanie z auf, o rzecz",
        why: "<b>Worauf</b>: <i>wo</i> + <i>r</i> + <i>auf</i>. Odpowiedź ma to samo <i>auf</i>: <i>Auf das Wochenende</i>."
      },
      {
        q: "Uzupełnij: „Er denkt oft an den Urlaub. Er denkt oft ___.”",
        hint: "da- + an",
        why: "<b>Daran</b>: <i>da</i> + <i>r</i> + <i>an</i>. Przed samogłoską w <i>an</i> wstawia się <b>r</b>, jak w <i>darauf</i>."
      },
      {
        q: "Uzupełnij zdanie.",
        tr: "Czym się denerwujesz? Denerwuję się hałasem.",
        why: "<i>Worüber ärgerst du dich? Ich ärgere mich über den Lärm.</i> <i>Sich ärgern über + biernik</i>, a w pytaniu <i>wor-</i> przed samogłoską."
      },
      {
        q: "Dopasuj każde zdanie do jego znaczenia.",
        pairs: ["Na co czekasz?", "Myślę o tym.", "Na kogo czekasz?", "Myślę o nim."]
      },
      {
        q: "Przetłumacz: „Często o tym myślę.” (użyj denken)",
        why: "<i>Ich denke oft daran</i>: „o tym” to <i>daran</i>. Poprawne jest też <i>Oft denke ich daran</i>."
      },
      {
        tr: "Czego nie możesz się doczekać? Nie mogę się doczekać weekendu. A czym się zdenerwowałeś? Hałasem. Często się tym denerwuję.",
        why: "W <i>freust</i> <b>eu</b> czyta się [ɔʏ]; w <i>Wochenende</i> <b>w</b> to [v], a <b>ch</b> to [x]."
      },
      {
        tr: "Nie mogę się doczekać weekendu i już o nim myślę.",
        why: "W <i>freue</i> <b>eu</b> czyta się [ɔʏ]; w <i>mich</i> <b>ch</b> to [ç], w <i>Wochenende</i> to [x]; w <i>schon</i> <b>sch</b> czyta się [ʃ]."
      }
    ]
  },
  "lesson:b1-u02-l3": {
    theme: "Opisywanie osób i rzeczy",
    title: "Książka, którą przeczytałem",
    objectives: [
      "tworzyć zdanie względne z der, die, das",
      "wybierać rodzaj i liczbę według rzeczownika, a przypadek według roli w zdaniu względnym",
      "używać zaimków względnych w mianowniku, bierniku i celowniku",
      "budować zdanie względne z przyimkiem"
    ],
    theory: [
      {
        h: "Zaimek względny",
        p: "<strong>Zdanie względne</strong> podaje informacje o rzeczowniku. Zaczyna się <strong>zaimkiem względnym</strong>, ma odmieniony czasownik <strong>na końcu</strong> i stoi <strong>między przecinkami</strong>: <em>Das Buch, das ich gelesen habe, ist spannend.</em> Przy Perfekt na końcu stoją imiesłów i czasownik posiłkowy: <em>gelesen habe</em>."
      },
      {
        h: "Dwa pytania, żeby wybrać formę",
        p: "<strong>Rodzaj i liczbę</strong> bierze się z rzeczownika, do którego zaimek się odnosi (<em>Buch</em> jest nijakie, więc <em>das</em>). <strong>Przypadek</strong> zależy od roli zaimka w zdaniu względnym: podmiot (mianownik), dopełnienie bliższe (biernik) albo dopełnienie przy <em>helfen</em> lub odbiorca przy <em>geben</em> (celownik; rzecz, którą się daje, stoi w bierniku: <em>die Kinder, denen ich das Buch gebe</em> oraz <em>das Buch, das ich den Kindern gebe</em>). W trzech przypadkach omawianych tutaj formy są takie jak rodzajnik określony, poza celownikiem liczby mnogiej, który brzmi <strong>denen</strong> (dopełniacz, <em>dessen, deren</em>, pojawi się później)."
      },
      {
        h: "Z przyimkiem",
        p: "Przyimek stoi <strong>przed</strong> zaimkiem i decyduje o jego przypadku: <em>Der Mann, mit dem ich spreche, ist mein Chef. Die Freundin, auf die ich warte, kommt aus Rom.</em> Istnieją też formy dopełniacza (<em>dessen, deren</em>), które na razie nie są potrzebne."
      },
      {
        contrast: "Polski <em>który, która, które</em> działa tak samo jak niemiecki zaimek względny: rodzaj i liczbę bierze z rzeczownika, a przypadek z roli w zdaniu (<em>mężczyzna, którego widzę</em>, <em>mężczyzna, z którym rozmawiam</em>). Różnice są dwie. W polskim zaimek <em>który</em> ma własne końcówki, a w niemieckim używa się form rodzajnika określonego (<em>der, den, dem</em>). Poza tym po polsku liczba mnoga rozróżnia rodzaje (<em>którzy, które</em>), a po niemiecku w liczbie mnogiej jest jedna forma <em>die</em> (<em>Männer, die</em>, <em>Frauen, die</em>). Przecinki są w obu językach, ale w niemieckim zdanie względne ma też czasownik odmieniony na samym końcu."
      },
      {
        trap: "Nie mylić zaimka <em>das</em> ze spójnikiem <em>dass</em>: <em>das Buch, das ich lese</em> (względny, odsyła do <em>Buch</em>) i <em>Ich glaube, dass du recht hast</em> (wprowadza zdanie; po polsku „że”). Inna pułapka to przypadek: <em>Die Frau, der ich geholfen habe</em> ma <em>der</em>, bo <em>helfen</em> wymaga celownika, choć <em>Frau</em> jest rzeczownikiem w mianowniku."
      },
      {
        tip: "Zanim napiszesz zdanie względne, zadaj sobie dwa pytania: do jakiego rzeczownika odnosi się zaimek (rodzaj i liczba)? I jaką rolę ma w zdaniu względnym (przypadek)? Dwie odpowiedzi dają formę."
      }
    ],
    grammar: {
      title: "Zdanie względne",
      note: "Zaimek względny = <b>rodzaj i liczba</b> rzeczownika, <b>przypadek</b> roli w zdaniu względnym. Czasownik <b>na końcu</b>, zdanie względne między <b>przecinkami</b>.",
      table: {
        head: ["przypadek", "r. męski", "r. żeński", "r. nijaki", "l. mnoga"],
        rows: [
          ["mianownik", "der", "die", "das", "die"],
          ["biernik", "den", "die", "das", "die"],
          ["celownik", "dem", "der", "dem", "denen"]
        ]
      },
      examples: [
        { tr: "Mężczyzna, który tam stoi, jest moim nauczycielem.", note: "der: rodzaj męski, podmiot zdania względnego" },
        { tr: "Książka, którą przeczytałem, jest wciągająca.", note: "das: rodzaj nijaki, dopełnienie bliższe" },
        { tr: "Kobieta, której pomogłem, ma na imię Eva.", note: "der: rodzaj żeński, celownik przy helfen" },
        { tr: "Dzieci, którym daję książkę, mają siedem lat.", note: "denen: celownik liczby mnogiej" },
        { tr: "Mężczyzna, z którym rozmawiam, jest moim szefem.", note: "mit dem: przyimek stoi przed zaimkiem" },
        { tr: "Koleżanka, na którą czekam, pochodzi z Rzymu.", note: "auf die: warten auf + biernik" }
      ]
    },
    vocab: [
      "powieść",
      "film",
      "sąsiad",
      "koleżanka z pracy",
      "klucz",
      "torba",
      "telefon komórkowy",
      "okulary",
      "sklep",
      "wciągający, pasjonujący",
      "gubić, zgubić",
      "polecać"
    ],
    exercises: [
      {
        q: "Wybierz zaimek względny: „Der Film, ___ wir gestern gesehen haben, war lang.”",
        opts: ["der", "den", "dem"],
        why: "<i>Film</i> jest rodzaju męskiego i w zdaniu względnym jest dopełnieniem bliższym (<i>wir haben den Film gesehen</i>): zatem <b>den</b>."
      },
      {
        q: "Wybierz zaimek względny: „Das ist der Kollege, mit ___ ich arbeite.”",
        opts: ["dem", "den", "der"],
        why: "<i>Kollege</i> jest rodzaju męskiego, a <i>mit</i> wymaga celownika: <b>dem</b>. Przyimek stoi przed zaimkiem."
      },
      {
        q: "Uzupełnij: „Das ist das Buch, ___ ich gelesen habe.”",
        hint: "rodzaj nijaki, biernik",
        why: "<b>Das</b>: <i>Buch</i> jest nijakie i w zdaniu względnym jest dopełnieniem bliższym (<i>das</i> w bierniku brzmi tak samo jak w mianowniku)."
      },
      {
        q: "Uzupełnij: „Die Frau, ___ ich gestern getroffen habe, heißt Eva.”",
        hint: "rodzaj żeński, biernik",
        why: "<b>Die</b>: <i>Frau</i> jest rodzaju żeńskiego i w zdaniu względnym jest dopełnieniem bliższym. Rodzaj żeński ma <i>die</i> i w mianowniku, i w bierniku."
      },
      {
        q: "Uzupełnij: „Die Kinder, ___ ich das Buch gebe, sind sieben Jahre alt.”",
        hint: "liczba mnoga, celownik",
        why: "<b>Denen</b>: celownik liczby mnogiej. W trzech omawianych tu przypadkach zaimek względny jest taki sam jak rodzajnik określony, poza celownikiem liczby mnogiej: <i>denen</i>."
      },
      {
        q: "Uzupełnij zdanie.",
        tr: "To jest klucz, który zgubiłem.",
        why: "<i>Das ist der Schlüssel, den ich verloren habe</i>: <i>den</i>, bo <i>Schlüssel</i> jest rodzaju męskiego i jest dopełnieniem bliższym, a <i>verloren</i> z <i>habe</i> stoją na końcu."
      },
      {
        q: "Ułóż wyrazy w odpowiedniej kolejności.",
        tr: "To jest torba, którą kupiłem wczoraj.",
        why: "<i>Das ist die Tasche, die ich gestern gekauft habe.</i> Po przecinku odmieniony czasownik <i>habe</i> stoi na końcu, a przed nim <i>gekauft</i>."
      },
      {
        q: "Przetłumacz: „Film, który widzieliśmy, był długi.”",
        why: "<i>Der Film, den wir gesehen haben, war lang</i>: <i>den</i> (rodzaj męski, dopełnienie), <i>gesehen haben</i> na końcu zdania względnego, a zdanie główne wraca z <i>war</i>."
      },
      {
        tr: "To jest książka, którą przeczytałem. To wciągająca powieść. Koleżanka, której poleciłem tę powieść, też uważa ją za wciągającą.",
        why: "W <i>spannend</i> początkowe <b>sp</b> czyta się [ʃp]; w <i>empfohlen</i> <b>pf</b> to afrykata [pf]; w <i>ich</i> <b>ch</b> to [ç]."
      },
      {
        tr: "Klucz, który zgubiłem, był w mojej torbie.",
        why: "W <i>Schlüssel</i> <b>sch</b> czyta się [ʃ]; w <i>verloren</i> <b>v</b> to [f], a w <i>war</i> <b>w</b> to [v]."
      }
    ]
  },
  "lesson:b1-u02-l4": {
    theme: "Mówienie ogólnie",
    title: "Ktoś, nikt, każdy",
    objectives: [
      "używać jemand i niemand z formami biernika i celownika",
      "używać jeder (liczba pojedyncza) i alle (liczba mnoga)",
      "używać etwas i nichts",
      "budować przeczenie bez dodatkowego nicht"
    ],
    theory: [
      {
        h: "jemand i niemand",
        p: "<strong>Jemand</strong> (ktoś) i <strong>niemand</strong> (nikt) mówią o osobach ogólnie. Mogą pozostać bez zmian albo przyjąć <em>-en</em> w bierniku i <em>-em</em> w celowniku: <em>Ich habe niemanden gesehen</em> albo <em>Ich habe niemand gesehen</em>. <em>Ich habe jemandem geholfen</em> albo <em>Ich habe jemand geholfen</em>. Obie formy są poprawne, także w piśmie; formy z końcówką wyraźniej pokazują przypadek."
      },
      {
        h: "jeder i alle",
        p: "<strong>Jeder</strong> (każdy) jest w <strong>liczbie pojedynczej</strong>: <em>Jeder weiß das.</em> Odmienia się jak <em>dieser</em>: <em>jeder, jeden, jedem</em> (<em>Ich kenne jeden hier</em>). <strong>Alle</strong> (wszyscy) jest w <strong>liczbie mnogiej</strong>: <em>Alle sind da. Alle wissen das.</em>"
      },
      {
        h: "etwas i nichts",
        p: "<strong>Etwas</strong> (coś) i <strong>nichts</strong> (nic) się nie zmieniają: <em>Ich habe etwas gehört. Ich habe nichts gesehen.</em> Przymiotnik, który po nich stoi, pisze się wielką literą i przyjmuje <em>-es</em> w mianowniku i bierniku (<em>etwas Neues, nichts Besonderes</em>), <em>-em</em> w celowniku (<em>mit etwas Neuem, mit nichts Besonderem</em>)."
      },
      {
        contrast: "Po polsku przeczenie przy <em>nikt, nic</em> jest obowiązkowe i podwójne: <em>Nikogo nie widziałem, niczego nie słyszałem, nikt nie dzwonił</em>. Po niemiecku przeczenie jest już w <em>niemand</em> i <em>nichts</em>, a dodatkowego <em>nicht</em> zwykle się nie dodaje: <em>Ich habe niemanden gesehen. Ich habe nichts gehört. Niemand hat angerufen.</em> To jedna z pierwszych rzeczy, które trzeba w sobie przestawić. Podobnie jak po polsku, <em>każdy</em> to liczba pojedyncza (<em>jeder weiß</em>), a <em>wszyscy</em> liczba mnoga (<em>alle wissen</em>)."
      },
      {
        trap: "<em>Jeder</em> jest w liczbie pojedynczej jak <em>każdy</em>, nie jak <em>wszyscy</em>: <em>Jeder weiß das</em> (z <em>weiß</em>, 3. osoba liczby pojedynczej), a <em>alle</em> wymaga liczby mnogiej: <em>Alle wissen das</em>. Dodanie <em>nicht</em> do <em>nichts</em> albo <em>niemanden</em> zmienia sens, bo dwa przeczenia się znoszą: <em>Ich habe nicht nichts gehört</em> znaczy, że się coś usłyszało."
      },
      {
        tip: "„Ktoś inny” to <em>jemand anders</em>. Żeby zapytać ogólnie, najnaturalniejsze jest <em>Hat jemand eine Frage?</em>"
      }
    ],
    grammar: {
      title: "jemand, niemand, jeder",
      note: "<b>jemand</b> i <b>niemand</b>: bez zmian albo z <b>-en</b> (Akk) i <b>-em</b> (Dat). <b>jeder</b> jest w liczbie pojedynczej, <b>alle</b> w mnogiej. <b>nichts</b> i <b>niemand</b> przeczą same: bez dodatkowego <b>nicht</b>.",
      table: {
        head: ["", "mianownik", "biernik", "celownik"],
        rows: [
          ["jemand", "jemand", "jemanden, jemand", "jemandem, jemand"],
          ["niemand", "niemand", "niemanden, niemand", "niemandem, niemand"],
          ["jeder (r. m.)", "jeder", "jeden", "jedem"],
          ["alle (liczba mnoga)", "alle", "alle", "allen"]
        ]
      },
      examples: [
        { tr: "Czy ktoś widział mój klucz?", note: "jemand w mianowniku" },
        { tr: "Nikogo nie widziałem.", note: "niemanden: biernik, bez nicht" },
        { tr: "Pomogłem komuś.", note: "jemandem: celownik przy helfen" },
        { tr: "Każdy to wie.", note: "jeder, liczba pojedyncza: weiß" },
        { tr: "Wszyscy tu są.", note: "alle, liczba mnoga: sind" },
        { tr: "Niczego nie słyszałem.", note: "nichts: bez nicht" }
      ]
    },
    vocab: [
      "ktoś",
      "nikt",
      "każdy (liczba pojedyncza)",
      "wszyscy (liczba mnoga)",
      "coś",
      "nic",
      "osoba",
      "człowiek, ludzie",
      "problem",
      "pytanie",
      "odpowiedź",
      "tajemnica"
    ],
    exercises: [
      {
        q: "Jak powiesz „Niczego nie zrobiłem”?",
        opts: [
          "Ich habe nichts gemacht.",
          "Ich habe niemanden gemacht.",
          "Ich habe etwas nicht gemacht."
        ],
        why: "<b>Nichts</b> zawiera już przeczenie. <i>Niemanden</i> dotyczy osób, a <i>etwas nicht</i> znaczy „czegoś nie zrobiłem”."
      },
      {
        q: "Które zdanie jest poprawne?",
        opts: ["Jeder weiß das.", "Jeder wissen das.", "Jeder wisst das."],
        why: "<b>Jeder</b> jest w liczbie pojedynczej: czasownik stoi w 3. osobie liczby pojedynczej, <i>weiß</i>."
      },
      {
        q: "Które zdania są poprawne?",
        opts: [
          "Ich kenne niemanden hier.",
          "Hat jemand Fragen?",
          "Alle sind da.",
          "Jeder sind da.",
          "Alle ist da."
        ],
        why: "Pierwsze trzy są dobre. <i>Jeder</i> jest w liczbie pojedynczej, więc w zdaniu 4 czasownik w liczbie mnogiej jest błędny; <i>alle</i> jest w liczbie mnogiej, więc w zdaniu 5 czasownik w liczbie pojedynczej jest błędny."
      },
      {
        q: "Uzupełnij: „Ich habe ___ gesehen.” (nikogo nie widziałem)",
        hint: "nikt, biernik",
        why: "<b>Niemanden</b>: biernik z końcówką; poprawne jest też <i>niemand</i>. Bez <i>nicht</i>."
      },
      {
        q: "Uzupełnij: „Ich habe ___ geholfen.” (komuś)",
        hint: "ktoś, celownik",
        why: "<b>Jemandem</b>: <i>helfen</i> wymaga celownika. Poprawne jest też <i>jemand</i> bez końcówki."
      },
      {
        q: "Uzupełnij: „___ weiß das.” (każdy)",
        hint: "każdy, liczba pojedyncza",
        why: "<b>Jeder</b>: liczba pojedyncza, z <i>weiß</i>. Gdyby zdanie było w liczbie mnogiej, trzeba by <i>alle</i>."
      },
      {
        q: "Uzupełnij: „Ich habe gestern ___ gegessen.” (nic)",
        hint: "nic",
        why: "<b>Nichts</b>: nie zmienia się i nie wymaga <i>nicht</i>."
      },
      {
        q: "Uzupełnij zdanie.",
        tr: "Nikogo nie widziałem i niczego nie słyszałem.",
        why: "<i>Ich habe niemanden gesehen und nichts gehört</i>: każdy zaimek przeczy własnemu dopełnieniu, a polskie „nie” nie przechodzi do niemieckiego jako dodatkowe <i>nicht</i>."
      },
      {
        tr: "Czy ktoś widział moje okulary? Nie, nikt ich nie widział. Każdy ich szuka, ale nic nie znajdujemy.",
        why: "W <i>jemand</i> i <i>jeder</i> <b>j</b> czyta się [j]; w <i>niemand</i> <b>ie</b> jest długie [iː]; w <i>sucht</i> <b>ch</b> to [x], a w <i>nichts</i> to [ç]; w <i>meine</i> <b>ei</b> to [aɪ]."
      },
      {
        tr: "Nikogo nie widziałem i niczego nie słyszałem.",
        why: "W <i>niemanden</i> <b>ie</b> jest długie [iː]; w <i>ich</i> i <i>nichts</i> <b>ch</b> to [ç]."
      }
    ]
  },
  "lesson:b1-u02-test": {
    theme: "Sprawdzian",
    title: "Test: O czym myślisz?",
    objectives: [
      "sprawdzić czasowniki z przyimkiem, darauf i worauf, zdania względne, jemand, niemand i jeder"
    ],
    theory: [
      {
        p: "Dziesięć pytań z całej jednostki. Zaliczenie od 70%. Nie zaglądaj do lekcji w trakcie odpowiadania: jeśli czegoś nie pamiętasz, lepiej wrócić i powtórzyć."
      }
    ],
    exercises: [
      {
        q: "Uzupełnij: „Ich warte ___ dich.”",
        hint: "czekać",
        why: "<b>Auf</b>: <i>warten auf + biernik</i>."
      },
      {
        q: "Uzupełnij: „Sie hat Angst ___ dem Test.”",
        hint: "bać się",
        why: "<b>Vor</b>: <i>Angst haben vor + celownik</i>."
      },
      {
        q: "Uzupełnij pytanie: „___ denkst du? - An den Urlaub.”",
        hint: "pytanie z an, o rzecz",
        why: "<b>Woran</b>: <i>denken an</i> + <i>wo</i> + <i>r</i> przed samogłoską."
      },
      {
        q: "Uzupełnij: „Das ist der Mann, ___ ich gestern gesehen habe.”",
        hint: "rodzaj męski, biernik",
        why: "<b>Den</b>: <i>Mann</i> jest rodzaju męskiego i w zdaniu względnym jest dopełnieniem bliższym."
      },
      {
        q: "Uzupełnij: „Das Buch, ___ ich gelesen habe, ist spannend.”",
        hint: "rodzaj nijaki, biernik",
        why: "<b>Das</b>: nijaki, dopełnienie bliższe zdania względnego."
      },
      {
        q: "Uzupełnij: „Ich habe ___ gesehen.” (nikogo nie widziałem)",
        hint: "nikt, biernik",
        why: "<b>Niemanden</b> (albo <i>niemand</i>, także poprawne), bez <i>nicht</i>."
      },
      {
        q: "Dostałeś już prezent i cieszysz się z niego. Które zdanie jest poprawne?",
        opts: [
          "Ich freue mich über das Geschenk.",
          "Ich freue mich für das Geschenk.",
          "Ich freue mich mit das Geschenk."
        ],
        why: "<b>Sich freuen über + biernik</b> dla faktu lub wiadomości, która cieszy. Z <i>auf</i> patrzy się w przód (<i>Ich freue mich auf das Geschenk</i> znaczy, że jeszcze na niego czekasz)."
      },
      {
        q: "Wybierz zaimek względny: „Die Frau, mit ___ ich spreche, ist meine Chefin.”",
        opts: ["der", "die", "dem"],
        why: "<i>Frau</i> jest rodzaju żeńskiego, a <i>mit</i> wymaga celownika: <b>der</b>."
      },
      {
        tr: "Czekam na ciebie. Kobieta, która tam stoi, boi się testu. Nikt jej nie pomaga.",
        why: "W <i>warte</i> <b>w</b> to [v]; w <i>steht</i> początkowe <b>st</b> to [ʃt]; w <i>niemand</i> <b>ie</b> jest długie [iː]; w <i>dich</i> <b>ch</b> to [ç]."
      },
      {
        tr: "Często myślę o książce, którą przeczytałem.",
        why: "W <i>ich</i> <b>ch</b> to [ç], w <i>Buch</i> to [x]; <b>u</b> w <i>Buch</i> jest długie [uː]; w <i>gelesen</i> <b>s</b> jest dźwięczne [z]."
      }
    ]
  },
  "unit:b1-u03": {
    title: "Urzędy i umowy",
    grammarNote: "strona bierna (Vorgangspassiv) w czasie teraźniejszym i w Präteritum · dopełniacz oraz wegen, während, innerhalb · um ... zu i damit · rejestr formalny"
  },
  "lesson:b1-u03-l1": {
    theme: "Biurokracja",
    title: "Zameldowanie",
    objectives: [
      "rozumieć i tworzyć stronę bierną z werden w czasie teraźniejszym i w Präteritum",
      "mówić, kto wykonuje czynność, za pomocą von + celownik, gdy jest to potrzebne",
      "odróżniać proces (wird geprüft) od wyniku (ist geprüft)",
      "załatwić sprawę przy okienku w urzędzie w rejestrze formalnym"
    ],
    theory: [
      {
        h: "Strona bierna z werden",
        p: "Strona bierna wysuwa na pierwszy plan <strong>to, co się dzieje</strong>, a nie to, kto to robi. Tworzy się ją odmienionym <strong>werden</strong> i <strong>Partizip II</strong> na końcu: <em>Das Formular wird ausgefüllt.</em> W czasie przeszłym używa się Präteritum od <em>werden</em>: <em>Das Formular wurde ausgefüllt.</em> Dopełnienie zdania w stronie czynnej staje się podmiotem: <em>Die Beamtin prüft den Ausweis</em> zmienia się w <em>Der Ausweis wird geprüft.</em>"
      },
      {
        h: "Kto działa: von + celownik",
        p: "Jeśli trzeba powiedzieć, kto wykonuje czynność, dodaje się <strong>von + celownik</strong> (Dativ): <em>Der Ausweis wird von der Beamtin geprüft.</em> Bardzo często wykonawcy się nie podaje, bo jest oczywisty albo nieważny: <em>Termine werden online vergeben.</em> Dlatego strona bierna jest częsta w formularzach, ogłoszeniach i urzędach."
      },
      {
        h: "Przy okienku: rejestr formalny",
        p: "W urzędzie mówi się <strong>Sie</strong>, z <em>Herr</em> lub <em>Frau</em> i nazwiskiem (jak po polsku Pan, Pani). Prośbę formułuje się z <em>ich möchte</em> albo w Konjunktiv II: <em>Ich möchte mich anmelden. Könnten Sie mir helfen?</em> <strong>Anmeldung</strong> to zgłoszenie swojego adresu w Bürgeramt; zwykle trzeba to zrobić w ciągu dwóch tygodni od przeprowadzki."
      },
      {
        contrast: "Po polsku stronę bierną tworzy się z <em>jest</em> albo <em>zostaje</em> i imiesłowem (<em>formularz jest wypełniany</em>, <em>formularz został wypełniony</em>) albo używa się <em>się</em> (<em>formularz wypełnia się</em>). Po polsku proces od stanu odróżnia się tak: <em>jest wypełniany</em> oddaje <em>wird ausgefüllt</em> (proces), a <em>jest już wypełniony</em> oddaje <em>ist ausgefüllt</em> (stan). Natomiast <em>został wypełniony</em> opisuje dokonanie się czynności i tłumaczy raczej <em>wurde ausgefüllt</em> niż stan z <em>sein</em>. W niemieckim czasownikiem pomocniczym jest <strong>werden</strong>, a imiesłów nie zmienia się według rodzaju ani liczby: <em>der Ausweis wird geprüft</em>, <em>die Karte wird geprüft</em>, <em>die Formulare werden geprüft</em>, podczas gdy po polsku mówi się <em>dowód jest sprawdzany</em>, <em>karta jest sprawdzana</em>, <em>formularze są sprawdzane</em>. Wykonawcę wyraża się po polsku przez <em>przez</em> + biernik (<em>przez urzędniczkę</em>), a po niemiecku przez <em>von</em> + celownik (<em>von der Beamtin</em>)."
      },
      {
        trap: "<em>Das Formular wird ausgefüllt</em> wysuwa na pierwszy plan <strong>czynność</strong> wypełniania formularza, nie mówiąc, że dzieje się to właśnie teraz: może to być zwykła procedura albo coś, co dopiero nastąpi. <em>Das Formular ist ausgefüllt</em> jest zdaniem poprawnym, ale opisuje <strong>wynik</strong>: formularz jest już wypełniony. To nie to samo: z <em>wird</em> patrzy się na czynność, z <em>ist</em> na stan, który z niej pozostał. Podobnie <em>wurde geprüft</em> zawiera <em>werden</em>, a <em>war geprüft</em> opisuje stan przeszły."
      },
      {
        tip: "Żeby przejść ze strony czynnej na bierną, znajdź dopełnienie w bierniku (Akkusativ): staje się podmiotem. <em>Man gibt das Formular ab</em> zmienia się w <em>Das Formular wird abgegeben.</em> Przy czasowniku rozdzielnym Partizip II pozostaje w jednym kawałku: <em>abgegeben, ausgefüllt, angemeldet</em>."
      }
    ],
    grammar: {
      title: "Strona bierna w czasie teraźniejszym i w Präteritum",
      note: "<b>werden</b> + <b>Partizip II</b> na końcu: <b>wird geprüft</b> (czas teraźniejszy), <b>wurde geprüft</b> (Präteritum). Wykonawca, jeśli jest podany, to <b>von + celownik</b>.",
      table: {
        head: ["", "czas teraźniejszy", "Präteritum"],
        rows: [
          ["ich", "werde geprüft", "wurde geprüft"],
          ["du", "wirst geprüft", "wurdest geprüft"],
          ["er/sie/es", "wird geprüft", "wurde geprüft"],
          ["wir", "werden geprüft", "wurden geprüft"],
          ["ihr", "werdet geprüft", "wurdet geprüft"],
          ["sie/Sie", "werden geprüft", "wurden geprüft"]
        ]
      },
      examples: [
        { tr: "Formularz jest wypełniany.", note: "werden + Partizip II: czynność na pierwszym planie" },
        { tr: "Dowód osobisty jest sprawdzany.", note: "imiesłów nie zmienia się według rodzaju" },
        { tr: "Zameldowanie zostało wczoraj potwierdzone.", note: "wurde: Präteritum od werden" },
        { tr: "Terminy są przydzielane online.", note: "bez wykonawcy, liczba mnoga: werden" },
        { tr: "Zaświadczenie zostało wydane od razu.", note: "imiesłów czasownika rozdzielnego: ausgestellt" },
        { tr: "Formularz jest sprawdzany przez urzędniczkę.", note: "von + celownik: von der Beamtin" }
      ]
    },
    vocab: [
      "zameldowanie",
      "urząd obsługi mieszkańców (Bürgeramt)",
      "niemiecki numer identyfikacji podatkowej (Steuer-ID)",
      "termin (umówione spotkanie)",
      "formularz",
      "zaświadczenie",
      "dokument tożsamości",
      "okienko",
      "zameldować się (sich anmelden)",
      "wypełniać",
      "składać (oddawać)",
      "wystawiać"
    ],
    exercises: [
      {
        q: "Które zdanie oznacza: „Formularz jest wypełniany” (proces)?",
        opts: ["Das Formular wird ausgefüllt.", "Das Formular ist ausgefüllt.", "Das Formular hat ausgefüllt."],
        why: "<b>Wird ausgefüllt</b>: <i>werden</i> + Partizip II, czyli proces. <i>Ist ausgefüllt</i> to zdanie poprawne, ale mówi, że formularz jest już wypełniony; <i>Das Formular hat ausgefüllt</i> to zdanie w stronie czynnej, w którym to formularz jest tym, kto wypełnia, a to nie ma sensu."
      },
      {
        q: "Wczoraj wniosek został sprawdzony. Które zdanie?",
        opts: [
          "Der Antrag wurde gestern geprüft.",
          "Der Antrag wird gestern geprüft.",
          "Der Antrag werden gestern geprüft."
        ],
        why: "<b>Wurde geprüft</b>: Präteritum od <i>werden</i>. <i>Wird</i> to czas teraźniejszy, a <i>werden</i> nie zgadza się z liczbą pojedynczą <i>Antrag</i>."
      },
      {
        q: "Które zdanie jest poprawne?",
        opts: [
          "Der Ausweis wird von der Beamtin geprüft.",
          "Der Ausweis wird von die Beamtin geprüft.",
          "Der Ausweis wird von der Beamtin prüfen."
        ],
        why: "<b>Von + celownik</b>: <i>von der Beamtin</i>. Partizip II (<i>geprüft</i>) stoi na końcu, a nie bezokolicznik."
      },
      {
        q: "Uzupełnij: „Das Formular ___ ausgefüllt.”",
        hint: "werden, czas teraźniejszy",
        why: "<b>Wird</b>: podmiot w liczbie pojedynczej, strona bierna procesu w czasie teraźniejszym."
      },
      {
        q: "Uzupełnij: „Der Pass ___ gestern ausgestellt.”",
        hint: "werden, Präteritum",
        why: "<b>Wurde</b>: podpowiedź wymaga Präteritum od <i>werden</i>, czyli <i>wurde</i>. Samo <i>gestern</i> nie wystarcza: strona bierna w Perfekt (<i>ist ... ausgestellt worden</i>) to inna forma, tu niewymagana."
      },
      {
        q: "Uzupełnij zdanie.",
        tr: "Formularz jest składany przy okienku (strona bierna, czas teraźniejszy).",
        why: "<i>Das Formular wird am Schalter abgegeben.</i> <i>Wird</i> + Partizip II <i>abgegeben</i>, który pozostaje w jednym kawałku."
      },
      {
        q: "Dopasuj każde zdanie do jego znaczenia.",
        pairs: [
          "Formularz jest wypełniany.",
          "Dowód osobisty został sprawdzony.",
          "Termin jest przydzielany.",
          "Zaświadczenie zostało wydane."
        ]
      },
      {
        q: "Przetłumacz, używając strony biernej czynnościowej z werden: „Wniosek jest sprawdzany.”",
        why: "<i>Der Antrag wird geprüft</i>: <i>werden</i> + Partizip II. Poprawne jest też <i>überprüft</i>."
      },
      {
        tr: "Dzień dobry, chcę się zameldować. Formularz jest składany przy okienku. Dokument jest sprawdzany, a zaświadczenie jest wydawane od razu.",
        why: "W <i>möchte</i> <b>ö</b> jest zaokrąglone, a <b>ch</b> to [ç]; w <i>Schalter</i> <b>sch</b> to [ʃ]; w <i>Ausweis</i> <b>au</b> to [aʊ], a <b>w</b> to [v]; w <i>geprüft</i> <b>ü</b> jest zaokrąglone."
      },
      {
        tr: "Dzień dobry, chcę się zameldować. Formularz został już wypełniony.",
        why: "W <i>ich</i> <b>ch</b> to [ç]; w <i>schon</i> <b>sch</b> to [ʃ]; w <i>wurde</i> <b>w</b> to [v]; w <i>ausgefüllt</i> <b>ü</b> jest zaokrąglone."
      }
    ]
  },
  "lesson:b1-u03-l2": {
    theme: "Bank i wynajem",
    title: "Bank i umowa najmu",
    objectives: [
      "używać dopełniacza, by powiedzieć, do kogo coś należy",
      "rozpoznawać końcówki -(e)s w rodzaju męskim i nijakim",
      "używać wegen, während i innerhalb z dopełniaczem",
      "rozmawiać formalnie przy okienku w banku"
    ],
    theory: [
      {
        h: "Dopełniacz (Genitiv)",
        p: "<strong>Dopełniacz (Genitiv)</strong> wyraża przynależność lub związek i stoi <strong>po</strong> rzeczowniku, którego dotyczy: <em>der Vertrag des Vermieters</em>, <em>die Höhe der Miete</em>. Zmienia się rodzajnik: <strong>des</strong> w rodzaju męskim i nijakim, <strong>der</strong> w rodzaju żeńskim i w liczbie mnogiej. Większość rzeczowników rodzaju męskiego i nijakiego dostaje końcówkę <strong>-s</strong> lub <strong>-es</strong>: <em>des Vermieters, des Vertrags, des Hauses</em>; rzeczowniki męskie odmiany słabej dostają <strong>-n</strong> lub <strong>-en</strong>: <em>des Kunden, des Studenten</em>."
      },
      {
        h: "wegen, während, innerhalb",
        p: "Niektóre przyimki łączą się z dopełniaczem: <strong>wegen</strong> (z powodu), <strong>während</strong> (podczas), <strong>innerhalb</strong> (w ciągu, wewnątrz). <em>Wegen des Umzugs brauche ich ein neues Konto. Während des Urlaubs habe ich viel gelesen. Innerhalb einer Woche bekommen Sie Ihre Karte.</em> W mowie po <em>wegen</em> słychać często także celownik; w tekstach pisanych i w urzędach oczekuje się dopełniacza."
      },
      {
        h: "Imiona własne i von + celownik",
        p: "Przy <strong>imieniu własnym</strong> dopełniacz dostaje <em>-s</em> i stoi <strong>przed</strong> rzeczownikiem, bez apostrofu: <em>Annas Konto</em>. Jeśli imię kończy się na sybilantę (<em>-s, -x, -z, -ß</em>), dodaje się tylko apostrof: <em>Hans’ Konto, Max’ Konto</em>. W mowie często zastępuje się to konstrukcją <strong>von + celownik</strong>: <em>das Konto von meinem Bruder</em>."
      },
      {
        contrast: "Polak zna dopełniacz i to bardzo pomaga: <em>umowa wynajmującego</em>, <em>wysokość czynszu</em>, <em>z powodu przeprowadzki</em>, <em>podczas urlopu</em>, <em>w ciągu tygodnia</em>, wszystko to dopełniacz, a niemieckie <em>wegen, während, innerhalb</em> też wymagają dopełniacza. Różnice są dwie. Po pierwsze polski dopełniacz zmienia końcówkę samego rzeczownika (<em>wynajmującego</em>), a niemiecki oznacza przypadek głównie <strong>rodzajnikiem</strong> (<em>des Vermieters</em>); krótka końcówka <em>-s/-es</em> pojawia się tylko w liczbie pojedynczej rodzaju męskiego i nijakiego. Po drugie przy imionach polski stawia właściciela po rzeczy (<em>konto Anny</em>), a niemiecki przed nią: <em>Annas Konto</em>."
      },
      {
        trap: "<em>Während</em> może być też spójnikiem, i wtedy czasownik idzie na koniec: <em>Während ich arbeite, ...</em>. Jako przyimek (<em>während des Urlaubs</em>) łączy się z dopełniaczem i nie ma po sobie odmienionego czasownika. W rodzaju żeńskim rzeczownik się nie zmienia: <em>die Höhe der Miete</em>."
      },
      {
        tip: "Przy okienku w banku mów <em>Sie</em>: <em>Ich möchte ein Konto eröffnen. Könnten Sie mir bitte das Formular geben?</em> Rejestr formalny nie wymaga trudnych słów, tylko pełnych zdań i czasownika na właściwym miejscu."
      }
    ],
    grammar: {
      title: "Dopełniacz oraz wegen, während, innerhalb",
      note: "Dopełniacz: <b>des</b> (r. m. i n.) + rzeczownik z końcówką <b>-(e)s</b> (męskie odmiany słabej: <b>-(e)n</b>, np. <i>des Kunden</i>), <b>der</b> (r. ż. i l. mn.). Stoi <b>po</b> rzeczowniku, do którego się odnosi. Z <b>wegen, während, innerhalb</b>.",
      table: {
        head: ["", "r. m.", "r. ż.", "r. n.", "l. mn."],
        rows: [
          ["rodzajnik", "des", "der", "des", "der"],
          ["przykład", "des Vermieters", "der Miete", "des Kontos", "der Mieter"]
        ]
      },
      examples: [
        { tr: "To jest umowa wynajmującego.", note: "des Vermieters: rodzaj męski, rzeczownik z -s" },
        { tr: "Wysokość czynszu jest w umowie.", note: "der Miete: rodzaj żeński, rzeczownik się nie zmienia" },
        { tr: "Z powodu przeprowadzki potrzebuję nowego konta.", note: "wegen + dopełniacz: des Umzugs" },
        { tr: "Podczas urlopu dużo czytałem.", note: "während + dopełniacz: des Urlaubs" },
        { tr: "W ciągu tygodnia otrzymają Państwo kartę.", note: "innerhalb + dopełniacz: einer Woche" },
        { tr: "Konto Anny jest w innym banku.", note: "imię własne: Annas, przed rzeczownikiem" }
      ]
    },
    vocab: [
      "umowa najmu",
      "konto",
      "czynsz",
      "wynajmujący (właściciel)",
      "najemca",
      "kaucja",
      "wypowiedzenie",
      "termin (ostateczny)",
      "przelew",
      "otwierać (konto)",
      "podpisywać",
      "robić przelew"
    ],
    exercises: [
      {
        q: "Które zdanie jest poprawne?",
        opts: [
          "Die Höhe der Miete steht im Vertrag.",
          "Die Höhe den Miete steht im Vertrag.",
          "Die Höhe Miete steht im Vertrag."
        ],
        why: "<b>Der Miete</b>: <i>Miete</i> jest rodzaju żeńskiego, a dopełniacz żeński ma <i>der</i>. <i>Den</i> nie jest formą liczby pojedynczej rodzaju żeńskiego, a bez rodzajnika nie widać przypadka."
      },
      {
        q: "Uzupełnij: „Das ist der Vertrag ___ Vermieters.”",
        hint: "dopełniacz, rodzaj męski",
        why: "<b>Des</b>: dopełniacz rodzaju męskiego, a rzeczownik dostaje <i>-s</i> (<i>des Vermieters</i>)."
      },
      {
        q: "Uzupełnij: „Die Höhe ___ Miete steht im Vertrag.”",
        hint: "dopełniacz, rodzaj żeński",
        why: "<b>Der</b>: dopełniacz rodzaju żeńskiego w liczbie pojedynczej. Rzeczownik <i>Miete</i> się nie zmienia."
      },
      {
        q: "Uzupełnij zdanie.",
        tr: "Podczas urlopu dużo czytałem.",
        why: "<i>Während des Urlaubs habe ich viel gelesen.</i> <i>Während</i> jako przyimek łączy się z dopełniaczem: <i>des Urlaubs</i>."
      },
      {
        q: "Dopasuj każdy zwrot do jego znaczenia.",
        pairs: ["samochód ojca", "z powodu pogody", "podczas urlopu", "w ciągu tygodnia"]
      },
      {
        q: "Ułóż wyrazy w kolejności.",
        tr: "Z powodu przeprowadzki potrzebuję nowego konta.",
        why: "<i>Wegen des Umzugs brauche ich ein neues Konto.</i> Poprawne jest też <i>Ich brauche wegen des Umzugs ein neues Konto</i>. W pierwszym zdaniu czasownik <i>brauche</i> stoi na drugim miejscu, po grupie <i>Wegen des Umzugs</i>."
      },
      {
        q: "Przetłumacz: „To jest konto mojego brata.”",
        why: "<i>Das ist das Konto meines Bruders</i>: dopełniacz rodzaju męskiego z <i>meines</i> i <i>-s</i> przy rzeczowniku. W mowie dobre jest też <i>das Konto von meinem Bruder</i>."
      },
      {
        q: "Jesteś w banku i rozmawiasz z pracownikiem.",
        setting: "Chcesz otworzyć konto i używasz rejestru formalnego.",
        lines: [
          { tr: "Dzień dobry. W czym mogę pomóc?" },
          { tr: "Odpowiedz: chcesz otworzyć konto.", answerTr: "Dzień dobry, chcę otworzyć konto." },
          { tr: "Chętnie. Czy ma Pan/Pani przy sobie także kopię umowy najmu?" },
          { tr: "Odpowiedz: oczywiście, z powodu przeprowadzki masz wszystko przy sobie.", answerTr: "Oczywiście. Z powodu przeprowadzki mam wszystko przy sobie." },
          { tr: "Doskonale. W ciągu tygodnia otrzyma Pan/Pani kartę." },
          { tr: "Zapytaj, czy karta jest wysyłana pocztą.", answerTr: "Czy karta jest wysyłana pocztą?" }
        ]
      },
      {
        tr: "Dzień dobry, chcę otworzyć konto. Oto umowa najmu. Z powodu przeprowadzki potrzebuję nowego konta. W ciągu tygodnia dostanę kartę.",
        why: "W <i>eröffnen</i> <b>ö</b> jest zaokrąglone; w <i>Mietvertrag</i> <b>ie</b> jest długie [iː], a <b>v</b> to [f]; w <i>Wegen</i> <b>W</b> to [v]; w <i>Woche</i> <b>ch</b> po <b>o</b> to [x]."
      },
      {
        tr: "Czynsz jest przelewany pierwszego dnia miesiąca.",
        why: "W <i>Miete</i> <b>ie</b> jest długie [iː]; w <i>überwiesen</i> <b>ü</b> jest zaokrąglone, <b>w</b> to [v], a <b>s</b> między samogłoskami jest dźwięczne [z]."
      }
    ]
  },
  "lesson:b1-u03-l3": {
    theme: "Reklamacje",
    title: "Skarżę się, żeby ...",
    objectives: [
      "wyrażać cel za pomocą um ... zu, gdy podmiot jest ten sam",
      "wyrażać cel za pomocą damit, zwłaszcza gdy podmioty są różne",
      "grzecznie sformułować reklamację w Konjunktiv II",
      "nie mylić damit (cel) z weil (przyczyna)"
    ],
    theory: [
      {
        h: "um ... zu: cel przy tym samym podmiocie",
        p: "Żeby powiedzieć, <strong>w jakim celu</strong> coś się robi, gdy podmiot w obu częściach jest ten sam, używa się <strong>um ... zu</strong> z bezokolicznikiem na końcu: <em>Ich rufe an, um mich zu beschweren.</em> Przy czasowniku rozdzielnym <em>zu</em> wchodzi w środek: <em>Ich gehe zum Bürgeramt, um mich anzumelden.</em> Zdanie bezokolicznikowe wprowadzone przez <em>um</em> oddziela się od zdania głównego przecinkiem."
      },
      {
        h: "damit: zwykle podmioty różne",
        p: "Gdy podmioty są <strong>różne</strong>, używa się <strong>damit</strong> ze zdaniem, w którym odmieniony czasownik stoi na końcu, w trybie oznajmującym: <em>Ich schicke ein Foto, damit er den Schaden sieht.</em> Przy różnych podmiotach <em>um ... zu</em> jest niemożliwe. Także przy tym samym podmiocie <em>damit</em> istnieje (<em>..., damit ich pünktlich bin</em>), ale <em>um ... zu</em> jest formą naturalniejszą."
      },
      {
        h: "Grzeczna reklamacja",
        p: "W reklamacji liczy się ton: Konjunktiv II łagodzi prośbę. <em>Könnten Sie das bitte reparieren? Ich würde gern mit Ihrem Chef sprechen. Wir hätten gern eine schnelle Lösung.</em> Prośba w trybie rozkazującym (<em>Reparieren Sie das!</em>) brzmi o wiele ostrzej."
      },
      {
        contrast: "Po polsku cel wyraża w obu przypadkach to samo <em>żeby</em> (albo <em>aby</em>): z bezokolicznikiem przy tym samym podmiocie (<em>dzwonię, żeby się poskarżyć</em>) i z formą z końcówką <em>-ł</em> przy różnych (<em>wysyłam zdjęcie, żeby zobaczył szkodę</em>). Niemiecki rozdziela to na dwie konstrukcje, <em>um ... zu</em> i <em>damit</em>, a po <em>damit</em> stoi zwykły czas teraźniejszy w trybie oznajmującym (<em>damit er den Schaden sieht</em>), bez żadnej formy przypuszczającej. O wyborze decyduje więc podmiot, a nie samo „żeby”."
      },
      {
        trap: "<em>Weil</em> podaje przyczynę, <em>damit</em> cel: <em>Ich rufe an, weil die Heizung kaputt ist</em> (powód) i <em>Ich rufe an, damit jemand sie repariert</em> (cel). Z samym <em>um</em> nie można połączyć zdania z innym podmiotem: <em>Ich rufe an, um der Handwerker kommt</em> jest błędne. Cel wyrażony rzeczownikiem można oddać przyimkiem <em>für</em> + biernik (<em>Ich lerne für die Prüfung</em>) lub <em>zu</em> + celownik (<em>zur Anmeldung</em>, <em>zur Reparatur</em>). Wybór przyimka zależy od konstrukcji."
      },
      {
        tip: "Zanim wybierzesz, zapytaj siebie: kto wykonuje obie czynności? Jeśli ta sama osoba, <em>um ... zu</em>; jeśli różne osoby, <em>damit</em>. A jeśli rozmawiasz z urzędem albo firmą, zacznij od <em>Guten Tag</em> i mów <em>Sie</em>."
      }
    ],
    grammar: {
      title: "Zdanie celowe: um ... zu i damit",
      note: "Ten sam podmiot: <b>um ... zu</b> + bezokolicznik. Różne podmioty (albo ten sam): <b>damit</b> + odmieniony czasownik na końcu, w trybie oznajmującym.",
      table: {
        head: ["konstrukcja", "kiedy", "przykład"],
        rows: [
          ["um ... zu + bezokolicznik", "ten sam podmiot", "Ich rufe an, um mich zu beschweren."],
          ["damit + czasownik na końcu", "cel; podmioty te same lub różne", "Ich schicke ein Foto, damit er den Schaden sieht."],
          ["weil + czasownik na końcu", "przyczyna, nie cel", "Ich rufe an, weil die Heizung kaputt ist."]
        ]
      },
      examples: [
        { tr: "Dzwonię, żeby się poskarżyć.", note: "um ... zu, ten sam podmiot: ich" },
        { tr: "Idę do urzędu, żeby się zameldować.", note: "czasownik rozdzielny: um mich anzumelden" },
        { tr: "Wysyłam zdjęcie, żeby on zobaczył szkodę.", note: "damit: dwa podmioty, ich i er" },
        { tr: "Czy mogliby Państwo to naprawić?", note: "Konjunktiv II od können: grzeczna prośba" },
        { tr: "Chciałbym porozmawiać z Państwa szefem.", note: "würde gern + bezokolicznik" },
        { tr: "Chcielibyśmy szybkiego rozwiązania.", note: "hätten gern: Konjunktiv II od haben" }
      ]
    },
    vocab: [
      "reklamacja",
      "wada",
      "szkoda",
      "naprawa",
      "rzemieślnik (fachowiec, który naprawia)",
      "rachunek (faktura)",
      "gwarancja",
      "wymiana, zastępstwo (Ersatz)",
      "skarżyć się, składać reklamację",
      "naprawiać",
      "wymieniać",
      "pilny"
    ],
    exercises: [
      {
        q: "Uzupełnij: „Ich rufe an, ___ mich zu beschweren.”",
        opts: ["um", "damit", "weil"],
        why: "<b>Um</b>: ten sam podmiot (<i>ich</i>) i bezokolicznik z <i>zu</i>. <i>Damit</i> wymaga odmienionego czasownika, a <i>weil</i> podaje przyczynę."
      },
      {
        q: "Uzupełnij, by wyrazić cel: „Ich schicke ein Foto, ___ der Vermieter den Schaden sieht.” (Wysyłam zdjęcie, żeby wynajmujący zobaczył szkodę.)",
        opts: ["damit", "um", "weil"],
        why: "<b>Damit</b>: podmioty są różne (<i>ich</i> i <i>der Vermieter</i>) i jest odmieniony czasownik. <i>Um</i> nie występuje z nowym podmiotem. <i>Weil</i> podałoby przyczynę („bo wynajmujący widzi szkodę”), a nie żądany cel."
      },
      {
        q: "Uzupełnij: „Ich schreibe eine E-Mail, ___ der Vermieter die Heizung repariert.”",
        hint: "cel, różne podmioty",
        why: "<b>Damit</b>: różne podmioty, odmieniony czasownik na końcu."
      },
      {
        q: "Uzupełnij: „Ich rufe an, um mich ___ beschweren.”",
        hint: "um ... ?",
        why: "<b>Zu</b>: <i>um ... zu + bezokolicznik</i>, z <i>zu</i> tuż przed czasownikiem."
      },
      {
        q: "Uzupełnij zdanie.",
        tr: "Idę do urzędu, żeby się zameldować (sich anmelden).",
        why: "<i>Ich gehe zum Bürgeramt, um mich anzumelden.</i> Przy czasowniku rozdzielnym <i>anmelden</i> <i>zu</i> wchodzi w środek: <i>anzumelden</i>."
      },
      {
        q: "Dopasuj każdy zwrot do jego funkcji.",
        pairs: [
          "ten sam podmiot, bezokolicznik",
          "cel, odmieniony czasownik na końcu; podmioty te same lub różne",
          "podaje przyczynę",
          "podaje cel przy rzeczowniku"
        ]
      },
      {
        q: "Ułóż wyrazy w kolejności (zacznij od Ich).",
        tr: "Wysyłam zdjęcie, żeby zobaczył szkodę.",
        why: "<i>Ich schicke ein Foto, damit er den Schaden sieht.</i> Po <i>damit</i> odmieniony czasownik <i>sieht</i> idzie na koniec."
      },
      {
        q: "Przetłumacz: „Dzwonię, żeby się poskarżyć.” (użyj anrufen i um ... zu)",
        why: "<i>Ich rufe an, um mich zu beschweren</i>: <i>anrufen</i> jest rozdzielne, a po <i>um</i> zaimek zwrotny <i>mich</i> zostaje przed bezokolicznikiem."
      },
      {
        tr: "Dzień dobry, dzwonię, żeby złożyć reklamację. Ogrzewanie jest zepsute. Wysyłam zdjęcie, żeby Państwo zobaczyli szkodę. Czy mogliby Państwo jak najszybciej przysłać kogoś?",
        why: "W <i>beschweren</i> <b>sch</b> to [ʃ], a <b>w</b> to [v]; w <i>Heizung</i> <b>z</b> to [ts]; w <i>Könnten</i> <b>ö</b> jest zaokrąglone; w <i>schicke</i> <b>sch</b> to [ʃ], a <b>ck</b> oznacza samogłoskę krótką."
      },
      {
        tr: "Chciałbym porozmawiać z Państwa szefem, żeby się poskarżyć.",
        why: "W <i>würde</i> <b>ü</b> jest zaokrąglone; w <i>Chef</i> <b>ch</b> to [ʃ] (wyraz pochodzenia francuskiego); w <i>sprechen</i> <b>sp</b> na początku sylaby czyta się [ʃp], a <b>ch</b> to [ç]."
      }
    ]
  },
  "lesson:b1-u03-l4": {
    theme: "Praca",
    title: "Umowa o pracę",
    objectives: [
      "czytać najważniejsze klauzule umowy o pracę",
      "używać razem strony biernej i dopełniacza w zdaniach formalnych",
      "rozpoznawać okres próbny, okres wypowiedzenia i wynagrodzenie",
      "rozumieć różnicę między umową na czas określony a na czas nieokreślony"
    ],
    theory: [
      {
        h: "Język umowy",
        p: "Umowa o pracę często używa <strong>strony biernej</strong> i <strong>dopełniacza</strong>, bo opisuje zasady bez wskazywania, kto je stosuje: <em>Das Gehalt wird am Ende des Monats bezahlt. Die Probezeit des Arbeitnehmers dauert sechs Monate. Die Kündigungsfrist des Vertrags beträgt vier Wochen.</em> Kto rozpoznaje <em>wird ... bezahlt</em> i <em>des ... s</em>, rozumie już strukturę zdania."
      },
      {
        h: "Strona bierna i dopełniacz w jednym zdaniu",
        p: "Obie struktury łączą się: <em>Der Vertrag wurde von beiden Seiten unterschrieben.</em> (strona bierna z wykonawcą) oraz <em>Die Arbeitszeit des Mitarbeiters wird im Vertrag genannt.</em> (dopełniacz i strona bierna). W stronie biernej Partizip II stoi na końcu, a dopełniacz następuje po rzeczowniku, do którego się odnosi."
      },
      {
        h: "Słowa, które wracają",
        p: "<strong>Arbeitgeber</strong> to ten, kto zatrudnia, <strong>Arbeitnehmer</strong> to ten, kto jest zatrudniany. <strong>Probezeit</strong> to początkowy okres, w którym stosunek pracy łatwiej rozwiązać; <strong>Kündigungsfrist</strong> to okres wypowiedzenia. Umowa jest <strong>befristet</strong>, jeśli ma termin końca, a <strong>unbefristet</strong>, jeśli jest na czas nieokreślony."
      },
      {
        contrast: "Po polsku mówi się <em>okres próbny</em>, <em>okres wypowiedzenia</em>, <em>umowa o pracę</em>: przymiotnik albo dopełniacz, albo przyimek po rzeczowniku. Po niemiecku to wyrazy złożone, pisane razem: <em>Probezeit, Kündigungsfrist, Arbeitsvertrag</em>. Określenie stoi na początku, a rodzajnik i rodzaj bierze się od <strong>ostatniego</strong> elementu: <em>die Zeit</em> daje <em>die Probezeit</em>, <em>die Frist</em> daje <em>die Kündigungsfrist</em>. W złożeniach często pojawia się mała łączówka, na przykład <em>-s-</em> w <em>Arbeitsvertrag</em>."
      },
      {
        trap: "Nie myl Präteritum strony biernej z Präteritum strony czynnej: <em>Er wurde eingestellt</em> (został zatrudniony) i <em>Er stellte ein</em> (zatrudnił, strona czynna) mają podmioty o przeciwnych rolach. Sprawdź więc, kto wykonuje czynność. A przy <em>des Arbeitnehmers</em> pamiętaj o <em>-s</em> dopełniacza rodzaju męskiego."
      },
      {
        tip: "Gdy czytasz umowę, podkreślaj czasowniki z <em>werden</em> i grupy <em>des/der + rzeczownik</em>. To dwie struktury, które niosą zasady, a reszta to najczęściej słownictwo."
      }
    ],
    grammar: {
      title: "Strona bierna i dopełniacz w umowach",
      note: "<b>werden</b> + Partizip II dla zasad (<b>wird bezahlt</b>), <b>des/der + rzeczownik</b> dla właściciela (<b>des Vertrags</b>).",
      table: {
        head: ["struktura", "przykład", "znaczenie"],
        rows: [
          ["strona bierna, czas teraźniejszy", "Das Gehalt wird bezahlt.", "wynagrodzenie jest wypłacane"],
          ["strona bierna, Präteritum", "Der Arbeitnehmer wurde eingestellt.", "pracownik został zatrudniony"],
          ["dopełniacz, rodzaj męski", "die Probezeit des Arbeitnehmers", "okres próbny pracownika"],
          ["dopełniacz, rodzaj żeński", "die Höhe der Miete", "wysokość czynszu"]
        ]
      },
      examples: [
        { tr: "Umowa została podpisana przez obie strony.", note: "strona bierna z wykonawcą: von beiden Seiten" },
        { tr: "Wynagrodzenie jest wypłacane na koniec miesiąca.", note: "strona bierna, czas teraźniejszy, des Monats" },
        { tr: "Okres próbny pracownika trwa sześć miesięcy.", note: "dopełniacz, rodzaj męski: des Arbeitnehmers" },
        { tr: "Czas pracy jest podany w umowie.", note: "strona bierna: wird ... genannt" },
        { tr: "Pracownik został zatrudniony w maju.", note: "strona bierna w Präteritum: wurde eingestellt" },
        { tr: "Okres wypowiedzenia umowy wynosi cztery tygodnie.", note: "dopełniacz, rodzaj męski: des Vertrags" }
      ]
    },
    vocab: [
      "umowa o pracę",
      "wynagrodzenie",
      "okres próbny",
      "pracodawca",
      "pracownik",
      "okres wypowiedzenia",
      "czas pracy",
      "stanowisko",
      "wypowiedzieć umowę, zrezygnować z pracy (jemandem kündigen = zwolnić kogoś)",
      "zatrudniać",
      "płacić",
      "na czas określony"
    ],
    exercises: [
      {
        q: "Które zdanie jest poprawne?",
        opts: [
          "Das Gehalt wird am Ende des Monats bezahlt.",
          "Das Gehalt wird am Ende des Monats bezahlen.",
          "Das Gehalt wird am Ende der Monat bezahlt."
        ],
        why: "<b>Wird ... bezahlt</b> z Partizip II na końcu i <b>des Monats</b> w dopełniaczu rodzaju męskiego. Bezokolicznik <i>bezahlen</i> jest błędny w stronie biernej, a <i>der Monat</i> nie jest dopełniaczem."
      },
      {
        q: "Wczoraj umowa została podpisana przez obie strony. Które zdanie?",
        opts: [
          "Der Vertrag wurde gestern von beiden Seiten unterschrieben.",
          "Der Vertrag wird gestern von beiden Seiten unterschrieben.",
          "Der Vertrag hat gestern von beiden Seiten unterschrieben."
        ],
        why: "<b>Wurde ... unterschrieben</b>: strona bierna w Präteritum, z <i>von + celownik</i> dla wykonawcy. <i>Hat</i> zrobiłoby z umowy podmiot, który podpisuje."
      },
      {
        q: "Uzupełnij: „Die Probezeit ___ dauert sechs Monate.”",
        opts: ["des Arbeitnehmers", "dem Arbeitnehmer", "den Arbeitnehmers"],
        why: "<b>Des Arbeitnehmers</b>: dopełniacz rodzaju męskiego w liczbie pojedynczej, z <i>des</i> i <i>-s</i> przy rzeczowniku."
      },
      {
        q: "Uzupełnij: „Die Kündigungsfrist ___ Vertrags beträgt vier Wochen.”",
        hint: "dopełniacz, rodzaj męski",
        why: "<b>Des</b>: <i>Vertrag</i> jest rodzaju męskiego, a dopełniacz ma <i>des</i> i <i>-s</i>: <i>des Vertrags</i>."
      },
      {
        q: "Uzupełnij zdanie.",
        tr: "Pracownik został zatrudniony w maju (strona bierna w Präteritum).",
        why: "<i>Der Arbeitnehmer wurde im Mai eingestellt.</i> Strona bierna w Präteritum: <i>wurde</i> + Partizip II <i>eingestellt</i>, który pozostaje w jednym kawałku."
      },
      {
        q: "Dopasuj każde słowo do jego znaczenia.",
        pairs: ["okres próbny", "okres wypowiedzenia", "pracodawca", "wynagrodzenie"]
      },
      {
        q: "Ułóż wyrazy w kolejności.",
        tr: "Okres próbny pracownika trwa sześć miesięcy.",
        why: "<i>Die Probezeit des Arbeitnehmers dauert sechs Monate.</i> Dopełniacz <i>des Arbeitnehmers</i> następuje po rzeczowniku <i>Probezeit</i>."
      },
      {
        q: "Przetłumacz: „Wynagrodzenie jest wypłacane na koniec miesiąca.”",
        why: "<i>Das Gehalt wird am Ende des Monats bezahlt.</i> Poprawne są też <i>am Monatsende</i> i <i>ausgezahlt</i>."
      },
      {
        tr: "Umowa o pracę została wczoraj podpisana przez obie strony. Okres próbny trwa sześć miesięcy, a wynagrodzenie jest wypłacane na koniec miesiąca. Okres wypowiedzenia umowy wynosi cztery tygodnie.",
        why: "W <i>Arbeitsvertrag</i> <b>ei</b> to [aɪ], a <b>v</b> to [f]; w <i>unterschrieben</i> <b>sch</b> to [ʃ], a <b>ie</b> jest długie [iː]; w <i>Probezeit</i> <b>z</b> to [ts]."
      },
      {
        tr: "Wynagrodzenie pracownika jest wypłacane na koniec miesiąca.",
        why: "W <i>Arbeitnehmers</i> <b>ei</b> to [aɪ], a <b>eh</b> wydłuża samogłoskę [eː]; w <i>Monatsende</i> <b>o</b> jest długie [oː]; w <i>bezahlt</i> <b>ah</b> wydłuża samogłoskę [aː]."
      }
    ]
  },
  "lesson:b1-u03-test": {
    theme: "Sprawdzian",
    title: "Test: Urzędy i umowy",
    objectives: [
      "sprawdzić stronę bierną, dopełniacz z wegen, während i innerhalb oraz um ... zu i damit"
    ],
    theory: [
      {
        p: "Dziesięć pytań z całej jednostki. Zaliczenie od 70%. Nie zaglądaj do lekcji w trakcie odpowiadania: jeśli czegoś nie pamiętasz, lepiej wrócić i powtórzyć."
      }
    ],
    exercises: [
      {
        q: "Uzupełnij: „Das Formular ___ am Schalter abgegeben.”",
        hint: "werden, czas teraźniejszy",
        why: "<b>Wird</b>: strona bierna procesu w czasie teraźniejszym, podmiot w liczbie pojedynczej."
      },
      {
        q: "Uzupełnij: „Der Mietvertrag ___ gestern unterschrieben.”",
        hint: "werden, Präteritum",
        why: "<b>Wurde</b>: podpowiedź wymaga Präteritum od <i>werden</i>, czyli <i>wurde</i>. Samo <i>gestern</i> nie wystarcza: strona bierna w Perfekt (<i>ist ... unterschrieben worden</i>) to inna forma, tu niewymagana."
      },
      {
        q: "Uzupełnij: „Die Höhe ___ Miete steht im Vertrag.”",
        hint: "dopełniacz, rodzaj żeński",
        why: "<b>Der</b>: dopełniacz rodzaju żeńskiego w liczbie pojedynczej."
      },
      {
        q: "Uzupełnij: „Ich schicke ein Foto, ___ er den Schaden sieht.”",
        hint: "cel, różne podmioty",
        why: "<b>Damit</b>: <i>ich</i> i <i>er</i> to różne podmioty, a odmieniony czasownik idzie na koniec."
      },
      {
        q: "Wczoraj konto zostało otwarte. Które zdanie?",
        opts: [
          "Das Konto wurde gestern eröffnet.",
          "Das Konto wird gestern eröffnet.",
          "Das Konto haben gestern eröffnet."
        ],
        why: "<b>Wurde ... eröffnet</b>: strona bierna w Präteritum. <i>Wird</i> to czas teraźniejszy, a <i>haben</i> nie zgadza się z <i>Konto</i>."
      },
      {
        q: "Które zdanie jest poprawne?",
        opts: [
          "Während des Urlaubs bin ich nicht im Büro.",
          "Während der Urlaub bin ich nicht im Büro.",
          "Während des Urlaubs ich bin nicht im Büro."
        ],
        why: "<b>Während des Urlaubs</b>: przyimek z dopełniaczem, a czasownik <i>bin</i> tuż po nim, na drugim miejscu."
      },
      {
        q: "Uzupełnij: „Er schickt eine E-Mail, ___ der Chef Bescheid weiß.”",
        opts: ["damit", "um", "ohne"],
        why: "<b>Damit</b>: podmioty są różne (<i>er</i> i <i>der Chef</i>), a odmieniony czasownik idzie na koniec."
      },
      {
        q: "Dopasuj każdy zwrot do jego znaczenia.",
        pairs: [
          "Formularz jest sprawdzany.",
          "z powodu pogody",
          "ten sam podmiot, bezokolicznik",
          "cel, odmieniony czasownik na końcu; podmioty te same lub różne"
        ]
      },
      {
        tr: "Formularz jest składany przy okienku. Z powodu przeprowadzki potrzebuję konta. Dzwonię, żeby ktoś naprawił ogrzewanie.",
        why: "W <i>Schalter</i> <b>sch</b> to [ʃ]; w <i>Umzugs</i> <b>z</b> to [ts]; w <i>Heizung</i> <b>ei</b> to [aɪ], a <b>z</b> to [ts]; w <i>repariert</i> <b>ie</b> jest długie [iː]."
      },
      {
        tr: "Umowa najmu została podpisana, a kaucja jest wpłacana przelewem.",
        why: "W <i>Mietvertrag</i> <b>ie</b> jest długie [iː], a <b>v</b> to [f]; w <i>unterschrieben</i> <b>sch</b> to [ʃ]; w <i>überwiesen</i> <b>ü</b> jest zaokrąglone."
      }
    ]
  },
  "unit:b1-u04": {
    title: "Opinie i media",
    grammarNote: "dass w mowie zależnej · Präteritum i Plusquamperfekt w tekstach pisanych · nachdem i bevor · zwar ... aber, sowohl ... als auch · odmiana przymiotnika"
  },
  "lesson:b1-u04-l1": {
    theme: "Relacjonowanie",
    title: "Powiedziała, że ...",
    objectives: [
      "przekazywać, co ktoś powiedział, w zdaniu podrzędnym z dass",
      "dopasowywać zaimki do punktu widzenia osoby, która relacjonuje",
      "przekazywać pytanie za pomocą ob albo słowa pytającego",
      "używać czasowników mówienia w Perfekt: gesagt, erzählt, berichtet, behauptet"
    ],
    theory: [
      {
        h: "Mowa zależna z dass",
        p: "Żeby przekazać, co ktoś powiedział, używa się czasownika mówienia (<em>sagen, erzählen, berichten, behaupten, meinen</em>) i zdania podrzędnego z <strong>dass</strong>. Odmieniony czasownik idzie <strong>na koniec</strong>, a przed <em>dass</em> zawsze stoi przecinek: <em>Anna hat gesagt, dass sie keine Zeit hat.</em> Gdy opowiadasz coś ustnie, czasownik mówienia stoi zwykle w Perfekt (<em>hat gesagt, hat erzählt</em>)."
      },
      {
        h: "Zaimki zmieniają się z punktem widzenia",
        p: "Kto relacjonuje, mówi z innego punktu widzenia, więc osoby się zmieniają. Anna mówi <em>„Ich habe keine Zeit”</em>, a ty przekazujesz <em>Anna hat gesagt, dass <strong>sie</strong> keine Zeit hat.</em> Jeśli ktoś mówi do ciebie <em>„Ich helfe dir”</em>, przekazujesz <em>Er hat gesagt, dass er <strong>mir</strong> hilft.</em> Podmiot musi być zawsze wyrażony: po niemiecku nie można go pominąć."
      },
      {
        h: "Przekazane pytania i prośby",
        p: "Pytanie rozstrzygające (tak albo nie) staje się zdaniem podrzędnym z <strong>ob</strong>, pytanie ze słowem pytającym zachowuje to słowo, a czasownik w obu przypadkach idzie na koniec: <em>Sie hat gefragt, ob ich mitkomme. Er hat gefragt, wann der Zug kommt.</em> Prośbę przekazuje się zwykle z <em>sollen</em>: <em>Sie hat gesagt, dass ich bald kommen soll.</em>"
      },
      {
        h: "Bez dass",
        p: "Po <em>sagen, meinen, glauben</em> można też pominąć <em>dass</em>: wtedy czasownik zostaje na <strong>drugim miejscu</strong>, jak w zwykłym zdaniu. <em>Sie hat gesagt, sie hat keine Zeit.</em> jest poprawne, ale bardziej potoczne; z <em>dass</em> odmieniony czasownik idzie na koniec: <em>..., dass sie keine Zeit hat.</em>"
      },
      {
        contrast: "Po polsku czas w mowie zależnej się nie przesuwa: <em>Anna powiedziała, że nie ma czasu.</em> W zdaniu z <em>dass</em> niemiecki zwykle robi tak samo, więc tu polski nawyk pomaga: <em>Anna hat gesagt, dass sie keine Zeit hat.</em> Różnice są trzy. Po pierwsze podmiot: po polsku można go pominąć (<em>powiedziała, że nie ma czasu</em>), po niemiecku musi być wyrażony (<em>dass <strong>sie</strong> keine Zeit hat</em>). Po drugie szyk: po polskim <em>że</em> jest swobodny, a po <em>dass</em> odmieniony czasownik stoi <strong>na końcu</strong>. Po trzecie prośba: polskie <em>żeby</em> z formą przeszłą (<em>powiedziała, żebym przyszedł</em> albo <em>przyszła</em>) to po niemiecku <em>dass</em> + <em>sollen</em>: <em>Sie hat gesagt, dass ich kommen soll.</em> Polskie <em>czy</em> w przekazanym pytaniu to <em>ob</em>."
      },
      {
        trap: "<em>dass</em> z dwoma <em>s</em> to spójnik, polskie <em>że</em>; <em>das</em> z jednym <em>s</em> to rodzajnik albo zaimek (<em>das Buch, das ich lese</em>, czyli <em>książka, którą czytam</em>). Po <em>dass</em> odmieniony czasownik stoi na końcu: <em>dass sie keine Zeit hat</em>, a nie <s>dass sie hat keine Zeit</s>, choć polski szyk jest swobodniejszy i zależy od kontekstu oraz akcentu (<em>że ona czasu nie ma</em>, <em>że nie ma czasu</em>). Czasownik na drugim miejscu należy wyłącznie do wersji bez <em>dass</em>."
      },
      {
        tip: "Trzy kroki: 1) wybierz czasownik mówienia w Perfekt; 2) dodaj przecinek i <em>dass</em> (albo <em>ob</em> przy pytaniu rozstrzygającym); 3) przepisz zdanie z właściwymi osobami i czasownikiem na końcu."
      }
    ],
    grammar: {
      title: "Od mowy niezależnej do zależnej",
      note: "czasownik mówienia w Perfekt + <b>dass</b> (stwierdzenie) albo <b>ob</b> (pytanie rozstrzygające) + odmieniony czasownik <b>na końcu</b>; zaimki dopasowuje się do osoby, która relacjonuje.",
      table: {
        head: ["mowa niezależna", "mowa zależna"],
        rows: [
          ["Anna: «Ich habe keine Zeit.»", "Anna hat gesagt, dass sie keine Zeit hat."],
          ["Tom: «Ich komme morgen.»", "Tom hat erzählt, dass er morgen kommt."],
          ["Anna und Tom: «Wir ziehen um.»", "Anna und Tom haben erzählt, dass sie umziehen."],
          ["Er: «Kommst du mit?»", "Er hat gefragt, ob ich mitkomme."],
          ["Sie: «Wann kommt der Zug?»", "Sie hat gefragt, wann der Zug kommt."]
        ]
      },
      examples: [
        { tr: "Anna powiedziała, że nie ma czasu.", note: "ich zmienia się w sie; czasownik na końcu" },
        { tr: "Tom opowiada, że jutro przyjdzie.", note: "Präsens z morgen wyraża przyszłość; w mowie zależnej nie trzeba automatycznie zmieniać czasu" },
        { tr: "Komunikat mówi, że ceny rosną.", note: "także tekst może „mówić”" },
        { tr: "Zapytała, czy pójdę z nią.", note: "pytanie rozstrzygające: ob" },
        { tr: "Twierdził, że nic nie widział.", note: "behaupten + dass; Perfekt w zdaniu podrzędnym" },
        { tr: "Powiedziała, żebym niedługo przyszedł.", note: "prośba przekazana z sollen; po polsku żeby" }
      ]
    },
    vocab: [
      "wiadomość",
      "krótka wiadomość, komunikat",
      "twierdzenie, teza",
      "wypowiedź, zeznanie",
      "sprawozdanie, relacja",
      "plotka, pogłoska",
      "odpowiedź",
      "pytanie",
      "opowiadać",
      "twierdzić",
      "relacjonować, donosić",
      "odpowiadać"
    ],
    exercises: [
      {
        q: "Anna mówi: „Ich habe keine Zeit.” Jak to przekażesz?",
        opts: [
          "Anna sagt, dass sie keine Zeit hat.",
          "Anna sagt, dass ich keine Zeit habe.",
          "Anna sagt, dass sie hat keine Zeit."
        ],
        why: "<b>Sie</b> zamiast <i>ich</i>, a czasownik <i>hat</i> na końcu zdania podrzędnego. <i>Ich</i> oznaczałoby osobę, która relacjonuje, a nie Annę."
      },
      {
        q: "Uzupełnij: „Tom hat gesagt, ___ er morgen kommt.”",
        hint: "spójnik, stwierdzenie",
        why: "<b>Dass</b>: wprowadza przekazane stwierdzenie i odsyła czasownik na koniec."
      },
      {
        q: "Uzupełnij: „Sie fragt, ___ du mitkommst.”",
        hint: "przekazane pytanie rozstrzygające",
        why: "<b>Ob</b>: pierwotne pytanie brzmiało „Kommst du mit?”, odpowiedź to tak albo nie."
      },
      {
        q: "Paul mówi: „Ich bin müde.” Uzupełnij: „Paul sagt, dass ___ müde ist.”",
        hint: "zaimek, 3. osoba rodzaju męskiego",
        why: "<b>Er</b>: Paul jest mężczyzną, a osoba, która relacjonuje, nie mówi <i>ich</i>."
      },
      {
        q: "Uzupełnij: „Sie hat mir alles ___.”",
        hint: "erzählen, Partizip II",
        why: "<b>Erzählt</b>: <i>hat erzählt</i>, Perfekt od <i>erzählen</i>. Partizip II czasowników słabych to <i>ge-</i> + rdzeń + <i>-t</i>, ale <i>erzählen</i> zaczyna się od <i>er-</i> i nie dostaje <i>ge-</i>."
      },
      {
        q: "Uzupełnij zdanie.",
        tr: "Komunikat mówi, że ceny rosną.",
        why: "<i>Die Meldung sagt, dass die Preise steigen.</i> Po <i>dass</i> czasownik <i>steigen</i> idzie na koniec."
      },
      {
        q: "Dopasuj każde zdanie do jego znaczenia.",
        pairs: [
          "Twierdzi, że jest niewinny.",
          "Zapytała, czy przyjdę.",
          "Komunikat mówi, że pada śnieg.",
          "Tom opowiada, że się przeprowadza."
        ]
      },
      {
        q: "Przetłumacz: „Anna powiedziała, że nie ma czasu.”",
        why: "<i>Anna hat gesagt, dass sie keine Zeit hat.</i> Po <i>hat gesagt</i> niemiecki, tak jak polski, nie wymaga automatycznego przesunięcia czasu: <i>hat</i> powtarza czas z wypowiedzi Anny. Dobra jest też wersja bez <i>dass</i>, z czasownikiem na drugim miejscu: <i>Anna hat gesagt, sie hat keine Zeit.</i>"
      },
      {
        tr: "Słyszałeś już tę wiadomość? Anna opowiedziała, że się przeprowadza. Powiedziała, że mieszkanie jest bardzo duże, i zapytała, czy jej pomożemy.",
        why: "W <i>Nachricht</i> pierwsze <b>ch</b> to [x] (po <i>a</i>), a drugie [ç] (po <i>i</i>); w <i>umzieht</i> <b>z</b> to [ts], a <b>ie</b> jest długie [iː]; w <i>sehr</i> <b>e</b> jest długie."
      },
      {
        tr: "Mój kolega opowiedział, że przyjdzie jutro rano.",
        why: "W <i>früh</i> <b>ü</b> jest zaokrąglone i długie; w <i>kommt</i> <b>o</b> jest krótkie; w <i>dass</i> <b>a</b> jest krótkie, a <b>ss</b> to [s]."
      }
    ]
  },
  "lesson:b1-u04-l2": {
    theme: "Prasa",
    title: "Czytanie artykułu",
    objectives: [
      "rozpoznawać i stosować Präteritum czasowników słabych, mocnych i mieszanych w tekstach pisanych",
      "tworzyć Plusquamperfekt z hatte albo war i Partizip II",
      "używać nachdem z Plusquamperfekt oraz bevor",
      "rozumieć, jak tekst prasowy porządkuje zdarzenia w czasie"
    ],
    theory: [
      {
        h: "Präteritum w piśmie",
        p: "W tekstach pisanych, które opowiadają o przeszłości (artykuły, sprawozdania, powieści), czasem narracji jest zwykle <strong>Präteritum</strong>; w rozmowie częściej używa się Perfekt. Czasowniki <strong>słabe</strong> dostają <em>-te</em> (<em>meldete, machte</em>), <strong>mocne</strong> zmieniają samogłoskę rdzenia (<em>schrieb, ging, las</em>) i nie mają końcówki w 1. i 3. osobie liczby pojedynczej. Czasowniki <strong>mieszane</strong> (<em>dachte, brachte</em>) zmieniają rdzeń, ale dostają końcówki słabe. W mowie <em>sein, haben</em> i czasowniki modalne są bardzo częste w Präteritum (<em>war, hatte, konnte</em>)."
      },
      {
        h: "Plusquamperfekt: przed innym zdarzeniem z przeszłości",
        p: "Tworzy się go z czasownikiem posiłkowym w Präteritum, <strong>hatte</strong> albo <strong>war</strong>, i Partizip II na końcu: <em>Er hatte lange recherchiert. Der Zug war schon abgefahren.</em> Czasownik posiłkowy jest ten sam co w Perfekt (<em>haben</em> albo <em>sein</em>). Mówi, że zdarzenie nastąpiło <strong>przed</strong> innym: <em>Die Nachricht stand in der Zeitung, aber niemand hatte sie gelesen.</em>"
      },
      {
        h: "nachdem i bevor",
        p: "<strong>nachdem</strong> (po tym, jak) wprowadza zdanie podrzędne z czasownikiem na końcu i, jeśli zdanie główne jest w Präteritum, z <strong>Plusquamperfekt</strong>: <em>Nachdem der Minister gesprochen hatte, gingen die Gäste nach Hause.</em> <strong>bevor</strong> (zanim) ma zwykle ten sam czas co zdanie główne: <em>Bevor die Zeitung den Artikel veröffentlichte, prüfte die Redaktion die Quelle.</em> Gdy zdanie podrzędne stoi na początku, zdanie główne zaczyna się od odmienionego czasownika."
      },
      {
        contrast: "Polski ma w praktyce jeden czas przeszły, a kolejność zdarzeń oddają aspekt i kontekst: <em>Kiedy przyszła, pociąg już odjechał.</em> Czas zaprzeszły (<em>był odjechał</em>) jest dziś książkowy i rzadki. Po niemiecku w opowiadaniu o przeszłości wcześniejsze zdarzenie zwykle oznacza się Plusquamperfekt, zwłaszcza po <em>nachdem</em>: <em>Der Zug <strong>war</strong> schon <strong>abgefahren</strong>.</em> (gdy kolejność jasno wynika z kontekstu, Niemcy czasem go pomijają). Präteritum i Perfekt nie różnią się aspektem: <em>schrieb</em> może znaczyć i <em>pisał</em>, i <em>napisał</em>; różnica dotyczy rejestru, pisma albo mowy. <em>Po tym, jak</em> to <em>nachdem</em>, a <em>zanim</em> to <em>bevor</em>, ale polskie skróty bez podmiotu (<em>przeczytawszy artykuł</em>, <em>przed opublikowaniem</em>) w tej lekcji oddajemy po niemiecku <strong>zdaniem z własnym podmiotem</strong> i odmienionym czasownikiem (istnieją też formy rzeczownikowe, np. <em>vor der Veröffentlichung</em>): <em>Nachdem er den Artikel gelesen hatte, ...; Bevor die Zeitung den Artikel veröffentlichte, ...</em>"
      },
      {
        trap: "Nie myl <em>nachdem</em> z <em>nach</em>. <em>nach</em> to przyimek z celownikiem (<em>nach dem Essen</em>, <em>po obiedzie</em>), a <em>nachdem</em> wprowadza zdanie z czasownikiem na końcu (<em>po tym, jak</em>): ta sama różnica co między polskim <em>po</em> a <em>po tym, jak</em>. W zdaniu z <em>nachdem</em> oba czasowniki stoją razem na końcu, a posiłkowy jest ostatni: <em>..., nachdem er gesprochen hatte</em>."
      },
      {
        tip: "Kiedy czytasz artykuł, najpierw szukaj czasowników w Präteritum: to one niosą opowieść. Czasowniki w Plusquamperfekt (<em>hatte ... gesagt, war ... gekommen</em>) pokazują to, co wydarzyło się <em>wcześniej</em>. Z trzema formami podstawowymi (bezokolicznik, Präteritum, Partizip II) przeczytasz większość artykułów."
      }
    ],
    grammar: {
      title: "Präteritum i Plusquamperfekt",
      note: "<b>Präteritum</b> dla samej opowieści (<b>schrieb, ging, meldete</b>), <b>Plusquamperfekt</b> dla tego, co stało się wcześniej (<b>hatte geschrieben, war gegangen</b>); <b>nachdem</b> + Plusquamperfekt, <b>bevor</b>: często ten sam czas co w zdaniu głównym; Plusquamperfekt w zdaniu głównym też jest możliwy, gdy chcesz podkreślić uprzedniość.",
      table: {
        head: ["bezokolicznik", "Präteritum (er/sie)", "Partizip II"],
        rows: [
          ["schreiben", "schrieb", "geschrieben"],
          ["lesen", "las", "gelesen"],
          ["gehen", "ging", "gegangen"],
          ["sprechen", "sprach", "gesprochen"],
          ["erscheinen", "erschien", "erschienen"],
          ["melden", "meldete", "gemeldet"],
          ["denken", "dachte", "gedacht"],
          ["bringen", "brachte", "gebracht"]
        ]
      },
      examples: [
        { tr: "Dziennikarz napisał artykuł wieczorem.", note: "Präteritum czasownika mocnego: schrieb" },
        { tr: "Gazeta ukazywała się każdego ranka.", note: "erscheinen: erschien" },
        { tr: "Po tym, jak minister przemówił, goście poszli do domu.", note: "nachdem + Plusquamperfekt" },
        { tr: "Zanim gazeta opublikowała artykuł, redakcja sprawdziła źródło.", note: "bevor + Präteritum" },
        { tr: "Długo zbierał materiały, zanim zaczął pisać.", note: "Plusquamperfekt: hatte recherchiert" },
        { tr: "Wiadomość była w gazecie, ale nikt jej nie przeczytał.", note: "hatte ... gelesen: przed opisywaną sceną" }
      ]
    },
    vocab: [
      "artykuł",
      "gazeta",
      "tytuł na pierwszej stronie, nagłówek prasowy",
      "tytuł (tekstu)",
      "dziennikarz",
      "źródło",
      "czytelnik",
      "redakcja",
      "publikować",
      "ukazywać się (o gazecie, książce)",
      "zbierać materiały, badać temat",
      "informować, podawać (wiadomość)"
    ],
    exercises: [
      {
        q: "Wybierz właściwą formę: „Der Journalist ___ den Artikel am Abend.”",
        opts: ["schrieb", "schreibte", "geschrieben"],
        why: "<b>Schrieb</b>: <i>schreiben</i> to czasownik mocny, w Präteritum zmienia samogłoskę. <i>Schreibte</i> nie istnieje; <i>geschrieben</i> to Partizip II i wymaga czasownika posiłkowego."
      },
      {
        q: "Wybierz czasownik posiłkowy: „Nachdem die Redaktion die Quelle geprüft ___, veröffentlichte sie den Artikel.”",
        opts: ["hatte", "wurde", "war"],
        why: "<b>Hatte</b>: <i>prüfen</i> łączy się z <i>haben</i>, a po <i>nachdem</i> stoi Plusquamperfekt, bo zdanie główne jest w Präteritum."
      },
      {
        q: "Które zdanie ma właściwy szyk?",
        opts: [
          "Nachdem er den Artikel gelesen hatte, rief er die Redaktion an.",
          "Nachdem er hatte den Artikel gelesen, rief er die Redaktion an.",
          "Nachdem er den Artikel gelesen hatte, er rief die Redaktion an."
        ],
        why: "W zdaniu podrzędnym Partizip II i czasownik posiłkowy stoją na końcu (<i>gelesen hatte</i>); potem zdanie główne zaczyna się od odmienionego czasownika (<i>rief er</i>)."
      },
      {
        q: "Uzupełnij: „Die Zeitung ___ jeden Morgen.”",
        hint: "erscheinen, Präteritum, 3. osoba",
        why: "<b>Erschien</b>: czasownik mocny, w Präteritum zmienia samogłoskę rdzenia."
      },
      {
        q: "Uzupełnij: „Bevor er den Artikel ___, recherchierte er lange.”",
        hint: "schreiben, Präteritum, 3. osoba",
        why: "<b>Schrieb</b>: <i>bevor</i> ma tu ten sam czas co zdanie główne (często tak jest; Plusquamperfekt w zdaniu głównym podkreśliłby uprzedniość), a czasownik mocny nie ma końcówki."
      },
      {
        q: "Uzupełnij zdanie.",
        tr: "Po tym, jak minister przemówił, goście poszli do domu.",
        why: "<i>Nachdem der Minister gesprochen hatte, gingen die Gäste nach Hause.</i> Partizip II <i>gesprochen</i> i czasownik posiłkowy <i>hatte</i> na końcu."
      },
      {
        q: "Dopasuj każde zdanie do jego znaczenia.",
        pairs: [
          "Czytała gazetę.",
          "Napisał sprawozdanie.",
          "Artykuł ukazał się wczoraj.",
          "Redakcja sprawdziła źródło."
        ]
      },
      {
        q: "Przetłumacz: „Dziennikarz napisał artykuł wczoraj wieczorem.”",
        why: "<i>Der Journalist schrieb den Artikel gestern Abend.</i> W mowie mówi się też <i>hat ... geschrieben</i>, a zdanie może zaczynać się od <i>Gestern Abend</i>."
      },
      {
        tr: "Gazeta opublikowała artykuł w poniedziałek. Po tym, jak redakcja sprawdziła źródło, dziennikarz napisał tytuł. Wielu czytelników przeczytało artykuł już rano.",
        why: "W <i>veröffentlichte</i> <b>v</b> to [f], a <b>ö</b> jest zaokrąglone; w <i>Quelle</i> <b>qu</b> to [kv]; w <i>Überschrift</i> <b>sch</b> to [ʃ]; w <i>Leser</i> <b>s</b> między samogłoskami jest dźwięczne [z]."
      },
      {
        tr: "Po tym, jak dziennikarz napisał sprawozdanie, poszedł do domu.",
        why: "W <i>Journalist</i> początkowe <b>J</b> to [ʒ], jak we francuskim <i>jour</i>; w <i>Bericht</i> <b>ch</b> to [ç]; w <i>geschrieben</i> <b>sch</b> to [ʃ]; w <i>Hause</i> <b>au</b> to [aʊ]."
      }
    ]
  },
  "lesson:b1-u04-l3": {
    theme: "Radio i podcasty",
    title: "zwar ... aber, sowohl ... als auch",
    objectives: [
      "przyznawać coś, a potem się temu przeciwstawiać za pomocą zwar ... aber",
      "łączyć dwa elementy za pomocą sowohl ... als auch",
      "zachowywać szyk zdania po aber",
      "rozmawiać o radiu, audycjach i podcastach"
    ],
    theory: [
      {
        h: "zwar ... aber: co prawda ..., ale",
        p: "<strong>zwar</strong> przyznaje fakt, a <strong>aber</strong> wprowadza przeciwieństwo: <em>Die Sendung ist zwar lang, aber sie ist interessant.</em> <em>Zwar</em> stoi zwykle po czasowniku, ale może też otwierać zdanie: <em>Zwar ist die Sendung lang, aber sie ist interessant.</em> <em>Aber</em> stoi w pozycji zerowej: czasownik drugiego zdania zostaje na swoim zwykłym miejscu, na drugiej pozycji, po podmiocie."
      },
      {
        h: "sowohl ... als auch: zarówno ..., jak i",
        p: "<strong>sowohl ... als auch</strong> łączy dwa elementy tego samego rodzaju: <em>Der Sender bringt sowohl Nachrichten als auch Musik.</em> Mogą to być dwa podmioty, dwa dopełnienia, dwa okoliczniki. Przy dwóch podmiotach czasownik stoi w liczbie mnogiej: <em>Sowohl Anna als auch Tom hören den Podcast.</em> Zwykle między oboma elementami nie ma przecinka."
      },
      {
        h: "Jeszcze jedna para: weder ... noch",
        p: "Żeby zaprzeczyć dwóm elementom, używa się <strong>weder ... noch</strong> (ani ... ani): <em>Ich habe weder Zeit noch Lust.</em> Para już zaprzecza, więc nie dodaje się <em>nicht</em> ani <em>kein</em>."
      },
      {
        contrast: "<em>zwar ... aber</em> to polskie <em>co prawda ... ale</em> albo <em>wprawdzie ... ale</em>; po niemiecku ta para jest dużo częstsza niż po polsku. <em>sowohl ... als auch</em> odpowiada polskiemu <em>zarówno ... jak i</em>, ale interpunkcja jest inna: po polsku przed <em>jak i</em> stawia się przecinek (<em>Słucham zarówno radia, jak i podcastów</em>), po niemiecku przecinka nie ma: <em>Ich höre sowohl Radio als auch Podcasts.</em> Podobnie <em>weder ... noch</em>: po polsku <em>ani ... ani</em> wymaga <em>nie</em> przy czasowniku i przecinka przed drugim <em>ani</em> (<em>Nie mam ani czasu, ani ochoty</em>), po niemiecku nie ma ani <em>nicht</em>, ani przecinka: <em>Ich habe weder Zeit noch Lust.</em>"
      },
      {
        trap: "Po polskim <em>ale</em> szyk jest swobodny, a niemieckie <em>aber</em> nie zmienia szyku: <em>..., aber sie ist interessant</em>, a nie <s>aber ist sie interessant</s> i nie <s>aber sie interessant ist</s>. Czasownik na końcu jest typowy dla zdań podrzędnych (<em>obwohl, weil, dass</em>), a <em>aber</em> nie jest spójnikiem podrzędnym. Druga część pary z <em>sowohl</em> to <em>als auch</em>, a nie <s>aber</s> ani <s>und auch</s>. Polskie <em>jak i</em> podsuwa <em>wie auch</em>: taki wariant też się spotyka, ale w tym kursie odpowiedzią jest <em>als auch</em>."
      },
      {
        tip: "Jeśli chcesz dać jednemu faktowi mniejszą wagę, a drugiemu większą, pierwszy wprowadź przez <em>zwar</em>, a swoją opinię umieść po <em>aber</em>: <em>Der Podcast ist zwar neu, aber er ist wirklich gut.</em> Czytelnik widzi, skąd bierze się twoje zdanie."
      }
    ],
    grammar: {
      title: "zwar ... aber i sowohl ... als auch",
      note: "<b>zwar ... aber</b> przyznaje i przeciwstawia; <b>aber</b> stoi w pozycji zerowej. <b>sowohl ... als auch</b> łączy dwa elementy; przy dwóch podmiotach czasownik jest w liczbie mnogiej.",
      table: {
        head: ["para", "znaczenie", "przykład"],
        rows: [
          ["zwar ... aber", "co prawda ... ale", "Die Sendung ist zwar lang, aber sie ist interessant."],
          ["sowohl ... als auch", "zarówno ... jak i", "Ich höre sowohl Radio als auch Podcasts."],
          ["weder ... noch", "ani ... ani", "Ich habe weder Zeit noch Lust."]
        ]
      },
      examples: [
        { tr: "Audycja jest co prawda długa, ale interesująca.", note: "aber: pozycja zerowa, zwykły szyk" },
        { tr: "Program jest co prawda dobry, ale mam mało czasu.", note: "Zwar otwiera zdanie: czasownik stoi zaraz po nim" },
        { tr: "Stacja nadaje zarówno wiadomości, jak i muzykę.", note: "sowohl ... als auch z dwoma dopełnieniami" },
        { tr: "Słucham zarówno radia, jak i podcastów.", note: "po niemiecku bez przecinka między elementami" },
        { tr: "Zarówno Anna, jak i Tom słuchają tego podcastu.", note: "dwa podmioty: czasownik w liczbie mnogiej" },
        { tr: "Nie ma co prawda dużo czasu, ale codziennie słucha jakiegoś podcastu.", note: "zwar po czasowniku, potem aber" }
      ]
    },
    vocab: [
      "radio",
      "audycja",
      "stacja (radiowa, telewizyjna)",
      "program",
      "podcast",
      "wywiad",
      "komentarz",
      "słuchacz",
      "słuchać (uważnie), przysłuchiwać się",
      "włączać",
      "wyłączać",
      "subskrybować"
    ],
    exercises: [
      {
        q: "Które zdanie ma właściwy szyk?",
        opts: [
          "Die Sendung ist zwar lang, aber sie ist interessant.",
          "Die Sendung ist zwar lang, aber ist sie interessant.",
          "Die Sendung ist zwar lang, aber sie interessant ist."
        ],
        why: "Po <b>aber</b> czasownik zostaje na drugiej pozycji, po podmiocie: <i>aber sie ist interessant</i>. <i>Aber</i> nie odsyła czasownika na koniec."
      },
      {
        q: "Która para znaczy „zarówno ... jak i”?",
        opts: ["sowohl ... als auch", "zwar ... aber", "weder ... noch"],
        why: "<b>Sowohl ... als auch</b>: łączy dwa elementy. <i>Zwar ... aber</i> przyznaje i przeciwstawia, <i>weder ... noch</i> zaprzecza."
      },
      {
        q: "Które zdanie znaczy „Słucham zarówno radia, jak i podcastów”?",
        opts: [
          "Ich höre sowohl Radio als auch Podcasts.",
          "Ich höre zwar Radio als auch Podcasts.",
          "Ich höre sowohl Radio aber Podcasts."
        ],
        why: "<b>Sowohl ... als auch</b> to właściwa para. <i>Zwar</i> wymaga <i>aber</i>, a <i>sowohl</i> wymaga <i>als auch</i>: tych par się nie miesza."
      },
      {
        q: "Uzupełnij: „Das Programm ist ___ gut, aber ich habe wenig Zeit.”",
        hint: "przyznanie, przed aber",
        why: "<b>Zwar</b>: przyznaje, że program jest dobry, a potem <i>aber</i> wprowadza przeciwieństwo."
      },
      {
        q: "Uzupełnij: „Der Sender bringt sowohl Nachrichten ___ auch Musik.”",
        hint: "druga część pary",
        why: "<b>Als</b>: para to <i>sowohl ... als auch</i>."
      },
      {
        q: "Uzupełnij parą zwar ... aber: „Die Sendung ist ___ kurz, ___ sie ist sehr interessant.”",
        why: "<b>Zwar ... aber</b>: pierwsze słowo przyznaje fakt, drugie wprowadza przeciwieństwo."
      },
      {
        q: "Dopasuj każde zdanie do jego znaczenia.",
        pairs: [
          "Wywiad jest co prawda krótki, ale dobry.",
          "Słucham zarówno radia, jak i podcastów.",
          "Podcast jest nadawany w każdy poniedziałek.",
          "Słuchacze włączają radio."
        ]
      },
      {
        q: "Ułóż wyrazy w kolejności.",
        tr: "Program jest co prawda długi, ale interesujący.",
        why: "<i>Das Programm ist zwar lang, aber es ist interessant</i>: <i>zwar</i> po czasowniku, potem <i>aber</i> i czasownik <i>ist</i> na drugiej pozycji."
      },
      {
        tr: "Codziennie rano słucham radia. Stacja nadaje zarówno wiadomości, jak i muzykę. Audycja jest co prawda długa, ale naprawdę interesująca.",
        why: "W <i>höre</i> <b>ö</b> jest długie i zaokrąglone; w <i>sowohl</i> <b>s</b> jest dźwięczne [z], a <b>w</b> to [v]; w <i>Nachrichten</i> pierwsze <b>ch</b> to [x], a drugie [ç]; w <i>wirklich</i> <b>w</b> to [v], a końcowe <b>ch</b> to [ç]."
      },
      {
        tr: "Słucham zarówno radia, jak i podcastów, ale nie codziennie.",
        why: "W <i>sowohl</i> <b>s</b> jest dźwięczne [z], a <b>w</b> to [v]; w <i>höre</i> <b>ö</b> jest zaokrąglone; w <i>nicht</i> <b>ch</b> to [ç]; w <i>auch</i> <b>ch</b> to [x], po <i>au</i>."
      }
    ]
  },
  "lesson:b1-u04-l4": {
    theme: "Dyskusja",
    title: "Bronić swojego zdania",
    objectives: [
      "stosować końcówki przymiotnika po rodzajniku określonym, po ein i bez rodzajnika",
      "wyrażać zgodę i sprzeciw stałymi zwrotami",
      "budować argument za pomocą zwar ... aber i sowohl ... als auch",
      "czytać teksty opiniotwórcze i używać w nich przymiotników z końcówkami"
    ],
    theory: [
      {
        h: "Trzy serie końcówek",
        p: "Przed rzeczownikiem przymiotnik dostaje końcówkę, która zależy od tego, co go poprzedza. Po <strong>rodzajniku określonym</strong> (<em>der, die, das</em>, także <em>dieser, jeder</em>) końcówka to prawie zawsze <strong>-en</strong>; <strong>-e</strong> pojawia się w mianowniku liczby pojedynczej trzech rodzajów oraz w bierniku rodzaju żeńskiego i nijakiego: <em>der gute Beitrag, die gute Idee, das gute Beispiel, die guten Argumente.</em>"
      },
      {
        h: "Po ein, kein i zaimkach dzierżawczych",
        p: "Tam, gdzie <em>ein</em> nie ma końcówki, niesie ją przymiotnik: <strong>ein guter</strong> Standpunkt (mianownik rodzaju męskiego), <strong>ein gutes</strong> Argument (mianownik i biernik rodzaju nijakiego). W pozostałych miejscach końcówki są takie same jak po rodzajniku określonym: <em>eine gute Idee, einen guten Beitrag, mit einem guten Argument.</em>"
      },
      {
        h: "Bez rodzajnika",
        p: "Bez rodzajnika to przymiotnik daje sygnał rodzaju i przypadku, końcówkami rodzajnika: <em>interessante Kommentare</em> (liczba mnoga), <em>guter Rat, gutes Wetter, gute Laune</em>. Wyjątkiem jest dopełniacz rodzaju męskiego i nijakiego: przymiotnik dostaje tam <strong>-en</strong>, bo rzeczownik ma już <em>-(e)s</em>: <em>guten Weines, guten Wetters</em>. Kilka przymiotników przed tym samym rzeczownikiem ma zwykle tę samą końcówkę: <em>ein klarer, gut begründeter Standpunkt.</em>"
      },
      {
        h: "Zwroty do dyskusji",
        p: "Zgoda: <em>Ich stimme dir zu. Das sehe ich auch so.</em> Sprzeciw: <em>Da muss ich widersprechen. Ich bin anderer Meinung.</em> Wprowadzenie własnego stanowiska: <em>Ich bin der Meinung, dass ... Meiner Ansicht nach ...</em> Żeby uznać jakiś punkt, a potem odpowiedzieć: <em>Das ist zwar richtig, aber ...</em>; żeby zebrać racje: <em>Das hat sowohl Vorteile als auch Nachteile.</em>"
      },
      {
        contrast: "Po polsku przymiotnik też odmienia się przez przypadki i zwykle stoi przed rzeczownikiem (<em>dobry argument, dobrego argumentu</em>), więc samo zjawisko znasz. Różnica: polski ma jeden zestaw końcówek bez względu na to, co stoi przed przymiotnikiem (<em>dobry punkt widzenia, ten dobry punkt widzenia, jakiś dobry punkt widzenia</em>), a niemiecki ma trzy serie: po <em>der</em> (<em>der gute Standpunkt</em>), po <em>ein</em> (<em>ein guter Standpunkt</em>) i bez rodzajnika (<em>guter Rat</em>). Druga różnica: po <em>być</em> polski przymiotnik nadal się uzgadnia (<em>argument jest dobry, idea jest dobra</em>), a niemiecki po <em>sein</em> zostaje <strong>bez końcówki</strong>: <em>Der Standpunkt ist gut. Die Idee ist gut.</em>"
      },
      {
        trap: "Po rodzajniku określonym nie ma <em>-er</em>: <em>der gute Standpunkt</em>, a nie <s>der guter Standpunkt</s>. Polski nawyk podsuwa jedną formę mianownika (<em>dobry</em>) niezależnie od tego, co stoi przed przymiotnikiem; po niemiecku <em>-er</em> i <em>-es</em> pojawiają się tylko tam, gdzie rodzajnik ich nie pokazuje: <em>ein guter Standpunkt</em>, <em>ein gutes Argument</em>. Najczęstszy błąd to przeniesienie serii z <em>ein</em> na <em>der</em> albo odwrotnie."
      },
      {
        tip: "Żeby wybrać końcówkę, zapytaj: czy przed przymiotnikiem jest sygnał rodzaju i przypadku? Jeśli jest (<em>der, die, dem, einer</em>), przymiotnik dostaje <em>-e</em> albo <em>-en</em>; jeśli go brakuje, pokazuje go przymiotnik."
      }
    ],
    grammar: {
      title: "Przymiotnik po rodzajniku określonym",
      note: "po <b>der, die, das</b>: <b>-e</b> w mianowniku liczby pojedynczej oraz w bierniku rodzaju żeńskiego i nijakiego, <b>-en</b> w pozostałych miejscach. Po <b>ein</b> końcówka <b>-er / -es</b> pojawia się tam, gdzie <i>ein</i> jej nie pokazuje.",
      table: {
        head: ["", "r. m.", "r. ż.", "r. n.", "l. mn."],
        rows: [
          ["mianownik", "der gute Beitrag", "die gute Idee", "das gute Beispiel", "die guten Argumente"],
          ["biernik", "den guten Beitrag", "die gute Idee", "das gute Beispiel", "die guten Argumente"],
          ["celownik", "dem guten Beitrag", "der guten Idee", "dem guten Beispiel", "den guten Argumenten"],
          ["dopełniacz", "des guten Beitrags", "der guten Idee", "des guten Beispiels", "der guten Argumente"]
        ]
      },
      examples: [
        { tr: "To dobry punkt widzenia.", note: "ein + mianownik r. m.: -er" },
        { tr: "Mam dobry argument.", note: "ein + biernik r. n.: -es" },
        { tr: "Tym dobrym argumentem przekonuje wszystkich.", note: "celownik r. n. po dem: -en" },
        { tr: "Pisze długą wypowiedź.", note: "einen + biernik r. m.: -en (der Beitrag)" },
        { tr: "Chętnie czytam ciekawe komentarze.", note: "bez rodzajnika, liczba mnoga: -e" },
        { tr: "Ma co prawda wyraźne zdanie, ale też słucha innych.", note: "eine + biernik r. ż.: -e" }
      ]
    },
    vocab: [
      "zdanie, pogląd",
      "argument",
      "punkt widzenia, stanowisko",
      "dyskusja",
      "przykład",
      "zaleta",
      "wada",
      "wypowiedź, głos (w dyskusji)",
      "przekonywać",
      "sprzeciwiać się, oponować",
      "uzasadniać",
      "zgadzać się (z kimś)"
    ],
    exercises: [
      {
        q: "Które zdanie jest poprawne?",
        opts: [
          "Das ist ein guter Standpunkt.",
          "Das ist ein gute Standpunkt.",
          "Das ist ein guten Standpunkt."
        ],
        why: "<b>Ein guter Standpunkt</b>: mianownik rodzaju męskiego, a <i>ein</i> nie ma końcówki, więc pokazuje ją przymiotnik przez <i>-er</i>."
      },
      {
        q: "Uzupełnij: „mit der ___ Idee”",
        opts: ["guten", "gute", "guter"],
        why: "<b>Guten</b>: celownik rodzaju żeńskiego po rodzajniku określonym, więc <i>-en</i>."
      },
      {
        q: "Uzupełnij: „Ich lese einen ___ Beitrag.”",
        hint: "interessant, biernik r. m. po einen",
        why: "<b>Interessanten</b>: biernik rodzaju męskiego po <i>einen</i>, więc <i>-en</i>."
      },
      {
        q: "Uzupełnij: „Sie hat ein ___ Argument.”",
        hint: "stark, biernik r. n. po ein",
        why: "<b>Starkes</b>: biernik rodzaju nijakiego po <i>ein</i>, które nie ma końcówki, więc <i>-es</i>."
      },
      {
        q: "Uzupełnij zdanie: „Mit dem ___ Beispiel ___ sie alle.”",
        why: "<b>Guten</b> (celownik rodzaju nijakiego po <i>dem</i>) i <b>überzeugt</b> (czas teraźniejszy, 3. osoba)."
      },
      {
        q: "Dopasuj każdy zwrot do jego znaczenia.",
        pairs: [
          "Jestem zdania, że ...",
          "Tu muszę się sprzeciwić.",
          "Zgadzam się z tobą.",
          "To mocny argument."
        ]
      },
      {
        q: "Ułóż wyrazy w kolejności.",
        tr: "Jestem zdania, że to duża zaleta.",
        why: "<i>Ich bin der Meinung, dass das ein großer Vorteil ist.</i> <i>Dass</i> odsyła czasownik <i>ist</i> na koniec, a <i>ein großer Vorteil</i> to mianownik rodzaju męskiego."
      },
      {
        q: "Przetłumacz: „Przeczytałem długi artykuł.”",
        why: "<i>Ich habe einen langen Artikel gelesen.</i> <i>Artikel</i> jest rodzaju męskiego, w bierniku: <i>einen langen</i>. Dobre jest też Präteritum: <i>Ich las einen langen Artikel.</i>"
      },
      {
        tr: "Jestem zdania, że to dobry plan. Ma zarówno zalety, jak i wady, ale zalety są większe. Co prawda kosztuje pieniądze, ale przynosi dobry wynik.",
        why: "W <i>Meinung</i> <b>ei</b> to [aɪ]; w <i>Vorteile</i> <b>V</b> to [f], a <b>ei</b> to [aɪ]; w <i>Nachteile</i> <b>ch</b> to [x]; w <i>größer</i> <b>ö</b> jest długie i zaokrąglone, a <b>ß</b> to [s]."
      },
      {
        tr: "To mocny argument, ale ja jestem innego zdania.",
        why: "W <i>starkes</i> początkowe <b>st</b> to [ʃt]; w <i>Argument</i> <b>g</b> to [g]; w <i>aber</i> <b>a</b> jest długie; w <i>Meinung</i> <b>ei</b> to [aɪ]."
      }
    ]
  },
  "lesson:b1-u04-test": {
    theme: "Sprawdzian",
    title: "Test: Opinie i media",
    objectives: [
      "sprawdzić mowę zależną, nachdem i bevor, zwar ... aber i sowohl ... als auch oraz odmianę przymiotnika"
    ],
    theory: [
      {
        p: "Dwanaście pytań z całej jednostki. Zaliczenie od 70%. Nie zaglądaj do lekcji w trakcie odpowiadania: jeśli czegoś nie pamiętasz, lepiej wrócić i powtórzyć."
      }
    ],
    exercises: [
      {
        tr: "Plusquamperfekt czasownika gehen, wszystkie osoby.",
        why: "<i>War gegangen, warst gegangen, war gegangen, waren gegangen, wart gegangen, waren gegangen</i>: <i>sein</i> w Präteritum + Partizip II."
      },
      {
        q: "Uzupełnij: „Anna hat gesagt, ___ sie keine Zeit hat.”",
        hint: "spójnik, przekazane stwierdzenie",
        why: "<b>Dass</b>: wprowadza przekazane stwierdzenie i odsyła czasownik na koniec."
      },
      {
        q: "Uzupełnij: „Nachdem sie die Nachricht gelesen ___, rief sie an.”",
        hint: "Plusquamperfekt, haben",
        why: "<b>Hatte</b>: <i>nachdem</i> przy zdaniu głównym w Präteritum (<i>rief</i>) wymaga Plusquamperfekt."
      },
      {
        q: "Uzupełnij formą Präteritum od veröffentlichen: „Bevor die Zeitung den Artikel ___, prüfte die Redaktion die Quelle.”",
        hint: "Präteritum, 3. osoba liczby pojedynczej",
        why: "<b>Veröffentlichte</b>: <i>bevor</i> ma tu ten sam czas co zdanie główne (<i>prüfte</i>), czyli Präteritum. Czasownik słaby: rdzeń + <i>-te</i>."
      },
      {
        q: "Uzupełnij: „Die Sendung ist ___ kurz, aber sie ist sehr interessant.”",
        hint: "pierwsza część pary z aber",
        why: "<b>Zwar</b>: <i>zwar ... aber</i> uznaje jakiś punkt, a potem mu się przeciwstawia."
      },
      {
        q: "Uzupełnij: „Er hört sowohl Radio ___ auch Podcasts.”",
        hint: "druga część pary z sowohl",
        why: "<b>Als</b>: para to <i>sowohl ... als auch</i>."
      },
      {
        q: "Uzupełnij przymiotnikiem kurz: „Sie schreibt einen ___ Kommentar.”",
        hint: "kurz, biernik r. m. po einen",
        why: "<b>Kurzen</b>: w bierniku rodzaju męskiego po <i>einen</i> przymiotnik dostaje <i>-en</i>."
      },
      {
        q: "Tom mówi: „Ich komme morgen.” Które zdanie przekazuje to bez dass?",
        opts: [
          "Tom hat gesagt, er kommt morgen.",
          "Tom hat gesagt, er morgen kommt.",
          "Tom hat gesagt, dass er kommt morgen."
        ],
        why: "<b>Tom hat gesagt, er kommt morgen.</b> Bez <i>dass</i> czasownik zostaje na drugim miejscu; czasownik na końcu należy wyłącznie do wersji z <i>dass</i>, a z <i>dass</i> nie może stać na drugim miejscu."
      },
      {
        q: "Które zdanie jest poprawne?",
        opts: [
          "Das ist ein gutes Argument.",
          "Das ist ein guter Argument.",
          "Das ist ein gute Argument."
        ],
        why: "<b>Ein gutes Argument</b>: <i>Argument</i> jest rodzaju nijakiego, a <i>ein</i> nie pokazuje końcówki w mianowniku rodzaju nijakiego, więc niesie ją przymiotnik: <i>-es</i>."
      },
      {
        q: "Przetłumacz: „Tom powiedział, że ma dobry argument.”",
        why: "<i>Tom hat gesagt, dass er ein gutes Argument hat.</i> Dobra jest też wersja bez <i>dass</i>, z czasownikiem na drugim miejscu, albo z <i>sagte</i>. Czas teraźniejszy <i>hat</i> powtarza czas z wypowiedzi Toma; jak po polsku, nie trzeba go automatycznie przesuwać."
      },
      {
        tr: "Anna opowiedziała, że każdego ranka czyta gazetę. Po tym, jak przeczytała nagłówek, zadzwoniła do przyjaciółki. Artykuł jest co prawda długi, ale ma jasny punkt widzenia.",
        why: "W <i>Zeitung</i> <b>z</b> to [ts], a <b>ei</b> to [aɪ]; w <i>Schlagzeile</i> <b>sch</b> to [ʃ]; w <i>Freundin</i> <b>eu</b> to [ɔʏ]."
      },
      {
        tr: "Powiedział, że słucha zarówno radia, jak i podcastów.",
        why: "W <i>sowohl</i> <b>w</b> to [v], a <b>o</b> w <i>wohl</i> jest długie; w <i>Radio</i> <b>a</b> jest długie; w <i>Podcasts</i> <b>c</b> to [k], a końcowe <b>ts</b> to [ts]."
      }
    ]
  }
});
