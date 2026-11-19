/* ============================================================
   Language-neutral layer: German (de-DE), structure and answer keys.
   Learner-language texts live in data/i18n/<lang>/pfl-07.js.
   pfl-u07 belongs to the nursing track (pseudo-level PFL);
   every lesson carries its real CEFR level.
   ============================================================ */
LINGUAI.addUnits("PFL", [
  {
    id: "pfl-u07",
    icon: "💬",
    titleIt: "Gespräche mit Patienten und Angehörigen",
    lessons: [
      {
        id: "pfl-u07-l1",
        tags: ["g-register", "g-nebensatz-dass"],
        cefr: "B2",
        titleIt: "Einfach erklären",
        grammar: {
          examples: [
            { it: "Morgen früh bekommen Sie eine Magenspiegelung." },
            { it: "Das heißt, dass der Arzt mit einer kleinen Kamera in Ihren Magen schaut." },
            { it: "Wichtig ist, dass Sie ab Mitternacht nichts mehr essen." },
            { it: "Ich sage dem Arzt, dass Sie noch Fragen haben." },
            { it: "Ich möchte sicher sein, dass Sie alles verstanden haben." },
            { it: "Das bespricht der Arzt mit Ihnen." }
          ]
        },
        vocab: [
          { it: "die Diagnose", plural: "die Diagnosen", ex: "Die Diagnose bespricht der Arzt mit Ihnen." },
          { it: "die Prognose", plural: "die Prognosen", ex: "Über die Prognose spricht der Arzt mit dem Patienten." },
          { it: "die Untersuchung", plural: "die Untersuchungen", ex: "Die Untersuchung dauert etwa zwanzig Minuten." },
          { it: "die Magenspiegelung", plural: "die Magenspiegelungen", ex: "Morgen früh bekommen Sie eine Magenspiegelung." },
          { it: "die Gastroskopie", plural: "die Gastroskopien", ex: "Die Gastroskopie ist für morgen früh geplant." },
          { it: "die Aufklärung", plural: "die Aufklärungen", ex: "Die Aufklärung vor der Untersuchung macht der Arzt." },
          { it: "das Fachwort", plural: "die Fachwörter", ex: "Ein Fachwort erkläre ich mit einfachen Worten." },
          { it: "erklären", ex: "Ich erkläre Ihnen kurz, was morgen passiert." },
          { it: "verständlich", ex: "Ich versuche, alles verständlich zu erklären." },
          { it: "nachfragen", ex: "Fragen Sie ruhig nach, wenn etwas unklar ist." },
          { it: "unklar", ex: "Ist noch etwas unklar?" },
          { it: "wiederholen", ex: "Können Sie mit Ihren eigenen Worten wiederholen, was morgen passiert?" }
        ],
        dialogue: {
          titleIt: "Was passiert morgen?",
          lines: [
            { who: "👩‍⚕️", it: "Herr Schulz, ich erkläre Ihnen kurz, was morgen passiert. Morgen früh bekommen Sie eine Magenspiegelung." },
            { who: "🧓", it: "Eine Gastroskopie, hat der Arzt gesagt. Was ist das genau?" },
            { who: "👩‍⚕️", it: "Das heißt, dass der Arzt mit einer kleinen Kamera in Ihren Magen schaut. Wichtig ist, dass Sie ab Mitternacht nichts mehr essen." },
            { who: "🧓", it: "Und was habe ich denn? Ist es etwas Schlimmes?" },
            { who: "👩‍⚕️", it: "Ich verstehe, dass Sie sich Sorgen machen. Das bespricht der Arzt mit Ihnen." },
            { who: "🧓", it: "Kommt er heute noch?" },
            { who: "👩‍⚕️", it: "Ich sage ihm, dass Sie noch Fragen haben. Ist sonst noch etwas unklar?" },
            { who: "🧓", it: "Nein, danke. Sie haben das gut erklärt." }
          ]
        },
        exercises: [
          { t: "mcq", a: 0 },
          { t: "conj", verb: "erklären", tense: "praes", persons: [0, 1, 2, 3, 4, 5] },
          { t: "fill", a: ["dass"] },
          {
            t: "cloze",
            text: "Das heißt, {{1}} der Arzt mit einer kleinen Kamera in Ihren Magen {{2}}.",
            gaps: [["dass"], ["schaut", "sieht"]]
          },
          {
            t: "match",
            pairs: [{ it: "die Diagnose" }, { it: "die Prognose" }, { it: "die Aufklärung" }, { it: "die Untersuchung" }]
          },
          {
            t: "gender",
            opts: ["der", "die", "das"],
            items: [
              { it: "Diagnose", a: "die" },
              { it: "Fachwort", a: "das" },
              { it: "Magen", a: "der" },
              { it: "Untersuchung", a: "die" },
              { it: "Gespräch", a: "das" },
              { it: "Termin", a: "der" }
            ]
          },
          { t: "multi", a: [0, 1, 3] },
          {
            t: "order",
            tokens: ["Ich", "sage", "dem", "Arzt,", "dass", "Sie", "noch", "Fragen", "haben"],
            a: ["Ich sage dem Arzt, dass Sie noch Fragen haben"]
          },
          {
            t: "trans",
            dir: "toIt",
            a: [
              "Morgen früh bekommen Sie eine Magenspiegelung",
              "Sie bekommen morgen früh eine Magenspiegelung",
              "Morgen früh haben Sie eine Magenspiegelung",
              "Sie haben morgen früh eine Magenspiegelung",
              "Morgen früh wird bei Ihnen eine Magenspiegelung gemacht",
              "Bei Ihnen wird morgen früh eine Magenspiegelung gemacht"
            ]
          },
          {
            t: "dialogue",
            lines: [
              { sp: "A", it: "Was habe ich denn? Ist es schlimm?" },
              {
                sp: "TY",
                choices: [
                  "Das ist bestimmt nichts Schlimmes.",
                  "Ich verstehe, dass Sie sich Sorgen machen. Das bespricht der Arzt mit Ihnen.",
                  "Ich verstehe, dass Sie sich Sorgen machen. Sie haben eine Gastritis."
                ],
                a: 1
              },
              { sp: "A", it: "Und was ist eine Gastroskopie?" },
              {
                sp: "TY",
                choices: [
                  "Das heißt, dass der Arzt mit einer kleinen Kamera in Ihren Magen schaut.",
                  "Das ist eine Endoskopie des oberen Gastrointestinaltrakts.",
                  "Das heißt, dass der Arzt schaut mit einer kleinen Kamera in Ihren Magen."
                ],
                a: 0
              },
              { sp: "A", it: "Darf ich heute Abend noch etwas essen?" },
              {
                sp: "TY",
                choices: [
                  "Ja, aber wichtig ist, dass Sie ab Mitternacht nichts mehr essen.",
                  "Ja, aber wichtig ist, dass Sie ab Mitternacht essen nichts mehr.",
                  "Ja, aber wichtig ist, dass Sie ab Mitternacht nichts mehr gegessen."
                ],
                a: 0
              }
            ]
          },
          {
            t: "listen",
            it: "Ich verstehe, dass Sie sich Sorgen machen. Das bespricht der Arzt mit Ihnen."
          },
          { t: "speak", it: "Ich sage dem Arzt, dass Sie noch Fragen haben." }
        ]
      },
      {
        id: "pfl-u07-l2",
        tags: ["g-modalpartikeln", "g-konjunktiv2"],
        cefr: "B2",
        titleIt: "Beruhigen und ermutigen",
        grammar: {
          examples: [
            { it: "Setzen Sie sich doch erst mal hin." },
            { it: "Atmen Sie mal ganz ruhig ein und aus." },
            { it: "Das kennen Sie ja schon von gestern." },
            { it: "Könnten Sie mir kurz sagen, wo es weh tut?" },
            { it: "Wäre es Ihnen recht, wenn ich kurz bei Ihnen bleibe?" },
            { it: "Es wäre gut, wenn Sie heute ein paar Schritte gehen." }
          ]
        },
        vocab: [
          { it: "die Angst", plural: "die Ängste", ex: "Viele Patienten haben vor dem ersten Aufstehen Angst." },
          { it: "die Sorge", plural: "die Sorgen", ex: "Ich verstehe Ihre Sorge." },
          { it: "beruhigen", ex: "Sie beruhigt die Patientin mit ruhiger Stimme." },
          { it: "ermutigen", ex: "Wir ermutigen ihn, ein paar Schritte zu gehen." },
          { it: "die Ermutigung", plural: "die Ermutigungen", ex: "Ein Lob ist oft die beste Ermutigung." },
          { it: "aufgeregt", ex: "Sie sind aufgeregt, das ist ganz normal." },
          { it: "trösten", ex: "Die Tochter tröstet ihre Mutter." },
          { it: "der Fortschritt", plural: "die Fortschritte", ex: "Sie machen jeden Tag kleine Fortschritte." },
          { it: "versprechen", ex: "Ich kann Ihnen nichts versprechen, aber ich bleibe bei Ihnen." },
          { it: "ehrlich", ex: "Ich möchte ehrlich zu Ihnen sein." },
          { it: "zuversichtlich", ex: "Der Patient ist heute zuversichtlich." },
          { it: "tief", ex: "Atmen Sie mal tief ein." }
        ],
        dialogue: {
          titleIt: "Das erste Aufstehen",
          lines: [
            { who: "👵", it: "Ich habe solche Angst vor dem Aufstehen. Gestern ist mir schwindelig geworden." },
            { who: "👩‍⚕️", it: "Ich verstehe, dass Sie Angst haben. Setzen Sie sich doch erst mal an die Bettkante." },
            { who: "👵", it: "Und wenn ich falle?" },
            { who: "👩‍⚕️", it: "Ich bin ja direkt neben Ihnen. Atmen Sie mal ganz ruhig ein und aus." },
            { who: "👵", it: "Gut. Könnten Sie mir bitte die Hand geben?" },
            { who: "👩‍⚕️", it: "Natürlich. Wäre es Ihnen recht, wenn wir bis zum Fenster gehen?" },
            { who: "👵", it: "Ich versuche es. Puh, das war anstrengend." },
            { who: "👩‍⚕️", it: "Das haben Sie gut gemacht. Morgen versuchen wir es wieder, Schritt für Schritt." }
          ]
        },
        exercises: [
          { t: "mcq", a: 0 },
          { t: "conj", verb: "können", tense: "konj2", persons: [0, 1, 2, 3, 4, 5] },
          { t: "fill", a: ["wäre"] },
          {
            t: "cloze",
            text: "Setzen Sie sich {{1}} erst mal hin. Ich bin {{2}} direkt neben Ihnen.",
            gaps: [["doch"], ["ja"]]
          },
          { t: "multi", a: [0, 2, 4] },
          {
            t: "gender",
            opts: ["der", "die", "das"],
            items: [
              { it: "Angst", a: "die" },
              { it: "Fortschritt", a: "der" },
              { it: "Ermutigung", a: "die" },
              { it: "Fenster", a: "das" },
              { it: "Bett", a: "das" },
              { it: "Schritt", a: "der" }
            ]
          },
          {
            t: "match",
            pairs: [
              { it: "Setzen Sie sich doch hin." },
              { it: "Atmen Sie mal tief ein." },
              { it: "Das kennen Sie ja schon." },
              { it: "Könnten Sie mir helfen?" }
            ]
          },
          {
            t: "order",
            tokens: ["Wäre", "es", "Ihnen", "recht,", "wenn", "ich", "kurz", "bei", "Ihnen", "bleibe"],
            a: [
              "Wäre es Ihnen recht, wenn ich kurz bei Ihnen bleibe",
              "Wäre es Ihnen recht, wenn ich bei Ihnen kurz bleibe"
            ]
          },
          {
            t: "trans",
            dir: "toIt",
            a: [
              "Könnten Sie mir sagen, wo es weh tut",
              "Könnten Sie mir sagen, wo es wehtut",
              "Könnten Sie mir bitte sagen, wo es weh tut",
              "Könnten Sie mir bitte sagen, wo es wehtut",
              "Könnten Sie mir sagen, wo es Ihnen weh tut",
              "Könnten Sie mir sagen, wo es Ihnen wehtut"
            ]
          },
          {
            t: "dialogue",
            lines: [
              { sp: "A", it: "Ich habe solche Angst vor dem Aufstehen." },
              {
                sp: "TY",
                choices: [
                  "Ich verstehe, dass Sie Angst haben. Setzen Sie sich doch erst mal an die Bettkante.",
                  "Sie brauchen keine Angst haben. Stehen Sie jetzt auf.",
                  "Ich verstehe, dass Sie haben Angst. Setzen Sie sich doch erst mal an die Bettkante."
                ],
                a: 0
              },
              { sp: "A", it: "Und wenn ich falle?" },
              {
                sp: "TY",
                choices: [
                  "Sie fallen nicht, das verspreche ich Ihnen.",
                  "Ich bin ja direkt neben Ihnen. Wir gehen ganz langsam.",
                  "Ich bin ja direkt neben Ihnen. Wir ganz langsam gehen."
                ],
                a: 1
              },
              { sp: "A", it: "Puh, das war anstrengend." },
              {
                sp: "TY",
                choices: [
                  "Das haben Sie gut gemacht. Morgen versuchen wir es wieder.",
                  "Das haben Sie gut gemacht. Morgen wir versuchen es wieder.",
                  "Das ist ja nicht anstrengend, Sie sind nur langsam."
                ],
                a: 0
              }
            ]
          },
          {
            t: "listen",
            it: "Ich bin ja direkt neben Ihnen. Atmen Sie mal ganz ruhig ein und aus."
          },
          { t: "speak", it: "Setzen Sie sich doch erst mal hin." }
        ]
      },
      {
        id: "pfl-u07-l3",
        tags: ["g-konjunktiv1", "g-nebensatz-dass"],
        cefr: "B2",
        titleIt: "Angehörige informieren",
        grammar: {
          examples: [
            { it: "Ihre Mutter hat gesagt, dass sie gut geschlafen hat." },
            { it: "Ihre Mutter sagt, sie habe gut geschlafen." },
            { it: "Die Patientin gibt an, sie sei müde." },
            { it: "Der Patient gibt an, er habe keine Schmerzen." },
            { it: "Am Telefon darf ich leider keine Auskunft geben." },
            { it: "Ihr Vater ist damit einverstanden, dass wir Sie informieren." }
          ]
        },
        vocab: [
          { it: "der Angehörige", plural: "die Angehörigen", ex: "Die Angehörigen warten draußen." },
          { it: "die Schweigepflicht", plural: "-", ex: "Auch Pflegefachkräfte unterliegen der Schweigepflicht." },
          { it: "die Auskunft", plural: "die Auskünfte", ex: "Am Telefon darf ich leider keine Auskunft geben." },
          { it: "das Einverständnis", plural: "-", ex: "Ohne das Einverständnis des Patienten geben wir keine Auskunft." },
          { it: "einverstanden", ex: "Ihr Vater ist damit einverstanden, dass wir Sie informieren." },
          { it: "die Vorsorgevollmacht", plural: "die Vorsorgevollmachten", ex: "Hat Ihr Vater eine Vorsorgevollmacht unterschrieben?" },
          { it: "angeben", ex: "Die Patientin gibt an, sie habe keine Schmerzen." },
          { it: "vertraulich", ex: "Diese Informationen sind vertraulich." },
          { it: "weitergeben", ex: "Ich gebe Ihre Frage an den Arzt weiter." },
          { it: "das Arztgespräch", plural: "die Arztgespräche", ex: "Ich kann gern ein Arztgespräch für Sie vereinbaren." },
          { it: "die Besuchszeit", plural: "die Besuchszeiten", ex: "Die Besuchszeiten hängen am Eingang der Station." },
          { it: "die Palliativpflege", plural: "-", ex: "In der Palliativpflege sind die Angehörigen oft den ganzen Tag da." }
        ],
        dialogue: {
          titleIt: "Die Tochter fragt nach",
          lines: [
            { who: "👩", it: "Guten Tag, ich bin die Tochter von Herrn Schulz. Wie geht es meinem Vater?" },
            { who: "👩‍⚕️", it: "Guten Tag, Frau Schulz. Ihr Vater ist damit einverstanden, dass wir Sie informieren. Er hat heute Morgen gesagt, er habe gut geschlafen." },
            { who: "👩", it: "Und die Untersuchung? Was hat man gefunden?" },
            { who: "👩‍⚕️", it: "Das bespricht der Arzt mit Ihnen. Ich kann gern ein Arztgespräch für Sie vereinbaren." },
            { who: "👩", it: "Kann ich heute noch mit dem Arzt sprechen?" },
            { who: "👩‍⚕️", it: "Er ist gerade in einer Besprechung. Ich gebe Ihre Frage an ihn weiter." },
            { who: "👩", it: "Danke. Meine Schwester ruft vielleicht auch noch an." },
            { who: "👩‍⚕️", it: "Am Telefon dürfen wir leider keine Auskunft geben. Am besten kommt sie mit Ihnen zum Arztgespräch." }
          ]
        },
        exercises: [
          { t: "mcq", a: 0 },
          { t: "conj", verb: "sein", tense: "konj1", persons: [0, 2, 3, 5] },
          { t: "fill", a: ["sei"] },
          {
            t: "cloze",
            text: "Der Patient gibt an, er {{1}} keine Schmerzen. Er sagt, er {{2}} gut geschlafen.",
            gaps: [["habe"], ["habe"]]
          },
          { t: "multi", a: [0, 2, 4] },
          {
            t: "gender",
            opts: ["der", "die", "das"],
            items: [
              { it: "Schweigepflicht", a: "die" },
              { it: "Auskunft", a: "die" },
              { it: "Einverständnis", a: "das" },
              { it: "Arztgespräch", a: "das" },
              { it: "Vorsorgevollmacht", a: "die" },
              { it: "Telefon", a: "das" }
            ]
          },
          {
            t: "match",
            pairs: [{ it: "die Schweigepflicht" }, { it: "die Auskunft" }, { it: "das Einverständnis" }, { it: "die Vorsorgevollmacht" }]
          },
          {
            t: "order",
            tokens: ["Ihr", "Vater", "ist", "damit", "einverstanden,", "dass", "wir", "Sie", "informieren"],
            a: ["Ihr Vater ist damit einverstanden, dass wir Sie informieren"]
          },
          {
            t: "trans",
            dir: "toIt",
            a: [
              "Ihre Mutter sagt, sie fühle sich heute besser",
              "Ihre Mutter sagt, sie fühlt sich heute besser",
              "Ihre Mutter sagt, dass sie sich heute besser fühlt",
              "Ihre Mutter sagt, dass sie sich heute besser fühle",
              "Ihre Mutter sagt, heute fühle sie sich besser",
              "Ihre Mutter sagt, heute fühlt sie sich besser"
            ]
          },
          {
            t: "dialogue",
            lines: [
              { sp: "A", it: "Wie geht es meinem Vater?" },
              {
                sp: "TY",
                choices: [
                  "Er hat heute Morgen gesagt, er habe gut geschlafen.",
                  "Er hat heute Morgen gesagt, er sei gut geschlafen.",
                  "Er hat heute Morgen gesagt, dass er habe gut geschlafen."
                ],
                a: 0
              },
              { sp: "A", it: "Was hat die Untersuchung ergeben?" },
              {
                sp: "TY",
                choices: [
                  "Die Untersuchung war leider nicht gut.",
                  "Das bespricht der Arzt mit Ihnen. Ich kann gern ein Arztgespräch für Sie vereinbaren.",
                  "Das bespricht der Arzt mit Ihnen, aber es ist nichts Schlimmes."
                ],
                a: 1
              },
              { sp: "A", it: "Meine Schwester ruft heute Abend an. Können Sie ihr alles sagen?" },
              {
                sp: "TY",
                choices: [
                  "Am Telefon dürfen wir leider keine Auskunft geben.",
                  "Ja, am Telefon erzähle ich ihr alles.",
                  "Am Telefon dürfen wir leider keine Auskunft gegeben."
                ],
                a: 0
              }
            ]
          },
          {
            t: "listen",
            it: "Das bespricht der Arzt mit Ihnen. Ich kann gern ein Arztgespräch für Sie vereinbaren."
          },
          { t: "speak", it: "Am Telefon darf ich leider keine Auskunft geben." }
        ]
      },
      {
        id: "pfl-u07-l4",
        tags: ["g-satz-v2", "g-register"],
        cefr: "B2",
        titleIt: "Menschen mit Demenz",
        grammar: {
          examples: [
            { it: "Ich bin Anna. Ich helfe Ihnen heute." },
            { it: "Jetzt waschen Sie Ihr Gesicht." },
            { it: "Hier ist Ihr Waschlappen." },
            { it: "Sie machen sich Sorgen um Ihre Kinder." },
            { it: "Erzählen Sie mir von Ihren Kindern." },
            { it: "Nach dem Frühstück kommt Ihre Tochter." }
          ]
        },
        vocab: [
          { it: "die Demenz", plural: "die Demenzen", ex: "Frau Lehmann lebt seit drei Jahren mit einer Demenz." },
          { it: "die Vergesslichkeit", plural: "-", ex: "Vergesslichkeit ist nicht dasselbe wie eine Demenz." },
          { it: "verwirrt", ex: "Am Abend ist Herr Braun oft verwirrt." },
          { it: "die Verwirrtheit", plural: "-", ex: "Eine plötzliche Verwirrtheit melden wir sofort der Ärztin." },
          { it: "die Desorientierung", plural: "-", ex: "Bei Desorientierung hilft eine feste Tagesstruktur." },
          { it: "die Validation", plural: "-", ex: "Bei der Validation nehmen wir die Gefühle ernst." },
          { it: "das Gefühl", plural: "die Gefühle", ex: "Gefühle bleiben, auch wenn Erinnerungen verschwinden." },
          { it: "die Erinnerung", plural: "die Erinnerungen", ex: "Alte Erinnerungen sind oft sehr lebendig." },
          { it: "die Biografie", plural: "die Biografien", ex: "Die Biografie hilft uns, sie besser zu verstehen." },
          { it: "die Tagesstruktur", plural: "die Tagesstrukturen", ex: "Eine feste Tagesstruktur gibt Sicherheit." },
          { it: "widersprechen", ex: "Wir widersprechen nicht, wir hören zu." },
          { it: "vertraut", ex: "Vertraute Dinge geben ihr Sicherheit." }
        ],
        dialogue: {
          titleIt: "Ich muss nach Hause",
          lines: [
            { who: "👩‍⚕️", it: "Guten Morgen, Frau Lehmann. Ich bin Anna. Ich helfe Ihnen heute beim Waschen." },
            { who: "👵", it: "Ich muss nach Hause. Meine Kinder kommen gleich aus der Schule." },
            { who: "👩‍⚕️", it: "Sie machen sich Sorgen um Ihre Kinder." },
            { who: "👵", it: "Ja. Sie haben doch Hunger, wenn sie nach Hause kommen." },
            { who: "👩‍⚕️", it: "Ihre Kinder sind Ihnen sehr wichtig. Erzählen Sie mir von Ihren Kindern." },
            { who: "👵", it: "Der Peter war immer so frech. Und die Susanne hat so schön gesungen." },
            { who: "👩‍⚕️", it: "Das klingt schön. Jetzt waschen Sie Ihr Gesicht. Hier ist Ihr Waschlappen." },
            { who: "👵", it: "Ach ja. Das kann ich selbst." }
          ]
        },
        exercises: [
          { t: "mcq", a: 1 },
          { t: "fill", a: ["kommt"] },
          {
            t: "cloze",
            text: "Jetzt {{1}} Sie Ihr Gesicht. Hier {{2}} Ihr Waschlappen.",
            gaps: [["waschen"], ["ist"]]
          },
          { t: "multi", a: [0, 2, 4] },
          {
            t: "gender",
            opts: ["der", "die", "das"],
            items: [
              { it: "Demenz", a: "die" },
              { it: "Gefühl", a: "das" },
              { it: "Erinnerung", a: "die" },
              { it: "Waschlappen", a: "der" },
              { it: "Gesicht", a: "das" },
              { it: "Frühstück", a: "das" }
            ]
          },
          {
            t: "match",
            pairs: [{ it: "die Demenz" }, { it: "die Vergesslichkeit" }, { it: "die Desorientierung" }, { it: "die Validation" }]
          },
          {
            t: "order",
            tokens: ["Nach", "dem", "Frühstück", "kommt", "Ihre", "Tochter"],
            a: ["Nach dem Frühstück kommt Ihre Tochter"]
          },
          {
            t: "trans",
            dir: "toIt",
            a: ["Heute ist Dienstag", "Heute haben wir Dienstag", "Wir haben heute Dienstag"]
          },
          {
            t: "dialogue",
            lines: [
              { sp: "A", it: "Ich muss nach Hause. Meine Kinder warten." },
              {
                sp: "TY",
                choices: [
                  "Sie machen sich Sorgen um Ihre Kinder.",
                  "Das stimmt nicht, Ihre Kinder sind schon lange erwachsen.",
                  "Sie machen sich um Ihre Kinder Sorgen, aber die sind ja nicht mehr klein, wie Sie eigentlich wissen."
                ],
                a: 0
              },
              { sp: "A", it: "Wer sind Sie denn?" },
              {
                sp: "TY",
                choices: [
                  "Ich bin Anna. Ich helfe Ihnen heute.",
                  "Das habe ich Ihnen doch schon dreimal gesagt.",
                  "Ich bin Anna. Ich Ihnen heute helfe."
                ],
                a: 0
              },
              { sp: "A", it: "Ich kann das nicht mehr." },
              {
                sp: "TY",
                choices: [
                  "Doch, das können Sie. Hier ist Ihr Waschlappen.",
                  "Doch, das können Sie. Hier Ihr Waschlappen ist.",
                  "Dann mache ich das schnell für Sie."
                ],
                a: 0
              }
            ]
          },
          {
            t: "listen",
            it: "Guten Morgen, Frau Lehmann. Ich bin Anna. Ich helfe Ihnen heute beim Waschen."
          },
          { t: "speak", it: "Erzählen Sie mir von Ihren Kindern." }
        ]
      }
    ],
    test: {
      id: "pfl-u07-test",
      tags: ["g-register", "g-konjunktiv2", "g-konjunktiv1"],
      cefr: "B2",
      titleIt: "Test: Gespräche mit Patienten und Angehörigen",
      exercises: [
        { t: "mcq", a: 0 },
        { t: "fill", a: ["habe"] },
        { t: "fill", a: ["Könnten", "Würden"] },
        { t: "conj", verb: "werden", tense: "konj2", persons: [0, 1, 2, 3, 4, 5] },
        {
          t: "match",
          pairs: [{ it: "die Gastroskopie" }, { it: "die Schweigepflicht" }, { it: "die Validation" }, { it: "die Vorsorgevollmacht" }]
        },
        { t: "multi", a: [0, 2, 4] },
        {
          t: "cloze",
          text: "Die Patientin gibt an, sie {{1}} müde. {{2}} es Ihnen recht, wenn ich später wiederkomme?",
          gaps: [["sei"], ["Wäre"]]
        },
        {
          t: "order",
          tokens: ["Ich", "verstehe,", "dass", "Sie", "sich", "Sorgen", "machen"],
          a: ["Ich verstehe, dass Sie sich Sorgen machen"]
        },
        {
          t: "gender",
          opts: ["der", "die", "das"],
          items: [
            { it: "Diagnose", a: "die" },
            { it: "Auskunft", a: "die" },
            { it: "Einverständnis", a: "das" },
            { it: "Gefühl", a: "das" },
            { it: "Fortschritt", a: "der" },
            { it: "Arztgespräch", a: "das" }
          ]
        },
        {
          t: "listen",
          it: "Ich verstehe, dass Sie Angst haben. Setzen Sie sich doch erst mal an die Bettkante."
        },
        { t: "speak", it: "Das bespricht der Arzt mit Ihnen." }
      ]
    }
  }
]);
