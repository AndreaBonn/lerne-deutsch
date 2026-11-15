/* ============================================================
   Teksty w języku ucznia (pl) do data/core/conversations.js
   Klucze odsyłają do id z warstwy neutralnej; tablice łączą się
   po indeksie, więc ich długość musi się zgadzać z core.
   Sprawdza to gate parzystości w scripts/parity.mjs.
   German source in core, for reviewers ("(M)" other speaker, "(TY)" learner).
   The neutral file stays the single source of truth.
   (M) Guten Tag! Was möchten Sie trinken?
   (TY) branch 1: Einen Kaffee, bitte. | branch 2: Einen Tee, bitte.
   (M) Ein Kaffee, gern. / Ein Tee, gern. (both branches meet at the next line)
   (M) Und wie heißen Sie, bitte?
   (TY) Ich heiße Anna.
   (M) Danke. Möchten Sie auch ein Stück Kuchen?
   (TY) branch 1: Ja, ein Stück Apfelkuchen, bitte. | branch 2: Nein, danke.
   (M) after branch 1: Gern. Der Kuchen ist ganz frisch. Das macht sechs Euro.
   (M) after branch 2: Gut. Das macht drei Euro.
   (TY) Hier, bitte.
   (M) Danke schön! Auf Wiedersehen.
   (TY) Auf Wiedersehen!
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
