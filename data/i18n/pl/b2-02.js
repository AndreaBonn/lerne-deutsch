/* ============================================================
   Learner-language text (pl) for data/core/b2-02.js, unit b2-u05.
   Keys point at ids in the neutral layer; arrays merge by index,
   so their length has to match core.
   Checked by scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("pl", {
  "unit:b2-u05": {
    title: "Powiedziała, że jest chora",
    grammarNote: "Konjunktiv I w mowie zależnej (er sei, er habe, er werde) · Konjunktiv II jako zastępstwo (sie hätten) · zmiany czasu, miejsca i osoby · pytania zależne z ob i z zaimkiem pytającym · polecenia zależne z sollen"
  },
  "lesson:b2-u05-l1": {
    theme: "Wiadomości i zeznania świadków",
    title: "Od mowy niezależnej do zależnej",
    objectives: [
      "rozpoznawać i tworzyć Konjunktiv I w trzeciej osobie",
      "przytaczać cudze słowa z dystansem, jak w prasie",
      "zastępować Konjunktiv I formą Konjunktiv II, gdy brzmi jak tryb oznajmujący",
      "używać czasowników takich jak behaupten, erklären, betonen"
    ],
    theory: [
      {
        h: "Konjunktiv I",
        p: "Gazety, protokoły i raporty przytaczają cudze słowa w <strong>Konjunktiv I</strong>: piszący zaznacza, że to wersja tej osoby. Tworzy się go od <strong>tematu bezokolicznika</strong> + <em>-e</em> i używa głównie w trzeciej osobie liczby pojedynczej, gdzie różni się od trybu oznajmującego: <em>er habe, er komme, er wisse, er könne, er werde</em>. <em>sein</em> jest nieregularne: <em>er sei, sie seien</em>. <em>Der Minister sagte, er sei mit dem Ergebnis zufrieden.</em>"
      },
      {
        h: "Przeszłość i zastępstwo",
        p: "Przeszłość tworzy się z <strong>habe</strong> albo <strong>sei</strong> + imiesłów: <em>Die Zeugin erklärte, sie habe nichts gesehen. Laut Polizei sei der Fahrer zu schnell gefahren.</em> Przyszłość z <strong>werde</strong> + bezokolicznik: <em>Die Firma werde keine Stellen streichen.</em> Gdy Konjunktiv I brzmi tak samo jak tryb oznajmujący, zwłaszcza w liczbie mnogiej (<em>sie haben</em>), używa się <strong>Konjunktiv II</strong>: <em>Sie sagten, sie hätten keine Zeit.</em>"
      },
      {
        contrast: "Po polsku mowa zależna nie zmienia ani czasu, ani trybu: <em>„Jestem chora”</em> → <em>powiedziała, że jest chora</em>. Niemiecki też zachowuje czas, ale w tekstach pisanych zmienia tryb: <em>sie sagte, sie sei krank</em>. Polszczyzna, żeby zaznaczyć, że to cudza relacja, sięga po słowa: <em>podobno</em>, <em>rzekomo</em>, <em>według policji</em>. Niemiecki może to zrobić samą formą czasownika: <em>Laut Polizei sei der Fahrer zu schnell gefahren</em>, „według policji kierowca jechał za szybko”."
      },
      {
        trap: "Konjunktiv I nie wyraża wątpliwości: zaznacza tylko, że słowa należą do kogoś innego. W mowie potocznej jest rzadki: <em>Er hat gesagt, er ist krank</em> to normalne zdanie w rozmowie. W piśmie Konjunktiv I wyraźnie przypisuje wypowiedź źródłu; tryb oznajmujący też jest możliwy, zwłaszcza z <em>dass</em> i podanym źródłem, i nie musi znaczyć, że piszący ręczy za to, co zostało powiedziane."
      },
      {
        tip: "Przy czasownikach na <em>-en</em> trzecią osobę liczby pojedynczej Konjunktiv I dostajesz, odcinając <em>-n</em> z bezokolicznika: <em>haben → habe, kommen → komme, wissen → wisse, können → könne</em>. Wyjątki to <em>sein → sei</em> oraz czasowniki na <em>-eln</em> i typu <em>tun</em> (<em>er handle, er tue</em>)."
      }
    ],
    grammar: {
      title: "Konjunktiv I w mowie zależnej",
      note: "<b>Teraźniejszość</b>: temat + <i>-e</i> (er habe, er komme; er sei). <b>Przeszłość</b>: habe / sei + imiesłów. <b>Przyszłość</b>: werde + bezokolicznik. Gdy brzmi jak tryb oznajmujący: <b>Konjunktiv II</b> (sie hätten).",
      table: {
        head: ["bezokolicznik", "tryb oznajmujący (er)", "Konjunktiv I (er)", "Konjunktiv I (sie, l. mn.)", "zastępstwo"],
        rows: [
          ["sein", "er ist", "er sei", "sie seien", "-"],
          ["haben", "er hat", "er habe", "sie haben", "sie hätten"],
          ["werden", "er wird", "er werde", "sie werden", "sie würden"],
          ["wissen", "er weiß", "er wisse", "sie wissen", "sie wüssten"],
          ["können", "er kann", "er könne", "sie können", "sie könnten"]
        ]
      },
      examples: [
        { tr: "Minister powiedział, że jest zadowolony z wyniku.", note: "er sei: Konjunktiv I od sein" },
        { tr: "Świadek (kobieta) zeznała, że nic nie widziała.", note: "przeszłość: habe + imiesłów" },
        { tr: "Według policji kierowca jechał za szybko.", note: "laut + Konjunktiv I: informacja przypisana policji" },
        { tr: "Rzecznik podkreślił, że firma nie będzie likwidować etatów.", note: "przyszłość: werde + bezokolicznik" },
        { tr: "Powiedzieli, że nie mają czasu.", note: "sie haben brzmi jak tryb oznajmujący: hätten" },
        { tr: "Twierdzi, że o niczym nie wie.", note: "er wisse: Konjunktiv I od wissen" }
      ]
    },
    vocab: [
      "zeznanie, wypowiedź",
      "świadek (mężczyzna)",
      "świadek (kobieta)",
      "rzecznik",
      "wiadomość, komunikat",
      "raport, relacja",
      "twierdzić",
      "oświadczać, wyjaśniać",
      "podkreślać",
      "relacjonować, informować (über + biernik: o)",
      "według (+ celownik albo dopełniacz)",
      "podobno, rzekomo (jako przymiotnik: die angebliche Krankheit, rzekoma choroba)"
    ],
    exercises: [
      {
        q: "Jak gazeta przytoczy „Jestem chora”, powiedziane przez nią?",
        opts: [
          "Sie sagte, sie sei krank.",
          "Sie sagte, sie wäre krank gewesen.",
          "Sie sagte, sie seien krank."
        ],
        why: "Konjunktiv I od <i>sein</i>, trzecia osoba liczby pojedynczej: <b>sie sei</b>. Czas się nie zmienia: <i>wäre krank gewesen</i> mówiłoby o przeszłości, <i>seien</i> to liczba mnoga."
      },
      {
        q: "Jaki jest Konjunktiv I od haben w trzeciej osobie liczby pojedynczej?",
        opts: [
          "er habe",
          "er hat",
          "er hatte"
        ],
        why: "Temat bezokolicznika <i>hab-</i> + <i>-e</i>: <b>er habe</b>. <i>hat</i> to czas teraźniejszy trybu oznajmującego, <i>hatte</i> to Präteritum."
      },
      {
        q: "Uzupełnij w stylu prasowym formą, która zastępuje Konjunktiv I: „Sie sagten, sie ___ keine Zeit.”",
        opts: [
          "hätten",
          "haben",
          "hatten"
        ],
        why: "Konjunktiv I <i>sie haben</i> brzmi jak tryb oznajmujący, więc używa się Konjunktiv II: <b>hätten</b>. <i>hatten</i> to Präteritum."
      },
      {
        q: "Uzupełnij: „Der Minister sagte, er ___ zufrieden.”",
        hint: "Konjunktiv I od sein, er",
        why: "<b>sei</b>: Konjunktiv I od <i>sein</i>, typowa forma prasowa."
      },
      {
        q: "Uzupełnij: „Die Zeugin erklärte, sie ___ nichts gesehen.”",
        hint: "Konjunktiv I od haben, sie (ona)",
        why: "<b>habe</b>: przeszłość w Konjunktiv I tworzy się z <i>habe</i> + imiesłów."
      },
      {
        q: "Uzupełnij zdanie.",
        tr: "Twierdzi, że o niczym nie wie.",
        why: "<i>Er behauptet, er wisse von nichts</i>: <i>wisse</i> to Konjunktiv I od <i>wissen</i>; <i>von nichts wissen</i> znaczy „nic o tym nie wiedzieć”."
      },
      {
        q: "Połącz każdy czasownik z jego znaczeniem.",
        pairs: [
          "twierdzić",
          "podkreślać",
          "relacjonować, informować",
          "oświadczać, wyjaśniać"
        ]
      },
      {
        q: "Ułóż wyrazy we właściwej kolejności.",
        tr: "Według policji kierowca jechał za szybko.",
        why: "<i>Laut Polizei sei der Fahrer zu schnell gefahren.</i> <i>Laut Polizei</i> zajmuje pierwsze miejsce, potem czasownik <i>sei</i>, imiesłów <i>gefahren</i> na końcu."
      },
      {
        q: "Przetłumacz do artykułu: „Rzecznik powiedział, że firma nie będzie likwidować etatów.” (Stellen streichen)",
        why: "<i>Der Sprecher sagte, die Firma werde keine Stellen streichen</i>: przyszłość w Konjunktiv I z <i>werde</i>. Z <i>dass</i> czasownik idzie na koniec: <i>..., dass die Firma keine Stellen streichen werde</i>."
      },
      {
        tr: "Policja poinformowała, że do wypadku doszło około ósmej. Świadek relacjonował, że kierowca nie hamował.",
        why: "W <i>teilte ... mit</i> partykuła idzie na koniec; w <i>Zeuge</i> <b>Z</b> to [ts], a <b>eu</b> to [ɔʏ]; w <i>gebremst</i> przedrostek <b>ge-</b> jest nieakcentowany."
      },
      {
        tr: "Rzeczniczka oświadczyła, że problem został już rozwiązany.",
        why: "W <i>Sprecherin</i> początkowe <b>sp</b> to [ʃp]; w <i>inzwischen</i> <b>z</b> to [ts], a <b>sch</b> to [ʃ]; w <i>gelöst</i> <b>ö</b> jest długie."
      }
    ]
  },
  "lesson:b2-u05-l2": {
    theme: "Protokoły i konferencje prasowe",
    title: "Czas, miejsce, osoba",
    objectives: [
      "zmieniać osobę, czas i miejsce w mowie zależnej",
      "zachowywać w Konjunktiv I relację czasową mowy niezależnej",
      "używać am Tag davor, am nächsten Tag, dort",
      "relacjonować konferencję prasową albo wywiad"
    ],
    theory: [
      {
        h: "Co się zmienia",
        p: "Kiedy przytaczasz cudze słowa w innym czasie albo w innym miejscu, zmienia się <strong>osoba</strong> (<em>ich → er/sie, mein → sein/ihr</em>), określenia <strong>czasu</strong> (<em>heute → an diesem Tag, morgen → am nächsten Tag / am folgenden Tag, gestern → am Tag davor / am Vortag, nächste Woche → in der folgenden Woche</em>) i <strong>miejsca</strong> (<em>hier → dort</em>). Jeśli relacjonujesz tego samego dnia albo w tym samym miejscu, <em>heute</em> czy <em>hier</em> mogą zostać. „Ich komme morgen.“ → <em>Er sagte, er komme am nächsten Tag.</em> „Das ist mein Auto.“ → <em>Er sagte, das sei sein Auto.</em>"
      },
      {
        h: "Co się nie zmienia",
        p: "Zachowuje się <strong>relacja czasowa</strong> mowy niezależnej: teraźniejszość zostaje teraźniejszością, przyszłość przyszłością, a każda forma przeszła (Präteritum, Perfekt, Plusquamperfekt) daje jedną formę przeszłą Konjunktiv I: <em>habe</em> / <em>sei</em> + imiesłów. Teraźniejszy → Konjunktiv I teraźniejszy („Ich kenne ihn nicht.“ → <em>sie kenne ihn nicht</em>); przeszły → Konjunktiv I przeszły („Ich war gestern hier.“ → <em>sie sei am Tag davor dort gewesen</em>); przyszły → <em>werde</em> + bezokolicznik („Ich werde anrufen.“ → <em>er werde anrufen</em>)."
      },
      {
        contrast: "Tu niemiecki jest bliski polskiemu: po polsku też nie przesuwa się czasu (<em>„Znam go”</em> → <em>powiedziała, że go zna</em>; <em>„Zadzwonię”</em> → <em>powiedział, że zadzwoni</em>), a zmiany osoby, czasu i miejsca są takie same (<em>wczoraj → poprzedniego dnia</em>, <em>tutaj → tam</em>). Różnica jest jedna: w niemieckim tekście pisanym czasownik przechodzi w Konjunktiv I: <em>sie kenne</em>, <em>er werde anrufen</em>."
      },
      {
        trap: "Przytoczona przyszłość to <em>er werde anrufen</em>. W liczbie mnogiej <em>sie werden</em> brzmi jak tryb oznajmujący, więc zastępuje się je formą <em>sie würden anrufen</em>; to nadal relacja „że zadzwonią”, a nie polskie „zadzwoniliby”. A <em>poprzedniego dnia</em> to <em>am Tag davor</em> albo <em>am Vortag</em>, nie <em>der Tag vorher</em> jako okolicznik czasu."
      },
      {
        tip: "Zanim przytoczysz zdanie, podkreśl w mowie niezależnej zaimki i słowa czasu i miejsca: tylko one się zmieniają, poza trybem czasownika."
      }
    ],
    grammar: {
      title: "Zmiany w mowie zależnej",
      note: "Zmienia się <b>osoba</b>, a jeśli relacjonujący mówi w innym czasie albo miejscu, także określenia <b>czasu</b> i <b>miejsca</b>; zachowuje się <b>relacja czasowa</b>: teraźniejszość → Konjunktiv I teraźniejszy, każda przeszłość → habe / sei + imiesłów, przyszłość → werde + bezokolicznik.",
      table: {
        head: ["mowa niezależna", "mowa zależna"],
        rows: [
          ["heute", "an diesem Tag"],
          ["morgen", "am nächsten Tag, am folgenden Tag"],
          ["gestern", "am Tag davor, am Vortag"],
          ["nächste Woche", "in der folgenden Woche"],
          ["hier", "dort"]
        ]
      },
      examples: [
        { tr: "Powiedział, że przyjdzie następnego dnia.", note: "„Ich komme morgen.“: teraźniejszy → Konjunktiv I teraźniejszy" },
        { tr: "Powiedziała, że była tam poprzedniego dnia.", note: "„Ich war gestern hier.“: przeszły → sei ... gewesen" },
        { tr: "Powiedzieli, że tego dnia nie mają czasu.", note: "„Wir haben heute keine Zeit.“: hätten zamiast haben" },
        { tr: "Powiedział, że zadzwoni w następnym tygodniu.", note: "„Ich werde nächste Woche anrufen.“: werde + bezokolicznik" },
        { tr: "Powiedział, że to jego samochód.", note: "mein → sein" },
        { tr: "Powiedziała, że go nie zna.", note: "„Ich kenne ihn nicht.“: kenne" }
      ]
    },
    vocab: [
      "poprzedni dzień, dzień wcześniej",
      "komunikat, zawiadomienie",
      "protokół",
      "konferencja prasowa",
      "wywiad",
      "źródło",
      "zawiadamiać, podawać do wiadomości",
      "zapewniać",
      "cytować",
      "przytaczać, oddawać (czyjeś słowa)",
      "następny, kolejny",
      "tymczasem, już (w międzyczasie)"
    ],
    exercises: [
      {
        q: "Tydzień później przytaczasz „Ich komme morgen” (on). Które zdanie oddaje to w Konjunktiv I?",
        opts: [
          "Er sagte, er komme am nächsten Tag.",
          "Er sagte, ich komme am nächsten Tag.",
          "Er sagte, er kam am nächsten Tag."
        ],
        why: "Zmienia się osoba (<i>ich → er</i>) i czas (<i>morgen → am nächsten Tag</i>); czasownik przyjmuje Konjunktiv I teraźniejszy: <b>komme</b>. <i>kam</i> to Präteritum trybu oznajmującego, nie Konjunktiv I."
      },
      {
        q: "Kilka dni później, w innym mieście, przytaczasz „Ich war gestern hier” (ona). Które zdanie jest poprawne?",
        opts: [
          "Sie sagte, sie sei am Tag davor dort gewesen.",
          "Sie sagte, sie war gestern hier.",
          "Sie sagte, sie sei am Tag davor hier."
        ],
        why: "Przeszłość → <b>sei ... gewesen</b>; <i>gestern → am Tag davor</i>, <i>hier → dort</i>. Trzecie zdanie zgubiło przeszłość."
      },
      {
        q: "Jak przytoczysz „Das ist mein Auto” (on)?",
        opts: [
          "Er sagte, das sei sein Auto.",
          "Er sagte, das sei mein Auto.",
          "Er sagte, das ist sein Auto sei."
        ],
        why: "Zaimek dzierżawczy zmienia się z osobą: <i>mein → sein</i>; czasownik przechodzi w Konjunktiv I: <b>sei</b>."
      },
      {
        q: "„Ich kenne ihn nicht.“ → „Sie sagte, sie ___ ihn nicht.”",
        hint: "Konjunktiv I od kennen, sie (ona)",
        why: "<b>kenne</b>: temat <i>kenn-</i> + <i>-e</i>. Czas zostaje teraźniejszy, tak jak w polskim „że go nie zna”."
      },
      {
        q: "Przytoczone kilka dni później: „Wir haben heute keine Zeit.“ → „Sie sagten, sie ___ an diesem Tag keine Zeit.”",
        hint: "liczba mnoga: Konjunktiv I brzmi jak tryb oznajmujący",
        why: "<b>hätten</b>: <i>sie haben</i> brzmiałoby jak tryb oznajmujący, więc Konjunktiv II. I <i>heute → an diesem Tag</i>."
      },
      {
        q: "Uzupełnij zdanie.",
        tr: "„Ich werde nächste Woche anrufen.“ → Powiedział, że zadzwoni w następnym tygodniu.",
        why: "<i>Er sagte, er werde in der folgenden Woche anrufen</i>: przytoczona przyszłość to <i>werde</i> + bezokolicznik, nie tryb przypuszczający."
      },
      {
        q: "Które zdania poprawnie oddają w stylu prasowym „Ich bin müde”, powiedziane przez nią?",
        opts: [
          "Sie sagte, sie sei müde.",
          "Sie sagte, dass sie müde sei.",
          "Sie sagte, ich sei müde.",
          "Sie sagte, dass sie sei müde."
        ],
        why: "Dwa pierwsze są poprawne: bez <i>dass</i> czasownik stoi na drugim miejscu, z <i>dass</i> na końcu. Trzecie nie zmienia osoby, czwarte nie przesuwa czasownika na koniec po <i>dass</i>."
      },
      {
        q: "Ułóż wyrazy we właściwej kolejności.",
        tr: "Powiedziała, że była tam poprzedniego dnia.",
        why: "<i>Sie sagte, sie sei am Tag davor dort gewesen.</i> <i>sei</i> na drugim miejscu, imiesłów <i>gewesen</i> na końcu."
      },
      {
        q: "Przetłumacz w stylu prasowym: „(On) powiedział, że poprzedniego dnia widział ten film.”",
        why: "<i>Er sagte, er habe den Film am Tag davor gesehen</i> (albo <i>am Vortag</i>): przeszłość w Konjunktiv I."
      },
      {
        tr: "Na konferencji prasowej burmistrzyni poinformowała, że most zostanie ponownie otwarty w następny poniedziałek. Zapewniła, że wszystkie prace zostały już zakończone.",
        why: "W <i>Bürgermeisterin</i> akcent pada na <b>Bür</b>; w <i>versicherte</i> <b>v</b> brzmi [f]; w <i>abgeschlossen</i> <b>b</b> przed <i>g</i> brzmi [p]."
      },
      {
        tr: "Minister zapewnił, że nic nie wiedział o problemie.",
        why: "W <i>Minister</i> akcent pada na <b>nis</b>; w <i>Problem</i> na <b>blem</b>; w <i>gewusst</i> <b>u</b> jest krótkie."
      }
    ]
  },
  "lesson:b2-u05-l3": {
    theme: "Przytaczane pytania i polecenia",
    title: "Zapytał, czy...; powiedziała, żebym...",
    objectives: [
      "przytaczać pytanie rozstrzygające z ob",
      "przytaczać pytanie otwarte z zaimkiem pytającym",
      "przytaczać polecenie z sollen",
      "przytaczać uprzejmą prośbę z jemanden bitten, etwas zu tun"
    ],
    theory: [
      {
        h: "Pytania zależne",
        p: "Pytanie <strong>rozstrzygające</strong> (tak albo nie) przytacza się z <strong>ob</strong> i czasownikiem na końcu: „Hast du Zeit?“ → <em>Er fragte, ob ich Zeit hätte.</em> Pytanie <strong>otwarte</strong> zachowuje zaimek pytający, a czasownik także idzie na koniec: „Wann fährt der Zug?“ → <em>Sie fragte, wann der Zug fahre.</em> Poza <em>fragen</em> używa się <em>wissen wollen</em> i <em>sich erkundigen</em>: <em>Sie wollte wissen, ob ich mitkäme.</em>"
      },
      {
        h: "Polecenia i prośby zależne",
        p: "Polecenie przytacza się z <strong>sollen</strong> w Konjunktiv I: „Warte hier!“ → <em>Sie sagte, ich solle hier warten.</em> <em>Der Arzt sagte, ich solle mehr schlafen.</em> Możliwy jest też bezokolicznik z osobą jako dopełnieniem: <em>Sie sagte mir, hier zu warten.</em> Uprzejmą prośbę oddaje się często przez <strong>jemanden bitten</strong> albo <strong>jemanden auffordern</strong>, <em>etwas zu tun</em>: „Rufen Sie mich bitte an!“ → <em>Er bat mich, ihn anzurufen.</em> <em>Er forderte mich auf, zu warten.</em>"
      },
      {
        contrast: "Po polsku pytanie zależne wprowadza <em>czy</em> (<em>zapytał, czy mam czas</em>), a polecenie <em>żeby</em> z formą czasu przeszłego (<em>powiedziała, żebym poczekał</em>). Niemieckie <em>ob</em> odpowiada <em>czy</em>, ale czasownik idzie na koniec, w Konjunktiv (<em>ob ich Zeit hätte</em>). Odpowiednika <em>żebym</em> nie ma: polecenie oddaje czasownik <em>sollen</em> (<em>Sie sagte, ich solle warten</em>, albo <em>dass ich warten solle</em>)."
      },
      {
        trap: "<em>ob</em> to nie <em>dass</em>: <em>Er fragte, dass ich Zeit hätte</em> nie ma sensu, tak jak „zapytał, że mam czas”. A po <em>ob</em> albo zaimku pytającym czasownik idzie na koniec, nie na drugie miejsce jak w pytaniu niezależnym: <em>wann der Zug fahre</em>, nie <em>wann fährt der Zug</em>."
      },
      {
        tip: "W mowie potocznej w pytaniach zależnych często wystarcza tryb oznajmujący (<em>Er hat gefragt, ob ich Zeit habe</em>); Konjunktiv to forma tekstów pisanych i relacji."
      }
    ],
    grammar: {
      title: "Pytania i polecenia w mowie zależnej",
      note: "<b>Pytanie rozstrzygające</b>: ob + czasownik na końcu. <b>Pytanie otwarte</b>: zaimek pytający + czasownik na końcu. <b>Polecenie</b>: sollen w Konjunktiv I. <b>Prośba</b>: jemanden bitten / jemanden auffordern, etwas zu tun (Er bat mich, ihn anzurufen. Er forderte mich auf, zu warten.).",
      table: {
        head: ["mowa niezależna", "mowa zależna"],
        rows: [
          ["„Hast du Zeit?“", "Er fragte, ob ich Zeit hätte."],
          ["„Wann fährt der Zug?“", "Sie fragte, wann der Zug fahre."],
          ["„Warte hier!“", "Sie sagte, ich solle hier warten."],
          ["„Rufen Sie mich bitte an!“", "Er bat mich, ihn anzurufen."]
        ]
      },
      examples: [
        { tr: "Zapytał mnie, czy mam czas.", note: "ob + czasownik na końcu, Konjunktiv II zamiast ich habe" },
        { tr: "Zapytała, o której odjeżdża pociąg.", note: "zaimek pytający + fahre" },
        { tr: "Powiedziała, żebym tu poczekał.", note: "polecenie: ich solle" },
        { tr: "Poprosił mnie, żebym do niego zadzwonił.", note: "bitten + zu + bezokolicznik" },
        { tr: "Chciała wiedzieć, czy pójdę z nimi.", note: "wissen wollen, ob ..." },
        { tr: "Lekarz powiedział, żebym więcej spał.", note: "rada przytoczona z sollen" }
      ]
    },
    vocab: [
      "prośba",
      "polecenie, instrukcja",
      "rozkaz",
      "informacja (Auskunft geben: udzielić informacji)",
      "przesłuchanie",
      "wzywać (kogoś do czegoś)",
      "prosić (um + biernik: o coś)",
      "dowiadywać się (nach + celownik: o)",
      "chcieć wiedzieć",
      "żądać, domagać się",
      "wyraźnie, wyraźnie zaznaczając",
      "pilnie"
    ],
    exercises: [
      {
        q: "Jak przytoczysz „Hast du Zeit?” (on do mnie)?",
        opts: [
          "Er fragte, ob ich Zeit hätte.",
          "Er fragte, dass ich Zeit hätte.",
          "Er fragte, ob hätte ich Zeit."
        ],
        why: "Pytanie rozstrzygające: <b>ob</b> + czasownik na końcu. <i>dass</i> nie wprowadza pytań, a po <i>ob</i> czasownik musi iść na koniec, nie zaraz za nim."
      },
      {
        q: "Jak przytoczysz „Warte hier!” (ona do mnie)?",
        opts: [
          "Sie sagte, ich solle hier warten.",
          "Sie sagte, ich warte hier.",
          "Sie sagte, warte ich hier."
        ],
        why: "Przytoczone polecenie oddaje <b>sollen</b> w Konjunktiv I: <i>ich solle ... warten</i>, tam gdzie po polsku jest <i>żebym poczekał</i>."
      },
      {
        q: "Jak przytoczysz „Wann fährt der Zug?” (ona)?",
        opts: [
          "Sie fragte, wann der Zug fahre.",
          "Sie fragte, wann fährt der Zug.",
          "Sie fragte, ob wann der Zug fahre."
        ],
        why: "Zaimek pytający zostaje, a czasownik idzie na koniec: <b>wann der Zug fahre</b>. Nie dodaje się <i>ob</i>."
      },
      {
        q: "Uzupełnij: „Er fragte, ___ ich mitkommen wolle.”",
        hint: "pytanie zależne rozstrzygające",
        why: "<b>ob</b>: wprowadza pytanie zależne rozstrzygające i przesuwa czasownik na koniec, jak polskie <i>czy</i>."
      },
      {
        q: "Uzupełnij: „Der Arzt sagte, ich ___ mehr schlafen.”",
        hint: "sollen w Konjunktiv I, ich",
        why: "<b>solle</b>: Konjunktiv I od <i>sollen</i>, który tu różni się od trybu oznajmującego <i>ich soll</i>."
      },
      {
        q: "Uzupełnij zdanie.",
        tr: "„Proszę do mnie zadzwonić!” → Poprosił mnie, żebym do niego zadzwonił.",
        why: "<i>Er bat mich, ihn anzurufen</i>: <i>bat</i> to Präteritum od <i>bitten</i>; przy czasowniku rozdzielnym <i>zu</i> stoi między partykułą a czasownikiem."
      },
      {
        q: "Połącz każdy czasownik z jego znaczeniem.",
        pairs: [
          "prosić",
          "wzywać (kogoś do czegoś)",
          "dowiadywać się",
          "żądać, domagać się"
        ]
      },
      {
        q: "Ułóż wyrazy we właściwej kolejności.",
        tr: "Chciała wiedzieć, czy jutro mam czas.",
        why: "<i>Sie wollte wissen, ob ich morgen Zeit hätte.</i> Po <i>ob</i> czasownik <i>hätte</i> zamyka zdanie."
      },
      {
        q: "Przetłumacz: „(Ona) zapytała mnie, gdzie mieszkam.”",
        why: "<i>Sie fragte mich, wo ich wohnte</i> albo <i>wo ich wohne</i>, też poprawnie. Konjunktiv I <i>ich wohne</i> brzmi jak tryb oznajmujący, a <i>wohnte</i> jak Präteritum: jeśli Konjunktiv ma być rozpoznawalny, użyj <i>wo ich wohnen würde</i>."
      },
      {
        tr: "Policjant zapytał mnie, czy widziałem wypadek. Potem wezwał mnie, żebym pokazał mu dowód osobisty.",
        why: "W <i>Polizist</i> akcent pada na <b>zist</b>; w <i>forderte ... auf</i> partykuła idzie na koniec; w <i>Ausweis</i> <b>au</b> to [aʊ], a <b>ei</b> to [aɪ]."
      },
      {
        tr: "Poprosiła mnie, żebym pilnie do niej oddzwonił.",
        why: "W <i>dringend</i> <b>ng</b> to [ŋ], a końcowe <b>d</b> brzmi [t]; w <i>zurückzurufen</i> drugie <i>zu</i> stoi między <i>zurück</i> a <i>rufen</i>."
      }
    ]
  },
  "lesson:b2-u05-test": {
    theme: "Sprawdzian",
    title: "Test: Powiedziała, że jest chora",
    objectives: [
      "sprawdzić Konjunktiv I, zmiany w mowie zależnej, ob i sollen"
    ],
    theory: [
      {
        p: "Dziesięć pytań z całej jednostki. Zaliczenie od 70%. Nie zaglądaj do lekcji w trakcie odpowiadania: jeśli czegoś nie pamiętasz, lepiej wrócić i powtórzyć."
      }
    ],
    exercises: [
      {
        q: "Uzupełnij: „Sie sagte, sie ___ keine Zeit.”",
        hint: "Konjunktiv I od haben, sie (ona)",
        why: "<b>habe</b>: w trzeciej osobie liczby pojedynczej Konjunktiv I różni się od trybu oznajmującego <i>hat</i>."
      },
      {
        q: "Uzupełnij: „Er erklärte, er ___ am Vortag in Berlin gewesen.”",
        hint: "Konjunktiv I od sein, er",
        why: "<b>sei</b>: przeszłość w Konjunktiv I z <i>sein</i> + <i>gewesen</i>."
      },
      {
        q: "Uzupełnij: „Sie fragte, ___ ich Hunger hätte.”",
        hint: "pytanie zależne rozstrzygające",
        why: "<b>ob</b>, z czasownikiem <i>hätte</i> na końcu."
      },
      {
        q: "Jaki jest Konjunktiv I od können w trzeciej osobie liczby pojedynczej?",
        opts: [
          "er könne",
          "er kann",
          "er könnte"
        ],
        why: "Temat bezokolicznika <i>könn-</i> + <i>-e</i>: <b>er könne</b>. <i>könnte</i> to Konjunktiv II."
      },
      {
        q: "Jak przytoczysz „Bring mir das Buch!” (on do mnie)?",
        opts: [
          "Er sagte, ich solle ihm das Buch bringen.",
          "Er sagte, ich bringe ihm das Buch.",
          "Er sagte, bring ihm das Buch."
        ],
        why: "Przytoczone polecenie: <b>sollen</b> w Konjunktiv I, a <i>mir</i> zmienia się w <i>ihm</i>."
      },
      {
        q: "Uzupełnij w stylu prasowym formą, która zastępuje Konjunktiv I: „Die Kinder sagten, sie ___ Hunger.”",
        opts: [
          "hätten",
          "haben",
          "habe"
        ],
        why: "W liczbie mnogiej <i>sie haben</i> brzmi jak tryb oznajmujący, więc używa się Konjunktiv II <b>hätten</b>. <i>habe</i> to liczba pojedyncza."
      },
      {
        q: "Które zdania poprawnie oddają w stylu prasowym „Ich kann nicht kommen”, powiedziane przez niego?",
        opts: [
          "Er sagte, er könne nicht kommen.",
          "Er sagte, dass er nicht kommen könne.",
          "Er sagte, er kann nicht kommen könne.",
          "Er sagte, ich könne nicht kommen."
        ],
        why: "Dwa pierwsze są poprawne. Trzecie miesza tryb oznajmujący z Konjunktiv, czwarte nie zmienia osoby."
      },
      {
        q: "Uzupełnij zdanie.",
        tr: "„Wczoraj wysłałam list.” (schicken) → Powiedziała, że poprzedniego dnia wysłała list.",
        why: "<i>Sie sagte, sie habe den Brief am Tag davor geschickt</i>: przeszłość w Konjunktiv I i <i>gestern → am Tag davor</i>."
      },
      {
        tr: "Rzeczniczka firmy oświadczyła, że klientów od razu poinformowano. Zapytana, czy są jeszcze inne problemy, odpowiedziała, że tego jeszcze nie może powiedzieć.",
        why: "W <i>Sprecherin</i> <b>sp</b> to [ʃp]; w <i>informiert</i> akcent pada na <b>miert</b>; w <i>weitere</i> <b>ei</b> to [aɪ]."
      },
      {
        tr: "Świadek powiedział, że nigdy wcześniej nie widział tego mężczyzny.",
        why: "W <i>Zeuge</i> <b>Z</b> to [ts]; w <i>zuvor</i> <b>v</b> brzmi [f]; w <i>gesehen</i> <b>h</b> jest nieme."
      }
    ]
  }
});
