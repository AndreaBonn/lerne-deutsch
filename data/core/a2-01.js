/* ============================================================
   Language-neutral layer: German (de-DE), structure and answer keys.
   Learner-language texts live in data/i18n/<lang>/a2-01.js.
   a2-u01 is a German unit.
   ============================================================ */
LINGUAI.addUnits("A2", [
  {
    id: "a2-u01",
    icon: "⏳",
    titleIt: "Früher und heute",
    lessons: [
      {
        id: "a2-u01-l1",
        tags: ["g-praeteritum"],
        cefr: "A2",
        titleIt: "Als Kind war ich ...",
        grammar: {
          examples: [
            { it: "Als Kind war ich oft krank." },
            { it: "Wir hatten einen großen Garten." },
            { it: "Mein Opa hatte einen Hund." },
            { it: "Früher waren wir jeden Sommer am Meer." },
            { it: "Damals hatte ich kein Handy." },
            { it: "Wie war deine Kindheit?" }
          ]
        },
        vocab: [
          { it: "die Kindheit", plural: "-", ex: "Meine Kindheit war schön." },
          { it: "der Kindergarten", plural: "die Kindergärten", ex: "Im Kindergarten hatte ich viele Freunde." },
          { it: "die Grundschule", plural: "die Grundschulen", ex: "Die Grundschule war klein." },
          { it: "der Lehrer", plural: "die Lehrer", ex: "Unser Lehrer war sehr nett." },
          { it: "die Lehrerin", plural: "die Lehrerinnen", ex: "Meine Lehrerin hatte einen Hund." },
          { it: "das Dorf", plural: "die Dörfer", ex: "Das Dorf war klein." },
          { it: "die Stadt", plural: "die Städte", ex: "Die Stadt war groß und laut." },
          { it: "der Garten", plural: "die Gärten", ex: "Wir hatten einen Garten." },
          { it: "der Hund", plural: "die Hunde", ex: "Mein Hund war klein." },
          { it: "das Fahrrad", plural: "die Fahrräder", ex: "Ich hatte ein rotes Fahrrad." },
          { it: "früher", ex: "Früher war ich oft krank." },
          { it: "damals", ex: "Damals hatten wir kein Internet." }
        ],
        exercises: [
          { t: "conj", verb: "sein", tense: "praet", persons: [0, 1, 2, 3, 4, 5] },
          { t: "conj", verb: "haben", tense: "praet", persons: [0, 1, 2, 3, 4, 5] },
          { t: "conj", verb: "können", tense: "praet", persons: [0, 1, 2, 3, 4, 5] },
          { t: "mcq", a: 1 },
          { t: "fill", a: ["hatten"] },
          { t: "fill", a: ["war"] },
          {
            t: "cloze",
            text: "Früher {{1}} wir ein Haus im Dorf. Es {{2}} klein, aber meine Großeltern {{3}} einen Garten.",
            gaps: [["hatten"], ["war"], ["hatten"]]
          },
          {
            t: "trans",
            dir: "toIt",
            a: [
              "Als Kind war ich oft krank",
              "Ich war als Kind oft krank",
              "Als Kind war ich häufig krank"
            ]
          },
          { t: "listen", it: "Als Kind hatte ich einen Hund, und er war sehr lieb." },
          { t: "speak", it: "Früher waren wir jeden Sommer am Meer, und wir hatten viel Spaß." }
        ]
      },
      {
        id: "a2-u01-l2",
        tags: ["g-nebensatz-temporal", "g-perfekt"],
        cefr: "A2",
        titleIt: "Als ich klein war, ...",
        grammar: {
          examples: [
            { it: "Als ich klein war, haben wir in einem Dorf gewohnt." },
            { it: "Als wir in Wien gewohnt haben, bin ich oft Fahrrad gefahren." },
            { it: "Als ich zehn Jahre alt war, sind wir nach Berlin umgezogen." },
            { it: "Immer wenn es geschneit hat, sind wir Schlitten gefahren." },
            { it: "Jedes Mal, wenn meine Oma uns besucht hat, hat sie Kuchen gemacht." },
            { it: "Wenn ich müde bin, gehe ich früh ins Bett." }
          ]
        },
        vocab: [
          { it: "der Umzug", plural: "die Umzüge", ex: "Der Umzug war anstrengend." },
          { it: "die Ferien", plural: "die Ferien", ex: "In den Ferien waren wir bei meiner Oma." },
          { it: "der Sommer", plural: "die Sommer", ex: "Im Sommer waren wir am See." },
          { it: "der Winter", plural: "die Winter", ex: "Im Winter war es sehr kalt." },
          { it: "der Schnee", plural: "-", ex: "Im Winter lag viel Schnee." },
          { it: "der Schlitten", plural: "die Schlitten", ex: "Wir hatten einen roten Schlitten." },
          { it: "die Oma", plural: "die Omas", ex: "Meine Oma hat oft Kuchen gemacht." },
          { it: "der Opa", plural: "die Opas", ex: "Mein Opa hat im Garten gearbeitet." },
          { it: "der Nachbar", plural: "die Nachbarn", ex: "Unser Nachbar hatte drei Katzen." },
          { it: "immer", ex: "Immer wenn es regnet, bleibe ich zu Hause." },
          { it: "oft", ex: "Wir sind oft am Wochenende gewandert." },
          { it: "jedes Mal", ex: "Jedes Mal hat sie gelacht." }
        ],
        exercises: [
          { t: "mcq", a: 0 },
          { t: "mcq", a: 1 },
          { t: "mcq", a: 1 },
          { t: "multi", a: [0, 1, 3] },
          {
            t: "cloze",
            text: "{{1}} ich klein war, haben wir in einem Dorf {{2}}.",
            gaps: [["Als"], ["gewohnt"]]
          },
          {
            t: "cloze",
            text: "{{1}} es im Winter geschneit hat, {{2}} wir Schlitten gefahren.",
            gaps: [["Wenn"], ["sind"]]
          },
          {
            t: "cloze",
            text: "Als wir in Wien {{1}} {{2}}, bin ich oft Fahrrad gefahren.",
            gaps: [["gewohnt"], ["haben"]]
          },
          {
            t: "trans",
            dir: "toIt",
            a: [
              "Als ich zehn Jahre alt war, sind wir nach Berlin umgezogen",
              "Als ich zehn war, sind wir nach Berlin umgezogen"
            ]
          },
          { t: "listen", it: "Als ich zehn war, sind wir nach Berlin umgezogen, und ich hatte dort keine Freunde." },
          { t: "speak", it: "Immer wenn es geschneit hat, sind wir Schlitten gefahren." }
        ]
      },
      {
        id: "a2-u01-l3",
        tags: ["g-praeteritum", "g-nebensatz-weil"],
        cefr: "A2",
        titleIt: "Ich musste, ich durfte, weil ...",
        grammar: {
          examples: [
            { it: "Ich musste jeden Tag Hausaufgaben machen." },
            { it: "Wir durften nicht lange fernsehen." },
            { it: "Ich wollte einen Hund haben, aber meine Eltern wollten das nicht." },
            { it: "Ich war traurig, weil ich nicht ins Kino gehen durfte." },
            { it: "Ich konnte nicht kommen, weil ich arbeiten musste." },
            { it: "Wir konnten im Garten spielen, weil das Wetter schön war." }
          ]
        },
        vocab: [
          { it: "die Hausaufgabe", plural: "die Hausaufgaben", ex: "Ich musste die Hausaufgaben machen." },
          { it: "die Regel", plural: "die Regeln", ex: "Zu Hause gab es viele Regeln." },
          { it: "der Fernseher", plural: "die Fernseher", ex: "Der Fernseher war im Wohnzimmer." },
          { it: "das Taschengeld", plural: "-", ex: "Ich bekam zehn Euro Taschengeld." },
          { it: "die Süßigkeiten", plural: "die Süßigkeiten", ex: "Ich durfte keine Süßigkeiten essen." },
          { it: "das Handy", plural: "die Handys", ex: "Damals hatte ich kein Handy." },
          { it: "der Geburtstag", plural: "die Geburtstage", ex: "An meinem Geburtstag durfte ich länger aufbleiben." },
          { it: "das Haustier", plural: "die Haustiere", ex: "Ich wollte ein Haustier haben." },
          { it: "die Strafe", plural: "die Strafen", ex: "Die Strafe war nicht schlimm." },
          { it: "streng", ex: "Meine Eltern waren streng." },
          { it: "erlaubt", ex: "Fernsehen war nicht erlaubt." },
          { it: "verboten", ex: "Das war verboten." }
        ],
        exercises: [
          { t: "mcq", a: 2 },
          { t: "fill", a: ["musste"] },
          { t: "fill", a: ["durften"] },
          { t: "fill", a: ["weil"] },
          {
            t: "match",
            pairs: [{ it: "ich musste" }, { it: "ich konnte" }, { it: "ich wollte" }, { it: "ich durfte" }]
          },
          {
            t: "order",
            tokens: ["Ich", "konnte", "nicht", "kommen,", "weil", "ich", "arbeiten", "musste"],
            a: ["Ich konnte nicht kommen, weil ich arbeiten musste"]
          },
          {
            t: "cloze",
            text: "Ich war müde, {{1}} ich früh {{2}} {{3}}.",
            gaps: [["weil"], ["aufstehen"], ["musste"]]
          },
          {
            t: "trans",
            dir: "toIt",
            a: [
              "Ich konnte nicht spielen, weil ich Hausaufgaben machen musste",
              "Ich konnte nicht spielen, weil ich meine Hausaufgaben machen musste",
              "Ich konnte nicht spielen, weil ich die Hausaufgaben machen musste",
              "Ich durfte nicht spielen, weil ich Hausaufgaben machen musste",
              "Ich durfte nicht spielen, weil ich meine Hausaufgaben machen musste",
              "Ich durfte nicht spielen, weil ich die Hausaufgaben machen musste"
            ]
          },
          { t: "listen", it: "Ich durfte nicht lange fernsehen, weil ich früh ins Bett gehen musste." },
          { t: "speak", it: "Als Kind durfte ich keine Süßigkeiten essen, weil meine Eltern streng waren." }
        ]
      },
      {
        id: "a2-u01-l4",
        tags: ["g-reflexivverben"],
        cefr: "A2",
        titleIt: "Erinnerst du dich?",
        grammar: {
          examples: [
            { it: "Erinnerst du dich an unsere Schule?" },
            { it: "Ich erinnere mich gut an meine Lehrerin." },
            { it: "Wir haben uns am Bahnhof getroffen." },
            { it: "Er freut sich auf die Ferien." },
            { it: "Sie ärgert sich über das Wetter." },
            { it: "Ich interessiere mich für alte Fotos." }
          ]
        },
        vocab: [
          { it: "sich erinnern (an)", ex: "Ich erinnere mich an meine Kindheit." },
          { it: "sich freuen (auf, über)", ex: "Wir freuen uns auf das Klassentreffen." },
          { it: "sich ärgern (über)", ex: "Er ärgert sich über den Regen." },
          { it: "sich treffen (mit)", ex: "Ich treffe mich mit meiner Freundin." },
          { it: "sich interessieren (für)", ex: "Ich interessiere mich für Musik." },
          { it: "sich setzen", ex: "Bitte setzen Sie sich." },
          { it: "die Erinnerung", plural: "die Erinnerungen", ex: "Das ist eine schöne Erinnerung." },
          { it: "das Foto", plural: "die Fotos", ex: "Auf dem Foto bin ich fünf Jahre alt." },
          { it: "das Album", plural: "die Alben", ex: "Das Album ist von meiner Oma." },
          { it: "das Klassentreffen", plural: "die Klassentreffen", ex: "Am Samstag ist das Klassentreffen." },
          { it: "der Klassenkamerad", plural: "die Klassenkameraden", ex: "Mein Klassenkamerad wohnt jetzt in Wien." },
          { it: "der Spaß", plural: "-", ex: "Wir hatten viel Spaß." }
        ],
        exercises: [
          { t: "mcq", a: 1 },
          { t: "fill", a: ["dich"] },
          { t: "fill", a: ["uns"] },
          {
            t: "match",
            pairs: [
              { it: "sich erinnern" },
              { it: "sich freuen" },
              { it: "sich ärgern" },
              { it: "sich interessieren" }
            ]
          },
          {
            t: "order",
            tokens: ["Ich", "erinnere", "mich", "gut", "an", "meine", "Lehrerin"],
            a: ["Ich erinnere mich gut an meine Lehrerin"]
          },
          {
            t: "cloze",
            text: "Gestern habe ich {{1}} mit Anna {{2}}, und wir haben {{3}} an die Schule erinnert.",
            gaps: [["mich"], ["getroffen"], ["uns"]]
          },
          {
            t: "trans",
            dir: "toIt",
            a: ["Ich erinnere mich gut an meine Schule"]
          },
          {
            t: "dialogue",
            lines: [
              { sp: "A", it: "Hallo Lena! Erinnerst du dich an mich?" },
              {
                sp: "TY",
                choices: [
                  "Ja, ich erinnere dich an mich!",
                  "Ja, ich erinnere mich an dich!",
                  "Ja, ich erinnere mir an dich!"
                ],
                a: 1
              },
              { sp: "A", it: "Wir waren zusammen in der Grundschule." },
              {
                sp: "TY",
                choices: [
                  "Ja, und wir haben treffen uns oft nach der Schule.",
                  "Ja, und wir uns haben oft nach der Schule getroffen.",
                  "Ja, und wir haben uns oft nach der Schule getroffen."
                ],
                a: 2
              },
              { sp: "A", it: "Freust du dich auf das Klassentreffen?" },
              {
                sp: "TY",
                choices: [
                  "Ja, ich mich freue sehr!",
                  "Ja, ich freue mich sehr!",
                  "Ja, ich freue sich sehr!"
                ],
                a: 1
              }
            ]
          },
          { t: "listen", it: "Wir haben uns oft nach der Schule getroffen, und ich erinnere mich gern an diese Zeit." },
          { t: "speak", it: "Ich erinnere mich gut an meine Grundschule, und ich freue mich auf das Klassentreffen." }
        ]
      }
    ],
    test: {
      id: "a2-u01-test",
      tags: ["g-praeteritum", "g-nebensatz-temporal", "g-nebensatz-weil"],
      cefr: "A2",
      titleIt: "Test: Früher und heute",
      exercises: [
        { t: "conj", verb: "sein", tense: "praet", persons: [0, 1, 2, 3, 4, 5] },
        { t: "conj", verb: "müssen", tense: "praet", persons: [0, 1, 2, 3, 4, 5] },
        { t: "fill", a: ["hatten"] },
        { t: "fill", a: ["als"] },
        { t: "fill", a: ["weil"] },
        { t: "mcq", a: 0 },
        {
          t: "cloze",
          text: "Als ich klein {{1}}, {{2}} ich einen Hund.",
          gaps: [["war"], ["hatte"]]
        },
        {
          t: "cloze",
          text: "Ich {{1}} nicht spielen, weil ich Hausaufgaben {{2}} {{3}}.",
          gaps: [["konnte", "durfte"], ["machen"], ["musste"]]
        },
        { t: "listen", it: "Als ich klein war, durfte ich nicht lange fernsehen, weil meine Eltern streng waren." },
        { t: "speak", it: "Als ich Kind war, hatte ich einen Hund, und ich konnte jeden Tag mit ihm spielen." }
      ]
    }
  }
]);
