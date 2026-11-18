/* ============================================================
   Warstwa neutralna językowo - pary minimalne.

   Wyłącznie niemiecki: same wyrazy. Glosy („Staat to państwo, Stadt to
   miasto") i uwagi kontrastywne siedzą w data/i18n/<lang>/phonetics.js
   i pisze się je pod konkretny język, nie tłumaczy - bo problem jest
   inny dla każdego. Polak nie ma w ogóle długości samogłoski ani
   dźwięku „ö", Hiszpan słyszy jedno „i", a Francuz nie rozróżnia
   „i" długiego od krótkiego.

   Kolejność wewnątrz pary NIE jest kolejnością pokazywania: ćwiczenie
   losuje, którego wyrazu posłuchać i w jakiej kolejności ustawić
   przyciski. „a" i „b" to tylko nazwy pól.

   Każdy wyraz z tej listy dostaje własne nagranie: bez tego ćwiczenie
   nie ma czego odtworzyć, bo synteza systemowa myli dokładnie te
   różnice, których tu się słucha.

   CZEGO TU NIE MA I DLACZEGO. Ćwiczenie ma sens tylko wtedy, gdy dwa
   nagrania NAPRAWDĘ się różnią. Sprawdza to scripts/check_minpairs.py
   i tam trzeba wrócić, gdy zmieni się głos albo dopisze para. Wyraz
   musi być prawdziwym wyrazem standardowego niemieckiego po obu
   stronach pary; pary, w których jeden człon jest wymyślony, nie
   wchodzą.
   ============================================================ */
window.PHONETICS = [
  {
    id: "ph-lang-kurz",
    cefr: "A1",
    tag: "g-aussprache",
    pairs: [
      { a: "Staat", b: "Stadt" },
      { a: "bieten", b: "bitten" },
      { a: "Höhle", b: "Hölle" },
      { a: "Miete", b: "Mitte" },
      { a: "Ofen", b: "offen" },
      { a: "Beet", b: "Bett" }
    ]
  },
  {
    id: "ph-ue-i",
    cefr: "A2",
    tag: "g-aussprache",
    pairs: [
      { a: "Kissen", b: "küssen" },
      { a: "Kiste", b: "Küste" },
      { a: "vier", b: "für" },
      { a: "spielen", b: "spülen" },
      { a: "Ziege", b: "Züge" },
      { a: "liegen", b: "lügen" }
    ]
  },
  {
    id: "ph-oe-e",
    cefr: "A2",
    tag: "g-aussprache",
    pairs: [
      { a: "kennen", b: "können" },
      { a: "lesen", b: "lösen" },
      { a: "Sehne", b: "Söhne" },
      { a: "Hefe", b: "Höfe" },
      { a: "helle", b: "Hölle" }
    ]
  },
  {
    id: "ph-s-z",
    cefr: "A2",
    tag: "g-aussprache",
    pairs: [
      { a: "seit", b: "Zeit" },
      { a: "Seile", b: "Zeile" },
      { a: "Saal", b: "Zahl" },
      { a: "Sinn", b: "Zinn" }
    ]
  }
];
