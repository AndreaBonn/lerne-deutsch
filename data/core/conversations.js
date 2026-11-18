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
,
  {
    id: "vorstellungsgespraech",
    cefr: "B1",
    icon: "💼",
    titleIt: "Das Vorstellungsgespräch",
    turns: [
      { sp: "A", it: "Also, erzählen Sie doch ein bisschen von sich." },
      {
        sp: "TY",
        hintIt: "Ich heiße Anna und habe fünf Jahre Erfahrung im Onlinemarketing.",
        accept: [
          "ich heiße anna und habe fünf jahre erfahrung im onlinemarketing",
          "ich bin anna und habe fünf jahre erfahrung im onlinemarketing",
          "ich heiße anna und arbeite seit fünf jahren im onlinemarketing"
        ]
      },
      { sp: "A", it: "Und warum haben Sie sich gerade bei uns beworben?" },
      {
        sp: "TY",
        hintIt: "Weil mich Ihre internationalen Projekte sehr interessieren.",
        accept: [
          "weil mich ihre internationalen projekte sehr interessieren",
          "weil mich ihre internationalen projekte interessieren",
          "ihre internationalen projekte interessieren mich sehr"
        ]
      },
      { sp: "A", it: "Was würden Sie als Ihre größte Schwäche bezeichnen?" },
      {
        sp: "TY",
        hintIt: "Ich will oft alles selbst kontrollieren, aber ich lerne gerade, Aufgaben abzugeben.",
        accept: [
          "ich will oft alles selbst kontrollieren aber ich lerne gerade aufgaben abzugeben",
          "ich möchte oft alles selbst kontrollieren aber ich lerne gerade aufgaben abzugeben",
          "ich will oft alles kontrollieren aber ich lerne aufgaben abzugeben"
        ]
      },
      { sp: "A", it: "Gut. Haben Sie noch Fragen an uns?" },
      {
        sp: "TY",
        hintIt: "Ja: Wie ist das Team zusammengesetzt, und wie geht es jetzt weiter?",
        accept: [
          "ja wie ist das team zusammengesetzt und wie geht es jetzt weiter",
          "wie ist das team zusammengesetzt und wie geht es jetzt weiter",
          "wie ist das team zusammengesetzt und was sind die nächsten schritte"
        ]
      }
    ]
  },
  {
    id: "buergeramt",
    cefr: "B1",
    icon: "🗂️",
    titleIt: "Im Bürgeramt",
    turns: [
      { sp: "A", it: "Nummer zweihundertvierzehn, Schalter drei, bitte. Guten Tag, was kann ich für Sie tun?" },
      {
        sp: "TY",
        hintIt: "Ich möchte meinen Wohnsitz anmelden.",
        accept: ["ich möchte meinen wohnsitz anmelden", "ich will meinen wohnsitz anmelden", "ich möchte meine neue wohnung anmelden"]
      },
      { sp: "A", it: "Haben Sie Ihren Pass, die Wohnungsgeberbestätigung und das ausgefüllte Anmeldeformular dabei?" },
      {
        sp: "TY",
        hintIt: "Den Pass und die Bestätigung habe ich, aber das Formular nicht.",
        accept: [
          "den pass und die bestätigung habe ich aber das formular nicht",
          "ich habe den pass und die bestätigung aber nicht das formular",
          "pass und bestätigung habe ich aber das formular nicht"
        ]
      },
      { sp: "A", it: "Kein Problem, ich gebe Ihnen ein Formular. Füllen Sie es bitte in Druckbuchstaben aus." },
      {
        sp: "TY",
        hintIt: "Wie lange dauert es, bis ich die Meldebescheinigung bekomme?",
        accept: [
          "wie lange dauert es bis ich die meldebescheinigung bekomme",
          "wann bekomme ich die meldebescheinigung",
          "wie lange dauert es bis ich die bescheinigung bekomme"
        ]
      },
      { sp: "A", it: "Die bekommen Sie sofort, gleich hier am Schalter." }
    ]
  },
  {
    id: "diskussion",
    cefr: "B2",
    icon: "🗣️",
    titleIt: "Eine Diskussion unter Freunden",
    turns: [
      { sp: "A", it: "Ich finde, das Homeoffice hat den Teamgeist kaputtgemacht. Wie siehst du das?" },
      {
        sp: "TY",
        hintIt: "Teilweise gebe ich dir recht, aber es hat auch den Stress durch das Pendeln verringert.",
        accept: [
          "teilweise gebe ich dir recht aber es hat auch den stress durch das pendeln verringert",
          "da gebe ich dir teilweise recht aber es hat auch den stress durch das pendeln verringert",
          "teilweise schon aber es hat auch den stress durch das pendeln verringert"
        ]
      },
      { sp: "A", it: "Schon, aber glaubst du nicht, dass junge Leute weniger lernen, wenn sie nicht im Büro sind?" },
      {
        sp: "TY",
        hintIt: "Das hängt davon ab, wie die Firma die Einarbeitung organisiert.",
        accept: [
          "das hängt davon ab wie die firma die einarbeitung organisiert",
          "es hängt davon ab wie die firma die einarbeitung organisiert",
          "das kommt darauf an wie die firma die einarbeitung organisiert"
        ]
      },
      { sp: "A", it: "Da hast du recht. Aber das Hybridmodell ist für mich das Schlechteste aus beiden Welten." },
      {
        sp: "TY",
        hintIt: "Da bin ich überhaupt nicht deiner Meinung: Beim Hybridmodell kann man je nach Aufgabe entscheiden.",
        accept: [
          "da bin ich überhaupt nicht deiner meinung beim hybridmodell kann man je nach aufgabe entscheiden",
          "das sehe ich ganz anders beim hybridmodell kann man je nach aufgabe entscheiden",
          "da bin ich ganz anderer meinung beim hybridmodell kann man je nach aufgabe entscheiden"
        ]
      }
    ]
  },
  {
    id: "restaurant-entscheidungen",
    cefr: "A2",
    icon: "🍽️",
    titleIt: "Am Tisch, mit ein paar Entscheidungen",
    turns: [
      { sp: "A", it: "Guten Abend. Haben Sie reserviert?" },
      {
        sp: "TY",
        opts: [
          {
            hintIt: "Ja, auf den Namen Weber.",
            accept: ["ja auf den namen weber", "ja wir haben auf den namen weber reserviert", "auf den namen weber"],
            go: "reserviert"
          },
          {
            hintIt: "Nein, wir sind zu zweit. Haben Sie noch einen Tisch frei?",
            accept: ["nein wir sind zu zweit haben sie noch einen tisch frei", "nein wir sind zu zweit", "wir sind zu zweit haben sie noch einen tisch frei"],
            go: "ohne"
          }
        ]
      },
      { sp: "A", id: "reserviert", it: "Sehr schön. Ihr Tisch ist am Fenster. Bitte hier entlang.", go: "karte" },
      { sp: "A", id: "ohne", it: "Ein Tisch für zwei ist noch frei, ganz hinten im Raum. Bitte sehr." },
      { sp: "A", id: "karte", it: "Hier ist die Speisekarte. Möchten Sie schon etwas zu trinken bestellen?" },
      {
        sp: "TY",
        hintIt: "Eine Flasche stilles Wasser, bitte.",
        accept: ["eine flasche stilles wasser bitte", "eine flasche stilles wasser", "ich hätte gern eine flasche stilles wasser"]
      },
      { sp: "A", it: "Stilles Wasser, kommt sofort. Und was möchten Sie essen?" },
      {
        sp: "TY",
        opts: [
          {
            hintIt: "Für mich das Schnitzel, bitte.",
            accept: ["für mich das schnitzel bitte", "ich nehme das schnitzel", "das schnitzel bitte"],
            go: "schnitzel"
          },
          {
            hintIt: "Für mich die Gemüsepfanne, bitte. Ich esse kein Fleisch.",
            accept: ["für mich die gemüsepfanne bitte ich esse kein fleisch", "ich nehme die gemüsepfanne", "die gemüsepfanne bitte"],
            go: "vegetarisch"
          }
        ]
      },
      { sp: "A", id: "schnitzel", it: "Das Schnitzel ist heute sehr gut, ganz frisch paniert.", go: "nachtisch" },
      { sp: "A", id: "vegetarisch", it: "Gern. Das Gemüse dafür kommt vom Markt nebenan." },
      { sp: "A", id: "nachtisch", it: "Möchten Sie zum Schluss noch einen Nachtisch? Der Apfelstrudel ist hausgemacht." },
      {
        sp: "TY",
        opts: [
          {
            hintIt: "Ja, den Apfelstrudel, bitte.",
            accept: ["ja den apfelstrudel bitte", "ja ich nehme den apfelstrudel", "den apfelstrudel bitte"],
            go: "mit-strudel"
          },
          {
            hintIt: "Nein, danke. Nur einen Kaffee, bitte.",
            accept: ["nein danke nur einen kaffee bitte", "nein danke nur einen kaffee", "nur einen kaffee bitte"],
            go: "nur-kaffee"
          }
        ]
      },
      { sp: "A", id: "mit-strudel", it: "Gute Wahl, kommt sofort.", go: "rechnung-strudel" },
      { sp: "A", id: "nur-kaffee", it: "Einen Kaffee, sehr gern.", go: "rechnung-kaffee" },
      { sp: "A", id: "rechnung-strudel", it: "Hier ist die Rechnung: Hauptgericht, Wasser und Apfelstrudel. Das macht vierundzwanzig Euro.", go: "zahlen" },
      { sp: "A", id: "rechnung-kaffee", it: "Hier ist die Rechnung: Hauptgericht, Wasser und Kaffee. Das macht einundzwanzig Euro." },
      {
        sp: "TY",
        id: "zahlen",
        hintIt: "Kann ich mit Karte zahlen?",
        accept: ["kann ich mit karte zahlen", "kann ich mit karte bezahlen", "kann ich hier mit karte zahlen"]
      },
      { sp: "A", it: "Natürlich, hier ist das Kartengerät. Vielen Dank und einen schönen Abend!" }
    ]
  },
  {
    id: "zug-verpasst",
    cefr: "A2",
    icon: "🚉",
    titleIt: "Am Schalter, nach einem verpassten Zug",
    turns: [
      { sp: "A", it: "Guten Tag, bitte schön?" },
      {
        sp: "TY",
        opts: [
          {
            hintIt: "Ich habe den ICE nach Köln um neun Uhr zwanzig verpasst.",
            accept: ["ich habe den ice nach köln um neun uhr zwanzig verpasst", "ich habe den zug nach köln um neun uhr zwanzig verpasst", "ich habe meinen zug nach köln verpasst"],
            go: "verpasst"
          },
          {
            hintIt: "Mein ICE nach Köln ist ausgefallen.",
            accept: ["mein ice nach köln ist ausgefallen", "mein zug nach köln ist ausgefallen", "der ice nach köln ist ausgefallen"],
            go: "ausgefallen"
          }
        ]
      },
      { sp: "A", id: "verpasst", it: "Ihr Sparpreis gilt leider nur für den gebuchten Zug. Sie brauchen eine neue Fahrkarte." },
      { sp: "A", it: "Der nächste ICE nach Köln fährt um elf Uhr vierzig. Die Fahrkarte kostet neununddreißig Euro neunundneunzig.", go: "bestaetigen" },
      { sp: "A", id: "ausgefallen", it: "Das tut mir leid. Wenn der Zug ausfällt, dürfen Sie auch einen anderen Zug nehmen." },
      { sp: "A", it: "Der nächste ICE nach Köln fährt um elf Uhr vierzig. Sie zahlen nichts extra." },
      {
        sp: "TY",
        id: "bestaetigen",
        opts: [
          {
            hintIt: "Gut, dann nehme ich den Zug um elf Uhr vierzig.",
            accept: ["gut dann nehme ich den zug um elf uhr vierzig", "gut dann nehme ich den", "ich nehme den zug um elf uhr vierzig"],
            go: "elf"
          },
          {
            hintIt: "Gibt es nicht etwas Früheres?",
            accept: ["gibt es nicht etwas früheres", "gibt es nichts früheres", "gibt es einen früheren zug"],
            go: "frueher"
          }
        ]
      },
      { sp: "A", id: "elf", it: "In Ordnung. Er fährt von Gleis sieben.", go: "gruss" },
      { sp: "A", id: "frueher", it: "Früher fährt nur ein Intercity um zehn Uhr fünfzehn, aber Sie müssen einmal umsteigen." },
      {
        sp: "TY",
        opts: [
          {
            hintIt: "Das ist mir egal, ich nehme den Intercity.",
            accept: ["das ist mir egal ich nehme den intercity", "ich nehme den intercity", "gut ich nehme den intercity"],
            go: "intercity"
          },
          {
            hintIt: "Dann warte ich lieber auf den ICE um elf Uhr vierzig.",
            accept: ["dann warte ich lieber auf den ice um elf uhr vierzig", "dann warte ich lieber", "ich warte auf den ice um elf uhr vierzig"],
            go: "elf"
          }
        ]
      },
      { sp: "A", id: "intercity", it: "Intercity um zehn Uhr fünfzehn, Gleis drei." },
      { sp: "A", id: "gruss", it: "Ich drucke Ihnen die Verbindung aus. Gute Reise!" },
      {
        sp: "TY",
        hintIt: "Vielen Dank, schönen Tag noch!",
        accept: ["vielen dank schönen tag noch", "danke schönen tag noch", "vielen dank auf wiedersehen"]
      },
      { sp: "A", it: "Auf Wiedersehen." }
    ]
  },
  {
    id: "wohnung-ansehen",
    cefr: "B1",
    icon: "🔑",
    titleIt: "Eine Wohnung ansehen",
    turns: [
      { sp: "A", it: "So, das ist das Wohnzimmer. Was meinen Sie?" },
      {
        sp: "TY",
        opts: [
          {
            hintIt: "Es gefällt mir, aber es ist kleiner, als es auf den Fotos aussah.",
            accept: ["es gefällt mir aber es ist kleiner als es auf den fotos aussah", "es ist kleiner als es auf den fotos aussah", "es gefällt mir aber es ist kleiner als auf den fotos"],
            go: "klein"
          },
          {
            hintIt: "Es ist sehr hell, das gefällt mir.",
            accept: ["es ist sehr hell das gefällt mir", "es ist hell das gefällt mir", "das gefällt mir es ist sehr hell"],
            go: "hell"
          }
        ]
      },
      { sp: "A", id: "klein", it: "Fotos täuschen immer ein bisschen. Aber die Wohnung hat fünfunddreißig Quadratmeter, und kein Platz geht für lange Flure verloren.", go: "kosten" },
      { sp: "A", id: "hell", it: "Ja, die Fenster gehen nach Süden. Im Winter muss man kaum heizen." },
      { sp: "A", id: "kosten", it: "Die Nebenkosten liegen bei hundert Euro im Monat, die Heizung ist dabei." },
      { sp: "A", it: "Die Kaltmiete beträgt sechshundertfünfzig Euro." },
      {
        sp: "TY",
        opts: [
          {
            hintIt: "Lässt sich über die Miete reden?",
            accept: ["lässt sich über die miete reden", "kann man über die miete reden", "kann man über die miete verhandeln"],
            go: "verhandeln"
          },
          {
            hintIt: "Ab wann ist die Wohnung frei?",
            accept: ["ab wann ist die wohnung frei", "ab wann ist sie frei", "wann ist die wohnung frei"],
            go: "frei"
          }
        ]
      },
      { sp: "A", id: "verhandeln", it: "Der Vermieter geht auf sechshundert Euro herunter, wenn Sie den Vertrag noch diese Woche unterschreiben." },
      { sp: "A", it: "Frei ist die Wohnung ab dem Ersten des nächsten Monats.", go: "entscheidung" },
      { sp: "A", id: "frei", it: "Ab dem Ersten des nächsten Monats. Die Miete bleibt aber bei sechshundertfünfzig Euro." },
      {
        sp: "TY",
        id: "entscheidung",
        opts: [
          {
            hintIt: "Ich nehme die Wohnung.",
            accept: ["ich nehme die wohnung", "gut ich nehme die wohnung", "ja ich nehme sie"],
            go: "nehmen"
          },
          {
            hintIt: "Ich überlege es mir und sage Ihnen Bescheid.",
            accept: ["ich überlege es mir und sage ihnen bescheid", "ich überlege es mir noch", "ich sage ihnen bescheid"],
            go: "ueberlegen"
          }
        ]
      },
      { sp: "A", id: "nehmen", it: "Sehr schön. Ich schicke Ihnen den Mietvertrag bis morgen per E-Mail." },
      { sp: "A", it: "Wir hören in den nächsten Tagen voneinander.", go: "abschied" },
      { sp: "A", id: "ueberlegen", it: "Natürlich, überlegen Sie in Ruhe. Meine Nummer haben Sie ja." },
      {
        sp: "TY",
        id: "abschied",
        hintIt: "Danke, auf Wiedersehen.",
        accept: ["danke auf wiedersehen", "vielen dank auf wiedersehen", "danke schön auf wiedersehen"]
      },
      { sp: "A", it: "Auf Wiedersehen." }
    ]
  },
  {
    id: "arzt-halsschmerzen",
    cefr: "B1",
    icon: "🩺",
    titleIt: "In der Praxis, mit Halsschmerzen",
    turns: [
      { sp: "A", it: "Guten Tag, nehmen Sie Platz. Was kann ich für Sie tun?" },
      {
        sp: "TY",
        opts: [
          {
            hintIt: "Ich habe seit drei Tagen Halsschmerzen und Fieber.",
            accept: ["ich habe seit drei tagen halsschmerzen und fieber", "seit drei tagen halsschmerzen und fieber", "ich habe seit drei tagen fieber und halsschmerzen"],
            go: "fieber"
          },
          {
            hintIt: "Ich habe seit drei Tagen Halsschmerzen, aber kein Fieber.",
            accept: ["ich habe seit drei tagen halsschmerzen aber kein fieber", "seit drei tagen halsschmerzen aber kein fieber", "ich habe halsschmerzen seit drei tagen aber kein fieber"],
            go: "ohne-fieber"
          }
        ]
      },
      { sp: "A", id: "fieber", it: "Drei Tage mit Fieber. Wie hoch war es denn?" },
      { sp: "TY", hintIt: "Achtunddreißig Komma fünf.", accept: ["achtunddreißig komma fünf", "es war achtunddreißig komma fünf"] },
      { sp: "A", it: "Das ist schon einiges. Machen Sie bitte den Mund auf.", go: "untersuchung" },
      { sp: "A", id: "ohne-fieber", it: "Ohne Fieber, das ist schon mal gut. Machen Sie bitte den Mund auf." },
      { sp: "A", id: "untersuchung", it: "Der Hals ist stark gerötet. Tut es beim Schlucken weh?" },
      {
        sp: "TY",
        opts: [
          {
            hintIt: "Ja, das Schlucken tut sehr weh.",
            accept: ["ja das schlucken tut sehr weh", "ja es tut beim schlucken sehr weh", "ja ich kann kaum schlucken"],
            go: "abstrich"
          },
          {
            hintIt: "Nein, es kratzt nur ein bisschen.",
            accept: ["nein es kratzt nur ein bisschen", "nein es kratzt nur", "nein es kratzt nur ein wenig"],
            go: "gurgeln"
          }
        ]
      },
      { sp: "A", id: "abstrich", it: "Dann mache ich einen Abstrich. Je nach Ergebnis entscheiden wir, ob Sie ein Antibiotikum brauchen.", go: "ruhe" },
      { sp: "A", id: "gurgeln", it: "Das klingt nach einer Erkältung, im Moment sehe ich keinen Grund für ein Antibiotikum. Gurgeln Sie mit Salzwasser und trinken Sie viel Warmes." },
      { sp: "A", id: "ruhe", it: "Auf jeden Fall brauchen Sie Ruhe. Wenn es in drei Tagen nicht besser ist, kommen Sie wieder." },
      {
        sp: "TY",
        opts: [
          {
            hintIt: "Muss ich zu Hause bleiben, oder kann ich arbeiten gehen?",
            accept: ["muss ich zu hause bleiben oder kann ich arbeiten gehen", "muss ich zu hause bleiben", "kann ich arbeiten gehen"],
            go: "krankschreibung"
          },
          {
            hintIt: "Darf ich Sport machen?",
            accept: ["darf ich sport machen", "kann ich sport machen", "darf ich joggen gehen"],
            go: "sport"
          }
        ]
      },
      { sp: "A", id: "krankschreibung", it: "Ich schreibe Sie drei Tage krank. Die Arbeitsunfähigkeitsbescheinigung geht elektronisch an Ihre Krankenkasse, Ihrem Arbeitgeber müssen Sie aber selbst Bescheid sagen.", go: "gruss" },
      { sp: "A", id: "sport", it: "Sport lieber nicht, solange der Hals so ist. Spazierengehen ist in Ordnung." },
      { sp: "A", id: "gruss", it: "Gute Besserung!" },
      {
        sp: "TY",
        hintIt: "Danke, auf Wiedersehen.",
        accept: ["danke auf wiedersehen", "vielen dank auf wiedersehen", "danke schön auf wiedersehen"]
      },
      { sp: "A", it: "Auf Wiedersehen." }
    ]
  }
];
