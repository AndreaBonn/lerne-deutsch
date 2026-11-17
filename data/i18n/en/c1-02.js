/* ============================================================
   Learner-language text (en) for data/core/c1-02.js, unit c1-u04.
   Keys point at ids in the neutral layer; arrays merge by index,
   so their length has to match core.
   Checked by scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("en", {
  "unit:c1-u04": {
    title: "He'll be tired",
    grammarNote: "Futur I and II of supposition (er wird wohl müde sein, sie wird es gelesen haben) · subjective modals: muss, dürfte, könnte, mag, soll, will · modal particles wohl, ja, etwa, halt, eben"
  },
  "lesson:c1-u04-l1": {
    theme: "Suppositions and degrees of certainty",
    title: "The future that isn't about the future",
    objectives: [
      "recognize the Futur I as a supposition about the present",
      "make suppositions about the past with the Futur II",
      "tell a supposition from an action completed by a future point",
      "adjust the degree of certainty with wohl, schon, sicher, vermutlich"
    ],
    theory: [
      {
        h: "Werden for guessing",
        p: "In German the real future is often expressed with the present plus a time marker (<em>Morgen fliege ich nach Wien</em>). <strong>werden</strong> + infinitive is used above all for a <strong>supposition about the present</strong>: <em>Er wird wohl noch im Stau stehen. Es klingelt. Das wird der Postbote sein.</em> For a supposition about the <strong>past</strong> you use the <strong>Futur II</strong>, <em>werden</em> + past participle + <em>haben</em> or <em>sein</em>: <em>Sie wird die Nachricht inzwischen gelesen haben.</em> The same Futur II can also express an action that will be <strong>completed by a future point</strong>: <em>Bis Ende des Monats werden wir die Studie abgeschlossen haben.</em>"
      },
      {
        h: "The clues",
        p: "To decide which reading you are looking at, check the time reference and the adverbs. A reference to the present (<em>jetzt, noch, gerade</em>) or to the past (<em>inzwischen, längst</em>) points to a supposition; a deadline with <em>bis</em> points to an action completed in the future. Adverbs adjust the certainty: <em>wohl</em> and <em>vermutlich</em> stay cautious, <em>schon</em> reassures (<em>Das wird schon klappen</em>), <em>sicher</em> and <em>bestimmt</em> strengthen it."
      },
      {
        contrast: "English does the same thing: <em>will</em> for a guess about the present (<em>that'll be the postman</em>, <em>he'll be at the office</em>) and <em>will have</em> for a guess about the past (<em>she'll have read it by now</em>). So this should feel natural, but there is a difference in frequency: German leans on an adverb such as <em>wohl</em>, <em>schon</em> or <em>sicher</em> to mark the guess, while <em>Er wird zu Hause sein</em> on its own, without a clear context, can also be read as a plain future. English <em>will</em> works the other way round: it is the normal marker of the real future, whereas German usually says that with the present. The English future perfect of completion (<em>by Friday we'll have finished</em>) corresponds to the Futur II with <em>bis</em>."
      },
      {
        trap: "For the past the Futur I is not enough: <em>Er wird gestern krank sein</em> doesn't work, you need the Futur II, <em>Er wird gestern wohl krank gewesen sein</em>. And the auxiliary of the perfect infinitive is the one the verb takes in the Perfekt: <em>Sie wird abgereist sein</em> (motion, <em>sein</em>), <em>Er wird es vergessen haben</em> (<em>haben</em>). English always says <em>have</em>, so here you have to choose."
      },
      {
        tip: "Always ask which moment the sentence refers to: present, past, or a future point with <em>bis</em>. The moment decides between the Futur I (supposition about the present), the Futur II (past) and the Futur II of completion."
      }
    ],
    grammar: {
      title: "Futur I and II as supposition",
      note: "<b>werden + infinitive</b>: supposition about the present. <b>werden + past participle + haben/sein</b>: supposition about the past, or action completed by a future point (with <i>bis</i>). Adjusting the certainty: <i>wohl, vermutlich</i> (cautious), <i>schon</i> (reassuring), <i>sicher</i> (more certain).",
      table: {
        head: ["construction", "meaning", "example"],
        rows: [
          ["werden + infinitive", "supposition about the present", "Er wird wohl noch im Stau stehen."],
          ["werden + past participle + haben/sein", "supposition about the past", "Sie wird die Nachricht inzwischen gelesen haben."],
          ["werden + past participle + haben/sein with bis", "action completed by a future point", "Bis Ende des Monats werden wir die Studie abgeschlossen haben."],
          ["werden + infinitive + schon", "reassurance", "Das wird schon klappen."],
          ["present + time expression", "scheduled future", "Morgen fliege ich nach Wien."]
        ]
      },
      examples: [
        { tr: "The lights are off, so he'll be asleep by now.", note: "supposition about the present with schon" },
        { tr: "Someone's ringing. That'll be the postman.", note: "werden + sein: supposition" },
        { tr: "He'll probably still be stuck in traffic.", note: "werden + wohl + infinitive" },
        { tr: "She'll have read the message by now.", note: "Futur II: supposition about the past" },
        { tr: "By the end of the month we will have completed the study.", note: "Futur II of completion with bis" },
        { tr: "You'll see, it'll be fine.", note: "werden + schon: reassurance" }
      ]
    },
    vocab: [
      "the hypothesis, the assumption",
      "the suspicion",
      "the probability",
      "the clue, the point of reference",
      "the doubt",
      "the certainty",
      "to suppose, to assume",
      "to conjecture, to speculate (journalistic register)",
      "to start from the assumption",
      "probably",
      "surely, certainly",
      "by now, in the meantime"
    ],
    exercises: [
      {
        q: "In the office chat you read three sentences about the boss. Which one describes a future action and not a supposition?",
        opts: [
          "Der Chef wird nächste Woche aus dem Urlaub zurückkehren.",
          "Der Chef wird jetzt im Urlaub sein, er hat es ja angekündigt.",
          "Der Chef wird die Mail längst gelesen haben."
        ],
        why: "The first has <i>nächste Woche</i>: an event that will happen, so a future. In the others the moment is the present (<i>jetzt</i>) or the past (<i>längst gelesen haben</i>): they are suppositions."
      },
      {
        q: "A chain of stores announces: «Bis Jahresende werden wir alle Filialen modernisiert haben.» What does the Futur II express?",
        opts: [
          "an action that will be completed by a future point",
          "a supposition about something that has already happened",
          "a present passive"
        ],
        why: "<i>bis Jahresende</i> fixes the future point by which the action will be finished, and the speaker is making a commitment, not a guess: there is also no adverb such as <i>wohl</i>."
      },
      {
        q: "You know the letter was delivered yesterday, but you don't know whether the recipient has read it yet. Which sentence makes the right supposition?",
        opts: [
          "Er wird den Brief inzwischen gelesen haben.",
          "Er hat den Brief inzwischen gelesen.",
          "Er wird den Brief inzwischen lesen."
        ],
        why: "You need the Futur II: <i>wird ... gelesen haben</i> looks back at an action that is assumed to have already happened. The second presents the reading as a sure fact, the third (Futur I) is about what is happening now or will happen."
      },
      {
        q: "The doorbell rings and you guess it's the courier: «Es klingelt. Das ___ der Paketbote sein.»",
        hint: "form of werden in the third person",
        why: "<b>wird</b>: <i>werden</i> + infinitive (<i>sein</i>) is a supposition about the present, “that'll be the courier”."
      },
      {
        q: "A manager promises: «Bis nächsten Freitag werden wir das Gutachten fertiggestellt ___.»",
        hint: "Futur II: auxiliary",
        why: "<b>haben</b>: Futur II of completion. <i>fertigstellen</i> forms the Perfekt with <i>haben</i>."
      },
      {
        q: "Fill in the right forms.",
        tr: "My colleagues will be in a meeting now, and they will surely have read the report already.",
        why: "<i>werden</i> + <i>sitzen</i> or <i>sein</i> for the present; for the past <i>werden</i> + <i>gelesen haben</i>. With <i>den Bericht</i> in first position the finite verb stays in second place and the subject <i>sie</i> follows it."
      },
      {
        q: "Which sentences express a supposition and not a real future or a passive?",
        opts: [
          "Es klingelt an der Tür. Das wird der Nachbar sein.",
          "Er wird jetzt wohl schon zu Hause angekommen sein.",
          "Am Montag wird die Straße wieder freigegeben.",
          "Wir werden Sie über das Ergebnis informieren."
        ],
        why: "The first two are about what is assumed right now: Futur I with <i>sein</i> and Futur II (<i>angekommen sein</i>). The third is a present passive (<i>freigegeben</i>) with a future meaning, the fourth a real future."
      },
      {
        q: "Put the supposition in order.",
        tr: "She'll have read the message by now.",
        why: "<i>Sie wird die Nachricht inzwischen gelesen haben.</i> The finite verb is in second position, <i>gelesen haben</i> closes the sentence; <i>inzwischen</i> can also stand before <i>die Nachricht</i>."
      },
      {
        q: "Translate: “The applicants will probably have received the reply already.” (die Bewerberinnen, die Antwort, erhalten)",
        why: "<i>Die Bewerberinnen werden die Antwort wohl schon erhalten haben</i>: Futur II with <i>wohl</i> (or <i>vermutlich, wahrscheinlich</i>); <i>schon</i> or <i>bereits</i> for “already”, and the adverb can stand before or after <i>die Antwort</i>."
      },
      {
        tr: "The train from Munich is late. The passengers will probably have to wait another half hour, and the connection will probably have left by then.",
        why: "Two suppositions: <i>werden ... warten müssen</i> (cautious prediction) and <i>wird ... abgefahren sein</i> (Futur II with <i>sein</i>, because <i>abfahren</i> is a verb of motion)."
      },
      {
        tr: "The light is still on, so the colleagues will probably still be working.",
        why: "<i>werden</i> + <i>wohl</i> + infinitive: supposition about the present, with <i>arbeiten</i> at the end of the sentence."
      }
    ]
  },
  "lesson:c1-u04-l2": {
    theme: "Certainty, rumors and claims",
    title: "Er muss krank sein, sie soll reich sein",
    objectives: [
      "grade certainty with muss, dürfte, könnte, kann, mag",
      "report what others say with soll",
      "report what the subject claims with will",
      "use the perfect infinitive to talk about the past"
    ],
    theory: [
      {
        h: "From obligation to certainty",
        p: "With <em>sein</em>, <em>haben</em> or a perfect infinitive, modals no longer express obligation or permission, but how sure the speaker is that something is true. <strong>muss</strong> is an almost certain deduction (<em>Es muss geregnet haben, die Straße ist nass</em>), <strong>dürfte</strong> means it is probable (<em>Er dürfte schon angekommen sein</em>), <strong>könnte</strong> that it is possible (<em>Das könnte ein Irrtum sein</em>). <strong>kann nicht</strong> says it is impossible (<em>Das kann nicht stimmen</em>) and <strong>mag</strong> admits something, usually as a concession (<em>Das mag sein, aber ich sehe es anders</em>)."
      },
      {
        h: "Reporting: soll and will",
        p: "Two more modals report a source. <strong>soll</strong> says that others claim it and the speaker doesn't vouch for it: <em>Der Zeuge soll den Täter gesehen haben</em>, “the witness is said to have seen the culprit”. <strong>will</strong> says that the subject himself maintains it, often with a hint of skepticism: <em>Die Firma will alle Unterlagen rechtzeitig eingereicht haben</em>, “the company claims to have submitted all the documents on time”. For the past: modal + past participle + <em>haben</em> or <em>sein</em>."
      },
      {
        contrast: "English has a very similar system for certainty: <em>must</em> (<em>he must be ill</em>), <em>should</em> (<em>he should be there by now</em>), <em>could</em> or <em>might</em> (<em>it could be a mistake</em>), <em>may</em> (<em>that may be so, but...</em>) and <em>can't</em> (<em>that can't be right</em>). The difference is in reporting. English uses adverbs and phrases such as <em>reportedly</em>, <em>is said to</em>, <em>claims to</em>, <em>allegedly</em>, and the verb itself doesn't change. German chooses the modal according to the source: <em>soll</em> for “is said to”, <em>will</em> for “claims to”. Note also that English <em>should</em> and <em>supposed to</em> cover both a probability and an obligation, whereas German keeps them apart: <em>dürfte</em> for the probability, <em>soll</em> for the obligation or the rumor."
      },
      {
        trap: "Negation changes the meaning. <em>Er muss nicht krank sein</em> means “he doesn't have to be ill”, “it's not certain that he is”, not “he can't be ill”. For impossibility you need <em>kann nicht</em>: <em>Er kann nicht krank sein, ich habe ihn eben gesehen</em>. English works differently here, because <em>he mustn't be ill</em> is hardly used for this. And <em>dürfte</em> with the meaning of probability must not be confused with <em>darf</em>, which expresses permission, just as English <em>may</em> is not the same as <em>should</em>."
      },
      {
        tip: "Before translating a modal, look at the infinitive. With a perfect infinitive (<em>gelesen haben, gewesen sein</em>) or a stative verb (<em>sein</em>) the meaning is almost always subjective: certainty or source. With an action verb in the present (<em>Er soll kommen</em>) it is an order."
      }
    ],
    grammar: {
      title: "Subjective modals",
      note: "<b>muss</b>: almost certain. <b>dürfte</b>: probable. <b>kann / könnte</b>: possible. <b>mag</b>: concession. <b>soll</b>: others say so. <b>will</b>: the subject claims it. Past: modal + past participle + haben/sein.",
      table: {
        head: ["modal", "certainty or source", "example"],
        rows: [
          ["muss", "almost certain deduction", "Er muss krank sein."],
          ["dürfte", "probable", "Er dürfte krank sein."],
          ["kann / könnte", "possible", "Er könnte krank sein."],
          ["mag", "concession", "Das mag sein."],
          ["soll", "others say so", "Er soll krank sein."],
          ["will", "the subject claims it", "Er will krank gewesen sein."]
        ]
      },
      examples: [
        { tr: "It must have rained, the street is wet.", note: "muss + perfect infinitive: deduction" },
        { tr: "He has probably arrived already.", note: "dürfte: probable" },
        { tr: "It could be a mistake.", note: "könnte: possible" },
        { tr: "The witness is said to have seen the culprit.", note: "soll: others say so" },
        { tr: "The company claims to have submitted all the documents on time.", note: "will: the subject claims it" },
        { tr: "That may be, but I see it differently.", note: "mag: concession" }
      ]
    },
    vocab: [
      "the rumor, the hearsay",
      "the witness",
      "the claim, the assertion",
      "the source",
      "the proof, the evidence",
      "the statement, the testimony",
      "to claim, to assert",
      "to deny, to dispute",
      "to document, to substantiate",
      "alleged, so-called (with doubt)",
      "evidently, as it appears",
      "apparently, seemingly"
    ],
    exercises: [
      {
        q: "Newspaper headline: «Der Bürgermeister soll Geld angenommen haben.» What is the paper saying?",
        opts: [
          "that someone claims it, but the paper doesn't vouch for it",
          "that it was the mayor who stated he had taken money",
          "that the paper has proof that the mayor took money"
        ],
        why: "<b>soll</b> + perfect infinitive reports what others say, without taking responsibility for it. If the mayor himself were claiming it you would need <i>will</i>, and for a certainty the Perfekt would be enough (<i>hat Geld angenommen</i>)."
      },
      {
        q: "A newspaper writes: «Der Bürgermeister will das Geld nie angenommen haben.» Who maintains that he never took it?",
        opts: [
          "the mayor himself; the writer stays neutral or skeptical",
          "some witnesses; the paper doesn't vouch for it",
          "nobody: it is the mayor's intention never to accept money"
        ],
        why: "<b>will</b> + perfect infinitive: the claim is the subject's own. For “is said to” it would be <i>soll</i>; the reading “intends to” is not possible with a perfect infinitive."
      },
      {
        q: "An auditor comments on an error in the accounts and chooses the modal carefully. Which sequence goes from the greatest certainty to the least?",
        opts: [
          "Das muss ein Irrtum sein. - Das dürfte ein Irrtum sein. - Das könnte ein Irrtum sein.",
          "Das könnte ein Irrtum sein. - Das dürfte ein Irrtum sein. - Das muss ein Irrtum sein.",
          "Das dürfte ein Irrtum sein. - Das muss ein Irrtum sein. - Das könnte ein Irrtum sein."
        ],
        why: "<b>muss</b> is an almost certain deduction, <b>dürfte</b> indicates probability, <b>könnte</b> mere possibility. The second sequence is the reverse, the third swaps <i>muss</i> and <i>dürfte</i>."
      },
      {
        q: "From the radio news: «Laut Augenzeugen ___ der Täter in einem roten Auto geflohen sein.»",
        hint: "modal for what others say",
        why: "<b>soll</b>: <i>laut Augenzeugen</i> introduces an external source, and the speaker doesn't vouch for it."
      },
      {
        q: "A man defends himself: «Der Zeuge ___ den Mann nie zuvor gesehen haben, das behauptet er zumindest.»",
        hint: "he says so himself",
        why: "<b>will</b>: <i>das behauptet er zumindest</i> shows that the claim is the subject's own."
      },
      {
        q: "Fill in muss, soll or will.",
        tr: "The shutters are down and the mailbox is full: the Albers family must be on vacation, it's hard to think otherwise. According to a neighbor they left two weeks ago, but the caretaker claims he didn't notice anything.",
        why: "<i>muss</i>: deduction from the clues. <i>soll</i>: a neighbor says so (<i>einem Nachbarn zufolge</i>). <i>will</i>: the caretaker himself claims it."
      },
      {
        q: "Match each sentence to its meaning.",
        pairs: [
          "I deduce almost for certain that he is ill",
          "he is probably ill",
          "he is said to be ill",
          "he claims to have been ill"
        ]
      },
      {
        q: "Put the news item in order.",
        tr: "The minister is said to have destroyed the documents.",
        why: "<i>Der Minister soll die Akten vernichtet haben.</i> <i>soll</i> in second position, perfect infinitive at the end."
      },
      {
        q: "Translate: “The minister is said to have left the country as early as yesterday.” (die Ministerin, das Land, verlassen, sollen)",
        why: "<i>Die Ministerin soll das Land schon gestern verlassen haben</i>: <i>soll</i> renders the journalistic “is said to” and the perfect infinitive <i>verlassen haben</i> goes at the end; <i>schon</i> or <i>bereits</i> for “already”."
      },
      {
        tr: "The businessman is said to have embezzled several million euros. He claims he knew nothing about it, and his lawyer will probably reject the accusations tomorrow.",
        why: "Three modals, three sources: <i>soll</i> (others say so), <i>will</i> (he claims it), <i>dürfte</i> (probable supposition)."
      },
      {
        tr: "He is said to be ill, but it's probably an excuse.",
        why: "<i>soll</i> reports the rumor, <i>dürfte</i> expresses the speaker's own assessment."
      }
    ]
  },
  "lesson:c1-u04-l3": {
    theme: "Particles and nuances",
    title: "wohl, etwa, halt, eben",
    objectives: [
      "use wohl to soften a statement into a supposition",
      "recognize ja as a signal of something known or surprising",
      "tell etwa the particle from etwa meaning “about”",
      "express resignation with halt and eben and choose the right register"
    ],
    theory: [
      {
        h: "Small words, big differences",
        p: "Modal particles are not translated word for word: they show how the speaker sees what is being said. <strong>wohl</strong> turns a statement into a supposition (<em>Er ist wohl krank</em>, “he's probably ill”). <strong>ja</strong> presents a fact as already known to both or as surprising (<em>Du weißt ja, wie lange das dauert. Das ist ja ein Ding!</em>). <strong>etwa</strong> in a yes/no question shows surprise or suspicion, and the speaker expects the answer to be no (<em>Hast du etwa den Schlüssel vergessen?</em>, “you haven't forgotten the key, have you?”). <strong>halt</strong> and <strong>eben</strong> declare that something can't be changed (<em>Dann nehmen wir halt ein Taxi. Da kann man eben nichts machen.</em>)."
      },
      {
        h: "Position and register",
        p: "Particles stand unstressed after the verb and the pronouns, before the new information (<em>Er wird wohl noch schlafen</em>). They are typical of speech, chats and dialogues: in a formal text, such as a report or a letter to a client, they are usually avoided. <em>halt</em> is more colloquial and heard mostly in the south, <em>eben</em> is more neutral, but in most cases they are interchangeable."
      },
      {
        contrast: "English has no particles of this kind and does the same work with intonation, tag questions and small words and phrases: <em>surely</em>, <em>after all</em>, <em>you know</em>, <em>I suppose</em>, <em>oh well</em>, <em>that's just how it is</em>. <em>Hast du etwa ...?</em> is close to “you haven't ..., have you?” or “don't tell me you ...”, <em>Dann warten wir halt</em> to “then we'll just wait, oh well”, and <em>Du weißt ja</em> to “you know” or “as you know”. Where English changes the verb (<em>he'll be</em>) or adds <em>I guess</em>, German adds <em>wohl</em>. None of the five has a fixed equivalent: you learn the function. Beware of one trap: English <em>just</em> is not always <em>halt</em>, because <em>just</em> also means “only” (<em>nur</em>) and “a moment ago” (<em>gerade</em>)."
      },
      {
        trap: "<em>etwa</em> has two lives. Before a number it is an adverb, <em>etwa zwei Stunden</em>, “about two hours”. In a question with surprise it is a particle, <em>Ist er etwa krank?</em>. <em>wohl</em> can also be a full adverb: <em>Ich fühle mich hier wohl</em> means “I feel comfortable here”."
      },
      {
        tip: "Take the particle out and reread: the sentence stays correct but loses the speaker's stance. Then put it back and hear how it changes: <em>Das ist halt so</em> (resigned), <em>Das ist ja so</em> (you know it already), <em>Das ist wohl so</em> (I think so)."
      }
    ],
    grammar: {
      title: "Modal particles: wohl, ja, etwa, halt, eben",
      note: "<b>wohl</b>: supposition. <b>ja</b>: something known or surprising. <b>etwa</b>: in yes/no questions, surprise or suspicion. <b>halt / eben</b>: resignation. Register: spoken, not formal.",
      table: {
        head: ["particle", "effect", "example"],
        rows: [
          ["wohl", "supposition", "Er wird wohl noch schlafen."],
          ["ja", "something known or surprising", "Du weißt ja, wie lange das dauert."],
          ["etwa", "surprise or suspicion in a question, a no is expected", "Hast du etwa den Schlüssel vergessen?"],
          ["halt, eben", "resignation", "Da kann man eben nichts machen."],
          ["register", "spoken, avoid in formal writing", "Das ist halt so."]
        ]
      },
      examples: [
        { tr: "He's probably still asleep.", note: "wohl: supposition" },
        { tr: "You know how long it takes.", note: "ja: something both know" },
        { tr: "Surely that isn't all of it?", note: "etwa: surprise, a no is expected" },
        { tr: "The bus has gone, so we'll just walk, oh well.", note: "halt: resignation" },
        { tr: "There's nothing you can do about it.", note: "eben: resignation" },
        { tr: "You haven't forgotten the key, have you?", note: "etwa: suspicion in a yes/no question" }
      ]
    },
    vocab: [
      "the undertone, the tone (of a sentence)",
      "the nuance",
      "the expectation",
      "the surprise",
      "the resignation",
      "the obviousness, the matter of course",
      "to hint, to imply",
      "to reproach, to accuse of",
      "to accept, to put up with (without reacting)",
      "really (with a nuance of surprise or annoyance)",
      "anyway, in any case",
      "simply, completely"
    ],
    exercises: [
      {
        q: "A colleague asks you, in a surprised tone: «Hast du etwa schon gekündigt?» What does etwa express?",
        opts: [
          "surprise or suspicion: the speaker expects the answer to be no",
          "a neutral question: the speaker has no expectation at all",
          "a polite request for confirmation: the speaker expects a yes"
        ],
        why: "In a yes/no question <b>etwa</b> signals that the speaker doesn't expect a yes and finds the matter surprising or worrying (“you haven't already handed in your notice, have you?”)."
      },
      {
        q: "From the window you see the boss's car in the parking lot, but you haven't met him yet. Which sentence makes a supposition?",
        opts: [
          "Der Chef ist wohl schon da.",
          "Der Chef ist ja schon da!",
          "Der Chef ist halt schon da."
        ],
        why: "<b>wohl</b> turns the statement into a supposition (“he's probably already here”). <i>ja</i> would present the fact as certain and surprising, <i>halt</i> as something that can't be changed."
      },
      {
        q: "You are writing a formal report for a client and want to say that the rail connection is inadequate. Which sentence suits the register?",
        opts: [
          "Die Zugverbindung ist leider unzureichend.",
          "Die Zugverbindung ist halt schlecht.",
          "Die Zugverbindung ist eben nicht so toll."
        ],
        why: "The particles <i>halt</i> and <i>eben</i>, together with vocabulary such as <i>schlecht</i> and <i>nicht so toll</i>, are spoken language: a report avoids them and uses neutral vocabulary such as <i>unzureichend</i>."
      },
      {
        q: "The train is canceled and you look for an alternative, resigned: «Der Zug fällt aus? Dann nehmen wir ___ ein Taxi.»",
        hint: "“oh well”: halt or eben",
        why: "<b>halt</b> or <b>eben</b>: “oh well, we'll take a taxi”."
      },
      {
        q: "Faced with a surprising situation: «Das ist ___ ein Ding!»",
        hint: "particle of surprise",
        why: "<b>ja</b> expresses surprise: <i>Das ist ja ein Ding!</i> is a fixed exclamation, “well, that's something!”."
      },
      {
        q: "Complete the dialogue with the right particles.",
        tr: "“Where can Jonas be?” “He'll be stuck in traffic.” “He hasn't missed the bus again, has he?” “You know how it is: there's nothing you can do about it.”",
        why: "<i>wohl</i> for the supposition, <i>etwa</i> for the suspicious question, <i>ja</i> for what both know, <i>halt</i> or <i>eben</i> for the resignation. In the second gap <i>denn</i> also works, in the third <i>doch</i>."
      },
      {
        q: "In which sentences is etwa a modal particle and does not mean “about”?",
        opts: [
          "Bist du etwa schon fertig?",
          "Ist er etwa krank?",
          "Das Seminar dauert etwa zwei Stunden.",
          "Wir treffen uns in etwa einer Stunde."
        ],
        why: "In the first two <b>etwa</b> stands in a yes/no question and signals surprise or suspicion. In the last two it is an adverb and means “about”."
      },
      {
        q: "Put the question in order.",
        tr: "You haven't forgotten the key again, have you?",
        why: "<i>Hast du etwa schon wieder den Schlüssel vergessen?</i> Yes/no question: the verb opens the sentence and <i>etwa</i> follows the subject; it can also stand after <i>den Schlüssel</i>."
      },
      {
        q: "Translate: “The boss will still be in a meeting, so we'll wait, oh well.” (der Chef, die Besprechung, warten; use wohl for “will be”)",
        why: "<i>Der Chef wird wohl noch in einer Besprechung sein, dann warten wir eben</i>: <i>wohl</i> for “will be”, <i>eben</i> or <i>halt</i> for “oh well”. <i>ist wohl</i> and connectors such as <i>also</i> or <i>da</i> are also fine."
      },
      {
        tr: "I think Paul is ill. He never usually arrives late, and today he'll still be in bed. He hasn't got the flu, has he? Well, then let's start the meeting without him, oh well.",
        why: "Four particles in a few sentences: <i>ja</i> (we know it), <i>wohl</i> (supposition), <i>etwa</i> (suspicion), <i>eben</i> (resignation)."
      },
      {
        tr: "So we wait, oh well, the bus will be here soon.",
        why: "<i>eben</i> (oh well) and <i>ja</i> (you know already) in a single sentence."
      }
    ]
  },
  "lesson:c1-u04-test": {
    theme: "Test",
    title: "Test: He'll be tired",
    objectives: [
      "check the unit: the Futur of supposition, subjective modals and modal particles"
    ],
    theory: [
      {
        p: "Ten questions on the unit. You pass with 70%. Don't look back at the lessons while you answer: if you can't remember something, it's better to go back and review."
      }
    ],
    exercises: [
      {
        q: "A colleague is waiting for an answer: «Die Sekretärin ___ den Brief inzwischen abgeschickt haben.»",
        hint: "Futur II: form of werden",
        why: "<b>wird</b>: supposition about the past with the Futur II, <i>wird ... abgeschickt haben</i>."
      },
      {
        q: "From an article: «Laut einem Zeitungsbericht ___ der Konzern die Löhne gekürzt haben.»",
        hint: "modal for a reported rumor",
        why: "<b>soll</b>: <i>laut einem Zeitungsbericht</i> introduces an external source, the writer doesn't vouch for it."
      },
      {
        q: "A colleague looks at you with suspicion: «Hast du ___ schon wieder die Kaffeekasse geleert?»",
        hint: "“you haven't, have you...”",
        why: "<b>etwa</b>: suspicion in a yes/no question, a no is expected. <i>denn</i>, which is more neutral, also works."
      },
      {
        q: "An expert writes: «Der Brand dürfte durch einen Kurzschluss entstanden sein.» How sure is he?",
        opts: [
          "he considers it probable, but not certain",
          "he is absolutely certain",
          "he only reports what others say"
        ],
        why: "<b>dürfte</b> expresses probability. For certainty it would be <i>muss</i>, for reporting rumors <i>soll</i>."
      },
      {
        q: "A colleague walks into the office and finds the work already done: «Du hast ja schon alles erledigt!» What does ja express?",
        opts: [
          "the surprised observation of a fact one can see",
          "a supposition about something one can't see",
          "a question expecting a negative answer"
        ],
        why: "<b>ja</b> presents the fact as obvious and surprising. A supposition would be <i>wohl</i>, a question expecting a negative answer <i>etwa</i>."
      },
      {
        q: "A colleague says: «Er kann nicht krank sein, ich habe ihn eben noch gesehen.» What does it mean?",
        opts: [
          "it is impossible that he is ill",
          "he is not necessarily ill",
          "he is not allowed to be ill"
        ],
        why: "<b>kann nicht</b> is impossibility. “He is not necessarily ill” would be <i>muss nicht krank sein</i>."
      },
      {
        q: "Fill in soll, will or werden.",
        tr: "According to an article the minister is said to have destroyed documents. He claims he knows nothing about it, and his spokesman promises: by Friday we will have cleared everything up.",
        why: "<i>soll</i>: an article says so. <i>will</i>: the minister himself claims it. <i>werden</i>: Futur II of completion with <i>bis Freitag</i>."
      },
      {
        q: "Which sentences express a supposition and not an obligation or a permission?",
        opts: [
          "Sie dürfte inzwischen zu Hause sein.",
          "Das muss ein Irrtum sein.",
          "Du musst um acht da sein.",
          "Hier darf man nicht rauchen."
        ],
        why: "The first two assess probability: <i>dürfte</i> and <i>muss</i> with <i>sein</i>. In the last two the modals express obligation and prohibition."
      },
      {
        tr: "The match was canceled yesterday. The field is said to have been under water, but the coach claims he knows nothing about it. The fans will probably be disappointed, but that's football, oh well.",
        why: "<i>soll</i> (others say so), <i>will</i> (he claims it), <i>wohl</i> (supposition) and <i>eben</i> (resignation)."
      },
      {
        tr: "It can't be true, he has probably made a mistake.",
        why: "<i>kann nicht</i> for the impossibility, <i>dürfte</i> + perfect infinitive for the probable supposition about the past."
      }
    ]
  }
});
