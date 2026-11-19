/* ============================================================
   Language-neutral layer: German (de-DE), structure and answer keys.
   Learner-language texts live in data/i18n/<lang>/pfl-04.js.
   pfl-u04 belongs to the nursing track (pseudo-level PFL);
   every lesson carries its real CEFR level.
   Emergency content stops at recognising, calling for help and
   reporting: no resuscitation technique, no drug, no dose.
   ============================================================ */
LINGUAI.addUnits("PFL", [
  {
    id: "pfl-u04",
    icon: "🚨",
    titleIt: "Schmerz und Notfall",
    lessons: [
      {
        id: "pfl-u04-l1",
        tags: ["g-adjektivdeklination"],
        cefr: "B1",
        titleIt: "Wie stark sind die Schmerzen?",
        grammar: {
          examples: [
            { it: "Haben Sie starke Schmerzen?" },
            { it: "Ich habe einen stechenden Schmerz in der Seite." },
            { it: "Es ist ein drückender Schmerz." },
            { it: "Der Schmerz ist dumpf." },
            { it: "Seit wann haben Sie diese starken Schmerzen?" },
            { it: "Auch bei leichten Schmerzen dürfen Sie klingeln." }
          ]
        },
        vocab: [
          { it: "die Schmerzskala", plural: "die Schmerzskalen", ex: "Auf der Schmerzskala von null bis zehn: Wie stark ist der Schmerz?" },
          { it: "die Schmerzstärke", plural: "-", ex: "Die Schmerzstärke dokumentiere ich mit einer Zahl." },
          { it: "stechend", ex: "Ich habe einen stechenden Schmerz in der Seite." },
          { it: "brennend", ex: "Der Schmerz ist brennend." },
          { it: "dumpf", ex: "Im Rücken habe ich einen dumpfen Schmerz." },
          { it: "drückend", ex: "Es ist ein drückender Schmerz im Kopf." },
          { it: "ziehend", ex: "Der Schmerz ist ziehend und geht bis ins Knie." },
          { it: "ausstrahlen", ex: "Strahlt der Schmerz in den Arm aus?" },
          { it: "das Schmerzmittel", plural: "die Schmerzmittel", ex: "Die Ärztin entscheidet, ob Sie ein Schmerzmittel bekommen." },
          { it: "das Analgetikum", plural: "die Analgetika", ex: "Im Bericht steht: Analgetikum nach ärztlicher Anordnung." },
          { it: "die Schmerzlinderung", plural: "-", ex: "Unser Ziel ist eine gute Schmerzlinderung." },
          { it: "die Analgesie", plural: "-", ex: "Die Analgesie erfolgt nach ärztlicher Anordnung." }
        ],
        dialogue: {
          titleIt: "Schmerzen erfassen",
          lines: [
            { who: "👩‍⚕️", it: "Frau Keller, haben Sie Schmerzen?" },
            { who: "👵", it: "Ja, ich habe starke Schmerzen im Rücken." },
            { who: "👩‍⚕️", it: "Wie stark sind die Schmerzen von null bis zehn? Null heißt keine Schmerzen, zehn heißt die stärksten Schmerzen, die Sie sich vorstellen können." },
            { who: "👵", it: "Ich würde sagen, sieben." },
            { who: "👩‍⚕️", it: "Wie fühlt sich der Schmerz an? Ist er stechend, brennend oder dumpf?" },
            { who: "👵", it: "Eher dumpf. Und er strahlt ins rechte Bein aus." },
            { who: "👩‍⚕️", it: "Danke. Ich sage es sofort der Ärztin, sie entscheidet über ein Schmerzmittel." },
            { who: "👵", it: "Danke, Frau Marin." }
          ]
        },
        exercises: [
          { t: "mcq", a: 1 },
          { t: "fill", a: ["starke"] },
          {
            t: "gender",
            opts: ["der", "die", "das"],
            items: [
              { it: "Schmerzskala", a: "die" },
              { it: "Schmerzmittel", a: "das" },
              { it: "Analgetikum", a: "das" },
              { it: "Schmerzlinderung", a: "die" },
              { it: "Analgesie", a: "die" },
              { it: "Rücken", a: "der" }
            ]
          },
          {
            t: "match",
            pairs: [{ it: "stechend" }, { it: "brennend" }, { it: "dumpf" }, { it: "ziehend" }]
          },
          {
            t: "order",
            tokens: ["Strahlt", "der", "Schmerz", "in", "den", "Arm", "aus"],
            a: ["Strahlt der Schmerz in den Arm aus"]
          },
          {
            t: "cloze",
            text: "Ich habe einen {{1}} Schmerz im Rücken, und er ist sehr {{2}}.",
            gaps: [["dumpfen"], ["stark"]]
          },
          {
            t: "trans",
            dir: "toIt",
            a: ["Haben Sie starke Schmerzen", "Haben Sie große Schmerzen"]
          },
          { t: "multi", a: [0, 1, 3] },
          {
            t: "dialogue",
            lines: [
              { sp: "A", it: "Ich habe Schmerzen im Bauch." },
              {
                sp: "TY",
                choices: [
                  "Wie stark sind die Schmerzen von null bis zehn?",
                  "Wie stark ist die Schmerzen von null bis zehn?",
                  "Wie starke sind die Schmerzen von null bis zehn?"
                ],
                a: 0
              },
              { sp: "A", it: "Ungefähr sechs." },
              {
                sp: "TY",
                choices: [
                  "Ist es ein stechender oder ein dumpfer Schmerz?",
                  "Ist es ein stechenden oder ein dumpfen Schmerz?",
                  "Ist es eine stechende oder eine dumpfe Schmerz?"
                ],
                a: 0
              },
              { sp: "A", it: "Eher stechend. Bekomme ich jetzt etwas gegen die Schmerzen?" },
              {
                sp: "TY",
                choices: [
                  "Ich sage es sofort der Ärztin. Sie entscheidet über ein Schmerzmittel.",
                  "Ich sage es sofort die Ärztin. Sie entscheidet über ein Schmerzmittel.",
                  "Ich sage es sofort der Ärztin. Sie entscheidet über einen Schmerzmittel."
                ],
                a: 0
              }
            ]
          },
          {
            t: "listen",
            it: "Ich habe starke Schmerzen im Rücken. Der Schmerz ist dumpf und strahlt ins rechte Bein aus."
          },
          { t: "speak", it: "Wie stark sind die Schmerzen von null bis zehn?" }
        ]
      },
      {
        id: "pfl-u04-l2",
        tags: ["g-nebensatz-temporal"],
        cefr: "B1",
        titleIt: "Ein Notfall",
        grammar: {
          examples: [
            { it: "Als ich ins Zimmer kam, war Frau Keller nicht ansprechbar." },
            { it: "Wenn ein Patient nicht reagiert, rufe ich sofort Hilfe." },
            { it: "Ich bleibe bei der Patientin, bis das Team kommt." },
            { it: "Während ich mit ihr sprach, wurde sie plötzlich ganz blass." },
            { it: "Als sie aufstand, wurde ihr schwarz vor Augen." },
            { it: "Sobald das Team da ist, berichte ich kurz, was passiert ist." }
          ]
        },
        vocab: [
          { it: "der Notfall", plural: "die Notfälle", ex: "Das ist ein Notfall, ich brauche sofort Hilfe!" },
          { it: "die Synkope", plural: "die Synkopen", ex: "Die Patientin hatte beim Aufstehen eine Synkope." },
          { it: "die Ohnmacht", plural: "die Ohnmachten", ex: "Nach der Ohnmacht war sie schnell wieder wach." },
          { it: "der Apoplex", plural: "die Apoplexe", ex: "Bei Verdacht auf Apoplex zählt jede Minute." },
          { it: "der Schlaganfall", plural: "die Schlaganfälle", ex: "Ein hängender Mundwinkel kann ein Zeichen für einen Schlaganfall sein." },
          { it: "der Myokardinfarkt", plural: "die Myokardinfarkte", ex: "Im Arztbrief steht: Zustand nach Myokardinfarkt." },
          { it: "der Herzinfarkt", plural: "die Herzinfarkte", ex: "Starke Schmerzen in der Brust können ein Zeichen für einen Herzinfarkt sein." },
          { it: "bewusstlos", ex: "Der Patient ist bewusstlos und reagiert nicht." },
          { it: "ansprechbar", ex: "Frau Keller ist nicht ansprechbar." },
          { it: "somnolent", ex: "Der Patient ist somnolent, aber weckbar." },
          { it: "schläfrig", ex: "Mein Mann ist heute so schläfrig." },
          { it: "blass", ex: "Plötzlich wurde sie ganz blass." }
        ],
        dialogue: {
          titleIt: "Plötzlich ist alles anders",
          lines: [
            { who: "👩", it: "Frau Marin, kommen Sie bitte schnell! Mein Vater spricht so komisch." },
            { who: "👩‍⚕️", it: "Ich komme sofort. Herr Brandt, hören Sie mich?" },
            { who: "👩", it: "Als ich ihm das Wasser gab, fiel ihm das Glas aus der Hand." },
            { who: "👩‍⚕️", it: "Wann hat das angefangen?" },
            { who: "👩", it: "Vor ungefähr zehn Minuten, während er gegessen hat." },
            { who: "👩‍⚕️", it: "Herr Brandt, können Sie bitte beide Arme heben?" },
            { who: "👩", it: "Sein rechter Arm bleibt unten. Und sein Mund hängt auf einer Seite." },
            { who: "👩‍⚕️", it: "Das kann ein Schlaganfall sein. Ich drücke jetzt den Notrufknopf und bleibe bei ihm, bis das Team da ist." }
          ]
        },
        exercises: [
          {
            t: "match",
            pairs: [{ it: "die Synkope" }, { it: "der Apoplex" }, { it: "der Myokardinfarkt" }, { it: "somnolent" }]
          },
          { t: "mcq", a: 0 },
          { t: "fill", a: ["bis"] },
          { t: "conj", verb: "kommen", tense: "praet", persons: [0, 1, 2, 3, 4, 5] },
          {
            t: "cloze",
            text: "Wenn ein Patient nicht {{1}}, rufe ich sofort {{2}}.",
            gaps: [["reagiert"], ["Hilfe"]]
          },
          {
            t: "order",
            tokens: ["Als", "ich", "ins", "Zimmer", "kam,", "war", "sie", "nicht", "ansprechbar"],
            a: ["Als ich ins Zimmer kam, war sie nicht ansprechbar"]
          },
          { t: "multi", a: [0, 1, 3] },
          {
            t: "gender",
            opts: ["der", "die", "das"],
            items: [
              { it: "Notfall", a: "der" },
              { it: "Ohnmacht", a: "die" },
              { it: "Schlaganfall", a: "der" },
              { it: "Synkope", a: "die" },
              { it: "Bewusstsein", a: "das" },
              { it: "Herzinfarkt", a: "der" }
            ]
          },
          {
            t: "trans",
            dir: "toIt",
            a: [
              "Ich bleibe bei ihm, bis das Team kommt",
              "Ich bleibe bei ihm, bis das Team da ist"
            ]
          },
          {
            t: "listen",
            it: "Als ich ins Zimmer kam, war Frau Keller nicht ansprechbar. Ich habe sofort Hilfe gerufen."
          },
          { t: "speak", it: "Wann hat das angefangen?" }
        ]
      },
      {
        id: "pfl-u04-l3",
        tags: ["g-imperativ"],
        cefr: "B1",
        titleIt: "Hilfe holen",
        grammar: {
          examples: [
            { it: "Rufen Sie bitte die 112 an!" },
            { it: "Hol bitte schnell Hilfe!" },
            { it: "Bleiben Sie bitte bei Ihrem Mann!" },
            { it: "Lös bitte den Alarm aus!" },
            { it: "Gib mir bitte das Telefon!" },
            { it: "Bleiben Sie am Telefon und legen Sie nicht auf!" }
          ]
        },
        vocab: [
          { it: "der Notruf", plural: "die Notrufe", ex: "Den Notruf 112 erreichen Sie kostenlos von jedem Telefon." },
          { it: "die Notrufnummer", plural: "die Notrufnummern", ex: "Die interne Notrufnummer hängt neben jedem Telefon." },
          { it: "der Notrufknopf", plural: "die Notrufknöpfe", ex: "Auch im Bad gibt es einen Notrufknopf." },
          { it: "der Alarm", plural: "die Alarme", ex: "Ich löse jetzt den Alarm aus." },
          { it: "auslösen", ex: "Wer hat den Alarm ausgelöst?" },
          { it: "die Leitstelle", plural: "die Leitstellen", ex: "Die Leitstelle fragt zuerst: Wo ist der Notfall?" },
          { it: "der Rettungsdienst", plural: "die Rettungsdienste", ex: "Der Rettungsdienst ist unterwegs." },
          { it: "der Rettungswagen", plural: "die Rettungswagen", ex: "Der Rettungswagen steht schon vor dem Haus." },
          { it: "das Reanimationsteam", plural: "die Reanimationsteams", ex: "Das Reanimationsteam kommt sofort." },
          { it: "die Reanimation", plural: "die Reanimationen", ex: "Nach der Reanimation kam der Patient auf die Intensivstation." },
          { it: "die Wiederbelebung", plural: "-", ex: "Der Kurs in Wiederbelebung findet im Mai statt." },
          { it: "holen", ex: "Hol bitte schnell Hilfe!" }
        ],
        dialogue: {
          titleIt: "Der Anruf bei der 112",
          lines: [
            { who: "👩‍⚕️", it: "Frau Wolf, ich rufe jetzt die 112 an. Bleiben Sie bitte bei Ihrem Mann." },
            { who: "🎧", it: "Notruf Feuerwehr und Rettungsdienst. Wo ist der Notfall?" },
            { who: "👩‍⚕️", it: "In der Lindenstraße 12, im zweiten Stock. Ich bin Pflegefachkraft vom ambulanten Pflegedienst." },
            { who: "🎧", it: "Was ist passiert?" },
            { who: "👩‍⚕️", it: "Ein Patient, 78 Jahre alt, ist plötzlich nicht mehr ansprechbar." },
            { who: "🎧", it: "Bleiben Sie bitte am Telefon. Der Rettungswagen ist unterwegs." },
            { who: "👩‍⚕️", it: "Gut. Frau Wolf, öffnen Sie bitte die Haustür für den Rettungsdienst." },
            { who: "👵", it: "Ja, ich gehe sofort." }
          ]
        },
        exercises: [
          { t: "conj", verb: "rufen", tense: "imper", persons: [1, 3, 4, 5] },
          { t: "mcq", a: 1 },
          { t: "fill", a: ["Bleiben"] },
          {
            t: "order",
            tokens: ["Rufen", "Sie", "bitte", "die", "112", "an"],
            a: ["Rufen Sie bitte die 112 an"]
          },
          {
            t: "cloze",
            text: "{{1}} bitte schnell den Alarm {{2}}!",
            gaps: [["Lös", "Löse"], ["aus"]]
          },
          {
            t: "match",
            pairs: [{ it: "die 112" }, { it: "die 110" }, { it: "die Reanimation" }, { it: "die Leitstelle" }]
          },
          { t: "multi", a: [0, 1, 3] },
          {
            t: "trans",
            dir: "toIt",
            a: ["Bleiben Sie am Telefon", "Bleiben Sie bitte am Telefon"]
          },
          {
            t: "dialogue",
            lines: [
              { sp: "A", it: "Notruf Feuerwehr und Rettungsdienst. Wo ist der Notfall?" },
              {
                sp: "TY",
                choices: [
                  "In der Lindenstraße 12, im zweiten Stock.",
                  "In die Lindenstraße 12, im zweiten Stock.",
                  "In der Lindenstraße 12, in zweiten Stock."
                ],
                a: 0
              },
              { sp: "A", it: "Was ist passiert?" },
              {
                sp: "TY",
                choices: [
                  "Ein Patient ist plötzlich nicht mehr ansprechbar.",
                  "Ein Patient ist plötzlich nicht mehr ansprechen.",
                  "Ein Patient hat plötzlich nicht mehr ansprechbar."
                ],
                a: 0
              },
              { sp: "A", it: "Bleiben Sie bitte am Telefon." },
              {
                sp: "TY",
                choices: [
                  "Ja, ich bleibe am Telefon.",
                  "Ja, bleib am Telefon.",
                  "Ja, ich bleibe an Telefon."
                ],
                a: 0
              }
            ]
          },
          {
            t: "listen",
            it: "Frau Wolf, ich rufe jetzt die 112 an. Bleiben Sie bitte bei Ihrem Mann und öffnen Sie dann die Haustür."
          },
          { t: "speak", it: "Hol bitte schnell Hilfe!" }
        ]
      },
      {
        id: "pfl-u04-l4",
        tags: ["g-perfekt", "g-praeteritum"],
        cefr: "B1",
        titleIt: "Der Sturz",
        grammar: {
          examples: [
            { it: "Frau Keller ist heute Nacht im Bad gestürzt." },
            { it: "Ich habe sie um drei Uhr auf dem Boden gefunden." },
            { it: "Sie war wach und hatte Schmerzen in der linken Hüfte." },
            { it: "Ich wollte allein zur Toilette gehen." },
            { it: "Ich bin auf dem nassen Boden ausgerutscht." },
            { it: "Wir haben die Ärztin sofort informiert." }
          ]
        },
        vocab: [
          { it: "das Sturzprotokoll", plural: "die Sturzprotokolle", ex: "Nach jedem Sturz füllen wir ein Sturzprotokoll aus." },
          { it: "stürzen", ex: "Die Patientin ist im Bad gestürzt." },
          { it: "ausrutschen", ex: "Ich bin auf dem nassen Boden ausgerutscht." },
          { it: "hinfallen", ex: "Ist er einfach hingefallen?" },
          { it: "die Fraktur", plural: "die Frakturen", ex: "Das Röntgenbild zeigt keine Fraktur." },
          { it: "der Knochenbruch", plural: "die Knochenbrüche", ex: "Ob es ein Knochenbruch ist, zeigt erst das Röntgenbild." },
          { it: "das Hämatom", plural: "die Hämatome", ex: "Am Ellenbogen hat die Patientin ein Hämatom." },
          { it: "der Bluterguss", plural: "die Blutergüsse", ex: "Sie haben einen Bluterguss am Arm." },
          { it: "die Hüfte", plural: "die Hüften", ex: "Die linke Hüfte tut ihr weh." },
          { it: "die Platzwunde", plural: "die Platzwunden", ex: "Er hat eine kleine Platzwunde an der Stirn." },
          { it: "die Sturzgefahr", plural: "-", ex: "Bei Frau Keller besteht eine hohe Sturzgefahr." },
          { it: "melden", ex: "Jeden Sturz melden wir sofort der Ärztin." }
        ],
        dialogue: {
          titleIt: "Nachts im Bad",
          lines: [
            { who: "👩‍⚕️", it: "Frau Keller! Was ist passiert? Bleiben Sie bitte liegen, ich hole Hilfe." },
            { who: "👵", it: "Ich wollte allein zur Toilette gehen. Dann bin ich ausgerutscht." },
            { who: "👩‍⚕️", it: "Haben Sie sich den Kopf angeschlagen?" },
            { who: "👵", it: "Nein, aber die Hüfte tut mir weh." },
            { who: "👩‍⚕️", it: "Herr Doktor Weber, Frau Keller ist um drei Uhr im Bad gestürzt. Ich habe sie auf dem Boden gefunden." },
            { who: "👨‍⚕️", it: "War sie wach und ansprechbar?" },
            { who: "👩‍⚕️", it: "Ja, sie war wach und orientiert. Sie hat Schmerzen in der linken Hüfte und ein kleines Hämatom am Ellenbogen." },
            { who: "👨‍⚕️", it: "Gut, ich komme. Dokumentieren Sie den Sturz bitte im Sturzprotokoll." }
          ]
        },
        exercises: [
          { t: "conj", verb: "fallen", tense: "perf", persons: [0, 1, 2, 3, 4, 5] },
          { t: "mcq", a: 1 },
          { t: "fill", a: ["ausgerutscht"] },
          {
            t: "match",
            pairs: [{ it: "die Fraktur" }, { it: "das Hämatom" }, { it: "die Platzwunde" }, { it: "die Sturzgefahr" }]
          },
          {
            t: "cloze",
            text: "Sie {{1}} wach und {{2}} Schmerzen in der Hüfte.",
            gaps: [["war"], ["hatte"]]
          },
          {
            t: "order",
            tokens: ["Ich", "habe", "sie", "um", "drei", "Uhr", "auf", "dem", "Boden", "gefunden"],
            a: ["Ich habe sie um drei Uhr auf dem Boden gefunden"]
          },
          { t: "multi", a: [0, 2, 4] },
          {
            t: "gender",
            opts: ["der", "die", "das"],
            items: [
              { it: "Sturzprotokoll", a: "das" },
              { it: "Fraktur", a: "die" },
              { it: "Knochenbruch", a: "der" },
              { it: "Hämatom", a: "das" },
              { it: "Bluterguss", a: "der" },
              { it: "Hüfte", a: "die" }
            ]
          },
          {
            t: "trans",
            dir: "toIt",
            a: ["Haben Sie sich den Kopf angeschlagen", "Haben Sie sich den Kopf gestoßen"]
          },
          {
            t: "listen",
            it: "Frau Keller ist um drei Uhr im Bad gestürzt. Sie war wach und hatte Schmerzen in der linken Hüfte."
          },
          { t: "speak", it: "Haben Sie sich den Kopf angeschlagen?" }
        ]
      }
    ],
    test: {
      id: "pfl-u04-test",
      tags: ["g-adjektivdeklination", "g-nebensatz-temporal", "g-perfekt"],
      cefr: "B1",
      titleIt: "Test: Schmerz und Notfall",
      exercises: [
        { t: "mcq", a: 1 },
        { t: "fill", a: ["bis"] },
        { t: "fill", a: ["gestürzt"] },
        { t: "conj", verb: "anrufen", tense: "perf", persons: [0, 1, 2, 3, 4, 5] },
        {
          t: "match",
          pairs: [{ it: "die Synkope" }, { it: "der Apoplex" }, { it: "die Fraktur" }, { it: "das Analgetikum" }]
        },
        { t: "multi", a: [0, 2, 3] },
        {
          t: "cloze",
          text: "{{1}} ich ins Zimmer kam, {{2}} Frau Keller auf dem Boden.",
          gaps: [["Als"], ["lag"]]
        },
        {
          t: "order",
          tokens: ["Ich", "bleibe", "bei", "ihm,", "bis", "das", "Team", "kommt"],
          a: ["Ich bleibe bei ihm, bis das Team kommt"]
        },
        {
          t: "gender",
          opts: ["der", "die", "das"],
          items: [
            { it: "Notfall", a: "der" },
            { it: "Schmerzskala", a: "die" },
            { it: "Sturzprotokoll", a: "das" },
            { it: "Schlaganfall", a: "der" },
            { it: "Leitstelle", a: "die" },
            { it: "Hämatom", a: "das" }
          ]
        },
        {
          t: "listen",
          it: "Als ich ins Zimmer kam, war Frau Keller nicht ansprechbar. Ich habe sofort den Alarm ausgelöst und bin bei ihr geblieben, bis das Team kam."
        },
        { t: "speak", it: "Ich dokumentiere den Sturz im Sturzprotokoll." }
      ]
    }
  }
]);
