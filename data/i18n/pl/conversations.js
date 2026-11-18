/* ============================================================
   Learner-language text (pl) for data/core/conversations.js
   Keys point at ids in the neutral layer; arrays merge by index,
   so their length has to match core.
   Checked by scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("pl", {
  "conv:cafe-bestellen": {
    title: "W kawiarni",
    setting: "Sobota rano, kawiarnia w Berlinie. Zamawiasz napój i może kawałek ciasta: jeden z twoich wyborów zmienia rachunek.",
    closing: "Rachunek się zgadzał: trzy euro bez ciasta, sześć z ciastem. Wybór widać na końcu.",
    turns: [
      { tr: "Dzień dobry! Co podać do picia?" },
      { task: "Wybierz, co zamówisz do picia.", opts: [
        { tr: "Poproszę kawę." },
        { tr: "Poproszę herbatę." }
      ] },
      { tr: "Kawa, oczywiście." },
      { tr: "Herbata, oczywiście." },
      { tr: "A jak się Pani nazywa?" },
      { task: "Powiedz, że nazywasz się Anna.", tr: "Nazywam się Anna." },
      { tr: "Dziękuję. Czy podać też kawałek ciasta?" },
      { task: "Zdecyduj, czy chcesz ciasto.", opts: [
        { tr: "Tak, poproszę kawałek szarlotki." },
        { tr: "Nie, dziękuję." }
      ] },
      { tr: "Chętnie. Ciasto jest całkiem świeże. To będzie sześć euro." },
      { tr: "Dobrze. To będzie trzy euro." },
      { task: "Podaj pieniądze.", tr: "Proszę." },
      { tr: "Bardzo dziękuję! Do widzenia." },
      { task: "Pożegnaj się i wyjdź.", tr: "Do widzenia!" }
    ]
  },
  "conv:sich-vorstellen": {
    title: "Pierwszy dzień kursu",
    setting: "Kurs niemieckiego w Volkshochschule, miejskiej szkole dla dorosłych. Przed zajęciami ktoś siada obok ciebie.",
    closing: "Na kursie od pierwszego zdania mówi się sobie na ty (du). Zawód podaje się bez rodzajnika i w mianowniku: „Ich bin Lehrerin”. Tam, gdzie polski stawia narzędnik („jestem nauczycielką”), niemiecki zostaje przy mianowniku. Z przymiotnikiem wraca rodzajnik: „Ich bin eine gute Lehrerin”.",
    turns: [
      { tr: "Cześć! To miejsce jest jeszcze wolne?" },
      { task: "Powiedz, że tak, i zaproś go, żeby usiadł.", tr: "Tak, jasne! Siadaj." },
      { tr: "Dzięki. Jestem Jonas. A ty jak masz na imię?" },
      { task: "Powiedz, jak masz na imię (Anna).", tr: "Mam na imię Anna." },
      { tr: "Miło mi! Skąd jesteś?" },
      { task: "Powiedz, że jesteś z Włoch.", tr: "Jestem z Włoch." },
      { tr: "O, fajnie! A czym się zajmujesz zawodowo?" },
      { task: "Powiedz, że uczysz w szkole: jesteś nauczycielką (albo nauczycielem).", tr: "Jestem nauczycielką." }
    ]
  },
  "conv:wochenmarkt": {
    title: "Na targu",
    setting: "Sobota rano, cotygodniowy targ na rynku. Sprzedawca wita cię zza skrzynek z warzywami.",
    closing: "Na targu wystarczą trzy zdania: „Ich hätte gern…” (poproszę…), „Was kosten…?” (ile kosztują…?) i „Was macht das zusammen?” (ile to razem?).",
    turns: [
      { tr: "Dzień dobry! Co podać? Pomidory są dziś wyjątkowo dobre." },
      { task: "Poproś o kilogram pomidorów.", tr: "Poproszę kilogram pomidorów." },
      { tr: "Proszę bardzo, kilogram pomidorów, to będzie cztery euro pięćdziesiąt. Coś jeszcze? Jabłka są dziś w promocji." },
      { task: "Zapytaj, ile kosztują jabłka.", tr: "Ile kosztują jabłka?" },
      { tr: "Dwa euro za kilogram. Są bardzo słodkie." },
      { task: "Powiedz, że to wszystko, i zapytaj, ile to razem.", tr: "Dziękuję, to wszystko. Ile to razem?" },
      { tr: "Cztery euro pięćdziesiąt, proszę. Dziękuję i miłego weekendu!" }
    ]
  },
  "conv:im-restaurant": {
    title: "Kolacja w restauracji",
    setting: "Wieczór, niemiecka restauracja, bez rezerwacji. Kelner podchodzi do ciebie przy wejściu.",
    closing: "Do kelnera zwracasz się per Sie, tak jak po polsku per Pan/Pani. Różnica jest w czasowniku: polski stawia go w 3. osobie liczby pojedynczej („Czy ma Pani rezerwację?”), niemiecki w 3. osobie liczby mnogiej, a Sie pisze się wielką literą: „Haben Sie reserviert?”. „Ich nehme…” (wezmę…) to najprostszy sposób, żeby zamówić. W Niemczech rachunek nie przychodzi sam: trzeba o niego poprosić.",
    turns: [
      { tr: "Dobry wieczór! Czy ma Pani rezerwację?" },
      { task: "Powiedz, że nie, i zapytaj o stolik dla dwóch osób.", tr: "Nie. Czy jest stolik dla dwóch osób?" },
      { tr: "Tak, oczywiście. Proszę usiąść, oto karta. Co podać do picia?" },
      { task: "Zamów butelkę wody gazowanej i kieliszek czerwonego wina.", tr: "Poproszę butelkę wody gazowanej i kieliszek czerwonego wina." },
      { tr: "Bardzo proszę. A co na przystawkę?" },
      { task: "Zamów zupę gulaszową i zapytaj, czy jest ostra.", tr: "Wezmę zupę gulaszową. Czy jest ostra?" },
      { tr: "Tylko trochę, jest przyprawiona papryką. Czy zamówi Pani potem także danie główne?" },
      { task: "Grzecznie odmów i poproś o rachunek na później.", tr: "Nie, dziękuję. A później poproszę rachunek." }
    ]
  },
  "conv:fahrkarte-kaufen": {
    title: "W kasie na dworcu",
    setting: "Reisezentrum Deutsche Bahn, kasa biletowa na dworcu. Twoja kolej przy okienku.",
    closing: "Sparpreis to tańsza taryfa, ale z Zugbindung: bilet jest ważny tylko na zarezerwowany pociąg dalekobieżny, tutaj ICE.",
    turns: [
      { tr: "Następna osoba, proszę. W czym mogę pomóc?" },
      { task: "Poproś o bilet do Hamburga na dzisiejsze popołudnie.", tr: "Poproszę bilet do Hamburga na dziś po południu." },
      { tr: "Pociągiem ICE czy Regionalexpressem? ICE jest szybszy, ale droższy." },
      { task: "Zapytaj, ile kosztuje ICE.", tr: "Ile kosztuje ICE?" },
      { tr: "Dziś jest jeszcze Sparpreis: dwadzieścia dziewięć euro dziewięćdziesiąt dziewięć w drugiej klasie." },
      { task: "Weź go i zapytaj, z którego toru odjeżdża.", tr: "Dobrze, biorę. Z którego toru odjeżdża?" },
      { tr: "Z toru siódmego, za dwadzieścia minut. Ze Sparpreis ma Pani Zugbindung: może Pani jechać tylko tym pociągiem." }
    ]
  },
  "conv:beim-arzt": {
    title: "U lekarza",
    setting: "Gabinet lekarski. Kartę ubezpieczenia zdrowotnego (Versichertenkarte) pokazujesz już w rejestracji, teraz siedzisz u lekarza.",
    closing: "U lekarza mówisz, co ci dolega, przez „Ich habe…”, słyszysz „Seit wann?” i pytasz „Wie oft am Tag?”. Dla czegoś, co zaczęło się w przeszłości i trwa nadal, seit łączy się z czasem teraźniejszym, tak jak polskie od: „Ich habe seit drei Tagen Fieber”, „mam gorączkę od trzech dni”. Przypadek jest jednak inny: od wymaga dopełniacza, seit celownika: seit drei Tagen.",
    turns: [
      { tr: "Dzień dobry, proszę usiąść. Co Pani dolega?" },
      { task: "Powiedz, że boli cię gardło i masz gorączkę.", tr: "Boli mnie gardło i mam gorączkę." },
      { tr: "Od kiedy ma Pani te dolegliwości?" },
      { task: "Powiedz, że od trzech dni.", tr: "Od trzech dni." },
      { tr: "Czy jest Pani uczulona na jakiś lek?" },
      { task: "Powiedz, że nie masz żadnych alergii.", tr: "Nie, nie mam żadnych alergii." },
      { tr: "Wypiszę Pani receptę na antybiotyk. Proszę odpoczywać i dużo pić." },
      { task: "Zapytaj, ile razy dziennie musisz go brać.", tr: "Ile razy dziennie muszę go brać?" },
      { tr: "Trzy razy dziennie, po jedzeniu, przez siedem dni. Życzę szybkiego powrotu do zdrowia!" }
    ]
  },
  "conv:wohnungsbesichtigung": {
    title: "Oglądanie mieszkania",
    setting: "Właścicielka pokazuje ci mieszkanie dwupokojowe. Masz dziesięć minut i mnóstwo pytań.",
    closing: "W Niemczech zawsze pyta się o Kaltmiete (czynsz bez opłat dodatkowych), Nebenkosten (opłaty dodatkowe: utrzymanie budynku, woda, wywóz śmieci i zwykle ogrzewanie) i Kaution (kaucję). Żeby „się odezwać”, niemiecki mówi sich melden, z bei + celownik dla osoby: „Ich melde mich bei Ihnen”.",
    turns: [
      { tr: "No więc, to jest to mieszkanie dwupokojowe. Jak Pani widzi, jest jasne i świeżo wyremontowane." },
      { task: "Zapytaj, ile wynosi czynsz bez opłat dodatkowych.", tr: "Ile wynosi czynsz bez opłat dodatkowych?" },
      { tr: "Osiemset euro miesięcznie, bez opłat dodatkowych." },
      { task: "Zapytaj, ile wynoszą opłaty dodatkowe.", tr: "A ile wynoszą opłaty dodatkowe?" },
      { tr: "Około stu czterdziestu euro miesięcznie, z ogrzewaniem." },
      { task: "Zapytaj, czy umowa jest na czas określony i ile wynosi kaucja.", tr: "Czy umowa jest na czas określony? I ile wynosi kaucja?" },
      { tr: "Nie, na czas nieokreślony. Kaucja wynosi trzy czynsze bez opłat dodatkowych, więcej prawo nie pozwala." },
      { task: "Powiedz, że się zastanowisz i jutro się odezwiesz.", tr: "Zastanowię się i jutro się do Pani odezwę." }
    ]
  },
  "conv:vorstellungsgespraech": {
    title: "Rozmowa kwalifikacyjna",
    setting: "Agencja marketingowa w Hamburgu. Kierowniczka działu kadr zaczyna od klasycznego pytania.",
    closing: "Na rozmowie mówi się konkretnie. Uwaga na czasownik po weil: idzie na koniec zdania, czego po polskim „bo” ani „ponieważ” się nie robi: „Weil mich Ihre Projekte interessieren”.",
    turns: [
      { tr: "No to proszę opowiedzieć trochę o sobie." },
      { task: "Podaj imię (Anna) i powiedz, że masz pięć lat doświadczenia w marketingu internetowym.", tr: "Nazywam się Anna i mam pięć lat doświadczenia w marketingu internetowym." },
      { tr: "A dlaczego zgłosiła się Pani akurat do nas?" },
      { task: "Powiedz, że bardzo interesują cię ich międzynarodowe projekty.", tr: "Ponieważ bardzo interesują mnie Państwa międzynarodowe projekty." },
      { tr: "Co uznałaby Pani za swoją największą słabość?" },
      { task: "Powiedz, że często chcesz wszystko kontrolować sama, ale uczysz się przekazywać zadania innym.", tr: "Często chcę wszystko kontrolować sama, ale właśnie uczę się przekazywać zadania innym." },
      { tr: "Dobrze. Czy ma Pani do nas jeszcze jakieś pytania?" },
      { task: "Zapytaj, jaki jest skład zespołu i co będzie dalej.", tr: "Tak: jaki jest skład zespołu i co będzie dalej?" }
    ]
  },
  "conv:buergeramt": {
    title: "W Bürgeramt",
    setting: "Bürgeramt, urząd obsługi mieszkańców w twoim nowym mieście. Dopiero co się przeprowadziłaś i musisz zameldować adres (Anmeldung): to obowiązek każdego, kto mieszka w Niemczech.",
    closing: "Do Anmeldung potrzebujesz dokumentu tożsamości i Wohnungsgeberbestätigung, podpisanego przez wynajmującego potwierdzenia, że się wprowadziłaś. Meldebescheinigung to zaświadczenie o zameldowaniu, które dostajesz w zamian, i będą cię o nie prosić wciąż od nowa: w banku, w pracy, w urzędzie skarbowym.",
    turns: [
      { tr: "Numer dwieście czternaście, okienko trzecie, proszę. Dzień dobry, w czym mogę pomóc?" },
      { task: "Powiedz, że chcesz zameldować swój adres.", tr: "Chciałabym zameldować miejsce zamieszkania." },
      { tr: "Czy ma Pani przy sobie paszport, potwierdzenie od wynajmującego i wypełniony formularz meldunkowy?" },
      { task: "Powiedz, że masz paszport i potwierdzenie, ale nie masz formularza.", tr: "Paszport i potwierdzenie mam, ale formularza nie." },
      { tr: "Nie ma problemu, dam Pani formularz. Proszę wypełnić go drukowanymi literami." },
      { task: "Zapytaj, ile trzeba czekać na zaświadczenie o zameldowaniu.", tr: "Jak długo trzeba czekać na zaświadczenie o zameldowaniu?" },
      { tr: "Dostanie je Pani od razu, tutaj przy okienku." }
    ]
  },
  "conv:diskussion": {
    title: "Dyskusja wśród znajomych",
    setting: "Piwo po pracy. Kolega zaczyna temat pracy zdalnej.",
    closing: "Żeby przyznać komuś rację tylko częściowo: „Teilweise gebe ich dir recht”, dosłownie „częściowo daję ci rację”. Żeby stanowczo się nie zgodzić: „Da bin ich überhaupt nicht deiner Meinung”. A abhängen łączy się z von. Gdy dalej idzie całe zdanie, von dostaje przed sobą da- i powstaje zaimek przysłówkowy davon, który to zdanie zapowiada: „Das hängt davon ab, wie…”, „to zależy od tego, jak…”.",
    turns: [
      { tr: "Moim zdaniem praca zdalna zabiła ducha zespołu. Jak ty to widzisz?" },
      { task: "Przyznaj mu częściowo rację, ale powiedz, że zmniejszyła też stres związany z dojazdami.", tr: "Częściowo masz rację, ale zmniejszyła też stres związany z dojazdami." },
      { tr: "No tak, ale nie uważasz, że młodzi uczą się mniej, kiedy nie ma ich w biurze?" },
      { task: "Powiedz, że to zależy od tego, jak firma organizuje wdrażanie nowych pracowników.", tr: "To zależy od tego, jak firma organizuje wdrażanie nowych pracowników." },
      { tr: "Tu masz rację. Ale dla mnie model hybrydowy to najgorsze z obu światów." },
      { task: "Stanowczo się nie zgódź: w modelu hybrydowym można decydować w zależności od zadania.", tr: "Zupełnie się z tobą nie zgadzam: w modelu hybrydowym można decydować w zależności od zadania." }
    ]
  },
  "conv:restaurant-entscheidungen": {
    title: "Przy stole, z kilkoma decyzjami",
    setting: "Piątkowy wieczór, niemiecka restauracja. Twoje wybory zmieniają stolik, danie i na końcu rachunek.",
    closing: "Rachunek pamięta twoje wybory: dwadzieścia cztery euro ze strudlem, dwadzieścia jeden z kawą.",
    turns: [
      { tr: "Dobry wieczór. Czy mają Państwo rezerwację?" },
      { task: "Powiedz, czy masz rezerwację.", opts: [
        { tr: "Tak, na nazwisko Weber." },
        { tr: "Nie, jesteśmy we dwójkę. Czy jest jeszcze wolny stolik?" }
      ] },
      { tr: "Bardzo dobrze. Państwa stolik jest przy oknie. Proszę tędy." },
      { tr: "Jest jeszcze wolny stolik dla dwóch osób, na samym końcu sali. Proszę bardzo." },
      { tr: "Oto karta. Czy chcą Państwo już zamówić coś do picia?" },
      { task: "Zamów butelkę wody niegazowanej.", tr: "Poproszę butelkę wody niegazowanej." },
      { tr: "Woda niegazowana, już podaję. A co Państwo zjedzą?" },
      { task: "Wybierz, co zjesz.", opts: [
        { tr: "Dla mnie sznycel, poproszę." },
        { tr: "Dla mnie warzywa z patelni, poproszę. Nie jem mięsa." }
      ] },
      { tr: "Sznycel jest dziś bardzo dobry, świeżo panierowany." },
      { tr: "Oczywiście. Warzywa do tego są z targu obok." },
      { tr: "Czy na koniec życzą sobie Państwo deser? Strudel jabłkowy jest domowej roboty." },
      { task: "Zdecyduj, czy bierzesz deser.", opts: [
        { tr: "Tak, poproszę strudel jabłkowy." },
        { tr: "Nie, dziękuję. Tylko kawę, poproszę." }
      ] },
      { tr: "Dobry wybór, już podaję." },
      { tr: "Kawa, oczywiście." },
      { tr: "Oto rachunek: danie główne, woda i strudel jabłkowy. Razem dwadzieścia cztery euro." },
      { tr: "Oto rachunek: danie główne, woda i kawa. Razem dwadzieścia jeden euro." },
      { task: "Zapytaj, czy możesz zapłacić kartą.", tr: "Czy mogę zapłacić kartą?" },
      { tr: "Oczywiście, oto terminal. Bardzo dziękuję i miłego wieczoru!" }
    ]
  },
  "conv:zug-verpasst": {
    title: "Przy okienku, po spóźnieniu na pociąg",
    setting: "Masz bilet Sparpreis (tańszą taryfę ważną tylko na zarezerwowany pociąg) do Kolonii, ale twój ICE o 9:20 odjechał bez ciebie albo w ogóle nie odjechał. Idziesz do okienka Deutsche Bahn.",
    closing: "Zugbindung przy Sparpreis przestaje obowiązywać, gdy pociąg zostanie odwołany, ale nie wtedy, gdy to ty się spóźnisz. Polski mówi „spóźniłam się na pociąg” albo „uciekł mi pociąg”, a niemiecki ma na to jeden czasownik z dopełnieniem w bierniku: „Ich habe den Zug verpasst”. Nie myl go z vermissen (tęsknić za kimś) ani z verlieren (zgubić, na przykład portfel). Odwołany pociąg fällt aus: „Mein Zug ist ausgefallen”.",
    turns: [
      { tr: "Dzień dobry, słucham?" },
      { task: "Wyjaśnij, co się stało z twoim pociągiem.", opts: [
        { tr: "Spóźniłam się na ICE do Kolonii o dziewiątej dwadzieścia." },
        { tr: "Mój ICE do Kolonii został odwołany." }
      ] },
      { tr: "Niestety Pani Sparpreis jest ważny tylko na zarezerwowany pociąg. Potrzebuje Pani nowego biletu." },
      { tr: "Następny ICE do Kolonii odjeżdża o jedenastej czterdzieści. Bilet kosztuje trzydzieści dziewięć euro dziewięćdziesiąt dziewięć." },
      { tr: "Przykro mi. Jeśli pociąg zostaje odwołany, może Pani pojechać innym pociągiem." },
      { tr: "Następny ICE do Kolonii odjeżdża o jedenastej czterdzieści. Nic Pani nie dopłaca." },
      { task: "Weź pociąg o 11:40 albo zapytaj, czy jest coś wcześniej.", opts: [
        { tr: "Dobrze, w takim razie biorę pociąg o jedenastej czterdzieści." },
        { tr: "Nie ma nic wcześniej?" }
      ] },
      { tr: "W porządku. Odjeżdża z toru siódmego." },
      { tr: "Wcześniej jest tylko Intercity o dziesiątej piętnaście, ale musi się Pani raz przesiąść." },
      { task: "Weź Intercity albo zaczekaj na ICE.", opts: [
        { tr: "Wszystko mi jedno, biorę Intercity." },
        { tr: "To wolę zaczekać na ICE o jedenastej czterdzieści." }
      ] },
      { tr: "Intercity o dziesiątej piętnaście, tor trzeci." },
      { tr: "Wydrukuję Pani połączenie. Szczęśliwej podróży!" },
      { task: "Podziękuj i pożegnaj się.", tr: "Bardzo dziękuję, miłego dnia!" },
      { tr: "Do widzenia." }
    ]
  },
  "conv:wohnung-ansehen": {
    title: "Oglądanie mieszkania",
    setting: "Pośrednik nieruchomości pokazuje ci mieszkanie. To, co powiesz, zdecyduje, czy będzie mowa o cenie, czy o terminach.",
    closing: "W porównaniu als odpowiada polskiemu „niż”, a w zdaniu, które po nim następuje, czasownik w formie osobowej idzie na koniec: „kleiner, als es auf den Fotos aussah”. A żeby dać odpowiedź później: „Ich sage Ihnen Bescheid”, „dam Panu znać”.",
    turns: [
      { tr: "No więc, to jest salon. Co Pani o nim sądzi?" },
      { task: "Powiedz, co o nim myślisz.", opts: [
        { tr: "Podoba mi się, ale jest mniejszy, niż wyglądał na zdjęciach." },
        { tr: "Jest bardzo jasny, to mi się podoba." }
      ] },
      { tr: "Zdjęcia zawsze trochę oszukują. Ale mieszkanie ma trzydzieści pięć metrów kwadratowych i żadne miejsce nie marnuje się na długie korytarze." },
      { tr: "Tak, okna wychodzą na południe. Zimą prawie nie trzeba grzać." },
      { tr: "Opłaty dodatkowe wynoszą około stu euro miesięcznie, z ogrzewaniem." },
      { tr: "Czynsz bez opłat dodatkowych wynosi sześćset pięćdziesiąt euro." },
      { task: "Zapytaj, czy można negocjować czynsz albo od kiedy mieszkanie jest wolne.", opts: [
        { tr: "Czy można porozmawiać o czynszu?" },
        { tr: "Od kiedy mieszkanie jest wolne?" }
      ] },
      { tr: "Właściciel zejdzie do sześciuset euro, jeśli podpisze Pani umowę jeszcze w tym tygodniu." },
      { tr: "Mieszkanie jest wolne od pierwszego dnia przyszłego miesiąca." },
      { tr: "Od pierwszego dnia przyszłego miesiąca. Ale czynsz zostaje przy sześciuset pięćdziesięciu euro." },
      { task: "Zdecyduj: bierzesz czy się zastanowisz?", opts: [
        { tr: "Biorę to mieszkanie." },
        { tr: "Zastanowię się i dam Panu znać." }
      ] },
      { tr: "Bardzo dobrze. Do jutra wyślę Pani umowę najmu mailem." },
      { tr: "Będziemy w kontakcie w najbliższych dniach." },
      { tr: "Oczywiście, proszę się spokojnie zastanowić. Mój numer Pani ma." },
      { task: "Podziękuj i pożegnaj się.", tr: "Dziękuję, do widzenia." },
      { tr: "Do widzenia." }
    ]
  },
  "conv:arzt-halsschmerzen": {
    title: "U lekarza z bólem gardła",
    setting: "Gabinet lekarza rodzinnego. Od trzech dni boli cię gardło i musisz jasno wytłumaczyć, jak się czujesz.",
    closing: "W Niemczech zwolnienie lekarskie (Arbeitsunfähigkeitsbescheinigung) trafia elektronicznie do twojej kasy chorych (Krankenkasse), ale pracodawcę musisz zawiadomić sama: lekarz tego za ciebie nie zrobi. Temperaturę podaje się z przecinkiem i Komma czyta się na głos, jak polskie „przecinek”: „achtunddreißig Komma fünf”. A seit, jak polskie od, idzie z czasem teraźniejszym, ale z celownikiem, nie z dopełniaczem: „seit drei Tagen”, „od trzech dni”.",
    turns: [
      { tr: "Dzień dobry, proszę usiąść. W czym mogę pomóc?" },
      { task: "Powiedz, że od trzech dni boli cię gardło, z gorączką albo bez.", opts: [
        { tr: "Od trzech dni boli mnie gardło i mam gorączkę." },
        { tr: "Od trzech dni boli mnie gardło, ale nie mam gorączki." }
      ] },
      { tr: "Trzy dni z gorączką. Jak wysoka była?" },
      { task: "Powiedz, że trzydzieści osiem przecinek pięć.", tr: "Trzydzieści osiem przecinek pięć." },
      { tr: "To już sporo. Proszę otworzyć usta." },
      { tr: "Bez gorączki, to już dobry znak. Proszę otworzyć usta." },
      { tr: "Gardło jest mocno zaczerwienione. Boli przy przełykaniu?" },
      { task: "Powiedz, czy boli cię przy przełykaniu.", opts: [
        { tr: "Tak, przełykanie bardzo boli." },
        { tr: "Nie, tylko trochę drapie." }
      ] },
      { tr: "W takim razie zrobię wymaz z gardła. W zależności od wyniku zdecydujemy, czy potrzebuje Pani antybiotyku." },
      { tr: "To wygląda na przeziębienie, na razie nie widzę powodu do antybiotyku. Proszę płukać gardło słoną wodą i pić dużo ciepłych napojów." },
      { tr: "W każdym razie potrzebuje Pani odpoczynku. Jeśli za trzy dni nie będzie lepiej, proszę przyjść ponownie." },
      { task: "Zapytaj o pracę albo o sport.", opts: [
        { tr: "Muszę zostać w domu, czy mogę iść do pracy?" },
        { tr: "Czy mogę uprawiać sport?" }
      ] },
      { tr: "Wypisuję Pani zwolnienie na trzy dni. Zwolnienie trafia elektronicznie do Pani kasy chorych, ale pracodawcę musi Pani zawiadomić sama." },
      { tr: "Sportu lepiej nie, dopóki gardło jest w takim stanie. Spacery są w porządku." },
      { tr: "Życzę szybkiego powrotu do zdrowia!" },
      { task: "Podziękuj i pożegnaj się.", tr: "Dziękuję, do widzenia." },
      { tr: "Do widzenia." }
    ]
  }
});
