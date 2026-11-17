/* ============================================================
   Learner-language text (en) for data/core/b2-01.js, unit b2-u01.
   Keys point at ids in the neutral layer; arrays merge by index,
   so their length has to match core.
   Checked by scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("en", {
  "unit:b2-u01": {
    title: "If I had known",
    grammarNote: "past Konjunktiv II (hätte gemacht, wäre gegangen) · double infinitive with modals (hätte anrufen sollen) · als ob, als wenn, als + verb"
  },
  "lesson:b2-u01-l1": {
    theme: "Choices and regrets",
    title: "I would have done, I would have been",
    objectives: [
      "form the past Konjunktiv II with hätte or wäre + past participle",
      "choose between hätte and wäre the same way as in the Perfekt",
      "express a regret (Hätte ich bloß ...!)",
      "build an unreal condition about the past"
    ],
    theory: [
      {
        h: "hätte or wäre + past participle",
        p: "To talk about what <strong>could have happened but did not</strong>, German uses the past Konjunktiv II: a conjugated <strong>hätte</strong> or <strong>wäre</strong> + the <strong>past participle</strong> at the end. <em>Ich hätte das nicht gemacht</em> (I wouldn't have done that), <em>Wir wären gern länger geblieben</em> (we would have liked to stay longer). The choice between <em>hätte</em> and <em>wäre</em> is the same as in the Perfekt: verbs that take <em>sein</em> there (<em>ich bin gegangen, ich bin gewesen</em>) take <em>wäre</em> here (<em>ich wäre gegangen, ich wäre gewesen</em>); all the others take <em>hätte</em>."
      },
      {
        h: "Unreal conditions about the past",
        p: "When both the condition and the result lie in the past, both halves take the past Konjunktiv II: <em>Wenn ich das gewusst hätte, wäre ich früher gekommen</em>. After <em>wenn</em> the auxiliary goes to the end, after the participle; the main clause that follows starts with the auxiliary. If the result concerns the present, that half takes the present Konjunktiv II: <em>Hätte ich die Gelegenheit genutzt, wäre ich jetzt in Berlin.</em> You can also drop <em>wenn</em> and start with the verb: <em>Hätte ich das gewusst, wäre ich früher gekommen.</em> With <strong>bloß</strong>, <strong>nur</strong> or <strong>doch</strong> the same form becomes a regret: <em>Hätte ich bloß mehr gelernt!</em>"
      },
      {
        contrast: "English uses two different forms: <em>if I had known</em> (past perfect) and <em>I would have come</em> (would have + participle). German, when both halves are in the past, uses the past Konjunktiv II in both: <em>Wenn ich das gewusst hätte, wäre ich gekommen</em>. There is no separate form for the if-clause, and no <em>would</em> after <em>wenn</em>: it is the same mood twice."
      },
      {
        trap: "English builds every case with <em>have</em>: <em>I would have done</em>, <em>I would have come</em>. German copies the Perfekt, so verbs of motion and change of state take <em>wäre</em>: <em>Ich wäre gekommen</em>, not <em>Ich hätte gekommen</em>. And <em>Wenn ich das gewusst habe</em> is an indicative Perfekt: it can mean a time or an open condition, but it does not say that you did not know. The counterfactual needs <em>gewusst hätte</em>."
      },
      {
        tip: "To get the auxiliary right, think of the Perfekt first: <em>ich habe gemacht</em> becomes <em>ich hätte gemacht</em>, <em>ich bin geblieben</em> becomes <em>ich wäre geblieben</em>. You replace the auxiliary with its Konjunktiv II form and keep the participle."
      }
    ],
    grammar: {
      title: "Past Konjunktiv II: hätte / wäre + past participle",
      note: "<b>hätte</b> + participle with verbs that take <i>haben</i> in the Perfekt, <b>wäre</b> + participle with those that take <i>sein</i>. If condition and result both lie in the past, both take the past Konjunktiv II; a present result takes the present Konjunktiv II.",
      table: {
        head: ["Perfekt", "past Konjunktiv II", "English"],
        rows: [
          ["ich habe gemacht", "ich hätte gemacht", "I would have done"],
          ["ich bin gegangen", "ich wäre gegangen", "I would have gone"],
          ["ich bin gewesen", "ich wäre gewesen", "I would have been"],
          ["ich habe gewusst", "ich hätte gewusst", "I would have known"]
        ]
      },
      examples: [
        { tr: "I wouldn't have done that.", note: "hätte + participle at the end" },
        { tr: "We would have liked to stay longer.", note: "bleiben takes sein: wäre" },
        { tr: "If I had known that, I would have come earlier.", note: "condition and result in the past: past Konjunktiv II in both" },
        { tr: "If only I had studied more!", note: "regret: verb first + bloß" },
        { tr: "She was almost late.", note: "fast + Konjunktiv II: something that nearly happened and did not" },
        { tr: "Without your help I wouldn't have made it.", note: "ohne + noun instead of a wenn clause" }
      ]
    },
    vocab: [
      "the opportunity, the occasion",
      "the decision",
      "the mistake",
      "the chance",
      "the choice (also: elections, in the plural)",
      "luck (Glück haben: to be lucky)",
      "to miss (a train, a chance)",
      "to regret",
      "to use, to make the most of",
      "to decide (für + accusative: on, in favor of)",
      "to manage, to make it",
      "in time"
    ],
    exercises: [
      {
        tr: "The past Konjunktiv II of machen, all persons.",
        why: "<i>hätte, hättest, hätte, hätten, hättet, hätten</i> + <i>gemacht</i>: <i>machen</i> takes <i>haben</i> in the Perfekt, so here <i>hätte</i>."
      },
      {
        tr: "The past Konjunktiv II of gehen, all persons.",
        why: "<i>gehen</i> takes <i>sein</i> in the Perfekt (<i>ich bin gegangen</i>), so <i>wäre gegangen</i>. For <i>du</i> and <i>ihr</i> both <i>wärst, wärt</i> and <i>wärest, wäret</i> are correct."
      },
      {
        tr: "The past Konjunktiv II of sein, all persons.",
        why: "<i>wäre gewesen</i>: <i>sein</i> forms its Perfekt with itself (<i>ich bin gewesen</i>), so <i>wäre</i> + <i>gewesen</i>."
      },
      {
        q: "How do you say “If I had known, I would have come”?",
        opts: [
          "Wenn ich das gewusst hätte, wäre ich gekommen.",
          "Wenn ich das gewusst habe, bin ich gekommen.",
          "Wenn ich das wüsste, würde ich kommen."
        ],
        why: "For the past you need the past Konjunktiv II in both halves: <b>gewusst hätte</b> and <b>wäre gekommen</b>. The second sentence is an indicative Perfekt, the third a hypothesis about the present."
      },
      {
        q: "Fill in: “Wir ___ gern länger geblieben.” (we would have stayed)",
        opts: [
          "wären",
          "hätten",
          "würden"
        ],
        why: "<i>bleiben</i> takes <i>sein</i> in the Perfekt (<i>wir sind geblieben</i>), so <b>wären</b>. <i>Würden ... geblieben</i> does not exist in this form."
      },
      {
        q: "Fill in: “Ich ___ das nicht gemacht.” (I wouldn't have done)",
        hint: "Konjunktiv II of haben, ich",
        why: "<b>Hätte</b>: <i>machen</i> takes <i>haben</i> in the Perfekt, and the participle <i>gemacht</i> goes at the end."
      },
      {
        q: "Fill in: “Sie ___ fast zu spät gekommen.” (she was almost late)",
        hint: "Konjunktiv II of sein, sie (she)",
        why: "<b>Wäre</b>: <i>kommen</i> takes <i>sein</i>. With <i>fast</i>, the Konjunktiv II tells you something nearly happened and did not."
      },
      {
        q: "Complete the sentence.",
        tr: "If we had had more time, we would have stayed longer.",
        why: "<i>Wenn wir mehr Zeit gehabt hätten</i>: after <i>wenn</i> first the participle <i>gehabt</i>, then the auxiliary <i>hätten</i> at the end."
      },
      {
        q: "Translate: “If you had come earlier, you would have seen him.”",
        why: "<i>Wenn du früher gekommen wärst, hättest du ihn gesehen</i>. <i>kommen</i> takes <i>wäre</i>, <i>sehen</i> takes <i>hätte</i>. Without <i>wenn</i>: <i>Wärst du früher gekommen, hättest du ihn gesehen</i>."
      },
      {
        tr: "If I had taken the opportunity, I would be in Berlin now. But I decided differently.",
        why: "In <i>Gelegenheit</i> the stress falls on <b>le</b>: ge-<b>LE</b>-gen-heit; in <i>wäre</i> the <b>ä</b> is a long open <i>e</i>; in <i>entschieden</i> the <b>ie</b> is a long <i>ee</i>."
      },
      {
        tr: "If I had known that, I would have stayed at home.",
        why: "In <i>gewusst</i> the <b>u</b> is short before the double <i>s</i>; in <i>hätte</i> the <b>ä</b> is short; in <i>geblieben</i> the <b>ie</b> is long."
      }
    ]
  },
  "lesson:b2-u01-l2": {
    theme: "Reproaches and apologies",
    title: "I should have called",
    objectives: [
      "use the double infinitive with modals in the past Konjunktiv II",
      "form the Perfekt of a modal with another verb",
      "put the auxiliary in the right place in a subordinate clause",
      "reproach someone and apologize"
    ],
    theory: [
      {
        h: "The double infinitive",
        p: "A modal that goes with another verb in a compound past <strong>does not use its participle</strong> (<em>gekonnt, gesollt</em>) but its <strong>infinitive</strong>. Two infinitives stand at the end of the sentence: first the main verb, then the modal. The auxiliary is always <strong>haben</strong>. In the Konjunktiv II: <em>Ich hätte dich anrufen sollen</em> (I should have called you), <em>Wir hätten früher losfahren können</em> (we could have left earlier). In the Perfekt: <em>Er hat gestern nicht kommen können</em> (he couldn't come yesterday)."
      },
      {
        h: "In a subordinate clause",
        p: "In a subordinate clause the auxiliary does not go to the very end as usual: it stands <strong>before the two infinitives</strong>. <em>Ich weiß, dass ich hätte fragen sollen. Es tut mir leid, dass ich nicht habe kommen können.</em> With modals in the double infinitive this position is required."
      },
      {
        contrast: "English puts the modal first and <em>have</em> + participle after it: <em>I should have called</em>, <em>you could have told me</em>. German turns this around: it conjugates the auxiliary, and the modal comes last as an infinitive: <em>Ich hätte anrufen sollen</em>. The auxiliary is always <em>haben</em>, even with verbs of motion: <em>Ich hätte kommen sollen</em>, never <em>Ich wäre kommen sollen</em>."
      },
      {
        trap: "For the regret <em>I should have called</em> the normal form is <em>Ich hätte anrufen sollen</em>; a word-for-word copy, <em>Ich sollte angerufen haben</em>, needs a different context (a call that should already have been made by a deadline). And <em>Ich hätte das gekonnt</em> exists only when the modal stands <strong>alone</strong>: “I would have been able to”. As soon as there is a second verb, the participle disappears: <em>Ich hätte das machen können</em>, not <em>Ich hätte das machen gekonnt</em>."
      },
      {
        tip: "A gentle reproach often uses <em>eigentlich</em>: <em>Eigentlich hättest du mir Bescheid sagen müssen.</em> It sounds softer than a direct reproach but says the same thing."
      }
    ],
    grammar: {
      title: "The double infinitive: hätte + infinitive + modal",
      note: "With a second verb the modal stays in the <b>infinitive</b> and ends the sentence; the auxiliary is always <b>haben</b>. In a subordinate clause the auxiliary goes <b>before</b> the two infinitives.",
      table: {
        head: ["", "main clause", "subordinate clause"],
        rows: [
          ["past Konjunktiv II", "Ich hätte anrufen sollen.", "..., dass ich hätte anrufen sollen."],
          ["Perfekt", "Ich habe nicht kommen können.", "..., dass ich nicht habe kommen können."],
          ["modal alone", "Ich hätte das nicht gekonnt.", "..., dass ich das nicht gekonnt hätte."]
        ]
      },
      examples: [
        { tr: "I should have called you.", note: "double infinitive: anrufen sollen" },
        { tr: "You should have told me that.", note: "müssen: a stronger obligation than sollen" },
        { tr: "We could have left earlier.", note: "the auxiliary stays haben even with losfahren" },
        { tr: "He couldn't come yesterday.", note: "Perfekt: hat + kommen können" },
        { tr: "She shouldn't have done that.", note: "nicht dürfen: something that was not allowed" },
        { tr: "I know that I should have asked.", note: "subordinate clause: hätte before the two infinitives" }
      ]
    },
    vocab: [
      "the reproach (jemandem Vorwürfe machen: to reproach someone)",
      "the duty",
      "the delay",
      "the excuse",
      "the intention",
      "the oversight (aus Versehen: by mistake)",
      "to reproach, to accuse",
      "to apologize",
      "to forget",
      "to let someone know",
      "unfortunately",
      "actually, really"
    ],
    exercises: [
      {
        q: "How do you say “I should have called you”?",
        opts: [
          "Ich hätte dich anrufen sollen.",
          "Ich hätte dich angerufen gesollt.",
          "Ich wäre dich anrufen sollen."
        ],
        why: "Double infinitive: <b>anrufen sollen</b> at the end, auxiliary <b>hätte</b>. The participle <i>gesollt</i> is not used with a second verb, and the auxiliary is never <i>wäre</i>."
      },
      {
        q: "How do you say “I wasn't able to come”?",
        opts: [
          "Ich habe nicht kommen können.",
          "Ich bin nicht kommen können.",
          "Ich habe nicht kommen gekonnt."
        ],
        why: "In the Perfekt a modal with another verb takes <b>haben</b> and stays in the infinitive: <i>habe ... kommen können</i>, even though <i>kommen</i> on its own would take <i>sein</i>."
      },
      {
        q: "Which subordinate clause is correct?",
        opts: [
          "Ich weiß, dass ich hätte fragen sollen.",
          "Ich weiß, dass ich fragen sollen hätte.",
          "Ich weiß, dass ich hätte gefragt sollen."
        ],
        why: "With the double infinitive the auxiliary goes <b>before</b> the two infinitives: <i>hätte fragen sollen</i>. The third mixes a participle and an infinitive."
      },
      {
        q: "Fill in: “Du ___ mir Bescheid sagen sollen.” (you should have)",
        hint: "Konjunktiv II of haben, du",
        why: "<b>Hättest</b>: the auxiliary of the double infinitive is always <i>haben</i>, here in the second person."
      },
      {
        q: "Fill in the modal: “Wir hätten früher losfahren ___.” (we could have left)",
        hint: "can, in the infinitive",
        why: "<b>können</b> in the infinitive, at the end after <i>losfahren</i>: that is the double infinitive."
      },
      {
        q: "Complete the sentence.",
        tr: "I should have called you yesterday.",
        why: "<i>Ich hätte dich gestern anrufen sollen</i>: <i>hätte</i> in second position, <i>anrufen sollen</i> at the end. <i>müssen</i> is also accepted and makes the obligation stronger."
      },
      {
        q: "Complete the sentence in the Perfekt.",
        tr: "He wasn't able to come yesterday.",
        why: "<i>Er hat gestern nicht kommen können</i>: auxiliary <i>hat</i>, then the two infinitives. The Präteritum <i>Er konnte gestern nicht kommen</i> is also correct, but this exercise asks for the Perfekt."
      },
      {
        q: "Translate: “You should have told me.”",
        why: "<i>Du hättest es mir sagen sollen</i> (or <i>müssen</i>): <i>hättest</i> in second position, <i>sagen sollen</i> at the end. You can also start with <i>Das</i>: <i>Das hättest du mir sagen sollen</i>."
      },
      {
        tr: "I'm sorry, I should have let you know. Unfortunately I forgot the appointment.",
        why: "In <i>Bescheid</i> the <b>sch</b> is [ʃ] and the <b>ei</b> is [aɪ]; in <i>vergessen</i> the <b>v</b> sounds like [f]; in <i>leider</i> the <b>ei</b> is [aɪ] again."
      },
      {
        tr: "Actually I should have left earlier.",
        why: "In <i>eigentlich</i> the final <b>ch</b> is the soft [ç]; in <i>müssen</i> the <b>ü</b> is short and rounded; in <i>losfahren</i> the <b>h</b> lengthens the <i>a</i>."
      }
    ]
  },
  "lesson:b2-u01-l3": {
    theme: "Appearances",
    title: "As if he knew nothing",
    objectives: [
      "make a hypothetical comparison with als ob and als wenn",
      "use als on its own with the verb right after it",
      "tell a simultaneous situation from an earlier one",
      "describe an impression with aussehen, wirken, klingen"
    ],
    theory: [
      {
        h: "als ob, als wenn",
        p: "<strong>als ob</strong> and <strong>als wenn</strong> mean <em>as if</em> and introduce a hypothetical comparison: an impression that may be false or whose truth is unknown. They usually take the <strong>Konjunktiv II</strong>, the form taught here, with the verb at the end: <em>Er tut so, als ob er nichts wüsste</em> (he acts as if he knew nothing). They often follow <em>so tun</em> (to pretend), <em>aussehen</em> (to look), <em>klingen</em> (to sound), <em>sich benehmen</em> (to behave)."
      },
      {
        h: "Same time or earlier",
        p: "If the imagined situation is <strong>simultaneous</strong>, use the present Konjunktiv II: <em>Du siehst aus, als ob du müde wärst</em>. If it is <strong>earlier</strong>, use the past: <em>Sie sieht aus, als ob sie nicht geschlafen hätte</em>. With <strong>als</strong> alone, the conjugated verb comes <strong>right after it</strong>, as in a question: <em>Du redest, als wärst du der Chef. Mir ist, als hätte ich ihn schon einmal gesehen.</em>"
      },
      {
        contrast: "English uses a plain past or <em>were</em> after <em>as if</em> (<em>as if he knew nothing</em>, <em>as if he were the boss</em>) and the past perfect for something earlier (<em>as if she hadn't slept</em>). German has the Konjunktiv II with the same split: <em>als ob er nichts wüsste</em>, <em>als ob sie nicht geschlafen hätte</em>. The difference is word order: after <em>als ob</em> the verb goes to the end; after <em>als</em> alone it comes first. Everyday English <em>like</em> (<em>he looks like he didn't sleep</em>) is not <em>wie</em> here: German still needs <em>als ob</em>."
      },
      {
        trap: "Do not mix the two patterns: <em>als ob er krank wäre</em> or <em>als wäre er krank</em>, but not <em>als ob wäre er krank</em> or <em>als er krank wäre</em>. And do not confuse this <em>als</em> with the comparative one (<em>größer als</em>) or the time one (<em>Als ich jung war</em>): here it is followed straight away by a Konjunktiv II verb."
      },
      {
        tip: "In speech you often hear <em>würde</em> + infinitive instead of the synthetic form: <em>Sie tut so, als ob sie mich nicht kennen würde.</em> With <em>sein</em>, <em>haben</em> and the modals, though, the synthetic form is preferred: <em>als ob er krank wäre</em>."
      }
    ],
    grammar: {
      title: "als ob, als wenn, als + Konjunktiv II",
      note: "<b>als ob / als wenn</b>: verb at the end. <b>als</b>: verb right after it. Present for something simultaneous, past (<b>hätte / wäre</b> + participle) for something earlier.",
      table: {
        head: ["", "same time", "earlier"],
        rows: [
          ["als ob", "..., als ob er nichts wüsste.", "..., als ob er nichts gehört hätte."],
          ["als wenn", "..., als wenn er nichts wüsste.", "..., als wenn er nichts gehört hätte."],
          ["als", "..., als wüsste er nichts.", "..., als hätte er nichts gehört."]
        ]
      },
      examples: [
        { tr: "He acts as if he knew nothing.", note: "so tun, als ob + present Konjunktiv II" },
        { tr: "She looks as if she hadn't slept.", note: "earlier situation: geschlafen hätte" },
        { tr: "You talk as if you were the boss.", note: "als alone: verb right after it" },
        { tr: "It sounds as if it were raining outside.", note: "als wenn + würde: a spoken form" },
        { tr: "He behaves as if nothing had happened.", note: "passieren takes sein: passiert wäre" },
        { tr: "I feel as if I had seen him before.", note: "Mir ist, als ...: a feeling" }
      ]
    },
    vocab: [
      "the impression",
      "the behavior",
      "the appearance (Der Schein trügt: appearances are deceptive)",
      "the idea, the hunch (keine Ahnung haben: to have no idea)",
      "to behave",
      "to pretend",
      "to look (+ adjective)",
      "to seem, to come across as",
      "to sound (Das klingt gut: that sounds good)",
      "to seem (+ zu + infinitive)",
      "strange",
      "surprised"
    ],
    exercises: [
      {
        q: "How do you say “He acts as if he knew nothing”?",
        opts: [
          "Er tut so, als ob er nichts wüsste.",
          "Er tut so, als ob er wüsste nichts.",
          "Er tut so, als ob er nichts wissen."
        ],
        why: "After <b>als ob</b> the Konjunktiv II verb goes to the end: <i>nichts wüsste</i>. The third has an infinitive with no conjugated verb."
      },
      {
        q: "Which sentence is correct?",
        opts: [
          "Sie sieht aus, als ob sie nicht geschlafen hätte.",
          "Sie sieht aus, als ob hätte sie nicht geschlafen.",
          "Sie sieht aus, als sie nicht geschlafen hätte."
        ],
        why: "With <b>als ob</b> the verb goes to the end; with <b>als</b> alone it comes right after it (<i>als hätte sie nicht geschlafen</i>). The second and third swap the two patterns."
      },
      {
        q: "Fill in: “Du redest, als ___ du der Chef.” (were)",
        hint: "Konjunktiv II of sein, du; after als the verb comes straight away",
        why: "<b>Wärst</b> (or <i>wärest</i>): with <i>als</i> alone the conjugated verb comes right after it."
      },
      {
        q: "Fill in: “Er benimmt sich, als ob nichts passiert ___.” (had happened)",
        hint: "Konjunktiv II of sein",
        why: "<b>Wäre</b>: <i>passieren</i> takes <i>sein</i> in the Perfekt, and after <i>als ob</i> the auxiliary ends the clause."
      },
      {
        q: "Complete the sentence.",
        tr: "I feel as if I had seen him before.",
        why: "<i>Mir ist, als hätte ich ihn schon einmal gesehen</i>: with <i>als</i> the verb <i>hätte</i> comes straight away, the participle <i>gesehen</i> goes to the end."
      },
      {
        q: "Which sentences are correct?",
        opts: [
          "Er tut so, als ob er krank wäre.",
          "Er tut so, als wäre er krank.",
          "Er tut so, als wenn er krank wäre.",
          "Er tut so, als ob wäre er krank.",
          "Er tut so, als er krank wäre."
        ],
        why: "The first three are correct: <i>als ob</i> and <i>als wenn</i> with the verb at the end, <i>als</i> with the verb right after it. Sentences 4 and 5 mix the two patterns."
      },
      {
        q: "Put the words in order.",
        tr: "She acts as if she didn't know me.",
        why: "<i>Sie tut so, als ob sie mich nicht kennen würde.</i> After <i>als ob</i> the conjugated verb <i>würde</i> ends the clause, after the infinitive."
      },
      {
        q: "Translate: “He behaves as if nothing had happened.”",
        why: "<i>Er benimmt sich, als ob nichts passiert wäre</i>, or <i>als wäre nichts passiert</i>. <i>geschehen</i> works instead of <i>passiert</i>, and <i>so tun</i> instead of <i>sich benehmen</i>."
      },
      {
        tr: "He acted as if he hadn't seen me. But I had the impression that he recognized me perfectly well.",
        why: "In <i>Eindruck</i> the <b>ei</b> is [aɪ] and the <b>u</b> is short [ʊ]; in <i>erkannt</i> the <b>r</b> after <i>e</i> is barely heard; in <i>genau</i> the <b>au</b> is [aʊ]."
      },
      {
        tr: "You look as if you hadn't slept all night.",
        why: "In <i>siehst</i> the <b>ie</b> is long and the <b>h</b> is silent; in <i>Nacht</i> the <b>ch</b> is the hard [x]; in <i>hättest</i> the <b>ä</b> is short."
      }
    ]
  },
  "lesson:b2-u01-test": {
    theme: "Check",
    title: "Test: If I had known",
    objectives: [
      "check the past Konjunktiv II, the double infinitive and als ob"
    ],
    theory: [
      {
        p: "Ten questions on the whole unit. You pass with 70%. Don't look back at the lessons while you answer: if you can't remember something, it's better to go back and review."
      }
    ],
    exercises: [
      {
        tr: "The past Konjunktiv II of fahren, all persons.",
        why: "<i>fahren</i> takes <i>sein</i> in the Perfekt (<i>ich bin gefahren</i>), so <i>wäre gefahren</i>. The table asks for the intransitive verb of motion; in the sense of driving a vehicle, with a direct object, <i>haben</i> is the usual auxiliary (<i>Ich hätte das Auto gefahren</i>)."
      },
      {
        tr: "The past Konjunktiv II of lernen, all persons.",
        why: "<i>lernen</i> takes <i>haben</i> in the Perfekt: <i>hätte gelernt</i>."
      },
      {
        q: "Fill in: “Wenn ich das gewusst ___, wäre ich gekommen.”",
        hint: "Konjunktiv II of haben, ich",
        why: "<b>Hätte</b> at the end of the wenn clause, after the participle <i>gewusst</i>."
      },
      {
        q: "Fill in the modal: “Du hättest mich anrufen ___.” (you could have)",
        hint: "can, in the infinitive",
        why: "<b>können</b>: double infinitive, the modal stays in the infinitive at the end."
      },
      {
        q: "Fill in: “Er tut so, als ob er nichts ___.” (knew)",
        hint: "Konjunktiv II of wissen",
        why: "<b>Wüsste</b>: Konjunktiv II of <i>wissen</i>, at the end after <i>als ob</i>."
      },
      {
        q: "Fill in: “Ich ___ nie weggefahren.” (I would never have left)",
        opts: [
          "wäre",
          "hätte",
          "würde"
        ],
        why: "<i>wegfahren</i> takes <i>sein</i> in the Perfekt: <b>wäre</b> + <i>weggefahren</i>."
      },
      {
        q: "Which sentence expresses a regret?",
        opts: [
          "Hätte ich bloß mehr gelernt!",
          "Ich habe bloß mehr gelernt.",
          "Ich lerne bloß mehr."
        ],
        why: "Here the regret is carried by the past Konjunktiv II, the verb in first position and <i>bloß</i> (<i>nur</i>, <i>doch</i> or <i>Wenn ich doch ... hätte!</i> also work): <b>Hätte ich bloß mehr gelernt!</b> The other two are indicative."
      },
      {
        q: "Which sentences are correct?",
        opts: [
          "Wir wären gern länger geblieben.",
          "Ich hätte früher aufstehen sollen.",
          "Sie sieht aus, als wäre sie krank.",
          "Ich hätte früher aufgestanden sollen.",
          "Wir hätten gern länger geblieben."
        ],
        why: "The first three are correct. Sentence 4 uses a participle instead of the infinitive in the double infinitive; sentence 5 uses <i>hätten</i> with <i>bleiben</i>, which takes <i>sein</i>."
      },
      {
        tr: "If we had left in time, we wouldn't have missed the train. I should have listened to you.",
        why: "In <i>rechtzeitig</i> the <b>ch</b> is [ç] and the <b>z</b> is [ts]; in <i>verpasst</i> the <b>v</b> sounds like [f]; in <i>hören</i> the <b>ö</b> is long and rounded."
      },
      {
        tr: "If only I had known that earlier, I would have decided differently.",
        why: "In <i>bloß</i> the <b>o</b> is long and the <b>ß</b> is a voiceless <i>s</i>; in <i>früher</i> the <b>h</b> is silent and lengthens the <i>ü</i>; in <i>entschieden</i> the <b>sch</b> is [ʃ]."
      }
    ]
  }
});
