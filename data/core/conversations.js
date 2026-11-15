/* ============================================================
   Warstwa neutralna językowo: struktura, niemiecki, klucze odpowiedzi.
   Teksty w języku ucznia leżą w data/i18n/<lang>/conversations.js

   Ziarno kursu niemieckiego: jedna rozmowa rozgałęziona, w kawiarni (A1).
   Tura z `id` jest celem skoku, `go` mówi dokąd iść po niej, a tura
   ucznia z `opts` rozwidla dialog: każda gałąź ma własny klucz odpowiedzi
   i własne `go`. Kształt: romb, wybór rozchodzi się na dwie gałęzie i
   schodzi z powrotem w jedną turę. Konsekwencja drugiego wyboru jest
   widoczna później, w rachunku: bez ciastka trzy euro, z ciastkiem sześć.
   ============================================================ */
window.CONVERSATIONS = [
  {
    id: "cafe-bestellen",
    cefr: "A1",
    icon: "☕",
    titleIt: "Im Café",
    turns: [
      { sp: "A", it: "Guten Tag! Was möchten Sie trinken?" },
      {
        sp: "TY",
        opts: [
          {
            hintIt: "Einen Kaffee, bitte.",
            accept: ["einen kaffee bitte", "einen kaffee", "ich möchte einen kaffee"],
            go: "kaffee"
          },
          {
            hintIt: "Einen Tee, bitte.",
            accept: ["einen tee bitte", "einen tee", "ich möchte einen tee"],
            go: "tee"
          }
        ]
      },
      { sp: "A", id: "kaffee", it: "Ein Kaffee, gern.", go: "name" },
      { sp: "A", id: "tee", it: "Ein Tee, gern." },
      { sp: "A", id: "name", it: "Und wie heißen Sie, bitte?" },
      {
        sp: "TY",
        hintIt: "Ich heiße Anna.",
        accept: ["ich heiße anna", "ich bin anna", "mein name ist anna", "anna"]
      },
      { sp: "A", it: "Danke. Möchten Sie auch ein Stück Kuchen?" },
      {
        sp: "TY",
        opts: [
          {
            hintIt: "Ja, ein Stück Apfelkuchen, bitte.",
            accept: ["ja ein stück apfelkuchen bitte", "ja bitte", "ein stück apfelkuchen bitte"],
            go: "mit"
          },
          {
            hintIt: "Nein, danke.",
            accept: ["nein danke", "nein"],
            go: "ohne"
          }
        ]
      },
      { sp: "A", id: "mit", it: "Gern. Der Kuchen ist ganz frisch. Das macht sechs Euro.", go: "zahlen" },
      { sp: "A", id: "ohne", it: "Gut. Das macht drei Euro." },
      {
        sp: "TY",
        id: "zahlen",
        hintIt: "Hier, bitte.",
        accept: ["hier bitte", "hier bitte schön", "bitte schön"]
      },
      { sp: "A", it: "Danke schön! Auf Wiedersehen." },
      {
        sp: "TY",
        hintIt: "Auf Wiedersehen!",
        accept: ["auf wiedersehen", "tschüss", "danke auf wiedersehen"]
      }
    ]
  }
];
