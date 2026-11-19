/* ============================================================
   Language-neutral layer: German (de-DE), structure and answer keys.
   Learner-language texts live in data/i18n/<lang>/pfl-06.js.
   pfl-u06 belongs to the nursing track (pseudo-level PFL);
   every lesson carries its real CEFR level.
   ============================================================ */
LINGUAI.addUnits("PFL", [
  {
    id: "pfl-u06",
    icon: "📋",
    titleIt: "Dienstübergabe und Pflegebericht",
    lessons: [
      {
        id: "pfl-u06-l1",
        tags: ["g-praeteritum", "g-konnektoren"],
        cefr: "B2",
        titleIt: "Die Übergabe",
        grammar: {
          examples: [
            { it: "Frau Keller war in der Nacht unruhig." },
            { it: "Sie hatte gegen drei Uhr Bauchschmerzen, deshalb habe ich die Ärztin informiert." },
            { it: "Herr Brandt konnte nicht schlafen, weil er Schmerzen hatte." },
            { it: "Der Blutdruck war am Abend erhöht, trotzdem fühlte sie sich wohl." },
            { it: "Außerdem wollte er nichts essen." },
            { it: "Die Nacht verlief ruhig." }
          ]
        },
        vocab: [
          { it: "die Übergabe", plural: "die Übergaben", ex: "Die Übergabe beginnt um halb zwei." },
          { it: "der Frühdienst", plural: "die Frühdienste", ex: "Im Frühdienst sind wir heute zu dritt." },
          { it: "der Spätdienst", plural: "die Spätdienste", ex: "Der Spätdienst übernimmt um halb zwei." },
          { it: "der Nachtdienst", plural: "die Nachtdienste", ex: "Der Nachtdienst übergibt an den Frühdienst." },
          { it: "übergeben", ex: "Ich übergebe dir jetzt Zimmer zwölf." },
          { it: "unruhig", ex: "Frau Keller war in der Nacht unruhig." },
          { it: "die Besonderheit", plural: "die Besonderheiten", ex: "Gibt es sonst noch Besonderheiten?" },
          { it: "der Zustand", plural: "die Zustände", ex: "Ihr Zustand ist seit gestern stabil." },
          { it: "stabil", ex: "Die Werte sind stabil." },
          { it: "deshalb", ex: "Sie hatte Schmerzen, deshalb habe ich die Ärztin informiert." },
          { it: "trotzdem", ex: "Er war müde, trotzdem wollte er aufstehen." },
          { it: "außerdem", ex: "Außerdem hat sie wenig getrunken." }
        ],
        dialogue: {
          titleIt: "Übergabe am Morgen",
          lines: [
            { who: "👩‍⚕️", it: "Guten Morgen. Fangen wir mit Zimmer zwölf an?" },
            { who: "🧑‍⚕️", it: "Ja, gern. Wie war die Nacht bei Frau Keller?" },
            { who: "👩‍⚕️", it: "Frau Keller war unruhig. Gegen drei Uhr hatte sie Bauchschmerzen, deshalb habe ich die diensthabende Ärztin informiert." },
            { who: "🧑‍⚕️", it: "Und dann?" },
            { who: "👩‍⚕️", it: "Die Ärztin kam und hat sie untersucht. Danach konnte Frau Keller wieder schlafen." },
            { who: "🧑‍⚕️", it: "Gibt es sonst noch Besonderheiten?" },
            { who: "👩‍⚕️", it: "Sie hat wenig getrunken. Außerdem war der Blutdruck am Abend erhöht, trotzdem fühlte sie sich wohl." },
            { who: "🧑‍⚕️", it: "Gut, dann messe ich den Blutdruck gleich noch einmal." }
          ]
        },
        exercises: [
          { t: "mcq", a: 1 },
          { t: "conj", verb: "schlafen", tense: "praet", persons: [0, 1, 2, 3, 4, 5] },
          { t: "fill", a: ["deshalb", "darum", "daher", "deswegen", "folglich", "also"] },
          {
            t: "cloze",
            text: "Der Blutdruck {{1}} am Abend erhöht, {{2}} fühlte sie sich wohl.",
            gaps: [["war"], ["trotzdem", "dennoch"]]
          },
          { t: "multi", a: [0, 2, 3] },
          {
            t: "gender",
            opts: ["der", "die", "das"],
            items: [
              { it: "Übergabe", a: "die" },
              { it: "Frühdienst", a: "der" },
              { it: "Spätdienst", a: "der" },
              { it: "Nachtdienst", a: "der" },
              { it: "Besonderheit", a: "die" },
              { it: "Zustand", a: "der" }
            ]
          },
          {
            t: "match",
            pairs: [{ it: "deshalb" }, { it: "trotzdem" }, { it: "außerdem" }, { it: "weil" }]
          },
          {
            t: "order",
            tokens: ["Sie", "hatte", "Schmerzen,", "deshalb", "habe", "ich", "die", "Ärztin", "informiert"],
            a: ["Sie hatte Schmerzen, deshalb habe ich die Ärztin informiert"]
          },
          {
            t: "trans",
            dir: "toIt",
            a: ["Die Nacht war ruhig", "Die Nacht verlief ruhig", "Die Nacht ist ruhig verlaufen", "Die Nacht ist ruhig gewesen"]
          },
          {
            t: "dialogue",
            lines: [
              { sp: "A", it: "Wie war die Nacht bei Herrn Brandt?" },
              {
                sp: "TY",
                choices: [
                  "Er war unruhig, weil er Schmerzen hatte.",
                  "Er war unruhig, weil er hatte Schmerzen.",
                  "Er hatte unruhig, weil er Schmerzen war."
                ],
                a: 0
              },
              { sp: "A", it: "Hast du die Ärztin informiert?" },
              {
                sp: "TY",
                choices: [
                  "Ja, er hatte starke Schmerzen, deshalb ich habe sie angerufen.",
                  "Ja, er hatte starke Schmerzen, deshalb habe ich sie angerufen.",
                  "Ja, er hatte starke Schmerzen, weil habe ich sie angerufen."
                ],
                a: 1
              },
              { sp: "A", it: "Gibt es sonst noch Besonderheiten?" },
              {
                sp: "TY",
                choices: ["Außerdem er hat wenig getrunken.", "Außerdem hat er wenig getrinkt.", "Außerdem hat er wenig getrunken."],
                a: 2
              }
            ]
          },
          {
            t: "listen",
            it: "Gegen drei Uhr hatte sie Bauchschmerzen, deshalb habe ich die diensthabende Ärztin informiert."
          },
          { t: "speak", it: "Die Nacht war ruhig, es gibt keine Besonderheiten." }
        ]
      },
      {
        id: "pfl-u06-l2",
        tags: ["g-nominalstil", "g-passiv"],
        cefr: "B2",
        titleIt: "Der Pflegebericht",
        grammar: {
          examples: [
            { it: "Die Patientin verweigerte heute Mittag das Essen." },
            { it: "Verweigerung der Nahrungsaufnahme am Mittag." },
            { it: "Der Verband wurde um zehn Uhr gewechselt." },
            { it: "Die Ärztin wurde informiert." },
            { it: "Nach Rücksprache mit der Ärztin wurde die Mobilisation verschoben." },
            { it: "Zur Sturzprophylaxe wurde das Bett tief gestellt." }
          ]
        },
        vocab: [
          { it: "der Pflegebericht", plural: "die Pflegeberichte", ex: "Den Pflegebericht schreibe ich am Ende des Dienstes." },
          { it: "die Dokumentation", plural: "die Dokumentationen", ex: "Die Dokumentation muss vollständig sein." },
          { it: "der Eintrag", plural: "die Einträge", ex: "Neben jedem Eintrag steht ein Kürzel." },
          { it: "die Beobachtung", plural: "die Beobachtungen", ex: "Im Bericht stehen Beobachtungen, keine Bewertungen." },
          { it: "die Nahrungsaufnahme", plural: "-", ex: "Die Nahrungsaufnahme war am Abend gering." },
          { it: "die Flüssigkeitsaufnahme", plural: "-", ex: "Die Flüssigkeitsaufnahme wird genau beobachtet." },
          { it: "verweigern", ex: "Der Patient verweigerte das Abendessen." },
          { it: "die Verweigerung", plural: "die Verweigerungen", ex: "Verweigerung der Nahrungsaufnahme am Mittag." },
          { it: "die Rücksprache", plural: "die Rücksprachen", ex: "Nach Rücksprache mit der Ärztin wurde die Mobilisation verschoben." },
          { it: "das Befinden", plural: "-", ex: "Das Befinden der Patientin hat sich gebessert." },
          { it: "unauffällig", ex: "Die Wunde ist unauffällig." },
          { it: "die Ausscheidung", plural: "die Ausscheidungen", ex: "Die Ausscheidung war unauffällig." }
        ],
        dialogue: {
          titleIt: "Was gehört in den Bericht?",
          lines: [
            { who: "🧑‍⚕️", it: "Kannst du kurz auf meinen Bericht schauen? Ich habe geschrieben: Frau Keller hat heute Mittag das Essen verweigert." },
            { who: "👩‍⚕️", it: "Das stimmt so. Im Bericht schreibt man oft kürzer: Verweigerung der Nahrungsaufnahme am Mittag." },
            { who: "🧑‍⚕️", it: "Und muss ich schreiben, wer die Ärztin angerufen hat?" },
            { who: "👩‍⚕️", it: "Du schreibst einfach: Ärztin informiert. Dein Kürzel steht ja beim Eintrag." },
            { who: "🧑‍⚕️", it: "Darf ich auch schreiben, dass sie schlecht gelaunt war?" },
            { who: "👩‍⚕️", it: "Schreib lieber, was du gesehen und gehört hast: Patientin weinte und sprach wenig." },
            { who: "🧑‍⚕️", it: "Verstanden. Beobachtungen, keine Bewertungen." }
          ]
        },
        exercises: [
          { t: "mcq", a: 1 },
          { t: "conj", verb: "werden", tense: "praet", persons: [0, 1, 2, 3, 4, 5] },
          { t: "fill", a: ["wurde"] },
          {
            t: "cloze",
            text: "Der Verband {{1}} um zehn Uhr {{2}}.",
            gaps: [["wurde"], ["gewechselt"]]
          },
          {
            t: "match",
            pairs: [{ it: "die Nahrungsaufnahme" }, { it: "die Flüssigkeitsaufnahme" }, { it: "die Ausscheidung" }, { it: "die Rücksprache" }]
          },
          {
            t: "gender",
            opts: ["der", "die", "das"],
            items: [
              { it: "Pflegebericht", a: "der" },
              { it: "Befinden", a: "das" },
              { it: "Eintrag", a: "der" },
              { it: "Beobachtung", a: "die" },
              { it: "Rücksprache", a: "die" },
              { it: "Dokumentation", a: "die" }
            ]
          },
          { t: "multi", a: [0, 2, 3] },
          {
            t: "order",
            tokens: ["Nach", "Rücksprache", "mit", "der", "Ärztin", "wurde", "die", "Mobilisation", "verschoben"],
            a: ["Nach Rücksprache mit der Ärztin wurde die Mobilisation verschoben"]
          },
          {
            t: "trans",
            dir: "toIt",
            a: [
              "Die Ärztin wurde informiert",
              "Die Ärztin ist informiert worden",
              "Ärztin informiert",
              "Der Arzt wurde informiert",
              "Der Arzt ist informiert worden",
              "Arzt informiert"
            ]
          },
          {
            t: "dialogue",
            lines: [
              { sp: "A", it: "Frau Keller hat heute Mittag das Essen verweigert. Wie schreibe ich das?" },
              {
                sp: "TY",
                choices: [
                  "Verweigerung die Nahrungsaufnahme am Mittag.",
                  "Verweigerung der Nahrungsaufnahme am Mittag.",
                  "Verweigert der Nahrungsaufnahme am Mittag."
                ],
                a: 1
              },
              { sp: "A", it: "Und dass ich die Ärztin angerufen habe?" },
              {
                sp: "TY",
                choices: ["Ärztin informiert.", "Ärztin geinformiert.", "Ärztin informieren."],
                a: 0
              },
              { sp: "A", it: "Kann ich schreiben, dass sie schlecht gelaunt war?" },
              {
                sp: "TY",
                choices: [
                  "Schreib lieber, was du beobachtet hast: Sie sprechte wenig und weinte.",
                  "Schreib lieber, was du beobachtest hast: Sie sprach wenig und weinte.",
                  "Schreib lieber, was du beobachtet hast: Sie sprach wenig und weinte."
                ],
                a: 2
              }
            ]
          },
          {
            t: "listen",
            it: "Das stimmt so. Im Bericht schreibt man oft kürzer: Verweigerung der Nahrungsaufnahme am Mittag."
          },
          { t: "speak", it: "Die Ärztin wurde informiert." }
        ]
      },
      {
        id: "pfl-u06-l3",
        tags: ["g-nebensatz-final"],
        cefr: "B2",
        titleIt: "Die Pflegeplanung",
        grammar: {
          examples: [
            { it: "Wir lagern Frau Keller regelmäßig um, damit kein Dekubitus entsteht." },
            { it: "Wir bieten ihr oft Tee an, damit sie mehr trinkt." },
            { it: "Herr Brandt geht täglich mit dem Rollator, um mobil zu bleiben." },
            { it: "Wir führen ein Trinkprotokoll, um die Trinkmenge zu kontrollieren." },
            { it: "Ressource: Die Patientin kann den Becher selbst halten." },
            { it: "Pflegeziel: Die Patientin trinkt ausreichend." }
          ]
        },
        vocab: [
          { it: "die Pflegeplanung", plural: "die Pflegeplanungen", ex: "Heute überarbeiten wir die Pflegeplanung." },
          { it: "das Pflegeproblem", plural: "die Pflegeprobleme", ex: "Ihr Pflegeproblem: Sie trinkt zu wenig." },
          { it: "die Ressource", plural: "die Ressourcen", ex: "Ihre Ressource: Sie kann allein essen." },
          { it: "das Pflegeziel", plural: "die Pflegeziele", ex: "Das Pflegeziel muss man überprüfen können." },
          { it: "die Maßnahme", plural: "die Maßnahmen", ex: "Welche Maßnahmen planen wir?" },
          { it: "die Evaluation", plural: "die Evaluationen", ex: "Bei der Evaluation prüfen wir, ob wir das Ziel erreicht haben." },
          { it: "das Risiko", plural: "die Risiken", ex: "Er liegt viel im Bett, deshalb ist das Risiko für einen Dekubitus hoch." },
          { it: "vermeiden", ex: "Wir lagern ihn regelmäßig um, um einen Dekubitus zu vermeiden." },
          { it: "erhalten", ex: "Wir möchten ihre Selbstständigkeit erhalten." },
          { it: "fördern", ex: "Wir fördern seine Mobilität." },
          { it: "die Trinkmenge", plural: "die Trinkmengen", ex: "Die Trinkmenge steht im Trinkprotokoll." },
          { it: "das Trinkprotokoll", plural: "die Trinkprotokolle", ex: "Wir führen ein Trinkprotokoll, um die Trinkmenge zu kontrollieren." }
        ],
        dialogue: {
          titleIt: "Die Pflegeplanung von Frau Keller",
          lines: [
            { who: "👩‍⚕️", it: "Wir überarbeiten heute die Pflegeplanung von Frau Keller. Was ist ihr Pflegeproblem?" },
            { who: "🧑‍⚕️", it: "Sie trinkt zu wenig. Es besteht ein Risiko für einen Flüssigkeitsmangel." },
            { who: "👩‍⚕️", it: "Richtig. Und welche Ressourcen hat sie?" },
            { who: "🧑‍⚕️", it: "Sie kann den Becher selbst halten, und sie trinkt gern Tee." },
            { who: "👩‍⚕️", it: "Gut. Welche Maßnahmen planen wir?" },
            { who: "🧑‍⚕️", it: "Wir bieten ihr regelmäßig Tee an, damit sie mehr trinkt. Außerdem führen wir ein Trinkprotokoll, um die Trinkmenge zu kontrollieren." },
            { who: "👩‍⚕️", it: "Sehr gut. Und das Pflegeziel?" },
            { who: "🧑‍⚕️", it: "Frau Keller trinkt ausreichend. Die genaue Menge legen wir mit der Ärztin fest." }
          ]
        },
        exercises: [
          { t: "mcq", a: 2 },
          { t: "fill", a: ["um"] },
          {
            t: "cloze",
            text: "Wir bieten ihr oft Tee an, {{1}} sie mehr trinkt. Er geht täglich mit dem Rollator, um mobil zu {{2}}.",
            gaps: [["damit"], ["bleiben"]]
          },
          { t: "multi", a: [0, 2, 4] },
          {
            t: "match",
            pairs: [{ it: "das Pflegeproblem" }, { it: "die Ressource" }, { it: "das Pflegeziel" }, { it: "die Maßnahme" }]
          },
          {
            t: "gender",
            opts: ["der", "die", "das"],
            items: [
              { it: "Pflegeplanung", a: "die" },
              { it: "Pflegeproblem", a: "das" },
              { it: "Ressource", a: "die" },
              { it: "Pflegeziel", a: "das" },
              { it: "Risiko", a: "das" },
              { it: "Trinkprotokoll", a: "das" }
            ]
          },
          {
            t: "order",
            tokens: ["Wir", "bieten", "ihr", "oft", "Tee", "an,", "damit", "sie", "mehr", "trinkt"],
            a: ["Wir bieten ihr oft Tee an, damit sie mehr trinkt"]
          },
          {
            t: "trans",
            dir: "toIt",
            a: [
              "Wir mobilisieren ihn, damit er selbstständig bleibt",
              "Wir mobilisieren ihn, damit er selbständig bleibt"
            ]
          },
          {
            t: "dialogue",
            lines: [
              { sp: "A", it: "Was ist das Pflegeproblem von Herrn Brandt?" },
              {
                sp: "TY",
                choices: [
                  "Er bewegt sich wenig, deshalb besteht ein Risiko für einen Dekubitus.",
                  "Er bewegt sich wenig, deshalb ein Risiko für einen Dekubitus besteht.",
                  "Er bewegt wenig sich, deshalb besteht ein Risiko für einen Dekubitus."
                ],
                a: 0
              },
              { sp: "A", it: "Und welche Maßnahme planen wir?" },
              {
                sp: "TY",
                choices: [
                  "Wir lagern ihn regelmäßig um, um kein Dekubitus entsteht.",
                  "Wir lagern ihn regelmäßig um, damit kein Dekubitus entsteht.",
                  "Wir lagern ihn regelmäßig um, damit kein Dekubitus zu entstehen."
                ],
                a: 1
              },
              { sp: "A", it: "Welche Ressource hat er?" },
              {
                sp: "TY",
                choices: [
                  "Er kann sich am Bettgitter selbst gedreht.",
                  "Er kann sich am Bettgitter selbst zu drehen.",
                  "Er kann sich am Bettgitter selbst drehen."
                ],
                a: 2
              }
            ]
          },
          {
            t: "listen",
            it: "Wir bieten ihr regelmäßig Tee an, damit sie mehr trinkt."
          },
          { t: "speak", it: "Wir lagern Frau Keller regelmäßig um, damit kein Dekubitus entsteht." }
        ]
      },
      {
        id: "pfl-u06-l4",
        tags: ["g-register"],
        cefr: "B2",
        titleIt: "Abkürzungen im Stationsalltag",
        grammar: {
          examples: [
            { it: "AZ reduziert, EZ gut." },
            { it: "VZ o.B." },
            { it: "RR und Puls kontrolliert, Ärztin informiert." },
            { it: "BZ vor dem Mittagessen gemessen." },
            { it: "Tabletten p.o. eingenommen." },
            { it: "Schmerzmittel b.B. laut ärztlicher Anordnung." }
          ]
        },
        vocab: [
          { it: "der Allgemeinzustand", plural: "-", ex: "Der Allgemeinzustand ist reduziert." },
          { it: "der Ernährungszustand", plural: "-", ex: "Der Ernährungszustand ist gut." },
          { it: "ohne Befund", ex: "Die Vitalzeichen sind ohne Befund." },
          { it: "per os", ex: "Die Tabletten nimmt sie per os ein." },
          { it: "reduziert", ex: "Seit gestern ist ihr Allgemeinzustand reduziert." },
          { it: "die Bedarfsmedikation", plural: "-", ex: "Die Bedarfsmedikation steht in der Kurve." },
          { it: "die Kurve", plural: "die Kurven", ex: "Alle Werte stehen in der Kurve." },
          { it: "die Patientenakte", plural: "die Patientenakten", ex: "Die Patientenakte liegt im Stationszimmer." },
          { it: "die Abkürzung", plural: "die Abkürzungen", ex: "Mit dem Patienten sprechen wir ohne Abkürzungen." },
          { it: "das Kürzel", plural: "die Kürzel", ex: "Neben jedem Eintrag steht dein Kürzel." },
          { it: "das Abkürzungsverzeichnis", plural: "die Abkürzungsverzeichnisse", ex: "Jede Station hat ein Abkürzungsverzeichnis." },
          { it: "ausschreiben", ex: "Schreib die Abkürzung im Zweifel aus." }
        ],
        dialogue: {
          titleIt: "Was heißt das?",
          lines: [
            { who: "🧑‍⚕️", it: "Im Bericht steht: AZ reduziert, EZ gut. Was heißt das?" },
            { who: "👩‍⚕️", it: "AZ ist der Allgemeinzustand, EZ der Ernährungszustand. Sie ist also geschwächt, aber gut ernährt." },
            { who: "🧑‍⚕️", it: "Und VZ o.B.?" },
            { who: "👩‍⚕️", it: "Die Vitalzeichen sind ohne Befund, also unauffällig." },
            { who: "🧑‍⚕️", it: "Hier steht noch: Schmerzmittel b.B. Darf ich ihr das einfach geben?" },
            { who: "👩‍⚕️", it: "Nur nach der ärztlichen Anordnung in der Kurve. Bei Bedarf heißt: wenn sie Schmerzen hat, nicht automatisch." },
            { who: "🧑‍⚕️", it: "Und wenn ich eine Abkürzung nicht kenne?" },
            { who: "👩‍⚕️", it: "Dann fragst du nach. Mit dem Patienten sprichst du sowieso ohne Abkürzungen." }
          ]
        },
        exercises: [
          { t: "mcq", a: 1 },
          { t: "fill", a: ["p.o.", "per os"] },
          {
            t: "match",
            pairs: [{ it: "AZ" }, { it: "EZ" }, { it: "BZ" }, { it: "VZ" }]
          },
          {
            t: "gender",
            opts: ["der", "die", "das"],
            items: [
              { it: "Allgemeinzustand", a: "der" },
              { it: "Ernährungszustand", a: "der" },
              { it: "Kurve", a: "die" },
              { it: "Abkürzung", a: "die" },
              { it: "Kürzel", a: "das" },
              { it: "Abkürzungsverzeichnis", a: "das" }
            ]
          },
          { t: "multi", a: [0, 2, 4] },
          {
            t: "cloze",
            text: "Der {{1}} ist reduziert, der {{2}} ist gut.",
            gaps: [["Allgemeinzustand"], ["Ernährungszustand"]]
          },
          {
            t: "order",
            tokens: ["Die", "Vitalzeichen", "sind", "ohne", "Befund"],
            a: ["Die Vitalzeichen sind ohne Befund"]
          },
          {
            t: "trans",
            dir: "toIt",
            a: ["Der Allgemeinzustand ist gut", "Allgemeinzustand gut", "AZ gut"]
          },
          {
            t: "dialogue",
            lines: [
              { sp: "A", it: "In meinem Bericht steht AZ reduziert. Was bedeutet das?" },
              {
                sp: "TY",
                choices: [
                  "Das heißt, Ihr AZ ist reduziert.",
                  "Das heißt, dass Sie im Moment etwas geschwächt sind.",
                  "Das heißt Allgemeinzustand reduziert."
                ],
                a: 1
              },
              { sp: "A", it: "Und was heißt o.B. bei den Vitalzeichen?" },
              {
                sp: "TY",
                choices: [
                  "Ihr Blutdruck, Ihr Puls und Ihre Temperatur sind in Ordnung.",
                  "Ihre VZ sind o.B.",
                  "Das heißt ohne Befund, VZ unauffällig."
                ],
                a: 0
              },
              { sp: "A", it: "Bekomme ich ein Schmerzmittel, wenn es weh tut?" },
              {
                sp: "TY",
                choices: [
                  "Ja, das Schmerzmittel ist b.B.",
                  "Ja, b.B. laut Anordnung.",
                  "Ja, sagen Sie mir Bescheid, wenn Sie Schmerzen haben. Die Ärztin hat ein Schmerzmittel angeordnet."
                ],
                a: 2
              }
            ]
          },
          {
            t: "listen",
            it: "Die Vitalzeichen sind ohne Befund, also unauffällig."
          },
          { t: "speak", it: "Mit dem Patienten sprechen wir ohne Abkürzungen." }
        ]
      }
    ],
    test: {
      id: "pfl-u06-test",
      tags: ["g-praeteritum", "g-nominalstil", "g-nebensatz-final"],
      cefr: "B2",
      titleIt: "Test: Dienstübergabe und Pflegebericht",
      exercises: [
        { t: "mcq", a: 1 },
        { t: "fill", a: ["wurde"] },
        { t: "fill", a: ["damit"] },
        { t: "conj", verb: "haben", tense: "praet", persons: [0, 1, 2, 3, 4, 5] },
        {
          t: "match",
          pairs: [{ it: "AZ" }, { it: "EZ" }, { it: "b.B." }, { it: "p.o." }]
        },
        { t: "multi", a: [0, 2, 4] },
        {
          t: "cloze",
          text: "Sie {{1}} unruhig, {{2}} habe ich die Ärztin informiert.",
          gaps: [["war"], ["deshalb", "darum", "daher", "deswegen", "folglich", "also"]]
        },
        {
          t: "order",
          tokens: ["Wir", "mobilisieren", "ihn", "täglich,", "damit", "er", "selbstständig", "bleibt"],
          a: ["Wir mobilisieren ihn täglich, damit er selbstständig bleibt"]
        },
        {
          t: "gender",
          opts: ["der", "die", "das"],
          items: [
            { it: "Übergabe", a: "die" },
            { it: "Pflegebericht", a: "der" },
            { it: "Pflegeziel", a: "das" },
            { it: "Befinden", a: "das" },
            { it: "Allgemeinzustand", a: "der" },
            { it: "Maßnahme", a: "die" }
          ]
        },
        {
          t: "listen",
          it: "Frau Keller war in der Nacht unruhig, deshalb habe ich die Ärztin informiert."
        },
        { t: "speak", it: "Wir bieten ihr oft Tee an, damit sie mehr trinkt." }
      ]
    }
  }
]);
