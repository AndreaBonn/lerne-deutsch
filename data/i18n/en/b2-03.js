/* ============================================================
   Learner-language text (en) for data/core/b2-03.js, unit b2-u06.
   Keys point at ids in the neutral layer; arrays merge by index,
   so their length has to match core.
   Checked by scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("en", {
  "unit:b2-u06": {
    title: "Even if it rains",
    grammarNote: "Concessive clauses with obwohl and obgleich · trotz + genitive · trotzdem and dennoch with inversion · auch wenn and selbst wenn, also with the Konjunktiv II · jedoch, allerdings, sondern, vielmehr, hingegen, zwar ... aber"
  },
  "lesson:b2-u06-l1": {
    theme: "Arguing in a debate",
    title: "obwohl, obgleich, trotz",
    objectives: [
      "express a concession with obwohl and obgleich",
      "use trotz with the genitive",
      "use trotzdem and dennoch in the main clause",
      "choose between conjunction, preposition and adverb"
    ],
    theory: [
      {
        h: "Three words for one idea",
        p: "German expresses concession with three different tools, and the difference is in the syntax. <strong>obwohl</strong> (more formal: <em>obgleich</em>) is a conjunction: it opens a subordinate clause with the verb at the end. <em>Obwohl es regnet, gehen wir spazieren.</em> <strong>trotz</strong> is a preposition with the genitive and takes no verb: <em>Trotz des Regens gehen wir spazieren.</em> <strong>trotzdem</strong> and <strong>dennoch</strong> are adverbs: they sit in the main clause, and when they take first position the verb comes right after. <em>Es regnet. Trotzdem gehen wir spazieren.</em>"
      },
      {
        h: "After the subordinate clause, inversion",
        p: "When the <em>obwohl</em> clause comes first, it fills the first position of the main clause on its own: the conjugated verb follows immediately, then the subject. <em>Obwohl er müde war, <strong>arbeitete er</strong> weiter.</em> If the subordinate clause comes at the end, the main clause keeps its normal order: <em>Er arbeitete weiter, obwohl er müde war.</em>"
      },
      {
        contrast: "English has the same three-way split, so map them one to one: <em>although</em> / <em>even though</em> = <em>obwohl</em> (a clause), <em>despite</em> / <em>in spite of</em> = <em>trotz</em> (a noun phrase, never a clause), <em>nevertheless</em> / <em>still</em> = <em>trotzdem</em>. The difference is word order: after <em>Trotzdem</em> or after an <em>obwohl</em> clause, German puts the verb before the subject (<em>gehen wir</em>), where English keeps <em>we go</em>."
      },
      {
        trap: "In standard written German <em>trotzdem</em> is an adverb, not a conjunction: <em>Trotzdem gehen wir</em>, not <em>trotzdem wir gehen</em>. And <em>trotz</em> takes the genitive: <em>trotz des Regens</em>. In speech you will also hear <em>trotz dem Regen</em>, but in writing the genitive is used. Just as <em>despite</em> can't be followed by a clause, <em>trotz es regnet</em> is wrong."
      },
      {
        tip: "In the strong declension, the masculine and neuter genitive also adds <em>-s</em> or <em>-es</em> to the noun (weak masculine nouns take <em>-(e)n</em> instead: <em>trotz des Studenten</em>): <em>trotz des Regens, trotz des schlechten Wetters</em>. In the feminine and the plural nothing changes on the noun: <em>trotz der Kälte, trotz der hohen Kosten</em>."
      }
    ],
    grammar: {
      title: "Concession: conjunction, preposition, adverb",
      note: "<b>obwohl / obgleich</b> + subordinate clause, verb at the end. <b>trotz</b> + genitive, no verb. <b>trotzdem / dennoch</b> in the main clause; in first position, the verb follows immediately.",
      table: {
        head: ["word", "what it is", "verb position", "example"],
        rows: [
          ["obwohl, obgleich", "conjunction", "at the end of the subordinate clause", "obwohl es regnet"],
          ["trotz", "preposition + genitive", "no verb", "trotz des Regens"],
          ["trotzdem, dennoch", "adverb", "right after, when they come first", "Trotzdem gehen wir."]
        ]
      },
      examples: [
        { tr: "Although it's raining, we're going for a walk.", note: "obwohl + indicative, then inversion: gehen wir" },
        { tr: "We're going for a walk, although it's raining.", note: "subordinate clause at the end: the main clause keeps its order" },
        { tr: "It's raining. We're going for a walk anyway.", note: "trotzdem in first position: gehen wir" },
        { tr: "Despite the rain, we're going for a walk.", note: "trotz + genitive: des Regens" },
        { tr: "Although costs have risen, the price stays the same.", note: "obgleich: more formal than obwohl" },
        { tr: "Despite the high costs, the city has continued the project.", note: "genitive plural: der hohen Kosten" }
      ]
    },
    vocab: [
      "the objection",
      "the contradiction",
      "the argument (in favor of a position)",
      "the debate",
      "the compromise",
      "the disadvantage, the drawback",
      "although, even though",
      "despite, in spite of (+ genitive)",
      "nevertheless, anyway",
      "nevertheless, yet",
      "to object",
      "to contradict (+ dative)"
    ],
    exercises: [
      {
        q: "Which sentence is correct?",
        opts: [
          "Obwohl es regnet, gehen wir spazieren.",
          "Obwohl es regnet, wir gehen spazieren.",
          "Obwohl regnet es, gehen wir spazieren."
        ],
        why: "With <i>obwohl</i> the verb goes to the end of the subordinate clause (<i>es regnet</i>), and the main clause that follows starts with the verb: <b>gehen wir</b>."
      },
      {
        q: "Which form is correct in written German?",
        opts: [
          "trotz des Regens",
          "trotz der Regen",
          "trotz des Regen"
        ],
        why: "<i>trotz</i> takes the genitive: <i>der Regen</i> becomes <b>des Regens</b>, with <i>-s</i> on the noun too."
      },
      {
        q: "Which sentence is correct?",
        opts: [
          "Es regnet. Trotzdem gehen wir spazieren.",
          "Es regnet. Trotzdem wir gehen spazieren.",
          "Es regnet. Trotzdem wir spazieren gehen."
        ],
        why: "<i>trotzdem</i> is an adverb: in first position it is followed immediately by the conjugated verb, <b>gehen wir</b>."
      },
      {
        q: "Fill in: “___ sie krank war, ging sie zur Arbeit.”",
        hint: "concessive conjunction, verb at the end",
        why: "<b>Obwohl</b> (or <i>obgleich</i>, <i>obschon</i>): it opens the subordinate clause with the verb <i>war</i> at the end."
      },
      {
        q: "Fill in: “Trotz ___ schlechten Wetters fand das Konzert statt.”",
        hint: "neuter genitive",
        why: "<b>des</b>: <i>trotz</i> takes the genitive, and <i>das Wetter</i> becomes <i>des schlechten Wetters</i>."
      },
      {
        q: "Complete the sentence.",
        tr: "The weather was bad. Nevertheless, the concert took place.",
        why: "<i>Trotzdem</i> (or <i>Dennoch</i>) in first position, then the verb <i>fand</i>; the particle of <i>stattfinden</i> goes to the end: <i>fand ... statt</i>."
      },
      {
        q: "Match each word with its meaning.",
        pairs: [
          "the objection",
          "the contradiction",
          "the compromise",
          "the disadvantage"
        ]
      },
      {
        q: "Put the words in order.",
        tr: "Despite the high costs, the city has continued the project.",
        why: "<i>Trotz der hohen Kosten hat die Stadt das Projekt fortgesetzt.</i> The phrase with <i>trotz</i> takes first position, then the verb <i>hat</i>, the participle at the end."
      },
      {
        q: "Translate: “Although he was tired, he kept working.” (weiterarbeiten)",
        why: "<i>Obwohl er müde war, hat er weitergearbeitet</i> (or <i>arbeitete er weiter</i>): after the <i>obwohl</i> clause the verb comes before the subject. The subordinate clause at the end is correct too."
      },
      {
        tr: "Although rents in the city have risen sharply, many young people want to live there. Despite the high prices, demand is high.",
        why: "In <i>gestiegen</i> the <b>ie</b> is long; in <i>Nachfrage</i> the stress falls on <b>Nach</b>; in <i>Leute</i> the <b>eu</b> is [ɔʏ]."
      },
      {
        tr: "Despite the rain, many people came to the demonstration.",
        why: "In <i>Regens</i> the <b>e</b> of the first syllable is long; in <i>Demonstration</i> the stress falls on the last syllable, <b>tion</b> [tsi̯oːn]."
      }
    ]
  },
  "lesson:b2-u06-l2": {
    theme: "Conditions and positions",
    title: "auch wenn, selbst wenn",
    objectives: [
      "express a concession about a possible case with auch wenn",
      "strengthen it with selbst wenn",
      "combine concession and an unreal hypothesis with the Konjunktiv II",
      "tell obwohl apart from auch wenn"
    ],
    theory: [
      {
        h: "A fact or a possible case",
        p: "<strong>obwohl</strong> is about a fact: <em>Obwohl es regnet</em>, it really is raining. <strong>auch wenn</strong> works for a fact and also for a case that is only possible: <em>Auch wenn es morgen regnet, fahren wir los</em>, it may rain or it may not. <strong>selbst wenn</strong> is stronger: “even if”. As with <em>obwohl</em>, the main clause that follows starts with the verb: <em>Auch wenn du recht hast, <strong>solltest du</strong> höflich bleiben.</em>"
      },
      {
        h: "With an unreal hypothesis",
        p: "If the case is unreal, the <strong>Konjunktiv II</strong> comes in, in both clauses: <em>Selbst wenn ich Zeit hätte, würde ich nicht mitkommen.</em> In the past: <em>Selbst wenn sie gewonnen hätte, wäre sie nicht zufrieden gewesen.</em> A related pattern is <strong>wie ... auch</strong>, “however”: <em>Wie schwer es auch sein mag, wir schaffen das.</em> Here the main clause usually keeps its own order: <em>wir schaffen</em>."
      },
      {
        contrast: "The match with English is not one to one. <em>obwohl</em> presents its content as a fact, like <em>although</em>; <em>auch wenn</em> can mean either <em>even though</em> or <em>even if</em>, depending on the context (<em>Auch wenn die Mehrheit dagegen war</em> is a fact); <em>selbst wenn</em> usually stresses <em>even if</em>. Where English changes the verb for an unreal case (<em>even if I had time, I wouldn't come</em>), German uses the Konjunktiv II in both clauses: <em>hätte ... würde</em>."
      },
      {
        trap: "<em>selbst</em> here doesn't mean “self”: <em>selbst wenn</em> is “even if”. And after the subordinate clause, don't go back to English word order: <em>Auch wenn es regnet, gehen wir</em>, not <em>Auch wenn es regnet, wir gehen</em>."
      },
      {
        tip: "If “even if” fits better than “even though”, you need <em>auch wenn</em> or <em>selbst wenn</em>; if the case is a known fact, <em>obwohl</em> is the safer choice."
      }
    ],
    grammar: {
      title: "auch wenn, selbst wenn and the unreal hypothesis",
      note: "<b>obwohl</b>: a fact. <b>auch wenn</b>: a fact or a possible case. <b>selbst wenn</b>: “even if”. Unreal hypothesis: <b>Konjunktiv II</b> in both clauses.",
      table: {
        head: ["sentence", "what it expresses"],
        rows: [
          ["Obwohl es regnet, gehen wir spazieren.", "a fact: it really is raining"],
          ["Auch wenn es morgen regnet, fahren wir los.", "a possible case"],
          ["Selbst wenn ich Zeit hätte, würde ich nicht mitkommen.", "unreal hypothesis, Konjunktiv II"],
          ["Wie schwer es auch sein mag, wir schaffen das.", "“however”: main clause usually without inversion"]
        ]
      },
      examples: [
        { tr: "Even if it rains, we'll go for a walk.", note: "auch wenn: a fact or a possibility" },
        { tr: "Even if I had time, I wouldn't come.", note: "unreal: hätte ... würde" },
        { tr: "Even if you're right, you should stay polite.", note: "after the subordinate clause: solltest du" },
        { tr: "We're leaving tomorrow, even if the weather is bad.", note: "selbst wenn: even if" },
        { tr: "However hard it may be, we'll manage.", note: "wie ... auch: the main clause stays wir schaffen" },
        { tr: "Even if she had won, she wouldn't have been satisfied.", note: "unreal in the past: hätte ... gewonnen, wäre ... gewesen" }
      ]
    },
    vocab: [
      "the condition",
      "the prerequisite, the requirement",
      "the risk",
      "the decision",
      "the point of view, the position",
      "the majority",
      "even if, even though",
      "even if",
      "even",
      "to admit",
      "to give in",
      "to insist (auf + dative: on)"
    ],
    exercises: [
      {
        q: "Which sentence is correct?",
        opts: [
          "Auch wenn es regnet, gehen wir spazieren.",
          "Auch wenn es regnet, wir gehen spazieren.",
          "Auch wenn regnet es, gehen wir spazieren."
        ],
        why: "Verb at the end of the subordinate clause (<i>es regnet</i>), then the main clause starts with the verb: <b>gehen wir</b>."
      },
      {
        q: "Which sentence correctly expresses an unreal hypothesis?",
        opts: [
          "Selbst wenn ich Zeit hätte, würde ich nicht mitkommen.",
          "Selbst wenn ich Zeit habe, würde ich nicht mitkommen.",
          "Selbst wenn hätte ich Zeit, würde ich nicht mitkommen."
        ],
        why: "Unreal: Konjunktiv II in both clauses, <b>hätte ... würde</b>. The second mixes indicative and Konjunktiv, the third doesn't put the verb at the end."
      },
      {
        q: "You don't know yet whether it will rain tomorrow. Which sentence fits?",
        opts: [
          "Auch wenn es morgen regnet, fahren wir los.",
          "Obwohl es morgen regnet, fahren wir los.",
          "Trotz es morgen regnet, fahren wir los."
        ],
        why: "<b>auch wenn</b> fits a case that is only possible; <i>obwohl</i> presents the rain as a certain fact. <i>trotz</i> is a preposition and can't open a clause."
      },
      {
        q: "Fill in: “___ wenn du recht hast, solltest du höflich bleiben.”",
        hint: "auch or selbst",
        why: "<b>Auch</b> or <b>Selbst</b>: <i>auch wenn</i> “even if”, <i>selbst wenn</i> a stronger “even if”."
      },
      {
        q: "Fill in: “Selbst wenn ich das Geld hätte, ___ ich das Auto nicht kaufen.”",
        hint: "Konjunktiv II of werden, ich",
        why: "<b>würde</b>: in an unreal hypothesis the main clause takes the Konjunktiv II too, <i>würde ... kaufen</i>."
      },
      {
        q: "Complete the sentence.",
        tr: "We're leaving tomorrow, even if the weather is bad.",
        why: "<i>Wir fahren morgen los, auch wenn das Wetter schlecht ist</i> (or <i>selbst wenn</i>): the verb <i>ist</i> goes to the end of the subordinate clause."
      },
      {
        q: "Which sentences are correct?",
        opts: [
          "Auch wenn es spät ist, rufe ich dich an.",
          "Selbst wenn er fragt, sage ich nichts.",
          "Auch wenn es spät ist, ich rufe dich an.",
          "Selbst wenn fragt er, sage ich nichts."
        ],
        why: "The first two. The third doesn't put the verb first after the subordinate clause, the fourth doesn't send the verb to the end of the subordinate clause."
      },
      {
        q: "Put the words in order.",
        tr: "Even if I had time, I wouldn't come along.",
        why: "<i>Selbst wenn ich Zeit hätte, würde ich nicht mitkommen.</i> <i>hätte</i> closes the subordinate clause, <i>würde</i> opens the main clause, the infinitive <i>mitkommen</i> goes to the end."
      },
      {
        q: "Translate: “Even if he's right, he shouldn't shout.” (schreien)",
        why: "<i>Auch wenn er recht hat, sollte er nicht schreien</i> (also <i>selbst wenn</i>, or <i>Recht</i> with a capital): after the subordinate clause, the verb <i>sollte</i> comes first."
      },
      {
        tr: "Even though the majority was against it, the mayor stuck to his plan. Even if there are protests, he doesn't want to give in.",
        why: "In <i>Mehrheit</i> the <b>e</b> is long and the <b>h</b> is silent; in <i>festgehalten</i> the stress falls on <b>fest</b>; in <i>Proteste</i> the stress falls on <b>tes</b>."
      },
      {
        tr: "Even if I had more money, I would keep living here.",
        why: "In <i>hätte</i> the <b>ä</b> is short; in <i>würde</i> the <b>ü</b> is short; in <i>wohnen</i> the <b>o</b> is long and the <b>h</b> is silent."
      }
    ]
  },
  "lesson:b2-u06-l3": {
    theme: "Correcting and qualifying",
    title: "jedoch, allerdings, sondern, vielmehr",
    objectives: [
      "contrast two ideas with jedoch and hingegen",
      "qualify a statement with allerdings and zwar ... aber",
      "correct a statement with sondern and vielmehr",
      "recognize connectors typical of written German"
    ],
    theory: [
      {
        h: "Contrasting and qualifying",
        p: "<strong>jedoch</strong> (“however”) is typical of writing: it behaves like an adverb and can take first position, with the verb right after, or sit inside the clause. <em>Der Vorschlag klingt gut. Er ist jedoch zu teuer.</em> <strong>allerdings</strong> (“though, admittedly”) qualifies what you have just said: <em>Die Wohnung ist schön, allerdings ziemlich laut.</em> <strong>hingegen</strong> (“on the other hand, whereas”) sets two elements or situations against each other: <em>Ich trinke Kaffee, meine Frau hingegen trinkt Tee.</em> <strong>zwar ... aber</strong> concedes and then objects: <em>Das Auto ist zwar alt, aber es fährt gut.</em>"
      },
      {
        h: "Correcting",
        p: "<strong>sondern</strong> follows a negation (<em>nicht</em>, <em>kein</em>) and replaces the negated element with the right one: <em>Das Problem ist nicht das Geld, sondern die Zeit.</em> It is also part of <em>nicht nur ... sondern auch</em>: <em>Er ist nicht nur Arzt, sondern auch Musiker.</em> <strong>vielmehr</strong> (“rather, on the contrary”) corrects more forcefully, often in a new sentence: <em>Das war kein Zufall. Vielmehr hatte er alles geplant.</em>"
      },
      {
        contrast: "English <em>but</em> covers both adding an objection and correcting: <em>he's not rich, but he's happy</em> and <em>not today but tomorrow</em>. German separates them: <em>Er ist nicht reich, aber glücklich</em> (both are true) and <em>Er kommt nicht heute, sondern morgen</em> (the second replaces the first). And <em>not only ... but also</em> is usually rendered as <em>nicht nur ... sondern auch</em>."
      },
      {
        trap: "<em>sondern</em> introduces a correction after a negation (<em>Er kommt nicht heute, sondern morgen</em>); in <em>nicht nur ..., sondern auch</em> it adds a second element instead. If the first statement stays true and you add a limitation, you need <em>aber</em> or <em>allerdings</em>: <em>Das Essen war gut, aber teuer.</em>"
      },
      {
        tip: "Try rephrasing with “instead”: if “not today, tomorrow instead” works, you need <em>sondern</em>. If “though” works, you need <em>aber</em> or <em>allerdings</em>."
      }
    ],
    grammar: {
      title: "Connectors for contrasting, qualifying and correcting",
      note: "<b>jedoch</b>, <b>allerdings</b>, <b>hingegen</b>, <b>vielmehr</b> behave like adverbs: in first position, the verb follows immediately. <b>sondern</b> after a negation, to correct, and in <i>nicht nur ... sondern auch</i>.",
      table: {
        head: ["connector", "meaning", "use"],
        rows: [
          ["jedoch", "however", "written; first position or inside the clause"],
          ["allerdings", "though, admittedly", "qualifies what was just said"],
          ["hingegen", "on the other hand, whereas", "sets two elements or situations against each other"],
          ["zwar ... aber", "it's true that ... but", "concedes, then objects"],
          ["sondern", "but (instead)", "after nicht or kein, corrects"],
          ["vielmehr", "rather, on the contrary", "corrects more forcefully, often in a new sentence"]
        ]
      },
      examples: [
        { tr: "The proposal sounds good. However, it's too expensive.", note: "jedoch inside the clause" },
        { tr: "The apartment is nice, though rather noisy.", note: "allerdings: qualifies" },
        { tr: "The problem isn't the money but the time.", note: "nicht ..., sondern: correction" },
        { tr: "He's not only a doctor but also a musician.", note: "nicht nur ... sondern auch" },
        { tr: "It wasn't a coincidence. Rather, he had planned everything.", note: "vielmehr in first position: hatte er" },
        { tr: "I drink coffee, whereas my wife drinks tea.", note: "hingegen: a contrast between two elements" }
      ]
    },
    vocab: [
      "the thesis, the claim",
      "the assertion, the claim",
      "the evidence, the proof",
      "the conclusion (that you draw)",
      "the contrast, the opposite (im Gegensatz zu: unlike)",
      "the restriction, the reservation",
      "however",
      "though, admittedly",
      "but (after a negation)",
      "rather, on the contrary",
      "on the other hand, whereas",
      "it's true that (zwar ... aber)"
    ],
    exercises: [
      {
        q: "Fill in: “Er kommt nicht heute, ___ morgen.”",
        opts: [
          "sondern",
          "denn",
          "obwohl"
        ],
        why: "After the negation, <b>sondern</b> puts the right information in place of the negated one: not today, tomorrow instead. <i>denn</i> introduces a reason, <i>obwohl</i> a subordinate clause with the verb at the end."
      },
      {
        q: "Fill in: “Das Essen war gut, ___ etwas teuer.”",
        opts: [
          "allerdings",
          "sondern",
          "vielmehr"
        ],
        why: "<b>allerdings</b> qualifies a statement that stays true. <i>sondern</i> and <i>vielmehr</i> correct, and here there is nothing to correct."
      },
      {
        q: "Fill in: “Sie spricht nicht nur Deutsch, ___ auch Japanisch.”",
        opts: [
          "sondern",
          "denn",
          "vielmehr"
        ],
        why: "<i>nicht nur ... <b>sondern</b> auch</i> corresponds to “not only ... but also”."
      },
      {
        q: "Fill in: “Er ist nicht krank, ___ nur müde.”",
        hint: "a correction after a negation",
        why: "<b>sondern</b>: he isn't ill, he's only tired instead."
      },
      {
        q: "Fill in: “Das Auto ist ___ alt, aber es fährt gut.”",
        hint: "it's true that ... but",
        why: "<b>zwar</b> ... <i>aber</i>: you concede it's old, then add the objection."
      },
      {
        q: "Complete the sentence.",
        tr: "It wasn't a coincidence. Rather, he had planned everything.",
        why: "<i>Vielmehr hatte er alles geplant</i>: <i>vielmehr</i> in first position, then the verb <i>hatte</i>, the participle <i>geplant</i> at the end."
      },
      {
        q: "Match each connector with its meaning.",
        pairs: [
          "however",
          "though, admittedly",
          "rather, on the contrary",
          "on the other hand (in a contrast)"
        ]
      },
      {
        q: "Put the words in order.",
        tr: "I drink coffee, whereas my wife drinks tea.",
        why: "<i>Ich trinke Kaffee, meine Frau hingegen trinkt Tee</i>: <i>hingegen</i> after the subject; it also works after the verb, <i>meine Frau trinkt hingegen Tee</i>."
      },
      {
        q: "Translate: “The problem isn't the money but the time.”",
        why: "<i>Das Problem ist nicht das Geld, sondern die Zeit</i>: after the negation, the correction takes <i>sondern</i>, not <i>aber</i>."
      },
      {
        tr: "The study does show progress, but the results are not yet certain. The problem isn't the technology but the lack of money.",
        why: "In <i>Fortschritte</i> the stress falls on <b>Fort</b>; in <i>Ergebnisse</i> the stress falls on <b>geb</b>; in <i>Technik</i> the <b>ch</b> is [ç]."
      },
      {
        tr: "It's not about money; rather, it's about respect.",
        why: "In <i>vielmehr</i> the stress falls on <b>mehr</b>; in <i>Respekt</i> the stress falls on <b>spekt</b>; in <i>geht</i> the <b>h</b> is silent."
      }
    ]
  },
  "lesson:b2-u06-test": {
    theme: "Check",
    title: "Test: Even if it rains",
    objectives: [
      "check concessive clauses and connectors, and review the Konjunktiv II, the Konjunktiv I and the passive of level B2"
    ],
    theory: [
      {
        p: "Twelve questions on the unit and on the whole of level B2. You pass with 70%. Don't look back at the lessons while you answer: if you can't remember something, it's better to go back and review."
      }
    ],
    exercises: [
      {
        q: "Fill in: “___ des Regens fand das Fest statt.”",
        hint: "preposition + genitive",
        why: "<b>Trotz</b>: concessive preposition with the genitive <i>des Regens</i>."
      },
      {
        q: "Fill in: “Wenn ich mehr Zeit gehabt ___, wäre ich gekommen.”",
        hint: "Konjunktiv II of haben, ich",
        why: "<b>hätte</b>: unreal hypothesis in the past, <i>hätte ... gehabt</i>."
      },
      {
        q: "Fill in, newspaper style: “Sie erklärte, sie ___ das Problem nicht gekannt.”",
        hint: "Konjunktiv I of haben, sie (she)",
        why: "<b>habe</b>: reported speech in the past, <i>habe ... gekannt</i>."
      },
      {
        q: "Fill in with the passive in the Präteritum: “Die Brücke ___ im Jahr 1900 gebaut.”",
        hint: "Präteritum of werden, third person singular",
        why: "<b>wurde</b>: passive with <i>werden</i> + participle, <i>wurde ... gebaut</i>."
      },
      {
        q: "Complete: “Obwohl er krank war, ...”",
        opts: [
          "ging er zur Arbeit.",
          "er ging zur Arbeit.",
          "ging zur Arbeit er."
        ],
        why: "After the subordinate clause, the main clause starts with the verb: <b>ging er</b>."
      },
      {
        q: "Which sentence is correct?",
        opts: [
          "Das Formular muss heute ausgefüllt werden.",
          "Das Formular muss heute ausgefüllt worden.",
          "Das Formular muss heute ausfüllen werden."
        ],
        why: "Passive with a modal: modal + participle + <b>werden</b>. <i>worden</i> is used in compound tenses, not after a modal in the present."
      },
      {
        q: "Fill in: “Er tut so, als ob er nichts ___.”",
        opts: [
          "wüsste",
          "gewusst",
          "wissen"
        ],
        why: "In unreal comparisons with <i>als ob</i> the Konjunktiv II is the usual choice: among these options, <b>wüsste</b> is the only correct one."
      },
      {
        q: "Which sentences are correct?",
        opts: [
          "Auch wenn es regnet, gehen wir spazieren.",
          "Trotz des Regens gehen wir spazieren.",
          "Obwohl es regnet, wir gehen spazieren.",
          "Trotz es regnet, gehen wir spazieren."
        ],
        why: "The first two. The third doesn't put the verb first after the subordinate clause; the fourth uses <i>trotz</i> as a conjunction, but it is a preposition."
      },
      {
        q: "Complete the sentence.",
        tr: "Even if I had time, I wouldn't come along.",
        why: "<i>Selbst wenn ich Zeit hätte, würde ich nicht mitkommen</i>: Konjunktiv II in both clauses."
      },
      {
        q: "Translate: “Despite the traffic, we arrived on time.” (der Verkehr)",
        why: "<i>Trotz des Verkehrs sind wir pünktlich angekommen</i>: <i>trotz</i> + genitive; <i>kamen wir ... an</i> and the version with <i>wir</i> first are also correct."
      },
      {
        tr: "Although the government had promised new laws, nothing changed for a long time. Critics said the citizens had not been taken seriously.",
        why: "In <i>Regierung</i> the stress falls on <b>gie</b>; in <i>versprochen</i> the <b>v</b> sounds like [f]; in <i>Kritiker</i> the stress falls on <b>Kri</b>."
      },
      {
        tr: "Even if the costs are high, the project should be continued.",
        why: "In <i>Kosten</i> the <b>o</b> is short; in <i>Projekt</i> the stress falls on <b>jekt</b>; in <i>fortgesetzt</i> the stress falls on <b>fort</b>."
      }
    ]
  }
});
