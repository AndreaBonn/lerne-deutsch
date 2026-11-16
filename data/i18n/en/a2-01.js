/* ============================================================
   Learner-language text (en) for data/core/a2-01.js, unit a2-u01.
   Keys point at ids in the neutral layer; arrays merge by index,
   so their length has to match core.
   Checked by scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("en", {
  "unit:a2-u01": {
    title: "Then and now",
    grammarNote: "Präteritum of sein, haben and the modals · als and wenn · weil with the verb at the end · reflexive verbs and sich erinnern an"
  },
  "lesson:a2-u01-l1": {
    theme: "Childhood",
    title: "As a child I was ...",
    objectives: [
      "describe what your childhood was like with war and hatte",
      "conjugate sein, haben and können in the Präteritum",
      "use früher and damals to place something in the past"
    ],
    theory: [
      {
        h: "The Präteritum of sein and haben",
        p: "To describe how things used to be, especially in speech, German uses the simple forms of <strong>sein</strong> and <strong>haben</strong>: <em>ich war</em>, <em>ich hatte</em>. Instead of the Perfekt (<em>Ich bin gewesen</em>, <em>Ich habe gehabt</em>), spoken German almost always prefers these short forms: <em>Als Kind war ich oft krank</em>, <em>Wir hatten einen großen Garten</em>. In the first and third person singular the form is the same: <em>ich war, er war</em>; <em>ich hatte, er hatte</em>."
      },
      {
        contrast: "English has one simple past (<em>was, had, could</em>), so <em>war</em> and <em>hatte</em> will feel familiar, and as in English the 1st and 3rd person singular are identical (<em>I was, he was</em>). Two things are different. First, German has a form for every person: <em>du warst</em>, <em>wir waren</em>, <em>ihr wart</em>, <em>wir hatten</em>, where English <em>was/were</em> and <em>had</em> barely change. Second, <em>Als Kind war ich oft krank</em> can be “As a child I was often sick” or “I used to be sick a lot”: the Präteritum does not tell you which, the context does. Note also that <em>als Kind</em> has no article, while English needs one (“as <b>a</b> child”). <em>Kind</em> is neuter, and German nouns have a gender you have to learn with the word."
      },
      {
        trap: "Do not mix the two systems: <em>Ich habe war</em> does not exist. With <em>sein</em> and <em>haben</em> you choose the Präteritum (<em>Ich war</em>, <em>Ich hatte</em>) or the Perfekt (<em>Ich bin gewesen</em>, <em>Ich habe gehabt</em>), never a hybrid. English speakers also tend to reach for “did” in questions and negatives: German has no such helper. <em>Hattest du einen Hund?</em> puts the verb first, with nothing in front of it. And watch <em>wir hatten</em> and <em>wir waren</em>: in the first person plural the ending is <em>-en</em>, as in the infinitive."
      },
      {
        tip: "Useful time markers for the past: <em>früher</em> (in the past, formerly), <em>damals</em> (back then), <em>als Kind</em> (as a child), <em>als Jugendlicher</em> (as a teenager). If a sentence starts with one of them, the verb stays in second position: <em>Früher hatte ich ein rotes Fahrrad.</em>"
      }
    ],
    grammar: {
      title: "Präteritum of sein, haben and können",
      note: "In the 1st and 3rd person singular the form is the same. <i>Sein</i> takes the plain endings <b>-st</b> (du warst) and <b>-t</b> (ihr wart), and <b>-en</b> for wir and sie. <i>Haben</i> and <i>können</i> have the stems <i>hatt-</i> and <i>konnt-</i> and take <b>-est</b> and <b>-et</b> (hattest, hattet, konntest, konntet), and <b>-en</b> for wir and sie.",
      table: {
        head: ["person", "sein", "haben", "können"],
        rows: [
          ["ich", "war", "hatte", "konnte"],
          ["du", "warst", "hattest", "konntest"],
          ["er, sie, es", "war", "hatte", "konnte"],
          ["wir", "waren", "hatten", "konnten"],
          ["ihr", "wart", "hattet", "konntet"],
          ["sie, Sie", "waren", "hatten", "konnten"]
        ]
      },
      examples: [
        { tr: "As a child I was often sick.", note: "als Kind: no article" },
        { tr: "We had a big garden.", note: "wir hatten" },
        { tr: "My grandpa had a dog.", note: "er hatte, the same as ich hatte" },
        { tr: "Back then we spent every summer at the sea.", note: "früher + sein in the plural: waren" },
        { tr: "Back then I didn't have a cell phone.", note: "damals" },
        { tr: "What was your childhood like?", note: "Wie war ...?" }
      ]
    },
    vocab: [
      "childhood",
      "kindergarten, preschool",
      "elementary school",
      "teacher (man)",
      "teacher (woman)",
      "village, small town",
      "city",
      "garden, yard",
      "dog",
      "bicycle, bike",
      "earlier, in the past",
      "back then"
    ],
    exercises: [
      {
        tr: "The Präteritum of sein, all persons.",
        why: "<i>War, warst, war, waren, wart, waren</i>: irregular forms to learn by heart. In the 1st and 3rd person singular the form is identical."
      },
      {
        tr: "The Präteritum of haben, all persons.",
        why: "<i>Hatte, hattest, hatte, hatten, hattet, hatten</i>: <i>haben</i> is irregular in the Präteritum. The stem is <i>hatt-</i>, with the endings <i>-e, -est, -e, -en, -et, -en</i>."
      },
      {
        tr: "The Präteritum of können, all persons.",
        why: "<i>Konnte, konntest, konnte, konnten, konntet, konnten</i>: the Umlaut disappears, and the 1st and 3rd person singular are the same."
      },
      {
        q: "How do you say “As a child I had a dog”?",
        opts: ["Als Kind war ich einen Hund.", "Als Kind hatte ich einen Hund.", "Als Kind habe ich einen Hund war."],
        why: "For “to have” use <b>hatte</b>; <i>sein</i> means “to be” and does not take an object. <i>Hund</i> is masculine: <i>einen Hund</i> in the accusative."
      },
      {
        q: "Complete: “Früher ___ wir ein Fahrrad.” (we had, use haben)",
        hint: "haben, Präteritum, wir",
        why: "<b>Hatten</b>: stem <i>hatt-</i> with the ending <i>-en</i>, as in the infinitive. After <i>früher</i> the verb stays in second position."
      },
      {
        q: "Complete: “Als Kind ___ ich oft krank.” (I was, use sein)",
        hint: "sein, Präteritum, ich",
        why: "<b>War</b>: in the first person singular there is no ending."
      },
      {
        q: "Complete the sentence.",
        tr: "Back then we had a house in the village. It was small, but my grandparents had a garden.",
        why: "<i>Wir hatten</i>, <i>es war</i>, <i>die Großeltern hatten</i>: with <i>wir</i> and with a plural subject the form is <i>hatten</i>."
      },
      {
        q: "Translate: “As a child I was often sick.”",
        why: "<i>Als Kind war ich oft krank</i>: <i>als Kind</i> opens the sentence, then <i>war</i> and the subject. <i>Ich war als Kind oft krank</i> is fine too."
      },
      {
        tr: "As a child I had a dog, and he was very sweet.",
        why: "In <i>Hund</i> the <b>u</b> is short and the final <b>d</b> sounds like a <b>t</b>; <i>lieb</i> has a long <b>i</b> and ends in a voiceless <b>p</b>."
      },
      {
        tr: "Back then we spent every summer at the sea, and we had a lot of fun.",
        why: "In <i>Früher</i> the <b>ü</b> is long: round your lips as for “oo” while the tongue says “ee”. In <i>Spaß</i> the initial <b>sp</b> sounds like [ʃp] (“shp”) and <b>ß</b> is a voiceless <b>s</b>."
      }
    ]
  },
  "lesson:a2-u01-l2": {
    theme: "When I was little",
    title: "When I was little, ...",
    objectives: [
      "link two events with als (a single event or period in the past) and wenn (repeated occasions)",
      "put the finite verb at the end of the clause after als and wenn",
      "start the main clause with the verb when the subordinate clause comes first"
    ],
    theory: [
      {
        h: "Als for one event or period, wenn for repeated occasions",
        p: "German has two words for the temporal “when”. <strong>Als</strong> introduces a <b>single</b> event or one single period in the past (even with repeated actions inside it): <em>Als ich zehn war, sind wir nach Berlin umgezogen</em>; <em>Als ich klein war, bin ich jeden Tag Fahrrad gefahren</em>. <strong>Wenn</strong> introduces a <b>repeated</b> event (even in the past: <em>Immer wenn es geschneit hat, ...</em>) or an event in the <b>present or future</b>: <em>Wenn ich müde bin, gehe ich früh ins Bett</em>. In the subordinate clause the finite verb goes <b>to the end</b>."
      },
      {
        contrast: "English uses one word, <em>when</em>, for all of this, and the word order does not change: “When I was little, we lived in a village.” German makes you choose between <em>als</em> and <em>wenn</em>, and the finite verb moves to the end: <em>Als ich klein war, ...</em>, not “Als ich war klein”. When the subordinate clause comes first, the main clause starts with its verb right after the comma, an inversion English does not have: <em>Als ich klein war, haben wir in einem Dorf gewohnt.</em> For a direct question there is a third word, <em>wann</em>. Also keep in mind that <em>wenn</em> can mean “if” as well as “when”: <em>Wenn ich Zeit habe, ...</em>."
      },
      {
        trap: "When an English sentence has “whenever” or “every time” (“Every time it snowed, we went sledding”), the German needs <b>wenn</b>, even in the past. “Would” alone does not decide between <em>als</em> and <em>wenn</em> (“When I was little, I would ride my bike every day” is <em>als</em>): <em>Immer wenn es geschneit hat, sind wir Schlitten gefahren</em>. To decide, ask whether you mean one episode or one single period in the past (<em>als</em>, even if habits happen inside it: <em>Als ich klein war, bin ich jeden Tag Fahrrad gefahren</em>) or separate occasions that repeat (<em>wenn</em>). <em>Als</em> is never used for the present or future."
      },
      {
        tip: "<em>Als</em> is also the word for “than” (<em>älter als ich</em>), but here it has a different job: it links two clauses. With the Perfekt in the subordinate clause the finite verb (the auxiliary) goes to the very end, after the participle: <em>Als wir in Wien gewohnt haben, ...</em>"
      }
    ],
    grammar: {
      title: "Als and wenn with the verb at the end",
      note: "After <b>als</b> and <b>wenn</b> the finite verb goes <b>to the end</b>; if the subordinate clause comes first, the main clause begins with the verb.",
      table: {
        head: ["situation", "word", "example"],
        rows: [
          ["a single event in the past", "als", "Als ich zehn war, sind wir umgezogen."],
          ["a repeated event in the past", "wenn", "Immer wenn es geschneit hat, sind wir Schlitten gefahren."],
          ["present or future", "wenn", "Wenn ich müde bin, gehe ich früh ins Bett."]
        ]
      },
      examples: [
        { tr: "When I was little, we lived in a village.", note: "als: a closed period; then verb + subject" },
        { tr: "When we lived in Vienna, I often rode my bike.", note: "Perfekt in the subordinate clause: gewohnt haben" },
        { tr: "When I was ten, we moved to Berlin.", note: "als: a single event" },
        { tr: "Whenever it snowed, we went sledding.", note: "immer wenn: a repeated event" },
        { tr: "Every time my grandma visited us, she baked a cake.", note: "jedes Mal, wenn" },
        { tr: "When I'm tired, I go to bed early.", note: "wenn: present" }
      ]
    },
    vocab: [
      "moving (to a new home)",
      "vacation, holidays (plural only)",
      "summer",
      "winter",
      "snow",
      "sled",
      "grandma",
      "grandpa",
      "neighbor",
      "always",
      "often",
      "every time"
    ],
    exercises: [
      {
        q: "Which word? “___ ich klein war, haben wir in einem Dorf gewohnt.” (when I was little)",
        opts: ["Als", "Wenn", "Wann"],
        why: "A closed period of the past: <b>als</b>. <i>Wenn</i> would be for repeated events or for the present."
      },
      {
        q: "Which word? “___ es geschneit hat, sind wir Schlitten gefahren.” (whenever it snowed)",
        opts: ["Als", "Wenn", "Wann"],
        why: "“Whenever” signals a repeated event: <b>wenn</b>, even though the sentence is in the past."
      },
      {
        q: "Which sentence is correct?",
        opts: [
          "Als ich klein war, wir haben viel gespielt.",
          "Als ich klein war, haben wir viel gespielt.",
          "Als ich war klein, haben wir viel gespielt."
        ],
        why: "In the subordinate clause the verb goes to the end (<i>klein war</i>); the main clause then begins with the verb: <i>haben wir</i>."
      },
      {
        q: "Which sentences are correct? (more than one)",
        opts: [
          "Als ich zehn war, sind wir umgezogen.",
          "Wenn ich müde bin, trinke ich Kaffee.",
          "Als ich Kind war, ich habe viel gespielt.",
          "Immer wenn wir Ferien hatten, sind wir ans Meer gefahren."
        ],
        why: "The third is wrong: after the subordinate clause the main clause begins with the verb (<i>habe ich viel gespielt</i>). The others respect the distinction between <i>als</i> and <i>wenn</i>."
      },
      {
        q: "Complete the sentence.",
        tr: "When I was little, we lived in a village.",
        why: "<i>Als</i> introduces a closed period of the past; the participle (<i>gewohnt</i>, or <i>gelebt</i>) closes the main clause."
      },
      {
        q: "Complete the sentence.",
        tr: "Whenever it snowed in winter, we went sledding.",
        why: "<i>Immer wenn</i> marks a repeated event, so <b>wenn</b> (lowercase, after <i>Immer</i>). In the main clause the finite verb (<i>sind</i>) comes before the subject."
      },
      {
        q: "Complete the sentence.",
        tr: "When we lived in Vienna, I often rode my bike.",
        why: "In a subordinate clause in the Perfekt the participle (<i>gewohnt</i>) comes before the auxiliary (<i>haben</i>), which stands at the very end."
      },
      {
        q: "Translate: “When I was ten, we moved to Berlin.” (use umziehen)",
        why: "<i>Als</i> for a single event. The Perfekt of <i>umziehen</i> uses <b>sein</b>: <i>sind umgezogen</i>."
      },
      {
        tr: "When I was ten we moved to Berlin, and I didn't have any friends there.",
        why: "In <i>keine</i> the <b>ei</b> sounds like English “eye”; in <i>Freunde</i> the <b>eu</b> is a diphthong like “oy” in “boy”. <i>Berlin</i> is stressed on the last syllable."
      },
      {
        tr: "Whenever it snowed, we went sledding.",
        why: "In <i>geschneit</i> and <i>Schlitten</i> the <b>sch</b> is [ʃ], like “sh” in “ship”; <i>wenn</i> begins with a <b>w</b> pronounced like English “v”."
      }
    ]
  },
  "lesson:a2-u01-l3": {
    theme: "Rules and permissions",
    title: "I had to, I could, because ...",
    objectives: [
      "use musste, konnte, wollte and durfte in the Präteritum",
      "give a reason with weil and the verb at the end",
      "talk about the rules and bans of your childhood"
    ],
    theory: [
      {
        h: "The modals in the Präteritum",
        p: "To say what you had to, wanted to or could do as a child, use the modals in the <strong>Präteritum</strong>: <em>ich musste</em> (I had to), <em>ich konnte</em> (I could, was able to), <em>ich durfte</em> (I was allowed to), <em>ich wollte</em> (I wanted to). In the Präteritum <em>müssen, können, dürfen</em> lose their Umlaut, while <em>wollen</em> and <em>sollen</em> never had one. The modal goes with an infinitive at the end of the clause: <em>Ich musste jeden Tag Hausaufgaben machen.</em>"
      },
      {
        contrast: "English modals are defective: <em>must</em> has no past (we say “had to”), and <em>can</em> and <em>may</em> borrow “could” and “was allowed to”. All four German verbs have their own Präteritum forms; learn the stems <em>konnt-</em>, <em>musst-</em>, <em>durft-</em> and <em>wollt-</em> and add the endings <em>-e, -est, -e, -en, -et, -en</em>. English “could” is also ambiguous: “I couldn't go out” can mean I was unable to or I wasn't allowed to. German makes you choose: <em>Ich konnte nicht ausgehen</em> (unable) or <em>Ich durfte nicht ausgehen</em> (not permitted). <em>Können</em> is ability or possibility, <em>dürfen</em> is permission. As with <em>sein</em> and <em>haben</em>, spoken German prefers the Präteritum of modals to the Perfekt: <em>Ich konnte nicht kommen</em> is more natural than <em>Ich habe nicht kommen können</em>."
      },
      {
        trap: "After <b>weil</b> (“because”) the finite verb goes to the end, after the infinitive: <em>..., weil ich arbeiten musste</em>, not “weil ich musste arbeiten” and not “weil musste ich arbeiten”. In English the order does not change after “because” (“because I had to work”), which is exactly why this error is so common. The comma before <em>weil</em> is mandatory."
      },
      {
        tip: "To give a reason without moving the verb you can use <em>denn</em> (<em>Ich war müde, denn ich musste früh aufstehen</em>), but here <em>weil</em> is the word to practice. To the question <em>Warum?</em> you can answer with the subordinate clause alone: <em>Warum warst du traurig? Weil ich nicht ins Kino gehen durfte.</em>"
      }
    ],
    grammar: {
      title: "Modals in the Präteritum and weil",
      note: "In the Präteritum the modals lose their Umlaut (except <b>wollte</b>, which never had one). After <b>weil</b> the finite verb goes to the end.",
      table: {
        head: ["infinitive", "Präteritum (ich)", "meaning", "with weil"],
        rows: [
          ["müssen", "musste", "had to", "weil ich arbeiten musste"],
          ["können", "konnte", "could, was able to", "weil ich nicht schwimmen konnte"],
          ["dürfen", "durfte", "was allowed to", "weil ich nicht ins Kino gehen durfte"],
          ["wollen", "wollte", "wanted to", "weil ich spielen wollte"]
        ]
      },
      examples: [
        { tr: "I had to do my homework every day.", note: "ich musste + infinitive at the end" },
        { tr: "We weren't allowed to watch TV for long.", note: "dürfen: wir durften" },
        { tr: "I wanted to have a dog, but my parents didn't want me to have one.", note: "wollen: ich wollte, sie wollten" },
        { tr: "I was sad because I wasn't allowed to go to the movies.", note: "weil: the verb durfte goes to the end" },
        { tr: "I couldn't come because I had to work.", note: "weil ich arbeiten musste" },
        { tr: "We could play in the garden because the weather was nice.", note: "weil ... war" }
      ]
    },
    vocab: [
      "homework assignment",
      "rule",
      "television, TV set",
      "allowance, pocket money",
      "sweets, candy (plural of <i>die Süßigkeit</i>)",
      "cell phone",
      "birthday",
      "pet",
      "punishment",
      "strict",
      "allowed",
      "forbidden"
    ],
    exercises: [
      {
        q: "Which sentence is correct?",
        opts: [
          "Ich konnte nicht kommen, weil musste ich arbeiten.",
          "Ich konnte nicht kommen, weil ich musste arbeiten.",
          "Ich konnte nicht kommen, weil ich arbeiten musste."
        ],
        why: "After <i>weil</i> the finite verb (<i>musste</i>) goes to the end, after the infinitive <i>arbeiten</i>."
      },
      {
        q: "Complete: “Ich ___ jeden Tag Hausaufgaben machen.” (I had to, use müssen)",
        hint: "müssen, Präteritum, ich",
        why: "<b>Musste</b>: no Umlaut and the ending <i>-te</i>; with <i>ich</i> nothing else is added."
      },
      {
        q: "Complete: “Wir ___ nicht lange fernsehen.” (we weren't allowed to, use dürfen)",
        hint: "dürfen, Präteritum, wir",
        why: "<b>Durften</b>: <i>dürfen</i> loses its Umlaut, and with <i>wir</i> the ending is <i>-en</i>."
      },
      {
        q: "Complete: “Ich war traurig, ___ ich nicht ins Kino gehen durfte.” (because, use weil)",
        hint: "use weil",
        why: "<b>Weil</b> sends the verb to the end: <i>..., weil ich nicht ins Kino gehen durfte</i>."
      },
      {
        q: "Match each form to its meaning.",
        pairs: ["I had to", "I could, I was able to", "I wanted to", "I was allowed to"]
      },
      {
        q: "Put the words in order.",
        tr: "I couldn't come because I had to work.",
        why: "In the main clause <i>konnte</i> is in second position; in the subordinate clause <i>weil ich arbeiten musste</i> the finite verb goes to the end."
      },
      {
        q: "Complete the sentence with aufstehen and müssen in the Präteritum.",
        tr: "I was tired because I had to get up early.",
        why: "The separable verb stays whole with the modal: <i>früh aufstehen musste</i>, with <i>musste</i> at the end."
      },
      {
        q: "Translate: “I couldn't play because I had to do my homework.”",
        why: "<i>Ich konnte nicht spielen, weil ich Hausaufgaben machen musste</i>. <i>Durfte</i> is accepted too, if you mean a ban."
      },
      {
        tr: "I wasn't allowed to watch TV for long, because I had to go to bed early.",
        why: "In <i>durfte</i> the <b>u</b> is short; in <i>früh</i> the <b>ü</b> is long. In <i>lange</i> the <b>ng</b> is a single nasal [ŋ], as in “singer”, without an extra [ɡ] sound, unlike English “finger”."
      },
      {
        tr: "As a child I wasn't allowed to eat sweets, because my parents were strict.",
        why: "In <i>Süßigkeiten</i> the <b>ü</b> is long and the <b>ß</b> is a voiceless <b>s</b>; <i>streng</i> begins with [ʃtr], “sh” followed by “tr”."
      }
    ]
  },
  "lesson:a2-u01-l4": {
    theme: "Memories",
    title: "Do you remember?",
    objectives: [
      "use the reflexive pronouns mich, dich, sich, uns, euch",
      "say sich erinnern an and sich freuen auf with the right case",
      "form the Perfekt of reflexive verbs with haben"
    ],
    theory: [
      {
        h: "Reflexive verbs: mich, dich, sich, uns, euch",
        p: "A verb is <b>reflexive</b> when the action turns back on the subject: <em>Ich erinnere mich</em> (I remember). The pronoun changes with the person: <em>mich, dich, sich, uns, euch, sich</em>. In a main clause with the subject first it comes after the finite verb: <em>Du erinnerst dich an unsere Schule.</em> In questions the verb comes first and the pronoun follows the subject: <em>Erinnerst du dich an unsere Schule?</em> In the Perfekt the auxiliary is <em>haben</em> and the pronoun normally stands near the start of the middle field, after a pronoun subject: <em>Wir haben uns am Bahnhof getroffen. Gestern haben wir uns getroffen. Gestern habe ich mich mit Anna getroffen.</em> In a subordinate clause it comes before the verb at the end, after the subject: <em>weil ich mich erinnere</em>. With <em>sich erinnern</em> and <em>sich freuen</em> you learn the preposition and its case together with the verb: <em>sich erinnern an</em> + accusative, <em>sich freuen auf</em> + accusative (looking forward to something in the future), <em>sich freuen über</em> + accusative (being glad about something present or past)."
      },
      {
        contrast: "English has far fewer reflexive verbs, and most of the German ones have no reflexive pronoun in English. “I remember my teacher” is transitive, while German says <em>Ich erinnere mich an meine Lehrerin</em>. “We met at the station” has no “ourselves”: <em>Wir haben uns am Bahnhof getroffen</em>, where <em>uns</em> means “each other”. Prepositions differ too: “look forward <b>to</b>” is <em>sich freuen <b>auf</b></em>, “interested <b>in</b>” is <em>sich interessieren <b>für</b></em>, “annoyed <b>about</b>” is <em>sich ärgern <b>über</b></em>. Conversely, English “enjoy yourself” can be <em>Amüsier dich!</em> or <em>Viel Spaß!</em>, the second being a noun phrase rather than a reflexive verb. The German pronoun is also simpler than “myself, yourself, themselves”: for all of <em>er, sie, es, sie, Sie</em> it is just <em>sich</em>."
      },
      {
        trap: "In the 1st and 2nd person the pronoun has two forms: the accusative <em>mich, dich</em> and the dative <em>mir, dir</em>. English “I remember” has no reflexive pronoun, but German requires <em>mich</em> here. Learn <em>sich erinnern</em> with an accusative reflexive pronoun, not <em>mir</em>: <em>Ich erinnere mich</em>, not “Ich erinnere mir”. Watch out also for <em>erinnern</em> without a pronoun: <em>Ich erinnere dich an den Termin</em> means “I remind you of the appointment”, which is a different thing from “I remember”."
      },
      {
        tip: "Always learn a reflexive verb together with its preposition: <em>sich erinnern an</em>, <em>sich freuen auf/über</em>, <em>sich interessieren für</em>, <em>sich ärgern über</em>, <em>sich treffen mit</em>. One verb, one preposition, one case."
      }
    ],
    grammar: {
      title: "The reflexive pronoun",
      note: "In a main clause with the subject first the pronoun follows the finite verb (with a pronoun subject after inversion it follows the subject: <i>Gestern habe ich mich ...</i>; in a subordinate clause: <i>weil ich mich erinnere</i>). In the 3rd person (singular and plural) the pronoun is always <b>sich</b>.",
      table: {
        head: ["person", "pronoun", "example"],
        rows: [
          ["ich", "mich", "Ich erinnere mich an meine Lehrerin."],
          ["du", "dich", "Erinnerst du dich an unsere Schule?"],
          ["er, sie, es", "sich", "Er freut sich auf die Ferien."],
          ["wir", "uns", "Wir haben uns am Bahnhof getroffen."],
          ["ihr", "euch", "Freut ihr euch auf das Klassentreffen?"],
          ["sie, Sie", "sich", "Sie ärgern sich über das Wetter."]
        ]
      },
      examples: [
        { tr: "Do you remember our school?", note: "sich erinnern an + accusative" },
        { tr: "I remember my teacher well.", note: "ich erinnere mich" },
        { tr: "We met at the train station.", note: "Perfekt with haben: haben uns getroffen" },
        { tr: "He is looking forward to the vacation.", note: "sich freuen auf + accusative" },
        { tr: "She is annoyed about the weather.", note: "sich ärgern über + accusative" },
        { tr: "I'm interested in old photos.", note: "sich interessieren für + accusative" }
      ]
    },
    vocab: [
      "to remember (sich erinnern an)",
      "to be glad about, to look forward to",
      "to get annoyed (about)",
      "to meet (with)",
      "to be interested (in)",
      "to sit down",
      "memory",
      "photo",
      "album",
      "class reunion",
      "classmate",
      "fun"
    ],
    exercises: [
      {
        q: "Which sentence is correct?",
        opts: ["Ich erinnere mir an meine Schule.", "Ich erinnere mich an meine Schule.", "Ich erinnere mich meine Schule."],
        why: "<i>Sich erinnern</i> takes the accusative <b>mich</b> and the preposition <b>an</b>."
      },
      {
        q: "Complete: “Erinnerst du ___ an unsere Lehrerin?” (the reflexive pronoun)",
        hint: "du: accusative",
        why: "<b>Dich</b>: the reflexive pronoun of the 2nd person singular in the accusative."
      },
      {
        q: "Complete: “Wir freuen ___ auf die Ferien.” (the reflexive pronoun)",
        hint: "wir: accusative",
        why: "<b>Uns</b>: for <i>wir</i> the reflexive pronoun is <i>uns</i>."
      },
      {
        q: "Match each verb to its meaning.",
        pairs: ["to remember", "to look forward to", "to get annoyed", "to be interested"]
      },
      {
        q: "Put the words in order.",
        tr: "I remember my female teacher well.",
        why: "The reflexive pronoun follows the finite verb (<i>erinnere mich</i>); <i>an</i> introduces what you remember."
      },
      {
        q: "Complete the sentence.",
        tr: "Yesterday I met up with Anna, and we remembered our school.",
        why: "In the Perfekt the auxiliary is <i>haben</i>: <i>habe mich ... getroffen</i> and <i>haben uns ... erinnert</i>."
      },
      {
        q: "Translate: “I remember my school well.”",
        why: "<i>Ich erinnere mich gut an meine Schule</i>: <i>an</i> + accusative, and <i>gut</i> comes after the pronoun."
      },
      {
        q: "An old classmate recognizes you.",
        setting: "A former classmate greets you on the street.",
        lines: [
          { tr: "Hi Lena! Do you remember me?" },
          { tr: "Say yes, and that you remember him.", answerTr: "Yes, I remember you!" },
          { tr: "We were in elementary school together." },
          { tr: "Say that you often met after school.", answerTr: "Yes, and we often met after school." },
          { tr: "Are you looking forward to the class reunion?" },
          { tr: "Say that you are really looking forward to it.", answerTr: "Yes, I'm really looking forward to it!" }
        ]
      },
      {
        tr: "We often met after school, and I like remembering that time.",
        why: "In <i>ich</i> the <b>ch</b> after a front vowel is [ç], a hissing sound like the <b>h</b> in “huge”. In <i>erinnere</i> the stress falls on the second syllable, and <i>er-</i> is unstressed."
      },
      {
        tr: "I remember my elementary school well, and I'm looking forward to the class reunion.",
        why: "In <i>Grundschule</i> the <b>sch</b> is [ʃ] and the <b>d</b> of <i>Grund</i> sounds like a <b>t</b>; in <i>Klassentreffen</i> the <b>ss</b> is a voiceless <b>s</b>."
      }
    ]
  },
  "lesson:a2-u01-test": {
    theme: "Review",
    title: "Unit 1 review",
    objectives: ["check the Präteritum, als, weil and the modals in the past"],
    theory: [
      {
        p: "Ten questions on the Präteritum, als, weil and the modals in the past (not the reflexive verbs of lesson 4). You pass with 70%. Don't look back at the lessons while you answer: if you don't remember something, it's better to go back and review."
      }
    ],
    exercises: [
      {
        tr: "The Präteritum of sein, all persons.",
        why: "<i>War, warst, war, waren, wart, waren</i>."
      },
      {
        tr: "The Präteritum of müssen, all persons.",
        why: "<i>Musste, musstest, musste, mussten, musstet, mussten</i>: no Umlaut."
      },
      {
        q: "Complete: “Gestern ___ wir keine Zeit.” (we didn't have, use haben)",
        hint: "haben, Präteritum, wir",
        why: "<b>Hatten</b>: stem <i>hatt-</i> and the ending <i>-en</i>."
      },
      {
        q: "Complete: “Meine Eltern haben viel gearbeitet, ___ ich klein war.” (when, a closed period)",
        hint: "a single event in the past",
        why: "A closed period of the past: <b>als</b>."
      },
      {
        q: "Complete: “Ich konnte nicht kommen, ___ ich krank war.” (because, use weil)",
        hint: "use weil",
        why: "<b>Weil</b> introduces the reason and sends the verb (<i>war</i>) to the end."
      },
      {
        q: "Which sentence is correct?",
        opts: [
          "Ich bleibe zu Hause, weil ich müde bin.",
          "Ich bleibe zu Hause, weil ich bin müde.",
          "Ich bleibe zu Hause, weil bin ich müde."
        ],
        why: "After <i>weil</i> the finite verb goes to the end: <i>weil ich müde bin</i>."
      },
      {
        q: "Complete the sentence.",
        tr: "When I was little, I had a dog.",
        why: "<i>War</i> at the end of the subordinate clause; then the main clause begins with the verb: <i>hatte ich</i>."
      },
      {
        q: "Complete the sentence.",
        tr: "I couldn't play because I had to do my homework. (Use können or dürfen for “couldn't”, then machen and müssen.)",
        why: "<i>Konnte</i> or <i>durfte</i> are both possible, depending on whether it is an impossibility or a ban. In the subordinate clause <i>machen</i> comes before the modal <i>musste</i>, which closes the sentence."
      },
      {
        tr: "When I was little, I wasn't allowed to watch TV for long, because my parents were strict.",
        why: "In <i>durfte</i> the <b>u</b> is short; in <i>streng</i> the <b>str</b> begins with [ʃtr]; the <b>ng</b> is a single nasal [ŋ]."
      },
      {
        tr: "When I was a child I had a dog, and I could play with him every day.",
        why: "In <i>Hund</i> the final <b>d</b> sounds like a <b>t</b>; in <i>jeden Tag</i> the final <b>g</b> is a voiceless <b>k</b>."
      }
    ]
  }
});
