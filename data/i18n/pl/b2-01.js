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
  },
  "unit:b2-u02": {
    title: "Warunki",
    grammarNote: "okres warunkowy rzeczywisty, nierzeczywisty teraźniejszy, nierzeczywisty przeszły i mieszany · falls, sofern, es sei denn, vorausgesetzt · warunek bez wenn (Hätte ich ..., Sollten Sie ...) · bloß, nur, doch w życzeniach"
  },
  "lesson:b2-u02-l1": {
    theme: "Decyzje",
    title: "Rzeczywisty, nierzeczywisty, mieszany",
    objectives: [
      "odróżniać warunek otwarty od nierzeczywistego",
      "budować warunek nierzeczywisty dla teraźniejszości i przeszłości",
      "łączyć warunek z przeszłości ze skutkiem w teraźniejszości",
      "stawiać czasownik we właściwym miejscu po zdaniu z wenn"
    ],
    theory: [
      {
        h: "Trzy typy okresu warunkowego",
        p: "Warunek <strong>otwarty</strong> przedstawia warunek jako możliwy i ma <strong>tryb oznajmujący</strong>: <em>Wenn es morgen regnet, bleiben wir zu Hause.</em> Warunek <strong>nierzeczywisty teraźniejszy</strong> wyobraża sobie coś, czego teraz nie ma, albo przedstawia to jako odległe, i ma <strong>Konjunktiv II teraźniejszy</strong>: <em>Wenn ich mehr Geld hätte, würde ich weniger arbeiten.</em> Warunek <strong>nierzeczywisty przeszły</strong> mówi o czymś, co się nie wydarzyło, i ma <strong>Konjunktiv II przeszły</strong>: <em>Wenn du mich gefragt hättest, hätte ich dir geholfen.</em>"
      },
      {
        h: "Warunek mieszany",
        p: "Warunek i skutek mogą dotyczyć różnych czasów. Warunek z przeszłości ze skutkiem w teraźniejszości: <em>Wenn er den Job angenommen hätte, würde er jetzt in München wohnen.</em> Pierwszy czasownik jest w Konjunktivie II przeszłym, drugi w teraźniejszym: każda część bierze czas tego, o czym mówi. Po zdaniu z <em>wenn</em> zdanie główne zaczyna się od czasownika osobowego: <em>Wenn das Wetter schön ist, <strong>gehen</strong> wir wandern.</em>"
      },
      {
        contrast: "Polski warunek otwarty działa jak niemiecki: <em>jeśli pada, zostajemy</em>, z trybem oznajmującym. Różnica jest w warunkach nierzeczywistych: polskie <em>gdybyś mnie zapytał, pomógłbym ci</em> może dotyczyć teraz albo wtedy, a o czasie decyduje kontekst. Niemiecki zawsze to rozróżnia: <em>Wenn du mich fragen würdest, würde ich dir helfen</em> (teraz) i <em>Wenn du mich gefragt hättest, hätte ich dir geholfen</em> (wtedy). Przy tłumaczeniu z polskiego trzeba więc najpierw ustalić, o który czas chodzi."
      },
      {
        trap: "Po polskim zdaniu z <em>jeśli</em> szyk się nie zmienia (<em>jeśli pada, my zostajemy</em>); w niemieckim zdanie z <em>wenn</em> zajmuje pierwsze miejsce, więc czasownik idzie zaraz po nim: <em>Wenn es regnet, bleiben wir</em>, nie <em>Wenn es regnet, wir bleiben</em>. A przy <em>haben</em> i <em>sein</em> w zdaniu z <em>wenn</em> zwykle stoją <em>hätte</em> i <em>wäre</em>: <em>Wenn ich Zeit hätte</em> jest dużo częstsze niż <em>Wenn ich Zeit haben würde</em>, które jest możliwe, ale ciężkie."
      },
      {
        tip: "Żeby wybrać typ, zapytaj, jak przedstawiasz warunek. Otwarty, czyli możliwy: tryb oznajmujący. Wyobrażony, odległy albo sprzeczny z tym, jak jest teraz: <em>hätte, wäre, würde</em>. Sprzeczny z tym, co się stało: <em>hätte</em> albo <em>wäre</em> + imiesłów."
      }
    ],
    grammar: {
      title: "Okres warunkowy: rzeczywisty, nierzeczywisty, mieszany",
      note: "<b>Otwarty</b>: tryb oznajmujący. <b>Nierzeczywisty teraźniejszy</b>: Konjunktiv II teraźniejszy. <b>Nierzeczywisty przeszły</b>: Konjunktiv II przeszły. <b>Mieszany</b>: każda część bierze czas tego, o czym mówi.",
      table: {
        head: ["typ", "warunek (wenn ...)", "skutek"],
        rows: [
          ["otwarty", "Wenn es regnet,", "bleiben wir zu Hause."],
          ["nierzeczywisty teraźniejszy", "Wenn ich Zeit hätte,", "würde ich kommen."],
          ["nierzeczywisty przeszły", "Wenn ich Zeit gehabt hätte,", "wäre ich gekommen."],
          ["mieszany", "Wenn ich den Job angenommen hätte,", "würde ich jetzt in München wohnen."]
        ]
      },
      examples: [
        { tr: "Jeśli jutro będzie padać, zostaniemy w domu.", note: "otwarty: Präsens także dla przyszłości" },
        { tr: "Gdybym miał więcej pieniędzy, pracowałbym mniej.", note: "nierzeczywisty teraźniejszy" },
        { tr: "Gdybyś mnie wtedy zapytał, pomógłbym ci.", note: "nierzeczywisty przeszły" },
        { tr: "Gdyby przyjął tę pracę, mieszkałby teraz w Monachium.", note: "mieszany: warunek w przeszłości, skutek teraz" },
        { tr: "Jeśli jest ładna pogoda, wybieramy się na pieszą wędrówkę.", note: "otwarty: zdanie główne zaczyna się od czasownika" },
        { tr: "Na twoim miejscu przyjąłbym tę ofertę.", note: "nierzeczywisty: klasyczna rada" }
      ]
    },
    vocab: [
      "warunek",
      "oferta",
      "możliwość",
      "przypadek (in diesem Fall: w takim przypadku)",
      "skutek, konsekwencja",
      "ryzyko",
      "przyjąć (ofertę)",
      "odrzucić, odmówić",
      "zależeć (von + celownik: od)",
      "ryzykować",
      "ewentualnie, w pewnych okolicznościach",
      "poważnie"
    ],
    exercises: [
      {
        q: "Jak powiesz „Jeśli jutro będzie padać, zostaniemy w domu”?",
        opts: [
          "Wenn es morgen regnet, bleiben wir zu Hause.",
          "Wenn es morgen regnen würde, blieben wir zu Hause.",
          "Wenn es morgen regnet, wir bleiben zu Hause."
        ],
        why: "Warunek otwarty: tryb oznajmujący, a po zdaniu z <i>wenn</i> czasownik idzie od razu: <b>bleiben wir</b>. Drugie zdanie przedstawia deszcz jako bardziej odległą hipotezę; trzecie ma zły szyk."
      },
      {
        q: "Jaki to typ okresu warunkowego: „Wenn ich mehr Geld hätte, würde ich weniger arbeiten”?",
        opts: [
          "nierzeczywisty teraźniejszy",
          "otwarty",
          "nierzeczywisty przeszły"
        ],
        why: "<i>hätte</i> i <i>würde arbeiten</i> to Konjunktiv II teraźniejszy: teraz nie mam więcej pieniędzy. Przeszłość wymagałaby <i>gehabt hätte</i>."
      },
      {
        q: "Jak powiesz „Gdybyś mnie wtedy zapytał, pomógłbym ci”?",
        opts: [
          "Wenn du mich gefragt hättest, hätte ich dir geholfen.",
          "Wenn du mich fragen würdest, würde ich dir helfen.",
          "Wenn du mich gefragt hast, habe ich dir geholfen."
        ],
        why: "Nierzeczywisty przeszły: Konjunktiv II przeszły w obu częściach. Drugie zdanie dotyczy teraźniejszości, trzecie jest w trybie oznajmującym."
      },
      {
        q: "Jak powiesz „Gdyby przyjął tę pracę, mieszkałby teraz w Monachium”?",
        opts: [
          "Wenn er den Job angenommen hätte, würde er jetzt in München wohnen.",
          "Wenn er den Job angenommen hätte, hätte er jetzt in München gewohnt.",
          "Wenn er den Job annehmen würde, hätte er jetzt in München gewohnt."
        ],
        why: "Warunek mieszany: warunek dotyczy przeszłości (<b>angenommen hätte</b>), skutek teraźniejszości (<b>würde ... wohnen</b>), jak mówi <i>jetzt</i>."
      },
      {
        q: "Uzupełnij: „Wenn ich du ___, würde ich das Angebot annehmen.”",
        hint: "Konjunktiv II od sein, ich",
        why: "<b>Wäre</b>: <i>Wenn ich du wäre</i> to stała formuła rady, z <i>wäre</i> na końcu zdania z <i>wenn</i>."
      },
      {
        q: "Uzupełnij zdanie.",
        tr: "Jeśli jest ładna pogoda, wybieramy się na pieszą wędrówkę.",
        why: "<i>Wenn das Wetter schön ist, gehen wir wandern</i>: <i>ist</i> na końcu zdania z <i>wenn</i>, potem zdanie główne zaczyna się od czasownika <i>gehen</i>."
      },
      {
        q: "Uzupełnij zdanie.",
        tr: "Gdybyś mnie wtedy zapytał, pomógłbym ci.",
        why: "<i>Wenn du mich gefragt hättest, hätte ich dir geholfen</i>: Konjunktiv II przeszły w obu częściach."
      },
      {
        q: "Przetłumacz: „Gdybym miał więcej pieniędzy, pracowałbym mniej.” (teraz)",
        why: "<i>Wenn ich mehr Geld hätte, würde ich weniger arbeiten</i>. Bez <i>wenn</i>: <i>Hätte ich mehr Geld, würde ich weniger arbeiten</i>."
      },
      {
        tr: "Gdybym przyjął tę ofertę, pracowałbym teraz w Hamburgu. Ale nie wszystko zależy od pieniędzy.",
        why: "W <i>Angebot</i> akcent pada na <b>An</b>; w <i>Hamburg</i> końcowe <b>g</b> czyta się jak <i>k</i>; w <i>hängt</i> <b>ng</b> to dźwięk nosowy [ŋ], jak w polskim <i>bank</i>."
      },
      {
        tr: "Jeśli jutro będzie padać, zostaniemy w domu i zagramy w karty.",
        why: "W <i>regnet</i> <b>g</b> słychać przed <i>n</i>: <i>reg-net</i>; w <i>bleiben</i> <b>ei</b> to <i>aj</i>; w <i>spielen</i> początkowe <b>sp</b> to <i>szp</i>."
      }
    ]
  },
  "lesson:b2-u02-l2": {
    theme: "Niespodzianki",
    title: "Falls, sofern, es sei denn",
    objectives: [
      "wyrażać warunek przez falls, sofern i vorausgesetzt",
      "mówić „chyba że” przez es sei denn",
      "budować warunek bez wenn, z czasownikiem na początku",
      "rozpoznawać formuły rejestru oficjalnego (Sollten Sie ..., im Notfall)"
    ],
    theory: [
      {
        h: "Inne spójniki warunkowe",
        p: "<strong>falls</strong> (<em>jeśli, w razie gdyby</em>) przedstawia warunek jako możliwy, ale niepewny: <em>Falls du Hilfe brauchst, ruf mich an.</em> <strong>sofern</strong> (<em>o ile</em>) jest bardziej oficjalne: <em>Sofern nichts dazwischenkommt, sind wir um acht da.</em> <strong>vorausgesetzt</strong> (<em>pod warunkiem że</em>) łączy się z <em>dass</em> i czasownikiem na końcu albo ze zdaniem głównym po przecinku: <em>Wir grillen, vorausgesetzt, das Wetter ist gut.</em> <strong>es sei denn</strong> (<em>chyba że</em>) wprowadza zdanie z czasownikiem na drugim miejscu: <em>Wir fahren morgen los, es sei denn, es schneit.</em>"
      },
      {
        h: "Warunek bez wenn i rejestr oficjalny",
        p: "Można pominąć <em>wenn</em> i postawić czasownik osobowy na <strong>pierwszym miejscu</strong>: <em>Hätte ich das gewusst, wäre ich gekommen.</em> W listach, ogłoszeniach i mailach służbowych często na początku stoi <strong>sollte</strong>: <em>Sollten Sie Fragen haben, wenden Sie sich bitte an uns.</em> Styl oficjalny woli też rzeczownik zamiast zdania: <em>im Notfall</em> (w nagłym wypadku), <em>im Falle eines Brandes</em> (w razie pożaru, z dopełniaczem)."
      },
      {
        contrast: "Tu polski bardzo pomaga: <em>jeśli</em>, <em>o ile</em>, <em>chyba że</em> łączą się, tak jak niemieckie spójniki, z trybem oznajmującym (<em>chyba że pada</em>, <em>es sei denn, es regnet</em>). Również polski styl urzędowy woli rzeczownik: <em>w razie pytań</em>, <em>w nagłym wypadku</em>. Nowa jest forma z czasownikiem na początku: w polskim warunek bez spójnika istnieje (<em>Będziesz miał czas, zadzwoń</em>), ale zwykle wprowadza go <em>gdyby</em> albo <em>jeśli</em>, a w niemieckim <em>Sollten Sie ...</em> czy <em>Hätte ich ...</em> to regularny wzór, częsty także w mowie."
      },
      {
        trap: "<em>es sei denn</em> znaczy już „chyba że”: nie dodawaj <em>nicht</em> odruchowo, <em>es sei denn, es regnet</em>. Przeczenie ma tam sens tylko wtedy, gdy sam wyjątek jest przeczący (<em>es sei denn, du möchtest das nicht</em>), tak jak po polsku <em>chyba że nie chcesz</em>. I po <em>es sei denn</em> czasownik stoi na drugim miejscu, nie na końcu."
      },
      {
        tip: "W mowie prawie zawsze wystarczy <em>wenn</em>; <em>falls</em> przydaje się, gdy chcesz podkreślić, że coś może się nie zdarzyć (<em>Falls ich mich verspäte, ...</em>). W oficjalnym mailu <em>Sollten Sie ...</em> od razu brzmi profesjonalnie."
      }
    ],
    grammar: {
      title: "falls, sofern, es sei denn i warunek bez wenn",
      note: "<b>falls, sofern</b>: czasownik na końcu. <b>es sei denn,</b> + zdanie z czasownikiem na drugim miejscu. <b>Bez wenn</b>: czasownik osobowy na początku (<b>Hätte ich ..., Sollten Sie ...</b>).",
      table: {
        head: ["", "przykład", "po polsku"],
        rows: [
          ["falls", "Falls du Hilfe brauchst, ruf mich an.", "jeśli, w razie gdyby"],
          ["sofern", "Sofern nichts dazwischenkommt, ...", "o ile"],
          ["es sei denn", "..., es sei denn, es schneit.", "chyba że"],
          ["bez wenn", "Sollten Sie Fragen haben, ...", "w razie pytań, gdyby Pan/Pani ..."]
        ]
      },
      examples: [
        { tr: "Jeśli będziesz potrzebować pomocy, zadzwoń do mnie.", note: "falls: warunek możliwy, tryb oznajmujący" },
        { tr: "Jeśli nic nam nie wypadnie, będziemy o ósmej.", note: "sofern: oficjalne; dazwischenkommen = wypaść (o czymś nieprzewidzianym)" },
        { tr: "Wyjeżdżamy jutro, chyba że spadnie śnieg.", note: "es sei denn: jak chyba że, z trybem oznajmującym" },
        { tr: "Gdybym to wiedział, przyszedłbym.", note: "bez wenn: czasownik na początku" },
        { tr: "W razie pytań prosimy o kontakt.", note: "Sollten Sie ...: formuła z listów" },
        { tr: "W nagłym wypadku prosimy dzwonić pod ten numer.", note: "im Notfall: rzeczownik zamiast zdania" }
      ]
    },
    vocab: [
      "nagły wypadek",
      "wyjątek",
      "warunek wstępny",
      "wątpliwość (im Zweifel: w razie wątpliwości)",
      "zapytanie",
      "wypaść (o czymś nieprzewidzianym)",
      "zwracać się do",
      "powiadomić",
      "odwołać",
      "przełożyć",
      "w razie potrzeby, ewentualnie",
      "pod warunkiem że"
    ],
    exercises: [
      {
        q: "Jak powiesz „Idziemy na spacer, chyba że będzie padać”?",
        opts: [
          "Wir gehen spazieren, es sei denn, es regnet.",
          "Wir gehen spazieren, es sei denn, es regnet nicht.",
          "Wir gehen spazieren, es sei denn, regnet es."
        ],
        why: "<b>es sei denn</b> znaczy już „chyba że”, więc nie potrzeba <i>nicht</i> (z nim warunek byłby odwrotny); po nim idzie zdanie z czasownikiem na drugim miejscu: <i>es regnet</i>."
      },
      {
        q: "Które zdanie najlepiej pasuje do oficjalnego maila?",
        opts: [
          "Sollten Sie Fragen haben, wenden Sie sich bitte an uns.",
          "Wenn du Fragen hast, frag einfach.",
          "Falls du was wissen willst, sag Bescheid."
        ],
        why: "<b>Sollten Sie ...</b> na początku, z <i>Sie</i> i <i>sich wenden an</i>, to formuła listów i maili służbowych. Pozostałe dwa są na „ty” i potoczne."
      },
      {
        q: "Uzupełnij: „___ du Hilfe brauchst, ruf mich an.” (w razie gdyby, nie wenn)",
        hint: "spójnik możliwego warunku",
        why: "<b>Falls</b>: przedstawia warunek jako możliwy, ale niepewny, i odsyła czasownik <i>brauchst</i> na koniec."
      },
      {
        q: "Uzupełnij bez wenn: „___ ich das gewusst, wäre ich gekommen.”",
        hint: "czasownik na początku, Konjunktiv II od haben",
        why: "<b>Hätte</b>: bez <i>wenn</i> czasownik osobowy otwiera zdanie, a zdanie główne zaczyna się od <i>wäre</i>."
      },
      {
        q: "Uzupełnij zdanie.",
        tr: "Wyjeżdżamy jutro, chyba że spadnie śnieg.",
        why: "<i>es sei denn</i> to stała formuła: dwa słowa po <i>es</i>, potem przecinek i zdanie z czasownikiem na drugim miejscu."
      },
      {
        q: "Połącz każde wyrażenie z jego znaczeniem.",
        pairs: [
          "jeśli, w razie gdyby",
          "o ile",
          "chyba że",
          "w razie potrzeby, ewentualnie"
        ]
      },
      {
        q: "Ułóż słowa we właściwej kolejności.",
        tr: "W razie pytań prosimy zwracać się do nas.",
        why: "<i>Sollten Sie Fragen haben, wenden Sie sich bitte an uns.</i> <i>Sollten</i> otwiera warunek, <i>haben</i> go zamyka; zdanie główne zaczyna się od czasownika <i>wenden</i>."
      },
      {
        q: "Przetłumacz bez wenn: „Gdybym to wiedział, przyszedłbym.” (o przeszłości)",
        why: "<i>Hätte ich das gewusst, wäre ich gekommen</i>. Można dodać <i>dann</i>: <i>Hätte ich das gewusst, dann wäre ich gekommen</i>."
      },
      {
        tr: "Gdyby jutro spadł śnieg, przełożymy podróż. W razie pytań prosimy zwracać się do recepcji.",
        why: "W <i>schneien</i> <b>sch</b> to <i>sz</i>, a <b>ei</b> to <i>aj</i>; w <i>verschieben</i> <b>v</b> czyta się jak <i>f</i>; w <i>Rezeption</i> <b>tion</b> czyta się [tsi̯oːn]."
      },
      {
        tr: "Jeśli nic nam nie wypadnie, będziemy o ósmej.",
        why: "W <i>dazwischenkommt</i> <b>z</b> to polskie <i>c</i>, a <b>sch</b> to <i>sz</i>; w <i>acht</i> <b>ch</b> po <i>a</i> to twarde polskie <i>ch</i>; w <i>Uhr</i> <b>h</b> wydłuża <i>u</i>."
      }
    ]
  },
  "lesson:b2-u02-l3": {
    theme: "Życzenia i żale",
    title: "Gdybym tylko ...",
    objectives: [
      "wyrażać nierzeczywiste życzenie przez wenn ... bloß / nur / doch",
      "wyrażać żal z czasownikiem na początku",
      "wzmacniać polecenie przez bloß",
      "rozumieć nur w pełnym okresie warunkowym (Wenn du nur ..., würdest du ...)"
    ],
    theory: [
      {
        h: "Życzenia nierzeczywiste",
        p: "Życzenie przedstawione jako dalekie od tego, jak jest teraz, albo żal za przeszłością mają formę warunku bez skutku, z <strong>Konjunktivem II</strong> i partykułą: <strong>bloß</strong>, <strong>nur</strong> albo <strong>doch</strong>. Z <em>wenn</em> czasownik idzie na koniec: <em>Wenn ich bloß mehr Zeit hätte!</em> Bez <em>wenn</em> czasownik idzie na początek: <em>Hätte ich nur nicht so viel gegessen! Wäre ich doch zu Hause geblieben!</em> W teraźniejszości używa się też <em>würde</em>: <em>Wenn es doch endlich regnen würde!</em>"
      },
      {
        h: "bloß w poleceniach, nur w warunku",
        p: "W poleceniu <strong>bloß</strong> sprawia, że brzmi ono natarczywie, prawie groźnie: <em>Mach das bloß nicht!</em> (ani mi się waż). W pełnym okresie warunkowym, ze skutkiem, <strong>nur</strong> może ograniczać to, co po nim następuje, albo wzmacniać życzenie: <em>Wenn du nur ein bisschen Geduld hättest, würdest du es schaffen</em> można oddać jako „wystarczyłoby trochę cierpliwości i dałbyś radę”."
      },
      {
        contrast: "Po polsku to samo życzenie wyrażasz przez <em>gdybym tylko</em> albo <em>oby</em>: <em>Gdybym tylko miał więcej czasu! Obym zdążył!</em> W tej konstrukcji polskiemu <em>gdybym tylko</em> odpowiada zdanie z Konjunktivem II i partykułą <em>bloß</em>, <em>nur</em> albo <em>doch</em>, która stoi wewnątrz zdania, zwykle po podmiocie i zaimkach, a przed przeczeniem: <em>Hätte ich nur nicht so viel gegessen! Wenn du es mir bloß früher gesagt hättest!</em> Dokładne miejsce zależy też od tego, co chcesz uwypuklić."
      },
      {
        trap: "Tu <em>nur</em> i <em>bloß</em> nie znaczą <em>tylko</em> w sensie „nic więcej”: <em>Wenn ich bloß mehr Zeit hätte!</em> to nie „gdybym miał wyłącznie więcej czasu”, tylko „gdybym tylko miał więcej czasu”. A <em>doch</em> w życzeniu to nie <em>doch</em> z odpowiedzi (<em>Doch!</em>, ależ tak): tu wzmacnia życzenie."
      },
      {
        tip: "W życzeniach trzy partykuły są prawie wymienne; <em>doch</em> wzmacnia życzenie albo żal tak jak pozostałe, a wybór zależy bardziej od kontekstu i intonacji niż od rejestru. Żeby nie pomylić szyku, napisz najpierw zdanie bez partykuły, a potem wstaw ją po podmiocie i zaimkach."
      }
    ],
    grammar: {
      title: "Życzenia nierzeczywiste: wenn ... bloß / nur / doch + Konjunktiv II",
      note: "<b>Wenn</b> + partykuła + czasownik na końcu albo czasownik na <b>początku</b> + partykuła. Partykuła stoi wewnątrz zdania, zwykle po podmiocie i zaimkach, a przed <i>nicht</i>.",
      table: {
        head: ["", "teraźniejszość", "przeszłość"],
        rows: [
          ["z wenn", "Wenn ich bloß mehr Zeit hätte!", "Wenn ich bloß früher gekommen wäre!"],
          ["bez wenn", "Hätte ich nur mehr Zeit!", "Wäre ich doch früher gekommen!"],
          ["z würde", "Wenn es doch endlich regnen würde!", "-"]
        ]
      },
      examples: [
        { tr: "Gdybym tylko miał więcej czasu!", note: "wenn + bloß, czasownik na końcu" },
        { tr: "Gdybym tylko nie zjadł tak dużo!", note: "czasownik na początku, nur przed nicht" },
        { tr: "Gdybym tylko został w domu!", note: "doch: życzenie dotyczące przeszłości" },
        { tr: "Oby wreszcie spadł deszcz!", note: "würde + bezokolicznik w teraźniejszości" },
        { tr: "Ani mi się waż tego robić!", note: "bloß w poleceniu: groźny ton" },
        { tr: "Wystarczyłoby trochę cierpliwości i dałbyś radę.", note: "nur w pełnym okresie warunkowym: ogranicza to, co po nim" }
      ]
    },
    vocab: [
      "cierpliwość",
      "pech (So ein Pech!: co za pech!)",
      "przypadek, zbieg okoliczności",
      "los, przeznaczenie",
      "zmartwienie, troska",
      "złość, kłopoty",
      "złościć się",
      "mieć nadzieję",
      "tęsknić (nach + celownik: za)",
      "wreszcie, nareszcie",
      "koniecznie",
      "na próżno"
    ],
    exercises: [
      {
        q: "Jak powiesz „Gdybym tylko miał więcej czasu!”?",
        opts: [
          "Wenn ich bloß mehr Zeit hätte!",
          "Wenn ich bloß mehr Zeit habe!",
          "Wenn ich bloß hätte mehr Zeit!"
        ],
        why: "Życzenie nierzeczywiste wymaga Konjunktivu II (<b>hätte</b>) na końcu zdania z <i>wenn</i>. Drugie jest w trybie oznajmującym; trzecie nie odsyła czasownika na koniec, jak wymaga <i>wenn</i>."
      },
      {
        q: "Co znaczy „Mach das bloß nicht!”?",
        opts: [
          "Ani mi się waż tego robić!",
          "Zrób to tylko raz.",
          "Nie rób tylko tego."
        ],
        why: "W poleceniu <b>bloß</b> czyni zakaz natarczywym, prawie groźnym. Nie znaczy <i>tylko</i>."
      },
      {
        q: "Uzupełnij partykułę: „Hätte ich ___ nicht so viel gegessen!”",
        hint: "partykuła żalu, przed nicht",
        why: "<b>nur</b>, <b>bloß</b> albo <b>doch</b>: wszystkie trzy wzmacniają żal i stoją przed <i>nicht</i>."
      },
      {
        q: "Uzupełnij: „___ ich doch zu Hause geblieben!”",
        hint: "czasownik na początku, Konjunktiv II od sein",
        why: "<b>Wäre</b>: <i>bleiben</i> ma <i>sein</i>, a bez <i>wenn</i> czasownik osobowy otwiera zdanie."
      },
      {
        q: "Uzupełnij zdanie.",
        tr: "Oby wreszcie spadł deszcz!",
        why: "<i>Wenn es doch endlich regnen würde!</i> W teraźniejszości często używa się <i>würde</i> + bezokolicznik; <i>würde</i> zamyka zdanie z <i>wenn</i>."
      },
      {
        q: "Połącz każde wyrażenie z jego znaczeniem.",
        pairs: [
          "Gdybym tylko ...!",
          "wreszcie, nareszcie",
          "koniecznie",
          "na próżno"
        ]
      },
      {
        q: "Ułóż słowa we właściwej kolejności.",
        tr: "Gdybym tylko nie zjadł tak dużo!",
        why: "<i>Hätte ich nur nicht so viel gegessen!</i> Czasownik na początku, potem podmiot, partykuła <i>nur</i>, przeczenie i imiesłów na końcu."
      },
      {
        q: "Przetłumacz: „Gdybyś mi to tylko wcześniej powiedział!”",
        why: "<i>Wenn du es mir bloß früher gesagt hättest!</i> albo <i>Hättest du es mir bloß früher gesagt!</i> Zamiast <i>bloß</i> pasują też <i>nur</i> i <i>doch</i>."
      },
      {
        tr: "Gdybym tylko nie czekał tak długo! Teraz mieszkanie przepadło. Co za pech.",
        why: "W <i>bloß</i> <b>o</b> jest długie; w <i>gewartet</i> <b>w</b> to polskie <i>w</i>; w <i>Pech</i> <b>ch</b> po <i>e</i> to miękki dźwięk [ç], podobny do <i>ś</i>."
      },
      {
        tr: "Gdybym tylko miał trochę więcej cierpliwości!",
        why: "W <i>Geduld</i> akcent pada na <b>duld</b>; w <i>bisschen</i> <b>s</b> i <b>ch</b> czyta się osobno, [sç]; w <i>gehabt</i> <b>b</b> przed <i>t</i> czyta się jak <i>p</i>."
      }
    ]
  },
  "lesson:b2-u02-test": {
    theme: "Sprawdzian",
    title: "Test: Warunki",
    objectives: [
      "sprawdzić typy okresu warunkowego, falls, es sei denn i warunek bez wenn"
    ],
    theory: [
      {
        p: "Dziesięć pytań z całej jednostki. Zaliczenie od 70%. Nie zaglądaj do lekcji, kiedy odpowiadasz: jeśli czegoś nie pamiętasz, lepiej wrócić i powtórzyć."
      }
    ],
    exercises: [
      {
        q: "Uzupełnij: „Wenn er früher losgefahren ___, hätte er den Zug erreicht.”",
        hint: "Konjunktiv II od sein, er",
        why: "<b>Wäre</b>: <i>losfahren</i> ma <i>sein</i>, a Konjunktiv II przeszły zamyka zdanie z <i>wenn</i>."
      },
      {
        q: "Uzupełnij: „Wir kommen, es sei denn, es ___ etwas dazwischen.”",
        hint: "dazwischenkommen, czas teraźniejszy, tryb oznajmujący",
        why: "<b>kommt</b>: po <i>es sei denn</i> stoi zdanie główne w trybie oznajmującym, z czasownikiem na drugim miejscu i partykułą <i>dazwischen</i> na końcu."
      },
      {
        q: "Uzupełnij oficjalną formułę: „___ Sie Fragen haben, wenden Sie sich an uns.”",
        hint: "czasownik modalny na początku",
        why: "<b>Sollten</b>: warunek bez <i>wenn</i> z oficjalnych listów, z <i>haben</i> na końcu."
      },
      {
        q: "Które zdanie to nierzeczywisty okres warunkowy w przeszłości?",
        opts: [
          "Wenn sie angerufen hätte, wäre ich gekommen.",
          "Wenn sie anruft, komme ich.",
          "Wenn sie anrufen würde, käme ich."
        ],
        why: "Tylko pierwsze ma Konjunktiv II przeszły (<i>angerufen hätte</i>, <i>wäre gekommen</i>). Drugie jest otwarte, trzecie nierzeczywiste teraźniejsze."
      },
      {
        q: "Które zdanie znaczy „Przyjdę jutro, chyba że będę chory”?",
        opts: [
          "Ich komme morgen, es sei denn, ich bin krank.",
          "Ich komme morgen, es sei denn, ich bin nicht krank.",
          "Ich komme morgen, es sei denn, ich krank bin."
        ],
        why: "<i>es sei denn</i>, jak <i>chyba że</i>, bez dodatkowego <i>nicht</i> i z czasownikiem na drugim miejscu (<i>ich bin krank</i>). Z <i>nicht</i> warunek byłby odwrotny."
      },
      {
        q: "Uzupełnij skutkiem, który dotyczy teraźniejszości (warunek mieszany): „Hätte ich gestern nicht so viel gearbeitet, ...”",
        opts: [
          "wäre ich jetzt nicht so müde.",
          "wäre ich jetzt nicht so müde gewesen.",
          "bin ich jetzt nicht so müde."
        ],
        why: "Warunek mieszany: warunek dotyczy przeszłości, skutek teraźniejszości (<i>jetzt</i>), więc Konjunktiv II teraźniejszy: <b>wäre ... müde</b>."
      },
      {
        q: "Uzupełnij zdanie.",
        tr: "Gdybym miał więcej czasu, częściej uprawiałbym sport.",
        why: "<i>Wenn ich mehr Zeit hätte, würde ich öfter Sport machen</i>: nierzeczywisty teraźniejszy, <i>hätte</i> na końcu i <i>würde</i> na początku zdania głównego."
      },
      {
        q: "Uzupełnij zdanie bez wenn.",
        tr: "Gdybym to wiedział, pomógłbym ci. (o przeszłości)",
        why: "<i>Hätte ich das gewusst, hätte ich dir geholfen</i>: pierwsze <i>hätte</i> otwiera warunek, drugie zdanie główne."
      },
      {
        tr: "Jeśli jutro będziesz mieć czas, wpadnij. Gdybym wiedział, że jesteś w mieście, zadzwoniłbym już wczoraj.",
        why: "W <i>vorbei</i> <b>v</b> czyta się jak <i>f</i>; w <i>Stadt</i> końcowe <b>dt</b> to <i>t</i>; w <i>angerufen</i> akcent pada na <b>an</b>."
      },
      {
        tr: "Gdyby nie mógł Pan przyjść, prosimy o odwołanie wizyty z wyprzedzeniem.",
        why: "W <i>verhindert</i> <b>v</b> czyta się jak <i>f</i>; w <i>rechtzeitig</i> <b>ch</b> to [ç], a <b>z</b> to polskie <i>c</i>; w <i>absagen</i> <b>b</b> przed <i>s</i> czyta się jak <i>p</i>."
      }
    ]
  },
  "unit:b2-u03": {
    title: "Strona bierna i czas opowiadania",
    grammarNote: "strona bierna w Perfekcie i Plusquamperfekcie (ist gebaut worden) · strona bierna z czasownikami modalnymi (muss ausgefüllt werden) · strona bierna stanu (ist geschlossen) · Präteritum w opowiadaniu · ohne ... zu, statt ... zu, ohne dass, anstatt dass"
  },
  "lesson:b2-u03-l1": {
    theme: "Historia i procesy techniczne",
    title: "Zbudowano, zostało naprawione",
    objectives: [
      "tworzyć stronę bierną w Perfekcie i Plusquamperfekcie z worden",
      "używać strony biernej z czasownikiem modalnym",
      "odróżniać stronę bierną czynności (wird geschlossen) od strony biernej stanu (ist geschlossen)",
      "opowiadać historię budynku albo wynalazku"
    ],
    theory: [
      {
        h: "Strona bierna w Perfekcie",
        p: "W Perfekcie stronę bierną tworzy <strong>sein</strong> + imiesłów II + <strong>worden</strong>: <em>Die Brücke ist letztes Jahr renoviert worden</em> (most został wyremontowany w zeszłym roku). W Plusquamperfekcie <em>sein</em> stoi w Präteritum: <em>Der Fehler war schon vorher entdeckt worden</em> (błąd został wykryty już wcześniej). W tekstach pisanych i w historii często używa się też Präteritum: <em>Das Rathaus wurde im sechzehnten Jahrhundert gebaut.</em>"
      },
      {
        h: "Z czasownikami modalnymi i strona bierna stanu",
        p: "Z <strong>czasownikiem modalnym</strong> odmienia się modalny, a strona bierna zostaje w bezokoliczniku, imiesłów + <em>werden</em>, na końcu: <em>Das Formular muss bis Freitag ausgefüllt werden. Die Daten konnten nicht gespeichert werden.</em> <strong>Strona bierna stanu</strong> (Zustandspassiv) to <strong>sein</strong> + imiesłów; opisuje wynik czynności: <em>Das Geschäft ist sonntags geschlossen.</em> Strona bierna czynności, z <em>werden</em>, opisuje samą czynność: <em>Das Geschäft wird um acht geschlossen.</em>"
      },
      {
        contrast: "Polski ma tu podobny podział: <em>most został wyremontowany</em> (czynność, <em>zostać</em>) i <em>most jest wyremontowany</em> (stan, <em>być</em>). Odpowiednio: <em>ist renoviert worden</em> i <em>ist renoviert</em>. Polskie <em>był remontowany</em> (aspekt niedokonany, czynność w toku) to po niemiecku zwykle Präteritum: <em>wurde renoviert</em>. A tam, gdzie polski mówi bezosobowo <em>produkuje się samochody</em>, niemiecki chętnie używa strony biernej: <em>Autos werden hergestellt</em>."
      },
      {
        trap: "W stronie biernej imiesłów od <em>werden</em> brzmi <strong>worden</strong>, bez <em>ge-</em>: <em>ist gebaut worden</em>, nie <em>ist gebaut geworden</em>. <em>Geworden</em> to imiesłów od <em>werden</em> w znaczeniu „zostać kimś”: <em>Er ist Arzt geworden</em> (został lekarzem). Polskie <em>został</em> pasuje do obu, więc łatwo je pomylić."
      },
      {
        tip: "Żeby wybrać między <em>werden</em> a <em>sein</em>, zapytaj, czy zdanie opisuje czynność, czy stan, który z niej wynika: <em>drzwi są otwierane</em> to <em>Die Tür wird geöffnet</em>, <em>drzwi są otwarte</em> to <em>Die Tür ist geöffnet</em>. Samo polskie <em>być</em> nie rozstrzyga, bo występuje w obu."
      }
    ],
    grammar: {
      title: "Strona bierna: Perfekt, czasowniki modalne, strona bierna stanu",
      note: "<b>Perfekt</b>: ist + imiesłów + <b>worden</b>. <b>Plusquamperfekt</b>: war + imiesłów + worden. <b>Z modalnym</b>: modalny + imiesłów + werden. <b>Stan</b>: sein + imiesłów.",
      table: {
        head: ["", "przykład", "po polsku"],
        rows: [
          ["Präteritum", "Das Haus wurde 1900 gebaut.", "dom zbudowano"],
          ["Perfekt", "Das Haus ist 1900 gebaut worden.", "dom został zbudowany w 1900 roku"],
          ["Plusquamperfekt", "Das Haus war schon gebaut worden.", "dom został już wcześniej zbudowany"],
          ["z modalnym", "Das Haus muss renoviert werden.", "dom musi zostać wyremontowany"],
          ["strona bierna stanu", "Das Haus ist renoviert.", "dom jest wyremontowany"]
        ]
      },
      examples: [
        { tr: "Ratusz zbudowano w szesnastym wieku.", note: "Präteritum: typowe dla tekstów historycznych" },
        { tr: "Most został wyremontowany w zeszłym roku.", note: "Perfekt: ist + imiesłów + worden" },
        { tr: "Błąd został wykryty już wcześniej.", note: "Plusquamperfekt: war + imiesłów + worden" },
        { tr: "Formularz musi zostać wypełniony najpóźniej w piątek.", note: "modalny + imiesłów + werden" },
        { tr: "Nie udało się zapisać danych.", note: "konnten ... gespeichert werden: modalny w Präteritum" },
        { tr: "Sklep jest w niedziele zamknięty.", note: "strona bierna stanu: sein + imiesłów" }
      ]
    },
    vocab: [
      "wiek, stulecie",
      "budynek",
      "most",
      "budowla",
      "wynalazek",
      "procedura, metoda",
      "wznieść, postawić",
      "zniszczyć",
      "wynaleźć",
      "produkować, wytwarzać",
      "odkryć, wykryć",
      "remontować"
    ],
    exercises: [
      {
        q: "Jak powiesz „Most został wyremontowany”?",
        opts: [
          "Die Brücke ist renoviert worden.",
          "Die Brücke ist renoviert geworden.",
          "Die Brücke hat renoviert worden."
        ],
        why: "Strona bierna w Perfekcie: <b>ist</b> + imiesłów + <b>worden</b>. <i>Geworden</i> to imiesłów od <i>werden</i> w znaczeniu „zostać kimś”, a czasownikiem posiłkowym jest <i>sein</i>, nie <i>haben</i>."
      },
      {
        q: "Które zdanie opisuje stan, „Sklep jest zamknięty”?",
        opts: [
          "Das Geschäft ist geschlossen.",
          "Das Geschäft wird geschlossen.",
          "Das Geschäft ist geschlossen worden."
        ],
        why: "Stan wyraża <b>sein</b> + imiesłów, jak polskie <i>być</i>. <i>Wird geschlossen</i> opisuje czynność zamykania, <i>ist geschlossen worden</i> zamknięcie, które nastąpiło w przeszłości."
      },
      {
        q: "Jak powiesz „Formularz musi zostać wypełniony”?",
        opts: [
          "Das Formular muss ausgefüllt werden.",
          "Das Formular muss ausfüllen werden.",
          "Das Formular wird ausgefüllt müssen."
        ],
        why: "Z modalnym: odmieniony modalny (<b>muss</b>) + imiesłów + <b>werden</b> na końcu."
      },
      {
        q: "Uzupełnij stronę bierną w Perfekcie: „Die Kirche ist 1890 gebaut ___.”",
        hint: "imiesłów od werden w stronie biernej",
        why: "<b>worden</b>: w stronie biernej w Perfekcie imiesłów od <i>werden</i> traci <i>ge-</i>."
      },
      {
        q: "Uzupełnij w Plusquamperfekcie: „Der Fehler ___ schon vorher entdeckt worden.”",
        hint: "Präteritum od sein",
        why: "<b>war</b>: Plusquamperfekt strony biernej ma <i>sein</i> w Präteritum, potem imiesłów i <i>worden</i>."
      },
      {
        q: "Uzupełnij: „Die Daten konnten nicht gespeichert ___.”",
        hint: "bezokolicznik strony biernej",
        why: "<b>werden</b>: po czasowniku modalnym strona bierna zostaje w bezokoliczniku, imiesłów + <i>werden</i>."
      },
      {
        q: "Uzupełnij zdanie.",
        tr: "Od 1950 roku produkuje się tu samochody.",
        why: "<i>Hier werden seit 1950 Autos hergestellt</i>: polska forma bezosobowa staje się stroną bierną z <i>werden</i>, w liczbie mnogiej, bo podmiotem są <i>Autos</i>."
      },
      {
        q: "Przetłumacz: „Miasto zostało zniszczone w czasie wojny.”",
        why: "<i>Die Stadt ist im Krieg zerstört worden</i> albo w Präteritum <i>Die Stadt wurde im Krieg zerstört</i>. Zamiast <i>im Krieg</i> pasuje też <i>während des Krieges</i>."
      },
      {
        tr: "Stary ratusz zbudowano w szesnastym wieku. W czasie wojny został prawie całkowicie zniszczony, ale potem odbudowano go zgodnie z oryginałem.",
        why: "W <i>Jahrhundert</i> <b>J</b> to polskie <i>j</i>; w <i>vollständig</i> <b>v</b> czyta się jak <i>f</i>, a końcowe <b>-ig</b> jak [ɪç]; w <i>originalgetreu</i> <b>eu</b> to [ɔʏ], podobne do <i>oj</i>."
      },
      {
        tr: "Most został wyremontowany w zeszłym roku i znowu jest otwarty.",
        why: "W <i>Brücke</i> <b>ü</b> jest krótkie; w <i>renoviert</i> <b>v</b> czyta się jak polskie <i>w</i>, bo słowo pochodzi z łaciny; w <i>geöffnet</i> <b>ö</b> jest krótkie i zaokrąglone."
      }
    ]
  },
  "lesson:b2-u03-l2": {
    theme: "Opowieści",
    title: "Präteritum w opowiadaniu",
    objectives: [
      "opowiadać historię w Präteritum",
      "odmieniać w Präteritum najczęstsze czasowniki mocne",
      "używać Plusquamperfektu dla tego, co wydarzyło się wcześniej",
      "rozpoznawać styl baśni (Es war einmal ...)"
    ],
    theory: [
      {
        h: "Czas opowiadania pisanego",
        p: "W baśniach, powieściach, biografiach i artykułach prasowych przeszłość opowiada się w <strong>Präteritum</strong>: <em>Es war einmal ein armer Müller. Plötzlich klingelte das Telefon. Sie stand auf und ging zum Fenster.</em> Czasowniki słabe dostają <em>-te</em> (<em>klingelte, erzählte</em>); mocne zmieniają samogłoskę i w pierwszej i trzeciej osobie liczby pojedynczej nie mają końcówki (<em>ich lief, er lief</em>). To, co wydarzyło się wcześniej, wyraża <strong>Plusquamperfekt</strong>: <em>Als sie ankam, war der Zug schon abgefahren.</em>"
      },
      {
        h: "Czasowniki mocne do rozpoznania",
        p: "W opowiadaniach wracają wciąż te same czasowniki mocne: <em>gehen → ging, kommen → kam, stehen → stand, sitzen → saß, liegen → lag, laufen → lief, rufen → rief, ziehen → zog, treffen → traf, finden → fand, schreiben → schrieb, erschrecken → erschrak</em>. Perfekt zostaje w wypowiedziach postaci, bo to czas mowy: <em>„Ich habe einen Traum gehabt“, sagte sie.</em>"
      },
      {
        contrast: "Polski czas przeszły jest jeden, ale rozróżnia aspekt: <em>siedziała</em> (niedokonany) i <em>wstała</em> (dokonany). Niemiecki nie ma aspektu, więc jedno Präteritum służy do obu: <em>Sie saß am Fenster</em> (siedziała przy oknie) i <em>Plötzlich stand sie auf</em> (nagle wstała). Różnicę robią kontekst i przysłówki (<em>plötzlich, immer, jeden Tag</em>). Polski ma też ten sam czas w piśmie i w mowie; niemiecki w mowie woli Perfekt, poza <em>sein</em>, <em>haben</em> i czasownikami modalnymi."
      },
      {
        trap: "Form mocnych nie da się wyprowadzić z bezokolicznika regułą: trzeba ich uczyć się razem z imiesłowem (<em>laufen, lief, gelaufen</em>; <em>ziehen, zog, gezogen</em>). Uważaj na <em>erschrecken</em>: w znaczeniu „przestraszyć się” jest mocny (<em>sie erschrak</em>), w znaczeniu „przestraszyć kogoś” słaby (<em>er erschreckte das Kind</em>)."
      },
      {
        tip: "Przeczytanie baśni braci Grimm to najszybszy sposób, żeby utrwalić Präteritum: prawie każde zdanie je ma, a formy mocne powtarzają się bez przerwy."
      }
    ],
    grammar: {
      title: "Präteritum i Plusquamperfekt w opowiadaniu",
      note: "<b>Czasowniki słabe</b>: temat + <i>-te</i> (klingelte). <b>Czasowniki mocne</b>: zmiana samogłoski, bez końcówki przy ich i er (lief, zog). <b>Plusquamperfekt</b>: hatte / war + imiesłów, dla tego, co stało się wcześniej.",
      table: {
        head: ["bezokolicznik", "Präteritum (er)", "Perfekt (er)"],
        rows: [
          ["klingeln", "klingelte", "hat geklingelt"],
          ["laufen", "lief", "ist gelaufen"],
          ["ziehen", "zog", "hat gezogen"],
          ["treffen", "traf", "hat getroffen"],
          ["erschrecken (przestraszyć się)", "erschrak", "ist erschrocken"]
        ]
      },
      examples: [
        { tr: "Był sobie raz biedny młynarz.", note: "Es war einmal: początek baśni" },
        { tr: "Nagle zadzwonił telefon.", note: "czasownik słaby: klingelte" },
        { tr: "Wstała i podeszła do okna.", note: "czasowniki mocne: stand, ging" },
        { tr: "Biegł tak szybko, jak mógł.", note: "lief: Präteritum od laufen" },
        { tr: "Kiedy przyjechała, pociąg już odjechał.", note: "Plusquamperfekt dla tego, co stało się wcześniej" },
        { tr: "Nikt nie wiedział, kto napisał ten list.", note: "wusste (czasownik mieszany) i Plusquamperfekt hatte geschrieben" }
      ]
    },
    vocab: [
      "historia, opowieść",
      "baśń",
      "bohater",
      "opowiadanie",
      "początek",
      "koniec",
      "opowiadać",
      "dziać się, wydarzyć się",
      "przestraszyć się (erschrak, ist erschrocken)",
      "nagle",
      "wtedy, w tamtych czasach",
      "w końcu, ostatecznie"
    ],
    exercises: [
      {
        tr: "Präteritum czasownika laufen, wszystkie osoby.",
        why: "<i>lief, liefst, lief, liefen, lieft, liefen</i>: samogłoska <i>ie</i>, bez końcówki w pierwszej i trzeciej osobie liczby pojedynczej."
      },
      {
        tr: "Präteritum czasownika ziehen, wszystkie osoby.",
        why: "<i>zog, zogst, zog, zogen, zogt, zogen</i>: samogłoska zmienia się w <i>o</i>, a <i>h</i> znika."
      },
      {
        tr: "Präteritum czasownika treffen, wszystkie osoby.",
        why: "<i>traf, trafst, traf, trafen, traft, trafen</i>: podwójne <i>f</i> staje się pojedyncze po długim <i>a</i>."
      },
      {
        q: "Które zdanie ma czas typowy dla opowiadania pisanego?",
        opts: [
          "Sie stand auf und ging zum Fenster.",
          "Sie ist aufgestanden und zum Fenster gegangen.",
          "Sie steht auf und geht zum Fenster."
        ],
        why: "Opowiadanie pisane używa <b>Präteritum</b>: <i>stand auf, ging</i>. Perfekt to czas mowy; czas teraźniejszy czasem ożywia opowieść, ale nie jest zwykłym czasem opowiadania."
      },
      {
        q: "Jakie jest Präteritum od laufen (er)?",
        opts: [
          "lief",
          "laufte",
          "lauf"
        ],
        why: "<i>laufen</i> to czasownik mocny: <b>lief</b>. Słaba forma <i>laufte</i> nie istnieje."
      },
      {
        q: "Uzupełnij w Präteritum: „Plötzlich ___ das Telefon.” (klingeln)",
        hint: "czasownik słaby, er/es",
        why: "<b>klingelte</b>: czasownik słaby, temat <i>klingel-</i> + <i>-te</i>."
      },
      {
        q: "Uzupełnij: „Als sie ankam, ___ der Zug schon abgefahren.” (już odjechał)",
        hint: "Präteritum od sein",
        why: "<b>war</b>: Plusquamperfekt od <i>abfahren</i> tworzy się z <i>sein</i>, bo to czasownik ruchu."
      },
      {
        q: "Uzupełnij zdanie czasownikiem laufen w Präteritum.",
        tr: "Biegł tak szybko, jak mógł.",
        why: "<i>Er lief, so schnell er konnte</i>: <i>lief</i> od <i>laufen</i>, <i>konnte</i> od <i>können</i>."
      },
      {
        q: "Przetłumacz, używając Präteritum: „Nagle zgasło światło.”",
        why: "<i>Plötzlich ging das Licht aus</i>: <i>ausgehen</i> w Präteritum to <i>ging ... aus</i>, z partykułą na końcu. Pasuje też <i>auf einmal</i>."
      },
      {
        tr: "Było już ciemno, kiedy wrócił do domu. Drzwi były otwarte i nikt nie odpowiadał. Przestraszył się i zadzwonił na policję.",
        why: "W <i>dunkel</i> <b>u</b> jest krótkie; w <i>erschrak</i> <b>sch</b> to <i>sz</i>, a <b>a</b> jest długie; w <i>Polizei</i> akcent pada na ostatnią sylabę, <b>zei</b>."
      },
      {
        tr: "W tamtych czasach nie było jeszcze internetu i pisaliśmy do siebie długie listy.",
        why: "W <i>damals</i> akcent pada na <b>da</b>; w <i>schrieben</i> <b>ie</b> jest długie; w <i>Briefe</i> <b>ie</b> to znowu długie <i>i</i>."
      }
    ]
  },
  "lesson:b2-u03-l3": {
    theme: "Sposoby działania",
    title: "Bez pytania, zamiast czekać",
    objectives: [
      "używać ohne ... zu i statt ... zu przy tym samym podmiocie",
      "używać ohne dass i anstatt dass przy różnych podmiotach",
      "stawiać zu we właściwym miejscu przy czasownikach rozdzielnych",
      "opowiadać, jak ktoś coś zrobił"
    ],
    theory: [
      {
        h: "ohne ... zu, statt ... zu",
        p: "<strong>ohne ... zu</strong> (<em>nie</em> + imiesłów na <em>-ąc</em>, <em>bez</em> + rzeczownik) i <strong>statt / anstatt ... zu</strong> (<em>zamiast</em> + bezokolicznik) tworzą zdanie bezokolicznikowe z <strong>tym samym podmiotem</strong> co zdanie główne. <em>zu</em> + bezokolicznik idzie na koniec: <em>Er ging, ohne sich zu verabschieden. Statt zu warten, rief sie sofort an. Anstatt zu lernen, sieht er fern.</em> Przy czasowniku rozdzielnym <em>zu</em> wchodzi między partykułę a czasownik: <em>ohne nachzudenken, statt fernzusehen</em>."
      },
      {
        h: "ohne dass, anstatt dass",
        p: "Jeśli drugie zdanie ma <strong>inny</strong> podmiot, bezokolicznik jest niemożliwy: potrzeba <strong>ohne dass</strong> albo <strong>anstatt dass</strong> z czasownikiem osobowym na końcu. <em>Er ging, ohne dass ich es merkte</em> (wyszedł, a ja tego nie zauważyłem). <em>Anstatt dass du alles allein machst, helfen wir dir</em> (zamiast żebyś robił wszystko sam, pomożemy ci). Konstrukcja z <em>dass</em> jest możliwa także przy tym samym podmiocie (<em>Anstatt dass du hilfst, schaust du nur zu</em>), ale wtedy forma z <em>zu</em> brzmi naturalniej."
      },
      {
        contrast: "Po polsku mówisz <em>wyszedł, nie żegnając się</em> albo <em>bez pożegnania</em>: imiesłów albo rzeczownik. Niemiecki nie ma tu imiesłowu: potrzebny jest bezokolicznik z <em>zu</em> na końcu zdania, po wszystkich dopełnieniach: <em>ohne den Vertrag zu lesen</em>, <em>nie czytając umowy</em>. <em>Zamiast czekać</em> ma po polsku goły bezokolicznik, po niemiecku <em>statt zu warten</em>, z <em>zu</em>. Po <em>ohne dass</em> zwykle stoi tryb oznajmujący (Konjunktiv II jest możliwy, ale rzadszy: <em>ohne dass ich es bemerkt hätte</em>)."
      },
      {
        trap: "Nie zapominaj o <em>zu</em>: <em>ohne sich verabschieden</em> to błąd, trzeba <em>ohne sich zu verabschieden</em>. I nie używaj bezokolicznika przy innym podmiocie: <em>Er ging, ohne mich es zu merken</em> nie ma sensu; mówi się <em>ohne dass ich es merkte</em>."
      },
      {
        tip: "Żeby się sprawdzić, pomyśl o <em>um ... zu</em>, które już znasz: konstrukcja jest taka sama (<em>um zu lernen, ohne zu lernen, statt zu lernen</em>), zmienia się tylko znaczenie."
      }
    ],
    grammar: {
      title: "ohne ... zu, statt ... zu, ohne dass, anstatt dass",
      note: "<b>Ten sam podmiot</b>: ohne / statt / anstatt + ... + <b>zu</b> + bezokolicznik na końcu. <b>Inny podmiot</b>: ohne dass / anstatt dass + czasownik osobowy na końcu, zwykle w trybie oznajmującym.",
      table: {
        head: ["", "ten sam podmiot", "inny podmiot"],
        rows: [
          ["bez", "Er ging, ohne sich zu verabschieden.", "Er ging, ohne dass ich es merkte."],
          ["zamiast", "Statt zu warten, rief sie an.", "Anstatt dass du alles allein machst, helfen wir dir."],
          ["czasownik rozdzielny", "..., ohne nachzudenken.", "..., ohne dass er nachdachte."]
        ]
      },
      examples: [
        { tr: "Wyszedł, nie żegnając się.", note: "ohne ... zu: ten sam podmiot" },
        { tr: "Zamiast czekać, od razu zadzwoniła.", note: "statt ... zu na początku, potem czasownik zdania głównego" },
        { tr: "Podpisała, nie czytając umowy.", note: "zu + bezokolicznik po wszystkich dopełnieniach" },
        { tr: "Zamiast się uczyć, ogląda telewizję.", note: "anstatt ... zu; fernsehen jest rozdzielny" },
        { tr: "Wyszedł, a ja tego nie zauważyłem.", note: "ohne dass: inny podmiot, zwykle tryb oznajmujący" },
        { tr: "Zamiast pomóc, tylko się przyglądasz.", note: "anstatt dass: możliwe też przy tym samym podmiocie" }
      ]
    },
    vocab: [
      "umowa",
      "pozwolenie",
      "pożegnanie",
      "plan",
      "podpis",
      "podpisać",
      "pożegnać się",
      "przyglądać się",
      "zastanowić się (über + biernik: nad)",
      "zauważyć",
      "po prostu",
      "potajemnie"
    ],
    exercises: [
      {
        q: "Jak powiesz „Wyszedł, nie żegnając się”?",
        opts: [
          "Er ging, ohne sich zu verabschieden.",
          "Er ging, ohne zu verabschieden sich.",
          "Er ging, ohne sich verabschieden."
        ],
        why: "<b>ohne ... zu</b> + bezokolicznik na końcu: <i>ohne sich zu verabschieden</i>. Zaimek zwrotny stoi przed <i>zu</i>, a <i>zu</i> nie można pominąć."
      },
      {
        q: "Jak powiesz „Wyszedł, a ja tego nie zauważyłem”?",
        opts: [
          "Er ging, ohne dass ich es merkte.",
          "Er ging, ohne mich es zu merken.",
          "Er ging, ohne dass ich es merken."
        ],
        why: "Podmioty są różne (<i>er</i>, <i>ich</i>), więc potrzeba <b>ohne dass</b> z czasownikiem osobowym na końcu: <i>merkte</i>."
      },
      {
        q: "Uzupełnij: „Sie hat unterschrieben, ohne den Vertrag ___ lesen.”",
        hint: "partykuła bezokolicznika",
        why: "<b>zu</b>: <i>ohne ... zu lesen</i>, z <i>zu</i> tuż przed bezokolicznikiem na końcu."
      },
      {
        q: "Uzupełnij czasownikiem nachdenken: „Sie antwortete, ohne ___.”",
        hint: "czasownik rozdzielny z zu",
        why: "<b>nachzudenken</b>: przy czasowniku rozdzielnym <i>zu</i> wchodzi między partykułę <i>nach</i> a czasownik, w jednym słowie."
      },
      {
        q: "Uzupełnij: „___ du hilfst, schaust du nur zu.” (zamiast)",
        hint: "wyrażony podmiot: dwa słowa",
        why: "<b>Anstatt dass</b> (albo <i>Statt dass</i>): zdanie ma własny podmiot (<i>du hilfst</i>), więc nie bezokolicznik, tylko <i>dass</i> z czasownikiem na końcu."
      },
      {
        q: "Uzupełnij zdanie.",
        tr: "Zamiast czekać, od razu zadzwoniła.",
        why: "<i>Statt zu warten, rief sie sofort an</i>: zdanie bezokolicznikowe zajmuje pierwsze miejsce, więc zaraz po nim idzie czasownik <i>rief</i>; partykuła <i>an</i> na końcu."
      },
      {
        q: "Ułóż słowa we właściwej kolejności.",
        tr: "Zamiast się uczyć, cały dzień ogląda telewizję.",
        why: "<i>Anstatt zu lernen, sieht er den ganzen Tag fern.</i> Zdanie z <i>anstatt</i> na początku, czasownik <i>sieht</i> zaraz po nim, partykuła <i>fern</i> na końcu."
      },
      {
        q: "Przetłumacz: „Podpisał umowę, nie czytając jej.”",
        why: "<i>Er hat den Vertrag unterschrieben, ohne ihn zu lesen</i>. Pasuje też Präteritum <i>unterschrieb</i> albo <i>ohne ihn gelesen zu haben</i>. <i>Vertrag</i> jest rodzaju męskiego, więc zaimek to <i>ihn</i>, choć po polsku <i>jej</i>."
      },
      {
        tr: "Po prostu złożył wypowiedzenie, nie rozmawiając o tym z nikim. Zamiast zapytać, od razu zdecydował.",
        why: "W <i>gekündigt</i> <b>ü</b> jest krótkie i zaokrąglone; w <i>jemandem</i> <b>j</b> to polskie <i>j</i>; w <i>entschieden</i> <b>ie</b> jest długie."
      },
      {
        tr: "Zamiast czekać, powinniśmy od razu zadzwonić.",
        why: "W <i>anstatt</i> akcent pada na <b>statt</b>; w <i>sollten</i> <b>o</b> jest krótkie; w <i>sofort</i> akcent pada na <b>fort</b>."
      }
    ]
  },
  "lesson:b2-u03-test": {
    theme: "Sprawdzian",
    title: "Test: Strona bierna i czas opowiadania",
    objectives: [
      "sprawdzić stronę bierną w Perfekcie i z modalnymi, Präteritum w opowiadaniu i ohne ... zu"
    ],
    theory: [
      {
        p: "Dziesięć pytań z całej jednostki. Zaliczenie od 70%. Nie zaglądaj do lekcji, kiedy odpowiadasz: jeśli czegoś nie pamiętasz, lepiej wrócić i powtórzyć."
      }
    ],
    exercises: [
      {
        tr: "Präteritum czasownika finden, wszystkie osoby.",
        why: "<i>fand, fandest, fand, fanden, fandet, fanden</i>: po <i>d</i> wstawia się <i>e</i> przed <i>-st</i> i <i>-t</i>."
      },
      {
        q: "Uzupełnij: „Das Museum ist 1910 eröffnet ___.”",
        hint: "strona bierna w Perfekcie",
        why: "<b>worden</b>: <i>ist eröffnet worden</i>, strona bierna w Perfekcie."
      },
      {
        q: "Uzupełnij: „Der Antrag muss bis Montag abgegeben ___.”",
        hint: "bezokolicznik strony biernej po modalnym",
        why: "<b>werden</b>: modalny + imiesłów + <i>werden</i>."
      },
      {
        q: "Uzupełnij w Präteritum: „Plötzlich ___ sie ein Geräusch.” (hören)",
        hint: "czasownik słaby, sie (ona)",
        why: "<b>hörte</b>: czasownik słaby, <i>hör-</i> + <i>-te</i>."
      },
      {
        q: "Uzupełnij: „Er ging, ohne ein Wort ___ sagen.”",
        hint: "partykuła bezokolicznika",
        why: "<b>zu</b>: <i>ohne ein Wort zu sagen</i>."
      },
      {
        q: "Jak powiesz „Most został zamknięty już wcześniej” (w opowiadaniu o przeszłości)?",
        opts: [
          "Die Brücke war schon gesperrt worden.",
          "Die Brücke ist schon gesperrt geworden.",
          "Die Brücke hatte schon gesperrt worden."
        ],
        why: "Plusquamperfekt strony biernej bez modalnego tworzy się z <b>war</b> + imiesłów + <b>worden</b>, nie z <i>hatte</i>."
      },
      {
        q: "Które zdanie jest poprawne?",
        opts: [
          "Statt dass du hilfst, schaust du zu.",
          "Statt zu du hilfst, schaust du zu.",
          "Statt dass du helfen, schaust du zu."
        ],
        why: "Przy wyrażonym podmiocie potrzeba <b>statt dass</b> + czasownik osobowy na końcu: <i>du hilfst</i>."
      },
      {
        q: "Przetłumacz: „List został napisany wczoraj.”",
        why: "<i>Der Brief ist gestern geschrieben worden</i> albo w Präteritum <i>Der Brief wurde gestern geschrieben</i>."
      },
      {
        tr: "Zamek zbudowano w osiemnastym wieku. Później kilka razy go przebudowywano, a jego charakter się nie zmienił.",
        why: "W <i>Schloss</i> <b>o</b> jest krótkie; w <i>achtzehnten</i> <b>ch</b> to twarde polskie <i>ch</i>, a <b>z</b> to polskie <i>c</i>; w <i>Charakter</i> początkowe <b>Ch</b> czyta się jak <i>k</i>."
      },
      {
        tr: "Zamiast długo dyskutować, po prostu rozwiązaliśmy problem.",
        why: "W <i>diskutieren</i> akcent pada na <b>tie</b>; w <i>Problem</i> akcent pada na <b>blem</b>; w <i>gelöst</i> <b>ö</b> jest długie."
      }
    ]
  }
});
