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
        { tr: "Back then we spent every summer at the sea.", note: "früher + sein: wir/sie/Sie waren, but ihr wart" },
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
      "village",
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
    title: "I had to, I was allowed to, because ...",
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
      note: "In the Präteritum <b>müssen</b>, <b>können</b> and <b>dürfen</b> lose their Umlaut (musste, konnte, durfte); <b>wollen</b> and <b>sollen</b> never had one. After <b>weil</b> the finite verb goes to the end.",
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
    objectives: ["check the Präteritum, als and wenn, weil, the modals in the past and reflexive verbs with their preposition"],
    theory: [
      {
        p: "Ten questions on the whole unit. You pass with 70%. Don't look back at the lessons while you answer: if you don't remember something, it's better to go back and review."
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
        q: "Complete: “Immer ___ ich Zeit hatte, habe ich gelesen.” (whenever, a repeated event)",
        hint: "a repeated event in the past",
        why: "A repeated event in the past: <b>wenn</b>, not <i>als</i>. In the subordinate clause <i>hatte</i> goes to the end."
      },
      {
        q: "Complete: “Meine Eltern haben viel gearbeitet, ___ ich klein war.” (when, a closed period)",
        hint: "a single event in the past",
        why: "A closed period of the past: <b>als</b>."
      },
      {
        q: "Complete the sentence.",
        tr: "I have fond memories of my childhood.",
        why: "<i>Sich erinnern an</i> + accusative: the reflexive pronoun <i>mich</i> follows the verb, then comes the preposition <i>an</i>."
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
  },
  "unit:a2-u02": {
    title: "On the road",
    grammarNote: "wohin? with nach, zu and in + accusative · present with a time word and Futur I · Perfekt and register in a hotel · wenn + Perfekt for a future action already completed"
  },
  "lesson:a2-u02-l1": {
    theme: "At the station",
    title: "At the station: nach Wien, in die Schweiz",
    objectives: [
      "say where you are going with nach, in + accusative and zu",
      "tell wohin? (destination) apart from wo? (location)",
      "buy a ticket and ask for information at the station"
    ],
    theory: [
      {
        h: "Wohin? nach, in or zu",
        p: "To the question <b>wohin?</b> (where to?) German picks the preposition according to the destination. With <b>cities and countries without an article</b> it uses <strong>nach</strong>: <em>Ich fahre nach Wien. Wir fliegen nach Italien.</em> With <b>countries that have an article</b> it uses <strong>in</strong> + <b>accusative</b>: <em>Wir fahren in die Schweiz.</em> Towards <b>a person</b>, and usually towards <b>a building or a specific place</b>, it uses <strong>zu</strong> + dative: <em>Ich fahre zu meiner Tante. Wir gehen zum Bahnhof.</em> With <em>zu</em> + article there are the contractions <em>zum</em> (zu dem) and <em>zur</em> (zu der)."
      },
      {
        contrast: "English uses one little word, <em>to</em>, for almost every destination (“to Vienna, to Switzerland, to my aunt's, to the station”), and often just drops it (“I'm going home”). German has to choose: <em>nach</em> for cities and countries without an article, <em>in die</em> for countries with one, <em>zu</em> for people and places. The list of countries with an article is short and has to be learned: <em>die Schweiz</em>, <em>die Türkei</em>, <em>die USA</em>, while <em>Italien</em>, <em>Deutschland</em> and <em>Österreich</em> have none. English also has a single <em>where</em> for both “where are you?” and “where are you going?”, with <em>where to</em> now rare; German keeps two questions, <em>wo?</em> (location) and <em>wohin?</em> (direction), and the second one changes the case after <em>in</em>."
      },
      {
        trap: "The case depends on the question the sentence answers. With <b>wohin?</b> (movement towards a place) <em>in</em> takes the <b>accusative</b>: <em>Wir fahren in die Schweiz</em>. With <b>wo?</b> (location, where someone is) it takes the <b>dative</b>: <em>Meine Tante wohnt in der Schweiz</em>. Two nearly identical sentences, two different cases, and <em>die</em> against <em>der</em> is the only clue. Watch out for <em>nach die Schweiz</em> as well: it does not exist, because <em>nach</em> does not go with countries that have an article. Since English has no case on nouns, the difference between <em>die</em> and <em>der</em> will not come from your ear, so listen for it deliberately."
      },
      {
        tip: "At the station you only need a few fixed phrases: <em>Eine Fahrkarte nach Wien, bitte.</em> <em>Einfach oder hin und zurück?</em> (one way or round trip?) <em>Von welchem Gleis fährt der Zug ab?</em> Learn <em>die Schweiz</em> together with its article, as a single unit."
      }
    ],
    grammar: {
      title: "Wohin? nach, in + accusative, zu",
      note: "The preposition depends on the destination. <b>nach</b> goes without an article, <b>zu</b> takes the dative (<i>zum</i>, <i>zur</i>), <b>in</b> with wohin? takes the accusative.",
      table: {
        head: ["destination", "preposition", "example"],
        rows: [
          ["cities, countries without an article", "nach", "nach Wien, nach Italien"],
          ["countries with an article", "in + accusative", "in die Schweiz, in die Türkei"],
          ["people", "zu + dative", "zu meiner Tante, zum Arzt"],
          ["buildings, specific places", "zu + dative", "zum Bahnhof, zur Post"],
          ["location (wo?)", "in + dative", "in der Schweiz"]
        ]
      },
      examples: [
        { tr: "I'm going to Vienna.", note: "nach + city, no article" },
        { tr: "We're flying to Italy.", note: "nach + country without an article" },
        { tr: "In summer they go to Switzerland.", note: "wohin? in + accusative: in die Schweiz" },
        { tr: "He's going to his aunt's.", note: "zu + dative: zu seiner Tante" },
        { tr: "We're going to the station.", note: "zu + dative: zum (zu dem) Bahnhof" },
        { tr: "My aunt lives in Switzerland.", note: "wo? in + dative: in der Schweiz" }
      ]
    },
    vocab: [
      "train station",
      "train",
      "platform, track",
      "train ticket",
      "timetable",
      "departure",
      "arrival",
      "Switzerland",
      "country",
      "information (information desk)",
      "one way",
      "round trip"
    ],
    exercises: [
      {
        q: "Complete: “Wohin fährst du? Ich fahre ___ Wien.”",
        opts: ["nach", "in", "zu"],
        why: "With cities without an article you use <b>nach</b>. <i>In Wien</i> says where you are, not where you are going."
      },
      {
        q: "You say that you are going to Switzerland. Which sentence is correct?",
        opts: ["Wir fahren nach die Schweiz.", "Wir fahren in die Schweiz.", "Wir fahren in der Schweiz."],
        why: "<i>Die Schweiz</i> has an article: you need <b>in</b> + accusative (<i>in die Schweiz</i>). <i>In der Schweiz</i> is the dative and says where you are."
      },
      {
        q: "Complete: “Morgen fliege ich ___ Italien.” (to a country without an article)",
        hint: "nach, in or zu?",
        why: "<i>Italien</i> has no article, so <b>nach</b>, as with cities."
      },
      {
        q: "Complete: “Ich fahre ___ meiner Tante.” (towards a person)",
        hint: "preposition + dative",
        why: "Towards a person you use <b>zu</b> + dative: <i>zu meiner Tante</i>."
      },
      {
        q: "Complete the sentence.",
        tr: "I'm going to Vienna. Then we're going to Switzerland, and in the evening I'm going to my friend's.",
        why: "Three destinations, three prepositions: <i>nach Wien</i>, <i>in die Schweiz</i> (accusative, country with an article), <i>zu meinem Freund</i> (person, dative)."
      },
      {
        q: "Match each destination with its translation.",
        pairs: ["to Vienna", "to Switzerland (destination)", "to my aunt's", "to the station"]
      },
      {
        q: "Translate: “Tomorrow we're going to Switzerland.”",
        why: "<i>Morgen fahren wir in die Schweiz</i>: <i>fahren</i> for a means of transport; <i>reisen</i> is an alternative. The order can change (<i>Wir fahren morgen ...</i>), the conjugated verb stays in second position."
      },
      {
        q: "At the station ticket counter.",
        setting: "You are buying a ticket to Vienna.",
        lines: [
          { tr: "Good morning. Where are you going?" },
          { tr: "Say that you are going to Vienna.", answerTr: "I'm going to Vienna." },
          { tr: "One way or round trip?" },
          { tr: "Answer: round trip, please.", answerTr: "Round trip, please." },
          { tr: "Are you traveling on afterwards?" },
          { tr: "Say that afterwards you are going to your aunt's.", answerTr: "Yes, afterwards I'm going to my aunt's." }
        ]
      },
      {
        tr: "Good morning, I'd like a ticket to Vienna, round trip, please.",
        why: "In <i>Fahrkarte</i> the first <b>a</b> is long; in <i>Wien</i> the <b>W</b> is read [v] and <b>ie</b> is a long <b>i</b>; <i>zurück</i> has a short <b>ü</b>."
      },
      {
        tr: "In summer I'm going to Switzerland, and then to my aunt's in Vienna.",
        why: "In <i>Schweiz</i> the <b>sch</b> is read [ʃ], the <b>w</b> is [v], <b>ei</b> sounds [aɪ] and the final <b>z</b> is [ts]. In <i>Sommer</i> the initial <b>S</b> before a vowel is usually voiced."
      }
    ]
  },
  "lesson:a2-u02-l2": {
    theme: "Travel plans",
    title: "Tomorrow I leave, I will leave",
    objectives: [
      "talk about the future with the present and a time word",
      "form the Futur I with werden + infinitive at the end",
      "recognize when the Futur I is useful (promise, decision, prediction)"
    ],
    theory: [
      {
        h: "The future: present with a time word, or Futur I",
        p: "To talk about the future German usually uses the <b>present</b> together with a time word: <em>Morgen fahre ich nach Wien. Nächste Woche fliegen wir nach Spanien.</em> There is also the <strong>Futur I</strong>: <em>werden</em> conjugated in second position and the <b>infinitive at the end</b> of the sentence: <em>Ich werde dich morgen anrufen. Wir werden im Sommer in die Schweiz fahren.</em> The Futur I is used for a promise, a decision, a prediction (<em>Es wird heute Abend regnen</em>) or when there is no time word."
      },
      {
        contrast: "English has no future tense of its own: it uses the modal <em>will</em> (“I will call you”) and, for plans, the present continuous or <em>going to</em> (“I'm flying to Vienna tomorrow”, “I'm going to call you”). German <em>Morgen fahre ich nach Wien</em> corresponds to the plan form, and <em>Ich werde ... fahren</em> to <em>will</em>, though the match is not exact. The mechanics differ: <em>will</em> is followed by a bare infinitive right after it (“will go”), while in German <em>werden</em> sits in second position and the infinitive goes to the end: <em>Ich werde morgen nach Wien fahren</em>. Also note that <em>werden</em> is conjugated for every person (<em>du wirst</em>), whereas <em>will</em> never changes."
      },
      {
        trap: "With the Futur I the main verb stays in the infinitive: <em>Ich werde morgen nach Wien fahren</em>, not “Ich werde fahre”. With a separable verb the infinitive stays together: <em>Ich werde dich anrufen</em>. Careful: <em>werden</em> is also a full verb meaning “to become”: <em>Er wird Arzt</em> (he becomes a doctor), <em>Es wird kalt</em> (it is getting cold). If there is no infinitive at the end, it is not a future. English speakers may also be tempted to put the infinitive straight after <em>werden</em>, as with “will go”; in a main clause it belongs at the very end."
      },
      {
        tip: "First look for a time word: <em>morgen, nächste Woche, im Sommer, bald, am Wochenende</em>. If there is one, the present is enough. If you want a tone of promise or decision (<em>Ich werde es nicht vergessen</em>), use the Futur I. In both cases the time word can come first: <em>Morgen fahre ich ...</em>, with the verb in second position."
      }
    ],
    grammar: {
      title: "The Futur I with werden",
      note: "<b>werden</b> is conjugated in second position, the main verb goes <b>in the infinitive at the end</b>. With a time word the present is the normal form.",
      table: {
        head: ["person", "werden", "example"],
        rows: [
          ["ich", "werde", "Ich werde fahren."],
          ["du", "wirst", "Du wirst fahren."],
          ["er, sie, es", "wird", "Es wird regnen."],
          ["wir", "werden", "Wir werden fliegen."],
          ["ihr", "werdet", "Ihr werdet ankommen."],
          ["sie, Sie", "werden", "Sie werden bleiben."]
        ]
      },
      examples: [
        { tr: "Tomorrow I'm going to Vienna.", note: "present + morgen: normal form" },
        { tr: "Next week we're flying to Spain.", note: "present + nächste Woche" },
        { tr: "I'll call you tomorrow.", note: "Futur I: separable verb joined in the infinitive at the end" },
        { tr: "It will rain tonight.", note: "Futur I as a prediction" },
        { tr: "In summer we will go to Switzerland.", note: "werden in second position, infinitive at the end" },
        { tr: "I'll send you a photo.", note: "Futur I: a promise" }
      ]
    },
    vocab: [
      "trip, journey",
      "vacation, time off",
      "week",
      "weekend",
      "flight",
      "airport",
      "suitcase",
      "ticket (flight, event)",
      "tomorrow",
      "next week",
      "soon",
      "in summer"
    ],
    exercises: [
      {
        tr: "The present of werden, all persons.",
        why: "<i>Werde, wirst, wird, werden, werdet, werden</i>: <i>werden</i> is irregular (<i>e</i> becomes <i>i</i> in <i>du</i> and <i>er, sie, es</i>) and it is the auxiliary of the Futur I."
      },
      {
        tr: "The Futur I of fahren, all persons.",
        why: "<i>Ich werde fahren, du wirst fahren, er wird fahren, wir werden fahren, ihr werdet fahren, sie werden fahren</i>: <i>werden</i> changes, the infinitive stays the same."
      },
      {
        tr: "The Futur I of fliegen, all persons.",
        why: "In the Futur I the infinitive is not conjugated: <i>ich werde fliegen, du wirst fliegen ...</i>. In a normal sentence it goes at the end."
      },
      {
        q: "Which sentence uses the Futur I correctly?",
        opts: [
          "Ich werde morgen nach Wien fahren.",
          "Ich werde morgen nach Wien fahre.",
          "Ich werde fahren morgen nach Wien."
        ],
        why: "<b>werden</b> in second position and the <b>infinitive at the end</b>. The main verb is not conjugated and does not go in second position: it stays in the infinitive, at the end."
      },
      {
        q: "Which sentence is correct? (Tomorrow I'm going to Berlin.)",
        opts: [
          "Morgen ich fahre nach Berlin.",
          "Morgen fahre ich nach Berlin.",
          "Morgen werde fahre ich nach Berlin."
        ],
        why: "With <i>morgen</i> in first position the conjugated verb stays in second (<i>fahre</i>) and the subject follows it: <i>Morgen fahre ich ...</i>."
      },
      {
        q: "Complete: “Wir ___ im Sommer nach Spanien fliegen.” (we will, use werden)",
        hint: "werden, wir",
        why: "<b>Werden</b>: in the first person plural the form is the same as the infinitive, and <i>fliegen</i> stays in the infinitive at the end."
      },
      {
        q: "Complete: “Nächste Woche ___ ich nach Hamburg.” (present of fahren)",
        hint: "fahren, present, ich",
        why: "<b>Fahre</b>: with <i>nächste Woche</i> the present is enough. <i>Nächste Woche</i> is in first position, the verb in second."
      },
      {
        q: "Complete the sentence (for “to send”, both schicken and senden work).",
        tr: "Tomorrow I'll send you a photo.",
        why: "<i>Morgen werde ich dir ein Foto schicken</i>: after <i>morgen</i> the conjugated verb (<i>werde</i>) is in second position and the subject follows it; the infinitive goes at the end. <i>Senden</i> also works."
      },
      {
        tr: "Next week I'm going to Vienna by train, and in summer we'll go to Switzerland by plane.",
        why: "In <i>Nächste</i> the final <b>st</b> stays [st], not [ʃt]. In <i>werden</i> the <b>w</b> is read [v]."
      },
      {
        tr: "Tomorrow I'm going to Hamburg, and next week I'll visit my friend.",
        why: "In <i>Hamburg</i> the final <b>g</b> is usually a voiceless <b>k</b> ([k]); in <i>besuchen</i> the <b>ch</b> after <b>u</b> is [x] and the stress falls on the second syllable, because <i>be-</i> is unstressed."
      }
    ]
  },
  "lesson:a2-u02-l3": {
    theme: "At the hotel",
    title: "I've booked a room",
    objectives: [
      "say that you have reserved or booked something with the Perfekt",
      "form the participle of reservieren and buchen",
      "choose between Sie and du in a hotel and use polite phrases"
    ],
    theory: [
      {
        h: "The Perfekt: booking and arriving",
        p: "To say that you have already booked, use the <strong>Perfekt</strong>: auxiliary in second position and <b>participle II</b> at the end. <em>Ich habe ein Zimmer reserviert. Wir haben ein Doppelzimmer gebucht.</em> Verbs in <em>-ieren</em> do not take <em>ge-</em>: <em>reservieren → reserviert</em>. <em>Buchen</em> is regular: <em>gebucht</em>. In general, intransitive verbs of movement or change of state take <em>sein</em>, while transitive and reflexive verbs take <em>haben</em>. Here you need <em>ankommen</em> and <em>abfahren</em>: <em>Wir sind gestern Abend angekommen</em> (participle <em>angekommen</em>, with <em>ge-</em> in the middle)."
      },
      {
        contrast: "English always builds the present perfect with “have”: “I have arrived”, “we have booked”. German uses <em>sein</em> for verbs of movement or change of state: <em>Wir sind angekommen</em>, not “Wir haben angekommen”. In everyday speech German uses the Perfekt where English often uses the simple past (“we arrived last night” = <em>Wir sind gestern Abend angekommen</em>). For politeness English has only <em>you</em>, which works for everyone; German makes you choose between <em>du</em> and <em>Sie</em>, and <em>Sie</em> is conjugated like the third person <b>plural</b>: <em>Haben Sie ein Zimmer?</em> English “Could you ...?” is close to <em>Könnten Sie ...?</em>, a polite request."
      },
      {
        trap: "Do not say “Ich habe ein Zimmer reservieren” (infinitive instead of the participle) and do not forget the right auxiliary: <em>Wir sind angekommen</em>, not “Wir haben angekommen”. As for register: at a reception desk you normally use <em>Sie</em>, and <em>Könnten Sie mir bitte ...?</em> is more polite than <em>Können Sie ...?</em>. Among friends or in a youth hostel among young people <em>du</em> is usual, but when in doubt choose <em>Sie</em>."
      },
      {
        tip: "Three sentences to have ready at a hotel: <em>Ich habe ein Zimmer reserviert.</em> <em>Haben Sie ein Zimmer für zwei Nächte frei?</em> <em>Könnten Sie mir bitte den Schlüssel geben?</em> The participle of verbs in <em>-ieren</em> ends in <em>-iert</em> and takes no <em>ge-</em>."
      }
    ],
    grammar: {
      title: "The Perfekt: reservieren, buchen, ankommen",
      note: "Auxiliary in second position, participle II at the end. <b>haben</b> with most verbs, <b>sein</b> in general with intransitive verbs of movement or change of state (here ankommen, abfahren), not with transitive or reflexive ones. Verbs in <b>-ieren</b> have no <i>ge-</i>.",
      table: {
        head: ["infinitive", "participle II", "example"],
        rows: [
          ["reservieren", "reserviert", "Ich habe ein Zimmer reserviert."],
          ["buchen", "gebucht", "Wir haben ein Zimmer gebucht."],
          ["ankommen", "angekommen", "Wir sind gestern angekommen."],
          ["abfahren", "abgefahren", "Der Zug ist abgefahren."]
        ]
      },
      examples: [
        { tr: "I've reserved a room.", note: "-ieren: reserviert, no ge-" },
        { tr: "We've booked a double room for two nights.", note: "haben + gebucht at the end" },
        { tr: "We arrived last night.", note: "ankommen takes sein" },
        { tr: "Do you have a reservation?", note: "polite form with Sie (like the third person plural)" },
        { tr: "Could you help me, please?", note: "Könnten Sie: polite request" },
        { tr: "Have you already booked a hotel?", note: "with du: Hast du ...?" }
      ]
    },
    vocab: [
      "hotel",
      "room",
      "double room",
      "reservation",
      "night",
      "key",
      "breakfast",
      "reception",
      "guest",
      "luggage",
      "to reserve (a room, a table, a seat)",
      "to book (a room, a trip)"
    ],
    exercises: [
      {
        q: "Complete: “Ich habe ein Zimmer ___.” (the participle of reservieren)",
        opts: ["gereserviert", "reserviert", "reservieren"],
        why: "Verbs in <i>-ieren</i> take no <i>ge-</i>: <b>reserviert</b>. The infinitive (<i>reservieren</i>) does not replace the participle."
      },
      {
        q: "Complete: “Wir haben ein Doppelzimmer ___.” (the participle of buchen)",
        hint: "buchen is regular",
        why: "<b>Gebucht</b>: <i>ge-</i> + stem + <i>-t</i>."
      },
      {
        q: "Complete: “Wir ___ gestern Abend im Hotel angekommen.” (haben or sein?)",
        hint: "ankommen is a verb of movement",
        why: "<b>Sind</b>: <i>ankommen</i> expresses a change of place and takes <i>sein</i> in the Perfekt."
      },
      {
        q: "Complete: “Guten Abend, ___ Sie ein Zimmer frei?” (present of haben, polite form)",
        hint: "haben, present, Sie",
        why: "<b>Haben</b>: the polite <i>Sie</i> is conjugated like the third person plural."
      },
      {
        q: "Complete the sentence (for the room, both reservieren and buchen work).",
        tr: "I've booked a room. We arrived last night.",
        why: "<i>Ich habe ein Zimmer reserviert</i> (<i>gebucht</i> also works) and <i>Wir sind gestern Abend angekommen</i>. The two sentences have two different auxiliaries: <i>haben</i> and <i>sein</i>."
      },
      {
        q: "Match each word with its meaning.",
        pairs: ["double room", "reservation", "key", "breakfast"]
      },
      {
        q: "Translate: “We've booked a double room for two nights.”",
        why: "<i>Wir haben ein Doppelzimmer für zwei Nächte reserviert</i>. <i>Gebucht</i> also works; the order of <i>für zwei Nächte</i> and <i>ein Doppelzimmer</i> can change, the participle stays at the end."
      },
      {
        q: "At the reception desk.",
        setting: "You arrive at the hotel and talk to the receptionist.",
        lines: [
          { tr: "Good evening. Do you have a reservation?" },
          { tr: "Say that you have booked a room.", answerTr: "Yes, I've booked a room." },
          { tr: "Have you been traveling for long?" },
          { tr: "Say that you left at five.", answerTr: "Yes, we left at five." },
          { tr: "Breakfast is from seven to ten. Do you have any other questions?" },
          { tr: "Politely ask for the key, using the formal form.", answerTr: "Yes, could you give me the key, please?" }
        ]
      },
      {
        tr: "Good evening, I've booked a double room for two nights.",
        why: "In <i>Doppelzimmer</i> the <b>z</b> is [ts]; <i>Nächte</i> has a <b>ch</b> after <b>ä</b>, that is [ç], a soft hiss. In <i>Abend</i> the <b>b</b> is voiced, because it is not at the end of the syllable."
      },
      {
        tr: "We've booked a room and last night we arrived at the hotel.",
        why: "In <i>angekommen</i> the <b>n</b> and <b>g</b> belong to different parts (<i>an-ge-</i>) and are pronounced [nɡ], not as a single nasal [ŋ]; in <i>gebucht</i> the <b>ch</b> after <b>u</b> is [x], scraped at the back of the throat."
      }
    ]
  },
  "lesson:a2-u02-l4": {
    theme: "After arrival",
    title: "When I've arrived, I'll call you",
    objectives: [
      "use wenn + Perfekt for a future action that is already completed",
      "tell wenn (present, future, repetition) apart from als (a single past event)",
      "combine wenn with the present or with the Futur I in the main clause"
    ],
    theory: [
      {
        h: "Wenn + Perfekt: after I've arrived",
        p: "<strong>Wenn</strong> introduces a fact in the present or the future. When the action of the subordinate clause will be <b>already completed</b> before that of the main clause, the subordinate clause <b>can use the Perfekt</b> to emphasize completion (the present, <em>Wenn ich ankomme, rufe ich dich an</em>, is a normal alternative): <em>Wenn ich angekommen bin, rufe ich dich an</em> (when I've arrived, I'll call you). The conjugated verb (<em>bin</em>) goes <b>to the end</b>; the main clause starts with the verb: <em>rufe ich</em>. In the main clause you can use the present (<em>rufe ich ... an</em>) or the Futur I (<em>werde ich ... anrufen</em>)."
      },
      {
        contrast: "English does something similar and even sounds natural: “When I've arrived, I'll call you”, or just “When I arrive, I'll call you”. In both, English keeps a present form after <em>when</em>, never “when I will arrive”, and in these examples German does the same: <em>Wenn ich ankomme</em> or <em>Wenn ich angekommen bin</em>. Present or Perfekt is the natural choice in the <em>wenn</em> clause here; this is a usage recommendation, not a rule. For one event in the past English also says <em>when</em> (“When we arrived yesterday, it was raining”), but German uses <em>als</em> and the conjugated verb goes to the end: <em>Als wir gestern angekommen sind, hat es geregnet.</em> <em>Als</em> also goes with the Präteritum: <em>Als wir gestern ankamen, regnete es.</em> Here we practice it with the Perfekt. English has one word for all of this; German has <em>wenn</em>, <em>als</em> and, for questions, <em>wann</em>."
      },
      {
        trap: "<em>Als</em> and <em>wenn</em> are not interchangeable: with a single past event you need <b>als</b> (<em>Als ich gestern angekommen bin, ...</em>), with present, future and repeated events you need <b>wenn</b>. Do not write “Wenn ich bin angekommen”: after <em>wenn</em> the conjugated verb goes to the end, after the participle. And do not confuse <em>wenn</em> with <em>wann</em>, the question word (<em>Wann kommst du an?</em>). English “when” is both, so the choice has to be made in German."
      },
      {
        tip: "Build the sentence in two pieces: the subordinate clause <em>Wenn ich angekommen bin,</em> with the verb at the end, then a comma and the main clause starting with the verb, <em>rufe ich dich an</em>. If the subordinate clause comes second, the order is normal: <em>Ich rufe dich an, wenn ich angekommen bin.</em>"
      }
    ],
    grammar: {
      title: "Wenn + Perfekt, als + Perfekt",
      note: "The conjugated verb (the auxiliary) goes <b>to the end</b>, after the participle. If the subordinate clause comes first, the main clause starts with the verb.",
      table: {
        head: ["situation", "word and tense", "example"],
        rows: [
          ["future, already completed", "wenn + Perfekt", "Wenn ich angekommen bin, rufe ich dich an."],
          ["present or future", "wenn + present", "Wenn ich Zeit habe, besuche ich dich."],
          ["single past event", "als + Perfekt", "Als wir gestern angekommen sind, hat es geregnet."]
        ]
      },
      examples: [
        { tr: "When I've arrived, I'll call you.", note: "wenn + Perfekt: auxiliary at the end" },
        { tr: "When we've found the hotel, we'll go and eat.", note: "gefunden haben, then gehen wir" },
        { tr: "When the train has left, I'll call you.", note: "main clause with Futur I: werde ich anrufen" },
        { tr: "When I have time, I come and visit you.", note: "wenn + present" },
        { tr: "When we arrived yesterday, it was raining.", note: "als: a single past event" },
        { tr: "I'll send you a message once I've changed trains.", note: "subordinate clause second: normal order" }
      ]
    },
    vocab: [
      "to arrive",
      "to leave, to depart (vehicle)",
      "to change (vehicle, train)",
      "to call, to phone",
      "delay",
      "message",
      "connection (transfer)",
      "stop (bus, tram)",
      "taxi",
      "connection (route, link)",
      "on time",
      "later"
    ],
    exercises: [
      {
        q: "How do you say “When I've arrived, I'll call you”?",
        opts: [
          "Wenn ich angekommen bin, rufe ich dich an.",
          "Wenn ich ankomme bin, rufe ich dich an.",
          "Wenn ich bin angekommen, rufe ich dich an."
        ],
        why: "In the subordinate clause the participle comes first and the auxiliary at the end: <i>angekommen bin</i>. The main clause starts with the verb: <i>rufe ich ... an</i>."
      },
      {
        q: "Which word? “___ ich gestern angekommen bin, hat es geregnet.”",
        opts: ["Als", "Wenn", "Wann"],
        why: "A single past event: <b>als</b>. <i>Wenn</i> is for present, future and repeated events."
      },
      {
        q: "Complete: “Ich rufe dich an, ___ ich angekommen bin.” (when, use wenn)",
        hint: "use wenn",
        why: "<b>Wenn</b> for a fact in the future. The conjugated verb (<i>bin</i>) goes to the end."
      },
      {
        q: "Complete: “Wenn ich angekommen ___, rufe ich dich an.” (sein, Perfekt, ich)",
        hint: "sein, present, ich",
        why: "<b>Bin</b>: the auxiliary of <i>ankommen</i> is <i>sein</i>, and the conjugated verb stands at the end of the subordinate clause."
      },
      {
        q: "Complete the sentence.",
        tr: "When we've found the hotel, we'll go and eat.",
        why: "<i>Wenn wir das Hotel gefunden haben, gehen wir essen</i>: in the subordinate clause <i>haben</i> closes the sentence; in the main clause the verb (<i>gehen</i>) comes right after the comma."
      },
      {
        q: "Match each verb with its meaning.",
        pairs: ["to arrive", "to leave", "to change (trains)", "to phone"]
      },
      {
        q: "Put the words in order.",
        tr: "When I've arrived, I'll call you.",
        why: "With these pieces the order is that of a subordinate clause first: <i>Wenn ich angekommen bin, rufe ich dich an</i>. The separable verb <i>anrufen</i> leaves <i>an</i> at the end of the main clause."
      },
      {
        q: "Translate: “When I arrive, I'll call you.”",
        why: "The present is enough: <i>Wenn ich ankomme, rufe ich dich an</i>. The Perfekt in the subordinate clause (<i>angekommen bin</i>) or the Futur I in the main clause (<i>werde ich dich anrufen</i>) also work, and the order can be reversed."
      },
      {
        tr: "When I've arrived, I'll call you, and then we'll go and eat together.",
        why: "In <i>angekommen</i> the <b>n</b> and <b>g</b> belong to different parts (<i>an-ge-</i>) and are pronounced [nɡ], not as a single nasal [ŋ]; in <i>zusammen</i> the <b>z</b> is [ts] and the <b>s</b> before a vowel is usually voiced."
      },
      {
        tr: "When I've arrived at the hotel, I'll send you a message.",
        why: "In <i>Nachricht</i> the <b>ch</b> is [x] after <b>a</b> and [ç] after <b>i</b>: two different sounds in the same word, and the <b>sch</b> of <i>schicke</i> is [ʃ]. In <i>Hotel</i> the stress falls on the last syllable."
      }
    ]
  },
  "lesson:a2-u02-test": {
    theme: "Review",
    title: "Unit 2 review",
    objectives: ["check wohin? (nach, in, zu), the Futur I and wenn + Perfekt"],
    theory: [
      {
        p: "Ten questions on the whole unit. You pass with 70%. Don't look back at the lessons while you answer: if you don't remember something, it's better to go back and review."
      }
    ],
    exercises: [
      {
        tr: "The Futur I of kommen, all persons.",
        why: "<i>Ich werde kommen, du wirst kommen, er wird kommen, wir werden kommen, ihr werdet kommen, sie werden kommen</i>."
      },
      {
        q: "Complete: “Wir fahren ___ Italien.” (to a country without an article)",
        hint: "nach, in or zu?",
        why: "<b>Nach</b>: <i>Italien</i> has no article."
      },
      {
        q: "Complete: “Ich fahre ___ die Schweiz.” (to a country with an article)",
        hint: "preposition + accusative",
        why: "<b>In</b> + accusative: <i>in die Schweiz</i>."
      },
      {
        q: "Complete: “Wir fahren ___ meiner Oma.” (towards a person)",
        hint: "preposition + dative",
        why: "<b>Zu</b> + dative: <i>zu meiner Oma</i>."
      },
      {
        q: "Complete: “Ich ___ morgen nach Wien fahren.” (Futur I, werden, ich)",
        hint: "werden, ich",
        why: "<b>Werde</b> in second position, <i>fahren</i> in the infinitive at the end."
      },
      {
        q: "Complete: “Ich rufe dich an, ___ ich im Hotel angekommen bin.” (when, use wenn)",
        hint: "use wenn",
        why: "<b>Wenn</b>: a fact in the future, with the conjugated verb at the end."
      },
      {
        q: "Complete: “Meine Tante wohnt ___ Schweiz.” (where she lives: location)",
        opts: ["in der", "in die", "nach der"],
        why: "Location (wo?): <b>in</b> + dative, and <i>die Schweiz</i> in the dative is <i>in der Schweiz</i>."
      },
      {
        q: "Translate: “Tomorrow we're going to Vienna.”",
        why: "<i>Morgen fahren wir nach Wien</i>: <i>nach</i> with a city. The order can change, the verb stays in second position."
      },
      {
        tr: "Tomorrow I'm going to Vienna and, when I've arrived, I'll call you.",
        why: "In <i>Wien</i> the <b>W</b> is [v] and <b>ie</b> is a long <b>i</b>; in <i>angekommen</i> the <b>n</b> and <b>g</b> belong to different parts (<i>an-ge-</i>) and are pronounced [nɡ], not as a single nasal [ŋ]."
      },
      {
        tr: "In summer we'll go to Switzerland, and then I'm going to my aunt's.",
        why: "In <i>Schweiz</i> the <b>sch</b> is [ʃ], <b>w</b> is [v] and <b>ei</b> sounds [aɪ]."
      }
    ]
  },
  "unit:a2-u03": {
    title: "I see him, I help him",
    grammarNote: "accusative and dative pronouns · verbs with the dative (helfen, gefallen, gehören, danken) · order of objects · imperative with du and ihr · mal and doch"
  },
  "lesson:a2-u03-l1": {
    theme: "Talking about people",
    title: "ihn, sie, es",
    objectives: [
      "replace a noun with mich, dich, ihn, sie, es, uns, euch, sie, Sie",
      "choose the pronoun according to the gender of the German noun",
      "place the pronoun after the verb in the main clause"
    ],
    theory: [
      {
        h: "The accusative pronoun in place of the noun",
        p: "To avoid repeating a noun that is the <b>direct object</b> you use the accusative pronoun: <em>mich, dich, ihn, sie, es, uns, euch, sie, Sie</em>. Compared with the nominative, <em>ich, du, er, wir, ihr</em> change; <em>sie</em> and <em>es</em> stay the same. The pronoun follows the <b>gender of the German noun</b>, even for things: <em>der Bruder → ihn</em>, <em>die Kollegin → sie</em>, <em>das Kind → es</em>, <em>der Schlüssel → ihn</em>. In a neutral main clause the pronoun comes right after the conjugated verb: <em>Ich kenne ihn gut.</em> If the sentence begins with another element, and the subject is a pronoun, the object pronoun follows it: <em>Morgen sehe ich ihn.</em> If the subject is a noun, the object pronoun often comes before it: <em>Morgen sieht ihn mein Bruder.</em> <em>Morgen sieht mein Bruder ihn</em> is also correct. In a subordinate clause with a pronoun subject it comes after the conjunction and the subject, before the verb at the end: <em>..., weil ich ihn gut kenne.</em> With a noun subject both orders are correct: <em>..., weil ihn mein Bruder kennt</em> or <em>..., weil mein Bruder ihn kennt.</em>"
      },
      {
        contrast: "English has almost the same set (<em>me, you, him, her, it, us, them</em>) and also puts the pronoun after the verb: “I see him”, <em>Ich sehe ihn</em>. The big difference is things: English calls every object <em>it</em> (“the key → I see it”), while German keeps the gender of the noun: <em>der Schlüssel → ihn</em>, <em>die Zeitung → sie</em>, <em>das Buch → es</em>. So “I read it” can be <em>Ich lese ihn</em>, <em>sie</em> or <em>es</em>, depending on the noun. English <em>him</em> also covers both cases (“I see him”, “I help him”), while German splits it into <em>ihn</em> and <em>ihm</em>."
      },
      {
        trap: "<em>Sie</em> can mean “she”, “they”, “her” or “them”: you work it out from the verb and the context (<em>Ich sehe sie</em>, on its own, is ambiguous). Inside a sentence a capital letter marks the polite form: <em>Ich kenne Sie</em>. At the start of a sentence the capital is always there, so context and verb agreement decide (<em>Sie kommt</em> = she comes, <em>Sie kommen</em> = they come, or you come, polite). And do not confuse <em>ihn</em> (accusative) with <em>ihm</em> (dative): <em>Ich sehe ihm</em> is wrong, because <em>sehen</em> takes the accusative. Since English <em>him</em> hides the difference, check the case, not only the sound."
      },
      {
        tip: "Before writing the pronoun, repeat the German noun with its article: <em>der → ihn</em>, <em>die → sie</em>, <em>das → es</em>, <em>die</em> (plural) <em>→ sie</em>. The pronoun for a person is the same as the one for a thing of the same gender."
      }
    ],
    grammar: {
      title: "Accusative pronouns",
      note: "They replace a direct object that is already known. Gender and number follow the German noun: <b>der → ihn</b>, <b>die → sie</b>, <b>das → es</b>.",
      table: {
        head: ["nominative", "accusative", "example"],
        rows: [
          ["ich", "mich", "Er sieht mich."],
          ["du", "dich", "Ich kenne dich."],
          ["er", "ihn", "Wir sehen ihn."],
          ["sie", "sie", "Ich treffe sie."],
          ["es", "es", "Ich nehme es."],
          ["wir", "uns", "Sie laden uns ein."],
          ["ihr", "euch", "Ich besuche euch."],
          ["sie, Sie", "sie, Sie", "Wir kennen Sie."]
        ]
      },
      examples: [
        { tr: "I know him well.", note: "ihn for a masculine noun (der Bruder)" },
        { tr: "Tomorrow we're meeting her.", note: "sie: for example die Kollegin" },
        { tr: "He doesn't see me.", note: "mich: accusative of ich" },
        { tr: "I'll call you tonight.", note: "dich; anrufen is separable, an goes to the end" },
        { tr: "The child is sick. I'm visiting them today.", note: "es for das Kind, neuter" },
        { tr: "They're inviting us to the party.", note: "uns; einladen is separable, ein goes to the end" }
      ]
    },
    vocab: [
      "brother",
      "sister",
      "neighbor",
      "colleague (woman)",
      "boss",
      "child",
      "key",
      "newspaper",
      "to know (a person)",
      "to see",
      "to meet",
      "to invite"
    ],
    exercises: [
      {
        q: "You are talking about your brother: “I often see him.” Which sentence is correct?",
        opts: ["Ich sehe er oft.", "Ich sehe ihn oft.", "Ich sehe ihm oft."],
        why: "<b>Ihn</b>: <i>sehen</i> takes the accusative and for <i>der Bruder</i> the pronoun is <i>ihn</i>. <i>Er</i> is the nominative, <i>ihm</i> the dative."
      },
      {
        q: "Complete: “Das Kind ist krank. Ich besuche ___ heute.”",
        opts: ["ihn", "sie", "es"],
        why: "<i>Das Kind</i> is neuter, so <b>es</b>. The gender follows the German word, not the sex of the person."
      },
      {
        q: "Which sentences are correct? (more than one)",
        opts: [
          "Ich sehe dich morgen.",
          "Wir laden sie zur Party ein.",
          "Er kennt mich gut.",
          "Ich treffe ihm heute."
        ],
        why: "The first three use the right accusative pronoun. <i>Ihm</i> is a dative and <i>treffen</i> takes the accusative: <i>Ich treffe ihn heute.</i>"
      },
      {
        q: "Complete: “Das ist mein Bruder. Ich kenne ___ sehr gut.” (er, accusative)",
        hint: "accusative pronoun",
        why: "<b>Ihn</b>: <i>kennen</i> takes the accusative and <i>der Bruder</i> is masculine."
      },
      {
        q: "Complete: “Wo ist Lisa? Ich sehe ___ nicht.” (Lisa)",
        hint: "accusative pronoun",
        why: "<b>Sie</b>: the accusative of <i>sie</i> (she) is the same as the nominative."
      },
      {
        q: "Complete the sentence (second gap: ich, accusative).",
        tr: "My colleague is nice. I often meet her and sometimes she invites me.",
        why: "<i>Sie</i> is the accusative for <i>die Kollegin</i>; <i>mich</i> is the accusative of <i>ich</i>. <i>Einladen</i> is separable: <i>ein</i> goes to the end."
      },
      {
        q: "Put the words in order.",
        tr: "Today I'm meeting her at the café.",
        why: "The verb stays in second position, and in the neutral order the object pronoun <i>sie</i> follows the subject pronoun <i>ich</i>. <i>Ich treffe sie heute im Café</i> and <i>Im Café treffe ich sie heute</i> are also fine. The object pronoun can also open the sentence to stress who you are meeting: <i>Sie treffe ich heute im Café</i>, with the verb still second."
      },
      {
        q: "Translate (you are talking about your brother): “I'll see him tomorrow.”",
        why: "<i>Ich sehe ihn morgen</i>: the pronoun follows the verb. With <i>morgen</i> first, the verb stays in second position and the subject follows it (<i>Morgen sehe ich ihn</i>). <i>Treffen</i> also works."
      },
      {
        tr: "Do you know my brother? I see him every day, and he often comes to visit me.",
        why: "In <i>ihn</i> and <i>sehe</i> the <b>h</b> is silent and the preceding vowel is long; in <i>besucht</i> the stress falls on <i>-sucht</i> and the <b>ch</b> after <b>u</b> is [x]."
      },
      {
        tr: "My colleague is nice. I often meet her and sometimes she invites me.",
        why: "In <i>sie</i> the <b>s</b> is voiced [z] and <b>ie</b> is a long <b>i</b>; in <i>manchmal</i> the <b>ch</b> after the <b>n</b> is read [ç]."
      }
    ]
  },
  "lesson:a2-u03-l2": {
    theme: "Help and tastes",
    title: "I'll help you, I like it",
    objectives: [
      "use mir, dir, ihm, ihr, uns, euch, ihnen",
      "recognize the verbs that take the dative: helfen, gefallen, gehören, danken",
      "say that something pleases or belongs to someone"
    ],
    theory: [
      {
        h: "The dative with pronouns and with some verbs",
        p: "The dative answers the question <em>to whom?</em>. The pronouns are <em>mir, dir, ihm, ihr, ihm, uns, euch, ihnen</em> (polite: <em>Ihnen</em>). Some verbs take the dative as their object, even when the English object looks direct: <em>helfen</em> (<em>Ich helfe dir</em>), <em>danken</em> (<em>Ich danke dir</em>), <em>antworten</em> (<em>Er antwortet mir</em>), <em>gehören</em> (<em>Das Handy gehört mir</em>) and <em>gefallen</em> (<em>Die Jacke gefällt mir</em>). With <em>gefallen</em> the thing that is liked is the subject and the person is in the dative: if the thing is plural the verb agrees with it (<em>Die Schuhe gefallen mir</em>)."
      },
      {
        contrast: "English says “I like the jacket”, with the person as subject and the jacket as object. German turns this around: <em>Die Jacke gefällt mir</em>, literally “the jacket is pleasing to me”, with the thing as subject and the person in the dative. English <em>help</em> and <em>thank</em> take a plain object (“I help him”, “I thank him”), but in German these verbs want the dative: <em>Ich helfe ihm</em>, <em>Ich danke ihm</em>. Because English <em>him</em> and <em>her</em> do not change with the case, you have to remember which German verbs take <em>ihm</em> or <em>ihr</em>. <em>Gehören</em> corresponds to “belong to”, where English also has a <em>to</em>: <em>Das gehört mir</em>."
      },
      {
        trap: "With these verbs the accusative is a mistake: <em>Ich helfe dich</em> and <em>Ich danke ihn</em> are wrong. Be careful with <em>ihr</em> as well: as a nominative it means “you” (plural) (<em>Ihr helft mir</em>), as a dative “to her” (<em>Ich helfe ihr</em>). The verb and the case tell you which one it is. <em>Ihm</em> stands for <em>er</em> and for <em>es</em>: <em>Ich helfe dem Kind → Ich helfe ihm</em>."
      },
      {
        tip: "Learn these verbs together with the dative: <em>helfen + dative</em>, <em>gefallen + dative</em>, <em>gehören + dative</em>, <em>danken + dative</em>. When the verb is one of these, the pronoun is <em>mir, dir, ihm, ihr, uns, euch, ihnen</em>."
      }
    ],
    grammar: {
      title: "Dative pronouns and verbs with the dative",
      note: "The dative is the case of the person who receives something or help, or to whom something pleases or belongs, depending on the verb. <b>helfen, danken, antworten, gehören, gefallen</b> take the dative.",
      table: {
        head: ["nominative", "dative", "example"],
        rows: [
          ["ich", "mir", "Das gehört mir."],
          ["du", "dir", "Ich helfe dir."],
          ["er", "ihm", "Wir danken ihm."],
          ["sie", "ihr", "Das Buch gefällt ihr."],
          ["es", "ihm", "Ich helfe ihm."],
          ["wir", "uns", "Er hilft uns."],
          ["ihr", "euch", "Ich danke euch."],
          ["sie", "ihnen", "Ich antworte ihnen."],
          ["Sie", "Ihnen", "Ich danke Ihnen."]
        ]
      },
      examples: [
        { tr: "I'm happy to help you.", note: "helfen + dative: dir" },
        { tr: "The cell phone is mine.", note: "gehören + dative: mir" },
        { tr: "I like the jacket a lot.", note: "gefallen: the thing is the subject, the person is in the dative" },
        { tr: "We thank him for the gift.", note: "danken + dative: ihm" },
        { tr: "He doesn't answer me.", note: "antworten + dative: mir" },
        { tr: "My sister needs help. I'm helping her.", note: "helfen + dative: ihr" }
      ]
    },
    vocab: [
      "gift, present",
      "help",
      "backpack",
      "cell phone",
      "jacket",
      "book",
      "to help",
      "to please, to be liked",
      "to belong to",
      "to thank",
      "to answer",
      "gladly, happily"
    ],
    exercises: [
      {
        q: "You say about your brother: “I help him.” Which sentence is correct?",
        opts: ["Ich helfe ihn.", "Ich helfe ihm.", "Ich helfe er."],
        why: "<b>Ihm</b>: <i>helfen</i> takes the dative, even though English has a plain object. <i>Ihn</i> is an accusative."
      },
      {
        q: "How do you say “I like the jacket”?",
        opts: ["Die Jacke gefällt mich.", "Die Jacke gefällt mir.", "Ich gefalle die Jacke."],
        why: "The thing is the subject (<i>die Jacke</i>) and the person is in the dative (<i>mir</i>), as in “the jacket pleases me”."
      },
      {
        q: "Which verbs take the dative? (more than one)",
        opts: ["helfen", "gehören", "sehen", "danken"],
        why: "<i>Helfen</i>, <i>gehören</i> and <i>danken</i> take the dative. <i>Sehen</i> takes the accusative: <i>Ich sehe ihn.</i>"
      },
      {
        q: "Complete: “Das ist mein Handy. Es gehört ___.” (ich, dative)",
        hint: "dative pronoun",
        why: "<b>Mir</b>: <i>gehören</i> takes the dative."
      },
      {
        q: "Complete: “Meine Schwester braucht Hilfe. Ich helfe ___ gern.” (sie: my sister)",
        hint: "dative pronoun",
        why: "<b>Ihr</b>: dative of <i>sie</i> in the singular. <i>Helfen</i> takes the dative."
      },
      {
        q: "Complete the sentence.",
        tr: "Thank you, Anna! I thank you for your help.",
        why: "<i>Ich danke dir</i>: <i>danken</i> takes the dative, so <b>dir</b> and not <i>dich</i>."
      },
      {
        q: "Put the words in order.",
        tr: "I like the jacket a lot.",
        why: "With the thing as subject: <i>Die Jacke gefällt mir sehr</i>. <i>Mir gefällt die Jacke sehr</i>, with the dative first, is also fine."
      },
      {
        q: "Translate (to a friend): “I'm happy to help you.”",
        why: "<i>Ich helfe dir gern</i>: <i>helfen</i> takes the dative (<i>dir</i>). The variants with <i>gerne</i> and with <i>gern</i> first are also correct."
      },
      {
        tr: "Can you help me, please? Thank you, that's very kind of you.",
        why: "In <i>helfen</i> the <b>e</b> is short; in <i>danke</i> the <b>n</b> before <b>k</b> is read [ŋ] and the <b>a</b> is short."
      },
      {
        tr: "The backpack is mine, and I like the jacket a lot.",
        why: "In <i>gehört</i> the stress falls on <i>-hört</i>, where the <b>ö</b> is long ([øː]); in <i>Rucksack</i> both vowels are short: <i>Ruck</i> + <i>Sack</i>, and each <b>ck</b> marks the short vowel before it."
      }
    ]
  },
  "lesson:a2-u03-l3": {
    theme: "Gifts and favors",
    title: "I give it to him",
    objectives: [
      "use dative and accusative in the same sentence",
      "put in the usual order two nouns, a pronoun and a noun, two pronouns",
      "use geben, schenken, zeigen, schicken, leihen, erklären"
    ],
    theory: [
      {
        h: "Two objects: dative and accusative",
        p: "With verbs like <em>geben, schenken, zeigen, schicken, leihen, erklären</em> there are two objects: the person (dative) and the thing (accusative). The usual order, in a neutral sentence, is this. With <b>two nouns</b> the dative comes before the accusative: <em>Ich schenke meiner Schwester ein Buch.</em> With <b>a pronoun and a noun</b> the pronoun comes first, whatever its case: <em>Ich gebe ihm das Buch. Ich gebe es meinem Bruder.</em> With <b>two pronouns</b> the accusative comes before the dative: <em>Ich gebe es ihm.</em> These are usual orders, not absolute rules: a noun or a stressed pronoun can move to first position for emphasis (<em>Das gebe ich ihm</em>), but the unstressed object <em>es</em> cannot open the sentence: not <s>Es gebe ich ihm</s>."
      },
      {
        contrast: "English has two patterns: “I give him the book” (person first, no <em>to</em>) and “I give the book to him” (thing first, with <em>to</em>). German has no <em>to</em> here: the person is marked by the dative, and the order of the two objects depends on whether they are nouns or pronouns. With two pronouns the German order matches the English pattern with <em>to</em>: <em>Ich gebe es ihm</em> = “I give it to him”, thing first, person second. With a noun and a pronoun German puts the pronoun first: <em>Ich gebe ihm das Buch</em> (“I give him the book”)."
      },
      {
        trap: "In the usual order <em>Ich gebe ihm es</em> sounds wrong: with two pronouns the accusative comes first, <em>Ich gebe es ihm</em>. Choose the gender from the German word: <em>das Foto → es</em>, <em>der Brief → ihn</em>, <em>die Postkarte → sie</em>. With a masculine noun the two pronouns look different: <em>Ich gebe ihn ihm</em> (the first is accusative, the second dative). English <em>it</em> for every thing hides this, so check the German noun each time."
      },
      {
        tip: "First find the thing and put its pronoun (<em>es, ihn, sie</em>) right after the verb; then add the person (<em>mir, dir, ihm, ihr</em>). With the subject first: <em>Ich gebe es dir morgen.</em> With <em>morgen</em> first, the subject follows the verb and comes before the pronouns: <em>Morgen gebe ich es dir.</em> The rule to remember: accusative pronoun before dative pronoun. With nouns, start from the person instead: <em>Ich zeige meiner Mutter das Foto.</em>"
      }
    ],
    grammar: {
      title: "The order of dative and accusative",
      note: "In a neutral sentence: two nouns, <b>dative first</b>; a pronoun and a noun, <b>the pronoun first</b>; two pronouns, <b>accusative first</b>.",
      table: {
        head: ["objects", "usual order", "example"],
        rows: [
          ["two nouns", "dative, accusative", "Ich schenke meiner Schwester ein Buch."],
          ["pronoun + noun", "the pronoun first", "Ich gebe ihm das Buch."],
          ["noun + pronoun", "the pronoun first", "Ich gebe es meinem Bruder."],
          ["two pronouns", "accusative, dative", "Ich gebe es ihm."]
        ]
      },
      examples: [
        { tr: "I give it to him.", note: "two pronouns: es (accusative) before ihm (dative)" },
        { tr: "I'll show you the photo.", note: "dative pronoun before the noun" },
        { tr: "I'm giving my sister a book.", note: "two nouns: dative before accusative" },
        { tr: "He's sending it to me tomorrow.", note: "es mir: accusative before dative" },
        { tr: "We lend him the bicycle.", note: "dative pronoun before the noun" },
        { tr: "I'll explain it to you later.", note: "es dir: accusative before dative" }
      ]
    },
    vocab: [
      "photo",
      "letter",
      "package, parcel",
      "money",
      "postcard",
      "bicycle",
      "to give",
      "to give (as a gift)",
      "to show",
      "to send",
      "to lend",
      "to explain"
    ],
    exercises: [
      {
        q: "You say: “I give it to him” (the book, to my brother). Which sentence has the usual order?",
        opts: ["Ich gebe ihm es.", "Ich gebe es ihm.", "Ich gebe ihm ihn."],
        why: "With two pronouns the accusative comes before the dative: <i>es ihm</i>. <i>Das Buch</i> is neuter, so <i>es</i>."
      },
      {
        q: "Which sentence has the neutral order with two nouns?",
        opts: [
          "Ich schenke ein Buch meiner Schwester.",
          "Ich schenke meiner Schwester ein Buch.",
          "Ich meiner Schwester schenke ein Buch."
        ],
        why: "With two nouns, first the dative (the person), then the accusative (the thing). The first sentence is not wrong, but it moves the person to the end for emphasis: it is not the neutral order. The third breaks the second position of the verb."
      },
      {
        q: "Which sentences have a usual order? (more than one)",
        opts: [
          "Ich gebe es ihm.",
          "Ich zeige dir das Foto.",
          "Ich schicke dem Chef es.",
          "Ich schenke ihm einen Schlüssel."
        ],
        why: "The pronoun comes before the noun (<i>dir das Foto</i>, <i>ihm einen Schlüssel</i>) and with two pronouns <i>es ihm</i> applies. In “Ich schicke dem Chef es” the noun comes before the pronoun: the usual order is <i>Ich schicke es dem Chef</i>."
      },
      {
        q: "Complete: “Wo ist das Foto? Ich zeige ___ dir gleich.” (das Foto)",
        hint: "accusative pronoun",
        why: "<b>Es</b>: <i>das Foto</i> is neuter, and the accusative <i>es</i> comes before the dative <i>dir</i>."
      },
      {
        q: "Complete: “Der Schlüssel gehört Paul. Ich gebe ihn ___ heute.” (Paul: er)",
        hint: "dative pronoun",
        why: "<b>Ihm</b>: dative of <i>er</i>. The accusative <i>ihn</i> (the thing, <i>der Schlüssel</i>) comes first."
      },
      {
        q: "Complete the sentence. (der Brief = er; recipient: du)",
        tr: "The letter is ready. I'll send it to you tomorrow.",
        why: "<i>Der Brief</i> is masculine: <b>ihn</b> (accusative) comes before <b>dir</b> (dative). English says “it” for a letter, but German needs the gender of <i>der Brief</i>."
      },
      {
        q: "Match each sentence with its translation.",
        pairs: ["I give it to him.", "I give him the book.", "I give it to my brother.", "I give it to you."]
      },
      {
        q: "Translate: “I'll give it to you tomorrow.” (the book: use the pronoun es; one friend: use du)",
        why: "<i>Ich gebe es dir morgen</i>: first the accusative <i>es</i>, then the dative <i>dir</i>. With <i>morgen</i> first the verb stays in second position: <i>Morgen gebe ich es dir</i>."
      },
      {
        tr: "I found your photo. I'll show it to you right away, and tomorrow I'll send it to your sister.",
        why: "In <i>zeigen</i> the <b>z</b> is [ts] and <b>ei</b> sounds [aɪ]; in <i>gleich</i> the final <b>ch</b> after <b>ei</b> is read [ç]."
      },
      {
        tr: "The key is my brother's. Tomorrow I'll give it to him.",
        why: "In <i>Schlüssel</i> the <b>sch</b> is [ʃ] and the <b>ü</b> is short; in <i>ihn</i> and <i>ihm</i> the <b>h</b> is silent and the <b>i</b> is long."
      }
    ]
  },
  "lesson:a2-u03-l4": {
    theme: "Instructions and advice",
    title: "Tell me! Go ahead and call me!",
    objectives: [
      "form the imperative with du and with ihr",
      "remember the verbs with a stem change and sein",
      "use mal and doch to change the tone of a request"
    ],
    theory: [
      {
        h: "The imperative with du and with ihr",
        p: "To tell one person you address with <em>du</em> to do something you use the <b>verb stem</b>, without <em>du</em>: <em>Komm! Ruf mich an! Mach das Fenster zu!</em> With weak verbs whose stem ends in <em>-t</em> or <em>-d</em> you usually add an <b>-e</b>: <em>Warte! Arbeite! Antworte!</em> Strong verbs with <em>e → i/ie</em> use the changed stem and have no <em>-e</em>: <em>Nimm! Lies! Gib! Sprich!</em> Without Umlaut: <em>Fahr!</em>, not <em>Fähr!</em> <em>Sein</em> is irregular: <em>Sei!</em> For several people (<em>ihr</em>) the imperative has the form of <em>ihr</em> without the pronoun: <em>Kommt! Wartet! Ruft an!</em> A separable verb leaves the prefix at the end: <em>Ruf mich an!</em>"
      },
      {
        h: "mal and doch: small words that change the tone",
        p: "<em>Mal</em> and <em>doch</em> are <b>modal particles</b>: they do not change the grammar, they change <b>how the sentence sounds</b>. <em>Komm mal her!</em> is lighter than <em>Komm her!</em>, like “come on over for a second”. <em>Ruf mich doch an!</em> is a friendly invitation or a nudge: “go ahead and call me”, “come on, call me”. They stand in the middle of the sentence, usually after the pronoun: <em>Ruf mich doch mal an!</em> They have no fixed translation, and <em>mal</em> here is not the word meaning “sometimes”."
      },
      {
        contrast: "The English imperative is just the bare verb (“Come!”, “Wait!”, “Call me!”), the same for one person or many, so it covers both <em>Komm!</em> and <em>Kommt!</em>; German has to choose between <em>du</em> and <em>ihr</em> (and uses <em>Sie</em> for the polite form). In German the pronoun is a separate word after the verb, as in English: <em>Ruf mich an!</em> = “Call me!”. The negative needs no helper: English says “Don't be late” with <em>do</em>, while German keeps the same imperative and adds <em>nicht</em>: <em>Komm nicht zu spät!</em> English softens a request with words like <em>just</em>, <em>go ahead</em>, <em>why don't you</em>, <em>come on</em> or with tone of voice; German often does it with <em>mal</em> and <em>doch</em>."
      },
      {
        trap: "Do not add <em>-st</em>: <em>Kommst!</em> is not an imperative. With strong verbs with <em>e → i/ie</em> do not say <em>Lese!</em> but <em>Lies!</em>, and not <em>Nehm!</em> but <em>Nimm!</em> With <em>sein</em> the form is <em>Sei vorsichtig!</em> Do not think <em>mal</em> and <em>doch</em> are empty words: without them the sentence is still correct but sounds more curt."
      },
      {
        tip: "When you give an order or advice to a friend: start from the infinitive, remove <em>-en</em>, add <em>-e</em> if the stem ends in <em>-t</em> or <em>-d</em>, and put in <em>mal</em> or <em>doch</em> to soften it. This procedure is for regular verbs; remember the exceptions you learned: <em>Nimm!</em>, <em>Lies!</em>, <em>Sei!</em> Examples: <em>Warte mal! Komm doch mit!</em>"
      }
    ],
    grammar: {
      title: "The imperative with du and ihr; mal and doch",
      note: "With <b>du</b> the stem without a pronoun (<i>Komm!</i>), with <b>ihr</b> the form of ihr (<i>Kommt!</i>). <b>mal</b> and <b>doch</b> soften the request or make it friendlier.",
      table: {
        head: ["infinitive", "du", "ihr"],
        rows: [
          ["kommen", "Komm!", "Kommt!"],
          ["warten", "Warte!", "Wartet!"],
          ["anrufen", "Ruf an!", "Ruft an!"],
          ["nehmen", "Nimm!", "Nehmt!"],
          ["lesen", "Lies!", "Lest!"],
          ["sein", "Sei!", "Seid!"]
        ]
      },
      examples: [
        { tr: "Come over here for a second!", note: "mal makes the request lighter" },
        { tr: "Wait a moment!", note: "stem in -t: add -e" },
        { tr: "Go ahead and call me!", note: "doch: friendly invitation; an at the end" },
        { tr: "Go ahead and take a break!", note: "machen: stem Mach, without -en" },
        { tr: "Tell me, do you have time?", note: "Sag mal: opens a question in a casual tone" },
        { tr: "Be careful, please!", note: "ihr: form of sein, Seid" }
      ]
    },
    vocab: [
      "tip, piece of advice",
      "idea",
      "moment",
      "break",
      "to call (by phone)",
      "to wait",
      "to take",
      "to read",
      "mal (modal particle)",
      "doch (modal particle)",
      "careful, cautious",
      "please"
    ],
    exercises: [
      {
        q: "You tell a friend: “Wait a moment!” Which sentence is correct?",
        opts: ["Warte einen Moment!", "Wartest einen Moment!", "Warten einen Moment!"],
        why: "With <i>du</i> the imperative is the stem without a pronoun; the stem ends in <i>-t</i>, so you add <b>-e</b>: <i>Warte!</i>"
      },
      {
        q: "You tell a friend: “Read this!” (lesen)",
        opts: ["Lese das!", "Lies das!", "Les das!"],
        why: "<i>Lesen</i> is a strong verb with <i>e → ie</i>: in the imperative the stem changes (<b>Lies!</b>) and there is no <i>-e</i>."
      },
      {
        q: "Complete: “___ bitte einen Moment, Kinder!” (warten, ihr)",
        hint: "warten, imperative ihr",
        why: "The imperative with <i>ihr</i> has the form of <i>ihr</i> without the pronoun: <b>Wartet!</b>"
      },
      {
        q: "Complete: “Ruf mich doch ___!” (anrufen: go ahead and call me)",
        hint: "the prefix of the separable verb",
        why: "<i>Anrufen</i> is separable: the prefix <b>an</b> goes to the end and the verb stays in first position."
      },
      {
        q: "Complete: “___ vorsichtig!” (sein, du)",
        hint: "sein, imperative du",
        why: "<b>Sei</b>: the imperative of <i>sein</i> is irregular (<i>sei, seid</i>)."
      },
      {
        q: "Complete the sentence (both doch and mal work).",
        tr: "Are you tired? Then go ahead and take a break!",
        why: "<b>Mach</b>: the stem of <i>machen</i> is <i>mach-</i>, without <i>-en</i> and without <i>du</i>. Both <i>doch</i> (friendly invitation) and <i>mal</i> (lighter tone) work."
      },
      {
        q: "Put the words in order.",
        tr: "Come on, call me!",
        why: "The verb opens the sentence, the pronoun follows it, the particles <i>doch mal</i> come before the prefix <i>an</i> at the end."
      },
      {
        q: "Translate (to a friend, use doch): “Go ahead and call me!”",
        why: "<i>Ruf mich doch an!</i>: imperative without <i>du</i>, pronoun after the verb, prefix <i>an</i> at the end; <i>doch</i> makes the invitation friendlier. Adding <i>mal</i> also works."
      },
      {
        tr: "Tell me, do you have time tomorrow? Then go ahead and call me, and we'll go and eat together.",
        why: "In <i>Sag</i> the final <b>g</b> is usually read [k]; in <i>zusammen</i> the <b>z</b> is [ts] and the <b>s</b> before a vowel is usually voiced."
      },
      {
        tr: "Do come by sometime, and take a moment!",
        why: "In <i>vorbei</i> the <b>v</b> is read [f]; in <i>Moment</i> the stress falls on the second syllable."
      }
    ]
  },
  "lesson:a2-u03-test": {
    theme: "Review",
    title: "Unit 3 review",
    objectives: [
      "check the accusative and dative pronouns, the verbs with the dative and the order of objects"
    ],
    theory: [
      {
        p: "Ten questions on accusative and dative pronouns, on verbs with the dative and on the order of objects. You pass with 70%. Don't look back at the lessons while you answer: if you don't remember something, it's better to go back and review."
      }
    ],
    exercises: [
      {
        q: "Complete: “Wo ist Anna? Ich sehe ___ nicht.” (sie: Anna)",
        hint: "accusative pronoun",
        why: "<b>Sie</b>: <i>sehen</i> takes the accusative, and that of <i>sie</i> (she) is the same as the nominative."
      },
      {
        q: "Complete: “Du brauchst Hilfe? Ich helfe ___ gern.” (du)",
        hint: "dative pronoun",
        why: "<b>Dir</b>: <i>helfen</i> takes the dative."
      },
      {
        q: "Complete: “Das Handy gehört ___.” (ich)",
        hint: "dative pronoun",
        why: "<b>Mir</b>: <i>gehören</i> takes the dative."
      },
      {
        q: "Complete: “Ich habe das Buch. Ich gebe es ___ gleich.” (mein Bruder: er)",
        hint: "dative pronoun",
        why: "<b>Ihm</b>: with two pronouns the accusative (<i>es</i>) comes first, then the dative (<i>ihm</i>)."
      },
      {
        q: "Complete: “Ihr helft uns oft. Wir danken ___ sehr.” (ihr)",
        hint: "dative pronoun",
        why: "<b>Euch</b>: <i>danken</i> takes the dative, and the dative of <i>ihr</i> is <i>euch</i>."
      },
      {
        q: "How do you say “I like the idea a lot”?",
        opts: ["Die Idee gefällt mich sehr.", "Die Idee gefällt mir sehr.", "Ich gefalle die Idee sehr."],
        why: "The thing is the subject (<i>die Idee</i>) and the person is in the dative (<i>mir</i>)."
      },
      {
        q: "You say: “I'll show it to you” (the book). Which sentence has the usual order?",
        opts: ["Ich zeige es dir.", "Ich zeige dir es.", "Ich zeige du es."],
        why: "With two pronouns the accusative (<i>es</i>) comes before the dative (<i>dir</i>)."
      },
      {
        q: "Translate: “I'll give him the book tomorrow.”",
        why: "<i>Ich gebe ihm das Buch morgen</i>: the dative pronoun <i>ihm</i> comes before the noun <i>das Buch</i>. <i>Morgen gebe ich ihm das Buch</i> and <i>Ich gebe ihm morgen das Buch</i> are also fine."
      },
      {
        tr: "It's my brother's birthday. I'm giving him a book as a present, and I'll give it to him tomorrow.",
        why: "In <i>Geburtstag</i> the stress falls on <i>-burts-</i> (<i>ge-</i> is unstressed) and the final <b>g</b> is usually read [k]."
      },
      {
        tr: "My colleague needs help. I'm happy to help her and I'll call her tomorrow.",
        why: "In <i>braucht</i> <b>au</b> sounds [aʊ] and the <b>ch</b> after it is [x]; in <i>sie</i> the <b>s</b> is voiced [z]."
      }
    ]
  },
  "unit:a2-u04": {
    title: "Health",
    grammarNote: "mir tut ... weh · bei and zu with the dative · time expressions (am, um, seit, vor) · Konjunktiv II for advice (du solltest, ich würde) · reflexive verbs · dass · deshalb"
  },
  "lesson:a2-u04-l1": {
    theme: "Aches and symptoms",
    title: "My head hurts",
    objectives: [
      "say where it hurts, with the person in the dative: mir, dir, ihm, ihr, uns, euch, ihnen",
      "match tut or tun to the body part, which is the subject",
      "name body parts with their article and plural"
    ],
    theory: [
      {
        h: "The person in the dative, the body part in the nominative",
        p: "To say that a body part hurts, German uses <em>wehtun</em>. The <b>person</b> goes in the <b>dative</b> (<em>mir, dir, ihm, ihr, uns, euch, ihnen</em>) and the <b>body part</b> is the <b>subject</b>, so the verb agrees with it: <em>Mir tut der Kopf weh</em> (singular, <em>tut</em>), <em>Mir tun die Füße weh</em> (plural, <em>tun</em>). <em>Weh</em> goes at the end of the sentence, because <em>wehtun</em> is a separable verb. With a noun, the person takes the dative of the noun: <em>Meiner Schwester tut der Rücken weh.</em> You can swap the order without changing the meaning: <em>Der Kopf tut mir weh.</em> To ask: <em>Wo tut es dir weh?</em> or <em>Was tut dir weh?</em>"
      },
      {
        contrast: "English also makes the body part the subject: “my head hurts”, “my feet hurt”. German shows the person with a dative pronoun instead of a possessive: <em>Mir tut der Kopf weh</em>, literally “to me hurts the head”. English <em>me</em> looks the same whatever the role, but German keeps <em>mir</em> (dative) apart from <em>mich</em> (accusative). English has no grammatical gender for body parts, while German does: <em>der Kopf</em>, <em>die Hand</em>, <em>das Bein</em>. Learn each noun with its article. For a headache there is also <em>Ich habe Kopfschmerzen</em>, where the person is the subject, like “I have a headache”. Watch out for <em>der Hals</em>: it means both “neck” and “throat”."
      },
      {
        trap: "With <em>wehtun</em> the person is not the subject: <em>Ich tut der Kopf weh</em> and <em>Mich tut der Kopf weh</em> are wrong, you need <em>mir</em>. And the verb does not follow the person but the body part: <em>Mir tun die Füße weh</em> (plural), not <em>Mir tut die Füße weh</em>. <em>Mein Kopf tut weh</em> is also correct: the possessive <em>mein</em> shows who feels the pain, while the subject stays <em>Kopf</em>."
      },
      {
        tip: "First find the body part and check whether it is singular or plural: that decides <em>tut</em> or <em>tun</em>. Then add the person in the dative. Learn the plurals of body nouns together with the article: <em>der Fuß, die Füße</em>; <em>das Ohr, die Ohren</em>."
      }
    ],
    grammar: {
      title: "mir tut ... weh",
      note: "The person is in the <b>dative</b>, the body part is the <b>subject</b> and decides <b>tut</b> (singular) or <b>tun</b> (plural). <b>Weh</b> goes at the end.",
      table: {
        head: ["person", "dative", "example"],
        rows: [
          ["ich", "mir", "Mir tut der Kopf weh."],
          ["du", "dir", "Dir tun die Füße weh."],
          ["er", "ihm", "Ihm tut der Bauch weh."],
          ["sie", "ihr", "Ihr tut der Rücken weh."],
          ["wir", "uns", "Uns tun die Beine weh."],
          ["ihr", "euch", "Euch tut der Hals weh."],
          ["sie, Sie", "ihnen, Ihnen", "Ihnen tun die Ohren weh."]
        ]
      },
      examples: [
        { tr: "My head hurts.", note: "mir: dative of ich; der Kopf is the subject" },
        { tr: "Where does it hurt?", note: "es is a general subject: Wo tut es dir weh?" },
        { tr: "His teeth hurt.", note: "ihm; die Zähne is plural, so tun" },
        { tr: "My sister's back hurts.", note: "dative on the noun too: meiner Schwester" },
        { tr: "Our legs hurt.", note: "uns; das Bein, die Beine" },
        { tr: "I have a headache.", note: "alternative: here the subject is ich, Kopfschmerzen is plural" }
      ]
    },
    vocab: [
      "head",
      "neck, throat",
      "belly, stomach",
      "back",
      "leg",
      "foot",
      "tooth",
      "ear",
      "pain",
      "to hurt",
      "sick, ill",
      "tired"
    ],
    exercises: [
      {
        q: "How do you say “My head hurts”?",
        opts: ["Ich tut der Kopf weh.", "Mir tut der Kopf weh.", "Mich tut der Kopf weh."],
        why: "The person goes in the dative: <b>mir</b>. <i>Der Kopf</i> is the subject, so the verb is <i>tut</i>. <i>Ich</i> is a nominative and <i>mich</i> an accusative."
      },
      {
        q: "How do you say “My feet hurt”?",
        opts: ["Mir tut die Füße weh.", "Mir tun die Füße weh.", "Mich tun die Füße weh."],
        why: "<i>Die Füße</i> is plural and the subject: the verb is <b>tun</b>. The person stays in the dative, <i>mir</i>."
      },
      {
        q: "Complete: “Mir ___ die Beine weh.” (verb tun, the form that matches the plural body part)",
        hint: "tun, plural form",
        why: "<b>Tun</b>: the subject is <i>die Beine</i>, plural. With a singular subject you would say <i>tut</i>."
      },
      {
        q: "Complete: “Anna ist krank. ___ tut der Hals weh.” (to her: dative of sie)",
        hint: "pronoun in the dative",
        why: "<b>Ihr</b>: dative of <i>sie</i> (she). <i>Der Hals</i> is the subject, singular."
      },
      {
        q: "Complete the sentence.",
        tr: "I am tired. My legs hurt. And Lisa? Her back hurts.",
        why: "<i>Mir</i> for <i>ich</i> and <i>ihr</i> for <i>Lisa</i>: these are the datives. The verb agrees with the body part: <i>tun</i> with <i>die Beine</i>, <i>tut</i> with <i>der Rücken</i>."
      },
      {
        q: "Match each sentence with its translation.",
        pairs: [
          "My head hurts.",
          "My feet hurt.",
          "Her stomach hurts.",
          "His ears hurt."
        ]
      },
      {
        q: "Put the words in order.",
        tr: "My feet hurt.",
        why: "The verb stays in second position. Both <i>Mir tun die Füße weh</i> and <i>Die Füße tun mir weh</i> work: the order changes, not the meaning."
      },
      {
        q: "Translate with tun ... weh and the dative: “My head hurts.”",
        why: "<i>Mir tut der Kopf weh</i> or <i>Der Kopf tut mir weh</i>. English has no gender here, but German <i>der Kopf</i> is masculine."
      },
      {
        tr: "Hello, doctor. My head hurts, and my ears hurt too.",
        why: "In <i>Kopf</i> the <b>o</b> is short and <b>pf</b> is an affricate [pf]; in <i>Ohren</i> the <b>h</b> is silent and the <b>o</b> is long."
      },
      {
        tr: "I am sick. My throat hurts, and my legs hurt.",
        why: "In <i>Hals</i> the initial <b>h</b> is a breath [h]; in <i>weh</i> the <b>w</b> is [v] and the <b>h</b> is silent; in <i>Beine</i> the <b>ei</b> sounds like [aɪ]."
      }
    ]
  },
  "lesson:a2-u04-l2": {
    theme: "At the doctor's",
    title: "At the doctor's",
    objectives: [
      "tell bei + dative (being there) from zu + dative (going there) for “at/to the doctor's”",
      "use the contracted forms beim, zum, zur",
      "say when and for how long with am, um, seit and vor",
      "make an appointment so that you are understood"
    ],
    theory: [
      {
        h: "bei for being at someone's, zu for going there",
        p: "To say <b>where you are</b> at a person's, use <b>bei + dative</b>: <em>Ich bin beim Arzt</em> (<em>bei dem</em> becomes <em>beim</em>). To say <b>where you are going</b>, use <b>zu + dative</b>: <em>Ich gehe zum Arzt</em> (<em>zu dem</em> becomes <em>zum</em>), <em>Ich gehe zur Ärztin</em> (<em>zu der</em> becomes <em>zur</em>). <em>Zur Apotheke</em> is also movement towards a place. For time: <b>am</b> with the day (<em>am Montag</em>), <b>um</b> with the hour (<em>um zehn Uhr</em>), <b>seit + dative</b> for something that has lasted from a point in time and still goes on (<em>seit drei Tagen</em>), <b>vor + dative</b> for something that happened earlier (<em>vor drei Tagen</em>). To make an appointment: <em>Ich möchte einen Termin vereinbaren.</em>"
      },
      {
        contrast: "English “at the doctor's” and “to the doctor's” also split being there from going there, much like <em>bei</em> and <em>zu</em>; but German puts the article on the person (<em>beim Arzt</em>, “at the doctor”), and English uses the possessive <em>doctor's</em>. For time, English “on Monday” and “at ten” match <em>am Montag</em> and <em>um zehn Uhr</em>. The big difference is “for three days”: English says “I have had a fever for three days” (present perfect), while German uses the present with <em>seit</em>: <em>Ich habe seit drei Tagen Fieber</em>. And “three days ago” is <em>vor drei Tagen</em>: the preposition comes <b>first</b>, while English <em>ago</em> comes after."
      },
      {
        trap: "<em>Bei</em> and <em>zu</em> take the dative. <em>Zum Arzt</em> and <em>zur Ärztin</em> are the usual contracted forms: <em>zu dem</em> and <em>zu der</em> appear when you want to stress the article. <em>Zum Arzt</em> means going to the doctor and <em>beim Arzt</em> means being at the doctor's: do not decide by the verb alone (there is no general rule such as “after a verb of motion use <em>zu</em>”), look at whether you mean being there or going there. After <em>seit</em> and <em>vor</em> the plural is also dative, with <b>-n</b>: <em>seit drei Tagen</em>, not <em>seit drei Tage</em>. With <em>seit</em> the German present is the normal tense, not the perfect."
      },
      {
        tip: "First ask yourself: “am I there, or am I going there?”. <em>Wo?</em> asks for <em>bei</em>, <em>wohin?</em> asks for <em>zu</em>. For the appointment keep day and time together: <em>am Montag um zehn Uhr</em>."
      }
    ],
    grammar: {
      title: "bei, zu, am, um, seit, vor",
      note: "At the doctor's: <b>bei</b> + dative for being there, <b>zu</b> + dative for going there. In time: <b>am</b> (day), <b>um</b> (hour), <b>seit</b> (since when), <b>vor</b> (ago).",
      table: {
        head: ["question", "form", "example"],
        rows: [
          ["Wo? (at a person's)", "bei + dative", "Ich bin beim Arzt."],
          ["Wohin? (to a person's)", "zu + dative", "Ich gehe zum Arzt."],
          ["Wohin? (to a place)", "zu + dative", "Ich gehe zur Apotheke."],
          ["when (day)", "am", "am Montag"],
          ["when (hour)", "um", "um zehn Uhr"],
          ["for how long", "seit + dative", "seit drei Tagen"],
          ["how long ago", "vor + dative", "vor drei Tagen"]
        ]
      },
      examples: [
        { tr: "I am at the doctor's.", note: "bei dem becomes beim: where you are" },
        { tr: "I am going to the doctor's.", note: "zu dem becomes zum: movement towards a person" },
        { tr: "My mother is going to the doctor (female).", note: "zu der becomes zur" },
        { tr: "I am going to the pharmacy.", note: "zur Apotheke: movement towards a place" },
        { tr: "I have had a fever for three days.", note: "seit + dative plural: Tagen" },
        { tr: "The appointment is on Monday at ten.", note: "am with the day, um with the hour" }
      ]
    },
    vocab: [
      "doctor (male)",
      "doctor (female)",
      "doctor's office",
      "appointment",
      "health insurance fund (health insurer)",
      "prescription",
      "pharmacy",
      "tablet, pill",
      "fever",
      "cough",
      "to make (an appointment)",
      "for, since (time)"
    ],
    exercises: [
      {
        q: "You are at the doctor's, not on your way there. Which sentence is correct?",
        opts: ["Ich bin zum Arzt.", "Ich bin beim Arzt.", "Ich bin bei Arzt."],
        why: "To say where you are at a person's: <b>bei</b> + dative, and <i>bei dem</i> becomes <i>beim</i>. <i>Zum</i> expresses movement."
      },
      {
        q: "Complete: “Ich gehe ___ Ärztin.” (zu with the article, contracted form)",
        hint: "zu + der, contracted form",
        why: "<b>Zur</b>: <i>zu der</i> contracts to <i>zur</i>. Going towards a person takes <i>zu</i> + dative."
      },
      {
        q: "Complete: “Ich habe ___ drei Tagen Fieber.” (I have had a fever for three days.)",
        hint: "for how long, + dative",
        why: "<b>Seit</b> + dative for something that has lasted from a point in time and continues; <i>Tagen</i> has the <b>-n</b> of the dative plural."
      },
      {
        q: "Complete the sentence.",
        tr: "I would like to make an appointment. Is Monday at ten all right?",
        why: "<i>Am Montag</i> with the day, <i>um zehn Uhr</i> with the hour."
      },
      {
        q: "Match each expression with its translation.",
        pairs: [
          "at the doctor's (I am there)",
          "to the doctor's (I am going)",
          "for three days",
          "three days ago"
        ]
      },
      {
        q: "Put the words in order.",
        tr: "Tomorrow I am going to the doctor's.",
        why: "The verb stays in second position. Both <i>Ich gehe morgen zum Arzt</i> and <i>Morgen gehe ich zum Arzt</i> work; you can also open with <i>zum Arzt</i> or end with <i>morgen</i>, which puts one element in the spotlight."
      },
      {
        q: "Translate (use am and zu): “On Monday I am going to the doctor (female).”",
        why: "<i>Ich gehe am Montag zur Ärztin</i>: <i>am</i> with the day, <i>zur</i> (= <i>zu der</i>) for the movement. With <i>Am Montag</i> first, the verb stays in second position: <i>Am Montag gehe ich zur Ärztin</i>."
      },
      {
        q: "You phone a doctor's office to make an appointment.",
        setting: "You call Dr. Berger's office because you have a fever.",
        lines: [
          { tr: "Berger practice, hello." },
          {
            tr: "Say that you would like to make an appointment.",
            answerTr: "Hello, I would like to make an appointment."
          },
          { tr: "Gladly. How long have you had the fever?" },
          {
            tr: "Answer that you have had a fever for three days.",
            answerTr: "I have had a fever for three days."
          }
        ]
      },
      {
        tr: "Hello, I would like to make an appointment. I have had a fever for three days and my head hurts.",
        why: "In <i>seit</i> the initial <b>s</b> is voiced [z] and the <b>ei</b> sounds like [aɪ]; in <i>Termin</i> the stress falls on the last syllable."
      },
      {
        tr: "On Monday at ten I have an appointment at the doctor's.",
        why: "In <i>zehn</i> the <b>z</b> is [ts] and the <b>e</b> is long, with a silent <b>h</b>; in <i>Uhr</i> the <b>u</b> is long and the final <b>r</b> is often vocalized."
      }
    ]
  },
  "lesson:a2-u04-l3": {
    theme: "Advice",
    title: "You should rest",
    objectives: [
      "give advice with du solltest, ihr solltet, Sie sollten",
      "express personal advice with ich würde + infinitive",
      "use the right reflexive pronoun with a verb like sich ausruhen",
      "place the reflexive pronoun before the infinitive at the end of the sentence"
    ],
    theory: [
      {
        h: "Advice with the Konjunktiv II",
        p: "To give advice German uses the Konjunktiv II. With <b>sollen</b> you say <em>solltest</em>, <em>solltet</em>, <em>sollten</em>: <em>Du solltest dich ausruhen.</em> To say what you would do in the other person's place, use <b>würde + infinitive</b>: <em>Ich würde zum Arzt gehen.</em> The phrase <em>an deiner Stelle</em> goes well with <em>würde</em>: <em>An deiner Stelle würde ich im Bett bleiben.</em> The infinitive goes at the end of the sentence, and the reflexive pronoun comes before it."
      },
      {
        h: "Reflexive verbs with a fixed pronoun",
        p: "<em>Sich ausruhen, sich hinlegen, sich erholen, sich fühlen</em> are the reflexive constructions practised in this lesson; <em>sich ausruhen</em> is the usual form taught. The pronoun is not “rest oneself” in a literal sense. The pronoun is in the <b>accusative</b> and changes with the person: <em>mich, dich, sich, uns, euch, sich</em>. It comes after the conjugated verb: <em>Ich ruhe mich aus.</em> With <em>sollen</em> and <em>würde</em> it stands before the infinitive: <em>Du solltest dich ausruhen. Ich würde mich hinlegen.</em> With the polite form: <em>Sie sollten sich hinlegen</em> (<em>sich</em> stays lowercase)."
      },
      {
        contrast: "English builds advice with <em>should</em> and <em>would</em>: “you should rest”, “I would go to the doctor”. German is very close: <em>solltest</em> is the Konjunktiv II of <em>sollen</em> and <em>würde</em> is “would”, with the infinitive at the end. But <em>sollte</em> has personal endings (<em>du solltest, ihr solltet</em>), while English <em>should</em> never changes. The real difference is the reflexive: English often has no pronoun (“you should rest”, “lie down”, “recover”), while German needs it: <em>sich ausruhen</em>, <em>sich hinlegen</em>, <em>sich erholen</em>. “To feel” is the same: “I feel tired” is <em>Ich fühle mich müde</em>."
      },
      {
        trap: "<em>Du solltest</em> is advice; <em>du sollst</em> is an obligation or someone else's order, and sounds much stronger (closer to “you shall” or “you are supposed to”). The usual construction, and the one practised in this lesson, is reflexive: <em>Du solltest dich ausruhen</em>. <em>Ausruhen</em> can also be used on its own (<em>Du solltest ausruhen</em> is possible), but with the pronoun it is the common way to say it. Do not move it to the end either: <em>Du solltest ausruhen dich</em> is wrong. With <em>würde</em> the infinitive stays last: <em>Ich würde mich ausruhen</em>, not <em>Ich würde ausruhen mich</em>."
      },
      {
        tip: "For advice prepare two versions: <em>Du solltest ...</em> to tell the other person, <em>Ich würde ...</em> to say what you would do. Then check the reflexive pronoun: same person as the subject (<em>ich ... mich</em>, <em>du ... dich</em>)."
      }
    ],
    grammar: {
      title: "The Konjunktiv II for advice",
      note: "<b>sollen</b> in the Konjunktiv II to advise (<b>du solltest</b>), <b>würde + infinitive</b> to say what you would do. The reflexive pronoun is accusative and comes before the infinitive.",
      table: {
        head: ["person", "sollen", "würde", "reflexive"],
        rows: [
          ["ich", "sollte", "würde", "mich"],
          ["du", "solltest", "würdest", "dich"],
          ["er, sie, es", "sollte", "würde", "sich"],
          ["wir", "sollten", "würden", "uns"],
          ["ihr", "solltet", "würdet", "euch"],
          ["sie, Sie", "sollten", "würden", "sich"]
        ]
      },
      examples: [
        { tr: "You should rest.", note: "du solltest + dich + infinitive at the end" },
        { tr: "I would go to the doctor.", note: "ich würde + infinitive at the end" },
        { tr: "In your place I would stay in bed.", note: "an deiner Stelle: dative after an" },
        { tr: "You (plural) should drink a lot of tea.", note: "ihr solltet: sollte- + the personal ending -t" },
        { tr: "You should lie down (polite).", note: "polite form: Sie sollten sich hinlegen" },
        { tr: "I would recover on vacation.", note: "sich erholen: würde + mich + infinitive" }
      ]
    },
    vocab: [
      "to rest",
      "to lie down",
      "to recover",
      "to feel",
      "advice",
      "tea",
      "bed",
      "rest, quiet",
      "vacation, leave",
      "healthy, well",
      "should, to be supposed to (sollen)",
      "in your place"
    ],
    exercises: [
      {
        q: "Give a tired friend some advice: “You should rest.”",
        opts: ["Du sollst dich ausruhen.", "Du solltest dich ausruhen.", "Du solltest ausruhen dich."],
        why: "<b>Du solltest dich ausruhen</b>: the Konjunktiv II of <i>sollen</i> gives advice, and <i>dich</i> comes before the infinitive. <i>Du sollst</i> is an obligation; in the third option the pronoun is in the wrong place."
      },
      {
        tr: "The Konjunktiv II of sollen, all persons.",
        why: "<i>Sollte, solltest, sollte, sollten, solltet, sollten</i>: these are the Präteritum forms, but here they serve for advice. The 1st and 3rd person singular are the same."
      },
      {
        tr: "The Konjunktiv II of sich ausruhen with würde, all persons.",
        why: "<i>Würde mich ausruhen, würdest dich ausruhen, würde sich ausruhen, würden uns ausruhen, würdet euch ausruhen, würden sich ausruhen</i>: <i>würde</i> + reflexive pronoun + infinitive."
      },
      {
        q: "Complete: “Du bist krank. Du ___ zum Arzt gehen.” (you should: sollen)",
        hint: "sollen, Konjunktiv II, du",
        why: "<b>Solltest</b>: the form for <i>du</i> is <i>solltest</i>, with <b>-st</b>. The infinitive <i>gehen</i> goes at the end."
      },
      {
        q: "Complete: “Wir sind müde. Wir sollten ___ ausruhen.” (wir)",
        hint: "reflexive pronoun, accusative",
        why: "<b>Uns</b>: the reflexive pronoun for <i>wir</i> is <i>uns</i>, before the infinitive."
      },
      {
        q: "Complete the sentence.",
        tr: "You have a fever. In your place I would go to the doctor. And you should rest.",
        why: "<i>An deiner Stelle würde ich ...</i> to say what you would do; <i>du solltest dich ausruhen</i>, with <i>dich</i> for <i>du</i>."
      },
      {
        q: "Match each sentence with its translation.",
        pairs: [
          "You should rest.",
          "I would go to the doctor.",
          "You (plural) should drink a lot of tea.",
          "You should lie down (polite)."
        ]
      },
      {
        q: "Translate (use sich ausruhen): “In your place I would rest.”",
        why: "<i>An deiner Stelle würde ich mich ausruhen</i>: <i>würde</i> in second position after <i>An deiner Stelle</i>, then <i>ich mich</i> and the infinitive at the end. <i>Ich würde mich an deiner Stelle ausruhen</i> works too."
      },
      {
        tr: "You look tired. In your place I would lie down, and you should drink a lot of tea.",
        why: "In <i>Stelle</i> the initial <b>st</b> sounds like [ʃt], while in <i>solltest</i> it is [st]; in <i>würde</i> the <b>ü</b> is short [ʏ]."
      },
      {
        tr: "You should rest, and I would go to the doctor.",
        why: "In <i>ausruhen</i> the <b>au</b> sounds like [aʊ] and the <b>h</b> is silent; in <i>dich</i> the <b>ch</b> after <b>i</b> is [ç]."
      }
    ]
  },
  "lesson:a2-u04-l4": {
    theme: "Lifestyle",
    title: "Living healthily",
    objectives: [
      "introduce a content clause with dass after ich finde, ich glaube, ich weiß, der Arzt sagt",
      "put the conjugated verb at the end in a clause with dass",
      "link cause and consequence with deshalb, which takes the verb right after it",
      "talk about sport, food, sleep and habits"
    ],
    theory: [
      {
        h: "dass sends the verb to the end",
        p: "After verbs like <em>finden, glauben, denken, wissen, sagen</em> you report a content with <b>dass</b>. The clause that follows is subordinate: the conjugated verb goes at the <b>end</b>, and the comma before <em>dass</em> is required. <em>Ich finde, dass Sport wichtig ist. Der Arzt sagt, dass ich mehr Wasser trinken soll.</em> If there is an infinitive and a modal, the conjugated modal closes the clause: <em>... trinken soll</em>. It works like <em>weil</em>, <em>als</em> and <em>wenn</em> seen earlier."
      },
      {
        h: "deshalb: the consequence, with inversion",
        p: "<b>Deshalb</b> (“that is why”) links two main clauses and takes the <b>first position</b> of the second: the verb comes right after it and the subject follows. <em>Ich schlafe schlecht. Deshalb bin ich müde.</em> Synonyms: <em>deswegen, darum</em>. It can also come after a comma: <em>Ich schlafe schlecht, deshalb bin ich müde.</em>"
      },
      {
        contrast: "English often drops “that”: “I think sport is important”. German can drop <em>dass</em> too, but then the verb stays in second position and there is a comma: <em>Ich denke, Sport ist wichtig.</em> With <em>dass</em> the verb goes to the end: <em>Ich denke, dass Sport wichtig <b>ist</b></em>. And English has no comma before “that”, while German always has one before <em>dass</em>. The other difference is <em>deshalb</em>: English “that is why I am tired” keeps subject and verb in the usual order, while German inverts them: <em>Deshalb bin ich müde</em>."
      },
      {
        trap: "<em>Deshalb</em> does not send the verb to the end as <em>dass</em> does: <em>Deshalb ich bin müde</em> and <em>Deshalb ich müde bin</em> are wrong. And with <em>dass</em> the verb does not stay in second position: <em>Ich finde, dass Sport ist wichtig</em> is wrong. English “that” is two different words in German: <em>dass</em> (conjunction, “I know that he is ill”) and <em>das</em> (article or pronoun, “that is good”). They are not interchangeable: <em>Ich weiß, das er krank ist</em> is a spelling error."
      },
      {
        tip: "Before <em>dass</em> put the comma and send the verb to the end; after <em>deshalb</em> write the verb right away. Before writing, ask yourself: does the clause begin with a conjunction (<em>dass</em>, verb at the end) or an adverb (<em>deshalb</em>, verb right after)?"
      }
    ],
    grammar: {
      title: "dass and deshalb",
      note: "<b>dass</b>: the conjugated verb goes at the end. <b>deshalb</b>: the verb comes right after it, the subject follows.",
      table: {
        head: ["element", "verb position", "example"],
        rows: [
          ["main clause", "second position", "Sport ist wichtig."],
          ["dass", "at the end", "Ich finde, dass Sport wichtig ist."],
          ["dass with a modal", "the modal closes", "..., dass ich mehr trinken soll."],
          ["deshalb", "right after deshalb", "Ich schlafe schlecht. Deshalb bin ich müde."]
        ]
      },
      examples: [
        { tr: "I think sport is important.", note: "dass + verb at the end; English can drop “that”, German normally keeps dass" },
        { tr: "The doctor says I have to drink more water.", note: "the modal soll closes the clause after trinken" },
        { tr: "I know that cigarettes are not good for you.", note: "dass ... sind: the verb at the end" },
        { tr: "I sleep badly. That is why I am tired.", note: "deshalb in first position, then bin ich" },
        { tr: "She eats a lot of vegetables. That is why she is rarely ill.", note: "deshalb, then ist sie" },
        { tr: "I think a walk is good for you.", note: "dass ... gesund ist" }
      ]
    },
    vocab: [
      "apple",
      "vegetables",
      "meal",
      "walk",
      "cigarette",
      "sleep",
      "health",
      "water",
      "to smoke",
      "regularly",
      "unhealthy",
      "to exercise, to move"
    ],
    exercises: [
      {
        q: "With dass: “I think sport is important.” Which sentence is correct?",
        opts: [
          "Ich finde, dass Sport ist wichtig.",
          "Ich finde, dass Sport wichtig ist.",
          "Ich finde dass, Sport wichtig ist."
        ],
        why: "<b>Dass</b> sends the verb to the end, and the comma goes <b>before</b> <i>dass</i>. In the first the verb is in second position, in the third the comma is in the wrong place."
      },
      {
        q: "Which sentence is correct? “I sleep badly. That is why I am tired.”",
        opts: [
          "Ich schlafe schlecht. Deshalb ich bin müde.",
          "Ich schlafe schlecht. Deshalb bin ich müde.",
          "Ich schlafe schlecht. Deshalb ich müde bin."
        ],
        why: "After <b>deshalb</b> the verb comes right away, then the subject: <i>Deshalb bin ich müde</i>. <i>Deshalb</i> does not send the verb to the end."
      },
      {
        q: "Complete: “Der Arzt sagt, ___ ich mehr Wasser trinken soll.” (that)",
        hint: "conjunction",
        why: "<b>Dass</b> introduces what the doctor says and sends the verb to the end: <i>trinken soll</i>."
      },
      {
        q: "Complete: “Ich glaube, dass er viel Gemüse ___.” (essen, er)",
        hint: "essen, er, verb at the end",
        why: "<b>Isst</b>: the form for <i>er</i> is <i>isst</i>, and with <i>dass</i> it goes at the end of the clause."
      },
      {
        q: "Complete: “Ich bin oft müde. Deshalb ___ ich früh ins Bett.” (gehen, ich)",
        hint: "gehen, ich",
        why: "<b>Gehe</b>: after <i>Deshalb</i> the verb comes right away, then <i>ich</i>."
      },
      {
        q: "Complete the sentence.",
        tr: "I know that sport is good for you. But I do too little of it. That is why I am often tired.",
        why: "<i>Dass</i> after <i>Ich weiß,</i> with the verb at the end; <i>deshalb</i> (also <i>deswegen</i> or <i>darum</i>) opens the next sentence, and <i>bin ich</i> follows right away."
      },
      {
        q: "Match each word with its translation.",
        pairs: [
          "that (introduces a clause)",
          "that is why",
          "regularly",
          "unhealthy"
        ]
      },
      {
        q: "Translate (use dass): “The doctor says I have to sleep more.”",
        why: "<i>Der Arzt sagt, dass ich mehr schlafen soll</i>: comma, <i>dass</i>, and the modal <i>soll</i> at the end after the infinitive. <i>Muss</i> works too, because “I have to” can render either."
      },
      {
        tr: "The doctor says I have to sleep more. I sleep badly, that is why I am often tired.",
        why: "In <i>schlafen</i> and <i>schlecht</i> the <b>sch</b> is [ʃ]; in <i>dass</i> the <b>ss</b> is a voiceless <b>s</b> and the <b>a</b> is short."
      },
      {
        tr: "I think sport is good for you. That is why I go for a walk every day.",
        why: "In <i>Sport</i> the initial <b>sp</b> sounds like [ʃp]; in <i>gesund</i> the <b>s</b> is voiced [z]; in <i>spazieren</i> <b>sp</b> is [ʃp] and the <b>z</b> is [ts]."
      }
    ]
  },
  "lesson:a2-u04-test": {
    theme: "Test",
    title: "Unit 4 test",
    objectives: [
      "check the dative with wehtun, the Konjunktiv II for advice (solltest, würde, also with a reflexive verb) and clauses with dass"
    ],
    theory: [
      {
        p: "Ten questions on the dative with <em>wehtun</em>, on the Konjunktiv II for advice and on clauses with <em>dass</em>. You pass with 70%. Do not look back at the lessons while answering: if you do not remember something, it is better to go back and review."
      }
    ],
    exercises: [
      {
        tr: "The Konjunktiv II of sollen, all persons.",
        why: "<i>Sollte, solltest, sollte, sollten, solltet, sollten</i>: the 1st and 3rd person singular are the same."
      },
      {
        q: "Complete: “Anna hat Fieber. ___ tut der Kopf weh.” (to her)",
        hint: "pronoun in the dative",
        why: "<b>Ihr</b>: dative of <i>sie</i>; <i>der Kopf</i> is the subject."
      },
      {
        q: "Complete: “Wir sind müde. ___ tun die Beine weh.” (to us)",
        hint: "pronoun in the dative",
        why: "<b>Uns</b>: dative of <i>wir</i>; <i>die Beine</i> is plural, so <i>tun</i>."
      },
      {
        q: "Complete: “Ich denke, ___ du dich ausruhen solltest.” (that)",
        hint: "conjunction",
        why: "<b>Dass</b> introduces what you think and sends the verb to the end: <i>ausruhen solltest</i>."
      },
      {
        q: "Complete: “Du bist krank. An deiner Stelle ___ ich zum Arzt gehen.” (werden, Konjunktiv II)",
        hint: "werden, Konjunktiv II, ich",
        why: "<b>Würde</b>: <i>würde</i> + infinitive to say what you would do."
      },
      {
        q: "How do you say “My legs hurt”?",
        opts: ["Mir tut die Beine weh.", "Mir tun die Beine weh.", "Ich tun die Beine weh."],
        why: "<i>Die Beine</i> is plural and the subject, so <b>tun</b>; the person stays in the dative, <i>mir</i>."
      },
      {
        q: "Match each sentence with its translation.",
        pairs: [
          "My head hurts.",
          "You should rest.",
          "I would go to the doctor.",
          "I know that he is ill."
        ]
      },
      {
        q: "Translate (use dass and sollen): “The doctor says I should rest.” (use sollen in the present)",
        why: "<i>Der Arzt sagt, dass ich mich ausruhen soll</i>: <i>dass</i> sends the verb to the end; <i>mich</i> comes before the infinitive <i>ausruhen</i>."
      },
      {
        tr: "My head hurts. I think I should rest.",
        why: "In <i>denke</i> the <b>n</b> before <b>k</b> sounds like [ŋ]; in <i>sollte</i> the <b>o</b> is short."
      },
      {
        tr: "My brother is sick. His back hurts, and I think he should go to the doctor.",
        why: "In <i>Rücken</i> the <b>ü</b> is short [ʏ] and <b>ck</b> sounds like [k]; in <i>Mein</i> the <b>ei</b> is [aɪ]; in <i>ihm</i> the <b>h</b> is silent and the <b>i</b> is long."
      }
    ]
  }
});
