/* ============================================================
   Warstwa neutralna językowo: struktura, niemiecki, klucze odpowiedzi.
   Teksty w języku ucznia leżą w data/i18n/<lang>/conversations.js

   Kolejność jak w kursie włoskim (pierwsze siedem scen = moduł conv-1),
   sytuacje przeniesione do krajów niemieckojęzycznych, nie przetłumaczone.
   Pierwsza scena to ziarno: rozmowa rozgałęziona, w kawiarni (A1).
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
  },
  {
    id: "sich-vorstellen",
    cefr: "A1",
    icon: "🙋",
    titleIt: "Der erste Kurstag",
    turns: [
      { sp: "A", it: "Hallo! Ist der Platz hier noch frei?" },
      { sp: "TY", hintIt: "Ja, klar! Setz dich.", accept: ["ja klar setz dich", "ja klar setz dich doch", "ja der ist frei setz dich", "ja bitte setz dich"] },
      { sp: "A", it: "Danke. Ich bin Jonas. Und wie heißt du?" },
      {
        sp: "TY",
        hintIt: "Ich heiße Anna.",
        accept: ["ich heiße anna", "ich bin anna", "mein name ist anna", "anna"]
      },
      { sp: "A", it: "Freut mich! Woher kommst du?" },
      {
        sp: "TY",
        hintIt: "Ich komme aus Italien.",
        accept: ["ich komme aus italien", "ich bin aus italien", "aus italien"]
      },
      { sp: "A", it: "Ah, schön! Und was machst du beruflich?" },
      {
        sp: "TY",
        hintIt: "Ich bin Lehrerin.",
        accept: ["ich bin lehrerin", "ich bin lehrer", "ich arbeite als lehrerin", "ich arbeite als lehrer"]
      }
    ]
  },
  {
    id: "wochenmarkt",
    cefr: "A1",
    icon: "🍅",
    titleIt: "Auf dem Wochenmarkt",
    turns: [
      { sp: "A", it: "Guten Morgen! Was darf es sein? Die Tomaten sind heute besonders gut." },
      {
        sp: "TY",
        hintIt: "Ein Kilo Tomaten, bitte.",
        accept: ["ein kilo tomaten bitte", "ein kilo tomaten", "ich hätte gern ein kilo tomaten", "ich möchte ein kilo tomaten"]
      },
      { sp: "A", it: "Bitte schön, ein Kilo Tomaten, das sind vier Euro fünfzig. Sonst noch etwas? Die Äpfel sind heute im Angebot." },
      {
        sp: "TY",
        hintIt: "Was kosten die Äpfel?",
        accept: ["was kosten die äpfel", "wie viel kosten die äpfel", "und was kosten die äpfel"]
      },
      { sp: "A", it: "Zwei Euro das Kilo. Die sind schön süß." },
      {
        sp: "TY",
        hintIt: "Danke, das ist alles. Was macht das zusammen?",
        accept: [
          "danke das ist alles was macht das zusammen",
          "das ist alles was macht das zusammen"
        ]
      },
      { sp: "A", it: "Vier Euro fünfzig, bitte. Danke schön und ein schönes Wochenende!" }
    ]
  },
  {
    id: "im-restaurant",
    cefr: "A2",
    icon: "🍽️",
    titleIt: "Im Restaurant",
    turns: [
      { sp: "A", it: "Guten Abend! Haben Sie reserviert?" },
      {
        sp: "TY",
        hintIt: "Nein. Haben Sie einen Tisch für zwei Personen?",
        accept: [
          "nein haben sie einen tisch für zwei personen",
          "nein haben sie noch einen tisch für zwei"
        ]
      },
      { sp: "A", it: "Ja, natürlich. Nehmen Sie bitte Platz, hier ist die Speisekarte. Was möchten Sie trinken?" },
      {
        sp: "TY",
        hintIt: "Eine Flasche Wasser mit Kohlensäure und ein Glas Rotwein, bitte.",
        accept: [
          "eine flasche wasser mit kohlensäure und ein glas rotwein bitte",
          "eine flasche wasser mit kohlensäure und ein glas rotwein",
          "ich hätte gern eine flasche wasser mit kohlensäure und ein glas rotwein"
        ]
      },
      { sp: "A", it: "Sehr gern. Und was möchten Sie als Vorspeise?" },
      {
        sp: "TY",
        hintIt: "Ich nehme die Gulaschsuppe. Ist sie scharf?",
        accept: [
          "ich nehme die gulaschsuppe ist sie scharf",
          "die gulaschsuppe bitte ist sie scharf",
          "ich hätte gern die gulaschsuppe ist sie scharf"
        ]
      },
      { sp: "A", it: "Nur ein bisschen, sie ist mit Paprika gewürzt. Möchten Sie danach auch ein Hauptgericht?" },
      {
        sp: "TY",
        hintIt: "Nein, danke. Und später bitte die Rechnung.",
        accept: [
          "nein danke und später bitte die rechnung",
          "nein danke später bitte die rechnung",
          "nein danke und später die rechnung bitte"
        ]
      }
    ]
  },
  {
    id: "fahrkarte-kaufen",
    cefr: "A2",
    icon: "🚆",
    titleIt: "Im Reisezentrum",
    turns: [
      { sp: "A", it: "Der Nächste, bitte. Was kann ich für Sie tun?" },
      {
        sp: "TY",
        hintIt: "Eine Fahrkarte nach Hamburg für heute Nachmittag, bitte.",
        accept: [
          "eine fahrkarte nach hamburg für heute nachmittag bitte",
          "ich hätte gern eine fahrkarte nach hamburg für heute nachmittag",
          "eine fahrkarte nach hamburg für heute nachmittag"
        ]
      },
      { sp: "A", it: "Mit dem ICE oder mit dem Regionalexpress? Der ICE ist schneller, aber teurer." },
      {
        sp: "TY",
        hintIt: "Was kostet der ICE?",
        accept: ["was kostet der ice", "wie viel kostet der ice", "und was kostet der ice"]
      },
      { sp: "A", it: "Heute gibt es noch einen Sparpreis: neunundzwanzig Euro neunundneunzig in der zweiten Klasse." },
      {
        sp: "TY",
        hintIt: "Gut, den nehme ich. Von welchem Gleis fährt er ab?",
        accept: [
          "gut den nehme ich von welchem gleis fährt er ab",
          "den nehme ich von welchem gleis fährt er ab"
        ]
      },
      { sp: "A", it: "Von Gleis sieben, in zwanzig Minuten. Mit dem Sparpreis haben Sie Zugbindung: Sie dürfen nur diesen Zug nehmen." }
    ]
  },
  {
    id: "beim-arzt",
    cefr: "A2",
    icon: "🩺",
    titleIt: "In der Arztpraxis",
    turns: [
      { sp: "A", it: "Guten Tag, nehmen Sie bitte Platz. Was fehlt Ihnen denn?" },
      {
        sp: "TY",
        hintIt: "Ich habe Halsschmerzen und Fieber.",
        accept: ["ich habe halsschmerzen und fieber", "mir tut der hals weh und ich habe fieber", "ich habe fieber und halsschmerzen"]
      },
      { sp: "A", it: "Seit wann haben Sie die Beschwerden?" },
      { sp: "TY", hintIt: "Seit drei Tagen.", accept: ["seit drei tagen", "schon seit drei tagen", "die habe ich seit drei tagen"] },
      { sp: "A", it: "Sind Sie gegen ein Medikament allergisch?" },
      {
        sp: "TY",
        hintIt: "Nein, ich habe keine Allergien.",
        accept: ["nein ich habe keine allergien", "nein keine allergien", "ich habe keine allergien"]
      },
      { sp: "A", it: "Ich schreibe Ihnen ein Rezept für ein Antibiotikum. Ruhen Sie sich aus und trinken Sie viel." },
      {
        sp: "TY",
        hintIt: "Wie oft am Tag muss ich es nehmen?",
        accept: ["wie oft am tag muss ich es nehmen", "wie oft am tag soll ich es nehmen", "wie oft muss ich es nehmen"]
      },
      { sp: "A", it: "Dreimal am Tag, nach dem Essen, sieben Tage lang. Gute Besserung!" }
    ]
  },
  {
    id: "wohnungsbesichtigung",
    cefr: "B1",
    icon: "🔑",
    titleIt: "Die Wohnungsbesichtigung",
    turns: [
      { sp: "A", it: "So, das ist die Zweizimmerwohnung. Wie Sie sehen, ist sie hell und frisch renoviert." },
      {
        sp: "TY",
        hintIt: "Wie hoch ist die Kaltmiete?",
        accept: ["wie hoch ist die kaltmiete", "was kostet die wohnung kalt", "wie viel beträgt die kaltmiete"]
      },
      { sp: "A", it: "Achthundert Euro im Monat, ohne Nebenkosten." },
      {
        sp: "TY",
        hintIt: "Und wie hoch sind die Nebenkosten?",
        accept: ["und wie hoch sind die nebenkosten", "wie hoch sind die nebenkosten", "und was kosten die nebenkosten"]
      },
      { sp: "A", it: "Etwa hundertvierzig Euro im Monat, die Heizung ist schon dabei." },
      {
        sp: "TY",
        hintIt: "Ist der Mietvertrag befristet? Und wie hoch ist die Kaution?",
        accept: [
          "ist der mietvertrag befristet und wie hoch ist die kaution",
          "ist der vertrag befristet und wie hoch ist die kaution",
          "ist der mietvertrag befristet und wie viel kaution muss ich zahlen"
        ]
      },
      { sp: "A", it: "Nein, er ist unbefristet. Die Kaution beträgt drei Kaltmieten, mehr ist gesetzlich nicht erlaubt." },
      {
        sp: "TY",
        hintIt: "Ich überlege es mir und melde mich morgen bei Ihnen.",
        accept: [
          "ich überlege es mir und melde mich morgen bei ihnen",
          "ich überlege es mir und melde mich morgen",
          "ich denke darüber nach und melde mich morgen bei ihnen"
        ]
      }
    ]
  }
];
