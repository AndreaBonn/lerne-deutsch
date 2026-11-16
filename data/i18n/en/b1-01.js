/* ============================================================
   Learner-language text (en) for data/core/b1-01.js, unit b1-u01.
   Keys point at ids in the neutral layer; arrays merge by index,
   so their length has to match core.
   Checked by scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("en", {
  "unit:b1-u01": {
    title: "If I were you",
    grammarNote: "Konjunktiv II in the present (wäre, hätte, würde + infinitive, modals) · real and hypothetical conditions · Ich finde, dass ... and Meiner Meinung nach ... · obwohl and trotzdem"
  },
  "lesson:b1-u01-l1": {
    theme: "Wishes and advice",
    title: "I would be, I would have, would + infinitive",
    objectives: [
      "express a wish or a hypothetical with wäre and hätte",
      "use würde + infinitive, which replaces the verb's own subjunctive form for most verbs",
      "give advice with An deiner Stelle würde ich ...",
      "make suggestions and polite requests with könnte"
    ],
    theory: [
      {
        h: "The Konjunktiv II of sein and haben",
        p: "The <strong>Konjunktiv II</strong> is used for wishes, hypotheticals, polite requests and advice. For <em>sein</em> and <em>haben</em> it starts from the Präteritum (<em>war, hatte</em>), adds an <strong>Umlaut</strong> and the endings <em>-e, -st, -e, -en, -t, -en</em> (for <em>haben</em>: <em>-e, -est, -e, -en, -et, -en</em>): <em>ich wäre, du wärst, wir wären</em> and <em>ich hätte, du hättest, wir hätten</em>. <em>Ich wäre gern Ärztin</em> (I'd like to be a doctor), <em>Wir hätten gern mehr Zeit</em> (we'd like to have more time). It is not a past tense: it talks about what is wished for, imagined or possible now or later."
      },
      {
        h: "würde + infinitive",
        p: "With almost all other verbs you use <strong>würde</strong> + an <strong>infinitive at the end</strong>: <em>Ich würde gern im Ausland arbeiten. Wir würden gern am Meer wohnen.</em> <em>Würde</em> goes like this: <em>ich würde, du würdest, er würde, wir würden, ihr würdet, sie würden</em>. A few modals also have their own form: <em>ich könnte</em> (I could), <em>ich müsste</em> (I would have to). Advice often sounds like this: <em>An deiner Stelle würde ich umziehen</em> (if I were you, I would move)."
      },
      {
        contrast: "English builds its conditional with <em>would</em> + a bare verb (<em>I would go, I would be</em>), and German <em>würde</em> + infinitive works almost the same way: <em>ich würde gehen</em> is <em>I would go</em>. What differs is everything else. English has hardly any special hypothetical forms (<em>were</em> in <em>If I were you</em> is about the only one), but German has one for every verb. In everyday speech you hear it mostly with a few very frequent verbs (<em>wäre, hätte, könnte, müsste</em>). With most others it either looks like the Präteritum or sounds old-fashioned, so <em>würde</em> + infinitive takes over. Also, <em>würde</em> does not cover the English <em>would</em> of past habit (<em>when I was a kid we would swim every day</em>): German just uses the Präteritum or Perfekt there. The Konjunktiv II is a mood, not a tense: <em>Ich wäre</em> means <em>I would be</em> and points to the present or the future."
      },
      {
        trap: "Do not mix up <em>würde</em> and <em>wurde</em>: <em>wurde</em> (no Umlaut) is the Präteritum of <em>werden</em> (“became”), <em>würde</em> (with Umlaut) is the conditional. One letter changes the meaning, and you can hear it: the <em>ü</em> is rounded. Because English says <em>would be</em> and <em>would have</em>, it is tempting to build “würde sein” and “würde haben”. With <em>sein</em> and <em>haben</em> the forms <em>wäre</em> and <em>hätte</em> are usually preferred: <em>Das wäre schön</em> is what you hear most; “Das würde schön sein” is correct but heavier."
      },
      {
        tip: "For polite advice use <em>An deiner Stelle würde ich ...</em> instead of an imperative: it sounds softer. And for a wish: <em>Ich hätte gern</em> + object (<em>Ich hätte gern mehr Zeit</em>), <em>Ich wäre gern</em> + adjective or role (<em>Ich wäre gern glücklich, Ich wäre gern Pilot</em>)."
      }
    ],
    grammar: {
      title: "Konjunktiv II: wäre, hätte, würde",
      note: "<b>wäre</b> and <b>hätte</b> for sein and haben, <b>könnte</b> and <b>müsste</b> for the modals, <b>würde</b> + infinitive at the end for almost all other verbs.",
      table: {
        head: ["verb", "ich", "du", "wir"],
        rows: [
          ["sein", "wäre", "wärst", "wären"],
          ["haben", "hätte", "hättest", "hätten"],
          ["werden (würde + infinitive)", "würde", "würdest", "würden"],
          ["können", "könnte", "könntest", "könnten"]
        ]
      },
      examples: [
        { tr: "I'd like to be a doctor.", note: "wäre + gern: a wish" },
        { tr: "We'd like to have more time.", note: "hätte + gern: a wish" },
        { tr: "If I were you, I would move.", note: "An deiner Stelle: würde + infinitive at the end" },
        { tr: "I could help you tomorrow.", note: "könnte: the modal's own form" },
        { tr: "That would be a good idea.", note: "wäre instead of “würde sein”" },
        { tr: "I'd like to work abroad.", note: "würde + gern + infinitive at the end" }
      ]
    },
    vocab: [
      "the wish",
      "the piece of advice",
      "the idea",
      "foreign countries (im Ausland: abroad)",
      "the dream job",
      "the trip, the journey",
      "the sea",
      "freedom",
      "to wish (sich etwas wünschen: to wish for something for oneself)",
      "to dream",
      "to suggest",
      "possible"
    ],
    exercises: [
      {
        tr: "The Konjunktiv II of sein, all persons.",
        why: "<i>Wäre, wärst, wäre, wären, wärt, wären</i>: from the Präteritum <i>war</i> with an Umlaut and the Konjunktiv II endings. The first and third person singular are the same."
      },
      {
        tr: "The Konjunktiv II of haben, all persons.",
        why: "<i>Hätte, hättest, hätte, hätten, hättet, hätten</i>: from the Präteritum <i>hatte</i> with an Umlaut."
      },
      {
        tr: "The Konjunktiv II of werden, all persons (the form used as an auxiliary).",
        why: "<i>Würde, würdest, würde, würden, würdet, würden</i>: it is the auxiliary of the conditional, followed by the infinitive at the end."
      },
      {
        q: "How do you say “I'd like to be a doctor”?",
        opts: [
          "Ich wäre gern Arzt.",
          "Ich war gern Arzt.",
          "Ich werde gern Arzt."
        ],
        why: "A wish takes the Konjunktiv II: <b>wäre</b>. <i>War</i> is the Präteritum (I was), <i>werde</i> is a future or a “becoming”."
      },
      {
        q: "Which sentence means “If I were you, I would move”?",
        opts: [
          "An deiner Stelle würde ich umziehen.",
          "An deiner Stelle werde ich umziehen.",
          "An deiner Stelle wurde ich umziehen."
        ],
        why: "<b>würde</b> (with Umlaut) is the conditional. <i>Werde</i> is the future (“I will move”), <i>wurde</i> is the Präteritum of <i>werden</i>, which does not give the right meaning."
      },
      {
        q: "Complete with the Konjunktiv II of haben: “Ich ___ gern ein Haus am Meer.” (I'd like to have)",
        hint: "Konjunktiv II of haben, ich",
        why: "<b>Hätte</b>: <i>Ich hätte gern ein Haus am Meer</i> expresses a wish, with an Umlaut on the <i>ä</i>."
      },
      {
        q: "Complete with the Konjunktiv II of sein: “Das ___ eine gute Idee.” (would be)",
        hint: "Konjunktiv II of sein",
        why: "<b>Wäre</b>: with <i>sein</i> the verb's own form is preferred to “würde sein”."
      },
      {
        q: "Complete the sentence (use würde in the first blank).",
        tr: "I'd like to work abroad.",
        why: "<i>Ich würde gern im Ausland arbeiten</i>: <i>würde</i> in second position, the infinitive <i>arbeiten</i> at the end."
      },
      {
        q: "Translate: “If I were you, I'd go to the doctor.” (use würde)",
        why: "<i>An deiner Stelle würde ich zum Arzt gehen</i>: <i>würde</i> in second position, <i>gehen</i> at the end. You can also say <i>Ich würde an deiner Stelle zum Arzt gehen</i>."
      },
      {
        tr: "I'd like to be a pilot and work abroad. That would be my dream job.",
        why: "In <i>würde</i> the <b>ü</b> is rounded: say “ee” with your lips pushed forward as for “oo”. In <i>Ausland</i> the <b>au</b> is [aʊ], like “ow” in “cow”; in <i>Traumberuf</i> the <b>au</b> is the same diphthong."
      },
      {
        tr: "If I were you, I'd take a trip. That would be a good idea.",
        why: "In <i>Reise</i> the <b>ei</b> is [aɪ], like “eye”; in <i>wäre</i> the <b>w</b> is [v], not an English “w”; <i>Stelle</i> begins with <b>st</b> = [ʃt]."
      }
    ]
  },
  "lesson:b1-u01-l2": {
    theme: "If I could ...",
    title: "If I had time, ...",
    objectives: [
      "form a hypothetical condition in the present with wenn + Konjunktiv II",
      "tell a real condition (wenn + present) from a hypothetical one",
      "put the verb at the end of the wenn clause and in first position in the main clause that follows",
      "give advice with Wenn ich du wäre, ..."
    ],
    theory: [
      {
        h: "Real and hypothetical conditions",
        p: "<strong>Wenn</strong> means “if”. If the condition is <strong>possible</strong> or habitual, German uses the <strong>present</strong> in both clauses: <em>Wenn es morgen regnet, bleiben wir zu Hause. Wenn du Hunger hast, kannst du etwas essen.</em> If the condition is <strong>hypothetical</strong>, unlikely or contrary to fact (it is not true now, or it is something you are imagining), you use the <strong>Konjunktiv II</strong>: <em>Wenn ich Zeit hätte, würde ich mehr reisen. Wenn ich reich wäre, würde ich ein Haus kaufen.</em>"
      },
      {
        h: "Where the verb goes",
        p: "After <em>wenn</em> the conjugated verb goes <strong>to the end</strong> of the subordinate clause, and a comma separates it from the main clause. If the <em>wenn</em> clause comes first, the main clause <strong>starts with the verb</strong>: <em>Wenn ich Zeit hätte, würde ich mehr reisen.</em> If it comes second, the main clause keeps its normal order: <em>Ich würde mehr reisen, wenn ich Zeit hätte.</em> Both constructions can appear in either clause: <em>Wenn ich weniger arbeiten würde, hätte ich mehr Zeit</em> is as correct as <em>Wenn ich Zeit hätte, würde ich mehr reisen</em>. With <em>sein</em>, <em>haben</em> and the modals the verb's own form (<em>wäre, hätte, könnte</em>) is usually preferred, with other verbs often <em>würde</em> + infinitive."
      },
      {
        h: "Wenn ich du wäre, ...",
        p: "The formula <strong>Wenn ich du wäre, würde ich ...</strong> matches English “if I were you” and is used to give advice: <em>Wenn ich du wäre, würde ich ihn anrufen.</em> It is the longer version of <em>An deiner Stelle würde ich ...</em> from the previous lesson."
      },
      {
        contrast: "English puts a past form in the <em>if</em> clause and <em>would</em> in the main clause: <em>If I had time, I would travel more</em>. German does the same thing, only with its own subjunctive: <em>wenn ich Zeit hätte</em>, <em>würde ich reisen</em>. Two differences. First, German lets the subjunctive form (or <em>würde</em>) appear in both clauses, and in speech you also hear <em>würde</em> inside the <em>wenn</em> clause (<em>Wenn ich weniger arbeiten würde, ...</em>), which standard English avoids (“If I would work less”). Second, for a real condition about the present or the future German often uses the present in both clauses (<em>Wenn es morgen regnet, bleiben wir zu Hause</em>), where English tends to use <em>will</em> in the main clause for a future consequence (<em>If it rains tomorrow, we'll stay home</em>). This is a habit, not a rule: <em>Wenn es morgen regnet, werden wir zu Hause bleiben</em> is correct too, and a modal works in both languages (<em>If you're hungry, you can eat something</em>)."
      },
      {
        trap: "You do not write “Wenn ich hätte Zeit”: after <em>wenn</em> the conjugated verb goes to the end, <em>Wenn ich Zeit hätte</em>. And the main clause after the subordinate clause does not start with the subject: “Wenn ich Zeit hätte, ich würde reisen” is wrong, the right form is <em>..., würde ich reisen</em>. Do not mix up <em>wenn</em> (if, whenever) with <em>wann</em> (when, in questions): <em>Wann kommst du?</em> asks for a time."
      },
      {
        tip: "Before writing a sentence with <em>wenn</em>, ask yourself how you are presenting the condition. As real or open? Then the basic construction is the present in both clauses. As hypothetical, unlikely or contrary to fact? Then the Konjunktiv II in both clauses (even for something possible: <em>Wenn es morgen regnen würde, würden wir zu Hause bleiben</em>): <em>hätte, wäre, könnte</em> with <em>haben</em>, <em>sein</em> and the modals, <em>würde</em> + infinitive with almost all other verbs."
      }
    ],
    grammar: {
      title: "Wenn + present or Konjunktiv II",
      note: "<b>Real</b>: <i>wenn</i> + present, present. <b>Hypothetical</b>: Konjunktiv II in both clauses (<i>hätte, wäre, könnte</i>, or <i>würde</i> + infinitive). The verb of <i>wenn</i> goes to the end, and the main clause that follows starts with the verb.",
      table: {
        head: ["type", "example", "note"],
        rows: [
          ["real", "Wenn es morgen regnet, bleiben wir zu Hause.", "present in both clauses"],
          ["hypothetical", "Wenn ich Zeit hätte, würde ich mehr reisen.", "Konjunktiv II + würde"],
          ["hypothetical with sein", "Wenn ich reich wäre, würde ich ein Haus kaufen.", "wäre, not “würde sein”"],
          ["advice", "Wenn ich du wäre, würde ich ihn anrufen.", "if I were you"]
        ]
      },
      examples: [
        { tr: "If I had time, I would travel more.", note: "wenn clause first: the main clause starts with würde" },
        { tr: "If I were rich, I would buy a house.", note: "wäre after wenn" },
        { tr: "I would do more sports if I had more time.", note: "wenn clause second: the main clause order does not change" },
        { tr: "If you're hungry, you can eat something.", note: "real condition: present" },
        { tr: "If it rains tomorrow, we'll stay home.", note: "real condition: present, the verb of wenn at the end" },
        { tr: "If I were you, I'd call him.", note: "the formula for advice" }
      ]
    },
    vocab: [
      "the winnings, the profit",
      "to win",
      "rich",
      "money",
      "to save",
      "to earn",
      "the vacation, time off",
      "the house",
      "the garden, the yard",
      "the trip around the world",
      "the language",
      "the profession, the trade"
    ],
    exercises: [
      {
        q: "How do you say “If I had time, I would travel more”?",
        opts: [
          "Wenn ich Zeit hätte, würde ich mehr reisen.",
          "Wenn ich Zeit hatte, würde ich mehr reisen.",
          "Wenn ich hätte Zeit, würde ich mehr reisen."
        ],
        why: "Hypothetical condition: <b>hätte</b> after <i>wenn</i>, with the verb of <i>wenn</i> at the end, and <i>würde ich</i> in the main clause, with the verb in first position."
      },
      {
        q: "Which sentence talks about a possible, real situation and not a hypothetical one?",
        opts: [
          "Wenn ich reich wäre, würde ich ein Haus kaufen.",
          "Wenn es morgen regnet, bleiben wir zu Hause.",
          "Wenn ich du wäre, würde ich ihn anrufen."
        ],
        why: "The second has the present in both clauses: rain tomorrow is possible. The other two have the Konjunktiv II: they are hypotheticals."
      },
      {
        q: "Complete: “Wenn ich mehr Geld hätte, ___ ich ein Auto kaufen.”",
        opts: [
          "würde",
          "wurde",
          "werde"
        ],
        why: "<b>würde</b> is the conditional, and it comes after the comma, with the verb in first position in the main clause. <i>Wurde</i> is the Präteritum, <i>werde</i> the present."
      },
      {
        q: "Which sentences are correct?",
        opts: [
          "Wenn ich reich wäre, würde ich weniger arbeiten.",
          "Ich würde weniger arbeiten, wenn ich reich wäre.",
          "Wenn ich wäre reich, würde ich weniger arbeiten.",
          "Wenn ich reich wäre, ich würde weniger arbeiten.",
          "Ich würde weniger arbeiten, wenn wäre ich reich."
        ],
        why: "The first two are fine: <i>wenn</i> sends <i>wäre</i> to the end, and the main clause that follows starts with the verb. Sentences 3 and 5 put the verb of <i>wenn</i> in the wrong place, sentence 4 does not start the main clause with the verb."
      },
      {
        q: "Complete with the present of regnen: “Wenn es morgen ___, bleiben wir zu Hause.”",
        hint: "present, 3rd person singular",
        why: "<b>Regnet</b>: real condition, so the present. The verb of <i>wenn</i> goes to the end."
      },
      {
        q: "Complete with the Konjunktiv II of haben: “Wenn ich viel Geld ___, würde ich um die Welt reisen.”",
        hint: "Konjunktiv II of haben, ich",
        why: "<b>Hätte</b> at the end of the clause with <i>wenn</i>. The main clause uses <i>würde</i> + infinitive."
      },
      {
        q: "Complete the sentence (use würde in the second blank).",
        tr: "If I had more time, I would go to the movies more often.",
        why: "<i>Wenn ich mehr Zeit hätte, würde ich öfter ins Kino gehen</i>: <i>hätte</i> at the end of the clause with <i>wenn</i>, <i>würde</i> in first position in the main clause, <i>gehen</i> at the end."
      },
      {
        q: "Translate: “If I were rich, I would buy a house.”",
        why: "<i>Wenn ich reich wäre, würde ich ein Haus kaufen</i>. <i>Mir ein Haus kaufen</i> is fine too, and so is the reverse order: <i>Ich würde ein Haus kaufen, wenn ich reich wäre.</i>"
      },
      {
        tr: "If I had more money, I would travel around the world. If I were rich, I would also buy a house with a garden.",
        why: "In <i>Weltreise</i> the <b>w</b> is [v] and the <b>ei</b> is [aɪ]; in <i>Garten</i> the <b>g</b> is [g]; in <i>reich</i> the <b>ch</b> after <b>ei</b> is [ç], a soft hissing sound like the “h” in “huge”."
      },
      {
        tr: "If I had more time, I would learn a new language.",
        why: "In <i>Sprache</i> the initial <b>sp</b> is [ʃp] and the <b>ch</b> after <b>a</b> is [x], like the end of Scottish “loch”; in <i>lernen</i> the <b>l</b> is clear."
      }
    ]
  },
  "lesson:b1-u01-l3": {
    theme: "Opinions",
    title: "I think that ... In my opinion ...",
    objectives: [
      "express an opinion with Ich finde, dass ... and Ich glaube, dass ...",
      "put the verb at the end after dass",
      "give your opinion with Meiner Meinung nach ...",
      "tell dass (conjunction) from das (article or pronoun)"
    ],
    theory: [
      {
        h: "Ich finde, dass ...",
        p: "To say what you think you use verbs like <strong>finden, glauben, denken</strong> and the expression <strong>der Meinung sein</strong>, followed by the conjunction <strong>dass</strong>. After <em>dass</em> the conjugated verb goes <strong>to the end</strong>, and the comma is obligatory: <em>Ich finde, dass das eine gute Idee ist. Ich bin der Meinung, dass wir mehr Zeit brauchen.</em> You can negate the verb of opinion: <em>Ich glaube nicht, dass das funktioniert.</em>"
      },
      {
        h: "Without dass",
        p: "In speech you can leave out <em>dass</em>: the second clause is then a normal main clause, with the verb in <strong>second position</strong>: <em>Ich denke, er hat recht. Ich finde, das ist zu teuer.</em> With <em>dass</em> the verb goes to the end (<em>dass er recht hat</em>), without <em>dass</em> it stays in second position (<em>er hat recht</em>)."
      },
      {
        h: "Meiner Meinung nach ...",
        p: "<strong>Meiner Meinung nach</strong> (in my opinion) takes the first position, so the verb comes right after: <em>Meiner Meinung nach ist das zu teuer.</em> <em>Meiner Meinung</em> is a dative (<em>die Meinung</em>), and <em>nach</em> comes after it. If you start with the subject instead, <em>meiner Meinung nach</em> can sit in the middle: <em>Das ist meiner Meinung nach zu teuer.</em>"
      },
      {
        contrast: "English lets you drop <em>that</em> (<em>I think it's a good idea</em>) and nothing else changes. German can drop <em>dass</em> too (<em>Ich denke, das ist richtig</em>), but the verb order changes with it: verb at the end with <em>dass</em> (<em>dass das richtig ist</em>), verb in second position without it (<em>das ist richtig</em>). Also, German always puts a comma before <em>dass</em>, while English usually has none. And the opinion is stated with the plain indicative, as in English: <em>Ich denke, dass das richtig ist</em>."
      },
      {
        trap: "You do not write “Ich finde, dass das ist gut”: after <em>dass</em> the verb goes to the end, <em>dass das gut ist</em>. Do not confuse <strong>dass</strong> (conjunction, two <em>s</em>) with <strong>das</strong> (article or pronoun, one <em>s</em>): English says “that” for both, German keeps them apart: <em>Ich glaube, dass das Buch gut ist</em>. In the sentence <em>Ich glaube, das ist gut</em> the word <em>das</em> is a pronoun."
      },
      {
        tip: "If you are not sure whether to write <em>das</em> or <em>dass</em>, try replacing it with <em>dieses</em> or <em>welches</em>: if that works, it is <em>das</em>. Otherwise it is <em>dass</em>."
      }
    ],
    grammar: {
      title: "dass and opinions",
      note: "<b>Ich finde, dass ...</b> with the verb at the end. Without <i>dass</i>, the verb stays in second position. <b>Meiner Meinung nach</b> in first position, then the verb.",
      table: {
        head: ["construction", "example", "note"],
        rows: [
          ["Ich finde, dass ...", "Ich finde, dass das eine gute Idee ist.", "verb at the end"],
          ["without dass", "Ich denke, er hat recht.", "verb in second position"],
          ["Meiner Meinung nach", "Meiner Meinung nach ist das zu teuer.", "the verb right after"],
          ["der Meinung sein", "Ich bin der Meinung, dass wir mehr Zeit brauchen.", "the comma is obligatory"]
        ]
      },
      examples: [
        { tr: "I think it's a good idea.", note: "dass: verb at the end, indicative" },
        { tr: "I believe he's right.", note: "dass: recht hat, with the conjugated verb hat at the end" },
        { tr: "I think he's right.", note: "without dass: verb in second position" },
        { tr: "In my opinion it's too expensive.", note: "Meiner Meinung nach in first position, then ist" },
        { tr: "I'm of the opinion that we need more time.", note: "der Meinung sein + dass" },
        { tr: "I don't think it works.", note: "nicht before dass: Ich glaube nicht, dass ..." }
      ]
    },
    vocab: [
      "the opinion",
      "the suggestion, the proposal",
      "the topic, the subject",
      "the reason",
      "the advantage",
      "the disadvantage",
      "to believe, to think",
      "to find, to think (of an opinion)",
      "to agree (with the dative)",
      "to be right",
      "in agreement, fine by me",
      "right, correct"
    ],
    exercises: [
      {
        q: "Which sentence is correct?",
        opts: [
          "Ich finde, dass das eine gute Idee ist.",
          "Ich finde, dass das ist eine gute Idee.",
          "Ich finde, dass ist das eine gute Idee."
        ],
        why: "After <b>dass</b> the conjugated verb goes to the end: <i>dass das eine gute Idee ist</i>."
      },
      {
        q: "Which sentence is grammatically correct and uses the correct spelling of dass?",
        opts: [
          "Ich glaube, dass er recht hat.",
          "Ich glaube, das er recht hat.",
          "Ich glaube, dass er hat recht."
        ],
        why: "The conjunction has two <i>s</i>: <b>dass</b>, and it sends the conjugated verb to the end (<i>recht hat</i>)."
      },
      {
        q: "Complete: “Ich finde, ___ wir mehr Zeit brauchen.”",
        hint: "conjunction",
        why: "<b>dass</b> introduces what you think, and <i>brauchen</i> goes to the end."
      },
      {
        q: "Complete: “Meiner ___ nach ist das zu teuer.”",
        hint: "opinion",
        why: "<b>Meinung</b>: <i>meiner Meinung nach</i> is the formula for “in my opinion”."
      },
      {
        q: "Match each expression with its meaning.",
        pairs: [
          "I think that ...",
          "in my opinion ...",
          "I agree",
          "you're right"
        ]
      },
      {
        q: "Complete the sentence (use dass and the verb funktionieren).",
        tr: "I don't think it works.",
        why: "<i>Ich glaube nicht, dass das funktioniert</i>: <i>dass</i> sends <i>funktioniert</i> to the end. <i>Klappt</i> is fine too."
      },
      {
        q: "Put the words in order.",
        tr: "I think it's a good idea.",
        why: "<i>Ich finde, dass das eine gute Idee ist.</i> The comma comes after <i>finde</i>, and the verb <i>ist</i> closes the subordinate clause."
      },
      {
        q: "Translate: “In my opinion this is too expensive.” (use meiner Meinung nach)",
        why: "<i>Meiner Meinung nach ist das zu teuer</i>: the verb comes right after the expression. <i>Das ist meiner Meinung nach zu teuer</i> is fine too."
      },
      {
        tr: "I think it's a good idea. In my opinion we need more time, but I don't think it's possible.",
        why: "In <i>Meinung</i> the <b>ei</b> is [aɪ]; in <i>möglich</i> the final <b>ch</b> is [ç]; in <i>brauchen</i> the <b>au</b> is [aʊ] and the <b>ch</b> is [x]."
      },
      {
        tr: "I'm of the opinion that we need more time.",
        why: "In <i>Meinung</i> the <b>ei</b> is [aɪ]; in <i>dass</i> the <b>ss</b> is a voiceless <b>s</b>, as in “pass”; in <i>mehr</i> the <b>h</b> is silent and only lengthens the vowel."
      }
    ]
  },
  "lesson:b1-u01-l4": {
    theme: "Contrasts",
    title: "Even though ..., still",
    objectives: [
      "express a concession with obwohl and the verb at the end",
      "use trotzdem with the verb right after it",
      "tell obwohl from weil",
      "say that someone keeps going despite difficulties"
    ],
    theory: [
      {
        h: "obwohl: the subordinate clause",
        p: "<strong>Obwohl</strong> (although, even though) introduces a circumstance that should prevent something, and does not: <em>Obwohl es regnet, gehen wir spazieren.</em> It works like <em>weil</em> and <em>dass</em>: the conjugated verb goes <strong>to the end</strong>, and a comma separates the two clauses. If the <em>obwohl</em> clause comes first, the main clause starts with the verb: <em>Obwohl er müde war, hat er noch gearbeitet.</em> If it comes second: <em>Wir gehen spazieren, obwohl es regnet.</em>"
      },
      {
        h: "trotzdem: the main clause",
        p: "<strong>Trotzdem</strong> (still, anyway, nevertheless) says the same thing with two separate sentences. It does not change the word order: it can take the <strong>first position</strong>, and then the verb comes right after: <em>Es regnet. Trotzdem gehen wir spazieren.</em> Or it sits inside the sentence: <em>Wir gehen trotzdem spazieren.</em> With <em>aber</em> you can also say <em>Sie ist krank, aber sie geht trotzdem zur Arbeit.</em>"
      },
      {
        contrast: "English <em>although</em> and <em>even though</em> keep the normal word order (<em>although it's raining, we're going for a walk</em>), while German <em>obwohl</em> sends the verb to the end of its clause, just like <em>weil</em>: <em>weil es regnet</em> says why, <em>obwohl es regnet</em> says “despite that”. English <em>still</em> or <em>anyway</em> sits in the middle of the sentence (<em>we still go for a walk</em>), and German <em>trotzdem</em> can too (<em>Wir gehen trotzdem spazieren</em>). But when <em>trotzdem</em> opens the sentence, German inverts the order: <em>Trotzdem gehen wir</em>, where English would keep <em>Still, we go</em>. When <em>obwohl</em> introduces a real fact, as in these examples, the verb is normally in the indicative."
      },
      {
        trap: "After a sentence with <em>obwohl</em> the main clause starts with the verb: <em>Obwohl es regnet, gehen wir spazieren</em>, not “..., wir gehen”. And after <em>trotzdem</em> in first position the verb comes right away: <em>trotzdem gehen wir</em>, not “trotzdem wir gehen”. <em>Obwohl</em> and <em>trotzdem</em> can also appear together, which strengthens the concession: <em>Obwohl es regnet, gehen wir trotzdem spazieren</em>, with <em>trotzdem</em> after the verb. Do not mix up <em>obwohl</em> with <em>weil</em>: <em>weil</em> introduces a cause, <em>obwohl</em> a fact despite which the main clause still happens."
      },
      {
        tip: "Check the syntax. <em>Obwohl</em> opens a subordinate clause, so its verb goes to the end. <em>Trotzdem</em> is an adverb inside a main clause, so the conjugated verb stays in second position (<em>Es regnet, trotzdem gehen wir spazieren</em>)."
      }
    ],
    grammar: {
      title: "obwohl and trotzdem",
      note: "<b>obwohl</b> = although, verb at the end. <b>trotzdem</b> = still, anyway; in first position the verb follows right away. Two ways to say the same thing.",
      table: {
        head: ["word", "example", "note"],
        rows: [
          ["obwohl", "Obwohl es regnet, gehen wir spazieren.", "verb at the end, then the main clause starts with the verb"],
          ["obwohl second", "Wir gehen spazieren, obwohl es regnet.", "the main clause order does not change"],
          ["trotzdem", "Es regnet. Trotzdem gehen wir spazieren.", "verb right after trotzdem"],
          ["aber ... trotzdem", "Sie ist krank, aber sie geht trotzdem zur Arbeit.", "trotzdem after the verb"]
        ]
      },
      examples: [
        { tr: "Even though it's raining, we're going for a walk.", note: "obwohl: verb at the end, then gehen in first position" },
        { tr: "We're going for a walk, even though it's raining.", note: "obwohl after the main clause" },
        { tr: "It's raining. We're going for a walk anyway.", note: "trotzdem: the verb right after" },
        { tr: "Even though he was tired, he kept working.", note: "obwohl: war at the end" },
        { tr: "He was tired, but he kept working anyway.", note: "trotzdem in first position" },
        { tr: "She's sick, but she goes to work anyway.", note: "aber + trotzdem inside the sentence" }
      ]
    },
    vocab: [
      "although, even though",
      "still, anyway",
      "the rain",
      "the walk",
      "the weather",
      "tiring, exhausting",
      "difficult",
      "the difficulty",
      "the mistake",
      "to give up",
      "to keep going, to carry on",
      "the success"
    ],
    exercises: [
      {
        q: "Which sentence is correct?",
        opts: [
          "Obwohl es regnet, gehen wir spazieren.",
          "Obwohl es regnet, wir gehen spazieren.",
          "Obwohl es regnet, trotzdem wir gehen spazieren."
        ],
        why: "After the sentence with <b>obwohl</b> the main clause starts with the verb: <i>gehen wir</i>. The third has the verb in the wrong place: after <i>trotzdem</i> in first position the verb must come right away."
      },
      {
        q: "Which sentence is correct?",
        opts: [
          "Es regnet, trotzdem wir gehen spazieren.",
          "Es regnet, trotzdem gehen wir spazieren.",
          "Es regnet, trotzdem wir spazieren gehen."
        ],
        why: "<b>Trotzdem</b> in first position takes the verb right after it: <i>trotzdem gehen wir</i>. It does not send the verb to the end, unlike <i>obwohl</i>."
      },
      {
        q: "Complete with trotzdem: “Sie ist krank, ___ geht sie zur Arbeit.”",
        hint: "anyway",
        why: "<b>Trotzdem</b> in first position, and the verb <i>geht</i> right after it."
      },
      {
        q: "Complete the sentence (use obwohl).",
        tr: "Even though he was tired, he kept working.",
        why: "<i>Obwohl er müde war, hat er noch gearbeitet</i>: <i>war</i> at the end of the subordinate clause, then <i>hat</i> in first position in the main clause."
      },
      {
        q: "Match each word with its meaning.",
        pairs: [
          "although (verb at the end)",
          "still, anyway (verb right after)",
          "because (verb at the end)",
          "but (word order unchanged)"
        ]
      },
      {
        q: "Put the words in order.",
        tr: "Even though he was tired, he kept working.",
        why: "<i>Obwohl er müde war, hat er noch gearbeitet.</i> The comma comes after <i>war</i>, then the main clause starts with <i>hat</i>."
      },
      {
        q: "Translate: “Even though it's raining, we're going for a walk.” (use obwohl)",
        why: "<i>Obwohl es regnet, gehen wir spazieren</i>. The reverse order is fine too (<i>Wir gehen spazieren, obwohl es regnet</i>), and so is <i>einen Spaziergang machen</i>."
      },
      {
        q: "A friend sees you going out in bad weather.",
        setting: "The weather is bad and you are sick, but you go out anyway.",
        lines: [
          { tr: "Are you staying home tomorrow? The weather is bad." },
          { tr: "Answer: no, you're going for a walk even though the weather is bad.", answerTr: "No, even though the weather is bad, I'm going for a walk." },
          { tr: "But you're sick!" },
          { tr: "Answer: yes, you're going anyway.", answerTr: "Yes, I'm going anyway." },
          { tr: "You're tired too. Do you really want to go out?" },
          { tr: "Answer that you're going out anyway, but only for a little while.", answerTr: "Yes, I'm going out anyway, but only for a little while." }
        ]
      },
      {
        tr: "Even though the weather is bad, we're going for a walk. It's exhausting, but we keep going anyway.",
        why: "In <i>Wetter</i> the <b>w</b> is [v]; in <i>anstrengend</i> the <b>ng</b> is a nasal [ŋ], as in “sing”, with no extra “g”; in <i>weiter</i> the <b>ei</b> is [aɪ]."
      },
      {
        tr: "Even though I'm tired, I'm not giving up.",
        why: "In <i>müde</i> the <b>ü</b> is rounded; in <i>Obwohl</i> the <b>w</b> is [v]; in <i>nicht</i> the <b>ch</b> after <b>i</b> is [ç]."
      }
    ]
  },
  "lesson:b1-u01-test": {
    theme: "Review",
    title: "Test: If I were you",
    objectives: [
      "check the Konjunktiv II, conditions, dass and opinions, obwohl and trotzdem"
    ],
    theory: [
      {
        p: "Ten questions on the whole unit. You pass with 70%. Do not look back at the lessons while you answer: if you can't remember something, it is better to go back and review."
      }
    ],
    exercises: [
      {
        tr: "The Konjunktiv II of können, all persons.",
        why: "<i>Könnte, könntest, könnte, könnten, könntet, könnten</i>: from the Präteritum <i>konnte</i> with an Umlaut."
      },
      {
        tr: "The Konjunktiv II of müssen, all persons.",
        why: "<i>Müsste, müsstest, müsste, müssten, müsstet, müssten</i>: from the Präteritum <i>musste</i> with an Umlaut."
      },
      {
        q: "Complete with the appropriate Konjunktiv II form of werden: “An deiner Stelle ___ ich umziehen.”",
        hint: "conditional, ich",
        why: "<b>Würde</b>: <i>An deiner Stelle würde ich umziehen</i>. The infinitive <i>umziehen</i> goes to the end."
      },
      {
        q: "Complete with the Konjunktiv II of sein: “Wenn ich du ___, würde ich ihn anrufen.”",
        hint: "Konjunktiv II of sein, ich",
        why: "<b>Wäre</b> at the end of the clause with <i>wenn</i>, and the main clause starts with <i>würde</i>."
      },
      {
        q: "Complete: “Ich glaube nicht, ___ er recht hat.”",
        hint: "conjunction",
        why: "<b>dass</b> sends the verb <i>hat</i> to the end."
      },
      {
        q: "Complete with the right conjunction: “___ es regnet, gehen wir spazieren.” (although)",
        hint: "verb at the end",
        why: "<b>Obwohl</b> is the conjunction that sends the verb to the end and introduces a concession."
      },
      {
        q: "Which sentence is correct?",
        opts: [
          "Es ist spät, trotzdem arbeite ich noch.",
          "Es ist spät, trotzdem ich arbeite noch.",
          "Es ist spät, obwohl arbeite ich noch."
        ],
        why: "<b>Trotzdem</b> in first position takes the verb right after it: <i>trotzdem arbeite ich</i>. The third uses <i>obwohl</i> with the verb in the wrong place."
      },
      {
        q: "Which sentences are correct?",
        opts: [
          "Wenn ich mehr Zeit hätte, würde ich Sport machen.",
          "Ich finde, dass das zu teuer ist.",
          "Obwohl ich müde bin, gehe ich zur Arbeit.",
          "Wenn ich hätte mehr Zeit, würde ich Sport machen.",
          "Ich finde, dass das ist zu teuer."
        ],
        why: "The first three are right: the conjugated verb goes to the end after <i>wenn</i>, <i>dass</i> and <i>obwohl</i>, and the main clause that follows starts with the verb. Sentences 4 and 5 put the verb too early."
      },
      {
        tr: "If I were you, I wouldn't quit. I think the job is good, even though it's exhausting.",
        why: "In <i>kündigen</i> the <b>ü</b> is rounded; in <i>Stelle</i> the initial <b>st</b> is [ʃt]; in <i>anstrengend</i> the <b>ng</b> is a nasal [ŋ]."
      },
      {
        tr: "If I had more money, I would buy a house, even though it's expensive.",
        why: "In <i>würde</i> the <b>ü</b> is rounded; in <i>teuer</i> the <b>eu</b> is [ɔʏ], like “oy” in “boy”; in <i>kaufen</i> the <b>au</b> is [aʊ]."
      }
    ]
  },
  "unit:b1-u02": {
    title: "What are you thinking about?",
    grammarNote: "verbs with a fixed preposition · darauf, worauf · relative clauses (nominative, accusative, dative, with a preposition) · jemand, niemand, jeder"
  },
  "lesson:b1-u02-l1": {
    theme: "Interests and worries",
    title: "I'm waiting for you",
    objectives: [
      "use the most common verbs with a fixed preposition (warten auf, denken an, sich interessieren für)",
      "choose the right case after the preposition",
      "talk about fears, dreams and interests",
      "not translate the preposition word for word from English"
    ],
    theory: [
      {
        h: "Learn the verb together with its preposition",
        p: "Many German verbs take a <strong>fixed preposition</strong> and a <strong>fixed case</strong> after it: <em>warten auf + Akk</em>, <em>denken an + Akk</em>, <em>sich interessieren für + Akk</em>, <em>sich kümmern um + Akk</em>. Others take the dative: <em>Angst haben vor + Dat</em>, <em>träumen von + Dat</em>, <em>teilnehmen an + Dat</em>. The article or pronoun after the preposition takes that case: <em>Ich warte auf den Bus</em> (accusative), <em>Sie hat Angst vor dem Test</em> (dative), <em>Ich warte auf dich</em> (pronoun in the accusative)."
      },
      {
        h: "The same <em>an</em>, two cases",
        p: "The preposition <em>an</em> takes the accusative with <em>denken</em> (<em>Ich denke an meine Familie</em>) and the dative with <em>teilnehmen</em> (<em>Ich nehme an dem Kurs teil</em>). The case cannot be worked out from the meaning: learn it together with the verb."
      },
      {
        contrast: "English has verb + preposition pairs too, but the German preposition is often not the one you would expect. <em>Wait for</em> is <em>warten auf</em>: do not translate the preposition, learn the pair as it is. Likewise <em>think about</em> or <em>think of</em> is <em>denken an</em>, <em>be afraid of</em> is <em>Angst haben vor</em> (literally “in front of”), <em>be interested in</em> is <em>sich interessieren für</em> (“for”), <em>dream of</em> is <em>träumen von</em>, <em>take care of</em> is <em>sich kümmern um</em>, and <em>take part in</em> is <em>teilnehmen an</em>. There is a second difference: in English the pronoun after the preposition barely changes (<em>for him</em>, <em>for them</em>), while in German the preposition decides the case, so you see it in <em>auf dich</em> (accusative) or <em>vor ihm</em> (dative)."
      },
      {
        trap: "Do not pick the preposition by translating word for word: <em>Ich denke von dir</em> or <em>Ich warte für dich</em> do not mean “I think of you” and “I wait for you”. <em>Ich warte für dich</em> can mean “I wait in your place”, and <em>denken von</em> exists for opinions (<em>Was denkst du von ihm?</em>), but they do not express the meanings needed here. After the verb comes the preposition that the verb wants, and then the case that preposition takes here: <em>Ich warte auf dich</em>, <em>Ich denke an dich</em>. With a reflexive verb the reflexive pronoun stays: <em>Sie interessiert sich für Musik</em>."
      },
      {
        tip: "When you learn a new verb of this kind, write it down with its preposition and case: <em>warten auf + Akk</em>, <em>Angst haben vor + Dat</em>. It is like learning the article together with the noun."
      }
    ],
    grammar: {
      title: "Verbs with a fixed preposition",
      note: "The verb wants a specific <b>preposition</b> and a specific <b>case</b>: <b>warten auf + Akk</b>, <b>Angst haben vor + Dat</b>. Learn them together.",
      table: {
        head: ["verb + preposition", "case", "example"],
        rows: [
          ["warten auf", "accusative", "Ich warte auf dich."],
          ["denken an", "accusative", "Er denkt oft an seine Familie."],
          ["sich interessieren für", "accusative", "Sie interessiert sich für Musik."],
          ["sich kümmern um", "accusative", "Wir kümmern uns um die Kinder."],
          ["Angst haben vor", "dative", "Sie hat Angst vor dem Test."],
          ["träumen von", "dative", "Er träumt von einem Haus am Meer."],
          ["teilnehmen an", "dative", "Ich nehme an dem Kurs teil."]
        ]
      },
      examples: [
        { tr: "I'm waiting for you.", note: "warten auf + accusative: auf dich" },
        { tr: "He often thinks about his family.", note: "denken an + accusative" },
        { tr: "She is interested in music.", note: "sich interessieren für + accusative, with the reflexive pronoun" },
        { tr: "We take care of the children.", note: "sich kümmern um + accusative" },
        { tr: "She is afraid of the test.", note: "Angst haben vor + dative: dem Test" },
        { tr: "He dreams of a house by the sea.", note: "träumen von + dative: von einem Haus" }
      ]
    },
    vocab: [
      "to wait for (warten auf + acc.)",
      "to think about (denken an + acc.)",
      "to be interested in (sich interessieren für + acc.)",
      "to take care of (sich kümmern um + acc.)",
      "to take part in (teilnehmen an + dat.)",
      "to dream of (träumen von + dat.)",
      "fear",
      "course",
      "exam",
      "worry",
      "interest",
      "dream"
    ],
    exercises: [
      {
        q: "Which sentence means “I'm waiting for the bus”?",
        opts: ["Ich warte auf den Bus.", "Ich warte den Bus.", "Ich warte für den Bus."],
        why: "<b>Warten auf + accusative</b>: <i>auf den Bus</i>. The other two use no preposition or the wrong one."
      },
      {
        q: "Which sentence is correct?",
        opts: [
          "Sie hat Angst vor dem Test.",
          "Sie hat Angst von dem Test.",
          "Sie hat Angst auf den Test."
        ],
        why: "<b>Angst haben vor + dative</b>: <i>vor dem Test</i>. The other two use a preposition this verb does not take."
      },
      {
        q: "Complete: “Ich warte ___ dich.”",
        hint: "to wait for",
        why: "<b>Auf</b>: <i>warten auf</i>, and the pronoun <i>dich</i> is in the accusative."
      },
      {
        q: "Complete: “Er denkt oft ___ seine Familie.”",
        hint: "to think about",
        why: "<b>An</b>: <i>denken an + accusative</i>."
      },
      {
        q: "Complete: “Wir kümmern uns ___ die Kinder.”",
        hint: "to take care of",
        why: "<b>Um</b>: <i>sich kümmern um + accusative</i>."
      },
      {
        q: "Complete the sentence.",
        tr: "She is interested in music.",
        why: "<i>Sie interessiert sich für Musik</i>: <i>sich interessieren für + accusative</i>, with the reflexive pronoun <i>sich</i>."
      },
      {
        q: "Put the words in order.",
        tr: "I often think about you.",
        why: "<i>Ich denke oft an dich.</i> <i>Oft denke ich an dich</i> is fine too, with the verb in second position."
      },
      {
        q: "Translate: “I'm waiting for Anna.” (use warten)",
        why: "<i>Ich warte auf Anna</i>: the preposition <i>auf</i> is needed before a person's name too."
      },
      {
        tr: "I'm waiting for you. I often think about our vacation. She is interested in music and takes care of the children.",
        why: "In <i>warte</i> the <b>w</b> is [v]; in <i>interessiert</i> the <b>ie</b> is long [iː]; <i>für</i> has [yː] and <i>kümmert</i> has [ʏ]; in <i>dich</i> the <b>ch</b> is [ç]."
      },
      {
        tr: "I'm waiting for you and thinking about the exam.",
        why: "In <i>Prüfung</i> the <b>ü</b> is [yː] and the <b>ng</b> is the nasal [ŋ]; in <i>auf</i> the <b>au</b> is [aʊ]; in <i>dich</i> the <b>ch</b> is [ç]."
      }
    ]
  },
  "lesson:b1-u02-l2": {
    theme: "Looking forward and being annoyed",
    title: "I'm looking forward to it. To what?",
    objectives: [
      "replace verb + preposition + thing with darauf, daran, davon",
      "ask with worauf, woran, worüber",
      "ask about a person with the preposition + wen",
      "tell sich freuen auf and sich freuen über apart"
    ],
    theory: [
      {
        h: "darauf, daran, darüber: the preposition without the noun",
        p: "When the verb with a preposition refers to a <strong>thing</strong> or a situation that is already known, the preposition joins <strong>da-</strong>: <em>Ich warte auf den Bus. Ich warte darauf.</em> <em>Ich denke an die Prüfung. Ich denke daran.</em> Before a vowel an <strong>r</strong> is inserted: <em>darauf, daran, darüber</em>. Before a consonant: <em>davon, dafür, davor</em>."
      },
      {
        h: "worauf, woran, worüber: the question",
        p: "To ask about a thing you use <strong>wo-</strong> (<strong>wor-</strong> before a vowel): <em>Worauf wartest du? Woran denkst du? Worüber ärgerst du dich? Wovor hast du Angst?</em> For a <strong>person</strong> you use the preposition with <em>wen</em> (accusative) or <em>wem</em> (dative): <em>Auf wen wartest du? An wen denkst du? Mit wem sprichst du?</em> And the answer has the preposition with the pronoun: <em>Ich warte auf ihn.</em>"
      },
      {
        h: "sich freuen auf or über",
        p: "<em>Sich freuen</em> takes the accusative with two prepositions. <strong>Auf</strong> looks ahead, to something that has yet to come: <em>Ich freue mich auf das Wochenende.</em> <strong>Über</strong> presents a fact or news as the reason for the joy, even if it is still in the future: <em>Ich freue mich über das Geschenk.</em> With <em>sich ärgern</em> you use <em>über</em>: <em>Er ärgert sich über den Lärm.</em>"
      },
      {
        contrast: "In English you can say <em>I'm waiting for it</em> and <em>I'm thinking about it</em>, with the preposition and <em>it</em>. For things German normally uses a <em>da-</em> compound instead: <em>Ich warte darauf</em>, <em>Ich denke daran</em>, <em>Ich spreche davon</em>, not <em>Ich warte auf es</em>. Questions differ too. English can leave the preposition at the end (<em>What are you waiting for?</em>), while German builds one word from <em>wo-</em> and the preposition: <em>Worauf wartest du?</em> For a person the preposition comes first, as in the formal English <em>For whom?</em>: <em>Auf wen wartest du?</em>"
      },
      {
        trap: "The <em>da-</em> and <em>wo-</em> forms are for <strong>things</strong>. For a person you use the preposition with the pronoun: <em>Ich warte auf ihn</em>, <em>Ich denke an sie</em>, and in the question <em>Auf wen wartest du?</em>. Remember the <strong>r</strong> before a vowel as well: <em>darauf</em> and <em>worauf</em>, not “daauf” or “woauf”. And do not treat <em>sich freuen auf</em> and <em>sich freuen über</em> as the same: English <em>I'm happy about the gift</em> is <em>über</em>, <em>I'm looking forward to the weekend</em> is <em>auf</em>."
      },
      {
        tip: "The <em>da-</em> form can also announce a clause that follows: <em>Ich freue mich darauf, dass du kommst.</em> Here <em>darauf</em> points ahead to the <em>dass</em> clause."
      }
    ],
    grammar: {
      title: "darauf, daran, worauf, woran",
      note: "For a <b>thing</b>: <b>da-</b> (<b>dar-</b> before a vowel) to answer, <b>wo-</b> (<b>wor-</b>) to ask. For a <b>person</b>: preposition + pronoun or <b>wen/wem</b>.",
      table: {
        head: ["verb + preposition", "answer (thing)", "question (thing)", "question (person)"],
        rows: [
          ["warten auf", "darauf", "worauf", "auf wen"],
          ["denken an", "daran", "woran", "an wen"],
          ["sich ärgern über", "darüber", "worüber", "über wen"],
          ["sich freuen auf", "darauf", "worauf", "auf wen"],
          ["Angst haben vor", "davor", "wovor", "vor wem"]
        ]
      },
      examples: [
        { tr: "I'm looking forward to the weekend.", note: "sich freuen auf + accusative: something still to come" },
        { tr: "I'm looking forward to it.", note: "darauf instead of auf das Wochenende" },
        { tr: "What are you looking forward to?", note: "worauf: wo + r + auf" },
        { tr: "He gets annoyed about the noise.", note: "sich ärgern über + accusative" },
        { tr: "What are you annoyed about?", note: "worüber: wo + r + über" },
        { tr: "I'm looking forward to seeing him. Who are you waiting for?", note: "for a person: auf ihn, auf wen" }
      ]
    },
    vocab: [
      "to look forward to (sich freuen auf + acc.: something that is coming)",
      "to be glad about (sich freuen über + acc.: a fact or news that causes joy)",
      "to get annoyed about (sich ärgern über + acc.)",
      "to remember (sich erinnern an + acc.)",
      "to talk about (sprechen über + acc.)",
      "weekend",
      "gift",
      "noise",
      "news",
      "meeting",
      "party",
      "surprise"
    ],
    exercises: [
      {
        q: "How do you ask “What are you thinking about?”",
        opts: ["Woran denkst du?", "Wonach denkst du?", "Wohin denkst du?"],
        why: "<i>Denken an</i> becomes <b>woran</b> (wo + r + an). <i>Wonach</i> and <i>wohin</i> are real words, but they do not go with <i>denken</i>: the first points to <i>nach</i>, the second to a direction."
      },
      {
        q: "Replace with a da- form: “Ich warte auf den Bus. Ich warte ___.”",
        opts: ["darauf", "daran", "davon"],
        why: "<b>Darauf</b>: <i>warten auf</i> + <i>da-</i> + <i>r</i> before the vowel of <i>auf</i>."
      },
      {
        q: "Ask: “Who are you waiting for?”",
        opts: ["Auf wen wartest du?", "Worauf wartest du?", "Wen wartest du?"],
        why: "For a <b>person</b> you use the preposition with <i>wen</i>: <i>Auf wen wartest du?</i> <i>Worauf</i> refers to a thing, and <i>Wen wartest du</i> has no preposition."
      },
      {
        q: "Complete the question: “___ freust du dich? - Auf das Wochenende.”",
        hint: "question with auf, about a thing",
        why: "<b>Worauf</b>: <i>wo</i> + <i>r</i> + <i>auf</i>. The answer repeats the same <i>auf</i>: <i>Auf das Wochenende</i>."
      },
      {
        q: "Complete: “Er denkt oft an den Urlaub. Er denkt oft ___.”",
        hint: "da- + an",
        why: "<b>Daran</b>: <i>da</i> + <i>r</i> + <i>an</i>. Before the vowel of <i>an</i> an <b>r</b> is inserted, as in <i>darauf</i>."
      },
      {
        q: "Complete the sentence.",
        tr: "What are you annoyed about? I'm annoyed about the noise.",
        why: "<i>Worüber ärgerst du dich? Ich ärgere mich über den Lärm.</i> <i>Sich ärgern über + accusative</i>, and in the question <i>wor-</i> before the vowel."
      },
      {
        q: "Match each sentence with its meaning.",
        pairs: ["What are you waiting for?", "I'm thinking about it.", "Who are you waiting for?", "I'm thinking about him."]
      },
      {
        q: "Translate: “I often think about it.” (use denken)",
        why: "<i>Ich denke oft daran</i>: the pronoun <i>it</i> after the preposition becomes <i>daran</i>. <i>Oft denke ich daran</i> is fine too."
      },
      {
        tr: "What are you looking forward to? I'm looking forward to the weekend. And what did you get annoyed about? The noise. I often get annoyed about it.",
        why: "In <i>freust</i> the <b>eu</b> is [ɔʏ]; in <i>Wochenende</i> the <b>w</b> is [v] and the <b>ch</b> is [x]; <i>über</i> and <i>darüber</i> have [yː]."
      },
      {
        tr: "I'm looking forward to the weekend and I'm already thinking about it.",
        why: "In <i>freue</i> the <b>eu</b> is [ɔʏ]; in <i>mich</i> the <b>ch</b> is [ç], in <i>Wochenende</i> it is [x]; in <i>schon</i> the <b>sch</b> is [ʃ]."
      }
    ]
  },
  "lesson:b1-u02-l3": {
    theme: "Describing people and things",
    title: "The book I read",
    objectives: [
      "form a relative clause with der, die, das",
      "choose gender and number from the noun and the case from its role in the relative clause",
      "use the relative pronouns in the nominative, accusative and dative",
      "build a relative clause with a preposition"
    ],
    theory: [
      {
        h: "The relative pronoun",
        p: "A <strong>relative clause</strong> gives information about a noun. It starts with a <strong>relative pronoun</strong>, has the conjugated verb <strong>at the end</strong> and is set off <strong>by commas</strong>: <em>Das Buch, das ich gelesen habe, ist spannend.</em> With the Perfekt, the participle and the auxiliary go at the end: <em>gelesen habe</em>."
      },
      {
        h: "Two questions to choose the form",
        p: "The <strong>gender and number</strong> come from the noun the pronoun refers to (<em>Buch</em> is neuter, so <em>das</em>). The <strong>case</strong> depends on the pronoun's role inside the relative clause: subject (nominative), direct object (accusative) or the complement of <em>helfen, geben</em> (dative). In the three cases covered here the forms are those of the definite article, except the dative plural, which is <strong>denen</strong> (the genitive, <em>dessen, deren</em>, comes later)."
      },
      {
        h: "With a preposition",
        p: "The preposition comes <strong>before</strong> the pronoun and decides its case: <em>Der Mann, mit dem ich spreche, ist mein Chef. Die Freundin, auf die ich warte, kommt aus Rom.</em> There are genitive forms too (<em>dessen, deren</em>), which are not needed for now."
      },
      {
        contrast: "English <em>which</em> and <em>that</em> do not change, and <em>who</em> only becomes <em>whom</em> in formal English or after a preposition (<em>the man whom I see</em>); none of them marks grammatical gender like German relatives (<em>the man who comes, the man that I see</em>), and in everyday English the pronoun is often left out (<em>the book I read</em>). German does not leave it out, and the pronoun changes with gender, number and case: <em>der Mann, der kommt</em> (subject), <em>der Mann, den ich sehe</em> (object), <em>der Mann, mit dem ich spreche</em> (after <em>mit</em>). In English the preposition can sit at the end of the clause (<em>the man I'm talking to</em>); in German it comes in front of the pronoun: <em>mit dem</em>. And the German relative clause is always closed off by commas."
      },
      {
        trap: "Do not confuse the pronoun <em>das</em> with the conjunction <em>dass</em>: <em>das Buch, das ich lese</em> (relative, refers to <em>Buch</em>) and <em>Ich glaube, dass du recht hast</em> (introduces a clause). Another pitfall is the case: <em>Die Frau, der ich geholfen habe</em> has <em>der</em> because <em>helfen</em> takes the dative, even though <em>Frau</em> is a noun in the nominative. English hides this, since <em>the woman I helped</em> looks the same whatever the case."
      },
      {
        tip: "Before you write the relative clause, ask yourself two things: which noun does the pronoun refer to (gender and number)? And what role does the pronoun play inside the clause (case)? The two answers give you the form."
      }
    ],
    grammar: {
      title: "The relative clause",
      note: "Relative pronoun = <b>gender and number</b> of the noun, <b>case</b> of its role in the clause. Verb <b>at the end</b>, clause between <b>commas</b>.",
      table: {
        head: ["case", "m.", "f.", "n.", "plural"],
        rows: [
          ["nominative", "der", "die", "das", "die"],
          ["accusative", "den", "die", "das", "die"],
          ["dative", "dem", "der", "dem", "denen"]
        ]
      },
      examples: [
        { tr: "The man who is standing over there is my teacher.", note: "der: masculine, subject of the relative clause" },
        { tr: "The book I read is exciting.", note: "das: neuter, direct object" },
        { tr: "The woman I helped is called Eva.", note: "der: feminine, dative with helfen" },
        { tr: "The children I give the book to are seven years old.", note: "denen: dative plural" },
        { tr: "The man I'm talking to is my boss.", note: "mit dem: the preposition comes before the pronoun" },
        { tr: "The friend I'm waiting for comes from Rome.", note: "auf die: warten auf + accusative" }
      ]
    },
    vocab: [
      "novel",
      "movie",
      "neighbor",
      "colleague",
      "key",
      "bag",
      "cell phone",
      "glasses",
      "store",
      "exciting, gripping",
      "to lose",
      "to recommend"
    ],
    exercises: [
      {
        q: "Choose the relative pronoun: “Der Film, ___ wir gestern gesehen haben, war lang.”",
        opts: ["der", "den", "dem"],
        why: "<i>Film</i> is masculine and in the relative clause it is the direct object (<i>wir haben den Film gesehen</i>): so <b>den</b>."
      },
      {
        q: "Choose the relative pronoun: “Das ist der Kollege, mit ___ ich arbeite.”",
        opts: ["dem", "den", "der"],
        why: "<i>Kollege</i> is masculine and <i>mit</i> takes the dative: <b>dem</b>. The preposition comes before the pronoun."
      },
      {
        q: "Complete: “Das ist das Buch, ___ ich gelesen habe.”",
        hint: "neuter, accusative",
        why: "<b>Das</b>: <i>Buch</i> is neuter and in the relative clause it is the direct object (<i>das</i> in the accusative is the same as in the nominative)."
      },
      {
        q: "Complete: “Die Frau, ___ ich gestern getroffen habe, heißt Eva.”",
        hint: "feminine, accusative",
        why: "<b>Die</b>: <i>Frau</i> is feminine and in the relative clause it is the direct object. The feminine has <i>die</i> in both the nominative and the accusative."
      },
      {
        q: "Complete: “Die Kinder, ___ ich das Buch gebe, sind sieben Jahre alt.”",
        hint: "plural, dative",
        why: "<b>Denen</b>: dative plural. In the three cases covered here the relative pronoun is the same as the definite article, except in the dative plural: <i>denen</i>."
      },
      {
        q: "Complete the sentence.",
        tr: "This is the key I lost.",
        why: "<i>Das ist der Schlüssel, den ich verloren habe</i>: <i>den</i> because <i>Schlüssel</i> is masculine and the direct object, and <i>verloren</i> with <i>habe</i> goes at the end."
      },
      {
        q: "Put the words in order.",
        tr: "This is the bag I bought yesterday.",
        why: "<i>Das ist die Tasche, die ich gestern gekauft habe.</i> After the comma the conjugated verb <i>habe</i> goes at the end, after <i>gekauft</i>."
      },
      {
        q: "Translate: “The movie we saw was long.”",
        why: "<i>Der Film, den wir gesehen haben, war lang</i>: <i>den</i> (masculine, object), <i>gesehen haben</i> at the end of the relative clause, and the main clause continues with <i>war</i>."
      },
      {
        tr: "This is the book I read. It is an exciting novel. The colleague I recommended the novel to finds it exciting too.",
        why: "In <i>spannend</i> the initial <b>sp</b> is [ʃp]; in <i>empfohlen</i> the <b>pf</b> is an affricate [pf]; in <i>ich</i> the <b>ch</b> is [ç]."
      },
      {
        tr: "The key I lost was in my bag.",
        why: "In <i>Schlüssel</i> the <b>sch</b> is [ʃ] and the <b>ü</b> is [ʏ]; in <i>verloren</i> the <b>v</b> is [f], while in <i>war</i> the <b>w</b> is [v]."
      }
    ]
  },
  "lesson:b1-u02-l4": {
    theme: "Speaking in general terms",
    title: "Someone, nobody, everyone",
    objectives: [
      "use jemand and niemand with the accusative and dative forms",
      "use jeder (singular) and alle (plural)",
      "use etwas and nichts",
      "build the negative without an added nicht"
    ],
    theory: [
      {
        h: "jemand and niemand",
        p: "<strong>Jemand</strong> (someone) and <strong>niemand</strong> (no one) talk about people in general. They can stay unchanged or take <em>-en</em> in the accusative and <em>-em</em> in the dative: <em>Ich habe niemanden gesehen</em> or <em>Ich habe niemand gesehen</em>. <em>Ich habe jemandem geholfen</em> or <em>Ich habe jemand geholfen</em>. Both forms are correct, in writing too; the forms with the ending make the case more visible."
      },
      {
        h: "jeder and alle",
        p: "<strong>Jeder</strong> (everyone, each) is <strong>singular</strong>: <em>Jeder weiß das.</em> It is declined like <em>dieser</em>: <em>jeder, jeden, jedem</em> (<em>Ich kenne jeden hier</em>). <strong>Alle</strong> (all, everyone) is <strong>plural</strong>: <em>Alle sind da. Alle wissen das.</em>"
      },
      {
        h: "etwas and nichts",
        p: "<strong>Etwas</strong> (something) and <strong>nichts</strong> (nothing) do not change: <em>Ich habe etwas gehört. Ich habe nichts gesehen.</em> An adjective that follows them is written with a capital letter and takes <em>-es</em> in the nominative and accusative (<em>etwas Neues, nichts Besonderes</em>), <em>-em</em> in the dative (<em>mit etwas Neuem, mit nichts Besonderem</em>)."
      },
      {
        contrast: "In standard English a negative verb goes with <em>any-</em> words: <em>I didn't see anyone, I didn't do anything</em>. In German the negation is already inside <em>niemand</em> and <em>nichts</em>, so there is no <em>nicht</em>: <em>Ich habe niemanden gesehen. Ich habe nichts gemacht.</em> It matches English <em>I saw no one, I did nothing</em>. Where English says <em>everyone knows</em> with a singular verb, German does the same with <em>jeder</em>: <em>Jeder weiß das</em>."
      },
      {
        trap: "<em>Jeder</em> is singular like <em>everyone</em> and <em>each</em>, not like <em>all</em>: <em>Jeder weiß das</em> (with <em>weiß</em>, 3rd person singular), while <em>alle</em> takes the plural: <em>Alle wissen das</em>. Adding <em>nicht</em> to <em>nichts</em> or <em>niemanden</em> also changes the meaning, because the two negations cancel out: <em>Ich habe nicht nichts gehört</em> means that something was heard."
      },
      {
        tip: "For “somebody else” say <em>jemand anders</em>. To ask a general question, <em>Hat jemand eine Frage?</em> is the most natural form."
      }
    ],
    grammar: {
      title: "jemand, niemand, jeder",
      note: "<b>jemand</b> and <b>niemand</b>: unchanged or with <b>-en</b> (acc.) and <b>-em</b> (dat.). <b>jeder</b> is singular, <b>alle</b> is plural. <b>nichts</b> and <b>niemand</b> negate by themselves: no extra <b>nicht</b>.",
      table: {
        head: ["", "nominative", "accusative", "dative"],
        rows: [
          ["jemand", "jemand", "jemanden, jemand", "jemandem, jemand"],
          ["niemand", "niemand", "niemanden, niemand", "niemandem, niemand"],
          ["jeder (m.)", "jeder", "jeden", "jedem"],
          ["alle (plural)", "alle", "alle", "allen"]
        ]
      },
      examples: [
        { tr: "Has anyone seen my key?", note: "jemand in the nominative" },
        { tr: "I didn't see anyone.", note: "niemanden: accusative, no nicht" },
        { tr: "I helped someone.", note: "jemandem: dative with helfen" },
        { tr: "Everyone knows that.", note: "jeder, singular: weiß" },
        { tr: "They are all here.", note: "alle, plural: sind" },
        { tr: "I didn't hear anything.", note: "nichts: no nicht" }
      ]
    },
    vocab: [
      "someone",
      "no one",
      "everyone, each (singular)",
      "all, everyone (plural)",
      "something",
      "nothing",
      "person",
      "human being, people",
      "problem",
      "question",
      "answer",
      "secret"
    ],
    exercises: [
      {
        q: "How do you say “I didn't do anything”?",
        opts: [
          "Ich habe nichts gemacht.",
          "Ich habe niemanden gemacht.",
          "Ich habe etwas nicht gemacht."
        ],
        why: "<b>Nichts</b> already contains the negation. <i>Niemanden</i> refers to people, and <i>etwas nicht</i> means “there is something I didn't do”."
      },
      {
        q: "Which sentence is correct?",
        opts: ["Jeder weiß das.", "Jeder wissen das.", "Jeder wisst das."],
        why: "<b>Jeder</b> is singular: the verb is in the 3rd person singular, <i>weiß</i>."
      },
      {
        q: "Which sentences are correct?",
        opts: [
          "Ich kenne niemanden hier.",
          "Hat jemand Fragen?",
          "Alle sind da.",
          "Jeder sind da.",
          "Alle ist da."
        ],
        why: "The first three are right. <i>Jeder</i> is singular, so number 4 has the wrong plural verb; <i>alle</i> is plural, so number 5 has the wrong singular verb."
      },
      {
        q: "Complete: “Ich habe ___ gesehen.” (I didn't see anyone)",
        hint: "no one, accusative",
        why: "<b>Niemanden</b>: accusative with the ending; <i>niemand</i> is also correct. No <i>nicht</i>."
      },
      {
        q: "Complete: “Ich habe ___ geholfen.” (someone)",
        hint: "someone, dative",
        why: "<b>Jemandem</b>: <i>helfen</i> takes the dative. <i>Jemand</i> without the ending is also correct."
      },
      {
        q: "Complete: “___ weiß das.” (everyone)",
        hint: "everyone, singular",
        why: "<b>Jeder</b>: singular, with <i>weiß</i>. If the sentence had a plural verb, you would need <i>alle</i>."
      },
      {
        q: "Complete: “Ich habe gestern ___ gegessen.” (nothing)",
        hint: "nothing",
        why: "<b>Nichts</b>: it does not change and does not take <i>nicht</i>."
      },
      {
        q: "Complete the sentence.",
        tr: "I didn't see anyone and I didn't hear anything.",
        why: "<i>Ich habe niemanden gesehen und nichts gehört</i>: each pronoun negates its own object, so English <i>any-</i> does not call for an extra <i>nicht</i>."
      },
      {
        tr: "Has anyone seen my glasses? No, no one has seen them. Everyone is looking for them, but we can't find anything.",
        why: "In <i>jemand</i> and <i>jeder</i> the <b>j</b> is [j]; in <i>niemand</i> the <b>ie</b> is long [iː]; in <i>sucht</i> the <b>ch</b> is [x] and in <i>nichts</i> it is [ç]; in <i>meine</i> the <b>ei</b> is [aɪ]."
      },
      {
        tr: "I didn't see anyone and I didn't hear anything.",
        why: "In <i>niemanden</i> the <b>ie</b> is long [iː]; in <i>ich</i> and <i>nichts</i> the <b>ch</b> is [ç]; in <i>gehört</i> the <b>ö</b> is long [øː]."
      }
    ]
  },
  "lesson:b1-u02-test": {
    theme: "Review",
    title: "Test: What are you thinking about?",
    objectives: [
      "review verbs with a preposition, darauf and worauf, relative clauses, jemand, niemand and jeder"
    ],
    theory: [
      {
        p: "Ten questions on the whole unit. You pass with 70%. Do not look back at the lessons while you answer: if you cannot remember something, it is better to go back and review."
      }
    ],
    exercises: [
      {
        q: "Complete: “Ich warte ___ dich.”",
        hint: "to wait for",
        why: "<b>Auf</b>: <i>warten auf + accusative</i>."
      },
      {
        q: "Complete: “Sie hat Angst ___ dem Test.”",
        hint: "to be afraid of",
        why: "<b>Vor</b>: <i>Angst haben vor + dative</i>."
      },
      {
        q: "Complete the question: “___ denkst du? - An den Urlaub.”",
        hint: "question with an, about a thing",
        why: "<b>Woran</b>: <i>denken an</i> + <i>wo</i> + <i>r</i> before the vowel."
      },
      {
        q: "Complete: “Das ist der Mann, ___ ich gestern gesehen habe.”",
        hint: "masculine, accusative",
        why: "<b>Den</b>: <i>Mann</i> is masculine and in the relative clause it is the direct object."
      },
      {
        q: "Complete: “Das Buch, ___ ich gelesen habe, ist spannend.”",
        hint: "neuter, accusative",
        why: "<b>Das</b>: neuter, direct object of the relative clause."
      },
      {
        q: "Complete: “Ich habe ___ gesehen.” (I didn't see anyone)",
        hint: "no one, accusative",
        why: "<b>Niemanden</b> (or <i>niemand</i>, also correct), without <i>nicht</i>."
      },
      {
        q: "You have already received the gift and you are glad about it. Which sentence is correct?",
        opts: [
          "Ich freue mich über das Geschenk.",
          "Ich freue mich für das Geschenk.",
          "Ich freue mich mit das Geschenk."
        ],
        why: "<b>Sich freuen über + accusative</b> for a fact or news that causes joy. With <i>auf</i> you look ahead (<i>Ich freue mich auf das Geschenk</i> means you are still waiting for it)."
      },
      {
        q: "Choose the relative pronoun: “Die Frau, mit ___ ich spreche, ist meine Chefin.”",
        opts: ["der", "die", "dem"],
        why: "<i>Frau</i> is feminine and <i>mit</i> takes the dative: <b>der</b>."
      },
      {
        tr: "I'm waiting for you. The woman standing over there is afraid of the test. No one is helping her.",
        why: "In <i>warte</i> the <b>w</b> is [v]; in <i>steht</i> the initial <b>st</b> is [ʃt]; in <i>niemand</i> the <b>ie</b> is long [iː]; in <i>dich</i> the <b>ch</b> is [ç]."
      },
      {
        tr: "I often think about the book I read.",
        why: "In <i>ich</i> the <b>ch</b> is [ç], in <i>Buch</i> it is [x]; the <b>u</b> of <i>Buch</i> is long [uː]; in <i>gelesen</i> the <b>s</b> is voiced [z]."
      }
    ]
  }
});
