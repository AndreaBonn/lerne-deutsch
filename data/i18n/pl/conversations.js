/* ============================================================
   Learner-language text (pl) for data/core/conversations.js
   Keys point at ids in the neutral layer; arrays merge by index,
   so their length has to match core.
   Checked by scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("pl", {
  "conv:cafe-bestellen": {
    title: "W kawiarni",
    setting: "Sobota rano, kawiarnia w Berlinie. Zamawiasz napój i w zależności od wyboru rachunek jest inny.",
    closing: "Rachunek się zgadzał: trzy euro bez ciasta, sześć z ciastem. Wybór widać na końcu.",
    turns: [
      { tr: "Dzień dobry! Co podać do picia?" },
      { task: "Wybierz, co zamówisz do picia.", opts: [
        { tr: "Poproszę kawę." },
        { tr: "Poproszę herbatę." }
      ] },
      { tr: "Kawa, z przyjemnością." },
      { tr: "Herbata, z przyjemnością." },
      { tr: "A jak się Pan/Pani nazywa?" },
      { task: "Powiedz, jak masz na imię.", tr: "Nazywam się Anna." },
      { tr: "Dziękuję. Czy podać też kawałek ciasta?" },
      { task: "Zdecyduj, czy chcesz ciasto.", opts: [
        { tr: "Tak, poproszę kawałek szarlotki." },
        { tr: "Nie, dziękuję." }
      ] },
      { tr: "Chętnie. Ciasto jest bardzo świeże. To będzie sześć euro." },
      { tr: "Dobrze. To będzie trzy euro." },
      { task: "Podaj pieniądze kelnerce.", tr: "Proszę." },
      { tr: "Bardzo dziękuję! Do widzenia." },
      { task: "Pożegnaj się i wyjdź.", tr: "Do widzenia!" }
    ]
  }
});
