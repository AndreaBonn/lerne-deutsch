/* ============================================================
   Learner-language text (pl) for data/core/b2-01.js, unit b2-u01.
   Keys point at ids in the neutral layer; arrays merge by index,
   so their length has to match core.
   Checked by scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("pl", {
  "unit:b2-u01": {
    title: "Gdybym to wiedział",
    grammarNote: "Konjunktiv II w czasie przeszłym (hätte gemacht, wäre gegangen) · podwójny bezokolicznik z czasownikami modalnymi (hätte anrufen sollen) · als ob, als wenn, als + czasownik"
  },
  "lesson:b2-u01-l1": {
    theme: "Wybory i żale",
    title: "Zrobiłbym, byłbym",
    objectives: [
      "tworzyć Konjunktiv II przeszły z hätte albo wäre + imiesłów II",
      "wybierać między hätte a wäre tak jak w Perfekcie",
      "wyrażać żal (Hätte ich bloß ...!)",
      "budować nierzeczywisty warunek dotyczący przeszłości"
    ],
    theory: [
      {
        h: "hätte albo wäre + imiesłów II",
        p: "Żeby mówić o tym, co <strong>mogło się stać, a się nie stało</strong>, używa się Konjunktivu II w czasie przeszłym: odmienione <strong>hätte</strong> albo <strong>wäre</strong> + <strong>imiesłów II</strong> na końcu. <em>Ich hätte das nicht gemacht</em> (nie zrobiłbym tego), <em>Wir wären gern länger geblieben</em> (chętnie zostalibyśmy dłużej). Między <em>hätte</em> a <em>wäre</em> wybiera się tak jak w Perfekcie: czasowniki, które tam mają <em>sein</em> (<em>ich bin gegangen, ich bin gewesen</em>), tu mają <em>wäre</em> (<em>ich wäre gegangen, ich wäre gewesen</em>); wszystkie pozostałe mają <em>hätte</em>."
      },
      {
        h: "Warunek nierzeczywisty w przeszłości",
        p: "Gdy warunek i skutek dotyczą przeszłości, obie części mają Konjunktiv II przeszły: <em>Wenn ich das gewusst hätte, wäre ich früher gekommen</em>. Po <em>wenn</em> czasownik posiłkowy idzie na koniec, za imiesłów; zdanie główne zaczyna się od czasownika posiłkowego. Jeśli skutek dotyczy teraźniejszości, ma Konjunktiv II teraźniejszy: <em>Hätte ich die Gelegenheit genutzt, wäre ich jetzt in Berlin.</em> Można też pominąć <em>wenn</em> i zacząć od czasownika: <em>Hätte ich das gewusst, wäre ich früher gekommen.</em> Z <strong>bloß</strong>, <strong>nur</strong> albo <strong>doch</strong> ta sama forma wyraża żal: <em>Hätte ich bloß mehr gelernt!</em>"
      },
      {
        contrast: "Polskie <em>gdybym wiedział, przyszedłbym</em> może dotyczyć teraźniejszości albo przeszłości: o czasie decyduje kontekst (formę <em>przyszedłbym był</em> spotyka się już rzadko). Niemiecki zawsze to rozróżnia: <em>Wenn ich es wüsste, käme ich</em> (teraz) i <em>Wenn ich es gewusst hätte, wäre ich gekommen</em> (wtedy). Kto przekłada z polskiego bez namysłu, zwykle zostaje przy teraźniejszości tam, gdzie chodzi o przeszłość."
      },
      {
        trap: "Polski tryb przypuszczający nie ma czasownika posiłkowego do wyboru: <em>zrobiłbym</em> i <em>poszedłbym</em> tworzy się tak samo. Niemiecki wybiera: <em>ich hätte gemacht</em>, ale <em>ich wäre gegangen</em>, bo <em>gehen</em> ma w Perfekcie <em>sein</em>. A <em>Wenn ich das gewusst habe</em> to Perfekt w trybie oznajmującym: może oznaczać moment albo warunek otwarty, ale nie mówi, że tego nie wiedziałeś. Do hipotezy sprzecznej z faktami potrzeba <em>gewusst hätte</em>."
      },
      {
        tip: "Żeby trafić z czasownikiem posiłkowym, pomyśl najpierw o Perfekcie: <em>ich habe gemacht</em> zmienia się w <em>ich hätte gemacht</em>, <em>ich bin geblieben</em> w <em>ich wäre geblieben</em>. Czasownik posiłkowy zastępujesz jego formą Konjunktivu II, a imiesłów zostaje bez zmian."
      }
    ],
    grammar: {
      title: "Konjunktiv II przeszły: hätte / wäre + imiesłów II",
      note: "<b>hätte</b> + imiesłów z czasownikami, które w Perfekcie mają <i>haben</i>, <b>wäre</b> + imiesłów z tymi, które mają <i>sein</i>. Jeśli warunek i skutek dotyczą przeszłości, oba mają Konjunktiv II przeszły; skutek teraźniejszy ma Konjunktiv II teraźniejszy.",
      table: {
        head: ["Perfekt", "Konjunktiv II przeszły", "po polsku"],
        rows: [
          ["ich habe gemacht", "ich hätte gemacht", "zrobiłbym"],
          ["ich bin gegangen", "ich wäre gegangen", "poszedłbym"],
          ["ich bin gewesen", "ich wäre gewesen", "byłbym"],
          ["ich habe gewusst", "ich hätte gewusst", "wiedziałbym"]
        ]
      },
      examples: [
        { tr: "Nie zrobiłbym tego.", note: "hätte + imiesłów na końcu" },
        { tr: "Chętnie zostalibyśmy dłużej.", note: "bleiben ma sein: wäre" },
        { tr: "Gdybym to wiedział, przyszedłbym wcześniej.", note: "warunek i skutek w przeszłości: Konjunktiv II przeszły w obu częściach" },
        { tr: "Gdybym się tylko więcej uczył!", note: "żal: czasownik na początku + bloß" },
        { tr: "Omal się nie spóźniła.", note: "fast + Konjunktiv II: coś, co prawie się stało" },
        { tr: "Bez twojej pomocy nie dałbym rady.", note: "ohne + rzeczownik zamiast zdania z wenn" }
      ]
    },
    vocab: [
      "okazja, sposobność",
      "decyzja",
      "błąd",
      "szansa",
      "wybór (w liczbie mnogiej też: wybory)",
      "szczęście (Glück haben: mieć szczęście)",
      "przegapić, spóźnić się na (pociąg, okazję)",
      "żałować",
      "wykorzystać",
      "zdecydować się (für + biernik: na)",
      "dać radę, zdążyć z czymś",
      "na czas"
    ],
    exercises: [
      {
        tr: "Konjunktiv II przeszły czasownika machen, wszystkie osoby.",
        why: "<i>hätte, hättest, hätte, hätten, hättet, hätten</i> + <i>gemacht</i>: <i>machen</i> ma w Perfekcie <i>haben</i>, więc tutaj <i>hätte</i>."
      },
      {
        tr: "Konjunktiv II przeszły czasownika gehen, wszystkie osoby.",
        why: "<i>gehen</i> ma w Perfekcie <i>sein</i> (<i>ich bin gegangen</i>), więc <i>wäre gegangen</i>. Dla <i>du</i> i <i>ihr</i> poprawne są i <i>wärst, wärt</i>, i <i>wärest, wäret</i>."
      },
      {
        tr: "Konjunktiv II przeszły czasownika sein, wszystkie osoby.",
        why: "<i>wäre gewesen</i>: <i>sein</i> tworzy Perfekt z samym sobą (<i>ich bin gewesen</i>), więc <i>wäre</i> + <i>gewesen</i>."
      },
      {
        q: "Jak powiesz „Gdybym to wiedział, przyszedłbym” (o przeszłości)?",
        opts: [
          "Wenn ich das gewusst hätte, wäre ich gekommen.",
          "Wenn ich das gewusst habe, bin ich gekommen.",
          "Wenn ich das wüsste, würde ich kommen."
        ],
        why: "Dla przeszłości potrzebny jest Konjunktiv II przeszły w obu częściach: <b>gewusst hätte</b> i <b>wäre gekommen</b>. Drugie zdanie to Perfekt w trybie oznajmującym, trzecie to hipoteza o teraźniejszości."
      },
      {
        q: "Uzupełnij: „Wir ___ gern länger geblieben.” (zostalibyśmy)",
        opts: [
          "wären",
          "hätten",
          "würden"
        ],
        why: "<i>bleiben</i> ma w Perfekcie <i>sein</i> (<i>wir sind geblieben</i>), więc <b>wären</b>. <i>Würden ... geblieben</i> w tej formie nie istnieje."
      },
      {
        q: "Uzupełnij: „Ich ___ das nicht gemacht.” (nie zrobiłbym)",
        hint: "Konjunktiv II od haben, ich",
        why: "<b>Hätte</b>: <i>machen</i> ma w Perfekcie <i>haben</i>, a imiesłów <i>gemacht</i> stoi na końcu."
      },
      {
        q: "Uzupełnij: „Sie ___ fast zu spät gekommen.” (omal się nie spóźniła)",
        hint: "Konjunktiv II od sein, sie (ona)",
        why: "<b>Wäre</b>: <i>kommen</i> ma <i>sein</i>. Z <i>fast</i> Konjunktiv II opowiada o czymś, co prawie się stało, jak polskie <i>omal</i>."
      },
      {
        q: "Uzupełnij zdanie.",
        tr: "Gdybyśmy mieli więcej czasu, zostalibyśmy dłużej.",
        why: "<i>Wenn wir mehr Zeit gehabt hätten</i>: po <i>wenn</i> najpierw imiesłów <i>gehabt</i>, potem czasownik posiłkowy <i>hätten</i> na końcu."
      },
      {
        q: "Przetłumacz: „Gdybyś przyszedł wcześniej, zobaczyłbyś go.” (o przeszłości)",
        why: "<i>Wenn du früher gekommen wärst, hättest du ihn gesehen</i>. <i>kommen</i> ma <i>wäre</i>, <i>sehen</i> ma <i>hätte</i>. Bez <i>wenn</i>: <i>Wärst du früher gekommen, hättest du ihn gesehen</i>."
      },
      {
        tr: "Gdybym wykorzystał tę okazję, byłbym teraz w Berlinie. Ale zdecydowałem inaczej.",
        why: "W <i>Gelegenheit</i> akcent pada na <b>le</b>: ge-<b>LE</b>-gen-heit; w <i>wäre</i> <b>ä</b> to długie, otwarte <i>e</i>; w <i>entschieden</i> <b>ie</b> to długie <i>i</i>."
      },
      {
        tr: "Gdybym to wiedział, zostałbym w domu.",
        why: "W <i>gewusst</i> <b>u</b> jest krótkie przed podwójnym <i>s</i>; w <i>hätte</i> <b>ä</b> jest krótkie; w <i>geblieben</i> <b>ie</b> jest długie."
      }
    ]
  },
  "lesson:b2-u01-l2": {
    theme: "Wyrzuty i przeprosiny",
    title: "Powinienem był zadzwonić",
    objectives: [
      "używać podwójnego bezokolicznika z czasownikami modalnymi w Konjunktivie II przeszłym",
      "tworzyć Perfekt czasownika modalnego z innym czasownikiem",
      "stawiać czasownik posiłkowy we właściwym miejscu w zdaniu podrzędnym",
      "robić wyrzuty i przepraszać"
    ],
    theory: [
      {
        h: "Podwójny bezokolicznik",
        p: "Czasownik modalny, który łączy się z innym czasownikiem w czasie złożonym, <strong>nie przyjmuje imiesłowu</strong> (<em>gekonnt, gesollt</em>), tylko <strong>bezokolicznik</strong>. Na końcu zdania stoją dwa bezokoliczniki: najpierw czasownik główny, potem modalny. Czasownikiem posiłkowym jest zawsze <strong>haben</strong>. W Konjunktivie II: <em>Ich hätte dich anrufen sollen</em> (powinienem był do ciebie zadzwonić), <em>Wir hätten früher losfahren können</em> (mogliśmy wyjechać wcześniej). W Perfekcie: <em>Er hat gestern nicht kommen können</em> (wczoraj nie mógł przyjść)."
      },
      {
        h: "W zdaniu podrzędnym",
        p: "W zdaniu podrzędnym czasownik posiłkowy nie idzie, jak zwykle, na koniec: staje <strong>przed dwoma bezokolicznikami</strong>. <em>Ich weiß, dass ich hätte fragen sollen. Es tut mir leid, dass ich nicht habe kommen können.</em> Przy czasownikach modalnych w podwójnym bezokoliczniku to miejsce jest obowiązkowe."
      },
      {
        contrast: "Po polsku mówisz <em>powinienem był zadzwonić</em>, <em>mogłeś mi powiedzieć</em>: przeszłość niesie sam czasownik modalny, a bezokolicznik stoi po nim. Po niemiecku przeszłość niesie <em>hätte</em>, a modalny ląduje na samym końcu, w bezokoliczniku: <em>Ich hätte anrufen sollen</em>. Czasownik posiłkowy to zawsze <em>haben</em>, nawet z czasownikiem ruchu: <em>Ich hätte kommen sollen</em>, nigdy <em>Ich wäre kommen sollen</em>."
      },
      {
        trap: "<em>Ich sollte anrufen</em> może znaczyć <em>miałem zadzwonić</em> albo <em>powinienem zadzwonić</em>, zależnie od kontekstu; wyrzut za czynność niewykonaną w przeszłości wyraża dopiero <em>Ich hätte anrufen sollen</em>. A <em>Ich hätte das gekonnt</em> istnieje tylko wtedy, gdy modalny stoi <strong>sam</strong>: „potrafiłbym to”. Gdy jest drugi czasownik, imiesłów znika: <em>Ich hätte das machen können</em>, nie <em>Ich hätte das machen gekonnt</em>."
      },
      {
        tip: "Łagodny wyrzut często zaczyna się od <em>eigentlich</em>: <em>Eigentlich hättest du mir Bescheid sagen müssen.</em> Brzmi łagodniej niż wyrzut wprost, ale mówi to samo."
      }
    ],
    grammar: {
      title: "Podwójny bezokolicznik: hätte + bezokolicznik + modalny",
      note: "Z drugim czasownikiem modalny zostaje w <b>bezokoliczniku</b> i zamyka zdanie; czasownikiem posiłkowym jest zawsze <b>haben</b>. W zdaniu podrzędnym czasownik posiłkowy staje <b>przed</b> dwoma bezokolicznikami.",
      table: {
        head: ["", "zdanie główne", "zdanie podrzędne"],
        rows: [
          ["Konjunktiv II przeszły", "Ich hätte anrufen sollen.", "..., dass ich hätte anrufen sollen."],
          ["Perfekt", "Ich habe nicht kommen können.", "..., dass ich nicht habe kommen können."],
          ["sam modalny", "Ich hätte das nicht gekonnt.", "..., dass ich das nicht gekonnt hätte."]
        ]
      },
      examples: [
        { tr: "Powinienem był do ciebie zadzwonić.", note: "podwójny bezokolicznik: anrufen sollen" },
        { tr: "Trzeba było mi to powiedzieć.", note: "müssen: obowiązek silniejszy niż sollen" },
        { tr: "Mogliśmy wyjechać wcześniej.", note: "czasownik posiłkowy to dalej haben, także z losfahren" },
        { tr: "Wczoraj nie mógł przyjść.", note: "Perfekt: hat + kommen können" },
        { tr: "Nie powinna była tego robić.", note: "nicht dürfen: coś, czego nie było wolno" },
        { tr: "Wiem, że powinienem był zapytać.", note: "zdanie podrzędne: hätte przed dwoma bezokolicznikami" }
      ]
    },
    vocab: [
      "wyrzut (jemandem Vorwürfe machen: robić komuś wyrzuty)",
      "obowiązek",
      "spóźnienie, opóźnienie",
      "wymówka",
      "zamiar",
      "przeoczenie (aus Versehen: przez pomyłkę)",
      "zarzucać",
      "przepraszać",
      "zapomnieć",
      "dać znać",
      "niestety",
      "właściwie"
    ],
    exercises: [
      {
        q: "Jak powiesz „Powinienem był do ciebie zadzwonić”?",
        opts: [
          "Ich hätte dich anrufen sollen.",
          "Ich hätte dich angerufen gesollt.",
          "Ich wäre dich anrufen sollen."
        ],
        why: "Podwójny bezokolicznik: <b>anrufen sollen</b> na końcu, czasownik posiłkowy <b>hätte</b>. Imiesłowu <i>gesollt</i> nie używa się z drugim czasownikiem, a czasownikiem posiłkowym nigdy nie jest <i>wäre</i>."
      },
      {
        q: "Jak powiesz w Perfekcie „Nie mogłem przyjść”?",
        opts: [
          "Ich habe nicht kommen können.",
          "Ich bin nicht kommen können.",
          "Ich habe nicht kommen gekonnt."
        ],
        why: "W Perfekcie czasownik modalny z innym czasownikiem ma <b>haben</b> i zostaje w bezokoliczniku: <i>habe ... kommen können</i>, choć samo <i>kommen</i> miałoby <i>sein</i>."
      },
      {
        q: "Które zdanie podrzędne jest poprawne?",
        opts: [
          "Ich weiß, dass ich hätte fragen sollen.",
          "Ich weiß, dass ich fragen sollen hätte.",
          "Ich weiß, dass ich hätte gefragt sollen."
        ],
        why: "Przy podwójnym bezokoliczniku czasownik posiłkowy staje <b>przed</b> dwoma bezokolicznikami: <i>hätte fragen sollen</i>. Trzecie miesza imiesłów z bezokolicznikiem."
      },
      {
        q: "Uzupełnij: „Du ___ mir Bescheid sagen sollen.” (powinieneś był)",
        hint: "Konjunktiv II od haben, du",
        why: "<b>Hättest</b>: czasownikiem posiłkowym podwójnego bezokolicznika jest zawsze <i>haben</i>, tu w drugiej osobie."
      },
      {
        q: "Uzupełnij czasownik modalny: „Wir hätten früher losfahren ___.” (mogliśmy wyjechać)",
        hint: "móc, w bezokoliczniku",
        why: "<b>können</b> w bezokoliczniku, na końcu po <i>losfahren</i>: to jest podwójny bezokolicznik."
      },
      {
        q: "Uzupełnij zdanie.",
        tr: "Powinienem był do ciebie wczoraj zadzwonić.",
        why: "<i>Ich hätte dich gestern anrufen sollen</i>: <i>hätte</i> na drugim miejscu, <i>anrufen sollen</i> na końcu. Przyjmowane jest też <i>müssen</i>, które wzmacnia obowiązek."
      },
      {
        q: "Uzupełnij zdanie w Perfekcie.",
        tr: "Wczoraj nie mógł przyjść.",
        why: "<i>Er hat gestern nicht kommen können</i>: czasownik posiłkowy <i>hat</i>, potem dwa bezokoliczniki. Präteritum <i>Er konnte gestern nicht kommen</i> też jest poprawne, ale ćwiczenie wymaga Perfektu."
      },
      {
        q: "Przetłumacz: „Powinieneś był mi to powiedzieć.”",
        why: "<i>Du hättest es mir sagen sollen</i> (albo <i>müssen</i>): <i>hättest</i> na drugim miejscu, <i>sagen sollen</i> na końcu. Można też zacząć od <i>Das</i>: <i>Das hättest du mir sagen sollen</i>."
      },
      {
        tr: "Przepraszam, powinienem był dać ci znać. Niestety zapomniałem o spotkaniu.",
        why: "W <i>Bescheid</i> <b>sch</b> to polskie <i>sz</i>, a <b>ei</b> to <i>aj</i>; w <i>vergessen</i> <b>v</b> czyta się jak <i>f</i>; w <i>leider</i> <b>ei</b> to znowu <i>aj</i>."
      },
      {
        tr: "Właściwie powinienem był wyjechać wcześniej.",
        why: "W <i>eigentlich</i> końcowe <b>ch</b> to miękki dźwięk [ç], podobny do polskiego <i>ś</i>; w <i>müssen</i> <b>ü</b> jest krótkie i zaokrąglone; w <i>losfahren</i> <b>h</b> wydłuża <i>a</i>."
      }
    ]
  },
  "lesson:b2-u01-l3": {
    theme: "Pozory",
    title: "Jakby nic nie wiedział",
    objectives: [
      "budować porównanie hipotetyczne z als ob i als wenn",
      "używać samego als z czasownikiem zaraz po nim",
      "odróżniać sytuację równoczesną od wcześniejszej",
      "opisywać wrażenie czasownikami aussehen, wirken, klingen"
    ],
    theory: [
      {
        h: "als ob, als wenn",
        p: "<strong>als ob</strong> i <strong>als wenn</strong> znaczą <em>jakby, jak gdyby</em> i wprowadzają porównanie hipotetyczne: wrażenie, które może być fałszywe albo o którym nie wiadomo, czy jest prawdziwe. Zwykle łączą się z <strong>Konjunktivem II</strong>, czyli formą, której tu się uczysz, a czasownik idzie na koniec: <em>Er tut so, als ob er nichts wüsste</em> (udaje, że nic nie wie). Często stoją po <em>so tun</em> (udawać), <em>aussehen</em> (wyglądać), <em>klingen</em> (brzmieć), <em>sich benehmen</em> (zachowywać się)."
      },
      {
        h: "Równocześnie czy wcześniej",
        p: "Jeśli wyobrażona sytuacja jest <strong>równoczesna</strong>, używa się Konjunktivu II teraźniejszego: <em>Du siehst aus, als ob du müde wärst</em>. Jeśli jest <strong>wcześniejsza</strong>, przeszłego: <em>Sie sieht aus, als ob sie nicht geschlafen hätte</em>. Z samym <strong>als</strong> czasownik osobowy idzie <strong>zaraz po nim</strong>, jak w pytaniu: <em>Du redest, als wärst du der Chef. Mir ist, als hätte ich ihn schon einmal gesehen.</em>"
      },
      {
        contrast: "Polskie <em>jakby</em> łączy się z formą przeszłą na <em>-ł</em> i nie odróżnia czasu: <em>wygląda, jakby nie spała</em> może znaczyć, że nie śpi teraz, albo że nie spała w nocy. Niemiecki rozróżnia to formą: <em>als ob sie nicht schlafen würde</em> (teraz) i <em>als ob sie nicht geschlafen hätte</em> (wcześniej). Uważaj też na szyk: po <em>als ob</em> czasownik idzie na koniec, a po samym <em>als</em> zaraz na początek."
      },
      {
        trap: "Nie mieszaj dwóch konstrukcji: <em>als ob er krank wäre</em> albo <em>als wäre er krank</em>, ale nie <em>als ob wäre er krank</em> ani <em>als er krank wäre</em>. I nie myl tego <em>als</em> z <em>als</em> przy stopniu wyższym (<em>größer als</em>) ani z <em>als</em> czasowym (<em>Als ich jung war</em>): tu zaraz po nim stoi czasownik w Konjunktivie II."
      },
      {
        tip: "W mowie często słychać <em>würde</em> + bezokolicznik zamiast formy własnej: <em>Sie tut so, als ob sie mich nicht kennen würde.</em> Przy <em>sein</em>, <em>haben</em> i czasownikach modalnych woli się jednak formę własną: <em>als ob er krank wäre</em>."
      }
    ],
    grammar: {
      title: "als ob, als wenn, als + Konjunktiv II",
      note: "<b>als ob / als wenn</b>: czasownik na końcu. <b>als</b>: czasownik zaraz po nim. Forma teraźniejsza dla sytuacji równoczesnej, przeszła (<b>hätte / wäre</b> + imiesłów) dla wcześniejszej.",
      table: {
        head: ["", "równocześnie", "wcześniej"],
        rows: [
          ["als ob", "..., als ob er nichts wüsste.", "..., als ob er nichts gehört hätte."],
          ["als wenn", "..., als wenn er nichts wüsste.", "..., als wenn er nichts gehört hätte."],
          ["als", "..., als wüsste er nichts.", "..., als hätte er nichts gehört."]
        ]
      },
      examples: [
        { tr: "Udaje, że nic nie wie.", note: "so tun, als ob + Konjunktiv II teraźniejszy" },
        { tr: "Wygląda, jakby nie spała (w nocy).", note: "sytuacja wcześniejsza: geschlafen hätte" },
        { tr: "Mówisz, jakbyś był szefem.", note: "samo als: czasownik zaraz po nim" },
        { tr: "Brzmi to tak, jakby na dworze padało.", note: "als wenn + würde: forma mówiona" },
        { tr: "Zachowuje się, jakby nic się nie stało.", note: "passieren ma sein: passiert wäre" },
        { tr: "Mam wrażenie, jakbym już go kiedyś widział.", note: "Mir ist, als ...: odczucie" }
      ]
    },
    vocab: [
      "wrażenie",
      "zachowanie",
      "pozór (Der Schein trügt: pozory mylą)",
      "przeczucie, pojęcie (keine Ahnung haben: nie mieć pojęcia)",
      "zachowywać się",
      "udawać",
      "wyglądać",
      "sprawiać wrażenie, działać",
      "brzmieć (Das klingt gut: brzmi dobrze)",
      "wydawać się (+ zu + bezokolicznik)",
      "dziwny",
      "zaskoczony"
    ],
    exercises: [
      {
        q: "Jak powiesz „Udaje, że nic nie wie”?",
        opts: [
          "Er tut so, als ob er nichts wüsste.",
          "Er tut so, als ob er wüsste nichts.",
          "Er tut so, als ob er nichts wissen."
        ],
        why: "Po <b>als ob</b> czasownik w Konjunktivie II idzie na koniec: <i>nichts wüsste</i>. W trzecim zdaniu jest bezokolicznik bez czasownika osobowego."
      },
      {
        q: "Które zdanie jest poprawne?",
        opts: [
          "Sie sieht aus, als ob sie nicht geschlafen hätte.",
          "Sie sieht aus, als ob hätte sie nicht geschlafen.",
          "Sie sieht aus, als sie nicht geschlafen hätte."
        ],
        why: "Z <b>als ob</b> czasownik idzie na koniec; z samym <b>als</b> stoi zaraz po nim (<i>als hätte sie nicht geschlafen</i>). Drugie i trzecie zamieniają te dwie konstrukcje."
      },
      {
        q: "Uzupełnij: „Du redest, als ___ du der Chef.” (byłbyś)",
        hint: "Konjunktiv II od sein, du; po als czasownik idzie od razu",
        why: "<b>Wärst</b> (albo <i>wärest</i>): z samym <i>als</i> czasownik osobowy stoi zaraz po nim."
      },
      {
        q: "Uzupełnij: „Er benimmt sich, als ob nichts passiert ___.” (się stało)",
        hint: "Konjunktiv II od sein",
        why: "<b>Wäre</b>: <i>passieren</i> ma w Perfekcie <i>sein</i>, a po <i>als ob</i> czasownik posiłkowy zamyka zdanie."
      },
      {
        q: "Uzupełnij zdanie.",
        tr: "Mam wrażenie, jakbym już go kiedyś widział.",
        why: "<i>Mir ist, als hätte ich ihn schon einmal gesehen</i>: z <i>als</i> czasownik <i>hätte</i> idzie od razu, imiesłów <i>gesehen</i> na koniec."
      },
      {
        q: "Które zdania są poprawne?",
        opts: [
          "Er tut so, als ob er krank wäre.",
          "Er tut so, als wäre er krank.",
          "Er tut so, als wenn er krank wäre.",
          "Er tut so, als ob wäre er krank.",
          "Er tut so, als er krank wäre."
        ],
        why: "Pierwsze trzy są poprawne: <i>als ob</i> i <i>als wenn</i> z czasownikiem na końcu, <i>als</i> z czasownikiem zaraz po nim. Czwarte i piąte mieszają obie konstrukcje."
      },
      {
        q: "Ułóż słowa we właściwej kolejności.",
        tr: "Udaje, że mnie nie zna.",
        why: "<i>Sie tut so, als ob sie mich nicht kennen würde.</i> Po <i>als ob</i> czasownik osobowy <i>würde</i> zamyka zdanie, po bezokoliczniku."
      },
      {
        q: "Przetłumacz: „Zachowuje się, jakby nic się nie stało.” (on)",
        why: "<i>Er benimmt sich, als ob nichts passiert wäre</i> albo <i>als wäre nichts passiert</i>. Zamiast <i>passiert</i> można użyć <i>geschehen</i>, a zamiast <i>sich benehmen</i> także <i>so tun</i>."
      },
      {
        tr: "Udawał, że mnie nie widział. Ale miałem wrażenie, że doskonale mnie rozpoznał.",
        why: "W <i>Eindruck</i> <b>ei</b> to <i>aj</i>, a <b>u</b> jest krótkie; w <i>erkannt</i> <b>r</b> po <i>e</i> prawie nie słychać; w <i>genau</i> <b>au</b> to <i>ał</i>."
      },
      {
        tr: "Wyglądasz, jakbyś całą noc nie spał.",
        why: "W <i>siehst</i> <b>ie</b> jest długie, a <b>h</b> nieme; w <i>Nacht</i> <b>ch</b> to twarde polskie <i>ch</i>; w <i>hättest</i> <b>ä</b> jest krótkie."
      }
    ]
  },
  "lesson:b2-u01-test": {
    theme: "Sprawdzian",
    title: "Test: Gdybym to wiedział",
    objectives: [
      "sprawdzić Konjunktiv II przeszły, podwójny bezokolicznik i als ob"
    ],
    theory: [
      {
        p: "Dziesięć pytań z całej jednostki. Zaliczenie od 70%. Nie zaglądaj do lekcji, kiedy odpowiadasz: jeśli czegoś nie pamiętasz, lepiej wrócić i powtórzyć."
      }
    ],
    exercises: [
      {
        tr: "Konjunktiv II przeszły czasownika fahren, wszystkie osoby.",
        why: "<i>fahren</i> ma w Perfekcie <i>sein</i> (<i>ich bin gefahren</i>), więc <i>wäre gefahren</i>. Tabela pyta o nieprzechodni czasownik ruchu; w znaczeniu prowadzenia pojazdu, z dopełnieniem, zwykłym czasownikiem posiłkowym jest <i>haben</i> (<i>Ich hätte das Auto gefahren</i>)."
      },
      {
        tr: "Konjunktiv II przeszły czasownika lernen, wszystkie osoby.",
        why: "<i>lernen</i> ma w Perfekcie <i>haben</i>: <i>hätte gelernt</i>."
      },
      {
        q: "Uzupełnij: „Wenn ich das gewusst ___, wäre ich gekommen.”",
        hint: "Konjunktiv II od haben, ich",
        why: "<b>Hätte</b> na końcu zdania z <i>wenn</i>, po imiesłowie <i>gewusst</i>."
      },
      {
        q: "Uzupełnij czasownik modalny: „Du hättest mich anrufen ___.” (mogłeś)",
        hint: "móc, w bezokoliczniku",
        why: "<b>können</b>: podwójny bezokolicznik, modalny zostaje w bezokoliczniku na końcu."
      },
      {
        q: "Uzupełnij: „Er tut so, als ob er nichts ___.” (wiedział)",
        hint: "Konjunktiv II od wissen",
        why: "<b>Wüsste</b>: Konjunktiv II od <i>wissen</i>, na końcu po <i>als ob</i>."
      },
      {
        q: "Uzupełnij: „Ich ___ nie weggefahren.” (nigdy bym nie wyjechał)",
        opts: [
          "wäre",
          "hätte",
          "würde"
        ],
        why: "<i>wegfahren</i> ma w Perfekcie <i>sein</i>: <b>wäre</b> + <i>weggefahren</i>."
      },
      {
        q: "Które zdanie wyraża żal?",
        opts: [
          "Hätte ich bloß mehr gelernt!",
          "Ich habe bloß mehr gelernt.",
          "Ich lerne bloß mehr."
        ],
        why: "Tu żal wyrażają Konjunktiv II przeszły, czasownik na pierwszym miejscu i <i>bloß</i> (pasują też <i>nur</i>, <i>doch</i> albo <i>Wenn ich doch ... hätte!</i>): <b>Hätte ich bloß mehr gelernt!</b> Pozostałe dwa są w trybie oznajmującym."
      },
      {
        q: "Które zdania są poprawne?",
        opts: [
          "Wir wären gern länger geblieben.",
          "Ich hätte früher aufstehen sollen.",
          "Sie sieht aus, als wäre sie krank.",
          "Ich hätte früher aufgestanden sollen.",
          "Wir hätten gern länger geblieben."
        ],
        why: "Pierwsze trzy są poprawne. Czwarte ma imiesłów zamiast bezokolicznika w podwójnym bezokoliczniku; piąte używa <i>hätten</i> z <i>bleiben</i>, które ma <i>sein</i>."
      },
      {
        tr: "Gdybyśmy wyjechali na czas, nie spóźnilibyśmy się na pociąg. Powinienem był cię posłuchać.",
        why: "W <i>rechtzeitig</i> <b>ch</b> to [ç], a <b>z</b> to polskie <i>c</i>; w <i>verpasst</i> <b>v</b> czyta się jak <i>f</i>; w <i>hören</i> <b>ö</b> jest długie i zaokrąglone."
      },
      {
        tr: "Gdybym tylko wiedział to wcześniej, zdecydowałbym inaczej.",
        why: "W <i>bloß</i> <b>o</b> jest długie, a <b>ß</b> to bezdźwięczne <i>s</i>; w <i>früher</i> <b>h</b> jest nieme i wydłuża <i>ü</i>; w <i>entschieden</i> <b>sch</b> to <i>sz</i>."
      }
    ]
  }
});
